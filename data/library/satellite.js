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
    id: 'satellite',
    title: 'Il satellite',
    intro: 'Un satellite artificiale gira intorno alla Terra a centinaia o migliaia di chilometri d\'altezza. Fotografa il pianeta, ci porta la TV, Internet e il segnale <b>GPS</b>. Ma come fa a non cadere?',
    model: {
      rx: 0.28, ry: -0.6, speed: 0.25, height: 480, bg: 'orbit',
      parts: [
        { id: 'corpo', name: 'Corpo (struttura)', label: 'Corpo', color: '#d4a017', alpha: 0.42, explode: [0, 0, 0],
          info: '<p>È la "scatola" che contiene gli strumenti. È avvolta in fogli dorati, la <b>coperta termica</b>, che la protegge dal caldo del Sole e dal freddo dell\'ombra.</p>',
          more: '<p>Al Sole un satellite può arrivare a +120 °C, all\'ombra della Terra a −150 °C. La coperta termica è fatta di tanti strati sottilissimi di plastica ricoperta di metallo che riflettono il calore.</p>',
          shapes: [ { t: 'box', s: [1, 1.2, 1] }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, 0.6, 0], color: '#a16207', alpha: 1 }, { t: 'box', s: [1.04, 0.05, 1.04], pos: [0, -0.6, 0], color: '#a16207', alpha: 1 } ] },
        { id: 'pannelli', name: 'Pannelli solari', color: '#1e3a8a', explode: [0, 0, 0], anim: { type: 'swing', axis: 'x', amp: 25, rate: 0.35 },
          info: '<p>Trasformano la luce del Sole in <b>elettricità</b>. Ruotano lentamente per restare sempre girati verso il Sole, come i girasoli.</p>',
          more: '<p>Sono fatti di <b>celle fotovoltaiche</b> di silicio o arseniuro di gallio. Durante il lancio sono ripiegati e si aprono solo in orbita.</p>',
          shapes: cells(1).concat(cells(-1)) },
        { id: 'batterie', name: 'Batterie', color: '#16a34a', pos: [-0.22, -0.3, 0.1], explode: [-0.4, -0.3, 1.5],
          info: '<p>Immagazzinano l\'energia dei pannelli e la usano quando il satellite passa nell\'<b>ombra della Terra</b>, dove il Sole non arriva.</p>',
          shapes: [0, 1, 2].map((k) => ({ t: 'box', s: [0.14, 0.32, 0.4], pos: [k * 0.17 - 0.17, 0, 0] })) },
        { id: 'serbatoio', name: 'Serbatoio del propellente', label: 'Serbatoio', color: '#9ca3af', pos: [0, 0.15, -0.05], explode: [0, 0.4, -1.5],
          info: '<p>Una sfera piena di carburante per i piccoli motori. Quando finisce, il satellite non può più correggere la sua orbita.</p>',
          shapes: [ { t: 'sphere', r: 0.3, n: 12 } ] },
        { id: 'computer', name: 'Computer di bordo', label: 'Computer', color: '#1e40af', pos: [0.25, -0.25, 0.15], explode: [0.4, -0.3, 1.5],
          info: '<p>È il cervello del satellite: controlla tutti gli strumenti, esegue i comandi ricevuti da Terra e decide da solo in caso di problemi.</p>',
          more: '<p>Lassù le <b>radiazioni</b> possono sbagliare i bit nella memoria: i computer spaziali sono speciali, più robusti e spesso doppi (uno di riserva).</p>',
          shapes: [ { t: 'box', s: [0.32, 0.3, 0.36] }, { t: 'box', s: [0.05, 0.05, 0.02], pos: [0.08, 0.08, 0.18], color: '#22c55e', anim: { type: 'blink', color: '#bbf7d0', wave: 'square', rate: 4 } } ] },
        { id: 'antenna-parabolica', name: 'Antenna parabolica', label: 'Antenna parabolica', color: '#f1f5f9', pos: [0, -0.62, 0.55], explode: [0, -0.6, 0.6],
          anim: { type: 'swing', axis: 'x', amp: 8, rate: 0.2 },
          info: '<p>Manda a Terra le foto e i dati e riceve i comandi, con <b>onde radio</b> che viaggiano alla velocità della luce: 300 000 km al secondo!</p>',
          more: '<p>La forma a parabola concentra le onde radio in un fascio stretto, come lo specchio di una torcia concentra la luce. Così il segnale arriva lontano usando poca energia.</p>',
          shapes: [ { t: 'cyl', r: 0.03, h: 0.25, n: 8, pos: [0, -0.1, 0], color: '#94a3b8' },
            { t: 'lathe', ds: true, n: 28, rot: [180, 0, 0], pos: [0, -0.25, 0], pts: [[0.02, 0], [0.2, 0.024], [0.35, 0.074], [0.5, 0.15], [0.62, 0.23]] },
            { t: 'cyl', r: 0.012, h: 0.42, n: 6, pos: [0, -0.43, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.05, r2: 0.03, h: 0.08, n: 10, pos: [0, -0.64, 0], color: '#475569' } ] },
        { id: 'antenna', name: 'Antenna omnidirezionale', label: 'Antenna', color: '#e5e7eb', pos: [0.3, 0.6, 0.3], explode: [0.3, 0.6, 0.3],
          info: '<p>Un\'antenna piccola che parla in <b>tutte le direzioni</b>: serve per i messaggi di emergenza anche quando il satellite è girato male.</p>',
          shapes: [ { t: 'cyl', r: 0.015, h: 0.6, n: 6, pos: [0, 0.3, 0] }, { t: 'sphere', r: 0.04, n: 6, pos: [0, 0.62, 0], color: '#ef4444' } ] },
        { id: 'fotocamera', name: 'Fotocamera (telescopio)', label: 'Fotocamera', color: '#334155', pos: [-0.28, -0.75, -0.25], explode: [-0.6, -0.8, -0.4],
          info: '<p>Un piccolo telescopio che guarda la Terra: fotografa nuvole, mari, boschi e città. Serve per le <b>previsioni del tempo</b> e per controllare incendi e ghiacciai.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.45, n: 24 }, { t: 'cyl', r: 0.12, h: 0.02, n: 24, pos: [0, -0.23, 0], color: '#0ea5e9' }, { t: 'tube', r: 0.19, ri: 0.16, h: 0.1, n: 24, pos: [0, -0.2, 0], color: '#111827' } ] },
        { id: 'sensore-stellare', name: 'Sensore stellare', label: 'Sensore stellare', color: '#475569', pos: [-0.3, 0.68, -0.3], explode: [-0.4, 0.7, -0.4],
          info: '<p>È una piccola fotocamera che guarda le <b>stelle</b>: riconoscendole, il satellite capisce in che direzione è girato. Come facevano i marinai antichi!</p>',
          shapes: [ { t: 'box', s: [0.18, 0.14, 0.18] }, { t: 'cyl', r: 0.07, r2: 0.13, h: 0.2, n: 16, pos: [0, 0.17, 0], color: '#111827', ds: true, open: true } ] },
        { id: 'propulsori', name: 'Propulsori', color: '#6b7280', explode: [0, 0, 0],
          info: '<p>Piccoli motori a razzo che fanno brevi "sbuffi" di gas: correggono l\'orbita e girano il satellite nella posizione giusta.</p>',
          more: '<p>Alcuni satelliti usano <b>motori ionici</b>: spingono pochissimo, ma per mesi interi, consumando molto meno carburante.</p>',
          shapes: [ thr(0.45, -0.62, 0.45, [0, 0, 0], 0.1), thr(-0.45, -0.62, -0.45, [0, 0, 0], 0.35), thr(-0.45, 0.62, 0.45, [180, 0, 0], 0.6), thr(0.45, 0.62, -0.45, [180, 0, 0], 0.85) ] },
        { id: 'radiatore', name: 'Radiatore', color: '#f8fafc', pos: [0, 0, -0.52], explode: [0, 0, -0.7],
          info: '<p>Un pannello bianco che butta nello spazio il calore prodotto dagli strumenti. Nel vuoto non c\'è aria che rinfresca: il calore va via solo come <b>radiazione</b>.</p>',
          shapes: [ { t: 'box', s: [0.9, 1.0, 0.03] } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'Perché non cade?', explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>In realtà un satellite <b>cade sempre</b> verso la Terra! Ma corre così veloce di lato (circa 27 000 km/h in orbita bassa) che la Terra, rotonda, "scappa" sotto di lui. Così continua a girarle intorno: è l\'<b>orbita</b>.</p><p class="tip">🍎 Newton lo immaginò con un cannone sulla cima di un monte altissimo: più forte spari, più lontano cade la palla… finché fa il giro del mondo!</p>' },
      { icon: '☀️', title: 'Energia dal Sole', focus: ['pannelli', 'batterie'], explode: 0.5,
        html: '<p>I <b>pannelli solari</b> trasformano la luce in elettricità e girano per seguire il Sole. Le <b>batterie</b> conservano l\'energia per quando il satellite passa nell\'ombra della Terra.</p>' },
      { icon: '📡', title: 'Parlare con la Terra', focus: ['antenna-parabolica', 'antenna', 'computer'], explode: 0.4, view: { rx: -0.2, ry: -0.6 },
        html: '<p>L\'<b>antenna parabolica</b> manda a Terra dati e foto con le onde radio e riceve i comandi delle stazioni di controllo. Il <b>computer di bordo</b> esegue tutto.</p>' },
      { icon: '🧭', title: 'Dove sono girato?', focus: ['sensore-stellare', 'computer', 'propulsori'], explode: 0.3,
        html: '<p>Il <b>sensore stellare</b> fotografa le stelle e capisce l\'orientamento. Se serve, i <b>propulsori</b> fanno piccoli sbuffi per girare il satellite o correggere l\'orbita, usando il carburante del <b>serbatoio</b>.</p>' },
      { icon: '📸', title: 'Il suo lavoro', focus: ['fotocamera', 'antenna-parabolica'], explode: 0.2, view: { rx: -0.35, ry: -0.3 },
        html: '<p>Ogni satellite ha un compito: fotografare la Terra (meteo, ambiente), trasmettere TV e Internet, oppure mandare il segnale <b>GPS</b> che dice al telefono dove sei.</p><p class="tip">🛰️ Per il GPS servono almeno 4 satelliti visibili insieme.</p>' },
      { icon: '🌡️', title: 'Né troppo caldo né troppo freddo', focus: ['corpo', 'radiatore'], explode: 0.3,
        html: '<p>La <b>coperta dorata</b> riflette la luce del Sole, il <b>radiatore</b> bianco butta fuori il calore degli strumenti. Così dentro la temperatura resta giusta per l\'elettronica.</p>' }
    ],
    facts: [
      { icon: '🔴', title: 'Sputnik 1', html: 'Il primo satellite artificiale fu lanciato nel 1957 dall\'Unione Sovietica: era una sfera di 58 cm che faceva solo "bip bip".' },
      { icon: '🇮🇹', title: 'L\'Italia nello spazio', html: 'Nel 1964 l\'Italia fu il terzo Paese al mondo a mettere in orbita un proprio satellite: il <b>San Marco 1</b>.' },
      { icon: '🔢', title: 'Migliaia lassù', html: 'Oggi intorno alla Terra girano più di <b>10 000 satelliti</b> attivi, e il numero cresce ogni anno.' },
      { icon: '🌐', title: 'Orbita geostazionaria', html: 'A 36 000 km d\'altezza un satellite gira insieme alla Terra e sembra fermo nel cielo: per questo le parabole della TV non si muovono.' }
    ],
    quiz: [
      { type: 'mc', q: 'Da dove prende l\'energia un satellite?', options: ['Da un motore a benzina', 'Dai pannelli solari', 'Da un cavo collegato alla Terra', 'Dal vento solare che lo spinge'], answer: 1, explain: 'I pannelli solari trasformano la luce del Sole in elettricità; le batterie la conservano per le ore d\'ombra.' },
      { type: 'tf', q: 'Un satellite in orbita sta in realtà cadendo continuamente verso la Terra.', answer: true, explain: 'Cade, ma corre così veloce di lato che la Terra curva sotto di lui: per questo continua a girarle intorno.' },
      { type: 'mc', q: 'A cosa serve il sensore stellare?', options: ['A fotografare le stelle per gli astronomi', 'A capire in che direzione è girato il satellite', 'A misurare la temperatura', 'A produrre corrente'], answer: 1, explain: 'Riconoscendo le stelle, il satellite capisce il proprio orientamento.' },
      { type: 'mc', q: 'Con che cosa il satellite manda i dati a Terra?', options: ['Con onde radio', 'Con un cavo', 'Con segnali di fumo', 'Con il suono'], answer: 0, explain: 'Le onde radio viaggiano nel vuoto alla velocità della luce; il suono invece nel vuoto non si propaga.' },
      { type: 'mc', q: 'Perché il satellite è avvolto in fogli dorati?', options: ['Per essere più bello', 'Per proteggerlo dal caldo e dal freddo', 'Per farlo pesare di più', 'Per riflettere i segnali GPS'], answer: 1, explain: 'La coperta termica riflette il calore del Sole e trattiene quello interno quando è all\'ombra.' }
    ]
  });
})();
