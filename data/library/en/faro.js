/* Il faro, su uno scoglio. Alto = +y. La lanterna è in cima (y ≈ 5–6): la lente di Fresnel gira intorno a y
   e i suoi due "occhi di bue" mandano due fasci di luce che spazzano il mare. */
(function () {
  const D = Math.PI / 180, LY = 5.58, TAU = Math.PI * 2;
  const R = (y) => 0.9 - 0.06 * y; // raggio della torre all'altezza y
  const band = (y0, y1, color) => ({ t: 'lathe', n: 30, pts: [[R(y0), y0], [R(y1), y1]], color });
  const SPIN = { type: 'spin', axis: 'y', rate: 1 };
  /* "occhio di bue": anelli concentrici che guardano verso +x */
  const bullseye = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [
    { t: 'sphere', r: 1, n: 8, m: 14, pos: [0.3, 0, 0], scale: [0.05, 0.12, 0.12], color: '#e0f2fe', alpha: 0.75 },
    ...[0.17, 0.24, 0.31].map((r) => ({ t: 'torus', R: r, r: 0.016, n: 24, m: 4, rot: [0, 0, 90], pos: [0.3, 0, 0], color: '#a5f3fc', alpha: 0.7 })),
    { t: 'box', s: [0.02, 0.72, 0.72], pos: [0.27, 0, 0], color: '#b45309', alpha: 0.9 } ] });
  const beam = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'lathe', n: 18, pts: [[0.12, 0], [0.45, 1.2], [0.9, 3.4]], rot: [0, 0, -90], pos: [0.3, 0, 0], ds: true } ] });
  const steps = Array.from({ length: 44 }, (_, k) => { const a = k * 32, y = 0.25 + k * 0.105; return { t: 'box', s: [0.36, 0.035, 0.13], pos: [0.27 * Math.cos(a * D), y, -0.27 * Math.sin(a * D)], rot: [0, a, 0] }; });
  const ROCK = [[0, -0.75], [2.1, -0.75], [2.2, -0.5], [1.9, -0.3], [1.75, -0.12], [1.3, 0.0], [0, 0.02]];

  LIBRARY({
    lang: 'en',
    id: 'faro',
    title: 'The lighthouse',
    intro: 'At night, out at sea, how do ships know where the rocks are and where the harbour is? They look for <b>lighthouses</b>! Every lighthouse flashes in its own special way, and a special lens makes its light reach very far.',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.22, height: 500, bg: 'sky', floor: false,
      parts: [
        { id: 'scogli', name: 'Rocky shore', color: '#78716c', explode: [0, -0.6, 0],
          info: '<p>Lighthouses are built where ships are most at risk: on rocks, headlands and small islands, or at the entrance to harbours.</p>',
          shapes: [ { t: 'lathe', n: 22, pts: ROCK }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [1.3, -0.1, 0.9], scale: [0.6, 0.35, 0.5], color: '#57534e' }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [-1.4, -0.15, -0.6], scale: [0.7, 0.3, 0.6], color: '#57534e' },
            { t: 'cyl', r: 1.15, h: 0.2, n: 30, pos: [0, 0.08, 0], color: '#d6d3d1' } ] },
        { id: 'mare', name: 'Sea', color: '#0369a1', alpha: 0.35, explode: [0, -0.6, 0], chip: false, noLabel: true,
          info: '<p>The sea around the lighthouse. At night, for sailors, the lighthouse is like a bright road sign.</p>',
          shapes: [ { t: 'cyl', r: 3.4, h: 0.04, n: 40, pos: [0, -0.3, 0] } ] },
        { id: 'torre', name: 'Tower', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>The tower raises the light as high as possible: the higher it is, the farther it can be seen, because the Earth is curved. The coloured <b>stripes</b> make it recognisable even in daylight.</p>',
          more: '<p>From a tower 50 metres high, the light can be seen up to about <b>45 km</b> away. The walls are very thick at the base (even 2 metres) to withstand the waves and the wind of storms.</p>',
          shapes: [ band(0.1, 1.1), band(1.1, 2.1, '#dc2626'), band(2.1, 3.1), band(3.1, 4.1, '#dc2626'), band(4.1, 5.0),
            { t: 'box', s: [0.32, 0.6, 0.02], pos: [0, 0.42, R(0.42) - 0.01], color: '#3f2a1d', decal: 1 },
            ...[1.6, 2.6, 3.6].map((y, i) => ({ t: 'box', s: [0.12, 0.22, 0.02], pos: [R(y) * Math.sin(i * 70 * D), y, R(y) * Math.cos(i * 70 * D) - 0.01], rot: [0, i * 70, 0], color: '#1e293b', decal: 1 })) ] },
        { id: 'scala', name: 'Spiral staircase', label: 'Stairs', color: '#a8a29e', explode: [1.5, 0, 0],
          info: '<p>Inside the tower a long <b>spiral staircase</b> climbs up to the lantern. The lighthouse keeper climbed it several times every night.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 4.9, n: 12, pos: [0, 2.55, 0], color: '#78716c' } ].concat(steps) },
        { id: 'contrappeso', name: 'Clockwork weight', label: 'Weight', color: '#334155', explode: [1.5, 0, 0],
          info: '<p>Older lighthouses had no electric motor: a <b>weight</b> hanging from a rope slowly sank inside the tower and, like in a pendulum clock, turned the lens.</p>',
          more: '<p>The keeper had to "wind up" the mechanism by turning a crank and hauling up the weight, even every 2–4 hours all night long. Today a small electric motor does the work and the lighthouse is almost always automatic.</p>',
          shapes: [ { t: 'cyl', r: 0.006, h: 4.5, n: 4, pos: [0, 2.75, 0.15], color: '#1f2937' },
            { t: 'cyl', r: 0.07, h: 0.3, n: 12, pos: [0, 4.4, 0.15], anim: { type: 'move', dir: [0, -1, 0], amp: 3.6, wave: 'saw', rate: 0.05 } } ] },
        { id: 'ballatoio', name: 'Gallery', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>The little balcony that runs around the lantern. From here the keeper cleaned the glass of salt and snow, so that the light always came out strong.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.1, n: 32, pos: [0, 5.02, 0] }, { t: 'torus', R: 0.97, r: 0.02, n: 40, m: 4, pos: [0, 5.38, 0] },
            ...Array.from({ length: 16 }, (_, k) => ({ t: 'cyl', r: 0.012, h: 0.32, n: 4, pos: [0.97 * Math.cos(k * 22.5 * D), 5.22, 0.97 * Math.sin(k * 22.5 * D)] })),
            ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.12, 0.2, 0.08], pos: [0.88 * Math.cos(k * 30 * D), 4.88, 0.88 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0], color: '#e5e7eb' })) ] },
        { id: 'lanterna', name: 'Lantern (glass room)', label: 'Lantern', color: '#bae6fd', alpha: 0.22, explode: [0, 0.75, 0],
          info: '<p>The glass room at the top, where the light is. The glass is thick to resist the wind, the rain... and the birds that crash into it at night!</p>',
          shapes: [ { t: 'cyl', r: 0.6, h: 0.82, n: 32, pos: [0, 5.66, 0], ds: true }, { t: 'tube', r: 0.64, ri: 0.58, h: 0.25, n: 32, pos: [0, 5.18, 0], color: '#f8fafc', alpha: 1 },
            ...Array.from({ length: 8 }, (_, k) => ({ t: 'cyl', r: 0.018, h: 0.82, n: 5, pos: [0.6 * Math.cos(k * 45 * D), 5.66, 0.6 * Math.sin(k * 45 * D)], color: '#1f2937', alpha: 1 })) ] },
        { id: 'cupola', name: 'Dome', color: '#991b1b', explode: [0, 1.2, 0],
          info: '<p>The copper "hat" of the lantern. At the top there is a <b>chimney</b> to let out the heat of the lamp and a <b>lightning rod</b>: the lighthouse is the highest point on the coast!</p>',
          shapes: [ { t: 'sphere', r: 0.66, n: 10, m: 28, hemi: true, pos: [0, 6.07, 0], scale: [1, 0.7, 1] }, { t: 'cyl', r: 0.68, h: 0.05, n: 32, pos: [0, 6.08, 0], color: '#7f1d1d' },
            { t: 'sphere', r: 0.11, n: 8, m: 12, pos: [0, 6.6, 0], color: '#1f2937' }, { t: 'cyl', r: 0.012, h: 0.45, n: 4, pos: [0, 6.9, 0], color: '#475569' },
            { t: 'group', pos: [0, 6.95, 0], anim: { type: 'swing', axis: 'y', amp: 25, rate: 0.15 }, shapes: [ { t: 'extrude', d: 0.01, pts: [[0, 0], [0.25, 0.03], [0.25, -0.05], [0, -0.03]], color: '#475569' } ] } ] },
        { id: 'lente', name: 'Fresnel lens', label: 'Fresnel lens', color: '#a5f3fc', pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>This is the lighthouse\'s "superpower": a cage of shaped glass rings, invented by <b>Augustin Fresnel</b> in 1822. It gathers light going in every direction and focuses it into narrow, very powerful <b>beams</b>.</p>',
          more: '<p>An ordinary lens this big would be thick and extremely heavy. Fresnel had the idea of "cutting" it into concentric rings, keeping only the curved surfaces that bend the light (<b>refraction</b>): same job, much less glass. At the top and bottom there are also prisms that reflect the light. The same thin lenses are used in projectors and car headlights.</p>',
          shapes: [ bullseye(0), bullseye(180), { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, 0.38, 0], color: '#b45309' }, { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, -0.38, 0], color: '#b45309' },
            ...[0.22, 0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })), ...[-0.22, -0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })) ] },
        { id: 'lampada', name: 'Lamp', color: '#fde047', pos: [0, LY, 0], explode: [0, 0, 0.8],
          info: '<p>At the centre of the lens is the light source. Once it was an oil or paraffin flame; today it is an electric lamp or a group of <b>LEDs</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 3 } }, { t: 'sphere', r: 0.17, n: 8, m: 12, color: '#fef08a', alpha: 0.35 },
            { t: 'cyl', r: 0.03, h: 0.3, n: 8, pos: [0, -0.22, 0], color: '#475569' } ] },
        { id: 'fasci', name: 'Light beams', label: 'Light beams', color: '#facc15', alpha: 0.28, pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>The two beams turn with the lens like the hands of a clock. Someone watching from the sea sees a <b>flash</b> every time a beam passes toward them.</p>',
          more: '<p>Each lighthouse has its own <b>characteristic</b>: for example "2 white flashes every 10 seconds". On nautical charts it is written for each lighthouse: by counting the flashes, a sailor understands which lighthouse he is looking at and therefore where he is.</p>',
          shapes: [ beam(0), beam(180) ] },
        { id: 'meccanismo', name: 'Rotation mechanism', label: 'Mechanism', color: '#b45309', pos: [0, 5.2, 0], explode: [0, -0.2, 1.1],
          info: '<p>Beneath the lens a mechanism turns it slowly and always at the same speed, so the flashes arrive at exactly the right time.</p>',
          more: '<p>Large lenses weigh tons! To turn them with little force, they were made to float on a basin of liquid <b>mercury</b>: a small push was enough to move them.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.12, n: 24, color: '#94a3b8' }, { t: 'cyl', r: 0.24, h: 0.03, n: 24, pos: [0, 0.07, 0], color: '#cbd5e1' },
            { t: 'group', pos: [0, 0.1, 0], anim: SPIN, shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 24 }, ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.04, 0.04, 0.03], pos: [0.23 * Math.cos(k * 30 * D), 0, 0.23 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0] })) ] },
            { t: 'group', pos: [0.32, 0.1, 0], anim: { type: 'spin', axis: 'y', dir: -1, rate: 2.75 }, shapes: [ { t: 'cyl', r: 0.08, h: 0.04, n: 14, color: '#d97706' }, { t: 'box', s: [0.14, 0.045, 0.02], color: '#78350f' } ] },
            { t: 'cyl', r: 0.07, h: 0.16, n: 14, pos: [0.32, -0.04, 0], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '🗼', title: 'A traffic light for ships', explode: 0,
        html: '<p>The lighthouse signals to ships the dangerous <b>rocks</b> and the entrance to <b>harbours</b>. By day it is recognised by its colours and shape, at night by its light.</p>' },
      { icon: '📏', title: 'Why so tall?', focus: ['torre', 'scogli', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.4 },
        html: '<p>The Earth is curved: a low light disappears behind the horizon after a few kilometres. The higher the light is <b>up</b>, the farther it can be seen. That is why lighthouses are tall towers, often on cliffs.</p><p class="tip">🌍 From 50 metres high, the light can be seen up to about 45 km.</p>' },
      { icon: '🪜', title: 'Inside the tower', focus: ['scala', 'contrappeso'], explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>A <b>spiral staircase</b> climbs all the way to the top. In old lighthouses, a <b>weight</b> slowly sank down the middle and turned the lens, like in a pendulum clock. The keeper wound it up several times every night.</p>' },
      { icon: '💡', title: 'The lantern and the lamp', focus: ['lanterna', 'lampada', 'cupola', 'ballatoio'], explode: 0.3, zoom: 1.2, view: { rx: 0.3, ry: -0.5 },
        html: '<p>At the top is the <b>lantern</b>, a glass room. Inside, the <b>lamp</b>: once an oil flame, today an electric lamp or LEDs. The <b>dome</b> protects it and has a lightning rod.</p>' },
      { icon: '🔍', title: 'The Fresnel lens', focus: ['lente', 'lampada', 'fasci'], explode: 0, zoom: 1.25, view: { rx: 0.3, ry: -0.8 },
        html: '<p>A lamp\'s light goes in every direction and would be wasted. The <b>Fresnel lens</b>, made of glass rings, bends the rays and focuses them into narrow, very powerful <b>beams</b>, visible from tens of kilometres away.</p><p class="tip">🔎 With a magnifying glass you can focus sunlight into a tiny dot: the principle is the same!</p>' },
      { icon: '🔄', title: 'Turning flashes', focus: ['fasci', 'lente', 'meccanismo'], explode: 0, view: { rx: 0.35, ry: -0.5 },
        html: '<p>The <b>mechanism</b> turns the lens and the light beams sweep the sea like the hands of a clock. From a ship you see a <b>flash</b> every time a beam passes.</p><p>Each lighthouse has its own rhythm of flashes (the <b>characteristic</b>): by counting them, sailors know which lighthouse they are looking at.</p>' }
    ],
    facts: [
      { icon: '🏛️', title: 'The Lighthouse of Alexandria', html: 'The most famous lighthouse of antiquity stood on the island of <b>Pharos</b>, in Alexandria, Egypt: more than 100 metres tall, it was one of the seven wonders of the world. The Italian word "faro" comes from it.' },
      { icon: '🇮🇹', title: 'The Lantern of Genoa', html: 'The <b>Lanterna</b> of Genoa, 77 metres tall, is one of the oldest lighthouses still in operation: today\'s tower dates from 1543.' },
      { icon: '📚', title: 'The lighthouse keeper', html: 'For centuries lighthouses had a <b>keeper</b> who lived there with his family, lit the lamp, cleaned the glass and wound up the mechanism. Today almost all lighthouses are automatic.' },
      { icon: '📡', title: 'Lighthouses and GPS', html: 'Even though ships today have GPS, lighthouses stay lit: if the electronics fail, a flashing light on the coast can still save a ship.' }
    ],
    quiz: [
      { type: 'mc', q: 'Why are lighthouses so tall?', options: ['To look more beautiful', 'Because light up high can be seen farther, since the Earth is curved', 'To stay away from the waves', 'So that tourists can climb up'], answer: 1, explain: 'The higher the light, the later it disappears behind the curved horizon.' },
      { type: 'mc', q: 'What does the Fresnel lens do?', options: ['It colours the light', 'It focuses the light into powerful beams', 'It turns the light off by day', 'It makes the lighthouse turn'], answer: 1, explain: 'Its glass rings bend the rays and gather them into narrow beams.' },
      { type: 'tf', q: 'Each lighthouse flashes with a rhythm of its own, called its characteristic.', answer: true, explain: 'By counting the flashes, sailors recognise the lighthouse even at night.' },
      { type: 'mc', q: 'How was the lens turned in old lighthouses?', options: ['With a petrol engine', 'With a falling weight, like in a clock', 'With the wind', 'By hand, all night long'], answer: 1, explain: 'A clockwork mechanism, driven by a weight, turned the lens; the keeper wound it up.' },
      { type: 'mc', q: 'Which ancient lighthouse was one of the seven wonders of the world?', options: ['The Lantern of Genoa', 'The Lighthouse of Alexandria', 'The Cape Horn lighthouse', 'The Leaning Tower of Pisa'], answer: 1, explain: 'The lighthouse on the island of Pharos, in Alexandria, Egypt.' }
    ]
  });
})();
