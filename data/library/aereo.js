/* L'aereo di linea (bimotore). Il muso guarda verso +x, alto = +y, l'ala destra è verso +z.
   Le ali sono basse (y = -0.3) con un piccolo diedro; i comandi (alettoni, equilibratore, timone) oscillano. */
(function () {
  const ROT = [0, 0, -90]; // porta l'asse y delle primitive lungo x
  const D = Math.PI / 180, DIH = 5;
  const FUS = [[0, -3.35], [0.1, -3.25], [0.24, -2.9], [0.38, -2.3], [0.49, -1.6], [0.52, -1.0], [0.52, 2.1], [0.5, 2.5], [0.45, 2.8], [0.36, 3.05], [0.24, 3.22], [0.1, 3.32], [0, 3.35]];
  /* pianta di un'ala (x, apertura) → estrusa sottile e ruotata nel piano XZ */
  const WING = [[1.0, 0], [-0.5, 0], [-1.45, 3.2], [-1.0, 3.2]];
  const wing = (side) => ({ t: 'group', pos: [0, -0.3, 0], rot: [-side * DIH, 0, 0], shapes: [
    { t: 'extrude', d: 0.09, pts: WING.map(([x, z]) => [x, z * side]), rot: [90, 0, 0], smooth: true },
    { t: 'extrude', d: 0.05, pts: [[-1.0, 3.2 * side], [-1.45, 3.2 * side], [-1.38, 3.32 * side], [-1.12, 3.35 * side]], rot: [90, 0, 0], color: '#94a3b8' } ] });
  /* superficie mobile incernierata lungo il bordo d'uscita dell'ala */
  const TEx = (z) => -0.5 - 0.297 * Math.abs(z), TEy = (z) => -0.3 + Math.abs(z) * Math.tan(DIH * D);
  const flapAt = (zc, len, chord, amp, base, color, rate) => {
    const side = Math.sign(zc);
    return { t: 'group', pos: [TEx(zc), TEy(zc), zc], rot: [-side * DIH, -side * 16.5, 0], anim: { type: 'swing', axis: 'z', amp, base: base || 0, wave: 'sin', rate: rate || 0.5 },
      shapes: [ { t: 'box', s: [chord, 0.03, len], pos: [-chord / 2, 0, 0], color, div: 1 } ] };
  };
  const nacelle = [[0.22, -0.55], [0.26, -0.35], [0.29, -0.05], [0.29, 0.25], [0.27, 0.45], [0.25, 0.55]];
  const engine = (z) => ({ t: 'group', pos: [0.75, -0.62, z], shapes: [
    { t: 'lathe', n: 28, pts: nacelle, rot: ROT, ds: true, color: '#e5e7eb' },
    { t: 'cyl', r: 0.17, r2: 0.05, h: 0.25, n: 16, rot: ROT, pos: [-0.65, 0, 0], color: '#6b7280' },
    { t: 'group', pos: [0.42, 0, 0], anim: { type: 'spin', axis: 'x', rate: 6 }, shapes: [
      { t: 'cone', r: 0.08, h: 0.14, n: 14, rot: ROT, color: '#475569' }, ...Array.from({ length: 14 }, (_, k) => ({ t: 'box', s: [0.012, 0.19, 0.06], pos: [0, 0.135 * Math.cos(k * 25.7 * D), 0.135 * Math.sin(k * 25.7 * D)], rot: [k * 25.7, 0, 0], color: '#94a3b8' })) ] },
    { t: 'cyl', r: 0.24, h: 0.02, n: 24, rot: ROT, pos: [0.25, 0, 0], color: '#1f2937' },
    { t: 'box', s: [0.7, 0.24, 0.05], pos: [0.0, 0.2, 0], color: '#cbd5e1' } ] });
  const flow = (y0, zz, top) => top
    ? [[2.2, y0, zz], [0.9, y0, zz], [0.45, y0 + 0.05, zz], [0.0, y0 + 0.1, zz], [-0.5, y0 + 0.04, zz], [-1.0, y0 - 0.12, zz], [-2.2, y0 - 0.45, zz]]
    : [[2.2, y0, zz], [0.9, y0, zz], [0.45, y0 - 0.02, zz], [0.0, y0 - 0.03, zz], [-0.5, y0 - 0.04, zz], [-1.0, y0 - 0.12, zz], [-2.2, y0 - 0.45, zz]];
  const puffs = (P, n, rate, color) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.04, n: 5, m: 8, pos: P[0], color, anim: { type: 'path', pts: P, wave: 'saw', rate, phase: k / n } }));
  const arrow = (from, dir, len, color) => {
    const rot = dir[1] > 0 ? [0, 0, 0] : dir[1] < 0 ? [180, 0, 0] : dir[0] > 0 ? [0, 0, -90] : [0, 0, 90];
    return { t: 'group', pos: from, rot, shapes: [ { t: 'cyl', r: 0.05, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.13, h: 0.3, n: 14, pos: [0, len, 0], color } ],
      anim: { type: 'scale', from: 0.92, to: 1.06, wave: 'sin01', rate: 0.8 } };
  };
  const winds = (side) => Array.from({ length: 16 }, (_, k) => ({ t: 'box', s: [0.08, 0.1, 0.01], pos: [1.85 - k * 0.24, 0.13, side * 0.513], color: '#1e293b', decal: 1 }));

  LIBRARY({
    id: 'aereo',
    title: 'L\'aereo',
    intro: 'Come fa un oggetto di <b>400 tonnellate</b> a stare in aria? Il segreto è nella forma delle <b>ali</b>: l\'aria che ci scorre intorno viene spinta in basso e l\'ala riceve una spinta verso l\'alto, la <b>portanza</b>. I motori servono a mantenere la velocità.',
    model: {
      rx: 0.5, ry: -0.7, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.15,
      parts: [
        { id: 'fusoliera', name: 'Fusoliera', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>È il "corpo" dell\'aereo, un lungo tubo di alluminio o fibra di carbonio. Dentro ci sono i passeggeri, sotto il pavimento i bagagli.</p>',
          more: '<p>In volo, a 11 000 metri, fuori la pressione è un quarto di quella al suolo e la temperatura è −50 °C. La fusoliera è <b>pressurizzata</b>: dentro si pompa aria come in un palloncino, per respirare normalmente. Per questo è a forma di tubo: regge meglio la pressione.</p>',
          shapes: [ { t: 'lathe', n: 30, pts: FUS, rot: ROT }, ...winds(1), ...winds(-1),
            { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, 0.522], color: '#2563eb', decal: 1 }, { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, -0.522], color: '#2563eb', decal: 1 },
            { t: 'box', s: [0.16, 0.34, 0.01], pos: [2.3, 0.0, 0.517], color: '#cbd5e1', decal: 1 } ] },
        { id: 'cabina', name: 'Cabina di pilotaggio', label: 'Cabina', color: '#1e293b', explode: [0.6, 0.2, 0],
          info: '<p>Davanti, dietro i finestrini, siedono i <b>piloti</b>, con la cloche (o la barra laterale), le manette dei motori e tanti schermi. Nel muso c\'è il <b>radar</b> meteo.</p>',
          more: '<p>Gran parte del volo è guidata dal <b>pilota automatico</b>, ma i piloti controllano tutto e fanno decollo e atterraggio. Gli aerei moderni sono "fly-by-wire": i comandi dei piloti arrivano ai computer, che muovono le superfici con motori idraulici.</p>',
          shapes: [ ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.14, 0.1, 0.12], pos: [2.98, 0.24, z], rot: [0, 0, -38], decal: 1 })),
            { t: 'cyl', r: 0.12, h: 0.05, n: 16, rot: ROT, pos: [3.3, 0, 0], color: '#94a3b8' } ] },
        { id: 'ali', name: 'Ali', color: '#cbd5e1', explode: [0, -0.3, 0],
          info: '<p>Le ali sono il pezzo più importante: la loro forma curva e l\'inclinazione spingono l\'aria verso il <b>basso</b>; per reazione l\'aria spinge l\'ala verso l\'<b>alto</b>. Dentro ci sono i <b>serbatoi</b> del carburante!</p>',
          more: '<p>Il profilo dell\'ala (bombato sopra, più piatto sotto) fa sì che l\'aria sopra corra più veloce e abbia una <b>pressione più bassa</b> di quella sotto (principio di Bernoulli). La differenza di pressione, su una superficie di centinaia di metri quadrati, solleva l\'aereo. Le punte piegate (<b>winglet</b>) riducono i vortici e fanno risparmiare carburante.</p>',
          shapes: [ wing(1), wing(-1) ] },
        { id: 'alettoni', name: 'Alettoni', color: '#f59e0b', explode: [0, -0.3, 0],
          info: '<p>Sono le "palette" vicino alla punta delle ali. Si muovono al contrario: uno su e uno giù. Così un\'ala sale e l\'altra scende e l\'aereo <b>si inclina</b> per fare le curve.</p>',
          shapes: [ flapAt(2.6, 0.84, 0.2, 15, 0, '#f59e0b'), flapAt(-2.6, 0.84, 0.2, -15, 0, '#f59e0b') ] },
        { id: 'ipersostentatori', name: 'Flap (ipersostentatori)', label: 'Flap', color: '#38bdf8', explode: [0, -0.5, 0],
          info: '<p>Al decollo e all\'atterraggio l\'aereo va più piano. I <b>flap</b> escono dal retro delle ali e si abbassano: l\'ala diventa più grande e più curva e dà portanza anche a bassa velocità.</p>',
          shapes: [ flapAt(1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25), flapAt(-1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25) ] },
        { id: 'motori', name: 'Motori a reazione (turbofan)', label: 'Motori', color: '#e5e7eb', explode: [0.4, -0.6, 0],
          info: '<p>Il grande <b>ventilatore</b> davanti risucchia tantissima aria e la spara all\'indietro. Per reazione l\'aereo viene spinto in avanti: è la <b>spinta</b>.</p>',
          more: '<p>Solo una parte dell\'aria entra nel "cuore" del motore: viene compressa, mescolata al cherosene e bruciata; i gas caldi fanno girare una turbina che muove il ventilatore. La maggior parte dell\'aria passa intorno (<b>flusso freddo</b>) e dà quasi tutta la spinta, con meno rumore e consumi.</p>',
          shapes: [ engine(1.15), engine(-1.15) ] },
        { id: 'deriva', name: 'Deriva', color: '#2563eb', explode: [-0.4, 0.6, 0],
          info: '<p>È la grande "pinna" verticale in coda. Come le penne di una freccia, tiene l\'aereo dritto e gli impedisce di sbandare a destra e a sinistra.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: [[-2.15, 0.2], [-3.05, 0.2], [-3.55, 1.55], [-3.2, 1.55]], smooth: true } ] },
        { id: 'timone', name: 'Timone di direzione', label: 'Timone', color: '#f97316', explode: [-0.4, 0.6, 0],
          info: '<p>La parte mobile della deriva. Girandolo a destra o a sinistra il muso dell\'aereo si sposta da quella parte. Il pilota lo comanda con i <b>pedali</b>.</p>',
          shapes: [ { t: 'group', pos: [-3.27, 0.88, 0], rot: [0, 0, 20.3], anim: { type: 'swing', axis: 'y', amp: 14, rate: 0.35 }, shapes: [ { t: 'box', s: [0.2, 1.3, 0.05], pos: [-0.1, 0, 0], div: 1 } ] } ] },
        { id: 'stabilizzatori', name: 'Stabilizzatori orizzontali', label: 'Stabilizzatori', color: '#cbd5e1', explode: [-0.5, 0.2, 0],
          info: '<p>Le piccole ali in coda tengono l\'aereo in equilibrio, perché non "picchi" in avanti o si impenni.</p>',
          shapes: [1, -1].map((s) => ({ t: 'extrude', d: 0.05, pts: [[-2.35, 0], [-3.0, 0], [-3.4, 1.25 * s], [-3.15, 1.25 * s]].map(([x, z], i) => [x, i < 2 ? 0 : z]), rot: [90, 0, 0], pos: [0, 0.12, 0] })) },
        { id: 'equilibratori', name: 'Equilibratori', color: '#f59e0b', explode: [-0.5, 0.2, 0],
          info: '<p>Sono le parti mobili degli stabilizzatori. Se si alzano, la coda va giù e il muso <b>sale</b>; se si abbassano, il muso <b>scende</b>. Il pilota li comanda tirando o spingendo la cloche.</p>',
          shapes: [1, -1].map((s) => ({ t: 'group', pos: [-3.0 - 0.32 * 0.62, 0.12, 0.62 * s], rot: [0, -s * 17.7, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.3 }, shapes: [ { t: 'box', s: [0.16, 0.03, 1.0], pos: [-0.08, 0, 0], div: 1 } ] })) },
        { id: 'carrello', name: 'Carrello', color: '#374151', explode: [0, -0.6, 0],
          info: '<p>Le ruote su cui l\'aereo corre al decollo e all\'atterraggio. Dopo il decollo si <b>ritirano</b> dentro la pancia, così non fanno resistenza all\'aria.</p>',
          more: '<p>Le gomme degli aerei sono gonfiate con <b>azoto</b> a pressioni altissime (circa 14 bar) e toccano terra a quasi 250 km/h. Gli ammortizzatori assorbono il colpo dell\'atterraggio.</p>',
          shapes: [ ...[0.55, -0.55].flatMap((z) => [ { t: 'cyl', r: 0.035, h: 0.55, n: 10, pos: [-0.25, -0.75, z], color: '#9ca3af' }, { t: 'box', s: [0.4, 0.04, 0.08], pos: [-0.25, -1.0, z], color: '#6b7280' },
              ...[-0.12, 0.12].map((dx) => ({ t: 'cyl', r: 0.12, h: 0.1, n: 18, rot: [90, 0, 0], pos: [-0.25 + dx, -1.06, z] })) ]),
            { t: 'cyl', r: 0.03, h: 0.5, n: 10, pos: [2.5, -0.68, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.09, h: 0.1, n: 16, rot: [90, 0, 0], pos: [2.5, -0.98, 0] } ] },
        { id: 'aria', name: 'Flusso d\'aria', label: 'Flusso d\'aria', color: '#0ea5e9', noLabel: true, explode: [0, 0, 1.2],
          info: '<p>L\'aria che passa <b>sopra</b> l\'ala (pallini blu scuri) corre più veloce di quella che passa <b>sotto</b> (azzurri), e alla fine viene tutta spinta un po\' verso il basso.</p>',
          shapes: puffs(flow(-0.1, 1.6, true), 9, 0.75, '#0369a1').concat(puffs(flow(-0.32, 1.6, false), 9, 0.5, '#7dd3fc')) },
        { id: 'forze', name: 'Le quattro forze del volo', label: 'Forze', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>In volo agiscono quattro forze: <b>portanza</b> (verde, verso l\'alto, dalle ali), <b>peso</b> (rosso, verso il basso), <b>spinta</b> (blu, in avanti, dai motori) e <b>resistenza</b> (arancione, l\'aria che frena).</p>',
          more: '<p>In volo livellato a velocità costante le forze si bilanciano: portanza = peso e spinta = resistenza. Per salire il pilota aumenta la portanza (velocità o inclinazione delle ali); per accelerare dà più spinta.</p>',
          shapes: [ arrow([0, 0.55, 0], [0, 1, 0], 1.0, '#22c55e'), arrow([0, -0.55, 0], [0, -1, 0], 1.0, '#ef4444'), arrow([3.4, 0, 0], [1, 0, 0], 0.6, '#3b82f6'), arrow([-3.4, 0, 0], [-1, 0, 0], 0.45, '#f97316') ] }
      ]
    },
    steps: [
      { icon: '✈️', title: 'Più pesante dell\'aria', explode: 0,
        html: '<p>Un aereo di linea pesa centinaia di tonnellate, eppure vola! Non galleggia come un pallone: sta su perché si <b>muove velocissimo</b> e le ali, attraversando l\'aria, ricevono una spinta verso l\'alto.</p>' },
      { icon: '⚖️', title: 'Le quattro forze', focus: ['forze', 'fusoliera', 'ali', 'motori'], explode: 0, view: { rx: 0.3, ry: -0.35 },
        html: '<p><b>Portanza</b> su, <b>peso</b> giù, <b>spinta</b> avanti, <b>resistenza</b> indietro. Per volare dritto la portanza deve bilanciare il peso e la spinta deve vincere la resistenza dell\'aria.</p>' },
      { icon: '🪽', title: 'Il segreto delle ali', focus: ['ali', 'aria'], explode: 0, view: { rx: 0.05, ry: -0.05 }, zoom: 1.15,
        html: '<p>L\'ala è un po\' <b>inclinata</b> e curva. L\'aria sopra scorre più veloce e la sua pressione diminuisce; sotto la pressione è più alta. L\'ala viene "risucchiata" verso l\'alto e intanto spinge l\'aria verso il basso.</p><p class="tip">🖐️ Prova: dal finestrino dell\'auto (con un adulto!) metti la mano piatta e inclinala un pochino: la senti salire.</p>' },
      { icon: '🌀', title: 'I motori danno la spinta', focus: ['motori'], explode: 0.2, view: { rx: 0.15, ry: 0.5 },
        html: '<p>Il grande ventilatore dei <b>motori a reazione</b> risucchia aria davanti e la spara indietro fortissimo. Per reazione l\'aereo è spinto in avanti, come un palloncino che si sgonfia.</p>' },
      { icon: '🕹️', title: 'Come si guida: tre comandi', focus: ['alettoni', 'equilibratori', 'timone', 'deriva', 'stabilizzatori'], explode: 0, view: { rx: 0.45, ry: -1.0 },
        html: '<p>Gli <b>alettoni</b> (sulle ali) fanno inclinare l\'aereo a destra o a sinistra. Gli <b>equilibratori</b> (in coda) alzano o abbassano il muso. Il <b>timone</b> (sulla deriva) sposta il muso a destra o a sinistra.</p>' },
      { icon: '🛬', title: 'Decollo e atterraggio', focus: ['ipersostentatori', 'carrello', 'ali'], explode: 0, view: { rx: -0.1, ry: -0.7 },
        html: '<p>Andando piano le ali danno meno portanza. Allora escono i <b>flap</b>: rendono l\'ala più grande e più curva. Il <b>carrello</b> esce per toccare la pista e si ritira dopo il decollo.</p>' },
      { icon: '🧑‍✈️', title: 'Fusoliera e cabina', focus: ['fusoliera', 'cabina'], explode: 0.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>Nella <b>fusoliera</b> viaggiano passeggeri e bagagli; è pressurizzata perché a 11 000 metri l\'aria è troppo sottile per respirare. Nella <b>cabina di pilotaggio</b> i piloti controllano tutto, aiutati dal pilota automatico.</p>' }
    ],
    facts: [
      { icon: '🛩️', title: '12 secondi di volo', html: 'Il primo volo a motore dei fratelli <b>Wright</b> (1903) durò 12 secondi e percorse 37 metri: meno della lunghezza di un aereo di linea di oggi!' },
      { icon: '🎨', title: 'Leonardo e il volo', html: '<b>Leonardo da Vinci</b>, 500 anni fa, studiava il volo degli uccelli e disegnava macchine volanti, perfino una "vite aerea" simile all\'elicottero.' },
      { icon: '⛽', title: 'Tanto carburante', html: 'Un grande aereo di linea può caricare più di <b>200 000 litri</b> di cherosene, quasi tutti nelle ali.' },
      { icon: '⚡', title: 'Fulmini? Nessun problema', html: 'Ogni aereo di linea viene colpito da un fulmine circa una volta l\'anno. La corrente scorre sulla pelle di metallo e i passeggeri sono al sicuro, come in una gabbia.' }
    ],
    quiz: [
      { type: 'mc', q: 'Come si chiama la forza che tiene su l\'aereo?', options: ['Spinta', 'Portanza', 'Resistenza', 'Peso'], answer: 1, explain: 'La portanza nasce dalle ali e bilancia il peso dell\'aereo.' },
      { type: 'mc', q: 'Che cosa danno i motori a reazione?', options: ['La portanza', 'La spinta in avanti', 'Il peso', 'L\'equilibrio'], answer: 1, explain: 'Spingono l\'aria all\'indietro e, per reazione, l\'aereo va avanti.' },
      { type: 'mc', q: 'Quali superfici fanno inclinare l\'aereo a destra o a sinistra?', options: ['Il timone', 'Gli alettoni', 'Il carrello', 'I finestrini'], answer: 1, explain: 'Gli alettoni si muovono in modo opposto sulle due ali e fanno inclinare l\'aereo.' },
      { type: 'tf', q: 'Sopra l\'ala l\'aria scorre più veloce e ha una pressione più bassa.', answer: true, explain: 'La differenza di pressione tra sotto e sopra spinge l\'ala verso l\'alto.' },
      { type: 'mc', q: 'A che cosa servono i flap?', options: ['A frenare in volo ad alta quota', 'A dare più portanza quando l\'aereo va piano', 'A fare luce', 'A raffreddare i motori'], answer: 1, explain: 'Al decollo e all\'atterraggio i flap rendono l\'ala più grande e curva.' },
      { type: 'mc', q: 'Dove si trova la maggior parte del carburante?', options: ['Nella coda', 'Nelle ali', 'Nella cabina', 'Sotto i sedili'], answer: 1, explain: 'I serbatoi principali sono dentro le ali.' }
    ]
  });
})();
