/* Il pannello solare fotovoltaico: a sinistra il modulo su un cavalletto (strati che si separano con Esplodi),
   a destra una cella "ingrandita" per vedere come la luce mette in moto gli elettroni e accende una lampadina. */
(function () {
  const TILT = 30, PC = [0, 1.7, 0], D = Math.PI / 180;
  const N = [0, Math.cos(TILT * D), Math.sin(TILT * D)];               // normale del pannello
  const along = (k) => [0, N[1] * k, N[2] * k];
  const W = (x, y, z) => [x, PC[1] + y * Math.cos(TILT * D) - z * Math.sin(TILT * D), y * Math.sin(TILT * D) + z * Math.cos(TILT * D)];
  const P = (shapes) => [ { t: 'group', pos: PC, rot: [TILT, 0, 0], shapes } ];
  const CS = 0.33, NX = 6, NZ = 10, PW = NX * CS, PL = NZ * CS;
  const cells = [];
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [CS - 0.02, 0.012, CS - 0.02], pos: [-PW / 2 + CS * (i + 0.5), 0, -PL / 2 + CS * (j + 0.5)] });
  for (let i = 0; i < NX; i++) for (const o of [-0.08, 0.08]) cells.push({ t: 'box', s: [0.014, 0.004, PL - 0.04], pos: [-PW / 2 + CS * (i + 0.5) + o, 0.008, 0], color: '#e2e8f0', decal: 1 });
  for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [PW - 0.04, 0.003, 0.006], pos: [0, 0.008, -PL / 2 + CS * (j + 0.5)], color: '#64748b', decal: 1 });
  const SUN = [-3.4, 5.3, 1.6];
  const photonsPanel = [[-0.6, -1.0], [0.5, -0.3], [-0.2, 0.6], [0.7, 1.2], [-0.8, 0.2], [0.2, -1.4]].map(([x, z], k) => {
    const end = W(x, 0.03, z); return { t: 'sphere', r: 0.06, n: 6, m: 8, pos: SUN, color: '#fde047', anim: [ { type: 'path', pts: [SUN, end], wave: 'saw', rate: 0.6, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.1, rate: 0.6, phase: k / 6 } ] };
  });
  /* cella ingrandita */
  const ZX = 3.7, ZY = 0.9;                                           // base del blocco
  const TOPN = ZY + 0.95, JUN = ZY + 0.72;
  const CIRCUIT = [[ZX + 0.55, TOPN + 0.05, 0], [ZX + 0.55, TOPN + 0.5, 0], [ZX + 1.25, TOPN + 0.9, 0], [ZX + 1.45, TOPN + 0.9, 0], [ZX + 1.55, TOPN + 0.5, 0], [ZX + 1.55, ZY - 0.05, 0], [ZX + 0.85, ZY - 0.05, 0]];
  const electrons = [];
  for (let k = 0; k < 12; k++) {
    const x = ZX - 0.5 + (k % 4) * 0.3, z = -0.3 + (k % 3) * 0.3;
    const pts = [[x, JUN, z], [x, TOPN, z], [ZX + 0.55, TOPN + 0.05, z * 0.2]].concat(CIRCUIT.slice(1), [[ZX + 0.2, ZY - 0.05, 0], [x, ZY + 0.05, z], [x, JUN - 0.05, z]]);
    electrons.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#2563eb', anim: { type: 'path', pts, wave: 'saw', rate: 0.22, phase: k / 12 } });
  }
  const holes = Array.from({ length: 8 }, (_, k) => { const x = ZX - 0.6 + (k % 4) * 0.35, z = -0.35 + (k % 2) * 0.6; return { t: 'sphere', r: 0.05, n: 6, m: 8, pos: [x, JUN - 0.05, z], color: '#f87171', anim: [ { type: 'path', pts: [[x, JUN - 0.05, z], [x + 0.05, ZY + 0.08, z]], wave: 'saw', rate: 0.45, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.45, phase: k / 8 } ] }; });
  const photonsCell = Array.from({ length: 6 }, (_, k) => { const x = ZX - 0.6 + k * 0.24, z = -0.2 + (k % 3) * 0.2; return { t: 'sphere', r: 0.055, n: 6, m: 8, pos: [x - 0.6, TOPN + 1.4, z], color: '#fde047', anim: [ { type: 'path', pts: [[x - 0.6, TOPN + 1.4, z], [x, JUN, z]], wave: 'saw', rate: 0.7, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.92, ramp: 0.08, rate: 0.7, phase: k / 6 } ] }; });
  const cellOnPanel = W(-PW / 2 + CS * 5.5, 0.02, -PL / 2 + CS * 6.5);

  LIBRARY({
    lang: 'en',
    id: 'pannello-solare',
    title: 'The solar panel',
    intro: 'A <b>photovoltaic</b> solar panel turns sunlight directly into <b>electricity</b>, with no noise, no smoke and no moving parts. The secret is a special material: <b>silicon</b>.',
    model: {
      rx: 0.32, ry: -0.35, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'sole', name: 'Sun', color: '#fbbf24', explode: [-0.6, 0.4, 0],
          info: '<p>The Sun sends an enormous amount of energy to Earth in the form of light: in one hour more arrives than humanity uses in a whole year!</p>',
          shapes: [ { t: 'sphere', r: 0.6, n: 16, m: 24, pos: SUN }, { t: 'sphere', r: 0.8, n: 14, m: 20, pos: SUN, color: '#fde68a', alpha: 0.3, anim: { type: 'scale', from: 1, to: 1.12, rate: 0.6 } } ]
            .concat(Array.from({ length: 10 }, (_, k) => ({ t: 'group', pos: SUN, rot: [0, 0, k * 36], shapes: [ { t: 'cone', r: 0.08, h: 0.35, n: 8, pos: [0, 0.95, 0], color: '#fcd34d', anim: { type: 'move', dir: [0, 1, 0], amp: 0.06, rate: 1, phase: k * 0.1 } } ] }))) },
        { id: 'luce', name: 'Sunlight (photons)', label: 'Photons', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>Light is made of tiny "packets" of energy called <b>photons</b>. When a photon hits a solar cell, it can give its energy to an electron.</p>',
          shapes: photonsPanel.concat(photonsCell) },
        { id: 'vetro', name: 'Tempered glass', label: 'Glass', color: '#e0f2fe', alpha: 0.3, explode: along(2.2),
          info: '<p>A layer of very tough <b>glass</b> protects the cells from rain, snow and hail, while letting almost all the light through.</p>',
          more: '<p>The glass is treated to <b>not reflect</b> light (anti-reflective) and is tempered: it withstands 2.5 cm hailstones thrown at 80 km/h.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.02, 0.03, PL + 0.02], pos: [0, 0.045, 0] } ]) },
        { id: 'eva', name: 'EVA layers (the "glue")', label: 'EVA', color: '#f8fafc', alpha: 0.22, explode: along(1.5),
          info: '<p>Two sheets of transparent plastic wrap the cells like a sandwich: they glue them to the glass and protect them from moisture.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.012, PL], pos: [0, 0.022, 0] }, { t: 'box', s: [PW, 0.012, PL], pos: [0, -0.02, 0], color: '#e2e8f0' } ]) },
        { id: 'celle', name: 'Solar cells', label: 'Cells', color: '#1e3a8a', explode: along(0.8),
          info: '<p>The <b>cells</b> are very thin little squares of <b>silicon</b>, the material of sand. Each cell makes a small current; connected together (60 here) they produce enough energy for many appliances.</p>',
          more: '<p>Each cell gives about <b>0.5 volts</b>: connecting them in a row (in series) their voltages add up, like the batteries in a remote control. The silvery lines are the <b>contacts</b> that collect the current.</p>',
          shapes: P(cells) },
        { id: 'retro', name: 'Back sheet', label: 'Back', color: '#f8fafc', explode: along(-0.5),
          info: '<p>A sheet of white plastic closes the panel at the back: it insulates the electrical parts and protects them from water and sunlight.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.015, PL], pos: [0, -0.035, 0] } ]) },
        { id: 'cornice', name: 'Aluminium frame', label: 'Frame', color: '#cbd5e1', explode: along(0),
          info: '<p>A frame of <b>aluminium</b>, light and rust-proof, makes the panel rigid and lets you fix it to its support.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, PL / 2 + 0.04] }, { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, -PL / 2 - 0.04] },
            { t: 'box', s: [0.08, 0.1, PL], pos: [PW / 2 + 0.04, 0, 0] }, { t: 'box', s: [0.08, 0.1, PL], pos: [-PW / 2 - 0.04, 0, 0] },
            { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, PL / 2 + 0.07], color: '#e2e8f0' }, { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, -PL / 2 - 0.07], color: '#e2e8f0' } ]) },
        { id: 'scatola', name: 'Junction box and cables', label: 'Junction box', color: '#1f2937', explode: along(-1.0),
          info: '<p>Behind the panel a little box collects the current from all the cells. It contains the <b>diodes</b>, which prevent problems if part of the panel is in shade.</p>',
          shapes: P([ { t: 'box', s: [0.36, 0.08, 0.22], pos: [0, -0.09, -PL / 2 + 0.35] }, { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.12, -0.12, -PL / 2 + 0.35], [0.4, -0.3, -PL / 2 + 0.6], [0.6, -0.6, -0.3]], color: '#111827' },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[-0.12, -0.12, -PL / 2 + 0.35], [-0.4, -0.3, -PL / 2 + 0.6], [-0.5, -0.6, -0.3]], color: '#b91c1c' } ]) },
        { id: 'struttura', name: 'Support structure', label: 'Structure', color: '#94a3b8', explode: [0, -0.5, 0],
          info: '<p>The stand keeps the panel <b>tilted</b> towards the Sun. In Italy the best tilt is about 30°, facing <b>south</b>.</p>',
          more: '<p>Some installations have "trackers": motors that turn the panels during the day to follow the Sun, like sunflowers, and produce up to 30% more.</p>',
          shapes: [-0.75, 0.75].flatMap((x) => [ { t: 'pipe', r: 0.04, n: 8, pts: [W(x, -0.09, PL / 2 - 0.15), W(x, -0.09, -PL / 2 + 0.15)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, PL / 2 - 0.2)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, -PL / 2 + 0.3)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'pipe', r: 0.025, n: 6, pts: [[x, 0.05, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, PL / 2 - 0.2)[2]], color: '#78716c' }, { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, -PL / 2 + 0.3)[2]], color: '#78716c' } ]) },
        { id: 'zoom', name: 'A cell under the microscope', label: 'Magnified cell', color: '#94a3b8', explode: [0, 0, 0], chip: true, noLabel: true,
          info: '<p>Let\'s magnify a single cell and look at it "from the side": it is made of two different layers of silicon, one on top of the other.</p>',
          shapes: [ { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, TOPN, 0.5]], color: '#64748b', alpha: 0.5 }, { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, ZY, 0.5]], color: '#64748b', alpha: 0.5 },
            { t: 'box', s: [0.36, 0.03, 0.36], pos: cellOnPanel, rot: [TILT, 0, 0], color: '#facc15', alpha: 0.6 } ] },
        { id: 'silicio-n', name: 'N-type silicon', label: 'N silicon', color: '#60a5fa', explode: [0, 0.5, 0],
          info: '<p>The thin layer on top. A pinch of <b>phosphorus</b> has been added to the silicon: so it has a few extra electrons (negative charge, N).</p>',
          more: '<p>Adding tiny amounts of another element is called <b>doping</b>. Between the N layer and the P layer the <b>junction</b> forms: a kind of electric "slide" that always pushes the electrons in the same direction.</p>',
          shapes: [ { t: 'box', s: [1.6, 0.22, 1.0], pos: [ZX, ZY + 0.84, 0] }, { t: 'box', s: [1.6, 0.02, 1.0], pos: [ZX, TOPN - 0.0, 0], color: '#1e3a8a' } ] },
        { id: 'giunzione', name: 'P-N junction', label: 'Junction', color: '#a855f7', explode: [0, 0.25, 0],
          info: '<p>The boundary between the two layers. Here there is a small electric field: when light "frees" an electron, the junction pushes it upwards and the <b>hole</b> (the empty spot) downwards.</p>',
          shapes: [ { t: 'box', s: [1.62, 0.05, 1.02], pos: [ZX, JUN, 0], anim: { type: 'blink', color: '#f0abfc', amount: 0.6, rate: 1.4 } } ] },
        { id: 'silicio-p', name: 'P-type silicon', label: 'P silicon', color: '#f9a8d4', explode: [0, -0.2, 0],
          info: '<p>The thick layer at the bottom. Here a pinch of <b>boron</b> has been added to the silicon: some electrons are missing and there are "empty spots" left, the <b>holes</b> (positive charge, P).</p>',
          shapes: [ { t: 'box', s: [1.6, 0.68, 1.0], pos: [ZX, ZY + 0.36, 0] } ] },
        { id: 'contatti', name: 'Metal contacts', label: 'Contacts', color: '#e2e8f0', explode: [0, 0, 0.5],
          info: '<p>Thin silver strips on top (which let the light through) and an aluminium sheet underneath collect the electrons and send them into the wires.</p>',
          shapes: [-0.5, 0, 0.5].map((x) => ({ t: 'box', s: [0.06, 0.05, 1.02], pos: [ZX + x, TOPN + 0.035, 0] })).concat([ { t: 'box', s: [1.62, 0.06, 1.02], pos: [ZX, ZY - 0.02, 0], color: '#9ca3af' } ]) },
        { id: 'elettroni', name: 'Moving electrons', label: 'Electrons', color: '#2563eb', explode: [0, 0, 0], chip: true,
          info: '<p>The <b>electrons</b> pushed by the junction leave through the contacts on top, travel through the wire, light up the bulb and come back in from the bottom. An orderly flow of electrons is an <b>electric current</b>!</p>',
          more: '<p>The panel produces <b>direct current</b> (the electrons always go in the same direction), like a battery. The sockets at home, however, use alternating current: you need the <b>inverter</b>.</p>',
          shapes: electrons },
        { id: 'lacune', name: 'Holes', color: '#f87171', explode: [0, 0, 0], chip: true,
          info: '<p>The <b>holes</b> are the "gaps" left by the electrons: they behave like positive charges and move downwards, where they meet the electrons coming back from the circuit.</p>',
          shapes: holes },
        { id: 'lampadina', name: 'Circuit and bulb', label: 'Bulb', color: '#fde047', explode: [0.4, 0.3, 0],
          info: '<p>Connecting the two contacts with a wire makes a <b>circuit</b>: the current produced by the light lights the bulb. If the Sun hides, the bulb gets dimmer.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: CIRCUIT, color: '#b45309' },
            { t: 'sphere', r: 0.22, n: 14, m: 20, pos: [ZX + 1.35, TOPN + 1.15, 0], color: '#fef08a', alpha: 0.85, anim: { type: 'blink', color: '#ffffff', amount: 0.7, rate: 1 } },
            { t: 'cyl', r: 0.1, h: 0.16, n: 14, pos: [ZX + 1.35, TOPN + 0.92, 0], color: '#94a3b8' } ] },
        { id: 'inverter', name: 'Inverter', color: '#e5e7eb', explode: [0.4, -0.2, 0.6],
          info: '<p>A box that turns the panel\'s direct current into <b>alternating current</b>, the kind from the sockets at home, and sends it to the grid.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.6, 0.2], pos: [1.6, 0.42, 1.2] }, { t: 'box', s: [0.25, 0.12, 0.02], pos: [1.6, 0.55, 1.31], color: '#16a34a', decal: 1, anim: { type: 'blink', color: '#86efac', amount: 0.6, rate: 2 } },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.6, 0.85, -0.3], [1.0, 0.4, 0.3], [1.5, 0.2, 1.15]], color: '#111827' } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'Electricity from light', explode: 0,
        html: '<p>A solar panel has no motors or gears: <b>light itself</b> produces the current. This phenomenon is called the <b>photovoltaic effect</b> ("photo" = light, "volt" = electricity).</p>' },
      { icon: '🥪', title: 'A layered sandwich', explode: 1, focus: ['vetro', 'eva', 'celle', 'retro', 'cornice', 'scatola'], view: { rx: 0.25, ry: -0.9 },
        html: '<p>The panel is a "sandwich": on top the <b>glass</b>, then the transparent plastic (<b>EVA</b>), the silicon <b>cells</b>, another layer of EVA and the <b>back sheet</b>. It is all held by an aluminium <b>frame</b>.</p>' },
      { icon: '🔲', title: 'The silicon cells', focus: ['celle', 'cornice', 'luce'], view: { rx: 0.7, ry: -0.3 }, zoom: 1.3,
        html: '<p>Each blue little square is a silicon <b>cell</b>, as thin as a sheet of paper. The silvery lines collect the current. The cells are connected to each other in a row, like the batteries in a torch.</p>' },
      { icon: '🔬', title: 'A cell under the microscope', focus: ['zoom', 'silicio-n', 'silicio-p', 'giunzione', 'contatti'], view: { rx: 0.2, ry: -0.15 },
        html: '<p>Let\'s magnify a cell. It is made of two layers: <b>N</b> silicon (on top) with extra electrons and <b>P</b> silicon (below) with "empty spots". Where they touch is the <b>junction</b>.</p>' },
      { icon: '⚡', title: 'Light frees the electrons', focus: ['luce', 'giunzione', 'elettroni', 'lacune', 'silicio-n', 'silicio-p'], view: { rx: 0.15, ry: -0.05 }, zoom: 1.2,
        html: '<p>A <b>photon</b> hits the silicon and "knocks loose" an electron. The junction pushes the <b>electron</b> upwards and the <b>hole</b> downwards: a difference in charge is created, as in a battery.</p>' },
      { icon: '💡', title: 'The bulb lights up', focus: ['elettroni', 'lampadina', 'contatti', 'lacune'], view: { rx: 0.15, ry: 0.15 },
        html: '<p>If we connect the top and the bottom with a wire, the electrons flow through the <b>circuit</b>: this is the <b>electric current</b>, which lights the bulb and then goes back into the cell. As long as there is light, the loop keeps going!</p>' },
      { icon: '🏠', title: 'From the roof to the socket', focus: ['inverter', 'scatola', 'struttura', 'celle'], view: { rx: 0.3, ry: -0.9 },
        html: '<p>The <b>junction box</b> collects the current, and the <b>inverter</b> turns it into the kind used by the sockets at home. The panel should be tilted towards the <b>south</b>, at about 30°, to catch as much Sun as possible.</p><p class="tip">🌱 Solar energy is <b>renewable</b> and clean: the Sun will keep shining for billions more years.</p>' }
    ],
    facts: [
      { icon: '🛰️', title: 'Born for space', html: 'The first practical solar panels were used in 1958 on the <b>Vanguard 1</b> satellite, which still works today after more than 65 years in orbit!' },
      { icon: '🏖️', title: 'Made of sand', html: 'The silicon in the cells comes from <b>sand</b> (quartz), one of the most common materials on Earth.' },
      { icon: '🥵', title: 'Too much heat doesn\'t help', html: 'Panels love light, not heat: when they get too hot they produce a little less. That is why they work very well on cold, clear days.' },
      { icon: '⏳', title: 'Long life', html: 'A solar panel lasts more than <b>25 years</b> and in the end it can be recycled: glass, aluminium and silicon are recovered almost completely.' },
      { icon: '🧮', title: 'How much does it produce?', html: 'In Italy a home panel (about 400 W) produces about 500 kWh in a year: enough to run a refrigerator for the whole year.' }
    ],
    quiz: [
      { type: 'mc', q: 'What does a photovoltaic panel turn into something else?', options: ['Heat into wind', 'Light into electricity', 'Water into steam', 'Noise into light'], answer: 1, explain: 'It is the photovoltaic effect: light sets the electrons in motion.' },
      { type: 'mc', q: 'What material are almost all solar cells made of?', options: ['Copper', 'Silicon', 'Wood', 'Plastic'], answer: 1, explain: 'Silicon, which comes from sand.' },
      { type: 'tf', q: 'A solar panel has lots of gears that turn.', answer: false, explain: 'It has no moving parts: the light directly produces the current.' },
      { type: 'mc', q: 'What is the inverter for?', options: ['To clean the panel', 'To turn direct current into alternating current', 'To follow the Sun', 'To cool the cells'], answer: 1, explain: 'The sockets at home use alternating current; the panel produces direct current.' },
      { type: 'mc', q: 'In Italy, towards which compass point should the panels face?', options: ['North', 'South', 'East', 'West'], answer: 1, explain: 'In our hemisphere the Sun at midday is in the south.' },
      { type: 'order', q: 'Put in order: how the current is made in the cell', items: ['The photon hits the silicon', 'An electron is freed', 'The junction pushes it upwards', 'The electron travels around the circuit', 'The bulb lights up'], explain: 'Light → free electron → separation at the junction → current in the circuit.' }
    ]
  });
})();
