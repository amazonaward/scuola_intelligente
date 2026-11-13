/* Il Sole, "tagliato a metà come un'arancia": la metà posteriore mostra gli strati sulla faccia del taglio (piano z = 0, rivolto verso +z);
   la metà anteriore (fotosfera) si sposta con il cursore Esplodi. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const backHemi = (r, color, dz, alpha) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [-90, 0, 0], pos: [0, 0, dz], color, alpha });
  /* punto sulla superficie: ax = inclinazione dall'alto verso +z, ay = giro intorno a y */
  const onSurf = (ax, ay, shapes) => ({ t: 'group', rot: [0, ay, 0], shapes: [ { t: 'group', rot: [ax, 0, 0], shapes: [ { t: 'group', pos: [0, R, 0], shapes } ] } ] });
  /* celle convettive sulla faccia del taglio */
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * 360 * D, c = [1.7 * Math.cos(a), 1.7 * Math.sin(a)], rr = 0.2;
    const dir = i % 2 ? 1 : -1;
    const loop = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.07]; });
    cells.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.05], color: '#9a3412' });
    for (let k = 0; k < 2; k++) cells.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: loop[0], color: '#fef3c7',
      anim: [ { type: 'path', pts: loop, wave: 'saw', rate: 0.6, phase: k / 2 }, { type: 'blink', color: '#c2410c', amount: 0.9, rate: 0.6, phase: k / 2 } ] });
  }
  /* fotoni che rimbalzano nella zona radiativa */
  const photons = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * 360 * D + 0.3, u = [Math.cos(a), Math.sin(a)], v = [-u[1], u[0]];
    const pts = [0.5, 0.65, 0.8, 0.95, 1.1, 1.25, 1.42].map((r, k) => [u[0] * r + v[0] * (k % 2 ? 0.09 : -0.09), u[1] * r + v[1] * (k % 2 ? 0.09 : -0.09), 0.07]);
    photons.push({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: pts[0], color: '#ffffff', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.35, phase: i / 8 }, { type: 'blink', fade: true, wave: 'window', from: 0.03, to: 0.97, ramp: 0.06, rate: 0.35, phase: i / 8 } ] });
  }
  const flashes = [[0.15, 0.2], [-0.25, 0.05], [0.05, -0.28], [0.3, -0.1], [-0.12, 0.3]].map((p, i) => ({ t: 'sphere', r: 0.09, n: 8, m: 10, pos: [p[0], p[1], 0.09], color: '#ffffff',
    anim: { type: 'blink', fade: true, wave: 'window', from: 0, to: 0.15, ramp: 0.4, rate: 1.3, phase: i * 0.21 } }));
  const wind = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 137.5 * D, b = ((i * 53) % 140 - 70) * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)];
    wind.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], color: '#fde68a',
      anim: [ { type: 'path', pts: [[d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], [d[0] * 4.6, d[1] * 4.6, d[2] * 4.6]], wave: 'saw', rate: 0.4, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: i / 14 } ] });
  }
  /* granuli della fotosfera, sparsi a caso (generatore pseudo-casuale fisso) */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const GRAN = Array.from({ length: 46 }, () => [12 + rnd() * 160, -85 + rnd() * 170, 0.05 + rnd() * 0.07, rnd() < 0.5 ? '#f9c74f' : '#f6a821']);
  const prom = (ax, ay, s, ph) => onSurf(ax, ay, [ { t: 'group', anim: [ { type: 'scale', from: 0.85, to: 1.15, rate: 0.5, phase: ph }, { type: 'blink', color: '#fde047', amount: 0.5, rate: 0.5, phase: ph } ], shapes: [
    { t: 'torus', R: 0.32 * s, r: 0.08 * s, n: 22, m: 10, arc: 180, rot: [-90, 0, 0], color: '#f97316' },
    { t: 'torus', R: 0.32 * s, r: 0.035 * s, n: 22, m: 6, arc: 180, rot: [-90, 0, 0], pos: [0, 0.05 * s, 0], color: '#fde047' } ] } ]);

  LIBRARY({
    lang: 'en',
    id: 'sole',
    title: 'The Sun',
    intro: 'The Sun is the <b>star</b> closest to us: a ball of super-hot gas 109 times wider than the Earth. It gives us light and warmth and keeps plants, animals and people alive. Let\'s open it up like an orange and look inside!',
    model: {
      rx: 0.3, ry: -0.4, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'fotosfera', name: 'Photosphere (the surface)', label: 'Photosphere', color: '#fbbf24', explode: [4.6, 0.3, -2.6],
          info: '<p>This is the Sun\'s bright "surface", the part we see (never with the naked eye!). It isn\'t solid: it is gas at about <b>5500 °C</b>, all made of bubbling grains.</p>',
          more: '<p>The "grains" (granules) are the tops of huge bubbles of hot gas, as wide as Italy, that rise from the inside, cool down and sink back in a few minutes.</p>',
          shapes: [ { t: 'sphere', r: R, n: 20, m: 40, hemi: true, rot: [90, 0, 0] } ]
            .concat(GRAN.map(([ax, ay, r, c]) => onSurf(ax, ay, [ { t: 'sphere', r, n: 6, m: 10, scale: [1, 0.1, 1], color: c, decal: 1 } ]))) },
        { id: 'macchie', name: 'Sunspots', color: '#451a03', explode: [4.6, 0.3, -2.6],
          info: '<p>Areas that are "cooler" (so to speak: 3500 °C!) and therefore darker. A spot can be bigger than the Earth.</p>',
          more: '<p>Spots form where the Sun\'s <b>magnetic field</b> is very strong and holds back the rising hot gas. Their number goes up and down in a cycle of about <b>11 years</b>.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.22, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.12, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(68, 8, [ { t: 'sphere', r: 0.15, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(110, 30, [ { t: 'sphere', r: 0.18, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.1, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]) ] },
        { id: 'zona-convettiva', name: 'Convection zone', label: 'Convection zone', color: '#f97316', explode: [0, 0, 0],
          info: '<p>The outer layer of the Sun\'s interior. Here the hot gas <b>rises</b>, cools at the surface and <b>sinks</b> again, like water in a boiling pot.</p>',
          shapes: [ backHemi(R, '#fbbf24', 0), { t: 'cyl', r: R - 0.03, h: 0.01, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.007], color: '#f97316' }, { t: 'tube', r: R + 0.005, ri: R - 0.05, h: 0.03, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#fde047' } ] },
        { id: 'celle', name: 'Convection currents', label: 'Convection currents', color: '#fef3c7', explode: [0, 0, 0.05], chip: true, noLabel: true,
          info: '<p>The gas bubbles go round and round: they rise hot (light), give up their heat at the surface and sink cooler (dark). That is how the heat gets out.</p>',
          shapes: cells },
        { id: 'zona-radiativa', name: 'Radiative zone', label: 'Radiative zone', color: '#fcd34d', explode: [0, 0, 0.05],
          info: '<p>Here the gas is so dense that it doesn\'t move: energy travels as <b>light</b> bouncing from one particle to another, in a zig-zag.</p>',
          more: '<p>A photon can take from <b>tens of thousands to hundreds of thousands of years</b> to cross this zone. The light that warms you today was born in the core when mammoths lived on Earth!</p>',
          shapes: [ backHemi(1.45, '#fcd34d', 0.02) ] },
        { id: 'fotoni', name: 'Bouncing light (photons)', label: 'Photons', color: '#ffffff', explode: [0, 0, 0.1], chip: true, noLabel: true,
          info: '<p>Tiny "packets" of light, the <b>photons</b>, set off from the core and are absorbed and sent out again billions of times before getting out.</p>',
          shapes: photons },
        { id: 'nucleo', name: 'Core', color: '#fffbeb', explode: [0, 0, 0.1],
          info: '<p>The centre of the Sun, at about <b>15 million degrees</b>. Here hydrogen turns into helium through <b>nuclear fusion</b>: every flash is energy being born.</p>',
          more: '<p>Every second the Sun turns about 600 million tonnes of hydrogen into helium and "loses" 4 million tonnes of mass, which becomes energy (E = mc²). It has fuel for another <b>5 billion years</b>.</p>',
          shapes: [ backHemi(0.55, '#fffbeb', 0.04) ].concat(flashes) },
        { id: 'protuberanze', name: 'Prominences', color: '#f97316', explode: [0, 0.4, 0],
          info: '<p>Huge arcs of glowing gas that rise from the surface, following the lines of the <b>magnetic field</b>. Dozens of Earths would fit inside one arc!</p>',
          shapes: [ prom(0, 0, 1.1, 0), prom(-35, 90, 0.8, 0.3), prom(30, -90, 0.9, 0.6), prom(-60, 20, 0.7, 0.45) ] },
        { id: 'brillamento', name: 'Solar flare', label: 'Flare', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>A sudden explosion on the surface, near the spots: in a few minutes it releases as much energy as millions of volcanoes.</p>',
          more: '<p>Flares and the big "bubbles" of gas thrown out (CMEs) can disturb satellites, GPS and power grids on Earth, and light up beautiful auroras.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.2, n: 14, m: 20, color: '#fef9c3', alpha: 0.9, anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.1, to: 0.3, ramp: 0.3 }, { type: 'scale', from: 0.4, to: 1.4, wave: 'window', win: [0.1, 0.3] } ] } ]) ] },
        { id: 'corona', name: 'Corona', color: '#fde68a', alpha: 0.12, explode: [0, 0, 0],
          info: '<p>A very thin atmosphere surrounding the Sun that is hotter than the surface: over <b>1 million degrees</b>. You can see it with the naked eye only during <b>total eclipses</b>.</p>',
          more: '<p>Why the corona is so hot is still one of the great mysteries of solar physics. The <b>Parker Solar Probe</b> has flown through it to study it.</p>',
          shapes: [ { t: 'sphere', r: 2.45, n: 18, m: 30, anim: { type: 'scale', from: 1, to: 1.05, rate: 0.4 } }, { t: 'sphere', r: 2.9, n: 18, m: 30, alpha: 0.06, anim: { type: 'scale', from: 1.04, to: 0.98, rate: 0.4 } } ] },
        { id: 'vento-solare', name: 'Solar wind', label: 'Solar wind', color: '#fde68a', explode: [0, 0, 0],
          info: '<p>A "wind" of very fast particles (400 km per second!) flows constantly from the Sun. The Earth\'s magnetic field acts as a shield for us.</p>',
          more: '<p>When the particles of the solar wind enter the atmosphere near the poles, they make the air glow green and purple: these are the <b>polar auroras</b>.</p>',
          shapes: wind },
        { id: 'terra', name: 'The Earth (to scale)', label: 'Earth (to scale)', color: '#3b82f6', pos: [3.3, 1.5, 0.4], explode: [0.5, 0.3, 0],
          info: '<p>This little dot is the <b>Earth</b>, drawn at the same scale as the Sun. More than <b>a million</b> Earths would fit inside the Sun!</p>',
          more: '<p>The distance, however, is not to scale: the Earth is about <b>150 million km</b> from the Sun. At this scale it would be more than 200 metres from the screen!</p>',
          shapes: [ { t: 'sphere', r: 0.04, n: 8, m: 12 }, { t: 'torus', R: 0.12, r: 0.008, n: 20, m: 4, rot: [90, 0, 0], color: '#93c5fd', alpha: 0.7 } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'Our star', explode: 0,
        html: '<p>The Sun is a <b>star</b> like the ones you see at night, but much closer: it is 150 million km away and its light reaches us in about <b>8 minutes</b>.</p><p class="tip">⚠️ Never look at the Sun directly, not even with sunglasses: it damages your eyes.</p>' },
      { icon: '🍊', title: 'Let\'s open it up like an orange', explode: 1, focus: ['zona-convettiva', 'zona-radiativa', 'nucleo', 'fotosfera'],
        html: '<p>The Sun is made of <b>layers</b>, like an onion: in the centre the <b>core</b>, then the <b>radiative zone</b>, the <b>convection zone</b> and finally the bright surface, the <b>photosphere</b>.</p><p>It is all gas, nothing solid: mostly <b>hydrogen</b> (3/4) and <b>helium</b>.</p>' },
      { icon: '⚛️', title: 'Energy is born in the core', explode: 1, focus: ['nucleo'], zoom: 2.2, view: { rx: 0.1, ry: -0.15 },
        html: '<p>In the core it is <b>15 million degrees</b>. Hydrogen fuses and becomes helium: this is <b>nuclear fusion</b>. Every flash releases energy that will become light and heat.</p>' },
      { icon: '🔦', title: 'Light bounces for thousands of years', explode: 1, focus: ['zona-radiativa', 'fotoni', 'nucleo'], zoom: 1.5, view: { rx: 0.1, ry: -0.15 },
        html: '<p>In the <b>radiative zone</b> energy travels as light, but the gas is so dense that the photons bounce in a zig-zag: to get out they take <b>thousands of years</b>.</p>' },
      { icon: '♨️', title: 'The Sun is bubbling', explode: 1, focus: ['zona-convettiva', 'celle'], zoom: 1.3, view: { rx: 0.1, ry: -0.15 },
        html: '<p>In the <b>convection zone</b> the gas moves in big loops: it rises hot, cools at the surface and sinks again, like water boiling in a pot. These currents are called <b>convection currents</b>.</p>' },
      { icon: '🌑', title: 'Spots, arcs and explosions', explode: 0, focus: ['fotosfera', 'macchie', 'protuberanze', 'brillamento', 'celle', 'fotoni'],
        html: '<p>On the surface appear dark <b>spots</b> (cooler areas), huge arcs of gas called <b>prominences</b> and sudden flashes, the <b>flares</b>. They are all caused by the Sun\'s <b>magnetism</b>.</p>' },
      { icon: '🌬️', title: 'Corona and solar wind', explode: 0, focus: ['corona', 'vento-solare', 'terra', 'fotosfera', 'celle', 'fotoni'], view: { rx: 0.25, ry: -0.7 },
        html: '<p>Around the Sun is the <b>corona</b>, very hot but very thin. From there the <b>solar wind</b> sets off, a flow of particles that reaches the Earth and lights up the <b>polar auroras</b>.</p><p class="tip">🌍 Look at the blue dot: it\'s the Earth at the same scale as the Sun!</p>' }
    ],
    facts: [
      { icon: '⚖️', title: 'The giant of the Solar System', html: 'The Sun contains <b>99.8%</b> of all the mass in the Solar System. All the planets together are just "the crumbs".' },
      { icon: '🕗', title: 'Light from 8 minutes ago', html: 'When you look at sunlight, you see the Sun as it was <b>8 minutes and 20 seconds</b> ago: that is the time the light takes to arrive.' },
      { icon: '🌗', title: 'Eclipses', html: 'During a total eclipse the Moon covers the Sun exactly: the Sun is 400 times bigger than the Moon, but also 400 times farther away!' },
      { icon: '🌱', title: 'The engine of life', html: 'Plants use sunlight to make their food (photosynthesis). The food you eat, too, is in the end energy from the Sun.' },
      { icon: '🔄', title: 'It spins too', html: 'The Sun rotates on its axis, but not all at once: at the equator it takes about <b>25 days</b> to go round, near the poles more than 30.' }
    ],
    quiz: [
      { type: 'mc', q: 'What is the Sun?', options: ['A planet', 'A star', 'A comet', 'A satellite'], answer: 1, explain: 'The Sun is a star: it makes light and heat through nuclear fusion.' },
      { type: 'mc', q: 'In which part of the Sun does nuclear fusion happen?', options: ['In the corona', 'In the photosphere', 'In the core', 'In the sunspots'], answer: 2, explain: 'Only in the core are the temperature and pressure high enough.' },
      { type: 'num', q: 'About how many minutes does sunlight take to reach the Earth?', answer: 8, tol: 1, unit: 'min', explain: 'About 8 minutes and 20 seconds.' },
      { type: 'tf', q: 'Sunspots are areas that are hotter than the rest of the surface.', answer: false, explain: 'They are cooler (about 3500 °C against 5500 °C), which is why they look dark.' },
      { type: 'order', q: 'Put the Sun\'s layers in order, from the centre outwards', items: ['Core', 'Radiative zone', 'Convection zone', 'Photosphere', 'Corona'], explain: 'From the core, where the energy is born, out to the corona, the outer atmosphere.' },
      { type: 'mc', q: 'What causes the polar auroras on Earth?', options: ['The Moon', 'The solar wind', 'Volcanoes', 'Clouds'], answer: 1, explain: 'The particles of the solar wind make the air glow near the poles.' }
    ]
  });
})();
