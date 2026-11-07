#!/usr/bin/env node
/* Controlla curriculum, traduzioni e file degli argomenti.
   Uso: node scripts/check.js [percorso-file-argomento ...]  (senza argomenti controlla tutto) */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = { window: {}, console };
ctx.window = ctx;
const topics = [];
ctx.TOPIC = (lang, t) => topics.push({ lang, t });
vm.createContext(ctx);
const load = (f) => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });

load(path.join(root, 'data/curriculum.js'));
const C = ctx.CURRICULUM;
const ids = new Set();
for (const y of C.years) for (const s of C.subjects) for (const e of (C.program[y][s] || [])) {
  if (ids.has(e[0])) err(`id duplicato ${e[0]}`);
  if (!e[0].startsWith(y + '-' + s + '-')) err(`id ${e[0]} non coerente con ${y}/${s}`);
  ids.add(e[0]);
}
let errors = 0, warnings = 0;
function err(m) { errors++; console.log('  ✗ ' + m); }
function warn(m) { warnings++; console.log('  ⚠ ' + m); }
for (const id of Object.keys(C.gen)) if (!ids.has(id)) err(`gen: id sconosciuto ${id}`);
for (const id of C.full) if (!ids.has(id)) err(`full: id sconosciuto ${id}`);

const LANGS = ['it', 'en', 'fr', 'ru', 'ro', 'de'];
// traduzioni curriculum
for (const l of LANGS.slice(1)) {
  const f = path.join(root, `data/i18n/curriculum.${l}.js`);
  if (!fs.existsSync(f)) { warn(`manca ${path.relative(root, f)}`); continue; }
  load(f);
  const map = (ctx.CURRICULUM_I18N || {})[l] || {};
  const miss = [...ids].filter((i) => !map[i]);
  if (miss.length) warn(`curriculum.${l}: ${miss.length} titoli mancanti (es. ${miss.slice(0, 3).join(', ')})`);
}

let files = process.argv.slice(2);
if (!files.length) {
  for (const l of LANGS) {
    const d = path.join(root, 'data/topics', l);
    if (fs.existsSync(d)) for (const f of fs.readdirSync(d)) if (f.endsWith('.js')) files.push(path.join(d, f));
  }
}
const SECTION_TYPES = ['text', 'example', 'curiosity', 'remember', 'svg', '3d', 'widget', 'quiz', 'video', 'alternatives', 'conceptMap', 'decision'];
const SCENES = ['solid', 'solar', 'layers', 'molecule', 'globe', 'terrain', 'spacetime', 'blocks', 'atom'];
const TERRAIN = ['sea', 'coast', 'beach', 'island', 'archipelago', 'peninsula', 'cape', 'gulf', 'bay', 'isthmus', 'strait', 'lagoon', 'mountain', 'peak', 'glacier', 'hill', 'plain', 'valley', 'river', 'source', 'delta', 'lake', 'volcano'];
const WIDGETS = ['fractionPie', 'numberLine', 'abacus', 'timesTable', 'counter', 'areaGrid', 'pythagoras', 'timeline', 'flashcards', 'match', 'classify', 'labelDiagram', 'lineMultiply', 'russianPeasant', 'egyptianMultiply', 'lattice', 'chemLab', 'periodicTable'];
const GENS = ['count20', 'compare20', 'compare100', 'add20', 'sub20', 'add100', 'sub100', 'tensUnits', 'times', 'divExact', 'divRem', 'placeValue', 'mult2', 'div2', 'fracOf', 'fracEquiv', 'fracAdd', 'lengthConv', 'decAdd', 'decMul', 'perimRect', 'areaRect', 'areaTri', 'intAdd', 'intMul', 'percent', 'power', 'circle', 'isPrime', 'gcd', 'lcm', 'triAngle', 'sqrt', 'proportion', 'pythagoras', 'equation', 'volCube', 'volBox'];

function checkSvg(svg, where) {
  if (!/^\s*<svg[\s>]/.test(svg)) err(`${where}: svg non inizia con <svg`);
  if (!/viewBox=/.test(svg)) warn(`${where}: svg senza viewBox`);
  // bilanciamento grezzo dei tag
  const open = (svg.match(/<(?!\/|!|\?)[a-zA-Z][^>]*[^/]>|<[a-zA-Z]+>/g) || []).length;
  const close = (svg.match(/<\/[a-zA-Z]+>/g) || []).length;
  if (open !== close) warn(`${where}: svg tag aperti ${open} / chiusi ${close}`);
}
function checkQ(q, where) {
  const t = q.type || (q.options ? 'mc' : null);
  if (!q.q) err(`${where}: domanda senza testo`);
  if (!q.explain) warn(`${where}: manca explain`);
  if (t === 'mc') {
    if (!Array.isArray(q.options) || q.options.length < 2) err(`${where}: mc senza opzioni`);
    else if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) err(`${where}: mc answer fuori range`);
  } else if (t === 'tf') { if (typeof q.answer !== 'boolean') err(`${where}: tf answer non booleano`); }
  else if (t === 'num') { if (typeof q.answer !== 'number') err(`${where}: num answer non numerico`); }
  else if (t === 'text') { if (!Array.isArray(q.answer) || !q.answer.length) err(`${where}: text answer deve essere array`); }
  else if (t === 'order') { if (!Array.isArray(q.items) || q.items.length < 2) err(`${where}: order senza items`); }
  else err(`${where}: tipo domanda sconosciuto ${t}`);
}

