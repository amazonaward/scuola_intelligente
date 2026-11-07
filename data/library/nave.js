/* La nave portacontainer. Prua verso +x, alto = +y, la linea di galleggiamento è a y = 0.
   Lo scafo è fatto da "piante" (vista dall'alto) estruse in verticale. La nave beccheggia piano sulle onde. */
(function () {
  const TAU = Math.PI * 2;
  const plan = (s, sx) => [[-3.5, -0.75], [2.0, -0.75], [2.7, -0.62], [3.2, -0.38], [3.52, -0.12], [3.6, 0], [3.52, 0.12], [3.2, 0.38], [2.7, 0.62], [2.0, 0.75], [-3.5, 0.75], [-3.62, 0.5], [-3.62, -0.5]]
    .map(([x, z]) => [x * (sx || 1), z * s]);
  /* estrude una pianta tra y0 e y1 */
  const slab = (pts, y0, y1, color, extra) => Object.assign({ t: 'extrude', d: y1 - y0, pts, rot: [90, 0, 0], pos: [0, (y0 + y1) / 2, 0], color }, extra || {});
  const BOB = { type: 'move', dir: [0, 1, 0], amp: 0.035, wave: 'sin', rate: 0.5 };
  const PAL = ['#ef4444', '#2563eb', '#f59e0b', '#16a34a', '#64748b', '#0891b2', '#b91c1c', '#7c3aed', '#ea580c', '#0f766e'];
  const boxes = [];
  for (let b = 0; b < 11; b++) {
    const x = -1.65 + b * 0.43, rows = x > 2.3 ? [-0.18, 0.18] : x > 1.9 ? [-0.48, -0.16, 0.16, 0.48] : [-0.54, -0.18, 0.18, 0.54];
    rows.forEach((z, r) => { for (let t = 0; t < (x > 2.3 ? 2 : 3); t++) boxes.push({ t: 'box', div: 1, s: [0.41, 0.25, 0.34], pos: [x, 0.7 + t * 0.26, z], color: PAL[(b * 7 + r * 3 + t * 5) % PAL.length] }); });
  }
  const winds = [0.95, 1.25, 1.55].flatMap((y) => [1, -1].map((s) => ({ t: 'box', s: [0.62, 0.07, 0.01], pos: [-2.55, y, s * 0.6], color: '#1e293b', decal: 1 }))).concat([0.95, 1.25, 1.55].map((y) => ({ t: 'box', s: [0.01, 0.07, 1.0], pos: [-2.19, y, 0], color: '#1e293b', decal: 1 })));
  const smoke = Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.12, n: 6, m: 10, pos: [-3.15, 1.75, 0], color: '#9ca3af',
    anim: [{ type: 'move', dir: [-0.6, 1, 0], amp: 0.9, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'scale', from: 0.5, to: 1.6, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 6 }] }));
  const arrow = (pos, down, len, color) => ({ t: 'group', pos, rot: down ? [180, 0, 0] : [0, 0, 0], anim: { type: 'scale', from: 0.95, to: 1.05, wave: 'sin01', rate: 0.5 },
    shapes: [ { t: 'cyl', r: 0.07, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.17, h: 0.32, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    id: 'nave',
    title: 'La nave',
    intro: 'Una nave portacontainer è lunga come <b>4 campi da calcio</b>, è fatta d\'acciaio e porta migliaia di container… eppure galleggia! Scopri il segreto di Archimede, l\'elica, il timone e la zavorra.',
    model: {
      rx: 0.25, ry: -0.6, speed: 0.4, height: 460, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'mare', name: 'Mare', color: '#0284c7', alpha: 0.22, explode: [0, 0, 0], chip: false, noLabel: true,
          info: '<p>L\'acqua del mare. La parte della nave sotto l\'acqua si chiama <b>opera viva</b>, quella sopra <b>opera morta</b>.</p>',
          shapes: [ { t: 'box', s: [9.5, 1.1, 3.6], pos: [0, -0.56, 0], div: 1 }, { t: 'box', s: [9.5, 0.01, 3.6], pos: [0, -0.005, 0], color: '#7dd3fc', alpha: 0.35, div: 4 } ] },
        { id: 'scafo', name: 'Scafo (opera morta)', label: 'Scafo', color: '#1e3a8a', anim: BOB, explode: [0, 0.4, 0],
          info: '<p>È il grande "guscio" d\'acciaio della nave. La parte sopra l\'acqua è spesso scura; in alto c\'è il <b>ponte di coperta</b>, dove si appoggiano i container.</p>',
          more: '<p>Lo scafo è fatto di lamiere d\'acciaio saldate su un "scheletro" di travi (le <b>ordinate</b> e la <b>chiglia</b>). Molte navi hanno il <b>doppio fondo</b>: se lo scafo esterno si rompe, l\'acqua non entra subito nella nave.</p>',
          shapes: [ slab(plan(1), 0, 0.56), slab(plan(0.99), 0.56, 0.59, '#475569'),
            slab(plan(1).filter(([x]) => x > 2.4).concat([[2.4, 0.71], [2.4, -0.71]]), 0.56, 0.78, '#1e3a8a'),
            { t: 'box', s: [0.6, 0.06, 0.012], pos: [3.0, 0.42, 0.53], rot: [0, -25, 0], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, 0.757], color: '#f8fafc', decal: 1 }, { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, -0.757], color: '#f8fafc', decal: 1 } ] },
        { id: 'carena', name: 'Carena (opera viva)', label: 'Carena', color: '#b91c1c', anim: BOB, explode: [0, -0.45, 0],
          info: '<p>È la parte dello scafo <b>sott\'acqua</b>, dipinta di rosso con una vernice speciale che impedisce ad alghe e conchiglie di attaccarsi.</p>',
          more: '<p>Più la nave è carica, più la carena affonda. Sulla fiancata c\'è un segno, la <b>marca di bordo libero</b> (linea di Plimsoll), che indica fin dove la nave può affondare in sicurezza nei diversi mari e stagioni.</p>',
          shapes: [ slab(plan(0.97, 0.995), -0.36, 0), slab(plan(0.85, 0.97), -0.52, -0.36), slab(plan(0.6, 0.93), -0.58, -0.52),
            { t: 'sphere', r: 1, n: 10, m: 16, pos: [3.4, -0.42, 0], scale: [0.36, 0.13, 0.13] } ] },
        { id: 'container', name: 'Container', color: '#ef4444', anim: BOB, explode: [0, 1.0, 0],
          info: '<p>I <b>container</b> sono grandi scatole d\'acciaio tutte della stessa misura. Si impilano come mattoncini e passano dalla nave al treno al camion senza aprirli.</p>',
          more: '<p>Un container standard è lungo 20 piedi (circa 6 m): si chiama <b>TEU</b>. Le navi più grandi ne portano più di <b>24 000</b>! Quasi tutte le cose che compriamo hanno viaggiato in un container.</p>',
          shapes: boxes },
        { id: 'ponte-comando', name: 'Ponte di comando', label: 'Ponte di comando', color: '#f8fafc', anim: BOB, explode: [-0.4, 0.8, 0],
          info: '<p>Il palazzo bianco a poppa. In cima c\'è il <b>ponte di comando</b>, dove il comandante e gli ufficiali guidano la nave con radar, GPS e radio. Sotto ci sono le cabine dell\'equipaggio.</p>',
          more: '<p>Per vedere oltre la pila di container il ponte deve essere molto alto. Le "ali" ai lati servono per guardare la fiancata quando si entra in porto. Il <b>radar</b> sul tetto "vede" le altre navi anche di notte e nella nebbia.</p>',
          shapes: [ { t: 'box', s: [0.72, 1.2, 1.2], pos: [-2.55, 1.17, 0] }, { t: 'box', s: [0.5, 0.14, 1.7], pos: [-2.45, 1.72, 0] }, ...winds,
            { t: 'cyl', r: 0.025, h: 0.4, n: 8, pos: [-2.55, 2.0, 0], color: '#475569' }, { t: 'group', pos: [-2.55, 2.2, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'box', s: [0.05, 0.05, 0.45], color: '#1f2937' } ] } ] },
        { id: 'fumaiolo', name: 'Fumaiolo', color: '#f97316', anim: BOB, explode: [-0.6, 0.9, 0],
          info: '<p>Il "camino" della nave: da qui escono i fumi del motore. Le navi moderne hanno filtri per inquinare di meno.</p>',
          shapes: [ { t: 'box', s: [0.38, 0.95, 0.42], pos: [-3.15, 1.1, 0] }, { t: 'box', s: [0.4, 0.12, 0.44], pos: [-3.15, 1.52, 0], color: '#111827' }, ...smoke ] },
        { id: 'motore', name: 'Motore diesel', label: 'Motore', color: '#57534e', anim: BOB, explode: [0, -0.4, 1.2],
          info: '<p>In fondo alla nave c\'è un motore enorme, alto come un palazzo di 4 piani! Brucia carburante e fa girare l\'<b>asse</b> dell\'elica.</p>',
          more: '<p>I motori delle grandi navi sono diesel <b>a due tempi</b> lentissimi: girano a circa 80–100 giri al minuto e sono collegati direttamente all\'elica, senza cambio. Possono superare i 80 000 cavalli.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.5], pos: [-2.45, -0.15, 0] }, ...[-2.75, -2.6, -2.45, -2.3, -2.15].map((x) => ({ t: 'cyl', r: 0.07, h: 0.2, n: 12, pos: [x, 0.18, 0], color: '#78716c' })) ] },
        { id: 'asse', name: 'Asse dell\'elica', label: 'Asse', color: '#9ca3af', anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], pos: [0, -0.33, 0], explode: [0, -0.4, 1.2],
          info: '<p>Un lungo cilindro d\'acciaio che porta la rotazione dal motore all\'elica, uscendo dallo scafo attraverso una tenuta stagna.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 1.15, n: 12, rot: [0, 0, 90], pos: [-3.25, 0, 0] }, { t: 'box', s: [0.02, 0.08, 0.02], pos: [-3.25, 0.04, 0], color: '#475569' } ] },
        { id: 'elica', name: 'Elica', color: '#ca8a04', pos: [-3.78, -0.33, 0], anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], explode: [-0.6, -0.4, 0],
          info: '<p>L\'elica, di bronzo, ha grandi pale avvitate. Girando spinge l\'acqua all\'<b>indietro</b> e l\'acqua spinge la nave in <b>avanti</b>.</p>',
          more: '<p>L\'elica di una grande portacontainer ha un diametro di circa <b>9–10 metri</b> e pesa oltre 100 tonnellate, ma gira lentamente. È la terza legge di Newton: azione e reazione, come quando nuoti spingendo l\'acqua con le mani.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1.4, 1, 1], color: '#a16207' } ].concat([0, 90, 180, 270].map((a) => ({ t: 'group', rot: [a, 0, 0], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.2, 0], scale: [0.05, 0.2, 0.12], rot: [0, 35, 0] } ] }))) },
        { id: 'timone', name: 'Timone', color: '#b91c1c', pos: [-3.98, -0.25, 0], anim: [BOB, { type: 'swing', axis: 'y', amp: 22, rate: 0.2 }], explode: [-0.8, -0.3, 0],
          info: '<p>Una grande "pinna" dietro l\'elica. Quando ruota, devia l\'acqua che arriva dall\'elica e fa girare la poppa: così la nave cambia direzione.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.5, 0.05], pos: [-0.12, 0, 0] }, { t: 'cyl', r: 0.03, h: 0.7, n: 8, pos: [0, 0.15, 0], color: '#475569' } ] },
        { id: 'zavorra', name: 'Casse di zavorra', label: 'Zavorra', color: '#0369a1', alpha: 0.55, anim: BOB, explode: [0, -0.9, 0],
          info: '<p>Nel doppio fondo ci sono grandi casse che si possono riempire d\'<b>acqua di mare</b>. Quando la nave è vuota, la zavorra la fa affondare di più e la rende <b>stabile</b>.</p>',
          more: '<p>Il peso in basso abbassa il <b>baricentro</b>: la nave diventa come un "misirizzi" che torna dritto. L\'acqua di zavorra però può trasportare piccoli animali in mari lontani: oggi si deve <b>depurare</b> prima di scaricarla.</p>',
          shapes: [-1.6, -0.4, 0.8, 2.0].map((x) => ({ t: 'group', pos: [x, -0.52, 0], anim: { type: 'scale', axis: 'y', from: 0.15, to: 1, wave: 'sin01', rate: 0.15 }, shapes: [ { t: 'box', s: [1.0, 0.16, 1.1], pos: [0, 0.08, 0] } ] })) },
        { id: 'ancora', name: 'Àncora e catena', label: 'Àncora', color: '#374151', anim: BOB, explode: [0.4, 0, 0.4],
          info: '<p>L\'<b>àncora</b> pesa decine di tonnellate. Calata sul fondo con una lunga catena, si aggrappa al fondale e tiene ferma la nave.</p>',
          shapes: [ { t: 'box', s: [0.06, 0.2, 0.02], pos: [3.05, 0.38, 0.47], rot: [0, -32, 0] }, { t: 'box', s: [0.18, 0.05, 0.02], pos: [3.05, 0.27, 0.47], rot: [0, -32, 0] },
            { t: 'cyl', r: 0.05, h: 0.03, n: 12, rot: [90, 0, 0], pos: [3.12, 0.5, 0.42], color: '#111827' } ] },
        { id: 'forze', name: 'Peso e spinta di Archimede', label: 'Forze', color: '#22c55e', explode: [0, 0, 0], noLabel: false,
          info: '<p>La freccia <b>rossa</b> è il <b>peso</b> della nave, che la tira giù. La freccia <b>verde</b> è la <b>spinta</b> dell\'acqua verso l\'alto. Quando sono uguali, la nave galleggia.</p>',
          more: '<p><b>Principio di Archimede</b>: un corpo immerso riceve una spinta verso l\'alto uguale al peso dell\'acqua che sposta. Lo scafo è vuoto dentro: sposta tantissima acqua, molto più pesante dell\'acciaio di cui è fatto.</p>',
          shapes: [ arrow([0.2, 2.75, 0], true, 0.75, '#ef4444'), arrow([0.2, -1.75, 0], false, 0.75, '#22c55e') ] }
      ]
    },
    steps: [
      { icon: '🚢', title: 'Una città d\'acciaio che galleggia', explode: 0,
        html: '<p>Le grandi navi portacontainer trasportano quasi tutte le merci del mondo: vestiti, giocattoli, telefoni, banane… Sono d\'<b>acciaio</b>, che è molto più pesante dell\'acqua. Allora perché non affondano?</p>' },
      { icon: '⚖️', title: 'Il segreto di Archimede', focus: ['forze', 'carena', 'scafo', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.05 },
        html: '<p>Lo scafo è come una grande scatola <b>vuota</b>: affondando un po\', sposta (spinge via) una grande quantità d\'acqua. L\'acqua spinge la nave verso l\'alto con una forza uguale al <b>peso dell\'acqua spostata</b>.</p><p>Se questa spinta è uguale al peso della nave, la nave galleggia.</p><p class="tip">🥣 Prova: una pallina di plastilina affonda, ma se la modelli a forma di barchetta galleggia!</p>' },
      { icon: '🐬', title: 'La forma dello scafo e il bulbo', focus: ['carena', 'scafo'], explode: 0, view: { rx: -0.25, ry: -0.9 },
        html: '<p>La prua è affilata per "tagliare" l\'acqua. Sotto la prua c\'è un <b>bulbo</b> arrotondato: crea un\'onda che riduce quella della nave, così si consuma meno carburante.</p><p>La parte sott\'acqua, la <b>carena</b>, è rossa: la vernice speciale tiene lontane alghe e conchiglie.</p>' },
      { icon: '📦', title: 'Carico e zavorra', focus: ['container', 'zavorra', 'carena'], explode: 0.3, view: { rx: 0.25, ry: -0.5 },
        html: '<p>I <b>container</b> si impilano sul ponte e nelle stive. Più la nave è carica, più affonda. Quando è vuota, si riempiono di acqua le <b>casse di zavorra</b> in basso: il peso in fondo la rende stabile e non si ribalta.</p>' },
      { icon: '⚙️', title: 'Motore, asse ed elica', focus: ['motore', 'asse', 'elica', 'fumaiolo'], explode: 0.2, view: { rx: 0.1, ry: -1.2 },
        html: '<p>Un enorme <b>motore diesel</b> fa girare un lungo <b>asse</b> che esce dallo scafo. In fondo c\'è l\'<b>elica</b>: le sue pale spingono l\'acqua indietro, e l\'acqua spinge la nave in avanti.</p>' },
      { icon: '🧭', title: 'Timone e ponte di comando', focus: ['timone', 'ponte-comando', 'elica'], explode: 0, view: { rx: 0.3, ry: -2.2 },
        html: '<p>Dal <b>ponte di comando</b>, in alto, il comandante guida la nave con radar e GPS. Girando il <b>timone</b>, l\'acqua spinta dall\'elica viene deviata e la nave cambia direzione, molto lentamente: per fermarsi può servire più di un chilometro!</p>' },
      { icon: '⚓', title: 'In porto: l\'àncora', focus: ['ancora', 'scafo'], explode: 0, zoom: 1.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>Quando aspetta di entrare in porto, la nave cala l\'<b>àncora</b>: pesa decine di tonnellate e, con la sua lunga catena, si aggrappa al fondale.</p><p>In porto enormi gru scaricano i container uno a uno, anche 30 all\'ora per ogni gru.</p>' }
    ],
    facts: [
      { icon: '🛁', title: 'Eureka!', html: 'Si racconta che <b>Archimede</b> di Siracusa scoprì il suo principio entrando nella vasca da bagno: vedendo salire l\'acqua, corse per strada gridando "Eureka!" ("Ho trovato!").' },
      { icon: '🏟️', title: 'Più lunga di 4 campi', html: 'Le navi portacontainer più grandi sono lunghe circa <b>400 metri</b> e larghe 60: più della Torre Eiffel sdraiata.' },
      { icon: '🌍', title: 'Il 90% delle merci', html: 'Circa il <b>90%</b> delle merci scambiate nel mondo viaggia per mare. Genova, Trieste e Gioia Tauro sono tra i porti più importanti d\'Italia.' },
      { icon: '🧂', title: 'Acqua salata, acqua dolce', html: 'Nell\'acqua salata del mare le navi galleggiano un po\' più in alto che nei fiumi: l\'acqua salata è più densa e spinge di più.' }
    ],
    quiz: [
      { type: 'mc', q: 'Perché una nave d\'acciaio galleggia?', options: ['Perché l\'acciaio galleggia', 'Perché lo scafo vuoto sposta molta acqua, che la spinge in alto', 'Perché l\'elica la tiene su', 'Perché il mare è salato'], answer: 1, explain: 'Principio di Archimede: la spinta è uguale al peso dell\'acqua spostata dallo scafo.' },
      { type: 'mc', q: 'Che cosa spinge la nave in avanti?', options: ['Il timone', 'L\'elica che spinge l\'acqua indietro', 'Il fumaiolo', 'L\'àncora'], answer: 1, explain: 'Azione e reazione: l\'elica spinge l\'acqua indietro e l\'acqua spinge la nave avanti.' },
      { type: 'tf', q: 'Le casse di zavorra servono a rendere la nave più stabile quando è vuota.', answer: true, explain: 'L\'acqua di zavorra mette peso in basso e abbassa il baricentro.' },
      { type: 'mc', q: 'Come si chiama la parte dello scafo che sta sott\'acqua?', options: ['Opera viva (carena)', 'Opera morta', 'Ponte di comando', 'Fumaiolo'], answer: 0, explain: 'L\'opera viva, o carena, è la parte immersa; l\'opera morta è quella fuori dall\'acqua.' },
      { type: 'mc', q: 'A che cosa serve il timone?', options: ['A frenare', 'A cambiare direzione', 'A galleggiare', 'A caricare i container'], answer: 1, explain: 'Deviando l\'acqua spinta dall\'elica, il timone fa girare la nave.' },
      { type: 'mc', q: 'Chi scoprì il principio del galleggiamento?', options: ['Galileo Galilei', 'Archimede', 'Leonardo da Vinci', 'Isaac Newton'], answer: 1, explain: 'Archimede di Siracusa, più di 2200 anni fa.' }
    ]
  });
})();
