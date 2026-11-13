/* La lavatrice a carica frontale. Davanti = +z, alto = +y; il cestello gira intorno all'asse z (centro a y = 0.82).
   Un programma (cycle 1): 0–0.12 carico acqua, 0.12–0.5 lavaggio, 0.5–0.62 scarico, 0.62–1 centrifuga. */
(function () {
  const CY = 0.82, TAU = Math.PI * 2;
  const circle = (r, n, cx, cy, a0) => Array.from({ length: n }, (_, i) => { const a = (a0 || 0) + (i / n) * TAU; return [(cx || 0) + r * Math.cos(a), (cy || 0) + r * Math.sin(a)]; });
  const ring = (o, i) => o.concat([o[0], i[0]], i.slice(1).reverse(), [i[0]]);
  /* pannello frontale con il foro dell'oblò */
  const front = ring([[0.6, 0], [0.6, 1.5], [-0.6, 1.5], [-0.6, 0]], circle(0.36, 32, 0, CY, -Math.PI / 2 + 0.001));
  /* acqua: segmento circolare sotto una corda (sezione della vasca) */
  const seg = (() => { const pts = [], r = 0.46, h = 0.3, a = Math.acos((r - h) / r); for (let i = 0; i <= 16; i++) { const t = -Math.PI / 2 - a + (i / 16) * 2 * a; pts.push([r * Math.cos(t), r * Math.sin(t) + r]); } return pts; })();
  const holes = [];
  for (let k = 0; k < 12; k++) for (let j = 0; j < 3; j++) { const a = (k / 12) * 360 + j * 10; holes.push({ t: 'box', s: [0.035, 0.008, 0.035], pos: [0.442 * Math.cos(a * Math.PI / 180), 0.442 * Math.sin(a * Math.PI / 180), -0.24 + j * 0.24], rot: [0, 0, a - 90], color: '#475569' }); }
  const paddle = (a) => ({ t: 'group', rot: [0, 0, a], shapes: [{ t: 'extrude', d: 0.62, pts: [[-0.06, 0.44], [0.06, 0.44], [0.02, 0.35], [-0.02, 0.35]], color: '#cbd5e1' }] });
  const cloth = (c, x, y, sx) => ({ t: 'sphere', r: 1, n: 8, m: 12, pos: [x, y, 0], scale: sx, color: c });
  const spring = (x) => ({ t: 'pipe', r: 0.012, n: 5, caps: false, pts: Array.from({ length: 34 }, (_, i) => [x + 0.04 * Math.cos(i * 0.9), 1.42 - i * 0.008, 0.04 * Math.sin(i * 0.9)]) });
  const W = (from, to) => ({ type: 'blink', fade: true, wave: 'window', from, to, ramp: 0.15 });
  const IN = [[0.4, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.32, 1.52, 0.42], [-0.32, 1.32, 0.42], [-0.15, 1.25, 0.3], [0, 0.95, 0.2], [0, 0.5, 0.1]];
  const OUT = [[0, 0.38, 0.1], [-0.2, 0.22, 0.25], [-0.35, 0.15, 0.36], [-0.45, 0.2, 0.0], [-0.45, 0.5, -0.5], [-0.45, 0.9, -0.72]];
  const drops = (P, n, rate, win, color) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.032, n: 5, m: 8, pos: P[0], color: color || '#38bdf8', anim: [{ type: 'path', pts: P, wave: 'saw', rate, phase: k / n }, W(win[0], win[1])] }));

  LIBRARY({
    id: 'lavatrice',
    lang: 'ro',
    title: 'Mașina de spălat rufe',
    intro: 'Mașina de spălat spală hainele cu <b>apă, detergent, căldură și mișcare</b>. Un motor electric învârte tamburul: încet ca să plesnească rufele în apă, foarte repede ca să le stoarcă. Privește un program complet!',
    model: {
      rx: 0.22, ry: -0.6, speed: 0.13, height: 470,
      phases: [
        { from: 0, to: 0.12, label: '1 · Intrare apă', color: '#0284c7' },
        { from: 0.12, to: 0.5, label: '2 · Spălare', color: '#16a34a' },
        { from: 0.5, to: 0.62, label: '3 · Evacuare', color: '#6b7280' },
        { from: 0.62, to: 1, label: '4 · Centrifugare', color: '#ea580c' }
      ],
      parts: [
        { id: 'mobile', name: 'Carcasa', color: '#f8fafc', alpha: 0.26, explode: [0, 0, 0],
          info: '<p>Este cutia de tablă albă care conține totul. Dedesubt are patru picioare reglabile: mașina trebuie să stea <b>bine în plan orizontal</b>, altfel la centrifugare „umblă”!</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: front, pos: [0, 0, 0.6] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [-0.6, 0.85, 0] }, { t: 'box', s: [0.04, 1.7, 1.2], pos: [0.6, 0.85, 0] },
            { t: 'box', s: [1.2, 1.7, 0.03], pos: [0, 0.85, -0.6] }, { t: 'box', s: [1.24, 0.04, 1.24], pos: [0, 1.72, 0], color: '#e2e8f0' },
            ...[[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]].map(([x, z]) => ({ t: 'cyl', r: 0.05, h: 0.06, n: 12, pos: [x, -0.03, z], color: '#334155', alpha: 1 })) ] },
        { id: 'pannello', name: 'Panoul de comandă', label: 'Comenzi', color: '#e2e8f0', pos: [0, 1.61, 0.6], explode: [0, 0.35, 0.4],
          info: '<p>Aici alegi <b>programul</b>: temperatura, turațiile de la centrifugare, durata. În spate este o placă electronică care comandă toate piesele la momentul potrivit.</p>',
          more: '<p>Placa este un mic calculator (microcontroler) care urmează programul pas cu pas: deschide electrovalva, măsoară nivelul apei cu un <b>presostat</b>, pornește rezistența până la temperatura potrivită și reglează viteza motorului.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.22, 0.05] }, { t: 'cyl', r: 0.08, h: 0.05, n: 24, rot: [90, 0, 0], pos: [0.2, 0, 0.04], color: '#94a3b8' },
            { t: 'box', s: [0.02, 0.06, 0.01], pos: [0.2, 0.04, 0.07], color: '#1f2937', decal: 1 },
            { t: 'box', s: [0.26, 0.1, 0.01], pos: [0.45, 0, 0.03], color: '#0f172a', decal: 1 },
            { t: 'box', s: [0.12, 0.04, 0.01], pos: [0.45, 0, 0.036], color: '#22c55e', decal: 2, anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'cassetto', name: 'Sertarul pentru detergent', label: 'Detergent', color: '#f1f5f9', pos: [-0.32, 1.5, 0.45], explode: [0, 0.2, 0.75],
          info: '<p>Aici pui <b>detergentul</b> și balsamul. Apa care intră trece prin sertar și le duce cu ea în cuvă.</p>',
          more: '<p>Detergentul conține <b>agenți tensioactivi</b>: molecule cu un „cap” căruia îi place apa și o „coadă” căreia îi place grăsimea. Cozile se prind de murdăria grasă, iar capetele o trag în apă.</p>',
          shapes: [ { t: 'box', s: [0.4, 0.14, 0.4] }, { t: 'box', s: [0.42, 0.16, 0.03], pos: [0, 0, 0.21], color: '#e2e8f0' }, { t: 'box', s: [0.12, 0.08, 0.3], pos: [-0.1, 0.05, 0], color: '#60a5fa' } ] },
        { id: 'elettrovalvola', name: 'Electrovalva și furtunul de alimentare', label: 'Electrovalva', color: '#64748b', explode: [0.3, 0.4, -0.4],
          info: '<p>Este un robinet comandat de electricitate: când placa îi spune, se deschide și lasă apa să intre prin furtunul legat la robinetul din casă.</p>',
          more: '<p>Înăuntru este un mic <b>electromagnet</b>: când trece curent, ridică un pistonaș de fier și apa poate trece. Fără curent, un arc îl închide la loc.</p>',
          shapes: [ { t: 'box', s: [0.14, 0.12, 0.12], pos: [0.4, 1.58, -0.5], color: '#1f2937' }, { t: 'cyl', r: 0.03, h: 0.25, n: 10, pos: [0.4, 1.58, -0.68], rot: [90, 0, 0], color: '#94a3b8' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.4, 1.58, -0.8], [0.4, 1.58, -0.95], [0.55, 1.3, -1.0], [0.6, 0.9, -1.0]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[0.33, 1.58, -0.5], [0.0, 1.58, 0.1], [-0.3, 1.58, 0.3]], color: '#cbd5e1' } ] },
        { id: 'vasca', name: 'Cuva', color: '#94a3b8', alpha: 0.3, pos: [0, CY, 0], explode: [0, 0, -0.55],
          info: '<p>Este recipientul mare, nemișcat, care ține apa. Înăuntru se învârte tamburul. În față are o garnitură de cauciuc (manșeta) care se închide pe hublou.</p>',
          shapes: [ { t: 'tube', r: 0.5, ri: 0.47, h: 0.9, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.5, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.45] },
            { t: 'tube', r: 0.5, ri: 0.36, h: 0.12, n: 36, rot: [90, 0, 0], pos: [0, 0, 0.48], color: '#334155', alpha: 0.7 } ] },
        { id: 'cestello', name: 'Tamburul', color: '#d1d5db', pos: [0, CY, 0], explode: [0, 0, 0.9], anim: { type: 'spin', axis: 'z', rate: 3 },
          info: '<p>Este „butoiul” de oțel găurit în care pui rufele. Învârtindu-se, le ridică cu <b>nervurile</b> sale și le lasă să cadă în apă: lovindu-se, murdăria se desprinde.</p>',
          more: '<p>Găurile lasă să treacă apa și detergentul. La centrifugare tamburul ajunge la <b>1000–1400 de rotații pe minut</b>: rufele sunt lipite de perete, iar apa țâșnește afară prin găuri, ca atunci când învârți o umbrelă udă.</p>',
          shapes: [ { t: 'tube', r: 0.45, ri: 0.43, h: 0.72, n: 36, rot: [90, 0, 0] }, { t: 'cyl', r: 0.45, h: 0.03, n: 36, rot: [90, 0, 0], pos: [0, 0, -0.36], color: '#9ca3af' },
            { t: 'torus', R: 0.42, r: 0.025, n: 36, m: 6, rot: [90, 0, 0], pos: [0, 0, 0.36] } ].concat(holes, [0, 120, 240].map(paddle)) },
        { id: 'panni', name: 'Rufele', color: '#f472b6', explode: [0, 0, 0.9],
          info: '<p>La <b>spălare</b> rufele sunt ridicate și lăsate să cadă în apă; la <b>centrifugare</b> rămân lipite de peretele tamburului care se învârte foarte repede.</p>',
          shapes: [ { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 3 }, W(0.04, 0.58)], shapes: [
              cloth('#f472b6', -0.2, -0.25, [0.16, 0.1, 0.22]), cloth('#60a5fa', 0.15, -0.28, [0.17, 0.09, 0.2]), cloth('#facc15', 0.25, 0.0, [0.1, 0.15, 0.2]), cloth('#4ade80', -0.05, -0.12, [0.14, 0.1, 0.18]) ] },
            { t: 'group', pos: [0, CY, 0], anim: [{ type: 'spin', axis: 'z', rate: 18 }, W(0.62, 1)], shapes: [
              cloth('#f472b6', 0, -0.37, [0.22, 0.06, 0.22]), cloth('#60a5fa', 0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#facc15', -0.32, 0.18, [0.06, 0.2, 0.22]), cloth('#4ade80', 0, 0.37, [0.2, 0.06, 0.2]) ] } ] },
        { id: 'acqua', name: 'Apă și detergent', label: 'Apă', color: '#38bdf8', alpha: 0.55, pos: [0, CY - 0.46, 0], explode: [0, 0, -0.55],
          info: '<p>Apa dizolvă detergentul și duce murdăria. Mașinile moderne folosesc foarte puțină apă: aproximativ <b>40–50 de litri</b> pentru o spălare întreagă.</p>',
          shapes: [ { t: 'group', anim: { type: 'scale', axis: 'y', from: 0.03, to: 1, wave: 'window', win: [0, 0.62], ramp: 0.2 }, shapes: [ { t: 'extrude', d: 0.86, pts: seg } ] },
            ...drops(IN.map(([x, y, z]) => [x, y - CY + 0.46, z]), 8, 3, [0, 0.13]), ...drops(OUT.map(([x, y, z]) => [x, y - CY + 0.46, z]), 7, 3, [0.5, 0.63], '#64748b') ] },
        { id: 'resistenza', name: 'Rezistența (încălzește apa)', label: 'Rezistența', color: '#9ca3af', pos: [0, CY - 0.4, 0], explode: [0, -0.35, -0.55],
          info: '<p>Este un tub de metal pe fundul cuvei. Când trece curent prin ea se <b>încălzește</b>, ca plita unei mașini de gătit, și aduce apa la temperatura aleasă (30, 40, 60 °C…).</p>',
          more: '<p>Este <b>efectul Joule</b>: un curent care trece printr-un fir care „opune rezistență” îl încălzește. Încălzirea apei este ceea ce consumă cel mai multă energie: spălarea la 30 °C în loc de 60 °C economisește mai mult de jumătate din electricitate.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 8, curve: true, pts: [[-0.12, 0, 0.35], [-0.12, 0, -0.3], [0, 0, -0.38], [0.12, 0, -0.3], [0.12, 0, 0.35]],
            anim: { type: 'blink', color: '#ef4444', wave: 'window', from: 0.15, to: 0.45, ramp: 0.25 } } ] },
        { id: 'motore', name: 'Motor electric', label: 'Motor', color: '#b45309', pos: [0.28, 0.2, -0.3], explode: [0.5, -0.35, 0],
          info: '<p>Este motorul care învârte tamburul. Funcționează cu magneți și bobine de cupru: curentul îl face să se rotească, încet pentru spălat și foarte repede pentru centrifugare.</p>',
          more: '<p>Mașinile moderne au adesea un motor <b>„inverter”</b> fără perii, controlat de electronică: este silențios, consumă mai puțin și poate fi legat direct de tambur, fără curea (<i>direct drive</i>).</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.36, n: 24, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'tube', r: 0.135, ri: 0.1, h: 0.2, n: 24, rot: [90, 0, 0], color: '#b45309' },
            { t: 'group', pos: [0, 0, -0.25], anim: { type: 'spin', axis: 'z', rate: 3 * 0.42 / 0.06 / 4 }, shapes: [ { t: 'cyl', r: 0.06, h: 0.06, n: 16, rot: [90, 0, 0], color: '#475569' }, { t: 'box', s: [0.1, 0.015, 0.065], color: '#94a3b8' } ] } ] },
        { id: 'cinghia', name: 'Fulie și curea', label: 'Curea', color: '#1f2937', explode: [0, 0, -0.75],
          info: '<p>Motorul învârte o <b>roată mică</b> care, printr-o curea de cauciuc, învârte <b>roata mare</b> (fulia) prinsă de tambur.</p>',
          more: '<p>O roată mică care trage o roată mare: cea mare se rotește mai <b>încet</b>, dar cu mai multă <b>forță</b>. Este același truc ca la vitezele bicicletei.</p>',
          shapes: [ { t: 'group', pos: [0, CY, -0.55], anim: { type: 'spin', axis: 'z', rate: 3 / 4 }, shapes: [
              { t: 'torus', R: 0.4, r: 0.03, n: 36, m: 6, rot: [90, 0, 0], color: '#6b7280' }, { t: 'cyl', r: 0.07, h: 0.08, n: 16, rot: [90, 0, 0], color: '#6b7280' },
              ...[0, 120, 240].map((a) => ({ t: 'box', s: [0.36, 0.05, 0.03], pos: [0.2 * Math.cos(a * Math.PI / 180), 0.2 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#6b7280' })) ] },
            { t: 'pipe', r: 0.018, n: 5, curve: true, pts: [[-0.05, CY - 0.43, -0.55], [0.18, 0.18, -0.55], [0.28, 0.13, -0.55], [0.35, 0.2, -0.55], [0.38, CY - 0.1, -0.55], [0.3, CY + 0.3, -0.55], [0, CY + 0.44, -0.55], [-0.3, CY + 0.3, -0.55], [-0.43, CY, -0.55], [-0.3, CY - 0.3, -0.55], [-0.05, CY - 0.43, -0.55]] } ] },
        { id: 'sospensioni', name: 'Arcuri și amortizoare', label: 'Amortizoare', color: '#facc15', explode: [0, 0, 0.35],
          info: '<p>Cuva nu este prinsă rigid de carcasă: este atârnată de două <b>arcuri</b> și sprijinită pe două <b>amortizoare</b>. Așa vibrațiile de la centrifugare nu zguduie toată mașina.</p>',
          more: '<p>Amortizoarele transformă mișcarea în căldură prin frecare, atenuând loviturile: sunt asemănătoare cu cele ale automobilelor.</p>',
          shapes: [ spring(-0.38), spring(0.38), { t: 'pipe', r: 0.035, n: 10, pts: [[-0.3, CY - 0.45, 0.1], [-0.45, 0.06, 0.1]], color: '#475569' }, { t: 'pipe', r: 0.022, n: 8, pts: [[-0.35, CY - 0.6, 0.1], [-0.3, CY - 0.45, 0.1]], color: '#cbd5e1' },
            { t: 'pipe', r: 0.035, n: 10, pts: [[0.3, CY - 0.45, 0.1], [0.45, 0.06, 0.1]], color: '#475569' } ] },
        { id: 'contrappeso', name: 'Contragreutatea', color: '#a8a29e', pos: [0, 1.38, 0.38], explode: [0, 0.45, 0.2],
          info: '<p>Este un bloc mare de <b>beton</b> prins de cuvă. Pare ciudat, dar greutatea ajută: ține cuva nemișcată când tamburul se învârte foarte repede cu toate rufele strânse într-o parte.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.14, 0.18] } ] },
        { id: 'pompa', name: 'Pompa de evacuare', label: 'Pompa', color: '#1e293b', pos: [-0.35, 0.15, 0.36], explode: [-0.4, -0.3, 0.4],
          info: '<p>La sfârșitul spălării pompa aspiră apa murdară de pe fundul cuvei și o împinge afară, în scurgerea din casă. Are un <b>filtru</b> care oprește monedele și nasturii.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 0.16, n: 20, rot: [90, 0, 0] }, { t: 'group', anim: { type: 'spin', axis: 'z', rate: 20 }, shapes: [0, 60, 120].map((a) => ({ t: 'box', s: [0.12, 0.015, 0.03], pos: [0, 0, 0.09], rot: [0, 0, a], color: '#f59e0b' })) },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.05, 0.05, -0.05], [0.25, 0.23, -0.26]], color: '#475569' },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[-0.08, 0, 0], [-0.1, 0.05, -0.36], [-0.1, 0.35, -0.86], [-0.1, 0.75, -1.08], [-0.1, 0.95, -1.1]], color: '#94a3b8' } ] },
        { id: 'oblo', name: 'Hublou (ușa)', label: 'Hublou', color: '#cbd5e1', pos: [0, CY, 0.66], explode: [-1.0, 0, 0.9],
          info: '<p>Ușa rotundă cu sticlă groasă: lasă să se vadă rufele și închide bine mașina. În timpul spălării se <b>blochează</b> singură, așa că nu poate fi deschisă cu apă înăuntru.</p>',
          shapes: [ { t: 'torus', R: 0.37, r: 0.06, n: 36, m: 8, rot: [90, 0, 0] }, { t: 'sphere', r: 0.34, n: 8, m: 28, hemi: true, rot: [-90, 0, 0], scale: [1, 0.35, 1], pos: [0, 0, -0.02], color: '#bae6fd', alpha: 0.3 },
            { t: 'box', s: [0.1, 0.2, 0.06], pos: [-0.42, 0, 0], color: '#94a3b8' }, { t: 'box', s: [0.06, 0.16, 0.08], pos: [0.42, 0, 0.02], color: '#64748b' } ] }
      ]
    },
    steps: [
      { icon: '🧺', title: 'O mașină care lovește rufele', explode: 0,
        html: '<p>Pentru a spăla sunt necesare patru lucruri: <b>apă</b>, <b>detergent</b>, <b>căldură</b> și <b>mișcare</b>. Odinioară se spăla de mână, frecând rufele pe o piatră de spălat; mașina face asta în locul nostru.</p><p>Inima este <b>tamburul</b> găurit care se învârte în <b>cuvă</b>, pus în mișcare de un <b>motor electric</b>.</p>' },
      { icon: '🚰', title: '1 · Intră apa', loop: [0, 0.14], focus: ['elettrovalvola', 'cassetto', 'acqua', 'vasca', 'pannello'], explode: 0.2, view: { rx: 0.35, ry: -0.9 },
        html: '<p>Placa electronică deschide <b>electrovalva</b>: apa de la robinetul din casă intră, trece prin <b>sertar</b> și duce detergentul în cuvă.</p><p>Un senzor de presiune (presostatul) „simte” când apa este suficientă și închide valva.</p>' },
      { icon: '🔥', title: '2 · Încălzirea apei', loop: [0.14, 0.45], focus: ['resistenza', 'acqua', 'vasca'], explode: 0.3, view: { rx: 0.1, ry: -0.3 },
        html: '<p>Pe fundul cuvei se află <b>rezistența</b>: un tub care se încălzește când trece curent prin el, ca plita unei mașini de gătit. Încălzește apa la 30, 40 sau 60 °C.</p><p class="tip">🌍 Încălzirea apei este lucrul care consumă cel mai mult: spălarea la 30 °C economisește multă energie.</p>' },
      { icon: '🔄', title: '2 · Spălarea: sus și jos în apă', loop: [0.14, 0.5], focus: ['cestello', 'panni', 'acqua'], explode: 0, view: { rx: 0.1, ry: -0.15 },
        html: '<p>Tamburul se învârte încet, când într-o parte, când în cealaltă. <b>Nervurile</b> ridică rufele și le lasă să cadă în apa cu săpun: lovindu-se și frecându-se între ele, murdăria se desprinde.</p>' },
      { icon: '⚙️', title: 'Motor, curea și fulie', focus: ['motore', 'cinghia', 'cestello'], explode: 0.45, view: { rx: 0.2, ry: -2.5 },
        html: '<p><b>Motorul</b> învârte o roată mică; <b>cureaua</b> trage <b>fulia</b> mare prinsă în spatele tamburului. Roata mare se rotește mai încet, dar cu mai multă forță.</p>' },
      { icon: '🚿', title: '3 · Evacuarea apei murdare', loop: [0.48, 0.64], focus: ['pompa', 'acqua', 'vasca'], explode: 0.2, view: { rx: 0.25, ry: -1.1 },
        html: '<p><b>Pompa de evacuare</b> aspiră apa murdară de pe fund și o împinge afară prin furtun, în scurgerea din casă. Apoi intră apă curată pentru <b>clătire</b>, care îndepărtează detergentul.</p>' },
      { icon: '🌀', title: '4 · Centrifugarea: stoarcere prin rotire', loop: [0.64, 1], focus: ['cestello', 'panni', 'sospensioni', 'contrappeso'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>Tamburul se învârte foarte repede, până la <b>1400 de rotații pe minut</b>. Rufele sunt lipite de perete, iar apa țâșnește afară prin găuri.</p><p><b>Arcurile</b>, <b>amortizoarele</b> și grea <b>contragreutate</b> de beton fac ca mașina să nu sară prin cameră!</p><p class="tip">☂️ Învârte o umbrelă udă: picăturile zboară. Este exact același lucru!</p>' }
    ],
    facts: [
      { icon: '🪨', title: 'Contragreutatea de beton', html: 'În aproape orice mașină de spălat este un bloc de <b>beton</b> de 20–25 kg: servește la a o ține nemișcată în timpul centrifugării.' },
      { icon: '🧼', title: 'Spălarea la 30 de grade', html: 'Datorită detergenților moderni, multe haine se spală bine și la 30 °C, consumând mai puțin de jumătate din energia unei spălări la 60 °C.' },
      { icon: '🕰️', title: 'Înainte de mașina de spălat', html: 'Până prin anii \'60, în Italia multe familii spălau de mână, la <b>spălătoria</b> satului sau la râu. Mașina de spălat a eliberat foarte mult timp, mai ales pentru femei.' },
      { icon: '🐟', title: 'Microplastice', html: 'Țesăturile sintetice (precum fleecul) pierd la fiecare spălare fire minuscule de plastic, care pot ajunge până în mare. Există filtre și saci speciali care le rețin.' }
    ],
    quiz: [
      { type: 'order', q: 'Pune în ordine etapele unei spălări', items: ['Intrarea apei', 'Spălare', 'Evacuare', 'Centrifugare'], explain: 'Intră apa cu detergent, se spală, se evacuează apa murdară și la final se stoarce prin centrifugare.' },
      { type: 'mc', q: 'Care piesă încălzește apa?', options: ['Motorul', 'Rezistența', 'Pompa', 'Contragreutatea'], answer: 1, explain: 'Rezistența se încălzește când curentul trece prin ea (efectul Joule).' },
      { type: 'mc', q: 'De ce iese apa din rufe în timpul centrifugării?', options: ['Pentru că se evaporă', 'Pentru că, rotindu-se foarte repede, rufele sunt lipite de perete și apa zboară prin găuri', 'Pentru că pompa o absoarbe din rufe', 'Pentru că detergentul o dizolvă'], answer: 1, explain: 'Când ne rotim repede, totul tinde să se îndepărteze de centru: apa trece prin găurile tamburului.' },
      { type: 'tf', q: 'Contragreutatea de beton servește la a face mașina mai stabilă.', answer: true, explain: 'Greutatea ține cuva nemișcată și reduce vibrațiile în timpul centrifugării.' },
      { type: 'mc', q: 'Ce face pompa de evacuare?', options: ['Lasă să intre apa curată', 'Scoate afară apa murdară', 'Învârte tamburul', 'Deschide hublorul'], answer: 1, explain: 'Aspiră apa de pe fundul cuvei și o împinge în scurgerea din casă.' },
      { type: 'mc', q: 'La ce servesc nervurile din interiorul tamburului?', options: ['Să decoreze', 'Să ridice rufele și să le lase să cadă în apă', 'Să taie firele', 'Să încălzească'], answer: 1, explain: 'Ridică rufele care, căzând și lovindu-se, se spală mai bine.' }
    ]
  });
})();
