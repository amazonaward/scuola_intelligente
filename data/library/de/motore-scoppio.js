/* Il motore a scoppio a 4 tempi (monocilindrico, sezione trasparente).
   Cinematica: manovella r = 0.35, biella l = 1.1, albero motore a y = -1.2. Un ciclo = 2 giri dell'albero (cycle: 2).
   Frazioni del ciclo: 0–0.25 aspirazione, 0.25–0.5 compressione, 0.5–0.75 scoppio, 0.75–1 scarico. */
(function () {
  const R = 0.35, L = 1.1, K = { r: R, l: L };
  const web = (z) => ({ t: 'extrude', d: 0.08, pos: [0, 0, z], color: '#6b7280',
    pts: [[0.15, 0.47], [-0.15, 0.47]].concat(Array.from({ length: 13 }, (_, i) => { const a = Math.PI + (i / 12) * Math.PI; return [0.4 * Math.cos(a), 0.4 * Math.sin(a) - 0.02]; })) });
  const cam = (x, ang) => ({ t: 'group', pos: [x, 1.32, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 0.5 }, shapes: [
    { t: 'cyl', r: 0.045, h: 0.9, n: 14, rot: [90, 0, 0], color: '#9ca3af' },
    { t: 'cyl', r: 0.09, h: 0.1, n: 20, rot: [90, 0, 0] },
    { t: 'cyl', r: 0.075, h: 0.1, n: 20, rot: [90, 0, 0], pos: [0.1 * Math.cos(ang * Math.PI / 180), 0.1 * Math.sin(ang * Math.PI / 180), 0] }
  ] });
  const spring = Array.from({ length: 40 }, (_, i) => { const a = i * 0.75; return [0.075 * Math.cos(a), 0.2 + i * 0.0085, 0.075 * Math.sin(a)]; });
  const valve = (headColor) => [
    { t: 'cyl', r: 0.15, r2: 0.05, h: 0.06, n: 24, pos: [0, 0.03, 0], color: headColor },
    { t: 'cyl', r: 0.025, h: 0.56, n: 10, pos: [0, 0.31, 0] },
    { t: 'pipe', r: 0.012, n: 6, pts: spring, color: '#facc15', caps: false },
    { t: 'cyl', r: 0.08, h: 0.025, n: 16, pos: [0, 0.55, 0], color: '#64748b' }
  ];
  const chamber = (from, to, ramp) => [K && Object.assign({ type: 'chamber', h0: 0.125 }, K), { type: 'blink', fade: true, wave: 'window', from, to, cycle: 2, ramp }];

  LIBRARY({
    id: 'motore-scoppio',
    lang: 'de',
    title: 'Der Verbrennungsmotor',
    intro: 'Der Motor von Autos und Mopeds verbrennt einen Tropfen Benzin, gemischt mit Luft: Die <b>Explosion</b> schiebt einen Kolben, und der Kolben dreht die Räder. Sieh dir die <b>4 Takte</b> einen nach dem anderen an!',
    model: {
      rx: 0.25, ry: -0.55, speed: 0.32, cycle: 2, height: 480,
      phases: [
        { from: 0, to: 0.25, label: '1 · Ansaugen', color: '#2563eb' },
        { from: 0.25, to: 0.5, label: '2 · Verdichten', color: '#16a34a' },
        { from: 0.5, to: 0.75, label: '3 · Arbeiten', color: '#ea580c' },
        { from: 0.75, to: 1, label: '4 · Ausstoßen', color: '#6b7280' }
      ],
      parts: [
        { id: 'cilindro', name: 'Zylinder', color: '#94a3b8', alpha: 0.26, pos: [0, 0.025, 0], explode: [0, 0, 0],
          info: '<p>Das ist das stabile „Rohr“, in dem der Kolben auf- und abgleitet. Hier drin findet die Verbrennung statt: Deshalb besteht er aus dickem, hitzebeständigem Metall.</p>',
          more: '<p>Das Volumen, das der Kolben „durchstreicht“, heißt <b>Hubraum</b>. Ein Moped hat 50 cm³, ein Auto oft 1000–2000 cm³, aufgeteilt auf 3 oder 4 Zylinder.</p>',
          shapes: [ { t: 'tube', r: 0.56, ri: 0.45, h: 1.25, n: 36 } ].concat([0.35, 0.15, -0.05].map((y) => ({ t: 'tube', r: 0.68, ri: 0.56, h: 0.04, n: 36, pos: [0, y, 0] }))) },
        { id: 'testata', name: 'Zylinderkopf', color: '#64748b', alpha: 0.24, pos: [0, 0.65, 0], explode: [0, 0.8, 0],
          info: '<p>Das ist der „Deckel“ des Zylinders. Er enthält die <b>Ventile</b>, die <b>Zündkerze</b> und die Kanäle, durch die das Gemisch einströmt und die Gase ausströmen.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.45, 1.0], pos: [0, 0.22, 0] }, { t: 'box', s: [1.3, 0.3, 0.8], pos: [0, 0.65, 0], color: '#475569' } ] },
        { id: 'pistone', name: 'Kolben', color: '#d1d5db', pos: [0, 0.3, 0], explode: [0, 0, 1.4], anim: Object.assign({ type: 'piston' }, K),
          info: '<p>Das ist ein Metall-„Stopfen“, der im Zylinder auf und ab gleitet. Die Verbrennung drückt ihn mit enormer Kraft nach unten.</p>',
          more: '<p>Die <b>Ringe</b> (Kolbenringe) um den Kolben dichten den Zylinder gut ab, damit die Gase nicht nach unten entweichen. Der Kolben eines Autos kann mehr als 100 Mal pro Sekunde auf- und abgehen!</p>',
          shapes: [
            { t: 'cyl', r: 0.43, h: 0.45, n: 36 },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.16, 0], color: '#475569' },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.09, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.6, n: 14, pos: [0, -0.05, 0], rot: [90, 0, 0], color: '#9ca3af' }
          ] },
        { id: 'biella', name: 'Pleuel', color: '#64748b', pos: [0, 0.25, 0], explode: [0, 0, 1.05], anim: Object.assign({ type: 'rod' }, K),
          info: '<p>Das ist der „Arm“, der den Kolben mit der Kurbelwelle verbindet. Er verwandelt das Auf und Ab des Kolbens in eine Bewegung, die die Welle dreht, wie das Bein, das das Fahrradpedal tritt.</p>',
          shapes: [
            { t: 'tube', r: 0.11, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0] },
            { t: 'box', s: [0.11, 0.86, 0.09], pos: [0, -0.55, 0] },
            { t: 'tube', r: 0.17, ri: 0.09, h: 0.12, n: 24, pos: [0, -1.1, 0], rot: [90, 0, 0] }
          ] },
        { id: 'albero-motore', name: 'Kurbelwelle', color: '#6b7280', pos: [0, -1.2, 0], explode: [0, -0.5, 0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>Das ist die gekröpfte Welle, die sich <b>dreht</b>. Von hier geht die Bewegung zum Getriebe und dann zu den Rädern. Sie hat Gegengewichte, damit sie ohne Zittern läuft.</p>',
          more: '<p>Ein ganzer Zyklus (4 Takte) braucht <b>2 Umdrehungen</b> der Kurbelwelle. Bei 3000 Umdrehungen pro Minute macht der Kolben 1500 Arbeitstakte pro Minute, also 25 pro Sekunde!</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.45], color: '#9ca3af' },
            web(0.11), web(-0.11), { t: 'cyl', r: 0.085, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0, R, 0], color: '#9ca3af' } ] },
        { id: 'volano', name: 'Schwungrad', color: '#475569', pos: [0, -1.2, -0.82], explode: [0, 0, -0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>Das ist ein schweres Rad an der Kurbelwelle. Einmal in Schwung gebracht, dreht es sich weiter und hilft dem Motor über die Takte hinweg, in denen niemand schiebt.</p>',
          shapes: [ { t: 'cyl', r: 0.78, h: 0.12, n: 40, rot: [90, 0, 0] }, { t: 'box', s: [0.12, 0.5, 0.02], pos: [0, 0.45, 0.07], color: '#facc15', decal: 1 } ] },
        { id: 'valvola-aspirazione', name: 'Einlassventil', label: 'Einlassventil', color: '#94a3b8', pos: [-0.2, 0.66, 0], explode: [-0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0, to: 0.25, cycle: 2, ramp: 0.3 },
          info: '<p>Das ist eine „Tür“, die sich <b>nur im ersten Takt</b> öffnet, um Luft und Benzin in den Zylinder zu lassen. Dann schließt sie sich wieder und bleibt zu.</p>', shapes: valve('#3b82f6') },
        { id: 'valvola-scarico', name: 'Auslassventil', label: 'Auslassventil', color: '#94a3b8', pos: [0.2, 0.66, 0], explode: [0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0.75, to: 1, cycle: 2, ramp: 0.3 },
          info: '<p>Das ist die „Ausgangstür“: Sie öffnet sich <b>nur im vierten Takt</b>, um die verbrannten Gase zum Auspuffrohr hinauszulassen.</p>', shapes: valve('#ef4444') },
        { id: 'alberi-camme', name: 'Nockenwellen', color: '#6b7280', explode: [0, 1.45, 0],
          info: '<p>Das sind Wellen mit „Höckern“ (Nocken). Beim Drehen drückt jeder Höcker sein Ventil im richtigen Moment nach unten, wie ein Finger, der eine Taste drückt.</p>',
          more: '<p>Die Nockenwellen drehen sich mit der <b>halben Geschwindigkeit</b> der Kurbelwelle (sie sind durch einen Riemen oder eine Kette verbunden): Jedes Ventil öffnet sich einmal alle 2 Umdrehungen.</p>',
          shapes: [ cam(-0.2, -45), cam(0.2, 225) ] },
        { id: 'candela', name: 'Zündkerze', color: '#f8fafc', pos: [0, 0.65, 0.27], explode: [0, 1.0, 0.5],
          info: '<p>Sie erzeugt einen kleinen <b>elektrischen Funken</b>, genau dann, wenn das Gemisch am stärksten zusammengedrückt ist: Er ist das Streichholz, das die Verbrennung entzündet.</p>',
          more: '<p>Der Funke entsteht durch eine sehr hohe Spannung (über 20 000 Volt), die zwischen zwei Elektroden springt, die weniger als einen Millimeter auseinander liegen. Dieselmotoren haben keine Zündkerze: Der Dieselkraftstoff entzündet sich von selbst, weil die verdichtete Luft sehr heiß wird.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.2, n: 12, pos: [0, 0.1, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.1, n: 6, pos: [0, 0.25, 0], color: '#64748b' },
            { t: 'cyl', r: 0.065, h: 0.35, n: 16, pos: [0, 0.47, 0] }, { t: 'cyl', r: 0.03, h: 0.1, n: 10, pos: [0, 0.69, 0], color: '#9ca3af' },
            { t: 'sphere', r: 0.09, n: 8, pos: [0, -0.02, 0], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.49, to: 0.535, cycle: 2, ramp: 0.15 } } ] },
        { id: 'aspirazione', name: 'Ansaugkrümmer', label: 'Ansaugen', color: '#60a5fa', alpha: 0.6, explode: [-0.7, 0.4, 0],
          info: '<p>Das ist der Kanal, durch den die Luft (vom Filter gereinigt) kommt, gemischt mit Benzintröpfchen, die die <b>Einspritzdüse</b> versprüht.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[-1.55, 1.15, 0], [-0.9, 1.15, 0], [-0.45, 0.98, 0], [-0.22, 0.8, 0]] }, { t: 'box', s: [0.35, 0.5, 0.5], pos: [-1.65, 1.15, 0], color: '#cbd5e1', alpha: 1 } ] },
        { id: 'scarico', name: 'Abgaskrümmer', label: 'Abgas', color: '#f97316', alpha: 0.6, explode: [0.7, 0.4, 0],
          info: '<p>Er leitet die verbrannten Gase ab, die sehr heiß sind. Dann reinigt der <b>Schalldämpfer</b> sie teilweise und verringert den Lärm.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[0.22, 0.8, 0], [0.45, 0.98, 0], [0.9, 1.1, 0], [1.4, 0.9, 0]] }, { t: 'cyl', r: 0.2, h: 0.5, n: 24, rot: [0, 0, 90], pos: [1.6, 0.85, 0], color: '#78716c', alpha: 1 } ] },
        { id: 'coppa', name: 'Ölwanne', label: 'Ölwanne', color: '#78716c', alpha: 0.22, pos: [0, -1.75, 0], explode: [0, -0.6, 0],
          info: '<p>Unter dem Motor befindet sich das <b>Öl</b>: Es wird auf alle Teile gespritzt, die aneinander reiben, damit sie sich nicht abnutzen und nicht zu heiß werden.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.4, 1.0] }, { t: 'box', s: [1.44, 0.14, 0.94], pos: [0, -0.12, 0], color: '#ca8a04', alpha: 0.75 } ] },
        { id: 'miscela', name: 'Luft-Benzin-Gemisch', label: 'Gemisch', color: '#4ade80', alpha: 0.55, pos: [0, 0.65, 0], chip: true, noLabel: false,
          info: '<p>Luft und Benzin, zu feinsten Tröpfchen vermischt. Damit es gut brennt, braucht es etwa <b>15 Gramm Luft für jedes Gramm Benzin</b>.</p>',
          shapes: [ { t: 'group', anim: chamber(0.0, 0.5, 0.05), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'scoppio', name: 'Arbeitstakt (Verbrennung)', label: 'Verbrennung', color: '#f97316', alpha: 0.8, pos: [0, 0.65, 0],
          info: '<p>Der Funke entzündet das Gemisch, das im Nu verbrennt: Die Gase werden sehr heiß (über 2000 °C) und <b>drücken</b> den Kolben kräftig nach unten.</p>',
          more: '<p>Es ist nicht genau eine Explosion, sondern eine <b>blitzschnelle Verbrennung</b>: Die Flamme durchquert den Zylinder in wenigen Tausendstelsekunden. Es ist der einzige Takt, der Arbeit leistet: Die anderen drei „leben“ dank des Schwungrads.</p>',
          shapes: [ { t: 'group', anim: chamber(0.5, 0.64, 0.18).concat([{ type: 'blink', color: '#fde047', wave: 'sin01', rate: 6 }]), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'gas-scarico', name: 'Abgase', label: 'Abgase', color: '#6b7280', alpha: 0.5, pos: [0, 0.65, 0],
          info: '<p>Das sind die Gase, die nach der Verbrennung übrig bleiben: vor allem Wasserdampf und <b>Kohlendioxid</b> (CO₂), dazu einige Stoffe, die die Luft verschmutzen.</p>',
          shapes: [ { t: 'group', anim: chamber(0.62, 1.0, 0.12), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] }
      ]
    },
    steps: [
      { icon: '🔥', title: 'Von der Wärme zur Bewegung', play: true, explode: 0,
        html: '<p>Der Verbrennungsmotor ist ein <b>Motor mit innerer Verbrennung</b>: Das Benzin verbrennt <i>im</i> Zylinder. Die heißen Gase dehnen sich aus und drücken den Kolben.</p><p>Der Kolben geht auf und ab, das <b>Pleuel</b> und die <b>Kurbelwelle</b> verwandeln diese Bewegung in eine <b>Drehung</b>. Jeder Zyklus hat 4 Takte: Sehen wir sie uns einzeln an!</p>' },
      { icon: '1️⃣', title: 'Ansaugen: Der Zylinder wird mit Luft gefüllt', loop: [0, 0.25], focus: ['pistone', 'valvola-aspirazione', 'miscela', 'aspirazione', 'cilindro'],
        html: '<p>Der Kolben geht <b>nach unten</b>. Das Einlassventil (blau) ist <b>offen</b>: Der Zylinder füllt sich mit dem Gemisch aus Luft und Benzin, wie wenn du den Kolben einer Spritze aufziehst.</p>' },
      { icon: '2️⃣', title: 'Verdichten: Es wird zusammengedrückt', loop: [0.25, 0.5], focus: ['pistone', 'miscela', 'valvola-aspirazione', 'valvola-scarico', 'cilindro'],
        html: '<p>Beide Ventile sind <b>geschlossen</b>. Der Kolben geht <b>nach oben</b> und drückt das Gemisch auf einen etwa <b>10 Mal kleineren</b> Raum zusammen. Je stärker es verdichtet ist, desto kräftiger wird die Verbrennung.</p>' },
      { icon: '3️⃣', title: 'Arbeiten: der Schub!', loop: [0.5, 0.75], focus: ['candela', 'scoppio', 'pistone', 'biella', 'cilindro'],
        html: '<p>Die <b>Zündkerze</b> erzeugt einen Funken: Das Gemisch verbrennt auf einen Schlag, die sehr heißen Gase dehnen sich aus und <b>drücken den Kolben nach unten</b>. Das ist der einzige Takt, der dem Motor Kraft gibt!</p><p class="tip">⚡ Er heißt auch <b>Expansion</b> oder „Arbeitstakt“.</p>' },
      { icon: '4️⃣', title: 'Ausstoßen: Die Gase müssen raus', loop: [0.75, 1], focus: ['pistone', 'valvola-scarico', 'gas-scarico', 'scarico', 'cilindro'],
        html: '<p>Das Auslassventil (rot) öffnet sich. Der Kolben <b>steigt wieder</b> und schiebt die verbrannten Gase zum Auspuffrohr hinaus. Der Zylinder ist bereit, von vorn zu beginnen.</p>' },
      { icon: '🔄', title: 'Vom Kolben zu den Rädern', focus: ['pistone', 'biella', 'albero-motore', 'volano'], explode: 0.35, view: { rx: 0.15, ry: -0.25 },
        html: '<p>Das <b>Pleuel</b> verbindet den Kolben mit einer „Kröpfung“ der <b>Kurbelwelle</b>: So wird das Auf und Ab zu einer Drehung, genau wie deine Beine auf den Fahrradpedalen.</p><p>Das schwere <b>Schwungrad</b> dreht sich aus Trägheit weiter und bringt den Motor durch die anderen drei Takte.</p>' },
      { icon: '⏱️', title: 'Der richtige Moment', focus: ['alberi-camme', 'valvola-aspirazione', 'valvola-scarico', 'candela'], explode: 0.2, view: { rx: 0.35, ry: -0.6 },
        html: '<p>Die <b>Nockenwellen</b> öffnen die Ventile im richtigen Moment, und die Zündkerze zündet genau am Ende der Verdichtung. Alles ist mit der Kurbelwelle synchronisiert.</p><p class="tip">🧮 4 Takte = 2 Umdrehungen der Kurbelwelle = 1 Arbeitstakt.</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Italienische Erfinder', html: '1853 meldeten die Toskaner <b>Eugenio Barsanti und Felice Matteucci</b> einen der ersten Verbrennungsmotoren zum Patent an. Der Viertaktzyklus wurde 1876 durch Nikolaus Otto berühmt.' },
      { icon: '🌡️', title: 'Viel Wärme geht verloren', html: 'Ein Benzinmotor verwandelt nur etwa <b>ein Drittel</b> der Energie des Benzins in Bewegung: Der Rest geht als Wärme verloren. Deshalb braucht man den Kühler!' },
      { icon: '🚗', title: 'Mehrere Zylinder', html: 'Autos haben meist 3 oder 4 Zylinder, die abwechselnd zünden: So ist der Schub gleichmäßig und der Motor läuft ruhig.' },
      { icon: '🔋', title: 'Und die Elektroautos?', html: 'Ein Elektromotor verbrennt nichts: Er nutzt Magnete und Strom. Er hat sehr wenige bewegliche Teile und verschmutzt dort, wo er fährt, die Luft nicht.' }
    ],
    quiz: [
      { type: 'order', q: 'Bring die 4 Takte des Motors in die richtige Reihenfolge', items: ['Ansaugen', 'Verdichten', 'Arbeiten', 'Ausstoßen'], explain: 'Das Gemisch strömt ein, wird zusammengedrückt, verbrennt und schiebt, dann strömen die Gase aus.' },
      { type: 'mc', q: 'Welches Teil erzeugt den Funken?', options: ['Das Ventil', 'Die Zündkerze', 'Das Schwungrad', 'Das Pleuel'], answer: 1, explain: 'Die Zündkerze erzeugt einen elektrischen Funken, der das Gemisch entzündet.' },
      { type: 'mc', q: 'In welchem Takt bekommt der Kolben den Schub, der den Motor antreibt?', options: ['Ansaugen', 'Verdichten', 'Arbeiten', 'Ausstoßen'], answer: 2, explain: 'Nur beim Arbeitstakt (Expansion) drücken die heißen Gase den Kolben: Das ist der Arbeitstakt.' },
      { type: 'tf', q: 'Beim Verdichten sind beide Ventile geschlossen.', answer: true, explain: 'Wäre ein Ventil offen, würde das Gemisch entweichen, statt zusammengedrückt zu werden.' },
      { type: 'mc', q: 'Was verwandelt das Auf und Ab des Kolbens in eine Drehung?', options: ['Pleuel und Kurbelwelle', 'Zündkerze und Ventile', 'Ölwanne', 'Abgaskrümmer'], answer: 0, explain: 'Das Pleuel drückt die Kröpfung der Kurbelwelle und dreht sie, wie das Bein mit dem Pedal.' },
      { type: 'num', q: 'Wie viele Umdrehungen macht die Kurbelwelle in einem ganzen Viertaktzyklus?', answer: 2, explain: 'Jeder Takt ist eine halbe Umdrehung: 4 × ½ = 2 Umdrehungen.' }
    ]
  });
})();
