/* L'occhio umano. Il bulbo guarda verso +x (la luce arriva da destra, da un alberello); la sclera è semitrasparente per vedere dentro.
   I solidi "di rotazione" sono costruiti lungo y e girati di −90° intorno a z (così y diventa x). */
(function () {
  const AX = [0, 0, -90];
  const arc = (r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; return [Math.max(0, r * Math.cos(a)), r * Math.sin(a)]; });
  const tree = (s) => [ { t: 'cyl', r: 0.06 * s, h: 0.4 * s, n: 10, pos: [0, 0.2 * s, 0], color: '#92400e' }, { t: 'cone', r: 0.32 * s, h: 0.55 * s, n: 16, pos: [0, 0.65 * s, 0], color: '#16a34a' }, { t: 'cone', r: 0.24 * s, h: 0.42 * s, n: 16, pos: [0, 0.95 * s, 0], color: '#22c55e' } ];
  const TOP = [4.2, 1.05, 0], BASE = [4.2, -0.4, 0];
  const RAYS = [ [TOP, [1.33, 0.3, 0], [0.86, 0.17, 0], [-1.06, -0.24, 0]], [TOP, [1.3, 0.05, 0.12], [0.86, 0.02, 0.08], [-1.06, -0.24, 0]], [BASE, [1.33, -0.25, 0], [0.86, -0.15, 0], [-1.06, 0.12, 0]], [BASE, [1.3, 0.02, -0.12], [0.86, 0.0, -0.08], [-1.06, 0.12, 0]] ];
  const rayShapes = [];
  RAYS.forEach((pts, i) => {
    rayShapes.push({ t: 'pipe', r: 0.01, n: 5, pts, color: i < 2 ? '#fde047' : '#fb923c', alpha: 0.55 });
    for (let k = 0; k < 4; k++) rayShapes.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: pts[0], color: i < 2 ? '#fde047' : '#fb923c', anim: { type: 'path', pts, wave: 'saw', rate: 0.7, phase: k / 4 + i * 0.1 } });
  });
  const NERVE = [[-1.12, -0.06, -0.24], [-1.6, -0.08, -0.3], [-2.2, -0.05, -0.32], [-2.9, 0.05, -0.3]];
  const vessels = [[[-1.07, -0.04, -0.22], [-0.95, 0.45, -0.3], [-0.7, 0.75, -0.4]], [[-1.07, -0.04, -0.22], [-0.9, -0.5, -0.35], [-0.65, -0.8, -0.35]], [[-1.07, -0.04, -0.22], [-0.85, 0.35, 0.45], [-0.55, 0.55, 0.75]], [[-1.07, -0.04, -0.22], [-0.85, -0.45, 0.4], [-0.6, -0.65, 0.65]]]
    .map((pts) => ({ t: 'pipe', r: 0.016, n: 5, curve: true, pts, color: '#b91c1c' }));
  const muscle = (rot) => ({ t: 'group', rot, shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[-2.1, 0.22, 0], [-1.25, 0.9, 0], [-0.3, 1.25, 0], [0.45, 1.16, 0]], scale: [1, 1, 1.7] } ] });

  LIBRARY({
    id: 'occhio',
    lang: 'ro',
    title: 'Ochiul',
    intro: 'Ochiul este un <b>aparat foto natural</b>: o bilă cât o nucă, care strânge lumina, o focalizează cu o lentilă și o transformă în semnale pentru creier. Să urmărim lumina în interiorul ochiului!',
    model: {
      rx: 0.18, ry: -0.42, speed: 0.4, height: 470, bg: 'body', fit: 1.0,
      parts: [
        { id: 'sclera', name: 'Sclerotica (albul ochiului)', label: 'Sclerotica', color: '#f8fafc', alpha: 0.3, explode: [-0.4, 0, -1.2],
          info: '<p>„Peretele” alb și rezistent care înfășoară ochiul și îi dă forma de bilă. Este <b>albul ochiului</b>.</p>',
          more: '<p>Sub sclerotică se află <b>coroida</b>, un strat plin de vase de sânge, care hrănește retina și este închis la culoare ca lumina să nu „sară” în interiorul ochiului, ca interiorul negru al unui aparat foto.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.2]].concat(arc(1.2, -88, 63, 18)), ds: true } ] },
        { id: 'cornea', name: 'Corneea', color: '#bae6fd', alpha: 0.25, explode: [1.0, 0, 0],
          info: '<p>„Fereastra” transparentă din fața ochiului, curbată ca sticla unui ceas. Este prima lentilă pe care o traversează lumina: face deja cea mai mare parte din focalizare.</p>',
          more: '<p>Corneea nu are vase de sânge (ca să fie transparentă!): primește oxigen direct din aer și din lacrimi. Operațiile cu laser pentru a nu mai purta ochelari îi schimbă puțin curbura.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pos: [0, 0, 0], pts: arc(0.71, 39, 90, 8).map(([r, y]) => [r, y + 0.62]), ds: true } ] },
        { id: 'iride', name: 'Irisul', color: '#2563eb', explode: [0.7, 0.4, 0.4],
          info: '<p>„Discul colorat” al ochiului: albastru, verde, maro… Este un mic mușchi care <b>mărește sau micșorează pupila</b> pentru a lăsa să intre mai multă sau mai puțină lumină.</p>',
          more: '<p>Culoarea depinde de cantitatea de <b>melanină</b>: multă = ochi căprui, puțină = ochi albaștri. Desenul irisului este unic pentru fiecare persoană, mai mult decât amprentele.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.03, n: 36, rot: AX, pos: [1.0, 0, 0] }, { t: 'tube', r: 0.52, ri: 0.4, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#1e3a8a' },
            { t: 'tube', r: 0.34, ri: 0.3, h: 0.035, n: 36, rot: AX, pos: [1.0, 0, 0], color: '#60a5fa' } ] },
        { id: 'pupilla', name: 'Pupila', color: '#020617', explode: [0.9, 0.4, 0.4],
          info: '<p>„Gaura” neagră din centrul irisului, pe unde intră lumina. În întuneric se mărește ca să adune mai multă lumină, la soare se micșorează ca să nu ne orbească.</p>',
          more: '<p>Este un reflex automat, <b>reflexul pupilar</b>: medicii îl verifică cu o lanternă mică. Pupila poate trece de la 2 la 8 mm în diametru.</p>',
          shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 28, rot: AX, pos: [1.025, 0, 0], decal: 1, anim: { type: 'scale', from: 0.65, to: 1.45, rate: 0.25, axis: 'xz' } } ] },
        { id: 'cristallino', name: 'Cristalinul', color: '#fef9c3', alpha: 0.65, explode: [0.5, 1.0, 0.4],
          info: '<p>O <b>lentilă</b> transparentă și elastică în spatele pupilei. Își schimbă forma ca să focalizeze: se <b>bombează</b> pentru a vedea de aproape și se <b>aplatizează</b> pentru a vedea departe.</p>',
          more: '<p>Odată cu vârsta cristalinul devine mai rigid: de aceea, după 45 de ani, multe persoane au nevoie de ochelari pentru citit (<b>prezbitism</b>). Dacă devine opac, se vorbește despre <b>cataractă</b>, care se tratează înlocuindu-l cu o lentilă artificială.</p>',
          shapes: [ { t: 'sphere', r: 0.4, n: 14, m: 24, scale: [0.42, 1, 1], pos: [0.82, 0, 0], anim: { type: 'scale', from: 1, to: 1.3, axis: 'x', rate: 0.25, phase: 0.5 } } ] },
        { id: 'muscolo-ciliare', name: 'Mușchiul ciliar', label: 'Mușchiul ciliar', color: '#be123c', explode: [0.4, -0.9, 0.3],
          info: '<p>Un inel mic de mușchi în jurul cristalinului, legat de el prin multe filamente. Contractându-se sau relaxându-se, schimbă forma cristalinului.</p>',
          shapes: [ { t: 'torus', R: 0.5, r: 0.06, n: 32, m: 8, rot: [0, 0, 90], pos: [0.85, 0, 0] } ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [k * 22.5, 0, 0], shapes: [ { t: 'cyl', r: 0.006, h: 0.12, n: 4, pos: [0.84, 0.42, 0], color: '#fda4af' } ] }))) },
        { id: 'vitreo', name: 'Corpul vitros', label: 'Corpul vitros', color: '#e0f2fe', alpha: 0.16, explode: [-0.4, 0, 0.9],
          info: '<p>Interiorul ochiului este plin cu o <b>gelatină transparentă</b>, corpul vitros. Ține ochiul umflat și rotund și lasă lumina să treacă.</p>',
          more: '<p>Uneori în vitros plutesc mici ghemotoace: sunt „muștele zburătoare” care se văd privind cerul albastru. De obicei sunt inofensive.</p>',
          shapes: [ { t: 'sphere', r: 1.08, n: 16, m: 28, scale: [0.96, 1, 1], pos: [-0.05, 0, 0] } ] },
        { id: 'retina', name: 'Retina', color: '#fb7185', alpha: 0.5, explode: [-1.2, 0, 0],
          info: '<p>„Ecranul” din fundul ochiului, unde lumina formează imaginea. Este făcută din milioane de celule sensibile la lumină, <b>fotoreceptorii</b>: <b>conurile</b> văd culorile, <b>bastonașele</b> funcționează și cu puțină lumină.</p>',
          more: '<p>În retină există aproximativ <b>120 de milioane de bastonașe</b> și 6 milioane de conuri. Există trei tipuri de conuri: pentru roșu, verde și albastru. Amestecând semnalele lor, creierul „vede” mii de culori.</p>',
          shapes: [ { t: 'lathe', n: 36, rot: AX, pts: [[0, -1.12]].concat(arc(1.12, -88, 32, 14)), ds: true } ] },
        { id: 'macula', name: 'Fovea (pata galbenă)', label: 'Fovea', color: '#facc15', explode: [-1.5, 0.2, 0.2],
          info: '<p>Un punct al retinei chiar în spatele cristalinului, plin de conuri: este locul în care vedem <b>cel mai clar</b>. Când citești, miști ochii ca să aduci fiecare cuvânt pe fovee.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 8, m: 14, scale: [0.2, 1, 1], pos: [-1.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 6, m: 10, scale: [0.2, 1, 1], pos: [-1.1, 0, 0.0], color: '#ca8a04' } ] },
        { id: 'vasi', name: 'Vasele de sânge ale retinei', label: 'Vase de sânge', color: '#b91c1c', explode: [-1.3, 0, 0],
          info: '<p>Mici artere și vene pornesc de la nervul optic și se răspândesc pe retină ca s-o hrănească. Medicul oftalmolog le vede privind în pupilă cu o lanternă mică.</p>',
          shapes: vessels },
        { id: 'nervo-ottico', name: 'Nervul optic', label: 'Nervul optic', color: '#fde68a', explode: [-1.6, 0, -0.3],
          info: '<p>Un „cablu” făcut dintr-un milion de fibre nervoase, care duce semnalele de la retină până la <b>creier</b>. Creierul, în partea din spate a capului, este cel care „vede” cu adevărat.</p>',
          more: '<p>Acolo unde nervul iese din retină nu există fotoreceptori: este <b>punctul orb</b>. Nu ne dăm seama pentru că creierul „umple golul” cu ceea ce vede în jur și cu celălalt ochi.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 16, curve: true, pts: NERVE }, { t: 'cyl', r: 0.15, h: 0.03, n: 20, rot: AX, pos: [-1.08, -0.05, -0.23], color: '#fffbeb' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.9, phase: k / 6 }, { type: 'blink', color: '#38bdf8', rate: 1.8, phase: k / 6 } ] }))) },
        { id: 'muscoli', name: 'Mușchii ochiului', label: 'Mușchi', color: '#dc2626', explode: [-0.6, 0.6, 0],
          info: '<p>Șase mușchi prinși de sclerotică mișcă ochiul în toate direcțiile: sus, jos, la dreapta, la stânga și puțin și rotindu-l. Sunt printre cei mai rapizi mușchi din corp.</p>',
          shapes: [ muscle([0, 0, 0]), muscle([180, 0, 0]), muscle([90, 0, 0]), muscle([-90, 0, 0]) ] },
        { id: 'luce', name: 'Raze de lumină', label: 'Raze de lumină', color: '#fde047', explode: [0, 0, 0], chip: true,
          info: '<p>Lumina care se reflectă de pe copac intră în ochi. Corneea și cristalinul o <b>îndoaie</b> (refracție) astfel încât razele plecate dintr-un punct să se întâlnească din nou într-un punct al retinei.</p>',
          more: '<p>Dacă ochiul este puțin prea lung, imaginea se formează <b>în fața</b> retinei: este <b>miopia</b> (se vede prost de departe). Dacă este prea scurt, se formează în spatele ei: este <b>hipermetropia</b>. Lentilele ochelarilor mută focarul în locul potrivit.</p>',
          shapes: rayShapes },
        { id: 'oggetto', name: 'Ce privim', label: 'Copacul', color: '#16a34a', pos: [4.2, -0.4, 0], explode: [0.8, 0, 0],
          info: '<p>Un obiect se vede pentru că <b>trimite lumină</b> (ca un bec) sau pentru că <b>reflectă</b> lumina care îl lovește (ca acest copac). În întuneric complet nu vedem nimic.</p>',
          shapes: tree(1.0) },
        { id: 'immagine', name: 'Imaginea răsturnată', label: 'Imaginea', color: '#16a34a', pos: [-0.98, 0.12, 0], explode: [-1.4, 0, 0.3],
          info: '<p>Pe retină imaginea copacului este <b>foarte mică și răsturnată</b>! Creierul este cel care o îndreaptă: învățăm să facem asta de bebeluși.</p>',
          shapes: [ { t: 'group', rot: [0, 90, 180], scale: 0.32, shapes: tree(1.0) } ] }
      ]
    },
    steps: [
      { icon: '👁️', title: 'Un aparat foto natural', explode: 0,
        html: '<p>Ochiul este o bilă de aproximativ <b>2,4 cm</b>. Ca un aparat foto, are o deschidere (<b>pupila</b>), o lentilă (<b>cristalinul</b>) și un „ecran” sensibil la lumină (<b>retina</b>).</p>' },
      { icon: '🌳', title: 'Lumina intră', focus: ['oggetto', 'luce', 'cornea', 'pupilla', 'iride'], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Vedem un obiect când lumina lui ajunge la ochii noștri. Lumina trece prin <b>cornee</b>, fereastra transparentă, și intră prin <b>pupilă</b>.</p>' },
      { icon: '🔵', title: 'Irisul reglează lumina', focus: ['iride', 'pupilla', 'cornea'], view: { rx: 0.1, ry: -1.35 }, zoom: 1.8,
        html: '<p><b>Irisul</b>, partea colorată, este un mușchi: în întuneric mărește pupila ca să intre mai multă lumină, la soare o micșorează.</p><p class="tip">🪞 Încearcă în fața oglinzii: închide ochii câteva secunde, apoi deschide-i și privește pupila cum se micșorează!</p>' },
      { icon: '🔍', title: 'Cristalinul focalizează', focus: ['cristallino', 'muscolo-ciliare', 'luce'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.6,
        html: '<p><b>Cristalinul</b> este o lentilă elastică. <b>Mușchiul ciliar</b> îl bombează ca să privim aproape și îl aplatizează ca să privim departe: așa imaginea de pe retină este mereu clară.</p>' },
      { icon: '🙃', title: 'O imagine răsturnată', focus: ['retina', 'immagine', 'luce', 'macula'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.5,
        html: '<p>Razele se încrucișează, iar pe <b>retină</b> se formează o imagine mică și <b>răsturnată</b>. Conurile și bastonașele retinei o transformă în semnale electrice. Punctul cel mai clar este <b>fovea</b>.</p>' },
      { icon: '🧠', title: 'Creierul vede', focus: ['nervo-ottico', 'retina', 'vasi'], view: { rx: 0.2, ry: 0.5 },
        html: '<p><b>Nervul optic</b> duce semnalele la creier. Creierul este cel care îndreaptă imaginea, o unește cu cea a celuilalt ochi (așa vedem în 3D) și înțelege ce privim.</p>' },
      { icon: '↔️', title: 'Ochi mereu în mișcare', focus: ['muscoli', 'sclera'], view: { rx: 0.35, ry: -0.7 },
        html: '<p>Șase <b>mușchi</b> mișcă fiecare ochi. Chiar și când crezi că privești fix un punct, ochii fac mici smucituri continue: fără ele, imaginea s-ar șterge!</p><p class="tip">😉 Clipim de aproximativ 15 ori pe minut: lacrimile curăță și umezesc corneea.</p>' }
    ],
    facts: [
      { icon: '📸', title: 'Mai rapid decât o fotografie', html: 'Ochiul se focalizează într-o fracțiune de secundă și deosebește aproximativ <b>un milion</b> de nuanțe de culoare.' },
      { icon: '🦅', title: 'Ochi de vultur', html: 'Un vultur vede un iepure de la mai bine de 3 km distanță: retina lui are mult mai multe conuri decât a noastră.' },
      { icon: '🐝', title: 'Culori invizibile', html: 'Albinele văd lumina <b>ultravioletă</b>, care pentru noi este invizibilă: multe flori au desene „secrete” pe care le văd doar ele.' },
      { icon: '🔴', title: 'Daltonismul', html: 'Aproximativ 1 băiat din 12 confundă unele culori, de obicei roșul și verdele: se numește <b>daltonism</b>, după chimistul John Dalton, care suferea de el.' },
      { icon: '👶', title: 'Nou-născuții', html: 'Nou-născuții văd neclar și aproape în alb și negru; vederea devine ca cea a adulților în jurul vârstei de 3–5 ani.' }
    ],
    quiz: [
      { type: 'mc', q: 'Care parte a ochiului reglează cât de multă lumină intră?', options: ['Retina', 'Irisul', 'Nervul optic', 'Sclerotica'], answer: 1, explain: 'Irisul mărește sau micșorează pupila.' },
      { type: 'mc', q: 'Cum se numește lentila elastică care focalizează?', options: ['Cornee', 'Pupilă', 'Cristalin', 'Fovee'], answer: 2, explain: 'Cristalinul își schimbă forma ca să focalizeze aproape sau departe.' },
      { type: 'tf', q: 'Pe retină imaginea se formează răsturnată.', answer: true, explain: 'Razele se încrucișează traversând cristalinul; creierul îndreaptă imaginea.' },
      { type: 'mc', q: 'Care celule ale retinei ne fac să vedem culorile?', options: ['Bastonașele', 'Conurile', 'Globulele roșii', 'Neuronii din nas'], answer: 1, explain: 'Conurile văd culorile; bastonașele funcționează cu puțină lumină.' },
      { type: 'order', q: 'Pune în ordine drumul luminii în ochi', items: ['Cornee', 'Pupilă', 'Cristalin', 'Corp vitros', 'Retină', 'Nerv optic'], explain: 'Lumina traversează corneea, pupila, cristalinul și vitrosul; retina o transformă în semnale pe care nervul optic le duce la creier.' },
      { type: 'mc', q: 'Dacă imaginea se formează în fața retinei și se vede prost de departe, o persoană este…', options: ['Miopă', 'Daltonistă', 'Prezbită', 'Oarbă'], answer: 0, explain: 'Aceasta este miopia: se corectează cu lentile divergente.' }
    ]
  });
})();
