/* Il razzo a due stadi con capsula (modello generico ispirato ai lanciatori reali). Asse verticale = y. */
(function () {
  /* serbatoio con fondi bombati (profilo di rivoluzione) */
  const tank = (r, h) => ({ t: 'lathe', n: 28, pts: [[0, -h / 2 - r * 0.5], [r * 0.55, -h / 2 - r * 0.42], [r * 0.85, -h / 2 - r * 0.22], [r, -h / 2], [r, h / 2], [r * 0.85, h / 2 + r * 0.22], [r * 0.55, h / 2 + r * 0.42], [0, h / 2 + r * 0.5]] });
  const ring5 = [[0, 0], [0.3, 0], [-0.3, 0], [0, 0.3], [0, -0.3]];
  const bell = (s) => ({ t: 'lathe', ds: true, n: 24, pts: [[0.07 * s, 0], [0.09 * s, -0.08 * s], [0.14 * s, -0.25 * s], [0.19 * s, -0.42 * s]] });
  const fin = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [{ t: 'extrude', d: 0.05, pts: [[0.55, 0.9], [0.55, 0], [1.05, -0.12], [1.05, 0.25]], color: '#1f2937' }] });
  const flame = (x, z) => ({ t: 'group', pos: [x, -0.72, z], anim: [{ type: 'scale', axis: 'y', from: 1, to: 1.25, wave: 'sin01', rate: 7, phase: (x + z) * 3, pivot: [0, 0.55, 0] }], shapes: [
    { t: 'cone', r: 0.19, h: 1.1, n: 16, rot: [180, 0, 0], color: '#f97316', alpha: 0.82 },
    { t: 'cone', r: 0.1, h: 0.75, n: 12, rot: [180, 0, 0], pos: [0, 0.17, 0], color: '#fde047' }
  ] });

  LIBRARY({
    lang: 'en',
    id: 'razzo',
    title: 'The rocket',
    intro: 'To get into space you have to travel at <b>28,000 km/h</b>! The rocket burns tonnes of fuel and pushes super-hot gases downwards: that is how it goes up. Take it apart stage by stage.',
    model: {
      rx: 0.12, ry: -0.5, speed: 0.6, height: 520, bg: 'sky',
      parts: [
        { id: 'stadio-1', name: 'First stage', color: '#f8fafc', explode: [0, -1.5, 0],
          info: '<p>This is the biggest and heaviest part: it holds lots of fuel and the most powerful engines. It works for the first <b>2–3 minutes</b>, then it separates and falls away.</p>',
          more: '<p>At liftoff the first stage has to lift the whole rocket, which can weigh hundreds of tonnes. Some modern first stages fly back and <b>land standing up</b> so they can be used again!</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 3.6, n: 36, pos: [0, 1.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 3.5, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 0.12, 0], color: '#111827' }, { t: 'lathe', n: 36, ds: true, pts: [[0.55, 0], [0.62, -0.3]], color: '#334155' } ].concat([45, 135, 225, 315].map(fin)) },
        { id: 'ossidante-1', name: 'Oxygen tank (1st stage)', label: 'Liquid oxygen', color: '#7dd3fc', pos: [0, 2.6, 0], explode: [-1.1, -1.5, 0],
          info: '<p>It holds <b>liquid oxygen</b>, which is freezing cold: −183 °C! There is no air in space, so the rocket has to carry its own oxygen as well to burn the fuel.</p>',
          more: '<p>The oxygen needed for burning is called the <b>oxidiser</b>. To stay liquid it must stay below −183 °C: that is why the tanks are insulated and you can see ice on the skin of the rocket.</p>',
          shapes: [ tank(0.48, 1.3) ] },
        { id: 'carburante-1', name: 'Fuel tank (1st stage)', label: 'Fuel', color: '#fb923c', pos: [0, 1.05, 0], explode: [1.1, -1.5, 0],
          info: '<p>It holds the <b>fuel</b>, for example refined kerosene (similar to aeroplane fuel) or liquid methane.</p>',
          shapes: [ tank(0.48, 0.75), { t: 'cyl', r: 0.05, h: 2.6, n: 10, pos: [0.25, 0.7, 0.25], color: '#94a3b8' } ] },
        { id: 'motori-1', name: '1st stage engines', label: 'Engines', color: '#9ca3af', pos: [0, -0.02, 0], explode: [0, -1.7, 0],
          info: '<p>In the engines, powerful <b>pumps</b> push fuel and oxygen into the <b>combustion chamber</b>, where they burn at more than 3000 °C.</p>',
          more: '<p>The turbopumps spin at tens of thousands of turns per minute: they could empty a swimming pool in a few seconds! The engines can also tilt a little to <b>steer</b> the rocket.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.08, n: 36, pos: [0, 0.2, 0], color: '#475569' } ].concat(ring5.map(([x, z]) => ({ t: 'group', pos: [x, 0, z], shapes: [
            { t: 'cyl', r: 0.085, h: 0.22, n: 16 }, { t: 'box', s: [0.08, 0.12, 0.08], pos: [0.1, 0.06, 0], color: '#64748b' } ] }))) },
        { id: 'ugelli-1', name: 'Nozzles', color: '#475569', pos: [0, -0.12, 0], explode: [0, -1.85, 0],
          info: '<p>These are the big "bells" under the engines. The hot gas comes out squeezed and then spreads out inside the nozzle, <b>speeding up</b> to over 10,000 km/h.</p>',
          more: '<p>The bell shape (<b>de Laval</b> nozzle) turns the heat of the gases into speed. The faster the gases come out, the more push the rocket gets.</p>',
          shapes: ring5.map(([x, z]) => Object.assign(bell(1), { pos: [x, 0, z] })) },
        { id: 'fiamma', name: 'Jet of hot gases', label: 'Jet', color: '#f97316', explode: [0, -1.85, 0],
          info: '<p>The rocket pushes the gases <b>downwards</b>, and the gases push the rocket <b>upwards</b>: this is the principle of action and reaction.</p>',
          shapes: ring5.map(([x, z]) => flame(x, z)) },
        { id: 'stadio-2', name: 'Second stage', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>It lights up after the first stage has separated. It works in a vacuum, with almost no air, and carries the payload all the way to <b>orbit</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 2.1, n: 36, pos: [0, 4.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.18, n: 36, pos: [0, 3.84, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.12, n: 36, pos: [0, 5.8, 0], color: '#cbd5e1' } ] },
        { id: 'ossidante-2', name: 'Oxygen tank (2nd stage)', label: 'Oxygen 2', color: '#7dd3fc', pos: [0, 5.2, 0], explode: [-1.0, 0, 0],
          info: '<p>Liquid oxygen for the second stage: a smaller tank, because now the rocket is much lighter.</p>', shapes: [ tank(0.46, 0.45) ] },
        { id: 'carburante-2', name: 'Fuel tank (2nd stage)', label: 'Fuel 2', color: '#fb923c', pos: [0, 4.35, 0], explode: [1.0, 0, 0],
          info: '<p>Fuel for the second stage. Often <b>liquid hydrogen</b> is used, which is very light but freezing cold (−253 °C).</p>', shapes: [ tank(0.46, 0.25) ] },
        { id: 'motore-2', name: '2nd stage engine', label: 'Engine 2', color: '#94a3b8', pos: [0, 3.78, 0], explode: [0, -0.45, 0],
          info: '<p>A single engine with a <b>very long nozzle</b>: in a vacuum the gases can spread out more and push better.</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.2, n: 16, pos: [0, 0.1, 0] }, Object.assign(bell(1.9), { pos: [0, 0, 0], color: '#64748b' }) ] },
        { id: 'modulo-servizio', name: 'Service module', color: '#e5e7eb', pos: [0, 6.18, 0], explode: [0, 0.8, 0],
          info: '<p>This is the capsule\'s "cellar": it holds air to breathe, water, batteries and small engines for manoeuvring in space.</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 0.6, n: 36 }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [0.85, 0, 0], color: '#1e3a8a' }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [-0.85, 0, 0], color: '#1e3a8a' },
            { t: 'cone', r: 0.12, h: 0.18, n: 12, pos: [0, -0.38, 0], rot: [180, 0, 0], color: '#475569' } ] },
        { id: 'capsula', name: 'Crew capsule', label: 'Capsule', color: '#cbd5e1', pos: [0, 6.5, 0], explode: [0, 1.3, 0],
          info: '<p>This is where the <b>astronauts</b> travel. On the way back it re-enters the atmosphere protected by a <b>heat shield</b> and comes down with parachutes.</p>',
          more: '<p>During re-entry the air in front of the capsule becomes red-hot: over 2500 °C! The heat shield slowly wears away and carries the heat off with it.</p>',
          shapes: [ { t: 'cyl', r: 0.5, r2: 0.2, h: 0.75, n: 36, pos: [0, 0.375, 0] }, { t: 'cyl', r: 0.5, h: 0.05, n: 36, pos: [0, -0.02, 0], color: '#78350f' },
            { t: 'box', s: [0.12, 0.12, 0.02], pos: [0, 0.45, 0.385], rot: [-22, 0, 0], color: '#0f172a', decal: 1 } ] },
        { id: 'torre', name: 'Launch escape tower', label: 'Launch escape tower', color: '#ef4444', pos: [0, 7.25, 0], explode: [0, 1.9, 0],
          info: '<p>This is a small emergency rocket: if something goes wrong at liftoff, it <b>yanks the capsule away</b> and carries it far off in a few seconds.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [0.08, 0.27, 0], rot: [0, 0, -8] }, { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [-0.08, 0.27, 0], rot: [0, 0, 8] },
            { t: 'cyl', r: 0.08, h: 0.45, n: 16, pos: [0, 0.75, 0] }, { t: 'cone', r: 0.08, h: 0.2, n: 16, pos: [0, 1.07, 0] } ] }
      ]
    },
    steps: [
      { icon: '⛽', title: 'Filling up: fuel and oxygen', focus: ['ossidante-1', 'carburante-1', 'ossidante-2', 'carburante-2'], explode: 0.4,
        html: '<p>Almost the whole rocket is <b>tank</b>! To burn, you need two ingredients: <b>fuel</b> and <b>oxygen</b>. On Earth the oxygen is in the air, but in space there is none: the rocket carries it with it, liquid and freezing cold.</p>' },
      { icon: '🔥', title: 'Ignition!', focus: ['motori-1', 'ugelli-1', 'fiamma'], explode: 0, view: { rx: -0.1, ry: -0.5 },
        html: '<p>The pumps push fuel and oxygen into the <b>combustion chamber</b>. They burn at more than 3000 °C and turn into super-hot gases that want to escape.</p><p>The <b>nozzles</b> make them shoot out very fast, downwards.</p>' },
      { icon: '🎈', title: 'Action and reaction', focus: ['fiamma', 'ugelli-1', 'stadio-1'], explode: 0,
        html: '<p>Have you ever let go of an inflated balloon? The air comes out one way and the balloon flies the other way. The rocket does the same!</p><p class="tip">🍎 This is <b>Newton\'s third law</b>: for every action there is an equal and opposite reaction. You don\'t need air to "push against": it works in a vacuum too.</p>' },
      { icon: '✂️', title: 'The first stage separates', focus: ['stadio-1', 'ossidante-1', 'carburante-1', 'motori-1', 'ugelli-1', 'fiamma', 'stadio-2'], explode: 1,
        html: '<p>After about 2–3 minutes the first stage\'s tanks are empty. Carrying them along would just be useless weight: the first stage <b>detaches</b> and falls back.</p><p>That way the rest of the rocket is much lighter and speeds up more easily.</p>' },
      { icon: '🌍', title: 'Into orbit with the second stage', focus: ['stadio-2', 'motore-2', 'ossidante-2', 'carburante-2'], explode: 0.6,
        html: '<p>The <b>second stage</b> lights up and pushes up to about <b>28,000 km/h</b>. At that speed the capsule keeps "falling" around the Earth without ever touching it: it is in <b>orbit</b>!</p>' },
      { icon: '👩‍🚀', title: 'The capsule and the return', focus: ['capsula', 'modulo-servizio', 'torre'], explode: 0.5, view: { rx: 0.3, ry: -0.4 },
        html: '<p>The <b>launch escape tower</b> protects the astronauts at liftoff and is then jettisoned. In space the <b>service module</b> provides air, water and power.</p><p>To come home, the capsule re-enters the atmosphere with its <b>heat shield</b> and comes down with parachutes.</p>' }
    ],
    facts: [
      { icon: '🌕', title: 'The giant Saturn V', html: 'The rocket that took people to the Moon in 1969 was 110 metres tall, like a 36-storey building, and weighed almost 3000 tonnes.' },
      { icon: '🇮🇹', title: 'An Italian rocket', html: '<b>Vega</b> is a European launcher designed and built in Italy, at Colleferro (Rome). It carries small satellites into orbit.' },
      { icon: '🔁', title: 'Rockets that land', html: 'Since 2015 some first stages have come back and landed upright on a platform, even in the middle of the sea, to be used again.' },
      { icon: '🏎️', title: 'Faster than a bullet', html: 'To stay in low orbit you need about 7.8 km per second: you would get from Milan to Rome in just over a minute!' }
    ],
    quiz: [
      { type: 'mc', q: 'Why does the rocket carry liquid oxygen with it?', options: ['So the astronauts can breathe at liftoff', 'Because there is no air in space to burn the fuel', 'To cool the engines', 'To make the blue flame'], answer: 1, explain: 'Without oxygen the fuel doesn\'t burn, and there is no air in space: the rocket has to carry the oxidiser too.' },
      { type: 'mc', q: 'Which law explains how a rocket flies?', options: ['Archimedes\' principle', 'Newton\'s third law (action and reaction)', 'Galileo\'s law of gravity', 'Ohm\'s law'], answer: 1, explain: 'The gases pushed downwards push the rocket upwards: action and reaction.' },
      { type: 'tf', q: 'A rocket needs air to push itself forward.', answer: false, explain: 'The rocket pushes against its own gases, not against the air: it works in a vacuum too, even better.' },
      { type: 'mc', q: 'Why does the first stage separate?', options: ['Because it is broken', 'Because its tanks are empty and it would just be useless weight', 'To make room for the astronauts', 'To slow down'], answer: 1, explain: 'Getting rid of the empty weight lets the rest of the rocket speed up more.' },
      { type: 'mc', q: 'What is the capsule\'s heat shield for?', options: ['To protect it from the heat of re-entering the atmosphere', 'To shelter it from the rain', 'To make it float', 'To produce electricity'], answer: 0, explain: 'When re-entering at high speed, the air in front of the capsule gets extremely hot: the shield protects the astronauts.' }
    ]
  });
})();
