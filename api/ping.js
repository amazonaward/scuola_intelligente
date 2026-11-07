// Battito di chi ha il sito aperto (anonimo: codice casuale del dispositivo, nessun nome, nessun IP).
// Aggiorna: presenti ora (ultimi 2 minuti), visitatori unici totali, secondi totali di permanenza.
// Risponde con { live, visitors, avgSec }.
const { ready, pipeline } = require('./_redis');
const LIVE_WINDOW = 120; // secondi
const clean = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20);

function body(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  if (typeof req.body === 'string') { try { return Promise.resolve(JSON.parse(req.body)); } catch (e) { return Promise.resolve({}); } }
  return new Promise((res) => {
    let s = '';
    req.on('data', (c) => { s += c; if (s.length > 2000) req.destroy(); });
    req.on('end', () => { try { res(JSON.parse(s)); } catch (e) { res({}); } });
    req.on('error', () => res({}));
  });
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  if (!ready()) { res.statusCode = 503; return res.end('{"error":"no store"}'); }
  const ua = String(req.headers['user-agent'] || '');
  const b = req.method === 'POST' ? await body(req) : {};
  const vid = clean(b.vid), add = Math.max(0, Math.min(300, b.add | 0));
  const bot = /bot|crawl|spider|headless|lighthouse/i.test(ua);
  const now = Math.floor(Date.now() / 1000);
  const cmds = [];
  if (vid && !bot) {
    cmds.push(['ZADD', 'z:live', String(now), vid]);
    if (b.first) cmds.push(['PFADD', 'z:visitors', vid]);
    if (add) cmds.push(['INCRBY', 'z:seconds', String(add)]);
  }
  cmds.push(['ZREMRANGEBYSCORE', 'z:live', '0', String(now - LIVE_WINDOW)], ['ZCARD', 'z:live'], ['PFCOUNT', 'z:visitors'], ['GET', 'z:seconds']);
  try {
    const r = await pipeline(cmds);
    const [live, visitors, seconds] = r.slice(-3).map((x) => +x || 0);
    res.end(JSON.stringify({ live, visitors, avgSec: visitors ? Math.round(seconds / visitors) : 0 }));
  } catch (e) { res.statusCode = 500; res.end('{"error":"store"}'); }
};
