/* Zainetto · Spazio: sezione di astronomia indipendente dalla classe.
   Pagine: #/spazio (viste 3D + catalogo), #/spazio/<id> (scheda), #/spazio/3d/<vista>[:<oggetto>].
   Scene 3D registrate in Mini3D.scenes: spaceSolar, spaceStars, spaceCosmos, spaceSky, spaceBody.
   Dati caricati al bisogno da data/space/*.js (vedi data/space/FORMATO.md). */
(function () {
  'use strict';
  const TAU = Math.PI * 2, D2R = Math.PI / 180, R2D = 180 / Math.PI;
  const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const LI = () => Math.max(0, ['it', 'en', 'fr', 'ru', 'ro', 'de'].indexOf(i18n.lang));
  const tr = (k, v) => t('sp.' + k, v);

  /* ======================================================================
     Testi dell'interfaccia (6 lingue)
     ====================================================================== */
  const STR = {
    it: {
      title: 'Spazio', sub: 'Pianeti, stelle e galassie veri, nelle posizioni vere. Trascina per ruotare, rotella o due dita per lo zoom, tocca un oggetto per conoscerlo.',
      'v.solar': 'Sistema Solare', 'v.stars': 'Stelle vicine', 'v.cosmos': 'Viaggio nel cosmo', 'v.sky': 'Cielo stasera',
      'vd.solar': 'Orbite vere calcolate per qualsiasi data: scegli un giorno e guarda dove sono i pianeti.',
      'vd.stars': 'Le stelle nelle loro vere posizioni in 3D. Dalla Terra vedi le costellazioni; allontanati e si deformano!',
      'vd.cosmos': 'Dalla Terra fino ai confini dell\'Universo osservabile, con la scala in anni luce.',
      'vd.sky': 'Il cielo sopra la tua città in qualsiasi giorno e ora, con stelle, pianeti e Luna.',
      'cat.all': 'Tutti', 'cat.sun': 'Sole', 'cat.planet': 'Pianeti', 'cat.dwarf': 'Pianeti nani', 'cat.moon': 'Lune', 'cat.comet': 'Comete',
      'cat.star': 'Stelle', 'cat.nebula': 'Nebulose e ammassi', 'cat.galaxy': 'Galassie', 'cat.blackhole': 'Buchi neri',
      catalog: 'Catalogo dell\'Universo', find: 'Cerca un pianeta, una stella…', open: 'Apri la scheda', fly: 'Vola qui', lookHere: 'Guarda il cielo da qui',
      fromEarth: 'Vista dalla Terra', realSize: 'Dimensioni reali', labels: 'Nomi', lines: 'Costellazioni', today: 'Oggi', now: 'Adesso',
      play: 'Avvia', pause: 'Pausa', speed: 'Velocità', date: 'Data', time: 'Ora', city: 'Città', dome: 'Cupola', horizon: 'Orizzonte',
      atmo: 'Luce del giorno', ecliptic: 'Eclittica', grid: 'Griglia', distSun: 'Distanza dal Sole', distEarth: 'Distanza dalla Terra', light: 'La luce impiega',
      type: 'Tipo', temp: 'Temperatura', lum: 'Luminosità', radius: 'Raggio', mag: 'Magnitudine vista dalla Terra', con: 'Costellazione', desig: 'Sigla',
      facts: 'Dati principali', cur: 'Curiosità', compare: 'Quanto è grande?', quiz: 'Mettiti alla prova', lessons: 'Lezioni collegate', see3d: 'Vedi in 3D',
      back: 'Spazio', markDone: 'Ho studiato questa scheda', done: 'Studiata!', below: 'Sotto l\'orizzonte', above: 'Sopra l\'orizzonte', alt: 'Altezza', az: 'Direzione',
      loading: 'Carico i dati dell\'Universo…', scale: 'Scala', you: 'Tu sei qui', illus: 'illustrazione', moonsNote: 'Le posizioni delle lune (tranne la nostra) sono indicative.',
      tap: 'Tocca un oggetto', hint: 'Trascina · zoom con rotella o due dita · tocca', full: 'Schermo intero', reset: 'Ricomincia', objects: '{n} oggetti',
      daylight: 'Il Sole è alto: la sua luce nasconde le stelle. Togli "Luce del giorno" per vederle comunque.', sunSet: 'Il Sole è sotto l\'orizzonte.',
      ly: 'anni luce', ly1: 'anno luce', au: 'UA', km: 'km', times: 'volte il Sole', sunLike: 'come il Sole', yrs: 'anni', days: 'giorni', hours: 'ore', min: 'minuti', sec: 'secondi',
      'st.earth': 'Terra', 'st.solar': 'Sistema Solare', 'st.oort': 'Nube di Oort', 'st.stars': 'Stelle vicine', 'st.mw': 'Via Lattea', 'st.lg': 'Gruppo Locale', 'st.uni': 'Universo osservabile',
      card: 'N', cardE: 'E', cardS: 'S', cardW: 'O', posFrom: 'Punto di vista', nearSun: 'il Sole', moonPhase: 'Luna', planets: 'Pianeti', notVisible: 'Da qui non si vede',
      dayN: 'Giorno', nightN: 'Notte', twilight: 'Crepuscolo', viewOf: 'Vista', moons: 'Lune', note: 'Nota', vis: 'Visibile', trail: 'Scie',
      galCenter: 'Centro galattico', sunOrbit: 'Orbita del Sole', armPer: 'Braccio di Perseo', armSag: 'Braccio del Sagittario-Carena', armSct: 'Braccio dello Scudo-Centauro', armNor: 'Braccio del Regolo e Esterno', armOri: 'Braccio di Orione', bar: 'Barra centrale',
      kuiper: 'Fascia di Kuiper', belt: 'Fascia degli asteroidi', trojans: 'Troiani di Giove', oort: 'Nube di Oort', cmb: 'Bordo dell\'Universo osservabile', web: 'Rete cosmica', virgo: 'Ammasso della Vergine', lania: 'Superammasso Laniakea', coma: 'Ammasso della Chioma'
    },
    en: {
      title: 'Space', sub: 'Real planets, stars and galaxies in their real positions. Drag to rotate, scroll or pinch to zoom, tap an object to learn about it.',
      'v.solar': 'Solar System', 'v.stars': 'Nearby stars', 'v.cosmos': 'Cosmic journey', 'v.sky': 'Tonight\'s sky',
      'vd.solar': 'Real orbits computed for any date: pick a day and see where the planets are.',
      'vd.stars': 'Stars at their real 3D positions. From Earth you see the constellations; fly away and they get distorted!',
      'vd.cosmos': 'From Earth to the edge of the observable Universe, with a scale in light years.',
      'vd.sky': 'The sky above your city on any day and time, with stars, planets and the Moon.',
      'cat.all': 'All', 'cat.sun': 'Sun', 'cat.planet': 'Planets', 'cat.dwarf': 'Dwarf planets', 'cat.moon': 'Moons', 'cat.comet': 'Comets',
      'cat.star': 'Stars', 'cat.nebula': 'Nebulae & clusters', 'cat.galaxy': 'Galaxies', 'cat.blackhole': 'Black holes',
      catalog: 'Catalogue of the Universe', find: 'Search a planet, a star…', open: 'Open the page', fly: 'Fly here', lookHere: 'See the sky from here',
      fromEarth: 'View from Earth', realSize: 'Real sizes', labels: 'Names', lines: 'Constellations', today: 'Today', now: 'Now',
      play: 'Play', pause: 'Pause', speed: 'Speed', date: 'Date', time: 'Time', city: 'City', dome: 'Dome', horizon: 'Horizon',
      atmo: 'Daylight', ecliptic: 'Ecliptic', grid: 'Grid', distSun: 'Distance from the Sun', distEarth: 'Distance from Earth', light: 'Light takes',
      type: 'Type', temp: 'Temperature', lum: 'Luminosity', radius: 'Radius', mag: 'Magnitude seen from Earth', con: 'Constellation', desig: 'Designation',
      facts: 'Key data', cur: 'Fun facts', compare: 'How big is it?', quiz: 'Test yourself', lessons: 'Related lessons', see3d: 'See in 3D',
      back: 'Space', markDone: 'I studied this page', done: 'Studied!', below: 'Below the horizon', above: 'Above the horizon', alt: 'Altitude', az: 'Direction',
      loading: 'Loading the Universe…', scale: 'Scale', you: 'You are here', illus: 'illustration', moonsNote: 'Moon positions (except ours) are indicative.',
      tap: 'Tap an object', hint: 'Drag · zoom with wheel or pinch · tap', full: 'Full screen', reset: 'Restart', objects: '{n} objects',
      daylight: 'The Sun is up: its light hides the stars. Switch off "Daylight" to see them anyway.', sunSet: 'The Sun is below the horizon.',
      ly: 'light years', ly1: 'light year', au: 'AU', km: 'km', times: 'times the Sun', sunLike: 'like the Sun', yrs: 'years', days: 'days', hours: 'hours', min: 'minutes', sec: 'seconds',
      'st.earth': 'Earth', 'st.solar': 'Solar System', 'st.oort': 'Oort Cloud', 'st.stars': 'Nearby stars', 'st.mw': 'Milky Way', 'st.lg': 'Local Group', 'st.uni': 'Observable Universe',
      card: 'N', cardE: 'E', cardS: 'S', cardW: 'W', posFrom: 'Viewpoint', nearSun: 'the Sun', moonPhase: 'Moon', planets: 'Planets', notVisible: 'Not visible from here',
      dayN: 'Day', nightN: 'Night', twilight: 'Twilight', viewOf: 'View', moons: 'Moons', note: 'Note', vis: 'Visible', trail: 'Trails',
      galCenter: 'Galactic centre', sunOrbit: 'Sun\'s orbit', armPer: 'Perseus Arm', armSag: 'Sagittarius–Carina Arm', armSct: 'Scutum–Centaurus Arm', armNor: 'Norma & Outer Arm', armOri: 'Orion Arm', bar: 'Central bar',
      kuiper: 'Kuiper Belt', belt: 'Asteroid Belt', trojans: 'Jupiter Trojans', oort: 'Oort Cloud', cmb: 'Edge of the observable Universe', web: 'Cosmic web', virgo: 'Virgo Cluster', lania: 'Laniakea Supercluster', coma: 'Coma Cluster'
    },
    fr: {
      title: 'Espace', sub: 'De vraies planètes, étoiles et galaxies à leurs vraies positions. Fais glisser pour tourner, molette ou deux doigts pour zoomer, touche un objet pour le découvrir.',
      'v.solar': 'Système solaire', 'v.stars': 'Étoiles proches', 'v.cosmos': 'Voyage cosmique', 'v.sky': 'Le ciel ce soir',
      'vd.solar': 'Orbites réelles calculées pour n\'importe quelle date : choisis un jour et regarde où sont les planètes.',
      'vd.stars': 'Les étoiles à leurs vraies positions en 3D. Depuis la Terre tu vois les constellations ; éloigne-toi et elles se déforment !',
      'vd.cosmos': 'De la Terre jusqu\'aux limites de l\'Univers observable, avec l\'échelle en années-lumière.',
      'vd.sky': 'Le ciel au-dessus de ta ville, n\'importe quel jour et heure, avec étoiles, planètes et Lune.',
      'cat.all': 'Tous', 'cat.sun': 'Soleil', 'cat.planet': 'Planètes', 'cat.dwarf': 'Planètes naines', 'cat.moon': 'Lunes', 'cat.comet': 'Comètes',
      'cat.star': 'Étoiles', 'cat.nebula': 'Nébuleuses et amas', 'cat.galaxy': 'Galaxies', 'cat.blackhole': 'Trous noirs',
      catalog: 'Catalogue de l\'Univers', find: 'Cherche une planète, une étoile…', open: 'Ouvrir la fiche', fly: 'Voler ici', lookHere: 'Voir le ciel d\'ici',
      fromEarth: 'Vue depuis la Terre', realSize: 'Tailles réelles', labels: 'Noms', lines: 'Constellations', today: 'Aujourd\'hui', now: 'Maintenant',
      play: 'Lancer', pause: 'Pause', speed: 'Vitesse', date: 'Date', time: 'Heure', city: 'Ville', dome: 'Coupole', horizon: 'Horizon',
      atmo: 'Lumière du jour', ecliptic: 'Écliptique', grid: 'Grille', distSun: 'Distance du Soleil', distEarth: 'Distance de la Terre', light: 'La lumière met',
      type: 'Type', temp: 'Température', lum: 'Luminosité', radius: 'Rayon', mag: 'Magnitude vue de la Terre', con: 'Constellation', desig: 'Désignation',
      facts: 'Données principales', cur: 'Le savais-tu ?', compare: 'Quelle taille ?', quiz: 'Teste-toi', lessons: 'Leçons liées', see3d: 'Voir en 3D',
      back: 'Espace', markDone: 'J\'ai étudié cette fiche', done: 'Étudiée !', below: 'Sous l\'horizon', above: 'Au-dessus de l\'horizon', alt: 'Hauteur', az: 'Direction',
      loading: 'Chargement de l\'Univers…', scale: 'Échelle', you: 'Tu es ici', illus: 'illustration', moonsNote: 'Les positions des lunes (sauf la nôtre) sont indicatives.',
      tap: 'Touche un objet', hint: 'Glisse · zoom molette ou deux doigts · touche', full: 'Plein écran', reset: 'Recommencer', objects: '{n} objets',
      daylight: 'Le Soleil est levé : sa lumière cache les étoiles. Désactive « Lumière du jour » pour les voir.', sunSet: 'Le Soleil est sous l\'horizon.',
      ly: 'années-lumière', ly1: 'année-lumière', au: 'UA', km: 'km', times: 'fois le Soleil', sunLike: 'comme le Soleil', yrs: 'ans', days: 'jours', hours: 'heures', min: 'minutes', sec: 'secondes',
      'st.earth': 'Terre', 'st.solar': 'Système solaire', 'st.oort': 'Nuage d\'Oort', 'st.stars': 'Étoiles proches', 'st.mw': 'Voie lactée', 'st.lg': 'Groupe local', 'st.uni': 'Univers observable',
      card: 'N', cardE: 'E', cardS: 'S', cardW: 'O', posFrom: 'Point de vue', nearSun: 'le Soleil', moonPhase: 'Lune', planets: 'Planètes', notVisible: 'Pas visible d\'ici',
      dayN: 'Jour', nightN: 'Nuit', twilight: 'Crépuscule', viewOf: 'Vue', moons: 'Lunes', note: 'Note', vis: 'Visible', trail: 'Traînées',
      galCenter: 'Centre galactique', sunOrbit: 'Orbite du Soleil', armPer: 'Bras de Persée', armSag: 'Bras du Sagittaire-Carène', armSct: 'Bras de l\'Écu-Centaure', armNor: 'Bras de la Règle et extérieur', armOri: 'Bras d\'Orion', bar: 'Barre centrale',
      kuiper: 'Ceinture de Kuiper', belt: 'Ceinture d\'astéroïdes', trojans: 'Troyens de Jupiter', oort: 'Nuage d\'Oort', cmb: 'Bord de l\'Univers observable', web: 'Toile cosmique', virgo: 'Amas de la Vierge', lania: 'Superamas Laniakea', coma: 'Amas de la Chevelure'
    },
    ru: {
      title: 'Космос', sub: 'Настоящие планеты, звёзды и галактики на своих настоящих местах. Тяни, чтобы вращать, колёсико или два пальца для масштаба, нажми на объект, чтобы узнать о нём.',
      'v.solar': 'Солнечная система', 'v.stars': 'Ближние звёзды', 'v.cosmos': 'Путешествие по космосу', 'v.sky': 'Небо сегодня',
      'vd.solar': 'Настоящие орбиты на любую дату: выбери день и посмотри, где планеты.',
      'vd.stars': 'Звёзды на своих настоящих местах в 3D. С Земли видны созвездия; улетай — и они искажаются!',
      'vd.cosmos': 'От Земли до края наблюдаемой Вселенной, с масштабом в световых годах.',
      'vd.sky': 'Небо над твоим городом в любой день и час: звёзды, планеты и Луна.',
      'cat.all': 'Все', 'cat.sun': 'Солнце', 'cat.planet': 'Планеты', 'cat.dwarf': 'Карликовые планеты', 'cat.moon': 'Спутники', 'cat.comet': 'Кометы',
      'cat.star': 'Звёзды', 'cat.nebula': 'Туманности и скопления', 'cat.galaxy': 'Галактики', 'cat.blackhole': 'Чёрные дыры',
      catalog: 'Каталог Вселенной', find: 'Найди планету, звезду…', open: 'Открыть карточку', fly: 'Лететь сюда', lookHere: 'Небо отсюда',
      fromEarth: 'Вид с Земли', realSize: 'Настоящие размеры', labels: 'Названия', lines: 'Созвездия', today: 'Сегодня', now: 'Сейчас',
      play: 'Пуск', pause: 'Пауза', speed: 'Скорость', date: 'Дата', time: 'Время', city: 'Город', dome: 'Купол', horizon: 'Горизонт',
      atmo: 'Дневной свет', ecliptic: 'Эклиптика', grid: 'Сетка', distSun: 'Расстояние от Солнца', distEarth: 'Расстояние от Земли', light: 'Свет летит',
      type: 'Тип', temp: 'Температура', lum: 'Светимость', radius: 'Радиус', mag: 'Звёздная величина с Земли', con: 'Созвездие', desig: 'Обозначение',
      facts: 'Главные данные', cur: 'Интересно', compare: 'Какой он большой?', quiz: 'Проверь себя', lessons: 'Связанные уроки', see3d: 'Смотреть в 3D',
      back: 'Космос', markDone: 'Я изучил эту карточку', done: 'Изучено!', below: 'Под горизонтом', above: 'Над горизонтом', alt: 'Высота', az: 'Направление',
      loading: 'Загружаю Вселенную…', scale: 'Масштаб', you: 'Ты здесь', illus: 'иллюстрация', moonsNote: 'Положения спутников (кроме Луны) примерные.',
      tap: 'Нажми на объект', hint: 'Тяни · масштаб колёсиком или пальцами · нажми', full: 'Во весь экран', reset: 'Сначала', objects: '{n} объектов',
      daylight: 'Солнце над горизонтом: его свет скрывает звёзды. Выключи «Дневной свет», чтобы их увидеть.', sunSet: 'Солнце под горизонтом.',
      ly: 'световых лет', ly1: 'световой год', au: 'а. е.', km: 'км', times: 'Солнц', sunLike: 'как Солнце', yrs: 'лет', days: 'дней', hours: 'часов', min: 'минут', sec: 'секунд',
      'st.earth': 'Земля', 'st.solar': 'Солнечная система', 'st.oort': 'Облако Оорта', 'st.stars': 'Ближние звёзды', 'st.mw': 'Млечный Путь', 'st.lg': 'Местная группа', 'st.uni': 'Наблюдаемая Вселенная',
      card: 'С', cardE: 'В', cardS: 'Ю', cardW: 'З', posFrom: 'Точка обзора', nearSun: 'Солнце', moonPhase: 'Луна', planets: 'Планеты', notVisible: 'Отсюда не видно',
      dayN: 'День', nightN: 'Ночь', twilight: 'Сумерки', viewOf: 'Вид', moons: 'Спутники', note: 'Примечание', vis: 'Видно', trail: 'Следы',
      galCenter: 'Центр Галактики', sunOrbit: 'Орбита Солнца', armPer: 'Рукав Персея', armSag: 'Рукав Стрельца — Киля', armSct: 'Рукав Щита — Центавра', armNor: 'Рукав Наугольника и Внешний', armOri: 'Рукав Ориона', bar: 'Центральный бар',
      kuiper: 'Пояс Койпера', belt: 'Пояс астероидов', trojans: 'Троянцы Юпитера', oort: 'Облако Оорта', cmb: 'Край наблюдаемой Вселенной', web: 'Космическая паутина', virgo: 'Скопление Девы', lania: 'Сверхскопление Ланиакея', coma: 'Скопление Волос Вероники'
    },
    ro: {
      title: 'Spațiu', sub: 'Planete, stele și galaxii reale, în pozițiile lor reale. Trage pentru a roti, rotița sau două degete pentru zoom, atinge un obiect ca să-l cunoști.',
      'v.solar': 'Sistemul Solar', 'v.stars': 'Stele apropiate', 'v.cosmos': 'Călătorie în cosmos', 'v.sky': 'Cerul în seara asta',
      'vd.solar': 'Orbite reale calculate pentru orice dată: alege o zi și vezi unde sunt planetele.',
      'vd.stars': 'Stelele în pozițiile lor reale 3D. De pe Pământ vezi constelațiile; îndepărtează-te și se deformează!',
      'vd.cosmos': 'De pe Pământ până la marginea Universului observabil, cu scara în ani-lumină.',
      'vd.sky': 'Cerul deasupra orașului tău în orice zi și oră, cu stele, planete și Luna.',
      'cat.all': 'Toate', 'cat.sun': 'Soare', 'cat.planet': 'Planete', 'cat.dwarf': 'Planete pitice', 'cat.moon': 'Sateliți', 'cat.comet': 'Comete',
      'cat.star': 'Stele', 'cat.nebula': 'Nebuloase și roiuri', 'cat.galaxy': 'Galaxii', 'cat.blackhole': 'Găuri negre',
      catalog: 'Catalogul Universului', find: 'Caută o planetă, o stea…', open: 'Deschide fișa', fly: 'Zboară aici', lookHere: 'Vezi cerul de aici',
      fromEarth: 'Vedere de pe Pământ', realSize: 'Dimensiuni reale', labels: 'Nume', lines: 'Constelații', today: 'Azi', now: 'Acum',
      play: 'Pornește', pause: 'Pauză', speed: 'Viteză', date: 'Data', time: 'Ora', city: 'Oraș', dome: 'Cupolă', horizon: 'Orizont',
      atmo: 'Lumina zilei', ecliptic: 'Ecliptica', grid: 'Grilă', distSun: 'Distanța de la Soare', distEarth: 'Distanța de la Pământ', light: 'Lumina face',
      type: 'Tip', temp: 'Temperatură', lum: 'Luminozitate', radius: 'Rază', mag: 'Magnitudine văzută de pe Pământ', con: 'Constelație', desig: 'Denumire',
      facts: 'Date principale', cur: 'Curiozități', compare: 'Cât de mare este?', quiz: 'Pune-te la încercare', lessons: 'Lecții legate', see3d: 'Vezi în 3D',
      back: 'Spațiu', markDone: 'Am studiat această fișă', done: 'Studiată!', below: 'Sub orizont', above: 'Deasupra orizontului', alt: 'Înălțime', az: 'Direcție',
      loading: 'Se încarcă Universul…', scale: 'Scară', you: 'Tu ești aici', illus: 'ilustrație', moonsNote: 'Pozițiile sateliților (în afară de Lună) sunt orientative.',
      tap: 'Atinge un obiect', hint: 'Trage · zoom cu rotița sau degetele · atinge', full: 'Ecran complet', reset: 'De la capăt', objects: '{n} obiecte',
      daylight: 'Soarele este sus: lumina lui ascunde stelele. Oprește „Lumina zilei” ca să le vezi oricum.', sunSet: 'Soarele este sub orizont.',
      ly: 'ani-lumină', ly1: 'an-lumină', au: 'UA', km: 'km', times: 'ori Soarele', sunLike: 'ca Soarele', yrs: 'ani', days: 'zile', hours: 'ore', min: 'minute', sec: 'secunde',
      'st.earth': 'Pământ', 'st.solar': 'Sistemul Solar', 'st.oort': 'Norul lui Oort', 'st.stars': 'Stele apropiate', 'st.mw': 'Calea Lactee', 'st.lg': 'Grupul Local', 'st.uni': 'Universul observabil',
      card: 'N', cardE: 'E', cardS: 'S', cardW: 'V', posFrom: 'Punct de vedere', nearSun: 'Soarele', moonPhase: 'Luna', planets: 'Planete', notVisible: 'Nu se vede de aici',
      dayN: 'Zi', nightN: 'Noapte', twilight: 'Amurg', viewOf: 'Vedere', moons: 'Sateliți', note: 'Notă', vis: 'Vizibil', trail: 'Urme',
      galCenter: 'Centrul galactic', sunOrbit: 'Orbita Soarelui', armPer: 'Brațul Perseu', armSag: 'Brațul Săgetător-Carina', armSct: 'Brațul Scutul-Centaur', armNor: 'Brațul Echerul și Exterior', armOri: 'Brațul Orion', bar: 'Bara centrală',
      kuiper: 'Centura Kuiper', belt: 'Centura de asteroizi', trojans: 'Troienii lui Jupiter', oort: 'Norul lui Oort', cmb: 'Marginea Universului observabil', web: 'Rețeaua cosmică', virgo: 'Roiul Fecioarei', lania: 'Superroiul Laniakea', coma: 'Roiul Coma'
    },
    de: {
      title: 'Weltall', sub: 'Echte Planeten, Sterne und Galaxien an ihren echten Positionen. Ziehen zum Drehen, Mausrad oder zwei Finger zum Zoomen, tippe auf ein Objekt, um es kennenzulernen.',
      'v.solar': 'Sonnensystem', 'v.stars': 'Nahe Sterne', 'v.cosmos': 'Reise durch den Kosmos', 'v.sky': 'Der Himmel heute Abend',
      'vd.solar': 'Echte Umlaufbahnen, berechnet für jedes Datum: Wähle einen Tag und schau, wo die Planeten stehen.',
      'vd.stars': 'Die Sterne an ihren echten Positionen in 3D. Von der Erde aus siehst du die Sternbilder; flieg weg, und sie verzerren sich!',
      'vd.cosmos': 'Von der Erde bis zum Rand des beobachtbaren Universums, mit einer Skala in Lichtjahren.',
      'vd.sky': 'Der Himmel über deiner Stadt an jedem Tag und zu jeder Uhrzeit, mit Sternen, Planeten und Mond.',
      'cat.all': 'Alle', 'cat.sun': 'Sonne', 'cat.planet': 'Planeten', 'cat.dwarf': 'Zwergplaneten', 'cat.moon': 'Monde', 'cat.comet': 'Kometen',
      'cat.star': 'Sterne', 'cat.nebula': 'Nebel und Sternhaufen', 'cat.galaxy': 'Galaxien', 'cat.blackhole': 'Schwarze Löcher',
      catalog: 'Katalog des Universums', find: 'Einen Planeten, einen Stern suchen…', open: 'Karte öffnen', fly: 'Hierher fliegen', lookHere: 'Den Himmel von hier aus sehen',
      fromEarth: 'Blick von der Erde', realSize: 'Echte Größen', labels: 'Namen', lines: 'Sternbilder', today: 'Heute', now: 'Jetzt',
      play: 'Start', pause: 'Pause', speed: 'Tempo', date: 'Datum', time: 'Uhrzeit', city: 'Stadt', dome: 'Kuppel', horizon: 'Horizont',
      atmo: 'Tageslicht', ecliptic: 'Ekliptik', grid: 'Gitter', distSun: 'Entfernung von der Sonne', distEarth: 'Entfernung von der Erde', light: 'Das Licht braucht',
      type: 'Typ', temp: 'Temperatur', lum: 'Leuchtkraft', radius: 'Radius', mag: 'Helligkeit von der Erde aus (Magnitude)', con: 'Sternbild', desig: 'Bezeichnung',
      facts: 'Wichtige Daten', cur: 'Wusstest du schon?', compare: 'Wie groß ist es?', quiz: 'Teste dich selbst', lessons: 'Passende Lektionen', see3d: 'In 3D ansehen',
      back: 'Weltall', markDone: 'Ich habe diese Karte gelernt', done: 'Gelernt!', below: 'Unter dem Horizont', above: 'Über dem Horizont', alt: 'Höhe', az: 'Richtung',
      loading: 'Das Universum wird geladen…', scale: 'Maßstab', you: 'Du bist hier', illus: 'Illustration', moonsNote: 'Die Positionen der Monde (außer unserem) sind nur ungefähr.',
      tap: 'Tippe auf ein Objekt', hint: 'Ziehen · zoomen mit Mausrad oder zwei Fingern · tippen', full: 'Vollbild', reset: 'Neu beginnen', objects: '{n} Objekte',
      daylight: 'Die Sonne steht hoch: Ihr Licht verdeckt die Sterne. Schalte „Tageslicht“ aus, um sie trotzdem zu sehen.', sunSet: 'Die Sonne ist unter dem Horizont.',
      ly: 'Lichtjahre', ly1: 'Lichtjahr', au: 'AE', km: 'km', times: 'mal die Sonne', sunLike: 'wie die Sonne', yrs: 'Jahre', days: 'Tage', hours: 'Stunden', min: 'Minuten', sec: 'Sekunden',
      'st.earth': 'Erde', 'st.solar': 'Sonnensystem', 'st.oort': 'Oortsche Wolke', 'st.stars': 'Nahe Sterne', 'st.mw': 'Milchstraße', 'st.lg': 'Lokale Gruppe', 'st.uni': 'Beobachtbares Universum',
      card: 'N', cardE: 'O', cardS: 'S', cardW: 'W', posFrom: 'Standpunkt', nearSun: 'die Sonne', moonPhase: 'Mond', planets: 'Planeten', notVisible: 'Von hier nicht sichtbar',
      dayN: 'Tag', nightN: 'Nacht', twilight: 'Dämmerung', viewOf: 'Ansicht', moons: 'Monde', note: 'Hinweis', vis: 'Sichtbar', trail: 'Spuren',
      galCenter: 'Zentrum der Galaxis', sunOrbit: 'Bahn der Sonne', armPer: 'Perseus-Arm', armSag: 'Schütze-Kiel-Arm', armSct: 'Schild-Zentaur-Arm', armNor: 'Winkelmaß-Arm und äußerer Arm', armOri: 'Orion-Arm', bar: 'Zentraler Balken',
      kuiper: 'Kuipergürtel', belt: 'Asteroidengürtel', trojans: 'Jupiter-Trojaner', oort: 'Oortsche Wolke', cmb: 'Rand des beobachtbaren Universums', web: 'Kosmisches Netz', virgo: 'Virgo-Haufen', lania: 'Laniakea-Superhaufen', coma: 'Coma-Haufen'
    }
  };
  for (const l in STR) { I18N[l] = I18N[l] || {}; for (const k in STR[l]) I18N[l]['sp.' + k] = STR[l][k]; }

  /* ======================================================================
     Numeri e unità
     ====================================================================== */
  function fmt(n, dec) {
    if (n == null || !isFinite(n)) return '–';
    const d = dec != null ? dec : Math.abs(n) >= 100 ? 0 : Math.abs(n) >= 10 ? 1 : 2;
    try { return n.toLocaleString(i18n.lang === 'en' ? 'en-GB' : i18n.lang, { maximumFractionDigits: d, minimumFractionDigits: 0 }); } catch (e) { return String(Math.round(n)); }
  }
  /* numero "grande" con parole (milioni, miliardi) */
  const BIG = { it: ['mila', 'milioni', 'miliardi'], en: ['thousand', 'million', 'billion'], fr: ['mille', 'millions', 'milliards'], ru: ['тыс.', 'млн', 'млрд'], ro: ['mii', 'milioane', 'miliarde'], de: ['Tausend', 'Millionen', 'Milliarden'] };
  function big(n) {
    const w = BIG[i18n.lang] || BIG.it;
    if (n >= 1e9) return fmt(n / 1e9, n >= 1e10 ? 0 : 1) + ' ' + w[2];
    if (n >= 1e6) return fmt(n / 1e6, n >= 1e7 ? 0 : 1) + ' ' + w[1];
    if (n >= 1e4) return fmt(Math.round(n / 100) * 100);
    return fmt(n);
  }
  const LY_KM = 9.4607e12, AU_KM = 1.495979e8, LY_AU = 63241.1, PC_LY = 3.26156;
  /* distanza espressa in ly con l'unità più adatta */
  function distLy(ly) {
    const km = ly * LY_KM;
    if (km < 1e6) return fmt(km, 0) + ' ' + tr('km');
    if (ly < 0.05) return big(km) + ' ' + tr('km') + ' (' + fmt(ly * LY_AU, ly * LY_AU < 10 ? 2 : 1) + ' ' + tr('au') + ')';
    if (ly < 1.5) return fmt(ly * LY_AU, 0) + ' ' + tr('au') + ' (' + fmt(ly, 2) + ' ' + tr('ly') + ')';
    return big(ly) + ' ' + tr('ly');
  }
  function lightTime(km) {
    const s = km / 299792.458;
    if (s < 120) return fmt(s, 1) + ' ' + tr('sec');
    if (s < 7200) return fmt(s / 60, 1) + ' ' + tr('min');
    if (s < 86400 * 3) return fmt(s / 3600, 1) + ' ' + tr('hours');
    if (s < 86400 * 365.25 * 2) return fmt(s / 86400, 0) + ' ' + tr('days');
    return big(s / 86400 / 365.25) + ' ' + tr('yrs');
  }
  /* etichetta per la barra di scala (valore in ly) */
  function scaleText(ly) {
    const km = ly * LY_KM;
    if (km < 1e6) return niceNum(km) + ' ' + tr('km');
    if (ly < 0.02) return niceNum(ly * LY_AU) + ' ' + tr('au');
    return niceNum(ly) + ' ' + (ly >= 0.995 && ly < 1.5 ? tr('ly1') : tr('ly'));
  }
  function niceNum(x) { const p = Math.pow(10, Math.floor(Math.log10(x))); const m = x / p; const n = (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; return n >= 1e4 ? big(n) : fmt(n, n < 1 ? 3 : 0); }
  function niceRound(x) { const p = Math.pow(10, Math.floor(Math.log10(x))); const m = x / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; }

  /* ======================================================================
     Astronomia: tempo, orbite (elementi JPL J2000), Luna, coordinate
     ====================================================================== */
  const J2000 = 2451545.0;
  const jdOf = (d) => d.getTime() / 86400000 + 2440587.5;
  const dateOf = (jd) => new Date((jd - 2440587.5) * 86400000);
  const EPS = 23.43928 * D2R;
  /* a, e, I, L, ϖ, Ω e variazioni per secolo (Standish, JPL, valide 1800–2050) */
  const EL = {
    mercury: [0.38709927, 0.20563593, 7.00497902, 252.25032350, 77.45779628, 48.33076593, 0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081],
    venus: [0.72333566, 0.00677672, 3.39467605, 181.97909950, 131.60246718, 76.67984255, 0.00000390, -0.00004107, -0.00078890, 58517.81538729, 0.00268329, -0.27769418],
    earth: [1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0, 0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0.0],
    mars: [1.52371034, 0.09339410, 1.84969142, -4.55343205, -23.94362959, 49.55953891, 0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343],
    jupiter: [5.20288700, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909, -0.00011607, -0.00013253, -0.00183714, 3034.74612775, 0.21252668, 0.20469106],
    saturn: [9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448, -0.00125060, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794],
    uranus: [19.18916464, 0.04725744, 0.77263783, 313.23810451, 170.95427630, 74.01692503, -0.00196176, -0.00004397, -0.00242939, 428.48202785, 0.40805281, 0.04240589],
    neptune: [30.06992276, 0.00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574, 0.00026291, 0.00005105, 0.00035372, 218.45945325, -0.32241464, -0.00508664],
    pluto: [39.48211675, 0.24882730, 17.14001206, 238.92903833, 224.06891629, 110.30393684, -0.00031596, 0.00005170, 0.00004818, 145.20780515, -0.04062942, -0.01183482]
  };
  /* pianeti nani con tempo di perielio: a, e, i, Ω, ω, data del perielio, periodo (anni) */
  const EL2 = {
    ceres: [2.7675, 0.0785, 10.59, 80.27, 73.6, '2022-12-07', 4.60],
    eris: [67.86, 0.4361, 44.04, 35.95, 151.6, '2257-07-01', 559.1],
    haumea: [43.12, 0.1949, 28.21, 121.8, 240.9, '2133-06-01', 283.1]
  };
  function kepler(M, e) { let E = M + e * Math.sin(M) * (1 + e * Math.cos(M)); for (let i = 0; i < 8; i++) { const d = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E)); E -= d; if (Math.abs(d) < 1e-9) break; } return E; }
  function elemsAt(id, jd) {
    if (EL[id]) {
      const T = (jd - J2000) / 36525, q = EL[id];
      const a = q[0] + q[6] * T, e = q[1] + q[7] * T, I = (q[2] + q[8] * T) * D2R, L = q[3] + q[9] * T, wb = q[4] + q[10] * T, Om = (q[5] + q[11] * T) * D2R;
      let M = ((L - wb) % 360 + 540) % 360 - 180;
      return { a, e, I, Om, w: wb * D2R - Om, M: M * D2R };
    }
    const q = EL2[id]; const tp = jdOf(new Date(q[5] + 'T00:00:00Z')); const P = q[6] * 365.25;
    let M = ((jd - tp) / P) % 1; return { a: q[0], e: q[1], I: q[2] * D2R, Om: q[3] * D2R, w: q[4] * D2R, M: M * TAU };
  }
  function orbitPoint(o, E) {
    const xp = o.a * (Math.cos(E) - o.e), yp = o.a * Math.sqrt(1 - o.e * o.e) * Math.sin(E);
    const cw = Math.cos(o.w), sw = Math.sin(o.w), cO = Math.cos(o.Om), sO = Math.sin(o.Om), cI = Math.cos(o.I), sI = Math.sin(o.I);
    return [(cw * cO - sw * sO * cI) * xp + (-sw * cO - cw * sO * cI) * yp, (cw * sO + sw * cO * cI) * xp + (-sw * sO + cw * cO * cI) * yp, sw * sI * xp + cw * sI * yp];
  }
  /* posizione eliocentrica eclittica (UA) */
  function helio(id, jd) { const o = elemsAt(id, jd); return orbitPoint(o, kepler(o.M, o.e)); }
  function orbitPath(id, jd, n = 240) { const o = elemsAt(id, jd); const pts = []; for (let i = 0; i <= n; i++) pts.push(orbitPoint(o, (i / n) * TAU)); return pts; }
  /* Luna geocentrica, eclittica (km), formula semplificata (≈ 0,3°) */
  function moonGeo(jd) {
    const d = jd - J2000;
    const L = (218.316 + 13.176396 * d) * D2R, M = (134.963 + 13.064993 * d) * D2R, F = (93.272 + 13.229350 * d) * D2R;
    const Ms = (357.529 + 0.98560028 * d) * D2R, D = (297.850 + 12.190749 * d) * D2R;
    const lam = L + (6.289 * Math.sin(M) + 1.274 * Math.sin(2 * D - M) + 0.658 * Math.sin(2 * D) - 0.186 * Math.sin(Ms) + 0.214 * Math.sin(2 * M)) * D2R;
    const bet = (5.128 * Math.sin(F)) * D2R;
    const r = 385001 - 20905 * Math.cos(M) - 3699 * Math.cos(2 * D - M) - 2956 * Math.cos(2 * D);
    return [r * Math.cos(bet) * Math.cos(lam), r * Math.cos(bet) * Math.sin(lam), r * Math.sin(bet)];
  }
  const eclToEq = (v) => [v[0], v[1] * Math.cos(EPS) - v[2] * Math.sin(EPS), v[1] * Math.sin(EPS) + v[2] * Math.cos(EPS)];
  const eqToEcl = (v) => [v[0], v[1] * Math.cos(EPS) + v[2] * Math.sin(EPS), -v[1] * Math.sin(EPS) + v[2] * Math.cos(EPS)];
  /* equatoriale J2000 → galattico (x verso il centro galattico, z verso il polo nord galattico) */
  const GM = [[-0.0548755604, -0.8734370902, -0.4838350155], [0.4941094279, -0.4448296300, 0.7469822445], [-0.8676661490, -0.1980763734, 0.4559837762]];
  const eqToGal = (v) => [GM[0][0] * v[0] + GM[0][1] * v[1] + GM[0][2] * v[2], GM[1][0] * v[0] + GM[1][1] * v[1] + GM[1][2] * v[2], GM[2][0] * v[0] + GM[2][1] * v[1] + GM[2][2] * v[2]];
  const galToEq = (v) => [GM[0][0] * v[0] + GM[1][0] * v[1] + GM[2][0] * v[2], GM[0][1] * v[0] + GM[1][1] * v[1] + GM[2][1] * v[2], GM[0][2] * v[0] + GM[1][2] * v[1] + GM[2][2] * v[2]];
  const radec = (ra, dec, r = 1) => [r * Math.cos(dec) * Math.cos(ra), r * Math.cos(dec) * Math.sin(ra), r * Math.sin(dec)];
  const galLB = (l, b, r = 1) => radec(l * D2R, b * D2R, r);
  function toRaDec(v) { const r = Math.hypot(v[0], v[1], v[2]); return [Math.atan2(v[1], v[0]), Math.asin(v[2] / r), r]; }
  function parseRA(s) { const [h, m, x] = s.split(' ').map(Number); return (h + m / 60 + (x || 0) / 3600) * 15 * D2R; }
  function parseDec(s) { const sg = s.trim()[0] === '-' ? -1 : 1; const [d, m, x] = s.replace(/[+-]/, '').split(' ').map(Number); return sg * (d + m / 60 + (x || 0) / 3600) * D2R; }
  function gmst(jd) { return ((280.46061837 + 360.98564736629 * (jd - J2000)) % 360 + 360) % 360 * D2R; }
  /* poli di rotazione (RA, Dec in gradi, IAU) per anelli e lune */
  const POLE = { earth: [0, 90], mars: [317.68, 52.89], jupiter: [268.06, 64.50], saturn: [40.59, 83.54], uranus: [257.31, -15.18], neptune: [299.36, 43.46], pluto: [132.99, -6.16] };
  function poleEcl(id) { const p = POLE[id] || [0, 90]; return id === 'earth' ? eqToEcl([0, 0, 1]) : eqToEcl(radec(p[0] * D2R, p[1] * D2R)); }
  const V = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]], sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], mul: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], len: (a) => Math.hypot(a[0], a[1], a[2]),
    cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    norm: (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; },
    lerp: (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
  };
  function planeBasis(n) { const a = Math.abs(n[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0]; const u = V.norm(V.cross(a, n)); return [u, V.cross(n, u)]; }

  /* ---- stelle: temperatura, colore, luminosità ---- */
  const SPT = { O: [50000, 31000], B: [31000, 9700], A: [9700, 7200], F: [7200, 5900], G: [5900, 5200], K: [5200, 3850], M: [3850, 2300] };
  function spTemp(sp) {
    if (!sp) return 5800; const c = sp[0];
    if (c === 'D') return 25000;
    const r = SPT[c]; if (!r) return 5800;
    const n = parseFloat(sp.slice(1)); const f = isNaN(n) ? 0.3 : n / 10;
    return Math.exp(lerp(Math.log(r[0]), Math.log(r[1]), f));
  }
  function tempRGB(K) {
    const tt = K / 100; let r, g, b;
    if (tt <= 66) { r = 255; g = 99.4708 * Math.log(tt) - 161.1196; b = tt <= 19 ? 0 : 138.5177 * Math.log(tt - 10) - 305.0448; }
    else { r = 329.6987 * Math.pow(tt - 60, -0.1332); g = 288.1222 * Math.pow(tt - 60, -0.0755); b = 255; }
    return [clamp(r, 0, 255) | 0, clamp(g, 0, 255) | 0, clamp(b, 0, 255) | 0];
  }
  const rgbStr = (c, a = 1) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  const hexRGB = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  /* correzione bolometrica approssimata in funzione della temperatura */
  const BCT = [[2400, -4.5], [3100, -2.7], [3600, -1.8], [3850, -1.2], [4400, -0.7], [5200, -0.3], [5770, -0.07], [7200, 0.0], [9700, -0.3], [15700, -1.4], [31000, -3.0], [41000, -4.0], [50000, -4.5]];
  function bc(T) { for (let i = 1; i < BCT.length; i++) if (T <= BCT[i][0]) { const a = BCT[i - 1], b = BCT[i]; return lerp(a[1], b[1], clamp((Math.log(T) - Math.log(a[0])) / (Math.log(b[0]) - Math.log(a[0])), 0, 1)); } return -4.5; }

  /* ======================================================================
     Caricamento dati
     ====================================================================== */
  let OBJ = null; const BY = {};
  let loadingObj = null, loadingStars = null;
  /* testi tradotti: data/space/<lingua>/sistema.js e cielo.js aggiungono SPACE_TR[<lingua>][id] = { kind, lead, facts, html, cur, quiz } */
  const TR_FIELDS = ['kind', 'lead', 'facts', 'html', 'cur', 'quiz'];
  const trLoading = {};
  function loadTr(l) {
    if (l === 'it') return Promise.resolve();
    return trLoading[l] || (trLoading[l] = Promise.all(['sistema', 'cielo'].map((f) => Z.loadScript('data/space/' + l + '/' + f + '.js').catch(() => null))));
  }
  function applyTr() {
    const l = i18n.lang, T = (window.SPACE_TR || {})[l] || {};
    for (const o of OBJ) {
      if (!o._it) { o._it = {}; for (const f of TR_FIELDS) o._it[f] = o[f]; }
      const x = l === 'it' ? null : T[o.id];
      for (const f of TR_FIELDS) o[f] = x && x[f] != null ? x[f] : o._it[f];
    }
    return OBJ;
  }
  function loadObjects() {
    if (!loadingObj) loadingObj = Promise.all([Z.loadScript('data/space/sistema.js'), Z.loadScript('data/space/cielo.js')]).then(() => {
      OBJ = window.SPACE_OBJECTS || []; OBJ.forEach((o) => { BY[o.id] = o; Z.registerTitle('space:' + o.id, '#/spazio/' + o.id, () => objName(o)); }); return OBJ;
    });
    return loadingObj.then(() => loadTr(i18n.lang)).then(applyTr);
  }
  let STARS = null;
  function loadStars() {
    if (STARS) return Promise.resolve(STARS);
    if (!loadingStars) loadingStars = Z.loadScript('data/space/stars.js').then(() => { STARS = prepStars(window.SPACE_STARS); return STARS; });
    return loadingStars;
  }
  function prepStars(S) {
    const list = S.list.map((r) => {
      const [id, name, ra, dec, dly, mag, sp, desig, con] = r;
      const a = parseRA(ra), d = parseDec(dec);
      const T = spTemp(sp); const Mv = mag - 5 * Math.log10(dly / PC_LY / 10);
      return { id, name, a, d, dly, mag, sp, desig, con, T, Mv, rgb: tempRGB(T), pos: radec(a, d, dly), dir: radec(a, d, 1) };
    });
    const byId = {}; list.forEach((s) => (byId[s.id] = s));
    const cons = S.constellations.map((c) => ({ id: c.id, n: c.n, lines: c.lines.map(([a, b]) => [byId[a], byId[b]]).filter((x) => x[0] && x[1]) }));
    cons.forEach((c) => { const set = new Set(); c.lines.forEach(([a, b]) => { set.add(a); set.add(b); }); c.stars = [...set]; });
    const conOf = {}; cons.forEach((c) => (conOf[c.id] = c));
    return { list, byId, cons, conOf, ru: S.ru || {}, names: S.names || {}, pleiades: S.pleiades || [] };
  }
  function starName(s) {
    if (!s) return '';
    if (i18n.lang === 'ru' && STARS.ru[s.id]) return STARS.ru[s.id];
    const n = STARS.names[s.id]; if (n && n[i18n.lang]) return n[i18n.lang];
    return s.name;
  }
  const conName = (c) => (c ? c.n[LI()] || c.n[0] : '');
  const objName = (o) => (o ? (o.name[LI()] || o.name[0]) : '');
  /* lumen, raggio e temperatura stimati di una stella del catalogo */
  function starPhys(s) {
    const o = OBJ && OBJ.find((x) => x.star === s.id);
    const T = o && o.temp ? o.temp : s.T;
    const Mbol = s.Mv + bc(T); const L = Math.pow(10, -0.4 * (Mbol - 4.74));
    const R = o && o.rs ? o.rs : Math.sqrt(L) * Math.pow(5772 / T, 2);
    return { T, L, R, obj: o };
  }

  /* ======================================================================
     Vista 3D comune: canvas a tutto schermo nel riquadro, HUD, scheda, controlli
     ====================================================================== */
  const M3 = () => (window.Mini3D && Mini3D._) || {};
  function drawBall(ctx, x, y, r, color, glow) {
    const b = M3().ball;
    if (b && r >= 1.2) return b(ctx, x, y, r, color, glow);
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, Math.max(0.6, r), 0, TAU); ctx.fill();
  }
  function glow(ctx, x, y, r, rgb, a) {
    if (r < 0.5 || a <= 0.002) return;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, rgbStr(rgb, a)); g.addColorStop(0.25, rgbStr(rgb, a * 0.45)); g.addColorStop(1, rgbStr(rgb, 0));
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  function text(ctx, s, x, y, o = {}) {
    ctx.font = `${o.weight || 600} ${o.size || 12}px Nunito, system-ui, sans-serif`;
    ctx.textAlign = o.align || 'left'; ctx.textBaseline = o.base || 'middle';
    if (o.halo !== false) { ctx.lineWidth = 3; ctx.strokeStyle = o.halo || 'rgba(3,6,20,.85)'; ctx.strokeText(s, x, y); }
    ctx.fillStyle = o.color || '#e2e8f0'; ctx.fillText(s, x, y);
  }

  /* etichette senza sovrapposizioni: reset() a ogni fotogramma, poi put() in ordine di importanza */
  const Labels = { list: [], reset() { this.list.length = 0; },
    put(ctx, s, x, y, o = {}) {
      ctx.font = `${o.weight || 600} ${o.size || 12}px Nunito, system-ui, sans-serif`; const w = ctx.measureText(s).width; const h = (o.size || 12) + 2;
      const x0 = o.align === 'center' ? x - w / 2 : x; const r = [x0 - 2, y - h / 2, x0 + w + 2, y + h / 2];
      for (const q of this.list) if (r[0] < q[2] && r[2] > q[0] && r[1] < q[3] && r[3] > q[1]) return false;
      this.list.push(r); text(ctx, s, x, y, o); return true;
    } };
  class SpaceView {
    constructor(host, o = {}) {
      this.host = host; this.o = o;
      this.root = el('div', 'sp-view' + (o.cls ? ' ' + o.cls : ''));
      this.stage = el('div', 'sp-stage');
      this.canvas = el('canvas'); this.ctx = this.canvas.getContext('2d');
      this.hud = el('div', 'sp-hud'); this.card = el('div', 'sp-card'); this.card.hidden = true;
      this.foot = el('div', 'sp-foot'); this.tip = el('div', 'sp-tip', '🖐️ ' + tr('hint'));
      const fs = el('button', 'sp-fs', '⛶'); fs.type = 'button'; fs.title = tr('full'); fs.setAttribute('aria-label', tr('full'));
      fs.onclick = () => this.toggleFull();
      this.stage.append(this.canvas, this.hud, this.foot, this.card, this.tip, fs);
      this.bar = el('div', 'sp-bar');
      this.root.append(this.stage, this.bar); host.appendChild(this.root);
      this.draw = () => {}; this.onDrag = null; this.onZoom = null; this.onTap = null; this.onHover = null;
      this._bind(); this._resize();
      this._ro = new ResizeObserver(() => this._resize()); this._ro.observe(this.stage);
      document.addEventListener('fullscreenchange', () => setTimeout(() => this._resize(), 50));
      this._last = performance.now(); this._loop = this._loop.bind(this); requestAnimationFrame(this._loop);
    }
    btn(label, fn, o = {}) {
      const b = el('button', 'sp-btn' + (o.on ? ' on' : '') + (o.cls ? ' ' + o.cls : ''), label); b.type = 'button'; if (o.title) b.title = o.title;
      b.onclick = () => { if (o.toggle) b.classList.toggle('on'); fn(b, b.classList.contains('on')); };
      (o.parent || this.bar).appendChild(b); return b;
    }
    group(cls) { const g = el('div', 'sp-group' + (cls ? ' ' + cls : '')); this.bar.appendChild(g); return g; }
    showCard(html, onClose) {
      this.card.innerHTML = `<button class="sp-x" type="button" aria-label="×">✕</button>` + html; this.card.hidden = false;
      this.card.querySelector('.sp-x').onclick = () => { this.card.hidden = true; if (onClose) onClose(); };
    }
    hideCard() { this.card.hidden = true; }
    toggleFull() {
      const d = document;
      if (d.fullscreenElement) { d.exitFullscreen(); return; }
      if (this.root.requestFullscreen) this.root.requestFullscreen().catch(() => this.root.classList.toggle('sp-pseudo-full'));
      else this.root.classList.toggle('sp-pseudo-full');
      setTimeout(() => this._resize(), 80);
    }
    _bind() {
      const c = this.canvas; const pts = new Map(); let pinch = null, down = null, moved = 0;
      c.style.touchAction = 'none';
      const pos = (e) => { const r = c.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
      c.addEventListener('pointerdown', (e) => { c.setPointerCapture(e.pointerId); pts.set(e.pointerId, pos(e)); if (pts.size === 1) { down = { t: performance.now(), p: pos(e) }; moved = 0; } this.tip.classList.add('gone'); this.touched = true; });
      c.addEventListener('pointermove', (e) => {
        const p = pos(e);
        if (!pts.has(e.pointerId)) { if (this.onHover) this.onHover(p[0], p[1]); return; }
        const prev = pts.get(e.pointerId); pts.set(e.pointerId, p);
        if (pts.size === 2) {
          const [a, b] = [...pts.values()]; const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
          if (pinch && this.onZoom) this.onZoom(d / pinch, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); pinch = d; moved += 10; return;
        }
        const dx = p[0] - prev[0], dy = p[1] - prev[1]; moved += Math.abs(dx) + Math.abs(dy);
        if (this.onDrag) this.onDrag(dx, dy, e);
      });
      const up = (e) => {
        if (pts.size === 1 && down && moved < 7 && performance.now() - down.t < 500 && this.onTap) { const p = pos(e); this.onTap(p[0], p[1]); }
        pts.delete(e.pointerId); pinch = null; if (!pts.size) down = null;
      };
      c.addEventListener('pointerup', up); c.addEventListener('pointercancel', (e) => { pts.delete(e.pointerId); pinch = null; });
      c.addEventListener('wheel', (e) => { e.preventDefault(); const p = pos(e); if (this.onZoom) this.onZoom(Math.exp(-clamp(e.deltaY, -120, 120) * 0.0018), p[0], p[1]); this.tip.classList.add('gone'); }, { passive: false });
    }
    _resize() {
      const w = this.stage.clientWidth || 640;
      const full = document.fullscreenElement === this.root || this.root.classList.contains('sp-pseudo-full');
      let h = this.o.height ? this.o.height(w) : (w < 640 ? clamp(w * 1.2, 380, 560) : clamp(w * 0.58, 400, 620));
      if (full) h = Math.max(300, window.innerHeight - this.bar.offsetHeight - 4);
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      this.canvas.width = Math.round(w * dpr); this.canvas.height = Math.round(h * dpr);
      this.canvas.style.height = h + 'px'; this.stage.style.height = h + 'px';
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); this.W = w; this.H = h; this.dpr = dpr;
    }
    _loop(now) {
      if (!this.root.isConnected) { this._ro.disconnect(); this.dead = true; return; }
      const dt = Math.min(0.05, (now - this._last) / 1000); this._last = now;
      const r = this.root.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight && !document.hidden) { try { this.draw(this.ctx, dt); } catch (e) { console.error(e); this.draw = () => {}; } }
      requestAnimationFrame(this._loop);
    }
  }

  /* camera prospettica: orbita intorno a un bersaglio T, z in alto */
  class Cam {
    constructor() { this.T = [0, 0, 0]; this.yaw = 0; this.pitch = 0.4; this.dist = 5; this.fov = 55 * D2R; this.near = 0; }
    update(W, H) {
      const cp = Math.cos(this.pitch), d = [cp * Math.cos(this.yaw), cp * Math.sin(this.yaw), Math.sin(this.pitch)];
      this.C = V.add(this.T, V.mul(d, this.dist)); this.f = V.mul(d, -1);
      this.r = V.norm(V.cross(this.f, [0, 0, 1])); this.u = V.cross(this.r, this.f);
      this.W = W; this.H = H; this.focal = (H / 2) / Math.tan(this.fov / 2);
    }
    /* → [x, y, profondità] oppure null se dietro */
    p(q) {
      const x0 = q[0] - this.C[0], y0 = q[1] - this.C[1], z0 = q[2] - this.C[2];
      const z = x0 * this.f[0] + y0 * this.f[1] + z0 * this.f[2]; if (z <= this.near) return null;
      const x = x0 * this.r[0] + y0 * this.r[1] + z0 * this.r[2], y = x0 * this.u[0] + y0 * this.u[1] + z0 * this.u[2];
      return [this.W / 2 + (x / z) * this.focal, this.H / 2 - (y / z) * this.focal, z];
    }
    /* direzione all'infinito (solo rotazione) */
    pd(d) { const z = V.dot(d, this.f); if (z <= 0.01) return null; return [this.W / 2 + (V.dot(d, this.r) / z) * this.focal, this.H / 2 - (V.dot(d, this.u) / z) * this.focal, z]; }
    px(worldSize, z) { return (worldSize / z) * this.focal; }
    worldPerPx() { return Math.max(this.dist, 1e-30) / this.focal; }
  }
  /* polilinea 3D proiettata (salta i tratti dietro la camera) */
  function polyline(ctx, cam, pts, close) {
    ctx.beginPath(); let pen = false;
    for (let i = 0; i < pts.length + (close ? 1 : 0); i++) {
      const s = cam.p(pts[i % pts.length]);
      if (!s) { pen = false; continue; }
      if (pen) ctx.lineTo(s[0], s[1]); else { ctx.moveTo(s[0], s[1]); pen = true; }
    }
    ctx.stroke();
  }
  /* numeri pseudo-casuali ripetibili */
  function rng(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 1e9) / 1e9; }; }
  function gauss(r) { let u = 0, v = 0; while (u === 0) u = r(); v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v); }
  /* stelline di sfondo all'infinito (decorative, non sono oggetti reali del catalogo) */
  function makeBackdrop(n, seed) { const r = rng(seed); const a = []; for (let i = 0; i < n; i++) { const z = r() * 2 - 1, th = r() * TAU, s = Math.sqrt(1 - z * z); a.push([s * Math.cos(th), s * Math.sin(th), z, 0.15 + Math.pow(r(), 3) * 0.6, r()]); } return a; }
  function drawBackdrop(ctx, cam, list, alpha = 1) {
    for (const s of list) { const q = cam.pd(s); if (!q) continue; ctx.fillStyle = s[4] < 0.15 ? `rgba(255,214,170,${s[3] * alpha})` : s[4] > 0.85 ? `rgba(190,210,255,${s[3] * alpha})` : `rgba(235,240,255,${s[3] * alpha})`; ctx.fillRect(q[0], q[1], 1.1, 1.1); }
  }
  function spaceBg(ctx, W, H, tint) {
    const g = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.75);
    g.addColorStop(0, tint || '#0b1233'); g.addColorStop(1, '#02030a'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }
  /* barra di scala in basso */
  function scaleBar(v, worldPerPx, unitToLy) {
    const target = 110 * worldPerPx * unitToLy; if (!(target > 0) || !isFinite(target)) { v.foot.innerHTML = ''; return; }
    const nice = niceRound(target); const px = (nice / unitToLy) / worldPerPx;
    v.foot.innerHTML = `<span class="sp-scale"><i style="width:${px.toFixed(0)}px"></i><b>${scaleText(nice)}</b></span>`;
  }
  /* animazione morbida di un valore */
  function tween(obj, key, to, ms = 1200) { obj._tw = obj._tw || {}; obj._tw[key] = { from: obj[key], to, t0: performance.now(), ms }; }
  function stepTweens(obj) {
    if (!obj._tw) return; const now = performance.now();
    for (const k in obj._tw) { const w = obj._tw[k]; const f = clamp((now - w.t0) / w.ms, 0, 1); const e = f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
      obj[k] = Array.isArray(w.from) ? V.lerp(w.from, w.to, e) : lerp(w.from, w.to, e); if (f >= 1) delete obj._tw[k]; }
  }

  /* testi extra */
  const STR2 = {
    it: { ps1: '1 giorno al secondo', psN: '{n} giorni al secondo', psH: '1 ora al secondo', psM: '{n} minuti al secondo', focus: 'Centra', zoomIn: 'Avvicina', zoomOut: 'Allontana' },
    en: { ps1: '1 day per second', psN: '{n} days per second', psH: '1 hour per second', psM: '{n} minutes per second', focus: 'Centre on', zoomIn: 'Zoom in', zoomOut: 'Zoom out' },
    fr: { ps1: '1 jour par seconde', psN: '{n} jours par seconde', psH: '1 heure par seconde', psM: '{n} minutes par seconde', focus: 'Centrer', zoomIn: 'Rapprocher', zoomOut: 'Éloigner' },
    ru: { ps1: '1 день в секунду', psN: '{n} дн. в секунду', psH: '1 час в секунду', psM: '{n} мин. в секунду', focus: 'Центр', zoomIn: 'Ближе', zoomOut: 'Дальше' },
    ro: { ps1: '1 zi pe secundă', psN: '{n} zile pe secundă', psH: '1 oră pe secundă', psM: '{n} minute pe secundă', focus: 'Centrează', zoomIn: 'Apropie', zoomOut: 'Depărtează' },
    de: { ps1: '1 Tag pro Sekunde', psN: '{n} Tage pro Sekunde', psH: '1 Stunde pro Sekunde', psM: '{n} Minuten pro Sekunde', focus: 'Zentrieren', zoomIn: 'Heranzoomen', zoomOut: 'Herauszoomen' }
  };
  for (const l in STR2) for (const k in STR2[l]) I18N[l]['sp.' + k] = STR2[l][k];
  const perSec = (d) => (d < 1 / 24 + 1e-9 ? (d * 1440 < 59 ? tr('psM', { n: fmt(d * 1440, 0) }) : tr('psH')) : d === 1 ? tr('ps1') : tr('psN', { n: fmt(d, 0) }));

  /* ======================================================================
     SCENA: Sistema Solare (UA, coordinate eclittiche J2000)
     ====================================================================== */
  const NM = (it, en, fr, ru, ro, de) => [it, en || it, fr || it, ru || it, ro || it, de || en || it];
  const SOLB = [
    { id: 'sun', obj: 'sole', r: 696000, color: '#fdb813', n: NM('Sole', 'Sun', 'Soleil', 'Солнце', 'Soare', 'Sonne') },
    { id: 'mercury', obj: 'mercurio', r: 2440, color: '#b5ada5', n: NM('Mercurio', 'Mercury', 'Mercure', 'Меркурий', 'Mercur', 'Merkur') },
    { id: 'venus', obj: 'venere', r: 6052, color: '#e9c886', n: NM('Venere', 'Venus', 'Vénus', 'Венера', 'Venus', 'Venus') },
    { id: 'earth', obj: 'terra', r: 6371, color: '#3f7fe0', n: NM('Terra', 'Earth', 'Terre', 'Земля', 'Pământ', 'Erde') },
    { id: 'mars', obj: 'marte', r: 3390, color: '#d9573b', n: NM('Marte', 'Mars', 'Mars', 'Марс', 'Marte', 'Mars') },
    { id: 'jupiter', obj: 'giove', r: 69911, color: '#d8a878', n: NM('Giove', 'Jupiter', 'Jupiter', 'Юпитер', 'Jupiter', 'Jupiter') },
    { id: 'saturn', obj: 'saturno', r: 58232, color: '#e3c98e', n: NM('Saturno', 'Saturn', 'Saturne', 'Сатурн', 'Saturn', 'Saturn') },
    { id: 'uranus', obj: 'urano', r: 25362, color: '#9bd8e6', n: NM('Urano', 'Uranus', 'Uranus', 'Уран', 'Uranus', 'Uranus') },
    { id: 'neptune', obj: 'nettuno', r: 24622, color: '#4f6df5', n: NM('Nettuno', 'Neptune', 'Neptune', 'Нептун', 'Neptun', 'Neptun') },
    { id: 'pluto', obj: 'plutone', r: 1188, color: '#cfb497', dwarf: true, n: NM('Plutone', 'Pluto', 'Pluton', 'Плутон', 'Pluto', 'Pluto') },
    { id: 'ceres', obj: 'cerere', r: 470, color: '#9ca3af', dwarf: true, n: NM('Cerere', 'Ceres', 'Cérès', 'Церера', 'Ceres', 'Ceres') },
    { id: 'eris', obj: 'eris', r: 1163, color: '#e5e7eb', dwarf: true, n: NM('Eris', 'Eris', 'Éris', 'Эрида', 'Eris', 'Eris') },
    { id: 'haumea', obj: 'haumea', r: 780, color: '#f1f5f9', dwarf: true, n: NM('Haumea', 'Haumea', 'Hauméa', 'Хаумеа', 'Haumea', 'Haumea') }
  ];
  /* lune: pianeta, id, scheda, semiasse (km), periodo (giorni, negativo = retrogrado), raggio (km), colore, nomi */
  const MOONS = [
    ['earth', 'moon', 'luna', 384400, 27.3217, 1737, '#d4d4d8', NM('Luna', 'Moon', 'Lune', 'Луна', 'Luna', 'Mond')],
    ['mars', 'phobos', null, 9376, 0.31891, 11, '#8b7d6b', NM('Phobos', 'Phobos', 'Phobos', 'Фобос', 'Phobos', 'Phobos')],
    ['mars', 'deimos', null, 23463, 1.26244, 6, '#a39684', NM('Deimos', 'Deimos', 'Déimos', 'Деймос', 'Deimos', 'Deimos')],
    ['jupiter', 'io', 'io', 421700, 1.769, 1822, '#f2d046', NM('Io', 'Io', 'Io', 'Ио', 'Io', 'Io')],
    ['jupiter', 'europa', 'europa', 671034, 3.551, 1561, '#e7dcc8', NM('Europa', 'Europa', 'Europe', 'Европа', 'Europa', 'Europa')],
    ['jupiter', 'ganymede', 'ganimede', 1070412, 7.155, 2634, '#a3a091', NM('Ganimede', 'Ganymede', 'Ganymède', 'Ганимед', 'Ganymede', 'Ganymed')],
    ['jupiter', 'callisto', 'callisto', 1882709, 16.689, 2410, '#7a7064', NM('Callisto', 'Callisto', 'Callisto', 'Каллисто', 'Callisto', 'Kallisto')],
    ['saturn', 'mimas', null, 185539, 0.942, 198, '#cfcfcf', NM('Mimas', 'Mimas', 'Mimas', 'Мимас', 'Mimas', 'Mimas')],
    ['saturn', 'enceladus', 'encelado', 238042, 1.370, 252, '#f8fafc', NM('Encelado', 'Enceladus', 'Encelade', 'Энцелад', 'Enceladus', 'Enceladus')],
    ['saturn', 'tethys', null, 294672, 1.888, 531, '#e5e5e5', NM('Teti', 'Tethys', 'Téthys', 'Тефия', 'Tethys', 'Tethys')],
    ['saturn', 'dione', null, 377415, 2.737, 561, '#d6d3d1', NM('Dione', 'Dione', 'Dioné', 'Диона', 'Dione', 'Dione')],
    ['saturn', 'rhea', null, 527068, 4.518, 764, '#d4d4d4', NM('Rea', 'Rhea', 'Rhéa', 'Рея', 'Rhea', 'Rhea')],
    ['saturn', 'titan', 'titano', 1221870, 15.945, 2575, '#e0a458', NM('Titano', 'Titan', 'Titan', 'Титан', 'Titan', 'Titan')],
    ['saturn', 'iapetus', null, 3560820, 79.32, 734, '#a8a29e', NM('Giapeto', 'Iapetus', 'Japet', 'Япет', 'Iapetus', 'Iapetus')],
    ['uranus', 'miranda', null, 129900, 1.413, 236, '#cbd5e1', NM('Miranda', 'Miranda', 'Miranda', 'Миранда', 'Miranda', 'Miranda')],
    ['uranus', 'ariel', null, 190900, 2.520, 579, '#d1d5db', NM('Ariel', 'Ariel', 'Ariel', 'Ариэль', 'Ariel', 'Ariel')],
    ['uranus', 'umbriel', null, 266000, 4.144, 585, '#9ca3af', NM('Umbriel', 'Umbriel', 'Umbriel', 'Умбриэль', 'Umbriel', 'Umbriel')],
    ['uranus', 'titania', null, 435910, 8.706, 789, '#d6d3d1', NM('Titania', 'Titania', 'Titania', 'Титания', 'Titania', 'Titania')],
    ['uranus', 'oberon', null, 583520, 13.463, 761, '#c4b5a5', NM('Oberon', 'Oberon', 'Obéron', 'Оберон', 'Oberon', 'Oberon')],
    ['neptune', 'triton', 'tritone', 354759, -5.877, 1353, '#cbd5e1', NM('Tritone', 'Triton', 'Triton', 'Тритон', 'Triton', 'Triton')],
    ['pluto', 'charon', null, 19591, 6.387, 606, '#a8a29e', NM('Caronte', 'Charon', 'Charon', 'Харон', 'Charon', 'Charon')]
  ].map(([p, id, obj, a, P, r, color, n], i) => ({ p, id, obj, a: a / AU_KM, P, r, color, n, ph: (i * 2.399) % TAU, rank: 0 }));
  { const cnt = {}; MOONS.forEach((m) => { m.rank = cnt[m.p] = (cnt[m.p] || 0) + 1; }); }
  const SOL_FOCUS = { sun: 4.5, mercury: 0.01, venus: 0.012, earth: 0.008, mars: 0.008, jupiter: 0.03, saturn: 0.022, uranus: 0.02, neptune: 0.012, pluto: 0.006 };

  function makeBelts() {
    const r = rng(7); const belt = [], kuiper = [], trojans = [];
    const gaps = [2.50, 2.82, 2.955, 3.27];
    while (belt.length < 2200) { const a = 2.1 + r() * 1.25; if (gaps.some((g) => Math.abs(a - g) < 0.025 + r() * 0.01)) continue; belt.push({ a, e: r() * 0.18, I: Math.pow(r(), 2) * 18 * D2R, Om: r() * TAU, w: r() * TAU, M0: r() * TAU, c: r() }); }
    for (let i = 0; i < 1600; i++) { const pl = r() < 0.3; kuiper.push({ a: pl ? 39.4 + gauss(r) * 0.3 : 42 + r() * 6, e: pl ? 0.1 + r() * 0.2 : r() * 0.1, I: Math.pow(r(), 1.5) * (pl ? 20 : 12) * D2R, Om: r() * TAU, w: r() * TAU, M0: r() * TAU, c: r() }); }
    for (let i = 0; i < 400; i++) trojans.push({ a: 5.2 + gauss(r) * 0.08, e: r() * 0.1, I: Math.pow(r(), 2) * 25 * D2R, Om: r() * TAU, w: r() * TAU, lead: r() < 0.5 ? 1 : -1, off: gauss(r) * 14 * D2R, c: r() });
    return { belt, kuiper, trojans };
  }
  function partPos(o, jd) { const n = TAU / (365.25 * Math.pow(o.a, 1.5)); return orbitPoint(o, kepler((o.M0 + n * (jd - J2000)) % TAU, o.e)); }

  Mini3D.scenes.spaceSolar = function (host, opts = {}) {
    const v = new SpaceView(host, { cls: 'sp-solar' });
    const cam = new Cam(); cam.yaw = -1.9; cam.pitch = 0.55; cam.dist = 7; cam.fov = 50 * D2R;
    const st = { jd: jdOf(new Date()), play: false, speed: 1, real: false, labels: true, focus: 'sun', fT: [0, 0, 0], fBlend: 1, fFrom: [0, 0, 0] };
    const belts = makeBelts(); const back = makeBackdrop(900, 3);
    let paths = {}, pathJd = -1e9; const BI = {}; SOLB.forEach((b) => (BI[b.id] = b));
    const poles = {}; ['mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'].forEach((p) => (poles[p] = planeBasis(poleEcl(p))));
    poles.earth = planeBasis([0, 0, 1]); const satN = poleEcl('saturn');
    const nm = (b) => b.n[LI()];
    let drawn = [];

    /* --- controlli --- */
    const g1 = v.group('sp-time');
    const playB = v.btn('▶', (b) => { st.play = !st.play; b.textContent = st.play ? '⏸' : '▶'; b.classList.toggle('on', st.play); }, { parent: g1, title: tr('play') });
    const SPEEDS = [1 / 24, 1, 7, 30, 365];
    let si = 1;
    v.btn('🐢', () => { si = Math.max(0, si - 1); st.speed = SPEEDS[si]; spL.textContent = perSec(st.speed); }, { parent: g1, title: tr('speed') });
    const spL = el('span', 'sp-lbl', perSec(1)); g1.appendChild(spL);
    v.btn('🐇', () => { si = Math.min(SPEEDS.length - 1, si + 1); st.speed = SPEEDS[si]; spL.textContent = perSec(st.speed); }, { parent: g1, title: tr('speed') });
    const g2 = v.group('sp-date');
    const dIn = el('input'); dIn.type = 'date'; dIn.min = '1900-01-01'; dIn.max = '2100-12-31'; dIn.setAttribute('aria-label', tr('date'));
    dIn.onchange = () => { if (dIn.value) { st.jd = jdOf(new Date(dIn.value + 'T12:00:00Z')); } };
    g2.appendChild(dIn);
    v.btn('📅 ' + tr('today'), () => { st.jd = jdOf(new Date()); }, { parent: g2 });
    const slider = el('input', 'sp-range'); slider.type = 'range'; slider.min = jdOf(new Date('1900-01-01T00:00:00Z')); slider.max = jdOf(new Date('2100-12-31T00:00:00Z')); slider.step = 1; slider.setAttribute('aria-label', tr('date'));
    slider.oninput = () => { st.jd = +slider.value; };
    const g3 = v.group('sp-slider'); g3.appendChild(slider);
    const g4 = v.group();
    v.btn('📏 ' + tr('realSize'), (b, on) => { st.real = on; }, { toggle: true, parent: g4 });
    v.btn('🏷️ ' + tr('labels'), (b, on) => { st.labels = on; }, { toggle: true, on: true, parent: g4 });
    const sel = el('select', 'sp-sel'); sel.setAttribute('aria-label', tr('focus'));
    SOLB.forEach((b) => { const o = el('option', '', (b.id === 'sun' ? '☀️ ' : b.dwarf ? '⚪ ' : '🪐 ') + nm(b)); o.value = b.id; sel.appendChild(o); });
    sel.onchange = () => focus(sel.value, true); g4.appendChild(sel);

    function bodyPos(id, jd) {
      if (id === 'sun') return [0, 0, 0];
      return helio(id, jd);
    }
    function moonPos(m, jd, pPos, aEff) {
      if (m.id === 'moon') { const g = moonGeo(jd); const k = aEff / V.len(g); return V.add(pPos, V.mul(g, k)); }
      const [u, w] = poles[m.p]; const th = m.ph + TAU * (jd - J2000) / m.P;
      return V.add(pPos, V.add(V.mul(u, aEff * Math.cos(th)), V.mul(w, aEff * Math.sin(th))));
    }
    function focus(id, zoom) {
      st.fFrom = cam.T.slice(); st.focus = id; st.fBlend = 0; st.fStart = performance.now(); sel.value = BI[id] ? id : sel.value;
      if (zoom) tween(cam, 'dist', SOL_FOCUS[id] || 0.01, 1400);
    }
    { const fid = opts.focus && (BI[opts.focus] ? opts.focus : (MOONS.find((m) => m.id === opts.focus) || {}).p); if (fid && BI[fid]) focus(fid, true); }

    v.onDrag = (dx, dy) => { cam.yaw -= dx * 0.006; cam.pitch = clamp(cam.pitch + dy * 0.006, -1.5, 1.5); };
    v.onZoom = (f) => { if (cam._tw) delete cam._tw.dist; cam.dist = clamp(cam.dist / f, minDist(), 400); };
    function minDist() { const b = BI[st.focus]; const rAU = (b ? b.r : 6371) / AU_KM; return st.real ? rAU * 2.2 : Math.max(rAU * 2.2, 2.5e-4); }
    v.onTap = (x, y) => {
      let best = null, bd = 1e9;
      for (const d of drawn) { const dd = Math.hypot(d.x - x, d.y - y) - d.r; if (dd < Math.max(12, 0) && dd < bd) { bd = dd; best = d; } }
      if (!best) { v.hideCard(); return; }
      if (best.kind === 'body') focus(best.id, false);
      showInfo(best);
    };
    v.onHover = (x, y) => { v.canvas.style.cursor = drawn.some((d) => Math.hypot(d.x - x, d.y - y) - d.r < 12) ? 'pointer' : 'grab'; };

    function showInfo(d) {
      const o = BY[d.obj];
      const pos = d.pos; const earth = helio('earth', st.jd);
      const dS = V.len(pos) * AU_KM, dE = V.len(V.sub(pos, earth)) * AU_KM;
      let h = `<h4>${esc(d.name)}</h4>${o ? `<p class="sp-kind">${esc(o.kind)}</p>` : ''}<dl>`;
      if (d.id !== 'sun') h += `<dt>${tr('distSun')}</dt><dd>${big(dS)} ${tr('km')} · ${fmt(dS / AU_KM, 2)} ${tr('au')}</dd>`;
      if (d.id !== 'earth') h += `<dt>${tr('distEarth')}</dt><dd>${big(dE)} ${tr('km')}</dd><dt>${tr('light')}</dt><dd>${lightTime(dE)}</dd>`;
      if (o && o.facts) h += `<dt>${esc(o.facts[0][0])}</dt><dd>${esc(o.facts[0][1])}</dd>`;
      h += '</dl>';
      if (d.kind === 'moon' && d.id !== 'moon') h += `<p class="sp-note">ℹ️ ${tr('moonsNote')}</p>`;
      h += `<div class="sp-acts">${o ? `<a class="sp-btn on" href="#/spazio/${o.id}">📖 ${tr('open')}</a>` : ''}${d.kind === 'body' ? '' : ''}</div>`;
      v.showCard(h);
    }

    /* --- disegno --- */
    v.draw = (ctx, dt) => {
      if (st.play) st.jd += dt * st.speed;
      stepTweens(cam);
      cam.dist = clamp(cam.dist, minDist(), 400);
      const jd = st.jd; const W = v.W, H = v.H;
      if (Math.abs(jd - pathJd) > 3650) { SOLB.forEach((b) => { if (b.id !== 'sun') paths[b.id] = orbitPath(b.id, jd, b.id === 'eris' || b.id === 'pluto' ? 360 : 240); }); pathJd = jd; }
      // posizioni
      const P = {}; SOLB.forEach((b) => (P[b.id] = bodyPos(b.id, jd)));
      const fp = P[st.focus] || P.sun;
      if (st.fBlend < 1) { st.fBlend = clamp((performance.now() - st.fStart) / 1200, 0, 1); const e = 1 - Math.pow(1 - st.fBlend, 3); cam.T = V.lerp(st.fFrom, fp, e); } else cam.T = fp;
      cam.update(W, H);
      spaceBg(ctx, W, H, '#0a1030'); drawBackdrop(ctx, cam, back, 0.9);
      // orbite
      ctx.lineWidth = 1;
      SOLB.forEach((b) => {
        if (b.id === 'sun') return; const foc = b.id === st.focus;
        ctx.strokeStyle = foc ? 'rgba(125,211,252,.75)' : b.dwarf ? 'rgba(203,213,225,.18)' : 'rgba(148,163,184,.32)';
        if (b.dwarf) ctx.setLineDash([3, 4]); polyline(ctx, cam, paths[b.id]); ctx.setLineDash([]);
      });
      // fasce di particelle
      const wpp = cam.worldPerPx();
      if (wpp < 0.08) {
        ctx.globalCompositeOperation = 'lighter';
        const fa = smooth(0.08, 0.004, wpp);
        for (const o of belts.belt) { const q = cam.p(partPos(o, jd)); if (q) { ctx.fillStyle = `rgba(${200 + o.c * 40 | 0},${180 + o.c * 30 | 0},150,${0.45 * fa})`; ctx.fillRect(q[0], q[1], 1.2, 1.2); } }
        const jl = Math.atan2(P.jupiter[1], P.jupiter[0]);
        for (const o of belts.trojans) { const L = jl + o.lead * Math.PI / 3 + o.off; const rr = o.a; const q = cam.p([rr * Math.cos(L), rr * Math.sin(L), rr * Math.sin(o.I) * Math.sin(L - o.Om)]); if (q) { ctx.fillStyle = `rgba(214,190,160,${0.4 * fa})`; ctx.fillRect(q[0], q[1], 1.1, 1.1); } }
        ctx.globalCompositeOperation = 'source-over';
      }
      if (wpp < 1.2 && wpp > 0.0004) {
        ctx.globalCompositeOperation = 'lighter'; const fa = smooth(1.2, 0.05, wpp) * smooth(0.0004, 0.004, wpp);
        for (const o of belts.kuiper) { const q = cam.p(partPos(o, jd)); if (q) { ctx.fillStyle = `rgba(170,200,255,${0.35 * fa})`; ctx.fillRect(q[0], q[1], 1.1, 1.1); } }
        ctx.globalCompositeOperation = 'source-over';
      }
      // corpi
      drawn = [];
      const items = [];
      for (const b of SOLB) {
        const q = cam.p(P[b.id]); if (!q) continue;
        const rAU = b.r / AU_KM; const tpx = cam.px(rAU, q[2]);
        let px = st.real ? Math.max(tpx, b.id === 'sun' ? 1.5 : 0.7) : Math.max(tpx, b.id === 'sun' ? 9 : b.dwarf ? 1.8 : 2.3 + 2.4 * Math.sqrt(b.r / 6371));
        if (b.id === 'sun' && !st.real) px = Math.max(px, Math.min(26, 9 + 3 / Math.max(cam.dist, 0.2)));
        items.push({ b, q, px, s: px / Math.max(tpx, 1e-9), pos: P[b.id] });
      }
      // lune (solo quando il pianeta è abbastanza grande sullo schermo)
      const moonItems = [];
      for (const it of items) {
        const ms = MOONS.filter((m) => m.p === it.b.id); if (!ms.length) continue;
        const pxPerAU = cam.focal / it.q[2]; if (pxPerAU * ms[ms.length - 1].a * (st.real ? 1 : 3) < 14) continue;
        ms.forEach((m) => {
          const need = st.real ? 0 : (it.px * (1.6 + 0.7 * m.rank)) / pxPerAU;
          const aEff = Math.max(m.a, need);
          const pos = moonPos(m, jd, it.pos, aEff); const q = cam.p(pos); if (!q) return;
          const tpx = cam.px(m.r / AU_KM, q[2]);
          const px = st.real ? Math.max(tpx, 0.6) : Math.max(tpx, Math.min(it.px * 0.45, 1.2 + 1.6 * Math.sqrt(m.r / 1737)));
          // orbita della luna
          const [u, w] = m.id === 'moon' ? planeBasis(V.norm(V.cross(moonGeo(jd), moonGeo(jd + 2)))) : poles[m.p];
          const ring = []; for (let k = 0; k <= 64; k++) { const th = (k / 64) * TAU; ring.push(V.add(it.pos, V.add(V.mul(u, aEff * Math.cos(th)), V.mul(w, aEff * Math.sin(th))))); }
          ctx.strokeStyle = 'rgba(148,163,184,.22)'; polyline(ctx, cam, ring);
          moonItems.push({ m, q, px, pos });
        });
      }
      const all = items.map((x) => ({ z: x.q[2], f: () => drawBody(ctx, x) })).concat(moonItems.map((x) => ({ z: x.q[2], f: () => drawMoon(ctx, x) })));
      all.sort((a, b) => b.z - a.z).forEach((x) => x.f());
      // etichette
      if (st.labels) {
        for (const it of items) { const big_ = !it.b.dwarf || it.b.id === st.focus || cam.dist < 30; if (big_) text(ctx, nm(it.b), it.q[0] + it.px + 5, it.q[1] - 1, { color: it.b.dwarf ? '#cbd5e1' : '#f8fafc', size: it.b.id === 'sun' ? 13 : 12 }); }
        Labels.reset(); for (const it of items) Labels.list.push([it.q[0] + it.px + 3, it.q[1] - 8, it.q[0] + it.px + 70, it.q[1] + 8]);
        for (const mi of moonItems.slice().sort((a, b) => b.m.r - a.m.r)) if (cam.focal / mi.q[2] * 0.002 > 1) Labels.put(ctx, mi.m.n[LI()], mi.q[0] + mi.px + 4, mi.q[1], { color: '#94a3b8', size: 11, weight: 400 });
        if (wpp < 0.05 && wpp > 0.002) { const q = cam.p([0, 0, 0]); const ang = -0.6; const q2 = cam.p([2.75 * Math.cos(ang), 2.75 * Math.sin(ang), 0]); if (q2) text(ctx, tr('belt'), q2[0], q2[1], { color: 'rgba(253,230,138,.85)', size: 11, align: 'center' }); }
        if (wpp < 1 && wpp > 0.01) { const q2 = cam.p([44 * Math.cos(2.4), 44 * Math.sin(2.4), 0]); if (q2) text(ctx, tr('kuiper'), q2[0], q2[1], { color: 'rgba(186,230,253,.9)', size: 11, align: 'center' }); }
      }
      const d = dateOf(jd);
      v.hud.innerHTML = `<b>${d.toLocaleDateString(i18n.lang, { day: 'numeric', month: 'long', year: 'numeric' })}</b><small>${tr('viewOf')}: ${esc(nm(BI[st.focus] || BI.sun))}${st.real ? ' · ' + tr('realSize') : ''}</small>`;
      if (document.activeElement !== dIn) dIn.value = d.toISOString().slice(0, 10);
      if (document.activeElement !== slider) slider.value = jd;
      scaleBar(v, cam.worldPerPx(), 1 / LY_AU);
    };
    function drawBody(ctx, x) {
      const { b, q, px } = x;
      if (b.id === 'sun') {
        glow(ctx, q[0], q[1], px * 6, [255, 196, 90], 0.55); glow(ctx, q[0], q[1], px * 2.2, [255, 230, 160], 0.8);
        drawBall(ctx, q[0], q[1], px, '#ffd65a', true);
      } else {
        if (b.id === 'saturn') ring(ctx, x, true);
        drawBall(ctx, q[0], q[1], px, b.color, false);
        if (b.id === 'earth' && px > 3) { ctx.strokeStyle = 'rgba(125,180,255,.35)'; ctx.lineWidth = Math.max(1, px * 0.08); ctx.beginPath(); ctx.arc(q[0], q[1], px * 1.04, 0, TAU); ctx.stroke(); }
        if (b.id === 'saturn') ring(ctx, x, false);
        if (b.id === st.focus) { ctx.strokeStyle = 'rgba(125,211,252,.7)'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(q[0], q[1], px + 5, 0, TAU); ctx.stroke(); }
      }
      drawn.push({ kind: 'body', id: b.id, obj: b.obj, name: nm(b), x: q[0], y: q[1], r: px, pos: x.pos });
    }
    function drawMoon(ctx, x) {
      drawBall(ctx, x.q[0], x.q[1], x.px, x.m.color, false);
      drawn.push({ kind: 'moon', id: x.m.id, obj: x.m.obj, name: x.m.n[LI()], x: x.q[0], y: x.q[1], r: x.px, pos: x.pos });
    }
    /* anelli di Saturno: metà dietro (back=true) o davanti al pianeta */
    function ring(ctx, x, back) {
      const [u, w] = planeBasis(satN); const s = x.s; const bands = [[74658, 92000, 0.25], [92000, 117580, 0.75], [117580, 122170, 0.06], [122170, 136775, 0.55]];
      const cz = x.q[2];
      for (const [r1, r2, a] of bands) {
        const steps = 5;
        for (let k = 0; k < steps; k++) {
          const rr = (r1 + (r2 - r1) * (k + 0.5) / steps) / AU_KM * s;
          ctx.strokeStyle = `rgba(226,205,160,${a})`; ctx.lineWidth = Math.max(0.6, cam.px((r2 - r1) / AU_KM * s, cz) / steps + 0.3);
          ctx.beginPath(); let pen = false;
          for (let i = 0; i <= 96; i++) {
            const th = (i / 96) * TAU; const p = V.add(x.pos, V.add(V.mul(u, rr * Math.cos(th)), V.mul(w, rr * Math.sin(th))));
            const q = cam.p(p); if (!q) { pen = false; continue; }
            const behind = q[2] > cz; if (behind !== back) { pen = false; continue; }
            if (pen) ctx.lineTo(q[0], q[1]); else { ctx.moveTo(q[0], q[1]); pen = true; }
          }
          ctx.stroke();
        }
      }
    }
    return v;
  };

  /* ======================================================================
     SCENA: Stelle vicine (anni luce, coordinate equatoriali J2000, Sole nell'origine)
     ====================================================================== */
  /* fascia della Via Lattea: punti lungo il piano galattico (direzioni) */
  function milkyBand(seed) {
    const r = rng(seed); const a = [];
    for (let i = 0; i < 520; i++) {
      const l = r() * 360; const ld = ((l + 180) % 360) - 180;
      const core = Math.exp(-(ld * ld) / (2 * 35 * 35));
      const b = gauss(r) * (3 + 6 * core) + (Math.abs(ld) < 60 ? gauss(r) * 2 : 0);
      const cyg = Math.exp(-Math.pow((l - 80) / 25, 2)) * 0.5;
      a.push({ d: galToEq(galLB(l, b)), w: 0.35 + core * 1.1 + cyg + r() * 0.3, s: 0.5 + r() * 0.9 + core * 0.8 });
    }
    return a;
  }
  function drawMilky(ctx, cam, band, fac, proj) {
    ctx.globalCompositeOperation = 'lighter';
    const base = Math.min(cam.W, cam.H) * 0.045;
    for (const p of band) {
      const q = proj ? proj(p.d) : cam.pd(p.d); if (!q) continue;
      const rr = base * p.s * (proj ? 1 : 1 / Math.max(0.35, Math.tan(cam.fov / 2)));
      glow(ctx, q[0], q[1], rr, [170, 180, 230], 0.05 * p.w * fac);
    }
    ctx.globalCompositeOperation = 'source-over';
  }
  const FAMOUS = ['sirio', 'alfa-centauri', 'proxima', 'barnard', 'betelgeuse', 'rigel', 'vega', 'polare', 'aldebaran', 'antares', 'deneb', 'arturo', 'canopo', 'altair', 'trappist1', 'capella', 'procione', 'spica', 'polluce', 'fomalhaut', 'tau-ceti', 'epsilon-eridani', '61-cygni'];

  Mini3D.scenes.spaceStars = function (host, opts = {}) {
    const v = new SpaceView(host, { cls: 'sp-stars' });
    v.hud.innerHTML = `<b>${tr('loading')}</b>`;
    loadStars().then((S) => { if (!v.dead) init(S); });
    return v;

    function init(S) {
      const cam = new Cam(); cam.dist = 0; cam.fov = 70 * D2R; cam.near = 1e-4;
      const look = (dir) => { const d = V.mul(V.norm(dir), -1); cam.yaw = Math.atan2(d[1], d[0]); cam.pitch = Math.asin(clamp(d[2], -1, 1)); };
      look(S.byId.betelgeuse.dir); cam.pitch = Math.max(cam.pitch, -0.2);
      const st = { lines: true, labels: true, grid: true, vp: null };
      const SUN = { id: 'sole', name: 'Sole', pos: [0, 0, 0], Mv: 4.83, rgb: tempRGB(5772), T: 5772, sp: 'G2V', dly: 0, sun: true };
      const band = milkyBand(11); const back = makeBackdrop(1400, 5);
      const stars = S.list.concat([SUN]);
      let drawn = [];
      const conCol = {}; S.cons.forEach((c, i) => (conCol[c.id] = `hsla(${(i * 47) % 360},70%,72%,`));

      /* controlli */
      const g1 = v.group();
      v.btn('🌍 ' + tr('fromEarth'), () => goTo(null, 0), { parent: g1 });
      v.btn('🔭 100 ' + tr('ly'), () => { tween(cam, 'dist', 100, 1800); }, { parent: g1 });
      v.btn('🚀 1.500 ' + tr('ly'), () => { tween(cam, 'dist', 1500, 2200); }, { parent: g1 });
      const g2 = v.group('sp-slider');
      const sl = el('input', 'sp-range'); sl.type = 'range'; sl.min = 0; sl.max = 1000; sl.step = 1; sl.value = 0; sl.setAttribute('aria-label', tr('distSun'));
      sl.oninput = () => { if (cam._tw) delete cam._tw.dist; cam.dist = sl.value <= 0 ? 0 : Math.pow(10, (sl.value / 1000) * 4.6 - 1); };
      g2.appendChild(sl);
      const g3 = v.group();
      v.btn('✳️ ' + tr('lines'), (b, on) => (st.lines = on), { toggle: true, on: true, parent: g3 });
      v.btn('🏷️ ' + tr('labels'), (b, on) => (st.labels = on), { toggle: true, on: true, parent: g3 });
      v.btn('◎ ' + tr('grid'), (b, on) => (st.grid = on), { toggle: true, on: true, parent: g3 });
      const sel = el('select', 'sp-sel'); sel.setAttribute('aria-label', tr('fly'));
      sel.innerHTML = `<option value="">✈️ ${tr('fly')}…</option>` + FAMOUS.filter((id) => S.byId[id]).map((id) => `<option value="${id}">${esc(starName(S.byId[id]))}</option>`).join('');
      sel.onchange = () => { const s = S.byId[sel.value]; if (s) { goTo(s, Math.max(3, s.dly * 0.15)); look(V.sub(s.pos, V.mul(V.norm(s.pos), 1))); select(s); } sel.value = ''; };
      g3.appendChild(sel);

      function goTo(s, dist) {
        tween(cam, 'T', s ? s.pos.slice() : [0, 0, 0], 2200); tween(cam, 'dist', dist, 2200); if (!s && dist === 0) cam.fov = 70 * D2R;
        st.vp = s;
      }
      function appMag(s) { const d = Math.max(V.len(V.sub(s.pos, cam.C)), 1e-6); return s.Mv + 5 * Math.log10(d / PC_LY / 10); }

      v.onDrag = (dx, dy) => { const k = cam.dist < 0.01 ? cam.fov / v.H : 0.006; cam.yaw += dx * k * (cam.dist < 0.01 ? 1 : -1); cam.pitch = clamp(cam.pitch + dy * k * (cam.dist < 0.01 ? -1 : 1), -1.5, 1.5); };
      v.onZoom = (f) => {
        if (cam._tw) { delete cam._tw.dist; }
        if (cam.dist < 0.01) {
          if (f < 1 && cam.fov >= 95 * D2R) { cam.dist = 0.3; return; }
          cam.fov = clamp(cam.fov / f, 12 * D2R, 95 * D2R); cam.dist = 0; return;
        }
        cam.dist = cam.dist / f; if (cam.dist < 0.25) cam.dist = 0; cam.dist = Math.min(cam.dist, 5000);
      };
      v.onTap = (x, y) => {
        let best = null, bd = 16;
        for (const d of drawn) { const dd = Math.hypot(d.x - x, d.y - y) - d.r * 0.5; if (dd < bd) { bd = dd; best = d; } }
        if (best) select(best.s); else v.hideCard();
      };
      v.onHover = (x, y) => { v.canvas.style.cursor = drawn.some((d) => Math.hypot(d.x - x, d.y - y) < 14) ? 'pointer' : 'grab'; };
      let selected = null;
      function select(s) {
        selected = s;
        if (s.sun) { v.showCard(`<h4>☀️ ${esc(BY.sole ? objName(BY.sole) : 'Sole')}</h4><p class="sp-kind">${BY.sole ? esc(BY.sole.kind) : 'G2V'}</p><div class="sp-acts"><a class="sp-btn on" href="#/spazio/sole">📖 ${tr('open')}</a><button class="sp-btn" data-go>👁️ ${tr('fromEarth')}</button></div>`); v.card.querySelector('[data-go]').onclick = () => goTo(null, 0); return; }
        const ph = starPhys(s); const con = S.conOf[s.con];
        const o = ph.obj;
        let h = `<h4>${esc(starName(s))}</h4><p class="sp-kind">${esc(s.desig)}${con ? ' · ' + esc(conName(con)) : ''}</p><dl>`;
        h += `<dt>${tr('distSun')}</dt><dd>${fmt(s.dly, s.dly < 20 ? 2 : 0)} ${tr('ly')}</dd>`;
        h += `<dt>${tr('type')}</dt><dd>${esc(s.sp)} <i class="sp-dot" style="background:${rgbStr(s.rgb)}"></i></dd>`;
        h += `<dt>${tr('temp')}</dt><dd>≈ ${fmt(Math.round(ph.T / 100) * 100)} K</dd>`;
        h += `<dt>${tr('radius')}</dt><dd>≈ ${fmt(ph.R, ph.R < 10 ? 2 : 0)} × ☀️</dd>`;
        h += `<dt>${tr('lum')}</dt><dd>≈ ${ph.L < 0.01 ? fmt(ph.L, 4) : ph.L < 10 ? fmt(ph.L, 2) : big(Math.round(ph.L))} × ☀️</dd>`;
        h += `<dt>${tr('mag')}</dt><dd>${fmt(s.mag, 2)}${s.mag > 6 ? ' 🔭' : ' 👁️'}</dd></dl>`;
        if (o && o.cur) h += `<p class="sp-note">💡 ${esc(o.cur[0])}</p>`;
        h += `<div class="sp-acts">${o ? `<a class="sp-btn on" href="#/spazio/${o.id}">📖 ${tr('open')}</a>` : ''}<button class="sp-btn" data-look>👁️ ${tr('lookHere')}</button><button class="sp-btn" data-fly>🎯 ${tr('fly')}</button></div>`;
        v.showCard(h, () => (selected = null));
        v.card.querySelector('[data-look]').onclick = () => { goTo(s, 0); look(V.mul(s.pos, -1)); cam.fov = 80 * D2R; };
        v.card.querySelector('[data-fly]').onclick = () => goTo(s, Math.max(4, Math.min(60, s.dly * 0.2)));
      }

      v.draw = (ctx) => {
        stepTweens(cam);
        const W = v.W, H = v.H; cam.update(W, H);
        spaceBg(ctx, W, H, '#070b22');
        const far = smooth(300, 3000, cam.dist);
        drawMilky(ctx, cam, band, 1 - far * 0.7);
        drawBackdrop(ctx, cam, back, 0.8 * (1 - far * 0.6));
        // anelli di distanza intorno al Sole (sul piano galattico)
        if (st.grid && cam.dist > 3) {
          [10, 50, 100, 500, 1000, 2000].forEach((R) => {
            const pts = []; for (let i = 0; i <= 96; i++) { const th = (i / 96) * TAU; pts.push(galToEq([R * Math.cos(th), R * Math.sin(th), 0])); }
            const a = smooth(R * 0.05, R * 0.4, cam.dist) * (1 - smooth(R * 6, R * 30, cam.dist));
            if (a < 0.02) return; ctx.strokeStyle = `rgba(56,189,248,${0.28 * a})`; ctx.lineWidth = 1; ctx.setLineDash([4, 6]); polyline(ctx, cam, pts); ctx.setLineDash([]);
            const q = cam.p(galToEq([R * Math.cos(-0.5), R * Math.sin(-0.5), 0])); if (q) text(ctx, fmt(R) + ' ' + tr('ly'), q[0], q[1], { color: `rgba(125,211,252,${a})`, size: 11, weight: 400 });
          });
        }
        // stelle
        drawn = []; const P = {};
        const fovK = 1 / Math.tan(cam.fov / 2) * 0.75;
        ctx.globalCompositeOperation = 'lighter';
        for (const s of stars) {
          const q = cam.p(s.pos); if (!q) continue; P[s.id] = q;
          const m = appMag(s); const sz = clamp((6.6 - m) * 0.62 * Math.sqrt(fovK), 0.5, 10);
          const a = clamp(1.25 - (m - 4.5) * 0.22, 0.12, 1);
          if (q[0] < -40 || q[0] > W + 40 || q[1] < -40 || q[1] > H + 40) continue;
          if (m < 3) glow(ctx, q[0], q[1], sz * 5.5, s.rgb, 0.42 * a);
          ctx.fillStyle = rgbStr([Math.min(255, s.rgb[0] + 30), Math.min(255, s.rgb[1] + 30), Math.min(255, s.rgb[2] + 30)], a);
          ctx.beginPath(); ctx.arc(q[0], q[1], sz, 0, TAU); ctx.fill();
          drawn.push({ s, x: q[0], y: q[1], r: sz, m });
        }
        ctx.globalCompositeOperation = 'source-over';
        // costellazioni
        if (st.lines) {
          const la = 1 - smooth(800, 4000, cam.dist) * 0.6;
          for (const c of S.cons) {
            ctx.strokeStyle = conCol[c.id] + (0.45 * la) + ')'; ctx.lineWidth = 1.1;
            ctx.beginPath(); let n = 0, sx = 0, sy = 0;
            for (const [a, b] of c.lines) { const p = P[a.id], q = P[b.id]; if (!p || !q) continue; if (Math.hypot(p[0] - q[0], p[1] - q[1]) > Math.max(W, H)) continue; ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); }
            ctx.stroke();
            for (const s of c.stars) { const p = P[s.id]; if (p && p[0] > 0 && p[0] < W && p[1] > 0 && p[1] < H) { sx += p[0]; sy += p[1]; n++; } }
            if (n >= 2 && st.labels) text(ctx, conName(c).toUpperCase(), sx / n, sy / n - 16, { color: conCol[c.id] + (0.7 * la) + ')', size: 10, weight: 800, align: 'center', halo: 'rgba(3,6,20,.5)' });
          }
        }
        // nomi delle stelle
        if (st.labels) {
          Labels.reset();
          for (const d of drawn.slice().sort((a, b) => a.m - b.m)) {
            const s = d.s; const fam = FAMOUS.includes(s.id);
            if (d.m < 1.3 || (fam && d.m < 4.5) || s.sun || (cam.dist > 1 && V.len(V.sub(s.pos, cam.T)) < Math.max(14, cam.dist * 0.6) && d.m < 13)) {
              Labels.put(ctx, s.sun ? '☀️ ' + (BY.sole ? objName(BY.sole) : 'Sole') : starName(s), d.x + d.r + 5, d.y, { color: s.sun ? '#fde68a' : '#e2e8f0', size: 11.5, weight: fam ? 700 : 500 });
            }
          }
        }
        if (selected && P[selected.id]) { const q = P[selected.id]; ctx.strokeStyle = 'rgba(250,204,21,.9)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(q[0], q[1], 11, 0, TAU); ctx.stroke(); }
        // HUD
        const vpName = st.vp ? starName(st.vp) : (BY.sole ? objName(BY.sole) : tr('nearSun'));
        const dSun = V.len(cam.C);
        v.hud.innerHTML = `<b>${cam.dist < 0.01 ? (st.vp ? '👁️ ' + esc(vpName) : '🌍 ' + tr('fromEarth')) : '🚀 ' + fmt(dSun, dSun < 10 ? 1 : 0) + ' ' + tr('ly') + ' · ' + esc(vpName)}</b><small>${tr('distSun')}: ${fmt(dSun, dSun < 10 ? 2 : 0)} ${tr('ly')}</small>`;
        if (document.activeElement !== sl) sl.value = cam.dist <= 0.01 ? 0 : ((Math.log10(cam.dist) + 1) / 4.6) * 1000;
        if (cam.dist > 0.01) scaleBar(v, cam.worldPerPx(), 1); else v.foot.innerHTML = `<span class="sp-scale"><b>${fmt(cam.fov * R2D, 0)}° </b></span>`;
      };
      if (opts.focus && S.byId[opts.focus]) { const s = S.byId[opts.focus]; look(s.dir); setTimeout(() => select(s), 300); }
    }
  };

  /* ======================================================================
     Generatore di galassie a spirale (particelle) – usato in più scene
     ====================================================================== */
  /* restituisce particelle {p:[x,y,z], c:[r,g,b], a, s} in anni luce, centro nell'origine, disco nel piano xy */
  function makeSpiral(o = {}) {
    const r = rng(o.seed || 1); const R = o.R || 50000; const k = Math.tan((o.pitch || 12) * D2R);
    const out = []; const N = o.n || 9000; const arms = o.arms || [{ ph: 180, w: 1 }, { ph: 270, w: 0.6 }, { ph: 360, w: 1 }, { ph: 450, w: 0.6 }];
    const r0 = (o.r0 || 0.64) * R; const bar = o.bar == null ? 0.3 * R : o.bar * R; const barAng = (o.barAng != null ? o.barAng : 153) * D2R;
    const push = (x, y, z, c, a, s) => out.push({ p: [x, y, z], c, a, s });
    const nb = N * (o.bulge || 0.16) | 0, nbar = bar ? N * 0.1 | 0 : 0, ndisk = N * 0.22 | 0, narm = N - nb - nbar - ndisk;
    for (let i = 0; i < nb; i++) { const s = R * 0.07; push(gauss(r) * s, gauss(r) * s, gauss(r) * s * 0.7, [255, 222, 170], 0.18 + r() * 0.3, 1 + r()); }
    for (let i = 0; i < nbar; i++) { const u = (r() * 2 - 1) * bar, w = gauss(r) * bar * 0.18; push(u * Math.cos(barAng) - w * Math.sin(barAng), u * Math.sin(barAng) + w * Math.cos(barAng), gauss(r) * R * 0.02, [255, 214, 160], 0.25 + r() * 0.3, 1); }
    for (let i = 0; i < ndisk; i++) { const rr = -Math.log(1 - r() * 0.98) * R * 0.3; const th = r() * TAU; push(rr * Math.cos(th), rr * Math.sin(th), gauss(r) * R * 0.012, [225, 225, 255], 0.25 + r() * 0.3, 1); }
    const wsum = arms.reduce((s, a) => s + a.w, 0);
    for (let i = 0; i < narm; i++) {
      let pick = r() * wsum, A = arms[0]; for (const a of arms) { pick -= a.w; if (pick <= 0) { A = a; break; } }
      const rr = (bar || R * 0.08) + Math.pow(r(), 0.8) * (R - (bar || R * 0.08));
      const th = A.ph * D2R + Math.log(rr / r0) / k;
      const spread = R * 0.035 * (0.6 + rr / R);
      const x = rr * Math.cos(th) + gauss(r) * spread, y = rr * Math.sin(th) + gauss(r) * spread;
      const hot = r() < 0.07; const young = r() < 0.5;
      push(x, y, gauss(r) * R * 0.008, hot ? [255, 120, 160] : young ? [170, 200, 255] : [235, 235, 255], hot ? 0.9 : 0.4 + r() * 0.5, hot ? 1.6 : 1);
    }
    if (o.spur) for (let i = 0; i < N * 0.03; i++) { const t2 = r(); const th = (160 + t2 * 45) * D2R; const rr = R * (0.5 + 0.05 * Math.sin(t2 * 3)) + gauss(r) * R * 0.012 + t2 * R * 0.04; push(rr * Math.cos(th), rr * Math.sin(th), gauss(r) * R * 0.006, [190, 210, 255], 0.5, 1); }
    return out;
  }
  /* orientamento di una galassia: normale al disco da inclinazione e angolo di posizione nel cielo */
  function diskBasis(raDeg, decDeg, inc, pa) {
    const a = raDeg * D2R, d = decDeg * D2R; const los = radec(a, d); // dalla Terra verso la galassia
    const N = V.norm([-Math.sin(d) * Math.cos(a), -Math.sin(d) * Math.sin(a), Math.cos(d)]); const E = V.cross([0, 0, 1], los).map((x) => x) ; const En = V.norm(E);
    const major = V.norm(V.add(V.mul(N, Math.cos(pa * D2R)), V.mul(En, Math.sin(pa * D2R))));
    const minor = V.cross(los, major);
    const n = V.norm(V.add(V.mul(los, Math.cos(inc * D2R)), V.mul(minor, Math.sin(inc * D2R))));
    const u = major, w = V.cross(n, u);
    return [eqToGal(u), eqToGal(w), eqToGal(n)];
  }

  /* ======================================================================
     SCENA: viaggio nel cosmo (anni luce, coordinate galattiche, Sole nell'origine)
     ====================================================================== */
  const GC = [26000, 0, 0];
  const LGAL = [
    ['andromeda', 'M31 Andromeda', 121.17, -21.57, 2.5e6, 152000, [10.68, 41.27, 77, 38]],
    ['triangolo', 'M33 Triangolo', 133.61, -31.33, 2.73e6, 60000, [23.46, 30.66, 55, 23]],
    ['grande-nube', 'Grande Nube di Magellano', 280.47, -32.89, 1.6e5, 32000, [80.89, -69.76, 35, 170]],
    ['piccola-nube', 'Piccola Nube di Magellano', 302.80, -44.30, 2.0e5, 19000, null],
    [null, 'M32', 121.15, -21.98, 2.49e6, 6500, null], [null, 'M110', 120.72, -21.14, 2.69e6, 17000, null],
    [null, 'Nana del Sagittario', 5.6, -14.2, 7.0e4, 10000, null], [null, 'NGC 6822', 25.34, -18.40, 1.6e6, 7000, null],
    [null, 'IC 10', 118.97, -3.33, 2.2e6, 5000, null], [null, 'IC 1613', 129.73, -60.58, 2.38e6, 12000, null],
    [null, 'WLM', 75.86, -73.62, 3.04e6, 8000, null], [null, 'Leo I', 225.99, 49.11, 8.2e5, 2000, null], [null, 'Leo II', 220.17, 67.23, 6.9e5, 2000, null],
    [null, 'Fornace', 237.10, -65.65, 4.6e5, 4000, null], [null, 'Scultore', 287.53, -83.16, 2.9e5, 3000, null], [null, 'Draco', 86.37, 34.72, 2.6e5, 2000, null],
    [null, 'Orsa Minore (nana)', 104.97, 44.80, 2.25e5, 1000, null], [null, 'Carena (nana)', 260.11, -22.22, 3.3e5, 1500, null], [null, 'Sestante', 243.50, 42.27, 2.9e5, 3000, null],
    [null, 'NGC 185', 120.79, -14.48, 2.08e6, 8000, null], [null, 'NGC 147', 119.82, -14.25, 2.53e6, 10000, null]
  ].map(([obj, name, l, b, d, D, ori]) => ({ obj, name, pos: galLB(l, b, d), D, ori }));
  const STAGES = [
    ['earth', 3e-9, 'La Terra, la nostra casa: 12.742 km di diametro. La Luna le gira intorno a circa 384.400 km.'],
    ['solar', 9e-4, 'Il Sole e gli otto pianeti. La luce del Sole impiega circa 4 ore per arrivare fino a Nettuno.'],
    ['oort', 4, 'Oltre i pianeti, miliardi di comete ghiacciate formano la Nube di Oort, che arriva forse fino a 1,5 anni luce dal Sole.'],
    ['stars', 45, 'Le stelle più vicine. Proxima Centauri è a 4,24 anni luce: la sua luce impiega più di 4 anni per arrivare.'],
    ['mw', 1.25e5, 'La Via Lattea: tra 100 e 400 miliardi di stelle in un disco largo circa 100.000 anni luce. Il Sole è in un braccio laterale.'],
    ['lg', 5e6, 'Il Gruppo Locale: Via Lattea, Andromeda, Triangolo e decine di galassie nane, in circa 10 milioni di anni luce.'],
    ['uni', 1.8e11, 'L\'Universo osservabile: una sfera di circa 93 miliardi di anni luce di diametro, con miliardi di galassie disposte in una rete cosmica.']
  ];
  function webPoints(seed, R, nodes, per) {
    const r = rng(seed); const N = []; for (let i = 0; i < nodes; i++) { const u = Math.cbrt(r()) * R; N.push(V.mul(V.norm([gauss(r), gauss(r), gauss(r)]), u)); }
    const pts = [];
    N.forEach((a, i) => {
      const nb = N.map((b, j) => [V.len(V.sub(a, b)), j]).sort((x, y) => x[0] - y[0]).slice(1, 4);
      nb.forEach(([dd, j]) => { if (j < i) return; const b = N[j]; for (let k = 0; k < per; k++) { const tt = r(); const p = V.add(V.lerp(a, b, tt), V.mul([gauss(r), gauss(r), gauss(r)], dd * 0.04)); pts.push({ p, a: 0.15 + r() * 0.4, c: r() < 0.3 ? [255, 210, 170] : [170, 190, 255] }); } });
      for (let k = 0; k < per * 0.6; k++) pts.push({ p: V.add(a, V.mul([gauss(r), gauss(r), gauss(r)], R * 0.01)), a: 0.45, c: [255, 225, 200] });
    });
    return pts;
  }

  Mini3D.scenes.spaceCosmos = function (host, opts = {}) {
    const v = new SpaceView(host, { cls: 'sp-cosmos' });
    v.hud.innerHTML = `<b>${tr('loading')}</b>`;
    loadStars().then((S) => { if (!v.dead) init(S); });
    return v;
    function init(S) {
      const cam = new Cam(); cam.fov = 55 * D2R; cam.near = 0;
      let logD = Math.log10(opts.stage ? (STAGES.find((s) => s[0] === opts.stage) || STAGES[0])[1] : STAGES[0][1]);
      const st = { labels: true, tw: null };
      const jd = jdOf(new Date());
      const toGal = (au) => V.mul(eqToGal(eclToEq(au)), 1 / LY_AU);
      const earth = toGal(helio('earth', jd));
      { const sd = V.norm(V.mul(earth, -1)); cam.yaw = Math.atan2(sd[1], sd[0]) + 0.75; cam.pitch = clamp(Math.asin(sd[2]) + 0.35, -1.2, 1.2); }
      const moon = V.add(earth, V.mul(eqToGal(eclToEq(moonGeo(jd))), 1 / LY_KM));
      const planets = SOLB.filter((b) => b.id !== 'sun' && !b.dwarf).map((b) => ({ b, pos: toGal(helio(b.id, jd)), path: orbitPath(b.id, jd, 160).map(toGal) }));
      const kuiper = makeBelts().kuiper.map((o) => toGal(partPos(o, jd)));
      const oort = (() => { const r = rng(21); const a = []; for (let i = 0; i < 2600; i++) { const R = (0.03 + Math.pow(r(), 0.7) * 1.55); a.push(V.mul(V.norm([gauss(r), gauss(r), gauss(r)]), R)); } return a; })();
      const near = S.list.map((s) => ({ s, p: eqToGal(s.pos) }));
      const gal = makeSpiral({ seed: 4, R: 50000, n: 11000, spur: true }).map((q) => ({ ...q, p: V.add(q.p, GC) }));
      const lg = LGAL.map((g) => {
        if (!g.ori) return { ...g };
        const [u, w, n] = diskBasis(g.ori[0], g.ori[1], g.ori[2], g.ori[3]);
        const R = g.D / 2; const parts = makeSpiral({ seed: g.D | 0, R, n: g.obj === 'grande-nube' ? 900 : 1800, bar: g.obj === 'grande-nube' ? 0.25 : 0.15, arms: g.obj === 'andromeda' ? [{ ph: 0, w: 1 }, { ph: 180, w: 1 }] : undefined, pitch: g.obj === 'andromeda' ? 8 : 18 })
          .map((q) => ({ ...q, p: V.add(g.pos, V.add(V.add(V.mul(u, q.p[0]), V.mul(w, q.p[1])), V.mul(n, q.p[2]))) }));
        return { ...g, parts };
      });
      const web1 = webPoints(9, 1.6e9, 60, 60), web2 = webPoints(10, 4.4e10, 220, 34);
      const CL = [[tr('virgo'), galLB(283.8, 74.5, 5.4e7), 'm87'], [tr('coma'), galLB(58.1, 88.0, 3.2e8)], [tr('lania'), galLB(307, 9, 2.5e8)]];
      const back = makeBackdrop(900, 8);

      /* controlli */
      const g1 = v.group('sp-stages');
      const nep = eqToGal(eclToEq([0, 0, 1])); const yE = Math.atan2(nep[1], nep[0]), pE = Math.asin(nep[2]);
      const ANG = { solar: [yE + 0.3, pE - 0.75], oort: [yE + 0.3, pE - 0.6], stars: [2.4, 0.35], mw: [Math.PI, 1.0], lg: [(121 + 90) * D2R, 0.42], uni: [2.0, 0.35] };
      const turn = (id) => { const a = ANG[id]; if (!a) return; let y = a[0]; while (y - cam.yaw > Math.PI) y -= TAU; while (cam.yaw - y > Math.PI) y += TAU; tween(cam, 'yaw', y, 2000); tween(cam, 'pitch', clamp(a[1], -1.45, 1.45), 2000); };
      const sbtn = STAGES.map(([id, d]) => v.btn(tr('st.' + id), () => { go(d); turn(id); }, { parent: g1 }));
      const g2 = v.group();
      v.btn('➖', () => go(Math.pow(10, logD + 0.7)), { parent: g2, title: tr('zoomOut') });
      v.btn('➕', () => go(Math.pow(10, logD - 0.7)), { parent: g2, title: tr('zoomIn') });
      v.btn('🏷️ ' + tr('labels'), (b, on) => (st.labels = on), { toggle: true, on: true, parent: g2 });
      if (opts.stage && ANG[opts.stage]) { cam.yaw = ANG[opts.stage][0]; cam.pitch = ANG[opts.stage][1]; }
      function go(d) { st.tw = { from: logD, to: clamp(Math.log10(d), -8.8, 11.5), t0: performance.now(), ms: 1200 + 260 * Math.abs(Math.log10(d) - logD) }; st.tw.ms = Math.min(st.tw.ms, 4200); }
      v.onDrag = (dx, dy) => { if (cam._tw) { delete cam._tw.yaw; delete cam._tw.pitch; } cam.yaw -= dx * 0.006; cam.pitch = clamp(cam.pitch + dy * 0.006, -1.5, 1.5); };
      v.onZoom = (f) => { st.tw = null; logD = clamp(logD - Math.log10(f), -8.8, 11.5); };
      let drawn = [];
      v.onTap = (x, y) => {
        let best = null, bd = 18; for (const d of drawn) { const dd = Math.hypot(d.x - x, d.y - y) - d.r; if (dd < bd) { bd = dd; best = d; } }
        if (!best) return v.hideCard();
        const o = best.obj && BY[best.obj];
        let h = `<h4>${esc(best.name)}</h4>${o ? `<p class="sp-kind">${esc(o.kind)}</p>` : ''}<dl>`;
        if (best.dist != null) h += `<dt>${tr('distSun')}</dt><dd>${distLy(best.dist)}</dd>`;
        if (best.D) h += `<dt>${tr('compare')}</dt><dd>⌀ ${big(best.D)} ${tr('ly')}</dd>`;
        h += `</dl><div class="sp-acts">${o ? `<a class="sp-btn on" href="#/spazio/${o.id}">📖 ${tr('open')}</a>` : ''}${best.go ? `<button class="sp-btn" data-go>🎯 ${tr('fly')}</button>` : ''}</div>`;
        v.showCard(h); const gb = v.card.querySelector('[data-go]'); if (gb) gb.onclick = () => go(best.go);
      };

      v.draw = (ctx) => {
        if (st.tw) { const f = clamp((performance.now() - st.tw.t0) / st.tw.ms, 0, 1); const e = f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2; logD = lerp(st.tw.from, st.tw.to, e); if (f >= 1) st.tw = null; }
        stepTweens(cam); const L = logD; cam.dist = Math.pow(10, L);
        cam.T = V.add(V.mul(earth, 1 - smooth(-7.2, -5.4, L)), V.mul(GC, smooth(3.4, 4.7, L)));
        const W = v.W, H = v.H; cam.update(W, H); drawn = [];
        spaceBg(ctx, W, H, L > 6 ? '#080a1c' : '#0a1030');
        drawBackdrop(ctx, cam, back, (1 - smooth(3.5, 5, L)) * 0.8);
        ctx.globalCompositeOperation = 'lighter';
        // rete cosmica
        const wa = smooth(6.3, 7.6, L);
        if (wa > 0.01) for (const w of (L < 9.6 ? web1 : web2)) { const q = cam.p(w.p); if (!q) continue; ctx.fillStyle = rgbStr(w.c, w.a * wa * 0.5); ctx.fillRect(q[0], q[1], 1.3, 1.3); }
        if (L > 9.2 && L < 9.9) for (const w of web2) { const q = cam.p(w.p); if (!q) continue; ctx.fillStyle = rgbStr(w.c, w.a * smooth(9.2, 9.9, L) * 0.7); ctx.fillRect(q[0], q[1], 1.3, 1.3); }
        // Via Lattea
        const ga = smooth(3.0, 4.2, L) * (1 - smooth(8.3, 9.2, L));
        if (ga > 0.01) {
          const pxs = cam.focal / Math.max(cam.dist, 1);
          if (pxs * 100000 < 3) { const q = cam.p(GC); if (q) glow(ctx, q[0], q[1], 6, [220, 220, 255], ga); }
          else for (const g of gal) { const q = cam.p(g.p); if (!q) continue; const s = g.s * clamp(pxs * 300, 0.7, 2.2); ctx.fillStyle = rgbStr(g.c, g.a * ga * 0.55); ctx.fillRect(q[0], q[1], s, s); }
          const q = cam.p(GC); if (q) glow(ctx, q[0], q[1], Math.max(8, cam.px(9000, q[2])), [255, 214, 160], 0.35 * ga);
          drawn.push({ name: BY['via-lattea'] ? objName(BY['via-lattea']) : 'Via Lattea', obj: 'via-lattea', x: q ? q[0] : -99, y: q ? q[1] : -99, r: q ? Math.max(10, cam.px(30000, q[2])) : 0, dist: 26000, D: 100000, go: 1.25e5, big: L > 5.5 });
        }
        // Gruppo Locale
        const la = smooth(4.9, 5.8, L) * (1 - smooth(9.5, 10.3, L));
        if (la > 0.01) for (const g of lg) {
          const q = cam.p(g.pos); if (!q) continue; const px = cam.px(g.D / 2, q[2]);
          if (g.parts && px > 6) for (const p of g.parts) { const qq = cam.p(p.p); if (qq) { ctx.fillStyle = rgbStr(p.c, p.a * la * 0.6); ctx.fillRect(qq[0], qq[1], 1.2, 1.2); } }
          glow(ctx, q[0], q[1], Math.max(4, px * 0.9), g.parts ? [230, 220, 255] : [200, 210, 255], (g.parts ? 0.5 : 0.35) * la);
          drawn.push({ name: g.obj && BY[g.obj] ? objName(BY[g.obj]) : g.name, obj: g.obj, x: q[0], y: q[1], r: Math.max(5, px * 0.6), dist: V.len(g.pos), D: g.D, lbl: la, big: !!g.obj, go: g.D * 3 });
        }
        // ammassi e superammassi
        const ca = smooth(6.8, 7.6, L) * (1 - smooth(10, 10.6, L));
        if (ca > 0.01) for (const c of CL) { const q = cam.p(c[1]); if (!q) continue; glow(ctx, q[0], q[1], 14, [255, 220, 190], 0.5 * ca); drawn.push({ name: c[0], x: q[0], y: q[1], r: 8, dist: V.len(c[1]), lbl: ca, big: true }); }
        // nube di Oort, fascia di Kuiper
        const oa = smooth(-2.3, -1.2, L) * (1 - smooth(1.4, 2.4, L));
        if (oa > 0.01) for (const p of oort) { const q = cam.p(p); if (q) { ctx.fillStyle = `rgba(170,205,255,${0.6 * oa})`; ctx.fillRect(q[0], q[1], 1.4, 1.4); } }
        const ka = smooth(-4.4, -3.6, L) * (1 - smooth(-1.6, -0.6, L));
        if (ka > 0.01) for (const p of kuiper) { const q = cam.p(p); if (q) { ctx.fillStyle = `rgba(170,200,255,${0.35 * ka})`; ctx.fillRect(q[0], q[1], 1.1, 1.1); } }
        // stelle vicine
        const sa = smooth(-1.4, 0, L) * (1 - smooth(3.4, 4.3, L));
        if (sa > 0.01) for (const n of near) {
          const q = cam.p(n.p); if (!q) continue; const sz = clamp(2.4 - n.s.Mv * 0.12, 0.6, 4);
          glow(ctx, q[0], q[1], sz * 4, n.s.rgb, 0.4 * sa); ctx.fillStyle = rgbStr(n.s.rgb, sa); ctx.beginPath(); ctx.arc(q[0], q[1], sz, 0, TAU); ctx.fill();
          const o = OBJ && OBJ.find((x) => x.star === n.s.id);
          drawn.push({ name: starName(n.s), obj: o ? o.id : null, x: q[0], y: q[1], r: sz + 2, dist: n.s.dly, lbl: sa * (n.s.dly < 12 || o ? 1 : 0), small: true });
        }
        ctx.globalCompositeOperation = 'source-over';
        // Sole
        const sunQ = cam.p([0, 0, 0]);
        if (sunQ && L > -6.8) {
          const tpx = cam.px(696000 / LY_KM, sunQ[2]); const sp = Math.max(tpx, L < 0.5 ? 6 : 2.5);
          ctx.globalCompositeOperation = 'lighter'; glow(ctx, sunQ[0], sunQ[1], sp * 5, [255, 200, 100], L < 4 ? 0.6 : 0.3); ctx.globalCompositeOperation = 'source-over';
          if (L < 4) drawBall(ctx, sunQ[0], sunQ[1], sp, '#ffd65a', true);
          drawn.push({ name: BY.sole ? objName(BY.sole) : 'Sole', obj: 'sole', x: sunQ[0], y: sunQ[1], r: sp, dist: 0, go: 1.4e-3, big: L < 4 });
        }
        // pianeti e orbite
        const pa = smooth(-7.6, -6.6, L) * (1 - smooth(-1.6, -0.8, L));
        if (pa > 0.01) for (const p of planets) {
          ctx.strokeStyle = `rgba(148,163,184,${0.35 * pa})`; ctx.lineWidth = 1; polyline(ctx, cam, p.path);
          const q = cam.p(p.pos); if (!q || p.b.id === 'earth' && L < -6) continue;
          const px = Math.max(cam.px(p.b.r / LY_KM, q[2]), 1.5 + 1.6 * Math.sqrt(p.b.r / 6371) * smooth(-7, -5, L));
          drawBall(ctx, q[0], q[1], px, p.b.color, false);
          drawn.push({ name: p.b.n[LI()], obj: p.b.obj, x: q[0], y: q[1], r: px, dist: V.len(p.pos), lbl: pa, big: true });
        }
        // Terra e Luna da vicino
        if (L < -4.8) {
          const qm = cam.p(moon); const ea = 1;
          const orbit = []; const mg = V.sub(moon, earth); const mr = V.len(mg); const [u, w] = planeBasis(V.norm(V.cross(mg, V.sub(V.add(earth, V.mul(eqToGal(eclToEq(moonGeo(jd + 3))), 1 / LY_KM)), earth))));
          for (let i = 0; i <= 96; i++) { const th = (i / 96) * TAU; orbit.push(V.add(earth, V.add(V.mul(u, mr * Math.cos(th)), V.mul(w, mr * Math.sin(th))))); }
          ctx.strokeStyle = 'rgba(203,213,225,.3)'; polyline(ctx, cam, orbit);
          if (qm) { const px = Math.max(cam.px(1737 / LY_KM, qm[2]), 2); drawSphere(ctx, 'moon', qm[0], qm[1], px, sunLight(cam, moon)); drawn.push({ name: BY.luna ? objName(BY.luna) : 'Luna', obj: 'luna', x: qm[0], y: qm[1], r: px, dist: null, lbl: ea, big: true }); }
          const qe = cam.p(earth);
          if (qe) { const px = Math.max(cam.px(6371 / LY_KM, qe[2]), 3); drawSphere(ctx, 'earth', qe[0], qe[1], px, sunLight(cam, earth), performance.now() / 9000); drawn.push({ name: BY.terra ? objName(BY.terra) : 'Terra', obj: 'terra', x: qe[0], y: qe[1], r: px, dist: null, lbl: ea, big: true }); }
        }
        // bordo dell'Universo osservabile
        if (L > 10.2) {
          const R = 4.65e10; const q = cam.p([0, 0, 0]);
          if (q && cam.dist > R) { const ang = Math.asin(R / cam.dist); const pr = Math.tan(ang) * cam.focal; const a = smooth(10.2, 10.8, L);
            const g = ctx.createRadialGradient(q[0], q[1], pr * 0.92, q[0], q[1], pr * 1.08); g.addColorStop(0, 'rgba(255,140,90,0)'); g.addColorStop(0.5, `rgba(255,150,110,${0.55 * a})`); g.addColorStop(1, 'rgba(255,140,90,0)');
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(q[0], q[1], pr * 1.08, 0, TAU); ctx.fill();
            if (st.labels) text(ctx, tr('cmb'), q[0], q[1] - pr * 1.08 - 10, { color: `rgba(254,202,202,${a})`, align: 'center', size: 12 });
          }
        }
        // etichette
        if (st.labels) {
          if (ga > 0.3 && L < 6.5) {
            const pxs = cam.focal / cam.dist;
            if (pxs * 100000 > 120) {
              const armL = [[tr('armPer'), 37000, 175], [tr('armSag'), 21000, 215], [tr('armSct'), 17500, 300], [tr('armNor'), 30000, 30], [tr('bar'), 0, 0]];
              for (const [n, rr, th] of armL) { const p = V.add(GC, [rr * Math.cos(th * D2R) - (rr ? 0 : 0), rr * Math.sin(th * D2R), 0]); const q = cam.p(rr ? p : V.add(GC, [6000, -14000, 0])); if (q) text(ctx, n, q[0], q[1], { color: `rgba(191,219,254,${0.9 * ga})`, size: 11, align: 'center' }); }
              const q = cam.p([0, 0, 0]); if (q) { ctx.strokeStyle = 'rgba(250,204,21,.9)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(q[0], q[1], 7, 0, TAU); ctx.stroke(); text(ctx, '☀️ ' + tr('you'), q[0] + 10, q[1] + 12, { color: '#fde68a', size: 12, weight: 800 }); }
              const qc = cam.p(GC); if (qc) text(ctx, tr('galCenter'), qc[0], qc[1] + 18, { color: 'rgba(254,243,199,.85)', size: 11, align: 'center' });
            }
          }
          if (oa > 0.3 && L > -1 && L < 1.3) { const q = cam.p([0, 1.2, 0.6]); if (q) text(ctx, tr('oort'), q[0], q[1], { color: 'rgba(186,230,253,.9)', size: 12, align: 'center' }); }
          if (ka > 0.3) { const q = cam.p(toGal([30, 35, 0])); if (q) text(ctx, tr('kuiper'), q[0], q[1], { color: 'rgba(186,230,253,.9)', size: 11, align: 'center' }); }
          if (wa > 0.4 && L > 7.4) { const q = cam.p(V.mul([0.4, 0.5, 0.3], Math.pow(10, L) * 0.5)); if (q) text(ctx, tr('web') + ' (' + tr('illus') + ')', 14, H - 44, { color: 'rgba(203,213,225,.75)', size: 11 }); }
          Labels.reset();
          for (const d of drawn.slice().sort((a, b) => (b.big ? 1 : 0) - (a.big ? 1 : 0) || b.r - a.r)) if ((d.lbl > 0.2 || d.big) && d.x > -50 && d.x < W + 50 && d.y > -20 && d.y < H + 20) Labels.put(ctx, d.name, d.x + d.r + 4, d.y, { color: d.small ? 'rgba(226,232,240,.85)' : '#f8fafc', size: d.small ? 10.5 : 12 });
        }
        // HUD
        let cur = 0; STAGES.forEach((s, i) => { if (L >= Math.log10(s[1]) - 0.9) cur = i; });
        sbtn.forEach((b, i) => b.classList.toggle('on', i === cur));
        v.hud.innerHTML = `<b>${tr('st.' + STAGES[cur][0])}</b><small>${STAGES[cur][2]}</small>`;
        scaleBar(v, cam.worldPerPx(), 1);
      };
    }
  };
  /* direzione della luce del Sole sullo schermo per un corpo in posizione p (Sole nell'origine) */
  function sunLight(cam, p) { const d = V.norm(V.mul(p, -1)); return V.norm([V.dot(d, cam.r), V.dot(d, cam.u), -V.dot(d, cam.f)]); }

  /* ======================================================================
     SCENA: cielo da una città (planetario)
     ====================================================================== */
  const CITIES = [
    [NM('Torino', 'Turin', 'Turin', 'Турин', 'Torino', 'Turin'), 45.07, 7.69], [NM('Milano', 'Milan', 'Milan', 'Милан', 'Milano', 'Mailand'), 45.46, 9.19],
    [NM('Roma', 'Rome', 'Rome', 'Рим', 'Roma', 'Rom'), 41.90, 12.50], [NM('Napoli', 'Naples', 'Naples', 'Неаполь', 'Napoli', 'Neapel'), 40.85, 14.27],
    [NM('Palermo', 'Palermo', 'Palerme', 'Палермо', 'Palermo', 'Palermo'), 38.12, 13.36], [NM('Londra', 'London', 'Londres', 'Лондон', 'Londra', 'London'), 51.51, -0.13],
    [NM('Parigi', 'Paris', 'Paris', 'Париж', 'Paris', 'Paris'), 48.86, 2.35], [NM('Bucarest', 'Bucharest', 'Bucarest', 'Бухарест', 'București', 'Bukarest'), 44.43, 26.10],
    [NM('Chișinău', 'Chișinău', 'Chișinău', 'Кишинёв', 'Chișinău', 'Chișinău'), 47.01, 28.86], [NM('Mosca', 'Moscow', 'Moscou', 'Москва', 'Moscova', 'Moskau'), 55.76, 37.62],
    [NM('New York', 'New York', 'New York', 'Нью-Йорк', 'New York', 'New York'), 40.71, -74.01], [NM('Quito (Equatore)', 'Quito (Equator)', 'Quito (équateur)', 'Кито (экватор)', 'Quito (Ecuator)', 'Quito (Äquator)'), -0.18, -78.47],
    [NM('Tokyo', 'Tokyo', 'Tokyo', 'Токио', 'Tokyo', 'Tokio'), 35.68, 139.69], [NM('Sydney', 'Sydney', 'Sydney', 'Сидней', 'Sydney', 'Sydney'), -33.87, 151.21],
    [NM('Città del Capo', 'Cape Town', 'Le Cap', 'Кейптаун', 'Cape Town', 'Kapstadt'), -33.92, 18.42], [NM('Buenos Aires', 'Buenos Aires', 'Buenos Aires', 'Буэнос-Айрес', 'Buenos Aires', 'Buenos Aires'), -34.60, -58.38],
    [NM('Polo Nord', 'North Pole', 'Pôle Nord', 'Северный полюс', 'Polul Nord', 'Nordpol'), 89.99, 0], [NM('Polo Sud', 'South Pole', 'Pôle Sud', 'Южный полюс', 'Polul Sud', 'Südpol'), -89.99, 0]
  ];
  Mini3D.scenes.spaceSky = function (host, opts = {}) {
    const v = new SpaceView(host, { cls: 'sp-sky' });
    v.hud.innerHTML = `<b>${tr('loading')}</b>`;
    loadStars().then((S) => { if (!v.dead) init(S); });
    return v;
    function init(S) {
      const now0 = new Date(); const h0 = now0.getHours(); const night0 = new Date(now0); if (h0 >= 7 && h0 < 19) night0.setHours(21, 0, 0, 0);
      const st = { t: night0.getTime(), city: 0, mode: 'horizon', az: 180 * D2R, alt: 32 * D2R, fov: 100 * D2R, domeZ: 1, lines: true, labels: true, atmo: true, grid: false, play: false };
      const band = milkyBand(11); const back = makeBackdrop(1200, 5);
      const conCol = {}; S.cons.forEach((c, i) => (conCol[c.id] = `hsla(${(i * 47) % 360},70%,75%,`));
      let drawn = [], selected = null;
      /* controlli */
      const g1 = v.group('sp-date');
      const cs = el('select', 'sp-sel'); cs.setAttribute('aria-label', tr('city'));
      cs.innerHTML = CITIES.map((c, i) => `<option value="${i}">📍 ${esc(c[0][LI()])}</option>`).join(''); cs.onchange = () => { st.city = +cs.value; };
      g1.appendChild(cs);
      const dt = el('input'); dt.type = 'datetime-local'; dt.setAttribute('aria-label', tr('date'));
      dt.onchange = () => { const d = new Date(dt.value); if (!isNaN(d)) st.t = d.getTime(); };
      g1.appendChild(dt);
      const g2 = v.group('sp-time');
      v.btn('⏪', () => (st.t -= 3600e3), { parent: g2, title: '−1 h' });
      const pb = v.btn('▶', (b) => { st.play = !st.play; b.textContent = st.play ? '⏸' : '▶'; b.classList.toggle('on', st.play); }, { parent: g2, title: tr('play') });
      v.btn('⏩', () => (st.t += 3600e3), { parent: g2, title: '+1 h' });
      v.btn('🕘 ' + tr('now'), () => (st.t = Date.now()), { parent: g2 });
      const g3 = v.group();
      const mb = v.btn('🔭 ' + tr('dome'), (b) => { st.mode = st.mode === 'dome' ? 'horizon' : 'dome'; b.innerHTML = st.mode === 'dome' ? '🌄 ' + tr('horizon') : '🔭 ' + tr('dome'); }, { parent: g3 });
      v.btn('✳️ ' + tr('lines'), (b, on) => (st.lines = on), { toggle: true, on: true, parent: g3 });
      v.btn('🏷️ ' + tr('labels'), (b, on) => (st.labels = on), { toggle: true, on: true, parent: g3 });
      v.btn('☀️ ' + tr('atmo'), (b, on) => (st.atmo = on), { toggle: true, on: true, parent: g3 });
      v.btn('➰ ' + tr('ecliptic'), (b, on) => (st.grid = on), { toggle: true, parent: g3 });

      v.onDrag = (dx, dy) => {
        if (st.mode === 'dome') { st.az += dx * 0.006 * (dy !== 0 ? 1 : 1); return; }
        const k = st.fov / v.W; st.az -= dx * k; st.alt = clamp(st.alt + dy * k, 2 * D2R, 88 * D2R);
      };
      v.onZoom = (f) => { if (st.mode === 'dome') st.domeZ = clamp(st.domeZ * f, 1, 3); else st.fov = clamp(st.fov / f, 20 * D2R, 160 * D2R); };
      v.onTap = (x, y) => {
        let best = null, bd = 16; for (const d of drawn) { const dd = Math.hypot(d.x - x, d.y - y) - d.r; if (dd < bd) { bd = dd; best = d; } }
        selected = best; if (!best) return v.hideCard();
        let h = `<h4>${esc(best.name)}</h4>${best.kind ? `<p class="sp-kind">${esc(best.kind)}</p>` : ''}<dl>`;
        h += `<dt>${tr('alt')}</dt><dd>${fmt(best.alt * R2D, 0)}° ${best.alt < 0 ? '(' + tr('below') + ')' : ''}</dd><dt>${tr('az')}</dt><dd>${fmt(((best.az * R2D) % 360 + 360) % 360, 0)}° ${cardinal(best.az)}</dd>`;
        if (best.extra) h += best.extra;
        h += `</dl><div class="sp-acts">${best.obj ? `<a class="sp-btn on" href="#/spazio/${best.obj}">📖 ${tr('open')}</a>` : ''}</div>`;
        v.showCard(h, () => (selected = null));
      };
      const CARD = () => [tr('card'), tr('card') + tr('cardE'), tr('cardE'), tr('cardS') + tr('cardE'), tr('cardS'), tr('cardS') + tr('cardW'), tr('cardW'), tr('card') + tr('cardW')];
      function cardinal(az) { const i = Math.round((((az * R2D) % 360 + 360) % 360) / 45) % 8; return CARD()[i]; }

      v.draw = (ctx, dtt) => {
        if (st.play) st.t += dtt * 600e3;
        const W = v.W, H = v.H; const city = CITIES[st.city]; const phi = city[1] * D2R;
        const jd = jdOf(new Date(st.t)); const lst = gmst(jd) + city[2] * D2R;
        const sL = Math.sin(lst), cL = Math.cos(lst), sp = Math.sin(phi), cp = Math.cos(phi);
        const toH = (e) => { const ce = cL * e[0] + sL * e[1]; return [-sL * e[0] + cL * e[1], cp * e[2] - sp * ce, sp * e[2] + cp * ce]; };
        // proiezione stereografica
        let f, r, u, S_, cx = W / 2, cy = H / 2;
        if (st.mode === 'dome') { f = [0, 0, 1]; r = [Math.cos(st.az), -Math.sin(st.az), 0]; u = V.cross(r, f); S_ = Math.min(W, H) * 0.46 / 2 * st.domeZ; }
        else { f = [Math.cos(st.alt) * Math.sin(st.az), Math.cos(st.alt) * Math.cos(st.az), Math.sin(st.alt)]; r = V.norm(V.cross(f, [0, 0, 1])); u = V.cross(r, f); S_ = (W / 2) / (2 * Math.tan(st.fov / 4)); }
        const proj = (h) => { const c = V.dot(h, f); if (c < -0.9) return null; const k = 2 / (1 + c); return [cx + k * V.dot(h, r) * S_, cy - k * V.dot(h, u) * S_, c]; };
        // Sole, Luna, pianeti
        const E = helio('earth', jd); const sunEq = V.norm(eclToEq(V.mul(E, -1))); const sunH = toH(sunEq); const sunAlt = Math.asin(clamp(sunH[2], -1, 1));
        const moonG = moonGeo(jd); const moonEq = V.norm(eclToEq(moonG)); const moonH = toH(moonEq);
        // cielo
        const day = st.atmo ? smooth(-0.21, 0.05, sunAlt) : 0; const twi = st.atmo ? smooth(-0.31, -0.05, sunAlt) * (1 - day) : 0;
        const top = mix3([4, 6, 18], [24, 54, 112], twi * 0.6); const topD = mix3(top, [56, 132, 214], day); const hor = mix3(mix3([12, 16, 38], [214, 120, 80], twi), [168, 210, 245], day);
        const g = st.mode === 'dome' ? ctx.createRadialGradient(cx, cy, 0, cx, cy, 2 * S_) : ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, rgbStr(topD)); g.addColorStop(1, rgbStr(hor)); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        const starA = st.atmo ? 1 - smooth(-0.22, -0.02, sunAlt) * 0.97 : 1;
        // Via Lattea
        if (starA > 0.05) {
          ctx.globalCompositeOperation = 'lighter';
          const base = S_ * 0.09;
          for (const p of band) { const h = toH(p.d); if (h[2] < -0.05) continue; const q = proj(h); if (!q) continue; glow(ctx, q[0], q[1], base * p.s * (2 / (1 + q[2])) * 0.6, [170, 180, 230], 0.05 * p.w * starA); }
          for (const s of back) { const h = toH(s); if (h[2] < 0) continue; const q = proj(h); if (q) { ctx.fillStyle = `rgba(235,240,255,${s[3] * 0.7 * starA})`; ctx.fillRect(q[0], q[1], 1, 1); } }
          ctx.globalCompositeOperation = 'source-over';
        }
        // eclittica e griglia
        if (st.grid) {
          ctx.strokeStyle = 'rgba(250,204,21,.55)'; ctx.setLineDash([5, 5]); ctx.lineWidth = 1.2; ctx.beginPath(); let pen = false;
          for (let i = 0; i <= 180; i++) { const l = (i / 180) * TAU; const q = proj(toH(eclToEq([Math.cos(l), Math.sin(l), 0]))); if (!q) { pen = false; continue; } pen ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); pen = true; }
          ctx.stroke(); ctx.setLineDash([]);
          ctx.strokeStyle = 'rgba(148,163,184,.25)'; [30, 60].forEach((a) => { ctx.beginPath(); let pn = false; for (let i = 0; i <= 120; i++) { const z = (i / 120) * TAU; const q = proj([Math.cos(a * D2R) * Math.sin(z), Math.cos(a * D2R) * Math.cos(z), Math.sin(a * D2R)]); if (!q) { pn = false; continue; } pn ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); pn = true; } ctx.stroke(); });
        }
        // stelle
        drawn = []; const P = {};
        const zoomK = st.mode === 'dome' ? st.domeZ : Math.sqrt(100 * D2R / st.fov);
        for (const s of S.list) {
          const h = toH(s.dir); const q = proj(h); if (!q) continue; P[s.id] = { q, up: h[2] > 0 };
          if (h[2] < 0) continue;
          const ext = 1 - 0.35 * Math.pow(1 - h[2], 4);
          const sz = clamp((6 - s.mag) * 0.5 * zoomK, 0.6, 7) * ext; const a = clamp((1.3 - (s.mag - 4) * 0.25) * starA, 0, 1);
          if (a < 0.03) continue;
          ctx.globalCompositeOperation = 'lighter'; if (s.mag < 1.6) glow(ctx, q[0], q[1], sz * 4.5, s.rgb, 0.35 * a); ctx.globalCompositeOperation = 'source-over';
          ctx.fillStyle = rgbStr([Math.min(255, s.rgb[0] + 40), Math.min(255, s.rgb[1] + 40), Math.min(255, s.rgb[2] + 40)], a); ctx.beginPath(); ctx.arc(q[0], q[1], sz, 0, TAU); ctx.fill();
          const ph = null; const o = OBJ && OBJ.find((x) => x.star === s.id);
          drawn.push({ name: starName(s), x: q[0], y: q[1], r: sz, alt: Math.asin(h[2]), az: Math.atan2(h[0], h[1]), obj: o ? o.id : null, kind: `${s.desig} · ${conName(S.conOf[s.con])}`, extra: `<dt>${tr('distEarth')}</dt><dd>${fmt(s.dly, s.dly < 20 ? 1 : 0)} ${tr('ly')}</dd><dt>${tr('type')}</dt><dd>${esc(s.sp)}</dd>`, mag: s.mag, star: true });
        }
        if (st.lines && starA > 0.05) {
          for (const c of S.cons) {
            ctx.strokeStyle = conCol[c.id] + (0.5 * starA) + ')'; ctx.lineWidth = 1.1; ctx.beginPath(); let n = 0, sx = 0, sy = 0;
            for (const [a, b] of c.lines) { const p = P[a.id], q = P[b.id]; if (!p || !q || (!p.up && !q.up)) continue; ctx.moveTo(p.q[0], p.q[1]); ctx.lineTo(q.q[0], q.q[1]); }
            ctx.stroke();
            for (const s of c.stars) { const p = P[s.id]; if (p && p.up) { sx += p.q[0]; sy += p.q[1]; n++; } }
            if (n >= 2 && st.labels) text(ctx, conName(c).toUpperCase(), sx / n, sy / n + 14, { color: conCol[c.id] + (0.85 * starA) + ')', size: 10, weight: 800, align: 'center' });
          }
        }
        // pianeti
        Labels.reset();
        const PL = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
        const PMAG = { mercury: 0, venus: -4.2, mars: 0.5, jupiter: -2.3, saturn: 0.6, uranus: 5.7, neptune: 7.8 };
        for (const id of PL) {
          const g2 = V.sub(helio(id, jd), E); const eq = V.norm(eclToEq(g2)); const h = toH(eq); const q = proj(h); if (!q) continue;
          const b = SOLB.find((x) => x.id === id); const dE = V.len(g2) * AU_KM;
          if (h[2] > -0.02) {
            const a = clamp((1.3 - (PMAG[id] - 4) * 0.25) * Math.max(starA, id === 'venus' || id === 'jupiter' ? 0.5 : 0), 0, 1);
            const sz = clamp((6 - PMAG[id]) * 0.45 * zoomK, 1.6, 6);
            if (a > 0.03) { glow(ctx, q[0], q[1], sz * 4, hexRGB(b.color), 0.3 * a); drawBall(ctx, q[0], q[1], sz, b.color, false); }
            if (st.labels && a > 0.1) Labels.put(ctx, b.n[LI()], q[0] + sz + 5, q[1], { color: '#fde68a', size: 12, weight: 700 });
          }
          drawn.push({ name: b.n[LI()], x: q[0], y: q[1], r: 6, alt: Math.asin(clamp(h[2], -1, 1)), az: Math.atan2(h[0], h[1]), obj: b.obj, kind: tr('planets'), extra: `<dt>${tr('distEarth')}</dt><dd>${big(dE)} ${tr('km')}</dd><dt>${tr('light')}</dt><dd>${lightTime(dE)}</dd>`, planet: true });
        }
        // Luna
        { const q = proj(moonH); if (q) {
          const pr = Math.max(5, (0.26 * D2R) * S_ * 2 * zoomK * 2.5); const el_ = Math.acos(clamp(V.dot(moonEq, sunEq), -1, 1)); const k = (1 - Math.cos(el_)) / 2;
          const q2 = proj(toH(V.norm(V.add(moonEq, V.mul(sunEq, 0.02))))); const ang = q2 ? Math.atan2(q2[1] - q[1], q2[0] - q[0]) : 0;
          if (moonH[2] > -0.03) { glow(ctx, q[0], q[1], pr * 4, [230, 230, 220], 0.25 * k); drawMoonPhase(ctx, q[0], q[1], pr, k, ang); if (st.labels) text(ctx, (BY.luna ? objName(BY.luna) : 'Luna') + ' ' + Math.round(k * 100) + '%', q[0] + pr + 5, q[1], { color: '#f1f5f9', size: 12, weight: 700 }); }
          drawn.push({ name: BY.luna ? objName(BY.luna) : 'Luna', x: q[0], y: q[1], r: pr, alt: Math.asin(clamp(moonH[2], -1, 1)), az: Math.atan2(moonH[0], moonH[1]), obj: 'luna', kind: tr('moonPhase') + ' ' + Math.round(k * 100) + '%', extra: `<dt>${tr('distEarth')}</dt><dd>${big(V.len(moonG))} ${tr('km')}</dd>` });
        } }
        // Sole
        { const q = proj(sunH); if (q) {
          const pr = Math.max(7, (0.27 * D2R) * S_ * 2 * zoomK * 2.5);
          if (sunH[2] > -0.03) { glow(ctx, q[0], q[1], pr * 8, [255, 220, 150], 0.6); drawBall(ctx, q[0], q[1], pr, '#fff3c4', true); if (st.labels) text(ctx, BY.sole ? objName(BY.sole) : 'Sole', q[0] + pr + 6, q[1], { color: '#fff7d6', size: 12, weight: 800 }); }
          drawn.push({ name: BY.sole ? objName(BY.sole) : 'Sole', x: q[0], y: q[1], r: pr, alt: sunAlt, az: Math.atan2(sunH[0], sunH[1]), obj: 'sole', kind: '⚠️ 😎' });
        } }
        // nomi delle stelle brillanti
        if (st.labels && starA > 0.2) for (const d of drawn) if (d.star && d.alt > 0 && (d.mag < 1.4 || (d.obj && d.mag < 3))) text(ctx, d.name, d.x + d.r + 4, d.y, { color: `rgba(226,232,240,${starA})`, size: 11 });
        // terreno
        ctx.save();
        const hz = []; for (let i = 0; i <= 180; i++) { const a = (i / 180) * TAU; const q = proj([Math.sin(a), Math.cos(a), 0]); if (q) hz.push(q); }
        const gcol = mix3([10, 14, 12], [52, 78, 50], day * 0.9 + twi * 0.2);
        if (st.mode === 'dome') {
          const R = 2 * S_; ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.arc(cx, cy, R, 0, TAU, true); ctx.fillStyle = '#04050c'; ctx.fill();
          ctx.strokeStyle = rgbStr(gcol.map((x) => x + 40)); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke();
        } else if (hz.length > 2) {
          ctx.beginPath(); ctx.rect(0, 0, W, H); hz.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
          const gg = ctx.createLinearGradient(0, H * 0.5, 0, H); gg.addColorStop(0, rgbStr(gcol)); gg.addColorStop(1, rgbStr(gcol.map((x) => x * 0.5))); ctx.fillStyle = gg; ctx.fill('evenodd');
          // profilo di colline
          ctx.beginPath(); let pen = false; for (let i = 0; i <= 360; i++) { const a = (i / 360) * TAU; const hh = 0.012 + 0.012 * Math.sin(a * 7 + 1) + 0.008 * Math.sin(a * 17); const q = proj(V.norm([Math.sin(a), Math.cos(a), hh])); if (!q) { pen = false; continue; } pen ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); pen = true; }
          ctx.strokeStyle = rgbStr(gcol.map((x) => x * 1.6 + 10), 0.9); ctx.lineWidth = 1.5; ctx.stroke();
        }
        ctx.restore();
        // punti cardinali
        CARD().forEach((n, i) => { const a = i * 45 * D2R; const q = proj([Math.sin(a), Math.cos(a), st.mode === 'dome' ? 0 : -0.03]); if (!q) return;
          let x = q[0], y = q[1]; if (st.mode === 'dome') { const dx = x - cx, dy = y - cy, l = Math.hypot(dx, dy) || 1; x = cx + dx / l * (l + 14); y = cy + dy / l * (l + 14); }
          text(ctx, n, x, y + (st.mode === 'dome' ? 0 : 12), { color: i % 2 ? 'rgba(203,213,225,.7)' : '#fca5a5', size: i % 2 ? 11 : 14, weight: 800, align: 'center' }); });
        if (selected) { ctx.strokeStyle = 'rgba(250,204,21,.9)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(selected.x, selected.y, selected.r + 7, 0, TAU); ctx.stroke(); }
        // HUD
        const d = new Date(st.t);
        v.hud.innerHTML = `<b>📍 ${esc(city[0][LI()])} · ${d.toLocaleDateString(i18n.lang, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} ${d.toLocaleTimeString(i18n.lang, { hour: '2-digit', minute: '2-digit' })}</b><small>${fmt(Math.abs(city[1]), 2)}°${city[1] >= 0 ? 'N' : 'S'} ${fmt(Math.abs(city[2]), 2)}°${city[2] >= 0 ? 'E' : 'W'} · ${sunAlt > 0 ? '☀️ ' + tr('dayN') : sunAlt > -0.31 ? '🌆 ' + tr('twilight') : '🌙 ' + tr('nightN')}</small>` + (st.atmo && sunAlt > -0.05 ? `<small class="sp-warn">${tr('daylight')}</small>` : '');
        if (document.activeElement !== dt) { const z = new Date(st.t - d.getTimezoneOffset() * 60000); dt.value = z.toISOString().slice(0, 16); }
        v.foot.innerHTML = st.mode === 'dome' ? '' : `<span class="sp-scale"><b>${fmt(st.fov * R2D, 0)}° · ${cardinal(st.az)}</b></span>`;
      };
      if (opts.focus && S.byId[opts.focus]) { /* guarda verso la stella richiesta */ }
    }
  };
  function mix3(a, b, t2) { return [lerp(a[0], b[0], t2), lerp(a[1], b[1], t2), lerp(a[2], b[2], t2)]; }
  function drawMoonPhase(ctx, x, y, r, k, ang) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    ctx.fillStyle = 'rgba(40,42,54,.92)'; ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill();
    ctx.fillStyle = '#ece9df'; ctx.beginPath(); ctx.arc(0, 0, r, -Math.PI / 2, Math.PI / 2); ctx.closePath(); ctx.fill();
    if (k >= 0.5) { ctx.beginPath(); ctx.ellipse(0, 0, r * (2 * k - 1), r, 0, 0, TAU); ctx.fill(); }
    else { ctx.fillStyle = 'rgba(40,42,54,1)'; ctx.beginPath(); ctx.ellipse(0, 0, r * (1 - 2 * k) + 0.3, r + 0.3, 0, -Math.PI / 2, Math.PI / 2); ctx.fill(); }
    ctx.restore();
  }

  /* ======================================================================
     Rendering realistico di sfere (pixel per pixel, texture procedurali)
     ====================================================================== */
  const PERM = (() => { const r = rng(42); const a = [...Array(256).keys()]; for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } const p = new Uint8Array(512); for (let i = 0; i < 512; i++) p[i] = a[i & 255]; return p; })();
  function vnoise(x, y, z) {
    const X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z); const fx = x - X, fy = y - Y, fz = z - Z;
    const u = fx * fx * (3 - 2 * fx), v2 = fy * fy * (3 - 2 * fy), w = fz * fz * (3 - 2 * fz);
    const h = (i, j, k) => PERM[(PERM[(PERM[i & 255] + j) & 255] + k) & 255] / 255;
    const a = lerp(lerp(h(X, Y, Z), h(X + 1, Y, Z), u), lerp(h(X, Y + 1, Z), h(X + 1, Y + 1, Z), u), v2);
    const b = lerp(lerp(h(X, Y, Z + 1), h(X + 1, Y, Z + 1), u), lerp(h(X, Y + 1, Z + 1), h(X + 1, Y + 1, Z + 1), u), v2);
    return lerp(a, b, w);
  }
  function fbm(x, y, z, o = 5) { let s = 0, a = 0.5, f = 1; for (let i = 0; i < o; i++) { s += a * vnoise(x * f, y * f, z * f); f *= 2.03; a *= 0.5; } return s / (1 - Math.pow(0.5, o)); }
  const mixc = (a, b, t2) => [lerp(a[0], b[0], t2), lerp(a[1], b[1], t2), lerp(a[2], b[2], t2)];
  /* crateri: elenco di [direzione, raggio angolare] */
  function craters(seed, n, rmax) { const r = rng(seed); const a = []; for (let i = 0; i < n; i++) a.push([V.norm([gauss(r), gauss(r), gauss(r)]), Math.pow(r(), 2.5) * rmax + 0.008]); return a; }
  function craterShade(p, list) { let s = 0; for (const [c, rr] of list) { const d = Math.acos(clamp(V.dot(p, c), -1, 1)); if (d < rr * 1.3) { const x = d / rr; s += x < 0.85 ? -0.18 * (1 - x) : x < 1.15 ? 0.22 * (1 - Math.abs(x - 1) / 0.15) : 0; } } return s; }

  const TEX = {}; const TW = 512, TH = 256;
  function landMask() {
    if (TEX._land) return TEX._land;
    const c = document.createElement('canvas'); c.width = 1024; c.height = 512; const x = c.getContext('2d');
    const G = window.GEO || { land: [], water: [] };
    const path = (poly) => { x.beginPath(); poly.forEach(([lo, la], i) => { const px = (lo + 180) / 360 * 1024, py = (90 - la) / 180 * 512; i ? x.lineTo(px, py) : x.moveTo(px, py); }); x.closePath(); x.fill(); };
    x.fillStyle = '#000'; x.fillRect(0, 0, 1024, 512); x.fillStyle = '#fff'; (G.land || []).forEach(path); x.fillStyle = '#000'; (G.water || []).forEach(path);
    x.fillStyle = '#fff'; x.fillRect(0, 512 * (156 / 180), 1024, 512); // Antartide
    const d = x.getImageData(0, 0, 1024, 512).data; const m = new Uint8Array(1024 * 512); for (let i = 0; i < m.length; i++) m[i] = d[i * 4];
    return (TEX._land = m);
  }
  /* genera la texture equirettangolare di un corpo: Uint8 RGBA (A = lucentezza) */
  function texture(type) {
    if (TEX[type]) return TEX[type];
    const data = new Uint8ClampedArray(TW * TH * 4);
    const cr = { moon: craters(3, 160, 0.16), mercury: craters(5, 220, 0.12), callisto: craters(7, 260, 0.06), ceres: craters(9, 90, 0.12), ganymede: craters(11, 90, 0.06), comet67p: craters(13, 40, 0.2), pluto: craters(15, 40, 0.06) }[type];
    const land = type === 'earth' ? landMask() : null;
    for (let j = 0; j < TH; j++) {
      const lat = (0.5 - (j + 0.5) / TH) * Math.PI; const cl = Math.cos(lat), sl = Math.sin(lat);
      for (let i = 0; i < TW; i++) {
        const lon = ((i + 0.5) / TW) * TAU - Math.PI; const p = [cl * Math.sin(lon), sl, cl * Math.cos(lon)];
        let c = [128, 128, 128], spec = 0; const L = Math.abs(lat * R2D);
        const n1 = fbm(p[0] * 3 + 11, p[1] * 3, p[2] * 3, 5);
        switch (type) {
          case 'earth': {
            const lx = Math.floor((lon + Math.PI) / TAU * 1024) % 1024, ly = clamp(Math.floor((0.5 - lat / Math.PI) * 512), 0, 511);
            const isL = land[ly * 1024 + lx] > 127;
            if (isL) {
              const dry = Math.exp(-Math.pow((L - 24) / 9, 2)) * (0.6 + n1 * 0.8);
              c = mixc([46, 98, 44], [196, 170, 116], clamp(dry, 0, 1)); c = mixc(c, [98, 108, 74], clamp((L - 50) / 15, 0, 1) * 0.7);
              c = mixc(c, [120, 104, 80], fbm(p[0] * 9, p[1] * 9, p[2] * 9, 3) * 0.35);
              if (L > 66 || (L > 58 && n1 > 0.62)) c = [236, 240, 246];
            } else { c = mixc([10, 38, 98], [24, 78, 150], n1 * 0.7); spec = 255; if (L > 74) { c = [225, 235, 245]; spec = 40; } }
            const cl2 = fbm(p[0] * 4 + 3, p[1] * 7, p[2] * 4, 6); const band = 0.55 + 0.25 * Math.cos(lat * 6);
            const cov = smooth(0.5, 0.75, cl2 * band + 0.12); c = mixc(c, [250, 252, 255], cov * 0.9); if (cov > 0.3) spec = 0;
            break;
          }
          case 'moon': { const mare = smooth(0.48, 0.62, fbm(p[0] * 1.6 + 4, p[1] * 1.6, p[2] * 1.6, 4)); const b = 150 + n1 * 40 - mare * 62 + craterShade(p, cr) * 180; c = [b, b * 0.98, b * 0.95]; break; }
          case 'mercury': { const b = 120 + n1 * 50 + craterShade(p, cr) * 170; c = [b * 1.02, b * 0.95, b * 0.88]; break; }
          case 'venus': { const sw = fbm(p[0] * 2 + Math.sin(lat * 4), p[1] * 6, p[2] * 2, 5); c = mixc([214, 176, 108], [246, 226, 178], sw); break; }
          case 'mars': { const dark = smooth(0.45, 0.65, fbm(p[0] * 2.2, p[1] * 2.2 + 7, p[2] * 2.2, 5)); c = mixc([196, 98, 54], [112, 60, 42], dark * 0.8); c = mixc(c, [222, 150, 100], n1 * 0.25); if (L > 76 + n1 * 6) c = [240, 236, 230]; break; }
          case 'jupiter': {
            const turb = fbm(p[0] * 4, p[1] * 18, p[2] * 4, 5) * 0.35;
            const s = Math.sin(lat * 15 + turb * 5); c = mixc([200, 150, 112], [240, 226, 204], 0.5 + 0.5 * s); if (L > 55) c = mixc(c, [150, 138, 128], (L - 55) / 35);
            const dl = lat * R2D + 22, dn = ((lon * R2D - 40 + 540) % 360) - 180; const e = Math.pow(dl / 5.5, 2) + Math.pow(dn / 11, 2);
            if (e < 1) c = mixc(c, [196, 92, 60], (1 - e) * 0.9);
            break;
          }
          case 'saturn': { const s = Math.sin(lat * 12 + fbm(p[0] * 3, p[1] * 14, p[2] * 3, 4) * 1.5); c = mixc([214, 186, 132], [240, 222, 176], 0.5 + 0.5 * s); if (L > 70) c = mixc(c, [150, 160, 170], (L - 70) / 20); break; }
          case 'uranus': { const s = Math.sin(lat * 8) * 0.05 + n1 * 0.08; c = mixc([150, 208, 220], [196, 234, 238], 0.4 + s); break; }
          case 'neptune': { const s = Math.sin(lat * 10 + fbm(p[0] * 3, p[1] * 10, p[2] * 3, 4) * 2); c = mixc([48, 88, 196], [92, 142, 230], 0.5 + 0.3 * s); const e = Math.pow((lat * R2D + 20) / 6, 2) + Math.pow((((lon * R2D + 60 + 540) % 360) - 180) / 12, 2); if (e < 1) c = mixc(c, [24, 40, 110], 1 - e); if (Math.abs(lat * R2D + 28) < 1.5 && n1 > 0.5) c = [230, 240, 255]; break; }
          case 'pluto': { c = mixc([196, 160, 126], [228, 206, 176], n1); const e = Math.pow((lat * R2D - 15) / 22, 2) + Math.pow((((lon * R2D - 0 + 540) % 360) - 180) / 30, 2); if (e < 1) c = mixc(c, [246, 240, 230], (1 - e * e)); if (Math.abs(lat * R2D + 5) < 14 && Math.abs(((lon * R2D - 110 + 540) % 360) - 180) < 70) c = mixc(c, [96, 56, 42], 0.75); c = mixc(c, [0, 0, 0], -craterShade(p, cr) * 0.4); break; }
          case 'ceres': { const b = 110 + n1 * 40 + craterShade(p, cr) * 120; c = [b, b, b * 0.98]; const e = Math.pow((lat * R2D - 20) / 3, 2) + Math.pow((((lon * R2D - 30 + 540) % 360) - 180) / 3, 2); if (e < 1) c = [250, 250, 250]; break; }
          case 'eris': case 'haumea': { const b = 222 + n1 * 30; c = [b, b, b + 4]; break; }
          case 'makemake': { c = mixc([168, 104, 72], [214, 170, 132], n1); break; }
          case 'io': { c = mixc([226, 196, 70], [250, 236, 150], n1); const sp2 = fbm(p[0] * 14, p[1] * 14, p[2] * 14, 2); if (sp2 > 0.7) c = mixc(c, [60, 30, 20], (sp2 - 0.7) * 3); else if (sp2 < 0.25) c = mixc(c, [200, 110, 40], (0.25 - sp2) * 3); if (L > 60) c = mixc(c, [150, 120, 90], (L - 60) / 30); break; }
          case 'europa': { c = mixc([214, 198, 170], [244, 238, 226], n1); const ln = Math.abs(Math.sin(fbm(p[0] * 2, p[1] * 2, p[2] * 2, 3) * 40)); if (ln < 0.08) c = mixc(c, [150, 90, 60], 0.7); break; }
          case 'ganymede': { const d = smooth(0.45, 0.6, fbm(p[0] * 2.5, p[1] * 2.5, p[2] * 2.5, 4)); c = mixc([196, 186, 168], [98, 88, 76], d); c = mixc(c, [255, 255, 255], craterShade(p, cr) * 0.8); break; }
          case 'callisto': { const b = 80 + n1 * 40; c = [b * 1.05, b * 0.95, b * 0.82]; const cs = craterShade(p, cr); if (cs > 0.05) c = mixc(c, [230, 225, 215], cs * 2.5); break; }
          case 'titan': { const s = Math.sin(lat * 6) * 0.06 + n1 * 0.1; c = mixc([212, 140, 60], [236, 176, 92], 0.5 + s); break; }
          case 'enceladus': { const b = 236 + n1 * 18; c = [b, b, 255]; if (lat * R2D < -60 && Math.abs(Math.sin(lon * 2 + lat * 3)) < 0.1) c = [120, 170, 220]; break; }
          case 'triton': { c = mixc([214, 186, 176], [240, 226, 220], n1); const dimple = Math.abs(Math.sin(p[0] * 40) * Math.sin(p[2] * 40)); if (lat < 0.3 && dimple > 0.8) c = mixc(c, [170, 150, 140], 0.3); if (lat * R2D < -20) c = mixc(c, [246, 222, 214], 0.5); break; }
          case 'comet67p': { const b = 60 + n1 * 45 + craterShade(p, cr) * 80; c = [b, b * 0.97, b * 0.94]; break; }
          default: { const b = 160 + n1 * 60; c = [b, b, b]; }
        }
        const k = (j * TW + i) * 4; data[k] = c[0]; data[k + 1] = c[1]; data[k + 2] = c[2]; data[k + 3] = spec;
      }
    }
    return (TEX[type] = data);
  }
  const ATMO = { earth: [110, 170, 255, 0.55], venus: [255, 236, 190, 0.45], mars: [255, 180, 140, 0.18], titan: [255, 170, 80, 0.7], jupiter: [220, 210, 200, 0.15], saturn: [240, 220, 180, 0.15], uranus: [190, 240, 250, 0.35], neptune: [120, 160, 255, 0.35], pluto: [180, 200, 255, 0.12], triton: [200, 210, 255, 0.1] };
  const TILT = { earth: 23.4, mars: 25.2, jupiter: 3.1, saturn: 26.7, uranus: 97.8, neptune: 28.3, pluto: 57, moon: 6.7, venus: 177, haumea: 0, triton: 30, titan: 26.7 };
  /* disegna una sfera realistica in un canvas offscreen: light = [x, y, z] in coordinate schermo (z verso chi guarda) */
  const SC = {};
  function sphereCanvas(type, n, light, spin, o = {}) {
    const key = 'c' + n; let c = SC[key]; if (!c) { c = SC[key] = document.createElement('canvas'); c.width = c.height = n; c._x = c.getContext('2d'); c._img = c._x.createImageData(n, n); }
    const img = c._img, d = img.data; const tex = o.emissive ? null : texture(type); const at = ATMO[type];
    const tilt = (o.tilt != null ? o.tilt : TILT[type] || 0) * D2R * 0.5; const ct = Math.cos(tilt), stl = Math.sin(tilt);
    const cs = Math.cos(spin), ss = Math.sin(spin); const L = V.norm(light); const H = V.norm([L[0], L[1], L[2] + 1]);
    const rgb = o.rgb || [255, 220, 150]; const t0 = o.time || 0;
    for (let y = 0; y < n; y++) {
      const ny = 1 - (2 * (y + 0.5)) / n;
      for (let x = 0; x < n; x++) {
        const nx = (2 * (x + 0.5)) / n - 1; const rr = nx * nx + ny * ny; const k = (y * n + x) * 4;
        if (rr > 1) { d[k + 3] = 0; continue; }
        const nz = Math.sqrt(1 - rr);
        const aa = rr > 0.97 ? clamp((1 - rr) / 0.03, 0, 1) : 1;
        if (o.emissive) {
          const limb = Math.pow(nz, 0.45);
          const gr = fbm(nx * 30 + t0, ny * 30, nz * 30 + t0 * 0.3, 2);
          const sp = o.spots === 'sun' ? smooth(0.74, 0.8, fbm(nx * 4 + 3, ny * 4, nz * 4 + 5, 3)) * 0.55 : o.spots ? smooth(0.4, 0.8, fbm(nx * 2.2 + t0 * 0.03, ny * 2.2, nz * 2.2 + 5, 3)) * 0.3 : 0;
          const f = (0.55 + 0.45 * limb) * (0.9 + gr * 0.16) * (1 - sp);
          const hot = limb * (o.hot != null ? o.hot : 0.5);
          d[k] = clamp((rgb[0] + (255 - rgb[0]) * hot) * f * 1.08, 0, 255); d[k + 1] = clamp((rgb[1] + (255 - rgb[1]) * hot) * f * (0.92 + 0.08 * limb), 0, 255); d[k + 2] = clamp((rgb[2] + (255 - rgb[2]) * hot * 0.8) * f * (0.8 + 0.2 * limb), 0, 255); d[k + 3] = 255 * aa; continue;
        }
        // ruota la normale nel sistema del corpo: inclinazione (asse z dello schermo) e rotazione (asse y)
        const bx = nx * ct + ny * stl, by = -nx * stl + ny * ct, bz = nz;
        const rx = bx * cs + bz * ss, rz = -bx * ss + bz * cs;
        const lat = Math.asin(clamp(by, -1, 1)); const lon = Math.atan2(rx, rz);
        const tx = Math.floor(((lon + Math.PI) / TAU) * TW) % TW, ty = clamp(Math.floor((0.5 - lat / Math.PI) * TH), 0, TH - 1); const ti = (ty * TW + tx) * 4;
        const dif = nx * L[0] + ny * L[1] + nz * L[2];
        let lit = clamp(dif * 1.05 + 0.02, 0, 1); lit = 0.03 + 0.97 * lit;
        let r = tex[ti] * lit, g = tex[ti + 1] * lit, b = tex[ti + 2] * lit;
        if (tex[ti + 3] && dif > 0) { const sp = Math.pow(Math.max(0, nx * H[0] + ny * H[1] + nz * H[2]), 40) * (tex[ti + 3] / 255) * 180; r += sp; g += sp; b += sp; }
        if (at) { const rim = Math.pow(1 - nz, 2.5) * at[3] * clamp(dif + 0.35, 0, 1) * 255; r += at[0] / 255 * rim; g += at[1] / 255 * rim; b += at[2] / 255 * rim; }
        d[k] = r; d[k + 1] = g; d[k + 2] = b; d[k + 3] = 255 * aa;
      }
    }
    c._x.putImageData(img, 0, 0); return c;
  }
  /* disegna una sfera nel contesto: per raggi piccoli usa una semplice palla */
  function drawSphere(ctx, type, x, y, r, light, spin = 0, o = {}) {
    if (r < 3) { const col = { earth: '#3f7fe0', moon: '#cfcfcf' }[type] || '#bbb'; return drawBall(ctx, x, y, Math.max(r, 1), col, false); }
    const dpr = Math.min(2, window.devicePixelRatio || 1); const n = clamp(Math.ceil(r * 2 * dpr / 8) * 8, 16, o.max || 360);
    const c = sphereCanvas(type, n, light || [-0.6, 0.35, 0.7], spin, o);
    ctx.drawImage(c, x - r, y - r, r * 2, r * 2);
    const at = ATMO[type]; if (at && r > 12) { const g = ctx.createRadialGradient(x, y, r * 0.98, x, y, r * 1.12); g.addColorStop(0, `rgba(${at[0]},${at[1]},${at[2]},${at[3] * 0.55})`); g.addColorStop(1, `rgba(${at[0]},${at[1]},${at[2]},0)`); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r * 1.12, 0, TAU); ctx.fill(); }
  }

  /* ======================================================================
     SCENA: un singolo oggetto da vicino (pianeta, stella, nebulosa, galassia, buco nero, cometa)
     ====================================================================== */
  function staticStars(seed, n) { const r = rng(seed); return Array.from({ length: n }, () => [r(), r(), Math.pow(r(), 3), r()]); }
  function drawStatic(ctx, W, H, list, a = 1) { for (const s of list) { ctx.fillStyle = s[3] < 0.2 ? `rgba(255,220,180,${(0.2 + s[2] * 0.8) * a})` : s[3] > 0.8 ? `rgba(190,210,255,${(0.2 + s[2] * 0.8) * a})` : `rgba(240,244,255,${(0.2 + s[2] * 0.8) * a})`; const z = 0.7 + s[2] * 1.3; ctx.fillRect(s[0] * W, s[1] * H, z, z); } }
  /* immagine pre-calcolata di una nebulosa (illustrazione) */
  function nebulaCanvas(type, S) {
    const c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'); const r = rng(type.length * 97 + 3);
    x.fillStyle = '#000'; x.fillRect(0, 0, S, S); x.globalCompositeOperation = 'lighter';
    const blob = (px, py, rad, col, a) => { const g = x.createRadialGradient(px, py, 0, px, py, rad); g.addColorStop(0, rgbStr(col, a)); g.addColorStop(1, rgbStr(col, 0)); x.fillStyle = g; x.fillRect(px - rad, py - rad, rad * 2, rad * 2); };
    const C = S / 2;
    if (type === 'neb-orion') {
      for (let i = 0; i < 900; i++) { const a = r() * TAU, d = Math.pow(r(), 0.7) * S * 0.42; const px = C + Math.cos(a) * d * 1.1 - S * 0.03, py = C + Math.sin(a) * d * 0.9; const core = 1 - d / (S * 0.42); blob(px, py, 8 + r() * S * 0.06, r() < 0.25 + core * 0.4 ? [90, 200, 210] : [235, 70, 110], 0.05 + core * 0.06); }
      for (let i = 0; i < 160; i++) blob(C + gauss(r) * S * 0.05, C + gauss(r) * S * 0.04, 6 + r() * 20, [255, 240, 225], 0.08);
      x.globalCompositeOperation = 'source-over';
      for (let i = 0; i < 260; i++) { const px = C + S * 0.18 + gauss(r) * S * 0.1, py = C - S * 0.12 + gauss(r) * S * 0.08 + (px - C) * 0.3; const g = x.createRadialGradient(px, py, 0, px, py, 14); g.addColorStop(0, 'rgba(10,5,10,.25)'); g.addColorStop(1, 'rgba(10,5,10,0)'); x.fillStyle = g; x.fillRect(px - 14, py - 14, 28, 28); }
      x.globalCompositeOperation = 'lighter';
      [[0, 0], [0.025, 0.012], [-0.012, 0.022], [0.012, -0.02]].forEach(([dx, dy]) => { blob(C + dx * S, C + dy * S, S * 0.03, [220, 235, 255], 0.9); blob(C + dx * S, C + dy * S, 3, [255, 255, 255], 1); });
    } else if (type === 'neb-crab') {
      blob(C, C, S * 0.32, [90, 140, 255], 0.35);
      for (let f = 0; f < 140; f++) { let a = r() * TAU, px = C + Math.cos(a) * S * 0.08, py = C + Math.sin(a) * S * 0.06; x.strokeStyle = r() < 0.6 ? `rgba(255,${120 + r() * 80 | 0},70,0.35)` : 'rgba(255,230,170,.3)'; x.lineWidth = 1 + r() * 2; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 30; k++) { a += gauss(r) * 0.25; const dr = S * 0.008; px += Math.cos(a) * dr * 1.3; py += Math.sin(a) * dr; const e = Math.pow((px - C) / (S * 0.42), 2) + Math.pow((py - C) / (S * 0.3), 2); if (e > 1) break; x.lineTo(px, py); } x.stroke(); }
      for (let i = 0; i < 300; i++) { const a = r() * TAU, d = Math.sqrt(r()); blob(C + Math.cos(a) * d * S * 0.4, C + Math.sin(a) * d * S * 0.28, 10 + r() * 22, r() < 0.5 ? [255, 110, 70] : [120, 170, 255], 0.05); }
    } else if (type === 'neb-ring') {
      for (let i = 0; i < 1500; i++) { const a = r() * TAU; const d = 0.5 + gauss(r) * 0.12; const px = C + Math.cos(a) * d * S * 0.36, py = C + Math.sin(a) * d * S * 0.28; const col = d > 0.6 ? [235, 80, 70] : d > 0.45 ? [250, 210, 120] : [90, 200, 230]; blob(px, py, 6 + r() * 14, col, 0.06); }
      blob(C, C, S * 0.18, [80, 180, 230], 0.25); blob(C, C, 2.5, [255, 255, 255], 1);
    } else if (type === 'neb-pillars') {
      for (let i = 0; i < 500; i++) blob(r() * S, r() * S, 20 + r() * 60, r() < 0.5 ? [80, 150, 170] : [200, 150, 90], 0.05);
      x.globalCompositeOperation = 'source-over';
      [[0.3, 0.95, 0.42, 0.13], [0.52, 0.95, 0.55, 0.065], [0.7, 0.95, 0.66, 0.07]].forEach(([x0, y0, top, w]) => {
        for (let k = 0; k < 220; k++) { const tt = r(); const px = (x0 + (r() - 0.5) * w * (1.2 - tt * 0.5) + tt * 0.03) * S, py = (y0 - tt * (y0 - top)) * S; const rad = S * w * (0.35 + r() * 0.3) * (1 - tt * 0.4); const g = x.createRadialGradient(px, py, 0, px, py, rad); g.addColorStop(0, 'rgba(70,40,30,.22)'); g.addColorStop(1, 'rgba(70,40,30,0)'); x.fillStyle = g; x.fillRect(px - rad, py - rad, rad * 2, rad * 2); }
        x.globalCompositeOperation = 'lighter'; for (let k = 0; k < 40; k++) blob((x0 + gauss(r) * w * 0.25 + 0.01) * S, (top + r() * 0.08) * S, 6 + r() * 10, [255, 200, 140], 0.12); x.globalCompositeOperation = 'source-over';
      });
      x.globalCompositeOperation = 'lighter';
    }
    // stelle
    for (let i = 0; i < 260; i++) { const px = r() * S, py = r() * S, b = Math.pow(r(), 4); x.fillStyle = `rgba(255,255,255,${0.3 + b * 0.7})`; x.fillRect(px, py, 1 + b * 1.5, 1 + b * 1.5); if (b > 0.6) blob(px, py, 6 + b * 6, [220, 230, 255], 0.3); }
    return c;
  }
  function spikes(ctx, x, y, r, col, a) { ctx.strokeStyle = rgbStr(col, a); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x - r, y); ctx.lineTo(x + r, y); ctx.moveTo(x, y - r); ctx.lineTo(x, y + r); ctx.stroke(); }

  Mini3D.scenes.spaceBody = function (host, o = {}) {
    const v = new SpaceView(host, { cls: 'sp-body', height: (w) => clamp(w * 0.72, 280, 440) });
    const type = o.type || 'star'; const st = { spin: 0, auto: true, zoom: 1, rot: 0.35, t: 0 };
    const stars = staticStars(type.length * 13 + 1, 260);
    v.onDrag = (dx, dy) => { st.spin += dx * 0.01; st.rot = clamp(st.rot + dy * 0.004, -1.2, 1.4); st.auto = false; clearTimeout(st.to); st.to = setTimeout(() => (st.auto = true), 4000); };
    v.onZoom = (f) => { st.zoom = clamp(st.zoom * f, 0.5, 3); };
    v.tip.innerHTML = '🖐️ ' + tr('hint').split('·').slice(0, 2).join('·');
    const ill = /^(neb|gal|bh|comet|pleiades)/.test(type) && type !== 'gal-mw' ? `<span class="sp-ill">🎨 ${tr('illus')}</span>` : '';
    if (ill) v.foot.innerHTML = ill;
    let neb = null, gal = null, pl = null;
    if (type.startsWith('neb-')) neb = nebulaCanvas(type, 900);
    if (type.startsWith('gal-')) {
      const G = { 'gal-mw': [{ seed: 4, R: 50000, n: 14000, spur: true }, 0.55], 'gal-m31': [{ seed: 31, R: 76000, n: 14000, arms: [{ ph: 0, w: 1 }, { ph: 180, w: 1 }], pitch: 8, bar: 0.12, bulge: 0.24 }, 1.34], 'gal-m33': [{ seed: 33, R: 30000, n: 9000, arms: [{ ph: 0, w: 1 }, { ph: 180, w: 1 }], pitch: 22, bar: 0, bulge: 0.05 }, 0.95],
        'gal-m51': [{ seed: 51, R: 38000, n: 12000, arms: [{ ph: 0, w: 1 }, { ph: 180, w: 1 }], pitch: 17, bar: 0, bulge: 0.12 }, 0.35], 'gal-m104': [{ seed: 104, R: 25000, n: 12000, arms: [{ ph: 0, w: 1 }, { ph: 180, w: 1 }], pitch: 6, bar: 0, bulge: 0.42 }, 1.47],
        'gal-lmc': [{ seed: 7, R: 16000, n: 7000, arms: [{ ph: 90, w: 1 }], pitch: 25, bar: 0.4, bulge: 0.02 }, 0.6], 'gal-smc': [{ seed: 8, R: 9500, n: 5000, arms: [{ ph: 0, w: 1 }], pitch: 40, bar: 0.6, bulge: 0.02 }, 0.9] }[type];
      gal = { parts: makeSpiral(G[0]), R: G[0].R, inc: G[1] }; st.rot = G[1];
      if (type === 'gal-smc' || type === 'gal-lmc') gal.parts.forEach((p) => { p.p[0] *= 1.25; p.p[2] += gauss(Math.random) * gal.R * 0.08; });
    }
    if (type === 'pleiades' && window.SPACE_STARS) pl = window.SPACE_STARS.pleiades;
    const isSphere = !neb && !gal && !type.startsWith('bh') && !type.startsWith('comet') && type !== 'pleiades';
    const rgb = type === 'sun' ? [255, 176, 60] : o.temp ? mixc(tempRGB(o.temp), [255, 255, 255], 0) : [255, 220, 170];

    v.draw = (ctx, dt) => {
      st.t += dt; if (st.auto) st.spin += dt * (type === 'sun' ? 0.05 : 0.25);
      const W = v.W, H = v.H, cx = W / 2, cy = H / 2; const R = Math.min(W, H) * 0.34 * st.zoom * (type === 'saturn' ? Math.min(1, (W / H) * 0.62) : 1);
      spaceBg(ctx, W, H, '#0a0f2c'); drawStatic(ctx, W, H, stars, 0.9);
      if (isSphere) {
        if (type === 'sun' || type === 'star') {
          ctx.globalCompositeOperation = 'lighter'; glow(ctx, cx, cy, R * 2.6, rgb, 0.45); glow(ctx, cx, cy, R * 1.5, rgb, 0.6); ctx.globalCompositeOperation = 'source-over';
          drawSphere(ctx, type, cx, cy, R, null, 0, { emissive: true, rgb, time: st.t * 0.4, spots: type === 'sun' ? 'sun' : (o.rs || 1) > 100, max: 260, hot: type === 'sun' ? 0.4 : (o.temp || 6000) < 5000 ? 0.12 : 0.5 });
          ctx.globalCompositeOperation = 'lighter'; glow(ctx, cx, cy, R * 1.25, rgb, 0.35); ctx.globalCompositeOperation = 'source-over';
          return;
        }
        const light = [-0.75, 0.3, 0.6];
        const tiltS = (TILT[type] || 0) * D2R * 0.5;
        if (type === 'saturn') satRing(ctx, cx, cy, R, tiltS, true);
        if (type === 'haumea') { ctx.save(); ctx.translate(cx, cy); ctx.rotate(-0.3); ctx.scale(1.3, 0.74); drawSphere(ctx, type, 0, 0, R * 0.85, light, st.spin, { tilt: 0 }); ctx.restore();
          ctx.strokeStyle = 'rgba(200,210,230,.35)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(cx, cy, R * 1.9, R * 0.35, -0.3, 0, TAU); ctx.stroke(); }
        else drawSphere(ctx, type, cx, cy, R, light, st.spin);
        if (type === 'saturn') satRing(ctx, cx, cy, R, tiltS, false);
        if (type === 'uranus') { ctx.save(); ctx.translate(cx, cy); ctx.rotate(-tiltS); ctx.strokeStyle = 'rgba(200,230,240,.25)'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.ellipse(0, 0, R * 1.9, R * 0.2, 0, 0, TAU); ctx.stroke(); ctx.restore(); }
        return;
      }
      if (neb) { const s = Math.max(W, H) * 1.05 * st.zoom; const a = st.t * 0.01; ctx.save(); ctx.translate(cx, cy); ctx.rotate(Math.sin(a) * 0.03); ctx.drawImage(neb, -s / 2 + Math.sin(st.spin * 0.2) * 20, -s / 2, s, s); ctx.restore();
        if (type === 'neb-crab') { const p = 0.5 + 0.5 * Math.sin(st.t * TAU * 3); ctx.globalCompositeOperation = 'lighter'; glow(ctx, cx, cy, 10 + p * 10, [200, 220, 255], 0.5 + p * 0.5); ctx.globalCompositeOperation = 'source-over'; }
        return; }
      if (gal) {
        const cr = Math.cos(st.rot), sr = Math.sin(st.rot); const ang = st.spin * 0.15 + st.t * 0.01; const ca = Math.cos(ang), sa = Math.sin(ang);
        const k = (Math.min(W, H) * 0.46 * st.zoom) / gal.R;
        ctx.globalCompositeOperation = 'lighter';
        glow(ctx, cx, cy, gal.R * k * (type === 'gal-m104' ? 0.55 : 0.32), [255, 220, 170], type === 'gal-m104' ? 0.75 : 0.5);
        for (const p of gal.parts) { const x = p.p[0] * ca - p.p[1] * sa, y = p.p[0] * sa + p.p[1] * ca, z = p.p[2]; const yy = y * cr - z * sr; const s = p.s * 1.2; ctx.fillStyle = rgbStr(p.c, p.a * 0.5); ctx.fillRect(cx + x * k, cy + yy * k, s, s); }
        if (type === 'gal-m51') { glow(ctx, cx + gal.R * k * 0.9, cy - gal.R * k * 0.55, gal.R * k * 0.22, [255, 220, 180], 0.7); }
        if (type === 'gal-lmc') glow(ctx, cx - gal.R * k * 0.35, cy - gal.R * k * 0.25, gal.R * k * 0.12, [255, 110, 150], 0.6);
        ctx.globalCompositeOperation = 'source-over';
        if (type === 'gal-m104') { ctx.fillStyle = 'rgba(25,14,10,.75)'; ctx.beginPath(); ctx.ellipse(cx, cy + gal.R * k * 0.02, gal.R * k * 0.95, gal.R * k * Math.abs(Math.cos(st.rot)) * 0.95 + 2, 0, 0, Math.PI); ctx.fill(); }
        if (type === 'gal-mw') { const a0 = Math.PI; const x = 26000 * Math.cos(a0) - 0, px = x * ca, py = x * sa; text(ctx, '☀️ ' + tr('you'), cx + px * k + 6, cy + py * cr * k, { color: '#fde68a', size: 12, weight: 800 }); ctx.strokeStyle = '#facc15'; ctx.beginPath(); ctx.arc(cx + px * k, cy + py * cr * k, 5, 0, TAU); ctx.stroke(); }
        return;
      }
      if (type === 'pleiades') {
        const list = pl || []; const a0 = parseRA('03 46 30'), d0 = parseDec('+24 13 00'); const k = Math.min(W, H) * 30 * st.zoom * R2D;
        ctx.globalCompositeOperation = 'lighter';
        list.forEach(([n, ra, de, m]) => { const a = parseRA(ra), d = parseDec(de); const x = cx - (a - a0) * Math.cos(d0) * k / R2D * 1, y = cy - (d - d0) * k / R2D; for (let i = 0; i < 4; i++) glow(ctx, x + Math.sin(i * 2.3) * 22, y + Math.cos(i * 1.7) * 18, (90 - m * 10) * st.zoom, [90, 140, 255], 0.06); });
        list.forEach(([n, ra, de, m]) => { const a = parseRA(ra), d = parseDec(de); const x = cx - (a - a0) * Math.cos(d0) * k / R2D, y = cy - (d - d0) * k / R2D; const sz = (6.5 - m) * 1.5; glow(ctx, x, y, sz * 5, [190, 215, 255], 0.6); spikes(ctx, x, y, sz * 4, [200, 220, 255], 0.5); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, sz * 0.6, 0, TAU); ctx.fill(); ctx.globalCompositeOperation = 'source-over'; text(ctx, n, x + sz + 6, y + 10, { color: 'rgba(219,234,254,.9)', size: 11 }); ctx.globalCompositeOperation = 'lighter'; });
        ctx.globalCompositeOperation = 'source-over'; return;
      }
      if (type.startsWith('bh')) return drawBH(ctx, type, cx, cy, R, st);
      if (type.startsWith('comet')) return drawComet(ctx, type, cx, cy, R, st, o);
    };
    function satRing(ctx, cx, cy, R, tilt, back) {
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(-tilt); const open = 0.36;
      const bands = [[1.24, 1.52, 0.22], [1.53, 1.95, 0.75], [1.95, 2.03, 0.05], [2.03, 2.27, 0.55]];
      for (const [a, b, al] of bands) for (let i = 0; i < 6; i++) { const rr = R * (a + (b - a) * (i + 0.5) / 6); ctx.strokeStyle = `rgba(${226 - i * 4},${205 - i * 3},${160},${al * (0.85 + 0.15 * Math.sin(i * 3))})`; ctx.lineWidth = R * (b - a) / 6 + 0.6; ctx.beginPath(); ctx.ellipse(0, 0, rr, rr * open, 0, back ? Math.PI : 0, back ? TAU : Math.PI); ctx.stroke(); }
      if (!back) { ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.ellipse(R * 0.1, R * 0.02, R * 0.9, R * 0.14, 0, 0, Math.PI); ctx.fill(); }
      ctx.restore();
    }
    return v;
  };
  /* buchi neri */
  function drawBH(ctx, type, cx, cy, R, st) {
    const t2 = st.t;
    if (type === 'bh-sgra' || type === 'bh-m87') {
      const rr = R * 0.75; ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 90; i++) {
        const a = (i / 90) * TAU; const bright = type === 'bh-m87' ? 0.55 + 0.45 * Math.sin(a - 0.4) : 0.6 + 0.4 * Math.sin(a * 1 + t2 * 0.6) * Math.sin(a * 3 - t2);
        const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr * 0.97; glow(ctx, x, y, rr * 0.38, [255, 140 + bright * 60, 40], 0.12 * bright + 0.03);
      }
      ctx.globalCompositeOperation = 'source-over';
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr * 0.72); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.7, 'rgba(0,0,0,.92)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, rr * 0.72, 0, TAU); ctx.fill();
      return;
    }
    if (type === 'bh-x1') {
      const sx = cx - R * 1.1, sy = cy - R * 0.25; const bx = cx + R * 0.55, by = cy + R * 0.1;
      ctx.globalCompositeOperation = 'lighter'; glow(ctx, sx, sy, R * 1.2, [150, 180, 255], 0.5);
      for (let i = 0; i < 160; i++) { const f = ((i / 160) + t2 * 0.05) % 1; const x = lerp(sx + R * 0.45, bx, f), y = lerp(sy, by, f) - Math.sin(f * Math.PI) * R * 0.35; ctx.fillStyle = `rgba(160,200,255,${0.5 * (1 - f) + 0.1})`; ctx.fillRect(x, y, 2, 2); }
      for (let i = 0; i < 700; i++) { const a = i * 2.39996 + t2 * (2 + (i % 7)) * 0.3; const rr = R * (0.08 + (i % 97) / 97 * 0.6); const x = bx + Math.cos(a) * rr, y = by + Math.sin(a) * rr * 0.3; const h = 1 - rr / (R * 0.7); ctx.fillStyle = `rgba(255,${150 + h * 100 | 0},${80 + h * 170 | 0},${0.25 + h * 0.5})`; ctx.fillRect(x, y, 1.6, 1.6); }
      ctx.globalCompositeOperation = 'source-over';
      drawBall(ctx, sx, sy, R * 0.45, '#9fb8ff', true);
      ctx.fillStyle = '#000'; ctx.beginPath(); ctx.arc(bx, by, R * 0.07, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,220,180,.8)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(bx, by, R * 0.085, 0, TAU); ctx.stroke();
      return;
    }
    // buco nero dormiente: lente gravitazionale sulle stelle di fondo
    const thE = R * 0.28; const list = st._bg || (st._bg = staticStars(77, 420)); const W = cx * 2, H = cy * 2;
    const bx = cx + Math.cos(t2 * 0.2) * R * 0.1, by = cy;
    ctx.fillStyle = '#02030a'; ctx.fillRect(0, 0, W, H);
    for (const s of list) {
      const x0 = s[0] * W - bx, y0 = s[1] * H - by; const b = Math.hypot(x0, y0) || 1;
      for (const sgn of [1, -1]) { const th = (b + sgn * Math.sqrt(b * b + 4 * thE * thE)) / 2; const mag = Math.abs(th / b); const k = th / b; if (mag > 6) continue; const a = clamp((0.25 + s[2]) * Math.min(1.6, mag), 0, 1); ctx.fillStyle = `rgba(235,240,255,${a})`; const z = 0.8 + s[2] * 1.3 * Math.min(2, mag); ctx.fillRect(bx + x0 * k, by + y0 * k, z, z); }
    }
    ctx.strokeStyle = 'rgba(148,163,184,.25)'; ctx.setLineDash([3, 5]); ctx.beginPath(); ctx.arc(bx, by, thE, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
    const oa = t2 * 0.6; const ox = bx + Math.cos(oa) * R * 1.05, oy = by + Math.sin(oa) * R * 0.35;
    ctx.globalCompositeOperation = 'lighter'; glow(ctx, ox, oy, R * 0.35, [255, 220, 160], 0.6); ctx.globalCompositeOperation = 'source-over'; drawBall(ctx, ox, oy, R * 0.09, '#ffe2a8', true);
  }
  /* comete */
  function drawComet(ctx, type, cx, cy, R, st, o) {
    const t2 = st.t; const big_ = type === 'comet' && (o.id === 'hale-bopp');
    if (type === 'comet-sl9') {
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 21; i++) { const f = i / 20; const x = cx - R * 1.4 + f * R * 2.8, y = cy + Math.sin(f * 3) * R * 0.1; glow(ctx, x, y, R * 0.12, [200, 220, 255], 0.5); for (let k = 0; k < 12; k++) { ctx.fillStyle = 'rgba(190,210,255,.15)'; ctx.fillRect(x - k * 3, y - k * 1.2 - 1, 2, 2); } }
      ctx.globalCompositeOperation = 'source-over';
      drawSphere(ctx, 'jupiter', cx + R * 2.6, cy + R * 1.9, R * 1.6, [-0.7, 0.4, 0.6], st.spin * 0.3);
      return;
    }
    if (type === 'comet67p') {
      const s = R * 0.62; const L = [-0.7, 0.35, 0.6];
      ctx.globalCompositeOperation = 'lighter'; glow(ctx, cx, cy, R * 1.6, [170, 200, 255], 0.18);
      for (let j = 0; j < 4; j++) { const a = -2.4 + j * 0.35; for (let i = 0; i < 50; i++) { const f = ((i / 50) + t2 * 0.15 + j * 0.13) % 1; ctx.fillStyle = `rgba(220,230,255,${0.28 * (1 - f)})`; ctx.fillRect(cx + Math.cos(a + Math.sin(i) * 0.05) * (s * 0.7 + f * R * 1.3), cy + Math.sin(a + Math.sin(i) * 0.05) * (s * 0.7 + f * R * 1.3), 1.6, 1.6); } }
      ctx.globalCompositeOperation = 'source-over';
      drawSphere(ctx, 'comet67p', cx - s * 0.42, cy + s * 0.28, s * 0.78, L, st.spin * 0.4, { tilt: 0 });
      drawSphere(ctx, 'comet67p', cx + s * 0.5, cy - s * 0.42, s * 0.55, L, st.spin * 0.4 + 1, { tilt: 0 });
      return;
    }
    const nx = cx + R * 0.55, ny = cy + R * 0.2; const dir = [-1, -0.38]; const dl = Math.hypot(dir[0], dir[1]); dir[0] /= dl; dir[1] /= dl;
    ctx.globalCompositeOperation = 'lighter';
    // coda di polvere (curva) e coda di ioni (dritta, blu)
    for (let i = 0; i < 900; i++) {
      const f = ((i * 0.618) % 1 + t2 * 0.03) % 1; const L = f * R * (big_ ? 3.6 : 3);
      const curve = f * f * R * 0.7; const w = (0.04 + f * 0.25) * R * Math.sin(i * 12.9898) ;
      const x = nx + dir[0] * L + dir[1] * (curve * 0.9 + w), y = ny + dir[1] * L - dir[0] * (curve * 0.9 + w);
      ctx.fillStyle = `rgba(255,236,200,${0.22 * (1 - f)})`; ctx.fillRect(x, y, 1.6, 1.6);
    }
    for (let i = 0; i < 600; i++) {
      const f = ((i * 0.754) % 1 + t2 * 0.08) % 1; const L = f * R * 3.4; const w = (0.02 + f * 0.08) * R * Math.sin(i * 78.233 + t2);
      const x = nx + dir[0] * L - dir[1] * w * 0.2 - dir[1] * R * 0.05, y = ny + dir[1] * L + dir[0] * w + dir[0] * R * 0.05 - f * R * 0.25;
      ctx.fillStyle = `rgba(120,170,255,${0.3 * (1 - f)})`; ctx.fillRect(x, y, 1.3, 1.3);
    }
    glow(ctx, nx, ny, R * (big_ ? 0.6 : 0.45), [200, 230, 255], 0.55); glow(ctx, nx, ny, R * 0.15, [255, 255, 240], 0.9);
    ctx.globalCompositeOperation = 'source-over';
    drawBall(ctx, nx, ny, Math.max(2, R * 0.03), '#c8c2b8', false);
  }

  /* ======================================================================
     PAGINE
     ====================================================================== */
  const VIEWS = [['solare', 'spaceSolar', '🪐', 'solar'], ['stelle', 'spaceStars', '✨', 'stars'], ['cosmo', 'spaceCosmos', '🌌', 'cosmos'], ['cielo', 'spaceSky', '🌃', 'sky']];
  const CATS = ['sun', 'planet', 'dwarf', 'moon', 'comet', 'star', 'nebula', 'galaxy', 'blackhole'];
  const CAT_ICON = { sun: '☀️', planet: '🪐', dwarf: '⚪', moon: '🌙', comet: '☄️', star: '⭐', nebula: '🌫️', galaxy: '🌌', blackhole: '🕳️' };
  const STATUS = { todo: '⚪', seen: '👀', done: '✅', passed: '🏆' };
  VIEWS.forEach(([id, , ic, k]) => Z.registerTitle('space:3d-' + id, '#/spazio/3d/' + id, () => ic + ' ' + tr('v.' + k)));
  const objColor = (o) => (o.temp ? rgbStr(tempRGB(o.temp)) : o.color || '#94a3b8');
  function thumb(o) {
    const c = objColor(o);
    if (o.cat === 'galaxy') return `<span class="sp-th gal" style="--tc:${c}"></span>`;
    if (o.cat === 'nebula') return `<span class="sp-th neb" data-b="${o.body}"></span>`;
    if (o.cat === 'blackhole') return `<span class="sp-th bh"></span>`;
    if (o.cat === 'comet') return `<span class="sp-th comet"></span>`;
    return `<span class="sp-th ${o.cat === 'star' || o.cat === 'sun' ? 'star' : ''}" style="--tc:${c}"></span>`;
  }

  function header(m, crumbs) {
    m.classList.add('sp-page');
    if (crumbs) m.appendChild(el('div', 'crumbs', crumbs));
  }

  function hub(m, viewArg) {
    header(m);
    let [vname, focus] = (viewArg || '').split(':');
    if (!VIEWS.some((x) => x[0] === vname)) vname = 'solare';
    const hero = el('section', 'sp-hero', `<div class="sp-hero-txt"><h1>🔭 ${tr('title')}</h1><p>${tr('sub')}</p></div>`);
    m.appendChild(hero);
    const tabs = el('div', 'sp-tabs'); m.appendChild(tabs);
    const box = el('div', 'sp-viewbox'); m.appendChild(box);
    const desc = el('p', 'sp-vdesc'); m.appendChild(desc);
    const show = (name, foc) => {
      const V_ = VIEWS.find((x) => x[0] === name);
      tabs.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === name));
      box.innerHTML = ''; Mini3D.mount(box, V_[1], foc ? { focus: foc, stage: foc } : {});
      desc.innerHTML = `${V_[2]} ${tr('vd.' + V_[3])}` + (name === 'solare' ? ` <span class="muted">· ${tr('moonsNote')}</span>` : '');
      Store.visit('space:3d-' + name);
      const h = '#/spazio/3d/' + name + (foc ? ':' + foc : ''); if (location.hash !== h && viewArg != null) history.replaceState(null, '', h);
      viewArg = name;
    };
    VIEWS.forEach(([id, , ic, k]) => { const b = el('button', 'sp-tab', `<span>${ic}</span><b>${tr('v.' + k)}</b>`); b.type = 'button'; b.dataset.v = id; b.onclick = () => { if (viewArg == null) viewArg = ''; show(id); }; tabs.appendChild(b); });
    // catalogo
    const cat = el('section', 'sp-catalog card', `<h2>📚 ${tr('catalog')} <small class="muted"></small></h2>`);
    const tools = el('div', 'sp-ctools'); const q = el('input', 'sp-search'); q.type = 'search'; q.placeholder = tr('find'); q.setAttribute('aria-label', tr('find'));
    const chips = el('div', 'sp-chips'); tools.append(q, chips); cat.appendChild(tools);
    const grid = el('div', 'sp-grid'); cat.appendChild(grid); m.appendChild(cat);
    grid.innerHTML = `<p class="muted">${tr('loading')}</p>`;
    loadObjects().then((objs) => {
      if (!grid.isConnected) return;
      cat.querySelector('h2 small').textContent = tr('objects', { n: objs.length });
      let cur = 'all';
      const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      const render = () => {
        const nq = norm(q.value.trim());
        const list = objs.filter((o) => (cur === 'all' || o.cat === cur || (cur === 'planet' && o.cat === 'sun' && false)) && (!nq || norm(o.name.join(' ') + ' ' + o.kind).includes(nq)));
        grid.innerHTML = '';
        CATS.forEach((c) => {
          const items = list.filter((o) => o.cat === c); if (!items.length) return;
          if (cur === 'all' && !nq) grid.appendChild(el('h3', 'sp-gh', `${CAT_ICON[c]} ${tr('cat.' + c)}`));
          items.forEach((o) => {
            const st = Store.status('space:' + o.id);
            const a = el('a', 'sp-item', `${thumb(o)}<span class="sp-it"><b>${esc(objName(o))}</b><small>${esc(o.kind)}</small></span><span class="sp-st" title="${t('status.' + st)}">${STATUS[st]}</span>`);
            a.href = '#/spazio/' + o.id; grid.appendChild(a);
          });
        });
        if (!grid.children.length) grid.appendChild(el('p', 'muted', t('search.none')));
      };
      const all = ['all'].concat(CATS);
      all.forEach((c) => { const b = el('button', 'chip' + (c === cur ? ' active' : ''), (c === 'all' ? '🔭 ' : CAT_ICON[c] + ' ') + tr('cat.' + c)); b.type = 'button'; b.onclick = () => { cur = c; chips.querySelectorAll('.chip').forEach((x) => x.classList.remove('active')); b.classList.add('active'); render(); }; chips.appendChild(b); });
      q.oninput = render; render();
      show(vname, focus);
    }).catch((e) => { console.error(e); grid.innerHTML = '<p class="muted">⚠️</p>'; show(vname, focus); });
  }

  /* --- confronto delle dimensioni (SVG) --- */
  function compareSVG(o) {
    const nm = (id, fb) => (BY[id] ? objName(BY[id]) : fb);
    let items = [], mode = 'circle', extra = '';
    if (o.r && o.cat !== 'comet') {
      const E = ['terra', 6371, '#3f7fe0'], M = ['luna', 1737, '#cfcfcf'], J = ['giove', 69911, '#d8a878'];
      if (o.id === 'sole') items = [[o.id, o.r, '#fbbf24'], J, E];
      else if (o.id === 'terra') items = [[o.id, o.r, o.color], M];
      else if (o.r < 900) items = [[o.id, o.r, o.color], M, E];
      else items = [[o.id, o.r, o.color], E];
      items = items.map(([id, r, c]) => ({ n: nm(id, id), v: r, c, lab: fmt(r * 2, 0) + ' ' + tr('km') }));
    } else if (o.rs) {
      items = [{ n: objName(o), v: o.rs, c: objColor(o), lab: '≈ ' + fmt(o.rs, o.rs < 10 ? 2 : 0) + ' × ☀️' }, { n: nm('sole', 'Sole'), v: 1, c: '#fbbf24', lab: '1 × ☀️' }];
      if (o.rs < 0.3) items.push({ n: nm('giove', 'Giove'), v: 0.1005, c: '#d8a878', lab: '0,1 × ☀️' });
      if (o.rs > 100) extra = 'orbits';
    } else if (o.cat === 'galaxy') {
      items = [{ n: objName(o), v: o.dly, c: '#c7d2fe', lab: big(o.dly) + ' ' + tr('ly') }];
      if (o.id !== 'via-lattea') items.push({ n: nm('via-lattea', 'Via Lattea'), v: 100000, c: '#e0e7ff', lab: '100.000 ' + tr('ly') }); else items.push({ n: 'Sistema Solare', v: 0.0016, c: '#fbbf24', lab: '≈ 0,002 ' + tr('ly') });
    } else if (o.cat === 'nebula') {
      mode = 'bar'; items = [{ n: objName(o), v: o.dly, c: '#f0abfc', lab: fmt(o.dly, o.dly < 10 ? 1 : 0) + ' ' + tr('ly') }, { n: nm('sole', 'Sole') + ' → ' + nm('proxima', 'Proxima'), v: 4.24, c: '#fde68a', lab: '4,24 ' + tr('ly') }];
    } else if (o.cat === 'blackhole') {
      const D = 2 * 2.953 * o.massSun; const refs = [['Torino ↔ Milano', 125], [nm('terra', 'Terra'), 12742], [nm('sole', 'Sole'), 1392000], ['⌀ orbita di Mercurio', 116e6], ['⌀ orbita della Terra', 299.2e6], ['⌀ orbita di Nettuno', 9e9]];
      const ref = refs.reduce((b, r) => (Math.abs(Math.log(D / r[1])) < Math.abs(Math.log(D / b[1])) ? r : b), refs[0]);
      items = [{ n: '⌀ orizzonte degli eventi', v: D, c: '#111827', lab: big(D) + ' ' + tr('km'), bh: true }, { n: ref[0], v: ref[1], c: '#94a3b8', lab: big(ref[1]) + ' ' + tr('km') }];
      mode = ref[0].includes('↔') ? 'bar' : 'circle';
    } else if (o.cat === 'comet') {
      mode = 'bar'; items = [{ n: objName(o), v: o.r * 2, c: '#93c5fd', lab: '≈ ' + fmt(o.r * 2, 0) + ' ' + tr('km') }, { n: 'Everest ↕', v: 8.85, c: '#cbd5e1', lab: '8,8 ' + tr('km') }];
    }
    if (!items.length) return '';
    const W = 620, H = 230; let s = `<svg viewBox="0 0 ${W} ${H}" class="sp-cmp" role="img">`;
    if (mode === 'bar') {
      const mx = Math.max(...items.map((x) => x.v));
      items.forEach((it, i) => { const w = Math.max(3, (it.v / mx) * (W - 200)); const y = 50 + i * 80; s += `<text x="10" y="${y - 10}" class="t1">${esc(it.n)}</text><rect x="10" y="${y}" width="${w}" height="26" rx="8" fill="${it.c}"/><text x="${w + 20}" y="${y + 19}" class="t2">${esc(it.lab)}</text>`; });
    } else {
      const mx = Math.max(...items.map((x) => x.v)); const RMAX = 92; let x = 20;
      const rad = items.map((it) => Math.max(1.5, (it.v / mx) * RMAX));
      if (extra === 'orbits') { const k = RMAX / mx; [[215, 'orbita della Terra'], [327, 'orbita di Marte']].forEach(([rr, n]) => { if (rr * k < 300) s += `<circle cx="${20 + RMAX}" cy="${H / 2 - 10}" r="${rr * k}" fill="none" stroke="#64748b" stroke-dasharray="4 5"/><text x="${20 + RMAX + rr * k * 0.7 + 4}" y="${H / 2 - 10 - rr * k * 0.72}" class="t3">${n}</text>`; }); }
      items.forEach((it, i) => {
        const r = rad[i]; const cx = x + r; const cy = H / 2 - 10;
        s += it.bh ? `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#000" stroke="#f59e0b" stroke-width="3"/>` : `<defs><radialGradient id="g${i}" cx="35%" cy="35%"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset=".35" stop-color="${it.c}"/><stop offset="1" stop-color="${it.c}" stop-opacity=".75"/></radialGradient></defs><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#g${i})"/>`;
        s += `<text x="${cx}" y="${Math.min(H - 22, cy + Math.max(r, 6) + 20)}" text-anchor="middle" class="t1">${esc(it.n)}</text><text x="${cx}" y="${Math.min(H - 4, cy + Math.max(r, 6) + 38)}" text-anchor="middle" class="t2">${esc(it.lab)}</text>`;
        x = cx + r + Math.max(70, 0);
      });
      const tot = x; s = s.replace(`viewBox="0 0 ${W} ${H}"`, `viewBox="0 0 ${Math.max(W, tot)} ${H}"`);
    }
    return s + '</svg>';
  }
  function lessonLinks() {
    const C = window.CURRICULUM; if (!C) return '';
    const ids = ['p5-sci-sistema-solare', 'm3-sci-universo']; const out = [];
    for (const y of C.years) for (const s of C.subjects) for (const e of (C.program[y][s] || [])) if (ids.includes(e[0])) out.push(`<a class="tcard" href="#/t/${e[0]}" style="--c:#2fb67c"><span class="ts">${STATUS[Store.status(e[0])]}</span><span class="tt"><b>${esc(i18n.topicTitle(e))}</b><small>${t('year.' + y)} · ${esc(i18n.topicDesc(e))}</small></span></a>`);
    return out.join('');
  }
  function view3dLink(o) {
    if (o.sol) return ['solare', o.sol];
    if (o.star) return ['stelle', o.star];
    if (o.id === 'via-lattea' || o.id === 'sagittarius-a') return ['cosmo', 'mw'];
    if (o.lg) return ['cosmo', 'lg'];
    if (o.id === 'm87' || o.id === 'vortice' || o.id === 'sombrero') return ['cosmo', 'uni'];
    return ['cielo', ''];
  }

  function objPage(m, id) {
    header(m);
    m.innerHTML = `<p class="muted">${tr('loading')}</p>`;
    loadObjects().then(() => {
      if (!location.hash.startsWith('#/spazio/' + encodeURIComponent(id)) && !location.hash.startsWith('#/spazio/' + id)) return;
      const o = BY[id]; m.innerHTML = '';
      if (!o) { hub(m); return; }
      const sid = 'space:' + id; Store.visit(sid);
      m.appendChild(el('div', 'crumbs', `<a href="#/spazio">🔭 ${tr('back')}</a> › ${CAT_ICON[o.cat]} ${tr('cat.' + o.cat)}`));
      const head = el('section', 'sp-ohead');
      const vis = el('div', 'sp-ovis'); const info = el('div', 'sp-oinfo');
      const st = Store.status(sid); const tp = Store.topic(sid);
      const [vv, vf] = view3dLink(o);
      info.innerHTML = `<p class="sp-okind">${CAT_ICON[o.cat]} ${esc(o.kind)}</p><h1>${esc(objName(o))}</h1><p class="sp-lead">${esc(o.lead)}</p>
        <div class="sp-pills"><span class="pill">${STATUS[st]} ${t('status.' + st)}</span>${tp.quizzes && tp.quizzes.q != null ? `<span class="pill">✏️ ${tp.quizzes.q}%</span>` : ''}</div>
        <div class="sp-acts"><a class="sp-btn on big" href="#/spazio/3d/${vv}${vf ? ':' + vf : ''}">🧭 ${tr('see3d')}</a></div>`;
      head.append(vis, info); m.appendChild(head);
      const bt = o.body || (o.cat === 'star' ? 'star' : 'star');
      const go = () => Mini3D.mount(vis, 'spaceBody', { type: bt, temp: o.temp, rs: o.rs, id: o.id });
      if (bt === 'pleiades') loadStars().then(go); else go();
      // dati
      const grid = el('div', 'sp-ogrid');
      grid.appendChild(el('section', 'card sp-facts', `<h2>📋 ${tr('facts')}</h2><table>${o.facts.map(([k, v2]) => `<tr><th>${esc(k)}</th><td>${esc(v2)}</td></tr>`).join('')}</table>`));
      grid.appendChild(el('section', 'card sp-text', o.html));
      m.appendChild(grid);
      m.appendChild(el('section', 'card c-curiosity sp-cur', `<h2>💡 ${tr('cur')}</h2><ul>${o.cur.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>`));
      const cmp = compareSVG(o); if (cmp) m.appendChild(el('section', 'card sp-cmpbox', `<h2>📏 ${tr('compare')}</h2><div class="sp-cmpwrap">${cmp}</div>`));
      const qz = el('section', 'card sp-quiz', `<h2>✏️ ${tr('quiz')}</h2>`);
      qz.appendChild(Quiz.render(o.quiz, { onDone: (ok, n) => Store.quizResult(sid, 'q', ok, n) })); m.appendChild(qz);
      m.appendChild(el('section', 'card sp-lessons', `<h2>🎒 ${tr('lessons')}</h2><div class="tlist">${lessonLinks()}</div>`));
      // fondo pagina
      const foot = el('div', 'topic-foot');
      const done = el('button', 'btn ' + (tp.done ? 'btn-ok' : ''), tp.done ? '✅ ' + tr('done') : '✔ ' + tr('markDone'));
      done.onclick = () => { const v2 = !Store.topic(sid).done; Store.markDone(sid, v2); done.className = 'btn ' + (v2 ? 'btn-ok' : ''); done.textContent = v2 ? '✅ ' + tr('done') : '✔ ' + tr('markDone'); };
      foot.appendChild(done);
      const same = OBJ.filter((x) => x.cat === o.cat); const k = same.indexOf(o); const nav = el('div', 'prevnext');
      if (k > 0) nav.appendChild(Object.assign(el('a', 'btn btn-ghost', '← ' + esc(objName(same[k - 1]))), { href: '#/spazio/' + same[k - 1].id }));
      if (k < same.length - 1) nav.appendChild(Object.assign(el('a', 'btn btn-ghost', esc(objName(same[k + 1])) + ' →'), { href: '#/spazio/' + same[k + 1].id }));
      foot.appendChild(nav); m.appendChild(foot);
    });
  }

  window.ZPages = window.ZPages || {};
  window.ZPages.spazio = function (m, a, b) {
    m.classList.add('sp-page');
    if (!a) return hub(m, null);
    if (a === '3d') return hub(m, b || 'solare');
    return objPage(m, a);
  };
  /* rimuove la classe quando si esce dalla sezione */
  window.addEventListener('hashchange', () => { if (!location.hash.startsWith('#/spazio')) { const m = document.getElementById('main'); if (m) m.classList.remove('sp-page'); } });

  /* titoli nello storico per le attività già registrate */
  function registerLogged() {
    const p = window.Store && Store.current(); if (!p) return false;
    const ids = new Set(p.log.map((e) => e.topic).filter((x) => x && x.startsWith('space:') && !x.startsWith('space:3d-')));
    ids.forEach((id) => { if (!Z.titles[id]) Z.registerTitle(id, '#/spazio/' + id.slice(6), () => (BY[id.slice(6)] ? objName(BY[id.slice(6)]) : id.slice(6).replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()))); });
    return ids.size > 0;
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (registerLogged()) setTimeout(() => loadObjects().then(() => { const h = location.hash; if (h === '' || h === '#/' || h === '#/storico') Z.rerender(); }).catch(() => {}), 50);
  });

  /* API minima per test e per altre sezioni */
  window.Space = { helio, moonGeo, jdOf, dateOf, gmst, eclToEq, eqToGal, galToEq, loadObjects, loadStars, spTemp, tempRGB };
})();
