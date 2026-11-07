/* Il pannello solare fotovoltaico: a sinistra il modulo su un cavalletto (strati che si separano con Esplodi),
   a destra una cella "ingrandita" per vedere come la luce mette in moto gli elettroni e accende una lampadina. */
(function () {
  const TILT = 30, PC = [0, 1.7, 0], D = Math.PI / 180;
  const N = [0, Math.cos(TILT * D), Math.sin(TILT * D)];               // normale del pannello
  const along = (k) => [0, N[1] * k, N[2] * k];
  const W = (x, y, z) => [x, PC[1] + y * Math.cos(TILT * D) - z * Math.sin(TILT * D), y * Math.sin(TILT * D) + z * Math.cos(TILT * D)];
  const P = (shapes) => [ { t: 'group', pos: PC, rot: [TILT, 0, 0], shapes } ];
  const CS = 0.33, NX = 6, NZ = 10, PW = NX * CS, PL = NZ * CS;
  const cells = [];
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [CS - 0.02, 0.012, CS - 0.02], pos: [-PW / 2 + CS * (i + 0.5), 0, -PL / 2 + CS * (j + 0.5)] });
  for (let i = 0; i < NX; i++) for (const o of [-0.08, 0.08]) cells.push({ t: 'box', s: [0.014, 0.004, PL - 0.04], pos: [-PW / 2 + CS * (i + 0.5) + o, 0.008, 0], color: '#e2e8f0', decal: 1 });
  for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [PW - 0.04, 0.003, 0.006], pos: [0, 0.008, -PL / 2 + CS * (j + 0.5)], color: '#64748b', decal: 1 });
  const SUN = [-3.4, 5.3, 1.6];
  const photonsPanel = [[-0.6, -1.0], [0.5, -0.3], [-0.2, 0.6], [0.7, 1.2], [-0.8, 0.2], [0.2, -1.4]].map(([x, z], k) => {
    const end = W(x, 0.03, z); return { t: 'sphere', r: 0.06, n: 6, m: 8, pos: SUN, color: '#fde047', anim: [ { type: 'path', pts: [SUN, end], wave: 'saw', rate: 0.6, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.1, rate: 0.6, phase: k / 6 } ] };
  });
  /* cella ingrandita */
  const ZX = 3.7, ZY = 0.9;                                           // base del blocco
  const TOPN = ZY + 0.95, JUN = ZY + 0.72;
  const CIRCUIT = [[ZX + 0.55, TOPN + 0.05, 0], [ZX + 0.55, TOPN + 0.5, 0], [ZX + 1.25, TOPN + 0.9, 0], [ZX + 1.45, TOPN + 0.9, 0], [ZX + 1.55, TOPN + 0.5, 0], [ZX + 1.55, ZY - 0.05, 0], [ZX + 0.85, ZY - 0.05, 0]];
  const electrons = [];
  for (let k = 0; k < 12; k++) {
    const x = ZX - 0.5 + (k % 4) * 0.3, z = -0.3 + (k % 3) * 0.3;
    const pts = [[x, JUN, z], [x, TOPN, z], [ZX + 0.55, TOPN + 0.05, z * 0.2]].concat(CIRCUIT.slice(1), [[ZX + 0.2, ZY - 0.05, 0], [x, ZY + 0.05, z], [x, JUN - 0.05, z]]);
    electrons.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#2563eb', anim: { type: 'path', pts, wave: 'saw', rate: 0.22, phase: k / 12 } });
  }
  const holes = Array.from({ length: 8 }, (_, k) => { const x = ZX - 0.6 + (k % 4) * 0.35, z = -0.35 + (k % 2) * 0.6; return { t: 'sphere', r: 0.05, n: 6, m: 8, pos: [x, JUN - 0.05, z], color: '#f87171', anim: [ { type: 'path', pts: [[x, JUN - 0.05, z], [x + 0.05, ZY + 0.08, z]], wave: 'saw', rate: 0.45, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.45, phase: k / 8 } ] }; });
  const photonsCell = Array.from({ length: 6 }, (_, k) => { const x = ZX - 0.6 + k * 0.24, z = -0.2 + (k % 3) * 0.2; return { t: 'sphere', r: 0.055, n: 6, m: 8, pos: [x - 0.6, TOPN + 1.4, z], color: '#fde047', anim: [ { type: 'path', pts: [[x - 0.6, TOPN + 1.4, z], [x, JUN, z]], wave: 'saw', rate: 0.7, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.92, ramp: 0.08, rate: 0.7, phase: k / 6 } ] }; });
  const cellOnPanel = W(-PW / 2 + CS * 5.5, 0.02, -PL / 2 + CS * 6.5);

  LIBRARY({
    id: 'pannello-solare',
    title: 'Il pannello solare',
    intro: 'Un pannello solare <b>fotovoltaico</b> trasforma la luce del Sole direttamente in <b>elettricità</b>, senza rumore, senza fumo e senza pezzi che si muovono. Il segreto sta in un materiale speciale: il <b>silicio</b>.',
    model: {
      rx: 0.32, ry: -0.35, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'sole', name: 'Sole', color: '#fbbf24', explode: [-0.6, 0.4, 0],
          info: '<p>Il Sole manda sulla Terra un\'enorme quantità di energia sotto forma di luce: in un\'ora ne arriva più di quanta l\'umanità ne usi in un anno intero!</p>',
          shapes: [ { t: 'sphere', r: 0.6, n: 16, m: 24, pos: SUN }, { t: 'sphere', r: 0.8, n: 14, m: 20, pos: SUN, color: '#fde68a', alpha: 0.3, anim: { type: 'scale', from: 1, to: 1.12, rate: 0.6 } } ]
            .concat(Array.from({ length: 10 }, (_, k) => ({ t: 'group', pos: SUN, rot: [0, 0, k * 36], shapes: [ { t: 'cone', r: 0.08, h: 0.35, n: 8, pos: [0, 0.95, 0], color: '#fcd34d', anim: { type: 'move', dir: [0, 1, 0], amp: 0.06, rate: 1, phase: k * 0.1 } } ] }))) },
        { id: 'luce', name: 'Luce del Sole (fotoni)', label: 'Fotoni', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>La luce è fatta di minuscoli "pacchetti" di energia chiamati <b>fotoni</b>. Quando un fotone colpisce una cella solare, può dare la sua energia a un elettrone.</p>',
          shapes: photonsPanel.concat(photonsCell) },
        { id: 'vetro', name: 'Vetro temprato', label: 'Vetro', color: '#e0f2fe', alpha: 0.3, explode: along(2.2),
          info: '<p>Uno strato di <b>vetro</b> molto resistente protegge le celle da pioggia, neve e grandine, lasciando passare quasi tutta la luce.</p>',
          more: '<p>Il vetro è trattato per <b>non riflettere</b> la luce (antiriflesso) ed è temprato: resiste a chicchi di grandine di 2,5 cm lanciati a 80 km/h.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.02, 0.03, PL + 0.02], pos: [0, 0.045, 0] } ]) },
        { id: 'eva', name: 'Strati di EVA (la "colla")', label: 'EVA', color: '#f8fafc', alpha: 0.22, explode: along(1.5),
          info: '<p>Due fogli di plastica trasparente avvolgono le celle come in un panino: le incollano al vetro e le proteggono dall\'umidità.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.012, PL], pos: [0, 0.022, 0] }, { t: 'box', s: [PW, 0.012, PL], pos: [0, -0.02, 0], color: '#e2e8f0' } ]) },
        { id: 'celle', name: 'Celle solari', label: 'Celle', color: '#1e3a8a', explode: along(0.8),
          info: '<p>Le <b>celle</b> sono quadratini sottilissimi di <b>silicio</b>, il materiale della sabbia. Ogni cella produce una piccola corrente; collegate insieme (qui 60) producono abbastanza energia per molti elettrodomestici.</p>',
          more: '<p>Ogni cella dà circa <b>0,5 volt</b>: collegandole in fila (in serie) le tensioni si sommano, come le pile di un telecomando. Le righe argentate sono i <b>contatti</b> che raccolgono la corrente.</p>',
          shapes: P(cells) },
        { id: 'retro', name: 'Foglio posteriore', label: 'Retro', color: '#f8fafc', explode: along(-0.5),
          info: '<p>Un foglio di plastica bianca chiude il pannello dietro: isola le parti elettriche e lo protegge da acqua e sole.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.015, PL], pos: [0, -0.035, 0] } ]) },
        { id: 'cornice', name: 'Cornice di alluminio', label: 'Cornice', color: '#cbd5e1', explode: along(0),
          info: '<p>Una cornice di <b>alluminio</b>, leggera e che non arrugginisce, rende il pannello rigido e permette di fissarlo alla struttura.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, PL / 2 + 0.04] }, { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, -PL / 2 - 0.04] },
            { t: 'box', s: [0.08, 0.1, PL], pos: [PW / 2 + 0.04, 0, 0] }, { t: 'box', s: [0.08, 0.1, PL], pos: [-PW / 2 - 0.04, 0, 0] },
            { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, PL / 2 + 0.07], color: '#e2e8f0' }, { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, -PL / 2 - 0.07], color: '#e2e8f0' } ]) },
        { id: 'scatola', name: 'Scatola di giunzione e cavi', label: 'Scatola di giunzione', color: '#1f2937', explode: along(-1.0),
          info: '<p>Dietro il pannello una scatoletta raccoglie la corrente di tutte le celle. Contiene i <b>diodi</b>, che evitano problemi se una parte del pannello è in ombra.</p>',
          shapes: P([ { t: 'box', s: [0.36, 0.08, 0.22], pos: [0, -0.09, -PL / 2 + 0.35] }, { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.12, -0.12, -PL / 2 + 0.35], [0.4, -0.3, -PL / 2 + 0.6], [0.6, -0.6, -0.3]], color: '#111827' },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[-0.12, -0.12, -PL / 2 + 0.35], [-0.4, -0.3, -PL / 2 + 0.6], [-0.5, -0.6, -0.3]], color: '#b91c1c' } ]) },
        { id: 'struttura', name: 'Struttura di sostegno', label: 'Struttura', color: '#94a3b8', explode: [0, -0.5, 0],
          info: '<p>Il cavalletto tiene il pannello <b>inclinato</b> verso il Sole. In Italia l\'inclinazione migliore è di circa 30°, rivolti verso <b>sud</b>.</p>',
          more: '<p>Alcuni impianti hanno "inseguitori": motori che girano i pannelli durante il giorno per seguire il Sole, come i girasoli, e producono fino al 30 % in più.</p>',
          shapes: [-0.75, 0.75].flatMap((x) => [ { t: 'pipe', r: 0.04, n: 8, pts: [W(x, -0.09, PL / 2 - 0.15), W(x, -0.09, -PL / 2 + 0.15)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, PL / 2 - 0.2)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, -PL / 2 + 0.3)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'pipe', r: 0.025, n: 6, pts: [[x, 0.05, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, PL / 2 - 0.2)[2]], color: '#78716c' }, { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, -PL / 2 + 0.3)[2]], color: '#78716c' } ]) },
        { id: 'zoom', name: 'Una cella al microscopio', label: 'Cella ingrandita', color: '#94a3b8', explode: [0, 0, 0], chip: true, noLabel: true,
          info: '<p>Ingrandiamo una sola cella e guardiamola "di taglio": è fatta di due strati di silicio diversi, uno sopra l\'altro.</p>',
          shapes: [ { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, TOPN, 0.5]], color: '#64748b', alpha: 0.5 }, { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, ZY, 0.5]], color: '#64748b', alpha: 0.5 },
            { t: 'box', s: [0.36, 0.03, 0.36], pos: cellOnPanel, rot: [TILT, 0, 0], color: '#facc15', alpha: 0.6 } ] },
        { id: 'silicio-n', name: 'Silicio di tipo N', label: 'Silicio N', color: '#60a5fa', explode: [0, 0.5, 0],
          info: '<p>Lo strato sottile in alto. Al silicio è stato aggiunto un pizzico di <b>fosforo</b>: così ha qualche elettrone (carica negativa, N) in più.</p>',
          more: '<p>Aggiungere piccolissime quantità di un altro elemento si chiama <b>drogaggio</b>. Tra lo strato N e lo strato P si forma la <b>giunzione</b>: una specie di "scivolo" elettrico che spinge gli elettroni sempre nella stessa direzione.</p>',
          shapes: [ { t: 'box', s: [1.6, 0.22, 1.0], pos: [ZX, ZY + 0.84, 0] }, { t: 'box', s: [1.6, 0.02, 1.0], pos: [ZX, TOPN - 0.0, 0], color: '#1e3a8a' } ] },
        { id: 'giunzione', name: 'Giunzione P-N', label: 'Giunzione', color: '#a855f7', explode: [0, 0.25, 0],
          info: '<p>Il confine tra i due strati. Qui c\'è un piccolo campo elettrico: quando la luce "libera" un elettrone, la giunzione lo spinge verso l\'alto e la <b>lacuna</b> (il posto vuoto) verso il basso.</p>',
          shapes: [ { t: 'box', s: [1.62, 0.05, 1.02], pos: [ZX, JUN, 0], anim: { type: 'blink', color: '#f0abfc', amount: 0.6, rate: 1.4 } } ] },
        { id: 'silicio-p', name: 'Silicio di tipo P', label: 'Silicio P', color: '#f9a8d4', explode: [0, -0.2, 0],
          info: '<p>Lo strato spesso in basso. Qui al silicio è stato aggiunto un pizzico di <b>boro</b>: mancano alcuni elettroni e restano dei "posti vuoti", le <b>lacune</b> (carica positiva, P).</p>',
          shapes: [ { t: 'box', s: [1.6, 0.68, 1.0], pos: [ZX, ZY + 0.36, 0] } ] },
        { id: 'contatti', name: 'Contatti metallici', label: 'Contatti', color: '#e2e8f0', explode: [0, 0, 0.5],
          info: '<p>Sottili strisce d\'argento sopra (che lasciano passare la luce) e una lastra d\'alluminio sotto raccolgono gli elettroni e li mandano nei fili.</p>',
          shapes: [-0.5, 0, 0.5].map((x) => ({ t: 'box', s: [0.06, 0.05, 1.02], pos: [ZX + x, TOPN + 0.035, 0] })).concat([ { t: 'box', s: [1.62, 0.06, 1.02], pos: [ZX, ZY - 0.02, 0], color: '#9ca3af' } ]) },
        { id: 'elettroni', name: 'Elettroni in movimento', label: 'Elettroni', color: '#2563eb', explode: [0, 0, 0], chip: true,
          info: '<p>Gli <b>elettroni</b> spinti dalla giunzione escono dai contatti di sopra, passano nel filo, fanno accendere la lampadina e rientrano dal basso. Un flusso ordinato di elettroni è la <b>corrente elettrica</b>!</p>',
          more: '<p>Il pannello produce <b>corrente continua</b> (gli elettroni vanno sempre nella stessa direzione), come una pila. Le prese di casa invece usano corrente alternata: serve l\'<b>inverter</b>.</p>',
          shapes: electrons },
        { id: 'lacune', name: 'Lacune', color: '#f87171', explode: [0, 0, 0], chip: true,
          info: '<p>Le <b>lacune</b> sono i "buchi" lasciati dagli elettroni: si comportano come cariche positive e vanno verso il basso, dove incontrano gli elettroni che tornano dal circuito.</p>',
          shapes: holes },
        { id: 'lampadina', name: 'Circuito e lampadina', label: 'Lampadina', color: '#fde047', explode: [0.4, 0.3, 0],
          info: '<p>Collegando i due contatti con un filo si forma un <b>circuito</b>: la corrente prodotta dalla luce accende la lampadina. Se il Sole si nasconde, la lampadina si affievolisce.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: CIRCUIT, color: '#b45309' },
            { t: 'sphere', r: 0.22, n: 14, m: 20, pos: [ZX + 1.35, TOPN + 1.15, 0], color: '#fef08a', alpha: 0.85, anim: { type: 'blink', color: '#ffffff', amount: 0.7, rate: 1 } },
            { t: 'cyl', r: 0.1, h: 0.16, n: 14, pos: [ZX + 1.35, TOPN + 0.92, 0], color: '#94a3b8' } ] },
        { id: 'inverter', name: 'Inverter', color: '#e5e7eb', explode: [0.4, -0.2, 0.6],
          info: '<p>Una scatola che trasforma la corrente continua del pannello in <b>corrente alternata</b>, quella delle prese di casa, e la manda alla rete.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.6, 0.2], pos: [1.6, 0.42, 1.2] }, { t: 'box', s: [0.25, 0.12, 0.02], pos: [1.6, 0.55, 1.31], color: '#16a34a', decal: 1, anim: { type: 'blink', color: '#86efac', amount: 0.6, rate: 2 } },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.6, 0.85, -0.3], [1.0, 0.4, 0.3], [1.5, 0.2, 1.15]], color: '#111827' } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'Elettricità dalla luce', explode: 0,
        html: '<p>Un pannello solare non ha motori né ingranaggi: <b>è la luce stessa</b> a produrre la corrente. Questo fenomeno si chiama <b>effetto fotovoltaico</b> ("foto" = luce, "volt" = elettricità).</p>' },
      { icon: '🥪', title: 'Un panino a strati', explode: 1, focus: ['vetro', 'eva', 'celle', 'retro', 'cornice', 'scatola'], view: { rx: 0.25, ry: -0.9 },
        html: '<p>Il pannello è un "panino": sopra il <b>vetro</b>, poi la plastica trasparente (<b>EVA</b>), le <b>celle</b> di silicio, un altro strato di EVA e il <b>foglio posteriore</b>. Tutto è tenuto da una <b>cornice</b> di alluminio.</p>' },
      { icon: '🔲', title: 'Le celle di silicio', focus: ['celle', 'cornice', 'luce'], view: { rx: 0.7, ry: -0.3 }, zoom: 1.3,
        html: '<p>Ogni quadratino blu è una <b>cella</b> di silicio, sottile come un foglio. Le righe argentate raccolgono la corrente. Le celle sono collegate tra loro in fila, come le pile in una torcia.</p>' },
      { icon: '🔬', title: 'Una cella al microscopio', focus: ['zoom', 'silicio-n', 'silicio-p', 'giunzione', 'contatti'], view: { rx: 0.2, ry: -0.15 },
        html: '<p>Ingrandiamo una cella. È fatta di due strati: il silicio <b>N</b> (sopra) con elettroni in più e il silicio <b>P</b> (sotto) con dei "posti vuoti". Dove si toccano c\'è la <b>giunzione</b>.</p>' },
      { icon: '⚡', title: 'La luce libera gli elettroni', focus: ['luce', 'giunzione', 'elettroni', 'lacune', 'silicio-n', 'silicio-p'], view: { rx: 0.15, ry: -0.05 }, zoom: 1.2,
        html: '<p>Un <b>fotone</b> colpisce il silicio e "stacca" un elettrone. La giunzione spinge l\'<b>elettrone</b> verso l\'alto e la <b>lacuna</b> verso il basso: si crea una differenza di carica, come in una pila.</p>' },
      { icon: '💡', title: 'Si accende la lampadina', focus: ['elettroni', 'lampadina', 'contatti', 'lacune'], view: { rx: 0.15, ry: 0.15 },
        html: '<p>Se colleghiamo sopra e sotto con un filo, gli elettroni scorrono nel <b>circuito</b>: è la <b>corrente elettrica</b>, che accende la lampadina e poi torna nella cella. Finché c\'è luce, il giro continua!</p>' },
      { icon: '🏠', title: 'Dal tetto alla presa', focus: ['inverter', 'scatola', 'struttura', 'celle'], view: { rx: 0.3, ry: -0.9 },
        html: '<p>La <b>scatola di giunzione</b> raccoglie la corrente, l\'<b>inverter</b> la trasforma in quella delle prese di casa. Il pannello va inclinato verso <b>sud</b>, di circa 30°, per prendere più Sole possibile.</p><p class="tip">🌱 L\'energia solare è <b>rinnovabile</b> e pulita: il Sole splenderà ancora per miliardi di anni.</p>' }
    ],
    facts: [
      { icon: '🛰️', title: 'Nati per lo spazio', html: 'I primi pannelli solari pratici furono usati nel 1958 sul satellite <b>Vanguard 1</b>, che funziona ancora oggi dopo più di 65 anni in orbita!' },
      { icon: '🏖️', title: 'Fatti di sabbia', html: 'Il silicio delle celle si ricava dalla <b>sabbia</b> (quarzo), uno dei materiali più comuni della Terra.' },
      { icon: '🥵', title: 'Il troppo caldo non aiuta', html: 'I pannelli amano la luce, non il caldo: quando si scaldano troppo producono un po\' meno. Per questo funzionano benissimo nelle giornate fredde e serene.' },
      { icon: '⏳', title: 'Lunga vita', html: 'Un pannello solare dura più di <b>25 anni</b> e alla fine si può riciclare: vetro, alluminio e silicio si recuperano quasi del tutto.' },
      { icon: '🧮', title: 'Quanto produce?', html: 'In Italia un pannello di casa (circa 400 W) produce in un anno circa 500 kWh: abbastanza per far funzionare un frigorifero per tutto l\'anno.' }
    ],
    quiz: [
      { type: 'mc', q: 'Che cosa trasforma un pannello fotovoltaico?', options: ['Il calore in vento', 'La luce in elettricità', 'L\'acqua in vapore', 'Il rumore in luce'], answer: 1, explain: 'È l\'effetto fotovoltaico: la luce mette in moto gli elettroni.' },
      { type: 'mc', q: 'Di quale materiale sono fatte quasi tutte le celle solari?', options: ['Rame', 'Silicio', 'Legno', 'Plastica'], answer: 1, explain: 'Il silicio, che si ricava dalla sabbia.' },
      { type: 'tf', q: 'Un pannello solare ha molti ingranaggi che girano.', answer: false, explain: 'Non ha parti in movimento: è la luce che produce direttamente la corrente.' },
      { type: 'mc', q: 'A che cosa serve l\'inverter?', options: ['A pulire il pannello', 'A trasformare la corrente continua in alternata', 'A seguire il Sole', 'A raffreddare le celle'], answer: 1, explain: 'Le prese di casa usano corrente alternata; il pannello produce corrente continua.' },
      { type: 'mc', q: 'In Italia, verso quale punto cardinale conviene girare i pannelli?', options: ['Nord', 'Sud', 'Est', 'Ovest'], answer: 1, explain: 'Nel nostro emisfero il Sole a mezzogiorno è a sud.' },
      { type: 'order', q: 'Metti in ordine: come nasce la corrente nella cella', items: ['Il fotone colpisce il silicio', 'Un elettrone si libera', 'La giunzione lo spinge verso l\'alto', 'L\'elettrone percorre il circuito', 'La lampadina si accende'], explain: 'Luce → elettrone libero → separazione nella giunzione → corrente nel circuito.' }
    ]
  });
})();
