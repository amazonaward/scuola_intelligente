/* La lampadina: a sinistra (x = -0.9) una lampadina a incandescenza, a destra (x = +0.9) una lampadina LED.
   Entrambe con attacco a vite E27 (da y = -0.55 a 0) avvitate in un portalampada. Alto = +y. */
(function () {
  const XI = -0.9, XL = 0.9, TAU = Math.PI * 2;
  const GLASS = [[0.25, 0], [0.26, 0.15], [0.31, 0.35], [0.43, 0.6], [0.54, 0.85], [0.59, 1.05], [0.58, 1.25], [0.51, 1.42], [0.38, 1.55], [0.2, 1.63], [0, 1.65]];
  const DOME = [[0.42, 0.5], [0.5, 0.62], [0.56, 0.8], [0.58, 1.0], [0.55, 1.18], [0.47, 1.33], [0.34, 1.44], [0.18, 1.5], [0, 1.52]];
  const thread = (x) => ({ t: 'pipe', r: 0.022, n: 5, caps: false, pts: Array.from({ length: 64 }, (_, i) => { const a = i * 0.55; return [x + 0.26 * Math.cos(a), -0.5 + i * 0.0072, 0.26 * Math.sin(a)]; }) });
  const base = (x) => [ { t: 'cyl', r: 0.255, h: 0.52, n: 28, pos: [x, -0.26, 0], color: '#d1d5db' }, thread(x),
    { t: 'cyl', r: 0.2, r2: 0.24, h: 0.08, n: 24, pos: [x, -0.56, 0], color: '#111827' }, { t: 'sphere', r: 0.07, n: 6, m: 12, hemi: true, rot: [180, 0, 0], pos: [x, -0.6, 0], color: '#9ca3af' } ];
  /* filamento: spirale intorno all'asse x */
  const coil = Array.from({ length: 96 }, (_, i) => { const f = i / 95, a = i * 0.85; return [XI - 0.22 + 0.44 * f, 1.0 + 0.035 * Math.sin(a) - 0.06 * Math.sin(Math.PI * f), 0.035 * Math.cos(a)]; });
  /* corrente: dal contatto in fondo, su per un filo, attraverso il filamento (o il driver), giù per l'altro filo, fino alla vite */
  const PI_ = [[XI, -0.62, 0], [XI, -0.1, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0], [XI + 0.22, 1.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.1, -0.05, 0], [XI + 0.27, -0.1, 0], [XI + 0.27, -0.45, 0]];
  const PL = [[XL, -0.62, 0], [XL, 0.0, 0], [XL - 0.05, 0.15, 0.03], [XL - 0.05, 0.38, 0.03], [XL - 0.2, 0.52, 0], [XL + 0.2, 0.52, 0], [XL + 0.05, 0.38, 0.03], [XL + 0.05, 0.15, 0.03], [XL + 0.12, 0.0, 0], [XL + 0.27, -0.1, 0], [XL + 0.27, -0.45, 0]];
  const electrons = (P, n) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.03, n: 5, m: 8, pos: P[0], color: '#2563eb', anim: { type: 'path', pts: P, wave: 'saw', rate: 0.6, phase: k / n } }));
  /* luce: "pacchetti" che volano via dal centro e svaniscono */
  const rays = (c, dirs, color, len) => dirs.map(([dx, dy, dz], k) => ({ t: 'group', pos: c, anim: [{ type: 'move', dir: [dx, dy, dz], amp: len, wave: 'saw', rate: 1, phase: (k * 0.37) % 1 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1, phase: (k * 0.37) % 1 }],
    shapes: [{ t: 'sphere', r: 0.045, n: 6, m: 8, color }] }));
  const DIRS = Array.from({ length: 12 }, (_, k) => { const a = (k / 12) * TAU; return [Math.cos(a), Math.sin(a), 0.3 * Math.sin(3 * a)]; });
  const UP = Array.from({ length: 10 }, (_, k) => { const a = (k / 10) * TAU, e = 0.35 + 0.5 * ((k * 7) % 10) / 10; return [Math.cos(a) * Math.cos(e), Math.sin(e) + 0.25, Math.sin(a) * Math.cos(e)]; });
  const ledChips = [[0, 0]].concat(Array.from({ length: 8 }, (_, k) => [0.25 * Math.cos(k * TAU / 8), 0.25 * Math.sin(k * TAU / 8)]));

  LIBRARY({
    id: 'lampadina',
    lang: 'de',
    title: 'Die Glühbirne',
    intro: 'Drück den Schalter und … Licht! Links die alte <b>Glühlampe</b> mit einem Draht, der glühend heiß wird; rechts die moderne <b>LED</b>-Lampe, die das gleiche Licht macht und viel weniger verbraucht. Entdecke den Unterschied!',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.5, height: 460,
      parts: [
        { id: 'bulbo', name: 'Glaskolben', label: 'Glaskolben', color: '#e0f2fe', alpha: 0.22, pos: [XI, 0, 0], explode: [-0.6, 0.6, 0],
          info: '<p>Das ist die durchsichtige „Blase“ aus Glas. Darin ist <b>keine Luft</b>: Es ist ein besonderes Gas (Argon) darin, das den Glühfaden nicht verbrennen lässt.</p>',
          more: '<p>Der Sauerstoff aus der Luft würde den glühenden Faden im Nu verbrennen. Deshalb machte man im Inneren zuerst ein <b>Vakuum</b>; später entdeckte man, dass ein <b>Edelgas</b> wie Argon den Faden länger halten lässt.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: GLASS, ds: true } ] },
        { id: 'filamento', name: 'Wolfram-Glühfaden', label: 'Glühfaden', color: '#fde047', explode: [-0.6, 0.35, 0.4],
          info: '<p>Das ist ein hauchdünner Metalldraht, wie eine Feder aufgewickelt. Wenn der Strom hindurchfließt, wird er <b>glühend heiß</b>, bei etwa 2500 °C, und leuchtet gelb.</p>',
          more: '<p>Er besteht aus <b>Wolfram</b>, dem Metall mit dem höchsten Schmelzpunkt (3422 °C). Der Draht ist zweimal um sich selbst gewickelt: Abgewickelt wäre er fast einen Meter lang! Mit der Zeit verdampft das Wolfram, der Draht wird dünner und reißt: Die Glühbirne „brennt durch“.</p>',
          shapes: [ { t: 'pipe', r: 0.01, n: 4, pts: coil, anim: { type: 'blink', color: '#fffbeb', wave: 'sin01', rate: 2 } },
            { t: 'sphere', r: 0.16, n: 8, m: 12, pos: [XI, 0.98, 0], color: '#fef08a', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.5, wave: 'sin01', rate: 2 } } ] },
        { id: 'supporti', name: 'Drähte und Glasstiel', label: 'Haltedrähte', color: '#9ca3af', explode: [-0.6, 0.15, 0.4],
          info: '<p>Zwei Metalldrähte leiten den Strom vom Sockel zum Glühfaden und halten ihn in der Schwebe. Sie sind in einem <b>Glasstiel</b> in der Mitte der Glühbirne befestigt.</p>',
          shapes: [ { t: 'lathe', n: 16, pts: [[0.14, 0], [0.12, 0.15], [0.06, 0.3], [0.045, 0.5], [0, 0.53]], pos: [XI, 0, 0], color: '#cbd5e1', alpha: 0.6 },
            { t: 'pipe', r: 0.008, n: 4, pts: [[XI - 0.04, 0.0, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0]] }, { t: 'pipe', r: 0.008, n: 4, pts: [[XI + 0.04, 0.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.22, 1.0, 0]] },
            { t: 'pipe', r: 0.005, n: 4, pts: [[XI, 0.52, 0], [XI, 0.92, 0]] } ] },
        { id: 'calore', name: 'Wärme', color: '#ef4444', alpha: 0.18, explode: [-0.6, 0.35, 0.4],
          info: '<p>Die Glühlampe wird heiß! Vom verbrauchten Strom werden etwa <b>95 von 100</b> Teilen zu Wärme und nur 5 zu Licht.</p>',
          more: '<p>Ein sehr heißer Körper sendet vor allem <b>Infrarotstrahlen</b> aus, die unsichtbar, aber warm sind: Das sichtbare Licht ist nur ein kleiner Teil. Deshalb wurden Glühlampen in Europa ab 2009 aus den Geschäften genommen.</p>',
          shapes: [0, 0.5].map((ph) => ({ t: 'group', pos: [XI, 0.95, 0], anim: [{ type: 'scale', from: 0.4, to: 1.4, wave: 'saw', rate: 0.5, phase: ph }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: ph }],
            shapes: [{ t: 'sphere', r: 0.62, n: 10, m: 16 }] })) },
        { id: 'luce', name: 'Licht', color: '#facc15', noLabel: false, explode: [0, 0.5, 0],
          info: '<p>Das Licht geht vom glühenden Faden (links) oder von den kleinen LEDs (rechts) aus und reist blitzschnell, mit <b>300 000 km pro Sekunde</b>, in alle Richtungen.</p>',
          shapes: rays([XI, 1.0, 0], DIRS, '#facc15', 1.0).concat(rays([XL, 0.55, 0], UP, '#f8fafc', 1.1)) },
        { id: 'attacco', name: 'Schraubsockel (E27)', label: 'Schraubsockel', color: '#d1d5db', explode: [0, -0.3, 0],
          info: '<p>Der Metallteil mit dem <b>Gewinde</b> wird in die Fassung geschraubt. Der Strom tritt über den <b>Kontakt</b> unten ein und fließt über das Gewinde wieder heraus: Das schwarze Glas dazwischen trennt die beiden.</p>',
          more: '<p>„E27“ bedeutet <b>Edison</b>-Sockel mit 27 mm Durchmesser: Er ist seit mehr als hundert Jahren gleich, deshalb kannst du eine moderne LED-Lampe in eine alte Leuchte einsetzen.</p>',
          shapes: base(XI).concat(base(XL)) },
        { id: 'portalampada', name: 'Fassung und Kabel', label: 'Fassung', color: '#1f2937', alpha: 0.55, explode: [0, -0.6, 0],
          info: '<p>In der Fassung sitzen ein Innengewinde und ein Kontaktplättchen ganz unten. Die beiden Drähte des Kabels, die mit dem <b>Schalter</b> verbunden sind, bringen den Strom zur Glühbirne.</p>',
          more: '<p>Der Schalter öffnet oder schließt den <b>Stromkreis</b>: Der Strom fließt nur, wenn der Weg geschlossen ist, wie ein Ring ohne Unterbrechung. Im Haus beträgt die Spannung 230 Volt: Fass nie eine Fassung an, wenn die Lampe eingeschaltet ist!</p>',
          shapes: [XI, XL].map((x) => ({ t: 'tube', r: 0.34, ri: 0.29, h: 0.45, n: 28, pos: [x, -0.55, 0] })).concat([XI, XL].map((x) => ({ t: 'cyl', r: 0.34, h: 0.08, n: 28, pos: [x, -0.8, 0], alpha: 1 })),
            [ { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XI, -0.84, 0], [XI, -1.15, 0], [-0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XL, -0.84, 0], [XL, -1.15, 0], [0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'box', s: [0.3, 0.12, 0.4], pos: [0, -1.25, 0.3], color: '#f8fafc', alpha: 1 }, { t: 'box', s: [0.1, 0.06, 0.18], pos: [0, -1.17, 0.33], rot: [0, 0, -12], color: '#e2e8f0', alpha: 1 } ]) },
        { id: 'corrente', name: 'Elektrischer Strom', label: 'Strom', color: '#2563eb', noLabel: true, explode: [0, 0, 0],
          info: '<p>Der Strom ist ein Fluss von <b>Elektronen</b>, winzig kleinen Teilchen, die durch die Drähte fließen. Sie treten am Kontakt unten ein, durchqueren den Glühfaden oder die LEDs und treten am Gewinde wieder aus.</p>',
          shapes: electrons(PI_, 12).concat(electrons(PL, 12)) },
        { id: 'diffusore', name: 'Diffusor (Kuppel)', label: 'Diffusor', color: '#f8fafc', alpha: 0.4, pos: [XL, 0, 0], explode: [0.6, 0.65, 0],
          info: '<p>Die weiße Kunststoffkuppel „verteilt“ das Licht der kleinen LEDs, damit es nicht blendet und den ganzen Raum weich beleuchtet.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: DOME, ds: true } ] },
        { id: 'led', name: 'LED-Chip', label: 'LED', color: '#fef08a', pos: [XL, 0.5, 0], explode: [0.6, 0.35, 0.3],
          info: '<p>Das sind viele winzig kleine <b>LEDs</b> auf einer Platine. Eine LED ist ein „Sandwich“ aus besonderen Materialien: Wenn Strom hindurchfließt, sendet sie direkt Licht aus, fast ohne sich zu erwärmen.</p>',
          more: '<p>LED heißt <i>Light Emitting Diode</i>, „lichtemittierende Diode“. Wenn die Elektronen von einer Schicht des <b>Halbleiters</b> in die andere wechseln, setzen sie Energie in Form von blauem Licht frei; eine gelbe <b>Leuchtstoff</b>-Schicht verwandelt es in weißes Licht. Eine LED-Lampe verbraucht etwa 1/8 einer Glühlampe und hält 15–25 Mal länger.</p>',
          shapes: [ { t: 'cyl', r: 0.4, h: 0.04, n: 32, color: '#e5e7eb' } ].concat(ledChips.map(([x, z]) => ({ t: 'box', s: [0.08, 0.03, 0.08], pos: [x, 0.03, z], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 2 } }))) },
        { id: 'driver', name: 'Treiberschaltung', label: 'Treiber', color: '#15803d', pos: [XL, 0.24, 0], explode: [0.6, 0, 0.6],
          info: '<p>LEDs vertragen den Haushaltsstrom nicht so, wie er ist. Diese kleine Schaltung <b>verwandelt</b> ihn in den schwachen Gleichstrom, den die LEDs brauchen.</p>',
          more: '<p>Der Haushaltsstrom ist <b>Wechselstrom</b> (er wechselt 50 Mal pro Sekunde die Richtung) mit 230 V. Der Treiber richtet ihn gleich (Dioden), glättet ihn (Kondensatoren) und verringert ihn auf wenige Volt <b>Gleichstrom</b>.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.36, 0.025] }, { t: 'cyl', r: 0.04, h: 0.12, n: 12, pos: [-0.07, 0.04, 0.06], rot: [90, 0, 0], color: '#1e3a8a' },
            { t: 'cyl', r: 0.03, h: 0.1, n: 12, pos: [0.08, -0.06, 0.05], rot: [90, 0, 0], color: '#1f2937' }, { t: 'box', s: [0.08, 0.06, 0.04], pos: [0.07, 0.1, 0.03], color: '#111827' } ] },
        { id: 'dissipatore', name: 'Gehäuse und Kühlkörper', label: 'Kühlkörper', color: '#cbd5e1', alpha: 0.45, pos: [XL, 0, 0], explode: [0.6, -0.15, 0],
          info: '<p>Der „Hals“ der LED-Lampe enthält den Treiber und leitet die wenige Wärme ab, die die LEDs erzeugen: Eine LED, die kühl bleibt, hält viele Jahre länger.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0.26, 0], [0.3, 0.12], [0.36, 0.28], [0.42, 0.44], [0.43, 0.5]], ds: true } ].concat(Array.from({ length: 8 }, (_, k) => ({ t: 'box', s: [0.02, 0.32, 0.08], pos: [0.36 * Math.cos(k * TAU / 8), 0.3, 0.36 * Math.sin(k * TAU / 8)], rot: [0, -k * 45, 0], color: '#94a3b8', alpha: 0.6 }))) }
      ]
    },
    steps: [
      { icon: '💡', title: 'Zwei Lampen, zwei Ideen', explode: 0,
        html: '<p>Links ist die <b>Glühlampe</b>, die vor mehr als 140 Jahren erfunden wurde: Sie macht Licht, indem sie einen Draht erhitzt. Rechts die <b>LED</b>-Lampe, die wir heute benutzen: Sie macht Licht mit einem besonderen Material und wird dabei fast gar nicht warm.</p><p>Beide funktionieren nur, wenn der <b>Strom</b> fließen kann.</p>' },
      { icon: '🔌', title: 'Ein geschlossener Stromkreis', focus: ['corrente', 'attacco', 'portalampada', 'supporti', 'filamento'], explode: 0.2, view: { rx: 0.1, ry: -0.2 },
        html: '<p>Der Strom kommt aus dem Kabel, tritt am <b>Kontakt</b> unten an der Glühbirne ein, fließt über einen Draht nach oben, durchquert den Glühfaden und kehrt über den anderen Draht bis zum <b>Gewinde</b> zurück. Das ist ein vollständiger Kreis: ein <b>geschlossener Stromkreis</b>.</p><p class="tip">🔘 Der Schalter öffnet den Stromkreis: Der Weg wird unterbrochen und das Licht geht aus.</p>' },
      { icon: '🔥', title: 'Ein glühender Draht', focus: ['filamento', 'supporti', 'bulbo'], explode: 0, zoom: 1.1, view: { rx: -0.05, ry: -0.15 },
        html: '<p>Der <b>Glühfaden</b> aus Wolfram ist so dünn, dass der Strom Mühe hat, hindurchzukommen: Er erhitzt sich auf etwa <b>2500 °C</b> und wird weißglühend, also leuchtet er wie das Eisen in der Schmiede.</p><p>Der Kolben ist mit <b>Argon</b>-Gas gefüllt und nicht mit Luft: Mit Sauerstoff würde der Draht sofort verbrennen.</p>' },
      { icon: '🥵', title: 'Viel Licht … und sehr viel Wärme', focus: ['calore', 'filamento', 'luce', 'bulbo'], explode: 0, view: { rx: 0.1, ry: -0.3 },
        html: '<p>Die Glühlampe verschwendet fast die ganze Energie: Von 100 Teilen werden etwa <b>95 zu Wärme</b> und nur 5 zu Licht. Deshalb wird sie so heiß!</p><p class="tip">🌍 Um Energie zu sparen, werden Glühlampen in Europa nicht mehr verkauft.</p>' },
      { icon: '✨', title: 'Die LED: Licht aus Halbleitern', focus: ['led', 'diffusore', 'luce'], explode: 0.3, view: { rx: 0.35, ry: 0.25 },
        html: '<p>In der LED-Lampe entsteht das Licht in vielen kleinen <b>Chips</b>. Wenn der Strom hindurchfließt, „springen“ die Elektronen von einem Material zum anderen und setzen ihre Energie direkt als <b>Licht</b> frei, fast ohne Wärme.</p><p>Der weiße <b>Diffusor</b> macht das Licht weicher.</p>' },
      { icon: '🔧', title: 'Treiber und Kühlkörper', focus: ['driver', 'dissipatore', 'led', 'corrente'], explode: 0.55, view: { rx: 0.15, ry: 0.35 },
        html: '<p>Der Haushaltsstrom ist für die LEDs zu „stark“. Der <b>Treiber</b>, eine kleine Schaltung im Hals, verwandelt ihn in schwachen Gleichstrom. Der <b>Kühlkörper</b> leitet die wenige Wärme ab.</p>' },
      { icon: '⚖️', title: 'Wettbewerb: Wer verbraucht weniger?', explode: 0, view: { rx: 0.12, ry: -0.35 },
        html: '<p>Für das gleiche Licht verbraucht eine Glühlampe <b>60 Watt</b>, eine LED etwa <b>8 Watt</b>. Und die LED hält 15 000–25 000 Stunden, gegenüber 1000 bei der alten Glühbirne.</p><p class="tip">🧮 Wenn eine Familie 10 Glühbirnen durch LEDs ersetzt, spart sie in einem Jahr die Energie für Hunderte von Waschmaschinenladungen!</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Edison und die anderen', html: 'Thomas Edison machte die Glühbirne 1879 alltagstauglich, mit einem Glühfaden aus <b>verkohltem Bambus</b>. Aber auch andere Erfinder arbeiteten daran, wie der Engländer Joseph Swan und der Italiener <b>Alessandro Cruto</b>.' },
      { icon: '🕯️', title: 'Die hundertjährige Glühbirne', html: 'In einer Feuerwache in Kalifornien brennt seit <b>1901</b> fast ununterbrochen eine Glühbirne! Sie arbeitet ganz sanft, deshalb hält sie so lange.' },
      { icon: '🏅', title: 'Ein Nobelpreis für blaues Licht', html: 'Rote und grüne LEDs gab es schon lange, aber für weißes Licht brauchte man die <b>blaue LED</b>. Die drei japanischen Wissenschaftler, die sie erfanden, bekamen 2014 den Nobelpreis für Physik.' },
      { icon: '🔆', title: 'Watt und Lumen', html: '<b>Watt</b> sagt, wie viel Energie eine Lampe verbraucht, <b>Lumen</b>, wie viel Licht sie macht. Eine gute Lampe macht viele Lumen mit wenig Watt.' }
    ],
    quiz: [
      { type: 'mc', q: 'Warum leuchtet der Glühfaden der Glühlampe?', options: ['Weil er gelb angemalt ist', 'Weil er glühend heiß wird, wenn Strom hindurchfließt', 'Weil er wie eine Kerze brennt', 'Weil er das Sonnenlicht reflektiert'], answer: 1, explain: 'Der Strom erhitzt den Wolframdraht auf etwa 2500 °C: Er glüht und macht Licht.' },
      { type: 'mc', q: 'Was ist im Glaskolben der Glühlampe?', options: ['Luft', 'Wasser', 'Ein Gas wie Argon', 'Reiner Sauerstoff'], answer: 2, explain: 'Ein Edelgas wie Argon verhindert, dass der glühende Faden verbrennt.' },
      { type: 'tf', q: 'Die LED-Lampe verwandelt einen viel größeren Teil der Energie in Licht als die Glühlampe.', answer: true, explain: 'Die LED verschwendet wenig als Wärme: Für das gleiche Licht verbraucht sie etwa 8 Mal weniger.' },
      { type: 'mc', q: 'Wofür ist der Schalter da?', options: ['Um die Farbe des Lichts zu ändern', 'Um den Stromkreis zu öffnen oder zu schließen', 'Um die Lampe zu kühlen', 'Um die Watt zu messen'], answer: 1, explain: 'Bei offenem Stromkreis fließt kein Strom und die Lampe geht aus.' },
      { type: 'mc', q: 'Aus welchem Metall besteht der Glühfaden?', options: ['Kupfer', 'Eisen', 'Wolfram', 'Gold'], answer: 2, explain: 'Wolfram schmilzt bei 3422 °C: Es ist das Metall, das die höchste Temperatur aushält.' },
      { type: 'num', q: 'Von 100 Teilen Energie: Wie viele werden bei einer Glühlampe ungefähr zu Licht?', answer: 5, explain: 'Etwa 5: Die anderen 95 werden zu Wärme.' }
    ]
  });
})();
