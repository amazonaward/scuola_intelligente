/* La bicicletta, vista di lato: avanti = +x, alto = +y, il lato della catena (destro) guarda verso +z.
   Rapporto: corona r = 0.2, pignone r = 0.1 → la ruota fa 2 giri per ogni giro di pedali. */
(function () {
  const TAU = Math.PI * 2, R = 0.68;
  const RA = [-1.02, R], FA = [1.02, R], BB = [-0.12, 0.55];
  const RR = 0.2, RC = 0.1, ZC = 0.17, GEAR = RR / RC;
  const PED = { type: 'spin', axis: 'z', dir: -1 };
  const WHEEL = { type: 'spin', axis: 'z', dir: -1, rate: GEAR };
  /* ruota dentata (piano XY) */
  const gear = (r, teeth, h) => { const p = []; for (let i = 0; i < teeth * 2; i++) { const a = (i / (teeth * 2)) * TAU, rr = i % 2 ? r - h : r; p.push([rr * Math.cos(a), rr * Math.sin(a)]); } return p; };
  const spokes = (z0) => Array.from({ length: 18 }, (_, k) => { const a = (k / 18) * TAU, side = k % 2 ? 1 : -1, b = a + side * 0.25;
    return { t: 'pipe', r: 0.006, n: 3, pts: [[0.04 * Math.cos(b), 0.04 * Math.sin(b), side * 0.05 + z0], [0.6 * Math.cos(a), 0.6 * Math.sin(a), 0]], color: '#cbd5e1' }; });
  const wheel = (extra) => [ { t: 'torus', R: 0.6, r: 0.025, n: 40, m: 6, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.045, h: 0.16, n: 14, rot: [90, 0, 0], color: '#6b7280' } ].concat(spokes(0), extra || []);
  /* catena: anello che passa sopra, intorno alla corona, sotto (dal cambio) e intorno al pignone */
  const arc = (c, r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a), ZC]; });
  const CHAIN = [[RA[0], RA[1] + RC + 0.01, ZC]].concat(arc(BB, RR + 0.01, 90, -90, 10), [[-0.98, 0.29, ZC]], arc([-0.99, 0.36], 0.07, -90, -200, 4), arc([-1.02, 0.5], 0.065, -20, 120, 4).slice(1), arc(RA, RC + 0.01, 200, 90, 6));
  CHAIN.push(CHAIN[0]);
  let LEN = 0; for (let i = 0; i < CHAIN.length - 1; i++) LEN += Math.hypot(CHAIN[i + 1][0] - CHAIN[i][0], CHAIN[i + 1][1] - CHAIN[i][1]);
  const NL = 56;
  const links = Array.from({ length: NL }, (_, k) => ({ t: 'box', s: [0.035, 0.022, 0.03], pos: CHAIN[0], color: k % 2 ? '#475569' : '#94a3b8',
    anim: { type: 'path', pts: CHAIN, wave: 'saw', rate: (TAU * (RR + 0.01)) / LEN, phase: k / NL } }));
  const tube = (a, b, r, c) => ({ t: 'pipe', r: r || 0.04, n: 12, pts: [a, b], color: c });

  LIBRARY({
    lang: 'fr',
    id: 'bicicletta',
    title: 'Le vélo',
    intro: 'Le vélo est l\'une des machines les plus <b>efficaces</b> jamais inventées : avec la force de tes jambes, tu vas 3 à 4 fois plus vite qu\'à pied. Pédales, chaîne, engrenages, leviers et frottement : découvre comment tout cela travaille ensemble !',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.35, height: 450,
      parts: [
        { id: 'telaio', name: 'Cadre', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>C\'est le « squelette » du vélo : des tubes assemblés pour former deux <b>triangles</b>. Le triangle est la forme la plus rigide qui existe : il ne se déforme pas, même si tu sautes dessus.</p>',
          more: '<p>Les cadres sont en acier, en aluminium ou en <b>fibre de carbone</b>. Un cadre de course en carbone pèse moins de 1 kg mais supporte le poids d\'un adulte qui pédale sur des routes cahoteuses : c\'est grâce à la forme en triangles, utilisée aussi dans les ponts et les grues.</p>',
          shapes: [ tube([BB[0], BB[1], 0], [0.79, 1.28, 0], 0.045), tube([-0.4, 1.47, 0], [0.73, 1.47, 0], 0.035), tube([BB[0], BB[1], 0], [-0.42, 1.56, 0], 0.038),
            tube([BB[0], BB[1], 0.05], [RA[0], RA[1], 0.07], 0.022), tube([BB[0], BB[1], -0.05], [RA[0], RA[1], -0.07], 0.022),
            tube([-0.4, 1.44, 0.03], [RA[0], RA[1], 0.07], 0.02), tube([-0.4, 1.44, -0.03], [RA[0], RA[1], -0.07], 0.02),
            { t: 'cyl', r: 0.055, h: 0.3, n: 16, pos: [0.76, 1.4, 0], rot: [0, 0, -15], color: '#b91c1c' }, { t: 'cyl', r: 0.06, h: 0.16, n: 16, pos: [BB[0], BB[1], 0], rot: [90, 0, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.05, 0.004], pos: [0.3, 0.95, 0.046], rot: [0, 0, 32], color: '#f8fafc', decal: 1 } ] },
        { id: 'sterzo', name: 'Fourche et guidon', label: 'Guidon', color: '#374151', explode: [0.5, 0.3, 0],
          info: '<p>Le <b>guidon</b> fait tourner la <b>fourche</b> et la roue avant : c\'est ainsi que tu choisis la direction. Il sert aussi à garder l\'équilibre par de petites corrections continuelles.</p>',
          more: '<p>La fourche est inclinée et courbée vers l\'avant : cela fait que la roue tend à se « redresser » toute seule. C\'est pour cela qu\'un vélo lancé à vitesse reste debout même sans personne dessus !</p>',
          shapes: [ { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, 0.07], [0.88, 1.0, 0.07], [0.98, 0.78, 0.06], [FA[0], FA[1], 0.06]] },
            { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, -0.07], [0.88, 1.0, -0.07], [0.98, 0.78, -0.06], [FA[0], FA[1], -0.06]] },
            { t: 'box', s: [0.1, 0.05, 0.18], pos: [0.79, 1.27, 0], rot: [0, 0, -15] },
            tube([0.72, 1.55, 0], [0.68, 1.72, 0], 0.028), tube([0.68, 1.72, 0], [0.82, 1.74, 0], 0.025),
            { t: 'pipe', r: 0.022, n: 10, curve: true, pts: [[0.72, 1.76, -0.4], [0.82, 1.74, -0.25], [0.82, 1.74, 0], [0.82, 1.74, 0.25], [0.72, 1.76, 0.4]] },
            { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, 0.36], rot: [90, 0, 0], color: '#111827' }, { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, -0.36], rot: [90, 0, 0], color: '#111827' },
            { t: 'cyl', r: 0.03, h: 0.025, n: 14, pos: [0.82, 1.79, -0.18], color: '#facc15' } ] },
        { id: 'ruota-anteriore', name: 'Roue avant', label: 'Roue avant', color: '#9ca3af', pos: [FA[0], FA[1], 0], explode: [0.7, 0, 0], anim: WHEEL,
          info: '<p>La roue avant tourne librement et suit la direction. Les <b>rayons</b> fins gardent la jante ronde en la tirant depuis le centre, comme les fils d\'une toile d\'araignée.</p>',
          more: '<p>Les rayons travaillent <b>en tension</b> : chacun est tiré fort, et ainsi une roue de moins de 1 kg supporte 100 kg. Au centre, le <b>moyeu</b> a des roulements à billes qui réduisent le frottement.</p>',
          shapes: wheel() },
        { id: 'ruota-posteriore', name: 'Roue arrière (motrice)', label: 'Roue arrière', color: '#9ca3af', pos: [RA[0], RA[1], 0], explode: [-0.7, 0, 0], anim: WHEEL,
          info: '<p>C\'est la roue qui <b>pousse</b> : la chaîne fait tourner les pignons fixés à son moyeu. La roue pousse la route vers l\'arrière… et la route te pousse vers l\'avant !</p>',
          shapes: wheel() },
        { id: 'pneumatici', name: 'Pneus', color: '#1f2937', explode: [0, -0.35, 0],
          info: '<p>Les pneus sont remplis d\'<b>air</b> comprimé : ils font coussin sur les trous. La bande de roulement « s\'accroche » à l\'asphalte grâce au <b>frottement</b>.</p>',
          more: '<p>Un pneu de course est gonflé à environ 7 bars : sept fois la pression de l\'air autour de nous. Les pneus dégonflés s\'écrasent davantage et frottent plus : on se fatigue beaucoup plus !</p>',
          shapes: [FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.645, r: 0.042, n: 36, m: 6, rot: [90, 0, 0], pos: [x, y, 0] })).concat([FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.615, r: 0.022, n: 36, m: 4, rot: [90, 0, 0], pos: [x, y, 0], color: '#78350f' }))) },
        { id: 'pedivelle', name: 'Pédales et manivelles', label: 'Pédales', color: '#6b7280', pos: [BB[0], BB[1], 0], explode: [0, -0.3, 0.7], anim: PED,
          info: '<p>Tu appuies sur les <b>pédales</b> : les <b>manivelles</b> sont deux leviers qui transforment la poussée des jambes en rotation, comme la manivelle d\'un moulin à café.</p>',
          more: '<p>Les deux manivelles sont à 180° : quand une jambe pousse vers le bas, l\'autre remonte. La poussée est plus efficace quand la manivelle est horizontale : là, le <b>levier</b> est plus long.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.5, n: 10, rot: [90, 0, 0], color: '#d1d5db' },
            { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, 0.17, 0.24] }, { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, -0.17, -0.24] },
            { t: 'group', pos: [0, 0.34, 0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] },
            { t: 'group', pos: [0, -0.34, -0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] } ] },
        { id: 'corona', name: 'Plateau (grande roue dentée)', label: 'Plateau', color: '#94a3b8', pos: [BB[0], BB[1], ZC], explode: [0, -0.3, 0.45], anim: PED,
          info: '<p>C\'est la grande roue dentée fixée aux pédales. Ses <b>dents</b> s\'enfilent dans la chaîne et la tirent.</p>',
          shapes: [ { t: 'extrude', d: 0.02, pts: gear(RR + 0.02, 32, 0.022) }, { t: 'cyl', r: 0.07, h: 0.04, n: 16, rot: [90, 0, 0], color: '#475569' } ]
            .concat([0, 72, 144, 216, 288].map((a) => ({ t: 'box', s: [0.15, 0.03, 0.03], pos: [0.08 * Math.cos(a * Math.PI / 180), 0.08 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#475569' }))) },
        { id: 'pignoni', name: 'Pignons (cassette)', label: 'Pignons', color: '#cbd5e1', pos: [RA[0], RA[1], ZC], explode: [-0.4, -0.3, 0.45], anim: WHEEL,
          info: '<p>Ce sont les petites roues dentées de la roue arrière. Plus le pignon est <b>petit</b>, plus la roue fait de tours à chaque coup de pédale : tu vas vite, mais tu fais plus d\'effort.</p>',
          more: '<p>Ici, le plateau a 32 dents et le pignon utilisé en a 16 : <b>32 : 16 = 2</b>, donc à chaque tour de pédales la roue fait 2 tours. C\'est le <b>rapport</b> de transmission.</p>',
          shapes: [0.13, 0.115, 0.1, 0.085, 0.07].map((r, i) => ({ t: 'extrude', d: 0.012, pts: gear(r, Math.round(r * 160), 0.014), pos: [0, 0, -0.1 + i * 0.025 + 0.025] })) },
        { id: 'catena', name: 'Chaîne', color: '#475569', explode: [0, -0.3, 0.45],
          info: '<p>La chaîne est faite de nombreux <b>maillons</b> reliés par des axes. Elle transmet le mouvement du plateau (devant) aux pignons (derrière), sans glisser.</p>',
          more: '<p>Une chaîne de vélo a environ 110 maillons et un rendement de 98 % : presque toute la force des jambes arrive à la roue. Il faut la garder <b>propre et huilée</b>, sinon le frottement vole de l\'énergie et l\'use.</p>',
          shapes: links },
        { id: 'cambio', name: 'Dérailleur', label: 'Dérailleur', color: '#1f2937', pos: [-1.0, 0.43, ZC + 0.02], explode: [-0.4, -0.6, 0.6],
          info: '<p>Le <b>dérailleur</b> déplace la chaîne d\'un pignon à l\'autre. Les deux petites roulettes gardent toujours la chaîne tendue.</p>',
          more: '<p>En montée, tu utilises un <b>grand</b> pignon : la roue tourne moins à chaque coup de pédale, mais il faut moins de force. Sur le plat ou en descente, un petit pignon : plus de vitesse. C\'est le même principe que les vitesses de la voiture.</p>',
          shapes: [ { t: 'box', s: [0.05, 0.2, 0.04], pos: [0.0, 0.1, 0], rot: [0, 0, -20] },
            { t: 'group', pos: [-0.02, 0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'group', pos: [0.01, -0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'box', s: [0.12, 0.2, 0.012], pos: [0, 0, 0.03], color: '#6b7280', alpha: 0.9 } ] },
        { id: 'freni', name: 'Freins', color: '#111827', explode: [0, 0.45, 0],
          info: '<p>Quand on tire le levier, un câble d\'acier serre deux <b>patins</b> en caoutchouc contre la jante. Le frottement (<b>friction</b>) ralentit la roue.</p>',
          more: '<p>Quand on freine, l\'énergie du mouvement devient de la <b>chaleur</b> : après une longue descente, les jantes ou les disques de frein sont brûlants ! Beaucoup de vélos modernes ont des freins à <b>disque</b>, qui fonctionnent bien même sur sol mouillé.</p>',
          shapes: [ { t: 'box', s: [0.1, 0.05, 0.2], pos: [0.86, 1.3, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, 0.09], rot: [0, 0, -20], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, -0.09], rot: [0, 0, -20], color: '#f97316' },
            { t: 'box', s: [0.1, 0.05, 0.2], pos: [-0.62, 1.28, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, 0.1], rot: [0, 0, 30], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, -0.1], rot: [0, 0, 30], color: '#f97316' },
            { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, 0.3], rot: [0, 0, -15], color: '#9ca3af' }, { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, -0.3], rot: [0, 0, -15], color: '#9ca3af' },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, 0.3], [0.6, 1.7, 0.15], [0.7, 1.45, 0.05], [0.86, 1.33, 0]] },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, -0.3], [0.55, 1.6, -0.1], [0.2, 1.5, -0.04], [-0.3, 1.5, -0.04], [-0.6, 1.33, 0]] } ] },
        { id: 'sella', name: 'Selle', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>La <b>selle</b> supporte ton poids. Elle se monte et se descend : elle est bien réglée quand, avec la pédale en bas, la jambe est presque tendue.</p>',
          shapes: [ tube([-0.42, 1.56, 0], [-0.47, 1.76, 0], 0.025, '#9ca3af'),
            { t: 'extrude', d: 0.12, pts: [[-0.2, 0], [0.0, 0.02], [0.18, 0.015], [0.24, 0.0], [0.2, -0.03], [0.0, -0.035], [-0.2, -0.04], [-0.25, -0.01]], pos: [-0.45, 1.8, 0], smooth: true },
            { t: 'sphere', r: 1, n: 8, m: 14, scale: [0.1, 0.035, 0.11], pos: [-0.6, 1.79, 0] } ] },
        { id: 'luci', name: 'Feux et catadioptres', label: 'Feux', color: '#f8fafc', explode: [0, 0.3, 0.3],
          info: '<p>Pour être vu : feu <b>blanc</b> devant et <b>rouge</b> derrière, plus les catadioptres sur les pédales et sur les rayons. Ils sont obligatoires quand il fait nuit !</p>',
          more: '<p>Le <b>catadioptre</b> ne produit pas de lumière tout seul : il est fait de nombreux petits coins à miroir qui renvoient la lumière des phares exactement vers la voiture qui l\'a envoyée.</p>',
          shapes: [ { t: 'cyl', r: 0.045, h: 0.1, n: 16, rot: [0, 0, 90], pos: [0.9, 1.66, 0], color: '#111827' }, { t: 'cyl', r: 0.04, h: 0.01, n: 16, rot: [0, 0, 90], pos: [0.955, 1.66, 0], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.6 } },
            { t: 'box', s: [0.03, 0.08, 0.06], pos: [-0.68, 1.66, 0], color: '#dc2626', anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 2 } } ] }
      ]
    },
    steps: [
      { icon: '🚲', title: 'Une machine simple et géniale', explode: 0,
        html: '<p>Le vélo est fait de peu de pièces : un <b>cadre</b>, deux <b>roues</b>, les <b>pédales</b> avec la <b>chaîne</b>, la <b>direction</b> et les <b>freins</b>. Le moteur, c\'est toi !</p><p>En pédalant, tu utilises moins d\'énergie qu\'en marchant, mais tu vas beaucoup plus vite.</p>' },
      { icon: '🦵', title: 'Pédales et manivelles : deux leviers', focus: ['pedivelle', 'corona'], explode: 0.3, view: { rx: 0.1, ry: -0.1 },
        html: '<p>Les <b>manivelles</b> sont des leviers : en poussant la pédale, tu fais tourner l\'axe central. Une jambe pousse vers le bas pendant que l\'autre remonte : la poussée ne s\'arrête jamais.</p><p class="tip">🔧 La poussée est plus forte quand la manivelle est horizontale : là, le levier travaille mieux.</p>' },
      { icon: '⛓️', title: 'Plateau, chaîne et pignon', focus: ['corona', 'catena', 'pignoni', 'pedivelle'], explode: 0, zoom: 1.2, view: { rx: 0.08, ry: -0.05 },
        html: '<p>Le <b>plateau</b> tire la <b>chaîne</b> et la chaîne fait tourner le <b>pignon</b> de la roue arrière. Le plateau a 32 dents, le pignon 16 : la moitié !</p><p>Ainsi, à <b>chaque tour de pédales, la roue fait 2 tours</b>. Regarde : la pédale fait un tour pendant que la roue en fait deux.</p>' },
      { icon: '⚙️', title: 'Le dérailleur : montée ou plat ?', focus: ['cambio', 'pignoni', 'catena'], explode: 0.2, view: { rx: 0.2, ry: -0.75 },
        html: '<p>Le <b>dérailleur</b> déplace la chaîne sur différents pignons. <b>Grand</b> pignon : tu pédales facilement mais tu vas lentement (idéal en montée). <b>Petit</b> pignon : tu vas vite mais il faut plus de force.</p><p class="tip">🏔️ C\'est un compromis entre force et vitesse : les vitesses de la voiture fonctionnent de la même façon.</p>' },
      { icon: '🛞', title: 'Roues, rayons et pneus', focus: ['ruota-anteriore', 'ruota-posteriore', 'pneumatici'], explode: 0.2, view: { rx: 0.15, ry: -0.4 },
        html: '<p>Les <b>rayons</b> tirent la jante vers le centre et la gardent parfaitement ronde. Les <b>pneus</b> remplis d\'air absorbent les trous et « s\'accrochent » à la route grâce au frottement.</p><p>La roue arrière pousse la route vers l\'arrière… et la route te pousse vers l\'avant !</p>' },
      { icon: '🤸', title: 'Direction et équilibre', focus: ['sterzo', 'ruota-anteriore', 'telaio'], explode: 0, view: { rx: 0.3, ry: -0.9 },
        html: '<p>Pour rester en équilibre, tu fais continuellement de petites corrections avec le <b>guidon</b> : si tu tombes à droite, tu tournes un peu à droite et le vélo se remet sous toi.</p><p>Les roues qui tournent et la fourche inclinée aident : c\'est pour cela qu\'à l\'arrêt il est très difficile de tenir debout, alors qu\'en roulant c\'est facile.</p>' },
      { icon: '🛑', title: 'Freins : le frottement qui sauve', focus: ['freni', 'ruota-anteriore', 'ruota-posteriore'], explode: 0, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Tu tires le levier, le câble serre les <b>patins</b> contre la jante et le <b>frottement</b> ralentit la roue. L\'énergie du mouvement devient de la chaleur.</p><p class="tip">⚠️ Utilise toujours les deux freins ensemble, avec douceur : le frein avant seul, à fond, peut te faire basculer vers l\'avant !</p>' }
    ],
    facts: [
      { icon: '🪵', title: 'Sans pédales', html: 'Le premier « vélo » (1817, Karl Drais) était en bois et sans pédales : on le poussait avec les pieds par terre, comme les draisiennes des petits enfants.' },
      { icon: '🎡', title: 'La roue géante', html: 'Avant l\'invention de la chaîne, les pédales étaient fixées à la roue avant : pour aller vite, on construisait des vélos aux roues énormes, hautes jusqu\'à 1,5 mètre (les <b>grands bis</b>).' },
      { icon: '🏆', title: 'Le Tour d\'Italie', html: 'Le Tour d\'Italie (Giro d\'Italia) se court depuis 1909. Les coureurs parcourent environ <b>3 500 km</b> en trois semaines, en franchissant même des cols alpins de plus de 2 000 mètres.' },
      { icon: '🌍', title: 'Plus de vélos que de voitures', html: 'Dans le monde, il y a environ <b>un milliard</b> de vélos, plus du double des voitures. Ils ne polluent pas et font du bien à la santé !' }
    ],
    quiz: [
      { type: 'mc', q: 'Qu\'est-ce qui relie le plateau au pignon de la roue arrière ?', options: ['Le câble de frein', 'La chaîne', 'La fourche', 'Le rayon'], answer: 1, explain: 'La chaîne transmet le mouvement du plateau (pédales) au pignon (roue arrière).' },
      { type: 'num', q: 'Le plateau a 32 dents et le pignon 16. Combien de tours fait la roue pour chaque tour de pédales ?', answer: 2, explain: '32 : 16 = 2. C\'est le rapport de transmission.' },
      { type: 'mc', q: 'En montée, il vaut mieux utiliser un pignon…', options: ['petit', 'grand', 'n\'importe lequel, ça ne change rien', 'aucun, on descend'], answer: 1, explain: 'Avec le grand pignon, il faut moins de force pour pédaler, même si tu vas plus lentement.' },
      { type: 'mc', q: 'Pourquoi le cadre est-il fait de triangles ?', options: ['Parce que c\'est plus joli', 'Parce que le triangle est une forme rigide qui ne se déforme pas', 'Pour peser plus lourd', 'Pour faire de la place à la chaîne'], answer: 1, explain: 'Le triangle est indéformable : c\'est pour cela qu\'on l\'utilise dans les cadres, les ponts et les grues.' },
      { type: 'tf', q: 'Les freins ralentissent le vélo grâce au frottement, qui transforme le mouvement en chaleur.', answer: true, explain: 'Les patins frottent sur la jante : l\'énergie du mouvement devient de la chaleur.' },
      { type: 'mc', q: 'Les manivelles fonctionnent comme des…', options: ['leviers', 'aimants', 'ressorts', 'poulies'], answer: 0, explain: 'Ce sont des leviers qui transforment la poussée des jambes en rotation.' }
    ]
  });
})();
