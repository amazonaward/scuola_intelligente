/* Il vulcano (strato-vulcano) tagliato a metà. La metà anteriore ("fianco") si sposta con Esplodi o diventa trasparente nei passi;
   sul piano del taglio (z = Z0) si vedono strati, camera magmatica e camino. */
(function () {
  const Z0 = 0.34, H = 3.0, RB = 4.2, RIM = 0.6;
  const rad = (y) => RIM + (RB - RIM) * Math.pow(1 - y / H, 1.6);
  const PROF = [[0, 0]].concat([0, 0.3, 0.7, 1.1, 1.5, 1.9, 2.3, 2.6, 2.85, 3.0].map((y) => [rad(y), y]), [[RIM * 0.7, H - 0.12], [0.18, H - 0.38], [0, H - 0.4]]);
  /* "mezzo tornio": fette estruse ruotate intorno a y, da a0 a a1 gradi (0→180 = metà dietro, 180→360 = metà davanti) */
  const halfLathe = (prof, a0, a1, N, color) => {
    const th = (a1 - a0) / N, d = 2 * RB * Math.tan((th * Math.PI / 180) / 2) * 1.12, s = [];
    for (let k = 0; k <= N; k++) s.push({ t: 'extrude', pts: prof, d, rot: [0, a0 + k * th, 0], color, smooth: true });
    return s;
  };
  /* strati del terreno (box impilati) tra z = za e z = zb */
  const LAYERS = [ [0, -0.18, '#4d7c0f'], [-0.18, -0.7, '#a16207'], [-0.7, -1.2, '#78716c'], [-1.2, -1.75, '#57534e'], [-1.75, -2.4, '#44403c'] ];
  const ground = (za, zb) => LAYERS.map(([y0, y1, c]) => ({ t: 'box', s: [10, y0 - y1, zb - za], pos: [0, (y0 + y1) / 2, (za + zb) / 2], color: c }));
  /* bande di strati sul taglio del cono: poligoni tra due quote */
  const band = (y0, y1, color) => {
    const ys = []; for (let i = 0; i <= 6; i++) ys.push(y0 + (y1 - y0) * i / 6);
    const right = ys.map((y) => [rad(y), y]), left = ys.slice().reverse().map((y) => [-rad(y), y]);
    return { t: 'extrude', pts: right.concat(left), d: 0.04, pos: [0, 0, Z0], color };
  };
  const BANDS = [];
  const bc = ['#6b5b53', '#a8a29e', '#57534e', '#9ca3af', '#7c6f64', '#b8b2a7', '#5b524b'];
  [0, 0.35, 0.75, 1.15, 1.55, 1.95, 2.35].forEach((y, i, a) => BANDS.push(band(y, Math.min(a[i + 1] || 2.62, 2.62), bc[i])));
  /* colate di lava sul fianco anteriore */
  const flow = (ang, wig, len) => {
    const pts = []; for (let i = 0; i <= 10; i++) { const y = H - 0.05 - i * (H - 0.1) * len / 10; const a = (ang + Math.sin(i * 0.9) * wig) * Math.PI / 180; const r = rad(y) + 0.06; pts.push([r * Math.cos(a), y + 0.02, -r * Math.sin(a)]); }
    return pts;
  };
  const lavaFlow = (ang, wig, len, w) => ({ t: 'pipe', r: w, n: 10, curve: true, pts: flow(ang, wig, len), color: '#ea580c', anim: { type: 'blink', color: '#fde047', amount: 0.55, rate: 1.4 } });
  /* lapilli della fontana di lava */
  const bombs = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 2.4, r = 0.6 + (i % 4) * 0.25, dx = Math.cos(a) * r, dz = Math.sin(a) * r;
    const pts = [[0, H - 0.3, Z0], [dx * 0.25, H + 0.6, Z0 + dz * 0.25], [dx * 0.55, H + 1.0 + (i % 3) * 0.15, Z0 + dz * 0.55], [dx * 0.85, H + 0.7, Z0 + dz * 0.85], [dx * 1.1, H - 0.1, Z0 + dz * 1.1]];
    bombs.push({ t: 'sphere', r: 0.06 + (i % 3) * 0.015, n: 6, m: 8, pos: pts[0], color: i % 2 ? '#f97316' : '#fde047', anim: [ { type: 'path', pts, wave: 'saw', rate: 1.1, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 1.1, phase: i / 14 } ] });
  }
  const ash = [];
  for (let i = 0; i < 10; i++) {
    const a = i * 2.1, s = 0.35 + (i % 3) * 0.15;
    ash.push({ t: 'sphere', r: s, n: 10, m: 14, pos: [0, H + 0.3, Z0], color: i % 2 ? '#78716c' : '#a8a29e',
      anim: [ { type: 'path', pts: [[0, H + 0.3, Z0], [Math.cos(a) * 0.4, H + 1.6, Z0 + Math.sin(a) * 0.3], [Math.cos(a) * 0.9 + 0.6, H + 3.0, Z0 + Math.sin(a) * 0.6]], wave: 'saw', rate: 0.35, phase: i / 10 },
        { type: 'scale', from: 0.4, to: 1.5, wave: 'saw', rate: 0.35, phase: i / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.35, phase: i / 10 } ] });
  }
  const magmaUp = [];
  for (let i = 0; i < 10; i++) magmaUp.push({ t: 'sphere', r: 0.09, n: 6, m: 8, pos: [0, -1.1, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, -1.1, Z0 + 0.05], [0, 0.5, Z0 + 0.05], [0, H - 0.4, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 10 } });
  for (let i = 0; i < 4; i++) magmaUp.push({ t: 'sphere', r: 0.07, n: 6, m: 8, pos: [0, 0.95, Z0 + 0.05], color: '#fde047',
    anim: { type: 'path', pts: [[0, 0.95, Z0 + 0.05], [1.1, 1.0, Z0 + 0.05], [rad(1.25) - 0.1, 1.25, Z0 + 0.05]], wave: 'saw', rate: 0.5, phase: i / 4 } });

  LIBRARY({
    id: 'vulcano',
    title: 'Il vulcano',
    intro: 'Un vulcano è un\'apertura della crosta terrestre da cui esce il <b>magma</b>, roccia fusa che arriva dal profondo. L\'Italia ne ha di famosissimi: l\'<b>Etna</b>, il <b>Vesuvio</b>, lo <b>Stromboli</b>. Tagliamolo a metà e guardiamo dentro!',
    model: {
      rx: 0.32, ry: -0.42, speed: 0.4, height: 480, fit: 1.0,
      parts: [
        { id: 'fianco', name: 'Fianco del vulcano', label: 'Fianco', color: '#6b5b53', explode: [7.5, -0.8, 2.5],
          info: '<p>La metà del vulcano che vediamo da fuori: un <b>cono</b> di roccia formato da tante eruzioni. Sui fianchi bassi cresce la vegetazione: la cenere vulcanica rende la terra fertilissima.</p>',
          more: '<p>Sulle pendici dell\'Etna e del Vesuvio si coltivano vigne, agrumi e pistacchi proprio grazie ai terreni vulcanici, ricchi di minerali.</p>',
          shapes: halfLathe(PROF, 180, 360, 22, '#6b5b53').concat(ground(Z0, 3.4)) },
        { id: 'cono', name: 'Cono vulcanico', label: 'Cono', color: '#5b524b', explode: [0, 0, -0.6],
          info: '<p>È la montagna vera e propria. Ogni eruzione aggiunge uno strato di lava o di cenere: così il vulcano <b>cresce</b> nel tempo, anche di molti metri in pochi anni.</p>',
          shapes: halfLathe(PROF, 0, 180, 22, '#5b524b') },
        { id: 'strati', name: 'Strati di lava e cenere', label: 'Strati', color: '#a8a29e', explode: [0, 0, 0.05],
          info: '<p>Tagliando il cono si vedono <b>strati</b> alternati: lava solidificata (scura) e cenere e lapilli (più chiari). Per questo questi vulcani si chiamano <b>strato-vulcani</b>.</p>',
          more: '<p>Esistono anche i <b>vulcani a scudo</b>, come quelli delle Hawaii: larghi e bassi, fatti solo di colate di lava molto fluida.</p>',
          shapes: BANDS },
        { id: 'crosta', name: 'Crosta terrestre', label: 'Crosta', color: '#57534e', explode: [0, -0.4, -0.6],
          info: '<p>Sotto i nostri piedi ci sono strati di terra e di <b>roccia</b>: è la crosta terrestre, la "buccia" del pianeta. In alcuni punti è rotta o sottile e il magma riesce a risalire.</p>',
          shapes: ground(-3.0, Z0) },
        { id: 'camera', name: 'Camera magmatica', label: 'Camera magmatica', color: '#dc2626', explode: [0, -0.5, 0.6],
          info: '<p>Una grande "sacca" di <b>magma</b> a qualche chilometro di profondità. Il magma è roccia fusa a più di <b>1000 °C</b>, piena di gas disciolti, come le bollicine in una bibita.</p>',
          more: '<p>Il magma è più leggero delle rocce intorno e tende a salire. Quando nella camera la <b>pressione</b> dei gas diventa troppo alta, il magma si fa strada verso la superficie: inizia l\'eruzione.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 16, m: 28, pos: [0, -1.4, Z0], scale: [1.5, 0.55, 0.9], anim: { type: 'blink', color: '#f97316', amount: 0.5, rate: 0.8 } },
            { t: 'pipe', r: 0.2, n: 12, curve: true, pts: [[0.4, -2.45, Z0], [0.45, -2.1, Z0], [0.2, -1.8, Z0]], color: '#b91c1c' } ] },
        { id: 'camino', name: 'Camino vulcanico', label: 'Camino', color: '#ea580c', explode: [0, 0.2, 0.6],
          info: '<p>Il "tubo" naturale da cui il magma sale dalla camera fino al cratere.</p>',
          shapes: [ { t: 'pipe', r: 0.17, n: 14, curve: true, pts: [[0, -0.9, Z0], [0.05, 0.3, Z0], [-0.03, 1.6, Z0], [0, H - 0.38, Z0]] } ] },
        { id: 'magma', name: 'Magma che sale', label: 'Magma', color: '#fde047', explode: [0, 0.2, 0.7], chip: true,
          info: '<p>Spinto dai gas, il magma risale il camino. Quando esce in superficie perde i gas e da quel momento si chiama <b>lava</b>.</p>',
          shapes: magmaUp },
        { id: 'condotto', name: 'Condotto laterale e cono secondario', label: 'Bocca laterale', color: '#c2410c', explode: [0.5, 0.1, 0.5],
          info: '<p>A volte il magma trova una via di lato e apre una <b>bocca laterale</b> sul fianco del vulcano: lì nasce un piccolo cono secondario.</p>',
          more: '<p>L\'Etna ha più di <b>300 coni secondari</b> (avventizi) sui suoi fianchi, nati da eruzioni laterali nel corso dei secoli.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: [[0, 0.95, Z0], [0.7, 0.95, Z0], [rad(1.25) - 0.05, 1.25, Z0]] },
            { t: 'lathe', n: 20, pos: [rad(1.25) + 0.05, 1.12, Z0 - 0.1], pts: [[0.42, 0], [0.3, 0.12], [0.12, 0.25], [0.06, 0.22], [0, 0.2]], color: '#44403c' } ] },
        { id: 'cratere', name: 'Cratere', color: '#292524', explode: [0, 0.5, 0],
          info: '<p>L\'apertura in cima al vulcano, a forma di conca. Dentro può esserci un <b>lago di lava</b> che ribolle.</p>',
          shapes: [ { t: 'torus', R: RIM, r: 0.07, n: 30, m: 8, pos: [0, H, 0], color: '#3f3f46' },
            { t: 'cyl', r: 0.45, h: 0.04, n: 24, pos: [0, H - 0.3, 0], color: '#f97316', anim: { type: 'blink', color: '#fde047', amount: 0.8, rate: 2 } } ] },
        { id: 'fontana', name: 'Fontana di lava e lapilli', label: 'Lapilli', color: '#f97316', explode: [0, 0.6, 0],
          info: '<p>Durante un\'eruzione esplosiva il vulcano lancia in aria brandelli di lava che si raffreddano in volo: piccoli sono i <b>lapilli</b>, grandi come un pallone le <b>bombe vulcaniche</b>.</p>',
          shapes: bombs },
        { id: 'nube', name: 'Nube di cenere e gas', label: 'Nube di cenere', color: '#78716c', explode: [0, 1.0, 0],
          info: '<p>Il vulcano emette vapore acqueo, gas e <b>cenere</b>: minuscoli frammenti di roccia. La nube può salire per chilometri e il vento la porta lontano.</p>',
          more: '<p>Nel 2010 la nube del vulcano islandese Eyjafjallajökull bloccò per giorni i voli di mezza Europa: la cenere può danneggiare i motori degli aerei.</p>',
          shapes: ash },
        { id: 'colate', name: 'Colate di lava', label: 'Colate di lava', color: '#ea580c', explode: [7.5, -0.8, 2.5],
          info: '<p>La lava scende lungo i fianchi come un fiume rosso. Raffreddandosi diventa scura e dura: è <b>roccia nuova</b> (basalto).</p>',
          more: '<p>Le colate dell\'Etna avanzano di solito lentamente, pochi metri all\'ora: c\'è tempo per allontanarsi. Più pericolose sono le <b>nubi ardenti</b> (flussi piroclastici), come quella che nel 79 d.C. seppellì Pompei.</p>',
          shapes: [ lavaFlow(240, 6, 0.75, 0.1), lavaFlow(290, 9, 0.95, 0.12), lavaFlow(320, 5, 0.6, 0.08) ] }
      ]
    },
    steps: [
      { icon: '🌋', title: 'Una montagna di fuoco', explode: 0,
        html: '<p>Da fuori un vulcano sembra una montagna a forma di <b>cono</b>, con una conca in cima: il <b>cratere</b>. Ma la sua storia comincia molto più in basso, sotto terra.</p>' },
      { icon: '🔪', title: 'Tagliamolo a metà', explode: 1,
        html: '<p>Togliamo la metà davanti. Ora vediamo l\'interno: sotto il vulcano c\'è la <b>camera magmatica</b>, collegata al cratere da un lungo tubo, il <b>camino</b>.</p>' },
      { icon: '🔥', title: 'La camera magmatica', explode: 1, focus: ['camera', 'crosta', 'magma', 'cono', 'strati'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.3,
        html: '<p>A qualche chilometro di profondità si raccoglie il <b>magma</b>: roccia fusa a più di 1000 °C, piena di gas. Essendo più leggero delle rocce intorno, il magma tende a <b>salire</b>.</p><p class="tip">🥤 Il gas nel magma è come l\'anidride carbonica in una bottiglia di bibita: se apri di colpo… schizza fuori!</p>' },
      { icon: '⬆️', title: 'Il magma risale', explode: 1, focus: ['camino', 'magma', 'camera', 'condotto', 'cono', 'strati', 'crosta'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>Quando la pressione dei gas è troppo alta, il magma sale nel <b>camino</b>. A volte trova anche una via laterale e apre una <b>bocca sul fianco</b>.</p>' },
      { icon: '💥', title: 'L\'eruzione', explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Il magma esce dal cratere e diventa <b>lava</b>. Nelle eruzioni esplosive vola in aria in brandelli (<b>lapilli</b> e <b>bombe</b>) e si alza una grande <b>nube di cenere e gas</b>.</p>' },
      { icon: '🟠', title: 'Le colate di lava', explode: 0, view: { rx: 0.35, ry: 0.15 },
        html: '<p>La lava scende lungo i fianchi come un fiume lento e incandescente. Raffreddandosi diventa <b>roccia</b> scura: il vulcano costruisce se stesso!</p>' },
      { icon: '🍰', title: 'Strati su strati', explode: 1, focus: ['strati', 'cono', 'crosta'], view: { rx: 0.1, ry: -0.1 }, zoom: 1.2,
        html: '<p>Ogni eruzione aggiunge uno strato: lava (scura) e cenere (chiara) si alternano come in una torta a strati. Per questo l\'Etna e il Vesuvio si chiamano <b>strato-vulcani</b>.</p><p class="tip">🇮🇹 In Italia i vulcani attivi sono vicino a dove la placca africana spinge sotto quella europea.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'L\'Etna, gigante d\'Europa', html: 'L\'<b>Etna</b>, in Sicilia, è il vulcano attivo più alto d\'Europa (circa 3400 m) ed è in eruzione molto spesso.' },
      { icon: '🏛️', title: 'Pompei', html: 'Nel <b>79 d.C.</b> il Vesuvio seppellì Pompei ed Ercolano sotto metri di cenere. Gli scavi ci mostrano com\'era la vita degli antichi Romani.' },
      { icon: '🗼', title: 'Il faro del Mediterraneo', html: 'Lo <b>Stromboli</b> erutta piccole fontane di lava ogni 10–20 minuti da migliaia di anni: i marinai lo usavano come faro.' },
      { icon: '🌊', title: 'Vulcani sottomarini', html: 'La maggior parte dei vulcani della Terra si trova <b>sotto il mare</b>. Il più grande vulcano sottomarino d\'Europa, il Marsili, è nel Tirreno.' },
      { icon: '🪐', title: 'Vulcani su altri mondi', html: 'Il vulcano più alto del Sistema solare è l\'<b>Olympus Mons</b> su Marte: è alto circa 22 km, quasi tre volte l\'Everest.' }
    ],
    quiz: [
      { type: 'mc', q: 'Come si chiama la roccia fusa che si trova sotto il vulcano?', options: ['Lava', 'Magma', 'Cenere', 'Basalto'], answer: 1, explain: 'Sotto terra si chiama magma; quando esce in superficie diventa lava.' },
      { type: 'mc', q: 'Come si chiama il "tubo" da cui il magma sale fino al cratere?', options: ['Camino', 'Camera', 'Fianco', 'Lapillo'], answer: 0, explain: 'Il camino collega la camera magmatica al cratere.' },
      { type: 'tf', q: 'Il magma sale perché è più leggero delle rocce che lo circondano ed è spinto dai gas.', answer: true, explain: 'È meno denso e i gas disciolti aumentano la pressione.' },
      { type: 'mc', q: 'Quale vulcano seppellì Pompei nel 79 d.C.?', options: ['L\'Etna', 'Lo Stromboli', 'Il Vesuvio', 'Vulcano'], answer: 2, explain: 'Il Vesuvio, vicino a Napoli.' },
      { type: 'order', q: 'Metti in ordine il viaggio del magma', items: ['Camera magmatica', 'Camino', 'Cratere', 'Colata di lava'], explain: 'Dalla camera sale nel camino, esce dal cratere e scende come colata.' },
      { type: 'mc', q: 'Perché si chiamano "strato-vulcani" l\'Etna e il Vesuvio?', options: ['Perché sono stratosferici', 'Perché sono fatti di strati alternati di lava e cenere', 'Perché sono piatti', 'Perché sono sotto il mare'], answer: 1, explain: 'Ogni eruzione aggiunge uno strato di lava o di cenere.' }
    ]
  });
})();
