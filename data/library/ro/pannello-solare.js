/* Panoul solar fotovoltaic: în stânga modulul pe un suport (straturile se despart cu Desface),
   în dreapta o celulă „mărită” ca să vedem cum lumina pune electronii în mișcare și aprinde un bec. */
(function () {
  const TILT = 30, PC = [0, 1.7, 0], D = Math.PI / 180;
  const N = [0, Math.cos(TILT * D), Math.sin(TILT * D)];               // normala panoului
  const along = (k) => [0, N[1] * k, N[2] * k];
  const W = (x, y, z) => [x, PC[1] + y * Math.cos(TILT * D) - z * Math.sin(TILT * D), y * Math.sin(TILT * D) + z * Math.cos(TILT * D)];
  const P = (shapes) => [ { t: 'group', pos: PC, rot: [TILT, 0, 0], shapes } ];
  const CS = 0.33, NX = 6, NZ = 10, PW = NX * CS, PL = NZ * CS;
  const cells = [];
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [CS - 0.02, 0.012, CS - 0.02], pos: [-PW / 2 + CS * (i + 0.5), 0, -PL / 2 + CS * (j + 0.5)] });
  for (let i = 0; i < NX; i++) for (const o of [-0.08, 0.08]) cells.push({ t: 'box', s: [0.014, 0.004, PL - 0.04], pos: [-PW / 2 + CS * (i + 0.5) + o, 0.008, 0], color: '#e2e8f0', decal: 1 });
  for (let j = 0; j < NZ; j++) cells.push({ t: 'box', s: [PW - 0.04, 0.003, 0.006], pos: [0, 0.008, -PL / 2 + CS * (j + 0.5)], color: '#64748b', decal: 1 });
  const SUN = [-3.4, 5.3, 1.6];
  const photonsPanel = [[-0.6, -1.0], [0.5, -0.3], [-0.2, 0.6], [0.7, 1.2], [-0.8, 0.2], [0.2, -1.4]].map(([x, z], k) => {
    const end = W(x, 0.03, z); return { t: 'sphere', r: 0.06, n: 6, m: 8, pos: SUN, color: '#fde047', anim: [ { type: 'path', pts: [SUN, end], wave: 'saw', rate: 0.6, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.1, rate: 0.6, phase: k / 6 } ] };
  });
  /* celula mărită */
  const ZX = 3.7, ZY = 0.9;                                           // baza blocului
  const TOPN = ZY + 0.95, JUN = ZY + 0.72;
  const CIRCUIT = [[ZX + 0.55, TOPN + 0.05, 0], [ZX + 0.55, TOPN + 0.5, 0], [ZX + 1.25, TOPN + 0.9, 0], [ZX + 1.45, TOPN + 0.9, 0], [ZX + 1.55, TOPN + 0.5, 0], [ZX + 1.55, ZY - 0.05, 0], [ZX + 0.85, ZY - 0.05, 0]];
  const electrons = [];
  for (let k = 0; k < 12; k++) {
    const x = ZX - 0.5 + (k % 4) * 0.3, z = -0.3 + (k % 3) * 0.3;
    const pts = [[x, JUN, z], [x, TOPN, z], [ZX + 0.55, TOPN + 0.05, z * 0.2]].concat(CIRCUIT.slice(1), [[ZX + 0.2, ZY - 0.05, 0], [x, ZY + 0.05, z], [x, JUN - 0.05, z]]);
    electrons.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#2563eb', anim: { type: 'path', pts, wave: 'saw', rate: 0.22, phase: k / 12 } });
  }
  const holes = Array.from({ length: 8 }, (_, k) => { const x = ZX - 0.6 + (k % 4) * 0.35, z = -0.35 + (k % 2) * 0.6; return { t: 'sphere', r: 0.05, n: 6, m: 8, pos: [x, JUN - 0.05, z], color: '#f87171', anim: [ { type: 'path', pts: [[x, JUN - 0.05, z], [x + 0.05, ZY + 0.08, z]], wave: 'saw', rate: 0.45, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.45, phase: k / 8 } ] }; });
  const photonsCell = Array.from({ length: 6 }, (_, k) => { const x = ZX - 0.6 + k * 0.24, z = -0.2 + (k % 3) * 0.2; return { t: 'sphere', r: 0.055, n: 6, m: 8, pos: [x - 0.6, TOPN + 1.4, z], color: '#fde047', anim: [ { type: 'path', pts: [[x - 0.6, TOPN + 1.4, z], [x, JUN, z]], wave: 'saw', rate: 0.7, phase: k / 6 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.92, ramp: 0.08, rate: 0.7, phase: k / 6 } ] }; });
  const cellOnPanel = W(-PW / 2 + CS * 5.5, 0.02, -PL / 2 + CS * 6.5);

  LIBRARY({
    lang: 'ro',
    id: 'pannello-solare',
    title: 'Panoul solar',
    intro: 'Un panou solar <b>fotovoltaic</b> transformă lumina Soarelui direct în <b>electricitate</b>, fără zgomot, fără fum și fără piese care se mișcă. Secretul stă într-un material special: <b>siliciul</b>.',
    model: {
      rx: 0.32, ry: -0.35, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'sole', name: 'Soare', color: '#fbbf24', explode: [-0.6, 0.4, 0],
          info: '<p>Soarele trimite pe Pământ o cantitate uriașă de energie sub formă de lumină: într-o oră ajunge mai multă decât folosește omenirea într-un an întreg!</p>',
          shapes: [ { t: 'sphere', r: 0.6, n: 16, m: 24, pos: SUN }, { t: 'sphere', r: 0.8, n: 14, m: 20, pos: SUN, color: '#fde68a', alpha: 0.3, anim: { type: 'scale', from: 1, to: 1.12, rate: 0.6 } } ]
            .concat(Array.from({ length: 10 }, (_, k) => ({ t: 'group', pos: SUN, rot: [0, 0, k * 36], shapes: [ { t: 'cone', r: 0.08, h: 0.35, n: 8, pos: [0, 0.95, 0], color: '#fcd34d', anim: { type: 'move', dir: [0, 1, 0], amp: 0.06, rate: 1, phase: k * 0.1 } } ] }))) },
        { id: 'luce', name: 'Lumina Soarelui (fotoni)', label: 'Fotoni', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>Lumina este făcută din mici „pachețele” de energie numite <b>fotoni</b>. Când un foton lovește o celulă solară, își poate da energia unui electron.</p>',
          shapes: photonsPanel.concat(photonsCell) },
        { id: 'vetro', name: 'Sticlă călită', label: 'Sticlă', color: '#e0f2fe', alpha: 0.3, explode: along(2.2),
          info: '<p>Un strat de <b>sticlă</b> foarte rezistentă protejează celulele de ploaie, zăpadă și grindină, lăsând să treacă aproape toată lumina.</p>',
          more: '<p>Sticla este tratată ca să <b>nu reflecte</b> lumina (antireflex) și este călită: rezistă la boabe de grindină de 2,5 cm aruncate cu 80 km/h.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.02, 0.03, PL + 0.02], pos: [0, 0.045, 0] } ]) },
        { id: 'eva', name: 'Straturi de EVA („lipiciul”)', label: 'EVA', color: '#f8fafc', alpha: 0.22, explode: along(1.5),
          info: '<p>Două foi de plastic transparent înconjoară celulele ca într-un sandviș: le lipesc de sticlă și le protejează de umezeală.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.012, PL], pos: [0, 0.022, 0] }, { t: 'box', s: [PW, 0.012, PL], pos: [0, -0.02, 0], color: '#e2e8f0' } ]) },
        { id: 'celle', name: 'Celule solare', label: 'Celule', color: '#1e3a8a', explode: along(0.8),
          info: '<p><b>Celulele</b> sunt pătrățele foarte subțiri de <b>siliciu</b>, materialul din care e făcut nisipul. Fiecare celulă produce un curent mic; legate laolaltă (aici 60), produc destulă energie pentru multe electrocasnice.</p>',
          more: '<p>Fiecare celulă dă aproximativ <b>0,5 volți</b>: legându-le în șir (în serie), tensiunile se adună, ca bateriile unei telecomenzi. Liniile argintii sunt <b>contactele</b> care adună curentul.</p>',
          shapes: P(cells) },
        { id: 'retro', name: 'Folia din spate', label: 'Spate', color: '#f8fafc', explode: along(-0.5),
          info: '<p>O folie de plastic alb închide panoul în spate: izolează părțile electrice și îl protejează de apă și de soare.</p>',
          shapes: P([ { t: 'box', s: [PW, 0.015, PL], pos: [0, -0.035, 0] } ]) },
        { id: 'cornice', name: 'Ramă de aluminiu', label: 'Ramă', color: '#cbd5e1', explode: along(0),
          info: '<p>O ramă de <b>aluminiu</b>, ușoară și care nu rugini, face panoul rigid și permite fixarea lui de structură.</p>',
          shapes: P([ { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, PL / 2 + 0.04] }, { t: 'box', s: [PW + 0.16, 0.1, 0.08], pos: [0, 0.0, -PL / 2 - 0.04] },
            { t: 'box', s: [0.08, 0.1, PL], pos: [PW / 2 + 0.04, 0, 0] }, { t: 'box', s: [0.08, 0.1, PL], pos: [-PW / 2 - 0.04, 0, 0] },
            { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, PL / 2 + 0.07], color: '#e2e8f0' }, { t: 'box', s: [PW + 0.16, 0.012, 0.02], pos: [0, 0.056, -PL / 2 - 0.07], color: '#e2e8f0' } ]) },
        { id: 'scatola', name: 'Doză de conexiuni și cabluri', label: 'Doză de conexiuni', color: '#1f2937', explode: along(-1.0),
          info: '<p>În spatele panoului, o cutiuță adună curentul tuturor celulelor. Conține <b>diode</b>, care previn problemele atunci când o parte a panoului este în umbră.</p>',
          shapes: P([ { t: 'box', s: [0.36, 0.08, 0.22], pos: [0, -0.09, -PL / 2 + 0.35] }, { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.12, -0.12, -PL / 2 + 0.35], [0.4, -0.3, -PL / 2 + 0.6], [0.6, -0.6, -0.3]], color: '#111827' },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[-0.12, -0.12, -PL / 2 + 0.35], [-0.4, -0.3, -PL / 2 + 0.6], [-0.5, -0.6, -0.3]], color: '#b91c1c' } ]) },
        { id: 'struttura', name: 'Structură de susținere', label: 'Structură', color: '#94a3b8', explode: [0, -0.5, 0],
          info: '<p>Suportul ține panoul <b>înclinat</b> spre Soare. În Italia, cea mai bună înclinare este de aproximativ 30°, cu fața spre <b>sud</b>.</p>',
          more: '<p>Unele instalații au „urmăritoare”: motoare care rotesc panourile pe parcursul zilei ca să urmărească Soarele, ca floarea-soarelui, și produc până la 30 % în plus.</p>',
          shapes: [-0.75, 0.75].flatMap((x) => [ { t: 'pipe', r: 0.04, n: 8, pts: [W(x, -0.09, PL / 2 - 0.15), W(x, -0.09, -PL / 2 + 0.15)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, PL / 2 - 0.2)] },
            { t: 'pipe', r: 0.035, n: 8, pts: [[x, 0, W(0, 0, -PL / 2 + 0.3)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'pipe', r: 0.025, n: 6, pts: [[x, 0.05, W(0, 0, PL / 2 - 0.2)[2]], W(x, -0.1, -PL / 2 + 0.3)] },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, PL / 2 - 0.2)[2]], color: '#78716c' }, { t: 'box', s: [0.3, 0.06, 0.3], pos: [x, 0.03, W(0, 0, -PL / 2 + 0.3)[2]], color: '#78716c' } ]) },
        { id: 'zoom', name: 'O celulă la microscop', label: 'Celulă mărită', color: '#94a3b8', explode: [0, 0, 0], chip: true, noLabel: true,
          info: '<p>Mărim o singură celulă și ne uităm la ea „în secțiune”: este făcută din două straturi diferite de siliciu, unul peste altul.</p>',
          shapes: [ { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, TOPN, 0.5]], color: '#64748b', alpha: 0.5 }, { t: 'pipe', r: 0.012, n: 4, pts: [cellOnPanel, [ZX - 0.8, ZY, 0.5]], color: '#64748b', alpha: 0.5 },
            { t: 'box', s: [0.36, 0.03, 0.36], pos: cellOnPanel, rot: [TILT, 0, 0], color: '#facc15', alpha: 0.6 } ] },
        { id: 'silicio-n', name: 'Siliciu de tip N', label: 'Siliciu N', color: '#60a5fa', explode: [0, 0.5, 0],
          info: '<p>Stratul subțire de sus. În siliciu s-a adăugat un pic de <b>fosfor</b>: așa are câțiva electroni (sarcină negativă, N) în plus.</p>',
          more: '<p>Adăugarea unor cantități foarte mici dintr-un alt element se numește <b>dopare</b>. Între stratul N și stratul P se formează <b>joncțiunea</b>: un fel de „tobogan” electric care împinge electronii mereu în aceeași direcție.</p>',
          shapes: [ { t: 'box', s: [1.6, 0.22, 1.0], pos: [ZX, ZY + 0.84, 0] }, { t: 'box', s: [1.6, 0.02, 1.0], pos: [ZX, TOPN - 0.0, 0], color: '#1e3a8a' } ] },
        { id: 'giunzione', name: 'Joncțiunea P-N', label: 'Joncțiune', color: '#a855f7', explode: [0, 0.25, 0],
          info: '<p>Granița dintre cele două straturi. Aici există un mic câmp electric: când lumina „eliberează” un electron, joncțiunea îl împinge în sus, iar <b>golul</b> (locul rămas liber) în jos.</p>',
          shapes: [ { t: 'box', s: [1.62, 0.05, 1.02], pos: [ZX, JUN, 0], anim: { type: 'blink', color: '#f0abfc', amount: 0.6, rate: 1.4 } } ] },
        { id: 'silicio-p', name: 'Siliciu de tip P', label: 'Siliciu P', color: '#f9a8d4', explode: [0, -0.2, 0],
          info: '<p>Stratul gros de jos. Aici în siliciu s-a adăugat un pic de <b>bor</b>: lipsesc câțiva electroni și rămân „locuri libere”, <b>golurile</b> (sarcină pozitivă, P).</p>',
          shapes: [ { t: 'box', s: [1.6, 0.68, 1.0], pos: [ZX, ZY + 0.36, 0] } ] },
        { id: 'contatti', name: 'Contacte metalice', label: 'Contacte', color: '#e2e8f0', explode: [0, 0, 0.5],
          info: '<p>Niște fâșii subțiri de argint deasupra (care lasă lumina să treacă) și o placă de aluminiu dedesubt adună electronii și îi trimit în fire.</p>',
          shapes: [-0.5, 0, 0.5].map((x) => ({ t: 'box', s: [0.06, 0.05, 1.02], pos: [ZX + x, TOPN + 0.035, 0] })).concat([ { t: 'box', s: [1.62, 0.06, 1.02], pos: [ZX, ZY - 0.02, 0], color: '#9ca3af' } ]) },
        { id: 'elettroni', name: 'Electroni în mișcare', label: 'Electroni', color: '#2563eb', explode: [0, 0, 0], chip: true,
          info: '<p><b>Electronii</b> împinși de joncțiune ies prin contactele de sus, trec prin fir, aprind becul și se întorc pe la baza celulei. Un flux ordonat de electroni este <b>curentul electric</b>!</p>',
          more: '<p>Panoul produce <b>curent continuu</b> (electronii merg mereu în aceeași direcție), ca o baterie. Prizele din casă folosesc însă curent alternativ: este nevoie de <b>invertor</b>.</p>',
          shapes: electrons },
        { id: 'lacune', name: 'Goluri', color: '#f87171', explode: [0, 0, 0], chip: true,
          info: '<p><b>Golurile</b> sunt „găurile” lăsate de electroni: se comportă ca niște sarcini pozitive și merg în jos, unde întâlnesc electronii care se întorc din circuit.</p>',
          shapes: holes },
        { id: 'lampadina', name: 'Circuit și bec', label: 'Bec', color: '#fde047', explode: [0.4, 0.3, 0],
          info: '<p>Legând cele două contacte cu un fir se formează un <b>circuit</b>: curentul produs de lumină aprinde becul. Dacă Soarele se ascunde, becul se stinge treptat.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: CIRCUIT, color: '#b45309' },
            { t: 'sphere', r: 0.22, n: 14, m: 20, pos: [ZX + 1.35, TOPN + 1.15, 0], color: '#fef08a', alpha: 0.85, anim: { type: 'blink', color: '#ffffff', amount: 0.7, rate: 1 } },
            { t: 'cyl', r: 0.1, h: 0.16, n: 14, pos: [ZX + 1.35, TOPN + 0.92, 0], color: '#94a3b8' } ] },
        { id: 'inverter', name: 'Invertor', color: '#e5e7eb', explode: [0.4, -0.2, 0.6],
          info: '<p>O cutie care transformă curentul continuu al panoului în <b>curent alternativ</b>, cel din prizele de acasă, și îl trimite în rețea.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.6, 0.2], pos: [1.6, 0.42, 1.2] }, { t: 'box', s: [0.25, 0.12, 0.02], pos: [1.6, 0.55, 1.31], color: '#16a34a', decal: 1, anim: { type: 'blink', color: '#86efac', amount: 0.6, rate: 2 } },
            { t: 'pipe', r: 0.025, n: 6, curve: true, pts: [[0.6, 0.85, -0.3], [1.0, 0.4, 0.3], [1.5, 0.2, 1.15]], color: '#111827' } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'Electricitate din lumină', explode: 0,
        html: '<p>Un panou solar nu are motoare, nici roți dințate: <b>lumina însăși</b> produce curentul. Acest fenomen se numește <b>efect fotovoltaic</b> („foto” = lumină, „volt” = electricitate).</p>' },
      { icon: '🥪', title: 'Un sandviș cu straturi', explode: 1, focus: ['vetro', 'eva', 'celle', 'retro', 'cornice', 'scatola'], view: { rx: 0.25, ry: -0.9 },
        html: '<p>Panoul este un „sandviș”: deasupra <b>sticla</b>, apoi plasticul transparent (<b>EVA</b>), <b>celulele</b> de siliciu, încă un strat de EVA și <b>folia din spate</b>. Totul este ținut de o <b>ramă</b> de aluminiu.</p>' },
      { icon: '🔲', title: 'Celulele de siliciu', focus: ['celle', 'cornice', 'luce'], view: { rx: 0.7, ry: -0.3 }, zoom: 1.3,
        html: '<p>Fiecare pătrățel albastru este o <b>celulă</b> de siliciu, subțire ca o foaie de hârtie. Liniile argintii adună curentul. Celulele sunt legate între ele în șir, ca bateriile dintr-o lanternă.</p>' },
      { icon: '🔬', title: 'O celulă la microscop', focus: ['zoom', 'silicio-n', 'silicio-p', 'giunzione', 'contatti'], view: { rx: 0.2, ry: -0.15 },
        html: '<p>Mărim o celulă. Este făcută din două straturi: siliciul <b>N</b> (sus), cu electroni în plus, și siliciul <b>P</b> (jos), cu „locuri libere”. Acolo unde se ating se află <b>joncțiunea</b>.</p>' },
      { icon: '⚡', title: 'Lumina eliberează electronii', focus: ['luce', 'giunzione', 'elettroni', 'lacune', 'silicio-n', 'silicio-p'], view: { rx: 0.15, ry: -0.05 }, zoom: 1.2,
        html: '<p>Un <b>foton</b> lovește siliciul și „desprinde” un electron. Joncțiunea împinge <b>electronul</b> în sus și <b>golul</b> în jos: se creează o diferență de sarcină, ca într-o baterie.</p>' },
      { icon: '💡', title: 'Se aprinde becul', focus: ['elettroni', 'lampadina', 'contatti', 'lacune'], view: { rx: 0.15, ry: 0.15 },
        html: '<p>Dacă legăm partea de sus și cea de jos cu un fir, electronii curg prin <b>circuit</b>: este <b>curentul electric</b>, care aprinde becul și apoi se întoarce în celulă. Cât timp există lumină, circuitul continuă!</p>' },
      { icon: '🏠', title: 'De pe acoperiș la priză', focus: ['inverter', 'scatola', 'struttura', 'celle'], view: { rx: 0.3, ry: -0.9 },
        html: '<p><b>Doza de conexiuni</b> adună curentul, iar <b>invertorul</b> îl transformă în cel din prizele de acasă. Panoul trebuie înclinat spre <b>sud</b>, cu aproximativ 30°, ca să primească cât mai mult Soare.</p><p class="tip">🌱 Energia solară este <b>regenerabilă</b> și curată: Soarele va străluci încă miliarde de ani.</p>' }
    ],
    facts: [
      { icon: '🛰️', title: 'Născute pentru spațiu', html: 'Primele panouri solare practice au fost folosite în 1958 pe satelitul <b>Vanguard 1</b>, care funcționează și astăzi, după mai bine de 65 de ani pe orbită!' },
      { icon: '🏖️', title: 'Făcute din nisip', html: 'Siliciul din celule se obține din <b>nisip</b> (cuarț), unul dintre cele mai răspândite materiale de pe Pământ.' },
      { icon: '🥵', title: 'Căldura prea mare nu ajută', html: 'Panourilor le place lumina, nu căldura: când se încălzesc prea tare, produc un pic mai puțin. De aceea funcționează foarte bine în zilele reci și senine.' },
      { icon: '⏳', title: 'Viață lungă', html: 'Un panou solar durează mai mult de <b>25 de ani</b> și la sfârșit poate fi reciclat: sticla, aluminiul și siliciul se recuperează aproape complet.' },
      { icon: '🧮', title: 'Cât produce?', html: 'În Italia, un panou de casă (aproximativ 400 W) produce într-un an cam 500 kWh: suficient ca să țină în funcțiune un frigider timp de un an întreg.' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce transformă un panou fotovoltaic?', options: ['Căldura în vânt', 'Lumina în electricitate', 'Apa în abur', 'Zgomotul în lumină'], answer: 1, explain: 'Este efectul fotovoltaic: lumina pune electronii în mișcare.' },
      { type: 'mc', q: 'Din ce material sunt făcute aproape toate celulele solare?', options: ['Cupru', 'Siliciu', 'Lemn', 'Plastic'], answer: 1, explain: 'Siliciul, care se obține din nisip.' },
      { type: 'tf', q: 'Un panou solar are multe roți dințate care se învârt.', answer: false, explain: 'Nu are piese în mișcare: lumina produce direct curentul.' },
      { type: 'mc', q: 'La ce folosește invertorul?', options: ['La curățarea panoului', 'La transformarea curentului continuu în curent alternativ', 'La urmărirea Soarelui', 'La răcirea celulelor'], answer: 1, explain: 'Prizele de acasă folosesc curent alternativ; panoul produce curent continuu.' },
      { type: 'mc', q: 'În Italia, spre ce punct cardinal e bine să fie orientate panourile?', options: ['Nord', 'Sud', 'Est', 'Vest'], answer: 1, explain: 'În emisfera noastră, la prânz Soarele se află spre sud.' },
      { type: 'order', q: 'Pune în ordine: cum apare curentul în celulă', items: ['Fotonul lovește siliciul', 'Un electron se eliberează', 'Joncțiunea îl împinge în sus', 'Electronul parcurge circuitul', 'Becul se aprinde'], explain: 'Lumină → electron liber → separare în joncțiune → curent în circuit.' }
    ]
  });
})();
