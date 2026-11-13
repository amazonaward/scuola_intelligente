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
    lang: 'de',
    id: 'pala-eolica',
    title: 'Das Windrad',
    intro: 'Ein Windrad (oder eine <b>Windkraftanlage</b>) ist eine moderne Windmühle: Der Wind dreht die großen Rotorblätter, und ein <b>Generator</b> verwandelt die Bewegung in <b>Strom</b>, ohne etwas zu verbrennen und ohne die Luft zu verschmutzen.',
    model: {
      rx: 0.2, ry: -0.75, speed: 0.4, height: 500, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'pale', name: 'Rotorblätter', color: '#f8fafc', pos: [HX, HY, 0], explode: [-1.4, 0, 0],
          anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>Drei lange Blätter in der Form eines <b>Flugzeugflügels</b>. Der Wind streicht über ihre gewölbte Oberfläche, drückt sie zur Seite und lässt sie sich drehen.</p>',
          more: '<p>Moderne Rotorblätter sind über <b>80 Meter</b> lang und bestehen aus Glasfaser und Harzen, leicht und stabil. Die Spitze kann schneller als 300 km/h sein, auch wenn sich der Rotor langsam zu drehen scheint. Warum drei Blätter? Das ist der beste Kompromiss zwischen Wirkungsgrad, Gewicht und Stabilität.</p>',
          shapes: [ blade(0), blade(120), blade(240) ] },
        { id: 'mozzo', name: 'Nabe und Spinner', label: 'Nabe', color: '#e5e7eb', pos: [HX, HY, 0], explode: [-1.0, 0, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>Die „Mitte“ des Rotors, an der die Blätter befestigt sind. Der Kegel vorn, der <b>Spinner</b>, schützt die Mechanik und teilt die Luft.</p>',
          more: '<p>In der Nabe sitzen die Motoren für die <b>Blattverstellung</b>: Sie drehen jedes Blatt um seine eigene Achse. Bei starkem Wind stellen sich die Blätter „auf Kante“, damit der Rotor nicht zu schnell läuft; bei zu starkem Wind (über 90 km/h) bleibt die Anlage aus Sicherheitsgründen stehen.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pts: [[0.32, 0.12], [0.33, 0], [0.3, -0.18], [0.2, -0.38], [0.08, -0.5], [0, -0.53]] }, { t: 'cyl', r: 0.3, h: 0.25, n: 30, rot: AX, pos: [0.22, 0, 0], color: '#cbd5e1' } ] },
        { id: 'navicella', name: 'Maschinenhaus', color: '#f1f5f9', alpha: 0.32, explode: [0.3, 1.1, 0],
          info: '<p>Das „Häuschen“ oben auf dem Turm: Es enthält alle Maschinen, die die Drehung in Strom verwandeln. Es ist so groß wie ein Transporter, und die Techniker steigen zur Wartung hinein.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pos: [-0.15, HY, 0], pts: [[0.26, -0.72], [0.4, -0.62], [0.46, -0.4], [0.47, 0], [0.47, 1.25], [0.43, 1.45], [0.3, 1.55], [0, 1.57]], ds: true },
            { t: 'box', s: [0.25, 0.12, 0.06], pos: [0.95, HY + 0.47, 0], color: '#94a3b8', alpha: 1 } ] },
        { id: 'albero', name: 'Langsame Welle', label: 'Langsame Welle', color: '#94a3b8', explode: [-0.2, 0.6, 0.6],
          info: '<p>Ein dicker Stahlzylinder, der mit der Nabe verbunden ist: Er dreht sich langsam zusammen mit den Blättern (etwa <b>10–15 Umdrehungen pro Minute</b>), aber mit riesiger Kraft.</p>',
          shapes: [ { t: 'cyl', r: 0.18, h: 0.18, n: 24, rot: AX, pos: [-0.55, HY, 0], color: '#475569' },
            { t: 'group', pos: [-0.25, HY, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 }, shapes: [ { t: 'cyl', r: 0.08, h: 1.1, n: 18, rot: AX }, { t: 'box', s: [0.6, 0.02, 0.17], pos: [0, 0.08, 0], color: '#facc15', decal: 1 } ] } ] },
        { id: 'moltiplicatore', name: 'Getriebe', label: 'Getriebe', color: '#475569', explode: [0.1, 0.9, 0.9],
          info: '<p>Ein Kasten voller <b>Zahnräder</b>, wie die Gangschaltung eines Fahrrads: Ein großes Rad treibt ein kleines viel schneller an. So werden aus den wenigen Umdrehungen der Blätter viele Umdrehungen für den Generator.</p>',
          more: '<p>Das Getriebe erhöht die Drehzahl um etwa das <b>100-Fache</b>: von 15 auf 1500 Umdrehungen pro Minute. Manche moderne Anlagen haben keines: Sie nutzen riesige Generatoren voller Magnete, die auch bei langsamer Drehung arbeiten („Direktantrieb“).</p>',
          shapes: [ { t: 'box', s: [0.5, 0.52, 0.55], pos: [0.36, HY, 0] },
            { t: 'group', pos: [GX, GY, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: 0.5 }, shapes: gear(R1, 18, '#f59e0b') },
            { t: 'group', pos: [GX, GY + R1 + R2 + 0.02, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: -0.5 * R1 / R2 }, shapes: gear(R2, 8, '#fbbf24') } ] },
        { id: 'freno', name: 'Scheibenbremse', label: 'Bremse', color: '#9ca3af', explode: [0.4, 0.6, 1.0],
          info: '<p>Eine Scheibenbremse wie beim Motorrad, die den Rotor zur Wartung oder im Notfall anhält.</p>',
          shapes: [ { t: 'group', pos: [0.86, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.13, h: 0.03, n: 24, rot: AX }, { t: 'cyl', r: 0.03, h: 0.4, n: 10, rot: AX, pos: [0.15, 0, 0], color: '#64748b' } ] },
            { t: 'box', s: [0.08, 0.08, 0.1], pos: [0.86, GY + R1 + R2 + 0.15, 0], color: '#dc2626' } ] },
        { id: 'generatore', name: 'Generator', color: '#1d4ed8', explode: [0.9, 0.9, 0.5],
          info: '<p>Das elektrische Herz des Windrads: Darin drehen sich <b>Magnete</b> nahe an Spulen aus Kupferdraht. Die Bewegung der Magnete erzeugt im Draht <b>elektrischen Strom</b>.</p>',
          more: '<p>Das ist das Prinzip der <b>elektromagnetischen Induktion</b>, 1831 von Michael Faraday entdeckt: dasselbe wie beim Fahrraddynamo. Eine große Anlage erzeugt 3–15 Megawatt, genug für Tausende Haushalte.</p>',
          shapes: [ { t: 'cyl', r: 0.19, h: 0.42, n: 28, rot: AX, pos: [1.2, GY + R1 + R2 + 0.02, 0] }, { t: 'cyl', r: 0.2, h: 0.04, n: 28, rot: AX, pos: [1.0, GY + R1 + R2 + 0.02, 0], color: '#94a3b8' },
            { t: 'group', pos: [1.43, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.12, h: 0.03, n: 6, rot: AX, color: '#e2e8f0' }, { t: 'box', s: [0.035, 0.2, 0.03], pos: [0.02, 0, 0], color: '#b45309' } ] },
            { t: 'box', s: [0.3, 0.3, 0.2], pos: [1.1, HY - 0.2, 0.2], color: '#334155' } ] },
        { id: 'anemometro', name: 'Windmesser und Windfahne', label: 'Windmesser', color: '#e2e8f0', explode: [0.5, 1.4, 0],
          info: '<p>Auf dem Dach des Maschinenhauses misst ein <b>Windmesser</b> die Windgeschwindigkeit und eine <b>Windfahne</b> die Richtung. Der Computer der Anlage entscheidet damit, wie sie sich ausrichtet und wann sie startet.</p>',
          shapes: [ { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.0, HY + 0.65, -0.1] }, { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.25, HY + 0.65, 0.1] },
            { t: 'group', pos: [1.0, HY + 0.86, -0.1], anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [0, 120, 240].map((a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'cyl', r: 0.012, h: 0.2, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 8, m: 10, hemi: true, rot: [0, 0, 90], pos: [0.2, 0, 0], color: '#f8fafc' } ] })) },
            { t: 'group', pos: [1.25, HY + 0.86, 0.1], anim: { type: 'swing', axis: 'y', amp: 15, rate: 0.4 }, shapes: [ { t: 'cyl', r: 0.012, h: 0.3, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'extrude', pts: [[0.2, 0], [0.35, 0.1], [0.35, -0.06]], d: 0.01, color: '#ef4444' } ] } ] },
        { id: 'imbardata', name: 'Windnachführung', label: 'Windnachführung', color: '#64748b', explode: [0, 0.4, 0],
          info: '<p>Ein großer Zahnkranz mit Motoren zwischen Turm und Maschinenhaus: Er <b>dreht das ganze Maschinenhaus</b>, sodass die Blätter immer zum Wind zeigen, wie eine Wetterfahne.</p>',
          shapes: [ { t: 'torus', R: 0.3, r: 0.05, n: 30, m: 8, pos: [0, HY - 0.45, 0] }, { t: 'cyl', r: 0.33, h: 0.08, n: 30, pos: [0, HY - 0.5, 0], color: '#475569' } ]
            .concat([0.6, -0.6].map((x) => ({ t: 'group', pos: [x * 0.6, HY - 0.3, 0.25], shapes: [ { t: 'cyl', r: 0.06, h: 0.22, n: 12, color: '#334155' }, { t: 'group', pos: [0, -0.14, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'cyl', r: 0.05, h: 0.05, n: 8, color: '#facc15' } ] } ] }))) },
        { id: 'torre', name: 'Turm', color: '#e5e7eb', explode: [0, 0, 0],
          info: '<p>Ein Stahlturm in Form einer Röhre, so hoch wie ein Hochhaus mit 30–40 Stockwerken. Je höher man kommt, desto stärker und gleichmäßiger ist der Wind: Deshalb sitzen die Rotorblätter so weit oben.</p>',
          more: '<p>Im Inneren des Turms gibt es eine Leiter, manchmal einen kleinen Aufzug, und die Kabel, die den Strom nach unten bringen. Die höchsten Türme sind über 160 Meter hoch.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0, 0.1], [0.32, 0.1], [0.29, 2.0], [0.24, 4.0], [0.19, 5.8], [0, 5.8]] },
            { t: 'box', s: [0.18, 0.4, 0.04], pos: [0, 0.4, 0.31], rot: [-1, 0, 0], color: '#64748b', decal: 1 }, { t: 'torus', R: 0.3, r: 0.02, n: 30, m: 4, pos: [0, 2.0, 0], color: '#cbd5e1' }, { t: 'torus', R: 0.24, r: 0.02, n: 30, m: 4, pos: [0, 4.0, 0], color: '#cbd5e1' } ] },
        { id: 'fondazione', name: 'Fundament', color: '#a8a29e', explode: [0, -0.6, 0],
          info: '<p>Unter der Erde liegt ein riesiger „Fuß“ aus <b>Stahlbeton</b>, der den Turm auch bei Stürmen aufrecht hält. Er wiegt Tausende Tonnen.</p>',
          shapes: [ { t: 'cyl', r: 1.2, r2: 0.5, h: 0.35, n: 8, pos: [0, -0.08, 0] }, { t: 'cyl', r: 2.4, h: 0.06, n: 36, pos: [0, -0.04, 0], color: '#65a30d' } ] },
        { id: 'trasformatore', name: 'Transformator und Stromnetz', label: 'Transformator', color: '#64748b', explode: [0.7, -0.2, 0.7],
          info: '<p>Am Fuß des Turms erhöht ein <b>Transformator</b> die Spannung des Stroms, damit er in den Kabeln des Stromnetzes weit reisen kann, bis zu den Häusern, Schulen und Fabriken.</p>',
          shapes: [ { t: 'box', s: [0.55, 0.5, 0.45], pos: [1.15, 0.27, 0.95] }, { t: 'box', s: [0.6, 0.05, 0.5], pos: [1.15, 0.54, 0.95], color: '#475569' } ]
            .concat([0, 1, 2, 3, 4].map((k) => ({ t: 'box', s: [0.02, 0.36, 0.5], pos: [0.86, 0.27, 0.95 - 0.2 + k * 0.1], color: '#94a3b8' })), [ { t: 'box', s: [0.1, 0.12, 0.02], pos: [1.15, 0.33, 1.18], color: '#facc15', decal: 1 } ]) },
        { id: 'corrente', name: 'Elektrischer Strom', label: 'Strom', color: '#facc15', explode: [0, 0, 0], chip: true,
          info: '<p>Der vom Generator erzeugte Strom läuft durch die <b>Kabel</b> im Turm nach unten, geht durch den Transformator und fließt ins Stromnetz.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: POWER, color: '#1f2937' } ].concat(Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: POWER[0], color: '#facc15', anim: { type: 'path', pts: POWER, wave: 'saw', rate: 0.25, phase: k / 10 } }))) },
        { id: 'vento', name: 'Wind', color: '#bae6fd', explode: [0, 0, 0], chip: true,
          info: '<p>Wind ist <b>bewegte Luft</b>: Er entsteht, weil die Sonne die Erde unterschiedlich erwärmt und warme Luft aufsteigt, während kalte ihren Platz einnimmt. Der Wind hat <b>Bewegungsenergie</b> (kinetische Energie).</p>',
          more: '<p>Wenn sich die Windgeschwindigkeit <b>verdoppelt</b>, wird die Energie, die er mitbringt, <b>8-mal</b> so groß. Eine Anlage kann nicht die ganze Windenergie einfangen: höchstens 59 % (Betz\'sches Gesetz), die besten erreichen 50 %.</p>',
          shapes: wind }
      ]
    },
    steps: [
      { icon: '🌬️', title: 'Die Energie des Windes', explode: 0,
        html: '<p>Wind ist Luft in Bewegung, und alles, was sich bewegt, hat <b>Energie</b>. Seit Jahrhunderten nutzen Windmühlen sie zum Mahlen von Getreide; heute verwandeln Windräder sie in <b>Strom</b>.</p><p class="tip">☀️ Den Wind gibt es dank der Sonne, die die Luft an verschiedenen Orten unterschiedlich erwärmt.</p>' },
      { icon: '✈️', title: 'Blätter wie Flugzeugflügel', focus: ['pale', 'mozzo', 'vento'], view: { rx: 0.1, ry: -1.2 },
        html: '<p>Die <b>Rotorblätter</b> haben die Form eines Flugzeugflügels. Der Wind, der über ihre Oberfläche strömt, erzeugt einen Schub zur Seite, der sie <b>dreht</b>, genau wie der Auftrieb, der ein Flugzeug fliegen lässt.</p>' },
      { icon: '🐢', title: 'Langsam, aber superstark', focus: ['mozzo', 'albero', 'navicella'], view: { rx: 0.25, ry: -0.5 }, zoom: 1.8,
        html: '<p>Der Rotor dreht sich langsam, etwa 15-mal pro Minute, aber mit riesiger Kraft. Die Bewegung geht auf die <b>langsame Welle</b> über, einen dicken Stahlzylinder im <b>Maschinenhaus</b>.</p>' },
      { icon: '⚙️', title: 'Das Getriebe', focus: ['moltiplicatore', 'albero', 'freno'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.1,
        html: '<p>Die <b>Zahnräder</b> des Getriebes funktionieren wie die Ritzel eines Fahrrads: Das große Rad treibt das kleine rasend schnell an. Aus 15 Umdrehungen werden etwa <b>1500 Umdrehungen pro Minute</b>.</p>' },
      { icon: '🧲', title: 'Der Generator macht den Strom', focus: ['generatore', 'moltiplicatore', 'freno'], view: { rx: 0.25, ry: -0.9 }, zoom: 2.1,
        html: '<p>Im <b>Generator</b> drehen sich Magnete neben Spulen aus Kupferdraht: Die Bewegung erzeugt <b>elektrischen Strom</b>. Das ist wie beim Fahrraddynamo, nur riesig!</p>' },
      { icon: '🧭', title: 'Immer dem Wind entgegen', focus: ['anemometro', 'imbardata', 'navicella'], view: { rx: 0.4, ry: -0.6 }, zoom: 1.8,
        html: '<p>Der <b>Windmesser</b> misst den Wind und die Windfahne seine Richtung. Die Motoren der <b>Windnachführung</b> drehen das ganze Maschinenhaus, damit die Blätter gegen den Wind stehen.</p>' },
      { icon: '🔌', title: 'Vom Rotor bis zur Steckdose', focus: ['corrente', 'torre', 'trasformatore', 'fondazione'], view: { rx: 0.2, ry: -0.6 },
        html: '<p>Der Strom läuft durch die Kabel im <b>Turm</b> nach unten, der <b>Transformator</b> erhöht die Spannung, und das Stromnetz bringt ihn bis in unsere Häuser.</p><p class="tip">🌍 Windenergie ist <b>erneuerbar</b>: Der Wind geht nie aus und erzeugt weder Rauch noch CO₂.</p>' }
    ],
    facts: [
      { icon: '📏', title: 'Riesen', html: 'Die größten Anlagen sind über <b>250 Meter</b> hoch (fast so hoch wie der Eiffelturm), und eine einzige Umdrehung der Blätter kann ein Haus zwei Tage lang mit Strom versorgen.' },
      { icon: '🌊', title: 'Mitten im Meer', html: 'Viele Windräder baut man auf offener See (<b>Offshore</b>), wo der Wind stärker und beständiger ist. Auch in Italien, vor Tarent, gibt es einen Windpark im Meer.' },
      { icon: '🏛️', title: 'Eine alte Geschichte', html: 'Die ersten Windmühlen wurden vor mehr als 1000 Jahren in Persien gebaut. Die holländischen Mühlen pumpten auch das Wasser von den Feldern.' },
      { icon: '🔇', title: 'Sie halten von selbst an', html: 'Bei wenig Wind (unter 10 km/h) drehen sich die Blätter nicht; bei zu starkem Wind stellen sie sich „auf Kante“ und bleiben stehen, damit nichts kaputtgeht.' },
      { icon: '♻️', title: 'Zwanzig Jahre Arbeit', html: 'Ein Windrad arbeitet etwa 20–25 Jahre. In wenigen Monaten erzeugt es schon die Energie, die für seinen Bau nötig war.' }
    ],
    quiz: [
      { type: 'mc', q: 'Welche Art von Energie wandelt ein Windrad um?', options: ['Die Energie des Windes in elektrische Energie', 'Elektrische Energie in Wind', 'Wärme in Licht', 'Kohle in Strom'], answer: 0, explain: 'Die Bewegungsenergie des Windes wird zu elektrischer Energie.' },
      { type: 'mc', q: 'Wozu dient das Getriebe?', options: ['Um die Rotorblätter zu bremsen', 'Um den Generator viel schneller als die Blätter zu drehen', 'Um den Wind zu messen', 'Um den Turm zu kühlen'], answer: 1, explain: 'Mit den Zahnrädern macht es aus 15 Umdrehungen pro Minute etwa 1500.' },
      { type: 'tf', q: 'Windenergie ist eine erneuerbare Energiequelle.', answer: true, explain: 'Der Wind geht nie aus, und die Anlage erzeugt keine Abgase.' },
      { type: 'mc', q: 'Welcher Teil erzeugt den elektrischen Strom?', options: ['Der Turm', 'Der Windmesser', 'Der Generator', 'Das Fundament'], answer: 2, explain: 'Im Generator erzeugen die sich drehenden Magnete Strom in den Kupferspulen.' },
      { type: 'mc', q: 'Warum haben die Rotorblätter die Form eines Flugzeugflügels?', options: ['Damit sie schöner aussehen', 'Weil der vorbeiströmende Wind einen Schub erzeugt, der sie dreht', 'Damit sie mehr wiegen', 'Damit sie Schatten spenden'], answer: 1, explain: 'Wie der Auftrieb eines Flügels dreht der seitliche Schub den Rotor.' },
      { type: 'order', q: 'Bring den Weg der Energie in die richtige Reihenfolge', items: ['Wind', 'Rotorblätter', 'Langsame Welle', 'Getriebe', 'Generator', 'Stromnetz'], explain: 'Der Wind dreht die Rotorblätter; die Drehung wird beschleunigt und in Strom verwandelt.' }
    ]
  });
})();
