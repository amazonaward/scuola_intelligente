/* Il treno elettrico ad alta velocità (motrice di testa). Il treno viaggia verso +x; alto = +y; i binari corrono lungo x (scartamento: z = ±0.43).
   Le traversine scorrono all'indietro per dare l'idea del movimento. */
(function () {
  const TAU = Math.PI * 2, RW = 0.28, WR = 2.2; // raggio ruota, velocità di rotazione delle ruote
  const SPEED = WR * TAU * RW;           // velocità del treno (unità per giro dell'orologio)
  const SL = 0.6;                        // passo delle traversine
  const PROFILE = [[-3.2, 0.62], [2.2, 0.62], [2.75, 0.66], [3.15, 0.78], [3.36, 0.94], [3.34, 1.06], [3.05, 1.3], [2.45, 1.64], [1.85, 1.86], [1.2, 1.92], [-3.2, 1.92]];
  const wheelset = (x) => ({ t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [
    { t: 'cyl', r: 0.05, h: 1.0, n: 12, rot: [90, 0, 0], color: '#6b7280' },
    ...[-0.43, 0.43].map((z) => ({ t: 'cyl', r: RW, h: 0.07, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#9ca3af' })),
    ...[-0.38, 0.38].map((z) => ({ t: 'cyl', r: RW + 0.035, h: 0.025, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#6b7280' })),
    ...[-0.43, 0.43].map((z) => ({ t: 'box', s: [0.3, 0.04, 0.075], pos: [0, 0, z + Math.sign(z) * 0.002], color: '#475569' })) ] });
  const AXLES = [-2.55, -1.75, 1.15, 1.95];
  const bogie = (x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
    { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, 0.52] }, { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, -0.52] }, { t: 'box', s: [0.16, 0.1, 1.04], pos: [0, 0.36, 0] },
    ...[-0.4, 0.4].map((dx) => ({ t: 'pipe', r: 0.012, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 22 }, (_, i) => [dx + 0.05 * Math.cos(i * 1.2), 0.4 + i * 0.008, 0.52 + 0.05 * Math.sin(i * 1.2)]) })) ] });
  const sleepers = Array.from({ length: 15 }, (_, k) => ({ t: 'box', s: [0.16, 0.08, 1.35], pos: [-4.2 + k * SL, -0.07, 0], color: '#78716c', div: 1 }));
  const POLES = [-3.4, 3.4];
  const CUR = [[-1.45, 2.78, 0], [-1.45, 2.2, 0], [-1.45, 1.95, 0], [-1.2, 1.7, 0.1], [-0.5, 0.75, 0.1], [0.0, 0.5, 0.1], [0.65, 0.5, 0.1], [1.1, 0.55, 0.1], [1.15, 0.42, 0.25], [1.15, RW + 0.02, 0.43], [1.15, 0.0, 0.43]];

  LIBRARY({
    lang: 'en',
    id: 'treno',
    title: 'The train',
    intro: 'A high-speed train runs at <b>300 km/h</b> without burning fuel: it takes <b>electricity</b> from a wire above the tracks and turns it into motion with powerful electric motors. Steel wheels on steel rails: very little friction!',
    model: {
      rx: 0.15, ry: -0.6, speed: 0.4, height: 460, fit: 1.15,
      parts: [
        { id: 'cassa', name: 'Car body (bodywork)', label: 'Car body', color: '#dc2626', alpha: 0.62, explode: [0, 0.9, 0],
          info: '<p>This is the train\'s "shell", made of aluminium. The streamlined nose <b>cuts through the air</b>: at high speed, air resistance is the biggest effort to overcome.</p>',
          more: '<p>At 300 km/h more than 80% of the energy is used to push the air aside. That is why fast trains have a long nose, smooth sides and even covered bogies. The nose of a Japanese train was designed by copying the beak of the kingfisher!</p>',
          shapes: [ { t: 'extrude', d: 1.06, pts: PROFILE, smooth: true },
            { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, 0.535], color: '#0f172a', alpha: 0.9, decal: 1 }, { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, -0.535], color: '#0f172a', alpha: 0.9, decal: 1 },
            { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, 0.536], color: '#e5e7eb', alpha: 1, decal: 1 }, { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, -0.536], color: '#e5e7eb', alpha: 1, decal: 1 },
            { t: 'box', s: [0.42, 0.9, 0.012], pos: [-2.75, 1.13, 0.537], color: '#9ca3af', alpha: 0.9, decal: 2 },
            { t: 'box', s: [0.62, 0.02, 0.86], pos: [2.755, 1.478, 0], rot: [0, 0, -30], color: '#0f172a', alpha: 0.95, decal: 1 },
            { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, 0.537], color: '#9ca3af', alpha: 1, decal: 1 }, { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, -0.537], color: '#9ca3af', alpha: 1, decal: 1 },
            { t: 'box', s: [1.6, 0.14, 0.7], pos: [0.3, 1.99, 0], color: '#9ca3af', alpha: 1 } ] },
        { id: 'cabina', name: 'Driver\'s cab', label: 'Cab', color: '#334155', explode: [0.6, 0.9, 0],
          info: '<p>Here sits the <b>driver</b>. They have the lever to speed up (the "throttle"), the brake lever, the screens and the radio. There is no steering wheel: the track decides where you go!</p>',
          more: '<p>At high speed the signals beside the tracks would flash past too quickly: the information arrives straight in the cab on the screens (the <b>ERTMS</b> system). If the driver doesn\'t react, the train brakes by itself.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.35, 0.8], pos: [2.35, 1.0, 0], color: '#1f2937' }, { t: 'box', s: [0.45, 0.04, 0.7], pos: [2.4, 1.2, 0], rot: [0, 0, 20], color: '#475569' },
            { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, 0.0], rot: [0, 0, 20], color: '#22c55e', decal: 1 }, { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, -0.2], rot: [0, 0, 20], color: '#38bdf8', decal: 1 },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [1.75, 0.95, 0.15], color: '#1e3a8a' }, { t: 'box', s: [0.06, 0.4, 0.3], pos: [1.6, 1.15, 0.15], color: '#1e3a8a' } ] },
        { id: 'sedili', name: 'Passenger car', label: 'Passengers', color: '#1d4ed8', explode: [0, 0.9, 0],
          info: '<p>Behind the cab are the passengers\' <b>seats</b>. A high-speed train carries about <b>450–600 people</b>: how many cars would that take?</p>',
          shapes: Array.from({ length: 6 }, (_, k) => [-0.3, 0.3].map((z) => ({ t: 'group', pos: [-2.5 + k * 0.6, 0.66, z], shapes: [ { t: 'box', s: [0.28, 0.1, 0.36], pos: [0, 0.22, 0] }, { t: 'box', s: [0.08, 0.5, 0.36], pos: [-0.12, 0.47, 0] } ] }))).flat() },
        { id: 'pantografo', name: 'Pantograph', color: '#475569', pos: [-1.45, 1.92, 0], explode: [0, 1.6, 0],
          info: '<p>It is the jointed "arm" on the roof that <b>slides along the wire</b> and picks up the current. A spring always pushes it upwards, so it never loses contact.</p>',
          more: '<p>The sliding strip on top is made of <b>graphite</b>, like the lead of a pencil: it conducts well and glides along the copper wire. The wire is hung in a zig-zag, so the strip wears evenly.</p>',
          anim: { type: 'move', dir: [0, 1, 0], amp: 0.02, wave: 'sin', rate: 1.5 },
          shapes: [ { t: 'box', s: [0.5, 0.06, 0.5], pos: [0, 0.03, 0], color: '#64748b' }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, 0.15] }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, -0.15] },
            { t: 'pipe', r: 0.025, n: 8, pts: [[-0.2, 0.12, 0], [0.45, 0.48, 0]] }, { t: 'pipe', r: 0.02, n: 8, pts: [[0.45, 0.48, 0], [0.0, 0.83, 0]] },
            { t: 'pipe', r: 0.012, n: 6, pts: [[-0.1, 0.12, 0], [0.4, 0.45, 0]], color: '#94a3b8' },
            { t: 'box', s: [0.1, 0.04, 0.8], pos: [0, 0.85, 0], color: '#1f2937' }, { t: 'box', s: [0.06, 0.03, 0.8], pos: [0, 0.875, 0], color: '#a3a3a3' } ] },
        { id: 'catenaria', name: 'Overhead line (catenary)', label: 'Catenary', color: '#b45309', explode: [0, 1.9, 0], anchor: [2.2, 3.2, 0],
          info: '<p>Above the tracks runs a <b>copper wire</b> that is always live, hung from poles. On the high-speed line the voltage is <b>25,000 volts</b>: extremely dangerous, never go near it!</p>',
          more: '<p>The contact wire is hung with lots of little "droppers" from a cable higher up (the true <b>catenary</b>, named after the curve a hanging chain makes). That way it stays perfectly horizontal. In Italy the ordinary lines use 3000 V direct current.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-4.2, 2.79, 0], [4.2, 2.79, 0]] },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-4.2, 3.32, 0], [-3.4, 3.35, 0], [0, 3.05, 0], [3.4, 3.35, 0], [4.2, 3.32, 0]], color: '#78716c' },
            ...[-2.4, -1.2, 0, 1.2, 2.4].map((x) => ({ t: 'pipe', r: 0.006, n: 4, pts: [[x, 2.8, 0], [x, 3.12 + 0.1 * (Math.abs(x) / 2.4) ** 2, 0]], color: '#78716c' })),
            ...POLES.flatMap((x) => [ { t: 'cyl', r: 0.07, h: 3.6, n: 12, pos: [x, 1.7, -1.15], color: '#6b7280' }, { t: 'pipe', r: 0.03, n: 6, pts: [[x, 3.35, -1.15], [x, 3.35, 0.1]], color: '#6b7280' },
              { t: 'cyl', r: 0.05, h: 0.2, n: 10, pos: [x, 3.2, 0], color: '#f8fafc' } ]) ] },
        { id: 'trasformatore', name: 'Transformer', color: '#78350f', pos: [-0.35, 0.47, 0], explode: [0, -0.7, 0.6],
          info: '<p>The current in the wire is too "strong" for the motors. The <b>transformer</b>, a big block of iron and copper under the floor, lowers the voltage from 25,000 to a few thousand volts.</p>',
          more: '<p>A transformer has two coils wound on the same iron core: the alternating current in the first creates a changing magnetic field, and this "induces" current in the second. With fewer turns, the voltage is lower. It weighs several tonnes!</p>',
          shapes: [ { t: 'box', s: [0.9, 0.3, 0.8] }, ...[-0.25, 0, 0.25].map((x) => ({ t: 'cyl', r: 0.1, h: 0.3, n: 16, pos: [x, 0.02, 0.0], color: '#b45309' })), { t: 'box', s: [0.95, 0.03, 0.85], pos: [0, 0.16, 0], color: '#92400e' } ] },
        { id: 'convertitore', name: 'Electronic converter', label: 'Converter', color: '#0f766e', pos: [0.65, 0.47, 0], explode: [0.2, -0.7, 0.6],
          info: '<p>It is the "power brain": a cabinet full of electronics that controls how much current goes to the motors. More current = more speed.</p>',
          more: '<p>The converter (<b>inverter</b>) turns the current into an alternating current with variable frequency: changing the frequency changes the speed of the motors. It uses power transistors (IGBTs) that switch on and off thousands of times a second.</p>',
          shapes: [ { t: 'box', s: [0.75, 0.28, 0.8] }, { t: 'box', s: [0.6, 0.12, 0.01], pos: [0, 0.03, 0.405], color: '#134e4a', decal: 1 },
            { t: 'box', s: [0.06, 0.04, 0.01], pos: [-0.22, 0.05, 0.41], color: '#4ade80', decal: 2, anim: { type: 'blink', color: '#dcfce7', wave: 'square', rate: 3 } } ] },
        { id: 'motori', name: 'Traction motors', label: 'Motors', color: '#2563eb', explode: [0, -0.4, 1.0],
          info: '<p>These are the <b>electric motors</b> that turn the wheels, one for each axle. Together they produce thousands of horsepower, with no smoke and almost no noise.</p>',
          more: '<p>A high-speed train has a power of about <b>10,000 kW</b>, like 100 cars. Many modern trains have the motors spread under several cars: they accelerate better and the wheels slip less.</p>',
          shapes: AXLES.map((x) => ({ t: 'group', pos: [x + (x < 0 ? 0.32 : -0.32), RW + 0.04, 0.05], shapes: [ { t: 'cyl', r: 0.15, h: 0.5, n: 20, rot: [90, 0, 0] }, { t: 'cyl', r: 0.08, h: 0.12, n: 14, rot: [90, 0, 0], pos: [0, 0, 0.3], color: '#475569' },
            { t: 'group', pos: [0, 0, -0.27], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR * 3 }, shapes: [ { t: 'cyl', r: 0.1, h: 0.03, n: 14, rot: [90, 0, 0], color: '#93c5fd' }, { t: 'box', s: [0.18, 0.03, 0.035], color: '#1e3a8a' } ] } ] })) },
        { id: 'carrelli', name: 'Bogies', color: '#374151', explode: [0, -0.4, 0],
          info: '<p>Under the car body there are two <b>bogies</b>, each with 4 wheels. They can swivel a little relative to the car body, so the train takes bends without sliding off.</p>',
          more: '<p>Steel springs and air cushions (air suspension) separate the bogies from the car body: passengers don\'t feel small bumps in the track, even at 300 km/h.</p>',
          shapes: [ bogie(-2.15), bogie(1.55) ] },
        { id: 'ruote', name: 'Wheels (wheelsets)', label: 'Wheels', color: '#9ca3af', explode: [0, -0.4, 0],
          info: '<p>The wheels are made of <b>steel</b>, fixed in pairs on a rigid axle. They have a <b>flange</b> sticking out on the inner side that stops them leaving the track.</p>',
          more: '<p>The wheels are not cylinders but slightly <b>cone-shaped</b>: on a bend the outer wheel slides a little outwards and "runs" on a larger diameter. So it covers more distance than the inner wheel even though they are on the same axle. Clever!</p>',
          shapes: AXLES.map(wheelset) },
        { id: 'freni', name: 'Disc brakes', label: 'Brakes', color: '#f97316', explode: [0, -0.4, -0.8],
          info: '<p>On each axle there are steel <b>discs</b>: the calipers squeeze them and make them slow down. But first of all, the electric motor does the braking!</p>',
          more: '<p>When braking, the motors work in reverse, as <b>generators</b>: they turn motion into electricity and send it back into the wire, where other trains use it (regenerative braking). At 300 km/h it takes more than 3 km to stop!</p>',
          shapes: AXLES.flatMap((x) => [ { t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [-0.15, 0.15].map((z) => ({ t: 'tube', r: 0.2, ri: 0.06, h: 0.03, n: 22, rot: [90, 0, 0], pos: [0, 0, z] })) },
            { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, -0.15], color: '#1f2937' }, { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, 0.15], color: '#1f2937' } ]) },
        { id: 'binari', name: 'Rails and sleepers', label: 'Tracks', color: '#9ca3af', explode: [0, -0.8, 0],
          info: '<p>Two steel rails, always at the same distance (<b>1435 mm</b>), fixed to concrete sleepers resting on a bed of stones, the <b>ballast</b>.</p>',
          more: '<p>Steel wheel on a steel rail: the part that touches is as big as a coin! The rolling friction is very low, about 5 times less than for a car on asphalt. That is why the train uses very little energy for each passenger.</p>',
          shapes: [ { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, 0.43] }, { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, -0.43] },
            { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, 0.43], color: '#6b7280' }, { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, -0.43], color: '#6b7280' },
            { t: 'group', anim: { type: 'move', dir: [-1, 0, 0], amp: SL, wave: 'saw', rate: SPEED / SL }, shapes: sleepers },
            { t: 'extrude', d: 8.4, pts: [[-1.05, -0.36], [1.05, -0.36], [0.78, -0.1], [-0.78, -0.1]], rot: [0, 90, 0], color: '#a8a29e' } ] },
        { id: 'corrente', name: 'Electric current', label: 'Current', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>The current comes down from the wire through the pantograph, passes through the transformer and the converter, reaches the motors and then goes back to the power station through the <b>wheels and the rails</b>.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 5, m: 8, pos: CUR[0], anim: { type: 'path', pts: CUR, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'fari', name: 'Headlights', color: '#fef9c3', explode: [0.5, 0, 0],
          info: '<p>At the front the train has <b>white</b> headlights, at the back <b>red</b> lights: that way you can tell from far away which direction it is travelling.</p>',
          shapes: [-0.3, 0.3].map((z) => ({ t: 'box', s: [0.05, 0.07, 0.14], pos: [3.28, 0.95, z], rot: [0, 0, 70], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.8 } })) }
      ]
    },
    steps: [
      { icon: '🚄', title: 'An electric train', explode: 0,
        html: '<p>High-speed trains have no fuel tank: they take <b>electricity</b> from a wire above the tracks and use it to turn <b>electric motors</b> connected to the wheels.</p><p>That way they can travel at 300 km/h without polluting the air along the route.</p>' },
      { icon: '⚡', title: 'From the wire to the pantograph', focus: ['catenaria', 'pantografo', 'corrente'], explode: 0, view: { rx: 0.2, ry: -0.9 },
        html: '<p>The <b>pantograph</b> is a jointed arm on the roof: a spring pushes it against the <b>copper wire</b> of the overhead line, which has a voltage of 25,000 volts.</p><p class="tip">⚠️ Never climb on the wagons or go near railway wires: the current can "jump" even without touching!</p>' },
      { icon: '🔁', title: 'Transformer and converter', focus: ['trasformatore', 'convertitore', 'corrente'], explode: 0.4, view: { rx: 0.1, ry: -0.35 },
        html: '<p>The <b>transformer</b> lowers the voltage; the <b>converter</b>, full of electronics, decides how much current goes to the motors. It is like a car\'s accelerator.</p>' },
      { icon: '⚙️', title: 'The motors turn the wheels', focus: ['motori', 'ruote', 'carrelli'], explode: 0.35, view: { rx: 0.25, ry: -0.45 },
        html: '<p>One <b>electric motor</b> for each axle turns the wheels through gears. The wheels push back on the rails… and the train moves forward!</p><p>The <b>bogies</b> can swivel under the car body to follow the bends.</p>' },
      { icon: '🛤️', title: 'Steel on steel', focus: ['ruote', 'binari'], explode: 0, zoom: 1.2, view: { rx: 0.25, ry: -1.35 },
        html: '<p>Wheels and rails are made of very hard <b>steel</b>: they hardly deform and the friction is very low. Moving a tonne by train takes much less energy than by lorry.</p><p>The <b>flange</b> on the inside of the wheels stops the train leaving the track.</p>' },
      { icon: '🛑', title: 'Braking… and recovering energy', focus: ['freni', 'motori', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.6 },
        html: '<p>To brake, the <b>motors</b> become <b>generators</b>: the motion turns back into electricity and is sent into the wire. Then the <b>disc brakes</b> step in.</p><p class="tip">📏 A train at 300 km/h needs more than 3 km to stop: that is why it can\'t brake at the last moment!</p>' },
      { icon: '🧑‍✈️', title: 'In the cab and the aerodynamic nose', focus: ['cabina', 'cassa', 'fari'], explode: 0, view: { rx: 0.2, ry: -1.0 },
        html: '<p>In the <b>cab</b> the driver watches speed, brakes and signals on the screens. The train has no steering wheel: the tracks steer it.</p><p>The long, smooth <b>nose</b> cuts through the air: at high speed, beating air resistance is the biggest effort.</p>' }
    ],
    facts: [
      { icon: '🚂', title: 'The first Italian train', html: 'The first Italian railway was the <b>Naples–Portici</b> line, opened in 1839: 7 km run by a steam locomotive.' },
      { icon: '🏁', title: 'Speed record', html: 'In 2007 a French train reached <b>574.8 km/h</b> on rails. The Japanese magnetic levitation train has passed 600 km/h.' },
      { icon: '🌱', title: 'The greenest', html: 'Per person and per kilometre, the train gives off up to <b>10 times less CO₂</b> than the car and many times less than the plane.' },
      { icon: '🔧', title: 'The "Frecce" trains', html: 'The Frecciarossa links Turin, Milan, Bologna, Florence, Rome and Naples: from Milan to Rome it takes about 3 hours, against over 6 hours in the past.' }
    ],
    quiz: [
      { type: 'mc', q: 'Where does a high-speed train get its energy from?', options: ['From a diesel tank', 'From an electric wire above the tracks', 'From solar panels on the roof', 'From coal'], answer: 1, explain: 'The pantograph picks up the current from the overhead line (catenary).' },
      { type: 'mc', q: 'What is the jointed arm on the roof of the train called?', options: ['Pantograph', 'Bogie', 'Transformer', 'Flange'], answer: 0, explain: 'The pantograph slides along the wire and brings the current into the train.' },
      { type: 'tf', q: 'When it brakes, the train can send electricity back into the line.', answer: true, explain: 'The motors work as generators: this is regenerative braking.' },
      { type: 'mc', q: 'What stops the wheels from leaving the track?', options: ['A magnet', 'The flange sticking out of the wheels', 'The driver with the steering wheel', 'The catenary'], answer: 1, explain: 'The flange on the inner side of the wheel keeps the train on the rails.' },
      { type: 'mc', q: 'Why does the train use little energy for each passenger?', options: ['Because it goes slowly', 'Because steel wheels and steel rails have very little friction', 'Because it has no motors', 'Because it is as light as a bike'], answer: 1, explain: 'Steel on steel: rolling friction is very low and the train carries lots of people together.' },
      { type: 'order', q: 'Put the journey of the current in order', items: ['Overhead line wire', 'Pantograph', 'Transformer', 'Converter', 'Motors', 'Wheels and rails'], explain: 'From the wire to the pantograph, then the transformer and converter, the motors and finally the return through the wheels and rails.' }
    ]
  });
})();
