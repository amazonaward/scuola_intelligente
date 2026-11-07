// Client Redis minimo, senza dipendenze.
// Funziona con:
//  - Upstash REST: KV_REST_API_URL/KV_REST_API_TOKEN oppure UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN
//  - qualunque Redis classico: REDIS_URL / KV_URL (redis:// o rediss://), es. Redis Cloud dal Marketplace di Vercel
const net = require('net'), tls = require('tls');
const REST_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const RAW = process.env.REDIS_URL || process.env.KV_URL || '';
const ready = () => !!((REST_URL && REST_TOKEN) || /^rediss?:\/\//.test(RAW));

async function restPipeline(cmds) {
  const r = await fetch(REST_URL.replace(/\/$/, '') + '/pipeline', {
    method: 'POST', headers: { Authorization: 'Bearer ' + REST_TOKEN, 'Content-Type': 'application/json' }, body: JSON.stringify(cmds)
  });
  if (!r.ok) throw new Error('redis ' + r.status);
  return (await r.json()).map((x) => x.result);
}

// --- protocollo RESP su TCP/TLS ---
const enc = (cmd) => '*' + cmd.length + '\r\n' + cmd.map((a) => { const s = String(a); return '$' + Buffer.byteLength(s) + '\r\n' + s + '\r\n'; }).join('');
function parse(buf, i) {            // ritorna [valore, nuovo indice] oppure null se incompleto
  const end = buf.indexOf('\r\n', i); if (end < 0) return null;
  const t = String.fromCharCode(buf[i]), line = buf.toString('utf8', i + 1, end);
  if (t === '+') return [line, end + 2];
  if (t === '-') return [new Error(line), end + 2];
  if (t === ':') return [+line, end + 2];
  if (t === '$') { const n = +line; if (n < 0) return [null, end + 2]; if (buf.length < end + 2 + n + 2) return null; return [buf.toString('utf8', end + 2, end + 2 + n), end + 2 + n + 2]; }
  if (t === '*') { const n = +line; if (n < 0) return [null, end + 2]; const out = []; let j = end + 2; for (let k = 0; k < n; k++) { const r = parse(buf, j); if (!r) return null; out.push(r[0]); j = r[1]; } return [out, j]; }
  throw new Error('risposta redis non valida');
}
function tcpPipeline(cmds) {
  const u = new URL(RAW), secure = u.protocol === 'rediss:';
  const pre = [];
  if (u.password) pre.push(u.username && u.username !== 'default' ? ['AUTH', decodeURIComponent(u.username), decodeURIComponent(u.password)] : ['AUTH', decodeURIComponent(u.password)]);
  const db = +(u.pathname || '/').slice(1); if (db) pre.push(['SELECT', db]);
  const all = pre.concat(cmds);
  return new Promise((resolve, reject) => {
    const opts = { host: u.hostname, port: +u.port || 6379, servername: u.hostname };
    const sock = secure ? tls.connect(opts) : net.connect(opts);
    let buf = Buffer.alloc(0); const res = [];
    const done = (err) => { sock.destroy(); clearTimeout(timer); err ? reject(err) : resolve(res.slice(pre.length)); };
    const timer = setTimeout(() => done(new Error('redis timeout')), 4000);
    sock.on(secure ? 'secureConnect' : 'connect', () => sock.write(all.map(enc).join('')));
    sock.on('data', (d) => {
      buf = Buffer.concat([buf, d]); let i = 0;
      for (;;) { const r = parse(buf, i); if (!r) break; res.push(r[0]); i = r[1]; }
      buf = buf.subarray(i);
      if (res.length >= all.length) { const e = res.slice(0, pre.length).find((x) => x instanceof Error); done(e || null); }
    });
    sock.on('error', done);
  });
}
async function pipeline(cmds) {
  if (REST_URL && REST_TOKEN) return restPipeline(cmds);
  const r = await tcpPipeline(cmds);
  return r.map((x) => (x instanceof Error ? null : x));
}
module.exports = { ready, pipeline };
