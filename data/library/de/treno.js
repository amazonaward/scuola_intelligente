/* Il treno elettrico ad alta velocità (motrice di testa). Il treno viaggia verso +x; alto = +y; i binari corrono lungo x (scartamento: z = ±0.43).
   Le traversine scorrono all'indietro per dare l'idea del movimento. */
(function () {
  const TAU = Math.PI * 2, RW = 0.28, WR = 2.2; // raggio ruota, velocità di rotazione delle ruote
  const SPEED = WR * TAU * RW;           // velocità del treno (unità per giro dell'orologio)
  const SL = 0.6;                        // passo delle traversine
  const PROFILE = [[-3.2, 0.62], [2.2, 0.62], [2.75, 0.66], [3.15, 0.78], [3.36, 0.94], [3.34, 1.06], [3.05, 1.3], [2.45, 1.64], [1.85, 1.86], [1.2, 1.92], [-3.2, 1.92]];
  const wheelset = (x) => ({ t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [
    { t: 'cyl', r: 0.05, h: 1.0, n: 12, rot: [90, 0, 0], color: '#6b7280' },
    ...[-0.43, 0.43].map((z) => ({ t: 'cyl', r: RW, h: 0.07, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#9ca3af' })),
    ...[-0.38, 0.38].map((z) => ({ t: 'cyl', r: RW + 0.035, h: 0.025, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#6b7280' })),
    ...[-0.43, 0.43].map((z) => ({ t: 'box', s: [0.3, 0.04, 0.075], pos: [0, 0, z + Math.sign(z) * 0.002], color: '#475569' })) ] });
  const AXLES = [-2.55, -1.75, 1.15, 1.95];
  const bogie = (x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
    { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, 0.52] }, { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, -0.52] }, { t: 'box', s: [0.16, 0.1, 1.04], pos: [0, 0.36, 0] },
    ...[-0.4, 0.4].map((dx) => ({ t: 'pipe', r: 0.012, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 22 }, (_, i) => [dx + 0.05 * Math.cos(i * 1.2), 0.4 + i * 0.008, 0.52 + 0.05 * Math.sin(i * 1.2)]) })) ] });
  const sleepers = Array.from({ length: 15 }, (_, k) => ({ t: 'box', s: [0.16, 0.08, 1.35], pos: [-4.2 + k * SL, -0.07, 0], color: '#78716c', div: 1 }));
  const POLES = [-3.4, 3.4];
  const CUR = [[-1.45, 2.78, 0], [-1.45, 2.2, 0], [-1.45, 1.95, 0], [-1.2, 1.7, 0.1], [-0.5, 0.75, 0.1], [0.0, 0.5, 0.1], [0.65, 0.5, 0.1], [1.1, 0.55, 0.1], [1.15, 0.42, 0.25], [1.15, RW + 0.02, 0.43], [1.15, 0.0, 0.43]];

  LIBRARY({
    lang: 'de',
    id: 'treno',
    title: 'Der Zug',
    intro: 'Ein Hochgeschwindigkeitszug fährt mit <b>300 km/h</b>, ohne Treibstoff zu verbrennen: Er holt sich <b>Strom</b> aus einem Draht über den Gleisen und verwandelt ihn mit starken Elektromotoren in Bewegung. Stahlräder auf Stahlschienen: ganz wenig Reibung!',
    model: {
      rx: 0.15, ry: -0.6, speed: 0.4, height: 460, fit: 1.15,
      parts: [
        { id: 'cassa', name: 'Wagenkasten (Karosserie)', label: 'Wagenkasten', color: '#dc2626', alpha: 0.62, explode: [0, 0.9, 0],
          info: '<p>Das ist die „Schale“ des Zuges, aus Aluminium. Die schlanke Nase <b>schneidet durch die Luft</b>: Bei hoher Geschwindigkeit ist der Luftwiderstand die größte Mühe, die es zu überwinden gilt.</p>',
          more: '<p>Bei 300 km/h dient mehr als 80 % der Energie dazu, die Luft zur Seite zu schieben. Deshalb haben schnelle Züge eine lange Nase, glatte Seitenwände und sogar verkleidete Drehgestelle. Die Nase eines japanischen Zuges wurde nach dem Vorbild des Eisvogelschnabels gestaltet!</p>',
          shapes: [ { t: 'extrude', d: 1.06, pts: PROFILE, smooth: true },
            { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, 0.535], color: '#0f172a', alpha: 0.9, decal: 1 }, { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, -0.535], color: '#0f172a', alpha: 0.9, decal: 1 },
            { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, 0.536], color: '#e5e7eb', alpha: 1, decal: 1 }, { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, -0.536], color: '#e5e7eb', alpha: 1, decal: 1 },
            { t: 'box', s: [0.42, 0.9, 0.012], pos: [-2.75, 1.13, 0.537], color: '#9ca3af', alpha: 0.9, decal: 2 },
            { t: 'box', s: [0.62, 0.02, 0.86], pos: [2.755, 1.478, 0], rot: [0, 0, -30], color: '#0f172a', alpha: 0.95, decal: 1 },
            { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, 0.537], color: '#9ca3af', alpha: 1, decal: 1 }, { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, -0.537], color: '#9ca3af', alpha: 1, decal: 1 },
            { t: 'box', s: [1.6, 0.14, 0.7], pos: [0.3, 1.99, 0], color: '#9ca3af', alpha: 1 } ] },
        { id: 'cabina', name: 'Führerstand', label: 'Führerstand', color: '#334155', explode: [0.6, 0.9, 0],
          info: '<p>Hier sitzt der <b>Lokführer</b>. Er hat den Hebel zum Beschleunigen (den „Fahrschalter“), den Bremshebel, die Bildschirme und das Funkgerät. Ein Lenkrad gibt es nicht: Die Schienen bestimmen, wohin es geht!</p>',
          more: '<p>Bei hoher Geschwindigkeit würden die Signale neben den Gleisen viel zu schnell vorbeiziehen: Die Informationen kommen deshalb direkt auf die Bildschirme im Führerstand (System <b>ERTMS</b>). Reagiert der Lokführer nicht, bremst der Zug von selbst.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.35, 0.8], pos: [2.35, 1.0, 0], color: '#1f2937' }, { t: 'box', s: [0.45, 0.04, 0.7], pos: [2.4, 1.2, 0], rot: [0, 0, 20], color: '#475569' },
            { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, 0.0], rot: [0, 0, 20], color: '#22c55e', decal: 1 }, { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, -0.2], rot: [0, 0, 20], color: '#38bdf8', decal: 1 },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [1.75, 0.95, 0.15], color: '#1e3a8a' }, { t: 'box', s: [0.06, 0.4, 0.3], pos: [1.6, 1.15, 0.15], color: '#1e3a8a' } ] },
        { id: 'sedili', name: 'Personenwagen', label: 'Fahrgäste', color: '#1d4ed8', explode: [0, 0.9, 0],
          info: '<p>Hinter dem Führerstand befinden sich die <b>Sitze</b> der Fahrgäste. Ein Hochgeschwindigkeitszug befördert etwa <b>450–600 Personen</b>: Wie viele Autos wären dafür nötig?</p>',
          shapes: Array.from({ length: 6 }, (_, k) => [-0.3, 0.3].map((z) => ({ t: 'group', pos: [-2.5 + k * 0.6, 0.66, z], shapes: [ { t: 'box', s: [0.28, 0.1, 0.36], pos: [0, 0.22, 0] }, { t: 'box', s: [0.08, 0.5, 0.36], pos: [-0.12, 0.47, 0] } ] }))).flat() },
        { id: 'pantografo', name: 'Stromabnehmer', color: '#475569', pos: [-1.45, 1.92, 0], explode: [0, 1.6, 0],
          info: '<p>Das ist der gelenkige „Arm“ auf dem Dach, der <b>am Draht entlangschleift</b> und den Strom abgreift. Eine Feder drückt ihn immer nach oben, damit er den Kontakt nie verliert.</p>',
          more: '<p>Die Schleifleiste ganz oben besteht aus <b>Grafit</b>, wie die Mine eines Bleistifts: Sie leitet gut und gleitet über den Kupferdraht. Der Draht ist im Zickzack gespannt, damit sich die Schleifleiste gleichmäßig abnutzt.</p>',
          anim: { type: 'move', dir: [0, 1, 0], amp: 0.02, wave: 'sin', rate: 1.5 },
          shapes: [ { t: 'box', s: [0.5, 0.06, 0.5], pos: [0, 0.03, 0], color: '#64748b' }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, 0.15] }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, -0.15] },
            { t: 'pipe', r: 0.025, n: 8, pts: [[-0.2, 0.12, 0], [0.45, 0.48, 0]] }, { t: 'pipe', r: 0.02, n: 8, pts: [[0.45, 0.48, 0], [0.0, 0.83, 0]] },
            { t: 'pipe', r: 0.012, n: 6, pts: [[-0.1, 0.12, 0], [0.4, 0.45, 0]], color: '#94a3b8' },
            { t: 'box', s: [0.1, 0.04, 0.8], pos: [0, 0.85, 0], color: '#1f2937' }, { t: 'box', s: [0.06, 0.03, 0.8], pos: [0, 0.875, 0], color: '#a3a3a3' } ] },
        { id: 'catenaria', name: 'Oberleitung (Kettenwerk)', label: 'Oberleitung', color: '#b45309', explode: [0, 1.9, 0], anchor: [2.2, 3.2, 0],
          info: '<p>Über den Gleisen verläuft ein <b>Kupferdraht</b>, der ständig unter Spannung steht und an Masten hängt. Bei Hochgeschwindigkeitsstrecken beträgt die Spannung <b>25 000 Volt</b>: lebensgefährlich, niemals nähern!</p>',
          more: '<p>Der Fahrdraht hängt mit vielen kleinen „Hängern“ an einem Seil weiter oben (dem eigentlichen <b>Tragseil</b>, das seinen Namen von der Kurve hat, die eine hängende Kette bildet). So bleibt er ganz waagerecht. In Italien arbeiten die normalen Strecken mit 3000 V Gleichstrom.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-4.2, 2.79, 0], [4.2, 2.79, 0]] },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-4.2, 3.32, 0], [-3.4, 3.35, 0], [0, 3.05, 0], [3.4, 3.35, 0], [4.2, 3.32, 0]], color: '#78716c' },
            ...[-2.4, -1.2, 0, 1.2, 2.4].map((x) => ({ t: 'pipe', r: 0.006, n: 4, pts: [[x, 2.8, 0], [x, 3.12 + 0.1 * (Math.abs(x) / 2.4) ** 2, 0]], color: '#78716c' })),
            ...POLES.flatMap((x) => [ { t: 'cyl', r: 0.07, h: 3.6, n: 12, pos: [x, 1.7, -1.15], color: '#6b7280' }, { t: 'pipe', r: 0.03, n: 6, pts: [[x, 3.35, -1.15], [x, 3.35, 0.1]], color: '#6b7280' },
              { t: 'cyl', r: 0.05, h: 0.2, n: 10, pos: [x, 3.2, 0], color: '#f8fafc' } ]) ] },
        { id: 'trasformatore', name: 'Transformator', color: '#78350f', pos: [-0.35, 0.47, 0], explode: [0, -0.7, 0.6],
          info: '<p>Der Strom aus dem Draht ist zu „stark“ für die Motoren. Der <b>Transformator</b>, ein großer Block aus Eisen und Kupfer unter dem Boden, senkt die Spannung von 25 000 auf wenige tausend Volt.</p>',
          more: '<p>Ein Transformator hat zwei Spulen, die um denselben Eisenkern gewickelt sind: Der Wechselstrom in der ersten erzeugt ein sich änderndes Magnetfeld, und dieses „induziert“ Strom in der zweiten. Mit weniger Windungen ist die Spannung niedriger. Er wiegt mehrere Tonnen!</p>',
          shapes: [ { t: 'box', s: [0.9, 0.3, 0.8] }, ...[-0.25, 0, 0.25].map((x) => ({ t: 'cyl', r: 0.1, h: 0.3, n: 16, pos: [x, 0.02, 0.0], color: '#b45309' })), { t: 'box', s: [0.95, 0.03, 0.85], pos: [0, 0.16, 0], color: '#92400e' } ] },
        { id: 'convertitore', name: 'Stromrichter', label: 'Stromrichter', color: '#0f766e', pos: [0.65, 0.47, 0], explode: [0.2, -0.7, 0.6],
          info: '<p>Er ist das „Leistungsgehirn“: ein Schrank voller Elektronik, der dosiert, wie viel Strom zu den Motoren geht. Mehr Strom = mehr Geschwindigkeit.</p>',
          more: '<p>Der Stromrichter (<b>Inverter</b>) verwandelt den Strom in Wechselstrom mit veränderlicher Frequenz: Ändert man die Frequenz, ändert sich die Drehzahl der Motoren. Er nutzt Leistungstransistoren (IGBT), die tausende Male pro Sekunde ein- und ausschalten.</p>',
          shapes: [ { t: 'box', s: [0.75, 0.28, 0.8] }, { t: 'box', s: [0.6, 0.12, 0.01], pos: [0, 0.03, 0.405], color: '#134e4a', decal: 1 },
            { t: 'box', s: [0.06, 0.04, 0.01], pos: [-0.22, 0.05, 0.41], color: '#4ade80', decal: 2, anim: { type: 'blink', color: '#dcfce7', wave: 'square', rate: 3 } } ] },
        { id: 'motori', name: 'Fahrmotoren', label: 'Motoren', color: '#2563eb', explode: [0, -0.4, 1.0],
          info: '<p>Das sind die <b>Elektromotoren</b>, die die Räder drehen, einer für jede Achse. Zusammen leisten sie viele tausend PS, ohne Rauch und fast ohne Lärm.</p>',
          more: '<p>Ein Hochgeschwindigkeitszug hat eine Leistung von etwa <b>10 000 kW</b>, so viel wie 100 Autos. Viele moderne Züge haben die Motoren unter mehrere Wagen verteilt: So beschleunigt man besser, und die Räder rutschen weniger durch.</p>',
          shapes: AXLES.map((x) => ({ t: 'group', pos: [x + (x < 0 ? 0.32 : -0.32), RW + 0.04, 0.05], shapes: [ { t: 'cyl', r: 0.15, h: 0.5, n: 20, rot: [90, 0, 0] }, { t: 'cyl', r: 0.08, h: 0.12, n: 14, rot: [90, 0, 0], pos: [0, 0, 0.3], color: '#475569' },
            { t: 'group', pos: [0, 0, -0.27], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR * 3 }, shapes: [ { t: 'cyl', r: 0.1, h: 0.03, n: 14, rot: [90, 0, 0], color: '#93c5fd' }, { t: 'box', s: [0.18, 0.03, 0.035], color: '#1e3a8a' } ] } ] })) },
        { id: 'carrelli', name: 'Drehgestelle', color: '#374151', explode: [0, -0.4, 0],
          info: '<p>Unter dem Wagenkasten sitzen zwei <b>Drehgestelle</b> mit je 4 Rädern. Sie können sich ein wenig gegenüber dem Wagenkasten drehen, damit der Zug die Kurven nehmen kann, ohne hinauszurutschen.</p>',
          more: '<p>Stahlfedern und Luftkissen (Luftfederung) trennen die Drehgestelle vom Wagenkasten: Die Fahrgäste spüren die kleinen Unebenheiten der Gleise nicht, auch bei 300 km/h nicht.</p>',
          shapes: [ bogie(-2.15), bogie(1.55) ] },
        { id: 'ruote', name: 'Räder (Radsätze)', label: 'Räder', color: '#9ca3af', explode: [0, -0.4, 0],
          info: '<p>Die Räder bestehen aus <b>Stahl</b> und sitzen paarweise auf einer starren Achse. Sie haben innen einen vorstehenden <b>Spurkranz</b>, der verhindert, dass sie von der Schiene springen.</p>',
          more: '<p>Die Räder sind nicht zylindrisch, sondern leicht <b>kegelförmig</b>: In der Kurve rutscht das äußere Rad ein wenig nach außen und „läuft“ auf einem größeren Durchmesser. So legt es einen längeren Weg zurück als das innere Rad, obwohl beide auf derselben Achse sitzen. Genial!</p>',
          shapes: AXLES.map(wheelset) },
        { id: 'freni', name: 'Scheibenbremsen', label: 'Bremsen', color: '#f97316', explode: [0, -0.4, -0.8],
          info: '<p>An jeder Achse sitzen <b>Stahlscheiben</b>: Die Bremszangen drücken sie zusammen und bremsen sie ab. Aber zuallererst bremst der Elektromotor!</p>',
          more: '<p>Beim Bremsen arbeiten die Motoren umgekehrt, als <b>Generatoren</b>: Sie verwandeln Bewegung in Strom und schicken ihn zurück in den Draht, wo ihn andere Züge nutzen (Nutzbremsung). Bei 300 km/h braucht man mehr als 3 km zum Anhalten!</p>',
          shapes: AXLES.flatMap((x) => [ { t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [-0.15, 0.15].map((z) => ({ t: 'tube', r: 0.2, ri: 0.06, h: 0.03, n: 22, rot: [90, 0, 0], pos: [0, 0, z] })) },
            { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, -0.15], color: '#1f2937' }, { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, 0.15], color: '#1f2937' } ]) },
        { id: 'binari', name: 'Gleise und Schwellen', label: 'Gleise', color: '#9ca3af', explode: [0, -0.8, 0],
          info: '<p>Zwei Stahlschienen, immer im gleichen Abstand (<b>1435 mm</b>), befestigt auf Betonschwellen, die auf dem <b>Schotterbett</b> aus Steinen liegen.</p>',
          more: '<p>Stahlrad auf Stahlschiene: Die Stelle, an der sie sich berühren, ist so groß wie eine Münze! Der Rollwiderstand ist sehr gering, etwa 5-mal kleiner als bei einem Auto auf Asphalt. Deshalb verbraucht der Zug pro Fahrgast sehr wenig Energie.</p>',
          shapes: [ { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, 0.43] }, { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, -0.43] },
            { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, 0.43], color: '#6b7280' }, { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, -0.43], color: '#6b7280' },
            { t: 'group', anim: { type: 'move', dir: [-1, 0, 0], amp: SL, wave: 'saw', rate: SPEED / SL }, shapes: sleepers },
            { t: 'extrude', d: 8.4, pts: [[-1.05, -0.36], [1.05, -0.36], [0.78, -0.1], [-0.78, -0.1]], rot: [0, 90, 0], color: '#a8a29e' } ] },
        { id: 'corrente', name: 'Elektrischer Strom', label: 'Strom', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>Der Strom fließt vom Draht durch den Stromabnehmer nach unten, geht durch den Transformator und den Stromrichter, erreicht die Motoren und kehrt dann über die <b>Räder und Schienen</b> zum Kraftwerk zurück.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 5, m: 8, pos: CUR[0], anim: { type: 'path', pts: CUR, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'fari', name: 'Scheinwerfer', color: '#fef9c3', explode: [0.5, 0, 0],
          info: '<p>Vorne hat der Zug <b>weiße</b> Scheinwerfer, hinten <b>rote</b> Lichter: So erkennt man schon von Weitem, in welche Richtung er fährt.</p>',
          shapes: [-0.3, 0.3].map((z) => ({ t: 'box', s: [0.05, 0.07, 0.14], pos: [3.28, 0.95, z], rot: [0, 0, 70], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.8 } })) }
      ]
    },
    steps: [
      { icon: '🚄', title: 'Ein Elektrozug', explode: 0,
        html: '<p>Hochgeschwindigkeitszüge haben keinen Tank: Sie holen sich den <b>Strom</b> aus einem Draht über den Gleisen und lassen damit <b>Elektromotoren</b> laufen, die mit den Rädern verbunden sind.</p><p>So können sie mit 300 km/h fahren, ohne unterwegs die Luft zu verschmutzen.</p>' },
      { icon: '⚡', title: 'Vom Draht zum Stromabnehmer', focus: ['catenaria', 'pantografo', 'corrente'], explode: 0, view: { rx: 0.2, ry: -0.9 },
        html: '<p>Der <b>Stromabnehmer</b> ist ein gelenkiger Arm auf dem Dach: Eine Feder drückt ihn gegen den <b>Kupferdraht</b> der Oberleitung, der eine Spannung von 25 000 Volt hat.</p><p class="tip">⚠️ Steige niemals auf Waggons und geh nie in die Nähe der Bahndrähte: Der Strom kann auch ohne Berührung „überspringen“!</p>' },
      { icon: '🔁', title: 'Transformator und Stromrichter', focus: ['trasformatore', 'convertitore', 'corrente'], explode: 0.4, view: { rx: 0.1, ry: -0.35 },
        html: '<p>Der <b>Transformator</b> senkt die Spannung; der <b>Stromrichter</b>, voller Elektronik, entscheidet, wie viel Strom zu den Motoren geht. Er ist wie das Gaspedal eines Autos.</p>' },
      { icon: '⚙️', title: 'Die Motoren drehen die Räder', focus: ['motori', 'ruote', 'carrelli'], explode: 0.35, view: { rx: 0.25, ry: -0.45 },
        html: '<p>Ein <b>Elektromotor</b> für jede Achse dreht die Räder über Zahnräder. Die Räder drücken die Schienen nach hinten … und der Zug fährt nach vorne!</p><p>Die <b>Drehgestelle</b> können sich unter dem Wagenkasten drehen, um den Kurven zu folgen.</p>' },
      { icon: '🛤️', title: 'Stahl auf Stahl', focus: ['ruote', 'binari'], explode: 0, zoom: 1.2, view: { rx: 0.25, ry: -1.35 },
        html: '<p>Räder und Schienen bestehen aus extrem hartem <b>Stahl</b>: Sie verformen sich kaum, und die Reibung ist sehr gering. Um eine Tonne mit dem Zug zu bewegen, braucht man viel weniger Energie als mit dem Lastwagen.</p><p>Der innere <b>Spurkranz</b> der Räder verhindert, dass der Zug aus dem Gleis springt.</p>' },
      { icon: '🛑', title: 'Bremsen … und Energie zurückgewinnen', focus: ['freni', 'motori', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.6 },
        html: '<p>Zum Bremsen werden die <b>Motoren</b> zu <b>Generatoren</b>: Die Bewegung wird wieder zu Strom und in den Draht zurückgeschickt. Danach kommen die <b>Scheibenbremsen</b> dazu.</p><p class="tip">📏 Ein Zug mit 300 km/h braucht mehr als 3 km zum Anhalten: Deshalb kann er nicht erst im letzten Moment bremsen!</p>' },
      { icon: '🧑‍✈️', title: 'Im Führerstand und die Stromlinienform', focus: ['cabina', 'cassa', 'fari'], explode: 0, view: { rx: 0.2, ry: -1.0 },
        html: '<p>Im <b>Führerstand</b> überwacht der Lokführer auf den Bildschirmen Geschwindigkeit, Bremsen und Signale. Der Zug hat kein Lenkrad: Die Schienen lenken ihn.</p><p>Die lange, glatte <b>Nase</b> schneidet durch die Luft: Bei hoher Geschwindigkeit ist der Luftwiderstand die größte Mühe, die es zu überwinden gilt.</p>' }
    ],
    facts: [
      { icon: '🚂', title: 'Der erste italienische Zug', html: 'Die erste italienische Eisenbahn war die <b>Neapel–Portici</b>, eingeweiht im Jahr 1839: 7 km, befahren von einer Dampflokomotive.' },
      { icon: '🏁', title: 'Geschwindigkeitsrekord', html: 'Im Jahr 2007 erreichte ein französischer Zug auf Schienen <b>574,8 km/h</b>. Der japanische Magnetschwebezug hat die 600 km/h überschritten.' },
      { icon: '🌱', title: 'Der „grünste“', html: 'Pro Person und Kilometer stößt der Zug bis zu <b>10-mal weniger CO₂</b> aus als das Auto und um ein Vielfaches weniger als das Flugzeug.' },
      { icon: '🔧', title: 'Die „Frecce“ (Pfeile)', html: 'Der Frecciarossa verbindet Turin, Mailand, Bologna, Florenz, Rom und Neapel: Von Mailand nach Rom braucht man etwa 3 Stunden, früher waren es über 6 Stunden.' }
    ],
    quiz: [
      { type: 'mc', q: 'Woher bekommt ein Hochgeschwindigkeitszug seine Energie?', options: ['Aus dem Dieseltank', 'Aus einem Stromdraht über den Gleisen', 'Aus Solarpaneelen auf dem Dach', 'Aus Kohle'], answer: 1, explain: 'Der Stromabnehmer greift den Strom von der Oberleitung ab.' },
      { type: 'mc', q: 'Wie heißt der gelenkige Arm auf dem Dach des Zuges?', options: ['Stromabnehmer', 'Drehgestell', 'Transformator', 'Spurkranz'], answer: 0, explain: 'Der Stromabnehmer schleift am Draht entlang und bringt den Strom in den Zug.' },
      { type: 'tf', q: 'Beim Bremsen kann der Zug Strom ins Netz zurückschicken.', answer: true, explain: 'Die Motoren arbeiten als Generatoren: Das ist die Nutzbremsung.' },
      { type: 'mc', q: 'Was verhindert, dass die Räder aus dem Gleis springen?', options: ['Ein Magnet', 'Der vorstehende Spurkranz der Räder', 'Der Lokführer mit dem Lenkrad', 'Die Oberleitung'], answer: 1, explain: 'Der Spurkranz an der Innenseite des Rades hält den Zug auf den Schienen.' },
      { type: 'mc', q: 'Warum verbraucht der Zug pro Fahrgast wenig Energie?', options: ['Weil er langsam fährt', 'Weil Stahlräder und Stahlschienen sehr wenig Reibung haben', 'Weil er keine Motoren hat', 'Weil er leicht ist wie ein Fahrrad'], answer: 1, explain: 'Stahl auf Stahl: Der Rollwiderstand ist sehr gering, und der Zug befördert viele Menschen auf einmal.' },
      { type: 'order', q: 'Bringe die Reise des Stroms in die richtige Reihenfolge', items: ['Draht der Oberleitung', 'Stromabnehmer', 'Transformator', 'Stromrichter', 'Motoren', 'Räder und Schienen'], explain: 'Vom Draht zum Stromabnehmer, dann Transformator und Stromrichter, die Motoren und schließlich der Rückweg über Räder und Schienen.' }
    ]
  });
})();
