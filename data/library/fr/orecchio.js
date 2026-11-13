/* L'orecchio (destro, visto da davanti-sotto). Il suono arriva da sinistra (−x) da un diapason, entra nel condotto lungo +x,
   fa vibrare timpano e ossicini e arriva alla coclea; a destra il nervo acustico va verso il cervello. */
(function () {
  const V = 6;                                                     // velocità delle vibrazioni
  const C = [1.4, -0.2, 0.05];                                      // centro della coclea
  const spiral = (() => { const p = []; for (let i = 0; i <= 40; i++) { const t = i / 40 * 2.6, a = Math.PI + t * Math.PI * 2, r = 0.55 * (1 - 0.3 * t); p.push([C[0] + r * Math.cos(a), C[1] + r * Math.sin(a), C[2] + 0.1 * t]); } return p; })();
  const CANAL = [[-1.95, 0.05, 0.05], [-1.3, 0.12, 0.0], [-0.6, 0.0, 0.0], [-0.06, 0, 0]];
  const NERVE = [[C[0], C[1], C[2] + 0.2], [1.8, 0.0, 0.1], [2.3, 0.2, 0.05], [2.9, 0.3, 0.0]];
  const rings = Array.from({ length: 4 }, (_, k) => ({ t: 'torus', R: 0.55, r: 0.03, n: 28, m: 5, rot: [0, 0, 90], pos: [-3.2, 0.05, 0.05], color: '#38bdf8',
    anim: [ { type: 'move', dir: [0, -1, 0], amp: 3.1, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'scale', from: 1.1, to: 0.35, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 4 } ] }));
  const fluid = Array.from({ length: 9 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: spiral[0], color: '#7dd3fc', anim: { type: 'path', pts: spiral, wave: 'saw', rate: 0.4, phase: k / 9 } }));

  LIBRARY({
    lang: 'fr',
    id: 'orecchio',
    title: 'L\'oreille',
    intro: 'L\'oreille transforme les <b>vibrations de l\'air</b> en signaux pour le cerveau. À l\'intérieur de la tête, elle cache le plus petit muscle, le plus petit os du corps et un « escargot » rempli de liquide. Suis le voyage du son !',
    model: {
      rx: 0.15, ry: 0.6, speed: 0.4, height: 470, bg: 'body', fit: 1.05,
      parts: [
        { id: 'diapason', name: 'Diapason (la source du son)', label: 'Diapason', color: '#9ca3af', pos: [-3.5, -0.6, 0], explode: [-0.6, 0, 0],
          info: '<p>Le son naît quand quelque chose <b>vibre</b>. Le diapason, quand on le frappe, vibre d\'avant en arrière des centaines de fois par seconde et pousse l\'air autour de lui.</p>',
          more: '<p>Le diapason des musiciens vibre 440 fois par seconde (440 hertz) : c\'est la note <b>La</b>, utilisée pour accorder les instruments. Plus il y a de vibrations par seconde, plus le son est aigu.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 12, pos: [0, -0.3, 0] }, { t: 'sphere', r: 0.08, n: 8, m: 12, pos: [0, -0.62, 0], color: '#6b7280' },
            { t: 'torus', R: 0.15, r: 0.045, n: 16, m: 8, arc: 180, rot: [90, 0, 0], pos: [0, 0.15, 0] },
            { t: 'group', pos: [0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: 1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] },
            { t: 'group', pos: [-0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] } ] },
        { id: 'onde', name: 'Ondes sonores', label: 'Ondes sonores', color: '#38bdf8', explode: [0, 0, 0], chip: true,
          info: '<p>Les vibrations passent d\'une particule d\'air à l\'autre, comme une poussée dans une file de personnes : ce sont les <b>ondes sonores</b>. Elles arrivent jusqu\'à notre oreille.</p>',
          more: '<p>Dans l\'air, le son voyage à environ <b>340 mètres par seconde</b> ; dans l\'eau, 4 fois plus vite. Dans le vide de l\'espace, il ne se propage pas : là-bas, c\'est le silence absolu.</p>',
          shapes: rings },
        { id: 'padiglione', name: 'Pavillon de l\'oreille', label: 'Pavillon', color: '#f5c6a5', explode: [-1.0, 0, 0],
          info: '<p>C\'est la partie que l\'on voit et que l\'on appelle « oreille ». Avec ses courbes, elle recueille les sons comme un <b>entonnoir</b> et les dirige vers le conduit.</p>',
          more: '<p>Les plis du pavillon modifient un peu le son selon la direction d\'où il vient : ainsi le cerveau comprend si un bruit vient de devant, de derrière ou d\'en haut. Il est fait de <b>cartilage</b>, pas d\'os.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, scale: [0.07, 1.05, 0.62], pos: [-1.97, 0.3, -0.1] },
            { t: 'pipe', r: 0.1, n: 10, curve: true, pts: [[-2.05, -0.15, 0.36], [-2.1, 0.55, 0.47], [-2.12, 1.1, 0.28], [-2.12, 1.3, -0.12], [-2.11, 0.95, -0.52], [-2.08, 0.3, -0.64], [-2.07, -0.35, -0.55], [-2.07, -0.75, -0.3]], color: '#f0b48e' },
            { t: 'sphere', r: 1, n: 10, m: 16, scale: [0.1, 0.32, 0.24], pos: [-2.02, -0.78, -0.18], color: '#f5c6a5' },
            { t: 'lathe', n: 24, rot: [0, 0, 90], pos: [-2.0, 0.08, 0.0], pts: [[0, -0.02], [0.2, 0.0], [0.34, 0.09], [0.38, 0.13]], ds: true, color: '#e8a782' },
            { t: 'pipe', r: 0.06, n: 8, curve: true, pts: [[-2.08, 0.75, 0.25], [-2.08, 0.85, -0.15], [-2.07, 0.45, -0.35]], color: '#f0b48e' },
            { t: 'sphere', r: 0.1, n: 8, m: 10, scale: [0.6, 1, 0.8], pos: [-2.07, 0.02, 0.36], color: '#f0b48e' } ] },
        { id: 'condotto', name: 'Conduit auditif', label: 'Conduit auditif', color: '#f9a8d4', alpha: 0.45, explode: [-0.5, 0, 0.3],
          info: '<p>Un petit tuyau long d\'environ <b>2,5 cm</b> qui amène le son jusqu\'au tympan. Il a de petits poils et produit le <b>cérumen</b>, qui retient la poussière et les insectes.</p>',
          more: '<p>Le cérumen sort tout seul, tout doucement : c\'est pour cela qu\'il ne faut pas mettre de bâtonnets dans les oreilles, on risque de le pousser vers le tympan.</p>',
          shapes: [ { t: 'pipe', r: 0.2, n: 18, curve: true, pts: CANAL, caps: false } ] },
        { id: 'timpano', name: 'Tympan', color: '#fda4af', alpha: 0.85, explode: [0, 0.3, 0.6], anim: { type: 'move', dir: [1, 0, 0], amp: 0.035, rate: V },
          info: '<p>Une membrane fine et tendue comme la peau d\'un tambour, au fond du conduit. Quand le son arrive, elle <b>vibre</b> avec l\'air.</p>',
          more: '<p>Le tympan n\'est épais que d\'un dixième de millimètre et il vibre même pour des déplacements plus petits qu\'un atome ! Mais un bruit trop fort peut l\'abîmer.</p>',
          shapes: [ { t: 'cone', r: 0.3, h: 0.1, n: 28, rot: [0, 0, -90], pos: [0, 0, 0] }, { t: 'torus', R: 0.3, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#e11d48', alpha: 1 } ] },
        { id: 'martello', name: 'Marteau', color: '#fef3c7', explode: [0.1, 0.8, 0.5], anim: { type: 'swing', axis: 'z', amp: -3, rate: V, pivot: [0.13, 0.5, 0] },
          info: '<p>Le premier des trois <b>osselets</b>. Son « manche » est attaché au tympan : quand le tympan vibre, le marteau bouge avec lui.</p>',
          shapes: [ { t: 'pipe', r: 0.04, n: 8, curve: true, pts: [[0.03, -0.05, 0], [0.05, 0.2, 0], [0.1, 0.42, 0]] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [0.13, 0.52, 0] } ] },
        { id: 'incudine', name: 'Enclume', color: '#fde68a', explode: [0.3, 0.9, 0.5], anim: { type: 'swing', axis: 'z', amp: 3, rate: V, pivot: [0.32, 0.55, 0] },
          info: '<p>Le deuxième osselet, en forme d\'enclume de forgeron. Il reçoit le coup du marteau et le transmet à l\'étrier.</p>',
          shapes: [ { t: 'sphere', r: 0.1, n: 10, m: 14, scale: [1.1, 0.9, 0.9], pos: [0.3, 0.52, 0] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.33, 0.47, 0], [0.42, 0.33, 0], [0.45, 0.19, 0]] }, { t: 'pipe', r: 0.03, n: 8, pts: [[0.36, 0.56, 0], [0.55, 0.6, -0.02]] } ] },
        { id: 'staffa', name: 'Étrier', color: '#fcd34d', explode: [0.5, 0.7, 0.5], anim: { type: 'move', dir: [1, 0, 0], amp: 0.025, rate: V },
          info: '<p>Le troisième osselet, en forme d\'étrier de cavalier : c\'est <b>le plus petit os du corps</b> (environ 3 mm). Il pousse comme un piston sur la « fenêtre ovale » de la cochlée.</p>',
          more: '<p>Les trois osselets fonctionnent comme un <b>levier</b> : la poussée qui arrive sur la fenêtre ovale est environ <b>20 fois</b> plus forte que celle sur le tympan. C\'est nécessaire parce que le son doit passer de l\'air au liquide de la cochlée.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.22, 0.05], [0.68, 0.17, 0.06]] }, { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.12, -0.05], [0.68, 0.13, -0.06]] },
            { t: 'cyl', r: 0.08, h: 0.025, n: 16, rot: [0, 0, 90], scale: [1, 1, 0.6], pos: [0.7, 0.15, 0] } ] },
        { id: 'cassa', name: 'Caisse du tympan (oreille moyenne)', label: 'Oreille moyenne', color: '#fecdd3', alpha: 0.16, explode: [0.2, 0.4, 0.4],
          info: '<p>Une petite cavité remplie d\'<b>air</b> derrière le tympan : c\'est là que se trouvent les trois osselets. C\'est l\'<b>oreille moyenne</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.55, n: 14, m: 22, scale: [1, 1.05, 0.8], pos: [0.35, 0.22, 0] } ] },
        { id: 'tromba', name: 'Trompe d\'Eustache', label: 'Trompe d\'Eustache', color: '#f9a8d4', explode: [0.2, -0.4, 0.5],
          info: '<p>Un canal qui relie l\'oreille moyenne à la gorge. Il fait entrer et sortir l\'air pour que la pression soit la même des deux côtés du tympan.</p>',
          more: '<p>Quand, en avion ou en montagne, tu sens tes oreilles « bouchées », avaler ou bâiller ouvre la trompe d\'Eustache : tu entends un « clic » et la pression s\'égalise.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: [[0.45, -0.25, 0.05], [0.6, -0.7, 0.25], [0.75, -1.2, 0.5], [0.85, -1.55, 0.65]] }, { t: 'cyl', r: 0.12, r2: 0.07, h: 0.18, n: 14, pos: [0.87, -1.62, 0.68], rot: [20, 0, -15] } ] },
        { id: 'coclea', name: 'Cochlée (escargot)', label: 'Cochlée', color: '#fbcfe8', explode: [0.7, -0.3, 0.3],
          info: '<p>Un petit tuyau enroulé comme la coquille d\'un <b>escargot</b>, rempli de liquide. L\'étrier fait bouger le liquide et des milliers de <b>cellules ciliées</b> transforment ce mouvement en signaux électriques.</p>',
          more: '<p>Chaque partie de la cochlée « écoute » des notes différentes : la base (près de l\'étrier) les sons <b>aigus</b>, la pointe les sons <b>graves</b>. Les cellules ciliées sont environ 15 000 et ne repoussent pas : les bruits trop forts (casque à fond !) peuvent les abîmer pour toujours.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: spiral }, { t: 'sphere', r: 0.15, n: 10, m: 14, pos: spiral[spiral.length - 1], color: '#f9a8d4' } ] },
        { id: 'liquido', name: 'Liquide qui bouge', label: 'Liquide', color: '#7dd3fc', explode: [0.7, -0.3, 0.3], chip: true,
          info: '<p>Quand l\'étrier pousse, une onde part dans le liquide de la cochlée, court le long de l\'escargot et fait plier les cils des cellules.</p>',
          shapes: fluid },
        { id: 'canali', name: 'Canaux semi-circulaires (équilibre)', label: 'Canaux semi-circulaires', color: '#f9a8d4', explode: [0.6, 0.8, 0],
          info: '<p>Trois anneaux remplis de liquide, un pour chaque direction de l\'espace. Quand tu bouges la tête, le liquide se déplace et le cerveau comprend comment tu es tourné : ils servent à l\'<b>équilibre</b> !</p>',
          more: '<p>Si tu tournes sur toi-même et t\'arrêtes d\'un coup, le liquide continue à bouger encore un peu : voilà pourquoi tu as la tête qui tourne. Avec les canaux, deux petits sacs (l\'utricule et le saccule) sentent la gravité et les accélérations.</p>',
          shapes: [ { t: 'sphere', r: 0.18, n: 12, m: 16, pos: [0.88, 0.22, 0], color: '#fbcfe8' },
            { t: 'torus', R: 0.3, r: 0.045, n: 26, m: 8, arc: 290, rot: [90, 0, 120], pos: [1.0, 0.62, 0.05] },
            { t: 'torus', R: 0.28, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 30, 90], pos: [1.12, 0.55, -0.3] },
            { t: 'torus', R: 0.27, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 200, 0], pos: [1.25, 0.32, 0.05] } ] },
        { id: 'nervo', name: 'Nerf auditif', label: 'Nerf auditif', color: '#fde047', explode: [1.0, 0, 0],
          info: '<p>Il amène les signaux électriques de la cochlée et des canaux de l\'équilibre jusqu\'au <b>cerveau</b>. C\'est le cerveau qui reconnaît une voix, une chanson ou le miaulement du chat.</p>',
          shapes: [ { t: 'pipe', r: 0.09, n: 12, curve: true, pts: NERVE }, { t: 'pipe', r: 0.06, n: 10, curve: true, pts: [[0.95, 0.25, 0.05], [1.5, 0.15, 0.1], [1.8, 0.0, 0.1]] } ]
            .concat(Array.from({ length: 5 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.8, phase: k / 5 }, { type: 'blink', color: '#38bdf8', rate: 1.6, phase: k / 5 } ] }))) }
      ]
    },
    steps: [
      { icon: '🔔', title: 'Le son est une vibration', focus: ['diapason', 'onde', 'padiglione'], view: { rx: 0.1, ry: 0.5 },
        html: '<p>Quand quelque chose vibre, comme le <b>diapason</b>, il pousse l\'air d\'avant en arrière. Les vibrations voyagent dans l\'air comme des <b>ondes</b>, jusqu\'à arriver à nos oreilles.</p><p class="tip">✋ Pose les doigts sur ta gorge et dis « aaa » : tu sens les cordes vocales qui vibrent !</p>' },
      { icon: '👂', title: 'L\'oreille externe recueille', focus: ['padiglione', 'condotto', 'onde', 'timpano'], view: { rx: 0.15, ry: 0.95 }, zoom: 1.3,
        html: '<p>Le <b>pavillon</b> recueille les sons comme un entonnoir et les envoie dans le <b>conduit auditif</b>. Tout au fond, il y a le <b>tympan</b>, une membrane tendue comme la peau d\'un tambour.</p>' },
      { icon: '🥁', title: 'Le tympan vibre', focus: ['timpano', 'martello', 'incudine', 'staffa', 'cassa'], view: { rx: 0.1, ry: -0.3 }, zoom: 2.4,
        html: '<p>Le son fait <b>vibrer le tympan</b>. Derrière, dans l\'<b>oreille moyenne</b>, trois osselets, le <b>marteau</b>, l\'<b>enclume</b> et l\'<b>étrier</b>, se passent la vibration et la rendent plus forte, comme un levier.</p><p class="tip">🦴 L\'étrier est le plus petit os du corps : il est gros comme un grain de riz !</p>' },
      { icon: '🐌', title: 'Dans l\'escargot', focus: ['coclea', 'liquido', 'staffa', 'nervo'], view: { rx: 0.1, ry: -0.2 }, zoom: 1.6,
        html: '<p>L\'étrier pousse sur le liquide de la <b>cochlée</b>. Le liquide bouge et plie les cils de milliers de cellules, qui produisent des <b>signaux électriques</b>. La base de l\'escargot entend les sons aigus, la pointe les sons graves.</p>' },
      { icon: '🧠', title: 'Le cerveau écoute', focus: ['nervo', 'coclea', 'canali'], view: { rx: 0.2, ry: 0.4 }, zoom: 1.3,
        html: '<p>Le <b>nerf auditif</b> amène les signaux au cerveau, qui les transforme en ce que nous « entendons » : des mots, de la musique, des bruits. Avec deux oreilles, le cerveau comprend aussi <b>d\'où</b> vient un son.</p>' },
      { icon: '🤸', title: 'Des oreilles pour garder l\'équilibre', focus: ['canali', 'nervo'], view: { rx: 0.4, ry: -0.6 }, zoom: 2.0,
        html: '<p>L\'oreille ne sert pas seulement à entendre ! Les trois <b>canaux semi-circulaires</b>, remplis de liquide, disent au cerveau comment la tête bouge. C\'est ainsi que tu arrives à rester en équilibre sur une seule jambe.</p>' },
      { icon: '🌬️', title: 'La valve de la pression', focus: ['tromba', 'cassa', 'timpano'], view: { rx: -0.1, ry: -0.5 }, zoom: 1.6,
        html: '<p>La <b>trompe d\'Eustache</b> relie l\'oreille moyenne à la gorge et égalise la pression de l\'air. C\'est pour cela qu\'en avion, en avalant ou en bâillant, les oreilles se « débouchent ».</p><p class="tip">🎧 Protège tes oreilles : avec un casque, ne dépasse pas la moitié du volume.</p>' }
    ],
    facts: [
      { icon: '🔊', title: 'Ça se mesure en décibels', html: 'L\'intensité du son se mesure en <b>décibels</b> (dB) : un murmure 30 dB, une conversation 60 dB, un concert de rock 110 dB. Au-dessus de 85 dB, longtemps, l\'ouïe s\'abîme.' },
      { icon: '🐕', title: 'Des sons que nous n\'entendons pas', html: 'Nous entendons des sons de 20 à 20 000 vibrations par seconde. Les chiens vont jusqu\'à 45 000, les chauves-souris et les dauphins dépassent 100 000 (ultrasons) !' },
      { icon: '😴', title: 'Toujours allumées', html: 'Les oreilles ne s\'« éteignent » jamais, même quand tu dors : c\'est le cerveau qui ignore les bruits, mais un réveil ou ton prénom te réveillent.' },
      { icon: '🦉', title: 'Des oreilles de travers', html: 'L\'effraie des clochers a une oreille plus haute que l\'autre : ainsi elle comprend avec précision où se cache une petite souris dans le noir.' },
      { icon: '🎤', title: 'Ta voix enregistrée', html: 'Ta voix enregistrée te paraît bizarre parce que, quand tu parles, tu l\'entends aussi à travers les <b>os du crâne</b>, qui la rendent plus grave.' }
    ],
    quiz: [
      { type: 'order', q: 'Remets dans l\'ordre le voyage du son', items: ['Pavillon', 'Conduit auditif', 'Tympan', 'Osselets', 'Cochlée', 'Nerf auditif'], explain: 'De l\'oreille externe à l\'oreille moyenne, puis à l\'oreille interne et enfin au cerveau.' },
      { type: 'mc', q: 'Quel est le plus petit os du corps humain ?', options: ['Le marteau', 'L\'étrier', 'La rotule', 'L\'enclume'], answer: 1, explain: 'L\'étrier, dans l\'oreille moyenne, mesure environ 3 mm.' },
      { type: 'mc', q: 'Que contient la cochlée ?', options: ['De l\'air', 'Du liquide', 'Du sable', 'Du sang'], answer: 1, explain: 'La cochlée est pleine de liquide : son mouvement plie les cellules ciliées.' },
      { type: 'tf', q: 'Les canaux semi-circulaires servent à l\'équilibre.', answer: true, explain: 'Le liquide dans les trois anneaux signale au cerveau les mouvements de la tête.' },
      { type: 'mc', q: 'Qu\'est-ce que le son ?', options: ['Une lumière invisible', 'Une vibration qui voyage dans l\'air', 'Un gaz', 'Un courant électrique'], answer: 1, explain: 'Le son est une vibration qui se propage dans une matière, comme l\'air ou l\'eau.' },
      { type: 'mc', q: 'Pourquoi, en avion, avaler « débouche » les oreilles ?', options: ['Parce que cela nettoie le conduit', 'Parce que cela ouvre la trompe d\'Eustache et égalise la pression', 'Parce que cela fait vibrer le tympan', 'Parce que cela ferme la cochlée'], answer: 1, explain: 'La trompe d\'Eustache relie l\'oreille moyenne et la gorge et égalise la pression.' }
    ]
  });
})();
