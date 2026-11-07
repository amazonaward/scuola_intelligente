// Contatore pubblico: visitatori unici totali e tempo medio per visitatore.
// La risposta è tenuta in cache dalla CDN per 10 minuti, così l'archivio viene letto poco.
const { list } = require('@vercel/blob');
const { decode } = require('./_lib');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  try {
    const best = new Map();   // ogni sessione può avere più aggiornamenti: teniamo il più lungo
    let cursor;
    do {
      const r = await list({ prefix: 's/', cursor, limit: 1000 });
      for (const b of r.blobs) {
        const s = decode(b.pathname);
        const p = best.get(s.sid);
        if (!p || s.sec > p.sec) best.set(s.sid, s);
      }
      cursor = r.hasMore ? r.cursor : null;
    } while (cursor);
    const perVis = new Map();
    for (const s of best.values()) perVis.set(s.vid, (perVis.get(s.vid) || 0) + s.sec);
    const visitors = perVis.size, total = [...perVis.values()].reduce((a, b) => a + b, 0);
    res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=3600');
    res.end(JSON.stringify({ visitors, avgSec: visitors ? Math.round(total / visitors) : 0 }));
  } catch (e) { res.setHeader('Cache-Control', 'no-store'); res.statusCode = 500; res.end('{"error":"read"}'); }
};
