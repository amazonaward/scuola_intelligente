/* Widget interattivi. Widgets.mount(host, nome, opzioni) */
(function () {
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const slider = (label, min, max, val, onChange, step = 1) => {
    const w = el('label', 'sl', `${label}: <b>${val}</b> <input type="range" min="${min}" max="${max}" step="${step}" value="${val}">`);
    const inp = w.querySelector('input'); inp.oninput = () => { w.querySelector('b').textContent = inp.value; onChange(+inp.value); };
    return w;
  };
  const numInput = (label, val, min, max, onChange) => {
    const w = el('label', 'sl', `${label}: <input type="number" min="${min}" max="${max}" value="${val}">`);
    const inp = w.querySelector('input'); inp.onchange = () => { let v = Math.round(+inp.value); if (!(v >= min)) v = min; if (v > max) v = max; inp.value = v; onChange(v); };
    return w;
  };
  const N = (x) => i18n.num(x);

  const W = {
    fractionPie(host, o) {
      let n = o.n != null ? o.n : 3, d = o.d || 4;
      const ctl = el('div', 'w-ctl'), fig = el('div', 'w-fig'), out = el('div', 'w-out');
      host.append(fig, out, ctl);
      ctl.append(slider(t('w.numerator'), 0, 24, n, (v) => { n = v; draw(); }), slider(t('w.denominator'), 1, 12, d, (v) => { d = v; draw(); }));
      function pie(cx, cy, r, filled) {
        let s = '';
        if (d === 1) return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${filled ? '#f97316' : '#fff'}" stroke="#334155" stroke-width="2"/>`;
        for (let i = 0; i < d; i++) {
          const a0 = (i / d) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / d) * 2 * Math.PI - Math.PI / 2;
          const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
          s += `<path d="M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${1 / d > 0.5 ? 1 : 0} 1 ${x1},${y1} Z" fill="${i < filled ? '#f97316' : '#fff'}" stroke="#334155" stroke-width="2"/>`;
        }
        return s;
      }
      function draw() {
        const wholes = Math.max(1, Math.ceil(n / d));
        let svg = `<svg viewBox="0 0 ${wholes * 130 + 10} 210" class="w-svg">`;
        for (let k = 0; k < wholes; k++) svg += pie(70 + k * 130, 65, 55, Math.max(0, Math.min(d, n - k * d)));
        const bw = wholes * 130 - 10;
        for (let k = 0; k < wholes; k++) for (let i = 0; i < d; i++) {
          const w = (bw / wholes) / d; const x = 10 + k * (bw / wholes) + i * w;
          svg += `<rect x="${x}" y="150" width="${w}" height="40" fill="${k * d + i < n ? '#3b82f6' : '#fff'}" stroke="#334155" stroke-width="2"/>`;
        }
        fig.innerHTML = svg + '</svg>';
        out.innerHTML = `<span class="frac big"><span>${n}</span><span>${d}</span></span> = ${N(Math.round((n / d) * 1000) / 1000)} = ${N(Math.round((n / d) * 1000) / 10)}%`;
      }
      draw();
    },

    numberLine(host, o) {
      const min = o.min != null ? o.min : 0, max = o.max != null ? o.max : 20;
      let pos = o.start != null ? o.start : min, jump = o.step || 1; const hops = [];
      const fig = el('div', 'w-fig'), out = el('div', 'w-out'), ctl = el('div', 'w-ctl');
      host.append(fig, out, ctl);
      ctl.append(slider(t('w.start'), min, max, pos, (v) => { pos = v; hops.length = 0; draw(); }), slider(t('w.jump'), 1, Math.max(1, Math.floor((max - min) / 2)), jump, (v) => { jump = v; }));
      const bm = el('button', 'btn btn-small', `− ${t('w.jump')}`), bp = el('button', 'btn btn-small', `+ ${t('w.jump')}`), br = el('button', 'btn btn-small btn-ghost', '↺');
      bm.onclick = () => { if (pos - jump >= min) { hops.push([pos, pos - jump]); pos -= jump; draw(); } };
      bp.onclick = () => { if (pos + jump <= max) { hops.push([pos, pos + jump]); pos += jump; draw(); } };
      br.onclick = () => { hops.length = 0; draw(); };
      ctl.append(bm, bp, br);
      function draw() {
        const W = 640, X = (v) => 25 + ((v - min) / (max - min)) * (W - 50);
        let s = `<svg viewBox="0 0 ${W} 130" class="w-svg"><line x1="15" y1="90" x2="${W - 15}" y2="90" stroke="#334155" stroke-width="3"/>`;
        const every = max - min > 40 ? 10 : max - min > 20 ? 5 : 1;
        for (let v = min; v <= max; v++) {
          const big = v % every === 0;
          s += `<line x1="${X(v)}" y1="${big ? 80 : 85}" x2="${X(v)}" y2="${big ? 100 : 95}" stroke="#334155" stroke-width="2"/>`;
          if (big) s += `<text x="${X(v)}" y="120" text-anchor="middle" font-size="14" fill="#334155">${v}</text>`;
        }
        (o.marks || []).forEach((m) => { s += `<circle cx="${X(m)}" cy="90" r="5" fill="#a855f7"/>`; });
        hops.forEach(([a, b]) => { const mx = (X(a) + X(b)) / 2, h = Math.min(60, Math.abs(X(b) - X(a)) / 1.5 + 10); s += `<path d="M${X(a)},88 Q${mx},${88 - h * 1.6} ${X(b)},88" fill="none" stroke="#f97316" stroke-width="3"/><text x="${mx}" y="${88 - h * 0.85}" text-anchor="middle" font-size="14" font-weight="bold" fill="#c2410c">${b > a ? '+' : '−'}${Math.abs(b - a)}</text>`; });
        s += `<text x="${X(pos)}" y="75" text-anchor="middle" font-size="28">🐸</text></svg>`;
        fig.innerHTML = s; out.innerHTML = `<b class="big">${pos}</b>`;
      }
      draw();
    },

    abacus(host, o) {
      const cols = o.columns || ['h', 'da', 'u'];
      let val = o.value || 0; const max = 10 ** cols.length - 1;
      const fig = el('div', 'w-fig'), out = el('div', 'w-out');
      host.append(fig, out);
      const COL = ['#8b5cf6', '#3b82f6', '#22c55e', '#ef4444', '#f97316', '#eab308'];
      function draw() {
        const digits = String(val).padStart(cols.length, '0').split('').map(Number);
        fig.innerHTML = ''; const row = el('div', 'abacus');
        cols.forEach((c, k) => {
          const color = COL[(COL.length - cols.length + k) % COL.length];
          const col = el('div', 'ab-col');
          const up = el('button', 'btn btn-small', '+'), dn = el('button', 'btn btn-small', '−');
          const p = 10 ** (cols.length - 1 - k);
          up.onclick = () => { if (val + p <= max) { val += p; draw(); } };
          dn.onclick = () => { if (val - p >= 0) { val -= p; draw(); } };
          let beads = ''; for (let i = 0; i < 9; i++) beads += `<i style="background:${i < digits[k] ? color : 'transparent'};border-color:${i < digits[k] ? color : '#e2e8f0'}"></i>`;
          col.innerHTML = `<div class="ab-rod">${beads}</div><div class="ab-lbl" style="color:${color}">${c}</div><div class="ab-dig">${digits[k]}</div>`;
          col.prepend(up); col.append(dn); row.appendChild(col);
        });
        fig.appendChild(row);
        out.innerHTML = `<b class="big">${val}</b>`;
      }
      draw();
    },

    timesTable(host, o) {
      const n = o.size || 10; const out = el('div', 'w-out'); const g = el('div', 'tt-grid');
      g.style.gridTemplateColumns = `repeat(${n + 1}, 1fr)`;
      host.append(out, g);
      const cells = [];
      for (let r = 0; r <= n; r++) for (let c = 0; c <= n; c++) {
        const d = el('div', 'tt-cell' + (r === 0 || c === 0 ? ' tt-head' : ''), r === 0 && c === 0 ? '×' : r === 0 ? c : c === 0 ? r : r * c);
        if (r && c) { d.onmouseenter = d.onclick = () => hl(r, c); }
        cells.push({ d, r, c }); g.appendChild(d);
      }
      function hl(R, C) {
        cells.forEach(({ d, r, c }) => { d.classList.toggle('in', r > 0 && c > 0 && r <= R && c <= C); d.classList.toggle('hit', r === R && c === C); });
        out.innerHTML = `<b class="big">${R} × ${C} = ${R * C}</b><br><span class="muted">${Array(R).fill(C).join(' + ')} = ${R * C}</span>`;
      }
      out.innerHTML = `<span class="muted">${t('w.pick')}</span>`;
    },

    counter(host, o) {
      const e = o.emoji || '🍎', max = o.max || 20; let n = o.start || 5;
      const fig = el('div', 'w-fig counter'), out = el('div', 'w-out'), ctl = el('div', 'w-ctl');
      host.append(fig, out, ctl);
      const add = el('button', 'btn', '➕ ' + t('w.add')), rem = el('button', 'btn btn-ghost', '➖ ' + t('w.remove'));
      add.onclick = () => { if (n < max) { n++; draw(); } }; rem.onclick = () => { if (n > 0) { n--; draw(); } };
      ctl.append(rem, add);
      function draw() {
        let h = ''; for (let k = 0; k < Math.ceil(n / 10); k++) h += `<div class="ten">${e.repeat(Math.min(10, n - k * 10))}</div>`;
        fig.innerHTML = h || '&nbsp;'; out.innerHTML = `<b class="big">${n}</b>`;
      }
      draw();
    },

    areaGrid(host, o) {
      let w = o.w || 5, h = o.h || 3; const max = o.max || 12;
      const fig = el('div', 'w-fig'), out = el('div', 'w-out'), ctl = el('div', 'w-ctl');
      host.append(fig, out, ctl);
      ctl.append(slider(t('w.base'), 1, max, w, (v) => { w = v; draw(); }), slider(t('w.height'), 1, max, h, (v) => { h = v; draw(); }));
      function draw() {
        const c = 28, W = max * c + 40, H = max * c + 40;
        let s = `<svg viewBox="0 0 ${W} ${H}" class="w-svg" style="max-height:340px">`;
        for (let i = 0; i <= max; i++) s += `<line x1="20" y1="${20 + i * c}" x2="${20 + max * c}" y2="${20 + i * c}" stroke="#e2e8f0"/><line x1="${20 + i * c}" y1="20" x2="${20 + i * c}" y2="${20 + max * c}" stroke="#e2e8f0"/>`;
        for (let i = 0; i < h; i++) for (let j = 0; j < w; j++) s += `<rect x="${21 + j * c}" y="${21 + i * c}" width="${c - 2}" height="${c - 2}" fill="${(i + j) % 2 ? '#93c5fd' : '#bfdbfe'}"/>`;
        s += `<rect x="20" y="20" width="${w * c}" height="${h * c}" fill="none" stroke="#ef4444" stroke-width="4"/></svg>`;
        fig.innerHTML = s;
        out.innerHTML = `<span style="color:#ef4444">${t('w.perimeter')} = (${w} + ${h}) × 2 = <b>${2 * (w + h)}</b></span> &nbsp;·&nbsp; <span style="color:#2563eb">${t('w.area')} = ${w} × ${h} = <b>${w * h}</b> ${t('w.squares')}</span>`;
      }
      draw();
    },

    pythagoras(host, o) {
      let a = o.a || 3, b = o.b || 4;
      const fig = el('div', 'w-fig'), out = el('div', 'w-out'), ctl = el('div', 'w-ctl');
      host.append(fig, out, ctl);
      ctl.append(slider(t('w.legA'), 1, 12, a, (v) => { a = v; draw(); }), slider(t('w.legB'), 1, 12, b, (v) => { b = v; draw(); }));
      function draw() {
        const c = Math.hypot(a, b), u = 220 / (a + b + c);
        const A = [0, 0], B = [b * u, 0], C = [0, -a * u];
        const sq = (P, Q, col, lbl) => { const dx = Q[0] - P[0], dy = Q[1] - P[1]; const R = [Q[0] + dy, Q[1] - dx], S = [P[0] + dy, P[1] - dx]; const cx = (P[0] + R[0]) / 2, cy = (P[1] + R[1]) / 2; return `<polygon points="${[P, Q, R, S].map((p) => p.join(',')).join(' ')}" fill="${col}" fill-opacity=".55" stroke="${col}" stroke-width="2"/><text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="bold" fill="#111">${lbl}</text>`; };
        let s = `<svg viewBox="-260 -300 560 560" class="w-svg" style="max-height:380px"><g>`;
        s += sq(A, C, '#ef4444', `a² = ${a * a}`) + sq(B, A, '#3b82f6', `b² = ${b * b}`) + sq(C, B, '#22c55e', `c² = ${N(Math.round(c * c * 100) / 100)}`);
        s += `<polygon points="${[A, B, C].map((p) => p.join(',')).join(' ')}" fill="#fde68a" stroke="#111" stroke-width="3"/><rect x="0" y="-12" width="12" height="12" fill="none" stroke="#111"/></g></svg>`;
        fig.innerHTML = s;
        out.innerHTML = `${a}² + ${b}² = ${a * a} + ${b * b} = <b>${a * a + b * b}</b> → c = √${a * a + b * b} ≈ <b>${N(Math.round(c * 100) / 100)}</b>`;
      }
      draw();
    },

    timeline(host, o) {
      const ev = (o.events || []).slice().sort((p, q) => p.year - q.year);
      const log = o.scale === 'log';
      const fig = el('div', 'w-fig tl-wrap'), out = el('div', 'w-out');
      host.append(fig, out);
      const now = new Date().getFullYear();
      const fmt = (y) => {
        if (log || Math.abs(y) >= 100000) {
          const ago = now - y; if (ago >= 1e9) return `${N(Math.round(ago / 1e8) / 10)} ${t('w.billion')} ${t('w.yearsAgo')}`;
          if (ago >= 1e6) return `${N(Math.round(ago / 1e5) / 10)} ${t('w.million')} ${t('w.yearsAgo')}`;
          return `${ago.toLocaleString()} ${t('w.yearsAgo')}`;
        }
        return y < 0 ? `${-y} ${t('w.bc')}` : `${y}${y < 1000 ? ' ' + t('w.ad') : ''}`;
      };
      const ys = ev.map((e) => e.year); const lo = Math.min(...ys), hi = Math.max(...ys);
      const pos = (y) => { if (log) { const a = Math.log10(now - lo + 1), b = Math.log10(now - hi + 1); return 1 - (Math.log10(now - y + 1) - b) / (a - b || 1); } return (y - lo) / (hi - lo || 1); };
      const W = Math.max(700, ev.length * 90);
      let s = `<svg viewBox="0 0 ${W} 170" style="width:${W}px;height:170px"><line x1="20" y1="85" x2="${W - 20}" y2="85" stroke="#334155" stroke-width="4" stroke-linecap="round"/>`;
      ev.forEach((e, i) => {
        const x = 40 + pos(e.year) * (W - 80); const up = i % 2 === 0;
        s += `<g class="tl-ev" data-i="${i}" style="cursor:pointer"><line x1="${x}" y1="85" x2="${x}" y2="${up ? 45 : 125}" stroke="#94a3b8" stroke-width="2"/><circle cx="${x}" cy="85" r="8" fill="#f97316" stroke="#fff" stroke-width="2"/><text x="${x}" y="${up ? 35 : 150}" text-anchor="middle" font-size="22">${e.icon || '📌'}</text><text x="${x}" y="${up ? 60 : 118}" text-anchor="middle" font-size="11" fill="#334155">${(e.label || '').slice(0, 18)}</text></g>`;
      });
      s += '</svg>';
      fig.innerHTML = s;
      out.innerHTML = `<span class="muted">${t('w.pick')}</span>`;
      fig.querySelectorAll('.tl-ev').forEach((g) => (g.onclick = () => { const e = ev[g.dataset.i]; out.innerHTML = `<b>${e.icon || ''} ${e.label}</b><br>${fmt(e.year)}${e.text ? '<br>' + e.text : ''}`; }));
    },

    flashcards(host, o) {
      const g = el('div', 'fc-grid'); host.append(el('p', 'muted', t('w.flip')), g);
      (o.cards || []).forEach((c) => { const d = el('div', 'fc', `<div class="fc-in"><div class="fc-f">${c.front}</div><div class="fc-b">${c.back}</div></div>`); d.onclick = () => d.classList.toggle('flip'); g.appendChild(d); });
    },

    match(host, o) {
      const pairs = o.pairs || []; const out = el('div', 'w-out'); const g = el('div', 'match');
      const L = el('div', 'm-col'), R = el('div', 'm-col'); g.append(L, R); host.append(el('p', 'muted', t('w.tapPair')), g, out);
      let selL = null, found = 0;
      const upd = () => { out.innerHTML = found === pairs.length ? `<b>${t('w.matchDone')}</b>` : t('w.found', { a: found, b: pairs.length }); };
      shuffle(pairs.map((p, i) => [p[0], i])).forEach(([txt, i]) => { const b = el('button', 'chip m-item', txt); b.onclick = () => { if (b.classList.contains('ok')) return; L.querySelectorAll('.sel').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); selL = { b, i }; }; L.appendChild(b); });
      shuffle(pairs.map((p, i) => [p[1], i])).forEach(([txt, i]) => { const b = el('button', 'chip m-item', txt); b.onclick = () => {
        if (!selL || b.classList.contains('ok')) return;
        if (selL.i === i) { b.classList.add('ok'); selL.b.classList.add('ok'); selL.b.classList.remove('sel'); selL = null; found++; upd(); }
        else { b.classList.add('no'); setTimeout(() => b.classList.remove('no'), 500); }
      }; R.appendChild(b); });
      upd();
    },

    classify(host, o) {
      const groups = o.groups || [], items = shuffle(o.items || []); const out = el('div', 'w-out');
      const pool = el('div', 'cl-pool'), bins = el('div', 'cl-bins'); host.append(el('p', 'muted', t('w.tapItem')), pool, bins, out);
      let sel = null, done = 0;
      const binEls = groups.map((g, k) => { const b = el('div', 'cl-bin', `<h5>${g}</h5><div class="cl-in"></div>`); b.onclick = () => {
        if (!sel) return;
        if (sel.g === k) { b.querySelector('.cl-in').appendChild(sel.b); sel.b.classList.remove('sel'); sel.b.classList.add('ok'); sel.b.disabled = true; sel = null; done++; if (done === items.length) out.innerHTML = `<b>${t('w.classifyDone')}</b>`; }
        else { b.classList.add('no'); setTimeout(() => b.classList.remove('no'), 500); }
      }; bins.appendChild(b); return b; });
      items.forEach(([txt, g]) => { const b = el('button', 'chip', txt); b.onclick = () => { pool.querySelectorAll('.sel').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); sel = { b, g }; }; pool.appendChild(b); });
      void binEls;
    },

    labelDiagram(host, o) {
      const fig = el('div', 'w-fig ld'), out = el('div', 'w-out'); host.append(el('p', 'muted', t('w.tapSpot')), fig, out);
      fig.innerHTML = o.svg || '';
      const svg = fig.querySelector('svg'); if (!svg) return;
      svg.classList.add('w-svg');
      const NS = 'http://www.w3.org/2000/svg'; const spots = o.spots || []; let done = 0;
      const labels = spots.map((s) => s.label);
      spots.forEach((s, k) => {
        const g = document.createElementNS(NS, 'g'); g.setAttribute('style', 'cursor:pointer');
        g.innerHTML = `<circle cx="${s.x}" cy="${s.y}" r="13" fill="#facc15" stroke="#111" stroke-width="2"/><text x="${s.x}" y="${s.y + 5}" text-anchor="middle" font-size="14" font-weight="bold">${k + 1}</text>`;
        g.onclick = () => {
          out.innerHTML = `<b>${k + 1}.</b> ${t('w.choose')} `;
          shuffle(labels).forEach((lb) => { const b = el('button', 'chip', lb); b.onclick = () => {
            if (lb === s.label) { g.querySelector('circle').setAttribute('fill', '#22c55e'); const tx = document.createElementNS(NS, 'text'); tx.setAttribute('x', s.x + 17); tx.setAttribute('y', s.y + 5); tx.setAttribute('font-size', '14'); tx.setAttribute('font-weight', 'bold'); tx.setAttribute('paint-order', 'stroke'); tx.setAttribute('stroke', '#fff'); tx.setAttribute('stroke-width', '4'); tx.textContent = s.label; g.appendChild(tx); g.onclick = null; done++; out.innerHTML = done === spots.length ? `<b>${t('w.classifyDone')}</b>` : `✅ ${s.label}`; }
            else { b.classList.add('no'); }
          }; out.appendChild(b); });
        };
        svg.appendChild(g);
      });
    },

    /* ---------- metodi di moltiplicazione ---------- */
    lineMultiply(host, o) {
      let a = o.a || 23, b = o.b || 12, step = 0;
      const ctl = el('div', 'w-ctl'), fig = el('div', 'w-fig'), out = el('div', 'w-out');
      host.append(el('p', 'muted', t('mul.lines')), ctl, fig, out);
      const next = el('button', 'btn btn-small', t('mul.step')), re = el('button', 'btn btn-small btn-ghost', t('mul.restart'));
      ctl.append(numInput(t('mul.a'), a, 11, 99, (v) => { a = v; step = 0; draw(); }), numInput(t('mul.b'), b, 11, 99, (v) => { b = v; step = 0; draw(); }), next, re);
      next.onclick = () => { step = Math.min(5, step + 1); draw(); }; re.onclick = () => { step = 0; draw(); };
      function draw() {
        const [a1, a0] = [Math.floor(a / 10), a % 10], [b1, b0] = [Math.floor(b / 10), b % 10];
        const rot = (x, y) => { const c = Math.SQRT1_2; return [300 + (x * c + y * c), 190 + (-x * c + y * c)]; };
        // linee di a orizzontali (decine in alto), di b verticali (decine a sinistra) prima della rotazione
        const ya = [], xb = []; const gap = 14, sep = 50;
        for (let i = 0; i < a1; i++) ya.push(-sep / 2 - (a1 - 1 - i) * gap - 20); for (let i = 0; i < a0; i++) ya.push(sep / 2 + i * gap + 20);
        for (let i = 0; i < b1; i++) xb.push(-sep / 2 - (b1 - 1 - i) * gap - 20); for (let i = 0; i < b0; i++) xb.push(sep / 2 + i * gap + 20);
        const ext = 170; let s = `<svg viewBox="0 0 600 380" class="w-svg">`;
        if (step >= 1) ya.forEach((y, i) => { const p = rot(-ext, y), q = rot(ext, y); s += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${i < a1 ? '#ef4444' : '#f97316'}" stroke-width="4" stroke-linecap="round"/>`; });
        if (step >= 2) xb.forEach((x, i) => { const p = rot(x, -ext), q = rot(x, ext); s += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${i < b1 ? '#3b82f6' : '#06b6d4'}" stroke-width="4" stroke-linecap="round"/>`; });
        const zc = { H: 0, T: 0, U: 0 };
        if (step >= 3) ya.forEach((y, i) => xb.forEach((x, j) => {
          const z = i < a1 && j < b1 ? 'H' : i >= a1 && j >= b1 ? 'U' : 'T'; zc[z]++;
          const p = rot(x, y); s += `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="${z === 'H' ? '#a855f7' : z === 'T' ? '#16a34a' : '#eab308'}" stroke="#111"/>`;
        }));
        if (step >= 4) {
          [['H', 300 - 180, '#a855f7'], ['T', 300, '#16a34a'], ['U', 300 + 180, '#ca8a04']].forEach(([z, x, c]) => { s += `<text x="${x}" y="372" text-anchor="middle" font-size="22" font-weight="bold" fill="${c}">${zc[z]}</text>`; });
        }
        fig.innerHTML = s + '</svg>';
        if (step >= 5) {
          const H = a1 * b1, T = a1 * b0 + a0 * b1, U = a0 * b0;
          const u = U % 10, c1 = Math.floor(U / 10), tt = (T + c1) % 10, c2 = Math.floor((T + c1) / 10), hh = H + c2;
          out.innerHTML = `${t('mul.zone')}: <b style="color:#a855f7">${H}</b> | <b style="color:#16a34a">${T}</b> | <b style="color:#ca8a04">${U}</b><br>` +
            `${U} → ${u} (${t('mul.carry')} ${c1}); ${T} + ${c1} = ${T + c1} → ${tt} (${t('mul.carry')} ${c2}); ${H} + ${c2} = ${hh}<br>${t('mul.result')}: <b class="big">${a} × ${b} = ${a * b}</b>`;
        } else out.innerHTML = `<span class="muted">${step}/5</span>`;
      }
      draw();
    },

    russianPeasant(host, o) {
      let a = o.a || 37, b = o.b || 24, step = 0;
      const ctl = el('div', 'w-ctl'), fig = el('div', 'w-fig'), out = el('div', 'w-out');
      host.append(el('p', 'muted', t('mul.russian')), ctl, fig, out);
      const next = el('button', 'btn btn-small', t('mul.step')), re = el('button', 'btn btn-small btn-ghost', t('mul.restart'));
      ctl.append(numInput(t('mul.a'), a, 2, 999, (v) => { a = v; step = 0; draw(); }), numInput(t('mul.b'), b, 2, 999, (v) => { b = v; step = 0; draw(); }), next, re);
      re.onclick = () => { step = 0; draw(); };
      function rows() { const r = []; let x = a, y = b; while (x >= 1) { r.push([x, y]); x = Math.floor(x / 2); y *= 2; } return r; }
      next.onclick = () => { step = Math.min(rows().length + 2, step + 1); draw(); };
      function draw() {
        const r = rows(); const shown = Math.min(step, r.length); const strike = step > r.length;
        let h = '<table class="mt"><tr><th>÷ 2</th><th>× 2</th></tr>';
        r.slice(0, shown).forEach(([x, y]) => { const even = x % 2 === 0; h += `<tr class="${strike && even ? 'struck' : strike ? 'keep' : ''}"><td>${x}</td><td>${y}</td></tr>`; });
        fig.innerHTML = h + '</table>';
        if (step > r.length + 1) { const keep = r.filter(([x]) => x % 2 === 1).map(([, y]) => y); out.innerHTML = `${t('mul.sum')}: ${keep.join(' + ')} = <b class="big">${a * b}</b> = ${a} × ${b} ✓`; }
        else out.innerHTML = '';
      }
      draw();
    },

    egyptianMultiply(host, o) {
      let a = o.a || 13, b = o.b || 21, step = 0;
      const ctl = el('div', 'w-ctl'), fig = el('div', 'w-fig'), out = el('div', 'w-out');
      host.append(el('p', 'muted', t('mul.egypt')), ctl, fig, out);
      const next = el('button', 'btn btn-small', t('mul.step')), re = el('button', 'btn btn-small btn-ghost', t('mul.restart'));
      ctl.append(numInput(t('mul.a'), a, 2, 255, (v) => { a = v; step = 0; draw(); }), numInput(t('mul.b'), b, 2, 999, (v) => { b = v; step = 0; draw(); }), next, re);
      re.onclick = () => { step = 0; draw(); };
      const rows = () => { const r = []; for (let p = 1; p <= a; p *= 2) r.push([p, p * b]); return r; };
      next.onclick = () => { step = Math.min(rows().length + 2, step + 1); draw(); };
      function draw() {
        const r = rows(); const shown = Math.min(step, r.length); const pick = step > r.length;
        let h = '<table class="mt"><tr><th>𓏺 1, 2, 4…</th><th>× ' + b + '</th></tr>';
        r.slice(0, shown).forEach(([p, v]) => { const on = (a & p) !== 0; h += `<tr class="${pick ? (on ? 'keep' : 'struck') : ''}"><td>${p}</td><td>${v}</td></tr>`; });
        fig.innerHTML = h + '</table>';
        if (step > r.length + 1) { const k = r.filter(([p]) => a & p); out.innerHTML = `${k.map(([p]) => p).join(' + ')} = ${a}<br>${k.map(([, v]) => v).join(' + ')} = <b class="big">${a * b}</b>`; }
        else out.innerHTML = '';
      }
      draw();
    },

    lattice(host, o) {
      let a = o.a || 47, b = o.b || 36, step = 0;
      const ctl = el('div', 'w-ctl'), fig = el('div', 'w-fig'), out = el('div', 'w-out');
      host.append(el('p', 'muted', t('mul.lattice')), ctl, fig, out);
      const next = el('button', 'btn btn-small', t('mul.step')), re = el('button', 'btn btn-small btn-ghost', t('mul.restart'));
      ctl.append(numInput(t('mul.a'), a, 2, 999, (v) => { a = v; step = 0; draw(); }), numInput(t('mul.b'), b, 2, 999, (v) => { b = v; step = 0; draw(); }), next, re);
      next.onclick = () => { step = Math.min(3, step + 1); draw(); }; re.onclick = () => { step = 0; draw(); };
      function draw() {
        const A = String(a).split('').map(Number), B = String(b).split('').map(Number);
        const c = 70, X0 = 60, Y0 = 50, W = X0 + A.length * c + 60, H = Y0 + B.length * c + 60;
        let s = `<svg viewBox="0 0 ${W} ${H}" class="w-svg" style="max-height:360px">`;
        A.forEach((d, j) => (s += `<text x="${X0 + j * c + c / 2}" y="${Y0 - 15}" text-anchor="middle" font-size="26" font-weight="bold" fill="#ef4444">${d}</text>`));
        B.forEach((d, i) => (s += `<text x="${X0 + A.length * c + 20}" y="${Y0 + i * c + c / 2 + 9}" text-anchor="middle" font-size="26" font-weight="bold" fill="#3b82f6">${d}</text>`));
        // somme diagonali: indice k = (cifre da destra)
        const diag = {};
        B.forEach((db, i) => A.forEach((da, j) => {
          const x = X0 + j * c, y = Y0 + i * c, p = da * db;
          s += `<rect x="${x}" y="${y}" width="${c}" height="${c}" fill="#fff" stroke="#334155" stroke-width="2"/><line x1="${x + c}" y1="${y}" x2="${x}" y2="${y + c}" stroke="#94a3b8" stroke-width="2"/>`;
          if (step >= 1) s += `<text x="${x + 20}" y="${y + 30}" font-size="20" text-anchor="middle">${Math.floor(p / 10)}</text><text x="${x + c - 20}" y="${y + c - 12}" font-size="20" text-anchor="middle">${p % 10}</text>`;
          const kU = (A.length - 1 - j) + (B.length - 1 - i); diag[kU] = (diag[kU] || 0) + (p % 10); diag[kU + 1] = (diag[kU + 1] || 0) + Math.floor(p / 10);
        }));
        const K = A.length + B.length; let carry = 0; const digits = [], steps = [];
        for (let k = 0; k < K; k++) { const sum = (diag[k] || 0) + carry; digits.push(sum % 10); steps.push(`${diag[k] || 0}${carry ? ' + ' + carry : ''} = ${sum}`); carry = Math.floor(sum / 10); }
        if (step >= 2) digits.forEach((d, k) => {
          // posizione lungo il bordo sinistro/inferiore
          let x, y; if (k < A.length) { x = X0 + (A.length - 1 - k) * c + c / 2 - 10; y = Y0 + B.length * c + 30; } else { x = X0 - 25; y = Y0 + (B.length - 1 - (k - A.length)) * c + c / 2 + 10; }
          s += `<text x="${x}" y="${y}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">${d}</text>`;
        });
        fig.innerHTML = s + '</svg>';
        out.innerHTML = step >= 2 ? `${steps.map((x, k) => `<span class="chip">${x}</span>`).join(' ')}` + (step >= 3 ? `<br>${t('mul.result')}: <b class="big">${a} × ${b} = ${a * b}</b>` : '') : `<span class="muted">${step}/3</span>`;
      }
      draw();
    },

    /* ---------- laboratorio di chimica ---------- */
    chemLab(host) {
      const box = el('div', 'lab'); host.appendChild(box);
      box.innerHTML = `<p class="muted">${t('lab.pick')}</p><div class="lab-grid"><div class="lab-shelf"><h5>🧴 ${t('lab.shelf')}</h5><div class="lab-items"></div></div>
        <div class="lab-bench"><div class="beaker-wrap"><div class="beaker"><div class="liquid"></div><div class="fx"></div></div><div class="beaker-label">${t('lab.beaker')}</div></div>
        <div class="lab-in"></div><div class="w-ctl"><button class="btn lab-go">${t('lab.mix')}</button><button class="btn btn-ghost lab-clr">${t('lab.clear')}</button></div></div></div>
        <div class="lab-sug"><b>${t('lab.suggest')}:</b> </div><div class="lab-out"></div><p class="muted small">${t('lab.safety')}</p>`;
      const items = box.querySelector('.lab-items'), inList = box.querySelector('.lab-in'), liquid = box.querySelector('.liquid'), fx = box.querySelector('.fx'), outEl = box.querySelector('.lab-out'), beaker = box.querySelector('.beaker');
      let content = [];
      Chem.shelf.forEach((f) => { const s = Chem.substances[f]; const b = el('button', 'lab-bottle', `<i style="background:${s.color}"></i><b>${Chem.pretty(f)}</b><small>${Chem.name(f)}</small>`); b.onclick = () => add(f, 10); items.appendChild(b); });
      function add(f, g) { const ex = content.find((c) => c.f === f); if (ex) ex.g += g; else content.push({ f, g }); render(); }
      function render() {
        inList.innerHTML = '';
        content.forEach((c, k) => {
          const r = el('div', 'lab-row', `<span><i style="background:${Chem.substances[c.f].color}"></i> ${Chem.pretty(c.f)}</span><input type="number" min="0.1" step="0.1" value="${c.g}"> ${t('lab.grams')} <button class="x">✕</button>`);
          r.querySelector('input').onchange = (e) => { c.g = Math.max(0.1, +e.target.value || 0.1); };
          r.querySelector('.x').onclick = () => { content.splice(k, 1); render(); };
          inList.appendChild(r);
        });
        liquid.innerHTML = content.map((c) => `<div style="background:${Chem.substances[c.f].color};flex:${c.g}"></div>`).join('');
        liquid.style.height = Math.min(85, 15 + content.reduce((s, c) => s + c.g, 0) * 0.6) + '%';
        beaker.className = 'beaker'; fx.innerHTML = '';
      }
      box.querySelector('.lab-clr').onclick = () => { content = []; outEl.innerHTML = ''; render(); };
      // suggerimenti con quantità stechiometriche
      [['H2', 'O2', 2], ['NaHCO3', 'CH3COOH', 0.1], ['NaOH', 'HCl', 0.1], ['Fe', 'S', 0.1], ['AgNO3', 'NaCl', 0.1], ['CH4', 'O2', 1], ['Fe', 'CuSO4', 0.1], ['Zn', 'HCl', 0.1], ['Mg', 'O2', 0.2], ['CaCO3', 'HCl', 0.1], ['NaCl', 'H2O', null]].forEach(([a, b, xi]) => {
        const rx = Chem.reactions.find((r) => r.r[a] && r.r[b]);
        const g = (f) => (xi && rx ? Math.round(rx.r[f] * Chem.substances[f].M * xi * 100) / 100 : f === 'H2O' ? 100 : 10);
        const s = el('button', 'chip', `${Chem.pretty(a)} + ${Chem.pretty(b)}`); s.onclick = () => { content = [{ f: a, g: g(a) }, { f: b, g: g(b) }]; render(); outEl.innerHTML = ''; };
        box.querySelector('.lab-sug').appendChild(s);
      });
      const fmt = (x) => N(Math.round(x * 100) / 100);
      box.querySelector('.lab-go').onclick = () => {
        const fs = content.map((c) => c.f);
        const rx = Chem.reactions.find((r) => Object.keys(r.r).every((f) => fs.includes(f)));
        beaker.className = 'beaker'; fx.innerHTML = '';
        if (!rx) {
          const ph = Chem.physical.find((p) => !p.skip && p.set.every((f) => fs.includes(f)));
          outEl.innerHTML = `<div class="callout ${ph ? 'c-example' : 'c-remember'}">${ph ? Chem.obs(ph.obs) : t('lab.noReaction')}</div>`;
          if (ph) beaker.classList.add('fx-dissolve');
          return;
        }
        // calcoli
        const R = Object.entries(rx.r).map(([f, nu]) => { const c = content.find((x) => x.f === f); const M = Chem.substances[f].M; const n = c.g / M; return { f, nu, g: c.g, M, n, ratio: n / nu }; });
        const xi = Math.min(...R.map((r) => r.ratio)); const lim = R.reduce((p, q) => (q.ratio < p.ratio ? q : p));
        const P = Object.entries(rx.p).map(([f, nu]) => { const M = Chem.substances[f].M; return { f, nu, M, n: nu * xi, g: nu * xi * M }; });
        const spect = content.filter((c) => !rx.r[c.f]);
        const left = R.map((r) => ({ ...r, ln: r.n - r.nu * xi, lg: (r.n - r.nu * xi) * r.M })).filter((r) => r.lg > Math.max(0.005, r.g * 0.002));
        const before = content.reduce((s, c) => s + c.g, 0);
        const after = P.reduce((s, p) => s + p.g, 0) + left.reduce((s, r) => s + r.lg, 0) + spect.reduce((s, c) => s + c.g, 0);
        const eq = (side) => Object.entries(side).map(([f, nu]) => `${nu > 1 ? nu + ' ' : ''}${Chem.pretty(f)}`).join(' + ');
        // effetto visivo
        beaker.classList.add('fx-' + rx.fx);
        if (rx.fx === 'bubbles') for (let i = 0; i < 18; i++) fx.appendChild(el('span', 'bub', '')).style.cssText = `left:${5 + Math.random() * 90}%;animation-delay:${Math.random() * 2}s`;
        if (rx.fx === 'flame' || rx.fx === 'flash') fx.innerHTML = '<span class="flame">🔥</span>';
        if (rx.fx === 'precipitate') for (let i = 0; i < 30; i++) fx.appendChild(el('span', 'ppt', '')).style.cssText = `left:${5 + Math.random() * 90}%;animation-delay:${Math.random() * 1.5}s`;
        setTimeout(() => { liquid.innerHTML = P.concat(left).filter((x) => Chem.substances[x.f].state !== 'g').map((x) => `<div style="background:${Chem.substances[x.f].color};flex:${x.g || x.lg}"></div>`).join(''); }, 1500);
        const molBtns = P.filter((p) => Chem.mol[p.f]).map((p) => `<button class="chip" data-mol="${p.f}">🧊 ${Chem.pretty(p.f)} 3D</button>`).join(' ');
        outEl.innerHTML = `<div class="callout c-curiosity"><b>👀 ${t('lab.observe')}:</b> ${Chem.obs(rx.obs)}<br><b>${rx.exo ? t('lab.exo') : t('lab.endo')}</b></div>
          <h4>${t('lab.equation')}</h4><div class="eq">${eq(rx.r)} → ${eq(rx.p)}</div>
          <h4>${t('lab.steps')}</h4>
          <table class="mt lab-t"><tr><th>${t('lab.reactants')}</th><th>g</th><th>${t('lab.molarMass')}</th><th>${t('lab.moles')}</th><th>${t('lab.moles')} ÷ coeff.</th></tr>
          ${R.map((r) => `<tr class="${r === lim ? 'keep' : ''}"><td>${Chem.pretty(r.f)}</td><td>${fmt(r.g)}</td><td>${fmt(r.M)} g/mol</td><td>${fmt(r.g)} ÷ ${fmt(r.M)} = ${N(Math.round(r.n * 1000) / 1000)}</td><td>${N(Math.round(r.ratio * 1000) / 1000)}</td></tr>`).join('')}</table>
          <p>⚖️ <b>${t('lab.limiting')}: ${Chem.pretty(lim.f)}</b> (${Chem.name(lim.f)}) ${left.length ? '' : '— ' + t('lab.perfect')}</p>
          ${left.map((r) => `<p>➕ ${Chem.pretty(r.f)} ${t('lab.leftover')}: ${fmt(r.lg)} g</p>`).join('')}
          <table class="mt lab-t"><tr><th>${t('lab.products')}</th><th>${t('lab.moles')}</th><th>g</th></tr>
          ${P.map((p) => `<tr><td>${Chem.pretty(p.f)} – ${Chem.name(p.f)}${Chem.substances[p.f].state === 'g' ? ' (' + t('lab.gas') + ')' : ''}</td><td>${p.nu} × ${N(Math.round(xi * 1000) / 1000)} = ${N(Math.round(p.n * 1000) / 1000)}</td><td><b>${fmt(p.g)}</b></td></tr>`).join('')}</table>
          <div class="callout c-remember">${t('lab.massBefore')}: <b>${fmt(before)} g</b> → ${t('lab.massAfter')}: <b>${fmt(after)} g</b><br>${t('lab.lavoisier')}</div>
          <div>${molBtns}</div><div class="lab-mol"></div>`;
        outEl.querySelectorAll('[data-mol]').forEach((b) => (b.onclick = () => { const h = outEl.querySelector('.lab-mol'); h.innerHTML = ''; Mini3D.mount(h, 'molecule', Chem.mol[b.dataset.mol]); }));
      };
    },

    periodicTable(host) {
      const box = el('div', 'ptable-wrap'); host.appendChild(box);
      const grid = el('div', 'ptable'); const card = el('div', 'pt-card', `<p class="muted">${t('pt.tap')}</p>`); const atomBox = el('div');
      box.append(grid, card, atomBox);
      const cats = ['alkali', 'alkaline', 'transition', 'metal', 'metalloid', 'nonmetal', 'halogen', 'noble'];
      Chem.elements.forEach((e) => {
        const b = el('button', 'pt-el cat-' + e.cat, `<small>${e.z}</small><b>${e.sym}</b>`);
        b.style.gridColumn = e.group; b.style.gridRow = e.period; b.title = e.names[i18n.lang] || e.names.it;
        b.onclick = () => {
          grid.querySelectorAll('.sel').forEach((x) => x.classList.remove('sel')); b.classList.add('sel');
          card.innerHTML = `<div class="pt-big cat-${e.cat}"><small>${e.z}</small><b>${e.sym}</b><span>${N(e.mass)}</span></div><div><h4>${e.names[i18n.lang] || e.names.it}</h4><p>${t('pt.z')}: <b>${e.z}</b> · ${t('pt.mass')}: <b>${N(e.mass)} u</b><br>${t('pt.group')}: ${e.group} · ${t('pt.period')}: ${e.period}<br>${t('pt.cat.' + e.cat)}</p></div>`;
          atomBox.innerHTML = ''; Mini3D.mount(atomBox, 'atom', { elements: [e.sym] });
        };
        grid.appendChild(b);
      });
      box.appendChild(el('div', 'pt-legend', cats.map((c) => `<span class="cat-${c}">${t('pt.cat.' + c)}</span>`).join('')));
    }
  };

  window.Widgets = {
    mount(host, name, options) {
      if (!W[name]) { host.textContent = 'Widget: ' + name + '?'; return; }
      try { W[name](host, options || {}); } catch (e) { console.error(e); host.textContent = 'Widget error: ' + name; }
    }
  };
})();
