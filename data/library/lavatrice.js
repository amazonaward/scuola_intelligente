/* La lavatrice a carica frontale. Davanti = +z, alto = +y; il cestello gira intorno all'asse z (centro a y = 0.82).
   Un programma (cycle 1): 0–0.12 carico acqua, 0.12–0.5 lavaggio, 0.5–0.62 scarico, 0.62–1 centrifuga. */
(function () {
  const CY = 0.82, TAU = Math.PI * 2;
  const circle = (r, n, cx, cy, a0) => Array.from({ length: n }, (_, i) => { const a = (a0 || 0) + (i / n) * TAU; return [(cx || 0) + r * Math.cos(a), (cy || 0) + r * Math.sin(a)]; });
  const ring = (o, i) => o.concat([o[0], i[0]], i.slice(1).reverse(), [i[0]]);
  /* pannello frontale con il foro dell'oblò */
  const front = ring([[0.6, 0], [0.6, 1.5], [-0.6, 1.5], [-0.6, 0]], circle(0.36, 32, 0, CY, -Math.PI / 2 + 0.001));
  /* acqua: segmento circolare sotto una corda (sezione della vasca) */
  const seg = (() => { const pts = [], r = 0.46, h = 0.3, a = Math.acos((r - h) / r); for (let i = 0; i <= 16; i++) { const t = -Math.PI / 2 - a + (i / 16) * 2 * a; pts.push([r * Math.cos(t), r * Math.sin(t) + r]); } return pts; })();
  const holes = [];
  for (let k = 0; k < 12; k++) for (let j = 0; j < 3; j++) { const a = (k / 12) * 360 + j * 10; holes.push({ t: 'box', s: [0.035, 0.008, 0.035], pos: [0.442 * Math.cos(a * Math.PI / 180), 0.442 * Math.sin(a * Math.PI / 180), -0.24 + j * 0.24], rot: [0, 0, a - 90], color: '#475569' }); }
  const paddle = (a) => ({ t: 'group', rot: [0, 0, a], shapes: [{ t: 'extrude', d: 0.62, pts: [[-0.06, 0.44], [0.06, 0.44], [0.02, 0.35], [-0.02, 0.35]], color: '#cbd5e1' }] });
  const cloth = (c, x, y, sx) => ({ t: 'sphere', r: 1, n: 8, m: 12, pos: [x, y, 0], scale: sx, color: c });
  const spring = (x) => ({ t: 'pipe', r: 0.012, n: 5, caps: false, pts: Array.from({ length: 34 }, (_, i) => [x + 0.04 * Math.cos(i * 0.9), 1.42 - i * 0.008, 0.04 * Math.sin(i * 0.9)]) });
  const W = (from, to) => ({ type: 'blink', fade: true, wave: 'window', from, to, ramp: 0.15 });
  const IN = [[0.4, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.32, 1.52, 0.42], [-0.32, 1.32, 0.42], [-0.15, 1.25, 0.3], [0, 0.95, 0.2], [0, 0.5, 0.1]];
  const OUT = [[0, 0.38, 0.1], [-0.2, 0.22, 0.25], [-0.35, 0.15, 0.36], [-0.45, 0.2, 0.0], [-0.45, 0.5, -0.5], [-0.45, 0.9, -0.72]];
  const drops = (P, n, rate, win, color) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.032, n: 5, m: 8, pos: P[0], color: color || '#38bdf8', anim: [{ type: 'path', pts: P, wave: 'saw', rate, phase: k / n }, W(win[0], win[1])] }));

  LIBRARY({
    id: 'lavatrice',
    title: 'La lavatrice',
    intro: 'La lavatrice lava i vestiti con <b>acqua, detersivo, calore e movimento</b>. Un motore elettrico fa girare il cestello: piano per sbattere i panni nell\'acqua, velocissimo per strizzarli. Guarda un programma completo!',
    model: {
      rx: 0.22, ry: -0.6, speed: 0.13, height: 470,
      phases: [
        { from: 0, to: 0.12, label: '1 · Carico acqua', color: '#0284c7' },
        { from: 0.12, to: 0.5, label: '2 · Lavaggio', color: '#16a34a' },
        { from: 0.5, to: 0.62, label: '3 · Scarico', color: '#6b7280' },
        { from: 0.62, to: 1, label: '4 · Centrifuga', color: '#ea580c' }
      ],
      parts: [
        { id: 'mobile', name: 'Mobile', color: '#f8fafc', alpha: 0.26, explode: [0, 0, 0],
          info: '<p>È la scatola di lamiera bianca che contiene tutto. Sotto ha quattro piedini regolabili: la lavatrice deve stare <b>ben in bolla</b>, se no in centrifuga "cammina"!</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: front, pos: [0, 0, 0.6] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [-0.6, 0.85, 0] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [0.6, 0.85, 0] },
            { t: 'box', s: [1.2, 1.7, 0.03], pos: [0, 0.85, -0.6] }, { t: 'box', s: [1.24, 0.04, 1.24], pos: [0, 1.72, 0], color: '#e2e8f0' },
            ...[[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]].map(([x, z]) => ({ t: 'cyl', r: 0.05, h: 0.06, n: 12, pos: [x, -0.03, z], color: '#334155', alpha: 1 })) ] },
        { id: 'pannello', name: 'Pannello dei comandi', label: 'Comandi', color: '#e2e8f0', pos: [0, 1.61, 0.6], explode: [0, 0.35, 0.4],
          info: '<p>Qui scegli il <b>programma</b>: temperatura, giri della centrifuga, durata. Dietro c\'è una scheda elettronica che comanda tutti i pezzi al momento giusto.</p>',
          more: '<p>La scheda è un piccolo computer (microcontrollore) che segue il programma passo passo: apre l\'elettrovalvola, misura il livello dell\'acqua con un <b>pressostato</b>, accende la resistenza fino alla temperatura giusta e regola la velocità del motore.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.22, 0.05] }, { t: 'cyl', r: 0.08, h: 0.05, n: 24, rot: [90, 0, 0], pos: [0.2, 0, 0.04], color: '#94a3b8' },
            { t: 'box', s: [0.02, 0.06, 0.01], pos: [0.2, 0.04, 0.07], color: '#1f2937', decal: 1 },
            { t: 'box', s: [0.26, 0.1, 0.01], pos: [0.45, 0, 0.03], color: '#0f172a', decal: 1 },
            { t: 'box', s: [0.12, 0.04, 0.01], pos: [0.45, 0, 0.036], color: '#22c55e', decal: 2, anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'cassetto', name: 'Cassetto del detersivo', label: 'Detersivo', color: '#f1f5f9', pos: [-0.32, 1.5, 0.45], explode: [0, 0.2, 0.75],
          info: '<p>Qui metti il <b>detersivo</b> e l\'ammorbidente. L\'acqua che entra passa dal cassetto e se li porta via, dentro la vasca.</p>',
          more: '<p>Il detersivo contiene <b>tensioattivi</b>: molecole con una "testa" che ama l\'acqua e una "coda" che ama il grasso. Le code si attaccano allo sporco unto e le teste lo trascinano nell\'acqua.</p>',
          shapes: [ { t: 'box', s: [0.4, 0.14, 0.4] }, { t: 'box', s: [0.42, 0.16, 0.03], pos: [0, 0, 0.21], color: '#e2e8f0' }, { t: 'box', s: [0.12, 0.08, 0.3], pos: [-0.1, 0.05, 0], color: '#60a5fa' } ] },
        { id: 'elettrovalvola', name: 'Elettrovalvola e tubo di carico', label: 'Elettrovalvola', color: '#64748b', explode: [0.3, 0.4, -0.4],
          info: '<p>È un rubinetto comandato dall\'elettricità: quando la scheda lo dice, si apre e fa entrare l\'acqua dal tubo collegato al rubinetto di casa.</p>',
          more: '<p>Dentro c\'è un piccolo <b>elettromagnete</b>: quando passa corrente tira su un pistoncino di ferro e l\'acqua può passare. Senza corrente una molla lo richiude.</p>',
          shapes: [ { t: 'box', s: [0.14, 0.12, 0.12], pos: [0.4, 1.58, -0.5], color: '#1f2937' }, { t: 'cyl', r: 0.03, h: 0.25, n: 10, pos: [0.4, 1.58, -0.68], rot: [90, 0, 0], color: '#94a3b8' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.4, 1.58, -0.8], [0.4, 1.58, -0.95], [0.55, 1.3, -1.0], [0.6, 0.9, -1.0]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.33, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.3, 1.58, 0.3]], color: '#cbd5e1' } ] },
        { id: 'vasca', name: 'Vasca', color: '#94a3b8', alpha: 0.3, pos: [0, CY, 0], explode: [0, 0, -0.55],
          info: '<p>È il grande contenitore fermo che tiene l\'acqua. Dentro gira il cestello. Davanti ha una guarnizione di gomma (il soffietto) che chiude contro l\'oblò.</p>',
          shapes: [ { t: 'tube', r: 0.5, ri: 0.47, h: 0.9, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.5, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.45] },
            { t: 'tube', r: 0.5, ri: 0.36, h: 0.12, n: 36, rot: [90, 0, 0], pos: [0, 0, 0.48], color: '#334155', alpha: 0.7 } ] },
        { id: 'cestello', name: 'Cestello', color: '#d1d5db', pos: [0, CY, 0], explode: [0, 0, 0.9], anim: { type: 'spin', axis: 'z', rate: 3 },
          info: '<p>È il "barile" d\'acciaio bucherellato dove metti i panni. Girando li solleva con le sue <b>alette</b> e li lascia cadere nell\'acqua: sbattendo, lo sporco si stacca.</p>',
          more: '<p>I buchi fanno passare acqua e detersivo. In centrifuga il cestello arriva a <b>1000–1400 giri al minuto</b>: i panni vengono schiacciati contro la parete e l\'acqua schizza fuori dai buchi, come quando fai girare un ombrello bagnato.</p>',
          shapes: [ { t: 'tube', r: 0.45, ri: 0.43, h: 0.72, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.45, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.36], color: '#9ca3af' },
            { t: 'torus', R: 0.42, r: 0.025, n: 36, m: 6, rot: [90, 0, 0], pos: [0, 0, 0.36] } ].concat(holes, [0, 120, 240].map(paddle)) },
        { id: 'panni', name: 'Panni', color: '#f472b6', explode: [0, 0, 0.9],
          info: '<p>Nel <b>lavaggio</b> i panni vengono sollevati e lasciati ricadere nell\'acqua; in <b>centrifuga</b> restano schiacciati contro la parete del cestello che gira velocissimo.</p>',
          shapes: [ { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 3 }, W(0.04, 0.58)], shapes: [
              cloth('#f472b6', -0.2, -0.25, [0.16, 0.1, 0.22]), cloth('#60a5fa', 0.15, -0.28, [0.17, 0.09, 0.2]), cloth('#facc15', 0.25, 0.0, [0.1, 0.15, 0.2]), cloth('#4ade80', -0.05, -0.12, [0.14, 0.1, 0.18]) ] },
            { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 18 }, W(0.62, 1)], shapes: [
              cloth('#f472b6', 0, -0.37, [0.22, 0.06, 0.22]), cloth('#60a5fa', 0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#facc15', -0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#4ade80', 0, 0.37, [0.2, 0.06, 0.2]) ] } ] },
        { id: 'acqua', name: 'Acqua e detersivo', label: 'Acqua', color: '#38bdf8', alpha: 0.55, pos: [0, CY - 0.46, 0], explode: [0, 0, -0.55],
          info: '<p>L\'acqua scioglie il detersivo e porta via lo sporco. Le lavatrici moderne usano pochissima acqua: circa <b>40–50 litri</b> per un intero lavaggio.</p>',
          shapes: [ { t: 'group', anim: { type: 'scale', axis: 'y', from: 0.03, to: 1, wave: 'window', win: [0, 0.62], ramp: 0.2 }, shapes: [ { t: 'extrude', d: 0.86, pts: seg } ] },
            ...drops(IN.map(([x, y, z]) => [x, y - CY + 0.46, z]), 8, 3, [0, 0.13]), ...drops(OUT.map(([x, y, z]) => [x, y - CY + 0.46, z]), 7, 3, [0.5, 0.63], '#64748b') ] },
        { id: 'resistenza', name: 'Resistenza (scalda l\'acqua)', label: 'Resistenza', color: '#9ca3af', pos: [0, CY - 0.4, 0], explode: [0, -0.35, -0.55],
          info: '<p>È un tubo di metallo sul fondo della vasca. Quando ci passa la corrente si <b>scalda</b>, come la piastra di un fornello, e porta l\'acqua alla temperatura scelta (30, 40, 60 °C…).</p>',
          more: '<p>È l\'<b>effetto Joule</b>: una corrente che attraversa un filo che "fa resistenza" lo scalda. Scaldare l\'acqua è ciò che consuma più energia: lavare a 30 °C invece che a 60 °C fa risparmiare più della metà dell\'elettricità.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[-0.12, 0, 0.35], [-0.12, 0, -0.3], [0, 0, -0.38], [0.12, 0, -0.3], [0.12, 0, 0.35]],
            anim: { type: 'blink', color: '#ef4444', wave: 'window', from: 0.15, to: 0.45, ramp: 0.25 } } ] },
        { id: 'motore', name: 'Motore elettrico', label: 'Motore', color: '#b45309', pos: [0.28, 0.2, -0.3], explode: [0.5, -0.35, 0],
          info: '<p>È il motore che fa girare il cestello. Funziona con calamite e bobine di rame: la corrente lo fa ruotare, piano per lavare e velocissimo per la centrifuga.</p>',
          more: '<p>Le lavatrici moderne hanno spesso un motore <b>"inverter"</b> senza spazzole, controllato dall\'elettronica: è silenzioso, consuma meno e può essere collegato direttamente al cestello, senza cinghia (<i>direct drive</i>).</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.36, n: 24, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'tube', r: 0.135, ri: 0.1, h: 0.2, n: 24, rot: [90, 0, 0], color: '#b45309' },
            { t: 'group', pos: [0, 0, -0.25], anim: { type: 'spin', axis: 'z', rate: 3 * 0.42 / 0.06 / 4 }, shapes: [ { t: 'cyl', r: 0.06, h: 0.06, n: 16, rot: [90, 0, 0], color: '#475569' }, { t: 'box', s: [0.1, 0.015, 0.065], color: '#94a3b8' } ] } ] },
        { id: 'cinghia', name: 'Puleggia e cinghia', label: 'Cinghia', color: '#1f2937', explode: [0, 0, -0.75],
          info: '<p>Il motore fa girare una <b>ruota piccola</b> che, con una cinghia di gomma, fa girare la <b>ruota grande</b> (puleggia) attaccata al cestello.</p>',
          more: '<p>Una ruota piccola che trascina una ruota grande: la grande gira più <b>piano</b> ma con più <b>forza</b>. È lo stesso trucco dei rapporti della bicicletta.</p>',
          shapes: [ { t: 'group', pos: [0, CY, -0.55], anim: { type: 'spin', axis: 'z', rate: 3 / 4 }, shapes: [
              { t: 'torus', R: 0.4, r: 0.03, n: 36, m: 6, rot: [90, 0, 0], color: '#6b7280' }, { t: 'cyl', r: 0.07, h: 0.08, n: 16, rot: [90, 0, 0], color: '#6b7280' },
              ...[0, 120, 240].map((a) => ({ t: 'box', s: [0.36, 0.05, 0.03], pos: [0.2 * Math.cos(a * Math.PI / 180), 0.2 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#6b7280' })) ] },
            { t: 'pipe', r: 0.018, n: 5, curve: true, pts: [[-0.05, CY - 0.43, -0.55], [0.18, 0.18, -0.55], [0.28, 0.13, -0.55], [0.35, 0.2, -0.55], [0.38, CY - 0.1, -0.55], [0.3, CY + 0.3, -0.55], [0, CY + 0.44, -0.55], [-0.3, CY + 0.3, -0.55], [-0.43, CY, -0.55], [-0.3, CY - 0.3, -0.55], [-0.05, CY - 0.43, -0.55]] } ] },
        { id: 'sospensioni', name: 'Molle e ammortizzatori', label: 'Ammortizzatori', color: '#facc15', explode: [0, 0, 0.35],
          info: '<p>La vasca non è attaccata rigida al mobile: è appesa a due <b>molle</b> e appoggiata su due <b>ammortizzatori</b>. Così le vibrazioni della centrifuga non scuotono tutta la lavatrice.</p>',
          more: '<p>Gli ammortizzatori trasformano il movimento in calore per attrito, smorzando i colpi: sono simili a quelli delle automobili.</p>',
          shapes: [ spring(-0.38), spring(0.38), { t: 'pipe', r: 0.035, n: 10, pts: [[-0.3, CY - 0.45, 0.1], [-0.45, 0.06, 0.1]], color: '#475569' }, { t: 'pipe', r: 0.022, n: 8, pts: [[-0.35, CY - 0.6, 0.1], [-0.3, CY - 0.45, 0.1]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.035, n: 10, pts: [[0.3, CY - 0.45, 0.1], [0.45, 0.06, 0.1]], color: '#475569' } ] },
        { id: 'contrappeso', name: 'Contrappeso', color: '#a8a29e', pos: [0, 1.38, 0.38], explode: [0, 0.45, 0.2],
          info: '<p>È un grosso blocco di <b>cemento</b> attaccato alla vasca. Sembra strano, ma il peso aiuta: tiene ferma la vasca quando il cestello gira velocissimo con i panni tutti da una parte.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.14, 0.18] } ] },
        { id: 'pompa', name: 'Pompa di scarico', label: 'Pompa', color: '#1e293b', pos: [-0.35, 0.15, 0.36], explode: [-0.4, -0.3, 0.4],
          info: '<p>Alla fine del lavaggio la pompa aspira l\'acqua sporca dal fondo della vasca e la spinge fuori, nello scarico di casa. Ha un <b>filtro</b> che ferma monetine e bottoni.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 0.16, n: 20, rot: [90, 0, 0] }, { t: 'group', anim: { type: 'spin', axis: 'z', rate: 20 }, shapes: [0, 60, 120].map((a) => ({ t: 'box', s: [0.12, 0.015, 0.03], pos: [0, 0, 0.09], rot: [0, 0, a], color: '#f59e0b' })) },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.05, 0.05, -0.05], [0.25, 0.23, -0.26]], color: '#475569' },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[-0.08, 0, 0], [-0.1, 0.05, -0.36], [-0.1, 0.35, -0.86], [-0.1, 0.75, -1.08], [-0.1, 0.95, -1.1]], color: '#94a3b8' } ] },
        { id: 'oblo', name: 'Oblò (sportello)', label: 'Oblò', color: '#cbd5e1', pos: [0, CY, 0.66], explode: [-1.0, 0, 0.9],
          info: '<p>Lo sportello rotondo con il vetro spesso: lascia vedere i panni e chiude bene la lavatrice. Durante il lavaggio si <b>blocca</b> da solo, così non si può aprire con l\'acqua dentro.</p>',
          shapes: [ { t: 'torus', R: 0.37, r: 0.06, n: 36, m: 8, rot: [90, 0, 0] }, { t: 'sphere', r: 0.34, n: 8, m: 28, hemi: true, rot: [-90, 0, 0], scale: [1, 0.35, 1], pos: [0, 0, -0.02], color: '#bae6fd', alpha: 0.3 },
            { t: 'box', s: [0.1, 0.2, 0.06], pos: [-0.42, 0, 0], color: '#94a3b8' }, { t: 'box', s: [0.06, 0.16, 0.08], pos: [0.42, 0, 0.02], color: '#64748b' } ] }
      ]
    },
    steps: [
      { icon: '🧺', title: 'Una macchina per sbattere i panni', explode: 0,
        html: '<p>Per lavare servono quattro cose: <b>acqua</b>, <b>detersivo</b>, <b>calore</b> e <b>movimento</b>. Una volta si lavava a mano, strofinando i panni sul lavatoio; la lavatrice lo fa al posto nostro.</p><p>Il cuore è il <b>cestello</b> bucherellato che gira dentro la <b>vasca</b>, mosso da un <b>motore elettrico</b>.</p>' },
      { icon: '🚰', title: '1 · Entra l\'acqua', loop: [0, 0.14], focus: ['elettrovalvola', 'cassetto', 'acqua', 'vasca', 'pannello'], explode: 0.2, view: { rx: 0.35, ry: -0.9 },
        html: '<p>La scheda elettronica apre l\'<b>elettrovalvola</b>: l\'acqua del rubinetto di casa entra, passa nel <b>cassetto</b> e trascina il detersivo dentro la vasca.</p><p>Un sensore di pressione (il pressostato) "sente" quando l\'acqua è abbastanza e chiude la valvola.</p>' },
      { icon: '🔥', title: '2 · Scaldare l\'acqua', loop: [0.14, 0.45], focus: ['resistenza', 'acqua', 'vasca'], explode: 0.3, view: { rx: 0.1, ry: -0.3 },
        html: '<p>Sul fondo della vasca c\'è la <b>resistenza</b>: un tubo che si scalda quando ci passa la corrente, come la piastra di un fornello. Scalda l\'acqua a 30, 40 o 60 °C.</p><p class="tip">🌍 Scaldare l\'acqua è la cosa che consuma di più: lavare a 30 °C fa risparmiare tanta energia.</p>' },
      { icon: '🔄', title: '2 · Lavaggio: su e giù nell\'acqua', loop: [0.14, 0.5], focus: ['cestello', 'panni', 'acqua'], explode: 0, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Il cestello gira piano, ora da una parte ora dall\'altra. Le <b>alette</b> sollevano i panni e li lasciano ricadere nell\'acqua saponata: sbattendo e strofinando tra loro, lo sporco si stacca.</p>' },
      { icon: '⚙️', title: 'Motore, cinghia e puleggia', focus: ['motore', 'cinghia', 'cestello'], explode: 0.45, view: { rx: 0.2, ry: -2.5 },
        html: '<p>Il <b>motore</b> fa girare una ruota piccola; la <b>cinghia</b> trascina la grande <b>puleggia</b> attaccata dietro al cestello. La ruota grande gira più piano ma con più forza.</p>' },
      { icon: '🚿', title: '3 · Scarico dell\'acqua sporca', loop: [0.48, 0.64], focus: ['pompa', 'acqua', 'vasca'], explode: 0.2, view: { rx: 0.25, ry: -1.1 },
        html: '<p>La <b>pompa di scarico</b> aspira l\'acqua sporca dal fondo e la spinge fuori dal tubo, nello scarico di casa. Poi entra acqua pulita per il <b>risciacquo</b>, che toglie il detersivo.</p>' },
      { icon: '🌀', title: '4 · Centrifuga: strizzare girando', loop: [0.64, 1], focus: ['cestello', 'panni', 'sospensioni', 'contrappeso'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>Il cestello gira velocissimo, fino a <b>1400 giri al minuto</b>. I panni vengono schiacciati contro la parete e l\'acqua schizza fuori dai buchi.</p><p><b>Molle</b>, <b>ammortizzatori</b> e il pesante <b>contrappeso</b> di cemento evitano che la lavatrice salti per la stanza!</p><p class="tip">☂️ Fai girare un ombrello bagnato: le gocce volano via. È la stessa cosa!</p>' }
    ],
    facts: [
      { icon: '🪨', title: 'Il contrappeso di cemento', html: 'Dentro quasi ogni lavatrice c\'è un blocco di <b>cemento</b> di 20–25 kg: serve a tenerla ferma durante la centrifuga.' },
      { icon: '🧼', title: 'Lavare a 30 gradi', html: 'Grazie ai detersivi moderni, molti capi si lavano bene anche a 30 °C, consumando meno della metà dell\'energia di un lavaggio a 60 °C.' },
      { icon: '🕰️', title: 'Prima della lavatrice', html: 'Fino agli anni \'60 in Italia molte famiglie lavavano a mano, al <b>lavatoio</b> del paese o al fiume. La lavatrice ha liberato tantissimo tempo, soprattutto alle donne.' },
      { icon: '🐟', title: 'Microplastiche', html: 'I tessuti sintetici (come il pile) perdono minuscoli fili di plastica a ogni lavaggio, che possono arrivare fino al mare. Esistono filtri e sacchetti speciali per trattenerli.' }
    ],
    quiz: [
      { type: 'order', q: 'Metti in ordine le fasi di un lavaggio', items: ['Carico dell\'acqua', 'Lavaggio', 'Scarico', 'Centrifuga'], explain: 'Entra l\'acqua con il detersivo, si lava, si scarica l\'acqua sporca e infine si strizza con la centrifuga.' },
      { type: 'mc', q: 'Quale pezzo scalda l\'acqua?', options: ['Il motore', 'La resistenza', 'La pompa', 'Il contrappeso'], answer: 1, explain: 'La resistenza si scalda quando la attraversa la corrente (effetto Joule).' },
      { type: 'mc', q: 'Perché durante la centrifuga l\'acqua esce dai panni?', options: ['Perché evapora', 'Perché girando velocissimo i panni sono schiacciati alla parete e l\'acqua vola via dai buchi', 'Perché la pompa la succhia dai panni', 'Perché il detersivo la scioglie'], answer: 1, explain: 'Girando forte, tutto tende ad allontanarsi dal centro: l\'acqua passa dai buchi del cestello.' },
      { type: 'tf', q: 'Il contrappeso di cemento serve a rendere la lavatrice più stabile.', answer: true, explain: 'Il peso tiene ferma la vasca e riduce le vibrazioni durante la centrifuga.' },
      { type: 'mc', q: 'Che cosa fa la pompa di scarico?', options: ['Fa entrare l\'acqua pulita', 'Porta fuori l\'acqua sporca', 'Fa girare il cestello', 'Apre l\'oblò'], answer: 1, explain: 'Aspira l\'acqua dal fondo della vasca e la spinge nello scarico di casa.' },
      { type: 'mc', q: 'A cosa servono le alette dentro al cestello?', options: ['A decorare', 'A sollevare i panni e lasciarli ricadere nell\'acqua', 'A tagliare i fili', 'A scaldare'], answer: 1, explain: 'Sollevano i panni che, ricadendo e sbattendo, si lavano meglio.' }
    ]
  });
})();
