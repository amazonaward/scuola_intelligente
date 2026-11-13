/* L'occhio umano. Il bulbo guarda verso +x (la luce arriva da destra, da un alberello); la sclera è semitrasparente per vedere dentro.
   I solidi "di rotazione" sono costruiti lungo y e girati di −90° intorno a z (così y diventa x). */
(function () {
  const AX = [0, 0, -90];
  const arc = (r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; return [Math.max(0, r * Math.cos(a)), r * Math.sin(a)]; });
  const tree = (s) => [ { t: 'cyl', r: 0.06 * s, h: 0.4 * s, n: 10, pos: [0, 0.2 * s, 0], color: '#92400e' }, { t: 'cone', r: 0.32 * s, h: 0.55 * s, n: 16, pos: [0, 0.65 * s, 0], color: '#16a34a' }, { t: 'cone', r: 0.24 * s, h: 0.42 * s, n: 16, pos: [0, 0.95 * s, 0], color: '#22c55e' } ];
  const TOP = [4.2, 1.05, 0], BASE = [4.2, -0.4, 0];
  const RAYS = [ [TOP, [1.33, 0.3, 0], [0.86, 0.17, 0], [-1.06, -0.24, 0]], [TOP, [1.3, 0.05, 0.12], [0.86, 0.02, 0.08], [-1.06, -0.24, 0]], [BASE, [1.33, -0.25, 0], [0.86, -0.15, 0], [-1.06, 0.12, 0]], [BASE, [1.3, 0.02, -0.12], [0.86, 0.0, -0.08], [-1.06, 0.12, 0]] ];
  const rayShapes = [];
  RAYS.forEach((pts, i) => {
    rayShapes.push({ t: 'pipe', r: 0.01, n: 5, pts, color: i < 2 ? '#fde047' : '#fb923c', alpha: 0.55 });
    for (let k = 0; k < 4; k++) rayShapes.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: pts[0], color: i < 2 ? '#fde047' : '#fb923c', anim: { type: 'path', pts, wave: 'saw', rate: 0.7, phase: k / 4 + i * 0.1 } });
  });
  const NERVE = [[-1.12, -0.06, -0.24], [-1.6, -0.08, -0.3], [-2.2, -0.05, -0.32], [-2.9, 0.05, -0.3]];
  const vessels = [[[-1.07, -0.04, -0.22], [-0.95, 0.45, -0.3], [-0.7, 0.75, -0.4]], [[-1.07, -0.04, -0.22], [-0.9, -0.5, -0.35], [-0.65, -0.8, -0.35]], [[-1.07, -0.04, -0.22], [-0.85, 0.35, 0.45], [-0.55, 0.55, 0.75]], [[-1.07, -0.04, -0.22], [-0.85, -0.45, 0.4], [-0.6, -0.65, 0.65]]]
    .map((pts) => ({ t: 'pipe', r: 0.016, n: 5, curve: true, pts, color: '#b91c1c' }));
  const muscle = (rot) => ({ t: 'group', rot, shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[-2.1, 0.22, 0], [-1.25, 0.9, 0], [-0.3, 1.25, 0], [0.45, 1.16, 0]], scale: [1, 1, 1.7] } ] });

  LIBRARY({
    id: 'occhio',
    lang: 'de',
    title: 'Das Auge',
    intro: 'Das Auge ist eine <b>natürliche Kamera</b>: eine nussgroße Kugel, die Licht sammelt, es mit einer Linse scharf stellt und in Signale für das Gehirn verwandelt. Folgen wir dem Licht ins Auge!',
    model: {
      rx: 0.18, ry: -0.42, speed: 0.4, height: 470, bg: 'body', fit: 1.0,
      parts: [
        { id: 'sclera', name: 'Lederhaut (das Weiße im Auge)', label: 'Lederhaut', color: '#f8fafc', alpha: 0.3, explode: [-0.4, 0, -1.2],
          info: '<p>Die weiße, robuste „Wand“, die das Auge umhüllt und ihm die Kugelform gibt. Sie ist das <b>Weiße im Auge</b>.</p>',
          more: '<p>Unter der Lederhaut liegt die <b>Aderhaut</b>, eine Schicht voller Blutgefäße, die die Netzhaut ernährt und dunkel ist, damit das Licht im Auge nicht „zurückprallt“, wie das schwarze Innere einer Kamera.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.2]].concat(arc(1.2, -88, 63, 18)), ds: true } ] },
        { id: 'cornea', name: 'Hornhaut', color: '#bae6fd', alpha: 0.25, explode: [1.0, 0, 0],
          info: '<p>Das durchsichtige „Fenster“ vor dem Auge, gewölbt wie ein Uhrglas. Sie ist die erste Linse, die das Licht durchquert: Sie übernimmt schon einen großen Teil der Scharfstellung.</p>',
          more: '<p>Die Hornhaut hat keine Blutgefäße (damit sie durchsichtig ist!): Sie bekommt Sauerstoff direkt aus der Luft und aus den Tränen. Laseroperationen, mit denen man keine Brille mehr braucht, verändern ihre Wölbung ein wenig.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pos: [0, 0, 0], pts: arc(0.71, 39, 90, 8).map(([r, y]) => [r, y + 0.62]), ds: true } ] },
        { id: 'iride', name: 'Regenbogenhaut', color: '#2563eb', explode: [0.7, 0.4, 0.4],
          info: '<p>Die „farbige Scheibe“ des Auges: blau, grün, braun … Sie ist ein kleiner Muskel, der die <b>Pupille weiter oder enger macht</b>, damit mehr oder weniger Licht hineinkommt.</p>',
          more: '<p>Die Farbe hängt von der Menge an <b>Melanin</b> ab: viel = braune Augen, wenig = blaue Augen. Das Muster der Regenbogenhaut ist bei jedem Menschen einzigartig, noch mehr als Fingerabdrücke.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.03, n: 36, rot: AX, pos: [1.0, 0, 0] }, { t: 'tube', r: 0.52, ri: 0.4, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#1e3a8a' },
            { t: 'tube', r: 0.34, ri: 0.3, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#60a5fa' } ] },
        { id: 'pupilla', name: 'Pupille', color: '#020617', explode: [0.9, 0.4, 0.4],
          info: '<p>Das schwarze „Loch“ in der Mitte der Regenbogenhaut, durch das das Licht eintritt. Im Dunkeln wird sie weit, um mehr Licht zu sammeln; bei Sonne wird sie eng, damit wir nicht geblendet werden.</p>',
          more: '<p>Das ist ein automatischer Reflex, der <b>Pupillenreflex</b>: Ärzte prüfen ihn mit einem kleinen Lämpchen. Die Pupille kann zwischen 2 und 8 mm Durchmesser haben.</p>',
          shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 28, rot: AX, pos: [1.025, 0, 0], decal: 1, anim: { type: 'scale', from: 0.65, to: 1.45, rate: 0.25, axis: 'xz' } } ] },
        { id: 'cristallino', name: 'Augenlinse', color: '#fef9c3', alpha: 0.65, explode: [0.5, 1.0, 0.4],
          info: '<p>Eine durchsichtige, elastische <b>Linse</b> hinter der Pupille. Sie ändert ihre Form, um scharf zu stellen: Sie <b>wölbt sich</b>, um nah zu sehen, und <b>flacht ab</b>, um fern zu sehen.</p>',
          more: '<p>Mit dem Alter wird die Linse steifer: Deshalb brauchen viele Menschen nach dem 45. Lebensjahr eine Lesebrille (<b>Altersweitsichtigkeit</b>). Wird sie trüb, spricht man vom <b>grauen Star</b>, der behandelt wird, indem man sie durch eine künstliche Linse ersetzt.</p>',
          shapes: [ { t: 'sphere', r: 0.4, n: 14, m: 24, scale: [0.42, 1, 1], pos: [0.82, 0, 0], anim: { type: 'scale', from: 1, to: 1.3, axis: 'x', rate: 0.25, phase: 0.5 } } ] },
        { id: 'muscolo-ciliare', name: 'Ziliarmuskel', label: 'Ziliarmuskel', color: '#be123c', explode: [0.4, -0.9, 0.3],
          info: '<p>Ein kleiner Muskelring um die Linse, mit ihr durch viele Fäserchen verbunden. Wenn er sich anspannt oder entspannt, verändert er die Form der Linse.</p>',
          shapes: [ { t: 'torus', R: 0.5, r: 0.06, n: 32, m: 8, rot: [0, 0, 90], pos: [0.85, 0, 0] } ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [k * 22.5, 0, 0], shapes: [ { t: 'cyl', r: 0.006, h: 0.12, n: 4, pos: [0.84, 0.42, 0], color: '#fda4af' } ] }))) },
        { id: 'vitreo', name: 'Glaskörper', label: 'Glaskörper', color: '#e0f2fe', alpha: 0.16, explode: [-0.4, 0, 0.9],
          info: '<p>Das Innere des Auges ist mit einer <b>durchsichtigen Gallerte</b> gefüllt, dem Glaskörper. Er hält das Auge prall und rund und lässt das Licht durch.</p>',
          more: '<p>Manchmal schweben im Glaskörper kleine Klümpchen: Das sind die „fliegenden Mücken“, die man sieht, wenn man in den blauen Himmel schaut. Meist sind sie harmlos.</p>',
          shapes: [ { t: 'sphere', r: 1.08, n: 16, m: 28, scale: [0.96, 1, 1], pos: [-0.05, 0, 0] } ] },
        { id: 'retina', name: 'Netzhaut', color: '#fb7185', alpha: 0.5, explode: [-1.2, 0, 0],
          info: '<p>Die „Leinwand“ hinten im Auge, auf der das Licht das Bild erzeugt. Sie besteht aus Millionen lichtempfindlicher Zellen, den <b>Fotorezeptoren</b>: Die <b>Zapfen</b> sehen Farben, die <b>Stäbchen</b> funktionieren auch bei wenig Licht.</p>',
          more: '<p>In der Netzhaut gibt es etwa <b>120 Millionen Stäbchen</b> und 6 Millionen Zapfen. Es gibt drei Arten von Zapfen: für Rot, Grün und Blau. Indem das Gehirn ihre Signale mischt, „sieht“ es Tausende Farben.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.12]].concat(arc(1.12, -88, 32, 14)), ds: true } ] },
        { id: 'macula', name: 'Fovea (Gelber Fleck)', label: 'Fovea', color: '#facc15', explode: [-1.5, 0.2, 0.2],
          info: '<p>Ein Pünktchen der Netzhaut direkt hinter der Linse, voller Zapfen: Hier sehen wir am <b>schärfsten</b>. Wenn du liest, bewegst du die Augen, um jedes Wort auf die Fovea zu bringen.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 8, m: 14, scale: [0.2, 1, 1], pos: [-1.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 6, m: 10, scale: [0.2, 1, 1], pos: [-1.1, 0, 0.0], color: '#ca8a04' } ] },
        { id: 'vasi', name: 'Blutgefäße der Netzhaut', label: 'Blutgefäße', color: '#b91c1c', explode: [-1.3, 0, 0],
          info: '<p>Kleine Arterien und Venen gehen vom Sehnerv aus und breiten sich über die Netzhaut aus, um sie zu ernähren. Der Augenarzt sieht sie, wenn er mit einem Lämpchen in die Pupille schaut.</p>',
          shapes: vessels },
        { id: 'nervo-ottico', name: 'Sehnerv', label: 'Sehnerv', color: '#fde68a', explode: [-1.6, 0, -0.3],
          info: '<p>Ein „Kabel“ aus einer Million Nervenfasern, das die Signale von der Netzhaut zum <b>Gehirn</b> bringt. Das Gehirn, im hinteren Teil des Kopfes, „sieht“ in Wirklichkeit.</p>',
          more: '<p>Dort, wo der Nerv die Netzhaut verlässt, gibt es keine Fotorezeptoren: Das ist der <b>blinde Fleck</b>. Wir merken ihn nicht, weil das Gehirn das „Loch füllt“, mit dem, was es ringsum sieht, und mit dem anderen Auge.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 16, curve: true, pts: NERVE }, { t: 'cyl', r: 0.15, h: 0.03, n: 20, rot: AX, pos: [-1.08, -0.05, -0.23], color: '#fffbeb' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.9, phase: k / 6 }, { type: 'blink', color: '#38bdf8', rate: 1.8, phase: k / 6 } ] }))) },
        { id: 'muscoli', name: 'Augenmuskeln', label: 'Muskeln', color: '#dc2626', explode: [-0.6, 0.6, 0],
          info: '<p>Sechs Muskeln, die an der Lederhaut ansetzen, bewegen das Auge in alle Richtungen: nach oben, unten, rechts, links und auch ein wenig drehend. Sie gehören zu den schnellsten Muskeln des Körpers.</p>',
          shapes: [ muscle([0, 0, 0]), muscle([180, 0, 0]), muscle([90, 0, 0]), muscle([-90, 0, 0]) ] },
        { id: 'luce', name: 'Lichtstrahlen', label: 'Lichtstrahlen', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>Das Licht, das vom Baum zurückgeworfen wird, tritt ins Auge ein. Hornhaut und Linse <b>brechen</b> es (Lichtbrechung), sodass sich die von einem Punkt ausgehenden Strahlen wieder in einem Punkt der Netzhaut treffen.</p>',
          more: '<p>Ist das Auge ein wenig zu lang, entsteht das Bild <b>vor</b> der Netzhaut: Das ist die <b>Kurzsichtigkeit</b> (man sieht in der Ferne schlecht). Ist es zu kurz, entsteht es dahinter: Das ist die <b>Weitsichtigkeit</b>. Brillengläser verschieben den Brennpunkt an die richtige Stelle.</p>',
          shapes: rayShapes },
        { id: 'oggetto', name: 'Was wir anschauen', label: 'Baum', color: '#16a34a', pos: [4.2, -0.4, 0], explode: [0.8, 0, 0],
          info: '<p>Ein Gegenstand wird sichtbar, weil er <b>Licht aussendet</b> (wie eine Glühbirne) oder weil er das Licht, das ihn trifft, <b>zurückwirft</b> (wie dieser Baum). In völliger Dunkelheit sehen wir nichts.</p>',
          shapes: tree(1.0) },
        { id: 'immagine', name: 'Umgekehrtes Bild', label: 'Bild', color: '#16a34a', pos: [-0.98, 0.12, 0], explode: [-1.4, 0, 0.3],
          info: '<p>Auf der Netzhaut ist das Bild des Baumes <b>winzig klein und steht auf dem Kopf</b>! Das Gehirn richtet es wieder auf: Das lernen wir schon als Babys.</p>',
          shapes: [ { t: 'group', rot: [0, 90, 180], scale: 0.32, shapes: tree(1.0) } ] }
      ]
    },
    steps: [
      { icon: '👁️', title: 'Eine natürliche Kamera', explode: 0,
        html: '<p>Das Auge ist eine Kugel von etwa <b>2,4 cm</b>. Wie eine Kamera hat es eine Öffnung (die <b>Pupille</b>), eine Linse (die <b>Augenlinse</b>) und eine lichtempfindliche „Leinwand“ (die <b>Netzhaut</b>).</p>' },
      { icon: '🌳', title: 'Das Licht tritt ein', focus: ['oggetto', 'luce', 'cornea', 'pupilla', 'iride'], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Wir sehen einen Gegenstand, wenn sein Licht in unsere Augen gelangt. Das Licht geht durch die <b>Hornhaut</b>, das durchsichtige Fenster, und tritt durch die <b>Pupille</b> ein.</p>' },
      { icon: '🔵', title: 'Die Regenbogenhaut regelt das Licht', focus: ['iride', 'pupilla', 'cornea'], view: { rx: 0.1, ry: -1.35 }, zoom: 1.8,
        html: '<p>Die <b>Regenbogenhaut</b>, der farbige Teil, ist ein Muskel: Im Dunkeln macht sie die Pupille weit, damit mehr Licht hineinkommt, bei Sonne macht sie sie eng.</p><p class="tip">🪞 Probier es vor dem Spiegel: Schließe die Augen für ein paar Sekunden, öffne sie wieder und schau, wie sich die Pupille verengt!</p>' },
      { icon: '🔍', title: 'Die Linse stellt scharf', focus: ['cristallino', 'muscolo-ciliare', 'luce'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.6,
        html: '<p>Die <b>Augenlinse</b> ist eine elastische Linse. Der <b>Ziliarmuskel</b> lässt sie sich wölben, um nah zu schauen, und flacht sie ab, um fern zu schauen: So ist das Bild auf der Netzhaut immer scharf.</p>' },
      { icon: '🙃', title: 'Ein umgekehrtes Bild', focus: ['retina', 'immagine', 'luce', 'macula'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.5,
        html: '<p>Die Strahlen kreuzen sich, und auf der <b>Netzhaut</b> entsteht ein kleines, <b>umgekehrtes</b> Bild. Die Zapfen und Stäbchen der Netzhaut verwandeln es in elektrische Signale. Die schärfste Stelle ist die <b>Fovea</b>.</p>' },
      { icon: '🧠', title: 'Das Gehirn sieht', focus: ['nervo-ottico', 'retina', 'vasi'], view: { rx: 0.2, ry: 0.5 },
        html: '<p>Der <b>Sehnerv</b> bringt die Signale zum Gehirn. Das Gehirn richtet das Bild wieder auf, verbindet die Bilder der beiden Augen (so sehen wir dreidimensional) und versteht, was wir anschauen.</p>' },
      { icon: '↔️', title: 'Augen immer in Bewegung', focus: ['muscoli', 'sclera'], view: { rx: 0.35, ry: -0.7 },
        html: '<p>Sechs <b>Muskeln</b> bewegen jedes Auge. Auch wenn du glaubst, einen Punkt zu fixieren, machen die Augen ständig kleine Ruckbewegungen: Ohne sie würde das Bild verblassen!</p><p class="tip">😉 Wir blinzeln etwa 15 Mal pro Minute: Die Tränen reinigen und befeuchten die Hornhaut.</p>' }
    ],
    facts: [
      { icon: '📸', title: 'Schneller als ein Foto', html: 'Das Auge stellt in einem Bruchteil einer Sekunde scharf und unterscheidet etwa <b>eine Million</b> Farbnuancen.' },
      { icon: '🦅', title: 'Adleraugen', html: 'Ein Adler sieht ein Kaninchen aus mehr als 3 km Entfernung: Seine Netzhaut hat viel mehr Zapfen als unsere.' },
      { icon: '🐝', title: 'Unsichtbare Farben', html: 'Bienen sehen <b>ultraviolettes</b> Licht, das für uns unsichtbar ist: Viele Blumen haben „geheime“ Muster, die nur sie sehen.' },
      { icon: '🔴', title: 'Farbenblindheit', html: 'Etwa 1 von 12 Jungen oder Männern verwechselt manche Farben, meist Rot und Grün: Das nennt man <b>Farbenblindheit</b> (auch „Daltonismus“), nach dem Chemiker John Dalton, der darunter litt.' },
      { icon: '👶', title: 'Neugeborene', html: 'Neugeborene sehen verschwommen und fast schwarz-weiß; das Sehen wird mit etwa 3–5 Jahren wie das von Erwachsenen.' }
    ],
    quiz: [
      { type: 'mc', q: 'Welcher Teil des Auges regelt, wie viel Licht eintritt?', options: ['Die Netzhaut', 'Die Regenbogenhaut', 'Der Sehnerv', 'Die Lederhaut'], answer: 1, explain: 'Die Regenbogenhaut macht die Pupille weiter oder enger.' },
      { type: 'mc', q: 'Wie heißt die elastische Linse, die scharf stellt?', options: ['Hornhaut', 'Pupille', 'Augenlinse', 'Fovea'], answer: 2, explain: 'Die Augenlinse ändert ihre Form, um nah oder fern scharf zu stellen.' },
      { type: 'tf', q: 'Auf der Netzhaut entsteht das Bild umgekehrt.', answer: true, explain: 'Die Strahlen kreuzen sich beim Durchgang durch die Linse; das Gehirn richtet das Bild wieder auf.' },
      { type: 'mc', q: 'Welche Zellen der Netzhaut lassen uns Farben sehen?', options: ['Die Stäbchen', 'Die Zapfen', 'Die roten Blutkörperchen', 'Die Nervenzellen der Nase'], answer: 1, explain: 'Die Zapfen sehen Farben; die Stäbchen funktionieren bei wenig Licht.' },
      { type: 'order', q: 'Bring die Reise des Lichts im Auge in die richtige Reihenfolge', items: ['Hornhaut', 'Pupille', 'Augenlinse', 'Glaskörper', 'Netzhaut', 'Sehnerv'], explain: 'Das Licht durchquert Hornhaut, Pupille, Linse und Glaskörper; die Netzhaut verwandelt es in Signale, die der Sehnerv zum Gehirn bringt.' },
      { type: 'mc', q: 'Wenn das Bild vor der Netzhaut entsteht und man in der Ferne schlecht sieht, ist man …', options: ['Kurzsichtig', 'Farbenblind', 'Alterssichtig', 'Blind'], answer: 0, explain: 'Das ist die Kurzsichtigkeit: Sie wird mit Zerstreuungslinsen korrigiert.' }
    ]
  });
})();
