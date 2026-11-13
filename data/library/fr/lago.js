/* Il lago (di origine glaciale, in una valle tra le montagne), tagliato davanti (piano z = 0) per vedere la conca e l'acqua.
   x = da sinistra a destra, z negativo = verso il fondo della valle, y = alto; il pelo dell'acqua è a y = 0. */
(function () {
  const L = 3.6;                                   // lunghezza della valle (z da -L a 0)
  const LEFT = [[-1.85, 0], [-1.7, -0.4], [-1.4, -0.9], [-0.9, -1.35], [-0.3, -1.45]];
  const RIGHT = [[1.9, 0], [1.5, -0.35], [1.0, -0.9], [0.4, -1.3], [-0.3, -1.45]];
  const TERRAIN = [[-4.5, -2.2], [4.5, -2.2], [4.5, 0.06], [2.4, 0.06]].concat(RIGHT, LEFT.slice(0, -1).reverse(), [[-2.1, 0.6], [-2.6, 1.6], [-3.1, 2.3], [-3.4, 2.45], [-3.8, 2.1], [-4.5, 1.3]]);
  const xAt = (br, y) => { for (let i = 0; i < br.length - 1; i++) { const a = br[i], b = br[i + 1]; if (y <= a[1] && y >= b[1]) return a[0] + (b[0] - a[0]) * (a[1] - y) / ((a[1] - b[1]) || 1); } return br[br.length - 1][0]; };
  /* fascia d'acqua tra due profondità (per gli strati sul taglio) */
  const slab = (y0, y1, inset) => {
    const ys = []; for (let i = 0; i <= 8; i++) ys.push(y0 + (y1 - y0) * i / 8);
    return ys.map((y) => [xAt(RIGHT, y) - inset, y]).concat(ys.slice().reverse().map((y) => [xAt(LEFT, y) + inset, y]));
  };
  const WATER = slab(-0.02, -1.43, 0.03);
  const BOTTOM = RIGHT.concat(LEFT.slice(0, -1).reverse());
  const SED = BOTTOM.map(([x, y]) => [x, y + 0.08]).reverse().concat(BOTTOM.map(([x, y]) => [x, y + 0.01]));
  const prism = (pts, d, z, color, extra) => Object.assign({ t: 'extrude', pts, d, pos: [0, 0, z], color }, extra || {});
  /* pesce: corpo + coda + occhio; nuota in cerchio (spin intorno a y) */
  const fish = (c, r, col, rate, ph, s) => ({ t: 'group', pos: c, anim: { type: 'spin', axis: 'y', rate, phase: ph }, shapes: [ { t: 'group', pos: [r, 0, 0], scale: s, shapes: [
    { t: 'sphere', r: 0.12, n: 10, m: 14, scale: [0.6, 0.75, 1.7], color: col },
    { t: 'extrude', pts: [[0, 0], [0.13, 0.1], [0.13, -0.1]], d: 0.02, rot: [0, 90, 0], pos: [0, 0, 0.19], color: col, anim: { type: 'swing', axis: 'y', amp: 20, rate: 6 } },
    { t: 'sphere', r: 0.018, n: 6, pos: [0.06, 0.03, -0.12], color: '#111827' }, { t: 'sphere', r: 0.018, n: 6, pos: [-0.06, 0.03, -0.12], color: '#111827' } ] } ] });
  const flowDots = (pts, n, rate, col, r) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: r || 0.045, n: 6, m: 8, pos: pts[0], color: col, anim: { type: 'path', pts, wave: 'saw', rate, phase: k / n } }));
  const INFLOW = [[0.35, 2.55, -4.62], [0.3, 1.9, -4.28], [0.15, 1.1, -3.85], [0.05, 0.4, -3.42], [0, 0.02, -3.15]];
  const OUTFLOW = [[2.05, 0.03, -1.8], [2.6, 0.08, -1.6], [3.3, 0.08, -1.9], [3.9, 0.08, -1.7], [4.5, 0.08, -1.8]];
  const reeds = [];
  [[2.0, 0.06, -0.5], [2.15, 0.06, -0.9], [1.95, 0.06, -1.2], [2.25, 0.06, -0.3], [1.8, -0.15, -0.7], [1.75, -0.12, -1.05], [2.1, 0.06, -2.6], [1.9, 0.0, -2.9], [-1.95, 0.15, -2.2], [-1.98, 0.2, -1.5], [-1.9, 0.08, -2.7]].forEach((p, i) => {
    const h = 0.55 + (i % 3) * 0.12;
    reeds.push({ t: 'group', pos: p, anim: { type: 'swing', axis: 'z', amp: 4, rate: 0.8, phase: i * 0.13, pivot: [0, 0, 0] }, shapes: [
      { t: 'cyl', r: 0.012, h, n: 6, pos: [0, h / 2, 0], color: '#65a30d' }, { t: 'cyl', r: 0.03, h: 0.12, n: 8, pos: [0, h - 0.04, 0], color: '#78350f' },
      { t: 'box', s: [0.015, 0.35, 0.05], pos: [0.04, 0.2, 0], rot: [0, 0, -12], color: '#84cc16' } ] });
  });

  LIBRARY({
    lang: 'fr',
    id: 'lago',
    title: 'Le lac',
    intro: 'Un lac est une grande masse d\'<b>eau douce</b> immobile dans une cuvette du terrain. Il reçoit de l\'eau des rivières, de la pluie et de la neige fondue, et la rend par un autre cours d\'eau et par l\'évaporation. En Italie, les plus grands lacs, comme le <b>lac de Garde</b> et le <b>lac de Côme</b>, sont nés des glaciers.',
    model: {
      rx: 0.38, ry: -0.5, speed: 0.4, height: 480, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'valle', name: 'Vallée et montagnes', label: 'Montagnes', color: '#4d7c0f', explode: [0, -0.5, -0.4],
          info: '<p>Le lac se trouve au fond d\'une <b>vallée</b> entre les montagnes. La cuvette qui contient l\'eau s\'appelle le <b>bassin</b> : c\'est comme un grand bol de roche.</p>',
          more: '<p>Sur la coupe, on voit que sous la prairie il y a de la <b>roche</b> : les roches imperméables ne laissent pas l\'eau s\'infiltrer vers le bas, c\'est pourquoi le lac ne se vide pas.</p>',
          shapes: [ prism(TERRAIN, L, -L / 2, '#4d7c0f'),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -0.25], [2.2, -0.25]].concat(RIGHT.map(([x, y]) => [x + 0.15, y - 0.2]), LEFT.slice(0, -1).reverse().map(([x, y]) => [x - 0.15, y - 0.2]), [[-2.2, 0.35], [-2.7, 1.35], [-3.2, 2.05], [-3.45, 2.15], [-3.85, 1.85], [-4.5, 1.1]]), 0.02, 0.012, '#78716c', { decal: 1 }),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -1.75], [-4.5, -1.75]], 0.02, 0.016, '#57534e', { decal: 2 }) ] },
        { id: 'vetta', name: 'Montagne enneigée', label: 'Montagne enneigée', color: '#a8a29e', explode: [0, 0.6, -1.2],
          info: '<p>Au fond de la vallée, il y a une montagne au sommet enneigé. Il y a des milliers d\'années, pendant les <b>glaciations</b>, un énorme glacier descendait le long de la vallée et creusait la roche comme une pelleteuse.</p>',
          more: '<p>Quand le climat s\'est réchauffé (il y a environ 15 000 ans), le glacier a reculé : dans la cuvette creusée et fermée en aval par les débris (les <b>moraines</b>), l\'eau s\'est rassemblée. C\'est ainsi que sont nés les lacs Majeur, de Côme, d\'Iseo et de Garde.</p>',
          shapes: [ { t: 'lathe', n: 30, pos: [0, 0, -5.6], scale: [1.4, 1, 0.75], pts: [[0, -2.2], [3.2, -2.2], [3.0, 0.1], [2.2, 1.1], [1.3, 2.3], [0.6, 3.2], [0.15, 3.6], [0, 3.65]] },
            { t: 'lathe', n: 30, pos: [0, 0.02, -5.6], scale: [1.42, 1, 0.77], pts: [[1.05, 2.6], [0.6, 3.2], [0.15, 3.6], [0, 3.66], [0, 2.6]], color: '#f8fafc' } ] },
        { id: 'immissario', name: 'Affluent (rivière qui entre)', label: 'Affluent', color: '#38bdf8', explode: [0, 0.3, -1.0],
          info: '<p>La rivière qui <b>apporte de l\'eau</b> au lac s\'appelle l\'<b>affluent</b>. Elle naît de la neige et du glacier qui fondent et descend vite le long de la montagne.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: INFLOW, color: '#38bdf8' } ].concat(flowDots(INFLOW, 8, 0.8, '#e0f2fe')) },
        { id: 'acqua', name: 'Eau du lac', label: 'Eau', color: '#38bdf8', alpha: 0.42, explode: [0, 0.6, 0.6],
          info: '<p>L\'eau du lac est <b>douce</b> : elle contient très peu de sel, contrairement à la mer. Celle des grands lacs est si propre qu\'elle devient souvent de l\'eau potable.</p>',
          more: '<p>Le lac de Garde contient environ <b>50 milliards de mètres cubes</b> d\'eau et, par endroits, il est profond de 346 m : le fond est sous le niveau de la mer ! Un grand lac « adoucit » le climat : en hiver, il rend la chaleur accumulée en été, c\'est pourquoi sur ses rives poussent des citronniers et des oliviers.</p>',
          shapes: [ prism(WATER, L - 0.05, -L / 2, '#38bdf8'),
            { t: 'box', s: [3.7, 0.01, L - 0.05], pos: [0.02, -0.005, -L / 2], color: '#7dd3fc', alpha: 0.35, anim: { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.5 } } ] },
        { id: 'strati', name: 'Couches d\'eau (chaude et froide)', label: 'Couches d\'eau', color: '#0369a1', explode: [0, 0.2, 1.0],
          info: '<p>En été, le lac est en <b>couches</b> : en haut l\'eau est tiède et pleine de lumière, en bas elle est <b>froide et sombre</b> (environ 4 à 6 °C), même quand il fait chaud dehors.</p>',
          more: '<p>La couche chaude du haut s\'appelle l\'<b>épilimnion</b>, la froide du fond l\'<b>hypolimnion</b> ; au milieu se trouve la <b>thermocline</b>, où la température chute brusquement. L\'eau est plus lourde à 4 °C : c\'est pourquoi en hiver la glace flotte et, dessous, les poissons survivent.</p>',
          shapes: [ prism(slab(-0.03, -0.42, 0.05), 0.02, 0.02, '#7dd3fc', { decal: 1 }), prism(slab(-0.42, -0.62, 0.05), 0.02, 0.02, '#38bdf8', { decal: 1 }), prism(slab(-0.62, -1.36, 0.05), 0.02, 0.02, '#1e40af', { decal: 1 }) ] },
        { id: 'sedimenti', name: 'Fond et sédiments', label: 'Sédiments', color: '#78350f', explode: [0, -0.3, 0.6],
          info: '<p>Au fond se dépose peu à peu la <b>vase</b> : du sable et de la terre apportés par les rivières, des feuilles, des restes de plantes et d\'animaux. Couche après couche, le lac se comble.</p>',
          more: '<p>En étudiant les couches de vase (comme les anneaux des arbres), les scientifiques reconstituent le climat d\'il y a des milliers d\'années. Dans très longtemps, un lac peut devenir un <b>marais</b> puis une prairie.</p>',
          shapes: [ prism(SED, L - 0.1, -L / 2, '#92400e') ] },
        { id: 'emissario', name: 'Émissaire (rivière qui sort)', label: 'Émissaire', color: '#0ea5e9', explode: [0.8, 0, 0],
          info: '<p>La rivière qui <b>sort</b> du lac est l\'<b>émissaire</b>. Par exemple, le Tessin sort du lac Majeur et le Mincio du lac de Garde.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: OUTFLOW, color: '#0ea5e9' } ].concat(flowDots(OUTFLOW, 7, 0.6, '#e0f2fe')) },
        { id: 'canneto', name: 'Roselière', color: '#65a30d', explode: [0.4, 0.3, 0.3],
          info: '<p>Le long des rives poussent les <b>roseaux</b> et les massettes. La roselière est la « pouponnière » du lac : les oiseaux y font leur nid et les poissons y pondent leurs œufs. Les racines filtrent et nettoient l\'eau.</p>',
          shapes: reeds },
        { id: 'ninfee', name: 'Nénuphars', color: '#16a34a', explode: [0, 0.5, 0.2],
          info: '<p>Les <b>nénuphars</b> ont les racines dans la vase et des feuilles rondes qui flottent. Ils font de l\'ombre à l\'eau et offrent un abri aux animaux.</p>',
          shapes: [[1.35, -0.6], [1.15, -1.0], [1.5, -1.3], [1.05, -0.35], [-1.55, -2.0], [-1.45, -2.5]].map(([x, z], i) => ({ t: 'group', pos: [x, 0.012, z], anim: { type: 'swing', axis: 'y', amp: 8, rate: 0.3, phase: i * 0.2 }, shapes: [
            { t: 'cyl', r: 0.13, h: 0.015, n: 16, color: '#16a34a' }, { t: 'box', s: [0.12, 0.02, 0.025], pos: [0.07, 0.003, 0], color: '#38bdf8' }
          ].concat(i % 2 ? [] : [ { t: 'cone', r: 0.06, h: 0.07, n: 8, pos: [0.02, 0.04, 0.03], color: '#f9a8d4' }, { t: 'sphere', r: 0.02, n: 6, pos: [0.02, 0.05, 0.03], color: '#fde047' } ]) })) },
        { id: 'pesci', name: 'Poissons', color: '#a3a3a3', explode: [0, 0.2, 0.8],
          info: '<p>Dans les lacs vivent des truites, des perches, des brochets, des carpes, des anguilles… Certains restent près de la rive parmi les plantes, d\'autres nagent au large ou dans l\'eau froide et profonde.</p>',
          more: '<p>Les poissons respirent l\'<b>oxygène dissous</b> dans l\'eau avec leurs branchies. L\'eau froide en contient davantage : c\'est pourquoi les truites aiment les lacs de montagne.</p>',
          shapes: [ fish([0.1, -0.35, -1.2], 0.5, '#9ca3af', 0.35, 0, 1), fish([-0.5, -0.9, -2.3], 0.4, '#a16207', -0.3, 0.4, 1.2), fish([0.4, -0.7, -0.5], 0.3, '#64748b', 0.45, 0.2, 0.9) ] },
        { id: 'plancton', name: 'Plancton et algues', label: 'Plancton', color: '#86efac', explode: [0, 0.3, 0.9], chip: true,
          info: '<p>Dans l\'eau flottent des êtres minuscules, le <b>plancton</b> : des algues microscopiques et de tout petits animaux. Ils sont le premier maillon de la <b>chaîne alimentaire</b> du lac.</p>',
          shapes: Array.from({ length: 22 }, (_, i) => ({ t: 'sphere', r: 0.025, n: 4, m: 6, pos: [-1.3 + (i * 0.37) % 2.6, -0.05 - (i * 0.13) % 0.35, -0.2 - (i * 0.71) % 3.2], color: i % 3 ? '#86efac' : '#fef08a',
            anim: { type: 'move', dir: [0.3, 1, 0.2], amp: 0.06, rate: 0.7, phase: i * 0.09 } })) },
        { id: 'anatra', name: 'Canard colvert', label: 'Canard', color: '#78350f', pos: [0.6, 0.05, -2.2], explode: [0, 0.5, 0],
          anim: [ { type: 'move', dir: [1, 0, 0.3], amp: 0.5, rate: 0.12 }, { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.2 } ],
          info: '<p>Le <b>canard colvert</b> est le canard le plus commun des lacs : le mâle a la tête vert brillant. Les plumes sont imperméables grâce à une huile que le canard étale avec son bec.</p>',
          shapes: [ { t: 'sphere', r: 0.14, n: 10, m: 14, scale: [1.6, 0.8, 1], color: '#a16207' }, { t: 'sphere', r: 0.08, n: 10, m: 12, pos: [0.2, 0.15, 0], color: '#15803d' },
            { t: 'cone', r: 0.03, h: 0.1, n: 8, rot: [0, 0, -90], pos: [0.3, 0.14, 0], color: '#facc15' }, { t: 'box', s: [0.14, 0.06, 0.02], pos: [-0.05, 0.05, 0.13], color: '#1d4ed8', decal: 1 },
            { t: 'cone', r: 0.06, h: 0.12, n: 8, rot: [0, 0, 70], pos: [-0.24, 0.06, 0], color: '#f8fafc' } ] },
        { id: 'ciclo', name: 'Évaporation, nuages et pluie', label: 'Cycle de l\'eau', color: '#f8fafc', explode: [0, 1.2, 0],
          info: '<p>Le Soleil chauffe le lac : un peu d\'eau <b>s\'évapore</b> et monte sous forme de vapeur invisible. En haut, elle se refroidit et forme des <b>nuages</b> ; puis elle retombe en <b>pluie</b> ou en neige sur les montagnes et, par les rivières, revient dans le lac.</p>',
          more: '<p>C\'est le <b>cycle de l\'eau</b> : l\'eau de la planète est la même depuis des milliards d\'années et continue de circuler entre les mers, les lacs, l\'air, les glaciers et le sous-sol.</p>',
          shapes: [ [-2.2, 3.3, -2.6, 0.55], [-1.5, 3.45, -2.4, 0.65], [-0.8, 3.3, -2.7, 0.5], [-1.6, 3.2, -3.1, 0.5] ].map(([x, y, z, r]) => ({ t: 'sphere', r, n: 10, m: 16, pos: [x, y, z], scale: [1.3, 0.75, 1], color: '#f8fafc', anim: { type: 'move', dir: [1, 0, 0], amp: 0.12, rate: 0.2 } }))
            .concat(Array.from({ length: 10 }, (_, k) => { const x = -1.0 + (k * 0.53) % 2.4, z = -0.6 - (k * 0.77) % 2.6; return { t: 'sphere', r: 0.04, n: 6, m: 8, pos: [x, 0.05, z], color: '#e0f2fe',
              anim: [ { type: 'path', pts: [[x, 0.05, z], [x - 0.4, 1.5, z - 0.6], [-1.5, 2.9, -2.6]], wave: 'saw', rate: 0.3, phase: k / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.3, phase: k / 10 } ] }; }))
            .concat(Array.from({ length: 12 }, (_, k) => { const x = -3.4 + (k * 0.41) % 1.6, z = -1.6 - (k * 0.63) % 2.0; return { t: 'cyl', r: 0.012, h: 0.14, n: 4, pos: [x, 2.9, z], color: '#60a5fa',
              anim: { type: 'path', pts: [[x, 2.9, z], [x, 2.2, z]], wave: 'saw', rate: 1.2, phase: k / 12 } }; })) }
      ]
    },
    steps: [
      { icon: '🏞️', title: 'Une cuvette pleine d\'eau', explode: 0,
        html: '<p>Un lac se forme là où l\'eau se rassemble dans une <b>cuvette</b> du terrain, appelée <b>bassin</b>, et ne peut pas s\'échapper parce que le fond est en roche imperméable.</p><p class="tip">✂️ Nous avons coupé la vallée à l\'avant : ainsi tu vois quelle est la profondeur du lac.</p>' },
      { icon: '🧊', title: 'Né d\'un glacier', focus: ['vetta', 'valle', 'acqua'], view: { rx: 0.3, ry: -0.2 },
        html: '<p>Beaucoup de lacs italiens sont d\'<b>origine glaciaire</b> : pendant les glaciations, d\'énormes glaciers descendaient le long des vallées et les creusaient. Quand la glace a fondu, la cuvette s\'est remplie d\'eau.</p><p class="tip">🗺️ Il existe aussi des lacs volcaniques (dans les cratères, comme Bolsena), des lacs d\'éboulement et des lacs artificiels, faits par les barrages.</p>' },
      { icon: '➡️', title: 'L\'eau qui entre, l\'eau qui sort', focus: ['immissario', 'emissario', 'acqua', 'vetta'], view: { rx: 0.6, ry: -0.3 },
        html: '<p>L\'<b>affluent</b> apporte au lac l\'eau de la neige et du glacier. L\'<b>émissaire</b> l\'emporte. Si la même quantité d\'eau entre et sort, le niveau du lac reste (presque) le même.</p>' },
      { icon: '🌡️', title: 'Tiède en haut, froid en bas', focus: ['strati', 'acqua', 'sedimenti'], view: { rx: 0.08, ry: -0.05 }, zoom: 1.4,
        html: '<p>En été, le Soleil ne chauffe que la partie haute du lac. En dessous, l\'eau reste <b>froide et sombre</b>, autour de 4 à 6 °C. Au fond se dépose peu à peu la vase : les <b>sédiments</b>.</p>' },
      { icon: '🐟', title: 'Qui vit dans le lac', focus: ['pesci', 'canneto', 'ninfee', 'plancton', 'anatra', 'acqua'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.3,
        html: '<p>Le lac est un <b>écosystème</b> : le <b>plancton</b> nourrit les petits poissons, qui nourrissent les plus gros poissons et les oiseaux. Dans la <b>roselière</b> des rives naissent des poissons et des canards ; les <b>nénuphars</b> flottent avec leurs feuilles sur l\'eau.</p>' },
      { icon: '☁️', title: 'Le cycle de l\'eau', focus: ['ciclo', 'acqua', 'vetta', 'immissario'], view: { rx: 0.25, ry: -0.6 },
        html: '<p>Le Soleil fait <b>s\'évaporer</b> un peu d\'eau du lac. La vapeur monte, forme des <b>nuages</b> et retombe en <b>pluie</b> ou en neige sur les montagnes. Les rivières la ramènent dans le lac : un tour sans fin !</p>' },
      { icon: '♻️', title: 'Protéger le lac', explode: 0,
        html: '<p>Un lac se pollue facilement : l\'eau se renouvelle lentement (dans le lac de Garde, il faut presque <b>30 ans</b>). Les rejets, les engrais et le plastique restent longtemps. C\'est pourquoi il faut des stations d\'épuration, des rives naturelles et beaucoup d\'attention de la part de tout le monde.</p>' }
    ],
    facts: [
      { icon: '🥇', title: 'Le plus grand d\'Italie', html: 'Le <b>lac de Garde</b> est le plus grand d\'Italie (370 km²). Le plus profond est le <b>lac de Côme</b>, qui atteint environ 410 mètres.' },
      { icon: '🌍', title: 'Le lac le plus profond du monde', html: 'Le lac <b>Baïkal</b>, en Sibérie, est profond de plus de 1 600 mètres et contient à lui seul environ un cinquième de l\'eau douce des lacs de la planète.' },
      { icon: '🧂', title: 'Lacs salés', html: 'Certains lacs n\'ont pas d\'émissaire : l\'eau s\'évapore et le sel s\'accumule. Dans la <b>mer Morte</b>, l\'eau est si salée qu\'on flotte sans effort !' },
      { icon: '🌋', title: 'Lacs dans les volcans', html: 'Les lacs de <b>Bolsena</b>, de <b>Bracciano</b> et d\'Albano, dans le Latium, remplissent d\'anciens cratères volcaniques : c\'est pourquoi ils sont presque ronds.' },
      { icon: '🧊', title: 'La glace flotte', html: 'Quand un lac gèle, la glace reste en surface et fait office de couverture : dessous, l\'eau à 4 °C ne gèle pas et les poissons passent l\'hiver.' }
    ],
    quiz: [
      { type: 'mc', q: 'Comment s\'appelle la rivière qui apporte de l\'eau à un lac ?', options: ['Émissaire', 'Affluent', 'Affluent de la mer', 'Torrent salé'], answer: 1, explain: 'L\'affluent entre dans le lac, l\'émissaire en sort.' },
      { type: 'mc', q: 'Comment sont nés les grands lacs du nord de l\'Italie (Garde, Côme, Majeur) ?', options: ['De volcans', 'D\'anciens glaciers qui ont creusé les vallées', 'De météorites', 'De barrages construits par les Romains'], answer: 1, explain: 'Ce sont des lacs d\'origine glaciaire : les glaciers ont creusé les cuvettes.' },
      { type: 'tf', q: 'L\'eau des lacs est généralement douce, c\'est-à-dire avec très peu de sel.', answer: true, explain: 'Les lacs qui ont un émissaire renouvellent leur eau et restent doux.' },
      { type: 'mc', q: 'En été, où l\'eau d\'un lac profond est-elle la plus froide ?', options: ['En surface', 'Près de la rive', 'Au fond', 'Elle est pareille partout'], answer: 2, explain: 'Le Soleil ne chauffe que la couche du haut : au fond, l\'eau reste à environ 4 à 6 °C.' },
      { type: 'order', q: 'Mets dans l\'ordre le voyage de l\'eau', items: ['Le lac s\'évapore', 'Les nuages se forment', 'Il pleut ou il neige sur les montagnes', 'L\'affluent ramène l\'eau au lac'], explain: 'C\'est le cycle de l\'eau.' },
      { type: 'text', q: 'Quel est le plus grand lac d\'Italie ?', answer: ['garda', 'lac de garde', 'le garde', 'le lac de garde'], explain: 'Le lac de Garde, entre la Lombardie, la Vénétie et le Trentin.' }
    ]
  });
})();
