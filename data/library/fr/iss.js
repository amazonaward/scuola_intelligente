/* La Stazione Spaziale Internazionale (ISS). Formato: data/library/FORMATO.md
   Assi: il traliccio corre lungo x, i moduli abitati lungo z (z+ = verso di marcia), y = alto (la Terra è sotto, sfondo "orbit"). */
(function () {
  const TY = 1.15, TZ = 0.8;                       // asse del traliccio
  /* modulo cilindrico lungo z (o lungo x con ax = 'x'): corpo, anelli di rinforzo, coni di raccordo */
  const modZ = (z0, z1, r, color, x, y) => {
    const L = z1 - z0, zc = (z0 + z1) / 2, s = [
      { t: 'cyl', r, h: L - 0.24, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, zc], color },
      { t: 'cyl', r, r2: r * 0.62, h: 0.12, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, z1 - 0.06], color },
      { t: 'cyl', r: r * 0.62, r2: r, h: 0.12, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, z0 + 0.06], color }
    ];
    for (let k = 1; k < 4; k++) s.push({ t: 'torus', R: r + 0.005, r: 0.025, n: 30, m: 6, rot: [90, 0, 0], pos: [x || 0, y || 0, z0 + 0.12 + (L - 0.24) * k / 4], color: '#a8a29e' });
    return s;
  };
  const modX = (x0, x1, r, color, y, z) => modZ(x0, x1, r, color, 0, 0).map((s) => Object.assign({}, s, { pos: [s.pos[2], y, z], rot: [0, 0, 90] }));
  /* ala di pannelli solari: telo dorato a celle + albero centrale */
  const wing = (dir) => {
    const s = [{ t: 'cyl', r: 0.035, h: 4.3, n: 8, rot: [90, 0, 0], pos: [0, 0, dir * 2.3], color: '#e5e7eb' }];
    for (const side of [-1, 1]) {
      s.push({ t: 'box', s: [0.46, 0.02, 4.2], pos: [side * 0.27, 0, dir * 2.35], color: '#b45309' });
      for (let k = 1; k < 12; k++) s.push({ t: 'box', s: [0.46, 0.006, 0.012], pos: [side * 0.27, 0.014, dir * (0.25 + k * 0.35)], color: '#fcd34d', decal: 1 });
      s.push({ t: 'box', s: [0.012, 0.006, 4.2], pos: [side * 0.27, 0.014, dir * 2.35], color: '#fcd34d', decal: 1 });
    }
    s.push({ t: 'box', s: [1.0, 0.08, 0.12], pos: [0, 0, dir * 4.45], color: '#9ca3af' });
    return s;
  };
  const array = (x, ph) => ({ t: 'group', pos: [x, TY, TZ], anim: { type: 'swing', axis: 'x', amp: 35, rate: 0.5, phase: ph }, shapes: [
    { t: 'cyl', r: 0.16, h: 0.5, n: 16, pos: [0, 0, 0], color: '#6b7280' }
  ].concat(wing(1), wing(-1)) });
  /* traliccio: trave con correnti e diagonali */
  const truss = [ { t: 'box', s: [15.2, 0.46, 0.46], pos: [0, TY, TZ], color: '#cbd5e1' } ];
  for (let i = -7; i <= 7; i++) {
    truss.push({ t: 'box', s: [0.06, 0.5, 0.5], pos: [i, TY, TZ], color: '#94a3b8' });
    if (i < 7) for (const zz of [-1, 1]) truss.push({ t: 'box', s: [1.08, 0.035, 0.012], pos: [i + 0.5, TY, TZ + zz * 0.236], rot: [0, 0, (i % 2 ? 1 : -1) * 23], color: '#64748b', decal: 1 });
  }
  const radiator = (x, ph) => ({ t: 'group', pos: [x, TY - 0.25, TZ], anim: { type: 'swing', axis: 'y', amp: 22, rate: 0.35, phase: ph }, shapes: [
    { t: 'cyl', r: 0.06, h: 0.5, n: 10, pos: [0, -0.2, 0], color: '#9ca3af' }
  ].concat([0, 1, 2, 3].map((k) => ({ t: 'box', s: [1.3, 0.78, 0.04], pos: [0, -0.9 - k * 0.84, 0], color: '#f8fafc' })),
    [0, 1, 2, 3].map((k) => ({ t: 'box', s: [1.22, 0.02, 0.012], pos: [0, -0.9 - k * 0.84, 0.026], color: '#cbd5e1', decal: 1 }))) });

  LIBRARY({
    lang: 'fr',
    id: 'iss',
    title: 'La Station spatiale internationale',
    intro: 'L\'<b>ISS</b> est une maison et un laboratoire grands comme un terrain de football, qui tourne autour de la Terre à <b>400 km</b> d\'altitude. Elle fait un tour complet en 90 minutes et à bord vivent toujours quelques astronautes de nombreux pays.',
    model: {
      rx: 0.42, ry: -0.62, speed: 0.3, height: 480, bg: 'orbit', fit: 1.05,
      parts: [
        { id: 'traliccio', name: 'Armature (la « colonne vertébrale »)', label: 'Armature', color: '#cbd5e1', explode: [0, 1.6, 0],
          info: '<p>Une longue poutre de métal, longue de plus de 100 mètres. Elle relie les panneaux solaires, les radiateurs, les antennes et le bras robotisé : c\'est la <b>colonne vertébrale</b> de la station.</p>',
          more: '<p>L\'armature est faite de <b>11 segments</b> amenés en orbite un par un par la navette spatiale et assemblés par les astronautes pendant des sorties dans l\'espace. À l\'intérieur passent des câbles électriques et des tuyaux de refroidissement.</p>',
          shapes: truss.concat([ { t: 'box', s: [0.4, 0.4, 0.3], pos: [0, 0.75, TZ], color: '#9ca3af' } ]) },
        { id: 'pannelli', name: 'Panneaux solaires', color: '#b45309', explode: [0, 2.6, 0],
          info: '<p>Huit grandes « ailes » dorées transforment la lumière du Soleil en <b>électricité</b>. Elles tournent tout doucement pour rester toujours face au Soleil.</p>',
          more: '<p>Chaque aile mesure 35 mètres et contient environ 33 000 cellules solaires. Ensemble, elles produisent jusqu\'à <b>120 kW</b> : assez pour une quarantaine de maisons. Une partie de l\'énergie charge les <b>batteries</b>, qui servent quand la station passe dans l\'ombre de la Terre (environ 35 minutes à chaque tour).</p>',
          shapes: [ array(-5.0, 0), array(-6.85, 0), array(5.0, 0), array(6.85, 0) ] },
        { id: 'giunti', name: 'Joints rotatifs (SARJ)', label: 'Joints rotatifs', color: '#475569', explode: [0, 1.6, 0],
          info: '<p>Deux grands « roulements » dans l\'armature font tourner les extrémités qui portent les panneaux, comme des tournesols qui suivent le Soleil.</p>',
          more: '<p>Chaque joint est un anneau de presque 3 mètres de diamètre, avec des engrenages et des moteurs. Il fait un tour de 360° à chaque tour de la station, donc toutes les 90 minutes.</p>',
          shapes: [-3.6, 3.6].map((x) => ({ t: 'group', pos: [x, TY, TZ], shapes: [
            { t: 'cyl', r: 0.4, h: 0.32, n: 30, rot: [0, 0, 90] },
            { t: 'group', anim: { type: 'spin', axis: 'x', rate: 0.25 }, shapes: [ { t: 'torus', R: 0.4, r: 0.05, n: 30, m: 8, rot: [0, 0, 90], color: '#f59e0b' }, { t: 'box', s: [0.34, 0.08, 0.84], color: '#94a3b8' } ] }
          ] })) },
        { id: 'radiatori', name: 'Radiateurs', color: '#f8fafc', explode: [0, -1.2, 0.6],
          info: '<p>De grands panneaux blancs qui rejettent dans l\'espace la <b>chaleur</b> produite par les personnes et les machines. Sans eux, la station deviendrait un four !</p>',
          more: '<p>Dans les tuyaux de la station circule de l\'<b>ammoniac</b> qui récupère la chaleur et l\'amène aux radiateurs. Là, la chaleur est rayonnée dans l\'espace sous forme de lumière infrarouge. Les radiateurs aussi tournent, mais pour rester de chant par rapport au Soleil.</p>',
          shapes: [ radiator(-2.4, 0), radiator(2.4, 0.5) ] },
        { id: 'zvezda', name: 'Zvezda (module de service russe)', label: 'Zvezda', color: '#d6d3d1', explode: [0, 0, -2.2],
          info: '<p>Le module russe « Étoile » : il a des couchettes, une cuisine, des toilettes et les <b>moteurs</b> qui, de temps en temps, remontent la station, qui sinon descendrait tout doucement.</p>',
          more: '<p>À 400 km, il reste encore un peu d\'air qui freine la station : elle perd environ 2 km d\'altitude par mois. Les moteurs de Zvezda et des vaisseaux amarrés font les « remontées » (reboost).</p>',
          shapes: modZ(-7.4, -4.4, 0.6, '#d6d3d1').concat([
            { t: 'cyl', r: 0.72, h: 1.1, n: 30, rot: [90, 0, 0], pos: [0, 0, -6.75], color: '#d6d3d1' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0.3, 0, -7.45], color: '#57534e' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [-0.3, 0, -7.45], color: '#57534e' },
            { t: 'sphere', r: 0.55, n: 14, m: 24, pos: [0, 0, -4.2], color: '#e7e5e4' },
            { t: 'box', s: [3.2, 0.03, 0.9], pos: [-2.3, 0, -6.6], color: '#1e3a8a' }, { t: 'box', s: [3.2, 0.03, 0.9], pos: [2.3, 0, -6.6], color: '#1e3a8a' },
            { t: 'box', s: [3.2, 0.008, 0.012], pos: [-2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }, { t: 'box', s: [3.2, 0.008, 0.012], pos: [2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }
          ]) },
        { id: 'zarya', name: 'Zarya (le premier module)', label: 'Zarya', color: '#e7e5e4', explode: [0, -0.3, -1.4],
          info: '<p>« Aube » en russe : ce fut le <b>premier élément</b> de la station, lancé en 1998. Aujourd\'hui, il sert de réserve et contient des réservoirs de carburant.</p>',
          shapes: modZ(-3.95, -1.6, 0.62, '#e7e5e4').concat([ { t: 'tube', r: 0.3, ri: 0.22, h: 0.4, n: 20, pos: [0, -0.75, -3.0], color: '#9ca3af' } ]) },
        { id: 'nodi', name: 'Nœuds Unity et Harmony', label: 'Nœuds', color: '#f1f5f9', explode: [0, 0.4, 0],
          info: '<p>Les <b>nœuds</b> sont des « carrefours » : des modules courts avec beaucoup de portes de chaque côté, auxquelles se fixent les autres modules et les vaisseaux.</p>',
          more: '<p>Chaque nœud a 6 écoutilles (devant, derrière, dessus, dessous, droite, gauche). Harmony et Tranquility ont été construits <b>en Italie</b>, à Turin !</p>',
          shapes: modZ(-1.45, -0.35, 0.66, '#f1f5f9').concat(modZ(2.75, 4.1, 0.64, '#f1f5f9'), [ { t: 'tube', r: 0.34, ri: 0.26, h: 0.3, n: 20, pos: [0, -0.72, 3.4], color: '#9ca3af' } ]) },
        { id: 'destiny', name: 'Destiny (laboratoire américain)', label: 'Destiny', color: '#ece7dc', explode: [0, 0.5, 0.4],
          info: '<p>Le laboratoire américain : ici les astronautes font des expériences sur les plantes, les flammes, les liquides et sur leur propre corps, pour comprendre comment les choses changent <b>sans pesanteur</b>.</p>',
          more: '<p>En microgravité, les flammes deviennent des sphères bleutées, l\'eau forme des boules qui flottent et les os perdent du calcium : c\'est pourquoi les astronautes font 2 heures de gymnastique par jour.</p>',
          shapes: modZ(-0.3, 2.7, 0.64, '#ece7dc').concat([ { t: 'cyl', r: 0.2, h: 0.04, n: 20, rot: [0, 0, 0], pos: [0, -0.64, 1.4], color: '#1e293b' } ]) },
        { id: 'columbus', name: 'Columbus (laboratoire européen)', label: 'Columbus', color: '#e2e8f0', explode: [1.6, 0, 0.6],
          info: '<p>Le laboratoire de l\'<b>Agence spatiale européenne</b>. Lui aussi a été construit en grande partie à Turin. À l\'extérieur, il a des plateformes pour des expériences exposées au vide.</p>',
          shapes: modX(0.62, 2.4, 0.6, '#e2e8f0', 0, 3.42).concat([ { t: 'box', s: [0.5, 0.35, 0.35], pos: [2.0, 0.55, 3.42], color: '#94a3b8' } ]) },
        { id: 'kibo', name: 'Kibo (laboratoire japonais)', label: 'Kibo', color: '#f5f5f4', explode: [-1.6, 0.3, 0.6],
          info: '<p>« Espoir » en japonais : c\'est le plus grand module. Il a un petit bras robotisé rien qu\'à lui et une <b>terrasse</b> extérieure où l\'on expose des expériences à l\'espace.</p>',
          shapes: modX(-3.1, -0.62, 0.7, '#f5f5f4', 0, 3.42).concat([
            { t: 'box', s: [1.4, 0.15, 1.3], pos: [-3.9, -0.2, 3.42], color: '#9ca3af' },
            { t: 'box', s: [0.35, 0.3, 0.35], pos: [-3.6, 0.03, 3.1], color: '#fbbf24' }, { t: 'box', s: [0.35, 0.3, 0.35], pos: [-4.2, 0.03, 3.7], color: '#60a5fa' },
            { t: 'cyl', r: 0.42, h: 0.9, n: 24, pos: [-1.9, 1.05, 3.42], color: '#f5f5f4' }, { t: 'torus', R: 0.42, r: 0.025, n: 24, m: 6, pos: [-1.9, 1.2, 3.42], color: '#a8a29e' }
          ]) },
        { id: 'cupola', name: 'Tranquility et Cupola', label: 'Cupola', color: '#e7e5e4', explode: [-1.4, -1.0, -0.2],
          info: '<p>La <b>Cupola</b> est la « fenêtre panoramique » de la station : 7 fenêtres d\'où les astronautes regardent la Terre et photographient les tempêtes, les villes et les aurores.</p>',
          more: '<p>La fenêtre centrale est la plus grande vitre jamais envoyée dans l\'espace (80 cm). Les vitres sont faites de 4 couches épaisses et ont des volets extérieurs qui se ferment pour les protéger des micrométéorites.</p>',
          shapes: modX(-2.75, -0.66, 0.6, '#e7e5e4', 0, -0.9).concat([
            { t: 'cyl', r: 0.52, r2: 0.42, h: 0.32, n: 7, pos: [-1.7, -0.72, -0.9], color: '#d6d3d1' },
            { t: 'cyl', r: 0.36, h: 0.04, n: 7, pos: [-1.7, -0.9, -0.9], color: '#0ea5e9' },
            { t: 'cyl', r: 0.38, h: 0.05, n: 7, pos: [-1.7, -0.88, -0.9], color: '#9ca3af' }
          ]) },
        { id: 'braccio', name: 'Canadarm2 (bras robotisé)', label: 'Bras robotisé', color: '#f1f5f9', pos: [1.4, TY + 0.25, TZ], explode: [0.5, 1.6, 0.8],
          info: '<p>Un bras robotisé de 17 mètres de long, construit au <b>Canada</b>. Il attrape les vaisseaux cargo, déplace les pièces lourdes et transporte les astronautes pendant les sorties dans l\'espace.</p>',
          more: '<p>Il a 7 articulations, comme un bras humain (épaule, coude, poignet). Il n\'a pas d\'« avant » ni d\'« arrière » : il peut se détacher et se rattacher par l\'autre extrémité, en se déplaçant sur la station comme une <b>chenille</b>.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.18, 0.6], color: '#94a3b8' },
            { t: 'group', anim: { type: 'swing', axis: 'y', amp: 40, rate: 0.4 }, shapes: [
              { t: 'cyl', r: 0.12, h: 0.25, n: 16, pos: [0, 0.2, 0], color: '#64748b' },
              { t: 'pipe', r: 0.07, n: 12, pts: [[0, 0.3, 0], [0, 1.4, 1.5]] },
              { t: 'group', pos: [0, 1.4, 1.5], anim: { type: 'swing', axis: 'x', amp: 30, rate: 0.4, phase: 0.2 }, shapes: [
                { t: 'sphere', r: 0.13, n: 10, color: '#64748b' },
                { t: 'pipe', r: 0.065, n: 12, pts: [[0, 0, 0], [0, -0.6, 1.9]] },
                { t: 'cyl', r: 0.12, h: 0.3, n: 16, pos: [0, -0.68, 2.05], rot: [70, 0, 0], color: '#64748b' },
                { t: 'cyl', r: 0.09, h: 0.18, n: 16, pos: [0, -0.74, 2.3], rot: [70, 0, 0], color: '#1f2937' }
              ] } ] } ] },
        { id: 'dragon', name: 'Vaisseau Crew Dragon', label: 'Crew Dragon', color: '#f8fafc', explode: [0, 0, 1.4],
          anim: { type: 'move', dir: [0, 0, 1], amp: 2.2, wave: 'window', from: 0.05, to: 0.75, ramp: 0.45 },
          info: '<p>Un vaisseau qui amène les <b>astronautes</b> de la Terre à la station et les ramène à la maison. Il s\'amarre tout seul, guidé par l\'ordinateur.</p>',
          more: '<p>L\'amarrage (docking) se fait à quelques centimètres par seconde : la station et le vaisseau voyagent à 28 000 km/h, mais l\'un par rapport à l\'autre ils sont presque immobiles, comme deux voitures côte à côte sur l\'autoroute.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: [-90, 0, 0], pos: [0, 0, 5.35], pts: [[0, 1.25], [0.2, 1.22], [0.32, 1.0], [0.6, 0.2], [0.64, 0.08], [0.6, 0], [0, 0]] },
            { t: 'cyl', r: 0.13, h: 0.14, n: 16, rot: [90, 0, 0], pos: [0, 0, 4.12], color: '#9ca3af' },
            { t: 'cyl', r: 0.6, h: 0.75, n: 30, rot: [90, 0, 0], pos: [0, 0, 5.75], color: '#e5e7eb' },
            { t: 'torus', R: 0.6, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], pos: [0, 0, 5.38], color: '#1f2937' },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [-0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'cyl', r: 0.08, h: 0.03, n: 12, rot: [-30, 0, 0], pos: [0, 0.4, 4.85], color: '#0f172a', decal: 1 } ] },
        { id: 'soyuz', name: 'Vaisseau Soyouz', label: 'Soyouz', color: '#a3a38a', explode: [0, -1.4, 0],
          info: '<p>Le vaisseau russe : il transporte 3 astronautes. Il est fait de trois parties : le module orbital (la sphère), la capsule de retour et le module de service avec les panneaux solaires.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.3, n: 16, pos: [0, -0.8, -3.0], color: '#9ca3af' },
            { t: 'sphere', r: 0.42, n: 14, m: 24, pos: [0, -1.32, -3.0], scale: [1, 1.12, 1], color: '#a3a38a' },
            { t: 'lathe', n: 28, pos: [0, 0, -3.0], pts: [[0.24, -1.75], [0.5, -1.95], [0.58, -2.42], [0.3, -2.5], [0, -2.5]], color: '#78716c' },
            { t: 'cyl', r: 0.5, h: 0.85, n: 28, pos: [0, -2.95, -3.0], color: '#d6d3d1' },
            { t: 'cyl', r: 0.44, r2: 0.5, h: 0.12, n: 28, pos: [0, -3.43, -3.0], color: '#57534e' },
            { t: 'box', s: [3.0, 0.03, 0.55], pos: [0, -3.0, -3.0], color: '#1e3a8a' },
            { t: 'box', s: [3.0, 0.008, 0.012], pos: [0, -2.98, -3.0], color: '#93c5fd', decal: 1 } ] },
        { id: 'astronauta', name: 'Astronaute en sortie dans l\'espace', label: 'Astronaute', color: '#f8fafc', pos: [-3.0, TY + 0.55, TZ + 0.55], explode: [-0.4, 1.4, 1.2],
          anim: { type: 'swing', axis: 'z', amp: 8, rate: 0.6 },
          info: '<p>Pour réparer la station de l\'extérieur, les astronautes portent une <b>combinaison spatiale</b>, qui est un petit vaisseau : elle fournit l\'air, l\'eau, la chaleur et protège des rayons du Soleil.</p>',
          more: '<p>Une sortie dans l\'espace dure environ <b>6 à 7 heures</b>. L\'astronaute est toujours attaché à la station par des câbles : s\'il se détachait, il continuerait à flotter au loin !</p>',
          shapes: [ { t: 'sphere', r: 0.17, n: 12, m: 18, scale: [1, 1.35, 0.85] },
            { t: 'sphere', r: 0.12, n: 12, m: 18, pos: [0, 0.32, 0] }, { t: 'sphere', r: 0.095, n: 10, m: 16, pos: [0, 0.32, 0.04], scale: [1, 0.8, 1], color: '#d97706' },
            { t: 'box', s: [0.28, 0.32, 0.12], pos: [0, 0.05, -0.17], color: '#e5e7eb' },
            { t: 'pipe', r: 0.055, n: 10, curve: true, pts: [[0.15, 0.12, 0], [0.32, 0.0, 0.08], [0.38, -0.2, 0.15]] },
            { t: 'pipe', r: 0.055, n: 10, curve: true, pts: [[-0.15, 0.12, 0], [-0.3, 0.18, 0.12], [-0.4, 0.35, 0.18]] },
            { t: 'pipe', r: 0.065, n: 10, curve: true, pts: [[0.07, -0.18, 0], [0.1, -0.42, 0.05], [0.12, -0.62, 0]] },
            { t: 'pipe', r: 0.065, n: 10, curve: true, pts: [[-0.07, -0.18, 0], [-0.12, -0.4, -0.05], [-0.14, -0.6, 0.05]] },
            { t: 'pipe', r: 0.012, n: 6, curve: true, pts: [[0, -0.05, -0.2], [0.2, -0.3, -0.4], [0.3, -0.55, -0.35]], color: '#facc15' } ] }
      ]
    },
    steps: [
      { icon: '🛰️', title: 'Une maison dans l\'espace', explode: 0,
        html: '<p>La Station spatiale a été <b>assemblée en orbite</b> pièce après pièce, depuis 1998, par 5 agences spatiales : États-Unis, Russie, Europe (avec l\'Italie !), Japon et Canada. C\'est le plus grand objet jamais construit par l\'être humain dans l\'espace.</p><p class="tip">🔭 Le soir, on peut la voir à l\'œil nu : elle ressemble à une étoile très brillante qui traverse le ciel en quelques minutes, sans clignoter.</p>' },
      { icon: '☀️', title: 'L\'énergie du Soleil', focus: ['pannelli', 'giunti', 'traliccio'], view: { rx: 0.3, ry: -0.35 },
        html: '<p>Dans l\'espace, il n\'y a pas de prises électriques : toute l\'énergie vient de la lumière du Soleil grâce aux <b>huit ailes de panneaux solaires</b>.</p><p>Les <b>joints rotatifs</b> tournent les ailes pour les garder toujours face au Soleil, comme le font les tournesols.</p>' },
      { icon: '🏠', title: 'Les pièces : les modules', focus: ['zvezda', 'zarya', 'nodi', 'destiny', 'columbus', 'kibo', 'cupola'], explode: 0.35, view: { rx: 0.55, ry: -0.5 },
        html: '<p>Les astronautes vivent dans les <b>modules</b> : de gros cylindres remplis d\'air, reliés entre eux comme les wagons d\'un train. Il y a les laboratoires (<b>Destiny</b>, <b>Columbus</b>, <b>Kibo</b>), les couchettes, la salle de sport et les toilettes.</p><p class="tip">🇮🇹 Environ la moitié de l\'espace habitable de l\'ISS a été construite à <b>Turin</b>.</p>' },
      { icon: '🪟', title: 'La fenêtre sur la Terre', focus: ['cupola', 'nodi', 'astronauta'], view: { rx: -0.25, ry: -0.9 }, zoom: 1.3,
        html: '<p>Depuis la <b>Cupola</b>, on voit la Terre défiler sous ses pieds. Toutes les 90 minutes, la station fait un tour complet : les astronautes voient <b>16 levers et 16 couchers de soleil</b> par jour !</p>' },
      { icon: '🌡️', title: 'Se débarrasser de la chaleur', focus: ['radiatori', 'traliccio'], view: { rx: 0.2, ry: -0.2 },
        html: '<p>Les personnes, les ordinateurs et les expériences produisent de la chaleur. Dans le vide, la chaleur ne s\'en va pas avec le vent : un liquide la récupère et l\'amène aux <b>radiateurs</b> blancs, qui la « rayonnent » dans l\'espace.</p><p class="tip">🌗 Au Soleil, l\'extérieur de la station atteint +120 °C, à l\'ombre −150 °C.</p>' },
      { icon: '🦾', title: 'Le bras robotisé', focus: ['braccio', 'traliccio', 'astronauta'], view: { rx: 0.45, ry: -0.75 }, zoom: 1.25,
        html: '<p>Le <b>Canadarm2</b> attrape les vaisseaux cargo, déplace les pièces et transporte les astronautes hors de la station pendant les <b>sorties dans l\'espace</b>.</p>' },
      { icon: '🚀', title: 'Arrivées et départs', focus: ['dragon', 'soyuz', 'nodi', 'zarya'], view: { rx: 0.25, ry: -1.1 },
        html: '<p>Les vaisseaux apportent des astronautes, de la nourriture, de l\'eau, des vêtements et des expériences. Le <b>Crew Dragon</b> s\'approche tout doucement et s\'amarre tout seul à un nœud. Le <b>Soyouz</b> russe transporte trois personnes.</p>' },
      { icon: '🌍', title: 'Pourquoi ne tombe-t-elle pas ?', explode: 0, view: { rx: 0.42, ry: -0.62 },
        html: '<p>En réalité, la station <b>tombe sans arrêt</b> vers la Terre ! Mais elle va si vite sur le côté (<b>28 000 km/h</b>, 8 km chaque seconde) que, pendant qu\'elle tombe, la Terre se courbe « sous » elle : ainsi elle continue de tourner autour.</p><p>C\'est pour cela qu\'à bord tout flotte : les astronautes et les objets tombent en même temps que la station.</p>' }
    ],
    facts: [
      { icon: '⚽', title: 'Grande comme un terrain de football', html: 'L\'ISS mesure 109 mètres de long et pèse environ <b>420 tonnes</b>, comme 300 voitures.' },
      { icon: '🚿', title: 'L\'eau est recyclée', html: 'À bord, on recycle presque toute l\'eau, même la sueur et l\'urine : elle est filtrée et redevient potable. « Le café d\'hier devient le café de demain » !' },
      { icon: '😴', title: 'Dormir debout', html: 'Les astronautes dorment dans des sacs de couchage attachés à la paroi : sans pesanteur, il n\'y a ni « haut » ni « bas », donc on peut dormir dans n\'importe quelle position.' },
      { icon: '📏', title: 'Plus grands dans l\'espace', html: 'Sans pesanteur, la colonne vertébrale s\'allonge : les astronautes grandissent jusqu\'à <b>5 cm</b>. De retour sur Terre, ils retrouvent leur taille d\'avant.' },
      { icon: '🇮🇹', title: 'Astronautes italiens', html: 'Plusieurs Italiens sont allés sur l\'ISS, comme <b>Samantha Cristoforetti</b> (première femme européenne commandante de la station) et <b>Luca Parmitano</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'À quelle altitude vole la Station spatiale ?', options: ['Environ 10 km', 'Environ 400 km', 'Environ 36 000 km', 'Environ 384 000 km'], answer: 1, explain: 'L\'ISS vole à environ 400 km : 10 km est l\'altitude des avions, 384 000 km la distance de la Lune.' },
      { type: 'mc', q: 'D\'où vient l\'énergie électrique de la station ?', options: ['D\'un long câble venant de la Terre', 'D\'un moteur à essence', 'Des panneaux solaires', 'Des radiateurs'], answer: 2, explain: 'Huit grandes ailes de panneaux solaires transforment la lumière du Soleil en électricité.' },
      { type: 'tf', q: 'À bord, les objets flottent parce que dans l\'espace il n\'y a pas de gravité.', answer: false, explain: 'La gravité existe (presque comme sur Terre), mais la station, les astronautes et les objets tombent tous ensemble autour de la Terre : c\'est pour cela qu\'ils flottent.' },
      { type: 'mc', q: 'À quoi servent les radiateurs blancs ?', options: ['À produire de l\'électricité', 'À rejeter dans l\'espace la chaleur en excès', 'À communiquer avec la Terre', 'À pousser la station'], answer: 1, explain: 'Un liquide récupère la chaleur et l\'amène aux radiateurs, qui la rayonnent dans l\'espace.' },
      { type: 'num', q: 'En combien de minutes l\'ISS fait-elle un tour complet autour de la Terre ?', answer: 90, tol: 3, unit: 'min', explain: 'Environ 90 minutes : c\'est pour cela que les astronautes voient 16 levers de soleil par jour.' },
      { type: 'mc', q: 'Comment s\'appelle la « fenêtre panoramique » de la station ?', options: ['Cupola', 'Zarya', 'Canadarm2', 'Destiny'], answer: 0, explain: 'La Cupola a 7 fenêtres et a été construite en Italie.' }
    ]
  });
})();
