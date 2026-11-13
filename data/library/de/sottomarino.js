/* Il sottomarino (diesel-elettrico). Asse lungo x: prua a +x, poppa a -x. Ciclo (1): 0–0.5 le casse si riempiono, 0.5–1 si svuotano. */
(function () {
  const ROT = [0, 0, -90]; // porta l'asse y delle primitive lungo x
  const hull = [[0, -3.25], [0.18, -3.05], [0.42, -2.55], [0.6, -1.85], [0.7, -1.0], [0.72, 0], [0.72, 2.1], [0.64, 2.65], [0.45, 3.0], [0.2, 3.2], [0, 3.27]];
  const blades = Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [0.42, 0.025, 0.16], pos: [0.27, 0, 0], rot: [30, 0, 0] }] }));
  const tankWater = (x, w) => ({ t: 'group', pos: [x, -0.62, 0], anim: { type: 'scale', axis: 'y', from: 0.04, to: 1, wave: 'window', win: [0.02, 0.98], ramp: 0.45 }, shapes: [
    { t: 'box', s: [w, 1.2, 1.15], pos: [0, 0.6, 0] }
  ] });

  LIBRARY({
    lang: 'de',
    id: 'sottomarino',
    title: 'Das U-Boot',
    intro: 'Ein U-Boot kann wie ein Schiff <b>schwimmen</b> oder unter Wasser <b>abtauchen</b> und wieder auftauchen. Der Trick? Es verändert sein Gewicht, indem es große Tanks mit Wasser oder Luft füllt.',
    model: {
      rx: 0.22, ry: -0.5, speed: 0.12, height: 460, bg: 'sea', floor: false,
      parts: [
        { id: 'scafo-esterno', name: 'Äußere Hülle', color: '#cbd5e1', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>Das ist die „Kleidung“ des U-Boots. Es hat eine schlanke Form wie ein Fisch oder ein Wal, damit es mit wenig Mühe durchs Wasser gleitet.</p>',
          shapes: [ { t: 'lathe', n: 32, rot: ROT, pts: hull } ] },
        { id: 'scafo-resistente', name: 'Druckkörper', color: '#94a3b8', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>Das ist ein großes, dickes Stahlrohr, in dem die Besatzung lebt. Es muss dem riesigen <b>Druck</b> des Wassers in der Tiefe standhalten.</p>',
          more: '<p>Alle 10 Meter Tiefe steigt der Druck um etwa 1 Atmosphäre. In 300 Metern Tiefe drückt auf jeden Quadratzentimeter der Hülle ein Gewicht von rund 30 kg!</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 4.2, n: 32, rot: ROT, pos: [0, 0, 0] } ] },
        { id: 'casse-zavorra', name: 'Tauchtanks', label: 'Tauchtanks', color: '#7dd3fc', alpha: 0.35, explode: [0, -0.9, 0],
          info: '<p>Das sind große „Behälter“ zwischen den beiden Hüllen, vorne und hinten. Man kann sie mit <b>Wasser</b> füllen (zum Abtauchen) oder mit <b>Luft</b> (zum Aufsteigen).</p>',
          shapes: [ { t: 'box', s: [0.75, 1.24, 1.2], pos: [2.55, 0, 0] }, { t: 'box', s: [0.6, 1.0, 1.0], pos: [-2.4, 0, 0] } ] },
        { id: 'acqua-zavorra', name: 'Wasser in den Tanks', label: 'Wasser', color: '#0284c7', alpha: 0.7, explode: [0, -0.9, 0],
          info: '<p>Wenn sich die Ventile öffnen, strömt Meerwasser in die Tanks: Das U-Boot wird <b>schwerer</b> und sinkt.</p>',
          shapes: [ tankWater(2.55, 0.72), Object.assign(tankWater(-2.4, 0.57), { pos: [-2.4, -0.5, 0], shapes: [{ t: 'box', s: [0.57, 1.0, 0.95], pos: [0, 0.5, 0] }] }) ] },
        { id: 'aria-compressa', name: 'Druckluftflaschen', label: 'Druckluft', color: '#22c55e', pos: [0.2, 0.36, 0], explode: [0, 1.1, 0.6],
          info: '<p>Sie enthalten Luft, die unter sehr hohem Druck zusammengepresst ist. Zum Auftauchen wird die Luft in die Tauchtanks geblasen und <b>drückt das Wasser hinaus</b>.</p>',
          shapes: [-0.45, 0, 0.45].map((x) => ({ t: 'cyl', r: 0.07, h: 0.38, n: 14, rot: ROT, pos: [x, 0, -0.18] })) },
        { id: 'torretta', name: 'Turm', color: '#1f2937', pos: [0.95, 0.68, 0], explode: [0, 0.9, 0],
          info: '<p>Der Turm oben auf dem Boot. Wenn das U-Boot an der Oberfläche ist, schaut man von hier aus umher; im Inneren verlaufen das Sehrohr und die Antennen.</p>',
          shapes: [ { t: 'extrude', d: 0.3, pts: [[-0.5, 0], [0.48, 0], [0.38, 0.85], [-0.36, 0.85]], smooth: false }, { t: 'box', s: [0.25, 0.03, 0.9], pos: [0.12, 0.55, 0] } ] },
        { id: 'periscopio', name: 'Sehrohr', color: '#64748b', pos: [1.05, 1.45, 0], explode: [0, 1.3, 0], anim: { type: 'move', dir: [0, 1, 0], amp: 0.4, wave: 'sin01', rate: 0.5 },
          info: '<p>Ein langes Rohr mit zwei Spiegeln (oder Prismen), mit dem man über das Wasser schauen kann, während man unten bleibt. Heute benutzen viele stattdessen eine <b>Kamera</b>.</p>',
          more: '<p>Das Licht tritt oben ein, wird von einem um 45° geneigten Spiegel zurückgeworfen, läuft durch das Rohr nach unten, und ein zweiter Spiegel schickt es ins Auge. Es ist dasselbe Prinzip wie beim Pappe-Periskop, das du zu Hause basteln kannst.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 0.9, n: 10 }, { t: 'box', s: [0.14, 0.12, 0.1], pos: [0.03, 0.48, 0], color: '#334155' }, { t: 'box', s: [0.01, 0.08, 0.07], pos: [0.105, 0.48, 0], color: '#38bdf8', decal: 1 } ] },
        { id: 'elica', name: 'Schiffsschraube', color: '#ca8a04', pos: [-3.3, 0, 0], rot: [0, 0, 90], explode: [-0.6, 0, 0], anim: { type: 'spin', axis: 'y', rate: 2 },
          info: '<p>Wenn sie sich dreht, drückt sie das Wasser nach hinten, und das Wasser schiebt das U-Boot nach vorne. Sie hat breite, langsame Blätter, damit sie <b>wenig Lärm</b> macht.</p>',
          shapes: [ { t: 'cone', r: 0.1, h: 0.25, n: 16, color: '#a16207' } ].concat(blades) },
        { id: 'timoni', name: 'Ruder', color: '#475569', explode: [-0.4, 0, 0],
          info: '<p>Die „Flossen“ am Heck. Das senkrechte Ruder lenkt nach rechts und links; die waagerechten (die <b>Tiefenruder</b>) lassen den Bug nach oben oder unten zeigen.</p>',
          shapes: [ { t: 'box', s: [0.4, 1.3, 0.05], pos: [-2.85, 0, 0], color: '#475569' },
            { t: 'group', pos: [-2.75, 0, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.25 }, shapes: [ { t: 'box', s: [0.4, 0.05, 1.5], color: '#334155' } ] } ] },
        { id: 'motore-elettrico', name: 'Elektromotor', color: '#f59e0b', pos: [-1.75, 0, 0], explode: [0, 0, 1.1],
          info: '<p>Er dreht die Schiffsschraube. Unter Wasser läuft er mit dem Strom aus den Batterien: Er braucht keine Luft und ist leise.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.6, n: 24, rot: ROT }, { t: 'cyl', r: 0.045, h: 1.35, n: 10, rot: ROT, pos: [-0.95, 0, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2 } } ] },
        { id: 'diesel', name: 'Dieselmotor und Generator', label: 'Dieselmotor', color: '#9a3412', pos: [-0.85, -0.05, 0], explode: [0, 0, 1.2],
          info: '<p>Wenn das U-Boot nahe an der Oberfläche ist, saugt der Dieselmotor über ein Rohr (den <b>Schnorchel</b>) Luft an und erzeugt Strom, um die Batterien aufzuladen.</p>',
          more: '<p>Die größten U-Boote haben dagegen einen kleinen <b>Atomreaktor</b>, der keine Luft braucht: Sie können monatelang unter Wasser bleiben.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.45, 0.5] }, { t: 'cyl', r: 0.15, h: 0.3, n: 16, rot: ROT, pos: [0.42, 0, 0], color: '#b45309' } ] },
        { id: 'batterie', name: 'Batterien', color: '#16a34a', pos: [0.2, -0.36, 0], explode: [0, -1.0, 0.6],
          info: '<p>Viele Batterien ganz unten im Rumpf versorgen beim Fahren unter Wasser den Elektromotor, die Lampen und die Instrumente mit Strom.</p>',
          shapes: Array.from({ length: 10 }, (_, k) => ({ t: 'box', s: [0.18, 0.16, 0.22], pos: [-0.85 + (k % 5) * 0.21 + 0.4, 0, (k < 5 ? -0.13 : 0.13)] })) },
        { id: 'sala-controllo', name: 'Zentrale', label: 'Zentrale', color: '#e2e8f0', pos: [1.05, 0.05, 0], explode: [0, 0, 1.3],
          info: '<p>Das „Gehirn“ des U-Boots: Von hier aus steuern der Kommandant und die Besatzung das Boot, überwachen die Tiefe und hören das Sonar ab.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.6] }, { t: 'box', s: [0.6, 0.18, 0.01], pos: [0, 0.08, 0.305], color: '#0f766e', decal: 1 }, { t: 'box', s: [0.08, 0.06, 0.01], pos: [-0.2, -0.12, 0.31], color: '#ef4444', decal: 1, anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 1.5 } } ] },
        { id: 'sonar', name: 'Sonar', color: '#facc15', alpha: 0.85, pos: [2.85, -0.05, 0], explode: [0.7, 0, 0],
          info: '<p>Die „Ohren“ des U-Boots. Es sendet einen Ton aus („Ping!“) und lauscht dem <b>Echo</b>, das von Hindernissen zurückkommt: An der Zeit des Echos erkennt es, wie weit sie entfernt sind. Das machen auch Delfine und Fledermäuse!</p>',
          more: '<p>Im Wasser breitet sich der Schall mit etwa <b>1500 m/s</b> aus, mehr als 4-mal so schnell wie in der Luft. Wenn das Echo nach 2 Sekunden zurückkommt, ist das Hindernis 1500 m entfernt (der Schall legt Hin- und Rückweg zurück).</p>',
          shapes: [ { t: 'sphere', r: 0.36, n: 12, scale: [1, 1, 1.15] },
            { t: 'group', anim: [{ type: 'move', dir: [1, 0, 0], amp: 2.2, wave: 'saw', rate: 0.6 }, { type: 'scale', from: 0.6, to: 2.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 }],
              shapes: [ { t: 'torus', R: 0.35, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#fef08a' } ] } ] }
      ]
    },
    steps: [
      { icon: '🛟', title: 'Schwimmen', focus: ['casse-zavorra', 'scafo-esterno', 'torretta'], loop: [0, 0.02], explode: 0,
        html: '<p>Wenn die <b>Tauchtanks</b> mit Luft gefüllt sind, ist das U-Boot leichter als das Wasser, das es verdrängt: Es <b>schwimmt</b> wie ein Schiff.</p><p class="tip">🛁 Das ist das <b>archimedische Prinzip</b>: Das Wasser drückt einen Gegenstand mit einer Kraft nach oben, die so groß ist wie das Gewicht des Wassers, das der Gegenstand verdrängt.</p>' },
      { icon: '⬇️', title: 'Abtauchen', focus: ['casse-zavorra', 'acqua-zavorra', 'timoni'], loop: [0, 0.5], explode: 0,
        html: '<p>Die Ventile werden geöffnet: Meerwasser <b>strömt in die Tanks</b> und drückt die Luft hinaus. Das U-Boot wird schwerer und <b>sinkt</b>.</p><p>Die <b>Tiefenruder</b> helfen ihm, sich zu neigen und in der richtigen Tiefe anzuhalten.</p>' },
      { icon: '⬆️', title: 'Auftauchen', focus: ['aria-compressa', 'acqua-zavorra', 'casse-zavorra'], loop: [0.5, 1], explode: 0,
        html: '<p>Um wieder nach oben zu kommen, wird die <b>Druckluft</b> aus den Flaschen in die Tanks geblasen und drückt das Wasser hinaus. Das U-Boot wird leichter und <b>steigt auf</b>.</p>' },
      { icon: '⚙️', title: 'Volle Kraft voraus!', focus: ['elica', 'motore-elettrico', 'batterie', 'diesel'], explode: 0.45, view: { rx: 0.25, ry: -0.9 },
        html: '<p>Die <b>Batterien</b> versorgen den <b>Elektromotor</b>, der die <b>Schiffsschraube</b> dreht. Nahe der Oberfläche lädt der <b>Dieselmotor</b> die Batterien wieder auf.</p><p>Das senkrechte Ruder lenkt nach rechts und links.</p>' },
      { icon: '🔊', title: 'Sehen ohne Licht', focus: ['sonar', 'periscopio', 'sala-controllo'], explode: 0.25, view: { rx: 0.2, ry: -0.3 },
        html: '<p>In der Tiefe ist es stockfinster. Das <b>Sonar</b> arbeitet mit Schall: Es sendet einen „Ping“ und lauscht dem Echo. Nahe der Oberfläche wird das <b>Sehrohr</b> ausgefahren, um nach draußen zu schauen.</p>' },
      { icon: '🧑‍✈️', title: 'Leben da unten', focus: ['scafo-resistente', 'sala-controllo'], explode: 0.2,
        html: '<p>Die Besatzung lebt im <b>Druckkörper</b>, der dem Wasserdruck standhält. Spezielle Maschinen erzeugen Sauerstoff und entfernen das Kohlendioxid aus der Luft.</p>' }
    ],
    facts: [
      { icon: '🐳', title: 'Von der Natur abgeschaut', html: 'Knochenfische haben eine <b>Schwimmblase</b>: Wenn sie sie mit Gas füllen oder wieder leeren, steigen oder sinken sie, genau wie ein U-Boot.' },
      { icon: '📏', title: 'Bis in den Abgrund', html: 'Im Jahr 1960 tauchte das Tiefseeboot <b>Trieste</b>, von Auguste Piccard entworfen und in Italien gebaut, im Marianengraben auf fast 11 000 Meter hinab.' },
      { icon: '🐬', title: 'Wie die Delfine', html: 'Delfine und Fledermäuse nutzen die <b>Echoortung</b>: Sie senden Töne aus und lauschen dem Echo, um im Dunkeln zu „sehen“.' },
      { icon: '📚', title: 'Zwanzigtausend Meilen unter dem Meer', html: 'Im Roman von Jules Verne (1870) reist Kapitän Nemo mit dem U-Boot <i>Nautilus</i>, lange bevor es solche echten U-Boote gab.' }
    ],
    quiz: [
      { type: 'mc', q: 'Was lässt das U-Boot sinken?', options: ['Den Motor ausschalten', 'Die Tauchtanks mit Wasser füllen', 'Das Sehrohr ausfahren', 'Das Sonar einschalten'], answer: 1, explain: 'Das Wasser in den Tanks macht es schwerer als das Wasser, das es verdrängt, also sinkt es.' },
      { type: 'mc', q: 'Wie steigt es wieder auf?', options: ['Indem Druckluft in die Tanks geblasen wird, die das Wasser hinausdrückt', 'Indem sich die Schiffsschraube rückwärts dreht', 'Indem der Turm geöffnet wird', 'Indem das Sehrohr benutzt wird'], answer: 0, explain: 'Die Luft drückt das Wasser hinaus: Das U-Boot wird leichter und steigt auf.' },
      { type: 'mc', q: 'Welches Prinzip erklärt das Schwimmen?', options: ['Das archimedische Prinzip', 'Das ohmsche Gesetz', 'Das pascalsche Prinzip', 'Das erste newtonsche Gesetz'], answer: 0, explain: 'Ein eingetauchter Körper erfährt eine Auftriebskraft nach oben, die so groß ist wie das Gewicht der verdrängten Flüssigkeit.' },
      { type: 'tf', q: 'Das Sonar benutzt Licht, um Hindernisse zu finden.', answer: false, explain: 'Das Sonar benutzt Schall und lauscht dem Echo: Unter Wasser reicht das Licht nicht weit.' },
      { type: 'num', q: 'Der Schall breitet sich im Wasser mit 1500 m/s aus. Wenn das Echo nach 2 Sekunden zurückkommt, wie viele Meter ist das Hindernis entfernt?', answer: 1500, unit: 'm', explain: 'In 2 s legt der Schall 3000 m zurück, aber das ist Hin- und Rückweg: 3000 ÷ 2 = 1500 m.' }
    ]
  });
})();
