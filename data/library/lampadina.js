/* La lampadina: a sinistra (x = -0.9) una lampadina a incandescenza, a destra (x = +0.9) una lampadina LED.
   Entrambe con attacco a vite E27 (da y = -0.55 a 0) avvitate in un portalampada. Alto = +y. */
(function () {
  const XI = -0.9, XL = 0.9, TAU = Math.PI * 2;
  const GLASS = [[0.25, 0], [0.26, 0.15], [0.31, 0.35], [0.43, 0.6], [0.54, 0.85], [0.59, 1.05], [0.58, 1.25], [0.51, 1.42], [0.38, 1.55], [0.2, 1.63], [0, 1.65]];
  const DOME = [[0.42, 0.5], [0.5, 0.62], [0.56, 0.8], [0.58, 1.0], [0.55, 1.18], [0.47, 1.33], [0.34, 1.44], [0.18, 1.5], [0, 1.52]];
  const thread = (x) => ({ t: 'pipe', r: 0.022, n: 5, caps: false, pts: Array.from({ length: 64 }, (_, i) => { const a = i * 0.55; return [x + 0.26 * Math.cos(a), -0.5 + i * 0.0072, 0.26 * Math.sin(a)]; }) });
  const base = (x) => [ { t: 'cyl', r: 0.255, h: 0.52, n: 28, pos: [x, -0.26, 0], color: '#d1d5db' }, thread(x),
    { t: 'cyl', r: 0.2, r2: 0.24, h: 0.08, n: 24, pos: [x, -0.56, 0], color: '#111827' }, { t: 'sphere', r: 0.07, n: 6, m: 12, hemi: true, rot: [180, 0, 0], pos: [x, -0.6, 0], color: '#9ca3af' } ];
  /* filamento: spirale intorno all'asse x */
  const coil = Array.from({ length: 96 }, (_, i) => { const f = i / 95, a = i * 0.85; return [XI - 0.22 + 0.44 * f, 1.0 + 0.035 * Math.sin(a) - 0.06 * Math.sin(Math.PI * f), 0.035 * Math.cos(a)]; });
  /* corrente: dal contatto in fondo, su per un filo, attraverso il filamento (o il driver), giù per l'altro filo, fino alla vite */
  const PI_ = [[XI, -0.62, 0], [XI, -0.1, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0], [XI + 0.22, 1.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.1, -0.05, 0], [XI + 0.27, -0.1, 0], [XI + 0.27, -0.45, 0]];
  const PL = [[XL, -0.62, 0], [XL, 0.0, 0], [XL - 0.05, 0.15, 0.03], [XL - 0.05, 0.38, 0.03], [XL - 0.2, 0.52, 0], [XL + 0.2, 0.52, 0], [XL + 0.05, 0.38, 0.03], [XL + 0.05, 0.15, 0.03], [XL + 0.12, 0.0, 0], [XL + 0.27, -0.1, 0], [XL + 0.27, -0.45, 0]];
  const electrons = (P, n) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.03, n: 5, m: 8, pos: P[0], color: '#2563eb', anim: { type: 'path', pts: P, wave: 'saw', rate: 0.6, phase: k / n } }));
  /* luce: "pacchetti" che volano via dal centro e svaniscono */
  const rays = (c, dirs, color, len) => dirs.map(([dx, dy, dz], k) => ({ t: 'group', pos: c, anim: [{ type: 'move', dir: [dx, dy, dz], amp: len, wave: 'saw', rate: 1, phase: (k * 0.37) % 1 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1, phase: (k * 0.37) % 1 }],
    shapes: [{ t: 'sphere', r: 0.045, n: 6, m: 8, color }] }));
  const DIRS = Array.from({ length: 12 }, (_, k) => { const a = (k / 12) * TAU; return [Math.cos(a), Math.sin(a), 0.3 * Math.sin(3 * a)]; });
  const UP = Array.from({ length: 10 }, (_, k) => { const a = (k / 10) * TAU, e = 0.35 + 0.5 * ((k * 7) % 10) / 10; return [Math.cos(a) * Math.cos(e), Math.sin(e) + 0.25, Math.sin(a) * Math.cos(e)]; });
  const ledChips = [[0, 0]].concat(Array.from({ length: 8 }, (_, k) => [0.25 * Math.cos(k * TAU / 8), 0.25 * Math.sin(k * TAU / 8)]));

  LIBRARY({
    id: 'lampadina',
    title: 'La lampadina',
    intro: 'Premi l\'interruttore e… luce! A sinistra la vecchia lampadina a <b>incandescenza</b>, con un filo che diventa rovente; a destra la moderna lampadina <b>LED</b>, che fa la stessa luce consumando molto meno. Scopri la differenza!',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.5, height: 460,
      parts: [
        { id: 'bulbo', name: 'Bulbo di vetro', label: 'Bulbo di vetro', color: '#e0f2fe', alpha: 0.22, pos: [XI, 0, 0], explode: [-0.6, 0.6, 0],
          info: '<p>È la "bolla" di vetro trasparente. Dentro <b>non c\'è aria</b>: c\'è un gas speciale (argon) che non fa bruciare il filamento.</p>',
          more: '<p>L\'ossigeno dell\'aria farebbe bruciare il filamento rovente in un attimo. Per questo all\'inizio dentro si faceva il <b>vuoto</b>; poi si è scoperto che un gas <b>inerte</b> come l\'argon fa durare il filo più a lungo.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: GLASS, ds: true } ] },
        { id: 'filamento', name: 'Filamento di tungsteno', label: 'Filamento', color: '#fde047', explode: [-0.6, 0.35, 0.4],
          info: '<p>È un filo di metallo sottilissimo, arrotolato a molla. Quando la corrente lo attraversa diventa <b>rovente</b>, a circa 2500 °C, e brilla di luce gialla.</p>',
          more: '<p>È fatto di <b>tungsteno</b>, il metallo che fonde alla temperatura più alta (3422 °C). Il filo è avvolto due volte su sé stesso: srotolato sarebbe lungo quasi un metro! Col tempo il tungsteno evapora, il filo si assottiglia e si rompe: la lampadina "si fulmina".</p>',
          shapes: [ { t: 'pipe', r: 0.01, n: 4, pts: coil, anim: { type: 'blink', color: '#fffbeb', wave: 'sin01', rate: 2 } },
            { t: 'sphere', r: 0.16, n: 8, m: 12, pos: [XI, 0.98, 0], color: '#fef08a', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.5, wave: 'sin01', rate: 2 } } ] },
        { id: 'supporti', name: 'Fili e stelo di vetro', label: 'Fili di supporto', color: '#9ca3af', explode: [-0.6, 0.15, 0.4],
          info: '<p>Due fili di metallo portano la corrente dal fondo fino al filamento e lo tengono sospeso. Sono fissati in uno <b>stelo di vetro</b>, al centro della lampadina.</p>',
          shapes: [ { t: 'lathe', n: 16, pts: [[0.14, 0], [0.12, 0.15], [0.06, 0.3], [0.045, 0.5], [0, 0.53]], pos: [XI, 0, 0], color: '#cbd5e1', alpha: 0.6 },
            { t: 'pipe', r: 0.008, n: 4, pts: [[XI - 0.04, 0.0, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0]] }, { t: 'pipe', r: 0.008, n: 4, pts: [[XI + 0.04, 0.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.22, 1.0, 0]] },
            { t: 'pipe', r: 0.005, n: 4, pts: [[XI, 0.52, 0], [XI, 0.92, 0]] } ] },
        { id: 'calore', name: 'Calore', color: '#ef4444', alpha: 0.18, explode: [-0.6, 0.35, 0.4],
          info: '<p>La lampadina a incandescenza scotta! Della corrente che consuma, circa <b>95 su 100</b> parti diventano calore e solo 5 diventano luce.</p>',
          more: '<p>Un corpo molto caldo emette soprattutto raggi <b>infrarossi</b>, invisibili ma caldi: la luce visibile è solo una piccola parte. Per questo dal 2009 in Europa le lampadine a incandescenza sono state ritirate dai negozi.</p>',
          shapes: [0, 0.5].map((ph) => ({ t: 'group', pos: [XI, 0.95, 0], anim: [{ type: 'scale', from: 0.4, to: 1.4, wave: 'saw', rate: 0.5, phase: ph }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: ph }],
            shapes: [{ t: 'sphere', r: 0.62, n: 10, m: 16 }] })) },
        { id: 'luce', name: 'Luce', color: '#facc15', noLabel: false, explode: [0, 0.5, 0],
          info: '<p>La luce parte dal filamento rovente (sinistra) o dai piccoli LED (destra) e viaggia velocissima, a <b>300 000 km al secondo</b>, in tutte le direzioni.</p>',
          shapes: rays([XI, 1.0, 0], DIRS, '#facc15', 1.0).concat(rays([XL, 0.55, 0], UP, '#f8fafc', 1.1)) },
        { id: 'attacco', name: 'Attacco a vite (E27)', label: 'Attacco a vite', color: '#d1d5db', explode: [0, -0.3, 0],
          info: '<p>La parte di metallo con la <b>filettatura</b> si avvita nel portalampada. La corrente entra dal <b>contatto</b> in fondo ed esce dalla vite: il vetro nero in mezzo li separa.</p>',
          more: '<p>"E27" vuol dire attacco <b>Edison</b> con diametro 27 mm: è lo stesso da più di cento anni, per questo puoi mettere una lampadina LED moderna in una lampada vecchia.</p>',
          shapes: base(XI).concat(base(XL)) },
        { id: 'portalampada', name: 'Portalampada e cavi', label: 'Portalampada', color: '#1f2937', alpha: 0.55, explode: [0, -0.6, 0],
          info: '<p>Il portalampada ha dentro una vite "femmina" e una lamella in fondo. I due fili del cavo, collegati all\'<b>interruttore</b>, portano la corrente alla lampadina.</p>',
          more: '<p>L\'interruttore apre o chiude il <b>circuito</b>: la corrente scorre solo se il percorso è chiuso, come un anello senza interruzioni. In casa la tensione è di 230 volt: non toccare mai un portalampada con la lampada accesa!</p>',
          shapes: [XI, XL].map((x) => ({ t: 'tube', r: 0.34, ri: 0.29, h: 0.45, n: 28, pos: [x, -0.55, 0] })).concat([XI, XL].map((x) => ({ t: 'cyl', r: 0.34, h: 0.08, n: 28, pos: [x, -0.8, 0], alpha: 1 })),
            [ { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XI, -0.84, 0], [XI, -1.15, 0], [-0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XL, -0.84, 0], [XL, -1.15, 0], [0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'box', s: [0.3, 0.12, 0.4], pos: [0, -1.25, 0.3], color: '#f8fafc', alpha: 1 }, { t: 'box', s: [0.1, 0.06, 0.18], pos: [0, -1.17, 0.33], rot: [0, 0, -12], color: '#e2e8f0', alpha: 1 } ]) },
        { id: 'corrente', name: 'Corrente elettrica', label: 'Corrente', color: '#2563eb', noLabel: true, explode: [0, 0, 0.4],
          info: '<p>La corrente è un fiume di <b>elettroni</b>, particelle piccolissime, che scorrono nei fili. Entrano dal contatto in fondo, attraversano il filamento o i LED ed escono dalla vite.</p>',
          shapes: electrons(PI_, 12).concat(electrons(PL, 12)) },
        { id: 'diffusore', name: 'Diffusore (cupola)', label: 'Diffusore', color: '#f8fafc', alpha: 0.4, pos: [XL, 0, 0], explode: [0.6, 0.65, 0],
          info: '<p>La cupola di plastica bianca "spalma" la luce dei piccoli LED, così non abbaglia e illumina tutta la stanza in modo morbido.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: DOME, ds: true } ] },
        { id: 'led', name: 'Chip LED', label: 'LED', color: '#fef08a', pos: [XL, 0.5, 0], explode: [0.6, 0.35, 0.3],
          info: '<p>Sono tanti piccolissimi <b>LED</b> su una piastrina. Un LED è un "sandwich" di materiali speciali: quando la corrente lo attraversa, emette luce direttamente, quasi senza scaldarsi.</p>',
          more: '<p>LED vuol dire <i>Light Emitting Diode</i>, "diodo che emette luce". Gli elettroni, passando da uno strato all\'altro del <b>semiconduttore</b>, liberano energia sotto forma di luce blu; uno strato di <b>fosforo</b> giallo la trasforma in luce bianca. Una lampadina LED consuma circa 1/8 di una a incandescenza e dura 15–25 volte di più.</p>',
          shapes: [ { t: 'cyl', r: 0.4, h: 0.04, n: 32, color: '#e5e7eb' } ].concat(ledChips.map(([x, z]) => ({ t: 'box', s: [0.08, 0.03, 0.08], pos: [x, 0.03, z], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 2 } }))) },
        { id: 'driver', name: 'Circuito driver', label: 'Driver', color: '#15803d', pos: [XL, 0.24, 0], explode: [0.6, 0, 0.6],
          info: '<p>I LED non sopportano la corrente di casa così com\'è. Questo piccolo circuito la <b>trasforma</b> nella corrente debole e continua che serve ai LED.</p>',
          more: '<p>La corrente di casa è <b>alternata</b> (cambia verso 50 volte al secondo) a 230 V. Il driver la raddrizza (diodi), la livella (condensatori) e la riduce a pochi volt di corrente <b>continua</b>.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.36, 0.025] }, { t: 'cyl', r: 0.04, h: 0.12, n: 12, pos: [-0.07, 0.04, 0.06], rot: [90, 0, 0], color: '#1e3a8a' },
            { t: 'cyl', r: 0.03, h: 0.1, n: 12, pos: [0.08, -0.06, 0.05], rot: [90, 0, 0], color: '#1f2937' }, { t: 'box', s: [0.08, 0.06, 0.04], pos: [0.07, 0.1, 0.03], color: '#111827' } ] },
        { id: 'dissipatore', name: 'Corpo e dissipatore', label: 'Dissipatore', color: '#cbd5e1', alpha: 0.45, pos: [XL, 0, 0], explode: [0.6, -0.15, 0],
          info: '<p>Il "collo" della lampadina LED contiene il driver e porta via il poco calore prodotto dai LED: un LED che resta fresco dura molti più anni.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0.26, 0], [0.3, 0.12], [0.36, 0.28], [0.42, 0.44], [0.43, 0.5]], ds: true } ].concat(Array.from({ length: 8 }, (_, k) => ({ t: 'box', s: [0.02, 0.32, 0.08], pos: [0.36 * Math.cos(k * TAU / 8), 0.3, 0.36 * Math.sin(k * TAU / 8)], rot: [0, -k * 45, 0], color: '#94a3b8', alpha: 0.6 }))) }
      ]
    },
    steps: [
      { icon: '💡', title: 'Due lampadine, due idee', explode: 0,
        html: '<p>A sinistra c\'è la lampadina a <b>incandescenza</b>, inventata più di 140 anni fa: fa luce scaldando un filo. A destra la lampadina <b>LED</b>, che usiamo oggi: fa luce con un materiale speciale, senza scaldarsi quasi per niente.</p><p>Tutte e due funzionano solo se la <b>corrente</b> può scorrere.</p>' },
      { icon: '🔌', title: 'Un circuito chiuso', focus: ['corrente', 'attacco', 'portalampada', 'supporti', 'filamento'], explode: 0.2, view: { rx: 0.1, ry: -0.2 },
        html: '<p>La corrente arriva dal cavo, entra dal <b>contatto</b> in fondo alla lampadina, sale per un filo, attraversa il filamento e torna giù per l\'altro filo fino alla <b>vite</b>. È un giro completo: un <b>circuito chiuso</b>.</p><p class="tip">🔘 L\'interruttore apre il circuito: il percorso si interrompe e la luce si spegne.</p>' },
      { icon: '🔥', title: 'Un filo rovente', focus: ['filamento', 'supporti', 'bulbo'], explode: 0, zoom: 1.5, view: { rx: 0.05, ry: -0.15 },
        html: '<p>Il <b>filamento</b> di tungsteno è così sottile che la corrente fa fatica ad attraversarlo: si scalda fino a circa <b>2500 °C</b> e diventa incandescente, cioè brilla come il ferro nella fucina.</p><p>Il bulbo è pieno di gas <b>argon</b> e non di aria: con l\'ossigeno il filo brucerebbe subito.</p>' },
      { icon: '🥵', title: 'Tanta luce… e tantissimo calore', focus: ['calore', 'filamento', 'luce', 'bulbo'], explode: 0, view: { rx: 0.1, ry: -0.3 },
        html: '<p>La lampadina a incandescenza spreca quasi tutta l\'energia: su 100 parti, circa <b>95 diventano calore</b> e solo 5 diventano luce. Per questo scotta!</p><p class="tip">🌍 Per risparmiare energia, in Europa le lampadine a incandescenza non si vendono più.</p>' },
      { icon: '✨', title: 'Il LED: luce dai semiconduttori', focus: ['led', 'diffusore', 'luce'], explode: 0.3, zoom: 1.3, view: { rx: 0.35, ry: 0.25 },
        html: '<p>Nella lampadina LED la luce nasce in tanti piccoli <b>chip</b>. Quando la corrente li attraversa, gli elettroni "saltano" da un materiale all\'altro e liberano la loro energia direttamente come <b>luce</b>, quasi senza calore.</p><p>Il <b>diffusore</b> bianco ammorbidisce la luce.</p>' },
      { icon: '🔧', title: 'Driver e dissipatore', focus: ['driver', 'dissipatore', 'led', 'corrente'], explode: 0.55, view: { rx: 0.15, ry: 0.35 },
        html: '<p>La corrente di casa è troppo "forte" per i LED. Il <b>driver</b>, un piccolo circuito nascosto nel collo, la trasforma in corrente debole e continua. Il <b>dissipatore</b> porta via il poco calore.</p>' },
      { icon: '⚖️', title: 'Sfida: chi consuma meno?', explode: 0, view: { rx: 0.12, ry: -0.35 },
        html: '<p>Per fare la stessa luce, una lampadina a incandescenza consuma <b>60 watt</b>, una LED circa <b>8 watt</b>. E la LED dura 15 000–25 000 ore, contro le 1000 della vecchia lampadina.</p><p class="tip">🧮 In un anno, cambiando 10 lampadine con delle LED, una famiglia risparmia l\'energia per fare centinaia di lavatrici!</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Edison e gli altri', html: 'Thomas Edison rese pratica la lampadina nel 1879 usando un filamento di <b>bambù carbonizzato</b>. Ma ci lavoravano anche altri inventori, come l\'inglese Joseph Swan e l\'italiano <b>Alessandro Cruto</b>.' },
      { icon: '🕯️', title: 'La lampadina centenaria', html: 'In una caserma dei pompieri in California c\'è una lampadina accesa quasi ininterrottamente dal <b>1901</b>! Lavora pianissimo, per questo dura tanto.' },
      { icon: '🏅', title: 'Un Nobel per la luce blu', html: 'I LED rossi e verdi esistevano da tempo, ma per la luce bianca serviva il <b>LED blu</b>. I tre scienziati giapponesi che lo inventarono vinsero il Premio Nobel per la fisica nel 2014.' },
      { icon: '🔆', title: 'Watt e lumen', html: 'I <b>watt</b> dicono quanta energia consuma una lampadina, i <b>lumen</b> quanta luce fa. Una buona lampadina fa tanti lumen con pochi watt.' }
    ],
    quiz: [
      { type: 'mc', q: 'Perché il filamento della lampadina a incandescenza fa luce?', options: ['Perché è dipinto di giallo', 'Perché diventa rovente quando la corrente lo attraversa', 'Perché brucia come una candela', 'Perché riflette la luce del sole'], answer: 1, explain: 'La corrente scalda il filo di tungsteno fino a circa 2500 °C: diventa incandescente e fa luce.' },
      { type: 'mc', q: 'Che cosa c\'è dentro il bulbo della lampadina a incandescenza?', options: ['Aria', 'Acqua', 'Un gas come l\'argon', 'Ossigeno puro'], answer: 2, explain: 'Un gas inerte come l\'argon impedisce al filamento rovente di bruciare.' },
      { type: 'tf', q: 'La lampadina LED trasforma in luce una parte di energia molto più grande di quella a incandescenza.', answer: true, explain: 'Il LED spreca poco in calore: per la stessa luce consuma circa 8 volte meno.' },
      { type: 'mc', q: 'A che cosa serve l\'interruttore?', options: ['A cambiare colore alla luce', 'Ad aprire o chiudere il circuito', 'A raffreddare la lampadina', 'A misurare i watt'], answer: 1, explain: 'Con il circuito aperto la corrente non scorre e la lampadina si spegne.' },
      { type: 'mc', q: 'Di che metallo è fatto il filamento?', options: ['Rame', 'Ferro', 'Tungsteno', 'Oro'], answer: 2, explain: 'Il tungsteno fonde a 3422 °C: è il metallo che resiste alla temperatura più alta.' },
      { type: 'num', q: 'Su 100 parti di energia, quante circa diventano luce in una lampadina a incandescenza?', answer: 5, explain: 'Circa 5: le altre 95 diventano calore.' }
    ]
  });
})();
