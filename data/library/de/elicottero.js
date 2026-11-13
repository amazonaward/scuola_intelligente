/* L'elicottero (monorotore con rotore di coda). Muso verso +x, alto = +y, il rotore principale gira intorno a y sopra la cabina.
   Il rotore principale gira in senso antiorario visto dall'alto; la fusoliera tenderebbe a girare al contrario (coppia). */
(function () {
  const D = Math.PI / 180, MX = 0.25, HUB = 2.08, BL = 3.1;
  const blade = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [
    { t: 'box', s: [BL, 0.035, 0.24], pos: [BL / 2 + 0.2, 0, 0], rot: [6, 0, 0], color: '#1f2937', div: 1 },
    { t: 'box', s: [0.25, 0.04, 0.245], pos: [BL + 0.1, 0, 0], rot: [6, 0, 0], color: '#facc15' },
    { t: 'box', s: [0.4, 0.06, 0.1], pos: [0.28, 0, 0], color: '#6b7280' } ] });
  const skid = (z) => [ { t: 'pipe', r: 0.045, n: 10, curve: true, pts: [[-0.9, 0.0, z], [0.9, 0.0, z], [1.25, 0.06, z], [1.4, 0.2, z]] },
    { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.6, 0.0, z], [0.6, 0.25, z * 0.9], [0.6, 0.45, z * 0.6]] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[-0.5, 0.0, z], [-0.5, 0.25, z * 0.9], [-0.5, 0.45, z * 0.6]] } ];
  /* aria spinta in basso dal rotore */
  const DOWN = Array.from({ length: 16 }, (_, k) => { const a = (k / 16) * 360 * D, r = 0.9 + (k % 3) * 0.7; return { t: 'sphere', r: 0.05, n: 5, m: 8, pos: [MX + r * Math.cos(a), HUB + 0.1, r * Math.sin(a)],
    anim: [{ type: 'move', dir: [0.12 * Math.cos(a), -1, 0.12 * Math.sin(a)], amp: 2.4, wave: 'saw', rate: 0.8, phase: (k * 0.29) % 1 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.8, phase: (k * 0.29) % 1 }] }; });
  const arrow = (pos, rot, len, color) => ({ t: 'group', pos, rot, shapes: [ { t: 'cyl', r: 0.05, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.13, h: 0.28, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    id: 'elicottero',
    lang: 'de',
    title: 'Der Hubschrauber',
    intro: 'Der Hubschrauber kann senkrecht steigen, <b>in der Luft stehen bleiben</b> und in jede Richtung fliegen. Das Geheimnis? Seine „Flügel“ drehen sich! Der <b>Rotor</b> dreht lange Blätter, die die Luft nach unten drücken.',
    model: {
      rx: 0.3, ry: -0.55, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'fusoliera', name: 'Rumpf', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>Er ist der Körper des Hubschraubers: Darin sind die Piloten, die Passagiere oder, bei Rettungshubschraubern, die Trage und die Ärzte.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, pos: [0.35, 0.95, 0], scale: [1.35, 0.72, 0.68] },
            { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, 0.685], color: '#f8fafc', decal: 1 }, { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, -0.685], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, 0.655], color: '#7dd3fc', decal: 1 }, { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, -0.655], color: '#7dd3fc', decal: 1 },
            { t: 'cyl', r: 0.2, r2: 0.13, h: 0.5, n: 18, rot: [0, 0, 90], pos: [-0.95, 1.05, 0] } ] },
        { id: 'cabina', name: 'Cockpit', label: 'Cockpit', color: '#bae6fd', alpha: 0.4, explode: [0.6, 0, 0],
          info: '<p>Eine große „Blase“ aus Plexiglas vorne: Die Piloten sehen nach vorne, zur Seite und sogar unter ihre Füße, was beim Landen an schwierigen Orten sehr nützlich ist.</p>',
          more: '<p>Der Pilot benutzt drei Steuerungen: den <b>kollektiven</b> Hebel (links, zum Steigen und Sinken), den <b>Steuerknüppel</b> oder zyklischen Hebel (zwischen den Beinen, für vorwärts, rückwärts und seitwärts) und die <b>Pedale</b> (zum Drehen der Nase, sie steuern den Heckrotor).</p>',
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 22, pos: [1.15, 1.02, 0], scale: [0.62, 0.55, 0.6] },
            { t: 'box', s: [0.3, 0.35, 0.3], pos: [0.95, 0.75, 0.18], color: '#1f2937', alpha: 1 }, { t: 'box', s: [0.08, 0.4, 0.3], pos: [0.82, 0.95, 0.18], color: '#1f2937', alpha: 1 },
            { t: 'pipe', r: 0.02, n: 6, pts: [[1.25, 0.6, 0.18], [1.2, 0.9, 0.18]], color: '#111827', alpha: 1 } ] },
        { id: 'rotore', name: 'Hauptrotor', label: 'Hauptrotor', color: '#1f2937', pos: [MX, HUB, 0], explode: [0, 1.2, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 },
          info: '<p>Vier lange <b>Blätter</b> drehen sich blitzschnell. Jedes Blatt hat die Form eines Flugzeugflügels: Beim Drehen „schneidet“ es die Luft, drückt sie nach unten und erhält einen Schub nach oben, den <b>Auftrieb</b>.</p>',
          more: '<p>Ein Flugzeug muss auf der Piste rollen, damit die Flügel Luft abbekommen; der Hubschrauber dreht dagegen die Flügel selbst, sodass er <b>im Stand</b> Auftrieb erzeugen kann. Die Blattspitzen erreichen etwa 700 km/h, knapp unter der Schallgeschwindigkeit!</p>',
          shapes: [ { t: 'cyl', r: 0.16, h: 0.16, n: 20, color: '#475569' }, { t: 'cone', r: 0.12, h: 0.14, n: 16, pos: [0, 0.15, 0], color: '#64748b' } ].concat([0, 90, 180, 270].map(blade)) },
        { id: 'piatto', name: 'Taumelscheibe', label: 'Taumelscheibe', color: '#9ca3af', pos: [MX, 1.82, 0], explode: [0.8, 0.8, 0.6],
          info: '<p>Sie ist das raffinierteste Teil: zwei Scheiben auf der Rotorwelle. Wenn man sie neigt oder anhebt, verändern Stangen den <b>Anstellwinkel der Blätter</b>, während sie sich drehen.</p>',
          more: '<p>Wenn die Scheibe <b>steigt</b>, neigen sich alle Blätter gleichzeitig stärker (<b>kollektive</b> Blattverstellung): mehr Auftrieb, der Hubschrauber steigt. Wenn die Scheibe sich <b>neigt</b>, ändert jedes Blatt während der Umdrehung seinen Winkel (<b>zyklische</b> Blattverstellung): Die Rotorebene neigt sich, und der Hubschrauber fliegt in diese Richtung.</p>',
          anim: { type: 'swing', axis: 'z', amp: 7, rate: 0.25 },
          shapes: [ { t: 'cyl', r: 0.3, h: 0.05, n: 24, color: '#6b7280' },
            { t: 'group', pos: [0, 0.06, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 }, shapes: [ { t: 'cyl', r: 0.27, h: 0.05, n: 24, color: '#cbd5e1' },
              ...[0, 90, 180, 270].map((a) => ({ t: 'cyl', r: 0.015, h: 0.24, n: 6, pos: [0.24 * Math.cos(a * D), 0.14, -0.24 * Math.sin(a * D)], color: '#f59e0b' })) ] } ] },
        { id: 'albero', name: 'Rotorwelle und Getriebe', label: 'Getriebe', color: '#64748b', explode: [0, 0.5, 0.8],
          info: '<p>Der Motor dreht sich sehr schnell, aber der Rotor muss sich langsamer drehen. Das <b>Getriebe</b>, ein Kasten voller Zahnräder, verringert die Drehzahl und leitet die Bewegung an den Hauptrotor und den Heckrotor weiter.</p>',
          more: '<p>Das Turbinentriebwerk dreht sich mit etwa 30 000 Umdrehungen pro Minute, der Hauptrotor mit etwa 400: Das Getriebe verringert die Drehzahl um etwa das 75-Fache und erhöht im gleichen Verhältnis die Kraft (das Drehmoment).</p>',
          shapes: [ { t: 'box', s: [0.6, 0.3, 0.5], pos: [MX, 1.55, 0] }, { t: 'cyl', r: 0.06, h: 0.42, n: 12, pos: [MX, 1.86, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2.2 } },
            { t: 'cyl', r: 0.03, h: 2.8, n: 10, rot: [0, 0, 90], pos: [-1.5, 1.3, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 6 } } ] },
        { id: 'motore', name: 'Turbinentriebwerk', label: 'Turbine', color: '#94a3b8', pos: [-0.45, 1.55, 0], explode: [-0.3, 0.6, -0.9],
          info: '<p>Der Motor ist eine <b>Turbine</b>, ähnlich einem kleinen Flugzeugtriebwerk: Sie saugt Luft an, verdichtet sie, verbrennt sie mit dem Treibstoff, und die heißen Gase drehen ein Schaufelrad, das mit dem Getriebe verbunden ist.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.75, n: 20, rot: [0, 0, 90] }, { t: 'cyl', r: 0.12, h: 0.25, n: 16, rot: [0, 0, 90], pos: [-0.48, 0.04, 0], color: '#57534e' },
            { t: 'group', pos: [0.38, 0, 0], anim: { type: 'spin', axis: 'x', rate: 8 }, shapes: [0, 45, 90, 135].map((a) => ({ t: 'box', s: [0.02, 0.28, 0.04], rot: [a, 0, 0], color: '#475569' })) },
            { t: 'sphere', r: 0.09, n: 6, m: 10, pos: [-0.62, 0.06, 0], color: '#f97316', alpha: 0.6, anim: { type: 'blink', fade: true, wave: 'sin01', rate: 3 } } ] },
        { id: 'trave-coda', name: 'Heckausleger', label: 'Heck', color: '#dc2626', explode: [-0.6, 0, 0],
          info: '<p>Ein langes Rohr, das den <b>Heckrotor</b> weit vom Zentrum weghält: Je weiter weg er ist, desto leichter kann er die Drehung des Rumpfes ausgleichen, wie ein langer Hebel.</p>',
          shapes: [ { t: 'cyl', r: 0.19, r2: 0.08, h: 2.9, n: 18, rot: [0, 0, 90], pos: [-2.05, 1.18, 0] },
            { t: 'extrude', d: 0.06, pts: [[-3.1, 1.2], [-3.5, 1.2], [-3.78, 1.95], [-3.52, 1.95]], color: '#f8fafc' },
            { t: 'box', s: [0.32, 0.04, 0.8], pos: [-2.9, 1.2, 0], color: '#f8fafc' } ] },
        { id: 'rotore-coda', name: 'Heckrotor', label: 'Heckrotor', color: '#f8fafc', pos: [-3.58, 1.62, 0.1], explode: [-0.5, 0, 0.6], anim: { type: 'spin', axis: 'z', rate: 8 },
          info: '<p>Der kleine Propeller am Heck drückt die Luft zur Seite und verhindert, dass sich der Rumpf um sich selbst dreht. Mit den Pedalen verändert der Pilot seinen Schub, um die <b>Nase zu drehen</b>.</p>',
          more: '<p>Wenn der Motor den Rotor in eine Richtung dreht, „will“ sich der Rumpf in die Gegenrichtung drehen: Das ist das <b>Reaktionsmoment</b> (drittes Newtonsches Gesetz). Manche Hubschrauber lösen das Problem mit zwei Rotoren, die sich in entgegengesetzte Richtungen drehen, ohne Heckrotor.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 0.08, n: 14, rot: [90, 0, 0], color: '#475569' },
            { t: 'box', s: [0.06, 0.75, 0.02], rot: [0, 12, 0], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, 0.33, 0], color: '#ef4444' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, -0.33, 0], color: '#ef4444' } ] },
        { id: 'pattini', name: 'Landekufen', label: 'Kufen', color: '#6b7280', explode: [0, -0.6, 0],
          info: '<p>Anstelle von Rädern haben viele Hubschrauber zwei <b>Kufen</b>: einfach, leicht und geeignet, um auch auf Wiesen, Schnee oder Fels zu landen.</p>',
          shapes: skid(0.62).concat(skid(-0.62)) },
        { id: 'aria', name: 'Nach unten gedrückte Luft', label: 'Luft', color: '#38bdf8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Der Rotor drückt eine große Menge Luft nach unten (der „Rotorabwind“): Du spürst ihn sehr stark, wenn du in der Nähe eines landenden Hubschraubers stehst.</p>',
          shapes: DOWN },
        { id: 'forze', name: 'Auftrieb und Drehmoment', label: 'Kräfte', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>Der <b>grüne</b> Pfeil ist der Auftrieb des Rotors. Der gekrümmte <b>violette</b> Pfeil zeigt, wie sich der Rumpf zu drehen versuchen würde (Drehmoment); der <b>blaue</b> Pfeil am Heck ist der Schub des Heckrotors, der ihn geradehält.</p>',
          shapes: [ arrow([MX, 2.35, 0], [0, 0, 0], 0.8, '#22c55e'),
            { t: 'torus', R: 0.95, r: 0.035, n: 30, m: 6, arc: 250, pos: [MX, 0.95, 0], rot: [0, 40, 0], color: '#a855f7' },
            { t: 'cone', r: 0.1, h: 0.25, n: 12, pos: [MX + 0.95 * Math.cos(40 * D), 0.95, 0.95 * Math.sin(40 * D)], rot: [90, 0, 0], color: '#a855f7' },
            arrow([-3.58, 1.62, -0.1], [-90, 0, 0], 0.7, '#3b82f6') ] }
      ]
    },
    steps: [
      { icon: '🚁', title: 'Flügel, die sich drehen', explode: 0,
        html: '<p>Der Hubschrauber hat keine festen Flügel wie das Flugzeug: Seine Flügel sind die langen <b>Rotorblätter</b>, die sich über der Kabine drehen. So kann er senkrecht steigen, in der Luft stehen bleiben (<b>Schwebeflug</b>) und fast überall landen.</p>' },
      { icon: '⬆️', title: 'Der Rotor drückt die Luft nach unten', focus: ['rotore', 'aria', 'forze'], explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Jedes Blatt hat die Form eines Flügels. Bei etwa 400 Umdrehungen pro Minute drücken die Blätter die Luft nach <b>unten</b>; als Gegenreaktion drückt die Luft den Rotor nach <b>oben</b>: Das ist der <b>Auftrieb</b>.</p><p class="tip">🍁 Hast du schon einmal einen Ahornsamen gesehen, der sich drehend zu Boden segelt? Er ist ein kleiner natürlicher Hubschrauber!</p>' },
      { icon: '🎛️', title: 'Die Taumelscheibe: steigen und vorwärtsfliegen', focus: ['piatto', 'rotore', 'albero'], explode: 0.3, zoom: 1.2, view: { rx: 0.25, ry: -0.7 },
        html: '<p>Der Pilot ändert nicht die Drehzahl des Rotors: Er ändert den <b>Anstellwinkel der Blätter</b>. Die <b>Taumelscheibe</b> tut das, während sie sich drehen.</p><p>Alle Blätter stärker geneigt → mehr Auftrieb → der Hubschrauber <b>steigt</b>. Die Scheibe nach vorne geneigt → der Rotor neigt sich → der Hubschrauber <b>fliegt vorwärts</b>.</p>' },
      { icon: '🔄', title: 'Warum man den Heckrotor braucht', focus: ['rotore-coda', 'trave-coda', 'forze', 'fusoliera'], explode: 0, view: { rx: 0.9, ry: -0.3 },
        html: '<p>Wenn der Motor den Rotor in eine Richtung dreht, will sich der Rumpf in die andere Richtung drehen (violetter Pfeil): Wirkung und Gegenwirkung!</p><p>Der <b>Heckrotor</b> drückt die Luft zur Seite und hält den Rumpf gerade. Mit den <b>Pedalen</b> verändert der Pilot diesen Schub und dreht die Nase.</p>' },
      { icon: '🔥', title: 'Motor und Getriebe', focus: ['motore', 'albero', 'rotore-coda'], explode: 0.35, view: { rx: 0.25, ry: -1.0 },
        html: '<p>Eine <b>Turbine</b> verbrennt den Treibstoff und dreht sich blitzschnell. Das <b>Getriebe</b>, voller Zahnräder, verlangsamt die Bewegung und leitet sie an den Hauptrotor und, über eine lange Welle im Heck, an den Heckrotor weiter.</p>' },
      { icon: '🏔️', title: 'Cockpit, Kufen und Rettung', focus: ['cabina', 'fusoliera', 'pattini'], explode: 0, view: { rx: 0.2, ry: -0.2 },
        html: '<p>Das <b>Cockpit</b> in Blasenform ermöglicht den Blick in alle Richtungen, auch nach unten. Die <b>Kufen</b> erlauben es, auf Wiesen, Schnee und Fels aufzusetzen.</p><p>Deshalb sind Hubschrauber bei der <b>Rettung</b> in den Bergen und auf dem Meer, bei der Brandbekämpfung und beim Transport von Kranken ins Krankenhaus so wertvoll.</p>' }
    ],
    facts: [
      { icon: '🎨', title: 'Leonardos Luftschraube', html: '<p>Um 1490 zeichnete <b>Leonardo da Vinci</b> eine „Luftschraube“: einen spiralförmigen Propeller aus Stoff, der sich in die Luft hineinschrauben sollte. Sie gilt als Vorläuferin des Hubschraubers.</p>' },
      { icon: '🇮🇹', title: 'Italienische Hubschrauber', html: 'In Italien, in der Nähe von Varese, werden Hubschrauber gebaut, die in die ganze Welt exportiert werden und auch für die Bergrettung und den Rettungsflug eingesetzt werden.' },
      { icon: '🔙', title: 'Auch rückwärts', html: 'Ein Hubschrauber kann vorwärts, rückwärts, seitwärts fliegen und sich dabei an derselben Stelle um sich selbst drehen. Kein normales Flugzeug schafft das!' },
      { icon: '🪂', title: 'Wenn der Motor ausfällt', html: 'Wenn der Motor ausgeht, dreht sich der Rotor weiter, angetrieben von der Luft, die beim Sinken des Hubschraubers aufsteigt (<b>Autorotation</b>), und der Pilot kann sanft landen.' }
    ],
    quiz: [
      { type: 'mc', q: 'Was hält einen Hubschrauber in der Luft?', options: ['Ein mit Gas gefüllter Ballon', 'Die Rotorblätter, die die Luft nach unten drücken', 'Die Räder', 'Der Heckrotor'], answer: 1, explain: 'Die Blätter sind sich drehende Flügel: Sie drücken die Luft nach unten und erhalten Auftrieb nach oben.' },
      { type: 'mc', q: 'Wozu dient der Heckrotor?', options: ['Um den Hubschrauber steigen zu lassen', 'Um zu verhindern, dass sich der Rumpf um sich selbst dreht', 'Um den Motor zu kühlen', 'Um die Piste zu beleuchten'], answer: 1, explain: 'Er wirkt dem Reaktionsmoment des Hauptrotors entgegen; mit den Pedalen dreht der Pilot die Nase.' },
      { type: 'tf', q: 'Zum Steigen vergrößert der Pilot den Anstellwinkel aller Blätter gleichzeitig.', answer: true, explain: 'Das ist die kollektive Blattverstellung: mehr Anstellwinkel, mehr Auftrieb.' },
      { type: 'mc', q: 'Welches Teil verändert den Anstellwinkel der Blätter, während sie sich drehen?', options: ['Die Taumelscheibe', 'Die Kufen', 'Der Heckausleger', 'Das Cockpit'], answer: 0, explain: 'Die Taumelscheibe neigt mit ihren Stangen die Blätter, um zu steigen und vorwärtszufliegen.' },
      { type: 'mc', q: 'Was kann ein Hubschrauber, was ein Flugzeug nicht kann?', options: ['Bei Regen fliegen', 'In der Luft stehen bleiben', 'Nachts fliegen', 'Menschen transportieren'], answer: 1, explain: 'Der Schwebeflug (Hovern) ist möglich, weil sich die Flügel auch dann drehen, wenn der Hubschrauber stillsteht.' }
    ]
  });
})();
