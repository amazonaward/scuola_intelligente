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
    lang: 'fr',
    id: 'pala-eolica',
    title: 'L\'éolienne',
    intro: 'Une éolienne (ou <b>aérogénérateur</b>) est un moulin à vent moderne : le vent fait tourner ses grandes pales et une <b>génératrice</b> transforme le mouvement en <b>électricité</b>, sans rien brûler et sans polluer l\'air.',
    model: {
      rx: 0.2, ry: -0.75, speed: 0.4, height: 500, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'pale', name: 'Pales', color: '#f8fafc', pos: [HX, HY, 0], explode: [-1.4, 0, 0],
          anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>Trois longues pales en forme d\'<b>aile d\'avion</b>. Le vent, en passant sur leur surface courbe, les pousse sur le côté et les fait tourner.</p>',
          more: '<p>Les pales modernes mesurent plus de <b>80 mètres</b> et sont faites de fibre de verre et de résines, légères et solides. Leur extrémité peut dépasser 300 km/h même si le rotor a l\'air de tourner doucement. Pourquoi trois pales ? C\'est le meilleur compromis entre efficacité, poids et stabilité.</p>',
          shapes: [ blade(0), blade(120), blade(240) ] },
        { id: 'mozzo', name: 'Moyeu et cône', label: 'Moyeu', color: '#e5e7eb', pos: [HX, HY, 0], explode: [-1.0, 0, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>Le « centre » du rotor auquel les pales sont attachées. Le cône à l\'avant, le <b>nez</b>, protège les mécanismes et fend l\'air.</p>',
          more: '<p>Dans le moyeu, il y a les moteurs du <b>pas</b> : ils font tourner chaque pale sur son axe. Quand le vent est fort, les pales se tournent « de chant » pour que le rotor ne s\'emballe pas ; quand le vent est trop fort (plus de 90 km/h), la turbine s\'arrête par sécurité.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pts: [[0.32, 0.12], [0.33, 0], [0.3, -0.18], [0.2, -0.38], [0.08, -0.5], [0, -0.53]] }, { t: 'cyl', r: 0.3, h: 0.25, n: 30, rot: AX, pos: [0.22, 0, 0], color: '#cbd5e1' } ] },
        { id: 'navicella', name: 'Nacelle', color: '#f1f5f9', alpha: 0.32, explode: [0.3, 1.1, 0],
          info: '<p>La « petite maison » en haut de la tour : elle contient toutes les machines qui transforment la rotation en électricité. Elle est grande comme une camionnette et les techniciens y entrent pour l\'entretien.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pos: [-0.15, HY, 0], pts: [[0.26, -0.72], [0.4, -0.62], [0.46, -0.4], [0.47, 0], [0.47, 1.25], [0.43, 1.45], [0.3, 1.55], [0, 1.57]], ds: true },
            { t: 'box', s: [0.25, 0.12, 0.06], pos: [0.95, HY + 0.47, 0], color: '#94a3b8', alpha: 1 } ] },
        { id: 'albero', name: 'Arbre lent', label: 'Arbre lent', color: '#94a3b8', explode: [-0.2, 0.6, 0.6],
          info: '<p>Un gros cylindre d\'acier relié au moyeu : il tourne lentement, avec les pales (environ <b>10 à 15 tours par minute</b>), mais avec une force énorme.</p>',
          shapes: [ { t: 'cyl', r: 0.18, h: 0.18, n: 24, rot: AX, pos: [-0.55, HY, 0], color: '#475569' },
            { t: 'group', pos: [-0.25, HY, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 }, shapes: [ { t: 'cyl', r: 0.08, h: 1.1, n: 18, rot: AX }, { t: 'box', s: [0.6, 0.02, 0.17], pos: [0, 0.08, 0], color: '#facc15', decal: 1 } ] } ] },
        { id: 'moltiplicatore', name: 'Multiplicateur de vitesse', label: 'Multiplicateur', color: '#475569', explode: [0.1, 0.9, 0.9],
          info: '<p>Une boîte d\'<b>engrenages</b>, comme les vitesses d\'un vélo : une grande roue en fait tourner une petite beaucoup plus vite. Ainsi les quelques tours des pales deviennent beaucoup de tours pour la génératrice.</p>',
          more: '<p>Le multiplicateur augmente la vitesse d\'environ <b>100 fois</b> : de 15 à 1500 tours par minute. Certaines turbines modernes n\'en ont pas : elles utilisent d\'énormes génératrices pleines d\'aimants qui fonctionnent même en tournant lentement (« entraînement direct »).</p>',
          shapes: [ { t: 'box', s: [0.5, 0.52, 0.55], pos: [0.36, HY, 0] },
            { t: 'group', pos: [GX, GY, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: 0.5 }, shapes: gear(R1, 18, '#f59e0b') },
            { t: 'group', pos: [GX, GY + R1 + R2 + 0.02, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: -0.5 * R1 / R2 }, shapes: gear(R2, 8, '#fbbf24') } ] },
        { id: 'freno', name: 'Frein à disque', label: 'Frein', color: '#9ca3af', explode: [0.4, 0.6, 1.0],
          info: '<p>Un frein à disque, comme celui des motos, qui arrête le rotor pour l\'entretien ou en cas d\'urgence.</p>',
          shapes: [ { t: 'group', pos: [0.86, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.13, h: 0.03, n: 24, rot: AX }, { t: 'cyl', r: 0.03, h: 0.4, n: 10, rot: AX, pos: [0.15, 0, 0], color: '#64748b' } ] },
            { t: 'box', s: [0.08, 0.08, 0.1], pos: [0.86, GY + R1 + R2 + 0.15, 0], color: '#dc2626' } ] },
        { id: 'generatore', name: 'Génératrice', color: '#1d4ed8', explode: [0.9, 0.9, 0.5],
          info: '<p>Le cœur électrique de l\'éolienne : à l\'intérieur, des <b>aimants</b> tournent près de bobines de fil de cuivre. Le mouvement des aimants fait naître le <b>courant électrique</b> dans le fil.</p>',
          more: '<p>C\'est le principe de l\'<b>induction électromagnétique</b>, découvert par Michael Faraday en 1831 : le même que la dynamo du vélo. Une grande turbine produit 3 à 15 mégawatts, assez pour des milliers de maisons.</p>',
          shapes: [ { t: 'cyl', r: 0.19, h: 0.42, n: 28, rot: AX, pos: [1.2, GY + R1 + R2 + 0.02, 0] }, { t: 'cyl', r: 0.2, h: 0.04, n: 28, rot: AX, pos: [1.0, GY + R1 + R2 + 0.02, 0], color: '#94a3b8' },
            { t: 'group', pos: [1.43, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.12, h: 0.03, n: 6, rot: AX, color: '#e2e8f0' }, { t: 'box', s: [0.035, 0.2, 0.03], pos: [0.02, 0, 0], color: '#b45309' } ] },
            { t: 'box', s: [0.3, 0.3, 0.2], pos: [1.1, HY - 0.2, 0.2], color: '#334155' } ] },
        { id: 'anemometro', name: 'Anémomètre et girouette', label: 'Anémomètre', color: '#e2e8f0', explode: [0.5, 1.4, 0],
          info: '<p>Sur le toit de la nacelle, un <b>anémomètre</b> mesure la vitesse du vent et une <b>girouette</b> sa direction. L\'ordinateur de la turbine décide ainsi comment s\'orienter et quand démarrer.</p>',
          shapes: [ { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.0, HY + 0.65, -0.1] }, { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.25, HY + 0.65, 0.1] },
            { t: 'group', pos: [1.0, HY + 0.86, -0.1], anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [0, 120, 240].map((a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'cyl', r: 0.012, h: 0.2, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 8, m: 10, hemi: true, rot: [0, 0, 90], pos: [0.2, 0, 0], color: '#f8fafc' } ] })) },
            { t: 'group', pos: [1.25, HY + 0.86, 0.1], anim: { type: 'swing', axis: 'y', amp: 15, rate: 0.4 }, shapes: [ { t: 'cyl', r: 0.012, h: 0.3, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'extrude', pts: [[0.2, 0], [0.35, 0.1], [0.35, -0.06]], d: 0.01, color: '#ef4444' } ] } ] },
        { id: 'imbardata', name: 'Système d\'orientation', label: 'Orientation', color: '#64748b', explode: [0, 0.4, 0],
          info: '<p>Une grande couronne dentée avec des moteurs entre la tour et la nacelle : elle fait <b>tourner toute la nacelle</b> pour mettre les pales toujours face au vent, comme une girouette.</p>',
          shapes: [ { t: 'torus', R: 0.3, r: 0.05, n: 30, m: 8, pos: [0, HY - 0.45, 0] }, { t: 'cyl', r: 0.33, h: 0.08, n: 30, pos: [0, HY - 0.5, 0], color: '#475569' } ]
            .concat([0.6, -0.6].map((x) => ({ t: 'group', pos: [x * 0.6, HY - 0.3, 0.25], shapes: [ { t: 'cyl', r: 0.06, h: 0.22, n: 12, color: '#334155' }, { t: 'group', pos: [0, -0.14, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'cyl', r: 0.05, h: 0.05, n: 8, color: '#facc15' } ] } ] }))) },
        { id: 'torre', name: 'Tour', color: '#e5e7eb', explode: [0, 0, 0],
          info: '<p>Une tour d\'acier en forme de tube, haute comme un immeuble de 30 à 40 étages. Plus on monte, plus le vent est fort et régulier : c\'est pour cela que les pales sont si haut.</p>',
          more: '<p>Dans la tour, il y a une échelle, parfois un petit ascenseur, et les câbles qui font descendre l\'électricité. Les tours les plus hautes dépassent 160 mètres.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0, 0.1], [0.32, 0.1], [0.29, 2.0], [0.24, 4.0], [0.19, 5.8], [0, 5.8]] },
            { t: 'box', s: [0.18, 0.4, 0.04], pos: [0, 0.4, 0.31], rot: [-1, 0, 0], color: '#64748b', decal: 1 }, { t: 'torus', R: 0.3, r: 0.02, n: 30, m: 4, pos: [0, 2.0, 0], color: '#cbd5e1' }, { t: 'torus', R: 0.24, r: 0.02, n: 30, m: 4, pos: [0, 4.0, 0], color: '#cbd5e1' } ] },
        { id: 'fondazione', name: 'Fondation', color: '#a8a29e', explode: [0, -0.6, 0],
          info: '<p>Sous terre, il y a un énorme « pied » en <b>béton armé</b> qui tient la tour droite même pendant les tempêtes. Il pèse des milliers de tonnes.</p>',
          shapes: [ { t: 'cyl', r: 1.2, r2: 0.5, h: 0.35, n: 8, pos: [0, -0.08, 0] }, { t: 'cyl', r: 2.4, h: 0.06, n: 36, pos: [0, -0.04, 0], color: '#65a30d' } ] },
        { id: 'trasformatore', name: 'Transformateur et réseau', label: 'Transformateur', color: '#64748b', explode: [0.7, -0.2, 0.7],
          info: '<p>Au pied de la tour, un <b>transformateur</b> augmente la tension de l\'électricité, pour qu\'elle puisse voyager loin dans les câbles du réseau électrique jusqu\'aux maisons, aux écoles et aux usines.</p>',
          shapes: [ { t: 'box', s: [0.55, 0.5, 0.45], pos: [1.15, 0.27, 0.95] }, { t: 'box', s: [0.6, 0.05, 0.5], pos: [1.15, 0.54, 0.95], color: '#475569' } ]
            .concat([0, 1, 2, 3, 4].map((k) => ({ t: 'box', s: [0.02, 0.36, 0.5], pos: [0.86, 0.27, 0.95 - 0.2 + k * 0.1], color: '#94a3b8' })), [ { t: 'box', s: [0.1, 0.12, 0.02], pos: [1.15, 0.33, 1.18], color: '#facc15', decal: 1 } ]) },
        { id: 'corrente', name: 'Courant électrique', label: 'Électricité', color: '#facc15', explode: [0, 0, 0], chip: true,
          info: '<p>L\'électricité produite par la génératrice descend le long des <b>câbles</b> dans la tour, passe par le transformateur et va dans le réseau électrique.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: POWER, color: '#1f2937' } ].concat(Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: POWER[0], color: '#facc15', anim: { type: 'path', pts: POWER, wave: 'saw', rate: 0.25, phase: k / 10 } }))) },
        { id: 'vento', name: 'Vent', color: '#bae6fd', explode: [0, 0, 0], chip: true,
          info: '<p>Le vent, c\'est de l\'<b>air en mouvement</b> : il naît parce que le Soleil chauffe la Terre de façon inégale et que l\'air chaud monte pendant que l\'air froid prend sa place. Le vent a de l\'<b>énergie de mouvement</b> (énergie cinétique).</p>',
          more: '<p>Si la vitesse du vent <b>double</b>, l\'énergie qu\'il transporte devient <b>8 fois</b> plus grande. Une turbine ne peut pas capter toute l\'énergie du vent : au maximum 59 % (limite de Betz), les meilleures atteignent 50 %.</p>',
          shapes: wind }
      ]
    },
    steps: [
      { icon: '🌬️', title: 'L\'énergie du vent', explode: 0,
        html: '<p>Le vent, c\'est de l\'air qui bouge, et tout ce qui bouge a de l\'<b>énergie</b>. Depuis des siècles, les moulins à vent l\'utilisent pour moudre le blé ; aujourd\'hui, les éoliennes la transforment en <b>électricité</b>.</p><p class="tip">☀️ Le vent existe grâce au Soleil, qui chauffe l\'air de façon inégale selon les endroits.</p>' },
      { icon: '✈️', title: 'Des pales comme des ailes d\'avion', focus: ['pale', 'mozzo', 'vento'], view: { rx: 0.1, ry: -1.2 },
        html: '<p>Les <b>pales</b> ont la forme d\'une aile d\'avion. Le vent qui coule sur leur surface crée une poussée sur le côté qui les fait <b>tourner</b>, exactement comme la portance qui fait voler un avion.</p>' },
      { icon: '🐢', title: 'Lentes mais très puissantes', focus: ['mozzo', 'albero', 'navicella'], view: { rx: 0.25, ry: -0.5 }, zoom: 1.8,
        html: '<p>Le rotor tourne lentement, environ 15 tours par minute, mais avec une force énorme. Le mouvement passe à l\'<b>arbre lent</b>, un gros cylindre d\'acier dans la <b>nacelle</b>.</p>' },
      { icon: '⚙️', title: 'Le multiplicateur', focus: ['moltiplicatore', 'albero', 'freno'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.1,
        html: '<p>Les <b>engrenages</b> du multiplicateur fonctionnent comme les pignons d\'un vélo : la grande roue fait tourner très vite la petite. De 15 tours, on arrive à environ <b>1500 tours par minute</b>.</p>' },
      { icon: '🧲', title: 'La génératrice fait le courant', focus: ['generatore', 'moltiplicatore', 'freno'], view: { rx: 0.25, ry: -0.9 }, zoom: 2.1,
        html: '<p>Dans la <b>génératrice</b>, des aimants tournent à côté de bobines de fil de cuivre : le mouvement fait naître le <b>courant électrique</b>. C\'est comme la dynamo du vélo, mais énorme !</p>' },
      { icon: '🧭', title: 'Toujours face au vent', focus: ['anemometro', 'imbardata', 'navicella'], view: { rx: 0.4, ry: -0.6 }, zoom: 1.8,
        html: '<p>L\'<b>anémomètre</b> mesure le vent et la girouette sa direction. Les moteurs d\'<b>orientation</b> tournent toute la nacelle pour mettre les pales face au vent.</p>' },
      { icon: '🔌', title: 'De la pale à la prise de la maison', focus: ['corrente', 'torre', 'trasformatore', 'fondazione'], view: { rx: 0.2, ry: -0.6 },
        html: '<p>Le courant descend le long des câbles dans la <b>tour</b>, le <b>transformateur</b> augmente la tension et le réseau électrique l\'amène jusqu\'à nos maisons.</p><p class="tip">🌍 L\'énergie éolienne est <b>renouvelable</b> : le vent ne s\'épuise pas et ne produit ni fumée ni CO₂.</p>' }
    ],
    facts: [
      { icon: '📏', title: 'Des géantes', html: 'Les plus grandes turbines font plus de <b>250 mètres</b> de haut (presque comme la tour Eiffel) et un seul tour de pales peut alimenter une maison pendant deux jours.' },
      { icon: '🌊', title: 'En pleine mer', html: 'Beaucoup d\'éoliennes sont construites en pleine mer (<b>offshore</b>), où le vent est plus fort et plus constant. En Italie aussi, au large de Tarente, il y a un parc éolien en mer.' },
      { icon: '🏛️', title: 'Une histoire ancienne', html: 'Les premiers moulins à vent ont été construits en Perse il y a plus de 1000 ans. Les moulins hollandais servaient aussi à pomper l\'eau hors des champs.' },
      { icon: '🔇', title: 'Elles s\'arrêtent toutes seules', html: 'Quand il y a peu de vent (moins de 10 km/h), les pales ne tournent pas ; quand le vent est trop fort, elles se mettent « de chant » et s\'arrêtent pour ne pas se casser.' },
      { icon: '♻️', title: 'Vingt ans de travail', html: 'Une éolienne fonctionne pendant environ 20 à 25 ans. En quelques mois, elle produit déjà l\'énergie qu\'il a fallu pour la construire.' }
    ],
    quiz: [
      { type: 'mc', q: 'Quel type d\'énergie une éolienne transforme-t-elle ?', options: ['L\'énergie du vent en énergie électrique', 'L\'énergie électrique en vent', 'La chaleur en lumière', 'Le charbon en électricité'], answer: 0, explain: 'L\'énergie de mouvement du vent devient de l\'énergie électrique.' },
      { type: 'mc', q: 'À quoi sert le multiplicateur de vitesse ?', options: ['À freiner les pales', 'À faire tourner la génératrice beaucoup plus vite que les pales', 'À mesurer le vent', 'À refroidir la tour'], answer: 1, explain: 'Avec les engrenages, il transforme 15 tours par minute en environ 1500.' },
      { type: 'tf', q: 'L\'énergie éolienne est une source renouvelable.', answer: true, explain: 'Le vent ne s\'épuise pas et la turbine ne produit pas de fumées.' },
      { type: 'mc', q: 'Quelle partie produit le courant électrique ?', options: ['La tour', 'L\'anémomètre', 'La génératrice', 'La fondation'], answer: 2, explain: 'Dans la génératrice, les aimants qui tournent créent du courant dans les bobines de cuivre.' },
      { type: 'mc', q: 'Pourquoi les pales ont-elles la forme d\'une aile d\'avion ?', options: ['Pour être plus belles', 'Parce que le vent qui coule crée une poussée qui les fait tourner', 'Pour peser plus lourd', 'Pour faire de l\'ombre'], answer: 1, explain: 'Comme la portance d\'une aile, la poussée latérale fait tourner le rotor.' },
      { type: 'order', q: 'Remets dans l\'ordre le trajet de l\'énergie', items: ['Vent', 'Pales', 'Arbre lent', 'Multiplicateur', 'Génératrice', 'Réseau électrique'], explain: 'Le vent fait tourner les pales ; la rotation est accélérée et transformée en électricité.' }
    ]
  });
})();
