/* Il telescopio riflettore (tipo Newton) su montatura altazimutale a forcella e treppiede.
   Il tubo è descritto lungo x (x+ = bocca del tubo); viene inclinato di 32° e ruota piano intorno all'asse verticale. */
(function () {
  const PIV = [0, 2.45, 0], TILT = 32;
  const PAN = { type: 'swing', axis: 'y', amp: 28, rate: 0.22 };
  const TILTA = { type: 'swing', axis: 'z', amp: 6, rate: 0.22, phase: 0.25 };
  /* tutto ciò che sta sul tubo segue la rotazione (stesse animazioni in tutti i pezzi) */
  const onTube = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes: [ { t: 'group', rot: [0, 0, TILT], anim: TILTA, shapes } ] } ];
  const onFork = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes } ];
  const R = 0.42, X0 = -1.7, X1 = 1.7, SEC = 1.12;
  const RAYS = [0.27, -0.27, 0.14, -0.14];
  const photons = [];
  RAYS.forEach((y, i) => { for (let k = 0; k < 5; k++) photons.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [3.0, y, 0], color: '#fde047',
    anim: { type: 'path', pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], wave: 'saw', rate: 0.9, phase: k / 5 + i * 0.07 } }); });
  const rayLines = RAYS.map((y) => ({ t: 'pipe', r: 0.008, n: 5, pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], color: '#fde68a', alpha: 0.45 }));

  LIBRARY({
    lang: 'en',
    id: 'telescopio',
    title: 'The telescope',
    intro: 'A telescope is a "funnel for light": it gathers lots of light with a big <b>mirror</b> or <b>lens</b> and focuses it into our eye. That way we can see faint, faraway objects, like the craters of the Moon or the rings of Saturn.',
    model: {
      rx: 0.18, ry: -0.35, speed: 0.4, height: 480, fit: 1.05,
      parts: [
        { id: 'tubo', name: 'Optical tube', label: 'Tube', color: '#e2e8f0', alpha: 0.28, explode: [0, 0.5, 0.9],
          info: '<p>The tube holds the mirrors at the right distance and protects them from stray light coming in from the side, from dust and from the damp of the night.</p>',
          more: '<p>The distance between the main mirror and the point where the light is focused is called the <b>focal length</b>. Dividing the telescope\'s focal length by the eyepiece\'s gives the <b>magnification</b>: 1000 mm ÷ 10 mm = 100 times.</p>',
          shapes: onTube([ { t: 'cyl', r: R, h: X1 - X0, n: 36, rot: [0, 0, 90], open: true, ds: true },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.12, n: 36, rot: [0, 0, 90], pos: [X1 - 0.06, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.1, n: 36, rot: [0, 0, 90], pos: [X0 + 0.05, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'cyl', r: R + 0.03, h: 0.04, n: 36, rot: [0, 0, 90], pos: [X0 - 0.02, 0, 0], color: '#334155', alpha: 1 } ]) },
        { id: 'specchio-primario', name: 'Primary mirror', label: 'Primary mirror', color: '#cbd5e1', explode: [-1.0, -0.5, 0],
          info: '<p>This is the heart of the telescope: a <b>curved</b> (concave) mirror at the bottom of the tube. It gathers the light of the stars and sends it back, making it <b>converge</b> to one point, the focus.</p>',
          more: '<p>Its surface is a <b>parabola</b>, accurate to less than a ten-thousandth of a millimetre, coated with a thin film of aluminium. The bigger the mirror, the more light it gathers: a 20 cm mirror collects about <b>800 times</b> the light of our eye.</p>',
          shapes: onTube([ { t: 'lathe', n: 36, rot: [0, 0, -90], pos: [-1.5, 0, 0], pts: [[0, 0.0], [0.2, 0.012], [0.38, 0.045], [0.38, -0.06], [0, -0.06]], color: '#e0f2fe' },
            { t: 'cyl', r: 0.4, h: 0.08, n: 30, rot: [0, 0, 90], pos: [-1.6, 0, 0], color: '#475569' },
            { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, 0.25, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, -0.25, 0], color: '#94a3b8' } ]) },
        { id: 'specchio-secondario', name: 'Secondary mirror', label: 'Secondary mirror', color: '#e0f2fe', explode: [0.4, 0.9, 0.5],
          info: '<p>A small flat mirror, tilted at 45°, near the mouth of the tube. It bends the light sideways, towards the <b>eyepiece</b>, so we don\'t have to put our head in front of the tube!</p>',
          more: '<p>It is held in the middle by thin metal arms, the <b>spider</b>. They are what makes the cross-shaped "spikes" you see in photos of bright stars.</p>',
          shapes: onTube([ { t: 'group', pos: [SEC, 0, 0], shapes: [ { t: 'cyl', r: 0.1, h: 0.025, n: 24, rot: [0, 0, 45] },
            { t: 'cyl', r: 0.05, h: 0.18, n: 14, rot: [0, 0, 90], pos: [0.11, 0, 0], color: '#334155' } ] },
            { t: 'box', s: [0.015, R * 2 - 0.02, 0.012], pos: [SEC + 0.15, 0, 0], color: '#334155' },
            { t: 'box', s: [0.015, 0.012, R * 2 - 0.02], pos: [SEC + 0.15, 0, 0], color: '#334155' } ]) },
        { id: 'oculare', name: 'Eyepiece', color: '#1f2937', explode: [0.2, 1.2, 0],
          info: '<p>This is the "magnifying glass" where you put your eye. It takes the tiny image formed by the mirrors and <b>magnifies</b> it.</p>',
          more: '<p>Eyepieces can be swapped: one with a short focal length (e.g. 6 mm) magnifies more, one with a long focal length (25 mm) shows a bigger, brighter piece of sky. Too much magnification makes the image dim and shaky.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.09, h: 0.24, n: 20, pos: [SEC, R + 0.28, 0], color: '#1f2937' },
            { t: 'cyl', r: 0.11, h: 0.08, n: 20, pos: [SEC, R + 0.43, 0], color: '#111827' },
            { t: 'cyl', r: 0.065, h: 0.02, n: 16, pos: [SEC, R + 0.475, 0], color: '#0ea5e9', decal: 1 },
            { t: 'torus', R: 0.1, r: 0.012, n: 20, m: 6, pos: [SEC, R + 0.25, 0], color: '#64748b' } ]) },
        { id: 'focheggiatore', name: 'Focuser (focusing)', label: 'Focusing', color: '#64748b', explode: [0.6, 0.9, -0.4],
          info: '<p>A little tube that moves in and out when you turn two <b>knobs</b>: it moves the eyepiece until the image is sharp, just like focusing a pair of binoculars.</p>',
          shapes: onTube([ { t: 'box', s: [0.32, 0.12, 0.3], pos: [SEC, R + 0.03, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.14, n: 18, pos: [SEC, R + 0.14, 0], color: '#94a3b8' },
            { t: 'group', pos: [SEC, R + 0.05, 0], anim: { type: 'swing', axis: 'z', amp: 60, rate: 0.5 }, shapes: [
              { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.22], color: '#111827' }, { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, -0.22], color: '#111827' },
              { t: 'cyl', r: 0.015, h: 0.42, n: 8, rot: [90, 0, 0], color: '#94a3b8' } ] } ]) },
        { id: 'cercatore', name: 'Finderscope', color: '#f1f5f9', explode: [0, 0.9, -0.9],
          info: '<p>A small spotting scope mounted on the tube. It sees a big piece of sky and is used to <b>aim</b> the telescope at the right object, like a gun sight.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.07, h: 0.6, n: 20, rot: [0, 0, 90], pos: [0.85, R + 0.22, -0.2] },
            { t: 'cyl', r: 0.085, h: 0.12, n: 20, rot: [0, 0, 90], pos: [1.18, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'cyl', r: 0.04, h: 0.1, n: 14, rot: [0, 0, 90], pos: [0.52, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'box', s: [0.06, 0.16, 0.04], pos: [0.7, R + 0.1, -0.15], color: '#64748b' }, { t: 'box', s: [0.06, 0.16, 0.04], pos: [1.0, R + 0.1, -0.15], color: '#64748b' } ]) },
        { id: 'luce', name: 'Path of the light', label: 'Starlight', color: '#fde047', chip: true,
          info: '<p>The light of a star enters the mouth of the tube, goes down to the big mirror, is <b>reflected and focused</b> towards the small mirror and finally leaves through the side, into the eyepiece.</p>',
          more: '<p>The rays arriving from a very distant star are practically <b>parallel</b>. The parabolic mirror makes them all converge at the same point: the <b>focus</b>. There a small upside-down image forms.</p>',
          shapes: onTube(rayLines.concat(photons)) },
        { id: 'montatura', name: 'Fork mount', label: 'Mount', color: '#475569', explode: [0, -0.2, 0],
          info: '<p>It holds the tube and lets you turn it in two directions: <b>left-right</b> (azimuth) and <b>up-down</b> (altitude). It must be moved gently: at 100× magnification a single millimetre moves everything!</p>',
          more: '<p>The Earth turns, so the stars "run away" from the field of view. Many mounts have <b>motors</b> that follow the sky by themselves; "equatorial" ones have an axis parallel to the Earth\'s axis.</p>',
          shapes: onFork([ { t: 'cyl', r: 0.36, h: 0.14, n: 30, pos: [0, -0.62, 0], color: '#334155' },
            { t: 'box', s: [0.34, 0.12, 1.24], pos: [0, -0.5, 0] },
            { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, 0.62] }, { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, -0.62] },
            { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.68], color: '#111827' }, { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.68], color: '#111827' } ])
            .concat(onTube([ { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [0.45, 0, 0] }, { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [-0.45, 0, 0] },
              { t: 'cyl', r: 0.05, h: 1.18, n: 14, rot: [90, 0, 0], color: '#64748b' } ]),
            [ { t: 'cyl', r: 0.3, h: 0.16, n: 30, pos: [0, 1.73, 0], color: '#334155' } ]) },
        { id: 'treppiede', name: 'Tripod', color: '#94a3b8', explode: [0, -0.6, 0],
          info: '<p>Three sturdy legs: with three points of support an object <b>never wobbles</b>, even on uneven grass. A telescope must stay perfectly still.</p>',
          shapes: [ { t: 'cyl', r: 0.24, h: 0.2, n: 24, pos: [0, 1.56, 0], color: '#475569' } ].concat([0, 120, 240].map((a) => {
            const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180);
            return { t: 'group', shapes: [ { t: 'pipe', r: 0.045, n: 10, pts: [[0.2 * c, 1.5, 0.2 * s], [1.25 * c, 0.05, 1.25 * s]] },
              { t: 'pipe', r: 0.032, n: 10, pts: [[0.75 * c, 0.75, 0.75 * s], [1.25 * c, 0.05, 1.25 * s]], color: '#e2e8f0' },
              { t: 'sphere', r: 0.06, n: 8, pos: [1.25 * c, 0.04, 1.25 * s], color: '#1f2937' } ] };
          })) },
        { id: 'vassoio', name: 'Eyepiece tray', label: 'Tray', color: '#64748b', explode: [0, -0.3, 0.6],
          info: '<p>A shelf between the legs that keeps the tripod rigid and holds the <b>spare eyepieces</b>, for changing magnification.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 0.05, n: 3, pos: [0, 0.78, 0], phase: 30 } ].concat([0, 120, 240].map((a) => ({ t: 'cyl', r: 0.07, h: 0.14, n: 16, pos: [0.25 * Math.cos((a + 60) * Math.PI / 180), 0.86, 0.25 * Math.sin((a + 60) * Math.PI / 180)], color: '#111827' }))) }
      ]
    },
    steps: [
      { icon: '🔭', title: 'A funnel for light', explode: 0,
        html: '<p>Stars are very far away and send us very little light. The pupil of our eye is only a few millimetres wide; a telescope has a mirror as big as a plate: it gathers <b>hundreds of times more light</b> and lets us see things that are invisible to the naked eye.</p>' },
      { icon: '✨', title: 'Light enters the tube', focus: ['luce', 'tubo'], view: { rx: 0.1, ry: 0 }, zoom: 1.15,
        html: '<p>The light rays from a star arrive <b>parallel</b>, enter through the open mouth of the tube and travel down to the bottom.</p>' },
      { icon: '🪞', title: 'The curved mirror focuses', focus: ['specchio-primario', 'luce', 'tubo'], view: { rx: 0.1, ry: 0.2 }, zoom: 1.2,
        html: '<p>At the bottom is the <b>primary mirror</b>, curved like the inside of a spoon. It reflects the rays and makes them all <b>converge</b> towards one point: the <b>focus</b>.</p><p class="tip">🥄 Look into a shiny spoon: it is a concave mirror too!</p>' },
      { icon: '↗️', title: 'The small mirror bends the light', focus: ['specchio-secondario', 'luce', 'oculare'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.2,
        html: '<p>Before the rays reach the focus, the <b>secondary mirror</b>, tilted at 45°, sends them sideways, out of the tube. This type of telescope was invented by <b>Isaac Newton</b> in 1668.</p>' },
      { icon: '👁️', title: 'The eyepiece magnifies', focus: ['oculare', 'focheggiatore', 'luce'], view: { rx: 0.3, ry: -0.4 }, zoom: 1.25,
        html: '<p>The <b>eyepiece</b> is a small magnifying glass: it looks at the image at the focus and makes it seem big. With the knobs of the <b>focuser</b> you focus until the stars become sharp points.</p><p class="tip">🙃 In a telescope the Moon often looks upside down: in astronomy it doesn\'t matter!</p>' },
      { icon: '🎯', title: 'Aiming and following the sky', focus: ['cercatore', 'montatura', 'treppiede', 'vassoio'], explode: 0.25,
        html: '<p>With the <b>finderscope</b> you aim at the object, then the <b>mount</b> lets you turn the tube left-right and up-down. The <b>tripod</b> keeps everything still: even a tiny shake looks like an earthquake when you magnify 100 times.</p>' },
      { icon: '🌌', title: 'Lenses or mirrors?', explode: 0,
        html: '<p>There are two big families: <b>refractors</b> use a lens at the front (like <b>Galileo</b>\'s telescope, 1609), <b>reflectors</b> use a mirror at the back (like this one). The biggest telescopes in the world are all mirror telescopes: it is easier to build a huge mirror than a huge lens.</p>' }
    ],
    facts: [
      { icon: '🌙', title: 'Galileo and the Moon', html: 'In 1609 <b>Galileo Galilei</b> pointed his telescope at the sky and discovered the craters of the Moon, the phases of Venus and four moons of Jupiter.' },
      { icon: '🏔️', title: 'On top of mountains', html: 'Big observatories are built on high, empty mountains, such as in Chile or the Canary Islands: there the air is thinner, drier and calmer.' },
      { icon: '🛰️', title: 'Telescopes in space', html: 'The <b>James Webb</b> telescope has a 6.5-metre mirror made of 18 golden hexagons and watches the universe from space, far from the air that makes stars twinkle.' },
      { icon: '⏳', title: 'Looking into the past', html: 'Light travels fast but not infinitely fast: the star you see tonight may have sent out that light <b>centuries ago</b>. A telescope is a time machine!' },
      { icon: '⚠️', title: 'Never the Sun!', html: '<b>Never</b> look at the Sun through a telescope or binoculars without a special filter: the concentrated light can damage your eye in an instant.' }
    ],
    quiz: [
      { type: 'mc', q: 'What does the primary mirror of a reflecting telescope do?', options: ['It colours the light', 'It gathers light and focuses it at the focus', 'It produces light', 'It blocks the light of the Moon'], answer: 1, explain: 'It is concave: it reflects parallel rays and makes them converge at the focus.' },
      { type: 'mc', q: 'Who invented the mirror telescope?', options: ['Galileo Galilei', 'Isaac Newton', 'Albert Einstein', 'Leonardo da Vinci'], answer: 1, explain: 'Newton built the first reflector in 1668. Galileo used a lens telescope.' },
      { type: 'mc', q: 'What is the finderscope for?', options: ['For focusing', 'For aiming the telescope at the right object', 'For magnifying more', 'For cooling the mirror'], answer: 1, explain: 'It is a small telescope with a wide field of view, used like a sight.' },
      { type: 'tf', q: 'You can look at the Sun through a telescope without a filter, if it is only for a moment.', answer: false, explain: 'Never! The concentrated light damages the eye instantly. You need certified solar filters.' },
      { type: 'num', q: 'A telescope has a focal length of 1200 mm and the eyepiece 12 mm. What magnification does it give?', answer: 100, unit: '×', explain: '1200 ÷ 12 = 100 times magnification.' },
      { type: 'mc', q: 'Why does a telescope show stars that are invisible to the naked eye?', options: ['Because it gets closer to the stars', 'Because it gathers much more light than the eye', 'Because it switches the stars on', 'Because it filters out the clouds'], answer: 1, explain: 'The mirror has a huge area compared with the pupil: it gathers much more light.' }
    ]
  });
})();
