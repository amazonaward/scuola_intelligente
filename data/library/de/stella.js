/* La stella: come funziona (fusione, equilibrio tra gravità e pressione) e come vive (ciclo di vita).
   Al centro una stella "come il Sole" vista in trasparenza; intorno, su un anello, le fasi della vita delle stelle. */
(function () {
  const D = Math.PI / 180;
  /* freccia lungo +y (base nell'origine): asta + punta */
  const arrow = (len, col, flip) => ({ t: 'group', rot: flip ? [180, 0, 0] : [0, 0, 0], pos: flip ? [0, len, 0] : [0, 0, 0], shapes: [
    { t: 'cyl', r: 0.035, h: len * 0.65, n: 10, pos: [0, len * 0.325, 0], color: col },
    { t: 'cone', r: 0.09, h: len * 0.35, n: 14, pos: [0, len * 0.82, 0], color: col } ] });
  /* frecce radiali: dirs come angoli [giro intorno a z, giro intorno a x] */
  const DIRS = [0, 45, 90, 135, 180, 225, 270, 315].map((a) => [0, a]).concat([[90, 0], [-90, 0], [90, 180], [-90, 180]]);
  const radial = (r0, len, col, inward, shift) => DIRS.map(([ax, az], i) => {
    const rz = az + (shift || 0), rx = ax;
    const dir = [-Math.sin(rz * D) * Math.cos(rx * D), Math.cos(rz * D) * Math.cos(rx * D), Math.sin(rx * D)];
    return { t: 'group', rot: [rx, 0, rz], shapes: [ { t: 'group', pos: [0, r0, 0], anim: { type: 'move', dir: [0, inward ? -1 : 1, 0], amp: 0.1, rate: 1, phase: i * 0.05 }, shapes: [ arrow(len, col, inward) ] } ], _d: dir };
  });
  /* protoni che si scontrano al centro (fusione) */
  const fusion = [];
  [[0.42, 0.1, 0.05], [-0.4, -0.12, 0.1], [0.08, 0.42, -0.1], [-0.1, -0.4, -0.08], [0.15, 0.05, 0.42], [-0.12, 0.06, -0.42]].forEach((p, i) => {
    fusion.push({ t: 'sphere', r: 0.07, n: 8, m: 10, pos: p, color: i % 2 ? '#ef4444' : '#f87171',
      anim: [ { type: 'path', pts: [p, [p[0] * 0.12, p[1] * 0.12, p[2] * 0.12]], wave: 'saw', rate: 1, phase: (i >> 1) * 0.33 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.08, rate: 1, phase: (i >> 1) * 0.33 } ] });
  });
  for (let k = 0; k < 3; k++) fusion.push({ t: 'sphere', r: 0.16, n: 10, m: 14, color: '#ffffff', anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.9, to: 1.0, ramp: 0.3, phase: k * 0.33 }, { type: 'scale', from: 0.6, to: 1.6, wave: 'window', win: [0.9, 1.0], phase: k * 0.33 } ] });
  /* fotoni che escono con un cammino a zig-zag */
  const photons = [];
  for (let i = 0; i < 9; i++) {
    const a = i * 40 * D, b = (i % 3 - 1) * 30 * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)], q = [-d[2], 0.4, d[0]];
    const pts = [0.3, 0.55, 0.8, 1.05, 1.25, 2.4].map((r, k) => [d[0] * r + q[0] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[1] * r + q[1] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[2] * r + q[2] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0)]);
    photons.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: '#fef08a', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.5, phase: i / 9 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.98, ramp: 0.05, rate: 0.5, phase: i / 9 } ] });
  }
  const at = (p, shapes) => ({ t: 'group', pos: p, shapes });
  const P = { nebulosa: [-3.3, 0.3, -1.3], proto: [-1.5, 0.2, -3.2], gigante: [1.6, 0.5, -3.3], planetaria: [3.5, 0.2, -1.0], supernova: [3.2, 0.2, 1.7], neutroni: [1.2, 0, 3.4], buco: [-1.7, 0, 3.1] };

  LIBRARY({
    lang: 'de',
    id: 'stella',
    title: 'Der Stern',
    intro: 'Ein Stern ist eine riesige Kugel aus sehr heißem Gas, die <b>von selbst leuchtet</b>. Im Inneren, im Kern, verwandelt sich Wasserstoff in Helium und setzt gewaltige Energie frei. Auch Sterne werden geboren, leben und sterben!',
    model: {
      rx: 0.55, ry: -0.35, speed: 0.35, height: 480, bg: 'space', fit: 0.98,
      parts: [
        { id: 'involucro', name: 'Stern (wie die Sonne)', label: 'Stern', color: '#fcd34d', alpha: 0.4, explode: [0, 0, 0],
          info: '<p>Ein erwachsener Stern, wie unsere Sonne. Er besteht vor allem aus <b>Wasserstoff</b> und <b>Helium</b>, so heiß, dass sie ein besonderes Gas bilden, das <b>Plasma</b> heißt. An der Oberfläche sind es etwa 5500 °C.</p>',
          more: '<p>Sterne haben je nach Temperatur verschiedene Farben: Die kältesten sind <b>rot</b> (3000 °C), Sterne wie die Sonne sind <b>gelb</b>, die heißesten <b>blau</b> (über 20 000 °C). Die Farbe verrät uns die Temperatur auch über riesige Entfernungen.</p>',
          shapes: [ { t: 'sphere', r: 1.25, n: 22, m: 36 }, { t: 'sphere', r: 1.32, n: 18, m: 30, color: '#fde68a', alpha: 0.12, anim: { type: 'scale', from: 1, to: 1.04, rate: 0.7 } } ] },
        { id: 'nucleo', name: 'Kern (das Kraftwerk)', label: 'Kern', color: '#fff7cc', alpha: 0.55, explode: [0, 0, 0],
          info: '<p>Die Mitte des Sterns: Hier herrschen etwa <b>15 Millionen Grad</b> und ein gewaltiger Druck. Er ist das „Kraftwerk“ des Sterns.</p>',
          shapes: [ { t: 'sphere', r: 0.5, n: 16, m: 24 } ] },
        { id: 'fusione', name: 'Kernfusion', label: 'Fusion', color: '#ef4444', explode: [0, 0, 0],
          info: '<p>Im Kern rasen die <b>Wasserstoff</b>-Kerne blitzschnell umher und stoßen zusammen: Sie verschmelzen und werden zu <b>Helium</b>. Bei jeder Fusion wird ein klein wenig Materie in viel Energie umgewandelt: Licht und Wärme.</p>',
          more: '<p>Es braucht 4 Wasserstoffkerne (Protonen), um einen Heliumkern zu bilden, der etwas weniger wiegt als die 4 Protonen: Die fehlende Masse wird nach Einsteins Formel <b>E = mc²</b> zu Energie. Die Sonne „verbrennt“ so 600 Millionen Tonnen Wasserstoff pro Sekunde.</p>',
          shapes: fusion },
        { id: 'luce', name: 'Licht, das nach außen dringt', label: 'Licht', color: '#fef08a', explode: [0, 0, 0], chip: true,
          info: '<p>Die im Kern erzeugte Energie wandert nach außen, prallt dabei zwischen den Teilchen hin und her und tritt schließlich als <b>Licht</b> und Wärme aus der Oberfläche aus.</p>',
          more: '<p>In der Sonne braucht ein „Lichtpaket“ (Photon) bis zu <b>100 000 Jahre</b>, um aus dem Kern herauszukommen, weil es milliardenfach aufgenommen und wieder ausgesendet wird. Danach braucht es von der Oberfläche bis zur Erde nur 8 Minuten!</p>',
          shapes: photons },
        { id: 'gravita', name: 'Schwerkraft (drückt nach innen)', label: 'Schwerkraft', color: '#60a5fa', explode: [0, 0, 0],
          info: '<p>Die ganze Materie des Sterns zieht sich durch die <b>Schwerkraft</b> zur Mitte hin zusammen: Wäre sie allein, würde der Stern in sich zusammenfallen.</p>',
          shapes: radial(1.45, 0.55, '#60a5fa', true, 22.5).map((g) => (delete g._d, g)) },
        { id: 'pressione', name: 'Druck (drückt nach außen)', label: 'Druck', color: '#fb923c', explode: [0, 0, 0],
          info: '<p>Die Hitze des Kerns lässt das Gas <b>nach außen</b> drücken, wie heiße Luft, die einen Ballon aufbläst. Schwerkraft und Druck halten sich die Waage: Der Stern bleibt Milliarden Jahre im <b>Gleichgewicht</b>.</p>',
          shapes: radial(0.62, 0.5, '#fb923c', false, 0).map((g) => (delete g._d, g)) },
        { id: 'percorso', name: 'Lebenszyklus', label: 'Lebenszyklus', color: '#c4b5fd', explode: [0, 0, 0], noLabel: true,
          info: '<p>Sterne verändern sich im Laufe ihres Lebens: Sie entstehen in einer Wolke, leuchten lange und verwandeln sich am Ende. <b>Wie</b> sie enden, hängt davon ab, <b>wie groß sie sind</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], color: '#c4b5fd', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.gigante, [3.1, 0.4, 0.2], P.supernova, P.neutroni], color: '#fca5a5', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.supernova, [0.9, 0.1, 2.9], P.buco], color: '#fca5a5', alpha: 0.5 } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.06, n: 6, m: 8, pos: P.nebulosa, color: '#ede9fe',
              anim: { type: 'path', pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], wave: 'saw', rate: 0.12, phase: k / 6 } }))) },
        { id: 'nebulosa', name: 'Nebel (wo Sterne entstehen)', label: 'Nebel', color: '#c084fc', alpha: 0.32, explode: [-0.6, 0.3, -0.3],
          info: '<p>Sterne entstehen in riesigen <b>Wolken aus Gas und Staub</b>, den Nebeln. Wo die Wolke dichter ist, lässt die Schwerkraft sie zu immer dichteren Kugeln zusammenklumpen.</p>',
          shapes: [ at(P.nebulosa, [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.15 }, shapes: [
            { t: 'sphere', r: 0.75, n: 12, m: 18, scale: [1.3, 0.8, 1] }, { t: 'sphere', r: 0.55, n: 12, m: 18, pos: [0.6, 0.25, 0.3], color: '#f472b6' },
            { t: 'sphere', r: 0.5, n: 12, m: 18, pos: [-0.55, -0.15, -0.3], color: '#818cf8' }, { t: 'sphere', r: 0.4, n: 10, m: 16, pos: [0.1, 0.45, -0.4], color: '#e879f9' },
            { t: 'sphere', r: 0.07, n: 6, pos: [0.2, 0, 0.2], color: '#ffffff', alpha: 1 }, { t: 'sphere', r: 0.05, n: 6, pos: [-0.4, 0.2, 0.1], color: '#ffffff', alpha: 1 } ] } ]) ] },
        { id: 'protostella', name: 'Protostern', color: '#fb923c', explode: [-0.3, 0.3, -0.6],
          info: '<p>Eine Gaskugel, die sich zusammenzieht und aufheizt. Um sie kreist eine <b>Scheibe</b> aus Materie (in der Planeten entstehen können!), und an den Polen schießen zwei Gasstrahlen heraus.</p>',
          more: '<p>Wenn in der Mitte etwa 10 Millionen Grad erreicht sind, zündet die Wasserstofffusion: Der Protostern wird zu einem richtigen Stern. Das dauert einige Millionen Jahre.</p>',
          shapes: [ at(P.proto, [ { t: 'sphere', r: 0.3, n: 12, m: 18 },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.6 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 30, m: 8, scale: [1, 0.25, 1], color: '#fdba74', alpha: 0.45 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.75, 0, 0], color: '#a16207' } ] },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, 0.6, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, -0.6, 0], rot: [180, 0, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ]) ] },
        { id: 'gigante-rossa', name: 'Roter Riese', label: 'Roter Riese', color: '#dc2626', alpha: 0.8, explode: [0.3, 0.4, -0.6],
          info: '<p>Wenn der Wasserstoff im Kern aufgebraucht ist, <b>bläht</b> sich der Stern enorm auf und seine Oberfläche kühlt ab: Er wird zu einem Roten Riesen. In 5 Milliarden Jahren passiert das auch mit der Sonne.</p>',
          more: '<p>Die Sonne wird so groß werden, dass sie Merkur und Venus verschluckt. Sterne, die viel größer sind als die Sonne, werden zu roten <b>Überriesen</b>, wie Beteigeuze im Sternbild Orion.</p>',
          shapes: [ at(P.gigante, [ { t: 'sphere', r: 0.95, n: 18, m: 28, anim: { type: 'scale', from: 0.94, to: 1.05, rate: 0.5 } }, { t: 'sphere', r: 1.05, n: 14, m: 22, color: '#f87171', alpha: 0.15 } ]) ] },
        { id: 'nana-bianca', name: 'Planetarischer Nebel und Weißer Zwerg', label: 'Weißer Zwerg', color: '#e0f2fe', explode: [0.6, 0.3, -0.2],
          info: '<p>Sterne wie die Sonne blasen am Ende ihre äußeren Schichten als wunderschönen Gasring davon (<b>planetarischer Nebel</b>). In der Mitte bleibt der Kern übrig: ein <b>Weißer Zwerg</b>, so klein wie die Erde, aber sehr heiß.</p>',
          more: '<p>Ein Teelöffel Weißer Zwerg würde <b>mehrere Tonnen</b> wiegen! Ohne Fusion kühlt er über Milliarden Jahre langsam ab.</p>',
          shapes: [ at(P.planetaria, [ { t: 'sphere', r: 0.12, n: 10, m: 14, color: '#ffffff' },
            { t: 'group', rot: [70, 0, 20], shapes: [ { t: 'torus', R: 0.6, r: 0.2, n: 32, m: 10, color: '#22d3ee', alpha: 0.45, anim: { type: 'scale', from: 0.9, to: 1.1, rate: 0.4 } }, { t: 'torus', R: 0.6, r: 0.08, n: 32, m: 8, color: '#f472b6', alpha: 0.5 } ] } ]) ] },
        { id: 'supernova', name: 'Supernova', color: '#fde047', explode: [0.6, 0.3, 0.4],
          info: '<p>Sehr <b>große</b> Sterne (mindestens 8-mal so groß wie die Sonne) enden mit einer gigantischen Explosion: einer Supernova. Einige Wochen lang leuchtet sie heller als Milliarden Sterne zusammen!</p>',
          more: '<p>In Supernovae entstehen viele schwere Elemente, zum Beispiel <b>Gold</b>, die in den Weltraum geschleudert werden. Das Eisen in deinem Blut und das Kalzium in deinen Knochen wurden im Inneren uralter Sterne gebildet: Wir bestehen aus <b>Sternenstaub</b>!</p>',
          shapes: [ at(P.supernova, [ { t: 'sphere', r: 0.18, n: 10, m: 14, color: '#ffffff' },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fb923c', alpha: 0.5, anim: [ { type: 'scale', from: 0.3, to: 1.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 } ] },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fde047', alpha: 0.6, anim: [ { type: 'scale', from: 0.2, to: 1.1, wave: 'saw', rate: 0.6, phase: 0.5 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: 0.5 } ] } ]) ] },
        { id: 'stella-neutroni', name: 'Neutronenstern (Pulsar)', label: 'Pulsar', color: '#a5f3fc', explode: [0.3, 0.3, 0.6],
          info: '<p>Nach der Supernova kann ein <b>Neutronenstern</b> übrig bleiben: nur 20 km groß, so wie eine Stadt, aber schwerer als die Sonne. Manche drehen sich rasend schnell und senden zwei Lichtstrahlen aus, wie ein Leuchtturm: Das sind die <b>Pulsare</b>.</p>',
          shapes: [ at(P.neutroni, [ { t: 'group', rot: [0, 0, 25], shapes: [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [
            { t: 'sphere', r: 0.16, n: 10, m: 14, color: '#e0f2fe' },
            { t: 'group', rot: [0, 0, 20], shapes: [ { t: 'cone', r: 0.16, h: 1.0, n: 14, rot: [180, 0, 0], pos: [0, 0.6, 0], color: '#67e8f9', alpha: 0.4 }, { t: 'cone', r: 0.16, h: 1.0, n: 14, pos: [0, -0.6, 0], color: '#67e8f9', alpha: 0.4 } ] } ] },
            { t: 'torus', R: 0.35, r: 0.012, n: 24, m: 4, color: '#a5f3fc', alpha: 0.5 } ] } ]) ] },
        { id: 'buco-nero', name: 'Schwarzes Loch', label: 'Schwarzes Loch', color: '#020617', explode: [-0.3, 0.3, 0.6],
          info: '<p>War der Stern <b>riesig</b>, stürzt sein Kern ohne Halt immer weiter zusammen und wird zu einem Schwarzen Loch: Die Schwerkraft ist so stark, dass <b>nicht einmal Licht</b> entkommen kann.</p>',
          more: '<p>Das Schwarze Loch selbst ist unsichtbar, aber das Gas, das darum kreist, bevor es hineinfällt, heizt sich auf und leuchtet: Das ist die <b>Akkretionsscheibe</b>. Im Jahr 2019 wurde das erste „Foto“ eines Schwarzen Lochs aufgenommen.</p>',
          shapes: [ at(P.buco, [ { t: 'sphere', r: 0.32, n: 14, m: 20 },
            { t: 'group', rot: [12, 0, 0], anim: { type: 'spin', axis: 'y', rate: 0.8 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 36, m: 8, scale: [1, 0.18, 1], color: '#f97316', alpha: 0.85 },
              { t: 'torus', R: 0.5, r: 0.08, n: 36, m: 6, scale: [1, 0.3, 1], color: '#fde68a', alpha: 0.9 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.9, 0, 0], color: '#fed7aa' } ] },
            { t: 'torus', R: 0.38, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], color: '#fbbf24', alpha: 0.8 } ]) ] }
      ]
    },
    steps: [
      { icon: '⭐', title: 'Was ist ein Stern?', focus: ['involucro', 'nucleo', 'luce', 'fusione'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.7,
        html: '<p>Ein Stern ist eine riesige Kugel aus <b>sehr heißem Gas</b>, die von selbst Licht und Wärme erzeugt. Die Sonne ist ein Stern: Die anderen sehen für uns nur wie Pünktchen aus, weil sie <b>unglaublich weit weg</b> sind.</p><p class="tip">🌟 Planeten dagegen leuchten nicht von selbst: Sie reflektieren das Licht der Sonne, genau wie der Mond.</p>' },
      { icon: '⚛️', title: 'Die Fusion im Kern', focus: ['nucleo', 'fusione'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.4,
        html: '<p>Im Kern herrschen Millionen Grad. Die <b>Wasserstoff</b>-Kerne stoßen so heftig zusammen, dass sie <b>verschmelzen</b> und zu <b>Helium</b> werden: Jedes Mal wird ein Energieblitz frei.</p><p class="tip">💡 Es ist dieselbe Energie wie bei den „Wasserstoffbomben“, aber im Stern wird sie von seiner eigenen Schwerkraft im Zaum gehalten.</p>' },
      { icon: '⚖️', title: 'Ein perfektes Gleichgewicht', focus: ['gravita', 'pressione', 'involucro'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.7,
        html: '<p>Die <b>Schwerkraft</b> (blaue Pfeile) möchte den Stern zusammendrücken; der <b>Druck</b> des heißen Gases (orange Pfeile) drückt nach außen. Solange Fusion stattfindet, halten sich die beiden Kräfte die Waage und der Stern bleibt <b>Milliarden Jahre</b> lang stabil.</p>' },
      { icon: '☀️', title: 'Die lange Reise des Lichts', focus: ['luce', 'involucro', 'nucleo'], view: { rx: 0.3, ry: -0.6 }, zoom: 1.7,
        html: '<p>Die im Zentrum erzeugte Energie kommt ganz langsam nach außen, prallt im Zickzack hin und her und verlässt schließlich die Oberfläche als <b>Licht</b>. Im Weltraum fliegt es mit 300 000 km pro Sekunde.</p>' },
      { icon: '☁️', title: 'Geburt: Nebel und Protosterne', focus: ['nebulosa', 'protostella', 'percorso'], view: { rx: 0.6, ry: -0.6 },
        html: '<p>Sterne entstehen in <b>Nebeln</b>, Wolken aus Gas und Staub. Die Schwerkraft sammelt das Gas zu einer immer heißeren Kugel: einem <b>Protostern</b>, um den eine Scheibe kreist, aus der <b>Planeten</b> entstehen können.</p>' },
      { icon: '🔴', title: 'Alter: der Rote Riese', focus: ['gigante-rossa', 'nana-bianca', 'percorso'], view: { rx: 0.6, ry: 0.1 },
        html: '<p>Wenn der Wasserstoff zu Ende geht, bläht sich der Stern auf und wird zu einem <b>Roten Riesen</b>. Sterne wie die Sonne verlieren dann ihre äußeren Schichten (einen <b>planetarischen Nebel</b>) und übrig bleibt ein kleiner <b>Weißer Zwerg</b>.</p>' },
      { icon: '💥', title: 'Riesensterne explodieren', focus: ['supernova', 'stella-neutroni', 'buco-nero', 'percorso'], view: { rx: 0.6, ry: 2.8 },
        html: '<p>Sterne, die viel größer sind als die Sonne, enden mit einer Explosion: einer <b>Supernova</b>. Übrig bleibt ein winziger, schwerer <b>Neutronenstern</b> oder ein <b>Schwarzes Loch</b>.</p><p class="tip">✨ Die Atome deines Körpers wurden im Inneren uralter Sterne erzeugt: Du bestehst aus Sternenstaub!</p>' }
    ],
    facts: [
      { icon: '🔢', title: 'Mehr Sterne als Sandkörner', html: 'Im Universum gibt es mehr Sterne als Sandkörner an allen Stränden der Erde. Allein unsere Galaxie, die Milchstraße, hat <b>Hunderte von Milliarden</b>.' },
      { icon: '🚀', title: 'Der nächste Stern', html: 'Nach der Sonne ist der nächste Stern <b>Proxima Centauri</b>: Sein Licht braucht mehr als 4 Jahre bis zu uns.' },
      { icon: '🎨', title: 'Farbige Sterne', html: 'Schau dir im Winter den Orion an: <b>Beteigeuze</b> ist rot (kühler), <b>Rigel</b> ist blau (sehr heiß).' },
      { icon: '✨', title: 'Warum funkeln sie?', html: 'Sterne flimmern, weil ihr Licht durch die bewegte Luft unserer Atmosphäre dringt. Im Weltraum flimmern sie nicht.' },
      { icon: '⏳', title: 'Sehr lange Leben', html: 'Die Sonne wird etwa <b>10 Milliarden Jahre</b> leben (4,6 hat sie schon hinter sich). Die größten Sterne verbrauchen ihren Brennstoff schnell und leben „nur“ ein paar Millionen Jahre.' }
    ],
    quiz: [
      { type: 'mc', q: 'Was passiert im Kern eines Sterns?', options: ['Das Wasser kocht', 'Wasserstoff verschmilzt zu Helium', 'Holz verbrennt', 'Eisen schmilzt'], answer: 1, explain: 'Es ist die Kernfusion: Wasserstoff → Helium, wobei sehr viel Energie frei wird.' },
      { type: 'mc', q: 'Welche zwei Kräfte halten sich in einem Stern die Waage?', options: ['Wind und Regen', 'Schwerkraft und Druck des heißen Gases', 'Magnetismus und Elektrizität', 'Reibung und Schub'], answer: 1, explain: 'Die Schwerkraft drückt nach innen, der Druck des heißen Gases nach außen.' },
      { type: 'tf', q: 'Die Sonne ist ein Stern.', answer: true, explain: 'Sie ist ein Stern mittlerer Größe: Sie sieht für uns nur anders aus, weil sie so nah ist.' },
      { type: 'mc', q: 'Wo entstehen Sterne?', options: ['In Schwarzen Löchern', 'In Nebeln aus Gas und Staub', 'Auf Planeten', 'In Kometen'], answer: 1, explain: 'Die Schwerkraft lässt das Gas der Nebel zusammenklumpen, bis die Fusion zündet.' },
      { type: 'order', q: 'Bringe das Leben eines Sterns wie der Sonne in die richtige Reihenfolge', items: ['Nebel', 'Protostern', 'Erwachsener Stern', 'Roter Riese', 'Weißer Zwerg'], explain: 'Wolke → Kugel, die sich aufheizt → stabiler Stern → bläht sich auf → heißer Kern bleibt übrig.' },
      { type: 'mc', q: 'Wie enden Sterne, die viel größer sind als die Sonne?', options: ['Sie erlöschen ganz langsam', 'Mit einer Supernova-Explosion', 'Sie werden zu Planeten', 'Sie werden zu Kometen'], answer: 1, explain: 'Sie explodieren als Supernovae und hinterlassen einen Neutronenstern oder ein Schwarzes Loch.' }
    ]
  });
})();
