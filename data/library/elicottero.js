/* L'elicottero (monorotore con rotore di coda). Muso verso +x, alto = +y, il rotore principale gira intorno a y sopra la cabina.
   Il rotore principale gira in senso antiorario visto dall'alto; la fusoliera tenderebbe a girare al contrario (coppia). */
(function () {
  const D = Math.PI / 180, MX = 0.25, HUB = 2.08, BL = 3.1;
  const blade = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [
    { t: 'box', s: [BL, 0.035, 0.24], pos: [BL / 2 + 0.2, 0, 0], rot: [6, 0, 0], color: '#1f2937', div: 1 },
    { t: 'box', s: [0.25, 0.04, 0.245], pos: [BL + 0.1, 0, 0], rot: [6, 0, 0], color: '#facc15' },
    { t: 'box', s: [0.4, 0.06, 0.1], pos: [0.28, 0, 0], color: '#6b7280' } ] });
  const skid = (z) => [ { t: 'pipe', r: 0.045, n: 10, curve: true, pts: [[-0.9, 0.0, z], [0.9, 0.0, z], [1.25, 0.06, z], [1.4, 0.2, z]] },
    { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.6, 0.0, z], [0.6, 0.25, z * 0.9], [0.6, 0.45, z * 0.6]] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[-0.5, 0.0, z], [-0.5, 0.25, z * 0.9], [-0.5, 0.45, z * 0.6]] } ];
  /* aria spinta in basso dal rotore */
  const DOWN = Array.from({ length: 16 }, (_, k) => { const a = (k / 16) * 360 * D, r = 0.9 + (k % 3) * 0.7; return { t: 'sphere', r: 0.05, n: 5, m: 8, pos: [MX + r * Math.cos(a), HUB + 0.1, r * Math.sin(a)],
    anim: [{ type: 'move', dir: [0.12 * Math.cos(a), -1, 0.12 * Math.sin(a)], amp: 2.4, wave: 'saw', rate: 0.8, phase: (k * 0.29) % 1 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.8, phase: (k * 0.29) % 1 }] }; });
  const arrow = (pos, rot, len, color) => ({ t: 'group', pos, rot, shapes: [ { t: 'cyl', r: 0.05, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.13, h: 0.28, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    id: 'elicottero',
    title: 'L\'elicottero',
    intro: 'L\'elicottero può salire in verticale, restare <b>fermo in aria</b> e volare in ogni direzione. Il segreto? Le sue "ali" girano! Il <b>rotore</b> fa girare lunghe pale che spingono l\'aria verso il basso.',
    model: {
      rx: 0.3, ry: -0.55, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'fusoliera', name: 'Fusoliera', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>È il corpo dell\'elicottero: dentro ci sono i piloti, i passeggeri o, negli elicotteri di soccorso, la barella e i medici.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, pos: [0.35, 0.95, 0], scale: [1.35, 0.72, 0.68] },
            { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, 0.685], color: '#f8fafc', decal: 1 }, { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, -0.685], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, 0.655], color: '#7dd3fc', decal: 1 }, { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, -0.655], color: '#7dd3fc', decal: 1 },
            { t: 'cyl', r: 0.2, r2: 0.13, h: 0.5, n: 18, rot: [0, 0, 90], pos: [-0.95, 1.05, 0] } ] },
        { id: 'cabina', name: 'Cabina di pilotaggio', label: 'Cabina', color: '#bae6fd', alpha: 0.4, explode: [0.6, 0, 0],
          info: '<p>Una grande "bolla" di plexiglas davanti: i piloti vedono in avanti, di lato e anche sotto i piedi, utilissimo per atterrare in posti difficili.</p>',
          more: '<p>Il pilota usa tre comandi: la leva del <b>collettivo</b> (a sinistra, per salire e scendere), la <b>cloche</b> o ciclico (tra le gambe, per andare avanti, indietro e di lato) e i <b>pedali</b> (per girare il muso, comandando il rotore di coda).</p>',
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 22, pos: [1.15, 1.02, 0], scale: [0.62, 0.55, 0.6] },
            { t: 'box', s: [0.3, 0.35, 0.3], pos: [0.95, 0.75, 0.18], color: '#1f2937', alpha: 1 }, { t: 'box', s: [0.08, 0.4, 0.3], pos: [0.82, 0.95, 0.18], color: '#1f2937', alpha: 1 },
            { t: 'pipe', r: 0.02, n: 6, pts: [[1.25, 0.6, 0.18], [1.2, 0.9, 0.18]], color: '#111827', alpha: 1 } ] },
        { id: 'rotore', name: 'Rotore principale', label: 'Rotore principale', color: '#1f2937', pos: [MX, HUB, 0], explode: [0, 1.2, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 },
          info: '<p>Quattro lunghe <b>pale</b> girano velocissime. Ogni pala ha la forma di un\'ala d\'aereo: girando "taglia" l\'aria, la spinge verso il basso e riceve una spinta verso l\'alto, la <b>portanza</b>.</p>',
          more: '<p>Un aereo deve correre sulla pista perché le ali ricevano aria; l\'elicottero invece fa girare le ali stesse, così può creare portanza <b>da fermo</b>. Le punte delle pale arrivano a circa 700 km/h, poco meno della velocità del suono!</p>',
          shapes: [ { t: 'cyl', r: 0.16, h: 0.16, n: 20, color: '#475569' }, { t: 'cone', r: 0.12, h: 0.14, n: 16, pos: [0, 0.15, 0], color: '#64748b' } ].concat([0, 90, 180, 270].map(blade)) },
        { id: 'piatto', name: 'Piatto oscillante', label: 'Piatto oscillante', color: '#9ca3af', pos: [MX, 1.82, 0], explode: [0.8, 0.8, 0.6],
          info: '<p>È il pezzo più ingegnoso: due dischi sull\'albero del rotore. Inclinandoli o alzandoli, delle aste cambiano l\'<b>inclinazione delle pale</b> mentre girano.</p>',
          more: '<p>Se il piatto <b>sale</b>, tutte le pale si inclinano di più insieme (passo <b>collettivo</b>): più portanza, l\'elicottero sale. Se il piatto si <b>inclina</b>, ogni pala cambia inclinazione durante il giro (passo <b>ciclico</b>): il disco del rotore si inclina e l\'elicottero vola da quella parte.</p>',
          anim: { type: 'swing', axis: 'z', amp: 7, rate: 0.25 },
          shapes: [ { t: 'cyl', r: 0.3, h: 0.05, n: 24, color: '#6b7280' },
            { t: 'group', pos: [0, 0.06, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 }, shapes: [ { t: 'cyl', r: 0.27, h: 0.05, n: 24, color: '#cbd5e1' },
              ...[0, 90, 180, 270].map((a) => ({ t: 'cyl', r: 0.015, h: 0.24, n: 6, pos: [0.24 * Math.cos(a * D), 0.14, -0.24 * Math.sin(a * D)], color: '#f59e0b' })) ] } ] },
        { id: 'albero', name: 'Albero rotore e trasmissione', label: 'Trasmissione', color: '#64748b', explode: [0, 0.5, 0.8],
          info: '<p>Il motore gira velocissimo, ma il rotore deve girare più piano. La <b>trasmissione</b>, una scatola piena di ingranaggi, riduce la velocità e porta il movimento al rotore principale e a quello di coda.</p>',
          more: '<p>Il motore a turbina gira a circa 30 000 giri al minuto, il rotore principale a circa 400: la trasmissione riduce la velocità di circa 75 volte, aumentando la forza (coppia) nello stesso rapporto.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.3, 0.5], pos: [MX, 1.55, 0] }, { t: 'cyl', r: 0.06, h: 0.42, n: 12, pos: [MX, 1.86, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2.2 } },
            { t: 'cyl', r: 0.03, h: 2.8, n: 10, rot: [0, 0, 90], pos: [-1.5, 1.3, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 6 } } ] },
        { id: 'motore', name: 'Motore a turbina', label: 'Turbina', color: '#94a3b8', pos: [-0.45, 1.55, 0], explode: [-0.3, 0.6, -0.9],
          info: '<p>Il motore è una <b>turbina</b>, simile a un piccolo motore d\'aereo: risucchia aria, la comprime, la brucia con il carburante e i gas caldi fanno girare una ruota a palette collegata alla trasmissione.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.75, n: 20, rot: [0, 0, 90] }, { t: 'cyl', r: 0.12, h: 0.25, n: 16, rot: [0, 0, 90], pos: [-0.48, 0.04, 0], color: '#57534e' },
            { t: 'group', pos: [0.38, 0, 0], anim: { type: 'spin', axis: 'x', rate: 8 }, shapes: [0, 45, 90, 135].map((a) => ({ t: 'box', s: [0.02, 0.28, 0.04], rot: [a, 0, 0], color: '#475569' })) },
            { t: 'sphere', r: 0.09, n: 6, m: 10, pos: [-0.62, 0.06, 0], color: '#f97316', alpha: 0.6, anim: { type: 'blink', fade: true, wave: 'sin01', rate: 3 } } ] },
        { id: 'trave-coda', name: 'Trave di coda', label: 'Coda', color: '#dc2626', explode: [-0.6, 0, 0],
          info: '<p>Un lungo tubo che porta il <b>rotore di coda</b> lontano dal centro: più è lontano, più facilmente può contrastare la rotazione della fusoliera, come una leva lunga.</p>',
          shapes: [ { t: 'cyl', r: 0.19, r2: 0.08, h: 2.9, n: 18, rot: [0, 0, 90], pos: [-2.05, 1.18, 0] },
            { t: 'extrude', d: 0.06, pts: [[-3.1, 1.2], [-3.5, 1.2], [-3.78, 1.95], [-3.52, 1.95]], color: '#f8fafc' },
            { t: 'box', s: [0.32, 0.04, 0.8], pos: [-2.9, 1.2, 0], color: '#f8fafc' } ] },
        { id: 'rotore-coda', name: 'Rotore di coda', label: 'Rotore di coda', color: '#f8fafc', pos: [-3.58, 1.62, 0.1], explode: [-0.5, 0, 0.6], anim: { type: 'spin', axis: 'z', rate: 8 },
          info: '<p>La piccola elica in coda spinge l\'aria di lato e impedisce alla fusoliera di girare su sé stessa. Con i pedali il pilota cambia la sua spinta per <b>girare il muso</b>.</p>',
          more: '<p>Quando il motore fa girare il rotore in un verso, la fusoliera "vuole" girare nel verso opposto: è la <b>coppia di reazione</b> (terza legge di Newton). Alcuni elicotteri risolvono il problema con due rotori che girano in versi opposti, senza rotore di coda.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 0.08, n: 14, rot: [90, 0, 0], color: '#475569' },
            { t: 'box', s: [0.06, 0.75, 0.02], rot: [0, 12, 0], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, 0.33, 0], color: '#ef4444' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, -0.33, 0], color: '#ef4444' } ] },
        { id: 'pattini', name: 'Pattini di atterraggio', label: 'Pattini', color: '#6b7280', explode: [0, -0.6, 0],
          info: '<p>Al posto delle ruote molti elicotteri hanno due <b>pattini</b>: semplici, leggeri e adatti ad atterrare anche su prati, neve o rocce.</p>',
          shapes: skid(0.62).concat(skid(-0.62)) },
        { id: 'aria', name: 'Aria spinta in basso', label: 'Aria', color: '#38bdf8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Il rotore spinge verso il basso una grande quantità d\'aria (il "flusso del rotore"): lo senti fortissimo se sei vicino a un elicottero che atterra.</p>',
          shapes: DOWN },
        { id: 'forze', name: 'Portanza e coppia', label: 'Forze', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>La freccia <b>verde</b> è la portanza del rotore. La freccia <b>viola</b> curva mostra come la fusoliera tenderebbe a girare (coppia); la freccia <b>blu</b> in coda è la spinta del rotore di coda che la tiene dritta.</p>',
          shapes: [ arrow([MX, 2.35, 0], [0, 0, 0], 0.8, '#22c55e'),
            { t: 'torus', R: 0.95, r: 0.035, n: 30, m: 6, arc: 250, pos: [MX, 0.95, 0], rot: [0, 40, 0], color: '#a855f7' },
            { t: 'cone', r: 0.1, h: 0.25, n: 12, pos: [MX + 0.95 * Math.cos(40 * D), 0.95, 0.95 * Math.sin(40 * D)], rot: [90, 0, 0], color: '#a855f7' },
            arrow([-3.58, 1.62, -0.1], [-90, 0, 0], 0.7, '#3b82f6') ] }
      ]
    },
    steps: [
      { icon: '🚁', title: 'Ali che girano', explode: 0,
        html: '<p>L\'elicottero non ha ali fisse come l\'aereo: le sue ali sono le lunghe <b>pale del rotore</b>, che girano sopra la cabina. Così può salire in verticale, restare fermo in aria (<b>volo stazionario</b>) e atterrare quasi ovunque.</p>' },
      { icon: '⬆️', title: 'Il rotore spinge l\'aria in basso', focus: ['rotore', 'aria', 'forze'], explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Ogni pala ha la forma di un\'ala. Girando a circa 400 giri al minuto, le pale spingono l\'aria verso il <b>basso</b>; per reazione l\'aria spinge il rotore verso l\'<b>alto</b>: è la <b>portanza</b>.</p><p class="tip">🍁 Hai mai visto un seme d\'acero che scende girando? È un piccolo elicottero naturale!</p>' },
      { icon: '🎛️', title: 'Il piatto oscillante: salire e avanzare', focus: ['piatto', 'rotore', 'albero'], explode: 0.3, zoom: 1.2, view: { rx: 0.25, ry: -0.7 },
        html: '<p>Il pilota non cambia la velocità del rotore: cambia l\'<b>inclinazione delle pale</b>. Il <b>piatto oscillante</b> lo fa mentre girano.</p><p>Tutte le pale più inclinate → più portanza → l\'elicottero <b>sale</b>. Il piatto inclinato in avanti → il rotore si inclina → l\'elicottero <b>avanza</b>.</p>' },
      { icon: '🔄', title: 'Perché serve il rotore di coda', focus: ['rotore-coda', 'trave-coda', 'forze', 'fusoliera'], explode: 0, view: { rx: 0.9, ry: -0.3 },
        html: '<p>Quando il motore fa girare il rotore da una parte, la fusoliera tende a girare dall\'altra parte (freccia viola): azione e reazione!</p><p>Il <b>rotore di coda</b> spinge l\'aria di lato e tiene la fusoliera dritta. Con i <b>pedali</b> il pilota cambia questa spinta e gira il muso.</p>' },
      { icon: '🔥', title: 'Motore e trasmissione', focus: ['motore', 'albero', 'rotore-coda'], explode: 0.35, view: { rx: 0.25, ry: -1.0 },
        html: '<p>Una <b>turbina</b> brucia il carburante e gira velocissima. La <b>trasmissione</b>, piena di ingranaggi, rallenta il movimento e lo porta al rotore principale e, con un lungo albero dentro la coda, al rotore di coda.</p>' },
      { icon: '🏔️', title: 'Cabina, pattini e soccorso', focus: ['cabina', 'fusoliera', 'pattini'], explode: 0, view: { rx: 0.2, ry: -0.2 },
        html: '<p>La <b>cabina</b> a bolla fa vedere in tutte le direzioni, anche in basso. I <b>pattini</b> permettono di posarsi su prati, neve e rocce.</p><p>Per questo gli elicotteri sono preziosi nel <b>soccorso</b> in montagna e in mare, contro gli incendi e per portare i malati in ospedale.</p>' }
    ],
    facts: [
      { icon: '🎨', title: 'La vite aerea di Leonardo', html: 'Verso il 1490 <b>Leonardo da Vinci</b> disegnò una "vite aerea": un\'elica a spirale di tela che avrebbe dovuto avvitarsi nell\'aria. È considerata l\'antenata dell\'elicottero.' },
      { icon: '🇮🇹', title: 'Elicotteri italiani', html: 'In Italia, vicino a Varese, si costruiscono elicotteri esportati in tutto il mondo, usati anche per il soccorso alpino e l\'elisoccorso.' },
      { icon: '🔙', title: 'Anche all\'indietro', html: 'Un elicottero può volare in avanti, all\'indietro, di lato e girare su sé stesso restando fermo nello stesso punto. Nessun aereo normale ci riesce!' },
      { icon: '🪂', title: 'Se il motore si ferma', html: 'Se il motore si spegne, il rotore continua a girare spinto dall\'aria che sale mentre l\'elicottero scende (<b>autorotazione</b>), e il pilota può atterrare dolcemente.' }
    ],
    quiz: [
      { type: 'mc', q: 'Che cosa tiene in aria un elicottero?', options: ['Un pallone pieno di gas', 'Le pale del rotore che spingono l\'aria verso il basso', 'Le ruote', 'Il rotore di coda'], answer: 1, explain: 'Le pale sono ali che girano: spingono l\'aria in basso e ricevono portanza verso l\'alto.' },
      { type: 'mc', q: 'A che cosa serve il rotore di coda?', options: ['A far salire l\'elicottero', 'A impedire che la fusoliera giri su sé stessa', 'A raffreddare il motore', 'A illuminare la pista'], answer: 1, explain: 'Contrasta la coppia di reazione del rotore principale; con i pedali il pilota gira il muso.' },
      { type: 'tf', q: 'Per salire, il pilota aumenta l\'inclinazione di tutte le pale insieme.', answer: true, explain: 'È il passo collettivo: più inclinazione, più portanza.' },
      { type: 'mc', q: 'Quale pezzo cambia l\'inclinazione delle pale mentre girano?', options: ['Il piatto oscillante', 'I pattini', 'La trave di coda', 'La cabina'], answer: 0, explain: 'Il piatto oscillante, con le sue aste, inclina le pale per salire e per avanzare.' },
      { type: 'mc', q: 'Che cosa sa fare un elicottero che un aereo non sa fare?', options: ['Volare con la pioggia', 'Restare fermo in aria', 'Volare di notte', 'Trasportare persone'], answer: 1, explain: 'Il volo stazionario (hovering) è possibile perché le ali girano anche se l\'elicottero è fermo.' }
    ]
  });
})();
