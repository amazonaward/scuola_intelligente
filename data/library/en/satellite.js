/* Il satellite (osservazione della Terra e telecomunicazioni). La Terra è in basso (sfondo "orbit"). */
(function () {
  const cells = (side) => {
    const s = [];
    for (let k = 0; k < 3; k++) {
      const x = side * (1.05 + k * 1.02);
      s.push({ t: 'box', s: [0.96, 0.03, 0.9], pos: [x, 0, 0], color: '#1e3a8a' });
      for (let i = 1; i < 4; i++) s.push({ t: 'box', s: [0.012, 0.008, 0.9], pos: [x - 0.48 + i * 0.24, 0.02, 0], color: '#93c5fd', decal: 1 });
      for (let j = 1; j < 4; j++) s.push({ t: 'box', s: [0.96, 0.008, 0.012], pos: [x, 0.02, -0.45 + j * 0.225], color: '#93c5fd', decal: 1 });
    }
    s.push({ t: 'cyl', r: 0.035, h: 0.5, n: 10, rot: [0, 0, 90], pos: [side * 0.55, 0, 0], color: '#cbd5e1' });
    return s;
  };
  const thr = (x, y, z, rot, ph) => ({ t: 'group', pos: [x, y, z], rot, shapes: [
    { t: 'cone', r: 0.07, h: 0.12, n: 12, rot: [180, 0, 0], color: '#6b7280' },
    { t: 'cone', r: 0.06, h: 0.3, n: 10, rot: [180, 0, 0], pos: [0, -0.2, 0], color: '#a5f3fc', alpha: 0.85, anim: { type: 'blink', fade: true, wave: 'window', from: ph, to: ph + 0.08, ramp: 0.3 } }
  ] });

  LIBRARY({
    lang: 'en',
    id: 'satellite',
    title: 'The satellite',
    intro: 'An artificial satellite orbits the Earth hundreds or thousands of kilometres up. It photographs the planet and brings us TV, the Internet and the <b>GPS</b> signal. But how does it avoid falling?',
    model: {
      rx: 0.28, ry: -0.6, speed: 0.25, height: 480, bg: 'orbit',
      parts: [
        { id: 'corpo', name: 'Body (structure)', label: 'Body', color: '#d4a017', alpha: 0.42, explode: [0, 0, 0],
          info: '<p>This is the "box" that holds the instruments. It is wrapped in golden sheets, the <b>thermal blanket</b>, which protects it from the Sun\'s heat and the cold of the shade.</p>',
          more: '<p>In the Sun a satellite can reach +120 °C, in the Earth\'s shadow −150 °C. The thermal blanket is made of lots of very thin layers of plastic coated with metal that reflect heat.</p>',
          shapes: [ { t: 'box', s: [1, 1.2, 1] }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, 0.6, 0], color: '#a16207', alpha: 1 }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, -0.6, 0], color: '#a16207', alpha: 1 } ] },
        { id: 'pannelli', name: 'Solar panels', color: '#1e3a8a', explode: [0, 0, 0], anim: { type: 'swing', axis: 'x', amp: 25, rate: 0.35 },
          info: '<p>They turn sunlight into <b>electricity</b>. They turn slowly to keep facing the Sun, like sunflowers.</p>',
          more: '<p>They are made of silicon or gallium arsenide <b>photovoltaic cells</b>. During launch they are folded up and open only in orbit.</p>',
          shapes: cells(1).concat(cells(-1)) },
        { id: 'batterie', name: 'Batteries', color: '#16a34a', pos: [-0.22, -0.3, 0.1], explode: [-0.4, -0.3, 1.5],
          info: '<p>They store the energy from the panels and use it when the satellite passes into the <b>Earth\'s shadow</b>, where the Sun doesn\'t reach.</p>',
          shapes: [0, 1, 2].map((k) => ({ t: 'box', s: [0.14, 0.32, 0.4], pos: [k * 0.17 - 0.17, 0, 0] })) },
        { id: 'serbatoio', name: 'Propellant tank', label: 'Tank', color: '#9ca3af', pos: [0, 0.15, -0.05], explode: [0, 0.4, -1.5],
          info: '<p>A sphere full of fuel for the small engines. When it runs out, the satellite can no longer correct its orbit.</p>',
          shapes: [ { t: 'sphere', r: 0.3, n: 12 } ] },
        { id: 'computer', name: 'Onboard computer', label: 'Computer', color: '#1e40af', pos: [0.25, -0.25, 0.15], explode: [0.4, -0.3, 1.5],
          info: '<p>This is the satellite\'s brain: it controls all the instruments, carries out the commands received from Earth and decides on its own if there are problems.</p>',
          more: '<p>Up there <b>radiation</b> can flip bits in the memory: space computers are special, tougher and often doubled (one is a spare).</p>',
          shapes: [ { t: 'box', s: [0.32, 0.3, 0.36] }, { t: 'box', s: [0.05, 0.05, 0.02], pos: [0.08, 0.08, 0.18], color: '#22c55e', anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'antenna-parabolica', name: 'Dish antenna', label: 'Dish antenna', color: '#f1f5f9', pos: [0, -0.62, 0.55], explode: [0, -0.6, 0.6],
          anim: { type: 'swing', axis: 'x', amp: 8, rate: 0.2 },
          info: '<p>It sends photos and data to Earth and receives commands, using <b>radio waves</b> that travel at the speed of light: 300,000 km per second!</p>',
          more: '<p>The dish shape concentrates the radio waves into a narrow beam, like the mirror of a torch concentrates light. That way the signal travels far using little energy.</p>',
          shapes: [ { t: 'cyl', r: 0.03, h: 0.25, n: 8, pos: [0, -0.1, 0], color: '#94a3b8' },
            { t: 'lathe', ds: true, n: 28, rot: [180, 0, 0], pos: [0, -0.25, 0], pts: [[0.02, 0], [0.2, 0.024], [0.35, 0.074], [0.5, 0.15], [0.62, 0.23]] },
            { t: 'cyl', r: 0.012, h: 0.42, n: 6, pos: [0, -0.43, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.05, r2: 0.03, h: 0.08, n: 10, pos: [0, -0.64, 0], color: '#475569' } ] },
        { id: 'antenna', name: 'Omnidirectional antenna', label: 'Antenna', color: '#e5e7eb', pos: [0.3, 0.6, 0.3], explode: [0.3, 0.6, 0.3],
          info: '<p>A small antenna that talks in <b>all directions</b>: it is used for emergency messages even when the satellite is pointing the wrong way.</p>',
          shapes: [ { t: 'cyl', r: 0.015, h: 0.6, n: 6, pos: [0, 0.3, 0] }, { t: 'sphere', r: 0.04, n: 6, pos: [0, 0.62, 0], color: '#ef4444' } ] },
        { id: 'fotocamera', name: 'Camera (telescope)', label: 'Camera', color: '#334155', pos: [-0.28, -0.75, -0.25], explode: [-0.6, -0.8, -0.4],
          info: '<p>A small telescope that looks at the Earth: it photographs clouds, seas, forests and cities. It is used for <b>weather forecasts</b> and for monitoring fires and glaciers.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.45, n: 24 }, { t: 'cyl', r: 0.12, h: 0.02, n: 24, pos: [0, -0.23, 0], color: '#0ea5e9' }, { t: 'tube', r: 0.19, ri: 0.16, h: 0.1, n: 24, pos: [0, -0.2, 0], color: '#111827' } ] },
        { id: 'sensore-stellare', name: 'Star tracker', label: 'Star tracker', color: '#475569', pos: [-0.3, 0.68, -0.3], explode: [-0.4, 0.7, -0.4],
          info: '<p>This is a small camera that looks at the <b>stars</b>: by recognising them, the satellite works out which way it is pointing. Just like sailors in ancient times!</p>',
          shapes: [ { t: 'box', s: [0.18, 0.14, 0.18] }, { t: 'cyl', r: 0.07, r2: 0.13, h: 0.2, n: 16, pos: [0, 0.17, 0], color: '#111827', ds: true, open: true } ] },
        { id: 'propulsori', name: 'Thrusters', color: '#6b7280', explode: [0, 0, 0],
          info: '<p>Small rocket engines that make short "puffs" of gas: they correct the orbit and turn the satellite to the right position.</p>',
          more: '<p>Some satellites use <b>ion engines</b>: they push very gently, but for whole months, using much less fuel.</p>',
          shapes: [ thr(0.45, -0.62, 0.45, [0, 0, 0], 0.1), thr(-0.45, -0.62, -0.45, [0, 0, 0], 0.35), thr(-0.45, 0.62, 0.45, [180, 0, 0], 0.6), thr(0.45, 0.62, -0.45, [180, 0, 0], 0.85) ] },
        { id: 'radiatore', name: 'Radiator', color: '#f8fafc', pos: [0, 0, -0.52], explode: [0, 0, -0.7],
          info: '<p>A white panel that throws the heat produced by the instruments out into space. In a vacuum there is no air to cool things down: heat leaves only as <b>radiation</b>.</p>',
          shapes: [ { t: 'box', s: [0.9, 1.0, 0.03] } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'Why doesn\'t it fall?', explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>In fact a satellite <b>is always falling</b> towards the Earth! But it moves sideways so fast (about 27,000 km/h in low orbit) that the round Earth "slips away" beneath it. So it keeps going around: this is the <b>orbit</b>.</p><p class="tip">🍎 Newton imagined it with a cannon on top of a very tall mountain: the harder you fire, the farther the ball lands… until it goes all the way around the world!</p>' },
      { icon: '☀️', title: 'Energy from the Sun', focus: ['pannelli', 'batterie'], explode: 0.5,
        html: '<p>The <b>solar panels</b> turn light into electricity and turn to follow the Sun. The <b>batteries</b> store energy for when the satellite passes into the Earth\'s shadow.</p>' },
      { icon: '📡', title: 'Talking with the Earth', focus: ['antenna-parabolica', 'antenna', 'computer'], explode: 0.4, view: { rx: -0.2, ry: -0.6 },
        html: '<p>The <b>dish antenna</b> sends data and photos to Earth with radio waves and receives commands from the control stations. The <b>onboard computer</b> carries everything out.</p>' },
      { icon: '🧭', title: 'Which way am I pointing?', focus: ['sensore-stellare', 'computer', 'propulsori'], explode: 0.3,
        html: '<p>The <b>star tracker</b> photographs the stars and works out the orientation. If needed, the <b>thrusters</b> make small puffs to turn the satellite or correct the orbit, using fuel from the <b>tank</b>.</p>' },
      { icon: '📸', title: 'Its job', focus: ['fotocamera', 'antenna-parabolica'], explode: 0.2, view: { rx: -0.35, ry: -0.3 },
        html: '<p>Every satellite has a task: photographing the Earth (weather, environment), broadcasting TV and Internet, or sending the <b>GPS</b> signal that tells your phone where you are.</p><p class="tip">🛰️ For GPS you need at least 4 satellites visible at the same time.</p>' },
      { icon: '🌡️', title: 'Not too hot, not too cold', focus: ['corpo', 'radiatore'], explode: 0.3,
        html: '<p>The <b>golden blanket</b> reflects sunlight, and the white <b>radiator</b> throws out the heat from the instruments. That way the temperature inside stays right for the electronics.</p>' }
    ],
    facts: [
      { icon: '🔴', title: 'Sputnik 1', html: 'The first artificial satellite was launched in 1957 by the Soviet Union: it was a 58 cm sphere that only went "beep beep".' },
      { icon: '🇮🇹', title: 'Italy in space', html: 'In 1964 Italy became the third country in the world to put its own satellite into orbit: <b>San Marco 1</b>.' },
      { icon: '🔢', title: 'Thousands up there', html: 'Today more than <b>10,000 active satellites</b> orbit the Earth, and the number grows every year.' },
      { icon: '🌐', title: 'Geostationary orbit', html: 'At 36,000 km up a satellite goes around together with the Earth and seems to stand still in the sky: that is why TV dishes don\'t move.' }
    ],
    quiz: [
      { type: 'mc', q: 'Where does a satellite get its energy?', options: ['From a petrol engine', 'From solar panels', 'From a cable connected to the Earth', 'From the solar wind pushing it'], answer: 1, explain: 'Solar panels turn sunlight into electricity; the batteries store it for the hours of shade.' },
      { type: 'tf', q: 'A satellite in orbit is actually falling towards the Earth all the time.', answer: true, explain: 'It falls, but it moves sideways so fast that the Earth curves away beneath it: that is why it keeps going around.' },
      { type: 'mc', q: 'What is the star tracker for?', options: ['To photograph stars for astronomers', 'To work out which way the satellite is pointing', 'To measure the temperature', 'To produce electricity'], answer: 1, explain: 'By recognising the stars, the satellite works out its own orientation.' },
      { type: 'mc', q: 'What does the satellite use to send data to Earth?', options: ['Radio waves', 'A cable', 'Smoke signals', 'Sound'], answer: 0, explain: 'Radio waves travel through a vacuum at the speed of light; sound, on the other hand, does not travel through a vacuum.' },
      { type: 'mc', q: 'Why is the satellite wrapped in golden sheets?', options: ['To look nicer', 'To protect it from heat and cold', 'To make it weigh more', 'To reflect the GPS signals'], answer: 1, explain: 'The thermal blanket reflects the Sun\'s heat and keeps the internal heat in when the satellite is in the shade.' }
    ]
  });
})();
