#!/usr/bin/env node
/* Aggiorna l'elenco `full` di data/curriculum.js in base ai file presenti in data/topics/it/ (ordine del programma). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), file = path.join(root, 'data/curriculum.js');
const src = fs.readFileSync(file, 'utf8');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx); vm.runInContext(src, ctx);
const C = ctx.CURRICULUM; const have = new Set(fs.readdirSync(path.join(root, 'data/topics/it')).map((f) => f.replace(/\.js$/, '')));
const ids = []; for (const y of C.years) for (const s of C.subjects) for (const e of (C.program[y][s] || [])) if (have.has(e[0])) ids.push(e[0]);
const list = ids.map((i) => `'${i}'`).reduce((rows, x) => { const r = rows[rows.length - 1]; if (r && r.length < 4) r.push(x); else rows.push([x]); return rows; }, []).map((r) => '    ' + r.join(', ')).join(',\n');
const out = src.replace(/full: \[[\s\S]*?\n  \]/, `full: [\n${list}\n  ]`);
fs.writeFileSync(file, out);
console.log(`full: ${ids.length} argomenti`);
