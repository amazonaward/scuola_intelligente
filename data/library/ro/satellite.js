/* Il satellite (osservazione della Terra e telecomunicazioni). La Terra è in basso (sfondo "orbit"). */
(function () {
  const cells = (side) => {
    const s = [];
    for (let k = 0; k < 3; k++) {
      const x = side * (1.05 + k * 1.02);
      s.push({ t: 'box', s: [0.96, 0.03, 0.9], pos: [x, 0, 0], color: '#1e3a8a' });
      for (let i = 1; i < 4; i++) s.push({ t: 'box', s: [0.012, 0.008, 0.9], pos: [x - 0.48 + i * 0.24, 0.02, 0], color: '#93c5fd', decal: 1 });
      for (let j = 1; j < 4; j++) s.push({ t: 'box', s: [0.96, 0.008, 0.012], pos: [x, 0.02, -0.45 + j * 0.225], color: '#93c5fd', decal: 1 });
    }
    s.push({ t: 'cyl', r: 0.035, h: 0.5, n: 10, rot: [0, 0, 90], pos: [side * 0.55, 0, 0], color: '#cbd5e1' });
    return s;
  };
  const thr = (x, y, z, rot, ph) => ({ t: 'group', pos: [x, y, z], rot, shapes: [
    { t: 'cone', r: 0.07, h: 0.12, n: 12, rot: [180, 0, 0], color: '#6b7280' },
    { t: 'cone', r: 0.06, h: 0.3, n: 10, rot: [180, 0, 0], pos: [0, -0.2, 0], color: '#a5f3fc', alpha: 0.85, anim: { type: 'blink', fade: true, wave: 'window', from: ph, to: ph + 0.08, ramp: 0.3 } }
  ] });

  LIBRARY({
    lang: 'ro',
    id: 'satellite',
    title: 'Satelitul',
    intro: 'Un satelit artificial se rotește în jurul Pământului la sute sau mii de kilometri înălțime. Fotografiază planeta, ne aduce televiziunea, Internetul și semnalul <b>GPS</b>. Dar cum de nu cade?',
    model: {
      rx: 0.28, ry: -0.6, speed: 0.25, height: 480, bg: 'orbit',
      parts: [
        { id: 'corpo', name: 'Corpul (structura)', label: 'Corp', color: '#d4a017', alpha: 0.42, explode: [0, 0, 0],
          info: '<p>Este „cutia” care conține instrumentele. E învelită în folii aurii, <b>pătura termică</b>, care o apără de căldura Soarelui și de frigul din umbră.</p>',
          more: '<p>În Soare un satelit poate ajunge la +120 °C, iar în umbra Pământului la −150 °C. Pătura termică e făcută din multe straturi foarte subțiri de plastic acoperit cu metal, care reflectă căldura.</p>',
          shapes: [ { t: 'box', s: [1, 1.2, 1] }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, 0.6, 0], color: '#a16207', alpha: 1 }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, -0.6, 0], color: '#a16207', alpha: 1 } ] },
        { id: 'pannelli', name: 'Panouri solare', color: '#1e3a8a', explode: [0, 0, 0], anim: { type: 'swing', axis: 'x', amp: 25, rate: 0.35 },
          info: '<p>Transformă lumina Soarelui în <b>electricitate</b>. Se rotesc încet ca să stea mereu întoarse spre Soare, ca floarea-soarelui.</p>',
          more: '<p>Sunt făcute din <b>celule fotovoltaice</b> din siliciu sau arseniură de galiu. În timpul lansării sunt pliate și se deschid abia pe orbită.</p>',
          shapes: cells(1).concat(cells(-1)) },
        { id: 'batterie', name: 'Baterii', color: '#16a34a', pos: [-0.22, -0.3, 0.1], explode: [-0.4, -0.3, 1.5],
          info: '<p>Înmagazinează energia panourilor și o folosesc când satelitul trece prin <b>umbra Pământului</b>, unde lumina Soarelui nu ajunge.</p>',
          shapes: [0, 1, 2].map((k) => ({ t: 'box', s: [0.14, 0.32, 0.4], pos: [k * 0.17 - 0.17, 0, 0] })) },
        { id: 'serbatoio', name: 'Rezervorul de combustibil', label: 'Rezervor', color: '#9ca3af', pos: [0, 0.15, -0.05], explode: [0, 0.4, -1.5],
          info: '<p>O sferă plină cu combustibil pentru motoarele mici. Când se termină, satelitul nu își mai poate corecta orbita.</p>',
          shapes: [ { t: 'sphere', r: 0.3, n: 12 } ] },
        { id: 'computer', name: 'Calculatorul de bord', label: 'Calculator', color: '#1e40af', pos: [0.25, -0.25, 0.15], explode: [0.4, -0.3, 1.5],
          info: '<p>Este creierul satelitului: controlează toate instrumentele, execută comenzile primite de pe Pământ și ia singur decizii când apar probleme.</p>',
          more: '<p>Acolo sus, <b>radiațiile</b> pot strica biții din memorie: calculatoarele spațiale sunt speciale, mai rezistente și deseori dublate (unul de rezervă).</p>',
          shapes: [ { t: 'box', s: [0.32, 0.3, 0.36] }, { t: 'box', s: [0.05, 0.05, 0.02], pos: [0.08, 0.08, 0.18], color: '#22c55e', anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'antenna-parabolica', name: 'Antenă parabolică', label: 'Antenă parabolică', color: '#f1f5f9', pos: [0, -0.62, 0.55], explode: [0, -0.6, 0.6],
          anim: { type: 'swing', axis: 'x', amp: 8, rate: 0.2 },
          info: '<p>Trimite pe Pământ fotografiile și datele și primește comenzile, prin <b>unde radio</b> care călătoresc cu viteza luminii: 300 000 km pe secundă!</p>',
          more: '<p>Forma de parabolă adună undele radio într-un fascicul îngust, așa cum oglinda unei lanterne adună lumina. Astfel semnalul ajunge departe folosind puțină energie.</p>',
          shapes: [ { t: 'cyl', r: 0.03, h: 0.25, n: 8, pos: [0, -0.1, 0], color: '#94a3b8' },
            { t: 'lathe', ds: true, n: 28, rot: [180, 0, 0], pos: [0, -0.25, 0], pts: [[0.02, 0], [0.2, 0.024], [0.35, 0.074], [0.5, 0.15], [0.62, 0.23]] },
            { t: 'cyl', r: 0.012, h: 0.42, n: 6, pos: [0, -0.43, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.05, r2: 0.03, h: 0.08, n: 10, pos: [0, -0.64, 0], color: '#475569' } ] },
        { id: 'antenna', name: 'Antenă omnidirecțională', label: 'Antenă', color: '#e5e7eb', pos: [0.3, 0.6, 0.3], explode: [0.3, 0.6, 0.3],
          info: '<p>O antenă mică ce vorbește în <b>toate direcțiile</b>: folosește pentru mesajele de urgență chiar și când satelitul este întors greșit.</p>',
          shapes: [ { t: 'cyl', r: 0.015, h: 0.6, n: 6, pos: [0, 0.3, 0] }, { t: 'sphere', r: 0.04, n: 6, pos: [0, 0.62, 0], color: '#ef4444' } ] },
        { id: 'fotocamera', name: 'Camera foto (telescop)', label: 'Cameră foto', color: '#334155', pos: [-0.28, -0.75, -0.25], explode: [-0.6, -0.8, -0.4],
          info: '<p>Un mic telescop care privește Pământul: fotografiază nori, mări, păduri și orașe. Folosește la <b>prognoza meteo</b> și la supravegherea incendiilor și a ghețarilor.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.45, n: 24 }, { t: 'cyl', r: 0.12, h: 0.02, n: 24, pos: [0, -0.23, 0], color: '#0ea5e9' }, { t: 'tube', r: 0.19, ri: 0.16, h: 0.1, n: 24, pos: [0, -0.2, 0], color: '#111827' } ] },
        { id: 'sensore-stellare', name: 'Senzor stelar', label: 'Senzor stelar', color: '#475569', pos: [-0.3, 0.68, -0.3], explode: [-0.4, 0.7, -0.4],
          info: '<p>Este o cameră mică ce privește <b>stelele</b>: recunoscându-le, satelitul înțelege în ce direcție este întors. Exact cum făceau marinarii de demult!</p>',
          shapes: [ { t: 'box', s: [0.18, 0.14, 0.18] }, { t: 'cyl', r: 0.07, r2: 0.13, h: 0.2, n: 16, pos: [0, 0.17, 0], color: '#111827', ds: true, open: true } ] },
        { id: 'propulsori', name: 'Propulsoare', color: '#6b7280', explode: [0, 0, 0],
          info: '<p>Motoare-rachetă mici care scot scurte „pufuri” de gaz: corectează orbita și rotesc satelitul în poziția potrivită.</p>',
          more: '<p>Unii sateliți folosesc <b>motoare ionice</b>: împing foarte puțin, dar luni întregi, consumând mult mai puțin combustibil.</p>',
          shapes: [ thr(0.45, -0.62, 0.45, [0, 0, 0], 0.1), thr(-0.45, -0.62, -0.45, [0, 0, 0], 0.35), thr(-0.45, 0.62, 0.45, [180, 0, 0], 0.6), thr(0.45, 0.62, -0.45, [180, 0, 0], 0.85) ] },
        { id: 'radiatore', name: 'Radiator', color: '#f8fafc', pos: [0, 0, -0.52], explode: [0, 0, -0.7],
          info: '<p>Un panou alb care aruncă în spațiu căldura produsă de instrumente. În vid nu există aer care să răcorească: căldura pleacă doar ca <b>radiație</b>.</p>',
          shapes: [ { t: 'box', s: [0.9, 1.0, 0.03] } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'De ce nu cade?', explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>De fapt, un satelit <b>cade tot timpul</b> spre Pământ! Dar merge atât de repede în lateral (aproximativ 27 000 km/h pe orbită joasă) încât Pământul, fiind rotund, „fuge” de sub el. Așa continuă să se rotească în jurul lui: aceasta este <b>orbita</b>.</p><p class="tip">🍎 Newton și-a imaginat-o cu un tun în vârful unui munte foarte înalt: cu cât tragi mai tare, cu atât ghiuleaua cade mai departe… până face înconjurul lumii!</p>' },
      { icon: '☀️', title: 'Energie de la Soare', focus: ['pannelli', 'batterie'], explode: 0.5,
        html: '<p><b>Panourile solare</b> transformă lumina în electricitate și se rotesc ca să urmărească Soarele. <b>Bateriile</b> păstrează energia pentru momentele când satelitul trece prin umbra Pământului.</p>' },
      { icon: '📡', title: 'Cum vorbește cu Pământul', focus: ['antenna-parabolica', 'antenna', 'computer'], explode: 0.4, view: { rx: -0.2, ry: -0.6 },
        html: '<p><b>Antena parabolică</b> trimite pe Pământ date și fotografii prin unde radio și primește comenzile stațiilor de control. <b>Calculatorul de bord</b> execută totul.</p>' },
      { icon: '🧭', title: 'Încotro sunt întors?', focus: ['sensore-stellare', 'computer', 'propulsori'], explode: 0.3,
        html: '<p><b>Senzorul stelar</b> fotografiază stelele și află orientarea. Dacă e nevoie, <b>propulsoarele</b> scot pufuri mici ca să rotească satelitul sau să corecteze orbita, folosind combustibilul din <b>rezervor</b>.</p>' },
      { icon: '📸', title: 'Meseria lui', focus: ['fotocamera', 'antenna-parabolica'], explode: 0.2, view: { rx: -0.35, ry: -0.3 },
        html: '<p>Fiecare satelit are o sarcină: să fotografieze Pământul (vremea, mediul), să transmită televiziune și Internet sau să trimită semnalul <b>GPS</b> care îi spune telefonului unde ești.</p><p class="tip">🛰️ Pentru GPS e nevoie de cel puțin 4 sateliți vizibili în același timp.</p>' },
      { icon: '🌡️', title: 'Nici prea cald, nici prea frig', focus: ['corpo', 'radiatore'], explode: 0.3,
        html: '<p><b>Pătura aurie</b> reflectă lumina Soarelui, iar <b>radiatorul</b> alb scoate afară căldura instrumentelor. Așa, înăuntru temperatura rămâne potrivită pentru electronică.</p>' }
    ],
    facts: [
      { icon: '🔴', title: 'Sputnik 1', html: 'Primul satelit artificial a fost lansat în 1957 de Uniunea Sovietică: era o sferă de 58 cm care făcea doar „bip bip”.' },
      { icon: '🇮🇹', title: 'Italia în spațiu', html: 'În 1964, Italia a fost a treia țară din lume care a pus pe orbită un satelit propriu: <b>San Marco 1</b>.' },
      { icon: '🔢', title: 'Mii acolo sus', html: 'Astăzi, în jurul Pământului se rotesc peste <b>10 000 de sateliți</b> activi, iar numărul crește în fiecare an.' },
      { icon: '🌐', title: 'Orbita geostaționară', html: 'La 36 000 km înălțime, un satelit se rotește odată cu Pământul și pare oprit pe cer: de aceea antenele parabolice de televiziune nu se mișcă.' }
    ],
    quiz: [
      { type: 'mc', q: 'De unde își ia energia un satelit?', options: ['De la un motor pe benzină', 'De la panourile solare', 'Printr-un cablu legat de Pământ', 'De la vântul solar care îl împinge'], answer: 1, explain: 'Panourile solare transformă lumina Soarelui în electricitate; bateriile o păstrează pentru orele de umbră.' },
      { type: 'tf', q: 'Un satelit pe orbită de fapt cade continuu spre Pământ.', answer: true, explain: 'Cade, dar merge atât de repede în lateral încât Pământul se curbează sub el: de aceea continuă să se rotească în jurul lui.' },
      { type: 'mc', q: 'La ce folosește senzorul stelar?', options: ['Să fotografieze stelele pentru astronomi', 'Să afle în ce direcție este întors satelitul', 'Să măsoare temperatura', 'Să producă curent'], answer: 1, explain: 'Recunoscând stelele, satelitul își află orientarea.' },
      { type: 'mc', q: 'Cu ce trimite satelitul datele pe Pământ?', options: ['Cu unde radio', 'Printr-un cablu', 'Cu semnale de fum', 'Cu sunete'], answer: 0, explain: 'Undele radio călătoresc prin vid cu viteza luminii; sunetul, în schimb, nu se propagă în vid.' },
      { type: 'mc', q: 'De ce este satelitul învelit în folii aurii?', options: ['Ca să fie mai frumos', 'Ca să-l apere de căldură și de frig', 'Ca să cântărească mai mult', 'Ca să reflecte semnalele GPS'], answer: 1, explain: 'Pătura termică reflectă căldura Soarelui și o păstrează pe cea dinăuntru când satelitul este în umbră.' }
    ]
  });
})();
