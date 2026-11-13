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
    lang: 'fr',
    id: 'faro',
    title: 'Le phare',
    intro: 'La nuit, au milieu de la mer, comment les bateaux savent-ils où sont les récifs et où se trouve le port ? Ils regardent les <b>phares</b> ! Chaque phare clignote à sa façon, et une lentille spéciale fait porter sa lumière très loin.',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.22, height: 500, bg: 'sky', floor: false,
      parts: [
        { id: 'scogli', name: 'Falaise', color: '#78716c', explode: [0, -0.6, 0],
          info: '<p>Les phares se construisent là où les bateaux risquent le plus : sur des récifs, des pointes et des îlots, ou à l\'entrée des ports.</p>',
          shapes: [ { t: 'lathe', n: 22, pts: ROCK }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [1.3, -0.1, 0.9], scale: [0.6, 0.35, 0.5], color: '#57534e' }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [-1.4, -0.15, -0.6], scale: [0.7, 0.3, 0.6], color: '#57534e' },
            { t: 'cyl', r: 1.15, h: 0.2, n: 30, pos: [0, 0.08, 0], color: '#d6d3d1' } ] },
        { id: 'mare', name: 'Mer', color: '#0369a1', alpha: 0.35, explode: [0, -0.6, 0], chip: false, noLabel: true,
          info: '<p>La mer autour du phare. La nuit, pour les marins, le phare est comme un panneau routier lumineux.</p>',
          shapes: [ { t: 'cyl', r: 3.4, h: 0.04, n: 40, pos: [0, -0.3, 0] } ] },
        { id: 'torre', name: 'Tour', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>La tour élève la lumière le plus possible : plus elle est haute, plus on la voit de loin, parce que la Terre est courbe. Les <b>bandes</b> colorées la rendent reconnaissable même de jour.</p>',
          more: '<p>D\'une tour haute de 50 mètres, la lumière se voit jusqu\'à environ <b>45 km</b> de distance. Les murs sont très épais à la base (jusqu\'à 2 mètres) pour résister aux vagues et au vent des tempêtes.</p>',
          shapes: [ band(0.1, 1.1), band(1.1, 2.1, '#dc2626'), band(2.1, 3.1), band(3.1, 4.1, '#dc2626'), band(4.1, 5.0),
            { t: 'box', s: [0.32, 0.6, 0.02], pos: [0, 0.42, R(0.42) - 0.01], color: '#3f2a1d', decal: 1 },
            ...[1.6, 2.6, 3.6].map((y, i) => ({ t: 'box', s: [0.12, 0.22, 0.02], pos: [R(y) * Math.sin(i * 70 * D), y, R(y) * Math.cos(i * 70 * D) - 0.01], rot: [0, i * 70, 0], color: '#1e293b', decal: 1 })) ] },
        { id: 'scala', name: 'Escalier en colimaçon', label: 'Escalier', color: '#a8a29e', explode: [1.5, 0, 0],
          info: '<p>À l\'intérieur de la tour, un long <b>escalier en colimaçon</b> monte jusqu\'à la lanterne. Le gardien du phare le montait plusieurs fois chaque nuit.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 4.9, n: 12, pos: [0, 2.55, 0], color: '#78716c' } ].concat(steps) },
        { id: 'contrappeso', name: 'Poids de l\'horlogerie', label: 'Poids', color: '#334155', explode: [1.5, 0, 0],
          info: '<p>Dans les anciens phares, il n\'y avait pas de moteur électrique : un <b>poids</b> suspendu à une corde descendait lentement dans la tour et, comme dans une horloge à balancier, faisait tourner la lentille.</p>',
          more: '<p>Le gardien devait « remonter » le mécanisme en tournant une manivelle et en tirant le poids vers le haut, parfois toutes les 2 à 4 heures pendant toute la nuit. Aujourd\'hui, le travail est fait par un petit moteur électrique et le phare est presque toujours automatique.</p>',
          shapes: [ { t: 'cyl', r: 0.006, h: 4.5, n: 4, pos: [0, 2.75, 0.15], color: '#1f2937' },
            { t: 'cyl', r: 0.07, h: 0.3, n: 12, pos: [0, 4.4, 0.15], anim: { type: 'move', dir: [0, -1, 0], amp: 3.6, wave: 'saw', rate: 0.05 } } ] },
        { id: 'ballatoio', name: 'Galerie', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>La petite terrasse qui fait le tour de la lanterne. De là, le gardien nettoyait les vitres du sel et de la neige, pour que la lumière sorte toujours bien forte.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.1, n: 32, pos: [0, 5.02, 0] }, { t: 'torus', R: 0.97, r: 0.02, n: 40, m: 4, pos: [0, 5.38, 0] },
            ...Array.from({ length: 16 }, (_, k) => ({ t: 'cyl', r: 0.012, h: 0.32, n: 4, pos: [0.97 * Math.cos(k * 22.5 * D), 5.22, 0.97 * Math.sin(k * 22.5 * D)] })),
            ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.12, 0.2, 0.08], pos: [0.88 * Math.cos(k * 30 * D), 4.88, 0.88 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0], color: '#e5e7eb' })) ] },
        { id: 'lanterna', name: 'Lanterne (pièce de verre)', label: 'Lanterne', color: '#bae6fd', alpha: 0.22, explode: [0, 0.75, 0],
          info: '<p>La pièce de verre tout en haut, où se trouve la lumière. Les vitres sont épaisses pour résister au vent, à la pluie… et aux oiseaux qui s\'y cognent la nuit !</p>',
          shapes: [ { t: 'cyl', r: 0.6, h: 0.82, n: 32, pos: [0, 5.66, 0], ds: true }, { t: 'tube', r: 0.64, ri: 0.58, h: 0.25, n: 32, pos: [0, 5.18, 0], color: '#f8fafc', alpha: 1 },
            ...Array.from({ length: 8 }, (_, k) => ({ t: 'cyl', r: 0.018, h: 0.82, n: 5, pos: [0.6 * Math.cos(k * 45 * D), 5.66, 0.6 * Math.sin(k * 45 * D)], color: '#1f2937', alpha: 1 })) ] },
        { id: 'cupola', name: 'Coupole', color: '#991b1b', explode: [0, 1.2, 0],
          info: '<p>Le « chapeau » de cuivre de la lanterne. Au sommet, il y a une <b>cheminée</b> pour évacuer la chaleur de la lampe et un <b>paratonnerre</b> : le phare est le point le plus haut de la côte !</p>',
          shapes: [ { t: 'sphere', r: 0.66, n: 10, m: 28, hemi: true, pos: [0, 6.07, 0], scale: [1, 0.7, 1] }, { t: 'cyl', r: 0.68, h: 0.05, n: 32, pos: [0, 6.08, 0], color: '#7f1d1d' },
            { t: 'sphere', r: 0.11, n: 8, m: 12, pos: [0, 6.6, 0], color: '#1f2937' }, { t: 'cyl', r: 0.012, h: 0.45, n: 4, pos: [0, 6.9, 0], color: '#475569' },
            { t: 'group', pos: [0, 6.95, 0], anim: { type: 'swing', axis: 'y', amp: 25, rate: 0.15 }, shapes: [ { t: 'extrude', d: 0.01, pts: [[0, 0], [0.25, 0.03], [0.25, -0.05], [0, -0.03]], color: '#475569' } ] } ] },
        { id: 'lente', name: 'Lentille de Fresnel', label: 'Lentille de Fresnel', color: '#a5f3fc', pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>C\'est le « superpouvoir » du phare : une cage de verres taillés en anneaux, inventée par <b>Augustin Fresnel</b> en 1822. Elle recueille la lumière qui part dans toutes les directions et la concentre en <b>faisceaux</b> étroits et très puissants.</p>',
          more: '<p>Une lentille normale aussi grande serait épaisse et très lourde. Fresnel a eu l\'idée de la « découper » en anneaux concentriques, en gardant seulement les surfaces courbes qui dévient la lumière (<b>réfraction</b>) : même fonction, beaucoup moins de verre. En haut et en bas, il y a aussi des prismes qui la réfléchissent. Les mêmes lentilles minces sont utilisées dans les projecteurs et les phares de voiture.</p>',
          shapes: [ bullseye(0), bullseye(180), { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, 0.38, 0], color: '#b45309' }, { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, -0.38, 0], color: '#b45309' },
            ...[0.22, 0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })), ...[-0.22, -0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })) ] },
        { id: 'lampada', name: 'Lampe', color: '#fde047', pos: [0, LY, 0], explode: [0, 0, 0.8],
          info: '<p>Au centre de la lentille se trouve la source de lumière. Autrefois, c\'était une flamme à huile ou à pétrole ; aujourd\'hui, c\'est une lampe électrique ou un groupe de <b>LED</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 3 } }, { t: 'sphere', r: 0.17, n: 8, m: 12, color: '#fef08a', alpha: 0.35 },
            { t: 'cyl', r: 0.03, h: 0.3, n: 8, pos: [0, -0.22, 0], color: '#475569' } ] },
        { id: 'fasci', name: 'Faisceaux de lumière', label: 'Faisceaux de lumière', color: '#facc15', alpha: 0.28, pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>Les deux faisceaux tournent avec la lentille comme les aiguilles d\'une horloge. Celui qui regarde depuis la mer voit un <b>éclat</b> chaque fois qu\'un faisceau passe vers lui.</p>',
          more: '<p>Chaque phare a sa <b>caractéristique</b> : par exemple « 2 éclats blancs toutes les 10 secondes ». Elle est écrite pour chaque phare sur les cartes marines : en comptant les éclats, le marin comprend quel phare il regarde et donc où il se trouve.</p>',
          shapes: [ beam(0), beam(180) ] },
        { id: 'meccanismo', name: 'Mécanisme de rotation', label: 'Mécanisme', color: '#b45309', pos: [0, 5.2, 0], explode: [0, -0.2, 1.1],
          info: '<p>Sous la lentille, un mécanisme la fait tourner lentement et toujours à la même vitesse, pour que les éclats arrivent au bon moment.</p>',
          more: '<p>Les grandes lentilles pèsent des tonnes ! Pour les faire tourner avec peu de force, on les faisait flotter sur un <b>bain de mercure</b> liquide : une petite poussée suffisait à les mettre en mouvement.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.12, n: 24, color: '#94a3b8' }, { t: 'cyl', r: 0.24, h: 0.03, n: 24, pos: [0, 0.07, 0], color: '#cbd5e1' },
            { t: 'group', pos: [0, 0.1, 0], anim: SPIN, shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 24 }, ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.04, 0.04, 0.03], pos: [0.23 * Math.cos(k * 30 * D), 0, 0.23 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0] })) ] },
            { t: 'group', pos: [0.32, 0.1, 0], anim: { type: 'spin', axis: 'y', dir: -1, rate: 2.75 }, shapes: [ { t: 'cyl', r: 0.08, h: 0.04, n: 14, color: '#d97706' }, { t: 'box', s: [0.14, 0.045, 0.02], color: '#78350f' } ] },
            { t: 'cyl', r: 0.07, h: 0.16, n: 14, pos: [0.32, -0.04, 0], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '🗼', title: 'Un feu tricolore pour les bateaux', explode: 0,
        html: '<p>Le phare signale aux bateaux les <b>récifs</b> dangereux et l\'entrée des <b>ports</b>. De jour, on le reconnaît à ses couleurs et à sa forme, de nuit à sa lumière.</p>' },
      { icon: '📏', title: 'Pourquoi si haut ?', focus: ['torre', 'scogli', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.4 },
        html: '<p>La Terre est courbe : une lumière basse disparaît derrière l\'horizon après quelques kilomètres. Plus la lumière est <b>haute</b>, plus on la voit de loin. C\'est pourquoi les phares sont des tours élevées, souvent sur des falaises.</p><p class="tip">🌍 À 50 mètres de hauteur, la lumière se voit jusqu\'à environ 45 km.</p>' },
      { icon: '🪜', title: 'À l\'intérieur de la tour', focus: ['scala', 'contrappeso'], explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>Un <b>escalier en colimaçon</b> monte jusqu\'en haut. Dans les phares d\'autrefois, au centre descendait lentement un <b>poids</b> qui faisait tourner la lentille, comme dans une horloge à balancier. Le gardien le remontait plusieurs fois chaque nuit.</p>' },
      { icon: '💡', title: 'La lanterne et la lampe', focus: ['lanterna', 'lampada', 'cupola', 'ballatoio'], explode: 0.3, zoom: 1.2, view: { rx: 0.3, ry: -0.5 },
        html: '<p>Tout en haut se trouve la <b>lanterne</b>, une pièce de verre. À l\'intérieur, la <b>lampe</b> : autrefois une flamme à huile, aujourd\'hui une lampe électrique ou des LED. La <b>coupole</b> la protège et porte un paratonnerre.</p>' },
      { icon: '🔍', title: 'La lentille de Fresnel', focus: ['lente', 'lampada', 'fasci'], explode: 0, zoom: 1.25, view: { rx: 0.3, ry: -0.8 },
        html: '<p>La lumière d\'une lampe part dans toutes les directions et serait gaspillée. La <b>lentille de Fresnel</b>, faite d\'anneaux de verre, dévie les rayons et les concentre en <b>faisceaux</b> étroits et très puissants, visibles à des dizaines de kilomètres.</p><p class="tip">🔎 Avec une loupe, tu peux concentrer la lumière du soleil en un petit point : le principe est le même !</p>' },
      { icon: '🔄', title: 'Des éclats qui tournent', focus: ['fasci', 'lente', 'meccanismo'], explode: 0, view: { rx: 0.35, ry: -0.5 },
        html: '<p>Le <b>mécanisme</b> fait tourner la lentille et les faisceaux de lumière balaient la mer comme les aiguilles d\'une horloge. D\'un bateau, on voit un <b>éclat</b> chaque fois qu\'un faisceau passe.</p><p>Chaque phare a son rythme d\'éclats (la <b>caractéristique</b>) : en les comptant, les marins savent quel phare ils regardent.</p>' }
    ],
    facts: [
      { icon: '🏛️', title: 'Le phare d\'Alexandrie', html: 'Le phare le plus célèbre de l\'Antiquité se trouvait sur l\'île de <b>Pharos</b>, à Alexandrie, en Égypte : haut de plus de 100 mètres, c\'était l\'une des sept merveilles du monde. C\'est de lui que vient le mot « phare ».' },
      { icon: '🇮🇹', title: 'La Lanterna de Gênes', html: 'La <b>Lanterna</b> de Gênes, haute de 77 mètres, est l\'un des plus anciens phares encore en fonctionnement : la tour actuelle date de 1543.' },
      { icon: '📚', title: 'Le gardien du phare', html: 'Pendant des siècles, les phares ont eu un <b>gardien</b> qui y vivait avec sa famille, allumait la lampe, nettoyait les vitres et remontait le mécanisme. Aujourd\'hui, presque tous les phares sont automatiques.' },
      { icon: '📡', title: 'Phares et GPS', html: 'Même si aujourd\'hui les bateaux ont le GPS, les phares restent allumés : si l\'électronique tombe en panne, une lumière qui clignote sur la côte peut encore sauver un bateau.' }
    ],
    quiz: [
      { type: 'mc', q: 'Pourquoi les phares sont-ils si hauts ?', options: ['Pour être plus beaux', 'Parce qu\'une lumière en hauteur se voit de plus loin, puisque la Terre est courbe', 'Pour rester loin des vagues', 'Pour faire monter les touristes'], answer: 1, explain: 'Plus la lumière est haute, plus elle met de temps à disparaître derrière l\'horizon courbe.' },
      { type: 'mc', q: 'Que fait la lentille de Fresnel ?', options: ['Elle colore la lumière', 'Elle concentre la lumière en faisceaux puissants', 'Elle éteint la lumière de jour', 'Elle fait tourner le phare'], answer: 1, explain: 'Ses anneaux de verre dévient les rayons et les rassemblent en faisceaux étroits.' },
      { type: 'tf', q: 'Chaque phare clignote avec un rythme bien à lui, appelé caractéristique.', answer: true, explain: 'En comptant les éclats, les marins reconnaissent le phare même de nuit.' },
      { type: 'mc', q: 'Comment faisait-on tourner la lentille dans les anciens phares ?', options: ['Avec un moteur à essence', 'Avec un poids qui descendait, comme dans une horloge', 'Avec le vent', 'À la main, toute la nuit'], answer: 1, explain: 'Un mécanisme d\'horlogerie, mû par un poids, faisait tourner la lentille ; le gardien le remontait.' },
      { type: 'mc', q: 'Quel phare antique était l\'une des sept merveilles du monde ?', options: ['La Lanterna de Gênes', 'Le phare d\'Alexandrie', 'Le phare du cap Horn', 'La tour de Pise'], answer: 1, explain: 'Le phare de l\'île de Pharos, à Alexandrie, en Égypte.' }
    ]
  });
})();
