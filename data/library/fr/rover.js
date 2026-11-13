/* Il rover su Marte (tipo Perseverance). Formato: data/library/FORMATO.md
   Il rover guarda verso +x; z = fianchi; y = alto. Le sospensioni rocker-bogie oscillano (stesse animazioni in "ruote" e "sospensioni"). */
(function () {
  const WR = 0.34, HUB = 0.36;
  const ZS = [-1.22, 1.22];
  const ROCK = { type: 'swing', axis: 'z', amp: 6, rate: 0.5, pivot: [0.15, 1.0, 0] };
  const BOG = { type: 'swing', axis: 'z', amp: 9, rate: 0.5, phase: 0.3, pivot: [-0.55, 0.72, 0] };
  /* ruota: cerchione, battistrada a "chevron", mozzo; gira intorno a z */
  const wheel = (x, z) => ({ t: 'group', pos: [x, HUB, z], anim: { type: 'spin', axis: 'z', dir: -1, rate: 1.2 }, shapes: [
    { t: 'cyl', r: WR, h: 0.32, n: 30, rot: [90, 0, 0], color: '#a1a1aa' },
    { t: 'cyl', r: WR * 0.55, h: 0.34, n: 20, rot: [90, 0, 0], color: '#52525b' },
    { t: 'cyl', r: 0.07, h: 0.38, n: 12, rot: [90, 0, 0], color: '#d4d4d8' }
  ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [0, 0, k * 22.5], shapes: [
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, 0.075], rot: [0, 22, 0], color: '#3f3f46' },
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, -0.075], rot: [0, -22, 0], color: '#3f3f46' } ] }))) });
  const side = (z, withWheels) => {
    const zz = z + Math.sign(z) * 0.0;
    const rockerArms = [ { t: 'pipe', r: 0.055, n: 10, pts: [[1.15, HUB, zz], [0.85, 0.98, zz], [0.15, 1.0, zz], [-0.55, 0.72, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.11, h: 0.16, n: 16, rot: [90, 0, 0], pos: [0.15, 1.0, zz], color: '#71717a' } ];
    const bogieArms = [ { t: 'pipe', r: 0.05, n: 10, pts: [[0, HUB, zz], [-0.3, 0.68, zz], [-0.8, 0.68, zz], [-1.15, HUB, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.09, h: 0.15, n: 16, rot: [90, 0, 0], pos: [-0.55, 0.72, zz], color: '#71717a' } ];
    const wf = [wheel(1.15, z)], wb = [wheel(0, z), wheel(-1.15, z)];
    return { t: 'group', anim: ROCK, shapes: (withWheels ? wf : rockerArms).concat([ { t: 'group', anim: BOG, shapes: withWheels ? wb : bogieArms } ]) };
  };

  LIBRARY({
    lang: 'fr',
    id: 'rover',
    title: 'Le rover sur Mars',
    intro: 'Un <b>rover</b> est un robot-laboratoire grand comme une voiture qui explore Mars tout seul. Il prend des photos, roule entre les rochers, les analyse avec un laser et récolte des échantillons pour chercher des traces de <b>vie ancienne</b>.',
    model: {
      rx: 0.3, ry: -0.75, speed: 0.22, height: 470, fit: 1.12,
      parts: [
        { id: 'suolo', name: 'Sol de Mars', label: 'Sol martien', color: '#b45f3c', explode: [0, -0.6, 0], chip: true,
          info: '<p>Mars est rouge parce que sa poussière contient beaucoup de <b>rouille</b> (oxyde de fer). Le sol est plein de cailloux, de sable et de dunes.</p>',
          more: '<p>Sur Mars, la gravité est environ <b>un tiers</b> de celle de la Terre, l\'air est très très mince (presque uniquement du dioxyde de carbone) et la température descend la nuit jusqu\'à −80 °C.</p>',
          shapes: [ { t: 'lathe', n: 40, pts: [[0, 0.0], [3.0, 0.0], [3.25, -0.12], [3.2, -0.2], [0, -0.2]], color: '#b45f3c' },
            { t: 'sphere', r: 0.28, n: 8, m: 10, pos: [3.0, 0.08, 0.6], scale: [1.3, 0.8, 1], color: '#7c2d12' },
            { t: 'sphere', r: 0.2, n: 8, m: 10, pos: [-2.4, 0.05, 1.2], scale: [1.2, 0.7, 1], color: '#92400e' },
            { t: 'sphere', r: 0.15, n: 8, m: 10, pos: [1.9, 0.03, -2.0], color: '#78350f' },
            { t: 'sphere', r: 0.35, n: 8, m: 10, pos: [-1.5, 0.05, -2.3], scale: [1.4, 0.6, 1], color: '#9a3412' },
            { t: 'sphere', r: 0.1, n: 6, m: 8, pos: [1.4, 0.02, 2.3], color: '#7c2d12' } ] },
        { id: 'corpo', name: 'Corps du rover', label: 'Corps', color: '#e4e4e7', explode: [0, 0.9, 0],
          info: '<p>C\'est le « ventre » du rover : à l\'intérieur, bien au chaud, il y a l\'<b>ordinateur</b>, les batteries et les instruments de laboratoire. Au-dessus, il y a le « pont » où sont montées les antennes et les caméras.</p>',
          more: '<p>Le rover est grand comme une petite voiture (3 m de long) et pèse environ <b>1 tonne</b>. L\'ordinateur est « durci » contre les radiations et le rover conduit tout seul sur de petits trajets, en choisissant le chemin avec ses caméras.</p>',
          shapes: [ { t: 'box', s: [2.3, 0.5, 1.75], pos: [0, 1.25, 0] },
            { t: 'box', s: [2.2, 0.06, 1.65], pos: [0, 1.53, 0], color: '#d4d4d8' },
            { t: 'box', s: [2.36, 0.08, 1.81], pos: [0, 1.02, 0], color: '#a1a1aa' },
            { t: 'box', s: [0.03, 0.3, 1.3], pos: [1.16, 1.25, 0], color: '#27272a', decal: 1 },
            { t: 'box', s: [0.6, 0.02, 0.4], pos: [0.3, 1.565, -0.5], color: '#fbbf24', decal: 1 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, 0.45], color: '#0ea5e9', decal: 2 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, -0.45], color: '#0ea5e9', decal: 2 } ] },
        { id: 'ruote', name: 'Roues', color: '#a1a1aa', explode: [0, 0, 0.9],
          info: '<p>Six roues en aluminium avec des « griffes » (les crampons en zigzag) pour ne pas glisser sur le sable. Chaque roue a <b>son propre moteur</b>, et celles de l\'avant et de l\'arrière peuvent aussi braquer.</p>',
          more: '<p>Les roues n\'ont pas de pneus : une chambre à air pourrait se percer sur Mars et personne ne la changerait ! Le rover avance très lentement, environ <b>150 mètres par heure</b>, pour ne prendre aucun risque.</p>',
          shapes: ZS.map((z) => side(z, true)) },
        { id: 'sospensioni', name: 'Suspensions rocker-bogie', label: 'Suspensions', color: '#d4d4d8', explode: [0, 0, 0.55],
          info: '<p>Des bras articulés relient les roues au corps. Ils se plient comme des balançoires pour que <b>les six roues</b> touchent toujours le sol, même sur les cailloux.</p>',
          more: '<p>Le système s\'appelle <b>rocker-bogie</b> : le « rocker » (balancier) porte la roue avant et le « bogie » les deux autres. Le rover peut franchir des pierres aussi hautes que ses roues sans se renverser, même incliné à 45°.</p>',
          shapes: ZS.map((z) => side(z, false)).concat([ { t: 'pipe', r: 0.045, n: 10, pts: [[0.15, 1.42, -1.1], [0.15, 1.62, 0], [0.15, 1.42, 1.1]], color: '#a1a1aa' } ]) },
        { id: 'testa', name: 'Mât avec les caméras', label: 'Tête et caméras', color: '#e4e4e7', pos: [0.85, 1.55, 0.55], explode: [0.3, 1.2, 0.4],
          info: '<p>C\'est la « tête » du rover, à 2 mètres de haut. Deux caméras couleur, comme deux yeux, prennent des <b>photos en 3D</b> ; d\'autres caméras surveillent les obstacles près des roues.</p>',
          more: '<p>Les images et les commandes voyagent entre Mars et la Terre en <b>4 à 24 minutes</b> (selon l\'endroit où se trouvent les deux planètes) : c\'est pour cela qu\'on ne peut pas conduire le rover « en direct » comme une petite voiture télécommandée.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 1.35, n: 14, pos: [0, 0.67, 0], color: '#d4d4d8' }, { t: 'cyl', r: 0.12, h: 0.1, n: 16, pos: [0, 0.05, 0], color: '#71717a' },
            { t: 'group', pos: [0, 1.42, 0], anim: { type: 'swing', axis: 'y', amp: 50, wave: 'window', from: 0.05, to: 0.45, ramp: 0.3 }, shapes: [
              { t: 'cyl', r: 0.1, h: 0.14, n: 16, color: '#71717a' },
              { t: 'box', s: [0.42, 0.28, 0.62], pos: [0.05, 0.2, 0], color: '#f4f4f5' },
              { t: 'box', s: [0.32, 0.2, 0.2], pos: [0.12, 0.2, -0.02], color: '#d4d4d8' },
              { t: 'cyl', r: 0.09, h: 0.08, n: 20, rot: [0, 0, 90], pos: [0.29, 0.22, 0], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, 0.22], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, -0.22], color: '#18181b' },
              { t: 'cyl', r: 0.035, h: 0.02, n: 12, rot: [0, 0, 90], pos: [0.305, 0.22, 0], color: '#38bdf8', decal: 1 } ] } ] },
        { id: 'laser', name: 'Laser SuperCam', label: 'Laser', color: '#ef4444', chip: true,
          info: '<p>Depuis sa tête, le rover tire un tout petit <b>laser</b> sur une roche située jusqu\'à 7 mètres. La roche fait une étincelle et, en regardant la lumière de l\'étincelle, le rover comprend <b>de quoi elle est faite</b>.</p>',
          more: '<p>Chaque élément chimique émet de la lumière de couleurs précises : en analysant le <b>spectre</b> de l\'étincelle, on reconnaît le fer, le silicium, le calcium… Un microphone enregistre aussi le « tic » du laser : le son dit si la roche est dure ou tendre.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[1.17, 3.19, 0.55], [2.9, 0.22, 0.6]], color: '#ef4444', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.1 } },
            { t: 'sphere', r: 0.11, n: 8, pos: [2.9, 0.22, 0.6], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.2 } } ] },
        { id: 'braccio', name: 'Bras robotisé', color: '#e4e4e7', pos: [1.18, 1.18, -0.35], explode: [0.9, 0.2, -0.6],
          info: '<p>Un bras long de plus de 2 mètres avec 5 articulations. Au bout, il a une « main » avec une <b>perceuse</b>, une loupe et d\'autres instruments pour étudier les roches de près.</p>',
          shapes: [ { t: 'cyl', r: 0.11, h: 0.2, n: 16, rot: [90, 0, 0], color: '#71717a' },
            { t: 'group', anim: { type: 'swing', axis: 'z', amp: -38, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
              { t: 'pipe', r: 0.06, n: 12, pts: [[0, 0, 0], [0.95, 0.15, 0]] },
              { t: 'group', pos: [0.95, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -45, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
                { t: 'sphere', r: 0.09, n: 10, color: '#71717a' },
                { t: 'pipe', r: 0.055, n: 12, pts: [[0, 0, 0], [0.8, -0.1, 0]] },
                { t: 'group', pos: [0.85, -0.1, 0], shapes: [
                  { t: 'box', s: [0.28, 0.28, 0.28], color: '#a1a1aa' },
                  { t: 'cyl', r: 0.05, h: 0.38, n: 12, pos: [0, -0.3, 0], color: '#52525b' },
                  { t: 'cyl', r: 0.02, h: 0.2, n: 8, pos: [0, -0.56, 0], color: '#d4d4d8' },
                  { t: 'cyl', r: 0.08, h: 0.12, n: 14, pos: [0.18, 0, 0], rot: [0, 0, 90], color: '#3f3f46' },
                  { t: 'box', s: [0.12, 0.18, 0.12], pos: [0, 0, 0.2], color: '#fbbf24' } ] } ] } ] } ] },
        { id: 'provette', name: 'Tubes d\'échantillons', label: 'Tubes', color: '#e5e7eb', explode: [0, -0.4, -1.1],
          info: '<p>La perceuse prélève de petites « carottes » de roche grosses comme une craie et les enferme dans des <b>tubes</b> scellés. Un jour, une autre mission les rapportera sur Terre.</p>',
          shapes: Array.from({ length: 7 }, (_, k) => ({ t: 'cyl', r: 0.045, h: 0.42, n: 14, rot: [0, 0, 90], pos: [-0.2, 0.94, -0.6 + k * 0.12], color: k % 2 ? '#e5e7eb' : '#cbd5e1' })).concat([ { t: 'box', s: [0.6, 0.06, 0.95], pos: [-0.2, 0.89, -0.24], color: '#71717a' } ]) },
        { id: 'rtg', name: 'Générateur nucléaire (RTG)', label: 'Générateur', color: '#3f3f46', pos: [-1.35, 1.55, 0], explode: [-1.0, 0.4, 0],
          info: '<p>Le rover n\'utilise pas de panneaux solaires, que la poussière recouvrirait. Il a une « batterie » spéciale : une matière <b>radioactive</b> qui chauffe, et la chaleur devient de l\'électricité, jour et nuit, pendant de nombreuses années.</p>',
          more: '<p>Le RTG contient environ 5 kg de plutonium-238 et produit environ 110 watts : peu, mais pendant 14 ans. La chaleur en plus sert aussi à <b>garder au chaud</b> les instruments pendant les nuits glaciales de Mars.</p>',
          shapes: [ { t: 'group', rot: [0, 0, 32], shapes: [ { t: 'cyl', r: 0.24, h: 0.95, n: 24, rot: [0, 0, 90] },
            { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [0.48, 0, 0], color: '#71717a' }, { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [-0.48, 0, 0], color: '#71717a' } ]
            .concat(Array.from({ length: 8 }, (_, k) => ({ t: 'group', rot: [k * 45, 0, 0], shapes: [ { t: 'box', s: [0.86, 0.2, 0.025], pos: [0, 0.33, 0], color: '#27272a' } ] }))) },
            { t: 'sphere', r: 0.24, n: 10, color: '#f97316', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ] },
        { id: 'antenne', name: 'Antennes', color: '#d4d4d8', explode: [-0.3, 1.0, -0.6],
          info: '<p>Le rover « téléphone » à la maison avec deux antennes : l\'hexagonale parle <b>directement avec la Terre</b> ; la petite parle avec les satellites en orbite autour de Mars, qui servent de relais.</p>',
          more: '<p>La plupart des données passent par les satellites (comme le Mars Reconnaissance Orbiter), qui reçoivent beaucoup plus vite et retransmettent ensuite vers les grandes antennes de la NASA en Californie, en Espagne et en Australie.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.3, n: 10, pos: [-0.55, 1.7, -0.55], color: '#71717a' },
            { t: 'group', pos: [-0.55, 1.9, -0.55], anim: { type: 'swing', axis: 'y', amp: 30, rate: 0.5 }, shapes: [
              { t: 'group', rot: [0, 0, 55], shapes: [ { t: 'cyl', r: 0.32, h: 0.06, n: 6, color: '#e4e4e7' }, { t: 'cyl', r: 0.26, h: 0.02, n: 6, pos: [0, 0.035, 0], color: '#a1a1aa', decal: 1 } ] } ] },
            { t: 'cyl', r: 0.06, h: 0.32, n: 14, pos: [-0.85, 1.72, 0.55], color: '#f4f4f5' }, { t: 'sphere', r: 0.06, n: 8, pos: [-0.85, 1.88, 0.55], color: '#f4f4f5' } ] },
        { id: 'elicottero', name: 'Hélicoptère Ingenuity', label: 'Hélicoptère', color: '#a1a1aa', pos: [-1.6, 0, 2.0], explode: [-0.6, 0.8, 0.8],
          anim: { type: 'move', dir: [0, 1, 0], amp: 1.6, wave: 'window', from: 0.15, to: 0.85, ramp: 0.4 },
          info: '<p>Un petit hélicoptère de <b>1,8 kg</b>, arrivé avec le rover Perseverance. En 2021, il a été le premier aéronef à voler sur une autre planète !</p>',
          more: '<p>L\'air de Mars est 100 fois plus mince que le nôtre : pour décoller, ses pales, longues de 1,2 m, tournent à <b>2400 tours par minute</b>, bien plus vite que celles d\'un hélicoptère normal. Il a volé 72 fois.</p>',
          shapes: [ { t: 'box', s: [0.2, 0.18, 0.2], pos: [0, 0.38, 0], color: '#f4f4f5' },
            { t: 'cyl', r: 0.02, h: 0.42, n: 8, pos: [0, 0.64, 0], color: '#3f3f46' },
            { t: 'box', s: [0.32, 0.02, 0.2], pos: [0, 0.88, 0], color: '#1e3a8a' } ]
            .concat([45, 135, 225, 315].map((a) => ({ t: 'pipe', r: 0.012, n: 6, pts: [[0.08 * Math.cos(a * Math.PI / 180), 0.3, 0.08 * Math.sin(a * Math.PI / 180)], [0.3 * Math.cos(a * Math.PI / 180), 0.0, 0.3 * Math.sin(a * Math.PI / 180)]], color: '#9ca3af' })))
            .concat([ [0.68, 1], [0.78, -1] ].map(([y, d]) => ({ t: 'group', pos: [0, y, 0], anim: { type: 'spin', axis: 'y', dir: d, rate: 12 }, shapes: [
              { t: 'box', s: [1.2, 0.012, 0.09], rot: [d * 8, 0, 0], color: '#52525b' }, { t: 'cyl', r: 0.04, h: 0.04, n: 10, color: '#3f3f46' } ] }))) }
      ]
    },
    steps: [
      { icon: '🤖', title: 'Un robot explorateur', explode: 0,
        html: '<p>Mars est très, très loin : pour y arriver, il faut un voyage de <b>7 mois</b>. Envoyer des personnes est encore trop difficile, alors nous envoyons des robots. Le rover est un <b>laboratoire sur roues</b> qui travaille tout seul pendant des années.</p>' },
      { icon: '🛞', title: 'Six roues et des bras articulés', focus: ['ruote', 'sospensioni', 'suolo'], view: { rx: 0.12, ry: -0.1 },
        html: '<p>Chaque roue a un moteur. Les <b>suspensions rocker-bogie</b> sont des bras qui se plient comme des balançoires : ainsi les 6 roues restent toujours collées au sol, même par-dessus les cailloux.</p><p class="tip">🐢 Le rover va doucement : moins de 200 mètres par heure. Sur Mars, il n\'y a pas de dépanneuse !</p>' },
      { icon: '👀', title: 'Les yeux du rover', focus: ['testa', 'corpo'], loop: [0, 0.48], zoom: 1.4, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Au sommet du mât, il y a deux <b>caméras</b>, écartées comme nos yeux : ensemble, elles font des photos en 3D. Les scientifiques sur Terre les regardent et décident où aller.</p><p>Le rover peut aussi conduire tout seul sur quelques mètres, en choisissant la route la plus sûre.</p>' },
      { icon: '🔴', title: 'Un laser pour lire les roches', focus: ['laser', 'testa', 'suolo'], loop: [0.45, 0.65], view: { rx: 0.25, ry: -0.9 },
        html: '<p>Le rover tire un petit <b>laser</b> sur une roche : une minuscule étincelle s\'allume. À la lumière de l\'étincelle, on comprend de quoi la roche est faite, sans même la toucher !</p>' },
      { icon: '🦾', title: 'Le bras et la perceuse', focus: ['braccio', 'provette', 'suolo'], loop: [0.6, 1.0], view: { rx: 0.2, ry: -0.35 },
        html: '<p>Le <b>bras robotisé</b> pose les instruments sur la roche : une loupe, des capteurs chimiques et une <b>perceuse</b>. Les « carottes » de roche sont enfermées dans des <b>tubes</b>.</p><p class="tip">🧪 Le but ? Chercher des traces de microbes qui ont vécu il y a des milliards d\'années, quand il y avait des lacs et des fleuves sur Mars.</p>' },
      { icon: '⚡', title: 'De l\'énergie jour et nuit', focus: ['rtg', 'corpo'], view: { rx: 0.25, ry: -2.3 }, zoom: 1.3,
        html: '<p>À l\'arrière, il y a le <b>générateur nucléaire</b> (RTG) : une matière qui chauffe toute seule ; la chaleur devient de l\'électricité. Il fonctionne aussi la nuit et pendant les tempêtes de sable, quand les panneaux solaires ne serviraient à rien.</p>' },
      { icon: '📡', title: 'Appeler la maison', focus: ['antenne', 'corpo'], view: { rx: 0.5, ry: -1.6 }, zoom: 1.2,
        html: '<p>Avec les <b>antennes</b>, le rover reçoit les commandes et envoie des photos et des données. Le message met plusieurs minutes à arriver : le rover doit savoir se débrouiller tout seul.</p>' },
      { icon: '🚁', title: 'Le premier vol sur Mars', focus: ['elicottero', 'suolo'], loop: [0.1, 0.9], view: { rx: 0.15, ry: -1.2 },
        html: '<p><b>Ingenuity</b> est un mini-hélicoptère qui a joué le rôle d\'« éclaireur aérien ». Ses pales tournent à toute vitesse parce que l\'air de Mars est très mince.</p>' }
    ],
    facts: [
      { icon: '🚗', title: 'Grand comme une voiture', html: 'Perseverance mesure 3 mètres de long, 2,7 de large et pèse environ une tonne. Son nom signifie <b>« persévérance »</b>.' },
      { icon: '🪂', title: 'Sept minutes de terreur', html: 'Pour atterrir, le rover passe de 20 000 km/h à zéro en 7 minutes : bouclier thermique, parachute et enfin une « grue volante » qui le descend avec des câbles.' },
      { icon: '🎙️', title: 'Les sons de Mars', html: 'Perseverance a des microphones : pour la première fois, nous avons entendu le <b>vent de Mars</b> et le bourdonnement de l\'hélicoptère.' },
      { icon: '🏆', title: 'Le record d\'Opportunity', html: 'Le rover Opportunity devait durer 90 jours et il a travaillé pendant <b>14 ans</b>, en parcourant plus qu\'un marathon (45 km).' },
      { icon: '🔤', title: 'Un message sur les roues', html: 'Les roues de Curiosity ont des trous qui laissent sur le sable un message en code Morse : « JPL », le laboratoire qui l\'a construit.' }
    ],
    quiz: [
      { type: 'mc', q: 'Pourquoi les suspensions du rover sont-elles articulées (rocker-bogie) ?', options: ['Pour aller plus vite', 'Pour garder toutes les roues au sol sur les cailloux', 'Pour économiser de l\'énergie', 'Pour ressembler à une araignée'], answer: 1, explain: 'Les bras se plient comme des balançoires : les 6 roues restent en contact avec le sol et le rover ne se renverse pas.' },
      { type: 'mc', q: 'Pourquoi ne conduit-on pas le rover « en direct » comme une petite voiture télécommandée ?', options: ['Parce que les commandes mettent des minutes à arriver', 'Parce qu\'il n\'a pas de volant', 'Parce que sur Mars il fait toujours nuit', 'Parce qu\'il n\'a pas d\'antennes'], answer: 0, explain: 'Les signaux radio mettent de 4 à 24 minutes entre la Terre et Mars.' },
      { type: 'tf', q: 'Mars est rouge parce que sa poussière contient de la rouille.', answer: true, explain: 'L\'oxyde de fer (la rouille) colore en rouge la poussière martienne.' },
      { type: 'mc', q: 'À quoi sert le laser du rover ?', options: ['À se défendre', 'À chauffer les instruments', 'À comprendre de quoi sont faites les roches', 'À éclairer la nuit'], answer: 2, explain: 'Le laser fait une étincelle sur la roche ; la lumière de l\'étincelle révèle les éléments chimiques.' },
      { type: 'mc', q: 'D\'où Perseverance tire-t-il son énergie ?', options: ['De grands panneaux solaires', 'D\'un générateur qui transforme la chaleur en électricité', 'Du vent de Mars', 'De batteries changées chaque mois'], answer: 1, explain: 'Le RTG utilise la chaleur d\'une matière radioactive : il fonctionne jour et nuit pendant de nombreuses années.' },
      { type: 'num', q: 'Combien de roues le rover a-t-il ?', answer: 6, explain: 'Six roues, chacune avec son propre moteur.' }
    ]
  });
})();
