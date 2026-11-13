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
    lang: 'ro',
    title: 'Stația Spațială Internațională',
    intro: '<b>ISS</b> este o casă și un laborator cât un teren de fotbal, care se rotește în jurul Pământului la <b>400 km</b> înălțime. Face un tur complet în 90 de minute, iar la bord trăiesc mereu câțiva astronauți din multe țări.',
    model: {
      rx: 0.42, ry: -0.62, speed: 0.3, height: 480, bg: 'orbit', fit: 1.05,
      parts: [
        { id: 'traliccio', name: 'Ferma („coloana vertebrală”)', label: 'Ferma', color: '#cbd5e1', explode: [0, 1.6, 0],
          info: '<p>O grindă lungă de metal, de peste 100 de metri. Ține laolaltă panourile solare, radiatoarele, antenele și brațul robotic: este <b>coloana vertebrală</b> a stației.</p>',
          more: '<p>Ferma este făcută din <b>11 segmente</b> aduse pe orbită pe rând de naveta spațială Space Shuttle și montate de astronauți în timpul ieșirilor în spațiu. Înăuntru trec cabluri electrice și țevi de răcire.</p>',
          shapes: truss.concat([ { t: 'box', s: [0.4, 0.4, 0.3], pos: [0, 0.75, TZ], color: '#9ca3af' } ]) },
        { id: 'pannelli', name: 'Panouri solare', color: '#b45309', explode: [0, 2.6, 0],
          info: '<p>Opt „aripi” mari aurii transformă lumina Soarelui în <b>electricitate</b>. Se rotesc încet, ca să rămână mereu îndreptate spre Soare.</p>',
          more: '<p>Fiecare aripă are 35 de metri lungime și conține aproximativ 33 000 de celule solare. Împreună produc până la <b>120 kW</b>: destul pentru vreo patruzeci de case. O parte din energie încarcă <b>bateriile</b>, care sunt necesare atunci când stația trece prin umbra Pământului (cam 35 de minute la fiecare tur).</p>',
          shapes: [ array(-5.0, 0), array(-6.85, 0), array(5.0, 0), array(6.85, 0) ] },
        { id: 'giunti', name: 'Articulații rotative (SARJ)', label: 'Articulații rotative', color: '#475569', explode: [0, 1.6, 0],
          info: '<p>Două „rulmenți” mari din fermă rotesc capetele cu panourile, ca floarea-soarelui care urmărește Soarele.</p>',
          more: '<p>Fiecare articulație este un inel de aproape 3 metri în diametru, cu roți dințate și motoare. Se rotește cu 360° la fiecare tur al stației, adică la fiecare 90 de minute.</p>',
          shapes: [-3.6, 3.6].map((x) => ({ t: 'group', pos: [x, TY, TZ], shapes: [
            { t: 'cyl', r: 0.4, h: 0.32, n: 30, rot: [0, 0, 90] },
            { t: 'group', anim: { type: 'spin', axis: 'x', rate: 0.25 }, shapes: [ { t: 'torus', R: 0.4, r: 0.05, n: 30, m: 8, rot: [0, 0, 90], color: '#f59e0b' }, { t: 'box', s: [0.34, 0.08, 0.84], color: '#94a3b8' } ] }
          ] })) },
        { id: 'radiatori', name: 'Radiatoare', color: '#f8fafc', explode: [0, -1.2, 0.6],
          info: '<p>Panouri mari albe care aruncă în spațiu <b>căldura</b> produsă de oameni și de mașini. Fără ele, stația ar deveni un cuptor!</p>',
          more: '<p>În conductele stației circulă <b>amoniac</b>, care adună căldura și o duce la radiatoare. Acolo căldura este radiată în spațiu sub formă de lumină infraroșie. Și radiatoarele se rotesc, dar ca să stea cu muchia spre Soare.</p>',
          shapes: [ radiator(-2.4, 0), radiator(2.4, 0.5) ] },
        { id: 'zvezda', name: 'Zvezda (modulul de serviciu rusesc)', label: 'Zvezda', color: '#d6d3d1', explode: [0, 0, -2.2],
          info: '<p>Modulul rusesc „Steaua”: are cușete, bucătărie, baie și <b>motoarele</b> care din când în când ridică stația, care altfel ar coborî încet.</p>',
          more: '<p>La 400 km mai există puțin aer care frânează stația: ea pierde aproximativ 2 km de altitudine pe lună. Motoarele lui Zvezda și ale navetelor cuplate fac „repornirile” (reboost).</p>',
          shapes: modZ(-7.4, -4.4, 0.6, '#d6d3d1').concat([
            { t: 'cyl', r: 0.72, h: 1.1, n: 30, rot: [90, 0, 0], pos: [0, 0, -6.75], color: '#d6d3d1' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [0.3, 0, -7.45], color: '#57534e' },
            { t: 'cone', r: 0.2, h: 0.3, n: 16, rot: [90, 0, 0], pos: [-0.3, 0, -7.45], color: '#57534e' },
            { t: 'sphere', r: 0.55, n: 14, m: 24, pos: [0, 0, -4.2], color: '#e7e5e4' },
            { t: 'box', s: [3.2, 0.03, 0.9], pos: [-2.3, 0, -6.6], color: '#1e3a8a' }, { t: 'box', s: [3.2, 0.03, 0.9], pos: [2.3, 0, -6.6], color: '#1e3a8a' },
            { t: 'box', s: [3.2, 0.008, 0.012], pos: [-2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }, { t: 'box', s: [3.2, 0.008, 0.012], pos: [2.3, 0.02, -6.6], color: '#93c5fd', decal: 1 }
          ]) },
        { id: 'zarya', name: 'Zarya (primul modul)', label: 'Zarya', color: '#e7e5e4', explode: [0, -0.3, -1.4],
          info: '<p>„Zorii” în rusă: a fost <b>prima piesă</b> a stației, lansată în 1998. Astăzi servește drept depozit și conține rezervoare de combustibil.</p>',
          shapes: modZ(-3.95, -1.6, 0.62, '#e7e5e4').concat([ { t: 'tube', r: 0.3, ri: 0.22, h: 0.4, n: 20, pos: [0, -0.75, -3.0], color: '#9ca3af' } ]) },
        { id: 'nodi', name: 'Nodurile Unity și Harmony', label: 'Noduri', color: '#f1f5f9', explode: [0, 0.4, 0],
          info: '<p><b>Nodurile</b> sunt „intersecții”: module scurte cu multe uși pe fiecare parte, de care se prind celelalte module și navetele.</p>',
          more: '<p>Fiecare nod are 6 trape (în față, în spate, sus, jos, dreapta, stânga). Harmony și Tranquility au fost construite <b>în Italia</b>, la Torino!</p>',
          shapes: modZ(-1.45, -0.35, 0.66, '#f1f5f9').concat(modZ(2.75, 4.1, 0.64, '#f1f5f9'), [ { t: 'tube', r: 0.34, ri: 0.26, h: 0.3, n: 20, pos: [0, -0.72, 3.4], color: '#9ca3af' } ]) },
        { id: 'destiny', name: 'Destiny (laboratorul american)', label: 'Destiny', color: '#ece7dc', explode: [0, 0.5, 0.4],
          info: '<p>Laboratorul american: aici astronauții fac experimente cu plante, flăcări, lichide și chiar cu propriul corp, ca să înțeleagă cum se schimbă lucrurile <b>fără greutate</b>.</p>',
          more: '<p>În microgravitație flăcările devin sfere albastre, apa formează bile care plutesc, iar oasele pierd calciu: de aceea astronauții fac 2 ore de gimnastică pe zi.</p>',
          shapes: modZ(-0.3, 2.7, 0.64, '#ece7dc').concat([ { t: 'cyl', r: 0.2, h: 0.04, n: 20, rot: [0, 0, 0], pos: [0, -0.64, 1.4], color: '#1e293b' } ]) },
        { id: 'columbus', name: 'Columbus (laboratorul european)', label: 'Columbus', color: '#e2e8f0', explode: [1.6, 0, 0.6],
          info: '<p>Laboratorul <b>Agenției Spațiale Europene</b>. Și el a fost construit în mare parte la Torino. Pe dinafară are platforme pentru experimente expuse în vid.</p>',
          shapes: modX(0.62, 2.4, 0.6, '#e2e8f0', 0, 3.42).concat([ { t: 'box', s: [0.5, 0.35, 0.35], pos: [2.0, 0.55, 3.42], color: '#94a3b8' } ]) },
        { id: 'kibo', name: 'Kibo (laboratorul japonez)', label: 'Kibo', color: '#f5f5f4', explode: [-1.6, 0.3, 0.6],
          info: '<p>„Speranță” în japoneză: este cel mai mare modul. Are un mic braț robotic al lui și o <b>terasă</b> exterioară unde experimentele sunt expuse spațiului.</p>',
          shapes: modX(-3.1, -0.62, 0.7, '#f5f5f4', 0, 3.42).concat([
            { t: 'box', s: [1.4, 0.15, 1.3], pos: [-3.9, -0.2, 3.42], color: '#9ca3af' },
            { t: 'box', s: [0.35, 0.3, 0.35], pos: [-3.6, 0.03, 3.1], color: '#fbbf24' }, { t: 'box', s: [0.35, 0.3, 0.35], pos: [-4.2, 0.03, 3.7], color: '#60a5fa' },
            { t: 'cyl', r: 0.42, h: 0.9, n: 24, pos: [-1.9, 1.05, 3.42], color: '#f5f5f4' }, { t: 'torus', R: 0.42, r: 0.025, n: 24, m: 6, pos: [-1.9, 1.2, 3.42], color: '#a8a29e' }
          ]) },
        { id: 'cupola', name: 'Tranquility și Cupola', label: 'Cupola', color: '#e7e5e4', explode: [-1.4, -1.0, -0.2],
          info: '<p><b>Cupola</b> este „fereastra panoramică” a stației: 7 ferestre prin care astronauții privesc Pământul și fotografiază furtuni, orașe și aurore.</p>',
          more: '<p>Fereastra din mijloc este cel mai mare geam trimis vreodată în spațiu (80 cm). Geamurile au 4 straturi groase și au capace exterioare care se închid ca să le protejeze de micrometeoriți.</p>',
          shapes: modX(-2.75, -0.66, 0.6, '#e7e5e4', 0, -0.9).concat([
            { t: 'cyl', r: 0.52, r2: 0.42, h: 0.32, n: 7, pos: [-1.7, -0.72, -0.9], color: '#d6d3d1' },
            { t: 'cyl', r: 0.36, h: 0.04, n: 7, pos: [-1.7, -0.9, -0.9], color: '#0ea5e9' },
            { t: 'cyl', r: 0.38, h: 0.05, n: 7, pos: [-1.7, -0.88, -0.9], color: '#9ca3af' }
          ]) },
        { id: 'braccio', name: 'Canadarm2 (brațul robotic)', label: 'Braț robotic', color: '#f1f5f9', pos: [1.4, TY + 0.25, TZ], explode: [0.5, 1.6, 0.8],
          info: '<p>Un braț robotic lung de 17 metri, construit în <b>Canada</b>. Prinde navetele de marfă, mută piese grele și plimbă astronauții în timpul ieșirilor în spațiu.</p>',
          more: '<p>Are 7 articulații, ca un braț omenesc (umăr, cot, încheietura mâinii). Nu are „față” și „spate”: se poate desprinde și reface legătura cu celălalt capăt, mișcându-se pe stație ca o <b>omidă</b>.</p>',
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
        { id: 'dragon', name: 'Naveta Crew Dragon', label: 'Crew Dragon', color: '#f8fafc', explode: [0, 0, 1.4],
          anim: { type: 'move', dir: [0, 0, 1], amp: 2.2, wave: 'window', from: 0.05, to: 0.75, ramp: 0.45 },
          info: '<p>O navetă care duce <b>astronauții</b> de pe Pământ la stație și îi aduce înapoi acasă. Se cuplează singură, condusă de calculator.</p>',
          more: '<p>Cuplarea (docking) se face cu câțiva centimetri pe secundă: stația și naveta călătoresc cu 28 000 km/h, dar una față de cealaltă sunt aproape nemișcate, ca două mașini care merg una lângă alta pe autostradă.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: [-90, 0, 0], pos: [0, 0, 5.35], pts: [[0, 1.25], [0.2, 1.22], [0.32, 1.0], [0.6, 0.2], [0.64, 0.08], [0.6, 0], [0, 0]] },
            { t: 'cyl', r: 0.13, h: 0.14, n: 16, rot: [90, 0, 0], pos: [0, 0, 4.12], color: '#9ca3af' },
            { t: 'cyl', r: 0.6, h: 0.75, n: 30, rot: [90, 0, 0], pos: [0, 0, 5.75], color: '#e5e7eb' },
            { t: 'torus', R: 0.6, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], pos: [0, 0, 5.38], color: '#1f2937' },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'box', s: [0.02, 0.45, 0.55], pos: [-0.6, 0, 5.75], color: '#1e3a8a', decal: 1 },
            { t: 'cyl', r: 0.08, h: 0.03, n: 12, rot: [-30, 0, 0], pos: [0, 0.4, 4.85], color: '#0f172a', decal: 1 } ] },
        { id: 'soyuz', name: 'Naveta Soyuz', label: 'Soyuz', color: '#a3a38a', explode: [0, -1.4, 0],
          info: '<p>Naveta rusească: duce 3 astronauți. Este făcută din trei piese: modulul orbital (sfera), capsula pentru reintrare și modulul de serviciu cu panourile solare.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.3, n: 16, pos: [0, -0.8, -3.0], color: '#9ca3af' },
            { t: 'sphere', r: 0.42, n: 14, m: 24, pos: [0, -1.32, -3.0], scale: [1, 1.12, 1], color: '#a3a38a' },
            { t: 'lathe', n: 28, pos: [0, 0, -3.0], pts: [[0.24, -1.75], [0.5, -1.95], [0.58, -2.42], [0.3, -2.5], [0, -2.5]], color: '#78716c' },
            { t: 'cyl', r: 0.5, h: 0.85, n: 28, pos: [0, -2.95, -3.0], color: '#d6d3d1' },
            { t: 'cyl', r: 0.44, r2: 0.5, h: 0.12, n: 28, pos: [0, -3.43, -3.0], color: '#57534e' },
            { t: 'box', s: [3.0, 0.03, 0.55], pos: [0, -3.0, -3.0], color: '#1e3a8a' },
            { t: 'box', s: [3.0, 0.008, 0.012], pos: [0, -2.98, -3.0], color: '#93c5fd', decal: 1 } ] },
        { id: 'astronauta', name: 'Astronaut în ieșire în spațiu', label: 'Astronaut', color: '#f8fafc', pos: [-3.0, TY + 0.55, TZ + 0.55], explode: [-0.4, 1.4, 1.2],
          anim: { type: 'swing', axis: 'z', amp: 8, rate: 0.6 },
          info: '<p>Ca să repare stația din exterior, astronauții poartă un <b>costum spațial</b>, care este o mică navă spațială: oferă aer, apă, căldură și protejează de razele Soarelui.</p>',
          more: '<p>O ieșire în spațiu durează aproximativ <b>6–7 ore</b>. Astronautul este mereu legat de stație cu cabluri: dacă s-ar desprinde, ar pluti mai departe!</p>',
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
      { icon: '🛰️', title: 'O casă în spațiu', explode: 0,
        html: '<p>Stația Spațială a fost <b>asamblată pe orbită</b> bucată cu bucată, din 1998, de 5 agenții spațiale: SUA, Rusia, Europa (cu Italia!), Japonia și Canada. Este cel mai mare obiect construit vreodată de om în spațiu.</p><p class="tip">🔭 Seara poate fi văzută cu ochiul liber: pare o stea foarte luminoasă care traversează cerul în câteva minute, fără să clipească.</p>' },
      { icon: '☀️', title: 'Energia de la Soare', focus: ['pannelli', 'giunti', 'traliccio'], view: { rx: 0.3, ry: -0.35 },
        html: '<p>În spațiu nu există prize electrice: toată energia vine din lumina Soarelui, datorită celor <b>opt aripi de panouri solare</b>.</p><p><b>Articulațiile rotative</b> întorc aripile ca să stea mereu cu fața spre Soare, așa cum fac florile-soarelui.</p>' },
      { icon: '🏠', title: 'Camerele: modulele', focus: ['zvezda', 'zarya', 'nodi', 'destiny', 'columbus', 'kibo', 'cupola'], explode: 0.35, view: { rx: 0.55, ry: -0.5 },
        html: '<p>Astronauții trăiesc în <b>module</b>: cilindri mari plini cu aer, legați între ei ca vagoanele unui tren. Sunt laboratoarele (<b>Destiny</b>, <b>Columbus</b>, <b>Kibo</b>), cușetele, sala de sport și baia.</p><p class="tip">🇮🇹 Aproximativ jumătate din spațiul locuibil al ISS a fost construit la <b>Torino</b>.</p>' },
      { icon: '🪟', title: 'Fereastra spre Pământ', focus: ['cupola', 'nodi', 'astronauta'], view: { rx: -0.25, ry: -0.9 }, zoom: 1.3,
        html: '<p>Din <b>Cupola</b> se vede Pământul curgând sub picioare. La fiecare 90 de minute stația face un tur complet: astronauții văd <b>16 răsărituri și 16 apusuri</b> pe zi!</p>' },
      { icon: '🌡️', title: 'Aruncarea căldurii', focus: ['radiatori', 'traliccio'], view: { rx: 0.2, ry: -0.2 },
        html: '<p>Oamenii, calculatoarele și experimentele produc căldură. În vid căldura nu se duce cu vântul: un lichid o adună și o duce la <b>radiatoarele</b> albe, care o „radiază” în spațiu.</p><p class="tip">🌗 La Soare, exteriorul stației ajunge la +120 °C, în umbră la −150 °C.</p>' },
      { icon: '🦾', title: 'Brațul robotic', focus: ['braccio', 'traliccio', 'astronauta'], view: { rx: 0.45, ry: -0.75 }, zoom: 1.25,
        html: '<p><b>Canadarm2</b> prinde navetele de marfă, mută piesele și transportă astronauții în afara stației în timpul <b>ieșirilor în spațiu</b>.</p>' },
      { icon: '🚀', title: 'Sosiri și plecări', focus: ['dragon', 'soyuz', 'nodi', 'zarya'], view: { rx: 0.25, ry: -1.1 },
        html: '<p>Navetele aduc astronauți, mâncare, apă, haine și experimente. <b>Crew Dragon</b> se apropie încet și se cuplează singură la un nod. <b>Soyuz</b> rusească duce trei persoane.</p>' },
      { icon: '🌍', title: 'De ce nu cade?', explode: 0, view: { rx: 0.42, ry: -0.62 },
        html: '<p>De fapt stația <b>cade mereu</b> spre Pământ! Dar merge atât de repede în lateral (<b>28 000 km/h</b>, 8 km pe secundă) încât, în timp ce cade, Pământul se curbează „dedesubtul” ei: așa că ea continuă să se rotească în jurul lui.</p><p>De aceea la bord totul plutește: astronauții și obiectele cad împreună cu stația.</p>' }
    ],
    facts: [
      { icon: '⚽', title: 'Cât un teren de fotbal', html: 'ISS are 109 metri lungime și cântărește aproximativ <b>420 de tone</b>, cât 300 de automobile.' },
      { icon: '🚿', title: 'Apa se reciclează', html: 'La bord aproape toată apa se reciclează, chiar și transpirația și pipi: este filtrată și redevine potabilă. „Cafeaua de ieri devine cafeaua de mâine”!' },
      { icon: '😴', title: 'Somn în picioare', html: 'Astronauții dorm în saci de dormit legați de perete: fără greutate nu există „sus” și „jos”, deci se poate dormi în orice poziție.' },
      { icon: '📏', title: 'Mai înalți în spațiu', html: 'Fără greutate coloana vertebrală se alungește: astronauții devin cu până la <b>5 cm mai înalți</b>. La întoarcerea pe Pământ revin cum erau.' },
      { icon: '🇮🇹', title: 'Astronauți italieni', html: 'Pe ISS au fost mai mulți italieni, cum ar fi <b>Samantha Cristoforetti</b> (prima femeie comandant european al stației) și <b>Luca Parmitano</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'La ce înălțime zboară Stația Spațială?', options: ['Aproximativ 10 km', 'Aproximativ 400 km', 'Aproximativ 36 000 km', 'Aproximativ 384 000 km'], answer: 1, explain: 'ISS zboară la aproximativ 400 km: 10 km este altitudinea avioanelor, 384 000 km distanța până la Lună.' },
      { type: 'mc', q: 'De unde vine energia electrică a stației?', options: ['De la un cablu lung de pe Pământ', 'De la un motor pe benzină', 'De la panourile solare', 'De la radiatoare'], answer: 2, explain: 'Opt aripi mari de panouri solare transformă lumina Soarelui în electricitate.' },
      { type: 'tf', q: 'La bord obiectele plutesc pentru că în spațiu nu există gravitație.', answer: false, explain: 'Gravitația există (aproape ca pe Pământ), dar stația, astronauții și obiectele cad toate împreună în jurul Pământului: de aceea plutesc.' },
      { type: 'mc', q: 'La ce servesc radiatoarele albe?', options: ['Să producă electricitate', 'Să arunce în spațiu căldura în exces', 'Să comunice cu Pământul', 'Să împingă stația'], answer: 1, explain: 'Un lichid adună căldura și o duce la radiatoare, care o radiază în spațiu.' },
      { type: 'num', q: 'În câte minute face ISS un tur complet în jurul Pământului?', answer: 90, tol: 3, unit: 'min', explain: 'Aproximativ 90 de minute: de aceea astronauții văd 16 răsărituri pe zi.' },
      { type: 'mc', q: 'Cum se numește „fereastra panoramică” a stației?', options: ['Cupola', 'Zarya', 'Canadarm2', 'Destiny'], answer: 0, explain: 'Cupola are 7 ferestre și a fost construită în Italia.' }
    ]
  });
})();
