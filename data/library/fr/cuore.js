/* Il cuore umano, visto da davanti (la sinistra del corpo è a destra dello schermo: +x).
   Ciclo cardiaco (cycle 1): 0–0.16 contraggono gli atri; 0.2–0.55 contraggono i ventricoli. */
(function () {
  const ell = (pos, sc, rot) => ({ t: 'sphere', r: 1, n: 14, m: 24, pos, scale: sc, rot });
  /* valvola: anello + due lembi che si aprono (sign 1 = verso il basso, -1 = verso l'alto) */
  const valve = (win, sign) => [
    { t: 'torus', R: 0.13, r: 0.022, n: 24, m: 6 },
    { t: 'group', pos: [-0.12, 0, 0], anim: { type: 'swing', axis: 'z', amp: -65 * sign, wave: 'window', from: win[0], to: win[1], ramp: 0.25 }, shapes: [{ t: 'box', s: [0.12, 0.012, 0.2], pos: [0.06, 0, 0], color: '#fef3c7' }] },
    { t: 'group', pos: [0.12, 0, 0], anim: { type: 'swing', axis: 'z', amp: 65 * sign, wave: 'window', from: win[0], to: win[1], ramp: 0.25 }, shapes: [{ t: 'box', s: [0.12, 0.012, 0.2], pos: [-0.06, 0, 0], color: '#fef3c7' }] }
  ];
  const BLUE = [[-0.8, 1.45, 0.1], [-0.75, 0.5, 0.12], [-0.55, 0.1, 0.25], [-0.38, -0.45, 0.32], [-0.22, 0.0, 0.4], [-0.15, 0.4, 0.42], [-0.05, 0.8, 0.45], [0.2, 1.05, 0.3], [0.75, 1.0, 0.05], [1.2, 1.0, -0.1]];
  const RED = [[1.2, 0.42, -0.4], [0.7, 0.45, -0.35], [0.42, 0.48, -0.3], [0.38, 0.1, -0.18], [0.36, -0.6, -0.05], [0.2, -0.1, 0.0], [0.12, 0.38, 0.0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.6, -0.55]];
  const drops = (path, color) => Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate: 0.25, phase: k / 10 } }));
  const AV = [0.58, 0.19], SL = [0.22, 0.52];
  const squeeze = (win, amt) => ({ type: 'scale', from: 1, to: amt, wave: 'window', win, ramp: 0.45 });

  LIBRARY({
    lang: 'fr',
    id: 'cuore',
    title: 'Le cœur humain',
    intro: 'Le cœur est un muscle gros comme ton poing qui bat environ <b>100 000 fois par jour</b>. C\'est une <b>double pompe</b> : la partie droite envoie le sang aux poumons, la gauche à tout le corps.',
    model: {
      rx: 0.12, ry: -0.25, speed: 0.75, height: 480, bg: 'body',
      phases: [ { from: 0, to: 0.18, label: 'Oreillettes : elles se contractent', color: '#7c3aed' }, { from: 0.18, to: 0.56, label: 'Ventricules : ils se contractent (systole)', color: '#dc2626' }, { from: 0.56, to: 1, label: 'Repos et remplissage (diastole)', color: '#0891b2' } ],
      parts: [
        { id: 'atrio-destro', name: 'Oreillette droite', color: '#818cf8', alpha: 0.5, explode: [-0.6, 0.35, 0.2], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [-0.72, 0.42, 0.12] }),
          info: '<p>C\'est la « salle d\'attente » de droite : c\'est ici qu\'arrive le sang <b>pauvre en oxygène</b> qui revient du corps par les veines caves.</p>', shapes: [ ell([-0.72, 0.42, 0.12], [0.45, 0.45, 0.42]) ] },
        { id: 'ventricolo-destro', name: 'Ventricule droit', color: '#4f46e5', alpha: 0.5, explode: [-0.45, -0.4, 0.5], anim: Object.assign(squeeze([0.19, 0.56], 0.84), { pivot: [-0.32, -0.38, 0.32] }),
          info: '<p>Il pousse le sang pauvre en oxygène dans l\'<b>artère pulmonaire</b>, vers les poumons. Ses parois sont plus fines que celles du ventricule gauche : les poumons sont proches.</p>', shapes: [ ell([-0.32, -0.38, 0.32], [0.6, 0.8, 0.42], [0, 0, -15]) ] },
        { id: 'atrio-sinistro', name: 'Oreillette gauche', color: '#fca5a5', alpha: 0.5, explode: [0.55, 0.45, -0.35], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [0.42, 0.48, -0.3] }),
          info: '<p>Elle reçoit le sang <b>riche en oxygène</b> qui arrive des poumons par les veines pulmonaires.</p>', shapes: [ ell([0.42, 0.48, -0.3], [0.45, 0.36, 0.4]) ] },
        { id: 'ventricolo-sinistro', name: 'Ventricule gauche', color: '#dc2626', alpha: 0.5, explode: [0.55, -0.5, -0.1], anim: Object.assign(squeeze([0.19, 0.56], 0.86), { pivot: [0.3, -0.45, -0.05] }),
          info: '<p>C\'est la cavité la plus puissante : avec sa paroi musculaire épaisse, il pousse le sang riche en oxygène dans l\'<b>aorte</b> et de là dans tout le corps, jusqu\'au bout des pieds.</p>',
          more: '<p>À chaque battement, le ventricule gauche pousse environ <b>70 ml</b> de sang : en une minute environ 5 litres, c\'est-à-dire tout le sang que tu as dans le corps !</p>', shapes: [ ell([0.3, -0.45, -0.05], [0.66, 0.95, 0.62], [0, 0, 22]) ] },
        { id: 'setto', name: 'Septum', color: '#fda4af', explode: [0, -0.4, 0.15],
          info: '<p>Une paroi de muscle qui divise le cœur en deux moitiés : ainsi le sang bleu (droite) et le sang rouge (gauche) <b>ne se mélangent jamais</b>.</p>',
          shapes: [ { t: 'box', s: [0.06, 1.15, 0.62], pos: [-0.02, -0.38, 0.13], rot: [0, 31, 8] } ] },
        { id: 'tricuspide', name: 'Valve tricuspide', label: 'Tricuspide', color: '#fbbf24', pos: [-0.55, 0.06, 0.24], explode: [-0.4, 0, 0.3],
          info: '<p>Une « porte à sens unique » entre l\'oreillette et le ventricule droits : elle s\'ouvre pour laisser descendre le sang et se ferme quand le ventricule pousse, pour que le sang ne revienne pas en arrière.</p>', shapes: valve(AV, 1) },
        { id: 'mitrale', name: 'Valve mitrale', label: 'Mitrale', color: '#fbbf24', pos: [0.4, 0.1, -0.18], explode: [0.45, 0, -0.2],
          info: '<p>La porte entre l\'oreillette et le ventricule gauches. Elle a deux valvules et ressemble à la mitre, le chapeau des évêques : d\'où son nom.</p>', shapes: valve(AV, 1) },
        { id: 'polmonare', name: 'Valve pulmonaire', label: 'Valve pulmonaire', color: '#fbbf24', pos: [-0.15, 0.4, 0.42], explode: [-0.2, 0.5, 0.4],
          info: '<p>À la sortie du ventricule droit : elle s\'ouvre quand le ventricule pousse et se ferme juste après, pour empêcher le sang de revenir en arrière.</p>', shapes: valve(SL, -1) },
        { id: 'aortica', name: 'Valve aortique', label: 'Valve aortique', color: '#fbbf24', pos: [0.12, 0.36, 0.0], explode: [0.25, 0.55, 0],
          info: '<p>À la sortie du ventricule gauche, au début de l\'aorte. Quand elle se ferme, elle fait partie du bruit « toum-<b>TA</b> » du battement.</p>', shapes: valve(SL, -1) },
        { id: 'aorta', name: 'Aorte', color: '#ef4444', explode: [0.25, 0.85, -0.2],
          info: '<p>La plus grande artère du corps : presque aussi grosse qu\'un pouce. Elle part du ventricule gauche, fait une courbe (la <b>crosse de l\'aorte</b>) et porte le sang riche en oxygène dans tout le corps.</p>',
          shapes: [ { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[0.12, 0.33, 0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.8, -0.55]] },
            { t: 'pipe', r: 0.055, n: 10, pts: [[0.25, 1.4, -0.05], [0.2, 1.85, 0]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.45, 1.5, -0.2], [0.45, 1.9, -0.2]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.62, 1.45, -0.35], [0.7, 1.85, -0.4]] } ] },
        { id: 'arteria-polmonare', name: 'Artère pulmonaire', color: '#3b82f6', explode: [0, 0.9, 0.45],
          info: '<p>Elle porte le sang <b>pauvre en oxygène</b> du ventricule droit aux deux poumons. C\'est la seule artère qui transporte du sang « bleu » !</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: [[-0.15, 0.35, 0.42], [-0.08, 0.8, 0.45], [0.2, 1.05, 0.3]] },
            { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [-0.3, 1.06, 0.08], [-1.05, 1.0, 0]] }, { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [0.75, 1.02, 0.05], [1.25, 1.0, -0.1]] } ] },
        { id: 'vene-cave', name: 'Veines caves', color: '#2563eb', explode: [-0.85, 0.2, 0],
          info: '<p>Deux grosses veines ramènent au cœur le sang usé : la <b>veine cave supérieure</b> depuis la tête et les bras, la <b>veine cave inférieure</b> depuis le reste du corps.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, pts: [[-0.78, 0.7, 0.1], [-0.8, 1.55, 0.1]] }, { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[-0.74, 0.15, 0.06], [-0.72, -0.6, 0], [-0.7, -1.35, 0]] } ] },
        { id: 'vene-polmonari', name: 'Veines pulmonaires', color: '#f87171', explode: [0.5, 0.5, -0.8],
          info: '<p>Quatre veines portent au cœur le sang <b>tout juste chargé d\'oxygène</b> dans les poumons.</p>',
          shapes: [ [[0.2, 0.42, -0.45], [-0.55, 0.45, -0.58]], [[0.2, 0.58, -0.45], [-0.5, 0.75, -0.62]], [[0.7, 0.42, -0.35], [1.25, 0.4, -0.42]], [[0.7, 0.58, -0.35], [1.25, 0.75, -0.48]] ].map((p) => ({ t: 'pipe', r: 0.065, n: 10, pts: p })) },
        { id: 'coronarie', name: 'Artères coronaires', label: 'Coronaires', color: '#b91c1c', explode: [0, 0, 0.5],
          info: '<p>Le cœur aussi a besoin d\'oxygène ! Les coronaires sont de petites artères qui entourent sa surface comme une couronne et le nourrissent.</p>',
          more: '<p>Si une coronaire se bouche, une partie du muscle du cœur reste sans oxygène : c\'est l\'<b>infarctus</b>. Manger sainement et bouger gardent les artères propres.</p>',
          shapes: [ { t: 'pipe', r: 0.032, n: 8, curve: true, pts: [[0.1, 0.35, 0.18], [0.0, 0.1, 0.46], [-0.05, -0.45, 0.66], [0.18, -1.05, 0.45]] },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.0, 0.33, 0.22], [-0.5, 0.14, 0.52], [-0.9, -0.25, 0.32], [-0.75, -0.75, 0.1]] } ] },
        { id: 'nodi', name: 'Nœuds du battement (pacemaker naturel)', label: 'Pacemaker naturel', color: '#facc15', explode: [-0.3, 0.3, 0.6],
          info: '<p>Le cœur bat <b>tout seul</b> ! Un petit groupe de cellules dans l\'oreillette droite, le <b>nœud sinusal</b>, produit une petite impulsion électrique qui fait se contracter d\'abord les oreillettes puis, en passant par le <b>nœud auriculo-ventriculaire</b>, les ventricules.</p>',
          more: '<p>Les impulsions électriques du cœur peuvent être enregistrées avec l\'<b>électrocardiogramme</b> (ECG). Si le nœud ne fonctionne pas bien, on implante un pacemaker artificiel.</p>',
          shapes: [ { t: 'sphere', r: 0.07, n: 8, pos: [-0.68, 0.8, 0.3], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0, to: 0.08, ramp: 0.3 } },
            { t: 'sphere', r: 0.06, n: 8, pos: [-0.2, 0.06, 0.25], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0.12, to: 0.2, ramp: 0.3 } },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.68, 0.8, 0.3], [-0.45, 0.4, 0.3], [-0.2, 0.06, 0.25], [-0.05, -0.5, 0.3], [0.05, -1.0, 0.25]] } ] },
        { id: 'sangue-blu', name: 'Sang pauvre en oxygène', label: 'Sang « bleu »', color: '#3b82f6', noLabel: true,
          info: '<p>Le sang qui revient du corps a livré l\'oxygène aux cellules et emporte le <b>dioxyde de carbone</b>. Dans les dessins, on le colorie en bleu, mais en réalité il est rouge foncé.</p>', shapes: drops(BLUE, '#2563eb') },
        { id: 'sangue-rosso', name: 'Sang riche en oxygène', label: 'Sang rouge', color: '#ef4444', noLabel: true,
          info: '<p>Dans les poumons, le sang se recharge en <b>oxygène</b> et devient rouge vif. Le cœur le pousse dans tout le corps.</p>', shapes: drops(RED, '#ef4444') }
      ]
    },
    steps: [
      { icon: '🫀', title: 'Une double pompe', explode: 0,
        html: '<p>Le cœur a <b>4 cavités</b> : deux <b>oreillettes</b> en haut et deux <b>ventricules</b> en bas. La moitié <b>droite</b> (à gauche sur l\'écran !) pompe le sang vers les poumons, la moitié <b>gauche</b> vers tout le corps.</p><p class="tip">🪞 Tu regardes le cœur d\'une personne en face de toi : sa droite est ta gauche.</p>' },
      { icon: '⚡', title: 'Le battement part tout seul', focus: ['nodi', 'atrio-destro', 'atrio-sinistro'], loop: [0, 0.25],
        html: '<p>Le <b>nœud sinusal</b>, notre pacemaker naturel, lance une petite étincelle électrique. L\'impulsion se répand sur les oreillettes, puis passe au <b>nœud auriculo-ventriculaire</b> et descend vers les ventricules.</p>' },
      { icon: '⬇️', title: 'Les oreillettes remplissent les ventricules', focus: ['atrio-destro', 'atrio-sinistro', 'tricuspide', 'mitrale', 'sangue-blu', 'sangue-rosso'], loop: [0.55, 1.2 - 0.02],
        html: '<p>Pendant que les ventricules sont relâchés, le sang descend des oreillettes à travers la <b>tricuspide</b> et la <b>mitrale</b>, ouvertes. À la fin, les oreillettes se contractent et donnent la dernière poussée.</p>' },
      { icon: '💥', title: 'Les ventricules poussent', focus: ['ventricolo-destro', 'ventricolo-sinistro', 'polmonare', 'aortica', 'tricuspide', 'mitrale'], loop: [0.18, 0.6],
        html: '<p>Les ventricules se contractent avec force (<b>systole</b>). Les valves tricuspide et mitrale se ferment d\'un coup, les valves <b>pulmonaire</b> et <b>aortique</b> s\'ouvrent et le sang sort dans les artères.</p><p class="tip">🩺 « Toum-TA » : le premier bruit est la fermeture des valves entre oreillettes et ventricules, le second celle des valves des artères.</p>' },
      { icon: '🫁', title: 'Petite circulation : vers les poumons', focus: ['atrio-destro', 'ventricolo-destro', 'arteria-polmonare', 'vene-polmonari', 'vene-cave', 'sangue-blu', 'atrio-sinistro'],
        html: '<p>Le sang « bleu » arrive par les <b>veines caves</b>, passe par l\'oreillette et le ventricule droits et va aux poumons par l\'<b>artère pulmonaire</b>. Là, il laisse le dioxyde de carbone et prend de l\'oxygène, puis il revient à l\'oreillette gauche par les <b>veines pulmonaires</b>.</p>' },
      { icon: '🏃', title: 'Grande circulation : vers tout le corps', focus: ['atrio-sinistro', 'ventricolo-sinistro', 'aorta', 'sangue-rosso', 'coronarie', 'vene-polmonari'],
        html: '<p>Le ventricule gauche pousse le sang rouge dans l\'<b>aorte</b> et de là dans toutes les artères du corps. Les premières à recevoir du sang sont les <b>coronaires</b>, qui nourrissent le cœur lui-même !</p><p class="tip">⏱️ Une goutte de sang fait le tour complet du corps en environ une minute.</p>' }
    ],
    facts: [
      { icon: '✊', title: 'Gros comme un poing', html: 'Le cœur pèse environ 300 grammes, comme une grosse pomme, et il est un peu décalé vers la gauche dans la poitrine.' },
      { icon: '🔢', title: 'Infatigable', html: 'Au cours d\'une vie entière, le cœur bat plus de <b>2,5 milliards</b> de fois sans jamais s\'arrêter pour se reposer.' },
      { icon: '🐋', title: 'Le plus grand cœur', html: 'Le cœur de la baleine bleue pèse environ 180 kg : c\'est le plus grand du règne animal.' },
      { icon: '🏃‍♀️', title: 'Plus rapide quand tu cours', html: 'Au repos, un enfant a environ 80 à 100 battements par minute ; en courant, le cœur accélère pour apporter plus d\'oxygène aux muscles.' }
    ],
    quiz: [
      { type: 'mc', q: 'Combien de cavités a le cœur humain ?', options: ['2', '3', '4', '6'], answer: 2, explain: 'Deux oreillettes (en haut) et deux ventricules (en bas).' },
      { type: 'mc', q: 'Où va le sang poussé par le ventricule droit ?', options: ['Au cerveau', 'Aux poumons', 'Aux jambes', 'Au foie'], answer: 1, explain: 'Le ventricule droit envoie le sang pauvre en oxygène aux poumons par l\'artère pulmonaire.' },
      { type: 'mc', q: 'Quelle est la plus grande artère du corps ?', options: ['La veine cave', 'L\'artère pulmonaire', 'L\'aorte', 'La coronaire'], answer: 2, explain: 'L\'aorte part du ventricule gauche et porte le sang oxygéné à tout le corps.' },
      { type: 'tf', q: 'Les valves du cœur laissent passer le sang dans un seul sens.', answer: true, explain: 'Ce sont des portes à sens unique : elles se ferment pour empêcher le sang de revenir en arrière.' },
      { type: 'mc', q: 'Qu\'est-ce qui déclenche chaque battement ?', options: ['Le cerveau, à chaque battement', 'Une impulsion électrique du nœud sinusal', 'Les poumons quand tu respires', 'L\'estomac'], answer: 1, explain: 'Le cœur a son propre « pacemaker naturel » : le nœud sinusal.' },
      { type: 'order', q: 'Remets dans l\'ordre le voyage du sang qui revient du corps', items: ['Veines caves', 'Oreillette droite', 'Ventricule droit', 'Artère pulmonaire', 'Poumons', 'Veines pulmonaires', 'Oreillette gauche', 'Ventricule gauche', 'Aorte'], explain: 'D\'abord la petite circulation (cœur droit → poumons → cœur gauche), puis la grande circulation avec l\'aorte.' }
    ]
  });
})();
