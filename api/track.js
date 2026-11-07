// Riceve una sessione anonima (nessun nome, IP non salvato) e la registra.
const { put } = require('@vercel/blob');
const { clean, access, day, encode } = require('./_lib');

function readBody(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  if (typeof req.body === 'string') { try { return Promise.resolve(JSON.parse(req.body)); } catch (e) { return Promise.resolve(null); } }
  return new Promise(res => {
    let s = ''; req.on('data', c => { s += c; if (s.length > 4000) req.destroy(); });
    req.on('end', () => { try { res(JSON.parse(s)); } catch (e) { res(null); } });
    req.on('error', () => res(null));
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.statusCode = 405; return res.end(); }
  const b = await readBody(req);
  if (!b || !clean(b.sid, 16) || !clean(b.vid, 16) || !(b.sec >= 5)) { res.statusCode = 204; return res.end(); }
  const ua = String(req.headers['user-agent'] || '');
  if (/bot|crawl|spider|headless|lighthouse/i.test(ua)) { res.statusCode = 204; return res.end(); }
  const rec = {
    sid: b.sid, vid: b.vid, sec: b.sec,
    cc: req.headers['x-vercel-ip-country'] || 'xx',            // solo il Paese, mai l'IP
    dev: /ipad|tablet/i.test(ua) ? 't' : /mobi|android|iphone/i.test(ua) ? 'm' : 'd',
    lang: b.lang,
    pages: Array.isArray(b.pages) ? b.pages.filter(p => Array.isArray(p) && p.length === 2) : []
  };
  const d = /^\d{4}-\d{2}-\d{2}$/.test(b.day || '') && Math.abs(Date.parse(b.day) - Date.now()) < 2 * 864e5 ? b.day : day(new Date());
  try {
    await put('s/' + d + '/' + encode(rec) + '.txt', '1', { access: access(), addRandomSuffix: false, allowOverwrite: true, contentType: 'text/plain' });
    res.statusCode = 204; res.end();
  } catch (e) { res.statusCode = 500; res.end('err'); }
};
