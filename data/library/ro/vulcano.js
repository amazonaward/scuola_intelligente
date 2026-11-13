/* Il vulcano (strato-vulcano) tagliato a metà. La metà anteriore ("fianco") si sposta con Esplodi o diventa trasparente nei passi;
   sul piano del taglio (z = Z0) si vedono strati, camera magmatica e camino. */
(function () {
  const Z0 = 0.34, H = 3.0, RB = 4.2, RIM = 0.6;
  const rad = (y) => RIM + (RB - RIM) * Math.pow(1 - y / H, 1.6);
  const PROF = [[0, 0]].concat([0, 0.3, 0.7, 1.1, 1.5, 1.9, 2.3, 2.6, 2.85, 3.0].map((y) => [rad(y), y]), [[RIM * 0.7, H - 0.12], [0.18, H - 0.38], [0, H - 0.4]]);
  /* "mezzo tornio": fette estruse ruotate intorno a y, da a0 a a1 gradi (0→180 = metà dietro, 180→360 = metà davanti) */
  const halfLathe = (prof, a0, a1, N, color) => {
    const th = (a1 - a0) / N, d = 2 * RB * Math.tan((th * Math.PI / 180) / 2) * 1.12, s = [];
    for (let k = 0; k <= N; k++) s.push({ t: 'extrude', pts: prof, d, rot: [0, a0 + k * th, 0], color, smooth: true });
    return s;
  };
  /* strati del terreno (box impilati) tra z = za e z = zb */
  const LAYERS = [ [0, -0.18, '#4d7c0f'], [-0.18, -0.7, '#a16207'], [-0.7, -1.2, '#78716c'], [-1.2, -1.75, '#57534e'], [-1.75, -2.4, '#44403c'] ];
  const ground = (za, zb) => LAYERS.map(([y0, y1, c]) => ({ t: 'box', s: [10, y0 - y1, zb - za], pos: [0, (y0 + y1) / 2, (za + zb) / 2], color: c }));
  /* bande di strati sul taglio del cono: poligoni tra due quote */
  const band = (y0, y1, color) => {
    const ys = []; for (let i = 0; i <= 6; i++) ys.push(y0 + (y1 - y0) * i / 6);
    const right = ys.map((y) => [rad(y), y]), left = ys.slice().reverse().map((y) => [-rad(y), y]);
    return { t: 'extrude', pts: right.concat(left), d: 0.04, pos: [0, 0, Z0], color };
  };
  const BANDS = [];
  const bc = ['#6b5b53', '#a8a29e', '#57534e', '#9ca3af', '#7c6f64', '#b8b2a7', '#5b524b'];
  [0, 0.35, 0.75, 1.15, 1.55, 1.95, 2.35].forEach((y, i, a) => BANDS.push(band(y, Math.min(a[i + 1] || 2.62, 2.62), bc[i])));
  /* colate di lava sul fianco anteriore */
  const flow = (ang, wig, len) => {
    const pts = []; for (let i = 0; i <= 10; i++) { const y = H - 0.05 - i * (H - 0.1) * len / 10; const a = (ang + Math.sin(i * 0.9) * wig) * Math.PI / 180; const r = rad(y) + 0.06; pts.push([r * Math.cos(a), y + 0.02, -r * Math.sin(a)]); }
    return pts;
  };
  const lavaFlow = (ang, wig, len, w) => ({ t: 'pipe', r: w, n: 10, curve: true, pts: flow(ang, wig, len), color: '#ea580c', anim: { type: 'blink', color: '#fde047', amount: 0.55, rate: 1.4 } });
  /* lapilli della fontana di lava */
  const bombs = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 2.4, r = 0.6 + (i % 4) * 0.25, dx = Math.cos(a) * r, dz = Math.sin(a) * r;
    const pts = [[0, H - 0.3, Z0], [dx * 0.25, H + 0.6, Z0 + dz * 0.25], [dx * 0.55, H + 1.0 + (i % 3) * 0.15, Z0 + dz * 0.55], [dx * 0.85, H + 0.7, Z0 + dz * 0.85], [dx * 1.1, H - 0.1, Z0 + dz * 1.1]];
    bombs.push({ t: 'sphere', r: 0.06 + (i % 3) * 0.015, n: 6, m: 8, pos: pts[0], color: i % 2 ? '#f97316' : '#fde047', anim: [ { type: 'path', pts, wave: 'saw', rate: 1.1, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1.1, phase: i / 14 } ] });
  }
  const ash = [];
  for (let i = 0; i < 10; i++) {
    const a = i * 2.1, s = 0.35 + (i % 3) * 0.15;
    ash.push({ t: 'sphere', r: s, n: 10, m: 14, pos: [0, H + 0.3, Z0], color: i % 2 ? '#78716c' : '#a8a29e',
      anim: [ { type: 'path', pts: [[0, H + 0.3, Z0], [Math.cos(a) * 0.4, H + 1.6, Z0 + Math.sin(a) * 0.3], [Math.cos(a) * 0.9 + 0.6, H + 3.0, Z0 + Math.sin(a) * 0.6]], wave: 'saw', rate: 0.35, phase: i / 10 },
        { type: 'scale', from: 0.4, to: 1.5, wave: 'saw', rate: 0.35, phase: i / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.35, phase: i / 10 } ] });
  }
  const magmaUp = [];
  for (let i = 0; i < 10; i++) magmaUp.push({ t: 'sphere', r: 0.09, n: 6, m: 8, pos: [0, -1.1, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, -1.1, Z0 + 0.05], [0, 0.5, Z0 + 0.05], [0, H - 0.4, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 10 } });
  for (let i = 0; i < 4; i++) magmaUp.push({ t: 'sphere', r: 0.07, n: 6, m: 8, pos: [0, 0.95, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, 0.95, Z0 + 0.05], [1.1, 1.0, Z0 + 0.05], [rad(1.25) - 0.1, 1.25, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 4 } });


  LIBRARY({
    lang: 'ro',
    id: 'vulcano',
    title: 'Vulcanul',
    intro: 'Un vulcan este o deschidere în scoarța Pământului prin care iese <b>magma</b>, rocă topită care vine din adânc. Italia are unii foarte faimoși: <b>Etna</b>, <b>Vezuviu</b>, <b>Stromboli</b>. Hai să-l tăiem în două și să privim înăuntru!',
    model: {
      rx: 0.32, ry: -0.42, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'fianco', name: 'Flancul vulcanului', label: 'Flanc', color: '#6b5b53', explode: [7.5, -0.8, 2.5],
          info: '<p>Jumătatea vulcanului pe care o vedem din exterior: un <b>con</b> de rocă format din multe erupții. Pe flancurile joase crește vegetația: cenușa vulcanică face pământul foarte fertil.</p>',
          more: '<p>Pe versanții Etnei și ai Vezuviului se cultivă viță-de-vie, citrice și fistic tocmai datorită solurilor vulcanice, bogate în minerale.</p>',
          shapes: halfLathe(PROF, 180, 360, 22, '#6b5b53').concat(ground(Z0, 3.4)) },
        { id: 'cono', name: 'Conul vulcanic', label: 'Con', color: '#5b524b', explode: [0, 0, -0.6],
          info: '<p>Este muntele propriu-zis. Fiecare erupție adaugă un strat de lavă sau de cenușă: așa vulcanul <b>crește</b> în timp, chiar cu mulți metri în câțiva ani.</p>',
          shapes: halfLathe(PROF, 0, 180, 22, '#5b524b') },
        { id: 'strati', name: 'Straturi de lavă și cenușă', label: 'Straturi', color: '#a8a29e', explode: [0, 0, 0.05],
          info: '<p>Dacă tăiem conul, se văd <b>straturi</b> alternante: lavă solidificată (închisă la culoare) și cenușă și lapili (mai deschise). De aceea acești vulcani se numesc <b>stratovulcani</b>.</p>',
          more: '<p>Există și <b>vulcani-scut</b>, ca cei din Hawaii: largi și joși, făcuți doar din curgeri de lavă foarte fluidă.</p>',
          shapes: BANDS },
        { id: 'crosta', name: 'Scoarța terestră', label: 'Scoarță', color: '#57534e', explode: [0, -0.4, -0.6],
          info: '<p>Sub picioarele noastre sunt straturi de pământ și de <b>rocă</b>: este scoarța terestră, „coaja" planetei. În unele locuri este spartă sau subțire, iar magma reușește să urce.</p>',
          shapes: ground(-3.0, Z0) },
        { id: 'camera', name: 'Camera magmatică', label: 'Camera magmatică', color: '#dc2626', explode: [0, -0.5, 0.6],
          info: '<p>Un mare „buzunar" de <b>magmă</b> la câțiva kilometri adâncime. Magma este rocă topită la peste <b>1000 °C</b>, plină de gaze dizolvate, ca bulele dintr-o băutură acidulată.</p>',
          more: '<p>Magma este mai ușoară decât rocile din jur și tinde să urce. Când <b>presiunea</b> gazelor din cameră devine prea mare, magma își face loc spre suprafață: începe erupția.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 16, m: 28, pos: [0, -1.4, Z0], scale: [1.5, 0.55, 0.9], anim: { type: 'blink', color: '#f97316', amount: 0.5, rate: 0.8 } },
            { t: 'pipe', r: 0.2, n: 12, curve: true, pts: [[0.4, -2.45, Z0], [0.45, -2.1, Z0], [0.2, -1.8, Z0]], color: '#b91c1c' } ] },
        { id: 'camino', name: 'Coșul vulcanic', label: 'Coș', color: '#ea580c', explode: [0, 0.2, 0.6],
          info: '<p>„Țeava" naturală pe care magma urcă din cameră până la crater.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 14, curve: true, pts: [[0, -0.9, Z0], [0.05, 0.3, Z0], [-0.03, 1.6, Z0], [0, H - 0.38, Z0]] } ] },
        { id: 'magma', name: 'Magma care urcă', label: 'Magmă', color: '#fde047', explode: [0, 0.2, 0.7], chip: true,
          info: '<p>Împinsă de gaze, magma urcă prin coș. Când iese la suprafață pierde gazele și din acel moment se numește <b>lavă</b>.</p>',
          shapes: magmaUp },
        { id: 'condotto', name: 'Canal lateral și con secundar', label: 'Gură laterală', color: '#c2410c', explode: [0.5, 0.1, 0.5],
          info: '<p>Uneori magma găsește o cale laterală și deschide o <b>gură laterală</b> pe flancul vulcanului: acolo se naște un mic con secundar.</p>',
          more: '<p>Etna are peste <b>300 de conuri secundare</b> (adventive) pe flancurile sale, născute din erupții laterale de-a lungul secolelor.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[0, 0.95, Z0], [0.7, 0.95, Z0], [rad(1.25) - 0.05, 1.25, Z0]] },
            { t: 'lathe', n: 20, pos: [rad(1.25) + 0.05, 1.12, Z0 - 0.1], pts: [[0.42, 0], [0.3, 0.12], [0.12, 0.25], [0.06, 0.22], [0, 0.2]], color: '#44403c' } ] },
        { id: 'cratere', name: 'Craterul', color: '#292524', explode: [0, 0.5, 0],
          info: '<p>Deschiderea din vârful vulcanului, în formă de strachină. Înăuntru poate fi un <b>lac de lavă</b> care clocotește.</p>',
          shapes: [ { t: 'torus', R: RIM, r: 0.07, n: 30, m: 8, pos: [0, H, 0], color: '#3f3f46' },
            { t: 'cyl', r: 0.45, h: 0.04, n: 24, pos: [0, H - 0.3, 0], color: '#f97316', anim: { type: 'blink', color: '#fde047', amount: 0.8, rate: 2 } } ] },
        { id: 'fontana', name: 'Fântână de lavă și lapili', label: 'Lapili', color: '#f97316', explode: [0, 0.6, 0],
          info: '<p>În timpul unei erupții explozive, vulcanul aruncă în aer bucăți de lavă care se răcesc în zbor: cele mici sunt <b>lapili</b>, cele mari cât o minge sunt <b>bombe vulcanice</b>.</p>',
          shapes: bombs },
        { id: 'nube', name: 'Nor de cenușă și gaze', label: 'Nor de cenușă', color: '#78716c', explode: [0, 1.0, 0],
          info: '<p>Vulcanul emite vapori de apă, gaze și <b>cenușă</b>: fragmente minuscule de rocă. Norul poate urca kilometri întregi, iar vântul îl duce departe.</p>',
          more: '<p>În 2010, norul vulcanului islandez Eyjafjallajökull a blocat zile întregi zborurile din jumătate de Europă: cenușa poate deteriora motoarele avioanelor.</p>',
          shapes: ash },
        { id: 'colate', name: 'Curgeri de lavă', label: 'Curgeri de lavă', color: '#ea580c', explode: [7.5, -0.8, 2.5],
          info: '<p>Lava coboară pe flancuri ca un râu roșu. Răcindu-se devine închisă la culoare și tare: este <b>rocă nouă</b> (bazalt).</p>',
          more: '<p>Curgerile Etnei înaintează de obicei încet, câțiva metri pe oră: este timp să te îndepărtezi. Mai periculoși sunt <b>norii ardenți</b> (curenți piroclastici), ca cel care în anul 79 d.Hr. a îngropat Pompeii.</p>',
          shapes: [ lavaFlow(240, 6, 0.75, 0.1), lavaFlow(290, 9, 0.95, 0.12), lavaFlow(320, 5, 0.6, 0.08) ] }
      ]
    },
    steps: [
      { icon: '🌋', title: 'Un munte de foc', explode: 0,
        html: '<p>Din exterior, un vulcan pare un munte în formă de <b>con</b>, cu o strachină în vârf: <b>craterul</b>. Dar povestea lui începe mult mai jos, sub pământ.</p>' },
      { icon: '🔪', title: 'Să-l tăiem în două', explode: 1,
        html: '<p>Să scoatem jumătatea din față. Acum vedem interiorul: sub vulcan se află <b>camera magmatică</b>, legată de crater printr-o țeavă lungă, <b>coșul</b>.</p>' },
      { icon: '🔥', title: 'Camera magmatică', explode: 1, focus: ['camera', 'crosta', 'magma', 'cono', 'strati'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.3,
        html: '<p>La câțiva kilometri adâncime se adună <b>magma</b>: rocă topită la peste 1000 °C, plină de gaze. Fiind mai ușoară decât rocile din jur, magma tinde să <b>urce</b>.</p><p class="tip">🥤 Gazul din magmă este ca dioxidul de carbon dintr-o sticlă de suc: dacă o deschizi brusc… țâșnește afară!</p>' },
      { icon: '⬆️', title: 'Magma urcă', explode: 1, focus: ['camino', 'magma', 'camera', 'condotto', 'cono', 'strati', 'crosta'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>Când presiunea gazelor este prea mare, magma urcă prin <b>coș</b>. Uneori găsește și o cale laterală și deschide o <b>gură pe flanc</b>.</p>' },
      { icon: '💥', title: 'Erupția', explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Magma iese din crater și devine <b>lavă</b>. În erupțiile explozive zboară în aer în bucăți (<b>lapili</b> și <b>bombe</b>) și se ridică un mare <b>nor de cenușă și gaze</b>.</p>' },
      { icon: '🟠', title: 'Curgerile de lavă', explode: 0, view: { rx: 0.35, ry: 0.15 },
        html: '<p>Lava coboară pe flancuri ca un râu lent și incandescent. Răcindu-se devine <b>rocă</b> închisă la culoare: vulcanul se construiește singur!</p>' },
      { icon: '🍰', title: 'Straturi peste straturi', explode: 1, focus: ['strati', 'cono', 'crosta'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.2,
        html: '<p>Fiecare erupție adaugă un strat: lava (închisă la culoare) și cenușa (deschisă) se alternează ca într-un tort cu straturi. De aceea Etna și Vezuviul se numesc <b>stratovulcani</b>.</p><p class="tip">🇮🇹 În Italia, vulcanii activi se află lângă locul unde placa africană se împinge sub cea europeană.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'Etna, uriașul Europei', html: '<b>Etna</b>, în Sicilia, este cel mai înalt vulcan activ din Europa (aproximativ 3400 m) și erupe foarte des.' },
      { icon: '🏛️', title: 'Pompeii', html: 'În anul <b>79 d.Hr.</b>, Vezuviul a îngropat Pompeii și Herculaneum sub metri de cenușă. Săpăturile ne arată cum era viața vechilor romani.' },
      { icon: '🗼', title: 'Farul Mediteranei', html: '<b>Stromboli</b> aruncă mici fântâni de lavă la fiecare 10–20 de minute de mii de ani: marinarii îl foloseau drept far.' },
      { icon: '🌊', title: 'Vulcani submarini', html: 'Cei mai mulți vulcani de pe Pământ se află <b>sub mare</b>. Cel mai mare vulcan submarin din Europa, Marsili, se află în Marea Tireniană.' },
      { icon: '🪐', title: 'Vulcani pe alte lumi', html: 'Cel mai înalt vulcan din Sistemul Solar este <b>Olympus Mons</b> de pe Marte: are aproximativ 22 km înălțime, de aproape trei ori cât Everest.' }
    ],
    quiz: [
      { type: 'mc', q: 'Cum se numește roca topită care se află sub vulcan?', options: ['Lavă', 'Magmă', 'Cenușă', 'Bazalt'], answer: 1, explain: 'Sub pământ se numește magmă; când iese la suprafață devine lavă.' },
      { type: 'mc', q: 'Cum se numește „țeava" prin care magma urcă până la crater?', options: ['Coș', 'Cameră', 'Flanc', 'Lapili'], answer: 0, explain: 'Coșul leagă camera magmatică de crater.' },
      { type: 'tf', q: 'Magma urcă pentru că este mai ușoară decât rocile din jur și este împinsă de gaze.', answer: true, explain: 'Este mai puțin densă, iar gazele dizolvate cresc presiunea.' },
      { type: 'mc', q: 'Care vulcan a îngropat Pompeii în anul 79 d.Hr.?', options: ['Etna', 'Stromboli', 'Vezuviul', 'Vulcano'], answer: 2, explain: 'Vezuviul, lângă Napoli.' },
      { type: 'order', q: 'Pune în ordine drumul magmei', items: ['Camera magmatică', 'Coșul', 'Craterul', 'Curgerea de lavă'], explain: 'Din cameră urcă prin coș, iese din crater și coboară ca o curgere de lavă.' },
      { type: 'mc', q: 'De ce se numesc „stratovulcani" Etna și Vezuviul?', options: ['Pentru că sunt stratosferici', 'Pentru că sunt făcuți din straturi alternante de lavă și cenușă', 'Pentru că sunt plați', 'Pentru că sunt sub mare'], answer: 1, explain: 'Fiecare erupție adaugă un strat de lavă sau de cenușă.' }
    ]
  });
})();
