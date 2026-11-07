/* Il razzo a due stadi con capsula (modello generico ispirato ai lanciatori reali). Asse verticale = y. */
(function () {
  /* serbatoio con fondi bombati (profilo di rivoluzione) */
  const tank = (r, h) => ({ t: 'lathe', n: 28, pts: [[0, -h / 2 - r * 0.5], [r * 0.55, -h / 2 - r * 0.42], [r * 0.85, -h / 2 - r * 0.22], [r, -h / 2], [r, h / 2], [r * 0.85, h / 2 + r * 0.22], [r * 0.55, h / 2 + r * 0.42], [0, h / 2 + r * 0.5]] });
  const ring5 = [[0, 0], [0.3, 0], [-0.3, 0], [0, 0.3], [0, -0.3]];
  const bell = (s) => ({ t: 'lathe', ds: true, n: 24, pts: [[0.07 * s, 0], [0.09 * s, -0.08 * s], [0.14 * s, -0.25 * s], [0.19 * s, -0.42 * s]] });
  const fin = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [{ t: 'extrude', d: 0.05, pts: [[0.55, 0.9], [0.55, 0], [1.05, -0.12], [1.05, 0.25]], color: '#1f2937' }] });
  const flame = (x, z) => ({ t: 'group', pos: [x, -0.72, z], anim: [{ type: 'scale', axis: 'y', from: 1, to: 1.25, wave: 'sin01', rate: 7, phase: (x + z) * 3, pivot: [0, 0.55, 0] }], shapes: [
    { t: 'cone', r: 0.19, h: 1.1, n: 16, rot: [180, 0, 0], color: '#f97316', alpha: 0.82 },
    { t: 'cone', r: 0.1, h: 0.75, n: 12, rot: [180, 0, 0], pos: [0, 0.17, 0], color: '#fde047' }
  ] });

  LIBRARY({
    id: 'razzo',
    title: 'Il razzo',
    intro: 'Per andare nello spazio bisogna correre a <b>28 000 km/h</b>! Il razzo brucia tonnellate di carburante e spinge i gas caldissimi verso il basso: così lui va verso l\'alto. Smontalo stadio per stadio.',
    model: {
      rx: 0.12, ry: -0.5, speed: 0.6, height: 520, bg: 'sky',
      parts: [
        { id: 'stadio-1', name: 'Primo stadio', color: '#f8fafc', explode: [0, -1.5, 0],
          info: '<p>È la parte più grande e pesante: contiene tanto carburante e i motori più potenti. Lavora per i primi <b>2–3 minuti</b>, poi si stacca e cade.</p>',
          more: '<p>Al decollo il primo stadio deve sollevare tutto il razzo, che può pesare centinaia di tonnellate. Alcuni primi stadi moderni tornano indietro e <b>atterrano in piedi</b> per essere riutilizzati!</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 3.6, n: 36, pos: [0, 1.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 3.5, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 0.12, 0], color: '#111827' }, { t: 'lathe', n: 36, ds: true, pts: [[0.55, 0], [0.62, -0.3]], color: '#334155' } ].concat([45, 135, 225, 315].map(fin)) },
        { id: 'ossidante-1', name: 'Serbatoio dell\'ossigeno (1° stadio)', label: 'Ossigeno liquido', color: '#7dd3fc', pos: [0, 2.6, 0], explode: [-1.1, -1.5, 0],
          info: '<p>Contiene <b>ossigeno liquido</b>, freddissimo: −183 °C! Nello spazio non c\'è aria, quindi il razzo deve portarsi dietro anche l\'ossigeno per bruciare il carburante.</p>',
          more: '<p>L\'ossigeno che serve per bruciare si chiama <b>ossidante</b>. Per stare liquido deve restare sotto i −183 °C: per questo i serbatoi sono isolati e si vede del ghiaccio sulla pelle del razzo.</p>',
          shapes: [ tank(0.48, 1.3) ] },
        { id: 'carburante-1', name: 'Serbatoio del carburante (1° stadio)', label: 'Carburante', color: '#fb923c', pos: [0, 1.05, 0], explode: [1.1, -1.5, 0],
          info: '<p>Contiene il <b>carburante</b>, per esempio cherosene raffinato (simile al combustibile degli aerei) o metano liquido.</p>',
          shapes: [ tank(0.48, 0.75), { t: 'cyl', r: 0.05, h: 2.6, n: 10, pos: [0.25, 0.7, 0.25], color: '#94a3b8' } ] },
        { id: 'motori-1', name: 'Motori del 1° stadio', label: 'Motori', color: '#9ca3af', pos: [0, -0.02, 0], explode: [0, -1.7, 0],
          info: '<p>Nei motori, potenti <b>pompe</b> spingono carburante e ossigeno nella <b>camera di combustione</b>, dove bruciano a più di 3000 °C.</p>',
          more: '<p>Le turbopompe girano a decine di migliaia di giri al minuto: svuotano una piscina in pochi secondi! I motori possono anche inclinarsi un po\' per <b>sterzare</b> il razzo.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.08, n: 36, pos: [0, 0.2, 0], color: '#475569' } ].concat(ring5.map(([x, z]) => ({ t: 'group', pos: [x, 0, z], shapes: [
            { t: 'cyl', r: 0.085, h: 0.22, n: 16 }, { t: 'box', s: [0.08, 0.12, 0.08], pos: [0.1, 0.06, 0], color: '#64748b' } ] }))) },
        { id: 'ugelli-1', name: 'Ugelli', color: '#475569', pos: [0, -0.12, 0], explode: [0, -1.85, 0],
          info: '<p>Sono le grandi "campane" sotto i motori. Il gas caldo esce strizzato e poi si allarga dentro l\'ugello, <b>accelerando</b> fino a oltre 10 000 km/h.</p>',
          more: '<p>La forma a campana (ugello <b>de Laval</b>) trasforma il calore dei gas in velocità. Più veloci escono i gas, più spinta riceve il razzo.</p>',
          shapes: ring5.map(([x, z]) => Object.assign(bell(1), { pos: [x, 0, z] })) },
        { id: 'fiamma', name: 'Getto di gas caldi', label: 'Getto', color: '#f97316', explode: [0, -1.85, 0],
          info: '<p>Il razzo spinge i gas <b>verso il basso</b>, e i gas spingono il razzo <b>verso l\'alto</b>: è il principio di azione e reazione.</p>',
          shapes: ring5.map(([x, z]) => flame(x, z)) },
        { id: 'stadio-2', name: 'Secondo stadio', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>Si accende quando il primo stadio si è staccato. Lavora nel vuoto, quasi senza aria, e porta il carico fino all\'<b>orbita</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 2.1, n: 36, pos: [0, 4.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.18, n: 36, pos: [0, 3.84, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.12, n: 36, pos: [0, 5.8, 0], color: '#cbd5e1' } ] },
        { id: 'ossidante-2', name: 'Serbatoio dell\'ossigeno (2° stadio)', label: 'Ossigeno 2', color: '#7dd3fc', pos: [0, 5.2, 0], explode: [-1.0, 0, 0],
          info: '<p>Ossigeno liquido per il secondo stadio: serbatoio più piccolo, perché ora il razzo è molto più leggero.</p>', shapes: [ tank(0.46, 0.45) ] },
        { id: 'carburante-2', name: 'Serbatoio del carburante (2° stadio)', label: 'Carburante 2', color: '#fb923c', pos: [0, 4.35, 0], explode: [1.0, 0, 0],
          info: '<p>Carburante per il secondo stadio. Spesso si usa <b>idrogeno liquido</b>, che è leggerissimo ma freddissimo (−253 °C).</p>', shapes: [ tank(0.46, 0.25) ] },
        { id: 'motore-2', name: 'Motore del 2° stadio', label: 'Motore 2', color: '#94a3b8', pos: [0, 3.78, 0], explode: [0, -0.45, 0],
          info: '<p>Un solo motore con un <b>ugello molto lungo</b>: nel vuoto i gas si possono allargare di più e spingono meglio.</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.2, n: 16, pos: [0, 0.1, 0] }, Object.assign(bell(1.9), { pos: [0, 0, 0], color: '#64748b' }) ] },
        { id: 'modulo-servizio', name: 'Modulo di servizio', color: '#e5e7eb', pos: [0, 6.18, 0], explode: [0, 0.8, 0],
          info: '<p>È la "cantina" della capsula: contiene ossigeno da respirare, acqua, batterie e piccoli motori per manovrare nello spazio.</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 0.6, n: 36 }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [0.85, 0, 0], color: '#1e3a8a' }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [-0.85, 0, 0], color: '#1e3a8a' },
            { t: 'cone', r: 0.12, h: 0.18, n: 12, pos: [0, -0.38, 0], rot: [180, 0, 0], color: '#475569' } ] },
        { id: 'capsula', name: 'Capsula dell\'equipaggio', label: 'Capsula', color: '#cbd5e1', pos: [0, 6.5, 0], explode: [0, 1.3, 0],
          info: '<p>Qui viaggiano gli <b>astronauti</b>. Al ritorno rientra nell\'atmosfera protetta da uno <b>scudo termico</b> e scende con i paracadute.</p>',
          more: '<p>Durante il rientro l\'aria davanti alla capsula diventa incandescente: oltre 2500 °C! Lo scudo termico si consuma lentamente e porta via il calore.</p>',
          shapes: [ { t: 'cyl', r: 0.5, r2: 0.2, h: 0.75, n: 36, pos: [0, 0.375, 0] }, { t: 'cyl', r: 0.5, h: 0.05, n: 36, pos: [0, -0.02, 0], color: '#78350f' },
            { t: 'box', s: [0.12, 0.12, 0.02], pos: [0, 0.45, 0.385], rot: [-22, 0, 0], color: '#0f172a', decal: 1 } ] },
        { id: 'torre', name: 'Torre di salvataggio', label: 'Torre di salvataggio', color: '#ef4444', pos: [0, 7.25, 0], explode: [0, 1.9, 0],
          info: '<p>È un piccolo razzo di emergenza: se qualcosa va storto al decollo, <b>strappa via la capsula</b> e la porta lontano in pochi secondi.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [0.08, 0.27, 0], rot: [0, 0, -8] }, { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [-0.08, 0.27, 0], rot: [0, 0, 8] },
            { t: 'cyl', r: 0.08, h: 0.45, n: 16, pos: [0, 0.75, 0] }, { t: 'cone', r: 0.08, h: 0.2, n: 16, pos: [0, 1.07, 0] } ] }
      ]
    },
    steps: [
      { icon: '⛽', title: 'Il pieno: carburante e ossigeno', focus: ['ossidante-1', 'carburante-1', 'ossidante-2', 'carburante-2'], explode: 0.4,
        html: '<p>Quasi tutto il razzo è <b>serbatoio</b>! Per bruciare servono due ingredienti: il <b>carburante</b> e l\'<b>ossigeno</b>. Sulla Terra l\'ossigeno è nell\'aria, ma nello spazio non c\'è: il razzo lo porta con sé, liquido e freddissimo.</p>' },
      { icon: '🔥', title: 'Accensione!', focus: ['motori-1', 'ugelli-1', 'fiamma'], explode: 0, view: { rx: -0.1, ry: -0.5 },
        html: '<p>Le pompe spingono carburante e ossigeno nella <b>camera di combustione</b>. Bruciano a più di 3000 °C e diventano gas caldissimi che vogliono uscire.</p><p>Gli <b>ugelli</b> li fanno uscire velocissimi verso il basso.</p>' },
      { icon: '🎈', title: 'Azione e reazione', focus: ['fiamma', 'ugelli-1', 'stadio-1'], explode: 0,
        html: '<p>Hai mai lasciato andare un palloncino gonfio? L\'aria esce da una parte e il palloncino vola dall\'altra. Il razzo fa lo stesso!</p><p class="tip">🍎 È la <b>terza legge di Newton</b>: a ogni azione corrisponde una reazione uguale e contraria. Non serve l\'aria per "appoggiarsi": funziona anche nel vuoto.</p>' },
      { icon: '✂️', title: 'Si stacca il primo stadio', focus: ['stadio-1', 'ossidante-1', 'carburante-1', 'motori-1', 'ugelli-1', 'fiamma', 'stadio-2'], explode: 1,
        html: '<p>Dopo circa 2–3 minuti i serbatoi del primo stadio sono vuoti. Portarseli dietro sarebbe solo peso inutile: il primo stadio <b>si sgancia</b> e ricade.</p><p>Così il resto del razzo è molto più leggero e accelera più facilmente.</p>' },
      { icon: '🌍', title: 'In orbita col secondo stadio', focus: ['stadio-2', 'motore-2', 'ossidante-2', 'carburante-2'], explode: 0.6,
        html: '<p>Il <b>secondo stadio</b> si accende e spinge fino a circa <b>28 000 km/h</b>. A quella velocità la capsula continua a "cadere" intorno alla Terra senza mai toccarla: è in <b>orbita</b>!</p>' },
      { icon: '👩‍🚀', title: 'La capsula e il ritorno', focus: ['capsula', 'modulo-servizio', 'torre'], explode: 0.5, view: { rx: 0.3, ry: -0.4 },
        html: '<p>La <b>torre di salvataggio</b> protegge gli astronauti al decollo e poi viene sganciata. Nello spazio il <b>modulo di servizio</b> dà aria, acqua ed energia.</p><p>Per tornare, la capsula rientra nell\'atmosfera con lo <b>scudo termico</b> e scende con i paracadute.</p>' }
    ],
    facts: [
      { icon: '🌕', title: 'Il gigante Saturn V', html: 'Il razzo che portò gli uomini sulla Luna nel 1969 era alto 110 metri, come un palazzo di 36 piani, e pesava quasi 3000 tonnellate.' },
      { icon: '🇮🇹', title: 'Un razzo italiano', html: '<b>Vega</b> è un lanciatore europeo progettato e costruito in Italia, a Colleferro (Roma). Porta in orbita piccoli satelliti.' },
      { icon: '🔁', title: 'Razzi che atterrano', html: 'Dal 2015 alcuni primi stadi tornano indietro e atterrano in verticale su una piattaforma, anche in mezzo al mare, per essere riusati.' },
      { icon: '🏎️', title: 'Più veloce di un proiettile', html: 'Per restare in orbita bassa servono circa 7,8 km al secondo: andresti da Milano a Roma in poco più di un minuto!' }
    ],
    quiz: [
      { type: 'mc', q: 'Perché il razzo porta con sé l\'ossigeno liquido?', options: ['Per farlo respirare agli astronauti al decollo', 'Perché nello spazio non c\'è aria per bruciare il carburante', 'Per raffreddare i motori', 'Per fare la fiamma blu'], answer: 1, explain: 'Senza ossigeno il carburante non brucia, e nello spazio non c\'è aria: il razzo deve portarsi anche l\'ossidante.' },
      { type: 'mc', q: 'Quale legge spiega come vola un razzo?', options: ['La legge di Archimede', 'La terza legge di Newton (azione e reazione)', 'La legge di gravità di Galileo', 'La legge di Ohm'], answer: 1, explain: 'I gas spinti verso il basso spingono il razzo verso l\'alto: azione e reazione.' },
      { type: 'tf', q: 'Un razzo ha bisogno dell\'aria per spingersi in avanti.', answer: false, explain: 'Il razzo spinge contro i propri gas, non contro l\'aria: funziona anche nel vuoto, anzi meglio.' },
      { type: 'mc', q: 'Perché il primo stadio si stacca?', options: ['Perché è rotto', 'Perché i suoi serbatoi sono vuoti e sarebbe solo peso inutile', 'Per far posto agli astronauti', 'Per rallentare'], answer: 1, explain: 'Liberarsi del peso vuoto permette al resto del razzo di accelerare di più.' },
      { type: 'mc', q: 'A cosa serve lo scudo termico della capsula?', options: ['A proteggerla dal calore del rientro nell\'atmosfera', 'A ripararla dalla pioggia', 'A farla galleggiare', 'A produrre corrente'], answer: 0, explain: 'Rientrando a grande velocità, l\'aria davanti alla capsula diventa caldissima: lo scudo protegge gli astronauti.' }
    ]
  });
})();
