/* Zainetto · Esercizi per livello (facile / medio / difficile / misto).
   Banche di domande: data/quiz/<lingua>/<chiave>.js → QBANK('<lingua>', '<chiave>', { f: [...], m: [...], d: [...] })
   Chiavi: id della lezione (es. 'p4-mat-frazioni'), 'luogo-<id>', 'lib-<id>', 'spazio-<id>', 'corpo'.
   Le domande hanno lo stesso formato dei quiz (vedi CONTENUTI.md). Se la banca manca, si usano solo le domande di base.
   Le domande di base (quiz già presenti nella pagina) contano come livello "medio". */
(function () {
  const TXT = {
    it: { 'lv.title': 'Allenati per livello', 'lv.hint': 'Scegli il livello: ogni volta escono domande ed esempi diversi.', 'lv.f': 'Facile', 'lv.m': 'Medio', 'lv.d': 'Difficile', 'lv.x': 'Misto', 'lv.level': 'Livello', 'lv.new': 'Nuove domande' },
    en: { 'lv.title': 'Practise by level', 'lv.hint': 'Pick a level: every time you get different questions and examples.', 'lv.f': 'Easy', 'lv.m': 'Medium', 'lv.d': 'Hard', 'lv.x': 'Mixed', 'lv.level': 'Level', 'lv.new': 'New questions' },
    fr: { 'lv.title': 'Entraîne-toi par niveau', 'lv.hint': 'Choisis le niveau : à chaque fois, des questions et des exemples différents.', 'lv.f': 'Facile', 'lv.m': 'Moyen', 'lv.d': 'Difficile', 'lv.x': 'Mélangé', 'lv.level': 'Niveau', 'lv.new': 'Nouvelles questions' },
    ru: { 'lv.title': 'Тренируйся по уровням', 'lv.hint': 'Выбери уровень: каждый раз новые вопросы и примеры.', 'lv.f': 'Легко', 'lv.m': 'Средне', 'lv.d': 'Сложно', 'lv.x': 'Вперемешку', 'lv.level': 'Уровень', 'lv.new': 'Новые вопросы' },
    ro: { 'lv.title': 'Exersează pe niveluri', 'lv.hint': 'Alege nivelul: de fiecare dată primești întrebări și exemple diferite.', 'lv.f': 'Ușor', 'lv.m': 'Mediu', 'lv.d': 'Dificil', 'lv.x': 'Amestecat', 'lv.level': 'Nivel', 'lv.new': 'Întrebări noi' },
    de: { 'lv.title': 'Üben nach Stufen', 'lv.hint': 'Wähle eine Stufe: Jedes Mal kommen andere Fragen und Beispiele.', 'lv.f': 'Leicht', 'lv.m': 'Mittel', 'lv.d': 'Schwer', 'lv.x': 'Gemischt', 'lv.level': 'Stufe', 'lv.new': 'Neue Fragen' }
  };
  for (const l in TXT) { I18N[l] = I18N[l] || {}; Object.assign(I18N[l], TXT[l]); }

  const LV = [['f', '🟢'], ['m', '🟡'], ['d', '🔴'], ['x', '🎲']];
  const BANKS = {}; const loading = {};
  window.QBANK = (lang, key, b) => { BANKS[lang + ':' + key] = b; };
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const safeKey = (k) => String(k).replace(/[^a-z0-9_-]/gi, '_');

  function loadOne(lang, key) {
    const k = lang + ':' + key;
    if (BANKS[k]) return Promise.resolve(BANKS[k]);
    if (!loading[k]) loading[k] = new Promise((res) => { const s = document.createElement('script'); s.src = `data/quiz/${lang}/${safeKey(key)}.js`; s.onload = () => res(BANKS[k] || null); s.onerror = () => res(null); document.head.appendChild(s); });
    return loading[k];
  }
  async function load(key) {
    const lang = i18n.lang || 'it';
    return (await loadOne(lang, key)) || (lang !== 'it' ? await loadOne('it', key) : null);
  }

  const getLv = () => { try { return localStorage.getItem('zainetto-level') || 'm'; } catch (e) { return 'm'; } };
  const setLv = (v) => { try { localStorage.setItem('zainetto-level', v); } catch (e) { /* niente */ } };

  /* Memoria delle domande già viste (per chiave), così a ogni tentativo escono prima quelle nuove.
     Si salva solo un'impronta del testo, nel browser; niente dati personali. */
  const SEEN_KEY = 'zainetto-seen';
  const qid = (q) => { const s = String(q.q || '') + '|' + JSON.stringify(q.options || q.items || '') ; let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
  const readSeen = () => { try { return JSON.parse(localStorage.getItem(SEEN_KEY) || '{}'); } catch (e) { return {}; } };
  function remember(key, qs) {
    try {
      const all = readSeen(); const prev = all[key] || [];
      all[key] = qs.map(qid).concat(prev.filter((h) => !qs.some((q) => qid(q) === h))).slice(0, 60);
      const keys = Object.keys(all); if (keys.length > 400) keys.slice(0, keys.length - 400).forEach((k) => delete all[k]);
      localStorage.setItem(SEEN_KEY, JSON.stringify(all));
    } catch (e) { /* niente */ }
  }
  /* Sceglie n domande dal mucchio: prima quelle mai viste, poi le meno recenti; ordine casuale. */
  function fresh(key, pool, n) {
    const uniq = []; const ids = new Set();
    pool.forEach((q) => { const h = qid(q); if (!ids.has(h)) { ids.add(h); uniq.push(q); } });
    if (uniq.length <= n) return shuffle(uniq);
    const recent = readSeen()[key] || [];
    const age = (q) => { const i = recent.indexOf(qid(q)); return i < 0 ? Infinity : i; };
    // a parità di "età" l'ordine resta casuale
    const out = shuffle(uniq).sort((a, b) => age(b) - age(a)).slice(0, n);
    remember(key, out);
    return shuffle(out);
  }

  /* Costruisce le domande per un livello. */
  function pick(bank, base, lv, count, key) {
    const B = { f: (bank && bank.f) || [], m: ((bank && bank.m) || []).concat(base || []), d: (bank && bank.d) || [] };
    const k = (l) => (key || '?') + ':' + l;
    if (lv === 'x') {
      // misto: un po' di ogni livello, dal più facile al più difficile
      const per = Math.max(1, Math.round(count / 3));
      return ['f', 'm', 'd'].flatMap((l) => fresh(k(l), B[l], per));
    }
    return fresh(k(lv), B[lv], count);
  }

  /* Monta la scelta del livello + il quiz in host.
     opts: { key, base: [domande], count: 6, onDone(ok, n, lv) } */
  function mount(host, opts) {
    const count = opts.count || 6;
    const base = () => (typeof opts.base === 'function' ? opts.base() : opts.base) || [];
    const bar = el('div', 'lv-bar'); const area = el('div', 'lv-area');
    host.append(bar, area);
    load(opts.key).then((bank) => {
      const has = (l) => l === 'x' ? true : l === 'm' ? ((bank && bank.m && bank.m.length) || base().length) : (bank && bank[l] && bank[l].length);
      const avail = bank ? LV.filter(([l]) => has(l)) : [];
      let cur = getLv(); if (!avail.some(([l]) => l === cur)) cur = avail.length ? (avail.find(([l]) => l === 'm') || avail[0])[0] : null;
      const draw = () => {
        area.innerHTML = '';
        const qs = cur ? pick(bank, base(), cur, count, opts.key) : fresh(opts.key + ':b', base(), count);
        if (!qs.length) return;
        area.appendChild(Quiz.render(qs, { onDone: (ok, n) => opts.onDone && opts.onDone(ok, n, cur || 'm'), onRetry: draw, retryLabel: t('lv.new') }));
      };
      if (avail.length) {
        bar.innerHTML = `<span class="lv-lbl">${t('lv.level')}:</span>`;
        avail.forEach(([l, ic]) => {
          const b = el('button', 'lv-btn lv-' + l + (l === cur ? ' on' : ''), `${ic} ${t('lv.' + l)}`); b.type = 'button';
          b.setAttribute('aria-pressed', l === cur ? 'true' : 'false');
          b.onclick = () => { cur = l; setLv(l); bar.querySelectorAll('.lv-btn').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); draw(); };
          bar.appendChild(b);
        });
      } else bar.remove();
      draw();
    });
    return host;
  }

  /* Riquadro completo per le lezioni: titolo, spiegazione, livelli e quiz. */
  function card(key, opts = {}) {
    const box = el('section', 'card lv-card', `<h2><span class="h-ic" aria-hidden="true">🎯</span> ${t('lv.title')}</h2><p class="muted">${t('lv.hint')}</p>`);
    box.hidden = true;
    load(key).then((bank) => { if (bank) { box.hidden = false; mount(box, { key, base: opts.base || [], count: opts.count || 6, onDone: opts.onDone }); } });
    return box;
  }

  window.Levels = { load, mount, card, pick, fresh };
})();
