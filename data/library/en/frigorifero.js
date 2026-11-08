/* Il frigorifero (combinato: freezer in alto, frigo in basso). Davanti = +z, alto = +y, le porte sono aperte.
   Circuito del refrigerante: compressore → condensatore (dietro) → capillare → evaporatore (nel freezer) → compressore. */
(function () {
  const ZC = -0.66; // piano del condensatore (dietro al mobile)
  const serp = (x0, x1, ys, z) => { const out = []; ys.forEach((y, i) => { const a = i % 2 ? x1 : x0, b = i % 2 ? x0 : x1; out.push([a, y, z], [b, y, z]); }); return out; };
  const CROWS = Array.from({ length: 9 }, (_, i) => 2.75 - i * 0.25);
  const COND = serp(0.45, -0.45, CROWS, ZC);
  const EROWS = [2.25, 2.42, 2.59, 2.76];
  const EVAP = serp(-0.42, 0.42, EROWS, -0.44);
  const HOT = [[0.2, 0.46, -0.8], [0.5, 0.62, -0.8], [0.55, 2.75, ZC], ...COND, [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.48, 2.25, -0.5]];
  const COLD = [[-0.48, 2.25, -0.5], ...EVAP, [0.5, 2.76, -0.5], [0.5, 2.76, -0.76], [0.4, 0.75, -0.76], [0.28, 0.46, -0.8]];
  const drops = (path, color, n, rate) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate, phase: k / n } }));
  const glass = (y) => ({ t: 'box', s: [1.04, 0.025, 0.9], pos: [0, y, 0.0], div: 2 });
  /* porta: parte dal cardine (x = 0) e si estende verso +x; aperta ruotando intorno a y */
  const DOOR_OPEN = -112;

  LIBRARY({
    lang: 'en',
    id: 'frigorifero',
    title: 'The refrigerator',
    intro: 'A fridge does not "make" the cold: it <b>carries away the heat</b> from the food and throws it out, at the back. It does this with a special liquid that travels in a closed circuit, evaporating and condensing non-stop. Follow its journey!',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.35, height: 490,
      parts: [
        { id: 'mobile', name: 'Cabinet (body)', label: 'Cabinet', color: '#f1f5f9', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>This is the big "box" of the fridge: on the outside it is painted sheet metal, on the inside it is white plastic that is easy to clean.</p>',
          shapes: [ { t: 'box', s: [1.2, 3.0, 0.05], pos: [0, 1.5, -0.525] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [-0.57, 1.5, 0] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [0.57, 1.5, 0] },
            { t: 'box', s: [1.2, 0.06, 1.1], pos: [0, 2.97, 0] }, { t: 'box', s: [1.2, 0.12, 1.1], pos: [0, 0.06, 0] },
            { t: 'box', s: [1.08, 0.06, 1.0], pos: [0, 2.05, 0.03], color: '#e2e8f0', alpha: 0.7 },
            { t: 'box', s: [1.2, 0.08, 0.04], pos: [0, 0.04, 0.56], color: '#64748b', alpha: 0.8 } ] },
        { id: 'isolamento', name: 'Insulation (foam)', label: 'Insulation', color: '#fde68a', alpha: 0.16, explode: [0, 0, -0.35],
          info: '<p>Between the outer sheet metal and the inner plastic there is a layer of <b>foam</b> full of tiny air bubbles. Still air lets through very little heat: so the heat of the kitchen does not get in.</p>',
          more: '<p>It is <b>polyurethane</b> foam, 4–7 cm thick. It is the same principle as a duvet or a thermos: an <b>insulating</b> material slows the passage of heat, which always goes from the warmer body to the colder one.</p>',
          shapes: [ { t: 'box', s: [1.08, 2.8, 0.06], pos: [0, 1.52, -0.47] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [-0.515, 1.52, 0.0] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [0.515, 1.52, 0.0] } ] },
        { id: 'porta-frigo', name: 'Fridge door', label: 'Door', color: '#e5e7eb', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.35],
          info: '<p>The door is also full of insulating foam. On the inside there are <b>shelves</b> for bottles, eggs and butter.</p>',
          shapes: [ { t: 'box', s: [1.2, 1.9, 0.09], pos: [0.6, 0.95, 0.045] }, { t: 'box', s: [1.04, 1.74, 0.05], pos: [0.6, 0.95, -0.02], color: '#f8fafc' },
            { t: 'box', s: [0.06, 0.9, 0.05], pos: [1.1, 1.3, 0.12], color: '#94a3b8' },
            ...[0.35, 0.85, 1.35].map((y) => ({ t: 'group', pos: [0.6, y, -0.13], shapes: [ { t: 'box', s: [0.96, 0.03, 0.17] }, { t: 'box', s: [0.96, 0.14, 0.02], pos: [0, 0.07, -0.085], color: '#bae6fd', alpha: 0.6 } ] })),
            { t: 'cyl', r: 0.06, h: 0.42, n: 14, pos: [0.4, 0.58, -0.13], color: '#16a34a', alpha: 0.85 }, { t: 'cyl', r: 0.025, h: 0.12, n: 10, pos: [0.4, 0.85, -0.13], color: '#16a34a', alpha: 0.85 },
            { t: 'cyl', r: 0.065, h: 0.3, n: 14, pos: [0.65, 0.52, -0.13], color: '#f8fafc' }, { t: 'box', s: [0.18, 0.2, 0.09], pos: [0.85, 0.47, -0.13], color: '#fde047' } ] },
        { id: 'porta-freezer', name: 'Freezer door', label: 'Freezer door', color: '#e5e7eb', pos: [-0.6, 2.08, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0.2, 0.35],
          info: '<p>The <b>freezer</b> has its own door: inside it reaches <b>−18 °C</b>, enough to turn water into ice and keep food for months.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.9, 0.09], pos: [0.6, 0.45, 0.045] }, { t: 'box', s: [1.04, 0.76, 0.05], pos: [0.6, 0.45, -0.02], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.45, 0.05], pos: [1.1, 0.3, 0.12], color: '#94a3b8' } ] },
        { id: 'guarnizione', name: 'Magnetic seal', label: 'Seal', color: '#475569', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.6],
          info: '<p>The rubber edge around the door contains a <b>magnet</b> that keeps it firmly closed against the metal cabinet: so the cold air does not escape.</p>',
          more: '<p>Try this: close a sheet of paper in the door. If it slides out easily, the seal is worn and the fridge uses more energy. A fridge magnet sticks precisely because the sheet metal is <b>iron</b>.</p>',
          shapes: [ { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 0.06, -0.02] }, { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 1.84, -0.02] },
            { t: 'box', s: [0.04, 1.82, 0.04], pos: [0.06, 0.95, -0.02] }, { t: 'box', s: [0.04, 1.82, 0.04], pos: [1.14, 0.95, -0.02] } ] },
        { id: 'ripiani', name: 'Shelves and drawers', label: 'Shelves', color: '#bae6fd', alpha: 0.45, explode: [0, 0, 0.7],
          info: '<p>Glass shelves and drawers for fruit and vegetables. Lower down, near the vegetable drawer, the air is less cold; higher up it is colder.</p>',
          more: '<p>Cold air is <b>denser</b> and sinks, while warmer air rises: zones at different temperatures form. That is why meat and fish go on the coldest shelf and vegetables in the drawer.</p>',
          shapes: [ glass(0.55), glass(1.05), glass(1.5), { t: 'box', s: [0.98, 0.32, 0.8], pos: [0, 0.3, 0.02], color: '#a7f3d0' }, glass(2.45) ] },
        { id: 'cibi', name: 'Food', color: '#ef4444', explode: [0, 0, 1.1],
          info: '<p>Food keeps better in the cold because the <b>bacteria</b> and moulds that make it go bad grow very slowly when it is cold.</p>',
          more: '<p>In the fridge (about 4 °C) bacteria slow down; in the freezer (−18 °C) they almost stop, but they do not die: that is why thawed food should be eaten soon.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 10, m: 14, pos: [-0.25, 0.66, 0.05] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [-0.05, 0.65, 0.12], color: '#84cc16' },
            { t: 'cyl', r: 0.17, h: 0.12, n: 20, pos: [0.25, 1.13, 0.0], color: '#fde68a' }, { t: 'box', s: [0.3, 0.16, 0.2], pos: [-0.2, 1.15, -0.05], color: '#38bdf8' },
            { t: 'cyl', r: 0.07, h: 0.32, n: 14, pos: [0.3, 1.68, -0.15], color: '#f8fafc' }, { t: 'cyl', r: 0.07, h: 0.06, n: 14, pos: [0.3, 1.87, -0.15], color: '#2563eb' },
            { t: 'box', s: [0.36, 0.1, 0.24], pos: [-0.2, 2.53, 0.08], color: '#c4b5fd' }, { t: 'box', s: [0.28, 0.08, 0.2], pos: [0.2, 2.52, 0.1], color: '#e0f2fe' },
            { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.0, 0.42, 0.15], color: '#f97316' }, { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.14, 0.41, 0.1], color: '#ef4444' } ] },
        { id: 'compressore', name: 'Compressor', color: '#1f2937', pos: [0.2, 0.28, -0.8], explode: [0.4, -0.2, -0.8],
          info: '<p>It is the "heart" of the fridge, a pump with an electric motor. It <b>squeezes</b> the refrigerant gas: squeezed, the gas becomes hot and rushes toward the condenser.</p>',
          more: '<p>When you compress a gas, you give it energy and its temperature rises (you feel it too when you pump up a bicycle tyre: the pump gets warm). The hum you hear every now and then is the compressor switching on.</p>',
          anim: { type: 'move', dir: [1, 0, 0], amp: 0.006, wave: 'sin', rate: 9 },
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 20, scale: [0.26, 0.2, 0.2] }, { t: 'cyl', r: 0.24, h: 0.04, n: 24, pos: [0, -0.02, 0], color: '#111827' },
            { t: 'box', s: [0.6, 0.04, 0.4], pos: [0, -0.2, 0], color: '#475569' }, { t: 'box', s: [0.12, 0.1, 0.08], pos: [-0.2, 0.05, 0.16], color: '#0f172a' } ] },
        { id: 'condensatore', name: 'Condenser (grille at the back)', label: 'Condenser', color: '#334155', explode: [0, 0, -0.9],
          info: '<p>It is the black grille at the back of the fridge. The hot gas runs through it, gives its heat to the kitchen air and cools until it becomes a <b>liquid</b>. Touch it (gently!): it is lukewarm.</p>',
          more: '<p>Turning from gas to liquid is called <b>condensation</b> and releases heat, like steam condensing on the lid of a pot. If the grille is full of dust or pressed against the wall, the heat escapes poorly and the fridge uses more energy.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, pts: COND }, ...Array.from({ length: 10 }, (_, k) => ({ t: 'cyl', r: 0.006, h: 2.1, n: 4, pos: [-0.42 + k * 0.093, 1.75, ZC - 0.03], color: '#475569' })) ] },
        { id: 'capillare', name: 'Capillary tube (expansion)', label: 'Capillary', color: '#b45309', explode: [-0.5, 0, -0.6],
          info: '<p>It is a very thin little tube, like a strand of copper spaghetti. The liquid squeezes through with difficulty and, coming out the other side, finds a lot of room: its pressure drops and it becomes <b>very cold</b>.</p>',
          more: '<p>When the pressure drops suddenly, the liquid starts to boil even at −25 °C. Something similar happens with a spray can: if you spray for a long time, it becomes cold.</p>',
          shapes: [ { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.45, 0.75, ZC], [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.5, 1.4, -0.55], [-0.48, 2.25, -0.5]] },
            { t: 'cyl', r: 0.035, h: 0.18, n: 12, pos: [-0.52, 0.55, ZC], color: '#78716c' } ] },
        { id: 'evaporatore', name: 'Evaporator', color: '#93c5fd', explode: [0, 0.45, 0.25],
          info: '<p>In the freezer, behind the wall, runs a frozen coil. Here the refrigerant <b>evaporates</b>: to do it, it needs heat and "steals" it from the air and the food. There is the cold!</p>',
          more: '<p>To evaporate a liquid takes energy (the <b>latent heat</b>). It is the same reason you feel cold when you get out of the water: sweat or water evaporating takes heat away from you. Often <b>frost</b> forms on the evaporator.</p>',
          shapes: [ { t: 'pipe', r: 0.026, n: 6, pts: EVAP }, { t: 'box', s: [0.95, 0.68, 0.015], pos: [0, 2.5, -0.465], color: '#dbeafe', alpha: 0.7 } ] },
        { id: 'refrigerante-caldo', name: 'Hot refrigerant (compressed)', label: 'Hot refrigerant', color: '#f97316', noLabel: true, explode: [0, 0, -0.9],
          info: '<p>Leaving the compressor, the refrigerant is a <b>hot, squeezed gas</b>. In the condenser it loses heat and becomes liquid.</p>',
          shapes: drops(HOT, '#f97316', 16, 0.35) },
        { id: 'refrigerante-freddo', name: 'Cold refrigerant', label: 'Cold refrigerant', color: '#2563eb', noLabel: true, explode: [0, 0.45, 0.25],
          info: '<p>After the capillary tube the refrigerant is <b>cold</b> and at low pressure. In the evaporator it absorbs the heat of the fridge and turns back into gas, ready for the compressor.</p>',
          more: '<p>Today refrigerants such as <b>isobutane</b> (R600a) are used, which do not damage the ozone layer. The old CFCs, on the other hand, did damage it and were banned in 1987 (Montreal Protocol).</p>',
          shapes: drops(COLD, '#2563eb', 10, 0.5) },
        { id: 'calore', name: 'Heat being released', label: 'Heat', color: '#ef4444', alpha: 0.7, explode: [0, 0, -1.1],
          info: '<p>The heat taken from the food plus that from the motor leaves the condenser and warms the kitchen a little. Warm air <b>rises</b>.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: [-0.35 + (k % 4) * 0.23, 0.9 + (k > 3 ? 0.9 : 0), -0.8],
            anim: [{ type: 'move', dir: [0, 1, 0], amp: 0.9, wave: 'saw', rate: 0.6, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: k / 8 }] })) },
        { id: 'aria-fredda', name: 'Cold air', label: 'Cold air', color: '#7dd3fc', alpha: 0.8, explode: [0, 0, 0.7],
          info: '<p>The air cooled by the evaporator is heavier and <b>sinks</b> onto the shelves, while the less cold air rises: the air circulates on its own inside the fridge.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: [-0.3 + (k % 4) * 0.2, 1.95, 0.25 - (k > 3 ? 0.25 : 0)],
            anim: [{ type: 'move', dir: [0, -1, 0], amp: 1.5, wave: 'saw', rate: 0.4, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: k / 8 }] })) },
        { id: 'termostato', name: 'Thermostat and light', label: 'Thermostat', color: '#f8fafc', pos: [0.38, 1.92, 0.25], explode: [0.4, 0, 0.6],
          info: '<p>The <b>thermostat</b> measures the temperature: when it is cold enough inside, it switches off the compressor; when it warms up, it switches it back on. Next to it is the light that comes on when you open the door.</p>',
          more: '<p>The right temperature for the fridge is about <b>4 °C</b>, and for the freezer <b>−18 °C</b>. Every time you leave the door open, warm and humid air gets in, and the compressor has to work harder.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.14, 0.2] }, { t: 'cyl', r: 0.045, h: 0.04, n: 16, rot: [90, 0, 0], pos: [0.06, 0, 0.11], color: '#475569' },
            { t: 'sphere', r: 0.05, n: 8, m: 12, pos: [-0.08, -0.08, 0.04], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.5 } } ] }
      ]
    },
    steps: [
      { icon: '🧊', title: 'Cold is not made: heat is carried away', explode: 0,
        html: '<p>The fridge is a <b>heat pump</b>: it takes heat from inside (from the food) and throws it out into the kitchen. Without heat, only cold is left inside.</p><p>The "truck" that carries the heat is a special liquid, the <b>refrigerant</b>, which circulates in a closed circuit of pipes.</p>' },
      { icon: '🔄', title: 'The refrigerant\'s journey', focus: ['compressore', 'condensatore', 'capillare', 'evaporatore', 'refrigerante-caldo', 'refrigerante-freddo'], explode: 0.3, view: { rx: 0.25, ry: -2.3 },
        html: '<p>The refrigerant always makes the same loop: <b>compressor → condenser → capillary tube → evaporator</b>, and back to the compressor.</p><p>In orange it is hot and compressed, in blue it is cold. It keeps changing state: from gas to liquid and from liquid to gas.</p>' },
      { icon: '💪', title: '1 · The compressor squeezes', focus: ['compressore', 'refrigerante-caldo'], explode: 0.2, view: { rx: 0.42, ry: -2.5 },
        html: '<p>The <b>compressor</b> is a pump with an electric motor. It squeezes the refrigerant gas: a compressed gas <b>heats up</b>, just like the bicycle pump when you inflate a tyre.</p>' },
      { icon: '♨️', title: '2 · The condenser releases the heat', focus: ['condensatore', 'refrigerante-caldo', 'calore'], explode: 0.25, view: { rx: 0.15, ry: -2.75 },
        html: '<p>The hot gas passes through the black grille at the back. It gives its heat to the kitchen air, cools and becomes a <b>liquid</b> (condensation).</p><p class="tip">🖐️ That is why the air behind the fridge is lukewarm: it is the heat taken from your food!</p>' },
      { icon: '🍝', title: '3 · The capillary tube: pressure down, temperature down', focus: ['capillare', 'refrigerante-caldo', 'refrigerante-freddo', 'evaporatore'], explode: 0.2, view: { rx: 0.2, ry: -2.2 },
        html: '<p>The liquid passes through a tube as thin as spaghetti. On the way out it finds a lot of room: the pressure drops and the refrigerant becomes <b>icy</b>, below −20 °C.</p>' },
      { icon: '❄️', title: '4 · The evaporator steals the heat', focus: ['evaporatore', 'refrigerante-freddo', 'aria-fredda', 'cibi', 'ripiani'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>In the <b>evaporator</b> the refrigerant boils and turns back into gas. To evaporate it needs heat, and it takes it from the air and the food: that is how the fridge cools.</p><p>Cold air is heavier and <b>sinks</b> onto the shelves.</p><p class="tip">💧 It happens to you too: when you get out of the pool, the water evaporating from your skin takes heat away and you feel cold.</p>' },
      { icon: '🧱', title: 'Keeping the cold inside', focus: ['isolamento', 'guarnizione', 'porta-frigo', 'porta-freezer', 'termostato'], explode: 0.45, view: { rx: 0.2, ry: -0.75 },
        html: '<p>Walls and doors are full of <b>insulating foam</b>, and the <b>magnetic seal</b> closes the door well. The <b>thermostat</b> switches the compressor on only when it is needed.</p><p class="tip">🚪 Do not keep the door open for long and do not put hot food in the fridge: the compressor would have to work much harder.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'Before the fridge: ice houses', html: 'In the past food was kept in <b>ice houses</b>: pits or rooms where snow collected in winter was stored, covered with straw to make it last until summer.' },
      { icon: '🔁', title: 'A fridge in reverse', html: 'The <b>air conditioner</b> and the <b>heat pump</b> that heat homes work like a fridge: they move heat from one place to another.' },
      { icon: '🧪', title: 'A gas that was no friend of the ozone', html: 'Old fridges used gases (CFCs) that damaged the ozone layer. Since 1987 they have been banned worldwide, and today the ozone layer is healing.' },
      { icon: '⚡', title: 'Always on', html: 'The fridge is the only appliance that is on day and night: that is why it is worth choosing a high energy class and keeping the grille at the back clean.' },
      { icon: '🧑‍🔬', title: 'Einstein and the fridge', html: 'Albert Einstein too, in 1930, patented together with Leó Szilárd a fridge with no moving parts!' }
    ],
    quiz: [
      { type: 'mc', q: 'What does a fridge really do?', options: ['It makes cold out of nothing', 'It carries heat from inside to outside', 'It uses bought ice', 'It blows in air from outside'], answer: 1, explain: 'The fridge is a heat pump: it removes heat from the inside and throws it out through the condenser.' },
      { type: 'order', q: 'Put the refrigerant\'s journey in order, starting from the compressor', items: ['Compressor', 'Condenser', 'Capillary tube', 'Evaporator'], explain: 'Compressed and hot, then liquid in the condenser, cold after the capillary tube, it evaporates in the freezer and returns to the compressor.' },
      { type: 'mc', q: 'Why is the air behind the fridge lukewarm?', options: ['There is a small heater', 'The condenser releases the heat taken from the food', 'The light gives off heat', 'It is a fault'], answer: 1, explain: 'In the condenser the refrigerant gives the kitchen air the heat taken from inside the fridge.' },
      { type: 'tf', q: 'When a liquid evaporates, it absorbs heat from what is around it.', answer: true, explain: 'Evaporating needs energy: that is why the evaporator cools the fridge (and sweat cools the skin).' },
      { type: 'mc', q: 'What is the foam in the walls for?', options: ['To make the fridge heavier', 'To insulate: the heat of the kitchen gets in very little', 'To scent the food', 'To give light'], answer: 1, explain: 'Foam full of tiny air bubbles is an excellent thermal insulator.' },
      { type: 'num', q: 'How many degrees below zero is a freezer usually kept at? (write only the number, without the minus sign)', answer: 18, explain: 'The freezer works at about −18 °C; the fridge at about 4 °C.' }
    ]
  });
})();
