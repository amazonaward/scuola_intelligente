/* Generatori di esercizi: ogni chiamata produce una domanda nuova, nella lingua attiva. */
(function () {
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const gcdF = (a, b) => (b ? gcdF(b, a % b) : a);
  const N = (x) => i18n.num(x);
  const op = (e) => `<span class="big-op">${e}</span>`;
  const frac = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;
  const calc = (expr, ans, unit) => ({ type: 'num', q: op(expr + ' = ?'), answer: ans, unit, explain: `${expr} = ${N(ans)}` });
  const EMOJI = ['🍎', '⭐', '🐟', '🌸', '🚗', '🎈', '🐞', '🍓', '⚽', '🦆'];

  const G = {
    count20() {
      const n = R(3, 20), e = pick(EMOJI);
      return { type: 'num', q: `${t('g.howMany')}<div class="emoji-count">${e.repeat(n)}</div>`, answer: n, explain: t('g.explainCount') + ' → ' + n };
    },
    compare20() { return G._compare(20); },
    compare100() { return G._compare(100); },
    _compare(max) {
      let a = R(0, max), b = R(0, max); while (b === a) b = R(0, max);
      return { type: 'mc', q: t('g.bigger'), options: [String(a), String(b)], answer: a > b ? 0 : 1, explain: `${Math.max(a, b)} > ${Math.min(a, b)}` };
    },
    add20() { const a = R(0, 15), b = R(0, 20 - a); return calc(`${a} + ${b}`, a + b); },
    sub20() { const a = R(2, 20), b = R(0, a); return calc(`${a} − ${b}`, a - b); },
    add100() { const a = R(10, 80), b = R(5, 99 - a); return calc(`${a} + ${b}`, a + b); },
    sub100() { const a = R(20, 99), b = R(5, a - 1); return calc(`${a} − ${b}`, a - b); },
    tensUnits() { const n = R(11, 99); return { type: 'num', q: t('g.tensIn', { n: `<b>${n}</b>` }), answer: Math.floor(n / 10), explain: `${n} = ${Math.floor(n / 10)} da + ${n % 10} u` }; },
    times() { const a = R(1, 10), b = R(1, 10); return calc(`${a} × ${b}`, a * b); },
    divExact() { const b = R(2, 10), q = R(1, 10); return calc(`${b * q} : ${b}`, q); },
    divRem() {
      const b = R(2, 9), q = R(2, 12), r = R(1, b - 1), a = b * q + r;
      return { type: 'num', q: t('g.remainder', { a, b }), answer: r, explain: `${a} = ${b} × ${q} + ${r}` };
    },
    placeValue() {
      const digits = R(3, 6); let n = R(10 ** (digits - 1), 10 ** digits - 1);
      const s = String(n); const pos = R(0, s.length - 1); const d = s[pos];
      if (d === '0') return G.placeValue();
      const val = Number(d) * 10 ** (s.length - 1 - pos);
      const shown = s.slice(0, pos) + `<u><b>${d}</b></u>` + s.slice(pos + 1);
      return { type: 'num', q: t('g.digitValue', { d: `<b>${d}</b>`, n: shown }), answer: val, explain: `${d} → ${val}` };
    },
    mult2() { const a = R(12, 99), b = R(2, 9); return calc(`${a} × ${b}`, a * b); },
    div2() { const b = R(11, 40), q = R(2, 25); return calc(`${b * q} : ${b}`, q); },
    fracOf() {
      const b = pick([2, 3, 4, 5, 6, 8, 10]), a = R(1, b - 1), k = R(1, 10), n = b * k;
      return { type: 'num', q: t('g.fracOf', { f: frac(a, b), n: `<b>${n}</b>` }), answer: a * k, explain: `${n} : ${b} = ${k}; ${k} × ${a} = ${a * k}` };
    },
    fracEquiv() {
      const b = pick([2, 3, 4, 5]), a = R(1, b - 1), k = R(2, 5);
      const right = `${a * k}/${b * k}`;
      const wrongs = new Set();
      while (wrongs.size < 3) {
        const w = `${a * k + R(-2, 2) || 1}/${b * k + R(-2, 3)}`;
        const [x, y] = w.split('/').map(Number);
        if (y > 0 && x > 0 && x * b !== y * a) wrongs.add(w);
      }
      const opts = [right, ...wrongs].sort(() => Math.random() - 0.5);
      return { type: 'mc', q: t('g.fracEquiv', { f: frac(a, b) }), options: opts, answer: opts.indexOf(right), explain: `${frac(a, b)} = ${frac(a + '×' + k, b + '×' + k)} = ${frac(a * k, b * k)}` };
    },
    fracAdd() {
      const d = pick([4, 5, 6, 7, 8, 9, 10, 12]), a = R(1, d - 2), b = R(1, d - a - 1);
      return { type: 'num', q: op(`${frac(a, d)} + ${frac(b, d)} = ${frac('?', d)}`) + '<br>' + t('g.numerator'), answer: a + b, explain: `${a} + ${b} = ${a + b} → ${frac(a + b, d)}` };
    },
    lengthConv() {
      const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
      const i = R(2, 4), j = R(i + 1, Math.min(6, i + 3)); const v = R(1, 30);
      const ans = v * 10 ** (j - i);
      return { type: 'num', q: t('g.convert', { a: `<b>${v} ${units[i]}</b>`, u: units[j] }), answer: ans, unit: units[j], explain: `${v} × ${10 ** (j - i)} = ${ans}` };
    },
    decAdd() {
      const a = R(1, 999) / 100, b = R(1, 999) / 100;
      return calc(`${N(a)} + ${N(b)}`, Math.round((a + b) * 100) / 100);
    },
    decMul() { const a = R(1, 9999) / 100, k = pick([10, 100, 1000]); return calc(`${N(a)} × ${k}`, Math.round(a * k * 100) / 100); },
    perimRect() { const b = R(2, 20), h = R(2, 15); return { type: 'num', q: t('g.perimRect', { b, h }), answer: 2 * (b + h), unit: 'cm', explain: `(${b} + ${h}) × 2 = ${2 * (b + h)} cm` }; },
    areaRect() { const b = R(2, 20), h = R(2, 15); return { type: 'num', q: t('g.areaRect', { b, h }), answer: b * h, unit: 'cm²', explain: `${b} × ${h} = ${b * h} cm²` }; },
    areaTri() { const b = R(2, 20) * 2, h = R(2, 15); return { type: 'num', q: t('g.areaTri', { b, h }), answer: (b * h) / 2, unit: 'cm²', explain: `${b} × ${h} : 2 = ${(b * h) / 2} cm²` }; },
    intAdd() {
      const a = R(-20, 20), b = R(-20, 20);
      const f = (x) => (x < 0 ? `(−${-x})` : `(+${x})`);
      return { type: 'num', q: op(`${f(a)} + ${f(b)} = ?`), answer: a + b, explain: `${f(a)} + ${f(b)} = ${a + b}` };
    },
    intMul() {
      const a = R(-12, 12) || 3, b = R(-12, 12) || -4;
      const f = (x) => (x < 0 ? `(−${-x})` : `(+${x})`);
      return { type: 'num', q: op(`${f(a)} × ${f(b)} = ?`), answer: a * b, explain: `${f(a)} × ${f(b)} = ${a * b}` };
    },
    percent() {
      const p = pick([5, 10, 20, 25, 30, 40, 50, 75]), n = pick([20, 40, 60, 80, 100, 120, 200, 240, 300, 400, 500]);
      return { type: 'num', q: t('g.percent', { p, n }), answer: (p * n) / 100, explain: `${n} × ${p} : 100 = ${N((p * n) / 100)}` };
    },
    power() { const b = R(2, 10), e = b <= 3 ? R(2, 6) : R(2, 3); return { type: 'num', q: op(`${b}<sup>${e}</sup> = ?`), answer: b ** e, explain: Array(e).fill(b).join(' × ') + ` = ${b ** e}` }; },
    circle() { const r = R(1, 20); const c = Math.round(2 * 3.14 * r * 100) / 100; return { type: 'num', q: t('g.circle', { r }), answer: c, tol: 0.011, unit: 'cm', explain: `2 × 3,14 × ${r} = ${N(c)} cm` }; },
    isPrime() {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
      const comps = [9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 77, 81, 85, 87, 91, 93, 95, 99];
      const isP = Math.random() < 0.5; const n = pick(isP ? primes : comps);
      let d = 2; while (!isP && n % d) d++;
      return { type: 'tf', q: t('g.isPrime', { n: `<b>${n}</b>` }), answer: isP, explain: isP ? t('g.explainPrimeYes', { n }) : t('g.explainPrimeNo', { n, d }) };
    },
    gcd() { const k = R(2, 12), a = k * R(2, 9), b = k * R(2, 9); return { type: 'num', q: op(`${t('g.gcd')} (${a}, ${b}) = ?`), answer: gcdF(a, b), explain: `${t('g.gcd')} = ${gcdF(a, b)}` }; },
    lcm() { const a = R(2, 15), b = R(2, 15); const l = (a * b) / gcdF(a, b); return { type: 'num', q: op(`${t('g.lcm')} (${a}, ${b}) = ?`), answer: l, explain: `${t('g.lcm')} = ${a} × ${b} : ${gcdF(a, b)} = ${l}` }; },
    triAngle() { const a = R(20, 100), b = R(20, 160 - a - 10); return { type: 'num', q: t('g.triAngle', { a, b }), answer: 180 - a - b, unit: '°', explain: `180° − ${a}° − ${b}° = ${180 - a - b}°` }; },
    sqrt() { const r = R(2, 20); return { type: 'num', q: op(`√${r * r} = ?`), answer: r, explain: `${r} × ${r} = ${r * r}` }; },
    proportion() {
      const a = R(2, 9), b = R(2, 9), k = R(2, 6);
      return { type: 'num', q: t('g.proportion', { a, b, c: a * k }), answer: b * k, explain: `x = ${b} × ${a * k} : ${a} = ${b * k}` };
    },
    pythagoras() {
      const [x, y, z] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25], [12, 16, 20], [20, 21, 29], [9, 40, 41]]);
      return { type: 'num', q: t('g.pythagoras', { a: x, b: y }), answer: z, unit: 'cm', explain: t('g.explainPyth', { s: `${x * x} + ${y * y}`, c: z }) };
    },
    equation() {
      const x = R(-9, 12), a = R(2, 9), b = R(-20, 20); const c = a * x + b;
      const e = `${a}x ${b < 0 ? '−' : '+'} ${Math.abs(b)} = ${c}`;
      return { type: 'num', q: t('g.equation', { e: `<b>${e}</b>` }) + '<br>x = ?', answer: x, explain: `${a}x = ${c} ${b < 0 ? '+' : '−'} ${Math.abs(b)} = ${c - b} → x = ${x}` };
    },
    volCube() { const l = R(2, 12); return { type: 'num', q: t('g.volCube', { l }), answer: l ** 3, unit: 'cm³', explain: `${l} × ${l} × ${l} = ${l ** 3} cm³` }; },
    volBox() { const a = R(2, 12), b = R(2, 10), c = R(2, 10); return { type: 'num', q: t('g.volBox', { a, b, c }), answer: a * b * c, unit: 'cm³', explain: `${a} × ${b} × ${c} = ${a * b * c} cm³` }; }
  };

  window.Generators = {
    has: (name) => typeof G[name] === 'function' && name[0] !== '_',
    make(name) { const q = G[name](); q.gen = name; return q; },
    /* lista di [nome, quantità] → domande */
    batch(spec) {
      const out = [];
      for (const [name, n] of spec) if (this.has(name)) for (let i = 0; i < n; i++) out.push(this.make(name));
      return out;
    }
  };
})();
