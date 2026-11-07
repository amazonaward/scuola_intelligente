/* Contatore visite anonimo: un codice casuale per dispositivo, nessun nome, nessun IP salvato.
   Ogni minuto, mentre la pagina è visibile, manda un "battito" con i secondi passati sul sito.
   Il server risponde con: collegati ora, visitatori totali, tempo medio per visitatore. */
(function () {
  const h = location.hostname;
  if (location.protocol === 'file:' || /^(localhost|127\.|0\.0\.0\.0)/.test(h) || /github\.io$/.test(h)) return;
  const dnt = navigator.doNotTrack === '1' || window.doNotTrack === '1';
  const rnd = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  let vid; try { vid = localStorage.getItem('zainetto-vid'); if (!vid) { vid = rnd(); localStorage.setItem('zainetto-vid', vid); } } catch (e) { vid = rnd(); }
  const visible = () => document.visibilityState === 'visible';
  let pending = 0, since = visible() ? Date.now() : 0, first = true, stats = null, timer = null;

  function take() {                       // secondi visibili dall'ultimo battito
    if (since) { pending += Date.now() - since; since = visible() ? Date.now() : 0; }
    const s = Math.round(pending / 1000); pending -= s * 1000; return s;
  }
  function ping() {
    const body = dnt ? '{}' : JSON.stringify({ vid, add: take(), first });
    first = false;
    fetch('/api/ping', { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true })
      .then((r) => (r.ok ? r.json() : null)).then((j) => { if (j && typeof j.visitors === 'number') { stats = j; paint(true); } }).catch(() => {});
  }
  function bye() {                        // la pagina si chiude o va in secondo piano: salva i secondi rimasti
    if (dnt) return;
    const add = take(); if (!add) return;
    const body = JSON.stringify({ vid, add });
    try { navigator.sendBeacon ? navigator.sendBeacon('/api/ping', new Blob([body], { type: 'application/json' })) : ping(); } catch (e) {}
  }
  function start() { if (!timer) { ping(); timer = setInterval(ping, 60000); } }
  function stop() { clearInterval(timer); timer = null; }
  document.addEventListener('visibilitychange', () => {
    if (visible()) { if (!since) since = Date.now(); start(); }
    else { bye(); stop(); }
  });
  addEventListener('pagehide', bye);
  if (visible()) start();

  /* Contatore nel piè di pagina */
  const TXT = {
    it: ['collegati ora', 'visitatori', 'tempo medio per visitatore'],
    en: ['online now', 'visitors', 'average time per visitor'],
    fr: ['en ligne', 'visiteurs', 'temps moyen par visiteur'],
    ru: ['сейчас на сайте', 'посетителей', 'среднее время на посетителя'],
    ro: ['conectați acum', 'vizitatori', 'timp mediu per vizitator'],
    de: ['jetzt online', 'Besucher', 'durchschnittliche Zeit pro Besucher']
  };
  function fmt(sec) {
    const m = Math.round(sec / 60);
    if (sec < 60) return sec + ' s';
    if (m < 60) return m + ' min';
    return Math.floor(m / 60) + ' h ' + (m % 60) + ' min';
  }
  let observed = false;
  function paint(force) {
    const f = document.getElementById('footer'); if (!f || !stats) return;
    if (!observed) { observed = true; new MutationObserver(() => paint()).observe(f, { childList: true }); }
    let lang = 'it'; try { lang = (typeof Store !== 'undefined' && Store.getLang && Store.getLang()) || 'it'; } catch (e) {}
    const t = TXT[lang] || TXT.it;
    let box = f.querySelector('.visit-counter');
    if (box && box.dataset.lang === lang && !force) return;
    const live = Math.max(1, stats.live);   // chi guarda la pagina è collegato
    const html =
      `<span class="vc-item vc-live"><span class="vc-dot" aria-hidden="true"></span><b>${live.toLocaleString(lang)}</b> ${t[0]}</span>` +
      `<span class="vc-item"><span class="vc-ico" aria-hidden="true">👥</span><b>${stats.visitors.toLocaleString(lang)}</b> ${t[1]}</span>` +
      `<span class="vc-item"><span class="vc-ico" aria-hidden="true">⏱️</span><b>${fmt(stats.avgSec)}</b> ${t[2]}</span>`;
    if (!box) { box = document.createElement('div'); box.className = 'visit-counter'; box.setAttribute('role', 'status'); box.setAttribute('aria-live', 'polite'); f.prepend(box); }
    box.dataset.lang = lang; box.innerHTML = html;
  }
})();
