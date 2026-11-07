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
    id: 'cuore',
    title: 'Il cuore umano',
    intro: 'Il cuore è un muscolo grande come il tuo pugno che batte circa <b>100 000 volte al giorno</b>. È una <b>pompa doppia</b>: la parte destra manda il sangue ai polmoni, la sinistra a tutto il corpo.',
    model: {
      rx: 0.12, ry: -0.25, speed: 0.75, height: 480, bg: 'body',
      phases: [ { from: 0, to: 0.18, label: 'Atri: si stringono', color: '#7c3aed' }, { from: 0.18, to: 0.56, label: 'Ventricoli: si stringono (sistole)', color: '#dc2626' }, { from: 0.56, to: 1, label: 'Riposo e riempimento (diastole)', color: '#0891b2' } ],
      parts: [
        { id: 'atrio-destro', name: 'Atrio destro', color: '#818cf8', alpha: 0.5, explode: [-0.6, 0.35, 0.2], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [-0.72, 0.42, 0.12] }),
          info: '<p>È la "sala d\'attesa" di destra: qui arriva il sangue <b>povero di ossigeno</b> che torna dal corpo attraverso le vene cave.</p>', shapes: [ ell([-0.72, 0.42, 0.12], [0.45, 0.45, 0.42]) ] },
        { id: 'ventricolo-destro', name: 'Ventricolo destro', color: '#4f46e5', alpha: 0.5, explode: [-0.45, -0.4, 0.5], anim: Object.assign(squeeze([0.19, 0.56], 0.84), { pivot: [-0.32, -0.38, 0.32] }),
          info: '<p>Spinge il sangue povero di ossigeno nell\'<b>arteria polmonare</b>, verso i polmoni. Le sue pareti sono più sottili di quelle del ventricolo sinistro: i polmoni sono vicini.</p>', shapes: [ ell([-0.32, -0.38, 0.32], [0.6, 0.8, 0.42], [0, 0, -15]) ] },
        { id: 'atrio-sinistro', name: 'Atrio sinistro', color: '#fca5a5', alpha: 0.5, explode: [0.55, 0.45, -0.35], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [0.42, 0.48, -0.3] }),
          info: '<p>Riceve il sangue <b>ricco di ossigeno</b> che arriva dai polmoni attraverso le vene polmonari.</p>', shapes: [ ell([0.42, 0.48, -0.3], [0.45, 0.36, 0.4]) ] },
        { id: 'ventricolo-sinistro', name: 'Ventricolo sinistro', color: '#dc2626', alpha: 0.5, explode: [0.55, -0.5, -0.1], anim: Object.assign(squeeze([0.19, 0.56], 0.86), { pivot: [0.3, -0.45, -0.05] }),
          info: '<p>È la camera più forte: con una parete muscolare spessa spinge il sangue ricco di ossigeno nell\'<b>aorta</b> e da lì in tutto il corpo, fino alla punta dei piedi.</p>',
          more: '<p>A ogni battito il ventricolo sinistro spinge circa <b>70 ml</b> di sangue: in un minuto circa 5 litri, cioè tutto il sangue che hai nel corpo!</p>', shapes: [ ell([0.3, -0.45, -0.05], [0.66, 0.95, 0.62], [0, 0, 22]) ] },
        { id: 'setto', name: 'Setto', color: '#fda4af', explode: [0, -0.4, 0.15],
          info: '<p>Una parete di muscolo che divide il cuore in due metà: così il sangue blu (destra) e quello rosso (sinistra) <b>non si mescolano mai</b>.</p>',
          shapes: [ { t: 'box', s: [0.06, 1.15, 0.62], pos: [-0.02, -0.38, 0.13], rot: [0, 31, 8] } ] },
        { id: 'tricuspide', name: 'Valvola tricuspide', label: 'Tricuspide', color: '#fbbf24', pos: [-0.55, 0.06, 0.24], explode: [-0.4, 0, 0.3],
          info: '<p>Una "porta a senso unico" tra atrio e ventricolo destro: si apre per far scendere il sangue e si chiude quando il ventricolo spinge, così il sangue non torna indietro.</p>', shapes: valve(AV, 1) },
        { id: 'mitrale', name: 'Valvola mitrale', label: 'Mitrale', color: '#fbbf24', pos: [0.4, 0.1, -0.18], explode: [0.45, 0, -0.2],
          info: '<p>La porta tra atrio e ventricolo sinistro. Ha due lembi e assomiglia alla mitra, il cappello dei vescovi: da qui il nome.</p>', shapes: valve(AV, 1) },
        { id: 'polmonare', name: 'Valvola polmonare', label: 'Valvola polmonare', color: '#fbbf24', pos: [-0.15, 0.4, 0.42], explode: [-0.2, 0.5, 0.4],
          info: '<p>All\'uscita del ventricolo destro: si apre quando il ventricolo spinge e si chiude subito dopo, per non far tornare indietro il sangue.</p>', shapes: valve(SL, -1) },
        { id: 'aortica', name: 'Valvola aortica', label: 'Valvola aortica', color: '#fbbf24', pos: [0.12, 0.36, 0.0], explode: [0.25, 0.55, 0],
          info: '<p>All\'uscita del ventricolo sinistro, all\'inizio dell\'aorta. Quando si chiude fa parte del rumore "tum-<b>TA</b>" del battito.</p>', shapes: valve(SL, -1) },
        { id: 'aorta', name: 'Aorta', color: '#ef4444', explode: [0.25, 0.85, -0.2],
          info: '<p>L\'arteria più grande del corpo: grossa quasi come un pollice. Parte dal ventricolo sinistro, fa una curva (l\'<b>arco aortico</b>) e porta il sangue ricco di ossigeno in tutto il corpo.</p>',
          shapes: [ { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[0.12, 0.33, 0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.8, -0.55]] },
            { t: 'pipe', r: 0.055, n: 10, pts: [[0.25, 1.4, -0.05], [0.2, 1.85, 0]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.45, 1.5, -0.2], [0.45, 1.9, -0.2]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.62, 1.45, -0.35], [0.7, 1.85, -0.4]] } ] },
        { id: 'arteria-polmonare', name: 'Arteria polmonare', color: '#3b82f6', explode: [0, 0.9, 0.45],
          info: '<p>Porta il sangue <b>povero di ossigeno</b> dal ventricolo destro ai due polmoni. È l\'unica arteria che trasporta sangue "blu"!</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: [[-0.15, 0.35, 0.42], [-0.08, 0.8, 0.45], [0.2, 1.05, 0.3]] },
            { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [-0.3, 1.06, 0.08], [-1.05, 1.0, 0]] }, { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [0.75, 1.02, 0.05], [1.25, 1.0, -0.1]] } ] },
        { id: 'vene-cave', name: 'Vene cave', color: '#2563eb', explode: [-0.85, 0.2, 0],
          info: '<p>Due grandi vene riportano al cuore il sangue usato: la <b>cava superiore</b> dalla testa e dalle braccia, la <b>cava inferiore</b> dal resto del corpo.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, pts: [[-0.78, 0.7, 0.1], [-0.8, 1.55, 0.1]] }, { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[-0.74, 0.15, 0.06], [-0.72, -0.6, 0], [-0.7, -1.35, 0]] } ] },
        { id: 'vene-polmonari', name: 'Vene polmonari', color: '#f87171', explode: [0.5, 0.5, -0.8],
          info: '<p>Quattro vene portano al cuore il sangue <b>appena caricato di ossigeno</b> nei polmoni.</p>',
          shapes: [ [[0.2, 0.42, -0.45], [-0.55, 0.45, -0.58]], [[0.2, 0.58, -0.45], [-0.5, 0.75, -0.62]], [[0.7, 0.42, -0.35], [1.25, 0.4, -0.42]], [[0.7, 0.58, -0.35], [1.25, 0.75, -0.48]] ].map((p) => ({ t: 'pipe', r: 0.065, n: 10, pts: p })) },
        { id: 'coronarie', name: 'Arterie coronarie', label: 'Coronarie', color: '#b91c1c', explode: [0, 0, 0.5],
          info: '<p>Anche il cuore ha bisogno di ossigeno! Le coronarie sono piccole arterie che girano sulla sua superficie come una corona e lo nutrono.</p>',
          more: '<p>Se una coronaria si chiude, una parte del muscolo del cuore resta senza ossigeno: è l\'<b>infarto</b>. Mangiare sano e muoversi tiene le arterie pulite.</p>',
          shapes: [ { t: 'pipe', r: 0.032, n: 8, curve: true, pts: [[0.1, 0.35, 0.18], [0.0, 0.1, 0.46], [-0.05, -0.45, 0.66], [0.18, -1.05, 0.45]] },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.0, 0.33, 0.22], [-0.5, 0.14, 0.52], [-0.9, -0.25, 0.32], [-0.75, -0.75, 0.1]] } ] },
        { id: 'nodi', name: 'Nodi del battito (pacemaker naturale)', label: 'Pacemaker naturale', color: '#facc15', explode: [-0.3, 0.3, 0.6],
          info: '<p>Il cuore batte <b>da solo</b>! Un gruppetto di cellule nell\'atrio destro, il <b>nodo seno-atriale</b>, produce un piccolo impulso elettrico che fa contrarre prima gli atri e poi, passando dal nodo atrio-ventricolare, i ventricoli.</p>',
          more: '<p>Gli impulsi elettrici del cuore si possono registrare con l\'<b>elettrocardiogramma</b> (ECG). Se il nodo non funziona bene, si impianta un pacemaker artificiale.</p>',
          shapes: [ { t: 'sphere', r: 0.07, n: 8, pos: [-0.68, 0.8, 0.3], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0, to: 0.08, ramp: 0.3 } },
            { t: 'sphere', r: 0.06, n: 8, pos: [-0.2, 0.06, 0.25], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0.12, to: 0.2, ramp: 0.3 } },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.68, 0.8, 0.3], [-0.45, 0.4, 0.3], [-0.2, 0.06, 0.25], [-0.05, -0.5, 0.3], [0.05, -1.0, 0.25]] } ] },
        { id: 'sangue-blu', name: 'Sangue povero di ossigeno', label: 'Sangue "blu"', color: '#3b82f6', noLabel: true,
          info: '<p>Il sangue che torna dal corpo ha consegnato l\'ossigeno alle cellule e porta via l\'<b>anidride carbonica</b>. Nei disegni si colora di blu, ma in realtà è rosso scuro.</p>', shapes: drops(BLUE, '#2563eb') },
        { id: 'sangue-rosso', name: 'Sangue ricco di ossigeno', label: 'Sangue rosso', color: '#ef4444', noLabel: true,
          info: '<p>Nei polmoni il sangue si ricarica di <b>ossigeno</b> e diventa rosso vivo. Il cuore lo spinge in tutto il corpo.</p>', shapes: drops(RED, '#ef4444') }
      ]
    },
    steps: [
      { icon: '🫀', title: 'Una pompa doppia', explode: 0,
        html: '<p>Il cuore ha <b>4 camere</b>: due <b>atri</b> in alto e due <b>ventricoli</b> in basso. La metà <b>destra</b> (a sinistra sullo schermo!) pompa il sangue verso i polmoni, la metà <b>sinistra</b> verso tutto il corpo.</p><p class="tip">🪞 Guardi il cuore di una persona che ti sta di fronte: la sua destra è la tua sinistra.</p>' },
      { icon: '⚡', title: 'Il battito parte da solo', focus: ['nodi', 'atrio-destro', 'atrio-sinistro'], loop: [0, 0.25],
        html: '<p>Il <b>nodo seno-atriale</b>, il nostro pacemaker naturale, lancia una piccola scintilla elettrica. L\'impulso si allarga sugli atri, poi passa al <b>nodo atrio-ventricolare</b> e scende verso i ventricoli.</p>' },
      { icon: '⬇️', title: 'Gli atri riempiono i ventricoli', focus: ['atrio-destro', 'atrio-sinistro', 'tricuspide', 'mitrale', 'sangue-blu', 'sangue-rosso'], loop: [0.55, 1.2 - 0.02],
        html: '<p>Mentre i ventricoli sono rilassati, il sangue scende dagli atri attraverso la <b>tricuspide</b> e la <b>mitrale</b>, aperte. Alla fine gli atri si stringono e danno l\'ultima spinta.</p>' },
      { icon: '💥', title: 'I ventricoli spingono', focus: ['ventricolo-destro', 'ventricolo-sinistro', 'polmonare', 'aortica', 'tricuspide', 'mitrale'], loop: [0.18, 0.6],
        html: '<p>I ventricoli si contraggono con forza (<b>sistole</b>). Le valvole tricuspide e mitrale si chiudono di scatto, quelle <b>polmonare</b> e <b>aortica</b> si aprono e il sangue esce nelle arterie.</p><p class="tip">🩺 "Tum-TA": il primo suono è la chiusura delle valvole tra atri e ventricoli, il secondo quella delle valvole delle arterie.</p>' },
      { icon: '🫁', title: 'Piccola circolazione: ai polmoni', focus: ['atrio-destro', 'ventricolo-destro', 'arteria-polmonare', 'vene-polmonari', 'vene-cave', 'sangue-blu', 'atrio-sinistro'],
        html: '<p>Il sangue "blu" arriva dalle <b>vene cave</b>, passa per atrio e ventricolo destro e va ai polmoni con l\'<b>arteria polmonare</b>. Lì lascia l\'anidride carbonica e prende ossigeno, poi torna all\'atrio sinistro con le <b>vene polmonari</b>.</p>' },
      { icon: '🏃', title: 'Grande circolazione: a tutto il corpo', focus: ['atrio-sinistro', 'ventricolo-sinistro', 'aorta', 'sangue-rosso', 'coronarie', 'vene-polmonari'],
        html: '<p>Il ventricolo sinistro spinge il sangue rosso nell\'<b>aorta</b> e da lì in tutte le arterie del corpo. Le prime a ricevere sangue sono le <b>coronarie</b>, che nutrono il cuore stesso!</p><p class="tip">⏱️ Una goccia di sangue fa il giro completo del corpo in circa un minuto.</p>' }
    ],
    facts: [
      { icon: '✊', title: 'Grande come un pugno', html: 'Il cuore pesa circa 300 grammi, come una grossa mela, ed è un po\' spostato a sinistra nel petto.' },
      { icon: '🔢', title: 'Instancabile', html: 'In una vita intera il cuore batte più di <b>2,5 miliardi</b> di volte senza mai fermarsi a riposare.' },
      { icon: '🐋', title: 'Il cuore più grande', html: 'Il cuore della balenottera azzurra pesa circa 180 kg: è il più grande del regno animale.' },
      { icon: '🏃‍♀️', title: 'Più veloce quando corri', html: 'A riposo un bambino ha circa 80–100 battiti al minuto; correndo il cuore accelera per portare più ossigeno ai muscoli.' }
    ],
    quiz: [
      { type: 'mc', q: 'Quante camere ha il cuore umano?', options: ['2', '3', '4', '6'], answer: 2, explain: 'Due atri (in alto) e due ventricoli (in basso).' },
      { type: 'mc', q: 'Dove va il sangue spinto dal ventricolo destro?', options: ['Al cervello', 'Ai polmoni', 'Alle gambe', 'Al fegato'], answer: 1, explain: 'Il ventricolo destro manda il sangue povero di ossigeno ai polmoni con l\'arteria polmonare.' },
      { type: 'mc', q: 'Qual è l\'arteria più grande del corpo?', options: ['La vena cava', 'L\'arteria polmonare', 'L\'aorta', 'La coronaria'], answer: 2, explain: 'L\'aorta parte dal ventricolo sinistro e porta il sangue ossigenato a tutto il corpo.' },
      { type: 'tf', q: 'Le valvole del cuore fanno passare il sangue in un solo senso.', answer: true, explain: 'Sono porte a senso unico: si chiudono per impedire al sangue di tornare indietro.' },
      { type: 'mc', q: 'Che cosa fa partire ogni battito?', options: ['Il cervello, a ogni battito', 'Un impulso elettrico del nodo seno-atriale', 'I polmoni quando respiri', 'Lo stomaco'], answer: 1, explain: 'Il cuore ha un suo "pacemaker naturale": il nodo seno-atriale.' },
      { type: 'order', q: 'Metti in ordine il viaggio del sangue che torna dal corpo', items: ['Vene cave', 'Atrio destro', 'Ventricolo destro', 'Arteria polmonare', 'Polmoni', 'Vene polmonari', 'Atrio sinistro', 'Ventricolo sinistro', 'Aorta'], explain: 'Prima la piccola circolazione (cuore destro → polmoni → cuore sinistro), poi la grande circolazione con l\'aorta.' }
    ]
  });
})();
