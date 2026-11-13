/* La diga e la centrale idroelettrica. Il fiume scorre verso +x; il lago (bacino) è a monte (x < 0), la diga a x ≈ 0,
   la centrale a valle (x ≈ 3). Alto = +y; la valle è larga lungo z. Ciclo (1): 0.55–0.9 le paratoie dello sfioratore si aprono. */
(function () {
  const D = Math.PI / 180;
  /* sezioni lungo x: pts (u, y) con u = -z; estrusione lungo x tra x0 e x1 */
  const alongX = (pts, x0, x1, color, extra) => Object.assign({ t: 'extrude', d: x1 - x0, pts, rot: [0, 90, 0], pos: [(x0 + x1) / 2, 0, 0], color }, extra || {});
  const HILL = (s) => [[2.0, -0.25], [4.4, -0.25], [4.4, 1.6], [4.0, 2.8], [3.5, 3.35], [2.9, 3.45], [2.3, 1.5], [2.0, 0.3]].map(([u, y]) => [u * s, y]);
  const LAKE = [[-2.0, -0.1], [2.0, -0.1], [2.3, 1.5], [2.6, 2.72], [-2.6, 2.72], [-2.3, 1.5]];
  const DAM = [[-0.38, -0.2], [1.95, -0.2], [0.28, 3.0], [-0.38, 3.0]];
  const ZP = 0.95; // asse z della condotta e della centrale
  const PEN = [[-0.6, 1.45, ZP], [0.3, 1.45, ZP], [1.05, 1.5, ZP], [1.75, 0.82, ZP], [2.25, 0.42, ZP], [2.55, 0.32, ZP]];
  const WATER = [[-1.6, 1.6, ZP], [-0.6, 1.45, ZP], ...PEN.slice(1), [2.7, 0.3, ZP + 0.25], [2.85, 0.3, ZP], [2.75, -0.05, ZP], [3.4, -0.05, ZP * 0.6], [4.2, 0.05, 0.2], [5.2, 0.05, 0]];
  const ELEC = [[2.75, 1.05, ZP], [3.3, 1.2, ZP], [3.75, 0.75, 1.65], [4.4, 2.4, 1.65], [4.6, 2.75, 1.65], [6.0, 2.85, 1.65]];
  const drops = (P, n, rate, color, r, extra) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: r || 0.06, n: 5, m: 8, pos: P[0], color, anim: [{ type: 'path', pts: P, wave: 'saw', rate, phase: k / n }].concat(extra || []) }));
  const SPILL = [[0.0, 3.05, -0.6], [0.35, 2.9, -0.6], [0.9, 2.0, -0.6], [1.5, 0.9, -0.6], [1.95, 0.15, -0.6], [2.6, 0.05, -0.4], [3.6, 0.05, -0.2]];
  const GATE = { type: 'move', dir: [0, 1, 0], amp: 0.28, wave: 'window', from: 0.55, to: 0.9, ramp: 0.2 };
  const leg = (x, z) => ({ t: 'pipe', r: 0.025, n: 4, pts: [[x, 0.0, z], [4.6 + (x - 4.6) * 0.25, 2.6, 1.65 + (z - 1.65) * 0.25]] });

  LIBRARY({
    id: 'diga',
    lang: 'de',
    title: 'Der Staudamm',
    intro: 'Ein Staudamm hält einen Fluss auf und bildet einen großen <b>See</b>. Das Wasser, das mit großer Kraft aus dem See herabstürzt, treibt eine <b>Turbine</b> und einen <b>Generator</b> an: So wird Strom ohne Rauch erzeugt. Das ist die <b>Wasserkraft</b>!',
    model: {
      rx: 0.45, ry: -1.15, speed: 0.25, height: 480, bg: 'sky', floor: false,
      phases: [ { from: 0, to: 0.55, label: 'Energieerzeugung', color: '#16a34a' }, { from: 0.55, to: 0.9, label: 'Der Überlauf leitet überschüssiges Wasser ab', color: '#0284c7' } ],
      parts: [
        { id: 'versanti', name: 'Berge und Tal', label: 'Tal', color: '#65a30d', explode: [0, -0.5, 0],
          info: '<p>Staudämme werden in <b>engen Tälern</b> zwischen den Bergen gebaut: Eine verhältnismäßig kurze Mauer genügt, um das Tal zu schließen und sehr viel Wasser zurückzuhalten.</p>',
          shapes: [ alongX(HILL(-1), -4.2, 5.2), alongX(HILL(1), -4.2, 5.2), alongX([[-2.1, -0.4], [2.1, -0.4], [2.1, -0.15], [-2.1, -0.15]], -4.2, 5.2, '#a16207'),
            ...[[-3.0, 3.5, -3.2], [1.0, 3.5, 3.1], [4.0, 3.6, -3.1], [-1.5, 3.5, 3.3], [2.6, 3.4, -3.3], [-3.6, 3.5, 3.0]].map(([x, y, z]) => ({ t: 'cone', r: 0.25, h: 0.7, n: 10, pos: [x, y, z], color: '#166534' })) ] },
        { id: 'lago', name: 'Stausee (Becken)', label: 'See', color: '#0ea5e9', explode: [-0.8, 0, 0],
          info: '<p>Hinter dem Damm sammelt sich das Wasser des Flusses und bildet einen <b>See</b>. Er ist ein großer Energiespeicher: Das Wasser oben kann herabfließen und die Turbinen antreiben, wenn es nötig ist.</p>',
          more: '<p>Wasser in der Höhe hat <b>potenzielle Energie</b>: Je höher es steht und je mehr es ist, desto mehr Energie kann es beim Herabfließen abgeben. Stauseen dienen auch als Wasservorrat für die Bewässerung und zum Trinken und schützen vor Hochwasser.</p>',
          shapes: [ alongX(LAKE, -4.2, -0.38) ] },
        { id: 'diga', name: 'Staumauer', label: 'Damm', color: '#d6d3d1', explode: [0, 0.6, 0],
          info: '<p>Sie ist eine riesige <b>Betonmauer</b>. Unten an der Basis ist sie viel dicker als oben, weil das Wasser in der Tiefe stärker drückt.</p>',
          more: '<p>Der <b>Druck</b> des Wassers steigt um etwa 1 Atmosphäre alle 10 Meter Tiefe. Dies ist eine <b>Gewichtsstaumauer</b>: Sie hält dem Druck dank ihres enormen Gewichts stand. Andere Staumauern sind <b>Bogenstaumauern</b>, zum See hin gekrümmt wie eine Brücke, die sich an die Berge lehnt.</p>',
          shapes: [ { t: 'extrude', d: 6.0, pts: DAM }, { t: 'box', s: [0.75, 0.12, 6.0], pos: [-0.05, 3.06, 0], color: '#a8a29e' },
            ...Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.05, 0.12, 0.05], pos: [0.27, 3.18, -2.5 + k * 0.5], color: '#78716c' })) ] },
        { id: 'presa', name: 'Einlaufbauwerk (Rechen)', label: 'Einlauf', color: '#475569', pos: [-0.48, 1.45, ZP], explode: [-0.7, 0.3, 0],
          info: '<p>Der Eingang des Wassers, unter Wasser auf der Seeseite. Ein <b>Rechen</b> hält Äste, Blätter und Fische zurück, die die Turbine beschädigen könnten.</p>',
          shapes: [ { t: 'box', s: [0.18, 0.7, 0.7] }, ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.04, 0.7, 0.025], pos: [-0.1, 0, z], color: '#1f2937' })),
            ...[-0.2, 0, 0.2].map((y) => ({ t: 'box', s: [0.04, 0.025, 0.7], pos: [-0.1, y, 0], color: '#1f2937' })) ] },
        { id: 'condotta', name: 'Druckrohrleitung', label: 'Druckrohrleitung', color: '#64748b', explode: [0, 0.3, 0.7],
          info: '<p>Ein dickes Stahlrohr, das das Wasser vom See hinunter zum Kraftwerk führt. Beim Herabfließen wird das Wasser schneller und trifft mit <b>enormer Kraft</b> auf die Turbine.</p>',
          more: '<p>In der Leitung wird die potenzielle Energie des Wassers zu <b>kinetischer Energie</b> (Bewegungsenergie) und Druck. In manchen Bergkraftwerken fällt das Wasser aus mehr als 1000 Metern Höhe und kommt mit über 100 Atmosphären an!</p>',
          shapes: [ { t: 'pipe', r: 0.16, n: 16, curve: true, pts: PEN }, ...[1.3, 1.6, 2.0].map((x) => ({ t: 'box', s: [0.12, 0.3, 0.4], pos: [x, x < 1.5 ? 1.0 : 0.45, ZP], color: '#a8a29e' })) ] },
        { id: 'centrale', name: 'Kraftwerk', label: 'Kraftwerk', color: '#e7e5e4', alpha: 0.3, explode: [0.5, 0.9, 0],
          info: '<p>Das Gebäude am Fuß des Damms, in dem die Maschinen stehen: Turbinen, Generatoren und Schaltanlagen. Viele Kraftwerke sind sogar in den Berg hineingebaut.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.45, 1.25], pos: [2.95, 0.55, ZP] }, { t: 'box', s: [1.4, 0.06, 1.35], pos: [2.95, 1.3, ZP], color: '#57534e', alpha: 0.9 } ] },
        { id: 'turbina', name: 'Turbine', color: '#2563eb', pos: [2.75, 0.3, ZP], explode: [0.3, 0, 1.2],
          info: '<p>Ein großes Rad mit gekrümmten Schaufeln. Das Wasser, das aus der Leitung kommt, trifft darauf und versetzt es in sehr schnelle <b>Drehung</b>, so wie der Wind ein Windrädchen dreht.</p>',
          more: '<p>Dies ist eine <b>Francis</b>-Turbine: Das Wasser strömt durch ein „Schneckenhaus“ um sie herum (das Spiralgehäuse) und fließt in der Mitte ab. Bei sehr großen Fallhöhen verwendet man <b>Pelton</b>-Turbinen mit Löffeln, bei kleinen Fallhöhen <b>Kaplan</b>-Turbinen, die einem Propeller ähneln.</p>',
          shapes: [ { t: 'torus', R: 0.34, r: 0.11, n: 24, m: 8, color: '#64748b' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.22, h: 0.06, n: 20, pos: [0, 0.06, 0] },
              ...Array.from({ length: 9 }, (_, k) => ({ t: 'box', s: [0.18, 0.12, 0.02], pos: [0.13 * Math.cos(k * 40 * D), 0, 0.13 * Math.sin(k * 40 * D)], rot: [0, -k * 40 - 35, 15], color: '#93c5fd' })) ] },
            { t: 'cyl', r: 0.14, r2: 0.1, h: 0.35, n: 16, pos: [0, -0.2, 0], color: '#475569' } ] },
        { id: 'generatore', name: 'Generator (Wechselstromgenerator)', label: 'Generator', color: '#b45309', pos: [2.75, 0.95, ZP], explode: [0.3, 0.6, 1.2],
          info: '<p>Er ist mit einer Welle an die Turbine gekoppelt. Im Inneren drehen sich große <b>Magnete</b> nahe an <b>Kupferspulen</b>: Die Bewegung erzeugt den elektrischen Strom.</p>',
          more: '<p>Das ist die <b>elektromagnetische Induktion</b>, 1831 von Faraday entdeckt: Ein Magnet, der sich nahe an einem Draht bewegt, lässt Strom fließen. Es ist ein Elektromotor, der „umgekehrt“ funktioniert: Er bekommt Bewegung und liefert Elektrizität.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 10, pos: [0, -0.35, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 3 } }, { t: 'tube', r: 0.36, ri: 0.28, h: 0.36, n: 26, color: '#b45309' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.26, h: 0.34, n: 20, color: '#dc2626' }, ...[0, 90, 180, 270].map((a) => ({ t: 'box', s: [0.1, 0.35, 0.08], pos: [0.24 * Math.cos(a * D), 0, 0.24 * Math.sin(a * D)], rot: [0, -a, 0], color: a % 180 ? '#2563eb' : '#ef4444' })) ] },
            { t: 'cyl', r: 0.37, h: 0.04, n: 26, pos: [0, 0.2, 0], color: '#78350f' } ] },
        { id: 'trasformatore', name: 'Transformator', color: '#57534e', pos: [3.75, 0.25, 1.65], explode: [0.6, 0.3, 0.6],
          info: '<p>Er erhöht die Spannung des Stroms (bis zu Hunderttausenden Volt), damit er weit durch die Leitungen reisen kann und dabei nur sehr wenig verliert.</p>',
          shapes: [ { t: 'box', s: [0.45, 0.45, 0.4] }, ...[-0.15, 0, 0.15].map((z) => ({ t: 'cyl', r: 0.035, h: 0.25, n: 8, pos: [0, 0.35, z], color: '#d6d3d1' })),
            ...[-0.15, -0.05, 0.05, 0.15].map((x) => ({ t: 'box', s: [0.03, 0.38, 0.45], pos: [x, 0, 0], color: '#44403c' })) ] },
        { id: 'traliccio', name: 'Strommast und Stromleitung', label: 'Stromleitung', color: '#94a3b8', explode: [0.9, 0.3, 0.6],
          info: '<p>Die stählernen <b>Strommasten</b> halten die Hochspannungskabel in der Höhe, die den Strom in die Städte bringen, auch über Hunderte von Kilometern.</p>',
          shapes: [ leg(4.35, 1.4), leg(4.85, 1.4), leg(4.35, 1.9), leg(4.85, 1.9), { t: 'box', s: [0.06, 0.06, 1.2], pos: [4.6, 2.6, 1.65] }, { t: 'box', s: [0.05, 0.05, 0.8], pos: [4.6, 2.2, 1.65] },
            { t: 'cyl', r: 0.03, h: 0.4, n: 6, pos: [4.6, 2.85, 1.65] },
            ...[1.1, 1.65, 2.2].map((z) => ({ t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[3.8, 0.5, z * 0.3 + 1.15], [4.6, 2.55, z], [5.4, 2.4, z], [6.2, 2.5, z]], color: '#1f2937' })) ] },
        { id: 'sfioratore', name: 'Überlauf und Schütze', label: 'Überlauf', color: '#f59e0b', explode: [0, 1.0, -0.4],
          info: '<p>Wenn es stark regnet und der See zu voll ist, öffnen sich die <b>Schütze</b> (große Stahltore), und das überschüssige Wasser gleitet über den <b>Überlauf</b> hinunter, ohne den Damm zu überspülen.</p>',
          shapes: [-0.9, -0.6, -0.3].map((z) => ({ t: 'box', s: [0.08, 0.32, 0.28], pos: [-0.25, 3.1, z - 0.15], anim: GATE }))
            .concat([{ t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, -1.23], color: '#a8a29e' }, { t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, 0.03], color: '#a8a29e' }]) },
        { id: 'fiume', name: 'Fluss unterhalb', label: 'Fluss', color: '#38bdf8', explode: [0.6, -0.3, 0],
          info: '<p>Nach der Turbine fließt das Wasser in den Fluss zurück: Es ist dasselbe Wasser, es wurde weder verbraucht noch verschmutzt. Doch der Damm verändert den Fluss: Deshalb muss immer etwas Wasser (die <b>Restwassermenge</b>) für Fische und Pflanzen abfließen.</p>',
          shapes: [ alongX([[-1.2, -0.14], [1.2, -0.14], [1.2, 0.0], [-1.2, 0.0]], 1.95, 5.2) ] },
        { id: 'acqua', name: 'Fließendes Wasser', label: 'Wasser', color: '#1d4ed8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Folge dem Wasser: Es tritt durch den Einlauf ein, stürzt in die Druckrohrleitung, treibt die Turbine an und fließt in den Fluss zurück.</p>',
          shapes: drops(WATER, 18, 0.35, '#1d4ed8').concat(drops(SPILL, 8, 1.2, '#7dd3fc', 0.07, [{ type: 'blink', fade: true, wave: 'window', from: 0.6, to: 0.9, ramp: 0.1 }])) },
        { id: 'corrente', name: 'Elektrischer Strom', label: 'Strom', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>Der vom Generator erzeugte Strom läuft durch den Transformator und macht sich über die Hochspannungskabel auf den Weg zu unseren Häusern.</p>',
          shapes: drops(ELEC, 10, 0.5, '#facc15', 0.05) }
      ]
    },
    steps: [
      { icon: '💧', title: 'Energie aus Wasser', explode: 0,
        html: '<p>Wasser, das von oben herabfällt, hat viel <b>Energie</b>: Denk an die Kraft eines Wasserfalls! Ein Wasserkraftwerk nutzt sie, um Strom zu erzeugen.</p><p>Sie ist eine <b>erneuerbare</b> Quelle: Regen und Schnee füllen den See immer wieder auf, und es wird nichts verbrannt.</p>' },
      { icon: '🧱', title: 'Der Damm hält den See zurück', focus: ['diga', 'lago', 'versanti'], explode: 0, view: { rx: 0.4, ry: 0.85 },
        html: '<p>Der <b>Damm</b> schließt das Tal, und das Wasser des Flusses bildet einen <b>See</b>. Die Mauer ist unten viel dicker: Je tiefer man geht, desto <b>stärker drückt</b> das Wasser.</p><p class="tip">🍾 Mach drei Löcher in unterschiedlicher Höhe in eine volle Flasche: Das Wasser aus dem untersten Loch spritzt am weitesten!</p>' },
      { icon: '⬇️', title: 'Hinunter durch die Druckrohrleitung', focus: ['presa', 'condotta', 'acqua'], explode: 0, view: { rx: 0.35, ry: -0.8 },
        html: '<p>Das Wasser tritt durch den von einem Rechen geschützten <b>Einlauf</b> ein und fließt in die <b>Druckrohrleitung</b>, ein dickes Stahlrohr. Beim Herabfließen wird es schneller: Die Energie der Höhe wird zu <b>Bewegungsenergie</b>.</p>' },
      { icon: '🌀', title: 'Die Turbine dreht sich', focus: ['turbina', 'acqua', 'condotta', 'centrale'], explode: 0.3, zoom: 1.4, view: { rx: 0.35, ry: -0.6 },
        html: '<p>Im Kraftwerk trifft das Wasser auf die gekrümmten Schaufeln der <b>Turbine</b> und dreht sie sehr schnell, wie der Wind ein Windrädchen. Dann fließt das nun langsamere Wasser ab und kehrt in den Fluss zurück.</p>' },
      { icon: '🧲', title: 'Der Generator erzeugt den Strom', focus: ['generatore', 'turbina', 'corrente'], explode: 0.3, zoom: 1.4, view: { rx: 0.3, ry: -0.6 },
        html: '<p>Die Turbine dreht den <b>Generator</b>: Große Magnete rotieren nahe an Kupferspulen, und in der Spule entsteht der <b>elektrische Strom</b>. Es ist ein Elektromotor, der umgekehrt funktioniert!</p>' },
      { icon: '🗼', title: 'Auf in die Städte', focus: ['trasformatore', 'traliccio', 'corrente'], explode: 0, view: { rx: 0.3, ry: -0.3 },
        html: '<p>Der <b>Transformator</b> erhöht die Spannung des Stroms, und die von den <b>Strommasten</b> getragenen Kabel bringen ihn weit weg, bis in die Städte und zu unseren Häusern.</p>' },
      { icon: '🌧️', title: 'Wenn der See zu voll ist', focus: ['sfioratore', 'diga', 'fiume', 'acqua'], loop: [0.5, 0.95], explode: 0, view: { rx: 0.35, ry: -1.0 },
        html: '<p>Nach starkem Regen öffnen sich die <b>Schütze</b>: Das überschüssige Wasser gleitet über den <b>Überlauf</b> hinunter, ohne den Damm zu gefährden.</p><p class="tip">🐟 Staudämme liefern saubere Energie, verändern aber das Leben im Fluss: Deshalb müssen sie immer etwas Wasser abfließen lassen und haben manchmal „Treppen“, damit die Fische vorbeikommen.</p>' }
    ],
    facts: [
      { icon: '🇨🇳', title: 'Der leistungsstärkste Damm', html: 'Der <b>Drei-Schluchten-Damm</b> in China ist das leistungsstärkste Kraftwerk der Welt: Er erzeugt so viel wie etwa 20 große Atomkraftwerke.' },
      { icon: '🏔️', title: 'Italien und seine Staudämme', html: 'In Italien gibt es mehr als <b>500 große Staudämme</b>, vor allem in den Alpen. Früher nannte man die Wasserkraft die „weiße Kohle“, und sie versorgte die ersten Fabriken im Norden.' },
      { icon: '🔋', title: 'Eine Batterie aus Wasser', html: 'Manche Kraftwerke haben zwei Seen, einen oben und einen unten: Wenn überschüssige Energie da ist, <b>pumpen</b> sie das Wasser nach oben; wenn sie gebraucht wird, lassen sie es wieder herabfallen. Sie funktionieren wie eine riesige Batterie.' },
      { icon: '⚙️', title: 'Das Mühlrad', html: 'Schon vor mehr als 2000 Jahren benutzte man <b>Wasserräder</b>, um Getreide zu mahlen: Die heutigen Turbinen sind ihre hochtechnologischen Enkel.' }
    ],
    quiz: [
      { type: 'mc', q: 'Warum ist ein Staudamm unten dicker als oben?', options: ['Weil es schön aussieht', 'Weil das Wasser in der Tiefe stärker drückt', 'Damit Autos darüber fahren können', 'Weil Beton billig ist'], answer: 1, explain: 'Der Wasserdruck nimmt mit der Tiefe zu: Unten ist der Druck am größten.' },
      { type: 'order', q: 'Bringe die Reise der Energie in die richtige Reihenfolge', items: ['Wasser im See', 'Druckrohrleitung', 'Turbine', 'Generator', 'Transformator und Stromleitungen'], explain: 'Das Wasser fließt hinab, treibt die Turbine an, der Generator erzeugt Strom und die Leitungen bringen ihn weit weg.' },
      { type: 'mc', q: 'Was erzeugt den elektrischen Strom im Generator?', options: ['Das Feuer', 'Magnete, die sich nahe an Kupferspulen drehen', 'Wasser, das die Drähte berührt', 'Die Sonne'], answer: 1, explain: 'Es ist die elektromagnetische Induktion: Ein bewegter Magnet erzeugt in einer Spule Strom.' },
      { type: 'tf', q: 'Wasserkraft ist eine erneuerbare Energiequelle.', answer: true, explain: 'Regen und Schnee füllen den See immer wieder auf: Das Wasser wird nicht aufgebraucht.' },
      { type: 'mc', q: 'Wozu dient der Überlauf?', options: ['Damit Fische in den See gelangen', 'Um überschüssiges Wasser abzuleiten, wenn der See zu voll ist', 'Um mehr Strom zu erzeugen', 'Um die Turbine zu reinigen'], answer: 1, explain: 'Die Schütze öffnen sich, und das überschüssige Wasser fließt ab, ohne den Damm zu überspülen.' },
      { type: 'mc', q: 'Welche Art von Energie hat das ruhende Wasser oben im See?', options: ['Potenzielle Energie', 'Chemische Energie', 'Kernenergie', 'Lichtenergie'], answer: 0, explain: 'Das Wasser oben hat potenzielle Energie, die beim Herabfließen zu Bewegungsenergie wird.' }
    ]
  });
})();
