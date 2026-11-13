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
    lang: 'fr',
    id: 'motore-scoppio',
    title: 'Le moteur à explosion',
    intro: 'Le moteur des voitures et des scooters brûle une goutte d\'essence mélangée à de l\'air : l\'<b>explosion</b> pousse un piston, et le piston fait tourner les roues. Regarde les <b>4 temps</b> un par un !',
    model: {
      rx: 0.25, ry: -0.55, speed: 0.32, cycle: 2, height: 480,
      phases: [
        { from: 0, to: 0.25, label: '1 · Admission', color: '#2563eb' },
        { from: 0.25, to: 0.5, label: '2 · Compression', color: '#16a34a' },
        { from: 0.5, to: 0.75, label: '3 · Explosion', color: '#ea580c' },
        { from: 0.75, to: 1, label: '4 · Échappement', color: '#6b7280' }
      ],
      parts: [
        { id: 'cilindro', name: 'Cylindre', color: '#94a3b8', alpha: 0.26, pos: [0, 0.025, 0], explode: [0, 0, 0],
          info: '<p>C\'est le « tube » solide dans lequel le piston monte et descend. C\'est là que se produit l\'explosion : c\'est pourquoi il est en métal épais et résistant à la chaleur.</p>',
          more: '<p>Le volume que le piston « balaie » s\'appelle la <b>cylindrée</b>. Un scooter a 50 cm³, une voiture souvent 1 000 à 2 000 cm³ répartis en 3 ou 4 cylindres.</p>',
          shapes: [ { t: 'tube', r: 0.56, ri: 0.45, h: 1.25, n: 36 } ].concat([0.35, 0.15, -0.05].map((y) => ({ t: 'tube', r: 0.68, ri: 0.56, h: 0.04, n: 36, pos: [0, y, 0] }))) },
        { id: 'testata', name: 'Culasse', color: '#64748b', alpha: 0.24, pos: [0, 0.65, 0], explode: [0, 0.8, 0],
          info: '<p>C\'est le « couvercle » du cylindre. Elle contient les <b>soupapes</b>, la <b>bougie</b> et les conduits par où entre le mélange et sortent les gaz.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.45, 1.0], pos: [0, 0.22, 0] }, { t: 'box', s: [1.3, 0.3, 0.8], pos: [0, 0.65, 0], color: '#475569' } ] },
        { id: 'pistone', name: 'Piston', color: '#d1d5db', pos: [0, 0.3, 0], explode: [0, 0, 1.4], anim: Object.assign({ type: 'piston' }, K),
          info: '<p>C\'est un « bouchon » de métal qui coulisse de haut en bas dans le cylindre. L\'explosion le pousse vers le bas avec une force énorme.</p>',
          more: '<p>Les <b>segments</b> autour du piston ferment bien le cylindre, ainsi les gaz ne s\'échappent pas vers le bas. Le piston d\'une voiture peut monter et descendre plus de 100 fois par seconde !</p>',
          shapes: [
            { t: 'cyl', r: 0.43, h: 0.45, n: 36 },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.16, 0], color: '#475569' },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.09, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.6, n: 14, pos: [0, -0.05, 0], rot: [90, 0, 0], color: '#9ca3af' }
          ] },
        { id: 'biella', name: 'Bielle', color: '#64748b', pos: [0, 0.25, 0], explode: [0, 0, 1.05], anim: Object.assign({ type: 'rod' }, K),
          info: '<p>C\'est le « bras » qui relie le piston au vilebrequin. Elle transforme le va-et-vient du piston en un mouvement qui fait tourner l\'arbre, comme la jambe qui pousse la pédale du vélo.</p>',
          shapes: [
            { t: 'tube', r: 0.11, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0] },
            { t: 'box', s: [0.11, 0.86, 0.09], pos: [0, -0.55, 0] },
            { t: 'tube', r: 0.17, ri: 0.09, h: 0.12, n: 24, pos: [0, -1.1, 0], rot: [90, 0, 0] }
          ] },
        { id: 'albero-motore', name: 'Vilebrequin', color: '#6b7280', pos: [0, -1.2, 0], explode: [0, -0.5, 0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>C\'est l\'arbre coudé qui <b>tourne</b>. De là, le mouvement va à la boîte de vitesses puis aux roues. Il a des contrepoids pour tourner sans trembler.</p>',
          more: '<p>Un cycle complet (4 temps) demande <b>2 tours</b> du vilebrequin. À 3 000 tours par minute, le piston fait 1 500 explosions par minute, soit 25 par seconde !</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.45], color: '#9ca3af' },
            web(0.11), web(-0.11), { t: 'cyl', r: 0.085, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0, R, 0], color: '#9ca3af' } ] },
        { id: 'volano', name: 'Volant moteur', color: '#475569', pos: [0, -1.2, -0.82], explode: [0, 0, -0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>C\'est une roue lourde fixée au vilebrequin. Une fois lancée, elle continue de tourner et aide le moteur à passer les temps où personne ne pousse.</p>',
          shapes: [ { t: 'cyl', r: 0.78, h: 0.12, n: 40, rot: [90, 0, 0] }, { t: 'box', s: [0.12, 0.5, 0.02], pos: [0, 0.45, 0.07], color: '#facc15', decal: 1 } ] },
        { id: 'valvola-aspirazione', name: 'Soupape d\'admission', label: 'Soupape admission', color: '#94a3b8', pos: [-0.2, 0.66, 0], explode: [-0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0, to: 0.25, cycle: 2, ramp: 0.3 },
          info: '<p>C\'est une « porte » qui s\'ouvre <b>seulement au premier temps</b> pour laisser entrer l\'air et l\'essence dans le cylindre. Ensuite elle se referme et reste fermée.</p>', shapes: valve('#3b82f6') },
        { id: 'valvola-scarico', name: 'Soupape d\'échappement', label: 'Soupape échappement', color: '#94a3b8', pos: [0.2, 0.66, 0], explode: [0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0.75, to: 1, cycle: 2, ramp: 0.3 },
          info: '<p>C\'est la « porte de sortie » : elle s\'ouvre <b>seulement au quatrième temps</b> pour laisser sortir les gaz brûlés vers le tuyau d\'échappement.</p>', shapes: valve('#ef4444') },
        { id: 'alberi-camme', name: 'Arbres à cames', color: '#6b7280', explode: [0, 1.45, 0],
          info: '<p>Ce sont des arbres avec des « bosses » (les cames). En tournant, chaque bosse pousse sa soupape vers le bas au bon moment, comme un doigt qui appuie sur une touche.</p>',
          more: '<p>Les arbres à cames tournent à <b>moitié de la vitesse</b> du vilebrequin (ils sont reliés par une courroie ou une chaîne) : chaque soupape s\'ouvre une fois tous les 2 tours.</p>',
          shapes: [ cam(-0.2, -45), cam(0.2, 225) ] },
        { id: 'candela', name: 'Bougie', color: '#f8fafc', pos: [0, 0.65, 0.27], explode: [0, 1.0, 0.5],
          info: '<p>Elle fait une petite <b>étincelle électrique</b>, juste quand le mélange est comprimé au maximum : c\'est l\'allumette qui déclenche l\'explosion.</p>',
          more: '<p>L\'étincelle naît d\'une tension très élevée (plus de 20 000 volts) qui « saute » entre deux électrodes distantes de moins d\'un millimètre. Les moteurs Diesel n\'ont pas de bougie : le gazole s\'enflamme tout seul parce que l\'air comprimé devient très chaud.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.2, n: 12, pos: [0, 0.1, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.1, n: 6, pos: [0, 0.25, 0], color: '#64748b' },
            { t: 'cyl', r: 0.065, h: 0.35, n: 16, pos: [0, 0.47, 0] }, { t: 'cyl', r: 0.03, h: 0.1, n: 10, pos: [0, 0.69, 0], color: '#9ca3af' },
            { t: 'sphere', r: 0.09, n: 8, pos: [0, -0.02, 0], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.49, to: 0.535, cycle: 2, ramp: 0.15 } } ] },
        { id: 'aspirazione', name: 'Collecteur d\'admission', label: 'Admission', color: '#60a5fa', alpha: 0.6, explode: [-0.7, 0.4, 0],
          info: '<p>C\'est le conduit par où arrive l\'air (nettoyé par le filtre) mélangé à des gouttelettes d\'essence pulvérisées par l\'<b>injecteur</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[-1.55, 1.15, 0], [-0.9, 1.15, 0], [-0.45, 0.98, 0], [-0.22, 0.8, 0]] }, { t: 'box', s: [0.35, 0.5, 0.5], pos: [-1.65, 1.15, 0], color: '#cbd5e1', alpha: 1 } ] },
        { id: 'scarico', name: 'Collecteur d\'échappement', label: 'Échappement', color: '#f97316', alpha: 0.6, explode: [0.7, 0.4, 0],
          info: '<p>Il évacue les gaz brûlés, qui sont très chauds. Ensuite le <b>pot d\'échappement</b> les nettoie en partie et réduit le bruit.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[0.22, 0.8, 0], [0.45, 0.98, 0], [0.9, 1.1, 0], [1.4, 0.9, 0]] }, { t: 'cyl', r: 0.2, h: 0.5, n: 24, rot: [0, 0, 90], pos: [1.6, 0.85, 0], color: '#78716c', alpha: 1 } ] },
        { id: 'coppa', name: 'Carter d\'huile', label: 'Carter d\'huile', color: '#78716c', alpha: 0.22, pos: [0, -1.75, 0], explode: [0, -0.6, 0],
          info: '<p>Sous le moteur, il y a l\'<b>huile</b> : elle est projetée sur toutes les pièces qui frottent, pour qu\'elles ne s\'usent pas et ne chauffent pas trop.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.4, 1.0] }, { t: 'box', s: [1.44, 0.14, 0.94], pos: [0, -0.12, 0], color: '#ca8a04', alpha: 0.75 } ] },
        { id: 'miscela', name: 'Mélange air-essence', label: 'Mélange', color: '#4ade80', alpha: 0.55, pos: [0, 0.65, 0], chip: true, noLabel: false,
          info: '<p>De l\'air et de l\'essence mélangés en gouttelettes très fines. Pour bien brûler, il faut environ <b>15 grammes d\'air pour chaque gramme d\'essence</b>.</p>',
          shapes: [ { t: 'group', anim: chamber(0.0, 0.5, 0.05), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'scoppio', name: 'Explosion (combustion)', label: 'Explosion', color: '#f97316', alpha: 0.8, pos: [0, 0.65, 0],
          info: '<p>L\'étincelle enflamme le mélange, qui brûle en un instant : les gaz deviennent très chauds (plus de 2 000 °C) et <b>poussent</b> très fort le piston vers le bas.</p>',
          more: '<p>Ce n\'est pas vraiment une explosion mais une <b>combustion très rapide</b> : la flamme traverse le cylindre en quelques millièmes de seconde. C\'est le seul temps qui produit du travail : les trois autres « vivent » grâce au volant moteur.</p>',
          shapes: [ { t: 'group', anim: chamber(0.5, 0.64, 0.18).concat([{ type: 'blink', color: '#fde047', wave: 'sin01', rate: 6 }]), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'gas-scarico', name: 'Gaz d\'échappement', label: 'Gaz d\'échappement', color: '#6b7280', alpha: 0.5, pos: [0, 0.65, 0],
          info: '<p>Ce sont les gaz restants après la combustion : surtout de la vapeur d\'eau et du <b>dioxyde de carbone</b> (CO₂), plus quelques substances qui polluent l\'air.</p>',
          shapes: [ { t: 'group', anim: chamber(0.62, 1.0, 0.12), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] }
      ]
    },
    steps: [
      { icon: '🔥', title: 'De la chaleur au mouvement', play: true, explode: 0,
        html: '<p>Le moteur à explosion est un <b>moteur à combustion interne</b> : l\'essence brûle <i>à l\'intérieur</i> du cylindre. Les gaz chauds se dilatent et poussent le piston.</p><p>Le piston monte et descend, la <b>bielle</b> et le <b>vilebrequin</b> transforment ce mouvement en une <b>rotation</b>. Chaque cycle a 4 temps : regardons-les un par un !</p>' },
      { icon: '1️⃣', title: 'Admission : on fait le plein d\'air', loop: [0, 0.25], focus: ['pistone', 'valvola-aspirazione', 'miscela', 'aspirazione', 'cilindro'],
        html: '<p>Le piston <b>descend</b>. La soupape d\'admission (bleue) est <b>ouverte</b> : le cylindre se remplit du mélange d\'air et d\'essence, comme quand tu tires le piston d\'une seringue.</p>' },
      { icon: '2️⃣', title: 'Compression : on écrase', loop: [0.25, 0.5], focus: ['pistone', 'miscela', 'valvola-aspirazione', 'valvola-scarico', 'cilindro'],
        html: '<p>Les deux soupapes sont <b>fermées</b>. Le piston <b>monte</b> et écrase le mélange dans un espace environ <b>10 fois plus petit</b>. Plus il est comprimé, plus l\'explosion sera forte.</p>' },
      { icon: '3️⃣', title: 'Explosion : la poussée !', loop: [0.5, 0.75], focus: ['candela', 'scoppio', 'pistone', 'biella', 'cilindro'],
        html: '<p>La <b>bougie</b> fait une étincelle : le mélange brûle d\'un coup, les gaz très chauds se dilatent et <b>poussent vers le bas</b> le piston. C\'est le seul temps qui donne de la force au moteur !</p><p class="tip">⚡ On l\'appelle aussi <b>détente</b> ou « temps moteur ».</p>' },
      { icon: '4️⃣', title: 'Échappement : dehors les gaz', loop: [0.75, 1], focus: ['pistone', 'valvola-scarico', 'gas-scarico', 'scarico', 'cilindro'],
        html: '<p>La soupape d\'échappement (rouge) s\'ouvre. Le piston <b>remonte</b> et pousse dehors les gaz brûlés, vers le tuyau d\'échappement. Le cylindre est prêt à recommencer.</p>' },
      { icon: '🔄', title: 'Du piston aux roues', focus: ['pistone', 'biella', 'albero-motore', 'volano'], explode: 0.35, view: { rx: 0.15, ry: -0.25 },
        html: '<p>La <b>bielle</b> relie le piston à un « coude » du <b>vilebrequin</b> : ainsi le va-et-vient devient un tour, exactement comme tes jambes sur les pédales du vélo.</p><p>Le <b>volant moteur</b>, lourd, continue de tourner par inertie et fait avancer le moteur pendant les trois autres temps.</p>' },
      { icon: '⏱️', title: 'Le bon moment', focus: ['alberi-camme', 'valvola-aspirazione', 'valvola-scarico', 'candela'], explode: 0.2, view: { rx: 0.35, ry: -0.6 },
        html: '<p>Les <b>arbres à cames</b> ouvrent les soupapes au bon moment et la bougie fait son étincelle juste à la fin de la compression. Tout est synchronisé avec le vilebrequin.</p><p class="tip">🧮 4 temps = 2 tours du vilebrequin = 1 explosion.</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Inventeurs italiens', html: 'En 1853, les Toscans <b>Eugenio Barsanti et Felice Matteucci</b> ont breveté l\'un des premiers moteurs à explosion. Le cycle à 4 temps est devenu célèbre grâce à Nikolaus Otto en 1876.' },
      { icon: '🌡️', title: 'Beaucoup de chaleur gaspillée', html: 'Un moteur à essence ne transforme en mouvement qu\'environ <b>un tiers</b> de l\'énergie de l\'essence : le reste part en chaleur. C\'est pour cela qu\'il faut le radiateur !' },
      { icon: '🚗', title: 'Plusieurs cylindres', html: 'Les voitures ont en général 3 ou 4 cylindres qui explosent à tour de rôle : ainsi la poussée est continue et le moteur tourne en douceur.' },
      { icon: '🔋', title: 'Et les voitures électriques ?', html: 'Un moteur électrique ne brûle rien : il utilise des aimants et du courant. Il a très peu de pièces en mouvement et ne pollue pas là où il roule.' }
    ],
    quiz: [
      { type: 'order', q: 'Mets dans l\'ordre les 4 temps du moteur', items: ['Admission', 'Compression', 'Explosion', 'Échappement'], explain: 'Le mélange entre, il est écrasé, il brûle et pousse, puis les gaz sortent.' },
      { type: 'mc', q: 'Quelle pièce fait l\'étincelle ?', options: ['La soupape', 'La bougie', 'Le volant moteur', 'La bielle'], answer: 1, explain: 'La bougie produit une étincelle électrique qui enflamme le mélange.' },
      { type: 'mc', q: 'À quel temps le piston reçoit-il la poussée qui fait marcher le moteur ?', options: ['Admission', 'Compression', 'Explosion', 'Échappement'], answer: 2, explain: 'C\'est seulement à l\'explosion (détente) que les gaz chauds poussent le piston : c\'est le temps moteur.' },
      { type: 'tf', q: 'Pendant la compression, les deux soupapes sont fermées.', answer: true, explain: 'Si une soupape était ouverte, le mélange s\'échapperait au lieu d\'être écrasé.' },
      { type: 'mc', q: 'Qu\'est-ce qui transforme le va-et-vient du piston en rotation ?', options: ['La bielle et le vilebrequin', 'La bougie et les soupapes', 'Le carter d\'huile', 'Le collecteur d\'échappement'], answer: 0, explain: 'La bielle pousse le coude du vilebrequin et le fait tourner, comme la jambe avec la pédale.' },
      { type: 'num', q: 'Combien de tours fait le vilebrequin pendant un cycle complet de 4 temps ?', answer: 2, explain: 'Chaque temps est un demi-tour : 4 × ½ = 2 tours.' }
    ]
  });
})();
