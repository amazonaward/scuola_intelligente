/* L'occhio umano. Il bulbo guarda verso +x (la luce arriva da destra, da un alberello); la sclera è semitrasparente per vedere dentro.
   I solidi "di rotazione" sono costruiti lungo y e girati di −90° intorno a z (così y diventa x). */
(function () {
  const AX = [0, 0, -90];
  const arc = (r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; return [Math.max(0, r * Math.cos(a)), r * Math.sin(a)]; });
  const tree = (s) => [ { t: 'cyl', r: 0.06 * s, h: 0.4 * s, n: 10, pos: [0, 0.2 * s, 0], color: '#92400e' }, { t: 'cone', r: 0.32 * s, h: 0.55 * s, n: 16, pos: [0, 0.65 * s, 0], color: '#16a34a' }, { t: 'cone', r: 0.24 * s, h: 0.42 * s, n: 16, pos: [0, 0.95 * s, 0], color: '#22c55e' } ];
  const TOP = [4.2, 1.05, 0], BASE = [4.2, -0.4, 0];
  const RAYS = [ [TOP, [1.33, 0.3, 0], [0.86, 0.17, 0], [-1.06, -0.24, 0]], [TOP, [1.3, 0.05, 0.12], [0.86, 0.02, 0.08], [-1.06, -0.24, 0]], [BASE, [1.33, -0.25, 0], [0.86, -0.15, 0], [-1.06, 0.12, 0]], [BASE, [1.3, 0.02, -0.12], [0.86, 0.0, -0.08], [-1.06, 0.12, 0]] ];
  const rayShapes = [];
  RAYS.forEach((pts, i) => {
    rayShapes.push({ t: 'pipe', r: 0.01, n: 5, pts, color: i < 2 ? '#fde047' : '#fb923c', alpha: 0.55 });
    for (let k = 0; k < 4; k++) rayShapes.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: pts[0], color: i < 2 ? '#fde047' : '#fb923c', anim: { type: 'path', pts, wave: 'saw', rate: 0.7, phase: k / 4 + i * 0.1 } });
  });
  const NERVE = [[-1.12, -0.06, -0.24], [-1.6, -0.08, -0.3], [-2.2, -0.05, -0.32], [-2.9, 0.05, -0.3]];
  const vessels = [[[-1.07, -0.04, -0.22], [-0.95, 0.45, -0.3], [-0.7, 0.75, -0.4]], [[-1.07, -0.04, -0.22], [-0.9, -0.5, -0.35], [-0.65, -0.8, -0.35]], [[-1.07, -0.04, -0.22], [-0.85, 0.35, 0.45], [-0.55, 0.55, 0.75]], [[-1.07, -0.04, -0.22], [-0.85, -0.45, 0.4], [-0.6, -0.65, 0.65]]]
    .map((pts) => ({ t: 'pipe', r: 0.016, n: 5, curve: true, pts, color: '#b91c1c' }));
  const muscle = (rot) => ({ t: 'group', rot, shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[-2.1, 0.22, 0], [-1.25, 0.9, 0], [-0.3, 1.25, 0], [0.45, 1.16, 0]], scale: [1, 1, 1.7] } ] });

  LIBRARY({
    lang: 'fr',
    id: 'occhio',
    title: 'L\'œil',
    intro: 'L\'œil est un <b>appareil photo naturel</b> : une petite boule grosse comme une noix qui recueille la lumière, la met au point avec une lentille et la transforme en signaux pour le cerveau. Suivons la lumière à l\'intérieur de l\'œil !',
    model: {
      rx: 0.18, ry: -0.42, speed: 0.4, height: 470, bg: 'body', fit: 1.0,
      parts: [
        { id: 'sclera', name: 'Sclérotique (le blanc de l\'œil)', label: 'Sclérotique', color: '#f8fafc', alpha: 0.3, explode: [-0.4, 0, -1.2],
          info: '<p>La « paroi » blanche et solide qui enveloppe l\'œil et lui donne sa forme de boule. C\'est le <b>blanc de l\'œil</b>.</p>',
          more: '<p>Sous la sclérotique se trouve la <b>choroïde</b>, une couche pleine de vaisseaux sanguins qui nourrit la rétine et qui est sombre pour ne pas faire « rebondir » la lumière à l\'intérieur de l\'œil, comme l\'intérieur noir d\'un appareil photo.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.2]].concat(arc(1.2, -88, 63, 18)), ds: true } ] },
        { id: 'cornea', name: 'Cornée', color: '#bae6fd', alpha: 0.25, explode: [1.0, 0, 0],
          info: '<p>La « fenêtre » transparente à l\'avant de l\'œil, bombée comme le verre d\'une montre. C\'est la première lentille que la lumière traverse : elle fait déjà une grande partie de la mise au point.</p>',
          more: '<p>La cornée n\'a pas de vaisseaux sanguins (pour être transparente !) : elle reçoit l\'oxygène directement de l\'air et des larmes. Les opérations au laser pour ne plus porter de lunettes changent un peu sa courbure.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pos: [0, 0, 0], pts: arc(0.71, 39, 90, 8).map(([r, y]) => [r, y + 0.62]), ds: true } ] },
        { id: 'iride', name: 'Iris', color: '#2563eb', explode: [0.7, 0.4, 0.4],
          info: '<p>Le « disque coloré » de l\'œil : bleu, vert, marron… C\'est un petit muscle qui <b>agrandit ou rétrécit la pupille</b> pour laisser entrer plus ou moins de lumière.</p>',
          more: '<p>La couleur dépend de la quantité de <b>mélanine</b> : beaucoup = yeux marron, peu = yeux bleus. Le dessin de l\'iris est unique pour chaque personne, plus encore que les empreintes digitales.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.03, n: 36, rot: AX, pos: [1.0, 0, 0] }, { t: 'tube', r: 0.52, ri: 0.4, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#1e3a8a' },
            { t: 'tube', r: 0.34, ri: 0.3, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#60a5fa' } ] },
        { id: 'pupilla', name: 'Pupille', color: '#020617', explode: [0.9, 0.4, 0.4],
          info: '<p>Le « trou » noir au centre de l\'iris, par où entre la lumière. Dans le noir, elle s\'agrandit pour recueillir plus de lumière, au soleil elle se rétrécit pour ne pas nous éblouir.</p>',
          more: '<p>C\'est un réflexe automatique, le <b>réflexe pupillaire</b> : les médecins le vérifient avec une petite lampe. La pupille peut passer de 2 à 8 mm de diamètre.</p>',
          shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 28, rot: AX, pos: [1.025, 0, 0], decal: 1, anim: { type: 'scale', from: 0.65, to: 1.45, rate: 0.25, axis: 'xz' } } ] },
        { id: 'cristallino', name: 'Cristallin', color: '#fef9c3', alpha: 0.65, explode: [0.5, 1.0, 0.4],
          info: '<p>Une <b>lentille</b> transparente et élastique derrière la pupille. Elle change de forme pour faire la mise au point : elle se <b>gonfle</b> pour voir de près et s\'<b>aplatit</b> pour voir de loin.</p>',
          more: '<p>Avec l\'âge, le cristallin devient plus rigide : c\'est pourquoi, après 45 ans, beaucoup de personnes ont besoin de lunettes pour lire (<b>presbytie</b>). S\'il devient opaque, on parle de <b>cataracte</b>, qui se soigne en le remplaçant par une lentille artificielle.</p>',
          shapes: [ { t: 'sphere', r: 0.4, n: 14, m: 24, scale: [0.42, 1, 1], pos: [0.82, 0, 0], anim: { type: 'scale', from: 1, to: 1.3, axis: 'x', rate: 0.25, phase: 0.5 } } ] },
        { id: 'muscolo-ciliare', name: 'Muscle ciliaire', label: 'Muscle ciliaire', color: '#be123c', explode: [0.4, -0.9, 0.3],
          info: '<p>Un petit anneau de muscle autour du cristallin, relié à lui par de nombreux filaments. En se contractant ou en se relâchant, il change la forme du cristallin.</p>',
          shapes: [ { t: 'torus', R: 0.5, r: 0.06, n: 32, m: 8, rot: [0, 0, 90], pos: [0.85, 0, 0] } ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [k * 22.5, 0, 0], shapes: [ { t: 'cyl', r: 0.006, h: 0.12, n: 4, pos: [0.84, 0.42, 0], color: '#fda4af' } ] }))) },
        { id: 'vitreo', name: 'Corps vitré', label: 'Corps vitré', color: '#e0f2fe', alpha: 0.16, explode: [-0.4, 0, 0.9],
          info: '<p>L\'intérieur de l\'œil est rempli d\'une <b>gelée transparente</b>, le corps vitré. Il garde l\'œil gonflé et rond et laisse passer la lumière.</p>',
          more: '<p>Parfois, dans le corps vitré flottent de petits grumeaux : ce sont les « mouches volantes » que l\'on voit en regardant le ciel bleu. En général, elles sont inoffensives.</p>',
          shapes: [ { t: 'sphere', r: 1.08, n: 16, m: 28, scale: [0.96, 1, 1], pos: [-0.05, 0, 0] } ] },
        { id: 'retina', name: 'Rétine', color: '#fb7185', alpha: 0.5, explode: [-1.2, 0, 0],
          info: '<p>L\'« écran » au fond de l\'œil, où la lumière forme l\'image. Elle est faite de millions de cellules sensibles à la lumière, les <b>photorécepteurs</b> : les <b>cônes</b> voient les couleurs, les <b>bâtonnets</b> fonctionnent même avec peu de lumière.</p>',
          more: '<p>Dans la rétine, il y a environ <b>120 millions de bâtonnets</b> et 6 millions de cônes. Il y a trois types de cônes : pour le rouge, le vert et le bleu. En mélangeant leurs signaux, le cerveau « voit » des milliers de couleurs.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.12]].concat(arc(1.12, -88, 32, 14)), ds: true } ] },
        { id: 'macula', name: 'Fovéa (tache jaune)', label: 'Fovéa', color: '#facc15', explode: [-1.5, 0.2, 0.2],
          info: '<p>Un petit point de la rétine juste derrière le cristallin, plein de cônes : c\'est l\'endroit où l\'on voit <b>le plus net</b>. Quand tu lis, tu bouges les yeux pour amener chaque mot sur la fovéa.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 8, m: 14, scale: [0.2, 1, 1], pos: [-1.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 6, m: 10, scale: [0.2, 1, 1], pos: [-1.1, 0, 0.0], color: '#ca8a04' } ] },
        { id: 'vasi', name: 'Vaisseaux sanguins de la rétine', label: 'Vaisseaux sanguins', color: '#b91c1c', explode: [-1.3, 0, 0],
          info: '<p>De petites artères et veines partent du nerf optique et s\'étalent sur la rétine pour la nourrir. L\'ophtalmologue les voit en regardant dans la pupille avec une petite lampe.</p>',
          shapes: vessels },
        { id: 'nervo-ottico', name: 'Nerf optique', label: 'Nerf optique', color: '#fde68a', explode: [-1.6, 0, -0.3],
          info: '<p>Un « câble » fait d\'un million de fibres nerveuses qui amène les signaux de la rétine jusqu\'au <b>cerveau</b>. C\'est le cerveau, à l\'arrière de la tête, qui « voit » vraiment.</p>',
          more: '<p>À l\'endroit où le nerf sort de la rétine, il n\'y a pas de photorécepteurs : c\'est la <b>tache aveugle</b>. Nous ne la remarquons pas parce que le cerveau « comble le trou » avec ce qu\'il voit autour et avec l\'autre œil.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 16, curve: true, pts: NERVE }, { t: 'cyl', r: 0.15, h: 0.03, n: 20, rot: AX, pos: [-1.08, -0.05, -0.23], color: '#fffbeb' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.9, phase: k / 6 }, { type: 'blink', color: '#38bdf8', rate: 1.8, phase: k / 6 } ] }))) },
        { id: 'muscoli', name: 'Muscles de l\'œil', label: 'Muscles', color: '#dc2626', explode: [-0.6, 0.6, 0],
          info: '<p>Six muscles attachés à la sclérotique bougent l\'œil dans toutes les directions : en haut, en bas, à droite, à gauche et aussi en tournant un peu. Ce sont parmi les muscles les plus rapides du corps.</p>',
          shapes: [ muscle([0, 0, 0]), muscle([180, 0, 0]), muscle([90, 0, 0]), muscle([-90, 0, 0]) ] },
        { id: 'luce', name: 'Rayons de lumière', label: 'Rayons de lumière', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>La lumière qui rebondit sur l\'arbre entre dans l\'œil. La cornée et le cristallin la <b>dévient</b> (réfraction) de façon que les rayons partis d\'un point se rejoignent de nouveau en un point de la rétine.</p>',
          more: '<p>Si l\'œil est un peu trop long, l\'image se forme <b>devant</b> la rétine : c\'est la <b>myopie</b> (on voit mal de loin). S\'il est trop court, elle se forme derrière : c\'est l\'<b>hypermétropie</b>. Les verres de lunettes déplacent le foyer au bon endroit.</p>',
          shapes: rayShapes },
        { id: 'oggetto', name: 'Ce que nous regardons', label: 'Arbre', color: '#16a34a', pos: [4.2, -0.4, 0], explode: [0.8, 0, 0],
          info: '<p>On voit un objet parce qu\'il <b>envoie de la lumière</b> (comme une ampoule) ou parce qu\'il <b>réfléchit</b> la lumière qui le frappe (comme cet arbre). Dans le noir complet, nous ne voyons rien.</p>',
          shapes: tree(1.0) },
        { id: 'immagine', name: 'Image renversée', label: 'Image', color: '#16a34a', pos: [-0.98, 0.12, 0], explode: [-1.4, 0, 0.3],
          info: '<p>Sur la rétine, l\'image de l\'arbre est <b>toute petite et renversée</b> ! C\'est le cerveau qui la remet à l\'endroit : nous apprenons à le faire quand nous sommes bébés.</p>',
          shapes: [ { t: 'group', rot: [0, 90, 180], scale: 0.32, shapes: tree(1.0) } ] }
      ]
    },
    steps: [
      { icon: '👁️', title: 'Un appareil photo naturel', explode: 0,
        html: '<p>L\'œil est une boule d\'environ <b>2,4 cm</b>. Comme un appareil photo, il a une ouverture (la <b>pupille</b>), une lentille (le <b>cristallin</b>) et un « écran » sensible à la lumière (la <b>rétine</b>).</p>' },
      { icon: '🌳', title: 'La lumière entre', focus: ['oggetto', 'luce', 'cornea', 'pupilla', 'iride'], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Nous voyons un objet quand sa lumière arrive à nos yeux. La lumière passe par la <b>cornée</b>, la fenêtre transparente, et entre par la <b>pupille</b>.</p>' },
      { icon: '🔵', title: 'L\'iris règle la lumière', focus: ['iride', 'pupilla', 'cornea'], view: { rx: 0.1, ry: -1.35 }, zoom: 1.8,
        html: '<p>L\'<b>iris</b>, la partie colorée, est un muscle : dans le noir, il agrandit la pupille pour laisser entrer plus de lumière, au soleil il la rétrécit.</p><p class="tip">🪞 Essaie devant le miroir : ferme les yeux quelques secondes, puis rouvre-les et regarde la pupille qui se rétrécit !</p>' },
      { icon: '🔍', title: 'Le cristallin fait la mise au point', focus: ['cristallino', 'muscolo-ciliare', 'luce'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.6,
        html: '<p>Le <b>cristallin</b> est une lentille élastique. Le <b>muscle ciliaire</b> le gonfle pour regarder de près et l\'aplatit pour regarder de loin : ainsi l\'image sur la rétine est toujours nette.</p>' },
      { icon: '🙃', title: 'Une image renversée', focus: ['retina', 'immagine', 'luce', 'macula'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.5,
        html: '<p>Les rayons se croisent et sur la <b>rétine</b> se forme une image petite et <b>renversée</b>. Les cônes et les bâtonnets de la rétine la transforment en signaux électriques. Le point le plus net est la <b>fovéa</b>.</p>' },
      { icon: '🧠', title: 'Le cerveau voit', focus: ['nervo-ottico', 'retina', 'vasi'], view: { rx: 0.2, ry: 0.5 },
        html: '<p>Le <b>nerf optique</b> amène les signaux au cerveau. C\'est le cerveau qui remet l\'image à l\'endroit, qui réunit celles des deux yeux (ainsi nous voyons en 3D) et qui comprend ce que nous regardons.</p>' },
      { icon: '↔️', title: 'Des yeux toujours en mouvement', focus: ['muscoli', 'sclera'], view: { rx: 0.35, ry: -0.7 },
        html: '<p>Six <b>muscles</b> bougent chaque œil. Même quand tu crois fixer un point, les yeux font de petits sauts continuels : sans eux, l\'image s\'effacerait !</p><p class="tip">😉 Nous clignons des yeux environ 15 fois par minute : les larmes nettoient et humidifient la cornée.</p>' }
    ],
    facts: [
      { icon: '📸', title: 'Plus rapide qu\'une photo', html: 'L\'œil fait la mise au point en une fraction de seconde et distingue environ <b>un million</b> de nuances de couleur.' },
      { icon: '🦅', title: 'Des yeux d\'aigle', html: 'Un aigle voit un lapin à plus de 3 km de distance : sa rétine a beaucoup plus de cônes que la nôtre.' },
      { icon: '🐝', title: 'Des couleurs invisibles', html: 'Les abeilles voient la lumière <b>ultraviolette</b>, qui est invisible pour nous : beaucoup de fleurs ont des dessins « secrets » que seules elles voient.' },
      { icon: '🔴', title: 'Daltonisme', html: 'Environ 1 garçon sur 12 confond certaines couleurs, en général le rouge et le vert : on l\'appelle le <b>daltonisme</b>, d\'après le chimiste John Dalton qui en souffrait.' },
      { icon: '👶', title: 'Bébés', html: 'Les bébés voient flou et presque en noir et blanc ; la vue devient comme celle des adultes vers 3 à 5 ans.' }
    ],
    quiz: [
      { type: 'mc', q: 'Quelle partie de l\'œil règle la quantité de lumière qui entre ?', options: ['La rétine', 'L\'iris', 'Le nerf optique', 'La sclérotique'], answer: 1, explain: 'L\'iris agrandit ou rétrécit la pupille.' },
      { type: 'mc', q: 'Comment s\'appelle la lentille élastique qui fait la mise au point ?', options: ['Cornée', 'Pupille', 'Cristallin', 'Fovéa'], answer: 2, explain: 'Le cristallin change de forme pour faire la mise au point de près ou de loin.' },
      { type: 'tf', q: 'Sur la rétine, l\'image se forme renversée.', answer: true, explain: 'Les rayons se croisent en traversant le cristallin ; le cerveau remet l\'image à l\'endroit.' },
      { type: 'mc', q: 'Quelles cellules de la rétine nous font voir les couleurs ?', options: ['Les bâtonnets', 'Les cônes', 'Les globules rouges', 'Les neurones du nez'], answer: 1, explain: 'Les cônes voient les couleurs ; les bâtonnets fonctionnent avec peu de lumière.' },
      { type: 'order', q: 'Mets dans l\'ordre le voyage de la lumière dans l\'œil', items: ['Cornée', 'Pupille', 'Cristallin', 'Corps vitré', 'Rétine', 'Nerf optique'], explain: 'La lumière traverse la cornée, la pupille, le cristallin et le corps vitré ; la rétine la transforme en signaux que le nerf optique amène au cerveau.' },
      { type: 'mc', q: 'Si l\'image se forme devant la rétine et qu\'on voit mal de loin, on est…', options: ['Myope', 'Daltonien', 'Presbyte', 'Aveugle'], answer: 0, explain: 'C\'est la myopie : on la corrige avec des lentilles divergentes.' }
    ]
  });
})();
