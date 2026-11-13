/* Il motore a scoppio a 4 tempi (monocilindrico, sezione trasparente).
   Cinematica: manovella r = 0.35, biella l = 1.1, albero motore a y = -1.2. Un ciclo = 2 giri dell'albero (cycle: 2).
   Frazioni del ciclo: 0–0.25 aspirazione, 0.25–0.5 compressione, 0.5–0.75 scoppio, 0.75–1 scarico. */
(function () {
  const R = 0.35, L = 1.1, K = { r: R, l: L };
  const web = (z) => ({ t: 'extrude', d: 0.08, pos: [0, 0, z], color: '#6b7280',
    pts: [[0.15, 0.47], [-0.15, 0.47]].concat(Array.from({ length: 13 }, (_, i) => { const a = Math.PI + (i / 12) * Math.PI; return [0.4 * Math.cos(a), 0.4 * Math.sin(a) - 0.02]; })) });
  const cam = (x, ang) => ({ t: 'group', pos: [x, 1.32, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 0.5 }, shapes: [
    { t: 'cyl', r: 0.045, h: 0.9, n: 14, rot: [90, 0, 0], color: '#9ca3af' },
    { t: 'cyl', r: 0.09, h: 0.1, n: 20, rot: [90, 0, 0] },
    { t: 'cyl', r: 0.075, h: 0.1, n: 20, rot: [90, 0, 0], pos: [0.1 * Math.cos(ang * Math.PI / 180), 0.1 * Math.sin(ang * Math.PI / 180), 0] }
  ] });
  const spring = Array.from({ length: 40 }, (_, i) => { const a = i * 0.75; return [0.075 * Math.cos(a), 0.2 + i * 0.0085, 0.075 * Math.sin(a)]; });
  const valve = (headColor) => [
    { t: 'cyl', r: 0.15, r2: 0.05, h: 0.06, n: 24, pos: [0, 0.03, 0], color: headColor },
    { t: 'cyl', r: 0.025, h: 0.56, n: 10, pos: [0, 0.31, 0] },
    { t: 'pipe', r: 0.012, n: 6, pts: spring, color: '#facc15', caps: false },
    { t: 'cyl', r: 0.08, h: 0.025, n: 16, pos: [0, 0.55, 0], color: '#64748b' }
  ];
  const chamber = (from, to, ramp) => [K && Object.assign({ type: 'chamber', h0: 0.125 }, K), { type: 'blink', fade: true, wave: 'window', from, to, cycle: 2, ramp }];

  LIBRARY({
    lang: 'en',
    id: 'motore-scoppio',
    title: 'The combustion engine',
    intro: 'The engine of cars and scooters burns a drop of petrol mixed with air: the <b>explosion</b> pushes a piston, and the piston turns the wheels. Watch the <b>4 strokes</b> one at a time!',
    model: {
      rx: 0.25, ry: -0.55, speed: 0.32, cycle: 2, height: 480,
      phases: [
        { from: 0, to: 0.25, label: '1 · Intake', color: '#2563eb' },
        { from: 0.25, to: 0.5, label: '2 · Compression', color: '#16a34a' },
        { from: 0.5, to: 0.75, label: '3 · Combustion', color: '#ea580c' },
        { from: 0.75, to: 1, label: '4 · Exhaust', color: '#6b7280' }
      ],
      parts: [
        { id: 'cilindro', name: 'Cylinder', color: '#94a3b8', alpha: 0.26, pos: [0, 0.025, 0], explode: [0, 0, 0],
          info: '<p>This is the strong "tube" inside which the piston moves up and down. The explosion happens in here, which is why it is made of thick metal that resists heat.</p>',
          more: '<p>The volume that the piston "sweeps" is called the <b>displacement</b>. A scooter has 50 cm³, a car often 1000–2000 cm³ split among 3 or 4 cylinders.</p>',
          shapes: [ { t: 'tube', r: 0.56, ri: 0.45, h: 1.25, n: 36 } ].concat([0.35, 0.15, -0.05].map((y) => ({ t: 'tube', r: 0.68, ri: 0.56, h: 0.04, n: 36, pos: [0, y, 0] }))) },
        { id: 'testata', name: 'Cylinder head', color: '#64748b', alpha: 0.24, pos: [0, 0.65, 0], explode: [0, 0.8, 0],
          info: '<p>This is the "lid" of the cylinder. It contains the <b>valves</b>, the <b>spark plug</b> and the passages through which the mixture comes in and the gases go out.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.45, 1.0], pos: [0, 0.22, 0] }, { t: 'box', s: [1.3, 0.3, 0.8], pos: [0, 0.65, 0], color: '#475569' } ] },
        { id: 'pistone', name: 'Piston', color: '#d1d5db', pos: [0, 0.3, 0], explode: [0, 0, 1.4], anim: Object.assign({ type: 'piston' }, K),
          info: '<p>This is a metal "plug" that slides up and down in the cylinder. The explosion pushes it down with enormous force.</p>',
          more: '<p>The <b>rings</b> (piston rings) around the piston seal the cylinder tightly, so the gases cannot escape downwards. The piston of a car can go up and down more than 100 times a second!</p>',
          shapes: [
            { t: 'cyl', r: 0.43, h: 0.45, n: 36 },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.16, 0], color: '#475569' },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.09, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.6, n: 14, pos: [0, -0.05, 0], rot: [90, 0, 0], color: '#9ca3af' }
          ] },
        { id: 'biella', name: 'Connecting rod', color: '#64748b', pos: [0, 0.25, 0], explode: [0, 0, 1.05], anim: Object.assign({ type: 'rod' }, K),
          info: '<p>This is the "arm" that connects the piston to the crankshaft. It turns the up-and-down movement of the piston into a movement that makes the shaft spin, like your leg pushing a bicycle pedal.</p>',
          shapes: [
            { t: 'tube', r: 0.11, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0] },
            { t: 'box', s: [0.11, 0.86, 0.09], pos: [0, -0.55, 0] },
            { t: 'tube', r: 0.17, ri: 0.09, h: 0.12, n: 24, pos: [0, -1.1, 0], rot: [90, 0, 0] }
          ] },
        { id: 'albero-motore', name: 'Crankshaft', color: '#6b7280', pos: [0, -1.2, 0], explode: [0, -0.5, 0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>This is the cranked shaft that <b>spins</b>. From here the movement goes to the gearbox and then to the wheels. It has counterweights so it can turn without shaking.</p>',
          more: '<p>A complete cycle (4 strokes) takes <b>2 turns</b> of the crankshaft. At 3000 revolutions per minute the piston makes 1500 explosions a minute, that is 25 every second!</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.45], color: '#9ca3af' },
            web(0.11), web(-0.11), { t: 'cyl', r: 0.085, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0, R, 0], color: '#9ca3af' } ] },
        { id: 'volano', name: 'Flywheel', color: '#475569', pos: [0, -1.2, -0.82], explode: [0, 0, -0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>This is a heavy wheel attached to the crankshaft. Once it is spinning it keeps going and helps the engine get through the strokes when nothing is pushing.</p>',
          shapes: [ { t: 'cyl', r: 0.78, h: 0.12, n: 40, rot: [90, 0, 0] }, { t: 'box', s: [0.12, 0.5, 0.02], pos: [0, 0.45, 0.07], color: '#facc15', decal: 1 } ] },
        { id: 'valvola-aspirazione', name: 'Intake valve', label: 'Intake valve', color: '#94a3b8', pos: [-0.2, 0.66, 0], explode: [-0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0, to: 0.25, cycle: 2, ramp: 0.3 },
          info: '<p>This is a "door" that opens <b>only in the first stroke</b> to let air and petrol into the cylinder. Then it closes again and stays shut.</p>', shapes: valve('#3b82f6') },
        { id: 'valvola-scarico', name: 'Exhaust valve', label: 'Exhaust valve', color: '#94a3b8', pos: [0.2, 0.66, 0], explode: [0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0.75, to: 1, cycle: 2, ramp: 0.3 },
          info: '<p>This is the "exit door": it opens <b>only in the fourth stroke</b> to let the burnt gases out towards the exhaust pipe.</p>', shapes: valve('#ef4444') },
        { id: 'alberi-camme', name: 'Camshafts', color: '#6b7280', explode: [0, 1.45, 0],
          info: '<p>These are shafts with "bumps" (cams). As they turn, each bump pushes its valve down at the right moment, like a finger pressing a key.</p>',
          more: '<p>The camshafts turn at <b>half the speed</b> of the crankshaft (they are linked by a belt or chain): each valve opens once every 2 turns.</p>',
          shapes: [ cam(-0.2, -45), cam(0.2, 225) ] },
        { id: 'candela', name: 'Spark plug', color: '#f8fafc', pos: [0, 0.65, 0.27], explode: [0, 1.0, 0.5],
          info: '<p>It makes a small <b>electric spark</b> just when the mixture is squeezed the most: it is the match that lights the explosion.</p>',
          more: '<p>The spark comes from a very high voltage (over 20 000 volts) that "jumps" between two electrodes less than a millimetre apart. Diesel engines have no spark plug: the diesel fuel lights by itself because the compressed air becomes very hot.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.2, n: 12, pos: [0, 0.1, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.1, n: 6, pos: [0, 0.25, 0], color: '#64748b' },
            { t: 'cyl', r: 0.065, h: 0.35, n: 16, pos: [0, 0.47, 0] }, { t: 'cyl', r: 0.03, h: 0.1, n: 10, pos: [0, 0.69, 0], color: '#9ca3af' },
            { t: 'sphere', r: 0.09, n: 8, pos: [0, -0.02, 0], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.49, to: 0.535, cycle: 2, ramp: 0.15 } } ] },
        { id: 'aspirazione', name: 'Intake manifold', label: 'Intake', color: '#60a5fa', alpha: 0.6, explode: [-0.7, 0.4, 0],
          info: '<p>This is the passage that brings in the air (cleaned by the filter) mixed with tiny droplets of petrol sprayed by the <b>injector</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[-1.55, 1.15, 0], [-0.9, 1.15, 0], [-0.45, 0.98, 0], [-0.22, 0.8, 0]] }, { t: 'box', s: [0.35, 0.5, 0.5], pos: [-1.65, 1.15, 0], color: '#cbd5e1', alpha: 1 } ] },
        { id: 'scarico', name: 'Exhaust manifold', label: 'Exhaust', color: '#f97316', alpha: 0.6, explode: [0.7, 0.4, 0],
          info: '<p>It carries away the burnt gases, which are very hot. Then the <b>silencer</b> partly cleans them and reduces the noise.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[0.22, 0.8, 0], [0.45, 0.98, 0], [0.9, 1.1, 0], [1.4, 0.9, 0]] }, { t: 'cyl', r: 0.2, h: 0.5, n: 24, rot: [0, 0, 90], pos: [1.6, 0.85, 0], color: '#78716c', alpha: 1 } ] },
        { id: 'coppa', name: 'Oil sump', label: 'Oil sump', color: '#78716c', alpha: 0.22, pos: [0, -1.75, 0], explode: [0, -0.6, 0],
          info: '<p>Under the engine there is the <b>oil</b>: it is sprayed onto all the parts that rub together, so they do not wear out or get too hot.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.4, 1.0] }, { t: 'box', s: [1.44, 0.14, 0.94], pos: [0, -0.12, 0], color: '#ca8a04', alpha: 0.75 } ] },
        { id: 'miscela', name: 'Air-petrol mixture', label: 'Mixture', color: '#4ade80', alpha: 0.55, pos: [0, 0.65, 0], chip: true, noLabel: false,
          info: '<p>Air and petrol mixed in very fine droplets. To burn well you need about <b>15 grams of air for every gram of petrol</b>.</p>',
          shapes: [ { t: 'group', anim: chamber(0.0, 0.5, 0.05), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'scoppio', name: 'Combustion', label: 'Combustion', color: '#f97316', alpha: 0.8, pos: [0, 0.65, 0],
          info: '<p>The spark lights the mixture, which burns in an instant: the gases become very hot (over 2000 °C) and <b>push</b> the piston down very hard.</p>',
          more: '<p>It is not really an explosion but a <b>very fast burn</b>: the flame crosses the cylinder in a few thousandths of a second. It is the only stroke that does work: the other three "live" thanks to the flywheel.</p>',
          shapes: [ { t: 'group', anim: chamber(0.5, 0.64, 0.18).concat([{ type: 'blink', color: '#fde047', wave: 'sin01', rate: 6 }]), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'gas-scarico', name: 'Exhaust gases', label: 'Exhaust gases', color: '#6b7280', alpha: 0.5, pos: [0, 0.65, 0],
          info: '<p>These are the gases left over after burning: mostly water vapour and <b>carbon dioxide</b> (CO₂), plus some substances that pollute the air.</p>',
          shapes: [ { t: 'group', anim: chamber(0.62, 1.0, 0.12), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] }
      ]
    },
    steps: [
      { icon: '🔥', title: 'From heat to movement', play: true, explode: 0,
        html: '<p>The combustion engine is an <b>internal combustion engine</b>: the petrol burns <i>inside</i> the cylinder. The hot gases expand and push the piston.</p><p>The piston goes up and down, and the <b>connecting rod</b> and the <b>crankshaft</b> turn this movement into a <b>rotation</b>. Each cycle has 4 strokes: let\'s look at them one by one!</p>' },
      { icon: '1️⃣', title: 'Intake: filling up with air', loop: [0, 0.25], focus: ['pistone', 'valvola-aspirazione', 'miscela', 'aspirazione', 'cilindro'],
        html: '<p>The piston goes <b>down</b>. The intake valve (blue) is <b>open</b>: the cylinder fills with a mixture of air and petrol, like when you pull the plunger of a syringe.</p>' },
      { icon: '2️⃣', title: 'Compression: squeezing', loop: [0.25, 0.5], focus: ['pistone', 'miscela', 'valvola-aspirazione', 'valvola-scarico', 'cilindro'],
        html: '<p>Both valves are <b>closed</b>. The piston goes <b>up</b> and squeezes the mixture into a space about <b>10 times smaller</b>. The more it is compressed, the stronger the explosion will be.</p>' },
      { icon: '3️⃣', title: 'Combustion: the push!', loop: [0.5, 0.75], focus: ['candela', 'scoppio', 'pistone', 'biella', 'cilindro'],
        html: '<p>The <b>spark plug</b> makes a spark: the mixture burns all at once, and the very hot gases expand and <b>push the piston down</b>. It is the only stroke that gives power to the engine!</p><p class="tip">⚡ It is also called the <b>expansion</b> or "power stroke".</p>' },
      { icon: '4️⃣', title: 'Exhaust: gases out', loop: [0.75, 1], focus: ['pistone', 'valvola-scarico', 'gas-scarico', 'scarico', 'cilindro'],
        html: '<p>The exhaust valve (red) opens. The piston <b>goes back up</b> and pushes the burnt gases out, towards the exhaust pipe. The cylinder is ready to start again.</p>' },
      { icon: '🔄', title: 'From the piston to the wheels', focus: ['pistone', 'biella', 'albero-motore', 'volano'], explode: 0.35, view: { rx: 0.15, ry: -0.25 },
        html: '<p>The <b>connecting rod</b> links the piston to a "elbow" of the <b>crankshaft</b>: so the up-and-down becomes a turn, just like your legs on the pedals of a bike.</p><p>The heavy <b>flywheel</b> keeps spinning by inertia and carries the engine through the other three strokes.</p>' },
      { icon: '⏱️', title: 'The right moment', focus: ['alberi-camme', 'valvola-aspirazione', 'valvola-scarico', 'candela'], explode: 0.2, view: { rx: 0.35, ry: -0.6 },
        html: '<p>The <b>camshafts</b> open the valves at the right moment and the spark plug fires just at the end of compression. Everything is synchronised with the crankshaft.</p><p class="tip">🧮 4 strokes = 2 turns of the crankshaft = 1 explosion.</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Italian inventors', html: 'In 1853 the Tuscans <b>Eugenio Barsanti and Felice Matteucci</b> patented one of the first combustion engines. The 4-stroke cycle was made famous by Nikolaus Otto in 1876.' },
      { icon: '🌡️', title: 'So much wasted heat', html: 'A petrol engine turns only about <b>a third</b> of the petrol\'s energy into movement: the rest is lost as heat. That is why a radiator is needed!' },
      { icon: '🚗', title: 'More cylinders', html: 'Cars usually have 3 or 4 cylinders that fire in turn: this way the push is continuous and the engine runs smoothly.' },
      { icon: '🔋', title: 'And electric cars?', html: 'An electric motor burns nothing: it uses magnets and current. It has very few moving parts and does not pollute where it travels.' }
    ],
    quiz: [
      { type: 'order', q: 'Put the 4 strokes of the engine in order', items: ['Intake', 'Compression', 'Combustion', 'Exhaust'], explain: 'The mixture comes in, is squeezed, burns and pushes, then the gases go out.' },
      { type: 'mc', q: 'Which part makes the spark?', options: ['The valve', 'The spark plug', 'The flywheel', 'The connecting rod'], answer: 1, explain: 'The spark plug produces an electric spark that lights the mixture.' },
      { type: 'mc', q: 'In which stroke does the piston get the push that drives the engine?', options: ['Intake', 'Compression', 'Combustion', 'Exhaust'], answer: 2, explain: 'Only in combustion (expansion) do the hot gases push the piston: it is the power stroke.' },
      { type: 'tf', q: 'During compression both valves are closed.', answer: true, explain: 'If a valve were open, the mixture would escape instead of being squeezed.' },
      { type: 'mc', q: 'What turns the up-and-down of the piston into rotation?', options: ['Connecting rod and crankshaft', 'Spark plug and valves', 'Oil sump', 'Exhaust manifold'], answer: 0, explain: 'The connecting rod pushes the crankshaft\'s elbow and makes it turn, like a leg with a pedal.' },
      { type: 'num', q: 'How many turns does the crankshaft make in a complete 4-stroke cycle?', answer: 2, explain: 'Each stroke is half a turn: 4 × ½ = 2 turns.' }
    ]
  });
})();
