/* La Terra "tagliata a metà": la metà davanti (Europa e Africa, longitudine 0 verso +z) si sposta con Esplodi;
   sulla faccia del taglio si vedono crosta, mantello e nucleo. Tutto è inclinato di 23,5° come l'asse terrestre. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const ll = (lat, lon, r) => [r * Math.cos(lat * D) * Math.sin(lon * D), r * Math.sin(lat * D), r * Math.cos(lat * D) * Math.cos(lon * D)];
  /* contorni molto semplificati dei continenti [lat, lon] */
  const LAND = {
    africa: [[37, -10], [37, 10], [32, 32], [12, 44], [11, 51], [-2, 41], [-15, 40], [-26, 33], [-35, 20], [-30, 15], [-17, 12], [-5, 9], [4, 7], [5, -5], [5, -10], [10, -15], [15, -17], [21, -17], [28, -13], [35, -6]],
    europa: [[36, -9], [43, -9], [44, -1], [48, -5], [51, 2], [54, 8], [57, 8], [59, 5], [62, 5], [70, 20], [71, 30], [68, 40], [60, 60], [45, 50], [42, 42], [41, 29], [37, 27], [38, 23], [40, 19], [45, 13], [42, 15], [38, 16], [40, 9], [43, 5], [43, 3], [41, 1], [37, -2]],
    asia: [[41, 29], [42, 42], [45, 50], [60, 60], [70, 70], [77, 105], [72, 130], [70, 160], [65, 180], [60, 165], [53, 157], [45, 142], [40, 130], [35, 129], [30, 122], [22, 114], [20, 106], [10, 107], [1, 104], [8, 98], [16, 97], [22, 90], [20, 86], [8, 77], [20, 72], [25, 66], [25, 57], [13, 45], [30, 48], [30, 35], [36, 36]],
    nordamerica: [[70, -160], [71, -155], [70, -140], [69, -115], [72, -95], [64, -85], [60, -94], [55, -82], [52, -79], [60, -64], [53, -56], [47, -53], [44, -66], [41, -70], [35, -76], [31, -81], [25, -80], [30, -84], [29, -95], [22, -97], [19, -96], [21, -87], [15, -88], [9, -79], [8, -83], [15, -93], [20, -105], [23, -110], [32, -117], [40, -124], [48, -125], [58, -136], [60, -147], [57, -157], [60, -163], [66, -165]],
    groenlandia: [[60, -44], [66, -36], [70, -22], [78, -18], [83, -30], [82, -60], [77, -72], [70, -54], [65, -52]],
    sudamerica: [[12, -72], [11, -63], [5, -52], [0, -50], [-5, -35], [-13, -38], [-23, -42], [-34, -53], [-40, -62], [-52, -68], [-55, -68], [-50, -75], [-40, -73], [-30, -71], [-18, -70], [-5, -81], [1, -80], [8, -77]],
    australia: [[-11, 131], [-12, 137], [-17, 141], [-11, 143], [-25, 153], [-38, 149], [-39, 146], [-35, 138], [-32, 133], [-35, 117], [-22, 114], [-14, 127]],
    madagascar: [[-12, 49], [-25, 47], [-25, 44], [-16, 44]], uk: [[50, -5], [51, 1], [53, 0], [58, -3], [58, -6], [55, -5], [53, -4]], giappone: [[31, 130], [35, 140], [41, 141], [45, 142], [40, 139], [34, 131]]
  };
  const inPoly = (p, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  const isLand = (lat, lon) => lat < -70 || Object.keys(LAND).some((k) => inPoly([lat, lon], LAND[k].map(([a, o]) => [a, o])));
  const landColor = (lat, lon) => Math.abs(lat) > 62 && (lon < -15 && lon > -75 || lat < -60) ? '#f1f5f9' : (lat > 14 && lat < 32 && lon > -15 && lon < 55) || (lat < -18 && lat > -32 && lon > 118 && lon < 145) ? '#ca8a04' : (Math.abs(lat) > 55 ? '#3f6212' : '#4d7c0f');
  /* "tessere" di terra: dischetti appoggiati sulla superficie, su una griglia di 6° (front = longitudine tra -90 e 90) */
  const tiles = (front) => {
    const s = [];
    for (let lat = -84; lat <= 84; lat += 6) {
      const step = 6 / Math.max(0.25, Math.cos(lat * D));
      for (let lon = -180; lon < 180; lon += step) {
        const isFront = Math.abs(lon) < 90; if (isFront !== front || !isLand(lat, lon)) continue;
        s.push({ t: 'group', rot: [0, lon, 0], shapes: [ { t: 'group', rot: [-lat, 0, 0], shapes: [ { t: 'cyl', r: 0.17, h: 0.02, n: 8, rot: [90, 0, 0], pos: [0, 0, R + 0.005], color: landColor(lat, lon), decal: 1 } ] } ] });
      }
    }
    return s;
  };
  const surfPipe = (pts, r, color) => ({ t: 'pipe', r, n: 6, curve: true, pts: pts.map(([a, o]) => ll(a, o, R + 0.03)), color });
  const T = (shapes) => [ { t: 'group', rot: [0, 0, -23.5], shapes } ];           // inclinazione dell'asse
  const hemi = (r, color, dz, front) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [front ? 90 : -90, 0, 0], pos: [0, 0, dz], color });
  /* celle che girano sulla faccia del taglio (convezione) */
  const loops = (rc, rr, n, col, col2, rate) => {
    const s = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 360 * D + 0.2, c = [rc * Math.cos(a), rc * Math.sin(a)], dir = i % 2 ? 1 : -1;
      const pts = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.09]; });
      s.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.07], color: col2 });
      for (let k = 0; k < 2; k++) s.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: col, anim: { type: 'path', pts, wave: 'saw', rate, phase: k / 2 } });
    }
    return s;
  };
  /* linee del campo magnetico (dipolo): r = L·cos²(lat) */
  const field = [];
  [2.6, 3.2].forEach((Lr) => [0, 60, 120, 180, 240, 300].forEach((lon) => {
    const pts = []; for (let lat = -70; lat <= 70; lat += 5) { const r = Lr * Math.cos(lat * D) ** 2; if (r > R + 0.08) pts.push(ll(lat, lon, r)); }
    if (pts.length > 2) { field.push({ t: 'pipe', r: 0.014, n: 5, curve: true, pts, color: '#a78bfa' }); field.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#ddd6fe', anim: { type: 'path', pts, wave: 'saw', rate: 0.3, phase: lon / 360 } }); }
  }));
  const clouds = [[50, -30, 1.4], [10, -20, 1.0], [-40, 0, 1.6], [55, 20, 1.0], [5, 60, 1.2], [-50, 60, 1.3], [-10, -60, 1.1], [30, -50, 0.9], [62, -5, 0.8]];

  LIBRARY({
    lang: 'en',
    id: 'terra',
    title: 'The Earth',
    intro: 'The Earth is our planet: a ball of rock and metal almost <b>13,000 km</b> wide, with oceans, continents and a thin blanket of air. Inside it is made of <b>layers</b>, like a peach: skin, flesh and stone. Let\'s open it up!',
    model: {
      rx: 0.22, ry: -0.42, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'superficie', name: 'Surface: oceans and continents', label: 'Continents and oceans', color: '#1d4ed8', explode: [4.6, 0.3, -2.6],
          info: '<p>From outside the Earth is <b>blue</b>: the oceans cover about <b>71%</b> of the surface. The rest is continents. In front of you here are Europe (with Italy!) and Africa.</p>',
          more: '<p>The oceans are 3700 m deep on average; the deepest point, the Mariana Trench, goes down almost 11,000 m. The highest mountain, Everest, is 8849 m tall.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, true) ].concat(tiles(true))) },
        { id: 'nuvole', name: 'Clouds', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>Clouds are tiny water droplets and ice crystals floating in the air. At any moment they cover about two thirds of the planet.</p>',
          shapes: T(clouds.map(([a, o, s], i) => ({ t: 'group', rot: [0, o, 0], shapes: [ { t: 'group', rot: [-a, 0, 0], shapes: [ { t: 'sphere', r: 0.16 * s, n: 6, m: 10, scale: [1.6, 0.6, 0.1], rot: [0, 0, i * 25], pos: [0, 0, R + 0.06], color: '#ffffff' } ] } ] }))) },
        { id: 'crosta', name: 'Crust', color: '#92400e', explode: [0, 0, -0.4],
          info: '<p>The rocky "skin" we live on. It is very thin: in proportion it is thinner than the skin of an apple! Under the continents it is 30–70 km thick, under the oceans only 5–10 km.</p>',
          more: '<p>The crust is split into big pieces, the <b>plates</b>, which float on the mantle and move a few centimetres a year, about as fast as your fingernails grow.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, false), { t: 'tube', r: R + 0.004, ri: R - 0.08, h: 0.03, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#92400e' } ].concat(tiles(false))) },
        { id: 'placche', name: 'Plate boundaries', label: 'Plates', color: '#facc15', explode: [4.6, 0.3, -2.6],
          info: '<p>The yellow lines are some of the <b>boundaries between plates</b>. Where plates move apart, new crust is born (as in the middle of the Atlantic); where they collide, mountains like the <b>Alps</b> and the Himalayas rise up, and there are volcanoes and earthquakes.</p>',
          more: '<p>200 million years ago the continents were joined in a single supercontinent, <b>Pangaea</b>. Look at the coasts of Africa and South America: they fit together like pieces of a jigsaw puzzle!</p>',
          shapes: T([ surfPipe([[66, -18], [50, -29], [30, -42], [15, -46], [0, -22], [-20, -13], [-40, -16], [-55, -5]], 0.03, '#facc15'),
            surfPipe([[36, -8], [40, 5], [45, 12], [41, 22], [38, 35], [34, 50], [30, 65], [30, 80], [27, 88]], 0.03, '#facc15'),
            surfPipe([[12, -79], [-5, -83], [-20, -73], [-35, -74], [-50, -77]], 0.03, '#facc15'),
            surfPipe([[13, 42], [0, 37], [-15, 35]], 0.025, '#facc15') ]) },
        { id: 'mantello-superiore', name: 'Upper mantle', label: 'Upper mantle', color: '#ea580c', explode: [0, 0, 0],
          info: '<p>Under the crust is the <b>mantle</b>: very hot rock that, over very long times, flows slowly like a thick dough. In the upper part, in some places, the rock melts and forms the <b>magma</b> of volcanoes.</p>',
          shapes: T([ hemi(R - 0.08, '#ea580c', 0.022, false) ]) },
        { id: 'mantello-inferiore', name: 'Lower mantle', label: 'Lower mantle', color: '#b91c1c', explode: [0, 0, 0],
          info: '<p>The mantle is the biggest layer: it goes down to <b>2900 km</b> deep and by itself is more than 80% of the Earth\'s volume. The deeper you go, the hotter it gets: up to about 4000 °C.</p>',
          shapes: T([ hemi(1.79, '#b91c1c', 0.032, false) ]) },
        { id: 'convezione', name: 'Currents in the mantle', label: 'Convection currents', color: '#fed7aa', explode: [0, 0, 0.05], chip: true,
          info: '<p>The mantle is hotter at the bottom and cooler at the top: hot rock slowly rises, cold rock sinks. These <b>convection currents</b> drag the plates of the crust along.</p>',
          more: '<p>One full loop of these currents takes <b>tens of millions of years</b>: the rock of the mantle moves at a speed of a few centimetres a year.</p>',
          shapes: T(loops(1.45, 0.28, 10, '#fed7aa', '#7f1d1d', 0.3)) },
        { id: 'nucleo-esterno', name: 'Outer core (liquid)', label: 'Outer core', color: '#f59e0b', explode: [0, 0, 0.1],
          info: '<p>A layer of <b>molten iron and nickel</b>, liquid, at 4000–5000 °C. The moving liquid metal creates the Earth\'s <b>magnetic field</b>.</p>',
          shapes: T([ hemi(1.09, '#f59e0b', 0.042, false) ].concat(loops(0.74, 0.17, 7, '#fef3c7', '#b45309', 0.8))) },
        { id: 'nucleo-interno', name: 'Inner core (solid)', label: 'Inner core', color: '#fef3c7', explode: [0, 0, 0.2],
          info: '<p>The centre of the Earth: a very hot ball of <b>iron and nickel</b>, about <b>5400 °C</b>, as hot as the surface of the Sun! Yet it is <b>solid</b>, because the pressure is enormous.</p>',
          more: '<p>Nobody has ever gone down that deep: the deepest hole ever dug reaches 12 km. We know the inside of the Earth by studying how <b>earthquake waves</b> travel: they change speed and direction as they pass from one layer to another.</p>',
          shapes: T([ { t: 'sphere', r: 0.38, n: 14, m: 22, anim: { type: 'blink', color: '#ffffff', amount: 0.4, rate: 0.8 } } ]) },
        { id: 'campo-magnetico', name: 'Magnetic field', label: 'Magnetic field', color: '#a78bfa', explode: [0, 0, 0],
          info: '<p>The Earth behaves like a <b>gigantic magnet</b>. That is why a compass needle points north. The magnetic field also protects us from the solar wind.</p>',
          more: '<p>The magnetic north pole is not exactly the same as the geographic one and moves by tens of km a year. In Earth\'s history the magnetic poles have <b>flipped</b> many times!</p>',
          shapes: T(field) },
        { id: 'asse', name: 'Axis of rotation', label: 'Earth\'s axis', color: '#e2e8f0', explode: [0, 0, 0],
          info: '<p>The Earth spins around an imaginary line, the <b>axis</b>, which passes through the North Pole and the South Pole. One turn takes <b>24 hours</b>: that is day and night.</p>',
          more: '<p>The axis is tilted by <b>23.5°</b>. That is why, as the Earth goes around the Sun, the rays arrive more directly sometimes on the northern hemisphere and sometimes on the southern: these are the <b>seasons</b>!</p>',
          shapes: T([ { t: 'cyl', r: 0.025, h: 5.6, n: 8, color: '#e2e8f0' }, { t: 'cone', r: 0.08, h: 0.22, n: 12, pos: [0, 2.9, 0], color: '#ef4444' },
            { t: 'group', pos: [0, 2.45, 0], anim: { type: 'spin', axis: 'y', rate: 0.5, dir: -1 }, shapes: [ { t: 'torus', R: 0.42, r: 0.02, n: 24, m: 4, arc: 300, color: '#e2e8f0' }, { t: 'cone', r: 0.06, h: 0.16, n: 10, rot: [0, 0, 90], pos: [0.42, 0, 0], color: '#e2e8f0' } ] } ]) },
        { id: 'atmosfera', name: 'Atmosphere', color: '#7dd3fc', alpha: 0.14, explode: [0, 0, 0],
          info: '<p>A thin blanket of <b>air</b> wraps around the planet: it holds the oxygen we breathe, keeps in the heat and protects us from the Sun\'s most dangerous rays.</p>',
          more: '<p>Air is 78% nitrogen and 21% oxygen. Half of all the air is below 5.5 km in height: at this scale the atmosphere is as thin as the skin of an onion.</p>',
          shapes: [ { t: 'sphere', r: R + 0.13, n: 18, m: 32 } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'The blue planet', explode: 0,
        html: '<p>Seen from space the Earth is blue and white: <b>oceans</b> and <b>clouds</b>. It is the only planet we know with liquid water on its surface and with life.</p><p class="tip">🇮🇹 Can you find Italy? It is the "boot" in the middle of the sea, above Africa.</p>' },
      { icon: '🔄', title: 'It spins around', explode: 0,
        html: '<p>The Earth rotates around its <b>axis</b> in 24 hours, from west to east: that is why the Sun seems to rise in the east and set in the west. The axis is <b>tilted</b> and this gives us the seasons.</p>' },
      { icon: '🍑', title: 'Inside it is made of layers', explode: 1, focus: ['crosta', 'mantello-superiore', 'mantello-inferiore', 'nucleo-esterno', 'nucleo-interno'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>If we could cut the Earth like a peach we would see the <b>crust</b> (the skin), the <b>mantle</b> (the flesh) and the <b>core</b> (the stone), divided into a liquid outer core and a solid inner core.</p><p class="tip">🌡️ The deeper you go, the hotter it gets: at the centre it is about 5400 °C.</p>' },
      { icon: '🥾', title: 'The crust and the plates', explode: 0, view: { rx: 0.3, ry: -0.05 },
        html: '<p>The crust is very thin and split into big pieces, the <b>plates</b>. Where they collide, mountains, volcanoes and earthquakes appear: Italy lies exactly where the African plate pushes against the European one.</p>' },
      { icon: '♨️', title: 'The mantle moves', explode: 1, focus: ['mantello-superiore', 'mantello-inferiore', 'convezione'], view: { rx: 0.1, ry: -0.15 }, zoom: 1.2,
        html: '<p>The mantle is very hot rock that moves very slowly, like a thick dough: the hot part rises, the cold part sinks. These <b>currents</b> move the plates a few centimetres every year.</p>' },
      { icon: '🧲', title: 'The core and the Earth magnet', explode: 1, focus: ['nucleo-esterno', 'nucleo-interno', 'campo-magnetico'], view: { rx: 0.15, ry: -0.3 },
        html: '<p>In the <b>outer core</b> liquid iron swirls around and creates the <b>magnetic field</b>: the Earth is like a big magnet. Thanks to it a compass works and the solar wind doesn\'t hit us.</p>' },
      { icon: '🌬️', title: 'The blanket of air', explode: 0, 
        html: '<p>Around the Earth is the <b>atmosphere</b>: the air we breathe. It keeps in the Sun\'s heat (without it, it would be −18 °C!) and protects us. Clouds and weather form inside the atmosphere.</p>' }
    ],
    facts: [
      { icon: '🥔', title: 'Not a perfect ball', html: 'As it spins, the Earth is squashed a tiny bit at the poles: the diameter at the equator is about 43 km longer than the one between the poles.' },
      { icon: '🏎️', title: 'Super fast without noticing', html: 'At the equator the rotation carries us at about <b>1670 km/h</b>, and around the Sun the Earth races along at 107,000 km/h!' },
      { icon: '🎂', title: 'An ancient planet', html: 'The Earth is about <b>4.6 billion years</b> old. Humans have existed for about 300,000 years: if the history of the Earth were one day, we would have arrived in the last 6 seconds.' },
      { icon: '🧩', title: 'The puzzle of the continents', html: 'The coasts of Africa and South America fit together: long ago they were joined in the supercontinent <b>Pangaea</b>.' },
      { icon: '🕳️', title: 'The deepest hole', html: 'The deepest well ever dug (in Russia) reaches about 12 km: less than 0.2% of the way to the centre of the Earth.' }
    ],
    quiz: [
      { type: 'order', q: 'Put the layers of the Earth in order, from the surface to the centre', items: ['Crust', 'Mantle', 'Outer core', 'Inner core'], explain: 'Skin, flesh and stone: crust, mantle, liquid core and solid core.' },
      { type: 'mc', q: 'What is the Earth\'s core mostly made of?', options: ['Water and ice', 'Iron and nickel', 'Sand', 'Compressed air'], answer: 1, explain: 'The core is made of iron and nickel: liquid in the outer part, solid in the centre.' },
      { type: 'tf', q: 'The inner core is solid even though it is very hot.', answer: true, explain: 'The enormous pressure stops the metal from melting.' },
      { type: 'mc', q: 'What creates the Earth\'s magnetic field?', options: ['The wind', 'The liquid iron moving in the outer core', 'The Moon', 'The oceans'], answer: 1, explain: 'The movement of the liquid metal produces the magnetic field.' },
      { type: 'num', q: 'In how many hours does the Earth make one full turn on itself?', answer: 24, unit: 'hours', explain: 'About 24 hours: that is the length of a day.' },
      { type: 'mc', q: 'Why are there seasons?', options: ['Because the Earth gets much closer to and further from the Sun', 'Because the Earth\'s axis is tilted', 'Because the Sun switches on and off', 'Because of the clouds'], answer: 1, explain: 'The 23.5° tilt makes the rays arrive more directly sometimes on one hemisphere, sometimes on the other.' }
    ]
  });
})();
