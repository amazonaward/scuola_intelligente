/* The human heart, seen from the front (the body's left is on the right of the screen: +x).
   Cardiac cycle (cycle 1): 0–0.16 the atria contract; 0.2–0.55 the ventricles contract. */
(function () {
  const ell = (pos, sc, rot) => ({ t: 'sphere', r: 1, n: 14, m: 24, pos, scale: sc, rot });
  /* valve: ring + two leaflets that open (sign 1 = downward, -1 = upward) */
  const valve = (win, sign) => [
    { t: 'torus', R: 0.13, r: 0.022, n: 24, m: 6 },
    { t: 'group', pos: [-0.12, 0, 0], anim: { type: 'swing', axis: 'z', amp: -65 * sign, wave: 'window', from: win[0], to: win[1], ramp: 0.25 }, shapes: [{ t: 'box', s: [0.12, 0.012, 0.2], pos: [0.06, 0, 0], color: '#fef3c7' }] },
    { t: 'group', pos: [0.12, 0, 0], anim: { type: 'swing', axis: 'z', amp: 65 * sign, wave: 'window', from: win[0], to: win[1], ramp: 0.25 }, shapes: [{ t: 'box', s: [0.12, 0.012, 0.2], pos: [-0.06, 0, 0], color: '#fef3c7' }] }
  ];
  const BLUE = [[-0.8, 1.45, 0.1], [-0.75, 0.5, 0.12], [-0.55, 0.1, 0.25], [-0.38, -0.45, 0.32], [-0.22, 0.0, 0.4], [-0.15, 0.4, 0.42], [-0.05, 0.8, 0.45], [0.2, 1.05, 0.3], [0.75, 1.0, 0.05], [1.2, 1.0, -0.1]];
  const RED = [[1.2, 0.42, -0.4], [0.7, 0.45, -0.35], [0.42, 0.48, -0.3], [0.38, 0.1, -0.18], [0.36, -0.6, -0.05], [0.2, -0.1, 0.0], [0.12, 0.38, 0.0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.6, -0.55]];
  const drops = (path, color) => Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate: 0.25, phase: k / 10 } }));
  const AV = [0.58, 0.19], SL = [0.22, 0.52];
  const squeeze = (win, amt) => ({ type: 'scale', from: 1, to: amt, wave: 'window', win, ramp: 0.45 });

  LIBRARY({
    lang: 'en',
    id: 'cuore',
    title: 'The human heart',
    intro: 'The heart is a muscle as big as your fist that beats about <b>100,000 times a day</b>. It is a <b>double pump</b>: the right side sends blood to the lungs, the left side to the whole body.',
    model: {
      rx: 0.12, ry: -0.25, speed: 0.75, height: 480, bg: 'body',
      phases: [ { from: 0, to: 0.18, label: 'Atria: contracting', color: '#7c3aed' }, { from: 0.18, to: 0.56, label: 'Ventricles: contracting (systole)', color: '#dc2626' }, { from: 0.56, to: 1, label: 'Rest and filling (diastole)', color: '#0891b2' } ],
      parts: [
        { id: 'atrio-destro', name: 'Right atrium', color: '#818cf8', alpha: 0.5, explode: [-0.6, 0.35, 0.2], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [-0.72, 0.42, 0.12] }),
          info: '<p>This is the right-hand "waiting room": here arrives the <b>oxygen-poor</b> blood returning from the body through the venae cavae.</p>', shapes: [ ell([-0.72, 0.42, 0.12], [0.45, 0.45, 0.42]) ] },
        { id: 'ventricolo-destro', name: 'Right ventricle', color: '#4f46e5', alpha: 0.5, explode: [-0.45, -0.4, 0.5], anim: Object.assign(squeeze([0.19, 0.56], 0.84), { pivot: [-0.32, -0.38, 0.32] }),
          info: '<p>It pushes the oxygen-poor blood into the <b>pulmonary artery</b>, towards the lungs. Its walls are thinner than those of the left ventricle: the lungs are close by.</p>', shapes: [ ell([-0.32, -0.38, 0.32], [0.6, 0.8, 0.42], [0, 0, -15]) ] },
        { id: 'atrio-sinistro', name: 'Left atrium', color: '#fca5a5', alpha: 0.5, explode: [0.55, 0.45, -0.35], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [0.42, 0.48, -0.3] }),
          info: '<p>It receives the <b>oxygen-rich</b> blood that arrives from the lungs through the pulmonary veins.</p>', shapes: [ ell([0.42, 0.48, -0.3], [0.45, 0.36, 0.4]) ] },
        { id: 'ventricolo-sinistro', name: 'Left ventricle', color: '#dc2626', alpha: 0.5, explode: [0.55, -0.5, -0.1], anim: Object.assign(squeeze([0.19, 0.56], 0.86), { pivot: [0.3, -0.45, -0.05] }),
          info: '<p>This is the strongest chamber: with its thick muscular wall, it pushes the oxygen-rich blood into the <b>aorta</b> and from there to the whole body, down to the tips of your toes.</p>',
          more: '<p>With each beat the left ventricle pushes out about <b>70 ml</b> of blood: in one minute about 5 litres, that is, all the blood in your body!</p>', shapes: [ ell([0.3, -0.45, -0.05], [0.66, 0.95, 0.62], [0, 0, 22]) ] },
        { id: 'setto', name: 'Septum', color: '#fda4af', explode: [0, -0.4, 0.15],
          info: '<p>A wall of muscle that divides the heart into two halves: so the blue blood (right) and the red blood (left) <b>never mix</b>.</p>',
          shapes: [ { t: 'box', s: [0.06, 1.15, 0.62], pos: [-0.02, -0.38, 0.13], rot: [0, 31, 8] } ] },
        { id: 'tricuspide', name: 'Tricuspid valve', label: 'Tricuspid', color: '#fbbf24', pos: [-0.55, 0.06, 0.24], explode: [-0.4, 0, 0.3],
          info: '<p>A "one-way door" between the atrium and the right ventricle: it opens to let the blood flow down, and closes when the ventricle pushes, so the blood does not flow back.</p>', shapes: valve(AV, 1) },
        { id: 'mitrale', name: 'Mitral valve', label: 'Mitral', color: '#fbbf24', pos: [0.4, 0.1, -0.18], explode: [0.45, 0, -0.2],
          info: '<p>The door between the atrium and the left ventricle. It has two leaflets and looks like a mitre, the bishop\'s hat: hence its name.</p>', shapes: valve(AV, 1) },
        { id: 'polmonare', name: 'Pulmonary valve', label: 'Pulmonary valve', color: '#fbbf24', pos: [-0.15, 0.4, 0.42], explode: [-0.2, 0.5, 0.4],
          info: '<p>At the exit of the right ventricle: it opens when the ventricle pushes and closes right after, so the blood does not flow back.</p>', shapes: valve(SL, -1) },
        { id: 'aortica', name: 'Aortic valve', label: 'Aortic valve', color: '#fbbf24', pos: [0.12, 0.36, 0.0], explode: [0.25, 0.55, 0],
          info: '<p>At the exit of the left ventricle, at the start of the aorta. When it closes, it is part of the "lub-<b>DUB</b>" sound of the heartbeat.</p>', shapes: valve(SL, -1) },
        { id: 'aorta', name: 'Aorta', color: '#ef4444', explode: [0.25, 0.85, -0.2],
          info: '<p>The largest artery in the body: almost as thick as a thumb. It starts from the left ventricle, makes a curve (the <b>aortic arch</b>) and carries the oxygen-rich blood to the whole body.</p>',
          shapes: [ { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[0.12, 0.33, 0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.8, -0.55]] },
            { t: 'pipe', r: 0.055, n: 10, pts: [[0.25, 1.4, -0.05], [0.2, 1.85, 0]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.45, 1.5, -0.2], [0.45, 1.9, -0.2]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.62, 1.45, -0.35], [0.7, 1.85, -0.4]] } ] },
        { id: 'arteria-polmonare', name: 'Pulmonary artery', color: '#3b82f6', explode: [0, 0.9, 0.45],
          info: '<p>It carries the <b>oxygen-poor</b> blood from the right ventricle to the two lungs. It is the only artery that carries "blue" blood!</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: [[-0.15, 0.35, 0.42], [-0.08, 0.8, 0.45], [0.2, 1.05, 0.3]] },
            { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [-0.3, 1.06, 0.08], [-1.05, 1.0, 0]] }, { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [0.75, 1.02, 0.05], [1.25, 1.0, -0.1]] } ] },
        { id: 'vene-cave', name: 'Venae cavae', color: '#2563eb', explode: [-0.85, 0.2, 0],
          info: '<p>Two large veins bring the used blood back to the heart: the <b>superior vena cava</b> from the head and arms, the <b>inferior vena cava</b> from the rest of the body.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, pts: [[-0.78, 0.7, 0.1], [-0.8, 1.55, 0.1]] }, { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[-0.74, 0.15, 0.06], [-0.72, -0.6, 0], [-0.7, -1.35, 0]] } ] },
        { id: 'vene-polmonari', name: 'Pulmonary veins', color: '#f87171', explode: [0.5, 0.5, -0.8],
          info: '<p>Four veins carry the blood, <b>freshly loaded with oxygen</b> in the lungs, back to the heart.</p>',
          shapes: [ [[0.2, 0.42, -0.45], [-0.55, 0.45, -0.58]], [[0.2, 0.58, -0.45], [-0.5, 0.75, -0.62]], [[0.7, 0.42, -0.35], [1.25, 0.4, -0.42]], [[0.7, 0.58, -0.35], [1.25, 0.75, -0.48]] ].map((p) => ({ t: 'pipe', r: 0.065, n: 10, pts: p })) },
        { id: 'coronarie', name: 'Coronary arteries', label: 'Coronary arteries', color: '#b91c1c', explode: [0, 0, 0.5],
          info: '<p>The heart needs oxygen too! The coronary arteries are small arteries that wind over its surface like a crown and feed it.</p>',
          more: '<p>If a coronary artery closes, part of the heart muscle is left without oxygen: this is a <b>heart attack</b>. Eating healthily and moving your body keeps the arteries clean.</p>',
          shapes: [ { t: 'pipe', r: 0.032, n: 8, curve: true, pts: [[0.1, 0.35, 0.18], [0.0, 0.1, 0.46], [-0.05, -0.45, 0.66], [0.18, -1.05, 0.45]] },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.0, 0.33, 0.22], [-0.5, 0.14, 0.52], [-0.9, -0.25, 0.32], [-0.75, -0.75, 0.1]] } ] },
        { id: 'nodi', name: 'Beat nodes (natural pacemaker)', label: 'Natural pacemaker', color: '#facc15', explode: [-0.3, 0.3, 0.6],
          info: '<p>The heart beats <b>on its own</b>! A small group of cells in the right atrium, the <b>sinoatrial node</b>, produces a small electrical impulse that makes the atria contract first and then, passing through the atrioventricular node, the ventricles.</p>',
          more: '<p>The electrical impulses of the heart can be recorded with an <b>electrocardiogram</b> (ECG). If the node does not work well, an artificial pacemaker can be implanted.</p>',
          shapes: [ { t: 'sphere', r: 0.07, n: 8, pos: [-0.68, 0.8, 0.3], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0, to: 0.08, ramp: 0.3 } },
            { t: 'sphere', r: 0.06, n: 8, pos: [-0.2, 0.06, 0.25], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0.12, to: 0.2, ramp: 0.3 } },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.68, 0.8, 0.3], [-0.45, 0.4, 0.3], [-0.2, 0.06, 0.25], [-0.05, -0.5, 0.3], [0.05, -1.0, 0.25]] } ] },
        { id: 'sangue-blu', name: 'Oxygen-poor blood', label: '"blue" blood', color: '#3b82f6', noLabel: true,
          info: '<p>The blood returning from the body has delivered its oxygen to the cells and carries away <b>carbon dioxide</b>. In drawings it is coloured blue, but in reality it is dark red.</p>', shapes: drops(BLUE, '#2563eb') },
        { id: 'sangue-rosso', name: 'Oxygen-rich blood', label: 'Red blood', color: '#ef4444', noLabel: true,
          info: '<p>In the lungs the blood is reloaded with <b>oxygen</b> and turns bright red. The heart pushes it throughout the body.</p>', shapes: drops(RED, '#ef4444') }
      ]
    },
    steps: [
      { icon: '🫀', title: 'A double pump', explode: 0,
        html: '<p>The heart has <b>4 chambers</b>: two <b>atria</b> at the top and two <b>ventricles</b> at the bottom. The <b>right</b> half (on the left of the screen!) pumps blood to the lungs, the <b>left</b> half to the whole body.</p><p class="tip">🪞 Look at the heart of a person facing you: their right is your left.</p>' },
      { icon: '⚡', title: 'The beat starts on its own', focus: ['nodi', 'atrio-destro', 'atrio-sinistro'], loop: [0, 0.25],
        html: '<p>The <b>sinoatrial node</b>, our natural pacemaker, sends out a small electrical spark. The impulse spreads over the atria, then passes to the <b>atrioventricular node</b> and goes down to the ventricles.</p>' },
      { icon: '⬇️', title: 'The atria fill the ventricles', focus: ['atrio-destro', 'atrio-sinistro', 'tricuspide', 'mitrale', 'sangue-blu', 'sangue-rosso'], loop: [0.55, 1.2 - 0.02],
        html: '<p>While the ventricles are relaxed, blood flows down from the atria through the <b>tricuspid</b> and <b>mitral</b> valves, which are open. At the end the atria contract and give one last push.</p>' },
      { icon: '💥', title: 'The ventricles push', focus: ['ventricolo-destro', 'ventricolo-sinistro', 'polmonare', 'aortica', 'tricuspide', 'mitrale'], loop: [0.18, 0.6],
        html: '<p>The ventricles contract with force (<b>systole</b>). The tricuspid and mitral valves snap shut, while the <b>pulmonary</b> and <b>aortic</b> valves open and the blood leaves into the arteries.</p><p class="tip">🩺 "Lub-DUB": the first sound is the closing of the valves between the atria and ventricles, the second is that of the valves of the arteries.</p>' },
      { icon: '🫁', title: 'Pulmonary circulation: to the lungs', focus: ['atrio-destro', 'ventricolo-destro', 'arteria-polmonare', 'vene-polmonari', 'vene-cave', 'sangue-blu', 'atrio-sinistro'],
        html: '<p>The "blue" blood arrives from the <b>venae cavae</b>, passes through the right atrium and ventricle and goes to the lungs through the <b>pulmonary artery</b>. There it releases carbon dioxide and takes in oxygen, then returns to the left atrium through the <b>pulmonary veins</b>.</p>' },
      { icon: '🏃', title: 'Systemic circulation: to the whole body', focus: ['atrio-sinistro', 'ventricolo-sinistro', 'aorta', 'sangue-rosso', 'coronarie', 'vene-polmonari'],
        html: '<p>The left ventricle pushes the red blood into the <b>aorta</b> and from there into all the arteries of the body. The first to receive blood are the <b>coronary arteries</b>, which feed the heart itself!</p><p class="tip">⏱️ A drop of blood makes a complete circuit of the body in about a minute.</p>' }
    ],
    facts: [
      { icon: '✊', title: 'As big as a fist', html: 'The heart weighs about 300 grams, like a large apple, and is slightly shifted to the left in the chest.' },
      { icon: '🔢', title: 'Tireless', html: 'In a whole lifetime the heart beats more than <b>2.5 billion</b> times without ever stopping to rest.' },
      { icon: '🐋', title: 'The largest heart', html: 'The heart of the blue whale weighs about 180 kg: it is the largest in the animal kingdom.' },
      { icon: '🏃‍♀️', title: 'Faster when you run', html: 'At rest a child has about 80–100 beats per minute; when running, the heart speeds up to bring more oxygen to the muscles.' }
    ],
    quiz: [
      { type: 'mc', q: 'How many chambers does the human heart have?', options: ['2', '3', '4', '6'], answer: 2, explain: 'Two atria (at the top) and two ventricles (at the bottom).' },
      { type: 'mc', q: 'Where does the blood pushed by the right ventricle go?', options: ['To the brain', 'To the lungs', 'To the legs', 'To the liver'], answer: 1, explain: 'The right ventricle sends the oxygen-poor blood to the lungs through the pulmonary artery.' },
      { type: 'mc', q: 'What is the largest artery in the body?', options: ['The vena cava', 'The pulmonary artery', 'The aorta', 'The coronary artery'], answer: 2, explain: 'The aorta starts from the left ventricle and carries oxygenated blood to the whole body.' },
      { type: 'tf', q: 'The valves of the heart let the blood flow in one direction only.', answer: true, explain: 'They are one-way doors: they close to stop the blood from flowing back.' },
      { type: 'mc', q: 'What starts each heartbeat?', options: ['The brain, at each beat', 'An electrical impulse from the sinoatrial node', 'The lungs when you breathe', 'The stomach'], answer: 1, explain: 'The heart has its own "natural pacemaker": the sinoatrial node.' },
      { type: 'order', q: 'Put in order the journey of the blood returning from the body', items: ['Venae cavae', 'Right atrium', 'Right ventricle', 'Pulmonary artery', 'Lungs', 'Pulmonary veins', 'Left atrium', 'Left ventricle', 'Aorta'], explain: 'First the pulmonary circulation (right heart → lungs → left heart), then the systemic circulation with the aorta.' }
    ]
  });
})();
