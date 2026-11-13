/* La nave portacontainer. Prua verso +x, alto = +y, la linea di galleggiamento è a y = 0.
   Lo scafo è fatto da "piante" (vista dall'alto) estruse in verticale. La nave beccheggia piano sulle onde. */
(function () {
  const TAU = Math.PI * 2;
  const plan = (s, sx) => [[-3.5, -0.75], [2.0, -0.75], [2.7, -0.62], [3.2, -0.38], [3.52, -0.12], [3.6, 0], [3.52, 0.12], [3.2, 0.38], [2.7, 0.62], [2.0, 0.75], [-3.5, 0.75], [-3.62, 0.5], [-3.62, -0.5]]
    .map(([x, z]) => [x * (sx || 1), z * s]);
  /* estrude una pianta tra y0 e y1 */
  const slab = (pts, y0, y1, color, extra) => Object.assign({ t: 'extrude', d: y1 - y0, pts, rot: [90, 0, 0], pos: [0, (y0 + y1) / 2, 0], color }, extra || {});
  const BOB = { type: 'move', dir: [0, 1, 0], amp: 0.035, wave: 'sin', rate: 0.5 };
  const PAL = ['#ef4444', '#2563eb', '#f59e0b', '#16a34a', '#64748b', '#0891b2', '#b91c1c', '#7c3aed', '#ea580c', '#0f766e'];
  const boxes = [];
  for (let b = 0; b < 11; b++) {
    const x = -1.65 + b * 0.43, rows = x > 2.3 ? [-0.18, 0.18] : x > 1.9 ? [-0.48, -0.16, 0.16, 0.48] : [-0.54, -0.18, 0.18, 0.54];
    rows.forEach((z, r) => { for (let t = 0; t < (x > 2.3 ? 2 : 3); t++) boxes.push({ t: 'box', div: 1, s: [0.41, 0.25, 0.34], pos: [x, 0.7 + t * 0.26, z], color: PAL[(b * 7 + r * 3 + t * 5) % PAL.length] }); });
  }
  const winds = [0.95, 1.25, 1.55].flatMap((y) => [1, -1].map((s) => ({ t: 'box', s: [0.62, 0.07, 0.01], pos: [-2.55, y, s * 0.6], color: '#1e293b', decal: 1 }))).concat([0.95, 1.25, 1.55].map((y) => ({ t: 'box', s: [0.01, 0.07, 1.0], pos: [-2.19, y, 0], color: '#1e293b', decal: 1 })));
  const smoke = Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.12, n: 6, m: 10, pos: [-3.15, 1.75, 0], color: '#9ca3af',
    anim: [{ type: 'move', dir: [-0.6, 1, 0], amp: 0.9, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'scale', from: 0.5, to: 1.6, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 6 }] }));
  const arrow = (pos, down, len, color) => ({ t: 'group', pos, rot: down ? [180, 0, 0] : [0, 0, 0], anim: { type: 'scale', from: 0.95, to: 1.05, wave: 'sin01', rate: 0.5 },
    shapes: [ { t: 'cyl', r: 0.07, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.17, h: 0.32, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    lang: 'fr',
    id: 'nave',
    title: 'Le navire',
    intro: 'Un porte-conteneurs est long comme <b>4 terrains de football</b>, il est fait d\'acier et transporte des milliers de conteneurs… et pourtant il flotte ! Découvre le secret d\'Archimède, l\'hélice, le gouvernail et le lest.',
    model: {
      rx: 0.25, ry: -0.6, speed: 0.4, height: 460, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'mare', name: 'Mer', color: '#0284c7', alpha: 0.22, explode: [0, 0, 0], chip: false, noLabel: true,
          info: '<p>L\'eau de la mer. La partie du navire sous l\'eau s\'appelle les <b>œuvres vives</b>, celle au-dessus les <b>œuvres mortes</b>.</p>',
          shapes: [ { t: 'box', s: [9.5, 1.1, 3.6], pos: [0, -0.56, 0], div: 1 }, { t: 'box', s: [9.5, 0.01, 3.6], pos: [0, -0.005, 0], color: '#7dd3fc', alpha: 0.35, div: 4 } ] },
        { id: 'scafo', name: 'Coque (œuvres mortes)', label: 'Coque', color: '#1e3a8a', anim: BOB, explode: [0, 0.4, 0],
          info: '<p>C\'est la grande « coquille » d\'acier du navire. La partie au-dessus de l\'eau est souvent sombre ; en haut il y a le <b>pont</b>, où l\'on pose les conteneurs.</p>',
          more: '<p>La coque est faite de tôles d\'acier soudées sur un « squelette » de poutres (les <b>membrures</b> et la <b>quille</b>). Beaucoup de navires ont une <b>double coque</b> au fond : si la coque extérieure se perce, l\'eau n\'entre pas tout de suite dans le navire.</p>',
          shapes: [ slab(plan(1), 0, 0.56), slab(plan(0.99), 0.56, 0.59, '#475569'),
            slab(plan(1).filter(([x]) => x > 2.4).concat([[2.4, 0.71], [2.4, -0.71]]), 0.56, 0.78, '#1e3a8a'),
            { t: 'box', s: [0.6, 0.06, 0.012], pos: [3.0, 0.42, 0.53], rot: [0, -25, 0], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, 0.757], color: '#f8fafc', decal: 1 }, { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, -0.757], color: '#f8fafc', decal: 1 } ] },
        { id: 'carena', name: 'Carène (œuvres vives)', label: 'Carène', color: '#b91c1c', anim: BOB, explode: [0, -0.45, 0],
          info: '<p>C\'est la partie de la coque <b>sous l\'eau</b>, peinte en rouge avec une peinture spéciale qui empêche les algues et les coquillages de s\'accrocher.</p>',
          more: '<p>Plus le navire est chargé, plus la carène s\'enfonce. Sur le flanc, il y a une marque, la <b>marque de franc-bord</b> (ligne de Plimsoll), qui indique jusqu\'où le navire peut s\'enfoncer en sécurité selon les mers et les saisons.</p>',
          shapes: [ slab(plan(0.97, 0.995), -0.36, 0), slab(plan(0.85, 0.97), -0.52, -0.36), slab(plan(0.6, 0.93), -0.58, -0.52),
            { t: 'sphere', r: 1, n: 10, m: 16, pos: [3.4, -0.42, 0], scale: [0.36, 0.13, 0.13] } ] },
        { id: 'container', name: 'Conteneurs', color: '#ef4444', anim: BOB, explode: [0, 1.0, 0],
          info: '<p>Les <b>conteneurs</b> sont de grandes boîtes d\'acier toutes de la même taille. On les empile comme des briques et ils passent du navire au train puis au camion sans être ouverts.</p>',
          more: '<p>Un conteneur standard mesure 20 pieds de long (environ 6 m) : on l\'appelle <b>EVP</b>. Les plus grands navires en transportent plus de <b>24 000</b> ! Presque tout ce que nous achetons a voyagé dans un conteneur.</p>',
          shapes: boxes },
        { id: 'ponte-comando', name: 'Passerelle de commandement', label: 'Passerelle de commandement', color: '#f8fafc', anim: BOB, explode: [-0.4, 0.8, 0],
          info: '<p>Le bâtiment blanc à l\'arrière. Tout en haut se trouve la <b>passerelle de commandement</b>, d\'où le commandant et les officiers pilotent le navire avec le radar, le GPS et la radio. En dessous se trouvent les cabines de l\'équipage.</p>',
          more: '<p>Pour voir au-dessus de la pile de conteneurs, la passerelle doit être très haute. Les « ailes » sur les côtés servent à regarder le flanc du navire quand on entre au port. Le <b>radar</b> sur le toit « voit » les autres navires même la nuit et dans le brouillard.</p>',
          shapes: [ { t: 'box', s: [0.72, 1.2, 1.2], pos: [-2.55, 1.17, 0] }, { t: 'box', s: [0.5, 0.14, 1.7], pos: [-2.45, 1.72, 0] }, ...winds,
            { t: 'cyl', r: 0.025, h: 0.4, n: 8, pos: [-2.55, 2.0, 0], color: '#475569' }, { t: 'group', pos: [-2.55, 2.2, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'box', s: [0.05, 0.05, 0.45], color: '#1f2937' } ] } ] },
        { id: 'fumaiolo', name: 'Cheminée', color: '#f97316', anim: BOB, explode: [-0.6, 0.9, 0],
          info: '<p>Le « conduit de fumée » du navire : c\'est par là que sortent les fumées du moteur. Les navires modernes ont des filtres pour polluer moins.</p>',
          shapes: [ { t: 'box', s: [0.38, 0.95, 0.42], pos: [-3.15, 1.1, 0] }, { t: 'box', s: [0.4, 0.12, 0.44], pos: [-3.15, 1.52, 0], color: '#111827' }, ...smoke ] },
        { id: 'motore', name: 'Moteur diesel', label: 'Moteur', color: '#57534e', anim: BOB, explode: [0, -0.4, 1.2],
          info: '<p>Au fond du navire, il y a un moteur énorme, haut comme un immeuble de 4 étages ! Il brûle du carburant et fait tourner l\'<b>arbre</b> de l\'hélice.</p>',
          more: '<p>Les moteurs des grands navires sont des diesel <b>à deux temps</b> très lents : ils tournent à environ 80 à 100 tours par minute et sont reliés directement à l\'hélice, sans boîte de vitesses. Ils peuvent dépasser les 80 000 chevaux.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.5], pos: [-2.45, -0.15, 0] }, ...[-2.75, -2.6, -2.45, -2.3, -2.15].map((x) => ({ t: 'cyl', r: 0.07, h: 0.2, n: 12, pos: [x, 0.18, 0], color: '#78716c' })) ] },
        { id: 'asse', name: 'Arbre d\'hélice', label: 'Arbre', color: '#9ca3af', anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], pos: [0, -0.33, 0], explode: [0, -0.4, 1.2],
          info: '<p>Un long cylindre d\'acier qui transmet la rotation du moteur à l\'hélice, en sortant de la coque par un joint étanche.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 1.15, n: 12, rot: [0, 0, 90], pos: [-3.25, 0, 0] }, { t: 'box', s: [0.02, 0.08, 0.02], pos: [-3.25, 0.04, 0], color: '#475569' } ] },
        { id: 'elica', name: 'Hélice', color: '#ca8a04', pos: [-3.78, -0.33, 0], anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], explode: [-0.6, -0.4, 0],
          info: '<p>L\'hélice, en bronze, a de grandes pales vissées. En tournant, elle pousse l\'eau vers l\'<b>arrière</b> et l\'eau pousse le navire vers l\'<b>avant</b>.</p>',
          more: '<p>L\'hélice d\'un grand porte-conteneurs a un diamètre d\'environ <b>9 à 10 mètres</b> et pèse plus de 100 tonnes, mais elle tourne lentement. C\'est la troisième loi de Newton : action et réaction, comme quand tu nages en poussant l\'eau avec les mains.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1.4, 1, 1], color: '#a16207' } ].concat([0, 90, 180, 270].map((a) => ({ t: 'group', rot: [a, 0, 0], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.2, 0], scale: [0.05, 0.2, 0.12], rot: [0, 35, 0] } ] }))) },
        { id: 'timone', name: 'Gouvernail', color: '#b91c1c', pos: [-3.98, -0.25, 0], anim: [BOB, { type: 'swing', axis: 'y', amp: 22, rate: 0.2 }], explode: [-0.8, -0.3, 0],
          info: '<p>Une grande « nageoire » derrière l\'hélice. Quand il tourne, il dévie l\'eau qui arrive de l\'hélice et fait pivoter la poupe : ainsi le navire change de direction.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.5, 0.05], pos: [-0.12, 0, 0] }, { t: 'cyl', r: 0.03, h: 0.7, n: 8, pos: [0, 0.15, 0], color: '#475569' } ] },
        { id: 'zavorra', name: 'Ballasts', label: 'Lest', color: '#0369a1', alpha: 0.55, anim: BOB, explode: [0, -0.9, 0],
          info: '<p>Dans le double fond, il y a de grands réservoirs que l\'on peut remplir d\'<b>eau de mer</b>. Quand le navire est vide, le lest le fait s\'enfoncer davantage et le rend <b>stable</b>.</p>',
          more: '<p>Le poids en bas abaisse le <b>centre de gravité</b> : le navire devient comme un culbuto qui se redresse. Mais l\'eau de ballast peut transporter de petits animaux vers des mers lointaines : aujourd\'hui, elle doit être <b>traitée</b> avant d\'être rejetée.</p>',
          shapes: [-1.6, -0.4, 0.8, 2.0].map((x) => ({ t: 'group', pos: [x, -0.52, 0], anim: { type: 'scale', axis: 'y', from: 0.15, to: 1, wave: 'sin01', rate: 0.15 }, shapes: [ { t: 'box', s: [1.0, 0.16, 1.1], pos: [0, 0.08, 0] } ] })) },
        { id: 'ancora', name: 'Ancre et chaîne', label: 'Ancre', color: '#374151', anim: BOB, explode: [0.4, 0, 0.4],
          info: '<p>L\'<b>ancre</b> pèse des dizaines de tonnes. Descendue au fond avec une longue chaîne, elle s\'accroche au fond marin et maintient le navire immobile.</p>',
          shapes: [ { t: 'box', s: [0.06, 0.2, 0.02], pos: [3.05, 0.38, 0.47], rot: [0, -32, 0] }, { t: 'box', s: [0.18, 0.05, 0.02], pos: [3.05, 0.27, 0.47], rot: [0, -32, 0] },
            { t: 'cyl', r: 0.05, h: 0.03, n: 12, rot: [90, 0, 0], pos: [3.12, 0.5, 0.42], color: '#111827' } ] },
        { id: 'forze', name: 'Poids et poussée d\'Archimède', label: 'Forces', color: '#22c55e', explode: [0, 0, 0], noLabel: false,
          info: '<p>La flèche <b>rouge</b> est le <b>poids</b> du navire, qui le tire vers le bas. La flèche <b>verte</b> est la <b>poussée</b> de l\'eau vers le haut. Quand elles sont égales, le navire flotte.</p>',
          more: '<p><b>Principe d\'Archimède</b> : un corps plongé dans un fluide reçoit une poussée vers le haut égale au poids de l\'eau qu\'il déplace. La coque est vide à l\'intérieur : elle déplace énormément d\'eau, bien plus lourde que l\'acier dont elle est faite.</p>',
          shapes: [ arrow([0.2, 2.75, 0], true, 0.75, '#ef4444'), arrow([0.2, -1.75, 0], false, 0.75, '#22c55e') ] }
      ]
    },
    steps: [
      { icon: '🚢', title: 'Une ville d\'acier qui flotte', explode: 0,
        html: '<p>Les grands porte-conteneurs transportent presque toutes les marchandises du monde : vêtements, jouets, téléphones, bananes… Ils sont en <b>acier</b>, qui est beaucoup plus lourd que l\'eau. Alors pourquoi ne coulent-ils pas ?</p>' },
      { icon: '⚖️', title: 'Le secret d\'Archimède', focus: ['forze', 'carena', 'scafo', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.05 },
        html: '<p>La coque est comme une grande boîte <b>vide</b> : en s\'enfonçant un peu, elle déplace (repousse) une grande quantité d\'eau. L\'eau pousse le navire vers le haut avec une force égale au <b>poids de l\'eau déplacée</b>.</p><p>Si cette poussée est égale au poids du navire, le navire flotte.</p><p class="tip">🥣 Essaie : une boulette de pâte à modeler coule, mais si tu la modèles en forme de petit bateau, elle flotte !</p>' },
      { icon: '🐬', title: 'La forme de la coque et le bulbe', focus: ['carena', 'scafo'], explode: 0, view: { rx: -0.25, ry: -0.9 },
        html: '<p>La proue est effilée pour « couper » l\'eau. Sous la proue, il y a un <b>bulbe</b> arrondi : il crée une vague qui réduit celle du navire, ainsi on consomme moins de carburant.</p><p>La partie sous l\'eau, la <b>carène</b>, est rouge : la peinture spéciale éloigne algues et coquillages.</p>' },
      { icon: '📦', title: 'Chargement et lest', focus: ['container', 'zavorra', 'carena'], explode: 0.3, view: { rx: 0.25, ry: -0.5 },
        html: '<p>Les <b>conteneurs</b> s\'empilent sur le pont et dans les cales. Plus le navire est chargé, plus il s\'enfonce. Quand il est vide, on remplit d\'eau les <b>ballasts</b> en bas : le poids au fond le rend stable et il ne chavire pas.</p>' },
      { icon: '⚙️', title: 'Moteur, arbre et hélice', focus: ['motore', 'asse', 'elica', 'fumaiolo'], explode: 0.2, view: { rx: 0.1, ry: -1.2 },
        html: '<p>Un énorme <b>moteur diesel</b> fait tourner un long <b>arbre</b> qui sort de la coque. Au bout, il y a l\'<b>hélice</b> : ses pales poussent l\'eau vers l\'arrière, et l\'eau pousse le navire vers l\'avant.</p>' },
      { icon: '🧭', title: 'Gouvernail et passerelle de commandement', focus: ['timone', 'ponte-comando', 'elica'], explode: 0, view: { rx: 0.3, ry: -2.2 },
        html: '<p>De la <b>passerelle de commandement</b>, tout en haut, le commandant pilote le navire avec le radar et le GPS. En tournant le <b>gouvernail</b>, l\'eau poussée par l\'hélice est déviée et le navire change de direction, très lentement : pour s\'arrêter, il peut falloir plus d\'un kilomètre !</p>' },
      { icon: '⚓', title: 'Au port : l\'ancre', focus: ['ancora', 'scafo'], explode: 0, zoom: 1.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>Quand il attend d\'entrer au port, le navire jette l\'<b>ancre</b> : elle pèse des dizaines de tonnes et, avec sa longue chaîne, s\'accroche au fond marin.</p><p>Au port, d\'énormes grues déchargent les conteneurs un à un, jusqu\'à 30 par heure pour chaque grue.</p>' }
    ],
    facts: [
      { icon: '🛁', title: 'Eurêka !', html: 'On raconte qu\'<b>Archimède</b> de Syracuse a découvert son principe en entrant dans sa baignoire : voyant monter l\'eau, il courut dans la rue en criant « Eurêka ! » (« J\'ai trouvé ! »).' },
      { icon: '🏟️', title: 'Plus long que 4 terrains', html: 'Les plus grands porte-conteneurs mesurent environ <b>400 mètres</b> de long et 60 de large : plus que la tour Eiffel couchée.' },
      { icon: '🌍', title: '90 % des marchandises', html: 'Environ <b>90 %</b> des marchandises échangées dans le monde voyagent par mer. Gênes, Trieste et Gioia Tauro sont parmi les ports les plus importants d\'Italie.' },
      { icon: '🧂', title: 'Eau salée, eau douce', html: 'Dans l\'eau salée de la mer, les navires flottent un peu plus haut que dans les fleuves : l\'eau salée est plus dense et pousse davantage.' }
    ],
    quiz: [
      { type: 'mc', q: 'Pourquoi un navire en acier flotte-t-il ?', options: ['Parce que l\'acier flotte', 'Parce que la coque vide déplace beaucoup d\'eau, qui la pousse vers le haut', 'Parce que l\'hélice le maintient à la surface', 'Parce que la mer est salée'], answer: 1, explain: 'Principe d\'Archimède : la poussée est égale au poids de l\'eau déplacée par la coque.' },
      { type: 'mc', q: 'Qu\'est-ce qui pousse le navire vers l\'avant ?', options: ['Le gouvernail', 'L\'hélice qui pousse l\'eau vers l\'arrière', 'La cheminée', 'L\'ancre'], answer: 1, explain: 'Action et réaction : l\'hélice pousse l\'eau vers l\'arrière et l\'eau pousse le navire vers l\'avant.' },
      { type: 'tf', q: 'Les ballasts servent à rendre le navire plus stable quand il est vide.', answer: true, explain: 'L\'eau de ballast met du poids en bas et abaisse le centre de gravité.' },
      { type: 'mc', q: 'Comment s\'appelle la partie de la coque qui est sous l\'eau ?', options: ['Œuvres vives (carène)', 'Œuvres mortes', 'Passerelle de commandement', 'Cheminée'], answer: 0, explain: 'Les œuvres vives, ou carène, sont la partie immergée ; les œuvres mortes sont celles hors de l\'eau.' },
      { type: 'mc', q: 'À quoi sert le gouvernail ?', options: ['À freiner', 'À changer de direction', 'À flotter', 'À charger les conteneurs'], answer: 1, explain: 'En déviant l\'eau poussée par l\'hélice, le gouvernail fait tourner le navire.' },
      { type: 'mc', q: 'Qui a découvert le principe de la flottaison ?', options: ['Galilée', 'Archimède', 'Léonard de Vinci', 'Isaac Newton'], answer: 1, explain: 'Archimède de Syracuse, il y a plus de 2 200 ans.' }
    ]
  });
})();
