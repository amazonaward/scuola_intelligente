/* The helicopter (single main rotor with tail rotor). Nose toward +x, up = +y, the main rotor turns around y above the cabin.
   The main rotor turns anticlockwise seen from above; the fuselage would tend to turn the opposite way (torque). */
(function () {
  const D = Math.PI / 180, MX = 0.25, HUB = 2.08, BL = 3.1;
  const blade = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [
    { t: 'box', s: [BL, 0.035, 0.24], pos: [BL / 2 + 0.2, 0, 0], rot: [6, 0, 0], color: '#1f2937', div: 1 },
    { t: 'box', s: [0.25, 0.04, 0.245], pos: [BL + 0.1, 0, 0], rot: [6, 0, 0], color: '#facc15' },
    { t: 'box', s: [0.4, 0.06, 0.1], pos: [0.28, 0, 0], color: '#6b7280' } ] });
  const skid = (z) => [ { t: 'pipe', r: 0.045, n: 10, curve: true, pts: [[-0.9, 0.0, z], [0.9, 0.0, z], [1.25, 0.06, z], [1.4, 0.2, z]] },
    { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.6, 0.0, z], [0.6, 0.25, z * 0.9], [0.6, 0.45, z * 0.6]] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[-0.5, 0.0, z], [-0.5, 0.25, z * 0.9], [-0.5, 0.45, z * 0.6]] } ];
  /* air pushed downward by the rotor */
  const DOWN = Array.from({ length: 16 }, (_, k) => { const a = (k / 16) * 360 * D, r = 0.9 + (k % 3) * 0.7; return { t: 'sphere', r: 0.05, n: 5, m: 8, pos: [MX + r * Math.cos(a), HUB + 0.1, r * Math.sin(a)],
    anim: [{ type: 'move', dir: [0.12 * Math.cos(a), -1, 0.12 * Math.sin(a)], amp: 2.4, wave: 'saw', rate: 0.8, phase: (k * 0.29) % 1 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.8, phase: (k * 0.29) % 1 }] }; });
  const arrow = (pos, rot, len, color) => ({ t: 'group', pos, rot, shapes: [ { t: 'cyl', r: 0.05, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.13, h: 0.28, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    lang: 'en',
    id: 'elicottero',
    title: 'The helicopter',
    intro: 'A helicopter can take off vertically, <b>hover in the air</b> and fly in any direction. The secret? Its "wings" spin! The <b>rotor</b> turns long blades that push the air downward.',
    model: {
      rx: 0.3, ry: -0.55, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'fusoliera', name: 'Fuselage', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>This is the body of the helicopter: inside are the pilots, the passengers or, in rescue helicopters, the stretcher and the doctors.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, pos: [0.35, 0.95, 0], scale: [1.35, 0.72, 0.68] },
            { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, 0.685], color: '#f8fafc', decal: 1 }, { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, -0.685], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, 0.655], color: '#7dd3fc', decal: 1 }, { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, -0.655], color: '#7dd3fc', decal: 1 },
            { t: 'cyl', r: 0.2, r2: 0.13, h: 0.5, n: 18, rot: [0, 0, 90], pos: [-0.95, 1.05, 0] } ] },
        { id: 'cabina', name: 'Cockpit', label: 'Cockpit', color: '#bae6fd', alpha: 0.4, explode: [0.6, 0, 0],
          info: '<p>A large plexiglass "bubble" at the front: the pilots can see forward, to the sides and even under their feet, very useful for landing in difficult places.</p>',
          more: '<p>The pilot uses three controls: the <b>collective</b> lever (on the left, to go up and down), the <b>cyclic</b> stick (between the legs, to go forward, backward and sideways) and the <b>pedals</b> (to turn the nose, by controlling the tail rotor).</p>',
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 22, pos: [1.15, 1.02, 0], scale: [0.62, 0.55, 0.6] },
            { t: 'box', s: [0.3, 0.35, 0.3], pos: [0.95, 0.75, 0.18], color: '#1f2937', alpha: 1 }, { t: 'box', s: [0.08, 0.4, 0.3], pos: [0.82, 0.95, 0.18], color: '#1f2937', alpha: 1 },
            { t: 'pipe', r: 0.02, n: 6, pts: [[1.25, 0.6, 0.18], [1.2, 0.9, 0.18]], color: '#111827', alpha: 1 } ] },
        { id: 'rotore', name: 'Main rotor', label: 'Main rotor', color: '#1f2937', pos: [MX, HUB, 0], explode: [0, 1.2, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 },
          info: '<p>Four long <b>blades</b> spin very fast. Each blade is shaped like an aircraft wing: as it turns it "cuts" through the air, pushes it downward and receives an upward push, the <b>lift</b>.</p>',
          more: '<p>An aeroplane must run along the runway so that its wings receive air; the helicopter instead spins the wings themselves, so it can create lift <b>from a standstill</b>. The blade tips reach about 700 km/h, just under the speed of sound!</p>',
          shapes: [ { t: 'cyl', r: 0.16, h: 0.16, n: 20, color: '#475569' }, { t: 'cone', r: 0.12, h: 0.14, n: 16, pos: [0, 0.15, 0], color: '#64748b' } ].concat([0, 90, 180, 270].map(blade)) },
        { id: 'piatto', name: 'Swashplate', label: 'Swashplate', color: '#9ca3af', pos: [MX, 1.82, 0], explode: [0.8, 0.8, 0.6],
          info: '<p>It is the most ingenious part: two discs on the rotor shaft. By tilting them or raising them, rods change the <b>pitch of the blades</b> as they turn.</p>',
          more: '<p>If the swashplate <b>rises</b>, all the blades tilt more together (<b>collective</b> pitch): more lift, and the helicopter climbs. If the swashplate <b>tilts</b>, each blade changes its angle during each turn (<b>cyclic</b> pitch): the rotor disc tilts and the helicopter flies in that direction.</p>',
          anim: { type: 'swing', axis: 'z', amp: 7, rate: 0.25 },
          shapes: [ { t: 'cyl', r: 0.3, h: 0.05, n: 24, color: '#6b7280' },
            { t: 'group', pos: [0, 0.06, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 }, shapes: [ { t: 'cyl', r: 0.27, h: 0.05, n: 24, color: '#cbd5e1' },
              ...[0, 90, 180, 270].map((a) => ({ t: 'cyl', r: 0.015, h: 0.24, n: 6, pos: [0.24 * Math.cos(a * D), 0.14, -0.24 * Math.sin(a * D)], color: '#f59e0b' })) ] } ] },
        { id: 'albero', name: 'Rotor shaft and transmission', label: 'Transmission', color: '#64748b', explode: [0, 0.5, 0.8],
          info: '<p>The engine turns very fast, but the rotor must turn more slowly. The <b>transmission</b>, a box full of gears, reduces the speed and carries the movement to the main rotor and to the tail rotor.</p>',
          more: '<p>The turbine engine turns at about 30,000 rpm, the main rotor at about 400: the transmission reduces the speed by about 75 times, increasing the force (torque) by the same ratio.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.3, 0.5], pos: [MX, 1.55, 0] }, { t: 'cyl', r: 0.06, h: 0.42, n: 12, pos: [MX, 1.86, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2.2 } },
            { t: 'cyl', r: 0.03, h: 2.8, n: 10, rot: [0, 0, 90], pos: [-1.5, 1.3, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 6 } } ] },
        { id: 'motore', name: 'Turbine engine', label: 'Turbine', color: '#94a3b8', pos: [-0.45, 1.55, 0], explode: [-0.3, 0.6, -0.9],
          info: '<p>The engine is a <b>turbine</b>, similar to a small aircraft engine: it sucks in air, compresses it, burns it with fuel, and the hot gases turn a bladed wheel connected to the transmission.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.75, n: 20, rot: [0, 0, 90] }, { t: 'cyl', r: 0.12, h: 0.25, n: 16, rot: [0, 0, 90], pos: [-0.48, 0.04, 0], color: '#57534e' },
            { t: 'group', pos: [0.38, 0, 0], anim: { type: 'spin', axis: 'x', rate: 8 }, shapes: [0, 45, 90, 135].map((a) => ({ t: 'box', s: [0.02, 0.28, 0.04], rot: [a, 0, 0], color: '#475569' })) },
            { t: 'sphere', r: 0.09, n: 6, m: 10, pos: [-0.62, 0.06, 0], color: '#f97316', alpha: 0.6, anim: { type: 'blink', fade: true, wave: 'sin01', rate: 3 } } ] },
        { id: 'trave-coda', name: 'Tail boom', label: 'Tail', color: '#dc2626', explode: [-0.6, 0, 0],
          info: '<p>A long tube that holds the <b>tail rotor</b> far from the centre: the farther away it is, the more easily it can counteract the rotation of the fuselage, like a long lever.</p>',
          shapes: [ { t: 'cyl', r: 0.19, r2: 0.08, h: 2.9, n: 18, rot: [0, 0, 90], pos: [-2.05, 1.18, 0] },
            { t: 'extrude', d: 0.06, pts: [[-3.1, 1.2], [-3.5, 1.2], [-3.78, 1.95], [-3.52, 1.95]], color: '#f8fafc' },
            { t: 'box', s: [0.32, 0.04, 0.8], pos: [-2.9, 1.2, 0], color: '#f8fafc' } ] },
        { id: 'rotore-coda', name: 'Tail rotor', label: 'Tail rotor', color: '#f8fafc', pos: [-3.58, 1.62, 0.1], explode: [-0.5, 0, 0.6], anim: { type: 'spin', axis: 'z', rate: 8 },
          info: '<p>The small propeller at the tail pushes the air sideways and stops the fuselage from spinning on itself. With the pedals the pilot changes its thrust to <b>turn the nose</b>.</p>',
          more: '<p>When the engine turns the rotor in one direction, the fuselage "wants" to turn the opposite way: this is the <b>reaction torque</b> (Newton\'s third law). Some helicopters solve the problem with two rotors turning in opposite directions, without a tail rotor.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 0.08, n: 14, rot: [90, 0, 0], color: '#475569' },
            { t: 'box', s: [0.06, 0.75, 0.02], rot: [0, 12, 0], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, 0.33, 0], color: '#ef4444' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, -0.33, 0], color: '#ef4444' } ] },
        { id: 'pattini', name: 'Landing skids', label: 'Skids', color: '#6b7280', explode: [0, -0.6, 0],
          info: '<p>Instead of wheels, many helicopters have two <b>skids</b>: simple, light, and suitable for landing even on meadows, snow or rocks.</p>',
          shapes: skid(0.62).concat(skid(-0.62)) },
        { id: 'aria', name: 'Air pushed downward', label: 'Air', color: '#38bdf8', noLabel: true, explode: [0, 0, 0],
          info: '<p>The rotor pushes a huge amount of air downward (the "rotor wash"): you feel it very strongly if you are near a helicopter that is landing.</p>',
          shapes: DOWN },
        { id: 'forze', name: 'Lift and torque', label: 'Forces', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>The <b>green</b> arrow is the lift of the rotor. The curved <b>purple</b> arrow shows how the fuselage would tend to turn (torque); the <b>blue</b> arrow at the tail is the thrust of the tail rotor that keeps it straight.</p>',
          shapes: [ arrow([MX, 2.35, 0], [0, 0, 0], 0.8, '#22c55e'),
            { t: 'torus', R: 0.95, r: 0.035, n: 30, m: 6, arc: 250, pos: [MX, 0.95, 0], rot: [0, 40, 0], color: '#a855f7' },
            { t: 'cone', r: 0.1, h: 0.25, n: 12, pos: [MX + 0.95 * Math.cos(40 * D), 0.95, 0.95 * Math.sin(40 * D)], rot: [90, 0, 0], color: '#a855f7' },
            arrow([-3.58, 1.62, -0.1], [-90, 0, 0], 0.7, '#3b82f6') ] }
      ]
    },
    steps: [
      { icon: '🚁', title: 'Wings that spin', explode: 0,
        html: '<p>The helicopter has no fixed wings like the aeroplane: its wings are the long <b>rotor blades</b>, which turn above the cabin. So it can climb vertically, stay still in the air (<b>hovering</b>) and land almost anywhere.</p>' },
      { icon: '⬆️', title: 'The rotor pushes the air down', focus: ['rotore', 'aria', 'forze'], explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Each blade is shaped like a wing. Turning at about 400 revolutions per minute, the blades push the air <b>downward</b>; in reaction, the air pushes the rotor <b>upward</b>: this is the <b>lift</b>.</p><p class="tip">🍁 Have you ever seen a maple seed fall while spinning? It is a small natural helicopter!</p>' },
      { icon: '🎛️', title: 'The swashplate: climbing and moving forward', focus: ['piatto', 'rotore', 'albero'], explode: 0.3, zoom: 1.2, view: { rx: 0.25, ry: -0.7 },
        html: '<p>The pilot does not change the speed of the rotor: they change the <b>pitch of the blades</b>. The <b>swashplate</b> does this while they turn.</p><p>All the blades more tilted → more lift → the helicopter <b>climbs</b>. The swashplate tilted forward → the rotor tilts → the helicopter <b>moves forward</b>.</p>' },
      { icon: '🔄', title: 'Why the tail rotor is needed', focus: ['rotore-coda', 'trave-coda', 'forze', 'fusoliera'], explode: 0, view: { rx: 0.9, ry: -0.3 },
        html: '<p>When the engine turns the rotor one way, the fuselage tends to turn the other way (purple arrow): action and reaction!</p><p>The <b>tail rotor</b> pushes the air sideways and keeps the fuselage straight. With the <b>pedals</b> the pilot changes this push and turns the nose.</p>' },
      { icon: '🔥', title: 'Engine and transmission', focus: ['motore', 'albero', 'rotore-coda'], explode: 0.35, view: { rx: 0.25, ry: -1.0 },
        html: '<p>A <b>turbine</b> burns the fuel and spins very fast. The <b>transmission</b>, full of gears, slows the movement down and carries it to the main rotor and, through a long shaft inside the tail, to the tail rotor.</p>' },
      { icon: '🏔️', title: 'Cockpit, skids and rescue', focus: ['cabina', 'fusoliera', 'pattini'], explode: 0, view: { rx: 0.2, ry: -0.2 },
        html: '<p>The <b>bubble cockpit</b> gives a view in every direction, even downward. The <b>skids</b> allow it to rest on meadows, snow and rocks.</p><p>This is why helicopters are precious for <b>rescue</b> in the mountains and at sea, for fighting fires and for taking sick people to hospital.</p>' }
    ],
    facts: [
      { icon: '🎨', title: 'Leonardo\'s aerial screw', html: 'Around 1490 <b>Leonardo da Vinci</b> drew an "aerial screw": a spiral canvas propeller that was supposed to screw itself into the air. It is considered the ancestor of the helicopter.' },
      { icon: '🇮🇹', title: 'Italian helicopters', html: 'In Italy, near Varese, helicopters are built and exported all over the world, also used for mountain rescue and air ambulance services.' },
      { icon: '🔙', title: 'Backwards too', html: 'A helicopter can fly forward, backward and sideways, and it can spin on itself while staying in the same spot. No ordinary aeroplane can do that!' },
      { icon: '🪂', title: 'If the engine stops', html: 'If the engine shuts off, the rotor keeps turning, driven by the air rising past it as the helicopter descends (<b>autorotation</b>), and the pilot can land gently.' }
    ],
    quiz: [
      { type: 'mc', q: 'What keeps a helicopter in the air?', options: ['A balloon full of gas', 'The rotor blades pushing the air downward', 'The wheels', 'The tail rotor'], answer: 1, explain: 'The blades are spinning wings: they push the air downward and receive lift upward.' },
      { type: 'mc', q: 'What is the tail rotor for?', options: ['To make the helicopter climb', 'To stop the fuselage from spinning on itself', 'To cool the engine', 'To light up the landing area'], answer: 1, explain: 'It counteracts the reaction torque of the main rotor; with the pedals the pilot turns the nose.' },
      { type: 'tf', q: 'To climb, the pilot increases the pitch of all the blades together.', answer: true, explain: 'This is the collective pitch: more pitch, more lift.' },
      { type: 'mc', q: 'Which part changes the pitch of the blades while they turn?', options: ['The swashplate', 'The skids', 'The tail boom', 'The cockpit'], answer: 0, explain: 'The swashplate, with its rods, tilts the blades to climb and to move forward.' },
      { type: 'mc', q: 'What can a helicopter do that an aeroplane cannot?', options: ['Fly in the rain', 'Hover in the air', 'Fly at night', 'Carry people'], answer: 1, explain: 'Hovering is possible because the blades keep turning even when the helicopter is still.' }
    ]
  });
})();
