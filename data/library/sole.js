/* Il Sole, "tagliato a metà come un'arancia": la metà posteriore mostra gli strati sulla faccia del taglio (piano z = 0, rivolto verso +z);
   la metà anteriore (fotosfera) si sposta con il cursore Esplodi. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const backHemi = (r, color, dz, alpha) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [-90, 0, 0], pos: [0, 0, dz], color, alpha });
  /* punto sulla superficie: ax = inclinazione dall'alto verso +z, ay = giro intorno a y */
  const onSurf = (ax, ay, shapes) => ({ t: 'group', rot: [0, ay, 0], shapes: [ { t: 'group', rot: [ax, 0, 0], shapes: [ { t: 'group', pos: [0, R, 0], shapes } ] } ] });
  /* celle convettive sulla faccia del taglio */
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * 360 * D, c = [1.7 * Math.cos(a), 1.7 * Math.sin(a)], rr = 0.2;
    const dir = i % 2 ? 1 : -1;
    const loop = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.07]; });
    cells.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.05], color: '#9a3412' });
    for (let k = 0; k < 2; k++) cells.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: loop[0], color: '#fef3c7',
      anim: [ { type: 'path', pts: loop, wave: 'saw', rate: 0.6, phase: k / 2 }, { type: 'blink', color: '#c2410c', amount: 0.9, rate: 0.6, phase: k / 2 } ] });
  }
  /* fotoni che rimbalzano nella zona radiativa */
  const photons = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * 360 * D + 0.3, u = [Math.cos(a), Math.sin(a)], v = [-u[1], u[0]];
    const pts = [0.5, 0.65, 0.8, 0.95, 1.1, 1.25, 1.42].map((r, k) => [u[0] * r + v[0] * (k % 2 ? 0.09 : -0.09), u[1] * r + v[1] * (k % 2 ? 0.09 : -0.09), 0.07]);
    photons.push({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: pts[0], color: '#ffffff', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.35, phase: i / 8 }, { type: 'blink', fade: true, wave: 'window', from: 0.03, to: 0.97, ramp: 0.06, rate: 0.35, phase: i / 8 } ] });
  }
  const flashes = [[0.15, 0.2], [-0.25, 0.05], [0.05, -0.28], [0.3, -0.1], [-0.12, 0.3]].map((p, i) => ({ t: 'sphere', r: 0.09, n: 8, m: 10, pos: [p[0], p[1], 0.09], color: '#ffffff',
    anim: { type: 'blink', fade: true, wave: 'window', from: 0, to: 0.15, ramp: 0.4, rate: 1.3, phase: i * 0.21 } }));
  const wind = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 137.5 * D, b = ((i * 53) % 140 - 70) * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)];
    wind.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], color: '#fde68a',
      anim: [ { type: 'path', pts: [[d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], [d[0] * 4.6, d[1] * 4.6, d[2] * 4.6]], wave: 'saw', rate: 0.4, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: i / 14 } ] });
  }
  /* granuli della fotosfera, sparsi a caso (generatore pseudo-casuale fisso) */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const GRAN = Array.from({ length: 46 }, () => [12 + rnd() * 160, -85 + rnd() * 170, 0.05 + rnd() * 0.07, rnd() < 0.5 ? '#f9c74f' : '#f6a821']);
  const prom = (ax, ay, s, ph) => onSurf(ax, ay, [ { t: 'group', anim: [ { type: 'scale', from: 0.85, to: 1.15, rate: 0.5, phase: ph }, { type: 'blink', color: '#fde047', amount: 0.5, rate: 0.5, phase: ph } ], shapes: [
    { t: 'torus', R: 0.32 * s, r: 0.08 * s, n: 22, m: 10, arc: 180, rot: [-90, 0, 0], color: '#f97316' },
    { t: 'torus', R: 0.32 * s, r: 0.035 * s, n: 22, m: 6, arc: 180, rot: [-90, 0, 0], pos: [0, 0.05 * s, 0], color: '#fde047' } ] } ]);

  LIBRARY({
    id: 'sole',
    title: 'Il Sole',
    intro: 'Il Sole è la <b>stella</b> più vicina a noi: una palla di gas caldissimo 109 volte più larga della Terra. Ci dà luce e calore e fa vivere piante, animali e persone. Apriamolo come un\'arancia e guardiamo dentro!',
    model: {
      rx: 0.3, ry: -0.4, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'fotosfera', name: 'Fotosfera (la superficie)', label: 'Fotosfera', color: '#fbbf24', explode: [4.6, 0.3, -2.6],
          info: '<p>È la "superficie" luminosa del Sole, quella che vediamo (mai a occhio nudo!). Non è solida: è gas a circa <b>5500 °C</b>, tutto a granelli che ribollono.</p>',
          more: '<p>I "granelli" (granuli) sono le cime di enormi bolle di gas caldo, larghe come l\'Italia, che salgono dall\'interno, si raffreddano e riscendono in pochi minuti.</p>',
          shapes: [ { t: 'sphere', r: R, n: 20, m: 40, hemi: true, rot: [90, 0, 0] } ]
            .concat(GRAN.map(([ax, ay, r, c]) => onSurf(ax, ay, [ { t: 'sphere', r, n: 6, m: 10, scale: [1, 0.1, 1], color: c, decal: 1 } ]))) },
        { id: 'macchie', name: 'Macchie solari', color: '#451a03', explode: [4.6, 0.3, -2.6],
          info: '<p>Zone più "fredde" (si fa per dire: 3500 °C!) e quindi più scure. Una macchia può essere più grande della Terra.</p>',
          more: '<p>Le macchie nascono dove il <b>campo magnetico</b> del Sole è fortissimo e frena il gas caldo che sale. Il loro numero aumenta e diminuisce con un ciclo di circa <b>11 anni</b>.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.22, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.12, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(68, 8, [ { t: 'sphere', r: 0.15, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(110, 30, [ { t: 'sphere', r: 0.18, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.1, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]) ] },
        { id: 'zona-convettiva', name: 'Zona convettiva', label: 'Zona convettiva', color: '#f97316', explode: [0, 0, 0],
          info: '<p>Lo strato esterno dell\'interno del Sole. Qui il gas caldo <b>sale</b>, si raffredda in superficie e <b>riscende</b>, come l\'acqua in una pentola che bolle.</p>',
          shapes: [ backHemi(R, '#fbbf24', 0), { t: 'cyl', r: R - 0.03, h: 0.01, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.007], color: '#f97316' }, { t: 'tube', r: R + 0.005, ri: R - 0.05, h: 0.03, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#fde047' } ] },
        { id: 'celle', name: 'Correnti convettive', label: 'Correnti convettive', color: '#fef3c7', explode: [0, 0, 0.05], chip: true, noLabel: true,
          info: '<p>Le bolle di gas fanno un giro continuo: salgono calde (chiare), cedono il calore in superficie e scendono più fredde (scure). Così il calore arriva fuori.</p>',
          shapes: cells },
        { id: 'zona-radiativa', name: 'Zona radiativa', label: 'Zona radiativa', color: '#fcd34d', explode: [0, 0, 0.05],
          info: '<p>Qui il gas è così fitto che non si muove: l\'energia viaggia come <b>luce</b> che rimbalza da una particella all\'altra, a zig-zag.</p>',
          more: '<p>Un fotone può impiegare da <b>decine di migliaia a centinaia di migliaia di anni</b> per attraversare questa zona. La luce che ti scalda oggi è nata nel nucleo quando sulla Terra c\'erano i mammut!</p>',
          shapes: [ backHemi(1.45, '#fcd34d', 0.02) ] },
        { id: 'fotoni', name: 'Luce che rimbalza (fotoni)', label: 'Fotoni', color: '#ffffff', explode: [0, 0, 0.1], chip: true, noLabel: true,
          info: '<p>Piccoli "pacchetti" di luce, i <b>fotoni</b>, partono dal nucleo e vengono assorbiti e rilanciati miliardi di volte prima di uscire.</p>',
          shapes: photons },
        { id: 'nucleo', name: 'Nucleo', color: '#fffbeb', explode: [0, 0, 0.1],
          info: '<p>Il centro del Sole, a circa <b>15 milioni di gradi</b>. Qui l\'idrogeno si trasforma in elio con la <b>fusione nucleare</b>: ogni lampo è energia che nasce.</p>',
          more: '<p>Ogni secondo il Sole trasforma circa 600 milioni di tonnellate di idrogeno in elio e "perde" 4 milioni di tonnellate di massa, che diventano energia (E = mc²). Ha carburante per altri <b>5 miliardi di anni</b>.</p>',
          shapes: [ backHemi(0.55, '#fffbeb', 0.04) ].concat(flashes) },
        { id: 'protuberanze', name: 'Protuberanze', color: '#f97316', explode: [0, 0.4, 0],
          info: '<p>Enormi archi di gas incandescente che si alzano dalla superficie, seguendo le linee del <b>campo magnetico</b>. Dentro un arco ci starebbero decine di Terre!</p>',
          shapes: [ prom(0, 0, 1.1, 0), prom(-35, 90, 0.8, 0.3), prom(30, -90, 0.9, 0.6), prom(-60, 20, 0.7, 0.45) ] },
        { id: 'brillamento', name: 'Brillamento (flare)', label: 'Brillamento', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>Un\'esplosione improvvisa sulla superficie, vicino alle macchie: in pochi minuti libera tanta energia quanto milioni di vulcani.</p>',
          more: '<p>I brillamenti e le grandi "bolle" di gas espulse (CME) possono disturbare satelliti, GPS e reti elettriche sulla Terra, e accendere aurore bellissime.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.2, n: 14, m: 20, color: '#fef9c3', alpha: 0.9, anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.1, to: 0.3, ramp: 0.3 }, { type: 'scale', from: 0.4, to: 1.4, wave: 'window', win: [0.1, 0.3] } ] } ]) ] },
        { id: 'corona', name: 'Corona', color: '#fde68a', alpha: 0.12, explode: [0, 0, 0],
          info: '<p>Un\'atmosfera sottilissima che circonda il Sole ed è più calda della superficie: oltre <b>1 milione di gradi</b>. Si vede a occhio nudo solo durante le <b>eclissi totali</b>.</p>',
          more: '<p>Perché la corona sia così calda è ancora uno dei grandi misteri della fisica solare. La sonda <b>Parker Solar Probe</b> l\'ha attraversata per studiarla.</p>',
          shapes: [ { t: 'sphere', r: 2.45, n: 18, m: 30, anim: { type: 'scale', from: 1, to: 1.05, rate: 0.4 } }, { t: 'sphere', r: 2.9, n: 18, m: 30, alpha: 0.06, anim: { type: 'scale', from: 1.04, to: 0.98, rate: 0.4 } } ] },
        { id: 'vento-solare', name: 'Vento solare', label: 'Vento solare', color: '#fde68a', explode: [0, 0, 0],
          info: '<p>Dal Sole parte continuamente un "vento" di particelle velocissime (400 km al secondo!). Il campo magnetico della Terra ci fa da scudo.</p>',
          more: '<p>Quando le particelle del vento solare entrano nell\'atmosfera vicino ai poli, fanno brillare l\'aria di verde e viola: sono le <b>aurore polari</b>.</p>',
          shapes: wind },
        { id: 'terra', name: 'La Terra (in scala)', label: 'Terra (in scala)', color: '#3b82f6', pos: [3.3, 1.5, 0.4], explode: [0.5, 0.3, 0],
          info: '<p>Questo puntino è la <b>Terra</b>, disegnata alla stessa scala del Sole. Nel Sole ci starebbero più di <b>un milione</b> di Terre!</p>',
          more: '<p>La distanza però non è in scala: la Terra dista dal Sole circa <b>150 milioni di km</b>. A questa scala sarebbe a più di 200 metri dallo schermo!</p>',
          shapes: [ { t: 'sphere', r: 0.04, n: 8, m: 12 }, { t: 'torus', R: 0.12, r: 0.008, n: 20, m: 4, rot: [90, 0, 0], color: '#93c5fd', alpha: 0.7 } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'La nostra stella', explode: 0,
        html: '<p>Il Sole è una <b>stella</b> come quelle che vedi di notte, ma molto più vicina: è lontano 150 milioni di km e la sua luce arriva fino a noi in circa <b>8 minuti</b>.</p><p class="tip">⚠️ Non guardare mai il Sole direttamente, nemmeno con gli occhiali da sole: rovina gli occhi.</p>' },
      { icon: '🍊', title: 'Apriamolo come un\'arancia', explode: 1, focus: ['zona-convettiva', 'zona-radiativa', 'nucleo', 'fotosfera'],
        html: '<p>Il Sole è fatto a <b>strati</b>, come una cipolla: al centro il <b>nucleo</b>, poi la <b>zona radiativa</b>, la <b>zona convettiva</b> e infine la superficie luminosa, la <b>fotosfera</b>.</p><p>È tutto gas, niente di solido: soprattutto <b>idrogeno</b> (3/4) ed <b>elio</b>.</p>' },
      { icon: '⚛️', title: 'Nel nucleo nasce l\'energia', explode: 1, focus: ['nucleo'], zoom: 2.2, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Nel nucleo ci sono <b>15 milioni di gradi</b>. L\'idrogeno si fonde e diventa elio: è la <b>fusione nucleare</b>. Ogni lampo libera energia che diventerà luce e calore.</p>' },
      { icon: '🔦', title: 'La luce rimbalza per migliaia di anni', explode: 1, focus: ['zona-radiativa', 'fotoni', 'nucleo'], zoom: 1.5, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Nella <b>zona radiativa</b> l\'energia viaggia come luce, ma il gas è così fitto che i fotoni rimbalzano a zig-zag: per uscire impiegano <b>migliaia di anni</b>.</p>' },
      { icon: '♨️', title: 'Il Sole ribolle', explode: 1, focus: ['zona-convettiva', 'celle'], zoom: 1.3, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Nella <b>zona convettiva</b> il gas si muove in grandi giri: sale caldo, si raffredda in superficie e riscende, come l\'acqua che bolle in pentola. Queste correnti si chiamano <b>moti convettivi</b>.</p>' },
      { icon: '🌑', title: 'Macchie, archi ed esplosioni', explode: 0, focus: ['fotosfera', 'macchie', 'protuberanze', 'brillamento', 'celle', 'fotoni'],
        html: '<p>Sulla superficie compaiono <b>macchie</b> scure (zone più fredde), enormi archi di gas detti <b>protuberanze</b> e improvvisi lampi, i <b>brillamenti</b>. Sono tutti causati dal <b>magnetismo</b> del Sole.</p>' },
      { icon: '🌬️', title: 'Corona e vento solare', explode: 0, focus: ['corona', 'vento-solare', 'terra', 'fotosfera', 'celle', 'fotoni'], view: { rx: 0.25, ry: -0.7 },
        html: '<p>Intorno al Sole c\'è la <b>corona</b>, caldissima ma sottilissima. Da lì parte il <b>vento solare</b>, un flusso di particelle che arriva fino alla Terra e accende le <b>aurore polari</b>.</p><p class="tip">🌍 Guarda il puntino blu: è la Terra nella stessa scala del Sole!</p>' }
    ],
    facts: [
      { icon: '⚖️', title: 'Il gigante del Sistema solare', html: 'Il Sole contiene il <b>99,8 %</b> di tutta la massa del Sistema solare. Tutti i pianeti insieme sono "le briciole".' },
      { icon: '🕗', title: 'Luce di 8 minuti fa', html: 'Quando guardi la luce del Sole, vedi il Sole com\'era <b>8 minuti e 20 secondi</b> fa: è il tempo che la luce impiega ad arrivare.' },
      { icon: '🌗', title: 'Le eclissi', html: 'Durante un\'eclissi totale la Luna copre esattamente il Sole: il Sole è 400 volte più grande della Luna, ma anche 400 volte più lontano!' },
      { icon: '🌱', title: 'Il motore della vita', html: 'Le piante usano la luce del Sole per fabbricare il loro cibo (fotosintesi). Anche il cibo che mangi, alla fine, è energia del Sole.' },
      { icon: '🔄', title: 'Gira anche lui', html: 'Il Sole ruota su se stesso, ma non tutto insieme: all\'equatore fa un giro in circa <b>25 giorni</b>, vicino ai poli in più di 30.' }
    ],
    quiz: [
      { type: 'mc', q: 'Che cosa è il Sole?', options: ['Un pianeta', 'Una stella', 'Una cometa', 'Un satellite'], answer: 1, explain: 'Il Sole è una stella: produce luce e calore con la fusione nucleare.' },
      { type: 'mc', q: 'In quale parte del Sole avviene la fusione nucleare?', options: ['Nella corona', 'Nella fotosfera', 'Nel nucleo', 'Nelle macchie'], answer: 2, explain: 'Solo nel nucleo ci sono temperatura e pressione abbastanza alte.' },
      { type: 'num', q: 'Quanti minuti (circa) impiega la luce del Sole ad arrivare sulla Terra?', answer: 8, tol: 1, unit: 'min', explain: 'Circa 8 minuti e 20 secondi.' },
      { type: 'tf', q: 'Le macchie solari sono zone più calde del resto della superficie.', answer: false, explain: 'Sono più fredde (circa 3500 °C contro 5500 °C), per questo sembrano scure.' },
      { type: 'order', q: 'Metti in ordine gli strati del Sole, dal centro verso fuori', items: ['Nucleo', 'Zona radiativa', 'Zona convettiva', 'Fotosfera', 'Corona'], explain: 'Dal nucleo, dove nasce l\'energia, fino alla corona, l\'atmosfera esterna.' },
      { type: 'mc', q: 'Che cosa provoca le aurore polari sulla Terra?', options: ['La Luna', 'Il vento solare', 'I vulcani', 'Le nuvole'], answer: 1, explain: 'Le particelle del vento solare fanno brillare l\'aria vicino ai poli.' }
    ]
  });
})();
