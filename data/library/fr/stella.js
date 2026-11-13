/* La stella: come funziona (fusione, equilibrio tra gravità e pressione) e come vive (ciclo di vita).
   Al centro una stella "come il Sole" vista in trasparenza; intorno, su un anello, le fasi della vita delle stelle. */
(function () {
  const D = Math.PI / 180;
  /* freccia lungo +y (base nell'origine): asta + punta */
  const arrow = (len, col, flip) => ({ t: 'group', rot: flip ? [180, 0, 0] : [0, 0, 0], pos: flip ? [0, len, 0] : [0, 0, 0], shapes: [
    { t: 'cyl', r: 0.035, h: len * 0.65, n: 10, pos: [0, len * 0.325, 0], color: col },
    { t: 'cone', r: 0.09, h: len * 0.35, n: 14, pos: [0, len * 0.82, 0], color: col } ] });
  /* frecce radiali: dirs come angoli [giro intorno a z, giro intorno a x] */
  const DIRS = [0, 45, 90, 135, 180, 225, 270, 315].map((a) => [0, a]).concat([[90, 0], [-90, 0], [90, 180], [-90, 180]]);
  const radial = (r0, len, col, inward, shift) => DIRS.map(([ax, az], i) => {
    const rz = az + (shift || 0), rx = ax;
    const dir = [-Math.sin(rz * D) * Math.cos(rx * D), Math.cos(rz * D) * Math.cos(rx * D), Math.sin(rx * D)];
    return { t: 'group', rot: [rx, 0, rz], shapes: [ { t: 'group', pos: [0, r0, 0], anim: { type: 'move', dir: [0, inward ? -1 : 1, 0], amp: 0.1, rate: 1, phase: i * 0.05 }, shapes: [ arrow(len, col, inward) ] } ], _d: dir };
  });
  /* protoni che si scontrano al centro (fusione) */
  const fusion = [];
  [[0.42, 0.1, 0.05], [-0.4, -0.12, 0.1], [0.08, 0.42, -0.1], [-0.1, -0.4, -0.08], [0.15, 0.05, 0.42], [-0.12, 0.06, -0.42]].forEach((p, i) => {
    fusion.push({ t: 'sphere', r: 0.07, n: 8, m: 10, pos: p, color: i % 2 ? '#ef4444' : '#f87171',
      anim: [ { type: 'path', pts: [p, [p[0] * 0.12, p[1] * 0.12, p[2] * 0.12]], wave: 'saw', rate: 1, phase: (i >> 1) * 0.33 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.08, rate: 1, phase: (i >> 1) * 0.33 } ] });
  });
  for (let k = 0; k < 3; k++) fusion.push({ t: 'sphere', r: 0.16, n: 10, m: 14, color: '#ffffff', anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.9, to: 1.0, ramp: 0.3, phase: k * 0.33 }, { type: 'scale', from: 0.6, to: 1.6, wave: 'window', win: [0.9, 1.0], phase: k * 0.33 } ] });
  /* fotoni che escono con un cammino a zig-zag */
  const photons = [];
  for (let i = 0; i < 9; i++) {
    const a = i * 40 * D, b = (i % 3 - 1) * 30 * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)], q = [-d[2], 0.4, d[0]];
    const pts = [0.3, 0.55, 0.8, 1.05, 1.25, 2.4].map((r, k) => [d[0] * r + q[0] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[1] * r + q[1] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[2] * r + q[2] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0)]);
    photons.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: '#fef08a', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.5, phase: i / 9 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.98, ramp: 0.05, rate: 0.5, phase: i / 9 } ] });
  }
  const at = (p, shapes) => ({ t: 'group', pos: p, shapes });
  const P = { nebulosa: [-3.3, 0.3, -1.3], proto: [-1.5, 0.2, -3.2], gigante: [1.6, 0.5, -3.3], planetaria: [3.5, 0.2, -1.0], supernova: [3.2, 0.2, 1.7], neutroni: [1.2, 0, 3.4], buco: [-1.7, 0, 3.1] };

  LIBRARY({
    lang: 'fr',
    id: 'stella',
    title: 'L\'étoile',
    intro: 'Une étoile est une gigantesque boule de gaz très chaud qui <b>brille de sa propre lumière</b>. À l\'intérieur, dans le noyau, l\'hydrogène se transforme en hélium et libère une énergie énorme. Les étoiles aussi naissent, vivent et meurent !',
    model: {
      rx: 0.55, ry: -0.35, speed: 0.35, height: 480, bg: 'space', fit: 0.98,
      parts: [
        { id: 'involucro', name: 'Étoile (comme le Soleil)', label: 'Étoile', color: '#fcd34d', alpha: 0.4, explode: [0, 0, 0],
          info: '<p>Une étoile adulte, comme notre Soleil. Elle est faite surtout d\'<b>hydrogène</b> et d\'<b>hélium</b>, si chauds qu\'ils forment un gaz spécial appelé <b>plasma</b>. À la surface, il y a environ 5 500 °C.</p>',
          more: '<p>Les étoiles ont des couleurs différentes selon leur température : les plus froides sont <b>rouges</b> (3 000 °C), celles comme le Soleil sont <b>jaunes</b>, les plus chaudes sont <b>bleues</b> (plus de 20 000 °C). La couleur nous indique la température même à des distances énormes.</p>',
          shapes: [ { t: 'sphere', r: 1.25, n: 22, m: 36 }, { t: 'sphere', r: 1.32, n: 18, m: 30, color: '#fde68a', alpha: 0.12, anim: { type: 'scale', from: 1, to: 1.04, rate: 0.7 } } ] },
        { id: 'nucleo', name: 'Noyau (la centrale)', label: 'Noyau', color: '#fff7cc', alpha: 0.55, explode: [0, 0, 0],
          info: '<p>Le centre de l\'étoile : il y fait environ <b>15 millions de degrés</b> et la pression est énorme. C\'est la « centrale électrique » de l\'étoile.</p>',
          shapes: [ { t: 'sphere', r: 0.5, n: 16, m: 24 } ] },
        { id: 'fusione', name: 'Fusion nucléaire', label: 'Fusion', color: '#ef4444', explode: [0, 0, 0],
          info: '<p>Dans le noyau, les noyaux d\'<b>hydrogène</b> filent à toute vitesse et se heurtent : ils fusionnent et deviennent de l\'<b>hélium</b>. À chaque fusion, un tout petit peu de matière se transforme en beaucoup d\'énergie : lumière et chaleur.</p>',
          more: '<p>Il faut 4 noyaux d\'hydrogène (protons) pour faire un noyau d\'hélium, qui pèse un peu moins que les 4 protons : la masse manquante devient de l\'énergie selon la formule d\'Einstein <b>E = mc²</b>. Le Soleil « brûle » ainsi 600 millions de tonnes d\'hydrogène par seconde.</p>',
          shapes: fusion },
        { id: 'luce', name: 'Lumière qui sort', label: 'Lumière', color: '#fef08a', explode: [0, 0, 0], chip: true,
          info: '<p>L\'énergie produite dans le noyau voyage vers l\'extérieur, en rebondissant entre les particules, et sort enfin de la surface sous forme de <b>lumière</b> et de chaleur.</p>',
          more: '<p>Dans le Soleil, un « paquet » de lumière (photon) met parfois <b>100 000 ans</b> pour sortir du noyau, car il est absorbé et réémis des milliards de fois. Ensuite, de la surface à la Terre, il ne met que 8 minutes !</p>',
          shapes: photons },
        { id: 'gravita', name: 'Gravité (pousse vers l\'intérieur)', label: 'Gravité', color: '#60a5fa', explode: [0, 0, 0],
          info: '<p>Toute la matière de l\'étoile s\'attire vers le centre à cause de la <b>gravité</b> : si elle était seule, l\'étoile s\'écraserait sur elle-même.</p>',
          shapes: radial(1.45, 0.55, '#60a5fa', true, 22.5).map((g) => (delete g._d, g)) },
        { id: 'pressione', name: 'Pression (pousse vers l\'extérieur)', label: 'Pression', color: '#fb923c', explode: [0, 0, 0],
          info: '<p>La chaleur du noyau fait pousser le gaz <b>vers l\'extérieur</b>, comme l\'air chaud qui gonfle un ballon. La gravité et la pression s\'équilibrent : l\'étoile reste en <b>équilibre</b> pendant des milliards d\'années.</p>',
          shapes: radial(0.62, 0.5, '#fb923c', false, 0).map((g) => (delete g._d, g)) },
        { id: 'percorso', name: 'Cycle de vie', label: 'Cycle de vie', color: '#c4b5fd', explode: [0, 0, 0], noLabel: true,
          info: '<p>Les étoiles changent au cours de leur vie : elles naissent dans un nuage, brillent longtemps et finissent par se transformer. La <b>façon</b> dont elles finissent dépend de <b>leur taille</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], color: '#c4b5fd', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.gigante, [3.1, 0.4, 0.2], P.supernova, P.neutroni], color: '#fca5a5', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.supernova, [0.9, 0.1, 2.9], P.buco], color: '#fca5a5', alpha: 0.5 } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.06, n: 6, m: 8, pos: P.nebulosa, color: '#ede9fe',
              anim: { type: 'path', pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], wave: 'saw', rate: 0.12, phase: k / 6 } }))) },
        { id: 'nebulosa', name: 'Nébuleuse (là où naissent les étoiles)', label: 'Nébuleuse', color: '#c084fc', alpha: 0.32, explode: [-0.6, 0.3, -0.3],
          info: '<p>Les étoiles naissent dans d\'énormes <b>nuages de gaz et de poussière</b>, les nébuleuses. Là où le nuage est plus dense, la gravité le fait s\'agglomérer en boules de plus en plus denses.</p>',
          shapes: [ at(P.nebulosa, [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.15 }, shapes: [
            { t: 'sphere', r: 0.75, n: 12, m: 18, scale: [1.3, 0.8, 1] }, { t: 'sphere', r: 0.55, n: 12, m: 18, pos: [0.6, 0.25, 0.3], color: '#f472b6' },
            { t: 'sphere', r: 0.5, n: 12, m: 18, pos: [-0.55, -0.15, -0.3], color: '#818cf8' }, { t: 'sphere', r: 0.4, n: 10, m: 16, pos: [0.1, 0.45, -0.4], color: '#e879f9' },
            { t: 'sphere', r: 0.07, n: 6, pos: [0.2, 0, 0.2], color: '#ffffff', alpha: 1 }, { t: 'sphere', r: 0.05, n: 6, pos: [-0.4, 0.2, 0.1], color: '#ffffff', alpha: 1 } ] } ]) ] },
        { id: 'protostella', name: 'Protoétoile', color: '#fb923c', explode: [-0.3, 0.3, -0.6],
          info: '<p>Une boule de gaz qui s\'écrase et se réchauffe. Autour tourne un <b>disque</b> de matière (où les planètes peuvent naître !) et deux jets de gaz sortent des pôles.</p>',
          more: '<p>Quand le centre atteint environ 10 millions de degrés, la fusion de l\'hydrogène s\'allume : la protoétoile devient une vraie étoile. Cela prend quelques millions d\'années.</p>',
          shapes: [ at(P.proto, [ { t: 'sphere', r: 0.3, n: 12, m: 18 },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.6 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 30, m: 8, scale: [1, 0.25, 1], color: '#fdba74', alpha: 0.45 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.75, 0, 0], color: '#a16207' } ] },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, 0.6, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, -0.6, 0], rot: [180, 0, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ]) ] },
        { id: 'gigante-rossa', name: 'Géante rouge', label: 'Géante rouge', color: '#dc2626', alpha: 0.8, explode: [0.3, 0.4, -0.6],
          info: '<p>Quand l\'hydrogène du noyau est épuisé, l\'étoile <b>gonfle</b> énormément et sa surface refroidit : elle devient une géante rouge. Dans 5 milliards d\'années, cela arrivera aussi au Soleil.</p>',
          more: '<p>Le Soleil deviendra si grand qu\'il avalera Mercure et Vénus. Les étoiles bien plus grandes que le Soleil deviennent des <b>supergéantes</b> rouges, comme Bételgeuse dans la constellation d\'Orion.</p>',
          shapes: [ at(P.gigante, [ { t: 'sphere', r: 0.95, n: 18, m: 28, anim: { type: 'scale', from: 0.94, to: 1.05, rate: 0.5 } }, { t: 'sphere', r: 1.05, n: 14, m: 22, color: '#f87171', alpha: 0.15 } ]) ] },
        { id: 'nana-bianca', name: 'Nébuleuse planétaire et naine blanche', label: 'Naine blanche', color: '#e0f2fe', explode: [0.6, 0.3, -0.2],
          info: '<p>Les étoiles comme le Soleil finissent par souffler leurs couches externes dans un magnifique anneau de gaz (<b>nébuleuse planétaire</b>). Au centre reste le noyau : une <b>naine blanche</b>, petite comme la Terre mais très chaude.</p>',
          more: '<p>Une cuillère à café de naine blanche pèserait <b>plusieurs tonnes</b> ! Sans fusion, elle refroidit lentement pendant des milliards d\'années.</p>',
          shapes: [ at(P.planetaria, [ { t: 'sphere', r: 0.12, n: 10, m: 14, color: '#ffffff' },
            { t: 'group', rot: [70, 0, 20], shapes: [ { t: 'torus', R: 0.6, r: 0.2, n: 32, m: 10, color: '#22d3ee', alpha: 0.45, anim: { type: 'scale', from: 0.9, to: 1.1, rate: 0.4 } }, { t: 'torus', R: 0.6, r: 0.08, n: 32, m: 8, color: '#f472b6', alpha: 0.5 } ] } ]) ] },
        { id: 'supernova', name: 'Supernova', color: '#fde047', explode: [0.6, 0.3, 0.4],
          info: '<p>Les étoiles <b>très grandes</b> (au moins 8 fois le Soleil) finissent par une explosion gigantesque : une supernova. Pendant quelques semaines, elle brille plus que des milliards d\'étoiles réunies !</p>',
          more: '<p>Dans les supernovæ se forment de nombreux éléments lourds, comme l\'<b>or</b>, qui sont dispersés dans l\'espace. Le fer de ton sang et le calcium de tes os ont été fabriqués dans d\'anciennes étoiles : nous sommes faits de <b>poussière d\'étoiles</b> !</p>',
          shapes: [ at(P.supernova, [ { t: 'sphere', r: 0.18, n: 10, m: 14, color: '#ffffff' },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fb923c', alpha: 0.5, anim: [ { type: 'scale', from: 0.3, to: 1.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 } ] },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fde047', alpha: 0.6, anim: [ { type: 'scale', from: 0.2, to: 1.1, wave: 'saw', rate: 0.6, phase: 0.5 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: 0.5 } ] } ]) ] },
        { id: 'stella-neutroni', name: 'Étoile à neutrons (pulsar)', label: 'Pulsar', color: '#a5f3fc', explode: [0.3, 0.3, 0.6],
          info: '<p>Après la supernova, il peut rester une <b>étoile à neutrons</b> : large de seulement 20 km, comme une ville, mais plus lourde que le Soleil. Certaines tournent à toute vitesse et lancent deux faisceaux de lumière, comme un phare : ce sont les <b>pulsars</b>.</p>',
          shapes: [ at(P.neutroni, [ { t: 'group', rot: [0, 0, 25], shapes: [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [
            { t: 'sphere', r: 0.16, n: 10, m: 14, color: '#e0f2fe' },
            { t: 'group', rot: [0, 0, 20], shapes: [ { t: 'cone', r: 0.16, h: 1.0, n: 14, rot: [180, 0, 0], pos: [0, 0.6, 0], color: '#67e8f9', alpha: 0.4 }, { t: 'cone', r: 0.16, h: 1.0, n: 14, pos: [0, -0.6, 0], color: '#67e8f9', alpha: 0.4 } ] } ] },
            { t: 'torus', R: 0.35, r: 0.012, n: 24, m: 4, color: '#a5f3fc', alpha: 0.5 } ] } ]) ] },
        { id: 'buco-nero', name: 'Trou noir', label: 'Trou noir', color: '#020617', explode: [-0.3, 0.3, 0.6],
          info: '<p>Si l\'étoile était <b>gigantesque</b>, son noyau s\'écrase sans s\'arrêter et devient un trou noir : la gravité est si forte que <b>même la lumière</b> ne peut pas s\'échapper.</p>',
          more: '<p>Le trou noir lui-même est invisible, mais le gaz qui tourne autour, avant de tomber dedans, chauffe et brille : c\'est le <b>disque d\'accrétion</b>. En 2019, la première « photo » d\'un trou noir a été prise.</p>',
          shapes: [ at(P.buco, [ { t: 'sphere', r: 0.32, n: 14, m: 20 },
            { t: 'group', rot: [12, 0, 0], anim: { type: 'spin', axis: 'y', rate: 0.8 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 36, m: 8, scale: [1, 0.18, 1], color: '#f97316', alpha: 0.85 },
              { t: 'torus', R: 0.5, r: 0.08, n: 36, m: 6, scale: [1, 0.3, 1], color: '#fde68a', alpha: 0.9 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.9, 0, 0], color: '#fed7aa' } ] },
            { t: 'torus', R: 0.38, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], color: '#fbbf24', alpha: 0.8 } ]) ] }
      ]
    },
    steps: [
      { icon: '⭐', title: 'Qu\'est-ce qu\'une étoile', focus: ['involucro', 'nucleo', 'luce', 'fusione'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.7,
        html: '<p>Une étoile est une énorme boule de <b>gaz très chaud</b> qui produit toute seule de la lumière et de la chaleur. Le Soleil est une étoile : les autres nous semblent des points seulement parce qu\'elles sont <b>très très loin</b>.</p><p class="tip">🌟 Les planètes, elles, ne brillent pas de leur propre lumière : elles reflètent la lumière du Soleil, comme la Lune.</p>' },
      { icon: '⚛️', title: 'La fusion dans le noyau', focus: ['nucleo', 'fusione'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.4,
        html: '<p>Dans le noyau, il fait des millions de degrés. Les noyaux d\'<b>hydrogène</b> se heurtent si fort qu\'ils <b>fusionnent</b> et deviennent de l\'<b>hélium</b> : à chaque fois, un éclair d\'énergie est libéré.</p><p class="tip">💡 C\'est la même énergie que celle des « bombes à hydrogène », mais dans l\'étoile elle est contrôlée par sa propre gravité.</p>' },
      { icon: '⚖️', title: 'Un équilibre parfait', focus: ['gravita', 'pressione', 'involucro'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.7,
        html: '<p>La <b>gravité</b> (flèches bleues) voudrait écraser l\'étoile ; la <b>pression</b> du gaz chaud (flèches orange) pousse vers l\'extérieur. Tant qu\'il y a de la fusion, les deux forces s\'équilibrent et l\'étoile reste stable pendant des <b>milliards d\'années</b>.</p>' },
      { icon: '☀️', title: 'Le long voyage de la lumière', focus: ['luce', 'involucro', 'nucleo'], view: { rx: 0.3, ry: -0.6 }, zoom: 1.7,
        html: '<p>L\'énergie produite au centre sort tout doucement, en rebondissant en zigzag, et quitte enfin la surface sous forme de <b>lumière</b>. Elle voyage dans l\'espace à 300 000 km par seconde.</p>' },
      { icon: '☁️', title: 'Naissance : nébuleuses et protoétoiles', focus: ['nebulosa', 'protostella', 'percorso'], view: { rx: 0.6, ry: -0.6 },
        html: '<p>Les étoiles naissent dans des <b>nébuleuses</b>, des nuages de gaz et de poussière. La gravité rassemble le gaz en une boule de plus en plus chaude : une <b>protoétoile</b>, entourée d\'un disque d\'où peuvent naître des <b>planètes</b>.</p>' },
      { icon: '🔴', title: 'Vieillesse : la géante rouge', focus: ['gigante-rossa', 'nana-bianca', 'percorso'], view: { rx: 0.6, ry: 0.1 },
        html: '<p>Quand l\'hydrogène est épuisé, l\'étoile gonfle et devient une <b>géante rouge</b>. Les étoiles comme le Soleil perdent ensuite leurs couches externes (une <b>nébuleuse planétaire</b>) et il reste une petite <b>naine blanche</b>.</p>' },
      { icon: '💥', title: 'Les étoiles géantes explosent', focus: ['supernova', 'stella-neutroni', 'buco-nero', 'percorso'], view: { rx: 0.6, ry: 2.8 },
        html: '<p>Les étoiles bien plus grandes que le Soleil finissent par une explosion : une <b>supernova</b>. Il reste une <b>étoile à neutrons</b> minuscule et très lourde, ou bien un <b>trou noir</b>.</p><p class="tip">✨ Les atomes de ton corps ont été créés dans d\'anciennes étoiles : tu es fait de poussière d\'étoiles !</p>' }
    ],
    facts: [
      { icon: '🔢', title: 'Plus d\'étoiles que de grains de sable', html: 'Dans l\'Univers, il y a plus d\'étoiles que de grains de sable sur toutes les plages de la Terre. Rien que notre galaxie, la Voie lactée, en compte <b>des centaines de milliards</b>.' },
      { icon: '🚀', title: 'L\'étoile la plus proche', html: 'Après le Soleil, l\'étoile la plus proche est <b>Proxima du Centaure</b> : sa lumière met plus de 4 ans pour arriver jusqu\'à nous.' },
      { icon: '🎨', title: 'Des étoiles colorées', html: 'Regarde Orion en hiver : <b>Bételgeuse</b> est rouge (plus froide), <b>Rigel</b> est bleue (très chaude).' },
      { icon: '✨', title: 'Pourquoi scintillent-elles ?', html: 'Les étoiles scintillent parce que leur lumière traverse l\'air en mouvement de notre atmosphère. Dans l\'espace, elles ne scintillent pas.' },
      { icon: '⏳', title: 'Des vies très longues', html: 'Le Soleil vivra environ <b>10 milliards d\'années</b> (il en a déjà 4,6). Les étoiles les plus grandes consomment leur carburant vite et ne vivent « que » quelques millions d\'années.' }
    ],
    quiz: [
      { type: 'mc', q: 'Que se passe-t-il dans le noyau d\'une étoile ?', options: ['L\'eau bout', 'L\'hydrogène fusionne et devient de l\'hélium', 'Le bois brûle', 'Le fer fond'], answer: 1, explain: 'C\'est la fusion nucléaire : hydrogène → hélium, avec libération de beaucoup d\'énergie.' },
      { type: 'mc', q: 'Quelles deux forces s\'équilibrent dans une étoile ?', options: ['Le vent et la pluie', 'La gravité et la pression du gaz chaud', 'Le magnétisme et l\'électricité', 'Le frottement et la poussée'], answer: 1, explain: 'La gravité pousse vers l\'intérieur, la pression du gaz chaud vers l\'extérieur.' },
      { type: 'tf', q: 'Le Soleil est une étoile.', answer: true, explain: 'C\'est une étoile de taille moyenne : il nous semble différent seulement parce qu\'il est tout près.' },
      { type: 'mc', q: 'Où naissent les étoiles ?', options: ['Dans les trous noirs', 'Dans les nébuleuses de gaz et de poussière', 'Sur les planètes', 'Dans les comètes'], answer: 1, explain: 'La gravité fait s\'agglomérer le gaz des nébuleuses jusqu\'à ce que la fusion s\'allume.' },
      { type: 'order', q: 'Remets dans l\'ordre la vie d\'une étoile comme le Soleil', items: ['Nébuleuse', 'Protoétoile', 'Étoile adulte', 'Géante rouge', 'Naine blanche'], explain: 'Nuage → boule qui se réchauffe → étoile stable → elle gonfle → il reste le noyau chaud.' },
      { type: 'mc', q: 'Comment finissent les étoiles bien plus grandes que le Soleil ?', options: ['Elles s\'éteignent tout doucement', 'Par une explosion de supernova', 'Elles deviennent des planètes', 'Elles deviennent des comètes'], answer: 1, explain: 'Elles explosent en supernovæ et laissent une étoile à neutrons ou un trou noir.' }
    ]
  });
})();
