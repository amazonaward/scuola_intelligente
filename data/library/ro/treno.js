/* Il treno elettrico ad alta velocità (motrice di testa). Il treno viaggia verso +x; alto = +y; i binari corrono lungo x (scartamento: z = ±0.43).
   Le traversine scorrono all'indietro per dare l'idea del movimento. */
(function () {
  const TAU = Math.PI * 2, RW = 0.28, WR = 2.2; // raggio ruota, velocità di rotazione delle ruote
  const SPEED = WR * TAU * RW;           // velocità del treno (unità per giro dell'orologio)
  const SL = 0.6;                        // passo delle traversine
  const PROFILE = [[-3.2, 0.62], [2.2, 0.62], [2.75, 0.66], [3.15, 0.78], [3.36, 0.94], [3.34, 1.06], [3.05, 1.3], [2.45, 1.64], [1.85, 1.86], [1.2, 1.92], [-3.2, 1.92]];
  const wheelset = (x) => ({ t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [
    { t: 'cyl', r: 0.05, h: 1.0, n: 12, rot: [90, 0, 0], color: '#6b7280' },
    ...[-0.43, 0.43].map((z) => ({ t: 'cyl', r: RW, h: 0.07, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#9ca3af' })),
    ...[-0.38, 0.38].map((z) => ({ t: 'cyl', r: RW + 0.035, h: 0.025, n: 26, rot: [90, 0, 0], pos: [0, 0, z], color: '#6b7280' })),
    ...[-0.43, 0.43].map((z) => ({ t: 'box', s: [0.3, 0.04, 0.075], pos: [0, 0, z + Math.sign(z) * 0.002], color: '#475569' })) ] });
  const AXLES = [-2.55, -1.75, 1.15, 1.95];
  const bogie = (x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
    { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, 0.52] }, { t: 'box', s: [1.2, 0.12, 0.08], pos: [0, 0.34, -0.52] }, { t: 'box', s: [0.16, 0.1, 1.04], pos: [0, 0.36, 0] },
    ...[-0.4, 0.4].map((dx) => ({ t: 'pipe', r: 0.012, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 22 }, (_, i) => [dx + 0.05 * Math.cos(i * 1.2), 0.4 + i * 0.008, 0.52 + 0.05 * Math.sin(i * 1.2)]) })) ] });
  const sleepers = Array.from({ length: 15 }, (_, k) => ({ t: 'box', s: [0.16, 0.08, 1.35], pos: [-4.2 + k * SL, -0.07, 0], color: '#78716c', div: 1 }));
  const POLES = [-3.4, 3.4];
  const CUR = [[-1.45, 2.78, 0], [-1.45, 2.2, 0], [-1.45, 1.95, 0], [-1.2, 1.7, 0.1], [-0.5, 0.75, 0.1], [0.0, 0.5, 0.1], [0.65, 0.5, 0.1], [1.1, 0.55, 0.1], [1.15, 0.42, 0.25], [1.15, RW + 0.02, 0.43], [1.15, 0.0, 0.43]];


  LIBRARY({
    lang: 'ro',
    id: 'treno',
    title: 'Trenul',
    intro: 'Un tren de mare viteză aleargă cu <b>300 km/h</b> fără să ardă combustibil: ia <b>electricitatea</b> de la un fir de deasupra șinelor și o transformă în mișcare cu motoare electrice puternice. Roți de oțel pe șine de oțel: frecare foarte mică!',
    model: {
      rx: 0.15, ry: -0.6, speed: 0.4, height: 460, fit: 1.15,
      parts: [
        { id: 'cassa', name: 'Caroseria', label: 'Caroserie', color: '#dc2626', alpha: 0.62, explode: [0, 0.9, 0],
          info: '<p>Este „învelișul" trenului, din aluminiu. Botul aerodinamic <b>taie aerul</b>: la viteză mare, rezistența aerului este cel mai greu efort de învins.</p>',
          more: '<p>La 300 km/h, mai mult de 80% din energie este folosită pentru a împinge aerul. De aceea trenurile rapide au botul lung, laturile netede și chiar boghiurile acoperite. Botul unui tren japonez a fost desenat copiind ciocul pescărașului albastru!</p>',
          shapes: [ { t: 'extrude', d: 1.06, pts: PROFILE, smooth: true },
            { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, 0.535], color: '#0f172a', alpha: 0.9, decal: 1 }, { t: 'box', s: [4.6, 0.32, 0.01], pos: [-0.75, 1.42, -0.535], color: '#0f172a', alpha: 0.9, decal: 1 },
            { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, 0.536], color: '#e5e7eb', alpha: 1, decal: 1 }, { t: 'box', s: [5.4, 0.12, 0.012], pos: [-0.4, 0.82, -0.536], color: '#e5e7eb', alpha: 1, decal: 1 },
            { t: 'box', s: [0.42, 0.9, 0.012], pos: [-2.75, 1.13, 0.537], color: '#9ca3af', alpha: 0.9, decal: 2 },
            { t: 'box', s: [0.62, 0.02, 0.86], pos: [2.755, 1.478, 0], rot: [0, 0, -30], color: '#0f172a', alpha: 0.95, decal: 1 },
            { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, 0.537], color: '#9ca3af', alpha: 1, decal: 1 }, { t: 'box', s: [5.2, 0.22, 0.012], pos: [-0.6, 0.72, -0.537], color: '#9ca3af', alpha: 1, decal: 1 },
            { t: 'box', s: [1.6, 0.14, 0.7], pos: [0.3, 1.99, 0], color: '#9ca3af', alpha: 1 } ] },
        { id: 'cabina', name: 'Cabina de conducere', label: 'Cabină', color: '#334155', explode: [0.6, 0.9, 0],
          info: '<p>Aici stă <b>mecanicul de locomotivă</b>. Are maneta de accelerare („manipulatorul"), maneta de frână, ecranele și radioul. Nu are volan: șinele hotărăsc încotro mergem!</p>',
          more: '<p>La viteză mare, semnalele de pe marginea șinelor ar trece prea repede: informațiile ajung direct în cabină, pe ecrane (sistemul <b>ERTMS</b>). Dacă mecanicul nu reacționează, trenul frânează singur.</p>',
          shapes: [ { t: 'box', s: [0.5, 0.35, 0.8], pos: [2.35, 1.0, 0], color: '#1f2937' }, { t: 'box', s: [0.45, 0.04, 0.7], pos: [2.4, 1.2, 0], rot: [0, 0, 20], color: '#475569' },
            { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, 0.0], rot: [0, 0, 20], color: '#22c55e', decal: 1 }, { t: 'box', s: [0.12, 0.08, 0.004], pos: [2.4, 1.23, -0.2], rot: [0, 0, 20], color: '#38bdf8', decal: 1 },
            { t: 'box', s: [0.3, 0.06, 0.3], pos: [1.75, 0.95, 0.15], color: '#1e3a8a' }, { t: 'box', s: [0.06, 0.4, 0.3], pos: [1.6, 1.15, 0.15], color: '#1e3a8a' } ] },
        { id: 'sedili', name: 'Vagon de pasageri', label: 'Pasageri', color: '#1d4ed8', explode: [0, 0.9, 0],
          info: '<p>În spatele cabinei sunt <b>scaunele</b> pasagerilor. Un tren de mare viteză transportă aproximativ <b>450–600 de persoane</b>: câte mașini ar fi necesare?</p>',
          shapes: Array.from({ length: 6 }, (_, k) => [-0.3, 0.3].map((z) => ({ t: 'group', pos: [-2.5 + k * 0.6, 0.66, z], shapes: [ { t: 'box', s: [0.28, 0.1, 0.36], pos: [0, 0.22, 0] }, { t: 'box', s: [0.08, 0.5, 0.36], pos: [-0.12, 0.47, 0] } ] }))).flat() },
        { id: 'pantografo', name: 'Pantograf', color: '#475569', pos: [-1.45, 1.92, 0], explode: [0, 1.6, 0],
          info: '<p>Este „brațul" articulat de pe acoperiș care <b>alunecă pe fir</b> și colectează curentul. Un arc îl împinge mereu în sus, așa că nu pierde niciodată contactul.</p>',
          more: '<p>Patina din vârf este din <b>grafit</b>, ca mina unui creion: conduce bine și alunecă pe firul de cupru. Firul este montat în zigzag, așa că patina se uzează uniform.</p>',
          anim: { type: 'move', dir: [0, 1, 0], amp: 0.02, wave: 'sin', rate: 1.5 },
          shapes: [ { t: 'box', s: [0.5, 0.06, 0.5], pos: [0, 0.03, 0], color: '#64748b' }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, 0.15] }, { t: 'cyl', r: 0.04, h: 0.1, n: 10, pos: [-0.15, 0.1, -0.15] },
            { t: 'pipe', r: 0.025, n: 8, pts: [[-0.2, 0.12, 0], [0.45, 0.48, 0]] }, { t: 'pipe', r: 0.02, n: 8, pts: [[0.45, 0.48, 0], [0.0, 0.83, 0]] },
            { t: 'pipe', r: 0.012, n: 6, pts: [[-0.1, 0.12, 0], [0.4, 0.45, 0]], color: '#94a3b8' },
            { t: 'box', s: [0.1, 0.04, 0.8], pos: [0, 0.85, 0], color: '#1f2937' }, { t: 'box', s: [0.06, 0.03, 0.8], pos: [0, 0.875, 0], color: '#a3a3a3' } ] },
        { id: 'catenaria', name: 'Linia aeriană (catenara)', label: 'Catenară', color: '#b45309', explode: [0, 1.9, 0], anchor: [2.2, 3.2, 0],
          info: '<p>Deasupra șinelor trece un <b>fir de cupru</b> mereu sub tensiune electrică, atârnat de stâlpi. Pe liniile de mare viteză tensiunea este de <b>25 000 de volți</b>: foarte periculos, nu te apropia niciodată!</p>',
          more: '<p>Firul de contact este atârnat cu multe „pendule" mici de o funie situată mai sus (<b>catenara</b> propriu-zisă, care își ia numele de la curba pe care o face un lanț atârnat). Așa rămâne perfect orizontal. În Italia, liniile obișnuite folosesc 3000 V în curent continuu.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-4.2, 2.79, 0], [4.2, 2.79, 0]] },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-4.2, 3.32, 0], [-3.4, 3.35, 0], [0, 3.05, 0], [3.4, 3.35, 0], [4.2, 3.32, 0]], color: '#78716c' },
            ...[-2.4, -1.2, 0, 1.2, 2.4].map((x) => ({ t: 'pipe', r: 0.006, n: 4, pts: [[x, 2.8, 0], [x, 3.12 + 0.1 * (Math.abs(x) / 2.4) ** 2, 0]], color: '#78716c' })),
            ...POLES.flatMap((x) => [ { t: 'cyl', r: 0.07, h: 3.6, n: 12, pos: [x, 1.7, -1.15], color: '#6b7280' }, { t: 'pipe', r: 0.03, n: 6, pts: [[x, 3.35, -1.15], [x, 3.35, 0.1]], color: '#6b7280' },
              { t: 'cyl', r: 0.05, h: 0.2, n: 10, pos: [x, 3.2, 0], color: '#f8fafc' } ]) ] },
        { id: 'trasformatore', name: 'Transformator', color: '#78350f', pos: [-0.35, 0.47, 0], explode: [0, -0.7, 0.6],
          info: '<p>Curentul din fir este prea „puternic" pentru motoare. <b>Transformatorul</b>, un bloc mare de fier și cupru aflat sub podea, coboară tensiunea de la 25 000 la câteva mii de volți.</p>',
          more: '<p>Un transformator are două bobine înfășurate pe același miez de fier: curentul alternativ din prima creează un câmp magnetic care se schimbă, iar acesta „induce" curent în a doua. Cu mai puține spire, tensiunea este mai mică. Cântărește câteva tone!</p>',
          shapes: [ { t: 'box', s: [0.9, 0.3, 0.8] }, ...[-0.25, 0, 0.25].map((x) => ({ t: 'cyl', r: 0.1, h: 0.3, n: 16, pos: [x, 0.02, 0.0], color: '#b45309' })), { t: 'box', s: [0.95, 0.03, 0.85], pos: [0, 0.16, 0], color: '#92400e' } ] },
        { id: 'convertitore', name: 'Convertor electronic', label: 'Convertor', color: '#0f766e', pos: [0.65, 0.47, 0], explode: [0.2, -0.7, 0.6],
          info: '<p>Este „creierul de putere": un dulap plin de electronică care dozează cât curent să trimită motoarelor. Mai mult curent = mai multă viteză.</p>',
          more: '<p>Convertorul (<b>invertorul</b>) transformă curentul într-un curent alternativ cu frecvență variabilă: schimbând frecvența, se schimbă viteza motoarelor. Folosește tranzistoare de putere (IGBT) care se aprind și se sting de mii de ori pe secundă.</p>',
          shapes: [ { t: 'box', s: [0.75, 0.28, 0.8] }, { t: 'box', s: [0.6, 0.12, 0.01], pos: [0, 0.03, 0.405], color: '#134e4a', decal: 1 },
            { t: 'box', s: [0.06, 0.04, 0.01], pos: [-0.22, 0.05, 0.41], color: '#4ade80', decal: 2, anim: { type: 'blink', color: '#dcfce7', wave: 'square', rate: 3 } } ] },
        { id: 'motori', name: 'Motoare de tracțiune', label: 'Motoare', color: '#2563eb', explode: [0, -0.4, 1.0],
          info: '<p>Sunt <b>motoarele electrice</b> care rotesc roțile, câte unul pentru fiecare osie. Împreună dezvoltă mii de cai putere, fără fum și aproape fără zgomot.</p>',
          more: '<p>Un tren de mare viteză are o putere de aproximativ <b>10 000 kW</b>, cât 100 de automobile. Multe trenuri moderne au motoarele distribuite sub mai multe vagoane: accelerează mai bine și roțile patinează mai puțin.</p>',
          shapes: AXLES.map((x) => ({ t: 'group', pos: [x + (x < 0 ? 0.32 : -0.32), RW + 0.04, 0.05], shapes: [ { t: 'cyl', r: 0.15, h: 0.5, n: 20, rot: [90, 0, 0] }, { t: 'cyl', r: 0.08, h: 0.12, n: 14, rot: [90, 0, 0], pos: [0, 0, 0.3], color: '#475569' },
            { t: 'group', pos: [0, 0, -0.27], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR * 3 }, shapes: [ { t: 'cyl', r: 0.1, h: 0.03, n: 14, rot: [90, 0, 0], color: '#93c5fd' }, { t: 'box', s: [0.18, 0.03, 0.035], color: '#1e3a8a' } ] } ] })) },
        { id: 'carrelli', name: 'Boghiuri', color: '#374151', explode: [0, -0.4, 0],
          info: '<p>Sub caroserie sunt două <b>boghiuri</b>, fiecare cu 4 roți. Se pot roti puțin față de caroserie, așa că trenul trece prin curbe fără să iasă de pe șine.</p>',
          more: '<p>Arcuri de oțel și perne de aer (suspensii pneumatice) separă boghiurile de caroserie: pasagerii nu simt micile neregularități ale șinei, nici măcar la 300 km/h.</p>',
          shapes: [ bogie(-2.15), bogie(1.55) ] },
        { id: 'ruote', name: 'Roți (osii montate)', label: 'Roți', color: '#9ca3af', explode: [0, -0.4, 0],
          info: '<p>Roțile sunt din <b>oțel</b>, prinse în perechi pe o osie rigidă. Au un <b>buzdugan</b> (rebord) care iese în partea interioară și care împiedică ieșirea de pe șină.</p>',
          more: '<p>Roțile nu sunt cilindrice, ci ușor <b>conice</b>: în curbă, roata exterioară alunecă puțin spre exterior și „aleargă" pe un diametru mai mare. Astfel parcurge mai mult drum decât roata interioară, chiar dacă sunt prinse pe aceeași osie. Genial!</p>',
          shapes: AXLES.map(wheelset) },
        { id: 'freni', name: 'Frâne cu disc', label: 'Frâne', color: '#f97316', explode: [0, -0.4, -0.8],
          info: '<p>Pe fiecare osie sunt niște <b>discuri</b> de oțel: etrierele le strâng și le fac să încetinească. Dar mai întâi frânează motorul electric!</p>',
          more: '<p>Când frânează, motoarele funcționează invers, ca <b>generatoare</b>: transformă mișcarea în electricitate și o trimit înapoi în fir, unde o folosesc alte trenuri (frânare cu recuperare). La 300 km/h sunt necesari mai mult de 3 km ca să te oprești!</p>',
          shapes: AXLES.flatMap((x) => [ { t: 'group', pos: [x, RW + 0.02, 0], anim: { type: 'spin', axis: 'z', dir: -1, rate: WR }, shapes: [-0.15, 0.15].map((z) => ({ t: 'tube', r: 0.2, ri: 0.06, h: 0.03, n: 22, rot: [90, 0, 0], pos: [0, 0, z] })) },
            { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, -0.15], color: '#1f2937' }, { t: 'box', s: [0.12, 0.1, 0.06], pos: [x, RW + 0.22, 0.15], color: '#1f2937' } ]) },
        { id: 'binari', name: 'Șine și traverse', label: 'Șine', color: '#9ca3af', explode: [0, -0.8, 0],
          info: '<p>Două șine de oțel, mereu la aceeași distanță (<b>1435 mm</b>), fixate pe traverse de beton așezate pe <b>balastul</b> de pietre.</p>',
          more: '<p>Roată de oțel pe șină de oțel: partea care se atinge este cât o monedă! Frecarea de rostogolire este foarte mică, de aproximativ 5 ori mai mică decât la o mașină pe asfalt. De aceea trenul consumă foarte puțină energie pentru fiecare pasager.</p>',
          shapes: [ { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, 0.43] }, { t: 'box', s: [8.4, 0.1, 0.07], pos: [0, -0.02, -0.43] },
            { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, 0.43], color: '#6b7280' }, { t: 'box', s: [8.4, 0.02, 0.15], pos: [0, -0.07, -0.43], color: '#6b7280' },
            { t: 'group', anim: { type: 'move', dir: [-1, 0, 0], amp: SL, wave: 'saw', rate: SPEED / SL }, shapes: sleepers },
            { t: 'extrude', d: 8.4, pts: [[-1.05, -0.36], [1.05, -0.36], [0.78, -0.1], [-0.78, -0.1]], rot: [0, 90, 0], color: '#a8a29e' } ] },
        { id: 'corrente', name: 'Curent electric', label: 'Curent', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>Curentul coboară din fir prin pantograf, trece prin transformator și prin convertor, ajunge la motoare și apoi se întoarce la centrală prin <b>roți și șine</b>.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 5, m: 8, pos: CUR[0], anim: { type: 'path', pts: CUR, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'fari', name: 'Faruri', color: '#fef9c3', explode: [0.5, 0, 0],
          info: '<p>În față trenul are faruri <b>albe</b>, în spate lumini <b>roșii</b>: așa se înțelege de departe în ce direcție merge.</p>',
          shapes: [-0.3, 0.3].map((z) => ({ t: 'box', s: [0.05, 0.07, 0.14], pos: [3.28, 0.95, z], rot: [0, 0, 70], anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.8 } })) }
      ]
    },
    steps: [
      { icon: '🚄', title: 'Un tren electric', explode: 0,
        html: '<p>Trenurile de mare viteză nu au rezervor: iau <b>electricitatea</b> de la un fir de deasupra șinelor și o folosesc ca să rotească niște <b>motoare electrice</b> legate de roți.</p><p>Astfel pot circula cu 300 km/h fără să polueze aerul de-a lungul traseului.</p>' },
      { icon: '⚡', title: 'De la fir la pantograf', focus: ['catenaria', 'pantografo', 'corrente'], explode: 0, view: { rx: 0.2, ry: -0.9 },
        html: '<p><b>Pantograful</b> este un braț articulat de pe acoperiș: un arc îl împinge spre <b>firul de cupru</b> al liniei aeriene, care are o tensiune de 25 000 de volți.</p><p class="tip">⚠️ Nu te urca niciodată pe vagoane și nu te apropia de firele căii ferate: curentul poate „sări" chiar și fără să atingi!</p>' },
      { icon: '🔁', title: 'Transformator și convertor', focus: ['trasformatore', 'convertitore', 'corrente'], explode: 0.4, view: { rx: 0.1, ry: -0.35 },
        html: '<p><b>Transformatorul</b> coboară tensiunea; <b>convertorul</b>, plin de electronică, hotărăște cât curent să trimită motoarelor. Este ca accelerația unei mașini.</p>' },
      { icon: '⚙️', title: 'Motoarele rotesc roțile', focus: ['motori', 'ruote', 'carrelli'], explode: 0.35, view: { rx: 0.25, ry: -0.45 },
        html: '<p>Un <b>motor electric</b> pentru fiecare osie rotește roțile prin intermediul unor angrenaje. Roțile împing șinele înapoi… iar trenul merge înainte!</p><p><b>Boghiurile</b> se pot roti sub caroserie ca să urmeze curbele.</p>' },
      { icon: '🛤️', title: 'Oțel pe oțel', focus: ['ruote', 'binari'], explode: 0, zoom: 1.2, view: { rx: 0.25, ry: -1.35 },
        html: '<p>Roțile și șinele sunt din <b>oțel</b> foarte dur: se deformează foarte puțin, iar frecarea este foarte mică. Pentru a transporta o tonă cu trenul este nevoie de mult mai puțină energie decât cu camionul.</p><p><b>Buzduganul</b> interior al roților împiedică trenul să iasă de pe șină.</p>' },
      { icon: '🛑', title: 'Frânare… și recuperare de energie', focus: ['freni', 'motori', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.6 },
        html: '<p>Ca să frâneze, <b>motoarele</b> devin <b>generatoare</b>: mișcarea se întoarce în electricitate și este trimisă înapoi în fir. Apoi intervin <b>frânele cu disc</b>.</p><p class="tip">📏 Un tren care merge cu 300 km/h are nevoie de mai mult de 3 km ca să se oprească: de aceea nu poate frâna în ultimul moment!</p>' },
      { icon: '🧑‍✈️', title: 'În cabină și botul aerodinamic', focus: ['cabina', 'cassa', 'fari'], explode: 0, view: { rx: 0.2, ry: -1.0 },
        html: '<p>În <b>cabină</b>, mecanicul controlează viteza, frânele și semnalele pe ecrane. Trenul nu are volan: îl conduc șinele.</p><p><b>Botul</b> lung și neted taie aerul: la viteză mare, învingerea rezistenței aerului este cel mai greu efort.</p>' }
    ],
    facts: [
      { icon: '🚂', title: 'Primul tren italian', html: 'Prima cale ferată italiană a fost <b>Napoli–Portici</b>, inaugurată în 1839: 7 km parcurși de o locomotivă cu abur.' },
      { icon: '🏁', title: 'Record de viteză', html: 'În 2007, un tren francez a atins <b>574,8 km/h</b> pe șine. Trenul japonez cu levitație magnetică a depășit 600 km/h.' },
      { icon: '🌱', title: 'Cel mai „verde"', html: 'Pe persoană și pe kilometru, trenul emite până la <b>de 10 ori mai puțin CO₂</b> decât mașina și de multe ori mai puțin decât avionul.' },
      { icon: '🔧', title: 'Trenurile Frecce', html: 'Frecciarossa leagă Torino, Milano, Bologna, Florența, Roma și Napoli: de la Milano la Roma sunt necesare aproximativ 3 ore, față de cele peste 6 ore de odinioară.' }
    ],
    quiz: [
      { type: 'mc', q: 'De unde ia energia un tren de mare viteză?', options: ['Din rezervorul de motorină', 'De la un fir electric de deasupra șinelor', 'De la panouri solare de pe acoperiș', 'Din cărbune'], answer: 1, explain: 'Pantograful colectează curentul de la linia aeriană (catenară).' },
      { type: 'mc', q: 'Cum se numește brațul articulat de pe acoperișul trenului?', options: ['Pantograf', 'Boghiu', 'Transformator', 'Buzdugan'], answer: 0, explain: 'Pantograful alunecă pe fir și aduce curentul în tren.' },
      { type: 'tf', q: 'Când frânează, trenul poate trimite electricitate înapoi în linie.', answer: true, explain: 'Motoarele funcționează ca generatoare: este frânarea cu recuperare.' },
      { type: 'mc', q: 'Ce împiedică roțile să iasă de pe șină?', options: ['Un magnet', 'Buzduganul care iese din roți', 'Mecanicul cu volanul', 'Catenara'], answer: 1, explain: 'Buzduganul de pe partea interioară a roții ține trenul pe șine.' },
      { type: 'mc', q: 'De ce consumă trenul puțină energie pentru fiecare pasager?', options: ['Pentru că merge încet', 'Pentru că roțile și șinele de oțel au frecare foarte mică', 'Pentru că nu are motoare', 'Pentru că este ușor ca o bicicletă'], answer: 1, explain: 'Oțel pe oțel: frecarea de rostogolire este foarte mică, iar trenul transportă mulți oameni deodată.' },
      { type: 'order', q: 'Pune în ordine drumul curentului', items: ['Firul liniei aeriene', 'Pantograful', 'Transformatorul', 'Convertorul', 'Motoarele', 'Roțile și șinele'], explain: 'De la fir la pantograf, apoi transformator și convertor, motoarele și în final întoarcerea prin roți și șine.' }
    ]
  });
})();
