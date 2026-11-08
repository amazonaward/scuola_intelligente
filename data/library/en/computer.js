/* The computer (desktop PC). Format: data/library/FORMATO.md */
(function () {
  /* generic fan: local y axis, spins (spin) */
  const fan = (r, color, rate) => [
    { t: 'tube', r: r, ri: r * 0.9, h: 0.06, n: 28, color: '#1f2937' },
    { t: 'group', anim: { type: 'spin', axis: 'y', rate: rate || 3 }, shapes: [
      { t: 'cyl', r: r * 0.28, h: 0.07, n: 16, color: '#374151' }
    ].concat(Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [r * 0.62, 0.012, r * 0.3], pos: [r * 0.58, 0, 0], rot: [28, 0, 0], color: color }] }))) }
  ];
  const keys = [];
  for (let row = 0; row < 3; row++) for (let i = 0; i < 13; i++) keys.push({ t: 'box', decal: 1, s: [0.11, 0.045, 0.1], pos: [-0.81 + i * 0.135, 0.05, -0.2 + row * 0.135], color: row === 0 && i > 10 ? '#fbbf24' : '#f1f5f9' });
  keys.push({ t: 'box', decal: 1, s: [0.7, 0.045, 0.1], pos: [-0.05, 0.05, 0.205], color: '#f1f5f9' });
  keys.push({ t: 'box', decal: 1, s: [0.24, 0.045, 0.1], pos: [0.7, 0.05, 0.205], color: '#f1f5f9' });
  const caps = Array.from({ length: 6 }, (_, k) => ({ t: 'cyl', r: 0.03, h: 0.08, n: 10, pos: [-0.62 + k * 0.07, -0.62, 0.06], rot: [90, 0, 0], color: k % 2 ? '#1e293b' : '#475569' }));

  LIBRARY({
    lang: 'en',
    id: 'computer',
    title: 'The computer',
    intro: 'A computer is a super-fast machine that <b>follows instructions</b>: it receives data (keyboard, mouse), <b>processes</b> it and shows the result (monitor). Open the glass case and discover all of its parts!',
    model: {
      rx: 0.3, ry: -0.42, speed: 0.6, height: 470,
      parts: [
        { id: 'case', name: 'Case (enclosure)', label: 'Case', color: '#374151', pos: [1.6, 1.05, -0.3], explode: [0, 0, 0],
          info: '<p>This is the "box" that holds all the parts together and protects them. It has a glass panel so you can look inside, air vents and the <b>power button</b>.</p>',
          more: '<p>The case is made of steel or aluminium: besides protecting, it acts as a <b>shield</b> against electromagnetic interference and guides cool air from the front to the back.</p>',
          shapes: [
            { t: 'box', s: [2, 2, 0.04], pos: [0, 0, -0.43] },
            { t: 'box', s: [2, 0.05, 0.9], pos: [0, 0.975, 0] },
            { t: 'box', s: [2, 0.05, 0.9], pos: [0, -0.975, 0] },
            { t: 'box', s: [0.06, 2, 0.9], pos: [0.97, 0, 0], color: '#1f2937' },
            { t: 'box', s: [0.04, 2, 0.9], pos: [-0.98, 0, 0] },
            { t: 'box', s: [2, 2, 0.02], pos: [0, 0, 0.44], color: '#bfdbfe', alpha: 0.13 },
            { t: 'cyl', r: 0.06, h: 0.03, pos: [1.01, 0.8, 0.1], rot: [0, 0, 90], color: '#22c55e' },
            { t: 'box', s: [0.01, 1.4, 0.04], pos: [1.005, -0.1, -0.25], color: '#38bdf8' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [0.85, -1.02, 0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [-0.85, -1.02, 0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [0.85, -1.02, -0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [-0.85, -1.02, -0.35], color: '#111827' }
          ] },
        { id: 'scheda-madre', name: 'Motherboard', color: '#15803d', pos: [1.45, 1.2, -0.68], explode: [0, 0, 0.35],
          info: '<p>This is the "city" of the computer: a large board with <b>copper roads</b> (traces) that connect all the parts to one another, the way streets connect houses.</p>',
          more: '<p>It holds the <b>socket</b> for the CPU, the slots for RAM and expansion cards, the <b>chipset</b> that directs data traffic, and a small chip (BIOS/UEFI) with the first program that starts when the computer is switched on.</p>',
          shapes: [
            { t: 'box', s: [1.5, 1.55, 0.04] },
            { t: 'box', s: [0.42, 0.42, 0.03], pos: [-0.2, 0.35, 0.03], color: '#d1d5db' },
            { t: 'box', s: [0.2, 0.2, 0.05], pos: [0.3, -0.42, 0.04], color: '#1f2937' },
            { t: 'box', s: [1.0, 0.06, 0.06], pos: [-0.12, -0.25, 0.05], color: '#111827' },
            { t: 'box', s: [1.0, 0.06, 0.06], pos: [-0.12, -0.6, 0.05], color: '#111827' },
            { t: 'box', s: [0.05, 0.95, 0.05], pos: [0.32, 0.3, 0.04], color: '#111827' },
            { t: 'box', s: [0.05, 0.95, 0.05], pos: [0.42, 0.3, 0.04], color: '#111827' },
            { t: 'box', s: [0.16, 0.5, 0.26], pos: [-0.68, 0.42, 0.15], color: '#9ca3af' }
          ].concat(caps) },
        { id: 'cpu', name: 'CPU (processor)', label: 'CPU', color: '#cbd5e1', pos: [1.25, 1.55, -0.635], explode: [0, 0.2, 1.25],
          info: '<p>This is the <b>brain</b> of the computer: it executes the instructions of programs one after another, <b>billions of times per second</b>. It does calculations and makes decisions ("if… then…").</p>',
          more: '<p>Inside are <b>billions of transistors</b>, tiny switches that turn on and off (1 and 0). Speed is measured in gigahertz: 3 GHz = 3 billion "ticks" of the clock per second. Modern CPUs have several <b>cores</b>, that is, several brains working together.</p>',
          shapes: [ { t: 'box', s: [0.34, 0.34, 0.03], color: '#166534' }, { t: 'box', s: [0.27, 0.27, 0.03], pos: [0, 0, 0.025] } ] },
        { id: 'dissipatore', name: 'Heatsink', color: '#d1d5db', pos: [1.25, 1.55, -0.38], explode: [0, 0.25, 2.05],
          info: '<p>The CPU gets very hot while working. The heatsink is made of many <b>metal fins</b> that carry the heat away, like a radiator working in reverse.</p>',
          more: '<p>The <b>copper pipes</b> (heat pipes) contain a liquid that evaporates near the CPU and condenses again among the fins: this way the heat travels very quickly. A <b>thermal paste</b> is applied between the CPU and the heatsink.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.3, 0.05], pos: [0, 0, -0.23], color: '#b45309' } ]
            .concat(Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.3, 0.014, 0.42], pos: [0, -0.27 + k * 0.054, 0.02] })))
            .concat([-0.08, 0, 0.08].map((x) => ({ t: 'cyl', r: 0.022, h: 0.64, n: 8, pos: [x, 0, 0.02], color: '#c2410c' }))) },
        { id: 'ventola-cpu', name: 'CPU fan', label: 'CPU fan', color: '#60a5fa', pos: [1.45, 1.55, -0.36], rot: [0, 0, 90], explode: [0.7, 0.25, 2.05],
          info: '<p>It blows cool air between the fins of the heatsink, so the heat leaves more quickly. The harder the CPU works, the faster the fan spins.</p>',
          shapes: fan(0.25, '#60a5fa', 3) },
        { id: 'ram', name: 'RAM (working memory)', label: 'RAM', color: '#1e3a8a', pos: [1.82, 1.5, -0.51], explode: [0.45, 0.1, 1.45],
          info: '<p>This is the computer\'s <b>workbench</b>: it holds the data of the open programs, so the CPU can grab them in an instant. It is very fast, but when you switch the computer off, <b>everything is erased</b>.</p>',
          more: '<p>RAM stands for <i>Random Access Memory</i>: any spot can be read in a few nanoseconds. A computer today usually has 8–32 GB of RAM. If there is too little, the computer becomes slow because it has to use the disk.</p>',
          shapes: [-0.05, 0.05].map((x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
            { t: 'box', s: [0.035, 0.9, 0.28] },
            { t: 'box', s: [0.04, 0.9, 0.03], pos: [0, 0, 0.15], color: '#a855f7', anim: { type: 'blink', color: '#22d3ee', rate: 0.5, phase: x } }
          ] })) },
        { id: 'ssd', name: 'SSD (mass storage)', label: 'SSD', color: '#111827', pos: [1.25, 1.12, -0.645], explode: [0, -0.05, 1.15],
          info: '<p>This is the "warehouse" where programs, photos and games stay saved <b>even when the computer is switched off</b>. It has no moving parts: it uses flash memory chips, like a USB stick.</p>',
          more: '<p>SSD stands for <i>Solid State Drive</i>. It is much faster than the old <b>hard disk drive</b> (HDD) with spinning platters. When you open a program, its data is copied from the SSD to the RAM.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.17, 0.02] }, { t: 'box', s: [0.34, 0.12, 0.006], pos: [-0.05, 0, 0.013], decal: 2, color: '#f97316' }, { t: 'box', s: [0.1, 0.1, 0.012], pos: [0.22, 0, 0.014], color: '#334155' } ] },
        { id: 'scheda-video', name: 'Graphics card (GPU)', label: 'Graphics card', color: '#1f2937', pos: [1.3, 0.83, -0.425], explode: [0, -0.5, 1.6],
          info: '<p>It draws the images you see on the screen: it calculates the colour of <b>millions of pixels</b>, about <b>60 times per second</b>. In video games it works very hard!</p>',
          more: '<p>The GPU has thousands of small cores that work <b>in parallel</b>: it is perfect for doing many identical operations together. This is why today it is also used to train <b>artificial intelligence</b>.</p>',
          shapes: [
            { t: 'box', s: [1.3, 0.12, 0.47] },
            { t: 'box', s: [1.3, 0.03, 0.45], pos: [0, 0.075, 0], color: '#065f46' },
            { t: 'box', s: [1.3, 0.02, 0.05], pos: [0, 0.07, 0.22], color: '#ef4444' },
            { t: 'box', s: [0.04, 0.18, 0.5], pos: [-0.67, 0.02, 0.0], color: '#9ca3af' },
            { t: 'group', pos: [0.3, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) },
            { t: 'group', pos: [-0.25, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) }
          ] },
        { id: 'alimentatore', name: 'Power supply', color: '#111827', pos: [1.0, 0.31, -0.32], explode: [-0.2, -0.35, 1.35],
          info: '<p>It takes the mains electricity from the wall socket (230 volts, far too strong!) and converts it into <b>weaker, direct current</b> (12, 5 and 3.3 volts) suitable for every part.</p>',
          more: '<p>Mains electricity is <b>alternating</b>: it reverses direction 50 times per second. The power supply lowers it, "straightens" it and makes it stable. A good power supply wastes little energy as heat.</p>',
          shapes: [
            { t: 'box', s: [0.75, 0.42, 0.82] },
            { t: 'group', pos: [0, 0.2, 0.05], shapes: fan(0.22, '#4b5563', 2) },
            { t: 'box', s: [0.3, 0.005, 0.2], pos: [0.15, 0.212, -0.28], color: '#fbbf24' },
            { t: 'pipe', r: 0.035, curve: true, pts: [[0.3, 0.2, -0.3], [0.4, 0.5, -0.35], [0.55, 1.0, -0.3], [0.62, 1.3, -0.32]], color: '#f59e0b' },
            { t: 'pipe', r: 0.03, curve: true, pts: [[0.25, 0.2, -0.2], [0.35, 0.45, -0.15], [0.4, 0.55, -0.1]], color: '#ef4444' }
          ] },
        { id: 'ventola-case', name: 'Case fan', label: 'Case fan', color: '#a78bfa', pos: [0.67, 1.6, -0.35], rot: [0, 0, 90], explode: [-0.9, 0.1, 0.6],
          info: '<p>It blows the warm air out of the case. Together with the CPU fan it creates an <b>airflow</b>: cool air enters at the front and warm air leaves at the back.</p>',
          shapes: fan(0.27, '#a78bfa', 2) },
        { id: 'monitor', name: 'Monitor', color: '#1f2937', pos: [-1.0, 0, -0.4], explode: [-0.7, 0.15, 0],
          info: '<p>It is an <b>output</b> device: it displays the images prepared by the graphics card. The screen is made of millions of tiny dots, the <b>pixels</b>.</p>',
          more: '<p>Each pixel has three lights: <b>red, green and blue</b> (RGB). Mixing them at different intensities produces millions of colours. A Full HD screen has 1920 × 1080 = more than 2 million pixels.</p>',
          shapes: [
            { t: 'box', s: [0.8, 0.04, 0.45], pos: [0, 0.02, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.75, 0.07], pos: [0, 0.42, -0.08], color: '#4b5563' },
            { t: 'box', s: [2.3, 1.35, 0.08], pos: [0, 1.35, 0] },
            { t: 'box', s: [2.18, 1.23, 0.01], pos: [0, 1.37, 0.045], decal: 1, color: '#2563eb' },
            { t: 'box', s: [1.0, 0.6, 0.006], pos: [-0.25, 1.45, 0.052], decal: 2, color: '#f8fafc' },
            { t: 'box', s: [1.0, 0.08, 0.008], pos: [-0.25, 1.71, 0.054], decal: 2, color: '#4c7cf3' },
            { t: 'box', s: [0.5, 0.05, 0.008], pos: [-0.38, 1.5, 0.056], decal: 2, color: '#94a3b8' },
            { t: 'box', s: [0.7, 0.05, 0.008], pos: [-0.28, 1.38, 0.056], decal: 2, color: '#cbd5e1' },
            { t: 'box', s: [0.45, 0.35, 0.007], pos: [0.62, 1.15, 0.053], decal: 2, color: '#fde68a' },
            { t: 'box', s: [2.18, 0.08, 0.008], pos: [0, 0.795, 0.053], decal: 2, color: '#0f172a' },
            { t: 'box', s: [0.02, 0.07, 0.01], pos: [-0.5, 1.38, 0.06], decal: 3, color: '#111827', anim: { type: 'blink', fade: true, wave: 'square', rate: 2 } }
          ] },
        { id: 'tastiera', name: 'Keyboard', color: '#334155', pos: [-0.9, 0.03, 0.75], explode: [0, 0, 0.75],
          info: '<p>It is an <b>input</b> device: every key you press closes a small circuit and sends the computer a <b>code</b>, a number that identifies the letter.</p>',
          more: '<p>The arrangement of the letters is called <b>QWERTY</b> (after the first six letters at the top left) and was invented for typewriters around 1870.</p>',
          shapes: [ { t: 'box', s: [1.9, 0.06, 0.62] } ].concat(keys) },
        { id: 'mouse', name: 'Mouse', color: '#e5e7eb', pos: [0.55, 0.0, 0.85], explode: [0.6, 0, 0.6],
          info: '<p>The mouse is also an <b>input</b> device: a small camera underneath watches the desk and works out how you move it; this is how the pointer moves across the screen.</p>',
          more: '<p>The optical sensor takes thousands of "photos" of the surface every second and compares them to calculate the movement. The first mouse (1964, Douglas Engelbart) was made of wood!</p>',
          shapes: [
            { t: 'sphere', r: 1, n: 10, hemi: true, scale: [0.17, 0.12, 0.27] },
            { t: 'cyl', r: 0.028, h: 0.03, n: 12, pos: [0, 0.115, -0.1], rot: [0, 0, 90], color: '#ef4444' },
            { t: 'box', s: [0.004, 0.02, 0.14], pos: [0, 0.11, -0.13], color: '#94a3b8' }
          ] }
      ]
    },
    steps: [
      { icon: '🔌', title: 'It switches on!', focus: ['alimentatore', 'case'], explode: 0.25, view: { rx: 0.3, ry: -0.2 },
        html: '<p>Press the <b>green button</b> on the case. The <b>power supply</b> takes electricity from the socket and turns it into weaker current, suitable for the delicate circuits of the computer.</p><p class="tip">⚠️ Never open a computer that is switched on or plugged into the wall!</p>' },
      { icon: '🏙️', title: 'The motherboard connects everything', focus: ['scheda-madre'], explode: 0.5,
        html: '<p>The electricity reaches the <b>motherboard</b>. It is like a city: the copper tracks are roads along which electricity and data travel from one part to another.</p><p>First, a small program (the <b>BIOS</b>) starts up and checks that everything is working.</p>' },
      { icon: '📦', title: 'From the warehouse to the workbench', focus: ['ssd', 'ram'], explode: 0.75,
        html: '<p>Programs are saved on the <b>SSD</b>, the warehouse that never forgets. When you open a game, its data is copied into the <b>RAM</b>, the workbench: it is very fast, but it is emptied when you switch off.</p><p class="tip">🧠 It is like taking a book from the library (SSD) and opening it on the desk (RAM).</p>' },
      { icon: '🧠', title: 'The CPU executes the instructions', focus: ['cpu', 'ram'], explode: 0.85,
        html: '<p>The <b>CPU</b> reads the program\'s instructions from the RAM and carries them out one after another: it adds, compares, decides. It does this <b>billions of times per second</b>!</p><p>For it, everything is made of <b>0 and 1</b>: current off or on.</p>' },
      { icon: '🌬️', title: 'Keeping cool!', focus: ['dissipatore', 'ventola-cpu', 'ventola-case', 'cpu'], explode: 0.5,
        html: '<p>A lot of work produces <b>heat</b>. The <b>heatsink</b> collects it with its fins, the <b>fan</b> blows the warm air away and the case fan pushes it out.</p><p>Without cooling, the CPU would shut itself down to avoid burning out.</p>' },
      { icon: '🎨', title: 'The graphics card draws', focus: ['scheda-video', 'monitor'], explode: 0.6,
        html: '<p>The <b>graphics card</b> calculates the colour of every pixel and sends the image to the <b>monitor</b> through a cable, about 60 times per second: this is why you see things move smoothly.</p>' },
      { icon: '⌨️', title: 'You are in control: input and output', focus: ['tastiera', 'mouse', 'monitor'], explode: 0, view: { rx: 0.45, ry: -0.6 },
        html: '<p><b>Keyboard and mouse</b> are <b>input</b> devices: they bring your commands into the computer. The <b>monitor</b> is an <b>output</b> device.</p><p class="tip">🔁 Input → processing (CPU) → output: this is the cycle of every computer, including your smartphone!</p>' }
    ],
    facts: [
      { icon: '🐘', title: 'The giant ENIAC', html: 'One of the first computers, ENIAC (1946), weighed 27 tonnes and filled an entire room. Your phone is millions of times more powerful!' },
      { icon: '🦋', title: 'The first "bug"', html: 'In 1947 a moth got stuck in a computer and stopped it. Since then, program errors have been called <i>bugs</i>, that is, "insects".' },
      { icon: '🔬', title: 'Billions of switches', html: 'A modern CPU contains tens of billions of transistors, each one thousands of times thinner than a human hair.' },
      { icon: '0️⃣', title: 'Only 0 and 1', html: 'Texts, photos, music and videos, inside the computer, are very long sequences of 0 and 1: <b>binary code</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'Which part is the "brain" that executes the instructions?', options: ['The RAM', 'The CPU', 'The monitor', 'The power supply'], answer: 1, explain: 'The CPU (processor) executes the instructions of programs, billions of times per second.' },
      { type: 'tf', q: 'When you switch off the computer, the data in the RAM stays saved.', answer: false, explain: 'RAM is erased when the power goes off: data remains in the SSD instead.' },
      { type: 'mc', q: 'What are the heatsink and fan for?', options: ['Making noise', 'Carrying away heat', 'Saving files', 'Connecting to the Internet'], answer: 1, explain: 'The CPU heats up: the heatsink fins collect the heat and the fan blows it away.' },
      { type: 'mc', q: 'Which of these is an OUTPUT device?', options: ['Keyboard', 'Mouse', 'Monitor', 'Microphone'], answer: 2, explain: 'The monitor shows the results: it is an output device. Keyboard, mouse and microphone are input devices.' },
      { type: 'mc', q: 'What does the power supply do?', options: ['Turns the mains electricity into electricity suitable for the circuits', 'Draws the images', 'Cools the graphics card', 'Stores photos'], answer: 0, explain: 'It lowers the 230 V from the socket to 12, 5 and 3.3 V of direct current.' },
      { type: 'order', q: 'Put in order the journey of a program that you open', items: ['It is saved on the SSD', 'It is copied into the RAM', 'The CPU executes its instructions', 'The result appears on the monitor'], explain: 'Warehouse (SSD) → workbench (RAM) → brain (CPU) → output (monitor).' }
    ]
  });
})();
