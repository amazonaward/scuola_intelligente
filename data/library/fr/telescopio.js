/* Il telescopio riflettore (tipo Newton) su montatura altazimutale a forcella e treppiede.
   Il tubo è descritto lungo x (x+ = bocca del tubo); viene inclinato di 32° e ruota piano intorno all'asse verticale. */
(function () {
  const PIV = [0, 2.45, 0], TILT = 32;
  const PAN = { type: 'swing', axis: 'y', amp: 28, rate: 0.22 };
  const TILTA = { type: 'swing', axis: 'z', amp: 6, rate: 0.22, phase: 0.25 };
  /* tutto ciò che sta sul tubo segue la rotazione (stesse animazioni in tutti i pezzi) */
  const onTube = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes: [ { t: 'group', rot: [0, 0, TILT], anim: TILTA, shapes } ] } ];
  const onFork = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes } ];
  const R = 0.42, X0 = -1.7, X1 = 1.7, SEC = 1.12;
  const RAYS = [0.27, -0.27, 0.14, -0.14];
  const photons = [];
  RAYS.forEach((y, i) => { for (let k = 0; k < 5; k++) photons.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [3.0, y, 0], color: '#fde047',
    anim: { type: 'path', pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], wave: 'saw', rate: 0.9, phase: k / 5 + i * 0.07 } }); });
  const rayLines = RAYS.map((y) => ({ t: 'pipe', r: 0.008, n: 5, pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], color: '#fde68a', alpha: 0.45 }));

  LIBRARY({
    lang: 'fr',
    id: 'telescopio',
    title: 'Le télescope',
    intro: 'Un télescope est un « entonnoir à lumière » : il récolte énormément de lumière avec un grand <b>miroir</b> ou une grande <b>lentille</b> et la concentre dans notre œil. Ainsi nous voyons des objets faibles et lointains, comme les cratères de la Lune ou les anneaux de Saturne.',
    model: {
      rx: 0.18, ry: -0.35, speed: 0.4, height: 480, fit: 1.05,
      parts: [
        { id: 'tubo', name: 'Tube optique', label: 'Tube', color: '#e2e8f0', alpha: 0.28, explode: [0, 0.5, 0.9],
          info: '<p>Le tube maintient les miroirs à la bonne distance et les protège de la lumière qui arrive de côté, de la poussière et de l\'humidité de la nuit.</p>',
          more: '<p>La distance entre le miroir principal et le point où la lumière se concentre s\'appelle la <b>distance focale</b>. En divisant la focale du télescope par celle de l\'oculaire, on obtient le <b>grossissement</b> : 1 000 mm ÷ 10 mm = 100 fois.</p>',
          shapes: onTube([ { t: 'cyl', r: R, h: X1 - X0, n: 36, rot: [0, 0, 90], open: true, ds: true },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.12, n: 36, rot: [0, 0, 90], pos: [X1 - 0.06, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.1, n: 36, rot: [0, 0, 90], pos: [X0 + 0.05, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'cyl', r: R + 0.03, h: 0.04, n: 36, rot: [0, 0, 90], pos: [X0 - 0.02, 0, 0], color: '#334155', alpha: 1 } ]) },
        { id: 'specchio-primario', name: 'Miroir principal', label: 'Miroir principal', color: '#cbd5e1', explode: [-1.0, -0.5, 0],
          info: '<p>C\'est le cœur du télescope : un miroir <b>courbe</b> (concave) au fond du tube. Il récolte la lumière des étoiles et la renvoie en la faisant <b>converger</b> en un point, le foyer.</p>',
          more: '<p>Sa surface est une <b>parabole</b> précise à moins d\'un dix-millième de millimètre, recouverte d\'une fine couche d\'aluminium. Plus le miroir est grand, plus il récolte de lumière : un miroir de 20 cm récolte environ <b>800 fois</b> la lumière de notre œil.</p>',
          shapes: onTube([ { t: 'lathe', n: 36, rot: [0, 0, -90], pos: [-1.5, 0, 0], pts: [[0, 0.0], [0.2, 0.012], [0.38, 0.045], [0.38, -0.06], [0, -0.06]], color: '#e0f2fe' },
            { t: 'cyl', r: 0.4, h: 0.08, n: 30, rot: [0, 0, 90], pos: [-1.6, 0, 0], color: '#475569' },
            { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, 0.25, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, -0.25, 0], color: '#94a3b8' } ]) },
        { id: 'specchio-secondario', name: 'Miroir secondaire', label: 'Miroir secondaire', color: '#e0f2fe', explode: [0.4, 0.9, 0.5],
          info: '<p>Un petit miroir plat, incliné à 45°, près de l\'ouverture du tube. Il dévie la lumière sur le côté, vers l\'<b>oculaire</b>, comme ça nous n\'avons pas la tête devant le tube !</p>',
          more: '<p>Il est tenu au centre par de fins bras métalliques, l\'<b>« araignée »</b> (spider). Ce sont eux qui créent les « pointes » en croix qu\'on voit sur les photos d\'étoiles brillantes.</p>',
          shapes: onTube([ { t: 'group', pos: [SEC, 0, 0], shapes: [ { t: 'cyl', r: 0.1, h: 0.025, n: 24, rot: [0, 0, 45] },
            { t: 'cyl', r: 0.05, h: 0.18, n: 14, rot: [0, 0, 90], pos: [0.11, 0, 0], color: '#334155' } ] },
            { t: 'box', s: [0.015, R * 2 - 0.02, 0.012], pos: [SEC + 0.15, 0, 0], color: '#334155' },
            { t: 'box', s: [0.015, 0.012, R * 2 - 0.02], pos: [SEC + 0.15, 0, 0], color: '#334155' } ]) },
        { id: 'oculare', name: 'Oculaire', color: '#1f2937', explode: [0.2, 1.2, 0],
          info: '<p>C\'est la « loupe » où l\'on pose l\'œil. Il prend la toute petite image formée par les miroirs et l\'<b>agrandit</b>.</p>',
          more: '<p>On change d\'oculaire : un oculaire à focale courte (par ex. 6 mm) grossit davantage, un oculaire à focale longue (25 mm) montre un morceau de ciel plus grand et plus lumineux. Trop de grossissement rend l\'image sombre et tremblante.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.09, h: 0.24, n: 20, pos: [SEC, R + 0.28, 0], color: '#1f2937' },
            { t: 'cyl', r: 0.11, h: 0.08, n: 20, pos: [SEC, R + 0.43, 0], color: '#111827' },
            { t: 'cyl', r: 0.065, h: 0.02, n: 16, pos: [SEC, R + 0.475, 0], color: '#0ea5e9', decal: 1 },
            { t: 'torus', R: 0.1, r: 0.012, n: 20, m: 6, pos: [SEC, R + 0.25, 0], color: '#64748b' } ]) },
        { id: 'focheggiatore', name: 'Porte-oculaire (mise au point)', label: 'Mise au point', color: '#64748b', explode: [0.6, 0.9, -0.4],
          info: '<p>Un petit tube qui monte et descend en tournant deux <b>molettes</b> : il déplace l\'oculaire jusqu\'à ce que l\'image devienne nette, exactement comme quand tu fais la mise au point d\'une paire de jumelles.</p>',
          shapes: onTube([ { t: 'box', s: [0.32, 0.12, 0.3], pos: [SEC, R + 0.03, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.14, n: 18, pos: [SEC, R + 0.14, 0], color: '#94a3b8' },
            { t: 'group', pos: [SEC, R + 0.05, 0], anim: { type: 'swing', axis: 'z', amp: 60, rate: 0.5 }, shapes: [
              { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.22], color: '#111827' }, { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, -0.22], color: '#111827' },
              { t: 'cyl', r: 0.015, h: 0.42, n: 8, rot: [90, 0, 0], color: '#94a3b8' } ] } ]) },
        { id: 'cercatore', name: 'Chercheur', color: '#f1f5f9', explode: [0, 0.9, -0.9],
          info: '<p>Une petite lunette montée sur le tube. Elle voit un grand morceau de ciel et sert à <b>pointer</b> le télescope sur le bon objet, comme un viseur.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.07, h: 0.6, n: 20, rot: [0, 0, 90], pos: [0.85, R + 0.22, -0.2] },
            { t: 'cyl', r: 0.085, h: 0.12, n: 20, rot: [0, 0, 90], pos: [1.18, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'cyl', r: 0.04, h: 0.1, n: 14, rot: [0, 0, 90], pos: [0.52, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'box', s: [0.06, 0.16, 0.04], pos: [0.7, R + 0.1, -0.15], color: '#64748b' }, { t: 'box', s: [0.06, 0.16, 0.04], pos: [1.0, R + 0.1, -0.15], color: '#64748b' } ]) },
        { id: 'luce', name: 'Trajet de la lumière', label: 'Lumière des étoiles', color: '#fde047', chip: true,
          info: '<p>La lumière d\'une étoile entre par l\'ouverture du tube, descend jusqu\'au grand miroir, est <b>réfléchie et concentrée</b> vers le petit miroir, puis ressort sur le côté, dans l\'oculaire.</p>',
          more: '<p>Les rayons qui arrivent d\'une étoile très lointaine sont pratiquement <b>parallèles</b>. Le miroir parabolique les fait tous converger au même point : le <b>foyer</b>. Là se forme une petite image renversée.</p>',
          shapes: onTube(rayLines.concat(photons)) },
        { id: 'montatura', name: 'Monture à fourche', label: 'Monture', color: '#475569', explode: [0, -0.2, 0],
          info: '<p>Elle soutient le tube et permet de le tourner dans deux directions : <b>droite-gauche</b> (azimut) et <b>haut-bas</b> (hauteur). Il faut la bouger avec douceur : à 100 grossissements, un millimètre déplace tout !</p>',
          more: '<p>La Terre tourne, donc les étoiles « s\'échappent » du champ de vision. Beaucoup de montures ont des <b>moteurs</b> qui suivent le ciel tout seuls ; les montures « équatoriales » ont un axe parallèle à l\'axe de la Terre.</p>',
          shapes: onFork([ { t: 'cyl', r: 0.36, h: 0.14, n: 30, pos: [0, -0.62, 0], color: '#334155' },
            { t: 'box', s: [0.34, 0.12, 1.24], pos: [0, -0.5, 0] },
            { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, 0.62] }, { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, -0.62] },
            { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.68], color: '#111827' }, { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.68], color: '#111827' } ])
            .concat(onTube([ { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [0.45, 0, 0] }, { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [-0.45, 0, 0] },
              { t: 'cyl', r: 0.05, h: 1.18, n: 14, rot: [90, 0, 0], color: '#64748b' } ]),
            [ { t: 'cyl', r: 0.3, h: 0.16, n: 30, pos: [0, 1.73, 0], color: '#334155' } ]) },
        { id: 'treppiede', name: 'Trépied', color: '#94a3b8', explode: [0, -0.6, 0],
          info: '<p>Trois pieds solides : avec trois appuis, un objet <b>ne bascule jamais</b>, même sur une pelouse irrégulière. Un télescope doit rester parfaitement immobile.</p>',
          shapes: [ { t: 'cyl', r: 0.24, h: 0.2, n: 24, pos: [0, 1.56, 0], color: '#475569' } ].concat([0, 120, 240].map((a) => {
            const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180);
            return { t: 'group', shapes: [ { t: 'pipe', r: 0.045, n: 10, pts: [[0.2 * c, 1.5, 0.2 * s], [1.25 * c, 0.05, 1.25 * s]] },
              { t: 'pipe', r: 0.032, n: 10, pts: [[0.75 * c, 0.75, 0.75 * s], [1.25 * c, 0.05, 1.25 * s]], color: '#e2e8f0' },
              { t: 'sphere', r: 0.06, n: 8, pos: [1.25 * c, 0.04, 1.25 * s], color: '#1f2937' } ] };
          })) },
        { id: 'vassoio', name: 'Plateau à oculaires', label: 'Plateau', color: '#64748b', explode: [0, -0.3, 0.6],
          info: '<p>Une tablette entre les pieds qui garde le trépied rigide et porte les <b>oculaires de rechange</b>, pour changer de grossissement.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 0.05, n: 3, pos: [0, 0.78, 0], phase: 30 } ].concat([0, 120, 240].map((a) => ({ t: 'cyl', r: 0.07, h: 0.14, n: 16, pos: [0.25 * Math.cos((a + 60) * Math.PI / 180), 0.86, 0.25 * Math.sin((a + 60) * Math.PI / 180)], color: '#111827' }))) }
      ]
    },
    steps: [
      { icon: '🔭', title: 'Un entonnoir à lumière', explode: 0,
        html: '<p>Les étoiles sont très lointaines et nous envoient très peu de lumière. La pupille de notre œil ne mesure que quelques millimètres ; un télescope a un miroir grand comme une assiette : il récolte <b>des centaines de fois plus de lumière</b> et nous fait voir des choses invisibles à l\'œil nu.</p>' },
      { icon: '✨', title: 'La lumière entre dans le tube', focus: ['luce', 'tubo'], view: { rx: 0.1, ry: 0 }, zoom: 1.15,
        html: '<p>Les rayons de lumière d\'une étoile arrivent <b>parallèles</b>, entrent par l\'ouverture du tube et descendent jusqu\'au fond.</p>' },
      { icon: '🪞', title: 'Le miroir courbe concentre', focus: ['specchio-primario', 'luce', 'tubo'], view: { rx: 0.1, ry: 0.2 }, zoom: 1.2,
        html: '<p>Au fond se trouve le <b>miroir principal</b>, courbe comme l\'intérieur d\'une cuillère. Il réfléchit les rayons et les fait tous <b>converger</b> vers un point : le <b>foyer</b>.</p><p class="tip">🥄 Regarde dans une cuillère brillante : elle aussi est un miroir concave !</p>' },
      { icon: '↗️', title: 'Le petit miroir dévie la lumière', focus: ['specchio-secondario', 'luce', 'oculare'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.2,
        html: '<p>Avant que les rayons n\'arrivent au foyer, le <b>miroir secondaire</b> incliné à 45° les envoie sur le côté, hors du tube. Ce type de télescope a été inventé par <b>Isaac Newton</b> en 1668.</p>' },
      { icon: '👁️', title: 'L\'oculaire grossit', focus: ['oculare', 'focheggiatore', 'luce'], view: { rx: 0.3, ry: -0.4 }, zoom: 1.25,
        html: '<p>L\'<b>oculaire</b> est une petite loupe : il regarde l\'image au foyer et la fait paraître grande. Avec les molettes du <b>porte-oculaire</b>, on fait la mise au point jusqu\'à ce que les étoiles deviennent des points nets.</p><p class="tip">🙃 Au télescope, la Lune apparaît souvent à l\'envers : en astronomie, ça n\'a pas d\'importance !</p>' },
      { icon: '🎯', title: 'Pointer et suivre le ciel', focus: ['cercatore', 'montatura', 'treppiede', 'vassoio'], explode: 0.25,
        html: '<p>Avec le <b>chercheur</b>, on vise l\'objet, puis la <b>monture</b> permet de tourner le tube de droite à gauche et de haut en bas. Le <b>trépied</b> garde le tout immobile : même un petit tremblement ressemble à un tremblement de terre quand on grossit 100 fois.</p>' },
      { icon: '🌌', title: 'Lentilles ou miroirs ?', explode: 0,
        html: '<p>Il existe deux grandes familles : les <b>réfracteurs</b> utilisent une lentille à l\'avant (comme la lunette de <b>Galilée</b>, 1609), les <b>réflecteurs</b> un miroir au fond (comme celui-ci). Les plus grands télescopes du monde sont tous à miroir : il est plus facile de construire un énorme miroir qu\'une énorme lentille.</p>' }
    ],
    facts: [
      { icon: '🌙', title: 'Galilée et la Lune', html: 'En 1609, <b>Galilée</b> a pointé sa lunette vers le ciel et a découvert les cratères de la Lune, les phases de Vénus et quatre lunes de Jupiter.' },
      { icon: '🏔️', title: 'Au sommet des montagnes', html: 'Les grands observatoires se construisent sur des montagnes hautes et désertes, comme au Chili ou aux Canaries : là, l\'air est plus mince, sec et calme.' },
      { icon: '🛰️', title: 'Des télescopes dans l\'espace', html: 'Le télescope <b>James Webb</b> a un miroir de 6,5 mètres fait de 18 hexagones dorés et observe l\'Univers depuis l\'espace, loin de l\'air qui fait scintiller les étoiles.' },
      { icon: '⏳', title: 'Regarder dans le passé', html: 'La lumière voyage vite mais pas à l\'infini : l\'étoile que tu vois ce soir a peut-être émis cette lumière il y a <b>des siècles</b>. Un télescope est une machine à voyager dans le temps !' },
      { icon: '⚠️', title: 'Jamais le Soleil !', html: 'Ne regarde <b>jamais</b> le Soleil avec un télescope ou des jumelles sans un filtre spécial : la lumière concentrée peut abîmer l\'œil en un instant.' }
    ],
    quiz: [
      { type: 'mc', q: 'Que fait le miroir principal d\'un télescope réflecteur ?', options: ['Il colore la lumière', 'Il récolte la lumière et la concentre au foyer', 'Il produit de la lumière', 'Il bloque la lumière de la Lune'], answer: 1, explain: 'Il est concave : il réfléchit les rayons parallèles en les faisant converger au foyer.' },
      { type: 'mc', q: 'Qui a inventé le télescope à miroir ?', options: ['Galilée', 'Isaac Newton', 'Albert Einstein', 'Léonard de Vinci'], answer: 1, explain: 'Newton a construit le premier réflecteur en 1668. Galilée utilisait une lunette à lentilles.' },
      { type: 'mc', q: 'À quoi sert le chercheur ?', options: ['À faire la mise au point', 'À pointer le télescope sur le bon objet', 'À grossir davantage', 'À refroidir le miroir'], answer: 1, explain: 'C\'est une petite lunette à grand champ, utilisée comme viseur.' },
      { type: 'tf', q: 'On peut regarder le Soleil avec un télescope sans filtre, si c\'est pour peu de temps.', answer: false, explain: 'Jamais ! La lumière concentrée abîme l\'œil instantanément. Il faut des filtres solaires certifiés.' },
      { type: 'num', q: 'Un télescope a une focale de 1 200 mm et l\'oculaire de 12 mm. Quel grossissement donne-t-il ?', answer: 100, unit: '×', explain: '1 200 ÷ 12 = 100 grossissements.' },
      { type: 'mc', q: 'Pourquoi un télescope fait-il voir des étoiles invisibles à l\'œil nu ?', options: ['Parce qu\'il se rapproche des étoiles', 'Parce qu\'il récolte beaucoup plus de lumière que l\'œil', 'Parce qu\'il allume les étoiles', 'Parce qu\'il filtre les nuages'], answer: 1, explain: 'Le miroir a une surface énorme par rapport à la pupille : il récolte beaucoup plus de lumière.' }
    ]
  });
})();
