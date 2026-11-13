/* Il Sole, "tagliato a metà come un'arancia": la metà posteriore mostra gli strati sulla faccia del taglio (piano z = 0, rivolto verso +z);
   la metà anteriore (fotosfera) si sposta con il cursore Esplodi. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const backHemi = (r, color, dz, alpha) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [-90, 0, 0], pos: [0, 0, dz], color, alpha });
  /* punto sulla superficie: ax = inclinazione dall'alto verso +z, ay = giro intorno a y */
  const onSurf = (ax, ay, shapes) => ({ t: 'group', rot: [0, ay, 0], shapes: [ { t: 'group', rot: [ax, 0, 0], shapes: [ { t: 'group', pos: [0, R, 0], shapes } ] } ] });
  /* celle convettive sulla faccia del taglio */
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * 360 * D, c = [1.7 * Math.cos(a), 1.7 * Math.sin(a)], rr = 0.2;
    const dir = i % 2 ? 1 : -1;
    const loop = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.07]; });
    cells.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.05], color: '#9a3412' });
    for (let k = 0; k < 2; k++) cells.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: loop[0], color: '#fef3c7',
      anim: [ { type: 'path', pts: loop, wave: 'saw', rate: 0.6, phase: k / 2 }, { type: 'blink', color: '#c2410c', amount: 0.9, rate: 0.6, phase: k / 2 } ] });
  }
  /* fotoni che rimbalzano nella zona radiativa */
  const photons = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * 360 * D + 0.3, u = [Math.cos(a), Math.sin(a)], v = [-u[1], u[0]];
    const pts = [0.5, 0.65, 0.8, 0.95, 1.1, 1.25, 1.42].map((r, k) => [u[0] * r + v[0] * (k % 2 ? 0.09 : -0.09), u[1] * r + v[1] * (k % 2 ? 0.09 : -0.09), 0.07]);
    photons.push({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: pts[0], color: '#ffffff', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.35, phase: i / 8 }, { type: 'blink', fade: true, wave: 'window', from: 0.03, to: 0.97, ramp: 0.06, rate: 0.35, phase: i / 8 } ] });
  }
  const flashes = [[0.15, 0.2], [-0.25, 0.05], [0.05, -0.28], [0.3, -0.1], [-0.12, 0.3]].map((p, i) => ({ t: 'sphere', r: 0.09, n: 8, m: 10, pos: [p[0], p[1], 0.09], color: '#ffffff',
    anim: { type: 'blink', fade: true, wave: 'window', from: 0, to: 0.15, ramp: 0.4, rate: 1.3, phase: i * 0.21 } }));
  const wind = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 137.5 * D, b = ((i * 53) % 140 - 70) * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)];
    wind.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], color: '#fde68a',
      anim: [ { type: 'path', pts: [[d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], [d[0] * 4.6, d[1] * 4.6, d[2] * 4.6]], wave: 'saw', rate: 0.4, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: i / 14 } ] });
  }
  /* granuli della fotosfera, sparsi a caso (generatore pseudo-casuale fisso) */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const GRAN = Array.from({ length: 46 }, () => [12 + rnd() * 160, -85 + rnd() * 170, 0.05 + rnd() * 0.07, rnd() < 0.5 ? '#f9c74f' : '#f6a821']);
  const prom = (ax, ay, s, ph) => onSurf(ax, ay, [ { t: 'group', anim: [ { type: 'scale', from: 0.85, to: 1.15, rate: 0.5, phase: ph }, { type: 'blink', color: '#fde047', amount: 0.5, rate: 0.5, phase: ph } ], shapes: [
    { t: 'torus', R: 0.32 * s, r: 0.08 * s, n: 22, m: 10, arc: 180, rot: [-90, 0, 0], color: '#f97316' },
    { t: 'torus', R: 0.32 * s, r: 0.035 * s, n: 22, m: 6, arc: 180, rot: [-90, 0, 0], pos: [0, 0.05 * s, 0], color: '#fde047' } ] } ]);

  LIBRARY({
    lang: 'fr',
    id: 'sole',
    title: 'Le Soleil',
    intro: 'Le Soleil est l\'<b>étoile</b> la plus proche de nous : une boule de gaz très chaud 109 fois plus large que la Terre. Il nous donne lumière et chaleur et fait vivre plantes, animaux et humains. Ouvrons-le comme une orange et regardons à l\'intérieur !',
    model: {
      rx: 0.3, ry: -0.4, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'fotosfera', name: 'Photosphère (la surface)', label: 'Photosphère', color: '#fbbf24', explode: [4.6, 0.3, -2.6],
          info: '<p>C\'est la « surface » lumineuse du Soleil, celle que nous voyons (jamais à l\'œil nu !). Elle n\'est pas solide : c\'est du gaz à environ <b>5500 °C</b>, tout en grains qui bouillonnent.</p>',
          more: '<p>Les « grains » (granules) sont le sommet d\'énormes bulles de gaz chaud, larges comme l\'Italie, qui montent de l\'intérieur, se refroidissent et redescendent en quelques minutes.</p>',
          shapes: [ { t: 'sphere', r: R, n: 20, m: 40, hemi: true, rot: [90, 0, 0] } ]
            .concat(GRAN.map(([ax, ay, r, c]) => onSurf(ax, ay, [ { t: 'sphere', r, n: 6, m: 10, scale: [1, 0.1, 1], color: c, decal: 1 } ]))) },
        { id: 'macchie', name: 'Taches solaires', color: '#451a03', explode: [4.6, 0.3, -2.6],
          info: '<p>Des zones plus « froides » (façon de parler : 3500 °C !) et donc plus sombres. Une tache peut être plus grande que la Terre.</p>',
          more: '<p>Les taches naissent là où le <b>champ magnétique</b> du Soleil est très fort et freine le gaz chaud qui monte. Leur nombre augmente et diminue selon un cycle d\'environ <b>11 ans</b>.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.22, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.12, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(68, 8, [ { t: 'sphere', r: 0.15, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(110, 30, [ { t: 'sphere', r: 0.18, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.1, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]) ] },
        { id: 'zona-convettiva', name: 'Zone convective', label: 'Zone convective', color: '#f97316', explode: [0, 0, 0],
          info: '<p>La couche extérieure de l\'intérieur du Soleil. Ici le gaz chaud <b>monte</b>, se refroidit en surface et <b>redescend</b>, comme l\'eau dans une casserole qui bout.</p>',
          shapes: [ backHemi(R, '#fbbf24', 0), { t: 'cyl', r: R - 0.03, h: 0.01, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.007], color: '#f97316' }, { t: 'tube', r: R + 0.005, ri: R - 0.05, h: 0.03, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#fde047' } ] },
        { id: 'celle', name: 'Courants de convection', label: 'Courants de convection', color: '#fef3c7', explode: [0, 0, 0.05], chip: true, noLabel: true,
          info: '<p>Les bulles de gaz font un tour continu : elles montent chaudes (claires), cèdent leur chaleur en surface et redescendent plus froides (sombres). Ainsi la chaleur arrive à l\'extérieur.</p>',
          shapes: cells },
        { id: 'zona-radiativa', name: 'Zone radiative', label: 'Zone radiative', color: '#fcd34d', explode: [0, 0, 0.05],
          info: '<p>Ici le gaz est si dense qu\'il ne bouge pas : l\'énergie voyage sous forme de <b>lumière</b> qui rebondit d\'une particule à l\'autre, en zigzag.</p>',
          more: '<p>Un photon peut mettre de <b>dizaines de milliers à des centaines de milliers d\'années</b> pour traverser cette zone. La lumière qui te réchauffe aujourd\'hui est née dans le noyau quand il y avait des mammouths sur Terre !</p>',
          shapes: [ backHemi(1.45, '#fcd34d', 0.02) ] },
        { id: 'fotoni', name: 'Lumière qui rebondit (photons)', label: 'Photons', color: '#ffffff', explode: [0, 0, 0.1], chip: true, noLabel: true,
          info: '<p>De petits « paquets » de lumière, les <b>photons</b>, partent du noyau et sont absorbés et relancés des milliards de fois avant de sortir.</p>',
          shapes: photons },
        { id: 'nucleo', name: 'Noyau', color: '#fffbeb', explode: [0, 0, 0.1],
          info: '<p>Le centre du Soleil, à environ <b>15 millions de degrés</b>. Ici l\'hydrogène se transforme en hélium par <b>fusion nucléaire</b> : chaque éclair, c\'est de l\'énergie qui naît.</p>',
          more: '<p>Chaque seconde, le Soleil transforme environ 600 millions de tonnes d\'hydrogène en hélium et « perd » 4 millions de tonnes de masse, qui deviennent de l\'énergie (E = mc²). Il a du carburant pour encore <b>5 milliards d\'années</b>.</p>',
          shapes: [ backHemi(0.55, '#fffbeb', 0.04) ].concat(flashes) },
        { id: 'protuberanze', name: 'Protubérances', color: '#f97316', explode: [0, 0.4, 0],
          info: '<p>D\'énormes arcs de gaz incandescent qui s\'élèvent de la surface, en suivant les lignes du <b>champ magnétique</b>. Dans un arc, il y aurait de la place pour des dizaines de Terres !</p>',
          shapes: [ prom(0, 0, 1.1, 0), prom(-35, 90, 0.8, 0.3), prom(30, -90, 0.9, 0.6), prom(-60, 20, 0.7, 0.45) ] },
        { id: 'brillamento', name: 'Éruption (flare)', label: 'Éruption', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>Une explosion soudaine à la surface, près des taches : en quelques minutes, elle libère autant d\'énergie que des millions de volcans.</p>',
          more: '<p>Les éruptions et les grandes « bulles » de gaz expulsées (CME) peuvent perturber les satellites, le GPS et les réseaux électriques sur Terre, et allumer de magnifiques aurores.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.2, n: 14, m: 20, color: '#fef9c3', alpha: 0.9, anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.1, to: 0.3, ramp: 0.3 }, { type: 'scale', from: 0.4, to: 1.4, wave: 'window', win: [0.1, 0.3] } ] } ]) ] },
        { id: 'corona', name: 'Couronne', color: '#fde68a', alpha: 0.12, explode: [0, 0, 0],
          info: '<p>Une atmosphère très fine qui entoure le Soleil et qui est plus chaude que la surface : plus de <b>1 million de degrés</b>. On ne la voit à l\'œil nu que pendant les <b>éclipses totales</b>.</p>',
          more: '<p>Pourquoi la couronne est-elle si chaude ? C\'est encore l\'un des grands mystères de la physique solaire. La sonde <b>Parker Solar Probe</b> l\'a traversée pour l\'étudier.</p>',
          shapes: [ { t: 'sphere', r: 2.45, n: 18, m: 30, anim: { type: 'scale', from: 1, to: 1.05, rate: 0.4 } }, { t: 'sphere', r: 2.9, n: 18, m: 30, alpha: 0.06, anim: { type: 'scale', from: 1.04, to: 0.98, rate: 0.4 } } ] },
        { id: 'vento-solare', name: 'Vent solaire', label: 'Vent solaire', color: '#fde68a', explode: [0, 0, 0],
          info: '<p>Du Soleil part en continu un « vent » de particules très rapides (400 km par seconde !). Le champ magnétique de la Terre nous sert de bouclier.</p>',
          more: '<p>Quand les particules du vent solaire entrent dans l\'atmosphère près des pôles, elles font briller l\'air en vert et en violet : ce sont les <b>aurores polaires</b>.</p>',
          shapes: wind },
        { id: 'terra', name: 'La Terre (à l\'échelle)', label: 'Terre (à l\'échelle)', color: '#3b82f6', pos: [3.3, 1.5, 0.4], explode: [0.5, 0.3, 0],
          info: '<p>Ce petit point, c\'est la <b>Terre</b>, dessinée à la même échelle que le Soleil. Dans le Soleil, il y aurait de la place pour plus d\'<b>un million</b> de Terres !</p>',
          more: '<p>La distance, en revanche, n\'est pas à l\'échelle : la Terre est à environ <b>150 millions de km</b> du Soleil. À cette échelle, elle serait à plus de 200 mètres de l\'écran !</p>',
          shapes: [ { t: 'sphere', r: 0.04, n: 8, m: 12 }, { t: 'torus', R: 0.12, r: 0.008, n: 20, m: 4, rot: [90, 0, 0], color: '#93c5fd', alpha: 0.7 } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'Notre étoile', explode: 0,
        html: '<p>Le Soleil est une <b>étoile</b> comme celles que tu vois la nuit, mais beaucoup plus proche : il est à 150 millions de km et sa lumière met environ <b>8 minutes</b> à nous arriver.</p><p class="tip">⚠️ Ne regarde jamais le Soleil directement, même avec des lunettes de soleil : ça abîme les yeux.</p>' },
      { icon: '🍊', title: 'Ouvrons-le comme une orange', explode: 1, focus: ['zona-convettiva', 'zona-radiativa', 'nucleo', 'fotosfera'],
        html: '<p>Le Soleil est fait de <b>couches</b>, comme un oignon : au centre le <b>noyau</b>, puis la <b>zone radiative</b>, la <b>zone convective</b> et enfin la surface lumineuse, la <b>photosphère</b>.</p><p>C\'est entièrement du gaz, rien de solide : surtout de l\'<b>hydrogène</b> (3/4) et de l\'<b>hélium</b>.</p>' },
      { icon: '⚛️', title: 'Dans le noyau naît l\'énergie', explode: 1, focus: ['nucleo'], zoom: 2.2, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Dans le noyau, il fait <b>15 millions de degrés</b>. L\'hydrogène fusionne et devient de l\'hélium : c\'est la <b>fusion nucléaire</b>. Chaque éclair libère de l\'énergie qui deviendra lumière et chaleur.</p>' },
      { icon: '🔦', title: 'La lumière rebondit pendant des milliers d\'années', explode: 1, focus: ['zona-radiativa', 'fotoni', 'nucleo'], zoom: 1.5, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Dans la <b>zone radiative</b>, l\'énergie voyage sous forme de lumière, mais le gaz est si dense que les photons rebondissent en zigzag : pour sortir, ils mettent des <b>milliers d\'années</b>.</p>' },
      { icon: '♨️', title: 'Le Soleil bouillonne', explode: 1, focus: ['zona-convettiva', 'celle'], zoom: 1.3, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Dans la <b>zone convective</b>, le gaz se déplace en grands tours : il monte chaud, se refroidit en surface et redescend, comme l\'eau qui bout dans une casserole. Ces courants s\'appellent des <b>mouvements de convection</b>.</p>' },
      { icon: '🌑', title: 'Taches, arcs et explosions', explode: 0, focus: ['fotosfera', 'macchie', 'protuberanze', 'brillamento', 'celle', 'fotoni'],
        html: '<p>À la surface apparaissent des <b>taches</b> sombres (zones plus froides), d\'énormes arcs de gaz appelés <b>protubérances</b> et des éclairs soudains, les <b>éruptions</b>. Tout cela est causé par le <b>magnétisme</b> du Soleil.</p>' },
      { icon: '🌬️', title: 'Couronne et vent solaire', explode: 0, focus: ['corona', 'vento-solare', 'terra', 'fotosfera', 'celle', 'fotoni'], view: { rx: 0.25, ry: -0.7 },
        html: '<p>Autour du Soleil, il y a la <b>couronne</b>, très chaude mais très fine. De là part le <b>vent solaire</b>, un flux de particules qui arrive jusqu\'à la Terre et allume les <b>aurores polaires</b>.</p><p class="tip">🌍 Regarde le petit point bleu : c\'est la Terre à la même échelle que le Soleil !</p>' }
    ],
    facts: [
      { icon: '⚖️', title: 'Le géant du Système solaire', html: 'Le Soleil contient <b>99,8 %</b> de toute la masse du Système solaire. Toutes les planètes ensemble, ce ne sont que « des miettes ».' },
      { icon: '🕗', title: 'Une lumière d\'il y a 8 minutes', html: 'Quand tu regardes la lumière du Soleil, tu vois le Soleil tel qu\'il était il y a <b>8 minutes et 20 secondes</b> : c\'est le temps que met la lumière pour arriver.' },
      { icon: '🌗', title: 'Les éclipses', html: 'Pendant une éclipse totale, la Lune cache exactement le Soleil : le Soleil est 400 fois plus grand que la Lune, mais aussi 400 fois plus loin !' },
      { icon: '🌱', title: 'Le moteur de la vie', html: 'Les plantes utilisent la lumière du Soleil pour fabriquer leur nourriture (photosynthèse). Même la nourriture que tu manges, au fond, c\'est de l\'énergie du Soleil.' },
      { icon: '🔄', title: 'Lui aussi, il tourne', html: 'Le Soleil tourne sur lui-même, mais pas tout d\'un bloc : à l\'équateur, il fait un tour en environ <b>25 jours</b>, près des pôles en plus de 30.' }
    ],
    quiz: [
      { type: 'mc', q: 'Qu\'est-ce que le Soleil ?', options: ['Une planète', 'Une étoile', 'Une comète', 'Un satellite'], answer: 1, explain: 'Le Soleil est une étoile : il produit lumière et chaleur grâce à la fusion nucléaire.' },
      { type: 'mc', q: 'Dans quelle partie du Soleil a lieu la fusion nucléaire ?', options: ['Dans la couronne', 'Dans la photosphère', 'Dans le noyau', 'Dans les taches'], answer: 2, explain: 'C\'est seulement dans le noyau que la température et la pression sont assez élevées.' },
      { type: 'num', q: 'Combien de minutes (environ) la lumière du Soleil met-elle pour arriver sur la Terre ?', answer: 8, tol: 1, unit: 'min', explain: 'Environ 8 minutes et 20 secondes.' },
      { type: 'tf', q: 'Les taches solaires sont des zones plus chaudes que le reste de la surface.', answer: false, explain: 'Elles sont plus froides (environ 3500 °C contre 5500 °C), c\'est pour cela qu\'elles paraissent sombres.' },
      { type: 'order', q: 'Remets dans l\'ordre les couches du Soleil, du centre vers l\'extérieur', items: ['Noyau', 'Zone radiative', 'Zone convective', 'Photosphère', 'Couronne'], explain: 'Du noyau, où naît l\'énergie, jusqu\'à la couronne, l\'atmosphère extérieure.' },
      { type: 'mc', q: 'Qu\'est-ce qui provoque les aurores polaires sur la Terre ?', options: ['La Lune', 'Le vent solaire', 'Les volcans', 'Les nuages'], answer: 1, explain: 'Les particules du vent solaire font briller l\'air près des pôles.' }
    ]
  });
})();
