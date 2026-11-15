#!/usr/bin/env node
/* Controlla le banche di domande per livello: data/quiz/<lingua>/<chiave>.js
   Uso: node scripts/check-quiz.js [chiave ...]   (senza argomenti controlla tutto)
   Verifica formato delle domande e che ogni lingua abbia le stesse domande dell'italiano (stessi tipi, risposte, numero). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), Q = path.join(root, 'data/quiz');
const LANGS = ['it', 'en', 'fr', 'ru', 'ro', 'de'];
let errors = 0, warnings = 0;
const err = (m) => { errors++; console.log('  ✗ ' + m); };
const warn = (m) => { warnings++; console.log('  ⚠ ' + m); };
function loadBank(lang, key) {
  const f = path.join(Q, lang, key + '.js'); if (!fs.existsSync(f)) return null;
  const got = []; const ctx = { QBANK: (l, k, b) => got.push({ l, k, b }) };
  try { vm.runInNewContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); } catch (e) { err(`${lang}/${key}: errore JS ${e.message}`); return null; }
  if (got.length !== 1) { err(`${lang}/${key}: serve esattamente una chiamata QBANK`); return null; }
  if (got[0].l !== lang) err(`${lang}/${key}: lingua dichiarata ${got[0].l}`);
  if (got[0].k !== key) err(`${lang}/${key}: chiave dichiarata ${got[0].k}`);
  return got[0].b;
}
const TYPES = ['mc', 'tf', 'num', 'text', 'order'];
const typeOf = (q) => q.type || (q.options ? 'mc' : typeof q.answer === 'boolean' ? 'tf' : typeof q.answer === 'number' ? 'num' : 'text');
function checkQ(q, w) {
  if (!q || typeof q !== 'object') return err(`${w}: non è un oggetto`);
  const tp = typeOf(q);
  if (!TYPES.includes(tp)) return err(`${w}: tipo ${tp}`);
  if (!q.q || typeof q.q !== 'string') err(`${w}: manca q`);
  if (!q.explain) err(`${w}: manca explain`);
  if (tp === 'mc') {
    if (!Array.isArray(q.options) || q.options.length < 2) err(`${w}: options`);
    else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) err(`${w}: answer fuori range`);
    else if (new Set(q.options.map(String)).size !== q.options.length) err(`${w}: opzioni duplicate`);
  }
  if (tp === 'tf' && typeof q.answer !== 'boolean') err(`${w}: answer non booleano`);
  if (tp === 'num' && typeof q.answer !== 'number') err(`${w}: answer non numerico`);
  if (tp === 'text' && (!Array.isArray(q.answer) || !q.answer.length)) err(`${w}: answer deve essere un elenco`);
  if (tp === 'order' && (!Array.isArray(q.items) || q.items.length < 3)) err(`${w}: items`);
}
const sig = (q) => { const tp = typeOf(q); return tp + ':' + (tp === 'mc' ? q.options.length + '/' + q.answer : tp === 'tf' || tp === 'num' ? String(q.answer) : tp === 'order' ? q.items.length : ''); };
let keys = process.argv.slice(2);
if (!keys.length) keys = fs.existsSync(path.join(Q, 'it')) ? fs.readdirSync(path.join(Q, 'it')).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)) : [];
let nq = 0;
for (const key of keys) {
  const it = loadBank('it', key); if (!it) { err(`it/${key}: manca`); continue; }
  for (const lv of ['f', 'm', 'd']) { if (!Array.isArray(it[lv]) || !it[lv].length) err(`it/${key}: livello ${lv} vuoto`); }
  for (const lang of LANGS) {
    const b = lang === 'it' ? it : loadBank(lang, key);
    if (!b) { warn(`${lang}/${key}: manca la traduzione`); continue; }
    for (const lv of ['f', 'm', 'd']) {
      const A = b[lv] || [], I = it[lv] || [];
      A.forEach((q, i) => checkQ(q, `${lang}/${key} ${lv}[${i}]`));
      nq += A.length;
      if (lang !== 'it') {
        if (A.length !== I.length) err(`${lang}/${key} ${lv}: ${A.length} domande, in italiano ${I.length}`);
        else A.forEach((q, i) => { if (sig(q) !== sig(I[i])) err(`${lang}/${key} ${lv}[${i}]: diversa dall'italiano (${sig(q)} ≠ ${sig(I[i])})`); });
      }
    }
  }
}
console.log(`${keys.length} banche, ${nq} domande · ${errors} errori, ${warnings} avvisi`);
process.exit(errors ? 1 : 0);
