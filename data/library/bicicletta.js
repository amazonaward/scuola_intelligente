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
    id: 'bicicletta',
    title: 'La bicicletta',
    intro: 'La bicicletta è una delle macchine più <b>efficienti</b> mai inventate: con la forza delle tue gambe vai 3–4 volte più veloce che a piedi. Pedali, catena, ingranaggi, leve e attrito: scopri come lavorano insieme!',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.35, height: 450,
      parts: [
        { id: 'telaio', name: 'Telaio', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>È lo "scheletro" della bici: tubi uniti a formare due <b>triangoli</b>. Il triangolo è la forma più rigida che esista: non si deforma anche se ci salti sopra.</p>',
          more: '<p>I telai sono di acciaio, alluminio o <b>fibra di carbonio</b>. Un telaio da corsa in carbonio pesa meno di 1 kg ma regge il peso di un adulto che pedala su strade sconnesse: merito della forma a triangoli, usata anche nei ponti e nelle gru.</p>',
          shapes: [ tube([BB[0], BB[1], 0], [0.79, 1.28, 0], 0.045), tube([-0.4, 1.47, 0], [0.73, 1.47, 0], 0.035), tube([BB[0], BB[1], 0], [-0.42, 1.56, 0], 0.038),
            tube([BB[0], BB[1], 0.05], [RA[0], RA[1], 0.07], 0.022), tube([BB[0], BB[1], -0.05], [RA[0], RA[1], -0.07], 0.022),
            tube([-0.4, 1.44, 0.03], [RA[0], RA[1], 0.07], 0.02), tube([-0.4, 1.44, -0.03], [RA[0], RA[1], -0.07], 0.02),
            { t: 'cyl', r: 0.055, h: 0.3, n: 16, pos: [0.76, 1.4, 0], rot: [0, 0, -15], color: '#b91c1c' }, { t: 'cyl', r: 0.06, h: 0.16, n: 16, pos: [BB[0], BB[1], 0], rot: [90, 0, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.05, 0.004], pos: [0.3, 0.95, 0.046], rot: [0, 0, 32], color: '#f8fafc', decal: 1 } ] },
        { id: 'sterzo', name: 'Forcella e manubrio', label: 'Manubrio', color: '#374151', explode: [0.5, 0.3, 0],
          info: '<p>Il <b>manubrio</b> fa girare la <b>forcella</b> e la ruota davanti: così scegli la direzione. Serve anche a mantenere l\'equilibrio con piccole correzioni continue.</p>',
          more: '<p>La forcella è inclinata e curvata in avanti: questo fa sì che la ruota tenda a "raddrizzarsi" da sola. Per questo una bici lanciata a velocità sta in piedi anche senza nessuno sopra!</p>',
          shapes: [ { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, 0.07], [0.88, 1.0, 0.07], [0.98, 0.78, 0.06], [FA[0], FA[1], 0.06]] },
            { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, -0.07], [0.88, 1.0, -0.07], [0.98, 0.78, -0.06], [FA[0], FA[1], -0.06]] },
            { t: 'box', s: [0.1, 0.05, 0.18], pos: [0.79, 1.27, 0], rot: [0, 0, -15] },
            tube([0.72, 1.55, 0], [0.68, 1.72, 0], 0.028), tube([0.68, 1.72, 0], [0.82, 1.74, 0], 0.025),
            { t: 'pipe', r: 0.022, n: 10, curve: true, pts: [[0.72, 1.76, -0.4], [0.82, 1.74, -0.25], [0.82, 1.74, 0], [0.82, 1.74, 0.25], [0.72, 1.76, 0.4]] },
            { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, 0.36], rot: [90, 0, 0], color: '#111827' }, { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, -0.36], rot: [90, 0, 0], color: '#111827' },
            { t: 'cyl', r: 0.03, h: 0.025, n: 14, pos: [0.82, 1.79, -0.18], color: '#facc15' } ] },
        { id: 'ruota-anteriore', name: 'Ruota anteriore', label: 'Ruota davanti', color: '#9ca3af', pos: [FA[0], FA[1], 0], explode: [0.7, 0, 0], anim: WHEEL,
          info: '<p>La ruota davanti gira libera e segue lo sterzo. I <b>raggi</b> sottili tengono il cerchio rotondo tirandolo dal centro, come le corde di una ragnatela.</p>',
          more: '<p>I raggi lavorano <b>in tensione</b>: ognuno è tirato forte, e così una ruota di meno di 1 kg regge 100 kg. Al centro il <b>mozzo</b> ha dei cuscinetti a sfera che riducono l\'attrito.</p>',
          shapes: wheel() },
        { id: 'ruota-posteriore', name: 'Ruota posteriore (motrice)', label: 'Ruota dietro', color: '#9ca3af', pos: [RA[0], RA[1], 0], explode: [-0.7, 0, 0], anim: WHEEL,
          info: '<p>È la ruota che <b>spinge</b>: la catena fa girare i pignoni attaccati al suo mozzo. La ruota spinge indietro la strada… e la strada spinge avanti te!</p>',
          shapes: wheel() },
        { id: 'pneumatici', name: 'Pneumatici', color: '#1f2937', explode: [0, -0.35, 0],
          info: '<p>Le gomme sono piene d\'<b>aria</b> compressa: fanno da cuscino sulle buche. Il battistrada "aggrappa" l\'asfalto grazie all\'<b>attrito</b>.</p>',
          more: '<p>Una gomma da corsa è gonfiata a circa 7 bar: sette volte la pressione dell\'aria intorno a noi. Le gomme sgonfie si schiacciano di più e fanno più attrito: si fa molta più fatica!</p>',
          shapes: [FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.645, r: 0.042, n: 36, m: 6, rot: [90, 0, 0], pos: [x, y, 0] })).concat([FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.615, r: 0.022, n: 36, m: 4, rot: [90, 0, 0], pos: [x, y, 0], color: '#78350f' }))) },
        { id: 'pedivelle', name: 'Pedali e pedivelle', label: 'Pedali', color: '#6b7280', pos: [BB[0], BB[1], 0], explode: [0, -0.3, 0.7], anim: PED,
          info: '<p>Spingi sui <b>pedali</b>: le <b>pedivelle</b> sono due leve che trasformano la spinta delle gambe in una rotazione, come la manovella di un macinino.</p>',
          more: '<p>Le due pedivelle sono a 180°: quando una gamba spinge giù, l\'altra risale. La spinta è più efficace quando la pedivella è orizzontale: lì la <b>leva</b> è più lunga.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.5, n: 10, rot: [90, 0, 0], color: '#d1d5db' },
            { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, 0.17, 0.24] }, { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, -0.17, -0.24] },
            { t: 'group', pos: [0, 0.34, 0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] },
            { t: 'group', pos: [0, -0.34, -0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] } ] },
        { id: 'corona', name: 'Corona (ruota dentata grande)', label: 'Corona', color: '#94a3b8', pos: [BB[0], BB[1], ZC], explode: [0, -0.3, 0.45], anim: PED,
          info: '<p>È la grande ruota dentata attaccata ai pedali. I suoi <b>denti</b> si infilano nella catena e la tirano.</p>',
          shapes: [ { t: 'extrude', d: 0.02, pts: gear(RR + 0.02, 32, 0.022) }, { t: 'cyl', r: 0.07, h: 0.04, n: 16, rot: [90, 0, 0], color: '#475569' } ]
            .concat([0, 72, 144, 216, 288].map((a) => ({ t: 'box', s: [0.15, 0.03, 0.03], pos: [0.08 * Math.cos(a * Math.PI / 180), 0.08 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#475569' }))) },
        { id: 'pignoni', name: 'Pignoni (pacco pignoni)', label: 'Pignoni', color: '#cbd5e1', pos: [RA[0], RA[1], ZC], explode: [-0.4, -0.3, 0.45], anim: WHEEL,
          info: '<p>Sono le ruote dentate piccole sulla ruota dietro. Più il pignone è <b>piccolo</b>, più giri fa la ruota per ogni pedalata: vai veloce, ma fai più fatica.</p>',
          more: '<p>Qui la corona ha 32 denti e il pignone usato ne ha 16: <b>32 : 16 = 2</b>, quindi a ogni giro di pedali la ruota fa 2 giri. È il <b>rapporto</b> di trasmissione.</p>',
          shapes: [0.13, 0.115, 0.1, 0.085, 0.07].map((r, i) => ({ t: 'extrude', d: 0.012, pts: gear(r, Math.round(r * 160), 0.014), pos: [0, 0, -0.1 + i * 0.025 + 0.025] })) },
        { id: 'catena', name: 'Catena', color: '#475569', explode: [0, -0.3, 0.45],
          info: '<p>La catena è fatta di tante <b>maglie</b> unite da perni. Trasmette il movimento dalla corona (davanti) ai pignoni (dietro), senza scivolare.</p>',
          more: '<p>Una catena di bici ha circa 110 maglie ed è efficiente al 98%: quasi tutta la forza delle gambe arriva alla ruota. Va tenuta <b>pulita e oliata</b>, altrimenti l\'attrito ruba energia e la consuma.</p>',
          shapes: links },
        { id: 'cambio', name: 'Cambio (deragliatore)', label: 'Cambio', color: '#1f2937', pos: [-1.0, 0.43, ZC + 0.02], explode: [-0.4, -0.6, 0.6],
          info: '<p>Il <b>cambio</b> sposta la catena da un pignone all\'altro. Le due rotelline tengono la catena sempre tesa.</p>',
          more: '<p>In salita usi un pignone <b>grande</b>: la ruota gira meno a ogni pedalata, ma serve meno forza. In pianura o in discesa un pignone piccolo: più velocità. È lo stesso principio delle marce dell\'auto.</p>',
          shapes: [ { t: 'box', s: [0.05, 0.2, 0.04], pos: [0.0, 0.1, 0], rot: [0, 0, -20] },
            { t: 'group', pos: [-0.02, 0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'group', pos: [0.01, -0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'box', s: [0.12, 0.2, 0.012], pos: [0, 0, 0.03], color: '#6b7280', alpha: 0.9 } ] },
        { id: 'freni', name: 'Freni', color: '#111827', explode: [0, 0.45, 0],
          info: '<p>Tirando la leva, un cavo d\'acciaio stringe due <b>pattini</b> di gomma contro il cerchio. Lo strofinio (<b>attrito</b>) rallenta la ruota.</p>',
          more: '<p>Frenando, l\'energia del movimento diventa <b>calore</b>: dopo una lunga discesa i cerchi o i dischi dei freni scottano! Molte bici moderne hanno freni a <b>disco</b>, che funzionano bene anche sul bagnato.</p>',
          shapes: [ { t: 'box', s: [0.1, 0.05, 0.2], pos: [0.86, 1.3, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, 0.09], rot: [0, 0, -20], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, -0.09], rot: [0, 0, -20], color: '#f97316' },
            { t: 'box', s: [0.1, 0.05, 0.2], pos: [-0.62, 1.28, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, 0.1], rot: [0, 0, 30], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, -0.1], rot: [0, 0, 30], color: '#f97316' },
            { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, 0.3], rot: [0, 0, -15], color: '#9ca3af' }, { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, -0.3], rot: [0, 0, -15], color: '#9ca3af' },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, 0.3], [0.6, 1.7, 0.15], [0.7, 1.45, 0.05], [0.86, 1.33, 0]] },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, -0.3], [0.55, 1.6, -0.1], [0.2, 1.5, -0.04], [-0.3, 1.5, -0.04], [-0.6, 1.33, 0]] } ] },
        { id: 'sella', name: 'Sella', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>La <b>sella</b> regge il tuo peso. Si alza e si abbassa: è giusta quando, con il pedale in basso, la gamba è quasi distesa.</p>',
          shapes: [ tube([-0.42, 1.56, 0], [-0.47, 1.76, 0], 0.025, '#9ca3af'),
            { t: 'extrude', d: 0.12, pts: [[-0.2, 0], [0.0, 0.02], [0.18, 0.015], [0.24, 0.0], [0.2, -0.03], [0.0, -0.035], [-0.2, -0.04], [-0.25, -0.01]], pos: [-0.45, 1.8, 0], smooth: true },
            { t: 'sphere', r: 1, n: 8, m: 14, scale: [0.1, 0.035, 0.11], pos: [-0.6, 1.79, 0] } ] },
        { id: 'luci', name: 'Luci e catarifrangenti', label: 'Luci', color: '#f8fafc', explode: [0, 0.3, 0.3],
          info: '<p>Per essere visti: luce <b>bianca</b> davanti e <b>rossa</b> dietro, più i catarifrangenti sui pedali e sui raggi. Sono obbligatori quando è buio!</p>',
          more: '<p>Il <b>catarifrangente</b> non fa luce da solo: è fatto di tanti piccoli angoli a specchio che rimandano la luce dei fari proprio verso l\'auto che l\'ha mandata.</p>',
          shapes: [ { t: 'cyl', r: 0.045, h: 0.1, n: 16, rot: [0, 0, 90], pos: [0.9, 1.66, 0], color: '#111827' }, { t: 'cyl', r: 0.04, h: 0.01, n: 16, rot: [0, 0, 90], pos: [0.955, 1.66, 0], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.6 } },
            { t: 'box', s: [0.03, 0.08, 0.06], pos: [-0.68, 1.66, 0], color: '#dc2626', anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 2 } } ] }
      ]
    },
    steps: [
      { icon: '🚲', title: 'Una macchina semplice e geniale', explode: 0,
        html: '<p>La bicicletta è fatta di poche parti: un <b>telaio</b>, due <b>ruote</b>, i <b>pedali</b> con la <b>catena</b>, lo <b>sterzo</b> e i <b>freni</b>. Il motore sei tu!</p><p>Pedalando usi meno energia che camminando, ma vai molto più veloce.</p>' },
      { icon: '🦵', title: 'Pedali e pedivelle: due leve', focus: ['pedivelle', 'corona'], explode: 0.3, view: { rx: 0.1, ry: -0.1 },
        html: '<p>Le <b>pedivelle</b> sono leve: spingendo il pedale fai girare l\'asse centrale. Una gamba spinge giù mentre l\'altra risale: la spinta non si ferma mai.</p><p class="tip">🔧 La spinta è più forte con la pedivella orizzontale: lì la leva lavora meglio.</p>' },
      { icon: '⛓️', title: 'Corona, catena e pignone', focus: ['corona', 'catena', 'pignoni', 'pedivelle'], explode: 0, zoom: 1.2, view: { rx: 0.08, ry: -0.05 },
        html: '<p>La <b>corona</b> tira la <b>catena</b> e la catena fa girare il <b>pignone</b> sulla ruota dietro. La corona ha 32 denti, il pignone 16: la metà!</p><p>Così, a <b>ogni giro di pedali la ruota fa 2 giri</b>. Guarda: il pedale fa un giro mentre la ruota ne fa due.</p>' },
      { icon: '⚙️', title: 'Il cambio: salita o pianura?', focus: ['cambio', 'pignoni', 'catena'], explode: 0.2, view: { rx: 0.2, ry: -0.75 },
        html: '<p>Il <b>cambio</b> sposta la catena su pignoni diversi. Pignone <b>grande</b>: pedali facilmente ma vai piano (ottimo in salita). Pignone <b>piccolo</b>: vai veloce ma serve più forza.</p><p class="tip">🏔️ È un compromesso tra forza e velocità: le marce dell\'auto funzionano allo stesso modo.</p>' },
      { icon: '🛞', title: 'Ruote, raggi e gomme', focus: ['ruota-anteriore', 'ruota-posteriore', 'pneumatici'], explode: 0.2, view: { rx: 0.15, ry: -0.4 },
        html: '<p>I <b>raggi</b> tirano il cerchio verso il centro e lo tengono perfettamente rotondo. Le <b>gomme</b> piene d\'aria assorbono le buche e "aggrappano" la strada grazie all\'attrito.</p><p>La ruota dietro spinge la strada all\'indietro… e la strada spinge te in avanti!</p>' },
      { icon: '🤸', title: 'Sterzo ed equilibrio', focus: ['sterzo', 'ruota-anteriore', 'telaio'], explode: 0, view: { rx: 0.3, ry: -0.9 },
        html: '<p>Per stare in equilibrio fai continuamente piccole correzioni con il <b>manubrio</b>: se cadi a destra, sterzi un po\' a destra e la bici si rimette sotto di te.</p><p>Le ruote che girano e la forcella inclinata aiutano: per questo da fermi è difficilissimo stare in piedi, in corsa è facile.</p>' },
      { icon: '🛑', title: 'Freni: l\'attrito che salva', focus: ['freni', 'ruota-anteriore', 'ruota-posteriore'], explode: 0, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Tiri la leva, il cavo stringe i <b>pattini</b> contro il cerchio e l\'<b>attrito</b> rallenta la ruota. L\'energia del movimento diventa calore.</p><p class="tip">⚠️ Usa sempre tutti e due i freni insieme, con dolcezza: solo quello davanti, a tutta forza, può farti ribaltare in avanti!</p>' }
    ],
    facts: [
      { icon: '🪵', title: 'Senza pedali', html: 'La prima "bicicletta" (1817, Karl Drais) era di legno e senza pedali: si spingeva con i piedi per terra, come le bici senza pedali dei bambini piccoli.' },
      { icon: '🎡', title: 'La ruota gigante', html: 'Prima dell\'invenzione della catena, i pedali erano attaccati alla ruota davanti: per andare veloci si costruivano bici con ruote enormi, alte fino a 1,5 metri (i <b>bicicli</b>).' },
      { icon: '🏆', title: 'Il Giro d\'Italia', html: 'Il Giro d\'Italia si corre dal 1909. I corridori percorrono circa <b>3500 km</b> in tre settimane, superando anche passi alpini oltre i 2000 metri.' },
      { icon: '🌍', title: 'Più bici che auto', html: 'Nel mondo ci sono circa <b>un miliardo</b> di biciclette, più del doppio delle automobili. Non inquinano e fanno bene alla salute!' }
    ],
    quiz: [
      { type: 'mc', q: 'Che cosa collega la corona al pignone della ruota dietro?', options: ['Il cavo del freno', 'La catena', 'La forcella', 'Il raggio'], answer: 1, explain: 'La catena trasmette il movimento dalla corona (pedali) al pignone (ruota dietro).' },
      { type: 'num', q: 'La corona ha 32 denti e il pignone 16. Quanti giri fa la ruota per ogni giro di pedali?', answer: 2, explain: '32 : 16 = 2. È il rapporto di trasmissione.' },
      { type: 'mc', q: 'In salita conviene usare un pignone…', options: ['piccolo', 'grande', 'qualsiasi, non cambia niente', 'nessuno, si scende'], answer: 1, explain: 'Con il pignone grande serve meno forza per pedalare, anche se vai più piano.' },
      { type: 'mc', q: 'Perché il telaio è fatto a triangoli?', options: ['Perché è più bello', 'Perché il triangolo è una forma rigida che non si deforma', 'Per pesare di più', 'Per fare spazio alla catena'], answer: 1, explain: 'Il triangolo è indeformabile: per questo si usa nei telai, nei ponti e nelle gru.' },
      { type: 'tf', q: 'I freni rallentano la bici grazie all\'attrito, che trasforma il movimento in calore.', answer: true, explain: 'I pattini strofinano sul cerchio: l\'energia del movimento diventa calore.' },
      { type: 'mc', q: 'Le pedivelle funzionano come…', options: ['leve', 'calamite', 'molle', 'pulegge'], answer: 0, explain: 'Sono leve che trasformano la spinta delle gambe in rotazione.' }
    ]
  });
})();
