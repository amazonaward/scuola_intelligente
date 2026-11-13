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
    lang: 'ro',
    title: 'Bicicleta',
    intro: 'Bicicleta este una dintre cele mai <b>eficiente</b> mașini inventate vreodată: cu forța picioarelor tale mergi de 3–4 ori mai repede decât pe jos. Pedale, lanț, roți dințate, pârghii și frecare: află cum lucrează toate împreună!',
    model: {
      rx: 0.12, ry: -0.35, speed: 0.35, height: 450,
      parts: [
        { id: 'telaio', name: 'Cadrul', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>Este „scheletul” bicicletei: țevi unite astfel încât să formeze două <b>triunghiuri</b>. Triunghiul este cea mai rigidă formă care există: nu se deformează nici dacă te urci pe el.</p>',
          more: '<p>Cadrele sunt din oțel, aluminiu sau <b>fibră de carbon</b>. Un cadru de curse din carbon cântărește sub 1 kg, dar ține greutatea unui adult care pedalează pe drumuri accidentate: meritul formei din triunghiuri, folosită și la poduri și macarale.</p>',
          shapes: [ tube([BB[0], BB[1], 0], [0.79, 1.28, 0], 0.045), tube([-0.4, 1.47, 0], [0.73, 1.47, 0], 0.035), tube([BB[0], BB[1], 0], [-0.42, 1.56, 0], 0.038),
            tube([BB[0], BB[1], 0.05], [RA[0], RA[1], 0.07], 0.022), tube([BB[0], BB[1], -0.05], [RA[0], RA[1], -0.07], 0.022),
            tube([-0.4, 1.44, 0.03], [RA[0], RA[1], 0.07], 0.02), tube([-0.4, 1.44, -0.03], [RA[0], RA[1], -0.07], 0.02),
            { t: 'cyl', r: 0.055, h: 0.3, n: 16, pos: [0.76, 1.4, 0], rot: [0, 0, -15], color: '#b91c1c' }, { t: 'cyl', r: 0.06, h: 0.16, n: 16, pos: [BB[0], BB[1], 0], rot: [90, 0, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.05, 0.004], pos: [0.3, 0.95, 0.046], rot: [0, 0, 32], color: '#f8fafc', decal: 1 } ] },
        { id: 'sterzo', name: 'Furca și ghidonul', label: 'Ghidon', color: '#374151', explode: [0.5, 0.3, 0],
          info: '<p><b>Ghidonul</b> rotește <b>furca</b> și roata din față: așa alegi direcția. Te ajută și să îți păstrezi echilibrul prin mici corecții continue.</p>',
          more: '<p>Furca este înclinată și curbată înainte: din cauza asta roata tinde să se „îndrepte” singură. De aceea o bicicletă lansată în viteză stă în picioare chiar și fără nimeni pe ea!</p>',
          shapes: [ { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, 0.07], [0.88, 1.0, 0.07], [0.98, 0.78, 0.06], [FA[0], FA[1], 0.06]] },
            { t: 'pipe', r: 0.03, n: 10, curve: true, pts: [[0.79, 1.27, -0.07], [0.88, 1.0, -0.07], [0.98, 0.78, -0.06], [FA[0], FA[1], -0.06]] },
            { t: 'box', s: [0.1, 0.05, 0.18], pos: [0.79, 1.27, 0], rot: [0, 0, -15] },
            tube([0.72, 1.55, 0], [0.68, 1.72, 0], 0.028), tube([0.68, 1.72, 0], [0.82, 1.74, 0], 0.025),
            { t: 'pipe', r: 0.022, n: 10, curve: true, pts: [[0.72, 1.76, -0.4], [0.82, 1.74, -0.25], [0.82, 1.74, 0], [0.82, 1.74, 0.25], [0.72, 1.76, 0.4]] },
            { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, 0.36], rot: [90, 0, 0], color: '#111827' }, { t: 'cyl', r: 0.032, h: 0.13, n: 12, pos: [0.71, 1.76, -0.36], rot: [90, 0, 0], color: '#111827' },
            { t: 'cyl', r: 0.03, h: 0.025, n: 14, pos: [0.82, 1.79, -0.18], color: '#facc15' } ] },
        { id: 'ruota-anteriore', name: 'Roata din față', label: 'Roata din față', color: '#9ca3af', pos: [FA[0], FA[1], 0], explode: [0.7, 0, 0], anim: WHEEL,
          info: '<p>Roata din față se rotește liber și urmează ghidonul. <b>Spițele</b> subțiri țin cercul rotund trăgându-l dinspre centru, ca firele unei pânze de păianjen.</p>',
          more: '<p>Spițele lucrează <b>la întindere</b>: fiecare este trasă puternic, așa că o roată de sub 1 kg poate duce 100 kg. În centru, <b>butucul</b> are rulmenți cu bile care reduc frecarea.</p>',
          shapes: wheel() },
        { id: 'ruota-posteriore', name: 'Roata din spate (motoare)', label: 'Roata din spate', color: '#9ca3af', pos: [RA[0], RA[1], 0], explode: [-0.7, 0, 0], anim: WHEEL,
          info: '<p>Este roata care <b>împinge</b>: lanțul rotește pinioanele fixate pe butucul ei. Roata împinge drumul înapoi… iar drumul te împinge pe tine înainte!</p>',
          shapes: wheel() },
        { id: 'pneumatici', name: 'Anvelope', color: '#1f2937', explode: [0, -0.35, 0],
          info: '<p>Cauciucurile sunt pline cu <b>aer</b> comprimat: fac rol de pernă pe denivelări. Profilul „se agață” de asfalt datorită <b>frecării</b>.</p>',
          more: '<p>O anvelopă de curse este umflată la aproximativ 7 bar: de șapte ori presiunea aerului din jurul nostru. Anvelopele dezumflate se turtesc mai mult și produc mai multă frecare: pedalezi cu mult mai mult efort!</p>',
          shapes: [FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.645, r: 0.042, n: 36, m: 6, rot: [90, 0, 0], pos: [x, y, 0] })).concat([FA, RA].map(([x, y]) => ({ t: 'torus', R: 0.615, r: 0.022, n: 36, m: 4, rot: [90, 0, 0], pos: [x, y, 0], color: '#78350f' }))) },
        { id: 'pedivelle', name: 'Pedale și manivele', label: 'Pedale', color: '#6b7280', pos: [BB[0], BB[1], 0], explode: [0, -0.3, 0.7], anim: PED,
          info: '<p>Împingi în <b>pedale</b>: <b>manivelele</b> sunt două pârghii care transformă împingerea picioarelor într-o rotație, ca manivela unei râșnițe.</p>',
          more: '<p>Cele două manivele sunt la 180°: când un picior apasă în jos, celălalt urcă. Împingerea este mai eficientă când manivela este orizontală: acolo <b>pârghia</b> este mai lungă.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.5, n: 10, rot: [90, 0, 0], color: '#d1d5db' },
            { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, 0.17, 0.24] }, { t: 'box', s: [0.05, 0.36, 0.035], pos: [0, -0.17, -0.24] },
            { t: 'group', pos: [0, 0.34, 0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] },
            { t: 'group', pos: [0, -0.34, -0.33], anim: { type: 'spin', axis: 'z', dir: 1 }, shapes: [ { t: 'box', s: [0.18, 0.03, 0.14], color: '#111827' }, { t: 'box', s: [0.03, 0.015, 0.15], pos: [0.05, 0.02, 0], color: '#f59e0b' } ] } ] },
        { id: 'corona', name: 'Foaia (roata dințată mare)', label: 'Foaia', color: '#94a3b8', pos: [BB[0], BB[1], ZC], explode: [0, -0.3, 0.45], anim: PED,
          info: '<p>Este roata dințată mare, prinsă de pedale. <b>Dinții</b> ei intră în lanț și îl trag.</p>',
          shapes: [ { t: 'extrude', d: 0.02, pts: gear(RR + 0.02, 32, 0.022) }, { t: 'cyl', r: 0.07, h: 0.04, n: 16, rot: [90, 0, 0], color: '#475569' } ]
            .concat([0, 72, 144, 216, 288].map((a) => ({ t: 'box', s: [0.15, 0.03, 0.03], pos: [0.08 * Math.cos(a * Math.PI / 180), 0.08 * Math.sin(a * Math.PI / 180), 0], rot: [0, 0, a], color: '#475569' }))) },
        { id: 'pignoni', name: 'Pinioane (set de pinioane)', label: 'Pinioane', color: '#cbd5e1', pos: [RA[0], RA[1], ZC], explode: [-0.4, -0.3, 0.45], anim: WHEEL,
          info: '<p>Sunt roțile dințate mici de pe roata din spate. Cu cât pinionul este mai <b>mic</b>, cu atât roata face mai multe rotații la fiecare pedalare: mergi repede, dar te obosești mai tare.</p>',
          more: '<p>Aici foaia are 32 de dinți, iar pinionul folosit are 16: <b>32 : 16 = 2</b>, așa că la fiecare rotație a pedalelor roata face 2 rotații. Acesta este <b>raportul</b> de transmisie.</p>',
          shapes: [0.13, 0.115, 0.1, 0.085, 0.07].map((r, i) => ({ t: 'extrude', d: 0.012, pts: gear(r, Math.round(r * 160), 0.014), pos: [0, 0, -0.1 + i * 0.025 + 0.025] })) },
        { id: 'catena', name: 'Lanțul', color: '#475569', explode: [0, -0.3, 0.45],
          info: '<p>Lanțul este făcut din multe <b>zale</b> unite prin bolțuri. Transmite mișcarea de la foaie (în față) la pinioane (în spate), fără să alunece.</p>',
          more: '<p>Un lanț de bicicletă are în jur de 110 zale și este eficient în proporție de 98%: aproape toată forța picioarelor ajunge la roată. Trebuie ținut <b>curat și uns</b>, altfel frecarea fură energie și îl uzează.</p>',
          shapes: links },
        { id: 'cambio', name: 'Schimbătorul (derailor)', label: 'Schimbător', color: '#1f2937', pos: [-1.0, 0.43, ZC + 0.02], explode: [-0.4, -0.6, 0.6],
          info: '<p><b>Schimbătorul</b> mută lanțul de pe un pinion pe altul. Cele două rotițe țin lanțul mereu întins.</p>',
          more: '<p>La urcare folosești un pinion <b>mare</b>: roata se învârte mai puțin la fiecare pedalare, dar este nevoie de mai puțină forță. Pe teren plat sau la coborâre, un pinion mic: mai multă viteză. Este același principiu ca la treptele de viteză ale mașinii.</p>',
          shapes: [ { t: 'box', s: [0.05, 0.2, 0.04], pos: [0.0, 0.1, 0], rot: [0, 0, -20] },
            { t: 'group', pos: [-0.02, 0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'group', pos: [0.01, -0.07, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: 3 }, shapes: [ { t: 'extrude', d: 0.02, pts: gear(0.05, 10, 0.012) } ] },
            { t: 'box', s: [0.12, 0.2, 0.012], pos: [0, 0, 0.03], color: '#6b7280', alpha: 0.9 } ] },
        { id: 'freni', name: 'Frâne', color: '#111827', explode: [0, 0.45, 0],
          info: '<p>Când tragi de manetă, un cablu de oțel strânge două <b>saboți</b> de cauciuc pe obadă. Frecarea (<b>fricțiunea</b>) încetinește roata.</p>',
          more: '<p>Când frânezi, energia mișcării se transformă în <b>căldură</b>: după o coborâre lungă, obadele sau discurile frânelor ard! Multe biciclete moderne au frâne pe <b>disc</b>, care funcționează bine și pe ud.</p>',
          shapes: [ { t: 'box', s: [0.1, 0.05, 0.2], pos: [0.86, 1.3, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, 0.09], rot: [0, 0, -20], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [0.9, 1.25, -0.09], rot: [0, 0, -20], color: '#f97316' },
            { t: 'box', s: [0.1, 0.05, 0.2], pos: [-0.62, 1.28, 0] }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, 0.1], rot: [0, 0, 30], color: '#f97316' }, { t: 'box', s: [0.04, 0.12, 0.03], pos: [-0.66, 1.24, -0.1], rot: [0, 0, 30], color: '#f97316' },
            { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, 0.3], rot: [0, 0, -15], color: '#9ca3af' }, { t: 'box', s: [0.16, 0.03, 0.03], pos: [0.78, 1.72, -0.3], rot: [0, 0, -15], color: '#9ca3af' },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, 0.3], [0.6, 1.7, 0.15], [0.7, 1.45, 0.05], [0.86, 1.33, 0]] },
            { t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[0.74, 1.73, -0.3], [0.55, 1.6, -0.1], [0.2, 1.5, -0.04], [-0.3, 1.5, -0.04], [-0.6, 1.33, 0]] } ] },
        { id: 'sella', name: 'Șaua', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p><b>Șaua</b> îți ține greutatea. Se ridică și se coboară: este bine reglată când, cu pedala jos, piciorul este aproape întins.</p>',
          shapes: [ tube([-0.42, 1.56, 0], [-0.47, 1.76, 0], 0.025, '#9ca3af'),
            { t: 'extrude', d: 0.12, pts: [[-0.2, 0], [0.0, 0.02], [0.18, 0.015], [0.24, 0.0], [0.2, -0.03], [0.0, -0.035], [-0.2, -0.04], [-0.25, -0.01]], pos: [-0.45, 1.8, 0], smooth: true },
            { t: 'sphere', r: 1, n: 8, m: 14, scale: [0.1, 0.035, 0.11], pos: [-0.6, 1.79, 0] } ] },
        { id: 'luci', name: 'Lumini și catadioptri', label: 'Lumini', color: '#f8fafc', explode: [0, 0.3, 0.3],
          info: '<p>Ca să fii văzut: lumină <b>albă</b> în față și <b>roșie</b> în spate, plus catadioptrii de pe pedale și de pe spițe. Sunt obligatorii când e întuneric!</p>',
          more: '<p><b>Catadioptrul</b> nu produce lumină singur: este făcut din multe colțuri mici ca niște oglinzi, care trimit lumina farurilor chiar spre mașina care a trimis-o.</p>',
          shapes: [ { t: 'cyl', r: 0.045, h: 0.1, n: 16, rot: [0, 0, 90], pos: [0.9, 1.66, 0], color: '#111827' }, { t: 'cyl', r: 0.04, h: 0.01, n: 16, rot: [0, 0, 90], pos: [0.955, 1.66, 0], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.6 } },
            { t: 'box', s: [0.03, 0.08, 0.06], pos: [-0.68, 1.66, 0], color: '#dc2626', anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 2 } } ] }
      ]
    },
    steps: [
      { icon: '🚲', title: 'O mașină simplă și genială', explode: 0,
        html: '<p>Bicicleta este făcută din puține părți: un <b>cadru</b>, două <b>roți</b>, <b>pedalele</b> cu <b>lanțul</b>, <b>ghidonul</b> și <b>frânele</b>. Motorul ești tu!</p><p>Pedalând consumi mai puțină energie decât mergând pe jos, dar mergi mult mai repede.</p>' },
      { icon: '🦵', title: 'Pedale și manivele: două pârghii', focus: ['pedivelle', 'corona'], explode: 0.3, view: { rx: 0.1, ry: -0.1 },
        html: '<p><b>Manivelele</b> sunt pârghii: apăsând pedala rotești axul central. Un picior apasă în jos, iar celălalt urcă: împingerea nu se oprește niciodată.</p><p class="tip">🔧 Împingerea este mai puternică cu manivela orizontală: acolo pârghia lucrează mai bine.</p>' },
      { icon: '⛓️', title: 'Foaia, lanțul și pinionul', focus: ['corona', 'catena', 'pignoni', 'pedivelle'], explode: 0, zoom: 1.2, view: { rx: 0.08, ry: -0.05 },
        html: '<p><b>Foaia</b> trage de <b>lanț</b>, iar lanțul rotește <b>pinionul</b> de pe roata din spate. Foaia are 32 de dinți, pinionul 16: jumătate!</p><p>Astfel, la <b>fiecare rotație a pedalelor roata face 2 rotații</b>. Uită-te: pedala face o rotație, în timp ce roata face două.</p>' },
      { icon: '⚙️', title: 'Schimbătorul: urcare sau teren plat?', focus: ['cambio', 'pignoni', 'catena'], explode: 0.2, view: { rx: 0.2, ry: -0.75 },
        html: '<p><b>Schimbătorul</b> mută lanțul pe pinioane diferite. Pinion <b>mare</b>: pedalezi ușor, dar mergi încet (excelent la urcare). Pinion <b>mic</b>: mergi repede, dar îți trebuie mai multă forță.</p><p class="tip">🏔️ Este un compromis între forță și viteză: treptele de viteză ale mașinii funcționează la fel.</p>' },
      { icon: '🛞', title: 'Roți, spițe și anvelope', focus: ['ruota-anteriore', 'ruota-posteriore', 'pneumatici'], explode: 0.2, view: { rx: 0.15, ry: -0.4 },
        html: '<p><b>Spițele</b> trag cercul spre centru și îl țin perfect rotund. <b>Cauciucurile</b> pline cu aer absorb denivelările și „se agață” de drum datorită frecării.</p><p>Roata din spate împinge drumul înapoi… iar drumul te împinge pe tine înainte!</p>' },
      { icon: '🤸', title: 'Direcția și echilibrul', focus: ['sterzo', 'ruota-anteriore', 'telaio'], explode: 0, view: { rx: 0.3, ry: -0.9 },
        html: '<p>Ca să îți păstrezi echilibrul faci mereu mici corecții cu <b>ghidonul</b>: dacă te răstorni spre dreapta, virezi puțin spre dreapta și bicicleta se așază din nou sub tine.</p><p>Roțile care se învârt și furca înclinată ajută: de aceea, când stai pe loc e foarte greu să te ții în picioare, iar în mișcare e ușor.</p>' },
      { icon: '🛑', title: 'Frânele: frecarea care salvează', focus: ['freni', 'ruota-anteriore', 'ruota-posteriore'], explode: 0, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Tragi de manetă, cablul strânge <b>saboții</b> pe obadă, iar <b>frecarea</b> încetinește roata. Energia mișcării se transformă în căldură.</p><p class="tip">⚠️ Folosește mereu amândouă frânele împreună, cu blândețe: doar cea din față, apăsată la maximum, te poate face să te răstorni înainte!</p>' }
    ],
    facts: [
      { icon: '🪵', title: 'Fără pedale', html: 'Prima „bicicletă” (1817, Karl Drais) era din lemn și fără pedale: te împingeai cu picioarele de pământ, ca bicicletele fără pedale ale copiilor mici.' },
      { icon: '🎡', title: 'Roata uriașă', html: 'Înainte de inventarea lanțului, pedalele erau prinse de roata din față: ca să meargă repede, se construiau biciclete cu roți uriașe, înalte până la 1,5 metri (<b>velocipedele cu roată mare</b>).' },
      { icon: '🏆', title: 'Giro d\'Italia', html: 'Giro d\'Italia se desfășoară din 1909. Alergătorii parcurg aproximativ <b>3500 km</b> în trei săptămâni, urcând chiar și pe pasuri alpine de peste 2000 de metri.' },
      { icon: '🌍', title: 'Mai multe biciclete decât mașini', html: 'În lume există aproximativ <b>un miliard</b> de biciclete, mai mult decât dublul numărului de automobile. Nu poluează și fac bine sănătății!' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce leagă foaia de pinionul roții din spate?', options: ['Cablul de frână', 'Lanțul', 'Furca', 'Spița'], answer: 1, explain: 'Lanțul transmite mișcarea de la foaie (pedale) la pinion (roata din spate).' },
      { type: 'num', q: 'Foaia are 32 de dinți, iar pinionul 16. Câte rotații face roata la fiecare rotație a pedalelor?', answer: 2, explain: '32 : 16 = 2. Acesta este raportul de transmisie.' },
      { type: 'mc', q: 'La urcare este bine să folosești un pinion…', options: ['mic', 'mare', 'oricare, nu schimbă nimic', 'niciunul, se coboară'], answer: 1, explain: 'Cu pinionul mare este nevoie de mai puțină forță ca să pedalezi, chiar dacă mergi mai încet.' },
      { type: 'mc', q: 'De ce este cadrul făcut din triunghiuri?', options: ['Pentru că arată mai frumos', 'Pentru că triunghiul este o formă rigidă care nu se deformează', 'Ca să cântărească mai mult', 'Ca să facă loc lanțului'], answer: 1, explain: 'Triunghiul este indeformabil: de aceea se folosește la cadre, poduri și macarale.' },
      { type: 'tf', q: 'Frânele încetinesc bicicleta datorită frecării, care transformă mișcarea în căldură.', answer: true, explain: 'Saboții se freacă de obadă: energia mișcării se transformă în căldură.' },
      { type: 'mc', q: 'Manivelele funcționează ca niște…', options: ['pârghii', 'magneți', 'arcuri', 'scripeți'], answer: 0, explain: 'Sunt pârghii care transformă împingerea picioarelor în rotație.' }
    ]
  });
})();
