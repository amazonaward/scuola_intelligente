/* La diga e la centrale idroelettrica. Il fiume scorre verso +x; il lago (bacino) è a monte (x < 0), la diga a x ≈ 0,
   la centrale a valle (x ≈ 3). Alto = +y; la valle è larga lungo z. Ciclo (1): 0.55–0.9 le paratoie dello sfioratore si aprono. */
(function () {
  const D = Math.PI / 180;
  /* sezioni lungo x: pts (u, y) con u = -z; estrusione lungo x tra x0 e x1 */
  const alongX = (pts, x0, x1, color, extra) => Object.assign({ t: 'extrude', d: x1 - x0, pts, rot: [0, 90, 0], pos: [(x0 + x1) / 2, 0, 0], color }, extra || {});
  const HILL = (s) => [[2.0, -0.25], [4.4, -0.25], [4.4, 1.6], [4.0, 2.8], [3.5, 3.35], [2.9, 3.45], [2.3, 1.5], [2.0, 0.3]].map(([u, y]) => [u * s, y]);
  const LAKE = [[-2.0, -0.1], [2.0, -0.1], [2.3, 1.5], [2.6, 2.72], [-2.6, 2.72], [-2.3, 1.5]];
  const DAM = [[-0.38, -0.2], [1.95, -0.2], [0.28, 3.0], [-0.38, 3.0]];
  const ZP = 0.95; // asse z della condotta e della centrale
  const PEN = [[-0.6, 1.45, ZP], [0.3, 1.45, ZP], [1.05, 1.5, ZP], [1.75, 0.82, ZP], [2.25, 0.42, ZP], [2.55, 0.32, ZP]];
  const WATER = [[-1.6, 1.6, ZP], [-0.6, 1.45, ZP], ...PEN.slice(1), [2.7, 0.3, ZP + 0.25], [2.85, 0.3, ZP], [2.75, -0.05, ZP], [3.4, -0.05, ZP * 0.6], [4.2, 0.05, 0.2], [5.2, 0.05, 0]];
  const ELEC = [[2.75, 1.05, ZP], [3.3, 1.2, ZP], [3.75, 0.75, 1.65], [4.4, 2.4, 1.65], [4.6, 2.75, 1.65], [6.0, 2.85, 1.65]];
  const drops = (P, n, rate, color, r, extra) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: r || 0.06, n: 5, m: 8, pos: P[0], color, anim: [{ type: 'path', pts: P, wave: 'saw', rate, phase: k / n }].concat(extra || []) }));
  const SPILL = [[0.0, 3.05, -0.6], [0.35, 2.9, -0.6], [0.9, 2.0, -0.6], [1.5, 0.9, -0.6], [1.95, 0.15, -0.6], [2.6, 0.05, -0.4], [3.6, 0.05, -0.2]];
  const GATE = { type: 'move', dir: [0, 1, 0], amp: 0.28, wave: 'window', from: 0.55, to: 0.9, ramp: 0.2 };
  const leg = (x, z) => ({ t: 'pipe', r: 0.025, n: 4, pts: [[x, 0.0, z], [4.6 + (x - 4.6) * 0.25, 2.6, 1.65 + (z - 1.65) * 0.25]] });

  LIBRARY({
    id: 'diga',
    lang: 'ro',
    title: 'Barajul',
    intro: 'Un baraj oprește un râu și formează un <b>lac</b> mare. Apa care coboară cu putere din lac învârte o <b>turbină</b> și un <b>generator</b>: așa se produce electricitate fără fum. Este energia <b>hidroelectrică</b>!',
    model: {
      rx: 0.45, ry: -1.15, speed: 0.25, height: 480, bg: 'sky', floor: false,
      phases: [ { from: 0, to: 0.55, label: 'Producerea de energie', color: '#16a34a' }, { from: 0.55, to: 0.9, label: 'Deversorul elimină apa în exces', color: '#0284c7' } ],
      parts: [
        { id: 'versanti', name: 'Munți și vale', label: 'Valea', color: '#65a30d', explode: [0, -0.5, 0],
          info: '<p>Barajele se construiesc în <b>văi înguste</b> dintre munți: este de ajuns un zid relativ scurt ca să închidă valea și să rețină o cantitate uriașă de apă.</p>',
          shapes: [ alongX(HILL(-1), -4.2, 5.2), alongX(HILL(1), -4.2, 5.2), alongX([[-2.1, -0.4], [2.1, -0.4], [2.1, -0.15], [-2.1, -0.15]], -4.2, 5.2, '#a16207'),
            ...[[-3.0, 3.5, -3.2], [1.0, 3.5, 3.1], [4.0, 3.6, -3.1], [-1.5, 3.5, 3.3], [2.6, 3.4, -3.3], [-3.6, 3.5, 3.0]].map(([x, y, z]) => ({ t: 'cone', r: 0.25, h: 0.7, n: 10, pos: [x, y, z], color: '#166534' })) ] },
        { id: 'lago', name: 'Lac artificial (acumulare)', label: 'Lacul', color: '#0ea5e9', explode: [-0.8, 0, 0],
          info: '<p>În spatele barajului apa râului se adună și formează un <b>lac</b>. Este o mare „rezervă” de energie: apa de sus poate coborî și poate pune turbinele la lucru când e nevoie.</p>',
          more: '<p>Apa de sus are <b>energie potențială</b>: cu cât este mai sus și cu cât este mai multă, cu atât poate da mai multă energie coborând. Lacurile artificiale servesc și ca rezervă de apă pentru irigații și de băut, și ca să protejeze de inundații.</p>',
          shapes: [ alongX(LAKE, -4.2, -0.38) ] },
        { id: 'diga', name: 'Barajul (zidul)', label: 'Barajul', color: '#d6d3d1', explode: [0, 0.6, 0],
          info: '<p>Este un zid enorm de <b>beton</b>. Este mult mai gros la bază decât sus, pentru că apa împinge mai tare în adâncime.</p>',
          more: '<p><b>Presiunea</b> apei crește cu aproximativ 1 atmosferă la fiecare 10 metri de adâncime. Acesta este un baraj de <b>greutate</b>: rezistă la împingere datorită greutății lui uriașe. Alte baraje sunt în <b>arc</b>, curbate spre lac, ca un pod sprijinit pe munți.</p>',
          shapes: [ { t: 'extrude', d: 6.0, pts: DAM }, { t: 'box', s: [0.75, 0.12, 6.0], pos: [-0.05, 3.06, 0], color: '#a8a29e' },
            ...Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.05, 0.12, 0.05], pos: [0.27, 3.18, -2.5 + k * 0.5], color: '#78716c' })) ] },
        { id: 'presa', name: 'Priza de apă (grătarul)', label: 'Priza', color: '#475569', pos: [-0.48, 1.45, ZP], explode: [-0.7, 0.3, 0],
          info: '<p>Intrarea apei, sub apă, pe partea lacului. Un <b>grătar</b> oprește crengile, frunzele și peștii care ar putea strica turbina.</p>',
          shapes: [ { t: 'box', s: [0.18, 0.7, 0.7] }, ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.04, 0.7, 0.025], pos: [-0.1, 0, z], color: '#1f2937' })),
            ...[-0.2, 0, 0.2].map((y) => ({ t: 'box', s: [0.04, 0.025, 0.7], pos: [-0.1, y, 0], color: '#1f2937' })) ] },
        { id: 'condotta', name: 'Conducta forțată', label: 'Conducta forțată', color: '#64748b', explode: [0, 0.3, 0.7],
          info: '<p>O țeavă mare de oțel care duce apa din lac în jos, până la centrală. Coborând, apa capătă viteză și ajunge la turbină cu o <b>forță enormă</b>.</p>',
          more: '<p>În conductă, energia potențială a apei devine <b>energie cinetică</b> (de mișcare) și presiune. La unele centrale de munte apa cade de la mai bine de 1000 de metri și ajunge la peste 100 de atmosfere!</p>',
          shapes: [ { t: 'pipe', r: 0.16, n: 16, curve: true, pts: PEN }, ...[1.3, 1.6, 2.0].map((x) => ({ t: 'box', s: [0.12, 0.3, 0.4], pos: [x, x < 1.5 ? 1.0 : 0.45, ZP], color: '#a8a29e' })) ] },
        { id: 'centrale', name: 'Centrala electrică', label: 'Centrala', color: '#e7e5e4', alpha: 0.3, explode: [0.5, 0.9, 0],
          info: '<p>Clădirea de la poalele barajului unde se află mașinile: turbine, generatoare și tablouri de comandă. Multe centrale sunt chiar săpate în interiorul muntelui.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.45, 1.25], pos: [2.95, 0.55, ZP] }, { t: 'box', s: [1.4, 0.06, 1.35], pos: [2.95, 1.3, ZP], color: '#57534e', alpha: 0.9 } ] },
        { id: 'turbina', name: 'Turbina', color: '#2563eb', pos: [2.75, 0.3, ZP], explode: [0.3, 0, 1.2],
          info: '<p>O roată mare cu palete curbe. Apa care vine din conductă o lovește și o face să se <b>învârtă</b> foarte repede, ca vântul care învârte o morișcă.</p>',
          more: '<p>Aceasta este o turbină <b>Francis</b>: apa intră printr-un „melc” care o înconjoară (carcasa spirală) și coboară în centru. Pentru căderi foarte mari se folosesc turbine <b>Pelton</b> cu cupe, pentru căderi mici turbine <b>Kaplan</b>, asemănătoare cu o elice.</p>',
          shapes: [ { t: 'torus', R: 0.34, r: 0.11, n: 24, m: 8, color: '#64748b' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.22, h: 0.06, n: 20, pos: [0, 0.06, 0] },
              ...Array.from({ length: 9 }, (_, k) => ({ t: 'box', s: [0.18, 0.12, 0.02], pos: [0.13 * Math.cos(k * 40 * D), 0, 0.13 * Math.sin(k * 40 * D)], rot: [0, -k * 40 - 35, 15], color: '#93c5fd' })) ] },
            { t: 'cyl', r: 0.14, r2: 0.1, h: 0.35, n: 16, pos: [0, -0.2, 0], color: '#475569' } ] },
        { id: 'generatore', name: 'Generatorul (alternatorul)', label: 'Generatorul', color: '#b45309', pos: [2.75, 0.95, ZP], explode: [0.3, 0.6, 1.2],
          info: '<p>Este legat de turbină printr-un arbore. Înăuntru, <b>magneți</b> mari se rotesc lângă <b>bobine de cupru</b>: mișcarea dă naștere curentului electric.</p>',
          more: '<p>Aceasta este <b>inducția electromagnetică</b>, descoperită de Faraday în 1831: un magnet care se mișcă lângă un fir face să curgă curent. Este un motor electric care funcționează „invers”: primește mișcare și dă electricitate.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 10, pos: [0, -0.35, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 3 } }, { t: 'tube', r: 0.36, ri: 0.28, h: 0.36, n: 26, color: '#b45309' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.26, h: 0.34, n: 20, color: '#dc2626' }, ...[0, 90, 180, 270].map((a) => ({ t: 'box', s: [0.1, 0.35, 0.08], pos: [0.24 * Math.cos(a * D), 0, 0.24 * Math.sin(a * D)], rot: [0, -a, 0], color: a % 180 ? '#2563eb' : '#ef4444' })) ] },
            { t: 'cyl', r: 0.37, h: 0.04, n: 26, pos: [0, 0.2, 0], color: '#78350f' } ] },
        { id: 'trasformatore', name: 'Transformatorul', color: '#57534e', pos: [3.75, 0.25, 1.65], explode: [0.6, 0.3, 0.6],
          info: '<p>Ridică tensiunea curentului (până la sute de mii de volți) ca să poată călători departe prin fire, pierzând foarte puțin.</p>',
          shapes: [ { t: 'box', s: [0.45, 0.45, 0.4] }, ...[-0.15, 0, 0.15].map((z) => ({ t: 'cyl', r: 0.035, h: 0.25, n: 8, pos: [0, 0.35, z], color: '#d6d3d1' })),
            ...[-0.15, -0.05, 0.05, 0.15].map((x) => ({ t: 'box', s: [0.03, 0.38, 0.45], pos: [x, 0, 0], color: '#44403c' })) ] },
        { id: 'traliccio', name: 'Stâlp și linie electrică', label: 'Linie electrică', color: '#94a3b8', explode: [0.9, 0.3, 0.6],
          info: '<p><b>Stâlpii</b> de oțel țin sus cablurile de înaltă tensiune, care duc electricitatea în orașe, chiar și la sute de kilometri.</p>',
          shapes: [ leg(4.35, 1.4), leg(4.85, 1.4), leg(4.35, 1.9), leg(4.85, 1.9), { t: 'box', s: [0.06, 0.06, 1.2], pos: [4.6, 2.6, 1.65] }, { t: 'box', s: [0.05, 0.05, 0.8], pos: [4.6, 2.2, 1.65] },
            { t: 'cyl', r: 0.03, h: 0.4, n: 6, pos: [4.6, 2.85, 1.65] },
            ...[1.1, 1.65, 2.2].map((z) => ({ t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[3.8, 0.5, z * 0.3 + 1.15], [4.6, 2.55, z], [5.4, 2.4, z], [6.2, 2.5, z]], color: '#1f2937' })) ] },
        { id: 'sfioratore', name: 'Deversorul și stăvilarele', label: 'Deversor', color: '#f59e0b', explode: [0, 1.0, -0.4],
          info: '<p>Când plouă mult și lacul este prea plin, se deschid <b>stăvilarele</b> (uși mari de oțel), iar apa în plus alunecă în jos pe <b>deversor</b>, fără să treacă peste baraj.</p>',
          shapes: [-0.9, -0.6, -0.3].map((z) => ({ t: 'box', s: [0.08, 0.32, 0.28], pos: [-0.25, 3.1, z - 0.15], anim: GATE }))
            .concat([{ t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, -1.23], color: '#a8a29e' }, { t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, 0.03], color: '#a8a29e' }]) },
        { id: 'fiume', name: 'Râul din aval', label: 'Râul', color: '#38bdf8', explode: [0.6, -0.3, 0],
          info: '<p>După turbină apa se întoarce în râu: este aceeași apă, nu a fost consumată și nici murdărită. Totuși barajul schimbă râul: de aceea trebuie lăsată mereu puțină apă (<b>debitul minim</b>) pentru pești și plante.</p>',
          shapes: [ alongX([[-1.2, -0.14], [1.2, -0.14], [1.2, 0.0], [-1.2, 0.0]], 1.95, 5.2) ] },
        { id: 'acqua', name: 'Apa care curge', label: 'Apa', color: '#1d4ed8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Urmărește apa: intră prin priză, coboară în conductă, învârte turbina și se întoarce în râu.</p>',
          shapes: drops(WATER, 18, 0.35, '#1d4ed8').concat(drops(SPILL, 8, 1.2, '#7dd3fc', 0.07, [{ type: 'blink', fade: true, wave: 'window', from: 0.6, to: 0.9, ramp: 0.1 }])) },
        { id: 'corrente', name: 'Curentul electric', label: 'Curent', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>Curentul produs de generator trece prin transformator și pornește pe cablurile de înaltă tensiune spre casele noastre.</p>',
          shapes: drops(ELEC, 10, 0.5, '#facc15', 0.05) }
      ]
    },
    steps: [
      { icon: '💧', title: 'Energie din apă', explode: 0,
        html: '<p>Apa care coboară de sus are multă <b>energie</b>: gândește-te la forța unei cascade! O centrală hidroelectrică o folosește ca să producă electricitate.</p><p>Este o sursă <b>regenerabilă</b>: ploaia și zăpada umplu din nou lacul, și nu se arde nimic.</p>' },
      { icon: '🧱', title: 'Barajul ține lacul', focus: ['diga', 'lago', 'versanti'], explode: 0, view: { rx: 0.4, ry: 0.85 },
        html: '<p><b>Barajul</b> închide valea, iar apa râului formează un <b>lac</b>. Zidul este mult mai gros jos: cu cât te duci mai adânc, cu atât apa <b>împinge mai tare</b>.</p><p class="tip">🍾 Fă trei găuri la înălțimi diferite într-o sticlă plină: apa din gaura cea mai de jos țâșnește mai departe!</p>' },
      { icon: '⬇️', title: 'În jos pe conducta forțată', focus: ['presa', 'condotta', 'acqua'], explode: 0, view: { rx: 0.35, ry: -0.8 },
        html: '<p>Apa intră prin <b>priză</b>, protejată de un grătar, și coboară în <b>conducta forțată</b>, o țeavă mare de oțel. Coborând capătă viteză: energia înălțimii devine energie de <b>mișcare</b>.</p>' },
      { icon: '🌀', title: 'Turbina se învârte', focus: ['turbina', 'acqua', 'condotta', 'centrale'], explode: 0.3, zoom: 1.4, view: { rx: 0.35, ry: -0.6 },
        html: '<p>În centrală apa lovește paletele curbe ale <b>turbinei</b> și o face să se învârtă foarte repede, ca vântul cu o morișcă. Apoi apa, mai lentă, iese și se întoarce în râu.</p>' },
      { icon: '🧲', title: 'Generatorul face curentul', focus: ['generatore', 'turbina', 'corrente'], explode: 0.3, zoom: 1.4, view: { rx: 0.3, ry: -0.6 },
        html: '<p>Turbina rotește <b>generatorul</b>: magneți mari se rotesc lângă bobine de cupru și în bobină apare <b>curentul electric</b>. Este un motor electric care funcționează invers!</p>' },
      { icon: '🗼', title: 'Spre orașe', focus: ['trasformatore', 'traliccio', 'corrente'], explode: 0, view: { rx: 0.3, ry: -0.3 },
        html: '<p><b>Transformatorul</b> ridică tensiunea curentului, iar cablurile sprijinite pe <b>stâlpi</b> îl duc departe, până în orașe și la casele noastre.</p>' },
      { icon: '🌧️', title: 'Când lacul este prea plin', focus: ['sfioratore', 'diga', 'fiume', 'acqua'], loop: [0.5, 0.95], explode: 0, view: { rx: 0.35, ry: -1.0 },
        html: '<p>După ploi abundente se deschid <b>stăvilarele</b>: apa în plus alunecă pe <b>deversor</b>, fără să pună barajul în pericol.</p><p class="tip">🐟 Barajele dau energie curată, dar schimbă viața râului: de aceea trebuie să lase mereu să curgă puțină apă și uneori au „scări” ca peștii să poată trece.</p>' }
    ],
    facts: [
      { icon: '🇨🇳', title: 'Cel mai puternic baraj', html: 'Barajul <b>Celor Trei Chei</b>, din China, este cea mai puternică centrală electrică din lume: produce cât aproximativ 20 de centrale nucleare mari.' },
      { icon: '🏔️', title: 'Italia barajelor', html: 'În Italia există peste <b>500 de baraje mari</b>, mai ales în Alpi. Odinioară energia hidroelectrică se numea „cărbunele alb” și alimenta primele fabrici din Nord.' },
      { icon: '🔋', title: 'O baterie de apă', html: 'Unele centrale au două lacuri, unul sus și unul jos: când există energie în plus, <b>pompează</b> apa în sus; când e nevoie, o lasă să cadă. Funcționează ca o baterie uriașă.' },
      { icon: '⚙️', title: 'Roata morii', html: 'Încă de acum peste 2000 de ani se foloseau <b>roțile de apă</b> pentru a măcina grâul: turbinele de azi sunt nepoatele lor supertehnologizate.' }
    ],
    quiz: [
      { type: 'mc', q: 'De ce este un baraj mai gros la bază decât sus?', options: ['Pentru frumusețe', 'Pentru că în adâncime apa împinge mai tare', 'Ca să treacă mașinile', 'Pentru că betonul costă puțin'], answer: 1, explain: 'Presiunea apei crește cu adâncimea: jos împingerea este maximă.' },
      { type: 'order', q: 'Pune în ordine drumul energiei', items: ['Apa din lac', 'Conducta forțată', 'Turbina', 'Generatorul', 'Transformatorul și liniile electrice'], explain: 'Apa coboară, învârte turbina, generatorul produce curent, iar liniile îl duc departe.' },
      { type: 'mc', q: 'Ce produce curentul electric în generator?', options: ['Focul', 'Magneți care se rotesc lângă bobine de cupru', 'Apa care atinge firele', 'Soarele'], answer: 1, explain: 'Este inducția electromagnetică: un magnet în mișcare dă naștere curentului într-o bobină.' },
      { type: 'tf', q: 'Energia hidroelectrică este o sursă regenerabilă.', answer: true, explain: 'Ploaia și zăpada umplu din nou lacul: apa nu se consumă.' },
      { type: 'mc', q: 'La ce servește deversorul?', options: ['Ca să intre peștii în lac', 'Ca să elimine apa în exces când lacul este prea plin', 'Ca să producă mai mult curent', 'Ca să curețe turbina'], answer: 1, explain: 'Stăvilarele se deschid, iar apa în exces coboară fără să treacă peste baraj.' },
      { type: 'mc', q: 'Ce fel de energie are apa stătută sus, în lac?', options: ['Energie potențială', 'Energie chimică', 'Energie nucleară', 'Energie luminoasă'], answer: 0, explain: 'Apa de sus are energie potențială, care devine energie de mișcare coborând.' }
    ]
  });
})();
