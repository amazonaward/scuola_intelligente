/* La pala eolica (aerogeneratore ad asse orizzontale). Il vento arriva da −x; il rotore gira intorno all'asse x.
   La navicella è semitrasparente per vedere albero, moltiplicatore e generatore. */
(function () {
  const AX = [0, 0, -90], HY = 6.25, HX = -1.05;                  // altezza del mozzo e posizione del rotore
  const blade = (a) => ({ t: 'group', rot: [a, 0, 0], shapes: [ { t: 'group', rot: [0, 78, 0], shapes: [
    { t: 'cyl', r: 0.11, h: 0.45, n: 16, pos: [0, 0.45, 0], color: '#e5e7eb' },
    { t: 'extrude', d: 0.07, smooth: true, pts: [[-0.08, 0.6], [0.14, 0.62], [0.27, 0.95], [0.25, 1.6], [0.18, 2.6], [0.1, 3.5], [0.04, 3.95], [-0.02, 3.98], [-0.05, 3.2], [-0.07, 2.0], [-0.09, 1.1]], color: '#f8fafc' },
    { t: 'extrude', d: 0.075, pts: [[0.0, 3.6], [0.07, 3.6], [0.04, 3.95], [-0.02, 3.98], [-0.03, 3.6]], color: '#ef4444' } ] } ] });
  const gear = (r, teeth, col) => [ { t: 'cyl', r, h: 0.06, n: 28, color: col }, { t: 'cyl', r: r * 0.3, h: 0.08, n: 14, color: '#1f2937' } ]
    .concat(Array.from({ length: teeth }, (_, k) => ({ t: 'group', rot: [0, k * 360 / teeth, 0], shapes: [ { t: 'box', s: [0.05, 0.06, 0.04], pos: [r + 0.02, 0, 0], color: col } ] })));
  const R1 = 0.22, R2 = 0.09, GY = HY, GX = 0.68;                 // ingranaggi del moltiplicatore
  const wind = Array.from({ length: 16 }, (_, k) => {
    const a = k * 2.4, r = 0.6 + (k % 4) * 0.8, y = HY + r * Math.sin(a), z = r * Math.cos(a);
    return { t: 'sphere', r: 0.05, n: 6, m: 8, scale: [4, 1, 1], pos: [-5, y, z], color: '#bae6fd', anim: [ { type: 'path', pts: [[-5, y, z], [-1.3, y, z], [2.6, y * 0.98 + 0.12, z * 1.1]], wave: 'saw', rate: 0.45, phase: k / 16 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.98, ramp: 0.1, rate: 0.45, phase: k / 16 } ] };
  });
  const POWER = [[1.05, HY + 0.2, 0], [1.0, HY - 0.3, 0.05], [0.05, 5.8, 0.05], [0.05, 0.5, 0.05], [0.4, 0.15, 0.4], [1.1, 0.25, 0.9], [2.0, 0.05, 1.6], [3.2, 0.05, 2.4]];

  LIBRARY({
    id: 'pala-eolica',
    title: 'La pala eolica',
    intro: 'Una pala eolica (o <b>aerogeneratore</b>) è un mulino a vento moderno: il vento fa girare le sue grandi pale e un <b>generatore</b> trasforma il movimento in <b>elettricità</b>, senza bruciare nulla e senza inquinare l\'aria.',
    model: {
      rx: 0.2, ry: -0.75, speed: 0.4, height: 500, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'pale', name: 'Pale', color: '#f8fafc', pos: [HX, HY, 0], explode: [-1.4, 0, 0],
          anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>Tre lunghe pale a forma di <b>ala d\'aereo</b>. Il vento, passando sulla loro superficie curva, le spinge di lato e le fa girare.</p>',
          more: '<p>Le pale moderne sono lunghe più di <b>80 metri</b> e fatte di fibra di vetro e resine, leggere e robuste. La punta può superare i 300 km/h anche se il rotore sembra girare piano. Perché tre pale? È il compromesso migliore tra efficienza, peso e stabilità.</p>',
          shapes: [ blade(0), blade(120), blade(240) ] },
        { id: 'mozzo', name: 'Mozzo e ogiva', label: 'Mozzo', color: '#e5e7eb', pos: [HX, HY, 0], explode: [-1.0, 0, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>Il "centro" del rotore a cui sono attaccate le pale. Il cono davanti, l\'<b>ogiva</b>, protegge i meccanismi e fende l\'aria.</p>',
          more: '<p>Dentro il mozzo ci sono i motori del <b>passo</b>: ruotano ogni pala sul suo asse. Con vento forte le pale si girano "di taglio" per non far correre troppo il rotore; con vento troppo forte (oltre 90 km/h) la turbina si ferma per sicurezza.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pts: [[0.32, 0.12], [0.33, 0], [0.3, -0.18], [0.2, -0.38], [0.08, -0.5], [0, -0.53]] }, { t: 'cyl', r: 0.3, h: 0.25, n: 30, rot: AX, pos: [0.22, 0, 0], color: '#cbd5e1' } ] },
        { id: 'navicella', name: 'Navicella', color: '#f1f5f9', alpha: 0.32, explode: [0.3, 1.1, 0],
          info: '<p>La "casetta" in cima alla torre: contiene tutte le macchine che trasformano la rotazione in elettricità. È grande come un furgone e i tecnici ci entrano per la manutenzione.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pos: [-0.15, HY, 0], pts: [[0.26, -0.72], [0.4, -0.62], [0.46, -0.4], [0.47, 0], [0.47, 1.25], [0.43, 1.45], [0.3, 1.55], [0, 1.57]], ds: true },
            { t: 'box', s: [0.25, 0.12, 0.06], pos: [0.95, HY + 0.47, 0], color: '#94a3b8', alpha: 1 } ] },
        { id: 'albero', name: 'Albero lento', label: 'Albero lento', color: '#94a3b8', explode: [-0.2, 0.6, 0.6],
          info: '<p>Un grosso cilindro d\'acciaio collegato al mozzo: gira lento, insieme alle pale (circa <b>10–15 giri al minuto</b>), ma con una forza enorme.</p>',
          shapes: [ { t: 'cyl', r: 0.18, h: 0.18, n: 24, rot: AX, pos: [-0.55, HY, 0], color: '#475569' },
            { t: 'group', pos: [-0.25, HY, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 }, shapes: [ { t: 'cyl', r: 0.08, h: 1.1, n: 18, rot: AX }, { t: 'box', s: [0.6, 0.02, 0.17], pos: [0, 0.08, 0], color: '#facc15', decal: 1 } ] } ] },
        { id: 'moltiplicatore', name: 'Moltiplicatore di giri', label: 'Moltiplicatore', color: '#475569', explode: [0.1, 0.9, 0.9],
          info: '<p>Una scatola di <b>ingranaggi</b>, come il cambio di una bicicletta: una ruota grande ne fa girare una piccola molto più veloce. Così i pochi giri delle pale diventano tanti giri per il generatore.</p>',
          more: '<p>Il moltiplicatore aumenta la velocità di circa <b>100 volte</b>: da 15 a 1500 giri al minuto. Alcune turbine moderne non ce l\'hanno: usano generatori enormi pieni di magneti che funzionano anche girando piano ("direct drive").</p>',
          shapes: [ { t: 'box', s: [0.5, 0.52, 0.55], pos: [0.36, HY, 0] },
            { t: 'group', pos: [GX, GY, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: 0.5 }, shapes: gear(R1, 18, '#f59e0b') },
            { t: 'group', pos: [GX, GY + R1 + R2 + 0.02, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: -0.5 * R1 / R2 }, shapes: gear(R2, 8, '#fbbf24') } ] },
        { id: 'freno', name: 'Freno a disco', label: 'Freno', color: '#9ca3af', explode: [0.4, 0.6, 1.0],
          info: '<p>Un freno a disco, come quello delle moto, che ferma il rotore per la manutenzione o in caso di emergenza.</p>',
          shapes: [ { t: 'group', pos: [0.86, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.13, h: 0.03, n: 24, rot: AX }, { t: 'cyl', r: 0.03, h: 0.4, n: 10, rot: AX, pos: [0.15, 0, 0], color: '#64748b' } ] },
            { t: 'box', s: [0.08, 0.08, 0.1], pos: [0.86, GY + R1 + R2 + 0.15, 0], color: '#dc2626' } ] },
        { id: 'generatore', name: 'Generatore', color: '#1d4ed8', explode: [0.9, 0.9, 0.5],
          info: '<p>Il cuore elettrico della pala: dentro, dei <b>magneti</b> girano vicino a bobine di filo di rame. Il movimento dei magneti fa nascere la <b>corrente elettrica</b> nel filo.</p>',
          more: '<p>È il principio dell\'<b>induzione elettromagnetica</b>, scoperto da Michael Faraday nel 1831: lo stesso della dinamo della bicicletta. Una grande turbina produce 3–15 megawatt, abbastanza per migliaia di case.</p>',
          shapes: [ { t: 'cyl', r: 0.19, h: 0.42, n: 28, rot: AX, pos: [1.2, GY + R1 + R2 + 0.02, 0] }, { t: 'cyl', r: 0.2, h: 0.04, n: 28, rot: AX, pos: [1.0, GY + R1 + R2 + 0.02, 0], color: '#94a3b8' },
            { t: 'group', pos: [1.43, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.12, h: 0.03, n: 6, rot: AX, color: '#e2e8f0' }, { t: 'box', s: [0.035, 0.2, 0.03], pos: [0.02, 0, 0], color: '#b45309' } ] },
            { t: 'box', s: [0.3, 0.3, 0.2], pos: [1.1, HY - 0.2, 0.2], color: '#334155' } ] },
        { id: 'anemometro', name: 'Anemometro e banderuola', label: 'Anemometro', color: '#e2e8f0', explode: [0.5, 1.4, 0],
          info: '<p>Sul tetto della navicella un <b>anemometro</b> misura la velocità del vento e una <b>banderuola</b> la direzione. Il computer della turbina decide così come orientarsi e quando partire.</p>',
          shapes: [ { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.0, HY + 0.65, -0.1] }, { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.25, HY + 0.65, 0.1] },
            { t: 'group', pos: [1.0, HY + 0.86, -0.1], anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [0, 120, 240].map((a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'cyl', r: 0.012, h: 0.2, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 8, m: 10, hemi: true, rot: [0, 0, 90], pos: [0.2, 0, 0], color: '#f8fafc' } ] })) },
            { t: 'group', pos: [1.25, HY + 0.86, 0.1], anim: { type: 'swing', axis: 'y', amp: 15, rate: 0.4 }, shapes: [ { t: 'cyl', r: 0.012, h: 0.3, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'extrude', pts: [[0.2, 0], [0.35, 0.1], [0.35, -0.06]], d: 0.01, color: '#ef4444' } ] } ] },
        { id: 'imbardata', name: 'Sistema di imbardata', label: 'Imbardata', color: '#64748b', explode: [0, 0.4, 0],
          info: '<p>Una grande corona dentata con dei motori tra torre e navicella: fa <b>girare tutta la navicella</b> per mettere le pale sempre di fronte al vento, come una banderuola.</p>',
          shapes: [ { t: 'torus', R: 0.3, r: 0.05, n: 30, m: 8, pos: [0, HY - 0.45, 0] }, { t: 'cyl', r: 0.33, h: 0.08, n: 30, pos: [0, HY - 0.5, 0], color: '#475569' } ]
            .concat([0.6, -0.6].map((x) => ({ t: 'group', pos: [x * 0.6, HY - 0.3, 0.25], shapes: [ { t: 'cyl', r: 0.06, h: 0.22, n: 12, color: '#334155' }, { t: 'group', pos: [0, -0.14, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'cyl', r: 0.05, h: 0.05, n: 8, color: '#facc15' } ] } ] }))) },
        { id: 'torre', name: 'Torre', color: '#e5e7eb', explode: [0, 0, 0],
          info: '<p>Una torre d\'acciaio a forma di tubo, alta come un palazzo di 30–40 piani. Più si sale, più il vento è forte e regolare: per questo le pale stanno così in alto.</p>',
          more: '<p>Dentro la torre ci sono una scala, a volte un piccolo ascensore, e i cavi che portano giù l\'elettricità. Le torri più alte superano i 160 metri.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0, 0.1], [0.32, 0.1], [0.29, 2.0], [0.24, 4.0], [0.19, 5.8], [0, 5.8]] },
            { t: 'box', s: [0.18, 0.4, 0.04], pos: [0, 0.4, 0.31], rot: [-1, 0, 0], color: '#64748b', decal: 1 }, { t: 'torus', R: 0.3, r: 0.02, n: 30, m: 4, pos: [0, 2.0, 0], color: '#cbd5e1' }, { t: 'torus', R: 0.24, r: 0.02, n: 30, m: 4, pos: [0, 4.0, 0], color: '#cbd5e1' } ] },
        { id: 'fondazione', name: 'Fondazione', color: '#a8a29e', explode: [0, -0.6, 0],
          info: '<p>Sotto terra c\'è un enorme "piede" di <b>cemento armato</b> che tiene la torre dritta anche con le tempeste. Pesa migliaia di tonnellate.</p>',
          shapes: [ { t: 'cyl', r: 1.2, r2: 0.5, h: 0.35, n: 8, pos: [0, -0.08, 0] }, { t: 'cyl', r: 2.4, h: 0.06, n: 36, pos: [0, -0.04, 0], color: '#65a30d' } ] },
        { id: 'trasformatore', name: 'Trasformatore e rete', label: 'Trasformatore', color: '#64748b', explode: [0.7, -0.2, 0.7],
          info: '<p>Alla base della torre un <b>trasformatore</b> alza la tensione dell\'elettricità, così può viaggiare lontano nei cavi della rete elettrica fino alle case, alle scuole e alle fabbriche.</p>',
          shapes: [ { t: 'box', s: [0.55, 0.5, 0.45], pos: [1.15, 0.27, 0.95] }, { t: 'box', s: [0.6, 0.05, 0.5], pos: [1.15, 0.54, 0.95], color: '#475569' } ]
            .concat([0, 1, 2, 3, 4].map((k) => ({ t: 'box', s: [0.02, 0.36, 0.5], pos: [0.86, 0.27, 0.95 - 0.2 + k * 0.1], color: '#94a3b8' })), [ { t: 'box', s: [0.1, 0.12, 0.02], pos: [1.15, 0.33, 1.18], color: '#facc15', decal: 1 } ]) },
        { id: 'corrente', name: 'Corrente elettrica', label: 'Elettricità', color: '#facc15', explode: [0, 0, 0], chip: true,
          info: '<p>L\'elettricità prodotta dal generatore scende lungo i <b>cavi</b> dentro la torre, passa dal trasformatore e va nella rete elettrica.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: POWER, color: '#1f2937' } ].concat(Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: POWER[0], color: '#facc15', anim: { type: 'path', pts: POWER, wave: 'saw', rate: 0.25, phase: k / 10 } }))) },
        { id: 'vento', name: 'Vento', color: '#bae6fd', explode: [0, 0, 0], chip: true,
          info: '<p>Il vento è <b>aria in movimento</b>: nasce perché il Sole scalda la Terra in modo diverso e l\'aria calda sale mentre quella fredda prende il suo posto. Il vento ha <b>energia di movimento</b> (energia cinetica).</p>',
          more: '<p>Se la velocità del vento <b>raddoppia</b>, l\'energia che porta diventa <b>8 volte</b> più grande. Una turbina non può catturare tutta l\'energia del vento: al massimo il 59 % (limite di Betz), le migliori arrivano al 50 %.</p>',
          shapes: wind }
      ]
    },
    steps: [
      { icon: '🌬️', title: 'L\'energia del vento', explode: 0,
        html: '<p>Il vento è aria che si muove, e tutto ciò che si muove ha <b>energia</b>. Da secoli i mulini a vento la usano per macinare il grano; oggi le pale eoliche la trasformano in <b>elettricità</b>.</p><p class="tip">☀️ Il vento esiste grazie al Sole, che scalda l\'aria in modo diverso nei vari posti.</p>' },
      { icon: '✈️', title: 'Pale come ali d\'aereo', focus: ['pale', 'mozzo', 'vento'], view: { rx: 0.1, ry: -1.2 },
        html: '<p>Le <b>pale</b> hanno la forma di un\'ala d\'aereo. Il vento che scorre sulla loro superficie crea una spinta di lato che le fa <b>girare</b>, proprio come la portanza che fa volare un aereo.</p>' },
      { icon: '🐢', title: 'Lente ma fortissime', focus: ['mozzo', 'albero', 'navicella'], view: { rx: 0.25, ry: -0.5 }, zoom: 1.8,
        html: '<p>Il rotore gira piano, circa 15 giri al minuto, ma con una forza enorme. Il movimento passa all\'<b>albero lento</b>, un grosso cilindro d\'acciaio dentro la <b>navicella</b>.</p>' },
      { icon: '⚙️', title: 'Il moltiplicatore', focus: ['moltiplicatore', 'albero', 'freno'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.1,
        html: '<p>Gli <b>ingranaggi</b> del moltiplicatore funzionano come i pignoni di una bicicletta: la ruota grande fa girare velocissima quella piccola. Da 15 giri si arriva a circa <b>1500 giri al minuto</b>.</p>' },
      { icon: '🧲', title: 'Il generatore fa la corrente', focus: ['generatore', 'moltiplicatore', 'freno'], view: { rx: 0.25, ry: -0.9 }, zoom: 2.1,
        html: '<p>Nel <b>generatore</b> dei magneti girano accanto a bobine di filo di rame: il movimento fa nascere la <b>corrente elettrica</b>. È come la dinamo della bicicletta, ma enorme!</p>' },
      { icon: '🧭', title: 'Sempre di fronte al vento', focus: ['anemometro', 'imbardata', 'navicella'], view: { rx: 0.4, ry: -0.6 }, zoom: 1.8,
        html: '<p>L\'<b>anemometro</b> misura il vento e la banderuola la sua direzione. I motori di <b>imbardata</b> girano tutta la navicella per mettere le pale controvento.</p>' },
      { icon: '🔌', title: 'Dalla pala alla presa di casa', focus: ['corrente', 'torre', 'trasformatore', 'fondazione'], view: { rx: 0.2, ry: -0.6 },
        html: '<p>La corrente scende lungo i cavi nella <b>torre</b>, il <b>trasformatore</b> alza la tensione e la rete elettrica la porta fino alle nostre case.</p><p class="tip">🌍 L\'energia eolica è <b>rinnovabile</b>: il vento non finisce e non produce fumo né CO₂.</p>' }
    ],
    facts: [
      { icon: '📏', title: 'Giganti', html: 'Le turbine più grandi sono alte più di <b>250 metri</b> (quasi come la Tour Eiffel) e un solo giro di pale può alimentare una casa per due giorni.' },
      { icon: '🌊', title: 'In mezzo al mare', html: 'Molte pale eoliche si costruiscono in mare aperto (<b>offshore</b>), dove il vento è più forte e costante. Anche in Italia, al largo di Taranto, c\'è un parco eolico marino.' },
      { icon: '🏛️', title: 'Una storia antica', html: 'I primi mulini a vento furono costruiti in Persia più di 1000 anni fa. I mulini olandesi servivano anche a pompare l\'acqua fuori dai campi.' },
      { icon: '🔇', title: 'Si fermano da sole', html: 'Con poco vento (meno di 10 km/h) le pale non girano; con vento troppo forte si mettono "di taglio" e si fermano per non rompersi.' },
      { icon: '♻️', title: 'Venti anni di lavoro', html: 'Una pala eolica funziona per circa 20–25 anni. In pochi mesi produce già l\'energia che è servita per costruirla.' }
    ],
    quiz: [
      { type: 'mc', q: 'Che tipo di energia trasforma una pala eolica?', options: ['L\'energia del vento in energia elettrica', 'L\'energia elettrica in vento', 'Il calore in luce', 'Il carbone in elettricità'], answer: 0, explain: 'L\'energia di movimento del vento diventa energia elettrica.' },
      { type: 'mc', q: 'A che cosa serve il moltiplicatore di giri?', options: ['A frenare le pale', 'A far girare il generatore molto più veloce delle pale', 'A misurare il vento', 'A raffreddare la torre'], answer: 1, explain: 'Con gli ingranaggi trasforma 15 giri al minuto in circa 1500.' },
      { type: 'tf', q: 'L\'energia eolica è una fonte rinnovabile.', answer: true, explain: 'Il vento non si esaurisce e la turbina non produce fumi.' },
      { type: 'mc', q: 'Quale parte produce la corrente elettrica?', options: ['La torre', 'L\'anemometro', 'Il generatore', 'La fondazione'], answer: 2, explain: 'Nel generatore i magneti che girano creano corrente nelle bobine di rame.' },
      { type: 'mc', q: 'Perché le pale hanno la forma di un\'ala d\'aereo?', options: ['Per essere più belle', 'Perché il vento che scorre crea una spinta che le fa girare', 'Per pesare di più', 'Per fare ombra'], answer: 1, explain: 'Come la portanza di un\'ala, la spinta laterale fa ruotare il rotore.' },
      { type: 'order', q: 'Metti in ordine il percorso dell\'energia', items: ['Vento', 'Pale', 'Albero lento', 'Moltiplicatore', 'Generatore', 'Rete elettrica'], explain: 'Il vento fa girare le pale; la rotazione viene accelerata e trasformata in elettricità.' }
    ]
  });
})();
