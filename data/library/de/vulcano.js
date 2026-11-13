/* Il vulcano (strato-vulcano) tagliato a metà. La metà anteriore ("fianco") si sposta con Esplodi o diventa trasparente nei passi;
   sul piano del taglio (z = Z0) si vedono strati, camera magmatica e camino. */
(function () {
  const Z0 = 0.34, H = 3.0, RB = 4.2, RIM = 0.6;
  const rad = (y) => RIM + (RB - RIM) * Math.pow(1 - y / H, 1.6);
  const PROF = [[0, 0]].concat([0, 0.3, 0.7, 1.1, 1.5, 1.9, 2.3, 2.6, 2.85, 3.0].map((y) => [rad(y), y]), [[RIM * 0.7, H - 0.12], [0.18, H - 0.38], [0, H - 0.4]]);
  /* "mezzo tornio": fette estruse ruotate intorno a y, da a0 a a1 gradi (0→180 = metà dietro, 180→360 = metà davanti) */
  const halfLathe = (prof, a0, a1, N, color) => {
    const th = (a1 - a0) / N, d = 2 * RB * Math.tan((th * Math.PI / 180) / 2) * 1.12, s = [];
    for (let k = 0; k <= N; k++) s.push({ t: 'extrude', pts: prof, d, rot: [0, a0 + k * th, 0], color, smooth: true });
    return s;
  };
  /* strati del terreno (box impilati) tra z = za e z = zb */
  const LAYERS = [ [0, -0.18, '#4d7c0f'], [-0.18, -0.7, '#a16207'], [-0.7, -1.2, '#78716c'], [-1.2, -1.75, '#57534e'], [-1.75, -2.4, '#44403c'] ];
  const ground = (za, zb) => LAYERS.map(([y0, y1, c]) => ({ t: 'box', s: [10, y0 - y1, zb - za], pos: [0, (y0 + y1) / 2, (za + zb) / 2], color: c }));
  /* bande di strati sul taglio del cono: poligoni tra due quote */
  const band = (y0, y1, color) => {
    const ys = []; for (let i = 0; i <= 6; i++) ys.push(y0 + (y1 - y0) * i / 6);
    const right = ys.map((y) => [rad(y), y]), left = ys.slice().reverse().map((y) => [-rad(y), y]);
    return { t: 'extrude', pts: right.concat(left), d: 0.04, pos: [0, 0, Z0], color };
  };
  const BANDS = [];
  const bc = ['#6b5b53', '#a8a29e', '#57534e', '#9ca3af', '#7c6f64', '#b8b2a7', '#5b524b'];
  [0, 0.35, 0.75, 1.15, 1.55, 1.95, 2.35].forEach((y, i, a) => BANDS.push(band(y, Math.min(a[i + 1] || 2.62, 2.62), bc[i])));
  /* colate di lava sul fianco anteriore */
  const flow = (ang, wig, len) => {
    const pts = []; for (let i = 0; i <= 10; i++) { const y = H - 0.05 - i * (H - 0.1) * len / 10; const a = (ang + Math.sin(i * 0.9) * wig) * Math.PI / 180; const r = rad(y) + 0.06; pts.push([r * Math.cos(a), y + 0.02, -r * Math.sin(a)]); }
    return pts;
  };
  const lavaFlow = (ang, wig, len, w) => ({ t: 'pipe', r: w, n: 10, curve: true, pts: flow(ang, wig, len), color: '#ea580c', anim: { type: 'blink', color: '#fde047', amount: 0.55, rate: 1.4 } });
  /* lapilli della fontana di lava */
  const bombs = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 2.4, r = 0.6 + (i % 4) * 0.25, dx = Math.cos(a) * r, dz = Math.sin(a) * r;
    const pts = [[0, H - 0.3, Z0], [dx * 0.25, H + 0.6, Z0 + dz * 0.25], [dx * 0.55, H + 1.0 + (i % 3) * 0.15, Z0 + dz * 0.55], [dx * 0.85, H + 0.7, Z0 + dz * 0.85], [dx * 1.1, H - 0.1, Z0 + dz * 1.1]];
    bombs.push({ t: 'sphere', r: 0.06 + (i % 3) * 0.015, n: 6, m: 8, pos: pts[0], color: i % 2 ? '#f97316' : '#fde047', anim: [ { type: 'path', pts, wave: 'saw', rate: 1.1, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1.1, phase: i / 14 } ] });
  }
  const ash = [];
  for (let i = 0; i < 10; i++) {
    const a = i * 2.1, s = 0.35 + (i % 3) * 0.15;
    ash.push({ t: 'sphere', r: s, n: 10, m: 14, pos: [0, H + 0.3, Z0], color: i % 2 ? '#78716c' : '#a8a29e',
      anim: [ { type: 'path', pts: [[0, H + 0.3, Z0], [Math.cos(a) * 0.4, H + 1.6, Z0 + Math.sin(a) * 0.3], [Math.cos(a) * 0.9 + 0.6, H + 3.0, Z0 + Math.sin(a) * 0.6]], wave: 'saw', rate: 0.35, phase: i / 10 },
        { type: 'scale', from: 0.4, to: 1.5, wave: 'saw', rate: 0.35, phase: i / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.35, phase: i / 10 } ] });
  }
  const magmaUp = [];
  for (let i = 0; i < 10; i++) magmaUp.push({ t: 'sphere', r: 0.09, n: 6, m: 8, pos: [0, -1.1, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, -1.1, Z0 + 0.05], [0, 0.5, Z0 + 0.05], [0, H - 0.4, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 10 } });
  for (let i = 0; i < 4; i++) magmaUp.push({ t: 'sphere', r: 0.07, n: 6, m: 8, pos: [0, 0.95, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, 0.95, Z0 + 0.05], [1.1, 1.0, Z0 + 0.05], [rad(1.25) - 0.1, 1.25, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 4 } });

  LIBRARY({
    lang: 'de',
    id: 'vulcano',
    title: 'Der Vulkan',
    intro: 'Ein Vulkan ist eine Öffnung in der Erdkruste, aus der <b>Magma</b> austritt, geschmolzenes Gestein aus der Tiefe. Italien hat ein paar berühmte: den <b>Ätna</b>, den <b>Vesuv</b>, den <b>Stromboli</b>. Schneiden wir einen in der Mitte durch und schauen hinein!',
    model: {
      rx: 0.32, ry: -0.42, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'fianco', name: 'Flanke des Vulkans', label: 'Flanke', color: '#6b5b53', explode: [7.5, -0.8, 2.5],
          info: '<p>Die Hälfte des Vulkans, die wir von außen sehen: ein <b>Kegel</b> aus Gestein, der durch viele Ausbrüche entstanden ist. An den unteren Hängen wächst Pflanzenwuchs: Die Vulkanasche macht den Boden sehr fruchtbar.</p>',
          more: '<p>An den Hängen des Ätna und des Vesuv werden Weinreben, Zitrusfrüchte und Pistazien angebaut, gerade wegen der vulkanischen Böden, die reich an Mineralien sind.</p>',
          shapes: halfLathe(PROF, 180, 360, 22, '#6b5b53').concat(ground(Z0, 3.4)) },
        { id: 'cono', name: 'Vulkankegel', label: 'Kegel', color: '#5b524b', explode: [0, 0, -0.6],
          info: '<p>Das ist der eigentliche Berg. Jeder Ausbruch fügt eine Schicht aus Lava oder Asche hinzu: So <b>wächst</b> der Vulkan mit der Zeit, in wenigen Jahren sogar um viele Meter.</p>',
          shapes: halfLathe(PROF, 0, 180, 22, '#5b524b') },
        { id: 'strati', name: 'Schichten aus Lava und Asche', label: 'Schichten', color: '#a8a29e', explode: [0, 0, 0.05],
          info: '<p>Wenn man den Kegel durchschneidet, sieht man abwechselnde <b>Schichten</b>: erstarrte Lava (dunkel) und Asche und Lapilli (heller). Deshalb heißen diese Vulkane <b>Schichtvulkane</b> (Stratovulkane).</p>',
          more: '<p>Es gibt auch <b>Schildvulkane</b>, wie die auf Hawaii: breit und flach, nur aus Strömen sehr dünnflüssiger Lava aufgebaut.</p>',
          shapes: BANDS },
        { id: 'crosta', name: 'Erdkruste', label: 'Kruste', color: '#57534e', explode: [0, -0.4, -0.6],
          info: '<p>Unter unseren Füßen liegen Schichten aus Erde und <b>Gestein</b>: Das ist die Erdkruste, die „Schale“ des Planeten. An manchen Stellen ist sie gebrochen oder dünn, und das Magma kann aufsteigen.</p>',
          shapes: ground(-3.0, Z0) },
        { id: 'camera', name: 'Magmakammer', label: 'Magmakammer', color: '#dc2626', explode: [0, -0.5, 0.6],
          info: '<p>Ein großer „Sack“ aus <b>Magma</b> in einigen Kilometern Tiefe. Magma ist geschmolzenes Gestein bei mehr als <b>1000 °C</b>, voller gelöster Gase, wie die Bläschen in einem Sprudelgetränk.</p>',
          more: '<p>Magma ist leichter als das umgebende Gestein und steigt gern auf. Wenn der <b>Druck</b> der Gase in der Kammer zu hoch wird, bahnt sich das Magma einen Weg zur Oberfläche: Der Ausbruch beginnt.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 16, m: 28, pos: [0, -1.4, Z0], scale: [1.5, 0.55, 0.9], anim: { type: 'blink', color: '#f97316', amount: 0.5, rate: 0.8 } },
            { t: 'pipe', r: 0.2, n: 12, curve: true, pts: [[0.4, -2.45, Z0], [0.45, -2.1, Z0], [0.2, -1.8, Z0]], color: '#b91c1c' } ] },
        { id: 'camino', name: 'Schlot', label: 'Schlot', color: '#ea580c', explode: [0, 0.2, 0.6],
          info: '<p>Das natürliche „Rohr“, durch das das Magma von der Kammer bis zum Krater aufsteigt.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 14, curve: true, pts: [[0, -0.9, Z0], [0.05, 0.3, Z0], [-0.03, 1.6, Z0], [0, H - 0.38, Z0]] } ] },
        { id: 'magma', name: 'Aufsteigendes Magma', label: 'Magma', color: '#fde047', explode: [0, 0.2, 0.7], chip: true,
          info: '<p>Von den Gasen getrieben, steigt das Magma im Schlot auf. Wenn es an der Oberfläche austritt, verliert es die Gase und heißt von da an <b>Lava</b>.</p>',
          shapes: magmaUp },
        { id: 'condotto', name: 'Seitenkanal und Nebenkegel', label: 'Seitenschlot', color: '#c2410c', explode: [0.5, 0.1, 0.5],
          info: '<p>Manchmal findet das Magma seitlich einen Weg und öffnet einen <b>Seitenschlot</b> an der Flanke des Vulkans: Dort entsteht ein kleiner Nebenkegel.</p>',
          more: '<p>Der Ätna hat an seinen Flanken mehr als <b>300 Nebenkegel</b>, entstanden durch seitliche Ausbrüche im Laufe der Jahrhunderte.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[0, 0.95, Z0], [0.7, 0.95, Z0], [rad(1.25) - 0.05, 1.25, Z0]] },
            { t: 'lathe', n: 20, pos: [rad(1.25) + 0.05, 1.12, Z0 - 0.1], pts: [[0.42, 0], [0.3, 0.12], [0.12, 0.25], [0.06, 0.22], [0, 0.2]], color: '#44403c' } ] },
        { id: 'cratere', name: 'Krater', color: '#292524', explode: [0, 0.5, 0],
          info: '<p>Die Öffnung oben auf dem Vulkan, in Form einer Mulde. Darin kann ein brodelnder <b>Lavasee</b> liegen.</p>',
          shapes: [ { t: 'torus', R: RIM, r: 0.07, n: 30, m: 8, pos: [0, H, 0], color: '#3f3f46' },
            { t: 'cyl', r: 0.45, h: 0.04, n: 24, pos: [0, H - 0.3, 0], color: '#f97316', anim: { type: 'blink', color: '#fde047', amount: 0.8, rate: 2 } } ] },
        { id: 'fontana', name: 'Lavafontäne und Lapilli', label: 'Lapilli', color: '#f97316', explode: [0, 0.6, 0],
          info: '<p>Bei einem explosiven Ausbruch schleudert der Vulkan Lavafetzen in die Luft, die im Flug abkühlen: Kleine heißen <b>Lapilli</b>, die ballgroßen <b>Vulkanbomben</b>.</p>',
          shapes: bombs },
        { id: 'nube', name: 'Asche- und Gaswolke', label: 'Aschewolke', color: '#78716c', explode: [0, 1.0, 0],
          info: '<p>Der Vulkan stößt Wasserdampf, Gase und <b>Asche</b> aus: winzige Gesteinsbröckchen. Die Wolke kann kilometerhoch steigen, und der Wind trägt sie weit fort.</p>',
          more: '<p>Im Jahr 2010 legte die Wolke des isländischen Vulkans Eyjafjallajökull tagelang die Flüge in halb Europa lahm: Asche kann die Triebwerke von Flugzeugen beschädigen.</p>',
          shapes: ash },
        { id: 'colate', name: 'Lavaströme', label: 'Lavaströme', color: '#ea580c', explode: [7.5, -0.8, 2.5],
          info: '<p>Die Lava fließt wie ein roter Fluss die Flanken hinab. Beim Abkühlen wird sie dunkel und hart: Sie ist <b>neues Gestein</b> (Basalt).</p>',
          more: '<p>Die Lavaströme des Ätna kommen meist langsam voran, nur wenige Meter pro Stunde: Es bleibt Zeit, sich in Sicherheit zu bringen. Gefährlicher sind die <b>Glutwolken</b> (pyroklastische Ströme), wie die, die im Jahr 79 n. Chr. Pompeji begrub.</p>',
          shapes: [ lavaFlow(240, 6, 0.75, 0.1), lavaFlow(290, 9, 0.95, 0.12), lavaFlow(320, 5, 0.6, 0.08) ] }
      ]
    },
    steps: [
      { icon: '🌋', title: 'Ein Feuerberg', explode: 0,
        html: '<p>Von außen sieht ein Vulkan aus wie ein Berg in Form eines <b>Kegels</b> mit einer Mulde oben: dem <b>Krater</b>. Aber seine Geschichte beginnt viel weiter unten, unter der Erde.</p>' },
      { icon: '🔪', title: 'Schneiden wir ihn in der Mitte durch', explode: 1,
        html: '<p>Nehmen wir die vordere Hälfte weg. Jetzt sehen wir das Innere: Unter dem Vulkan liegt die <b>Magmakammer</b>, die durch ein langes Rohr, den <b>Schlot</b>, mit dem Krater verbunden ist.</p>' },
      { icon: '🔥', title: 'Die Magmakammer', explode: 1, focus: ['camera', 'crosta', 'magma', 'cono', 'strati'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.3,
        html: '<p>In einigen Kilometern Tiefe sammelt sich das <b>Magma</b>: geschmolzenes Gestein bei mehr als 1000 °C, voller Gase. Weil es leichter ist als das umgebende Gestein, will das Magma <b>aufsteigen</b>.</p><p class="tip">🥤 Das Gas im Magma ist wie das Kohlendioxid in einer Limoflasche: Wenn du sie plötzlich öffnest … spritzt es heraus!</p>' },
      { icon: '⬆️', title: 'Das Magma steigt auf', explode: 1, focus: ['camino', 'magma', 'camera', 'condotto', 'cono', 'strati', 'crosta'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>Wenn der Gasdruck zu hoch ist, steigt das Magma im <b>Schlot</b> auf. Manchmal findet es auch einen seitlichen Weg und öffnet einen <b>Schlot an der Flanke</b>.</p>' },
      { icon: '💥', title: 'Der Ausbruch', explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Das Magma tritt aus dem Krater aus und wird zu <b>Lava</b>. Bei explosiven Ausbrüchen fliegt es in Fetzen durch die Luft (<b>Lapilli</b> und <b>Bomben</b>), und eine große <b>Asche- und Gaswolke</b> steigt auf.</p>' },
      { icon: '🟠', title: 'Die Lavaströme', explode: 0, view: { rx: 0.35, ry: 0.15 },
        html: '<p>Die Lava fließt wie ein langsamer, glühender Fluss die Flanken hinab. Beim Abkühlen wird sie zu dunklem <b>Gestein</b>: Der Vulkan baut sich selbst auf!</p>' },
      { icon: '🍰', title: 'Schicht auf Schicht', explode: 1, focus: ['strati', 'cono', 'crosta'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.2,
        html: '<p>Jeder Ausbruch fügt eine Schicht hinzu: Lava (dunkel) und Asche (hell) wechseln sich ab wie in einer Schichttorte. Deshalb heißen der Ätna und der Vesuv <b>Schichtvulkane</b>.</p><p class="tip">🇮🇹 In Italien liegen die aktiven Vulkane dort, wo sich die Afrikanische Platte unter die Eurasische schiebt.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'Der Ätna, Europas Riese', html: 'Der <b>Ätna</b> auf Sizilien ist der höchste aktive Vulkan Europas (etwa 3400 m) und bricht sehr oft aus.' },
      { icon: '🏛️', title: 'Pompeji', html: 'Im Jahr <b>79 n. Chr.</b> begrub der Vesuv Pompeji und Herculaneum unter meterhoher Asche. Die Ausgrabungen zeigen uns, wie das Leben der alten Römer aussah.' },
      { icon: '🗼', title: 'Der Leuchtturm des Mittelmeers', html: 'Der <b>Stromboli</b> speit seit Tausenden von Jahren alle 10–20 Minuten kleine Lavafontänen aus: Die Seeleute nutzten ihn als Leuchtfeuer.' },
      { icon: '🌊', title: 'Unterseevulkane', html: 'Die meisten Vulkane der Erde liegen <b>unter dem Meer</b>. Der größte Unterseevulkan Europas, der Marsili, liegt im Tyrrhenischen Meer.' },
      { icon: '🪐', title: 'Vulkane auf anderen Welten', html: 'Der höchste Vulkan des Sonnensystems ist der <b>Olympus Mons</b> auf dem Mars: Er ist etwa 22 km hoch, fast dreimal so hoch wie der Everest.' }
    ],
    quiz: [
      { type: 'mc', q: 'Wie heißt das geschmolzene Gestein unter dem Vulkan?', options: ['Lava', 'Magma', 'Asche', 'Basalt'], answer: 1, explain: 'Unter der Erde heißt es Magma; wenn es an der Oberfläche austritt, wird es zu Lava.' },
      { type: 'mc', q: 'Wie heißt das „Rohr“, durch das das Magma bis zum Krater aufsteigt?', options: ['Schlot', 'Kammer', 'Flanke', 'Lapilli'], answer: 0, explain: 'Der Schlot verbindet die Magmakammer mit dem Krater.' },
      { type: 'tf', q: 'Das Magma steigt auf, weil es leichter ist als das umgebende Gestein und von den Gasen getrieben wird.', answer: true, explain: 'Es hat eine geringere Dichte, und die gelösten Gase erhöhen den Druck.' },
      { type: 'mc', q: 'Welcher Vulkan begrub im Jahr 79 n. Chr. Pompeji?', options: ['Der Ätna', 'Der Stromboli', 'Der Vesuv', 'Vulcano'], answer: 2, explain: 'Der Vesuv, nahe bei Neapel.' },
      { type: 'order', q: 'Bringe die Reise des Magmas in die richtige Reihenfolge', items: ['Magmakammer', 'Schlot', 'Krater', 'Lavastrom'], explain: 'Aus der Kammer steigt es im Schlot auf, tritt aus dem Krater aus und fließt als Lavastrom hinab.' },
      { type: 'mc', q: 'Warum heißen der Ätna und der Vesuv „Schichtvulkane“?', options: ['Weil sie in der Stratosphäre liegen', 'Weil sie aus abwechselnden Schichten von Lava und Asche bestehen', 'Weil sie flach sind', 'Weil sie unter dem Meer liegen'], answer: 1, explain: 'Jeder Ausbruch fügt eine Schicht aus Lava oder Asche hinzu.' }
    ]
  });
})();
