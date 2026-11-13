/* Il treno elettrico ad alta velocità (motrice di testa). Il treno viaggia verso +x; alto = +y; i binari corrono lungo x (scartamento: z = ±0.43).
   Le traversine scorrono all'indietro per dare l'idea del movimento. */
(function () {
  const TAU = Math.PI * 2, RW = 0.28, WR = 2.2; // raggio ruota, velocità di rotazione delle ruote
  const SPEED = WR * TAU * RW;           // velocità del treno (unità per giro dell'orologio)
  const SL = 0.6;                        // passo delle traversine
  const PROFILE = [[-3.2, 0.62], [2.2, 0.62], [2.75, 0.66], [3.15, 0.78], [3.36, 0.94], [3.34, 1.06], [3.05, 1.3], [2.45, 1.64], [1.85, 1.86], [1.2, 1.92], [-3.2, 1.92]];
  const wheelset = (x) => ({ t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [
    { t: 'cyl', r: 0.05, h: 1.0, n: 12, rot: [90, 0, 0], color: '#6b7280' },
    ...[-0.43, 0.43].map((z) => ({ t: 'cyl', r: RW, h: 0.07, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#9ca3af' })),
    ...[-0.38, 0.38].map((z) => ({ t: 'cyl', r: RW + 0.035, h: 0.025, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#6b7280' })),
    ...[-0.43, 0.43].map((z) => ({ t: 'box', s: [0.3, 0.04, 0.075], pos: [0, 0, z + Math.sign(z) * 0.002], color: '#475569' })) ] });
  const AXLES = [-2.55, -1.75, 1.15, 1.95];
  const bogie = (x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
    { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, 0.52] }, { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, -0.52] }, { t: 'box', s: [0.16, 0.1, 1.04], pos: [0, 0.36, 0] },
    ...[-0.4, 0.4].map((dx) => ({ t: 'pipe', r: 0.012, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 22 }, (_, i) => [dx + 0.05 * Math.cos(i * 1.2), 0.4 + i * 0.008, 0.52 + 0.05 * Math.sin(i * 1.2)]) })) ] });
  const sleepers = Array.from({ length: 15 }, (_, k) => ({ t: 'box', s: [0.16, 0.08, 1.35], pos: [-4.2 + k * SL, -0.07, 0], color: '#78716c', div: 1 }));
  const POLES = [-3.4, 3.4];
  const CUR = [[-1.45, 2.78, 0], [-1.45, 2.2, 0], [-1.45, 1.95, 0], [-1.2, 1.7, 0.1], [-0.5, 0.75, 0.1], [0.0, 0.5, 0.1], [0.65, 0.5, 0.1], [1.1, 0.55, 0.1], [1.15, 0.42, 0.25], [1.15, RW + 0.02, 0.43], [1.15, 0.0, 0.43]];

  LIBRARY({
    lang: 'fr',
    id: 'treno',
    title: 'Le train',
    intro: 'Un train à grande vitesse roule à <b>300 km/h</b> sans brûler de carburant : il prend l\'<b>électricité</b> dans un fil au-dessus des rails et la transforme en mouvement grâce à de puissants moteurs électriques. Des roues d\'acier sur des rails d\'acier : très peu de frottement !',
    model: {
      rx: 0.15, ry: -0.6, speed: 0.4, height: 460, fit: 1.15,
      parts: [
        { id: 'cassa', name: 'Caisse (carrosserie)', label: 'Caisse', color: '#dc2626', alpha: 0.62, explode: [0, 0.9, 0],
          info: '<p>C\'est la « coquille » du train, en aluminium. Le nez profilé <b>fend l\'air</b> : à grande vitesse, la résistance de l\'air est le plus gros effort à vaincre.</p>',
          more: '<p>À 300 km/h, plus de 80 % de l\'énergie sert à déplacer l\'air. C\'est pourquoi les trains rapides ont un nez long, des flancs lisses et même des bogies carénés. Le nez d\'un train japonais a été dessiné en copiant le bec du martin-pêcheur !</p>',
          shapes: [ { t: 'extrude', d: 1.06, pts: PROFILE, smooth: true },
            { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, 0.535], color: '#0f172a', alpha: 0.9, decal: 1 }, { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, -0.535], color: '#0f172a', alpha: 0.9, decal: 1 },
            { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, 0.536], color: '#e5e7eb', alpha: 1, decal: 1 }, { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, -0.536], color: '#e5e7eb', alpha: 1, decal: 1 },
            { t: 'box', s: [0.42, 0.9, 0.012], pos: [-2.75, 1.13, 0.537], color: '#9ca3af', alpha: 0.9, decal: 2 },
            { t: 'box', s: [0.62, 0.02, 0.86], pos: [2.755, 1.478, 0], rot: [0, 0, -30], color: '#0f172a', alpha: 0.95, decal: 1 },
            { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, 0.537], color: '#9ca3af', alpha: 1, decal: 1 }, { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, -0.537], color: '#9ca3af', alpha: 1, decal: 1 },
            { t: 'box', s: [1.6, 0.14, 0.7], pos: [0.3, 1.99, 0], color: '#9ca3af', alpha: 1 } ] },
        { id: 'cabina', name: 'Cabine de conduite', label: 'Cabine', color: '#334155', explode: [0.6, 0.9, 0],
          info: '<p>C\'est là que s\'assoit le <b>conducteur</b>. Il a le levier pour accélérer (le « manipulateur »), le levier de frein, les écrans et la radio. Il n\'y a pas de volant : ce sont les rails qui décident où l\'on va !</p>',
          more: '<p>À grande vitesse, les signaux au bord des voies passeraient beaucoup trop vite : les informations arrivent directement en cabine sur des écrans (système <b>ERTMS</b>). Si le conducteur ne réagit pas, le train freine tout seul.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.35, 0.8], pos: [2.35, 1.0, 0], color: '#1f2937' }, { t: 'box', s: [0.45, 0.04, 0.7], pos: [2.4, 1.2, 0], rot: [0, 0, 20], color: '#475569' },
            { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, 0.0], rot: [0, 0, 20], color: '#22c55e', decal: 1 }, { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, -0.2], rot: [0, 0, 20], color: '#38bdf8', decal: 1 },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [1.75, 0.95, 0.15], color: '#1e3a8a' }, { t: 'box', s: [0.06, 0.4, 0.3], pos: [1.6, 1.15, 0.15], color: '#1e3a8a' } ] },
        { id: 'sedili', name: 'Voiture voyageurs', label: 'Voyageurs', color: '#1d4ed8', explode: [0, 0.9, 0],
          info: '<p>Derrière la cabine se trouvent les <b>sièges</b> des voyageurs. Un train à grande vitesse transporte environ <b>450 à 600 personnes</b> : combien faudrait-il de voitures ?</p>',
          shapes: Array.from({ length: 6 }, (_, k) => [-0.3, 0.3].map((z) => ({ t: 'group', pos: [-2.5 + k * 0.6, 0.66, z], shapes: [ { t: 'box', s: [0.28, 0.1, 0.36], pos: [0, 0.22, 0] }, { t: 'box', s: [0.08, 0.5, 0.36], pos: [-0.12, 0.47, 0] } ] }))).flat() },
        { id: 'pantografo', name: 'Pantographe', color: '#475569', pos: [-1.45, 1.92, 0], explode: [0, 1.6, 0],
          info: '<p>C\'est le « bras » articulé sur le toit qui <b>frotte contre le fil</b> et capte le courant. Un ressort le pousse toujours vers le haut, pour qu\'il ne perde jamais le contact.</p>',
          more: '<p>La bande de frottement tout en haut est en <b>graphite</b>, comme la mine d\'un crayon : elle conduit bien et glisse sur le fil de cuivre. Le fil est posé en zigzag, pour que la bande s\'use de façon régulière.</p>',
          anim: { type: 'move', dir: [0, 1, 0], amp: 0.02, wave: 'sin', rate: 1.5 },
          shapes: [ { t: 'box', s: [0.5, 0.06, 0.5], pos: [0, 0.03, 0], color: '#64748b' }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, 0.15] }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, -0.15] },
            { t: 'pipe', r: 0.025, n: 8, pts: [[-0.2, 0.12, 0], [0.45, 0.48, 0]] }, { t: 'pipe', r: 0.02, n: 8, pts: [[0.45, 0.48, 0], [0.0, 0.83, 0]] },
            { t: 'pipe', r: 0.012, n: 6, pts: [[-0.1, 0.12, 0], [0.4, 0.45, 0]], color: '#94a3b8' },
            { t: 'box', s: [0.1, 0.04, 0.8], pos: [0, 0.85, 0], color: '#1f2937' }, { t: 'box', s: [0.06, 0.03, 0.8], pos: [0, 0.875, 0], color: '#a3a3a3' } ] },
        { id: 'catenaria', name: 'Ligne aérienne (caténaire)', label: 'Caténaire', color: '#b45309', explode: [0, 1.9, 0], anchor: [2.2, 3.2, 0],
          info: '<p>Au-dessus des rails court un <b>fil de cuivre</b> toujours sous tension électrique, suspendu à des poteaux. Sur les lignes à grande vitesse, la tension est de <b>25 000 volts</b> : extrêmement dangereux, ne jamais s\'approcher !</p>',
          more: '<p>Le fil de contact est suspendu par de nombreuses petites « pendules » à un câble plus haut (la vraie <b>caténaire</b>, qui tire son nom de la courbe que forme une chaîne suspendue). Ainsi, il reste parfaitement horizontal. En Italie, les lignes classiques utilisent 3 000 V en courant continu.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-4.2, 2.79, 0], [4.2, 2.79, 0]] },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-4.2, 3.32, 0], [-3.4, 3.35, 0], [0, 3.05, 0], [3.4, 3.35, 0], [4.2, 3.32, 0]], color: '#78716c' },
            ...[-2.4, -1.2, 0, 1.2, 2.4].map((x) => ({ t: 'pipe', r: 0.006, n: 4, pts: [[x, 2.8, 0], [x, 3.12 + 0.1 * (Math.abs(x) / 2.4) ** 2, 0]], color: '#78716c' })),
            ...POLES.flatMap((x) => [ { t: 'cyl', r: 0.07, h: 3.6, n: 12, pos: [x, 1.7, -1.15], color: '#6b7280' }, { t: 'pipe', r: 0.03, n: 6, pts: [[x, 3.35, -1.15], [x, 3.35, 0.1]], color: '#6b7280' },
              { t: 'cyl', r: 0.05, h: 0.2, n: 10, pos: [x, 3.2, 0], color: '#f8fafc' } ]) ] },
        { id: 'trasformatore', name: 'Transformateur', color: '#78350f', pos: [-0.35, 0.47, 0], explode: [0, -0.7, 0.6],
          info: '<p>Le courant du fil est trop « fort » pour les moteurs. Le <b>transformateur</b>, un gros bloc de fer et de cuivre sous le plancher, abaisse la tension de 25 000 à quelques milliers de volts.</p>',
          more: '<p>Un transformateur a deux bobines enroulées sur le même noyau de fer : le courant alternatif de la première crée un champ magnétique qui change, et celui-ci « induit » du courant dans la seconde. Avec moins de spires, la tension est plus basse. Il pèse plusieurs tonnes !</p>',
          shapes: [ { t: 'box', s: [0.9, 0.3, 0.8] }, ...[-0.25, 0, 0.25].map((x) => ({ t: 'cyl', r: 0.1, h: 0.3, n: 16, pos: [x, 0.02, 0.0], color: '#b45309' })), { t: 'box', s: [0.95, 0.03, 0.85], pos: [0, 0.16, 0], color: '#92400e' } ] },
        { id: 'convertitore', name: 'Convertisseur électronique', label: 'Convertisseur', color: '#0f766e', pos: [0.65, 0.47, 0], explode: [0.2, -0.7, 0.6],
          info: '<p>C\'est le « cerveau de puissance » : une armoire pleine d\'électronique qui dose la quantité de courant envoyée aux moteurs. Plus de courant = plus de vitesse.</p>',
          more: '<p>Le convertisseur (<b>onduleur</b>) transforme le courant en un courant alternatif de fréquence variable : en changeant la fréquence, on change la vitesse des moteurs. Il utilise des transistors de puissance (IGBT) qui s\'allument et s\'éteignent des milliers de fois par seconde.</p>',
          shapes: [ { t: 'box', s: [0.75, 0.28, 0.8] }, { t: 'box', s: [0.6, 0.12, 0.01], pos: [0, 0.03, 0.405], color: '#134e4a', decal: 1 },
            { t: 'box', s: [0.06, 0.04, 0.01], pos: [-0.22, 0.05, 0.41], color: '#4ade80', decal: 2, anim: { type: 'blink', color: '#dcfce7', wave: 'square', rate: 3 } } ] },
        { id: 'motori', name: 'Moteurs de traction', label: 'Moteurs', color: '#2563eb', explode: [0, -0.4, 1.0],
          info: '<p>Ce sont les <b>moteurs électriques</b> qui font tourner les roues, un pour chaque essieu. Ensemble, ils développent des milliers de chevaux, sans fumée et presque sans bruit.</p>',
          more: '<p>Un train à grande vitesse a une puissance d\'environ <b>10 000 kW</b>, comme 100 voitures. Beaucoup de trains modernes ont leurs moteurs répartis sous plusieurs voitures : on accélère mieux et les roues patinent moins.</p>',
          shapes: AXLES.map((x) => ({ t: 'group', pos: [x + (x < 0 ? 0.32 : -0.32), RW + 0.04, 0.05], shapes: [ { t: 'cyl', r: 0.15, h: 0.5, n: 20, rot: [90, 0, 0] }, { t: 'cyl', r: 0.08, h: 0.12, n: 14, rot: [90, 0, 0], pos: [0, 0, 0.3], color: '#475569' },
            { t: 'group', pos: [0, 0, -0.27], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR * 3 }, shapes: [ { t: 'cyl', r: 0.1, h: 0.03, n: 14, rot: [90, 0, 0], color: '#93c5fd' }, { t: 'box', s: [0.18, 0.03, 0.035], color: '#1e3a8a' } ] } ] })) },
        { id: 'carrelli', name: 'Bogies', color: '#374151', explode: [0, -0.4, 0],
          info: '<p>Sous la caisse se trouvent deux <b>bogies</b>, chacun avec 4 roues. Ils peuvent pivoter un peu par rapport à la caisse, pour que le train prenne les courbes sans dérailler.</p>',
          more: '<p>Des ressorts d\'acier et des coussins d\'air (suspensions pneumatiques) séparent les bogies de la caisse : les voyageurs ne sentent pas les petites irrégularités de la voie, même à 300 km/h.</p>',
          shapes: [ bogie(-2.15), bogie(1.55) ] },
        { id: 'ruote', name: 'Roues (essieux montés)', label: 'Roues', color: '#9ca3af', explode: [0, -0.4, 0],
          info: '<p>Les roues sont en <b>acier</b>, fixées par paires sur un essieu rigide. Elles ont un <b>boudin</b> qui dépasse du côté intérieur et les empêche de sortir de la voie.</p>',
          more: '<p>Les roues ne sont pas cylindriques mais légèrement <b>coniques</b> : dans une courbe, la roue extérieure glisse un peu vers l\'extérieur et « roule » sur un diamètre plus grand. Ainsi, elle parcourt plus de chemin que la roue intérieure, même si elles sont fixées au même essieu. Génial !</p>',
          shapes: AXLES.map(wheelset) },
        { id: 'freni', name: 'Freins à disque', label: 'Freins', color: '#f97316', explode: [0, -0.4, -0.8],
          info: '<p>Sur chaque essieu, il y a des <b>disques</b> d\'acier : les étriers les serrent et les font ralentir. Mais avant tout, c\'est le moteur électrique qui freine !</p>',
          more: '<p>Quand on freine, les moteurs fonctionnent à l\'envers, comme des <b>générateurs</b> : ils transforment le mouvement en électricité et la renvoient dans le fil, où d\'autres trains l\'utilisent (freinage par récupération). À 300 km/h, il faut plus de 3 km pour s\'arrêter !</p>',
          shapes: AXLES.flatMap((x) => [ { t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [-0.15, 0.15].map((z) => ({ t: 'tube', r: 0.2, ri: 0.06, h: 0.03, n: 22, rot: [90, 0, 0], pos: [0, 0, z] })) },
            { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, -0.15], color: '#1f2937' }, { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, 0.15], color: '#1f2937' } ]) },
        { id: 'binari', name: 'Rails et traverses', label: 'Rails', color: '#9ca3af', explode: [0, -0.8, 0],
          info: '<p>Deux rails d\'acier, toujours à la même distance (<b>1 435 mm</b>), fixés sur des traverses en béton posées sur le <b>ballast</b> de pierres.</p>',
          more: '<p>Roue d\'acier sur rail d\'acier : la partie qui se touche est grande comme une pièce de monnaie ! Le frottement de roulement est très faible, environ 5 fois moins que pour une voiture sur l\'asphalte. C\'est pourquoi le train consomme très peu d\'énergie par voyageur.</p>',
          shapes: [ { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, 0.43] }, { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, -0.43] },
            { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, 0.43], color: '#6b7280' }, { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, -0.43], color: '#6b7280' },
            { t: 'group', anim: { type: 'move', dir: [-1, 0, 0], amp: SL, wave: 'saw', rate: SPEED / SL }, shapes: sleepers },
            { t: 'extrude', d: 8.4, pts: [[-1.05, -0.36], [1.05, -0.36], [0.78, -0.1], [-0.78, -0.1]], rot: [0, 90, 0], color: '#a8a29e' } ] },
        { id: 'corrente', name: 'Courant électrique', label: 'Courant', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>Le courant descend du fil par le pantographe, passe par le transformateur et le convertisseur, arrive aux moteurs puis retourne à la centrale par les <b>roues et les rails</b>.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 5, m: 8, pos: CUR[0], anim: { type: 'path', pts: CUR, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'fari', name: 'Phares', color: '#fef9c3', explode: [0.5, 0, 0],
          info: '<p>À l\'avant, le train a des phares <b>blancs</b>, à l\'arrière des feux <b>rouges</b> : ainsi on comprend de loin dans quelle direction il roule.</p>',
          shapes: [-0.3, 0.3].map((z) => ({ t: 'box', s: [0.05, 0.07, 0.14], pos: [3.28, 0.95, z], rot: [0, 0, 70], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.8 } })) }
      ]
    },
    steps: [
      { icon: '🚄', title: 'Un train électrique', explode: 0,
        html: '<p>Les trains à grande vitesse n\'ont pas de réservoir : ils prennent l\'<b>électricité</b> dans un fil au-dessus des rails et l\'utilisent pour faire tourner des <b>moteurs électriques</b> reliés aux roues.</p><p>Ainsi, ils peuvent rouler à 300 km/h sans polluer l\'air le long du trajet.</p>' },
      { icon: '⚡', title: 'Du fil au pantographe', focus: ['catenaria', 'pantografo', 'corrente'], explode: 0, view: { rx: 0.2, ry: -0.9 },
        html: '<p>Le <b>pantographe</b> est un bras articulé sur le toit : un ressort le pousse contre le <b>fil de cuivre</b> de la ligne aérienne, qui a une tension de 25 000 volts.</p><p class="tip">⚠️ Ne monte jamais sur les wagons et ne t\'approche jamais des fils du chemin de fer : le courant peut « sauter » même sans qu\'on touche !</p>' },
      { icon: '🔁', title: 'Transformateur et convertisseur', focus: ['trasformatore', 'convertitore', 'corrente'], explode: 0.4, view: { rx: 0.1, ry: -0.35 },
        html: '<p>Le <b>transformateur</b> abaisse la tension ; le <b>convertisseur</b>, plein d\'électronique, décide de la quantité de courant à envoyer aux moteurs. C\'est comme l\'accélérateur d\'une voiture.</p>' },
      { icon: '⚙️', title: 'Les moteurs font tourner les roues', focus: ['motori', 'ruote', 'carrelli'], explode: 0.35, view: { rx: 0.25, ry: -0.45 },
        html: '<p>Un <b>moteur électrique</b> par essieu fait tourner les roues par des engrenages. Les roues repoussent les rails vers l\'arrière… et le train avance !</p><p>Les <b>bogies</b> peuvent pivoter sous la caisse pour suivre les courbes.</p>' },
      { icon: '🛤️', title: 'Acier sur acier', focus: ['ruote', 'binari'], explode: 0, zoom: 1.2, view: { rx: 0.25, ry: -1.35 },
        html: '<p>Les roues et les rails sont en <b>acier</b> très dur : ils se déforment très peu et le frottement est très faible. Pour déplacer une tonne en train, il faut beaucoup moins d\'énergie qu\'en camion.</p><p>Le <b>boudin</b> intérieur des roues empêche le train de sortir de la voie.</p>' },
      { icon: '🛑', title: 'Freiner… et récupérer de l\'énergie', focus: ['freni', 'motori', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.6 },
        html: '<p>Pour freiner, les <b>moteurs</b> deviennent des <b>générateurs</b> : le mouvement redevient de l\'électricité et est renvoyé dans le fil. Ensuite, les <b>freins à disque</b> interviennent.</p><p class="tip">📏 Un train à 300 km/h a besoin de plus de 3 km pour s\'arrêter : c\'est pourquoi il ne peut pas freiner au dernier moment !</p>' },
      { icon: '🧑‍✈️', title: 'En cabine et le nez aérodynamique', focus: ['cabina', 'cassa', 'fari'], explode: 0, view: { rx: 0.2, ry: -1.0 },
        html: '<p>En <b>cabine</b>, le conducteur contrôle la vitesse, les freins et les signaux sur des écrans. Le train n\'a pas de volant : ce sont les rails qui le guident.</p><p>Le <b>nez</b> long et lisse fend l\'air : à grande vitesse, vaincre la résistance de l\'air est le plus gros effort.</p>' }
    ],
    facts: [
      { icon: '🚂', title: 'Le premier train italien', html: 'Le premier chemin de fer italien fut le <b>Naples–Portici</b>, inauguré en 1839 : 7 km parcourus par une locomotive à vapeur.' },
      { icon: '🏁', title: 'Record de vitesse', html: 'En 2007, un train français a atteint <b>574,8 km/h</b> sur rails. Le train japonais à sustentation magnétique a dépassé les 600 km/h.' },
      { icon: '🌱', title: 'Le plus « vert »', html: 'Par personne et par kilomètre, le train émet jusqu\'à <b>10 fois moins de CO₂</b> que la voiture et beaucoup moins que l\'avion.' },
      { icon: '🔧', title: 'Les Frecce', html: 'Le Frecciarossa relie Turin, Milan, Bologne, Florence, Rome et Naples : de Milan à Rome, il faut environ 3 heures, contre plus de 6 heures autrefois.' }
    ],
    quiz: [
      { type: 'mc', q: 'D\'où un train à grande vitesse tire-t-il son énergie ?', options: ['D\'un réservoir de gazole', 'D\'un fil électrique au-dessus des rails', 'De panneaux solaires sur le toit', 'Du charbon'], answer: 1, explain: 'Le pantographe capte le courant de la ligne aérienne (caténaire).' },
      { type: 'mc', q: 'Comment s\'appelle le bras articulé sur le toit du train ?', options: ['Pantographe', 'Bogie', 'Transformateur', 'Boudin'], answer: 0, explain: 'Le pantographe frotte sur le fil et amène le courant dans le train.' },
      { type: 'tf', q: 'Quand il freine, le train peut renvoyer de l\'électricité dans la ligne.', answer: true, explain: 'Les moteurs fonctionnent comme des générateurs : c\'est le freinage par récupération.' },
      { type: 'mc', q: 'Qu\'est-ce qui empêche les roues de sortir de la voie ?', options: ['Un aimant', 'Le boudin qui dépasse des roues', 'Le conducteur avec le volant', 'La caténaire'], answer: 1, explain: 'Le boudin sur le côté intérieur de la roue maintient le train sur les rails.' },
      { type: 'mc', q: 'Pourquoi le train consomme-t-il peu d\'énergie par voyageur ?', options: ['Parce qu\'il va doucement', 'Parce que les roues et les rails d\'acier ont très peu de frottement', 'Parce qu\'il n\'a pas de moteurs', 'Parce qu\'il est léger comme un vélo'], answer: 1, explain: 'Acier sur acier : le frottement de roulement est très faible et le train transporte beaucoup de gens ensemble.' },
      { type: 'order', q: 'Remets dans l\'ordre le voyage du courant', items: ['Fil de la ligne aérienne', 'Pantographe', 'Transformateur', 'Convertisseur', 'Moteurs', 'Roues et rails'], explain: 'Du fil au pantographe, puis le transformateur et le convertisseur, les moteurs et enfin le retour par les roues et les rails.' }
    ]
  });
})();
