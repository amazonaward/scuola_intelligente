/* Il motore elettrico a corrente continua (con spazzole), come quello dei giocattoli e dei ventilatori a pile.
   L'albero è lungo l'asse z (davanti = +z, dove c'è l'elica). Magnete N in alto, S in basso. Il rotore gira intorno a z. */
(function () {
  const TAU = Math.PI * 2, D = Math.PI / 180;
  /* settore di corona circolare nel piano XY, da a0 ad a1 gradi */
  const sector = (r0, r1, a0, a1, n) => {
    const o = [], i = []; for (let k = 0; k <= n; k++) { const a = (a0 + (a1 - a0) * k / n) * D; o.push([r1 * Math.cos(a), r1 * Math.sin(a)]); i.push([r0 * Math.cos(a), r0 * Math.sin(a)]); }
    return o.concat(i.reverse());
  };
  const SPIN = { type: 'spin', axis: 'z', dir: -1 };
  /* un polo del rotore: gambo + "cappello" ad arco; orientato verso +y e poi ruotato */
  const pole = (a) => ({ t: 'group', rot: [0, 0, a], shapes: [
    { t: 'box', s: [0.2, 0.42, 1.0], pos: [0, 0.33, 0], color: '#6b7280' },
    { t: 'extrude', d: 1.0, pts: sector(0.5, 0.64, 52, 128, 10), color: '#6b7280' } ] });
  const coil = (a, ph) => ({ t: 'group', rot: [0, 0, a], shapes: [
    { t: 'box', s: [0.36, 0.3, 0.86], pos: [0, 0.3, 0], color: '#c2410c', anim: { type: 'blink', color: '#fb923c', wave: 'sin01', rate: 1, phase: ph } },
    ...[-0.32, -0.16, 0, 0.16, 0.32].map((z) => ({ t: 'box', s: [0.37, 0.31, 0.012], pos: [0, 0.3, z], color: '#9a3412' })),
    { t: 'box', s: [0.37, 0.12, 1.0], pos: [0, 0.26, 0], color: '#b45309' } ] });
  const commSeg = (a) => ({ t: 'extrude', d: 0.32, pts: sector(0.12, 0.2, a + 8, a + 112, 8), color: '#d97706' });
  const fieldLine = (x) => Array.from({ length: 2 }, (_, k) => ({ t: 'group', pos: [x, 0.62, 0.0], anim: { type: 'move', dir: [0, -1, 0], amp: 1.24, wave: 'saw', rate: 0.5, phase: k / 2 + x },
    shapes: [{ t: 'cone', r: 0.05, h: 0.12, n: 10, rot: [180, 0, 0] }] }));
  const BAT = [[0.95, -1.55, 0.95], [0.95, -1.2, 1.05], [0.45, -0.1, 1.05], [0.3, 0, 1.05], [0.22, 0.0, 1.05], [0, 0.18, 1.05], [-0.22, 0, 1.05], [-0.3, 0, 1.05], [-0.45, -0.1, 1.05], [-0.95, -1.2, 1.05], [-0.95, -1.55, 0.95]];

  LIBRARY({
    lang: 'en',
    id: 'motore-elettrico',
    title: 'The electric motor',
    intro: 'The electric motor turns <b>electric current</b> into <b>movement</b>, using magnets. It is in fans, drills, washing machines, toys and electric cars. Watch how the magnets push and pull!',
    model: {
      rx: 0.22, ry: -0.65, speed: 0.35, height: 470,
      parts: [
        { id: 'carcassa', name: 'Casing', color: '#94a3b8', alpha: 0.2, explode: [0, 0, 0],
          info: '<p>This is the metal "can" that holds and protects the motor. It keeps the magnets in place and gives their magnetic field an easy path.</p>',
          more: '<p>The casing is made of <b>iron</b>: the magnetic field "prefers" to travel through iron rather than through air, so the magnetic circuit closes and the motor is stronger.</p>',
          shapes: [ { t: 'tube', r: 1.02, ri: 0.96, h: 1.5, n: 40, rot: [90, 0, 0] }, { t: 'cyl', r: 1.02, h: 0.05, n: 40, rot: [90, 0, 0], pos: [0, 0, -0.77] },
            { t: 'cyl', r: 0.13, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.84], color: '#cbd5e1', alpha: 1 },
            { t: 'box', s: [1.3, 0.06, 0.6], pos: [0, -1.05, 0], color: '#475569', alpha: 1 } ] },
        { id: 'magnete-n', name: 'Magnet (North pole)', label: 'Magnet N', color: '#dc2626', explode: [0, 0.7, 0],
          info: '<p>A curved <b>magnet</b>, fixed to the casing, with its <b>North</b> pole facing the centre. It never moves: it is the <b>stator</b> (the part that "stays still").</p>',
          more: '<p>Magnets always have two poles. <b>Like</b> poles push each other away, <b>unlike</b> poles attract each other. Modern motors use <b>neodymium</b> magnets, which are small but very strong.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 45, 135, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, 0.83, 0.61], color: '#fef2f2', decal: 1 } ] },
        { id: 'magnete-s', name: 'Magnet (South pole)', label: 'Magnet S', color: '#2563eb', explode: [0, -0.7, 0],
          info: '<p>Opposite it there is another magnet with its <b>South</b> pole facing the centre. Between the two magnets there is an invisible <b>magnetic field</b> running from North to South.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 225, 315, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, -0.83, 0.61], color: '#eff6ff', decal: 1 } ] },
        { id: 'campo', name: 'Magnetic field', label: 'Magnetic field', color: '#a855f7', alpha: 0.75, explode: [0, 0, -0.9],
          info: '<p>The arrows show the <b>magnetic field</b>: an "invisible force" that leaves the North pole and enters the South pole. You can see it with iron filings on a sheet of paper over a magnet!</p>',
          shapes: [-0.42, 0, 0.42].map((x) => ({ t: 'pipe', r: 0.012, n: 5, pts: [[x, 0.7, 0], [x, -0.7, 0]], alpha: 0.4 })).concat(fieldLine(-0.42), fieldLine(0), fieldLine(0.42)) },
        { id: 'rotore', name: 'Rotor (iron core)', label: 'Rotor', color: '#6b7280', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>This is the part that <b>spins</b>. It has three iron "arms", each wrapped in a coil of copper wire.</p>',
          more: '<p>The core is made of lots of thin sheets of iron glued together (<b>laminations</b>), so it heats up less. With three poles the motor always starts, whatever position it stopped in.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 1.0, n: 20, rot: [90, 0, 0], color: '#6b7280' }, pole(0), pole(120), pole(240) ] },
        { id: 'bobine', name: 'Copper coils (electromagnets)', label: 'Coils', color: '#c2410c', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>These are bundles of <b>copper wire</b> wound many times. When current flows through them they become <b>magnets</b> (electromagnets): when it is off, they attract nothing.</p>',
          more: '<p>An electric current always creates a magnetic field around the wire (<b>Ørsted</b> discovered this in 1820 when he saw a compass needle move). Winding the wire many times around the iron makes the field much stronger. The wire is covered with an insulating varnish, which is why it looks red-orange.</p>',
          shapes: [ coil(0, 0), coil(120, 1 / 3), coil(240, 2 / 3) ] },
        { id: 'albero', name: 'Shaft', color: '#d1d5db', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>This is the steel "rod" at the centre of the rotor. It spins together with it and sticks out of the motor to turn whatever we want: a propeller, a wheel, a gear.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 2.75, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.32] }, { t: 'box', s: [0.02, 0.12, 0.6], pos: [0.055, 0, 1.4], color: '#94a3b8' } ] },
        { id: 'commutatore', name: 'Commutator', color: '#d97706', pos: [0, 0, 0.88], explode: [0, 0, 1.25], anim: SPIN,
          info: '<p>This is a little copper ring cut into <b>three segments</b>, each connected to a coil. As it turns, it changes which coils receive the current and in which direction.</p>',
          more: '<p>Without the commutator the rotor would stop after half a turn, with the coil\'s North pole in front of the magnet\'s South pole. The commutator <b>reverses the current</b> at just that moment: the pole changes and the rotor is pushed forward again.</p>',
          shapes: [0, 120, 240].map(commSeg).concat([{ t: 'cyl', r: 0.11, h: 0.34, n: 16, rot: [90, 0, 0], color: '#1f2937' }]) },
        { id: 'spazzole', name: 'Brushes', color: '#1f2937', pos: [0, 0, 0.88], explode: [0, 0.4, 1.25],
          info: '<p>Two small blocks of <b>carbon</b> pressed against the commutator by a little spring. As they rub against it, they carry the current from the battery to the spinning coils.</p>',
          more: '<p>Carbon (graphite) conducts electricity well and is "slippery". But rubbing wears it down: <b>brushless</b> motors in drones and electric cars use electronics instead to switch the current, and they last longer.</p>',
          shapes: [-1, 1].map((sx) => ({ t: 'group', shapes: [
            { t: 'box', s: [0.14, 0.12, 0.14], pos: [sx * 0.27, 0, 0] }, { t: 'box', s: [0.2, 0.18, 0.2], pos: [sx * 0.42, 0, 0], color: '#94a3b8', alpha: 0.6 },
            { t: 'pipe', r: 0.01, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 20 }, (_, i) => [sx * (0.34 + i * 0.008), 0.035 * Math.cos(i * 1.2), 0.035 * Math.sin(i * 1.2)]) } ] })) },
        { id: 'calotta', name: 'End cap and bearings', label: 'End cap', color: '#f8fafc', alpha: 0.3, pos: [0, 0, 0.82], explode: [0, 0, 2.0],
          info: '<p>This is the plastic "lid" that closes the motor and holds the brushes. In the middle there is a <b>bearing</b> that lets the shaft turn without friction.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.06, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.4] }, { t: 'tube', r: 1.0, ri: 0.94, h: 0.4, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.2] },
            { t: 'tube', r: 0.14, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af', alpha: 1 },
            { t: 'box', s: [0.12, 0.06, 0.1], pos: [0.7, 0, 0.46], color: '#d97706', alpha: 1 }, { t: 'box', s: [0.12, 0.06, 0.1], pos: [-0.7, 0, 0.46], color: '#d97706', alpha: 1 } ] },
        { id: 'pila', name: 'Battery and wires', label: 'Battery', color: '#111827', explode: [0, -0.6, 0.5],
          info: '<p>The <b>battery</b> pushes the current through the wires: it leaves the <b>+</b> pole, goes through the motor and returns to the <b>−</b> pole. If you swap the wires, the motor turns the other way!</p>',
          more: '<p>The higher the battery\'s voltage (volts), the stronger the current and the faster the motor spins. An AA battery gives 1.5 V; the battery of an electric car about 400 V.</p>',
          shapes: [ { t: 'cyl', r: 0.2, h: 1.6, n: 24, rot: [0, 0, 90], pos: [0, -1.6, 0.95] }, { t: 'cyl', r: 0.205, h: 0.5, n: 24, rot: [0, 0, 90], pos: [0.55, -1.6, 0.95], color: '#f59e0b' },
            { t: 'cyl', r: 0.07, h: 0.08, n: 14, rot: [0, 0, 90], pos: [0.84, -1.6, 0.95], color: '#d1d5db' }, { t: 'cyl', r: 0.15, h: 0.02, n: 20, rot: [0, 0, 90], pos: [-0.81, -1.6, 0.95], color: '#d1d5db' },
            { t: 'box', s: [0.1, 0.1, 0.01], pos: [0.55, -1.6, 1.16], color: '#111827', decal: 1 }, { t: 'box', s: [0.03, 0.1, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 }, { t: 'box', s: [0.1, 0.03, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#ef4444', pts: [[0.9, -1.6, 0.95], [0.95, -1.2, 1.05], [0.75, -0.4, 1.3], [0.7, 0, 1.3]] },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#111827', pts: [[-0.85, -1.6, 0.95], [-0.95, -1.2, 1.05], [-0.75, -0.4, 1.3], [-0.7, 0, 1.3]] } ] },
        { id: 'corrente', name: 'Electric current', label: 'Current', color: '#facc15', noLabel: true, explode: [0, 0, 0.5],
          info: '<p>The current (the yellow dots) leaves the battery, enters through one brush, passes through a coil of the rotor and leaves through the other brush, going back to the battery.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.035, n: 5, m: 8, pos: BAT[0], color: '#facc15', anim: { type: 'path', pts: BAT, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'elica', name: 'Propeller (the work!)', label: 'Propeller', color: '#22c55e', pos: [0, 0, 1.62], explode: [0, 0, 1.4], anim: SPIN,
          info: '<p>Here is what the motor is for: it makes something turn! Here it is a propeller, like in a fan. Electrical energy has become <b>movement energy</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.14, n: 20, rot: [90, 0, 0], color: '#15803d' } ].concat([0, 120, 240].map((a) => ({ t: 'group', rot: [0, 0, a], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.45, 0], scale: [0.16, 0.38, 0.03], rot: [0, 25, 0] } ] }))) }
      ]
    },
    steps: [
      { icon: '⚡', title: 'From current to movement', explode: 0,
        html: '<p>An electric motor turns a <b>shaft</b> using only electricity and magnets. It burns nothing, makes no smoke and hardly gets warm.</p><p>It has a fixed part, the <b>stator</b> (the magnets), and a part that spins, the <b>rotor</b> (the coils).</p>' },
      { icon: '🧲', title: 'Magnets: they pull and they push', focus: ['magnete-n', 'magnete-s', 'campo'], explode: 0.2, view: { rx: 0.05, ry: -0.1 },
        html: '<p>Every magnet has a <b>North</b> pole and a <b>South</b> pole. <b>Unlike poles attract</b>, <b>like poles repel</b>.</p><p>Between the two magnets of the motor there is an invisible <b>magnetic field</b> (the purple arrows) that goes from North to South.</p><p class="tip">🧪 Try it with two fridge magnets: turn one around and you feel them push apart or stick together.</p>' },
      { icon: '🌀', title: 'Coils that become magnets', focus: ['bobine', 'rotore', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.5 },
        html: '<p>The <b>coils</b> are copper wires wound many times around the iron of the rotor. When current flows through them they become <b>electromagnets</b>: magnets that you can switch on and off!</p><p class="tip">🔩 You can build one: wind a wire around a nail and connect it to a battery. The nail will pick up paper clips.</p>' },
      { icon: '🔄', title: 'Pushes and pulls: the rotor turns', focus: ['rotore', 'bobine', 'magnete-n', 'magnete-s'], explode: 0, view: { rx: 0.0, ry: 0.0 },
        html: '<p>The pole of a coil is <b>attracted</b> by the magnet opposite it with the opposite pole, and <b>repelled</b> by the one with the same pole. This is how the rotor starts to turn.</p>' },
      { icon: '🔀', title: 'Commutator and brushes: the trick', focus: ['commutatore', 'spazzole', 'corrente', 'pila'], explode: 0.3, zoom: 1.1, view: { rx: 0.25, ry: -0.3 },
        html: '<p>If nothing happened, the coil would stop in front of the magnet that attracts it. But at just that moment the <b>commutator</b>, turning under the <b>brushes</b>, <b>reverses the current</b>: the coil\'s pole changes and it is pushed forward again.</p><p>This way the rotor never stops as long as there is current.</p>' },
      { icon: '🌬️', title: 'The shaft does the work', focus: ['albero', 'elica', 'calotta'], explode: 0, view: { rx: 0.25, ry: -0.9 },
        html: '<p>The <b>shaft</b> sticks out of the motor and turns the <b>propeller</b>: electrical energy has become movement energy. Instead of the propeller there could be a wheel, the washing machine\'s pulley or the bit of a drill.</p>' },
      { icon: '🔁', title: 'And the other way round: the dynamo', explode: 0.5, view: { rx: 0.3, ry: -0.7 },
        html: '<p>If you turn the shaft of a motor like this by hand, current comes out of the brushes: it becomes a <b>generator</b> (a dynamo)! It is the same principle as power stations and the dynamo on a bike.</p><p class="tip">🚗 Electric cars use it when they brake: the motor becomes a generator and recharges the battery.</p>' }
    ],
    facts: [
      { icon: '🧭', title: 'A compass gone crazy', html: 'In 1820 Hans Christian Ørsted noticed that a compass needle moved near a wire carrying current: he had discovered that <b>electricity and magnetism</b> are linked.' },
      { icon: '🇮🇹', title: 'Galileo Ferraris', html: 'The engineer <b>Galileo Ferraris</b>, from Turin, invented the rotating magnetic field motor in 1885, the "father" of today\'s factory motors.' },
      { icon: '🏠', title: 'How many motors at home?', html: 'Fridge, washing machine, vacuum cleaner, fan, hairdryer, blender, disc player… A home often has more than <b>30 electric motors</b>!' },
      { icon: '🔋', title: 'Super efficient', html: 'A good electric motor turns more than <b>90%</b> of the energy it receives into movement; a petrol engine about 30%.' }
    ],
    quiz: [
      { type: 'mc', q: 'Two magnets with their North poles facing each other…', options: ['attract each other', 'push each other away', 'do nothing', 'become a single magnet'], answer: 1, explain: 'Like poles repel, unlike poles attract.' },
      { type: 'mc', q: 'What does a copper coil become when current flows through it?', options: ['A light bulb', 'An electromagnet', 'A battery', 'An insulator'], answer: 1, explain: 'The current creates a magnetic field: the coil becomes a magnet that can be switched on and off.' },
      { type: 'mc', q: 'What is the commutator for?', options: ['To cool the motor', 'To reverse the current in the coils at the right moment', 'To make noise', 'To hold the magnets still'], answer: 1, explain: 'By reversing the current, the coil\'s pole changes, so the rotor keeps being pushed.' },
      { type: 'tf', q: 'If you swap the two wires of the battery, the motor turns the other way.', answer: true, explain: 'The current flows in the opposite direction, the poles of the coils are reversed and so is the direction of rotation.' },
      { type: 'mc', q: 'What is the part of the motor that spins called?', options: ['Stator', 'Rotor', 'Casing', 'End cap'], answer: 1, explain: 'The rotor spins; the stator (with the magnets) stays still.' },
      { type: 'mc', q: 'What happens if you turn the shaft of an electric motor by hand?', options: ['It breaks', 'It produces current: it becomes a generator', 'The battery becomes magnetised', 'Nothing'], answer: 1, explain: 'The motor also works backwards: this is the principle of dynamos and power stations.' }
    ]
  });
})();
