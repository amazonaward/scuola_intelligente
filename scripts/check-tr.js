/* Confronta la struttura di un file tradotto con l'originale italiano (i testi possono cambiare, il resto no).
   Uso: node scripts/check-tr.js <lingua> topics|places|library|space [id ...]   (senza id: tutti i file tradotti presenti) */
const fs = require('fs'), vm = require('vm'), path = require('path');
const [lang, kind, ...ids] = process.argv.slice(2);
const R = path.join(__dirname, '..');
const KEEP = new Set(['lang']);
const IDS = new Set();
{ const w = {}; vm.runInNewContext(fs.readFileSync(path.join(R, 'data/curriculum.js'), 'utf8'), { window: w });
  for (const y in w.CURRICULUM.program) for (const sb in w.CURRICULUM.program[y]) for (const e of w.CURRICULUM.program[y][sb]) IDS.add(e[0]); }
function sig(o) {
  return JSON.stringify(o, (k, v) => {
    if (KEEP.has(k)) return undefined;
    if (Array.isArray(v) && v.length && v.every((x) => typeof x === 'string') && /^(answer|accept|answers)$/.test(k)) return 'A';
    if (typeof v === 'string') return /^#[0-9a-f]{3,8}$/i.test(v) || IDS.has(v) ? v : 0;
    return typeof v === 'function' ? 'fn' : v;
  });
}
function run(file, ctx) { vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }
function loadPlace(f) { let o; run(f, { PLACE: (d) => (o = d), window: {} }); return o; }
function loadTopic(f) { let o; run(f, { TOPIC: (l, d) => (o = Object.assign({ lang: l }, d)), window: {} }); return o; }
function loadLib(f) { let o; const w = { LIBRARY: (d) => (o = d) }; run(f, Object.assign({ window: w, Math }, w)); return o; }
function loadSpace(f, l) { const w = {}; run(f, { window: w }); return l ? ((w.SPACE_TR || {})[l] || {}) : w.SPACE_OBJECTS; }
let err = 0, n = 0; const bad = (m) => { err++; console.log('✗ ' + m); };
if (kind === 'space') {
  for (const part of ['sistema', 'cielo']) {
    const tf = `${R}/data/space/${lang}/${part}.js`; if (!fs.existsSync(tf)) continue;
    const src = loadSpace(`${R}/data/space/${part}.js`), tr = loadSpace(tf, lang);
    for (const o of src) {
      n++; const x = tr[o.id]; if (!x) { bad(`${part}: manca ${o.id}`); continue; }
      for (const f of ['kind', 'lead', 'facts', 'html', 'cur', 'quiz']) if (sig(o[f]) !== sig(x[f])) bad(`${part}/${o.id}: struttura diversa in "${f}"`);
    }
  }
} else {
  const dir = kind === 'places' ? 'places' : kind === 'topics' ? 'topics' : 'library';
  const list = ids.length ? ids : (fs.existsSync(`${R}/data/${dir}/${lang}`) ? fs.readdirSync(`${R}/data/${dir}/${lang}`).map((f) => f.replace(/\.js$/, '')) : []);
  for (const id of list) {
    n++;
    const tf = `${R}/data/${dir}/${lang}/${id}.js`, sf = dir === 'topics' ? `${R}/data/topics/it/${id}.js` : `${R}/data/${dir}/${id}.js`;
    if (!fs.existsSync(tf)) { bad(`manca ${tf}`); continue; }
    try {
      const L = kind === 'places' ? loadPlace : kind === 'topics' ? loadTopic : loadLib;
      const a = L(sf), b = L(tf);
      if (!b) { bad(`${id}: il file non chiama ${{ places: 'PLACE', topics: 'TOPIC', library: 'LIBRARY' }[kind]}()`); continue; }
      if (b.lang !== lang) bad(`${id}: manca lang: '${lang}'`);
      if (b.id !== a.id) bad(`${id}: id diverso`);
      if (sig(a) !== sig(b)) {
        const A = JSON.parse(sig(a)), B = JSON.parse(sig(b));
        const diff = (x, y, p) => { if (JSON.stringify(x) === JSON.stringify(y)) return; if (x && y && typeof x === 'object' && typeof y === 'object') { for (const k of new Set([...Object.keys(x), ...Object.keys(y)])) if (diff(x[k], y[k], p + '.' + k)) return true; return; } bad(`${id}: struttura diversa in ${p}`); return true; };
        diff(A, B, id);
      }
    } catch (e) { bad(`${id}: ${e.message}`); }
  }
}
console.log(`${n} controllati, ${err} errori`);
process.exit(err ? 1 : 0);
