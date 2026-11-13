/* Il satellite (osservazione della Terra e telecomunicazioni). La Terra è in basso (sfondo "orbit"). */
(function () {
  const cells = (side) => {
    const s = [];
    for (let k = 0; k < 3; k++) {
      const x = side * (1.05 + k * 1.02);
      s.push({ t: 'box', s: [0.96, 0.03, 0.9], pos: [x, 0, 0], color: '#1e3a8a' });
      for (let i = 1; i < 4; i++) s.push({ t: 'box', s: [0.012, 0.008, 0.9], pos: [x - 0.48 + i * 0.24, 0.02, 0], color: '#93c5fd', decal: 1 });
      for (let j = 1; j < 4; j++) s.push({ t: 'box', s: [0.96, 0.008, 0.012], pos: [x, 0.02, -0.45 + j * 0.225], color: '#93c5fd', decal: 1 });
    }
    s.push({ t: 'cyl', r: 0.035, h: 0.5, n: 10, rot: [0, 0, 90], pos: [side * 0.55, 0, 0], color: '#cbd5e1' });
    return s;
  };
  const thr = (x, y, z, rot, ph) => ({ t: 'group', pos: [x, y, z], rot, shapes: [
    { t: 'cone', r: 0.07, h: 0.12, n: 12, rot: [180, 0, 0], color: '#6b7280' },
    { t: 'cone', r: 0.06, h: 0.3, n: 10, rot: [180, 0, 0], pos: [0, -0.2, 0], color: '#a5f3fc', alpha: 0.85, anim: { type: 'blink', fade: true, wave: 'window', from: ph, to: ph + 0.08, ramp: 0.3 } }
  ] });

  LIBRARY({
    lang: 'fr',
    id: 'satellite',
    title: 'Le satellite',
    intro: 'Un satellite artificiel tourne autour de la Terre à des centaines ou des milliers de kilomètres d\'altitude. Il photographie la planète, nous apporte la télé, Internet et le signal <b>GPS</b>. Mais comment fait-il pour ne pas tomber ?',
    model: {
      rx: 0.28, ry: -0.6, speed: 0.25, height: 480, bg: 'orbit',
      parts: [
        { id: 'corpo', name: 'Corps (structure)', label: 'Corps', color: '#d4a017', alpha: 0.42, explode: [0, 0, 0],
          info: '<p>C\'est la « boîte » qui contient les instruments. Elle est enveloppée de feuilles dorées, la <b>couverture thermique</b>, qui la protège de la chaleur du Soleil et du froid de l\'ombre.</p>',
          more: '<p>Au Soleil, un satellite peut atteindre +120 °C, dans l\'ombre de la Terre −150 °C. La couverture thermique est faite de nombreuses couches très fines de plastique recouvert de métal qui réfléchissent la chaleur.</p>',
          shapes: [ { t: 'box', s: [1, 1.2, 1] }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, 0.6, 0], color: '#a16207', alpha: 1 }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, -0.6, 0], color: '#a16207', alpha: 1 } ] },
        { id: 'pannelli', name: 'Panneaux solaires', color: '#1e3a8a', explode: [0, 0, 0], anim: { type: 'swing', axis: 'x', amp: 25, rate: 0.35 },
          info: '<p>Ils transforment la lumière du Soleil en <b>électricité</b>. Ils tournent lentement pour rester toujours orientés vers le Soleil, comme les tournesols.</p>',
          more: '<p>Ils sont faits de <b>cellules photovoltaïques</b> en silicium ou en arséniure de gallium. Pendant le lancement, ils sont repliés et ne s\'ouvrent qu\'en orbite.</p>',
          shapes: cells(1).concat(cells(-1)) },
        { id: 'batterie', name: 'Batteries', color: '#16a34a', pos: [-0.22, -0.3, 0.1], explode: [-0.4, -0.3, 1.5],
          info: '<p>Elles stockent l\'énergie des panneaux et l\'utilisent quand le satellite passe dans l\'<b>ombre de la Terre</b>, où le Soleil n\'arrive pas.</p>',
          shapes: [0, 1, 2].map((k) => ({ t: 'box', s: [0.14, 0.32, 0.4], pos: [k * 0.17 - 0.17, 0, 0] })) },
        { id: 'serbatoio', name: 'Réservoir de propergol', label: 'Réservoir', color: '#9ca3af', pos: [0, 0.15, -0.05], explode: [0, 0.4, -1.5],
          info: '<p>Une sphère pleine de carburant pour les petits moteurs. Quand il est vide, le satellite ne peut plus corriger son orbite.</p>',
          shapes: [ { t: 'sphere', r: 0.3, n: 12 } ] },
        { id: 'computer', name: 'Ordinateur de bord', label: 'Ordinateur', color: '#1e40af', pos: [0.25, -0.25, 0.15], explode: [0.4, -0.3, 1.5],
          info: '<p>C\'est le cerveau du satellite : il contrôle tous les instruments, exécute les commandes reçues de la Terre et décide tout seul en cas de problème.</p>',
          more: '<p>Là-haut, les <b>radiations</b> peuvent provoquer des erreurs sur les bits de la mémoire : les ordinateurs spatiaux sont spéciaux, plus robustes et souvent doublés (un de secours).</p>',
          shapes: [ { t: 'box', s: [0.32, 0.3, 0.36] }, { t: 'box', s: [0.05, 0.05, 0.02], pos: [0.08, 0.08, 0.18], color: '#22c55e', anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'antenna-parabolica', name: 'Antenne parabolique', label: 'Antenne parabolique', color: '#f1f5f9', pos: [0, -0.62, 0.55], explode: [0, -0.6, 0.6],
          anim: { type: 'swing', axis: 'x', amp: 8, rate: 0.2 },
          info: '<p>Elle envoie à la Terre les photos et les données et reçoit les commandes, avec des <b>ondes radio</b> qui voyagent à la vitesse de la lumière : 300 000 km par seconde !</p>',
          more: '<p>La forme de parabole concentre les ondes radio en un faisceau étroit, comme le miroir d\'une lampe de poche concentre la lumière. Ainsi le signal va loin en utilisant peu d\'énergie.</p>',
          shapes: [ { t: 'cyl', r: 0.03, h: 0.25, n: 8, pos: [0, -0.1, 0], color: '#94a3b8' },
            { t: 'lathe', ds: true, n: 28, rot: [180, 0, 0], pos: [0, -0.25, 0], pts: [[0.02, 0], [0.2, 0.024], [0.35, 0.074], [0.5, 0.15], [0.62, 0.23]] },
            { t: 'cyl', r: 0.012, h: 0.42, n: 6, pos: [0, -0.43, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.05, r2: 0.03, h: 0.08, n: 10, pos: [0, -0.64, 0], color: '#475569' } ] },
        { id: 'antenna', name: 'Antenne omnidirectionnelle', label: 'Antenne', color: '#e5e7eb', pos: [0.3, 0.6, 0.3], explode: [0.3, 0.6, 0.3],
          info: '<p>Une petite antenne qui parle dans <b>toutes les directions</b> : elle sert pour les messages d\'urgence même quand le satellite est mal orienté.</p>',
          shapes: [ { t: 'cyl', r: 0.015, h: 0.6, n: 6, pos: [0, 0.3, 0] }, { t: 'sphere', r: 0.04, n: 6, pos: [0, 0.62, 0], color: '#ef4444' } ] },
        { id: 'fotocamera', name: 'Appareil photo (télescope)', label: 'Appareil photo', color: '#334155', pos: [-0.28, -0.75, -0.25], explode: [-0.6, -0.8, -0.4],
          info: '<p>Un petit télescope qui regarde la Terre : il photographie les nuages, les mers, les forêts et les villes. Il sert pour les <b>prévisions météo</b> et pour surveiller les incendies et les glaciers.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.45, n: 24 }, { t: 'cyl', r: 0.12, h: 0.02, n: 24, pos: [0, -0.23, 0], color: '#0ea5e9' }, { t: 'tube', r: 0.19, ri: 0.16, h: 0.1, n: 24, pos: [0, -0.2, 0], color: '#111827' } ] },
        { id: 'sensore-stellare', name: 'Viseur d\'étoiles', label: 'Viseur d\'étoiles', color: '#475569', pos: [-0.3, 0.68, -0.3], explode: [-0.4, 0.7, -0.4],
          info: '<p>C\'est une petite caméra qui regarde les <b>étoiles</b> : en les reconnaissant, le satellite comprend dans quelle direction il est tourné. Comme le faisaient les marins d\'autrefois !</p>',
          shapes: [ { t: 'box', s: [0.18, 0.14, 0.18] }, { t: 'cyl', r: 0.07, r2: 0.13, h: 0.2, n: 16, pos: [0, 0.17, 0], color: '#111827', ds: true, open: true } ] },
        { id: 'propulsori', name: 'Propulseurs', color: '#6b7280', explode: [0, 0, 0],
          info: '<p>De petits moteurs-fusées qui font de brefs « souffles » de gaz : ils corrigent l\'orbite et tournent le satellite dans la bonne position.</p>',
          more: '<p>Certains satellites utilisent des <b>moteurs ioniques</b> : ils poussent très peu, mais pendant des mois entiers, en consommant beaucoup moins de carburant.</p>',
          shapes: [ thr(0.45, -0.62, 0.45, [0, 0, 0], 0.1), thr(-0.45, -0.62, -0.45, [0, 0, 0], 0.35), thr(-0.45, 0.62, 0.45, [180, 0, 0], 0.6), thr(0.45, 0.62, -0.45, [180, 0, 0], 0.85) ] },
        { id: 'radiatore', name: 'Radiateur', color: '#f8fafc', pos: [0, 0, -0.52], explode: [0, 0, -0.7],
          info: '<p>Un panneau blanc qui rejette dans l\'espace la chaleur produite par les instruments. Dans le vide, il n\'y a pas d\'air qui rafraîchit : la chaleur s\'en va seulement sous forme de <b>rayonnement</b>.</p>',
          shapes: [ { t: 'box', s: [0.9, 1.0, 0.03] } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'Pourquoi ne tombe-t-il pas ?', explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>En réalité, un satellite <b>tombe toujours</b> vers la Terre ! Mais il file si vite sur le côté (environ 27 000 km/h en orbite basse) que la Terre, ronde, « s\'échappe » sous lui. Ainsi il continue à tourner autour d\'elle : c\'est l\'<b>orbite</b>.</p><p class="tip">🍎 Newton l\'a imaginé avec un canon au sommet d\'une montagne très haute : plus tu tires fort, plus le boulet tombe loin… jusqu\'à ce qu\'il fasse le tour du monde !</p>' },
      { icon: '☀️', title: 'De l\'énergie du Soleil', focus: ['pannelli', 'batterie'], explode: 0.5,
        html: '<p>Les <b>panneaux solaires</b> transforment la lumière en électricité et tournent pour suivre le Soleil. Les <b>batteries</b> conservent l\'énergie pour quand le satellite passe dans l\'ombre de la Terre.</p>' },
      { icon: '📡', title: 'Parler avec la Terre', focus: ['antenna-parabolica', 'antenna', 'computer'], explode: 0.4, view: { rx: -0.2, ry: -0.6 },
        html: '<p>L\'<b>antenne parabolique</b> envoie à la Terre des données et des photos avec les ondes radio et reçoit les commandes des stations de contrôle. L\'<b>ordinateur de bord</b> exécute le tout.</p>' },
      { icon: '🧭', title: 'Comment suis-je tourné ?', focus: ['sensore-stellare', 'computer', 'propulsori'], explode: 0.3,
        html: '<p>Le <b>viseur d\'étoiles</b> photographie les étoiles et comprend l\'orientation. Si besoin, les <b>propulseurs</b> font de petits souffles pour tourner le satellite ou corriger l\'orbite, en utilisant le carburant du <b>réservoir</b>.</p>' },
      { icon: '📸', title: 'Son travail', focus: ['fotocamera', 'antenna-parabolica'], explode: 0.2, view: { rx: -0.35, ry: -0.3 },
        html: '<p>Chaque satellite a une mission : photographier la Terre (météo, environnement), transmettre la télé et Internet, ou envoyer le signal <b>GPS</b> qui dit à ton téléphone où tu es.</p><p class="tip">🛰️ Pour le GPS, il faut au moins 4 satellites visibles en même temps.</p>' },
      { icon: '🌡️', title: 'Ni trop chaud ni trop froid', focus: ['corpo', 'radiatore'], explode: 0.3,
        html: '<p>La <b>couverture dorée</b> réfléchit la lumière du Soleil, le <b>radiateur</b> blanc rejette la chaleur des instruments. Ainsi, à l\'intérieur, la température reste idéale pour l\'électronique.</p>' }
    ],
    facts: [
      { icon: '🔴', title: 'Spoutnik 1', html: 'Le premier satellite artificiel a été lancé en 1957 par l\'Union soviétique : c\'était une sphère de 58 cm qui faisait seulement « bip bip ».' },
      { icon: '🇮🇹', title: 'L\'Italie dans l\'espace', html: 'En 1964, l\'Italie a été le troisième pays au monde à mettre en orbite son propre satellite : le <b>San Marco 1</b>.' },
      { icon: '🔢', title: 'Des milliers là-haut', html: 'Aujourd\'hui, plus de <b>10 000 satellites</b> actifs tournent autour de la Terre, et leur nombre augmente chaque année.' },
      { icon: '🌐', title: 'Orbite géostationnaire', html: 'À 36 000 km d\'altitude, un satellite tourne avec la Terre et semble immobile dans le ciel : c\'est pour cela que les antennes paraboliques de la télé ne bougent pas.' }
    ],
    quiz: [
      { type: 'mc', q: 'D\'où un satellite tire-t-il son énergie ?', options: ['D\'un moteur à essence', 'Des panneaux solaires', 'D\'un câble relié à la Terre', 'Du vent solaire qui le pousse'], answer: 1, explain: 'Les panneaux solaires transforment la lumière du Soleil en électricité ; les batteries la conservent pour les heures d\'ombre.' },
      { type: 'tf', q: 'Un satellite en orbite est en réalité en train de tomber continuellement vers la Terre.', answer: true, explain: 'Il tombe, mais il file si vite sur le côté que la Terre se courbe sous lui : c\'est pour cela qu\'il continue à tourner autour d\'elle.' },
      { type: 'mc', q: 'À quoi sert le viseur d\'étoiles ?', options: ['À photographier les étoiles pour les astronomes', 'À comprendre dans quelle direction le satellite est tourné', 'À mesurer la température', 'À produire du courant'], answer: 1, explain: 'En reconnaissant les étoiles, le satellite comprend sa propre orientation.' },
      { type: 'mc', q: 'Avec quoi le satellite envoie-t-il les données à la Terre ?', options: ['Avec des ondes radio', 'Avec un câble', 'Avec des signaux de fumée', 'Avec le son'], answer: 0, explain: 'Les ondes radio voyagent dans le vide à la vitesse de la lumière ; le son, lui, ne se propage pas dans le vide.' },
      { type: 'mc', q: 'Pourquoi le satellite est-il enveloppé de feuilles dorées ?', options: ['Pour être plus beau', 'Pour le protéger de la chaleur et du froid', 'Pour le rendre plus lourd', 'Pour réfléchir les signaux GPS'], answer: 1, explain: 'La couverture thermique réfléchit la chaleur du Soleil et retient la chaleur interne quand il est à l\'ombre.' }
    ]
  });
})();
