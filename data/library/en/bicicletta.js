/* The bicycle, seen from the side: forward = +x, up = +y, the chain side (right) faces +z.
   Ratio: chainring r = 0.2, sprocket r = 0.1 → the wheel makes 2 turns for every turn of the pedals. */
(function () {
  const TAU = Math.PI * 2, R = 0.68;
  const RA = [-1.02, R], FA = [1.02, R], BB = [-0.12, 0.55];
  const RR = 0.2, RC = 0.1, ZC = 0.17, GEAR = RR / RC;
  const PED = { type: 'spin', axis: 'z', dir: -1 };
  const WHEEL = { type: 'spin', axis: 'z', dir: -1, rate: GEAR };
  /* toothed wheel (XY plane) */
  const gear = (r, teeth, h) => { const p = []; for (let i = 0; i < teeth * 2; i++) { const a = (i / (teeth * 2)) * TAU, rr = i % 2 ? r - h : r; p.push([rr * Math.cos(a), rr * Math.sin(a)]); } return p; };
  const spokes = (z0) => Array.from({ length: 18 }, (_, k) => { const a = (k / 18) * TAU, side = k % 2 ? 1 : -1, b = a + side * 0.25;
    return { t: 'pipe', r: 0.006, n: 3, pts: [[0.04 * Math.cos(b), 0.04 * Math.sin(b), side * 0.05 + z0], [0.6 * Math.cos(a), 0.6 * Math.sin(a), 0]], color: '#cbd5e1' }; });
  const wheel = (extra) => [ { t: 'torus', R: 0.6, r: 0.025, n: 40, m: 6, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.045, h: 0.16, n: 14, rot: [90, 0, 0], color: '#6b7280' } ].concat(spokes(0), extra || []);
  /* chain: loop that passes over, around the chainring, under (from the derailleur) and around the sprocket */
  const arc = (c, r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a), ZC]; });
  const CHAIN = [[RA[0], RA[1] + RC + 0.01, ZC]].concat(arc(BB, RR + 0.01, 90, -90, 10), [[-0.98, 0.29, ZC]], arc([-0.99, 0.36], 0.07, -90, -200, 4), arc([-1.02, 0.5], 0.065, -20, 120, 4).slice(1), arc(RA, RC + 0.01, 200, 90, 6));
  CHAIN.push(CHAIN[0]);
  let LEN = 0; for (let i = 0; i < CHAIN.length - 1; i++) LEN += Math.hypot(CHAIN[i + 1][0] - CHAIN[i][0], CHAIN[i + 1][1] - CHAIN[i][1]);
  const NL = 56;
  const links = Array.from({ length: NL }, (_, k) => ({ t: 'box', s: [0.035, 0.022, 0.03], pos: CHAIN[0], color: k % 2 ? '#475569' : '#94a3b8',
    anim: { type: 'path', pts: CHAIN, wave: 'saw', rate: (TAU * (RR + 0.01)) / LEN, phase: k / NL } }));
  const tube = (a, b, r, c) => ({ t: 'pipe', r: r || 0.04, n: 12, pts: [a, b], color: c });

  LIBRARY({
    lang: 'en',
    id: 'bicicletta',
    title: 'The bicycle',
    intro: 'The bicycle is one of the most <b>efficient</b> machines ever invented: with the power of your legs you go 3–4 times faster than on foot. Pedals, chain, gears, levers and friction: discover how they work together!',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.35, height: 450,
      parts: [
        { id: 'telaio', name: 'Frame', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>This is the "skeleton" of the bike: tubes joined together to form two <b>triangles</b>. The triangle is the stiffest shape there is: it does not deform even when you jump on it.</p>',
          more: '<p>Frames are made of steel, aluminium or <b>carbon fibre</b>. A carbon racing frame weighs less than 1 kg yet holds the weight of an adult pedalling on bumpy roads: thanks to the triangular shape, which is also used in bridges and cranes.</p>',
          shapes: [ tube([BB[0], BB[1], 0], [0.79, 1.28, 0], 0.045), tube([-0.4, 1.47, 0], [0.73, 1.47, 0], 0.035), tube([BB[0], BB[1], 0], [-0.42, 1.56, 0], 0.038),
            tube([BB[0], BB[1], 0.05], [RA[0], RA[1], 0.07], 0.022), tube([BB[0], BB[1], -0.05], [RA[0], RA[1], -0.07], 0.022),
            tube([-0.4, 1.44, 0.03], [RA[0], RA[1], 0.07], 0.02), tube([-0.4, 1.44, -0.03], [RA[0], RA[1], -0.07], 0.02),
            { t: 'cyl', r: 0.055, h: 0.3, n: 16, pos: [0.76, 1.4, 0], rot: [0, 0, -15], color: '#b91c1c' }, { t: 'cyl', r: 0.06, h: 0.16, n: 16, pos: [BB[0], BB[1], 0], rot: [90, 0, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.05, 0.004], pos: [0.3, 0.95, 0.046], rot: [0, 0, 32], color: '#f8fafc', decal: 1 } ] },
        { id: 'sterzo', name: 'Fork and handlebars', label: 'Handlebars', color: '#374151', explode: [0.5, 0.3, 0],
          info: '<p>The <b>handlebars</b> turn the <b>fork</b> and the front wheel: this is how you choose the direction. They also help you keep your balance with small, continuous corrections.</p>',
          more: '<p>The fork is tilted and curved forward: this makes the wheel tend to "straighten up" on its own. That is why a bike moving at speed stays upright even with nobody on it!</p>',
          shapes: [ { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, 0.07], [0.88, 1.0, 0.07], [0.98, 0.78, 0.06], [FA[0], FA[1], 0.06]] },
            { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, -0.07], [0.88, 1.0, -0.07], [0.98, 0.78, -0.06], [FA[0], FA[1], -0.06]] },
            { t: 'box', s: [0.1, 0.05, 0.18], pos: [0.79, 1.27, 0], rot: [0, 0, -15] },
            tube([0.72, 1.55, 0], [0.68, 1.72, 0], 0.028), tube([0.68, 1.72, 0], [0.82, 1.74, 0], 0.025),
            { t: 'pipe', r: 0.022, n: 10, curve: true, pts: [[0.72, 1.76, -0.4], [0.82, 1.74, -0.25], [0.82, 1.74, 0], [0.82, 1.74, 0.25], [0.72, 1.76, 0.4]] },
            { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, 0.36], rot: [90, 0, 0], color: '#111827' }, { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, -0.36], rot: [90, 0, 0], color: '#111827' },
            { t: 'cyl', r: 0.03, h: 0.025, n: 14, pos: [0.82, 1.79, -0.18], color: '#facc15' } ] },
        { id: 'ruota-anteriore', name: 'Front wheel', label: 'Front wheel', color: '#9ca3af', pos: [FA[0], FA[1], 0], explode: [0.7, 0, 0], anim: WHEEL,
          info: '<p>The front wheel spins freely and follows the steering. The thin <b>spokes</b> keep the rim round by pulling it from the centre, like the threads of a spider web.</p>',
          more: '<p>The spokes work <b>in tension</b>: each one is pulled hard, so a wheel of less than 1 kg can hold 100 kg. At the centre, the <b>hub</b> has ball bearings that reduce friction.</p>',
          shapes: wheel() },
        { id: 'ruota-posteriore', name: 'Rear wheel (drive wheel)', label: 'Rear wheel', color: '#9ca3af', pos: [RA[0], RA[1], 0], explode: [-0.7, 0, 0], anim: WHEEL,
          info: '<p>This is the wheel that <b>pushes</b>: the chain turns the sprockets attached to its hub. The wheel pushes the road backward… and the road pushes you forward!</p>',
          shapes: wheel() },
        { id: 'pneumatici', name: 'Tyres', color: '#1f2937', explode: [0, -0.35, 0],
          info: '<p>Tyres are filled with compressed <b>air</b>: they act as a cushion over bumps. The tread "grips" the asphalt thanks to <b>friction</b>.</p>',
          more: '<p>A racing tyre is inflated to about 7 bar: seven times the air pressure around us. Soft tyres flatten more and create more friction, so pedalling takes much more effort!</p>',
          shapes: [FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.645, r: 0.042, n: 36, m: 6, rot: [90, 0, 0], pos: [x, y, 0] })).concat([FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.615, r: 0.022, n: 36, m: 4, rot: [90, 0, 0], pos: [x, y, 0], color: '#78350f' }))) },
        { id: 'pedivelle', name: 'Pedals and cranks', label: 'Pedals', color: '#6b7280', pos: [BB[0], BB[1], 0], explode: [0, -0.3, 0.7], anim: PED,
          info: '<p>You push on the <b>pedals</b>: the <b>cranks</b> are two levers that turn the pushing of your legs into rotation, like the handle of a coffee grinder.</p>',
          more: '<p>The two cranks are at 180°: when one leg pushes down, the other comes up. The push is most effective when the crank is horizontal: that is when the <b>lever</b> is longest.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.5, n: 10, rot: [90, 0, 0], color: '#d1d5db' },
            { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, 0.17, 0.24] }, { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, -0.17, -0.24] },
            { t: 'group', pos: [0, 0.34, 0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] },
            { t: 'group', pos: [0, -0.34, -0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] } ] },
        { id: 'corona', name: 'Chainring (large toothed wheel)', label: 'Chainring', color: '#94a3b8', pos: [BB[0], BB[1], ZC], explode: [0, -0.3, 0.45], anim: PED,
          info: '<p>This is the large toothed wheel attached to the pedals. Its <b>teeth</b> fit into the chain and pull it.</p>',
          shapes: [ { t: 'extrude', d: 0.02, pts: gear(RR + 0.02, 32, 0.022) }, { t: 'cyl', r: 0.07, h: 0.04, n: 16, rot: [90, 0, 0], color: '#475569' } ]
            .concat([0, 72, 144, 216, 288].map((a) => ({ t: 'box', s: [0.15, 0.03, 0.03], pos: [0.08 * Math.cos(a * Math.PI / 180), 0.08 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#475569' }))) },
        { id: 'pignoni', name: 'Sprockets (rear cluster)', label: 'Sprockets', color: '#cbd5e1', pos: [RA[0], RA[1], ZC], explode: [-0.4, -0.3, 0.45], anim: WHEEL,
          info: '<p>These are the small toothed wheels on the rear wheel. The <b>smaller</b> the sprocket, the more turns the wheel makes for each pedal stroke: you go faster, but you work harder.</p>',
          more: '<p>Here the chainring has 32 teeth and the sprocket in use has 16: <b>32 : 16 = 2</b>, so for each turn of the pedals the wheel makes 2 turns. This is the <b>gear ratio</b>.</p>',
          shapes: [0.13, 0.115, 0.1, 0.085, 0.07].map((r, i) => ({ t: 'extrude', d: 0.012, pts: gear(r, Math.round(r * 160), 0.014), pos: [0, 0, -0.1 + i * 0.025 + 0.025] })) },
        { id: 'catena', name: 'Chain', color: '#475569', explode: [0, -0.3, 0.45],
          info: '<p>The chain is made of many <b>links</b> joined by pins. It transmits the movement from the chainring (front) to the sprockets (back) without slipping.</p>',
          more: '<p>A bicycle chain has about 110 links and is 98% efficient: almost all the power from your legs reaches the wheel. It must be kept <b>clean and oiled</b>, otherwise friction wastes energy and wears it out.</p>',
          shapes: links },
        { id: 'cambio', name: 'Derailleur (gear changer)', label: 'Derailleur', color: '#1f2937', pos: [-1.0, 0.43, ZC + 0.02], explode: [-0.4, -0.6, 0.6],
          info: '<p>The <b>derailleur</b> moves the chain from one sprocket to another. The two small wheels (pulleys) keep the chain always taut.</p>',
          more: '<p>Uphill you use a <b>large</b> sprocket: the wheel turns less with each pedal stroke, but less force is needed. On the flat or downhill, a small sprocket gives more speed. It is the same principle as the gears of a car.</p>',
          shapes: [ { t: 'box', s: [0.05, 0.2, 0.04], pos: [0.0, 0.1, 0], rot: [0, 0, -20] },
            { t: 'group', pos: [-0.02, 0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'group', pos: [0.01, -0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'box', s: [0.12, 0.2, 0.012], pos: [0, 0, 0.03], color: '#6b7280', alpha: 0.9 } ] },
        { id: 'freni', name: 'Brakes', color: '#111827', explode: [0, 0.45, 0],
          info: '<p>When you pull the lever, a steel cable squeezes two rubber <b>blocks</b> against the rim. The rubbing (<b>friction</b>) slows the wheel down.</p>',
          more: '<p>When braking, the energy of motion turns into <b>heat</b>: after a long descent the rims or brake discs are hot! Many modern bikes have <b>disc</b> brakes, which work well even in the wet.</p>',
          shapes: [ { t: 'box', s: [0.1, 0.05, 0.2], pos: [0.86, 1.3, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, 0.09], rot: [0, 0, -20], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, -0.09], rot: [0, 0, -20], color: '#f97316' },
            { t: 'box', s: [0.1, 0.05, 0.2], pos: [-0.62, 1.28, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, 0.1], rot: [0, 0, 30], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, -0.1], rot: [0, 0, 30], color: '#f97316' },
            { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, 0.3], rot: [0, 0, -15], color: '#9ca3af' }, { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, -0.3], rot: [0, 0, -15], color: '#9ca3af' },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, 0.3], [0.6, 1.7, 0.15], [0.7, 1.45, 0.05], [0.86, 1.33, 0]] },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, -0.3], [0.55, 1.6, -0.1], [0.2, 1.5, -0.04], [-0.3, 1.5, -0.04], [-0.6, 1.33, 0]] } ] },
        { id: 'sella', name: 'Saddle', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>The <b>saddle</b> supports your weight. It can be raised and lowered: it is set correctly when, with the pedal at the bottom, your leg is almost straight.</p>',
          shapes: [ tube([-0.42, 1.56, 0], [-0.47, 1.76, 0], 0.025, '#9ca3af'),
            { t: 'extrude', d: 0.12, pts: [[-0.2, 0], [0.0, 0.02], [0.18, 0.015], [0.24, 0.0], [0.2, -0.03], [0.0, -0.035], [-0.2, -0.04], [-0.25, -0.01]], pos: [-0.45, 1.8, 0], smooth: true },
            { t: 'sphere', r: 1, n: 8, m: 14, scale: [0.1, 0.035, 0.11], pos: [-0.6, 1.79, 0] } ] },
        { id: 'luci', name: 'Lights and reflectors', label: 'Lights', color: '#f8fafc', explode: [0, 0.3, 0.3],
          info: '<p>To be seen: a <b>white</b> light at the front and a <b>red</b> one at the back, plus reflectors on the pedals and spokes. They are required when it is dark!</p>',
          more: '<p>A <b>reflector</b> does not produce light on its own: it is made of many tiny mirror-like corners that send the light of headlights straight back to the car that sent it.</p>',
          shapes: [ { t: 'cyl', r: 0.045, h: 0.1, n: 16, rot: [0, 0, 90], pos: [0.9, 1.66, 0], color: '#111827' }, { t: 'cyl', r: 0.04, h: 0.01, n: 16, rot: [0, 0, 90], pos: [0.955, 1.66, 0], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.6 } },
            { t: 'box', s: [0.03, 0.08, 0.06], pos: [-0.68, 1.66, 0], color: '#dc2626', anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 2 } } ] }
      ]
    },
    steps: [
      { icon: '🚲', title: 'A simple and brilliant machine', explode: 0,
        html: '<p>The bicycle is made of just a few parts: a <b>frame</b>, two <b>wheels</b>, the <b>pedals</b> with the <b>chain</b>, the <b>steering</b> and the <b>brakes</b>. The engine is you!</p><p>Pedalling uses less energy than walking, but you go much faster.</p>' },
      { icon: '🦵', title: 'Pedals and cranks: two levers', focus: ['pedivelle', 'corona'], explode: 0.3, view: { rx: 0.1, ry: -0.1 },
        html: '<p>The <b>cranks</b> are levers: pushing the pedal turns the central axle. One leg pushes down while the other comes up: the push never stops.</p><p class="tip">🔧 The push is strongest with the crank horizontal: that is when the lever works best.</p>' },
      { icon: '⛓️', title: 'Chainring, chain and sprocket', focus: ['corona', 'catena', 'pignoni', 'pedivelle'], explode: 0, zoom: 1.2, view: { rx: 0.08, ry: -0.05 },
        html: '<p>The <b>chainring</b> pulls the <b>chain</b>, and the chain turns the <b>sprocket</b> on the rear wheel. The chainring has 32 teeth, the sprocket 16: half!</p><p>So, for <b>each turn of the pedals the wheel makes 2 turns</b>. Look: the pedals make one turn while the wheel makes two.</p>' },
      { icon: '⚙️', title: 'The derailleur: uphill or flat?', focus: ['cambio', 'pignoni', 'catena'], explode: 0.2, view: { rx: 0.2, ry: -0.75 },
        html: '<p>The <b>derailleur</b> moves the chain onto different sprockets. A <b>large</b> sprocket: you pedal easily but go slowly (ideal uphill). A <b>small</b> sprocket: you go fast but need more force.</p><p class="tip">🏔️ It is a trade-off between force and speed: the gears of a car work in the same way.</p>' },
      { icon: '🛞', title: 'Wheels, spokes and tyres', focus: ['ruota-anteriore', 'ruota-posteriore', 'pneumatici'], explode: 0.2, view: { rx: 0.15, ry: -0.4 },
        html: '<p>The <b>spokes</b> pull the rim towards the centre and keep it perfectly round. The air-filled <b>tyres</b> absorb bumps and "grip" the road thanks to friction.</p><p>The rear wheel pushes the road backward… and the road pushes you forward!</p>' },
      { icon: '🤸', title: 'Steering and balance', focus: ['sterzo', 'ruota-anteriore', 'telaio'], explode: 0, view: { rx: 0.3, ry: -0.9 },
        html: '<p>To keep your balance you constantly make small corrections with the <b>handlebars</b>: if you start to fall to the right, you steer a little to the right and the bike comes back under you.</p><p>The spinning wheels and the tilted fork help: that is why it is very hard to stand still on a bike, but easy when moving.</p>' },
      { icon: '🛑', title: 'Brakes: the friction that saves you', focus: ['freni', 'ruota-anteriore', 'ruota-posteriore'], explode: 0, view: { rx: 0.2, ry: -0.5 },
        html: '<p>You pull the lever, the cable squeezes the <b>blocks</b> against the rim, and the <b>friction</b> slows the wheel. The energy of motion turns into heat.</p><p class="tip">⚠️ Always use both brakes together, gently: using only the front one, at full force, can throw you forward over the handlebars!</p>' }
    ],
    facts: [
      { icon: '🪵', title: 'Without pedals', html: 'The first "bicycle" (1817, Karl Drais) was made of wood and had no pedals: you pushed it along with your feet on the ground, like the pedal-less bikes of small children.' },
      { icon: '🎡', title: 'The giant wheel', html: 'Before the chain was invented, the pedals were attached to the front wheel: to go fast, people built bikes with enormous wheels, up to 1.5 metres high (the <b>penny-farthings</b>).' },
      { icon: '🏆', title: 'The Giro d\'Italia', html: 'The Giro d\'Italia has been raced since 1909. The riders cover about <b>3,500 km</b> in three weeks, also climbing Alpine passes above 2,000 metres.' },
      { icon: '🌍', title: 'More bicycles than cars', html: 'There are about <b>one billion</b> bicycles in the world, more than twice the number of cars. They do not pollute and are good for your health!' }
    ],
    quiz: [
      { type: 'mc', q: 'What connects the chainring to the rear sprocket?', options: ['The brake cable', 'The chain', 'The fork', 'The spoke'], answer: 1, explain: 'The chain transmits the movement from the chainring (pedals) to the sprocket (rear wheel).' },
      { type: 'num', q: 'The chainring has 32 teeth and the sprocket has 16. How many turns does the wheel make for each turn of the pedals?', answer: 2, explain: '32 : 16 = 2. This is the gear ratio.' },
      { type: 'mc', q: 'Going uphill, it is better to use a sprocket that is…', options: ['small', 'large', 'any, it makes no difference', 'none, you are going downhill'], answer: 1, explain: 'With a large sprocket less force is needed to pedal, even though you go more slowly.' },
      { type: 'mc', q: 'Why is the frame made of triangles?', options: ['Because it looks nicer', 'Because the triangle is a rigid shape that does not deform', 'To weigh more', 'To make room for the chain'], answer: 1, explain: 'The triangle does not deform: that is why it is used in frames, bridges and cranes.' },
      { type: 'tf', q: 'Brakes slow the bike down thanks to friction, which turns motion into heat.', answer: true, explain: 'The blocks rub against the rim: the energy of motion becomes heat.' },
      { type: 'mc', q: 'The cranks work like…', options: ['levers', 'magnets', 'springs', 'pulleys'], answer: 0, explain: 'They are levers that turn the push of your legs into rotation.' }
    ]
  });
})();
