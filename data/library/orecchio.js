/* L'orecchio (destro, visto da davanti-sotto). Il suono arriva da sinistra (−x) da un diapason, entra nel condotto lungo +x,
   fa vibrare timpano e ossicini e arriva alla coclea; a destra il nervo acustico va verso il cervello. */
(function () {
  const V = 6;                                                     // velocità delle vibrazioni
  const C = [1.4, -0.2, 0.05];                                      // centro della coclea
  const spiral = (() => { const p = []; for (let i = 0; i <= 40; i++) { const t = i / 40 * 2.6, a = Math.PI + t * Math.PI * 2, r = 0.55 * (1 - 0.3 * t); p.push([C[0] + r * Math.cos(a), C[1] + r * Math.sin(a), C[2] + 0.1 * t]); } return p; })();
  const CANAL = [[-1.95, 0.05, 0.05], [-1.3, 0.12, 0.0], [-0.6, 0.0, 0.0], [-0.06, 0, 0]];
  const NERVE = [[C[0], C[1], C[2] + 0.2], [1.8, 0.0, 0.1], [2.3, 0.2, 0.05], [2.9, 0.3, 0.0]];
  const rings = Array.from({ length: 4 }, (_, k) => ({ t: 'torus', R: 0.55, r: 0.03, n: 28, m: 5, rot: [0, 0, 90], pos: [-3.2, 0.05, 0.05], color: '#38bdf8',
    anim: [ { type: 'move', dir: [0, -1, 0], amp: 3.1, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'scale', from: 1.1, to: 0.35, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 4 } ] }));
  const fluid = Array.from({ length: 9 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: spiral[0], color: '#7dd3fc', anim: { type: 'path', pts: spiral, wave: 'saw', rate: 0.4, phase: k / 9 } }));

  LIBRARY({
    id: 'orecchio',
    title: 'L\'orecchio',
    intro: 'L\'orecchio trasforma le <b>vibrazioni dell\'aria</b> in segnali per il cervello. Dentro la testa nasconde il muscolo più piccolo, l\'osso più piccolo del corpo e una "chiocciola" piena di liquido. Segui il viaggio del suono!',
    model: {
      rx: 0.15, ry: 0.6, speed: 0.4, height: 470, bg: 'body', fit: 1.05,
      parts: [
        { id: 'diapason', name: 'Diapason (la fonte del suono)', label: 'Diapason', color: '#9ca3af', pos: [-3.5, -0.6, 0], explode: [-0.6, 0, 0],
          info: '<p>Il suono nasce quando qualcosa <b>vibra</b>. Il diapason, colpito, vibra avanti e indietro centinaia di volte al secondo e spinge l\'aria intorno a sé.</p>',
          more: '<p>Il diapason dei musicisti vibra 440 volte al secondo (440 hertz): è la nota <b>La</b> usata per accordare gli strumenti. Più vibrazioni al secondo = suono più acuto.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 12, pos: [0, -0.3, 0] }, { t: 'sphere', r: 0.08, n: 8, m: 12, pos: [0, -0.62, 0], color: '#6b7280' },
            { t: 'torus', R: 0.15, r: 0.045, n: 16, m: 8, arc: 180, rot: [90, 0, 0], pos: [0, 0.15, 0] },
            { t: 'group', pos: [0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: 1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] },
            { t: 'group', pos: [-0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] } ] },
        { id: 'onde', name: 'Onde sonore', label: 'Onde sonore', color: '#38bdf8', explode: [0, 0, 0], chip: true,
          info: '<p>Le vibrazioni passano da una particella d\'aria all\'altra, come una spinta in una fila di persone: sono le <b>onde sonore</b>. Arrivano fino al nostro orecchio.</p>',
          more: '<p>Nell\'aria il suono viaggia a circa <b>340 metri al secondo</b>; nell\'acqua 4 volte più veloce. Nel vuoto dello spazio non si propaga: lì c\'è silenzio assoluto.</p>',
          shapes: rings },
        { id: 'padiglione', name: 'Padiglione auricolare', label: 'Padiglione', color: '#f5c6a5', explode: [-1.0, 0, 0],
          info: '<p>È la parte che vediamo e chiamiamo "orecchio". Con le sue curve raccoglie i suoni come un <b>imbuto</b> e li convoglia nel condotto.</p>',
          more: '<p>Le pieghe del padiglione modificano un po\' il suono a seconda della direzione da cui arriva: così il cervello capisce se un rumore viene da davanti, da dietro o dall\'alto. È fatto di <b>cartilagine</b>, non di osso.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, scale: [0.07, 1.05, 0.62], pos: [-1.97, 0.3, -0.1] },
            { t: 'pipe', r: 0.1, n: 10, curve: true, pts: [[-2.05, -0.15, 0.36], [-2.1, 0.55, 0.47], [-2.12, 1.1, 0.28], [-2.12, 1.3, -0.12], [-2.11, 0.95, -0.52], [-2.08, 0.3, -0.64], [-2.07, -0.35, -0.55], [-2.07, -0.75, -0.3]], color: '#f0b48e' },
            { t: 'sphere', r: 1, n: 10, m: 16, scale: [0.1, 0.32, 0.24], pos: [-2.02, -0.78, -0.18], color: '#f5c6a5' },
            { t: 'lathe', n: 24, rot: [0, 0, 90], pos: [-2.0, 0.08, 0.0], pts: [[0, -0.02], [0.2, 0.0], [0.34, 0.09], [0.38, 0.13]], ds: true, color: '#e8a782' },
            { t: 'pipe', r: 0.06, n: 8, curve: true, pts: [[-2.08, 0.75, 0.25], [-2.08, 0.85, -0.15], [-2.07, 0.45, -0.35]], color: '#f0b48e' },
            { t: 'sphere', r: 0.1, n: 8, m: 10, scale: [0.6, 1, 0.8], pos: [-2.07, 0.02, 0.36], color: '#f0b48e' } ] },
        { id: 'condotto', name: 'Condotto uditivo', label: 'Condotto uditivo', color: '#f9a8d4', alpha: 0.45, explode: [-0.5, 0, 0.3],
          info: '<p>Un tubicino lungo circa <b>2,5 cm</b> che porta il suono fino al timpano. Ha dei peletti e produce il <b>cerume</b>, che cattura polvere e insetti.</p>',
          more: '<p>Il cerume esce da solo, piano piano: per questo non bisogna infilare bastoncini nelle orecchie, si rischia di spingerlo verso il timpano.</p>',
          shapes: [ { t: 'pipe', r: 0.2, n: 18, curve: true, pts: CANAL, caps: false } ] },
        { id: 'timpano', name: 'Timpano', color: '#fda4af', alpha: 0.85, explode: [0, 0.3, 0.6], anim: { type: 'move', dir: [1, 0, 0], amp: 0.035, rate: V },
          info: '<p>Una membrana sottile e tesa come la pelle di un tamburo, alla fine del condotto. Quando arriva il suono <b>vibra</b> insieme all\'aria.</p>',
          more: '<p>Il timpano è spesso solo un decimo di millimetro e vibra anche per spostamenti più piccoli di un atomo! Un rumore troppo forte, però, lo può danneggiare.</p>',
          shapes: [ { t: 'cone', r: 0.3, h: 0.1, n: 28, rot: [0, 0, -90], pos: [0, 0, 0] }, { t: 'torus', R: 0.3, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#e11d48', alpha: 1 } ] },
        { id: 'martello', name: 'Martello', color: '#fef3c7', explode: [0.1, 0.8, 0.5], anim: { type: 'swing', axis: 'z', amp: -3, rate: V, pivot: [0.13, 0.5, 0] },
          info: '<p>Il primo dei tre <b>ossicini</b>. Il suo "manico" è attaccato al timpano: quando il timpano vibra, il martello si muove con lui.</p>',
          shapes: [ { t: 'pipe', r: 0.04, n: 8, curve: true, pts: [[0.03, -0.05, 0], [0.05, 0.2, 0], [0.1, 0.42, 0]] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [0.13, 0.52, 0] } ] },
        { id: 'incudine', name: 'Incudine', color: '#fde68a', explode: [0.3, 0.9, 0.5], anim: { type: 'swing', axis: 'z', amp: 3, rate: V, pivot: [0.32, 0.55, 0] },
          info: '<p>Il secondo ossicino, a forma di incudine da fabbro. Riceve il colpo dal martello e lo passa alla staffa.</p>',
          shapes: [ { t: 'sphere', r: 0.1, n: 10, m: 14, scale: [1.1, 0.9, 0.9], pos: [0.3, 0.52, 0] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.33, 0.47, 0], [0.42, 0.33, 0], [0.45, 0.19, 0]] }, { t: 'pipe', r: 0.03, n: 8, pts: [[0.36, 0.56, 0], [0.55, 0.6, -0.02]] } ] },
        { id: 'staffa', name: 'Staffa', color: '#fcd34d', explode: [0.5, 0.7, 0.5], anim: { type: 'move', dir: [1, 0, 0], amp: 0.025, rate: V },
          info: '<p>Il terzo ossicino, a forma di staffa per cavalcare: è <b>l\'osso più piccolo del corpo</b> (circa 3 mm). Spinge come uno stantuffo sulla "finestra ovale" della coclea.</p>',
          more: '<p>I tre ossicini funzionano come una <b>leva</b>: la spinta che arriva sulla finestra ovale è circa <b>20 volte</b> più forte di quella sul timpano. Serve perché il suono deve passare dall\'aria al liquido della coclea.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.22, 0.05], [0.68, 0.17, 0.06]] }, { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.12, -0.05], [0.68, 0.13, -0.06]] },
            { t: 'cyl', r: 0.08, h: 0.025, n: 16, rot: [0, 0, 90], scale: [1, 1, 0.6], pos: [0.7, 0.15, 0] } ] },
        { id: 'cassa', name: 'Cassa del timpano (orecchio medio)', label: 'Orecchio medio', color: '#fecdd3', alpha: 0.16, explode: [0.2, 0.4, 0.4],
          info: '<p>Una piccola cavità piena d\'<b>aria</b> dietro il timpano: qui stanno i tre ossicini. È l\'<b>orecchio medio</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.55, n: 14, m: 22, scale: [1, 1.05, 0.8], pos: [0.35, 0.22, 0] } ] },
        { id: 'tromba', name: 'Tromba di Eustachio', label: 'Tromba di Eustachio', color: '#f9a8d4', explode: [0.2, -0.4, 0.5],
          info: '<p>Un canale che collega l\'orecchio medio alla gola. Fa entrare e uscire l\'aria così la pressione è uguale dalle due parti del timpano.</p>',
          more: '<p>Quando in aereo o in montagna senti le orecchie "tappate", deglutire o sbadigliare apre la tromba di Eustachio: senti un "clic" e la pressione si pareggia.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: [[0.45, -0.25, 0.05], [0.6, -0.7, 0.25], [0.75, -1.2, 0.5], [0.85, -1.55, 0.65]] }, { t: 'cyl', r: 0.12, r2: 0.07, h: 0.18, n: 14, pos: [0.87, -1.62, 0.68], rot: [20, 0, -15] } ] },
        { id: 'coclea', name: 'Coclea (chiocciola)', label: 'Coclea', color: '#fbcfe8', explode: [0.7, -0.3, 0.3],
          info: '<p>Un tubicino arrotolato come il guscio di una <b>chiocciola</b>, pieno di liquido. La staffa fa muovere il liquido e migliaia di <b>cellule cigliate</b> trasformano il movimento in segnali elettrici.</p>',
          more: '<p>Ogni tratto della coclea "ascolta" note diverse: la base (vicino alla staffa) i suoni <b>acuti</b>, la punta quelli <b>gravi</b>. Le cellule cigliate sono circa 15 000 e non ricrescono: i rumori troppo forti (cuffie a tutto volume!) le possono rovinare per sempre.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: spiral }, { t: 'sphere', r: 0.15, n: 10, m: 14, pos: spiral[spiral.length - 1], color: '#f9a8d4' } ] },
        { id: 'liquido', name: 'Liquido che si muove', label: 'Liquido', color: '#7dd3fc', explode: [0.7, -0.3, 0.3], chip: true,
          info: '<p>Quando la staffa spinge, nel liquido della coclea parte un\'onda che corre lungo la chiocciola e fa piegare le ciglia delle cellule.</p>',
          shapes: fluid },
        { id: 'canali', name: 'Canali semicircolari (equilibrio)', label: 'Canali semicircolari', color: '#f9a8d4', explode: [0.6, 0.8, 0],
          info: '<p>Tre anelli pieni di liquido, uno per ogni direzione dello spazio. Quando muovi la testa il liquido si sposta e il cervello capisce come sei girato: servono per l\'<b>equilibrio</b>!</p>',
          more: '<p>Se giri su te stesso e ti fermi di colpo, il liquido continua a muoversi ancora un po\': ecco perché ti gira la testa. Insieme ai canali, due sacchettini (utricolo e sacculo) sentono la gravità e le accelerazioni.</p>',
          shapes: [ { t: 'sphere', r: 0.18, n: 12, m: 16, pos: [0.88, 0.22, 0], color: '#fbcfe8' },
            { t: 'torus', R: 0.3, r: 0.045, n: 26, m: 8, arc: 290, rot: [90, 0, 120], pos: [1.0, 0.62, 0.05] },
            { t: 'torus', R: 0.28, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 30, 90], pos: [1.12, 0.55, -0.3] },
            { t: 'torus', R: 0.27, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 200, 0], pos: [1.25, 0.32, 0.05] } ] },
        { id: 'nervo', name: 'Nervo acustico', label: 'Nervo acustico', color: '#fde047', explode: [1.0, 0, 0],
          info: '<p>Porta i segnali elettrici della coclea e dei canali dell\'equilibrio fino al <b>cervello</b>. È il cervello che riconosce una voce, una canzone o il miagolio del gatto.</p>',
          shapes: [ { t: 'pipe', r: 0.09, n: 12, curve: true, pts: NERVE }, { t: 'pipe', r: 0.06, n: 10, curve: true, pts: [[0.95, 0.25, 0.05], [1.5, 0.15, 0.1], [1.8, 0.0, 0.1]] } ]
            .concat(Array.from({ length: 5 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.8, phase: k / 5 }, { type: 'blink', color: '#38bdf8', rate: 1.6, phase: k / 5 } ] }))) }
      ]
    },
    steps: [
      { icon: '🔔', title: 'Il suono è una vibrazione', focus: ['diapason', 'onde', 'padiglione'], view: { rx: 0.1, ry: 0.5 },
        html: '<p>Quando qualcosa vibra, come il <b>diapason</b>, spinge l\'aria avanti e indietro. Le vibrazioni viaggiano nell\'aria come <b>onde</b>, finché arrivano alle nostre orecchie.</p><p class="tip">✋ Appoggia le dita sulla gola e di\' "aaa": senti le corde vocali che vibrano!</p>' },
      { icon: '👂', title: 'L\'orecchio esterno raccoglie', focus: ['padiglione', 'condotto', 'onde', 'timpano'], view: { rx: 0.15, ry: 0.95 }, zoom: 1.3,
        html: '<p>Il <b>padiglione</b> raccoglie i suoni come un imbuto e li manda nel <b>condotto uditivo</b>. In fondo c\'è il <b>timpano</b>, una membrana tesa come la pelle di un tamburo.</p>' },
      { icon: '🥁', title: 'Il timpano vibra', focus: ['timpano', 'martello', 'incudine', 'staffa', 'cassa'], view: { rx: 0.1, ry: -0.3 }, zoom: 2.4,
        html: '<p>Il suono fa <b>vibrare il timpano</b>. Dietro, nell\'<b>orecchio medio</b>, tre ossicini, <b>martello</b>, <b>incudine</b> e <b>staffa</b>, si passano la vibrazione e la rendono più forte, come una leva.</p><p class="tip">🦴 La staffa è l\'osso più piccolo del corpo: è grande come un chicco di riso!</p>' },
      { icon: '🐌', title: 'Nella chiocciola', focus: ['coclea', 'liquido', 'staffa', 'nervo'], view: { rx: 0.1, ry: -0.2 }, zoom: 1.6,
        html: '<p>La staffa spinge sul liquido della <b>coclea</b>. Il liquido si muove e piega le ciglia di migliaia di cellule, che producono <b>segnali elettrici</b>. La base della chiocciola sente gli acuti, la punta i suoni gravi.</p>' },
      { icon: '🧠', title: 'Il cervello ascolta', focus: ['nervo', 'coclea', 'canali'], view: { rx: 0.2, ry: 0.4 }, zoom: 1.3,
        html: '<p>Il <b>nervo acustico</b> porta i segnali al cervello, che li trasforma in quello che "sentiamo": parole, musica, rumori. Con due orecchie il cervello capisce anche <b>da dove</b> arriva un suono.</p>' },
      { icon: '🤸', title: 'Orecchie per stare in equilibrio', focus: ['canali', 'nervo'], view: { rx: 0.4, ry: -0.6 }, zoom: 2.0,
        html: '<p>L\'orecchio non serve solo a sentire! I tre <b>canali semicircolari</b>, pieni di liquido, dicono al cervello come si muove la testa. Così riesci a stare in equilibrio su una gamba sola.</p>' },
      { icon: '🌬️', title: 'La valvola della pressione', focus: ['tromba', 'cassa', 'timpano'], view: { rx: -0.1, ry: -0.5 }, zoom: 1.6,
        html: '<p>La <b>tromba di Eustachio</b> collega l\'orecchio medio alla gola e pareggia la pressione dell\'aria. Per questo in aereo, deglutendo o sbadigliando, le orecchie si "stappano".</p><p class="tip">🎧 Proteggi le orecchie: con le cuffie non superare metà volume.</p>' }
    ],
    facts: [
      { icon: '🔊', title: 'Si misura in decibel', html: 'L\'intensità del suono si misura in <b>decibel</b> (dB): un sussurro 30 dB, una conversazione 60 dB, un concerto rock 110 dB. Sopra gli 85 dB, a lungo, l\'udito si danneggia.' },
      { icon: '🐕', title: 'Suoni che non sentiamo', html: 'Noi sentiamo suoni da 20 a 20 000 vibrazioni al secondo. I cani arrivano a 45 000, i pipistrelli e i delfini oltre 100 000 (ultrasuoni)!' },
      { icon: '😴', title: 'Sempre accese', html: 'Le orecchie non si "spengono" mai, nemmeno quando dormi: è il cervello che ignora i rumori, ma una sveglia o il tuo nome ti svegliano.' },
      { icon: '🦉', title: 'Orecchie storte', html: 'Il barbagianni ha un orecchio più in alto dell\'altro: così capisce con precisione dove si nasconde un topolino al buio.' },
      { icon: '🎤', title: 'La tua voce registrata', html: 'La tua voce registrata ti sembra strana perché, quando parli, la senti anche attraverso le <b>ossa del cranio</b>, che la rendono più grave.' }
    ],
    quiz: [
      { type: 'order', q: 'Metti in ordine il viaggio del suono', items: ['Padiglione', 'Condotto uditivo', 'Timpano', 'Ossicini', 'Coclea', 'Nervo acustico'], explain: 'Dall\'orecchio esterno al medio, poi all\'interno e infine al cervello.' },
      { type: 'mc', q: 'Qual è l\'osso più piccolo del corpo umano?', options: ['Il martello', 'La staffa', 'La rotula', 'L\'incudine'], answer: 1, explain: 'La staffa, nell\'orecchio medio, misura circa 3 mm.' },
      { type: 'mc', q: 'Che cosa contiene la coclea?', options: ['Aria', 'Liquido', 'Sabbia', 'Sangue'], answer: 1, explain: 'La coclea è piena di liquido: il suo movimento piega le cellule cigliate.' },
      { type: 'tf', q: 'I canali semicircolari servono per l\'equilibrio.', answer: true, explain: 'Il liquido nei tre anelli segnala al cervello i movimenti della testa.' },
      { type: 'mc', q: 'Che cosa è il suono?', options: ['Una luce invisibile', 'Una vibrazione che viaggia nell\'aria', 'Un gas', 'Una corrente elettrica'], answer: 1, explain: 'Il suono è una vibrazione che si propaga in un materiale, come l\'aria o l\'acqua.' },
      { type: 'mc', q: 'Perché in aereo deglutire "stappa" le orecchie?', options: ['Perché pulisce il condotto', 'Perché apre la tromba di Eustachio e pareggia la pressione', 'Perché fa vibrare il timpano', 'Perché chiude la coclea'], answer: 1, explain: 'La tromba di Eustachio collega orecchio medio e gola e pareggia la pressione.' }
    ]
  });
})();
