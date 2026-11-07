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
    id: 'terra',
    title: 'La Terra',
    intro: 'La Terra è il nostro pianeta: una palla di roccia e metallo larga quasi <b>13 000 km</b>, con oceani, continenti e una sottile coperta d\'aria. Dentro è fatta a <b>strati</b>, come una pesca: buccia, polpa e nocciolo. Apriamola!',
    model: {
      rx: 0.22, ry: -0.42, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'superficie', name: 'Superficie: oceani e continenti', label: 'Continenti e oceani', color: '#1d4ed8', explode: [4.6, 0.3, -2.6],
          info: '<p>Da fuori la Terra è <b>blu</b>: gli oceani coprono circa il <b>71 %</b> della superficie. Il resto sono i continenti. Qui davanti vedi l\'Europa (con l\'Italia!) e l\'Africa.</p>',
          more: '<p>Gli oceani sono profondi in media 3700 m; il punto più profondo, la Fossa delle Marianne, scende a quasi 11 000 m. La montagna più alta, l\'Everest, è alta 8849 m.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, true) ].concat(tiles(true))) },
        { id: 'nuvole', name: 'Nuvole', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>Le nuvole sono goccioline d\'acqua e cristalli di ghiaccio sospesi nell\'aria. In ogni momento coprono circa due terzi del pianeta.</p>',
          shapes: T(clouds.map(([a, o, s], i) => ({ t: 'group', rot: [0, o, 0], shapes: [ { t: 'group', rot: [-a, 0, 0], shapes: [ { t: 'sphere', r: 0.16 * s, n: 6, m: 10, scale: [1.6, 0.6, 0.1], rot: [0, 0, i * 25], pos: [0, 0, R + 0.06], color: '#ffffff' } ] } ] }))) },
        { id: 'crosta', name: 'Crosta', color: '#92400e', explode: [0, 0, -0.4],
          info: '<p>La "buccia" rocciosa su cui viviamo. È sottilissima: in proporzione è più sottile della buccia di una mela! Sotto i continenti è spessa 30–70 km, sotto gli oceani solo 5–10 km.</p>',
          more: '<p>La crosta è divisa in grandi pezzi, le <b>placche</b>, che galleggiano sul mantello e si muovono di pochi centimetri l\'anno, più o meno quanto crescono le tue unghie.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, false), { t: 'tube', r: R + 0.004, ri: R - 0.08, h: 0.03, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#92400e' } ].concat(tiles(false))) },
        { id: 'placche', name: 'Confini delle placche', label: 'Placche', color: '#facc15', explode: [4.6, 0.3, -2.6],
          info: '<p>Le linee gialle sono alcuni <b>confini tra le placche</b>. Dove le placche si allontanano nasce nuova crosta (come al centro dell\'Atlantico); dove si scontrano si alzano montagne come le <b>Alpi</b> e l\'Himalaya, e ci sono vulcani e terremoti.</p>',
          more: '<p>200 milioni di anni fa i continenti erano uniti in un unico supercontinente, la <b>Pangea</b>. Guarda le coste di Africa e Sud America: si incastrano come i pezzi di un puzzle!</p>',
          shapes: T([ surfPipe([[66, -18], [50, -29], [30, -42], [15, -46], [0, -22], [-20, -13], [-40, -16], [-55, -5]], 0.03, '#facc15'),
            surfPipe([[36, -8], [40, 5], [45, 12], [41, 22], [38, 35], [34, 50], [30, 65], [30, 80], [27, 88]], 0.03, '#facc15'),
            surfPipe([[12, -79], [-5, -83], [-20, -73], [-35, -74], [-50, -77]], 0.03, '#facc15'),
            surfPipe([[13, 42], [0, 37], [-15, 35]], 0.025, '#facc15') ]) },
        { id: 'mantello-superiore', name: 'Mantello superiore', label: 'Mantello superiore', color: '#ea580c', explode: [0, 0, 0],
          info: '<p>Sotto la crosta c\'è il <b>mantello</b>: roccia caldissima che, in tempi lunghissimi, si muove lentamente come una pasta densa. Nella parte alta, in alcuni punti, la roccia fonde e forma il <b>magma</b> dei vulcani.</p>',
          shapes: T([ hemi(R - 0.08, '#ea580c', 0.022, false) ]) },
        { id: 'mantello-inferiore', name: 'Mantello inferiore', label: 'Mantello inferiore', color: '#b91c1c', explode: [0, 0, 0],
          info: '<p>Il mantello è lo strato più grande: arriva fino a <b>2900 km</b> di profondità e da solo è più dell\'80 % del volume della Terra. Più si scende, più fa caldo: fino a circa 4000 °C.</p>',
          shapes: T([ hemi(1.79, '#b91c1c', 0.032, false) ]) },
        { id: 'convezione', name: 'Correnti nel mantello', label: 'Correnti convettive', color: '#fed7aa', explode: [0, 0, 0.05], chip: true,
          info: '<p>Il mantello è più caldo in basso e più freddo in alto: la roccia calda sale piano piano, quella fredda scende. Queste <b>correnti convettive</b> trascinano le placche della crosta.</p>',
          more: '<p>Un giro completo di queste correnti dura <b>decine di milioni di anni</b>: la roccia del mantello si muove alla velocità di qualche centimetro l\'anno.</p>',
          shapes: T(loops(1.45, 0.28, 10, '#fed7aa', '#7f1d1d', 0.3)) },
        { id: 'nucleo-esterno', name: 'Nucleo esterno (liquido)', label: 'Nucleo esterno', color: '#f59e0b', explode: [0, 0, 0.1],
          info: '<p>Uno strato di <b>ferro e nichel fusi</b>, liquidi, a 4000–5000 °C. Il metallo liquido che si muove crea il <b>campo magnetico</b> della Terra.</p>',
          shapes: T([ hemi(1.09, '#f59e0b', 0.042, false) ].concat(loops(0.74, 0.17, 7, '#fef3c7', '#b45309', 0.8))) },
        { id: 'nucleo-interno', name: 'Nucleo interno (solido)', label: 'Nucleo interno', color: '#fef3c7', explode: [0, 0, 0.2],
          info: '<p>Il centro della Terra: una palla di <b>ferro e nichel</b> caldissima, circa <b>5400 °C</b>, come la superficie del Sole! Eppure è <b>solida</b>, perché la pressione è enorme.</p>',
          more: '<p>Nessuno è mai sceso così in profondità: il buco più profondo mai scavato arriva a 12 km. Conosciamo l\'interno della Terra studiando come viaggiano le <b>onde dei terremoti</b>: cambiano velocità e direzione passando da uno strato all\'altro.</p>',
          shapes: T([ { t: 'sphere', r: 0.38, n: 14, m: 22, anim: { type: 'blink', color: '#ffffff', amount: 0.4, rate: 0.8 } } ]) },
        { id: 'campo-magnetico', name: 'Campo magnetico', label: 'Campo magnetico', color: '#a78bfa', explode: [0, 0, 0],
          info: '<p>La Terra si comporta come una <b>gigantesca calamita</b>. Per questo l\'ago della bussola punta verso nord. Il campo magnetico ci protegge anche dal vento solare.</p>',
          more: '<p>Il polo nord magnetico non coincide esattamente con quello geografico e si sposta di decine di km all\'anno. Nella storia della Terra i poli magnetici si sono <b>invertiti</b> molte volte!</p>',
          shapes: T(field) },
        { id: 'asse', name: 'Asse di rotazione', label: 'Asse terrestre', color: '#e2e8f0', explode: [0, 0, 0],
          info: '<p>La Terra gira su se stessa intorno a una linea immaginaria, l\'<b>asse</b>, che passa per il Polo Nord e il Polo Sud. Un giro dura <b>24 ore</b>: è il giorno e la notte.</p>',
          more: '<p>L\'asse è inclinato di <b>23,5°</b>. Per questo, mentre la Terra gira intorno al Sole, i raggi arrivano più dritti ora sull\'emisfero nord ora su quello sud: ecco le <b>stagioni</b>!</p>',
          shapes: T([ { t: 'cyl', r: 0.025, h: 5.6, n: 8, color: '#e2e8f0' }, { t: 'cone', r: 0.08, h: 0.22, n: 12, pos: [0, 2.9, 0], color: '#ef4444' },
            { t: 'group', pos: [0, 2.45, 0], anim: { type: 'spin', axis: 'y', rate: 0.5, dir: -1 }, shapes: [ { t: 'torus', R: 0.42, r: 0.02, n: 24, m: 4, arc: 300, color: '#e2e8f0' }, { t: 'cone', r: 0.06, h: 0.16, n: 10, rot: [0, 0, 90], pos: [0.42, 0, 0], color: '#e2e8f0' } ] } ]) },
        { id: 'atmosfera', name: 'Atmosfera', color: '#7dd3fc', alpha: 0.14, explode: [0, 0, 0],
          info: '<p>Una sottile coperta d\'<b>aria</b> avvolge il pianeta: contiene l\'ossigeno che respiriamo, trattiene il calore e ci protegge dai raggi più pericolosi del Sole.</p>',
          more: '<p>L\'aria è fatta per il 78 % di azoto e per il 21 % di ossigeno. Metà di tutta l\'aria sta sotto i 5,5 km d\'altezza: a questa scala l\'atmosfera è spessa come la buccia di una cipolla.</p>',
          shapes: [ { t: 'sphere', r: R + 0.13, n: 18, m: 32 } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'Il pianeta blu', explode: 0,
        html: '<p>Vista dallo spazio la Terra è blu e bianca: <b>oceani</b> e <b>nuvole</b>. È l\'unico pianeta che conosciamo con acqua liquida in superficie e con la vita.</p><p class="tip">🇮🇹 Riesci a trovare l\'Italia? È lo "stivale" in mezzo al mare, sopra l\'Africa.</p>' },
      { icon: '🔄', title: 'Gira su se stessa', explode: 0,
        html: '<p>La Terra ruota intorno al suo <b>asse</b> in 24 ore, da ovest verso est: per questo il Sole sembra sorgere a est e tramontare a ovest. L\'asse è <b>inclinato</b> e questo ci regala le stagioni.</p>' },
      { icon: '🍑', title: 'Dentro è fatta a strati', explode: 1, focus: ['crosta', 'mantello-superiore', 'mantello-inferiore', 'nucleo-esterno', 'nucleo-interno'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>Se potessimo tagliare la Terra come una pesca vedremmo la <b>crosta</b> (la buccia), il <b>mantello</b> (la polpa) e il <b>nucleo</b> (il nocciolo), diviso in nucleo esterno liquido e nucleo interno solido.</p><p class="tip">🌡️ Più si scende, più fa caldo: al centro ci sono circa 5400 °C.</p>' },
      { icon: '🥾', title: 'La crosta e le placche', explode: 0, view: { rx: 0.3, ry: -0.05 },
        html: '<p>La crosta è sottilissima e divisa in grandi pezzi, le <b>placche</b>. Dove si scontrano nascono montagne, vulcani e terremoti: l\'Italia si trova proprio dove la placca africana spinge contro quella europea.</p>' },
      { icon: '♨️', title: 'Il mantello si muove', explode: 1, focus: ['mantello-superiore', 'mantello-inferiore', 'convezione'], view: { rx: 0.1, ry: -0.15 }, zoom: 1.2,
        html: '<p>Il mantello è roccia caldissima che si muove lentissimamente, come una pasta densa: la parte calda sale, quella fredda scende. Queste <b>correnti</b> spostano le placche di pochi centimetri ogni anno.</p>' },
      { icon: '🧲', title: 'Il nucleo e la calamita Terra', explode: 1, focus: ['nucleo-esterno', 'nucleo-interno', 'campo-magnetico'], view: { rx: 0.15, ry: -0.3 },
        html: '<p>Nel <b>nucleo esterno</b> il ferro liquido gira e crea il <b>campo magnetico</b>: la Terra è come una grande calamita. È grazie a lui che la bussola funziona e che il vento solare non ci colpisce.</p>' },
      { icon: '🌬️', title: 'La coperta d\'aria', explode: 0, 
        html: '<p>Intorno alla Terra c\'è l\'<b>atmosfera</b>: l\'aria che respiriamo. Trattiene il calore del Sole (senza, faremmo −18 °C!) e ci protegge. Dentro l\'atmosfera si formano le nuvole e il tempo meteorologico.</p>' }
    ],
    facts: [
      { icon: '🥔', title: 'Non è una palla perfetta', html: 'Girando, la Terra si "schiaccia" un pochino ai poli: il diametro all\'equatore è circa 43 km più lungo di quello tra i poli.' },
      { icon: '🏎️', title: 'Velocissimi senza accorgercene', html: 'All\'equatore la rotazione ci porta a circa <b>1670 km/h</b>, e intorno al Sole la Terra corre a 107 000 km/h!' },
      { icon: '🎂', title: 'Un pianeta antico', html: 'La Terra ha circa <b>4,6 miliardi di anni</b>. Gli esseri umani esistono da circa 300 000 anni: se la storia della Terra fosse un giorno, saremmo arrivati negli ultimi 6 secondi.' },
      { icon: '🧩', title: 'Il puzzle dei continenti', html: 'Le coste dell\'Africa e del Sud America si incastrano: un tempo erano unite nel supercontinente <b>Pangea</b>.' },
      { icon: '🕳️', title: 'Il buco più profondo', html: 'Il pozzo più profondo mai scavato (in Russia) arriva a circa 12 km: meno dello 0,2 % della strada verso il centro della Terra.' }
    ],
    quiz: [
      { type: 'order', q: 'Metti in ordine gli strati della Terra, dalla superficie al centro', items: ['Crosta', 'Mantello', 'Nucleo esterno', 'Nucleo interno'], explain: 'Buccia, polpa e nocciolo: crosta, mantello, nucleo liquido e nucleo solido.' },
      { type: 'mc', q: 'Di che cosa è fatto soprattutto il nucleo della Terra?', options: ['Acqua e ghiaccio', 'Ferro e nichel', 'Sabbia', 'Aria compressa'], answer: 1, explain: 'Il nucleo è fatto di ferro e nichel: liquidi nella parte esterna, solidi al centro.' },
      { type: 'tf', q: 'Il nucleo interno è solido anche se è caldissimo.', answer: true, explain: 'La pressione enorme impedisce al metallo di fondere.' },
      { type: 'mc', q: 'Che cosa crea il campo magnetico terrestre?', options: ['Il vento', 'Il ferro liquido che si muove nel nucleo esterno', 'La Luna', 'Gli oceani'], answer: 1, explain: 'Il movimento del metallo liquido produce il campo magnetico.' },
      { type: 'num', q: 'In quante ore la Terra fa un giro completo su se stessa?', answer: 24, unit: 'ore', explain: 'Circa 24 ore: è la durata del giorno.' },
      { type: 'mc', q: 'Perché ci sono le stagioni?', options: ['Perché la Terra si avvicina e allontana molto dal Sole', 'Perché l\'asse terrestre è inclinato', 'Perché il Sole si accende e si spegne', 'Per colpa delle nuvole'], answer: 1, explain: 'L\'inclinazione di 23,5° fa arrivare i raggi più dritti ora su un emisfero, ora sull\'altro.' }
    ]
  });
})();
