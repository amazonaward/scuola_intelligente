/* Il motore a scoppio a 4 tempi (monocilindrico, sezione trasparente).
   Cinematica: manovella r = 0.35, biella l = 1.1, albero motore a y = -1.2. Un ciclo = 2 giri dell'albero (cycle: 2).
   Frazioni del ciclo: 0–0.25 aspirazione, 0.25–0.5 compressione, 0.5–0.75 scoppio, 0.75–1 scarico. */
(function () {
  const R = 0.35, L = 1.1, K = { r: R, l: L };
  const web = (z) => ({ t: 'extrude', d: 0.08, pos: [0, 0, z], color: '#6b7280',
    pts: [[0.15, 0.47], [-0.15, 0.47]].concat(Array.from({ length: 13 }, (_, i) => { const a = Math.PI + (i / 12) * Math.PI; return [0.4 * Math.cos(a), 0.4 * Math.sin(a) - 0.02]; })) });
  const cam = (x, ang) => ({ t: 'group', pos: [x, 1.32, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 0.5 }, shapes: [
    { t: 'cyl', r: 0.045, h: 0.9, n: 14, rot: [90, 0, 0], color: '#9ca3af' },
    { t: 'cyl', r: 0.09, h: 0.1, n: 20, rot: [90, 0, 0] },
    { t: 'cyl', r: 0.075, h: 0.1, n: 20, rot: [90, 0, 0], pos: [0.1 * Math.cos(ang * Math.PI / 180), 0.1 * Math.sin(ang * Math.PI / 180), 0] }
  ] });
  const spring = Array.from({ length: 40 }, (_, i) => { const a = i * 0.75; return [0.075 * Math.cos(a), 0.2 + i * 0.0085, 0.075 * Math.sin(a)]; });
  const valve = (headColor) => [
    { t: 'cyl', r: 0.15, r2: 0.05, h: 0.06, n: 24, pos: [0, 0.03, 0], color: headColor },
    { t: 'cyl', r: 0.025, h: 0.56, n: 10, pos: [0, 0.31, 0] },
    { t: 'pipe', r: 0.012, n: 6, pts: spring, color: '#facc15', caps: false },
    { t: 'cyl', r: 0.08, h: 0.025, n: 16, pos: [0, 0.55, 0], color: '#64748b' }
  ];
  const chamber = (from, to, ramp) => [K && Object.assign({ type: 'chamber', h0: 0.125 }, K), { type: 'blink', fade: true, wave: 'window', from, to, cycle: 2, ramp }];

  LIBRARY({
    id: 'motore-scoppio',
    lang: 'ro',
    title: 'Motorul cu ardere internă',
    intro: 'Motorul automobilelor și al scuterelor arde o picătură de benzină amestecată cu aer: <b>explozia</b> împinge un piston, iar pistonul învârte roțile. Privește cei <b>4 timpi</b> unul câte unul!',
    model: {
      rx: 0.25, ry: -0.55, speed: 0.32, cycle: 2, height: 480,
      phases: [
        { from: 0, to: 0.25, label: '1 · Admisie', color: '#2563eb' },
        { from: 0.25, to: 0.5, label: '2 · Compresie', color: '#16a34a' },
        { from: 0.5, to: 0.75, label: '3 · Explozie', color: '#ea580c' },
        { from: 0.75, to: 1, label: '4 · Evacuare', color: '#6b7280' }
      ],
      parts: [
        { id: 'cilindro', name: 'Cilindrul', color: '#94a3b8', alpha: 0.26, pos: [0, 0.025, 0], explode: [0, 0, 0],
          info: '<p>Este „țeava” robustă în care pistonul urcă și coboară. Aici înăuntru are loc explozia: de aceea este din metal gros și rezistent la căldură.</p>',
          more: '<p>Volumul „măturat” de piston se numește <b>capacitate cilindrică</b>. Un scuter are 50 cm³, o mașină adesea 1000–2000 cm³ împărțiți în 3 sau 4 cilindri.</p>',
          shapes: [ { t: 'tube', r: 0.56, ri: 0.45, h: 1.25, n: 36 } ].concat([0.35, 0.15, -0.05].map((y) => ({ t: 'tube', r: 0.68, ri: 0.56, h: 0.04, n: 36, pos: [0, y, 0] }))) },
        { id: 'testata', name: 'Chiulasa', color: '#64748b', alpha: 0.24, pos: [0, 0.65, 0], explode: [0, 0.8, 0],
          info: '<p>Este „capacul” cilindrului. Conține <b>supapele</b>, <b>bujia</b> și canalele prin care intră amestecul și ies gazele.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.45, 1.0], pos: [0, 0.22, 0] }, { t: 'box', s: [1.3, 0.3, 0.8], pos: [0, 0.65, 0], color: '#475569' } ] },
        { id: 'pistone', name: 'Pistonul', color: '#d1d5db', pos: [0, 0.3, 0], explode: [0, 0, 1.4], anim: Object.assign({ type: 'piston' }, K),
          info: '<p>Este un „dop” de metal care alunecă în sus și în jos în cilindru. Explozia îl împinge în jos cu o forță enormă.</p>',
          more: '<p><b>Segmenții</b> din jurul pistonului închid bine cilindrul, așa că gazele nu scapă în jos. Pistonul unei mașini poate urca și coborî de mai mult de 100 de ori pe secundă!</p>',
          shapes: [
            { t: 'cyl', r: 0.43, h: 0.45, n: 36 },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.16, 0], color: '#475569' },
            { t: 'tube', r: 0.436, ri: 0.4, h: 0.03, n: 36, pos: [0, 0.09, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.6, n: 14, pos: [0, -0.05, 0], rot: [90, 0, 0], color: '#9ca3af' }
          ] },
        { id: 'biella', name: 'Biela', color: '#64748b', pos: [0, 0.25, 0], explode: [0, 0, 1.05], anim: Object.assign({ type: 'rod' }, K),
          info: '<p>Este „brațul” care leagă pistonul de arborele cotit. Transformă mișcarea sus-jos a pistonului într-o mișcare care învârte arborele, ca piciorul care împinge pedala bicicletei.</p>',
          shapes: [
            { t: 'tube', r: 0.11, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0] },
            { t: 'box', s: [0.11, 0.86, 0.09], pos: [0, -0.55, 0] },
            { t: 'tube', r: 0.17, ri: 0.09, h: 0.12, n: 24, pos: [0, -1.1, 0], rot: [90, 0, 0] }
          ] },
        { id: 'albero-motore', name: 'Arborele cotit', color: '#6b7280', pos: [0, -1.2, 0], explode: [0, -0.5, 0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>Este arborele cu coate care se <b>învârte</b>. De aici mișcarea merge la cutia de viteze și apoi la roți. Are contragreutăți ca să se rotească fără să tremure.</p>',
          more: '<p>Un ciclu complet (4 timpi) cere <b>2 rotații</b> ale arborelui cotit. La 3000 de rotații pe minut, pistonul face 1500 de explozii pe minut, adică 25 pe secundă!</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.6, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.45], color: '#9ca3af' },
            web(0.11), web(-0.11), { t: 'cyl', r: 0.085, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0, R, 0], color: '#9ca3af' } ] },
        { id: 'volano', name: 'Volanta', color: '#475569', pos: [0, -1.2, -0.82], explode: [0, 0, -0.7], anim: { type: 'spin', axis: 'z', dir: -1 },
          info: '<p>Este o roată grea prinsă de arborele cotit. Odată pusă în mișcare, continuă să se învârtă și ajută motorul să treacă peste timpii în care nimeni nu împinge.</p>',
          shapes: [ { t: 'cyl', r: 0.78, h: 0.12, n: 40, rot: [90, 0, 0] }, { t: 'box', s: [0.12, 0.5, 0.02], pos: [0, 0.45, 0.07], color: '#facc15', decal: 1 } ] },
        { id: 'valvola-aspirazione', name: 'Supapa de admisie', label: 'Supapa de admisie', color: '#94a3b8', pos: [-0.2, 0.66, 0], explode: [-0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0, to: 0.25, cycle: 2, ramp: 0.3 },
          info: '<p>Este o „ușă” care se deschide <b>doar în primul timp</b> pentru a lăsa aerul și benzina să intre în cilindru. Apoi se închide și rămâne închisă.</p>', shapes: valve('#3b82f6') },
        { id: 'valvola-scarico', name: 'Supapa de evacuare', label: 'Supapa de evacuare', color: '#94a3b8', pos: [0.2, 0.66, 0], explode: [0.15, 0.85, 0],
          anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0.75, to: 1, cycle: 2, ramp: 0.3 },
          info: '<p>Este „ușa de ieșire”: se deschide <b>doar în al patrulea timp</b> pentru a lăsa gazele arse să iasă spre țeava de eșapament.</p>', shapes: valve('#ef4444') },
        { id: 'alberi-camme', name: 'Arbori cu came', color: '#6b7280', explode: [0, 1.45, 0],
          info: '<p>Sunt arbori cu niște „cocoașe” (came). Învârtindu-se, fiecare cocoașă împinge în jos supapa ei la momentul potrivit, ca un deget care apasă o tastă.</p>',
          more: '<p>Arborii cu came se rotesc la <b>jumătate din viteza</b> arborelui cotit (sunt legați printr-o curea sau un lanț): fiecare supapă se deschide o dată la 2 rotații.</p>',
          shapes: [ cam(-0.2, -45), cam(0.2, 225) ] },
        { id: 'candela', name: 'Bujia', color: '#f8fafc', pos: [0, 0.65, 0.27], explode: [0, 1.0, 0.5],
          info: '<p>Face o mică <b>scânteie electrică</b>, chiar când amestecul este comprimat la maximum: este chibritul care aprinde explozia.</p>',
          more: '<p>Scânteia se naște dintr-o tensiune foarte mare (peste 20 000 de volți) care „sare” între doi electrozi aflați la mai puțin de un milimetru. Motoarele Diesel nu au bujie: motorina se aprinde singură pentru că aerul comprimat devine foarte fierbinte.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.2, n: 12, pos: [0, 0.1, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.1, h: 0.1, n: 6, pos: [0, 0.25, 0], color: '#64748b' },
            { t: 'cyl', r: 0.065, h: 0.35, n: 16, pos: [0, 0.47, 0] }, { t: 'cyl', r: 0.03, h: 0.1, n: 10, pos: [0, 0.69, 0], color: '#9ca3af' },
            { t: 'sphere', r: 0.09, n: 8, pos: [0, -0.02, 0], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.49, to: 0.535, cycle: 2, ramp: 0.15 } } ] },
        { id: 'aspirazione', name: 'Colectorul de admisie', label: 'Admisie', color: '#60a5fa', alpha: 0.6, explode: [-0.7, 0.4, 0],
          info: '<p>Este canalul prin care vine aerul (curățat de filtru) amestecat cu picături de benzină pulverizate de <b>injector</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[-1.55, 1.15, 0], [-0.9, 1.15, 0], [-0.45, 0.98, 0], [-0.22, 0.8, 0]] }, { t: 'box', s: [0.35, 0.5, 0.5], pos: [-1.65, 1.15, 0], color: '#cbd5e1', alpha: 1 } ] },
        { id: 'scarico', name: 'Colectorul de evacuare', label: 'Evacuare', color: '#f97316', alpha: 0.6, explode: [0.7, 0.4, 0],
          info: '<p>Duce departe gazele arse, care sunt foarte fierbinți. Apoi <b>toba de eșapament</b> le curăță în parte și reduce zgomotul.</p>',
          shapes: [ { t: 'pipe', r: 0.12, curve: true, pts: [[0.22, 0.8, 0], [0.45, 0.98, 0], [0.9, 1.1, 0], [1.4, 0.9, 0]] }, { t: 'cyl', r: 0.2, h: 0.5, n: 24, rot: [0, 0, 90], pos: [1.6, 0.85, 0], color: '#78716c', alpha: 1 } ] },
        { id: 'coppa', name: 'Baia de ulei', label: 'Baia de ulei', color: '#78716c', alpha: 0.22, pos: [0, -1.75, 0], explode: [0, -0.6, 0],
          info: '<p>Sub motor se află <b>uleiul</b>: este pulverizat pe toate piesele care freacă, așa că nu se uzează și nu se încălzesc prea tare.</p>',
          shapes: [ { t: 'box', s: [1.5, 0.4, 1.0] }, { t: 'box', s: [1.44, 0.14, 0.94], pos: [0, -0.12, 0], color: '#ca8a04', alpha: 0.75 } ] },
        { id: 'miscela', name: 'Amestec aer-benzină', label: 'Amestec', color: '#4ade80', alpha: 0.55, pos: [0, 0.65, 0], chip: true, noLabel: false,
          info: '<p>Aer și benzină amestecate în picături foarte fine. Pentru a arde bine sunt necesare aproximativ <b>15 grame de aer pentru fiecare gram de benzină</b>.</p>',
          shapes: [ { t: 'group', anim: chamber(0.0, 0.5, 0.05), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'scoppio', name: 'Explozia (combustia)', label: 'Explozie', color: '#f97316', alpha: 0.8, pos: [0, 0.65, 0],
          info: '<p>Scânteia aprinde amestecul, care arde într-o clipă: gazele devin foarte fierbinți (peste 2000 °C) și <b>împing</b> foarte tare pistonul în jos.</p>',
          more: '<p>Nu este chiar o explozie, ci o <b>ardere foarte rapidă</b>: flacăra traversează cilindrul în câteva miimi de secundă. Este singurul timp care produce lucru mecanic: ceilalți trei „trăiesc” datorită volantei.</p>',
          shapes: [ { t: 'group', anim: chamber(0.5, 0.64, 0.18).concat([{ type: 'blink', color: '#fde047', wave: 'sin01', rate: 6 }]), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] },
        { id: 'gas-scarico', name: 'Gaze de eșapament', label: 'Gaze de eșapament', color: '#6b7280', alpha: 0.5, pos: [0, 0.65, 0],
          info: '<p>Sunt gazele rămase după ardere: mai ales vapori de apă și <b>dioxid de carbon</b> (CO₂), plus unele substanțe care poluează aerul.</p>',
          shapes: [ { t: 'group', anim: chamber(0.62, 1.0, 0.12), shapes: [ { t: 'cyl', r: 0.44, h: 1, n: 30, pos: [0, -0.5, 0] } ] } ] }
      ]
    },
    steps: [
      { icon: '🔥', title: 'De la căldură la mișcare', play: true, explode: 0,
        html: '<p>Motorul cu ardere internă este un <b>motor cu combustie internă</b>: benzina arde <i>în interiorul</i> cilindrului. Gazele fierbinți se dilată și împing pistonul.</p><p>Pistonul merge sus-jos, iar <b>biela</b> și <b>arborele cotit</b> transformă această mișcare într-o <b>rotație</b>. Fiecare ciclu are 4 timpi: să-i privim unul câte unul!</p>' },
      { icon: '1️⃣', title: 'Admisia: se umple cu aer', loop: [0, 0.25], focus: ['pistone', 'valvola-aspirazione', 'miscela', 'aspirazione', 'cilindro'],
        html: '<p>Pistonul <b>coboară</b>. Supapa de admisie (albastră) este <b>deschisă</b>: cilindrul se umple cu amestec de aer și benzină, ca atunci când tragi pistonul unei seringi.</p>' },
      { icon: '2️⃣', title: 'Compresia: se strânge', loop: [0.25, 0.5], focus: ['pistone', 'miscela', 'valvola-aspirazione', 'valvola-scarico', 'cilindro'],
        html: '<p>Ambele supape sunt <b>închise</b>. Pistonul <b>urcă</b> și strânge amestecul într-un spațiu de aproximativ <b>10 ori mai mic</b>. Cu cât este mai comprimat, cu atât explozia va fi mai puternică.</p>' },
      { icon: '3️⃣', title: 'Explozia: împingerea!', loop: [0.5, 0.75], focus: ['candela', 'scoppio', 'pistone', 'biella', 'cilindro'],
        html: '<p><b>Bujia</b> face o scânteie: amestecul arde dintr-odată, gazele foarte fierbinți se dilată și <b>împing în jos</b> pistonul. Este singurul timp care dă forță motorului!</p><p class="tip">⚡ Se mai numește și <b>destindere</b> sau „timpul motor”.</p>' },
      { icon: '4️⃣', title: 'Evacuarea: gazele afară', loop: [0.75, 1], focus: ['pistone', 'valvola-scarico', 'gas-scarico', 'scarico', 'cilindro'],
        html: '<p>Se deschide supapa de evacuare (roșie). Pistonul <b>urcă din nou</b> și împinge afară gazele arse, spre țeava de eșapament. Cilindrul este gata să înceapă din nou.</p>' },
      { icon: '🔄', title: 'De la piston la roți', focus: ['pistone', 'biella', 'albero-motore', 'volano'], explode: 0.35, view: { rx: 0.15, ry: -0.25 },
        html: '<p><b>Biela</b> leagă pistonul de un „cot” al <b>arborelui cotit</b>: așa mișcarea sus-jos devine o rotație, exact ca picioarele tale pe pedalele bicicletei.</p><p><b>Volanta</b>, grea, continuă să se învârtă din inerție și duce motorul mai departe în ceilalți trei timpi.</p>' },
      { icon: '⏱️', title: 'Momentul potrivit', focus: ['alberi-camme', 'valvola-aspirazione', 'valvola-scarico', 'candela'], explode: 0.2, view: { rx: 0.35, ry: -0.6 },
        html: '<p><b>Arborii cu came</b> deschid supapele la momentul potrivit, iar bujia face scânteia chiar la sfârșitul compresiei. Totul este sincronizat cu arborele cotit.</p><p class="tip">🧮 4 timpi = 2 rotații ale arborelui cotit = 1 explozie.</p>' }
    ],
    facts: [
      { icon: '🧑‍🔬', title: 'Inventatori italieni', html: 'În 1853 toscanii <b>Eugenio Barsanti și Felice Matteucci</b> au brevetat unul dintre primele motoare cu ardere internă. Ciclul în 4 timpi a fost făcut celebru de Nikolaus Otto în 1876.' },
      { icon: '🌡️', title: 'Multă căldură irosită', html: 'Un motor pe benzină transformă în mișcare doar aproximativ <b>o treime</b> din energia benzinei: restul se pierde sub formă de căldură. De aceea este nevoie de radiator!' },
      { icon: '🚗', title: 'Mai mulți cilindri', html: 'Mașinile au de obicei 3 sau 4 cilindri care fac explozie pe rând: așa împingerea este continuă, iar motorul merge lin.' },
      { icon: '🔋', title: 'Dar mașinile electrice?', html: 'Un motor electric nu arde nimic: folosește magneți și curent. Are foarte puține piese în mișcare și nu poluează pe unde circulă.' }
    ],
    quiz: [
      { type: 'order', q: 'Pune în ordine cei 4 timpi ai motorului', items: ['Admisie', 'Compresie', 'Explozie', 'Evacuare'], explain: 'Intră amestecul, este comprimat, arde și împinge, apoi gazele ies.' },
      { type: 'mc', q: 'Care piesă face scânteia?', options: ['Supapa', 'Bujia', 'Volanta', 'Biela'], answer: 1, explain: 'Bujia produce o scânteie electrică care aprinde amestecul.' },
      { type: 'mc', q: 'În care timp primește pistonul împingerea care pune motorul în mișcare?', options: ['Admisie', 'Compresie', 'Explozie', 'Evacuare'], answer: 2, explain: 'Numai la explozie (destindere) gazele fierbinți împing pistonul: este timpul motor.' },
      { type: 'tf', q: 'În timpul compresiei ambele supape sunt închise.', answer: true, explain: 'Dacă o supapă ar fi deschisă, amestecul ar scăpa în loc să fie comprimat.' },
      { type: 'mc', q: 'Ce transformă mișcarea sus-jos a pistonului în rotație?', options: ['Biela și arborele cotit', 'Bujia și supapele', 'Baia de ulei', 'Colectorul de evacuare'], answer: 0, explain: 'Biela împinge cotul arborelui cotit și îl face să se rotească, ca piciorul cu pedala.' },
      { type: 'num', q: 'Câte rotații face arborele cotit într-un ciclu complet de 4 timpi?', answer: 2, explain: 'Fiecare timp înseamnă o jumătate de rotație: 4 × ½ = 2 rotații.' }
    ]
  });
})();
