/* Il faro, su uno scoglio. Alto = +y. La lanterna è in cima (y ≈ 5–6): la lente di Fresnel gira intorno a y
   e i suoi due "occhi di bue" mandano due fasci di luce che spazzano il mare. */
(function () {
  const D = Math.PI / 180, LY = 5.58, TAU = Math.PI * 2;
  const R = (y) => 0.9 - 0.06 * y; // raggio della torre all'altezza y
  const band = (y0, y1, color) => ({ t: 'lathe', n: 30, pts: [[R(y0), y0], [R(y1), y1]], color });
  const SPIN = { type: 'spin', axis: 'y', rate: 1 };
  /* "occhio di bue": anelli concentrici che guardano verso +x */
  const bullseye = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [
    { t: 'sphere', r: 1, n: 8, m: 14, pos: [0.3, 0, 0], scale: [0.05, 0.12, 0.12], color: '#e0f2fe', alpha: 0.75 },
    ...[0.17, 0.24, 0.31].map((r) => ({ t: 'torus', R: r, r: 0.016, n: 24, m: 4, rot: [0, 0, 90], pos: [0.3, 0, 0], color: '#a5f3fc', alpha: 0.7 })),
    { t: 'box', s: [0.02, 0.72, 0.72], pos: [0.27, 0, 0], color: '#b45309', alpha: 0.9 } ] });
  const beam = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'lathe', n: 18, pts: [[0.12, 0], [0.45, 1.2], [0.9, 3.4]], rot: [0, 0, -90], pos: [0.3, 0, 0], ds: true } ] });
  const steps = Array.from({ length: 44 }, (_, k) => { const a = k * 32, y = 0.25 + k * 0.105; return { t: 'box', s: [0.36, 0.035, 0.13], pos: [0.27 * Math.cos(a * D), y, -0.27 * Math.sin(a * D)], rot: [0, a, 0] }; });
  const ROCK = [[0, -0.75], [2.1, -0.75], [2.2, -0.5], [1.9, -0.3], [1.75, -0.12], [1.3, 0.0], [0, 0.02]];

  LIBRARY({
    id: 'faro',
    title: 'Il faro',
    intro: 'Di notte, in mezzo al mare, come fanno le navi a sapere dove sono gli scogli e dove si trova il porto? Guardano i <b>fari</b>! Ogni faro lampeggia in un modo tutto suo, e una lente speciale fa arrivare la sua luce lontanissimo.',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.22, height: 500, bg: 'sky', floor: false,
      parts: [
        { id: 'scogli', name: 'Scogliera', color: '#78716c', explode: [0, -0.6, 0],
          info: '<p>I fari si costruiscono dove le navi rischiano di più: su scogli, punte e isolotti, o all\'ingresso dei porti.</p>',
          shapes: [ { t: 'lathe', n: 22, pts: ROCK }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [1.3, -0.1, 0.9], scale: [0.6, 0.35, 0.5], color: '#57534e' }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [-1.4, -0.15, -0.6], scale: [0.7, 0.3, 0.6], color: '#57534e' },
            { t: 'cyl', r: 1.15, h: 0.2, n: 30, pos: [0, 0.08, 0], color: '#d6d3d1' } ] },
        { id: 'mare', name: 'Mare', color: '#0369a1', alpha: 0.35, explode: [0, -0.6, 0], chip: false, noLabel: true,
          info: '<p>Il mare intorno al faro. Di notte, per i marinai, il faro è come un cartello stradale luminoso.</p>',
          shapes: [ { t: 'cyl', r: 3.4, h: 0.04, n: 40, pos: [0, -0.3, 0] } ] },
        { id: 'torre', name: 'Torre', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>La torre alza la luce il più possibile: più è in alto, più lontano si vede, perché la Terra è curva. Le <b>strisce</b> colorate la rendono riconoscibile anche di giorno.</p>',
          more: '<p>Da una torre alta 50 metri la luce si vede fino a circa <b>45 km</b> di distanza. Le pareti sono spessissime alla base (anche 2 metri) per resistere alle onde e al vento delle tempeste.</p>',
          shapes: [ band(0.1, 1.1), band(1.1, 2.1, '#dc2626'), band(2.1, 3.1), band(3.1, 4.1, '#dc2626'), band(4.1, 5.0),
            { t: 'box', s: [0.32, 0.6, 0.02], pos: [0, 0.42, R(0.42) - 0.01], color: '#3f2a1d', decal: 1 },
            ...[1.6, 2.6, 3.6].map((y, i) => ({ t: 'box', s: [0.12, 0.22, 0.02], pos: [R(y) * Math.sin(i * 70 * D), y, R(y) * Math.cos(i * 70 * D) - 0.01], rot: [0, i * 70, 0], color: '#1e293b', decal: 1 })) ] },
        { id: 'scala', name: 'Scala a chiocciola', label: 'Scala', color: '#a8a29e', explode: [1.5, 0, 0],
          info: '<p>Dentro la torre una lunga <b>scala a chiocciola</b> sale fino alla lanterna. Il guardiano del faro la saliva più volte ogni notte.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 4.9, n: 12, pos: [0, 2.55, 0], color: '#78716c' } ].concat(steps) },
        { id: 'contrappeso', name: 'Peso dell\'orologeria', label: 'Peso', color: '#334155', explode: [1.5, 0, 0],
          info: '<p>Nei fari antichi non c\'era il motore elettrico: un <b>peso</b> appeso a una corda scendeva lentamente dentro la torre e, come in un orologio a pendolo, faceva girare la lente.</p>',
          more: '<p>Il guardiano doveva "caricare" il meccanismo girando una manovella e tirando su il peso, anche ogni 2–4 ore per tutta la notte. Oggi il lavoro lo fa un piccolo motore elettrico e il faro è quasi sempre automatico.</p>',
          shapes: [ { t: 'cyl', r: 0.006, h: 4.5, n: 4, pos: [0, 2.75, 0.15], color: '#1f2937' },
            { t: 'cyl', r: 0.07, h: 0.3, n: 12, pos: [0, 4.4, 0.15], anim: { type: 'move', dir: [0, -1, 0], amp: 3.6, wave: 'saw', rate: 0.05 } } ] },
        { id: 'ballatoio', name: 'Ballatoio', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>Il terrazzino che gira intorno alla lanterna. Da qui il guardiano puliva i vetri dal sale e dalla neve, perché la luce uscisse sempre forte.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.1, n: 32, pos: [0, 5.02, 0] }, { t: 'torus', R: 0.97, r: 0.02, n: 40, m: 4, pos: [0, 5.38, 0] },
            ...Array.from({ length: 16 }, (_, k) => ({ t: 'cyl', r: 0.012, h: 0.32, n: 4, pos: [0.97 * Math.cos(k * 22.5 * D), 5.22, 0.97 * Math.sin(k * 22.5 * D)] })),
            ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.12, 0.2, 0.08], pos: [0.88 * Math.cos(k * 30 * D), 4.88, 0.88 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0], color: '#e5e7eb' })) ] },
        { id: 'lanterna', name: 'Lanterna (stanza di vetro)', label: 'Lanterna', color: '#bae6fd', alpha: 0.22, explode: [0, 0.75, 0],
          info: '<p>La stanza di vetro in cima, dove sta la luce. I vetri sono spessi per resistere al vento, alla pioggia… e agli uccelli che di notte ci sbattono contro!</p>',
          shapes: [ { t: 'cyl', r: 0.6, h: 0.82, n: 32, pos: [0, 5.66, 0], ds: true }, { t: 'tube', r: 0.64, ri: 0.58, h: 0.25, n: 32, pos: [0, 5.18, 0], color: '#f8fafc', alpha: 1 },
            ...Array.from({ length: 8 }, (_, k) => ({ t: 'cyl', r: 0.018, h: 0.82, n: 5, pos: [0.6 * Math.cos(k * 45 * D), 5.66, 0.6 * Math.sin(k * 45 * D)], color: '#1f2937', alpha: 1 })) ] },
        { id: 'cupola', name: 'Cupola', color: '#991b1b', explode: [0, 1.2, 0],
          info: '<p>Il "cappello" di rame della lanterna. In cima c\'è un <b>camino</b> per far uscire il calore della lampada e un <b>parafulmine</b>: il faro è il punto più alto della costa!</p>',
          shapes: [ { t: 'sphere', r: 0.66, n: 10, m: 28, hemi: true, pos: [0, 6.07, 0], scale: [1, 0.7, 1] }, { t: 'cyl', r: 0.68, h: 0.05, n: 32, pos: [0, 6.08, 0], color: '#7f1d1d' },
            { t: 'sphere', r: 0.11, n: 8, m: 12, pos: [0, 6.6, 0], color: '#1f2937' }, { t: 'cyl', r: 0.012, h: 0.45, n: 4, pos: [0, 6.9, 0], color: '#475569' },
            { t: 'group', pos: [0, 6.95, 0], anim: { type: 'swing', axis: 'y', amp: 25, rate: 0.15 }, shapes: [ { t: 'extrude', d: 0.01, pts: [[0, 0], [0.25, 0.03], [0.25, -0.05], [0, -0.03]], color: '#475569' } ] } ] },
        { id: 'lente', name: 'Lente di Fresnel', label: 'Lente di Fresnel', color: '#a5f3fc', pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>È il "superpotere" del faro: una gabbia di vetri sagomati ad anelli, inventata da <b>Augustin Fresnel</b> nel 1822. Raccoglie la luce che va in tutte le direzioni e la concentra in <b>fasci</b> stretti e potentissimi.</p>',
          more: '<p>Una lente normale così grande sarebbe spessa e pesantissima. Fresnel ebbe l\'idea di "tagliarla" ad anelli concentrici, tenendo solo le superfici curve che piegano la luce (<b>rifrazione</b>): stessa funzione, molto meno vetro. In alto e in basso ci sono anche dei prismi che la riflettono. Le stesse lenti sottili si usano nei proiettori e nei fari delle auto.</p>',
          shapes: [ bullseye(0), bullseye(180), { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, 0.38, 0], color: '#b45309' }, { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, -0.38, 0], color: '#b45309' },
            ...[0.22, 0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })), ...[-0.22, -0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })) ] },
        { id: 'lampada', name: 'Lampada', color: '#fde047', pos: [0, LY, 0], explode: [0, 0, 0.8],
          info: '<p>Al centro della lente c\'è la sorgente di luce. Un tempo era una fiamma a olio o a petrolio; oggi è una lampada elettrica o un gruppo di <b>LED</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 3 } }, { t: 'sphere', r: 0.17, n: 8, m: 12, color: '#fef08a', alpha: 0.35 },
            { t: 'cyl', r: 0.03, h: 0.3, n: 8, pos: [0, -0.22, 0], color: '#475569' } ] },
        { id: 'fasci', name: 'Fasci di luce', label: 'Fasci di luce', color: '#facc15', alpha: 0.28, pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>I due fasci girano con la lente come le lancette di un orologio. Chi guarda dal mare vede un <b>lampo</b> ogni volta che un fascio passa verso di lui.</p>',
          more: '<p>Ogni faro ha la sua <b>caratteristica</b>: per esempio "2 lampi bianchi ogni 10 secondi". Sulle carte nautiche è scritta per ogni faro: contando i lampi, il marinaio capisce quale faro sta guardando e quindi dove si trova.</p>',
          shapes: [ beam(0), beam(180) ] },
        { id: 'meccanismo', name: 'Meccanismo di rotazione', label: 'Meccanismo', color: '#b45309', pos: [0, 5.2, 0], explode: [0, -0.2, 1.1],
          info: '<p>Sotto la lente un meccanismo la fa girare lentamente e sempre alla stessa velocità, così i lampi arrivano a tempo giusto.</p>',
          more: '<p>Le grandi lenti pesano tonnellate! Per farle girare con poca forza le si faceva galleggiare su una <b>vasca di mercurio</b> liquido: bastava una piccola spinta per muoverle.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.12, n: 24, color: '#94a3b8' }, { t: 'cyl', r: 0.24, h: 0.03, n: 24, pos: [0, 0.07, 0], color: '#cbd5e1' },
            { t: 'group', pos: [0, 0.1, 0], anim: SPIN, shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 24 }, ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.04, 0.04, 0.03], pos: [0.23 * Math.cos(k * 30 * D), 0, 0.23 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0] })) ] },
            { t: 'group', pos: [0.32, 0.1, 0], anim: { type: 'spin', axis: 'y', dir: -1, rate: 2.75 }, shapes: [ { t: 'cyl', r: 0.08, h: 0.04, n: 14, color: '#d97706' }, { t: 'box', s: [0.14, 0.045, 0.02], color: '#78350f' } ] },
            { t: 'cyl', r: 0.07, h: 0.16, n: 14, pos: [0.32, -0.04, 0], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '🗼', title: 'Un semaforo per le navi', explode: 0,
        html: '<p>Il faro segnala alle navi gli <b>scogli</b> pericolosi e l\'ingresso dei <b>porti</b>. Di giorno si riconosce dai colori e dalla forma, di notte dalla sua luce.</p>' },
      { icon: '📏', title: 'Perché così alto?', focus: ['torre', 'scogli', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.4 },
        html: '<p>La Terra è curva: una luce bassa sparisce dietro l\'orizzonte dopo pochi chilometri. Più la luce è <b>in alto</b>, più lontano si vede. Per questo i fari sono torri alte, spesso su scogliere.</p><p class="tip">🌍 Da 50 metri d\'altezza la luce si vede fino a circa 45 km.</p>' },
      { icon: '🪜', title: 'Dentro la torre', focus: ['scala', 'contrappeso'], explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>Una <b>scala a chiocciola</b> sale fino in cima. Nei fari di una volta, al centro scendeva lentamente un <b>peso</b> che faceva girare la lente, come in un orologio a pendolo. Il guardiano lo ricaricava più volte ogni notte.</p>' },
      { icon: '💡', title: 'La lanterna e la lampada', focus: ['lanterna', 'lampada', 'cupola', 'ballatoio'], explode: 0.3, zoom: 1.2, view: { rx: 0.3, ry: -0.5 },
        html: '<p>In cima c\'è la <b>lanterna</b>, una stanza di vetro. Dentro, la <b>lampada</b>: un tempo una fiamma a olio, oggi una lampada elettrica o dei LED. La <b>cupola</b> la protegge e ha un parafulmine.</p>' },
      { icon: '🔍', title: 'La lente di Fresnel', focus: ['lente', 'lampada', 'fasci'], explode: 0, zoom: 1.25, view: { rx: 0.3, ry: -0.8 },
        html: '<p>La luce di una lampada va in tutte le direzioni e si sprecherebbe. La <b>lente di Fresnel</b>, fatta di anelli di vetro, piega i raggi e li concentra in <b>fasci</b> stretti e potentissimi, visibili a decine di chilometri.</p><p class="tip">🔎 Con una lente d\'ingrandimento puoi concentrare la luce del sole in un puntino: il principio è lo stesso!</p>' },
      { icon: '🔄', title: 'Lampi che girano', focus: ['fasci', 'lente', 'meccanismo'], explode: 0, view: { rx: 0.35, ry: -0.5 },
        html: '<p>Il <b>meccanismo</b> fa girare la lente e i fasci di luce spazzano il mare come le lancette di un orologio. Da una nave si vede un <b>lampo</b> ogni volta che un fascio passa.</p><p>Ogni faro ha il suo ritmo di lampi (la <b>caratteristica</b>): contandoli, i marinai sanno quale faro stanno guardando.</p>' }
    ],
    facts: [
      { icon: '🏛️', title: 'Il Faro di Alessandria', html: 'Il faro più famoso dell\'antichità era sull\'isola di <b>Pharos</b>, ad Alessandria d\'Egitto: alto più di 100 metri, era una delle sette meraviglie del mondo. Da lui viene la parola "faro".' },
      { icon: '🇮🇹', title: 'La Lanterna di Genova', html: 'La <b>Lanterna</b> di Genova, alta 77 metri, è uno dei fari più antichi ancora funzionanti: la torre di oggi è del 1543.' },
      { icon: '📚', title: 'Il guardiano del faro', html: 'Per secoli i fari hanno avuto un <b>guardiano</b> che viveva lì con la famiglia, accendeva la lampada, puliva i vetri e caricava il meccanismo. Oggi quasi tutti i fari sono automatici.' },
      { icon: '📡', title: 'Fari e GPS', html: 'Anche se oggi le navi hanno il GPS, i fari restano accesi: se l\'elettronica si guasta, una luce che lampeggia sulla costa può ancora salvare una nave.' }
    ],
    quiz: [
      { type: 'mc', q: 'Perché i fari sono così alti?', options: ['Per essere più belli', 'Perché la luce in alto si vede più lontano, dato che la Terra è curva', 'Per stare lontani dalle onde', 'Per far salire i turisti'], answer: 1, explain: 'Più la luce è in alto, più tarda a sparire dietro l\'orizzonte curvo.' },
      { type: 'mc', q: 'Che cosa fa la lente di Fresnel?', options: ['Colora la luce', 'Concentra la luce in fasci potenti', 'Spegne la luce di giorno', 'Fa girare il faro'], answer: 1, explain: 'I suoi anelli di vetro piegano i raggi e li raccolgono in fasci stretti.' },
      { type: 'tf', q: 'Ogni faro lampeggia con un ritmo tutto suo, chiamato caratteristica.', answer: true, explain: 'Contando i lampi i marinai riconoscono il faro anche di notte.' },
      { type: 'mc', q: 'Come si faceva girare la lente nei fari antichi?', options: ['Con un motore a benzina', 'Con un peso che scendeva, come in un orologio', 'Con il vento', 'A mano, tutta la notte'], answer: 1, explain: 'Un meccanismo a orologeria, mosso da un peso, faceva girare la lente; il guardiano lo ricaricava.' },
      { type: 'mc', q: 'Quale faro antico era una delle sette meraviglie del mondo?', options: ['La Lanterna di Genova', 'Il faro di Alessandria', 'Il faro di Capo Horn', 'La Torre di Pisa'], answer: 1, explain: 'Il faro sull\'isola di Pharos, ad Alessandria d\'Egitto.' }
    ]
  });
})();
