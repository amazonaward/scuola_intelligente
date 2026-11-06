/* Mini motore 3D su canvas (nessuna libreria esterna).
   Scene: solid, solar, layers, molecule, globe. Trascina per ruotare, rotella/pizzico per lo zoom. */
(function () {
  const TAU = Math.PI * 2;
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
      this._bind();
      this._resize();
      this._ro = new ResizeObserver(() => this._resize());
      this._ro.observe(this.wrap);
      this._loop = this._loop.bind(this);
      this._last = performance.now();
      requestAnimationFrame(this._loop);
    }
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
    }
    _resize() {
      const w = this.wrap.clientWidth || 600; const h = Math.min(this.height, Math.max(260, w * 0.75));
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = w * dpr; this.canvas.height = h * dpr;
      this.canvas.style.height = h + 'px';
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.W = w; this.H = h;
    }
    _loop(now) {
      if (!this.wrap.isConnected) { this._ro.disconnect(); return; }
      const dt = Math.min(0.05, (now - this._last) / 1000); this._last = now;
      if (this.auto) this.ry += dt * (this.autoSpeed || 0.35);
      const visible = this.wrap.getBoundingClientRect();
      if (visible.bottom > 0 && visible.top < innerHeight) {
        this.ctx.clearRect(0, 0, this.W, this.H);
        this.scale = Math.min(this.W, this.H) * 0.32 * this.zoom;
        this._cache();
        this.draw(this.ctx, dt);
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
  function drawFaces(v, ctx, faces, { color, edges = true, cull = false }) {
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
      ctx.strokeStyle = '#e11d48'; ctx.lineWidth = 3; ctx.setLineDash(d.dashed ? [6, 5] : []);
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
      ctx.setLineDash([]);
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(mx, my, 13, 0, TAU); ctx.fill();
      ctx.strokeStyle = '#e11d48'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#e11d48'; ctx.font = 'bold 16px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(d.label, mx, my + 1);
    }
    ctx.restore();
  }
  function label(ctx, x, y, text, color = '#1f2937', align = 'left', halo = 'rgba(255,255,255,.9)') {
    ctx.font = '600 13px system-ui, sans-serif'; ctx.textAlign = align; ctx.textBaseline = 'middle';
    ctx.lineWidth = 4; ctx.strokeStyle = halo; ctx.strokeText(text, x, y);
    ctx.fillStyle = color; ctx.fillText(text, x, y);
  }
  function ball(ctx, x, y, r, color, glow) {
    const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r);
    g.addColorStop(0, shade(color, 1.6)); g.addColorStop(0.6, color); g.addColorStop(1, shade(color, 0.45));
    if (glow) { ctx.save(); ctx.shadowColor = color; ctx.shadowBlur = r; }
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, Math.max(1, r), 0, TAU); ctx.fill();
    if (glow) ctx.restore();
  }

  /* ---------- scene ---------- */
  const Scenes = {
    solid(host, o) {
      const v = new View(host);
      const shapes = o.shapes || [o.shape || 'cube'];
      let cur = o.shape || shapes[0], mesh;
      let showLabels = o.labels !== false;
      const infoBox = el('div', 'm3d-info');
      v.wrap.appendChild(infoBox);
      const setShape = (s) => {
        cur = s; mesh = meshFor(s, o);
        infoBox.innerHTML = `<b>${t('shape.' + s)}</b>` + (mesh.info ? `<br>${t('w.faces')}: ${mesh.info[0]} · ${t('w.edges')}: ${mesh.info[1]} · ${t('w.vertices')}: ${mesh.info[2]}` : '');
        btns.forEach((b) => b.classList.toggle('active', b.dataset.s === s));
      };
      const btns = shapes.length > 1 ? shapes.map((s) => { const b = v.button(t('shape.' + s), () => setShape(s)); b.dataset.s = s; return b; }) : [];
      v.button('🏷️ ' + t('w.labels'), (b) => { showLabels = !showLabels; b.classList.toggle('active', showLabels); }, showLabels ? 'active' : '');
      setShape(cur);
      v.draw = (ctx) => {
        drawFaces(v, ctx, mesh.faces, { color: o.color || '#60a5fa', edges: true, cull: false });
        if (showLabels) drawDims(v, ctx, mesh.dims);
      };
      return v;
    },

    solar(host, o) {
      const v = new View(host, { rx: 0.45, auto: false });
      v.height = 440;
      const P = [
        ['mercury', 0.24, 0.38, '#a8a29e'], ['venus', 0.62, 0.95, '#f5c16c'], ['earth', 1, 1, '#3b82f6'], ['mars', 1.88, 0.53, '#ef4444'],
        ['jupiter', 11.86, 3.2, '#d6a26b'], ['saturn', 29.46, 2.7, '#e8cf8f'], ['uranus', 84, 1.8, '#7dd3fc'], ['neptune', 164.8, 1.75, '#4f6df5']
      ].map(([id, per, size, color], i) => ({ id, per, size, color, dist: 0.55 + i * 0.36, ang: Math.random() * TAU }));
      let time = 0, speed = 1, playing = true, labels = o.labels !== false;
      v.button('⏯ ' + t('w.pause'), (b) => { playing = !playing; b.innerHTML = '⏯ ' + t(playing ? 'w.pause' : 'w.play'); });
      v.button('🐢', () => { speed = Math.max(0.125, speed / 2); });
      v.button('🐇', () => { speed = Math.min(16, speed * 2); });
      v.button('🏷️ ' + t('w.labels'), (b) => { labels = !labels; b.classList.toggle('active', labels); }, labels ? 'active' : '');
      const stars = Array.from({ length: 90 }, () => [Math.random(), Math.random(), Math.random() * 1.2]);
      v.draw = (ctx, dt) => {
        if (playing) time += dt * speed * 0.12;
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
      // in questa scena le etichette chiare hanno un contorno scuro
      return v;
    },

    layers(host, o) {
      const v = new View(host, { rx: 0.45, ry: -0.785 });
      v.autoSpeed = 0.15;
      const L = (o.layers || []).slice().sort((a, b) => b.r - a.r);
      const R0 = L[0] ? L[0].r : 1; const S = 1.25 / R0;
      const faces = [];
      // superficie esterna con un ottante tagliato
      const la = 18, lo = 36, R = L[0].r * S;
      const pt = (i, j) => { const th = (i / la) * Math.PI, ph = (j / lo) * TAU; return [R * Math.sin(th) * Math.cos(ph), R * Math.cos(th), R * Math.sin(th) * Math.sin(ph)]; };
      for (let i = 0; i < la; i++) for (let j = 0; j < lo; j++) {
        const c = pt(i + 0.5, j + 0.5);
        if (c[0] > 0 && c[1] > 0 && c[2] > 0) continue;
        faces.push({ pts: [pt(i, j), pt(i, j + 1), pt(i + 1, j + 1), pt(i + 1, j)], color: L[0].color, kind: 'side', normalHint: c, outer: true });
      }
      // facce di taglio sui tre piani
      const N = 10;
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
      v.draw = (ctx) => {
        // ordina: facce esterne con culling, tagli sempre visibili
        const outer = faces.filter((f) => f.outer), cuts = faces.filter((f) => !f.outer);
        const list = [];
        for (const f of [...outer, ...cuts]) list.push(f);
        drawFaces(v, ctx, outer.filter((f) => v.rot(f.normalHint)[2] < 0), { edges: false });
        drawFaces(v, ctx, cuts, { edges: false });
        drawFaces(v, ctx, outer.filter((f) => v.rot(f.normalHint)[2] >= 0), { edges: false });
        if (labels) {
          L.forEach((layer, k) => {
            const ro = layer.r * S, ri = L[k + 1] ? L[k + 1].r * S : 0; const rm = (ro + ri) / 2;
            const a = Math.PI / 4 + (k % 2 ? 0.25 : -0.25);
            const p = v.P([0, rm * Math.cos(a), rm * Math.sin(a)]);
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(p[0], p[1], 3.5, 0, TAU); ctx.fill();
            const lx = v.W - 12; const ly = 22 + k * 24;
            ctx.strokeStyle = 'rgba(17,17,17,.55)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(lx - ctx.measureText(layer.label || '').width - 30, ly); ctx.stroke();
            label(ctx, lx, ly, layer.label || '', '#111', 'right');
          });
        }
      };
      return v;
    },

    molecule(host, o) {
      const v = new View(host);
      const atoms = o.atoms || [], bonds = o.bonds || [];
      v.draw = (ctx) => {
        v.scale = Math.min(v.W, v.H) * 0.22 * v.zoom;
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
      const R = 1.25;
      const xyz = (lat, lon, r = R) => { const la = lat * Math.PI / 180, lo = lon * Math.PI / 180; return [r * Math.cos(la) * Math.sin(lo), r * Math.sin(la), r * Math.cos(la) * Math.cos(lo)]; };
      const pts = o.points || [];
      const routes = o.routes || [];
      let labels = true;
      v.button('🏷️ ' + t('w.labels'), (b) => { labels = !labels; b.classList.toggle('active', labels); }, 'active');
      const line = (ctx, list, style, width, dash) => {
        let prev = null;
        ctx.strokeStyle = style; ctx.lineWidth = width; ctx.setLineDash(dash || []);
        for (const p of list) {
          const r = v.rot(p); const s = v.proj(r); const front = r[2] > -0.05;
          if (prev && front && prev.front) { ctx.beginPath(); ctx.moveTo(prev.s[0], prev.s[1]); ctx.lineTo(s[0], s[1]); ctx.stroke(); }
          prev = { s, front };
        }
        ctx.setLineDash([]);
      };
      v.draw = (ctx) => {
        const c = v.P([0, 0, 0]); const rr = R * v.scale * c[2];
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
        for (let lat = -60; lat <= 60; lat += 30) { const l = []; for (let lo = 0; lo <= 360; lo += 6) l.push(xyz(lat, lo)); line(ctx, l, lat === 0 ? '#ef4444' : 'rgba(255,255,255,.55)', lat === 0 ? 2.5 : 1); }
        for (let lo = 0; lo < 360; lo += 30) { const l = []; for (let lat = -90; lat <= 90; lat += 5) l.push(xyz(lat, lo)); line(ctx, l, lo === 0 ? '#facc15' : 'rgba(255,255,255,.55)', lo === 0 ? 2.5 : 1); }
        for (const rt of routes) {
          const ids = rt.points || rt; const color = rt.color || '#f97316'; const l = [];
          for (let k = 0; k < ids.length - 1; k++) {
            const A = pts[ids[k]], B = pts[ids[k + 1]]; if (!A || !B) continue;
            const a = xyz(A.lat, A.lon, 1), b = xyz(B.lat, B.lon, 1);
            const dot = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])); const om = Math.acos(dot) || 1e-6;
            for (let s = 0; s <= 24; s++) { const f = s / 24; const k1 = Math.sin((1 - f) * om) / Math.sin(om), k2 = Math.sin(f * om) / Math.sin(om); l.push([0, 1, 2].map((i) => (a[i] * k1 + b[i] * k2) * R * 1.01)); }
          }
          line(ctx, l, color, 3, [7, 4]);
        }
        for (const p of pts) {
          const r = v.rot(xyz(p.lat, p.lon, R * 1.01)); if (r[2] < 0) continue;
          const s = v.proj(r);
          ctx.fillStyle = p.color || '#f97316'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(s[0], s[1], 6, 0, TAU); ctx.fill(); ctx.stroke();
          if (labels && p.label) label(ctx, s[0] + 9, s[1], p.label);
        }
      };
      return v;
    }
  };

  window.Mini3D = {
    scenes: Scenes,
    _: { View, drawFaces, drawDims, label, ball, shade, el, meshFor, LIGHT },
    mount(host, scene, options) {
      if (!Scenes[scene]) { host.textContent = '3D: ' + scene + '?'; return null; }
      try { return Scenes[scene](host, options || {}); }
      catch (e) { console.error(e); host.textContent = '3D error'; return null; }
    }
  };
})();
