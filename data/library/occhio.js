/* L'occhio umano. Il bulbo guarda verso +x (la luce arriva da destra, da un alberello); la sclera è semitrasparente per vedere dentro.
   I solidi "di rotazione" sono costruiti lungo y e girati di −90° intorno a z (così y diventa x). */
(function () {
  const AX = [0, 0, -90];
  const arc = (r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; return [Math.max(0, r * Math.cos(a)), r * Math.sin(a)]; });
  const tree = (s) => [ { t: 'cyl', r: 0.06 * s, h: 0.4 * s, n: 10, pos: [0, 0.2 * s, 0], color: '#92400e' }, { t: 'cone', r: 0.32 * s, h: 0.55 * s, n: 16, pos: [0, 0.65 * s, 0], color: '#16a34a' }, { t: 'cone', r: 0.24 * s, h: 0.42 * s, n: 16, pos: [0, 0.95 * s, 0], color: '#22c55e' } ];
  const TOP = [4.2, 1.05, 0], BASE = [4.2, -0.4, 0];
  const RAYS = [ [TOP, [1.33, 0.3, 0], [0.86, 0.17, 0], [-1.06, -0.24, 0]], [TOP, [1.3, 0.05, 0.12], [0.86, 0.02, 0.08], [-1.06, -0.24, 0]], [BASE, [1.33, -0.25, 0], [0.86, -0.15, 0], [-1.06, 0.12, 0]], [BASE, [1.3, 0.02, -0.12], [0.86, 0.0, -0.08], [-1.06, 0.12, 0]] ];
  const rayShapes = [];
  RAYS.forEach((pts, i) => {
    rayShapes.push({ t: 'pipe', r: 0.01, n: 5, pts, color: i < 2 ? '#fde047' : '#fb923c', alpha: 0.55 });
    for (let k = 0; k < 4; k++) rayShapes.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: pts[0], color: i < 2 ? '#fde047' : '#fb923c', anim: { type: 'path', pts, wave: 'saw', rate: 0.7, phase: k / 4 + i * 0.1 } });
  });
  const NERVE = [[-1.12, -0.06, -0.24], [-1.6, -0.08, -0.3], [-2.2, -0.05, -0.32], [-2.9, 0.05, -0.3]];
  const vessels = [[[-1.07, -0.04, -0.22], [-0.95, 0.45, -0.3], [-0.7, 0.75, -0.4]], [[-1.07, -0.04, -0.22], [-0.9, -0.5, -0.35], [-0.65, -0.8, -0.35]], [[-1.07, -0.04, -0.22], [-0.85, 0.35, 0.45], [-0.55, 0.55, 0.75]], [[-1.07, -0.04, -0.22], [-0.85, -0.45, 0.4], [-0.6, -0.65, 0.65]]]
    .map((pts) => ({ t: 'pipe', r: 0.016, n: 5, curve: true, pts, color: '#b91c1c' }));
  const muscle = (rot) => ({ t: 'group', rot, shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[-2.1, 0.22, 0], [-1.25, 0.9, 0], [-0.3, 1.25, 0], [0.45, 1.16, 0]], scale: [1, 1, 1.7] } ] });

  LIBRARY({
    id: 'occhio',
    title: 'L\'occhio',
    intro: 'L\'occhio è una <b>macchina fotografica naturale</b>: una pallina grande come una noce che raccoglie la luce, la mette a fuoco con una lente e la trasforma in segnali per il cervello. Seguiamo la luce dentro l\'occhio!',
    model: {
      rx: 0.18, ry: -0.42, speed: 0.4, height: 470, bg: 'body', fit: 1.0,
      parts: [
        { id: 'sclera', name: 'Sclera (il bianco dell\'occhio)', label: 'Sclera', color: '#f8fafc', alpha: 0.3, explode: [-0.4, 0, -1.2],
          info: '<p>La "parete" bianca e robusta che avvolge l\'occhio e gli dà la forma di una pallina. È il <b>bianco dell\'occhio</b>.</p>',
          more: '<p>Sotto la sclera c\'è la <b>coroide</b>, uno strato pieno di vasi sanguigni che nutre la retina ed è scuro per non far "rimbalzare" la luce dentro l\'occhio, come l\'interno nero di una macchina fotografica.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.2]].concat(arc(1.2, -88, 63, 18)), ds: true } ] },
        { id: 'cornea', name: 'Cornea', color: '#bae6fd', alpha: 0.25, explode: [1.0, 0, 0],
          info: '<p>La "finestra" trasparente davanti all\'occhio, curva come il vetro di un orologio. È la prima lente che la luce attraversa: fa già gran parte della messa a fuoco.</p>',
          more: '<p>La cornea non ha vasi sanguigni (per essere trasparente!): riceve ossigeno direttamente dall\'aria e dalle lacrime. Gli interventi laser per non portare gli occhiali le cambiano un po\' la curvatura.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pos: [0, 0, 0], pts: arc(0.71, 39, 90, 8).map(([r, y]) => [r, y + 0.62]), ds: true } ] },
        { id: 'iride', name: 'Iride', color: '#2563eb', explode: [0.7, 0.4, 0.4],
          info: '<p>Il "disco colorato" dell\'occhio: azzurro, verde, marrone… È un piccolo muscolo che <b>allarga o stringe la pupilla</b> per far entrare più o meno luce.</p>',
          more: '<p>Il colore dipende dalla quantità di <b>melanina</b>: tanta = occhi marroni, poca = occhi azzurri. Il disegno dell\'iride è unico per ogni persona, più delle impronte digitali.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.03, n: 36, rot: AX, pos: [1.0, 0, 0] }, { t: 'tube', r: 0.52, ri: 0.4, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#1e3a8a' },
            { t: 'tube', r: 0.34, ri: 0.3, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#60a5fa' } ] },
        { id: 'pupilla', name: 'Pupilla', color: '#020617', explode: [0.9, 0.4, 0.4],
          info: '<p>Il "buco" nero al centro dell\'iride, da cui entra la luce. Al buio si allarga per raccogliere più luce, con il sole si stringe per non abbagliarci.</p>',
          more: '<p>È un riflesso automatico, il <b>riflesso pupillare</b>: i medici lo controllano con una lucina. La pupilla può passare da 2 a 8 mm di diametro.</p>',
          shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 28, rot: AX, pos: [1.025, 0, 0], decal: 1, anim: { type: 'scale', from: 0.65, to: 1.45, rate: 0.25, axis: 'xz' } } ] },
        { id: 'cristallino', name: 'Cristallino', color: '#fef9c3', alpha: 0.65, explode: [0.5, 1.0, 0.4],
          info: '<p>Una <b>lente</b> trasparente ed elastica dietro la pupilla. Cambia forma per mettere a fuoco: si <b>gonfia</b> per vedere da vicino e si <b>appiattisce</b> per vedere lontano.</p>',
          more: '<p>Con l\'età il cristallino diventa più rigido: per questo dopo i 45 anni molte persone hanno bisogno degli occhiali per leggere (<b>presbiopia</b>). Se diventa opaco si parla di <b>cataratta</b>, che si cura sostituendolo con una lente artificiale.</p>',
          shapes: [ { t: 'sphere', r: 0.4, n: 14, m: 24, scale: [0.42, 1, 1], pos: [0.82, 0, 0], anim: { type: 'scale', from: 1, to: 1.3, axis: 'x', rate: 0.25, phase: 0.5 } } ] },
        { id: 'muscolo-ciliare', name: 'Muscolo ciliare', label: 'Muscolo ciliare', color: '#be123c', explode: [0.4, -0.9, 0.3],
          info: '<p>Un anellino di muscolo intorno al cristallino, collegato a lui da tanti filamenti. Contraendosi o rilassandosi cambia la forma del cristallino.</p>',
          shapes: [ { t: 'torus', R: 0.5, r: 0.06, n: 32, m: 8, rot: [0, 0, 90], pos: [0.85, 0, 0] } ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [k * 22.5, 0, 0], shapes: [ { t: 'cyl', r: 0.006, h: 0.12, n: 4, pos: [0.84, 0.42, 0], color: '#fda4af' } ] }))) },
        { id: 'vitreo', name: 'Corpo vitreo', label: 'Corpo vitreo', color: '#e0f2fe', alpha: 0.16, explode: [-0.4, 0, 0.9],
          info: '<p>L\'interno dell\'occhio è pieno di una <b>gelatina trasparente</b>, il corpo vitreo. Tiene l\'occhio gonfio e rotondo e lascia passare la luce.</p>',
          more: '<p>A volte nel vitreo galleggiano piccoli grumi: sono le "mosche volanti" che si vedono guardando il cielo azzurro. Di solito sono innocue.</p>',
          shapes: [ { t: 'sphere', r: 1.08, n: 16, m: 28, scale: [0.96, 1, 1], pos: [-0.05, 0, 0] } ] },
        { id: 'retina', name: 'Retina', color: '#fb7185', alpha: 0.5, explode: [-1.2, 0, 0],
          info: '<p>Lo "schermo" in fondo all\'occhio, dove la luce forma l\'immagine. È fatta di milioni di cellule sensibili alla luce, i <b>fotorecettori</b>: i <b>coni</b> vedono i colori, i <b>bastoncelli</b> funzionano anche con poca luce.</p>',
          more: '<p>Nella retina ci sono circa <b>120 milioni di bastoncelli</b> e 6 milioni di coni. Ci sono tre tipi di coni: per il rosso, il verde e il blu. Mescolando i loro segnali il cervello "vede" migliaia di colori.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.12]].concat(arc(1.12, -88, 32, 14)), ds: true } ] },
        { id: 'macula', name: 'Fovea (macchia gialla)', label: 'Fovea', color: '#facc15', explode: [-1.5, 0.2, 0.2],
          info: '<p>Un puntino della retina proprio dietro il cristallino, pieno di coni: è il punto in cui vediamo <b>più nitido</b>. Quando leggi, muovi gli occhi per portare ogni parola sulla fovea.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 8, m: 14, scale: [0.2, 1, 1], pos: [-1.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 6, m: 10, scale: [0.2, 1, 1], pos: [-1.1, 0, 0.0], color: '#ca8a04' } ] },
        { id: 'vasi', name: 'Vasi sanguigni della retina', label: 'Vasi sanguigni', color: '#b91c1c', explode: [-1.3, 0, 0],
          info: '<p>Piccole arterie e vene partono dal nervo ottico e si allargano sulla retina per nutrirla. Il medico oculista le vede guardando nella pupilla con una lucina.</p>',
          shapes: vessels },
        { id: 'nervo-ottico', name: 'Nervo ottico', label: 'Nervo ottico', color: '#fde68a', explode: [-1.6, 0, -0.3],
          info: '<p>Un "cavo" fatto di un milione di fibre nervose che porta i segnali della retina fino al <b>cervello</b>. È il cervello, nella parte dietro della testa, che "vede" davvero.</p>',
          more: '<p>Dove il nervo esce dalla retina non ci sono fotorecettori: è il <b>punto cieco</b>. Non ce ne accorgiamo perché il cervello "riempie il buco" con quello che vede intorno e con l\'altro occhio.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 16, curve: true, pts: NERVE }, { t: 'cyl', r: 0.15, h: 0.03, n: 20, rot: AX, pos: [-1.08, -0.05, -0.23], color: '#fffbeb' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.9, phase: k / 6 }, { type: 'blink', color: '#38bdf8', rate: 1.8, phase: k / 6 } ] }))) },
        { id: 'muscoli', name: 'Muscoli dell\'occhio', label: 'Muscoli', color: '#dc2626', explode: [-0.6, 0.6, 0],
          info: '<p>Sei muscoli attaccati alla sclera muovono l\'occhio in tutte le direzioni: su, giù, a destra, a sinistra e anche un po\' ruotando. Sono tra i muscoli più veloci del corpo.</p>',
          shapes: [ muscle([0, 0, 0]), muscle([180, 0, 0]), muscle([90, 0, 0]), muscle([-90, 0, 0]) ] },
        { id: 'luce', name: 'Raggi di luce', label: 'Raggi di luce', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>La luce che rimbalza sull\'albero entra nell\'occhio. Cornea e cristallino la <b>piegano</b> (rifrazione) in modo che i raggi partiti da un punto si incontrino di nuovo in un punto della retina.</p>',
          more: '<p>Se l\'occhio è un po\' troppo lungo, l\'immagine si forma <b>davanti</b> alla retina: è la <b>miopia</b> (si vede male da lontano). Se è troppo corto si forma dietro: è l\'<b>ipermetropia</b>. Le lenti degli occhiali spostano il fuoco al posto giusto.</p>',
          shapes: rayShapes },
        { id: 'oggetto', name: 'Che cosa guardiamo', label: 'Albero', color: '#16a34a', pos: [4.2, -0.4, 0], explode: [0.8, 0, 0],
          info: '<p>Un oggetto si vede perché <b>manda luce</b> (come una lampadina) o perché <b>riflette</b> la luce che lo colpisce (come questo albero). Al buio completo non vediamo nulla.</p>',
          shapes: tree(1.0) },
        { id: 'immagine', name: 'Immagine capovolta', label: 'Immagine', color: '#16a34a', pos: [-0.98, 0.12, 0], explode: [-1.4, 0, 0.3],
          info: '<p>Sulla retina l\'immagine dell\'albero è <b>piccolissima e capovolta</b>! È il cervello a raddrizzarla: impariamo a farlo da neonati.</p>',
          shapes: [ { t: 'group', rot: [0, 90, 180], scale: 0.32, shapes: tree(1.0) } ] }
      ]
    },
    steps: [
      { icon: '👁️', title: 'Una macchina fotografica naturale', explode: 0,
        html: '<p>L\'occhio è una pallina di circa <b>2,4 cm</b>. Come una macchina fotografica ha un\'apertura (la <b>pupilla</b>), una lente (il <b>cristallino</b>) e uno "schermo" sensibile alla luce (la <b>retina</b>).</p>' },
      { icon: '🌳', title: 'La luce entra', focus: ['oggetto', 'luce', 'cornea', 'pupilla', 'iride'], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Vediamo un oggetto quando la sua luce arriva ai nostri occhi. La luce passa dalla <b>cornea</b>, la finestra trasparente, ed entra dalla <b>pupilla</b>.</p>' },
      { icon: '🔵', title: 'L\'iride regola la luce', focus: ['iride', 'pupilla', 'cornea'], view: { rx: 0.1, ry: -1.35 }, zoom: 1.8,
        html: '<p>L\'<b>iride</b>, la parte colorata, è un muscolo: al buio allarga la pupilla per far entrare più luce, con il sole la stringe.</p><p class="tip">🪞 Prova davanti allo specchio: chiudi gli occhi per qualche secondo, poi riaprili e guarda la pupilla che si stringe!</p>' },
      { icon: '🔍', title: 'Il cristallino mette a fuoco', focus: ['cristallino', 'muscolo-ciliare', 'luce'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.6,
        html: '<p>Il <b>cristallino</b> è una lente elastica. Il <b>muscolo ciliare</b> lo fa gonfiare per guardare vicino e lo appiattisce per guardare lontano: così l\'immagine sulla retina è sempre nitida.</p>' },
      { icon: '🙃', title: 'Un\'immagine capovolta', focus: ['retina', 'immagine', 'luce', 'macula'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.5,
        html: '<p>I raggi si incrociano e sulla <b>retina</b> si forma un\'immagine piccola e <b>capovolta</b>. I coni e i bastoncelli della retina la trasformano in segnali elettrici. Il punto più nitido è la <b>fovea</b>.</p>' },
      { icon: '🧠', title: 'Il cervello vede', focus: ['nervo-ottico', 'retina', 'vasi'], view: { rx: 0.2, ry: 0.5 },
        html: '<p>Il <b>nervo ottico</b> porta i segnali al cervello. È il cervello a raddrizzare l\'immagine, a unire quelle dei due occhi (così vediamo in 3D) e a capire che cosa stiamo guardando.</p>' },
      { icon: '↔️', title: 'Occhi sempre in movimento', focus: ['muscoli', 'sclera'], view: { rx: 0.35, ry: -0.7 },
        html: '<p>Sei <b>muscoli</b> muovono ogni occhio. Anche quando credi di fissare un punto, gli occhi fanno piccoli scatti continui: senza, l\'immagine sbiadirebbe!</p><p class="tip">😉 Battiamo le palpebre circa 15 volte al minuto: le lacrime puliscono e bagnano la cornea.</p>' }
    ],
    facts: [
      { icon: '📸', title: 'Più veloce di una foto', html: 'L\'occhio si mette a fuoco in una frazione di secondo e distingue circa <b>un milione</b> di sfumature di colore.' },
      { icon: '🦅', title: 'Occhi da aquila', html: 'Un\'aquila vede un coniglio a più di 3 km di distanza: la sua retina ha molti più coni della nostra.' },
      { icon: '🐝', title: 'Colori invisibili', html: 'Le api vedono la luce <b>ultravioletta</b>, che per noi è invisibile: molti fiori hanno disegni "segreti" che solo loro vedono.' },
      { icon: '🔴', title: 'Daltonismo', html: 'Circa 1 maschio su 12 confonde alcuni colori, di solito rosso e verde: si chiama <b>daltonismo</b>, dal chimico John Dalton che ne soffriva.' },
      { icon: '👶', title: 'Neonati', html: 'I neonati vedono sfocato e quasi in bianco e nero; la vista diventa come quella degli adulti verso i 3–5 anni.' }
    ],
    quiz: [
      { type: 'mc', q: 'Quale parte dell\'occhio regola quanta luce entra?', options: ['La retina', 'L\'iride', 'Il nervo ottico', 'La sclera'], answer: 1, explain: 'L\'iride allarga o stringe la pupilla.' },
      { type: 'mc', q: 'Come si chiama la lente elastica che mette a fuoco?', options: ['Cornea', 'Pupilla', 'Cristallino', 'Fovea'], answer: 2, explain: 'Il cristallino cambia forma per mettere a fuoco vicino o lontano.' },
      { type: 'tf', q: 'Sulla retina l\'immagine si forma capovolta.', answer: true, explain: 'I raggi si incrociano attraversando il cristallino; il cervello raddrizza l\'immagine.' },
      { type: 'mc', q: 'Quali cellule della retina ci fanno vedere i colori?', options: ['I bastoncelli', 'I coni', 'I globuli rossi', 'I neuroni del naso'], answer: 1, explain: 'I coni vedono i colori; i bastoncelli funzionano con poca luce.' },
      { type: 'order', q: 'Metti in ordine il viaggio della luce nell\'occhio', items: ['Cornea', 'Pupilla', 'Cristallino', 'Corpo vitreo', 'Retina', 'Nervo ottico'], explain: 'La luce attraversa cornea, pupilla, cristallino e vitreo; la retina la trasforma in segnali che il nervo ottico porta al cervello.' },
      { type: 'mc', q: 'Se l\'immagine si forma davanti alla retina e si vede male da lontano, si è…', options: ['Miopi', 'Daltonici', 'Presbiti', 'Ciechi'], answer: 0, explain: 'È la miopia: si corregge con lenti divergenti.' }
    ]
  });
})();
