/* Il rover su Marte (tipo Perseverance). Formato: data/library/FORMATO.md
   Il rover guarda verso +x; z = fianchi; y = alto. Le sospensioni rocker-bogie oscillano (stesse animazioni in "ruote" e "sospensioni"). */
(function () {
  const WR = 0.34, HUB = 0.36;
  const ZS = [-1.22, 1.22];
  const ROCK = { type: 'swing', axis: 'z', amp: 6, rate: 0.5, pivot: [0.15, 1.0, 0] };
  const BOG = { type: 'swing', axis: 'z', amp: 9, rate: 0.5, phase: 0.3, pivot: [-0.55, 0.72, 0] };
  /* ruota: cerchione, battistrada a "chevron", mozzo; gira intorno a z */
  const wheel = (x, z) => ({ t: 'group', pos: [x, HUB, z], anim: { type: 'spin', axis: 'z', dir: -1, rate: 1.2 }, shapes: [
    { t: 'cyl', r: WR, h: 0.32, n: 30, rot: [90, 0, 0], color: '#a1a1aa' },
    { t: 'cyl', r: WR * 0.55, h: 0.34, n: 20, rot: [90, 0, 0], color: '#52525b' },
    { t: 'cyl', r: 0.07, h: 0.38, n: 12, rot: [90, 0, 0], color: '#d4d4d8' }
  ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [0, 0, k * 22.5], shapes: [
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, 0.075], rot: [0, 22, 0], color: '#3f3f46' },
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, -0.075], rot: [0, -22, 0], color: '#3f3f46' } ] }))) });
  const side = (z, withWheels) => {
    const zz = z + Math.sign(z) * 0.0;
    const rockerArms = [ { t: 'pipe', r: 0.055, n: 10, pts: [[1.15, HUB, zz], [0.85, 0.98, zz], [0.15, 1.0, zz], [-0.55, 0.72, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.11, h: 0.16, n: 16, rot: [90, 0, 0], pos: [0.15, 1.0, zz], color: '#71717a' } ];
    const bogieArms = [ { t: 'pipe', r: 0.05, n: 10, pts: [[0, HUB, zz], [-0.3, 0.68, zz], [-0.8, 0.68, zz], [-1.15, HUB, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.09, h: 0.15, n: 16, rot: [90, 0, 0], pos: [-0.55, 0.72, zz], color: '#71717a' } ];
    const wf = [wheel(1.15, z)], wb = [wheel(0, z), wheel(-1.15, z)];
    return { t: 'group', anim: ROCK, shapes: (withWheels ? wf : rockerArms).concat([ { t: 'group', anim: BOG, shapes: withWheels ? wb : bogieArms } ]) };
  };

  LIBRARY({
    lang: 'en',
    id: 'rover',
    title: 'The rover on Mars',
    intro: 'A <b>rover</b> is a robot-laboratory as big as a car that explores Mars all by itself. It takes photos, drives among the rocks, analyses them with a laser and collects samples to look for signs of <b>ancient life</b>.',
    model: {
      rx: 0.3, ry: -0.75, speed: 0.22, height: 470, fit: 1.12,
      parts: [
        { id: 'suolo', name: 'Martian soil', label: 'Martian soil', color: '#b45f3c', explode: [0, -0.6, 0], chip: true,
          info: '<p>Mars is red because its dust contains lots of <b>rust</b> (iron oxide). The ground is full of stones, sand and dunes.</p>',
          more: '<p>On Mars gravity is about <b>a third</b> of Earth\'s, the air is very thin (almost only carbon dioxide) and at night the temperature drops to −80 °C.</p>',
          shapes: [ { t: 'lathe', n: 40, pts: [[0, 0.0], [3.0, 0.0], [3.25, -0.12], [3.2, -0.2], [0, -0.2]], color: '#b45f3c' },
            { t: 'sphere', r: 0.28, n: 8, m: 10, pos: [3.0, 0.08, 0.6], scale: [1.3, 0.8, 1], color: '#7c2d12' },
            { t: 'sphere', r: 0.2, n: 8, m: 10, pos: [-2.4, 0.05, 1.2], scale: [1.2, 0.7, 1], color: '#92400e' },
            { t: 'sphere', r: 0.15, n: 8, m: 10, pos: [1.9, 0.03, -2.0], color: '#78350f' },
            { t: 'sphere', r: 0.35, n: 8, m: 10, pos: [-1.5, 0.05, -2.3], scale: [1.4, 0.6, 1], color: '#9a3412' },
            { t: 'sphere', r: 0.1, n: 6, m: 8, pos: [1.4, 0.02, 2.3], color: '#7c2d12' } ] },
        { id: 'corpo', name: 'Rover body', label: 'Body', color: '#e4e4e7', explode: [0, 0.9, 0],
          info: '<p>This is the rover\'s "belly": inside, nice and warm, are the <b>computer</b>, the batteries and the laboratory instruments. On top is the "deck" where the antennas and cameras are mounted.</p>',
          more: '<p>The rover is as big as a small car (3 m long) and weighs about <b>1 tonne</b>. The computer is "hardened" against radiation, and the rover drives itself for short stretches, choosing its path with the cameras.</p>',
          shapes: [ { t: 'box', s: [2.3, 0.5, 1.75], pos: [0, 1.25, 0] },
            { t: 'box', s: [2.2, 0.06, 1.65], pos: [0, 1.53, 0], color: '#d4d4d8' },
            { t: 'box', s: [2.36, 0.08, 1.81], pos: [0, 1.02, 0], color: '#a1a1aa' },
            { t: 'box', s: [0.03, 0.3, 1.3], pos: [1.16, 1.25, 0], color: '#27272a', decal: 1 },
            { t: 'box', s: [0.6, 0.02, 0.4], pos: [0.3, 1.565, -0.5], color: '#fbbf24', decal: 1 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, 0.45], color: '#0ea5e9', decal: 2 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, -0.45], color: '#0ea5e9', decal: 2 } ] },
        { id: 'ruote', name: 'Wheels', color: '#a1a1aa', explode: [0, 0, 0.9],
          info: '<p>Six aluminium wheels with "claws" (zig-zag cleats) so they don\'t slip on the sand. Each wheel has its <b>own motor</b>, and the front and rear ones can also steer.</p>',
          more: '<p>The wheels have no tyres: an inner tube on Mars could get a puncture and nobody would be there to change it! The rover goes very slowly, about <b>150 metres an hour</b>, so as not to take risks.</p>',
          shapes: ZS.map((z) => side(z, true)) },
        { id: 'sospensioni', name: 'Rocker-bogie suspension', label: 'Suspension', color: '#d4d4d8', explode: [0, 0, 0.55],
          info: '<p>Jointed arms connect the wheels to the body. They tilt like seesaws so that <b>all six wheels</b> always touch the ground, even over rocks.</p>',
          more: '<p>The system is called <b>rocker-bogie</b>: the "rocker" holds the front wheel and the "bogie" holds the other two. The rover can climb over rocks as tall as its wheels without tipping over, even when tilted by 45°.</p>',
          shapes: ZS.map((z) => side(z, false)).concat([ { t: 'pipe', r: 0.045, n: 10, pts: [[0.15, 1.42, -1.1], [0.15, 1.62, 0], [0.15, 1.42, 1.1]], color: '#a1a1aa' } ]) },
        { id: 'testa', name: 'Camera mast', label: 'Head and cameras', color: '#e4e4e7', pos: [0.85, 1.55, 0.55], explode: [0.3, 1.2, 0.4],
          info: '<p>This is the rover\'s "head", 2 metres up. Two colour cameras, like two eyes, take <b>3D photos</b>; other cameras check for obstacles near the wheels.</p>',
          more: '<p>Images and commands travel between Mars and Earth in <b>4 to 24 minutes</b> (it depends on where the two planets are): that is why the rover can\'t be driven "live" like a toy car.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 1.35, n: 14, pos: [0, 0.67, 0], color: '#d4d4d8' }, { t: 'cyl', r: 0.12, h: 0.1, n: 16, pos: [0, 0.05, 0], color: '#71717a' },
            { t: 'group', pos: [0, 1.42, 0], anim: { type: 'swing', axis: 'y', amp: 50, wave: 'window', from: 0.05, to: 0.45, ramp: 0.3 }, shapes: [
              { t: 'cyl', r: 0.1, h: 0.14, n: 16, color: '#71717a' },
              { t: 'box', s: [0.42, 0.28, 0.62], pos: [0.05, 0.2, 0], color: '#f4f4f5' },
              { t: 'box', s: [0.32, 0.2, 0.2], pos: [0.12, 0.2, -0.02], color: '#d4d4d8' },
              { t: 'cyl', r: 0.09, h: 0.08, n: 20, rot: [0, 0, 90], pos: [0.29, 0.22, 0], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, 0.22], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, -0.22], color: '#18181b' },
              { t: 'cyl', r: 0.035, h: 0.02, n: 12, rot: [0, 0, 90], pos: [0.305, 0.22, 0], color: '#38bdf8', decal: 1 } ] } ] },
        { id: 'laser', name: 'SuperCam laser', label: 'Laser', color: '#ef4444', chip: true,
          info: '<p>From its head the rover fires a tiny <b>laser</b> at a rock up to 7 metres away. The rock gives off a spark and, by looking at the light of the spark, the rover works out <b>what it is made of</b>.</p>',
          more: '<p>Every chemical element gives off light of specific colours: by analysing the <b>spectrum</b> of the spark you can recognise iron, silicon, calcium… A microphone also records the laser\'s "tick": the sound tells you whether the rock is hard or soft.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[1.17, 3.19, 0.55], [2.9, 0.22, 0.6]], color: '#ef4444', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.1 } },
            { t: 'sphere', r: 0.11, n: 8, pos: [2.9, 0.22, 0.6], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.2 } } ] },
        { id: 'braccio', name: 'Robotic arm', color: '#e4e4e7', pos: [1.18, 1.18, -0.35], explode: [0.9, 0.2, -0.6],
          info: '<p>An arm more than 2 metres long with 5 joints. At the tip it has a "hand" with a <b>drill</b>, a magnifying lens and other instruments for studying rocks up close.</p>',
          shapes: [ { t: 'cyl', r: 0.11, h: 0.2, n: 16, rot: [90, 0, 0], color: '#71717a' },
            { t: 'group', anim: { type: 'swing', axis: 'z', amp: -38, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
              { t: 'pipe', r: 0.06, n: 12, pts: [[0, 0, 0], [0.95, 0.15, 0]] },
              { t: 'group', pos: [0.95, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -45, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
                { t: 'sphere', r: 0.09, n: 10, color: '#71717a' },
                { t: 'pipe', r: 0.055, n: 12, pts: [[0, 0, 0], [0.8, -0.1, 0]] },
                { t: 'group', pos: [0.85, -0.1, 0], shapes: [
                  { t: 'box', s: [0.28, 0.28, 0.28], color: '#a1a1aa' },
                  { t: 'cyl', r: 0.05, h: 0.38, n: 12, pos: [0, -0.3, 0], color: '#52525b' },
                  { t: 'cyl', r: 0.02, h: 0.2, n: 8, pos: [0, -0.56, 0], color: '#d4d4d8' },
                  { t: 'cyl', r: 0.08, h: 0.12, n: 14, pos: [0.18, 0, 0], rot: [0, 0, 90], color: '#3f3f46' },
                  { t: 'box', s: [0.12, 0.18, 0.12], pos: [0, 0, 0.2], color: '#fbbf24' } ] } ] } ] } ] },
        { id: 'provette', name: 'Sample tubes', label: 'Tubes', color: '#e5e7eb', explode: [0, -0.4, -1.1],
          info: '<p>The drill takes small rock "cores" the size of a piece of chalk and seals them in <b>tubes</b>. One day another mission will bring them to Earth.</p>',
          shapes: Array.from({ length: 7 }, (_, k) => ({ t: 'cyl', r: 0.045, h: 0.42, n: 14, rot: [0, 0, 90], pos: [-0.2, 0.94, -0.6 + k * 0.12], color: k % 2 ? '#e5e7eb' : '#cbd5e1' })).concat([ { t: 'box', s: [0.6, 0.06, 0.95], pos: [-0.2, 0.89, -0.24], color: '#71717a' } ]) },
        { id: 'rtg', name: 'Nuclear generator (RTG)', label: 'Generator', color: '#3f3f46', pos: [-1.35, 1.55, 0], explode: [-1.0, 0.4, 0],
          info: '<p>The rover doesn\'t use solar panels, which dust would cover. It has a special "battery": a <b>radioactive</b> material that gives off heat, and the heat becomes electricity, day and night, for many years.</p>',
          more: '<p>The RTG contains about 5 kg of plutonium-238 and produces about 110 watts: not much, but for 14 years. The extra heat also helps to <b>keep the instruments warm</b> during the freezing Martian nights.</p>',
          shapes: [ { t: 'group', rot: [0, 0, 32], shapes: [ { t: 'cyl', r: 0.24, h: 0.95, n: 24, rot: [0, 0, 90] },
            { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [0.48, 0, 0], color: '#71717a' }, { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [-0.48, 0, 0], color: '#71717a' } ]
            .concat(Array.from({ length: 8 }, (_, k) => ({ t: 'group', rot: [k * 45, 0, 0], shapes: [ { t: 'box', s: [0.86, 0.2, 0.025], pos: [0, 0.33, 0], color: '#27272a' } ] }))) },
            { t: 'sphere', r: 0.24, n: 10, color: '#f97316', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ] },
        { id: 'antenne', name: 'Antennas', color: '#d4d4d8', explode: [-0.3, 1.0, -0.6],
          info: '<p>The rover "phones" home with two antennas: the hexagonal one talks <b>directly to Earth</b>; the small one talks to the satellites orbiting Mars, which act as relays.</p>',
          more: '<p>Most of the data goes through the satellites (such as the Mars Reconnaissance Orbiter), which receive much faster and then retransmit to NASA\'s big antennas in California, Spain and Australia.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.3, n: 10, pos: [-0.55, 1.7, -0.55], color: '#71717a' },
            { t: 'group', pos: [-0.55, 1.9, -0.55], anim: { type: 'swing', axis: 'y', amp: 30, rate: 0.5 }, shapes: [
              { t: 'group', rot: [0, 0, 55], shapes: [ { t: 'cyl', r: 0.32, h: 0.06, n: 6, color: '#e4e4e7' }, { t: 'cyl', r: 0.26, h: 0.02, n: 6, pos: [0, 0.035, 0], color: '#a1a1aa', decal: 1 } ] } ] },
            { t: 'cyl', r: 0.06, h: 0.32, n: 14, pos: [-0.85, 1.72, 0.55], color: '#f4f4f5' }, { t: 'sphere', r: 0.06, n: 8, pos: [-0.85, 1.88, 0.55], color: '#f4f4f5' } ] },
        { id: 'elicottero', name: 'Ingenuity helicopter', label: 'Helicopter', color: '#a1a1aa', pos: [-1.6, 0, 2.0], explode: [-0.6, 0.8, 0.8],
          anim: { type: 'move', dir: [0, 1, 0], amp: 1.6, wave: 'window', from: 0.15, to: 0.85, ramp: 0.4 },
          info: '<p>A small <b>1.8 kg</b> helicopter that arrived together with the Perseverance rover. In 2021 it became the first aircraft to fly on another planet!</p>',
          more: '<p>The air on Mars is 100 times thinner than ours: to lift off, its 1.2 m blades spin at <b>2400 turns per minute</b>, much faster than those of a normal helicopter. It flew 72 times.</p>',
          shapes: [ { t: 'box', s: [0.2, 0.18, 0.2], pos: [0, 0.38, 0], color: '#f4f4f5' },
            { t: 'cyl', r: 0.02, h: 0.42, n: 8, pos: [0, 0.64, 0], color: '#3f3f46' },
            { t: 'box', s: [0.32, 0.02, 0.2], pos: [0, 0.88, 0], color: '#1e3a8a' } ]
            .concat([45, 135, 225, 315].map((a) => ({ t: 'pipe', r: 0.012, n: 6, pts: [[0.08 * Math.cos(a * Math.PI / 180), 0.3, 0.08 * Math.sin(a * Math.PI / 180)], [0.3 * Math.cos(a * Math.PI / 180), 0.0, 0.3 * Math.sin(a * Math.PI / 180)]], color: '#9ca3af' })))
            .concat([ [0.68, 1], [0.78, -1] ].map(([y, d]) => ({ t: 'group', pos: [0, y, 0], anim: { type: 'spin', axis: 'y', dir: d, rate: 12 }, shapes: [
              { t: 'box', s: [1.2, 0.012, 0.09], rot: [d * 8, 0, 0], color: '#52525b' }, { t: 'cyl', r: 0.04, h: 0.04, n: 10, color: '#3f3f46' } ] }))) }
      ]
    },
    steps: [
      { icon: '🤖', title: 'A robot explorer', explode: 0,
        html: '<p>Mars is very, very far away: getting there takes a journey of <b>7 months</b>. Sending people is still too difficult, so we send robots. The rover is a <b>laboratory on wheels</b> that works on its own for years.</p>' },
      { icon: '🛞', title: 'Six wheels and jointed arms', focus: ['ruote', 'sospensioni', 'suolo'], view: { rx: 0.12, ry: -0.1 },
        html: '<p>Each wheel has a motor. The <b>rocker-bogie suspension</b> is made of arms that tilt like seesaws: that way all 6 wheels always stay on the ground, even over rocks.</p><p class="tip">🐢 The rover is slow: less than 200 metres an hour. On Mars there is no tow truck!</p>' },
      { icon: '👀', title: 'The rover\'s eyes', focus: ['testa', 'corpo'], loop: [0, 0.48], zoom: 1.4, view: { rx: 0.2, ry: -0.5 },
        html: '<p>At the top of the mast there are two <b>cameras</b>, set apart like our eyes: together they take 3D photos. Scientists on Earth look at them and decide where to go.</p><p>The rover can also drive itself for a few metres, choosing the safest route.</p>' },
      { icon: '🔴', title: 'A laser to read rocks', focus: ['laser', 'testa', 'suolo'], loop: [0.45, 0.65], view: { rx: 0.25, ry: -0.9 },
        html: '<p>The rover fires a small <b>laser</b> at a rock: a tiny spark lights up. From the light of the spark you can tell what the rock is made of, without even touching it!</p>' },
      { icon: '🦾', title: 'The arm and the drill', focus: ['braccio', 'provette', 'suolo'], loop: [0.6, 1.0], view: { rx: 0.2, ry: -0.35 },
        html: '<p>The <b>robotic arm</b> places the instruments on the rock: a magnifying lens, chemical sensors and a <b>drill</b>. The rock "cores" are sealed in <b>tubes</b>.</p><p class="tip">🧪 The goal? To look for traces of microbes that lived billions of years ago, when Mars had lakes and rivers.</p>' },
      { icon: '⚡', title: 'Power day and night', focus: ['rtg', 'corpo'], view: { rx: 0.25, ry: -2.3 }, zoom: 1.3,
        html: '<p>At the back is the <b>nuclear generator</b> (RTG): a material that heats itself up; the heat becomes electricity. It works at night and during sandstorms too, when solar panels would be no use.</p>' },
      { icon: '📡', title: 'Calling home', focus: ['antenne', 'corpo'], view: { rx: 0.5, ry: -1.6 }, zoom: 1.2,
        html: '<p>With its <b>antennas</b> the rover receives commands and sends photos and data. The message takes several minutes to arrive: the rover has to be able to manage on its own.</p>' },
      { icon: '🚁', title: 'The first flight on Mars', focus: ['elicottero', 'suolo'], loop: [0.1, 0.9], view: { rx: 0.15, ry: -1.2 },
        html: '<p><b>Ingenuity</b> is a mini-helicopter that acted as a "scout from above". Its blades spin very fast because the air on Mars is so thin.</p>' }
    ],
    facts: [
      { icon: '🚗', title: 'As big as a car', html: 'Perseverance is 3 metres long, 2.7 wide and weighs about a tonne. Its name means <b>"perseverance"</b>.' },
      { icon: '🪂', title: 'Seven minutes of terror', html: 'To land, the rover goes from 20,000 km/h to zero in 7 minutes: heat shield, parachute and finally a "flying crane" that lowers it down with cables.' },
      { icon: '🎙️', title: 'The sounds of Mars', html: 'Perseverance has microphones: for the first time we have heard the <b>wind on Mars</b> and the buzz of the helicopter.' },
      { icon: '🏆', title: 'Opportunity\'s record', html: 'The Opportunity rover was meant to last 90 days but worked for <b>14 years</b>, travelling more than a marathon (45 km).' },
      { icon: '🔤', title: 'A message on the wheels', html: 'Curiosity\'s wheels have holes that leave a message in Morse code on the sand: "JPL", the laboratory that built it.' }
    ],
    quiz: [
      { type: 'mc', q: 'Why is the rover\'s suspension jointed (rocker-bogie)?', options: ['To go faster', 'To keep all the wheels on the ground over rocks', 'To save energy', 'To look like a spider'], answer: 1, explain: 'The arms tilt like seesaws: all 6 wheels stay in contact with the ground and the rover doesn\'t tip over.' },
      { type: 'mc', q: 'Why isn\'t the rover driven "live" like a toy car?', options: ['Because commands take minutes to arrive', 'Because it has no steering wheel', 'Because it is always night on Mars', 'Because it has no antennas'], answer: 0, explain: 'Radio signals take 4 to 24 minutes between Earth and Mars.' },
      { type: 'tf', q: 'Mars is red because its dust contains rust.', answer: true, explain: 'Iron oxide (rust) colours the Martian dust red.' },
      { type: 'mc', q: 'What is the rover\'s laser for?', options: ['To defend itself', 'To heat the instruments', 'To find out what rocks are made of', 'To light up the night'], answer: 2, explain: 'The laser makes a spark on the rock; the light of the spark reveals the chemical elements.' },
      { type: 'mc', q: 'Where does Perseverance get its energy?', options: ['From big solar panels', 'From a generator that turns heat into electricity', 'From the Martian wind', 'From batteries replaced every month'], answer: 1, explain: 'The RTG uses the heat of a radioactive material: it works day and night for many years.' },
      { type: 'num', q: 'How many wheels does the rover have?', answer: 6, explain: 'Six wheels, each with its own motor.' }
    ]
  });
})();
