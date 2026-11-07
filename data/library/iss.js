/* La Stazione Spaziale Internazionale (ISS). Formato: data/library/FORMATO.md
   Assi: il traliccio corre lungo x, i moduli abitati lungo z (z+ = verso di marcia), y = alto (la Terra è sotto, sfondo "orbit"). */
(function () {
  const TY = 1.15, TZ = 0.8;                       // asse del traliccio
  /* modulo cilindrico lungo z (o lungo x con ax = 'x'): corpo, anelli di rinforzo, coni di raccordo */
  const modZ = (z0, z1, r, color, x, y) => {
    const L = z1 - z0, zc = (z0 + z1) / 2, s = [
      { t: 'cyl', r, h: L - 0.24, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, zc], color },
      { t: 'cyl', r, r2: r * 0.62, h: 0.12, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, z1 - 0.06], color },
      { t: 'cyl', r: r * 0.62, r2: r, h: 0.12, n: 30, rot: [90, 0, 0], pos: [x || 0, y || 0, z0 + 0.06], color }
    ];
    for (let k = 1; k < 4; k++) s.push({ t: 'torus', R: r + 0.005, r: 0.025, n: 30, m: 6, rot: [90, 0, 0], pos: [x || 0, y || 0, z0 + 0.12 + (L - 0.24) * k / 4], color: '#a8a29e' });
    return s;
  };
  const modX = (x0, x1, r, color, y, z) => modZ(x0, x1, r, color, 0, 0).map((s) => Object.assign({}, s, { pos: [s.pos[2], y, z], rot: [0, 0, 90] }));
  /* ala di pannelli solari: telo dorato a celle + albero centrale */
  const wing = (dir) => {
    const s = [{ t: 'cyl', r: 0.035, h: 4.3, n: 8, rot: [90, 0, 0], pos: [0, 0, dir * 2.3], color: '#e5e7eb' }];
    for (const side of [-1, 1]) {
      s.push({ t: 'box', s: [0.46, 0.02, 4.2], pos: [side * 0.27, 0, dir * 2.35], color: '#b45309' });
      for (let k = 1; k < 12; k++) s.push({ t: 'box', s: [0.46, 0.006, 0.012], pos: [side * 0.27, 0.014, dir * (0.25 + k * 0.35)], color: '#fcd34d', decal: 1 });
      s.push({ t: 'box', s: [0.012, 0.006, 4.2], pos: [side * 0.27, 0.014, dir * 2.35], color: '#fcd34d', decal: 1 });
    }
    s.push({ t: 'box', s: [1.0, 0.08, 0.12], pos: [0, 0, dir * 4.45], color: '#9ca3af' });
    return s;
  };
  const array = (x, ph) => ({ t: 'group', pos: [x, TY, TZ], anim: { type: 'swing', axis: 'x', amp: 35, rate: 0.5, phase: ph }, shapes: [
    { t: 'cyl', r: 0.16, h: 0.5, n: 16, pos: [0, 0, 0], color: '#6b7280' }
  ].concat(wing(1), wing(-1)) });
  /* traliccio: trave con correnti e diagonali */
  const truss = [ { t: 'box', s: [15.2, 0.46, 0.46], pos: [0, TY, TZ], color: '#cbd5e1' } ];
  for (let i = -7; i <= 7; i++) {
    truss.push({ t: 'box', s: [0.06, 0.5, 0.5], pos: [i, TY, TZ], color: '#94a3b8' });
    if (i < 7) for (const zz of [-1, 1]) truss.push({ t: 'box', s: [1.08, 0.035, 0.012], pos: [i + 0.5, TY, TZ + zz * 0.236], rot: [0, 0, (i % 2 ? 1 : -1) * 23], color: '#64748b', decal: 1 });
  }
  const radiator = (x, ph) => ({ t: 'group', pos: [x, TY - 0.25, TZ], anim: { type: 'swing', axis: 'y', amp: 22, rate: 0.35, phase: ph }, shapes: [
    { t: 'cyl', r: 0.06, h: 0.5, n: 10, pos: [0, -0.2, 0], color: '#9ca3af' }
  ].concat([0, 1, 2, 3].map((k) => ({ t: 'box', s: [1.3, 0.78, 0.04], pos: [0, -0.9 - k * 0.84, 0], color: '#f8fafc' })),
    [0, 1, 2, 3].map((k) => ({ t: 'box', s: [1.22, 0.02, 0.012], pos: [0, -0.9 - k * 0.84, 0.026], color: '#cbd5e1', decal: 1 }))) });

  LIBRARY({
    id: 'iss',
    title: 'La Stazione Spaziale Internazionale',
    intro: 'La <b>ISS</b> è una casa e un laboratorio grande come un campo da calcio, che gira intorno alla Terra a <b>400 km</b> d\'altezza. Fa un giro completo in 90 minuti e a bordo vivono sempre alcuni astronauti di tanti Paesi.',
    model: {
      rx: 0.42, ry: -0.62, speed: 0.3, height: 480, bg: 'orbit', fit: 1.05,
      parts: [
        { id: 'traliccio', name: 'Traliccio (la "spina dorsale")', label: 'Traliccio', color: '#cbd5e1', explode: [0, 1.6, 0],
          info: '<p>Una lunga trave di metallo, lunga più di 100 metri. Tiene insieme pannelli solari, radiatori, antenne e il braccio robotico: è la <b>spina dorsale</b> della stazione.</p>',
          more: '<p>Il traliccio è fatto di <b>11 segmenti</b> portati in orbita uno alla volta dallo Space Shuttle e montati dagli astronauti con le passeggiate spaziali. Dentro corrono cavi elettrici e tubi del raffreddamento.</p>',
          shapes: truss.concat([ { t: 'box', s: [0.4, 0.4, 0.3], pos: [0, 0.75, TZ], color: '#9ca3af' } ]) },
        { id: 'pannelli', name: 'Pannelli solari', color: '#b45309', explode: [0, 2.6, 0],
          info: '<p>Otto grandi "ali" dorate trasformano la luce del Sole in <b>elettricità</b>. Ruotano piano piano per restare sempre girate verso il Sole.</p>',
          more: '<p>Ogni ala è lunga 35 metri e contiene circa 33 000 celle solari. Insieme producono fino a <b>120 kW</b>: abbastanza per una quarantina di case. Una parte dell\'energia carica le <b>batterie</b>, che servono quando la stazione passa nell\'ombra della Terra (circa 35 minuti ogni giro).</p>',
          shapes: [ array(-5.0, 0), array(-6.85, 0), array(5.0, 0), array(6.85, 0) ] },
        { id: 'giunti', name: 'Giunti rotanti (SARJ)', label: 'Giunti rotanti', color: '#475569', explode: [0, 1.6, 0],
          info: '<p>Due grandi "cuscinetti" nel traliccio fanno girare le estremità con i pannelli, come girasoli che seguono il Sole.</p>',
          more: '<p>Ogni giunto è un anello di quasi 3 metri di diametro con ingranaggi e motori. Gira di 360° ogni giro della stazione, cioè ogni 90 minuti.</p>',
          shapes: [-3.6, 3.6].map((x) => ({ t: 'group', pos: [x, TY, TZ], shapes: [
            { t: 'cyl', r: 0.4, h: 0.32, n: 30, rot: [0, 0, 90] },
            { t: 'group', anim: { type: 'spin', axis: 'x', rate: 0.25 }, shapes: [ { t: 'torus', R: 0.4, r: 0.05, n: 30, m: 8, rot: [0, 0, 90], color: '#f59e0b' }, { t: 'box', s: [0.34, 0.08, 0.84], color: '#94a3b8' } ] }
          ] })) },
        { id: 'radiatori', name: 'Radiatori', color: '#f8fafc', explode: [0, -1.2, 0.6],
          info: '<p>Grandi pannelli bianchi che buttano nello spazio il <b>calore</b> prodotto da persone e macchine. Senza di loro la stazione diventerebbe un forno!</p>',
          more: '<p>Nei tubi della stazione circola <b>ammoniaca</b> che raccoglie il calore e lo porta ai radiatori. Lì il calore viene irraggiato nello spazio come luce infrarossa. Anche i radiatori ruotano, ma per stare di taglio rispetto al Sole.</p>',
          shapes: [ radiator(-2.4, 0), radiator(2.4, 0.5) ] },
        { id: 'zvezda', name: 'Zvezda (modulo di servizio russo)', label: 'Zvezda', color: '#d6d3d1', explode: [0, 0, -2.2],
          info: '<p>Il modulo russo "Stella": ha cuccette, cucina, bagno e i <b>motori</b> che ogni tanto rialzano la stazione, che altrimenti scenderebbe piano piano.</p>',
          more: '<p>A 400 km c\'è ancora un filo di aria che frena la stazione: perde circa 2 km di quota al mese. I motori di Zvezda e delle navette attraccate fanno le "ripartenze" (reboost).</p>',
          shapes: modZ(-7.4, -4.4, 0.6, '#d6d3d1').concat([
            { t: 'cyl', r: 0.72, h: 1.1, n: 30, rot: [90, 0, 0], pos: [0, 0, -6.75], color: '#d6d3d1' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0.3, 0, -7.45], color: '#57534e' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [-0.3, 0, -7.45], color: '#57534e' },
            { t: 'sphere', r: 0.55, n: 14, m: 24, pos: [0, 0, -4.2], color: '#e7e5e4' },
            { t: 'box', s: [3.2, 0.03, 0.9], pos: [-2.3, 0, -6.6], color: '#1e3a8a' }, { t: 'box', s: [3.2, 0.03, 0.9], pos: [2.3, 0, -6.6], color: '#1e3a8a' },
            { t: 'box', s: [3.2, 0.008, 0.012], pos: [-2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }, { t: 'box', s: [3.2, 0.008, 0.012], pos: [2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }
          ]) },
        { id: 'zarya', name: 'Zarya (il primo modulo)', label: 'Zarya', color: '#e7e5e4', explode: [0, -0.3, -1.4],
          info: '<p>"Alba" in russo: è stato il <b>primo pezzo</b> della stazione, lanciato nel 1998. Oggi fa da magazzino e contiene serbatoi di carburante.</p>',
          shapes: modZ(-3.95, -1.6, 0.62, '#e7e5e4').concat([ { t: 'tube', r: 0.3, ri: 0.22, h: 0.4, n: 20, pos: [0, -0.75, -3.0], color: '#9ca3af' } ]) },
        { id: 'nodi', name: 'Nodi Unity e Harmony', label: 'Nodi', color: '#f1f5f9', explode: [0, 0.4, 0],
          info: '<p>I <b>nodi</b> sono "incroci": moduli corti con tante porte su ogni lato, a cui si attaccano gli altri moduli e le navette.</p>',
          more: '<p>Ogni nodo ha 6 boccaporti (avanti, dietro, su, giù, destra, sinistra). Harmony e Tranquility sono stati costruiti <b>in Italia</b>, a Torino!</p>',
          shapes: modZ(-1.45, -0.35, 0.66, '#f1f5f9').concat(modZ(2.75, 4.1, 0.64, '#f1f5f9'), [ { t: 'tube', r: 0.34, ri: 0.26, h: 0.3, n: 20, pos: [0, -0.72, 3.4], color: '#9ca3af' } ]) },
        { id: 'destiny', name: 'Destiny (laboratorio USA)', label: 'Destiny', color: '#ece7dc', explode: [0, 0.5, 0.4],
          info: '<p>Il laboratorio americano: qui gli astronauti fanno esperimenti su piante, fiamme, liquidi e sul proprio corpo, per capire come cambiano le cose <b>senza peso</b>.</p>',
          more: '<p>In microgravità le fiamme diventano sfere azzurre, l\'acqua forma palline che galleggiano e le ossa perdono calcio: per questo gli astronauti fanno 2 ore di ginnastica al giorno.</p>',
          shapes: modZ(-0.3, 2.7, 0.64, '#ece7dc').concat([ { t: 'cyl', r: 0.2, h: 0.04, n: 20, rot: [0, 0, 0], pos: [0, -0.64, 1.4], color: '#1e293b' } ]) },
        { id: 'columbus', name: 'Columbus (laboratorio europeo)', label: 'Columbus', color: '#e2e8f0', explode: [1.6, 0, 0.6],
          info: '<p>Il laboratorio dell\'<b>Agenzia Spaziale Europea</b>. Anche lui è stato costruito in buona parte a Torino. Fuori ha delle piattaforme per esperimenti esposti al vuoto.</p>',
          shapes: modX(0.62, 2.4, 0.6, '#e2e8f0', 0, 3.42).concat([ { t: 'box', s: [0.5, 0.35, 0.35], pos: [2.0, 0.55, 3.42], color: '#94a3b8' } ]) },
        { id: 'kibo', name: 'Kibo (laboratorio giapponese)', label: 'Kibo', color: '#f5f5f4', explode: [-1.6, 0.3, 0.6],
          info: '<p>"Speranza" in giapponese: è il modulo più grande. Ha un piccolo braccio robotico tutto suo e un <b>terrazzino</b> esterno dove si espongono gli esperimenti allo spazio.</p>',
          shapes: modX(-3.1, -0.62, 0.7, '#f5f5f4', 0, 3.42).concat([
            { t: 'box', s: [1.4, 0.15, 1.3], pos: [-3.9, -0.2, 3.42], color: '#9ca3af' },
            { t: 'box', s: [0.35, 0.3, 0.35], pos: [-3.6, 0.03, 3.1], color: '#fbbf24' }, { t: 'box', s: [0.35, 0.3, 0.35], pos: [-4.2, 0.03, 3.7], color: '#60a5fa' },
            { t: 'cyl', r: 0.42, h: 0.9, n: 24, pos: [-1.9, 1.05, 3.42], color: '#f5f5f4' }, { t: 'torus', R: 0.42, r: 0.025, n: 24, m: 6, pos: [-1.9, 1.2, 3.42], color: '#a8a29e' }
          ]) },
        { id: 'cupola', name: 'Tranquility e Cupola', label: 'Cupola', color: '#e7e5e4', explode: [-1.4, -1.0, -0.2],
          info: '<p>La <b>Cupola</b> è la "finestra panoramica" della stazione: 7 finestre da cui gli astronauti guardano la Terra e fotografano tempeste, città e aurore.</p>',
          more: '<p>La finestra centrale è il vetro più grande mai mandato nello spazio (80 cm). I vetri sono 4 strati spessi e hanno coperchi esterni che si chiudono per proteggerli dai micrometeoriti.</p>',
          shapes: modX(-2.75, -0.66, 0.6, '#e7e5e4', 0, -0.9).concat([
            { t: 'cyl', r: 0.52, r2: 0.42, h: 0.32, n: 7, pos: [-1.7, -0.72, -0.9], color: '#d6d3d1' },
            { t: 'cyl', r: 0.36, h: 0.04, n: 7, pos: [-1.7, -0.9, -0.9], color: '#0ea5e9' },
            { t: 'cyl', r: 0.38, h: 0.05, n: 7, pos: [-1.7, -0.88, -0.9], color: '#9ca3af' }
          ]) },
        { id: 'braccio', name: 'Canadarm2 (braccio robotico)', label: 'Braccio robotico', color: '#f1f5f9', pos: [1.4, TY + 0.25, TZ], explode: [0.5, 1.6, 0.8],
          info: '<p>Un braccio robotico lungo 17 metri, costruito in <b>Canada</b>. Afferra le navette cargo, sposta pezzi pesanti e porta in giro gli astronauti durante le passeggiate spaziali.</p>',
          more: '<p>Ha 7 snodi, come un braccio umano (spalla, gomito, polso). Non ha un "davanti" e un "dietro": può staccarsi e riattaccarsi con l\'altra estremità, muovendosi sulla stazione come un <b>bruco</b>.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.18, 0.6], color: '#94a3b8' },
            { t: 'group', anim: { type: 'swing', axis: 'y', amp: 40, rate: 0.4 }, shapes: [
              { t: 'cyl', r: 0.12, h: 0.25, n: 16, pos: [0, 0.2, 0], color: '#64748b' },
              { t: 'pipe', r: 0.07, n: 12, pts: [[0, 0.3, 0], [0, 1.4, 1.5]] },
              { t: 'group', pos: [0, 1.4, 1.5], anim: { type: 'swing', axis: 'x', amp: 30, rate: 0.4, phase: 0.2 }, shapes: [
                { t: 'sphere', r: 0.13, n: 10, color: '#64748b' },
                { t: 'pipe', r: 0.065, n: 12, pts: [[0, 0, 0], [0, -0.6, 1.9]] },
                { t: 'cyl', r: 0.12, h: 0.3, n: 16, pos: [0, -0.68, 2.05], rot: [70, 0, 0], color: '#64748b' },
                { t: 'cyl', r: 0.09, h: 0.18, n: 16, pos: [0, -0.74, 2.3], rot: [70, 0, 0], color: '#1f2937' }
              ] } ] } ] },
        { id: 'dragon', name: 'Navetta Crew Dragon', label: 'Crew Dragon', color: '#f8fafc', explode: [0, 0, 1.4],
          anim: { type: 'move', dir: [0, 0, 1], amp: 2.2, wave: 'window', from: 0.05, to: 0.75, ramp: 0.45 },
          info: '<p>Una navetta che porta gli <b>astronauti</b> dalla Terra alla stazione e li riporta a casa. Si aggancia da sola, guidata dal computer.</p>',
          more: '<p>L\'aggancio (docking) avviene a pochi centimetri al secondo: stazione e navetta viaggiano a 28 000 km/h, ma una rispetto all\'altra sono quasi ferme, come due auto affiancate in autostrada.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: [-90, 0, 0], pos: [0, 0, 5.35], pts: [[0, 1.25], [0.2, 1.22], [0.32, 1.0], [0.6, 0.2], [0.64, 0.08], [0.6, 0], [0, 0]] },
            { t: 'cyl', r: 0.13, h: 0.14, n: 16, rot: [90, 0, 0], pos: [0, 0, 4.12], color: '#9ca3af' },
            { t: 'cyl', r: 0.6, h: 0.75, n: 30, rot: [90, 0, 0], pos: [0, 0, 5.75], color: '#e5e7eb' },
            { t: 'torus', R: 0.6, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], pos: [0, 0, 5.38], color: '#1f2937' },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [-0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'cyl', r: 0.08, h: 0.03, n: 12, rot: [-30, 0, 0], pos: [0, 0.4, 4.85], color: '#0f172a', decal: 1 } ] },
        { id: 'soyuz', name: 'Navetta Soyuz', label: 'Soyuz', color: '#a3a38a', explode: [0, -1.4, 0],
          info: '<p>La navetta russa: porta 3 astronauti. È fatta di tre pezzi: il modulo orbitale (la sfera), la capsula per il rientro e il modulo di servizio con i pannelli solari.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.3, n: 16, pos: [0, -0.8, -3.0], color: '#9ca3af' },
            { t: 'sphere', r: 0.42, n: 14, m: 24, pos: [0, -1.32, -3.0], scale: [1, 1.12, 1], color: '#a3a38a' },
            { t: 'lathe', n: 28, pos: [0, 0, -3.0], pts: [[0.24, -1.75], [0.5, -1.95], [0.58, -2.42], [0.3, -2.5], [0, -2.5]], color: '#78716c' },
            { t: 'cyl', r: 0.5, h: 0.85, n: 28, pos: [0, -2.95, -3.0], color: '#d6d3d1' },
            { t: 'cyl', r: 0.44, r2: 0.5, h: 0.12, n: 28, pos: [0, -3.43, -3.0], color: '#57534e' },
            { t: 'box', s: [3.0, 0.03, 0.55], pos: [0, -3.0, -3.0], color: '#1e3a8a' },
            { t: 'box', s: [3.0, 0.008, 0.012], pos: [0, -2.98, -3.0], color: '#93c5fd', decal: 1 } ] },
        { id: 'astronauta', name: 'Astronauta in passeggiata spaziale', label: 'Astronauta', color: '#f8fafc', pos: [-3.0, TY + 0.55, TZ + 0.55], explode: [-0.4, 1.4, 1.2],
          anim: { type: 'swing', axis: 'z', amp: 8, rate: 0.6 },
          info: '<p>Per riparare la stazione dall\'esterno gli astronauti indossano una <b>tuta spaziale</b>, che è una piccola astronave: dà aria, acqua, calore e protegge dai raggi del Sole.</p>',
          more: '<p>Una passeggiata spaziale dura circa <b>6–7 ore</b>. L\'astronauta è sempre legato alla stazione con dei cavi: se si staccasse, continuerebbe a galleggiare via!</p>',
          shapes: [ { t: 'sphere', r: 0.17, n: 12, m: 18, scale: [1, 1.35, 0.85] },
            { t: 'sphere', r: 0.12, n: 12, m: 18, pos: [0, 0.32, 0] }, { t: 'sphere', r: 0.095, n: 10, m: 16, pos: [0, 0.32, 0.04], scale: [1, 0.8, 1], color: '#d97706' },
            { t: 'box', s: [0.28, 0.32, 0.12], pos: [0, 0.05, -0.17], color: '#e5e7eb' },
            { t: 'pipe', r: 0.055, n: 10, curve: true, pts: [[0.15, 0.12, 0], [0.32, 0.0, 0.08], [0.38, -0.2, 0.15]] },
            { t: 'pipe', r: 0.055, n: 10, curve: true, pts: [[-0.15, 0.12, 0], [-0.3, 0.18, 0.12], [-0.4, 0.35, 0.18]] },
            { t: 'pipe', r: 0.065, n: 10, curve: true, pts: [[0.07, -0.18, 0], [0.1, -0.42, 0.05], [0.12, -0.62, 0]] },
            { t: 'pipe', r: 0.065, n: 10, curve: true, pts: [[-0.07, -0.18, 0], [-0.12, -0.4, -0.05], [-0.14, -0.6, 0.05]] },
            { t: 'pipe', r: 0.012, n: 6, curve: true, pts: [[0, -0.05, -0.2], [0.2, -0.3, -0.4], [0.3, -0.55, -0.35]], color: '#facc15' } ] }
      ]
    },
    steps: [
      { icon: '🛰️', title: 'Una casa nello spazio', explode: 0,
        html: '<p>La Stazione Spaziale è stata <b>montata in orbita</b> pezzo dopo pezzo, dal 1998, da 5 agenzie spaziali: USA, Russia, Europa (con l\'Italia!), Giappone e Canada. È l\'oggetto più grande mai costruito dall\'uomo nello spazio.</p><p class="tip">🔭 Di sera si può vedere a occhio nudo: sembra una stella molto luminosa che attraversa il cielo in pochi minuti, senza lampeggiare.</p>' },
      { icon: '☀️', title: 'L\'energia dal Sole', focus: ['pannelli', 'giunti', 'traliccio'], view: { rx: 0.3, ry: -0.35 },
        html: '<p>Nello spazio non ci sono prese elettriche: tutta l\'energia arriva dalla luce del Sole grazie alle <b>otto ali di pannelli solari</b>.</p><p>I <b>giunti rotanti</b> girano le ali per tenerle sempre di fronte al Sole, come fanno i girasoli.</p>' },
      { icon: '🏠', title: 'Le stanze: i moduli', focus: ['zvezda', 'zarya', 'nodi', 'destiny', 'columbus', 'kibo', 'cupola'], explode: 0.35, view: { rx: 0.55, ry: -0.5 },
        html: '<p>Gli astronauti vivono nei <b>moduli</b>: grossi cilindri pieni d\'aria, collegati tra loro come i vagoni di un treno. Ci sono i laboratori (<b>Destiny</b>, <b>Columbus</b>, <b>Kibo</b>), le cuccette, la palestra e il bagno.</p><p class="tip">🇮🇹 Circa metà dello spazio abitabile della ISS è stato costruito a <b>Torino</b>.</p>' },
      { icon: '🪟', title: 'La finestra sulla Terra', focus: ['cupola', 'nodi', 'astronauta'], view: { rx: -0.25, ry: -0.9 }, zoom: 1.3,
        html: '<p>Dalla <b>Cupola</b> si vede la Terra scorrere sotto i piedi. Ogni 90 minuti la stazione fa un giro completo: gli astronauti vedono <b>16 albe e 16 tramonti</b> al giorno!</p>' },
      { icon: '🌡️', title: 'Buttare via il calore', focus: ['radiatori', 'traliccio'], view: { rx: 0.2, ry: -0.2 },
        html: '<p>Persone, computer ed esperimenti producono calore. Nel vuoto il calore non se ne va con il vento: un liquido lo raccoglie e lo porta ai <b>radiatori</b> bianchi, che lo "irraggiano" nello spazio.</p><p class="tip">🌗 Al Sole l\'esterno della stazione arriva a +120 °C, all\'ombra a −150 °C.</p>' },
      { icon: '🦾', title: 'Il braccio robotico', focus: ['braccio', 'traliccio', 'astronauta'], view: { rx: 0.45, ry: -0.75 }, zoom: 1.25,
        html: '<p>Il <b>Canadarm2</b> afferra le navette cargo, sposta i pezzi e trasporta gli astronauti fuori dalla stazione durante le <b>passeggiate spaziali</b>.</p>' },
      { icon: '🚀', title: 'Arrivi e partenze', focus: ['dragon', 'soyuz', 'nodi', 'zarya'], view: { rx: 0.25, ry: -1.1 },
        html: '<p>Le navette portano astronauti, cibo, acqua, vestiti ed esperimenti. La <b>Crew Dragon</b> si avvicina piano piano e si aggancia da sola a un nodo. La <b>Soyuz</b> russa porta tre persone.</p>' },
      { icon: '🌍', title: 'Perché non cade?', explode: 0, view: { rx: 0.42, ry: -0.62 },
        html: '<p>In realtà la stazione <b>cade sempre</b> verso la Terra! Ma va così veloce di lato (<b>28 000 km/h</b>, 8 km ogni secondo) che, mentre cade, la Terra curva "sotto" di lei: così continua a girarci intorno.</p><p>Per questo a bordo tutto galleggia: astronauti e oggetti cadono insieme alla stazione.</p>' }
    ],
    facts: [
      { icon: '⚽', title: 'Grande come un campo da calcio', html: 'La ISS è lunga 109 metri e pesa circa <b>420 tonnellate</b>, come 300 automobili.' },
      { icon: '🚿', title: 'L\'acqua si ricicla', html: 'A bordo si ricicla quasi tutta l\'acqua, anche il sudore e la pipì: viene filtrata e torna potabile. "Il caffè di ieri diventa il caffè di domani"!' },
      { icon: '😴', title: 'Dormire in piedi', html: 'Gli astronauti dormono in sacchi a pelo legati alla parete: senza peso non c\'è "su" e "giù", quindi si può dormire in qualsiasi posizione.' },
      { icon: '📏', title: 'Più alti nello spazio', html: 'Senza peso la colonna vertebrale si allunga: gli astronauti diventano fino a <b>5 cm più alti</b>. Al ritorno sulla Terra tornano come prima.' },
      { icon: '🇮🇹', title: 'Astronauti italiani', html: 'Sulla ISS sono stati diversi italiani, come <b>Samantha Cristoforetti</b> (prima donna comandante europea della stazione) e <b>Luca Parmitano</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'A che altezza vola la Stazione Spaziale?', options: ['Circa 10 km', 'Circa 400 km', 'Circa 36 000 km', 'Circa 384 000 km'], answer: 1, explain: 'La ISS vola a circa 400 km: 10 km è la quota degli aerei, 384 000 km la distanza della Luna.' },
      { type: 'mc', q: 'Da dove arriva l\'energia elettrica della stazione?', options: ['Da un lungo cavo dalla Terra', 'Da un motore a benzina', 'Dai pannelli solari', 'Dai radiatori'], answer: 2, explain: 'Otto grandi ali di pannelli solari trasformano la luce del Sole in elettricità.' },
      { type: 'tf', q: 'A bordo gli oggetti galleggiano perché nello spazio non c\'è gravità.', answer: false, explain: 'La gravità c\'è (quasi come sulla Terra), ma stazione, astronauti e oggetti cadono tutti insieme intorno alla Terra: per questo galleggiano.' },
      { type: 'mc', q: 'A che cosa servono i radiatori bianchi?', options: ['A produrre elettricità', 'A buttare nello spazio il calore in eccesso', 'A comunicare con la Terra', 'A spingere la stazione'], answer: 1, explain: 'Un liquido raccoglie il calore e lo porta ai radiatori, che lo irraggiano nello spazio.' },
      { type: 'num', q: 'In quanti minuti la ISS fa un giro completo intorno alla Terra?', answer: 90, tol: 3, unit: 'min', explain: 'Circa 90 minuti: per questo gli astronauti vedono 16 albe al giorno.' },
      { type: 'mc', q: 'Come si chiama la "finestra panoramica" della stazione?', options: ['Cupola', 'Zarya', 'Canadarm2', 'Destiny'], answer: 0, explain: 'La Cupola ha 7 finestre ed è stata costruita in Italia.' }
    ]
  });
})();
