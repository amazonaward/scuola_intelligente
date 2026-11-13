/* Il pannello solare fotovoltaico: a sinistra il modulo su un cavalletto (strati che si separano con Esplodi),
   a destra una cella "ingrandita" per vedere come la luce mette in moto gli elettroni e accende una lampadina. */
(function () {
  const TILT = 30, PC = [0, 1.7, 0], D = Math.PI / 180;
  const N = [0, Math.cos(TILT * D), Math.sin(TILT * D)];               // normale del pannello
  const along = (k) => [0, N[1] * k, N[2] * k];
  const W = (x, y, z) => [x, PC[1] + y * Math.cos(TILT * D) - z * Math.sin(TILT * D), y * Math.sin(TILT * D) + z * Math.cos(TILT * D)];
  const P = (shapes) => [ { t: 'group', pos: PC, rot: [TILT, 0, 0], shapes } ];
  const CS = 0.33, NX = 6, NZ = 10, PW = NX * CS, PL = NZ * CS;
  const cells = [];
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [CS - 0.02, 0.012, CS - 0.02], pos: [-PW / 2 + CS * (i + 0.5), 0, -PL / 2 + CS * (j + 0.5)] });
  for (let i = 0; i < NX; i++) for (const o of [-0.08, 0.08]) cells.push({ t: 'box', s: [0.014, 0.004, PL - 0.04], pos: [-PW / 2 + CS * (i + 0.5) + o, 0.008, 0], color: '#e2e8f0', decal: 1 });
  for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [PW - 0.04, 0.003, 0.006], pos: [0, 0.008, -PL / 2 + CS * (j + 0.5)], color: '#64748b', decal: 1 });
  const SUN = [-3.4, 5.3, 1.6];
  const photonsPanel = [[-0.6, -1.0], [0.5, -0.3], [-0.2, 0.6], [0.7, 1.2], [-0.8, 0.2], [0.2, -1.4]].map(([x, z], k) => {
    const end = W(x, 0.03, z); return { t: 'sphere', r: 0.06, n: 6, m: 8, pos: SUN, color: '#fde047', anim: [ { type: 'path', pts: [SUN, end], wave: 'saw', rate: 0.6, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.1, rate: 0.6, phase: k / 6 } ] };
  });
  /* cella ingrandita */
  const ZX = 3.7, ZY = 0.9;                                           // base del blocco
  const TOPN = ZY + 0.95, JUN = ZY + 0.72;
  const CIRCUIT = [[ZX + 0.55, TOPN + 0.05, 0], [ZX + 0.55, TOPN + 0.5, 0], [ZX + 1.25, TOPN + 0.9, 0], [ZX + 1.45, TOPN + 0.9, 0], [ZX + 1.55, TOPN + 0.5, 0], [ZX + 1.55, ZY - 0.05, 0], [ZX + 0.85, ZY - 0.05, 0]];
  const electrons = [];
  for (let k = 0; k < 12; k++) {
    const x = ZX - 0.5 + (k % 4) * 0.3, z = -0.3 + (k % 3) * 0.3;
    const pts = [[x, JUN, z], [x, TOPN, z], [ZX + 0.55, TOPN + 0.05, z * 0.2]].concat(CIRCUIT.slice(1), [[ZX + 0.2, ZY - 0.05, 0], [x, ZY + 0.05, z], [x, JUN - 0.05, z]]);
    electrons.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#2563eb', anim: { type: 'path', pts, wave: 'saw', rate: 0.22, phase: k / 12 } });
  }
  const holes = Array.from({ length: 8 }, (_, k) => { const x = ZX - 0.6 + (k % 4) * 0.35, z = -0.35 + (k % 2) * 0.6; return { t: 'sphere', r: 0.05, n: 6, m: 8, pos: [x, JUN - 0.05, z], color: '#f87171', anim: [ { type: 'path', pts: [[x, JUN - 0.05, z], [x + 0.05, ZY + 0.08, z]], wave: 'saw', rate: 0.45, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.45, phase: k / 8 } ] }; });
  const photonsCell = Array.from({ length: 6 }, (_, k) => { const x = ZX - 0.6 + k * 0.24, z = -0.2 + (k % 3) * 0.2; return { t: 'sphere', r: 0.055, n: 6, m: 8, pos: [x - 0.6, TOPN + 1.4, z], color: '#fde047', anim: [ { type: 'path', pts: [[x - 0.6, TOPN + 1.4, z], [x, JUN, z]], wave: 'saw', rate: 0.7, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.92, ramp: 0.08, rate: 0.7, phase: k / 6 } ] }; });
  const cellOnPanel = W(-PW / 2 + CS * 5.5, 0.02, -PL / 2 + CS * 6.5);

  LIBRARY({
    lang: 'fr',
    id: 'pannello-solare',
    title: 'Le panneau solaire',
    intro: 'Un panneau solaire <b>photovoltaïque</b> transforme la lumière du Soleil directement en <b>électricité</b>, sans bruit, sans fumée et sans pièces qui bougent. Le secret est dans un matériau spécial : le <b>silicium</b>.',
    model: {
      rx: 0.32, ry: -0.35, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'sole', name: 'Soleil', color: '#fbbf24', explode: [-0.6, 0.4, 0],
          info: '<p>Le Soleil envoie sur la Terre une énorme quantité d\'énergie sous forme de lumière : en une heure, il en arrive plus que l\'humanité n\'en utilise en une année entière !</p>',
          shapes: [ { t: 'sphere', r: 0.6, n: 16, m: 24, pos: SUN }, { t: 'sphere', r: 0.8, n: 14, m: 20, pos: SUN, color: '#fde68a', alpha: 0.3, anim: { type: 'scale', from: 1, to: 1.12, rate: 0.6 } } ]
            .concat(Array.from({ length: 10 }, (_, k) => ({ t: 'group', pos: SUN, rot: [0, 0, k * 36], shapes: [ { t: 'cone', r: 0.08, h: 0.35, n: 8, pos: [0, 0.95, 0], color: '#fcd34d', anim: { type: 'move', dir: [0, 1, 0], amp: 0.06, rate: 1, phase: k * 0.1 } } ] }))) },
        { id: 'luce', name: 'Lumière du Soleil (photons)', label: 'Photons', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>La lumière est faite de minuscules « paquets » d\'énergie appelés <b>photons</b>. Quand un photon frappe une cellule solaire, il peut donner son énergie à un électron.</p>',
          shapes: photonsPanel.concat(photonsCell) },
        { id: 'vetro', name: 'Verre trempé', label: 'Verre', color: '#e0f2fe', alpha: 0.3, explode: along(2.2),
          info: '<p>Une couche de <b>verre</b> très résistant protège les cellules de la pluie, de la neige et de la grêle, tout en laissant passer presque toute la lumière.</p>',
          more: '<p>Le verre est traité pour <b>ne pas réfléchir</b> la lumière (antireflet) et il est trempé : il résiste à des grêlons de 2,5 cm lancés à 80 km/h.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.02, 0.03, PL + 0.02], pos: [0, 0.045, 0] } ]) },
        { id: 'eva', name: 'Couches d\'EVA (la « colle »)', label: 'EVA', color: '#f8fafc', alpha: 0.22, explode: along(1.5),
          info: '<p>Deux feuilles de plastique transparent enveloppent les cellules comme dans un sandwich : elles les collent au verre et les protègent de l\'humidité.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.012, PL], pos: [0, 0.022, 0] }, { t: 'box', s: [PW, 0.012, PL], pos: [0, -0.02, 0], color: '#e2e8f0' } ]) },
        { id: 'celle', name: 'Cellules solaires', label: 'Cellules', color: '#1e3a8a', explode: along(0.8),
          info: '<p>Les <b>cellules</b> sont de minuscules carrés très fins de <b>silicium</b>, le matériau du sable. Chaque cellule produit un petit courant ; reliées ensemble (ici 60), elles produisent assez d\'énergie pour beaucoup d\'appareils électroménagers.</p>',
          more: '<p>Chaque cellule donne environ <b>0,5 volt</b> : en les reliant à la file (en série), les tensions s\'additionnent, comme les piles d\'une télécommande. Les lignes argentées sont les <b>contacts</b> qui recueillent le courant.</p>',
          shapes: P(cells) },
        { id: 'retro', name: 'Feuille arrière', label: 'Dos', color: '#f8fafc', explode: along(-0.5),
          info: '<p>Une feuille de plastique blanc ferme le panneau à l\'arrière : elle isole les parties électriques et le protège de l\'eau et du soleil.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.015, PL], pos: [0, -0.035, 0] } ]) },
        { id: 'cornice', name: 'Cadre en aluminium', label: 'Cadre', color: '#cbd5e1', explode: along(0),
          info: '<p>Un cadre en <b>aluminium</b>, léger et qui ne rouille pas, rend le panneau rigide et permet de le fixer à la structure.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, PL / 2 + 0.04] }, { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, -PL / 2 - 0.04] },
            { t: 'box', s: [0.08, 0.1, PL], pos: [PW / 2 + 0.04, 0, 0] }, { t: 'box', s: [0.08, 0.1, PL], pos: [-PW / 2 - 0.04, 0, 0] },
            { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, PL / 2 + 0.07], color: '#e2e8f0' }, { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, -PL / 2 - 0.07], color: '#e2e8f0' } ]) },
        { id: 'scatola', name: 'Boîte de jonction et câbles', label: 'Boîte de jonction', color: '#1f2937', explode: along(-1.0),
          info: '<p>Derrière le panneau, une petite boîte recueille le courant de toutes les cellules. Elle contient les <b>diodes</b>, qui évitent des problèmes si une partie du panneau est à l\'ombre.</p>',
          shapes: P([ { t: 'box', s: [0.36, 0.08, 0.22], pos: [0, -0.09, -PL / 2 + 0.35] }, { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.12, -0.12, -PL / 2 + 0.35], [0.4, -0.3, -PL / 2 + 0.6], [0.6, -0.6, -0.3]], color: '#111827' },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[-0.12, -0.12, -PL / 2 + 0.35], [-0.4, -0.3, -PL / 2 + 0.6], [-0.5, -0.6, -0.3]], color: '#b91c1c' } ]) },
        { id: 'struttura', name: 'Structure de soutien', label: 'Structure', color: '#94a3b8', explode: [0, -0.5, 0],
          info: '<p>Le support tient le panneau <b>incliné</b> vers le Soleil. En Italie, la meilleure inclinaison est d\'environ 30°, orienté vers le <b>sud</b>.</p>',
          more: '<p>Certaines installations ont des « suiveurs » : des moteurs qui tournent les panneaux pendant la journée pour suivre le Soleil, comme les tournesols, et qui produisent jusqu\'à 30 % de plus.</p>',
          shapes: [-0.75, 0.75].flatMap((x) => [ { t: 'pipe', r: 0.04, n: 8, pts: [W(x, -0.09, PL / 2 - 0.15), W(x, -0.09, -PL / 2 + 0.15)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, PL / 2 - 0.2)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, -PL / 2 + 0.3)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'pipe', r: 0.025, n: 6, pts: [[x, 0.05, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, PL / 2 - 0.2)[2]], color: '#78716c' }, { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, -PL / 2 + 0.3)[2]], color: '#78716c' } ]) },
        { id: 'zoom', name: 'Une cellule au microscope', label: 'Cellule agrandie', color: '#94a3b8', explode: [0, 0, 0], chip: true, noLabel: true,
          info: '<p>Agrandissons une seule cellule et regardons-la « en coupe » : elle est faite de deux couches de silicium différentes, l\'une sur l\'autre.</p>',
          shapes: [ { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, TOPN, 0.5]], color: '#64748b', alpha: 0.5 }, { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, ZY, 0.5]], color: '#64748b', alpha: 0.5 },
            { t: 'box', s: [0.36, 0.03, 0.36], pos: cellOnPanel, rot: [TILT, 0, 0], color: '#facc15', alpha: 0.6 } ] },
        { id: 'silicio-n', name: 'Silicium de type N', label: 'Silicium N', color: '#60a5fa', explode: [0, 0.5, 0],
          info: '<p>La couche fine du dessus. On a ajouté au silicium une pincée de <b>phosphore</b> : il a donc quelques électrons (charge négative, N) en plus.</p>',
          more: '<p>Ajouter de très petites quantités d\'un autre élément s\'appelle le <b>dopage</b>. Entre la couche N et la couche P se forme la <b>jonction</b> : une sorte de « toboggan » électrique qui pousse les électrons toujours dans la même direction.</p>',
          shapes: [ { t: 'box', s: [1.6, 0.22, 1.0], pos: [ZX, ZY + 0.84, 0] }, { t: 'box', s: [1.6, 0.02, 1.0], pos: [ZX, TOPN - 0.0, 0], color: '#1e3a8a' } ] },
        { id: 'giunzione', name: 'Jonction P-N', label: 'Jonction', color: '#a855f7', explode: [0, 0.25, 0],
          info: '<p>La frontière entre les deux couches. Ici il y a un petit champ électrique : quand la lumière « libère » un électron, la jonction le pousse vers le haut et la <b>lacune</b> (la place vide) vers le bas.</p>',
          shapes: [ { t: 'box', s: [1.62, 0.05, 1.02], pos: [ZX, JUN, 0], anim: { type: 'blink', color: '#f0abfc', amount: 0.6, rate: 1.4 } } ] },
        { id: 'silicio-p', name: 'Silicium de type P', label: 'Silicium P', color: '#f9a8d4', explode: [0, -0.2, 0],
          info: '<p>La couche épaisse du dessous. Ici on a ajouté au silicium une pincée de <b>bore</b> : il manque quelques électrons et il reste des « places vides », les <b>lacunes</b> (charge positive, P).</p>',
          shapes: [ { t: 'box', s: [1.6, 0.68, 1.0], pos: [ZX, ZY + 0.36, 0] } ] },
        { id: 'contatti', name: 'Contacts métalliques', label: 'Contacts', color: '#e2e8f0', explode: [0, 0, 0.5],
          info: '<p>De fines bandes d\'argent au-dessus (qui laissent passer la lumière) et une plaque d\'aluminium en dessous recueillent les électrons et les envoient dans les fils.</p>',
          shapes: [-0.5, 0, 0.5].map((x) => ({ t: 'box', s: [0.06, 0.05, 1.02], pos: [ZX + x, TOPN + 0.035, 0] })).concat([ { t: 'box', s: [1.62, 0.06, 1.02], pos: [ZX, ZY - 0.02, 0], color: '#9ca3af' } ]) },
        { id: 'elettroni', name: 'Électrons en mouvement', label: 'Électrons', color: '#2563eb', explode: [0, 0, 0], chip: true,
          info: '<p>Les <b>électrons</b> poussés par la jonction sortent par les contacts du haut, passent dans le fil, allument l\'ampoule et rentrent par le bas. Un flux ordonné d\'électrons, c\'est le <b>courant électrique</b> !</p>',
          more: '<p>Le panneau produit du <b>courant continu</b> (les électrons vont toujours dans la même direction), comme une pile. Les prises de la maison, elles, utilisent du courant alternatif : il faut l\'<b>onduleur</b>.</p>',
          shapes: electrons },
        { id: 'lacune', name: 'Lacunes', color: '#f87171', explode: [0, 0, 0], chip: true,
          info: '<p>Les <b>lacunes</b> sont les « trous » laissés par les électrons : elles se comportent comme des charges positives et vont vers le bas, où elles rencontrent les électrons qui reviennent du circuit.</p>',
          shapes: holes },
        { id: 'lampadina', name: 'Circuit et ampoule', label: 'Ampoule', color: '#fde047', explode: [0.4, 0.3, 0],
          info: '<p>En reliant les deux contacts avec un fil, on forme un <b>circuit</b> : le courant produit par la lumière allume l\'ampoule. Si le Soleil se cache, l\'ampoule faiblit.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: CIRCUIT, color: '#b45309' },
            { t: 'sphere', r: 0.22, n: 14, m: 20, pos: [ZX + 1.35, TOPN + 1.15, 0], color: '#fef08a', alpha: 0.85, anim: { type: 'blink', color: '#ffffff', amount: 0.7, rate: 1 } },
            { t: 'cyl', r: 0.1, h: 0.16, n: 14, pos: [ZX + 1.35, TOPN + 0.92, 0], color: '#94a3b8' } ] },
        { id: 'inverter', name: 'Onduleur', color: '#e5e7eb', explode: [0.4, -0.2, 0.6],
          info: '<p>Une boîte qui transforme le courant continu du panneau en <b>courant alternatif</b>, celui des prises de la maison, et l\'envoie au réseau.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.6, 0.2], pos: [1.6, 0.42, 1.2] }, { t: 'box', s: [0.25, 0.12, 0.02], pos: [1.6, 0.55, 1.31], color: '#16a34a', decal: 1, anim: { type: 'blink', color: '#86efac', amount: 0.6, rate: 2 } },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.6, 0.85, -0.3], [1.0, 0.4, 0.3], [1.5, 0.2, 1.15]], color: '#111827' } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'De l\'électricité à partir de la lumière', explode: 0,
        html: '<p>Un panneau solaire n\'a ni moteur ni engrenage : c\'est <b>la lumière elle-même</b> qui produit le courant. Ce phénomène s\'appelle l\'<b>effet photovoltaïque</b> (« photo » = lumière, « volt » = électricité).</p>' },
      { icon: '🥪', title: 'Un sandwich à étages', explode: 1, focus: ['vetro', 'eva', 'celle', 'retro', 'cornice', 'scatola'], view: { rx: 0.25, ry: -0.9 },
        html: '<p>Le panneau est un « sandwich » : en haut le <b>verre</b>, puis le plastique transparent (<b>EVA</b>), les <b>cellules</b> de silicium, une autre couche d\'EVA et la <b>feuille arrière</b>. Le tout est tenu par un <b>cadre</b> en aluminium.</p>' },
      { icon: '🔲', title: 'Les cellules de silicium', focus: ['celle', 'cornice', 'luce'], view: { rx: 0.7, ry: -0.3 }, zoom: 1.3,
        html: '<p>Chaque carré bleu est une <b>cellule</b> de silicium, fine comme une feuille. Les lignes argentées recueillent le courant. Les cellules sont reliées entre elles à la file, comme les piles dans une lampe de poche.</p>' },
      { icon: '🔬', title: 'Une cellule au microscope', focus: ['zoom', 'silicio-n', 'silicio-p', 'giunzione', 'contatti'], view: { rx: 0.2, ry: -0.15 },
        html: '<p>Agrandissons une cellule. Elle est faite de deux couches : le silicium <b>N</b> (dessus) avec des électrons en plus et le silicium <b>P</b> (dessous) avec des « places vides ». Là où elles se touchent, il y a la <b>jonction</b>.</p>' },
      { icon: '⚡', title: 'La lumière libère les électrons', focus: ['luce', 'giunzione', 'elettroni', 'lacune', 'silicio-n', 'silicio-p'], view: { rx: 0.15, ry: -0.05 }, zoom: 1.2,
        html: '<p>Un <b>photon</b> frappe le silicium et « détache » un électron. La jonction pousse l\'<b>électron</b> vers le haut et la <b>lacune</b> vers le bas : une différence de charge se crée, comme dans une pile.</p>' },
      { icon: '💡', title: 'L\'ampoule s\'allume', focus: ['elettroni', 'lampadina', 'contatti', 'lacune'], view: { rx: 0.15, ry: 0.15 },
        html: '<p>Si l\'on relie le dessus et le dessous avec un fil, les électrons circulent dans le <b>circuit</b> : c\'est le <b>courant électrique</b>, qui allume l\'ampoule puis retourne dans la cellule. Tant qu\'il y a de la lumière, le circuit continue !</p>' },
      { icon: '🏠', title: 'Du toit à la prise', focus: ['inverter', 'scatola', 'struttura', 'celle'], view: { rx: 0.3, ry: -0.9 },
        html: '<p>La <b>boîte de jonction</b> recueille le courant, l\'<b>onduleur</b> le transforme en celui des prises de la maison. Le panneau doit être incliné vers le <b>sud</b>, d\'environ 30°, pour prendre le plus de Soleil possible.</p><p class="tip">🌱 L\'énergie solaire est <b>renouvelable</b> et propre : le Soleil brillera encore pendant des milliards d\'années.</p>' }
    ],
    facts: [
      { icon: '🛰️', title: 'Nés pour l\'espace', html: 'Les premiers panneaux solaires pratiques ont été utilisés en 1958 sur le satellite <b>Vanguard 1</b>, qui fonctionne encore aujourd\'hui après plus de 65 ans en orbite !' },
      { icon: '🏖️', title: 'Faits de sable', html: 'Le silicium des cellules s\'obtient à partir du <b>sable</b> (quartz), l\'un des matériaux les plus courants sur Terre.' },
      { icon: '🥵', title: 'Trop de chaleur n\'aide pas', html: 'Les panneaux aiment la lumière, pas la chaleur : quand ils chauffent trop, ils produisent un peu moins. C\'est pour cela qu\'ils fonctionnent très bien par les journées froides et dégagées.' },
      { icon: '⏳', title: 'Longue vie', html: 'Un panneau solaire dure plus de <b>25 ans</b> et, à la fin, on peut le recycler : le verre, l\'aluminium et le silicium sont récupérés presque entièrement.' },
      { icon: '🧮', title: 'Combien produit-il ?', html: 'En Italie, un panneau pour la maison (environ 400 W) produit en un an environ 500 kWh : assez pour faire fonctionner un réfrigérateur toute l\'année.' }
    ],
    quiz: [
      { type: 'mc', q: 'Que transforme un panneau photovoltaïque ?', options: ['La chaleur en vent', 'La lumière en électricité', 'L\'eau en vapeur', 'Le bruit en lumière'], answer: 1, explain: 'C\'est l\'effet photovoltaïque : la lumière met les électrons en mouvement.' },
      { type: 'mc', q: 'De quel matériau sont faites presque toutes les cellules solaires ?', options: ['Cuivre', 'Silicium', 'Bois', 'Plastique'], answer: 1, explain: 'Le silicium, que l\'on obtient à partir du sable.' },
      { type: 'tf', q: 'Un panneau solaire a beaucoup d\'engrenages qui tournent.', answer: false, explain: 'Il n\'a pas de pièces en mouvement : c\'est la lumière qui produit directement le courant.' },
      { type: 'mc', q: 'À quoi sert l\'onduleur ?', options: ['À nettoyer le panneau', 'À transformer le courant continu en courant alternatif', 'À suivre le Soleil', 'À refroidir les cellules'], answer: 1, explain: 'Les prises de la maison utilisent du courant alternatif ; le panneau produit du courant continu.' },
      { type: 'mc', q: 'En Italie, vers quel point cardinal faut-il orienter les panneaux ?', options: ['Nord', 'Sud', 'Est', 'Ouest'], answer: 1, explain: 'Dans notre hémisphère, le Soleil de midi est au sud.' },
      { type: 'order', q: 'Remets dans l\'ordre : comment naît le courant dans la cellule', items: ['Le photon frappe le silicium', 'Un électron se libère', 'La jonction le pousse vers le haut', 'L\'électron parcourt le circuit', 'L\'ampoule s\'allume'], explain: 'Lumière → électron libre → séparation dans la jonction → courant dans le circuit.' }
    ]
  });
})();
