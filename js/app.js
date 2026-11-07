/* Zainetto – applicazione principale (SPA con routing via #hash) */
(function () {
  const C = window.CURRICULUM;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const SUBJ_ICON = { ita: '📖', mat: '🔢', sci: '🔬', sto: '🏛️', geo: '🌍', ing: '🇬🇧', tec: '💻', lat: '🏺' };
  const SUBJ_COLOR = { ita: '#e85d75', mat: '#4c7cf3', sci: '#2fb67c', sto: '#d08a2e', geo: '#18a5b8', ing: '#8a5cf6', tec: '#64748b', lat: '#b45309' };
  const YEAR_COLOR = { p1: '#ff7a59', p2: '#f59e0b', p3: '#84cc16', p4: '#14b8a6', p5: '#3b82f6', m1: '#8b5cf6', m2: '#ec4899', m3: '#ef4444' };
  const FULL = new Set(C.full);
  const reduceMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- testi nuovi dell'interfaccia (aggiunti solo se mancano nei dizionari) ---------- */
  const UI = {
    it: { 'ui.menu': 'Menu', 'ui.close': 'Chiudi', 'ui.themeDark': 'Tema scuro', 'ui.themeLight': 'Tema chiaro', 'ui.theme': 'Tema', 'ui.toTop': 'Torna su',
      'ui.today': 'Il consiglio di oggi', 'ui.start': 'Inizia', 'ui.continueBtn': 'Continua', 'ui.streak': 'giorni di fila', 'ui.lessonsDone': 'lezioni studiate',
      'ui.medals': 'medaglie', 'ui.morning': 'Buongiorno', 'ui.afternoon': 'Buon pomeriggio', 'ui.evening': 'Buonasera', 'ui.overall': 'in tutto',
      'ui.perfect': 'Perfetto, tutte giuste!', 'ui.great': 'Bravo, ottimo lavoro!', 'ui.doneToast': 'Lezione segnata come studiata!', 'ui.allDone': 'Hai studiato tutte le lezioni della tua classe: scegline una di un altro anno!',
      'ui.guest': 'Ospite', 'ui.lessonProgress': 'Avanzamento della lezione', 'ui.sections': 'Sezioni', 'ui.locked': 'Da conquistare', 'ui.yourYear': 'La tua classe',
      'ui.minutes': 'min', 'ui.progress': 'Avanzamento',
      'badge.0': 'Primo passo', 'badge.0d': 'Studia la prima lezione', 'badge.1': 'Lettore', 'badge.1d': 'Studia 5 lezioni', 'badge.2': 'Studioso', 'badge.2d': 'Studia 15 lezioni',
      'badge.3': 'Campione', 'badge.3d': 'Supera una verifica', 'badge.4': 'Perfezione', 'badge.4d': '100% in una verifica', 'badge.5': 'Costanza', 'badge.5d': '3 giorni di studio', 'badge.6': 'Esploratore', 'badge.6d': '4 materie diverse' },
    en: { 'ui.menu': 'Menu', 'ui.close': 'Close', 'ui.themeDark': 'Dark theme', 'ui.themeLight': 'Light theme', 'ui.theme': 'Theme', 'ui.toTop': 'Back to top',
      'ui.today': "Today's tip", 'ui.start': 'Start', 'ui.continueBtn': 'Continue', 'ui.streak': 'days in a row', 'ui.lessonsDone': 'lessons studied',
      'ui.medals': 'medals', 'ui.morning': 'Good morning', 'ui.afternoon': 'Good afternoon', 'ui.evening': 'Good evening', 'ui.overall': 'overall',
      'ui.perfect': 'Perfect, all correct!', 'ui.great': 'Well done, great job!', 'ui.doneToast': 'Lesson marked as studied!', 'ui.allDone': 'You studied every lesson for your class: pick one from another year!',
      'ui.guest': 'Guest', 'ui.lessonProgress': 'Lesson progress', 'ui.sections': 'Sections', 'ui.locked': 'To unlock', 'ui.yourYear': 'Your class',
      'ui.minutes': 'min', 'ui.progress': 'Progress',
      'badge.0': 'First step', 'badge.0d': 'Study your first lesson', 'badge.1': 'Reader', 'badge.1d': 'Study 5 lessons', 'badge.2': 'Scholar', 'badge.2d': 'Study 15 lessons',
      'badge.3': 'Champion', 'badge.3d': 'Pass a test', 'badge.4': 'Perfection', 'badge.4d': '100% in a test', 'badge.5': 'Steady', 'badge.5d': '3 study days', 'badge.6': 'Explorer', 'badge.6d': '4 different subjects' },
    fr: { 'ui.menu': 'Menu', 'ui.close': 'Fermer', 'ui.themeDark': 'Thème sombre', 'ui.themeLight': 'Thème clair', 'ui.theme': 'Thème', 'ui.toTop': 'Haut de page',
      'ui.today': 'La suggestion du jour', 'ui.start': 'Commencer', 'ui.continueBtn': 'Continuer', 'ui.streak': "jours d'affilée", 'ui.lessonsDone': 'leçons étudiées',
      'ui.medals': 'médailles', 'ui.morning': 'Bonjour', 'ui.afternoon': 'Bon après-midi', 'ui.evening': 'Bonsoir', 'ui.overall': 'au total',
      'ui.perfect': 'Parfait, tout est juste !', 'ui.great': 'Bravo, beau travail !', 'ui.doneToast': 'Leçon marquée comme étudiée !', 'ui.allDone': "Tu as étudié toutes les leçons de ta classe : choisis-en une d'une autre année !",
      'ui.guest': 'Invité', 'ui.lessonProgress': 'Progression de la leçon', 'ui.sections': 'Sections', 'ui.locked': 'À gagner', 'ui.yourYear': 'Ta classe',
      'ui.minutes': 'min', 'ui.progress': 'Progression',
      'badge.0': 'Premier pas', 'badge.0d': 'Étudie ta première leçon', 'badge.1': 'Lecteur', 'badge.1d': 'Étudie 5 leçons', 'badge.2': 'Savant', 'badge.2d': 'Étudie 15 leçons',
      'badge.3': 'Champion', 'badge.3d': 'Réussis un contrôle', 'badge.4': 'Perfection', 'badge.4d': '100 % à un contrôle', 'badge.5': 'Régularité', 'badge.5d': "3 jours d'étude", 'badge.6': 'Explorateur', 'badge.6d': '4 matières différentes' },
    ru: { 'ui.menu': 'Меню', 'ui.close': 'Закрыть', 'ui.themeDark': 'Тёмная тема', 'ui.themeLight': 'Светлая тема', 'ui.theme': 'Тема', 'ui.toTop': 'Наверх',
      'ui.today': 'Совет дня', 'ui.start': 'Начать', 'ui.continueBtn': 'Продолжить', 'ui.streak': 'дней подряд', 'ui.lessonsDone': 'уроков изучено',
      'ui.medals': 'медалей', 'ui.morning': 'Доброе утро', 'ui.afternoon': 'Добрый день', 'ui.evening': 'Добрый вечер', 'ui.overall': 'всего',
      'ui.perfect': 'Отлично, всё верно!', 'ui.great': 'Молодец, отличная работа!', 'ui.doneToast': 'Урок отмечен как изученный!', 'ui.allDone': 'Ты изучил все уроки своего класса: выбери урок другого года!',
      'ui.guest': 'Гость', 'ui.lessonProgress': 'Прогресс урока', 'ui.sections': 'Разделы', 'ui.locked': 'Ещё не получена', 'ui.yourYear': 'Твой класс',
      'ui.minutes': 'мин', 'ui.progress': 'Прогресс',
      'badge.0': 'Первый шаг', 'badge.0d': 'Изучи первый урок', 'badge.1': 'Читатель', 'badge.1d': 'Изучи 5 уроков', 'badge.2': 'Знаток', 'badge.2d': 'Изучи 15 уроков',
      'badge.3': 'Чемпион', 'badge.3d': 'Сдай проверку', 'badge.4': 'Безупречно', 'badge.4d': '100% в проверке', 'badge.5': 'Упорство', 'badge.5d': '3 дня занятий', 'badge.6': 'Исследователь', 'badge.6d': '4 разных предмета' },
    ro: { 'ui.menu': 'Meniu', 'ui.close': 'Închide', 'ui.themeDark': 'Temă întunecată', 'ui.themeLight': 'Temă luminoasă', 'ui.theme': 'Temă', 'ui.toTop': 'Sus',
      'ui.today': 'Sugestia zilei', 'ui.start': 'Începe', 'ui.continueBtn': 'Continuă', 'ui.streak': 'zile la rând', 'ui.lessonsDone': 'lecții studiate',
      'ui.medals': 'medalii', 'ui.morning': 'Bună dimineața', 'ui.afternoon': 'Bună ziua', 'ui.evening': 'Bună seara', 'ui.overall': 'în total',
      'ui.perfect': 'Perfect, toate corecte!', 'ui.great': 'Bravo, foarte bine!', 'ui.doneToast': 'Lecție marcată ca studiată!', 'ui.allDone': 'Ai studiat toate lecțiile clasei tale: alege una din alt an!',
      'ui.guest': 'Invitat', 'ui.lessonProgress': 'Progresul lecției', 'ui.sections': 'Secțiuni', 'ui.locked': 'De câștigat', 'ui.yourYear': 'Clasa ta',
      'ui.minutes': 'min', 'ui.progress': 'Progres',
      'badge.0': 'Primul pas', 'badge.0d': 'Studiază prima lecție', 'badge.1': 'Cititor', 'badge.1d': 'Studiază 5 lecții', 'badge.2': 'Învățat', 'badge.2d': 'Studiază 15 lecții',
      'badge.3': 'Campion', 'badge.3d': 'Promovează un test', 'badge.4': 'Perfecțiune', 'badge.4d': '100% la un test', 'badge.5': 'Constanță', 'badge.5d': '3 zile de studiu', 'badge.6': 'Explorator', 'badge.6d': '4 materii diferite' },
    de: { 'ui.menu': 'Menü', 'ui.close': 'Schließen', 'ui.themeDark': 'Dunkles Design', 'ui.themeLight': 'Helles Design', 'ui.theme': 'Design', 'ui.toTop': 'Nach oben',
      'ui.today': 'Der Tipp des Tages', 'ui.start': 'Los geht’s', 'ui.continueBtn': 'Weiter', 'ui.streak': 'Tage am Stück', 'ui.lessonsDone': 'Lektionen gelernt',
      'ui.medals': 'Medaillen', 'ui.morning': 'Guten Morgen', 'ui.afternoon': 'Guten Tag', 'ui.evening': 'Guten Abend', 'ui.overall': 'insgesamt',
      'ui.perfect': 'Perfekt, alles richtig!', 'ui.great': 'Super, toll gemacht!', 'ui.doneToast': 'Lektion als gelernt markiert!', 'ui.allDone': 'Du hast alle Lektionen deiner Klasse gelernt: Such dir eine aus einer anderen Klasse aus!',
      'ui.guest': 'Gast', 'ui.lessonProgress': 'Fortschritt der Lektion', 'ui.sections': 'Abschnitte', 'ui.locked': 'Noch zu gewinnen', 'ui.yourYear': 'Deine Klasse',
      'ui.minutes': 'Min.', 'ui.progress': 'Fortschritt',
      'badge.0': 'Erster Schritt', 'badge.0d': 'Lerne deine erste Lektion', 'badge.1': 'Leseratte', 'badge.1d': 'Lerne 5 Lektionen', 'badge.2': 'Lernprofi', 'badge.2d': 'Lerne 15 Lektionen',
      'badge.3': 'Champion', 'badge.3d': 'Bestehe einen Test', 'badge.4': 'Perfektion', 'badge.4d': '100 % in einem Test', 'badge.5': 'Ausdauer', 'badge.5d': '3 Lerntage', 'badge.6': 'Entdecker', 'badge.6d': '4 verschiedene Fächer' }
  };
  for (const l of Object.keys(UI)) { if (!I18N[l]) continue; for (const k of Object.keys(UI[l])) if (!(k in I18N[l])) I18N[l][k] = UI[l][k]; }

  /* ---------- icone SVG dell'interfaccia ---------- */
  const SVG = (p, extra = '') => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"${extra}>${p}</svg>`;
  const ICONS = {
    menu: SVG('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    close: SVG('<path d="M6 6l12 12M18 6L6 18"/>'),
    search: SVG('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
    sun: SVG('<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/>'),
    moon: SVG('<path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7z"/>'),
    up: SVG('<path d="M12 19V5M5.5 11.5L12 5l6.5 6.5"/>'),
    caret: SVG('<path d="M6 9l6 6 6-6"/>'),
    arrow: SVG('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    globe: SVG('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.5 3.9 5.5 3.9 9s-1.3 6.5-3.9 9c-2.6-2.5-3.9-5.5-3.9-9s1.3-6.5 3.9-9z"/>')
  };

  /* ---------- sezioni del sito (navigazione) ---------- */
  const NAV = [
    { r: '', ic: '🏠', k: 'nav.home', c: '#4c7cf3', top: false },
    { r: 'programma', ic: '📚', k: 'nav.program', c: '#ff7a59', top: true },
    { r: 'metodi', ic: '🧮', k: 'nav.methods', c: '#16a34a', top: true },
    { r: 'libreria', ic: '⚙️', k: 'nav.library', c: '#f97316', top: true },
    { r: 'coding', ic: '🤖', k: 'nav.coding', c: '#8b5cf6', top: true },
    { r: 'laboratorio', ic: '🧪', k: 'nav.lab', c: '#db2777', top: true },
    { r: 'luoghi', ic: '🏰', k: 'nav.places', c: '#0ea5e9', top: true },
    { r: 'spazio', ic: '🔭', k: 'nav.space', c: '#4338ca', top: true },
    { r: 'storico', ic: '📈', k: 'nav.history', c: '#ec4899', top: true },
    { r: 'profili', ic: '👥', k: 'nav.profiles', c: '#14b8a6', top: false },
    { r: 'contatti', ic: '✉️', k: 'nav.contacts', c: '#0891b2', top: false }
  ];
  const EXPLORE = [['metodi', '🧮', 'nav.methods', 'explore.methods', '#16a34a'], ['libreria', '⚙️', 'nav.library', 'explore.library', '#f97316'], ['coding', '🤖', 'nav.coding', 'explore.coding', '#8b5cf6'], ['laboratorio', '🧪', 'nav.lab', 'explore.lab', '#db2777'], ['luoghi', '🏰', 'nav.places', 'explore.places', '#0ea5e9'], ['spazio', '🔭', 'nav.space', 'explore.space', '#312e81']];

  /* ---------- indice argomenti ---------- */
  const INDEX = {}; const ORDER = [];
  for (const y of C.years) for (const s of C.subjects) for (const e of (C.program[y][s] || [])) { INDEX[e[0]] = { entry: e, year: y, subj: s }; ORDER.push(e[0]); }
  const title = (id) => (INDEX[id] ? i18n.topicTitle(INDEX[id].entry) : id);
  const subjectsOf = (y) => C.subjects.filter((s) => (C.program[y][s] || []).length);
  const yearIds = (y) => C.subjects.flatMap((s) => (C.program[y][s] || []).map((e) => e[0]));

  /* ---------- caricamento lezioni ---------- */
  const TOPICS = {};
  window.TOPIC = (lang, data) => { TOPICS[lang + ':' + data.id] = data; };
  function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  async function loadTopic(id, lang) {
    const k = lang + ':' + id;
    if (TOPICS[k]) return { data: TOPICS[k], lang };
    try { await loadScript(`data/topics/${lang}/${id}.js`); if (TOPICS[k]) return { data: TOPICS[k], lang }; } catch (e) { /* manca la traduzione */ }
    if (lang !== 'it') { const r = await loadTopic(id, 'it'); return r && { ...r, fallback: true }; }
    return null;
  }

  /* ---------- tema chiaro / scuro ---------- */
  const THEME_KEY = 'zainetto-theme';
  const mqDark = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function storedTheme() { try { const v = localStorage.getItem(THEME_KEY); return v === 'dark' || v === 'light' ? v : null; } catch (e) { return null; } }
  function currentTheme() { return document.documentElement.dataset.theme || (mqDark && mqDark.matches ? 'dark' : 'light'); }
  function applyTheme(th) {
    document.documentElement.dataset.theme = th;
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = th === 'dark' ? '#121829' : '#ffffff';
    document.querySelectorAll('.theme-btn').forEach((b) => {
      b.innerHTML = (th === 'dark' ? ICONS.sun : ICONS.moon) + (b.classList.contains('um-theme') ? `<span>${t(th === 'dark' ? 'ui.themeLight' : 'ui.themeDark')}</span>` : '');
      b.setAttribute('aria-label', t(th === 'dark' ? 'ui.themeLight' : 'ui.themeDark')); b.title = b.getAttribute('aria-label');
      b.setAttribute('aria-pressed', th === 'dark' ? 'true' : 'false');
    });
  }
  function toggleTheme() {
    const th = currentTheme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(THEME_KEY, th); } catch (e) { /* ignora */ }
    document.documentElement.classList.add('theme-anim'); setTimeout(() => document.documentElement.classList.remove('theme-anim'), 450);
    applyTheme(th);
  }

  /* ---------- lingua ---------- */
  function setLang(l) {
    i18n.lang = l; document.documentElement.lang = l; Store.setLang(l);
    const sel = $('#lang'); if (sel) sel.value = l;
    renderChrome(); route();
  }

  /* ---------- intestazione, menu e cassetto ---------- */
  let chromeBuilt = false; let curPage = '';
  function buildChrome() {
    if (chromeBuilt) return; chromeBuilt = true;
    const top = $('header.top'); if (!top) return;
    const logo = $('.logo', top), tag = $('#tagline'), nav = $('#nav'), sf = $('#searchForm'), lang = $('#lang'), who = $('#who');
    const inner = el('div', 'top-in');
    const burger = el('button', 'icon-btn burger', ICONS.menu); burger.type = 'button'; burger.id = 'burger';
    burger.setAttribute('aria-controls', 'drawer'); burger.setAttribute('aria-expanded', 'false');
    logo.innerHTML = '<span class="logo-mark" aria-hidden="true">🎒</span><b>Zainetto</b>';
    nav.setAttribute('aria-label', 'Zainetto');
    const tools = el('div', 'tools');
    const sbtn = el('button', 'icon-btn search-toggle', ICONS.search); sbtn.type = 'button'; sbtn.setAttribute('aria-expanded', 'false'); sbtn.setAttribute('aria-controls', 'searchForm');
    sf.setAttribute('role', 'search');
    sf.insertBefore(el('span', 's-ico', ICONS.search), sf.firstChild);
    const theme = el('button', 'icon-btn theme-btn'); theme.type = 'button';
    const um = el('div', 'umenu');
    const pop = el('div', 'umenu-pop'); pop.id = 'umenu-pop'; pop.hidden = true;
    pop.innerHTML = '<div class="um-head"></div><div class="um-links"></div><label class="um-row um-lang"><span class="um-lbl"></span></label><button type="button" class="um-row theme-btn um-theme"></button>';
    $('.um-lang', pop).appendChild(lang);
    um.append(who, pop);
    tools.append(sbtn, sf, theme, um);
    inner.append(burger, logo, tag, nav, tools);
    top.innerHTML = ''; top.appendChild(inner);

    // cassetto laterale (mobile)
    const bg = el('div', 'drawer-bg'); bg.hidden = true;
    const dr = el('aside', 'drawer'); dr.id = 'drawer'; dr.setAttribute('aria-hidden', 'true'); dr.setAttribute('aria-modal', 'true'); dr.setAttribute('role', 'dialog');
    dr.innerHTML = '<div class="dr-head"><span class="logo"><span class="logo-mark" aria-hidden="true">🎒</span><b>Zainetto</b></span><button type="button" class="icon-btn dr-close"></button></div><nav class="dr-nav"></nav><p class="dr-tag"></p>';
    document.body.append(bg, dr);
    const openDrawer = (on) => {
      dr.classList.toggle('open', on); bg.hidden = !on; dr.setAttribute('aria-hidden', on ? 'false' : 'true');
      burger.setAttribute('aria-expanded', on ? 'true' : 'false'); document.body.classList.toggle('no-scroll', on);
      if (on) { const a = dr.querySelector('.dr-nav a.active') || dr.querySelector('.dr-nav a'); if (a) a.focus(); } else if (dr.contains(document.activeElement)) burger.focus();
    };
    burger.onclick = () => openDrawer(true);
    bg.onclick = () => openDrawer(false);
    $('.dr-close', dr).onclick = () => openDrawer(false);
    dr.addEventListener('click', (e) => { if (e.target.closest('a')) openDrawer(false); });

    // menu del profilo (lingua, tema, profili)
    const openMenu = (on) => {
      pop.hidden = !on; um.classList.toggle('open', on);
      const b = $('.ubtn', who); if (b) b.setAttribute('aria-expanded', on ? 'true' : 'false');
    };
    who.addEventListener('click', (e) => { if (e.target.closest('.ubtn')) { e.preventDefault(); openMenu(pop.hidden); } });
    pop.addEventListener('click', (e) => { if (e.target.closest('a')) openMenu(false); });
    document.addEventListener('click', (e) => {
      if (!um.contains(e.target)) openMenu(false);
      if (!top.contains(e.target) && top.classList.contains('search-open')) { top.classList.remove('search-open'); sbtn.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (!pop.hidden) { openMenu(false); const b = $('.ubtn', who); if (b) b.focus(); }
      if (dr.classList.contains('open')) openDrawer(false);
      if (top.classList.contains('search-open')) { top.classList.remove('search-open'); sbtn.setAttribute('aria-expanded', 'false'); sbtn.focus(); }
    });
    sbtn.onclick = () => { const on = !top.classList.contains('search-open'); top.classList.toggle('search-open', on); sbtn.setAttribute('aria-expanded', on ? 'true' : 'false'); if (on) setTimeout(() => $('#search').focus(), 30); };
    sf.addEventListener('submit', () => { top.classList.remove('search-open'); sbtn.setAttribute('aria-expanded', 'false'); });
    document.querySelectorAll('.theme-btn').forEach((b) => (b.onclick = toggleTheme));

    // pulsante "torna su" con anello di avanzamento + avvisi
    const fab = el('button', 'to-top', `<span class="tt-ring" aria-hidden="true"></span>${ICONS.up}`); fab.type = 'button';
    fab.onclick = () => window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
    document.body.appendChild(fab);
    const th = el('div', 'toast-host'); th.setAttribute('aria-live', 'polite'); th.setAttribute('role', 'status'); document.body.appendChild(th);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    let rz = 0; window.addEventListener('resize', () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(fitNav); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNav);
  }

  const navLink = (n, cls) => `<a href="#/${n.r}" data-r="${n.r}" class="${cls}" style="--nc:${n.c}" title="${esc(t(n.k))}"><span class="ni" aria-hidden="true">${n.ic}</span><span class="nl">${t(n.k)}</span></a>`;
  function renderChrome() {
    buildChrome();
    const p = Store.current();
    $('#tagline').textContent = t('app.tagline');
    $('#nav').innerHTML = NAV.filter((n) => n.top).map((n) => navLink(n, 'nv')).join('');
    const dn = $('.dr-nav'); if (dn) dn.innerHTML = NAV.map((n) => navLink(n, 'dv')).join('');
    const dt = $('.dr-tag'); if (dt) dt.textContent = t('app.tagline');
    const dc = $('.dr-close'); if (dc) { dc.innerHTML = ICONS.close; dc.setAttribute('aria-label', t('ui.close')); }
    const bu = $('#burger'); if (bu) bu.setAttribute('aria-label', t('ui.menu'));
    const st = $('.search-toggle'); if (st) st.setAttribute('aria-label', t('nav.search'));
    $('#who').innerHTML = `<button type="button" class="ubtn" aria-haspopup="true" aria-expanded="false" aria-controls="umenu-pop" title="${esc(t('profile.switch'))}">${p ? `<span class="av" style="background:${p.color}">${p.avatar}</span><span class="un">${esc(p.name)}</span>` : `<span class="av">👤</span><span class="un">${t('ui.guest')}</span>`}<span class="caret">${ICONS.caret}</span></button>`;
    const pop = $('#umenu-pop');
    if (pop) {
      $('.um-head', pop).innerHTML = p ? `<span class="av big" style="background:${p.color}">${p.avatar}</span><div><b>${esc(p.name)}</b><small>${t('year.' + p.year)}</small></div>` : `<span class="av big">👤</span><div><b>${t('ui.guest')}</b></div>`;
      $('.um-links', pop).innerHTML = `<a href="#/profili" class="um-row">👥 <span>${t('profile.switch')}</span></a>${p ? `<a href="#/storico" class="um-row">📈 <span>${t('nav.history')}</span></a>` : ''}<a href="#/contatti" class="um-row">✉️ <span>${t('nav.contacts')}</span></a>`;
      $('.um-lbl', pop).innerHTML = `${ICONS.globe}<span>${t('profile.lang')}</span>`;
    }
    $('#lang').innerHTML = LANGS.map((l) => `<option value="${l.id}" ${l.id === i18n.lang ? 'selected' : ''}>${l.flag} ${l.name}</option>`).join('');
    $('#search').placeholder = t('search.placeholder');
    $('#footer').innerHTML = `<div class="foot-in"><span class="foot-logo"><span class="logo-mark" aria-hidden="true">🎒</span><b>Zainetto</b></span><p class="foot-tag">${t('app.tagline')}</p><p>${t('footer.text')}</p><small>${t('ref.note')}</small></div>`;
    const fab = $('.to-top'); if (fab) { fab.setAttribute('aria-label', t('ui.toTop')); fab.title = t('ui.toTop'); }
    applyTheme(currentTheme());
    setActive(curPage);
    fitNav();
  }
  /* se le etichette non ci stanno (lingue con parole lunghe), passa a sole icone e poi al menu a cassetto */
  function fitNav() {
    const top = $('header.top'), nav = $('#nav'); if (!top || !nav) return;
    top.classList.remove('nav-compact', 'nav-burger');
    const over = () => { if (!nav.offsetParent) return false; let w = 0; for (const a of nav.children) w += a.offsetWidth + 2; return w > nav.clientWidth + 1; };
    if (over()) { top.classList.add('nav-compact'); if (over()) top.classList.add('nav-burger'); }
  }
  function setActive(page) {
    const key = page === 't' || page === 'anno' ? 'programma' : page || '';
    document.querySelectorAll('#nav a, .dr-nav a').forEach((x) => {
      const on = x.dataset.r === key; x.classList.toggle('active', on);
      if (on) x.setAttribute('aria-current', 'page'); else x.removeAttribute('aria-current');
    });
  }

  /* ---------- avvisi, festeggiamenti ---------- */
  function toast(msg, kind) {
    const host = $('.toast-host'); if (!host) return;
    const n = el('div', 'toast' + (kind ? ' ' + kind : ''), msg); host.appendChild(n);
    setTimeout(() => n.classList.add('out'), 2600); setTimeout(() => n.remove(), 3100);
  }
  function celebrate(ok, n) {
    if (!n) return;
    if (ok === n) { if (window.confettiBurst && !reduceMotion()) window.confettiBurst(); toast('🌟 ' + t('ui.perfect'), 'good'); }
    else if (ok / n >= 0.7) toast('👏 ' + t('ui.great'), 'good');
  }

  /* ---------- scorrimento: torna su, avanzamento lezione, sezione attiva ---------- */
  let spy = null; let ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = window.scrollY; const fab = $('.to-top');
      if (fab) fab.classList.toggle('show', y > 520);
      if (!spy || !spy.toc.isConnected) { if (fab) fab.style.setProperty('--p', 0); document.body.classList.remove('in-lesson'); return; }
      document.body.classList.add('in-lesson');
      const m = main(); const r = m.getBoundingClientRect();
      const span = Math.max(1, m.offsetHeight - window.innerHeight + 40);
      const p = Math.max(0, Math.min(1, -r.top / span));
      spy.bar.style.transform = `scaleX(${p})`;
      spy.toc.setAttribute('aria-valuenow', Math.round(p * 100));
      if (spy.pct) spy.pct.textContent = Math.round(p * 100) + '%';
      if (fab) fab.style.setProperty('--p', p.toFixed(3));
      const lim = spy.toc.getBoundingClientRect().bottom + 24;
      let cur = null; for (const it of spy.items) { if (it.sec.getBoundingClientRect().top <= lim) cur = it; else break; }
      if (cur !== spy.cur) {
        spy.items.forEach((it) => it.chip.classList.toggle('active', it === cur));
        spy.cur = cur;
        if (cur) { const row = spy.row; const x = cur.chip.offsetLeft - row.clientWidth / 2 + cur.chip.offsetWidth / 2; row.scrollTo({ left: Math.max(0, x), behavior: reduceMotion() ? 'auto' : 'smooth' }); }
      }
    });
  }

  /* ---------- routing ---------- */
  const main = () => $('#main');
  function animateIn() {
    const m = main(); m.classList.remove('pg-enter'); void m.offsetWidth; m.classList.add('pg-enter');
  }
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [page, a, b] = h.split('/').map(decodeURIComponent);
    window.scrollTo({ top: 0, behavior: 'instant' });
    curPage = page || ''; setActive(curPage); spy = null;
    const m = main();
    m.style.removeProperty('--c'); m.removeAttribute('aria-busy');
    const fab = $('.to-top'); if (fab) fab.style.removeProperty('--c');
    document.body.dataset.page = curPage || 'home';
    const isZ = !!(window.ZPages && ZPages[page]) && (Store.current() || page === 'profili');
    m.classList.toggle('zpage', isZ && page !== 'metodi');
    animateIn(); setTimeout(onScroll, 50);
    if (!Store.current() && page !== 'profili') return pageProfiles(true);
    if (window.ZPages && ZPages[page]) { m.innerHTML = ''; m.style.removeProperty('--c'); return ZPages[page](m, a, b); }
    switch (page) {
      case '': case undefined: return pageHome();
      case 'programma': return pageProgram(a);
      case 'anno': return pageYear(a, b);
      case 't': return pageTopic(a, b);
      case 'storico': return pageHistory();
      case 'profili': return pageProfiles(!Store.current());
      case 'cerca': return pageSearch(a || '');
      default: return pageHome();
    }
  }

  /* ---------- piccoli componenti ---------- */
  const STATUS_ICON = { todo: '⚪', seen: '👀', done: '✅', passed: '🏆' };
  function topicCard(id, showYear) {
    const { entry, year, subj } = INDEX[id];
    const st = Store.status(id); const full = FULL.has(id); const gen = C.gen[id];
    const a = el('a', 'tcard' + (full ? ' full' : '') + ' st-' + st, `<span class="tic" aria-hidden="true">${SUBJ_ICON[subj]}<span class="ts" title="${t('status.' + st)}">${STATUS_ICON[st]}</span></span>
      <span class="tt"><b>${esc(i18n.topicTitle(entry))}</b><small>${esc(i18n.topicDesc(entry))}</small>
      <span class="tags">${showYear ? `<em style="--tc:${YEAR_COLOR[year]}">${t('year.' + year)}</em>` : ''}${full ? `<em class="tg-full">⭐ ${t('topic.full')}</em>` : ''}${gen ? `<em class="tg-gen">🔁 ${t('topic.practice')}</em>` : ''}</span></span><span class="tgo" aria-hidden="true">›</span>`);
    a.href = '#/t/' + id; a.style.setProperty('--c', SUBJ_COLOR[subj]);
    a.setAttribute('aria-label', `${i18n.topicTitle(entry)} – ${t('status.' + st)}`);
    return a;
  }
  function progressOf(ids) {
    const n = ids.length; let done = 0, seen = 0;
    ids.forEach((id) => { const s = Store.status(id); if (s === 'done' || s === 'passed') done++; else if (s === 'seen') seen++; });
    return { n, done, seen, pct: n ? Math.round((done / n) * 100) : 0 };
  }
  const bar = (pct, color) => `<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%;background:${color || 'var(--accent)'}"></i></div>`;
  /* anello di avanzamento (SVG) */
  function ring(pct, color, size = 64, inner = '', stroke) {
    const sw = stroke || Math.max(5, Math.round(size / 9)); const r = (size - sw) / 2; const c = 2 * Math.PI * r; const off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
    return `<span class="ring" style="--rc:${color};width:${size}px;height:${size}px" role="img" aria-label="${pct}%"><svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true"><circle class="ring-bg" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${sw}"/>${pct > 0 ? `<circle class="ring-fg" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${sw}" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${off.toFixed(2)}" style="--c0:${c.toFixed(2)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>` : ''}</svg><span class="ring-in">${inner}</span></span>`;
  }
  /* intestazione colorata delle pagine */
  function pageHead(icon, h1, sub, color, extra = '') {
    const s = el('header', 'page-head', `<span class="ph-icon" aria-hidden="true">${icon}</span><div class="ph-txt"><h1>${h1}</h1>${sub ? `<p>${sub}</p>` : ''}</div>${extra}`);
    if (color) s.style.setProperty('--c', color);
    return s;
  }
  function streakOf(days) {
    const set = new Set(days || []); let n = 0; const d = new Date();
    const iso = (x) => x.toISOString().slice(0, 10);
    if (!set.has(iso(d))) d.setUTCDate(d.getUTCDate() - 1);
    while (set.has(iso(d))) { n++; d.setUTCDate(d.getUTCDate() - 1); }
    return n;
  }
  function medals(p) {
    const ts = Object.entries(p.topics).filter(([id]) => INDEX[id]);
    const studied = ts.filter(([, x]) => x.done).length, passed = ts.filter(([, x]) => x.passedAt).length;
    const bests = ts.map(([, x]) => x.best).filter((x) => x != null);
    return [['🌱', studied >= 1], ['📚', studied >= 5], ['🎓', studied >= 15], ['🏆', passed >= 1], ['🥇', bests.some((x) => x === 100)], ['🔥', p.days.length >= 3], ['🌍', new Set(ts.map(([id]) => INDEX[id].subj)).size >= 4]];
  }
  function greeting() { const h = new Date().getHours(); return t(h < 12 ? 'ui.morning' : h < 18 ? 'ui.afternoon' : 'ui.evening'); }
  function suggestion(y) {
    const full = C.full.filter((id) => INDEX[id].year === y);
    const pick = full.find((id) => Store.status(id) === 'seen') || full.find((id) => Store.status(id) === 'todo') || full.find((id) => Store.status(id) === 'done');
    if (pick) return { id: pick, other: false };
    const o = C.full.find((id) => Store.status(id) === 'todo');
    return o ? { id: o, other: true } : null;
  }

  const HERO_ART = `<svg class="hero-svg" viewBox="0 0 320 230" aria-hidden="true" focusable="false">
    <defs><linearGradient id="hgBag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a76"/><stop offset="1" stop-color="#f4511e"/></linearGradient>
    <linearGradient id="hgPl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#ff9f1c"/></linearGradient></defs>
    <circle cx="176" cy="122" r="100" fill="#fff" opacity=".12"/><circle cx="176" cy="122" r="72" fill="#fff" opacity=".12"/>
    <g class="fl-a"><circle cx="268" cy="50" r="21" fill="url(#hgPl)"/><circle cx="261" cy="44" r="4" fill="#fff" opacity=".45"/><ellipse cx="268" cy="52" rx="36" ry="8" fill="none" stroke="#fff" stroke-width="4" opacity=".9" transform="rotate(-16 268 52)"/></g>
    <g transform="translate(26 158)"><rect x="4" y="42" width="100" height="22" rx="5" fill="#4c7cf3"/><rect x="12" y="49" width="84" height="4" rx="2" fill="#fff" opacity=".55"/>
      <rect x="14" y="21" width="86" height="21" rx="5" fill="#2fb67c"/><rect x="20" y="28" width="74" height="4" rx="2" fill="#fff" opacity=".55"/>
      <rect x="0" y="0" width="92" height="21" rx="5" fill="#e85d75"/><rect x="8" y="7" width="76" height="4" rx="2" fill="#fff" opacity=".55"/></g>
    <g class="fl-b"><g transform="translate(130 64)">
      <path d="M34 30 Q34 4 60 4 Q86 4 86 30" fill="none" stroke="#c2410c" stroke-width="9" stroke-linecap="round"/>
      <rect x="8" y="22" width="104" height="126" rx="32" fill="url(#hgBag)"/>
      <path d="M8 76 Q60 98 112 76 V54 Q112 24 82 24 H38 Q8 24 8 54 Z" fill="#e8501f"/>
      <rect x="53" y="68" width="14" height="20" rx="5" fill="#ffd166"/>
      <rect x="28" y="100" width="64" height="38" rx="14" fill="#ffb59a"/>
      <circle cx="47" cy="114" r="4.5" fill="#3b1d12"/><circle cx="73" cy="114" r="4.5" fill="#3b1d12"/><circle cx="48.5" cy="112.5" r="1.4" fill="#fff"/><circle cx="74.5" cy="112.5" r="1.4" fill="#fff"/>
      <path d="M52 124 Q60 131 68 124" fill="none" stroke="#3b1d12" stroke-width="3" stroke-linecap="round"/>
      <circle cx="38" cy="124" r="4" fill="#ff7f6e" opacity=".7"/><circle cx="82" cy="124" r="4" fill="#ff7f6e" opacity=".7"/></g></g>
    <g transform="translate(262 112) rotate(28)"><rect x="0" y="0" width="16" height="72" rx="3" fill="#ffd166"/><rect x="5" y="0" width="6" height="72" fill="#f6b93b"/><rect x="0" y="0" width="16" height="11" rx="3" fill="#f472b6"/><rect x="0" y="10" width="16" height="4" fill="#cbd5e1"/><path d="M0 72 L8 90 L16 72 Z" fill="#fde2c4"/><path d="M5 83 L8 90 L11 83 Z" fill="#334155"/></g>
    <text x="38" y="62" class="hs-t" font-size="26" font-weight="900" fill="#fff" opacity=".85">2+3</text>
    <text x="250" y="210" class="hs-t" font-size="22" font-weight="900" fill="#fff" opacity=".8">abc</text>
    <path class="tw tw1" d="M112 26 l3.5 8.5 8.5 3.5 -8.5 3.5 -3.5 8.5 -3.5 -8.5 -8.5 -3.5 8.5 -3.5z" fill="#fff"/>
    <path class="tw tw2" d="M226 98 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill="#ffe08a"/>
    <path class="tw tw3" d="M20 112 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill="#fff"/>
    <circle class="tw tw2" cx="300" cy="140" r="3" fill="#fff"/><circle class="tw tw1" cx="200" cy="18" r="2.5" fill="#fff"/></svg>`;

  /* ---------- HOME ---------- */
  function pageHome() {
    const p = Store.current(); const y = p.year || 'p1';
    const m = main(); m.innerHTML = '';
    const ts = Object.entries(p.topics).filter(([id]) => INDEX[id]);
    const studied = ts.filter(([, x]) => x.done).length; const streak = streakOf(p.days); const med = medals(p).filter(([, on]) => on).length;
    const head = el('section', 'hero home-hero', `<div class="hero-txt">
        <div class="hero-who"><span class="av xl" style="background:${p.color}">${p.avatar}</span><div><p class="eyebrow">${greeting()}</p><h1>${t('dash.hello', { name: esc(p.name) })} <span class="wave" aria-hidden="true">👋</span></h1><p class="hero-sub">${t('app.tagline')}</p></div></div>
        <div class="hero-stats"><span class="hs"><b>🔥 ${streak}</b><small>${t('ui.streak')}</small></span><span class="hs"><b>✅ ${studied}</b><small>${t('ui.lessonsDone')}</small></span><a class="hs" href="#/storico"><b>🏅 ${med}</b><small>${t('ui.medals')}</small></a></div>
      </div><div class="hero-art">${HERO_ART}</div>`);
    head.style.setProperty('--c', YEAR_COLOR[y]);
    const chips = el('div', 'year-chips', `<span class="yc-lbl">${t('dash.chooseYear')}:</span>`);
    C.years.forEach((yy) => { const c = el('a', 'ychip' + (yy === y ? ' active' : ''), t('year.' + yy)); c.href = '#/anno/' + yy; c.style.setProperty('--c', YEAR_COLOR[yy]); if (yy === y) c.setAttribute('aria-current', 'true'); chips.appendChild(c); });
    head.appendChild(chips);
    m.appendChild(head);

    // oggi: consiglio + riprendi
    const today = el('div', 'today-row');
    const sug = suggestion(y);
    const last = p.log.find((e) => INDEX[e.topic]);
    if (sug) {
      const info = INDEX[sug.id]; const sc = SUBJ_COLOR[info.subj];
      const s = el('a', 'card today-card', `<span class="tc-kicker">✨ ${t('ui.today')}</span><div class="tc-main"><span class="tc-icon" aria-hidden="true">${SUBJ_ICON[info.subj]}</span><div><b class="tc-title">${esc(title(sug.id))}</b><small>${esc(i18n.topicDesc(info.entry))}</small><span class="tc-meta"><em>${t('subj.' + info.subj)}</em><em>${t('year.' + info.year)}</em></span></div></div><span class="btn tc-go">${Store.status(sug.id) === 'seen' ? t('ui.continueBtn') : t('ui.start')} ${ICONS.arrow}</span>${sug.other ? `<p class="muted small">${t('ui.allDone')}</p>` : ''}`);
      s.href = '#/t/' + sug.id; s.style.setProperty('--c', sc); today.appendChild(s);
    }
    if (last && (!sug || last.topic !== sug.id)) {
      const s = el('section', 'card continue', `<h3>▶️ ${t('dash.continue')}</h3>`); s.appendChild(topicCard(last.topic, true)); today.appendChild(s);
    }
    if (today.children.length) m.appendChild(today);

    // avanzamento della classe con anelli per materia
    const ids = yearIds(y); const prY = progressOf(ids);
    const sec = el('section', 'card prog-card', `<div class="sec-head">${ring(prY.pct, YEAR_COLOR[y], 74, `<b>${prY.pct}%</b>`)}<div><h2>${t('dash.progress', { year: t('year.' + y) })}</h2><p class="muted">${prY.done}/${prY.n} ${t('ui.overall')}</p></div></div>`);
    const g = el('div', 'subj-grid');
    subjectsOf(y).forEach((s) => {
      const sids = C.program[y][s].map((e) => e[0]); const pr = progressOf(sids);
      const a = el('a', 'subj', `${ring(pr.pct, SUBJ_COLOR[s], 72, `<span class="si">${SUBJ_ICON[s]}</span>`)}<b>${t('subj.' + s)}</b><small>${pr.done}/${pr.n} · ${pr.pct}%</small>`);
      a.href = `#/anno/${y}/${s}`; a.style.setProperty('--c', SUBJ_COLOR[s]); g.appendChild(a);
    });
    sec.appendChild(g); m.appendChild(sec);

    // sezioni libere, indipendenti dalla classe
    const ex = el('section', 'explore', `<div class="sec-title"><h2>🧭 ${t('explore.title')}</h2><p class="muted">${t('explore.sub')}</p></div>`);
    const eg = el('div', 'explore-grid');
    EXPLORE.forEach(([r, ic, k1, k2, c], i) => {
      const a = el('a', 'explore-tile', `<span class="et-ic" aria-hidden="true">${ic}</span><b>${t(k1)}</b><small>${t(k2)}</small><span class="et-go" aria-hidden="true">${ICONS.arrow}</span>`); a.href = '#/' + r; a.style.setProperty('--c', c); a.style.setProperty('--i', i); eg.appendChild(a);
    });
    ex.appendChild(eg); m.appendChild(ex);

    // lezioni complete della classe e degli altri anni
    const fullHere = C.full.filter((id) => INDEX[id].year === y);
    const fullOther = C.full.filter((id) => INDEX[id].year !== y);
    const fs = el('section', 'card', `<h2>⭐ ${t('dash.suggest')} <small class="muted">${fullHere.length}</small></h2>`); const fl = el('div', 'tlist');
    fullHere.forEach((id) => fl.appendChild(topicCard(id))); fs.appendChild(fl);
    if (fullOther.length) {
      const d = el('details', 'more', `<summary><span>🗺️ ${t('dash.otherYears')}</span> <small class="muted">${fullOther.length}</small></summary>`);
      d.addEventListener('toggle', () => {
        if (!d.open || d.dataset.ready) return; d.dataset.ready = '1';
        C.years.filter((yy) => yy !== y).forEach((yy) => {
          const list = fullOther.filter((id) => INDEX[id].year === yy); if (!list.length) return;
          const h = el('h3', 'yr-h', t('year.' + yy)); h.style.setProperty('--c', YEAR_COLOR[yy]); d.appendChild(h);
          const fo = el('div', 'tlist'); list.forEach((id) => fo.appendChild(topicCard(id, true))); d.appendChild(fo);
        });
      });
      fs.appendChild(d);
    }
    m.appendChild(fs);
    // attività recenti
    const rec = el('section', 'card', `<h2>🕘 ${t('dash.recent')}</h2>`);
    rec.appendChild(logList(p.log.slice(0, 6)) || el('p', 'muted empty', t('dash.none')));
    m.appendChild(rec);
  }

  const EV_ICON = { visit: '👀', done: '✅', quiz: '✏️', verifica: '🏁', practice: '🔁' };
  function logList(log) {
    if (!log.length) return null;
    const ul = el('ul', 'log');
    log.forEach((e) => {
      if (!INDEX[e.topic] && !(Z.titles[e.topic])) return;
      const d = new Date(e.at);
      const sc = e.score != null ? ` <span class="score ${e.passed === false ? 'bad' : e.score >= 70 ? 'good' : ''}">${e.score}%</span>` : '';
      const li = el('li', '', `<span class="lg-dot" aria-hidden="true">${EV_ICON[e.type] || '•'}</span><span class="lg-body"><time>${d.toLocaleDateString(i18n.lang)} ${d.toLocaleTimeString(i18n.lang, { hour: '2-digit', minute: '2-digit' })}</time> <span class="ev ev-${e.type}">${t('ev.' + e.type)}</span> <a href="${INDEX[e.topic] ? '#/t/' + e.topic : Z.titles[e.topic].href}">${esc(INDEX[e.topic] ? title(e.topic) : Z.titles[e.topic].title())}</a>${sc}</span>`);
      if (INDEX[e.topic]) li.style.setProperty('--c', SUBJ_COLOR[INDEX[e.topic].subj]);
      ul.appendChild(li);
    });
    return ul;
  }

  /* ---------- PROGRAMMA ---------- */
  function pageProgram() {
    const m = main(); m.innerHTML = '';
    m.appendChild(pageHead('📚', t('nav.program'), t('ref.note'), '#ff7a59'));
    const py = (Store.current() || {}).year;
    ['p', 'm'].forEach((school) => {
      m.appendChild(el('h2', 'school-h', `${school === 'p' ? '🏫' : '🎓'} ${t('school.' + school)}`));
      const g = el('div', 'year-grid');
      C.years.filter((y) => y[0] === school).forEach((y) => {
        const ids = yearIds(y); const pr = progressOf(ids);
        const nf = ids.filter((id) => FULL.has(id)).length;
        const a = el('a', 'ycard' + (y === py ? ' mine' : ''), `<span class="yc-num" aria-hidden="true">${y.slice(1)}</span><div class="yc-txt"><b>${t('year.' + y)}</b><small>${t('topic.count', { n: ids.length })} · ⭐ ${nf}</small>${y === py ? `<em class="yc-mine">${t('ui.yourYear')}</em>` : ''}</div>${ring(pr.pct, YEAR_COLOR[y], 54, `<small>${pr.pct}%</small>`)}<span class="subj-icons" aria-hidden="true">${subjectsOf(y).map((s) => `<i style="--c:${SUBJ_COLOR[s]}">${SUBJ_ICON[s]}</i>`).join('')}</span>`);
        a.href = '#/anno/' + y; a.style.setProperty('--c', YEAR_COLOR[y]); g.appendChild(a);
      });
      m.appendChild(g);
    });
  }

  function pageYear(y, subj) {
    if (!C.program[y]) return pageProgram();
    const m = main(); m.innerHTML = '';
    const pr = progressOf(yearIds(y));
    const head = pageHead(`<span class="yc-num">${y.slice(1)}</span>`, t('year.' + y), `${t('topic.count', { n: pr.n })} · ✅ ${pr.done}`, YEAR_COLOR[y], ring(pr.pct, '#fff', 64, `<b>${pr.pct}%</b>`));
    head.insertBefore(el('div', 'crumbs', `<a href="#/programma">${t('nav.program')}</a> › <b>${t('year.' + y)}</b>`), head.firstChild);
    m.appendChild(head);
    const tabs = el('nav', 'tabs'); tabs.setAttribute('aria-label', t('nav.program'));
    const subs = subjectsOf(y);
    const cur = subj && subs.includes(subj) ? subj : null;
    const all = el('a', 'tab' + (cur ? '' : ' active'), '✨ ' + t('topic.filterAll')); all.href = '#/anno/' + y; tabs.appendChild(all);
    subs.forEach((s) => { const a = el('a', 'tab' + (s === cur ? ' active' : ''), `${SUBJ_ICON[s]} ${t('subj.' + s)}`); a.href = `#/anno/${y}/${s}`; a.style.setProperty('--c', SUBJ_COLOR[s]); tabs.appendChild(a); });
    tabs.querySelectorAll('.tab.active').forEach((a) => a.setAttribute('aria-current', 'page'));
    m.appendChild(tabs);
    (cur ? [cur] : subs).forEach((s) => {
      const ids = C.program[y][s].map((e) => e[0]); const sp = progressOf(ids);
      const sec = el('section', 'card subj-sec', `<div class="sec-head">${ring(sp.pct, SUBJ_COLOR[s], 56, `<span>${SUBJ_ICON[s]}</span>`)}<h2>${t('subj.' + s)} <small>${sp.done}/${sp.n}</small></h2></div>`);
      sec.style.setProperty('--c', SUBJ_COLOR[s]);
      const l = el('div', 'tlist'); ids.forEach((id) => l.appendChild(topicCard(id))); sec.appendChild(l); m.appendChild(sec);
    });
  }

  /* ---------- RICERCA ---------- */
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim(); }
  function pageSearch(q) {
    const m = main(); m.innerHTML = '';
    const nq = norm(q); const l = el('div', 'tlist');
    const res = ORDER.filter((id) => { const e = INDEX[id].entry; return norm(i18n.topicTitle(e) + ' ' + i18n.topicDesc(e) + ' ' + e[1] + ' ' + t('subj.' + INDEX[id].subj)).includes(nq); });
    m.appendChild(pageHead('🔎', t('search.results', { q: esc(q) }), res.length ? String(res.length) : '', '#0ea5e9'));
    res.forEach((id) => l.appendChild(topicCard(id, true)));
    m.appendChild(res.length ? l : el('div', 'empty-state', `<span aria-hidden="true">🧐</span><p>${t('search.none')}</p>`));
  }

  /* ---------- PAGINA ARGOMENTO ---------- */
  const skeleton = () => `<div class="skel-wrap" aria-hidden="true"><div class="skel skel-band"></div><div class="skel skel-line w60"></div><div class="skel skel-line w90"></div><div class="skel skel-line w75"></div><div class="skel-row"><div class="skel skel-chip"></div><div class="skel skel-chip"></div><div class="skel skel-chip"></div></div><div class="skel skel-card"></div><div class="skel skel-card"></div></div><p class="sr-only">${t('topic.loading')}</p>`;
  async function pageTopic(id, jump) {
    const info = INDEX[id]; if (!info) return pageHome();
    const m = main(); m.innerHTML = skeleton(); m.setAttribute('aria-busy', 'true');
    m.style.setProperty('--c', SUBJ_COLOR[info.subj]);
    Store.visit(id);
    const { entry, year, subj } = info;
    const res = FULL.has(id) ? await loadTopic(id, i18n.lang) : null;
    if (!location.hash.startsWith('#/t/' + id)) return;
    m.innerHTML = ''; m.removeAttribute('aria-busy'); animateIn();
    m.style.setProperty('--c', SUBJ_COLOR[subj]);
    const fab = $('.to-top'); if (fab) fab.style.setProperty('--c', SUBJ_COLOR[subj]);
    const data = res && res.data;
    const head = el('header', 'topic-head', `<div class="th-band"><div class="crumbs"><a href="#/programma">${t('nav.program')}</a> › <a href="#/anno/${year}">${t('year.' + year)}</a> › <a href="#/anno/${year}/${subj}">${SUBJ_ICON[subj]} ${t('subj.' + subj)}</a></div>
      <div class="th-row"><span class="th-icon" aria-hidden="true">${SUBJ_ICON[subj]}</span><div class="th-titles"><span class="th-kicker">${t('subj.' + subj)} · ${t('year.' + year)}</span><h1>${esc(data ? data.title : i18n.topicTitle(entry))}</h1></div></div>
      <svg class="th-deco" viewBox="0 0 200 120" aria-hidden="true"><circle cx="160" cy="20" r="54" fill="#fff" opacity=".12"/><circle cx="60" cy="130" r="40" fill="#fff" opacity=".1"/><path d="M118 70 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5z" fill="#fff" opacity=".5"/></svg></div>
      <div class="th-body"><p class="lead">${data ? data.intro : esc(i18n.topicDesc(entry))}</p></div>`);
    const meta = el('div', 'meta');
    const st = Store.status(id); const tp = Store.topic(id);
    meta.innerHTML = `<span class="pill st-${st}">${STATUS_ICON[st]} ${t('status.' + st)}</span>` + (data && data.minutes ? `<span class="pill">⏱ ${t('topic.minutes', { n: data.minutes })}</span>` : '') + (data ? `<span class="pill">📑 ${data.sections.length} ${t('ui.sections').toLowerCase()}</span>` : '') + (tp.best != null ? `<span class="pill pill-best">${t('quiz.best', { p: tp.best })}</span>` : '');
    $('.th-body', head).appendChild(meta); m.appendChild(head);
    if (res && res.fallback) m.appendChild(el('div', 'callout c-remember', '🌐 ' + t('topic.fallback', { lang: LANGS.find((l) => l.id === i18n.lang).name })));

    if (data) {
      // indice con avanzamento della lezione
      const toc = el('nav', 'toc'); toc.setAttribute('aria-label', t('topic.contents'));
      toc.innerHTML = `<div class="toc-row"><b class="toc-lbl">${t('topic.contents')}</b></div><div class="toc-prog" role="progressbar" aria-label="${t('ui.lessonProgress')}" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="toc-pct" aria-hidden="true">0%</span>`;
      m.appendChild(toc);
      const row = $('.toc-row', toc); const items = [];
      const altIdx = data.sections.findIndex((s) => s.type === 'alternatives');
      if (altIdx >= 0) {
        const ab = el('button', 'btn btn-small alt-jump', '🌍 ' + t('alt.jump')); ab.type = 'button';
        ab.onclick = () => { const sec = document.getElementById('sec-' + altIdx); if (sec) sec.scrollIntoView({ behavior: 'smooth' }); };
        $('.th-body', head).appendChild(ab);
      }
      data.sections.forEach((s, i) => {
        const sec = renderSection(s, id, i);
        sec.id = 'sec-' + i; m.appendChild(sec);
        const label = s.title || (s.type === 'quiz' ? '✏️ Quiz' : s.type === 'curiosity' ? '💡' : s.type === 'example' ? '🧩' : null);
        if (label) { const a = el('a', 'chip', esc(label)); a.href = '#sec-' + i; a.onclick = (e) => { e.preventDefault(); sec.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }); }; row.appendChild(a); items.push({ sec, chip: a }); }
      });
      if (data.glossary && data.glossary.length) {
        const g = el('section', 'card glossary', `<h2>📒 ${t('topic.glossary')}</h2><dl>${data.glossary.map((x) => `<div class="gl-item"><dt>${x.t}</dt><dd>${x.d}</dd></div>`).join('')}</dl>`);
        g.id = 'sec-gloss'; m.appendChild(g);
        const a = el('a', 'chip', '📒 ' + t('topic.glossary')); a.href = '#sec-gloss'; a.onclick = (e) => { e.preventDefault(); g.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }); }; row.appendChild(a); items.push({ sec: g, chip: a });
      }
      if (data.verifica) {
        const v = renderVerifica(id, data.verifica); v.id = 'sec-verifica'; m.appendChild(v);
        const a = el('a', 'chip chip-v', '🏁 ' + t('topic.verifica')); a.href = '#sec-verifica'; a.onclick = (e) => { e.preventDefault(); const x = document.getElementById('sec-verifica'); if (x) x.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }); }; row.appendChild(a); items.push({ get sec() { return document.getElementById('sec-verifica') || v; }, chip: a });
      }
      spy = { toc, row, items, bar: $('.toc-prog i', toc), pct: $('.toc-pct', toc), cur: null };
      // salto diretto a una scheda delle alternative: #/t/<id>/alt<k>
      if (jump && /^alt\d+$/.test(jump) && altIdx >= 0) {
        const sec = document.getElementById('sec-' + altIdx);
        setTimeout(() => { sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); const b = sec.querySelectorAll('.alt-tab')[+jump.slice(3)]; if (b) b.click(); }, 150);
      }
    } else {
      m.appendChild(el('div', 'callout c-remember soon', `<span class="soon-ic" aria-hidden="true">🛠️</span><div>${C.gen[id] ? t('topic.soonText') : t('topic.soonNoGen')}</div>`));
    }
    if (C.gen[id]) m.appendChild(renderPractice(id, C.gen[id]));
    // segna come studiato + navigazione
    const foot = el('div', 'topic-foot');
    const done = el('button', 'btn btn-done ' + (Store.topic(id).done ? 'btn-ok' : ''), Store.topic(id).done ? t('topic.done') : '✔ ' + t('topic.markDone'));
    done.setAttribute('aria-pressed', Store.topic(id).done ? 'true' : 'false');
    done.onclick = () => {
      const v = !Store.topic(id).done; Store.markDone(id, v); done.className = 'btn btn-done ' + (v ? 'btn-ok' : ''); done.textContent = v ? t('topic.done') : '✔ ' + t('topic.markDone');
      done.setAttribute('aria-pressed', v ? 'true' : 'false');
      if (v) { done.classList.add('pop'); toast('🎉 ' + t('ui.doneToast'), 'good'); if (window.confettiBurst && !reduceMotion()) window.confettiBurst(); }
    };
    foot.appendChild(done);
    const sameSubj = C.program[year][subj].map((e) => e[0]); const k = sameSubj.indexOf(id);
    const nav = el('div', 'prevnext');
    if (k > 0) nav.appendChild(Object.assign(el('a', 'btn btn-ghost pn-prev', '<span aria-hidden="true">←</span> <span>' + esc(title(sameSubj[k - 1])) + '</span>'), { href: '#/t/' + sameSubj[k - 1] }));
    if (k < sameSubj.length - 1) nav.appendChild(Object.assign(el('a', 'btn btn-ghost pn-next', '<span>' + esc(title(sameSubj[k + 1])) + '</span> <span aria-hidden="true">→</span>'), { href: '#/t/' + sameSubj[k + 1] }));
    foot.appendChild(nav); m.appendChild(foot);
    onScroll();
  }

  function mountVisual(host, s) {
    if (s.svg) { const f = el('div', 'svg-fig', s.svg); host.appendChild(f); }
    if (s.widget) { const w = el('div', 'widget'); host.appendChild(w); Widgets.mount(w, s.widget, s.options); }
    if (s.scene) { const w = el('div', 'scene3d'); host.appendChild(w); Mini3D.mount(w, s.scene, s.options); }
  }

  const CALLOUT = { example: ['🧩', 'c-example'], curiosity: ['💡', 'c-curiosity'], remember: ['📌', 'c-remember'] };
  function renderSection(s, topicId, idx) {
    const box = el('section', 'card sec sec-' + s.type);
    const h = (icon) => (s.title ? `<h2>${icon ? `<span class="h-ic" aria-hidden="true">${icon}</span> ` : ''}${s.title}</h2>` : '');
    switch (s.type) {
      case 'text': box.innerHTML = h() + s.html; break;
      case 'example': case 'curiosity': case 'remember': {
        const [ic, cls] = CALLOUT[s.type]; box.className += ' ' + cls + ' callout-card';
        box.innerHTML = `<span class="co-badge" aria-hidden="true">${ic}</span>` + h(s.title ? '' : null) + s.html; break;
      }
      case 'svg': box.innerHTML = h('🖼️') + `<div class="svg-fig">${s.svg}</div>` + (s.caption ? `<p class="caption">${s.caption}</p>` : ''); break;
      case '3d': { box.innerHTML = h('🧊'); const w = el('div', 'scene3d'); box.appendChild(w); lazy(w, () => Mini3D.mount(w, s.scene, s.options)); if (s.caption) box.appendChild(el('p', 'caption', s.caption)); break; }
      case 'widget': { box.innerHTML = h('🎮'); const w = el('div', 'widget'); box.appendChild(w); lazy(w, () => Widgets.mount(w, s.widget, s.options)); if (s.caption) box.appendChild(el('p', 'caption', s.caption)); break; }
      case 'video': box.innerHTML = h('🎬') + `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(s.youtube)}" title="${esc(s.title || 'video')}" allowfullscreen loading="lazy"></iframe></div>` + (s.caption ? `<p class="caption">${s.caption}</p>` : ''); break;
      case 'quiz': box.innerHTML = h('✏️') || `<h2><span class="h-ic" aria-hidden="true">✏️</span> Quiz</h2>`; box.appendChild(Quiz.render(s.questions, { onDone: (ok, n) => { Store.quizResult(topicId, 'q' + idx, ok, n); celebrate(ok, n); } })); break;
      case 'alternatives': renderAlternatives(box, s); break;
      case 'conceptMap': renderConceptMap(box, s); break;
      case 'decision': renderDecision(box, s); break;
      default: box.innerHTML = h() + (s.html || '');
    }
    return box;
  }
  /* monta i contenuti pesanti solo quando diventano visibili */
  function lazy(node, fn) {
    if (!('IntersectionObserver' in window)) return fn();
    const io = new IntersectionObserver((en) => { if (en.some((e) => e.isIntersecting)) { io.disconnect(); fn(); } }, { rootMargin: '300px' });
    io.observe(node);
  }

  function renderAlternatives(box, s) {
    box.classList.add('alt');
    box.innerHTML = `<h2><span class="h-ic" aria-hidden="true">🔀</span> ${s.title || t('alt.title')}</h2><p class="muted">${s.intro || t('alt.hint')}</p>`;
    const tabs = el('div', 'alt-tabs'), body = el('div', 'alt-body');
    tabs.setAttribute('role', 'tablist'); body.setAttribute('role', 'tabpanel'); body.setAttribute('aria-live', 'polite');
    box.append(tabs, body);
    const show = (k) => {
      tabs.querySelectorAll('button').forEach((b, i) => { b.classList.toggle('active', i === k); b.setAttribute('aria-selected', i === k ? 'true' : 'false'); });
      const tb = s.tabs[k]; body.innerHTML = tb.html || ''; mountVisual(body, tb);
      body.classList.remove('swap'); void body.offsetWidth; body.classList.add('swap');
    };
    let shown = false;
    s.tabs.forEach((tb, k) => { const b = el('button', 'alt-tab', tb.label); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', 'false'); b.onclick = () => { shown = true; show(k); }; tabs.appendChild(b); });
    lazy(body, () => { if (!shown) show(0); });
  }

  function renderConceptMap(box, s) {
    box.classList.add('cmap-sec');
    box.innerHTML = `<h2><span class="h-ic" aria-hidden="true">🗺️</span> ${s.title || 'Mappa'}</h2><p class="muted">👆 ${t('map.tap')}</p>`;
    const wrap = el('div', 'cmap'); const detail = el('div', 'cmap-detail'); detail.setAttribute('aria-live', 'polite');
    box.append(wrap, detail);
    const nodes = s.nodes || [], byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
    const maxY = Math.max(...nodes.map((n) => n.y), 50);
    wrap.style.paddingBottom = Math.max(55, Math.min(110, maxY + 12)) + '%';
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg'); svg.setAttribute('viewBox', '0 0 100 100'); svg.setAttribute('preserveAspectRatio', 'none'); svg.classList.add('cmap-svg');
    wrap.appendChild(svg);
    const H = Math.max(55, Math.min(110, maxY + 12));
    const ny = (y) => ((y + 4) / (H)) * 100;
    const edgeEls = [];
    (s.edges || []).forEach(([a, b, lbl]) => {
      const A = byId[a], B = byId[b]; if (!A || !B) return;
      const line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', A.x); line.setAttribute('y1', ny(A.y)); line.setAttribute('x2', B.x); line.setAttribute('y2', ny(B.y));
      line.setAttribute('vector-effect', 'non-scaling-stroke'); line.classList.add('cm-edge'); svg.appendChild(line);
      let lab = null;
      if (lbl) { lab = el('span', 'cm-elbl', esc(lbl)); lab.style.left = (A.x + B.x) / 2 + '%'; lab.style.top = (ny(A.y) + ny(B.y)) / 2 + '%'; wrap.appendChild(lab); }
      edgeEls.push({ a, b, line, lab });
    });
    nodes.forEach((n, i) => {
      const d = el('button', 'cm-node', esc(n.label)); d.type = 'button';
      d.style.left = n.x + '%'; d.style.top = ny(n.y) + '%'; d.style.setProperty('--i', i); if (n.color) d.style.setProperty('--nc', n.color);
      d.onclick = () => {
        wrap.querySelectorAll('.cm-node').forEach((x) => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); }); d.classList.add('active'); d.setAttribute('aria-pressed', 'true');
        wrap.classList.add('has-active');
        edgeEls.forEach((e) => { const on = e.a === n.id || e.b === n.id; e.line.classList.toggle('on', on); if (e.lab) e.lab.classList.toggle('on', on); });
        const links = edgeEls.filter((e) => e.a === n.id || e.b === n.id).map((e) => byId[e.a === n.id ? e.b : e.a]);
        detail.innerHTML = `<h3 style="--nc:${n.color || 'var(--c)'}">${esc(n.label)}</h3><div class="cm-what"><h4>📘 ${t('map.what')}</h4>${n.html || ''}</div>` +
          (n.why ? `<div class="cm-why"><h4>🤔 ${t('map.why')}</h4>${n.why}</div>` : '') +
          (links.length ? `<p class="cm-links">${links.map((x) => `<button class="chip" data-n="${x.id}">↔ ${esc(x.label)}</button>`).join(' ')}</p>` : '');
        detail.classList.remove('swap'); void detail.offsetWidth; detail.classList.add('swap');
        detail.querySelectorAll('[data-n]').forEach((b) => (b.onclick = () => wrap.querySelector(`[data-id="${b.dataset.n}"]`).click()));
        detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      };
      d.setAttribute('aria-pressed', 'false');
      d.dataset.id = n.id; wrap.appendChild(d);
    });
  }

  function renderDecision(box, s) {
    box.classList.add('decision');
    box.innerHTML = `<h2><span class="h-ic" aria-hidden="true">🧭</span> ${s.title || ''}</h2>${s.html || ''}<p class="q"><b>${s.question || t('dec.choose')}</b></p>`;
    const opts = el('div', 'dec-opts'), out = el('div', 'dec-out'); out.setAttribute('aria-live', 'polite'); box.append(opts, out);
    const reveal = el('button', 'btn', '📜 ' + t('dec.reveal'));
    s.options.forEach((o, k) => {
      const b = el('button', 'dec-opt', `<span class="dec-k" aria-hidden="true">${String.fromCharCode(65 + k)}</span><span>${esc(o.label)}</span>`); b.type = 'button';
      b.onclick = () => { opts.querySelectorAll('.dec-opt').forEach((x) => x.classList.remove('active')); b.classList.add('active'); out.innerHTML = `<div class="callout">${o.outcome || ''}</div>`; out.appendChild(reveal); };
      opts.appendChild(b);
    });
    reveal.onclick = () => {
      opts.querySelectorAll('.dec-opt').forEach((x, k) => x.classList.toggle('real', k === s.answer));
      out.innerHTML = `<div class="callout c-remember"><b>📜 ${t('dec.history')}: ${esc(s.options[s.answer].label)}</b><br>${s.explain}</div>`;
    };
  }

  /* ---------- verifica e allenamento ---------- */
  function renderVerifica(id, v) {
    const box = el('section', 'card verifica', `<div class="vf-head"><span class="vf-ic" aria-hidden="true">🏁</span><div><h2>${t('topic.verifica')}</h2></div></div>`);
    const tp = Store.topic(id);
    if (tp.best != null) $('.vf-head div', box).appendChild(el('p', 'vf-best', `${t('quiz.best', { p: tp.best })} ${tp.passedAt ? '🏆' : ''}`));
    const start = el('button', 'btn btn-big', '🚀 ' + t('topic.start'));
    box.appendChild(start);
    start.onclick = () => {
      const qs = shuffle(v.questions.concat(Generators.batch(v.gen || [])));
      start.remove();
      box.appendChild(Quiz.render(qs, {
        oneByOne: true, pass: v.pass || 0.7,
        onDone: (ok, n) => { Store.verificaResult(id, ok, n, ok / n >= (v.pass || 0.7)); if (ok / n >= (v.pass || 0.7)) toast('🏆 ' + t('quiz.passed'), 'good'); },
        onRetry: () => { const nb = renderVerifica(id, v); nb.id = box.id; box.replaceWith(nb); }
      }));
    };
    return box;
  }
  function renderPractice(id, gens) {
    const box = el('section', 'card practice', `<h2><span class="h-ic" aria-hidden="true">🔁</span> ${t('quiz.practiceTitle')}</h2><p class="muted">${t('quiz.practiceText')}</p>`);
    const area = el('div'); box.appendChild(area);
    const make = () => { area.innerHTML = ''; const qs = []; for (let i = 0; i < 6; i++) qs.push(Generators.make(gens[i % gens.length])); area.appendChild(Quiz.render(qs, { onDone: (ok, n) => { Store.practiceResult(id, ok, n); celebrate(ok, n); }, onRetry: make, retryLabel: t('quiz.newSet') })); };
    make();
    return box;
  }

  /* ---------- STORICO ---------- */
  function pageHistory() {
    const p = Store.current(); const m = main(); m.innerHTML = '';
    m.appendChild(pageHead(`<span class="av xl" style="background:${p.color}">${p.avatar}</span>`, `${t('hist.title')}`, `${esc(p.name)} · ${t('year.' + p.year)}`, '#ec4899'));
    const ts = Object.entries(p.topics).filter(([id]) => INDEX[id]);
    const studied = ts.filter(([, x]) => x.done).length, passed = ts.filter(([, x]) => x.passedAt).length;
    const bests = ts.map(([, x]) => x.best).filter((x) => x != null); const avg = bests.length ? Math.round(bests.reduce((a, b) => a + b, 0) / bests.length) : 0;
    const S = [['📚', studied, t('hist.studied'), '#4c7cf3'], ['🏆', passed, t('hist.passed'), '#f59e0b'], ['🎯', avg + '%', t('hist.avg'), '#2fb67c'], ['📅', p.days.length, t('hist.streak'), '#ec4899'], ['⚡', p.log.length, t('hist.activities'), '#8b5cf6']];
    m.appendChild(el('div', 'stats', S.map(([ic, v, l, c], i) => `<div style="--c:${c};--i:${i}"><span class="st-ic" aria-hidden="true">${ic}</span><b>${v}</b><span>${l}</span></div>`).join('')));
    // medaglie
    const B = medals(p);
    m.appendChild(el('section', 'card', `<h2>🏅 ${t('hist.badges')} <small class="muted">${B.filter(([, on]) => on).length}/${B.length}</small></h2><div class="badges">${B.map(([e, on], i) => `<div class="badge ${on ? 'on' : ''}" style="--i:${i}" title="${esc(t('badge.' + i + 'd'))}"><span class="bd-medal" aria-hidden="true">${e}</span><b>${t('badge.' + i)}</b><small>${on ? t('badge.' + i + 'd') : '🔒 ' + t('badge.' + i + 'd')}</small></div>`).join('')}</div>`));
    // per anno e materia
    const sec = el('section', 'card', `<h2>📊 ${t('hist.bySubject')}</h2>`);
    C.years.forEach((y) => {
      const pr = progressOf(yearIds(y));
      const rows = subjectsOf(y).map((s) => { const sp = progressOf(C.program[y][s].map((e) => e[0])); return `<tr><td>${SUBJ_ICON[s]} ${t('subj.' + s)}</td><td class="pt-bar">${bar(sp.pct, SUBJ_COLOR[s])}</td><td>${sp.done}/${sp.n}</td><td class="muted">👀 ${sp.seen}</td></tr>`; }).join('');
      const d = el('details', 'yr-det', `<summary style="--c:${YEAR_COLOR[y]}">${ring(pr.pct, YEAR_COLOR[y], 34, '', 5)}<b>${t('year.' + y)}</b><small class="muted">${pr.done}/${pr.n}</small></summary><table class="ptab">${rows}</table>`);
      if (y === p.year) d.open = true;
      sec.appendChild(d);
    });
    m.appendChild(sec);
    const lg = el('section', 'card', `<h2>📔 ${t('hist.log')}</h2>`); lg.appendChild(logList(p.log) || el('p', 'muted empty', t('hist.empty'))); m.appendChild(lg);
  }

  /* ---------- PROFILI ---------- */
  function pageProfiles(first) {
    const m = main(); m.innerHTML = '';
    m.appendChild(el('div', 'prof-hero', `<div class="ph-bubbles" aria-hidden="true"><span>🦊</span><span>🐼</span><span>🦄</span><span>🚀</span><span>🐢</span></div><h1>👋 ${t('profile.who')}</h1>`));
    const g = el('div', 'profiles');
    Store.profiles().forEach((p, i) => {
      const c = el('div', 'pcard' + (Store.current() && Store.current().id === p.id ? ' active' : ''), `<button class="pick" type="button"><span class="av big" style="background:${p.color}">${p.avatar}</span><b>${esc(p.name)}</b><small>${t('year.' + p.year)}</small></button><div class="pact"><button type="button" class="btn btn-small btn-ghost e">✏️ ${t('profile.edit')}</button><button type="button" class="btn btn-small btn-ghost d" aria-label="${esc(t('profile.delete'))} ${esc(p.name)}" title="${esc(t('profile.delete'))}">🗑️</button></div>`);
      c.style.setProperty('--i', i); c.style.setProperty('--pc', p.color);
      c.querySelector('.pick').onclick = () => { Store.select(p.id); if (p.lang) i18n.lang = p.lang; renderChrome(); location.hash = '#/'; route(); };
      c.querySelector('.e').onclick = () => profileForm(p);
      c.querySelector('.d').onclick = () => { if (confirm(t('profile.deleteConfirm', { name: p.name }))) { Store.remove(p.id); renderChrome(); pageProfiles(); } };
      g.appendChild(c);
    });
    const add = el('button', 'pcard add', `<span class="av big">➕</span><b>${t('profile.new')}</b>`); add.type = 'button'; add.onclick = () => profileForm(null); g.appendChild(add);
    m.appendChild(g);
    const io = el('div', 'center io', `<p class="muted">🔒 ${t('profile.note')}</p>`);
    const btns = el('div', 'io-btns');
    const ex = el('button', 'btn btn-ghost', '💾 ' + t('profile.export')); ex.type = 'button'; ex.onclick = () => { const b = new Blob([Store.exportJSON()], { type: 'application/json' }); const a = el('a'); a.href = URL.createObjectURL(b); a.download = 'zainetto-backup-' + new Date().toISOString().slice(0, 10) + '.json'; a.click(); };
    const im = el('label', 'btn btn-ghost', `📂 ${t('profile.import')}<input type="file" accept=".json,application/json" hidden>`);
    im.tabIndex = 0; im.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); im.querySelector('input').click(); } };
    im.querySelector('input').onchange = async (e) => { const f = e.target.files[0]; if (!f) return; try { const n = Store.importJSON(await f.text()); alert(t('profile.imported', { n })); pageProfiles(); } catch (err) { alert(t('profile.badFile')); } };
    btns.append(ex, im); io.appendChild(btns); m.appendChild(io);
    if (first && !Store.profiles().length) profileForm(null);
  }
  function profileForm(p) {
    const dlg = el('div', 'modal');
    const prevFocus = document.activeElement;
    const sel = { avatar: p ? p.avatar : Store.AVATARS[Math.floor(Math.random() * Store.AVATARS.length)] };
    dlg.innerHTML = `<form class="modal-box" role="dialog" aria-modal="true" aria-labelledby="pf-title"><div class="mb-head"><span class="mb-av" aria-hidden="true">${sel.avatar}</span><h2 id="pf-title">${p ? t('profile.edit') : t('profile.new')}</h2></div>
      <label>${t('profile.name')}<input name="name" required maxlength="30" value="${p ? esc(p.name) : ''}" autocomplete="off"></label>
      <div class="mb-2"><label>${t('profile.year')}<select name="year">${C.years.map((y) => `<option value="${y}" ${p && p.year === y ? 'selected' : ''}>${t('year.' + y)}</option>`).join('')}</select></label>
      <label>${t('profile.lang')}<select name="lang">${LANGS.map((l) => `<option value="${l.id}" ${(p ? p.lang : i18n.lang) === l.id ? 'selected' : ''}>${l.flag} ${l.name}</option>`).join('')}</select></label></div>
      <div class="mb-lbl">${t('profile.avatar')}</div><div class="avatars" role="radiogroup" aria-label="${esc(t('profile.avatar'))}">${Store.AVATARS.map((a) => `<button type="button" role="radio" aria-checked="${a === sel.avatar}" class="avpick ${a === sel.avatar ? 'active' : ''}">${a}</button>`).join('')}</div>
      <div class="row"><button type="button" class="btn btn-ghost cancel">${t('misc.cancel')}</button><button class="btn">${p ? t('profile.save') : t('profile.create')}</button></div></form>`;
    document.body.appendChild(dlg);
    const close = () => { dlg.remove(); document.removeEventListener('keydown', onKey); if (prevFocus && prevFocus.focus && prevFocus.isConnected) prevFocus.focus(); };
    const onKey = (e) => { if (e.key === 'Escape' && dlg.isConnected) close(); };
    document.addEventListener('keydown', onKey);
    dlg.addEventListener('mousedown', (e) => { if (e.target === dlg) close(); });
    dlg.querySelectorAll('.avpick').forEach((b) => (b.onclick = () => { dlg.querySelectorAll('.avpick').forEach((x) => { x.classList.remove('active'); x.setAttribute('aria-checked', 'false'); }); b.classList.add('active'); b.setAttribute('aria-checked', 'true'); sel.avatar = b.textContent; const mv = dlg.querySelector('.mb-av'); mv.textContent = b.textContent; mv.classList.remove('pop'); void mv.offsetWidth; mv.classList.add('pop'); }));
    dlg.querySelector('.cancel').onclick = close;
    dlg.querySelector('input').focus();
    dlg.querySelector('form').onsubmit = (e) => {
      e.preventDefault(); const f = new FormData(e.target);
      const data = { name: f.get('name').trim(), year: f.get('year'), lang: f.get('lang'), avatar: sel.avatar };
      if (!data.name) return;
      if (p) Store.update(p.id, data); else Store.create(data);
      dlg.remove(); document.removeEventListener('keydown', onKey); i18n.lang = data.lang; document.documentElement.lang = data.lang; renderChrome();
      if (p) pageProfiles(); else { location.hash = '#/'; route(); }
    };
  }

  /* ---------- avvio ---------- */
  function boot() {
    const saved = Store.getLang();
    i18n.lang = saved || 'it';
    document.documentElement.lang = i18n.lang;
    if (!document.documentElement.dataset.theme) document.documentElement.dataset.theme = storedTheme() || (mqDark && mqDark.matches ? 'dark' : 'light');
    if (mqDark && mqDark.addEventListener) mqDark.addEventListener('change', (e) => { if (!storedTheme()) applyTheme(e.matches ? 'dark' : 'light'); });
    renderChrome();
    $('#lang').onchange = (e) => setLang(e.target.value);
    $('#searchForm').onsubmit = (e) => { e.preventDefault(); const q = $('#search').value.trim(); if (q) location.hash = '#/cerca/' + encodeURIComponent(q); };
    window.addEventListener('hashchange', route);
    route();
  }
  /* API per le sezioni aggiuntive (libreria, coding, luoghi): registrano pagine in window.ZPages */
  window.Z = { el, esc, shuffle, loadScript, renderSection, lazy, mountVisual, logList, bar, ring, toast, celebrate, titles: {},
    /* titolo e link da mostrare nello storico per attività che non sono lezioni del programma */
    registerTitle(id, href, titleFn) { this.titles[id] = { href, title: titleFn }; },
    rerender() { route(); } };
  window.ZPages = window.ZPages || {};
  document.addEventListener('DOMContentLoaded', boot);
})();
