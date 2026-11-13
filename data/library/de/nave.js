/* La nave portacontainer. Prua verso +x, alto = +y, la linea di galleggiamento è a y = 0.
   Lo scafo è fatto da "piante" (vista dall'alto) estruse in verticale. La nave beccheggia piano sulle onde. */
(function () {
  const TAU = Math.PI * 2;
  const plan = (s, sx) => [[-3.5, -0.75], [2.0, -0.75], [2.7, -0.62], [3.2, -0.38], [3.52, -0.12], [3.6, 0], [3.52, 0.12], [3.2, 0.38], [2.7, 0.62], [2.0, 0.75], [-3.5, 0.75], [-3.62, 0.5], [-3.62, -0.5]]
    .map(([x, z]) => [x * (sx || 1), z * s]);
  /* estrude una pianta tra y0 e y1 */
  const slab = (pts, y0, y1, color, extra) => Object.assign({ t: 'extrude', d: y1 - y0, pts, rot: [90, 0, 0], pos: [0, (y0 + y1) / 2, 0], color }, extra || {});
  const BOB = { type: 'move', dir: [0, 1, 0], amp: 0.035, wave: 'sin', rate: 0.5 };
  const PAL = ['#ef4444', '#2563eb', '#f59e0b', '#16a34a', '#64748b', '#0891b2', '#b91c1c', '#7c3aed', '#ea580c', '#0f766e'];
  const boxes = [];
  for (let b = 0; b < 11; b++) {
    const x = -1.65 + b * 0.43, rows = x > 2.3 ? [-0.18, 0.18] : x > 1.9 ? [-0.48, -0.16, 0.16, 0.48] : [-0.54, -0.18, 0.18, 0.54];
    rows.forEach((z, r) => { for (let t = 0; t < (x > 2.3 ? 2 : 3); t++) boxes.push({ t: 'box', div: 1, s: [0.41, 0.25, 0.34], pos: [x, 0.7 + t * 0.26, z], color: PAL[(b * 7 + r * 3 + t * 5) % PAL.length] }); });
  }
  const winds = [0.95, 1.25, 1.55].flatMap((y) => [1, -1].map((s) => ({ t: 'box', s: [0.62, 0.07, 0.01], pos: [-2.55, y, s * 0.6], color: '#1e293b', decal: 1 }))).concat([0.95, 1.25, 1.55].map((y) => ({ t: 'box', s: [0.01, 0.07, 1.0], pos: [-2.19, y, 0], color: '#1e293b', decal: 1 })));
  const smoke = Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.12, n: 6, m: 10, pos: [-3.15, 1.75, 0], color: '#9ca3af',
    anim: [{ type: 'move', dir: [-0.6, 1, 0], amp: 0.9, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'scale', from: 0.5, to: 1.6, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 6 }] }));
  const arrow = (pos, down, len, color) => ({ t: 'group', pos, rot: down ? [180, 0, 0] : [0, 0, 0], anim: { type: 'scale', from: 0.95, to: 1.05, wave: 'sin01', rate: 0.5 },
    shapes: [ { t: 'cyl', r: 0.07, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.17, h: 0.32, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    id: 'nave',
    lang: 'de',
    title: 'Das Schiff',
    intro: 'Ein Containerschiff ist so lang wie <b>4 Fußballfelder</b>, besteht aus Stahl und trägt Tausende Container … und trotzdem schwimmt es! Entdecke das Geheimnis des Archimedes, den Propeller, das Ruder und den Ballast.',
    model: {
      rx: 0.25, ry: -0.6, speed: 0.4, height: 460, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'mare', name: 'Meer', color: '#0284c7', alpha: 0.22, explode: [0, 0, 0], chip: false, noLabel: true,
          info: '<p>Das Meerwasser. Der Teil des Schiffes unter Wasser heißt <b>Unterwasserschiff</b>, der Teil darüber <b>Überwasserschiff</b>.</p>',
          shapes: [ { t: 'box', s: [9.5, 1.1, 3.6], pos: [0, -0.56, 0], div: 1 }, { t: 'box', s: [9.5, 0.01, 3.6], pos: [0, -0.005, 0], color: '#7dd3fc', alpha: 0.35, div: 4 } ] },
        { id: 'scafo', name: 'Rumpf (Überwasserschiff)', label: 'Rumpf', color: '#1e3a8a', anim: BOB, explode: [0, 0.4, 0],
          info: '<p>Das ist die große Stahl-„Schale“ des Schiffes. Der Teil über Wasser ist oft dunkel; oben liegt das <b>Deck</b>, auf dem die Container stehen.</p>',
          more: '<p>Der Rumpf besteht aus Stahlblechen, die auf ein „Skelett“ aus Trägern (die <b>Spanten</b> und der <b>Kiel</b>) geschweißt sind. Viele Schiffe haben einen <b>Doppelboden</b>: Wenn der äußere Rumpf bricht, dringt nicht sofort Wasser ins Schiff.</p>',
          shapes: [ slab(plan(1), 0, 0.56), slab(plan(0.99), 0.56, 0.59, '#475569'),
            slab(plan(1).filter(([x]) => x > 2.4).concat([[2.4, 0.71], [2.4, -0.71]]), 0.56, 0.78, '#1e3a8a'),
            { t: 'box', s: [0.6, 0.06, 0.012], pos: [3.0, 0.42, 0.53], rot: [0, -25, 0], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, 0.757], color: '#f8fafc', decal: 1 }, { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, -0.757], color: '#f8fafc', decal: 1 } ] },
        { id: 'carena', name: 'Schiffsboden (Unterwasserschiff)', label: 'Schiffsboden', color: '#b91c1c', anim: BOB, explode: [0, -0.45, 0],
          info: '<p>Das ist der Teil des Rumpfes <b>unter Wasser</b>, rot gestrichen mit einer Spezialfarbe, die verhindert, dass sich Algen und Muscheln festsetzen.</p>',
          more: '<p>Je voller das Schiff beladen ist, desto tiefer sinkt der Schiffsboden ein. An der Bordwand gibt es eine Markierung, die <b>Freibordmarke</b> (Plimsoll-Linie), die zeigt, wie tief das Schiff in den verschiedenen Meeren und Jahreszeiten sicher einsinken darf.</p>',
          shapes: [ slab(plan(0.97, 0.995), -0.36, 0), slab(plan(0.85, 0.97), -0.52, -0.36), slab(plan(0.6, 0.93), -0.58, -0.52),
            { t: 'sphere', r: 1, n: 10, m: 16, pos: [3.4, -0.42, 0], scale: [0.36, 0.13, 0.13] } ] },
        { id: 'container', name: 'Container', color: '#ef4444', anim: BOB, explode: [0, 1.0, 0],
          info: '<p>Die <b>Container</b> sind große Stahlkisten, alle in der gleichen Größe. Man stapelt sie wie Bausteine, und sie wandern vom Schiff auf den Zug und den Lastwagen, ohne geöffnet zu werden.</p>',
          more: '<p>Ein Standardcontainer ist 20 Fuß lang (etwa 6 m): Er heißt <b>TEU</b>. Die größten Schiffe tragen mehr als <b>24 000</b> davon! Fast alles, was wir kaufen, ist in einem Container gereist.</p>',
          shapes: boxes },
        { id: 'ponte-comando', name: 'Kommandobrücke', label: 'Kommandobrücke', color: '#f8fafc', anim: BOB, explode: [-0.4, 0.8, 0],
          info: '<p>Das weiße Gebäude am Heck. Ganz oben liegt die <b>Kommandobrücke</b>, von der aus der Kapitän und die Offiziere das Schiff mit Radar, GPS und Funk steuern. Darunter sind die Kabinen der Besatzung.</p>',
          more: '<p>Um über den Containerstapel hinwegzusehen, muss die Brücke sehr hoch liegen. Die „Flügel“ an den Seiten dienen dazu, die Bordwand zu sehen, wenn man in den Hafen einläuft. Das <b>Radar</b> auf dem Dach „sieht“ andere Schiffe auch nachts und bei Nebel.</p>',
          shapes: [ { t: 'box', s: [0.72, 1.2, 1.2], pos: [-2.55, 1.17, 0] }, { t: 'box', s: [0.5, 0.14, 1.7], pos: [-2.45, 1.72, 0] }, ...winds,
            { t: 'cyl', r: 0.025, h: 0.4, n: 8, pos: [-2.55, 2.0, 0], color: '#475569' }, { t: 'group', pos: [-2.55, 2.2, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'box', s: [0.05, 0.05, 0.45], color: '#1f2937' } ] } ] },
        { id: 'fumaiolo', name: 'Schornstein', color: '#f97316', anim: BOB, explode: [-0.6, 0.9, 0],
          info: '<p>Der „Kamin“ des Schiffes: Hier treten die Abgase des Motors aus. Moderne Schiffe haben Filter, um weniger zu verschmutzen.</p>',
          shapes: [ { t: 'box', s: [0.38, 0.95, 0.42], pos: [-3.15, 1.1, 0] }, { t: 'box', s: [0.4, 0.12, 0.44], pos: [-3.15, 1.52, 0], color: '#111827' }, ...smoke ] },
        { id: 'motore', name: 'Dieselmotor', label: 'Motor', color: '#57534e', anim: BOB, explode: [0, -0.4, 1.2],
          info: '<p>Ganz hinten im Schiff steht ein riesiger Motor, so hoch wie ein Haus mit 4 Stockwerken! Er verbrennt Treibstoff und dreht die <b>Welle</b> des Propellers.</p>',
          more: '<p>Die Motoren großer Schiffe sind sehr langsame <b>Zweitakt</b>-Diesel: Sie drehen sich mit etwa 80–100 Umdrehungen pro Minute und sind ohne Getriebe direkt mit dem Propeller verbunden. Sie können über 80 000 PS leisten.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.5], pos: [-2.45, -0.15, 0] }, ...[-2.75, -2.6, -2.45, -2.3, -2.15].map((x) => ({ t: 'cyl', r: 0.07, h: 0.2, n: 12, pos: [x, 0.18, 0], color: '#78716c' })) ] },
        { id: 'asse', name: 'Propellerwelle', label: 'Welle', color: '#9ca3af', anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], pos: [0, -0.33, 0], explode: [0, -0.4, 1.2],
          info: '<p>Ein langer Stahlzylinder, der die Drehung vom Motor zum Propeller bringt und den Rumpf durch eine wasserdichte Dichtung verlässt.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 1.15, n: 12, rot: [0, 0, 90], pos: [-3.25, 0, 0] }, { t: 'box', s: [0.02, 0.08, 0.02], pos: [-3.25, 0.04, 0], color: '#475569' } ] },
        { id: 'elica', name: 'Propeller', color: '#ca8a04', pos: [-3.78, -0.33, 0], anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], explode: [-0.6, -0.4, 0],
          info: '<p>Der Propeller aus Bronze hat große, angeschraubte Flügel. Beim Drehen schiebt er das Wasser nach <b>hinten</b> und das Wasser schiebt das Schiff nach <b>vorn</b>.</p>',
          more: '<p>Der Propeller eines großen Containerschiffs hat einen Durchmesser von etwa <b>9–10 Metern</b> und wiegt über 100 Tonnen, dreht sich aber langsam. Das ist das dritte Newtonsche Gesetz: Kraft und Gegenkraft, wie wenn du schwimmst und das Wasser mit den Händen wegdrückst.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1.4, 1, 1], color: '#a16207' } ].concat([0, 90, 180, 270].map((a) => ({ t: 'group', rot: [a, 0, 0], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.2, 0], scale: [0.05, 0.2, 0.12], rot: [0, 35, 0] } ] }))) },
        { id: 'timone', name: 'Ruder', color: '#b91c1c', pos: [-3.98, -0.25, 0], anim: [BOB, { type: 'swing', axis: 'y', amp: 22, rate: 0.2 }], explode: [-0.8, -0.3, 0],
          info: '<p>Eine große „Flosse“ hinter dem Propeller. Wenn es sich dreht, lenkt es das Wasser vom Propeller ab und dreht das Heck: So ändert das Schiff die Richtung.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.5, 0.05], pos: [-0.12, 0, 0] }, { t: 'cyl', r: 0.03, h: 0.7, n: 8, pos: [0, 0.15, 0], color: '#475569' } ] },
        { id: 'zavorra', name: 'Ballasttanks', label: 'Ballast', color: '#0369a1', alpha: 0.55, anim: BOB, explode: [0, -0.9, 0],
          info: '<p>Im Doppelboden gibt es große Tanks, die man mit <b>Meerwasser</b> füllen kann. Wenn das Schiff leer ist, lässt der Ballast es tiefer einsinken und macht es <b>stabil</b>.</p>',
          more: '<p>Das Gewicht unten senkt den <b>Schwerpunkt</b>: Das Schiff wird wie ein Stehaufmännchen, das sich wieder aufrichtet. Ballastwasser kann aber kleine Tiere in ferne Meere tragen: Heute muss es vor dem Ablassen <b>gereinigt</b> werden.</p>',
          shapes: [-1.6, -0.4, 0.8, 2.0].map((x) => ({ t: 'group', pos: [x, -0.52, 0], anim: { type: 'scale', axis: 'y', from: 0.15, to: 1, wave: 'sin01', rate: 0.15 }, shapes: [ { t: 'box', s: [1.0, 0.16, 1.1], pos: [0, 0.08, 0] } ] })) },
        { id: 'ancora', name: 'Anker und Kette', label: 'Anker', color: '#374151', anim: BOB, explode: [0.4, 0, 0.4],
          info: '<p>Der <b>Anker</b> wiegt Dutzende Tonnen. Er wird mit einer langen Kette auf den Grund gelassen, krallt sich am Meeresboden fest und hält das Schiff an Ort und Stelle.</p>',
          shapes: [ { t: 'box', s: [0.06, 0.2, 0.02], pos: [3.05, 0.38, 0.47], rot: [0, -32, 0] }, { t: 'box', s: [0.18, 0.05, 0.02], pos: [3.05, 0.27, 0.47], rot: [0, -32, 0] },
            { t: 'cyl', r: 0.05, h: 0.03, n: 12, rot: [90, 0, 0], pos: [3.12, 0.5, 0.42], color: '#111827' } ] },
        { id: 'forze', name: 'Gewicht und Auftrieb des Archimedes', label: 'Kräfte', color: '#22c55e', explode: [0, 0, 0], noLabel: false,
          info: '<p>Der <b>rote</b> Pfeil ist das <b>Gewicht</b> des Schiffes, das es nach unten zieht. Der <b>grüne</b> Pfeil ist der <b>Auftrieb</b> des Wassers nach oben. Wenn beide gleich sind, schwimmt das Schiff.</p>',
          more: '<p><b>Archimedisches Prinzip</b>: Ein eingetauchter Körper erfährt einen Auftrieb nach oben, der so groß ist wie das Gewicht des verdrängten Wassers. Der Rumpf ist innen hohl: Er verdrängt sehr viel Wasser, viel schwerer als der Stahl, aus dem er besteht.</p>',
          shapes: [ arrow([0.2, 2.75, 0], true, 0.75, '#ef4444'), arrow([0.2, -1.75, 0], false, 0.75, '#22c55e') ] }
      ]
    },
    steps: [
      { icon: '🚢', title: 'Eine Stadt aus Stahl, die schwimmt', explode: 0,
        html: '<p>Die großen Containerschiffe transportieren fast alle Waren der Welt: Kleidung, Spielzeug, Handys, Bananen … Sie bestehen aus <b>Stahl</b>, der viel schwerer ist als Wasser. Warum gehen sie dann nicht unter?</p>' },
      { icon: '⚖️', title: 'Das Geheimnis des Archimedes', focus: ['forze', 'carena', 'scafo', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.05 },
        html: '<p>Der Rumpf ist wie eine große <b>leere</b> Kiste: Wenn er ein wenig einsinkt, verdrängt er (schiebt weg) eine große Menge Wasser. Das Wasser drückt das Schiff mit einer Kraft nach oben, die so groß ist wie das <b>Gewicht des verdrängten Wassers</b>.</p><p>Wenn dieser Auftrieb gleich dem Gewicht des Schiffes ist, schwimmt das Schiff.</p><p class="tip">🥣 Probier es aus: Eine Knetkugel geht unter, aber wenn du sie zu einem kleinen Boot formst, schwimmt sie!</p>' },
      { icon: '🐬', title: 'Die Form des Rumpfes und der Wulstbug', focus: ['carena', 'scafo'], explode: 0, view: { rx: -0.25, ry: -0.9 },
        html: '<p>Der Bug ist spitz, um das Wasser zu „durchschneiden“. Unter dem Bug sitzt ein abgerundeter <b>Wulst</b>: Er erzeugt eine Welle, die die des Schiffes verringert, sodass weniger Treibstoff verbraucht wird.</p><p>Der Teil unter Wasser, der <b>Schiffsboden</b>, ist rot: Die Spezialfarbe hält Algen und Muscheln fern.</p>' },
      { icon: '📦', title: 'Ladung und Ballast', focus: ['container', 'zavorra', 'carena'], explode: 0.3, view: { rx: 0.25, ry: -0.5 },
        html: '<p>Die <b>Container</b> werden an Deck und in den Laderäumen gestapelt. Je voller das Schiff beladen ist, desto tiefer sinkt es ein. Wenn es leer ist, füllt man unten die <b>Ballasttanks</b> mit Wasser: Das Gewicht ganz unten macht es stabil und es kippt nicht um.</p>' },
      { icon: '⚙️', title: 'Motor, Welle und Propeller', focus: ['motore', 'asse', 'elica', 'fumaiolo'], explode: 0.2, view: { rx: 0.1, ry: -1.2 },
        html: '<p>Ein riesiger <b>Dieselmotor</b> dreht eine lange <b>Welle</b>, die aus dem Rumpf austritt. Ganz hinten sitzt der <b>Propeller</b>: Seine Flügel schieben das Wasser nach hinten, und das Wasser schiebt das Schiff nach vorn.</p>' },
      { icon: '🧭', title: 'Ruder und Kommandobrücke', focus: ['timone', 'ponte-comando', 'elica'], explode: 0, view: { rx: 0.3, ry: -2.2 },
        html: '<p>Von der <b>Kommandobrücke</b> ganz oben steuert der Kapitän das Schiff mit Radar und GPS. Wenn man das <b>Ruder</b> dreht, wird das vom Propeller geschobene Wasser abgelenkt und das Schiff ändert die Richtung, sehr langsam: Zum Anhalten kann mehr als ein Kilometer nötig sein!</p>' },
      { icon: '⚓', title: 'Im Hafen: der Anker', focus: ['ancora', 'scafo'], explode: 0, zoom: 1.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>Wenn es darauf wartet, in den Hafen einzulaufen, lässt das Schiff den <b>Anker</b> hinab: Er wiegt Dutzende Tonnen und krallt sich mit seiner langen Kette am Meeresboden fest.</p><p>Im Hafen laden riesige Kräne die Container einen nach dem anderen aus, bis zu 30 pro Stunde und Kran.</p>' }
    ],
    facts: [
      { icon: '🛁', title: 'Heureka!', html: 'Man erzählt, dass <b>Archimedes</b> von Syrakus sein Prinzip entdeckte, als er in die Badewanne stieg: Als er das Wasser steigen sah, rannte er auf die Straße und rief „Heureka!“ („Ich hab’s gefunden!“).' },
      { icon: '🏟️', title: 'Länger als 4 Felder', html: 'Die größten Containerschiffe sind etwa <b>400 Meter</b> lang und 60 breit: mehr als der umgelegte Eiffelturm.' },
      { icon: '🌍', title: '90 % der Waren', html: 'Etwa <b>90 %</b> der weltweit gehandelten Waren reisen übers Meer. Genua, Triest und Gioia Tauro gehören zu den wichtigsten Häfen Italiens.' },
      { icon: '🧂', title: 'Salzwasser, Süßwasser', html: 'Im salzigen Meerwasser schwimmen Schiffe etwas höher als in Flüssen: Salzwasser ist dichter und trägt stärker.' }
    ],
    quiz: [
      { type: 'mc', q: 'Warum schwimmt ein Schiff aus Stahl?', options: ['Weil Stahl schwimmt', 'Weil der hohle Rumpf viel Wasser verdrängt, das ihn nach oben drückt', 'Weil der Propeller es oben hält', 'Weil das Meer salzig ist'], answer: 1, explain: 'Archimedisches Prinzip: Der Auftrieb ist so groß wie das Gewicht des vom Rumpf verdrängten Wassers.' },
      { type: 'mc', q: 'Was schiebt das Schiff nach vorn?', options: ['Das Ruder', 'Der Propeller, der das Wasser nach hinten schiebt', 'Der Schornstein', 'Der Anker'], answer: 1, explain: 'Kraft und Gegenkraft: Der Propeller schiebt das Wasser nach hinten und das Wasser schiebt das Schiff nach vorn.' },
      { type: 'tf', q: 'Die Ballasttanks machen das Schiff stabiler, wenn es leer ist.', answer: true, explain: 'Das Ballastwasser bringt Gewicht nach unten und senkt den Schwerpunkt.' },
      { type: 'mc', q: 'Wie heißt der Teil des Rumpfes, der unter Wasser liegt?', options: ['Unterwasserschiff (Schiffsboden)', 'Überwasserschiff', 'Kommandobrücke', 'Schornstein'], answer: 0, explain: 'Das Unterwasserschiff, also der Schiffsboden, ist der eingetauchte Teil; das Überwasserschiff ist der Teil außerhalb des Wassers.' },
      { type: 'mc', q: 'Wofür ist das Ruder da?', options: ['Zum Bremsen', 'Um die Richtung zu ändern', 'Zum Schwimmen', 'Zum Laden der Container'], answer: 1, explain: 'Indem es das vom Propeller geschobene Wasser ablenkt, dreht das Ruder das Schiff.' },
      { type: 'mc', q: 'Wer entdeckte das Prinzip des Schwimmens?', options: ['Galileo Galilei', 'Archimedes', 'Leonardo da Vinci', 'Isaac Newton'], answer: 1, explain: 'Archimedes von Syrakus, vor mehr als 2200 Jahren.' }
    ]
  });
})();
