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
    lang: 'ro',
    id: 'aereo',
    title: 'Avionul',
    intro: 'Cum reușește un obiect de <b>400 de tone</b> să stea în aer? Secretul este forma <b>aripilor</b>: aerul care curge pe lângă ele este împins în jos, iar aripa primește o împingere în sus, <b>portanța</b>. Motoarele servesc la menținerea vitezei.',
    model: {
      rx: 0.5, ry: -0.7, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.15,
      parts: [
        { id: 'fusoliera', name: 'Fuzelaj', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>Este „corpul” avionului, un tub lung din aluminiu sau fibră de carbon. Înăuntru stau pasagerii, iar sub podea sunt bagajele.</p>',
          more: '<p>În zbor, la 11 000 de metri, presiunea de afară este un sfert din cea de la sol, iar temperatura este de −50 °C. Fuzelajul este <b>presurizat</b>: înăuntru se pompează aer, ca într-un balon, ca oamenii să poată respira normal. De aceea are formă de tub: rezistă mai bine la presiune.</p>',
          shapes: [ { t: 'lathe', n: 30, pts: FUS, rot: ROT }, ...winds(1), ...winds(-1),
            { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, 0.522], color: '#2563eb', decal: 1 }, { t: 'box', s: [5.2, 0.05, 0.01], pos: [-0.3, -0.12, -0.522], color: '#2563eb', decal: 1 },
            { t: 'box', s: [0.16, 0.34, 0.01], pos: [2.3, 0.0, 0.517], color: '#cbd5e1', decal: 1 } ] },
        { id: 'cabina', name: 'Cabina de pilotaj', label: 'Cabina', color: '#1e293b', explode: [0.6, 0.2, 0],
          info: '<p>În față, în spatele geamurilor, stau <b>piloții</b>, cu manșa (sau mini-manșa laterală), manetele motoarelor și multe ecrane. În botul avionului se află <b>radarul</b> meteo.</p>',
          more: '<p>Cea mai mare parte a zborului este condusă de <b>pilotul automat</b>, dar piloții supraveghează totul și se ocupă de decolare și aterizare. Avioanele moderne sunt „fly-by-wire”: comenzile piloților ajung la calculatoare, care mișcă suprafețele cu ajutorul unor motoare hidraulice.</p>',
          shapes: [ ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.14, 0.1, 0.12], pos: [2.98, 0.24, z], rot: [0, 0, -38], decal: 1 })),
            { t: 'cyl', r: 0.12, h: 0.05, n: 16, rot: ROT, pos: [3.3, 0, 0], color: '#94a3b8' } ] },
        { id: 'ali', name: 'Aripi', color: '#cbd5e1', explode: [0, -0.3, 0],
          info: '<p>Aripile sunt piesa cea mai importantă: forma lor curbată și înclinarea împing aerul în <b>jos</b>; ca reacție, aerul împinge aripa în <b>sus</b>. Înăuntrul lor se află <b>rezervoarele</b> de combustibil!</p>',
          more: '<p>Profilul aripii (bombat deasupra, mai plat dedesubt) face ca aerul de deasupra să curgă mai repede și să aibă o <b>presiune mai mică</b> decât cel de dedesubt (principiul lui Bernoulli). Diferența de presiune, pe o suprafață de sute de metri pătrați, ridică avionul. Vârfurile îndoite (<b>winglet</b>) reduc vârtejurile și economisesc combustibil.</p>',
          shapes: [ wing(1), wing(-1) ] },
        { id: 'alettoni', name: 'Eleroane', color: '#f59e0b', explode: [0, -0.3, 0],
          info: '<p>Sunt „paletele” de lângă vârful aripilor. Se mișcă invers: unul în sus și unul în jos. Astfel o aripă urcă, cealaltă coboară, iar avionul <b>se înclină</b> ca să facă viraje.</p>',
          shapes: [ flapAt(2.6, 0.84, 0.2, 15, 0, '#f59e0b'), flapAt(-2.6, 0.84, 0.2, -15, 0, '#f59e0b') ] },
        { id: 'ipersostentatori', name: 'Flapsuri (hipersustentatoare)', label: 'Flapsuri', color: '#38bdf8', explode: [0, -0.5, 0],
          info: '<p>La decolare și la aterizare avionul merge mai încet. <b>Flapsurile</b> ies din spatele aripilor și coboară: aripa devine mai mare și mai curbată și dă portanță chiar și la viteză mică.</p>',
          shapes: [ flapAt(1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25), flapAt(-1.3, 1.45, 0.3, 12, 12, '#38bdf8', 0.25) ] },
        { id: 'motori', name: 'Motoare cu reacție (turboventilatoare)', label: 'Motoare', color: '#e5e7eb', explode: [0.4, -0.6, 0],
          info: '<p>Marele <b>ventilator</b> din față aspiră foarte mult aer și îl aruncă înapoi. Ca reacție, avionul este împins înainte: aceasta este <b>forța de tracțiune</b>.</p>',
          more: '<p>Doar o parte din aer intră în „inima” motorului: este comprimat, amestecat cu kerosen și ars; gazele fierbinți învârt o turbină care mișcă ventilatorul. Cea mai mare parte a aerului trece pe lângă (<b>fluxul rece</b>) și dă aproape toată tracțiunea, cu mai puțin zgomot și consum mai mic.</p>',
          shapes: [ engine(1.15), engine(-1.15) ] },
        { id: 'deriva', name: 'Derivă', color: '#2563eb', explode: [-0.4, 0.6, 0],
          info: '<p>Este marea „aripioară” verticală de la coadă. Ca penele unei săgeți, ține avionul drept și îl împiedică să alunece spre dreapta și spre stânga.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: [[-2.15, 0.2], [-3.05, 0.2], [-3.55, 1.55], [-3.2, 1.55]], smooth: true } ] },
        { id: 'timone', name: 'Cârma de direcție', label: 'Cârma', color: '#f97316', explode: [-0.4, 0.6, 0],
          info: '<p>Partea mobilă a derivei. Când este rotită spre dreapta sau spre stânga, botul avionului se mută în acea parte. Pilotul o comandă cu <b>pedalele</b>.</p>',
          shapes: [ { t: 'group', pos: [-3.27, 0.88, 0], rot: [0, 0, 20.3], anim: { type: 'swing', axis: 'y', amp: 14, rate: 0.35 }, shapes: [ { t: 'box', s: [0.2, 1.3, 0.05], pos: [-0.1, 0, 0], div: 1 } ] } ] },
        { id: 'stabilizzatori', name: 'Stabilizatoare orizontale', label: 'Stabilizatoare', color: '#cbd5e1', explode: [-0.5, 0.2, 0],
          info: '<p>Aripioarele mici de la coadă țin avionul în echilibru, ca să nu „pice” în față și să nu se ridice prea mult.</p>',
          shapes: [1, -1].map((s) => ({ t: 'extrude', d: 0.05, pts: [[-2.35, 0], [-3.0, 0], [-3.4, 1.25 * s], [-3.15, 1.25 * s]].map(([x, z], i) => [x, i < 2 ? 0 : z]), rot: [90, 0, 0], pos: [0, 0.12, 0] })) },
        { id: 'equilibratori', name: 'Profundoare', color: '#f59e0b', explode: [-0.5, 0.2, 0],
          info: '<p>Sunt părțile mobile ale stabilizatoarelor. Dacă se ridică, coada coboară și botul <b>urcă</b>; dacă se coboară, botul <b>coboară</b>. Pilotul le comandă trăgând sau împingând manșa.</p>',
          shapes: [1, -1].map((s) => ({ t: 'group', pos: [-3.0 - 0.32 * 0.62, 0.12, 0.62 * s], rot: [0, -s * 17.7, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.3 }, shapes: [ { t: 'box', s: [0.16, 0.03, 1.0], pos: [-0.08, 0, 0], div: 1 } ] })) },
        { id: 'carrello', name: 'Tren de aterizare', color: '#374151', explode: [0, -0.6, 0],
          info: '<p>Roțile pe care avionul rulează la decolare și la aterizare. După decolare se <b>retrag</b> în burta avionului, ca să nu se opună aerului.</p>',
          more: '<p>Pneurile avioanelor sunt umflate cu <b>azot</b> la presiuni foarte mari (aproximativ 14 bari) și ating pista la aproape 250 km/h. Amortizoarele preiau șocul aterizării.</p>',
          shapes: [ ...[0.55, -0.55].flatMap((z) => [ { t: 'cyl', r: 0.035, h: 0.55, n: 10, pos: [-0.25, -0.75, z], color: '#9ca3af' }, { t: 'box', s: [0.4, 0.04, 0.08], pos: [-0.25, -1.0, z], color: '#6b7280' },
              ...[-0.12, 0.12].map((dx) => ({ t: 'cyl', r: 0.12, h: 0.1, n: 18, rot: [90, 0, 0], pos: [-0.25 + dx, -1.06, z] })) ]),
            { t: 'cyl', r: 0.03, h: 0.5, n: 10, pos: [2.5, -0.68, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.09, h: 0.1, n: 16, rot: [90, 0, 0], pos: [2.5, -0.98, 0] } ] },
        { id: 'aria', name: 'Fluxul de aer', label: 'Fluxul de aer', color: '#0ea5e9', noLabel: true, explode: [0, 0, 1.2],
          info: '<p>Aerul care trece <b>deasupra</b> aripii (bilele albastru închis) curge mai repede decât cel care trece <b>dedesubt</b> (bilele bleu), iar la final tot aerul este împins puțin în jos.</p>',
          shapes: puffs(flow(-0.1, 1.6, true), 9, 0.75, '#0369a1').concat(puffs(flow(-0.32, 1.6, false), 9, 0.5, '#7dd3fc')) },
        { id: 'forze', name: 'Cele patru forțe ale zborului', label: 'Forțe', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>În zbor acționează patru forțe: <b>portanța</b> (verde, în sus, de la aripi), <b>greutatea</b> (roșu, în jos), <b>tracțiunea</b> (albastru, înainte, de la motoare) și <b>rezistența</b> (portocaliu, aerul care frânează).</p>',
          more: '<p>În zbor orizontal, cu viteză constantă, forțele se echilibrează: portanța = greutatea și tracțiunea = rezistența. Ca să urce, pilotul mărește portanța (viteza sau înclinarea aripilor); ca să accelereze, dă mai multă tracțiune.</p>',
          shapes: [ arrow([0, 0.55, 0], [0, 1, 0], 1.0, '#22c55e'), arrow([0, -0.55, 0], [0, -1, 0], 1.0, '#ef4444'), arrow([3.4, 0, 0], [1, 0, 0], 0.6, '#3b82f6'), arrow([-3.4, 0, 0], [-1, 0, 0], 0.45, '#f97316') ] }
      ]
    },
    steps: [
      { icon: '✈️', title: 'Mai greu decât aerul', explode: 0,
        html: '<p>Un avion de pasageri cântărește sute de tone și totuși zboară! Nu plutește ca un balon: stă în aer pentru că <b>se mișcă foarte repede</b>, iar aripile, străbătând aerul, primesc o împingere în sus.</p>' },
      { icon: '⚖️', title: 'Cele patru forțe', focus: ['forze', 'fusoliera', 'ali', 'motori'], explode: 0, view: { rx: 0.3, ry: -0.35 },
        html: '<p><b>Portanța</b> în sus, <b>greutatea</b> în jos, <b>tracțiunea</b> înainte, <b>rezistența</b> înapoi. Ca să zboare drept, portanța trebuie să echilibreze greutatea, iar tracțiunea trebuie să învingă rezistența aerului.</p>' },
      { icon: '🪽', title: 'Secretul aripilor', focus: ['ali', 'aria'], explode: 0, view: { rx: 0.05, ry: -0.05 }, zoom: 1.15,
        html: '<p>Aripa este puțin <b>înclinată</b> și curbată. Aerul de deasupra curge mai repede și presiunea lui scade; dedesubt presiunea este mai mare. Aripa este „aspirată” în sus și, în același timp, împinge aerul în jos.</p><p class="tip">🖐️ Încearcă: pe geamul mașinii (împreună cu un adult!) ține palma întinsă și înclin-o puțin: o simți cum urcă.</p>' },
      { icon: '🌀', title: 'Motoarele dau tracțiunea', focus: ['motori'], explode: 0.2, view: { rx: 0.15, ry: 0.5 },
        html: '<p>Marele ventilator al <b>motoarelor cu reacție</b> aspiră aerul din față și îl aruncă foarte puternic înapoi. Ca reacție, avionul este împins înainte, ca un balon care se dezumflă.</p>' },
      { icon: '🕹️', title: 'Cum se conduce: trei comenzi', focus: ['alettoni', 'equilibratori', 'timone', 'deriva', 'stabilizzatori'], explode: 0, view: { rx: 0.45, ry: -1.0 },
        html: '<p><b>Eleroanele</b> (pe aripi) înclină avionul spre dreapta sau spre stânga. <b>Profundoarele</b> (la coadă) ridică sau coboară botul. <b>Cârma</b> (pe derivă) mută botul spre dreapta sau spre stânga.</p>' },
      { icon: '🛬', title: 'Decolarea și aterizarea', focus: ['ipersostentatori', 'carrello', 'ali'], explode: 0, view: { rx: -0.1, ry: -0.7 },
        html: '<p>Când avionul merge încet, aripile dau mai puțină portanță. Atunci ies <b>flapsurile</b>: fac aripa mai mare și mai curbată. <b>Trenul de aterizare</b> iese ca să atingă pista și se retrage după decolare.</p>' },
      { icon: '🧑‍✈️', title: 'Fuzelajul și cabina', focus: ['fusoliera', 'cabina'], explode: 0.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>În <b>fuzelaj</b> călătoresc pasagerii și bagajele; este presurizat pentru că la 11 000 de metri aerul este prea rarefiat ca să poți respira. În <b>cabina de pilotaj</b>, piloții controlează totul, ajutați de pilotul automat.</p>' }
    ],
    facts: [
      { icon: '🛩️', title: '12 secunde de zbor', html: 'Primul zbor cu motor al fraților <b>Wright</b> (1903) a durat 12 secunde și a parcurs 37 de metri: mai puțin decât lungimea unui avion de pasageri de azi!' },
      { icon: '🎨', title: 'Leonardo și zborul', html: '<b>Leonardo da Vinci</b>, acum 500 de ani, studia zborul păsărilor și desena mașini zburătoare, chiar și un „șurub aerian” asemănător cu elicopterul.' },
      { icon: '⛽', title: 'Mult combustibil', html: 'Un avion mare de pasageri poate încărca peste <b>200 000 de litri</b> de kerosen, aproape tot în aripi.' },
      { icon: '⚡', title: 'Fulgere? Nicio problemă', html: 'Fiecare avion de pasageri este lovit de fulger cam o dată pe an. Curentul trece pe învelișul de metal, iar pasagerii sunt în siguranță, ca într-o cușcă.' }
    ],
    quiz: [
      { type: 'mc', q: 'Cum se numește forța care ține avionul în aer?', options: ['Tracțiunea', 'Portanța', 'Rezistența', 'Greutatea'], answer: 1, explain: 'Portanța apare la aripi și echilibrează greutatea avionului.' },
      { type: 'mc', q: 'Ce dau motoarele cu reacție?', options: ['Portanța', 'Împingerea înainte', 'Greutatea', 'Echilibrul'], answer: 1, explain: 'Împing aerul înapoi și, ca reacție, avionul merge înainte.' },
      { type: 'mc', q: 'Ce suprafețe înclină avionul spre dreapta sau spre stânga?', options: ['Cârma', 'Eleroanele', 'Trenul de aterizare', 'Geamurile'], answer: 1, explain: 'Eleroanele se mișcă în sens opus pe cele două aripi și înclină avionul.' },
      { type: 'tf', q: 'Deasupra aripii aerul curge mai repede și are o presiune mai mică.', answer: true, explain: 'Diferența de presiune dintre partea de jos și cea de sus împinge aripa în sus.' },
      { type: 'mc', q: 'La ce folosesc flapsurile?', options: ['La frânarea în zbor la mare altitudine', 'La a da mai multă portanță când avionul merge încet', 'La a face lumină', 'La răcirea motoarelor'], answer: 1, explain: 'La decolare și la aterizare, flapsurile fac aripa mai mare și mai curbată.' },
      { type: 'mc', q: 'Unde se află cea mai mare parte a combustibilului?', options: ['În coadă', 'În aripi', 'În cabină', 'Sub scaune'], answer: 1, explain: 'Rezervoarele principale sunt în interiorul aripilor.' }
    ]
  });
})();
