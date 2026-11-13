/* La lavatrice a carica frontale. Davanti = +z, alto = +y; il cestello gira intorno all'asse z (centro a y = 0.82).
   Un programma (cycle 1): 0–0.12 carico acqua, 0.12–0.5 lavaggio, 0.5–0.62 scarico, 0.62–1 centrifuga. */
(function () {
  const CY = 0.82, TAU = Math.PI * 2;
  const circle = (r, n, cx, cy, a0) => Array.from({ length: n }, (_, i) => { const a = (a0 || 0) + (i / n) * TAU; return [(cx || 0) + r * Math.cos(a), (cy || 0) + r * Math.sin(a)]; });
  const ring = (o, i) => o.concat([o[0], i[0]], i.slice(1).reverse(), [i[0]]);
  /* pannello frontale con il foro dell'oblò */
  const front = ring([[0.6, 0], [0.6, 1.5], [-0.6, 1.5], [-0.6, 0]], circle(0.36, 32, 0, CY, -Math.PI / 2 + 0.001));
  /* acqua: segmento circolare sotto una corda (sezione della vasca) */
  const seg = (() => { const pts = [], r = 0.46, h = 0.3, a = Math.acos((r - h) / r); for (let i = 0; i <= 16; i++) { const t = -Math.PI / 2 - a + (i / 16) * 2 * a; pts.push([r * Math.cos(t), r * Math.sin(t) + r]); } return pts; })();
  const holes = [];
  for (let k = 0; k < 12; k++) for (let j = 0; j < 3; j++) { const a = (k / 12) * 360 + j * 10; holes.push({ t: 'box', s: [0.035, 0.008, 0.035], pos: [0.442 * Math.cos(a * Math.PI / 180), 0.442 * Math.sin(a * Math.PI / 180), -0.24 + j * 0.24], rot: [0, 0, a - 90], color: '#475569' }); }
  const paddle = (a) => ({ t: 'group', rot: [0, 0, a], shapes: [{ t: 'extrude', d: 0.62, pts: [[-0.06, 0.44], [0.06, 0.44], [0.02, 0.35], [-0.02, 0.35]], color: '#cbd5e1' }] });
  const cloth = (c, x, y, sx) => ({ t: 'sphere', r: 1, n: 8, m: 12, pos: [x, y, 0], scale: sx, color: c });
  const spring = (x) => ({ t: 'pipe', r: 0.012, n: 5, caps: false, pts: Array.from({ length: 34 }, (_, i) => [x + 0.04 * Math.cos(i * 0.9), 1.42 - i * 0.008, 0.04 * Math.sin(i * 0.9)]) });
  const W = (from, to) => ({ type: 'blink', fade: true, wave: 'window', from, to, ramp: 0.15 });
  const IN = [[0.4, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.32, 1.52, 0.42], [-0.32, 1.32, 0.42], [-0.15, 1.25, 0.3], [0, 0.95, 0.2], [0, 0.5, 0.1]];
  const OUT = [[0, 0.38, 0.1], [-0.2, 0.22, 0.25], [-0.35, 0.15, 0.36], [-0.45, 0.2, 0.0], [-0.45, 0.5, -0.5], [-0.45, 0.9, -0.72]];
  const drops = (P, n, rate, win, color) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.032, n: 5, m: 8, pos: P[0], color: color || '#38bdf8', anim: [{ type: 'path', pts: P, wave: 'saw', rate, phase: k / n }, W(win[0], win[1])] }));

  LIBRARY({
    lang: 'fr',
    id: 'lavatrice',
    title: 'Le lave-linge',
    intro: 'Le lave-linge lave les vêtements avec de l\'<b>eau, de la lessive, de la chaleur et du mouvement</b>. Un moteur électrique fait tourner le tambour : doucement pour brasser le linge dans l\'eau, très vite pour l\'essorer. Regarde un programme complet !',
    model: {
      rx: 0.22, ry: -0.6, speed: 0.13, height: 470,
      phases: [
        { from: 0, to: 0.12, label: '1 · Remplissage d\'eau', color: '#0284c7' },
        { from: 0.12, to: 0.5, label: '2 · Lavage', color: '#16a34a' },
        { from: 0.5, to: 0.62, label: '3 · Vidange', color: '#6b7280' },
        { from: 0.62, to: 1, label: '4 · Essorage', color: '#ea580c' }
      ],
      parts: [
        { id: 'mobile', name: 'Caisson', color: '#f8fafc', alpha: 0.26, explode: [0, 0, 0],
          info: '<p>C\'est la boîte de tôle blanche qui contient tout. Dessous, elle a quatre petits pieds réglables : le lave-linge doit être <b>bien d\'aplomb</b>, sinon pendant l\'essorage il « marche » !</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: front, pos: [0, 0, 0.6] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [-0.6, 0.85, 0] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [0.6, 0.85, 0] },
            { t: 'box', s: [1.2, 1.7, 0.03], pos: [0, 0.85, -0.6] }, { t: 'box', s: [1.24, 0.04, 1.24], pos: [0, 1.72, 0], color: '#e2e8f0' },
            ...[[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]].map(([x, z]) => ({ t: 'cyl', r: 0.05, h: 0.06, n: 12, pos: [x, -0.03, z], color: '#334155', alpha: 1 })) ] },
        { id: 'pannello', name: 'Tableau de commande', label: 'Commandes', color: '#e2e8f0', pos: [0, 1.61, 0.6], explode: [0, 0.35, 0.4],
          info: '<p>Ici tu choisis le <b>programme</b> : température, tours d\'essorage, durée. Derrière, il y a une carte électronique qui commande toutes les pièces au bon moment.</p>',
          more: '<p>La carte est un petit ordinateur (microcontrôleur) qui suit le programme pas à pas : elle ouvre l\'électrovanne, mesure le niveau de l\'eau avec un <b>pressostat</b>, allume la résistance jusqu\'à la bonne température et règle la vitesse du moteur.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.22, 0.05] }, { t: 'cyl', r: 0.08, h: 0.05, n: 24, rot: [90, 0, 0], pos: [0.2, 0, 0.04], color: '#94a3b8' },
            { t: 'box', s: [0.02, 0.06, 0.01], pos: [0.2, 0.04, 0.07], color: '#1f2937', decal: 1 },
            { t: 'box', s: [0.26, 0.1, 0.01], pos: [0.45, 0, 0.03], color: '#0f172a', decal: 1 },
            { t: 'box', s: [0.12, 0.04, 0.01], pos: [0.45, 0, 0.036], color: '#22c55e', decal: 2, anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'cassetto', name: 'Bac à lessive', label: 'Lessive', color: '#f1f5f9', pos: [-0.32, 1.5, 0.45], explode: [0, 0.2, 0.75],
          info: '<p>Ici tu mets la <b>lessive</b> et l\'adoucissant. L\'eau qui entre passe par le bac et les emporte avec elle, dans la cuve.</p>',
          more: '<p>La lessive contient des <b>tensioactifs</b> : des molécules avec une « tête » qui aime l\'eau et une « queue » qui aime le gras. Les queues s\'accrochent à la saleté grasse et les têtes l\'entraînent dans l\'eau.</p>',
          shapes: [ { t: 'box', s: [0.4, 0.14, 0.4] }, { t: 'box', s: [0.42, 0.16, 0.03], pos: [0, 0, 0.21], color: '#e2e8f0' }, { t: 'box', s: [0.12, 0.08, 0.3], pos: [-0.1, 0.05, 0], color: '#60a5fa' } ] },
        { id: 'elettrovalvola', name: 'Électrovanne et tuyau d\'arrivée', label: 'Électrovanne', color: '#64748b', explode: [0.3, 0.4, -0.4],
          info: '<p>C\'est un robinet commandé par l\'électricité : quand la carte le dit, il s\'ouvre et laisse entrer l\'eau du tuyau relié au robinet de la maison.</p>',
          more: '<p>À l\'intérieur, il y a un petit <b>électroaimant</b> : quand le courant passe, il tire un petit piston de fer et l\'eau peut passer. Sans courant, un ressort le referme.</p>',
          shapes: [ { t: 'box', s: [0.14, 0.12, 0.12], pos: [0.4, 1.58, -0.5], color: '#1f2937' }, { t: 'cyl', r: 0.03, h: 0.25, n: 10, pos: [0.4, 1.58, -0.68], rot: [90, 0, 0], color: '#94a3b8' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.4, 1.58, -0.8], [0.4, 1.58, -0.95], [0.55, 1.3, -1.0], [0.6, 0.9, -1.0]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.33, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.3, 1.58, 0.3]], color: '#cbd5e1' } ] },
        { id: 'vasca', name: 'Cuve', color: '#94a3b8', alpha: 0.3, pos: [0, CY, 0], explode: [0, 0, -0.55],
          info: '<p>C\'est le grand récipient fixe qui contient l\'eau. À l\'intérieur tourne le tambour. À l\'avant, elle a un joint de caoutchouc (le soufflet) qui ferme contre le hublot.</p>',
          shapes: [ { t: 'tube', r: 0.5, ri: 0.47, h: 0.9, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.5, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.45] },
            { t: 'tube', r: 0.5, ri: 0.36, h: 0.12, n: 36, rot: [90, 0, 0], pos: [0, 0, 0.48], color: '#334155', alpha: 0.7 } ] },
        { id: 'cestello', name: 'Tambour', color: '#d1d5db', pos: [0, CY, 0], explode: [0, 0, 0.9], anim: { type: 'spin', axis: 'z', rate: 3 },
          info: '<p>C\'est le « tonneau » d\'acier percé de trous où tu mets le linge. En tournant, il le soulève avec ses <b>ailettes</b> et le laisse retomber dans l\'eau : en tapant, la saleté se détache.</p>',
          more: '<p>Les trous laissent passer l\'eau et la lessive. À l\'essorage, le tambour atteint <b>1 000 à 1 400 tours par minute</b> : le linge est plaqué contre la paroi et l\'eau gicle par les trous, comme quand tu fais tourner un parapluie mouillé.</p>',
          shapes: [ { t: 'tube', r: 0.45, ri: 0.43, h: 0.72, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.45, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.36], color: '#9ca3af' },
            { t: 'torus', R: 0.42, r: 0.025, n: 36, m: 6, rot: [90, 0, 0], pos: [0, 0, 0.36] } ].concat(holes, [0, 120, 240].map(paddle)) },
        { id: 'panni', name: 'Linge', color: '#f472b6', explode: [0, 0, 0.9],
          info: '<p>Pendant le <b>lavage</b>, le linge est soulevé puis retombe dans l\'eau ; pendant l\'<b>essorage</b>, il reste plaqué contre la paroi du tambour qui tourne très vite.</p>',
          shapes: [ { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 3 }, W(0.04, 0.58)], shapes: [
              cloth('#f472b6', -0.2, -0.25, [0.16, 0.1, 0.22]), cloth('#60a5fa', 0.15, -0.28, [0.17, 0.09, 0.2]), cloth('#facc15', 0.25, 0.0, [0.1, 0.15, 0.2]), cloth('#4ade80', -0.05, -0.12, [0.14, 0.1, 0.18]) ] },
            { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 18 }, W(0.62, 1)], shapes: [
              cloth('#f472b6', 0, -0.37, [0.22, 0.06, 0.22]), cloth('#60a5fa', 0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#facc15', -0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#4ade80', 0, 0.37, [0.2, 0.06, 0.2]) ] } ] },
        { id: 'acqua', name: 'Eau et lessive', label: 'Eau', color: '#38bdf8', alpha: 0.55, pos: [0, CY - 0.46, 0], explode: [0, 0, -0.55],
          info: '<p>L\'eau dissout la lessive et emporte la saleté. Les lave-linge modernes utilisent très peu d\'eau : environ <b>40 à 50 litres</b> pour un lavage complet.</p>',
          shapes: [ { t: 'group', anim: { type: 'scale', axis: 'y', from: 0.03, to: 1, wave: 'window', win: [0, 0.62], ramp: 0.2 }, shapes: [ { t: 'extrude', d: 0.86, pts: seg } ] },
            ...drops(IN.map(([x, y, z]) => [x, y - CY + 0.46, z]), 8, 3, [0, 0.13]), ...drops(OUT.map(([x, y, z]) => [x, y - CY + 0.46, z]), 7, 3, [0.5, 0.63], '#64748b') ] },
        { id: 'resistenza', name: 'Résistance (chauffe l\'eau)', label: 'Résistance', color: '#9ca3af', pos: [0, CY - 0.4, 0], explode: [0, -0.35, -0.55],
          info: '<p>C\'est un tube de métal au fond de la cuve. Quand le courant y passe, il <b>chauffe</b>, comme la plaque d\'une cuisinière, et amène l\'eau à la température choisie (30, 40, 60 °C…).</p>',
          more: '<p>C\'est l\'<b>effet Joule</b> : un courant qui traverse un fil qui « résiste » le chauffe. Chauffer l\'eau est ce qui consomme le plus d\'énergie : laver à 30 °C au lieu de 60 °C fait économiser plus de la moitié de l\'électricité.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[-0.12, 0, 0.35], [-0.12, 0, -0.3], [0, 0, -0.38], [0.12, 0, -0.3], [0.12, 0, 0.35]],
            anim: { type: 'blink', color: '#ef4444', wave: 'window', from: 0.15, to: 0.45, ramp: 0.25 } } ] },
        { id: 'motore', name: 'Moteur électrique', label: 'Moteur', color: '#b45309', pos: [0.28, 0.2, -0.3], explode: [0.5, -0.35, 0],
          info: '<p>C\'est le moteur qui fait tourner le tambour. Il fonctionne avec des aimants et des bobines de cuivre : le courant le fait tourner, doucement pour laver et très vite pour l\'essorage.</p>',
          more: '<p>Les lave-linge modernes ont souvent un moteur <b>« inverter »</b> sans balais, contrôlé par l\'électronique : il est silencieux, consomme moins et peut être relié directement au tambour, sans courroie (<i>direct drive</i>).</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.36, n: 24, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'tube', r: 0.135, ri: 0.1, h: 0.2, n: 24, rot: [90, 0, 0], color: '#b45309' },
            { t: 'group', pos: [0, 0, -0.25], anim: { type: 'spin', axis: 'z', rate: 3 * 0.42 / 0.06 / 4 }, shapes: [ { t: 'cyl', r: 0.06, h: 0.06, n: 16, rot: [90, 0, 0], color: '#475569' }, { t: 'box', s: [0.1, 0.015, 0.065], color: '#94a3b8' } ] } ] },
        { id: 'cinghia', name: 'Poulie et courroie', label: 'Courroie', color: '#1f2937', explode: [0, 0, -0.75],
          info: '<p>Le moteur fait tourner une <b>petite roue</b> qui, avec une courroie de caoutchouc, fait tourner la <b>grande roue</b> (poulie) fixée au tambour.</p>',
          more: '<p>Une petite roue qui entraîne une grande roue : la grande tourne plus <b>lentement</b> mais avec plus de <b>force</b>. C\'est la même astuce que les vitesses du vélo.</p>',
          shapes: [ { t: 'group', pos: [0, CY, -0.55], anim: { type: 'spin', axis: 'z', rate: 3 / 4 }, shapes: [
              { t: 'torus', R: 0.4, r: 0.03, n: 36, m: 6, rot: [90, 0, 0], color: '#6b7280' }, { t: 'cyl', r: 0.07, h: 0.08, n: 16, rot: [90, 0, 0], color: '#6b7280' },
              ...[0, 120, 240].map((a) => ({ t: 'box', s: [0.36, 0.05, 0.03], pos: [0.2 * Math.cos(a * Math.PI / 180), 0.2 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#6b7280' })) ] },
            { t: 'pipe', r: 0.018, n: 5, curve: true, pts: [[-0.05, CY - 0.43, -0.55], [0.18, 0.18, -0.55], [0.28, 0.13, -0.55], [0.35, 0.2, -0.55], [0.38, CY - 0.1, -0.55], [0.3, CY + 0.3, -0.55], [0, CY + 0.44, -0.55], [-0.3, CY + 0.3, -0.55], [-0.43, CY, -0.55], [-0.3, CY - 0.3, -0.55], [-0.05, CY - 0.43, -0.55]] } ] },
        { id: 'sospensioni', name: 'Ressorts et amortisseurs', label: 'Amortisseurs', color: '#facc15', explode: [0, 0, 0.35],
          info: '<p>La cuve n\'est pas fixée rigidement au caisson : elle est suspendue à deux <b>ressorts</b> et posée sur deux <b>amortisseurs</b>. Ainsi, les vibrations de l\'essorage ne secouent pas tout le lave-linge.</p>',
          more: '<p>Les amortisseurs transforment le mouvement en chaleur par frottement, en atténuant les secousses : ils ressemblent à ceux des voitures.</p>',
          shapes: [ spring(-0.38), spring(0.38), { t: 'pipe', r: 0.035, n: 10, pts: [[-0.3, CY - 0.45, 0.1], [-0.45, 0.06, 0.1]], color: '#475569' }, { t: 'pipe', r: 0.022, n: 8, pts: [[-0.35, CY - 0.6, 0.1], [-0.3, CY - 0.45, 0.1]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.035, n: 10, pts: [[0.3, CY - 0.45, 0.1], [0.45, 0.06, 0.1]], color: '#475569' } ] },
        { id: 'contrappeso', name: 'Contrepoids', color: '#a8a29e', pos: [0, 1.38, 0.38], explode: [0, 0.45, 0.2],
          info: '<p>C\'est un gros bloc de <b>béton</b> fixé à la cuve. Ça paraît étrange, mais le poids aide : il maintient la cuve en place quand le tambour tourne très vite avec tout le linge d\'un seul côté.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.14, 0.18] } ] },
        { id: 'pompa', name: 'Pompe de vidange', label: 'Pompe', color: '#1e293b', pos: [-0.35, 0.15, 0.36], explode: [-0.4, -0.3, 0.4],
          info: '<p>À la fin du lavage, la pompe aspire l\'eau sale au fond de la cuve et la pousse dehors, dans l\'évacuation de la maison. Elle a un <b>filtre</b> qui retient les pièces de monnaie et les boutons.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 0.16, n: 20, rot: [90, 0, 0] }, { t: 'group', anim: { type: 'spin', axis: 'z', rate: 20 }, shapes: [0, 60, 120].map((a) => ({ t: 'box', s: [0.12, 0.015, 0.03], pos: [0, 0, 0.09], rot: [0, 0, a], color: '#f59e0b' })) },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.05, 0.05, -0.05], [0.25, 0.23, -0.26]], color: '#475569' },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[-0.08, 0, 0], [-0.1, 0.05, -0.36], [-0.1, 0.35, -0.86], [-0.1, 0.75, -1.08], [-0.1, 0.95, -1.1]], color: '#94a3b8' } ] },
        { id: 'oblo', name: 'Hublot (porte)', label: 'Hublot', color: '#cbd5e1', pos: [0, CY, 0.66], explode: [-1.0, 0, 0.9],
          info: '<p>La porte ronde avec la vitre épaisse : elle laisse voir le linge et ferme bien le lave-linge. Pendant le lavage, elle se <b>verrouille</b> toute seule, pour qu\'on ne puisse pas l\'ouvrir avec de l\'eau dedans.</p>',
          shapes: [ { t: 'torus', R: 0.37, r: 0.06, n: 36, m: 8, rot: [90, 0, 0] }, { t: 'sphere', r: 0.34, n: 8, m: 28, hemi: true, rot: [-90, 0, 0], scale: [1, 0.35, 1], pos: [0, 0, -0.02], color: '#bae6fd', alpha: 0.3 },
            { t: 'box', s: [0.1, 0.2, 0.06], pos: [-0.42, 0, 0], color: '#94a3b8' }, { t: 'box', s: [0.06, 0.16, 0.08], pos: [0.42, 0, 0.02], color: '#64748b' } ] }
      ]
    },
    steps: [
      { icon: '🧺', title: 'Une machine pour brasser le linge', explode: 0,
        html: '<p>Pour laver, il faut quatre choses : de l\'<b>eau</b>, de la <b>lessive</b>, de la <b>chaleur</b> et du <b>mouvement</b>. Autrefois, on lavait à la main, en frottant le linge sur le lavoir ; le lave-linge le fait à notre place.</p><p>Le cœur est le <b>tambour</b> percé qui tourne dans la <b>cuve</b>, entraîné par un <b>moteur électrique</b>.</p>' },
      { icon: '🚰', title: '1 · L\'eau entre', loop: [0, 0.14], focus: ['elettrovalvola', 'cassetto', 'acqua', 'vasca', 'pannello'], explode: 0.2, view: { rx: 0.35, ry: -0.9 },
        html: '<p>La carte électronique ouvre l\'<b>électrovanne</b> : l\'eau du robinet de la maison entre, passe dans le <b>bac</b> et entraîne la lessive dans la cuve.</p><p>Un capteur de pression (le pressostat) « sent » quand il y a assez d\'eau et ferme la vanne.</p>' },
      { icon: '🔥', title: '2 · Chauffer l\'eau', loop: [0.14, 0.45], focus: ['resistenza', 'acqua', 'vasca'], explode: 0.3, view: { rx: 0.1, ry: -0.3 },
        html: '<p>Au fond de la cuve, il y a la <b>résistance</b> : un tube qui chauffe quand le courant y passe, comme la plaque d\'une cuisinière. Elle chauffe l\'eau à 30, 40 ou 60 °C.</p><p class="tip">🌍 Chauffer l\'eau est ce qui consomme le plus : laver à 30 °C fait économiser beaucoup d\'énergie.</p>' },
      { icon: '🔄', title: '2 · Lavage : de haut en bas dans l\'eau', loop: [0.14, 0.5], focus: ['cestello', 'panni', 'acqua'], explode: 0, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Le tambour tourne doucement, tantôt dans un sens, tantôt dans l\'autre. Les <b>ailettes</b> soulèvent le linge et le laissent retomber dans l\'eau savonneuse : en tapant et en frottant les uns contre les autres, la saleté se détache.</p>' },
      { icon: '⚙️', title: 'Moteur, courroie et poulie', focus: ['motore', 'cinghia', 'cestello'], explode: 0.45, view: { rx: 0.2, ry: -2.5 },
        html: '<p>Le <b>moteur</b> fait tourner une petite roue ; la <b>courroie</b> entraîne la grande <b>poulie</b> fixée derrière le tambour. La grande roue tourne plus lentement mais avec plus de force.</p>' },
      { icon: '🚿', title: '3 · Vidange de l\'eau sale', loop: [0.48, 0.64], focus: ['pompa', 'acqua', 'vasca'], explode: 0.2, view: { rx: 0.25, ry: -1.1 },
        html: '<p>La <b>pompe de vidange</b> aspire l\'eau sale au fond et la pousse dehors par le tuyau, dans l\'évacuation de la maison. Ensuite, de l\'eau propre entre pour le <b>rinçage</b>, qui enlève la lessive.</p>' },
      { icon: '🌀', title: '4 · Essorage : presser en tournant', loop: [0.64, 1], focus: ['cestello', 'panni', 'sospensioni', 'contrappeso'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>Le tambour tourne très vite, jusqu\'à <b>1 400 tours par minute</b>. Le linge est plaqué contre la paroi et l\'eau gicle par les trous.</p><p>Les <b>ressorts</b>, les <b>amortisseurs</b> et le lourd <b>contrepoids</b> en béton empêchent le lave-linge de sauter à travers la pièce !</p><p class="tip">☂️ Fais tourner un parapluie mouillé : les gouttes s\'envolent. C\'est la même chose !</p>' }
    ],
    facts: [
      { icon: '🪨', title: 'Le contrepoids en béton', html: 'À l\'intérieur de presque tous les lave-linge, il y a un bloc de <b>béton</b> de 20 à 25 kg : il sert à le maintenir en place pendant l\'essorage.' },
      { icon: '🧼', title: 'Laver à 30 degrés', html: 'Grâce aux lessives modernes, beaucoup de vêtements se lavent bien même à 30 °C, en consommant moins de la moitié de l\'énergie d\'un lavage à 60 °C.' },
      { icon: '🕰️', title: 'Avant le lave-linge', html: 'Jusque dans les années 1960, en Italie, beaucoup de familles lavaient à la main, au <b>lavoir</b> du village ou à la rivière. Le lave-linge a fait gagner énormément de temps, surtout aux femmes.' },
      { icon: '🐟', title: 'Microplastiques', html: 'Les tissus synthétiques (comme la polaire) perdent à chaque lavage de minuscules fils de plastique, qui peuvent arriver jusqu\'à la mer. Il existe des filtres et des sacs spéciaux pour les retenir.' }
    ],
    quiz: [
      { type: 'order', q: 'Mets dans l\'ordre les phases d\'un lavage', items: ['Remplissage d\'eau', 'Lavage', 'Vidange', 'Essorage'], explain: 'L\'eau entre avec la lessive, on lave, on vidange l\'eau sale et enfin on essore.' },
      { type: 'mc', q: 'Quelle pièce chauffe l\'eau ?', options: ['Le moteur', 'La résistance', 'La pompe', 'Le contrepoids'], answer: 1, explain: 'La résistance chauffe quand le courant la traverse (effet Joule).' },
      { type: 'mc', q: 'Pourquoi l\'eau sort-elle du linge pendant l\'essorage ?', options: ['Parce qu\'elle s\'évapore', 'Parce qu\'en tournant très vite le linge est plaqué à la paroi et l\'eau s\'envole par les trous', 'Parce que la pompe l\'aspire du linge', 'Parce que la lessive la dissout'], answer: 1, explain: 'En tournant fort, tout a tendance à s\'éloigner du centre : l\'eau passe par les trous du tambour.' },
      { type: 'tf', q: 'Le contrepoids en béton sert à rendre le lave-linge plus stable.', answer: true, explain: 'Le poids maintient la cuve en place et réduit les vibrations pendant l\'essorage.' },
      { type: 'mc', q: 'Que fait la pompe de vidange ?', options: ['Elle fait entrer l\'eau propre', 'Elle évacue l\'eau sale', 'Elle fait tourner le tambour', 'Elle ouvre le hublot'], answer: 1, explain: 'Elle aspire l\'eau au fond de la cuve et la pousse dans l\'évacuation de la maison.' },
      { type: 'mc', q: 'À quoi servent les ailettes à l\'intérieur du tambour ?', options: ['À décorer', 'À soulever le linge et le laisser retomber dans l\'eau', 'À couper les fils', 'À chauffer'], answer: 1, explain: 'Elles soulèvent le linge qui, en retombant et en tapant, se lave mieux.' }
    ]
  });
})();
