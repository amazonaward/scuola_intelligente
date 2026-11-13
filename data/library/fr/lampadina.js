/* La lampadina: a sinistra (x = -0.9) una lampadina a incandescenza, a destra (x = +0.9) una lampadina LED.
   Entrambe con attacco a vite E27 (da y = -0.55 a 0) avvitate in un portalampada. Alto = +y. */
(function () {
  const XI = -0.9, XL = 0.9, TAU = Math.PI * 2;
  const GLASS = [[0.25, 0], [0.26, 0.15], [0.31, 0.35], [0.43, 0.6], [0.54, 0.85], [0.59, 1.05], [0.58, 1.25], [0.51, 1.42], [0.38, 1.55], [0.2, 1.63], [0, 1.65]];
  const DOME = [[0.42, 0.5], [0.5, 0.62], [0.56, 0.8], [0.58, 1.0], [0.55, 1.18], [0.47, 1.33], [0.34, 1.44], [0.18, 1.5], [0, 1.52]];
  const thread = (x) => ({ t: 'pipe', r: 0.022, n: 5, caps: false, pts: Array.from({ length: 64 }, (_, i) => { const a = i * 0.55; return [x + 0.26 * Math.cos(a), -0.5 + i * 0.0072, 0.26 * Math.sin(a)]; }) });
  const base = (x) => [ { t: 'cyl', r: 0.255, h: 0.52, n: 28, pos: [x, -0.26, 0], color: '#d1d5db' }, thread(x),
    { t: 'cyl', r: 0.2, r2: 0.24, h: 0.08, n: 24, pos: [x, -0.56, 0], color: '#111827' }, { t: 'sphere', r: 0.07, n: 6, m: 12, hemi: true, rot: [180, 0, 0], pos: [x, -0.6, 0], color: '#9ca3af' } ];
  /* filamento: spirale intorno all'asse x */
  const coil = Array.from({ length: 96 }, (_, i) => { const f = i / 95, a = i * 0.85; return [XI - 0.22 + 0.44 * f, 1.0 + 0.035 * Math.sin(a) - 0.06 * Math.sin(Math.PI * f), 0.035 * Math.cos(a)]; });
  /* corrente: dal contatto in fondo, su per un filo, attraverso il filamento (o il driver), giù per l'altro filo, fino alla vite */
  const PI_ = [[XI, -0.62, 0], [XI, -0.1, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0], [XI + 0.22, 1.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.1, -0.05, 0], [XI + 0.27, -0.1, 0], [XI + 0.27, -0.45, 0]];
  const PL = [[XL, -0.62, 0], [XL, 0.0, 0], [XL - 0.05, 0.15, 0.03], [XL - 0.05, 0.38, 0.03], [XL - 0.2, 0.52, 0], [XL + 0.2, 0.52, 0], [XL + 0.05, 0.38, 0.03], [XL + 0.05, 0.15, 0.03], [XL + 0.12, 0.0, 0], [XL + 0.27, -0.1, 0], [XL + 0.27, -0.45, 0]];
  const electrons = (P, n) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.03, n: 5, m: 8, pos: P[0], color: '#2563eb', anim: { type: 'path', pts: P, wave: 'saw', rate: 0.6, phase: k / n } }));
  /* luce: "pacchetti" che volano via dal centro e svaniscono */
  const rays = (c, dirs, color, len) => dirs.map(([dx, dy, dz], k) => ({ t: 'group', pos: c, anim: [{ type: 'move', dir: [dx, dy, dz], amp: len, wave: 'saw', rate: 1, phase: (k * 0.37) % 1 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1, phase: (k * 0.37) % 1 }],
    shapes: [{ t: 'sphere', r: 0.045, n: 6, m: 8, color }] }));
  const DIRS = Array.from({ length: 12 }, (_, k) => { const a = (k / 12) * TAU; return [Math.cos(a), Math.sin(a), 0.3 * Math.sin(3 * a)]; });
  const UP = Array.from({ length: 10 }, (_, k) => { const a = (k / 10) * TAU, e = 0.35 + 0.5 * ((k * 7) % 10) / 10; return [Math.cos(a) * Math.cos(e), Math.sin(e) + 0.25, Math.sin(a) * Math.cos(e)]; });
  const ledChips = [[0, 0]].concat(Array.from({ length: 8 }, (_, k) => [0.25 * Math.cos(k * TAU / 8), 0.25 * Math.sin(k * TAU / 8)]));

  LIBRARY({
    lang: 'fr',
    id: 'lampadina',
    title: 'L\'ampoule',
    intro: 'Appuie sur l\'interrupteur et… lumière ! À gauche, la vieille ampoule à <b>incandescence</b>, avec un fil qui devient rouge vif ; à droite, l\'ampoule <b>LED</b> moderne, qui donne la même lumière en consommant beaucoup moins. Découvre la différence !',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.5, height: 460,
      parts: [
        { id: 'bulbo', name: 'Bulbe de verre', label: 'Bulbe de verre', color: '#e0f2fe', alpha: 0.22, pos: [XI, 0, 0], explode: [-0.6, 0.6, 0],
          info: '<p>C\'est la « bulle » de verre transparent. Dedans, il <b>n\'y a pas d\'air</b> : il y a un gaz spécial (l\'argon) qui empêche le filament de brûler.</p>',
          more: '<p>L\'oxygène de l\'air ferait brûler le filament incandescent en un instant. C\'est pourquoi, au début, on faisait le <b>vide</b> à l\'intérieur ; ensuite on a découvert qu\'un gaz <b>inerte</b> comme l\'argon fait durer le fil plus longtemps.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: GLASS, ds: true } ] },
        { id: 'filamento', name: 'Filament de tungstène', label: 'Filament', color: '#fde047', explode: [-0.6, 0.35, 0.4],
          info: '<p>C\'est un fil de métal très fin, enroulé en ressort. Quand le courant le traverse, il devient <b>incandescent</b>, à environ 2 500 °C, et brille d\'une lumière jaune.</p>',
          more: '<p>Il est fait de <b>tungstène</b>, le métal qui fond à la température la plus élevée (3 422 °C). Le fil est enroulé deux fois sur lui-même : déroulé, il serait long de presque un mètre ! Avec le temps, le tungstène s\'évapore, le fil s\'amincit et se casse : l\'ampoule « grille ».</p>',
          shapes: [ { t: 'pipe', r: 0.01, n: 4, pts: coil, anim: { type: 'blink', color: '#fffbeb', wave: 'sin01', rate: 2 } },
            { t: 'sphere', r: 0.16, n: 8, m: 12, pos: [XI, 0.98, 0], color: '#fef08a', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.5, wave: 'sin01', rate: 2 } } ] },
        { id: 'supporti', name: 'Fils et tige de verre', label: 'Fils de soutien', color: '#9ca3af', explode: [-0.6, 0.15, 0.4],
          info: '<p>Deux fils de métal amènent le courant du bas jusqu\'au filament et le maintiennent suspendu. Ils sont fixés dans une <b>tige de verre</b>, au centre de l\'ampoule.</p>',
          shapes: [ { t: 'lathe', n: 16, pts: [[0.14, 0], [0.12, 0.15], [0.06, 0.3], [0.045, 0.5], [0, 0.53]], pos: [XI, 0, 0], color: '#cbd5e1', alpha: 0.6 },
            { t: 'pipe', r: 0.008, n: 4, pts: [[XI - 0.04, 0.0, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0]] }, { t: 'pipe', r: 0.008, n: 4, pts: [[XI + 0.04, 0.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.22, 1.0, 0]] },
            { t: 'pipe', r: 0.005, n: 4, pts: [[XI, 0.52, 0], [XI, 0.92, 0]] } ] },
        { id: 'calore', name: 'Chaleur', color: '#ef4444', alpha: 0.18, explode: [-0.6, 0.35, 0.4],
          info: '<p>L\'ampoule à incandescence brûle les doigts ! Sur tout le courant qu\'elle consomme, environ <b>95 parts sur 100</b> deviennent de la chaleur et seulement 5 deviennent de la lumière.</p>',
          more: '<p>Un corps très chaud émet surtout des rayons <b>infrarouges</b>, invisibles mais chauds : la lumière visible n\'en est qu\'une petite partie. C\'est pourquoi, depuis 2009, les ampoules à incandescence ont été retirées des magasins en Europe.</p>',
          shapes: [0, 0.5].map((ph) => ({ t: 'group', pos: [XI, 0.95, 0], anim: [{ type: 'scale', from: 0.4, to: 1.4, wave: 'saw', rate: 0.5, phase: ph }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: ph }],
            shapes: [{ t: 'sphere', r: 0.62, n: 10, m: 16 }] })) },
        { id: 'luce', name: 'Lumière', color: '#facc15', noLabel: false, explode: [0, 0.5, 0],
          info: '<p>La lumière part du filament incandescent (à gauche) ou des petites LED (à droite) et voyage à toute vitesse, à <b>300 000 km par seconde</b>, dans toutes les directions.</p>',
          shapes: rays([XI, 1.0, 0], DIRS, '#facc15', 1.0).concat(rays([XL, 0.55, 0], UP, '#f8fafc', 1.1)) },
        { id: 'attacco', name: 'Culot à vis (E27)', label: 'Culot à vis', color: '#d1d5db', explode: [0, -0.3, 0],
          info: '<p>La partie en métal avec le <b>filetage</b> se visse dans la douille. Le courant entre par le <b>contact</b> du bas et sort par la vis : le verre noir entre les deux les sépare.</p>',
          more: '<p>« E27 » signifie culot <b>Edison</b> de 27 mm de diamètre : c\'est le même depuis plus de cent ans, c\'est pourquoi tu peux mettre une ampoule LED moderne dans une vieille lampe.</p>',
          shapes: base(XI).concat(base(XL)) },
        { id: 'portalampada', name: 'Douille et câbles', label: 'Douille', color: '#1f2937', alpha: 0.55, explode: [0, -0.6, 0],
          info: '<p>La douille a à l\'intérieur une vis « femelle » et une lamelle au fond. Les deux fils du câble, reliés à l\'<b>interrupteur</b>, amènent le courant à l\'ampoule.</p>',
          more: '<p>L\'interrupteur ouvre ou ferme le <b>circuit</b> : le courant ne passe que si le chemin est fermé, comme un anneau sans coupure. À la maison, la tension est de 230 volts : ne touche jamais une douille quand la lampe est allumée !</p>',
          shapes: [XI, XL].map((x) => ({ t: 'tube', r: 0.34, ri: 0.29, h: 0.45, n: 28, pos: [x, -0.55, 0] })).concat([XI, XL].map((x) => ({ t: 'cyl', r: 0.34, h: 0.08, n: 28, pos: [x, -0.8, 0], alpha: 1 })),
            [ { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XI, -0.84, 0], [XI, -1.15, 0], [-0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XL, -0.84, 0], [XL, -1.15, 0], [0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'box', s: [0.3, 0.12, 0.4], pos: [0, -1.25, 0.3], color: '#f8fafc', alpha: 1 }, { t: 'box', s: [0.1, 0.06, 0.18], pos: [0, -1.17, 0.33], rot: [0, 0, -12], color: '#e2e8f0', alpha: 1 } ]) },
        { id: 'corrente', name: 'Courant électrique', label: 'Courant', color: '#2563eb', noLabel: true, explode: [0, 0, 0],
          info: '<p>Le courant est un fleuve d\'<b>électrons</b>, de toutes petites particules, qui circulent dans les fils. Ils entrent par le contact du bas, traversent le filament ou les LED et sortent par la vis.</p>',
          shapes: electrons(PI_, 12).concat(electrons(PL, 12)) },
        { id: 'diffusore', name: 'Diffuseur (dôme)', label: 'Diffuseur', color: '#f8fafc', alpha: 0.4, pos: [XL, 0, 0], explode: [0.6, 0.65, 0],
          info: '<p>Le dôme en plastique blanc « étale » la lumière des petites LED, de sorte qu\'elle n\'éblouit pas et éclaire toute la pièce tout en douceur.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: DOME, ds: true } ] },
        { id: 'led', name: 'Puce LED', label: 'LED', color: '#fef08a', pos: [XL, 0.5, 0], explode: [0.6, 0.35, 0.3],
          info: '<p>Ce sont de très nombreuses minuscules <b>LED</b> sur une plaquette. Une LED est un « sandwich » de matériaux spéciaux : quand le courant la traverse, elle émet de la lumière directement, presque sans chauffer.</p>',
          more: '<p>LED signifie <i>Light Emitting Diode</i>, « diode qui émet de la lumière ». Les électrons, en passant d\'une couche à l\'autre du <b>semi-conducteur</b>, libèrent de l\'énergie sous forme de lumière bleue ; une couche de <b>phosphore</b> jaune la transforme en lumière blanche. Une ampoule LED consomme environ 1/8 d\'une ampoule à incandescence et dure 15 à 25 fois plus longtemps.</p>',
          shapes: [ { t: 'cyl', r: 0.4, h: 0.04, n: 32, color: '#e5e7eb' } ].concat(ledChips.map(([x, z]) => ({ t: 'box', s: [0.08, 0.03, 0.08], pos: [x, 0.03, z], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 2 } }))) },
        { id: 'driver', name: 'Circuit driver', label: 'Driver', color: '#15803d', pos: [XL, 0.24, 0], explode: [0.6, 0, 0.6],
          info: '<p>Les LED ne supportent pas le courant de la maison tel quel. Ce petit circuit le <b>transforme</b> en courant faible et continu dont les LED ont besoin.</p>',
          more: '<p>Le courant de la maison est <b>alternatif</b> (il change de sens 50 fois par seconde) à 230 V. Le driver le redresse (diodes), le lisse (condensateurs) et le réduit à quelques volts de courant <b>continu</b>.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.36, 0.025] }, { t: 'cyl', r: 0.04, h: 0.12, n: 12, pos: [-0.07, 0.04, 0.06], rot: [90, 0, 0], color: '#1e3a8a' },
            { t: 'cyl', r: 0.03, h: 0.1, n: 12, pos: [0.08, -0.06, 0.05], rot: [90, 0, 0], color: '#1f2937' }, { t: 'box', s: [0.08, 0.06, 0.04], pos: [0.07, 0.1, 0.03], color: '#111827' } ] },
        { id: 'dissipatore', name: 'Corps et dissipateur', label: 'Dissipateur', color: '#cbd5e1', alpha: 0.45, pos: [XL, 0, 0], explode: [0.6, -0.15, 0],
          info: '<p>Le « cou » de l\'ampoule LED contient le driver et évacue le peu de chaleur produit par les LED : une LED qui reste fraîche dure beaucoup plus d\'années.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0.26, 0], [0.3, 0.12], [0.36, 0.28], [0.42, 0.44], [0.43, 0.5]], ds: true } ].concat(Array.from({ length: 8 }, (_, k) => ({ t: 'box', s: [0.02, 0.32, 0.08], pos: [0.36 * Math.cos(k * TAU / 8), 0.3, 0.36 * Math.sin(k * TAU / 8)], rot: [0, -k * 45, 0], color: '#94a3b8', alpha: 0.6 }))) }
      ]
    },
    steps: [
      { icon: '💡', title: 'Deux ampoules, deux idées', explode: 0,
        html: '<p>À gauche, il y a l\'ampoule à <b>incandescence</b>, inventée il y a plus de 140 ans : elle fait de la lumière en chauffant un fil. À droite, l\'ampoule <b>LED</b>, que nous utilisons aujourd\'hui : elle fait de la lumière avec un matériau spécial, sans presque chauffer.</p><p>Toutes les deux ne fonctionnent que si le <b>courant</b> peut circuler.</p>' },
      { icon: '🔌', title: 'Un circuit fermé', focus: ['corrente', 'attacco', 'portalampada', 'supporti', 'filamento'], explode: 0.2, view: { rx: 0.1, ry: -0.2 },
        html: '<p>Le courant arrive par le câble, entre par le <b>contact</b> au bas de l\'ampoule, monte par un fil, traverse le filament et redescend par l\'autre fil jusqu\'à la <b>vis</b>. C\'est un tour complet : un <b>circuit fermé</b>.</p><p class="tip">🔘 L\'interrupteur ouvre le circuit : le chemin est interrompu et la lumière s\'éteint.</p>' },
      { icon: '🔥', title: 'Un fil incandescent', focus: ['filamento', 'supporti', 'bulbo'], explode: 0, zoom: 1.1, view: { rx: -0.05, ry: -0.15 },
        html: '<p>Le <b>filament</b> de tungstène est si fin que le courant a du mal à le traverser : il chauffe jusqu\'à environ <b>2 500 °C</b> et devient incandescent, c\'est-à-dire qu\'il brille comme le fer dans la forge.</p><p>Le bulbe est rempli d\'<b>argon</b> et non d\'air : avec l\'oxygène, le fil brûlerait tout de suite.</p>' },
      { icon: '🥵', title: 'Beaucoup de lumière… et énormément de chaleur', focus: ['calore', 'filamento', 'luce', 'bulbo'], explode: 0, view: { rx: 0.1, ry: -0.3 },
        html: '<p>L\'ampoule à incandescence gaspille presque toute l\'énergie : sur 100 parts, environ <b>95 deviennent de la chaleur</b> et seulement 5 deviennent de la lumière. C\'est pour cela qu\'elle brûle !</p><p class="tip">🌍 Pour économiser l\'énergie, les ampoules à incandescence ne sont plus vendues en Europe.</p>' },
      { icon: '✨', title: 'La LED : la lumière à partir des semi-conducteurs', focus: ['led', 'diffusore', 'luce'], explode: 0.3, view: { rx: 0.35, ry: 0.25 },
        html: '<p>Dans l\'ampoule LED, la lumière naît dans de nombreuses petites <b>puces</b>. Quand le courant les traverse, les électrons « sautent » d\'un matériau à l\'autre et libèrent leur énergie directement sous forme de <b>lumière</b>, presque sans chaleur.</p><p>Le <b>diffuseur</b> blanc adoucit la lumière.</p>' },
      { icon: '🔧', title: 'Driver et dissipateur', focus: ['driver', 'dissipatore', 'led', 'corrente'], explode: 0.55, view: { rx: 0.15, ry: 0.35 },
        html: '<p>Le courant de la maison est trop « fort » pour les LED. Le <b>driver</b>, un petit circuit caché dans le cou, le transforme en courant faible et continu. Le <b>dissipateur</b> évacue le peu de chaleur.</p>' },
      { icon: '⚖️', title: 'Défi : laquelle consomme le moins ?', explode: 0, view: { rx: 0.12, ry: -0.35 },
        html: '<p>Pour faire la même lumière, une ampoule à incandescence consomme <b>60 watts</b>, une LED environ <b>8 watts</b>. Et la LED dure 15 000 à 25 000 heures, contre 1 000 pour la vieille ampoule.</p><p class="tip">🧮 En un an, en remplaçant 10 ampoules par des LED, une famille économise l\'énergie nécessaire pour faire des centaines de machines à laver !</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Edison et les autres', html: 'Thomas Edison a rendu l\'ampoule pratique en 1879 en utilisant un filament de <b>bambou carbonisé</b>. Mais d\'autres inventeurs y travaillaient aussi, comme l\'Anglais Joseph Swan et l\'Italien <b>Alessandro Cruto</b>.' },
      { icon: '🕯️', title: 'L\'ampoule centenaire', html: 'Dans une caserne de pompiers en Californie, il y a une ampoule allumée presque sans interruption depuis <b>1901</b> ! Elle travaille tout doucement, c\'est pour cela qu\'elle dure si longtemps.' },
      { icon: '🏅', title: 'Un Nobel pour la lumière bleue', html: 'Les LED rouges et vertes existaient depuis longtemps, mais pour la lumière blanche il fallait la <b>LED bleue</b>. Les trois scientifiques japonais qui l\'ont inventée ont reçu le prix Nobel de physique en 2014.' },
      { icon: '🔆', title: 'Watts et lumens', html: 'Les <b>watts</b> disent combien d\'énergie consomme une ampoule, les <b>lumens</b> combien de lumière elle donne. Une bonne ampoule donne beaucoup de lumens avec peu de watts.' }
    ],
    quiz: [
      { type: 'mc', q: 'Pourquoi le filament de l\'ampoule à incandescence donne-t-il de la lumière ?', options: ['Parce qu\'il est peint en jaune', 'Parce qu\'il devient incandescent quand le courant le traverse', 'Parce qu\'il brûle comme une bougie', 'Parce qu\'il reflète la lumière du soleil'], answer: 1, explain: 'Le courant chauffe le fil de tungstène jusqu\'à environ 2 500 °C : il devient incandescent et donne de la lumière.' },
      { type: 'mc', q: 'Qu\'y a-t-il dans le bulbe de l\'ampoule à incandescence ?', options: ['De l\'air', 'De l\'eau', 'Un gaz comme l\'argon', 'De l\'oxygène pur'], answer: 2, explain: 'Un gaz inerte comme l\'argon empêche le filament incandescent de brûler.' },
      { type: 'tf', q: 'L\'ampoule LED transforme en lumière une part d\'énergie beaucoup plus grande que celle à incandescence.', answer: true, explain: 'La LED gaspille peu en chaleur : pour la même lumière, elle consomme environ 8 fois moins.' },
      { type: 'mc', q: 'À quoi sert l\'interrupteur ?', options: ['À changer la couleur de la lumière', 'À ouvrir ou fermer le circuit', 'À refroidir l\'ampoule', 'À mesurer les watts'], answer: 1, explain: 'Quand le circuit est ouvert, le courant ne passe pas et l\'ampoule s\'éteint.' },
      { type: 'mc', q: 'En quel métal est fait le filament ?', options: ['Cuivre', 'Fer', 'Tungstène', 'Or'], answer: 2, explain: 'Le tungstène fond à 3 422 °C : c\'est le métal qui résiste à la température la plus élevée.' },
      { type: 'num', q: 'Sur 100 parts d\'énergie, environ combien deviennent de la lumière dans une ampoule à incandescence ?', answer: 5, explain: 'Environ 5 : les 95 autres deviennent de la chaleur.' }
    ]
  });
})();
