/* Il treno elettrico ad alta velocità (motrice di testa). Il treno viaggia verso +x; alto = +y; i binari corrono lungo x (scartamento: z = ±0.43).
   Le traversine scorrono all'indietro per dare l'idea del movimento. */
(function () {
  const TAU = Math.PI * 2, RW = 0.28, WR = 2.2; // raggio ruota, velocità di rotazione delle ruote
  const SPEED = WR * TAU * RW;           // velocità del treno (unità per giro dell'orologio)
  const SL = 0.6;                        // passo delle traversine
  const PROFILE = [[-3.2, 0.62], [2.2, 0.62], [2.75, 0.66], [3.15, 0.78], [3.36, 0.94], [3.34, 1.06], [3.05, 1.3], [2.45, 1.64], [1.85, 1.86], [1.2, 1.92], [-3.2, 1.92]];
  const wheelset = (x) => ({ t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [
    { t: 'cyl', r: 0.05, h: 1.0, n: 12, rot: [90, 0, 0], color: '#6b7280' },
    ...[-0.43, 0.43].map((z) => ({ t: 'cyl', r: RW, h: 0.07, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#9ca3af' })),
    ...[-0.38, 0.38].map((z) => ({ t: 'cyl', r: RW + 0.035, h: 0.025, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#6b7280' })),
    ...[-0.43, 0.43].map((z) => ({ t: 'box', s: [0.3, 0.04, 0.075], pos: [0, 0, z + Math.sign(z) * 0.002], color: '#475569' })) ] });
  const AXLES = [-2.55, -1.75, 1.15, 1.95];
  const bogie = (x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
    { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, 0.52] }, { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, -0.52] }, { t: 'box', s: [0.16, 0.1, 1.04], pos: [0, 0.36, 0] },
    ...[-0.4, 0.4].map((dx) => ({ t: 'pipe', r: 0.012, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 22 }, (_, i) => [dx + 0.05 * Math.cos(i * 1.2), 0.4 + i * 0.008, 0.52 + 0.05 * Math.sin(i * 1.2)]) })) ] });
  const sleepers = Array.from({ length: 15 }, (_, k) => ({ t: 'box', s: [0.16, 0.08, 1.35], pos: [-4.2 + k * SL, -0.07, 0], color: '#78716c', div: 1 }));
  const POLES = [-3.4, 3.4];
  const CUR = [[-1.45, 2.78, 0], [-1.45, 2.2, 0], [-1.45, 1.95, 0], [-1.2, 1.7, 0.1], [-0.5, 0.75, 0.1], [0.0, 0.5, 0.1], [0.65, 0.5, 0.1], [1.1, 0.55, 0.1], [1.15, 0.42, 0.25], [1.15, RW + 0.02, 0.43], [1.15, 0.0, 0.43]];

  LIBRARY({
    id: 'treno',
    title: 'Il treno',
    intro: 'Un treno ad alta velocità corre a <b>300 km/h</b> senza bruciare carburante: prende l\'<b>elettricità</b> da un filo sopra i binari e la trasforma in movimento con potenti motori elettrici. Ruote d\'acciaio su binari d\'acciaio: pochissimo attrito!',
    model: {
      rx: 0.15, ry: -0.6, speed: 0.4, height: 460, fit: 1.15,
      parts: [
        { id: 'cassa', name: 'Cassa (carrozzeria)', label: 'Cassa', color: '#dc2626', alpha: 0.62, explode: [0, 0.9, 0],
          info: '<p>È il "guscio" del treno, in alluminio. Il muso affusolato <b>taglia l\'aria</b>: ad alta velocità la resistenza dell\'aria è la fatica più grande da vincere.</p>',
          more: '<p>A 300 km/h più dell\'80% dell\'energia serve a spostare l\'aria. Per questo i treni veloci hanno il muso lungo, le fiancate lisce e perfino i carrelli coperti. Il muso di un treno giapponese è stato disegnato copiando il becco del martin pescatore!</p>',
          shapes: [ { t: 'extrude', d: 1.06, pts: PROFILE, smooth: true },
            { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, 0.535], color: '#0f172a', alpha: 0.9, decal: 1 }, { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, -0.535], color: '#0f172a', alpha: 0.9, decal: 1 },
            { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, 0.536], color: '#e5e7eb', alpha: 1, decal: 1 }, { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, -0.536], color: '#e5e7eb', alpha: 1, decal: 1 },
            { t: 'box', s: [0.42, 0.9, 0.012], pos: [-2.75, 1.13, 0.537], color: '#9ca3af', alpha: 0.9, decal: 2 },
            { t: 'box', s: [0.62, 0.02, 0.86], pos: [2.755, 1.478, 0], rot: [0, 0, -30], color: '#0f172a', alpha: 0.95, decal: 1 },
            { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, 0.537], color: '#9ca3af', alpha: 1, decal: 1 }, { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, -0.537], color: '#9ca3af', alpha: 1, decal: 1 },
            { t: 'box', s: [1.6, 0.14, 0.7], pos: [0.3, 1.99, 0], color: '#9ca3af', alpha: 1 } ] },
        { id: 'cabina', name: 'Cabina di guida', label: 'Cabina', color: '#334155', explode: [0.6, 0.9, 0],
          info: '<p>Qui siede il <b>macchinista</b>. Ha la leva per accelerare (il "manipolatore"), la leva del freno, gli schermi e la radio. Non ha volante: è il binario che decide dove si va!</p>',
          more: '<p>Ad alta velocità i segnali ai lati dei binari passerebbero troppo in fretta: le informazioni arrivano direttamente in cabina sugli schermi (sistema <b>ERTMS</b>). Se il macchinista non reagisce, il treno frena da solo.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.35, 0.8], pos: [2.35, 1.0, 0], color: '#1f2937' }, { t: 'box', s: [0.45, 0.04, 0.7], pos: [2.4, 1.2, 0], rot: [0, 0, 20], color: '#475569' },
            { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, 0.0], rot: [0, 0, 20], color: '#22c55e', decal: 1 }, { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, -0.2], rot: [0, 0, 20], color: '#38bdf8', decal: 1 },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [1.75, 0.95, 0.15], color: '#1e3a8a' }, { t: 'box', s: [0.06, 0.4, 0.3], pos: [1.6, 1.15, 0.15], color: '#1e3a8a' } ] },
        { id: 'sedili', name: 'Carrozza passeggeri', label: 'Passeggeri', color: '#1d4ed8', explode: [0, 0.9, 0],
          info: '<p>Dietro la cabina ci sono i <b>sedili</b> dei passeggeri. Un treno ad alta velocità porta circa <b>450–600 persone</b>: quante ne servirebbero di automobili?</p>',
          shapes: Array.from({ length: 6 }, (_, k) => [-0.3, 0.3].map((z) => ({ t: 'group', pos: [-2.5 + k * 0.6, 0.66, z], shapes: [ { t: 'box', s: [0.28, 0.1, 0.36], pos: [0, 0.22, 0] }, { t: 'box', s: [0.08, 0.5, 0.36], pos: [-0.12, 0.47, 0] } ] }))).flat() },
        { id: 'pantografo', name: 'Pantografo', color: '#475569', pos: [-1.45, 1.92, 0], explode: [0, 1.6, 0],
          info: '<p>È il "braccio" snodato sul tetto che <b>striscia contro il filo</b> e raccoglie la corrente. Una molla lo spinge sempre verso l\'alto, così non perde mai il contatto.</p>',
          more: '<p>Lo strisciante in cima è di <b>grafite</b>, come la mina di una matita: conduce bene e scivola sul filo di rame. Il filo è montato a zig-zag, così lo strisciante si consuma in modo uniforme.</p>',
          anim: { type: 'move', dir: [0, 1, 0], amp: 0.02, wave: 'sin', rate: 1.5 },
          shapes: [ { t: 'box', s: [0.5, 0.06, 0.5], pos: [0, 0.03, 0], color: '#64748b' }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, 0.15] }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, -0.15] },
            { t: 'pipe', r: 0.025, n: 8, pts: [[-0.2, 0.12, 0], [0.45, 0.48, 0]] }, { t: 'pipe', r: 0.02, n: 8, pts: [[0.45, 0.48, 0], [0.0, 0.83, 0]] },
            { t: 'pipe', r: 0.012, n: 6, pts: [[-0.1, 0.12, 0], [0.4, 0.45, 0]], color: '#94a3b8' },
            { t: 'box', s: [0.1, 0.04, 0.8], pos: [0, 0.85, 0], color: '#1f2937' }, { t: 'box', s: [0.06, 0.03, 0.8], pos: [0, 0.875, 0], color: '#a3a3a3' } ] },
        { id: 'catenaria', name: 'Linea aerea (catenaria)', label: 'Catenaria', color: '#b45309', explode: [0, 1.9, 0],
          info: '<p>Sopra i binari corre un <b>filo di rame</b> sempre in tensione elettrica, appeso a pali. Sull\'alta velocità la tensione è di <b>25 000 volt</b>: pericolosissimo, mai avvicinarsi!</p>',
          more: '<p>Il filo di contatto è appeso con tanti piccoli "pendini" a una fune più in alto (la <b>catenaria</b> vera e propria, che prende il nome dalla curva che fa una catena appesa). Così resta perfettamente orizzontale. In Italia le linee normali usano 3000 V in corrente continua.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-4.2, 2.79, 0], [4.2, 2.79, 0]] },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-4.2, 3.32, 0], [-3.4, 3.35, 0], [0, 3.05, 0], [3.4, 3.35, 0], [4.2, 3.32, 0]], color: '#78716c' },
            ...[-2.4, -1.2, 0, 1.2, 2.4].map((x) => ({ t: 'pipe', r: 0.006, n: 4, pts: [[x, 2.8, 0], [x, 3.12 + 0.1 * (Math.abs(x) / 2.4) ** 2, 0]], color: '#78716c' })),
            ...POLES.flatMap((x) => [ { t: 'cyl', r: 0.07, h: 3.6, n: 12, pos: [x, 1.7, -1.15], color: '#6b7280' }, { t: 'pipe', r: 0.03, n: 6, pts: [[x, 3.35, -1.15], [x, 3.35, 0.1]], color: '#6b7280' },
              { t: 'cyl', r: 0.05, h: 0.2, n: 10, pos: [x, 3.2, 0], color: '#f8fafc' } ]) ] },
        { id: 'trasformatore', name: 'Trasformatore', color: '#78350f', pos: [-0.35, 0.47, 0], explode: [0, -0.7, 0.6],
          info: '<p>La corrente del filo è troppo "forte" per i motori. Il <b>trasformatore</b>, un grosso blocco di ferro e rame sotto il pavimento, abbassa la tensione da 25 000 a poche migliaia di volt.</p>',
          more: '<p>Un trasformatore ha due bobine avvolte sullo stesso nucleo di ferro: la corrente alternata nella prima crea un campo magnetico che cambia, e questo "induce" corrente nella seconda. Con meno spire, la tensione è più bassa. Pesa diverse tonnellate!</p>',
          shapes: [ { t: 'box', s: [0.9, 0.3, 0.8] }, ...[-0.25, 0, 0.25].map((x) => ({ t: 'cyl', r: 0.1, h: 0.3, n: 16, pos: [x, 0.02, 0.0], color: '#b45309' })), { t: 'box', s: [0.95, 0.03, 0.85], pos: [0, 0.16, 0], color: '#92400e' } ] },
        { id: 'convertitore', name: 'Convertitore elettronico', label: 'Convertitore', color: '#0f766e', pos: [0.65, 0.47, 0], explode: [0.2, -0.7, 0.6],
          info: '<p>È il "cervello di potenza": un armadio pieno di elettronica che dosa quanta corrente mandare ai motori. Più corrente = più velocità.</p>',
          more: '<p>Il convertitore (<b>inverter</b>) trasforma la corrente in una corrente alternata a frequenza variabile: cambiando la frequenza cambia la velocità dei motori. Usa transistor di potenza (IGBT) che si accendono e spengono migliaia di volte al secondo.</p>',
          shapes: [ { t: 'box', s: [0.75, 0.28, 0.8] }, { t: 'box', s: [0.6, 0.12, 0.01], pos: [0, 0.03, 0.405], color: '#134e4a', decal: 1 },
            { t: 'box', s: [0.06, 0.04, 0.01], pos: [-0.22, 0.05, 0.41], color: '#4ade80', decal: 2, anim: { type: 'blink', color: '#dcfce7', wave: 'square', rate: 3 } } ] },
        { id: 'motori', name: 'Motori di trazione', label: 'Motori', color: '#2563eb', explode: [0, -0.4, 1.0],
          info: '<p>Sono i <b>motori elettrici</b> che fanno girare le ruote, uno per ogni asse. Insieme sviluppano migliaia di cavalli, senza fumo e quasi senza rumore.</p>',
          more: '<p>Un treno ad alta velocità ha una potenza di circa <b>10 000 kW</b>, come 100 automobili. Molti treni moderni hanno i motori distribuiti sotto più carrozze: si accelera meglio e le ruote slittano meno.</p>',
          shapes: AXLES.map((x) => ({ t: 'group', pos: [x + (x < 0 ? 0.32 : -0.32), RW + 0.04, 0.05], shapes: [ { t: 'cyl', r: 0.15, h: 0.5, n: 20, rot: [90, 0, 0] }, { t: 'cyl', r: 0.08, h: 0.12, n: 14, rot: [90, 0, 0], pos: [0, 0, 0.3], color: '#475569' },
            { t: 'group', pos: [0, 0, -0.27], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR * 3 }, shapes: [ { t: 'cyl', r: 0.1, h: 0.03, n: 14, rot: [90, 0, 0], color: '#93c5fd' }, { t: 'box', s: [0.18, 0.03, 0.035], color: '#1e3a8a' } ] } ] })) },
        { id: 'carrelli', name: 'Carrelli', color: '#374151', explode: [0, -0.4, 0],
          info: '<p>Sotto la cassa ci sono due <b>carrelli</b>, ognuno con 4 ruote. Possono girare un po\' rispetto alla cassa, così il treno affronta le curve senza scivolare fuori.</p>',
          more: '<p>Molle d\'acciaio e cuscini d\'aria (sospensioni pneumatiche) separano i carrelli dalla cassa: i passeggeri non sentono le piccole irregolarità del binario, anche a 300 km/h.</p>',
          shapes: [ bogie(-2.15), bogie(1.55) ] },
        { id: 'ruote', name: 'Ruote (sale montate)', label: 'Ruote', color: '#9ca3af', explode: [0, -0.4, 0],
          info: '<p>Le ruote sono d\'<b>acciaio</b>, attaccate a coppie su un asse rigido. Hanno un <b>bordino</b> sporgente dalla parte interna che impedisce di uscire dal binario.</p>',
          more: '<p>Le ruote non sono cilindriche ma leggermente <b>coniche</b>: in curva la ruota esterna scivola un po\' verso fuori e "corre" su un diametro più grande. Così fa più strada della ruota interna anche se sono attaccate allo stesso asse. Geniale!</p>',
          shapes: AXLES.map(wheelset) },
        { id: 'freni', name: 'Freni a disco', label: 'Freni', color: '#f97316', explode: [0, -0.4, -0.8],
          info: '<p>Su ogni asse ci sono dei <b>dischi</b> d\'acciaio: le pinze li stringono e li fanno rallentare. Ma prima di tutto frena il motore elettrico!</p>',
          more: '<p>Frenando, i motori funzionano al contrario, come <b>generatori</b>: trasformano il movimento in elettricità e la rimandano nel filo, dove la usano altri treni (frenatura a recupero). A 300 km/h servono più di 3 km per fermarsi!</p>',
          shapes: AXLES.flatMap((x) => [ { t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [-0.15, 0.15].map((z) => ({ t: 'tube', r: 0.2, ri: 0.06, h: 0.03, n: 22, rot: [90, 0, 0], pos: [0, 0, z] })) },
            { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, -0.15], color: '#1f2937' }, { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, 0.15], color: '#1f2937' } ]) },
        { id: 'binari', name: 'Binari e traversine', label: 'Binari', color: '#9ca3af', explode: [0, -0.8, 0],
          info: '<p>Due rotaie d\'acciaio, sempre alla stessa distanza (<b>1435 mm</b>), fissate su traversine di cemento appoggiate sulla <b>massicciata</b> di pietre.</p>',
          more: '<p>Ruota d\'acciaio su rotaia d\'acciaio: la parte che si tocca è grande come una moneta! L\'attrito di rotolamento è bassissimo, circa 5 volte meno che per un\'auto sull\'asfalto. Per questo il treno consuma pochissima energia per ogni passeggero.</p>',
          shapes: [ { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, 0.43] }, { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, -0.43] },
            { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, 0.43], color: '#6b7280' }, { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, -0.43], color: '#6b7280' },
            { t: 'group', anim: { type: 'move', dir: [-1, 0, 0], amp: SL, wave: 'saw', rate: SPEED / SL }, shapes: sleepers },
            { t: 'extrude', d: 8.4, pts: [[-1.05, -0.36], [1.05, -0.36], [0.78, -0.1], [-0.78, -0.1]], rot: [0, 90, 0], color: '#a8a29e' } ] },
        { id: 'corrente', name: 'Corrente elettrica', label: 'Corrente', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>La corrente scende dal filo attraverso il pantografo, passa dal trasformatore e dal convertitore, arriva ai motori e poi torna alla centrale attraverso le <b>ruote e le rotaie</b>.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 5, m: 8, pos: CUR[0], anim: { type: 'path', pts: CUR, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'fari', name: 'Fari', color: '#fef9c3', explode: [0.5, 0, 0],
          info: '<p>Davanti il treno ha fari <b>bianchi</b>, dietro luci <b>rosse</b>: così si capisce da lontano in che direzione viaggia.</p>',
          shapes: [-0.3, 0.3].map((z) => ({ t: 'box', s: [0.05, 0.07, 0.14], pos: [3.28, 0.95, z], rot: [0, 0, 70], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.8 } })) }
      ]
    },
    steps: [
      { icon: '🚄', title: 'Un treno elettrico', explode: 0,
        html: '<p>I treni ad alta velocità non hanno serbatoio: prendono l\'<b>elettricità</b> da un filo sopra i binari e la usano per far girare dei <b>motori elettrici</b> collegati alle ruote.</p><p>Così possono viaggiare a 300 km/h senza inquinare l\'aria lungo il percorso.</p>' },
      { icon: '⚡', title: 'Dal filo al pantografo', focus: ['catenaria', 'pantografo', 'corrente'], explode: 0, view: { rx: 0.2, ry: -0.9 },
        html: '<p>Il <b>pantografo</b> è un braccio snodato sul tetto: una molla lo spinge contro il <b>filo di rame</b> della linea aerea, che ha una tensione di 25 000 volt.</p><p class="tip">⚠️ Mai salire sui vagoni o avvicinarsi ai fili della ferrovia: la corrente può "saltare" anche senza toccare!</p>' },
      { icon: '🔁', title: 'Trasformatore e convertitore', focus: ['trasformatore', 'convertitore', 'corrente'], explode: 0.4, view: { rx: 0.1, ry: -0.35 },
        html: '<p>Il <b>trasformatore</b> abbassa la tensione; il <b>convertitore</b>, pieno di elettronica, decide quanta corrente mandare ai motori. È come l\'acceleratore di un\'auto.</p>' },
      { icon: '⚙️', title: 'I motori fanno girare le ruote', focus: ['motori', 'ruote', 'carrelli'], explode: 0.35, view: { rx: 0.25, ry: -0.45 },
        html: '<p>Un <b>motore elettrico</b> per ogni asse fa girare le ruote attraverso degli ingranaggi. Le ruote spingono indietro le rotaie… e il treno va avanti!</p><p>I <b>carrelli</b> possono ruotare sotto la cassa per seguire le curve.</p>' },
      { icon: '🛤️', title: 'Acciaio su acciaio', focus: ['ruote', 'binari'], explode: 0, zoom: 1.2, view: { rx: 0.25, ry: -1.35 },
        html: '<p>Ruote e rotaie sono d\'<b>acciaio</b> durissimo: si deformano pochissimo e l\'attrito è molto basso. Per spostare una tonnellata in treno serve molta meno energia che in camion.</p><p>Il <b>bordino</b> interno delle ruote impedisce al treno di uscire dal binario.</p>' },
      { icon: '🛑', title: 'Frenare… e recuperare energia', focus: ['freni', 'motori', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.6 },
        html: '<p>Per frenare, i <b>motori</b> diventano <b>generatori</b>: il movimento torna elettricità e viene rimandata nel filo. Poi intervengono i <b>freni a disco</b>.</p><p class="tip">📏 Un treno a 300 km/h ha bisogno di più di 3 km per fermarsi: per questo non può frenare all\'ultimo momento!</p>' },
      { icon: '🧑‍✈️', title: 'In cabina e il muso aerodinamico', focus: ['cabina', 'cassa', 'fari'], explode: 0, view: { rx: 0.2, ry: -1.0 },
        html: '<p>In <b>cabina</b> il macchinista controlla velocità, freni e segnali sugli schermi. Il treno non ha volante: lo guidano i binari.</p><p>Il <b>muso</b> lungo e liscio taglia l\'aria: ad alta velocità vincere la resistenza dell\'aria è la fatica più grande.</p>' }
    ],
    facts: [
      { icon: '🚂', title: 'Il primo treno italiano', html: 'La prima ferrovia italiana fu la <b>Napoli–Portici</b>, inaugurata nel 1839: 7 km percorsi da una locomotiva a vapore.' },
      { icon: '🏁', title: 'Record di velocità', html: 'Nel 2007 un treno francese ha raggiunto <b>574,8 km/h</b> su rotaia. Il treno a levitazione magnetica giapponese ha superato i 600 km/h.' },
      { icon: '🌱', title: 'Il più "verde"', html: 'Per persona e per chilometro, il treno emette fino a <b>10 volte meno CO₂</b> dell\'auto e molte volte meno dell\'aereo.' },
      { icon: '🔧', title: 'Le Frecce', html: 'Il Frecciarossa unisce Torino, Milano, Bologna, Firenze, Roma e Napoli: da Milano a Roma ci vogliono circa 3 ore, contro le oltre 6 ore di un tempo.' }
    ],
    quiz: [
      { type: 'mc', q: 'Da dove prende l\'energia un treno ad alta velocità?', options: ['Dal serbatoio di gasolio', 'Da un filo elettrico sopra i binari', 'Da pannelli solari sul tetto', 'Dal carbone'], answer: 1, explain: 'Il pantografo raccoglie la corrente dalla linea aerea (catenaria).' },
      { type: 'mc', q: 'Come si chiama il braccio snodato sul tetto del treno?', options: ['Pantografo', 'Carrello', 'Trasformatore', 'Bordino'], answer: 0, explain: 'Il pantografo striscia sul filo e porta la corrente nel treno.' },
      { type: 'tf', q: 'Quando frena, il treno può rimandare elettricità nella linea.', answer: true, explain: 'I motori funzionano da generatori: è la frenatura a recupero.' },
      { type: 'mc', q: 'Che cosa impedisce alle ruote di uscire dal binario?', options: ['Una calamita', 'Il bordino sporgente delle ruote', 'Il macchinista con il volante', 'La catenaria'], answer: 1, explain: 'Il bordino sul lato interno della ruota tiene il treno sulle rotaie.' },
      { type: 'mc', q: 'Perché il treno consuma poca energia per ogni passeggero?', options: ['Perché va piano', 'Perché ruote e rotaie d\'acciaio hanno pochissimo attrito', 'Perché non ha motori', 'Perché è leggero come una bici'], answer: 1, explain: 'Acciaio su acciaio: l\'attrito di rotolamento è molto basso e il treno porta tante persone insieme.' },
      { type: 'order', q: 'Metti in ordine il viaggio della corrente', items: ['Filo della linea aerea', 'Pantografo', 'Trasformatore', 'Convertitore', 'Motori', 'Ruote e rotaie'], explain: 'Dal filo al pantografo, poi trasformatore e convertitore, i motori e infine il ritorno attraverso ruote e rotaie.' }
    ]
  });
})();
