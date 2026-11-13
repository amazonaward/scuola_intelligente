/* Il vulcano (strato-vulcano) tagliato a metà. La metà anteriore ("fianco") si sposta con Esplodi o diventa trasparente nei passi;
   sul piano del taglio (z = Z0) si vedono strati, camera magmatica e camino. */
(function () {
  const Z0 = 0.34, H = 3.0, RB = 4.2, RIM = 0.6;
  const rad = (y) => RIM + (RB - RIM) * Math.pow(1 - y / H, 1.6);
  const PROF = [[0, 0]].concat([0, 0.3, 0.7, 1.1, 1.5, 1.9, 2.3, 2.6, 2.85, 3.0].map((y) => [rad(y), y]), [[RIM * 0.7, H - 0.12], [0.18, H - 0.38], [0, H - 0.4]]);
  /* "mezzo tornio": fette estruse ruotate intorno a y, da a0 a a1 gradi (0→180 = metà dietro, 180→360 = metà davanti) */
  const halfLathe = (prof, a0, a1, N, color) => {
    const th = (a1 - a0) / N, d = 2 * RB * Math.tan((th * Math.PI / 180) / 2) * 1.12, s = [];
    for (let k = 0; k <= N; k++) s.push({ t: 'extrude', pts: prof, d, rot: [0, a0 + k * th, 0], color, smooth: true });
    return s;
  };
  /* strati del terreno (box impilati) tra z = za e z = zb */
  const LAYERS = [ [0, -0.18, '#4d7c0f'], [-0.18, -0.7, '#a16207'], [-0.7, -1.2, '#78716c'], [-1.2, -1.75, '#57534e'], [-1.75, -2.4, '#44403c'] ];
  const ground = (za, zb) => LAYERS.map(([y0, y1, c]) => ({ t: 'box', s: [10, y0 - y1, zb - za], pos: [0, (y0 + y1) / 2, (za + zb) / 2], color: c }));
  /* bande di strati sul taglio del cono: poligoni tra due quote */
  const band = (y0, y1, color) => {
    const ys = []; for (let i = 0; i <= 6; i++) ys.push(y0 + (y1 - y0) * i / 6);
    const right = ys.map((y) => [rad(y), y]), left = ys.slice().reverse().map((y) => [-rad(y), y]);
    return { t: 'extrude', pts: right.concat(left), d: 0.04, pos: [0, 0, Z0], color };
  };
  const BANDS = [];
  const bc = ['#6b5b53', '#a8a29e', '#57534e', '#9ca3af', '#7c6f64', '#b8b2a7', '#5b524b'];
  [0, 0.35, 0.75, 1.15, 1.55, 1.95, 2.35].forEach((y, i, a) => BANDS.push(band(y, Math.min(a[i + 1] || 2.62, 2.62), bc[i])));
  /* colate di lava sul fianco anteriore */
  const flow = (ang, wig, len) => {
    const pts = []; for (let i = 0; i <= 10; i++) { const y = H - 0.05 - i * (H - 0.1) * len / 10; const a = (ang + Math.sin(i * 0.9) * wig) * Math.PI / 180; const r = rad(y) + 0.06; pts.push([r * Math.cos(a), y + 0.02, -r * Math.sin(a)]); }
    return pts;
  };
  const lavaFlow = (ang, wig, len, w) => ({ t: 'pipe', r: w, n: 10, curve: true, pts: flow(ang, wig, len), color: '#ea580c', anim: { type: 'blink', color: '#fde047', amount: 0.55, rate: 1.4 } });
  /* lapilli della fontana di lava */
  const bombs = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 2.4, r = 0.6 + (i % 4) * 0.25, dx = Math.cos(a) * r, dz = Math.sin(a) * r;
    const pts = [[0, H - 0.3, Z0], [dx * 0.25, H + 0.6, Z0 + dz * 0.25], [dx * 0.55, H + 1.0 + (i % 3) * 0.15, Z0 + dz * 0.55], [dx * 0.85, H + 0.7, Z0 + dz * 0.85], [dx * 1.1, H - 0.1, Z0 + dz * 1.1]];
    bombs.push({ t: 'sphere', r: 0.06 + (i % 3) * 0.015, n: 6, m: 8, pos: pts[0], color: i % 2 ? '#f97316' : '#fde047', anim: [ { type: 'path', pts, wave: 'saw', rate: 1.1, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1.1, phase: i / 14 } ] });
  }
  const ash = [];
  for (let i = 0; i < 10; i++) {
    const a = i * 2.1, s = 0.35 + (i % 3) * 0.15;
    ash.push({ t: 'sphere', r: s, n: 10, m: 14, pos: [0, H + 0.3, Z0], color: i % 2 ? '#78716c' : '#a8a29e',
      anim: [ { type: 'path', pts: [[0, H + 0.3, Z0], [Math.cos(a) * 0.4, H + 1.6, Z0 + Math.sin(a) * 0.3], [Math.cos(a) * 0.9 + 0.6, H + 3.0, Z0 + Math.sin(a) * 0.6]], wave: 'saw', rate: 0.35, phase: i / 10 },
        { type: 'scale', from: 0.4, to: 1.5, wave: 'saw', rate: 0.35, phase: i / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.35, phase: i / 10 } ] });
  }
  const magmaUp = [];
  for (let i = 0; i < 10; i++) magmaUp.push({ t: 'sphere', r: 0.09, n: 6, m: 8, pos: [0, -1.1, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, -1.1, Z0 + 0.05], [0, 0.5, Z0 + 0.05], [0, H - 0.4, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 10 } });
  for (let i = 0; i < 4; i++) magmaUp.push({ t: 'sphere', r: 0.07, n: 6, m: 8, pos: [0, 0.95, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, 0.95, Z0 + 0.05], [1.1, 1.0, Z0 + 0.05], [rad(1.25) - 0.1, 1.25, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 4 } });

  LIBRARY({
    lang: 'fr',
    id: 'vulcano',
    title: 'Le volcan',
    intro: 'Un volcan est une ouverture de la croûte terrestre d\'où sort le <b>magma</b>, de la roche fondue qui vient des profondeurs. L\'Italie en a de très célèbres : l\'<b>Etna</b>, le <b>Vésuve</b>, le <b>Stromboli</b>. Coupons-en un en deux et regardons à l\'intérieur !',
    model: {
      rx: 0.32, ry: -0.42, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'fianco', name: 'Flanc du volcan', label: 'Flanc', color: '#6b5b53', explode: [7.5, -0.8, 2.5],
          info: '<p>La moitié du volcan que l\'on voit de l\'extérieur : un <b>cône</b> de roche formé par de nombreuses éruptions. Sur les bas flancs pousse la végétation : la cendre volcanique rend la terre très fertile.</p>',
          more: '<p>Sur les pentes de l\'Etna et du Vésuve, on cultive de la vigne, des agrumes et des pistaches, justement grâce aux sols volcaniques, riches en minéraux.</p>',
          shapes: halfLathe(PROF, 180, 360, 22, '#6b5b53').concat(ground(Z0, 3.4)) },
        { id: 'cono', name: 'Cône volcanique', label: 'Cône', color: '#5b524b', explode: [0, 0, -0.6],
          info: '<p>C\'est la montagne proprement dite. Chaque éruption ajoute une couche de lave ou de cendre : ainsi le volcan <b>grandit</b> avec le temps, parfois de plusieurs mètres en quelques années.</p>',
          shapes: halfLathe(PROF, 0, 180, 22, '#5b524b') },
        { id: 'strati', name: 'Couches de lave et de cendre', label: 'Couches', color: '#a8a29e', explode: [0, 0, 0.05],
          info: '<p>Quand on coupe le cône, on voit des <b>couches</b> qui alternent : de la lave solidifiée (sombre) et de la cendre et des lapilli (plus clairs). C\'est pourquoi ces volcans s\'appellent des <b>stratovolcans</b>.</p>',
          more: '<p>Il existe aussi des <b>volcans boucliers</b>, comme ceux d\'Hawaï : larges et bas, faits seulement de coulées de lave très fluide.</p>',
          shapes: BANDS },
        { id: 'crosta', name: 'Croûte terrestre', label: 'Croûte', color: '#57534e', explode: [0, -0.4, -0.6],
          info: '<p>Sous nos pieds, il y a des couches de terre et de <b>roche</b> : c\'est la croûte terrestre, la « peau » de la planète. À certains endroits, elle est fissurée ou mince et le magma parvient à remonter.</p>',
          shapes: ground(-3.0, Z0) },
        { id: 'camera', name: 'Chambre magmatique', label: 'Chambre magmatique', color: '#dc2626', explode: [0, -0.5, 0.6],
          info: '<p>Une grande « poche » de <b>magma</b> à quelques kilomètres de profondeur. Le magma est de la roche fondue à plus de <b>1 000 °C</b>, pleine de gaz dissous, comme les bulles dans une boisson gazeuse.</p>',
          more: '<p>Le magma est plus léger que les roches autour et a tendance à monter. Quand la <b>pression</b> des gaz dans la chambre devient trop forte, le magma se fraie un chemin vers la surface : l\'éruption commence.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 16, m: 28, pos: [0, -1.4, Z0], scale: [1.5, 0.55, 0.9], anim: { type: 'blink', color: '#f97316', amount: 0.5, rate: 0.8 } },
            { t: 'pipe', r: 0.2, n: 12, curve: true, pts: [[0.4, -2.45, Z0], [0.45, -2.1, Z0], [0.2, -1.8, Z0]], color: '#b91c1c' } ] },
        { id: 'camino', name: 'Cheminée volcanique', label: 'Cheminée', color: '#ea580c', explode: [0, 0.2, 0.6],
          info: '<p>Le « tuyau » naturel par lequel le magma monte de la chambre jusqu\'au cratère.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 14, curve: true, pts: [[0, -0.9, Z0], [0.05, 0.3, Z0], [-0.03, 1.6, Z0], [0, H - 0.38, Z0]] } ] },
        { id: 'magma', name: 'Magma qui monte', label: 'Magma', color: '#fde047', explode: [0, 0.2, 0.7], chip: true,
          info: '<p>Poussé par les gaz, le magma remonte la cheminée. Quand il sort à la surface, il perd ses gaz et, à partir de ce moment, il s\'appelle <b>lave</b>.</p>',
          shapes: magmaUp },
        { id: 'condotto', name: 'Conduit latéral et cône secondaire', label: 'Bouche latérale', color: '#c2410c', explode: [0.5, 0.1, 0.5],
          info: '<p>Parfois, le magma trouve un passage sur le côté et ouvre une <b>bouche latérale</b> sur le flanc du volcan : là naît un petit cône secondaire.</p>',
          more: '<p>L\'Etna a plus de <b>300 cônes secondaires</b> (adventifs) sur ses flancs, nés d\'éruptions latérales au fil des siècles.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[0, 0.95, Z0], [0.7, 0.95, Z0], [rad(1.25) - 0.05, 1.25, Z0]] },
            { t: 'lathe', n: 20, pos: [rad(1.25) + 0.05, 1.12, Z0 - 0.1], pts: [[0.42, 0], [0.3, 0.12], [0.12, 0.25], [0.06, 0.22], [0, 0.2]], color: '#44403c' } ] },
        { id: 'cratere', name: 'Cratère', color: '#292524', explode: [0, 0.5, 0],
          info: '<p>L\'ouverture au sommet du volcan, en forme de cuvette. À l\'intérieur, il peut y avoir un <b>lac de lave</b> qui bouillonne.</p>',
          shapes: [ { t: 'torus', R: RIM, r: 0.07, n: 30, m: 8, pos: [0, H, 0], color: '#3f3f46' },
            { t: 'cyl', r: 0.45, h: 0.04, n: 24, pos: [0, H - 0.3, 0], color: '#f97316', anim: { type: 'blink', color: '#fde047', amount: 0.8, rate: 2 } } ] },
        { id: 'fontana', name: 'Fontaine de lave et lapilli', label: 'Lapilli', color: '#f97316', explode: [0, 0.6, 0],
          info: '<p>Pendant une éruption explosive, le volcan lance en l\'air des lambeaux de lave qui refroidissent en vol : les petits sont des <b>lapilli</b>, ceux gros comme un ballon sont des <b>bombes volcaniques</b>.</p>',
          shapes: bombs },
        { id: 'nube', name: 'Nuage de cendre et de gaz', label: 'Nuage de cendre', color: '#78716c', explode: [0, 1.0, 0],
          info: '<p>Le volcan émet de la vapeur d\'eau, des gaz et de la <b>cendre</b> : de minuscules fragments de roche. Le nuage peut monter sur des kilomètres et le vent l\'emporte au loin.</p>',
          more: '<p>En 2010, le nuage du volcan islandais Eyjafjöll a bloqué pendant des jours les vols d\'une moitié de l\'Europe : la cendre peut abîmer les moteurs des avions.</p>',
          shapes: ash },
        { id: 'colate', name: 'Coulées de lave', label: 'Coulées de lave', color: '#ea580c', explode: [7.5, -0.8, 2.5],
          info: '<p>La lave descend le long des flancs comme un fleuve rouge. En refroidissant, elle devient sombre et dure : c\'est de la <b>roche nouvelle</b> (basalte).</p>',
          more: '<p>Les coulées de l\'Etna avancent en général lentement, de quelques mètres par heure : on a le temps de s\'éloigner. Plus dangereuses sont les <b>nuées ardentes</b> (écoulements pyroclastiques), comme celle qui a enseveli Pompéi en 79 apr. J.-C.</p>',
          shapes: [ lavaFlow(240, 6, 0.75, 0.1), lavaFlow(290, 9, 0.95, 0.12), lavaFlow(320, 5, 0.6, 0.08) ] }
      ]
    },
    steps: [
      { icon: '🌋', title: 'Une montagne de feu', explode: 0,
        html: '<p>De l\'extérieur, un volcan ressemble à une montagne en forme de <b>cône</b>, avec une cuvette au sommet : le <b>cratère</b>. Mais son histoire commence bien plus bas, sous terre.</p>' },
      { icon: '🔪', title: 'Coupons-le en deux', explode: 1,
        html: '<p>Enlevons la moitié de devant. Maintenant on voit l\'intérieur : sous le volcan se trouve la <b>chambre magmatique</b>, reliée au cratère par un long tuyau, la <b>cheminée</b>.</p>' },
      { icon: '🔥', title: 'La chambre magmatique', explode: 1, focus: ['camera', 'crosta', 'magma', 'cono', 'strati'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.3,
        html: '<p>À quelques kilomètres de profondeur s\'accumule le <b>magma</b> : de la roche fondue à plus de 1 000 °C, pleine de gaz. Comme il est plus léger que les roches autour, le magma a tendance à <b>monter</b>.</p><p class="tip">🥤 Le gaz dans le magma est comme le dioxyde de carbone dans une bouteille de boisson gazeuse : si tu l\'ouvres d\'un coup… ça gicle !</p>' },
      { icon: '⬆️', title: 'Le magma remonte', explode: 1, focus: ['camino', 'magma', 'camera', 'condotto', 'cono', 'strati', 'crosta'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>Quand la pression des gaz est trop forte, le magma monte dans la <b>cheminée</b>. Parfois, il trouve aussi un passage latéral et ouvre une <b>bouche sur le flanc</b>.</p>' },
      { icon: '💥', title: 'L\'éruption', explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Le magma sort du cratère et devient de la <b>lave</b>. Dans les éruptions explosives, il vole en l\'air en lambeaux (<b>lapilli</b> et <b>bombes</b>) et un grand <b>nuage de cendre et de gaz</b> s\'élève.</p>' },
      { icon: '🟠', title: 'Les coulées de lave', explode: 0, view: { rx: 0.35, ry: 0.15 },
        html: '<p>La lave descend le long des flancs comme un fleuve lent et incandescent. En refroidissant, elle devient une <b>roche</b> sombre : le volcan se construit lui-même !</p>' },
      { icon: '🍰', title: 'Des couches sur des couches', explode: 1, focus: ['strati', 'cono', 'crosta'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.2,
        html: '<p>Chaque éruption ajoute une couche : la lave (sombre) et la cendre (claire) alternent comme dans un gâteau en couches. C\'est pourquoi l\'Etna et le Vésuve s\'appellent des <b>stratovolcans</b>.</p><p class="tip">🇮🇹 En Italie, les volcans actifs sont près de l\'endroit où la plaque africaine s\'enfonce sous la plaque européenne.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'L\'Etna, géant de l\'Europe', html: 'L\'<b>Etna</b>, en Sicile, est le volcan actif le plus haut d\'Europe (environ 3 400 m) et il est très souvent en éruption.' },
      { icon: '🏛️', title: 'Pompéi', html: 'En <b>79 apr. J.-C.</b>, le Vésuve a enseveli Pompéi et Herculanum sous des mètres de cendre. Les fouilles nous montrent comment vivaient les anciens Romains.' },
      { icon: '🗼', title: 'Le phare de la Méditerranée', html: 'Le <b>Stromboli</b> crache de petites fontaines de lave toutes les 10 à 20 minutes depuis des milliers d\'années : les marins s\'en servaient comme phare.' },
      { icon: '🌊', title: 'Volcans sous-marins', html: 'La plupart des volcans de la Terre se trouvent <b>sous la mer</b>. Le plus grand volcan sous-marin d\'Europe, le Marsili, est dans la mer Tyrrhénienne.' },
      { icon: '🪐', title: 'Volcans sur d\'autres mondes', html: 'Le volcan le plus haut du Système solaire est l\'<b>Olympus Mons</b> sur Mars : il mesure environ 22 km, presque trois fois l\'Everest.' }
    ],
    quiz: [
      { type: 'mc', q: 'Comment s\'appelle la roche fondue qui se trouve sous le volcan ?', options: ['Lave', 'Magma', 'Cendre', 'Basalte'], answer: 1, explain: 'Sous terre, elle s\'appelle magma ; quand elle sort à la surface, elle devient lave.' },
      { type: 'mc', q: 'Comment s\'appelle le « tuyau » par lequel le magma monte jusqu\'au cratère ?', options: ['Cheminée', 'Chambre', 'Flanc', 'Lapillus'], answer: 0, explain: 'La cheminée relie la chambre magmatique au cratère.' },
      { type: 'tf', q: 'Le magma monte parce qu\'il est plus léger que les roches qui l\'entourent et qu\'il est poussé par les gaz.', answer: true, explain: 'Il est moins dense et les gaz dissous augmentent la pression.' },
      { type: 'mc', q: 'Quel volcan a enseveli Pompéi en 79 apr. J.-C. ?', options: ['L\'Etna', 'Le Stromboli', 'Le Vésuve', 'Vulcano'], answer: 2, explain: 'Le Vésuve, près de Naples.' },
      { type: 'order', q: 'Remets dans l\'ordre le voyage du magma', items: ['Chambre magmatique', 'Cheminée', 'Cratère', 'Coulée de lave'], explain: 'De la chambre, il monte dans la cheminée, sort du cratère et descend en coulée.' },
      { type: 'mc', q: 'Pourquoi l\'Etna et le Vésuve s\'appellent-ils des « stratovolcans » ?', options: ['Parce qu\'ils sont stratosphériques', 'Parce qu\'ils sont faits de couches alternées de lave et de cendre', 'Parce qu\'ils sont plats', 'Parce qu\'ils sont sous la mer'], answer: 1, explain: 'Chaque éruption ajoute une couche de lave ou de cendre.' }
    ]
  });
})();
