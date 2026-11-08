/* La lavatrice a carica frontale. Davanti = +z, alto = +y; il cestello gira intorno all'asse z (centro a y = 0.82).
   Un programma (cycle 1): 0–0.12 carico acqua, 0.12–0.5 lavaggio, 0.5–0.62 scarico, 0.62–1 centrifuga. */
(function () {
  const CY = 0.82, TAU = Math.PI * 2;
  const circle = (r, n, cx, cy, a0) => Array.from({ length: n }, (_, i) => { const a = (a0 || 0) + (i / n) * TAU; return [(cx || 0) + r * Math.cos(a), (cy || 0) + r * Math.sin(a)]; });
  const ring = (o, i) => o.concat([o[0], i[0]], i.slice(1).reverse(), [i[0]]);
  /* pannello frontale con il foro dell'oblò */
  const front = ring([[0.6, 0], [0.6, 1.5], [-0.6, 1.5], [-0.6, 0]], circle(0.36, 32, 0, CY, -Math.PI / 2 + 0.001));
  /* acqua: segmento circolare sotto una corda (sezione della vasca) */
  const seg = (() => { const pts = [], r = 0.46, h = 0.3, a = Math.acos((r - h) / r); for (let i = 0; i <= 16; i++) { const t = -Math.PI / 2 - a + (i / 16) * 2 * a; pts.push([r * Math.cos(t), r * Math.sin(t) + r]); } return pts; })();
  const holes = [];
  for (let k = 0; k < 12; k++) for (let j = 0; j < 3; j++) { const a = (k / 12) * 360 + j * 10; holes.push({ t: 'box', s: [0.035, 0.008, 0.035], pos: [0.442 * Math.cos(a * Math.PI / 180), 0.442 * Math.sin(a * Math.PI / 180), -0.24 + j * 0.24], rot: [0, 0, a - 90], color: '#475569' }); }
  const paddle = (a) => ({ t: 'group', rot: [0, 0, a], shapes: [{ t: 'extrude', d: 0.62, pts: [[-0.06, 0.44], [0.06, 0.44], [0.02, 0.35], [-0.02, 0.35]], color: '#cbd5e1' }] });
  const cloth = (c, x, y, sx) => ({ t: 'sphere', r: 1, n: 8, m: 12, pos: [x, y, 0], scale: sx, color: c });
  const spring = (x) => ({ t: 'pipe', r: 0.012, n: 5, caps: false, pts: Array.from({ length: 34 }, (_, i) => [x + 0.04 * Math.cos(i * 0.9), 1.42 - i * 0.008, 0.04 * Math.sin(i * 0.9)]) });
  const W = (from, to) => ({ type: 'blink', fade: true, wave: 'window', from, to, ramp: 0.15 });
  const IN = [[0.4, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.32, 1.52, 0.42], [-0.32, 1.32, 0.42], [-0.15, 1.25, 0.3], [0, 0.95, 0.2], [0, 0.5, 0.1]];
  const OUT = [[0, 0.38, 0.1], [-0.2, 0.22, 0.25], [-0.35, 0.15, 0.36], [-0.45, 0.2, 0.0], [-0.45, 0.5, -0.5], [-0.45, 0.9, -0.72]];
  const drops = (P, n, rate, win, color) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.032, n: 5, m: 8, pos: P[0], color: color || '#38bdf8', anim: [{ type: 'path', pts: P, wave: 'saw', rate, phase: k / n }, W(win[0], win[1])] }));

  LIBRARY({
    lang: 'en',
    id: 'lavatrice',
    title: 'The washing machine',
    intro: 'The washing machine cleans clothes with <b>water, detergent, heat and movement</b>. An electric motor turns the drum: slowly to slosh the laundry around in the water, very fast to spin it dry. Watch a complete programme!',
    model: {
      rx: 0.22, ry: -0.6, speed: 0.13, height: 470,
      phases: [
        { from: 0, to: 0.12, label: '1 · Filling with water', color: '#0284c7' },
        { from: 0.12, to: 0.5, label: '2 · Washing', color: '#16a34a' },
        { from: 0.5, to: 0.62, label: '3 · Draining', color: '#6b7280' },
        { from: 0.62, to: 1, label: '4 · Spin-drying', color: '#ea580c' }
      ],
      parts: [
        { id: 'mobile', name: 'Cabinet', color: '#f8fafc', alpha: 0.26, explode: [0, 0, 0],
          info: '<p>It is the white sheet-metal box that holds everything. Underneath it has four adjustable feet: the washing machine must stand <b>perfectly level</b>, otherwise it "walks" during the spin!</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: front, pos: [0, 0, 0.6] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [-0.6, 0.85, 0] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [0.6, 0.85, 0] },
            { t: 'box', s: [1.2, 1.7, 0.03], pos: [0, 0.85, -0.6] }, { t: 'box', s: [1.24, 0.04, 1.24], pos: [0, 1.72, 0], color: '#e2e8f0' },
            ...[[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]].map(([x, z]) => ({ t: 'cyl', r: 0.05, h: 0.06, n: 12, pos: [x, -0.03, z], color: '#334155', alpha: 1 })) ] },
        { id: 'pannello', name: 'Control panel', label: 'Controls', color: '#e2e8f0', pos: [0, 1.61, 0.6], explode: [0, 0.35, 0.4],
          info: '<p>Here you choose the <b>programme</b>: temperature, spin speed, duration. Behind it there is an electronic board that controls all the parts at the right moment.</p>',
          more: '<p>The board is a small computer (microcontroller) that follows the programme step by step: it opens the solenoid valve, measures the water level with a <b>pressure switch</b>, switches on the heater until the right temperature is reached and adjusts the motor speed.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.22, 0.05] }, { t: 'cyl', r: 0.08, h: 0.05, n: 24, rot: [90, 0, 0], pos: [0.2, 0, 0.04], color: '#94a3b8' },
            { t: 'box', s: [0.02, 0.06, 0.01], pos: [0.2, 0.04, 0.07], color: '#1f2937', decal: 1 },
            { t: 'box', s: [0.26, 0.1, 0.01], pos: [0.45, 0, 0.03], color: '#0f172a', decal: 1 },
            { t: 'box', s: [0.12, 0.04, 0.01], pos: [0.45, 0, 0.036], color: '#22c55e', decal: 2, anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'cassetto', name: 'Detergent drawer', label: 'Detergent', color: '#f1f5f9', pos: [-0.32, 1.5, 0.45], explode: [0, 0.2, 0.75],
          info: '<p>Here you put the <b>detergent</b> and the fabric softener. The water that flows in passes through the drawer and carries them away, into the tub.</p>',
          more: '<p>Detergent contains <b>surfactants</b>: molecules with a "head" that loves water and a "tail" that loves grease. The tails cling to greasy dirt and the heads drag it away into the water.</p>',
          shapes: [ { t: 'box', s: [0.4, 0.14, 0.4] }, { t: 'box', s: [0.42, 0.16, 0.03], pos: [0, 0, 0.21], color: '#e2e8f0' }, { t: 'box', s: [0.12, 0.08, 0.3], pos: [-0.1, 0.05, 0], color: '#60a5fa' } ] },
        { id: 'elettrovalvola', name: 'Solenoid valve and inlet hose', label: 'Solenoid valve', color: '#64748b', explode: [0.3, 0.4, -0.4],
          info: '<p>It is a tap controlled by electricity: when the board tells it to, it opens and lets water in from the hose connected to the household tap.</p>',
          more: '<p>Inside there is a small <b>electromagnet</b>: when current passes through it, it pulls up a small iron plunger and the water can flow. Without current, a spring closes it again.</p>',
          shapes: [ { t: 'box', s: [0.14, 0.12, 0.12], pos: [0.4, 1.58, -0.5], color: '#1f2937' }, { t: 'cyl', r: 0.03, h: 0.25, n: 10, pos: [0.4, 1.58, -0.68], rot: [90, 0, 0], color: '#94a3b8' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.4, 1.58, -0.8], [0.4, 1.58, -0.95], [0.55, 1.3, -1.0], [0.6, 0.9, -1.0]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.33, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.3, 1.58, 0.3]], color: '#cbd5e1' } ] },
        { id: 'vasca', name: 'Tub', color: '#94a3b8', alpha: 0.3, pos: [0, CY, 0], explode: [0, 0, -0.55],
          info: '<p>It is the large fixed container that holds the water. The drum turns inside it. At the front it has a rubber seal (the bellows) that closes against the door glass.</p>',
          shapes: [ { t: 'tube', r: 0.5, ri: 0.47, h: 0.9, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.5, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.45] },
            { t: 'tube', r: 0.5, ri: 0.36, h: 0.12, n: 36, rot: [90, 0, 0], pos: [0, 0, 0.48], color: '#334155', alpha: 0.7 } ] },
        { id: 'cestello', name: 'Drum', color: '#d1d5db', pos: [0, CY, 0], explode: [0, 0, 0.9], anim: { type: 'spin', axis: 'z', rate: 3 },
          info: '<p>It is the perforated steel "barrel" where you put the laundry. As it turns, it lifts the clothes with its <b>paddles</b> and lets them fall into the water: by slapping and tumbling, the dirt comes loose.</p>',
          more: '<p>The holes let water and detergent through. During the spin the drum reaches <b>1,000–1,400 revolutions per minute</b>: the laundry is pressed against the wall and the water shoots out through the holes, just like when you spin a wet umbrella.</p>',
          shapes: [ { t: 'tube', r: 0.45, ri: 0.43, h: 0.72, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.45, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.36], color: '#9ca3af' },
            { t: 'torus', R: 0.42, r: 0.025, n: 36, m: 6, rot: [90, 0, 0], pos: [0, 0, 0.36] } ].concat(holes, [0, 120, 240].map(paddle)) },
        { id: 'panni', name: 'Laundry', color: '#f472b6', explode: [0, 0, 0.9],
          info: '<p>During the <b>wash</b> the laundry is lifted and dropped back into the water; during the <b>spin</b> it stays pressed against the wall of the drum, which turns very fast.</p>',
          shapes: [ { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 3 }, W(0.04, 0.58)], shapes: [
              cloth('#f472b6', -0.2, -0.25, [0.16, 0.1, 0.22]), cloth('#60a5fa', 0.15, -0.28, [0.17, 0.09, 0.2]), cloth('#facc15', 0.25, 0.0, [0.1, 0.15, 0.2]), cloth('#4ade80', -0.05, -0.12, [0.14, 0.1, 0.18]) ] },
            { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 18 }, W(0.62, 1)], shapes: [
              cloth('#f472b6', 0, -0.37, [0.22, 0.06, 0.22]), cloth('#60a5fa', 0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#facc15', -0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#4ade80', 0, 0.37, [0.2, 0.06, 0.2]) ] } ] },
        { id: 'acqua', name: 'Water and detergent', label: 'Water', color: '#38bdf8', alpha: 0.55, pos: [0, CY - 0.46, 0], explode: [0, 0, -0.55],
          info: '<p>The water dissolves the detergent and carries away the dirt. Modern washing machines use very little water: about <b>40–50 litres</b> for a whole wash.</p>',
          shapes: [ { t: 'group', anim: { type: 'scale', axis: 'y', from: 0.03, to: 1, wave: 'window', win: [0, 0.62], ramp: 0.2 }, shapes: [ { t: 'extrude', d: 0.86, pts: seg } ] },
            ...drops(IN.map(([x, y, z]) => [x, y - CY + 0.46, z]), 8, 3, [0, 0.13]), ...drops(OUT.map(([x, y, z]) => [x, y - CY + 0.46, z]), 7, 3, [0.5, 0.63], '#64748b') ] },
        { id: 'resistenza', name: 'Heating element (heats the water)', label: 'Heater', color: '#9ca3af', pos: [0, CY - 0.4, 0], explode: [0, -0.35, -0.55],
          info: '<p>It is a metal tube at the bottom of the tub. When current passes through it, it <b>heats up</b>, like the plate of a cooker, and brings the water to the chosen temperature (30, 40, 60 °C…).</p>',
          more: '<p>It is the <b>Joule effect</b>: a current passing through a wire that "resists" it heats the wire. Heating the water is what uses the most energy: washing at 30 °C instead of 60 °C saves more than half the electricity.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[-0.12, 0, 0.35], [-0.12, 0, -0.3], [0, 0, -0.38], [0.12, 0, -0.3], [0.12, 0, 0.35]],
            anim: { type: 'blink', color: '#ef4444', wave: 'window', from: 0.15, to: 0.45, ramp: 0.25 } } ] },
        { id: 'motore', name: 'Electric motor', label: 'Motor', color: '#b45309', pos: [0.28, 0.2, -0.3], explode: [0.5, -0.35, 0],
          info: '<p>It is the motor that turns the drum. It works with magnets and copper coils: the current makes it rotate, slowly for washing and very fast for spinning.</p>',
          more: '<p>Modern washing machines often have an <b>"inverter"</b> motor with no brushes, controlled by electronics: it is quiet, uses less energy and can be connected directly to the drum, without a belt (<i>direct drive</i>).</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.36, n: 24, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'tube', r: 0.135, ri: 0.1, h: 0.2, n: 24, rot: [90, 0, 0], color: '#b45309' },
            { t: 'group', pos: [0, 0, -0.25], anim: { type: 'spin', axis: 'z', rate: 3 * 0.42 / 0.06 / 4 }, shapes: [ { t: 'cyl', r: 0.06, h: 0.06, n: 16, rot: [90, 0, 0], color: '#475569' }, { t: 'box', s: [0.1, 0.015, 0.065], color: '#94a3b8' } ] } ] },
        { id: 'cinghia', name: 'Pulley and belt', label: 'Belt', color: '#1f2937', explode: [0, 0, -0.75],
          info: '<p>The motor turns a <b>small wheel</b> which, with a rubber belt, turns the <b>large wheel</b> (pulley) attached to the drum.</p>',
          more: '<p>A small wheel that drives a large wheel: the large one turns more <b>slowly</b> but with more <b>force</b>. It is the same trick as the gears on a bicycle.</p>',
          shapes: [ { t: 'group', pos: [0, CY, -0.55], anim: { type: 'spin', axis: 'z', rate: 3 / 4 }, shapes: [
              { t: 'torus', R: 0.4, r: 0.03, n: 36, m: 6, rot: [90, 0, 0], color: '#6b7280' }, { t: 'cyl', r: 0.07, h: 0.08, n: 16, rot: [90, 0, 0], color: '#6b7280' },
              ...[0, 120, 240].map((a) => ({ t: 'box', s: [0.36, 0.05, 0.03], pos: [0.2 * Math.cos(a * Math.PI / 180), 0.2 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#6b7280' })) ] },
            { t: 'pipe', r: 0.018, n: 5, curve: true, pts: [[-0.05, CY - 0.43, -0.55], [0.18, 0.18, -0.55], [0.28, 0.13, -0.55], [0.35, 0.2, -0.55], [0.38, CY - 0.1, -0.55], [0.3, CY + 0.3, -0.55], [0, CY + 0.44, -0.55], [-0.3, CY + 0.3, -0.55], [-0.43, CY, -0.55], [-0.3, CY - 0.3, -0.55], [-0.05, CY - 0.43, -0.55]] } ] },
        { id: 'sospensioni', name: 'Springs and shock absorbers', label: 'Shock absorbers', color: '#facc15', explode: [0, 0, 0.35],
          info: '<p>The tub is not rigidly attached to the cabinet: it hangs from two <b>springs</b> and rests on two <b>shock absorbers</b>. That way the vibrations of the spin do not shake the whole washing machine.</p>',
          more: '<p>Shock absorbers turn movement into heat through friction, damping the knocks: they are similar to those in cars.</p>',
          shapes: [ spring(-0.38), spring(0.38), { t: 'pipe', r: 0.035, n: 10, pts: [[-0.3, CY - 0.45, 0.1], [-0.45, 0.06, 0.1]], color: '#475569' }, { t: 'pipe', r: 0.022, n: 8, pts: [[-0.35, CY - 0.6, 0.1], [-0.3, CY - 0.45, 0.1]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.035, n: 10, pts: [[0.3, CY - 0.45, 0.1], [0.45, 0.06, 0.1]], color: '#475569' } ] },
        { id: 'contrappeso', name: 'Counterweight', color: '#a8a29e', pos: [0, 1.38, 0.38], explode: [0, 0.45, 0.2],
          info: '<p>It is a large block of <b>concrete</b> attached to the tub. It may seem strange, but the weight helps: it keeps the tub steady when the drum spins very fast with the laundry all on one side.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.14, 0.18] } ] },
        { id: 'pompa', name: 'Drain pump', label: 'Pump', color: '#1e293b', pos: [-0.35, 0.15, 0.36], explode: [-0.4, -0.3, 0.4],
          info: '<p>At the end of the wash the pump sucks the dirty water from the bottom of the tub and pushes it out, into the household drain. It has a <b>filter</b> that stops coins and buttons.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 0.16, n: 20, rot: [90, 0, 0] }, { t: 'group', anim: { type: 'spin', axis: 'z', rate: 20 }, shapes: [0, 60, 120].map((a) => ({ t: 'box', s: [0.12, 0.015, 0.03], pos: [0, 0, 0.09], rot: [0, 0, a], color: '#f59e0b' })) },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.05, 0.05, -0.05], [0.25, 0.23, -0.26]], color: '#475569' },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[-0.08, 0, 0], [-0.1, 0.05, -0.36], [-0.1, 0.35, -0.86], [-0.1, 0.75, -1.08], [-0.1, 0.95, -1.1]], color: '#94a3b8' } ] },
        { id: 'oblo', name: 'Door (porthole)', label: 'Door', color: '#cbd5e1', pos: [0, CY, 0.66], explode: [-1.0, 0, 0.9],
          info: '<p>The round door with thick glass: it lets you see the laundry and closes the washing machine well. During the wash it <b>locks</b> by itself, so it cannot be opened with water inside.</p>',
          shapes: [ { t: 'torus', R: 0.37, r: 0.06, n: 36, m: 8, rot: [90, 0, 0] }, { t: 'sphere', r: 0.34, n: 8, m: 28, hemi: true, rot: [-90, 0, 0], scale: [1, 0.35, 1], pos: [0, 0, -0.02], color: '#bae6fd', alpha: 0.3 },
            { t: 'box', s: [0.1, 0.2, 0.06], pos: [-0.42, 0, 0], color: '#94a3b8' }, { t: 'box', s: [0.06, 0.16, 0.08], pos: [0.42, 0, 0.02], color: '#64748b' } ] }
      ]
    },
    steps: [
      { icon: '🧺', title: 'A machine that beats the laundry clean', explode: 0,
        html: '<p>To wash, four things are needed: <b>water</b>, <b>detergent</b>, <b>heat</b> and <b>movement</b>. Once people washed by hand, rubbing the clothes on the washboard; the washing machine does it for us.</p><p>The heart is the perforated <b>drum</b> that turns inside the <b>tub</b>, moved by an <b>electric motor</b>.</p>' },
      { icon: '🚰', title: '1 · Water comes in', loop: [0, 0.14], focus: ['elettrovalvola', 'cassetto', 'acqua', 'vasca', 'pannello'], explode: 0.2, view: { rx: 0.35, ry: -0.9 },
        html: '<p>The control board opens the <b>solenoid valve</b>: water from the household tap comes in, passes through the <b>drawer</b> and carries the detergent into the tub.</p><p>A pressure sensor (the pressure switch) "feels" when there is enough water and closes the valve.</p>' },
      { icon: '🔥', title: '2 · Heating the water', loop: [0.14, 0.45], focus: ['resistenza', 'acqua', 'vasca'], explode: 0.3, view: { rx: 0.1, ry: -0.3 },
        html: '<p>At the bottom of the tub there is the <b>heating element</b>: a tube that heats up when current passes through it, like the plate of a cooker. It heats the water to 30, 40 or 60 °C.</p><p class="tip">🌍 Heating the water is what uses the most energy: washing at 30 °C saves a lot of energy.</p>' },
      { icon: '🔄', title: '2 · Washing: up and down in the water', loop: [0.14, 0.5], focus: ['cestello', 'panni', 'acqua'], explode: 0, view: { rx: 0.1, ry: -0.15 },
        html: '<p>The drum turns slowly, now one way, now the other. The <b>paddles</b> lift the laundry and drop it back into the soapy water: by slapping and rubbing against each other, the dirt comes loose.</p>' },
      { icon: '⚙️', title: 'Motor, belt and pulley', focus: ['motore', 'cinghia', 'cestello'], explode: 0.45, view: { rx: 0.2, ry: -2.5 },
        html: '<p>The <b>motor</b> turns a small wheel; the <b>belt</b> drives the large <b>pulley</b> attached behind the drum. The large wheel turns more slowly but with more force.</p>' },
      { icon: '🚿', title: '3 · Draining the dirty water', loop: [0.48, 0.64], focus: ['pompa', 'acqua', 'vasca'], explode: 0.2, view: { rx: 0.25, ry: -1.1 },
        html: '<p>The <b>drain pump</b> sucks the dirty water from the bottom and pushes it out through the hose, into the household drain. Then clean water comes in for the <b>rinse</b>, which removes the detergent.</p>' },
      { icon: '🌀', title: '4 · Spin: wringing out by turning', loop: [0.64, 1], focus: ['cestello', 'panni', 'sospensioni', 'contrappeso'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>The drum spins very fast, up to <b>1,400 revolutions per minute</b>. The laundry is pressed against the wall and the water shoots out through the holes.</p><p><b>Springs</b>, <b>shock absorbers</b> and the heavy concrete <b>counterweight</b> stop the washing machine from jumping across the room!</p><p class="tip">☂️ Spin a wet umbrella: the drops fly off. It is the same thing!</p>' }
    ],
    facts: [
      { icon: '🪨', title: 'The concrete counterweight', html: 'Inside almost every washing machine there is a block of <b>concrete</b> weighing 20–25 kg: it helps keep the machine still during the spin.' },
      { icon: '🧼', title: 'Washing at 30 degrees', html: 'Thanks to modern detergents, many items wash well even at 30 °C, using less than half the energy of a 60 °C wash.' },
      { icon: '🕰️', title: 'Before the washing machine', html: 'Until the 1960s in Italy, many families washed by hand, at the village <b>washhouse</b> or in the river. The washing machine freed up an enormous amount of time, especially for women.' },
      { icon: '🐟', title: 'Microplastics', html: 'Synthetic fabrics (such as fleece) shed tiny plastic fibres with every wash, which can reach the sea. There are special filters and bags to catch them.' }
    ],
    quiz: [
      { type: 'order', q: 'Put the phases of a wash in order', items: ['Filling with water', 'Washing', 'Draining', 'Spin-drying'], explain: 'Water comes in with the detergent, the laundry is washed, the dirty water is drained and finally it is wrung out in the spin.' },
      { type: 'mc', q: 'Which part heats the water?', options: ['The motor', 'The heating element', 'The pump', 'The counterweight'], answer: 1, explain: 'The heating element warms up when current passes through it (Joule effect).' },
      { type: 'mc', q: 'Why does water come out of the laundry during the spin?', options: ['Because it evaporates', 'Because spinning very fast presses the laundry against the wall and the water flies out through the holes', 'Because the pump sucks it out of the laundry', 'Because the detergent dissolves it'], answer: 1, explain: 'When spinning fast, everything tends to move away from the centre: the water passes through the holes in the drum.' },
      { type: 'tf', q: 'The concrete counterweight helps make the washing machine more stable.', answer: true, explain: 'The weight keeps the tub steady and reduces vibrations during the spin.' },
      { type: 'mc', q: 'What does the drain pump do?', options: ['It lets clean water in', 'It takes the dirty water out', 'It turns the drum', 'It opens the door'], answer: 1, explain: 'It sucks the water from the bottom of the tub and pushes it into the household drain.' },
      { type: 'mc', q: 'What are the paddles inside the drum for?', options: ['Decoration', 'Lifting the laundry and letting it fall back into the water', 'Cutting threads', 'Heating'], answer: 1, explain: 'They lift the laundry which, falling back down and slapping, is washed better.' }
    ]
  });
})();
