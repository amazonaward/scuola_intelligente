/* L'aereo di linea (bimotore). Il muso guarda verso +x, alto = +y, l'ala destra è verso +z.
   Le ali sono basse (y = -0.3) con un piccolo diedro; i comandi (alettoni, equilibratore, timone) oscillano. */
(function () {
  const ROT = [0, 0, -90]; // porta l'asse y delle primitive lungo x
  const D = Math.PI / 180, DIH = 5;
  const FUS = [[0, -3.35], [0.1, -3.25], [0.24, -2.9], [0.38, -2.3], [0.49, -1.6], [0.52, -1.0], [0.52, 2.1], [0.5, 2.5], [0.45, 2.8], [0.36, 3.05], [0.24, 3.22], [0.1, 3.32], [0, 3.35]];
  /* pianta di un'ala (x, apertura) → estrusa sottile e ruotata nel piano XZ */
  const WING = [[1.0, 0], [-0.5, 0], [-1.45, 3.2], [-1.0, 3.2]];
  const wing = (side) => ({ t: 'group', pos: [0, -0.3, 0], rot: [-side * DIH, 0, 0], shapes: [
    { t: 'extrude', d: 0.09, pts: WING.map(([x, z]) => [x, z * side]), rot: [90, 0, 0], smooth: true },
    { t: 'extrude', d: 0.05, pts: [[-1.0, 3.2 * side], [-1.45, 3.2 * side], [-1.38, 3.32 * side], [-1.12, 3.35 * side]], rot: [90, 0, 0], color: '#94a3b8' } ] });
  /* superficie mobile incernierata lungo il bordo d'uscita dell'ala */
  const TEx = (z) => -0.5 - 0.297 * Math.abs(z), TEy = (z) => -0.3 + Math.abs(z) * Math.tan(DIH * D);
  const flapAt = (zc, len, chord, amp, base, color, rate) => {
    const side = Math.sign(zc);
    return { t: 'group', pos: [TEx(zc), TEy(zc), zc], rot: [-side * DIH, -side * 16.5, 0], anim: { type: 'swing', axis: 'z', amp, base: base || 0, wave: 'sin', rate: rate || 0.5 },
      shapes: [ { t: 'box', s: [chord, 0.03, len], pos: [-chord / 2, 0, 0], color, div: 1 } ] };
  };
  const nacelle = [[0.22, -0.55], [0.26, -0.35], [0.29, -0.05], [0.29, 0.25], [0.27, 0.45], [0.25, 0.55]];
  const engine = (z) => ({ t: 'group', pos: [0.75, -0.62, z], shapes: [
    { t: 'lathe', n: 28, pts: nacelle, rot: ROT, ds: true, color: '#e5e7eb' },
    { t: 'cyl', r: 0.17, r2: 0.05, h: 0.25, n: 16, rot: ROT, pos: [-0.65, 0, 0], color: '#6b7280' },
    { t: 'group', pos: [0.42, 0, 0], anim: { type: 'spin', axis: 'x', rate: 6 }, shapes: [
      { t: 'cone', r: 0.08, h: 0.14, n: 14, rot: ROT, color: '#475569' }, ...Array.from({ length: 14 }, (_, k) => ({ t: 'box', s: [0.012, 0.19, 0.06], pos: [0, 0.135 * Math.cos(k * 25.7 * D), 0.135 * Math.sin(k * 25.7 * D)], rot: [k * 25.7, 0, 0], color: '#94a3b8' })) ] },
    { t: 'cyl', r: 0.24, h: 0.02, n: 24, rot: ROT, pos: [0.25, 0, 0], color: '#1f2937' },
    { t: 'box', s: [0.7, 0.24, 0.05], pos: [0.0, 0.2, 0], color: '#cbd5e1' } ] });
  const flow = (y0, zz, top) => top
    ? [[2.2, y0, zz], [0.9, y0, zz], [0.45, y0 + 0.05, zz], [0.0, y0 + 0.1, zz], [-0.5, y0 + 0.04, zz], [-1.0, y0 - 0.12, zz], [-2.2, y0 - 0.45, zz]]
    : [[2.2, y0, zz], [0.9, y0, zz], [0.45, y0 - 0.02, zz], [0.0, y0 - 0.03, zz], [-0.5, y0 - 0.04, zz], [-1.0, y0 - 0.12, zz], [-2.2, y0 - 0.45, zz]];
  const puffs = (P, n, rate, color) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.04, n: 5, m: 8, pos: P[0], color, anim: { type: 'path', pts: P, wave: 'saw', rate, phase: k / n } }));
  const arrow = (from, dir, len, color) => {
    const rot = dir[1] > 0 ? [0, 0, 0] : dir[1] < 0 ? [180, 0, 0] : dir[0] > 0 ? [0, 0, -90] : [0, 0, 90];
    return { t: 'group', pos: from, rot, shapes: [ { t: 'cyl', r: 0.05, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.13, h: 0.3, n: 14, pos: [0, len, 0], color } ],
      anim: { type: 'scale', from: 0.92, to: 1.06, wave: 'sin01', rate: 0.8 } };
  };
  const winds = (side) => Array.from({ length: 16 }, (_, k) => ({ t: 'box', s: [0.08, 0.1, 0.01], pos: [1.85 - k * 0.24, 0.13, side * 0.513], color: '#1e293b', decal: 1 }));

  LIBRARY({
    lang: 'fr',
    id: 'aereo',
    title: 'L\'avion',
    intro: 'Comment un objet de <b>400 tonnes</b> peut-il rester en l\'air ? Le secret est dans la forme des <b>ailes</b> : l\'air qui les longe est poussé vers le bas et l\'aile reçoit une poussée vers le haut, la <b>portance</b>. Les moteurs servent à garder la vitesse.',
    model: {
      rx: 0.5, ry: -0.7, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.15,
      parts: [
        { id: 'fusoliera', name: 'Fuselage', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>C\'est le « corps » de l\'avion, un long tube d\'aluminium ou de fibre de carbone. À l\'intérieur se trouvent les passagers ; sous le plancher, les bagages.</p>',
          more: '<p>En vol, à 11 000 mètres, la pression dehors est le quart de celle du sol et la température est de −50 °C. Le fuselage est <b>pressurisé</b> : on y pompe de l\'air, comme dans un ballon, pour pouvoir respirer normalement. C\'est pour cela qu\'il a une forme de tube : il résiste mieux à la pression.</p>',
          shapes: [ { t: 'lathe', n: 30, pts: FUS, rot: ROT }, ...winds(1), ...winds(-1),
            { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, 0.522], color: '#2563eb', decal: 1 }, { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, -0.522], color: '#2563eb', decal: 1 },
            { t: 'box', s: [0.16, 0.34, 0.01], pos: [2.3, 0.0, 0.517], color: '#cbd5e1', decal: 1 } ] },
        { id: 'cabina', name: 'Cabine de pilotage', label: 'Cockpit', color: '#1e293b', explode: [0.6, 0.2, 0],
          info: '<p>À l\'avant, derrière les vitres, sont assis les <b>pilotes</b>, avec le manche (ou le mini-manche latéral), les manettes des moteurs et plein d\'écrans. Dans le nez se trouve le <b>radar</b> météo.</p>',
          more: '<p>Une grande partie du vol est pilotée par le <b>pilote automatique</b>, mais les pilotes contrôlent tout et font le décollage et l\'atterrissage. Les avions modernes sont « fly-by-wire » : les commandes des pilotes arrivent aux ordinateurs, qui bougent les gouvernes avec des moteurs hydrauliques.</p>',
          shapes: [ ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.14, 0.1, 0.12], pos: [2.98, 0.24, z], rot: [0, 0, -38], decal: 1 })),
            { t: 'cyl', r: 0.12, h: 0.05, n: 16, rot: ROT, pos: [3.3, 0, 0], color: '#94a3b8' } ] },
        { id: 'ali', name: 'Ailes', color: '#cbd5e1', explode: [0, -0.3, 0],
          info: '<p>Les ailes sont la pièce la plus importante : leur forme courbe et leur inclinaison poussent l\'air vers le <b>bas</b> ; en réaction, l\'air pousse l\'aile vers le <b>haut</b>. À l\'intérieur se trouvent les <b>réservoirs</b> de carburant !</p>',
          more: '<p>Le profil de l\'aile (bombé dessus, plus plat dessous) fait que l\'air du dessus va plus vite et a une <b>pression plus basse</b> que celui du dessous (principe de Bernoulli). La différence de pression, sur une surface de centaines de mètres carrés, soulève l\'avion. Les bouts recourbés (<b>winglets</b>) réduisent les tourbillons et font économiser du carburant.</p>',
          shapes: [ wing(1), wing(-1) ] },
        { id: 'alettoni', name: 'Ailerons', color: '#f59e0b', explode: [0, -0.3, 0],
          info: '<p>Ce sont les « petits volets » près du bout des ailes. Ils bougent en sens contraire : un monte, un descend. Ainsi une aile monte, l\'autre descend et l\'avion <b>s\'incline</b> pour faire les virages.</p>',
          shapes: [ flapAt(2.6, 0.84, 0.2, 15, 0, '#f59e0b'), flapAt(-2.6, 0.84, 0.2, -15, 0, '#f59e0b') ] },
        { id: 'ipersostentatori', name: 'Volets (hypersustentateurs)', label: 'Volets', color: '#38bdf8', explode: [0, -0.5, 0],
          info: '<p>Au décollage et à l\'atterrissage, l\'avion va plus lentement. Les <b>volets</b> sortent de l\'arrière des ailes et s\'abaissent : l\'aile devient plus grande et plus courbe et donne de la portance même à basse vitesse.</p>',
          shapes: [ flapAt(1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25), flapAt(-1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25) ] },
        { id: 'motori', name: 'Moteurs à réaction (turbofan)', label: 'Moteurs', color: '#e5e7eb', explode: [0.4, -0.6, 0],
          info: '<p>La grande <b>soufflante</b> à l\'avant aspire énormément d\'air et le projette vers l\'arrière. En réaction, l\'avion est poussé vers l\'avant : c\'est la <b>poussée</b>.</p>',
          more: '<p>Seule une partie de l\'air entre dans le « cœur » du moteur : elle est comprimée, mélangée au kérosène et brûlée ; les gaz chauds font tourner une turbine qui entraîne la soufflante. La majeure partie de l\'air passe autour (<b>flux froid</b>) et donne presque toute la poussée, avec moins de bruit et de consommation.</p>',
          shapes: [ engine(1.15), engine(-1.15) ] },
        { id: 'deriva', name: 'Dérive', color: '#2563eb', explode: [-0.4, 0.6, 0],
          info: '<p>C\'est la grande « nageoire » verticale à l\'arrière. Comme les plumes d\'une flèche, elle garde l\'avion droit et l\'empêche de zigzaguer à droite et à gauche.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: [[-2.15, 0.2], [-3.05, 0.2], [-3.55, 1.55], [-3.2, 1.55]], smooth: true } ] },
        { id: 'timone', name: 'Gouvernail de direction', label: 'Gouvernail', color: '#f97316', explode: [-0.4, 0.6, 0],
          info: '<p>La partie mobile de la dérive. En le tournant à droite ou à gauche, le nez de l\'avion se déplace de ce côté. Le pilote le commande avec les <b>pédales</b>.</p>',
          shapes: [ { t: 'group', pos: [-3.27, 0.88, 0], rot: [0, 0, 20.3], anim: { type: 'swing', axis: 'y', amp: 14, rate: 0.35 }, shapes: [ { t: 'box', s: [0.2, 1.3, 0.05], pos: [-0.1, 0, 0], div: 1 } ] } ] },
        { id: 'stabilizzatori', name: 'Stabilisateurs horizontaux', label: 'Stabilisateurs', color: '#cbd5e1', explode: [-0.5, 0.2, 0],
          info: '<p>Les petites ailes de la queue gardent l\'avion en équilibre, pour qu\'il ne pique pas du nez et ne se cabre pas.</p>',
          shapes: [1, -1].map((s) => ({ t: 'extrude', d: 0.05, pts: [[-2.35, 0], [-3.0, 0], [-3.4, 1.25 * s], [-3.15, 1.25 * s]].map(([x, z], i) => [x, i < 2 ? 0 : z]), rot: [90, 0, 0], pos: [0, 0.12, 0] })) },
        { id: 'equilibratori', name: 'Gouvernes de profondeur', color: '#f59e0b', explode: [-0.5, 0.2, 0],
          info: '<p>Ce sont les parties mobiles des stabilisateurs. Si elles se lèvent, la queue descend et le nez <b>monte</b> ; si elles s\'abaissent, le nez <b>descend</b>. Le pilote les commande en tirant ou en poussant le manche.</p>',
          shapes: [1, -1].map((s) => ({ t: 'group', pos: [-3.0 - 0.32 * 0.62, 0.12, 0.62 * s], rot: [0, -s * 17.7, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.3 }, shapes: [ { t: 'box', s: [0.16, 0.03, 1.0], pos: [-0.08, 0, 0], div: 1 } ] })) },
        { id: 'carrello', name: 'Train d\'atterrissage', color: '#374151', explode: [0, -0.6, 0],
          info: '<p>Les roues sur lesquelles l\'avion roule au décollage et à l\'atterrissage. Après le décollage, elles <b>se rétractent</b> dans le ventre, pour ne pas freiner dans l\'air.</p>',
          more: '<p>Les pneus des avions sont gonflés à l\'<b>azote</b> à des pressions très élevées (environ 14 bars) et touchent le sol à presque 250 km/h. Les amortisseurs absorbent le choc de l\'atterrissage.</p>',
          shapes: [ ...[0.55, -0.55].flatMap((z) => [ { t: 'cyl', r: 0.035, h: 0.55, n: 10, pos: [-0.25, -0.75, z], color: '#9ca3af' }, { t: 'box', s: [0.4, 0.04, 0.08], pos: [-0.25, -1.0, z], color: '#6b7280' },
              ...[-0.12, 0.12].map((dx) => ({ t: 'cyl', r: 0.12, h: 0.1, n: 18, rot: [90, 0, 0], pos: [-0.25 + dx, -1.06, z] })) ]),
            { t: 'cyl', r: 0.03, h: 0.5, n: 10, pos: [2.5, -0.68, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.09, h: 0.1, n: 16, rot: [90, 0, 0], pos: [2.5, -0.98, 0] } ] },
        { id: 'aria', name: 'Flux d\'air', label: 'Flux d\'air', color: '#0ea5e9', noLabel: true, explode: [0, 0, 1.2],
          info: '<p>L\'air qui passe <b>au-dessus</b> de l\'aile (petites boules bleu foncé) va plus vite que celui qui passe <b>en dessous</b> (bleu clair), et à la fin tout est poussé un peu vers le bas.</p>',
          shapes: puffs(flow(-0.1, 1.6, true), 9, 0.75, '#0369a1').concat(puffs(flow(-0.32, 1.6, false), 9, 0.5, '#7dd3fc')) },
        { id: 'forze', name: 'Les quatre forces du vol', label: 'Forces', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>En vol, quatre forces agissent : la <b>portance</b> (verte, vers le haut, due aux ailes), le <b>poids</b> (rouge, vers le bas), la <b>poussée</b> (bleue, vers l\'avant, due aux moteurs) et la <b>traînée</b> (orange, l\'air qui freine).</p>',
          more: '<p>En vol horizontal à vitesse constante, les forces s\'équilibrent : portance = poids et poussée = traînée. Pour monter, le pilote augmente la portance (vitesse ou inclinaison des ailes) ; pour accélérer, il donne plus de poussée.</p>',
          shapes: [ arrow([0, 0.55, 0], [0, 1, 0], 1.0, '#22c55e'), arrow([0, -0.55, 0], [0, -1, 0], 1.0, '#ef4444'), arrow([3.4, 0, 0], [1, 0, 0], 0.6, '#3b82f6'), arrow([-3.4, 0, 0], [-1, 0, 0], 0.45, '#f97316') ] }
      ]
    },
    steps: [
      { icon: '✈️', title: 'Plus lourd que l\'air', explode: 0,
        html: '<p>Un avion de ligne pèse des centaines de tonnes, et pourtant il vole ! Il ne flotte pas comme un ballon : il tient en l\'air parce qu\'il <b>se déplace très vite</b> et que les ailes, en traversant l\'air, reçoivent une poussée vers le haut.</p>' },
      { icon: '⚖️', title: 'Les quatre forces', focus: ['forze', 'fusoliera', 'ali', 'motori'], explode: 0, view: { rx: 0.3, ry: -0.35 },
        html: '<p><b>Portance</b> vers le haut, <b>poids</b> vers le bas, <b>poussée</b> vers l\'avant, <b>traînée</b> vers l\'arrière. Pour voler droit, la portance doit équilibrer le poids et la poussée doit vaincre la traînée de l\'air.</p>' },
      { icon: '🪽', title: 'Le secret des ailes', focus: ['ali', 'aria'], explode: 0, view: { rx: 0.05, ry: -0.05 }, zoom: 1.15,
        html: '<p>L\'aile est un peu <b>inclinée</b> et courbe. L\'air du dessus va plus vite et sa pression diminue ; dessous, la pression est plus haute. L\'aile est « aspirée » vers le haut et, en même temps, elle pousse l\'air vers le bas.</p><p class="tip">🖐️ Essaie : à la vitre de la voiture (avec un adulte !), mets la main à plat et incline-la un tout petit peu : tu la sens monter.</p>' },
      { icon: '🌀', title: 'Les moteurs donnent la poussée', focus: ['motori'], explode: 0.2, view: { rx: 0.15, ry: 0.5 },
        html: '<p>La grande soufflante des <b>moteurs à réaction</b> aspire l\'air à l\'avant et le projette très fort vers l\'arrière. En réaction, l\'avion est poussé vers l\'avant, comme un ballon de baudruche qui se dégonfle.</p>' },
      { icon: '🕹️', title: 'Comment on pilote : trois commandes', focus: ['alettoni', 'equilibratori', 'timone', 'deriva', 'stabilizzatori'], explode: 0, view: { rx: 0.45, ry: -1.0 },
        html: '<p>Les <b>ailerons</b> (sur les ailes) font incliner l\'avion à droite ou à gauche. Les <b>gouvernes de profondeur</b> (à l\'arrière) lèvent ou baissent le nez. Le <b>gouvernail</b> (sur la dérive) déplace le nez à droite ou à gauche.</p>' },
      { icon: '🛬', title: 'Décollage et atterrissage', focus: ['ipersostentatori', 'carrello', 'ali'], explode: 0, view: { rx: -0.1, ry: -0.7 },
        html: '<p>À faible vitesse, les ailes donnent moins de portance. Alors sortent les <b>volets</b> : ils rendent l\'aile plus grande et plus courbe. Le <b>train d\'atterrissage</b> sort pour toucher la piste et se rétracte après le décollage.</p>' },
      { icon: '🧑‍✈️', title: 'Fuselage et cockpit', focus: ['fusoliera', 'cabina'], explode: 0.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>Dans le <b>fuselage</b> voyagent passagers et bagages ; il est pressurisé parce qu\'à 11 000 mètres l\'air est trop rare pour respirer. Dans le <b>cockpit</b>, les pilotes contrôlent tout, aidés par le pilote automatique.</p>' }
    ],
    facts: [
      { icon: '🛩️', title: '12 secondes de vol', html: 'Le premier vol à moteur des frères <b>Wright</b> (1903) dura 12 secondes et parcourut 37 mètres : moins que la longueur d\'un avion de ligne d\'aujourd\'hui !' },
      { icon: '🎨', title: 'Léonard et le vol', html: '<b>Léonard de Vinci</b>, il y a 500 ans, étudiait le vol des oiseaux et dessinait des machines volantes, même une « vis aérienne » semblable à l\'hélicoptère.' },
      { icon: '⛽', title: 'Beaucoup de carburant', html: 'Un grand avion de ligne peut emporter plus de <b>200 000 litres</b> de kérosène, presque tous dans les ailes.' },
      { icon: '⚡', title: 'La foudre ? Aucun problème', html: 'Chaque avion de ligne est frappé par la foudre environ une fois par an. Le courant glisse sur la peau métallique et les passagers sont en sécurité, comme dans une cage.' }
    ],
    quiz: [
      { type: 'mc', q: 'Comment s\'appelle la force qui maintient l\'avion en l\'air ?', options: ['Poussée', 'Portance', 'Traînée', 'Poids'], answer: 1, explain: 'La portance naît des ailes et équilibre le poids de l\'avion.' },
      { type: 'mc', q: 'Que donnent les moteurs à réaction ?', options: ['La portance', 'La poussée vers l\'avant', 'Le poids', 'L\'équilibre'], answer: 1, explain: 'Ils poussent l\'air vers l\'arrière et, en réaction, l\'avion avance.' },
      { type: 'mc', q: 'Quelles surfaces font incliner l\'avion à droite ou à gauche ?', options: ['Le gouvernail', 'Les ailerons', 'Le train d\'atterrissage', 'Les hublots'], answer: 1, explain: 'Les ailerons bougent en sens contraire sur les deux ailes et font incliner l\'avion.' },
      { type: 'tf', q: 'Au-dessus de l\'aile, l\'air va plus vite et a une pression plus basse.', answer: true, explain: 'La différence de pression entre le dessous et le dessus pousse l\'aile vers le haut.' },
      { type: 'mc', q: 'À quoi servent les volets ?', options: ['À freiner en vol à haute altitude', 'À donner plus de portance quand l\'avion va lentement', 'À éclairer', 'À refroidir les moteurs'], answer: 1, explain: 'Au décollage et à l\'atterrissage, les volets rendent l\'aile plus grande et plus courbe.' },
      { type: 'mc', q: 'Où se trouve la plus grande partie du carburant ?', options: ['Dans la queue', 'Dans les ailes', 'Dans la cabine', 'Sous les sièges'], answer: 1, explain: 'Les réservoirs principaux sont à l\'intérieur des ailes.' }
    ]
  });
})();
