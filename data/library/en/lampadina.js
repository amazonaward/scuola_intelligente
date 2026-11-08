/* La lampadina: a sinistra (x = -0.9) una lampadina a incandescenza, a destra (x = +0.9) una lampadina LED.
   Entrambe con attacco a vite E27 (da y = -0.55 a 0) avvitate in un portalampada. Alto = +y. */
(function () {
  const XI = -0.9, XL = 0.9, TAU = Math.PI * 2;
  const GLASS = [[0.25, 0], [0.26, 0.15], [0.31, 0.35], [0.43, 0.6], [0.54, 0.85], [0.59, 1.05], [0.58, 1.25], [0.51, 1.42], [0.38, 1.55], [0.2, 1.63], [0, 1.65]];
  const DOME = [[0.42, 0.5], [0.5, 0.62], [0.56, 0.8], [0.58, 1.0], [0.55, 1.18], [0.47, 1.33], [0.34, 1.44], [0.18, 1.5], [0, 1.52]];
  const thread = (x) => ({ t: 'pipe', r: 0.022, n: 5, caps: false, pts: Array.from({ length: 64 }, (_, i) => { const a = i * 0.55; return [x + 0.26 * Math.cos(a), -0.5 + i * 0.0072, 0.26 * Math.sin(a)]; }) });
  const base = (x) => [ { t: 'cyl', r: 0.255, h: 0.52, n: 28, pos: [x, -0.26, 0], color: '#d1d5db' }, thread(x),
    { t: 'cyl', r: 0.2, r2: 0.24, h: 0.08, n: 24, pos: [x, -0.56, 0], color: '#111827' }, { t: 'sphere', r: 0.07, n: 6, m: 12, hemi: true, rot: [180, 0, 0], pos: [x, -0.6, 0], color: '#9ca3af' } ];
  /* filamento: spirale intorno all'asse x */
  const coil = Array.from({ length: 96 }, (_, i) => { const f = i / 95, a = i * 0.85; return [XI - 0.22 + 0.44 * f, 1.0 + 0.035 * Math.sin(a) - 0.06 * Math.sin(Math.PI * f), 0.035 * Math.cos(a)]; });
  /* corrente: dal contatto in fondo, su per un filo, attraverso il filamento (o il driver), giù per l'altro filo, fino alla vite */
  const PI_ = [[XI, -0.62, 0], [XI, -0.1, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0], [XI + 0.22, 1.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.1, -0.05, 0], [XI + 0.27, -0.1, 0], [XI + 0.27, -0.45, 0]];
  const PL = [[XL, -0.62, 0], [XL, 0.0, 0], [XL - 0.05, 0.15, 0.03], [XL - 0.05, 0.38, 0.03], [XL - 0.2, 0.52, 0], [XL + 0.2, 0.52, 0], [XL + 0.05, 0.38, 0.03], [XL + 0.05, 0.15, 0.03], [XL + 0.12, 0.0, 0], [XL + 0.27, -0.1, 0], [XL + 0.27, -0.45, 0]];
  const electrons = (P, n) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.03, n: 5, m: 8, pos: P[0], color: '#2563eb', anim: { type: 'path', pts: P, wave: 'saw', rate: 0.6, phase: k / n } }));
  /* luce: "pacchetti" che volano via dal centro e svaniscono */
  const rays = (c, dirs, color, len) => dirs.map(([dx, dy, dz], k) => ({ t: 'group', pos: c, anim: [{ type: 'move', dir: [dx, dy, dz], amp: len, wave: 'saw', rate: 1, phase: (k * 0.37) % 1 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1, phase: (k * 0.37) % 1 }],
    shapes: [{ t: 'sphere', r: 0.045, n: 6, m: 8, color }] }));
  const DIRS = Array.from({ length: 12 }, (_, k) => { const a = (k / 12) * TAU; return [Math.cos(a), Math.sin(a), 0.3 * Math.sin(3 * a)]; });
  const UP = Array.from({ length: 10 }, (_, k) => { const a = (k / 10) * TAU, e = 0.35 + 0.5 * ((k * 7) % 10) / 10; return [Math.cos(a) * Math.cos(e), Math.sin(e) + 0.25, Math.sin(a) * Math.cos(e)]; });
  const ledChips = [[0, 0]].concat(Array.from({ length: 8 }, (_, k) => [0.25 * Math.cos(k * TAU / 8), 0.25 * Math.sin(k * TAU / 8)]));

  LIBRARY({
    lang: 'en',
    id: 'lampadina',
    title: 'The light bulb',
    intro: 'Press the switch and… light! On the left, the old <b>incandescent</b> bulb, with a filament that becomes red-hot; on the right, the modern <b>LED</b> bulb, which gives the same light using much less energy. Discover the difference!',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.5, height: 460,
      parts: [
        { id: 'bulbo', name: 'Glass bulb', label: 'Glass bulb', color: '#e0f2fe', alpha: 0.22, pos: [XI, 0, 0], explode: [-0.6, 0.6, 0],
          info: '<p>It is the transparent glass "bubble". Inside there is <b>no air</b>: there is a special gas (argon) that stops the filament from burning.</p>',
          more: '<p>The oxygen in the air would make the red-hot filament burn in an instant. That is why at first a <b>vacuum</b> was made inside; then it was discovered that an <b>inert</b> gas such as argon makes the wire last longer.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: GLASS, ds: true } ] },
        { id: 'filamento', name: 'Tungsten filament', label: 'Filament', color: '#fde047', explode: [-0.6, 0.35, 0.4],
          info: '<p>It is a very thin metal wire, coiled like a spring. When the current passes through it, it becomes <b>red-hot</b>, at about 2,500 °C, and glows with yellow light.</p>',
          more: '<p>It is made of <b>tungsten</b>, the metal with the highest melting point (3,422 °C). The wire is coiled twice on itself: unwound, it would be almost a metre long! Over time the tungsten evaporates, the wire thins and breaks: the bulb "blows".</p>',
          shapes: [ { t: 'pipe', r: 0.01, n: 4, pts: coil, anim: { type: 'blink', color: '#fffbeb', wave: 'sin01', rate: 2 } },
            { t: 'sphere', r: 0.16, n: 8, m: 12, pos: [XI, 0.98, 0], color: '#fef08a', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.5, wave: 'sin01', rate: 2 } } ] },
        { id: 'supporti', name: 'Wires and glass stem', label: 'Support wires', color: '#9ca3af', explode: [-0.6, 0.15, 0.4],
          info: '<p>Two metal wires carry the current from the base up to the filament and hold it suspended. They are fixed in a <b>glass stem</b>, in the centre of the bulb.</p>',
          shapes: [ { t: 'lathe', n: 16, pts: [[0.14, 0], [0.12, 0.15], [0.06, 0.3], [0.045, 0.5], [0, 0.53]], pos: [XI, 0, 0], color: '#cbd5e1', alpha: 0.6 },
            { t: 'pipe', r: 0.008, n: 4, pts: [[XI - 0.04, 0.0, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0]] }, { t: 'pipe', r: 0.008, n: 4, pts: [[XI + 0.04, 0.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.22, 1.0, 0]] },
            { t: 'pipe', r: 0.005, n: 4, pts: [[XI, 0.52, 0], [XI, 0.92, 0]] } ] },
        { id: 'calore', name: 'Heat', color: '#ef4444', alpha: 0.18, explode: [-0.6, 0.35, 0.4],
          info: '<p>The incandescent bulb gets hot! Of the current it uses, about <b>95 out of 100</b> parts turn into heat and only 5 turn into light.</p>',
          more: '<p>A very hot body emits mostly <b>infrared</b> rays, which are invisible but warm: visible light is only a small part. That is why, since 2009, incandescent bulbs have been withdrawn from shops in Europe.</p>',
          shapes: [0, 0.5].map((ph) => ({ t: 'group', pos: [XI, 0.95, 0], anim: [{ type: 'scale', from: 0.4, to: 1.4, wave: 'saw', rate: 0.5, phase: ph }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: ph }],
            shapes: [{ t: 'sphere', r: 0.62, n: 10, m: 16 }] })) },
        { id: 'luce', name: 'Light', color: '#facc15', noLabel: false, explode: [0, 0.5, 0],
          info: '<p>Light comes from the red-hot filament (left) or from the small LEDs (right) and travels very fast, at <b>300,000 km per second</b>, in every direction.</p>',
          shapes: rays([XI, 1.0, 0], DIRS, '#facc15', 1.0).concat(rays([XL, 0.55, 0], UP, '#f8fafc', 1.1)) },
        { id: 'attacco', name: 'Screw base (E27)', label: 'Screw base', color: '#d1d5db', explode: [0, -0.3, 0],
          info: '<p>The metal part with the <b>thread</b> screws into the lamp holder. The current enters through the <b>contact</b> at the bottom and leaves through the screw: the black glass in between keeps them apart.</p>',
          more: '<p>"E27" means an <b>Edison</b> base with a diameter of 27 mm: it has been the same for more than a hundred years, which is why you can put a modern LED bulb into an old lamp.</p>',
          shapes: base(XI).concat(base(XL)) },
        { id: 'portalampada', name: 'Lamp holder and cables', label: 'Lamp holder', color: '#1f2937', alpha: 0.55, explode: [0, -0.6, 0],
          info: '<p>Inside the lamp holder there is a "female" screw and a contact tab at the bottom. The two wires of the cable, connected to the <b>switch</b>, carry the current to the bulb.</p>',
          more: '<p>The switch opens or closes the <b>circuit</b>: current flows only if the path is closed, like a ring with no breaks. At home the voltage is 230 volts: never touch a lamp holder while the lamp is on!</p>',
          shapes: [XI, XL].map((x) => ({ t: 'tube', r: 0.34, ri: 0.29, h: 0.45, n: 28, pos: [x, -0.55, 0] })).concat([XI, XL].map((x) => ({ t: 'cyl', r: 0.34, h: 0.08, n: 28, pos: [x, -0.8, 0], alpha: 1 })),
            [ { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XI, -0.84, 0], [XI, -1.15, 0], [-0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XL, -0.84, 0], [XL, -1.15, 0], [0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'box', s: [0.3, 0.12, 0.4], pos: [0, -1.25, 0.3], color: '#f8fafc', alpha: 1 }, { t: 'box', s: [0.1, 0.06, 0.18], pos: [0, -1.17, 0.33], rot: [0, 0, -12], color: '#e2e8f0', alpha: 1 } ]) },
        { id: 'corrente', name: 'Electric current', label: 'Current', color: '#2563eb', noLabel: true, explode: [0, 0, 0],
          info: '<p>Current is a river of <b>electrons</b>, tiny particles that flow through the wires. They enter through the contact at the bottom, cross the filament or the LEDs and leave through the screw.</p>',
          shapes: electrons(PI_, 12).concat(electrons(PL, 12)) },
        { id: 'diffusore', name: 'Diffuser (dome)', label: 'Diffuser', color: '#f8fafc', alpha: 0.4, pos: [XL, 0, 0], explode: [0.6, 0.65, 0],
          info: '<p>The white plastic dome "spreads" the light of the small LEDs, so that it does not dazzle and lights the whole room softly.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: DOME, ds: true } ] },
        { id: 'led', name: 'LED chip', label: 'LED', color: '#fef08a', pos: [XL, 0.5, 0], explode: [0.6, 0.35, 0.3],
          info: '<p>There are many tiny <b>LEDs</b> on a small board. An LED is a "sandwich" of special materials: when current passes through it, it emits light directly, almost without heating up.</p>',
          more: '<p>LED stands for <i>Light Emitting Diode</i>, "a diode that emits light". Electrons, passing from one layer to another of the <b>semiconductor</b>, release energy in the form of blue light; a layer of yellow <b>phosphor</b> turns it into white light. An LED bulb uses about 1/8 of the energy of an incandescent one and lasts 15–25 times longer.</p>',
          shapes: [ { t: 'cyl', r: 0.4, h: 0.04, n: 32, color: '#e5e7eb' } ].concat(ledChips.map(([x, z]) => ({ t: 'box', s: [0.08, 0.03, 0.08], pos: [x, 0.03, z], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 2 } }))) },
        { id: 'driver', name: 'Driver circuit', label: 'Driver', color: '#15803d', pos: [XL, 0.24, 0], explode: [0.6, 0, 0.6],
          info: '<p>LEDs cannot handle household current as it is. This small circuit <b>transforms</b> it into the weak direct current that LEDs need.</p>',
          more: '<p>Household current is <b>alternating</b> (it reverses direction 50 times a second) at 230 V. The driver rectifies it (diodes), smooths it (capacitors) and reduces it to a few volts of <b>direct</b> current.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.36, 0.025] }, { t: 'cyl', r: 0.04, h: 0.12, n: 12, pos: [-0.07, 0.04, 0.06], rot: [90, 0, 0], color: '#1e3a8a' },
            { t: 'cyl', r: 0.03, h: 0.1, n: 12, pos: [0.08, -0.06, 0.05], rot: [90, 0, 0], color: '#1f2937' }, { t: 'box', s: [0.08, 0.06, 0.04], pos: [0.07, 0.1, 0.03], color: '#111827' } ] },
        { id: 'dissipatore', name: 'Body and heat sink', label: 'Heat sink', color: '#cbd5e1', alpha: 0.45, pos: [XL, 0, 0], explode: [0.6, -0.15, 0],
          info: '<p>The "neck" of the LED bulb contains the driver and carries away the little heat produced by the LEDs: an LED that stays cool lasts many more years.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0.26, 0], [0.3, 0.12], [0.36, 0.28], [0.42, 0.44], [0.43, 0.5]], ds: true } ].concat(Array.from({ length: 8 }, (_, k) => ({ t: 'box', s: [0.02, 0.32, 0.08], pos: [0.36 * Math.cos(k * TAU / 8), 0.3, 0.36 * Math.sin(k * TAU / 8)], rot: [0, -k * 45, 0], color: '#94a3b8', alpha: 0.6 }))) }
      ]
    },
    steps: [
      { icon: '💡', title: 'Two bulbs, two ideas', explode: 0,
        html: '<p>On the left is the <b>incandescent</b> bulb, invented more than 140 years ago: it gives light by heating a wire. On the right is the <b>LED</b> bulb, which we use today: it gives light with a special material, hardly heating up at all.</p><p>Both work only if the <b>current</b> can flow.</p>' },
      { icon: '🔌', title: 'A closed circuit', focus: ['corrente', 'attacco', 'portalampada', 'supporti', 'filamento'], explode: 0.2, view: { rx: 0.1, ry: -0.2 },
        html: '<p>The current arrives from the cable, enters through the <b>contact</b> at the bottom of the bulb, climbs up one wire, crosses the filament and comes back down the other wire to the <b>screw</b>. It is a complete loop: a <b>closed circuit</b>.</p><p class="tip">🔘 The switch opens the circuit: the path is interrupted and the light goes out.</p>' },
      { icon: '🔥', title: 'A red-hot wire', focus: ['filamento', 'supporti', 'bulbo'], explode: 0, zoom: 1.1, view: { rx: -0.05, ry: -0.15 },
        html: '<p>The tungsten <b>filament</b> is so thin that the current struggles to pass through it: it heats up to about <b>2,500 °C</b> and becomes incandescent, that is, it glows like iron in a forge.</p><p>The bulb is filled with <b>argon</b> gas, not air: with oxygen the wire would burn at once.</p>' },
      { icon: '🥵', title: 'A lot of light… and a lot of heat', focus: ['calore', 'filamento', 'luce', 'bulbo'], explode: 0, view: { rx: 0.1, ry: -0.3 },
        html: '<p>The incandescent bulb wastes almost all its energy: out of 100 parts, about <b>95 become heat</b> and only 5 become light. That is why it gets hot!</p><p class="tip">🌍 To save energy, incandescent bulbs are no longer sold in Europe.</p>' },
      { icon: '✨', title: 'The LED: light from semiconductors', focus: ['led', 'diffusore', 'luce'], explode: 0.3, view: { rx: 0.35, ry: 0.25 },
        html: '<p>In the LED bulb the light is born in many small <b>chips</b>. When current passes through them, the electrons "jump" from one material to another and release their energy directly as <b>light</b>, with almost no heat.</p><p>The white <b>diffuser</b> softens the light.</p>' },
      { icon: '🔧', title: 'Driver and heat sink', focus: ['driver', 'dissipatore', 'led', 'corrente'], explode: 0.55, view: { rx: 0.15, ry: 0.35 },
        html: '<p>Household current is too "strong" for LEDs. The <b>driver</b>, a small circuit hidden in the neck, turns it into weak direct current. The <b>heat sink</b> carries away the little heat there is.</p>' },
      { icon: '⚖️', title: 'Challenge: which one uses less?', explode: 0, view: { rx: 0.12, ry: -0.35 },
        html: '<p>To make the same light, an incandescent bulb uses <b>60 watts</b>, an LED about <b>8 watts</b>. And the LED lasts 15,000–25,000 hours, compared with the 1,000 of the old bulb.</p><p class="tip">🧮 In a year, by replacing 10 bulbs with LEDs, a family saves enough energy to run hundreds of washing machine loads!</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Edison and the others', html: 'Thomas Edison made the light bulb practical in 1879 using a filament of <b>carbonised bamboo</b>. But other inventors were working on it too, such as the Englishman Joseph Swan and the Italian <b>Alessandro Cruto</b>.' },
      { icon: '🕯️', title: 'The century-old bulb', html: 'In a fire station in California there is a bulb that has been lit almost non-stop since <b>1901</b>! It works very gently, which is why it lasts so long.' },
      { icon: '🏅', title: 'A Nobel for blue light', html: 'Red and green LEDs had existed for a long time, but for white light the <b>blue LED</b> was needed. The three Japanese scientists who invented it won the Nobel Prize for Physics in 2014.' },
      { icon: '🔆', title: 'Watts and lumens', html: 'The <b>watts</b> tell how much energy a bulb uses, the <b>lumens</b> how much light it gives. A good bulb produces many lumens with few watts.' }
    ],
    quiz: [
      { type: 'mc', q: 'Why does the filament of an incandescent bulb give light?', options: ['Because it is painted yellow', 'Because it becomes red-hot when current passes through it', 'Because it burns like a candle', 'Because it reflects sunlight'], answer: 1, explain: 'The current heats the tungsten wire to about 2,500 °C: it becomes incandescent and gives light.' },
      { type: 'mc', q: 'What is inside the bulb of an incandescent lamp?', options: ['Air', 'Water', 'A gas such as argon', 'Pure oxygen'], answer: 2, explain: 'An inert gas such as argon stops the red-hot filament from burning.' },
      { type: 'tf', q: 'The LED bulb turns a much larger part of its energy into light than the incandescent one.', answer: true, explain: 'The LED wastes little energy as heat: for the same light, it uses about 8 times less.' },
      { type: 'mc', q: 'What is the switch for?', options: ['To change the colour of the light', 'To open or close the circuit', 'To cool the bulb', 'To measure the watts'], answer: 1, explain: 'With the circuit open, current does not flow and the bulb goes off.' },
      { type: 'mc', q: 'What metal is the filament made of?', options: ['Copper', 'Iron', 'Tungsten', 'Gold'], answer: 2, explain: 'Tungsten melts at 3,422 °C: it is the metal that resists the highest temperature.' },
      { type: 'num', q: 'Out of 100 parts of energy, about how many become light in an incandescent bulb?', answer: 5, explain: 'About 5: the other 95 become heat.' }
    ]
  });
})();
