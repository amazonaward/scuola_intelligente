/* La bicicletta, vista di lato: avanti = +x, alto = +y, il lato della catena (destro) guarda verso +z.
   Rapporto: corona r = 0.2, pignone r = 0.1 → la ruota fa 2 giri per ogni giro di pedali. */
(function () {
  const TAU = Math.PI * 2, R = 0.68;
  const RA = [-1.02, R], FA = [1.02, R], BB = [-0.12, 0.55];
  const RR = 0.2, RC = 0.1, ZC = 0.17, GEAR = RR / RC;
  const PED = { type: 'spin', axis: 'z', dir: -1 };
  const WHEEL = { type: 'spin', axis: 'z', dir: -1, rate: GEAR };
  /* ruota dentata (piano XY) */
  const gear = (r, teeth, h) => { const p = []; for (let i = 0; i < teeth * 2; i++) { const a = (i / (teeth * 2)) * TAU, rr = i % 2 ? r - h : r; p.push([rr * Math.cos(a), rr * Math.sin(a)]); } return p; };
  const spokes = (z0) => Array.from({ length: 18 }, (_, k) => { const a = (k / 18) * TAU, side = k % 2 ? 1 : -1, b = a + side * 0.25;
    return { t: 'pipe', r: 0.006, n: 3, pts: [[0.04 * Math.cos(b), 0.04 * Math.sin(b), side * 0.05 + z0], [0.6 * Math.cos(a), 0.6 * Math.sin(a), 0]], color: '#cbd5e1' }; });
  const wheel = (extra) => [ { t: 'torus', R: 0.6, r: 0.025, n: 40, m: 6, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.045, h: 0.16, n: 14, rot: [90, 0, 0], color: '#6b7280' } ].concat(spokes(0), extra || []);
  /* catena: anello che passa sopra, intorno alla corona, sotto (dal cambio) e intorno al pignone */
  const arc = (c, r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a), ZC]; });
  const CHAIN = [[RA[0], RA[1] + RC + 0.01, ZC]].concat(arc(BB, RR + 0.01, 90, -90, 10), [[-0.98, 0.29, ZC]], arc([-0.99, 0.36], 0.07, -90, -200, 4), arc([-1.02, 0.5], 0.065, -20, 120, 4).slice(1), arc(RA, RC + 0.01, 200, 90, 6));
  CHAIN.push(CHAIN[0]);
  let LEN = 0; for (let i = 0; i < CHAIN.length - 1; i++) LEN += Math.hypot(CHAIN[i + 1][0] - CHAIN[i][0], CHAIN[i + 1][1] - CHAIN[i][1]);
  const NL = 56;
  const links = Array.from({ length: NL }, (_, k) => ({ t: 'box', s: [0.035, 0.022, 0.03], pos: CHAIN[0], color: k % 2 ? '#475569' : '#94a3b8',
    anim: { type: 'path', pts: CHAIN, wave: 'saw', rate: (TAU * (RR + 0.01)) / LEN, phase: k / NL } }));
  const tube = (a, b, r, c) => ({ t: 'pipe', r: r || 0.04, n: 12, pts: [a, b], color: c });

  LIBRARY({
    id: 'bicicletta',
    lang: 'de',
    title: 'Das Fahrrad',
    intro: 'Das Fahrrad ist eine der <b>effizientesten</b> Maschinen, die je erfunden wurden: Mit der Kraft deiner Beine bist du 3–4-mal schneller als zu Fuß. Pedale, Kette, Zahnräder, Hebel und Reibung: Entdecke, wie sie zusammenarbeiten!',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.35, height: 450,
      parts: [
        { id: 'telaio', name: 'Rahmen', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>Er ist das „Skelett“ des Fahrrads: Rohre, die zu zwei <b>Dreiecken</b> verbunden sind. Das Dreieck ist die steifste Form, die es gibt: Es verformt sich nicht einmal, wenn du darauf springst.</p>',
          more: '<p>Rahmen bestehen aus Stahl, Aluminium oder <b>Kohlefaser</b>. Ein Rennrahmen aus Carbon wiegt weniger als 1 kg, trägt aber das Gewicht eines Erwachsenen, der über holprige Straßen fährt: Das ist der Verdienst der Dreiecksform, die auch bei Brücken und Kränen verwendet wird.</p>',
          shapes: [ tube([BB[0], BB[1], 0], [0.79, 1.28, 0], 0.045), tube([-0.4, 1.47, 0], [0.73, 1.47, 0], 0.035), tube([BB[0], BB[1], 0], [-0.42, 1.56, 0], 0.038),
            tube([BB[0], BB[1], 0.05], [RA[0], RA[1], 0.07], 0.022), tube([BB[0], BB[1], -0.05], [RA[0], RA[1], -0.07], 0.022),
            tube([-0.4, 1.44, 0.03], [RA[0], RA[1], 0.07], 0.02), tube([-0.4, 1.44, -0.03], [RA[0], RA[1], -0.07], 0.02),
            { t: 'cyl', r: 0.055, h: 0.3, n: 16, pos: [0.76, 1.4, 0], rot: [0, 0, -15], color: '#b91c1c' }, { t: 'cyl', r: 0.06, h: 0.16, n: 16, pos: [BB[0], BB[1], 0], rot: [90, 0, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.05, 0.004], pos: [0.3, 0.95, 0.046], rot: [0, 0, 32], color: '#f8fafc', decal: 1 } ] },
        { id: 'sterzo', name: 'Gabel und Lenker', label: 'Lenker', color: '#374151', explode: [0.5, 0.3, 0],
          info: '<p>Der <b>Lenker</b> dreht die <b>Gabel</b> und das Vorderrad: So bestimmst du die Richtung. Er dient auch dazu, durch ständige kleine Korrekturen das Gleichgewicht zu halten.</p>',
          more: '<p>Die Gabel ist geneigt und nach vorne gebogen: Dadurch neigt das Rad dazu, sich von selbst „aufzurichten“. Deshalb bleibt ein Fahrrad, das mit Schwung rollt, sogar ohne Fahrer aufrecht!</p>',
          shapes: [ { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, 0.07], [0.88, 1.0, 0.07], [0.98, 0.78, 0.06], [FA[0], FA[1], 0.06]] },
            { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, -0.07], [0.88, 1.0, -0.07], [0.98, 0.78, -0.06], [FA[0], FA[1], -0.06]] },
            { t: 'box', s: [0.1, 0.05, 0.18], pos: [0.79, 1.27, 0], rot: [0, 0, -15] },
            tube([0.72, 1.55, 0], [0.68, 1.72, 0], 0.028), tube([0.68, 1.72, 0], [0.82, 1.74, 0], 0.025),
            { t: 'pipe', r: 0.022, n: 10, curve: true, pts: [[0.72, 1.76, -0.4], [0.82, 1.74, -0.25], [0.82, 1.74, 0], [0.82, 1.74, 0.25], [0.72, 1.76, 0.4]] },
            { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, 0.36], rot: [90, 0, 0], color: '#111827' }, { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, -0.36], rot: [90, 0, 0], color: '#111827' },
            { t: 'cyl', r: 0.03, h: 0.025, n: 14, pos: [0.82, 1.79, -0.18], color: '#facc15' } ] },
        { id: 'ruota-anteriore', name: 'Vorderrad', label: 'Vorderrad', color: '#9ca3af', pos: [FA[0], FA[1], 0], explode: [0.7, 0, 0], anim: WHEEL,
          info: '<p>Das Vorderrad dreht sich frei und folgt der Lenkung. Die dünnen <b>Speichen</b> halten die Felge rund, indem sie sie von der Mitte aus spannen, wie die Fäden eines Spinnennetzes.</p>',
          more: '<p>Die Speichen arbeiten <b>auf Zug</b>: Jede wird stark gespannt, und so trägt ein Rad, das weniger als 1 kg wiegt, 100 kg. In der Mitte hat die <b>Nabe</b> Kugellager, die die Reibung verringern.</p>',
          shapes: wheel() },
        { id: 'ruota-posteriore', name: 'Hinterrad (Antriebsrad)', label: 'Hinterrad', color: '#9ca3af', pos: [RA[0], RA[1], 0], explode: [-0.7, 0, 0], anim: WHEEL,
          info: '<p>Es ist das Rad, das <b>antreibt</b>: Die Kette dreht die Ritzel an seiner Nabe. Das Rad drückt die Straße nach hinten … und die Straße schiebt dich nach vorne!</p>',
          shapes: wheel() },
        { id: 'pneumatici', name: 'Reifen', color: '#1f2937', explode: [0, -0.35, 0],
          info: '<p>Die Reifen sind mit komprimierter <b>Luft</b> gefüllt: Sie wirken wie ein Polster auf Schlaglöchern. Das Profil „klammert“ sich dank der <b>Reibung</b> am Asphalt fest.</p>',
          more: '<p>Ein Rennreifen wird auf etwa 7 bar aufgepumpt: siebenmal so viel wie der Luftdruck um uns herum. Luftleere Reifen werden stärker plattgedrückt und haben mehr Reibung: Das Fahren wird viel anstrengender!</p>',
          shapes: [FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.645, r: 0.042, n: 36, m: 6, rot: [90, 0, 0], pos: [x, y, 0] })).concat([FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.615, r: 0.022, n: 36, m: 4, rot: [90, 0, 0], pos: [x, y, 0], color: '#78350f' }))) },
        { id: 'pedivelle', name: 'Pedale und Kurbeln', label: 'Pedale', color: '#6b7280', pos: [BB[0], BB[1], 0], explode: [0, -0.3, 0.7], anim: PED,
          info: '<p>Du trittst auf die <b>Pedale</b>: Die <b>Kurbeln</b> sind zwei Hebel, die den Druck der Beine in eine Drehung verwandeln, wie die Kurbel einer Kaffeemühle.</p>',
          more: '<p>Die beiden Kurbeln stehen um 180° versetzt: Wenn ein Bein nach unten drückt, geht das andere nach oben. Der Tritt ist am wirksamsten, wenn die Kurbel waagerecht steht: Dann ist der <b>Hebel</b> am längsten.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.5, n: 10, rot: [90, 0, 0], color: '#d1d5db' },
            { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, 0.17, 0.24] }, { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, -0.17, -0.24] },
            { t: 'group', pos: [0, 0.34, 0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] },
            { t: 'group', pos: [0, -0.34, -0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] } ] },
        { id: 'corona', name: 'Kettenblatt (großes Zahnrad)', label: 'Kettenblatt', color: '#94a3b8', pos: [BB[0], BB[1], ZC], explode: [0, -0.3, 0.45], anim: PED,
          info: '<p>Es ist das große Zahnrad an den Pedalen. Seine <b>Zähne</b> greifen in die Kette und ziehen sie.</p>',
          shapes: [ { t: 'extrude', d: 0.02, pts: gear(RR + 0.02, 32, 0.022) }, { t: 'cyl', r: 0.07, h: 0.04, n: 16, rot: [90, 0, 0], color: '#475569' } ]
            .concat([0, 72, 144, 216, 288].map((a) => ({ t: 'box', s: [0.15, 0.03, 0.03], pos: [0.08 * Math.cos(a * Math.PI / 180), 0.08 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#475569' }))) },
        { id: 'pignoni', name: 'Ritzel (Ritzelpaket)', label: 'Ritzel', color: '#cbd5e1', pos: [RA[0], RA[1], ZC], explode: [-0.4, -0.3, 0.45], anim: WHEEL,
          info: '<p>Das sind die kleinen Zahnräder am Hinterrad. Je <b>kleiner</b> das Ritzel, desto öfter dreht sich das Rad bei jeder Pedalumdrehung: Du bist schnell, musst aber mehr Kraft aufwenden.</p>',
          more: '<p>Hier hat das Kettenblatt 32 Zähne und das benutzte Ritzel 16: <b>32 : 16 = 2</b>, also dreht sich das Rad bei jeder Pedalumdrehung zweimal. Das ist die <b>Übersetzung</b>.</p>',
          shapes: [0.13, 0.115, 0.1, 0.085, 0.07].map((r, i) => ({ t: 'extrude', d: 0.012, pts: gear(r, Math.round(r * 160), 0.014), pos: [0, 0, -0.1 + i * 0.025 + 0.025] })) },
        { id: 'catena', name: 'Kette', color: '#475569', explode: [0, -0.3, 0.45],
          info: '<p>Die Kette besteht aus vielen <b>Gliedern</b>, die durch Bolzen verbunden sind. Sie überträgt die Bewegung vom Kettenblatt (vorne) auf die Ritzel (hinten), ohne zu rutschen.</p>',
          more: '<p>Eine Fahrradkette hat etwa 110 Glieder und arbeitet mit 98 % Wirkungsgrad: Fast die gesamte Kraft der Beine kommt am Rad an. Sie muss <b>sauber und geölt</b> gehalten werden, sonst raubt die Reibung Energie und nutzt sie ab.</p>',
          shapes: links },
        { id: 'cambio', name: 'Schaltung (Umwerfer)', label: 'Schaltung', color: '#1f2937', pos: [-1.0, 0.43, ZC + 0.02], explode: [-0.4, -0.6, 0.6],
          info: '<p>Die <b>Schaltung</b> setzt die Kette von einem Ritzel auf das andere. Die zwei kleinen Röllchen halten die Kette immer gespannt.</p>',
          more: '<p>Bergauf nimmst du ein <b>großes</b> Ritzel: Das Rad dreht sich bei jeder Pedalumdrehung weniger, aber du brauchst weniger Kraft. In der Ebene oder bergab ein kleines Ritzel: mehr Geschwindigkeit. Es ist dasselbe Prinzip wie bei den Gängen eines Autos.</p>',
          shapes: [ { t: 'box', s: [0.05, 0.2, 0.04], pos: [0.0, 0.1, 0], rot: [0, 0, -20] },
            { t: 'group', pos: [-0.02, 0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'group', pos: [0.01, -0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'box', s: [0.12, 0.2, 0.012], pos: [0, 0, 0.03], color: '#6b7280', alpha: 0.9 } ] },
        { id: 'freni', name: 'Bremsen', color: '#111827', explode: [0, 0.45, 0],
          info: '<p>Wenn du den Hebel ziehst, presst ein Stahlseil zwei <b>Gummiklötze</b> gegen die Felge. Das Reiben (die <b>Reibung</b>) bremst das Rad ab.</p>',
          more: '<p>Beim Bremsen wird die Bewegungsenergie zu <b>Wärme</b>: Nach einer langen Abfahrt sind die Felgen oder die Bremsscheiben heiß! Viele moderne Fahrräder haben <b>Scheibenbremsen</b>, die auch bei Nässe gut funktionieren.</p>',
          shapes: [ { t: 'box', s: [0.1, 0.05, 0.2], pos: [0.86, 1.3, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, 0.09], rot: [0, 0, -20], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, -0.09], rot: [0, 0, -20], color: '#f97316' },
            { t: 'box', s: [0.1, 0.05, 0.2], pos: [-0.62, 1.28, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, 0.1], rot: [0, 0, 30], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, -0.1], rot: [0, 0, 30], color: '#f97316' },
            { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, 0.3], rot: [0, 0, -15], color: '#9ca3af' }, { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, -0.3], rot: [0, 0, -15], color: '#9ca3af' },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, 0.3], [0.6, 1.7, 0.15], [0.7, 1.45, 0.05], [0.86, 1.33, 0]] },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, -0.3], [0.55, 1.6, -0.1], [0.2, 1.5, -0.04], [-0.3, 1.5, -0.04], [-0.6, 1.33, 0]] } ] },
        { id: 'sella', name: 'Sattel', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>Der <b>Sattel</b> trägt dein Gewicht. Er lässt sich nach oben und unten verstellen: Er ist richtig eingestellt, wenn das Bein bei unten stehendem Pedal fast gestreckt ist.</p>',
          shapes: [ tube([-0.42, 1.56, 0], [-0.47, 1.76, 0], 0.025, '#9ca3af'),
            { t: 'extrude', d: 0.12, pts: [[-0.2, 0], [0.0, 0.02], [0.18, 0.015], [0.24, 0.0], [0.2, -0.03], [0.0, -0.035], [-0.2, -0.04], [-0.25, -0.01]], pos: [-0.45, 1.8, 0], smooth: true },
            { t: 'sphere', r: 1, n: 8, m: 14, scale: [0.1, 0.035, 0.11], pos: [-0.6, 1.79, 0] } ] },
        { id: 'luci', name: 'Lichter und Reflektoren', label: 'Licht', color: '#f8fafc', explode: [0, 0.3, 0.3],
          info: '<p>Damit man gesehen wird: <b>weißes</b> Licht vorne und <b>rotes</b> hinten, dazu Reflektoren an den Pedalen und an den Speichen. Sie sind Pflicht, wenn es dunkel ist!</p>',
          more: '<p>Der <b>Reflektor</b> leuchtet nicht von selbst: Er besteht aus vielen kleinen Spiegelwinkeln, die das Licht der Scheinwerfer genau zu dem Auto zurückwerfen, das es ausgesandt hat.</p>',
          shapes: [ { t: 'cyl', r: 0.045, h: 0.1, n: 16, rot: [0, 0, 90], pos: [0.9, 1.66, 0], color: '#111827' }, { t: 'cyl', r: 0.04, h: 0.01, n: 16, rot: [0, 0, 90], pos: [0.955, 1.66, 0], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.6 } },
            { t: 'box', s: [0.03, 0.08, 0.06], pos: [-0.68, 1.66, 0], color: '#dc2626', anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 2 } } ] }
      ]
    },
    steps: [
      { icon: '🚲', title: 'Eine einfache und geniale Maschine', explode: 0,
        html: '<p>Das Fahrrad besteht aus wenigen Teilen: einem <b>Rahmen</b>, zwei <b>Rädern</b>, den <b>Pedalen</b> mit der <b>Kette</b>, der <b>Lenkung</b> und den <b>Bremsen</b>. Der Motor bist du!</p><p>Beim Radfahren brauchst du weniger Energie als beim Gehen, bist aber viel schneller.</p>' },
      { icon: '🦵', title: 'Pedale und Kurbeln: zwei Hebel', focus: ['pedivelle', 'corona'], explode: 0.3, view: { rx: 0.1, ry: -0.1 },
        html: '<p>Die <b>Kurbeln</b> sind Hebel: Wenn du aufs Pedal trittst, drehst du die Mittelachse. Ein Bein drückt nach unten, während das andere nach oben geht: Der Antrieb hört nie auf.</p><p class="tip">🔧 Der Tritt ist am stärksten, wenn die Kurbel waagerecht steht: Dann arbeitet der Hebel am besten.</p>' },
      { icon: '⛓️', title: 'Kettenblatt, Kette und Ritzel', focus: ['corona', 'catena', 'pignoni', 'pedivelle'], explode: 0, zoom: 1.2, view: { rx: 0.08, ry: -0.05 },
        html: '<p>Das <b>Kettenblatt</b> zieht die <b>Kette</b>, und die Kette dreht das <b>Ritzel</b> am Hinterrad. Das Kettenblatt hat 32 Zähne, das Ritzel 16: die Hälfte!</p><p>So macht <b>das Rad bei jeder Pedalumdrehung 2 Umdrehungen</b>. Schau hin: Das Pedal macht eine Umdrehung, während das Rad zwei macht.</p>' },
      { icon: '⚙️', title: 'Die Schaltung: bergauf oder Ebene?', focus: ['cambio', 'pignoni', 'catena'], explode: 0.2, view: { rx: 0.2, ry: -0.75 },
        html: '<p>Die <b>Schaltung</b> setzt die Kette auf unterschiedliche Ritzel. <b>Großes</b> Ritzel: Du trittst leicht, bist aber langsam (ideal bergauf). <b>Kleines</b> Ritzel: Du bist schnell, brauchst aber mehr Kraft.</p><p class="tip">🏔️ Es ist ein Kompromiss zwischen Kraft und Geschwindigkeit: Die Gänge beim Auto funktionieren genauso.</p>' },
      { icon: '🛞', title: 'Räder, Speichen und Reifen', focus: ['ruota-anteriore', 'ruota-posteriore', 'pneumatici'], explode: 0.2, view: { rx: 0.15, ry: -0.4 },
        html: '<p>Die <b>Speichen</b> ziehen die Felge zur Mitte und halten sie vollkommen rund. Die mit Luft gefüllten <b>Reifen</b> schlucken Stöße und „klammern“ sich dank der Reibung an der Straße fest.</p><p>Das Hinterrad drückt die Straße nach hinten … und die Straße schiebt dich nach vorne!</p>' },
      { icon: '🤸', title: 'Lenken und Gleichgewicht', focus: ['sterzo', 'ruota-anteriore', 'telaio'], explode: 0, view: { rx: 0.3, ry: -0.9 },
        html: '<p>Um im Gleichgewicht zu bleiben, machst du ständig kleine Korrekturen mit dem <b>Lenker</b>: Wenn du nach rechts kippst, lenkst du ein wenig nach rechts, und das Fahrrad kommt wieder unter dich.</p><p>Die sich drehenden Räder und die geneigte Gabel helfen dabei: Deshalb ist es im Stehen sehr schwer, das Gleichgewicht zu halten, während der Fahrt aber leicht.</p>' },
      { icon: '🛑', title: 'Bremsen: die Reibung, die rettet', focus: ['freni', 'ruota-anteriore', 'ruota-posteriore'], explode: 0, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Du ziehst den Hebel, das Seil presst die <b>Klötze</b> gegen die Felge, und die <b>Reibung</b> bremst das Rad. Die Bewegungsenergie wird zu Wärme.</p><p class="tip">⚠️ Benutze immer beide Bremsen zusammen und dosiere sie sanft: Nur die Vorderbremse mit voller Kraft kann dazu führen, dass du dich nach vorne überschlägst!</p>' }
    ],
    facts: [
      { icon: '🪵', title: 'Ohne Pedale', html: 'Das erste „Fahrrad“ (1817, Karl Drais) war aus Holz und hatte keine Pedale: Man stieß sich mit den Füßen am Boden ab, wie bei den Laufrädern kleiner Kinder.' },
      { icon: '🎡', title: 'Das Riesenrad', html: 'Bevor die Kette erfunden wurde, waren die Pedale am Vorderrad befestigt: Um schnell zu sein, baute man Fahrräder mit riesigen Rädern, bis zu 1,5 Meter hoch (die <b>Hochräder</b>).' },
      { icon: '🏆', title: 'Die Italien-Rundfahrt', html: 'Die Italien-Rundfahrt (Giro d\'Italia) wird seit 1909 gefahren. Die Fahrer legen in drei Wochen etwa <b>3500 km</b> zurück und überqueren sogar Alpenpässe über 2000 Meter.' },
      { icon: '🌍', title: 'Mehr Fahrräder als Autos', html: 'Auf der Welt gibt es etwa <b>eine Milliarde</b> Fahrräder, mehr als doppelt so viele wie Autos. Sie verschmutzen die Luft nicht und sind gesund!' }
    ],
    quiz: [
      { type: 'mc', q: 'Was verbindet das Kettenblatt mit dem Ritzel am Hinterrad?', options: ['Das Bremsseil', 'Die Kette', 'Die Gabel', 'Die Speiche'], answer: 1, explain: 'Die Kette überträgt die Bewegung vom Kettenblatt (Pedale) auf das Ritzel (Hinterrad).' },
      { type: 'num', q: 'Das Kettenblatt hat 32 Zähne und das Ritzel 16. Wie oft dreht sich das Rad bei jeder Pedalumdrehung?', answer: 2, explain: '32 : 16 = 2. Das ist die Übersetzung.' },
      { type: 'mc', q: 'Bergauf ist es günstig, ein ... Ritzel zu benutzen.', options: ['kleines', 'großes', 'egal, es ändert sich nichts', 'keins, man rollt bergab'], answer: 1, explain: 'Mit dem großen Ritzel braucht man weniger Kraft zum Treten, auch wenn man langsamer ist.' },
      { type: 'mc', q: 'Warum besteht der Rahmen aus Dreiecken?', options: ['Weil es schöner aussieht', 'Weil das Dreieck eine steife Form ist, die sich nicht verformt', 'Damit er schwerer ist', 'Um Platz für die Kette zu schaffen'], answer: 1, explain: 'Das Dreieck ist unverformbar: Deshalb verwendet man es bei Rahmen, Brücken und Kränen.' },
      { type: 'tf', q: 'Die Bremsen verlangsamen das Fahrrad dank der Reibung, die Bewegung in Wärme verwandelt.', answer: true, explain: 'Die Klötze reiben an der Felge: Die Bewegungsenergie wird zu Wärme.' },
      { type: 'mc', q: 'Die Kurbeln funktionieren wie ...', options: ['Hebel', 'Magnete', 'Federn', 'Riemenscheiben'], answer: 0, explain: 'Sie sind Hebel, die den Druck der Beine in eine Drehung verwandeln.' }
    ]
  });
})();
