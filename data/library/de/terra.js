/* La Terra "tagliata a metà": la metà davanti (Europa e Africa, longitudine 0 verso +z) si sposta con Esplodi;
   sulla faccia del taglio si vedono crosta, mantello e nucleo. Tutto è inclinato di 23,5° come l'asse terrestre. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const ll = (lat, lon, r) => [r * Math.cos(lat * D) * Math.sin(lon * D), r * Math.sin(lat * D), r * Math.cos(lat * D) * Math.cos(lon * D)];
  /* contorni molto semplificati dei continenti [lat, lon] */
  const LAND = {
    africa: [[37, -10], [37, 10], [32, 32], [12, 44], [11, 51], [-2, 41], [-15, 40], [-26, 33], [-35, 20], [-30, 15], [-17, 12], [-5, 9], [4, 7], [5, -5], [5, -10], [10, -15], [15, -17], [21, -17], [28, -13], [35, -6]],
    europa: [[36, -9], [43, -9], [44, -1], [48, -5], [51, 2], [54, 8], [57, 8], [59, 5], [62, 5], [70, 20], [71, 30], [68, 40], [60, 60], [45, 50], [42, 42], [41, 29], [37, 27], [38, 23], [40, 19], [45, 13], [42, 15], [38, 16], [40, 9], [43, 5], [43, 3], [41, 1], [37, -2]],
    asia: [[41, 29], [42, 42], [45, 50], [60, 60], [70, 70], [77, 105], [72, 130], [70, 160], [65, 180], [60, 165], [53, 157], [45, 142], [40, 130], [35, 129], [30, 122], [22, 114], [20, 106], [10, 107], [1, 104], [8, 98], [16, 97], [22, 90], [20, 86], [8, 77], [20, 72], [25, 66], [25, 57], [13, 45], [30, 48], [30, 35], [36, 36]],
    nordamerica: [[70, -160], [71, -155], [70, -140], [69, -115], [72, -95], [64, -85], [60, -94], [55, -82], [52, -79], [60, -64], [53, -56], [47, -53], [44, -66], [41, -70], [35, -76], [31, -81], [25, -80], [30, -84], [29, -95], [22, -97], [19, -96], [21, -87], [15, -88], [9, -79], [8, -83], [15, -93], [20, -105], [23, -110], [32, -117], [40, -124], [48, -125], [58, -136], [60, -147], [57, -157], [60, -163], [66, -165]],
    groenlandia: [[60, -44], [66, -36], [70, -22], [78, -18], [83, -30], [82, -60], [77, -72], [70, -54], [65, -52]],
    sudamerica: [[12, -72], [11, -63], [5, -52], [0, -50], [-5, -35], [-13, -38], [-23, -42], [-34, -53], [-40, -62], [-52, -68], [-55, -68], [-50, -75], [-40, -73], [-30, -71], [-18, -70], [-5, -81], [1, -80], [8, -77]],
    australia: [[-11, 131], [-12, 137], [-17, 141], [-11, 143], [-25, 153], [-38, 149], [-39, 146], [-35, 138], [-32, 133], [-35, 117], [-22, 114], [-14, 127]],
    madagascar: [[-12, 49], [-25, 47], [-25, 44], [-16, 44]], uk: [[50, -5], [51, 1], [53, 0], [58, -3], [58, -6], [55, -5], [53, -4]], giappone: [[31, 130], [35, 140], [41, 141], [45, 142], [40, 139], [34, 131]]
  };
  const inPoly = (p, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  const isLand = (lat, lon) => lat < -70 || Object.keys(LAND).some((k) => inPoly([lat, lon], LAND[k].map(([a, o]) => [a, o])));
  const landColor = (lat, lon) => Math.abs(lat) > 62 && (lon < -15 && lon > -75 || lat < -60) ? '#f1f5f9' : (lat > 14 && lat < 32 && lon > -15 && lon < 55) || (lat < -18 && lat > -32 && lon > 118 && lon < 145) ? '#ca8a04' : (Math.abs(lat) > 55 ? '#3f6212' : '#4d7c0f');
  /* "tessere" di terra: dischetti appoggiati sulla superficie, su una griglia di 6° (front = longitudine tra -90 e 90) */
  const tiles = (front) => {
    const s = [];
    for (let lat = -84; lat <= 84; lat += 6) {
      const step = 6 / Math.max(0.25, Math.cos(lat * D));
      for (let lon = -180; lon < 180; lon += step) {
        const isFront = Math.abs(lon) < 90; if (isFront !== front || !isLand(lat, lon)) continue;
        s.push({ t: 'group', rot: [0, lon, 0], shapes: [ { t: 'group', rot: [-lat, 0, 0], shapes: [ { t: 'cyl', r: 0.17, h: 0.02, n: 8, rot: [90, 0, 0], pos: [0, 0, R + 0.005], color: landColor(lat, lon), decal: 1 } ] } ] });
      }
    }
    return s;
  };
  const surfPipe = (pts, r, color) => ({ t: 'pipe', r, n: 6, curve: true, pts: pts.map(([a, o]) => ll(a, o, R + 0.03)), color });
  const T = (shapes) => [ { t: 'group', rot: [0, 0, -23.5], shapes } ];           // inclinazione dell'asse
  const hemi = (r, color, dz, front) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [front ? 90 : -90, 0, 0], pos: [0, 0, dz], color });
  /* celle che girano sulla faccia del taglio (convezione) */
  const loops = (rc, rr, n, col, col2, rate) => {
    const s = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 360 * D + 0.2, c = [rc * Math.cos(a), rc * Math.sin(a)], dir = i % 2 ? 1 : -1;
      const pts = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.09]; });
      s.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.07], color: col2 });
      for (let k = 0; k < 2; k++) s.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: col, anim: { type: 'path', pts, wave: 'saw', rate, phase: k / 2 } });
    }
    return s;
  };
  /* linee del campo magnetico (dipolo): r = L·cos²(lat) */
  const field = [];
  [2.6, 3.2].forEach((Lr) => [0, 60, 120, 180, 240, 300].forEach((lon) => {
    const pts = []; for (let lat = -70; lat <= 70; lat += 5) { const r = Lr * Math.cos(lat * D) ** 2; if (r > R + 0.08) pts.push(ll(lat, lon, r)); }
    if (pts.length > 2) { field.push({ t: 'pipe', r: 0.014, n: 5, curve: true, pts, color: '#a78bfa' }); field.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#ddd6fe', anim: { type: 'path', pts, wave: 'saw', rate: 0.3, phase: lon / 360 } }); }
  }));
  const clouds = [[50, -30, 1.4], [10, -20, 1.0], [-40, 0, 1.6], [55, 20, 1.0], [5, 60, 1.2], [-50, 60, 1.3], [-10, -60, 1.1], [30, -50, 0.9], [62, -5, 0.8]];

  LIBRARY({
    lang: 'de',
    id: 'terra',
    title: 'Die Erde',
    intro: 'Die Erde ist unser Planet: eine Kugel aus Gestein und Metall mit einem Durchmesser von fast <b>13 000 km</b>, mit Ozeanen, Kontinenten und einer dünnen Decke aus Luft. Innen besteht sie aus <b>Schichten</b>, wie ein Pfirsich: Schale, Fruchtfleisch und Kern. Machen wir sie auf!',
    model: {
      rx: 0.22, ry: -0.42, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'superficie', name: 'Oberfläche: Ozeane und Kontinente', label: 'Kontinente und Ozeane', color: '#1d4ed8', explode: [4.6, 0.3, -2.6],
          info: '<p>Von außen ist die Erde <b>blau</b>: Die Ozeane bedecken etwa <b>71 %</b> der Oberfläche. Der Rest sind die Kontinente. Hier vorne siehst du Europa (mit Italien!) und Afrika.</p>',
          more: '<p>Die Ozeane sind im Durchschnitt 3700 m tief; die tiefste Stelle, der Marianengraben, reicht fast 11 000 m hinab. Der höchste Berg, der Mount Everest, ist 8849 m hoch.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, true) ].concat(tiles(true))) },
        { id: 'nuvole', name: 'Wolken', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>Wolken sind winzige Wassertröpfchen und Eiskristalle, die in der Luft schweben. Zu jeder Zeit bedecken sie etwa zwei Drittel des Planeten.</p>',
          shapes: T(clouds.map(([a, o, s], i) => ({ t: 'group', rot: [0, o, 0], shapes: [ { t: 'group', rot: [-a, 0, 0], shapes: [ { t: 'sphere', r: 0.16 * s, n: 6, m: 10, scale: [1.6, 0.6, 0.1], rot: [0, 0, i * 25], pos: [0, 0, R + 0.06], color: '#ffffff' } ] } ] }))) },
        { id: 'crosta', name: 'Erdkruste', color: '#92400e', explode: [0, 0, -0.4],
          info: '<p>Die steinerne „Schale“, auf der wir leben. Sie ist hauchdünn: im Verhältnis dünner als die Schale eines Apfels! Unter den Kontinenten ist sie 30–70 km dick, unter den Ozeanen nur 5–10 km.</p>',
          more: '<p>Die Kruste ist in große Stücke geteilt, die <b>Platten</b>, die auf dem Mantel schwimmen und sich pro Jahr nur um wenige Zentimeter bewegen, etwa so viel, wie deine Fingernägel wachsen.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, false), { t: 'tube', r: R + 0.004, ri: R - 0.08, h: 0.03, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#92400e' } ].concat(tiles(false))) },
        { id: 'placche', name: 'Plattengrenzen', label: 'Platten', color: '#facc15', explode: [4.6, 0.3, -2.6],
          info: '<p>Die gelben Linien sind einige der <b>Plattengrenzen</b>. Wo sich Platten voneinander entfernen, entsteht neue Kruste (wie in der Mitte des Atlantiks); wo sie zusammenstoßen, türmen sich Gebirge wie die <b>Alpen</b> und der Himalaya auf, und es gibt Vulkane und Erdbeben.</p>',
          more: '<p>Vor 200 Millionen Jahren waren die Kontinente zu einem einzigen Superkontinent vereint, der <b>Pangaea</b>. Schau dir die Küsten von Afrika und Südamerika an: Sie passen zusammen wie die Teile eines Puzzles!</p>',
          shapes: T([ surfPipe([[66, -18], [50, -29], [30, -42], [15, -46], [0, -22], [-20, -13], [-40, -16], [-55, -5]], 0.03, '#facc15'),
            surfPipe([[36, -8], [40, 5], [45, 12], [41, 22], [38, 35], [34, 50], [30, 65], [30, 80], [27, 88]], 0.03, '#facc15'),
            surfPipe([[12, -79], [-5, -83], [-20, -73], [-35, -74], [-50, -77]], 0.03, '#facc15'),
            surfPipe([[13, 42], [0, 37], [-15, 35]], 0.025, '#facc15') ]) },
        { id: 'mantello-superiore', name: 'Oberer Mantel', label: 'Oberer Mantel', color: '#ea580c', explode: [0, 0, 0],
          info: '<p>Unter der Kruste liegt der <b>Mantel</b>: sehr heißes Gestein, das sich in sehr langen Zeiträumen langsam wie ein dicker Teig bewegt. Im oberen Teil schmilzt das Gestein an manchen Stellen und bildet das <b>Magma</b> der Vulkane.</p>',
          shapes: T([ hemi(R - 0.08, '#ea580c', 0.022, false) ]) },
        { id: 'mantello-inferiore', name: 'Unterer Mantel', label: 'Unterer Mantel', color: '#b91c1c', explode: [0, 0, 0],
          info: '<p>Der Mantel ist die größte Schicht: Er reicht bis in <b>2900 km</b> Tiefe und macht allein mehr als 80 % des Volumens der Erde aus. Je tiefer man kommt, desto heißer wird es: bis zu etwa 4000 °C.</p>',
          shapes: T([ hemi(1.79, '#b91c1c', 0.032, false) ]) },
        { id: 'convezione', name: 'Strömungen im Mantel', label: 'Konvektionsströmungen', color: '#fed7aa', explode: [0, 0, 0.05], chip: true,
          info: '<p>Der Mantel ist unten heißer und oben kälter: Das heiße Gestein steigt ganz langsam auf, das kalte sinkt ab. Diese <b>Konvektionsströmungen</b> schleppen die Platten der Kruste mit.</p>',
          more: '<p>Ein vollständiger Umlauf dieser Strömungen dauert <b>Dutzende Millionen Jahre</b>: Das Gestein des Mantels bewegt sich mit einer Geschwindigkeit von einigen Zentimetern im Jahr.</p>',
          shapes: T(loops(1.45, 0.28, 10, '#fed7aa', '#7f1d1d', 0.3)) },
        { id: 'nucleo-esterno', name: 'Äußerer Kern (flüssig)', label: 'Äußerer Kern', color: '#f59e0b', explode: [0, 0, 0.1],
          info: '<p>Eine Schicht aus <b>geschmolzenem Eisen und Nickel</b>, flüssig, bei 4000–5000 °C. Das flüssige Metall, das sich bewegt, erzeugt das <b>Magnetfeld</b> der Erde.</p>',
          shapes: T([ hemi(1.09, '#f59e0b', 0.042, false) ].concat(loops(0.74, 0.17, 7, '#fef3c7', '#b45309', 0.8))) },
        { id: 'nucleo-interno', name: 'Innerer Kern (fest)', label: 'Innerer Kern', color: '#fef3c7', explode: [0, 0, 0.2],
          info: '<p>Das Zentrum der Erde: eine sehr heiße Kugel aus <b>Eisen und Nickel</b>, etwa <b>5400 °C</b>, so heiß wie die Oberfläche der Sonne! Und doch ist sie <b>fest</b>, weil der Druck gewaltig ist.</p>',
          more: '<p>So tief ist noch nie jemand hinabgestiegen: Das tiefste je gebohrte Loch reicht 12 km weit. Wir kennen das Innere der Erde, weil wir untersuchen, wie sich <b>Erdbebenwellen</b> ausbreiten: Sie ändern Geschwindigkeit und Richtung, wenn sie von einer Schicht in die nächste gelangen.</p>',
          shapes: T([ { t: 'sphere', r: 0.38, n: 14, m: 22, anim: { type: 'blink', color: '#ffffff', amount: 0.4, rate: 0.8 } } ]) },
        { id: 'campo-magnetico', name: 'Magnetfeld', label: 'Magnetfeld', color: '#a78bfa', explode: [0, 0, 0],
          info: '<p>Die Erde verhält sich wie ein <b>riesiger Magnet</b>. Deshalb zeigt die Kompassnadel nach Norden. Das Magnetfeld schützt uns auch vor dem Sonnenwind.</p>',
          more: '<p>Der magnetische Nordpol liegt nicht genau am geografischen und wandert pro Jahr um Dutzende Kilometer. In der Geschichte der Erde haben sich die magnetischen Pole schon oft <b>umgekehrt</b>!</p>',
          shapes: T(field) },
        { id: 'asse', name: 'Drehachse', label: 'Erdachse', color: '#e2e8f0', explode: [0, 0, 0],
          info: '<p>Die Erde dreht sich um eine gedachte Linie, die <b>Achse</b>, die durch den Nordpol und den Südpol geht. Eine Drehung dauert <b>24 Stunden</b>: Das sind Tag und Nacht.</p>',
          more: '<p>Die Achse ist um <b>23,5°</b> geneigt. Deshalb treffen die Sonnenstrahlen, während die Erde um die Sonne wandert, mal steiler auf die Nordhalbkugel, mal auf die Südhalbkugel: So entstehen die <b>Jahreszeiten</b>!</p>',
          shapes: T([ { t: 'cyl', r: 0.025, h: 5.6, n: 8, color: '#e2e8f0' }, { t: 'cone', r: 0.08, h: 0.22, n: 12, pos: [0, 2.9, 0], color: '#ef4444' },
            { t: 'group', pos: [0, 2.45, 0], anim: { type: 'spin', axis: 'y', rate: 0.5, dir: -1 }, shapes: [ { t: 'torus', R: 0.42, r: 0.02, n: 24, m: 4, arc: 300, color: '#e2e8f0' }, { t: 'cone', r: 0.06, h: 0.16, n: 10, rot: [0, 0, 90], pos: [0.42, 0, 0], color: '#e2e8f0' } ] } ]) },
        { id: 'atmosfera', name: 'Atmosphäre', color: '#7dd3fc', alpha: 0.14, explode: [0, 0, 0],
          info: '<p>Eine dünne Decke aus <b>Luft</b> umhüllt den Planeten: Sie enthält den Sauerstoff, den wir atmen, hält die Wärme fest und schützt uns vor den gefährlichsten Strahlen der Sonne.</p>',
          more: '<p>Die Luft besteht zu 78 % aus Stickstoff und zu 21 % aus Sauerstoff. Die Hälfte der gesamten Luft befindet sich unterhalb von 5,5 km Höhe: In diesem Maßstab ist die Atmosphäre so dick wie die Schale einer Zwiebel.</p>',
          shapes: [ { t: 'sphere', r: R + 0.13, n: 18, m: 32 } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'Der blaue Planet', explode: 0,
        html: '<p>Aus dem Weltraum gesehen ist die Erde blau und weiß: <b>Ozeane</b> und <b>Wolken</b>. Sie ist der einzige Planet, den wir kennen, mit flüssigem Wasser an der Oberfläche und mit Leben.</p><p class="tip">🇮🇹 Kannst du Italien finden? Es ist der „Stiefel“ mitten im Meer, oberhalb von Afrika.</p>' },
      { icon: '🔄', title: 'Sie dreht sich um sich selbst', explode: 0,
        html: '<p>Die Erde dreht sich in 24 Stunden um ihre <b>Achse</b>, von Westen nach Osten: Deshalb scheint die Sonne im Osten aufzugehen und im Westen unterzugehen. Die Achse ist <b>geneigt</b>, und das schenkt uns die Jahreszeiten.</p>' },
      { icon: '🍑', title: 'Innen besteht sie aus Schichten', explode: 1, focus: ['crosta', 'mantello-superiore', 'mantello-inferiore', 'nucleo-esterno', 'nucleo-interno'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>Wenn wir die Erde wie einen Pfirsich durchschneiden könnten, sähen wir die <b>Kruste</b> (die Schale), den <b>Mantel</b> (das Fruchtfleisch) und den <b>Kern</b> (den Stein), geteilt in einen flüssigen äußeren Kern und einen festen inneren Kern.</p><p class="tip">🌡️ Je tiefer man kommt, desto heißer wird es: Im Zentrum sind es etwa 5400 °C.</p>' },
      { icon: '🥾', title: 'Die Kruste und die Platten', explode: 0, view: { rx: 0.3, ry: -0.05 },
        html: '<p>Die Kruste ist hauchdünn und in große Stücke geteilt, die <b>Platten</b>. Wo sie zusammenstoßen, entstehen Berge, Vulkane und Erdbeben: Italien liegt genau dort, wo die Afrikanische Platte gegen die Eurasische drückt.</p>' },
      { icon: '♨️', title: 'Der Mantel bewegt sich', explode: 1, focus: ['mantello-superiore', 'mantello-inferiore', 'convezione'], view: { rx: 0.1, ry: -0.15 }, zoom: 1.2,
        html: '<p>Der Mantel ist sehr heißes Gestein, das sich ganz langsam bewegt, wie ein dicker Teig: Der heiße Teil steigt auf, der kalte sinkt ab. Diese <b>Strömungen</b> verschieben die Platten jedes Jahr um wenige Zentimeter.</p>' },
      { icon: '🧲', title: 'Der Kern und der Erdmagnet', explode: 1, focus: ['nucleo-esterno', 'nucleo-interno', 'campo-magnetico'], view: { rx: 0.15, ry: -0.3 },
        html: '<p>Im <b>äußeren Kern</b> kreist flüssiges Eisen und erzeugt das <b>Magnetfeld</b>: Die Erde ist wie ein großer Magnet. Ihm verdanken wir, dass der Kompass funktioniert und der Sonnenwind uns nicht trifft.</p>' },
      { icon: '🌬️', title: 'Die Luftdecke', explode: 0, 
        html: '<p>Um die Erde liegt die <b>Atmosphäre</b>: die Luft, die wir atmen. Sie hält die Wärme der Sonne fest (ohne sie hätten wir −18 °C!) und schützt uns. In der Atmosphäre entstehen die Wolken und das Wetter.</p>' }
    ],
    facts: [
      { icon: '🥔', title: 'Keine perfekte Kugel', html: 'Durch die Drehung wird die Erde an den Polen ein klein wenig „plattgedrückt“: Der Durchmesser am Äquator ist etwa 43 km länger als der zwischen den Polen.' },
      { icon: '🏎️', title: 'Rasend schnell, ohne dass wir es merken', html: 'Am Äquator trägt uns die Drehung mit etwa <b>1670 km/h</b>, und um die Sonne rast die Erde mit 107 000 km/h!' },
      { icon: '🎂', title: 'Ein alter Planet', html: 'Die Erde ist etwa <b>4,6 Milliarden Jahre</b> alt. Menschen gibt es seit ungefähr 300 000 Jahren: Wäre die Geschichte der Erde ein Tag, wären wir erst in den letzten 6 Sekunden angekommen.' },
      { icon: '🧩', title: 'Das Puzzle der Kontinente', html: 'Die Küsten von Afrika und Südamerika passen zusammen: Einst waren sie im Superkontinent <b>Pangaea</b> vereint.' },
      { icon: '🕳️', title: 'Das tiefste Loch', html: 'Die tiefste Bohrung, die je gemacht wurde (in Russland), reicht etwa 12 km hinab: weniger als 0,2 % des Weges zum Mittelpunkt der Erde.' }
    ],
    quiz: [
      { type: 'order', q: 'Bringe die Schichten der Erde in die richtige Reihenfolge, von der Oberfläche zum Zentrum', items: ['Kruste', 'Mantel', 'Äußerer Kern', 'Innerer Kern'], explain: 'Schale, Fruchtfleisch und Kern: Kruste, Mantel, flüssiger Kern und fester Kern.' },
      { type: 'mc', q: 'Woraus besteht der Kern der Erde hauptsächlich?', options: ['Wasser und Eis', 'Eisen und Nickel', 'Sand', 'Druckluft'], answer: 1, explain: 'Der Kern besteht aus Eisen und Nickel: außen flüssig, in der Mitte fest.' },
      { type: 'tf', q: 'Der innere Kern ist fest, obwohl er sehr heiß ist.', answer: true, explain: 'Der gewaltige Druck verhindert, dass das Metall schmilzt.' },
      { type: 'mc', q: 'Was erzeugt das Magnetfeld der Erde?', options: ['Der Wind', 'Das flüssige Eisen, das sich im äußeren Kern bewegt', 'Der Mond', 'Die Ozeane'], answer: 1, explain: 'Die Bewegung des flüssigen Metalls erzeugt das Magnetfeld.' },
      { type: 'num', q: 'In wie vielen Stunden dreht sich die Erde einmal um sich selbst?', answer: 24, unit: 'Stunden', explain: 'Etwa 24 Stunden: So lang dauert ein Tag.' },
      { type: 'mc', q: 'Warum gibt es Jahreszeiten?', options: ['Weil sich die Erde stark der Sonne nähert und wieder von ihr entfernt', 'Weil die Erdachse geneigt ist', 'Weil sich die Sonne an- und ausschaltet', 'Wegen der Wolken'], answer: 1, explain: 'Durch die Neigung von 23,5° treffen die Strahlen mal steiler auf die eine Halbkugel, mal auf die andere.' }
    ]
  });
})();
