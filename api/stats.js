// Statistiche per il pannello admin. Serve l'intestazione x-admin-key = ADMIN_KEY.
const crypto = require('crypto');
const { list } = require('@vercel/blob');
const { day, decode } = require('./_lib');

const same = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); };

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const key = process.env.ADMIN_KEY;
  if (!key) { res.statusCode = 503; return res.end(JSON.stringify({ error: 'ADMIN_KEY mancante' })); }
  if (!same(req.headers['x-admin-key'] || '', key)) { res.statusCode = 401; return res.end(JSON.stringify({ error: 'password errata' })); }
  if (!process.env.BLOB_READ_WRITE_TOKEN) { res.statusCode = 503; return res.end(JSON.stringify({ error: 'archivio Blob non collegato' })); }
  const q = new URL(req.url, 'http://x').searchParams;
  const days = Math.max(1, Math.min(90, +q.get('days') || 30));
  const out = { days: [], sessions: [] };
  try {
    for (let i = days - 1; i >= 0; i--) {
      const d = day(new Date(Date.now() - i * 864e5));
      const best = new Map();
      let cursor;
      do {
        const r = await list({ prefix: 's/' + d + '/', cursor, limit: 1000 });
        for (const bl of r.blobs) {
          const s = decode(bl.pathname); s.at = bl.uploadedAt;
          const prev = best.get(s.sid);
          if (!prev || s.sec >= prev.sec) best.set(s.sid, s);   // la stessa sessione viene aggiornata: teniamo l'ultima
        }
        cursor = r.hasMore ? r.cursor : null;
      } while (cursor);
      const ss = [...best.values()];
      out.days.push({ day: d, sessions: ss.length, visitors: new Set(ss.map(s => s.vid)).size, sec: ss.reduce((a, s) => a + s.sec, 0) });
      for (const s of ss) out.sessions.push({ day: d, ...s });
    }
    res.end(JSON.stringify(out));
  } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: 'lettura non riuscita: ' + String(e.message || e).slice(0, 120) })); }
};
