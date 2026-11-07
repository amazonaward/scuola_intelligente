/* Statistiche anonime: un codice casuale per dispositivo, nessun nome, nessun IP salvato.
   Conta solo il tempo in cui la pagina è visibile e quali sezioni vengono aperte. */
(function () {
  const h = location.hostname;
  if (location.protocol === 'file:' || /^(localhost|127\.|0\.0\.0\.0)/.test(h) || /github\.io$/.test(h)) return;
  const dnt = navigator.doNotTrack === '1' || window.doNotTrack === '1';
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
    if (dnt) return;
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
    else if (!since) since = Date.now();
  });
  addEventListener('pagehide', send);
  addEventListener('hashchange', onRoute);
  setInterval(() => { if (secs() - lastSent >= 300) send(); }, 60000);   // sessioni lunghe: aggiorna ogni 5 minuti
  onRoute();

  /* Contatore nel piè di pagina: visitatori totali e tempo medio per visitatore */
  const TXT = {
    it: ['visitatori', 'tempo medio per visitatore'], en: ['visitors', 'average time per visitor'],
    fr: ['visiteurs', 'temps moyen par visiteur'], ru: ['посетителей', 'среднее время на посетителя'],
    ro: ['vizitatori', 'timp mediu per vizitator'] };
  let stats = null;
  function fmt(sec) {
    const m = Math.round(sec / 60);
    if (sec < 60) return sec + ' s';
    if (m < 60) return m + ' min';
    return Math.floor(m / 60) + ' h ' + (m % 60) + ' min';
  }
  function paint() {
    const f = document.getElementById('footer'); if (!f || !stats) return;
    let lang = 'it'; try { lang = (typeof Store !== 'undefined' && Store.getLang && Store.getLang()) || 'it'; } catch (e) {}
    const t = TXT[lang] || TXT.it;
    const html = `<span class="vc-item"><span class="vc-ico" aria-hidden="true">👥</span><b>${stats.visitors.toLocaleString(lang)}</b> ${t[0]}</span>` +
      `<span class="vc-item"><span class="vc-ico" aria-hidden="true">⏱️</span><b>${fmt(stats.avgSec)}</b> ${t[1]}</span>`;
    let box = f.querySelector('.visit-counter');
    if (box && box.dataset.lang === lang) return;
    if (!box) { box = document.createElement('div'); box.className = 'visit-counter'; box.setAttribute('role', 'status'); f.prepend(box); }
    box.dataset.lang = lang; box.innerHTML = html;
  }
  fetch('/api/counter').then(r => r.ok ? r.json() : null).then(j => {
    if (!j || typeof j.visitors !== 'number') return;
    stats = j; paint();
    const f = document.getElementById('footer'); if (f) new MutationObserver(paint).observe(f, { childList: true });
  }).catch(() => {});
})();