for (const f of files) {
  const before = topics.length;
  console.log('• ' + path.relative(root, f));
  try { load(f); } catch (e) { err('errore di sintassi: ' + e.message); continue; }
  if (topics.length !== before + 1) { err('il file deve chiamare TOPIC() una volta'); continue; }
  const { lang, t } = topics[topics.length - 1];
  const expectLang = path.basename(path.dirname(f));
  if (lang !== expectLang) err(`lingua ${lang} ≠ cartella ${expectLang}`);
  if (path.basename(f, '.js') !== t.id) err(`id ${t.id} ≠ nome file`);
  if (!ids.has(t.id)) err(`id ${t.id} non nel curriculum`);
  if (!t.title || !t.intro) err('mancano title/intro');
  const counts = {};
  (t.sections || []).forEach((s, i) => {
    const w = `sezione ${i} (${s.type})`;
    counts[s.type] = (counts[s.type] || 0) + 1;
    if (!SECTION_TYPES.includes(s.type)) err(`${w}: tipo sconosciuto`);
    if (['text', 'example', 'curiosity', 'remember'].includes(s.type) && !s.html) err(`${w}: manca html`);
    if (s.type === 'svg') checkSvg(s.svg || '', w);
    if (s.type === '3d' && !SCENES.includes(s.scene)) err(`${w}: scena sconosciuta ${s.scene}`);
    if (s.type === 'widget' && !WIDGETS.includes(s.widget)) err(`${w}: widget sconosciuto ${s.widget}`);
    if (s.type === 'widget' && s.widget === 'labelDiagram') checkSvg((s.options || {}).svg || '', w + ' labelDiagram');
    if (s.type === '3d' && s.scene === 'terrain') for (const k of Object.keys((s.options || {}).features || {})) if (!TERRAIN.includes(k)) err(`${w}: parte terrain sconosciuta ${k}`);
    if (s.type === '3d' && s.scene === 'spacetime') { const ev = (s.options || {}).events || []; const ids = new Set(ev.map((e) => e.id)); ev.forEach((e) => { if (typeof e.year !== 'number' || typeof e.lat !== 'number' || typeof e.lon !== 'number') err(`${w}: evento ${e.id} senza year/lat/lon`); (e.causes || []).forEach((c) => { if (!ids.has(c)) err(`${w}: causa sconosciuta ${c}`); }); }); }
    if (s.type === 'alternatives') { if (!(s.tabs || []).length) err(`${w}: nessuna scheda`); (s.tabs || []).forEach((tb, k) => { if (!tb.label || !tb.html) err(`${w} scheda ${k}: label/html`); if (tb.widget && !WIDGETS.includes(tb.widget)) err(`${w} scheda ${k}: widget ${tb.widget}`); if (tb.scene && !SCENES.includes(tb.scene)) err(`${w} scheda ${k}: scena ${tb.scene}`); if (tb.svg) checkSvg(tb.svg, `${w} scheda ${k}`); }); }
    if (s.type === 'conceptMap') { const ids = new Set((s.nodes || []).map((n) => n.id)); (s.nodes || []).forEach((n) => { if (!n.id || !n.label || n.x == null || n.y == null || !n.html) err(`${w}: nodo incompleto ${n.id}`); if (!n.why) warn(`${w}: nodo ${n.id} senza why`); }); (s.edges || []).forEach((e) => { if (!ids.has(e[0]) || !ids.has(e[1])) err(`${w}: arco con nodo sconosciuto ${e}`); }); }
    if (s.type === 'decision') { if (!(s.options || []).length || typeof s.answer !== 'number' || !s.explain) err(`${w}: decision incompleta`); }
    if (s.type === 'quiz') (s.questions || []).forEach((q, j) => checkQ(q, `${w} q${j}`));
  });
  const v = t.verifica || {};
  if (!v.questions || v.questions.length < 6) warn(`verifica con poche domande (${(v.questions || []).length})`);
  (v.questions || []).forEach((q, j) => checkQ(q, `verifica q${j}`));
  for (const g of (v.gen || [])) if (!GENS.includes(g[0])) err(`generatore sconosciuto ${g[0]}`);
  if (!counts.svg && !counts['3d'] && !counts.widget) warn('nessuna immagine/3D/widget');
  if ((counts.example || 0) < 2) warn('meno di 2 esempi');
  if ((counts.curiosity || 0) < 2) warn('meno di 2 curiosità');
  if ((counts.quiz || 0) < 2) warn('meno di 2 mini-quiz');
  if (!counts.alternatives) warn('manca blocco alternatives');
  if (!counts.conceptMap) warn('manca conceptMap');
  if (/-sto-/.test(t.id) && !(t.sections || []).some((s) => s.scene === 'spacetime')) warn('storia senza spacetime');
  if (/-sto-/.test(t.id) && !counts.decision) warn('storia senza decision');
}
console.log(`\n${files.length} file, ${errors} errori, ${warnings} avvisi`);
process.exit(errors ? 1 : 0);
