/* L'orecchio (destro, visto da davanti-sotto). Il suono arriva da sinistra (−x) da un diapason, entra nel condotto lungo +x,
   fa vibrare timpano e ossicini e arriva alla coclea; a destra il nervo acustico va verso il cervello. */
(function () {
  const V = 6;                                                     // velocità delle vibrazioni
  const C = [1.4, -0.2, 0.05];                                      // centro della coclea
  const spiral = (() => { const p = []; for (let i = 0; i <= 40; i++) { const t = i / 40 * 2.6, a = Math.PI + t * Math.PI * 2, r = 0.55 * (1 - 0.3 * t); p.push([C[0] + r * Math.cos(a), C[1] + r * Math.sin(a), C[2] + 0.1 * t]); } return p; })();
  const CANAL = [[-1.95, 0.05, 0.05], [-1.3, 0.12, 0.0], [-0.6, 0.0, 0.0], [-0.06, 0, 0]];
  const NERVE = [[C[0], C[1], C[2] + 0.2], [1.8, 0.0, 0.1], [2.3, 0.2, 0.05], [2.9, 0.3, 0.0]];
  const rings = Array.from({ length: 4 }, (_, k) => ({ t: 'torus', R: 0.55, r: 0.03, n: 28, m: 5, rot: [0, 0, 90], pos: [-3.2, 0.05, 0.05], color: '#38bdf8',
    anim: [ { type: 'move', dir: [0, -1, 0], amp: 3.1, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'scale', from: 1.1, to: 0.35, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 4 } ] }));
  const fluid = Array.from({ length: 9 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: spiral[0], color: '#7dd3fc', anim: { type: 'path', pts: spiral, wave: 'saw', rate: 0.4, phase: k / 9 } }));

  LIBRARY({
    lang: 'en',
    id: 'orecchio',
    title: 'The ear',
    intro: 'The ear turns <b>vibrations of the air</b> into signals for the brain. Inside the head it hides the smallest muscle, the smallest bone in the body and a "snail" full of liquid. Follow the journey of sound!',
    model: {
      rx: 0.15, ry: 0.6, speed: 0.4, height: 470, bg: 'body', fit: 1.05,
      parts: [
        { id: 'diapason', name: 'Tuning fork (the source of sound)', label: 'Tuning fork', color: '#9ca3af', pos: [-3.5, -0.6, 0], explode: [-0.6, 0, 0],
          info: '<p>Sound begins when something <b>vibrates</b>. When struck, the tuning fork vibrates back and forth hundreds of times a second and pushes the air around it.</p>',
          more: '<p>Musicians\' tuning fork vibrates 440 times a second (440 hertz): it is the note <b>A</b> used to tune instruments. More vibrations per second = higher sound.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 12, pos: [0, -0.3, 0] }, { t: 'sphere', r: 0.08, n: 8, m: 12, pos: [0, -0.62, 0], color: '#6b7280' },
            { t: 'torus', R: 0.15, r: 0.045, n: 16, m: 8, arc: 180, rot: [90, 0, 0], pos: [0, 0.15, 0] },
            { t: 'group', pos: [0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: 1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] },
            { t: 'group', pos: [-0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] } ] },
        { id: 'onde', name: 'Sound waves', label: 'Sound waves', color: '#38bdf8', explode: [0, 0, 0], chip: true,
          info: '<p>The vibrations pass from one particle of air to the next, like a push in a line of people: these are <b>sound waves</b>. They travel all the way to our ear.</p>',
          more: '<p>In air sound travels at about <b>340 metres per second</b>; in water 4 times faster. It does not travel through the vacuum of space: there it is completely silent.</p>',
          shapes: rings },
        { id: 'padiglione', name: 'Outer ear (pinna)', label: 'Pinna', color: '#f5c6a5', explode: [-1.0, 0, 0],
          info: '<p>This is the part we see and call the "ear". With its curves it gathers sounds like a <b>funnel</b> and guides them into the canal.</p>',
          more: '<p>The folds of the pinna change the sound a little depending on the direction it comes from: this is how the brain knows whether a noise comes from in front, behind or above. It is made of <b>cartilage</b>, not bone.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, scale: [0.07, 1.05, 0.62], pos: [-1.97, 0.3, -0.1] },
            { t: 'pipe', r: 0.1, n: 10, curve: true, pts: [[-2.05, -0.15, 0.36], [-2.1, 0.55, 0.47], [-2.12, 1.1, 0.28], [-2.12, 1.3, -0.12], [-2.11, 0.95, -0.52], [-2.08, 0.3, -0.64], [-2.07, -0.35, -0.55], [-2.07, -0.75, -0.3]], color: '#f0b48e' },
            { t: 'sphere', r: 1, n: 10, m: 16, scale: [0.1, 0.32, 0.24], pos: [-2.02, -0.78, -0.18], color: '#f5c6a5' },
            { t: 'lathe', n: 24, rot: [0, 0, 90], pos: [-2.0, 0.08, 0.0], pts: [[0, -0.02], [0.2, 0.0], [0.34, 0.09], [0.38, 0.13]], ds: true, color: '#e8a782' },
            { t: 'pipe', r: 0.06, n: 8, curve: true, pts: [[-2.08, 0.75, 0.25], [-2.08, 0.85, -0.15], [-2.07, 0.45, -0.35]], color: '#f0b48e' },
            { t: 'sphere', r: 0.1, n: 8, m: 10, scale: [0.6, 1, 0.8], pos: [-2.07, 0.02, 0.36], color: '#f0b48e' } ] },
        { id: 'condotto', name: 'Ear canal', label: 'Ear canal', color: '#f9a8d4', alpha: 0.45, explode: [-0.5, 0, 0.3],
          info: '<p>A little tube about <b>2.5 cm</b> long that carries the sound to the eardrum. It has tiny hairs and makes <b>earwax</b>, which traps dust and insects.</p>',
          more: '<p>Earwax comes out by itself, slowly: that is why you should not poke cotton buds into your ears, as you risk pushing it towards the eardrum.</p>',
          shapes: [ { t: 'pipe', r: 0.2, n: 18, curve: true, pts: CANAL, caps: false } ] },
        { id: 'timpano', name: 'Eardrum', color: '#fda4af', alpha: 0.85, explode: [0, 0.3, 0.6], anim: { type: 'move', dir: [1, 0, 0], amp: 0.035, rate: V },
          info: '<p>A thin membrane, stretched like the skin of a drum, at the end of the canal. When sound arrives it <b>vibrates</b> along with the air.</p>',
          more: '<p>The eardrum is only a tenth of a millimetre thick and it vibrates even for movements smaller than an atom! But a noise that is too loud can damage it.</p>',
          shapes: [ { t: 'cone', r: 0.3, h: 0.1, n: 28, rot: [0, 0, -90], pos: [0, 0, 0] }, { t: 'torus', R: 0.3, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#e11d48', alpha: 1 } ] },
        { id: 'martello', name: 'Hammer', color: '#fef3c7', explode: [0.1, 0.8, 0.5], anim: { type: 'swing', axis: 'z', amp: -3, rate: V, pivot: [0.13, 0.5, 0] },
          info: '<p>The first of the three <b>ossicles</b>. Its "handle" is attached to the eardrum: when the eardrum vibrates, the hammer moves with it.</p>',
          shapes: [ { t: 'pipe', r: 0.04, n: 8, curve: true, pts: [[0.03, -0.05, 0], [0.05, 0.2, 0], [0.1, 0.42, 0]] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [0.13, 0.52, 0] } ] },
        { id: 'incudine', name: 'Anvil', color: '#fde68a', explode: [0.3, 0.9, 0.5], anim: { type: 'swing', axis: 'z', amp: 3, rate: V, pivot: [0.32, 0.55, 0] },
          info: '<p>The second ossicle, shaped like a blacksmith\'s anvil. It receives the knock from the hammer and passes it on to the stirrup.</p>',
          shapes: [ { t: 'sphere', r: 0.1, n: 10, m: 14, scale: [1.1, 0.9, 0.9], pos: [0.3, 0.52, 0] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.33, 0.47, 0], [0.42, 0.33, 0], [0.45, 0.19, 0]] }, { t: 'pipe', r: 0.03, n: 8, pts: [[0.36, 0.56, 0], [0.55, 0.6, -0.02]] } ] },
        { id: 'staffa', name: 'Stirrup', color: '#fcd34d', explode: [0.5, 0.7, 0.5], anim: { type: 'move', dir: [1, 0, 0], amp: 0.025, rate: V },
          info: '<p>The third ossicle, shaped like a riding stirrup: it is <b>the smallest bone in the body</b> (about 3 mm). It pushes like a piston on the "oval window" of the cochlea.</p>',
          more: '<p>The three ossicles work like a <b>lever</b>: the push that reaches the oval window is about <b>20 times</b> stronger than the one on the eardrum. This is needed because the sound has to pass from the air to the liquid of the cochlea.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.22, 0.05], [0.68, 0.17, 0.06]] }, { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.12, -0.05], [0.68, 0.13, -0.06]] },
            { t: 'cyl', r: 0.08, h: 0.025, n: 16, rot: [0, 0, 90], scale: [1, 1, 0.6], pos: [0.7, 0.15, 0] } ] },
        { id: 'cassa', name: 'Tympanic cavity (middle ear)', label: 'Middle ear', color: '#fecdd3', alpha: 0.16, explode: [0.2, 0.4, 0.4],
          info: '<p>A small cavity full of <b>air</b> behind the eardrum: this is where the three ossicles are. It is the <b>middle ear</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.55, n: 14, m: 22, scale: [1, 1.05, 0.8], pos: [0.35, 0.22, 0] } ] },
        { id: 'tromba', name: 'Eustachian tube', label: 'Eustachian tube', color: '#f9a8d4', explode: [0.2, -0.4, 0.5],
          info: '<p>A channel that links the middle ear to the throat. It lets air in and out so the pressure is the same on both sides of the eardrum.</p>',
          more: '<p>When your ears feel "blocked" on a plane or in the mountains, swallowing or yawning opens the Eustachian tube: you hear a "click" and the pressure evens out.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: [[0.45, -0.25, 0.05], [0.6, -0.7, 0.25], [0.75, -1.2, 0.5], [0.85, -1.55, 0.65]] }, { t: 'cyl', r: 0.12, r2: 0.07, h: 0.18, n: 14, pos: [0.87, -1.62, 0.68], rot: [20, 0, -15] } ] },
        { id: 'coclea', name: 'Cochlea (snail)', label: 'Cochlea', color: '#fbcfe8', explode: [0.7, -0.3, 0.3],
          info: '<p>A little tube coiled like the shell of a <b>snail</b>, full of liquid. The stirrup makes the liquid move and thousands of <b>hair cells</b> turn the movement into electrical signals.</p>',
          more: '<p>Each part of the cochlea "listens" to different notes: the base (near the stirrup) to <b>high</b> sounds, the tip to <b>low</b> ones. There are about 15 000 hair cells and they do not grow back: sounds that are too loud (headphones at full volume!) can ruin them for ever.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: spiral }, { t: 'sphere', r: 0.15, n: 10, m: 14, pos: spiral[spiral.length - 1], color: '#f9a8d4' } ] },
        { id: 'liquido', name: 'Moving liquid', label: 'Liquid', color: '#7dd3fc', explode: [0.7, -0.3, 0.3], chip: true,
          info: '<p>When the stirrup pushes, a wave starts in the liquid of the cochlea. It runs along the snail and bends the hairs of the cells.</p>',
          shapes: fluid },
        { id: 'canali', name: 'Semicircular canals (balance)', label: 'Semicircular canals', color: '#f9a8d4', explode: [0.6, 0.8, 0],
          info: '<p>Three rings full of liquid, one for each direction in space. When you move your head the liquid shifts and the brain works out how you are turned: they are for <b>balance</b>!</p>',
          more: '<p>If you spin round and stop suddenly, the liquid keeps moving a little longer: that is why your head spins. Together with the canals, two little sacs (utricle and saccule) sense gravity and acceleration.</p>',
          shapes: [ { t: 'sphere', r: 0.18, n: 12, m: 16, pos: [0.88, 0.22, 0], color: '#fbcfe8' },
            { t: 'torus', R: 0.3, r: 0.045, n: 26, m: 8, arc: 290, rot: [90, 0, 120], pos: [1.0, 0.62, 0.05] },
            { t: 'torus', R: 0.28, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 30, 90], pos: [1.12, 0.55, -0.3] },
            { t: 'torus', R: 0.27, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 200, 0], pos: [1.25, 0.32, 0.05] } ] },
        { id: 'nervo', name: 'Auditory nerve', label: 'Auditory nerve', color: '#fde047', explode: [1.0, 0, 0],
          info: '<p>It carries the electrical signals from the cochlea and the balance canals to the <b>brain</b>. It is the brain that recognises a voice, a song or the miaow of a cat.</p>',
          shapes: [ { t: 'pipe', r: 0.09, n: 12, curve: true, pts: NERVE }, { t: 'pipe', r: 0.06, n: 10, curve: true, pts: [[0.95, 0.25, 0.05], [1.5, 0.15, 0.1], [1.8, 0.0, 0.1]] } ]
            .concat(Array.from({ length: 5 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.8, phase: k / 5 }, { type: 'blink', color: '#38bdf8', rate: 1.6, phase: k / 5 } ] }))) }
      ]
    },
    steps: [
      { icon: '🔔', title: 'Sound is a vibration', focus: ['diapason', 'onde', 'padiglione'], view: { rx: 0.1, ry: 0.5 },
        html: '<p>When something vibrates, like the <b>tuning fork</b>, it pushes the air back and forth. The vibrations travel through the air as <b>waves</b> until they reach our ears.</p><p class="tip">✋ Put your fingers on your throat and say "aaah": you can feel your vocal cords vibrating!</p>' },
      { icon: '👂', title: 'The outer ear collects', focus: ['padiglione', 'condotto', 'onde', 'timpano'], view: { rx: 0.15, ry: 0.95 }, zoom: 1.3,
        html: '<p>The <b>pinna</b> gathers sounds like a funnel and sends them into the <b>ear canal</b>. At the end is the <b>eardrum</b>, a membrane stretched like the skin of a drum.</p>' },
      { icon: '🥁', title: 'The eardrum vibrates', focus: ['timpano', 'martello', 'incudine', 'staffa', 'cassa'], view: { rx: 0.1, ry: -0.3 }, zoom: 2.4,
        html: '<p>The sound makes the <b>eardrum vibrate</b>. Behind it, in the <b>middle ear</b>, three ossicles, the <b>hammer</b>, <b>anvil</b> and <b>stirrup</b>, pass the vibration on and make it stronger, like a lever.</p><p class="tip">🦴 The stirrup is the smallest bone in the body: it is as big as a grain of rice!</p>' },
      { icon: '🐌', title: 'Inside the snail', focus: ['coclea', 'liquido', 'staffa', 'nervo'], view: { rx: 0.1, ry: -0.2 }, zoom: 1.6,
        html: '<p>The stirrup pushes on the liquid of the <b>cochlea</b>. The liquid moves and bends the hairs of thousands of cells, which produce <b>electrical signals</b>. The base of the snail hears high sounds, the tip low sounds.</p>' },
      { icon: '🧠', title: 'The brain listens', focus: ['nervo', 'coclea', 'canali'], view: { rx: 0.2, ry: 0.4 }, zoom: 1.3,
        html: '<p>The <b>auditory nerve</b> carries the signals to the brain, which turns them into what we "hear": words, music, noises. With two ears the brain can also tell <b>where</b> a sound comes from.</p>' },
      { icon: '🤸', title: 'Ears for keeping your balance', focus: ['canali', 'nervo'], view: { rx: 0.4, ry: -0.6 }, zoom: 2.0,
        html: '<p>The ear is not only for hearing! The three liquid-filled <b>semicircular canals</b> tell the brain how the head is moving. This is how you can balance on one leg.</p>' },
      { icon: '🌬️', title: 'The pressure valve', focus: ['tromba', 'cassa', 'timpano'], view: { rx: -0.1, ry: -0.5 }, zoom: 1.6,
        html: '<p>The <b>Eustachian tube</b> links the middle ear to the throat and evens out the air pressure. That is why on a plane, by swallowing or yawning, your ears "unblock".</p><p class="tip">🎧 Protect your ears: with headphones, do not go above half volume.</p>' }
    ],
    facts: [
      { icon: '🔊', title: 'Measured in decibels', html: 'The loudness of sound is measured in <b>decibels</b> (dB): a whisper is 30 dB, a conversation 60 dB, a rock concert 110 dB. Above 85 dB, for a long time, hearing gets damaged.' },
      { icon: '🐕', title: 'Sounds we cannot hear', html: 'We hear sounds from 20 to 20 000 vibrations a second. Dogs go up to 45 000, bats and dolphins over 100 000 (ultrasound)!' },
      { icon: '😴', title: 'Always on', html: 'Your ears never "switch off", not even when you sleep: the brain ignores noises, but an alarm clock or your name wakes you up.' },
      { icon: '🦉', title: 'Lopsided ears', html: 'The barn owl has one ear higher than the other: this is how it works out exactly where a little mouse is hiding in the dark.' },
      { icon: '🎤', title: 'Your recorded voice', html: 'Your recorded voice sounds strange because, when you speak, you also hear it through the <b>bones of your skull</b>, which make it deeper.' }
    ],
    quiz: [
      { type: 'order', q: 'Put the journey of sound in order', items: ['Pinna', 'Ear canal', 'Eardrum', 'Ossicles', 'Cochlea', 'Auditory nerve'], explain: 'From the outer ear to the middle, then to the inner ear and finally to the brain.' },
      { type: 'mc', q: 'What is the smallest bone in the human body?', options: ['The hammer', 'The stirrup', 'The kneecap', 'The anvil'], answer: 1, explain: 'The stirrup, in the middle ear, is about 3 mm long.' },
      { type: 'mc', q: 'What does the cochlea contain?', options: ['Air', 'Liquid', 'Sand', 'Blood'], answer: 1, explain: 'The cochlea is full of liquid: its movement bends the hair cells.' },
      { type: 'tf', q: 'The semicircular canals are for balance.', answer: true, explain: 'The liquid in the three rings tells the brain about the movements of the head.' },
      { type: 'mc', q: 'What is sound?', options: ['An invisible light', 'A vibration that travels through the air', 'A gas', 'An electric current'], answer: 1, explain: 'Sound is a vibration that travels through a material, such as air or water.' },
      { type: 'mc', q: 'Why does swallowing on a plane "unblock" your ears?', options: ['Because it cleans the canal', 'Because it opens the Eustachian tube and evens out the pressure', 'Because it makes the eardrum vibrate', 'Because it closes the cochlea'], answer: 1, explain: 'The Eustachian tube links the middle ear and the throat and evens out the pressure.' }
    ]
  });
})();
