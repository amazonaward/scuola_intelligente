/* Il telescopio riflettore (tipo Newton) su montatura altazimutale a forcella e treppiede.
   Il tubo è descritto lungo x (x+ = bocca del tubo); viene inclinato di 32° e ruota piano intorno all'asse verticale. */
(function () {
  const PIV = [0, 2.45, 0], TILT = 32;
  const PAN = { type: 'swing', axis: 'y', amp: 28, rate: 0.22 };
  const TILTA = { type: 'swing', axis: 'z', amp: 6, rate: 0.22, phase: 0.25 };
  /* tutto ciò che sta sul tubo segue la rotazione (stesse animazioni in tutti i pezzi) */
  const onTube = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes: [ { t: 'group', rot: [0, 0, TILT], anim: TILTA, shapes } ] } ];
  const onFork = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes } ];
  const R = 0.42, X0 = -1.7, X1 = 1.7, SEC = 1.12;
  const RAYS = [0.27, -0.27, 0.14, -0.14];
  const photons = [];
  RAYS.forEach((y, i) => { for (let k = 0; k < 5; k++) photons.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [3.0, y, 0], color: '#fde047',
    anim: { type: 'path', pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], wave: 'saw', rate: 0.9, phase: k / 5 + i * 0.07 } }); });
  const rayLines = RAYS.map((y) => ({ t: 'pipe', r: 0.008, n: 5, pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], color: '#fde68a', alpha: 0.45 }));

  LIBRARY({
    id: 'telescopio',
    title: 'Il telescopio',
    intro: 'Un telescopio è un "imbuto per la luce": raccoglie tantissima luce con uno <b>specchio</b> o una <b>lente</b> grande e la concentra nel nostro occhio. Così vediamo oggetti deboli e lontani, come i crateri della Luna o gli anelli di Saturno.',
    model: {
      rx: 0.18, ry: -0.35, speed: 0.4, height: 480, fit: 1.05,
      parts: [
        { id: 'tubo', name: 'Tubo ottico', label: 'Tubo', color: '#e2e8f0', alpha: 0.28, explode: [0, 0.5, 0.9],
          info: '<p>Il tubo tiene gli specchi alla distanza giusta e li ripara dalla luce che arriva di lato, dalla polvere e dall\'umidità della notte.</p>',
          more: '<p>La distanza tra lo specchio principale e il punto in cui la luce si concentra si chiama <b>lunghezza focale</b>. Dividendo la focale del telescopio per quella dell\'oculare si ottiene l\'<b>ingrandimento</b>: 1000 mm ÷ 10 mm = 100 volte.</p>',
          shapes: onTube([ { t: 'cyl', r: R, h: X1 - X0, n: 36, rot: [0, 0, 90], open: true, ds: true },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.12, n: 36, rot: [0, 0, 90], pos: [X1 - 0.06, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.1, n: 36, rot: [0, 0, 90], pos: [X0 + 0.05, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'cyl', r: R + 0.03, h: 0.04, n: 36, rot: [0, 0, 90], pos: [X0 - 0.02, 0, 0], color: '#334155', alpha: 1 } ]) },
        { id: 'specchio-primario', name: 'Specchio principale', label: 'Specchio principale', color: '#cbd5e1', explode: [-1.0, -0.5, 0],
          info: '<p>È il cuore del telescopio: uno specchio <b>curvo</b> (concavo) in fondo al tubo. Raccoglie la luce delle stelle e la rimanda indietro facendola <b>convergere</b> in un punto, il fuoco.</p>',
          more: '<p>La superficie è una <b>parabola</b> precisa a meno di un decimillesimo di millimetro, ricoperta da un velo di alluminio. Più è grande lo specchio, più luce raccoglie: uno specchio di 20 cm raccoglie circa <b>800 volte</b> la luce del nostro occhio.</p>',
          shapes: onTube([ { t: 'lathe', n: 36, rot: [0, 0, -90], pos: [-1.5, 0, 0], pts: [[0, 0.0], [0.2, 0.012], [0.38, 0.045], [0.38, -0.06], [0, -0.06]], color: '#e0f2fe' },
            { t: 'cyl', r: 0.4, h: 0.08, n: 30, rot: [0, 0, 90], pos: [-1.6, 0, 0], color: '#475569' },
            { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, 0.25, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, -0.25, 0], color: '#94a3b8' } ]) },
        { id: 'specchio-secondario', name: 'Specchio secondario', label: 'Specchio secondario', color: '#e0f2fe', explode: [0.4, 0.9, 0.5],
          info: '<p>Un piccolo specchio piatto, inclinato di 45°, vicino alla bocca del tubo. Devia la luce di lato, verso l\'<b>oculare</b>, così non ci mettiamo con la testa davanti al tubo!</p>',
          more: '<p>È tenuto al centro da sottili bracci di metallo, la <b>"crociera"</b> (spider). Sono loro a creare le "punte" a croce che si vedono nelle foto delle stelle luminose.</p>',
          shapes: onTube([ { t: 'group', pos: [SEC, 0, 0], shapes: [ { t: 'cyl', r: 0.1, h: 0.025, n: 24, rot: [0, 0, 45] },
            { t: 'cyl', r: 0.05, h: 0.18, n: 14, rot: [0, 0, 90], pos: [0.11, 0, 0], color: '#334155' } ] },
            { t: 'box', s: [0.015, R * 2 - 0.02, 0.012], pos: [SEC + 0.15, 0, 0], color: '#334155' },
            { t: 'box', s: [0.015, 0.012, R * 2 - 0.02], pos: [SEC + 0.15, 0, 0], color: '#334155' } ]) },
        { id: 'oculare', name: 'Oculare', color: '#1f2937', explode: [0.2, 1.2, 0],
          info: '<p>È la "lente d\'ingrandimento" dove si appoggia l\'occhio. Prende l\'immagine piccolina formata dagli specchi e la <b>ingrandisce</b>.</p>',
          more: '<p>Gli oculari si cambiano: uno con focale corta (es. 6 mm) ingrandisce di più, uno con focale lunga (25 mm) mostra un pezzo di cielo più grande e luminoso. Troppo ingrandimento rende l\'immagine scura e tremolante.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.09, h: 0.24, n: 20, pos: [SEC, R + 0.28, 0], color: '#1f2937' },
            { t: 'cyl', r: 0.11, h: 0.08, n: 20, pos: [SEC, R + 0.43, 0], color: '#111827' },
            { t: 'cyl', r: 0.065, h: 0.02, n: 16, pos: [SEC, R + 0.475, 0], color: '#0ea5e9', decal: 1 },
            { t: 'torus', R: 0.1, r: 0.012, n: 20, m: 6, pos: [SEC, R + 0.25, 0], color: '#64748b' } ]) },
        { id: 'focheggiatore', name: 'Focheggiatore (messa a fuoco)', label: 'Messa a fuoco', color: '#64748b', explode: [0.6, 0.9, -0.4],
          info: '<p>Un tubetto che sale e scende girando due <b>manopole</b>: sposta l\'oculare finché l\'immagine diventa nitida, proprio come quando metti a fuoco un binocolo.</p>',
          shapes: onTube([ { t: 'box', s: [0.32, 0.12, 0.3], pos: [SEC, R + 0.03, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.14, n: 18, pos: [SEC, R + 0.14, 0], color: '#94a3b8' },
            { t: 'group', pos: [SEC, R + 0.05, 0], anim: { type: 'swing', axis: 'z', amp: 60, rate: 0.5 }, shapes: [
              { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.22], color: '#111827' }, { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, -0.22], color: '#111827' },
              { t: 'cyl', r: 0.015, h: 0.42, n: 8, rot: [90, 0, 0], color: '#94a3b8' } ] } ]) },
        { id: 'cercatore', name: 'Cercatore', color: '#f1f5f9', explode: [0, 0.9, -0.9],
          info: '<p>Un piccolo cannocchiale montato sul tubo. Vede un pezzo di cielo grande e serve a <b>puntare</b> il telescopio sull\'oggetto giusto, come un mirino.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.07, h: 0.6, n: 20, rot: [0, 0, 90], pos: [0.85, R + 0.22, -0.2] },
            { t: 'cyl', r: 0.085, h: 0.12, n: 20, rot: [0, 0, 90], pos: [1.18, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'cyl', r: 0.04, h: 0.1, n: 14, rot: [0, 0, 90], pos: [0.52, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'box', s: [0.06, 0.16, 0.04], pos: [0.7, R + 0.1, -0.15], color: '#64748b' }, { t: 'box', s: [0.06, 0.16, 0.04], pos: [1.0, R + 0.1, -0.15], color: '#64748b' } ]) },
        { id: 'luce', name: 'Percorso della luce', label: 'Luce delle stelle', color: '#fde047', chip: true,
          info: '<p>La luce di una stella entra nella bocca del tubo, scende fino allo specchio grande, viene <b>riflessa e concentrata</b> verso lo specchietto e infine esce di lato, nell\'oculare.</p>',
          more: '<p>I raggi che arrivano da una stella lontanissima sono praticamente <b>paralleli</b>. Lo specchio parabolico li fa convergere tutti nello stesso punto: il <b>fuoco</b>. Lì si forma una piccola immagine capovolta.</p>',
          shapes: onTube(rayLines.concat(photons)) },
        { id: 'montatura', name: 'Montatura a forcella', label: 'Montatura', color: '#475569', explode: [0, -0.2, 0],
          info: '<p>Regge il tubo e permette di girarlo in due direzioni: <b>destra-sinistra</b> (azimut) e <b>su-giù</b> (altezza). Va mossa con delicatezza: a 100 ingrandimenti un millimetro sposta tutto!</p>',
          more: '<p>La Terra gira, quindi le stelle "scappano" dal campo visivo. Molte montature hanno dei <b>motori</b> che seguono il cielo da soli; quelle "equatoriali" hanno un asse parallelo all\'asse terrestre.</p>',
          shapes: onFork([ { t: 'cyl', r: 0.36, h: 0.14, n: 30, pos: [0, -0.62, 0], color: '#334155' },
            { t: 'box', s: [0.34, 0.12, 1.24], pos: [0, -0.5, 0] },
            { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, 0.62] }, { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, -0.62] },
            { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.68], color: '#111827' }, { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.68], color: '#111827' } ])
            .concat(onTube([ { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [0.45, 0, 0] }, { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [-0.45, 0, 0] },
              { t: 'cyl', r: 0.05, h: 1.18, n: 14, rot: [90, 0, 0], color: '#64748b' } ]),
            [ { t: 'cyl', r: 0.3, h: 0.16, n: 30, pos: [0, 1.73, 0], color: '#334155' } ]) },
        { id: 'treppiede', name: 'Treppiede', color: '#94a3b8', explode: [0, -0.6, 0],
          info: '<p>Tre gambe robuste: con tre appoggi un oggetto <b>non traballa mai</b>, nemmeno su un prato irregolare. Un telescopio deve stare fermissimo.</p>',
          shapes: [ { t: 'cyl', r: 0.24, h: 0.2, n: 24, pos: [0, 1.56, 0], color: '#475569' } ].concat([0, 120, 240].map((a) => {
            const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180);
            return { t: 'group', shapes: [ { t: 'pipe', r: 0.045, n: 10, pts: [[0.2 * c, 1.5, 0.2 * s], [1.25 * c, 0.05, 1.25 * s]] },
              { t: 'pipe', r: 0.032, n: 10, pts: [[0.75 * c, 0.75, 0.75 * s], [1.25 * c, 0.05, 1.25 * s]], color: '#e2e8f0' },
              { t: 'sphere', r: 0.06, n: 8, pos: [1.25 * c, 0.04, 1.25 * s], color: '#1f2937' } ] };
          })) },
        { id: 'vassoio', name: 'Vassoio degli oculari', label: 'Vassoio', color: '#64748b', explode: [0, -0.3, 0.6],
          info: '<p>Un ripiano tra le gambe che tiene il treppiede rigido e porta gli <b>oculari di ricambio</b>, per cambiare ingrandimento.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 0.05, n: 3, pos: [0, 0.78, 0], phase: 30 } ].concat([0, 120, 240].map((a) => ({ t: 'cyl', r: 0.07, h: 0.14, n: 16, pos: [0.25 * Math.cos((a + 60) * Math.PI / 180), 0.86, 0.25 * Math.sin((a + 60) * Math.PI / 180)], color: '#111827' }))) }
      ]
    },
    steps: [
      { icon: '🔭', title: 'Un imbuto per la luce', explode: 0,
        html: '<p>Le stelle sono lontanissime e ci manda pochissima luce. La pupilla del nostro occhio è larga solo pochi millimetri; un telescopio ha uno specchio grande come un piatto: raccoglie <b>centinaia di volte più luce</b> e ci fa vedere cose invisibili a occhio nudo.</p>' },
      { icon: '✨', title: 'La luce entra nel tubo', focus: ['luce', 'tubo'], view: { rx: 0.1, ry: 0 }, zoom: 1.15,
        html: '<p>I raggi di luce di una stella arrivano <b>paralleli</b>, entrano dalla bocca aperta del tubo e scendono fino in fondo.</p>' },
      { icon: '🪞', title: 'Lo specchio curvo concentra', focus: ['specchio-primario', 'luce', 'tubo'], view: { rx: 0.1, ry: 0.2 }, zoom: 1.2,
        html: '<p>In fondo c\'è lo <b>specchio principale</b>, curvo come l\'interno di un cucchiaio. Riflette i raggi e li fa <b>convergere</b> tutti verso un punto: il <b>fuoco</b>.</p><p class="tip">🥄 Guarda dentro un cucchiaio lucido: anche lui è uno specchio concavo!</p>' },
      { icon: '↗️', title: 'Lo specchietto devia la luce', focus: ['specchio-secondario', 'luce', 'oculare'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.2,
        html: '<p>Prima che i raggi arrivino al fuoco, lo <b>specchio secondario</b> inclinato di 45° li manda di lato, fuori dal tubo. Questo tipo di telescopio l\'ha inventato <b>Isaac Newton</b> nel 1668.</p>' },
      { icon: '👁️', title: 'L\'oculare ingrandisce', focus: ['oculare', 'focheggiatore', 'luce'], view: { rx: 0.3, ry: -0.4 }, zoom: 1.25,
        html: '<p>L\'<b>oculare</b> è una piccola lente d\'ingrandimento: guarda l\'immagine al fuoco e la fa sembrare grande. Con le manopole del <b>focheggiatore</b> si mette a fuoco finché le stelle diventano puntini nitidi.</p><p class="tip">🙃 Al telescopio la Luna appare spesso capovolta: per l\'astronomia non importa!</p>' },
      { icon: '🎯', title: 'Puntare e seguire il cielo', focus: ['cercatore', 'montatura', 'treppiede', 'vassoio'], explode: 0.25,
        html: '<p>Con il <b>cercatore</b> si mira l\'oggetto, poi la <b>montatura</b> permette di girare il tubo a destra-sinistra e su-giù. Il <b>treppiede</b> tiene tutto fermo: anche un piccolo tremolio sembra un terremoto quando si ingrandisce 100 volte.</p>' },
      { icon: '🌌', title: 'Lenti o specchi?', explode: 0,
        html: '<p>Esistono due grandi famiglie: i <b>rifrattori</b> usano una lente davanti (come il cannocchiale di <b>Galileo</b>, 1609), i <b>riflettori</b> uno specchio in fondo (come questo). I telescopi più grandi del mondo sono tutti a specchio: è più facile costruire uno specchio enorme che una lente enorme.</p>' }
    ],
    facts: [
      { icon: '🌙', title: 'Galileo e la Luna', html: 'Nel 1609 <b>Galileo Galilei</b> puntò il cannocchiale al cielo e scoprì i crateri della Luna, le fasi di Venere e quattro lune di Giove.' },
      { icon: '🏔️', title: 'In cima alle montagne', html: 'I grandi osservatori si costruiscono su montagne alte e deserte, come in Cile o alle Canarie: lì l\'aria è più sottile, secca e ferma.' },
      { icon: '🛰️', title: 'Telescopi nello spazio', html: 'Il telescopio <b>James Webb</b> ha uno specchio di 6,5 metri fatto di 18 esagoni dorati e osserva l\'universo dallo spazio, lontano dall\'aria che fa tremolare le stelle.' },
      { icon: '⏳', title: 'Guardare nel passato', html: 'La luce viaggia veloce ma non all\'infinito: la stella che vedi stanotte potrebbe aver emesso quella luce <b>secoli fa</b>. Un telescopio è una macchina del tempo!' },
      { icon: '⚠️', title: 'Mai il Sole!', html: 'Non guardare <b>mai</b> il Sole con un telescopio o un binocolo senza un filtro speciale: la luce concentrata può danneggiare l\'occhio in un istante.' }
    ],
    quiz: [
      { type: 'mc', q: 'Che cosa fa lo specchio principale di un telescopio riflettore?', options: ['Colora la luce', 'Raccoglie la luce e la concentra nel fuoco', 'Produce luce', 'Blocca la luce della Luna'], answer: 1, explain: 'È concavo: riflette i raggi paralleli facendoli convergere nel fuoco.' },
      { type: 'mc', q: 'Chi inventò il telescopio a specchio?', options: ['Galileo Galilei', 'Isaac Newton', 'Albert Einstein', 'Leonardo da Vinci'], answer: 1, explain: 'Newton costruì il primo riflettore nel 1668. Galileo usava un cannocchiale a lenti.' },
      { type: 'mc', q: 'A che cosa serve il cercatore?', options: ['A mettere a fuoco', 'A puntare il telescopio sull\'oggetto giusto', 'A ingrandire di più', 'A raffreddare lo specchio'], answer: 1, explain: 'È un piccolo cannocchiale con un campo largo, usato come mirino.' },
      { type: 'tf', q: 'Si può guardare il Sole con un telescopio senza filtro, se lo si fa per poco.', answer: false, explain: 'Mai! La luce concentrata danneggia l\'occhio all\'istante. Servono filtri solari certificati.' },
      { type: 'num', q: 'Un telescopio ha focale 1200 mm e l\'oculare 12 mm. Quanti ingrandimenti dà?', answer: 100, unit: '×', explain: '1200 ÷ 12 = 100 ingrandimenti.' },
      { type: 'mc', q: 'Perché un telescopio fa vedere stelle invisibili a occhio nudo?', options: ['Perché si avvicina alle stelle', 'Perché raccoglie molta più luce dell\'occhio', 'Perché accende le stelle', 'Perché filtra le nuvole'], answer: 1, explain: 'Lo specchio ha un\'area enorme rispetto alla pupilla: raccoglie molta più luce.' }
    ]
  });
})();
