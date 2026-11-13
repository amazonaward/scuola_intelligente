/* La Terra "tagliata a metà": la metà davanti (Europa e Africa, longitudine 0 verso +z) si sposta con Esplodi;
   sulla faccia del taglio si vedono crosta, mantello e nucleo. Tutto è inclinato di 23,5° come l'asse terrestre. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const ll = (lat, lon, r) => [r * Math.cos(lat * D) * Math.sin(lon * D), r * Math.sin(lat * D), r * Math.cos(lat * D) * Math.cos(lon * D)];
  /* contorni molto semplificati dei continenti [lat, lon] */
  const LAND = {
    africa: [[37, -10], [37, 10], [32, 32], [12, 44], [11, 51], [-2, 41], [-15, 40], [-26, 33], [-35, 20], [-30, 15], [-17, 12], [-5, 9], [4, 7], [5, -5], [5, -10], [10, -15], [15, -17], [21, -17], [28, -13], [35, -6]],
    europa: [[36, -9], [43, -9], [44, -1], [48, -5], [51, 2], [54, 8], [57, 8], [59, 5], [62, 5], [70, 20], [71, 30], [68, 40], [60, 60], [45, 50], [42, 42], [41, 29], [37, 27], [38, 23], [40, 19], [45, 13], [42, 15], [38, 16], [40, 9], [43, 5], [43, 3], [41, 1], [37, -2]],
    asia: [[41, 29], [42, 42], [45, 50], [60, 60], [70, 70], [77, 105], [72, 130], [70, 160], [65, 180], [60, 165], [53, 157], [45, 142], [40, 130], [35, 129], [30, 122], [22, 114], [20, 106], [10, 107], [1, 104], [8, 98], [16, 97], [22, 90], [20, 86], [8, 77], [20, 72], [25, 66], [25, 57], [13, 45], [30, 48], [30, 35], [36, 36]],
    nordamerica: [[70, -160], [71, -155], [70, -140], [69, -115], [72, -95], [64, -85], [60, -94], [55, -82], [52, -79], [60, -64], [53, -56], [47, -53], [44, -66], [41, -70], [35, -76], [31, -81], [25, -80], [30, -84], [29, -95], [22, -97], [19, -96], [21, -87], [15, -88], [9, -79], [8, -83], [15, -93], [20, -105], [23, -110], [32, -117], [40, -124], [48, -125], [58, -136], [60, -147], [57, -157], [60, -163], [66, -165]],
    groenlandia: [[60, -44], [66, -36], [70, -22], [78, -18], [83, -30], [82, -60], [77, -72], [70, -54], [65, -52]],
    sudamerica: [[12, -72], [11, -63], [5, -52], [0, -50], [-5, -35], [-13, -38], [-23, -42], [-34, -53], [-40, -62], [-52, -68], [-55, -68], [-50, -75], [-40, -73], [-30, -71], [-18, -70], [-5, -81], [1, -80], [8, -77]],
    australia: [[-11, 131], [-12, 137], [-17, 141], [-11, 143], [-25, 153], [-38, 149], [-39, 146], [-35, 138], [-32, 133], [-35, 117], [-22, 114], [-14, 127]],
    madagascar: [[-12, 49], [-25, 47], [-25, 44], [-16, 44]], uk: [[50, -5], [51, 1], [53, 0], [58, -3], [58, -6], [55, -5], [53, -4]], giappone: [[31, 130], [35, 140], [41, 141], [45, 142], [40, 139], [34, 131]]
  };
  const inPoly = (p, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  const isLand = (lat, lon) => lat < -70 || Object.keys(LAND).some((k) => inPoly([lat, lon], LAND[k].map(([a, o]) => [a, o])));
  const landColor = (lat, lon) => Math.abs(lat) > 62 && (lon < -15 && lon > -75 || lat < -60) ? '#f1f5f9' : (lat > 14 && lat < 32 && lon > -15 && lon < 55) || (lat < -18 && lat > -32 && lon > 118 && lon < 145) ? '#ca8a04' : (Math.abs(lat) > 55 ? '#3f6212' : '#4d7c0f');
  /* "tessere" di terra: dischetti appoggiati sulla superficie, su una griglia di 6° (front = longitudine tra -90 e 90) */
  const tiles = (front) => {
    const s = [];
    for (let lat = -84; lat <= 84; lat += 6) {
      const step = 6 / Math.max(0.25, Math.cos(lat * D));
      for (let lon = -180; lon < 180; lon += step) {
        const isFront = Math.abs(lon) < 90; if (isFront !== front || !isLand(lat, lon)) continue;
        s.push({ t: 'group', rot: [0, lon, 0], shapes: [ { t: 'group', rot: [-lat, 0, 0], shapes: [ { t: 'cyl', r: 0.17, h: 0.02, n: 8, rot: [90, 0, 0], pos: [0, 0, R + 0.005], color: landColor(lat, lon), decal: 1 } ] } ] });
      }
    }
    return s;
  };
  const surfPipe = (pts, r, color) => ({ t: 'pipe', r, n: 6, curve: true, pts: pts.map(([a, o]) => ll(a, o, R + 0.03)), color });
  const T = (shapes) => [ { t: 'group', rot: [0, 0, -23.5], shapes } ];           // inclinazione dell'asse
  const hemi = (r, color, dz, front) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [front ? 90 : -90, 0, 0], pos: [0, 0, dz], color });
  /* celle che girano sulla faccia del taglio (convezione) */
  const loops = (rc, rr, n, col, col2, rate) => {
    const s = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 360 * D + 0.2, c = [rc * Math.cos(a), rc * Math.sin(a)], dir = i % 2 ? 1 : -1;
      const pts = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.09]; });
      s.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.07], color: col2 });
      for (let k = 0; k < 2; k++) s.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: col, anim: { type: 'path', pts, wave: 'saw', rate, phase: k / 2 } });
    }
    return s;
  };
  /* linee del campo magnetico (dipolo): r = L·cos²(lat) */
  const field = [];
  [2.6, 3.2].forEach((Lr) => [0, 60, 120, 180, 240, 300].forEach((lon) => {
    const pts = []; for (let lat = -70; lat <= 70; lat += 5) { const r = Lr * Math.cos(lat * D) ** 2; if (r > R + 0.08) pts.push(ll(lat, lon, r)); }
    if (pts.length > 2) { field.push({ t: 'pipe', r: 0.014, n: 5, curve: true, pts, color: '#a78bfa' }); field.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#ddd6fe', anim: { type: 'path', pts, wave: 'saw', rate: 0.3, phase: lon / 360 } }); }
  }));
  const clouds = [[50, -30, 1.4], [10, -20, 1.0], [-40, 0, 1.6], [55, 20, 1.0], [5, 60, 1.2], [-50, 60, 1.3], [-10, -60, 1.1], [30, -50, 0.9], [62, -5, 0.8]];

  LIBRARY({
    lang: 'fr',
    id: 'terra',
    title: 'La Terre',
    intro: 'La Terre est notre planète : une boule de roche et de métal large de presque <b>13 000 km</b>, avec des océans, des continents et une fine couverture d\'air. À l\'intérieur, elle est faite de <b>couches</b>, comme une pêche : peau, chair et noyau. Ouvrons-la !',
    model: {
      rx: 0.22, ry: -0.42, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'superficie', name: 'Surface : océans et continents', label: 'Continents et océans', color: '#1d4ed8', explode: [4.6, 0.3, -2.6],
          info: '<p>Vue de l\'extérieur, la Terre est <b>bleue</b> : les océans couvrent environ <b>71 %</b> de la surface. Le reste, ce sont les continents. Ici, devant toi, tu vois l\'Europe (avec l\'Italie !) et l\'Afrique.</p>',
          more: '<p>Les océans ont une profondeur moyenne de 3 700 m ; l\'endroit le plus profond, la fosse des Mariannes, descend à presque 11 000 m. La plus haute montagne, l\'Everest, mesure 8 849 m.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, true) ].concat(tiles(true))) },
        { id: 'nuvole', name: 'Nuages', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>Les nuages sont de petites gouttelettes d\'eau et des cristaux de glace en suspension dans l\'air. À tout moment, ils couvrent environ deux tiers de la planète.</p>',
          shapes: T(clouds.map(([a, o, s], i) => ({ t: 'group', rot: [0, o, 0], shapes: [ { t: 'group', rot: [-a, 0, 0], shapes: [ { t: 'sphere', r: 0.16 * s, n: 6, m: 10, scale: [1.6, 0.6, 0.1], rot: [0, 0, i * 25], pos: [0, 0, R + 0.06], color: '#ffffff' } ] } ] }))) },
        { id: 'crosta', name: 'Croûte', color: '#92400e', explode: [0, 0, -0.4],
          info: '<p>La « peau » rocheuse sur laquelle nous vivons. Elle est très fine : proportionnellement, elle est plus fine que la peau d\'une pomme ! Sous les continents, elle fait 30 à 70 km d\'épaisseur, sous les océans seulement 5 à 10 km.</p>',
          more: '<p>La croûte est divisée en grands morceaux, les <b>plaques</b>, qui flottent sur le manteau et se déplacent de quelques centimètres par an, à peu près autant que poussent tes ongles.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, false), { t: 'tube', r: R + 0.004, ri: R - 0.08, h: 0.03, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#92400e' } ].concat(tiles(false))) },
        { id: 'placche', name: 'Limites des plaques', label: 'Plaques', color: '#facc15', explode: [4.6, 0.3, -2.6],
          info: '<p>Les lignes jaunes sont quelques-unes des <b>limites entre les plaques</b>. Là où les plaques s\'éloignent, une nouvelle croûte se forme (comme au milieu de l\'Atlantique) ; là où elles se heurtent, des montagnes comme les <b>Alpes</b> et l\'Himalaya se soulèvent, et il y a des volcans et des tremblements de terre.</p>',
          more: '<p>Il y a 200 millions d\'années, les continents étaient réunis en un seul supercontinent, la <b>Pangée</b>. Regarde les côtes de l\'Afrique et de l\'Amérique du Sud : elles s\'emboîtent comme les pièces d\'un puzzle !</p>',
          shapes: T([ surfPipe([[66, -18], [50, -29], [30, -42], [15, -46], [0, -22], [-20, -13], [-40, -16], [-55, -5]], 0.03, '#facc15'),
            surfPipe([[36, -8], [40, 5], [45, 12], [41, 22], [38, 35], [34, 50], [30, 65], [30, 80], [27, 88]], 0.03, '#facc15'),
            surfPipe([[12, -79], [-5, -83], [-20, -73], [-35, -74], [-50, -77]], 0.03, '#facc15'),
            surfPipe([[13, 42], [0, 37], [-15, 35]], 0.025, '#facc15') ]) },
        { id: 'mantello-superiore', name: 'Manteau supérieur', label: 'Manteau supérieur', color: '#ea580c', explode: [0, 0, 0],
          info: '<p>Sous la croûte se trouve le <b>manteau</b> : une roche très chaude qui, sur des temps très longs, se déplace lentement comme une pâte épaisse. Dans la partie haute, à certains endroits, la roche fond et forme le <b>magma</b> des volcans.</p>',
          shapes: T([ hemi(R - 0.08, '#ea580c', 0.022, false) ]) },
        { id: 'mantello-inferiore', name: 'Manteau inférieur', label: 'Manteau inférieur', color: '#b91c1c', explode: [0, 0, 0],
          info: '<p>Le manteau est la couche la plus grande : il va jusqu\'à <b>2 900 km</b> de profondeur et représente à lui seul plus de 80 % du volume de la Terre. Plus on descend, plus il fait chaud : jusqu\'à environ 4 000 °C.</p>',
          shapes: T([ hemi(1.79, '#b91c1c', 0.032, false) ]) },
        { id: 'convezione', name: 'Courants dans le manteau', label: 'Courants de convection', color: '#fed7aa', explode: [0, 0, 0.05], chip: true,
          info: '<p>Le manteau est plus chaud en bas et plus froid en haut : la roche chaude monte tout doucement, la roche froide descend. Ces <b>courants de convection</b> entraînent les plaques de la croûte.</p>',
          more: '<p>Un tour complet de ces courants dure des <b>dizaines de millions d\'années</b> : la roche du manteau se déplace de quelques centimètres par an.</p>',
          shapes: T(loops(1.45, 0.28, 10, '#fed7aa', '#7f1d1d', 0.3)) },
        { id: 'nucleo-esterno', name: 'Noyau externe (liquide)', label: 'Noyau externe', color: '#f59e0b', explode: [0, 0, 0.1],
          info: '<p>Une couche de <b>fer et de nickel fondus</b>, liquides, à 4 000–5 000 °C. Le métal liquide en mouvement crée le <b>champ magnétique</b> de la Terre.</p>',
          shapes: T([ hemi(1.09, '#f59e0b', 0.042, false) ].concat(loops(0.74, 0.17, 7, '#fef3c7', '#b45309', 0.8))) },
        { id: 'nucleo-interno', name: 'Noyau interne (solide)', label: 'Noyau interne', color: '#fef3c7', explode: [0, 0, 0.2],
          info: '<p>Le centre de la Terre : une boule de <b>fer et de nickel</b> très chaude, environ <b>5 400 °C</b>, comme la surface du Soleil ! Pourtant, elle est <b>solide</b>, car la pression est énorme.</p>',
          more: '<p>Personne n\'est jamais descendu aussi profond : le trou le plus profond jamais creusé atteint 12 km. Nous connaissons l\'intérieur de la Terre en étudiant comment voyagent les <b>ondes des séismes</b> : elles changent de vitesse et de direction en passant d\'une couche à l\'autre.</p>',
          shapes: T([ { t: 'sphere', r: 0.38, n: 14, m: 22, anim: { type: 'blink', color: '#ffffff', amount: 0.4, rate: 0.8 } } ]) },
        { id: 'campo-magnetico', name: 'Champ magnétique', label: 'Champ magnétique', color: '#a78bfa', explode: [0, 0, 0],
          info: '<p>La Terre se comporte comme un <b>gigantesque aimant</b>. C\'est pour cela que l\'aiguille de la boussole pointe vers le nord. Le champ magnétique nous protège aussi du vent solaire.</p>',
          more: '<p>Le pôle nord magnétique ne coïncide pas exactement avec le pôle géographique et se déplace de dizaines de km par an. Dans l\'histoire de la Terre, les pôles magnétiques se sont <b>inversés</b> de nombreuses fois !</p>',
          shapes: T(field) },
        { id: 'asse', name: 'Axe de rotation', label: 'Axe de la Terre', color: '#e2e8f0', explode: [0, 0, 0],
          info: '<p>La Terre tourne sur elle-même autour d\'une ligne imaginaire, l\'<b>axe</b>, qui passe par le pôle Nord et le pôle Sud. Un tour dure <b>24 heures</b> : c\'est le jour et la nuit.</p>',
          more: '<p>L\'axe est incliné de <b>23,5°</b>. C\'est pourquoi, pendant que la Terre tourne autour du Soleil, les rayons arrivent plus droits tantôt sur l\'hémisphère nord, tantôt sur l\'hémisphère sud : voilà les <b>saisons</b> !</p>',
          shapes: T([ { t: 'cyl', r: 0.025, h: 5.6, n: 8, color: '#e2e8f0' }, { t: 'cone', r: 0.08, h: 0.22, n: 12, pos: [0, 2.9, 0], color: '#ef4444' },
            { t: 'group', pos: [0, 2.45, 0], anim: { type: 'spin', axis: 'y', rate: 0.5, dir: -1 }, shapes: [ { t: 'torus', R: 0.42, r: 0.02, n: 24, m: 4, arc: 300, color: '#e2e8f0' }, { t: 'cone', r: 0.06, h: 0.16, n: 10, rot: [0, 0, 90], pos: [0.42, 0, 0], color: '#e2e8f0' } ] } ]) },
        { id: 'atmosfera', name: 'Atmosphère', color: '#7dd3fc', alpha: 0.14, explode: [0, 0, 0],
          info: '<p>Une fine couverture d\'<b>air</b> enveloppe la planète : elle contient l\'oxygène que nous respirons, retient la chaleur et nous protège des rayons les plus dangereux du Soleil.</p>',
          more: '<p>L\'air est fait à 78 % d\'azote et à 21 % d\'oxygène. La moitié de tout l\'air se trouve sous 5,5 km d\'altitude : à cette échelle, l\'atmosphère est aussi fine que la peau d\'un oignon.</p>',
          shapes: [ { t: 'sphere', r: R + 0.13, n: 18, m: 32 } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'La planète bleue', explode: 0,
        html: '<p>Vue de l\'espace, la Terre est bleue et blanche : <b>océans</b> et <b>nuages</b>. C\'est la seule planète que nous connaissons avec de l\'eau liquide en surface et de la vie.</p><p class="tip">🇮🇹 Arrives-tu à trouver l\'Italie ? C\'est la « botte » au milieu de la mer, au-dessus de l\'Afrique.</p>' },
      { icon: '🔄', title: 'Elle tourne sur elle-même', explode: 0,
        html: '<p>La Terre tourne autour de son <b>axe</b> en 24 heures, d\'ouest en est : c\'est pour cela que le Soleil semble se lever à l\'est et se coucher à l\'ouest. L\'axe est <b>incliné</b> et cela nous offre les saisons.</p>' },
      { icon: '🍑', title: 'À l\'intérieur, elle est faite de couches', explode: 1, focus: ['crosta', 'mantello-superiore', 'mantello-inferiore', 'nucleo-esterno', 'nucleo-interno'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>Si nous pouvions couper la Terre comme une pêche, nous verrions la <b>croûte</b> (la peau), le <b>manteau</b> (la chair) et le <b>noyau</b> (le noyau du fruit), divisé en noyau externe liquide et noyau interne solide.</p><p class="tip">🌡️ Plus on descend, plus il fait chaud : au centre, il y a environ 5 400 °C.</p>' },
      { icon: '🥾', title: 'La croûte et les plaques', explode: 0, view: { rx: 0.3, ry: -0.05 },
        html: '<p>La croûte est très fine et divisée en grands morceaux, les <b>plaques</b>. Là où elles se heurtent naissent des montagnes, des volcans et des tremblements de terre : l\'Italie se trouve juste là où la plaque africaine pousse contre la plaque européenne.</p>' },
      { icon: '♨️', title: 'Le manteau bouge', explode: 1, focus: ['mantello-superiore', 'mantello-inferiore', 'convezione'], view: { rx: 0.1, ry: -0.15 }, zoom: 1.2,
        html: '<p>Le manteau est une roche très chaude qui se déplace très très lentement, comme une pâte épaisse : la partie chaude monte, la partie froide descend. Ces <b>courants</b> déplacent les plaques de quelques centimètres chaque année.</p>' },
      { icon: '🧲', title: 'Le noyau et la Terre-aimant', explode: 1, focus: ['nucleo-esterno', 'nucleo-interno', 'campo-magnetico'], view: { rx: 0.15, ry: -0.3 },
        html: '<p>Dans le <b>noyau externe</b>, le fer liquide tourne et crée le <b>champ magnétique</b> : la Terre est comme un grand aimant. C\'est grâce à lui que la boussole fonctionne et que le vent solaire ne nous frappe pas.</p>' },
      { icon: '🌬️', title: 'La couverture d\'air', explode: 0, 
        html: '<p>Autour de la Terre se trouve l\'<b>atmosphère</b> : l\'air que nous respirons. Elle retient la chaleur du Soleil (sans elle, il ferait −18 °C !) et nous protège. C\'est dans l\'atmosphère que se forment les nuages et la météo.</p>' }
    ],
    facts: [
      { icon: '🥔', title: 'Ce n\'est pas une boule parfaite', html: 'En tournant, la Terre s\'« aplatit » un petit peu aux pôles : le diamètre à l\'équateur est environ 43 km plus long que celui entre les pôles.' },
      { icon: '🏎️', title: 'Très rapides sans nous en apercevoir', html: 'À l\'équateur, la rotation nous emporte à environ <b>1 670 km/h</b>, et autour du Soleil, la Terre file à 107 000 km/h !' },
      { icon: '🎂', title: 'Une planète ancienne', html: 'La Terre a environ <b>4,6 milliards d\'années</b>. Les êtres humains existent depuis environ 300 000 ans : si l\'histoire de la Terre était une journée, nous serions arrivés dans les 6 dernières secondes.' },
      { icon: '🧩', title: 'Le puzzle des continents', html: 'Les côtes de l\'Afrique et de l\'Amérique du Sud s\'emboîtent : autrefois, elles étaient réunies dans le supercontinent <b>Pangée</b>.' },
      { icon: '🕳️', title: 'Le trou le plus profond', html: 'Le puits le plus profond jamais creusé (en Russie) atteint environ 12 km : moins de 0,2 % du chemin vers le centre de la Terre.' }
    ],
    quiz: [
      { type: 'order', q: 'Remets dans l\'ordre les couches de la Terre, de la surface au centre', items: ['Croûte', 'Manteau', 'Noyau externe', 'Noyau interne'], explain: 'Peau, chair et noyau du fruit : croûte, manteau, noyau liquide et noyau solide.' },
      { type: 'mc', q: 'De quoi est fait surtout le noyau de la Terre ?', options: ['D\'eau et de glace', 'De fer et de nickel', 'De sable', 'D\'air comprimé'], answer: 1, explain: 'Le noyau est fait de fer et de nickel : liquides dans la partie externe, solides au centre.' },
      { type: 'tf', q: 'Le noyau interne est solide même s\'il est très chaud.', answer: true, explain: 'L\'énorme pression empêche le métal de fondre.' },
      { type: 'mc', q: 'Qu\'est-ce qui crée le champ magnétique terrestre ?', options: ['Le vent', 'Le fer liquide qui bouge dans le noyau externe', 'La Lune', 'Les océans'], answer: 1, explain: 'Le mouvement du métal liquide produit le champ magnétique.' },
      { type: 'num', q: 'En combien d\'heures la Terre fait-elle un tour complet sur elle-même ?', answer: 24, unit: 'heures', explain: 'Environ 24 heures : c\'est la durée du jour.' },
      { type: 'mc', q: 'Pourquoi y a-t-il des saisons ?', options: ['Parce que la Terre se rapproche et s\'éloigne beaucoup du Soleil', 'Parce que l\'axe de la Terre est incliné', 'Parce que le Soleil s\'allume et s\'éteint', 'À cause des nuages'], answer: 1, explain: 'L\'inclinaison de 23,5° fait arriver les rayons plus droits tantôt sur un hémisphère, tantôt sur l\'autre.' }
    ]
  });
})();
