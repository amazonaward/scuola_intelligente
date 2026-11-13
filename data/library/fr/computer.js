/* Il computer (PC fisso). Formato: data/library/FORMATO.md */
(function () {
  /* ventola generica: asse lungo y locale, gira (spin) */
  const fan = (r, color, rate) => [
    { t: 'tube', r: r, ri: r * 0.9, h: 0.06, n: 28, color: '#1f2937' },
    { t: 'group', anim: { type: 'spin', axis: 'y', rate: rate || 3 }, shapes: [
      { t: 'cyl', r: r * 0.28, h: 0.07, n: 16, color: '#374151' }
    ].concat(Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [r * 0.62, 0.012, r * 0.3], pos: [r * 0.58, 0, 0], rot: [28, 0, 0], color: color }] }))) }
  ];
  const keys = [];
  for (let row = 0; row < 3; row++) for (let i = 0; i < 13; i++) keys.push({ t: 'box', decal: 1, s: [0.11, 0.045, 0.1], pos: [-0.81 + i * 0.135, 0.05, -0.2 + row * 0.135], color: row === 0 && i > 10 ? '#fbbf24' : '#f1f5f9' });
  keys.push({ t: 'box', decal: 1, s: [0.7, 0.045, 0.1], pos: [-0.05, 0.05, 0.205], color: '#f1f5f9' });
  keys.push({ t: 'box', decal: 1, s: [0.24, 0.045, 0.1], pos: [0.7, 0.05, 0.205], color: '#f1f5f9' });
  const caps = Array.from({ length: 6 }, (_, k) => ({ t: 'cyl', r: 0.03, h: 0.08, n: 10, pos: [-0.62 + k * 0.07, -0.62, 0.06], rot: [90, 0, 0], color: k % 2 ? '#1e293b' : '#475569' }));

  LIBRARY({
    lang: 'fr',
    id: 'computer',
    title: 'L\'ordinateur',
    intro: 'Un ordinateur est une machine qui <b>suit des instructions</b> à toute vitesse : il reçoit des données (clavier, souris), les <b>traite</b> et affiche le résultat (écran). Ouvre le boîtier en verre et découvre toutes ses pièces !',
    model: {
      rx: 0.3, ry: -0.42, speed: 0.6, height: 470,
      parts: [
        { id: 'case', name: 'Boîtier', label: 'Boîtier', color: '#374151', pos: [1.6, 1.05, -0.3], explode: [0, 0, 0],
          info: '<p>C\'est la « boîte » qui tient ensemble et protège toutes les pièces. Il a un panneau de verre pour regarder à l\'intérieur, des grilles d\'aération et le <b>bouton d\'allumage</b>.</p>',
          more: '<p>Le boîtier est en acier ou en aluminium : en plus de protéger, il fait <b>écran</b> contre les perturbations électromagnétiques et guide l\'air frais de l\'avant vers l\'arrière.</p>',
          shapes: [
            { t: 'box', s: [2, 2, 0.04], pos: [0, 0, -0.43] },
            { t: 'box', s: [2, 0.05, 0.9], pos: [0, 0.975, 0] },
            { t: 'box', s: [2, 0.05, 0.9], pos: [0, -0.975, 0] },
            { t: 'box', s: [0.06, 2, 0.9], pos: [0.97, 0, 0], color: '#1f2937' },
            { t: 'box', s: [0.04, 2, 0.9], pos: [-0.98, 0, 0] },
            { t: 'box', s: [2, 2, 0.02], pos: [0, 0, 0.44], color: '#bfdbfe', alpha: 0.13 },
            { t: 'cyl', r: 0.06, h: 0.03, pos: [1.01, 0.8, 0.1], rot: [0, 0, 90], color: '#22c55e' },
            { t: 'box', s: [0.01, 1.4, 0.04], pos: [1.005, -0.1, -0.25], color: '#38bdf8' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [0.85, -1.02, 0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [-0.85, -1.02, 0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [0.85, -1.02, -0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [-0.85, -1.02, -0.35], color: '#111827' }
          ] },
        { id: 'scheda-madre', name: 'Carte mère', color: '#15803d', pos: [1.45, 1.2, -0.68], explode: [0, 0, 0.35],
          info: '<p>C\'est la « ville » de l\'ordinateur : une grande plaque avec des <b>routes en cuivre</b> (pistes) qui relient toutes les pièces entre elles, comme les rues relient les maisons.</p>',
          more: '<p>Elle contient le <b>support</b> (socket) du processeur, les emplacements pour la RAM et pour les cartes, le <b>chipset</b> qui trie la circulation des données et une petite puce (BIOS/UEFI) avec le premier programme qui démarre à l\'allumage.</p>',
          shapes: [
            { t: 'box', s: [1.5, 1.55, 0.04] },
            { t: 'box', s: [0.42, 0.42, 0.03], pos: [-0.2, 0.35, 0.03], color: '#d1d5db' },
            { t: 'box', s: [0.2, 0.2, 0.05], pos: [0.3, -0.42, 0.04], color: '#1f2937' },
            { t: 'box', s: [1.0, 0.06, 0.06], pos: [-0.12, -0.25, 0.05], color: '#111827' },
            { t: 'box', s: [1.0, 0.06, 0.06], pos: [-0.12, -0.6, 0.05], color: '#111827' },
            { t: 'box', s: [0.05, 0.95, 0.05], pos: [0.32, 0.3, 0.04], color: '#111827' },
            { t: 'box', s: [0.05, 0.95, 0.05], pos: [0.42, 0.3, 0.04], color: '#111827' },
            { t: 'box', s: [0.16, 0.5, 0.26], pos: [-0.68, 0.42, 0.15], color: '#9ca3af' }
          ].concat(caps) },
        { id: 'cpu', name: 'Processeur (CPU)', label: 'CPU', color: '#cbd5e1', pos: [1.25, 1.55, -0.635], explode: [0, 0.2, 1.25],
          info: '<p>C\'est le <b>cerveau</b> de l\'ordinateur : il exécute les instructions des programmes l\'une après l\'autre, <b>des milliards de fois par seconde</b>. Il fait des calculs et prend des décisions (« si… alors… »).</p>',
          more: '<p>À l\'intérieur, il y a des <b>milliards de transistors</b>, des interrupteurs minuscules qui s\'allument et s\'éteignent (1 et 0). La vitesse se mesure en gigahertz : 3 GHz = 3 milliards de « coups » d\'horloge par seconde. Les processeurs modernes ont plusieurs <b>cœurs</b>, c\'est-à-dire plusieurs cerveaux qui travaillent ensemble.</p>',
          shapes: [ { t: 'box', s: [0.34, 0.34, 0.03], color: '#166534' }, { t: 'box', s: [0.27, 0.27, 0.03], pos: [0, 0, 0.025] } ] },
        { id: 'dissipatore', name: 'Dissipateur', color: '#d1d5db', pos: [1.25, 1.55, -0.38], explode: [0, 0.25, 2.05],
          info: '<p>En travaillant, le processeur chauffe énormément. Le dissipateur est fait de nombreuses <b>ailettes métalliques</b> qui emportent la chaleur, comme un radiateur à l\'envers.</p>',
          more: '<p>Les <b>tubes de cuivre</b> (caloducs) contiennent un liquide qui s\'évapore près du processeur et se recondense entre les ailettes : ainsi la chaleur voyage très vite. Entre le processeur et le dissipateur, on met de la <b>pâte thermique</b>.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.3, 0.05], pos: [0, 0, -0.23], color: '#b45309' } ]
            .concat(Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.3, 0.014, 0.42], pos: [0, -0.27 + k * 0.054, 0.02] })))
            .concat([-0.08, 0, 0.08].map((x) => ({ t: 'cyl', r: 0.022, h: 0.64, n: 8, pos: [x, 0, 0.02], color: '#c2410c' }))) },
        { id: 'ventola-cpu', name: 'Ventilateur du processeur', label: 'Ventilateur CPU', color: '#60a5fa', pos: [1.45, 1.55, -0.36], rot: [0, 0, 90], explode: [0.7, 0.25, 2.05],
          info: '<p>Il souffle de l\'air frais entre les ailettes du dissipateur, pour que la chaleur s\'en aille plus vite. Plus le processeur travaille, plus le ventilateur tourne vite.</p>',
          shapes: fan(0.25, '#60a5fa', 3) },
        { id: 'ram', name: 'RAM (mémoire de travail)', label: 'RAM', color: '#1e3a8a', pos: [1.82, 1.5, -0.51], explode: [0.45, 0.1, 1.45],
          info: '<p>C\'est l\'<b>établi</b> de l\'ordinateur : elle garde les données des programmes ouverts, pour que le processeur les prenne au vol. Elle est très rapide, mais quand tu éteins l\'ordinateur, <b>tout s\'efface</b>.</p>',
          more: '<p>RAM veut dire <i>Random Access Memory</i> (mémoire à accès aléatoire) : on peut lire n\'importe quel endroit en quelques nanosecondes. Un PC d\'aujourd\'hui a en général 8 à 32 Go de RAM. S\'il y en a peu, l\'ordinateur devient lent parce qu\'il doit utiliser le disque.</p>',
          shapes: [-0.05, 0.05].map((x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
            { t: 'box', s: [0.035, 0.9, 0.28] },
            { t: 'box', s: [0.04, 0.9, 0.03], pos: [0, 0, 0.15], color: '#a855f7', anim: { type: 'blink', color: '#22d3ee', rate: 0.5, phase: x } }
          ] })) },
        { id: 'ssd', name: 'SSD (mémoire de stockage)', label: 'SSD', color: '#111827', pos: [1.25, 1.12, -0.645], explode: [0, -0.05, 1.15],
          info: '<p>C\'est l\'« entrepôt » où restent enregistrés programmes, photos et jeux <b>même quand l\'ordinateur est éteint</b>. Il n\'a pas de pièces mobiles : il utilise des puces de mémoire flash, comme une clé USB.</p>',
          more: '<p>SSD signifie <i>Solid State Drive</i>. Il est bien plus rapide que l\'ancien <b>disque dur</b> (HDD) avec ses plateaux qui tournent. Quand tu ouvres un programme, ses données sont copiées du SSD vers la RAM.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.17, 0.02] }, { t: 'box', s: [0.34, 0.12, 0.006], pos: [-0.05, 0, 0.013], decal: 2, color: '#f97316' }, { t: 'box', s: [0.1, 0.1, 0.012], pos: [0.22, 0, 0.014], color: '#334155' } ] },
        { id: 'scheda-video', name: 'Carte graphique (GPU)', label: 'Carte graphique', color: '#1f2937', pos: [1.3, 0.83, -0.425], explode: [0, -0.5, 1.6],
          info: '<p>Elle dessine les images que tu vois à l\'écran : elle calcule la couleur de <b>millions de pixels</b>, environ <b>60 fois par seconde</b>. Dans les jeux vidéo, elle travaille énormément !</p>',
          more: '<p>Le GPU a des milliers de petits cœurs qui travaillent <b>en parallèle</b> : il est parfait pour faire beaucoup d\'opérations identiques en même temps. C\'est pour cela qu\'on l\'utilise aussi aujourd\'hui pour entraîner l\'<b>intelligence artificielle</b>.</p>',
          shapes: [
            { t: 'box', s: [1.3, 0.12, 0.47] },
            { t: 'box', s: [1.3, 0.03, 0.45], pos: [0, 0.075, 0], color: '#065f46' },
            { t: 'box', s: [1.3, 0.02, 0.05], pos: [0, 0.07, 0.22], color: '#ef4444' },
            { t: 'box', s: [0.04, 0.18, 0.5], pos: [-0.67, 0.02, 0.0], color: '#9ca3af' },
            { t: 'group', pos: [0.3, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) },
            { t: 'group', pos: [-0.25, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) }
          ] },
        { id: 'alimentatore', name: 'Alimentation', color: '#111827', pos: [1.0, 0.31, -0.32], explode: [-0.2, -0.35, 1.35],
          info: '<p>Elle prend le courant de la prise de la maison (230 volts, beaucoup trop fort !) et le transforme en courant <b>plus faible et continu</b> (12, 5 et 3,3 volts) adapté à chaque pièce.</p>',
          more: '<p>Le courant de la prise est <b>alternatif</b> : il change de sens 50 fois par seconde. L\'alimentation l\'abaisse, le « redresse » et le rend stable. Une bonne alimentation gaspille peu d\'énergie en chaleur.</p>',
          shapes: [
            { t: 'box', s: [0.75, 0.42, 0.82] },
            { t: 'group', pos: [0, 0.2, 0.05], shapes: fan(0.22, '#4b5563', 2) },
            { t: 'box', s: [0.3, 0.005, 0.2], pos: [0.15, 0.212, -0.28], color: '#fbbf24' },
            { t: 'pipe', r: 0.035, curve: true, pts: [[0.3, 0.2, -0.3], [0.4, 0.5, -0.35], [0.55, 1.0, -0.3], [0.62, 1.3, -0.32]], color: '#f59e0b' },
            { t: 'pipe', r: 0.03, curve: true, pts: [[0.25, 0.2, -0.2], [0.35, 0.45, -0.15], [0.4, 0.55, -0.1]], color: '#ef4444' }
          ] },
        { id: 'ventola-case', name: 'Ventilateur du boîtier', label: 'Ventilateur boîtier', color: '#a78bfa', pos: [0.67, 1.6, -0.35], rot: [0, 0, 90], explode: [-0.9, 0.1, 0.6],
          info: '<p>Il évacue l\'air chaud du boîtier. Avec le ventilateur du processeur, il crée un <b>courant d\'air</b> : l\'air entre frais à l\'avant, sort chaud à l\'arrière.</p>',
          shapes: fan(0.27, '#a78bfa', 2) },
        { id: 'monitor', name: 'Écran', color: '#1f2937', pos: [-1.0, 0, -0.4], explode: [-0.7, 0.15, 0],
          info: '<p>C\'est un périphérique de <b>sortie</b> (output) : il montre les images préparées par la carte graphique. L\'écran est fait de millions de petits points, les <b>pixels</b>.</p>',
          more: '<p>Chaque pixel a trois lumières : <b>rouge, verte et bleue</b> (RVB). En les mélangeant avec des intensités différentes, on obtient des millions de couleurs. Un écran Full HD a 1920 × 1080 = plus de 2 millions de pixels.</p>',
          shapes: [
            { t: 'box', s: [0.8, 0.04, 0.45], pos: [0, 0.02, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.75, 0.07], pos: [0, 0.42, -0.08], color: '#4b5563' },
            { t: 'box', s: [2.3, 1.35, 0.08], pos: [0, 1.35, 0] },
            { t: 'box', s: [2.18, 1.23, 0.01], pos: [0, 1.37, 0.045], decal: 1, color: '#2563eb' },
            { t: 'box', s: [1.0, 0.6, 0.006], pos: [-0.25, 1.45, 0.052], decal: 2, color: '#f8fafc' },
            { t: 'box', s: [1.0, 0.08, 0.008], pos: [-0.25, 1.71, 0.054], decal: 2, color: '#4c7cf3' },
            { t: 'box', s: [0.5, 0.05, 0.008], pos: [-0.38, 1.5, 0.056], decal: 2, color: '#94a3b8' },
            { t: 'box', s: [0.7, 0.05, 0.008], pos: [-0.28, 1.38, 0.056], decal: 2, color: '#cbd5e1' },
            { t: 'box', s: [0.45, 0.35, 0.007], pos: [0.62, 1.15, 0.053], decal: 2, color: '#fde68a' },
            { t: 'box', s: [2.18, 0.08, 0.008], pos: [0, 0.795, 0.053], decal: 2, color: '#0f172a' },
            { t: 'box', s: [0.02, 0.07, 0.01], pos: [-0.5, 1.38, 0.06], decal: 3, color: '#111827', anim: { type: 'blink', fade: true, wave: 'square', rate: 2 } }
          ] },
        { id: 'tastiera', name: 'Clavier', color: '#334155', pos: [-0.9, 0.03, 0.75], explode: [0, 0, 0.75],
          info: '<p>C\'est un périphérique d\'<b>entrée</b> (input) : chaque touche que tu appuies ferme un petit circuit et envoie à l\'ordinateur un <b>code</b>, un nombre qui indique la lettre.</p>',
          more: '<p>La disposition des lettres s\'appelle <b>QWERTY</b> (les six premières lettres en haut à gauche) et a été inventée pour les machines à écrire vers 1870. En France, on utilise surtout la disposition <b>AZERTY</b>.</p>',
          shapes: [ { t: 'box', s: [1.9, 0.06, 0.62] } ].concat(keys) },
        { id: 'mouse', name: 'Souris', color: '#e5e7eb', pos: [0.55, 0.0, 0.85], explode: [0.6, 0, 0.6],
          info: '<p>La souris aussi est un périphérique d\'<b>entrée</b> : une petite caméra en dessous regarde la table et comprend comment tu la bouges ; ainsi la flèche se déplace à l\'écran.</p>',
          more: '<p>Le capteur optique prend des milliers de « photos » par seconde de la surface et les compare pour calculer le déplacement. La première souris (1964, Douglas Engelbart) était en bois !</p>',
          shapes: [
            { t: 'sphere', r: 1, n: 10, hemi: true, scale: [0.17, 0.12, 0.27] },
            { t: 'cyl', r: 0.028, h: 0.03, n: 12, pos: [0, 0.115, -0.1], rot: [0, 0, 90], color: '#ef4444' },
            { t: 'box', s: [0.004, 0.02, 0.14], pos: [0, 0.11, -0.13], color: '#94a3b8' }
          ] }
      ]
    },
    steps: [
      { icon: '🔌', title: 'Ça s\'allume !', focus: ['alimentatore', 'case'], explode: 0.25, view: { rx: 0.3, ry: -0.2 },
        html: '<p>Appuie sur le <b>bouton vert</b> du boîtier. L\'<b>alimentation</b> prend le courant de la prise et le transforme en courant plus faible, adapté aux circuits délicats de l\'ordinateur.</p><p class="tip">⚠️ N\'ouvre jamais un ordinateur allumé ou branché à la prise !</p>' },
      { icon: '🏙️', title: 'La carte mère relie tout', focus: ['scheda-madre'], explode: 0.5,
        html: '<p>Le courant arrive à la <b>carte mère</b>. C\'est comme une ville : les pistes de cuivre sont des routes sur lesquelles voyagent électricité et données d\'une pièce à l\'autre.</p><p>Le premier à démarrer est un petit programme (le <b>BIOS</b>) qui vérifie que tout fonctionne.</p>' },
      { icon: '📦', title: 'De l\'entrepôt à l\'établi', focus: ['ssd', 'ram'], explode: 0.75,
        html: '<p>Les programmes sont enregistrés dans le <b>SSD</b>, l\'entrepôt qui n\'oublie pas. Quand tu ouvres un jeu, ses données sont copiées dans la <b>RAM</b>, l\'établi : elle est très rapide, mais se vide quand tu éteins.</p><p class="tip">🧠 C\'est comme prendre un livre dans la bibliothèque (SSD) et l\'ouvrir sur le bureau (RAM).</p>' },
      { icon: '🧠', title: 'Le processeur exécute les instructions', focus: ['cpu', 'ram'], explode: 0.85,
        html: '<p>Le <b>processeur</b> lit dans la RAM les instructions du programme et les exécute l\'une après l\'autre : il additionne, compare, décide. Il le fait <b>des milliards de fois par seconde</b> !</p><p>Pour lui, tout est fait de <b>0 et de 1</b> : courant éteint ou allumé.</p>' },
      { icon: '🌬️', title: 'On se rafraîchit !', focus: ['dissipatore', 'ventola-cpu', 'ventola-case', 'cpu'], explode: 0.5,
        html: '<p>Tant de travail produit de la <b>chaleur</b>. Le <b>dissipateur</b> la recueille avec ses ailettes, le <b>ventilateur</b> souffle l\'air chaud et le ventilateur du boîtier le rejette dehors.</p><p>Sans refroidissement, le processeur s\'éteindrait tout seul pour ne pas brûler.</p>' },
      { icon: '🎨', title: 'La carte graphique dessine', focus: ['scheda-video', 'monitor'], explode: 0.6,
        html: '<p>La <b>carte graphique</b> calcule la couleur de chaque pixel et envoie l\'image à l\'<b>écran</b> par un câble, environ 60 fois par seconde : c\'est pour cela que tu vois les choses bouger de façon fluide.</p>' },
      { icon: '⌨️', title: 'Tu commandes : entrée et sortie', focus: ['tastiera', 'mouse', 'monitor'], explode: 0, view: { rx: 0.45, ry: -0.6 },
        html: '<p>Le <b>clavier et la souris</b> sont des périphériques d\'<b>entrée</b> (input) : ils font entrer tes commandes dans l\'ordinateur. L\'<b>écran</b> est un périphérique de <b>sortie</b> (output).</p><p class="tip">🔁 Entrée → traitement (processeur) → sortie : c\'est le cycle de tout ordinateur, même du smartphone !</p>' }
    ],
    facts: [
      { icon: '🐘', title: 'Le géant ENIAC', html: 'Un des premiers ordinateurs, l\'ENIAC (1946), pesait 27 tonnes et occupait une pièce entière. Ton téléphone est des millions de fois plus puissant !' },
      { icon: '🦋', title: 'Le premier « bug »', html: 'En 1947, un papillon de nuit est resté coincé dans un ordinateur et l\'a bloqué. Depuis, les erreurs des programmes s\'appellent <i>bugs</i>, c\'est-à-dire « insectes ».' },
      { icon: '🔬', title: 'Des milliards d\'interrupteurs', html: 'Un processeur moderne contient des dizaines de milliards de transistors, chacun des milliers de fois plus fin qu\'un cheveu.' },
      { icon: '0️⃣', title: 'Seulement des 0 et des 1', html: 'Textes, photos, musique et vidéos, dans l\'ordinateur, sont de très longues suites de 0 et de 1 : le <b>code binaire</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'Quelle pièce est le « cerveau » qui exécute les instructions ?', options: ['La RAM', 'Le processeur (CPU)', 'L\'écran', 'L\'alimentation'], answer: 1, explain: 'Le processeur (CPU) exécute les instructions des programmes, des milliards de fois par seconde.' },
      { type: 'tf', q: 'Quand tu éteins l\'ordinateur, les données de la RAM restent enregistrées.', answer: false, explain: 'La RAM s\'efface quand le courant manque : les données restent en revanche dans le SSD.' },
      { type: 'mc', q: 'À quoi servent le dissipateur et le ventilateur ?', options: ['À faire du bruit', 'À emporter la chaleur', 'À enregistrer les fichiers', 'À se connecter à Internet'], answer: 1, explain: 'Le processeur chauffe : les ailettes du dissipateur recueillent la chaleur et le ventilateur la souffle dehors.' },
      { type: 'mc', q: 'Lequel de ces périphériques est un périphérique de SORTIE (output) ?', options: ['Clavier', 'Souris', 'Écran', 'Microphone'], answer: 2, explain: 'L\'écran montre les résultats : c\'est un périphérique de sortie. Clavier, souris et microphone sont des périphériques d\'entrée.' },
      { type: 'mc', q: 'Que fait l\'alimentation ?', options: ['Elle transforme le courant de la prise en courant adapté aux circuits', 'Elle dessine les images', 'Elle refroidit la carte graphique', 'Elle conserve les photos'], answer: 0, explain: 'Elle abaisse les 230 V de la prise à 12, 5 et 3,3 V de courant continu.' },
      { type: 'order', q: 'Remets dans l\'ordre le voyage d\'un programme que tu ouvres', items: ['Il est enregistré dans le SSD', 'Il est copié dans la RAM', 'Le processeur exécute ses instructions', 'Le résultat apparaît sur l\'écran'], explain: 'Entrepôt (SSD) → établi (RAM) → cerveau (processeur) → sortie (écran).' }
    ]
  });
})();
