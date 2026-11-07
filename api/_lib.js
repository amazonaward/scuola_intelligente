// Funzioni comuni per le statistiche anonime.
// Ogni sessione è salvata come blob vuoto: i dati sono nel nome del file,
// così il pannello admin li legge con una sola "list" per giorno, senza scaricare nulla.
// Nome: s/<giorno>/<sessione>.<visitatore>.<secondi>.<paese>.<dispositivo>.<lingua>.<pagine>
// pagine: chiave-conteggio separati da "_" (es. t~m2-sci-chimica-3_luoghi~italia-1)
const SAFE = /[^a-z0-9-]/g;
const clean = (s, n) => String(s || '').toLowerCase().replace(SAFE, '').slice(0, n);
const access = () => (process.env.BLOB_ACCESS === 'public' ? 'public' : 'private');
const day = (d) => d.toISOString().slice(0, 10);

function encode(o) {
  const pages = (o.pages || []).slice(0, 8)
    .map(([k, c]) => String(k).toLowerCase().replace(/\//g, '~').replace(/[^a-z0-9~-]/g, '').slice(0, 60) + '-' + Math.min(999, c | 0))
    .filter(p => p.length > 2).join('_');
  return [clean(o.sid, 16), clean(o.vid, 16), Math.max(0, Math.min(21600, o.sec | 0)),
    clean(o.cc, 2) || 'xx', clean(o.dev, 1) || 'd', clean(o.lang, 2) || 'it', pages || '-'].join('.');
}

function decode(pathname) {
  const base = pathname.split('/').pop().replace(/\.txt$/, '');
  const [sid, vid, sec, cc, dev, lang, pages] = base.split('.');
  const pg = !pages || pages === '-' ? [] : pages.split('_').map(p => {
    const i = p.lastIndexOf('-'); return [p.slice(0, i).replace(/~/g, '/'), +p.slice(i + 1) || 1];
  });
  return { sid, vid, sec: +sec || 0, cc, dev, lang, pages: pg };
}

module.exports = { clean, access, day, encode, decode };
