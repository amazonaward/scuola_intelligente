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
    id: 'lavatrice',
    lang: 'de',
    title: 'Die Waschmaschine',
    intro: 'Die Waschmaschine wäscht die Kleidung mit <b>Wasser, Waschmittel, Wärme und Bewegung</b>. Ein Elektromotor dreht die Trommel: langsam, um die Wäsche im Wasser zu schlagen, ganz schnell, um sie auszuwringen. Schau dir ein ganzes Programm an!',
    model: {
      rx: 0.22, ry: -0.6, speed: 0.13, height: 470,
      phases: [
        { from: 0, to: 0.12, label: '1 · Wasser einlassen', color: '#0284c7' },
        { from: 0.12, to: 0.5, label: '2 · Waschen', color: '#16a34a' },
        { from: 0.5, to: 0.62, label: '3 · Abpumpen', color: '#6b7280' },
        { from: 0.62, to: 1, label: '4 · Schleudern', color: '#ea580c' }
      ],
      parts: [
        { id: 'mobile', name: 'Gehäuse', color: '#f8fafc', alpha: 0.26, explode: [0, 0, 0],
          info: '<p>Das ist der weiße Blechkasten, der alles enthält. Unten hat er vier verstellbare Füße: Die Waschmaschine muss <b>gerade stehen</b>, sonst „wandert“ sie beim Schleudern!</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: front, pos: [0, 0, 0.6] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [-0.6, 0.85, 0] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [0.6, 0.85, 0] },
            { t: 'box', s: [1.2, 1.7, 0.03], pos: [0, 0.85, -0.6] }, { t: 'box', s: [1.24, 0.04, 1.24], pos: [0, 1.72, 0], color: '#e2e8f0' },
            ...[[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]].map(([x, z]) => ({ t: 'cyl', r: 0.05, h: 0.06, n: 12, pos: [x, -0.03, z], color: '#334155', alpha: 1 })) ] },
        { id: 'pannello', name: 'Bedienfeld', label: 'Bedienfeld', color: '#e2e8f0', pos: [0, 1.61, 0.6], explode: [0, 0.35, 0.4],
          info: '<p>Hier wählst du das <b>Programm</b>: Temperatur, Schleuderdrehzahl, Dauer. Dahinter sitzt eine Elektronikplatine, die alle Teile im richtigen Moment steuert.</p>',
          more: '<p>Die Platine ist ein kleiner Computer (Mikrocontroller), der das Programm Schritt für Schritt abarbeitet: Er öffnet das Magnetventil, misst den Wasserstand mit einem <b>Druckschalter</b>, schaltet das Heizelement bis zur richtigen Temperatur ein und regelt die Drehzahl des Motors.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.22, 0.05] }, { t: 'cyl', r: 0.08, h: 0.05, n: 24, rot: [90, 0, 0], pos: [0.2, 0, 0.04], color: '#94a3b8' },
            { t: 'box', s: [0.02, 0.06, 0.01], pos: [0.2, 0.04, 0.07], color: '#1f2937', decal: 1 },
            { t: 'box', s: [0.26, 0.1, 0.01], pos: [0.45, 0, 0.03], color: '#0f172a', decal: 1 },
            { t: 'box', s: [0.12, 0.04, 0.01], pos: [0.45, 0, 0.036], color: '#22c55e', decal: 2, anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'cassetto', name: 'Waschmittelschublade', label: 'Waschmittel', color: '#f1f5f9', pos: [-0.32, 1.5, 0.45], explode: [0, 0.2, 0.75],
          info: '<p>Hier füllst du das <b>Waschmittel</b> und den Weichspüler ein. Das einströmende Wasser fließt durch die Schublade und nimmt sie mit in die Wanne.</p>',
          more: '<p>Das Waschmittel enthält <b>Tenside</b>: Moleküle mit einem „Kopf“, der Wasser mag, und einem „Schwanz“, der Fett mag. Die Schwänze haften am fettigen Schmutz und die Köpfe ziehen ihn ins Wasser.</p>',
          shapes: [ { t: 'box', s: [0.4, 0.14, 0.4] }, { t: 'box', s: [0.42, 0.16, 0.03], pos: [0, 0, 0.21], color: '#e2e8f0' }, { t: 'box', s: [0.12, 0.08, 0.3], pos: [-0.1, 0.05, 0], color: '#60a5fa' } ] },
        { id: 'elettrovalvola', name: 'Magnetventil und Zulaufschlauch', label: 'Magnetventil', color: '#64748b', explode: [0.3, 0.4, -0.4],
          info: '<p>Das ist ein Wasserhahn, der mit Strom gesteuert wird: Wenn die Platine es sagt, öffnet er sich und lässt Wasser aus dem Schlauch ein, der am Wasserhahn zu Hause angeschlossen ist.</p>',
          more: '<p>Im Inneren ist ein kleiner <b>Elektromagnet</b>: Wenn Strom fließt, zieht er einen kleinen Eisenstift hoch und das Wasser kann durch. Ohne Strom schließt eine Feder ihn wieder.</p>',
          shapes: [ { t: 'box', s: [0.14, 0.12, 0.12], pos: [0.4, 1.58, -0.5], color: '#1f2937' }, { t: 'cyl', r: 0.03, h: 0.25, n: 10, pos: [0.4, 1.58, -0.68], rot: [90, 0, 0], color: '#94a3b8' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.4, 1.58, -0.8], [0.4, 1.58, -0.95], [0.55, 1.3, -1.0], [0.6, 0.9, -1.0]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.33, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.3, 1.58, 0.3]], color: '#cbd5e1' } ] },
        { id: 'vasca', name: 'Wanne', color: '#94a3b8', alpha: 0.3, pos: [0, CY, 0], explode: [0, 0, -0.55],
          info: '<p>Das ist der große, feststehende Behälter, der das Wasser hält. Darin dreht sich die Trommel. Vorne hat er eine Gummidichtung (die Manschette), die gegen das Bullauge abdichtet.</p>',
          shapes: [ { t: 'tube', r: 0.5, ri: 0.47, h: 0.9, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.5, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.45] },
            { t: 'tube', r: 0.5, ri: 0.36, h: 0.12, n: 36, rot: [90, 0, 0], pos: [0, 0, 0.48], color: '#334155', alpha: 0.7 } ] },
        { id: 'cestello', name: 'Trommel', color: '#d1d5db', pos: [0, CY, 0], explode: [0, 0, 0.9], anim: { type: 'spin', axis: 'z', rate: 3 },
          info: '<p>Das ist das durchlöcherte Stahl-„Fass“, in das du die Wäsche gibst. Beim Drehen hebt sie die Wäsche mit ihren <b>Mitnehmern</b> hoch und lässt sie ins Wasser fallen: Durch das Aufschlagen löst sich der Schmutz.</p>',
          more: '<p>Die Löcher lassen Wasser und Waschmittel durch. Beim Schleudern erreicht die Trommel <b>1000–1400 Umdrehungen pro Minute</b>: Die Wäsche wird an die Wand gedrückt und das Wasser spritzt aus den Löchern, wie wenn du einen nassen Regenschirm drehst.</p>',
          shapes: [ { t: 'tube', r: 0.45, ri: 0.43, h: 0.72, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.45, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.36], color: '#9ca3af' },
            { t: 'torus', R: 0.42, r: 0.025, n: 36, m: 6, rot: [90, 0, 0], pos: [0, 0, 0.36] } ].concat(holes, [0, 120, 240].map(paddle)) },
        { id: 'panni', name: 'Wäsche', color: '#f472b6', explode: [0, 0, 0.9],
          info: '<p>Beim <b>Waschen</b> wird die Wäsche hochgehoben und ins Wasser zurückfallen gelassen; beim <b>Schleudern</b> bleibt sie an die Wand der blitzschnell drehenden Trommel gedrückt.</p>',
          shapes: [ { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 3 }, W(0.04, 0.58)], shapes: [
              cloth('#f472b6', -0.2, -0.25, [0.16, 0.1, 0.22]), cloth('#60a5fa', 0.15, -0.28, [0.17, 0.09, 0.2]), cloth('#facc15', 0.25, 0.0, [0.1, 0.15, 0.2]), cloth('#4ade80', -0.05, -0.12, [0.14, 0.1, 0.18]) ] },
            { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 18 }, W(0.62, 1)], shapes: [
              cloth('#f472b6', 0, -0.37, [0.22, 0.06, 0.22]), cloth('#60a5fa', 0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#facc15', -0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#4ade80', 0, 0.37, [0.2, 0.06, 0.2]) ] } ] },
        { id: 'acqua', name: 'Wasser und Waschmittel', label: 'Wasser', color: '#38bdf8', alpha: 0.55, pos: [0, CY - 0.46, 0], explode: [0, 0, -0.55],
          info: '<p>Das Wasser löst das Waschmittel auf und trägt den Schmutz weg. Moderne Waschmaschinen brauchen sehr wenig Wasser: etwa <b>40–50 Liter</b> für einen ganzen Waschgang.</p>',
          shapes: [ { t: 'group', anim: { type: 'scale', axis: 'y', from: 0.03, to: 1, wave: 'window', win: [0, 0.62], ramp: 0.2 }, shapes: [ { t: 'extrude', d: 0.86, pts: seg } ] },
            ...drops(IN.map(([x, y, z]) => [x, y - CY + 0.46, z]), 8, 3, [0, 0.13]), ...drops(OUT.map(([x, y, z]) => [x, y - CY + 0.46, z]), 7, 3, [0.5, 0.63], '#64748b') ] },
        { id: 'resistenza', name: 'Heizelement (erwärmt das Wasser)', label: 'Heizelement', color: '#9ca3af', pos: [0, CY - 0.4, 0], explode: [0, -0.35, -0.55],
          info: '<p>Das ist ein Metallrohr am Boden der Wanne. Wenn Strom hindurchfließt, wird es <b>heiß</b>, wie die Platte eines Herdes, und bringt das Wasser auf die gewählte Temperatur (30, 40, 60 °C …).</p>',
          more: '<p>Das ist der <b>Joulesche Effekt</b>: Ein Strom, der durch einen Draht mit „Widerstand“ fließt, erwärmt ihn. Das Wasser zu erwärmen verbraucht am meisten Energie: Bei 30 °C statt 60 °C zu waschen spart mehr als die Hälfte des Stroms.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[-0.12, 0, 0.35], [-0.12, 0, -0.3], [0, 0, -0.38], [0.12, 0, -0.3], [0.12, 0, 0.35]],
            anim: { type: 'blink', color: '#ef4444', wave: 'window', from: 0.15, to: 0.45, ramp: 0.25 } } ] },
        { id: 'motore', name: 'Elektromotor', label: 'Motor', color: '#b45309', pos: [0.28, 0.2, -0.3], explode: [0.5, -0.35, 0],
          info: '<p>Das ist der Motor, der die Trommel dreht. Er funktioniert mit Magneten und Kupferspulen: Der Strom bringt ihn zum Drehen, langsam zum Waschen und blitzschnell zum Schleudern.</p>',
          more: '<p>Moderne Waschmaschinen haben oft einen bürstenlosen <b>„Inverter“-Motor</b>, der von der Elektronik gesteuert wird: Er ist leise, verbraucht weniger und kann ohne Riemen direkt mit der Trommel verbunden werden (<i>Direktantrieb</i>).</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.36, n: 24, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'tube', r: 0.135, ri: 0.1, h: 0.2, n: 24, rot: [90, 0, 0], color: '#b45309' },
            { t: 'group', pos: [0, 0, -0.25], anim: { type: 'spin', axis: 'z', rate: 3 * 0.42 / 0.06 / 4 }, shapes: [ { t: 'cyl', r: 0.06, h: 0.06, n: 16, rot: [90, 0, 0], color: '#475569' }, { t: 'box', s: [0.1, 0.015, 0.065], color: '#94a3b8' } ] } ] },
        { id: 'cinghia', name: 'Riemenscheibe und Riemen', label: 'Riemen', color: '#1f2937', explode: [0, 0, -0.75],
          info: '<p>Der Motor dreht ein <b>kleines Rad</b>, das über einen Gummiriemen das <b>große Rad</b> (die Riemenscheibe) an der Trommel dreht.</p>',
          more: '<p>Ein kleines Rad, das ein großes Rad mitnimmt: Das große dreht sich <b>langsamer</b>, aber mit mehr <b>Kraft</b>. Das ist derselbe Trick wie bei den Gängen des Fahrrads.</p>',
          shapes: [ { t: 'group', pos: [0, CY, -0.55], anim: { type: 'spin', axis: 'z', rate: 3 / 4 }, shapes: [
              { t: 'torus', R: 0.4, r: 0.03, n: 36, m: 6, rot: [90, 0, 0], color: '#6b7280' }, { t: 'cyl', r: 0.07, h: 0.08, n: 16, rot: [90, 0, 0], color: '#6b7280' },
              ...[0, 120, 240].map((a) => ({ t: 'box', s: [0.36, 0.05, 0.03], pos: [0.2 * Math.cos(a * Math.PI / 180), 0.2 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#6b7280' })) ] },
            { t: 'pipe', r: 0.018, n: 5, curve: true, pts: [[-0.05, CY - 0.43, -0.55], [0.18, 0.18, -0.55], [0.28, 0.13, -0.55], [0.35, 0.2, -0.55], [0.38, CY - 0.1, -0.55], [0.3, CY + 0.3, -0.55], [0, CY + 0.44, -0.55], [-0.3, CY + 0.3, -0.55], [-0.43, CY, -0.55], [-0.3, CY - 0.3, -0.55], [-0.05, CY - 0.43, -0.55]] } ] },
        { id: 'sospensioni', name: 'Federn und Stoßdämpfer', label: 'Stoßdämpfer', color: '#facc15', explode: [0, 0, 0.35],
          info: '<p>Die Wanne ist nicht starr am Gehäuse befestigt: Sie hängt an zwei <b>Federn</b> und steht auf zwei <b>Stoßdämpfern</b>. So rütteln die Schwingungen vom Schleudern nicht die ganze Waschmaschine durch.</p>',
          more: '<p>Die Stoßdämpfer verwandeln die Bewegung durch Reibung in Wärme und dämpfen so die Stöße: Sie sind ähnlich wie die von Autos.</p>',
          shapes: [ spring(-0.38), spring(0.38), { t: 'pipe', r: 0.035, n: 10, pts: [[-0.3, CY - 0.45, 0.1], [-0.45, 0.06, 0.1]], color: '#475569' }, { t: 'pipe', r: 0.022, n: 8, pts: [[-0.35, CY - 0.6, 0.1], [-0.3, CY - 0.45, 0.1]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.035, n: 10, pts: [[0.3, CY - 0.45, 0.1], [0.45, 0.06, 0.1]], color: '#475569' } ] },
        { id: 'contrappeso', name: 'Gegengewicht', color: '#a8a29e', pos: [0, 1.38, 0.38], explode: [0, 0.45, 0.2],
          info: '<p>Das ist ein großer <b>Betonblock</b>, der an der Wanne befestigt ist. Es klingt seltsam, aber das Gewicht hilft: Es hält die Wanne ruhig, wenn sich die Trommel blitzschnell dreht und die Wäsche sich auf einer Seite sammelt.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.14, 0.18] } ] },
        { id: 'pompa', name: 'Ablaufpumpe', label: 'Pumpe', color: '#1e293b', pos: [-0.35, 0.15, 0.36], explode: [-0.4, -0.3, 0.4],
          info: '<p>Am Ende des Waschgangs saugt die Pumpe das schmutzige Wasser vom Boden der Wanne und drückt es hinaus in den Abfluss. Sie hat einen <b>Filter</b>, der Münzen und Knöpfe auffängt.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 0.16, n: 20, rot: [90, 0, 0] }, { t: 'group', anim: { type: 'spin', axis: 'z', rate: 20 }, shapes: [0, 60, 120].map((a) => ({ t: 'box', s: [0.12, 0.015, 0.03], pos: [0, 0, 0.09], rot: [0, 0, a], color: '#f59e0b' })) },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.05, 0.05, -0.05], [0.25, 0.23, -0.26]], color: '#475569' },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[-0.08, 0, 0], [-0.1, 0.05, -0.36], [-0.1, 0.35, -0.86], [-0.1, 0.75, -1.08], [-0.1, 0.95, -1.1]], color: '#94a3b8' } ] },
        { id: 'oblo', name: 'Bullauge (Tür)', label: 'Bullauge', color: '#cbd5e1', pos: [0, CY, 0.66], explode: [-1.0, 0, 0.9],
          info: '<p>Die runde Tür mit dem dicken Glas: Sie lässt die Wäsche sehen und verschließt die Waschmaschine gut. Während des Waschens <b>verriegelt</b> sie sich von allein, damit man sie nicht öffnen kann, wenn Wasser darin ist.</p>',
          shapes: [ { t: 'torus', R: 0.37, r: 0.06, n: 36, m: 8, rot: [90, 0, 0] }, { t: 'sphere', r: 0.34, n: 8, m: 28, hemi: true, rot: [-90, 0, 0], scale: [1, 0.35, 1], pos: [0, 0, -0.02], color: '#bae6fd', alpha: 0.3 },
            { t: 'box', s: [0.1, 0.2, 0.06], pos: [-0.42, 0, 0], color: '#94a3b8' }, { t: 'box', s: [0.06, 0.16, 0.08], pos: [0.42, 0, 0.02], color: '#64748b' } ] }
      ]
    },
    steps: [
      { icon: '🧺', title: 'Eine Maschine zum Schlagen der Wäsche', explode: 0,
        html: '<p>Zum Waschen braucht man vier Dinge: <b>Wasser</b>, <b>Waschmittel</b>, <b>Wärme</b> und <b>Bewegung</b>. Früher wusch man von Hand und rieb die Wäsche am Waschbrett; die Waschmaschine macht das für uns.</p><p>Das Herz ist die durchlöcherte <b>Trommel</b>, die sich in der <b>Wanne</b> dreht, angetrieben von einem <b>Elektromotor</b>.</p>' },
      { icon: '🚰', title: '1 · Das Wasser läuft ein', loop: [0, 0.14], focus: ['elettrovalvola', 'cassetto', 'acqua', 'vasca', 'pannello'], explode: 0.2, view: { rx: 0.35, ry: -0.9 },
        html: '<p>Die Elektronikplatine öffnet das <b>Magnetventil</b>: Das Wasser aus dem Hahn zu Hause strömt ein, fließt durch die <b>Schublade</b> und nimmt das Waschmittel mit in die Wanne.</p><p>Ein Drucksensor (der Druckschalter) „spürt“, wann genug Wasser da ist, und schließt das Ventil.</p>' },
      { icon: '🔥', title: '2 · Das Wasser erwärmen', loop: [0.14, 0.45], focus: ['resistenza', 'acqua', 'vasca'], explode: 0.3, view: { rx: 0.1, ry: -0.3 },
        html: '<p>Am Boden der Wanne sitzt das <b>Heizelement</b>: ein Rohr, das heiß wird, wenn Strom hindurchfließt, wie die Platte eines Herdes. Es erwärmt das Wasser auf 30, 40 oder 60 °C.</p><p class="tip">🌍 Das Erwärmen des Wassers verbraucht am meisten: Bei 30 °C zu waschen spart viel Energie.</p>' },
      { icon: '🔄', title: '2 · Waschen: auf und ab im Wasser', loop: [0.14, 0.5], focus: ['cestello', 'panni', 'acqua'], explode: 0, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Die Trommel dreht sich langsam, mal in die eine, mal in die andere Richtung. Die <b>Mitnehmer</b> heben die Wäsche hoch und lassen sie ins Seifenwasser zurückfallen: Durch das Schlagen und Aneinanderreiben löst sich der Schmutz.</p>' },
      { icon: '⚙️', title: 'Motor, Riemen und Riemenscheibe', focus: ['motore', 'cinghia', 'cestello'], explode: 0.45, view: { rx: 0.2, ry: -2.5 },
        html: '<p>Der <b>Motor</b> dreht ein kleines Rad; der <b>Riemen</b> nimmt die große <b>Riemenscheibe</b> hinten an der Trommel mit. Das große Rad dreht sich langsamer, aber mit mehr Kraft.</p>' },
      { icon: '🚿', title: '3 · Das schmutzige Wasser abpumpen', loop: [0.48, 0.64], focus: ['pompa', 'acqua', 'vasca'], explode: 0.2, view: { rx: 0.25, ry: -1.1 },
        html: '<p>Die <b>Ablaufpumpe</b> saugt das schmutzige Wasser vom Boden und drückt es durch den Schlauch hinaus in den Abfluss. Dann läuft sauberes Wasser zum <b>Spülen</b> ein, das das Waschmittel entfernt.</p>' },
      { icon: '🌀', title: '4 · Schleudern: Auswringen durch Drehen', loop: [0.64, 1], focus: ['cestello', 'panni', 'sospensioni', 'contrappeso'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>Die Trommel dreht sich blitzschnell, bis zu <b>1400 Umdrehungen pro Minute</b>. Die Wäsche wird an die Wand gedrückt und das Wasser spritzt aus den Löchern.</p><p><b>Federn</b>, <b>Stoßdämpfer</b> und das schwere <b>Gegengewicht</b> aus Beton verhindern, dass die Waschmaschine durchs Zimmer hüpft!</p><p class="tip">☂️ Dreh einen nassen Regenschirm: Die Tropfen fliegen weg. Es ist genau dasselbe!</p>' }
    ],
    facts: [
      { icon: '🪨', title: 'Das Betongewicht', html: 'In fast jeder Waschmaschine steckt ein <b>Betonblock</b> von 20–25 kg: Er hält sie beim Schleudern ruhig.' },
      { icon: '🧼', title: 'Bei 30 Grad waschen', html: 'Dank moderner Waschmittel werden viele Kleidungsstücke auch bei 30 °C gut sauber und verbrauchen weniger als die Hälfte der Energie eines Waschgangs bei 60 °C.' },
      { icon: '🕰️', title: 'Vor der Waschmaschine', html: 'Bis in die 1960er Jahre wuschen in Italien viele Familien von Hand, am <b>Waschplatz</b> des Dorfes oder am Fluss. Die Waschmaschine hat sehr viel Zeit freigemacht, vor allem für die Frauen.' },
      { icon: '🐟', title: 'Mikroplastik', html: 'Synthetische Stoffe (wie Fleece) verlieren bei jedem Waschen winzige Plastikfasern, die bis ins Meer gelangen können. Es gibt spezielle Filter und Beutel, die sie zurückhalten.' }
    ],
    quiz: [
      { type: 'order', q: 'Bring die Phasen eines Waschgangs in die richtige Reihenfolge', items: ['Wasser einlassen', 'Waschen', 'Abpumpen', 'Schleudern'], explain: 'Das Wasser mit dem Waschmittel läuft ein, es wird gewaschen, das schmutzige Wasser wird abgepumpt und zum Schluss wird mit dem Schleudern ausgewrungen.' },
      { type: 'mc', q: 'Welches Teil erwärmt das Wasser?', options: ['Der Motor', 'Das Heizelement', 'Die Pumpe', 'Das Gegengewicht'], answer: 1, explain: 'Das Heizelement wird heiß, wenn Strom hindurchfließt (Joulescher Effekt).' },
      { type: 'mc', q: 'Warum läuft beim Schleudern das Wasser aus der Wäsche?', options: ['Weil es verdunstet', 'Weil die Wäsche beim schnellen Drehen an die Wand gedrückt wird und das Wasser durch die Löcher wegfliegt', 'Weil die Pumpe es aus der Wäsche saugt', 'Weil das Waschmittel es auflöst'], answer: 1, explain: 'Beim schnellen Drehen strebt alles vom Zentrum weg: Das Wasser fließt durch die Löcher der Trommel ab.' },
      { type: 'tf', q: 'Das Betongewicht macht die Waschmaschine stabiler.', answer: true, explain: 'Das Gewicht hält die Wanne ruhig und verringert die Schwingungen beim Schleudern.' },
      { type: 'mc', q: 'Was macht die Ablaufpumpe?', options: ['Sie lässt sauberes Wasser ein', 'Sie befördert das schmutzige Wasser hinaus', 'Sie dreht die Trommel', 'Sie öffnet das Bullauge'], answer: 1, explain: 'Sie saugt das Wasser vom Boden der Wanne und drückt es in den Abfluss.' },
      { type: 'mc', q: 'Wofür sind die Mitnehmer in der Trommel da?', options: ['Zur Dekoration', 'Um die Wäsche hochzuheben und ins Wasser zurückfallen zu lassen', 'Um die Fäden zu schneiden', 'Zum Erwärmen'], answer: 1, explain: 'Sie heben die Wäsche hoch, die beim Zurückfallen und Aufschlagen besser sauber wird.' }
    ]
  });
})();
