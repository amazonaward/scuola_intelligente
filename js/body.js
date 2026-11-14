/* Il corpo umano (#/corpo, #/corpo/<organo>)
   Visualizzatore 3D del corpo (scena `model` della Libreria): ruota, esplodi, scegli un apparato,
   tocca un organo per scoprire a cosa serve, come funziona, con quali organi lavora e cosa succede se si ammala.
   Dati: data/body/model.js (geometria) e data/body/text.<lingua>.js (testi). Formato: data/body/FORMATO.md */
(function () {
  'use strict';
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const TXT = {
    it: { 'nav.body': 'Corpo umano', 'explore.body': 'Esplora il corpo in 3D: organi, apparati e come lavorano insieme',
      'body.title': 'Il corpo umano', 'body.sub': 'Ruota il corpo, fallo esplodere e tocca un organo: scopri a cosa serve, con chi lavora e cosa succede se si ammala.',
      'body.systems': 'Apparati', 'body.all': 'Tutto il corpo', 'body.organs': 'Organi', 'body.tap': 'Tocca un organo nel modello o scegline uno dall’elenco.',
      'body.what': 'A cosa serve', 'body.how': 'Come funziona', 'body.links': 'Lavora con', 'body.problems': 'Se si ammala',
      'body.causes': 'Cause', 'body.effects': 'Conseguenze', 'body.prevent': 'Come proteggerlo', 'body.fact': 'Lo sapevi?',
      'body.only': 'Mostra solo questo', 'body.showAll': 'Mostra tutto', 'body.close': 'Chiudi', 'body.tour': 'Visita guidata', 'body.tourStart': '▶ Inizia la visita guidata',
      'body.tourStop': '✕ Esci dalla visita', 'body.quiz': 'Mettiti alla prova', 'body.related': 'Lezioni collegate', 'body.inSystems': 'Fa parte di',
      'body.italian': 'Questa sezione non è ancora tradotta nella tua lingua: la vedi in italiano.', 'body.loading': 'Sto preparando il corpo…', 'body.error': 'Non riesco a caricare il corpo umano. Riprova.',
      'body.done': 'Ho esplorato il corpo umano', 'body.doneOk': 'Esplorato ✓' },
    en: { 'nav.body': 'Human body', 'explore.body': 'Explore the body in 3D: organs, systems and how they work together',
      'body.title': 'The human body', 'body.sub': 'Rotate the body, explode it and tap an organ: find out what it does, who it works with and what happens if it gets sick.',
      'body.systems': 'Body systems', 'body.all': 'Whole body', 'body.organs': 'Organs', 'body.tap': 'Tap an organ on the model or pick one from the list.',
      'body.what': 'What it is for', 'body.how': 'How it works', 'body.links': 'Works with', 'body.problems': 'If it gets sick',
      'body.causes': 'Causes', 'body.effects': 'Consequences', 'body.prevent': 'How to protect it', 'body.fact': 'Did you know?',
      'body.only': 'Show only this', 'body.showAll': 'Show everything', 'body.close': 'Close', 'body.tour': 'Guided tour', 'body.tourStart': '▶ Start the guided tour',
      'body.tourStop': '✕ Leave the tour', 'body.quiz': 'Test yourself', 'body.related': 'Related lessons', 'body.inSystems': 'Part of',
      'body.italian': 'This section is not translated into your language yet: you are seeing it in Italian.', 'body.loading': 'Getting the body ready…', 'body.error': 'I can’t load the human body. Please try again.',
      'body.done': 'I explored the human body', 'body.doneOk': 'Explored ✓' },
    fr: { 'nav.body': 'Corps humain', 'explore.body': 'Explore le corps en 3D : organes, appareils et comment ils travaillent ensemble',
      'body.title': 'Le corps humain', 'body.sub': 'Fais tourner le corps, fais-le exploser et touche un organe : découvre à quoi il sert, avec qui il travaille et ce qui se passe s’il tombe malade.',
      'body.systems': 'Appareils et systèmes', 'body.all': 'Tout le corps', 'body.organs': 'Organes', 'body.tap': 'Touche un organe sur le modèle ou choisis-en un dans la liste.',
      'body.what': 'À quoi il sert', 'body.how': 'Comment il fonctionne', 'body.links': 'Il travaille avec', 'body.problems': 'S’il tombe malade',
      'body.causes': 'Causes', 'body.effects': 'Conséquences', 'body.prevent': 'Comment le protéger', 'body.fact': 'Le savais-tu ?',
      'body.only': 'Montrer seulement celui-ci', 'body.showAll': 'Tout montrer', 'body.close': 'Fermer', 'body.tour': 'Visite guidée', 'body.tourStart': '▶ Commencer la visite guidée',
      'body.tourStop': '✕ Quitter la visite', 'body.quiz': 'Teste-toi', 'body.related': 'Leçons liées', 'body.inSystems': 'Fait partie de',
      'body.italian': 'Cette section n’est pas encore traduite dans ta langue : tu la vois en italien.', 'body.loading': 'Je prépare le corps…', 'body.error': 'Impossible de charger le corps humain. Réessaie.',
      'body.done': 'J’ai exploré le corps humain', 'body.doneOk': 'Exploré ✓' },
    ru: { 'nav.body': 'Тело человека', 'explore.body': 'Исследуй тело в 3D: органы, системы и как они работают вместе',
      'body.title': 'Тело человека', 'body.sub': 'Поворачивай тело, разбирай его на части и нажимай на орган: узнай, для чего он, с кем работает и что бывает, если он заболеет.',
      'body.systems': 'Системы органов', 'body.all': 'Всё тело', 'body.organs': 'Органы', 'body.tap': 'Нажми на орган на модели или выбери его в списке.',
      'body.what': 'Для чего он', 'body.how': 'Как он работает', 'body.links': 'Работает вместе с', 'body.problems': 'Если он заболеет',
      'body.causes': 'Причины', 'body.effects': 'Последствия', 'body.prevent': 'Как его беречь', 'body.fact': 'А ты знал?',
      'body.only': 'Показать только его', 'body.showAll': 'Показать всё', 'body.close': 'Закрыть', 'body.tour': 'Экскурсия', 'body.tourStart': '▶ Начать экскурсию',
      'body.tourStop': '✕ Выйти из экскурсии', 'body.quiz': 'Проверь себя', 'body.related': 'Связанные уроки', 'body.inSystems': 'Входит в',
      'body.italian': 'Этот раздел ещё не переведён на твой язык: ты видишь его по-итальянски.', 'body.loading': 'Готовлю тело…', 'body.error': 'Не получается загрузить тело человека. Попробуй ещё раз.',
      'body.done': 'Я исследовал тело человека', 'body.doneOk': 'Исследовано ✓' },
    ro: { 'nav.body': 'Corpul uman', 'explore.body': 'Explorează corpul în 3D: organe, sisteme și cum lucrează împreună',
      'body.title': 'Corpul uman', 'body.sub': 'Rotește corpul, desfă-l în bucăți și atinge un organ: află la ce folosește, cu cine lucrează și ce se întâmplă dacă se îmbolnăvește.',
      'body.systems': 'Aparate și sisteme', 'body.all': 'Tot corpul', 'body.organs': 'Organe', 'body.tap': 'Atinge un organ pe model sau alege unul din listă.',
      'body.what': 'La ce folosește', 'body.how': 'Cum funcționează', 'body.links': 'Lucrează cu', 'body.problems': 'Dacă se îmbolnăvește',
      'body.causes': 'Cauze', 'body.effects': 'Consecințe', 'body.prevent': 'Cum îl protejezi', 'body.fact': 'Știai că?',
      'body.only': 'Arată doar acesta', 'body.showAll': 'Arată tot', 'body.close': 'Închide', 'body.tour': 'Vizită ghidată', 'body.tourStart': '▶ Începe vizita ghidată',
      'body.tourStop': '✕ Ieși din vizită', 'body.quiz': 'Pune-te la încercare', 'body.related': 'Lecții legate', 'body.inSystems': 'Face parte din',
      'body.italian': 'Secțiunea nu este încă tradusă în limba ta: o vezi în italiană.', 'body.loading': 'Pregătesc corpul…', 'body.error': 'Nu pot încărca corpul uman. Încearcă din nou.',
      'body.done': 'Am explorat corpul uman', 'body.doneOk': 'Explorat ✓' },
    de: { 'nav.body': 'Menschlicher Körper', 'explore.body': 'Entdecke den Körper in 3D: Organe, Organsysteme und wie sie zusammenarbeiten',
      'body.title': 'Der menschliche Körper', 'body.sub': 'Dreh den Körper, zerleg ihn und tippe auf ein Organ: Finde heraus, wofür es da ist, mit wem es zusammenarbeitet und was passiert, wenn es krank wird.',
      'body.systems': 'Organsysteme', 'body.all': 'Ganzer Körper', 'body.organs': 'Organe', 'body.tap': 'Tippe auf ein Organ im Modell oder wähle eins aus der Liste.',
      'body.what': 'Wofür es da ist', 'body.how': 'Wie es funktioniert', 'body.links': 'Arbeitet zusammen mit', 'body.problems': 'Wenn es krank wird',
      'body.causes': 'Ursachen', 'body.effects': 'Folgen', 'body.prevent': 'So schützt du es', 'body.fact': 'Wusstest du?',
      'body.only': 'Nur dieses zeigen', 'body.showAll': 'Alles zeigen', 'body.close': 'Schließen', 'body.tour': 'Rundgang', 'body.tourStart': '▶ Rundgang starten',
      'body.tourStop': '✕ Rundgang beenden', 'body.quiz': 'Teste dich', 'body.related': 'Passende Lektionen', 'body.inSystems': 'Gehört zu',
      'body.italian': 'Dieser Bereich ist noch nicht in deine Sprache übersetzt: Du siehst ihn auf Italienisch.', 'body.loading': 'Ich bereite den Körper vor…', 'body.error': 'Der Körper kann nicht geladen werden. Versuch es noch einmal.',
      'body.done': 'Ich habe den Körper erkundet', 'body.doneOk': 'Erkundet ✓' }
  };
  for (const l of Object.keys(TXT)) I18N[l] = Object.assign(I18N[l] || {}, TXT[l]);

  /* lezioni del programma collegate a ogni apparato */
  const LESSONS = {
    all: ['p1-sci-corpo', 'p5-sci-corpo-umano', 'm1-sci-cellula'],
    scheletro: ['m2-sci-scheletro-muscoli'], muscoli: ['m2-sci-scheletro-muscoli'], nervoso: ['m3-sci-sistema-nervoso'],
    sensi: ['p1-sci-cinque-sensi', 'm3-sci-sistema-nervoso'], circolatorio: ['m2-sci-apparato-circolatorio'],
    respiratorio: ['m2-sci-apparato-respiratorio'], digerente: ['m2-sci-apparato-digerente', 'p5-sci-alimentazione'],
    urinario: ['p5-sci-corpo-umano'], endocrino: ['m3-sci-sistema-nervoso'], immunitario: ['p5-sci-corpo-umano'], pelle: ['p1-sci-cinque-sensi']
  };

  let MODEL = null; const TEXTS = {};
  window.BODY_MODEL = (d) => { MODEL = d; };
  window.BODY_TEXT = (d) => { TEXTS[d.lang || 'it'] = d; };
  async function load() {
    if (!MODEL) await Z.loadScript('data/body/model.js');
    const l = i18n.lang;
    if (!TEXTS.it) await Z.loadScript('data/body/text.it.js');
    if (l !== 'it' && !TEXTS[l]) { try { await Z.loadScript(`data/body/text.${l}.js`); } catch (e) { /* manca la traduzione */ } }
    return { model: MODEL, text: TEXTS[l] || TEXTS.it };
  }

  function topicIndex() {
    const C = window.CURRICULUM, out = {}; if (!C) return out;
    for (const y in C.program) for (const s in C.program[y]) for (const e of C.program[y][s]) out[e[0]] = { entry: e, year: y, subj: s };
    return out;
  }

  async function page(m, organ) {
    const hash = location.hash;
    m.innerHTML = `<p class="muted">⏳ ${t('body.loading')}</p>`;
    let D;
    try { D = await load(); } catch (e) { m.innerHTML = `<p class="muted">${t('body.error')}</p>`; return; }
    if (location.hash !== hash || !D.model) return;
    const M = D.model, T = D.text, IT = TEXTS.it;
    const O = (id) => (T.organs && T.organs[id]) || (IT.organs && IT.organs[id]) || { name: id };
    const SY = (id) => (T.systems && T.systems[id]) || (IT.systems && IT.systems[id]) || { name: id };
    Z.registerTitle('corpo', '#/corpo', () => '🫀 ' + t('body.title'));
    Store.visit('corpo');
    m.style.setProperty('--c', '#e11d48');
    m.innerHTML = '';
    const tp = Store.topic('corpo');
    m.appendChild(el('header', 'body-head', `<span class="body-em">🫀</span><div><h1>${esc(T.title || t('body.title'))}</h1><p class="lead">${T.intro || t('body.sub')}</p></div>`));
    if (i18n.lang !== 'it' && T === IT) m.appendChild(el('div', 'callout c-remember', '🌐 ' + t('body.italian')));

    const view = el('section', 'card body-view');
    const stage = el('div', 'body-stage'), side = el('div', 'body-side'), hidden = el('div', 'body-hidden');
    hidden.hidden = true;
    view.append(stage, side); m.appendChild(view); m.appendChild(hidden);

    // apparati
    const sysBox = el('div', 'body-systems', `<h3>🧭 ${t('body.systems')}</h3>`);
    const sysRow = el('div', 'body-chips'); sysBox.appendChild(sysRow);
    const card = el('div', 'body-card');
    const listBox = el('details', 'body-list', `<summary>📋 ${t('body.organs')}</summary>`);
    const listRow = el('div', 'body-chips small'); listBox.appendChild(listRow);
    side.append(sysBox, card, listBox);

    const partsById = {}; M.parts.forEach((p) => { partsById[p.id] = p; });
    const parts = M.parts.map((p) => { const o = O(p.id); return Object.assign({}, p, { name: o.name, label: o.label || o.name, info: o.what || '', more: o.how || '', chip: true }); });
    const sysColor = {}; (M.systems || []).forEach((s) => { sysColor[s.id] = s.color; });
    let sys = null, sel = null, only = false;

    const v = Mini3D.mount(stage, 'model', Object.assign({}, M.options || {}, {
      parts, ui: { chips: hidden, panel: hidden }, scrollChip: false,
      onSelect: (id) => { if (id !== sel) { sel = id || null; renderCard(); syncFocus(); } }
    }));
    if (!v || !v.model) { stage.innerHTML = `<p class="muted">${t('body.error')}</p>`; return; }
    const api = v.model;

    function organsOf(sid) { return M.parts.filter((p) => (p.systems || []).includes(sid)).map((p) => p.id); }
    function syncFocus() {
      if (sel) { const o = O(sel); api.setFocus([sel].concat((o.links || []).map((x) => x.to)).filter((x) => partsById[x])); }
      else api.setFocus(sys ? organsOf(sys) : null);
    }
    // chip degli apparati
    const allChip = el('button', 'chip body-chip active', `🧍 ${t('body.all')}`); allChip.type = 'button';
    allChip.onclick = () => setSystem(null); sysRow.appendChild(allChip);
    const sysChips = {};
    (M.systems || []).forEach((s) => {
      const b = el('button', 'chip body-chip', `${s.emoji || ''} ${esc(SY(s.id).name)}`); b.type = 'button';
      b.style.setProperty('--sc', s.color || '#94a3b8'); b.onclick = () => setSystem(sys === s.id ? null : s.id);
      sysChips[s.id] = b; sysRow.appendChild(b);
    });
    // elenco degli organi
    const orgChips = {};
    M.parts.forEach((p) => {
      const b = el('button', 'chip body-chip', `<i style="background:${p.color || '#94a3b8'}"></i>${esc(O(p.id).label || O(p.id).name)}`); b.type = 'button';
      b.onclick = () => selectOrgan(p.id); orgChips[p.id] = b; listRow.appendChild(b);
    });
    function setSystem(id) {
      sys = id; allChip.classList.toggle('active', !id);
      Object.entries(sysChips).forEach(([k, b]) => b.classList.toggle('active', k === id));
      Object.entries(orgChips).forEach(([k, b]) => { b.hidden = !!id && !(partsById[k].systems || []).includes(id); });
      if (only) { api.showOnly(null); only = false; }
      if (sel && id && !(partsById[sel].systems || []).includes(id)) { sel = null; api.select(null); }
      renderCard(); syncFocus();
    }
    function selectOrgan(id) {
      if (only && id !== sel) { api.showOnly(null); only = false; }
      sel = id && partsById[id] ? id : null; api.select(sel); renderCard(); syncFocus();
      if (sel && history.replaceState) history.replaceState(null, '', '#/corpo/' + sel);
    }
    function lessonsBox(ids) {
      const TI = topicIndex(); const list = [...new Set(ids)].filter((x) => TI[x]);
      if (!list.length) return '';
      return `<div class="body-sec"><h4>📚 ${t('body.related')}</h4><div class="body-lessons">${list.map((x) => `<a href="#/t/${x}">${esc(i18n.topicTitle(TI[x].entry))} <small>${t('year.' + TI[x].year)}</small></a>`).join('')}</div></div>`;
    }
    function renderCard() {
      Object.entries(orgChips).forEach(([k, b]) => b.classList.toggle('active', k === sel));
      if (!sel) {
        if (sys) {
          const s = SY(sys), col = sysColor[sys] || '#94a3b8';
          card.innerHTML = `<div class="body-ch" style="--sc:${col}"><h3>${esc(s.name)}</h3></div>${s.intro || ''}
            <div class="body-sec"><h4>🧩 ${t('body.organs')}</h4><div class="body-chips small">${organsOf(sys).map((x) => `<button type="button" class="chip body-chip" data-go="${x}">${esc(O(x).label || O(x).name)}</button>`).join('')}</div></div>
            ${lessonsBox(LESSONS[sys] || [])}`;
        } else card.innerHTML = `<p class="muted">👆 ${t('body.tap')}</p>`;
        card.querySelectorAll('[data-go]').forEach((b) => { b.onclick = () => selectOrgan(b.dataset.go); });
        return;
      }
      const p = partsById[sel], o = O(sel);
      const sysNames = (p.systems || []).map((s) => `<button type="button" class="chip body-chip small" data-sys="${s}" style="--sc:${sysColor[s] || '#94a3b8'}">${esc(SY(s).name)}</button>`).join('');
      const links = (o.links || []).filter((x) => partsById[x.to]).map((x) => `<li><button type="button" class="body-link" data-go="${x.to}"><i style="background:${partsById[x.to].color || '#94a3b8'}"></i>${esc(O(x.to).label || O(x.to).name)}</button> ${x.text || ''}</li>`).join('');
      const probs = (o.problems || []).map((x) => `<div class="body-prob"><b>⚠️ ${esc(x.title || '')}</b>
        ${x.causes ? `<p><span class="tag c">${t('body.causes')}</span> ${x.causes}</p>` : ''}${x.effects ? `<p><span class="tag e">${t('body.effects')}</span> ${x.effects}</p>` : ''}${x.prevent ? `<p><span class="tag p">${t('body.prevent')}</span> ${x.prevent}</p>` : ''}</div>`).join('');
      const older = /^m/.test((Store.current() || {}).year || '');
      card.innerHTML = `<div class="body-ch" style="--sc:${p.color || '#94a3b8'}"><h3><i style="background:${p.color || '#94a3b8'}"></i>${esc(o.name)}</h3><button type="button" class="mdl-x" aria-label="${t('body.close')}">✕</button></div>
        <div class="body-insys"><small class="muted">${t('body.inSystems')}:</small> ${sysNames}</div>
        <div class="body-sec"><h4>🎯 ${t('body.what')}</h4>${o.what || ''}</div>
        ${o.how ? `<details class="body-sec" ${older ? 'open' : ''}><summary><h4>⚙️ ${t('body.how')}</h4></summary>${o.how}</details>` : ''}
        ${links ? `<div class="body-sec"><h4>🔗 ${t('body.links')}</h4><ul class="body-links">${links}</ul></div>` : ''}
        ${probs ? `<details class="body-sec"><summary><h4>🩺 ${t('body.problems')}</h4></summary>${probs}</details>` : ''}
        ${o.fact ? `<div class="body-sec body-fact">💡 <b>${t('body.fact')}</b> ${o.fact}</div>` : ''}
        <div class="body-act"><button type="button" class="btn btn-small body-only">${only ? '👁 ' + t('body.showAll') : '🔍 ' + t('body.only')}</button></div>
        ${lessonsBox([].concat(...(p.systems || []).map((s) => LESSONS[s] || [])))}`;
      card.querySelector('.mdl-x').onclick = () => { if (only) { api.showOnly(null); only = false; } selectOrgan(null); if (history.replaceState) history.replaceState(null, '', '#/corpo'); };
      card.querySelector('.body-only').onclick = () => { only = !only; api.showOnly(only ? sel : null); if (!only) api.select(sel); renderCard(); syncFocus(); };
      card.querySelectorAll('[data-go]').forEach((b) => { b.onclick = () => selectOrgan(b.dataset.go); });
      card.querySelectorAll('[data-sys]').forEach((b) => { b.onclick = () => setSystem(b.dataset.sys); });
      if (window.innerWidth < 900) card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    renderCard();

    // visita guidata
    if (T.tour && T.tour.length && window.Library && Library.mountSteps) {
      const tour = el('section', 'card body-tour', `<h2>🧭 ${t('body.tour')}</h2>`);
      const host = el('div'); const btn = el('button', 'btn', t('body.tourStart')); btn.type = 'button';
      tour.append(btn, host); m.appendChild(tour);
      let on = false;
      btn.onclick = () => {
        on = !on; host.innerHTML = ''; btn.textContent = on ? t('body.tourStop') : t('body.tourStart');
        if (on) { sel = null; sys = null; setSystem(null); Library.mountSteps(host, T.tour, api); stage.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        else api.reset();
      };
    }
    // quiz
    const quiz = T.quiz && T.quiz.length ? T.quiz : null;
    const doneBtn = el('button', 'btn btn-big ' + (tp.done ? 'btn-ok' : ''), tp.done ? t('body.doneOk') : '✔ ' + t('body.done'));
    const setDone = (val) => { Store.markDone('corpo', val); doneBtn.className = 'btn btn-big ' + (val ? 'btn-ok' : ''); doneBtn.textContent = val ? t('body.doneOk') : '✔ ' + t('body.done'); };
    doneBtn.onclick = () => setDone(!Store.topic('corpo').done);
    if (quiz) {
      const q = el('section', 'card body-quiz', `<h2>✏️ ${t('body.quiz')}</h2>`); const area = el('div'); q.appendChild(area);
      const mk = () => { area.innerHTML = ''; area.appendChild(Quiz.render(Z.shuffle(quiz), { onDone: (ok, n) => { Store.quizResult('corpo', 'quiz', ok, n); if (ok / n >= 0.7 && !Store.topic('corpo').done) setDone(true); }, onRetry: mk })); };
      mk(); m.appendChild(q);
    }
    const rel = el('section', 'card body-rel'); rel.innerHTML = lessonsBox([].concat(LESSONS.all, ...Object.keys(LESSONS).filter((k) => k !== 'all').map((k) => LESSONS[k])));
    if (rel.innerHTML) m.appendChild(rel);
    const foot = el('div', 'topic-foot'); foot.appendChild(doneBtn); m.appendChild(foot);

    if (organ && partsById[organ]) setTimeout(() => selectOrgan(organ), 50);
  }

  window.ZPages = window.ZPages || {};
  ZPages.corpo = (m, organ) => page(m, organ);
})();
