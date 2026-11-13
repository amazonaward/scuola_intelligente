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
    lang: 'ro',
    title: 'Becul',
    intro: 'Apasă întrerupătorul și… lumină! În stânga becul vechi cu <b>incandescență</b>, cu un fir care se înroșește de cald; în dreapta becul modern <b>LED</b>, care dă aceeași lumină consumând mult mai puțin. Descoperă diferența!',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.5, height: 460,
      parts: [
        { id: 'bulbo', name: 'Balonul de sticlă', label: 'Balonul de sticlă', color: '#e0f2fe', alpha: 0.22, pos: [XI, 0, 0], explode: [-0.6, 0.6, 0],
          info: '<p>Este „bula” de sticlă transparentă. Înăuntru <b>nu este aer</b>: este un gaz special (argon) care nu lasă filamentul să ardă.</p>',
          more: '<p>Oxigenul din aer ar arde într-o clipă filamentul înroșit. De aceea la început înăuntru se făcea <b>vid</b>; apoi s-a descoperit că un gaz <b>inert</b> precum argonul face ca firul să reziste mai mult.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: GLASS, ds: true } ] },
        { id: 'filamento', name: 'Filament de wolfram', label: 'Filament', color: '#fde047', explode: [-0.6, 0.35, 0.4],
          info: '<p>Este un fir de metal subțire ca părul, răsucit în spirală. Când curentul trece prin el devine <b>înroșit de cald</b>, la aproximativ 2500 °C, și strălucește cu lumină galbenă.</p>',
          more: '<p>Este făcut din <b>wolfram</b>, metalul care se topește la cea mai înaltă temperatură (3422 °C). Firul este răsucit de două ori peste el însuși: desfăcut ar avea aproape un metru! Cu timpul wolframul se evaporă, firul se subțiază și se rupe: becul „se arde”.</p>',
          shapes: [ { t: 'pipe', r: 0.01, n: 4, pts: coil, anim: { type: 'blink', color: '#fffbeb', wave: 'sin01', rate: 2 } },
            { t: 'sphere', r: 0.16, n: 8, m: 12, pos: [XI, 0.98, 0], color: '#fef08a', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.5, wave: 'sin01', rate: 2 } } ] },
        { id: 'supporti', name: 'Fire și tijă de sticlă', label: 'Fire de susținere', color: '#9ca3af', explode: [-0.6, 0.15, 0.4],
          info: '<p>Două fire de metal duc curentul de la bază până la filament și îl țin suspendat. Ele sunt fixate într-o <b>tijă de sticlă</b>, în centrul becului.</p>',
          shapes: [ { t: 'lathe', n: 16, pts: [[0.14, 0], [0.12, 0.15], [0.06, 0.3], [0.045, 0.5], [0, 0.53]], pos: [XI, 0, 0], color: '#cbd5e1', alpha: 0.6 },
            { t: 'pipe', r: 0.008, n: 4, pts: [[XI - 0.04, 0.0, 0], [XI - 0.04, 0.5, 0], [XI - 0.22, 1.0, 0]] }, { t: 'pipe', r: 0.008, n: 4, pts: [[XI + 0.04, 0.0, 0], [XI + 0.04, 0.5, 0], [XI + 0.22, 1.0, 0]] },
            { t: 'pipe', r: 0.005, n: 4, pts: [[XI, 0.52, 0], [XI, 0.92, 0]] } ] },
        { id: 'calore', name: 'Căldură', color: '#ef4444', alpha: 0.18, explode: [-0.6, 0.35, 0.4],
          info: '<p>Becul cu incandescență frige! Din curentul pe care îl consumă, aproximativ <b>95 din 100</b> de părți devin căldură și numai 5 devin lumină.</p>',
          more: '<p>Un corp foarte fierbinte emite mai ales raze <b>infraroșii</b>, invizibile dar calde: lumina vizibilă este doar o mică parte. De aceea, din 2009, în Europa becurile cu incandescență au fost scoase din magazine.</p>',
          shapes: [0, 0.5].map((ph) => ({ t: 'group', pos: [XI, 0.95, 0], anim: [{ type: 'scale', from: 0.4, to: 1.4, wave: 'saw', rate: 0.5, phase: ph }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: ph }],
            shapes: [{ t: 'sphere', r: 0.62, n: 10, m: 16 }] })) },
        { id: 'luce', name: 'Lumină', color: '#facc15', noLabel: false, explode: [0, 0.5, 0],
          info: '<p>Lumina pornește de la filamentul înroșit (stânga) sau de la micile LED-uri (dreapta) și călătorește foarte repede, cu <b>300 000 km pe secundă</b>, în toate direcțiile.</p>',
          shapes: rays([XI, 1.0, 0], DIRS, '#facc15', 1.0).concat(rays([XL, 0.55, 0], UP, '#f8fafc', 1.1)) },
        { id: 'attacco', name: 'Soclu cu filet (E27)', label: 'Soclu cu filet', color: '#d1d5db', explode: [0, -0.3, 0],
          info: '<p>Partea de metal cu <b>filet</b> se înșurubează în dulie. Curentul intră prin <b>contactul</b> de jos și iese prin filet: sticla neagră din mijloc le separă.</p>',
          more: '<p>„E27” înseamnă soclu <b>Edison</b> cu diametrul de 27 mm: este la fel de peste o sută de ani, de aceea poți pune un bec LED modern într-o lampă veche.</p>',
          shapes: base(XI).concat(base(XL)) },
        { id: 'portalampada', name: 'Dulia și cablurile', label: 'Dulia', color: '#1f2937', alpha: 0.55, explode: [0, -0.6, 0],
          info: '<p>Înăuntrul duliei este un filet „femelă” și o lamelă la fund. Cele două fire ale cablului, legate la <b>întrerupător</b>, duc curentul la bec.</p>',
          more: '<p>Întrerupătorul deschide sau închide <b>circuitul</b>: curentul curge numai dacă drumul este închis, ca un inel fără întreruperi. În casă tensiunea este de 230 de volți: nu atinge niciodată o dulie când lampa este aprinsă!</p>',
          shapes: [XI, XL].map((x) => ({ t: 'tube', r: 0.34, ri: 0.29, h: 0.45, n: 28, pos: [x, -0.55, 0] })).concat([XI, XL].map((x) => ({ t: 'cyl', r: 0.34, h: 0.08, n: 28, pos: [x, -0.8, 0], alpha: 1 })),
            [ { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XI, -0.84, 0], [XI, -1.15, 0], [-0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'pipe', r: 0.03, n: 6, curve: true, alpha: 1, color: '#f8fafc', pts: [[XL, -0.84, 0], [XL, -1.15, 0], [0.3, -1.25, 0.1], [0, -1.25, 0.3]] },
              { t: 'box', s: [0.3, 0.12, 0.4], pos: [0, -1.25, 0.3], color: '#f8fafc', alpha: 1 }, { t: 'box', s: [0.1, 0.06, 0.18], pos: [0, -1.17, 0.33], rot: [0, 0, -12], color: '#e2e8f0', alpha: 1 } ]) },
        { id: 'corrente', name: 'Curent electric', label: 'Curent', color: '#2563eb', noLabel: true, explode: [0, 0, 0],
          info: '<p>Curentul este un râu de <b>electroni</b>, particule foarte mici, care curg prin fire. Intră prin contactul de jos, trec prin filament sau prin LED-uri și ies prin filet.</p>',
          shapes: electrons(PI_, 12).concat(electrons(PL, 12)) },
        { id: 'diffusore', name: 'Difuzor (cupolă)', label: 'Difuzor', color: '#f8fafc', alpha: 0.4, pos: [XL, 0, 0], explode: [0.6, 0.65, 0],
          info: '<p>Cupola de plastic alb „împrăștie” lumina micilor LED-uri, așa încât nu orbește și luminează toată camera într-un mod blând.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: DOME, ds: true } ] },
        { id: 'led', name: 'Cip LED', label: 'LED', color: '#fef08a', pos: [XL, 0.5, 0], explode: [0.6, 0.35, 0.3],
          info: '<p>Sunt multe LED-uri foarte mici pe o plăcuță. Un LED este un „sandviș” de materiale speciale: când curentul trece prin el, emite lumină direct, aproape fără să se încălzească.</p>',
          more: '<p>LED înseamnă <i>Light Emitting Diode</i>, „diodă care emite lumină”. Electronii, trecând de la un strat la altul al <b>semiconductorului</b>, eliberează energie sub formă de lumină albastră; un strat de <b>fosfor</b> galben o transformă în lumină albă. Un bec LED consumă aproximativ 1/8 din cât consumă unul cu incandescență și durează de 15–25 de ori mai mult.</p>',
          shapes: [ { t: 'cyl', r: 0.4, h: 0.04, n: 32, color: '#e5e7eb' } ].concat(ledChips.map(([x, z]) => ({ t: 'box', s: [0.08, 0.03, 0.08], pos: [x, 0.03, z], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 2 } }))) },
        { id: 'driver', name: 'Circuit driver', label: 'Driver', color: '#15803d', pos: [XL, 0.24, 0], explode: [0.6, 0, 0.6],
          info: '<p>LED-urile nu suportă curentul din casă așa cum este. Acest mic circuit îl <b>transformă</b> în curentul slab și continuu de care au nevoie LED-urile.</p>',
          more: '<p>Curentul din casă este <b>alternativ</b> (își schimbă sensul de 50 de ori pe secundă) la 230 V. Driverul îl redresează (diode), îl netezește (condensatoare) și îl reduce la câțiva volți de curent <b>continuu</b>.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.36, 0.025] }, { t: 'cyl', r: 0.04, h: 0.12, n: 12, pos: [-0.07, 0.04, 0.06], rot: [90, 0, 0], color: '#1e3a8a' },
            { t: 'cyl', r: 0.03, h: 0.1, n: 12, pos: [0.08, -0.06, 0.05], rot: [90, 0, 0], color: '#1f2937' }, { t: 'box', s: [0.08, 0.06, 0.04], pos: [0.07, 0.1, 0.03], color: '#111827' } ] },
        { id: 'dissipatore', name: 'Corp și radiator', label: 'Radiator', color: '#cbd5e1', alpha: 0.45, pos: [XL, 0, 0], explode: [0.6, -0.15, 0],
          info: '<p>„Gâtul” becului LED conține driverul și îndepărtează puțina căldură produsă de LED-uri: un LED care rămâne răcoros durează mulți ani în plus.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0.26, 0], [0.3, 0.12], [0.36, 0.28], [0.42, 0.44], [0.43, 0.5]], ds: true } ].concat(Array.from({ length: 8 }, (_, k) => ({ t: 'box', s: [0.02, 0.32, 0.08], pos: [0.36 * Math.cos(k * TAU / 8), 0.3, 0.36 * Math.sin(k * TAU / 8)], rot: [0, -k * 45, 0], color: '#94a3b8', alpha: 0.6 }))) }
      ]
    },
    steps: [
      { icon: '💡', title: 'Două becuri, două idei', explode: 0,
        html: '<p>În stânga este becul cu <b>incandescență</b>, inventat acum mai bine de 140 de ani: dă lumină încălzind un fir. În dreapta becul <b>LED</b>, pe care îl folosim astăzi: dă lumină cu un material special, aproape fără să se încălzească.</p><p>Amândouă funcționează doar dacă <b>curentul</b> poate curge.</p>' },
      { icon: '🔌', title: 'Un circuit închis', focus: ['corrente', 'attacco', 'portalampada', 'supporti', 'filamento'], explode: 0.2, view: { rx: 0.1, ry: -0.2 },
        html: '<p>Curentul vine din cablu, intră prin <b>contactul</b> de la baza becului, urcă printr-un fir, trece prin filament și coboară pe celălalt fir până la <b>filet</b>. Este un drum complet: un <b>circuit închis</b>.</p><p class="tip">🔘 Întrerupătorul deschide circuitul: drumul se întrerupe și lumina se stinge.</p>' },
      { icon: '🔥', title: 'Un fir înroșit', focus: ['filamento', 'supporti', 'bulbo'], explode: 0, zoom: 1.1, view: { rx: -0.05, ry: -0.15 },
        html: '<p><b>Filamentul</b> de wolfram este atât de subțire încât curentul abia reușește să treacă prin el: se încălzește până la aproximativ <b>2500 °C</b> și devine incandescent, adică strălucește ca fierul din forjă.</p><p>Balonul este plin cu gaz <b>argon</b> și nu cu aer: cu oxigen firul ar arde imediat.</p>' },
      { icon: '🥵', title: 'Multă lumină… și foarte multă căldură', focus: ['calore', 'filamento', 'luce', 'bulbo'], explode: 0, view: { rx: 0.1, ry: -0.3 },
        html: '<p>Becul cu incandescență risipește aproape toată energia: din 100 de părți, aproximativ <b>95 devin căldură</b> și numai 5 devin lumină. De aceea frige!</p><p class="tip">🌍 Pentru a economisi energie, în Europa becurile cu incandescență nu se mai vând.</p>' },
      { icon: '✨', title: 'LED-ul: lumină din semiconductori', focus: ['led', 'diffusore', 'luce'], explode: 0.3, view: { rx: 0.35, ry: 0.25 },
        html: '<p>În becul LED lumina se naște în multe <b>cipuri</b> mici. Când curentul trece prin ele, electronii „sar” de la un material la altul și își eliberează energia direct sub formă de <b>lumină</b>, aproape fără căldură.</p><p><b>Difuzorul</b> alb înmoaie lumina.</p>' },
      { icon: '🔧', title: 'Driver și radiator', focus: ['driver', 'dissipatore', 'led', 'corrente'], explode: 0.55, view: { rx: 0.15, ry: 0.35 },
        html: '<p>Curentul din casă este prea „puternic” pentru LED-uri. <b>Driverul</b>, un mic circuit ascuns în gât, îl transformă în curent slab și continuu. <b>Radiatorul</b> îndepărtează puțina căldură.</p>' },
      { icon: '⚖️', title: 'Provocare: cine consumă mai puțin?', explode: 0, view: { rx: 0.12, ry: -0.35 },
        html: '<p>Pentru a da aceeași lumină, un bec cu incandescență consumă <b>60 de wați</b>, unul LED aproximativ <b>8 wați</b>. Iar becul LED durează 15 000–25 000 de ore, față de cele 1000 ale becului vechi.</p><p class="tip">🧮 Într-un an, schimbând 10 becuri cu becuri LED, o familie economisește energia necesară pentru sute de mașini de spălat!</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Edison și ceilalți', html: 'Thomas Edison a făcut becul practic în 1879, folosind un filament de <b>bambus carbonizat</b>. Dar lucrau la el și alți inventatori, precum englezul Joseph Swan și italianul <b>Alessandro Cruto</b>.' },
      { icon: '🕯️', title: 'Becul centenar', html: 'Într-o stație de pompieri din California există un bec aprins aproape fără încetare din <b>1901</b>! Lucrează foarte încet, de aceea durează atât de mult.' },
      { icon: '🏅', title: 'Un Nobel pentru lumina albastră', html: 'LED-urile roșii și verzi existau de mult, dar pentru lumina albă era nevoie de <b>LED-ul albastru</b>. Cei trei oameni de știință japonezi care l-au inventat au câștigat Premiul Nobel pentru fizică în 2014.' },
      { icon: '🔆', title: 'Wați și lumeni', html: '<b>Wații</b> spun cât de multă energie consumă un bec, <b>lumenii</b> cât de multă lumină dă. Un bec bun dă mulți lumeni cu puțini wați.' }
    ],
    quiz: [
      { type: 'mc', q: 'De ce dă lumină filamentul becului cu incandescență?', options: ['Pentru că este vopsit în galben', 'Pentru că devine înroșit de cald când curentul trece prin el', 'Pentru că arde ca o lumânare', 'Pentru că reflectă lumina soarelui'], answer: 1, explain: 'Curentul încălzește firul de wolfram până la aproximativ 2500 °C: devine incandescent și dă lumină.' },
      { type: 'mc', q: 'Ce se află în balonul becului cu incandescență?', options: ['Aer', 'Apă', 'Un gaz precum argonul', 'Oxigen pur'], answer: 2, explain: 'Un gaz inert precum argonul împiedică filamentul înroșit să ardă.' },
      { type: 'tf', q: 'Becul LED transformă în lumină o parte din energie mult mai mare decât cel cu incandescență.', answer: true, explain: 'LED-ul risipește puțin sub formă de căldură: pentru aceeași lumină consumă de aproximativ 8 ori mai puțin.' },
      { type: 'mc', q: 'La ce servește întrerupătorul?', options: ['Să schimbe culoarea luminii', 'Să deschidă sau să închidă circuitul', 'Să răcească becul', 'Să măsoare wații'], answer: 1, explain: 'Cu circuitul deschis curentul nu mai curge și becul se stinge.' },
      { type: 'mc', q: 'Din ce metal este făcut filamentul?', options: ['Cupru', 'Fier', 'Wolfram', 'Oro'], answer: 2, explain: 'Wolframul se topește la 3422 °C: este metalul care rezistă la cea mai înaltă temperatură.' },
      { type: 'num', q: 'Din 100 de părți de energie, câte devin aproximativ lumină într-un bec cu incandescență?', answer: 5, explain: 'Aproximativ 5: celelalte 95 devin căldură.' }
    ]
  });
})();
