#!/usr/bin/env node
/* Crea data/methods-index.js: elenco dei metodi "dal mondo" presenti nelle schede "Altri modi" delle lezioni di matematica.
   Da rilanciare dopo aver aggiunto o modificato lezioni: node scripts/build-methods.js */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const COUNTRIES = [
  ['mes', '🏛️', /babilon|sumer|mesopotam/i], ['rome', '🏛️', /antichi romani|numeri romani|dei romani|roma antica/i],
  ['jp', '🇯🇵', /giappon|soroban|🇯🇵/i], ['cn', '🇨🇳', /cin[ae]s|cina|gougu|tangram|🇨🇳/i], ['ru', '🇷🇺', /russ|🇷🇺/i],
  ['eg', '𓂀', /egizi|egitt|𓂀|faraon|scrib/i], ['ar', '🕌', /arab|gelosia|al-khwarizmi|🕌/i], ['in', '🇮🇳', /india|vedic|🇮🇳/i],
  ['gr', '🇬🇷', /grec|euclide|eratostene|archimede|🇬🇷/i], ['sg', '🇸🇬', /singapore|bar model|🇸🇬/i], ['fr', '🇫🇷', /franc|🇫🇷/i],
  ['gb', '🇬🇧', /ingles|inghilterra|chunking|🇬🇧/i], ['us', '🇺🇸', /americ|usa\b|stati uniti|algebra tiles|🇺🇸/i],
  ['de', '🇩🇪', /german|🇩🇪/i], ['maya', '🗿', /maya|azteca/i], ['md', '🇲🇩', /moldav|🇲🇩/i], ['ro', '🇷🇴', /romania|romen|🇷🇴/i], ['fi', '🇫🇮', /finland|🇫🇮/i], ['kr', '🇰🇷', /corea|🇰🇷/i]
];
const LANGS = ['it', 'en', 'fr', 'ru', 'ro', 'de'];
const ctx = {}; ctx.window = ctx; let cur = null; ctx.TOPIC = (l, t) => { cur = t; }; vm.createContext(ctx);
const read = (f) => { cur = null; vm.runInContext(fs.readFileSync(f, 'utf8'), ctx); return cur; };
const out = [];
for (const f of fs.readdirSync(path.join(root, 'data/topics/it')).filter((x) => /-mat-/.test(x)).sort()) {
  const id = f.replace(/\.js$/, ''); const T = read(path.join(root, 'data/topics/it', f));
  const sec = T.sections.find((s) => s.type === 'alternatives'); if (!sec) continue;
  const tr = {};
  for (const l of LANGS.slice(1)) { const p = path.join(root, 'data/topics', l, f); if (fs.existsSync(p)) { const X = read(p); const s2 = X.sections.find((s) => s.type === 'alternatives'); if (s2) tr[l] = s2.tabs.map((t) => t.label); } }
  sec.tabs.forEach((tab, k) => {
    const text = tab.label + ' ' + (tab.html || '').replace(/<[^>]+>/g, ' ').slice(0, 400);
    const c = COUNTRIES.find(([, , re]) => re.test(tab.label)); void text;
    const labels = { it: tab.label }; for (const l of Object.keys(tr)) if (tr[l][k]) labels[l] = tr[l][k];
    out.push({ topic: id, tab: k, country: c ? c[0] : 'idea', labels });
  });
}
const flags = Object.fromEntries(COUNTRIES.map(([k, f]) => [k, f])); flags.idea = '💡';
fs.writeFileSync(path.join(root, 'data/methods-index.js'), '/* Generato da scripts/build-methods.js – non modificare a mano */\nwindow.METHODS = ' + JSON.stringify({ flags, items: out }) + ';\n');
console.log(`${out.length} metodi, ${out.filter((x) => x.country !== 'idea').length} da altri Paesi o civiltà`);
