/* Spazio › Il viaggio delle Voyager (#/spazio/voyager)
   Mappa vista dall'alto del Sistema Solare con le orbite vere (Space.helio) e il percorso (semplificato) delle due sonde,
   cursore del tempo dal 1977 a oggi, contatori in tempo reale, linea del tempo delle scoperte, approfondimenti e quiz.
   Testi: data/voyager/text.<lingua>.js (formato in data/voyager/FORMATO.md). */
(function () {
  'use strict';
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const TAU = Math.PI * 2, D2R = Math.PI / 180, AU_KM = 149597870.7, DAY = 86400000;

  const TXT = {
    it: { 'vg.nav': 'Il viaggio delle Voyager', 'vg.card': 'Due sonde partite nel 1977 che stanno ancora viaggiando: cosa hanno scoperto e fotografato', 'vg.now': 'Adesso',
      'vg.dist': 'Distanza dal Sole', 'vg.light': 'La luce impiega', 'vg.speed': 'Velocità', 'vg.age': 'In viaggio da', 'vg.years': 'anni', 'vg.days': 'giorni',
      'vg.hours': '{h} h {m} min', 'vg.au': 'UA', 'vg.kms': 'km/s', 'vg.map': 'La mappa del viaggio', 'vg.mapNote': 'Vista dall’alto. Le orbite dei pianeti sono vere; il percorso delle sonde è semplificato e la distanza dal Sole è compressa per far stare tutto nello schermo (le sonde, in realtà, salgono e scendono anche fuori dal piano dei pianeti).',
      'vg.play': '▶ Fai partire', 'vg.pause': '⏸ Pausa', 'vg.today': 'Oggi', 'vg.timeline': 'Le tappe e le scoperte', 'vg.photo': '📷 Le foto originali (NASA)',
      'vg.more': 'Da sapere', 'vg.quiz': 'Mettiti alla prova', 'vg.both': 'Entrambe', 'vg.helio': 'eliopausa', 'vg.shock': 'shock terminale', 'vg.back': 'Spazio',
      'vg.italian': 'Questa pagina non è ancora tradotta nella tua lingua: la vedi in italiano.', 'vg.loading': 'Sto contattando le sonde…', 'vg.error': 'Non riesco a caricare la pagina. Riprova.' },
    en: { 'vg.nav': 'The Voyagers’ journey', 'vg.card': 'Two probes launched in 1977 that are still travelling: what they discovered and photographed', 'vg.now': 'Now',
      'vg.dist': 'Distance from the Sun', 'vg.light': 'Light takes', 'vg.speed': 'Speed', 'vg.age': 'Travelling for', 'vg.years': 'years', 'vg.days': 'days',
      'vg.hours': '{h} h {m} min', 'vg.au': 'AU', 'vg.kms': 'km/s', 'vg.map': 'Map of the journey', 'vg.mapNote': 'Seen from above. The planets’ orbits are real; the probes’ path is simplified and the distance from the Sun is squeezed so everything fits on the screen.',
      'vg.play': '▶ Play', 'vg.pause': '⏸ Pause', 'vg.today': 'Today', 'vg.timeline': 'Milestones and discoveries', 'vg.photo': '📷 The original photos (NASA)',
      'vg.more': 'Good to know', 'vg.quiz': 'Test yourself', 'vg.both': 'Both', 'vg.helio': 'heliopause', 'vg.shock': 'termination shock', 'vg.back': 'Space',
      'vg.italian': 'This page is not translated into your language yet: you are seeing it in Italian.', 'vg.loading': 'Contacting the probes…', 'vg.error': 'I can’t load the page. Please try again.' },
    fr: { 'vg.nav': 'Le voyage des Voyager', 'vg.card': 'Deux sondes parties en 1977 qui voyagent encore : ce qu’elles ont découvert et photographié', 'vg.now': 'Maintenant',
      'vg.dist': 'Distance du Soleil', 'vg.light': 'La lumière met', 'vg.speed': 'Vitesse', 'vg.age': 'En voyage depuis', 'vg.years': 'ans', 'vg.days': 'jours',
      'vg.hours': '{h} h {m} min', 'vg.au': 'UA', 'vg.kms': 'km/s', 'vg.map': 'La carte du voyage', 'vg.mapNote': 'Vue de dessus. Les orbites des planètes sont vraies ; le trajet des sondes est simplifié et la distance au Soleil est comprimée pour que tout tienne à l’écran.',
      'vg.play': '▶ Lancer', 'vg.pause': '⏸ Pause', 'vg.today': 'Aujourd’hui', 'vg.timeline': 'Les étapes et les découvertes', 'vg.photo': '📷 Les photos originales (NASA)',
      'vg.more': 'À savoir', 'vg.quiz': 'Teste-toi', 'vg.both': 'Les deux', 'vg.helio': 'héliopause', 'vg.shock': 'choc terminal', 'vg.back': 'Espace',
      'vg.italian': 'Cette page n’est pas encore traduite dans ta langue : tu la vois en italien.', 'vg.loading': 'Je contacte les sondes…', 'vg.error': 'Impossible de charger la page. Réessaie.' },
    ru: { 'vg.nav': 'Путешествие «Вояджеров»', 'vg.card': 'Два зонда, запущенные в 1977 году и всё ещё летящие: что они открыли и сфотографировали', 'vg.now': 'Сейчас',
      'vg.dist': 'Расстояние от Солнца', 'vg.light': 'Свет летит', 'vg.speed': 'Скорость', 'vg.age': 'В пути', 'vg.years': 'лет', 'vg.days': 'дней',
      'vg.hours': '{h} ч {m} мин', 'vg.au': 'а. е.', 'vg.kms': 'км/с', 'vg.map': 'Карта путешествия', 'vg.mapNote': 'Вид сверху. Орбиты планет настоящие; путь зондов упрощён, а расстояние от Солнца сжато, чтобы всё поместилось на экране.',
      'vg.play': '▶ Запустить', 'vg.pause': '⏸ Пауза', 'vg.today': 'Сегодня', 'vg.timeline': 'Этапы и открытия', 'vg.photo': '📷 Оригинальные снимки (NASA)',
      'vg.more': 'Полезно знать', 'vg.quiz': 'Проверь себя', 'vg.both': 'Оба', 'vg.helio': 'гелиопауза', 'vg.shock': 'ударная волна', 'vg.back': 'Космос',
      'vg.italian': 'Эта страница ещё не переведена на твой язык: ты видишь её по-итальянски.', 'vg.loading': 'Связываюсь с зондами…', 'vg.error': 'Не получается загрузить страницу. Попробуй ещё раз.' },
    ro: { 'vg.nav': 'Călătoria sondelor Voyager', 'vg.card': 'Două sonde lansate în 1977 care încă mai călătoresc: ce au descoperit și fotografiat', 'vg.now': 'Acum',
      'vg.dist': 'Distanța față de Soare', 'vg.light': 'Lumina face', 'vg.speed': 'Viteză', 'vg.age': 'Călătorește de', 'vg.years': 'ani', 'vg.days': 'zile',
      'vg.hours': '{h} h {m} min', 'vg.au': 'UA', 'vg.kms': 'km/s', 'vg.map': 'Harta călătoriei', 'vg.mapNote': 'Văzut de sus. Orbitele planetelor sunt reale; drumul sondelor este simplificat, iar distanța față de Soare este comprimată ca totul să încapă pe ecran.',
      'vg.play': '▶ Pornește', 'vg.pause': '⏸ Pauză', 'vg.today': 'Azi', 'vg.timeline': 'Etape și descoperiri', 'vg.photo': '📷 Fotografiile originale (NASA)',
      'vg.more': 'De știut', 'vg.quiz': 'Pune-te la încercare', 'vg.both': 'Amândouă', 'vg.helio': 'heliopauză', 'vg.shock': 'șoc terminal', 'vg.back': 'Spațiu',
      'vg.italian': 'Pagina nu este încă tradusă în limba ta: o vezi în italiană.', 'vg.loading': 'Contactez sondele…', 'vg.error': 'Nu pot încărca pagina. Încearcă din nou.' },
    de: { 'vg.nav': 'Die Reise der Voyager-Sonden', 'vg.card': 'Zwei Sonden, 1977 gestartet und immer noch unterwegs: was sie entdeckt und fotografiert haben', 'vg.now': 'Jetzt',
      'vg.dist': 'Entfernung von der Sonne', 'vg.light': 'Das Licht braucht', 'vg.speed': 'Geschwindigkeit', 'vg.age': 'Unterwegs seit', 'vg.years': 'Jahren', 'vg.days': 'Tagen',
      'vg.hours': '{h} h {m} min', 'vg.au': 'AE', 'vg.kms': 'km/s', 'vg.map': 'Karte der Reise', 'vg.mapNote': 'Von oben gesehen. Die Umlaufbahnen der Planeten sind echt; der Weg der Sonden ist vereinfacht und der Abstand zur Sonne zusammengedrückt, damit alles auf den Bildschirm passt.',
      'vg.play': '▶ Abspielen', 'vg.pause': '⏸ Pause', 'vg.today': 'Heute', 'vg.timeline': 'Etappen und Entdeckungen', 'vg.photo': '📷 Die Originalfotos (NASA)',
      'vg.more': 'Gut zu wissen', 'vg.quiz': 'Teste dich', 'vg.both': 'Beide', 'vg.helio': 'Heliopause', 'vg.shock': 'Terminationsschock', 'vg.back': 'Weltall',
      'vg.italian': 'Diese Seite ist noch nicht in deine Sprache übersetzt: Du siehst sie auf Italienisch.', 'vg.loading': 'Ich funke die Sonden an…', 'vg.error': 'Die Seite kann nicht geladen werden. Versuch es noch einmal.' }
  };
  for (const l of Object.keys(TXT)) I18N[l] = Object.assign(I18N[l] || {}, TXT[l]);

  /* ---- traiettorie (semplificate) ----
     Tappe: data del passaggio più vicino → posizione vera del pianeta in quel giorno (Space.helio).
     Dopo l'ultimo pianeta: la sonda si allontana verso la direzione in cui si trova oggi (longitudine e latitudine eclittiche),
     con la distanza agganciata a un valore di riferimento (1 gennaio 2025) e alla velocità di allontanamento. */
  const PROBES = {
    v1: { color: '#f59e0b', launch: '1977-09-05', legs: [['jupiter', '1979-03-05'], ['saturn', '1980-11-12']], lon: 256, lat: 35, ref: '2025-01-01', r: 164.9, v: 3.58 },
    v2: { color: '#38bdf8', launch: '1977-08-20', legs: [['jupiter', '1979-07-09'], ['saturn', '1981-08-26'], ['uranus', '1986-01-24'], ['neptune', '1989-08-25']], lon: 290, lat: -35, ref: '2025-01-01', r: 138.2, v: 3.24 }
  };
  const PLANETS = [['earth', '#60a5fa', 1], ['jupiter', '#f59e0b', 1], ['saturn', '#eab308', 1], ['uranus', '#67e8f9', 1], ['neptune', '#3b82f6', 1]];
  const ms = (s) => Date.parse(s + 'T12:00:00Z');
  const jd = (t) => t / DAY + 2440587.5;
  function buildTrack(P) {
    const pts = [[ms(P.launch), Space.helio('earth', jd(ms(P.launch)))]];
    P.legs.forEach(([pl, d]) => pts.push([ms(d), Space.helio(pl, jd(ms(d)))]));
    // polare (r, angolo crescente: le sonde girano come i pianeti)
    const pol = pts.map(([t, p]) => [t, Math.hypot(p[0], p[1]), Math.atan2(p[1], p[0]), 0]);
    for (let i = 1; i < pol.length; i++) { while (pol[i][2] <= pol[i - 1][2]) pol[i][2] += TAU; }
    const last = pol[pol.length - 1]; let a = P.lon * D2R; while (a < last[2]) a += TAU; if (a - last[2] > Math.PI * 1.2) a -= TAU;
    P.pol = pol; P.outA = a; P.tRef = ms(P.ref);
  }
  function probeAt(P, t) {
    const pol = P.pol;
    if (t <= pol[0][0]) return [pol[0][1], pol[0][2], 0];
    for (let i = 1; i < pol.length; i++) if (t <= pol[i][0]) {
      const a = pol[i - 1], b = pol[i], f = (t - a[0]) / (b[0] - a[0]);
      return [a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f, 0];
    }
    const L = pol[pol.length - 1], yrs = (t - P.tRef) / (365.25 * DAY);
    const r = t <= P.tRef ? L[1] + (P.r - L[1]) * (t - L[0]) / (P.tRef - L[0]) : P.r + P.v * yrs;
    const f = Math.min(1, (t - L[0]) / (4 * 365.25 * DAY)), e = f * f * (3 - 2 * f);
    return [r, L[2] + (P.outA - L[2]) * e, P.lat * D2R * e];
  }
  function distNow(P, t) { const p = probeAt(P, t); return p[0]; }

  let TEXTS = {};
  window.VOYAGER_TEXT = (d) => { TEXTS[d.lang || 'it'] = d; };
  async function load() {
    if (!TEXTS.it) await Z.loadScript('data/voyager/text.it.js');
    const l = i18n.lang;
    if (l !== 'it' && !TEXTS[l]) { try { await Z.loadScript(`data/voyager/text.${l}.js`); } catch (e) { /* manca la traduzione */ } }
    return TEXTS[l] || TEXTS.it;
  }
  const nf = (x, d = 0) => { try { return x.toLocaleString(i18n.lang, { maximumFractionDigits: d, minimumFractionDigits: d }); } catch (e) { return x.toFixed(d); } };
  const fdate = (t) => { try { return new Date(t).toLocaleDateString(i18n.lang, { year: 'numeric', month: 'long', day: 'numeric' }); } catch (e) { return new Date(t).toISOString().slice(0, 10); } };

  async function page(m) {
    const hash = location.hash;
    m.innerHTML = `<p class="muted">📡 ${t('vg.loading')}</p>`;
    let T; try { T = await load(); } catch (e) { m.innerHTML = `<p class="muted">${t('vg.error')}</p>`; return; }
    if (location.hash !== hash || !window.Space) return;
    Object.values(PROBES).forEach((P) => { if (!P.pol) buildTrack(P); });
    Z.registerTitle('space:voyager', '#/spazio/voyager', () => '🛰️ ' + t('vg.nav'));
    Store.visit('space:voyager');
    m.innerHTML = '';
    m.appendChild(el('div', 'crumbs', `<a href="#/spazio">🔭 ${t('vg.back')}</a> › 🛰️ ${esc(T.title || t('vg.nav'))}`));
    m.appendChild(el('header', 'vg-head', `<h1>🛰️ ${esc(T.title || t('vg.nav'))}</h1>${T.intro || ''}`));
    if (i18n.lang !== 'it' && T === TEXTS.it) m.appendChild(el('div', 'callout c-remember', '🌐 ' + t('vg.italian')));

    // contatori in tempo reale
    const live = el('section', 'vg-live'); m.appendChild(live);
    const cards = {};
    ['v1', 'v2'].forEach((k) => {
      const P = PROBES[k];
      const c = el('div', 'vg-probe', `<h3 style="--pc:${P.color}"><i></i>Voyager ${k[1]}</h3><dl>
        <dt>${t('vg.dist')}</dt><dd class="d"></dd><dt>${t('vg.light')}</dt><dd class="l"></dd>
        <dt>${t('vg.speed')}</dt><dd class="s"></dd><dt>${t('vg.age')}</dt><dd class="a"></dd></dl>${T.probes && T.probes[k] ? `<div class="vg-pdesc">${T.probes[k]}</div>` : ''}`);
      live.appendChild(c); cards[k] = c;
    });
    function tick() {
      if (!document.body.contains(live)) return;
      const now = Date.now();
      ['v1', 'v2'].forEach((k) => {
        const P = PROBES[k], r = distNow(P, now), c = cards[k], secs = r * AU_KM / 299792.458;
        c.querySelector('.d').innerHTML = `<b>${nf(Math.round(r * AU_KM))}</b> km <small>(${nf(r, 1)} ${t('vg.au')})</small>`;
        c.querySelector('.l').textContent = t('vg.hours', { h: Math.floor(secs / 3600), m: Math.floor((secs % 3600) / 60) });
        c.querySelector('.s').textContent = `≈ ${nf(P.v * 4.74047, 1)} ${t('vg.kms')}`;
        const days = (now - ms(P.launch)) / DAY;
        c.querySelector('.a').textContent = `${nf(Math.floor(days / 365.25))} ${t('vg.years')} · ${nf(Math.floor(days))} ${t('vg.days')}`;
      });
      setTimeout(tick, 1000);
    }
    tick();

    // mappa
    const mapSec = el('section', 'card vg-mapsec', `<h2>🗺️ ${t('vg.map')}</h2>`);
    const cv = el('canvas', 'vg-map'); const ctl = el('div', 'vg-ctl');
    const t0 = ms('1977-08-20'), t1 = Date.now();
    ctl.innerHTML = `<button type="button" class="btn btn-small vg-play">${t('vg.play')}</button><input type="range" min="0" max="1000" value="1000" aria-label="${t('vg.map')}"><b class="vg-date"></b><button type="button" class="btn btn-ghost btn-small vg-today">${t('vg.today')}</button>`;
    mapSec.append(cv, ctl, el('p', 'muted small', t('vg.mapNote'))); m.appendChild(mapSec);
    const rng = ctl.querySelector('input'), lab = ctl.querySelector('.vg-date'), playB = ctl.querySelector('.vg-play');
    let cur = t1, playing = false, raf = null, hiEvent = null;
    const RMAX = 175;
    function draw() {
      const W = cv.clientWidth || 600, H = Math.round(Math.min(560, Math.max(320, W * 0.75))), dpr = window.devicePixelRatio || 1;
      if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.height = H + 'px'; }
      const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.fillStyle = '#0b1020'; g.fillRect(0, 0, W, H);
      const R = Math.min(W, H) * 0.47, cx = W / 2, cy = H / 2;
      const sc = (r) => R * Math.sqrt(Math.max(0, r) / RMAX);
      const XY = (r, a) => [cx + sc(r) * Math.cos(a), cy - sc(r) * Math.sin(a)];
      // stelle di sfondo
      g.fillStyle = 'rgba(255,255,255,.35)'; for (let i = 0; i < 120; i++) { const x = (i * 7919 % 1000) / 1000 * W, y = (i * 104729 % 1000) / 1000 * H; g.fillRect(x, y, 1, 1); }
      // eliosfera
      [[90, t('vg.shock')], [121, t('vg.helio')]].forEach(([r, n], i) => {
        g.setLineDash([4, 6]); g.strokeStyle = i ? 'rgba(244,114,182,.55)' : 'rgba(167,139,250,.45)'; g.beginPath(); g.arc(cx, cy, sc(r), 0, TAU); g.stroke(); g.setLineDash([]);
        g.fillStyle = i ? 'rgba(244,114,182,.8)' : 'rgba(167,139,250,.75)'; g.font = '11px system-ui'; g.fillText(n, cx + sc(r) * 0.71 + 4, cy - sc(r) * 0.71);
      });
      // orbite e pianeti
      const J = jd(cur);
      PLANETS.forEach(([id, col]) => {
        const p = Space.helio(id, J), r = Math.hypot(p[0], p[1]);
        g.strokeStyle = 'rgba(148,163,184,.35)'; g.beginPath(); g.arc(cx, cy, sc(r), 0, TAU); g.stroke();
        const [x, y] = XY(r, Math.atan2(p[1], p[0]));
        g.fillStyle = col; g.beginPath(); g.arc(x, y, id === 'earth' ? 3 : 4.5, 0, TAU); g.fill();
        if (id !== 'earth' || W > 500) { g.fillStyle = '#cbd5e1'; g.font = '11px system-ui'; g.fillText(t('planet.' + id), x + 6, y - 5); }
      });
      g.fillStyle = '#fde047'; g.beginPath(); g.arc(cx, cy, 5, 0, TAU); g.fill();
      // scie delle sonde
      ['v1', 'v2'].forEach((k) => {
        const P = PROBES[k], start = ms(P.launch); if (cur < start) return;
        g.strokeStyle = P.color; g.lineWidth = 2; g.beginPath();
        const n = 260; for (let i = 0; i <= n; i++) { const tt = start + (cur - start) * i / n, q = probeAt(P, tt); const [x, y] = XY(q[0], q[1]); i ? g.lineTo(x, y) : g.moveTo(x, y); }
        g.stroke(); g.lineWidth = 1;
        const q = probeAt(P, cur), [x, y] = XY(q[0], q[1]);
        g.fillStyle = '#fff'; g.beginPath(); g.arc(x, y, 4, 0, TAU); g.fill(); g.strokeStyle = P.color; g.lineWidth = 2; g.stroke(); g.lineWidth = 1;
        g.fillStyle = P.color; g.font = 'bold 12px system-ui'; g.fillText('Voyager ' + k[1], x + 7, y + 14);
      });
      // evento evidenziato
      if (hiEvent) { const P = PROBES[hiEvent.probe === 'both' ? 'v1' : hiEvent.probe]; if (P) { const q = probeAt(P, ms(hiEvent.date)); const [x, y] = XY(q[0], q[1]); g.strokeStyle = '#fff'; g.setLineDash([2, 3]); g.beginPath(); g.arc(x, y, 11, 0, TAU); g.stroke(); g.setLineDash([]); } }
      lab.textContent = fdate(cur);
    }
    const setT = (tt, fromSlider) => { cur = Math.max(t0, Math.min(t1, tt)); if (!fromSlider) rng.value = Math.round((cur - t0) / (t1 - t0) * 1000); draw(); };
    rng.oninput = () => { stop(); setT(t0 + (t1 - t0) * rng.value / 1000, true); };
    const stop = () => { playing = false; playB.textContent = t('vg.play'); if (raf) cancelAnimationFrame(raf); raf = null; };
    playB.onclick = () => {
      if (playing) return stop();
      if (cur >= t1) setT(t0);
      playing = true; playB.textContent = t('vg.pause'); let last = performance.now();
      const step = (now) => { if (!playing || !document.body.contains(cv)) return; const dt = now - last; last = now;
        const k = cur < ms('1990-01-01') ? 120 : 600; setT(cur + dt * k * DAY / 1000); if (cur >= t1) return stop(); raf = requestAnimationFrame(step); };
      raf = requestAnimationFrame(step);
    };
    ctl.querySelector('.vg-today').onclick = () => { stop(); hiEvent = null; setT(t1); };
    window.addEventListener('resize', () => { if (document.body.contains(cv)) draw(); });
    requestAnimationFrame(draw);

    // linea del tempo
    if (T.events && T.events.length) {
      const tl = el('section', 'card vg-tl', `<h2>📅 ${t('vg.timeline')}</h2>`); const list = el('ol', 'vg-events');
      T.events.forEach((e) => {
        const who = e.probe === 'both' ? t('vg.both') : 'Voyager ' + e.probe.slice(1);
        const col = e.probe === 'both' ? '#a3a3a3' : PROBES[e.probe] ? PROBES[e.probe].color : '#94a3b8';
        const li = el('li', 'vg-ev', `<button type="button" class="vg-evh" style="--pc:${col}"><span class="vg-ic">${e.icon || '•'}</span><span><small>${fdate(ms(e.date))} · ${esc(who)}${e.planet ? ' · ' + t('planet.' + e.planet) : ''}</small><b>${esc(e.title)}</b></span></button>
          <div class="vg-evb">${e.html || ''}${e.photo ? `<p><a href="https://images.nasa.gov/search?q=${encodeURIComponent(e.photo)}" target="_blank" rel="noopener">${t('vg.photo')}</a></p>` : ''}</div>`);
        li.querySelector('.vg-evh').onclick = () => { const open = li.classList.toggle('open'); if (open) { stop(); hiEvent = e; setT(ms(e.date)); mapSec.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } };
        list.appendChild(li);
      });
      tl.appendChild(list); m.appendChild(tl);
    }
    // approfondimenti
    if (T.sections && T.sections.length) {
      const s = el('section', 'card vg-more', `<h2>💡 ${t('vg.more')}</h2>`); const g = el('div', 'vg-grid');
      T.sections.forEach((x) => g.appendChild(el('div', 'vg-box', `<h3>${x.icon || ''} ${esc(x.title)}</h3>${x.html || ''}`)));
      s.appendChild(g); m.appendChild(s);
    }
    // quiz
    if (T.quiz && T.quiz.length) {
      const q = el('section', 'card vg-quiz', `<h2>✏️ ${t('vg.quiz')}</h2>`); const area = el('div'); q.appendChild(area);
      const mk = () => { area.innerHTML = ''; area.appendChild(Quiz.render(Z.shuffle(T.quiz), { onDone: (ok, n) => { Store.quizResult('space:voyager', 'quiz', ok, n); if (ok / n >= 0.7) Store.markDone('space:voyager', true); }, onRetry: mk })); };
      mk(); m.appendChild(q);
    }
  }

  /* aggancio alla sezione Spazio: #/spazio/voyager */
  const prev = window.ZPages && ZPages.spazio;
  if (prev) ZPages.spazio = function (m, a, b) { if (a === 'voyager') { m.classList.add('sp-page'); return page(m); } return prev(m, a, b); };
  window.Voyager = { page, probeAt: (k, t) => probeAt(PROBES[k], t), PROBES };
})();
