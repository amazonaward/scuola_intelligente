/* The dam and the hydroelectric power station. The river flows toward +x; the reservoir (basin) is upstream (x < 0), the dam at x ≈ 0,
   the power station downstream (x ≈ 3). Up = +y; the valley is wide along z. Cycle (1): 0.55–0.9 the spillway gates open. */
(function () {
  const D = Math.PI / 180;
  /* sections along x: pts (u, y) with u = -z; extrusion along x between x0 and x1 */
  const alongX = (pts, x0, x1, color, extra) => Object.assign({ t: 'extrude', d: x1 - x0, pts, rot: [0, 90, 0], pos: [(x0 + x1) / 2, 0, 0], color }, extra || {});
  const HILL = (s) => [[2.0, -0.25], [4.4, -0.25], [4.4, 1.6], [4.0, 2.8], [3.5, 3.35], [2.9, 3.45], [2.3, 1.5], [2.0, 0.3]].map(([u, y]) => [u * s, y]);
  const LAKE = [[-2.0, -0.1], [2.0, -0.1], [2.3, 1.5], [2.6, 2.72], [-2.6, 2.72], [-2.3, 1.5]];
  const DAM = [[-0.38, -0.2], [1.95, -0.2], [0.28, 3.0], [-0.38, 3.0]];
  const ZP = 0.95; // z axis of the penstock and the power station
  const PEN = [[-0.6, 1.45, ZP], [0.3, 1.45, ZP], [1.05, 1.5, ZP], [1.75, 0.82, ZP], [2.25, 0.42, ZP], [2.55, 0.32, ZP]];
  const WATER = [[-1.6, 1.6, ZP], [-0.6, 1.45, ZP], ...PEN.slice(1), [2.7, 0.3, ZP + 0.25], [2.85, 0.3, ZP], [2.75, -0.05, ZP], [3.4, -0.05, ZP * 0.6], [4.2, 0.05, 0.2], [5.2, 0.05, 0]];
  const ELEC = [[2.75, 1.05, ZP], [3.3, 1.2, ZP], [3.75, 0.75, 1.65], [4.4, 2.4, 1.65], [4.6, 2.75, 1.65], [6.0, 2.85, 1.65]];
  const drops = (P, n, rate, color, r, extra) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: r || 0.06, n: 5, m: 8, pos: P[0], color, anim: [{ type: 'path', pts: P, wave: 'saw', rate, phase: k / n }].concat(extra || []) }));
  const SPILL = [[0.0, 3.05, -0.6], [0.35, 2.9, -0.6], [0.9, 2.0, -0.6], [1.5, 0.9, -0.6], [1.95, 0.15, -0.6], [2.6, 0.05, -0.4], [3.6, 0.05, -0.2]];
  const GATE = { type: 'move', dir: [0, 1, 0], amp: 0.28, wave: 'window', from: 0.55, to: 0.9, ramp: 0.2 };
  const leg = (x, z) => ({ t: 'pipe', r: 0.025, n: 4, pts: [[x, 0.0, z], [4.6 + (x - 4.6) * 0.25, 2.6, 1.65 + (z - 1.65) * 0.25]] });

  LIBRARY({
    lang: 'en',
    id: 'diga',
    title: 'The dam',
    intro: 'A dam stops a river and forms a large <b>lake</b>. The water falling with force from the lake turns a <b>turbine</b> and a <b>generator</b>: this is how electricity is produced without smoke. It is <b>hydroelectric</b> energy!',
    model: {
      rx: 0.45, ry: -1.15, speed: 0.25, height: 480, bg: 'sky', floor: false,
      phases: [ { from: 0, to: 0.55, label: 'Power production', color: '#16a34a' }, { from: 0.55, to: 0.9, label: 'The spillway releases the extra water', color: '#0284c7' } ],
      parts: [
        { id: 'versanti', name: 'Mountains and valley', label: 'Valley', color: '#65a30d', explode: [0, -0.5, 0],
          info: '<p>Dams are built in <b>narrow valleys</b> between mountains: a relatively short wall is enough to close the valley and hold back an enormous amount of water.</p>',
          shapes: [ alongX(HILL(-1), -4.2, 5.2), alongX(HILL(1), -4.2, 5.2), alongX([[-2.1, -0.4], [2.1, -0.4], [2.1, -0.15], [-2.1, -0.15]], -4.2, 5.2, '#a16207'),
            ...[[-3.0, 3.5, -3.2], [1.0, 3.5, 3.1], [4.0, 3.6, -3.1], [-1.5, 3.5, 3.3], [2.6, 3.4, -3.3], [-3.6, 3.5, 3.0]].map(([x, y, z]) => ({ t: 'cone', r: 0.25, h: 0.7, n: 10, pos: [x, y, z], color: '#166534' })) ] },
        { id: 'lago', name: 'Artificial lake (reservoir)', label: 'Lake', color: '#0ea5e9', explode: [-0.8, 0, 0],
          info: '<p>Behind the dam the river water builds up and forms a <b>lake</b>. It is a large "reserve" of energy: the water up high can fall and drive the turbines when needed.</p>',
          more: '<p>Water up high has <b>potential energy</b>: the higher it is, and the more of it there is, the more energy it can give when falling. Artificial lakes also serve as a water reserve for irrigation and drinking, and to protect against floods.</p>',
          shapes: [ alongX(LAKE, -4.2, -0.38) ] },
        { id: 'diga', name: 'Dam (wall)', label: 'Dam', color: '#d6d3d1', explode: [0, 0.6, 0],
          info: '<p>It is an enormous wall of <b>concrete</b>. It is much thicker at the base than at the top, because the water pushes harder at depth.</p>',
          more: '<p>The <b>pressure</b> of water increases by about 1 atmosphere every 10 metres of depth. This is a <b>gravity</b> dam: it resists the push thanks to its enormous weight. Other dams are <b>arch</b> dams, curved towards the lake, like a bridge leaning against the mountains.</p>',
          shapes: [ { t: 'extrude', d: 6.0, pts: DAM }, { t: 'box', s: [0.75, 0.12, 6.0], pos: [-0.05, 3.06, 0], color: '#a8a29e' },
            ...Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.05, 0.12, 0.05], pos: [0.27, 3.18, -2.5 + k * 0.5], color: '#78716c' })) ] },
        { id: 'presa', name: 'Intake (grille)', label: 'Intake', color: '#475569', pos: [-0.48, 1.45, ZP], explode: [-0.7, 0.3, 0],
          info: '<p>The water inlet, underwater on the lake side. A <b>grille</b> stops branches, leaves and fish that could damage the turbine.</p>',
          shapes: [ { t: 'box', s: [0.18, 0.7, 0.7] }, ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.04, 0.7, 0.025], pos: [-0.1, 0, z], color: '#1f2937' })),
            ...[-0.2, 0, 0.2].map((y) => ({ t: 'box', s: [0.04, 0.025, 0.7], pos: [-0.1, y, 0], color: '#1f2937' })) ] },
        { id: 'condotta', name: 'Penstock', label: 'Penstock', color: '#64748b', explode: [0, 0.3, 0.7],
          info: '<p>A large steel pipe that carries the water from the lake down to the power station. As it falls, the water gains speed and reaches the turbine with <b>enormous force</b>.</p>',
          more: '<p>In the penstock the potential energy of the water becomes <b>kinetic energy</b> (of motion) and pressure. In some mountain power stations the water falls from more than 1,000 metres and reaches over 100 atmospheres!</p>',
          shapes: [ { t: 'pipe', r: 0.16, n: 16, curve: true, pts: PEN }, ...[1.3, 1.6, 2.0].map((x) => ({ t: 'box', s: [0.12, 0.3, 0.4], pos: [x, x < 1.5 ? 1.0 : 0.45, ZP], color: '#a8a29e' })) ] },
        { id: 'centrale', name: 'Power station', label: 'Power station', color: '#e7e5e4', alpha: 0.3, explode: [0.5, 0.9, 0],
          info: '<p>The building at the foot of the dam where the machines are: turbines, generators and control panels. Many power stations are even dug inside the mountain.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.45, 1.25], pos: [2.95, 0.55, ZP] }, { t: 'box', s: [1.4, 0.06, 1.35], pos: [2.95, 1.3, ZP], color: '#57534e', alpha: 0.9 } ] },
        { id: 'turbina', name: 'Turbine', color: '#2563eb', pos: [2.75, 0.3, ZP], explode: [0.3, 0, 1.2],
          info: '<p>A large wheel with curved blades. The water arriving from the penstock hits it and makes it <b>spin</b> very fast, just as the wind turns a pinwheel.</p>',
          more: '<p>This is a <b>Francis</b> turbine: the water enters through a "snail" casing that surrounds it (the spiral case) and flows down to the centre. For very high falls, <b>Pelton</b> turbines with spoon-shaped buckets are used; for low falls, <b>Kaplan</b> turbines, similar to a propeller.</p>',
          shapes: [ { t: 'torus', R: 0.34, r: 0.11, n: 24, m: 8, color: '#64748b' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.22, h: 0.06, n: 20, pos: [0, 0.06, 0] },
              ...Array.from({ length: 9 }, (_, k) => ({ t: 'box', s: [0.18, 0.12, 0.02], pos: [0.13 * Math.cos(k * 40 * D), 0, 0.13 * Math.sin(k * 40 * D)], rot: [0, -k * 40 - 35, 15], color: '#93c5fd' })) ] },
            { t: 'cyl', r: 0.14, r2: 0.1, h: 0.35, n: 16, pos: [0, -0.2, 0], color: '#475569' } ] },
        { id: 'generatore', name: 'Generator (alternator)', label: 'Generator', color: '#b45309', pos: [2.75, 0.95, ZP], explode: [0.3, 0.6, 1.2],
          info: '<p>It is attached to the turbine by a shaft. Inside, large <b>magnets</b> spin close to <b>copper coils</b>: the movement creates electric current.</p>',
          more: '<p>This is <b>electromagnetic induction</b>, discovered by Faraday in 1831: a magnet moving near a wire makes current flow. It is an electric motor working "in reverse": it receives movement and gives electricity.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 10, pos: [0, -0.35, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 3 } }, { t: 'tube', r: 0.36, ri: 0.28, h: 0.36, n: 26, color: '#b45309' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.26, h: 0.34, n: 20, color: '#dc2626' }, ...[0, 90, 180, 270].map((a) => ({ t: 'box', s: [0.1, 0.35, 0.08], pos: [0.24 * Math.cos(a * D), 0, 0.24 * Math.sin(a * D)], rot: [0, -a, 0], color: a % 180 ? '#2563eb' : '#ef4444' })) ] },
            { t: 'cyl', r: 0.37, h: 0.04, n: 26, pos: [0, 0.2, 0], color: '#78350f' } ] },
        { id: 'trasformatore', name: 'Transformer', color: '#57534e', pos: [3.75, 0.25, 1.65], explode: [0.6, 0.3, 0.6],
          info: '<p>It raises the voltage of the current (up to hundreds of thousands of volts) so that it can travel far along the wires, losing very little.</p>',
          shapes: [ { t: 'box', s: [0.45, 0.45, 0.4] }, ...[-0.15, 0, 0.15].map((z) => ({ t: 'cyl', r: 0.035, h: 0.25, n: 8, pos: [0, 0.35, z], color: '#d6d3d1' })),
            ...[-0.15, -0.05, 0.05, 0.15].map((x) => ({ t: 'box', s: [0.03, 0.38, 0.45], pos: [x, 0, 0], color: '#44403c' })) ] },
        { id: 'traliccio', name: 'Pylon and power line', label: 'Power line', color: '#94a3b8', explode: [0.9, 0.3, 0.6],
          info: '<p>The <b>pylons</b> made of steel hold up the high-voltage cables high in the air, which carry electricity to towns, even hundreds of kilometres away.</p>',
          shapes: [ leg(4.35, 1.4), leg(4.85, 1.4), leg(4.35, 1.9), leg(4.85, 1.9), { t: 'box', s: [0.06, 0.06, 1.2], pos: [4.6, 2.6, 1.65] }, { t: 'box', s: [0.05, 0.05, 0.8], pos: [4.6, 2.2, 1.65] },
            { t: 'cyl', r: 0.03, h: 0.4, n: 6, pos: [4.6, 2.85, 1.65] },
            ...[1.1, 1.65, 2.2].map((z) => ({ t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[3.8, 0.5, z * 0.3 + 1.15], [4.6, 2.55, z], [5.4, 2.4, z], [6.2, 2.5, z]], color: '#1f2937' })) ] },
        { id: 'sfioratore', name: 'Spillway and gates', label: 'Spillway', color: '#f59e0b', explode: [0, 1.0, -0.4],
          info: '<p>When it rains heavily and the lake is too full, the <b>gates</b> (large steel doors) open and the extra water slides down the <b>spillway</b>, without overtopping the dam.</p>',
          shapes: [-0.9, -0.6, -0.3].map((z) => ({ t: 'box', s: [0.08, 0.32, 0.28], pos: [-0.25, 3.1, z - 0.15], anim: GATE }))
            .concat([{ t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, -1.23], color: '#a8a29e' }, { t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, 0.03], color: '#a8a29e' }]) },
        { id: 'fiume', name: 'River downstream', label: 'River', color: '#38bdf8', explode: [0.6, -0.3, 0],
          info: '<p>After the turbine the water returns to the river: it is the same water, it has not been used up or polluted. However, the dam changes the river: for this reason a little water (the <b>minimum flow</b>) must always be left for fish and plants.</p>',
          shapes: [ alongX([[-1.2, -0.14], [1.2, -0.14], [1.2, 0.0], [-1.2, 0.0]], 1.95, 5.2) ] },
        { id: 'acqua', name: 'Flowing water', label: 'Water', color: '#1d4ed8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Follow the water: it enters at the intake, falls down the penstock, turns the turbine and returns to the river.</p>',
          shapes: drops(WATER, 18, 0.35, '#1d4ed8').concat(drops(SPILL, 8, 1.2, '#7dd3fc', 0.07, [{ type: 'blink', fade: true, wave: 'window', from: 0.6, to: 0.9, ramp: 0.1 }])) },
        { id: 'corrente', name: 'Electric current', label: 'Current', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>The current produced by the generator passes through the transformer and sets off along the high-voltage cables towards our homes.</p>',
          shapes: drops(ELEC, 10, 0.5, '#facc15', 0.05) }
      ]
    },
    steps: [
      { icon: '💧', title: 'Energy from water', explode: 0,
        html: '<p>Water falling from above has a lot of <b>energy</b>: think of the force of a waterfall! A hydroelectric power station uses it to produce electricity.</p><p>It is a <b>renewable</b> source: rain and snow refill the lake, and nothing is burned.</p>' },
      { icon: '🧱', title: 'The dam holds back the lake', focus: ['diga', 'lago', 'versanti'], explode: 0, view: { rx: 0.4, ry: 0.85 },
        html: '<p>The <b>dam</b> closes the valley and the river water forms a <b>lake</b>. The wall is much thicker at the bottom: the deeper you go, the <b>harder the water pushes</b>.</p><p class="tip">🍾 Make three holes at different heights in a full bottle: the water from the lowest hole squirts out the farthest!</p>' },
      { icon: '⬇️', title: 'Down the penstock', focus: ['presa', 'condotta', 'acqua'], explode: 0, view: { rx: 0.35, ry: -0.8 },
        html: '<p>The water enters through the <b>intake</b>, protected by a grille, and falls into the <b>penstock</b>, a large steel pipe. As it falls it gains speed: the energy of height becomes energy of <b>motion</b>.</p>' },
      { icon: '🌀', title: 'The turbine spins', focus: ['turbina', 'acqua', 'condotta', 'centrale'], explode: 0.3, zoom: 1.4, view: { rx: 0.35, ry: -0.6 },
        html: '<p>In the power station the water strikes the curved blades of the <b>turbine</b> and makes it spin very fast, like the wind with a pinwheel. Then the water, now slower, flows out and returns to the river.</p>' },
      { icon: '🧲', title: 'The generator makes current', focus: ['generatore', 'turbina', 'corrente'], explode: 0.3, zoom: 1.4, view: { rx: 0.3, ry: -0.6 },
        html: '<p>The turbine spins the <b>generator</b>: large magnets rotate near copper coils, and <b>electric current</b> is born in the coil. It is an electric motor working in reverse!</p>' },
      { icon: '🗼', title: 'Towards the cities', focus: ['trasformatore', 'traliccio', 'corrente'], explode: 0, view: { rx: 0.3, ry: -0.3 },
        html: '<p>The <b>transformer</b> raises the voltage of the current, and the cables held up by the <b>pylons</b> carry it far away, to towns and to our homes.</p>' },
      { icon: '🌧️', title: 'When the lake is too full', focus: ['sfioratore', 'diga', 'fiume', 'acqua'], loop: [0.5, 0.95], explode: 0, view: { rx: 0.35, ry: -1.0 },
        html: '<p>After heavy rain the <b>gates</b> open: the extra water slides down the <b>spillway</b> without endangering the dam.</p><p class="tip">🐟 Dams provide clean energy, but they change the life of the river: for this reason they must always let some water flow, and sometimes they have "ladders" to help fish get past.</p>' }
    ],
    facts: [
      { icon: '🇨🇳', title: 'The most powerful dam', html: 'The <b>Three Gorges</b> Dam in China is the most powerful power station in the world: it produces as much as about 20 large nuclear power stations.' },
      { icon: '🏔️', title: 'Italy and its dams', html: 'Italy has more than <b>500 large dams</b>, mostly in the Alps. Hydroelectric power was once called "white coal" and fuelled the first factories of the North.' },
      { icon: '🔋', title: 'A water battery', html: 'Some power stations have two lakes, one up high and one down low: when there is surplus energy, they <b>pump</b> the water up; when it is needed, they let it fall back. They work like a giant battery.' },
      { icon: '⚙️', title: 'The mill wheel', html: 'More than 2,000 years ago, <b>water wheels</b> were already used to grind grain: today\'s turbines are their high-tech descendants.' }
    ],
    quiz: [
      { type: 'mc', q: 'Why is a dam thicker at the base than at the top?', options: ['For beauty', 'Because the water pushes harder at depth', 'So that cars can drive across it', 'Because concrete is cheap'], answer: 1, explain: 'The pressure of the water increases with depth: at the bottom the push is greatest.' },
      { type: 'order', q: 'Put in order the journey of the energy', items: ['Water in the lake', 'Penstock', 'Turbine', 'Generator', 'Transformer and power lines'], explain: 'The water falls, turns the turbine, the generator produces current and the lines carry it far away.' },
      { type: 'mc', q: 'What produces electric current in the generator?', options: ['Fire', 'Magnets spinning near copper coils', 'Water touching the wires', 'The sun'], answer: 1, explain: 'It is electromagnetic induction: a moving magnet makes current flow in a coil.' },
      { type: 'tf', q: 'Hydroelectric energy is a renewable source.', answer: true, explain: 'Rain and snow refill the lake: the water is not used up.' },
      { type: 'mc', q: 'What is the spillway for?', options: ['To let fish into the lake', 'To release the extra water when the lake is too full', 'To produce more current', 'To clean the turbine'], answer: 1, explain: 'The gates open and the excess water falls without overtopping the dam.' },
      { type: 'mc', q: 'What kind of energy does the still water high up in the lake have?', options: ['Potential energy', 'Chemical energy', 'Nuclear energy', 'Light energy'], answer: 0, explain: 'Water up high has potential energy, which becomes energy of motion as it falls.' }
    ]
  });
})();
