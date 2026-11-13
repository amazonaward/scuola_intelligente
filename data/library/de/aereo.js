/* L'aereo di linea (bimotore). Il muso guarda verso +x, alto = +y, l'ala destra è verso +z.
   Le ali sono basse (y = -0.3) con un piccolo diedro; i comandi (alettoni, equilibratore, timone) oscillano. */
(function () {
  const ROT = [0, 0, -90]; // porta l'asse y delle primitive lungo x
  const D = Math.PI / 180, DIH = 5;
  const FUS = [[0, -3.35], [0.1, -3.25], [0.24, -2.9], [0.38, -2.3], [0.49, -1.6], [0.52, -1.0], [0.52, 2.1], [0.5, 2.5], [0.45, 2.8], [0.36, 3.05], [0.24, 3.22], [0.1, 3.32], [0, 3.35]];
  /* pianta di un'ala (x, apertura) → estrusa sottile e ruotata nel piano XZ */
  const WING = [[1.0, 0], [-0.5, 0], [-1.45, 3.2], [-1.0, 3.2]];
  const wing = (side) => ({ t: 'group', pos: [0, -0.3, 0], rot: [-side * DIH, 0, 0], shapes: [
    { t: 'extrude', d: 0.09, pts: WING.map(([x, z]) => [x, z * side]), rot: [90, 0, 0], smooth: true },
    { t: 'extrude', d: 0.05, pts: [[-1.0, 3.2 * side], [-1.45, 3.2 * side], [-1.38, 3.32 * side], [-1.12, 3.35 * side]], rot: [90, 0, 0], color: '#94a3b8' } ] });
  /* superficie mobile incernierata lungo il bordo d'uscita dell'ala */
  const TEx = (z) => -0.5 - 0.297 * Math.abs(z), TEy = (z) => -0.3 + Math.abs(z) * Math.tan(DIH * D);
  const flapAt = (zc, len, chord, amp, base, color, rate) => {
    const side = Math.sign(zc);
    return { t: 'group', pos: [TEx(zc), TEy(zc), zc], rot: [-side * DIH, -side * 16.5, 0], anim: { type: 'swing', axis: 'z', amp, base: base || 0, wave: 'sin', rate: rate || 0.5 },
      shapes: [ { t: 'box', s: [chord, 0.03, len], pos: [-chord / 2, 0, 0], color, div: 1 } ] };
  };
  const nacelle = [[0.22, -0.55], [0.26, -0.35], [0.29, -0.05], [0.29, 0.25], [0.27, 0.45], [0.25, 0.55]];
  const engine = (z) => ({ t: 'group', pos: [0.75, -0.62, z], shapes: [
    { t: 'lathe', n: 28, pts: nacelle, rot: ROT, ds: true, color: '#e5e7eb' },
    { t: 'cyl', r: 0.17, r2: 0.05, h: 0.25, n: 16, rot: ROT, pos: [-0.65, 0, 0], color: '#6b7280' },
    { t: 'group', pos: [0.42, 0, 0], anim: { type: 'spin', axis: 'x', rate: 6 }, shapes: [
      { t: 'cone', r: 0.08, h: 0.14, n: 14, rot: ROT, color: '#475569' }, ...Array.from({ length: 14 }, (_, k) => ({ t: 'box', s: [0.012, 0.19, 0.06], pos: [0, 0.135 * Math.cos(k * 25.7 * D), 0.135 * Math.sin(k * 25.7 * D)], rot: [k * 25.7, 0, 0], color: '#94a3b8' })) ] },
    { t: 'cyl', r: 0.24, h: 0.02, n: 24, rot: ROT, pos: [0.25, 0, 0], color: '#1f2937' },
    { t: 'box', s: [0.7, 0.24, 0.05], pos: [0.0, 0.2, 0], color: '#cbd5e1' } ] });
  const flow = (y0, zz, top) => top
    ? [[2.2, y0, zz], [0.9, y0, zz], [0.45, y0 + 0.05, zz], [0.0, y0 + 0.1, zz], [-0.5, y0 + 0.04, zz], [-1.0, y0 - 0.12, zz], [-2.2, y0 - 0.45, zz]]
    : [[2.2, y0, zz], [0.9, y0, zz], [0.45, y0 - 0.02, zz], [0.0, y0 - 0.03, zz], [-0.5, y0 - 0.04, zz], [-1.0, y0 - 0.12, zz], [-2.2, y0 - 0.45, zz]];
  const puffs = (P, n, rate, color) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.04, n: 5, m: 8, pos: P[0], color, anim: { type: 'path', pts: P, wave: 'saw', rate, phase: k / n } }));
  const arrow = (from, dir, len, color) => {
    const rot = dir[1] > 0 ? [0, 0, 0] : dir[1] < 0 ? [180, 0, 0] : dir[0] > 0 ? [0, 0, -90] : [0, 0, 90];
    return { t: 'group', pos: from, rot, shapes: [ { t: 'cyl', r: 0.05, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.13, h: 0.3, n: 14, pos: [0, len, 0], color } ],
      anim: { type: 'scale', from: 0.92, to: 1.06, wave: 'sin01', rate: 0.8 } };
  };
  const winds = (side) => Array.from({ length: 16 }, (_, k) => ({ t: 'box', s: [0.08, 0.1, 0.01], pos: [1.85 - k * 0.24, 0.13, side * 0.513], color: '#1e293b', decal: 1 }));

  LIBRARY({
    id: 'aereo',
    lang: 'de',
    title: 'Das Flugzeug',
    intro: 'Wie kann ein Gegenstand von <b>400 Tonnen</b> in der Luft bleiben? Das Geheimnis steckt in der Form der <b>Flügel</b>: Die Luft, die an ihnen vorbeiströmt, wird nach unten gedrückt, und der Flügel bekommt einen Schub nach oben, den <b>Auftrieb</b>. Die Triebwerke sorgen dafür, dass die Geschwindigkeit erhalten bleibt.',
    model: {
      rx: 0.5, ry: -0.7, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.15,
      parts: [
        { id: 'fusoliera', name: 'Rumpf', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>Er ist der „Körper“ des Flugzeugs, eine lange Röhre aus Aluminium oder Kohlefaser. Innen sitzen die Passagiere, unter dem Boden liegt das Gepäck.</p>',
          more: '<p>Im Flug, in 11 000 Metern Höhe, ist der Druck draußen nur ein Viertel so hoch wie am Boden, und die Temperatur beträgt −50 °C. Der Rumpf ist <b>druckdicht</b>: Innen wird Luft hineingepumpt wie in einen Luftballon, damit man ganz normal atmen kann. Deshalb hat er die Form einer Röhre: Sie hält dem Druck besser stand.</p>',
          shapes: [ { t: 'lathe', n: 30, pts: FUS, rot: ROT }, ...winds(1), ...winds(-1),
            { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, 0.522], color: '#2563eb', decal: 1 }, { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, -0.522], color: '#2563eb', decal: 1 },
            { t: 'box', s: [0.16, 0.34, 0.01], pos: [2.3, 0.0, 0.517], color: '#cbd5e1', decal: 1 } ] },
        { id: 'cabina', name: 'Cockpit', label: 'Cockpit', color: '#1e293b', explode: [0.6, 0.2, 0],
          info: '<p>Ganz vorne, hinter den Fenstern, sitzen die <b>Piloten</b> mit dem Steuerhorn (oder dem Sidestick), den Schubhebeln der Triebwerke und vielen Bildschirmen. In der Nase befindet sich das <b>Wetterradar</b>.</p>',
          more: '<p>Einen großen Teil des Flugs übernimmt der <b>Autopilot</b>, aber die Piloten überwachen alles und führen Start und Landung durch. Moderne Flugzeuge sind „Fly-by-Wire“: Die Befehle der Piloten gehen an Computer, die die Steuerflächen mit Hydraulikmotoren bewegen.</p>',
          shapes: [ ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.14, 0.1, 0.12], pos: [2.98, 0.24, z], rot: [0, 0, -38], decal: 1 })),
            { t: 'cyl', r: 0.12, h: 0.05, n: 16, rot: ROT, pos: [3.3, 0, 0], color: '#94a3b8' } ] },
        { id: 'ali', name: 'Flügel', color: '#cbd5e1', explode: [0, -0.3, 0],
          info: '<p>Die Flügel sind das wichtigste Teil: Ihre gewölbte Form und ihre Neigung drücken die Luft nach <b>unten</b>; als Gegenreaktion drückt die Luft den Flügel nach <b>oben</b>. In ihnen sind die <b>Tanks</b> mit dem Treibstoff!</p>',
          more: '<p>Das Profil des Flügels (oben gewölbt, unten flacher) sorgt dafür, dass die Luft oben schneller strömt und einen <b>niedrigeren Druck</b> hat als die Luft darunter (Bernoulli-Prinzip). Der Druckunterschied hebt das Flugzeug an, denn er wirkt auf eine Fläche von mehreren hundert Quadratmetern. Die nach oben gebogenen Flügelenden (<b>Winglets</b>) verringern die Wirbel und sparen Treibstoff.</p>',
          shapes: [ wing(1), wing(-1) ] },
        { id: 'alettoni', name: 'Querruder', color: '#f59e0b', explode: [0, -0.3, 0],
          info: '<p>Das sind die „Klappen“ nahe den Flügelspitzen. Sie bewegen sich gegensätzlich: eine nach oben, eine nach unten. So hebt sich ein Flügel und der andere senkt sich, und das Flugzeug <b>neigt sich</b> in die Kurve.</p>',
          shapes: [ flapAt(2.6, 0.84, 0.2, 15, 0, '#f59e0b'), flapAt(-2.6, 0.84, 0.2, -15, 0, '#f59e0b') ] },
        { id: 'ipersostentatori', name: 'Landeklappen', label: 'Klappen', color: '#38bdf8', explode: [0, -0.5, 0],
          info: '<p>Beim Start und bei der Landung fliegt das Flugzeug langsamer. Die <b>Klappen</b> fahren hinten aus den Flügeln aus und senken sich: Der Flügel wird größer und stärker gewölbt und liefert auch bei niedriger Geschwindigkeit Auftrieb.</p>',
          shapes: [ flapAt(1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25), flapAt(-1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25) ] },
        { id: 'motori', name: 'Strahltriebwerke (Turbofan)', label: 'Triebwerke', color: '#e5e7eb', explode: [0.4, -0.6, 0],
          info: '<p>Der große <b>Fan</b> vorne saugt riesige Mengen Luft an und bläst sie nach hinten. Als Gegenreaktion wird das Flugzeug nach vorne geschoben: Das ist der <b>Schub</b>.</p>',
          more: '<p>Nur ein Teil der Luft gelangt ins „Herz“ des Triebwerks: Sie wird verdichtet, mit Kerosin gemischt und verbrannt; die heißen Gase treiben eine Turbine an, die den Fan dreht. Der größte Teil der Luft strömt außen vorbei (<b>Nebenstrom</b>) und liefert fast den ganzen Schub, bei weniger Lärm und Verbrauch.</p>',
          shapes: [ engine(1.15), engine(-1.15) ] },
        { id: 'deriva', name: 'Seitenflosse', color: '#2563eb', explode: [-0.4, 0.6, 0],
          info: '<p>Das ist die große senkrechte „Flosse“ am Heck. Wie die Federn eines Pfeils hält sie das Flugzeug auf Kurs und verhindert, dass es nach rechts oder links ausbricht.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: [[-2.15, 0.2], [-3.05, 0.2], [-3.55, 1.55], [-3.2, 1.55]], smooth: true } ] },
        { id: 'timone', name: 'Seitenruder', label: 'Seitenruder', color: '#f97316', explode: [-0.4, 0.6, 0],
          info: '<p>Der bewegliche Teil der Seitenflosse. Wenn man es nach rechts oder links dreht, schwenkt die Nase des Flugzeugs in diese Richtung. Der Pilot steuert es mit den <b>Pedalen</b>.</p>',
          shapes: [ { t: 'group', pos: [-3.27, 0.88, 0], rot: [0, 0, 20.3], anim: { type: 'swing', axis: 'y', amp: 14, rate: 0.35 }, shapes: [ { t: 'box', s: [0.2, 1.3, 0.05], pos: [-0.1, 0, 0], div: 1 } ] } ] },
        { id: 'stabilizzatori', name: 'Höhenflossen', label: 'Höhenflossen', color: '#cbd5e1', explode: [-0.5, 0.2, 0],
          info: '<p>Die kleinen Flügel am Heck halten das Flugzeug im Gleichgewicht, damit es nicht nach vorne kippt oder sich aufbäumt.</p>',
          shapes: [1, -1].map((s) => ({ t: 'extrude', d: 0.05, pts: [[-2.35, 0], [-3.0, 0], [-3.4, 1.25 * s], [-3.15, 1.25 * s]].map(([x, z], i) => [x, i < 2 ? 0 : z]), rot: [90, 0, 0], pos: [0, 0.12, 0] })) },
        { id: 'equilibratori', name: 'Höhenruder', color: '#f59e0b', explode: [-0.5, 0.2, 0],
          info: '<p>Das sind die beweglichen Teile der Höhenflossen. Wenn sie sich heben, geht das Heck nach unten und die Nase <b>steigt</b>; wenn sie sich senken, <b>sinkt</b> die Nase. Der Pilot steuert sie, indem er das Steuerhorn zieht oder drückt.</p>',
          shapes: [1, -1].map((s) => ({ t: 'group', pos: [-3.0 - 0.32 * 0.62, 0.12, 0.62 * s], rot: [0, -s * 17.7, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.3 }, shapes: [ { t: 'box', s: [0.16, 0.03, 1.0], pos: [-0.08, 0, 0], div: 1 } ] })) },
        { id: 'carrello', name: 'Fahrwerk', color: '#374151', explode: [0, -0.6, 0],
          info: '<p>Die Räder, auf denen das Flugzeug beim Start und bei der Landung rollt. Nach dem Start werden sie in den Bauch <b>eingefahren</b>, damit sie keinen Luftwiderstand verursachen.</p>',
          more: '<p>Flugzeugreifen werden mit <b>Stickstoff</b> auf sehr hohen Druck (etwa 14 bar) aufgepumpt und berühren den Boden bei fast 250 km/h. Die Stoßdämpfer fangen den Schlag der Landung ab.</p>',
          shapes: [ ...[0.55, -0.55].flatMap((z) => [ { t: 'cyl', r: 0.035, h: 0.55, n: 10, pos: [-0.25, -0.75, z], color: '#9ca3af' }, { t: 'box', s: [0.4, 0.04, 0.08], pos: [-0.25, -1.0, z], color: '#6b7280' },
              ...[-0.12, 0.12].map((dx) => ({ t: 'cyl', r: 0.12, h: 0.1, n: 18, rot: [90, 0, 0], pos: [-0.25 + dx, -1.06, z] })) ]),
            { t: 'cyl', r: 0.03, h: 0.5, n: 10, pos: [2.5, -0.68, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.09, h: 0.1, n: 16, rot: [90, 0, 0], pos: [2.5, -0.98, 0] } ] },
        { id: 'aria', name: 'Luftströmung', label: 'Luftströmung', color: '#0ea5e9', noLabel: true, explode: [0, 0, 1.2],
          info: '<p>Die Luft, die <b>über</b> den Flügel strömt (dunkelblaue Punkte), ist schneller als die, die <b>darunter</b> strömt (hellblau), und am Ende wird sie ein Stück nach unten abgelenkt.</p>',
          shapes: puffs(flow(-0.1, 1.6, true), 9, 0.75, '#0369a1').concat(puffs(flow(-0.32, 1.6, false), 9, 0.5, '#7dd3fc')) },
        { id: 'forze', name: 'Die vier Kräfte des Fliegens', label: 'Kräfte', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>Beim Fliegen wirken vier Kräfte: <b>Auftrieb</b> (grün, nach oben, von den Flügeln), <b>Gewicht</b> (rot, nach unten), <b>Schub</b> (blau, nach vorne, von den Triebwerken) und <b>Widerstand</b> (orange, die bremsende Luft).</p>',
          more: '<p>Im Horizontalflug mit gleichbleibender Geschwindigkeit sind die Kräfte im Gleichgewicht: Auftrieb = Gewicht und Schub = Widerstand. Zum Steigen erhöht der Pilot den Auftrieb (Geschwindigkeit oder Neigung der Flügel); zum Beschleunigen gibt er mehr Schub.</p>',
          shapes: [ arrow([0, 0.55, 0], [0, 1, 0], 1.0, '#22c55e'), arrow([0, -0.55, 0], [0, -1, 0], 1.0, '#ef4444'), arrow([3.4, 0, 0], [1, 0, 0], 0.6, '#3b82f6'), arrow([-3.4, 0, 0], [-1, 0, 0], 0.45, '#f97316') ] }
      ]
    },
    steps: [
      { icon: '✈️', title: 'Schwerer als Luft', explode: 0,
        html: '<p>Ein Verkehrsflugzeug wiegt Hunderte von Tonnen und fliegt trotzdem! Es schwebt nicht wie ein Ballon: Es bleibt oben, weil es sich <b>sehr schnell bewegt</b> und die Flügel beim Durchqueren der Luft einen Schub nach oben erhalten.</p>' },
      { icon: '⚖️', title: 'Die vier Kräfte', focus: ['forze', 'fusoliera', 'ali', 'motori'], explode: 0, view: { rx: 0.3, ry: -0.35 },
        html: '<p><b>Auftrieb</b> nach oben, <b>Gewicht</b> nach unten, <b>Schub</b> nach vorne, <b>Widerstand</b> nach hinten. Damit das Flugzeug geradeaus fliegt, muss der Auftrieb das Gewicht ausgleichen und der Schub den Luftwiderstand überwinden.</p>' },
      { icon: '🪽', title: 'Das Geheimnis der Flügel', focus: ['ali', 'aria'], explode: 0, view: { rx: 0.05, ry: -0.05 }, zoom: 1.15,
        html: '<p>Der Flügel ist ein wenig <b>geneigt</b> und gewölbt. Die Luft oben strömt schneller und ihr Druck sinkt; unten ist der Druck höher. Der Flügel wird nach oben „gesaugt“ und drückt gleichzeitig die Luft nach unten.</p><p class="tip">🖐️ Probier es aus: Halte im Auto (mit einem Erwachsenen!) die flache Hand aus dem Fenster und neige sie ein klein wenig: Du spürst, wie sie nach oben steigt.</p>' },
      { icon: '🌀', title: 'Die Triebwerke liefern den Schub', focus: ['motori'], explode: 0.2, view: { rx: 0.15, ry: 0.5 },
        html: '<p>Der große Fan der <b>Strahltriebwerke</b> saugt vorne Luft an und bläst sie mit großer Kraft nach hinten. Als Gegenreaktion wird das Flugzeug nach vorne geschoben, wie ein Luftballon, aus dem die Luft entweicht.</p>' },
      { icon: '🕹️', title: 'So wird gesteuert: drei Steuerungen', focus: ['alettoni', 'equilibratori', 'timone', 'deriva', 'stabilizzatori'], explode: 0, view: { rx: 0.45, ry: -1.0 },
        html: '<p>Die <b>Querruder</b> (an den Flügeln) neigen das Flugzeug nach rechts oder links. Die <b>Höhenruder</b> (am Heck) heben oder senken die Nase. Das <b>Seitenruder</b> (an der Seitenflosse) schwenkt die Nase nach rechts oder links.</p>' },
      { icon: '🛬', title: 'Start und Landung', focus: ['ipersostentatori', 'carrello', 'ali'], explode: 0, view: { rx: -0.1, ry: -0.7 },
        html: '<p>Bei langsamer Fahrt liefern die Flügel weniger Auftrieb. Deshalb fahren die <b>Klappen</b> aus: Sie machen den Flügel größer und stärker gewölbt. Das <b>Fahrwerk</b> fährt aus, um die Landebahn zu berühren, und wird nach dem Start eingefahren.</p>' },
      { icon: '🧑‍✈️', title: 'Rumpf und Cockpit', focus: ['fusoliera', 'cabina'], explode: 0.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>Im <b>Rumpf</b> reisen Passagiere und Gepäck; er ist druckdicht, weil die Luft in 11 000 Metern Höhe zu dünn zum Atmen ist. Im <b>Cockpit</b> überwachen die Piloten alles, unterstützt vom Autopiloten.</p>' }
    ],
    facts: [
      { icon: '🛩️', title: '12 Sekunden Flug', html: 'Der erste Motorflug der Brüder <b>Wright</b> (1903) dauerte 12 Sekunden und führte über 37 Meter: weniger als die Länge eines heutigen Verkehrsflugzeugs!' },
      { icon: '🎨', title: 'Leonardo und das Fliegen', html: '<b>Leonardo da Vinci</b> untersuchte vor 500 Jahren den Flug der Vögel und zeichnete Flugmaschinen, sogar eine „Luftschraube“, die dem Hubschrauber ähnelt.' },
      { icon: '⛽', title: 'Viel Treibstoff', html: 'Ein großes Verkehrsflugzeug kann mehr als <b>200 000 Liter</b> Kerosin laden, fast alles davon in den Flügeln.' },
      { icon: '⚡', title: 'Blitze? Kein Problem', html: 'Jedes Verkehrsflugzeug wird etwa einmal im Jahr von einem Blitz getroffen. Der Strom fließt über die Metallhaut, und die Passagiere sind sicher, wie in einem Käfig.' }
    ],
    quiz: [
      { type: 'mc', q: 'Wie heißt die Kraft, die das Flugzeug oben hält?', options: ['Schub', 'Auftrieb', 'Widerstand', 'Gewicht'], answer: 1, explain: 'Der Auftrieb entsteht an den Flügeln und gleicht das Gewicht des Flugzeugs aus.' },
      { type: 'mc', q: 'Was liefern die Strahltriebwerke?', options: ['Den Auftrieb', 'Den Schub nach vorne', 'Das Gewicht', 'Das Gleichgewicht'], answer: 1, explain: 'Sie drücken die Luft nach hinten, und als Gegenreaktion fliegt das Flugzeug nach vorne.' },
      { type: 'mc', q: 'Welche Flächen neigen das Flugzeug nach rechts oder links?', options: ['Das Seitenruder', 'Die Querruder', 'Das Fahrwerk', 'Die Fenster'], answer: 1, explain: 'Die Querruder bewegen sich an den beiden Flügeln gegensätzlich und neigen das Flugzeug.' },
      { type: 'tf', q: 'Über dem Flügel strömt die Luft schneller und hat einen niedrigeren Druck.', answer: true, explain: 'Der Druckunterschied zwischen unten und oben drückt den Flügel nach oben.' },
      { type: 'mc', q: 'Wozu dienen die Landeklappen?', options: ['Zum Bremsen im Flug in großer Höhe', 'Um mehr Auftrieb zu geben, wenn das Flugzeug langsam fliegt', 'Zum Beleuchten', 'Zum Kühlen der Triebwerke'], answer: 1, explain: 'Beim Start und bei der Landung machen die Klappen den Flügel größer und stärker gewölbt.' },
      { type: 'mc', q: 'Wo befindet sich der meiste Treibstoff?', options: ['Im Heck', 'In den Flügeln', 'Im Cockpit', 'Unter den Sitzen'], answer: 1, explain: 'Die Haupttanks befinden sich in den Flügeln.' }
    ]
  });
})();
