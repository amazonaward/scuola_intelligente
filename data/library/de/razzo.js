/* Il razzo a due stadi con capsula (modello generico ispirato ai lanciatori reali). Asse verticale = y. */
(function () {
  /* serbatoio con fondi bombati (profilo di rivoluzione) */
  const tank = (r, h) => ({ t: 'lathe', n: 28, pts: [[0, -h / 2 - r * 0.5], [r * 0.55, -h / 2 - r * 0.42], [r * 0.85, -h / 2 - r * 0.22], [r, -h / 2], [r, h / 2], [r * 0.85, h / 2 + r * 0.22], [r * 0.55, h / 2 + r * 0.42], [0, h / 2 + r * 0.5]] });
  const ring5 = [[0, 0], [0.3, 0], [-0.3, 0], [0, 0.3], [0, -0.3]];
  const bell = (s) => ({ t: 'lathe', ds: true, n: 24, pts: [[0.07 * s, 0], [0.09 * s, -0.08 * s], [0.14 * s, -0.25 * s], [0.19 * s, -0.42 * s]] });
  const fin = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [{ t: 'extrude', d: 0.05, pts: [[0.55, 0.9], [0.55, 0], [1.05, -0.12], [1.05, 0.25]], color: '#1f2937' }] });
  const flame = (x, z) => ({ t: 'group', pos: [x, -0.72, z], anim: [{ type: 'scale', axis: 'y', from: 1, to: 1.25, wave: 'sin01', rate: 7, phase: (x + z) * 3, pivot: [0, 0.55, 0] }], shapes: [
    { t: 'cone', r: 0.19, h: 1.1, n: 16, rot: [180, 0, 0], color: '#f97316', alpha: 0.82 },
    { t: 'cone', r: 0.1, h: 0.75, n: 12, rot: [180, 0, 0], pos: [0, 0.17, 0], color: '#fde047' }
  ] });

  LIBRARY({
    lang: 'de',
    id: 'razzo',
    title: 'Die Rakete',
    intro: 'Um ins Weltall zu kommen, muss man mit <b>28 000 km/h</b> rasen! Die Rakete verbrennt tonnenweise Treibstoff und stößt heiße Gase nach unten aus: So fliegt sie nach oben. Nimm sie Stufe für Stufe auseinander.',
    model: {
      rx: 0.12, ry: -0.5, speed: 0.6, height: 520, bg: 'sky',
      parts: [
        { id: 'stadio-1', name: 'Erste Stufe', color: '#f8fafc', explode: [0, -1.5, 0],
          info: '<p>Das ist der größte und schwerste Teil: Er enthält viel Treibstoff und die stärksten Triebwerke. Er arbeitet in den ersten <b>2–3 Minuten</b>, dann löst er sich ab und fällt zurück.</p>',
          more: '<p>Beim Start muss die erste Stufe die ganze Rakete anheben, die Hunderte Tonnen wiegen kann. Einige moderne erste Stufen kehren zurück und <b>landen aufrecht</b>, um wiederverwendet zu werden!</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 3.6, n: 36, pos: [0, 1.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 3.5, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 0.12, 0], color: '#111827' }, { t: 'lathe', n: 36, ds: true, pts: [[0.55, 0], [0.62, -0.3]], color: '#334155' } ].concat([45, 135, 225, 315].map(fin)) },
        { id: 'ossidante-1', name: 'Sauerstofftank (1. Stufe)', label: 'Flüssigsauerstoff', color: '#7dd3fc', pos: [0, 2.6, 0], explode: [-1.1, -1.5, 0],
          info: '<p>Er enthält <b>flüssigen Sauerstoff</b>, eiskalt: −183 °C! Im Weltall gibt es keine Luft, also muss die Rakete auch den Sauerstoff zum Verbrennen des Treibstoffs mitnehmen.</p>',
          more: '<p>Der Sauerstoff, der zum Verbrennen nötig ist, heißt <b>Oxidator</b>. Damit er flüssig bleibt, muss er unter −183 °C bleiben: Deshalb sind die Tanks isoliert, und man sieht Eis auf der Haut der Rakete.</p>',
          shapes: [ tank(0.48, 1.3) ] },
        { id: 'carburante-1', name: 'Treibstofftank (1. Stufe)', label: 'Treibstoff', color: '#fb923c', pos: [0, 1.05, 0], explode: [1.1, -1.5, 0],
          info: '<p>Er enthält den <b>Treibstoff</b>, zum Beispiel gereinigtes Kerosin (ähnlich dem Flugzeugtreibstoff) oder flüssiges Methan.</p>',
          shapes: [ tank(0.48, 0.75), { t: 'cyl', r: 0.05, h: 2.6, n: 10, pos: [0.25, 0.7, 0.25], color: '#94a3b8' } ] },
        { id: 'motori-1', name: 'Triebwerke der 1. Stufe', label: 'Triebwerke', color: '#9ca3af', pos: [0, -0.02, 0], explode: [0, -1.7, 0],
          info: '<p>In den Triebwerken drücken kräftige <b>Pumpen</b> Treibstoff und Sauerstoff in die <b>Brennkammer</b>, wo sie bei mehr als 3000 °C verbrennen.</p>',
          more: '<p>Die Turbopumpen drehen sich mit Zehntausenden Umdrehungen pro Minute: Sie würden ein Schwimmbecken in wenigen Sekunden leeren! Die Triebwerke können sich auch etwas neigen, um die Rakete zu <b>lenken</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.08, n: 36, pos: [0, 0.2, 0], color: '#475569' } ].concat(ring5.map(([x, z]) => ({ t: 'group', pos: [x, 0, z], shapes: [
            { t: 'cyl', r: 0.085, h: 0.22, n: 16 }, { t: 'box', s: [0.08, 0.12, 0.08], pos: [0.1, 0.06, 0], color: '#64748b' } ] }))) },
        { id: 'ugelli-1', name: 'Düsen', color: '#475569', pos: [0, -0.12, 0], explode: [0, -1.85, 0],
          info: '<p>Das sind die großen „Glocken“ unter den Triebwerken. Das heiße Gas kommt zusammengepresst heraus und weitet sich dann in der Düse aus, wobei es auf über 10 000 km/h <b>beschleunigt</b>.</p>',
          more: '<p>Die Glockenform (<b>Laval</b>-Düse) verwandelt die Wärme der Gase in Geschwindigkeit. Je schneller die Gase austreten, desto mehr Schub bekommt die Rakete.</p>',
          shapes: ring5.map(([x, z]) => Object.assign(bell(1), { pos: [x, 0, z] })) },
        { id: 'fiamma', name: 'Strahl heißer Gase', label: 'Strahl', color: '#f97316', explode: [0, -1.85, 0],
          info: '<p>Die Rakete stößt die Gase <b>nach unten</b> aus, und die Gase schieben die Rakete <b>nach oben</b>: Das ist das Prinzip von Aktion und Reaktion.</p>',
          shapes: ring5.map(([x, z]) => flame(x, z)) },
        { id: 'stadio-2', name: 'Zweite Stufe', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>Sie zündet, wenn sich die erste Stufe gelöst hat. Sie arbeitet im Vakuum, fast ohne Luft, und bringt die Nutzlast bis in den <b>Orbit</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 2.1, n: 36, pos: [0, 4.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.18, n: 36, pos: [0, 3.84, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.12, n: 36, pos: [0, 5.8, 0], color: '#cbd5e1' } ] },
        { id: 'ossidante-2', name: 'Sauerstofftank (2. Stufe)', label: 'Sauerstoff 2', color: '#7dd3fc', pos: [0, 5.2, 0], explode: [-1.0, 0, 0],
          info: '<p>Flüssiger Sauerstoff für die zweite Stufe: ein kleinerer Tank, weil die Rakete jetzt viel leichter ist.</p>', shapes: [ tank(0.46, 0.45) ] },
        { id: 'carburante-2', name: 'Treibstofftank (2. Stufe)', label: 'Treibstoff 2', color: '#fb923c', pos: [0, 4.35, 0], explode: [1.0, 0, 0],
          info: '<p>Treibstoff für die zweite Stufe. Oft nimmt man <b>flüssigen Wasserstoff</b>, der federleicht, aber eiskalt ist (−253 °C).</p>', shapes: [ tank(0.46, 0.25) ] },
        { id: 'motore-2', name: 'Triebwerk der 2. Stufe', label: 'Triebwerk 2', color: '#94a3b8', pos: [0, 3.78, 0], explode: [0, -0.45, 0],
          info: '<p>Ein einzelnes Triebwerk mit einer <b>sehr langen Düse</b>: Im Vakuum können sich die Gase stärker ausdehnen und schieben besser.</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.2, n: 16, pos: [0, 0.1, 0] }, Object.assign(bell(1.9), { pos: [0, 0, 0], color: '#64748b' }) ] },
        { id: 'modulo-servizio', name: 'Servicemodul', color: '#e5e7eb', pos: [0, 6.18, 0], explode: [0, 0.8, 0],
          info: '<p>Es ist der „Keller“ der Kapsel: Es enthält Atemsauerstoff, Wasser, Batterien und kleine Triebwerke zum Manövrieren im Weltall.</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 0.6, n: 36 }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [0.85, 0, 0], color: '#1e3a8a' }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [-0.85, 0, 0], color: '#1e3a8a' },
            { t: 'cone', r: 0.12, h: 0.18, n: 12, pos: [0, -0.38, 0], rot: [180, 0, 0], color: '#475569' } ] },
        { id: 'capsula', name: 'Besatzungskapsel', label: 'Kapsel', color: '#cbd5e1', pos: [0, 6.5, 0], explode: [0, 1.3, 0],
          info: '<p>Hier reisen die <b>Astronauten</b>. Bei der Rückkehr taucht sie, geschützt von einem <b>Hitzeschild</b>, in die Atmosphäre ein und sinkt an Fallschirmen herab.</p>',
          more: '<p>Beim Wiedereintritt wird die Luft vor der Kapsel glühend heiß: über 2500 °C! Der Hitzeschild verbrennt langsam und nimmt die Wärme mit.</p>',
          shapes: [ { t: 'cyl', r: 0.5, r2: 0.2, h: 0.75, n: 36, pos: [0, 0.375, 0] }, { t: 'cyl', r: 0.5, h: 0.05, n: 36, pos: [0, -0.02, 0], color: '#78350f' },
            { t: 'box', s: [0.12, 0.12, 0.02], pos: [0, 0.45, 0.385], rot: [-22, 0, 0], color: '#0f172a', decal: 1 } ] },
        { id: 'torre', name: 'Rettungsturm', label: 'Rettungsturm', color: '#ef4444', pos: [0, 7.25, 0], explode: [0, 1.9, 0],
          info: '<p>Das ist eine kleine Notfallrakete: Geht beim Start etwas schief, <b>reißt sie die Kapsel weg</b> und bringt sie in wenigen Sekunden weit fort.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [0.08, 0.27, 0], rot: [0, 0, -8] }, { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [-0.08, 0.27, 0], rot: [0, 0, 8] },
            { t: 'cyl', r: 0.08, h: 0.45, n: 16, pos: [0, 0.75, 0] }, { t: 'cone', r: 0.08, h: 0.2, n: 16, pos: [0, 1.07, 0] } ] }
      ]
    },
    steps: [
      { icon: '⛽', title: 'Volltanken: Treibstoff und Sauerstoff', focus: ['ossidante-1', 'carburante-1', 'ossidante-2', 'carburante-2'], explode: 0.4,
        html: '<p>Fast die ganze Rakete ist <b>Tank</b>! Zum Verbrennen braucht man zwei Zutaten: den <b>Treibstoff</b> und den <b>Sauerstoff</b>. Auf der Erde steckt der Sauerstoff in der Luft, aber im Weltall gibt es keinen: Die Rakete nimmt ihn mit, flüssig und eiskalt.</p>' },
      { icon: '🔥', title: 'Zündung!', focus: ['motori-1', 'ugelli-1', 'fiamma'], explode: 0, view: { rx: -0.1, ry: -0.5 },
        html: '<p>Die Pumpen drücken Treibstoff und Sauerstoff in die <b>Brennkammer</b>. Sie verbrennen bei mehr als 3000 °C und werden zu glühend heißen Gasen, die hinauswollen.</p><p>Die <b>Düsen</b> lassen sie rasend schnell nach unten austreten.</p>' },
      { icon: '🎈', title: 'Aktion und Reaktion', focus: ['fiamma', 'ugelli-1', 'stadio-1'], explode: 0,
        html: '<p>Hast du schon einmal einen aufgeblasenen Luftballon losgelassen? Die Luft strömt auf der einen Seite heraus, und der Ballon fliegt auf der anderen davon. Die Rakete macht dasselbe!</p><p class="tip">🍎 Das ist das <b>dritte Newton\'sche Gesetz</b>: Jede Kraft erzeugt eine gleich große Gegenkraft. Man braucht keine Luft, um sich „abzustützen“: Es funktioniert auch im Vakuum.</p>' },
      { icon: '✂️', title: 'Die erste Stufe löst sich', focus: ['stadio-1', 'ossidante-1', 'carburante-1', 'motori-1', 'ugelli-1', 'fiamma', 'stadio-2'], explode: 1,
        html: '<p>Nach etwa 2–3 Minuten sind die Tanks der ersten Stufe leer. Sie weiter mitzuschleppen wäre nur unnützes Gewicht: Die erste Stufe <b>klinkt sich aus</b> und fällt zurück.</p><p>So ist der Rest der Rakete viel leichter und beschleunigt leichter.</p>' },
      { icon: '🌍', title: 'Im Orbit mit der zweiten Stufe', focus: ['stadio-2', 'motore-2', 'ossidante-2', 'carburante-2'], explode: 0.6,
        html: '<p>Die <b>zweite Stufe</b> zündet und schiebt bis auf etwa <b>28 000 km/h</b>. Bei dieser Geschwindigkeit „fällt“ die Kapsel immer weiter um die Erde herum, ohne sie je zu berühren: Sie ist im <b>Orbit</b>!</p>' },
      { icon: '👩‍🚀', title: 'Die Kapsel und die Rückkehr', focus: ['capsula', 'modulo-servizio', 'torre'], explode: 0.5, view: { rx: 0.3, ry: -0.4 },
        html: '<p>Der <b>Rettungsturm</b> schützt die Astronauten beim Start und wird dann abgeworfen. Im Weltall liefert das <b>Servicemodul</b> Luft, Wasser und Energie.</p><p>Für die Rückkehr taucht die Kapsel mit dem <b>Hitzeschild</b> in die Atmosphäre ein und sinkt an Fallschirmen herab.</p>' }
    ],
    facts: [
      { icon: '🌕', title: 'Der Riese Saturn V', html: 'Die Rakete, die 1969 die Menschen zum Mond brachte, war 110 Meter hoch, so hoch wie ein Hochhaus mit 36 Stockwerken, und wog fast 3000 Tonnen.' },
      { icon: '🇮🇹', title: 'Eine italienische Rakete', html: '<b>Vega</b> ist eine europäische Trägerrakete, die in Italien, in Colleferro (bei Rom), entworfen und gebaut wurde. Sie bringt kleine Satelliten in den Orbit.' },
      { icon: '🔁', title: 'Raketen, die landen', html: 'Seit 2015 kehren manche erste Stufen zurück und landen senkrecht auf einer Plattform, sogar mitten im Meer, um wiederverwendet zu werden.' },
      { icon: '🏎️', title: 'Schneller als eine Gewehrkugel', html: 'Um in einem niedrigen Orbit zu bleiben, braucht man etwa 7,8 km pro Sekunde: Du wärst in etwas mehr als einer Minute von Mailand in Rom!' }
    ],
    quiz: [
      { type: 'mc', q: 'Warum nimmt die Rakete flüssigen Sauerstoff mit?', options: ['Damit die Astronauten beim Start atmen können', 'Weil es im Weltall keine Luft gibt, um den Treibstoff zu verbrennen', 'Um die Triebwerke zu kühlen', 'Um die blaue Flamme zu erzeugen'], answer: 1, explain: 'Ohne Sauerstoff brennt der Treibstoff nicht, und im Weltall gibt es keine Luft: Die Rakete muss auch den Oxidator mitnehmen.' },
      { type: 'mc', q: 'Welches Gesetz erklärt, wie eine Rakete fliegt?', options: ['Das Archimedische Prinzip', 'Das dritte Newton\'sche Gesetz (Aktion und Reaktion)', 'Galileis Fallgesetz', 'Das Ohm\'sche Gesetz'], answer: 1, explain: 'Die nach unten gestoßenen Gase schieben die Rakete nach oben: Aktion und Reaktion.' },
      { type: 'tf', q: 'Eine Rakete braucht Luft, um sich vorwärts zu schieben.', answer: false, explain: 'Die Rakete drückt gegen ihre eigenen Gase, nicht gegen die Luft: Es funktioniert auch im Vakuum, sogar besser.' },
      { type: 'mc', q: 'Warum löst sich die erste Stufe ab?', options: ['Weil sie kaputt ist', 'Weil ihre Tanks leer sind und sie nur unnützes Gewicht wäre', 'Um Platz für die Astronauten zu schaffen', 'Um langsamer zu werden'], answer: 1, explain: 'Wenn man das leere Gewicht loswird, kann der Rest der Rakete stärker beschleunigen.' },
      { type: 'mc', q: 'Wozu dient der Hitzeschild der Kapsel?', options: ['Er schützt sie vor der Hitze beim Wiedereintritt in die Atmosphäre', 'Er schützt sie vor Regen', 'Er lässt sie schwimmen', 'Er erzeugt Strom'], answer: 0, explain: 'Beim Wiedereintritt mit hoher Geschwindigkeit wird die Luft vor der Kapsel sehr heiß: Der Schild schützt die Astronauten.' }
    ]
  });
})();
