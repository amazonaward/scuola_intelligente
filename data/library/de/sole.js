/* Il Sole, "tagliato a metà come un'arancia": la metà posteriore mostra gli strati sulla faccia del taglio (piano z = 0, rivolto verso +z);
   la metà anteriore (fotosfera) si sposta con il cursore Esplodi. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const backHemi = (r, color, dz, alpha) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [-90, 0, 0], pos: [0, 0, dz], color, alpha });
  /* punto sulla superficie: ax = inclinazione dall'alto verso +z, ay = giro intorno a y */
  const onSurf = (ax, ay, shapes) => ({ t: 'group', rot: [0, ay, 0], shapes: [ { t: 'group', rot: [ax, 0, 0], shapes: [ { t: 'group', pos: [0, R, 0], shapes } ] } ] });
  /* celle convettive sulla faccia del taglio */
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * 360 * D, c = [1.7 * Math.cos(a), 1.7 * Math.sin(a)], rr = 0.2;
    const dir = i % 2 ? 1 : -1;
    const loop = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.07]; });
    cells.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.05], color: '#9a3412' });
    for (let k = 0; k < 2; k++) cells.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: loop[0], color: '#fef3c7',
      anim: [ { type: 'path', pts: loop, wave: 'saw', rate: 0.6, phase: k / 2 }, { type: 'blink', color: '#c2410c', amount: 0.9, rate: 0.6, phase: k / 2 } ] });
  }
  /* fotoni che rimbalzano nella zona radiativa */
  const photons = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * 360 * D + 0.3, u = [Math.cos(a), Math.sin(a)], v = [-u[1], u[0]];
    const pts = [0.5, 0.65, 0.8, 0.95, 1.1, 1.25, 1.42].map((r, k) => [u[0] * r + v[0] * (k % 2 ? 0.09 : -0.09), u[1] * r + v[1] * (k % 2 ? 0.09 : -0.09), 0.07]);
    photons.push({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: pts[0], color: '#ffffff', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.35, phase: i / 8 }, { type: 'blink', fade: true, wave: 'window', from: 0.03, to: 0.97, ramp: 0.06, rate: 0.35, phase: i / 8 } ] });
  }
  const flashes = [[0.15, 0.2], [-0.25, 0.05], [0.05, -0.28], [0.3, -0.1], [-0.12, 0.3]].map((p, i) => ({ t: 'sphere', r: 0.09, n: 8, m: 10, pos: [p[0], p[1], 0.09], color: '#ffffff',
    anim: { type: 'blink', fade: true, wave: 'window', from: 0, to: 0.15, ramp: 0.4, rate: 1.3, phase: i * 0.21 } }));
  const wind = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 137.5 * D, b = ((i * 53) % 140 - 70) * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)];
    wind.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], color: '#fde68a',
      anim: [ { type: 'path', pts: [[d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], [d[0] * 4.6, d[1] * 4.6, d[2] * 4.6]], wave: 'saw', rate: 0.4, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: i / 14 } ] });
  }
  /* granuli della fotosfera, sparsi a caso (generatore pseudo-casuale fisso) */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const GRAN = Array.from({ length: 46 }, () => [12 + rnd() * 160, -85 + rnd() * 170, 0.05 + rnd() * 0.07, rnd() < 0.5 ? '#f9c74f' : '#f6a821']);
  const prom = (ax, ay, s, ph) => onSurf(ax, ay, [ { t: 'group', anim: [ { type: 'scale', from: 0.85, to: 1.15, rate: 0.5, phase: ph }, { type: 'blink', color: '#fde047', amount: 0.5, rate: 0.5, phase: ph } ], shapes: [
    { t: 'torus', R: 0.32 * s, r: 0.08 * s, n: 22, m: 10, arc: 180, rot: [-90, 0, 0], color: '#f97316' },
    { t: 'torus', R: 0.32 * s, r: 0.035 * s, n: 22, m: 6, arc: 180, rot: [-90, 0, 0], pos: [0, 0.05 * s, 0], color: '#fde047' } ] } ]);

  LIBRARY({
    lang: 'de',
    id: 'sole',
    title: 'Die Sonne',
    intro: 'Die Sonne ist der <b>Stern</b>, der uns am nächsten ist: eine Kugel aus glühend heißem Gas, 109-mal so breit wie die Erde. Sie schenkt uns Licht und Wärme und lässt Pflanzen, Tiere und Menschen leben. Schneiden wir sie wie eine Orange auf und schauen hinein!',
    model: {
      rx: 0.3, ry: -0.4, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'fotosfera', name: 'Photosphäre (die Oberfläche)', label: 'Photosphäre', color: '#fbbf24', explode: [4.6, 0.3, -2.6],
          info: '<p>Das ist die leuchtende „Oberfläche“ der Sonne, die wir sehen (aber niemals mit bloßem Auge!). Sie ist nicht fest: Es ist Gas mit etwa <b>5500 °C</b>, ganz körnig und brodelnd.</p>',
          more: '<p>Die „Körnchen“ (Granulen) sind die Spitzen riesiger Blasen aus heißem Gas, so groß wie Italien, die aus dem Inneren aufsteigen, sich abkühlen und in wenigen Minuten wieder absinken.</p>',
          shapes: [ { t: 'sphere', r: R, n: 20, m: 40, hemi: true, rot: [90, 0, 0] } ]
            .concat(GRAN.map(([ax, ay, r, c]) => onSurf(ax, ay, [ { t: 'sphere', r, n: 6, m: 10, scale: [1, 0.1, 1], color: c, decal: 1 } ]))) },
        { id: 'macchie', name: 'Sonnenflecken', color: '#451a03', explode: [4.6, 0.3, -2.6],
          info: '<p>Stellen, die „kälter“ sind (sozusagen: 3500 °C!) und daher dunkler. Ein Fleck kann größer sein als die Erde.</p>',
          more: '<p>Flecken entstehen dort, wo das <b>Magnetfeld</b> der Sonne sehr stark ist und das aufsteigende heiße Gas bremst. Ihre Zahl nimmt in einem Zyklus von etwa <b>11 Jahren</b> zu und ab.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.22, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.12, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(68, 8, [ { t: 'sphere', r: 0.15, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(110, 30, [ { t: 'sphere', r: 0.18, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.1, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]) ] },
        { id: 'zona-convettiva', name: 'Konvektionszone', label: 'Konvektionszone', color: '#f97316', explode: [0, 0, 0],
          info: '<p>Die äußere Schicht im Inneren der Sonne. Hier <b>steigt</b> das heiße Gas auf, kühlt an der Oberfläche ab und <b>sinkt wieder</b>, wie Wasser in einem kochenden Topf.</p>',
          shapes: [ backHemi(R, '#fbbf24', 0), { t: 'cyl', r: R - 0.03, h: 0.01, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.007], color: '#f97316' }, { t: 'tube', r: R + 0.005, ri: R - 0.05, h: 0.03, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#fde047' } ] },
        { id: 'celle', name: 'Konvektionsströme', label: 'Konvektionsströme', color: '#fef3c7', explode: [0, 0, 0.05], chip: true, noLabel: true,
          info: '<p>Die Gasblasen machen einen ständigen Kreislauf: Sie steigen heiß (hell) auf, geben an der Oberfläche ihre Wärme ab und sinken kühler (dunkel) wieder ab. So gelangt die Wärme nach außen.</p>',
          shapes: cells },
        { id: 'zona-radiativa', name: 'Strahlungszone', label: 'Strahlungszone', color: '#fcd34d', explode: [0, 0, 0.05],
          info: '<p>Hier ist das Gas so dicht, dass es sich nicht bewegt: Die Energie wandert als <b>Licht</b>, das im Zickzack von einem Teilchen zum nächsten springt.</p>',
          more: '<p>Ein Photon kann <b>zehntausende bis hunderttausende Jahre</b> brauchen, um diese Zone zu durchqueren. Das Licht, das dich heute wärmt, ist im Kern entstanden, als auf der Erde die Mammuts lebten!</p>',
          shapes: [ backHemi(1.45, '#fcd34d', 0.02) ] },
        { id: 'fotoni', name: 'Springendes Licht (Photonen)', label: 'Photonen', color: '#ffffff', explode: [0, 0, 0.1], chip: true, noLabel: true,
          info: '<p>Kleine Licht-„Pakete“, die <b>Photonen</b>, starten im Kern und werden Milliarden Mal aufgenommen und wieder abgegeben, bevor sie herauskommen.</p>',
          shapes: photons },
        { id: 'nucleo', name: 'Kern', color: '#fffbeb', explode: [0, 0, 0.1],
          info: '<p>Die Mitte der Sonne, mit etwa <b>15 Millionen Grad</b>. Hier verwandelt sich Wasserstoff durch <b>Kernfusion</b> in Helium: Jeder Blitz ist entstehende Energie.</p>',
          more: '<p>Jede Sekunde verwandelt die Sonne etwa 600 Millionen Tonnen Wasserstoff in Helium und „verliert“ 4 Millionen Tonnen Masse, die zu Energie werden (E = mc²). Sie hat Brennstoff für weitere <b>5 Milliarden Jahre</b>.</p>',
          shapes: [ backHemi(0.55, '#fffbeb', 0.04) ].concat(flashes) },
        { id: 'protuberanze', name: 'Protuberanzen', color: '#f97316', explode: [0, 0.4, 0],
          info: '<p>Riesige Bögen aus glühendem Gas, die sich von der Oberfläche erheben und den Linien des <b>Magnetfelds</b> folgen. In einen Bogen würden Dutzende Erden passen!</p>',
          shapes: [ prom(0, 0, 1.1, 0), prom(-35, 90, 0.8, 0.3), prom(30, -90, 0.9, 0.6), prom(-60, 20, 0.7, 0.45) ] },
        { id: 'brillamento', name: 'Sonneneruption (Flare)', label: 'Eruption', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>Eine plötzliche Explosion auf der Oberfläche, nahe den Flecken: In wenigen Minuten setzt sie so viel Energie frei wie Millionen Vulkane.</p>',
          more: '<p>Eruptionen und die großen ausgestoßenen Gas-„Blasen“ (CME) können Satelliten, GPS und Stromnetze auf der Erde stören und wunderschöne Polarlichter entzünden.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.2, n: 14, m: 20, color: '#fef9c3', alpha: 0.9, anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.1, to: 0.3, ramp: 0.3 }, { type: 'scale', from: 0.4, to: 1.4, wave: 'window', win: [0.1, 0.3] } ] } ]) ] },
        { id: 'corona', name: 'Korona', color: '#fde68a', alpha: 0.12, explode: [0, 0, 0],
          info: '<p>Eine hauchdünne Atmosphäre, die die Sonne umgibt und heißer ist als die Oberfläche: über <b>1 Million Grad</b>. Mit bloßem Auge sieht man sie nur bei <b>totalen Sonnenfinsternissen</b>.</p>',
          more: '<p>Warum die Korona so heiß ist, ist immer noch eines der großen Rätsel der Sonnenphysik. Die Sonde <b>Parker Solar Probe</b> ist durch sie hindurchgeflogen, um sie zu erforschen.</p>',
          shapes: [ { t: 'sphere', r: 2.45, n: 18, m: 30, anim: { type: 'scale', from: 1, to: 1.05, rate: 0.4 } }, { t: 'sphere', r: 2.9, n: 18, m: 30, alpha: 0.06, anim: { type: 'scale', from: 1.04, to: 0.98, rate: 0.4 } } ] },
        { id: 'vento-solare', name: 'Sonnenwind', label: 'Sonnenwind', color: '#fde68a', explode: [0, 0, 0],
          info: '<p>Von der Sonne weht ununterbrochen ein „Wind“ aus rasend schnellen Teilchen (400 km pro Sekunde!). Das Magnetfeld der Erde schützt uns wie ein Schild.</p>',
          more: '<p>Wenn die Teilchen des Sonnenwinds in der Nähe der Pole in die Atmosphäre eindringen, lassen sie die Luft grün und violett leuchten: Das sind die <b>Polarlichter</b>.</p>',
          shapes: wind },
        { id: 'terra', name: 'Die Erde (maßstabsgetreu)', label: 'Erde (maßstabsgetreu)', color: '#3b82f6', pos: [3.3, 1.5, 0.4], explode: [0.5, 0.3, 0],
          info: '<p>Dieses Pünktchen ist die <b>Erde</b>, im selben Maßstab wie die Sonne gezeichnet. In die Sonne würden mehr als <b>eine Million</b> Erden passen!</p>',
          more: '<p>Der Abstand ist allerdings nicht maßstabsgetreu: Die Erde ist etwa <b>150 Millionen km</b> von der Sonne entfernt. In diesem Maßstab wäre sie mehr als 200 Meter vom Bildschirm weg!</p>',
          shapes: [ { t: 'sphere', r: 0.04, n: 8, m: 12 }, { t: 'torus', R: 0.12, r: 0.008, n: 20, m: 4, rot: [90, 0, 0], color: '#93c5fd', alpha: 0.7 } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'Unser Stern', explode: 0,
        html: '<p>Die Sonne ist ein <b>Stern</b> wie die, die du nachts siehst, aber viel näher: Sie ist 150 Millionen km entfernt, und ihr Licht braucht etwa <b>8 Minuten</b> bis zu uns.</p><p class="tip">⚠️ Schau niemals direkt in die Sonne, auch nicht mit Sonnenbrille: Das schadet den Augen.</p>' },
      { icon: '🍊', title: 'Schneiden wir sie wie eine Orange auf', explode: 1, focus: ['zona-convettiva', 'zona-radiativa', 'nucleo', 'fotosfera'],
        html: '<p>Die Sonne besteht aus <b>Schichten</b>, wie eine Zwiebel: in der Mitte der <b>Kern</b>, dann die <b>Strahlungszone</b>, die <b>Konvektionszone</b> und schließlich die leuchtende Oberfläche, die <b>Photosphäre</b>.</p><p>Es ist alles Gas, nichts Festes: vor allem <b>Wasserstoff</b> (3/4) und <b>Helium</b>.</p>' },
      { icon: '⚛️', title: 'Im Kern entsteht die Energie', explode: 1, focus: ['nucleo'], zoom: 2.2, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Im Kern herrschen <b>15 Millionen Grad</b>. Wasserstoff verschmilzt zu Helium: Das ist die <b>Kernfusion</b>. Jeder Blitz setzt Energie frei, die zu Licht und Wärme wird.</p>' },
      { icon: '🔦', title: 'Das Licht springt tausende Jahre lang', explode: 1, focus: ['zona-radiativa', 'fotoni', 'nucleo'], zoom: 1.5, view: { rx: 0.1, ry: -0.15 },
        html: '<p>In der <b>Strahlungszone</b> wandert die Energie als Licht, aber das Gas ist so dicht, dass die Photonen im Zickzack hin- und herspringen: Um herauszukommen, brauchen sie <b>tausende Jahre</b>.</p>' },
      { icon: '♨️', title: 'Die Sonne brodelt', explode: 1, focus: ['zona-convettiva', 'celle'], zoom: 1.3, view: { rx: 0.1, ry: -0.15 },
        html: '<p>In der <b>Konvektionszone</b> bewegt sich das Gas in großen Kreisläufen: Es steigt heiß auf, kühlt an der Oberfläche ab und sinkt wieder, wie kochendes Wasser im Topf. Diese Strömungen heißen <b>Konvektion</b>.</p>' },
      { icon: '🌑', title: 'Flecken, Bögen und Explosionen', explode: 0, focus: ['fotosfera', 'macchie', 'protuberanze', 'brillamento', 'celle', 'fotoni'],
        html: '<p>Auf der Oberfläche erscheinen dunkle <b>Flecken</b> (kältere Stellen), riesige Gasbögen, die <b>Protuberanzen</b>, und plötzliche Blitze, die <b>Eruptionen</b>. Sie alle werden vom <b>Magnetismus</b> der Sonne verursacht.</p>' },
      { icon: '🌬️', title: 'Korona und Sonnenwind', explode: 0, focus: ['corona', 'vento-solare', 'terra', 'fotosfera', 'celle', 'fotoni'], view: { rx: 0.25, ry: -0.7 },
        html: '<p>Rund um die Sonne liegt die <b>Korona</b>, glühend heiß, aber hauchdünn. Von dort geht der <b>Sonnenwind</b> aus, ein Strom von Teilchen, der bis zur Erde reicht und die <b>Polarlichter</b> entzündet.</p><p class="tip">🌍 Schau auf den blauen Punkt: Das ist die Erde im selben Maßstab wie die Sonne!</p>' }
    ],
    facts: [
      { icon: '⚖️', title: 'Der Riese des Sonnensystems', html: 'Die Sonne enthält <b>99,8 %</b> der gesamten Masse des Sonnensystems. Alle Planeten zusammen sind nur „die Krümel“.' },
      { icon: '🕗', title: 'Licht von vor 8 Minuten', html: 'Wenn du das Sonnenlicht anschaust, siehst du die Sonne so, wie sie vor <b>8 Minuten und 20 Sekunden</b> war: So lange braucht das Licht bis zu uns.' },
      { icon: '🌗', title: 'Die Sonnenfinsternisse', html: 'Bei einer totalen Sonnenfinsternis bedeckt der Mond genau die Sonne: Die Sonne ist 400-mal größer als der Mond, aber auch 400-mal weiter weg!' },
      { icon: '🌱', title: 'Der Motor des Lebens', html: 'Pflanzen nutzen das Sonnenlicht, um ihre Nahrung herzustellen (Photosynthese). Auch das Essen, das du isst, ist am Ende Energie von der Sonne.' },
      { icon: '🔄', title: 'Auch sie dreht sich', html: 'Die Sonne dreht sich um sich selbst, aber nicht alles gleichzeitig: Am Äquator braucht sie für eine Umdrehung etwa <b>25 Tage</b>, in der Nähe der Pole mehr als 30.' }
    ],
    quiz: [
      { type: 'mc', q: 'Was ist die Sonne?', options: ['Ein Planet', 'Ein Stern', 'Ein Komet', 'Ein Satellit'], answer: 1, explain: 'Die Sonne ist ein Stern: Sie erzeugt Licht und Wärme durch Kernfusion.' },
      { type: 'mc', q: 'In welchem Teil der Sonne findet die Kernfusion statt?', options: ['In der Korona', 'In der Photosphäre', 'Im Kern', 'In den Flecken'], answer: 2, explain: 'Nur im Kern sind Temperatur und Druck hoch genug.' },
      { type: 'num', q: 'Wie viele Minuten braucht das Sonnenlicht (ungefähr) bis zur Erde?', answer: 8, tol: 1, unit: 'min', explain: 'Etwa 8 Minuten und 20 Sekunden.' },
      { type: 'tf', q: 'Sonnenflecken sind heißer als der Rest der Oberfläche.', answer: false, explain: 'Sie sind kälter (etwa 3500 °C gegenüber 5500 °C), deshalb sehen sie dunkel aus.' },
      { type: 'order', q: 'Bring die Schichten der Sonne in die richtige Reihenfolge, von der Mitte nach außen', items: ['Kern', 'Strahlungszone', 'Konvektionszone', 'Photosphäre', 'Korona'], explain: 'Vom Kern, wo die Energie entsteht, bis zur Korona, der äußeren Atmosphäre.' },
      { type: 'mc', q: 'Was verursacht die Polarlichter auf der Erde?', options: ['Der Mond', 'Der Sonnenwind', 'Die Vulkane', 'Die Wolken'], answer: 1, explain: 'Die Teilchen des Sonnenwinds lassen die Luft in der Nähe der Pole leuchten.' }
    ]
  });
})();
