// Aggiorna `langs` degli oggetti in data/library/index.js in base ai file in data/library/<lang>/
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'data', 'library');
const LANGS = ['en', 'fr', 'ru', 'ro', 'de'];
const has = {};
// solo i file gia' in git (staged o committati), non quelli in lavorazione
const tracked = require('child_process').execSync('git ls-files data/library', { cwd: path.join(__dirname, '..') }).toString().split('\n');
for (const l of LANGS) for (const f of tracked) {
  const m = f.match(new RegExp('^data/library/' + l + '/([^/]+)\\.js$'));
  if (m) (has[m[1]] = has[m[1]] || []).push(l);
}
const file = path.join(dir, 'index.js');
let src = fs.readFileSync(file, 'utf8');
src = src.replace(/\{ id: '([^']+)',( langs: \[[^\]]*\],)?/g, (m, id) => {
  const ls = has[id];
  return ls ? `{ id: '${id}', langs: [${ls.map(l => `'${l}'`).join(', ')}],` : `{ id: '${id}',`;
});
fs.writeFileSync(file, src);
console.log('langs:', JSON.stringify(has));
