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
    lang: 'fr',
    id: 'elicottero',
    title: 'L\'hélicoptère',
    intro: 'L\'hélicoptère peut monter à la verticale, rester <b>immobile en l\'air</b> et voler dans toutes les directions. Le secret ? Ses « ailes » tournent ! Le <b>rotor</b> fait tourner de longues pales qui poussent l\'air vers le bas.',
    model: {
      rx: 0.3, ry: -0.55, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'fusoliera', name: 'Fuselage', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>C\'est le corps de l\'hélicoptère : à l\'intérieur se trouvent les pilotes, les passagers ou, dans les hélicoptères de secours, le brancard et les médecins.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, pos: [0.35, 0.95, 0], scale: [1.35, 0.72, 0.68] },
            { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, 0.685], color: '#f8fafc', decal: 1 }, { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, -0.685], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, 0.655], color: '#7dd3fc', decal: 1 }, { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, -0.655], color: '#7dd3fc', decal: 1 },
            { t: 'cyl', r: 0.2, r2: 0.13, h: 0.5, n: 18, rot: [0, 0, 90], pos: [-0.95, 1.05, 0] } ] },
        { id: 'cabina', name: 'Cabine de pilotage', label: 'Cabine', color: '#bae6fd', alpha: 0.4, explode: [0.6, 0, 0],
          info: '<p>Une grande « bulle » de plexiglas à l\'avant : les pilotes voient devant, sur les côtés et même sous leurs pieds, très utile pour se poser dans des endroits difficiles.</p>',
          more: '<p>Le pilote utilise trois commandes : le levier du <b>pas collectif</b> (à gauche, pour monter et descendre), le <b>manche</b> ou cyclique (entre les jambes, pour aller en avant, en arrière et sur les côtés) et les <b>palonniers</b> (pour tourner le nez, en commandant le rotor de queue).</p>',
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 22, pos: [1.15, 1.02, 0], scale: [0.62, 0.55, 0.6] },
            { t: 'box', s: [0.3, 0.35, 0.3], pos: [0.95, 0.75, 0.18], color: '#1f2937', alpha: 1 }, { t: 'box', s: [0.08, 0.4, 0.3], pos: [0.82, 0.95, 0.18], color: '#1f2937', alpha: 1 },
            { t: 'pipe', r: 0.02, n: 6, pts: [[1.25, 0.6, 0.18], [1.2, 0.9, 0.18]], color: '#111827', alpha: 1 } ] },
        { id: 'rotore', name: 'Rotor principal', label: 'Rotor principal', color: '#1f2937', pos: [MX, HUB, 0], explode: [0, 1.2, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 },
          info: '<p>Quatre longues <b>pales</b> tournent très vite. Chaque pale a la forme d\'une aile d\'avion : en tournant, elle « coupe » l\'air, le pousse vers le bas et reçoit une poussée vers le haut, la <b>portance</b>.</p>',
          more: '<p>Un avion doit rouler sur la piste pour que ses ailes reçoivent de l\'air ; l\'hélicoptère, lui, fait tourner les ailes elles-mêmes, il peut donc créer de la portance <b>à l\'arrêt</b>. Le bout des pales atteint environ 700 km/h, un peu moins que la vitesse du son !</p>',
          shapes: [ { t: 'cyl', r: 0.16, h: 0.16, n: 20, color: '#475569' }, { t: 'cone', r: 0.12, h: 0.14, n: 16, pos: [0, 0.15, 0], color: '#64748b' } ].concat([0, 90, 180, 270].map(blade)) },
        { id: 'piatto', name: 'Plateau cyclique', label: 'Plateau cyclique', color: '#9ca3af', pos: [MX, 1.82, 0], explode: [0.8, 0.8, 0.6],
          info: '<p>C\'est la pièce la plus ingénieuse : deux disques sur l\'arbre du rotor. En les inclinant ou en les montant, des tiges changent l\'<b>inclinaison des pales</b> pendant qu\'elles tournent.</p>',
          more: '<p>Si le plateau <b>monte</b>, toutes les pales s\'inclinent davantage ensemble (pas <b>collectif</b>) : plus de portance, l\'hélicoptère monte. Si le plateau <b>s\'incline</b>, chaque pale change d\'inclinaison pendant le tour (pas <b>cyclique</b>) : le disque du rotor s\'incline et l\'hélicoptère vole de ce côté.</p>',
          anim: { type: 'swing', axis: 'z', amp: 7, rate: 0.25 },
          shapes: [ { t: 'cyl', r: 0.3, h: 0.05, n: 24, color: '#6b7280' },
            { t: 'group', pos: [0, 0.06, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 }, shapes: [ { t: 'cyl', r: 0.27, h: 0.05, n: 24, color: '#cbd5e1' },
              ...[0, 90, 180, 270].map((a) => ({ t: 'cyl', r: 0.015, h: 0.24, n: 6, pos: [0.24 * Math.cos(a * D), 0.14, -0.24 * Math.sin(a * D)], color: '#f59e0b' })) ] } ] },
        { id: 'albero', name: 'Arbre du rotor et transmission', label: 'Transmission', color: '#64748b', explode: [0, 0.5, 0.8],
          info: '<p>Le moteur tourne très vite, mais le rotor doit tourner plus lentement. La <b>transmission</b>, une boîte pleine d\'engrenages, réduit la vitesse et amène le mouvement au rotor principal et à celui de queue.</p>',
          more: '<p>Le moteur à turbine tourne à environ 30 000 tours par minute, le rotor principal à environ 400 : la transmission réduit la vitesse d\'environ 75 fois, en augmentant la force (couple) dans le même rapport.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.3, 0.5], pos: [MX, 1.55, 0] }, { t: 'cyl', r: 0.06, h: 0.42, n: 12, pos: [MX, 1.86, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2.2 } },
            { t: 'cyl', r: 0.03, h: 2.8, n: 10, rot: [0, 0, 90], pos: [-1.5, 1.3, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 6 } } ] },
        { id: 'motore', name: 'Moteur à turbine', label: 'Turbine', color: '#94a3b8', pos: [-0.45, 1.55, 0], explode: [-0.3, 0.6, -0.9],
          info: '<p>Le moteur est une <b>turbine</b>, semblable à un petit moteur d\'avion : elle aspire l\'air, le comprime, le brûle avec le carburant et les gaz chauds font tourner une roue à aubes reliée à la transmission.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.75, n: 20, rot: [0, 0, 90] }, { t: 'cyl', r: 0.12, h: 0.25, n: 16, rot: [0, 0, 90], pos: [-0.48, 0.04, 0], color: '#57534e' },
            { t: 'group', pos: [0.38, 0, 0], anim: { type: 'spin', axis: 'x', rate: 8 }, shapes: [0, 45, 90, 135].map((a) => ({ t: 'box', s: [0.02, 0.28, 0.04], rot: [a, 0, 0], color: '#475569' })) },
            { t: 'sphere', r: 0.09, n: 6, m: 10, pos: [-0.62, 0.06, 0], color: '#f97316', alpha: 0.6, anim: { type: 'blink', fade: true, wave: 'sin01', rate: 3 } } ] },
        { id: 'trave-coda', name: 'Poutre de queue', label: 'Queue', color: '#dc2626', explode: [-0.6, 0, 0],
          info: '<p>Un long tube qui porte le <b>rotor de queue</b> loin du centre : plus il est loin, plus il peut facilement s\'opposer à la rotation du fuselage, comme un long levier.</p>',
          shapes: [ { t: 'cyl', r: 0.19, r2: 0.08, h: 2.9, n: 18, rot: [0, 0, 90], pos: [-2.05, 1.18, 0] },
            { t: 'extrude', d: 0.06, pts: [[-3.1, 1.2], [-3.5, 1.2], [-3.78, 1.95], [-3.52, 1.95]], color: '#f8fafc' },
            { t: 'box', s: [0.32, 0.04, 0.8], pos: [-2.9, 1.2, 0], color: '#f8fafc' } ] },
        { id: 'rotore-coda', name: 'Rotor de queue', label: 'Rotor de queue', color: '#f8fafc', pos: [-3.58, 1.62, 0.1], explode: [-0.5, 0, 0.6], anim: { type: 'spin', axis: 'z', rate: 8 },
          info: '<p>La petite hélice à l\'arrière pousse l\'air sur le côté et empêche le fuselage de tourner sur lui-même. Avec les palonniers, le pilote change sa poussée pour <b>tourner le nez</b>.</p>',
          more: '<p>Quand le moteur fait tourner le rotor dans un sens, le fuselage « veut » tourner dans le sens opposé : c\'est le <b>couple de réaction</b> (troisième loi de Newton). Certains hélicoptères résolvent le problème avec deux rotors qui tournent en sens contraires, sans rotor de queue.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 0.08, n: 14, rot: [90, 0, 0], color: '#475569' },
            { t: 'box', s: [0.06, 0.75, 0.02], rot: [0, 12, 0], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, 0.33, 0], color: '#ef4444' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, -0.33, 0], color: '#ef4444' } ] },
        { id: 'pattini', name: 'Patins d\'atterrissage', label: 'Patins', color: '#6b7280', explode: [0, -0.6, 0],
          info: '<p>À la place des roues, beaucoup d\'hélicoptères ont deux <b>patins</b> : simples, légers et adaptés pour se poser même sur l\'herbe, la neige ou les rochers.</p>',
          shapes: skid(0.62).concat(skid(-0.62)) },
        { id: 'aria', name: 'Air poussé vers le bas', label: 'Air', color: '#38bdf8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Le rotor pousse vers le bas une grande quantité d\'air (le « souffle du rotor ») : tu le sens très fort si tu es près d\'un hélicoptère qui atterrit.</p>',
          shapes: DOWN },
        { id: 'forze', name: 'Portance et couple', label: 'Forces', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>La flèche <b>verte</b> est la portance du rotor. La flèche <b>violette</b> courbe montre comment le fuselage aurait tendance à tourner (couple) ; la flèche <b>bleue</b> à l\'arrière est la poussée du rotor de queue qui le garde droit.</p>',
          shapes: [ arrow([MX, 2.35, 0], [0, 0, 0], 0.8, '#22c55e'),
            { t: 'torus', R: 0.95, r: 0.035, n: 30, m: 6, arc: 250, pos: [MX, 0.95, 0], rot: [0, 40, 0], color: '#a855f7' },
            { t: 'cone', r: 0.1, h: 0.25, n: 12, pos: [MX + 0.95 * Math.cos(40 * D), 0.95, 0.95 * Math.sin(40 * D)], rot: [90, 0, 0], color: '#a855f7' },
            arrow([-3.58, 1.62, -0.1], [-90, 0, 0], 0.7, '#3b82f6') ] }
      ]
    },
    steps: [
      { icon: '🚁', title: 'Des ailes qui tournent', explode: 0,
        html: '<p>L\'hélicoptère n\'a pas d\'ailes fixes comme l\'avion : ses ailes sont les longues <b>pales du rotor</b>, qui tournent au-dessus de la cabine. Ainsi il peut monter à la verticale, rester immobile en l\'air (<b>vol stationnaire</b>) et atterrir presque partout.</p>' },
      { icon: '⬆️', title: 'Le rotor pousse l\'air vers le bas', focus: ['rotore', 'aria', 'forze'], explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Chaque pale a la forme d\'une aile. En tournant à environ 400 tours par minute, les pales poussent l\'air vers le <b>bas</b> ; en réaction, l\'air pousse le rotor vers le <b>haut</b> : c\'est la <b>portance</b>.</p><p class="tip">🍁 As-tu déjà vu une graine d\'érable qui descend en tournoyant ? C\'est un petit hélicoptère naturel !</p>' },
      { icon: '🎛️', title: 'Le plateau cyclique : monter et avancer', focus: ['piatto', 'rotore', 'albero'], explode: 0.3, zoom: 1.2, view: { rx: 0.25, ry: -0.7 },
        html: '<p>Le pilote ne change pas la vitesse du rotor : il change l\'<b>inclinaison des pales</b>. Le <b>plateau cyclique</b> le fait pendant qu\'elles tournent.</p><p>Toutes les pales plus inclinées → plus de portance → l\'hélicoptère <b>monte</b>. Le plateau incliné vers l\'avant → le rotor s\'incline → l\'hélicoptère <b>avance</b>.</p>' },
      { icon: '🔄', title: 'Pourquoi il faut un rotor de queue', focus: ['rotore-coda', 'trave-coda', 'forze', 'fusoliera'], explode: 0, view: { rx: 0.9, ry: -0.3 },
        html: '<p>Quand le moteur fait tourner le rotor d\'un côté, le fuselage tend à tourner de l\'autre côté (flèche violette) : action et réaction !</p><p>Le <b>rotor de queue</b> pousse l\'air sur le côté et garde le fuselage droit. Avec les <b>palonniers</b>, le pilote change cette poussée et tourne le nez.</p>' },
      { icon: '🔥', title: 'Moteur et transmission', focus: ['motore', 'albero', 'rotore-coda'], explode: 0.35, view: { rx: 0.25, ry: -1.0 },
        html: '<p>Une <b>turbine</b> brûle le carburant et tourne très vite. La <b>transmission</b>, pleine d\'engrenages, ralentit le mouvement et l\'amène au rotor principal et, par un long arbre dans la queue, au rotor de queue.</p>' },
      { icon: '🏔️', title: 'Cabine, patins et secours', focus: ['cabina', 'fusoliera', 'pattini'], explode: 0, view: { rx: 0.2, ry: -0.2 },
        html: '<p>La <b>cabine</b> en bulle permet de voir dans toutes les directions, même vers le bas. Les <b>patins</b> permettent de se poser sur l\'herbe, la neige et les rochers.</p><p>C\'est pourquoi les hélicoptères sont précieux pour le <b>secours</b> en montagne et en mer, contre les incendies et pour amener les malades à l\'hôpital.</p>' }
    ],
    facts: [
      { icon: '🎨', title: 'La vis aérienne de Léonard', html: 'Vers 1490, <b>Léonard de Vinci</b> dessina une « vis aérienne » : une hélice en spirale de toile qui devait se visser dans l\'air. Elle est considérée comme l\'ancêtre de l\'hélicoptère.' },
      { icon: '🇮🇹', title: 'Des hélicoptères italiens', html: 'En Italie, près de Varèse, on construit des hélicoptères exportés dans le monde entier, utilisés aussi pour le secours en montagne et le secours médical par hélicoptère.' },
      { icon: '🔙', title: 'Même en arrière', html: 'Un hélicoptère peut voler en avant, en arrière, sur le côté et tourner sur lui-même en restant immobile au même endroit. Aucun avion ordinaire n\'y arrive !' },
      { icon: '🪂', title: 'Si le moteur s\'arrête', html: 'Si le moteur s\'éteint, le rotor continue de tourner, poussé par l\'air qui monte pendant que l\'hélicoptère descend (<b>autorotation</b>), et le pilote peut atterrir doucement.' }
    ],
    quiz: [
      { type: 'mc', q: 'Qu\'est-ce qui maintient un hélicoptère en l\'air ?', options: ['Un ballon rempli de gaz', 'Les pales du rotor qui poussent l\'air vers le bas', 'Les roues', 'Le rotor de queue'], answer: 1, explain: 'Les pales sont des ailes qui tournent : elles poussent l\'air vers le bas et reçoivent de la portance vers le haut.' },
      { type: 'mc', q: 'À quoi sert le rotor de queue ?', options: ['À faire monter l\'hélicoptère', 'À empêcher le fuselage de tourner sur lui-même', 'À refroidir le moteur', 'À éclairer la piste'], answer: 1, explain: 'Il s\'oppose au couple de réaction du rotor principal ; avec les palonniers, le pilote tourne le nez.' },
      { type: 'tf', q: 'Pour monter, le pilote augmente l\'inclinaison de toutes les pales ensemble.', answer: true, explain: 'C\'est le pas collectif : plus d\'inclinaison, plus de portance.' },
      { type: 'mc', q: 'Quelle pièce change l\'inclinaison des pales pendant qu\'elles tournent ?', options: ['Le plateau cyclique', 'Les patins', 'La poutre de queue', 'La cabine'], answer: 0, explain: 'Le plateau cyclique, avec ses tiges, incline les pales pour monter et pour avancer.' },
      { type: 'mc', q: 'Que sait faire un hélicoptère qu\'un avion ne sait pas faire ?', options: ['Voler sous la pluie', 'Rester immobile en l\'air', 'Voler de nuit', 'Transporter des personnes'], answer: 1, explain: 'Le vol stationnaire est possible parce que les ailes tournent même quand l\'hélicoptère est immobile.' }
    ]
  });
})();
