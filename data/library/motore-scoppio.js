/* Il motore a scoppio a 4 tempi (monocilindrico, sezione trasparente).
   Cinematica: manovella r = 0.35, biella l = 1.1, albero motore a y = -1.2. Un ciclo = 2 giri dell'albero (cycle: 2).
   Frazioni del ciclo: 0–0.25 aspirazione, 0.25–0.5 compressione, 0.5–0.75 scoppio, 0.75–1 scarico. */
(function () {
  const R = 0.35, L = 1.1, K = { r: R, l: L };
  const web = (z) => ({ t: 'extrude', d: 0.08, pos: [0, 0, z], color: '#6b7280',
    pts: [[0.15, 0.47], [-0.15, 0.47]].concat(Array.from({ length: 13 }, (_, i) => { const a = Math.PI + (i / 12) * Math.PI; return [0.4 * Math.cos(a), 0.4 * Math.sin(a) - 0.02]; })) });
  const cam = (x, ang) => ({ t: 'group', pos: [x, 1.32, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 0.5 }, shapes: [
    { t: 'cyl', r: 0.045, h: 0.9, n: 14, rot: [90, 0, 0], color: '#9ca3af' },
    { t: 'cyl', r: 0.09, h: 0.1, n: 20, rot: [90, 0, 0] },
    { t: 'cyl', r: 0.075, h: 0.1, n: 20, rot: [90, 0, 0], pos: [0.1 * Math.cos(ang * Math.PI / 180), 0.1 * Math.sin(ang * Math.PI / 180), 0] }
  ] });
  const spring = Array.from({ length: 40 }, (_, i) => { const a = i * 0.75; return [0.075 * Math.cos(a), 0.2 + i * 0.0085, 0.075 * Math.sin(a)]; });
  const valve = (headColor) => [
    { t: 'cyl', r: 0.15, r2: 0.05, h: 0.06, n: 24, pos: [0, 0.03, 0], color: headColor },
    { t: 'cyl', r: 0.025, h: 0.56, n: 10, pos: [0, 0.31, 0] },
    { t: 'pipe', r: 0.012, n: 6, pts: spring, color: '#facc15', caps: false },
    { t: 'cyl', r: 0.08, h: 0.025, n: 16, pos: [0, 0.55, 0], color: '#64748b' }
  ];
  const chamber = (from, to, ramp) => [K && Object.assign({ type: 'chamber', h0: 0.125 }, K), { type: 'blink', fade: true, wave: 'window', from, to, cycle: 2, ramp }];

  LIBRARY({
    id: 'motore-scoppio',
    title: 'Il motore a scoppio',
    intro: 'Il motore delle automobili e dei motorini brucia una goccia di benzina mescolata all\'aria: lo <b>scoppio</b> spinge un pistone, e il pistone fa girare le ruote. Guarda i <b>4 tempi</b> uno alla volta!',
    model: {
      rx: 0.25, ry: -0.55, speed: 0.32, cycle: 2, height: 480,
      phases: [
        { from: 0, to: 0.25, label: '1 · Aspirazione', color: '#2563eb' },
        { from: 0.25, to: 0.5, label: '2 · Compressione', color: '#16a34a' },
        { from: 0.5, to: 0.75, label: '3 · Scoppio', color: '#ea580c' },
        { from: 0.75, to: 1, label: '4 · Scarico', color: '#6b7280' }
      ],
      parts: [
        { id: 'cilindro', name: 'Cilindro', color: '#94a3b8', alpha: 0.26, pos: [0, 0.025, 0], explode: [0, 0, 0],
          info: '<p>È il "tubo" robusto dentro cui il pistone sale e scende. Qui dentro avviene lo scoppio: per questo è di metallo spesso e resistente al calore.</p>',
          more: '<p>Il volume che il pistone "spazza" si chiama <b>cilindrata</b>. Un motorino ha 50 cm³, un\'auto spesso 1000–2000 cm³ divisi in 3 o 4 cilindri.</p>',
          shapes: [ { t: 'tube', r: 0.56, ri: 0.45, h: 1.25, n: 36 } ].concat([0.35, 0.15, -0.05].map((y) => ({ t: 'tube', r: 0.68, ri: 0.56, h: 0.04, n: 36, pos: [0, y, 0] }))) },
        { id: 'testata', name: 'Testata', color: '#64748b', alpha: 0.24, pos: [0, 0.65, 0], explode: [0, 0.8, 0],
          info: '<p>È il "coperchio" del cilindro. Contiene le <b>valvole</b>, la <b>candela</b> e i condotti da cui entra la miscela ed escono i gas.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.45, 1.0], pos: [0, 0.22, 0] }, { t: 'box', s: [1.3, 0.3, 0.8], pos: [0, 0.65, 0], color: '#475569' } ] },
        { id: 'pistone', name: 'Pistone', color: '#d1d5db', pos: [0, 0.3, 0], explode: [0, 0, 1.4], anim: Object.assign({ type: 'piston' }, K),
          info: '<p>È un "tappo" di metallo che scorre su e giù nel cilindro. Lo scoppio lo spinge giù con una forza enorme.</p>',
          more: '<p>Gli <b>anelli</b> (fasce elastiche) intorno al pistone chiudono bene il cilindro, così i gas non scappano verso il basso. Il pistone di un\'auto può salire e scendere più di 100 volte al secondo!</p>',
          shapes: [
            { t: 'cyl', r: 0.43, h: 0.45, n: 36 },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.16, 0], color: '#475569' },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.09, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.6, n: 14, pos: [0, -0.05, 0], rot: [90, 0, 0], color: '#9ca3af' }
          ] },
        { id: 'biella', name: 'Biella', color: '#64748b', pos: [0, 0.25, 0], explode: [0, 0, 1.05], anim: Object.assign({ type: 'rod' }, K),
          info: '<p>È il "braccio" che collega il pistone all\'albero motore. Trasforma il su-e-giù del pistone in un movimento che fa girare l\'albero, come la gamba che spinge il pedale della bicicletta.</p>',
          shapes: [
            { t: 'tube', r: 0.11, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0] },
            { t: 'box', s: [0.11, 0.86, 0.09], pos: [0, -0.55, 0] },
            { t: 'tube', r: 0.17, ri: 0.09, h: 0.12, n: 24, pos: [0, -1.1, 0], rot: [90, 0, 0] }
          ] },
        { id: 'albero-motore', name: 'Albero motore', color: '#6b7280', pos: [0, -1.2, 0], explode: [0, -0.5, 0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>È l\'albero a gomiti che <b>gira</b>. Da qui il movimento va al cambio e poi alle ruote. Ha dei contrappesi per girare senza tremare.</p>',
          more: '<p>Un ciclo completo (4 tempi) richiede <b>2 giri</b> dell\'albero motore. A 3000 giri al minuto il pistone fa 1500 scoppi al minuto, cioè 25 al secondo!</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.45], color: '#9ca3af' },
            web(0.11), web(-0.11), { t: 'cyl', r: 0.085, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0, R, 0], color: '#9ca3af' } ] },
        { id: 'volano', name: 'Volano', color: '#475569', pos: [0, -1.2, -0.82], explode: [0, 0, -0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>È una ruota pesante attaccata all\'albero motore. Una volta lanciata continua a girare e aiuta il motore a superare i tempi in cui nessuno spinge.</p>',
          shapes: [ { t: 'cyl', r: 0.78, h: 0.12, n: 40, rot: [90, 0, 0] }, { t: 'box', s: [0.12, 0.5, 0.02], pos: [0, 0.45, 0.07], color: '#facc15', decal: 1 } ] },
        { id: 'valvola-aspirazione', name: 'Valvola di aspirazione', label: 'Valvola aspirazione', color: '#94a3b8', pos: [-0.2, 0.66, 0], explode: [-0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0, to: 0.25, cycle: 2, ramp: 0.3 },
          info: '<p>È una "porta" che si apre <b>solo nel primo tempo</b> per far entrare aria e benzina nel cilindro. Poi si richiude e resta chiusa.</p>', shapes: valve('#3b82f6') },
        { id: 'valvola-scarico', name: 'Valvola di scarico', label: 'Valvola scarico', color: '#94a3b8', pos: [0.2, 0.66, 0], explode: [0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0.75, to: 1, cycle: 2, ramp: 0.3 },
          info: '<p>È la "porta d\'uscita": si apre <b>solo nel quarto tempo</b> per far uscire i gas bruciati verso il tubo di scarico.</p>', shapes: valve('#ef4444') },
        { id: 'alberi-camme', name: 'Alberi a camme', color: '#6b7280', explode: [0, 1.45, 0],
          info: '<p>Sono alberi con delle "gobbe" (camme). Girando, ogni gobba spinge giù la sua valvola al momento giusto, come un dito che preme un tasto.</p>',
          more: '<p>Gli alberi a camme girano a <b>metà velocità</b> dell\'albero motore (sono collegati da una cinghia o catena): ogni valvola si apre una volta ogni 2 giri.</p>',
          shapes: [ cam(-0.2, -45), cam(0.2, 225) ] },
        { id: 'candela', name: 'Candela', color: '#f8fafc', pos: [0, 0.65, 0.27], explode: [0, 1.0, 0.5],
          info: '<p>Fa una piccola <b>scintilla elettrica</b>, proprio quando la miscela è schiacciata al massimo: è il fiammifero che accende lo scoppio.</p>',
          more: '<p>La scintilla nasce da una tensione altissima (oltre 20 000 volt) che "salta" tra due elettrodi distanti meno di un millimetro. I motori Diesel non hanno candela: il gasolio si accende da solo perché l\'aria compressa diventa caldissima.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.2, n: 12, pos: [0, 0.1, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.1, n: 6, pos: [0, 0.25, 0], color: '#64748b' },
            { t: 'cyl', r: 0.065, h: 0.35, n: 16, pos: [0, 0.47, 0] }, { t: 'cyl', r: 0.03, h: 0.1, n: 10, pos: [0, 0.69, 0], color: '#9ca3af' },
            { t: 'sphere', r: 0.09, n: 8, pos: [0, -0.02, 0], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.49, to: 0.535, cycle: 2, ramp: 0.15 } } ] },
        { id: 'aspirazione', name: 'Collettore di aspirazione', label: 'Aspirazione', color: '#60a5fa', alpha: 0.6, explode: [-0.7, 0.4, 0],
          info: '<p>È il condotto da cui arriva l\'aria (pulita dal filtro) mescolata a goccioline di benzina spruzzate dall\'<b>iniettore</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[-1.55, 1.15, 0], [-0.9, 1.15, 0], [-0.45, 0.98, 0], [-0.22, 0.8, 0]] }, { t: 'box', s: [0.35, 0.5, 0.5], pos: [-1.65, 1.15, 0], color: '#cbd5e1', alpha: 1 } ] },
        { id: 'scarico', name: 'Collettore di scarico', label: 'Scarico', color: '#f97316', alpha: 0.6, explode: [0.7, 0.4, 0],
          info: '<p>Porta via i gas bruciati, che sono caldissimi. Poi la <b>marmitta</b> li ripulisce in parte e riduce il rumore.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[0.22, 0.8, 0], [0.45, 0.98, 0], [0.9, 1.1, 0], [1.4, 0.9, 0]] }, { t: 'cyl', r: 0.2, h: 0.5, n: 24, rot: [0, 0, 90], pos: [1.6, 0.85, 0], color: '#78716c', alpha: 1 } ] },
        { id: 'coppa', name: 'Coppa dell\'olio', label: 'Coppa olio', color: '#78716c', alpha: 0.22, pos: [0, -1.75, 0], explode: [0, -0.6, 0],
          info: '<p>Sotto il motore c\'è l\'<b>olio</b>: viene spruzzato su tutti i pezzi che strisciano, così non si consumano e non si scaldano troppo.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.4, 1.0] }, { t: 'box', s: [1.44, 0.14, 0.94], pos: [0, -0.12, 0], color: '#ca8a04', alpha: 0.75 } ] },
        { id: 'miscela', name: 'Miscela aria-benzina', label: 'Miscela', color: '#4ade80', alpha: 0.55, pos: [0, 0.65, 0], chip: true, noLabel: false,
          info: '<p>Aria e benzina mescolate in goccioline finissime. Per bruciare bene servono circa <b>15 grammi d\'aria per ogni grammo di benzina</b>.</p>',
          shapes: [ { t: 'group', anim: chamber(0.0, 0.5, 0.05), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'scoppio', name: 'Scoppio (combustione)', label: 'Scoppio', color: '#f97316', alpha: 0.8, pos: [0, 0.65, 0],
          info: '<p>La scintilla accende la miscela, che brucia in un attimo: i gas diventano caldissimi (oltre 2000 °C) e <b>spingono</b> fortissimo il pistone verso il basso.</p>',
          more: '<p>Non è proprio un\'esplosione ma una <b>combustione rapidissima</b>: la fiamma attraversa il cilindro in pochi millesimi di secondo. È l\'unico tempo che produce lavoro: gli altri tre "vivono" grazie al volano.</p>',
          shapes: [ { t: 'group', anim: chamber(0.5, 0.64, 0.18).concat([{ type: 'blink', color: '#fde047', wave: 'sin01', rate: 6 }]), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'gas-scarico', name: 'Gas di scarico', label: 'Gas di scarico', color: '#6b7280', alpha: 0.5, pos: [0, 0.65, 0],
          info: '<p>Sono i gas rimasti dopo la combustione: soprattutto vapore acqueo e <b>anidride carbonica</b> (CO₂), più alcune sostanze che inquinano l\'aria.</p>',
          shapes: [ { t: 'group', anim: chamber(0.62, 1.0, 0.12), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] }
      ]
    },
    steps: [
      { icon: '🔥', title: 'Dal calore al movimento', play: true, explode: 0,
        html: '<p>Il motore a scoppio è un <b>motore a combustione interna</b>: la benzina brucia <i>dentro</i> il cilindro. I gas caldi si espandono e spingono il pistone.</p><p>Il pistone va su e giù, la <b>biella</b> e l\'<b>albero motore</b> trasformano questo movimento in una <b>rotazione</b>. Ogni ciclo ha 4 tempi: guardiamoli uno per uno!</p>' },
      { icon: '1️⃣', title: 'Aspirazione: si fa il pieno d\'aria', loop: [0, 0.25], focus: ['pistone', 'valvola-aspirazione', 'miscela', 'aspirazione', 'cilindro'],
        html: '<p>Il pistone <b>scende</b>. La valvola di aspirazione (blu) è <b>aperta</b>: il cilindro si riempie di miscela di aria e benzina, come quando tiri lo stantuffo di una siringa.</p>' },
      { icon: '2️⃣', title: 'Compressione: si schiaccia', loop: [0.25, 0.5], focus: ['pistone', 'miscela', 'valvola-aspirazione', 'valvola-scarico', 'cilindro'],
        html: '<p>Tutte e due le valvole sono <b>chiuse</b>. Il pistone <b>sale</b> e schiaccia la miscela in uno spazio circa <b>10 volte più piccolo</b>. Più è compressa, più forte sarà lo scoppio.</p>' },
      { icon: '3️⃣', title: 'Scoppio: la spinta!', loop: [0.5, 0.75], focus: ['candela', 'scoppio', 'pistone', 'biella', 'cilindro'],
        html: '<p>La <b>candela</b> fa una scintilla: la miscela brucia di colpo, i gas caldissimi si espandono e <b>spingono giù</b> il pistone. È l\'unico tempo che dà forza al motore!</p><p class="tip">⚡ Si chiama anche <b>espansione</b> o "tempo utile".</p>' },
      { icon: '4️⃣', title: 'Scarico: fuori i gas', loop: [0.75, 1], focus: ['pistone', 'valvola-scarico', 'gas-scarico', 'scarico', 'cilindro'],
        html: '<p>Si apre la valvola di scarico (rossa). Il pistone <b>risale</b> e spinge fuori i gas bruciati, verso il tubo di scarico. Il cilindro è pronto per ricominciare.</p>' },
      { icon: '🔄', title: 'Dal pistone alle ruote', focus: ['pistone', 'biella', 'albero-motore', 'volano'], explode: 0.35, view: { rx: 0.15, ry: -0.25 },
        html: '<p>La <b>biella</b> collega il pistone a un "gomito" dell\'<b>albero motore</b>: così il su-e-giù diventa un giro, proprio come le tue gambe sui pedali della bici.</p><p>Il <b>volano</b>, pesante, continua a girare per inerzia e porta avanti il motore negli altri tre tempi.</p>' },
      { icon: '⏱️', title: 'Il momento giusto', focus: ['alberi-camme', 'valvola-aspirazione', 'valvola-scarico', 'candela'], explode: 0.2, view: { rx: 0.35, ry: -0.6 },
        html: '<p>Gli <b>alberi a camme</b> aprono le valvole al momento giusto e la candela scocca proprio alla fine della compressione. Tutto è sincronizzato con l\'albero motore.</p><p class="tip">🧮 4 tempi = 2 giri dell\'albero motore = 1 scoppio.</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Inventori italiani', html: 'Nel 1853 i toscani <b>Eugenio Barsanti e Felice Matteucci</b> brevettarono uno dei primi motori a scoppio. Il ciclo a 4 tempi fu reso famoso da Nikolaus Otto nel 1876.' },
      { icon: '🌡️', title: 'Tanto calore sprecato', html: 'Un motore a benzina trasforma in movimento solo circa <b>un terzo</b> dell\'energia della benzina: il resto se ne va in calore. Per questo serve il radiatore!' },
      { icon: '🚗', title: 'Più cilindri', html: 'Le auto hanno di solito 3 o 4 cilindri che scoppiano a turno: così la spinta è continua e il motore gira liscio.' },
      { icon: '🔋', title: 'E le auto elettriche?', html: 'Un motore elettrico non brucia niente: usa magneti e corrente. Ha pochissimi pezzi in movimento e non inquina dove viaggia.' }
    ],
    quiz: [
      { type: 'order', q: 'Metti in ordine i 4 tempi del motore', items: ['Aspirazione', 'Compressione', 'Scoppio', 'Scarico'], explain: 'Entra la miscela, viene schiacciata, brucia e spinge, poi i gas escono.' },
      { type: 'mc', q: 'Quale pezzo fa la scintilla?', options: ['La valvola', 'La candela', 'Il volano', 'La biella'], answer: 1, explain: 'La candela produce una scintilla elettrica che accende la miscela.' },
      { type: 'mc', q: 'In quale tempo il pistone riceve la spinta che muove il motore?', options: ['Aspirazione', 'Compressione', 'Scoppio', 'Scarico'], answer: 2, explain: 'Solo nello scoppio (espansione) i gas caldi spingono il pistone: è il tempo utile.' },
      { type: 'tf', q: 'Durante la compressione entrambe le valvole sono chiuse.', answer: true, explain: 'Se una valvola fosse aperta, la miscela scapperebbe invece di essere schiacciata.' },
      { type: 'mc', q: 'Che cosa trasforma il su-e-giù del pistone in rotazione?', options: ['Biella e albero motore', 'Candela e valvole', 'Coppa dell\'olio', 'Collettore di scarico'], answer: 0, explain: 'La biella spinge il gomito dell\'albero motore e lo fa girare, come la gamba con il pedale.' },
      { type: 'num', q: 'Quanti giri fa l\'albero motore in un ciclo completo di 4 tempi?', answer: 2, explain: 'Ogni tempo è mezzo giro: 4 × ½ = 2 giri.' }
    ]
  });
})();
