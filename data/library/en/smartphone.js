/* Lo smartphone, in piedi: lo schermo guarda verso +z, l'alto è +y. Esplodendo, gli strati si separano lungo z.
   Ciclo (1): 0–0.25 un dito tocca lo schermo; il segnale radio parte dall'antenna. */
(function () {
  /* rettangolo arrotondato (piano XY), centrato */
  const rrect = (w, h, r, seg) => {
    const out = [], n = seg || 6, cx = w / 2 - r, cy = h / 2 - r;
    [[cx, cy, 0], [-cx, cy, 90], [-cx, -cy, 180], [cx, -cy, 270]].forEach(([x, y, a0]) => {
      for (let i = 0; i <= n; i++) { const a = (a0 + (i / n) * 90) * Math.PI / 180; out.push([x + r * Math.cos(a), y + r * Math.sin(a)]); }
    });
    return out;
  };
  /* cornice: contorno esterno + foro (poligono "a buco di serratura") */
  const ring = (o, i) => o.concat([o[0], i[0]], i.slice(1).reverse(), [i[0]]);
  const W = 1.5, H = 3.1, RC = 0.22;
  /* icone delle app: griglia 4 × 5 */
  const APP = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7', '#ec4899', '#14b8a6', '#f97316', '#64748b', '#0ea5e9', '#84cc16', '#eab308', '#6366f1', '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4', '#d946ef', '#facc15', '#4ade80'];
  const icons = APP.map((c, k) => ({ t: 'extrude', d: 0.008, pts: rrect(0.22, 0.22, 0.06, 3), pos: [-0.465 + (k % 4) * 0.31, 1.0 - Math.floor(k / 4) * 0.36, 0.012], color: c, decal: 2 }));
  const dock = [0, 1, 2, 3].map((k) => ({ t: 'extrude', d: 0.008, pts: rrect(0.22, 0.22, 0.06, 3), pos: [-0.465 + k * 0.31, -1.18, 0.012], color: ['#22c55e', '#3b82f6', '#f8fafc', '#f59e0b'][k], decal: 2 }));
  /* onde radio: anelli che si allargano e svaniscono */
  const waves = [0, 1, 2].map((k) => ({ t: 'group', anim: [{ type: 'scale', from: 0.3, to: 1.9, wave: 'saw', phase: k / 3 }, { type: 'blink', fade: true, wave: 'rsaw', phase: k / 3 }],
    shapes: [{ t: 'torus', R: 0.4, r: 0.02, n: 28, m: 4, rot: [90, 0, 0], color: '#fbbf24' }] }));
  const chip = (w, h, c, x, y, z) => ({ t: 'box', s: [w, h, 0.05], pos: [x, y, z || 0.035], color: c });

  LIBRARY({
    lang: 'en',
    id: 'smartphone',
    title: 'The smartphone',
    intro: 'A smartphone is a <b>tiny pocket computer</b> that is also a phone, a camera, a satnav and a music player. Take it apart layer by layer: from the glass that feels your finger all the way down to the battery!',
    model: {
      rx: 0.18, ry: -0.75, speed: 0.45, height: 470, fit: 0.95,
      parts: [
        { id: 'vetro', name: 'Touch glass (touchscreen)', label: 'Touch glass', color: '#bae6fd', alpha: 0.28, pos: [0, 0, 0.11], explode: [0, 0, 1.5],
          info: '<p>This is the glass you touch. Underneath is an invisible grid of very thin wires that senses where you rest your finger, because your body <b>conducts a little electricity</b>.</p>',
          more: '<p>It is a <b>capacitive</b> touchscreen: the rows and columns of transparent electrodes (indium tin oxide) form lots of tiny capacitors. Your finger changes their charge and the chip works out the coordinates of the touch more than 100 times a second. That is why it doesn\'t work with ordinary gloves!</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'group', pos: [0, 0, 0.02], shapes: Array.from({ length: 5 }, (_, k) => ({ t: 'box', div: 1, s: [0.006, H - 0.3, 0.002], pos: [-0.5 + k * 0.25, 0, 0], color: '#7dd3fc', alpha: 0.5 }))
              .concat(Array.from({ length: 9 }, (_, k) => ({ t: 'box', div: 1, s: [W - 0.25, 0.006, 0.002], pos: [0, -1.36 + k * 0.34, 0], color: '#7dd3fc', alpha: 0.5 }))) },
            { t: 'extrude', d: 0.01, pts: rrect(0.36, 0.09, 0.045, 3), pos: [0, 1.42, 0.02], color: '#0f172a', alpha: 0.9 } ] },
        { id: 'dito', name: 'Your finger', label: 'Touch', color: '#fda4af', pos: [0.3, -0.2, 0.55], explode: [0, 0, 1.5],
          anim: { type: 'move', dir: [0, 0, -1], amp: 0.36, wave: 'window', from: 0.05, to: 0.35, ramp: 0.35 },
          info: '<p>When your finger touches the glass, the touchscreen grid senses a small electrical change right at that spot and the phone knows <b>where</b> you touched.</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.5, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.25] }, { t: 'sphere', r: 0.13, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], scale: [1, 0.8, 1] },
            { t: 'cyl', r: 0.17, h: 0.01, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.33], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.17, to: 0.32, ramp: 0.3 } } ] },
        { id: 'display', name: 'OLED display', label: 'Display', color: '#0f172a', pos: [0, 0, 0.07], explode: [0, 0, 1.05],
          info: '<p>This is the screen that lights up. It is made of millions of coloured dots, the <b>pixels</b>: each one lights up red, green or blue and together they form the images.</p>',
          more: '<p>In <b>OLED</b> displays each sub-pixel is a tiny organic LED that makes its own light: black is truly switched off, and that saves battery. A smartphone has about 2.5 million pixels, more than 400 for every inch.</p>',
          shapes: [ { t: 'extrude', d: 0.025, pts: rrect(W - 0.06, H - 0.06, RC - 0.03, 8) },
            { t: 'extrude', d: 0.006, pts: rrect(W - 0.14, H - 0.14, RC - 0.07, 8), pos: [0, 0, 0.012], color: '#1d4ed8', decal: 1 },
            { t: 'box', s: [W - 0.14, 1.0, 0.004], pos: [0, -0.35, 0.013], color: '#7c3aed', alpha: 0.55, decal: 1 },
            { t: 'box', s: [0.5, 0.06, 0.006], pos: [0, 1.38, 0.014], color: '#e2e8f0', decal: 2 } ].concat(icons, dock) },
        { id: 'telaio', name: 'Frame (casing)', label: 'Frame', color: '#9ca3af', pos: [0, 0, 0], explode: [0, 0, 0],
          info: '<p>This is the metal frame that holds the whole phone together. On the sides are the volume and power <b>buttons</b>.</p>',
          more: '<p>The frame is made of <b>aluminium</b> or steel: light and strong. Often some parts of the edge are separated by thin strips of plastic because they also act as an <b>antenna</b>.</p>',
          shapes: [ { t: 'extrude', d: 0.17, pts: ring(rrect(W + 0.04, H + 0.04, RC + 0.02, 8), rrect(W - 0.06, H - 0.06, RC - 0.03, 8)), smooth: true },
            { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.75, 0], color: '#6b7280' }, { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.45, 0], color: '#6b7280' },
            { t: 'box', s: [0.04, 0.35, 0.05], pos: [0.78, 0.6, 0], color: '#6b7280' },
            { t: 'box', s: [0.42, 0.04, 0.12], pos: [0, -1.56, 0], color: '#111827' },
            { t: 'box', s: [0.22, 0.02, 0.055], pos: [0, -1.575, 0], color: '#475569' } ] },
        { id: 'scheda-logica', name: 'Logic board', label: 'Logic board', color: '#166534', pos: [0, 0.75, -0.02], explode: [0, 0.25, 0.55],
          info: '<p>This is the phone\'s "motherboard": a green plate full of chips connected by very thin copper tracks.</p>',
          more: '<p>To fit in a few centimetres the board is made of <b>several layers</b> stacked up (even 10!) and the chips are piled on top of each other. There are also the chips for Wi-Fi, Bluetooth, GPS and the modem for the mobile network.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.3, 0.025] }, chip(0.18, 0.12, '#1f2937', 0.42, -0.4), chip(0.14, 0.14, '#334155', -0.42, -0.42), chip(0.2, 0.1, '#1f2937', -0.4, 0.4),
            chip(0.12, 0.08, '#b45309', 0.45, 0.42), { t: 'box', s: [0.3, 0.06, 0.03], pos: [0, -0.6, 0.025], color: '#d1d5db' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'box', s: [0.025, 0.04, 0.03], pos: [-0.1 + k * 0.05, 0.55, 0.025], color: '#a16207' }))) },
        { id: 'processore', name: 'Processor (SoC)', label: 'Processor', color: '#cbd5e1', pos: [0.05, 0.85, 0.03], explode: [0.25, 0.4, 1.0],
          info: '<p>This is the phone\'s <b>brain</b>. In a chip as big as a fingernail there are the processor, the graphics card and the "brain" for artificial intelligence.</p>',
          more: '<p>It is called a <b>SoC</b> (System on a Chip). It contains more than 15 billion transistors only a few nanometres wide and works on very little energy, so it doesn\'t get too hot or drain the battery.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.42, 0.03], color: '#166534' }, { t: 'box', s: [0.34, 0.34, 0.04], pos: [0, 0, 0.03] },
            { t: 'box', s: [0.12, 0.12, 0.005], pos: [-0.07, 0.07, 0.052], color: '#94a3b8', decal: 1 },
            { t: 'box', s: [0.06, 0.06, 0.006], pos: [0.1, -0.08, 0.052], color: '#38bdf8', decal: 1, anim: { type: 'blink', color: '#f0f9ff', wave: 'square', rate: 3 } } ] },
        { id: 'memoria', name: 'Memory (RAM and storage)', label: 'Memory', color: '#334155', pos: [-0.4, 1.08, 0.03], explode: [-0.35, 0.35, 0.85],
          info: '<p>Two kinds of memory: the <b>RAM</b>, the fast workbench for open apps, and the <b>storage</b> where photos, videos and apps stay even when the phone is off.</p>',
          more: '<p>The storage is <b>flash</b> memory: the information stays trapped as electric charges inside tiny "cages" even without power. 128 GB is about a thousand billion bits!</p>',
          shapes: [ { t: 'box', s: [0.32, 0.22, 0.04] }, { t: 'box', s: [0.3, 0.2, 0.004], pos: [0, 0, 0.022], color: '#475569', decal: 1 } ] },
        { id: 'batteria', name: 'Battery', color: '#1f2937', pos: [0, -0.55, -0.02], explode: [0, -0.2, -0.6],
          info: '<p>This is the energy "tank": a flat <b>lithium</b> battery that can be recharged hundreds of times. It takes up almost half of the phone!</p>',
          more: '<p>While charging, lithium ions move from one side of the battery to the other; when you use the phone they go back and make the current flow. Don\'t leave it in the sun: heat damages it and can be dangerous.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: rrect(1.25, 1.75, 0.06, 3) }, { t: 'box', s: [1.1, 0.6, 0.004], pos: [0, 0.2, 0.037], color: '#e2e8f0', decal: 1 },
            { t: 'box', s: [0.6, 0.08, 0.004], pos: [0, 0.32, 0.04], color: '#16a34a', decal: 2 }, { t: 'box', s: [0.3, 0.12, 0.03], pos: [0, 0.92, 0], color: '#b45309' },
            { t: 'group', pos: [-0.35, 0.08, 0.042], shapes: [0, 1, 2, 3].map((k) => ({ t: 'box', s: [0.12, 0.16, 0.004], pos: [k * 0.14, 0, 0], color: '#22c55e', decal: 2, anim: { type: 'blink', fade: true, wave: 'window', from: k * 0.2, to: 0.95, ramp: 0.05, cycle: 1 } })) } ] },
        { id: 'fotocamere', name: 'Cameras', color: '#111827', pos: [-0.42, 1.12, -0.12], explode: [0, 0.05, -1.6],
          info: '<p>The cameras have a small <b>lens</b> that gathers light and a <b>sensor</b> that turns it into numbers: that is how a photo is born.</p>',
          more: '<p>The sensor is a grid of millions of photodiodes: each one measures how much light hits it. Several cameras are needed for different zooms (wide-angle, telephoto) and the processor combines several shots for better photos, even in the dark.</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: rrect(0.6, 0.6, 0.14, 5), pos: [0, 0, -0.01], color: '#374151' } ].concat(
            [[-0.13, 0.13], [-0.13, -0.13], [0.14, 0]].map(([x, y]) => ({ t: 'group', pos: [x, y, -0.05], shapes: [
              { t: 'cyl', r: 0.105, h: 0.06, n: 28, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.08, h: 0.065, n: 28, rot: [90, 0, 0], color: '#0f172a' },
              { t: 'sphere', r: 0.06, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], pos: [0, 0, -0.03], color: '#1e3a8a' } ] })),
            [{ t: 'cyl', r: 0.03, h: 0.02, n: 12, rot: [90, 0, 0], pos: [0.15, 0.2, -0.04], color: '#fef9c3' }]) },
        { id: 'antenne', name: 'Antennas', color: '#f59e0b', pos: [0, 0, 0], explode: [0.9, 0, 0],
          info: '<p>The antennas send and receive invisible <b>radio waves</b>, which travel at the speed of light to the nearest tower. That is how you talk, chat and surf the web.</p>',
          more: '<p>A smartphone has different antennas for 4G/5G, Wi-Fi, Bluetooth, GPS and NFC (the one for paying by holding your phone close). Radio waves carry data as 0s and 1s, by constantly changing their shape.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, 1.52, 0.02], [0.5, 1.52, 0.02]] }, { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, -1.52, 0.02], [0.5, -1.52, 0.02]] },
            { t: 'pipe', r: 0.014, n: 6, pts: [[0.73, 0.2, 0], [0.73, -0.5, 0]] },
            { t: 'group', pos: [0, 1.6, 0], shapes: waves } ] },
        { id: 'altoparlante', name: 'Speaker and microphone', label: 'Speaker', color: '#475569', pos: [0.4, -1.38, 0], explode: [0.35, -0.5, 0.35],
          info: '<p>The <b>speaker</b> makes the air vibrate and produces sounds. The <b>microphone</b> does the opposite: it senses the vibrations of your voice and turns them into electrical signals.</p>',
          more: '<p>In the speaker a coil carrying current moves back and forth near a magnet and pushes a membrane. A smartphone\'s microphone (MEMS) is a chip with a silicon membrane thinner than a hair.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.18, 0.1], anim: { type: 'scale', axis: 'z', from: 1, to: 1.25, wave: 'sin', rate: 6 } }, { t: 'box', s: [0.3, 0.1, 0.01], pos: [0, 0, 0.055], color: '#9ca3af', decal: 1 },
            { t: 'box', s: [0.08, 0.08, 0.06], pos: [-0.75, 0, 0], color: '#64748b' } ] },
        { id: 'vibrazione', name: 'Vibration motor', label: 'Vibration', color: '#a16207', pos: [-0.45, -1.35, 0], explode: [-0.4, -0.5, 0.35],
          info: '<p>A tiny motor with a weight off to one side: when it spins, it makes the phone <b>shake</b>. That is how you feel notifications even in your pocket.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 0.22, n: 16, rot: [0, 0, 90], color: '#9ca3af' },
            { t: 'group', pos: [0.15, 0, 0], anim: { type: 'spin', axis: 'x', rate: 6 }, shapes: [ { t: 'cyl', r: 0.065, h: 0.06, n: 16, rot: [0, 0, 90], color: '#a16207' }, { t: 'box', s: [0.06, 0.06, 0.06], pos: [0, 0.05, 0] } ] } ] },
        { id: 'scocca', name: 'Back cover', label: 'Back', color: '#334155', pos: [0, 0, -0.1], explode: [0, 0, -1.25],
          info: '<p>This is the phone\'s "back", made of glass or plastic. It protects the inside and lets radio waves and wireless charging through.</p>',
          more: '<p>Under the back cover of many phones there is a copper <b>coil</b> for wireless charging: the charger creates a changing magnetic field and the coil turns it back into current (induction).</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'tube', r: 0.36, ri: 0.24, h: 0.012, n: 32, rot: [90, 0, 0], pos: [0, -0.3, 0.022], color: '#b45309' },
            { t: 'box', s: [0.6, 0.6, 0.02], pos: [-0.42, 1.12, -0.018], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '📱', title: 'A computer in your pocket', explode: 0, view: { rx: 0.18, ry: -0.75 },
        html: '<p>Inside the smartphone are the same parts as a computer: <b>processor</b>, <b>memory</b>, <b>screen</b> and <b>battery</b>, but squeezed into less than a centimetre of thickness!</p><p class="tip">🔁 Like every computer: <b>input</b> (touch, microphone, camera) → <b>processing</b> (processor) → <b>output</b> (screen, speaker).</p>' },
      { icon: '👆', title: 'The glass that feels your finger', focus: ['vetro', 'dito', 'display'], explode: 0.35, loop: [0, 0.45], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Under the glass there is an invisible grid of wires. Your finger conducts a little electricity: when you touch, the grid "senses" a change right at that spot.</p><p>A chip works out the position of the touch and sends it to the processor: that is how the phone knows which app you touched.</p><p class="tip">🧤 Try it with a woolly glove: it doesn\'t work, because wool doesn\'t conduct!</p>' },
      { icon: '🌈', title: 'Millions of coloured pixels', focus: ['display'], explode: 0.5, zoom: 1.15, view: { rx: 0.05, ry: -0.35 },
        html: '<p>The screen is made of millions of dots, the <b>pixels</b>. Each pixel has three little lights: <b>red</b>, <b>green</b> and <b>blue</b>. By turning them on more or less brightly you get all the colours.</p><p>In OLED displays each little light makes its own light; black is a switched-off pixel.</p>' },
      { icon: '🧠', title: 'The brain: processor and memory', focus: ['scheda-logica', 'processore', 'memoria'], explode: 0.8, view: { rx: 0.2, ry: -0.55 },
        html: '<p>The <b>processor</b> (SoC) carries out the apps\' instructions billions of times a second. The <b>RAM</b> keeps the open apps, the <b>storage</b> keeps photos, music and messages even when the phone is off.</p><p>Everything is connected by the <b>logic board</b>, full of copper tracks.</p>' },
      { icon: '🔋', title: 'The lithium battery', focus: ['batteria', 'scocca'], explode: 0.7, view: { rx: 0.2, ry: -2.4 },
        html: '<p>The battery is the biggest part. Inside, tiny particles called <b>lithium ions</b> move from one side to the other: when you charge the phone they go one way, when you use it they come back and make the current flow.</p><p class="tip">🌡️ Batteries hate heat: don\'t leave the phone in the sun or under the pillow while it charges.</p>' },
      { icon: '📡', title: 'Invisible radio waves', focus: ['antenne', 'telaio', 'scheda-logica'], explode: 0.25, view: { rx: 0.25, ry: -0.5 },
        html: '<p>When you send a message, the <b>antennas</b> turn it into <b>radio waves</b>: they travel at the speed of light to a tower (the "cell"), which passes it along the network to your friend\'s phone.</p><p>The same kind of waves, but different ones, are used for Wi-Fi, Bluetooth and GPS.</p>' },
      { icon: '📸', title: 'Cameras, sounds and vibration', focus: ['fotocamere', 'altoparlante', 'vibrazione'], explode: 0.6, view: { rx: 0.2, ry: -2.3 },
        html: '<p>The <b>cameras</b> gather light with a small lens and turn it into numbers with a sensor. The <b>speaker</b> makes the air vibrate, the <b>microphone</b> senses your voice, and the little <b>motor</b> with its lopsided weight makes the phone vibrate.</p>' }
    ],
    facts: [
      { icon: '🚀', title: 'More powerful than the Moon missions', html: 'The computer that guided Apollo 11 to the Moon in 1969 was thousands of times less powerful than the phone in your pocket.' },
      { icon: '📞', title: 'The first mobile phone', html: 'The first mobile phone (1973) weighed more than a kilo, was nicknamed "the brick", and its battery lasted 30 minutes of calls.' },
      { icon: '⛏️', title: 'A mine in your pocket', html: 'A smartphone contains more than 30 different chemical elements, even a little <b>gold</b> and silver. That is why it is important to <b>recycle it</b> and not throw it in the bin.' },
      { icon: '🛰️', title: 'GPS listens to space', html: 'To know where you are, the phone receives signals from at least 4 satellites and works out your position from the time they take to arrive.' },
      { icon: '🔟', title: 'One inch, many pixels', html: 'On a smartphone screen there are more than 400 pixels for every inch (2.5 cm): so close together that the eye can\'t tell them apart.' }
    ],
    quiz: [
      { type: 'mc', q: 'How does the touchscreen know where you touch?', options: ['With a camera under the glass', 'It senses the small electrical change from the finger', 'It measures the heat of the finger', 'It listens to the sound of the touch'], answer: 1, explain: 'The finger conducts electricity and changes the charge of the invisible grid under the glass.' },
      { type: 'mc', q: 'Which three colours make up every pixel of the screen?', options: ['Red, yellow, blue', 'Red, green, blue', 'White, black, grey', 'Green, purple, orange'], answer: 1, explain: 'RGB: Red, Green and Blue. Mixed together they make all the colours.' },
      { type: 'tf', q: 'Photos stay in the phone\'s memory even when you switch it off.', answer: true, explain: 'Photos are in the storage (flash memory), which is not erased without power. The RAM, however, is.' },
      { type: 'mc', q: 'How do messages travel from the phone to the tower?', options: ['By radio waves', 'By an invisible cable', 'By sound', 'By the light of the flash'], answer: 0, explain: 'The antennas turn the data into radio waves, which travel at the speed of light.' },
      { type: 'mc', q: 'What is the biggest part inside a smartphone?', options: ['The processor', 'The battery', 'The microphone', 'The camera'], answer: 1, explain: 'The lithium battery takes up almost half of the inside space.' },
      { type: 'order', q: 'Put in order: you tap an app\'s icon…', items: ['The touch glass senses the finger', 'The processor works out which app you chose', 'The memory loads the app', 'The display shows the open app'], explain: 'Input (touch) → processing (processor and memory) → output (display).' }
    ]
  });
})();
