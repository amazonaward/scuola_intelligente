/* Statistiche anonime: un codice casuale per dispositivo, nessun nome, nessun IP salvato.
   Conta solo il tempo in cui la pagina è visibile e quali sezioni vengono aperte. */
(function () {
  const h = location.hostname;
  if (location.protocol === 'file:' || /^(localhost|127\.|0\.0\.0\.0)/.test(h) || /github\.io$/.test(h)) return;
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return;
  const rnd = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  let vid; try { vid = localStorage.getItem('zainetto-vid'); if (!vid) { vid = rnd(); localStorage.setItem('zainetto-vid', vid); } } catch (e) { vid = rnd(); }
  const sid = rnd(), day = new Date().toISOString().slice(0, 10);
  const pages = new Map();
  let active = 0, since = document.visibilityState === 'visible' ? Date.now() : 0, lastSent = 0;

  function key() {
    const p = location.hash.replace(/^#\/?/, '').split('/');
    if (p[0] === 'admin') return null;
    if (p[0] === 't' && p[1]) return 't/' + p[1];
    return p[1] && /^(luoghi|libreria|spazio|metodi|programma)$/.test(p[0]) ? p[0] + '/' + p[1] : (p[0] || 'home');
  }
  function onRoute() { const k = key(); if (k) pages.set(k, (pages.get(k) || 0) + 1); }
  function secs() { return Math.round((active + (since ? Date.now() - since : 0)) / 1000); }
  function send() {
    const sec = secs();
    if (sec < 5 || sec - lastSent < 5) return;
    lastSent = sec;
    const top = [...pages.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
    let lang = 'it'; try { lang = (typeof Store !== 'undefined' && Store.getLang && Store.getLang()) || document.documentElement.lang || 'it'; } catch (e) {}
    const body = JSON.stringify({ sid, vid, sec, day, lang, pages: top });
    try {
      if (!(navigator.sendBeacon && navigator.sendBeacon('/api/track', new Blob([body], { type: 'application/json' }))))
        fetch('/api/track', { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {});
    } catch (e) {}
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') { if (since) { active += Date.now() - since; since = 0; } send(); }
    else since = Date.now();
  });
  addEventListener('pagehide', send);
  addEventListener('hashchange', onRoute);
  setInterval(() => { if (secs() - lastSent >= 300) send(); }, 60000);   // sessioni lunghe: aggiorna ogni 5 minuti
  onRoute();
})();
