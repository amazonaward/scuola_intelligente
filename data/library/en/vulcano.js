/* Il vulcano (strato-vulcano) tagliato a metà. La metà anteriore ("fianco") si sposta con Esplodi o diventa trasparente nei passi;
   sul piano del taglio (z = Z0) si vedono strati, camera magmatica e camino. */
(function () {
  const Z0 = 0.34, H = 3.0, RB = 4.2, RIM = 0.6;
  const rad = (y) => RIM + (RB - RIM) * Math.pow(1 - y / H, 1.6);
  const PROF = [[0, 0]].concat([0, 0.3, 0.7, 1.1, 1.5, 1.9, 2.3, 2.6, 2.85, 3.0].map((y) => [rad(y), y]), [[RIM * 0.7, H - 0.12], [0.18, H - 0.38], [0, H - 0.4]]);
  /* "mezzo tornio": fette estruse ruotate intorno a y, da a0 a a1 gradi (0→180 = metà dietro, 180→360 = metà davanti) */
  const halfLathe = (prof, a0, a1, N, color) => {
    const th = (a1 - a0) / N, d = 2 * RB * Math.tan((th * Math.PI / 180) / 2) * 1.12, s = [];
    for (let k = 0; k <= N; k++) s.push({ t: 'extrude', pts: prof, d, rot: [0, a0 + k * th, 0], color, smooth: true });
    return s;
  };
  /* strati del terreno (box impilati) tra z = za e z = zb */
  const LAYERS = [ [0, -0.18, '#4d7c0f'], [-0.18, -0.7, '#a16207'], [-0.7, -1.2, '#78716c'], [-1.2, -1.75, '#57534e'], [-1.75, -2.4, '#44403c'] ];
  const ground = (za, zb) => LAYERS.map(([y0, y1, c]) => ({ t: 'box', s: [10, y0 - y1, zb - za], pos: [0, (y0 + y1) / 2, (za + zb) / 2], color: c }));
  /* bande di strati sul taglio del cono: poligoni tra due quote */
  const band = (y0, y1, color) => {
    const ys = []; for (let i = 0; i <= 6; i++) ys.push(y0 + (y1 - y0) * i / 6);
    const right = ys.map((y) => [rad(y), y]), left = ys.slice().reverse().map((y) => [-rad(y), y]);
    return { t: 'extrude', pts: right.concat(left), d: 0.04, pos: [0, 0, Z0], color };
  };
  const BANDS = [];
  const bc = ['#6b5b53', '#a8a29e', '#57534e', '#9ca3af', '#7c6f64', '#b8b2a7', '#5b524b'];
  [0, 0.35, 0.75, 1.15, 1.55, 1.95, 2.35].forEach((y, i, a) => BANDS.push(band(y, Math.min(a[i + 1] || 2.62, 2.62), bc[i])));
  /* colate di lava sul fianco anteriore */
  const flow = (ang, wig, len) => {
    const pts = []; for (let i = 0; i <= 10; i++) { const y = H - 0.05 - i * (H - 0.1) * len / 10; const a = (ang + Math.sin(i * 0.9) * wig) * Math.PI / 180; const r = rad(y) + 0.06; pts.push([r * Math.cos(a), y + 0.02, -r * Math.sin(a)]); }
    return pts;
  };
  const lavaFlow = (ang, wig, len, w) => ({ t: 'pipe', r: w, n: 10, curve: true, pts: flow(ang, wig, len), color: '#ea580c', anim: { type: 'blink', color: '#fde047', amount: 0.55, rate: 1.4 } });
  /* lapilli della fontana di lava */
  const bombs = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 2.4, r = 0.6 + (i % 4) * 0.25, dx = Math.cos(a) * r, dz = Math.sin(a) * r;
    const pts = [[0, H - 0.3, Z0], [dx * 0.25, H + 0.6, Z0 + dz * 0.25], [dx * 0.55, H + 1.0 + (i % 3) * 0.15, Z0 + dz * 0.55], [dx * 0.85, H + 0.7, Z0 + dz * 0.85], [dx * 1.1, H - 0.1, Z0 + dz * 1.1]];
    bombs.push({ t: 'sphere', r: 0.06 + (i % 3) * 0.015, n: 6, m: 8, pos: pts[0], color: i % 2 ? '#f97316' : '#fde047', anim: [ { type: 'path', pts, wave: 'saw', rate: 1.1, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1.1, phase: i / 14 } ] });
  }
  const ash = [];
  for (let i = 0; i < 10; i++) {
    const a = i * 2.1, s = 0.35 + (i % 3) * 0.15;
    ash.push({ t: 'sphere', r: s, n: 10, m: 14, pos: [0, H + 0.3, Z0], color: i % 2 ? '#78716c' : '#a8a29e',
      anim: [ { type: 'path', pts: [[0, H + 0.3, Z0], [Math.cos(a) * 0.4, H + 1.6, Z0 + Math.sin(a) * 0.3], [Math.cos(a) * 0.9 + 0.6, H + 3.0, Z0 + Math.sin(a) * 0.6]], wave: 'saw', rate: 0.35, phase: i / 10 },
        { type: 'scale', from: 0.4, to: 1.5, wave: 'saw', rate: 0.35, phase: i / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.35, phase: i / 10 } ] });
  }
  const magmaUp = [];
  for (let i = 0; i < 10; i++) magmaUp.push({ t: 'sphere', r: 0.09, n: 6, m: 8, pos: [0, -1.1, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, -1.1, Z0 + 0.05], [0, 0.5, Z0 + 0.05], [0, H - 0.4, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 10 } });
  for (let i = 0; i < 4; i++) magmaUp.push({ t: 'sphere', r: 0.07, n: 6, m: 8, pos: [0, 0.95, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, 0.95, Z0 + 0.05], [1.1, 1.0, Z0 + 0.05], [rad(1.25) - 0.1, 1.25, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 4 } });

  LIBRARY({
    lang: 'en',
    id: 'vulcano',
    title: 'The volcano',
    intro: 'A volcano is an opening in the Earth\'s crust from which <b>magma</b> comes out, molten rock that rises from deep down. Italy has some very famous ones: <b>Etna</b>, <b>Vesuvius</b>, <b>Stromboli</b>. Let\'s cut one in half and look inside!',
    model: {
      rx: 0.32, ry: -0.42, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'fianco', name: 'Side of the volcano', label: 'Flank', color: '#6b5b53', explode: [7.5, -0.8, 2.5],
          info: '<p>The half of the volcano we see from outside: a <b>cone</b> of rock built up by many eruptions. Plants grow on the lower slopes: volcanic ash makes the soil very fertile.</p>',
          more: '<p>On the slopes of Etna and Vesuvius, vines, citrus fruits and pistachios are grown thanks to the volcanic soil, rich in minerals.</p>',
          shapes: halfLathe(PROF, 180, 360, 22, '#6b5b53').concat(ground(Z0, 3.4)) },
        { id: 'cono', name: 'Volcanic cone', label: 'Cone', color: '#5b524b', explode: [0, 0, -0.6],
          info: '<p>This is the mountain itself. Every eruption adds a layer of lava or ash: that is how the volcano <b>grows</b> over time, sometimes by many metres in a few years.</p>',
          shapes: halfLathe(PROF, 0, 180, 22, '#5b524b') },
        { id: 'strati', name: 'Layers of lava and ash', label: 'Layers', color: '#a8a29e', explode: [0, 0, 0.05],
          info: '<p>If you cut the cone you can see alternating <b>layers</b>: solidified lava (dark) and ash and lapilli (lighter). That is why these volcanoes are called <b>stratovolcanoes</b>.</p>',
          more: '<p>There are also <b>shield volcanoes</b>, like those in Hawaii: wide and low, made only of very runny lava flows.</p>',
          shapes: BANDS },
        { id: 'crosta', name: 'Earth\'s crust', label: 'Crust', color: '#57534e', explode: [0, -0.4, -0.6],
          info: '<p>Under our feet there are layers of soil and <b>rock</b>: this is the Earth\'s crust, the planet\'s "skin". In some places it is broken or thin and magma manages to rise.</p>',
          shapes: ground(-3.0, Z0) },
        { id: 'camera', name: 'Magma chamber', label: 'Magma chamber', color: '#dc2626', explode: [0, -0.5, 0.6],
          info: '<p>A big "pocket" of <b>magma</b> a few kilometres deep. Magma is molten rock at over <b>1000 °C</b>, full of dissolved gas, like the bubbles in a fizzy drink.</p>',
          more: '<p>Magma is lighter than the surrounding rocks and tends to rise. When the gas <b>pressure</b> in the chamber becomes too high, the magma forces its way towards the surface: the eruption begins.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 16, m: 28, pos: [0, -1.4, Z0], scale: [1.5, 0.55, 0.9], anim: { type: 'blink', color: '#f97316', amount: 0.5, rate: 0.8 } },
            { t: 'pipe', r: 0.2, n: 12, curve: true, pts: [[0.4, -2.45, Z0], [0.45, -2.1, Z0], [0.2, -1.8, Z0]], color: '#b91c1c' } ] },
        { id: 'camino', name: 'Volcanic conduit', label: 'Conduit', color: '#ea580c', explode: [0, 0.2, 0.6],
          info: '<p>The natural "pipe" along which magma rises from the chamber to the crater.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 14, curve: true, pts: [[0, -0.9, Z0], [0.05, 0.3, Z0], [-0.03, 1.6, Z0], [0, H - 0.38, Z0]] } ] },
        { id: 'magma', name: 'Rising magma', label: 'Magma', color: '#fde047', explode: [0, 0.2, 0.7], chip: true,
          info: '<p>Pushed by the gas, the magma rises up the conduit. When it comes out on the surface it loses its gas and from then on it is called <b>lava</b>.</p>',
          shapes: magmaUp },
        { id: 'condotto', name: 'Side vent and secondary cone', label: 'Side vent', color: '#c2410c', explode: [0.5, 0.1, 0.5],
          info: '<p>Sometimes the magma finds a way out to the side and opens a <b>side vent</b> on the flank of the volcano: there a small secondary cone forms.</p>',
          more: '<p>Etna has more than <b>300 secondary cones</b> (parasitic cones) on its flanks, born from side eruptions over the centuries.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[0, 0.95, Z0], [0.7, 0.95, Z0], [rad(1.25) - 0.05, 1.25, Z0]] },
            { t: 'lathe', n: 20, pos: [rad(1.25) + 0.05, 1.12, Z0 - 0.1], pts: [[0.42, 0], [0.3, 0.12], [0.12, 0.25], [0.06, 0.22], [0, 0.2]], color: '#44403c' } ] },
        { id: 'cratere', name: 'Crater', color: '#292524', explode: [0, 0.5, 0],
          info: '<p>The bowl-shaped opening at the top of the volcano. Inside there can be a bubbling <b>lava lake</b>.</p>',
          shapes: [ { t: 'torus', R: RIM, r: 0.07, n: 30, m: 8, pos: [0, H, 0], color: '#3f3f46' },
            { t: 'cyl', r: 0.45, h: 0.04, n: 24, pos: [0, H - 0.3, 0], color: '#f97316', anim: { type: 'blink', color: '#fde047', amount: 0.8, rate: 2 } } ] },
        { id: 'fontana', name: 'Lava fountain and lapilli', label: 'Lapilli', color: '#f97316', explode: [0, 0.6, 0],
          info: '<p>During an explosive eruption the volcano throws scraps of lava into the air that cool as they fly: the small ones are <b>lapilli</b>, the ones as big as a ball are <b>volcanic bombs</b>.</p>',
          shapes: bombs },
        { id: 'nube', name: 'Cloud of ash and gas', label: 'Ash cloud', color: '#78716c', explode: [0, 1.0, 0],
          info: '<p>The volcano gives off water vapour, gas and <b>ash</b>: tiny fragments of rock. The cloud can rise for kilometres and the wind carries it far away.</p>',
          more: '<p>In 2010 the cloud from the Icelandic volcano Eyjafjallajökull stopped flights across half of Europe for days: ash can damage aeroplane engines.</p>',
          shapes: ash },
        { id: 'colate', name: 'Lava flows', label: 'Lava flows', color: '#ea580c', explode: [7.5, -0.8, 2.5],
          info: '<p>Lava runs down the flanks like a red river. As it cools it becomes dark and hard: it is <b>new rock</b> (basalt).</p>',
          more: '<p>Etna\'s lava flows usually move slowly, a few metres an hour: there is time to get away. More dangerous are <b>pyroclastic flows</b> (glowing clouds), like the one that buried Pompeii in 79 AD.</p>',
          shapes: [ lavaFlow(240, 6, 0.75, 0.1), lavaFlow(290, 9, 0.95, 0.12), lavaFlow(320, 5, 0.6, 0.08) ] }
      ]
    },
    steps: [
      { icon: '🌋', title: 'A mountain of fire', explode: 0,
        html: '<p>From outside a volcano looks like a <b>cone</b>-shaped mountain with a bowl at the top: the <b>crater</b>. But its story begins much lower down, underground.</p>' },
      { icon: '🔪', title: 'Let\'s cut it in half', explode: 1,
        html: '<p>Let\'s take away the front half. Now we can see inside: under the volcano is the <b>magma chamber</b>, joined to the crater by a long pipe, the <b>conduit</b>.</p>' },
      { icon: '🔥', title: 'The magma chamber', explode: 1, focus: ['camera', 'crosta', 'magma', 'cono', 'strati'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.3,
        html: '<p>A few kilometres down, <b>magma</b> collects: molten rock at over 1000 °C, full of gas. Being lighter than the surrounding rocks, magma tends to <b>rise</b>.</p><p class="tip">🥤 The gas in magma is like the carbon dioxide in a fizzy-drink bottle: if you open it suddenly… it shoots out!</p>' },
      { icon: '⬆️', title: 'The magma rises', explode: 1, focus: ['camino', 'magma', 'camera', 'condotto', 'cono', 'strati', 'crosta'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>When the gas pressure is too high, the magma rises up the <b>conduit</b>. Sometimes it also finds a way out to the side and opens a <b>vent on the flank</b>.</p>' },
      { icon: '💥', title: 'The eruption', explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>The magma comes out of the crater and becomes <b>lava</b>. In explosive eruptions it flies into the air in scraps (<b>lapilli</b> and <b>bombs</b>) and a big <b>cloud of ash and gas</b> rises.</p>' },
      { icon: '🟠', title: 'The lava flows', explode: 0, view: { rx: 0.35, ry: 0.15 },
        html: '<p>Lava runs down the flanks like a slow, glowing river. As it cools it becomes dark <b>rock</b>: the volcano builds itself!</p>' },
      { icon: '🍰', title: 'Layer upon layer', explode: 1, focus: ['strati', 'cono', 'crosta'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.2,
        html: '<p>Every eruption adds a layer: lava (dark) and ash (light) alternate like in a layer cake. That is why Etna and Vesuvius are called <b>stratovolcanoes</b>.</p><p class="tip">🇮🇹 In Italy the active volcanoes are near where the African plate pushes under the European one.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'Etna, Europe\'s giant', html: '<b>Etna</b>, in Sicily, is the highest active volcano in Europe (about 3400 m) and erupts very often.' },
      { icon: '🏛️', title: 'Pompeii', html: 'In <b>79 AD</b> Vesuvius buried Pompeii and Herculaneum under metres of ash. The excavations show us what life was like for the ancient Romans.' },
      { icon: '🗼', title: 'The lighthouse of the Mediterranean', html: '<b>Stromboli</b> has thrown out small lava fountains every 10–20 minutes for thousands of years: sailors used it as a lighthouse.' },
      { icon: '🌊', title: 'Underwater volcanoes', html: 'Most of the Earth\'s volcanoes are <b>under the sea</b>. The biggest underwater volcano in Europe, Marsili, is in the Tyrrhenian Sea.' },
      { icon: '🪐', title: 'Volcanoes on other worlds', html: 'The tallest volcano in the Solar System is <b>Olympus Mons</b> on Mars: it is about 22 km high, almost three times Everest.' }
    ],
    quiz: [
      { type: 'mc', q: 'What is the molten rock under a volcano called?', options: ['Lava', 'Magma', 'Ash', 'Basalt'], answer: 1, explain: 'Underground it is called magma; when it comes out on the surface it becomes lava.' },
      { type: 'mc', q: 'What is the "pipe" called along which magma rises to the crater?', options: ['Conduit', 'Chamber', 'Flank', 'Lapillus'], answer: 0, explain: 'The conduit joins the magma chamber to the crater.' },
      { type: 'tf', q: 'Magma rises because it is lighter than the rocks around it and is pushed by gases.', answer: true, explain: 'It is less dense and the dissolved gases increase the pressure.' },
      { type: 'mc', q: 'Which volcano buried Pompeii in 79 AD?', options: ['Etna', 'Stromboli', 'Vesuvius', 'Vulcano'], answer: 2, explain: 'Vesuvius, near Naples.' },
      { type: 'order', q: 'Put the journey of the magma in order', items: ['Magma chamber', 'Conduit', 'Crater', 'Lava flow'], explain: 'From the chamber it rises up the conduit, comes out of the crater and runs down as a lava flow.' },
      { type: 'mc', q: 'Why are Etna and Vesuvius called "stratovolcanoes"?', options: ['Because they are stratospheric', 'Because they are made of alternating layers of lava and ash', 'Because they are flat', 'Because they are under the sea'], answer: 1, explain: 'Every eruption adds a layer of lava or ash.' }
    ]
  });
})();
