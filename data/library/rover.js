/* Il rover su Marte (tipo Perseverance). Formato: data/library/FORMATO.md
   Il rover guarda verso +x; z = fianchi; y = alto. Le sospensioni rocker-bogie oscillano (stesse animazioni in "ruote" e "sospensioni"). */
(function () {
  const WR = 0.34, HUB = 0.36;
  const ZS = [-1.22, 1.22];
  const ROCK = { type: 'swing', axis: 'z', amp: 6, rate: 0.5, pivot: [0.15, 1.0, 0] };
  const BOG = { type: 'swing', axis: 'z', amp: 9, rate: 0.5, phase: 0.3, pivot: [-0.55, 0.72, 0] };
  /* ruota: cerchione, battistrada a "chevron", mozzo; gira intorno a z */
  const wheel = (x, z) => ({ t: 'group', pos: [x, HUB, z], anim: { type: 'spin', axis: 'z', dir: -1, rate: 1.2 }, shapes: [
    { t: 'cyl', r: WR, h: 0.32, n: 30, rot: [90, 0, 0], color: '#a1a1aa' },
    { t: 'cyl', r: WR * 0.55, h: 0.34, n: 20, rot: [90, 0, 0], color: '#52525b' },
    { t: 'cyl', r: 0.07, h: 0.38, n: 12, rot: [90, 0, 0], color: '#d4d4d8' }
  ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [0, 0, k * 22.5], shapes: [
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, 0.075], rot: [0, 22, 0], color: '#3f3f46' },
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, -0.075], rot: [0, -22, 0], color: '#3f3f46' } ] }))) });
  const side = (z, withWheels) => {
    const zz = z + Math.sign(z) * 0.0;
    const rockerArms = [ { t: 'pipe', r: 0.055, n: 10, pts: [[1.15, HUB, zz], [0.85, 0.98, zz], [0.15, 1.0, zz], [-0.55, 0.72, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.11, h: 0.16, n: 16, rot: [90, 0, 0], pos: [0.15, 1.0, zz], color: '#71717a' } ];
    const bogieArms = [ { t: 'pipe', r: 0.05, n: 10, pts: [[0, HUB, zz], [-0.3, 0.68, zz], [-0.8, 0.68, zz], [-1.15, HUB, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.09, h: 0.15, n: 16, rot: [90, 0, 0], pos: [-0.55, 0.72, zz], color: '#71717a' } ];
    const wf = [wheel(1.15, z)], wb = [wheel(0, z), wheel(-1.15, z)];
    return { t: 'group', anim: ROCK, shapes: (withWheels ? wf : rockerArms).concat([ { t: 'group', anim: BOG, shapes: withWheels ? wb : bogieArms } ]) };
  };

  LIBRARY({
    id: 'rover',
    title: 'Il rover su Marte',
    intro: 'Un <b>rover</b> è un robot-laboratorio grande come un\'automobile che esplora Marte da solo. Fotografa, guida tra le rocce, le analizza con un laser e raccoglie campioni per cercare tracce di <b>vita antica</b>.',
    model: {
      rx: 0.3, ry: -0.75, speed: 0.22, height: 470, fit: 1.12,
      parts: [
        { id: 'suolo', name: 'Suolo di Marte', label: 'Suolo marziano', color: '#b45f3c', explode: [0, -0.6, 0], chip: true,
          info: '<p>Marte è rosso perché la sua polvere contiene tanta <b>ruggine</b> (ossido di ferro). Il suolo è pieno di sassi, sabbia e dune.</p>',
          more: '<p>Su Marte la gravità è circa <b>un terzo</b> di quella terrestre, l\'aria è sottilissima (quasi solo anidride carbonica) e la temperatura scende di notte fino a −80 °C.</p>',
          shapes: [ { t: 'lathe', n: 40, pts: [[0, 0.0], [3.0, 0.0], [3.25, -0.12], [3.2, -0.2], [0, -0.2]], color: '#b45f3c' },
            { t: 'sphere', r: 0.28, n: 8, m: 10, pos: [3.0, 0.08, 0.6], scale: [1.3, 0.8, 1], color: '#7c2d12' },
            { t: 'sphere', r: 0.2, n: 8, m: 10, pos: [-2.4, 0.05, 1.2], scale: [1.2, 0.7, 1], color: '#92400e' },
            { t: 'sphere', r: 0.15, n: 8, m: 10, pos: [1.9, 0.03, -2.0], color: '#78350f' },
            { t: 'sphere', r: 0.35, n: 8, m: 10, pos: [-1.5, 0.05, -2.3], scale: [1.4, 0.6, 1], color: '#9a3412' },
            { t: 'sphere', r: 0.1, n: 6, m: 8, pos: [1.4, 0.02, 2.3], color: '#7c2d12' } ] },
        { id: 'corpo', name: 'Corpo del rover', label: 'Corpo', color: '#e4e4e7', explode: [0, 0.9, 0],
          info: '<p>È la "pancia" del rover: dentro, al calduccio, ci sono il <b>computer</b>, le batterie e gli strumenti di laboratorio. Sopra c\'è il "ponte" dove sono montati antenne e telecamere.</p>',
          more: '<p>Il rover è grande come una piccola auto (3 m di lunghezza) e pesa circa <b>1 tonnellata</b>. Il computer è "indurito" contro le radiazioni e il rover guida da solo per piccoli tratti, scegliendo il percorso con le telecamere.</p>',
          shapes: [ { t: 'box', s: [2.3, 0.5, 1.75], pos: [0, 1.25, 0] },
            { t: 'box', s: [2.2, 0.06, 1.65], pos: [0, 1.53, 0], color: '#d4d4d8' },
            { t: 'box', s: [2.36, 0.08, 1.81], pos: [0, 1.02, 0], color: '#a1a1aa' },
            { t: 'box', s: [0.03, 0.3, 1.3], pos: [1.16, 1.25, 0], color: '#27272a', decal: 1 },
            { t: 'box', s: [0.6, 0.02, 0.4], pos: [0.3, 1.565, -0.5], color: '#fbbf24', decal: 1 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, 0.45], color: '#0ea5e9', decal: 2 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, -0.45], color: '#0ea5e9', decal: 2 } ] },
        { id: 'ruote', name: 'Ruote', color: '#a1a1aa', explode: [0, 0, 0.9],
          info: '<p>Sei ruote di alluminio con le "unghie" (i ramponi a zig-zag) per non scivolare sulla sabbia. Ogni ruota ha il <b>suo motore</b>, e quelle davanti e dietro possono anche sterzare.</p>',
          more: '<p>Le ruote non hanno gomme: una camera d\'aria su Marte potrebbe bucarsi e nessuno la cambierebbe! Il rover va pianissimo, circa <b>150 metri all\'ora</b>, per non rischiare.</p>',
          shapes: ZS.map((z) => side(z, true)) },
        { id: 'sospensioni', name: 'Sospensioni rocker-bogie', label: 'Sospensioni', color: '#d4d4d8', explode: [0, 0, 0.55],
          info: '<p>Bracci snodati collegano le ruote al corpo. Si piegano come altalene così <b>tutte e sei le ruote</b> toccano sempre il suolo, anche sui sassi.</p>',
          more: '<p>Il sistema si chiama <b>rocker-bogie</b>: il "rocker" (bilanciere) regge la ruota davanti e il "bogie" le altre due. Il rover può superare sassi alti come le sue ruote senza ribaltarsi, anche inclinato di 45°.</p>',
          shapes: ZS.map((z) => side(z, false)).concat([ { t: 'pipe', r: 0.045, n: 10, pts: [[0.15, 1.42, -1.1], [0.15, 1.62, 0], [0.15, 1.42, 1.1]], color: '#a1a1aa' } ]) },
        { id: 'testa', name: 'Albero con le telecamere', label: 'Testa e telecamere', color: '#e4e4e7', pos: [0.85, 1.55, 0.55], explode: [0.3, 1.2, 0.4],
          info: '<p>È la "testa" del rover, a 2 metri d\'altezza. Due telecamere a colori, come due occhi, fanno <b>foto in 3D</b>; altre telecamere controllano gli ostacoli vicino alle ruote.</p>',
          more: '<p>Le immagini e i comandi viaggiano tra Marte e la Terra in un tempo da <b>4 a 24 minuti</b> (dipende da dove sono i due pianeti): per questo il rover non si può guidare "in diretta" come una macchinina.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 1.35, n: 14, pos: [0, 0.67, 0], color: '#d4d4d8' }, { t: 'cyl', r: 0.12, h: 0.1, n: 16, pos: [0, 0.05, 0], color: '#71717a' },
            { t: 'group', pos: [0, 1.42, 0], anim: { type: 'swing', axis: 'y', amp: 50, wave: 'window', from: 0.05, to: 0.45, ramp: 0.3 }, shapes: [
              { t: 'cyl', r: 0.1, h: 0.14, n: 16, color: '#71717a' },
              { t: 'box', s: [0.42, 0.28, 0.62], pos: [0.05, 0.2, 0], color: '#f4f4f5' },
              { t: 'box', s: [0.32, 0.2, 0.2], pos: [0.12, 0.2, -0.02], color: '#d4d4d8' },
              { t: 'cyl', r: 0.09, h: 0.08, n: 20, rot: [0, 0, 90], pos: [0.29, 0.22, 0], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, 0.22], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, -0.22], color: '#18181b' },
              { t: 'cyl', r: 0.035, h: 0.02, n: 12, rot: [0, 0, 90], pos: [0.305, 0.22, 0], color: '#38bdf8', decal: 1 } ] } ] },
        { id: 'laser', name: 'Laser SuperCam', label: 'Laser', color: '#ef4444', chip: true,
          info: '<p>Dalla testa il rover spara un piccolissimo <b>laser</b> su una roccia lontana fino a 7 metri. La roccia fa una scintilla e, guardando la luce della scintilla, il rover capisce <b>di che cosa è fatta</b>.</p>',
          more: '<p>Ogni elemento chimico emette luce di colori precisi: analizzando lo <b>spettro</b> della scintilla si riconoscono ferro, silicio, calcio… Un microfono registra anche il "tic" del laser: il suono dice se la roccia è dura o morbida.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[1.17, 3.19, 0.55], [2.9, 0.22, 0.6]], color: '#ef4444', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.1 } },
            { t: 'sphere', r: 0.11, n: 8, pos: [2.9, 0.22, 0.6], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.2 } } ] },
        { id: 'braccio', name: 'Braccio robotico', color: '#e4e4e7', pos: [1.18, 1.18, -0.35], explode: [0.9, 0.2, -0.6],
          info: '<p>Un braccio lungo più di 2 metri con 5 snodi. In punta ha una "mano" con un <b>trapano</b>, una lente d\'ingrandimento e altri strumenti per studiare le rocce da vicino.</p>',
          shapes: [ { t: 'cyl', r: 0.11, h: 0.2, n: 16, rot: [90, 0, 0], color: '#71717a' },
            { t: 'group', anim: { type: 'swing', axis: 'z', amp: -38, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
              { t: 'pipe', r: 0.06, n: 12, pts: [[0, 0, 0], [0.95, 0.15, 0]] },
              { t: 'group', pos: [0.95, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -45, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
                { t: 'sphere', r: 0.09, n: 10, color: '#71717a' },
                { t: 'pipe', r: 0.055, n: 12, pts: [[0, 0, 0], [0.8, -0.1, 0]] },
                { t: 'group', pos: [0.85, -0.1, 0], shapes: [
                  { t: 'box', s: [0.28, 0.28, 0.28], color: '#a1a1aa' },
                  { t: 'cyl', r: 0.05, h: 0.38, n: 12, pos: [0, -0.3, 0], color: '#52525b' },
                  { t: 'cyl', r: 0.02, h: 0.2, n: 8, pos: [0, -0.56, 0], color: '#d4d4d8' },
                  { t: 'cyl', r: 0.08, h: 0.12, n: 14, pos: [0.18, 0, 0], rot: [0, 0, 90], color: '#3f3f46' },
                  { t: 'box', s: [0.12, 0.18, 0.12], pos: [0, 0, 0.2], color: '#fbbf24' } ] } ] } ] } ] },
        { id: 'provette', name: 'Provette dei campioni', label: 'Provette', color: '#e5e7eb', explode: [0, -0.4, -1.1],
          info: '<p>Il trapano preleva piccole "carote" di roccia grandi come un gessetto e le chiude in <b>provette</b> sigillate. Un giorno un\'altra missione le porterà sulla Terra.</p>',
          shapes: Array.from({ length: 7 }, (_, k) => ({ t: 'cyl', r: 0.045, h: 0.42, n: 14, rot: [0, 0, 90], pos: [-0.2, 0.94, -0.6 + k * 0.12], color: k % 2 ? '#e5e7eb' : '#cbd5e1' })).concat([ { t: 'box', s: [0.6, 0.06, 0.95], pos: [-0.2, 0.89, -0.24], color: '#71717a' } ]) },
        { id: 'rtg', name: 'Generatore nucleare (RTG)', label: 'Generatore', color: '#3f3f46', pos: [-1.35, 1.55, 0], explode: [-1.0, 0.4, 0],
          info: '<p>Il rover non usa pannelli solari, che la polvere coprirebbe. Ha una "batteria" speciale: un materiale <b>radioattivo</b> che scalda e il calore diventa elettricità, giorno e notte, per molti anni.</p>',
          more: '<p>L\'RTG contiene circa 5 kg di plutonio-238 e produce circa 110 watt: poco, ma per 14 anni. Il calore in più serve anche a <b>tenere caldi</b> gli strumenti nelle gelide notti marziane.</p>',
          shapes: [ { t: 'group', rot: [0, 0, 32], shapes: [ { t: 'cyl', r: 0.24, h: 0.95, n: 24, rot: [0, 0, 90] },
            { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [0.48, 0, 0], color: '#71717a' }, { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [-0.48, 0, 0], color: '#71717a' } ]
            .concat(Array.from({ length: 8 }, (_, k) => ({ t: 'group', rot: [k * 45, 0, 0], shapes: [ { t: 'box', s: [0.86, 0.2, 0.025], pos: [0, 0.33, 0], color: '#27272a' } ] }))) },
            { t: 'sphere', r: 0.24, n: 10, color: '#f97316', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ] },
        { id: 'antenne', name: 'Antenne', color: '#d4d4d8', explode: [-0.3, 1.0, -0.6],
          info: '<p>Il rover "telefona" a casa con due antenne: quella esagonale parla <b>direttamente con la Terra</b>; quella piccola parla con i satelliti in orbita intorno a Marte, che fanno da ripetitori.</p>',
          more: '<p>La maggior parte dei dati passa dai satelliti (come il Mars Reconnaissance Orbiter), che ricevono molto più velocemente e poi ritrasmettono verso le grandi antenne della NASA in California, Spagna e Australia.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.3, n: 10, pos: [-0.55, 1.7, -0.55], color: '#71717a' },
            { t: 'group', pos: [-0.55, 1.9, -0.55], anim: { type: 'swing', axis: 'y', amp: 30, rate: 0.5 }, shapes: [
              { t: 'group', rot: [0, 0, 55], shapes: [ { t: 'cyl', r: 0.32, h: 0.06, n: 6, color: '#e4e4e7' }, { t: 'cyl', r: 0.26, h: 0.02, n: 6, pos: [0, 0.035, 0], color: '#a1a1aa', decal: 1 } ] } ] },
            { t: 'cyl', r: 0.06, h: 0.32, n: 14, pos: [-0.85, 1.72, 0.55], color: '#f4f4f5' }, { t: 'sphere', r: 0.06, n: 8, pos: [-0.85, 1.88, 0.55], color: '#f4f4f5' } ] },
        { id: 'elicottero', name: 'Elicottero Ingenuity', label: 'Elicottero', color: '#a1a1aa', pos: [-1.6, 0, 2.0], explode: [-0.6, 0.8, 0.8],
          anim: { type: 'move', dir: [0, 1, 0], amp: 1.6, wave: 'window', from: 0.15, to: 0.85, ramp: 0.4 },
          info: '<p>Un piccolo elicottero di <b>1,8 kg</b>, arrivato insieme al rover Perseverance. Nel 2021 è stato il primo velivolo a volare su un altro pianeta!</p>',
          more: '<p>L\'aria di Marte è 100 volte più sottile della nostra: per sollevarsi le pale, lunghe 1,2 m, girano a <b>2400 giri al minuto</b>, molto più veloci di quelle di un elicottero normale. Ha volato 72 volte.</p>',
          shapes: [ { t: 'box', s: [0.2, 0.18, 0.2], pos: [0, 0.38, 0], color: '#f4f4f5' },
            { t: 'cyl', r: 0.02, h: 0.42, n: 8, pos: [0, 0.64, 0], color: '#3f3f46' },
            { t: 'box', s: [0.32, 0.02, 0.2], pos: [0, 0.88, 0], color: '#1e3a8a' } ]
            .concat([45, 135, 225, 315].map((a) => ({ t: 'pipe', r: 0.012, n: 6, pts: [[0.08 * Math.cos(a * Math.PI / 180), 0.3, 0.08 * Math.sin(a * Math.PI / 180)], [0.3 * Math.cos(a * Math.PI / 180), 0.0, 0.3 * Math.sin(a * Math.PI / 180)]], color: '#9ca3af' })))
            .concat([ [0.68, 1], [0.78, -1] ].map(([y, d]) => ({ t: 'group', pos: [0, y, 0], anim: { type: 'spin', axis: 'y', dir: d, rate: 12 }, shapes: [
              { t: 'box', s: [1.2, 0.012, 0.09], rot: [d * 8, 0, 0], color: '#52525b' }, { t: 'cyl', r: 0.04, h: 0.04, n: 10, color: '#3f3f46' } ] }))) }
      ]
    },
    steps: [
      { icon: '🤖', title: 'Un robot-esploratore', explode: 0,
        html: '<p>Marte è lontanissimo: per arrivarci serve un viaggio di <b>7 mesi</b>. Mandare persone è ancora troppo difficile, così mandiamo dei robot. Il rover è un <b>laboratorio su ruote</b> che lavora da solo per anni.</p>' },
      { icon: '🛞', title: 'Sei ruote e i bracci snodati', focus: ['ruote', 'sospensioni', 'suolo'], view: { rx: 0.12, ry: -0.1 },
        html: '<p>Ogni ruota ha un motore. Le <b>sospensioni rocker-bogie</b> sono bracci che si piegano come altalene: così tutte e 6 le ruote restano sempre attaccate al suolo, anche sopra i sassi.</p><p class="tip">🐢 Il rover va piano: meno di 200 metri all\'ora. Su Marte non c\'è un carro attrezzi!</p>' },
      { icon: '👀', title: 'Gli occhi del rover', focus: ['testa', 'corpo'], loop: [0, 0.48], zoom: 1.4, view: { rx: 0.2, ry: -0.5 },
        html: '<p>In cima all\'albero ci sono due <b>telecamere</b>, distanti come i nostri occhi: insieme fanno foto in 3D. Gli scienziati sulla Terra le guardano e decidono dove andare.</p><p>Il rover può anche guidare da solo per qualche metro, scegliendo la strada più sicura.</p>' },
      { icon: '🔴', title: 'Un laser per leggere le rocce', focus: ['laser', 'testa', 'suolo'], loop: [0.45, 0.65], view: { rx: 0.25, ry: -0.9 },
        html: '<p>Il rover spara un piccolo <b>laser</b> su una roccia: si accende una minuscola scintilla. Dalla luce della scintilla si capisce di che cosa è fatta la roccia, senza nemmeno toccarla!</p>' },
      { icon: '🦾', title: 'Il braccio e il trapano', focus: ['braccio', 'provette', 'suolo'], loop: [0.6, 1.0], view: { rx: 0.2, ry: -0.35 },
        html: '<p>Il <b>braccio robotico</b> appoggia gli strumenti sulla roccia: una lente d\'ingrandimento, sensori chimici e un <b>trapano</b>. Le "carote" di roccia vengono chiuse in <b>provette</b>.</p><p class="tip">🧪 Lo scopo? Cercare tracce di microbi vissuti miliardi di anni fa, quando su Marte c\'erano laghi e fiumi.</p>' },
      { icon: '⚡', title: 'Energia giorno e notte', focus: ['rtg', 'corpo'], view: { rx: 0.25, ry: -2.3 }, zoom: 1.3,
        html: '<p>Dietro c\'è il <b>generatore nucleare</b> (RTG): un materiale che si scalda da solo; il calore diventa elettricità. Funziona anche di notte e durante le tempeste di sabbia, quando i pannelli solari non servirebbero.</p>' },
      { icon: '📡', title: 'Chiamare casa', focus: ['antenne', 'corpo'], view: { rx: 0.5, ry: -1.6 }, zoom: 1.2,
        html: '<p>Con le <b>antenne</b> il rover riceve i comandi e manda foto e dati. Il messaggio impiega diversi minuti per arrivare: il rover deve sapersela cavare da solo.</p>' },
      { icon: '🚁', title: 'Il primo volo su Marte', focus: ['elicottero', 'suolo'], loop: [0.1, 0.9], view: { rx: 0.15, ry: -1.2 },
        html: '<p><b>Ingenuity</b> è un mini-elicottero che ha fatto da "esploratore dall\'alto". Le sue pale girano velocissime perché l\'aria di Marte è sottilissima.</p>' }
    ],
    facts: [
      { icon: '🚗', title: 'Grande come un\'auto', html: 'Perseverance è lungo 3 metri, largo 2,7 e pesa circa una tonnellata. Il suo nome significa <b>"perseveranza"</b>.' },
      { icon: '🪂', title: 'Sette minuti di terrore', html: 'Per atterrare il rover passa da 20 000 km/h a zero in 7 minuti: scudo termico, paracadute e infine una "gru volante" che lo cala con dei cavi.' },
      { icon: '🎙️', title: 'I suoni di Marte', html: 'Perseverance ha dei microfoni: per la prima volta abbiamo sentito il <b>vento di Marte</b> e il ronzio dell\'elicottero.' },
      { icon: '🏆', title: 'Il record di Opportunity', html: 'Il rover Opportunity doveva durare 90 giorni e invece ha lavorato per <b>14 anni</b>, percorrendo più di una maratona (45 km).' },
      { icon: '🔤', title: 'Un messaggio sulle ruote', html: 'Le ruote di Curiosity hanno dei buchi che lasciano sulla sabbia un messaggio in alfabeto Morse: "JPL", il laboratorio che l\'ha costruito.' }
    ],
    quiz: [
      { type: 'mc', q: 'Perché le sospensioni del rover sono snodate (rocker-bogie)?', options: ['Per andare più veloce', 'Per tenere tutte le ruote a terra sui sassi', 'Per risparmiare energia', 'Per sembrare un ragno'], answer: 1, explain: 'I bracci si piegano come altalene: le 6 ruote restano a contatto con il suolo e il rover non si ribalta.' },
      { type: 'mc', q: 'Perché il rover non si guida "in diretta" come una macchinina?', options: ['Perché i comandi impiegano minuti ad arrivare', 'Perché non ha il volante', 'Perché su Marte è sempre notte', 'Perché non ha antenne'], answer: 0, explain: 'I segnali radio impiegano da 4 a 24 minuti tra Terra e Marte.' },
      { type: 'tf', q: 'Marte è rosso perché la sua polvere contiene ruggine.', answer: true, explain: 'L\'ossido di ferro (ruggine) colora di rosso la polvere marziana.' },
      { type: 'mc', q: 'A che cosa serve il laser del rover?', options: ['A difendersi', 'A scaldare gli strumenti', 'A capire di che cosa sono fatte le rocce', 'A illuminare di notte'], answer: 2, explain: 'Il laser fa una scintilla sulla roccia; la luce della scintilla rivela gli elementi chimici.' },
      { type: 'mc', q: 'Da dove prende energia Perseverance?', options: ['Da grandi pannelli solari', 'Da un generatore che trasforma calore in elettricità', 'Dal vento di Marte', 'Da batterie cambiate ogni mese'], answer: 1, explain: 'L\'RTG usa il calore di un materiale radioattivo: funziona giorno e notte per molti anni.' },
      { type: 'num', q: 'Quante ruote ha il rover?', answer: 6, explain: 'Sei ruote, ognuna con il proprio motore.' }
    ]
  });
})();
