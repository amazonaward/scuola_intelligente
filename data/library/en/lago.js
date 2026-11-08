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
    lang: 'en',
    id: 'lago',
    title: 'The lake',
    intro: 'A lake is a large body of <b>fresh water</b> sitting still in a hollow in the ground. It receives water from rivers, rain and melted snow, and gives it back through another river and through evaporation. In Italy the largest lakes, such as <b>Garda</b> and <b>Como</b>, were born from glaciers.',
    model: {
      rx: 0.38, ry: -0.5, speed: 0.4, height: 480, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'valle', name: 'Valley and mountains', label: 'Mountains', color: '#4d7c0f', explode: [0, -0.5, -0.4],
          info: '<p>The lake lies at the bottom of a <b>valley</b> between mountains. The hollow that holds the water is called the <b>basin</b>: it is like a large bowl of rock.</p>',
          more: '<p>The cut shows that beneath the grass there is <b>rock</b>: impermeable rocks do not let water seep downward, which is why the lake does not empty.</p>',
          shapes: [ prism(TERRAIN, L, -L / 2, '#4d7c0f'),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -0.25], [2.2, -0.25]].concat(RIGHT.map(([x, y]) => [x + 0.15, y - 0.2]), LEFT.slice(0, -1).reverse().map(([x, y]) => [x - 0.15, y - 0.2]), [[-2.2, 0.35], [-2.7, 1.35], [-3.2, 2.05], [-3.45, 2.15], [-3.85, 1.85], [-4.5, 1.1]]), 0.02, 0.012, '#78716c', { decal: 1 }),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -1.75], [-4.5, -1.75]], 0.02, 0.016, '#57534e', { decal: 2 }) ] },
        { id: 'vetta', name: 'Snow-capped mountain', label: 'Snowy mountain', color: '#a8a29e', explode: [0, 0.6, -1.2],
          info: '<p>At the end of the valley there is a mountain with a snowy peak. Thousands of years ago, during the <b>ice ages</b>, an enormous glacier came down the valley and gouged the rock like a bulldozer.</p>',
          more: '<p>When the climate warmed (about 15,000 years ago), the glacier retreated: the water collected in the carved-out hollow, closed off downstream by debris (the <b>moraines</b>). This is how Lakes Maggiore, Como, Iseo and Garda were born.</p>',
          shapes: [ { t: 'lathe', n: 30, pos: [0, 0, -5.6], scale: [1.4, 1, 0.75], pts: [[0, -2.2], [3.2, -2.2], [3.0, 0.1], [2.2, 1.1], [1.3, 2.3], [0.6, 3.2], [0.15, 3.6], [0, 3.65]] },
            { t: 'lathe', n: 30, pos: [0, 0.02, -5.6], scale: [1.42, 1, 0.77], pts: [[1.05, 2.6], [0.6, 3.2], [0.15, 3.6], [0, 3.66], [0, 2.6]], color: '#f8fafc' } ] },
        { id: 'immissario', name: 'Inlet (river that flows in)', label: 'Inlet', color: '#38bdf8', explode: [0, 0.3, -1.0],
          info: '<p>The river that <b>brings water</b> to the lake is called an <b>inlet</b>. It starts from the snow and the glacier that melt and runs fast down the mountain.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: INFLOW, color: '#38bdf8' } ].concat(flowDots(INFLOW, 8, 0.8, '#e0f2fe')) },
        { id: 'acqua', name: 'Lake water', label: 'Water', color: '#38bdf8', alpha: 0.42, explode: [0, 0.6, 0.6],
          info: '<p>The lake water is <b>fresh</b>: it contains very little salt, unlike the sea. The water of the large lakes is so clean that it often becomes drinking water.</p>',
          more: '<p>Lake Garda holds about <b>50 billion cubic metres</b> of water and in some places it is 346 m deep: its bottom lies below sea level! A large lake "moderates" the climate: in winter it gives back the heat it stored in summer, which is why lemons and olive trees grow on its shores.</p>',
          shapes: [ prism(WATER, L - 0.05, -L / 2, '#38bdf8'),
            { t: 'box', s: [3.7, 0.01, L - 0.05], pos: [0.02, -0.005, -L / 2], color: '#7dd3fc', alpha: 0.35, anim: { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.5 } } ] },
        { id: 'strati', name: 'Layers of water (warm and cold)', label: 'Water layers', color: '#0369a1', explode: [0, 0.2, 1.0],
          info: '<p>In summer the lake is in <b>layers</b>: the water near the surface is lukewarm and full of light, while below it is <b>cold and dark</b> (about 4–6 °C), even when it is hot outside.</p>',
          more: '<p>The warm layer at the top is called the <b>epilimnion</b>, the cold one at the bottom the <b>hypolimnion</b>; in between is the <b>thermocline</b>, where the temperature drops suddenly. Water is at its heaviest at 4 °C: that is why in winter the ice floats and the fish survive underneath.</p>',
          shapes: [ prism(slab(-0.03, -0.42, 0.05), 0.02, 0.02, '#7dd3fc', { decal: 1 }), prism(slab(-0.42, -0.62, 0.05), 0.02, 0.02, '#38bdf8', { decal: 1 }), prism(slab(-0.62, -1.36, 0.05), 0.02, 0.02, '#1e40af', { decal: 1 }) ] },
        { id: 'sedimenti', name: 'Lake bed and sediments', label: 'Sediments', color: '#78350f', explode: [0, -0.3, 0.6],
          info: '<p>On the bottom, <b>mud</b> slowly settles: sand and earth carried by the rivers, leaves, remains of plants and animals. Layer after layer, the lake fills up.</p>',
          more: '<p>By studying the layers of mud (like tree rings), scientists reconstruct the climate of thousands of years ago. Over a very long time, a lake can turn into a <b>marsh</b> and then into a meadow.</p>',
          shapes: [ prism(SED, L - 0.1, -L / 2, '#92400e') ] },
        { id: 'emissario', name: 'Outlet (river that flows out)', label: 'Outlet', color: '#0ea5e9', explode: [0.8, 0, 0],
          info: '<p>The river that <b>flows out</b> of the lake is the <b>outlet</b>. For example, the Ticino flows out of Lake Maggiore and the Mincio out of Lake Garda.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: OUTFLOW, color: '#0ea5e9' } ].concat(flowDots(OUTFLOW, 7, 0.6, '#e0f2fe')) },
        { id: 'canneto', name: 'Reed bed', color: '#65a30d', explode: [0.4, 0.3, 0.3],
          info: '<p>Along the shores grow <b>reeds</b> and cattails. The reed bed is the lake\'s "nursery": birds build their nests there and fish lay their eggs. The roots filter and clean the water.</p>',
          shapes: reeds },
        { id: 'ninfee', name: 'Water lilies', color: '#16a34a', explode: [0, 0.5, 0.2],
          info: '<p>The <b>water lilies</b> have their roots in the mud and round leaves that float. They shade the water and offer shelter to animals.</p>',
          shapes: [[1.35, -0.6], [1.15, -1.0], [1.5, -1.3], [1.05, -0.35], [-1.55, -2.0], [-1.45, -2.5]].map(([x, z], i) => ({ t: 'group', pos: [x, 0.012, z], anim: { type: 'swing', axis: 'y', amp: 8, rate: 0.3, phase: i * 0.2 }, shapes: [
            { t: 'cyl', r: 0.13, h: 0.015, n: 16, color: '#16a34a' }, { t: 'box', s: [0.12, 0.02, 0.025], pos: [0.07, 0.003, 0], color: '#38bdf8' }
          ].concat(i % 2 ? [] : [ { t: 'cone', r: 0.06, h: 0.07, n: 8, pos: [0.02, 0.04, 0.03], color: '#f9a8d4' }, { t: 'sphere', r: 0.02, n: 6, pos: [0.02, 0.05, 0.03], color: '#fde047' } ]) })) },
        { id: 'pesci', name: 'Fish', color: '#a3a3a3', explode: [0, 0.2, 0.8],
          info: '<p>Lakes are home to trout, perch, pike, carp, eels... Some stay near the shore among the plants, others swim out in the open or in the cold, deep water.</p>',
          more: '<p>Fish breathe the <b>dissolved oxygen</b> in the water through their gills. Cold water holds more of it: that is why trout love mountain lakes.</p>',
          shapes: [ fish([0.1, -0.35, -1.2], 0.5, '#9ca3af', 0.35, 0, 1), fish([-0.5, -0.9, -2.3], 0.4, '#a16207', -0.3, 0.4, 1.2), fish([0.4, -0.7, -0.5], 0.3, '#64748b', 0.45, 0.2, 0.9) ] },
        { id: 'plancton', name: 'Plankton and algae', label: 'Plankton', color: '#86efac', explode: [0, 0.3, 0.9], chip: true,
          info: '<p>Very tiny living things float in the water: the <b>plankton</b>, made of microscopic algae and minuscule little animals. They are the first link in the lake\'s <b>food chain</b>.</p>',
          shapes: Array.from({ length: 22 }, (_, i) => ({ t: 'sphere', r: 0.025, n: 4, m: 6, pos: [-1.3 + (i * 0.37) % 2.6, -0.05 - (i * 0.13) % 0.35, -0.2 - (i * 0.71) % 3.2], color: i % 3 ? '#86efac' : '#fef08a',
            anim: { type: 'move', dir: [0.3, 1, 0.2], amp: 0.06, rate: 0.7, phase: i * 0.09 } })) },
        { id: 'anatra', name: 'Mallard', label: 'Duck', color: '#78350f', pos: [0.6, 0.05, -2.2], explode: [0, 0.5, 0],
          anim: [ { type: 'move', dir: [1, 0, 0.3], amp: 0.5, rate: 0.12 }, { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.2 } ],
          info: '<p>The <b>mallard</b> is the most common duck on lakes: the male has a bright green head. Its feathers are waterproof thanks to an oil that the duck spreads with its beak.</p>',
          shapes: [ { t: 'sphere', r: 0.14, n: 10, m: 14, scale: [1.6, 0.8, 1], color: '#a16207' }, { t: 'sphere', r: 0.08, n: 10, m: 12, pos: [0.2, 0.15, 0], color: '#15803d' },
            { t: 'cone', r: 0.03, h: 0.1, n: 8, rot: [0, 0, -90], pos: [0.3, 0.14, 0], color: '#facc15' }, { t: 'box', s: [0.14, 0.06, 0.02], pos: [-0.05, 0.05, 0.13], color: '#1d4ed8', decal: 1 },
            { t: 'cone', r: 0.06, h: 0.12, n: 8, rot: [0, 0, 70], pos: [-0.24, 0.06, 0], color: '#f8fafc' } ] },
        { id: 'ciclo', name: 'Evaporation, clouds and rain', label: 'Water cycle', color: '#f8fafc', explode: [0, 1.2, 0],
          info: '<p>The Sun warms the lake: a little water <b>evaporates</b> and rises as invisible vapour. High up it cools and forms <b>clouds</b>; then it falls back down as <b>rain</b> or snow on the mountains and, through the rivers, back into the lake.</p>',
          more: '<p>This is the <b>water cycle</b>: the planet\'s water has been the same for billions of years, and it keeps circulating between seas, lakes, air, glaciers and the ground beneath us.</p>',
          shapes: [ [-2.2, 3.3, -2.6, 0.55], [-1.5, 3.45, -2.4, 0.65], [-0.8, 3.3, -2.7, 0.5], [-1.6, 3.2, -3.1, 0.5] ].map(([x, y, z, r]) => ({ t: 'sphere', r, n: 10, m: 16, pos: [x, y, z], scale: [1.3, 0.75, 1], color: '#f8fafc', anim: { type: 'move', dir: [1, 0, 0], amp: 0.12, rate: 0.2 } }))
            .concat(Array.from({ length: 10 }, (_, k) => { const x = -1.0 + (k * 0.53) % 2.4, z = -0.6 - (k * 0.77) % 2.6; return { t: 'sphere', r: 0.04, n: 6, m: 8, pos: [x, 0.05, z], color: '#e0f2fe',
              anim: [ { type: 'path', pts: [[x, 0.05, z], [x - 0.4, 1.5, z - 0.6], [-1.5, 2.9, -2.6]], wave: 'saw', rate: 0.3, phase: k / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.3, phase: k / 10 } ] }; }))
            .concat(Array.from({ length: 12 }, (_, k) => { const x = -3.4 + (k * 0.41) % 1.6, z = -1.6 - (k * 0.63) % 2.0; return { t: 'cyl', r: 0.012, h: 0.14, n: 4, pos: [x, 2.9, z], color: '#60a5fa',
              anim: { type: 'path', pts: [[x, 2.9, z], [x, 2.2, z]], wave: 'saw', rate: 1.2, phase: k / 12 } }; })) }
      ]
    },
    steps: [
      { icon: '🏞️', title: 'A hollow full of water', explode: 0,
        html: '<p>A lake forms where water gathers in a hollow in the ground, called a <b>basin</b>, and cannot escape because the bottom is impermeable rock.</p><p class="tip">✂️ We have cut the valley open at the front: so you can see how deep the lake is.</p>' },
      { icon: '🧊', title: 'Born from a glacier', focus: ['vetta', 'valle', 'acqua'], view: { rx: 0.3, ry: -0.2 },
        html: '<p>Many Italian lakes are of <b>glacial origin</b>: during the ice ages, enormous glaciers came down the valleys and carved them out. When the ice melted, the hollow filled with water.</p><p class="tip">🗺️ There are also volcanic lakes (in craters, such as Bolsena), landslide lakes and artificial lakes, created by dams.</p>' },
      { icon: '➡️', title: 'Water in, water out', focus: ['immissario', 'emissario', 'acqua', 'vetta'], view: { rx: 0.6, ry: -0.3 },
        html: '<p>The <b>inlet</b> brings the water from the snow and the glacier into the lake. The <b>outlet</b> carries it away. If the same amount of water comes in and goes out, the level of the lake stays (almost) the same.</p>' },
      { icon: '🌡️', title: 'Warm on top, cold below', focus: ['strati', 'acqua', 'sedimenti'], view: { rx: 0.08, ry: -0.05 }, zoom: 1.4,
        html: '<p>In summer the Sun warms only the upper part of the lake. Below, the water stays <b>cold and dark</b>, around 4–6 °C. On the bottom, mud slowly settles: the <b>sediments</b>.</p>' },
      { icon: '🐟', title: 'Who lives in the lake', focus: ['pesci', 'canneto', 'ninfee', 'plancton', 'anatra', 'acqua'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.3,
        html: '<p>The lake is an <b>ecosystem</b>: the <b>plankton</b> feeds the small fish, which feed the bigger fish and the birds. In the <b>reed bed</b> on the shore, fish and ducks are born; the <b>water lilies</b> float their leaves on the water.</p>' },
      { icon: '☁️', title: 'The water cycle', focus: ['ciclo', 'acqua', 'vetta', 'immissario'], view: { rx: 0.25, ry: -0.6 },
        html: '<p>The Sun makes a little of the lake\'s water <b>evaporate</b>. The vapour rises, forms <b>clouds</b> and falls again as <b>rain</b> or snow on the mountains. The rivers carry it back to the lake: a loop that never ends!</p>' },
      { icon: '♻️', title: 'Protecting the lake', explode: 0,
        html: '<p>A lake is easily polluted: its water renews itself slowly (in Garda it takes almost <b>30 years</b>). Sewage, fertilisers and plastic linger for a long time. That is why we need purification plants, natural shores and a lot of care from everyone.</p>' }
    ],
    facts: [
      { icon: '🥇', title: 'Italy\'s largest', html: 'The <b>Lake Garda</b> is the largest lake in Italy (370 km²). The deepest is <b>Lake Como</b>, which reaches about 410 metres.' },
      { icon: '🌍', title: 'The deepest lake in the world', html: 'Lake <b>Baikal</b>, in Siberia, is more than 1,600 metres deep and holds about a fifth of the fresh water in the planet\'s lakes all by itself.' },
      { icon: '🧂', title: 'Salty lakes', html: 'Some lakes have no outlet: the water evaporates and the salt builds up. In the <b>Dead Sea</b> the water is so salty that you float without any effort!' },
      { icon: '🌋', title: 'Lakes in volcanoes', html: 'The lakes of <b>Bolsena</b>, <b>Bracciano</b> and Albano, in Lazio, fill ancient volcanic craters: that is why they are almost round.' },
      { icon: '🧊', title: 'Ice floats', html: 'When a lake freezes, the ice stays on the surface and acts as a blanket: underneath, the water at 4 °C does not freeze, and the fish spend the winter there.' }
    ],
    quiz: [
      { type: 'mc', q: 'What is the name of the river that brings water to a lake?', options: ['Outlet', 'Inlet', 'Tributary of the sea', 'Salty stream'], answer: 1, explain: 'The inlet flows into the lake, the outlet flows out of it.' },
      { type: 'mc', q: 'How were the great lakes of Northern Italy (Garda, Como, Maggiore) formed?', options: ['From volcanoes', 'From ancient glaciers that carved the valleys', 'From meteorites', 'From dams built by the Romans'], answer: 1, explain: 'They are glacial lakes: the glaciers carved out the hollows.' },
      { type: 'tf', q: 'Lake water is usually fresh, that is, with very little salt.', answer: true, explain: 'Lakes with an outlet renew their water and stay fresh.' },
      { type: 'mc', q: 'In summer, where is the water of a deep lake coldest?', options: ['At the surface', 'Near the shore', 'At the bottom', 'It is the same everywhere'], answer: 2, explain: 'The Sun warms only the top layer: at the bottom the water stays at about 4–6 °C.' },
      { type: 'order', q: 'Put the journey of the water in order', items: ['The lake evaporates', 'Clouds form', 'It rains or snows on the mountains', 'The inlet brings the water back to the lake'], explain: 'It is the water cycle.' },
      { type: 'text', q: 'What is the largest lake in Italy?', answer: ['garda', 'lake garda', 'the garda', 'the lake garda', 'garda lake'], explain: 'Lake Garda, between Lombardy, Veneto and Trentino.' }
    ]
  });
})();
