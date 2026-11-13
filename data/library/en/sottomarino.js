/* Il sottomarino (diesel-elettrico). Asse lungo x: prua a +x, poppa a -x. Ciclo (1): 0–0.5 le casse si riempiono, 0.5–1 si svuotano. */
(function () {
  const ROT = [0, 0, -90]; // porta l'asse y delle primitive lungo x
  const hull = [[0, -3.25], [0.18, -3.05], [0.42, -2.55], [0.6, -1.85], [0.7, -1.0], [0.72, 0], [0.72, 2.1], [0.64, 2.65], [0.45, 3.0], [0.2, 3.2], [0, 3.27]];
  const blades = Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [0.42, 0.025, 0.16], pos: [0.27, 0, 0], rot: [30, 0, 0] }] }));
  const tankWater = (x, w) => ({ t: 'group', pos: [x, -0.62, 0], anim: { type: 'scale', axis: 'y', from: 0.04, to: 1, wave: 'window', win: [0.02, 0.98], ramp: 0.45 }, shapes: [
    { t: 'box', s: [w, 1.2, 1.15], pos: [0, 0.6, 0] }
  ] });

  LIBRARY({
    lang: 'en',
    id: 'sottomarino',
    title: 'The submarine',
    intro: 'A submarine can <b>float</b> like a ship or <b>dive</b> underwater and come back up. The trick? Changing its own weight by filling big tanks with water or air.',
    model: {
      rx: 0.22, ry: -0.5, speed: 0.12, height: 460, bg: 'sea', floor: false,
      parts: [
        { id: 'scafo-esterno', name: 'Outer hull', color: '#cbd5e1', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>This is the submarine\'s "coat", with a streamlined shape like a fish or a whale, so it can slip through the water without much effort.</p>',
          shapes: [ { t: 'lathe', n: 32, rot: ROT, pts: hull } ] },
        { id: 'scafo-resistente', name: 'Pressure hull', color: '#94a3b8', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>It is a big, thick steel tube where the crew lives. It must withstand the enormous <b>pressure</b> of the water at depth.</p>',
          more: '<p>Every 10 metres of depth, the pressure rises by about 1 atmosphere. At 300 metres, a weight of about 30 kg presses on every square centimetre of the hull!</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 4.2, n: 32, rot: ROT, pos: [0, 0, 0] } ] },
        { id: 'casse-zavorra', name: 'Ballast tanks', label: 'Ballast tanks', color: '#7dd3fc', alpha: 0.35, explode: [0, -0.9, 0],
          info: '<p>These are big "tanks" between the two hulls, at the bow and at the stern. They can be filled with <b>water</b> (to go down) or with <b>air</b> (to go up).</p>',
          shapes: [ { t: 'box', s: [0.75, 1.24, 1.2], pos: [2.55, 0, 0] }, { t: 'box', s: [0.6, 1.0, 1.0], pos: [-2.4, 0, 0] } ] },
        { id: 'acqua-zavorra', name: 'Water in the tanks', label: 'Water', color: '#0284c7', alpha: 0.7, explode: [0, -0.9, 0],
          info: '<p>When the valves open, sea water flows into the tanks: the submarine becomes <b>heavier</b> and sinks.</p>',
          shapes: [ tankWater(2.55, 0.72), Object.assign(tankWater(-2.4, 0.57), { pos: [-2.4, -0.5, 0], shapes: [{ t: 'box', s: [0.57, 1.0, 0.95], pos: [0, 0.5, 0] }] }) ] },
        { id: 'aria-compressa', name: 'Compressed-air cylinders', label: 'Compressed air', color: '#22c55e', pos: [0.2, 0.36, 0], explode: [0, 1.1, 0.6],
          info: '<p>They hold air squeezed to a very high pressure. To come up, the air is blown into the ballast tanks and <b>pushes the water out</b>.</p>',
          shapes: [-0.45, 0, 0.45].map((x) => ({ t: 'cyl', r: 0.07, h: 0.38, n: 14, rot: ROT, pos: [x, 0, -0.18] })) },
        { id: 'torretta', name: 'Conning tower', color: '#1f2937', pos: [0.95, 0.68, 0], explode: [0, 0.9, 0],
          info: '<p>The tower above the hull. When the submarine is on the surface, people look around from here; the periscope and the antennas pass through it.</p>',
          shapes: [ { t: 'extrude', d: 0.3, pts: [[-0.5, 0], [0.48, 0], [0.38, 0.85], [-0.36, 0.85]], smooth: false }, { t: 'box', s: [0.25, 0.03, 0.9], pos: [0.12, 0.55, 0] } ] },
        { id: 'periscopio', name: 'Periscope', color: '#64748b', pos: [1.05, 1.45, 0], explode: [0, 1.3, 0], anim: { type: 'move', dir: [0, 1, 0], amp: 0.4, wave: 'sin01', rate: 0.5 },
          info: '<p>A long tube with two mirrors (or prisms) that lets you see above the water while staying below. Today many use a <b>camera</b> instead.</p>',
          more: '<p>Light comes in at the top, bounces off a mirror tilted at 45°, goes down the tube and a second mirror sends it to your eye. It is the same principle as the cardboard periscope you can build at home.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 0.9, n: 10 }, { t: 'box', s: [0.14, 0.12, 0.1], pos: [0.03, 0.48, 0], color: '#334155' }, { t: 'box', s: [0.01, 0.08, 0.07], pos: [0.105, 0.48, 0], color: '#38bdf8', decal: 1 } ] },
        { id: 'elica', name: 'Propeller', color: '#ca8a04', pos: [-3.3, 0, 0], rot: [0, 0, 90], explode: [-0.6, 0, 0], anim: { type: 'spin', axis: 'y', rate: 2 },
          info: '<p>As it turns, it pushes the water backwards, and the water pushes the submarine forwards. It has wide, slow blades to make <b>little noise</b>.</p>',
          shapes: [ { t: 'cone', r: 0.1, h: 0.25, n: 16, color: '#a16207' } ].concat(blades) },
        { id: 'timoni', name: 'Rudders', color: '#475569', explode: [-0.4, 0, 0],
          info: '<p>The "fins" of the tail. The vertical rudder turns the submarine right and left; the horizontal ones (the <b>diving planes</b>) point the bow up or down.</p>',
          shapes: [ { t: 'box', s: [0.4, 1.3, 0.05], pos: [-2.85, 0, 0], color: '#475569' },
            { t: 'group', pos: [-2.75, 0, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.25 }, shapes: [ { t: 'box', s: [0.4, 0.05, 1.5], color: '#334155' } ] } ] },
        { id: 'motore-elettrico', name: 'Electric motor', color: '#f59e0b', pos: [-1.75, 0, 0], explode: [0, 0, 1.1],
          info: '<p>It turns the propeller. Underwater it runs on electricity from the batteries: it needs no air and is silent.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.6, n: 24, rot: ROT }, { t: 'cyl', r: 0.045, h: 1.35, n: 10, rot: ROT, pos: [-0.95, 0, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2 } } ] },
        { id: 'diesel', name: 'Diesel engine and generator', label: 'Diesel engine', color: '#9a3412', pos: [-0.85, -0.05, 0], explode: [0, 0, 1.2],
          info: '<p>When the submarine is near the surface, the diesel engine takes in air through a tube (the <b>snorkel</b>) and makes electricity to recharge the batteries.</p>',
          more: '<p>The biggest submarines use a small <b>nuclear reactor</b> instead, which needs no air: they can stay underwater for months.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.45, 0.5] }, { t: 'cyl', r: 0.15, h: 0.3, n: 16, rot: ROT, pos: [0.42, 0, 0], color: '#b45309' } ] },
        { id: 'batterie', name: 'Batteries', color: '#16a34a', pos: [0.2, -0.36, 0], explode: [0, -1.0, 0.6],
          info: '<p>Lots of batteries at the bottom of the hull supply power to the electric motor, the lights and the instruments when sailing underwater.</p>',
          shapes: Array.from({ length: 10 }, (_, k) => ({ t: 'box', s: [0.18, 0.16, 0.22], pos: [-0.85 + (k % 5) * 0.21 + 0.4, 0, (k < 5 ? -0.13 : 0.13)] })) },
        { id: 'sala-controllo', name: 'Control room', label: 'Control room', color: '#e2e8f0', pos: [1.05, 0.05, 0], explode: [0, 0, 1.3],
          info: '<p>The submarine\'s "brain": from here the captain and the crew steer, check the depth and listen to the sonar.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.6] }, { t: 'box', s: [0.6, 0.18, 0.01], pos: [0, 0.08, 0.305], color: '#0f766e', decal: 1 }, { t: 'box', s: [0.08, 0.06, 0.01], pos: [-0.2, -0.12, 0.31], color: '#ef4444', decal: 1, anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 1.5 } } ] },
        { id: 'sonar', name: 'Sonar', color: '#facc15', alpha: 0.85, pos: [2.85, -0.05, 0], explode: [0.7, 0, 0],
          info: '<p>The submarine\'s "ears". It sends out a sound ("ping!") and listens for the <b>echo</b> bouncing off obstacles: from the time the echo takes, it works out how far away they are. Dolphins and bats do it too!</p>',
          more: '<p>In water, sound travels at about <b>1500 m/s</b>, more than 4 times faster than in air. If the echo comes back after 2 seconds, the obstacle is 1500 m away (the sound goes there and back).</p>',
          shapes: [ { t: 'sphere', r: 0.36, n: 12, scale: [1, 1, 1.15] },
            { t: 'group', anim: [{ type: 'move', dir: [1, 0, 0], amp: 2.2, wave: 'saw', rate: 0.6 }, { type: 'scale', from: 0.6, to: 2.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 }],
              shapes: [ { t: 'torus', R: 0.35, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#fef08a' } ] } ] }
      ]
    },
    steps: [
      { icon: '🛟', title: 'Floating', focus: ['casse-zavorra', 'scafo-esterno', 'torretta'], loop: [0, 0.02], explode: 0,
        html: '<p>When the <b>ballast tanks</b> are full of air, the submarine is lighter than the water it pushes aside: it <b>floats</b> like a ship.</p><p class="tip">🛁 This is <b>Archimedes\' principle</b>: water pushes an object upwards with a force equal to the weight of the water the object displaces.</p>' },
      { icon: '⬇️', title: 'Diving', focus: ['casse-zavorra', 'acqua-zavorra', 'timoni'], loop: [0, 0.5], explode: 0,
        html: '<p>The valves open: sea water <b>flows into the tanks</b> and drives the air out. The submarine becomes heavier and <b>sinks</b>.</p><p>The <b>diving planes</b> help it tilt and stop at the right depth.</p>' },
      { icon: '⬆️', title: 'Surfacing', focus: ['aria-compressa', 'acqua-zavorra', 'casse-zavorra'], loop: [0.5, 1], explode: 0,
        html: '<p>To go back up, the <b>compressed air</b> from the cylinders is blown into the tanks and pushes the water out. The submarine becomes lighter and <b>rises</b>.</p>' },
      { icon: '⚙️', title: 'Full speed ahead!', focus: ['elica', 'motore-elettrico', 'batterie', 'diesel'], explode: 0.45, view: { rx: 0.25, ry: -0.9 },
        html: '<p>The <b>batteries</b> power the <b>electric motor</b>, which turns the <b>propeller</b>. Near the surface, the <b>diesel engine</b> recharges the batteries.</p><p>The vertical rudder turns the sub right and left.</p>' },
      { icon: '🔊', title: 'Seeing without light', focus: ['sonar', 'periscopio', 'sala-controllo'], explode: 0.25, view: { rx: 0.2, ry: -0.3 },
        html: '<p>Deep down it is pitch dark. The <b>sonar</b> uses sound: it sends a "ping" and listens for the echo. Near the surface the <b>periscope</b> is raised to look outside.</p>' },
      { icon: '🧑‍✈️', title: 'Living down there', focus: ['scafo-resistente', 'sala-controllo'], explode: 0.2,
        html: '<p>The crew lives inside the <b>pressure hull</b>, which withstands the pressure of the water. Special machines make oxygen and remove carbon dioxide from the air.</p>' }
    ],
    facts: [
      { icon: '🐳', title: 'Inspired by nature', html: 'Bony fish have a <b>swim bladder</b>: by inflating or deflating it with gas they rise or sink, just like a submarine.' },
      { icon: '📏', title: 'Down to the abyss', html: 'In 1960 the bathyscaphe <b>Trieste</b>, designed by Auguste Piccard and built in Italy, dived into the Mariana Trench to almost 11,000 metres.' },
      { icon: '🐬', title: 'Like dolphins', html: 'Dolphins and bats use <b>echolocation</b>: they make sounds and listen to the echo to "see" in the dark.' },
      { icon: '📚', title: 'Twenty Thousand Leagues', html: 'In Jules Verne\'s novel (1870), Captain Nemo sails on the submarine <i>Nautilus</i>, long before real ones like it existed.' }
    ],
    quiz: [
      { type: 'mc', q: 'What makes the submarine go down?', options: ['Switching off the engine', 'Filling the ballast tanks with water', 'Raising the periscope', 'Switching on the sonar'], answer: 1, explain: 'The water in the tanks makes it heavier than the water it displaces, so it sinks.' },
      { type: 'mc', q: 'How does it come back up?', options: ['By blowing compressed air into the tanks to push the water out', 'By turning the propeller backwards', 'By opening the conning tower', 'By using the periscope'], answer: 0, explain: 'The air pushes the water out: the submarine becomes lighter and rises.' },
      { type: 'mc', q: 'Which principle explains floating?', options: ['Archimedes\' principle', 'Ohm\'s law', 'Pascal\'s principle', 'Newton\'s first law'], answer: 0, explain: 'A body in a liquid is pushed upwards by a force equal to the weight of the liquid it displaces.' },
      { type: 'tf', q: 'Sonar uses light to find obstacles.', answer: false, explain: 'Sonar uses sound and listens for the echo: underwater, light does not travel far.' },
      { type: 'num', q: 'Sound in water travels at 1500 m/s. If the echo comes back after 2 seconds, how many metres away is the obstacle?', answer: 1500, unit: 'm', explain: 'In 2 s the sound travels 3000 m, but that is there and back: 3000 ÷ 2 = 1500 m.' }
    ]
  });
})();
