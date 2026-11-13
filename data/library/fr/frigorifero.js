/* Il frigorifero (combinato: freezer in alto, frigo in basso). Davanti = +z, alto = +y, le porte sono aperte.
   Circuito del refrigerante: compressore → condensatore (dietro) → capillare → evaporatore (nel freezer) → compressore. */
(function () {
  const ZC = -0.66; // piano del condensatore (dietro al mobile)
  const serp = (x0, x1, ys, z) => { const out = []; ys.forEach((y, i) => { const a = i % 2 ? x1 : x0, b = i % 2 ? x0 : x1; out.push([a, y, z], [b, y, z]); }); return out; };
  const CROWS = Array.from({ length: 9 }, (_, i) => 2.75 - i * 0.25);
  const COND = serp(0.45, -0.45, CROWS, ZC);
  const EROWS = [2.25, 2.42, 2.59, 2.76];
  const EVAP = serp(-0.42, 0.42, EROWS, -0.44);
  const HOT = [[0.2, 0.46, -0.8], [0.5, 0.62, -0.8], [0.55, 2.75, ZC], ...COND, [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.48, 2.25, -0.5]];
  const COLD = [[-0.48, 2.25, -0.5], ...EVAP, [0.5, 2.76, -0.5], [0.5, 2.76, -0.76], [0.4, 0.75, -0.76], [0.28, 0.46, -0.8]];
  const drops = (path, color, n, rate) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate, phase: k / n } }));
  const glass = (y) => ({ t: 'box', s: [1.04, 0.025, 0.9], pos: [0, y, 0.0], div: 2 });
  /* porta: parte dal cardine (x = 0) e si estende verso +x; aperta ruotando intorno a y */
  const DOOR_OPEN = -112;

  LIBRARY({
    lang: 'fr',
    id: 'frigorifero',
    title: 'Le réfrigérateur',
    intro: 'Le réfrigérateur ne « produit » pas le froid : il <b>emporte la chaleur</b> des aliments et la rejette dehors, à l\'arrière. Il le fait avec un liquide spécial qui voyage dans un circuit fermé, s\'évapore et se condense sans arrêt. Suis son voyage !',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.35, height: 490,
      parts: [
        { id: 'mobile', name: 'Caisson (meuble)', label: 'Caisson', color: '#f1f5f9', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>C\'est la grande « boîte » du réfrigérateur : à l\'extérieur en tôle peinte, à l\'intérieur en plastique blanc facile à nettoyer.</p>',
          shapes: [ { t: 'box', s: [1.2, 3.0, 0.05], pos: [0, 1.5, -0.525] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [-0.57, 1.5, 0] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [0.57, 1.5, 0] },
            { t: 'box', s: [1.2, 0.06, 1.1], pos: [0, 2.97, 0] }, { t: 'box', s: [1.2, 0.12, 1.1], pos: [0, 0.06, 0] },
            { t: 'box', s: [1.08, 0.06, 1.0], pos: [0, 2.05, 0.03], color: '#e2e8f0', alpha: 0.7 },
            { t: 'box', s: [1.2, 0.08, 0.04], pos: [0, 0.04, 0.56], color: '#64748b', alpha: 0.8 } ] },
        { id: 'isolamento', name: 'Isolation (mousse)', label: 'Isolation', color: '#fde68a', alpha: 0.16, explode: [0, 0, -0.35],
          info: '<p>Entre la tôle extérieure et le plastique intérieur, il y a une couche de <b>mousse</b> pleine de petites bulles d\'air. L\'air immobile laisse passer très peu de chaleur : ainsi la chaleur de la cuisine n\'entre pas.</p>',
          more: '<p>C\'est de la mousse de <b>polyuréthane</b>, épaisse de 4 à 7 cm. C\'est le même principe que la doudoune ou la bouteille isotherme : un matériau <b>isolant</b> ralentit le passage de la chaleur, qui va toujours du corps le plus chaud au plus froid.</p>',
          shapes: [ { t: 'box', s: [1.08, 2.8, 0.06], pos: [0, 1.52, -0.47] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [-0.515, 1.52, 0.0] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [0.515, 1.52, 0.0] } ] },
        { id: 'porta-frigo', name: 'Porte du frigo', label: 'Porte', color: '#e5e7eb', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.35],
          info: '<p>La porte aussi est remplie de mousse isolante. Sur la partie intérieure, il y a les <b>balconnets</b> pour les bouteilles, les œufs et le beurre.</p>',
          shapes: [ { t: 'box', s: [1.2, 1.9, 0.09], pos: [0.6, 0.95, 0.045] }, { t: 'box', s: [1.04, 1.74, 0.05], pos: [0.6, 0.95, -0.02], color: '#f8fafc' },
            { t: 'box', s: [0.06, 0.9, 0.05], pos: [1.1, 1.3, 0.12], color: '#94a3b8' },
            ...[0.35, 0.85, 1.35].map((y) => ({ t: 'group', pos: [0.6, y, -0.13], shapes: [ { t: 'box', s: [0.96, 0.03, 0.17] }, { t: 'box', s: [0.96, 0.14, 0.02], pos: [0, 0.07, -0.085], color: '#bae6fd', alpha: 0.6 } ] })),
            { t: 'cyl', r: 0.06, h: 0.42, n: 14, pos: [0.4, 0.58, -0.13], color: '#16a34a', alpha: 0.85 }, { t: 'cyl', r: 0.025, h: 0.12, n: 10, pos: [0.4, 0.85, -0.13], color: '#16a34a', alpha: 0.85 },
            { t: 'cyl', r: 0.065, h: 0.3, n: 14, pos: [0.65, 0.52, -0.13], color: '#f8fafc' }, { t: 'box', s: [0.18, 0.2, 0.09], pos: [0.85, 0.47, -0.13], color: '#fde047' } ] },
        { id: 'porta-freezer', name: 'Porte du congélateur', label: 'Porte congélateur', color: '#e5e7eb', pos: [-0.6, 2.08, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0.2, 0.35],
          info: '<p>Le <b>congélateur</b> a sa propre porte : à l\'intérieur, on descend à <b>−18 °C</b>, assez pour transformer l\'eau en glace et conserver les aliments pendant des mois.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.9, 0.09], pos: [0.6, 0.45, 0.045] }, { t: 'box', s: [1.04, 0.76, 0.05], pos: [0.6, 0.45, -0.02], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.45, 0.05], pos: [1.1, 0.3, 0.12], color: '#94a3b8' } ] },
        { id: 'guarnizione', name: 'Joint magnétique', label: 'Joint', color: '#475569', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.6],
          info: '<p>Le bord en caoutchouc autour de la porte contient un <b>aimant</b> qui la maintient bien fermée contre le caisson en métal : ainsi l\'air froid ne s\'échappe pas.</p>',
          more: '<p>Fais un essai : coince une feuille de papier dans la porte. Si elle se retire facilement, le joint est abîmé et le frigo consomme plus. Un aimant de frigo se colle justement parce que la tôle est en <b>fer</b>.</p>',
          shapes: [ { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 0.06, -0.02] }, { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 1.84, -0.02] },
            { t: 'box', s: [0.04, 1.82, 0.04], pos: [0.06, 0.95, -0.02] }, { t: 'box', s: [0.04, 1.82, 0.04], pos: [1.14, 0.95, -0.02] } ] },
        { id: 'ripiani', name: 'Clayettes et bacs', label: 'Clayettes', color: '#bae6fd', alpha: 0.45, explode: [0, 0, 0.7],
          info: '<p>Des clayettes en verre et des bacs pour les fruits et légumes. En bas, près du bac à légumes, l\'air est moins froid ; en haut, il est plus froid.</p>',
          more: '<p>L\'air froid est plus <b>dense</b> et descend, l\'air plus chaud monte : il se forme des zones à des températures différentes. C\'est pourquoi la viande et le poisson vont sur la clayette la plus froide et les légumes dans le bac.</p>',
          shapes: [ glass(0.55), glass(1.05), glass(1.5), { t: 'box', s: [0.98, 0.32, 0.8], pos: [0, 0.3, 0.02], color: '#a7f3d0' }, glass(2.45) ] },
        { id: 'cibi', name: 'Aliments', color: '#ef4444', explode: [0, 0, 1.1],
          info: '<p>Les aliments se conservent mieux au froid parce que les <b>bactéries</b> et les moisissures, qui les font se gâter, se développent très lentement au froid.</p>',
          more: '<p>Dans le frigo (environ 4 °C), les bactéries ralentissent ; dans le congélateur (−18 °C), elles s\'arrêtent presque complètement, mais elles ne meurent pas : c\'est pourquoi un aliment décongelé doit être consommé vite.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 10, m: 14, pos: [-0.25, 0.66, 0.05] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [-0.05, 0.65, 0.12], color: '#84cc16' },
            { t: 'cyl', r: 0.17, h: 0.12, n: 20, pos: [0.25, 1.13, 0.0], color: '#fde68a' }, { t: 'box', s: [0.3, 0.16, 0.2], pos: [-0.2, 1.15, -0.05], color: '#38bdf8' },
            { t: 'cyl', r: 0.07, h: 0.32, n: 14, pos: [0.3, 1.68, -0.15], color: '#f8fafc' }, { t: 'cyl', r: 0.07, h: 0.06, n: 14, pos: [0.3, 1.87, -0.15], color: '#2563eb' },
            { t: 'box', s: [0.36, 0.1, 0.24], pos: [-0.2, 2.53, 0.08], color: '#c4b5fd' }, { t: 'box', s: [0.28, 0.08, 0.2], pos: [0.2, 2.52, 0.1], color: '#e0f2fe' },
            { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.0, 0.42, 0.15], color: '#f97316' }, { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.14, 0.41, 0.1], color: '#ef4444' } ] },
        { id: 'compressore', name: 'Compresseur', color: '#1f2937', pos: [0.2, 0.28, -0.8], explode: [0.4, -0.2, -0.8],
          info: '<p>C\'est le « cœur » du réfrigérateur, une pompe avec un moteur électrique. Il <b>comprime</b> le gaz réfrigérant : écrasé, le gaz devient chaud et file vers le condenseur.</p>',
          more: '<p>Quand tu comprimes un gaz, tu lui donnes de l\'énergie et sa température monte (tu le sens aussi en gonflant la roue du vélo : la pompe chauffe). Le ronronnement que tu entends de temps en temps, c\'est le compresseur qui se met en marche.</p>',
          anim: { type: 'move', dir: [1, 0, 0], amp: 0.006, wave: 'sin', rate: 9 },
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 20, scale: [0.26, 0.2, 0.2] }, { t: 'cyl', r: 0.24, h: 0.04, n: 24, pos: [0, -0.02, 0], color: '#111827' },
            { t: 'box', s: [0.6, 0.04, 0.4], pos: [0, -0.2, 0], color: '#475569' }, { t: 'box', s: [0.12, 0.1, 0.08], pos: [-0.2, 0.05, 0.16], color: '#0f172a' } ] },
        { id: 'condensatore', name: 'Condenseur (grille à l\'arrière)', label: 'Condenseur', color: '#334155', explode: [0, 0, -0.9],
          info: '<p>C\'est la grille noire derrière le frigo. Le gaz chaud la parcourt, cède sa chaleur à l\'air de la cuisine et se refroidit jusqu\'à devenir <b>liquide</b>. Touche-la (doucement !) : elle est tiède.</p>',
          more: '<p>Passer de gaz à liquide s\'appelle la <b>condensation</b> et libère de la chaleur, comme la vapeur qui se condense sur le couvercle de la casserole. Si la grille est pleine de poussière ou collée au mur, la chaleur sort mal et le frigo consomme plus.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, pts: COND }, ...Array.from({ length: 10 }, (_, k) => ({ t: 'cyl', r: 0.006, h: 2.1, n: 4, pos: [-0.42 + k * 0.093, 1.75, ZC - 0.03], color: '#475569' })) ] },
        { id: 'capillare', name: 'Tube capillaire (détente)', label: 'Capillaire', color: '#b45309', explode: [-0.5, 0, -0.6],
          info: '<p>C\'est un tout petit tube, fin comme un spaghetti de cuivre. Le liquide y passe difficilement et, en sortant de l\'autre côté, trouve beaucoup de place : sa pression s\'effondre et il devient <b>glacial</b>.</p>',
          more: '<p>Quand la pression baisse d\'un coup, le liquide se met à bouillir même à −25 °C. Il se passe quelque chose de semblable avec une bombe aérosol : si tu vaporises longtemps, elle devient froide.</p>',
          shapes: [ { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.45, 0.75, ZC], [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.5, 1.4, -0.55], [-0.48, 2.25, -0.5]] },
            { t: 'cyl', r: 0.035, h: 0.18, n: 12, pos: [-0.52, 0.55, ZC], color: '#78716c' } ] },
        { id: 'evaporatore', name: 'Évaporateur', color: '#93c5fd', explode: [0, 0.45, 0.25],
          info: '<p>Dans le congélateur, derrière la paroi, court un serpentin glacé. Ici le réfrigérant <b>s\'évapore</b> : pour le faire, il a besoin de chaleur et la « vole » à l\'air et aux aliments. Voilà le froid !</p>',
          more: '<p>Pour qu\'un liquide s\'évapore, il faut de l\'énergie (la <b>chaleur latente</b>). C\'est la même raison pour laquelle tu as froid en sortant de l\'eau : la sueur ou l\'eau qui s\'évaporent t\'enlèvent de la chaleur. Sur l\'évaporateur, il se forme souvent du <b>givre</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.026, n: 6, pts: EVAP }, { t: 'box', s: [0.95, 0.68, 0.015], pos: [0, 2.5, -0.465], color: '#dbeafe', alpha: 0.7 } ] },
        { id: 'refrigerante-caldo', name: 'Réfrigérant chaud (comprimé)', label: 'Réfrigérant chaud', color: '#f97316', noLabel: true, explode: [0, 0, -0.9],
          info: '<p>À la sortie du compresseur, le réfrigérant est un <b>gaz chaud et comprimé</b>. Dans le condenseur, il perd de la chaleur et devient liquide.</p>',
          shapes: drops(HOT, '#f97316', 16, 0.35) },
        { id: 'refrigerante-freddo', name: 'Réfrigérant froid', label: 'Réfrigérant froid', color: '#2563eb', noLabel: true, explode: [0, 0.45, 0.25],
          info: '<p>Après le capillaire, le réfrigérant est <b>froid</b> et à basse pression. Dans l\'évaporateur, il absorbe la chaleur du frigo et redevient gaz, prêt pour le compresseur.</p>',
          more: '<p>Aujourd\'hui, on utilise des réfrigérants comme l\'<b>isobutane</b> (R600a), qui n\'abîment pas la couche d\'ozone. Les anciens CFC, eux, l\'abîmaient et ont été interdits en 1987 (Protocole de Montréal).</p>',
          shapes: drops(COLD, '#2563eb', 10, 0.5) },
        { id: 'calore', name: 'Chaleur qui sort', label: 'Chaleur', color: '#ef4444', alpha: 0.7, explode: [0, 0, -1.1],
          info: '<p>La chaleur retirée aux aliments plus celle du moteur sort par le condenseur et réchauffe un peu la cuisine. L\'air chaud <b>monte</b>.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: [-0.35 + (k % 4) * 0.23, 0.9 + (k > 3 ? 0.9 : 0), -0.8],
            anim: [{ type: 'move', dir: [0, 1, 0], amp: 0.9, wave: 'saw', rate: 0.6, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: k / 8 }] })) },
        { id: 'aria-fredda', name: 'Air froid', label: 'Air froid', color: '#7dd3fc', alpha: 0.8, explode: [0, 0, 0.7],
          info: '<p>L\'air refroidi par l\'évaporateur est plus lourd et <b>descend</b> sur les clayettes, tandis que l\'air plus tiède monte : l\'air circule tout seul à l\'intérieur du frigo.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: [-0.3 + (k % 4) * 0.2, 1.95, 0.25 - (k > 3 ? 0.25 : 0)],
            anim: [{ type: 'move', dir: [0, -1, 0], amp: 1.5, wave: 'saw', rate: 0.4, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: k / 8 }] })) },
        { id: 'termostato', name: 'Thermostat et lumière', label: 'Thermostat', color: '#f8fafc', pos: [0.38, 1.92, 0.25], explode: [0.4, 0, 0.6],
          info: '<p>Le <b>thermostat</b> mesure la température : quand il fait assez froid à l\'intérieur, il éteint le compresseur ; quand ça se réchauffe, il le rallume. À côté, il y a l\'ampoule qui s\'allume quand on ouvre la porte.</p>',
          more: '<p>La bonne température pour le frigo est d\'environ <b>4 °C</b>, pour le congélateur <b>−18 °C</b>. Chaque fois que tu laisses la porte ouverte, de l\'air chaud et humide entre, et le compresseur doit travailler davantage.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.14, 0.2] }, { t: 'cyl', r: 0.045, h: 0.04, n: 16, rot: [90, 0, 0], pos: [0.06, 0, 0.11], color: '#475569' },
            { t: 'sphere', r: 0.05, n: 8, m: 12, pos: [-0.08, -0.08, 0.04], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.5 } } ] }
      ]
    },
    steps: [
      { icon: '🧊', title: 'Le froid ne se fabrique pas : on enlève la chaleur', explode: 0,
        html: '<p>Le réfrigérateur est une <b>pompe à chaleur</b> : il prend la chaleur de l\'intérieur (des aliments) et la rejette dehors, dans la cuisine. Sans chaleur, il reste le froid à l\'intérieur.</p><p>Le « camion » qui transporte la chaleur est un liquide spécial, le <b>réfrigérant</b>, qui circule dans un circuit fermé de tuyaux.</p>' },
      { icon: '🔄', title: 'Le voyage du réfrigérant', focus: ['compressore', 'condensatore', 'capillare', 'evaporatore', 'refrigerante-caldo', 'refrigerante-freddo'], explode: 0.3, view: { rx: 0.25, ry: -2.3 },
        html: '<p>Le réfrigérant fait toujours le même tour : <b>compresseur → condenseur → capillaire → évaporateur</b> et de nouveau au compresseur.</p><p>En orange, il est chaud et comprimé, en bleu il est froid. Il change d\'état sans arrêt : de gaz à liquide et de liquide à gaz.</p>' },
      { icon: '💪', title: '1 · Le compresseur comprime', focus: ['compressore', 'refrigerante-caldo'], explode: 0.2, view: { rx: 0.42, ry: -2.5 },
        html: '<p>Le <b>compresseur</b> est une pompe avec un moteur électrique. Il écrase le gaz réfrigérant : un gaz comprimé <b>chauffe</b>, tout comme la pompe à vélo quand tu gonfles une roue.</p>' },
      { icon: '♨️', title: '2 · Le condenseur rejette la chaleur', focus: ['condensatore', 'refrigerante-caldo', 'calore'], explode: 0.25, view: { rx: 0.15, ry: -2.75 },
        html: '<p>Le gaz chaud traverse la grille noire à l\'arrière. Il cède sa chaleur à l\'air de la cuisine, se refroidit et devient <b>liquide</b> (condensation).</p><p class="tip">🖐️ Voilà pourquoi derrière le frigo l\'air est tiède : c\'est la chaleur retirée à tes aliments !</p>' },
      { icon: '🍝', title: '3 · Le capillaire : la pression baisse, la température baisse', focus: ['capillare', 'refrigerante-caldo', 'refrigerante-freddo', 'evaporatore'], explode: 0.2, view: { rx: 0.2, ry: -2.2 },
        html: '<p>Le liquide passe dans un tube fin comme un spaghetti. À la sortie, il trouve beaucoup de place : la pression s\'effondre et le réfrigérant devient <b>glacial</b>, en dessous de −20 °C.</p>' },
      { icon: '❄️', title: '4 · L\'évaporateur vole la chaleur', focus: ['evaporatore', 'refrigerante-freddo', 'aria-fredda', 'cibi', 'ripiani'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>Dans l\'<b>évaporateur</b>, le réfrigérant bout et redevient gaz. Pour s\'évaporer, il a besoin de chaleur et la prend à l\'air et aux aliments : ainsi le frigo se refroidit.</p><p>L\'air froid est plus lourd et <b>descend</b> sur les clayettes.</p><p class="tip">💧 Ça t\'arrive aussi : quand tu sors de la piscine, l\'eau qui s\'évapore de ta peau t\'enlève de la chaleur et tu as froid.</p>' },
      { icon: '🧱', title: 'Garder le froid à l\'intérieur', focus: ['isolamento', 'guarnizione', 'porta-frigo', 'porta-freezer', 'termostato'], explode: 0.45, view: { rx: 0.2, ry: -0.75 },
        html: '<p>Les parois et les portes sont pleines de <b>mousse isolante</b>, et le <b>joint magnétique</b> ferme bien la porte. Le <b>thermostat</b> met en marche le compresseur seulement quand il le faut.</p><p class="tip">🚪 Ne laisse pas la porte ouverte longtemps et ne mets pas d\'aliments chauds au frigo : le compresseur devrait travailler beaucoup plus.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'Avant le frigo : les glacières', html: 'Autrefois, on conservait les aliments dans des <b>glacières</b> : des trous ou des pièces où l\'on mettait la neige ramassée en hiver, recouverte de paille pour qu\'elle dure jusqu\'à l\'été.' },
      { icon: '🔁', title: 'Un frigo à l\'envers', html: 'Le <b>climatiseur</b> et la <b>pompe à chaleur</b> qui chauffe les maisons fonctionnent comme un réfrigérateur : ils déplacent la chaleur d\'un endroit à un autre.' },
      { icon: '🧪', title: 'Un gaz ami de l\'ozone', html: 'Les anciens réfrigérateurs utilisaient des gaz (CFC) qui abîmaient la couche d\'ozone. Depuis 1987, ils sont interdits dans le monde entier et aujourd\'hui la couche d\'ozone est en train de guérir.' },
      { icon: '⚡', title: 'Toujours allumé', html: 'Le réfrigérateur est le seul appareil ménager allumé jour et nuit : c\'est pourquoi il vaut mieux le choisir d\'une classe énergétique élevée et garder propre la grille à l\'arrière.' },
      { icon: '🧑‍🔬', title: 'Einstein et le réfrigérateur', html: 'Albert Einstein aussi, en 1930, a breveté avec Leó Szilárd un réfrigérateur sans pièces mobiles !' }
    ],
    quiz: [
      { type: 'mc', q: 'Que fait vraiment un réfrigérateur ?', options: ['Il produit du froid à partir de rien', 'Il transporte la chaleur de l\'intérieur vers l\'extérieur', 'Il utilise de la glace achetée', 'Il souffle de l\'air venant de l\'extérieur'], answer: 1, explain: 'Le réfrigérateur est une pompe à chaleur : il retire la chaleur de l\'intérieur et la rejette par le condenseur.' },
      { type: 'order', q: 'Remets dans l\'ordre le voyage du réfrigérant, en partant du compresseur', items: ['Compresseur', 'Condenseur', 'Capillaire', 'Évaporateur'], explain: 'Comprimé et chaud, puis liquide dans le condenseur, froid après le capillaire, il s\'évapore dans le congélateur et retourne au compresseur.' },
      { type: 'mc', q: 'Pourquoi l\'air est-il tiède derrière le réfrigérateur ?', options: ['Il y a un petit radiateur', 'Le condenseur rejette la chaleur retirée aux aliments', 'L\'ampoule chauffe', 'C\'est un défaut'], answer: 1, explain: 'Dans le condenseur, le réfrigérant cède à l\'air de la cuisine la chaleur prise à l\'intérieur du frigo.' },
      { type: 'tf', q: 'Quand un liquide s\'évapore, il absorbe de la chaleur de ce qui l\'entoure.', answer: true, explain: 'Pour s\'évaporer, il faut de l\'énergie : c\'est pour cela que l\'évaporateur refroidit le frigo (et que la sueur refroidit la peau).' },
      { type: 'mc', q: 'À quoi sert la mousse dans les parois ?', options: ['À rendre le frigo plus lourd', 'À isoler : la chaleur de la cuisine entre très peu', 'À parfumer la nourriture', 'À éclairer'], answer: 1, explain: 'La mousse pleine de petites bulles d\'air est un excellent isolant thermique.' },
      { type: 'num', q: 'À combien de degrés sous zéro un congélateur est-il en général réglé ? (écris seulement le nombre, sans le moins)', answer: 18, explain: 'Le congélateur fonctionne à environ −18 °C ; le réfrigérateur à environ 4 °C.' }
    ]
  });
})();
