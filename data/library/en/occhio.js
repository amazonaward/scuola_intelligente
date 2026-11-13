/* L'occhio umano. Il bulbo guarda verso +x (la luce arriva da destra, da un alberello); la sclera è semitrasparente per vedere dentro.
   I solidi "di rotazione" sono costruiti lungo y e girati di −90° intorno a z (così y diventa x). */
(function () {
  const AX = [0, 0, -90];
  const arc = (r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; return [Math.max(0, r * Math.cos(a)), r * Math.sin(a)]; });
  const tree = (s) => [ { t: 'cyl', r: 0.06 * s, h: 0.4 * s, n: 10, pos: [0, 0.2 * s, 0], color: '#92400e' }, { t: 'cone', r: 0.32 * s, h: 0.55 * s, n: 16, pos: [0, 0.65 * s, 0], color: '#16a34a' }, { t: 'cone', r: 0.24 * s, h: 0.42 * s, n: 16, pos: [0, 0.95 * s, 0], color: '#22c55e' } ];
  const TOP = [4.2, 1.05, 0], BASE = [4.2, -0.4, 0];
  const RAYS = [ [TOP, [1.33, 0.3, 0], [0.86, 0.17, 0], [-1.06, -0.24, 0]], [TOP, [1.3, 0.05, 0.12], [0.86, 0.02, 0.08], [-1.06, -0.24, 0]], [BASE, [1.33, -0.25, 0], [0.86, -0.15, 0], [-1.06, 0.12, 0]], [BASE, [1.3, 0.02, -0.12], [0.86, 0.0, -0.08], [-1.06, 0.12, 0]] ];
  const rayShapes = [];
  RAYS.forEach((pts, i) => {
    rayShapes.push({ t: 'pipe', r: 0.01, n: 5, pts, color: i < 2 ? '#fde047' : '#fb923c', alpha: 0.55 });
    for (let k = 0; k < 4; k++) rayShapes.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: pts[0], color: i < 2 ? '#fde047' : '#fb923c', anim: { type: 'path', pts, wave: 'saw', rate: 0.7, phase: k / 4 + i * 0.1 } });
  });
  const NERVE = [[-1.12, -0.06, -0.24], [-1.6, -0.08, -0.3], [-2.2, -0.05, -0.32], [-2.9, 0.05, -0.3]];
  const vessels = [[[-1.07, -0.04, -0.22], [-0.95, 0.45, -0.3], [-0.7, 0.75, -0.4]], [[-1.07, -0.04, -0.22], [-0.9, -0.5, -0.35], [-0.65, -0.8, -0.35]], [[-1.07, -0.04, -0.22], [-0.85, 0.35, 0.45], [-0.55, 0.55, 0.75]], [[-1.07, -0.04, -0.22], [-0.85, -0.45, 0.4], [-0.6, -0.65, 0.65]]]
    .map((pts) => ({ t: 'pipe', r: 0.016, n: 5, curve: true, pts, color: '#b91c1c' }));
  const muscle = (rot) => ({ t: 'group', rot, shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[-2.1, 0.22, 0], [-1.25, 0.9, 0], [-0.3, 1.25, 0], [0.45, 1.16, 0]], scale: [1, 1, 1.7] } ] });

  LIBRARY({
    lang: 'en',
    id: 'occhio',
    title: 'The eye',
    intro: 'The eye is a <b>natural camera</b>: a little ball the size of a walnut that gathers light, focuses it with a lens and turns it into signals for the brain. Let\'s follow the light inside the eye!',
    model: {
      rx: 0.18, ry: -0.42, speed: 0.4, height: 470, bg: 'body', fit: 1.0,
      parts: [
        { id: 'sclera', name: 'Sclera (the white of the eye)', label: 'Sclera', color: '#f8fafc', alpha: 0.3, explode: [-0.4, 0, -1.2],
          info: '<p>The strong white "wall" that wraps around the eye and gives it the shape of a ball. It is the <b>white of the eye</b>.</p>',
          more: '<p>Under the sclera there is the <b>choroid</b>, a layer full of blood vessels that feeds the retina and is dark so that light does not "bounce around" inside the eye, like the black inside of a camera.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.2]].concat(arc(1.2, -88, 63, 18)), ds: true } ] },
        { id: 'cornea', name: 'Cornea', color: '#bae6fd', alpha: 0.25, explode: [1.0, 0, 0],
          info: '<p>The clear "window" at the front of the eye, curved like a watch glass. It is the first lens the light passes through: it already does most of the focusing.</p>',
          more: '<p>The cornea has no blood vessels (so that it can be clear!): it gets oxygen directly from the air and from tears. Laser operations that let people stop wearing glasses change its curve a little.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pos: [0, 0, 0], pts: arc(0.71, 39, 90, 8).map(([r, y]) => [r, y + 0.62]), ds: true } ] },
        { id: 'iride', name: 'Iris', color: '#2563eb', explode: [0.7, 0.4, 0.4],
          info: '<p>The "coloured disc" of the eye: blue, green, brown… It is a small muscle that <b>widens or narrows the pupil</b> to let in more or less light.</p>',
          more: '<p>The colour depends on the amount of <b>melanin</b>: lots = brown eyes, little = blue eyes. The pattern of the iris is unique to each person, even more than fingerprints.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.03, n: 36, rot: AX, pos: [1.0, 0, 0] }, { t: 'tube', r: 0.52, ri: 0.4, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#1e3a8a' },
            { t: 'tube', r: 0.34, ri: 0.3, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#60a5fa' } ] },
        { id: 'pupilla', name: 'Pupil', color: '#020617', explode: [0.9, 0.4, 0.4],
          info: '<p>The black "hole" in the middle of the iris, where the light goes in. In the dark it widens to gather more light, in the sun it narrows so we are not dazzled.</p>',
          more: '<p>It is an automatic reflex, the <b>pupillary reflex</b>: doctors check it with a little light. The pupil can go from 2 to 8 mm across.</p>',
          shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 28, rot: AX, pos: [1.025, 0, 0], decal: 1, anim: { type: 'scale', from: 0.65, to: 1.45, rate: 0.25, axis: 'xz' } } ] },
        { id: 'cristallino', name: 'Lens', color: '#fef9c3', alpha: 0.65, explode: [0.5, 1.0, 0.4],
          info: '<p>A clear, elastic <b>lens</b> behind the pupil. It changes shape to focus: it <b>bulges</b> to see things close up and <b>flattens</b> to see far away.</p>',
          more: '<p>With age the lens becomes stiffer: that is why after 45 many people need glasses for reading (<b>presbyopia</b>). If it becomes cloudy it is called a <b>cataract</b>, which is treated by replacing it with an artificial lens.</p>',
          shapes: [ { t: 'sphere', r: 0.4, n: 14, m: 24, scale: [0.42, 1, 1], pos: [0.82, 0, 0], anim: { type: 'scale', from: 1, to: 1.3, axis: 'x', rate: 0.25, phase: 0.5 } } ] },
        { id: 'muscolo-ciliare', name: 'Ciliary muscle', label: 'Ciliary muscle', color: '#be123c', explode: [0.4, -0.9, 0.3],
          info: '<p>A little ring of muscle around the lens, joined to it by lots of fine threads. By tightening or relaxing it changes the shape of the lens.</p>',
          shapes: [ { t: 'torus', R: 0.5, r: 0.06, n: 32, m: 8, rot: [0, 0, 90], pos: [0.85, 0, 0] } ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [k * 22.5, 0, 0], shapes: [ { t: 'cyl', r: 0.006, h: 0.12, n: 4, pos: [0.84, 0.42, 0], color: '#fda4af' } ] }))) },
        { id: 'vitreo', name: 'Vitreous body', label: 'Vitreous body', color: '#e0f2fe', alpha: 0.16, explode: [-0.4, 0, 0.9],
          info: '<p>The inside of the eye is filled with a <b>clear jelly</b>, the vitreous body. It keeps the eye plump and round and lets light through.</p>',
          more: '<p>Sometimes little clumps float in the vitreous: they are the "floaters" you see when looking at a blue sky. They are usually harmless.</p>',
          shapes: [ { t: 'sphere', r: 1.08, n: 16, m: 28, scale: [0.96, 1, 1], pos: [-0.05, 0, 0] } ] },
        { id: 'retina', name: 'Retina', color: '#fb7185', alpha: 0.5, explode: [-1.2, 0, 0],
          info: '<p>The "screen" at the back of the eye, where the light forms the image. It is made of millions of light-sensitive cells, the <b>photoreceptors</b>: the <b>cones</b> see colours, the <b>rods</b> work even in dim light.</p>',
          more: '<p>In the retina there are about <b>120 million rods</b> and 6 million cones. There are three kinds of cones: for red, green and blue. By mixing their signals the brain "sees" thousands of colours.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.12]].concat(arc(1.12, -88, 32, 14)), ds: true } ] },
        { id: 'macula', name: 'Fovea (yellow spot)', label: 'Fovea', color: '#facc15', explode: [-1.5, 0.2, 0.2],
          info: '<p>A tiny spot on the retina right behind the lens, full of cones: it is the place where we see <b>sharpest</b>. When you read, you move your eyes to bring each word onto the fovea.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 8, m: 14, scale: [0.2, 1, 1], pos: [-1.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 6, m: 10, scale: [0.2, 1, 1], pos: [-1.1, 0, 0.0], color: '#ca8a04' } ] },
        { id: 'vasi', name: 'Blood vessels of the retina', label: 'Blood vessels', color: '#b91c1c', explode: [-1.3, 0, 0],
          info: '<p>Small arteries and veins start from the optic nerve and spread over the retina to feed it. The eye doctor sees them by looking into the pupil with a little light.</p>',
          shapes: vessels },
        { id: 'nervo-ottico', name: 'Optic nerve', label: 'Optic nerve', color: '#fde68a', explode: [-1.6, 0, -0.3],
          info: '<p>A "cable" made of a million nerve fibres that carries the signals from the retina to the <b>brain</b>. It is the brain, at the back of the head, that really "sees".</p>',
          more: '<p>Where the nerve leaves the retina there are no photoreceptors: this is the <b>blind spot</b>. We do not notice it because the brain "fills in the hole" with what it sees around it and with the other eye.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 16, curve: true, pts: NERVE }, { t: 'cyl', r: 0.15, h: 0.03, n: 20, rot: AX, pos: [-1.08, -0.05, -0.23], color: '#fffbeb' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.9, phase: k / 6 }, { type: 'blink', color: '#38bdf8', rate: 1.8, phase: k / 6 } ] }))) },
        { id: 'muscoli', name: 'Eye muscles', label: 'Muscles', color: '#dc2626', explode: [-0.6, 0.6, 0],
          info: '<p>Six muscles attached to the sclera move the eye in all directions: up, down, right, left and even a little rotating. They are among the fastest muscles in the body.</p>',
          shapes: [ muscle([0, 0, 0]), muscle([180, 0, 0]), muscle([90, 0, 0]), muscle([-90, 0, 0]) ] },
        { id: 'luce', name: 'Rays of light', label: 'Rays of light', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>The light bouncing off the tree enters the eye. The cornea and lens <b>bend</b> it (refraction) so that the rays coming from one point meet again at one point on the retina.</p>',
          more: '<p>If the eye is a little too long, the image forms <b>in front of</b> the retina: this is <b>short-sightedness</b> (you see badly far away). If it is too short, it forms behind: this is <b>long-sightedness</b>. Glasses lenses move the focus to the right place.</p>',
          shapes: rayShapes },
        { id: 'oggetto', name: 'What we are looking at', label: 'Tree', color: '#16a34a', pos: [4.2, -0.4, 0], explode: [0.8, 0, 0],
          info: '<p>An object can be seen because it <b>gives off light</b> (like a light bulb) or because it <b>reflects</b> the light that hits it (like this tree). In complete darkness we see nothing.</p>',
          shapes: tree(1.0) },
        { id: 'immagine', name: 'Upside-down image', label: 'Image', color: '#16a34a', pos: [-0.98, 0.12, 0], explode: [-1.4, 0, 0.3],
          info: '<p>On the retina the image of the tree is <b>tiny and upside down</b>! It is the brain that turns it the right way up: we learn to do this as babies.</p>',
          shapes: [ { t: 'group', rot: [0, 90, 180], scale: 0.32, shapes: tree(1.0) } ] }
      ]
    },
    steps: [
      { icon: '👁️', title: 'A natural camera', explode: 0,
        html: '<p>The eye is a ball about <b>2.4 cm</b> across. Like a camera it has an opening (the <b>pupil</b>), a lens (the <b>lens</b>) and a light-sensitive "screen" (the <b>retina</b>).</p>' },
      { icon: '🌳', title: 'The light comes in', focus: ['oggetto', 'luce', 'cornea', 'pupilla', 'iride'], view: { rx: 0.15, ry: -0.6 },
        html: '<p>We see an object when its light reaches our eyes. The light passes through the <b>cornea</b>, the clear window, and enters through the <b>pupil</b>.</p>' },
      { icon: '🔵', title: 'The iris controls the light', focus: ['iride', 'pupilla', 'cornea'], view: { rx: 0.1, ry: -1.35 }, zoom: 1.8,
        html: '<p>The <b>iris</b>, the coloured part, is a muscle: in the dark it widens the pupil to let in more light, in the sun it narrows it.</p><p class="tip">🪞 Try it in front of a mirror: close your eyes for a few seconds, then open them and watch the pupil get smaller!</p>' },
      { icon: '🔍', title: 'The lens focuses', focus: ['cristallino', 'muscolo-ciliare', 'luce'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.6,
        html: '<p>The <b>lens</b> is an elastic lens. The <b>ciliary muscle</b> makes it bulge to look at things nearby and flattens it to look far away: this way the image on the retina is always sharp.</p>' },
      { icon: '🙃', title: 'An upside-down image', focus: ['retina', 'immagine', 'luce', 'macula'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.5,
        html: '<p>The rays cross and a small, <b>upside-down</b> image forms on the <b>retina</b>. The cones and rods of the retina turn it into electrical signals. The sharpest spot is the <b>fovea</b>.</p>' },
      { icon: '🧠', title: 'The brain sees', focus: ['nervo-ottico', 'retina', 'vasi'], view: { rx: 0.2, ry: 0.5 },
        html: '<p>The <b>optic nerve</b> carries the signals to the brain. It is the brain that turns the image the right way up, joins the images from the two eyes (so we see in 3D) and works out what we are looking at.</p>' },
      { icon: '↔️', title: 'Eyes always on the move', focus: ['muscoli', 'sclera'], view: { rx: 0.35, ry: -0.7 },
        html: '<p>Six <b>muscles</b> move each eye. Even when you think you are staring at one point, your eyes make small constant jerks: without them, the image would fade!</p><p class="tip">😉 We blink about 15 times a minute: tears clean and moisten the cornea.</p>' }
    ],
    facts: [
      { icon: '📸', title: 'Faster than a photo', html: 'The eye focuses in a fraction of a second and can tell apart about <b>a million</b> shades of colour.' },
      { icon: '🦅', title: 'Eagle eyes', html: 'An eagle can see a rabbit more than 3 km away: its retina has many more cones than ours.' },
      { icon: '🐝', title: 'Invisible colours', html: 'Bees see <b>ultraviolet</b> light, which is invisible to us: many flowers have "secret" patterns that only bees can see.' },
      { icon: '🔴', title: 'Colour blindness', html: 'About 1 boy in 12 confuses some colours, usually red and green: it is called <b>colour blindness</b>, or daltonism, after the chemist John Dalton, who had it.' },
      { icon: '👶', title: 'Newborns', html: 'Newborn babies see things blurred and almost in black and white; their sight becomes like an adult\'s at around 3–5 years old.' }
    ],
    quiz: [
      { type: 'mc', q: 'Which part of the eye controls how much light comes in?', options: ['The retina', 'The iris', 'The optic nerve', 'The sclera'], answer: 1, explain: 'The iris widens or narrows the pupil.' },
      { type: 'mc', q: 'What is the elastic lens that focuses called?', options: ['Cornea', 'Pupil', 'Lens', 'Fovea'], answer: 2, explain: 'The lens changes shape to focus near or far.' },
      { type: 'tf', q: 'On the retina the image forms upside down.', answer: true, explain: 'The rays cross as they pass through the lens; the brain turns the image the right way up.' },
      { type: 'mc', q: 'Which cells of the retina let us see colours?', options: ['The rods', 'The cones', 'The red blood cells', 'The neurons of the nose'], answer: 1, explain: 'The cones see colours; the rods work in dim light.' },
      { type: 'order', q: 'Put the journey of light through the eye in order', items: ['Cornea', 'Pupil', 'Lens', 'Vitreous body', 'Retina', 'Optic nerve'], explain: 'The light passes through the cornea, pupil, lens and vitreous; the retina turns it into signals that the optic nerve carries to the brain.' },
      { type: 'mc', q: 'If the image forms in front of the retina and you see badly far away, you are…', options: ['Short-sighted', 'Colour-blind', 'Long-sighted', 'Blind'], answer: 0, explain: 'It is short-sightedness (myopia): it is corrected with diverging lenses.' }
    ]
  });
})();
