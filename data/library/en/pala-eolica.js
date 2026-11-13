/* La pala eolica (aerogeneratore ad asse orizzontale). Il vento arriva da −x; il rotore gira intorno all'asse x.
   La navicella è semitrasparente per vedere albero, moltiplicatore e generatore. */
(function () {
  const AX = [0, 0, -90], HY = 6.25, HX = -1.05;                  // altezza del mozzo e posizione del rotore
  const blade = (a) => ({ t: 'group', rot: [a, 0, 0], shapes: [ { t: 'group', rot: [0, 78, 0], shapes: [
    { t: 'cyl', r: 0.11, h: 0.45, n: 16, pos: [0, 0.45, 0], color: '#e5e7eb' },
    { t: 'extrude', d: 0.07, smooth: true, pts: [[-0.08, 0.6], [0.14, 0.62], [0.27, 0.95], [0.25, 1.6], [0.18, 2.6], [0.1, 3.5], [0.04, 3.95], [-0.02, 3.98], [-0.05, 3.2], [-0.07, 2.0], [-0.09, 1.1]], color: '#f8fafc' },
    { t: 'extrude', d: 0.075, pts: [[0.0, 3.6], [0.07, 3.6], [0.04, 3.95], [-0.02, 3.98], [-0.03, 3.6]], color: '#ef4444' } ] } ] });
  const gear = (r, teeth, col) => [ { t: 'cyl', r, h: 0.06, n: 28, color: col }, { t: 'cyl', r: r * 0.3, h: 0.08, n: 14, color: '#1f2937' } ]
    .concat(Array.from({ length: teeth }, (_, k) => ({ t: 'group', rot: [0, k * 360 / teeth, 0], shapes: [ { t: 'box', s: [0.05, 0.06, 0.04], pos: [r + 0.02, 0, 0], color: col } ] })));
  const R1 = 0.22, R2 = 0.09, GY = HY, GX = 0.68;                 // ingranaggi del moltiplicatore
  const wind = Array.from({ length: 16 }, (_, k) => {
    const a = k * 2.4, r = 0.6 + (k % 4) * 0.8, y = HY + r * Math.sin(a), z = r * Math.cos(a);
    return { t: 'sphere', r: 0.05, n: 6, m: 8, scale: [4, 1, 1], pos: [-5, y, z], color: '#bae6fd', anim: [ { type: 'path', pts: [[-5, y, z], [-1.3, y, z], [2.6, y * 0.98 + 0.12, z * 1.1]], wave: 'saw', rate: 0.45, phase: k / 16 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.98, ramp: 0.1, rate: 0.45, phase: k / 16 } ] };
  });
  const POWER = [[1.05, HY + 0.2, 0], [1.0, HY - 0.3, 0.05], [0.05, 5.8, 0.05], [0.05, 0.5, 0.05], [0.4, 0.15, 0.4], [1.1, 0.25, 0.9], [2.0, 0.05, 1.6], [3.2, 0.05, 2.4]];

  LIBRARY({
    lang: 'en',
    id: 'pala-eolica',
    title: 'The wind turbine',
    intro: 'A wind turbine is a modern windmill: the wind turns its big blades and a <b>generator</b> turns the movement into <b>electricity</b>, without burning anything and without polluting the air.',
    model: {
      rx: 0.2, ry: -0.75, speed: 0.4, height: 500, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'pale', name: 'Blades', color: '#f8fafc', pos: [HX, HY, 0], explode: [-1.4, 0, 0],
          anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>Three long blades shaped like an <b>aeroplane wing</b>. The wind, flowing over their curved surface, pushes them sideways and makes them turn.</p>',
          more: '<p>Modern blades are more than <b>80 metres</b> long and made of fibreglass and resins, light and strong. The tip can exceed 300 km/h even though the rotor seems to turn slowly. Why three blades? It is the best compromise between efficiency, weight and stability.</p>',
          shapes: [ blade(0), blade(120), blade(240) ] },
        { id: 'mozzo', name: 'Hub and nose cone', label: 'Hub', color: '#e5e7eb', pos: [HX, HY, 0], explode: [-1.0, 0, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>The "centre" of the rotor to which the blades are attached. The cone at the front, the <b>nose cone</b>, protects the mechanisms and cuts through the air.</p>',
          more: '<p>Inside the hub there are the <b>pitch</b> motors: they rotate each blade on its axis. In strong wind the blades are turned "edge-on" so the rotor does not spin too fast; in wind that is too strong (over 90 km/h) the turbine stops for safety.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pts: [[0.32, 0.12], [0.33, 0], [0.3, -0.18], [0.2, -0.38], [0.08, -0.5], [0, -0.53]] }, { t: 'cyl', r: 0.3, h: 0.25, n: 30, rot: AX, pos: [0.22, 0, 0], color: '#cbd5e1' } ] },
        { id: 'navicella', name: 'Nacelle', color: '#f1f5f9', alpha: 0.32, explode: [0.3, 1.1, 0],
          info: '<p>The "little house" on top of the tower: it contains all the machines that turn the rotation into electricity. It is as big as a van and technicians go inside for maintenance.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pos: [-0.15, HY, 0], pts: [[0.26, -0.72], [0.4, -0.62], [0.46, -0.4], [0.47, 0], [0.47, 1.25], [0.43, 1.45], [0.3, 1.55], [0, 1.57]], ds: true },
            { t: 'box', s: [0.25, 0.12, 0.06], pos: [0.95, HY + 0.47, 0], color: '#94a3b8', alpha: 1 } ] },
        { id: 'albero', name: 'Slow shaft', label: 'Slow shaft', color: '#94a3b8', explode: [-0.2, 0.6, 0.6],
          info: '<p>A big steel cylinder connected to the hub: it turns slowly, together with the blades (about <b>10–15 turns per minute</b>), but with enormous force.</p>',
          shapes: [ { t: 'cyl', r: 0.18, h: 0.18, n: 24, rot: AX, pos: [-0.55, HY, 0], color: '#475569' },
            { t: 'group', pos: [-0.25, HY, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 }, shapes: [ { t: 'cyl', r: 0.08, h: 1.1, n: 18, rot: AX }, { t: 'box', s: [0.6, 0.02, 0.17], pos: [0, 0.08, 0], color: '#facc15', decal: 1 } ] } ] },
        { id: 'moltiplicatore', name: 'Gearbox', label: 'Gearbox', color: '#475569', explode: [0.1, 0.9, 0.9],
          info: '<p>A box of <b>gears</b>, like the gears of a bicycle: a big wheel makes a small one turn much faster. This way the few turns of the blades become lots of turns for the generator.</p>',
          more: '<p>The gearbox increases the speed about <b>100 times</b>: from 15 to 1500 turns per minute. Some modern turbines do not have one: they use huge generators full of magnets that work even turning slowly ("direct drive").</p>',
          shapes: [ { t: 'box', s: [0.5, 0.52, 0.55], pos: [0.36, HY, 0] },
            { t: 'group', pos: [GX, GY, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: 0.5 }, shapes: gear(R1, 18, '#f59e0b') },
            { t: 'group', pos: [GX, GY + R1 + R2 + 0.02, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: -0.5 * R1 / R2 }, shapes: gear(R2, 8, '#fbbf24') } ] },
        { id: 'freno', name: 'Disc brake', label: 'Brake', color: '#9ca3af', explode: [0.4, 0.6, 1.0],
          info: '<p>A disc brake, like the one on motorbikes, that stops the rotor for maintenance or in an emergency.</p>',
          shapes: [ { t: 'group', pos: [0.86, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.13, h: 0.03, n: 24, rot: AX }, { t: 'cyl', r: 0.03, h: 0.4, n: 10, rot: AX, pos: [0.15, 0, 0], color: '#64748b' } ] },
            { t: 'box', s: [0.08, 0.08, 0.1], pos: [0.86, GY + R1 + R2 + 0.15, 0], color: '#dc2626' } ] },
        { id: 'generatore', name: 'Generator', color: '#1d4ed8', explode: [0.9, 0.9, 0.5],
          info: '<p>The electrical heart of the turbine: inside, <b>magnets</b> turn close to coils of copper wire. The movement of the magnets creates an <b>electric current</b> in the wire.</p>',
          more: '<p>This is the principle of <b>electromagnetic induction</b>, discovered by Michael Faraday in 1831: the same as the dynamo of a bicycle. A big turbine produces 3–15 megawatts, enough for thousands of homes.</p>',
          shapes: [ { t: 'cyl', r: 0.19, h: 0.42, n: 28, rot: AX, pos: [1.2, GY + R1 + R2 + 0.02, 0] }, { t: 'cyl', r: 0.2, h: 0.04, n: 28, rot: AX, pos: [1.0, GY + R1 + R2 + 0.02, 0], color: '#94a3b8' },
            { t: 'group', pos: [1.43, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.12, h: 0.03, n: 6, rot: AX, color: '#e2e8f0' }, { t: 'box', s: [0.035, 0.2, 0.03], pos: [0.02, 0, 0], color: '#b45309' } ] },
            { t: 'box', s: [0.3, 0.3, 0.2], pos: [1.1, HY - 0.2, 0.2], color: '#334155' } ] },
        { id: 'anemometro', name: 'Anemometer and wind vane', label: 'Anemometer', color: '#e2e8f0', explode: [0.5, 1.4, 0],
          info: '<p>On the roof of the nacelle an <b>anemometer</b> measures the wind speed and a <b>wind vane</b> measures its direction. The turbine\'s computer uses them to decide how to turn and when to start.</p>',
          shapes: [ { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.0, HY + 0.65, -0.1] }, { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.25, HY + 0.65, 0.1] },
            { t: 'group', pos: [1.0, HY + 0.86, -0.1], anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [0, 120, 240].map((a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'cyl', r: 0.012, h: 0.2, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 8, m: 10, hemi: true, rot: [0, 0, 90], pos: [0.2, 0, 0], color: '#f8fafc' } ] })) },
            { t: 'group', pos: [1.25, HY + 0.86, 0.1], anim: { type: 'swing', axis: 'y', amp: 15, rate: 0.4 }, shapes: [ { t: 'cyl', r: 0.012, h: 0.3, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'extrude', pts: [[0.2, 0], [0.35, 0.1], [0.35, -0.06]], d: 0.01, color: '#ef4444' } ] } ] },
        { id: 'imbardata', name: 'Yaw system', label: 'Yaw', color: '#64748b', explode: [0, 0.4, 0],
          info: '<p>A big toothed ring with motors between the tower and the nacelle: it <b>turns the whole nacelle</b> to keep the blades always facing the wind, like a weathervane.</p>',
          shapes: [ { t: 'torus', R: 0.3, r: 0.05, n: 30, m: 8, pos: [0, HY - 0.45, 0] }, { t: 'cyl', r: 0.33, h: 0.08, n: 30, pos: [0, HY - 0.5, 0], color: '#475569' } ]
            .concat([0.6, -0.6].map((x) => ({ t: 'group', pos: [x * 0.6, HY - 0.3, 0.25], shapes: [ { t: 'cyl', r: 0.06, h: 0.22, n: 12, color: '#334155' }, { t: 'group', pos: [0, -0.14, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'cyl', r: 0.05, h: 0.05, n: 8, color: '#facc15' } ] } ] }))) },
        { id: 'torre', name: 'Tower', color: '#e5e7eb', explode: [0, 0, 0],
          info: '<p>A steel tower shaped like a tube, as tall as a building of 30–40 storeys. The higher you go, the stronger and steadier the wind: that is why the blades are so high up.</p>',
          more: '<p>Inside the tower there is a ladder, sometimes a small lift, and the cables that carry the electricity down. The tallest towers are over 160 metres.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0, 0.1], [0.32, 0.1], [0.29, 2.0], [0.24, 4.0], [0.19, 5.8], [0, 5.8]] },
            { t: 'box', s: [0.18, 0.4, 0.04], pos: [0, 0.4, 0.31], rot: [-1, 0, 0], color: '#64748b', decal: 1 }, { t: 'torus', R: 0.3, r: 0.02, n: 30, m: 4, pos: [0, 2.0, 0], color: '#cbd5e1' }, { t: 'torus', R: 0.24, r: 0.02, n: 30, m: 4, pos: [0, 4.0, 0], color: '#cbd5e1' } ] },
        { id: 'fondazione', name: 'Foundation', color: '#a8a29e', explode: [0, -0.6, 0],
          info: '<p>Underground there is a huge "foot" of <b>reinforced concrete</b> that keeps the tower upright even in storms. It weighs thousands of tonnes.</p>',
          shapes: [ { t: 'cyl', r: 1.2, r2: 0.5, h: 0.35, n: 8, pos: [0, -0.08, 0] }, { t: 'cyl', r: 2.4, h: 0.06, n: 36, pos: [0, -0.04, 0], color: '#65a30d' } ] },
        { id: 'trasformatore', name: 'Transformer and grid', label: 'Transformer', color: '#64748b', explode: [0.7, -0.2, 0.7],
          info: '<p>At the base of the tower a <b>transformer</b> raises the voltage of the electricity, so it can travel far along the cables of the power grid to homes, schools and factories.</p>',
          shapes: [ { t: 'box', s: [0.55, 0.5, 0.45], pos: [1.15, 0.27, 0.95] }, { t: 'box', s: [0.6, 0.05, 0.5], pos: [1.15, 0.54, 0.95], color: '#475569' } ]
            .concat([0, 1, 2, 3, 4].map((k) => ({ t: 'box', s: [0.02, 0.36, 0.5], pos: [0.86, 0.27, 0.95 - 0.2 + k * 0.1], color: '#94a3b8' })), [ { t: 'box', s: [0.1, 0.12, 0.02], pos: [1.15, 0.33, 1.18], color: '#facc15', decal: 1 } ]) },
        { id: 'corrente', name: 'Electric current', label: 'Electricity', color: '#facc15', explode: [0, 0, 0], chip: true,
          info: '<p>The electricity made by the generator goes down the <b>cables</b> inside the tower, passes through the transformer and goes into the power grid.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: POWER, color: '#1f2937' } ].concat(Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: POWER[0], color: '#facc15', anim: { type: 'path', pts: POWER, wave: 'saw', rate: 0.25, phase: k / 10 } }))) },
        { id: 'vento', name: 'Wind', color: '#bae6fd', explode: [0, 0, 0], chip: true,
          info: '<p>Wind is <b>moving air</b>: it exists because the Sun heats the Earth unevenly and warm air rises while cold air takes its place. Wind has <b>movement energy</b> (kinetic energy).</p>',
          more: '<p>If the wind speed <b>doubles</b>, the energy it carries becomes <b>8 times</b> bigger. A turbine cannot capture all the energy of the wind: at most 59% (Betz limit), and the best reach 50%.</p>',
          shapes: wind }
      ]
    },
    steps: [
      { icon: '🌬️', title: 'The energy of the wind', explode: 0,
        html: '<p>Wind is air that moves, and everything that moves has <b>energy</b>. For centuries windmills have used it to grind grain; today wind turbines turn it into <b>electricity</b>.</p><p class="tip">☀️ Wind exists thanks to the Sun, which heats the air differently in different places.</p>' },
      { icon: '✈️', title: 'Blades like aeroplane wings', focus: ['pale', 'mozzo', 'vento'], view: { rx: 0.1, ry: -1.2 },
        html: '<p>The <b>blades</b> are shaped like an aeroplane wing. The wind flowing over their surface creates a sideways push that makes them <b>turn</b>, just like the lift that makes an aeroplane fly.</p>' },
      { icon: '🐢', title: 'Slow but very strong', focus: ['mozzo', 'albero', 'navicella'], view: { rx: 0.25, ry: -0.5 }, zoom: 1.8,
        html: '<p>The rotor turns slowly, about 15 turns per minute, but with enormous force. The movement passes to the <b>slow shaft</b>, a big steel cylinder inside the <b>nacelle</b>.</p>' },
      { icon: '⚙️', title: 'The gearbox', focus: ['moltiplicatore', 'albero', 'freno'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.1,
        html: '<p>The <b>gears</b> of the gearbox work like the sprockets of a bicycle: the big wheel makes the small one spin very fast. From 15 turns you get to about <b>1500 turns per minute</b>.</p>' },
      { icon: '🧲', title: 'The generator makes the current', focus: ['generatore', 'moltiplicatore', 'freno'], view: { rx: 0.25, ry: -0.9 }, zoom: 2.1,
        html: '<p>In the <b>generator</b> magnets turn next to coils of copper wire: the movement creates an <b>electric current</b>. It is like a bicycle dynamo, but enormous!</p>' },
      { icon: '🧭', title: 'Always facing the wind', focus: ['anemometro', 'imbardata', 'navicella'], view: { rx: 0.4, ry: -0.6 }, zoom: 1.8,
        html: '<p>The <b>anemometer</b> measures the wind and the wind vane its direction. The <b>yaw</b> motors turn the whole nacelle to point the blades into the wind.</p>' },
      { icon: '🔌', title: 'From the turbine to the socket at home', focus: ['corrente', 'torre', 'trasformatore', 'fondazione'], view: { rx: 0.2, ry: -0.6 },
        html: '<p>The current goes down the cables in the <b>tower</b>, the <b>transformer</b> raises the voltage and the power grid carries it to our homes.</p><p class="tip">🌍 Wind energy is <b>renewable</b>: the wind never runs out and makes no smoke or CO₂.</p>' }
    ],
    facts: [
      { icon: '📏', title: 'Giants', html: 'The biggest turbines are more than <b>250 metres</b> tall (almost like the Eiffel Tower) and a single turn of the blades can power a home for two days.' },
      { icon: '🌊', title: 'In the middle of the sea', html: 'Many wind turbines are built out at sea (<b>offshore</b>), where the wind is stronger and steadier. In Italy too, off the coast of Taranto, there is an offshore wind farm.' },
      { icon: '🏛️', title: 'An ancient story', html: 'The first windmills were built in Persia more than 1000 years ago. Dutch windmills were also used to pump water out of the fields.' },
      { icon: '🔇', title: 'They stop by themselves', html: 'With little wind (less than 10 km/h) the blades do not turn; with wind that is too strong they turn "edge-on" and stop so they do not break.' },
      { icon: '♻️', title: 'Twenty years of work', html: 'A wind turbine works for about 20–25 years. In just a few months it already produces the energy that was needed to build it.' }
    ],
    quiz: [
      { type: 'mc', q: 'What kind of energy does a wind turbine transform?', options: ['The energy of the wind into electrical energy', 'Electrical energy into wind', 'Heat into light', 'Coal into electricity'], answer: 0, explain: 'The movement energy of the wind becomes electrical energy.' },
      { type: 'mc', q: 'What is the gearbox for?', options: ['To brake the blades', 'To make the generator turn much faster than the blades', 'To measure the wind', 'To cool the tower'], answer: 1, explain: 'With its gears it turns 15 turns per minute into about 1500.' },
      { type: 'tf', q: 'Wind energy is a renewable source.', answer: true, explain: 'The wind never runs out and the turbine makes no fumes.' },
      { type: 'mc', q: 'Which part produces the electric current?', options: ['The tower', 'The anemometer', 'The generator', 'The foundation'], answer: 2, explain: 'In the generator the spinning magnets create current in the copper coils.' },
      { type: 'mc', q: 'Why are the blades shaped like an aeroplane wing?', options: ['To look nicer', 'Because the wind flowing past creates a push that makes them turn', 'To weigh more', 'To make shade'], answer: 1, explain: 'Like the lift of a wing, the sideways push makes the rotor turn.' },
      { type: 'order', q: 'Put the path of the energy in order', items: ['Wind', 'Blades', 'Slow shaft', 'Gearbox', 'Generator', 'Power grid'], explain: 'The wind turns the blades; the rotation is sped up and turned into electricity.' }
    ]
  });
})();
