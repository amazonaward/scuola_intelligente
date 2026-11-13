/* Il rover su Marte (tipo Perseverance). Formato: data/library/FORMATO.md
   Il rover guarda verso +x; z = fianchi; y = alto. Le sospensioni rocker-bogie oscillano (stesse animazioni in "ruote" e "sospensioni"). */
(function () {
  const WR = 0.34, HUB = 0.36;
  const ZS = [-1.22, 1.22];
  const ROCK = { type: 'swing', axis: 'z', amp: 6, rate: 0.5, pivot: [0.15, 1.0, 0] };
  const BOG = { type: 'swing', axis: 'z', amp: 9, rate: 0.5, phase: 0.3, pivot: [-0.55, 0.72, 0] };
  /* ruota: cerchione, battistrada a "chevron", mozzo; gira intorno a z */
  const wheel = (x, z) => ({ t: 'group', pos: [x, HUB, z], anim: { type: 'spin', axis: 'z', dir: -1, rate: 1.2 }, shapes: [
    { t: 'cyl', r: WR, h: 0.32, n: 30, rot: [90, 0, 0], color: '#a1a1aa' },
    { t: 'cyl', r: WR * 0.55, h: 0.34, n: 20, rot: [90, 0, 0], color: '#52525b' },
    { t: 'cyl', r: 0.07, h: 0.38, n: 12, rot: [90, 0, 0], color: '#d4d4d8' }
  ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [0, 0, k * 22.5], shapes: [
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, 0.075], rot: [0, 22, 0], color: '#3f3f46' },
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, -0.075], rot: [0, -22, 0], color: '#3f3f46' } ] }))) });
  const side = (z, withWheels) => {
    const zz = z + Math.sign(z) * 0.0;
    const rockerArms = [ { t: 'pipe', r: 0.055, n: 10, pts: [[1.15, HUB, zz], [0.85, 0.98, zz], [0.15, 1.0, zz], [-0.55, 0.72, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.11, h: 0.16, n: 16, rot: [90, 0, 0], pos: [0.15, 1.0, zz], color: '#71717a' } ];
    const bogieArms = [ { t: 'pipe', r: 0.05, n: 10, pts: [[0, HUB, zz], [-0.3, 0.68, zz], [-0.8, 0.68, zz], [-1.15, HUB, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.09, h: 0.15, n: 16, rot: [90, 0, 0], pos: [-0.55, 0.72, zz], color: '#71717a' } ];
    const wf = [wheel(1.15, z)], wb = [wheel(0, z), wheel(-1.15, z)];
    return { t: 'group', anim: ROCK, shapes: (withWheels ? wf : rockerArms).concat([ { t: 'group', anim: BOG, shapes: withWheels ? wb : bogieArms } ]) };
  };

  LIBRARY({
    lang: 'de',
    id: 'rover',
    title: 'Der Marsrover',
    intro: 'Ein <b>Rover</b> ist ein Roboter-Labor, so groß wie ein Auto, das den Mars ganz allein erkundet. Er macht Fotos, fährt zwischen den Felsen herum, untersucht sie mit einem Laser und sammelt Proben, um nach Spuren von <b>uraltem Leben</b> zu suchen.',
    model: {
      rx: 0.3, ry: -0.75, speed: 0.22, height: 470, fit: 1.12,
      parts: [
        { id: 'suolo', name: 'Marsboden', label: 'Marsboden', color: '#b45f3c', explode: [0, -0.6, 0], chip: true,
          info: '<p>Der Mars ist rot, weil sein Staub viel <b>Rost</b> (Eisenoxid) enthält. Der Boden ist voller Steine, Sand und Dünen.</p>',
          more: '<p>Auf dem Mars beträgt die Schwerkraft etwa <b>ein Drittel</b> der irdischen, die Luft ist hauchdünn (fast nur Kohlendioxid), und nachts sinkt die Temperatur bis auf −80 °C.</p>',
          shapes: [ { t: 'lathe', n: 40, pts: [[0, 0.0], [3.0, 0.0], [3.25, -0.12], [3.2, -0.2], [0, -0.2]], color: '#b45f3c' },
            { t: 'sphere', r: 0.28, n: 8, m: 10, pos: [3.0, 0.08, 0.6], scale: [1.3, 0.8, 1], color: '#7c2d12' },
            { t: 'sphere', r: 0.2, n: 8, m: 10, pos: [-2.4, 0.05, 1.2], scale: [1.2, 0.7, 1], color: '#92400e' },
            { t: 'sphere', r: 0.15, n: 8, m: 10, pos: [1.9, 0.03, -2.0], color: '#78350f' },
            { t: 'sphere', r: 0.35, n: 8, m: 10, pos: [-1.5, 0.05, -2.3], scale: [1.4, 0.6, 1], color: '#9a3412' },
            { t: 'sphere', r: 0.1, n: 6, m: 8, pos: [1.4, 0.02, 2.3], color: '#7c2d12' } ] },
        { id: 'corpo', name: 'Rovergehäuse', label: 'Gehäuse', color: '#e4e4e7', explode: [0, 0.9, 0],
          info: '<p>Das ist der „Bauch“ des Rovers: Darin liegen, schön warm, der <b>Computer</b>, die Batterien und die Laborgeräte. Oben liegt das „Deck“, auf dem Antennen und Kameras montiert sind.</p>',
          more: '<p>Der Rover ist so groß wie ein kleines Auto (3 m lang) und wiegt etwa <b>1 Tonne</b>. Der Computer ist gegen Strahlung „gehärtet“, und der Rover fährt kurze Strecken allein und sucht sich den Weg mit seinen Kameras aus.</p>',
          shapes: [ { t: 'box', s: [2.3, 0.5, 1.75], pos: [0, 1.25, 0] },
            { t: 'box', s: [2.2, 0.06, 1.65], pos: [0, 1.53, 0], color: '#d4d4d8' },
            { t: 'box', s: [2.36, 0.08, 1.81], pos: [0, 1.02, 0], color: '#a1a1aa' },
            { t: 'box', s: [0.03, 0.3, 1.3], pos: [1.16, 1.25, 0], color: '#27272a', decal: 1 },
            { t: 'box', s: [0.6, 0.02, 0.4], pos: [0.3, 1.565, -0.5], color: '#fbbf24', decal: 1 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, 0.45], color: '#0ea5e9', decal: 2 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, -0.45], color: '#0ea5e9', decal: 2 } ] },
        { id: 'ruote', name: 'Räder', color: '#a1a1aa', explode: [0, 0, 0.9],
          info: '<p>Sechs Aluminiumräder mit „Krallen“ (den Zickzack-Stollen), damit sie im Sand nicht rutschen. Jedes Rad hat <b>seinen eigenen Motor</b>, und die vorderen und hinteren können auch lenken.</p>',
          more: '<p>Die Räder haben keine Reifen: Ein Schlauch könnte auf dem Mars platzen, und niemand würde ihn wechseln! Der Rover fährt ganz langsam, etwa <b>150 Meter pro Stunde</b>, um kein Risiko einzugehen.</p>',
          shapes: ZS.map((z) => side(z, true)) },
        { id: 'sospensioni', name: 'Rocker-Bogie-Aufhängung', label: 'Aufhängung', color: '#d4d4d8', explode: [0, 0, 0.55],
          info: '<p>Gelenkarme verbinden die Räder mit dem Gehäuse. Sie knicken wie Wippen, sodass <b>alle sechs Räder</b> immer den Boden berühren, auch auf Steinen.</p>',
          more: '<p>Das System heißt <b>Rocker-Bogie</b>: Der „Rocker“ (Wippe) trägt das vordere Rad und der „Bogie“ die beiden anderen. Der Rover kann Steine überwinden, die so hoch sind wie seine Räder, ohne umzukippen, sogar bei 45° Schräglage.</p>',
          shapes: ZS.map((z) => side(z, false)).concat([ { t: 'pipe', r: 0.045, n: 10, pts: [[0.15, 1.42, -1.1], [0.15, 1.62, 0], [0.15, 1.42, 1.1]], color: '#a1a1aa' } ]) },
        { id: 'testa', name: 'Mast mit den Kameras', label: 'Kopf und Kameras', color: '#e4e4e7', pos: [0.85, 1.55, 0.55], explode: [0.3, 1.2, 0.4],
          info: '<p>Das ist der „Kopf“ des Rovers, in 2 Metern Höhe. Zwei Farbkameras, wie zwei Augen, machen <b>3D-Fotos</b>; weitere Kameras prüfen Hindernisse nahe bei den Rädern.</p>',
          more: '<p>Bilder und Befehle brauchen zwischen Mars und Erde <b>4 bis 24 Minuten</b> (je nachdem, wo die beiden Planeten stehen): Deshalb kann man den Rover nicht „live“ steuern wie ein Spielzeugauto.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 1.35, n: 14, pos: [0, 0.67, 0], color: '#d4d4d8' }, { t: 'cyl', r: 0.12, h: 0.1, n: 16, pos: [0, 0.05, 0], color: '#71717a' },
            { t: 'group', pos: [0, 1.42, 0], anim: { type: 'swing', axis: 'y', amp: 50, wave: 'window', from: 0.05, to: 0.45, ramp: 0.3 }, shapes: [
              { t: 'cyl', r: 0.1, h: 0.14, n: 16, color: '#71717a' },
              { t: 'box', s: [0.42, 0.28, 0.62], pos: [0.05, 0.2, 0], color: '#f4f4f5' },
              { t: 'box', s: [0.32, 0.2, 0.2], pos: [0.12, 0.2, -0.02], color: '#d4d4d8' },
              { t: 'cyl', r: 0.09, h: 0.08, n: 20, rot: [0, 0, 90], pos: [0.29, 0.22, 0], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, 0.22], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, -0.22], color: '#18181b' },
              { t: 'cyl', r: 0.035, h: 0.02, n: 12, rot: [0, 0, 90], pos: [0.305, 0.22, 0], color: '#38bdf8', decal: 1 } ] } ] },
        { id: 'laser', name: 'SuperCam-Laser', label: 'Laser', color: '#ef4444', chip: true,
          info: '<p>Vom Kopf aus schießt der Rover einen winzigen <b>Laser</b> auf einen Felsen, der bis zu 7 Meter entfernt ist. Der Fels gibt einen Funken ab, und am Licht des Funkens erkennt der Rover, <b>woraus er besteht</b>.</p>',
          more: '<p>Jedes chemische Element sendet Licht in ganz bestimmten Farben aus: Analysiert man das <b>Spektrum</b> des Funkens, erkennt man Eisen, Silizium, Kalzium … Ein Mikrofon nimmt auch das „Tick“ des Lasers auf: Der Klang verrät, ob der Fels hart oder weich ist.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[1.17, 3.19, 0.55], [2.9, 0.22, 0.6]], color: '#ef4444', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.1 } },
            { t: 'sphere', r: 0.11, n: 8, pos: [2.9, 0.22, 0.6], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.2 } } ] },
        { id: 'braccio', name: 'Roboterarm', color: '#e4e4e7', pos: [1.18, 1.18, -0.35], explode: [0.9, 0.2, -0.6],
          info: '<p>Ein Arm von mehr als 2 Metern Länge mit 5 Gelenken. An der Spitze hat er eine „Hand“ mit einem <b>Bohrer</b>, einer Lupe und weiteren Geräten, um Felsen aus der Nähe zu untersuchen.</p>',
          shapes: [ { t: 'cyl', r: 0.11, h: 0.2, n: 16, rot: [90, 0, 0], color: '#71717a' },
            { t: 'group', anim: { type: 'swing', axis: 'z', amp: -38, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
              { t: 'pipe', r: 0.06, n: 12, pts: [[0, 0, 0], [0.95, 0.15, 0]] },
              { t: 'group', pos: [0.95, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -45, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
                { t: 'sphere', r: 0.09, n: 10, color: '#71717a' },
                { t: 'pipe', r: 0.055, n: 12, pts: [[0, 0, 0], [0.8, -0.1, 0]] },
                { t: 'group', pos: [0.85, -0.1, 0], shapes: [
                  { t: 'box', s: [0.28, 0.28, 0.28], color: '#a1a1aa' },
                  { t: 'cyl', r: 0.05, h: 0.38, n: 12, pos: [0, -0.3, 0], color: '#52525b' },
                  { t: 'cyl', r: 0.02, h: 0.2, n: 8, pos: [0, -0.56, 0], color: '#d4d4d8' },
                  { t: 'cyl', r: 0.08, h: 0.12, n: 14, pos: [0.18, 0, 0], rot: [0, 0, 90], color: '#3f3f46' },
                  { t: 'box', s: [0.12, 0.18, 0.12], pos: [0, 0, 0.2], color: '#fbbf24' } ] } ] } ] } ] },
        { id: 'provette', name: 'Probenröhrchen', label: 'Röhrchen', color: '#e5e7eb', explode: [0, -0.4, -1.1],
          info: '<p>Der Bohrer entnimmt kleine Gesteins-„Kerne“, so groß wie ein Stück Kreide, und verschließt sie in versiegelten <b>Röhrchen</b>. Eines Tages wird eine andere Mission sie zur Erde bringen.</p>',
          shapes: Array.from({ length: 7 }, (_, k) => ({ t: 'cyl', r: 0.045, h: 0.42, n: 14, rot: [0, 0, 90], pos: [-0.2, 0.94, -0.6 + k * 0.12], color: k % 2 ? '#e5e7eb' : '#cbd5e1' })).concat([ { t: 'box', s: [0.6, 0.06, 0.95], pos: [-0.2, 0.89, -0.24], color: '#71717a' } ]) },
        { id: 'rtg', name: 'Nuklearer Generator (RTG)', label: 'Generator', color: '#3f3f46', pos: [-1.35, 1.55, 0], explode: [-1.0, 0.4, 0],
          info: '<p>Der Rover nutzt keine Solarzellen, die der Staub bedecken würde. Er hat eine besondere „Batterie“: ein <b>radioaktives</b> Material, das sich erwärmt, und die Wärme wird zu Strom, Tag und Nacht, viele Jahre lang.</p>',
          more: '<p>Der RTG enthält etwa 5 kg Plutonium-238 und liefert rund 110 Watt: wenig, aber 14 Jahre lang. Die zusätzliche Wärme hält auch die Geräte in den eisigen Marsnächten <b>warm</b>.</p>',
          shapes: [ { t: 'group', rot: [0, 0, 32], shapes: [ { t: 'cyl', r: 0.24, h: 0.95, n: 24, rot: [0, 0, 90] },
            { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [0.48, 0, 0], color: '#71717a' }, { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [-0.48, 0, 0], color: '#71717a' } ]
            .concat(Array.from({ length: 8 }, (_, k) => ({ t: 'group', rot: [k * 45, 0, 0], shapes: [ { t: 'box', s: [0.86, 0.2, 0.025], pos: [0, 0.33, 0], color: '#27272a' } ] }))) },
            { t: 'sphere', r: 0.24, n: 10, color: '#f97316', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ] },
        { id: 'antenne', name: 'Antennen', color: '#d4d4d8', explode: [-0.3, 1.0, -0.6],
          info: '<p>Der Rover „telefoniert“ mit zwei Antennen nach Hause: Die sechseckige spricht <b>direkt mit der Erde</b>; die kleine spricht mit den Satelliten, die den Mars umkreisen und als Relais dienen.</p>',
          more: '<p>Der größte Teil der Daten läuft über die Satelliten (wie den Mars Reconnaissance Orbiter), die viel schneller empfangen und dann an die großen NASA-Antennen in Kalifornien, Spanien und Australien weiterleiten.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.3, n: 10, pos: [-0.55, 1.7, -0.55], color: '#71717a' },
            { t: 'group', pos: [-0.55, 1.9, -0.55], anim: { type: 'swing', axis: 'y', amp: 30, rate: 0.5 }, shapes: [
              { t: 'group', rot: [0, 0, 55], shapes: [ { t: 'cyl', r: 0.32, h: 0.06, n: 6, color: '#e4e4e7' }, { t: 'cyl', r: 0.26, h: 0.02, n: 6, pos: [0, 0.035, 0], color: '#a1a1aa', decal: 1 } ] } ] },
            { t: 'cyl', r: 0.06, h: 0.32, n: 14, pos: [-0.85, 1.72, 0.55], color: '#f4f4f5' }, { t: 'sphere', r: 0.06, n: 8, pos: [-0.85, 1.88, 0.55], color: '#f4f4f5' } ] },
        { id: 'elicottero', name: 'Hubschrauber Ingenuity', label: 'Hubschrauber', color: '#a1a1aa', pos: [-1.6, 0, 2.0], explode: [-0.6, 0.8, 0.8],
          anim: { type: 'move', dir: [0, 1, 0], amp: 1.6, wave: 'window', from: 0.15, to: 0.85, ramp: 0.4 },
          info: '<p>Ein kleiner Hubschrauber von <b>1,8 kg</b>, der zusammen mit dem Rover Perseverance ankam. 2021 war er das erste Fluggerät, das auf einem anderen Planeten flog!</p>',
          more: '<p>Die Luft auf dem Mars ist 100-mal dünner als unsere: Um abzuheben, drehen sich die 1,2 m langen Rotorblätter mit <b>2400 Umdrehungen pro Minute</b>, viel schneller als bei einem normalen Hubschrauber. Er ist 72-mal geflogen.</p>',
          shapes: [ { t: 'box', s: [0.2, 0.18, 0.2], pos: [0, 0.38, 0], color: '#f4f4f5' },
            { t: 'cyl', r: 0.02, h: 0.42, n: 8, pos: [0, 0.64, 0], color: '#3f3f46' },
            { t: 'box', s: [0.32, 0.02, 0.2], pos: [0, 0.88, 0], color: '#1e3a8a' } ]
            .concat([45, 135, 225, 315].map((a) => ({ t: 'pipe', r: 0.012, n: 6, pts: [[0.08 * Math.cos(a * Math.PI / 180), 0.3, 0.08 * Math.sin(a * Math.PI / 180)], [0.3 * Math.cos(a * Math.PI / 180), 0.0, 0.3 * Math.sin(a * Math.PI / 180)]], color: '#9ca3af' })))
            .concat([ [0.68, 1], [0.78, -1] ].map(([y, d]) => ({ t: 'group', pos: [0, y, 0], anim: { type: 'spin', axis: 'y', dir: d, rate: 12 }, shapes: [
              { t: 'box', s: [1.2, 0.012, 0.09], rot: [d * 8, 0, 0], color: '#52525b' }, { t: 'cyl', r: 0.04, h: 0.04, n: 10, color: '#3f3f46' } ] }))) }
      ]
    },
    steps: [
      { icon: '🤖', title: 'Ein Roboter-Entdecker', explode: 0,
        html: '<p>Der Mars ist unglaublich weit weg: Die Reise dauert <b>7 Monate</b>. Menschen hinzuschicken ist noch zu schwierig, also schicken wir Roboter. Der Rover ist ein <b>Labor auf Rädern</b>, das jahrelang allein arbeitet.</p>' },
      { icon: '🛞', title: 'Sechs Räder und Gelenkarme', focus: ['ruote', 'sospensioni', 'suolo'], view: { rx: 0.12, ry: -0.1 },
        html: '<p>Jedes Rad hat einen Motor. Die <b>Rocker-Bogie-Aufhängung</b> besteht aus Armen, die wie Wippen knicken: So bleiben alle 6 Räder immer am Boden, auch über Steinen.</p><p class="tip">🐢 Der Rover fährt langsam: weniger als 200 Meter pro Stunde. Auf dem Mars gibt es keinen Abschleppwagen!</p>' },
      { icon: '👀', title: 'Die Augen des Rovers', focus: ['testa', 'corpo'], loop: [0, 0.48], zoom: 1.4, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Oben am Mast sitzen zwei <b>Kameras</b> im Abstand unserer Augen: Zusammen machen sie 3D-Fotos. Die Wissenschaftler auf der Erde schauen sie an und entscheiden, wohin es geht.</p><p>Der Rover kann auch ein paar Meter allein fahren und sucht sich dabei den sichersten Weg.</p>' },
      { icon: '🔴', title: 'Ein Laser, der Felsen liest', focus: ['laser', 'testa', 'suolo'], loop: [0.45, 0.65], view: { rx: 0.25, ry: -0.9 },
        html: '<p>Der Rover schießt einen kleinen <b>Laser</b> auf einen Felsen: Es blitzt ein winziger Funke auf. Am Licht des Funkens erkennt man, woraus der Fels besteht, ohne ihn auch nur zu berühren!</p>' },
      { icon: '🦾', title: 'Der Arm und der Bohrer', focus: ['braccio', 'provette', 'suolo'], loop: [0.6, 1.0], view: { rx: 0.2, ry: -0.35 },
        html: '<p>Der <b>Roboterarm</b> setzt die Geräte auf den Fels: eine Lupe, chemische Sensoren und einen <b>Bohrer</b>. Die Gesteins-„Kerne“ werden in <b>Röhrchen</b> verschlossen.</p><p class="tip">🧪 Das Ziel? Spuren von Mikroben zu finden, die vor Milliarden Jahren lebten, als es auf dem Mars Seen und Flüsse gab.</p>' },
      { icon: '⚡', title: 'Energie bei Tag und Nacht', focus: ['rtg', 'corpo'], view: { rx: 0.25, ry: -2.3 }, zoom: 1.3,
        html: '<p>Hinten sitzt der <b>nukleare Generator</b> (RTG): ein Material, das sich von selbst erwärmt; die Wärme wird zu Strom. Er arbeitet auch nachts und bei Sandstürmen, wenn Solarzellen nichts bringen würden.</p>' },
      { icon: '📡', title: 'Nach Hause telefonieren', focus: ['antenne', 'corpo'], view: { rx: 0.5, ry: -1.6 }, zoom: 1.2,
        html: '<p>Mit den <b>Antennen</b> empfängt der Rover die Befehle und schickt Fotos und Daten. Die Nachricht braucht mehrere Minuten bis zum Ziel: Der Rover muss allein zurechtkommen.</p>' },
      { icon: '🚁', title: 'Der erste Flug auf dem Mars', focus: ['elicottero', 'suolo'], loop: [0.1, 0.9], view: { rx: 0.15, ry: -1.2 },
        html: '<p><b>Ingenuity</b> ist ein Mini-Hubschrauber, der als „Kundschafter von oben“ diente. Seine Rotorblätter drehen sich rasend schnell, weil die Luft auf dem Mars so dünn ist.</p>' }
    ],
    facts: [
      { icon: '🚗', title: 'So groß wie ein Auto', html: 'Perseverance ist 3 Meter lang, 2,7 breit und wiegt etwa eine Tonne. Sein Name bedeutet <b>„Ausdauer“</b>.' },
      { icon: '🪂', title: 'Sieben Minuten des Schreckens', html: 'Bei der Landung wird der Rover in 7 Minuten von 20 000 km/h auf null abgebremst: Hitzeschild, Fallschirm und schließlich ein „fliegender Kran“, der ihn an Seilen absenkt.' },
      { icon: '🎙️', title: 'Die Geräusche des Mars', html: 'Perseverance hat Mikrofone: Zum ersten Mal haben wir den <b>Wind des Mars</b> und das Summen des Hubschraubers gehört.' },
      { icon: '🏆', title: 'Der Rekord von Opportunity', html: 'Der Rover Opportunity sollte 90 Tage halten, hat aber <b>14 Jahre</b> gearbeitet und dabei mehr als einen Marathon (45 km) zurückgelegt.' },
      { icon: '🔤', title: 'Eine Botschaft auf den Rädern', html: 'Die Räder von Curiosity haben Löcher, die im Sand eine Botschaft in Morsezeichen hinterlassen: „JPL“, das Labor, das ihn gebaut hat.' }
    ],
    quiz: [
      { type: 'mc', q: 'Warum ist die Aufhängung des Rovers gelenkig (Rocker-Bogie)?', options: ['Um schneller zu fahren', 'Um auf Steinen alle Räder am Boden zu halten', 'Um Energie zu sparen', 'Um wie eine Spinne auszusehen'], answer: 1, explain: 'Die Arme knicken wie Wippen: Die 6 Räder bleiben in Kontakt mit dem Boden, und der Rover kippt nicht um.' },
      { type: 'mc', q: 'Warum kann man den Rover nicht „live“ wie ein Spielzeugauto steuern?', options: ['Weil die Befehle Minuten brauchen, bis sie ankommen', 'Weil er kein Lenkrad hat', 'Weil auf dem Mars immer Nacht ist', 'Weil er keine Antennen hat'], answer: 0, explain: 'Die Funksignale brauchen zwischen Erde und Mars 4 bis 24 Minuten.' },
      { type: 'tf', q: 'Der Mars ist rot, weil sein Staub Rost enthält.', answer: true, explain: 'Das Eisenoxid (Rost) färbt den Marsstaub rot.' },
      { type: 'mc', q: 'Wozu dient der Laser des Rovers?', options: ['Zur Verteidigung', 'Um die Geräte zu wärmen', 'Um herauszufinden, woraus die Felsen bestehen', 'Um nachts zu leuchten'], answer: 2, explain: 'Der Laser erzeugt auf dem Fels einen Funken; das Licht des Funkens verrät die chemischen Elemente.' },
      { type: 'mc', q: 'Woher bekommt Perseverance seine Energie?', options: ['Von großen Solarzellen', 'Von einem Generator, der Wärme in Strom umwandelt', 'Vom Wind des Mars', 'Von Batterien, die jeden Monat gewechselt werden'], answer: 1, explain: 'Der RTG nutzt die Wärme eines radioaktiven Materials: Er arbeitet Tag und Nacht viele Jahre lang.' },
      { type: 'num', q: 'Wie viele Räder hat der Rover?', answer: 6, explain: 'Sechs Räder, jedes mit eigenem Motor.' }
    ]
  });
})();
