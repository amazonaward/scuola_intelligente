/* Il lago (di origine glaciale, in una valle tra le montagne), tagliato davanti (piano z = 0) per vedere la conca e l'acqua.
   x = da sinistra a destra, z negativo = verso il fondo della valle, y = alto; il pelo dell'acqua è a y = 0. */
(function () {
  const L = 3.6;                                   // lunghezza della valle (z da -L a 0)
  const LEFT = [[-1.85, 0], [-1.7, -0.4], [-1.4, -0.9], [-0.9, -1.35], [-0.3, -1.45]];
  const RIGHT = [[1.9, 0], [1.5, -0.35], [1.0, -0.9], [0.4, -1.3], [-0.3, -1.45]];
  const TERRAIN = [[-4.5, -2.2], [4.5, -2.2], [4.5, 0.06], [2.4, 0.06]].concat(RIGHT, LEFT.slice(0, -1).reverse(), [[-2.1, 0.6], [-2.6, 1.6], [-3.1, 2.3], [-3.4, 2.45], [-3.8, 2.1], [-4.5, 1.3]]);
  const xAt = (br, y) => { for (let i = 0; i < br.length - 1; i++) { const a = br[i], b = br[i + 1]; if (y <= a[1] && y >= b[1]) return a[0] + (b[0] - a[0]) * (a[1] - y) / ((a[1] - b[1]) || 1); } return br[br.length - 1][0]; };
  /* fascia d'acqua tra due profondità (per gli strati sul taglio) */
  const slab = (y0, y1, inset) => {
    const ys = []; for (let i = 0; i <= 8; i++) ys.push(y0 + (y1 - y0) * i / 8);
    return ys.map((y) => [xAt(RIGHT, y) - inset, y]).concat(ys.slice().reverse().map((y) => [xAt(LEFT, y) + inset, y]));
  };
  const WATER = slab(-0.02, -1.43, 0.03);
  const BOTTOM = RIGHT.concat(LEFT.slice(0, -1).reverse());
  const SED = BOTTOM.map(([x, y]) => [x, y + 0.08]).reverse().concat(BOTTOM.map(([x, y]) => [x, y + 0.01]));
  const prism = (pts, d, z, color, extra) => Object.assign({ t: 'extrude', pts, d, pos: [0, 0, z], color }, extra || {});
  /* pesce: corpo + coda + occhio; nuota in cerchio (spin intorno a y) */
  const fish = (c, r, col, rate, ph, s) => ({ t: 'group', pos: c, anim: { type: 'spin', axis: 'y', rate, phase: ph }, shapes: [ { t: 'group', pos: [r, 0, 0], scale: s, shapes: [
    { t: 'sphere', r: 0.12, n: 10, m: 14, scale: [0.6, 0.75, 1.7], color: col },
    { t: 'extrude', pts: [[0, 0], [0.13, 0.1], [0.13, -0.1]], d: 0.02, rot: [0, 90, 0], pos: [0, 0, 0.19], color: col, anim: { type: 'swing', axis: 'y', amp: 20, rate: 6 } },
    { t: 'sphere', r: 0.018, n: 6, pos: [0.06, 0.03, -0.12], color: '#111827' }, { t: 'sphere', r: 0.018, n: 6, pos: [-0.06, 0.03, -0.12], color: '#111827' } ] } ] });
  const flowDots = (pts, n, rate, col, r) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: r || 0.045, n: 6, m: 8, pos: pts[0], color: col, anim: { type: 'path', pts, wave: 'saw', rate, phase: k / n } }));
  const INFLOW = [[0.35, 2.55, -4.62], [0.3, 1.9, -4.28], [0.15, 1.1, -3.85], [0.05, 0.4, -3.42], [0, 0.02, -3.15]];
  const OUTFLOW = [[2.05, 0.03, -1.8], [2.6, 0.08, -1.6], [3.3, 0.08, -1.9], [3.9, 0.08, -1.7], [4.5, 0.08, -1.8]];
  const reeds = [];
  [[2.0, 0.06, -0.5], [2.15, 0.06, -0.9], [1.95, 0.06, -1.2], [2.25, 0.06, -0.3], [1.8, -0.15, -0.7], [1.75, -0.12, -1.05], [2.1, 0.06, -2.6], [1.9, 0.0, -2.9], [-1.95, 0.15, -2.2], [-1.98, 0.2, -1.5], [-1.9, 0.08, -2.7]].forEach((p, i) => {
    const h = 0.55 + (i % 3) * 0.12;
    reeds.push({ t: 'group', pos: p, anim: { type: 'swing', axis: 'z', amp: 4, rate: 0.8, phase: i * 0.13, pivot: [0, 0, 0] }, shapes: [
      { t: 'cyl', r: 0.012, h, n: 6, pos: [0, h / 2, 0], color: '#65a30d' }, { t: 'cyl', r: 0.03, h: 0.12, n: 8, pos: [0, h - 0.04, 0], color: '#78350f' },
      { t: 'box', s: [0.015, 0.35, 0.05], pos: [0.04, 0.2, 0], rot: [0, 0, -12], color: '#84cc16' } ] });
  });

  LIBRARY({
    id: 'lago',
    lang: 'de',
    title: 'Der See',
    intro: 'Ein See ist eine große Masse <b>Süßwasser</b>, die still in einer Mulde im Boden liegt. Er bekommt Wasser von Flüssen, Regen und Schmelzwasser und gibt es durch einen anderen Fluss und durch Verdunstung wieder ab. In Italien sind die größten Seen, wie der <b>Gardasee</b> und der <b>Comer See</b>, aus Gletschern entstanden.',
    model: {
      rx: 0.38, ry: -0.5, speed: 0.4, height: 480, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'valle', name: 'Tal und Berge', label: 'Berge', color: '#4d7c0f', explode: [0, -0.5, -0.4],
          info: '<p>Der See liegt am Ende eines <b>Tals</b> zwischen den Bergen. Die Mulde, die das Wasser enthält, heißt <b>Becken</b>: Sie ist wie eine große Schüssel aus Fels.</p>',
          more: '<p>Im Schnitt sieht man, dass unter der Wiese <b>Fels</b> liegt: Undurchlässiges Gestein lässt das Wasser nicht nach unten versickern, deshalb läuft der See nicht leer.</p>',
          shapes: [ prism(TERRAIN, L, -L / 2, '#4d7c0f'),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -0.25], [2.2, -0.25]].concat(RIGHT.map(([x, y]) => [x + 0.15, y - 0.2]), LEFT.slice(0, -1).reverse().map(([x, y]) => [x - 0.15, y - 0.2]), [[-2.2, 0.35], [-2.7, 1.35], [-3.2, 2.05], [-3.45, 2.15], [-3.85, 1.85], [-4.5, 1.1]]), 0.02, 0.012, '#78716c', { decal: 1 }),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -1.75], [-4.5, -1.75]], 0.02, 0.016, '#57534e', { decal: 2 }) ] },
        { id: 'vetta', name: 'Schneebedeckter Berg', label: 'Schneeberg', color: '#a8a29e', explode: [0, 0.6, -1.2],
          info: '<p>Am Ende des Tals steht ein Berg mit schneebedecktem Gipfel. Vor Tausenden von Jahren, während der <b>Eiszeiten</b>, floss ein riesiger Gletscher das Tal hinab und grub den Fels aus wie ein Bagger.</p>',
          more: '<p>Als das Klima wärmer wurde (vor etwa 15 000 Jahren), zog sich der Gletscher zurück: In der ausgegrabenen Mulde, die talabwärts von Geröll (den <b>Moränen</b>) abgeschlossen wurde, sammelte sich das Wasser. So entstanden der Lago Maggiore, der Comer See, der Iseosee und der Gardasee.</p>',
          shapes: [ { t: 'lathe', n: 30, pos: [0, 0, -5.6], scale: [1.4, 1, 0.75], pts: [[0, -2.2], [3.2, -2.2], [3.0, 0.1], [2.2, 1.1], [1.3, 2.3], [0.6, 3.2], [0.15, 3.6], [0, 3.65]] },
            { t: 'lathe', n: 30, pos: [0, 0.02, -5.6], scale: [1.42, 1, 0.77], pts: [[1.05, 2.6], [0.6, 3.2], [0.15, 3.6], [0, 3.66], [0, 2.6]], color: '#f8fafc' } ] },
        { id: 'immissario', name: 'Zufluss (Fluss, der hineinfließt)', label: 'Zufluss', color: '#38bdf8', explode: [0, 0.3, -1.0],
          info: '<p>Der Fluss, der dem See <b>Wasser bringt</b>, heißt <b>Zufluss</b>. Er entsteht aus Schnee und Gletscher, die schmelzen, und stürzt schnell den Berg hinab.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: INFLOW, color: '#38bdf8' } ].concat(flowDots(INFLOW, 8, 0.8, '#e0f2fe')) },
        { id: 'acqua', name: 'Seewasser', label: 'Wasser', color: '#38bdf8', alpha: 0.42, explode: [0, 0.6, 0.6],
          info: '<p>Das Wasser des Sees ist <b>Süßwasser</b>: Es enthält sehr wenig Salz, anders als das Meer. Das der großen Seen ist so sauber, dass es oft zu Trinkwasser wird.</p>',
          more: '<p>Der Gardasee enthält etwa <b>50 Milliarden Kubikmeter</b> Wasser und ist an manchen Stellen 346 m tief: Der Grund liegt unter dem Meeresspiegel! Ein großer See „mildert“ das Klima: Im Winter gibt er die im Sommer gespeicherte Wärme wieder ab, deshalb wachsen an seinen Ufern Zitronen und Olivenbäume.</p>',
          shapes: [ prism(WATER, L - 0.05, -L / 2, '#38bdf8'),
            { t: 'box', s: [3.7, 0.01, L - 0.05], pos: [0.02, -0.005, -L / 2], color: '#7dd3fc', alpha: 0.35, anim: { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.5 } } ] },
        { id: 'strati', name: 'Wasserschichten (warm und kalt)', label: 'Wasserschichten', color: '#0369a1', explode: [0, 0.2, 1.0],
          info: '<p>Im Sommer ist der See in <b>Schichten</b> gegliedert: Oben ist das Wasser lauwarm und voller Licht, unten ist es <b>kalt und dunkel</b> (etwa 4–6 °C), auch wenn es draußen heiß ist.</p>',
          more: '<p>Die warme Schicht oben heißt <b>Epilimnion</b>, die kalte am Grund <b>Hypolimnion</b>; dazwischen liegt die <b>Sprungschicht</b>, in der die Temperatur plötzlich abfällt. Wasser ist bei 4 °C am schwersten: Deshalb schwimmt im Winter das Eis oben und darunter überleben die Fische.</p>',
          shapes: [ prism(slab(-0.03, -0.42, 0.05), 0.02, 0.02, '#7dd3fc', { decal: 1 }), prism(slab(-0.42, -0.62, 0.05), 0.02, 0.02, '#38bdf8', { decal: 1 }), prism(slab(-0.62, -1.36, 0.05), 0.02, 0.02, '#1e40af', { decal: 1 }) ] },
        { id: 'sedimenti', name: 'Seegrund und Ablagerungen', label: 'Ablagerungen', color: '#78350f', explode: [0, -0.3, 0.6],
          info: '<p>Auf dem Grund setzt sich nach und nach der <b>Schlamm</b> ab: Sand und Erde, die von den Flüssen mitgebracht werden, Blätter, Reste von Pflanzen und Tieren. Schicht für Schicht füllt sich der See.</p>',
          more: '<p>Indem Wissenschaftler die Schlammschichten untersuchen (wie die Jahresringe von Bäumen), rekonstruieren sie das Klima vor Tausenden von Jahren. In sehr langer Zeit kann aus einem See ein <b>Sumpf</b> und dann eine Wiese werden.</p>',
          shapes: [ prism(SED, L - 0.1, -L / 2, '#92400e') ] },
        { id: 'emissario', name: 'Abfluss (Fluss, der hinausfließt)', label: 'Abfluss', color: '#0ea5e9', explode: [0.8, 0, 0],
          info: '<p>Der Fluss, der aus dem See <b>hinausfließt</b>, ist der <b>Abfluss</b>. Zum Beispiel fließt der Ticino aus dem Lago Maggiore und der Mincio aus dem Gardasee.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: OUTFLOW, color: '#0ea5e9' } ].concat(flowDots(OUTFLOW, 7, 0.6, '#e0f2fe')) },
        { id: 'canneto', name: 'Schilf', color: '#65a30d', explode: [0.4, 0.3, 0.3],
          info: '<p>Entlang der Ufer wachsen <b>Schilf</b> und Rohrkolben. Das Schilf ist die „Kinderstube“ des Sees: Dort bauen Vögel ihre Nester und Fische legen ihre Eier ab. Die Wurzeln filtern und reinigen das Wasser.</p>',
          shapes: reeds },
        { id: 'ninfee', name: 'Seerosen', color: '#16a34a', explode: [0, 0.5, 0.2],
          info: '<p>Die <b>Seerosen</b> haben ihre Wurzeln im Schlamm und runde, schwimmende Blätter. Sie spenden dem Wasser Schatten und bieten den Tieren Schutz.</p>',
          shapes: [[1.35, -0.6], [1.15, -1.0], [1.5, -1.3], [1.05, -0.35], [-1.55, -2.0], [-1.45, -2.5]].map(([x, z], i) => ({ t: 'group', pos: [x, 0.012, z], anim: { type: 'swing', axis: 'y', amp: 8, rate: 0.3, phase: i * 0.2 }, shapes: [
            { t: 'cyl', r: 0.13, h: 0.015, n: 16, color: '#16a34a' }, { t: 'box', s: [0.12, 0.02, 0.025], pos: [0.07, 0.003, 0], color: '#38bdf8' }
          ].concat(i % 2 ? [] : [ { t: 'cone', r: 0.06, h: 0.07, n: 8, pos: [0.02, 0.04, 0.03], color: '#f9a8d4' }, { t: 'sphere', r: 0.02, n: 6, pos: [0.02, 0.05, 0.03], color: '#fde047' } ]) })) },
        { id: 'pesci', name: 'Fische', color: '#a3a3a3', explode: [0, 0.2, 0.8],
          info: '<p>In Seen leben Forellen, Barsche, Hechte, Karpfen, Aale … Manche bleiben nahe am Ufer zwischen den Pflanzen, andere schwimmen draußen auf dem See oder im kalten, tiefen Wasser.</p>',
          more: '<p>Fische atmen den im Wasser <b>gelösten Sauerstoff</b> mit den Kiemen. Kaltes Wasser enthält mehr davon: Deshalb lieben Forellen Bergseen.</p>',
          shapes: [ fish([0.1, -0.35, -1.2], 0.5, '#9ca3af', 0.35, 0, 1), fish([-0.5, -0.9, -2.3], 0.4, '#a16207', -0.3, 0.4, 1.2), fish([0.4, -0.7, -0.5], 0.3, '#64748b', 0.45, 0.2, 0.9) ] },
        { id: 'plancton', name: 'Plankton und Algen', label: 'Plankton', color: '#86efac', explode: [0, 0.3, 0.9], chip: true,
          info: '<p>Im Wasser schweben winzig kleine Lebewesen, das <b>Plankton</b>: mikroskopisch kleine Algen und winzige Tierchen. Sie sind das erste Glied der <b>Nahrungskette</b> des Sees.</p>',
          shapes: Array.from({ length: 22 }, (_, i) => ({ t: 'sphere', r: 0.025, n: 4, m: 6, pos: [-1.3 + (i * 0.37) % 2.6, -0.05 - (i * 0.13) % 0.35, -0.2 - (i * 0.71) % 3.2], color: i % 3 ? '#86efac' : '#fef08a',
            anim: { type: 'move', dir: [0.3, 1, 0.2], amp: 0.06, rate: 0.7, phase: i * 0.09 } })) },
        { id: 'anatra', name: 'Stockente', label: 'Ente', color: '#78350f', pos: [0.6, 0.05, -2.2], explode: [0, 0.5, 0],
          anim: [ { type: 'move', dir: [1, 0, 0.3], amp: 0.5, rate: 0.12 }, { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.2 } ],
          info: '<p>Die <b>Stockente</b> ist die häufigste Ente der Seen: Das Männchen hat einen leuchtend grünen Kopf. Ihre Federn sind wasserdicht, dank eines Öls, das die Ente mit dem Schnabel verteilt.</p>',
          shapes: [ { t: 'sphere', r: 0.14, n: 10, m: 14, scale: [1.6, 0.8, 1], color: '#a16207' }, { t: 'sphere', r: 0.08, n: 10, m: 12, pos: [0.2, 0.15, 0], color: '#15803d' },
            { t: 'cone', r: 0.03, h: 0.1, n: 8, rot: [0, 0, -90], pos: [0.3, 0.14, 0], color: '#facc15' }, { t: 'box', s: [0.14, 0.06, 0.02], pos: [-0.05, 0.05, 0.13], color: '#1d4ed8', decal: 1 },
            { t: 'cone', r: 0.06, h: 0.12, n: 8, rot: [0, 0, 70], pos: [-0.24, 0.06, 0], color: '#f8fafc' } ] },
        { id: 'ciclo', name: 'Verdunstung, Wolken und Regen', label: 'Wasserkreislauf', color: '#f8fafc', explode: [0, 1.2, 0],
          info: '<p>Die Sonne erwärmt den See: Ein wenig Wasser <b>verdunstet</b> und steigt als unsichtbarer Dampf auf. Oben kühlt es ab und bildet <b>Wolken</b>; dann kommt es als <b>Regen</b> oder Schnee auf die Berge zurück und über die Flüsse wieder in den See.</p>',
          more: '<p>Das ist der <b>Wasserkreislauf</b>: Das Wasser der Erde ist seit Milliarden von Jahren dasselbe und zirkuliert immer weiter zwischen Meeren, Seen, Luft, Gletschern und Untergrund.</p>',
          shapes: [ [-2.2, 3.3, -2.6, 0.55], [-1.5, 3.45, -2.4, 0.65], [-0.8, 3.3, -2.7, 0.5], [-1.6, 3.2, -3.1, 0.5] ].map(([x, y, z, r]) => ({ t: 'sphere', r, n: 10, m: 16, pos: [x, y, z], scale: [1.3, 0.75, 1], color: '#f8fafc', anim: { type: 'move', dir: [1, 0, 0], amp: 0.12, rate: 0.2 } }))
            .concat(Array.from({ length: 10 }, (_, k) => { const x = -1.0 + (k * 0.53) % 2.4, z = -0.6 - (k * 0.77) % 2.6; return { t: 'sphere', r: 0.04, n: 6, m: 8, pos: [x, 0.05, z], color: '#e0f2fe',
              anim: [ { type: 'path', pts: [[x, 0.05, z], [x - 0.4, 1.5, z - 0.6], [-1.5, 2.9, -2.6]], wave: 'saw', rate: 0.3, phase: k / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.3, phase: k / 10 } ] }; }))
            .concat(Array.from({ length: 12 }, (_, k) => { const x = -3.4 + (k * 0.41) % 1.6, z = -1.6 - (k * 0.63) % 2.0; return { t: 'cyl', r: 0.012, h: 0.14, n: 4, pos: [x, 2.9, z], color: '#60a5fa',
              anim: { type: 'path', pts: [[x, 2.9, z], [x, 2.2, z]], wave: 'saw', rate: 1.2, phase: k / 12 } }; })) }
      ]
    },
    steps: [
      { icon: '🏞️', title: 'Eine Mulde voller Wasser', explode: 0,
        html: '<p>Ein See entsteht dort, wo sich Wasser in einer <b>Mulde</b> im Boden sammelt, dem sogenannten <b>Becken</b>, und nicht abfließen kann, weil der Grund aus undurchlässigem Fels besteht.</p><p class="tip">✂️ Wir haben das Tal vorne aufgeschnitten: So siehst du, wie tief der See ist.</p>' },
      { icon: '🧊', title: 'Von einem Gletscher geschaffen', focus: ['vetta', 'valle', 'acqua'], view: { rx: 0.3, ry: -0.2 },
        html: '<p>Viele italienische Seen sind <b>glazialen Ursprungs</b>: Während der Eiszeiten flossen riesige Gletscher die Täler hinab und höhlten sie aus. Als das Eis schmolz, füllte sich die Mulde mit Wasser.</p><p class="tip">🗺️ Es gibt auch Vulkanseen (in Kratern, wie der Bolsenasee), Bergsturzseen und künstliche Seen, die durch Staumauern entstehen.</p>' },
      { icon: '➡️', title: 'Wasser fließt hinein, Wasser fließt hinaus', focus: ['immissario', 'emissario', 'acqua', 'vetta'], view: { rx: 0.6, ry: -0.3 },
        html: '<p>Der <b>Zufluss</b> bringt dem See das Wasser von Schnee und Gletscher. Der <b>Abfluss</b> trägt es fort. Wenn gleich viel Wasser hinein- und hinausfließt, bleibt der Wasserstand des Sees (fast) gleich.</p>' },
      { icon: '🌡️', title: 'Oben warm, unten kalt', focus: ['strati', 'acqua', 'sedimenti'], view: { rx: 0.08, ry: -0.05 }, zoom: 1.4,
        html: '<p>Im Sommer erwärmt die Sonne nur den oberen Teil des Sees. Darunter bleibt das Wasser <b>kalt und dunkel</b>, etwa 4–6 °C. Auf dem Grund setzt sich langsam der Schlamm ab: die <b>Ablagerungen</b>.</p>' },
      { icon: '🐟', title: 'Wer im See lebt', focus: ['pesci', 'canneto', 'ninfee', 'plancton', 'anatra', 'acqua'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.3,
        html: '<p>Der See ist ein <b>Ökosystem</b>: Das <b>Plankton</b> ernährt die kleinen Fische, die wiederum die größeren Fische und die Vögel ernähren. Im <b>Schilf</b> am Ufer wachsen Fische und Enten heran; die <b>Seerosen</b> schwimmen mit ihren Blättern auf dem Wasser.</p>' },
      { icon: '☁️', title: 'Der Wasserkreislauf', focus: ['ciclo', 'acqua', 'vetta', 'immissario'], view: { rx: 0.25, ry: -0.6 },
        html: '<p>Die Sonne lässt ein wenig Wasser aus dem See <b>verdunsten</b>. Der Dampf steigt auf, bildet <b>Wolken</b> und fällt als <b>Regen</b> oder Schnee auf die Berge zurück. Die Flüsse bringen es in den See zurück: ein endloser Kreislauf!</p>' },
      { icon: '♻️', title: 'Den See schützen', explode: 0,
        html: '<p>Ein See wird leicht verschmutzt: Das Wasser erneuert sich nur langsam (im Gardasee dauert es fast <b>30 Jahre</b>). Abwässer, Dünger und Plastik bleiben lange. Deshalb braucht es Kläranlagen, natürliche Ufer und viel Aufmerksamkeit von allen.</p>' }
    ],
    facts: [
      { icon: '🥇', title: 'Der größte Italiens', html: 'Der <b>Gardasee</b> ist der größte See Italiens (370 km²). Der tiefste ist der <b>Comer See</b>, der etwa 410 Meter tief ist.' },
      { icon: '🌍', title: 'Der tiefste See der Welt', html: 'Der <b>Baikalsee</b> in Sibirien ist mehr als 1600 Meter tief und enthält allein etwa ein Fünftel des Süßwassers aller Seen der Erde.' },
      { icon: '🧂', title: 'Salzseen', html: 'Manche Seen haben keinen Abfluss: Das Wasser verdunstet und das Salz sammelt sich an. Im <b>Toten Meer</b> ist das Wasser so salzig, dass man mühelos oben schwimmt!' },
      { icon: '🌋', title: 'Seen in Vulkanen', html: 'Der <b>Bolsenasee</b>, der <b>Braccianosee</b> und der Albanersee in Latium füllen alte Vulkankrater: Deshalb sind sie fast rund.' },
      { icon: '🧊', title: 'Eis schwimmt oben', html: 'Wenn ein See zufriert, bleibt das Eis an der Oberfläche und wirkt wie eine Decke: Darunter gefriert das Wasser bei 4 °C nicht und die Fische überwintern.' }
    ],
    quiz: [
      { type: 'mc', q: 'Wie heißt der Fluss, der einem See Wasser bringt?', options: ['Abfluss', 'Zufluss', 'Nebenfluss des Meeres', 'Salziger Bach'], answer: 1, explain: 'Der Zufluss fließt in den See hinein, der Abfluss hinaus.' },
      { type: 'mc', q: 'Wie sind die großen Seen Norditaliens (Gardasee, Comer See, Lago Maggiore) entstanden?', options: ['Durch Vulkane', 'Durch alte Gletscher, die die Täler ausgehöhlt haben', 'Durch Meteoriten', 'Durch Staumauern, die die Römer gebaut haben'], answer: 1, explain: 'Es sind Seen glazialen Ursprungs: Die Gletscher haben die Mulden ausgehöhlt.' },
      { type: 'tf', q: 'Das Wasser der Seen ist meist süß, also sehr salzarm.', answer: true, explain: 'Seen mit Abfluss erneuern ihr Wasser und bleiben süß.' },
      { type: 'mc', q: 'Wo ist das Wasser eines tiefen Sees im Sommer am kältesten?', options: ['An der Oberfläche', 'Nahe am Ufer', 'Am Grund', 'Es ist überall gleich'], answer: 2, explain: 'Die Sonne erwärmt nur die obere Schicht: Am Grund bleibt das Wasser bei etwa 4–6 °C.' },
      { type: 'order', q: 'Bringe die Reise des Wassers in die richtige Reihenfolge', items: ['Der See verdunstet', 'Wolken bilden sich', 'Es regnet oder schneit auf den Bergen', 'Der Zufluss bringt das Wasser zurück in den See'], explain: 'Das ist der Wasserkreislauf.' },
      { type: 'text', q: 'Welcher ist der größte See Italiens?', answer: ['garda', 'gardasee', 'der gardasee', 'lago di garda'], explain: 'Der Gardasee, zwischen Lombardei, Venetien und Trentino.' }
    ]
  });
})();
