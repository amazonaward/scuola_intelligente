/* Il sottomarino (diesel-elettrico). Asse lungo x: prua a +x, poppa a -x. Ciclo (1): 0–0.5 le casse si riempiono, 0.5–1 si svuotano. */
(function () {
  const ROT = [0, 0, -90]; // porta l'asse y delle primitive lungo x
  const hull = [[0, -3.25], [0.18, -3.05], [0.42, -2.55], [0.6, -1.85], [0.7, -1.0], [0.72, 0], [0.72, 2.1], [0.64, 2.65], [0.45, 3.0], [0.2, 3.2], [0, 3.27]];
  const blades = Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [0.42, 0.025, 0.16], pos: [0.27, 0, 0], rot: [30, 0, 0] }] }));
  const tankWater = (x, w) => ({ t: 'group', pos: [x, -0.62, 0], anim: { type: 'scale', axis: 'y', from: 0.04, to: 1, wave: 'window', win: [0.02, 0.98], ramp: 0.45 }, shapes: [
    { t: 'box', s: [w, 1.2, 1.15], pos: [0, 0.6, 0] }
  ] });

  LIBRARY({
    lang: 'fr',
    id: 'sottomarino',
    title: 'Le sous-marin',
    intro: 'Un sous-marin peut <b>flotter</b> comme un bateau ou bien <b>descendre</b> sous l\'eau et remonter. Le truc ? Changer son propre poids en remplissant d\'eau ou d\'air de grands ballasts.',
    model: {
      rx: 0.22, ry: -0.5, speed: 0.12, height: 460, bg: 'sea', floor: false,
      parts: [
        { id: 'scafo-esterno', name: 'Coque extérieure', color: '#cbd5e1', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>C\'est le « vêtement » du sous-marin, avec une forme allongée comme celle d\'un poisson ou d\'une baleine, pour glisser dans l\'eau sans trop d\'efforts.</p>',
          shapes: [ { t: 'lathe', n: 32, rot: ROT, pts: hull } ] },
        { id: 'scafo-resistente', name: 'Coque épaisse', color: '#94a3b8', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>C\'est un grand tube d\'acier épais, où vit l\'équipage. Il doit résister à l\'énorme <b>pression</b> de l\'eau en profondeur.</p>',
          more: '<p>Tous les 10 mètres de profondeur, la pression augmente d\'environ 1 atmosphère. À 300 mètres, chaque centimètre carré de la coque supporte un poids d\'environ 30 kg !</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 4.2, n: 32, rot: ROT, pos: [0, 0, 0] } ] },
        { id: 'casse-zavorra', name: 'Ballasts', label: 'Ballasts', color: '#7dd3fc', alpha: 0.35, explode: [0, -0.9, 0],
          info: '<p>Ce sont de grands « réservoirs » entre les deux coques, à l\'avant et à l\'arrière. On peut les remplir d\'<b>eau</b> (pour descendre) ou d\'<b>air</b> (pour remonter).</p>',
          shapes: [ { t: 'box', s: [0.75, 1.24, 1.2], pos: [2.55, 0, 0] }, { t: 'box', s: [0.6, 1.0, 1.0], pos: [-2.4, 0, 0] } ] },
        { id: 'acqua-zavorra', name: 'Eau dans les ballasts', label: 'Eau', color: '#0284c7', alpha: 0.7, explode: [0, -0.9, 0],
          info: '<p>Quand les vannes s\'ouvrent, l\'eau de mer entre dans les ballasts : le sous-marin devient <b>plus lourd</b> et descend.</p>',
          shapes: [ tankWater(2.55, 0.72), Object.assign(tankWater(-2.4, 0.57), { pos: [-2.4, -0.5, 0], shapes: [{ t: 'box', s: [0.57, 1.0, 0.95], pos: [0, 0.5, 0] }] }) ] },
        { id: 'aria-compressa', name: 'Bouteilles d\'air comprimé', label: 'Air comprimé', color: '#22c55e', pos: [0.2, 0.36, 0], explode: [0, 1.1, 0.6],
          info: '<p>Elles contiennent de l\'air comprimé à très haute pression. Pour remonter, l\'air est soufflé dans les ballasts et <b>chasse l\'eau</b>.</p>',
          shapes: [-0.45, 0, 0.45].map((x) => ({ t: 'cyl', r: 0.07, h: 0.38, n: 14, rot: ROT, pos: [x, 0, -0.18] })) },
        { id: 'torretta', name: 'Kiosque', color: '#1f2937', pos: [0.95, 0.68, 0], explode: [0, 0.9, 0],
          info: '<p>La tour au-dessus de la coque. Quand le sous-marin est en surface, on regarde autour de soi d\'ici ; le périscope et les antennes passent à l\'intérieur.</p>',
          shapes: [ { t: 'extrude', d: 0.3, pts: [[-0.5, 0], [0.48, 0], [0.38, 0.85], [-0.36, 0.85]], smooth: false }, { t: 'box', s: [0.25, 0.03, 0.9], pos: [0.12, 0.55, 0] } ] },
        { id: 'periscopio', name: 'Périscope', color: '#64748b', pos: [1.05, 1.45, 0], explode: [0, 1.3, 0], anim: { type: 'move', dir: [0, 1, 0], amp: 0.4, wave: 'sin01', rate: 0.5 },
          info: '<p>Un long tube avec deux miroirs (ou prismes) qui permet de voir au-dessus de l\'eau en restant dessous. Aujourd\'hui, beaucoup utilisent une <b>caméra</b>.</p>',
          more: '<p>La lumière entre par le haut, se reflète sur un miroir incliné à 45°, descend dans le tube et un second miroir l\'envoie vers l\'œil. C\'est le même principe que le périscope en carton que tu peux fabriquer à la maison.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 0.9, n: 10 }, { t: 'box', s: [0.14, 0.12, 0.1], pos: [0.03, 0.48, 0], color: '#334155' }, { t: 'box', s: [0.01, 0.08, 0.07], pos: [0.105, 0.48, 0], color: '#38bdf8', decal: 1 } ] },
        { id: 'elica', name: 'Hélice', color: '#ca8a04', pos: [-3.3, 0, 0], rot: [0, 0, 90], explode: [-0.6, 0, 0], anim: { type: 'spin', axis: 'y', rate: 2 },
          info: '<p>En tournant, elle pousse l\'eau vers l\'arrière, et l\'eau pousse le sous-marin vers l\'avant. Elle a de larges pales lentes pour faire <b>peu de bruit</b>.</p>',
          shapes: [ { t: 'cone', r: 0.1, h: 0.25, n: 16, color: '#a16207' } ].concat(blades) },
        { id: 'timoni', name: 'Gouvernails', color: '#475569', explode: [-0.4, 0, 0],
          info: '<p>Les « nageoires » de la queue. Le gouvernail vertical fait tourner à droite et à gauche ; les horizontaux (de <b>profondeur</b>) font pointer la proue vers le haut ou vers le bas.</p>',
          shapes: [ { t: 'box', s: [0.4, 1.3, 0.05], pos: [-2.85, 0, 0], color: '#475569' },
            { t: 'group', pos: [-2.75, 0, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.25 }, shapes: [ { t: 'box', s: [0.4, 0.05, 1.5], color: '#334155' } ] } ] },
        { id: 'motore-elettrico', name: 'Moteur électrique', color: '#f59e0b', pos: [-1.75, 0, 0], explode: [0, 0, 1.1],
          info: '<p>Il fait tourner l\'hélice. Sous l\'eau, il fonctionne avec l\'électricité des batteries : il n\'a pas besoin d\'air et il est silencieux.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.6, n: 24, rot: ROT }, { t: 'cyl', r: 0.045, h: 1.35, n: 10, rot: ROT, pos: [-0.95, 0, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2 } } ] },
        { id: 'diesel', name: 'Moteur diesel et générateur', label: 'Moteur diesel', color: '#9a3412', pos: [-0.85, -0.05, 0], explode: [0, 0, 1.2],
          info: '<p>Quand le sous-marin est près de la surface, le moteur diesel prend de l\'air avec un tube (le <b>schnorchel</b>) et produit de l\'électricité pour recharger les batteries.</p>',
          more: '<p>Les plus grands sous-marins utilisent plutôt un petit <b>réacteur nucléaire</b>, qui n\'a pas besoin d\'air : ils peuvent rester sous l\'eau pendant des mois.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.45, 0.5] }, { t: 'cyl', r: 0.15, h: 0.3, n: 16, rot: ROT, pos: [0.42, 0, 0], color: '#b45309' } ] },
        { id: 'batterie', name: 'Batteries', color: '#16a34a', pos: [0.2, -0.36, 0], explode: [0, -1.0, 0.6],
          info: '<p>De nombreuses batteries au fond de la coque fournissent du courant au moteur électrique, aux lumières et aux instruments quand on navigue sous l\'eau.</p>',
          shapes: Array.from({ length: 10 }, (_, k) => ({ t: 'box', s: [0.18, 0.16, 0.22], pos: [-0.85 + (k % 5) * 0.21 + 0.4, 0, (k < 5 ? -0.13 : 0.13)] })) },
        { id: 'sala-controllo', name: 'Salle de contrôle', label: 'Salle de contrôle', color: '#e2e8f0', pos: [1.05, 0.05, 0], explode: [0, 0, 1.3],
          info: '<p>Le « cerveau » du sous-marin : c\'est d\'ici que le commandant et l\'équipage pilotent, contrôlent la profondeur et écoutent le sonar.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.6] }, { t: 'box', s: [0.6, 0.18, 0.01], pos: [0, 0.08, 0.305], color: '#0f766e', decal: 1 }, { t: 'box', s: [0.08, 0.06, 0.01], pos: [-0.2, -0.12, 0.31], color: '#ef4444', decal: 1, anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 1.5 } } ] },
        { id: 'sonar', name: 'Sonar', color: '#facc15', alpha: 0.85, pos: [2.85, -0.05, 0], explode: [0.7, 0, 0],
          info: '<p>Les « oreilles » du sous-marin. Il envoie un son (« ping ! ») et écoute l\'<b>écho</b> qui rebondit sur les obstacles : grâce au temps de l\'écho, il comprend à quelle distance ils sont. Les dauphins et les chauves-souris le font aussi !</p>',
          more: '<p>Dans l\'eau, le son voyage à environ <b>1 500 m/s</b>, plus de 4 fois plus vite que dans l\'air. Si l\'écho revient après 2 secondes, l\'obstacle est à 1 500 m (le son fait l\'aller-retour).</p>',
          shapes: [ { t: 'sphere', r: 0.36, n: 12, scale: [1, 1, 1.15] },
            { t: 'group', anim: [{ type: 'move', dir: [1, 0, 0], amp: 2.2, wave: 'saw', rate: 0.6 }, { type: 'scale', from: 0.6, to: 2.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 }],
              shapes: [ { t: 'torus', R: 0.35, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#fef08a' } ] } ] }
      ]
    },
    steps: [
      { icon: '🛟', title: 'Flotter', focus: ['casse-zavorra', 'scafo-esterno', 'torretta'], loop: [0, 0.02], explode: 0,
        html: '<p>Quand les <b>ballasts</b> sont pleins d\'air, le sous-marin est plus léger que l\'eau qu\'il déplace : il <b>flotte</b> comme un bateau.</p><p class="tip">🛁 C\'est le <b>principe d\'Archimède</b> : l\'eau pousse vers le haut un objet avec une force égale au poids de l\'eau que l\'objet déplace.</p>' },
      { icon: '⬇️', title: 'Plongée', focus: ['casse-zavorra', 'acqua-zavorra', 'timoni'], loop: [0, 0.5], explode: 0,
        html: '<p>On ouvre les vannes : l\'eau de mer <b>entre dans les ballasts</b> et chasse l\'air. Le sous-marin devient plus lourd et <b>descend</b>.</p><p>Les <b>gouvernails de profondeur</b> l\'aident à s\'incliner et à s\'arrêter à la bonne profondeur.</p>' },
      { icon: '⬆️', title: 'Remontée', focus: ['aria-compressa', 'acqua-zavorra', 'casse-zavorra'], loop: [0.5, 1], explode: 0,
        html: '<p>Pour remonter, l\'<b>air comprimé</b> des bouteilles est soufflé dans les ballasts et chasse l\'eau. Le sous-marin devient plus léger et <b>remonte</b>.</p>' },
      { icon: '⚙️', title: 'En avant toute !', focus: ['elica', 'motore-elettrico', 'batterie', 'diesel'], explode: 0.45, view: { rx: 0.25, ry: -0.9 },
        html: '<p>Les <b>batteries</b> alimentent le <b>moteur électrique</b>, qui fait tourner l\'<b>hélice</b>. Près de la surface, le <b>moteur diesel</b> recharge les batteries.</p><p>Le gouvernail vertical fait tourner à droite et à gauche.</p>' },
      { icon: '🔊', title: 'Voir sans lumière', focus: ['sonar', 'periscopio', 'sala-controllo'], explode: 0.25, view: { rx: 0.2, ry: -0.3 },
        html: '<p>En profondeur, il fait noir comme dans un four. Le <b>sonar</b> utilise le son : il envoie un « ping » et écoute l\'écho. Près de la surface, on lève le <b>périscope</b> pour regarder dehors.</p>' },
      { icon: '🧑‍✈️', title: 'Vivre là-dessous', focus: ['scafo-resistente', 'sala-controllo'], explode: 0.2,
        html: '<p>L\'équipage vit à l\'intérieur de la <b>coque épaisse</b>, qui supporte la pression de l\'eau. Des machines spéciales produisent de l\'oxygène et retirent le dioxyde de carbone de l\'air.</p>' }
    ],
    facts: [
      { icon: '🐳', title: 'Inspirés par la nature', html: 'Les poissons osseux ont une <b>vessie natatoire</b> : en la gonflant ou en la dégonflant de gaz, ils montent ou descendent, exactement comme un sous-marin.' },
      { icon: '📏', title: 'Jusqu\'aux abysses', html: 'En 1960, le bathyscaphe <b>Trieste</b>, conçu par Auguste Piccard et construit en Italie, est descendu dans la fosse des Mariannes à presque 11 000 mètres.' },
      { icon: '🐬', title: 'Comme les dauphins', html: 'Les dauphins et les chauves-souris utilisent l\'<b>écholocalisation</b> : ils émettent des sons et écoutent l\'écho pour « voir » dans le noir.' },
      { icon: '📚', title: 'Vingt mille lieues', html: 'Dans le roman de Jules Verne (1870), le capitaine Nemo voyage à bord du sous-marin <i>Nautilus</i>, bien avant que de vrais sous-marins comme celui-là existent.' }
    ],
    quiz: [
      { type: 'mc', q: 'Qu\'est-ce qui fait descendre le sous-marin ?', options: ['Éteindre le moteur', 'Remplir d\'eau les ballasts', 'Lever le périscope', 'Allumer le sonar'], answer: 1, explain: 'L\'eau dans les ballasts le rend plus lourd que l\'eau qu\'il déplace, donc il descend.' },
      { type: 'mc', q: 'Comment remonte-t-il ?', options: ['En soufflant de l\'air comprimé dans les ballasts pour chasser l\'eau', 'En faisant tourner l\'hélice à l\'envers', 'En ouvrant le kiosque', 'En utilisant le périscope'], answer: 0, explain: 'L\'air chasse l\'eau : le sous-marin devient plus léger et remonte.' },
      { type: 'mc', q: 'Quel principe explique la flottaison ?', options: ['Principe d\'Archimède', 'Loi d\'Ohm', 'Principe de Pascal', 'Première loi de Newton'], answer: 0, explain: 'Un corps immergé reçoit une poussée vers le haut égale au poids du liquide déplacé.' },
      { type: 'tf', q: 'Le sonar utilise la lumière pour trouver les obstacles.', answer: false, explain: 'Le sonar utilise le son et écoute l\'écho : sous l\'eau, la lumière ne porte pas loin.' },
      { type: 'num', q: 'Le son dans l\'eau voyage à 1 500 m/s. Si l\'écho revient après 2 secondes, à combien de mètres se trouve l\'obstacle ?', answer: 1500, unit: 'm', explain: 'En 2 s, le son parcourt 3 000 m, mais c\'est un aller-retour : 3 000 ÷ 2 = 1 500 m.' }
    ]
  });
})();
