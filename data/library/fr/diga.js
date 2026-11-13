/* La diga e la centrale idroelettrica. Il fiume scorre verso +x; il lago (bacino) è a monte (x < 0), la diga a x ≈ 0,
   la centrale a valle (x ≈ 3). Alto = +y; la valle è larga lungo z. Ciclo (1): 0.55–0.9 le paratoie dello sfioratore si aprono. */
(function () {
  const D = Math.PI / 180;
  /* sezioni lungo x: pts (u, y) con u = -z; estrusione lungo x tra x0 e x1 */
  const alongX = (pts, x0, x1, color, extra) => Object.assign({ t: 'extrude', d: x1 - x0, pts, rot: [0, 90, 0], pos: [(x0 + x1) / 2, 0, 0], color }, extra || {});
  const HILL = (s) => [[2.0, -0.25], [4.4, -0.25], [4.4, 1.6], [4.0, 2.8], [3.5, 3.35], [2.9, 3.45], [2.3, 1.5], [2.0, 0.3]].map(([u, y]) => [u * s, y]);
  const LAKE = [[-2.0, -0.1], [2.0, -0.1], [2.3, 1.5], [2.6, 2.72], [-2.6, 2.72], [-2.3, 1.5]];
  const DAM = [[-0.38, -0.2], [1.95, -0.2], [0.28, 3.0], [-0.38, 3.0]];
  const ZP = 0.95; // asse z della condotta e della centrale
  const PEN = [[-0.6, 1.45, ZP], [0.3, 1.45, ZP], [1.05, 1.5, ZP], [1.75, 0.82, ZP], [2.25, 0.42, ZP], [2.55, 0.32, ZP]];
  const WATER = [[-1.6, 1.6, ZP], [-0.6, 1.45, ZP], ...PEN.slice(1), [2.7, 0.3, ZP + 0.25], [2.85, 0.3, ZP], [2.75, -0.05, ZP], [3.4, -0.05, ZP * 0.6], [4.2, 0.05, 0.2], [5.2, 0.05, 0]];
  const ELEC = [[2.75, 1.05, ZP], [3.3, 1.2, ZP], [3.75, 0.75, 1.65], [4.4, 2.4, 1.65], [4.6, 2.75, 1.65], [6.0, 2.85, 1.65]];
  const drops = (P, n, rate, color, r, extra) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: r || 0.06, n: 5, m: 8, pos: P[0], color, anim: [{ type: 'path', pts: P, wave: 'saw', rate, phase: k / n }].concat(extra || []) }));
  const SPILL = [[0.0, 3.05, -0.6], [0.35, 2.9, -0.6], [0.9, 2.0, -0.6], [1.5, 0.9, -0.6], [1.95, 0.15, -0.6], [2.6, 0.05, -0.4], [3.6, 0.05, -0.2]];
  const GATE = { type: 'move', dir: [0, 1, 0], amp: 0.28, wave: 'window', from: 0.55, to: 0.9, ramp: 0.2 };
  const leg = (x, z) => ({ t: 'pipe', r: 0.025, n: 4, pts: [[x, 0.0, z], [4.6 + (x - 4.6) * 0.25, 2.6, 1.65 + (z - 1.65) * 0.25]] });

  LIBRARY({
    lang: 'fr',
    id: 'diga',
    title: 'Le barrage',
    intro: 'Un barrage arrête une rivière et forme un grand <b>lac</b>. L\'eau qui descend avec force du lac fait tourner une <b>turbine</b> et un <b>générateur</b> : on produit ainsi de l\'électricité sans fumée. C\'est l\'énergie <b>hydroélectrique</b> !',
    model: {
      rx: 0.45, ry: -1.15, speed: 0.25, height: 480, bg: 'sky', floor: false,
      phases: [ { from: 0, to: 0.55, label: 'Production d\'énergie', color: '#16a34a' }, { from: 0.55, to: 0.9, label: 'Le déversoir évacue l\'eau en trop', color: '#0284c7' } ],
      parts: [
        { id: 'versanti', name: 'Montagnes et vallée', label: 'Vallée', color: '#65a30d', explode: [0, -0.5, 0],
          info: '<p>Les barrages se construisent dans des <b>vallées étroites</b> entre les montagnes : un mur relativement court suffit pour fermer la vallée et retenir énormément d\'eau.</p>',
          shapes: [ alongX(HILL(-1), -4.2, 5.2), alongX(HILL(1), -4.2, 5.2), alongX([[-2.1, -0.4], [2.1, -0.4], [2.1, -0.15], [-2.1, -0.15]], -4.2, 5.2, '#a16207'),
            ...[[-3.0, 3.5, -3.2], [1.0, 3.5, 3.1], [4.0, 3.6, -3.1], [-1.5, 3.5, 3.3], [2.6, 3.4, -3.3], [-3.6, 3.5, 3.0]].map(([x, y, z]) => ({ t: 'cone', r: 0.25, h: 0.7, n: 10, pos: [x, y, z], color: '#166534' })) ] },
        { id: 'lago', name: 'Lac artificiel (retenue)', label: 'Lac', color: '#0ea5e9', explode: [-0.8, 0, 0],
          info: '<p>Derrière le barrage, l\'eau de la rivière s\'accumule et forme un <b>lac</b>. C\'est une grande « réserve » d\'énergie : l\'eau en hauteur peut descendre et faire travailler les turbines quand il le faut.</p>',
          more: '<p>L\'eau en hauteur a de l\'<b>énergie potentielle</b> : plus elle est haute et plus elle est abondante, plus elle peut donner d\'énergie en descendant. Les lacs artificiels servent aussi de réserve d\'eau pour l\'irrigation et pour boire, et à protéger des crues.</p>',
          shapes: [ alongX(LAKE, -4.2, -0.38) ] },
        { id: 'diga', name: 'Barrage (mur)', label: 'Barrage', color: '#d6d3d1', explode: [0, 0.6, 0],
          info: '<p>C\'est un énorme mur de <b>béton</b>. Il est beaucoup plus épais à la base qu\'au sommet, parce que l\'eau pousse plus fort en profondeur.</p>',
          more: '<p>La <b>pression</b> de l\'eau augmente d\'environ 1 atmosphère tous les 10 mètres de profondeur. Ceci est un barrage-<b>poids</b> : il résiste à la poussée grâce à son énorme poids. D\'autres barrages sont en <b>arc</b>, courbés vers le lac, comme un pont appuyé sur les montagnes.</p>',
          shapes: [ { t: 'extrude', d: 6.0, pts: DAM }, { t: 'box', s: [0.75, 0.12, 6.0], pos: [-0.05, 3.06, 0], color: '#a8a29e' },
            ...Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.05, 0.12, 0.05], pos: [0.27, 3.18, -2.5 + k * 0.5], color: '#78716c' })) ] },
        { id: 'presa', name: 'Prise d\'eau (grille)', label: 'Prise', color: '#475569', pos: [-0.48, 1.45, ZP], explode: [-0.7, 0.3, 0],
          info: '<p>L\'entrée de l\'eau, sous l\'eau du côté du lac. Une <b>grille</b> arrête branches, feuilles et poissons qui pourraient abîmer la turbine.</p>',
          shapes: [ { t: 'box', s: [0.18, 0.7, 0.7] }, ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.04, 0.7, 0.025], pos: [-0.1, 0, z], color: '#1f2937' })),
            ...[-0.2, 0, 0.2].map((y) => ({ t: 'box', s: [0.04, 0.025, 0.7], pos: [-0.1, y, 0], color: '#1f2937' })) ] },
        { id: 'condotta', name: 'Conduite forcée', label: 'Conduite forcée', color: '#64748b', explode: [0, 0.3, 0.7],
          info: '<p>Un gros tuyau d\'acier qui amène l\'eau du lac jusqu\'à la centrale. En descendant, l\'eau prend de la vitesse et arrive à la turbine avec une <b>force énorme</b>.</p>',
          more: '<p>Dans la conduite, l\'énergie potentielle de l\'eau devient de l\'<b>énergie cinétique</b> (de mouvement) et de la pression. Dans certaines centrales de montagne, l\'eau tombe de plus de 1000 mètres et arrive à plus de 100 atmosphères !</p>',
          shapes: [ { t: 'pipe', r: 0.16, n: 16, curve: true, pts: PEN }, ...[1.3, 1.6, 2.0].map((x) => ({ t: 'box', s: [0.12, 0.3, 0.4], pos: [x, x < 1.5 ? 1.0 : 0.45, ZP], color: '#a8a29e' })) ] },
        { id: 'centrale', name: 'Centrale électrique', label: 'Centrale', color: '#e7e5e4', alpha: 0.3, explode: [0.5, 0.9, 0],
          info: '<p>Le bâtiment au pied du barrage où se trouvent les machines : turbines, générateurs et tableaux de commande. Beaucoup de centrales sont même creusées à l\'intérieur de la montagne.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.45, 1.25], pos: [2.95, 0.55, ZP] }, { t: 'box', s: [1.4, 0.06, 1.35], pos: [2.95, 1.3, ZP], color: '#57534e', alpha: 0.9 } ] },
        { id: 'turbina', name: 'Turbine', color: '#2563eb', pos: [2.75, 0.3, ZP], explode: [0.3, 0, 1.2],
          info: '<p>Une grande roue à pales courbes. L\'eau qui arrive de la conduite la frappe et la fait <b>tourner</b> très vite, comme le vent fait tourner un moulinet.</p>',
          more: '<p>Ceci est une turbine <b>Francis</b> : l\'eau entre par un « escargot » qui l\'entoure (la bâche spirale) et descend au centre. Pour les très hautes chutes, on utilise des turbines <b>Pelton</b> à augets, pour les basses chutes des turbines <b>Kaplan</b>, semblables à une hélice.</p>',
          shapes: [ { t: 'torus', R: 0.34, r: 0.11, n: 24, m: 8, color: '#64748b' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.22, h: 0.06, n: 20, pos: [0, 0.06, 0] },
              ...Array.from({ length: 9 }, (_, k) => ({ t: 'box', s: [0.18, 0.12, 0.02], pos: [0.13 * Math.cos(k * 40 * D), 0, 0.13 * Math.sin(k * 40 * D)], rot: [0, -k * 40 - 35, 15], color: '#93c5fd' })) ] },
            { t: 'cyl', r: 0.14, r2: 0.1, h: 0.35, n: 16, pos: [0, -0.2, 0], color: '#475569' } ] },
        { id: 'generatore', name: 'Générateur (alternateur)', label: 'Générateur', color: '#b45309', pos: [2.75, 0.95, ZP], explode: [0.3, 0.6, 1.2],
          info: '<p>Il est relié à la turbine par un arbre. À l\'intérieur, de grands <b>aimants</b> tournent près de <b>bobines de cuivre</b> : le mouvement fait naître le courant électrique.</p>',
          more: '<p>C\'est l\'<b>induction électromagnétique</b>, découverte par Faraday en 1831 : un aimant qui bouge près d\'un fil y fait circuler du courant. C\'est un moteur électrique qui fonctionne « à l\'envers » : il reçoit du mouvement et donne de l\'électricité.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 10, pos: [0, -0.35, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 3 } }, { t: 'tube', r: 0.36, ri: 0.28, h: 0.36, n: 26, color: '#b45309' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.26, h: 0.34, n: 20, color: '#dc2626' }, ...[0, 90, 180, 270].map((a) => ({ t: 'box', s: [0.1, 0.35, 0.08], pos: [0.24 * Math.cos(a * D), 0, 0.24 * Math.sin(a * D)], rot: [0, -a, 0], color: a % 180 ? '#2563eb' : '#ef4444' })) ] },
            { t: 'cyl', r: 0.37, h: 0.04, n: 26, pos: [0, 0.2, 0], color: '#78350f' } ] },
        { id: 'trasformatore', name: 'Transformateur', color: '#57534e', pos: [3.75, 0.25, 1.65], explode: [0.6, 0.3, 0.6],
          info: '<p>Il augmente la tension du courant (jusqu\'à des centaines de milliers de volts) pour le faire voyager loin le long des fils en en perdant très peu.</p>',
          shapes: [ { t: 'box', s: [0.45, 0.45, 0.4] }, ...[-0.15, 0, 0.15].map((z) => ({ t: 'cyl', r: 0.035, h: 0.25, n: 8, pos: [0, 0.35, z], color: '#d6d3d1' })),
            ...[-0.15, -0.05, 0.05, 0.15].map((x) => ({ t: 'box', s: [0.03, 0.38, 0.45], pos: [x, 0, 0], color: '#44403c' })) ] },
        { id: 'traliccio', name: 'Pylône et ligne électrique', label: 'Ligne électrique', color: '#94a3b8', explode: [0.9, 0.3, 0.6],
          info: '<p>Les <b>pylônes</b> d\'acier tiennent en hauteur les câbles à haute tension, qui portent l\'électricité aux villes, même à des centaines de kilomètres.</p>',
          shapes: [ leg(4.35, 1.4), leg(4.85, 1.4), leg(4.35, 1.9), leg(4.85, 1.9), { t: 'box', s: [0.06, 0.06, 1.2], pos: [4.6, 2.6, 1.65] }, { t: 'box', s: [0.05, 0.05, 0.8], pos: [4.6, 2.2, 1.65] },
            { t: 'cyl', r: 0.03, h: 0.4, n: 6, pos: [4.6, 2.85, 1.65] },
            ...[1.1, 1.65, 2.2].map((z) => ({ t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[3.8, 0.5, z * 0.3 + 1.15], [4.6, 2.55, z], [5.4, 2.4, z], [6.2, 2.5, z]], color: '#1f2937' })) ] },
        { id: 'sfioratore', name: 'Déversoir et vannes', label: 'Déversoir', color: '#f59e0b', explode: [0, 1.0, -0.4],
          info: '<p>Quand il pleut beaucoup et que le lac est trop plein, on ouvre les <b>vannes</b> (grandes portes d\'acier) et l\'eau en trop glisse le long du <b>déversoir</b>, sans passer par-dessus le barrage.</p>',
          shapes: [-0.9, -0.6, -0.3].map((z) => ({ t: 'box', s: [0.08, 0.32, 0.28], pos: [-0.25, 3.1, z - 0.15], anim: GATE }))
            .concat([{ t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, -1.23], color: '#a8a29e' }, { t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, 0.03], color: '#a8a29e' }]) },
        { id: 'fiume', name: 'Rivière en aval', label: 'Rivière', color: '#38bdf8', explode: [0.6, -0.3, 0],
          info: '<p>Après la turbine, l\'eau retourne dans la rivière : c\'est la même eau, elle n\'a été ni consommée ni salie. Mais le barrage change la rivière : c\'est pourquoi il faut toujours laisser un peu d\'eau (le <b>débit réservé</b>) pour les poissons et les plantes.</p>',
          shapes: [ alongX([[-1.2, -0.14], [1.2, -0.14], [1.2, 0.0], [-1.2, 0.0]], 1.95, 5.2) ] },
        { id: 'acqua', name: 'L\'eau qui coule', label: 'Eau', color: '#1d4ed8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Suis l\'eau : elle entre par la prise, descend dans la conduite, fait tourner la turbine et retourne à la rivière.</p>',
          shapes: drops(WATER, 18, 0.35, '#1d4ed8').concat(drops(SPILL, 8, 1.2, '#7dd3fc', 0.07, [{ type: 'blink', fade: true, wave: 'window', from: 0.6, to: 0.9, ramp: 0.1 }])) },
        { id: 'corrente', name: 'Courant électrique', label: 'Courant', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>Le courant produit par le générateur passe par le transformateur et part le long des câbles à haute tension vers nos maisons.</p>',
          shapes: drops(ELEC, 10, 0.5, '#facc15', 0.05) }
      ]
    },
    steps: [
      { icon: '💧', title: 'L\'énergie de l\'eau', explode: 0,
        html: '<p>L\'eau qui descend de haut a beaucoup d\'<b>énergie</b> : pense à la force d\'une cascade ! Une centrale hydroélectrique l\'utilise pour produire de l\'électricité.</p><p>C\'est une source <b>renouvelable</b> : la pluie et la neige remplissent de nouveau le lac, et on ne brûle rien.</p>' },
      { icon: '🧱', title: 'Le barrage retient le lac', focus: ['diga', 'lago', 'versanti'], explode: 0, view: { rx: 0.4, ry: 0.85 },
        html: '<p>Le <b>barrage</b> ferme la vallée et l\'eau de la rivière forme un <b>lac</b>. Le mur est beaucoup plus épais en bas : plus on va en profondeur, plus l\'eau <b>pousse fort</b>.</p><p class="tip">🍾 Fais trois trous à différentes hauteurs dans une bouteille pleine : l\'eau du trou le plus bas jaillit le plus loin !</p>' },
      { icon: '⬇️', title: 'Dans la conduite forcée', focus: ['presa', 'condotta', 'acqua'], explode: 0, view: { rx: 0.35, ry: -0.8 },
        html: '<p>L\'eau entre par la <b>prise</b>, protégée par une grille, et descend dans la <b>conduite forcée</b>, un gros tuyau d\'acier. En descendant, elle prend de la vitesse : l\'énergie de la hauteur devient énergie de <b>mouvement</b>.</p>' },
      { icon: '🌀', title: 'La turbine tourne', focus: ['turbina', 'acqua', 'condotta', 'centrale'], explode: 0.3, zoom: 1.4, view: { rx: 0.35, ry: -0.6 },
        html: '<p>Dans la centrale, l\'eau frappe les pales courbes de la <b>turbine</b> et la fait tourner très vite, comme le vent avec un moulinet. Puis l\'eau, plus lente, ressort et retourne à la rivière.</p>' },
      { icon: '🧲', title: 'Le générateur fait le courant', focus: ['generatore', 'turbina', 'corrente'], explode: 0.3, zoom: 1.4, view: { rx: 0.3, ry: -0.6 },
        html: '<p>La turbine fait tourner le <b>générateur</b> : de grands aimants tournent près de bobines de cuivre et dans la bobine naît le <b>courant électrique</b>. C\'est un moteur électrique qui fonctionne à l\'envers !</p>' },
      { icon: '🗼', title: 'Vers les villes', focus: ['trasformatore', 'traliccio', 'corrente'], explode: 0, view: { rx: 0.3, ry: -0.3 },
        html: '<p>Le <b>transformateur</b> augmente la tension du courant et les câbles soutenus par les <b>pylônes</b> le portent loin, jusqu\'aux villes et à nos maisons.</p>' },
      { icon: '🌧️', title: 'Quand le lac est trop plein', focus: ['sfioratore', 'diga', 'fiume', 'acqua'], loop: [0.5, 0.95], explode: 0, view: { rx: 0.35, ry: -1.0 },
        html: '<p>Après de fortes pluies, on ouvre les <b>vannes</b> : l\'eau en trop glisse le long du <b>déversoir</b> sans mettre le barrage en danger.</p><p class="tip">🐟 Les barrages donnent une énergie propre, mais changent la vie de la rivière : c\'est pourquoi ils doivent toujours laisser couler un peu d\'eau et ont parfois des « échelles » pour laisser passer les poissons.</p>' }
    ],
    facts: [
      { icon: '🇨🇳', title: 'Le barrage le plus puissant', html: 'Le barrage des <b>Trois-Gorges</b>, en Chine, est la centrale électrique la plus puissante du monde : elle produit autant qu\'environ 20 grandes centrales nucléaires.' },
      { icon: '🏔️', title: 'L\'Italie des barrages', html: 'En Italie, il y a plus de <b>500 grands barrages</b>, surtout dans les Alpes. Autrefois, l\'énergie hydroélectrique s\'appelait la « houille blanche » et alimentait les premières usines du Nord.' },
      { icon: '🔋', title: 'Une batterie d\'eau', html: 'Certaines centrales ont deux lacs, un en haut et un en bas : quand il y a de l\'énergie en trop, elles <b>pompent</b> l\'eau vers le haut ; quand il le faut, elles la laissent retomber. Elles fonctionnent comme une gigantesque batterie.' },
      { icon: '⚙️', title: 'La roue du moulin', html: 'Il y a déjà plus de 2000 ans, on utilisait des <b>roues à eau</b> pour moudre le blé : les turbines d\'aujourd\'hui sont leurs petites-filles ultra technologiques.' }
    ],
    quiz: [
      { type: 'mc', q: 'Pourquoi un barrage est-il plus épais à la base qu\'au sommet ?', options: ['Pour la beauté', 'Parce qu\'en profondeur l\'eau pousse plus fort', 'Pour y faire passer les voitures', 'Parce que le béton coûte peu'], answer: 1, explain: 'La pression de l\'eau augmente avec la profondeur : en bas, la poussée est maximale.' },
      { type: 'order', q: 'Remets dans l\'ordre le voyage de l\'énergie', items: ['Eau dans le lac', 'Conduite forcée', 'Turbine', 'Générateur', 'Transformateur et lignes électriques'], explain: 'L\'eau descend, fait tourner la turbine, le générateur produit du courant et les lignes le portent au loin.' },
      { type: 'mc', q: 'Qu\'est-ce qui produit le courant électrique dans le générateur ?', options: ['Le feu', 'Des aimants qui tournent près de bobines de cuivre', 'L\'eau qui touche les fils', 'Le soleil'], answer: 1, explain: 'C\'est l\'induction électromagnétique : un aimant en mouvement fait naître du courant dans une bobine.' },
      { type: 'tf', q: 'L\'énergie hydroélectrique est une source renouvelable.', answer: true, explain: 'La pluie et la neige remplissent de nouveau le lac : l\'eau ne se consomme pas.' },
      { type: 'mc', q: 'À quoi sert le déversoir ?', options: ['À faire entrer les poissons dans le lac', 'À évacuer l\'eau en trop quand le lac est trop plein', 'À produire plus de courant', 'À nettoyer la turbine'], answer: 1, explain: 'Les vannes s\'ouvrent et l\'eau en excès descend sans passer par-dessus le barrage.' },
      { type: 'mc', q: 'Quel type d\'énergie a l\'eau immobile en haut du lac ?', options: ['Énergie potentielle', 'Énergie chimique', 'Énergie nucléaire', 'Énergie lumineuse'], answer: 0, explain: 'L\'eau en hauteur a de l\'énergie potentielle, qui devient énergie de mouvement en descendant.' }
    ]
  });
})();
