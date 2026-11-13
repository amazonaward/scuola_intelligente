/* La nave portacontainer. Prua verso +x, alto = +y, la linea di galleggiamento è a y = 0.
   Lo scafo è fatto da "piante" (vista dall'alto) estruse in verticale. La nave beccheggia piano sulle onde. */
(function () {
  const TAU = Math.PI * 2;
  const plan = (s, sx) => [[-3.5, -0.75], [2.0, -0.75], [2.7, -0.62], [3.2, -0.38], [3.52, -0.12], [3.6, 0], [3.52, 0.12], [3.2, 0.38], [2.7, 0.62], [2.0, 0.75], [-3.5, 0.75], [-3.62, 0.5], [-3.62, -0.5]]
    .map(([x, z]) => [x * (sx || 1), z * s]);
  /* estrude una pianta tra y0 e y1 */
  const slab = (pts, y0, y1, color, extra) => Object.assign({ t: 'extrude', d: y1 - y0, pts, rot: [90, 0, 0], pos: [0, (y0 + y1) / 2, 0], color }, extra || {});
  const BOB = { type: 'move', dir: [0, 1, 0], amp: 0.035, wave: 'sin', rate: 0.5 };
  const PAL = ['#ef4444', '#2563eb', '#f59e0b', '#16a34a', '#64748b', '#0891b2', '#b91c1c', '#7c3aed', '#ea580c', '#0f766e'];
  const boxes = [];
  for (let b = 0; b < 11; b++) {
    const x = -1.65 + b * 0.43, rows = x > 2.3 ? [-0.18, 0.18] : x > 1.9 ? [-0.48, -0.16, 0.16, 0.48] : [-0.54, -0.18, 0.18, 0.54];
    rows.forEach((z, r) => { for (let t = 0; t < (x > 2.3 ? 2 : 3); t++) boxes.push({ t: 'box', div: 1, s: [0.41, 0.25, 0.34], pos: [x, 0.7 + t * 0.26, z], color: PAL[(b * 7 + r * 3 + t * 5) % PAL.length] }); });
  }
  const winds = [0.95, 1.25, 1.55].flatMap((y) => [1, -1].map((s) => ({ t: 'box', s: [0.62, 0.07, 0.01], pos: [-2.55, y, s * 0.6], color: '#1e293b', decal: 1 }))).concat([0.95, 1.25, 1.55].map((y) => ({ t: 'box', s: [0.01, 0.07, 1.0], pos: [-2.19, y, 0], color: '#1e293b', decal: 1 })));
  const smoke = Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.12, n: 6, m: 10, pos: [-3.15, 1.75, 0], color: '#9ca3af',
    anim: [{ type: 'move', dir: [-0.6, 1, 0], amp: 0.9, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'scale', from: 0.5, to: 1.6, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 6 }] }));
  const arrow = (pos, down, len, color) => ({ t: 'group', pos, rot: down ? [180, 0, 0] : [0, 0, 0], anim: { type: 'scale', from: 0.95, to: 1.05, wave: 'sin01', rate: 0.5 },
    shapes: [ { t: 'cyl', r: 0.07, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.17, h: 0.32, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    lang: 'en',
    id: 'nave',
    title: 'The ship',
    intro: 'A container ship is as long as <b>4 football pitches</b>, is made of steel and carries thousands of containers… and yet it floats! Discover the secret of Archimedes, the propeller, the rudder and the ballast.',
    model: {
      rx: 0.25, ry: -0.6, speed: 0.4, height: 460, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'mare', name: 'Sea', color: '#0284c7', alpha: 0.22, explode: [0, 0, 0], chip: false, noLabel: true,
          info: '<p>The sea water. The part of the ship below the water is called the <b>underwater hull</b>, the part above is the <b>topsides</b>.</p>',
          shapes: [ { t: 'box', s: [9.5, 1.1, 3.6], pos: [0, -0.56, 0], div: 1 }, { t: 'box', s: [9.5, 0.01, 3.6], pos: [0, -0.005, 0], color: '#7dd3fc', alpha: 0.35, div: 4 } ] },
        { id: 'scafo', name: 'Hull (above water)', label: 'Hull', color: '#1e3a8a', anim: BOB, explode: [0, 0.4, 0],
          info: '<p>This is the big steel "shell" of the ship. The part above the water is often dark; at the top there is the <b>deck</b>, where the containers sit.</p>',
          more: '<p>The hull is made of steel plates welded onto a "skeleton" of beams (the <b>frames</b> and the <b>keel</b>). Many ships have a <b>double bottom</b>: if the outer hull breaks, the water does not get into the ship straight away.</p>',
          shapes: [ slab(plan(1), 0, 0.56), slab(plan(0.99), 0.56, 0.59, '#475569'),
            slab(plan(1).filter(([x]) => x > 2.4).concat([[2.4, 0.71], [2.4, -0.71]]), 0.56, 0.78, '#1e3a8a'),
            { t: 'box', s: [0.6, 0.06, 0.012], pos: [3.0, 0.42, 0.53], rot: [0, -25, 0], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, 0.757], color: '#f8fafc', decal: 1 }, { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, -0.757], color: '#f8fafc', decal: 1 } ] },
        { id: 'carena', name: 'Underwater hull', label: 'Underwater hull', color: '#b91c1c', anim: BOB, explode: [0, -0.45, 0],
          info: '<p>This is the part of the hull <b>under the water</b>, painted red with a special paint that stops algae and shells from sticking to it.</p>',
          more: '<p>The more loaded the ship is, the deeper the hull sinks. On the side there is a mark, the <b>load line</b> (Plimsoll line), which shows how far the ship can safely sink in different seas and seasons.</p>',
          shapes: [ slab(plan(0.97, 0.995), -0.36, 0), slab(plan(0.85, 0.97), -0.52, -0.36), slab(plan(0.6, 0.93), -0.58, -0.52),
            { t: 'sphere', r: 1, n: 10, m: 16, pos: [3.4, -0.42, 0], scale: [0.36, 0.13, 0.13] } ] },
        { id: 'container', name: 'Containers', color: '#ef4444', anim: BOB, explode: [0, 1.0, 0],
          info: '<p><b>Containers</b> are big steel boxes, all the same size. They stack like building blocks and go from ship to train to lorry without being opened.</p>',
          more: '<p>A standard container is 20 feet long (about 6 m): it is called a <b>TEU</b>. The biggest ships carry more than <b>24 000</b> of them! Almost everything we buy has travelled in a container.</p>',
          shapes: boxes },
        { id: 'ponte-comando', name: 'Bridge', label: 'Bridge', color: '#f8fafc', anim: BOB, explode: [-0.4, 0.8, 0],
          info: '<p>The white building at the stern. At the top is the <b>bridge</b>, where the captain and the officers steer the ship with radar, GPS and radio. Below are the crew\'s cabins.</p>',
          more: '<p>To see over the pile of containers the bridge must be very high. The "wings" at the sides are used to look along the side of the ship when entering port. The <b>radar</b> on the roof "sees" other ships even at night and in fog.</p>',
          shapes: [ { t: 'box', s: [0.72, 1.2, 1.2], pos: [-2.55, 1.17, 0] }, { t: 'box', s: [0.5, 0.14, 1.7], pos: [-2.45, 1.72, 0] }, ...winds,
            { t: 'cyl', r: 0.025, h: 0.4, n: 8, pos: [-2.55, 2.0, 0], color: '#475569' }, { t: 'group', pos: [-2.55, 2.2, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'box', s: [0.05, 0.05, 0.45], color: '#1f2937' } ] } ] },
        { id: 'fumaiolo', name: 'Funnel', color: '#f97316', anim: BOB, explode: [-0.6, 0.9, 0],
          info: '<p>The ship\'s "chimney": the engine\'s fumes come out here. Modern ships have filters to pollute less.</p>',
          shapes: [ { t: 'box', s: [0.38, 0.95, 0.42], pos: [-3.15, 1.1, 0] }, { t: 'box', s: [0.4, 0.12, 0.44], pos: [-3.15, 1.52, 0], color: '#111827' }, ...smoke ] },
        { id: 'motore', name: 'Diesel engine', label: 'Engine', color: '#57534e', anim: BOB, explode: [0, -0.4, 1.2],
          info: '<p>At the bottom of the ship there is a huge engine, as tall as a 4-storey building! It burns fuel and turns the propeller <b>shaft</b>.</p>',
          more: '<p>The engines of big ships are very slow <b>two-stroke</b> diesels: they turn at about 80–100 revolutions per minute and are connected directly to the propeller, with no gearbox. They can produce more than 80 000 horsepower.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.5], pos: [-2.45, -0.15, 0] }, ...[-2.75, -2.6, -2.45, -2.3, -2.15].map((x) => ({ t: 'cyl', r: 0.07, h: 0.2, n: 12, pos: [x, 0.18, 0], color: '#78716c' })) ] },
        { id: 'asse', name: 'Propeller shaft', label: 'Shaft', color: '#9ca3af', anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], pos: [0, -0.33, 0], explode: [0, -0.4, 1.2],
          info: '<p>A long steel cylinder that carries the rotation from the engine to the propeller, leaving the hull through a watertight seal.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 1.15, n: 12, rot: [0, 0, 90], pos: [-3.25, 0, 0] }, { t: 'box', s: [0.02, 0.08, 0.02], pos: [-3.25, 0.04, 0], color: '#475569' } ] },
        { id: 'elica', name: 'Propeller', color: '#ca8a04', pos: [-3.78, -0.33, 0], anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], explode: [-0.6, -0.4, 0],
          info: '<p>The bronze propeller has big bolted-on blades. As it turns it pushes the water <b>backwards</b> and the water pushes the ship <b>forwards</b>.</p>',
          more: '<p>The propeller of a big container ship is about <b>9–10 metres</b> across and weighs over 100 tonnes, but it turns slowly. It is Newton\'s third law: action and reaction, like when you swim pushing the water with your hands.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1.4, 1, 1], color: '#a16207' } ].concat([0, 90, 180, 270].map((a) => ({ t: 'group', rot: [a, 0, 0], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.2, 0], scale: [0.05, 0.2, 0.12], rot: [0, 35, 0] } ] }))) },
        { id: 'timone', name: 'Rudder', color: '#b91c1c', pos: [-3.98, -0.25, 0], anim: [BOB, { type: 'swing', axis: 'y', amp: 22, rate: 0.2 }], explode: [-0.8, -0.3, 0],
          info: '<p>A big "fin" behind the propeller. When it turns, it deflects the water coming from the propeller and swings the stern round: this is how the ship changes direction.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.5, 0.05], pos: [-0.12, 0, 0] }, { t: 'cyl', r: 0.03, h: 0.7, n: 8, pos: [0, 0.15, 0], color: '#475569' } ] },
        { id: 'zavorra', name: 'Ballast tanks', label: 'Ballast', color: '#0369a1', alpha: 0.55, anim: BOB, explode: [0, -0.9, 0],
          info: '<p>In the double bottom there are big tanks that can be filled with <b>sea water</b>. When the ship is empty, the ballast makes it sit deeper and makes it <b>stable</b>.</p>',
          more: '<p>The weight down low lowers the <b>centre of gravity</b>: the ship becomes like a roly-poly toy that always comes back upright. But ballast water can carry small animals to faraway seas: today it must be <b>treated</b> before it is released.</p>',
          shapes: [-1.6, -0.4, 0.8, 2.0].map((x) => ({ t: 'group', pos: [x, -0.52, 0], anim: { type: 'scale', axis: 'y', from: 0.15, to: 1, wave: 'sin01', rate: 0.15 }, shapes: [ { t: 'box', s: [1.0, 0.16, 1.1], pos: [0, 0.08, 0] } ] })) },
        { id: 'ancora', name: 'Anchor and chain', label: 'Anchor', color: '#374151', anim: BOB, explode: [0.4, 0, 0.4],
          info: '<p>The <b>anchor</b> weighs tens of tonnes. Lowered to the bottom on a long chain, it digs into the seabed and holds the ship still.</p>',
          shapes: [ { t: 'box', s: [0.06, 0.2, 0.02], pos: [3.05, 0.38, 0.47], rot: [0, -32, 0] }, { t: 'box', s: [0.18, 0.05, 0.02], pos: [3.05, 0.27, 0.47], rot: [0, -32, 0] },
            { t: 'cyl', r: 0.05, h: 0.03, n: 12, rot: [90, 0, 0], pos: [3.12, 0.5, 0.42], color: '#111827' } ] },
        { id: 'forze', name: 'Weight and Archimedes\' buoyancy', label: 'Forces', color: '#22c55e', explode: [0, 0, 0], noLabel: false,
          info: '<p>The <b>red</b> arrow is the ship\'s <b>weight</b>, which pulls it down. The <b>green</b> arrow is the <b>buoyancy</b> of the water, pushing up. When they are equal, the ship floats.</p>',
          more: '<p><b>Archimedes\' principle</b>: an object in water gets an upward push equal to the weight of the water it displaces. The hull is empty inside: it displaces a huge amount of water, much heavier than the steel it is made of.</p>',
          shapes: [ arrow([0.2, 2.75, 0], true, 0.75, '#ef4444'), arrow([0.2, -1.75, 0], false, 0.75, '#22c55e') ] }
      ]
    },
    steps: [
      { icon: '🚢', title: 'A floating steel city', explode: 0,
        html: '<p>Big container ships carry almost all the goods in the world: clothes, toys, phones, bananas… They are made of <b>steel</b>, which is much heavier than water. So why don\'t they sink?</p>' },
      { icon: '⚖️', title: 'The secret of Archimedes', focus: ['forze', 'carena', 'scafo', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.05 },
        html: '<p>The hull is like a big <b>empty</b> box: as it sinks a little, it displaces (pushes away) a large amount of water. The water pushes the ship upwards with a force equal to the <b>weight of the displaced water</b>.</p><p>If this push equals the weight of the ship, the ship floats.</p><p class="tip">🥣 Try it: a ball of modelling clay sinks, but if you shape it like a little boat it floats!</p>' },
      { icon: '🐬', title: 'The shape of the hull and the bulb', focus: ['carena', 'scafo'], explode: 0, view: { rx: -0.25, ry: -0.9 },
        html: '<p>The bow is sharp to "cut" the water. Under the bow there is a rounded <b>bulb</b>: it makes a wave that reduces the ship\'s own wave, so less fuel is used.</p><p>The underwater part, the <b>hull bottom</b>, is red: the special paint keeps algae and shells away.</p>' },
      { icon: '📦', title: 'Cargo and ballast', focus: ['container', 'zavorra', 'carena'], explode: 0.3, view: { rx: 0.25, ry: -0.5 },
        html: '<p>The <b>containers</b> are stacked on deck and in the holds. The more loaded the ship is, the deeper it sinks. When it is empty, the <b>ballast tanks</b> down below are filled with water: the weight at the bottom makes it stable so it does not capsize.</p>' },
      { icon: '⚙️', title: 'Engine, shaft and propeller', focus: ['motore', 'asse', 'elica', 'fumaiolo'], explode: 0.2, view: { rx: 0.1, ry: -1.2 },
        html: '<p>A huge <b>diesel engine</b> turns a long <b>shaft</b> that leaves the hull. At the end is the <b>propeller</b>: its blades push the water backwards, and the water pushes the ship forwards.</p>' },
      { icon: '🧭', title: 'Rudder and bridge', focus: ['timone', 'ponte-comando', 'elica'], explode: 0, view: { rx: 0.3, ry: -2.2 },
        html: '<p>From the <b>bridge</b>, high up, the captain steers the ship with radar and GPS. When the <b>rudder</b> turns, the water pushed by the propeller is deflected and the ship changes direction, very slowly: it can take more than a kilometre to stop!</p>' },
      { icon: '⚓', title: 'In port: the anchor', focus: ['ancora', 'scafo'], explode: 0, zoom: 1.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>When it is waiting to enter port, the ship drops the <b>anchor</b>: it weighs tens of tonnes and, with its long chain, digs into the seabed.</p><p>In port, huge cranes unload the containers one by one, up to 30 an hour for each crane.</p>' }
    ],
    facts: [
      { icon: '🛁', title: 'Eureka!', html: 'The story goes that <b>Archimedes</b> of Syracuse discovered his principle when getting into the bath: seeing the water rise, he ran into the street shouting "Eureka!" ("I have found it!").' },
      { icon: '🏟️', title: 'Longer than 4 pitches', html: 'The biggest container ships are about <b>400 metres</b> long and 60 wide: longer than the Eiffel Tower lying on its side.' },
      { icon: '🌍', title: '90% of goods', html: 'About <b>90%</b> of the goods traded in the world travel by sea. Genoa, Trieste and Gioia Tauro are among the most important ports in Italy.' },
      { icon: '🧂', title: 'Salt water, fresh water', html: 'In the salt water of the sea ships float a little higher than in rivers: salt water is denser and pushes more.' }
    ],
    quiz: [
      { type: 'mc', q: 'Why does a steel ship float?', options: ['Because steel floats', 'Because the empty hull displaces a lot of water, which pushes it up', 'Because the propeller holds it up', 'Because the sea is salty'], answer: 1, explain: 'Archimedes\' principle: the push is equal to the weight of the water displaced by the hull.' },
      { type: 'mc', q: 'What pushes the ship forwards?', options: ['The rudder', 'The propeller pushing the water backwards', 'The funnel', 'The anchor'], answer: 1, explain: 'Action and reaction: the propeller pushes the water backwards and the water pushes the ship forwards.' },
      { type: 'tf', q: 'Ballast tanks make the ship more stable when it is empty.', answer: true, explain: 'Ballast water puts weight down low and lowers the centre of gravity.' },
      { type: 'mc', q: 'What is the part of the hull that is under the water called?', options: ['Underwater hull', 'Topsides', 'Bridge', 'Funnel'], answer: 0, explain: 'The underwater hull is the part that is submerged; the topsides are the part out of the water.' },
      { type: 'mc', q: 'What is the rudder for?', options: ['To brake', 'To change direction', 'To float', 'To load the containers'], answer: 1, explain: 'By deflecting the water pushed by the propeller, the rudder turns the ship.' },
      { type: 'mc', q: 'Who discovered the principle of floating?', options: ['Galileo Galilei', 'Archimedes', 'Leonardo da Vinci', 'Isaac Newton'], answer: 1, explain: 'Archimedes of Syracuse, more than 2200 years ago.' }
    ]
  });
})();
