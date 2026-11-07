/* Zainetto · Storia dei luoghi (#/luoghi, #/luoghi/<id>)
   Globo da toccare → regione/Paese → linea del tempo non lineare con le epoche, chi governava,
   mini-mappa con l'estensione dello Stato/impero, lezioni collegate e quiz generato dai dati.
   Dati: data/places/index.js (catalogo), data/places/empires.js (estensioni), data/places/<id>.js (storie).
   Formato documentato in data/places/FORMATO.md. */
(function () {
  window.ZPages = window.ZPages || {};
  const ROOT = 'data/places/';
  const LANG_IX = { it: 0, en: 1, fr: 2, ru: 3, ro: 4 };
  const DEG = Math.PI / 180, TAU = Math.PI * 2;
  const NOW = 2026;

  /* ================= testi dell'interfaccia (5 lingue) ================= */
  const TXT = {
    it: {
      'pl.title': 'Storia dei luoghi', 'pl.sub': 'Tocca un punto del globo e scopri tutta la storia di quel luogo: dai primi esseri umani fino a oggi.',
      'pl.search': 'Cerca una regione o un Paese…', 'pl.where': 'Dove sono?', 'pl.whereTitle': 'Dove abiti?', 'pl.whereText': 'Scegli il tuo luogo dall\'elenco: lo ricorderò per il tuo profilo.',
      'pl.home': 'Casa mia', 'pl.tapHint': 'Trascina per girare il globo, rotella o due dita per lo zoom, tocca per scegliere un luogo.',
      'pl.pickFirst': 'Tocca il globo o scegli un luogo dall\'elenco.', 'pl.open': 'Apri la storia', 'pl.ready': 'Storia pronta: {n} epoche',
      'pl.coming': 'Storia in preparazione', 'pl.comingUse': 'Intanto puoi leggere la storia di {name}.', 'pl.sea': 'Hai toccato il mare! Il luogo più vicino è:',
      'pl.readyList': 'Storie pronte', 'pl.allList': 'Tutti i luoghi', 'pl.g.italia': 'Regioni d\'Italia', 'pl.g.europa': 'Paesi d\'Europa', 'pl.g.mondo': 'Il mondo', 'pl.g.citta': 'Città',
      'pl.none': 'Nessun luogo trovato.', 'pl.zoomIn': 'Avvicina', 'pl.zoomOut': 'Allontana', 'pl.reset': 'Tutto il globo',
      'pl.timeline': 'Viaggio nel tempo', 'pl.drag': 'Trascina la barra del tempo o premi ▶', 'pl.play': 'Avvia', 'pl.pause': 'Pausa',
      'pl.prev': 'Epoca precedente', 'pl.next': 'Epoca successiva', 'pl.ruler': 'Chi governava', 'pl.life': 'Come si viveva', 'pl.why': 'Perché è andata così?',
      'pl.events': 'Fatti importanti', 'pl.lessons': 'Lezioni collegate', 'pl.map': 'Dove siamo e fin dove arrivava lo Stato',
      'pl.mapRegion': 'Regione', 'pl.mapEmpire': 'Stato/impero', 'pl.who': 'Chi governava qui', 'pl.whoHint': 'Ogni barra è uno Stato o un popolo. Toccala per saltare a quell\'epoca.',
      'pl.explored': 'Epoche esplorate: {a} su {b}', 'pl.allDone': 'Hai esplorato tutta la storia di {name}! 🏅', 'pl.quiz': 'Mettiti alla prova',
      'pl.fallback': 'La storia di {name} è raccontata dentro quella di {parent}.', 'pl.comingTitle': '{name}: storia in preparazione',
      'pl.comingText': 'Stiamo ancora scrivendo la storia di questo luogo. Intanto esplora queste storie già pronte:', 'pl.back': 'Torna al globo',
      'pl.yearsAgo': 'circa {n} anni fa', 'pl.today': 'oggi', 'pl.from': 'dal', 'pl.to': 'al', 'pl.eras': 'epoche', 'pl.here': 'Qui',
      'pl.q.ruler': 'Intorno all\'anno {year}, chi governava {place}?', 'pl.q.order': 'Metti in ordine queste epoche della storia di {place}, dalla più antica alla più recente.',
      'pl.q.event': 'In quale epoca è successo questo fatto? «{text}»', 'pl.q.before': '«{a}» viene prima di «{b}» nella storia di {place}.',
      'pl.q.exRuler': 'Dal {from} al {to} qui governava: {ruler}.', 'pl.q.exOrder': 'Ordine giusto: {list}.', 'pl.q.exEvent': 'Successe nel {year}, durante l\'epoca «{era}».',
      'pl.q.exBefore': '«{a}» inizia nel {ya}, «{b}» nel {yb}.', 'pl.loading': 'Carico la storia…'
    },
    en: {
      'pl.title': 'History of places', 'pl.sub': 'Tap a point on the globe and discover the whole history of that place: from the first humans to today.',
      'pl.search': 'Search a region or a country…', 'pl.where': 'Where am I?', 'pl.whereTitle': 'Where do you live?', 'pl.whereText': 'Pick your place from the list: I will remember it for your profile.',
      'pl.home': 'My home', 'pl.tapHint': 'Drag to spin the globe, wheel or two fingers to zoom, tap to choose a place.',
      'pl.pickFirst': 'Tap the globe or choose a place from the list.', 'pl.open': 'Open the story', 'pl.ready': 'Story ready: {n} eras',
      'pl.coming': 'Story coming soon', 'pl.comingUse': 'Meanwhile you can read the history of {name}.', 'pl.sea': 'You tapped the sea! The nearest place is:',
      'pl.readyList': 'Stories ready', 'pl.allList': 'All places', 'pl.g.italia': 'Regions of Italy', 'pl.g.europa': 'Countries of Europe', 'pl.g.mondo': 'The world', 'pl.g.citta': 'Cities',
      'pl.none': 'No place found.', 'pl.zoomIn': 'Zoom in', 'pl.zoomOut': 'Zoom out', 'pl.reset': 'Whole globe',
      'pl.timeline': 'Time travel', 'pl.drag': 'Drag the time bar or press ▶', 'pl.play': 'Play', 'pl.pause': 'Pause',
      'pl.prev': 'Previous era', 'pl.next': 'Next era', 'pl.ruler': 'Who ruled', 'pl.life': 'How people lived', 'pl.why': 'Why did it go this way?',
      'pl.events': 'Key events', 'pl.lessons': 'Related lessons', 'pl.map': 'Where we are and how far the state reached',
      'pl.mapRegion': 'Region', 'pl.mapEmpire': 'State/empire', 'pl.who': 'Who ruled here', 'pl.whoHint': 'Each bar is a state or a people. Tap it to jump to that era.',
      'pl.explored': 'Eras explored: {a} of {b}', 'pl.allDone': 'You explored the whole history of {name}! 🏅', 'pl.quiz': 'Test yourself',
      'pl.fallback': 'The history of {name} is told inside the history of {parent}.', 'pl.comingTitle': '{name}: story coming soon',
      'pl.comingText': 'We are still writing the history of this place. Meanwhile explore these ready stories:', 'pl.back': 'Back to the globe',
      'pl.yearsAgo': 'about {n} years ago', 'pl.today': 'today', 'pl.from': 'from', 'pl.to': 'to', 'pl.eras': 'eras', 'pl.here': 'Here',
      'pl.q.ruler': 'Around the year {year}, who ruled {place}?', 'pl.q.order': 'Put these eras of the history of {place} in order, from the oldest to the most recent.',
      'pl.q.event': 'In which era did this happen? «{text}»', 'pl.q.before': '«{a}» comes before «{b}» in the history of {place}.',
      'pl.q.exRuler': 'From {from} to {to} this place was ruled by: {ruler}.', 'pl.q.exOrder': 'Correct order: {list}.', 'pl.q.exEvent': 'It happened in {year}, during the era «{era}».',
      'pl.q.exBefore': '«{a}» starts in {ya}, «{b}» in {yb}.', 'pl.loading': 'Loading the story…'
    },
    fr: {
      'pl.title': 'Histoire des lieux', 'pl.sub': 'Touche un point du globe et découvre toute l\'histoire de ce lieu : des premiers humains à aujourd\'hui.',
      'pl.search': 'Cherche une région ou un pays…', 'pl.where': 'Où suis-je ?', 'pl.whereTitle': 'Où habites-tu ?', 'pl.whereText': 'Choisis ton lieu dans la liste : je m\'en souviendrai pour ton profil.',
      'pl.home': 'Chez moi', 'pl.tapHint': 'Glisse pour tourner le globe, molette ou deux doigts pour zoomer, touche pour choisir un lieu.',
      'pl.pickFirst': 'Touche le globe ou choisis un lieu dans la liste.', 'pl.open': 'Ouvrir l\'histoire', 'pl.ready': 'Histoire prête : {n} époques',
      'pl.coming': 'Histoire en préparation', 'pl.comingUse': 'En attendant, tu peux lire l\'histoire de {name}.', 'pl.sea': 'Tu as touché la mer ! Le lieu le plus proche est :',
      'pl.readyList': 'Histoires prêtes', 'pl.allList': 'Tous les lieux', 'pl.g.italia': 'Régions d\'Italie', 'pl.g.europa': 'Pays d\'Europe', 'pl.g.mondo': 'Le monde', 'pl.g.citta': 'Villes',
      'pl.none': 'Aucun lieu trouvé.', 'pl.zoomIn': 'Rapprocher', 'pl.zoomOut': 'Éloigner', 'pl.reset': 'Tout le globe',
      'pl.timeline': 'Voyage dans le temps', 'pl.drag': 'Fais glisser la barre du temps ou appuie sur ▶', 'pl.play': 'Lancer', 'pl.pause': 'Pause',
      'pl.prev': 'Époque précédente', 'pl.next': 'Époque suivante', 'pl.ruler': 'Qui gouvernait', 'pl.life': 'Comment on vivait', 'pl.why': 'Pourquoi cela s\'est passé ainsi ?',
      'pl.events': 'Faits importants', 'pl.lessons': 'Leçons liées', 'pl.map': 'Où nous sommes et jusqu\'où allait l\'État',
      'pl.mapRegion': 'Région', 'pl.mapEmpire': 'État/empire', 'pl.who': 'Qui gouvernait ici', 'pl.whoHint': 'Chaque barre est un État ou un peuple. Touche-la pour aller à cette époque.',
      'pl.explored': 'Époques explorées : {a} sur {b}', 'pl.allDone': 'Tu as exploré toute l\'histoire de {name} ! 🏅', 'pl.quiz': 'Teste-toi',
      'pl.fallback': 'L\'histoire de {name} est racontée dans celle de {parent}.', 'pl.comingTitle': '{name} : histoire en préparation',
      'pl.comingText': 'Nous écrivons encore l\'histoire de ce lieu. En attendant, explore ces histoires prêtes :', 'pl.back': 'Retour au globe',
      'pl.yearsAgo': 'il y a environ {n} ans', 'pl.today': 'aujourd\'hui', 'pl.from': 'de', 'pl.to': 'à', 'pl.eras': 'époques', 'pl.here': 'Ici',
      'pl.q.ruler': 'Vers l\'an {year}, qui gouvernait {place} ?', 'pl.q.order': 'Mets en ordre ces époques de l\'histoire de {place}, de la plus ancienne à la plus récente.',
      'pl.q.event': 'À quelle époque cela s\'est-il passé ? «{text}»', 'pl.q.before': '«{a}» vient avant «{b}» dans l\'histoire de {place}.',
      'pl.q.exRuler': 'De {from} à {to}, ce lieu était gouverné par : {ruler}.', 'pl.q.exOrder': 'Ordre correct : {list}.', 'pl.q.exEvent': 'C\'est arrivé en {year}, pendant l\'époque «{era}».',
      'pl.q.exBefore': '«{a}» commence en {ya}, «{b}» en {yb}.', 'pl.loading': 'Chargement de l\'histoire…'
    },
    ru: {
      'pl.title': 'История мест', 'pl.sub': 'Нажми на точку глобуса и узнай всю историю этого места: от первых людей до наших дней.',
      'pl.search': 'Найди регион или страну…', 'pl.where': 'Где я?', 'pl.whereTitle': 'Где ты живёшь?', 'pl.whereText': 'Выбери своё место из списка: я запомню его для твоего профиля.',
      'pl.home': 'Мой дом', 'pl.tapHint': 'Тяни, чтобы вращать глобус, колёсико или два пальца — масштаб, нажми, чтобы выбрать место.',
      'pl.pickFirst': 'Нажми на глобус или выбери место из списка.', 'pl.open': 'Открыть историю', 'pl.ready': 'История готова: {n} эпох',
      'pl.coming': 'История готовится', 'pl.comingUse': 'А пока можно прочитать историю: {name}.', 'pl.sea': 'Ты нажал на море! Ближайшее место:',
      'pl.readyList': 'Готовые истории', 'pl.allList': 'Все места', 'pl.g.italia': 'Регионы Италии', 'pl.g.europa': 'Страны Европы', 'pl.g.mondo': 'Мир', 'pl.g.citta': 'Города',
      'pl.none': 'Ничего не найдено.', 'pl.zoomIn': 'Приблизить', 'pl.zoomOut': 'Отдалить', 'pl.reset': 'Весь глобус',
      'pl.timeline': 'Путешествие во времени', 'pl.drag': 'Двигай полосу времени или нажми ▶', 'pl.play': 'Пуск', 'pl.pause': 'Пауза',
      'pl.prev': 'Предыдущая эпоха', 'pl.next': 'Следующая эпоха', 'pl.ruler': 'Кто правил', 'pl.life': 'Как жили люди', 'pl.why': 'Почему так получилось?',
      'pl.events': 'Важные события', 'pl.lessons': 'Связанные уроки', 'pl.map': 'Где мы и докуда простиралось государство',
      'pl.mapRegion': 'Регион', 'pl.mapEmpire': 'Государство', 'pl.who': 'Кто здесь правил', 'pl.whoHint': 'Каждая полоса — государство или народ. Нажми, чтобы перейти к этой эпохе.',
      'pl.explored': 'Изучено эпох: {a} из {b}', 'pl.allDone': 'Ты изучил всю историю: {name}! 🏅', 'pl.quiz': 'Проверь себя',
      'pl.fallback': 'История места «{name}» рассказана в истории: {parent}.', 'pl.comingTitle': '{name}: история готовится',
      'pl.comingText': 'Мы ещё пишем историю этого места. А пока посмотри готовые истории:', 'pl.back': 'Назад к глобусу',
      'pl.yearsAgo': 'около {n} лет назад', 'pl.today': 'сегодня', 'pl.from': 'с', 'pl.to': 'по', 'pl.eras': 'эпох', 'pl.here': 'Здесь',
      'pl.q.ruler': 'Кто правил здесь ({place}) около {year} года?', 'pl.q.order': 'Расставь эпохи истории ({place}) по порядку: от самой древней к самой новой.',
      'pl.q.event': 'В какую эпоху это произошло? «{text}»', 'pl.q.before': '«{a}» идёт раньше, чем «{b}», в истории: {place}.',
      'pl.q.exRuler': 'С {from} по {to} здесь правил(и): {ruler}.', 'pl.q.exOrder': 'Правильный порядок: {list}.', 'pl.q.exEvent': 'Это было в {year}, в эпоху «{era}».',
      'pl.q.exBefore': '«{a}» начинается в {ya}, «{b}» — в {yb}.', 'pl.loading': 'Загружаю историю…'
    },
    ro: {
      'pl.title': 'Istoria locurilor', 'pl.sub': 'Atinge un punct de pe glob și descoperă toată istoria acelui loc: de la primii oameni până azi.',
      'pl.search': 'Caută o regiune sau o țară…', 'pl.where': 'Unde sunt?', 'pl.whereTitle': 'Unde locuiești?', 'pl.whereText': 'Alege-ți locul din listă: îl voi ține minte pentru profilul tău.',
      'pl.home': 'Acasă', 'pl.tapHint': 'Trage ca să rotești globul, rotița sau două degete pentru zoom, atinge ca să alegi un loc.',
      'pl.pickFirst': 'Atinge globul sau alege un loc din listă.', 'pl.open': 'Deschide povestea', 'pl.ready': 'Poveste gata: {n} epoci',
      'pl.coming': 'Poveste în pregătire', 'pl.comingUse': 'Între timp poți citi istoria: {name}.', 'pl.sea': 'Ai atins marea! Cel mai apropiat loc este:',
      'pl.readyList': 'Povești gata', 'pl.allList': 'Toate locurile', 'pl.g.italia': 'Regiunile Italiei', 'pl.g.europa': 'Țările Europei', 'pl.g.mondo': 'Lumea', 'pl.g.citta': 'Orașe',
      'pl.none': 'Niciun loc găsit.', 'pl.zoomIn': 'Apropie', 'pl.zoomOut': 'Depărtează', 'pl.reset': 'Tot globul',
      'pl.timeline': 'Călătorie în timp', 'pl.drag': 'Trage bara timpului sau apasă ▶', 'pl.play': 'Pornește', 'pl.pause': 'Pauză',
      'pl.prev': 'Epoca anterioară', 'pl.next': 'Epoca următoare', 'pl.ruler': 'Cine conducea', 'pl.life': 'Cum se trăia', 'pl.why': 'De ce s-a întâmplat așa?',
      'pl.events': 'Fapte importante', 'pl.lessons': 'Lecții legate', 'pl.map': 'Unde suntem și până unde ajungea statul',
      'pl.mapRegion': 'Regiune', 'pl.mapEmpire': 'Stat/imperiu', 'pl.who': 'Cine a condus aici', 'pl.whoHint': 'Fiecare bară este un stat sau un popor. Atinge-o ca să sari la acea epocă.',
      'pl.explored': 'Epoci explorate: {a} din {b}', 'pl.allDone': 'Ai explorat toată istoria: {name}! 🏅', 'pl.quiz': 'Pune-te la încercare',
      'pl.fallback': 'Istoria locului {name} este povestită în cea a locului {parent}.', 'pl.comingTitle': '{name}: poveste în pregătire',
      'pl.comingText': 'Încă scriem istoria acestui loc. Între timp explorează aceste povești gata:', 'pl.back': 'Înapoi la glob',
      'pl.yearsAgo': 'acum aproximativ {n} de ani', 'pl.today': 'azi', 'pl.from': 'din', 'pl.to': 'până în', 'pl.eras': 'epoci', 'pl.here': 'Aici',
      'pl.q.ruler': 'În jurul anului {year}, cine conducea {place}?', 'pl.q.order': 'Pune în ordine aceste epoci din istoria locului {place}, de la cea mai veche la cea mai nouă.',
      'pl.q.event': 'În ce epocă s-a întâmplat? «{text}»', 'pl.q.before': '«{a}» vine înainte de «{b}» în istoria locului {place}.',
      'pl.q.exRuler': 'Din {from} până în {to} aici a condus: {ruler}.', 'pl.q.exOrder': 'Ordinea corectă: {list}.', 'pl.q.exEvent': 'S-a întâmplat în {year}, în epoca «{era}».',
      'pl.q.exBefore': '«{a}» începe în {ya}, «{b}» în {yb}.', 'pl.loading': 'Se încarcă povestea…'
    }
  };
  for (const l in TXT) { I18N[l] = I18N[l] || {}; Object.assign(I18N[l], TXT[l]); }

  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[șş]/g, 's').replace(/[țţ]/g, 't');
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

  /* ================= dati ================= */
  const CAT = { list: [], byId: {} };
  const STORIES = {};
  const EMPIRES = {};
  window.PLACES_CATALOG = (arr) => {
    arr.forEach((p) => {
      p.rings = ringsOf(p);
      p.area = p.rings.reduce((s, r) => s + Math.abs(ringArea(r)), 0);
      if (p.lat == null && p.rings.length) { const b = bboxOf(p.rings); p.lat = (b[1] + b[3]) / 2; p.lon = (b[0] + b[2]) / 2; }
      CAT.byId[p.id] = p; CAT.list.push(p);
    });
  };
  // le traduzioni stanno in data/places/<lingua>/<id>.js e chiamano PLACE({ lang: '<lingua>', ... })
  const skey = (id, l) => (l && l !== 'it' ? l + ':' : '') + id;
  window.PLACE = (d) => { STORIES[skey(d.id, d.lang)] = d; (d.eras || []).sort((a, b) => a.from - b.from); };
  window.PLACE_EMPIRES = (o) => { for (const k in o) { o[k].rings = ringsOf(o[k]); EMPIRES[k] = o[k]; } };

  function ringsOf(p) {
    if (p.box) { const [w, s, e, n] = p.box; return [[[w, s], [e, s], [e, n], [w, n]]]; }
    if (!p.poly) return [];
    return Array.isArray(p.poly[0][0]) ? p.poly : [p.poly];
  }
  function ringArea(r) { let a = 0; for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]) * Math.cos(r[i][1] * DEG); return a / 2; }
  function bboxOf(rings) { let b = [180, 90, -180, -90]; rings.forEach((r) => r.forEach(([x, y]) => { b = [Math.min(b[0], x), Math.min(b[1], y), Math.max(b[2], x), Math.max(b[3], y)]; })); return b; }
  function inRing(lon, lat, r) { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) c = !c; } return c; }
  const inPlace = (lon, lat, p) => p.rings.some((r) => inRing(lon, lat, r));
  function gcDist(la1, lo1, la2, lo2) { const a = Math.sin((la2 - la1) * DEG / 2) ** 2 + Math.cos(la1 * DEG) * Math.cos(la2 * DEG) * Math.sin((lo2 - lo1) * DEG / 2) ** 2; return 2 * Math.asin(Math.min(1, Math.sqrt(a))); }

  let catP = null, empP = null;
  const loadCatalog = () => catP || (catP = Z.loadScript(ROOT + 'index.js').then(() => { registerTitles(); return CAT; }));
  const loadEmpires = () => empP || (empP = Z.loadScript(ROOT + 'empires.js').catch(() => null));
  const storyP = {};
  function loadIt(id) {
    if (STORIES[id]) return Promise.resolve(STORIES[id]);
    return storyP[id] || (storyP[id] = Z.loadScript(ROOT + id + '.js').then(() => STORIES[id]).catch(() => null));
  }
  function loadStory(id) {
    const l = i18n.lang, k = skey(id, l);
    if (l === 'it') return loadIt(id);
    if (STORIES[k]) return Promise.resolve(STORIES[k]);
    return storyP[k] || (storyP[k] = Z.loadScript(ROOT + l + '/' + id + '.js').then(() => STORIES[k] || loadIt(id)).catch(() => loadIt(id)));
  }
  const nameOf = (p) => (p ? (p.n[LANG_IX[i18n.lang]] || p.n[0]) : '');
  const chain = (p) => { const c = []; while (p) { c.unshift(p); p = CAT.byId[p.parent]; } return c; };
  /* il luogo (o l'antenato più vicino) che ha una storia scritta */
  const storyOwner = (p) => { while (p && !p.ready) p = CAT.byId[p.parent]; return p || null; };
  const level = (p) => ({ area: 1, country: 2, region: 3, city: 4 }[p.kind] || 2);
  const icon = (p) => p.flag || ({ area: '🌍', country: '🏳️', region: '📍', city: '🏙️' }[p.kind] || '📍');

  function registerTitles() {
    CAT.list.forEach((p) => Z.registerTitle('place:' + p.id, '#/luoghi/' + p.id, () => '🗺️ ' + nameOf(p)));
  }
  /* registra subito i titoli, così lo storico mostra le visite ai luoghi */
  let booted = false;
  document.addEventListener('DOMContentLoaded', () => { booted = true; });
  loadCatalog().then(() => { if (booted && /^#\/(storico)?$|^$/.test(location.hash) && Store.current()) Z.rerender(); }).catch(() => {});

  /* ================= progressi ================= */
  const pkey = (id) => 'place:' + id;
  function erasSeen(id) { return (Store.topic(pkey(id)).eras || []).slice(); }
  function markEra(id, k, total, nm) {
    const p = Store.current(); if (!p) return false;
    const t0 = Store._t(pkey(id)); if (!t0) return false;
    t0.eras = t0.eras || [];
    if (t0.eras.includes(k)) return false;
    t0.eras.push(k); Store.update(p.id, {});
    if (t0.eras.length >= total && !t0.done) { Store.markDone(pkey(id), true); return true; }
    return false;
  }
  const homeId = () => { const p = Store.current(); return p && p.placeHome; };
  const setHome = (id) => { const p = Store.current(); if (p) Store.update(p.id, { placeHome: id }); };

  /* ================= scala del tempo non lineare ================= */
  /* segmenti: [da, a, peso, log?] – la preistoria è compressa (scala logaritmica sugli anni fa) */
  const SEG = [[-3e6, -4e4, 1.1, 1], [-4e4, -1e4, 0.7, 1], [-1e4, -3000, 0.8, 1], [-3000, -500, 1.0], [-500, 500, 1.5], [500, 1500, 1.4], [1500, 1800, 1.0], [1800, 1900, 0.8], [1900, NOW, 1.1]];
  const bp = (y) => Math.log(NOW + 1 - y);
  function makeAxis(start, end) {
    const segs = [];
    for (const [a, b, w, lg] of SEG) {
      const a2 = Math.max(a, start), b2 = Math.min(b, end); if (b2 <= a2) continue;
      const frac = lg ? (bp(a2) - bp(b2)) / (bp(a) - bp(b)) : (b2 - a2) / (b - a);
      segs.push({ a: a2, b: b2, w: w * Math.max(frac, 0.35), lg });
    }
    const tot = segs.reduce((s, x) => s + x.w, 0); let acc = 0;
    segs.forEach((s) => { s.p0 = acc / tot; acc += s.w; s.p1 = acc / tot; });
    const pos = (y) => {
      y = clamp(y, start, end);
      const s = segs.find((x) => y <= x.b) || segs[segs.length - 1];
      const f = s.lg ? (bp(s.a) - bp(y)) / (bp(s.a) - bp(s.b)) : (y - s.a) / (s.b - s.a);
      return s.p0 + f * (s.p1 - s.p0);
    };
    const year = (p) => {
      p = clamp(p, 0, 1);
      const s = segs.find((x) => p <= x.p1) || segs[segs.length - 1];
      const f = (p - s.p0) / ((s.p1 - s.p0) || 1);
      const y = s.lg ? NOW + 1 - Math.exp(bp(s.a) - f * (bp(s.a) - bp(s.b))) : s.a + f * (s.b - s.a);
      return niceYear(y);
    };
    return { pos, year, start, end };
  }
  function niceYear(y) {
    const r = (y < -1e5) ? 1e4 : (y < -1e4) ? 1000 : (y < -3000) ? 100 : (y < -500) ? 10 : (y < 1500) ? 5 : 1;
    let v = Math.round(y / r) * r; if (v === 0) v = 1; return Math.min(NOW, v);
  }
  const fmtN = (n) => Number(n).toLocaleString(i18n.lang === 'en' ? 'en' : i18n.lang);
  function fmtYear(y) {
    if (y < -10000) { const ago = NOW - y; const m = Math.pow(10, Math.floor(Math.log10(ago)) - 1); return t('pl.yearsAgo', { n: fmtN(Math.round(ago / m) * m) }); }
    if (y >= NOW) return t('pl.today');
    if (y < 0) return fmtN(-y) + ' ' + t('w.bc');
    if (y < 1000) return y + ' ' + t('w.ad');
    return String(y);
  }
  const fmtShort = (y) => (y < -10000 ? fmtYear(y) : y < 0 ? fmtN(-y) + ' ' + t('w.bc') : y >= NOW ? t('pl.today') : String(y));

  /* ================= globo (proiezione ortografica su canvas) ================= */
  const densCache = new WeakMap();
  function dense(r) {
    if (densCache.has(r)) return densCache.get(r);
    const out = [];
    for (let i = 0; i < r.length; i++) {
      const a = r[i], b = r[(i + 1) % r.length]; out.push(a);
      const d = Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])); const n = Math.floor(d / 3);
      for (let k = 1; k < n; k++) out.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n]);
    }
    densCache.set(r, out); return out;
  }
  class Globe {
    constructor(host, o = {}) {
      this.o = o;
      this.wrap = el('div', 'pl-globe' + (o.mini ? ' mini' : ''));
      this.canvas = el('canvas'); this.wrap.appendChild(this.canvas);
      host.appendChild(this.wrap);
      this.ctx = this.canvas.getContext('2d');
      this.layer = document.createElement('canvas');
      this.lat0 = o.lat != null ? o.lat : 30; this.lon0 = o.lon != null ? o.lon : 12; this.zoom = o.zoom || 1;
      this.target = null; this.highlight = null; this.extent = null; this.markers = []; this.outlines = [];
      this.auto = !!o.auto; this.dirty = true; this.pulse = 0;
      if (o.interactive !== false) this._bind();
      this._resize();
      this._ro = new ResizeObserver(() => { this._resize(); this.dirty = true; }); this._ro.observe(this.wrap);
      this._last = performance.now();
      this._loop = this._loop.bind(this); requestAnimationFrame(this._loop);
    }
    _resize() {
      const w = this.wrap.clientWidth || 600;
      const h = this.o.mini ? Math.round(clamp(w * 0.78, 220, 340)) : Math.round(clamp(w * 0.8, 300, 560));
      const dpr = window.devicePixelRatio || 1;
      [this.canvas, this.layer].forEach((c) => { c.width = w * dpr; c.height = h * dpr; });
      this.canvas.style.height = h + 'px';
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); this.layer.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
      this.W = w; this.H = h;
    }
    _space(ctx) {
      const W = this.W, H = this.H;
      const bg = ctx.createRadialGradient(W / 2, H * 0.4, 10, W / 2, H / 2, Math.max(W, H) * 0.75);
      bg.addColorStop(0, '#1e2a5a'); bg.addColorStop(1, '#070b1f');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      if (!this._stars) { let s = 7; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647); this._stars = Array.from({ length: 160 }, () => [rnd(), rnd(), rnd()]); }
      const off = (this.lon0 / 360) % 1;
      for (const [x, y, b] of this._stars) { ctx.globalAlpha = 0.25 + b * 0.7; ctx.fillStyle = b > 0.9 ? '#fde68a' : '#fff'; const px = (((x - off * 0.15) % 1) + 1) % 1 * W; ctx.fillRect(px, y * H, b > 0.8 ? 2 : 1.2, b > 0.8 ? 2 : 1.2); }
      ctx.globalAlpha = 1;
    }
    get R() { return Math.min(this.W, this.H) * 0.44 * this.zoom; }
    project(lat, lon) {
      const la = lat * DEG, dl = (lon - this.lon0) * DEG, la0 = this.lat0 * DEG;
      const x = Math.cos(la) * Math.sin(dl), y = Math.cos(la0) * Math.sin(la) - Math.sin(la0) * Math.cos(la) * Math.cos(dl);
      const c = Math.sin(la0) * Math.sin(la) + Math.cos(la0) * Math.cos(la) * Math.cos(dl);
      return [this.W / 2 + x * this.R, this.H / 2 - y * this.R, c];
    }
    unproject(sx, sy) {
      const x = (sx - this.W / 2) / this.R, y = (this.H / 2 - sy) / this.R; const rho = Math.hypot(x, y);
      if (rho > 1) return null;
      const c = Math.asin(rho), la0 = this.lat0 * DEG;
      const lat = rho ? Math.asin(Math.cos(c) * Math.sin(la0) + (y * Math.sin(c) * Math.cos(la0)) / rho) : la0;
      const lon = this.lon0 * DEG + Math.atan2(x * Math.sin(c), rho * Math.cos(c) * Math.cos(la0) - y * Math.sin(c) * Math.sin(la0));
      let L = lon / DEG; L = ((L + 540) % 360) - 180; return [lat / DEG, L];
    }
    flyTo(lat, lon, zoom) { this.target = { lat, lon, zoom: zoom || this.zoom }; this.auto = false; }
    fit(rings, pad = 1) {
      const b = bboxOf(rings); const lat = (b[1] + b[3]) / 2, lon = (b[0] + b[2]) / 2;
      const span = Math.max((b[3] - b[1]), (b[2] - b[0]) * Math.cos(lat * DEG), 1.5) * pad;
      const a = Math.min(Math.PI / 2, (span / 2) * DEG);
      const fill = Math.min(this.W, this.H) * 0.42 / (Math.min(this.W, this.H) * 0.44);
      this.flyTo(lat, lon, clamp(fill / Math.sin(a) * 0.95, 0.9, 40));
    }
    _bind() {
      const c = this.canvas; c.style.touchAction = 'none';
      const pts = new Map(); let start = null, moved = false, pinch = null, last = null;
      c.addEventListener('pointerdown', (e) => { c.setPointerCapture(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]); if (pts.size === 1) { start = [e.clientX, e.clientY]; last = start; moved = false; } this.auto = false; this.target = null; });
      c.addEventListener('pointermove', (e) => {
        if (!pts.has(e.pointerId)) { this._hover(e); return; }
        pts.set(e.pointerId, [e.clientX, e.clientY]);
        if (pts.size === 2) { const [a, b] = [...pts.values()]; const d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (pinch) this.setZoom(this.zoom * d / pinch); pinch = d; moved = true; return; }
        if (!last) return;
        const dx = e.clientX - last[0], dy = e.clientY - last[1]; last = [e.clientX, e.clientY];
        if (Math.hypot(e.clientX - start[0], e.clientY - start[1]) > 5) moved = true;
        if (!moved) return;
        this.lon0 -= dx / this.R / DEG / Math.max(0.35, Math.cos(this.lat0 * DEG));
        this.lat0 = clamp(this.lat0 + dy / this.R / DEG, -85, 85); this.dirty = true;
      });
      const up = (e) => {
        if (!pts.has(e.pointerId)) return;
        pts.delete(e.pointerId); pinch = null;
        if (!pts.size) { if (!moved && e.type === 'pointerup' && this.o.onTap) { const r = c.getBoundingClientRect(); this.o.onTap(e.clientX - r.left, e.clientY - r.top); } last = null; }
        else last = [...pts.values()][0];
      };
      c.addEventListener('pointerup', up); c.addEventListener('pointercancel', up);
      c.addEventListener('pointerleave', () => { if (this.hover) { this.hover = null; this.dirty = true; } });
      c.addEventListener('wheel', (e) => { e.preventDefault(); this.target = null; this.auto = false; this.setZoom(this.zoom * (e.deltaY < 0 ? 1.15 : 0.87)); }, { passive: false });
    }
    _hover(e) {
      if (!this.o.onHover) return; const r = this.canvas.getBoundingClientRect();
      const h = this.o.onHover(e.clientX - r.left, e.clientY - r.top); if (h !== this.hover) { this.hover = h; this.dirty = true; }
    }
    setZoom(z) { this.zoom = clamp(z, 0.8, this.o.maxZoom || 40); this.dirty = true; }
    _loop(now) {
      if (!this.wrap.isConnected) { this._ro.disconnect(); return; }
      const dt = Math.min(0.05, (now - this._last) / 1000); this._last = now;
      if (this.auto) { this.lon0 += dt * 6; this.dirty = true; }
      if (this.target) {
        const k = 1 - Math.pow(0.002, dt);
        let dl = ((this.target.lon - this.lon0 + 540) % 360) - 180;
        this.lon0 += dl * k; this.lat0 += (this.target.lat - this.lat0) * k;
        this.zoom *= Math.pow(this.target.zoom / this.zoom, k);
        if (Math.abs(dl) < 0.02 && Math.abs(this.target.lat - this.lat0) < 0.02 && Math.abs(Math.log(this.target.zoom / this.zoom)) < 0.003) this.target = null;
        this.dirty = true;
      }
      if (this.highlight || (this.markers.some((m) => m.pulse))) { this.pulse += dt; this.dirty = true; }
      const vis = this.wrap.getBoundingClientRect();
      if (this.dirty && vis.bottom > 0 && vis.top < innerHeight) { this.dirty = false; this.draw(); }
      requestAnimationFrame(this._loop);
    }
    path(ctx, ring) {
      const R = this.R, cx = this.W / 2, cy = this.H / 2; let any = false;
      ctx.moveTo(0, 0); let first = true;
      for (const [lo, la] of dense(ring)) {
        let [x, y, c] = this.project(la, lo);
        if (c > 0) any = true;
        else { const dx = x - cx, dy = y - cy, m = Math.hypot(dx, dy) || 1; x = cx + dx / m * R; y = cy + dy / m * R; }
        if (first) { ctx.moveTo(x, y); first = false; } else ctx.lineTo(x, y);
      }
      ctx.closePath(); return any;
    }
    rings(ctx, rings) { ctx.beginPath(); let any = false; rings.forEach((r) => { if (this.path(ctx, r)) any = true; }); return any; }
    draw() {
      const ctx = this.ctx, W = this.W, H = this.H, R = this.R, cx = W / 2, cy = H / 2;
      ctx.clearRect(0, 0, W, H);
      if (!this.o.mini) this._space(ctx);
      // alone dell'atmosfera
      const halo = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.16);
      halo.addColorStop(0, this.o.mini ? 'rgba(96,165,250,.35)' : 'rgba(125,211,252,.55)'); halo.addColorStop(1, 'rgba(125,211,252,0)');
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(cx, cy, R * 1.16, 0, TAU); ctx.fill();
      // oceano
      const g = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.35, R * 0.1, cx, cy, R * 1.05);
      g.addColorStop(0, '#9fd0ff'); g.addColorStop(1, '#2563eb');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill();
      // terra su un livello separato: estensioni e regioni vengono "ritagliate" sulla terra
      const L = this.layer.getContext('2d'); L.save(); L.setTransform(1, 0, 0, 1, 0, 0); L.clearRect(0, 0, this.layer.width, this.layer.height); L.restore();
      L.save(); L.beginPath(); L.arc(cx, cy, R, 0, TAU); L.clip();
      const land = this.o.landColor || '#7fb24a';
      if (window.GEO) {
        L.fillStyle = land; GEO.land.forEach((r) => { L.beginPath(); if (this.path(L, r)) L.fill(); });
        L.globalCompositeOperation = 'destination-out'; GEO.water.forEach((r) => { L.beginPath(); if (this.path(L, r)) L.fill(); });
      }
      L.globalCompositeOperation = 'source-atop';
      if (this.extent) {
        L.fillStyle = this.extent.color; L.globalAlpha = 0.62; if (this.rings(L, this.extent.rings)) L.fill();
        L.globalAlpha = 1; L.strokeStyle = Mini3D._.shade(this.extent.color, 0.6); L.lineWidth = 2; L.stroke();
      }
      L.globalAlpha = 1;
      for (const o of this.outlines) { if (this.rings(L, o.rings)) { if (o.fill) { L.fillStyle = o.fill; L.fill(); } L.strokeStyle = o.color || 'rgba(255,255,255,.7)'; L.lineWidth = o.width || 1; L.stroke(); } }
      if (this.hover && this.hover.rings) { L.fillStyle = 'rgba(255,255,255,.35)'; if (this.rings(L, this.hover.rings)) L.fill(); }
      if (this.highlight && this.highlight.rings.length) {
        const a = 0.5 + 0.18 * Math.sin(this.pulse * 3);
        L.fillStyle = `rgba(239,68,68,${a})`; if (this.rings(L, this.highlight.rings)) { L.fill(); L.strokeStyle = '#7f1d1d'; L.lineWidth = 2.2; L.stroke(); }
      }
      L.restore();
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(this.layer, 0, 0); ctx.restore();
      // reticolo leggero
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.clip(); ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = 1;
      const grid = (pts) => { ctx.beginPath(); let pen = false; for (const [la, lo] of pts) { const [x, y, c] = this.project(la, lo); if (c > 0) { pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y); pen = true; } else pen = false; } ctx.stroke(); };
      for (let la = -60; la <= 60; la += 30) { const p = []; for (let lo = -180; lo <= 180; lo += 4) p.push([la, lo]); grid(p); }
      for (let lo = -180; lo < 180; lo += 30) { const p = []; for (let la = -88; la <= 88; la += 4) p.push([la, lo]); grid(p); }
      ctx.restore();
      // bordo e luce
      const sh = ctx.createRadialGradient(cx - R * 0.4, cy - R * 0.45, R * 0.05, cx, cy, R);
      sh.addColorStop(0, 'rgba(255,255,255,.28)'); sh.addColorStop(0.5, 'rgba(255,255,255,0)'); sh.addColorStop(1, 'rgba(0,20,60,.28)');
      ctx.fillStyle = sh; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(30,58,138,.5)'; ctx.lineWidth = 1.5; ctx.stroke();
      // segnaposti ed etichette (senza sovrapposizioni)
      const boxes = [];
      const free = (b) => !boxes.some((q) => b[0] < q[2] && b[2] > q[0] && b[1] < q[3] && b[3] > q[1]);
      const ms = this.markers.slice().sort((a, b) => (b.prio || 0) - (a.prio || 0));
      for (const m of ms) {
        const [x, y, c] = this.project(m.lat, m.lon); if (c < 0.05) continue;
        if (x < -20 || y < -20 || x > W + 20 || y > H + 20) continue;
        const r = m.r || 5;
        if (m.pulse) { const k = (this.pulse * 0.9) % 1; ctx.strokeStyle = `rgba(239,68,68,${1 - k})`; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r + 4 + k * 18, 0, TAU); ctx.stroke(); }
        if (m.dot !== false) { ctx.fillStyle = m.color || '#f97316'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); }
        if (m.label) {
          ctx.font = (m.bold ? '800 ' : '700 ') + (m.size || 12) + 'px Nunito, system-ui, sans-serif';
          const w = ctx.measureText(m.label).width; const lx = x + r + 4, b = [lx - 2, y - 9, lx + w + 2, y + 9];
          if (!m.force && !free(b)) continue; boxes.push(b);
          ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round'; ctx.lineWidth = 3.5; ctx.strokeStyle = 'rgba(255,255,255,.92)'; ctx.strokeText(m.label, lx, y);
          ctx.fillStyle = m.ink || '#1f2937'; ctx.fillText(m.label, lx, y);
        }
      }
      if (this.o.after) this.o.after(ctx);
    }
  }

  /* ================= scelta del luogo toccato ================= */
  function pickAt(globe, sx, sy) {
    const ll = globe.unproject(sx, sy); if (!ll) return null;
    const [lat, lon] = ll;
    // città vicine al dito (solo se il globo è abbastanza vicino)
    if (globe.zoom >= 5) {
      let best = null, bd = 16;
      CAT.list.filter((p) => p.kind === 'city').forEach((p) => { const [x, y, c] = globe.project(p.lat, p.lon); if (c <= 0) return; const d = Math.hypot(x - sx, y - sy); if (d < bd) { bd = d; best = p; } });
      if (best) return { place: best, lat, lon };
    }
    const inside = CAT.list.filter((p) => p.kind !== 'city' && p.rings.length && inPlace(lon, lat, p));
    if (inside.length) {
      inside.sort((a, b) => level(b) - level(a) || a.area - b.area);
      // con il globo lontano, le regioni italiane sono troppo piccole: si sceglie il Paese
      const best = globe.zoom < 2.2 ? (inside.find((p) => level(p) <= 2) || inside[0]) : inside[0];
      return { place: best, lat, lon };
    }
    let best = null, bd = 1e9;
    CAT.list.forEach((p) => { if (p.kind === 'city') return; const d = gcDist(lat, lon, p.lat, p.lon); if (d < bd) { bd = d; best = p; } });
    const onLand = window.GEO && GEO.land.some((r) => inRing(lon, lat, r));
    return best && { place: best, lat, lon, sea: !onLand };
  }

  /* ================= PAGINA: globo ed elenco ================= */
  async function pageIndex(m) {
    m.innerHTML = `<p class="muted">${t('pl.loading')}</p>`;
    await loadCatalog();
    if (!/^#\/luoghi\/?$/.test(location.hash)) return;
    m.innerHTML = '';
    m.classList.add('pl-page');
    m.appendChild(el('header', 'pl-head', `<h1>🗺️ ${t('pl.title')}</h1><p class="lead">${t('pl.sub')}</p>`));
    const grid = el('div', 'pl-grid'); m.appendChild(grid);
    const left = el('section', 'card pl-globe-card'); const side = el('aside', 'card pl-side'); grid.append(left, side);
    const tools = el('div', 'pl-tools');
    tools.innerHTML = `<button type="button" class="btn btn-small pl-where">📍 ${t('pl.where')}</button>` +
      `<span class="pl-zoom"><button type="button" class="btn btn-small btn-ghost" data-z="in" title="${t('pl.zoomIn')}" aria-label="${t('pl.zoomIn')}">＋</button><button type="button" class="btn btn-small btn-ghost" data-z="out" title="${t('pl.zoomOut')}" aria-label="${t('pl.zoomOut')}">－</button><button type="button" class="btn btn-small btn-ghost" data-z="reset" title="${t('pl.reset')}">🌍</button></span>`;
    left.appendChild(tools);
    let sel = null;
    const ready = CAT.list.filter((p) => p.ready);
    const globe = new Globe(left, {
      auto: !homeId(), lat: 38, lon: 15, zoom: 1,
      onTap: (x, y) => { const r = pickAt(globe, x, y); if (r) select(r.place, { sea: r.sea, fly: false }); },
      onHover: (x, y) => { const r = pickAt(globe, x, y); return r && !r.sea && r.place !== sel ? r.place : null; }
    });
    left.appendChild(el('p', 'muted small pl-hint', '🖐️ ' + t('pl.tapHint')));
    tools.querySelectorAll('[data-z]').forEach((b) => (b.onclick = () => {
      const z = b.dataset.z; globe.target = null; globe.auto = false;
      if (z === 'in') globe.flyTo(globe.lat0, globe.lon0, Math.min(40, globe.zoom * 1.8));
      else if (z === 'out') globe.flyTo(globe.lat0, globe.lon0, Math.max(0.8, globe.zoom / 1.8));
      else globe.flyTo(30, globe.lon0, 1);
    }));
    tools.querySelector('.pl-where').onclick = () => whereDialog((p) => { setHome(p.id); select(p); refreshMarkers(); });

    function refreshMarkers() {
      const h = homeId();
      globe.markers = [];
      CAT.list.forEach((p) => {
        const lv = level(p); const isSel = sel && p.id === sel.id;
        const zoomOk = lv === 1 ? true : lv === 2 ? true : lv === 3 ? globe.zoom > 3 : globe.zoom > 6;
        if (!isSel && !p.ready && !(lv === 4 && globe.zoom > 6)) {
          if (lv === 1 && globe.zoom < 2.6) globe.markers.push({ lat: p.lat, lon: p.lon, label: nameOf(p), dot: false, ink: '#334155', size: 12, prio: 1 });
          return;
        }
        if (!isSel && !zoomOk) return;
        if (!isSel && lv === 2 && !p.ready && globe.zoom < 2.6) return;
        globe.markers.push({ lat: p.lat, lon: p.lon, label: (p.id === h ? '🏠 ' : '') + nameOf(p), color: isSel ? '#ef4444' : p.ready ? '#f97316' : '#94a3b8', r: isSel ? 7 : p.ready ? 5 : 3.5, prio: isSel ? 10 : p.ready ? 5 - lv * 0.1 : 2, bold: isSel, pulse: isSel, force: isSel });
      });
      globe.outlines = globe.zoom > 3 ? CAT.list.filter((p) => p.kind === 'region').map((p) => ({ rings: p.rings, color: 'rgba(255,255,255,.75)', width: 1 })) : [];
      globe.dirty = true;
    }
    let lastZ = 0;
    const zw = setInterval(() => { if (!globe.wrap.isConnected) return clearInterval(zw); const k = globe.zoom > 6 ? 3 : globe.zoom > 3 ? 2 : globe.zoom > 2.6 ? 1 : 0; if (k !== lastZ) { lastZ = k; refreshMarkers(); } }, 250);

    function select(p, o = {}) {
      sel = p; globe.highlight = p.rings.length ? { rings: p.rings } : null; globe.hover = null;
      if (o.fly !== false) { if (p.rings.length) globe.fit(p.rings, p.kind === 'region' ? 4 : 1.6); else globe.flyTo(p.lat, p.lon, 12); }
      else { globe.target = null; }
      refreshMarkers(); renderSide(o.sea);
      if (o.scroll && innerWidth < 860) side.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    function renderSide(sea) {
      if (!sel) {
        side.innerHTML = `<h3>👆 ${t('pl.pickFirst')}</h3>`;
        const h = homeId() && CAT.byId[homeId()];
        if (h) { const b = el('button', 'chip', '🏠 ' + esc(nameOf(h))); b.onclick = () => select(h); side.appendChild(b); }
        side.appendChild(readyChips((p) => select(p)));
        return;
      }
      const owner = storyOwner(sel);
      const ch = chain(sel);
      side.innerHTML = (sea ? `<p class="pl-sea">🌊 ${t('pl.sea')}</p>` : '') +
        `<div class="pl-chain">${ch.map((c) => `<button type="button" class="chip ${c === sel ? 'sel' : ''}" data-id="${c.id}">${icon(c)} ${esc(nameOf(c))}</button>`).join('<span>›</span>')}</div>` +
        `<h2 class="pl-selname">${icon(sel)} ${esc(nameOf(sel))}</h2>`;
      side.querySelectorAll('.pl-chain [data-id]').forEach((b) => (b.onclick = () => select(CAT.byId[b.dataset.id])));
      const info = el('div', 'pl-status');
      if (owner) {
        const seen = erasSeen(owner.id).length;
        info.innerHTML = owner === sel ? `<span class="pill pl-ok">📖 ${t('pl.ready', { n: owner.eras || '…' })}</span>` : `<span class="pill">⏳ ${t('pl.coming')}</span><p>${t('pl.comingUse', { name: '<b>' + esc(nameOf(owner)) + '</b>' })}</p>`;
        if (seen) info.innerHTML += `<p class="small muted">${t('pl.explored', { a: seen, b: owner.eras || '?' })}</p>`;
        const a = el('a', 'btn btn-big pl-open', '📜 ' + t('pl.open') + ' →'); a.href = '#/luoghi/' + sel.id; info.appendChild(a);
      } else {
        info.innerHTML = `<span class="pill">⏳ ${t('pl.coming')}</span><p class="muted">${t('pl.comingText')}</p>`;
        info.appendChild(readyChips((p) => select(p)));
      }
      side.appendChild(info);
      if (homeId() !== sel.id && sel.kind !== 'area') { const hb = el('button', 'btn btn-small btn-ghost', '🏠 ' + t('pl.home') + '?'); hb.onclick = () => { setHome(sel.id); refreshMarkers(); renderSide(); }; side.appendChild(hb); }
    }
    function readyChips(onPick) {
      const w = el('div', 'pl-chips');
      ready.forEach((p) => { const b = el('button', 'chip', `${icon(p)} ${esc(nameOf(p))}`); b.type = 'button'; b.onclick = () => onPick(p); w.appendChild(b); });
      return w;
    }

    // elenco e ricerca
    const listCard = el('section', 'card pl-list');
    listCard.innerHTML = `<div class="pl-search"><input type="search" placeholder="${t('pl.search')}" aria-label="${t('pl.search')}"></div><div class="pl-results"></div>`;
    m.appendChild(listCard);
    const input = listCard.querySelector('input'), results = listCard.querySelector('.pl-results');
    const groupOf = (p) => (p.kind === 'city' ? 'citta' : p.kind === 'region' ? 'italia' : p.parent === 'europa' ? 'europa' : 'mondo');
    const renderList = () => {
      const q = norm(input.value.trim());
      results.innerHTML = '';
      const match = (p) => !q || p.n.some((x) => norm(x).includes(q)) || norm(p.id).includes(q);
      if (!q) {
        results.appendChild(el('h3', '', '⭐ ' + t('pl.readyList')));
        const g = el('div', 'pl-cards'); ready.forEach((p) => g.appendChild(placeCard(p))); results.appendChild(g);
      }
      const groups = ['italia', 'europa', 'mondo', 'citta'];
      let n = 0;
      groups.forEach((gk) => {
        const items = CAT.list.filter((p) => groupOf(p) === gk && match(p)).sort((a, b) => nameOf(a).localeCompare(nameOf(b), i18n.lang));
        if (!items.length) return; n += items.length;
        const d = el('details', 'pl-group'); if (q) d.open = true;
        d.innerHTML = `<summary><b>${t('pl.g.' + gk)}</b> <small class="muted">${items.length}</small></summary>`;
        const w = el('div', 'pl-chips');
        items.forEach((p) => {
          const b = el('button', 'chip' + (p.ready ? ' pl-r' : ''), `${icon(p)} ${esc(nameOf(p))}${p.ready ? ' 📖' : ''}`); b.type = 'button';
          b.onclick = () => { select(p, { scroll: true }); window.scrollTo({ top: grid.offsetTop - 70, behavior: 'smooth' }); };
          w.appendChild(b);
        });
        d.appendChild(w); results.appendChild(d);
      });
      if (q && !n) results.appendChild(el('p', 'muted', t('pl.none')));
    };
    input.oninput = renderList; renderList();
    // numero di epoche (dai file delle storie già caricati)
    const h = homeId() && CAT.byId[homeId()];
    if (h) { globe.lat0 = h.lat; globe.lon0 = h.lon; select(h); } else renderSide();
    refreshMarkers();
  }

  function placeCard(p) {
    const a = el('a', 'pl-card');
    a.href = '#/luoghi/' + p.id;
    const seen = erasSeen(p.id).length, tot = p.eras || 0, done = Store.topic(pkey(p.id)).done;
    a.innerHTML = `<span class="pl-flag">${icon(p)}</span><b>${esc(nameOf(p))}</b><small>${tot} ${t('pl.eras')}${done ? ' · 🏅' : ''}</small>${Z.bar(tot ? Math.round(seen / tot * 100) : 0, '#f97316')}`;
    return a;
  }

  function whereDialog(onPick) {
    const dlg = el('div', 'modal pl-modal');
    dlg.innerHTML = `<div class="modal-box"><h2>📍 ${t('pl.whereTitle')}</h2><p class="muted">${t('pl.whereText')}</p><input type="search" placeholder="${t('pl.search')}"><div class="pl-wlist"></div><div class="row"><button type="button" class="btn btn-ghost cancel">${t('misc.cancel')}</button></div></div>`;
    document.body.appendChild(dlg);
    const inp = dlg.querySelector('input'), list = dlg.querySelector('.pl-wlist');
    const items = CAT.list.filter((p) => p.kind !== 'area');
    const show = () => {
      const q = norm(inp.value.trim()); list.innerHTML = '';
      const order = { city: 0, region: 1, country: 2 };
      items.filter((p) => !q || p.n.some((x) => norm(x).includes(q)))
        .sort((a, b) => (order[a.kind] - order[b.kind]) || nameOf(a).localeCompare(nameOf(b), i18n.lang))
        .forEach((p) => {
          const par = CAT.byId[p.parent];
          const b = el('button', 'pl-witem', `<span>${icon(p)}</span> <b>${esc(nameOf(p))}</b> <small class="muted">${par ? esc(nameOf(par)) : ''}</small>`); b.type = 'button';
          b.onclick = () => { dlg.remove(); onPick(p); }; list.appendChild(b);
        });
    };
    inp.oninput = show; show(); inp.focus();
    dlg.querySelector('.cancel').onclick = () => dlg.remove();
    dlg.onclick = (e) => { if (e.target === dlg) dlg.remove(); };
  }

  /* ================= PAGINA: storia di un luogo ================= */
  async function pagePlace(m, id) {
    m.innerHTML = `<p class="muted">${t('pl.loading')}</p>`;
    await loadCatalog();
    const place = CAT.byId[id];
    if (!place) { location.hash = '#/luoghi'; return; }
    const owner = storyOwner(place);
    const [S] = await Promise.all([owner ? loadStory(owner.id) : null, loadEmpires()]);
    if (location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent)[1] !== id) return;
    m.innerHTML = ''; m.classList.add('pl-page');
    Store.visit(pkey(id));
    const crumbs = chain(place).map((c) => c === place ? `<b>${esc(nameOf(c))}</b>` : `<a href="#/luoghi/${c.id}">${esc(nameOf(c))}</a>`).join(' › ');
    m.appendChild(el('div', 'crumbs', `<a href="#/luoghi">🗺️ ${t('pl.title')}</a> › ${crumbs}`));
    if (!S) return comingPage(m, place);
    const eras = S.eras;
    const sName = (S.names && (S.names[i18n.lang] || S.names.it)) || nameOf(owner);
    m.appendChild(el('header', 'pl-head', `<h1>${icon(owner)} ${esc(place === owner ? sName : nameOf(place))}</h1><p class="lead">${S.intro || ''}</p>`));
    if (place !== owner) m.appendChild(el('div', 'callout c-remember', '🧭 ' + t('pl.fallback', { name: '<b>' + esc(nameOf(place)) + '</b>', parent: `<a href="#/luoghi/${owner.id}"><b>${esc(sName)}</b></a>` }) + (S.focus && S.focus[place.id] ? `<div class="pl-focus">${S.focus[place.id]}</div>` : '')));

    const start = S.start != null ? S.start : eras[0].from, end = NOW;
    const ax = makeAxis(start, end);
    let year = start, cur = -1, playing = false;

    /* --- barra del tempo --- */
    const tl = el('section', 'card pl-time');
    tl.innerHTML = `<div class="pl-now"><span class="pl-year"></span><span class="pl-eraname"></span></div>
      <div class="pl-track"><div class="pl-band"></div><div class="pl-evts"></div><div class="pl-cursor"></div>
      <input type="range" min="0" max="1000" step="1" aria-label="${t('pl.timeline')}"></div>
      <div class="pl-ticks"></div>
      <div class="pl-ctl"><button type="button" class="btn btn-small btn-ghost" data-a="prev" title="${t('pl.prev')}" aria-label="${t('pl.prev')}">⏮</button>
      <button type="button" class="btn btn-small" data-a="play">▶ ${t('pl.play')}</button>
      <button type="button" class="btn btn-small btn-ghost" data-a="next" title="${t('pl.next')}" aria-label="${t('pl.next')}">⏭</button>
      <span class="muted small">↔️ ${t('pl.drag')}</span><span class="pl-prog small"></span></div>`;
    m.appendChild(tl);
    const band = tl.querySelector('.pl-band'), range = tl.querySelector('input'), cursor = tl.querySelector('.pl-cursor');
    eras.forEach((e, k) => {
      const a = ax.pos(e.from), b = ax.pos(Math.min(e.to, NOW));
      const s = el('i', '', ''); s.style.left = a * 100 + '%'; s.style.width = Math.max(0.4, (b - a) * 100) + '%'; s.style.background = e.color || '#94a3b8'; s.title = e.title;
      s.dataset.k = k; band.appendChild(s);
    });
    const evw = tl.querySelector('.pl-evts');
    eras.forEach((e) => (e.events || []).forEach((v) => { const d = el('b'); d.style.left = ax.pos(v.year) * 100 + '%'; d.title = fmtYear(v.year) + ' – ' + v.text.replace(/<[^>]+>/g, ''); evw.appendChild(d); }));
    const ticks = tl.querySelector('.pl-ticks');
    let lastP = -1; const minGap = Math.max(0.085, 90 / Math.max(200, (m.clientWidth || 600) - 40));
    [-2e6, -1e6, -5e5, -2e5, -1e5, -4e4, -1e4, -5000, -3000, -1000, 1, 500, 1000, 1500, 1800, 1900, 2000].forEach((y) => {
      if (y < start || y > end) return; const p = ax.pos(y); if (p - lastP < minGap || p > 1 - minGap * 0.8) return; lastP = p;
      const s = el('span', '', y < -10000 ? '−' + Math.round(-y / 1000) + 'k' : y < 0 ? '−' + (-y) : y === 1 ? '0' : String(y)); s.style.left = p * 100 + '%'; ticks.appendChild(s);
    });
    const tEnd = el('span', 'end', t('pl.today')); tEnd.style.left = '100%'; ticks.appendChild(tEnd);

    /* --- scheda dell'epoca + mappa --- */
    const body = el('div', 'pl-body'); m.appendChild(body);
    const card = el('section', 'card pl-era'); const mapCard = el('section', 'card pl-mapcard');
    body.append(card, mapCard);
    mapCard.innerHTML = `<h3>🗺️ ${t('pl.map')}</h3>`;
    const mapBtns = el('div', 'pl-mapbtns', `<button type="button" class="chip" data-v="region">📍 ${t('pl.mapRegion')}</button><button type="button" class="chip" data-v="empire">🌍 ${t('pl.mapEmpire')}</button>`);
    const regionRings = place.rings.length ? place.rings : owner.rings;
    const mini = new Globe(mapCard, { mini: true, lat: place.lat, lon: place.lon, zoom: 3, landColor: '#b7cf8f' });
    mini.highlight = { rings: regionRings };
    mini.markers = [{ lat: place.lat, lon: place.lon, label: nameOf(place), color: '#ef4444', r: 5, pulse: true, force: true, bold: true }];
    const mapLegend = el('div', 'pl-legend');
    mapCard.append(mapBtns, mapLegend);
    let mapView = null, mapUser = false;
    const setMapView = (v) => {
      mapView = v; mapBtns.querySelectorAll('[data-v]').forEach((b) => b.classList.toggle('sel', b.dataset.v === v));
      if (v === 'empire' && mini.extent) mini.fit(mini.extent.rings.concat(regionRings), 1.15);
      else mini.fit(regionRings, place.kind === 'region' || place.kind === 'city' ? 5 : 2.2);
    };
    mapBtns.querySelectorAll('[data-v]').forEach((b) => (b.onclick = () => { mapUser = true; setMapView(b.dataset.v); }));
    const extentOf = (e) => {
      if (!e.extent) return null;
      if (Array.isArray(e.extent)) return { rings: Array.isArray(e.extent[0][0]) ? e.extent : [e.extent], name: e.ruler };
      if (e.extent.startsWith('place:')) { const p = CAT.byId[e.extent.slice(6)]; return p && { rings: p.rings, name: nameOf(p) }; }
      const E = EMPIRES[e.extent]; return E && { rings: E.rings, name: E.name + (E.date ? ' (' + E.date + ')' : '') };
    };

    /* --- chi governava (barre impilate) --- */
    const who = el('section', 'card pl-who', `<h3>👑 ${t('pl.who')}</h3><p class="muted small">${t('pl.whoHint')}</p>`);
    const gantt = el('div', 'pl-gantt'); who.appendChild(gantt); m.appendChild(who);
    const rows = []; const rowIx = {};
    const addBar = (name, from, to, color, k) => {
      if (!(name in rowIx)) { rowIx[name] = rows.length; rows.push({ name, bars: [] }); }
      rows[rowIx[name]].bars.push({ from, to, color, k });
    };
    eras.forEach((e, k) => addBar(e.ruler, e.from, Math.min(e.to, NOW), e.color, k));
    (S.bands || []).forEach((b) => addBar(b.name, b.from, Math.min(b.to, NOW), b.color));
    const gLine = el('div', 'pl-gline');
    rows.forEach((r) => {
      const row = el('div', 'pl-grow'); const lab = el('span', 'pl-glab', esc(r.name)); const tr = el('div', 'pl-gtrack');
      r.bars.forEach((b) => {
        const a = ax.pos(b.from), c = ax.pos(b.to); const s = el('button', 'pl-gbar'); s.type = 'button';
        s.style.left = a * 100 + '%'; s.style.width = Math.max(0.6, (c - a) * 100) + '%'; s.style.background = b.color || '#94a3b8';
        s.title = `${r.name}: ${fmtShort(b.from)} – ${fmtShort(b.to)}`; s.setAttribute('aria-label', s.title);
        s.onclick = () => { stop(); setYear(b.k != null ? eras[b.k].from : b.from + 1, true); tl.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
        tr.appendChild(s);
      });
      row.append(lab, tr); gantt.appendChild(row);
    });
    gantt.appendChild(gLine);

    /* --- progressi --- */
    const progEl = tl.querySelector('.pl-prog');
    const showProg = () => {
      const seen = erasSeen(owner.id).length;
      progEl.innerHTML = seen >= eras.length ? '🏅 ' + t('pl.allDone', { name: esc(sName) }) : '🧭 ' + t('pl.explored', { a: seen, b: eras.length });
    };
    let seenTimer = null;

    function eraAt(y) { let k = 0; for (let i = 0; i < eras.length; i++) if (eras[i].from <= y) k = i; return k; }
    function setYear(y, fromUser) {
      year = clamp(y, start, end);
      const p = ax.pos(year);
      range.value = Math.round(p * 1000);
      cursor.style.left = p * 100 + '%';
      gLine.style.left = `calc(var(--glab) + (100% - var(--glab)) * ${p})`;
      tl.querySelector('.pl-year').textContent = fmtYear(year);
      const k = eraAt(year);
      if (k !== cur) { cur = k; renderEra(k); }
    }
    function renderEra(k) {
      const e = eras[k];
      tl.querySelector('.pl-eraname').innerHTML = `<i style="background:${e.color}"></i>${esc(e.title)}`;
      band.querySelectorAll('i').forEach((s) => s.classList.toggle('on', +s.dataset.k === k));
      gantt.querySelectorAll('.pl-gbar').forEach((b) => b.classList.remove('on'));
      card.style.setProperty('--ec', e.color || '#64748b');
      const lessons = (e.lessons || []).filter((x) => LESSON[x]);
      card.innerHTML = `<div class="pl-era-top"><span class="pl-period">${fmtShort(e.from)} → ${e.to >= NOW ? t('pl.today') : fmtShort(e.to)}</span><span class="pl-k">${k + 1}/${eras.length}</span></div>
        <h2>${esc(e.title)}</h2>
        <p class="pl-ruler"><b>👑 ${t('pl.ruler')}:</b> <span style="background:${e.color}">${esc(e.ruler)}</span></p>
        <div class="pl-html">${e.html || ''}</div>
        ${e.life ? `<div class="pl-box pl-life"><h4>🏠 ${t('pl.life')}</h4>${e.life}</div>` : ''}
        ${e.why ? `<div class="pl-box pl-whyb"><h4>🤔 ${t('pl.why')}</h4>${e.why}</div>` : ''}
        ${(e.events || []).length ? `<div class="pl-box"><h4>📅 ${t('pl.events')}</h4><ul class="pl-evlist">${e.events.map((v) => `<li><button type="button" class="pl-evy" data-y="${v.year}">${fmtShort(v.year)}</button> ${v.text}</li>`).join('')}</ul></div>` : ''}
        ${lessons.length ? `<div class="pl-lessons"><h4>📚 ${t('pl.lessons')}</h4>${lessons.map((x) => `<a class="chip" href="#/t/${x}">🏛️ ${esc(LESSON[x])}</a>`).join('')}</div>` : ''}`;
      card.querySelectorAll('.pl-evy').forEach((b) => (b.onclick = () => { stop(); setYear(+b.dataset.y, true); }));
      const ex = extentOf(e);
      mini.extent = ex ? { rings: ex.rings, color: e.color || '#f59e0b' } : null; mini.dirty = true;
      mapLegend.innerHTML = ex ? `<span><i style="background:${e.color}"></i>${esc(ex.name)}</span><span><i style="background:#ef4444"></i>${esc(nameOf(place))}</span>` : `<span><i style="background:#ef4444"></i>${esc(nameOf(place))}</span>`;
      mapBtns.style.display = ex ? '' : 'none';
      setMapView(ex ? (mapUser ? mapView : 'empire') : 'region');
      clearTimeout(seenTimer);
      seenTimer = setTimeout(() => { if (markEra(owner.id, k, eras.length)) celebrate(); showProg(); }, playing ? 400 : 1200);
    }
    range.oninput = () => { stop(); setYear(ax.year(range.value / 1000), true); };
    let raf = null, lastT = 0;
    const playBtn = tl.querySelector('[data-a=play]');
    function stop() { playing = false; cancelAnimationFrame(raf); playBtn.innerHTML = '▶ ' + t('pl.play'); }
    function play() {
      if (ax.pos(year) >= 0.999) setYear(start);
      playing = true; playBtn.innerHTML = '⏸ ' + t('pl.pause'); lastT = performance.now();
      const step = (now) => {
        if (!playing || !tl.isConnected) return;
        const dt = Math.min(0.1, (now - lastT) / 1000); lastT = now;
        const p = ax.pos(year) + dt / 45;
        if (p >= 1) { setYear(end); stop(); return; }
        setYear(ax.year(p)); raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }
    playBtn.onclick = () => (playing ? stop() : play());
    tl.querySelector('[data-a=prev]').onclick = () => { stop(); setYear(eras[Math.max(0, cur - 1)].from); };
    tl.querySelector('[data-a=next]').onclick = () => { stop(); setYear(eras[Math.min(eras.length - 1, cur + 1)].from); };
    range.onkeydown = (e) => { if (e.key === 'PageDown' || e.key === 'PageUp') { e.preventDefault(); setYear(eras[clamp(cur + (e.key === 'PageUp' ? 1 : -1), 0, eras.length - 1)].from); } };

    /* --- sezioni extra (blocchi delle lezioni) e quiz --- */
    (S.sections || []).forEach((s, i) => m.appendChild(Z.renderSection(s, pkey(owner.id), 'p' + i)));
    const qc = el('section', 'card pl-quiz', `<h2>✏️ ${t('pl.quiz')}</h2>`); m.appendChild(qc);
    const makeQuiz = () => { qc.querySelectorAll('.quiz').forEach((x) => x.remove()); qc.appendChild(Quiz.render(buildQuiz(S, eras, sName), { onDone: (ok, n) => Store.quizResult(pkey(owner.id), 'auto', ok, n), onRetry: makeQuiz, retryLabel: t('quiz.newSet') })); };
    makeQuiz();
    const foot = el('div', 'topic-foot'); const back = el('a', 'btn btn-ghost', '← ' + t('pl.back')); back.href = '#/luoghi'; foot.appendChild(back); m.appendChild(foot);

    showProg();
    const startYear = S.focusYear || eras[0].from;
    setYear(startYear);
  }

  function comingPage(m, place) {
    m.appendChild(el('header', 'pl-head', `<h1>${icon(place)} ${esc(t('pl.comingTitle', { name: nameOf(place) }))}</h1><p class="lead">${t('pl.comingText')}</p>`));
    const g = el('div', 'pl-cards'); CAT.list.filter((p) => p.ready).forEach((p) => g.appendChild(placeCard(p)));
    const c = el('section', 'card'); c.appendChild(g); m.appendChild(c);
    const mc = el('section', 'card'); m.appendChild(mc);
    const gl = new Globe(mc, { mini: true, lat: place.lat, lon: place.lon, zoom: 2 });
    gl.highlight = place.rings.length ? { rings: place.rings } : null; gl.markers = [{ lat: place.lat, lon: place.lon, label: nameOf(place), color: '#ef4444', pulse: true, force: true }];
    if (place.rings.length) setTimeout(() => gl.fit(place.rings, 2), 50);
    const back = el('a', 'btn', '← ' + t('pl.back')); back.href = '#/luoghi'; m.appendChild(back);
  }

  function celebrate() {
    const c = el('div', 'confetti'); const cols = ['#f97316', '#22c55e', '#3b82f6', '#eab308', '#ec4899', '#a855f7'];
    for (let i = 0; i < 70; i++) { const p = el('i'); p.style.left = Math.random() * 100 + '%'; p.style.background = cols[i % cols.length]; p.style.animationDelay = Math.random() * 0.8 + 's'; c.appendChild(p); }
    document.body.appendChild(c); setTimeout(() => c.remove(), 3800);
  }

  /* ================= quiz generato dalle epoche ================= */
  function buildQuiz(S, eras, place) {
    const sh = Z.shuffle; const qs = [];
    const per = (e) => `${fmtShort(e.from)} – ${e.to >= NOW ? t('pl.today') : fmtShort(e.to)}`;
    // 1. ordina 4 epoche
    const n = eras.length; const pick = [0, Math.floor(n / 3), Math.floor(2 * n / 3), n - 1].filter((v, i, a) => a.indexOf(v) === i).map((i) => eras[i]);
    if (pick.length >= 3) qs.push({ type: 'order', q: t('pl.q.order', { place }), items: pick.map((e) => e.title), explain: t('pl.q.exOrder', { list: pick.map((e) => e.title).join(' → ') }) });
    // 2-3. chi governava
    const rulers = [...new Set(eras.map((e) => e.ruler))];
    sh(eras.filter((e) => e.from > -3000)).slice(0, 2).forEach((e) => {
      const others = sh(rulers.filter((r) => r !== e.ruler)).slice(0, 3); if (others.length < 2) return;
      const y = niceYear(e.to >= NOW ? (e.from + NOW) / 2 : (e.from + e.to) / 2);
      qs.push({ type: 'mc', q: t('pl.q.ruler', { year: fmtYear(y), place }), options: [e.ruler, ...others], answer: 0, explain: t('pl.q.exRuler', { from: fmtShort(e.from), to: e.to >= NOW ? t('pl.today') : fmtShort(e.to), ruler: e.ruler }) });
    });
    // 4. in quale epoca?
    const evs = []; eras.forEach((e, k) => (e.events || []).forEach((v) => evs.push({ v, k })));
    sh(evs).slice(0, 2).forEach(({ v, k }) => {
      const others = sh(eras.map((e, i) => i).filter((i) => Math.abs(i - k) >= 2)).slice(0, 2);
      if (others.length < 2) return;
      qs.push({ type: 'mc', q: t('pl.q.event', { text: v.text.replace(/<[^>]+>/g, '') }), options: [eras[k].title + ' (' + per(eras[k]) + ')', ...others.map((i) => eras[i].title + ' (' + per(eras[i]) + ')')], answer: 0, explain: t('pl.q.exEvent', { year: fmtYear(v.year), era: eras[k].title }) });
    });
    // 5. vero o falso: prima / dopo
    const [i, j] = sh(eras.map((e, k) => k)).slice(0, 2); if (i != null && j != null && i !== j) {
      const A = eras[i], B = eras[j];
      qs.push({ type: 'tf', q: t('pl.q.before', { a: A.title, b: B.title, place }), answer: A.from < B.from, explain: t('pl.q.exBefore', { a: A.title, b: B.title, ya: fmtShort(A.from), yb: fmtShort(B.from) }) });
    }
    return qs;
  }

  /* titoli delle lezioni del programma (per i collegamenti) */
  const LESSON = {};
  (function () {
    const C = window.CURRICULUM; if (!C) return;
    for (const y of C.years) for (const s of C.subjects) for (const e of (C.program[y][s] || [])) Object.defineProperty(LESSON, e[0], { get: () => i18n.topicTitle(e), enumerable: true });
  })();

  /* ================= router della sezione ================= */
  ZPages.luoghi = (m, id) => (id ? pagePlace(m, id) : pageIndex(m));

  /* ================= scena 3D riutilizzabile nelle lezioni =================
     { type: '3d', scene: 'placeGlobe', options: { place: 'piemonte', extent: 'roma-117', color: '#dc2626', label: '…' } } */
  if (window.Mini3D) {
    Mini3D.scenes.placeGlobe = function (host, o) {
      const g = new Globe(host, { mini: true, lat: 40, lon: 12, zoom: 1.5 });
      Promise.all([loadCatalog(), loadEmpires()]).then(() => {
        const p = CAT.byId[o.place];
        if (p) { g.highlight = { rings: p.rings }; g.markers = [{ lat: p.lat, lon: p.lon, label: o.label || nameOf(p), color: '#ef4444', pulse: true, force: true }]; }
        const E = o.extent && (EMPIRES[o.extent] || (o.extent.startsWith && o.extent.startsWith('place:') && CAT.byId[o.extent.slice(6)]));
        if (E) g.extent = { rings: E.rings, color: o.color || '#f59e0b' };
        const all = (E ? E.rings : []).concat(p ? p.rings : []);
        if (all.length) g.fit(all, E ? 1.15 : 3); g.dirty = true;
      });
      return g;
    };
  }
  window.ZPlaces = { Globe, makeAxis, fmtYear, catalog: () => CAT, stories: STORIES, empires: EMPIRES };
})();
