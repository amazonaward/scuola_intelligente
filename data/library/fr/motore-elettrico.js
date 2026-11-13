/* Il motore elettrico a corrente continua (con spazzole), come quello dei giocattoli e dei ventilatori a pile.
   L'albero è lungo l'asse z (davanti = +z, dove c'è l'elica). Magnete N in alto, S in basso. Il rotore gira intorno a z. */
(function () {
  const TAU = Math.PI * 2, D = Math.PI / 180;
  /* settore di corona circolare nel piano XY, da a0 ad a1 gradi */
  const sector = (r0, r1, a0, a1, n) => {
    const o = [], i = []; for (let k = 0; k <= n; k++) { const a = (a0 + (a1 - a0) * k / n) * D; o.push([r1 * Math.cos(a), r1 * Math.sin(a)]); i.push([r0 * Math.cos(a), r0 * Math.sin(a)]); }
    return o.concat(i.reverse());
  };
  const SPIN = { type: 'spin', axis: 'z', dir: -1 };
  /* un polo del rotore: gambo + "cappello" ad arco; orientato verso +y e poi ruotato */
  const pole = (a) => ({ t: 'group', rot: [0, 0, a], shapes: [
    { t: 'box', s: [0.2, 0.42, 1.0], pos: [0, 0.33, 0], color: '#6b7280' },
    { t: 'extrude', d: 1.0, pts: sector(0.5, 0.64, 52, 128, 10), color: '#6b7280' } ] });
  const coil = (a, ph) => ({ t: 'group', rot: [0, 0, a], shapes: [
    { t: 'box', s: [0.36, 0.3, 0.86], pos: [0, 0.3, 0], color: '#c2410c', anim: { type: 'blink', color: '#fb923c', wave: 'sin01', rate: 1, phase: ph } },
    ...[-0.32, -0.16, 0, 0.16, 0.32].map((z) => ({ t: 'box', s: [0.37, 0.31, 0.012], pos: [0, 0.3, z], color: '#9a3412' })),
    { t: 'box', s: [0.37, 0.12, 1.0], pos: [0, 0.26, 0], color: '#b45309' } ] });
  const commSeg = (a) => ({ t: 'extrude', d: 0.32, pts: sector(0.12, 0.2, a + 8, a + 112, 8), color: '#d97706' });
  const fieldLine = (x) => Array.from({ length: 2 }, (_, k) => ({ t: 'group', pos: [x, 0.62, 0.0], anim: { type: 'move', dir: [0, -1, 0], amp: 1.24, wave: 'saw', rate: 0.5, phase: k / 2 + x },
    shapes: [{ t: 'cone', r: 0.05, h: 0.12, n: 10, rot: [180, 0, 0] }] }));
  const BAT = [[0.95, -1.55, 0.95], [0.95, -1.2, 1.05], [0.45, -0.1, 1.05], [0.3, 0, 1.05], [0.22, 0.0, 1.05], [0, 0.18, 1.05], [-0.22, 0, 1.05], [-0.3, 0, 1.05], [-0.45, -0.1, 1.05], [-0.95, -1.2, 1.05], [-0.95, -1.55, 0.95]];

  LIBRARY({
    lang: 'fr',
    id: 'motore-elettrico',
    title: 'Le moteur électrique',
    intro: 'Le moteur électrique transforme le <b>courant</b> en <b>mouvement</b>, grâce aux aimants. On le trouve dans les ventilateurs, les perceuses, les lave-linge, les jouets et les voitures électriques. Regarde comment les aimants se poussent et s\'attirent !',
    model: {
      rx: 0.22, ry: -0.65, speed: 0.35, height: 470,
      parts: [
        { id: 'carcassa', name: 'Carcasse', color: '#94a3b8', alpha: 0.2, explode: [0, 0, 0],
          info: '<p>C\'est la « boîte » de métal qui contient et protège le moteur. Elle maintient les aimants en place et sert de chemin à leur champ magnétique.</p>',
          more: '<p>La carcasse est en <b>fer</b> : le champ magnétique « préfère » passer dans le fer plutôt que dans l\'air, ainsi le circuit magnétique se ferme et le moteur est plus puissant.</p>',
          shapes: [ { t: 'tube', r: 1.02, ri: 0.96, h: 1.5, n: 40, rot: [90, 0, 0] }, { t: 'cyl', r: 1.02, h: 0.05, n: 40, rot: [90, 0, 0], pos: [0, 0, -0.77] },
            { t: 'cyl', r: 0.13, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.84], color: '#cbd5e1', alpha: 1 },
            { t: 'box', s: [1.3, 0.06, 0.6], pos: [0, -1.05, 0], color: '#475569', alpha: 1 } ] },
        { id: 'magnete-n', name: 'Aimant (pôle Nord)', label: 'Aimant N', color: '#dc2626', explode: [0, 0.7, 0],
          info: '<p>Un <b>aimant</b> courbe, fixé à la carcasse, avec le pôle <b>Nord</b> tourné vers le centre. Il ne bouge jamais : c\'est le <b>stator</b> (la partie qui « reste »).</p>',
          more: '<p>Les aimants ont toujours deux pôles. Les pôles <b>identiques</b> se repoussent, les pôles <b>différents</b> s\'attirent. Dans les moteurs modernes, on utilise des aimants au <b>néodyme</b>, petits mais très puissants.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 45, 135, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, 0.83, 0.61], color: '#fef2f2', decal: 1 } ] },
        { id: 'magnete-s', name: 'Aimant (pôle Sud)', label: 'Aimant S', color: '#2563eb', explode: [0, -0.7, 0],
          info: '<p>En face, il y a un autre aimant avec le pôle <b>Sud</b> vers le centre. Entre les deux aimants, il y a un <b>champ magnétique</b> invisible qui va du Nord au Sud.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 225, 315, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, -0.83, 0.61], color: '#eff6ff', decal: 1 } ] },
        { id: 'campo', name: 'Champ magnétique', label: 'Champ magnétique', color: '#a855f7', alpha: 0.75, explode: [0, 0, -0.9],
          info: '<p>Les flèches montrent le <b>champ magnétique</b> : une « force invisible » qui sort du pôle Nord et entre dans le pôle Sud. Tu peux le voir avec de la limaille de fer sur une feuille posée sur un aimant !</p>',
          shapes: [-0.42, 0, 0.42].map((x) => ({ t: 'pipe', r: 0.012, n: 5, pts: [[x, 0.7, 0], [x, -0.7, 0]], alpha: 0.4 })).concat(fieldLine(-0.42), fieldLine(0), fieldLine(0.42)) },
        { id: 'rotore', name: 'Rotor (noyau de fer)', label: 'Rotor', color: '#6b7280', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>C\'est la partie qui <b>tourne</b>. Elle a trois « bras » de fer, chacun entouré d\'une bobine de fil de cuivre.</p>',
          more: '<p>Le noyau est fait de nombreuses feuilles de fer minces collées ensemble (les <b>tôles</b>) : ainsi il chauffe moins. Avec trois pôles, le moteur démarre toujours, quelle que soit la position où il s\'est arrêté.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 1.0, n: 20, rot: [90, 0, 0], color: '#6b7280' }, pole(0), pole(120), pole(240) ] },
        { id: 'bobine', name: 'Bobines de cuivre (électroaimants)', label: 'Bobines', color: '#c2410c', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>Ce sont des écheveaux de <b>fil de cuivre</b> enroulé de nombreuses fois. Quand le courant les traverse, elles deviennent des <b>aimants</b> (électroaimants) : éteintes, elles n\'attirent plus rien.</p>',
          more: '<p>Un courant électrique crée toujours un champ magnétique autour du fil (<b>Ørsted</b> l\'a découvert en 1820 en voyant bouger l\'aiguille d\'une boussole). En enroulant le fil de nombreuses fois autour du fer, le champ devient beaucoup plus fort. Le fil est recouvert d\'un vernis isolant : c\'est pourquoi il paraît rouge-orange.</p>',
          shapes: [ coil(0, 0), coil(120, 1 / 3), coil(240, 2 / 3) ] },
        { id: 'albero', name: 'Arbre', color: '#d1d5db', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>C\'est la « baguette » d\'acier au centre du rotor. Il tourne avec lui et sort du moteur pour faire tourner ce que l\'on veut : une hélice, une roue, un engrenage.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 2.75, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.32] }, { t: 'box', s: [0.02, 0.12, 0.6], pos: [0.055, 0, 1.4], color: '#94a3b8' } ] },
        { id: 'commutatore', name: 'Collecteur', color: '#d97706', pos: [0, 0, 0.88], explode: [0, 0, 1.25], anim: SPIN,
          info: '<p>C\'est un petit anneau de cuivre coupé en <b>trois secteurs</b>, chacun relié à une bobine. En tournant, il change les bobines qui reçoivent le courant et son sens.</p>',
          more: '<p>Sans collecteur, le rotor s\'arrêterait après un demi-tour, avec le pôle Nord de la bobine devant le pôle Sud de l\'aimant. Le collecteur <b>inverse le courant</b> juste à ce moment-là : le pôle change et le rotor est de nouveau poussé en avant.</p>',
          shapes: [0, 120, 240].map(commSeg).concat([{ t: 'cyl', r: 0.11, h: 0.34, n: 16, rot: [90, 0, 0], color: '#1f2937' }]) },
        { id: 'spazzole', name: 'Balais', color: '#1f2937', pos: [0, 0, 0.88], explode: [0, 0.4, 1.25],
          info: '<p>Deux petits blocs de <b>charbon</b> appuyés par un petit ressort contre le collecteur. En frottant, ils amènent le courant de la pile aux bobines qui tournent.</p>',
          more: '<p>Le charbon (graphite) conduit bien l\'électricité et il est « glissant ». Mais en frottant, il s\'use : les moteurs <b>sans balais</b> (brushless) des drones et des voitures électriques utilisent à la place l\'électronique pour changer le courant, et durent plus longtemps.</p>',
          shapes: [-1, 1].map((sx) => ({ t: 'group', shapes: [
            { t: 'box', s: [0.14, 0.12, 0.14], pos: [sx * 0.27, 0, 0] }, { t: 'box', s: [0.2, 0.18, 0.2], pos: [sx * 0.42, 0, 0], color: '#94a3b8', alpha: 0.6 },
            { t: 'pipe', r: 0.01, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 20 }, (_, i) => [sx * (0.34 + i * 0.008), 0.035 * Math.cos(i * 1.2), 0.035 * Math.sin(i * 1.2)]) } ] })) },
        { id: 'calotta', name: 'Flasque et roulements', label: 'Flasque', color: '#f8fafc', alpha: 0.3, pos: [0, 0, 0.82], explode: [0, 0, 2.0],
          info: '<p>C\'est le « couvercle » de plastique qui ferme le moteur et porte les balais. Au centre, il y a un <b>roulement</b> qui fait tourner l\'arbre sans frottement.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.06, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.4] }, { t: 'tube', r: 1.0, ri: 0.94, h: 0.4, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.2] },
            { t: 'tube', r: 0.14, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af', alpha: 1 },
            { t: 'box', s: [0.12, 0.06, 0.1], pos: [0.7, 0, 0.46], color: '#d97706', alpha: 1 }, { t: 'box', s: [0.12, 0.06, 0.1], pos: [-0.7, 0, 0.46], color: '#d97706', alpha: 1 } ] },
        { id: 'pila', name: 'Pile et fils', label: 'Pile', color: '#111827', explode: [0, -0.6, 0.5],
          info: '<p>La <b>pile</b> pousse le courant dans les fils : il sort du pôle <b>+</b>, passe dans le moteur et revient au pôle <b>−</b>. Si tu inverses les fils, le moteur tourne dans l\'autre sens !</p>',
          more: '<p>Plus la tension (les volts) de la pile est élevée, plus le courant est fort et plus le moteur tourne vite. Une pile ordinaire fait 1,5 V ; la batterie d\'une voiture électrique environ 400 V.</p>',
          shapes: [ { t: 'cyl', r: 0.2, h: 1.6, n: 24, rot: [0, 0, 90], pos: [0, -1.6, 0.95] }, { t: 'cyl', r: 0.205, h: 0.5, n: 24, rot: [0, 0, 90], pos: [0.55, -1.6, 0.95], color: '#f59e0b' },
            { t: 'cyl', r: 0.07, h: 0.08, n: 14, rot: [0, 0, 90], pos: [0.84, -1.6, 0.95], color: '#d1d5db' }, { t: 'cyl', r: 0.15, h: 0.02, n: 20, rot: [0, 0, 90], pos: [-0.81, -1.6, 0.95], color: '#d1d5db' },
            { t: 'box', s: [0.1, 0.1, 0.01], pos: [0.55, -1.6, 1.16], color: '#111827', decal: 1 }, { t: 'box', s: [0.03, 0.1, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 }, { t: 'box', s: [0.1, 0.03, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#ef4444', pts: [[0.9, -1.6, 0.95], [0.95, -1.2, 1.05], [0.75, -0.4, 1.3], [0.7, 0, 1.3]] },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#111827', pts: [[-0.85, -1.6, 0.95], [-0.95, -1.2, 1.05], [-0.75, -0.4, 1.3], [-0.7, 0, 1.3]] } ] },
        { id: 'corrente', name: 'Courant électrique', label: 'Courant', color: '#facc15', noLabel: true, explode: [0, 0, 0.5],
          info: '<p>Le courant (les points jaunes) part de la pile, entre par un balai, traverse une bobine du rotor et sort par l\'autre balai, en retournant à la pile.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.035, n: 5, m: 8, pos: BAT[0], color: '#facc15', anim: { type: 'path', pts: BAT, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'elica', name: 'Hélice (le travail !)', label: 'Hélice', color: '#22c55e', pos: [0, 0, 1.62], explode: [0, 0, 1.4], anim: SPIN,
          info: '<p>Voilà à quoi sert le moteur : il fait tourner quelque chose ! Ici une hélice, comme dans un ventilateur. L\'énergie électrique est devenue de l\'<b>énergie de mouvement</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.14, n: 20, rot: [90, 0, 0], color: '#15803d' } ].concat([0, 120, 240].map((a) => ({ t: 'group', rot: [0, 0, a], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.45, 0], scale: [0.16, 0.38, 0.03], rot: [0, 25, 0] } ] }))) }
      ]
    },
    steps: [
      { icon: '⚡', title: 'Du courant au mouvement', explode: 0,
        html: '<p>Un moteur électrique fait tourner un <b>arbre</b> en utilisant seulement de l\'électricité et des aimants. Il ne brûle rien, ne fait pas de fumée et chauffe à peine.</p><p>Il a une partie fixe, le <b>stator</b> (les aimants), et une partie qui tourne, le <b>rotor</b> (les bobines).</p>' },
      { icon: '🧲', title: 'Les aimants : ils s\'attirent et se repoussent', focus: ['magnete-n', 'magnete-s', 'campo'], explode: 0.2, view: { rx: 0.05, ry: -0.1 },
        html: '<p>Chaque aimant a un pôle <b>Nord</b> et un pôle <b>Sud</b>. Les pôles <b>différents s\'attirent</b>, les pôles <b>identiques se repoussent</b>.</p><p>Entre les deux aimants du moteur, il y a un <b>champ magnétique</b> invisible (les flèches violettes) qui va du Nord au Sud.</p><p class="tip">🧪 Essaie avec deux aimants de frigo : en en retournant un, tu sens qu\'ils se repoussent ou se collent.</p>' },
      { icon: '🌀', title: 'Des bobines qui deviennent des aimants', focus: ['bobine', 'rotore', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Les <b>bobines</b> sont des fils de cuivre enroulés de nombreuses fois autour du fer du rotor. Quand le courant y passe, elles deviennent des <b>électroaimants</b> : des aimants qu\'on peut allumer et éteindre !</p><p class="tip">🔩 Tu peux en construire un : enroule un fil autour d\'un clou et relie-le à une pile. Le clou attirera les trombones.</p>' },
      { icon: '🔄', title: 'Poussées et tirées : le rotor tourne', focus: ['rotore', 'bobine', 'magnete-n', 'magnete-s'], explode: 0, view: { rx: 0.0, ry: 0.0 },
        html: '<p>Le pôle d\'une bobine est <b>attiré</b> par l\'aimant d\'en face de pôle opposé et <b>repoussé</b> par celui de même pôle. Ainsi le rotor commence à tourner.</p>' },
      { icon: '🔀', title: 'Collecteur et balais : l\'astuce', focus: ['commutatore', 'spazzole', 'corrente', 'pila'], explode: 0.3, zoom: 1.1, view: { rx: 0.25, ry: -0.3 },
        html: '<p>S\'il ne se passait rien, la bobine s\'arrêterait devant l\'aimant qui l\'attire. Mais juste à ce moment-là, le <b>collecteur</b>, en tournant sous les <b>balais</b>, <b>inverse le courant</b> : le pôle de la bobine change et elle est de nouveau poussée en avant.</p><p>Ainsi le rotor ne s\'arrête jamais tant qu\'il y a du courant.</p>' },
      { icon: '🌬️', title: 'L\'arbre fait le travail', focus: ['albero', 'elica', 'calotta'], explode: 0, view: { rx: 0.25, ry: -0.9 },
        html: '<p>L\'<b>arbre</b> sort du moteur et fait tourner l\'<b>hélice</b> : l\'énergie électrique est devenue de l\'énergie de mouvement. À la place de l\'hélice, il pourrait y avoir une roue, la poulie du lave-linge ou le foret d\'une perceuse.</p>' },
      { icon: '🔁', title: 'Et à l\'envers : la dynamo', explode: 0.5, view: { rx: 0.3, ry: -0.7 },
        html: '<p>Si tu fais tourner à la main l\'arbre d\'un moteur comme celui-ci, du courant sort des balais : il devient un <b>générateur</b> (une dynamo) ! C\'est le même principe que les centrales électriques et la dynamo du vélo.</p><p class="tip">🚗 Les voitures électriques l\'utilisent quand elles freinent : le moteur devient générateur et recharge la batterie.</p>' }
    ],
    facts: [
      { icon: '🧭', title: 'Une boussole affolée', html: 'En 1820, Hans Christian Ørsted remarqua que l\'aiguille d\'une boussole bougeait près d\'un fil parcouru par du courant : il avait découvert que l\'<b>électricité et le magnétisme</b> sont liés.' },
      { icon: '🇮🇹', title: 'Galileo Ferraris', html: 'L\'ingénieur turinois <b>Galileo Ferraris</b> inventa en 1885 le moteur à champ magnétique tournant, le « papa » des moteurs des usines d\'aujourd\'hui.' },
      { icon: '🏠', title: 'Combien de moteurs à la maison ?', html: 'Réfrigérateur, lave-linge, aspirateur, ventilateur, sèche-cheveux, mixeur, lecteur… Dans une maison, il y a souvent plus de <b>30 moteurs électriques</b> !' },
      { icon: '🔋', title: 'Très efficace', html: 'Un bon moteur électrique transforme en mouvement plus de <b>90 %</b> de l\'énergie qu\'il reçoit ; un moteur à essence environ 30 %.' }
    ],
    quiz: [
      { type: 'mc', q: 'Deux aimants avec les pôles Nord face à face…', options: ['s\'attirent', 'se repoussent', 'ne font rien', 'deviennent un seul aimant'], answer: 1, explain: 'Les pôles identiques se repoussent, les pôles différents s\'attirent.' },
      { type: 'mc', q: 'Que devient une bobine de cuivre quand le courant la traverse ?', options: ['Une ampoule', 'Un électroaimant', 'Une pile', 'Un isolant'], answer: 1, explain: 'Le courant crée un champ magnétique : la bobine devient un aimant qu\'on peut allumer et éteindre.' },
      { type: 'mc', q: 'À quoi sert le collecteur ?', options: ['À refroidir le moteur', 'À inverser le courant dans les bobines au bon moment', 'À faire du bruit', 'À maintenir les aimants en place'], answer: 1, explain: 'En inversant le courant, le pôle de la bobine change, ainsi le rotor continue d\'être poussé.' },
      { type: 'tf', q: 'Si tu échanges les deux fils de la pile, le moteur tourne dans l\'autre sens.', answer: true, explain: 'Le courant circule dans le sens opposé, les pôles des bobines s\'inversent et le sens de rotation aussi.' },
      { type: 'mc', q: 'Comment s\'appelle la partie du moteur qui tourne ?', options: ['Stator', 'Rotor', 'Carcasse', 'Flasque'], answer: 1, explain: 'Le rotor tourne ; le stator (avec les aimants) reste fixe.' },
      { type: 'mc', q: 'Que se passe-t-il si tu fais tourner à la main l\'arbre d\'un moteur électrique ?', options: ['Il casse', 'Il produit du courant : il devient un générateur', 'La pile se magnétise', 'Rien'], answer: 1, explain: 'Le moteur fonctionne aussi à l\'envers : c\'est le principe des dynamos et des centrales électriques.' }
    ]
  });
})();
