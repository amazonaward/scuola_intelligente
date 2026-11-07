/* Mini motore 3D (nessuna libreria esterna).
   Scene: solid, solar, layers, molecule, globe. Trascina per ruotare, rotella/pizzico per lo zoom.
   Se c'è WebGL (js/gl3d.js) facce e sfere sono disegnate con z-buffer, luci e materiali;
   altrimenti si usa il vecchio disegno Canvas2D. L'API (Mini3D._) è la stessa in entrambi i casi. */
(function () {
  const TAU = Math.PI * 2;
  const GL = window.GL3D || null;
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  function shade(hex, f) {
    let r, g, b;
    if (hex[0] === '#') { const n = parseInt(hex.slice(1), 16); r = (n >> 16) & 255; g = (n >> 8) & 255; b = n & 255; }
    else { [r, g, b] = (hex.match(/[\d.]+/g) || [0, 0, 0]).map(Number); }
    if (f >= 1) { r += (255 - r) * (f - 1); g += (255 - g) * (f - 1); b += (255 - b) * (f - 1); }
    else { r *= f; g *= f; b *= f; }
    return `rgb(${r | 0},${g | 0},${b | 0})`;
  }

  class View {
    constructor(host, opts = {}) {
      this.host = host;
      this.wrap = el('div', 'm3d');
      this.canvas = el('canvas');
      this.wrap.appendChild(this.canvas);
      this.bar = el('div', 'm3d-bar');
      this.hint = el('span', 'm3d-hint', '🖐️ ' + t('w.drag'));
      this.bar.appendChild(this.hint);
      host.appendChild(this.wrap);
      host.appendChild(this.bar);
      this.ctx = this.canvas.getContext('2d');
      this.rx = opts.rx != null ? opts.rx : 0.35;
      this.ry = opts.ry != null ? opts.ry : 0.6;
      this.zoom = 1;
      this.auto = opts.auto !== false;
      this.height = opts.height || 380;
      this.draw = () => {};
      /* onDemand = true: ridisegna solo se cambia la vista o dopo un'interazione (risparmia batteria) */
      this.onDemand = false;
      this._dirty = 2;
      this._gl = !!(GL && GL.attach(this));
      this._bind();
      this._resize();
      this._ro = new ResizeObserver(() => this._resize());
      this._ro.observe(this.wrap);
      this._loop = this._loop.bind(this);
      this._last = performance.now();
      requestAnimationFrame(this._loop);
    }
    /* chiede di ridisegnare (per le scene onDemand) */
    invalidate() { this._dirty = Math.max(this._dirty, 2); }
    button(label, fn, cls) { const b = el('button', 'btn btn-small ' + (cls || ''), label); b.type = 'button'; b.onclick = () => fn(b); this.bar.insertBefore(b, this.hint); return b; }
    _bind() {
      let drag = null; const pts = new Map(); let pinch = null;
      const c = this.canvas;
      c.style.touchAction = 'none';
      c.addEventListener('pointerdown', (e) => { c.setPointerCapture(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]); drag = [e.clientX, e.clientY]; this.auto = false; this.touched = true; });
      c.addEventListener('pointermove', (e) => {
        if (!pts.has(e.pointerId)) return;
        pts.set(e.pointerId, [e.clientX, e.clientY]);
        if (pts.size === 2) {
          const [a, b] = [...pts.values()]; const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
          if (pinch) this.zoom = Math.min(3, Math.max(0.4, this.zoom * d / pinch)); pinch = d; return;
        }
        if (!drag) return;
        this.ry += (e.clientX - drag[0]) * 0.01;
        this.rx = Math.max(-1.55, Math.min(1.55, this.rx + (e.clientY - drag[1]) * 0.01));
        drag = [e.clientX, e.clientY];
      });
      const up = (e) => { pts.delete(e.pointerId); pinch = null; drag = pts.size ? [...pts.values()][0] : null; };
      c.addEventListener('pointerup', up); c.addEventListener('pointercancel', up);
      c.addEventListener('wheel', (e) => { e.preventDefault(); this.zoom = Math.min(3, Math.max(0.4, this.zoom * (e.deltaY < 0 ? 1.1 : 0.9))); }, { passive: false });
      // qualsiasi interazione nella scena (bottoni, cursori, chip) fa ridisegnare
      const inv = () => this.invalidate();
      ['pointerdown', 'pointerup', 'click', 'input', 'change', 'keydown'].forEach((ev) => this.host.addEventListener(ev, inv, true));
    }
    _resize() {
      const w = this.wrap.clientWidth || 600; const h = Math.min(this.height, Math.max(260, w * 0.75));
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = w * dpr; this.canvas.height = h * dpr;
      this.canvas.style.height = h + 'px';
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.W = w; this.H = h; this._dpr = dpr;
      this.invalidate();
    }
    _loop(now) {
      if (!this.wrap.isConnected) { this._ro.disconnect(); if (this.dispose) { try { this.dispose(); } catch (e) { /* ignore */ } } return; }
      const dt = Math.min(0.05, (now - this._last) / 1000); this._last = now;
      if (this.auto) this.ry += dt * (this.autoSpeed || 0.35);
      const visible = this.wrap.getBoundingClientRect();
      if (visible.bottom > 0 && visible.top < innerHeight) {
        const sig = this.rx + ',' + this.ry + ',' + this.zoom + ',' + this.W + ',' + this.H;
        if (!this.onDemand || this._dirty > 0 || sig !== this._sig) {
          this._sig = sig; if (this._dirty > 0) this._dirty--;
          this.ctx.clearRect(0, 0, this.W, this.H);
          this.scale = Math.min(this.W, this.H) * 0.32 * this.zoom;
          this._cache();
          const g = this._gl && GL.begin(this);
          try { this.draw(this.ctx, dt); }
          catch (e) { if (!this._err) { this._err = true; console.error(e); } }
          finally { if (g) GL.end(this); }
        }
      }
      requestAnimationFrame(this._loop);
    }
    _cache() { this.cy_ = Math.cos(this.ry); this.sy_ = Math.sin(this.ry); this.cx_ = Math.cos(this.rx); this.sx_ = Math.sin(this.rx); }
    /* ruota un punto: restituisce [x, y, z] in coordinate camera (z verso chi guarda) */
    rot(p) {
      const x1 = p[0] * this.cy_ + p[2] * this.sy_;
      const z1 = -p[0] * this.sy_ + p[2] * this.cy_;
      const y2 = p[1] * this.cx_ - z1 * this.sx_;
      const z2 = p[1] * this.sx_ + z1 * this.cx_;
      return [x1, y2, z2];
    }
    proj(r) {
      const cam = 6; const f = cam / (cam - r[2]);
      return [this.W / 2 + r[0] * this.scale * f, this.H / 2 - r[1] * this.scale * f, f];
    }
    P(p) { return this.proj(this.rot(p)); }
  }

  /* la vista sta disegnando con WebGL in questo momento? */
  const glOn = (v, ctx) => !!(v && v._gl && GL.on(v, ctx || v.ctx) && v.proj === View.prototype.proj);

  /* ---------- mesh dei solidi ---------- */
  function ring(n, r, y, phase = 0) { const a = []; for (let i = 0; i < n; i++) { const t = phase + (i / n) * TAU; a.push([r * Math.cos(t), y, r * Math.sin(t)]); } return a; }
  function meshFor(shape, o) {
    const faces = []; const smooth = ['cylinder', 'cone', 'sphere'].includes(shape);
    const add = (pts, kind) => faces.push({ pts, kind });
    let dims = [], info = null;
    if (shape === 'cube' || shape === 'box') {
      const w = shape === 'cube' ? 1.4 : (o.w || 2), h = shape === 'cube' ? 1.4 : (o.h || 1), d = shape === 'cube' ? 1.4 : (o.d || 1.2);
      const x = w / 2, y = h / 2, z = d / 2;
      const v = [[-x, -y, -z], [x, -y, -z], [x, y, -z], [-x, y, -z], [-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z]];
      [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [3, 2, 6, 7], [0, 3, 7, 4], [1, 2, 6, 5]].forEach((f) => add(f.map((i) => v[i])));
      dims = shape === 'cube' ? [{ a: v[4], b: v[5], label: 'l' }] : [{ a: v[4], b: v[5], label: 'a' }, { a: v[5], b: v[1], label: 'b' }, { a: v[5], b: v[6], label: 'c' }];
      info = [6, 12, 8];
    } else if (shape === 'prism' || shape === 'pyramid') {
      const n = o.n || (shape === 'prism' ? 6 : 4), r = o.r || 1, h = o.h || 1.8;
      const base = ring(n, r, -h / 2, Math.PI / n + (n === 4 ? 0 : 0));
      if (shape === 'prism') {
        const top = ring(n, r, h / 2, Math.PI / n);
        for (let i = 0; i < n; i++) add([base[i], base[(i + 1) % n], top[(i + 1) % n], top[i]]);
        add(top); add(base);
        dims = [{ a: base[0], b: top[0], label: 'h' }];
        info = [n + 2, 3 * n, 2 * n];
      } else {
        const apex = [0, h / 2, 0];
        for (let i = 0; i < n; i++) add([base[i], base[(i + 1) % n], apex]);
        add(base);
        dims = [{ a: [0, -h / 2, 0], b: apex, label: 'h', dashed: true }];
        info = [n + 1, 2 * n, n + 1];
      }
    } else if (shape === 'cylinder' || shape === 'cone') {
      const n = 40, r = o.r || 1, h = o.h || 1.8;
      const base = ring(n, r, -h / 2);
      if (shape === 'cylinder') {
        const top = ring(n, r, h / 2);
        for (let i = 0; i < n; i++) add([base[i], base[(i + 1) % n], top[(i + 1) % n], top[i]], 'side');
        add(top, 'cap'); add(base, 'cap');
        dims = [{ a: [0, h / 2, 0], b: [r, h / 2, 0], label: 'r' }, { a: [r, -h / 2, 0], b: [r, h / 2, 0], label: 'h' }];
      } else {
        const apex = [0, h / 2, 0];
        for (let i = 0; i < n; i++) add([base[i], base[(i + 1) % n], apex], 'side');
        add(base, 'cap');
        dims = [{ a: [0, -h / 2, 0], b: [r, -h / 2, 0], label: 'r' }, { a: [0, -h / 2, 0], b: apex, label: 'h', dashed: true }, { a: [r, -h / 2, 0], b: apex, label: 'a' }];
      }
    } else if (shape === 'sphere') {
      const r = o.r || 1.2, la = 14, lo = 28;
      const pt = (i, j) => { const th = (i / la) * Math.PI, ph = (j / lo) * TAU; return [r * Math.sin(th) * Math.cos(ph), r * Math.cos(th), r * Math.sin(th) * Math.sin(ph)]; };
      for (let i = 0; i < la; i++) for (let j = 0; j < lo; j++) add([pt(i, j), pt(i, j + 1), pt(i + 1, j + 1), pt(i + 1, j)], 'side');
      dims = [{ a: [0, 0, 0], b: [r, 0, 0], label: 'r' }];
    }
    return { faces, dims, info, smooth };
  }

  const LIGHT = (() => { const l = [0.4, 0.7, 0.6]; const m = Math.hypot(...l); return l.map((x) => x / m); })();
  /* facce piane (poligoni) — con WebGL: z-buffer, normali morbide sulle superfici curve, spigoli sottili.
     opzioni nuove (facoltative): smooth, specular, shininess, rim, emissive, alpha, bevel, edgeColor, edgeWidth */
  function drawFaces(v, ctx, faces, opts) {
    const o = opts || {};
    if (glOn(v, ctx) && GL.plainTransform(ctx, v)) { GL.faces(v, faces, o.color, o); return; }
    const color = o.color, edges = o.edges !== false, cull = !!o.cull;
    const list = [];
    for (const f of faces) {
      const r = f.pts.map((p) => v.rot(p));
      const a = r[0], b = r[1], c = r[2];
      const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], wx = c[0] - a[0], wy = c[1] - a[1], wz = c[2] - a[2];
      let nx = uy * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - uy * wx;
      const m = Math.hypot(nx, ny, nz) || 1; nx /= m; ny /= m; nz /= m;
      if (f.normalHint) { const h = v.rot(f.normalHint); if (nx * h[0] + ny * h[1] + nz * h[2] < 0) { nx = -nx; ny = -ny; nz = -nz; } }
      if (cull && nz < 0) continue;
      const z = r.reduce((s, p) => s + p[2], 0) / r.length;
      list.push({ f, r, z, lit: Math.abs(nx * LIGHT[0] + ny * LIGHT[1] + nz * LIGHT[2]) });
    }
    list.sort((p, q) => p.z - q.z);
    for (const it of list) {
      const s = it.r.map((p) => v.proj(p));
      ctx.beginPath(); s.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
      const col = shade(it.f.color || color, 0.55 + 0.6 * it.lit);
      ctx.fillStyle = col; ctx.fill();
      if (edges && it.f.kind !== 'side') { ctx.strokeStyle = 'rgba(20,30,60,.75)'; ctx.lineWidth = 1.6; ctx.stroke(); }
      else { ctx.strokeStyle = col; ctx.lineWidth = 0.8; ctx.stroke(); }
    }
  }
  function drawDims(v, ctx, dims) {
    ctx.save();
    for (const d of dims) {
      const a = v.P(d.a), b = v.P(d.b);
      ctx.strokeStyle = '#e11d48'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.setLineDash(d.dashed ? [6, 5] : []);
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
      ctx.setLineDash([]);
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      ctx.shadowColor = 'rgba(15,23,42,.25)'; ctx.shadowBlur = 6; ctx.shadowOffsetY = 1;
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(mx, my, 13, 0, TAU); ctx.fill();
      ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
      ctx.strokeStyle = '#e11d48'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#e11d48'; ctx.font = 'bold 16px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(d.label, mx, my + 1);
    }
    ctx.restore();
  }
  function label(ctx, x, y, text, color = '#1f2937', align = 'left', halo = 'rgba(255,255,255,.9)') {
    ctx.font = '600 13px system-ui, sans-serif'; ctx.textAlign = align; ctx.textBaseline = 'middle';
    ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.strokeStyle = halo; ctx.strokeText(text, x, y);
    ctx.fillStyle = color; ctx.fillText(text, x, y);
  }
  /* sfera "a schermo": x, y, r in px. Con WebGL è una vera sfera illuminata (per pixel); glow = alone additivo */
  function ball(ctx, x, y, r, color, glow) {
    const v = GL && GL.viewOf(ctx);
    if (v && GL.on(v, ctx)) { GL.ball(v, ctx, x, y, r, color, glow); return; }
    const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r);
    g.addColorStop(0, shade(color, 1.6)); g.addColorStop(0.6, color); g.addColorStop(1, shade(color, 0.45));
    if (glow) { ctx.save(); ctx.shadowColor = color; ctx.shadowBlur = r; }
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, Math.max(1, r), 0, TAU); ctx.fill();
    if (glow) ctx.restore();
  }

  /* ---------- primitive 3D in più (con ripiego 2D) ---------- */
  /* sfera in coordinate mondo; mat: {specular, shininess, rim, emissive, pattern, tex, spin, light, glow} */
  function sphere(v, ctx, pos, r, color, mat) {
    if (glOn(v, ctx)) { GL.sphere(v, pos, r, color, mat); return; }
    const s = v.P(pos); ball(ctx, s[0], s[1], r * v.scale * s[2], color, mat && mat.glow);
  }
  /* tante sfere: list = [{p, r, color}] */
  function spheres(v, ctx, list, mat) {
    if (glOn(v, ctx)) { GL.spheres(v, list, mat); return; }
    const it = list.map((s) => { const rr = v.rot(s.p); return { s, rr, q: v.proj(rr) }; }).sort((a, b) => a.rr[2] - b.rr[2]);
    for (const k of it) ball(ctx, k.q[0], k.q[1], k.s.r * v.scale * k.q[2], k.s.color);
  }
  /* cilindri (legami): list = [{a, b, r, color}] */
  function cylinders(v, ctx, list, mat) {
    if (glOn(v, ctx)) { GL.cylinders(v, list, mat); return; }
    for (const c of list) { const p = v.P(c.a), q = v.P(c.b); ctx.strokeStyle = c.color; ctx.lineWidth = 2 * c.r * v.scale * p[2]; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); ctx.stroke(); }
  }
  /* polilinea 3D (nascosta dagli oggetti davanti, con WebGL) */
  function line3d(v, ctx, pts, color, width, opts) {
    opts = opts || {};
    if (glOn(v, ctx)) { GL.lines(v, pts, color, width, Object.assign({ strip: true }, opts)); return; }
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width || 1.5; ctx.beginPath();
    pts.forEach((p, i) => { const q = v.P(p); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); });
    if (opts.closed) ctx.closePath();
    ctx.stroke(); ctx.restore();
  }
  /* ombra morbida a terra sotto un oggetto */
  function softShadow(v, ctx, center, rx, rz, alpha) {
    if (glOn(v, ctx)) { GL.shadow(v, center, rx, rz == null ? rx : rz, alpha); return; }
  }

  /* texture della Terra (equirettangolare) disegnata dai contorni GEO */
  function earthTexture() {
    if (!GL || !GL.ok || !window.GEO) return null;
    return GL.texture('earth', () => {
      const W = 2048, H = 1024, c = document.createElement('canvas'); c.width = W; c.height = H;
      const x = c.getContext('2d');
      const X = (lo) => ((lo + 180) / 360) * W, Y = (la) => ((90 - la) / 180) * H;
      const og = x.createLinearGradient(0, 0, 0, H);
      og.addColorStop(0, '#1d4f7a'); og.addColorStop(0.25, '#0d4a8c'); og.addColorStop(0.5, '#0b55a0'); og.addColorStop(0.75, '#0d4a8c'); og.addColorStop(1, '#1d4f7a');
      x.fillStyle = og; x.fillRect(0, 0, W, H);
      const path = (ring) => { ring.forEach(([lo, la], i) => (i ? x.lineTo(X(lo), Y(la)) : x.moveTo(X(lo), Y(la)))); x.closePath(); };
      const all = (list) => { x.beginPath(); list.forEach(path); };
      // acque basse vicino alle coste
      x.save(); x.shadowColor = '#2b8fd0'; x.shadowBlur = 22; x.fillStyle = '#2b8fd0'; all(GEO.land); x.fill(); x.fill(); x.restore();
      // terre: colori per fascia di latitudine (ghiacci, tundra, foreste, deserti, tropici)
      const lg = x.createLinearGradient(0, 0, 0, H);
      [[90, '#f8fafc'], [74, '#e7edf3'], [67, '#9aa57a'], [58, '#4f7d3c'], [45, '#5f8a3c'], [36, '#9a9a58'], [28, '#c9ab70'], [20, '#c2a26a'], [12, '#5b8d36'], [0, '#2e7a33'],
        [-10, '#3c8636'], [-20, '#ad9561'], [-30, '#9a9a5a'], [-42, '#5f8a42'], [-55, '#6f8c5a'], [-62, '#e2e8f0'], [-90, '#f8fafc']].forEach(([la, col]) => lg.addColorStop((90 - la) / 180, col));
      x.fillStyle = lg; all(GEO.land); x.fill();
      // grana del terreno (pseudo-casuale ma sempre uguale)
      x.save(); all(GEO.land); x.clip();
      let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
      for (let i = 0; i < 5000; i++) {
        const px = rnd() * W, py = rnd() * H, r = 2 + rnd() * 16;
        x.fillStyle = rnd() < 0.55 ? 'rgba(25,55,20,.09)' : 'rgba(255,236,190,.07)';
        x.beginPath(); x.arc(px, py, r, 0, TAU); x.fill();
      }
      x.restore();
      x.strokeStyle = 'rgba(30,50,25,.35)'; x.lineWidth = 1.2; all(GEO.land); x.stroke();
      x.fillStyle = '#1b5a96'; all(GEO.water); x.fill();
      return c;
    });
  }
  /* matrice di rotazione (colonne) per orientare una sfera: inclinazione dell'asse e rotazione su sé stessa */
  function spinMat(tilt, spin) {
    // corpo = Ry(-spin) * Rz(-tilt) * mondo
    const ct = Math.cos(-tilt), st = Math.sin(-tilt), cs = Math.cos(-spin), ss = Math.sin(-spin);
    const Rz = [[ct, -st, 0], [st, ct, 0], [0, 0, 1]], Ry = [[cs, 0, ss], [0, 1, 0], [-ss, 0, cs]];
    const M = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) for (let k = 0; k < 3; k++) M[i][j] += Ry[i][k] * Rz[k][j];
    return [M[0][0], M[1][0], M[2][0], M[0][1], M[1][1], M[2][1], M[0][2], M[1][2], M[2][2]];
  }

  /* ---------- scene ---------- */
  const BG_SOFT = 'radial-gradient(circle at 50% 28%, #ffffff 0%, #eef2fb 52%, #d8e1f2 100%)';
  const Scenes = {
    solid(host, o) {
      const v = new View(host);
      v.onDemand = true;
      if (v._gl) { v.wrap.style.background = BG_SOFT; GL.setFog(v, '#e3e9f6', 0.22); }
      const shapes = o.shapes || [o.shape || 'cube'];
      let cur = o.shape || shapes[0], mesh, foot = { y: -1, r: 1 };
      let showLabels = o.labels !== false;
      const infoBox = el('div', 'm3d-info');
      v.wrap.appendChild(infoBox);
      const setShape = (s) => {
        cur = s; mesh = meshFor(s, o);
        let y = 1e9, r = 0; for (const f of mesh.faces) for (const p of f.pts) { y = Math.min(y, p[1]); r = Math.max(r, Math.hypot(p[0], p[2])); }
        foot = { y, r };
        infoBox.innerHTML = `<b>${t('shape.' + s)}</b>` + (mesh.info ? `<br>${t('w.faces')}: ${mesh.info[0]} · ${t('w.edges')}: ${mesh.info[1]} · ${t('w.vertices')}: ${mesh.info[2]}` : '');
        btns.forEach((b) => b.classList.toggle('active', b.dataset.s === s));
        v.invalidate();
      };
      const btns = shapes.length > 1 ? shapes.map((s) => { const b = v.button(t('shape.' + s), () => setShape(s)); b.dataset.s = s; return b; }) : [];
      v.button('🏷️ ' + t('w.labels'), (b) => { showLabels = !showLabels; b.classList.toggle('active', showLabels); }, showLabels ? 'active' : '');
      setShape(cur);
      v.draw = (ctx) => {
        softShadow(v, ctx, [0, foot.y - 0.02, 0], foot.r * 1.35, foot.r * 1.35, 0.3);
        drawFaces(v, ctx, mesh.faces, { color: o.color || '#60a5fa', edges: true, cull: false, specular: 0.45, shininess: 48 });
        if (showLabels) drawDims(v, ctx, mesh.dims);
      };
      return v;
    },

    solar(host, o) {
      const v = new View(host, { rx: 0.45, auto: false });
      v.height = 440;
      const PAT = { mercury: 4, venus: 5, earth: 7, mars: 13, jupiter: 2, saturn: 3, uranus: 6, neptune: 6 };
      const TILT = { mercury: 0.03, venus: 0.05, earth: 0.41, mars: 0.44, jupiter: 0.05, saturn: 0.47, uranus: 1.71, neptune: 0.49 };
      const SPIN = { mercury: 0.2, venus: -0.1, earth: 1, mars: 1, jupiter: 2.2, saturn: 2, uranus: -1.4, neptune: 1.5 };
      const P = [
        ['mercury', 0.24, 0.38, '#a8a29e'], ['venus', 0.62, 0.95, '#f5c16c'], ['earth', 1, 1, '#3b82f6'], ['mars', 1.88, 0.53, '#ef4444'],
        ['jupiter', 11.86, 3.2, '#d6a26b'], ['saturn', 29.46, 2.7, '#e8cf8f'], ['uranus', 84, 1.8, '#7dd3fc'], ['neptune', 164.8, 1.75, '#4f6df5']
      ].map(([id, per, size, color], i) => ({ id, per, size, color, dist: 0.55 + i * 0.36, ang: Math.random() * TAU }));
      if (v._gl) { P.find((p) => p.id === 'mars').color = '#c1502e'; P.find((p) => p.id === 'neptune').color = '#3d63e0'; }
      let time = 0, spinT = 0, speed = 1, playing = true, labels = o.labels !== false;
      v.button('⏯ ' + t('w.pause'), (b) => { playing = !playing; b.innerHTML = '⏯ ' + t(playing ? 'w.pause' : 'w.play'); });
      v.button('🐢', () => { speed = Math.max(0.125, speed / 2); });
      v.button('🐇', () => { speed = Math.min(16, speed * 2); });
      v.button('🏷️ ' + t('w.labels'), (b) => { labels = !labels; b.classList.toggle('active', labels); }, labels ? 'active' : '');
      const stars = Array.from({ length: v._gl ? 220 : 90 }, () => [Math.random(), Math.random(), Math.random() * 1.2, Math.random()]);
      const orbit = (d) => { const a = []; for (let i = 0; i < 128; i++) { const t2 = (i / 128) * TAU; a.push([d * Math.cos(t2), 0, d * Math.sin(t2)]); } return a; };
      const orbits = P.map((p) => orbit(p.dist));
      const drawGL = (ctx, dt) => {
        if (playing) spinT += dt * speed * 0.6;
        const W = v.W, H = v.H;
        const bg = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.45, Math.max(W, H) * 0.75);
        bg.addColorStop(0, '#1a2250'); bg.addColorStop(0.5, '#0c1230'); bg.addColorStop(1, '#04060f');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
        const neb = ctx.createRadialGradient(W * 0.2, H * 0.25, 0, W * 0.2, H * 0.25, W * 0.35);
        neb.addColorStop(0, 'rgba(120,80,200,.10)'); neb.addColorStop(1, 'rgba(120,80,200,0)');
        ctx.fillStyle = neb; ctx.fillRect(0, 0, W, H);
        for (const s of stars) {
          ctx.globalAlpha = 0.25 + s[2] * 0.55;
          ctx.fillStyle = s[3] < 0.15 ? '#ffd9a8' : s[3] < 0.3 ? '#bcd3ff' : '#ffffff';
          const r = s[2] > 1.1 ? 1.3 : 0.75; ctx.beginPath(); ctx.arc(s[0] * W, s[1] * H, r, 0, TAU); ctx.fill();
        }
        ctx.globalAlpha = 1;
        // scala adatta: le orbite riempiono la scena
        v.scale = Math.min(W * 0.37 / 3.1, H / 3.1) * v.zoom;
        orbits.forEach((pts) => line3d(v, ctx, pts, 'rgba(170,190,255,.26)', 1, { closed: true }));
        const sunR = 0.26;
        const sp = v.P([0, 0, 0]);
        GL.glow(v, [0, 0, 0], sunR * v.scale * sp[2] * 3.3, '#ff9d2e', 0.85);
        sphere(v, ctx, [0, 0, 0], sunR, '#ffffff', { pattern: 1, time: spinT * 3 });
        const sun = { point: [0, 0, 0] };
        const items = [{ id: 'sun', pos: [0, 0, 0], r: sunR }];
        const earthTex = earthTexture();
        for (const p of P) {
          const a = p.ang + (time / p.per) * TAU;
          const pos = [p.dist * Math.cos(a), 0, -p.dist * Math.sin(a)];
          const r = 0.038 * Math.pow(p.size, 0.7);
          const tilt = TILT[p.id], spin = spinT * SPIN[p.id];
          const mat = { pattern: p.id === 'earth' && !earthTex ? 0 : PAT[p.id], tex: earthTex, spin: spinMat(tilt, spin), light: sun, ambient: [0.32, 1.35, 0], rim: 0.18, rimColor: p.id === 'earth' ? '#7cc4ff' : '#c7d2fe', specular: 0.15, shininess: 30, time: spinT };
          sphere(v, ctx, pos, r, p.color, mat);
          if (p.id === 'saturn') {
            const ct = Math.cos(tilt), st = Math.sin(tilt);
            // anello nel piano equatoriale (inclinato come l'asse)
            const model = [ct * r, st * r, 0, 0, -st * r, ct * r, 0, 0, 0, 0, r, 0, pos[0], pos[1], pos[2], 1];
            GL.annulus(v, 1.25, 2.35, model, '#e9d7aa', { pattern: 9, light: sun, ambient: [0.45, 1.1, 0], rim: 0, specular: 0 });
          }
          items.push({ id: p.id, pos, r });
          if (p.id === 'earth') {
            const m = time * 13.4 * TAU; const mp = [pos[0] + 0.085 * Math.cos(m), 0, pos[2] + 0.085 * Math.sin(m)];
            sphere(v, ctx, mp, 0.011, '#cbd5e1', { pattern: 4, light: sun, ambient: [0.3, 1.3, 0], rim: 0.1, specular: 0.02 });
          }
        }
        if (labels) {
          for (const it of items) {
            const s = v.P(it.pos); const rr = it.r * v.scale * s[2];
            label(ctx, s[0] + rr + 5, s[1], t('planet.' + it.id), '#f8fafc', 'left', 'rgba(8,12,32,.85)');
          }
        }
        ctx.save(); ctx.font = '12px system-ui'; ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.textAlign = 'left';
        ctx.fillText(`${t('w.speed')}: ×${speed}`, 10, v.H - 10); ctx.restore();
      };
      v.draw = (ctx, dt) => {
        if (playing) time += dt * speed * 0.12;
        if (glOn(v, ctx)) { drawGL(ctx, dt); return; }
        ctx.fillStyle = '#0b1026'; ctx.fillRect(0, 0, v.W, v.H);
        ctx.fillStyle = '#fff'; for (const s of stars) { ctx.globalAlpha = 0.3 + s[2] * 0.5; ctx.fillRect(s[0] * v.W, s[1] * v.H, 1.3, 1.3); } ctx.globalAlpha = 1;
        v.scale = Math.min(v.W, v.H) * 0.15 * v.zoom;
        ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(255,255,255,.18)';
        for (const p of P) {
          ctx.beginPath();
          for (let i = 0; i <= 72; i++) { const a = (i / 72) * TAU; const q = v.P([p.dist * Math.cos(a), 0, p.dist * Math.sin(a)]); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); }
          ctx.stroke();
        }
        const items = [{ id: 'sun', pos: [0, 0, 0], r: 0.28, color: '#fbbf24', glow: true }];
        for (const p of P) {
          const a = p.ang + (time / p.per) * TAU;
          const pos = [p.dist * Math.cos(a), 0, -p.dist * Math.sin(a)];
          items.push({ id: p.id, pos, r: 0.035 * p.size, color: p.color, ring: p.id === 'saturn' });
          if (p.id === 'earth') { const m = time * 13.4 * TAU; items.push({ id: 'moon', pos: [pos[0] + 0.07 * Math.cos(m), 0, pos[2] + 0.07 * Math.sin(m)], r: 0.012, color: '#d4d4d8', small: true }); }
        }
        items.forEach((it) => { it.rr = v.rot(it.pos); it.s = v.proj(it.rr); });
        items.sort((a, b) => a.rr[2] - b.rr[2]);
        for (const it of items) {
          const r = it.r * v.scale * it.s[2];
          if (it.ring) {
            ctx.strokeStyle = 'rgba(232,207,143,.8)'; ctx.lineWidth = 2.2; ctx.beginPath();
            for (let i = 0; i <= 40; i++) { const a = (i / 40) * TAU; const q = v.P([it.pos[0] + it.r * 2 * Math.cos(a), 0, it.pos[2] + it.r * 2 * Math.sin(a)]); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); }
            ctx.stroke();
          }
          ball(ctx, it.s[0], it.s[1], r, it.color, it.glow);
          if (labels && !it.small) { ctx.save(); label(ctx, it.s[0] + r + 5, it.s[1], t('planet.' + it.id), '#f8fafc', 'left', 'rgba(11,16,38,.9)'); ctx.restore(); }
        }
        ctx.save(); ctx.font = '12px system-ui'; ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.textAlign = 'left';
        ctx.fillText(`${t('w.speed')}: ×${speed}`, 10, v.H - 10); ctx.restore();
      };
      return v;
    },

    layers(host, o) {
      const v = new View(host, { rx: 0.45, ry: -0.785 });
      v.autoSpeed = 0.15;
      v.onDemand = true;
      const gl = v._gl;
      if (gl) { v.wrap.style.background = BG_SOFT; GL.setFog(v, '#e3e9f6', 0.15); }
      const L = (o.layers || []).slice().sort((a, b) => b.r - a.r);
      const R0 = L[0] ? L[0].r : 1; const S = 1.25 / R0;
      const faces = [];
      // superficie esterna con un ottante tagliato
      const la = gl ? 36 : 18, lo = gl ? 72 : 36, R = L[0].r * S;
      const pt = (i, j) => { const th = (i / la) * Math.PI, ph = (j / lo) * TAU; return [R * Math.sin(th) * Math.cos(ph), R * Math.cos(th), R * Math.sin(th) * Math.sin(ph)]; };
      for (let i = 0; i < la; i++) for (let j = 0; j < lo; j++) {
        const c = pt(i + 0.5, j + 0.5);
        if (c[0] > 0 && c[1] > 0 && c[2] > 0) continue;
        faces.push({ pts: [pt(i, j), pt(i, j + 1), pt(i + 1, j + 1), pt(i + 1, j)], color: L[0].color, kind: 'side', normalHint: c, outer: true });
      }
      // facce di taglio sui tre piani
      const N = gl ? 32 : 10;
      L.forEach((layer, k) => {
        const ro = layer.r * S, ri = L[k + 1] ? L[k + 1].r * S : 0;
        for (let i = 0; i < N; i++) {
          const a0 = (i / N) * Math.PI / 2, a1 = ((i + 1) / N) * Math.PI / 2;
          const q = (r, a) => [r * Math.cos(a), r * Math.sin(a)];
          const [o0, o1, i0, i1] = [q(ro, a0), q(ro, a1), q(ri, a0), q(ri, a1)];
          // piano x=0 (y,z), piano y=0 (x,z), piano z=0 (x,y)
          faces.push({ pts: [[0, o0[0], o0[1]], [0, o1[0], o1[1]], [0, i1[0], i1[1]], [0, i0[0], i0[1]]], color: layer.color, kind: 'cut' });
          faces.push({ pts: [[o0[0], 0, o0[1]], [o1[0], 0, o1[1]], [i1[0], 0, i1[1]], [i0[0], 0, i0[1]]], color: layer.color, kind: 'cut' });
          faces.push({ pts: [[o0[0], o0[1], 0], [o1[0], o1[1], 0], [i1[0], i1[1], 0], [i0[0], i0[1], 0]], color: layer.color, kind: 'cut' });
        }
      });
      let labels = true;
      v.button('🏷️ ' + t('w.labels'), (b) => { labels = !labels; b.classList.toggle('active', labels); }, 'active');
      const legend = el('div', 'm3d-legend', L.map((l) => `<span><i style="background:${l.color}"></i>${l.label || ''}</span>`).join(''));
      host.appendChild(legend);
      const outer = faces.filter((f) => f.outer), cuts = faces.filter((f) => !f.outer);
      v.draw = (ctx) => {
        if (glOn(v, ctx)) {
          softShadow(v, ctx, [0, -R - 0.03, 0], R * 1.2, R * 1.2, 0.26);
          drawFaces(v, ctx, faces, { edges: false, specular: 0.3, shininess: 30 });
        } else {
          // ordina: facce esterne con culling, tagli sempre visibili
          drawFaces(v, ctx, outer.filter((f) => v.rot(f.normalHint)[2] < 0), { edges: false });
          drawFaces(v, ctx, cuts, { edges: false });
          drawFaces(v, ctx, outer.filter((f) => v.rot(f.normalHint)[2] >= 0), { edges: false });
        }
        if (labels) {
          L.forEach((layer, k) => {
            const ro = layer.r * S, ri = L[k + 1] ? L[k + 1].r * S : 0; const rm = (ro + ri) / 2;
            const a = Math.PI / 4 + (k % 2 ? 0.25 : -0.25);
            const p = v.P([0, rm * Math.cos(a), rm * Math.sin(a)]);
            ctx.fillStyle = '#111'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(p[0], p[1], 3.5, 0, TAU); ctx.fill(); ctx.stroke();
            const lx = v.W - 12; const ly = 22 + k * 24;
            ctx.font = '600 13px system-ui, sans-serif';
            ctx.strokeStyle = 'rgba(17,17,17,.55)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(lx - ctx.measureText(layer.label || '').width - 30, ly); ctx.stroke();
            label(ctx, lx, ly, layer.label || '', '#111', 'right');
          });
        }
      };
      return v;
    },

    molecule(host, o) {
      const v = new View(host);
      v.onDemand = true;
      const atoms = o.atoms || [], bonds = o.bonds || [];
      if (v._gl) { v.wrap.style.background = 'radial-gradient(circle at 50% 30%, #ffffff 0%, #f1f0fb 55%, #dcdcf0 100%)'; GL.setFog(v, '#e6e6f4', 0.18); }
      let ymin = 0, ext = 0.5;
      atoms.forEach((a) => { ymin = Math.min(ymin, a.y - (a.r || 0.4)); ext = Math.max(ext, Math.hypot(a.x, a.y, a.z) + (a.r || 0.4)); });
      const lum = (c) => { const k = GL ? GL.rgba(c) : [1, 0, 0]; return 0.299 * k[0] + 0.587 * k[1] + 0.114 * k[2]; };
      v.draw = (ctx) => {
        v.scale = Math.min(v.W, v.H) * 0.22 * v.zoom;
        if (glOn(v, ctx)) {
          softShadow(v, ctx, [0, -ext - 0.05, 0], ext * 0.9, ext * 0.9, 0.22);
          const cyl = [];
          bonds.forEach((b) => {
            const A = atoms[b[0]], B = atoms[b[1]]; if (!A || !B) return;
            const pa = [A.x, A.y, A.z], pb = [B.x, B.y, B.z], mid = [(A.x + B.x) / 2, (A.y + B.y) / 2, (A.z + B.z) / 2];
            const order = Math.max(1, Math.min(3, b[2] || 1));
            const d = [pb[0] - pa[0], pb[1] - pa[1], pb[2] - pa[2]];
            let n = [d[1], -d[0], 0]; if (Math.hypot(...n) < 1e-6) n = [0, d[2], -d[1]];
            const nl = Math.hypot(...n) || 1; n = n.map((x) => x / nl);
            const r = order > 1 ? 0.055 : 0.085;
            for (let k = 0; k < order; k++) {
              const off = (k - (order - 1) / 2) * 0.14;
              const sh = (p) => [p[0] + n[0] * off, p[1] + n[1] * off, p[2] + n[2] * off];
              cyl.push({ a: sh(pa), b: sh(mid), r, color: A.color || '#ef4444' }, { a: sh(mid), b: sh(pb), r, color: B.color || '#ef4444' });
            }
          });
          cylinders(v, ctx, cyl, { specular: 0.4, shininess: 40 });
          spheres(v, ctx, atoms.map((a) => ({ p: [a.x, a.y, a.z], r: a.r || 0.4, color: a.color || '#ef4444' })), { specular: 0.75, shininess: 70, rim: 0.28 });
          // sigle sugli atomi visibili
          const rs = atoms.map((a) => { const r = v.rot([a.x, a.y, a.z]); const s = v.proj(r); return { a, r, s, px: (a.r || 0.4) * v.scale * s[2] }; });
          for (const it of rs) {
            if (!it.a.label) continue;
            const hidden = rs.some((o2) => o2 !== it && o2.r[2] > it.r[2] + 0.05 && Math.hypot(o2.s[0] - it.s[0], o2.s[1] - it.s[1]) < o2.px * 0.85);
            if (hidden) continue;
            const dark = lum(it.a.color || '#ef4444') > 0.6;
            ctx.font = `800 ${Math.max(11, it.px * 0.62)}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.strokeStyle = dark ? 'rgba(255,255,255,.7)' : 'rgba(0,0,0,.35)'; ctx.strokeText(it.a.label, it.s[0], it.s[1] + 1);
            ctx.fillStyle = dark ? '#1f2937' : '#fff'; ctx.fillText(it.a.label, it.s[0], it.s[1] + 1);
          }
          return;
        }
        const items = [];
        atoms.forEach((a) => { const r = v.rot([a.x, a.y, a.z]); items.push({ kind: 'a', a, r, z: r[2] }); });
        bonds.forEach(([i, j]) => { const A = atoms[i], B = atoms[j]; if (!A || !B) return; const r1 = v.rot([A.x, A.y, A.z]), r2 = v.rot([B.x, B.y, B.z]); items.push({ kind: 'b', r1, r2, z: (r1[2] + r2[2]) / 2 - 0.01 }); });
        items.sort((p, q) => p.z - q.z);
        for (const it of items) {
          if (it.kind === 'b') {
            const p = v.proj(it.r1), q = v.proj(it.r2);
            ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 9 * p[2]; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); ctx.stroke();
          } else {
            const p = v.proj(it.r); const r = (it.a.r || 0.4) * v.scale * p[2];
            ball(ctx, p[0], p[1], r, it.a.color || '#ef4444');
            if (it.a.label) { ctx.font = `bold ${Math.max(11, r * 0.7)}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#fff'; ctx.fillText(it.a.label, p[0], p[1]); }
          }
        }
      };
      return v;
    },

    globe(host, o) {
      const v = new View(host, { rx: 0.3, ry: -0.2 });
      v.onDemand = true;
      if (v._gl) v.wrap.style.background = 'radial-gradient(circle at 50% 42%, #1e3a7a 0%, #101d45 55%, #060a1c 100%)';
      const R = 1.25;
      const xyz = (lat, lon, r = R) => { const la = lat * Math.PI / 180, lo = lon * Math.PI / 180; return [r * Math.cos(la) * Math.sin(lo), r * Math.sin(la), r * Math.cos(la) * Math.cos(lo)]; };
      const pts = o.points || [];
      const routes = o.routes || [];
      let labels = true;
      v.button('🏷️ ' + t('w.labels'), (b) => { labels = !labels; b.classList.toggle('active', labels); }, 'active');
      // un punto sulla sfera è visibile se sta davanti all'orizzonte visto dalla camera (distanza 6)
      const front = (r, rad) => r[2] > (rad * rad) / 6 + 0.01;
      const line = (ctx, list, style, width, dash, rad) => {
        let prev = null;
        ctx.strokeStyle = style; ctx.lineWidth = width; ctx.setLineDash(dash || []); ctx.lineCap = 'round';
        for (const p of list) {
          const r = v.rot(p); const s = v.proj(r); const fr = front(r, rad);
          if (prev && fr && prev.front) { ctx.beginPath(); ctx.moveTo(prev.s[0], prev.s[1]); ctx.lineTo(s[0], s[1]); ctx.stroke(); }
          prev = { s, front: fr };
        }
        ctx.setLineDash([]);
      };
      v.draw = (ctx) => {
        const c = v.P([0, 0, 0]); const rr = R * v.scale * c[2];
        const gl = glOn(v, ctx);
        if (gl) {
          // atmosfera
          const a = ctx.createRadialGradient(c[0], c[1], rr * 0.9, c[0], c[1], rr * 1.25);
          a.addColorStop(0, 'rgba(110,170,255,.55)'); a.addColorStop(0.35, 'rgba(90,150,255,.22)'); a.addColorStop(1, 'rgba(90,150,255,0)');
          ctx.fillStyle = a; ctx.beginPath(); ctx.arc(c[0], c[1], rr * 1.25, 0, TAU); ctx.fill();
          const tex = earthTexture();
          sphere(v, ctx, [0, 0, 0], R, tex ? '#ffffff' : '#2563eb', { pattern: tex ? 8 : 0, tex, rim: 0.75, rimColor: '#8cc8ff', ambient: [0.62, 0.8, 0.12], specular: 0.3, shininess: 60 });
        } else {
          const g = ctx.createRadialGradient(c[0] - rr * 0.3, c[1] - rr * 0.3, rr * 0.1, c[0], c[1], rr * 1.05);
          g.addColorStop(0, '#93c5fd'); g.addColorStop(1, '#1d4ed8');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(c[0], c[1], rr, 0, TAU); ctx.fill();
          if (window.GEO) {
            const poly = (ring, fill) => {
              const pr = ring.map(([lo, la]) => v.rot(xyz(la, lo)));
              if (!pr.some((p) => p[2] > 0)) return;
              ctx.beginPath();
              pr.forEach((p, i) => {
                let q = p;
                if (p[2] < 0) { const m = Math.hypot(p[0], p[1]) || 1; q = [p[0] / m * R, p[1] / m * R, 0]; }
                const s2 = v.proj(q); i ? ctx.lineTo(s2[0], s2[1]) : ctx.moveTo(s2[0], s2[1]);
              });
              ctx.closePath(); ctx.fillStyle = fill; ctx.fill();
            };
            GEO.land.forEach((r) => poly(r, '#65a30d'));
            GEO.water.forEach((r) => poly(r, '#3b82f6'));
          }
        }
        const gridCol = gl ? 'rgba(255,255,255,.38)' : 'rgba(255,255,255,.55)';
        for (let lat = -60; lat <= 60; lat += 30) { const l = []; for (let lo = 0; lo <= 360; lo += 4) l.push(xyz(lat, lo, R * 1.002)); line(ctx, l, lat === 0 ? '#ef4444' : gridCol, lat === 0 ? 2.5 : 1, null, R); }
        for (let lo = 0; lo < 360; lo += 30) { const l = []; for (let lat = -90; lat <= 90; lat += 4) l.push(xyz(lat, lo, R * 1.002)); line(ctx, l, lo === 0 ? '#facc15' : gridCol, lo === 0 ? 2.5 : 1, null, R); }
        for (const rt of routes) {
          const ids = rt.points || rt; const color = rt.color || '#f97316'; const l = [];
          for (let k = 0; k < ids.length - 1; k++) {
            const A = pts[ids[k]], B = pts[ids[k + 1]]; if (!A || !B) continue;
            const a = xyz(A.lat, A.lon, 1), b = xyz(B.lat, B.lon, 1);
            const dot = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])); const om = Math.acos(dot) || 1e-6;
            for (let s = 0; s <= 24; s++) { const f = s / 24; const k1 = Math.sin((1 - f) * om) / Math.sin(om), k2 = Math.sin(f * om) / Math.sin(om); l.push([0, 1, 2].map((i) => (a[i] * k1 + b[i] * k2) * R * 1.01)); }
          }
          if (gl) line(ctx, l, 'rgba(0,0,0,.22)', 4.5, null, R);
          line(ctx, l, color, 3, [7, 4], R);
        }
        for (const p of pts) {
          const r = v.rot(xyz(p.lat, p.lon, R * 1.01)); if (!front(r, R)) continue;
          const s = v.proj(r);
          if (gl) { ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.arc(s[0] + 1, s[1] + 1.5, 7, 0, TAU); ctx.fill(); }
          ctx.fillStyle = p.color || '#f97316'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(s[0], s[1], 6, 0, TAU); ctx.fill(); ctx.stroke();
          if (labels && p.label) label(ctx, s[0] + 9, s[1], p.label);
        }
      };
      return v;
    }
  };

  window.Mini3D = {
    scenes: Scenes,
    _: { View, drawFaces, drawDims, label, ball, shade, el, meshFor, LIGHT, gl: GL, glOn, sphere, spheres, cylinders, line3d, softShadow, earthTexture, spinMat },
    mount(host, scene, options) {
      if (!Scenes[scene]) { host.textContent = '3D: ' + scene + '?'; return null; }
      try { return Scenes[scene](host, options || {}); }
      catch (e) { console.error(e); host.textContent = '3D error'; return null; }
    }
  };
})();
