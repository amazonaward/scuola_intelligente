/* La stella: come funziona (fusione, equilibrio tra gravità e pressione) e come vive (ciclo di vita).
   Al centro una stella "come il Sole" vista in trasparenza; intorno, su un anello, le fasi della vita delle stelle. */
(function () {
  const D = Math.PI / 180;
  /* freccia lungo +y (base nell'origine): asta + punta */
  const arrow = (len, col, flip) => ({ t: 'group', rot: flip ? [180, 0, 0] : [0, 0, 0], pos: flip ? [0, len, 0] : [0, 0, 0], shapes: [
    { t: 'cyl', r: 0.035, h: len * 0.65, n: 10, pos: [0, len * 0.325, 0], color: col },
    { t: 'cone', r: 0.09, h: len * 0.35, n: 14, pos: [0, len * 0.82, 0], color: col } ] });
  /* frecce radiali: dirs come angoli [giro intorno a z, giro intorno a x] */
  const DIRS = [0, 45, 90, 135, 180, 225, 270, 315].map((a) => [0, a]).concat([[90, 0], [-90, 0], [90, 180], [-90, 180]]);
  const radial = (r0, len, col, inward, shift) => DIRS.map(([ax, az], i) => {
    const rz = az + (shift || 0), rx = ax;
    const dir = [-Math.sin(rz * D) * Math.cos(rx * D), Math.cos(rz * D) * Math.cos(rx * D), Math.sin(rx * D)];
    return { t: 'group', rot: [rx, 0, rz], shapes: [ { t: 'group', pos: [0, r0, 0], anim: { type: 'move', dir: [0, inward ? -1 : 1, 0], amp: 0.1, rate: 1, phase: i * 0.05 }, shapes: [ arrow(len, col, inward) ] } ], _d: dir };
  });
  /* protoni che si scontrano al centro (fusione) */
  const fusion = [];
  [[0.42, 0.1, 0.05], [-0.4, -0.12, 0.1], [0.08, 0.42, -0.1], [-0.1, -0.4, -0.08], [0.15, 0.05, 0.42], [-0.12, 0.06, -0.42]].forEach((p, i) => {
    fusion.push({ t: 'sphere', r: 0.07, n: 8, m: 10, pos: p, color: i % 2 ? '#ef4444' : '#f87171',
      anim: [ { type: 'path', pts: [p, [p[0] * 0.12, p[1] * 0.12, p[2] * 0.12]], wave: 'saw', rate: 1, phase: (i >> 1) * 0.33 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.08, rate: 1, phase: (i >> 1) * 0.33 } ] });
  });
  for (let k = 0; k < 3; k++) fusion.push({ t: 'sphere', r: 0.16, n: 10, m: 14, color: '#ffffff', anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.9, to: 1.0, ramp: 0.3, phase: k * 0.33 }, { type: 'scale', from: 0.6, to: 1.6, wave: 'window', win: [0.9, 1.0], phase: k * 0.33 } ] });
  /* fotoni che escono con un cammino a zig-zag */
  const photons = [];
  for (let i = 0; i < 9; i++) {
    const a = i * 40 * D, b = (i % 3 - 1) * 30 * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)], q = [-d[2], 0.4, d[0]];
    const pts = [0.3, 0.55, 0.8, 1.05, 1.25, 2.4].map((r, k) => [d[0] * r + q[0] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[1] * r + q[1] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[2] * r + q[2] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0)]);
    photons.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: '#fef08a', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.5, phase: i / 9 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.98, ramp: 0.05, rate: 0.5, phase: i / 9 } ] });
  }
  const at = (p, shapes) => ({ t: 'group', pos: p, shapes });
  const P = { nebulosa: [-3.3, 0.3, -1.3], proto: [-1.5, 0.2, -3.2], gigante: [1.6, 0.5, -3.3], planetaria: [3.5, 0.2, -1.0], supernova: [3.2, 0.2, 1.7], neutroni: [1.2, 0, 3.4], buco: [-1.7, 0, 3.1] };

  LIBRARY({
    lang: 'en',
    id: 'stella',
    title: 'The star',
    intro: 'A star is a gigantic ball of super-hot gas that <b>shines with its own light</b>. Deep inside, in the core, hydrogen turns into helium and releases a huge amount of energy. Stars are born, live and die too!',
    model: {
      rx: 0.55, ry: -0.35, speed: 0.35, height: 480, bg: 'space', fit: 0.98,
      parts: [
        { id: 'involucro', name: 'Star (like the Sun)', label: 'Star', color: '#fcd34d', alpha: 0.4, explode: [0, 0, 0],
          info: '<p>A grown-up star, like our Sun. It is made mostly of <b>hydrogen</b> and <b>helium</b>, so hot that they form a special gas called <b>plasma</b>. The surface is about 5500 °C.</p>',
          more: '<p>Stars have different colours depending on their temperature: the coolest are <b>red</b> (3000 °C), ones like the Sun are <b>yellow</b>, and the hottest are <b>blue</b> (over 20,000 °C). The colour tells us the temperature even from enormous distances.</p>',
          shapes: [ { t: 'sphere', r: 1.25, n: 22, m: 36 }, { t: 'sphere', r: 1.32, n: 18, m: 30, color: '#fde68a', alpha: 0.12, anim: { type: 'scale', from: 1, to: 1.04, rate: 0.7 } } ] },
        { id: 'nucleo', name: 'Core (the power plant)', label: 'Core', color: '#fff7cc', alpha: 0.55, explode: [0, 0, 0],
          info: '<p>The centre of the star: here it is about <b>15 million degrees</b> and the pressure is enormous. It is the star\'s "power plant".</p>',
          shapes: [ { t: 'sphere', r: 0.5, n: 16, m: 24 } ] },
        { id: 'fusione', name: 'Nuclear fusion', label: 'Fusion', color: '#ef4444', explode: [0, 0, 0],
          info: '<p>In the core, <b>hydrogen</b> nuclei zoom around and smash into each other: they fuse and become <b>helium</b>. Each time, a tiny bit of matter turns into a lot of energy: light and heat.</p>',
          more: '<p>It takes 4 hydrogen nuclei (protons) to make one helium nucleus, which weighs a little less than the 4 protons: the missing mass becomes energy, following Einstein\'s formula <b>E = mc²</b>. The Sun "burns" 600 million tonnes of hydrogen every second this way.</p>',
          shapes: fusion },
        { id: 'luce', name: 'Light coming out', label: 'Light', color: '#fef08a', explode: [0, 0, 0], chip: true,
          info: '<p>The energy made in the core travels outwards, bouncing between particles, and finally leaves the surface as <b>light</b> and heat.</p>',
          more: '<p>In the Sun, a "packet" of light (a photon) can take <b>100,000 years</b> to get out of the core, because it is absorbed and re-emitted billions of times. Then, from the surface to the Earth, it takes only 8 minutes!</p>',
          shapes: photons },
        { id: 'gravita', name: 'Gravity (pushes inwards)', label: 'Gravity', color: '#60a5fa', explode: [0, 0, 0],
          info: '<p>All the matter of the star is pulled towards the centre by <b>gravity</b>: if it were alone, the star would crush itself.</p>',
          shapes: radial(1.45, 0.55, '#60a5fa', true, 22.5).map((g) => (delete g._d, g)) },
        { id: 'pressione', name: 'Pressure (pushes outwards)', label: 'Pressure', color: '#fb923c', explode: [0, 0, 0],
          info: '<p>The heat of the core makes the gas push <b>outwards</b>, like hot air inflating a balloon. Gravity and pressure balance each other: the star stays in <b>equilibrium</b> for billions of years.</p>',
          shapes: radial(0.62, 0.5, '#fb923c', false, 0).map((g) => (delete g._d, g)) },
        { id: 'percorso', name: 'Life cycle', label: 'Life cycle', color: '#c4b5fd', explode: [0, 0, 0], noLabel: true,
          info: '<p>Stars change during their lives: they are born in a cloud, shine for a long time and in the end they transform. <b>How</b> they end depends on <b>how big they are</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], color: '#c4b5fd', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.gigante, [3.1, 0.4, 0.2], P.supernova, P.neutroni], color: '#fca5a5', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.supernova, [0.9, 0.1, 2.9], P.buco], color: '#fca5a5', alpha: 0.5 } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.06, n: 6, m: 8, pos: P.nebulosa, color: '#ede9fe',
              anim: { type: 'path', pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], wave: 'saw', rate: 0.12, phase: k / 6 } }))) },
        { id: 'nebulosa', name: 'Nebula (where stars are born)', label: 'Nebula', color: '#c084fc', alpha: 0.32, explode: [-0.6, 0.3, -0.3],
          info: '<p>Stars are born in huge <b>clouds of gas and dust</b>, called nebulae. Where the cloud is thickest, gravity makes it clump into denser and denser balls.</p>',
          shapes: [ at(P.nebulosa, [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.15 }, shapes: [
            { t: 'sphere', r: 0.75, n: 12, m: 18, scale: [1.3, 0.8, 1] }, { t: 'sphere', r: 0.55, n: 12, m: 18, pos: [0.6, 0.25, 0.3], color: '#f472b6' },
            { t: 'sphere', r: 0.5, n: 12, m: 18, pos: [-0.55, -0.15, -0.3], color: '#818cf8' }, { t: 'sphere', r: 0.4, n: 10, m: 16, pos: [0.1, 0.45, -0.4], color: '#e879f9' },
            { t: 'sphere', r: 0.07, n: 6, pos: [0.2, 0, 0.2], color: '#ffffff', alpha: 1 }, { t: 'sphere', r: 0.05, n: 6, pos: [-0.4, 0.2, 0.1], color: '#ffffff', alpha: 1 } ] } ]) ] },
        { id: 'protostella', name: 'Protostar', color: '#fb923c', explode: [-0.3, 0.3, -0.6],
          info: '<p>A ball of gas that is squeezing together and heating up. Around it spins a <b>disc</b> of matter (where planets can form!) and two jets of gas shoot out from the poles.</p>',
          more: '<p>When the centre reaches about 10 million degrees, hydrogen fusion switches on: the protostar becomes a real star. This takes a few million years.</p>',
          shapes: [ at(P.proto, [ { t: 'sphere', r: 0.3, n: 12, m: 18 },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.6 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 30, m: 8, scale: [1, 0.25, 1], color: '#fdba74', alpha: 0.45 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.75, 0, 0], color: '#a16207' } ] },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, 0.6, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, -0.6, 0], rot: [180, 0, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ]) ] },
        { id: 'gigante-rossa', name: 'Red giant', label: 'Red giant', color: '#dc2626', alpha: 0.8, explode: [0.3, 0.4, -0.6],
          info: '<p>When the hydrogen in the core runs out, the star <b>swells</b> enormously and its surface cools down: it becomes a red giant. In 5 billion years the same will happen to the Sun.</p>',
          more: '<p>The Sun will grow so big that it will swallow Mercury and Venus. Stars much bigger than the Sun become red <b>supergiants</b>, like Betelgeuse in the constellation of Orion.</p>',
          shapes: [ at(P.gigante, [ { t: 'sphere', r: 0.95, n: 18, m: 28, anim: { type: 'scale', from: 0.94, to: 1.05, rate: 0.5 } }, { t: 'sphere', r: 1.05, n: 14, m: 22, color: '#f87171', alpha: 0.15 } ]) ] },
        { id: 'nana-bianca', name: 'Planetary nebula and white dwarf', label: 'White dwarf', color: '#e0f2fe', explode: [0.6, 0.3, -0.2],
          info: '<p>Stars like the Sun, in the end, blow away their outer layers in a beautiful ring of gas (a <b>planetary nebula</b>). At the centre the core is left: a <b>white dwarf</b>, as small as the Earth but very hot.</p>',
          more: '<p>A teaspoon of white dwarf would weigh <b>several tonnes</b>! With no more fusion, it slowly cools down over billions of years.</p>',
          shapes: [ at(P.planetaria, [ { t: 'sphere', r: 0.12, n: 10, m: 14, color: '#ffffff' },
            { t: 'group', rot: [70, 0, 20], shapes: [ { t: 'torus', R: 0.6, r: 0.2, n: 32, m: 10, color: '#22d3ee', alpha: 0.45, anim: { type: 'scale', from: 0.9, to: 1.1, rate: 0.4 } }, { t: 'torus', R: 0.6, r: 0.08, n: 32, m: 8, color: '#f472b6', alpha: 0.5 } ] } ]) ] },
        { id: 'supernova', name: 'Supernova', color: '#fde047', explode: [0.6, 0.3, 0.4],
          info: '<p><b>Very big</b> stars (at least 8 times the Sun) end with a gigantic explosion: a supernova. For a few weeks it shines brighter than billions of stars put together!</p>',
          more: '<p>In supernovae many heavy elements are made, like <b>gold</b>, and scattered through space. The iron in your blood and the calcium in your bones were made inside ancient stars: we are made of <b>stardust</b>!</p>',
          shapes: [ at(P.supernova, [ { t: 'sphere', r: 0.18, n: 10, m: 14, color: '#ffffff' },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fb923c', alpha: 0.5, anim: [ { type: 'scale', from: 0.3, to: 1.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 } ] },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fde047', alpha: 0.6, anim: [ { type: 'scale', from: 0.2, to: 1.1, wave: 'saw', rate: 0.6, phase: 0.5 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: 0.5 } ] } ]) ] },
        { id: 'stella-neutroni', name: 'Neutron star (pulsar)', label: 'Pulsar', color: '#a5f3fc', explode: [0.3, 0.3, 0.6],
          info: '<p>After a supernova, a <b>neutron star</b> may be left: only 20 km wide, like a city, but heavier than the Sun. Some spin extremely fast and send out two beams of light, like a lighthouse: these are <b>pulsars</b>.</p>',
          shapes: [ at(P.neutroni, [ { t: 'group', rot: [0, 0, 25], shapes: [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [
            { t: 'sphere', r: 0.16, n: 10, m: 14, color: '#e0f2fe' },
            { t: 'group', rot: [0, 0, 20], shapes: [ { t: 'cone', r: 0.16, h: 1.0, n: 14, rot: [180, 0, 0], pos: [0, 0.6, 0], color: '#67e8f9', alpha: 0.4 }, { t: 'cone', r: 0.16, h: 1.0, n: 14, pos: [0, -0.6, 0], color: '#67e8f9', alpha: 0.4 } ] } ] },
            { t: 'torus', R: 0.35, r: 0.012, n: 24, m: 4, color: '#a5f3fc', alpha: 0.5 } ] } ]) ] },
        { id: 'buco-nero', name: 'Black hole', label: 'Black hole', color: '#020617', explode: [-0.3, 0.3, 0.6],
          info: '<p>If the star was <b>gigantic</b>, its core keeps crushing together without stopping and becomes a black hole: gravity is so strong that <b>not even light</b> can escape.</p>',
          more: '<p>The black hole itself is invisible, but the gas swirling around it, before falling in, heats up and glows: this is the <b>accretion disc</b>. In 2019 the first "photo" of a black hole was taken.</p>',
          shapes: [ at(P.buco, [ { t: 'sphere', r: 0.32, n: 14, m: 20 },
            { t: 'group', rot: [12, 0, 0], anim: { type: 'spin', axis: 'y', rate: 0.8 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 36, m: 8, scale: [1, 0.18, 1], color: '#f97316', alpha: 0.85 },
              { t: 'torus', R: 0.5, r: 0.08, n: 36, m: 6, scale: [1, 0.3, 1], color: '#fde68a', alpha: 0.9 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.9, 0, 0], color: '#fed7aa' } ] },
            { t: 'torus', R: 0.38, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], color: '#fbbf24', alpha: 0.8 } ]) ] }
      ]
    },
    steps: [
      { icon: '⭐', title: 'What is a star?', focus: ['involucro', 'nucleo', 'luce', 'fusione'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.7,
        html: '<p>A star is an enormous ball of <b>super-hot gas</b> that makes its own light and heat. The Sun is a star: the others look like tiny dots only because they are <b>very far away</b>.</p><p class="tip">🌟 Planets, on the other hand, do not shine with their own light: they reflect the Sun\'s light, like the Moon.</p>' },
      { icon: '⚛️', title: 'Fusion in the core', focus: ['nucleo', 'fusione'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.4,
        html: '<p>In the core there are millions of degrees. <b>Hydrogen</b> nuclei crash together so hard that they <b>fuse</b> and become <b>helium</b>: each time a flash of energy is released.</p><p class="tip">💡 It is the same energy as in "hydrogen bombs", but in a star it is kept under control by its own gravity.</p>' },
      { icon: '⚖️', title: 'A perfect balance', focus: ['gravita', 'pressione', 'involucro'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.7,
        html: '<p><b>Gravity</b> (blue arrows) would like to crush the star; the <b>pressure</b> of the hot gas (orange arrows) pushes outwards. As long as fusion goes on, the two forces balance and the star stays stable for <b>billions of years</b>.</p>' },
      { icon: '☀️', title: 'The long journey of light', focus: ['luce', 'involucro', 'nucleo'], view: { rx: 0.3, ry: -0.6 }, zoom: 1.7,
        html: '<p>The energy made at the centre slowly works its way out, bouncing in zig-zags, and finally leaves the surface as <b>light</b>. It travels through space at 300,000 km per second.</p>' },
      { icon: '☁️', title: 'Birth: nebulae and protostars', focus: ['nebulosa', 'protostella', 'percorso'], view: { rx: 0.6, ry: -0.6 },
        html: '<p>Stars are born inside <b>nebulae</b>, clouds of gas and dust. Gravity gathers the gas into a hotter and hotter ball: a <b>protostar</b>, with a disc around it from which <b>planets</b> can form.</p>' },
      { icon: '🔴', title: 'Old age: the red giant', focus: ['gigante-rossa', 'nana-bianca', 'percorso'], view: { rx: 0.6, ry: 0.1 },
        html: '<p>When the hydrogen runs out, the star swells up and becomes a <b>red giant</b>. Stars like the Sun then lose their outer layers (a <b>planetary nebula</b>) and a small <b>white dwarf</b> is left.</p>' },
      { icon: '💥', title: 'Giant stars explode', focus: ['supernova', 'stella-neutroni', 'buco-nero', 'percorso'], view: { rx: 0.6, ry: 2.8 },
        html: '<p>Stars much bigger than the Sun end with an explosion: a <b>supernova</b>. What is left is a tiny, super-heavy <b>neutron star</b>, or a <b>black hole</b>.</p><p class="tip">✨ The atoms in your body were created inside ancient stars: you are made of stardust!</p>' }
    ],
    facts: [
      { icon: '🔢', title: 'More stars than grains of sand', html: 'In the universe there are more stars than grains of sand on all the beaches of the Earth. Our galaxy alone, the Milky Way, has <b>hundreds of billions</b> of them.' },
      { icon: '🚀', title: 'The nearest star', html: 'After the Sun, the nearest star is <b>Proxima Centauri</b>: its light takes more than 4 years to reach us.' },
      { icon: '🎨', title: 'Coloured stars', html: 'Look at Orion in winter: <b>Betelgeuse</b> is red (cooler), <b>Rigel</b> is blue (very hot).' },
      { icon: '✨', title: 'Why do they twinkle?', html: 'Stars twinkle because their light passes through the moving air of our atmosphere. In space they do not twinkle.' },
      { icon: '⏳', title: 'Very long lives', html: 'The Sun will live for about <b>10 billion years</b> (it is already 4.6 billion old). The biggest stars use up their fuel quickly and live "only" a few million years.' }
    ],
    quiz: [
      { type: 'mc', q: 'What happens in the core of a star?', options: ['Water boils', 'Hydrogen fuses and becomes helium', 'Wood burns', 'Iron melts'], answer: 1, explain: 'It is nuclear fusion: hydrogen → helium, releasing a huge amount of energy.' },
      { type: 'mc', q: 'Which two forces balance each other in a star?', options: ['Wind and rain', 'Gravity and the pressure of the hot gas', 'Magnetism and electricity', 'Friction and thrust'], answer: 1, explain: 'Gravity pushes inwards, the pressure of the hot gas pushes outwards.' },
      { type: 'tf', q: 'The Sun is a star.', answer: true, explain: 'It is a medium-sized star: it looks different to us only because it is very close.' },
      { type: 'mc', q: 'Where are stars born?', options: ['In black holes', 'In nebulae of gas and dust', 'On planets', 'In comets'], answer: 1, explain: 'Gravity makes the gas of the nebulae clump together until fusion switches on.' },
      { type: 'order', q: 'Put the life of a star like the Sun in order', items: ['Nebula', 'Protostar', 'Adult star', 'Red giant', 'White dwarf'], explain: 'Cloud → ball that heats up → stable star → swells up → hot core left over.' },
      { type: 'mc', q: 'How do stars much bigger than the Sun end?', options: ['They slowly fade out', 'With a supernova explosion', 'They become planets', 'They become comets'], answer: 1, explain: 'They explode as supernovae and leave a neutron star or a black hole.' }
    ]
  });
})();
