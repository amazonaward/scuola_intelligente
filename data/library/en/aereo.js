/* The airliner (twin-engine). The nose points toward +x, up = +y, the right wing is toward +z.
   The wings are low (y = -0.3) with a small dihedral; the controls (ailerons, elevator, rudder) oscillate. */
(function () {
  const ROT = [0, 0, -90]; // turns the y axis of the primitives along x
  const D = Math.PI / 180, DIH = 5;
  const FUS = [[0, -3.35], [0.1, -3.25], [0.24, -2.9], [0.38, -2.3], [0.49, -1.6], [0.52, -1.0], [0.52, 2.1], [0.5, 2.5], [0.45, 2.8], [0.36, 3.05], [0.24, 3.22], [0.1, 3.32], [0, 3.35]];
  /* plan of a wing (x, span) → thin extrusion rotated in the XZ plane */
  const WING = [[1.0, 0], [-0.5, 0], [-1.45, 3.2], [-1.0, 3.2]];
  const wing = (side) => ({ t: 'group', pos: [0, -0.3, 0], rot: [-side * DIH, 0, 0], shapes: [
    { t: 'extrude', d: 0.09, pts: WING.map(([x, z]) => [x, z * side]), rot: [90, 0, 0], smooth: true },
    { t: 'extrude', d: 0.05, pts: [[-1.0, 3.2 * side], [-1.45, 3.2 * side], [-1.38, 3.32 * side], [-1.12, 3.35 * side]], rot: [90, 0, 0], color: '#94a3b8' } ] });
  /* movable surface hinged along the trailing edge of the wing */
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
    lang: 'en',
    id: 'aereo',
    title: 'The airplane',
    intro: 'How can an object weighing <b>400 tonnes</b> stay in the air? The secret lies in the shape of the <b>wings</b>: the air flowing past them is pushed downward, and the wing receives an upward push, the <b>lift</b>. The engines keep the speed up.',
    model: {
      rx: 0.5, ry: -0.7, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.15,
      parts: [
        { id: 'fusoliera', name: 'Fuselage', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>This is the "body" of the plane, a long tube of aluminium or carbon fibre. Passengers sit inside, and the luggage goes in the hold under the floor.</p>',
          more: '<p>At 11,000 metres, the pressure outside is a quarter of what it is on the ground and the temperature is −50 °C. The fuselage is <b>pressurised</b>: air is pumped inside, as into a balloon, so that people can breathe normally. That is why it is shaped like a tube: it withstands pressure better.</p>',
          shapes: [ { t: 'lathe', n: 30, pts: FUS, rot: ROT }, ...winds(1), ...winds(-1),
            { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, 0.522], color: '#2563eb', decal: 1 }, { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, -0.522], color: '#2563eb', decal: 1 },
            { t: 'box', s: [0.16, 0.34, 0.01], pos: [2.3, 0.0, 0.517], color: '#cbd5e1', decal: 1 } ] },
        { id: 'cabina', name: 'Cockpit', label: 'Cockpit', color: '#1e293b', explode: [0.6, 0.2, 0],
          info: '<p>At the front, behind the windows, sit the <b>pilots</b>, with the control column (or side stick), the engine throttles and lots of screens. The <b>weather radar</b> is in the nose.</p>',
          more: '<p>Most of the flight is handled by the <b>autopilot</b>, but the pilots control everything and carry out take-off and landing. Modern aircraft are "fly-by-wire": the pilots\' commands go to computers, which move the control surfaces with hydraulic motors.</p>',
          shapes: [ ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.14, 0.1, 0.12], pos: [2.98, 0.24, z], rot: [0, 0, -38], decal: 1 })),
            { t: 'cyl', r: 0.12, h: 0.05, n: 16, rot: ROT, pos: [3.3, 0, 0], color: '#94a3b8' } ] },
        { id: 'ali', name: 'Wings', color: '#cbd5e1', explode: [0, -0.3, 0],
          info: '<p>The wings are the most important part: their curved shape and tilt push the air <b>downward</b>; in reaction, the air pushes the wing <b>upward</b>. Inside them are the fuel <b>tanks</b>!</p>',
          more: '<p>The profile of the wing (rounded on top, flatter underneath) makes the air above flow faster, so its <b>pressure is lower</b> than the air below (Bernoulli\'s principle). The pressure difference, over a surface of hundreds of square metres, lifts the aircraft. The bent wingtips (<b>winglets</b>) reduce vortices and save fuel.</p>',
          shapes: [ wing(1), wing(-1) ] },
        { id: 'alettoni', name: 'Ailerons', color: '#f59e0b', explode: [0, -0.3, 0],
          info: '<p>These are the "flaps" near the wingtips. They move in opposite directions: one up and one down. So one wing rises and the other drops, and the aircraft <b>banks</b> to make turns.</p>',
          shapes: [ flapAt(2.6, 0.84, 0.2, 15, 0, '#f59e0b'), flapAt(-2.6, 0.84, 0.2, -15, 0, '#f59e0b') ] },
        { id: 'ipersostentatori', name: 'Flaps (high-lift devices)', label: 'Flaps', color: '#38bdf8', explode: [0, -0.5, 0],
          info: '<p>On take-off and landing the aircraft flies more slowly. The <b>flaps</b> come out of the back of the wings and lower: the wing becomes larger and more curved, and gives lift even at low speed.</p>',
          shapes: [ flapAt(1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25), flapAt(-1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25) ] },
        { id: 'motori', name: 'Jet engines (turbofan)', label: 'Engines', color: '#e5e7eb', explode: [0.4, -0.6, 0],
          info: '<p>The large <b>fan</b> at the front sucks in a huge amount of air and blasts it backward. In reaction, the aircraft is pushed forward: this is the <b>thrust</b>.</p>',
          more: '<p>Only part of the air enters the engine\'s "heart": it is compressed, mixed with kerosene and burned; the hot gases turn a turbine that drives the fan. Most of the air passes around the outside (<b>cold flow</b>) and provides almost all of the thrust, with less noise and lower fuel use.</p>',
          shapes: [ engine(1.15), engine(-1.15) ] },
        { id: 'deriva', name: 'Vertical fin', color: '#2563eb', explode: [-0.4, 0.6, 0],
          info: '<p>This is the large vertical "fin" at the tail. Like the feathers of an arrow, it keeps the aircraft straight and stops it from swaying to the right or left.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: [[-2.15, 0.2], [-3.05, 0.2], [-3.55, 1.55], [-3.2, 1.55]], smooth: true } ] },
        { id: 'timone', name: 'Rudder', label: 'Rudder', color: '#f97316', explode: [-0.4, 0.6, 0],
          info: '<p>The movable part of the fin. When it turns to the right or left, the nose of the aircraft moves in that direction. The pilot controls it with the <b>pedals</b>.</p>',
          shapes: [ { t: 'group', pos: [-3.27, 0.88, 0], rot: [0, 0, 20.3], anim: { type: 'swing', axis: 'y', amp: 14, rate: 0.35 }, shapes: [ { t: 'box', s: [0.2, 1.3, 0.05], pos: [-0.1, 0, 0], div: 1 } ] } ] },
        { id: 'stabilizzatori', name: 'Horizontal stabilisers', label: 'Stabilisers', color: '#cbd5e1', explode: [-0.5, 0.2, 0],
          info: '<p>The small wings at the tail keep the aircraft in balance, so that it does not "dive" forward or pitch upward.</p>',
          shapes: [1, -1].map((s) => ({ t: 'extrude', d: 0.05, pts: [[-2.35, 0], [-3.0, 0], [-3.4, 1.25 * s], [-3.15, 1.25 * s]].map(([x, z], i) => [x, i < 2 ? 0 : z]), rot: [90, 0, 0], pos: [0, 0.12, 0] })) },
        { id: 'equilibratori', name: 'Elevators', color: '#f59e0b', explode: [-0.5, 0.2, 0],
          info: '<p>These are the movable parts of the horizontal stabilisers. When they rise, the tail goes down and the nose <b>goes up</b>; when they drop, the nose <b>goes down</b>. The pilot moves them by pulling or pushing the control column.</p>',
          shapes: [1, -1].map((s) => ({ t: 'group', pos: [-3.0 - 0.32 * 0.62, 0.12, 0.62 * s], rot: [0, -s * 17.7, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.3 }, shapes: [ { t: 'box', s: [0.16, 0.03, 1.0], pos: [-0.08, 0, 0], div: 1 } ] })) },
        { id: 'carrello', name: 'Landing gear', color: '#374151', explode: [0, -0.6, 0],
          info: '<p>The wheels the aircraft runs on during take-off and landing. After take-off they <b>retract</b> into the belly, so they do not create drag.</p>',
          more: '<p>Aircraft tyres are inflated with <b>nitrogen</b> to very high pressures (about 14 bar) and touch the runway at nearly 250 km/h. Shock absorbers take the impact of landing.</p>',
          shapes: [ ...[0.55, -0.55].flatMap((z) => [ { t: 'cyl', r: 0.035, h: 0.55, n: 10, pos: [-0.25, -0.75, z], color: '#9ca3af' }, { t: 'box', s: [0.4, 0.04, 0.08], pos: [-0.25, -1.0, z], color: '#6b7280' },
              ...[-0.12, 0.12].map((dx) => ({ t: 'cyl', r: 0.12, h: 0.1, n: 18, rot: [90, 0, 0], pos: [-0.25 + dx, -1.06, z] })) ]),
            { t: 'cyl', r: 0.03, h: 0.5, n: 10, pos: [2.5, -0.68, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.09, h: 0.1, n: 16, rot: [90, 0, 0], pos: [2.5, -0.98, 0] } ] },
        { id: 'aria', name: 'Airflow', label: 'Airflow', color: '#0ea5e9', noLabel: true, explode: [0, 0, 1.2],
          info: '<p>The air passing <b>over</b> the wing (dark blue dots) flows faster than the air passing <b>under</b> it (light blue), and in the end all of it is pushed slightly downward.</p>',
          shapes: puffs(flow(-0.1, 1.6, true), 9, 0.75, '#0369a1').concat(puffs(flow(-0.32, 1.6, false), 9, 0.5, '#7dd3fc')) },
        { id: 'forze', name: 'The four forces of flight', label: 'Forces', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>Four forces act in flight: <b>lift</b> (green, upward, from the wings), <b>weight</b> (red, downward), <b>thrust</b> (blue, forward, from the engines) and <b>drag</b> (orange, the air slowing it down).</p>',
          more: '<p>In level flight at constant speed, the forces balance: lift = weight and thrust = drag. To climb, the pilot increases the lift (speed or wing angle); to accelerate, they give more thrust.</p>',
          shapes: [ arrow([0, 0.55, 0], [0, 1, 0], 1.0, '#22c55e'), arrow([0, -0.55, 0], [0, -1, 0], 1.0, '#ef4444'), arrow([3.4, 0, 0], [1, 0, 0], 0.6, '#3b82f6'), arrow([-3.4, 0, 0], [-1, 0, 0], 0.45, '#f97316') ] }
      ]
    },
    steps: [
      { icon: '✈️', title: 'Heavier than air', explode: 0,
        html: '<p>An airliner weighs hundreds of tonnes, and yet it flies! It does not float like a balloon: it stays up because it <b>moves very fast</b>, and the wings, cutting through the air, receive an upward push.</p>' },
      { icon: '⚖️', title: 'The four forces', focus: ['forze', 'fusoliera', 'ali', 'motori'], explode: 0, view: { rx: 0.3, ry: -0.35 },
        html: '<p><b>Lift</b> up, <b>weight</b> down, <b>thrust</b> forward, <b>drag</b> backward. To fly straight, lift must balance weight and thrust must overcome the air\'s drag.</p>' },
      { icon: '🪽', title: 'The secret of the wings', focus: ['ali', 'aria'], explode: 0, view: { rx: 0.05, ry: -0.05 }, zoom: 1.15,
        html: '<p>The wing is slightly <b>tilted</b> and curved. The air above flows faster and its pressure drops; below, the pressure is higher. The wing is "sucked" upward and at the same time pushes the air downward.</p><p class="tip">🖐️ Try it: out of a car window (with an adult!) hold your flat hand and tilt it a little: you will feel it rise.</p>' },
      { icon: '🌀', title: 'The engines provide thrust', focus: ['motori'], explode: 0.2, view: { rx: 0.15, ry: 0.5 },
        html: '<p>The large fan of the <b>jet engines</b> sucks in air at the front and blasts it backward with great force. In reaction, the aircraft is pushed forward, like a balloon deflating.</p>' },
      { icon: '🕹️', title: 'How it is steered: three controls', focus: ['alettoni', 'equilibratori', 'timone', 'deriva', 'stabilizzatori'], explode: 0, view: { rx: 0.45, ry: -1.0 },
        html: '<p>The <b>ailerons</b> (on the wings) make the aircraft bank to the right or left. The <b>elevators</b> (at the tail) raise or lower the nose. The <b>rudder</b> (on the fin) moves the nose to the right or left.</p>' },
      { icon: '🛬', title: 'Take-off and landing', focus: ['ipersostentatori', 'carrello', 'ali'], explode: 0, view: { rx: -0.1, ry: -0.7 },
        html: '<p>Going slowly, the wings give less lift. So the <b>flaps</b> come out: they make the wing larger and more curved. The <b>landing gear</b> comes down to touch the runway and retracts after take-off.</p>' },
      { icon: '🧑‍✈️', title: 'Fuselage and cockpit', focus: ['fusoliera', 'cabina'], explode: 0.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>Passengers and luggage travel in the <b>fuselage</b>; it is pressurised because at 11,000 metres the air is too thin to breathe. In the <b>cockpit</b> the pilots control everything, helped by the autopilot.</p>' }
    ],
    facts: [
      { icon: '🛩️', title: '12 seconds of flight', html: 'The first powered flight by the <b>Wright</b> brothers (1903) lasted 12 seconds and covered 37 metres: less than the length of a modern airliner!' },
      { icon: '🎨', title: 'Leonardo and flight', html: '<b>Leonardo da Vinci</b>, 500 years ago, studied the flight of birds and drew flying machines, even an "aerial screw" similar to the helicopter.' },
      { icon: '⛽', title: 'A lot of fuel', html: 'A large airliner can carry more than <b>200,000 litres</b> of kerosene, almost all of it in the wings.' },
      { icon: '⚡', title: 'Lightning? No problem', html: 'Every airliner is hit by lightning about once a year. The current flows over the metal skin, and the passengers are safe, as if in a cage.' }
    ],
    quiz: [
      { type: 'mc', q: 'What is the force that keeps the aircraft up?', options: ['Thrust', 'Lift', 'Drag', 'Weight'], answer: 1, explain: 'Lift comes from the wings and balances the weight of the aircraft.' },
      { type: 'mc', q: 'What do jet engines provide?', options: ['Lift', 'Forward thrust', 'Weight', 'Balance'], answer: 1, explain: 'They push air backward and, in reaction, the aircraft moves forward.' },
      { type: 'mc', q: 'Which surfaces make the aircraft bank to the right or left?', options: ['The rudder', 'The ailerons', 'The landing gear', 'The windows'], answer: 1, explain: 'The ailerons move in opposite directions on the two wings and make the aircraft bank.' },
      { type: 'tf', q: 'Above the wing, the air flows faster and has a lower pressure.', answer: true, explain: 'The pressure difference between the lower and upper surfaces pushes the wing upward.' },
      { type: 'mc', q: 'What are the flaps for?', options: ['Braking in flight at high altitude', 'Giving more lift when the aircraft flies slowly', 'Lighting the way', 'Cooling the engines'], answer: 1, explain: 'On take-off and landing, the flaps make the wing larger and more curved.' },
      { type: 'mc', q: 'Where is most of the fuel?', options: ['In the tail', 'In the wings', 'In the cabin', 'Under the seats'], answer: 1, explain: 'The main tanks are inside the wings.' }
    ]
  });
})();
