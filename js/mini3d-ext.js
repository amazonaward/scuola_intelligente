/* Scene 3D aggiuntive: terrain (paesaggio), spacetime (storia spazio-tempo), blocks (cubetti), atom (modello di Bohr). */
(function () {
  const { View, drawFaces, label, ball, shade, el, glOn, spheres, line3d, softShadow } = Mini3D._;
  const GL = Mini3D._.gl;
  const BG_SOFT = 'radial-gradient(circle at 50% 28%, #ffffff 0%, #eef2fb 52%, #d8e1f2 100%)';
  const TAU = Math.PI * 2;
  const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const segDist = (px, pz, ax, az, bx, bz) => {
    const dx = bx - ax, dz = bz - az; const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / (dx * dx + dz * dz)));
    return Math.hypot(px - (ax + t * dx), pz - (az + t * dz));
  };
  const polyDist = (px, pz, pts) => { let d = 1e9; for (let i = 0; i < pts.length - 1; i++) d = Math.min(d, segDist(px, pz, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])); return d; };
  const panel = (host) => { const p = el('div', 'm3d-panel'); host.appendChild(p); return p; };

  /* cache del disegno: ridisegna solo se cambia la vista */
  function cached(v, key, paint) {
    if (!v._cv) { v._cv = document.createElement('canvas'); }
    const k = [v.rx.toFixed(3), v.ry.toFixed(3), v.zoom.toFixed(3), v.W, v.H, key].join('|');
    const dpr = window.devicePixelRatio || 1;
    if (k !== v._ck) {
      v._cv.width = v.W * dpr; v._cv.height = v.H * dpr;
      const c = v._cv.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint(c); v._ck = k;
    }
    v.ctx.save(); v.ctx.setTransform(1, 0, 0, 1, 0, 0); v.ctx.drawImage(v._cv, 0, 0); v.ctx.restore();
  }

  /* ================= TERRAIN ================= */
  const RIVER = [[0.12, -0.82], [0.06, -0.6], [0.1, -0.42], [0.02, -0.22], [-0.04, -0.05], [-0.08, 0.06]];
  const SMALL_ISLANDS = [[0.05, 0.74, 0.05], [0.18, 0.83, 0.04], [0.29, 0.72, 0.045], [0.12, 0.93, 0.035], [0.31, 0.9, 0.03]];
  const ISL = [-0.5, 0.88, 0.1], PEAK = [-0.4, -0.76], VOLC = [0.66, -0.56], LAKE = [0.48, -0.32, 0.085];
  const LAG = [0.3, 0.215, 0.055], GULF = [-0.1, 0.33, 0.27], BAY = [0.56, 0.28, 0.11];
  function landField(x, z) {
    let L = (0.25 + 0.05 * Math.sin(4 * x + 1)) - z;                    // costa base
    L = Math.min(L, Math.hypot(x - GULF[0], z - GULF[1]) - GULF[2]);      // golfo
    L = Math.min(L, Math.hypot(x - BAY[0], z - BAY[1]) - BAY[2]);         // baia
    L = Math.min(L, Math.hypot(x - LAG[0], z - LAG[1]) - LAG[2]);         // laguna
    L = Math.max(L, 0.018 - segDist(x, z, 0.2, 0.3, 0.42, 0.295));        // cordone della laguna
    L = Math.max(L, 0.1 - segDist(x, z, -0.56, 0.18, -0.5, 0.6));          // penisola
    L = Math.max(L, 0.035 - segDist(x, z, -0.5, 0.6, -0.48, 0.71));        // capo
    L = Math.max(L, ISL[2] - Math.hypot(x - ISL[0], z - ISL[1]));          // isola
    for (const s of SMALL_ISLANDS) L = Math.max(L, s[2] - Math.hypot(x - s[0], z - s[1]));
    L = Math.max(L, 0.032 - segDist(x, z, 0.8, 0.28, 0.8, 0.6));           // istmo
    L = Math.max(L, 0.15 - Math.hypot(x - 0.8, z - 0.74));                 // terra oltre l'istmo
    L = Math.max(L, 0.055 - Math.hypot(x + 0.08, z - 0.08));               // lobo del delta
    if (Math.abs(x) > 0.98 || z < -0.98) L = Math.max(L, 0.05);
    return L;
  }
  function heightAt(x, z) {
    const hills = smooth(-0.05, -0.45, z) * (0.1 + 0.05 * Math.sin(9 * x) * Math.cos(7 * z));
    const mount = smooth(-0.42, -0.72, z) * (0.32 + 0.14 * Math.sin(6 * x + 1) * Math.cos(5 * z) + 0.08 * Math.sin(13 * x));
    const peak = 0.42 * Math.exp(-((x - PEAK[0]) ** 2 + (z - PEAK[1]) ** 2) / 0.02);
    const dv = Math.hypot(x - VOLC[0], z - VOLC[1]);
    let volc = Math.max(0, 0.62 - 2.3 * dv); if (dv < 0.05) volc -= (0.05 - dv) * 3;
    const rd = polyDist(x, z, RIVER);
    const valley = (hills + mount) > 0.05 ? 0.16 * Math.exp(-(rd * rd) / 0.006) : 0;
    const pen = 0.07 * Math.exp(-(segDist(x, z, -0.56, 0.18, -0.5, 0.6) ** 2) / 0.003);
    const isl = 0.1 * Math.exp(-((x - ISL[0]) ** 2 + (z - ISL[1]) ** 2) / 0.004);
    return 0.025 + hills + mount + peak + Math.max(volc - 0.02, 0) + pen + isl - valley;
  }
  const FEATURES = {
    sea: { pin: [-0.88, 0.62], m: (c) => c.water && !c.lake && !c.lagoon },
    coast: { pin: [0.12, 0.32], m: (c) => c.coast },
    beach: { pin: [0.43, 0.32], m: (c) => c.coast && c.h < 0.06 && c.z > 0.1 && c.x > 0.05 && c.x < 0.5 },
    island: { pin: [ISL[0], ISL[1]], m: (c) => !c.water && Math.hypot(c.x - ISL[0], c.z - ISL[1]) < ISL[2] + 0.01 },
    archipelago: { pin: [0.18, 0.8], m: (c) => !c.water && SMALL_ISLANDS.some((s) => Math.hypot(c.x - s[0], c.z - s[1]) < s[2] + 0.01) },
    peninsula: { pin: [-0.53, 0.42], m: (c) => !c.water && segDist(c.x, c.z, -0.56, 0.2, -0.48, 0.71) < 0.11 && c.z > 0.22 },
    cape: { pin: [-0.48, 0.71], m: (c) => !c.water && Math.hypot(c.x + 0.48, c.z - 0.69) < 0.06 },
    gulf: { pin: [-0.12, 0.25], m: (c) => c.water && Math.hypot(c.x - GULF[0], c.z - GULF[1]) < GULF[2] && c.x > -0.42 },
    bay: { pin: [0.56, 0.3], m: (c) => c.water && Math.hypot(c.x - BAY[0], c.z - BAY[1]) < BAY[2] + 0.01 },
    isthmus: { pin: [0.8, 0.45], m: (c) => !c.water && Math.abs(c.x - 0.8) < 0.05 && c.z > 0.33 && c.z < 0.6 },
    strait: { pin: [-0.49, 0.75], m: (c) => c.water && c.x > -0.62 && c.x < -0.36 && c.z > 0.7 && c.z < 0.79 },
    lagoon: { pin: [LAG[0], LAG[1]], m: (c) => c.lagoon },
    mountain: { pin: [0.05, -0.68], m: (c) => !c.water && c.z < -0.45 && c.h > 0.2 },
    peak: { pin: PEAK, m: (c) => Math.hypot(c.x - PEAK[0], c.z - PEAK[1]) < 0.09 },
    glacier: { pin: [PEAK[0] + 0.03, PEAK[1] + 0.03], m: (c) => c.h > 0.62 && Math.hypot(c.x - VOLC[0], c.z - VOLC[1]) > 0.2 },
    hill: { pin: [-0.35, -0.25], m: (c) => !c.water && c.z > -0.45 && c.z < -0.08 && !c.lake && Math.hypot(c.x - VOLC[0], c.z - VOLC[1]) > 0.25 },
    plain: { pin: [0.35, 0.08], m: (c) => !c.water && c.z >= -0.08 && c.h < 0.06 && c.x > -0.42 },
    valley: { pin: [0.08, -0.52], m: (c) => !c.water && c.z < -0.3 && polyDist(c.x, c.z, RIVER) < 0.1 },
    river: { pin: [0.0, -0.15], m: (c) => c.river },
    source: { pin: RIVER[0], m: (c) => Math.hypot(c.x - RIVER[0][0], c.z - RIVER[0][1]) < 0.06 },
    delta: { pin: [-0.08, 0.1], m: (c) => Math.hypot(c.x + 0.08, c.z - 0.08) < 0.08 },
    lake: { pin: [LAKE[0], LAKE[1]], m: (c) => c.lake },
    volcano: { pin: VOLC, m: (c) => Math.hypot(c.x - VOLC[0], c.z - VOLC[1]) < 0.24 }
  };

  function buildTerrain(N) {
    const cells = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const x = -1 + (2 * (j + 0.5)) / N, z = -1 + (2 * (i + 0.5)) / N;
      const L = landField(x, z);
      const lake = Math.hypot(x - LAKE[0], z - LAKE[1]) < LAKE[2];
      const lagoon = Math.hypot(x - LAG[0], z - LAG[1]) < LAG[2] && L < 0;
      const river = polyDist(x, z, RIVER) < 0.022 && L > 0;
      let water = L < 0 || lake;
      let h = water ? 0 : heightAt(x, z);
      if (lake) h = 0.12;
      cells.push({ i, j, x, z, L, h, water, lake, lagoon, river });
    }
    const at = (i, j) => (i < 0 || j < 0 || i >= N || j >= N ? null : cells[i * N + j]);
    const maxR = Math.round(6 * N / 52);
    for (const c of cells) {
      if (!c.water) c.coast = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([a, b]) => { const n = at(c.i + a, c.j + b); return n && n.water && !n.lake; });
      if (c.water && !c.lake) { let d = 0; for (let r = 1; r < maxR; r++) { if ([[r, 0], [-r, 0], [0, r], [0, -r]].some(([a, b]) => { const n = at(c.i + a, c.j + b); return n && !n.water; })) break; d = r; } c.depth = d * 52 / N; c.dn = Math.min(1, d / (maxR - 1)); }
    }
    for (const c of cells) {
      let col;
      if (c.lake) col = '#38bdf8';
      else if (c.lagoon) col = '#5eead4';
      else if (c.water) col = shade('#3b82f6', 1.2 - 0.09 * (c.depth || 0));
      else if (c.river) col = '#2563eb';
      else if (Math.hypot(c.x - VOLC[0], c.z - VOLC[1]) < 0.05) col = '#dc2626';
      else if (c.h > 0.62) col = '#f8fafc';
      else if (c.h > 0.42) col = '#8b7355';
      else if (c.h > 0.22) col = '#6b8e3d';
      else if (c.coast && c.h < 0.06) col = '#f5deb3';
      else if (c.h > 0.09) col = '#7cb342';
      else col = '#9ccc65';
      c.color = col;
    }
    return cells;
  }

  /* mesh WebGL del paesaggio: terreno (colori per vertice, normali morbide), acqua trasparente, bordi del plastico */
  function terrainMeshes(cells, N, S, VY, mask) {
    const rgba = GL.rgba, n1 = N + 1;
    const mixc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
    const HL = rgba('#facc15');
    const bed = (c) => (c.lake ? 0.085 : c.water ? -(0.015 + 0.06 * (c.dn || 0)) : c.h);
    const cellCol = (c) => {
      let k;
      if (c.lake) k = rgba('#5f8f86');
      else if (c.water) k = mixc(rgba('#e9d8a6'), rgba('#28566e'), Math.min(1, (c.dn || 0) * 1.4));
      else if (c.river) k = rgba('#2f6fd6');
      else if (Math.hypot(c.x - VOLC[0], c.z - VOLC[1]) < 0.05) k = rgba('#b4231b');
      else if (c.h > 0.62) k = rgba('#f4f7fb');
      else if (c.h > 0.42) k = rgba('#8a7458');
      else if (c.h > 0.22) k = rgba('#5f8a38');
      else if (c.coast && c.h < 0.06) k = rgba('#eedcaa');
      else if (c.h > 0.09) k = rgba('#74ad3c');
      else k = rgba('#94c95a');
      if (mask && mask(c)) k = mixc(k, HL, 0.78);
      return k;
    };
    const cc = cells.map(cellCol);
    const H = new Float32Array(n1 * n1), pos = new Float32Array(n1 * n1 * 3), nor = new Float32Array(n1 * n1 * 3), col = new Float32Array(n1 * n1 * 3);
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      let s = 0, n = 0, r = 0, g = 0, b = 0, land = 0, snow = 0;
      for (const [a, bb] of [[0, 0], [-1, 0], [0, -1], [-1, -1]]) {
        const ii = i + a, jj = j + bb; if (ii < 0 || jj < 0 || ii >= N || jj >= N) continue;
        const c = cells[ii * N + jj], k = cc[ii * N + jj];
        s += bed(c); r += k[0]; g += k[1]; b += k[2]; n++; if (!c.water) land++; if (c.h > 0.62) snow++;
      }
      const v = i * n1 + j;
      H[v] = (s / n) * VY;
      pos[v * 3] = (-1 + (2 * j) / N) * S; pos[v * 3 + 1] = H[v]; pos[v * 3 + 2] = (-1 + (2 * i) / N) * S;
      col[v * 3] = r / n; col[v * 3 + 1] = g / n; col[v * 3 + 2] = b / n;
      pos.land = pos.land || new Uint8Array(n1 * n1); pos.land[v] = land && !snow ? 1 : 0;
    }
    const d = (2 * S) / N;
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      const v = i * n1 + j;
      const hx = H[i * n1 + Math.min(N, j + 1)] - H[i * n1 + Math.max(0, j - 1)];
      const hz = H[Math.min(N, i + 1) * n1 + j] - H[Math.max(0, i - 1) * n1 + j];
      let nx = -hx / (2 * d), nz = -hz / (2 * d), ny = 1; const m = Math.hypot(nx, ny, nz); nx /= m; ny /= m; nz /= m;
      nor[v * 3] = nx; nor[v * 3 + 1] = ny; nor[v * 3 + 2] = nz;
      // roccia sui pendii ripidi
      if (pos.land[v] && ny < 0.86) {
        const t2 = Math.min(1, (0.86 - ny) * 2.6), k = mixc([col[v * 3], col[v * 3 + 1], col[v * 3 + 2]], rgba('#857865'), t2);
        col[v * 3] = k[0]; col[v * 3 + 1] = k[1]; col[v * 3 + 2] = k[2];
      }
    }
    const idx = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const a = i * n1 + j; idx.push(a, a + n1, a + 1, a + 1, a + n1, a + n1 + 1); }
    const land = GL.createMesh({ pos, nor, fn: nor, col, idx });
    // acqua: griglia sulle celle d'acqua, alla quota del mare (0) o del lago; colori sfumati fra le celle
    const SEA_A = rgba('#45c6dc'), SEA_B = rgba('#1d3f9e');
    const wcol = cells.map((c) => {
      if (!c.water) return null;
      let k = c.lake ? rgba('#3aa0d8') : c.lagoon ? rgba('#2cc2b0') : mixc(SEA_A, SEA_B, Math.min(1, (c.dn || 0) * 1.25));
      if (mask && mask(c)) k = mixc(k, HL, 0.8);
      return k;
    });
    const wp = new Float32Array(n1 * n1 * 3), wc = new Float32Array(n1 * n1 * 3), wx = new Float32Array(n1 * n1), wi = [];
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      let n = 0, r = 0, g = 0, b = 0, x = 0, lake = false;
      for (const [a, bb] of [[0, 0], [-1, 0], [0, -1], [-1, -1]]) {
        const ii = i + a, jj = j + bb; if (ii < 0 || jj < 0 || ii >= N || jj >= N) continue;
        const c = cells[ii * N + jj], k = wcol[ii * N + jj]; if (!k) continue;
        r += k[0]; g += k[1]; b += k[2]; x += c.lake ? 0.6 : c.lagoon ? 0.25 : Math.min(1, 0.15 + (c.dn || 0)); n++; if (c.lake) lake = true;
      }
      const v = i * n1 + j; n = n || 1;
      wp[v * 3] = pos[v * 3]; wp[v * 3 + 1] = lake ? 0.12 * VY : 0; wp[v * 3 + 2] = pos[v * 3 + 2];
      wc[v * 3] = r / n; wc[v * 3 + 1] = g / n; wc[v * 3 + 2] = b / n; wx[v] = x / n;
    }
    for (const c of cells) if (c.water) { const a = c.i * n1 + c.j; wi.push(a, a + n1, a + 1, a + 1, a + n1, a + n1 + 1); }
    const wn = new Float32Array(wp.length); for (let q = 1; q < wn.length; q += 3) wn[q] = 1;
    const water = wi.length ? GL.createMesh({ pos: wp, nor: wn, fn: wn, col: wc, x: wx, idx: wi }) : null;
    // bordi del plastico
    const bp = [], bn = [], bc = [], bi = [], Y0 = -0.24;
    const TOPL = rgba('#7b5532'), TOPW = rgba('#2f74b5'), BOT = rgba('#3a2513');
    const side = (list, n) => {
      for (let k = 0; k < list.length - 1; k++) {
        const [a, b] = [list[k], list[k + 1]];
        const ya = Math.max(H[a], 0), yb = Math.max(H[b], 0);
        const base = bp.length / 3;
        bp.push(pos[a * 3], ya, pos[a * 3 + 2], pos[b * 3], yb, pos[b * 3 + 2], pos[b * 3], Y0, pos[b * 3 + 2], pos[a * 3], Y0, pos[a * 3 + 2]);
        const ta = H[a] < 0.002 ? TOPW : TOPL, tb = H[b] < 0.002 ? TOPW : TOPL;
        [ta, tb, BOT, BOT].forEach((k2) => bc.push(k2[0], k2[1], k2[2]));
        for (let q = 0; q < 4; q++) bn.push(n[0], n[1], n[2]);
        bi.push(base, base + 1, base + 2, base, base + 2, base + 3);
      }
    };
    const rowI = (i) => Array.from({ length: n1 }, (_, j) => i * n1 + j), colJ = (j) => Array.from({ length: n1 }, (_, i) => i * n1 + j);
    side(rowI(0), [0, 0, -1]); side(rowI(N), [0, 0, 1]); side(colJ(0), [-1, 0, 0]); side(colJ(N), [1, 0, 0]);
    // fondo
    const fb = bp.length / 3; bp.push(-S, Y0, -S, S, Y0, -S, S, Y0, S, -S, Y0, S); for (let q = 0; q < 4; q++) { bn.push(0, -1, 0); bc.push(BOT[0], BOT[1], BOT[2]); } bi.push(fb, fb + 1, fb + 2, fb, fb + 2, fb + 3);
    const walls = GL.createMesh({ pos: new Float32Array(bp), nor: new Float32Array(bn), fn: new Float32Array(bn), col: new Float32Array(bc), idx: bi });
    return { land, water, walls, free() { [land, water, walls].forEach((m) => m && GL.deleteMesh(m)); } };
  }

  Mini3D.scenes.terrain = function (host, o) {
    const v = new View(host, { rx: 0.85, ry: 0.0, auto: false });
    v.height = 460;
    v.onDemand = true;
    const useGL = v._gl;
    if (useGL) { v.wrap.style.background = 'linear-gradient(180deg, #b9d9ff 0%, #e2efff 55%, #f6f9ff 100%)'; GL.setFog(v, '#d6e8ff', 0.16); }
    const N = useGL ? 96 : 52, cells = buildTerrain(N), S = 1.35, VY = 0.9;
    let meshes = null, meshKey = null;
    v.dispose = () => { if (meshes) meshes.free(); meshes = null; };
    const feats = o.features || {};
    const ids = Object.keys(feats).filter((k) => FEATURES[k]);
    let sel = null;
    const info = panel(host);
    const btnRow = el('div', 'm3d-chips'); host.insertBefore(btnRow, info);
    const btns = {};
    ids.forEach((id, k) => { const b = el('button', 'chip', `<b>${k + 1}</b> ${feats[id].label || id}`); b.type = 'button'; b.onclick = () => select(id); btns[id] = b; btnRow.appendChild(b); });
    info.innerHTML = `<p class="muted">👆 ${t('ter.tap')}</p>`;
    function select(id) {
      sel = sel === id ? null : id;
      Object.entries(btns).forEach(([k, b]) => b.classList.toggle('active', k === sel));
      info.innerHTML = sel ? `<h4>${feats[sel].label || sel}</h4>${feats[sel].html || ''}` : `<p class="muted">👆 ${t('ter.tap')}</p>`;
      v._ck = null; v.invalidate();
    }
    // vertici della griglia (altezze medie dei 4 vicini)
    const hv = (i, j) => {
      let s = 0, n = 0;
      for (const [a, b] of [[0, 0], [-1, 0], [0, -1], [-1, -1]]) { const c = cells[(i + a) * N + (j + b)]; if (i + a >= 0 && j + b >= 0 && i + a < N && j + b < N) { s += c.h; n++; } }
      return s / n;
    };
    const verts = [];
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) verts.push([(-1 + (2 * j) / N) * S, hv(i, j) * VY, (-1 + (2 * i) / N) * S]);
    const pinPos = (id) => { const p = FEATURES[id].pin; const h = id === 'sea' || FEATURES[id].m({ water: true }) ? 0.05 : heightAt(p[0], p[1]) * VY + 0.05; return [p[0] * S, Math.max(0.05, Math.min(1, h)) + 0.12, p[1] * S]; };
    let pins = [];
    v.canvas.addEventListener('click', (e) => {
      const r = v.canvas.getBoundingClientRect(); const mx = e.clientX - r.left, my = e.clientY - r.top;
      let best = null, bd = 30;
      for (const p of pins) { const d = Math.hypot(p.s[0] - mx, p.s[1] - my); if (d < bd) { bd = d; best = p.id; } }
      if (best) select(best);
    });
    const drawPins = (ctx) => {
      pins = ids.map((id, k) => {
        const base = FEATURES[id].pin; const top = pinPos(id); const s = v.P(top); const g = v.P([base[0] * S, top[1] - 0.12, base[1] * S]);
        ctx.strokeStyle = 'rgba(0,0,0,.5)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(g[0], g[1]); ctx.lineTo(s[0], s[1]); ctx.stroke();
        if (useGL) { ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.beginPath(); ctx.ellipse(g[0], g[1], 4, 2, 0, 0, TAU); ctx.fill(); }
        ctx.fillStyle = id === sel ? '#facc15' : '#ffffff'; ctx.strokeStyle = '#111827'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(s[0], s[1], 11, 0, TAU); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#111827'; ctx.font = 'bold 12px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(k + 1), s[0], s[1] + 0.5);
        if (id === sel) label(ctx, s[0] + 15, s[1], feats[id].label || id);
        return { id, s };
      });
    };
    const riverPts = [];
    for (let k = 0; k < RIVER.length - 1; k++) for (let q = 0; q < 10; q++) {
      const f = q / 10, x = RIVER[k][0] + (RIVER[k + 1][0] - RIVER[k][0]) * f, z = RIVER[k][1] + (RIVER[k + 1][1] - RIVER[k][1]) * f;
      riverPts.push([x, z]);
    }
    riverPts.push(RIVER[RIVER.length - 1]);
    v.draw = (ctx) => {
      if (glOn(v, ctx)) {
        const key = sel || '';
        if (!meshes || meshKey !== key) { if (meshes) meshes.free(); meshes = terrainMeshes(cells, N, S, VY, sel ? FEATURES[sel].m : null); meshKey = key; }
        GL.mesh(v, meshes.walls, null, { specular: 0.04, shininess: 8, rim: 0, fog: false });
        GL.mesh(v, meshes.land, null, { specular: 0.1, shininess: 14, rim: 0.1, ambient: [0.5, 0.82, 0.12] });
        // fiume sopra il terreno (nascosto dalle montagne davanti)
        line3d(v, ctx, riverPts.map(([x, z]) => [x * S, Math.max(0.02, heightAt(x, z) * VY - 0.04) + 0.018, z * S]), sel === 'river' ? '#facc15' : '#1d5fe0', 3, { bias: 0.004 });
        if (meshes.water) GL.mesh(v, meshes.water, null, { pattern: 10, specular: 0.55, shininess: 90, rim: 0.25, rimColor: '#ffffff', ambient: [0.55, 0.75, 0.1] });
        drawPins(ctx);
        return;
      }
      cached(v, sel || '', (ctx) => {
        const R = verts.map((p) => v.rot(p));
        const P = R.map((r) => v.proj(r));
        const mask = sel ? FEATURES[sel].m : null;
        const list = [];
        for (const c of cells) {
          const a = c.i * (N + 1) + c.j, idx = [a, a + 1, a + N + 2, a + N + 1];
          const z = (R[idx[0]][2] + R[idx[1]][2] + R[idx[2]][2] + R[idx[3]][2]) / 4;
          list.push({ c, idx, z });
        }
        list.sort((p, q) => p.z - q.z);
        for (const it of list) {
          const [p0, p1, p2, p3] = it.idx.map((k) => P[k]);
          const r0 = R[it.idx[0]], r1 = R[it.idx[1]], r3 = R[it.idx[3]];
          const ux = r1[0] - r0[0], uy = r1[1] - r0[1], uz = r1[2] - r0[2], wx = r3[0] - r0[0], wy = r3[1] - r0[1], wz = r3[2] - r0[2];
          let nx = uy * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - uy * wx; const m = Math.hypot(nx, ny, nz) || 1;
          const lit = Math.abs((nx * 0.4 + ny * 0.75 + nz * 0.5) / m);
          let col = shade(it.c.color, 0.6 + 0.55 * lit);
          if (mask && mask(it.c)) col = shade('#facc15', 0.75 + 0.4 * lit);
          ctx.beginPath(); ctx.moveTo(p0[0], p0[1]); ctx.lineTo(p1[0], p1[1]); ctx.lineTo(p2[0], p2[1]); ctx.lineTo(p3[0], p3[1]); ctx.closePath();
          ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = col; ctx.lineWidth = 0.6; ctx.stroke();
        }
        // fiume come linea
        ctx.strokeStyle = sel === 'river' ? '#facc15' : '#1d4ed8'; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.beginPath();
        RIVER.forEach((p, k) => { const q = v.P([p[0] * S, heightAt(p[0], p[1]) * VY + 0.01, p[1] * S]); k ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); });
        ctx.stroke();
        // segnaposto numerati
        drawPins(ctx);
      });
    };
    return v;
  };

  /* ================= SPACETIME ================= */
  Mini3D.scenes.spacetime = function (host, o) {
    const v = new View(host, { rx: 0.5, ry: 0.35, auto: false });
    v.height = 480;
    const lat = o.lat || [25, 60], lon = o.lon || [-15, 45];
    const evs = (o.events || []).slice();
    const years = o.years || [Math.min(...evs.map((e) => e.year)), Math.max(...evs.map((e) => e.year))];
    const latC = (lat[0] + lat[1]) / 2, lonC = (lon[0] + lon[1]) / 2;
    const span = Math.max(lat[1] - lat[0], (lon[1] - lon[0]) * Math.cos(latC * Math.PI / 180));
    const k = 2.4 / span; const cosl = Math.cos(latC * Math.PI / 180);
    const H = 1.6, Y0 = -0.75;
    const map = (la, lo, y = Y0) => [(lo - lonC) * cosl * k, y, -(la - latC) * k];
    const yOf = (yr) => Y0 + ((yr - years[0]) / ((years[1] - years[0]) || 1)) * H;
    const clampLL = (lo, la) => [Math.max(lon[0] - 3, Math.min(lon[1] + 3, lo)), Math.max(lat[0] - 3, Math.min(lat[1] + 3, la))];
    const fmtYear = (y) => (y < 0 ? `${-y} ${t('w.bc')}` : `${y}`);
    let sel = null, cur = years[1];
    const info = panel(host);
    // cursore del tempo
    const ctl = el('div', 'm3d-slider');
    ctl.innerHTML = `<label>⏳ ${t('st.time')}: <b></b></label><input type="range" min="${years[0]}" max="${years[1]}" value="${years[1]}" step="${Math.max(1, Math.round((years[1] - years[0]) / 200))}">`;
    host.insertBefore(ctl, info);
    const out = ctl.querySelector('b'), rng = ctl.querySelector('input');
    const setCur = (y) => { cur = +y; out.textContent = fmtYear(cur); };
    rng.oninput = () => setCur(rng.value); setCur(years[1]);
    let playing = false;
    v.button('▶ ' + t('w.play'), (b) => { playing = !playing; if (playing && cur >= years[1]) setCur(years[0]); b.innerHTML = playing ? '⏸ ' + t('w.pause') : '▶ ' + t('w.play'); });
    const byId = Object.fromEntries(evs.map((e) => [e.id, e]));
    const effects = (id) => evs.filter((e) => (e.causes || []).includes(id));
    function show(e) {
      sel = e ? e.id : null;
      if (!e) { info.innerHTML = `<p class="muted">👆 ${t('st.tap')}</p>`; return; }
      const link = (x) => `<button class="chip" data-ev="${x.id}">${fmtYear(x.year)} · ${x.label}</button>`;
      const c = (e.causes || []).map((id) => byId[id]).filter(Boolean), f = effects(e.id);
      info.innerHTML = `<h4>${fmtYear(e.year)} — ${e.label}</h4>${e.html || ''}` +
        (c.length ? `<p><b>⬅️ ${t('st.causes')}:</b> ${c.map(link).join(' ')}</p>` : '') +
        (f.length ? `<p><b>➡️ ${t('st.effects')}:</b> ${f.map(link).join(' ')}</p>` : '');
      info.querySelectorAll('[data-ev]').forEach((b) => (b.onclick = () => show(byId[b.dataset.ev])));
    }
    show(null);
    let hits = [];
    v.canvas.addEventListener('click', (ev) => {
      const r = v.canvas.getBoundingClientRect(); const mx = ev.clientX - r.left, my = ev.clientY - r.top;
      let best = null, bd = 24; for (const h of hits) { const d = Math.hypot(h.s[0] - mx, h.s[1] - my); if (d < bd) { bd = d; best = h.e; } }
      if (best) show(best);
    });
    const corners = [map(lat[1], lon[0]), map(lat[1], lon[1]), map(lat[0], lon[1]), map(lat[0], lon[0])];
    v.draw = (ctx, dt) => {
      if (playing) { setCur(Math.min(years[1], cur + (years[1] - years[0]) * dt / 12)); rng.value = cur; if (cur >= years[1]) playing = false; }
      v.scale = Math.min(v.W, v.H) * 0.27 * v.zoom;
      // base: mare + terre
      const cs = corners.map((p) => v.P(p));
      ctx.save();
      ctx.beginPath(); cs.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
      ctx.shadowColor = 'rgba(15,23,42,.28)'; ctx.shadowBlur = 22; ctx.shadowOffsetY = 10;
      ctx.fillStyle = '#bfdbfe'; ctx.fill(); ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0; ctx.clip();
      const poly = (ring, fill) => { ctx.beginPath(); ring.forEach((pt, i) => { const [lo, la] = clampLL(pt[0], pt[1]); const p = v.P(map(la, lo)); i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); }); ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = 'rgba(60,80,40,.5)'; ctx.lineWidth = 1; ctx.stroke(); };
      if (window.GEO) { GEO.land.forEach((r) => poly(r, '#d9f99d')); GEO.water.forEach((r) => poly(r, '#bfdbfe')); }
      ctx.strokeStyle = 'rgba(30,64,175,.15)'; ctx.lineWidth = 1;
      for (let la = Math.ceil(lat[0] / 10) * 10; la <= lat[1]; la += 10) { const a = v.P(map(la, lon[0])), b = v.P(map(la, lon[1])); ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); }
      for (let lo = Math.ceil(lon[0] / 10) * 10; lo <= lon[1]; lo += 10) { const a = v.P(map(lat[0], lo)), b = v.P(map(lat[1], lo)); ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); }
      ctx.restore();
      ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1.5; ctx.beginPath(); cs.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.stroke();
      // luoghi
      for (const p of o.places || []) { const s = v.P(map(p.lat, p.lon)); ctx.fillStyle = '#334155'; ctx.beginPath(); ctx.arc(s[0], s[1], 3, 0, TAU); ctx.fill(); label(ctx, s[0] + 5, s[1], p.label, '#334155'); }
      // asse del tempo
      const ax0 = map(lat[1], lon[0]), top = [ax0[0], Y0 + H, ax0[2]];
      const a0 = v.P(ax0), a1 = v.P(top);
      ctx.strokeStyle = '#0f172a'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(a0[0], a0[1]); ctx.lineTo(a1[0], a1[1]); ctx.stroke();
      for (let s = 0; s <= 4; s++) { const yr = Math.round(years[0] + (s / 4) * (years[1] - years[0])); const p = v.P([ax0[0], yOf(yr), ax0[2]]); ctx.fillStyle = '#0f172a'; ctx.fillRect(p[0] - 4, p[1] - 1, 8, 2); label(ctx, p[0] - 7, p[1], fmtYear(yr), '#0f172a', 'right'); }
      // piano del tempo corrente
      const yc = yOf(cur); const pc = corners.map((p) => v.P([p[0], yc, p[2]]));
      ctx.fillStyle = 'rgba(250,204,21,.12)'; ctx.strokeStyle = 'rgba(202,138,4,.7)'; ctx.lineWidth = 1.5;
      ctx.beginPath(); pc.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); ctx.stroke();
      // eventi
      const items = evs.map((e) => { const base = map(e.lat, e.lon); const pos = [base[0], yOf(e.year), base[2]]; const r = v.rot(pos); return { e, base, pos, r, s: v.proj(r) }; });
      const byE = Object.fromEntries(items.map((it) => [it.e.id, it]));
      // frecce causa → effetto
      for (const it of items) for (const cid of it.e.causes || []) {
        const c = byE[cid]; if (!c) continue;
        const hot = sel && (sel === it.e.id || sel === cid);
        const future = it.e.year > cur;
        ctx.strokeStyle = hot ? '#dc2626' : future ? 'rgba(220,38,38,.15)' : 'rgba(220,38,38,.55)'; ctx.lineWidth = hot ? 3 : 1.6;
        const a = c.s, b = it.s; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
        const ang = Math.atan2(b[1] - a[1], b[0] - a[0]); const hx = b[0] - Math.cos(ang) * 9, hy = b[1] - Math.sin(ang) * 9;
        ctx.fillStyle = ctx.strokeStyle; ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx - Math.cos(ang - 0.5) * 9, hy - Math.sin(ang - 0.5) * 9); ctx.lineTo(hx - Math.cos(ang + 0.5) * 9, hy - Math.sin(ang + 0.5) * 9); ctx.closePath(); ctx.fill();
      }
      items.sort((a, b) => a.r[2] - b.r[2]);
      hits = [];
      for (const it of items) {
        const future = it.e.year > cur; const g = v.P(it.base);
        ctx.globalAlpha = future ? 0.25 : 1;
        ctx.strokeStyle = 'rgba(15,23,42,.45)'; ctx.setLineDash([3, 3]); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(g[0], g[1]); ctx.lineTo(it.s[0], it.s[1]); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(15,23,42,.5)'; ctx.beginPath(); ctx.ellipse(g[0], g[1], 4, 2, 0, 0, TAU); ctx.fill();
        const rr = (sel === it.e.id ? 11 : 8) * it.s[2];
        ball(ctx, it.s[0], it.s[1], rr, it.e.color || '#f97316');
        if (!future || sel === it.e.id) label(ctx, it.s[0] + rr + 4, it.s[1], it.e.label, sel === it.e.id ? '#b91c1c' : '#111827');
        ctx.globalAlpha = 1;
        hits.push({ e: it.e, s: it.s });
      }
    };
    return v;
  };

  /* ================= BLOCKS ================= */
  function cubesMesh(list, size) {
    // list: [{x,y,z,color}] in unità; facce interne eliminate
    const key = (x, y, z) => x + ',' + y + ',' + z; const set = new Set(list.map((c) => key(c.x, c.y, c.z)));
    const faces = []; const s = size;
    const dirs = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
    for (const c of list) {
      const x0 = c.x * s, y0 = c.y * s, z0 = c.z * s, x1 = x0 + s, y1 = y0 + s, z1 = z0 + s;
      const F = [
        [[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]], [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]],
        [[x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0]], [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]],
        [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], [[x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [x1, y0, z0]]
      ];
      dirs.forEach((d, k) => { if (!set.has(key(c.x + d[0], c.y + d[1], c.z + d[2]))) faces.push({ pts: F[k], color: c.color }); });
    }
    return faces;
  }
  const PAL = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#84cc16'];
  Mini3D.scenes.blocks = function (host, o) {
    const v = new View(host, { rx: 0.6, ry: 0.6, auto: false });
    v.onDemand = true;
    if (v._gl) { v.wrap.style.background = BG_SOFT; GL.setFog(v, '#e3e9f6', 0.15); }
    const mode = o.mode || 'array';
    const st = { a: o.a || 3, b: o.b || 4, c: o.c || 2, value: o.value != null ? o.value : 123 };
    const ctl = el('div', 'm3d-slider');
    const info = el('div', 'm3d-info big');
    v.wrap.appendChild(info);
    const sl = (key, lbl, min, max) => {
      const w = el('label', 'sl', `${lbl}: <b>${st[key]}</b> <input type="range" min="${min}" max="${max}" value="${st[key]}">`);
      w.querySelector('input').oninput = (e) => { st[key] = +e.target.value; w.querySelector('b').textContent = st[key]; rebuild(); };
      ctl.appendChild(w);
    };
    if (mode === 'array') { sl('a', t('blk.rows'), 1, o.max || 10); sl('b', t('blk.cols'), 1, o.max || 10); }
    else if (mode === 'volume') { sl('a', 'a', 1, o.max || 6); sl('b', 'b', 1, o.max || 6); sl('c', 'c', 1, o.max || 6); }
    else sl('value', t('blk.number'), 0, o.max || 999);
    host.appendChild(ctl);
    let faces = [], center = [0, 0, 0], foot = null;
    function rebuild() {
      const list = [];
      if (mode === 'array') {
        for (let i = 0; i < st.a; i++) for (let j = 0; j < st.b; j++) list.push({ x: j, y: 0, z: i, color: PAL[i % PAL.length] });
        info.innerHTML = `${st.a} × ${st.b} = <b>${st.a * st.b}</b> ${t('blk.cubes')}`;
        center = [st.b / 2, 0.5, st.a / 2];
      } else if (mode === 'volume') {
        for (let i = 0; i < st.a; i++) for (let j = 0; j < st.b; j++) for (let k = 0; k < st.c; k++) list.push({ x: i, y: k, z: j, color: PAL[k % PAL.length] });
        info.innerHTML = `V = ${st.a} × ${st.b} × ${st.c} = <b>${st.a * st.b * st.c}</b> ${t('blk.cubes')}`;
        center = [st.a / 2, st.c / 2, st.b / 2];
      } else {
        const h = Math.floor(st.value / 100), d = Math.floor((st.value % 100) / 10), u = st.value % 10;
        let x = 0;
        for (let k = 0; k < h; k++) { for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) list.push({ x: x, y: j, z: i, color: '#3b82f6' }); x += 1.6; }
        for (let k = 0; k < d; k++) { for (let j = 0; j < 10; j++) list.push({ x: x, y: j, z: 0, color: '#22c55e' }); x += 1.6; }
        for (let k = 0; k < u; k++) { list.push({ x: x, y: 0, z: 0, color: '#ef4444' }); x += 1.6; }
        info.innerHTML = `<span style="color:#3b82f6">${h} ${t('blk.hundreds')}</span> · <span style="color:#16a34a">${d} ${t('blk.tens')}</span> · <span style="color:#ef4444">${u} ${t('blk.units')}</span> = <b>${st.value}</b>`;
        center = [x / 2, 5, 5];
      }
      const size = mode === 'base10' ? 0.11 : Math.min(0.28, 2.6 / Math.max(st.a, st.b, mode === 'volume' ? st.c : 1, 4));
      faces = cubesMesh(list.map((c) => ({ ...c })), size).map((f) => ({ ...f, pts: f.pts.map((p) => [p[0] - center[0] * size, p[1] - center[1] * size, p[2] - center[2] * size]) }));
      // per base10 le x non sono intere: ricostruisci senza eliminazione facce per cubi separati
      let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9, y0 = 1e9;
      for (const f of faces) for (const p of f.pts) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); z0 = Math.min(z0, p[2]); z1 = Math.max(z1, p[2]); y0 = Math.min(y0, p[1]); }
      foot = faces.length ? { c: [(x0 + x1) / 2, y0 - 0.01, (z0 + z1) / 2], rx: (x1 - x0) / 2 + 0.35, rz: (z1 - z0) / 2 + 0.35 } : null;
      v._ck = null; v.invalidate();
    }
    rebuild();
    v.draw = (ctx) => {
      if (glOn(v, ctx)) {
        if (foot) softShadow(v, ctx, foot.c, foot.rx, foot.rz, 0.3);
        drawFaces(v, ctx, faces, { edges: true, bevel: 0.1, edgeWidth: 1, edgeColor: 'rgba(15,23,42,.42)', specular: 0.35, shininess: 46 });
        return;
      }
      cached(v, JSON.stringify(st), (c) => drawFaces(v, c, faces, { edges: true }));
    };
    return v;
  };

  /* ================= ATOM ================= */
  function shellsFor(z) {
    const special = { 24: [2, 8, 13, 1], 29: [2, 8, 18, 1], 47: [2, 8, 18, 18, 1], 50: [2, 8, 18, 18, 4], 53: [2, 8, 18, 18, 7], 79: [2, 8, 18, 32, 18, 1], 80: [2, 8, 18, 32, 18, 2], 82: [2, 8, 18, 32, 18, 4] };
    if (special[z]) return special[z];
    if (z <= 2) return [z];
    if (z <= 10) return [2, z - 2];
    if (z <= 18) return [2, 8, z - 10];
    if (z <= 20) return [2, 8, 8, z - 18];
    if (z <= 30) return [2, 8, z - 20 + 8, 2];
    return [2, 8, 18, z - 28];
  }
  Mini3D.scenes.atom = function (host, o) {
    const v = new View(host, { rx: 0.3, auto: false });
    if (v._gl) v.wrap.style.background = 'radial-gradient(circle at 50% 45%, #24345e 0%, #121b36 55%, #070b18 100%)';
    const list = (o.elements || ['H', 'He', 'C', 'O', 'Na']).filter((s) => window.Chem && Chem.bySym[s]);
    let elem = Chem.bySym[o.element || list[0] || 'C'];
    const info = el('div', 'm3d-info'); v.wrap.appendChild(info);
    const btns = list.map((s) => { const b = v.button(s, () => set(s)); b.dataset.s = s; return b; });
    let nucleus = [], shells = [];
    function set(sym) {
      elem = Chem.bySym[sym];
      const Z = elem.z, Nn = Math.round(elem.mass) - Z;
      nucleus = [];
      const tot = Z + Nn, R = 0.09 * Math.cbrt(tot) + 0.02;
      for (let k = 0; k < tot; k++) {
        const phi = Math.acos(1 - (2 * (k + 0.5)) / tot), th = Math.PI * (1 + Math.sqrt(5)) * k; const r = R * Math.cbrt((k + 1) / tot);
        nucleus.push({ p: [r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th)], proton: (k * Z / tot) % 1 < Z / tot && nucleus.filter((n) => n.proton).length < Z });
      }
      let pc = nucleus.filter((n) => n.proton).length; for (const n of nucleus) { if (pc >= Z) break; if (!n.proton) { n.proton = true; pc++; } }
      shells = shellsFor(Z).map((n, k) => ({ n, r: 0.45 + k * 0.32, tilt: [0.3 + k * 0.7, k * 1.1], speed: 1.2 / (k + 1) }));
      info.innerHTML = `<b>${elem.sym}</b> – ${elem.names[i18n.lang] || elem.names.it} (Z = ${Z})<br>🔴 ${t('atom.protons')}: ${Z} · ⚪ ${t('atom.neutrons')}: ${Nn} · 🔵 ${t('atom.electrons')}: ${Z}<br>${t('atom.shells')}: ${shellsFor(Z).join(' – ')}`;
      btns.forEach((b) => b.classList.toggle('active', b.dataset.s === sym));
    }
    set(elem.sym);
    let time = 0;
    const tr = (p, tilt) => { const [a, b] = tilt; const y1 = p[1] * Math.cos(a) - p[2] * Math.sin(a), z1 = p[1] * Math.sin(a) + p[2] * Math.cos(a); const x2 = p[0] * Math.cos(b) + z1 * Math.sin(b), z2 = -p[0] * Math.sin(b) + z1 * Math.cos(b); return [x2, y1, z2]; };
    const orbitPts = (sh) => { const a = []; for (let i = 0; i < 96; i++) { const t2 = (i / 96) * TAU; a.push(tr([sh.r * Math.cos(t2), 0, sh.r * Math.sin(t2)], sh.tilt)); } return a; };
    v.draw = (ctx, dt) => {
      time += dt;
      v.scale = Math.min(v.W, v.H) * (0.4 / (0.45 + shells.length * 0.32)) * v.zoom;
      if (glOn(v, ctx)) {
        for (const sh of shells) line3d(v, ctx, orbitPts(sh), 'rgba(140,190,255,.5)', 1.3, { closed: true });
        spheres(v, ctx, nucleus.map((n) => ({ p: n.p, r: 0.05, color: n.proton ? '#ef4444' : '#d6dbe4' })), { specular: 0.7, shininess: 60, rim: 0.3, rimColor: '#9cc2ff' });
        const el2 = [];
        for (const sh of shells) for (let e = 0; e < sh.n; e++) { const a = (e / sh.n) * TAU + time * sh.speed; el2.push({ p: tr([sh.r * Math.cos(a), 0, sh.r * Math.sin(a)], sh.tilt), r: 0.042, color: '#4f8dff' }); }
        spheres(v, ctx, el2, { emissive: 0.55, specular: 0.9, shininess: 80, rim: 0.4, rimColor: '#bcd6ff' });
        for (const e of el2) { const z = v.rot(e.p)[2]; const s = v.P(e.p); GL.glow(v, e.p, e.r * v.scale * s[2] * 3.4, '#3b82f6', z < 0 ? 0.3 : 0.75); }
        return;
      }
      const items = [];
      for (const sh of shells) {
        ctx.strokeStyle = 'rgba(59,130,246,.35)'; ctx.lineWidth = 1.2; ctx.beginPath();
        for (let i = 0; i <= 64; i++) { const a = (i / 64) * TAU; const q = v.P(tr([sh.r * Math.cos(a), 0, sh.r * Math.sin(a)], sh.tilt)); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); }
        ctx.stroke();
        for (let e = 0; e < sh.n; e++) { const a = (e / sh.n) * TAU + time * sh.speed; items.push({ p: tr([sh.r * Math.cos(a), 0, sh.r * Math.sin(a)], sh.tilt), r: 0.045, color: '#3b82f6' }); }
      }
      for (const n of nucleus) items.push({ p: n.p, r: 0.05, color: n.proton ? '#ef4444' : '#d4d4d8' });
      items.forEach((it) => { it.rr = v.rot(it.p); it.s = v.proj(it.rr); });
      items.sort((a, b) => a.rr[2] - b.rr[2]);
      for (const it of items) ball(ctx, it.s[0], it.s[1], it.r * v.scale * it.s[2], it.color);
    };
    return v;
  };
})();
