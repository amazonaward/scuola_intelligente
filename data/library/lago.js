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
    title: 'Il lago',
    intro: 'Un lago è una grande massa d\'<b>acqua dolce</b> ferma in una conca del terreno. Riceve acqua da fiumi, pioggia e neve sciolta e la restituisce con un altro fiume e con l\'evaporazione. In Italia i laghi più grandi, come il <b>Garda</b> e il <b>Como</b>, sono nati dai ghiacciai.',
    model: {
      rx: 0.38, ry: -0.5, speed: 0.4, height: 480, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'valle', name: 'Valle e montagne', label: 'Montagne', color: '#4d7c0f', explode: [0, -0.5, -0.4],
          info: '<p>Il lago sta in fondo a una <b>valle</b> tra le montagne. La conca che contiene l\'acqua si chiama <b>bacino</b>: è come una grande scodella di roccia.</p>',
          more: '<p>Sul taglio si vede che sotto il prato c\'è <b>roccia</b>: le rocce impermeabili non lasciano filtrare l\'acqua verso il basso, per questo il lago non si svuota.</p>',
          shapes: [ prism(TERRAIN, L, -L / 2, '#4d7c0f'),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -0.25], [2.2, -0.25]].concat(RIGHT.map(([x, y]) => [x + 0.15, y - 0.2]), LEFT.slice(0, -1).reverse().map(([x, y]) => [x - 0.15, y - 0.2]), [[-2.2, 0.35], [-2.7, 1.35], [-3.2, 2.05], [-3.45, 2.15], [-3.85, 1.85], [-4.5, 1.1]]), 0.02, 0.012, '#78716c', { decal: 1 }),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -1.75], [-4.5, -1.75]], 0.02, 0.016, '#57534e', { decal: 2 }) ] },
        { id: 'vetta', name: 'Montagna innevata', label: 'Montagna innevata', color: '#a8a29e', explode: [0, 0.6, -1.2],
          info: '<p>In fondo alla valle c\'è una montagna con la cima innevata. Migliaia di anni fa, durante le <b>glaciazioni</b>, un enorme ghiacciaio scendeva lungo la valle e scavava la roccia come una ruspa.</p>',
          more: '<p>Quando il clima si è riscaldato (circa 15 000 anni fa), il ghiacciaio si è ritirato: nella conca scavata e chiusa a valle dai detriti (le <b>morene</b>) si è raccolta l\'acqua. Sono nati così i laghi Maggiore, di Como, d\'Iseo e di Garda.</p>',
          shapes: [ { t: 'lathe', n: 30, pos: [0, 0, -5.6], scale: [1.4, 1, 0.75], pts: [[0, -2.2], [3.2, -2.2], [3.0, 0.1], [2.2, 1.1], [1.3, 2.3], [0.6, 3.2], [0.15, 3.6], [0, 3.65]] },
            { t: 'lathe', n: 30, pos: [0, 0.02, -5.6], scale: [1.42, 1, 0.77], pts: [[1.05, 2.6], [0.6, 3.2], [0.15, 3.6], [0, 3.66], [0, 2.6]], color: '#f8fafc' } ] },
        { id: 'immissario', name: 'Immissario (fiume che entra)', label: 'Immissario', color: '#38bdf8', explode: [0, 0.3, -1.0],
          info: '<p>Il fiume che <b>porta acqua</b> al lago si chiama <b>immissario</b>. Nasce dalla neve e dal ghiacciaio che si sciolgono e scende veloce lungo la montagna.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: INFLOW, color: '#38bdf8' } ].concat(flowDots(INFLOW, 8, 0.8, '#e0f2fe')) },
        { id: 'acqua', name: 'Acqua del lago', label: 'Acqua', color: '#38bdf8', alpha: 0.42, explode: [0, 0.6, 0.6],
          info: '<p>L\'acqua del lago è <b>dolce</b>: contiene pochissimo sale, a differenza del mare. Quella dei grandi laghi è così pulita che spesso diventa acqua da bere.</p>',
          more: '<p>Il lago di Garda contiene circa <b>50 miliardi di metri cubi</b> d\'acqua e in alcuni punti è profondo 346 m: il fondo è sotto il livello del mare! Un lago grande "mitiga" il clima: d\'inverno restituisce il calore accumulato d\'estate, per questo sulle sue rive crescono limoni e ulivi.</p>',
          shapes: [ prism(WATER, L - 0.05, -L / 2, '#38bdf8'),
            { t: 'box', s: [3.7, 0.01, L - 0.05], pos: [0.02, -0.005, -L / 2], color: '#7dd3fc', alpha: 0.35, anim: { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.5 } } ] },
        { id: 'strati', name: 'Strati d\'acqua (caldo e freddo)', label: 'Strati d\'acqua', color: '#0369a1', explode: [0, 0.2, 1.0],
          info: '<p>D\'estate il lago è a <b>strati</b>: sopra l\'acqua è tiepida e piena di luce, sotto è <b>fredda e buia</b> (circa 4–6 °C), anche quando fuori fa caldo.</p>',
          more: '<p>Lo strato caldo in alto si chiama <b>epilimnio</b>, quello freddo in fondo <b>ipolimnio</b>; in mezzo c\'è il <b>termoclino</b>, dove la temperatura cala di colpo. L\'acqua è più pesante a 4 °C: per questo in inverno il ghiaccio galleggia e sotto i pesci sopravvivono.</p>',
          shapes: [ prism(slab(-0.03, -0.42, 0.05), 0.02, 0.02, '#7dd3fc', { decal: 1 }), prism(slab(-0.42, -0.62, 0.05), 0.02, 0.02, '#38bdf8', { decal: 1 }), prism(slab(-0.62, -1.36, 0.05), 0.02, 0.02, '#1e40af', { decal: 1 }) ] },
        { id: 'sedimenti', name: 'Fondale e sedimenti', label: 'Sedimenti', color: '#78350f', explode: [0, -0.3, 0.6],
          info: '<p>Sul fondo si deposita piano piano il <b>fango</b>: sabbia e terra portate dai fiumi, foglie, resti di piante e animali. Strato dopo strato, il lago si riempie.</p>',
          more: '<p>Studiando gli strati di fango (come gli anelli degli alberi) gli scienziati ricostruiscono il clima di migliaia di anni fa. Fra moltissimo tempo, un lago può diventare una <b>palude</b> e poi un prato.</p>',
          shapes: [ prism(SED, L - 0.1, -L / 2, '#92400e') ] },
        { id: 'emissario', name: 'Emissario (fiume che esce)', label: 'Emissario', color: '#0ea5e9', explode: [0.8, 0, 0],
          info: '<p>Il fiume che <b>esce</b> dal lago è l\'<b>emissario</b>. Per esempio il Ticino esce dal lago Maggiore e il Mincio dal lago di Garda.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: OUTFLOW, color: '#0ea5e9' } ].concat(flowDots(OUTFLOW, 7, 0.6, '#e0f2fe')) },
        { id: 'canneto', name: 'Canneto', color: '#65a30d', explode: [0.4, 0.3, 0.3],
          info: '<p>Lungo le rive crescono le <b>canne</b> e le tife. Il canneto è la "nursery" del lago: lì fanno il nido gli uccelli e depongono le uova i pesci. Le radici filtrano e puliscono l\'acqua.</p>',
          shapes: reeds },
        { id: 'ninfee', name: 'Ninfee', color: '#16a34a', explode: [0, 0.5, 0.2],
          info: '<p>Le <b>ninfee</b> hanno le radici nel fango e le foglie rotonde che galleggiano. Fanno ombra all\'acqua e offrono riparo agli animali.</p>',
          shapes: [[1.35, -0.6], [1.15, -1.0], [1.5, -1.3], [1.05, -0.35], [-1.55, -2.0], [-1.45, -2.5]].map(([x, z], i) => ({ t: 'group', pos: [x, 0.012, z], anim: { type: 'swing', axis: 'y', amp: 8, rate: 0.3, phase: i * 0.2 }, shapes: [
            { t: 'cyl', r: 0.13, h: 0.015, n: 16, color: '#16a34a' }, { t: 'box', s: [0.12, 0.02, 0.025], pos: [0.07, 0.003, 0], color: '#38bdf8' }
          ].concat(i % 2 ? [] : [ { t: 'cone', r: 0.06, h: 0.07, n: 8, pos: [0.02, 0.04, 0.03], color: '#f9a8d4' }, { t: 'sphere', r: 0.02, n: 6, pos: [0.02, 0.05, 0.03], color: '#fde047' } ]) })) },
        { id: 'pesci', name: 'Pesci', color: '#a3a3a3', explode: [0, 0.2, 0.8],
          info: '<p>Nei laghi vivono trote, persici, lucci, carpe, anguille… Alcuni stanno vicino alla riva tra le piante, altri nuotano al largo o nell\'acqua fredda e profonda.</p>',
          more: '<p>I pesci respirano l\'<b>ossigeno sciolto</b> nell\'acqua con le branchie. L\'acqua fredda ne contiene di più: per questo le trote amano i laghi di montagna.</p>',
          shapes: [ fish([0.1, -0.35, -1.2], 0.5, '#9ca3af', 0.35, 0, 1), fish([-0.5, -0.9, -2.3], 0.4, '#a16207', -0.3, 0.4, 1.2), fish([0.4, -0.7, -0.5], 0.3, '#64748b', 0.45, 0.2, 0.9) ] },
        { id: 'plancton', name: 'Plancton e alghe', label: 'Plancton', color: '#86efac', explode: [0, 0.3, 0.9], chip: true,
          info: '<p>Nell\'acqua galleggiano esseri piccolissimi, il <b>plancton</b>: alghe microscopiche e minuscoli animaletti. Sono il primo anello della <b>catena alimentare</b> del lago.</p>',
          shapes: Array.from({ length: 22 }, (_, i) => ({ t: 'sphere', r: 0.025, n: 4, m: 6, pos: [-1.3 + (i * 0.37) % 2.6, -0.05 - (i * 0.13) % 0.35, -0.2 - (i * 0.71) % 3.2], color: i % 3 ? '#86efac' : '#fef08a',
            anim: { type: 'move', dir: [0.3, 1, 0.2], amp: 0.06, rate: 0.7, phase: i * 0.09 } })) },
        { id: 'anatra', name: 'Germano reale', label: 'Anatra', color: '#78350f', pos: [0.6, 0.05, -2.2], explode: [0, 0.5, 0],
          anim: [ { type: 'move', dir: [1, 0, 0.3], amp: 0.5, rate: 0.12 }, { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.2 } ],
          info: '<p>Il <b>germano reale</b> è l\'anatra più comune dei laghi: il maschio ha la testa verde brillante. Le piume sono impermeabili grazie a un olio che l\'anatra spalma con il becco.</p>',
          shapes: [ { t: 'sphere', r: 0.14, n: 10, m: 14, scale: [1.6, 0.8, 1], color: '#a16207' }, { t: 'sphere', r: 0.08, n: 10, m: 12, pos: [0.2, 0.15, 0], color: '#15803d' },
            { t: 'cone', r: 0.03, h: 0.1, n: 8, rot: [0, 0, -90], pos: [0.3, 0.14, 0], color: '#facc15' }, { t: 'box', s: [0.14, 0.06, 0.02], pos: [-0.05, 0.05, 0.13], color: '#1d4ed8', decal: 1 },
            { t: 'cone', r: 0.06, h: 0.12, n: 8, rot: [0, 0, 70], pos: [-0.24, 0.06, 0], color: '#f8fafc' } ] },
        { id: 'ciclo', name: 'Evaporazione, nuvole e pioggia', label: 'Ciclo dell\'acqua', color: '#f8fafc', explode: [0, 1.2, 0],
          info: '<p>Il Sole scalda il lago: un po\' d\'acqua <b>evapora</b> e sale come vapore invisibile. In alto si raffredda e forma le <b>nuvole</b>; poi torna giù come <b>pioggia</b> o neve sulle montagne e, attraverso i fiumi, di nuovo nel lago.</p>',
          more: '<p>È il <b>ciclo dell\'acqua</b>: l\'acqua del pianeta è sempre la stessa da miliardi di anni e continua a girare tra mari, laghi, aria, ghiacciai e sottosuolo.</p>',
          shapes: [ [-2.2, 3.3, -2.6, 0.55], [-1.5, 3.45, -2.4, 0.65], [-0.8, 3.3, -2.7, 0.5], [-1.6, 3.2, -3.1, 0.5] ].map(([x, y, z, r]) => ({ t: 'sphere', r, n: 10, m: 16, pos: [x, y, z], scale: [1.3, 0.75, 1], color: '#f8fafc', anim: { type: 'move', dir: [1, 0, 0], amp: 0.12, rate: 0.2 } }))
            .concat(Array.from({ length: 10 }, (_, k) => { const x = -1.0 + (k * 0.53) % 2.4, z = -0.6 - (k * 0.77) % 2.6; return { t: 'sphere', r: 0.04, n: 6, m: 8, pos: [x, 0.05, z], color: '#e0f2fe',
              anim: [ { type: 'path', pts: [[x, 0.05, z], [x - 0.4, 1.5, z - 0.6], [-1.5, 2.9, -2.6]], wave: 'saw', rate: 0.3, phase: k / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.3, phase: k / 10 } ] }; }))
            .concat(Array.from({ length: 12 }, (_, k) => { const x = -3.4 + (k * 0.41) % 1.6, z = -1.6 - (k * 0.63) % 2.0; return { t: 'cyl', r: 0.012, h: 0.14, n: 4, pos: [x, 2.9, z], color: '#60a5fa',
              anim: { type: 'path', pts: [[x, 2.9, z], [x, 2.2, z]], wave: 'saw', rate: 1.2, phase: k / 12 } }; })) }
      ]
    },
    steps: [
      { icon: '🏞️', title: 'Una conca piena d\'acqua', explode: 0,
        html: '<p>Un lago si forma dove l\'acqua si raccoglie in una <b>conca</b> del terreno, chiamata <b>bacino</b>, e non riesce a scappare via perché il fondo è di roccia impermeabile.</p><p class="tip">✂️ Abbiamo tagliato la valle davanti: così vedi quanto è profondo il lago.</p>' },
      { icon: '🧊', title: 'Nato da un ghiacciaio', focus: ['vetta', 'valle', 'acqua'], view: { rx: 0.3, ry: -0.2 },
        html: '<p>Molti laghi italiani sono di <b>origine glaciale</b>: durante le glaciazioni enormi ghiacciai scendevano lungo le valli e le scavavano. Quando il ghiaccio si è sciolto, la conca si è riempita d\'acqua.</p><p class="tip">🗺️ Esistono anche laghi vulcanici (nei crateri, come Bolsena), laghi di frana e laghi artificiali, fatti dalle dighe.</p>' },
      { icon: '➡️', title: 'Acqua che entra, acqua che esce', focus: ['immissario', 'emissario', 'acqua', 'vetta'], view: { rx: 0.6, ry: -0.3 },
        html: '<p>L\'<b>immissario</b> porta al lago l\'acqua della neve e del ghiacciaio. L\'<b>emissario</b> la porta via. Se entra ed esce la stessa quantità d\'acqua, il livello del lago resta (quasi) uguale.</p>' },
      { icon: '🌡️', title: 'Sopra tiepido, sotto freddo', focus: ['strati', 'acqua', 'sedimenti'], view: { rx: 0.08, ry: -0.05 }, zoom: 1.4,
        html: '<p>D\'estate il Sole scalda solo la parte alta del lago. Sotto, l\'acqua resta <b>fredda e buia</b>, intorno ai 4–6 °C. Sul fondo si posa piano piano il fango: i <b>sedimenti</b>.</p>' },
      { icon: '🐟', title: 'Chi vive nel lago', focus: ['pesci', 'canneto', 'ninfee', 'plancton', 'anatra', 'acqua'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.3,
        html: '<p>Il lago è un <b>ecosistema</b>: il <b>plancton</b> nutre i piccoli pesci, che nutrono i pesci più grandi e gli uccelli. Nel <b>canneto</b> sulle rive nascono pesci e anatre; le <b>ninfee</b> galleggiano con le foglie sull\'acqua.</p>' },
      { icon: '☁️', title: 'Il ciclo dell\'acqua', focus: ['ciclo', 'acqua', 'vetta', 'immissario'], view: { rx: 0.25, ry: -0.6 },
        html: '<p>Il Sole fa <b>evaporare</b> un po\' d\'acqua del lago. Il vapore sale, forma le <b>nuvole</b> e ricade come <b>pioggia</b> o neve sulle montagne. I fiumi la riportano nel lago: un giro senza fine!</p>' },
      { icon: '♻️', title: 'Proteggere il lago', explode: 0,
        html: '<p>Un lago si inquina facilmente: l\'acqua si rinnova lentamente (nel Garda ci vogliono quasi <b>30 anni</b>). Scarichi, concimi e plastica restano a lungo. Per questo servono depuratori, rive naturali e tanta attenzione da parte di tutti.</p>' }
    ],
    facts: [
      { icon: '🥇', title: 'Il più grande d\'Italia', html: 'Il <b>lago di Garda</b> è il più grande d\'Italia (370 km²). Il più profondo è il <b>lago di Como</b>, che arriva a circa 410 metri.' },
      { icon: '🌍', title: 'Il lago più profondo del mondo', html: 'Il lago <b>Bajkal</b>, in Siberia, è profondo più di 1600 metri e contiene da solo circa un quinto dell\'acqua dolce dei laghi del pianeta.' },
      { icon: '🧂', title: 'Laghi salati', html: 'Alcuni laghi non hanno emissario: l\'acqua evapora e il sale si accumula. Nel <b>Mar Morto</b> l\'acqua è così salata che si galleggia senza fatica!' },
      { icon: '🌋', title: 'Laghi nei vulcani', html: 'I laghi di <b>Bolsena</b>, <b>Bracciano</b> e Albano, nel Lazio, riempiono antichi crateri vulcanici: per questo sono quasi rotondi.' },
      { icon: '🧊', title: 'Il ghiaccio galleggia', html: 'Quando un lago gela, il ghiaccio resta in superficie e fa da coperta: sotto, l\'acqua a 4 °C non gela e i pesci passano l\'inverno.' }
    ],
    quiz: [
      { type: 'mc', q: 'Come si chiama il fiume che porta acqua a un lago?', options: ['Emissario', 'Immissario', 'Affluente del mare', 'Torrente salato'], answer: 1, explain: 'L\'immissario entra nel lago, l\'emissario esce.' },
      { type: 'mc', q: 'Come sono nati i grandi laghi del Nord Italia (Garda, Como, Maggiore)?', options: ['Da vulcani', 'Da antichi ghiacciai che hanno scavato le valli', 'Da meteoriti', 'Da dighe costruite dai Romani'], answer: 1, explain: 'Sono laghi di origine glaciale: i ghiacciai hanno scavato le conche.' },
      { type: 'tf', q: 'L\'acqua dei laghi è di solito dolce, cioè con pochissimo sale.', answer: true, explain: 'I laghi con emissario rinnovano l\'acqua e restano dolci.' },
      { type: 'mc', q: 'D\'estate, dove è più fredda l\'acqua di un lago profondo?', options: ['In superficie', 'Vicino alla riva', 'In fondo', 'È uguale dappertutto'], answer: 2, explain: 'Il Sole scalda solo lo strato in alto: in fondo l\'acqua resta a circa 4–6 °C.' },
      { type: 'order', q: 'Metti in ordine il viaggio dell\'acqua', items: ['Il lago evapora', 'Si formano le nuvole', 'Piove o nevica sui monti', 'L\'immissario riporta l\'acqua al lago'], explain: 'È il ciclo dell\'acqua.' },
      { type: 'text', q: 'Qual è il lago più grande d\'Italia?', answer: ['garda', 'lago di garda', 'il garda', 'il lago di garda'], explain: 'Il lago di Garda, tra Lombardia, Veneto e Trentino.' }
    ]
  });
})();
