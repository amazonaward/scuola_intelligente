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
    lang: 'fr',
    id: 'razzo',
    title: 'La fusée',
    intro: 'Pour aller dans l\'espace, il faut aller à <b>28 000 km/h</b> ! La fusée brûle des tonnes de carburant et pousse des gaz très chauds vers le bas : c\'est ainsi qu\'elle va vers le haut. Démonte-la étage par étage.',
    model: {
      rx: 0.12, ry: -0.5, speed: 0.6, height: 520, bg: 'sky',
      parts: [
        { id: 'stadio-1', name: 'Premier étage', color: '#f8fafc', explode: [0, -1.5, 0],
          info: '<p>C\'est la partie la plus grande et la plus lourde : elle contient beaucoup de carburant et les moteurs les plus puissants. Elle travaille pendant les <b>2 à 3 premières minutes</b>, puis elle se détache et retombe.</p>',
          more: '<p>Au décollage, le premier étage doit soulever toute la fusée, qui peut peser des centaines de tonnes. Certains premiers étages modernes reviennent en arrière et <b>atterrissent debout</b> pour être réutilisés !</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 3.6, n: 36, pos: [0, 1.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 3.5, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 0.12, 0], color: '#111827' }, { t: 'lathe', n: 36, ds: true, pts: [[0.55, 0], [0.62, -0.3]], color: '#334155' } ].concat([45, 135, 225, 315].map(fin)) },
        { id: 'ossidante-1', name: 'Réservoir d\'oxygène (1er étage)', label: 'Oxygène liquide', color: '#7dd3fc', pos: [0, 2.6, 0], explode: [-1.1, -1.5, 0],
          info: '<p>Il contient de l\'<b>oxygène liquide</b>, très froid : −183 °C ! Dans l\'espace, il n\'y a pas d\'air, donc la fusée doit aussi emporter l\'oxygène pour brûler le carburant.</p>',
          more: '<p>L\'oxygène nécessaire pour brûler s\'appelle le <b>comburant</b>. Pour rester liquide, il doit rester en dessous de −183 °C : c\'est pour cela que les réservoirs sont isolés et qu\'on voit de la glace sur la peau de la fusée.</p>',
          shapes: [ tank(0.48, 1.3) ] },
        { id: 'carburante-1', name: 'Réservoir de carburant (1er étage)', label: 'Carburant', color: '#fb923c', pos: [0, 1.05, 0], explode: [1.1, -1.5, 0],
          info: '<p>Il contient le <b>carburant</b>, par exemple du kérosène raffiné (semblable au carburant des avions) ou du méthane liquide.</p>',
          shapes: [ tank(0.48, 0.75), { t: 'cyl', r: 0.05, h: 2.6, n: 10, pos: [0.25, 0.7, 0.25], color: '#94a3b8' } ] },
        { id: 'motori-1', name: 'Moteurs du 1er étage', label: 'Moteurs', color: '#9ca3af', pos: [0, -0.02, 0], explode: [0, -1.7, 0],
          info: '<p>Dans les moteurs, de puissantes <b>pompes</b> poussent le carburant et l\'oxygène dans la <b>chambre de combustion</b>, où ils brûlent à plus de 3000 °C.</p>',
          more: '<p>Les turbopompes tournent à des dizaines de milliers de tours par minute : elles videraient une piscine en quelques secondes ! Les moteurs peuvent aussi s\'incliner un peu pour <b>diriger</b> la fusée.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.08, n: 36, pos: [0, 0.2, 0], color: '#475569' } ].concat(ring5.map(([x, z]) => ({ t: 'group', pos: [x, 0, z], shapes: [
            { t: 'cyl', r: 0.085, h: 0.22, n: 16 }, { t: 'box', s: [0.08, 0.12, 0.08], pos: [0.1, 0.06, 0], color: '#64748b' } ] }))) },
        { id: 'ugelli-1', name: 'Tuyères', color: '#475569', pos: [0, -0.12, 0], explode: [0, -1.85, 0],
          info: '<p>Ce sont les grandes « cloches » sous les moteurs. Le gaz chaud sort resserré, puis s\'élargit dans la tuyère en <b>accélérant</b> jusqu\'à plus de 10 000 km/h.</p>',
          more: '<p>La forme de cloche (tuyère de <b>Laval</b>) transforme la chaleur des gaz en vitesse. Plus les gaz sortent vite, plus la fusée reçoit de poussée.</p>',
          shapes: ring5.map(([x, z]) => Object.assign(bell(1), { pos: [x, 0, z] })) },
        { id: 'fiamma', name: 'Jet de gaz chauds', label: 'Jet', color: '#f97316', explode: [0, -1.85, 0],
          info: '<p>La fusée pousse les gaz <b>vers le bas</b>, et les gaz poussent la fusée <b>vers le haut</b> : c\'est le principe d\'action et réaction.</p>',
          shapes: ring5.map(([x, z]) => flame(x, z)) },
        { id: 'stadio-2', name: 'Deuxième étage', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>Il s\'allume quand le premier étage s\'est détaché. Il travaille dans le vide, presque sans air, et amène la charge jusqu\'à l\'<b>orbite</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 2.1, n: 36, pos: [0, 4.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.18, n: 36, pos: [0, 3.84, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.12, n: 36, pos: [0, 5.8, 0], color: '#cbd5e1' } ] },
        { id: 'ossidante-2', name: 'Réservoir d\'oxygène (2e étage)', label: 'Oxygène 2', color: '#7dd3fc', pos: [0, 5.2, 0], explode: [-1.0, 0, 0],
          info: '<p>De l\'oxygène liquide pour le deuxième étage : un réservoir plus petit, parce que maintenant la fusée est beaucoup plus légère.</p>', shapes: [ tank(0.46, 0.45) ] },
        { id: 'carburante-2', name: 'Réservoir de carburant (2e étage)', label: 'Carburant 2', color: '#fb923c', pos: [0, 4.35, 0], explode: [1.0, 0, 0],
          info: '<p>Du carburant pour le deuxième étage. On utilise souvent de l\'<b>hydrogène liquide</b>, qui est très léger mais très froid (−253 °C).</p>', shapes: [ tank(0.46, 0.25) ] },
        { id: 'motore-2', name: 'Moteur du 2e étage', label: 'Moteur 2', color: '#94a3b8', pos: [0, 3.78, 0], explode: [0, -0.45, 0],
          info: '<p>Un seul moteur avec une <b>très longue tuyère</b> : dans le vide, les gaz peuvent s\'élargir davantage et poussent mieux.</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.2, n: 16, pos: [0, 0.1, 0] }, Object.assign(bell(1.9), { pos: [0, 0, 0], color: '#64748b' }) ] },
        { id: 'modulo-servizio', name: 'Module de service', color: '#e5e7eb', pos: [0, 6.18, 0], explode: [0, 0.8, 0],
          info: '<p>C\'est la « cave » de la capsule : elle contient de l\'oxygène à respirer, de l\'eau, des batteries et de petits moteurs pour manœuvrer dans l\'espace.</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 0.6, n: 36 }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [0.85, 0, 0], color: '#1e3a8a' }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [-0.85, 0, 0], color: '#1e3a8a' },
            { t: 'cone', r: 0.12, h: 0.18, n: 12, pos: [0, -0.38, 0], rot: [180, 0, 0], color: '#475569' } ] },
        { id: 'capsula', name: 'Capsule de l\'équipage', label: 'Capsule', color: '#cbd5e1', pos: [0, 6.5, 0], explode: [0, 1.3, 0],
          info: '<p>C\'est ici que voyagent les <b>astronautes</b>. Au retour, elle rentre dans l\'atmosphère protégée par un <b>bouclier thermique</b> et descend avec des parachutes.</p>',
          more: '<p>Pendant la rentrée, l\'air devant la capsule devient incandescent : plus de 2500 °C ! Le bouclier thermique s\'use lentement et emporte la chaleur.</p>',
          shapes: [ { t: 'cyl', r: 0.5, r2: 0.2, h: 0.75, n: 36, pos: [0, 0.375, 0] }, { t: 'cyl', r: 0.5, h: 0.05, n: 36, pos: [0, -0.02, 0], color: '#78350f' },
            { t: 'box', s: [0.12, 0.12, 0.02], pos: [0, 0.45, 0.385], rot: [-22, 0, 0], color: '#0f172a', decal: 1 } ] },
        { id: 'torre', name: 'Tour de sauvetage', label: 'Tour de sauvetage', color: '#ef4444', pos: [0, 7.25, 0], explode: [0, 1.9, 0],
          info: '<p>C\'est une petite fusée de secours : si quelque chose tourne mal au décollage, elle <b>arrache la capsule</b> et l\'emmène loin en quelques secondes.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [0.08, 0.27, 0], rot: [0, 0, -8] }, { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [-0.08, 0.27, 0], rot: [0, 0, 8] },
            { t: 'cyl', r: 0.08, h: 0.45, n: 16, pos: [0, 0.75, 0] }, { t: 'cone', r: 0.08, h: 0.2, n: 16, pos: [0, 1.07, 0] } ] }
      ]
    },
    steps: [
      { icon: '⛽', title: 'Le plein : carburant et oxygène', focus: ['ossidante-1', 'carburante-1', 'ossidante-2', 'carburante-2'], explode: 0.4,
        html: '<p>Presque toute la fusée, c\'est du <b>réservoir</b> ! Pour brûler, il faut deux ingrédients : le <b>carburant</b> et l\'<b>oxygène</b>. Sur Terre, l\'oxygène est dans l\'air, mais dans l\'espace il n\'y en a pas : la fusée l\'emporte avec elle, liquide et très froid.</p>' },
      { icon: '🔥', title: 'Allumage !', focus: ['motori-1', 'ugelli-1', 'fiamma'], explode: 0, view: { rx: -0.1, ry: -0.5 },
        html: '<p>Les pompes poussent le carburant et l\'oxygène dans la <b>chambre de combustion</b>. Ils brûlent à plus de 3000 °C et deviennent des gaz très chauds qui veulent sortir.</p><p>Les <b>tuyères</b> les font sortir à toute vitesse vers le bas.</p>' },
      { icon: '🎈', title: 'Action et réaction', focus: ['fiamma', 'ugelli-1', 'stadio-1'], explode: 0,
        html: '<p>As-tu déjà lâché un ballon gonflé ? L\'air sort d\'un côté et le ballon file de l\'autre. La fusée fait pareil !</p><p class="tip">🍎 C\'est la <b>troisième loi de Newton</b> : à chaque action correspond une réaction égale et opposée. Pas besoin d\'air pour « s\'appuyer » : ça marche aussi dans le vide.</p>' },
      { icon: '✂️', title: 'Le premier étage se détache', focus: ['stadio-1', 'ossidante-1', 'carburante-1', 'motori-1', 'ugelli-1', 'fiamma', 'stadio-2'], explode: 1,
        html: '<p>Après environ 2 à 3 minutes, les réservoirs du premier étage sont vides. Les emporter ne ferait que du poids inutile : le premier étage <b>se décroche</b> et retombe.</p><p>Ainsi le reste de la fusée est beaucoup plus léger et accélère plus facilement.</p>' },
      { icon: '🌍', title: 'En orbite avec le deuxième étage', focus: ['stadio-2', 'motore-2', 'ossidante-2', 'carburante-2'], explode: 0.6,
        html: '<p>Le <b>deuxième étage</b> s\'allume et pousse jusqu\'à environ <b>28 000 km/h</b>. À cette vitesse, la capsule continue de « tomber » autour de la Terre sans jamais la toucher : elle est en <b>orbite</b> !</p>' },
      { icon: '👩‍🚀', title: 'La capsule et le retour', focus: ['capsula', 'modulo-servizio', 'torre'], explode: 0.5, view: { rx: 0.3, ry: -0.4 },
        html: '<p>La <b>tour de sauvetage</b> protège les astronautes au décollage, puis elle est larguée. Dans l\'espace, le <b>module de service</b> fournit l\'air, l\'eau et l\'énergie.</p><p>Pour revenir, la capsule rentre dans l\'atmosphère avec le <b>bouclier thermique</b> et descend avec des parachutes.</p>' }
    ],
    facts: [
      { icon: '🌕', title: 'Le géant Saturn V', html: 'La fusée qui a emmené les hommes sur la Lune en 1969 mesurait 110 mètres de haut, comme un immeuble de 36 étages, et pesait presque 3000 tonnes.' },
      { icon: '🇮🇹', title: 'Une fusée italienne', html: '<b>Vega</b> est un lanceur européen conçu et construit en Italie, à Colleferro (Rome). Il met en orbite de petits satellites.' },
      { icon: '🔁', title: 'Des fusées qui atterrissent', html: 'Depuis 2015, certains premiers étages reviennent en arrière et atterrissent à la verticale sur une plateforme, même en pleine mer, pour être réutilisés.' },
      { icon: '🏎️', title: 'Plus rapide qu\'une balle', html: 'Pour rester en orbite basse, il faut environ 7,8 km par seconde : tu irais de Milan à Rome en un peu plus d\'une minute !' }
    ],
    quiz: [
      { type: 'mc', q: 'Pourquoi la fusée emporte-t-elle de l\'oxygène liquide ?', options: ['Pour que les astronautes respirent au décollage', 'Parce que dans l\'espace il n\'y a pas d\'air pour brûler le carburant', 'Pour refroidir les moteurs', 'Pour faire la flamme bleue'], answer: 1, explain: 'Sans oxygène, le carburant ne brûle pas, et dans l\'espace il n\'y a pas d\'air : la fusée doit aussi emporter le comburant.' },
      { type: 'mc', q: 'Quelle loi explique comment vole une fusée ?', options: ['La loi d\'Archimède', 'La troisième loi de Newton (action et réaction)', 'La loi de la gravité de Galilée', 'La loi d\'Ohm'], answer: 1, explain: 'Les gaz poussés vers le bas poussent la fusée vers le haut : action et réaction.' },
      { type: 'tf', q: 'Une fusée a besoin d\'air pour avancer.', answer: false, explain: 'La fusée pousse contre ses propres gaz, pas contre l\'air : elle fonctionne aussi dans le vide, et même mieux.' },
      { type: 'mc', q: 'Pourquoi le premier étage se détache-t-il ?', options: ['Parce qu\'il est cassé', 'Parce que ses réservoirs sont vides et qu\'il ne serait que du poids inutile', 'Pour faire de la place aux astronautes', 'Pour ralentir'], answer: 1, explain: 'Se débarrasser du poids vide permet au reste de la fusée d\'accélérer davantage.' },
      { type: 'mc', q: 'À quoi sert le bouclier thermique de la capsule ?', options: ['À la protéger de la chaleur de la rentrée dans l\'atmosphère', 'À l\'abriter de la pluie', 'À la faire flotter', 'À produire du courant'], answer: 0, explain: 'En rentrant à grande vitesse, l\'air devant la capsule devient très chaud : le bouclier protège les astronautes.' }
    ]
  });
})();
