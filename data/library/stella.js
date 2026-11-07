/* La stella: come funziona (fusione, equilibrio tra gravità e pressione) e come vive (ciclo di vita).
   Al centro una stella "come il Sole" vista in trasparenza; intorno, su un anello, le fasi della vita delle stelle. */
(function () {
  const D = Math.PI / 180;
  /* freccia lungo +y (base nell'origine): asta + punta */
  const arrow = (len, col, flip) => ({ t: 'group', rot: flip ? [180, 0, 0] : [0, 0, 0], pos: flip ? [0, len, 0] : [0, 0, 0], shapes: [
    { t: 'cyl', r: 0.035, h: len * 0.65, n: 10, pos: [0, len * 0.325, 0], color: col },
    { t: 'cone', r: 0.09, h: len * 0.35, n: 14, pos: [0, len * 0.82, 0], color: col } ] });
  /* frecce radiali: dirs come angoli [giro intorno a z, giro intorno a x] */
  const DIRS = [0, 45, 90, 135, 180, 225, 270, 315].map((a) => [0, a]).concat([[90, 0], [-90, 0], [90, 180], [-90, 180]]);
  const radial = (r0, len, col, inward, shift) => DIRS.map(([ax, az], i) => {
    const rz = az + (shift || 0), rx = ax;
    const dir = [-Math.sin(rz * D) * Math.cos(rx * D), Math.cos(rz * D) * Math.cos(rx * D), Math.sin(rx * D)];
    return { t: 'group', rot: [rx, 0, rz], shapes: [ { t: 'group', pos: [0, r0, 0], anim: { type: 'move', dir: [0, inward ? -1 : 1, 0], amp: 0.1, rate: 1, phase: i * 0.05 }, shapes: [ arrow(len, col, inward) ] } ], _d: dir };
  });
  /* protoni che si scontrano al centro (fusione) */
  const fusion = [];
  [[0.42, 0.1, 0.05], [-0.4, -0.12, 0.1], [0.08, 0.42, -0.1], [-0.1, -0.4, -0.08], [0.15, 0.05, 0.42], [-0.12, 0.06, -0.42]].forEach((p, i) => {
    fusion.push({ t: 'sphere', r: 0.07, n: 8, m: 10, pos: p, color: i % 2 ? '#ef4444' : '#f87171',
      anim: [ { type: 'path', pts: [p, [p[0] * 0.12, p[1] * 0.12, p[2] * 0.12]], wave: 'saw', rate: 1, phase: (i >> 1) * 0.33 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.08, rate: 1, phase: (i >> 1) * 0.33 } ] });
  });
  for (let k = 0; k < 3; k++) fusion.push({ t: 'sphere', r: 0.16, n: 10, m: 14, color: '#ffffff', anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.9, to: 1.0, ramp: 0.3, phase: k * 0.33 }, { type: 'scale', from: 0.6, to: 1.6, wave: 'window', win: [0.9, 1.0], phase: k * 0.33 } ] });
  /* fotoni che escono con un cammino a zig-zag */
  const photons = [];
  for (let i = 0; i < 9; i++) {
    const a = i * 40 * D, b = (i % 3 - 1) * 30 * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)], q = [-d[2], 0.4, d[0]];
    const pts = [0.3, 0.55, 0.8, 1.05, 1.25, 2.4].map((r, k) => [d[0] * r + q[0] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[1] * r + q[1] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[2] * r + q[2] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0)]);
    photons.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: '#fef08a', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.5, phase: i / 9 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.98, ramp: 0.05, rate: 0.5, phase: i / 9 } ] });
  }
  const at = (p, shapes) => ({ t: 'group', pos: p, shapes });
  const P = { nebulosa: [-3.3, 0.3, -1.3], proto: [-1.5, 0.2, -3.2], gigante: [1.6, 0.5, -3.3], planetaria: [3.5, 0.2, -1.0], supernova: [3.2, 0.2, 1.7], neutroni: [1.2, 0, 3.4], buco: [-1.7, 0, 3.1] };

  LIBRARY({
    id: 'stella',
    title: 'La stella',
    intro: 'Una stella è una gigantesca palla di gas caldissimo che <b>brilla di luce propria</b>. Dentro, nel nucleo, l\'idrogeno si trasforma in elio e libera un\'energia enorme. Anche le stelle nascono, vivono e muoiono!',
    model: {
      rx: 0.55, ry: -0.35, speed: 0.35, height: 480, bg: 'space', fit: 0.98,
      parts: [
        { id: 'involucro', name: 'Stella (come il Sole)', label: 'Stella', color: '#fcd34d', alpha: 0.4, explode: [0, 0, 0],
          info: '<p>Una stella adulta, come il nostro Sole. È fatta soprattutto di <b>idrogeno</b> ed <b>elio</b>, così caldi da essere un gas speciale chiamato <b>plasma</b>. In superficie ci sono circa 5500 °C.</p>',
          more: '<p>Le stelle hanno colori diversi a seconda della temperatura: le più fredde sono <b>rosse</b> (3000 °C), quelle come il Sole <b>gialle</b>, le più calde <b>azzurre</b> (oltre 20 000 °C). Il colore ci dice la temperatura anche a distanze enormi.</p>',
          shapes: [ { t: 'sphere', r: 1.25, n: 22, m: 36 }, { t: 'sphere', r: 1.32, n: 18, m: 30, color: '#fde68a', alpha: 0.12, anim: { type: 'scale', from: 1, to: 1.04, rate: 0.7 } } ] },
        { id: 'nucleo', name: 'Nucleo (la centrale)', label: 'Nucleo', color: '#fff7cc', alpha: 0.55, explode: [0, 0, 0],
          info: '<p>Il centro della stella: qui ci sono circa <b>15 milioni di gradi</b> e una pressione enorme. È la "centrale elettrica" della stella.</p>',
          shapes: [ { t: 'sphere', r: 0.5, n: 16, m: 24 } ] },
        { id: 'fusione', name: 'Fusione nucleare', label: 'Fusione', color: '#ef4444', explode: [0, 0, 0],
          info: '<p>Nel nucleo i nuclei di <b>idrogeno</b> corrono velocissimi e si scontrano: si fondono e diventano <b>elio</b>. In ogni fusione un pochino di materia si trasforma in tanta energia: luce e calore.</p>',
          more: '<p>Servono 4 nuclei di idrogeno (protoni) per fare un nucleo di elio, che pesa un po\' meno dei 4 protoni: la massa mancante diventa energia secondo la formula di Einstein <b>E = mc²</b>. Il Sole "brucia" così 600 milioni di tonnellate di idrogeno al secondo.</p>',
          shapes: fusion },
        { id: 'luce', name: 'Luce che esce', label: 'Luce', color: '#fef08a', explode: [0, 0, 0], chip: true,
          info: '<p>L\'energia prodotta nel nucleo viaggia verso l\'esterno, rimbalzando tra le particelle, e infine esce dalla superficie come <b>luce</b> e calore.</p>',
          more: '<p>Nel Sole un "pacchetto" di luce (fotone) impiega anche <b>100 000 anni</b> per uscire dal nucleo, perché viene assorbito e riemesso miliardi di volte. Poi, dalla superficie alla Terra, impiega solo 8 minuti!</p>',
          shapes: photons },
        { id: 'gravita', name: 'Gravità (spinge verso dentro)', label: 'Gravità', color: '#60a5fa', explode: [0, 0, 0],
          info: '<p>Tutta la materia della stella si attira verso il centro per la <b>gravità</b>: se fosse da sola, la stella si schiaccerebbe su se stessa.</p>',
          shapes: radial(1.45, 0.55, '#60a5fa', true, 22.5).map((g) => (delete g._d, g)) },
        { id: 'pressione', name: 'Pressione (spinge verso fuori)', label: 'Pressione', color: '#fb923c', explode: [0, 0, 0],
          info: '<p>Il calore del nucleo fa spingere il gas <b>verso fuori</b>, come l\'aria calda che gonfia un pallone. Gravità e pressione si bilanciano: la stella resta in <b>equilibrio</b> per miliardi di anni.</p>',
          shapes: radial(0.62, 0.5, '#fb923c', false, 0).map((g) => (delete g._d, g)) },
        { id: 'percorso', name: 'Ciclo di vita', label: 'Ciclo di vita', color: '#c4b5fd', explode: [0, 0, 0], noLabel: true,
          info: '<p>Le stelle cambiano durante la loro vita: nascono in una nube, brillano a lungo e alla fine si trasformano. <b>Come</b> finiscono dipende da <b>quanto sono grandi</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], color: '#c4b5fd', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.gigante, [3.1, 0.4, 0.2], P.supernova, P.neutroni], color: '#fca5a5', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.supernova, [0.9, 0.1, 2.9], P.buco], color: '#fca5a5', alpha: 0.5 } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.06, n: 6, m: 8, pos: P.nebulosa, color: '#ede9fe',
              anim: { type: 'path', pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], wave: 'saw', rate: 0.12, phase: k / 6 } }))) },
        { id: 'nebulosa', name: 'Nebulosa (dove nascono le stelle)', label: 'Nebulosa', color: '#c084fc', alpha: 0.32, explode: [-0.6, 0.3, -0.3],
          info: '<p>Le stelle nascono in enormi <b>nubi di gas e polvere</b>, le nebulose. Dove la nube è più fitta, la gravità la fa raggrumare in palle sempre più dense.</p>',
          shapes: [ at(P.nebulosa, [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.15 }, shapes: [
            { t: 'sphere', r: 0.75, n: 12, m: 18, scale: [1.3, 0.8, 1] }, { t: 'sphere', r: 0.55, n: 12, m: 18, pos: [0.6, 0.25, 0.3], color: '#f472b6' },
            { t: 'sphere', r: 0.5, n: 12, m: 18, pos: [-0.55, -0.15, -0.3], color: '#818cf8' }, { t: 'sphere', r: 0.4, n: 10, m: 16, pos: [0.1, 0.45, -0.4], color: '#e879f9' },
            { t: 'sphere', r: 0.07, n: 6, pos: [0.2, 0, 0.2], color: '#ffffff', alpha: 1 }, { t: 'sphere', r: 0.05, n: 6, pos: [-0.4, 0.2, 0.1], color: '#ffffff', alpha: 1 } ] } ]) ] },
        { id: 'protostella', name: 'Protostella', color: '#fb923c', explode: [-0.3, 0.3, -0.6],
          info: '<p>Una palla di gas che si sta schiacciando e scaldando. Intorno gira un <b>disco</b> di materia (dove possono nascere i pianeti!) e dai poli escono due getti di gas.</p>',
          more: '<p>Quando al centro si arriva a circa 10 milioni di gradi si accende la fusione dell\'idrogeno: la protostella diventa una vera stella. Ci vogliono alcuni milioni di anni.</p>',
          shapes: [ at(P.proto, [ { t: 'sphere', r: 0.3, n: 12, m: 18 },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.6 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 30, m: 8, scale: [1, 0.25, 1], color: '#fdba74', alpha: 0.45 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.75, 0, 0], color: '#a16207' } ] },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, 0.6, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, -0.6, 0], rot: [180, 0, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ]) ] },
        { id: 'gigante-rossa', name: 'Gigante rossa', label: 'Gigante rossa', color: '#dc2626', alpha: 0.8, explode: [0.3, 0.4, -0.6],
          info: '<p>Quando l\'idrogeno del nucleo finisce, la stella si <b>gonfia</b> tantissimo e la superficie si raffredda: diventa una gigante rossa. Tra 5 miliardi di anni succederà anche al Sole.</p>',
          more: '<p>Il Sole diventerà così grande da inghiottire Mercurio e Venere. Le stelle molto più grandi del Sole diventano <b>supergiganti</b> rosse, come Betelgeuse nella costellazione di Orione.</p>',
          shapes: [ at(P.gigante, [ { t: 'sphere', r: 0.95, n: 18, m: 28, anim: { type: 'scale', from: 0.94, to: 1.05, rate: 0.5 } }, { t: 'sphere', r: 1.05, n: 14, m: 22, color: '#f87171', alpha: 0.15 } ]) ] },
        { id: 'nana-bianca', name: 'Nebulosa planetaria e nana bianca', label: 'Nana bianca', color: '#e0f2fe', explode: [0.6, 0.3, -0.2],
          info: '<p>Le stelle come il Sole, alla fine, soffiano via i loro strati esterni in un bellissimo anello di gas (<b>nebulosa planetaria</b>). Al centro resta il nucleo: una <b>nana bianca</b>, piccola come la Terra ma caldissima.</p>',
          more: '<p>Un cucchiaino di nana bianca peserebbe <b>diverse tonnellate</b>! Senza più fusione, si raffredda lentamente per miliardi di anni.</p>',
          shapes: [ at(P.planetaria, [ { t: 'sphere', r: 0.12, n: 10, m: 14, color: '#ffffff' },
            { t: 'group', rot: [70, 0, 20], shapes: [ { t: 'torus', R: 0.6, r: 0.2, n: 32, m: 10, color: '#22d3ee', alpha: 0.45, anim: { type: 'scale', from: 0.9, to: 1.1, rate: 0.4 } }, { t: 'torus', R: 0.6, r: 0.08, n: 32, m: 8, color: '#f472b6', alpha: 0.5 } ] } ]) ] },
        { id: 'supernova', name: 'Supernova', color: '#fde047', explode: [0.6, 0.3, 0.4],
          info: '<p>Le stelle <b>molto grandi</b> (almeno 8 volte il Sole) finiscono con un\'esplosione gigantesca: una supernova. Per qualche settimana brilla più di miliardi di stelle insieme!</p>',
          more: '<p>Nelle supernove si formano molti elementi pesanti, come l\'<b>oro</b>, che vengono sparsi nello spazio. Il ferro del tuo sangue e il calcio delle tue ossa sono stati prodotti dentro stelle antiche: siamo fatti di <b>polvere di stelle</b>!</p>',
          shapes: [ at(P.supernova, [ { t: 'sphere', r: 0.18, n: 10, m: 14, color: '#ffffff' },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fb923c', alpha: 0.5, anim: [ { type: 'scale', from: 0.3, to: 1.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 } ] },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fde047', alpha: 0.6, anim: [ { type: 'scale', from: 0.2, to: 1.1, wave: 'saw', rate: 0.6, phase: 0.5 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: 0.5 } ] } ]) ] },
        { id: 'stella-neutroni', name: 'Stella di neutroni (pulsar)', label: 'Pulsar', color: '#a5f3fc', explode: [0.3, 0.3, 0.6],
          info: '<p>Dopo la supernova può restare una <b>stella di neutroni</b>: larga solo 20 km, come una città, ma più pesante del Sole. Alcune girano velocissime e lanciano due fasci di luce, come un faro: sono le <b>pulsar</b>.</p>',
          shapes: [ at(P.neutroni, [ { t: 'group', rot: [0, 0, 25], shapes: [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [
            { t: 'sphere', r: 0.16, n: 10, m: 14, color: '#e0f2fe' },
            { t: 'group', rot: [0, 0, 20], shapes: [ { t: 'cone', r: 0.16, h: 1.0, n: 14, rot: [180, 0, 0], pos: [0, 0.6, 0], color: '#67e8f9', alpha: 0.4 }, { t: 'cone', r: 0.16, h: 1.0, n: 14, pos: [0, -0.6, 0], color: '#67e8f9', alpha: 0.4 } ] } ] },
            { t: 'torus', R: 0.35, r: 0.012, n: 24, m: 4, color: '#a5f3fc', alpha: 0.5 } ] } ]) ] },
        { id: 'buco-nero', name: 'Buco nero', label: 'Buco nero', color: '#020617', explode: [-0.3, 0.3, 0.6],
          info: '<p>Se la stella era <b>gigantesca</b>, il suo nucleo si schiaccia senza fermarsi e diventa un buco nero: la gravità è così forte che <b>nemmeno la luce</b> riesce a scappare.</p>',
          more: '<p>Il buco nero in sé è invisibile, ma il gas che gli gira intorno, prima di cadere dentro, si scalda e brilla: è il <b>disco di accrescimento</b>. Nel 2019 è stata scattata la prima "foto" di un buco nero.</p>',
          shapes: [ at(P.buco, [ { t: 'sphere', r: 0.32, n: 14, m: 20 },
            { t: 'group', rot: [12, 0, 0], anim: { type: 'spin', axis: 'y', rate: 0.8 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 36, m: 8, scale: [1, 0.18, 1], color: '#f97316', alpha: 0.85 },
              { t: 'torus', R: 0.5, r: 0.08, n: 36, m: 6, scale: [1, 0.3, 1], color: '#fde68a', alpha: 0.9 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.9, 0, 0], color: '#fed7aa' } ] },
            { t: 'torus', R: 0.38, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], color: '#fbbf24', alpha: 0.8 } ]) ] }
      ]
    },
    steps: [
      { icon: '⭐', title: 'Che cos\'è una stella', focus: ['involucro', 'nucleo', 'luce', 'fusione'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.7,
        html: '<p>Una stella è una enorme palla di <b>gas caldissimo</b> che produce da sola luce e calore. Il Sole è una stella: le altre ci sembrano puntini solo perché sono <b>lontanissime</b>.</p><p class="tip">🌟 I pianeti invece non brillano di luce propria: riflettono la luce del Sole, come la Luna.</p>' },
      { icon: '⚛️', title: 'La fusione nel nucleo', focus: ['nucleo', 'fusione'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.4,
        html: '<p>Nel nucleo ci sono milioni di gradi. I nuclei di <b>idrogeno</b> si scontrano così forte da <b>fondersi</b> e diventare <b>elio</b>: ogni volta si libera un lampo di energia.</p><p class="tip">💡 È la stessa energia delle "bombe all\'idrogeno", ma nella stella è controllata dalla sua stessa gravità.</p>' },
      { icon: '⚖️', title: 'Un equilibrio perfetto', focus: ['gravita', 'pressione', 'involucro'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.7,
        html: '<p>La <b>gravità</b> (frecce blu) vorrebbe schiacciare la stella; la <b>pressione</b> del gas caldo (frecce arancioni) spinge verso fuori. Finché c\'è fusione, le due forze si bilanciano e la stella resta stabile per <b>miliardi di anni</b>.</p>' },
      { icon: '☀️', title: 'Il lungo viaggio della luce', focus: ['luce', 'involucro', 'nucleo'], view: { rx: 0.3, ry: -0.6 }, zoom: 1.7,
        html: '<p>L\'energia prodotta al centro esce piano piano, rimbalzando a zig-zag, e infine lascia la superficie come <b>luce</b>. Viaggia nello spazio a 300 000 km al secondo.</p>' },
      { icon: '☁️', title: 'Nascita: nebulose e protostelle', focus: ['nebulosa', 'protostella', 'percorso'], view: { rx: 0.6, ry: -0.6 },
        html: '<p>Le stelle nascono dentro <b>nebulose</b>, nubi di gas e polvere. La gravità raccoglie il gas in una palla sempre più calda: una <b>protostella</b>, con intorno un disco da cui possono nascere i <b>pianeti</b>.</p>' },
      { icon: '🔴', title: 'Vecchiaia: la gigante rossa', focus: ['gigante-rossa', 'nana-bianca', 'percorso'], view: { rx: 0.6, ry: 0.1 },
        html: '<p>Quando l\'idrogeno finisce, la stella si gonfia e diventa una <b>gigante rossa</b>. Le stelle come il Sole poi perdono gli strati esterni (una <b>nebulosa planetaria</b>) e resta una piccola <b>nana bianca</b>.</p>' },
      { icon: '💥', title: 'Le stelle giganti esplodono', focus: ['supernova', 'stella-neutroni', 'buco-nero', 'percorso'], view: { rx: 0.6, ry: 2.8 },
        html: '<p>Le stelle molto più grandi del Sole finiscono con un\'esplosione: una <b>supernova</b>. Resta una <b>stella di neutroni</b> piccolissima e pesantissima, oppure un <b>buco nero</b>.</p><p class="tip">✨ Gli atomi del tuo corpo sono stati creati dentro stelle antiche: sei fatto di polvere di stelle!</p>' }
    ],
    facts: [
      { icon: '🔢', title: 'Più stelle che granelli di sabbia', html: 'Nell\'universo ci sono più stelle che granelli di sabbia su tutte le spiagge della Terra. Solo la nostra galassia, la Via Lattea, ne ha <b>centinaia di miliardi</b>.' },
      { icon: '🚀', title: 'La stella più vicina', html: 'Dopo il Sole, la stella più vicina è <b>Proxima Centauri</b>: la sua luce impiega più di 4 anni per arrivare fino a noi.' },
      { icon: '🎨', title: 'Stelle colorate', html: 'Guarda Orione d\'inverno: <b>Betelgeuse</b> è rossa (più fredda), <b>Rigel</b> è azzurra (caldissima).' },
      { icon: '✨', title: 'Perché brillano "a scatti"?', html: 'Le stelle tremolano perché la loro luce attraversa l\'aria in movimento della nostra atmosfera. Nello spazio non tremolano.' },
      { icon: '⏳', title: 'Vite lunghissime', html: 'Il Sole vivrà circa <b>10 miliardi di anni</b> (ne ha già 4,6). Le stelle più grandi consumano il carburante in fretta e vivono "solo" pochi milioni di anni.' }
    ],
    quiz: [
      { type: 'mc', q: 'Che cosa succede nel nucleo di una stella?', options: ['L\'acqua bolle', 'L\'idrogeno si fonde e diventa elio', 'Il legno brucia', 'Il ferro si scioglie'], answer: 1, explain: 'È la fusione nucleare: idrogeno → elio, con liberazione di tantissima energia.' },
      { type: 'mc', q: 'Quali due forze si bilanciano in una stella?', options: ['Vento e pioggia', 'Gravità e pressione del gas caldo', 'Magnetismo ed elettricità', 'Attrito e spinta'], answer: 1, explain: 'La gravità spinge verso dentro, la pressione del gas caldo verso fuori.' },
      { type: 'tf', q: 'Il Sole è una stella.', answer: true, explain: 'È una stella di media grandezza: ci sembra diverso solo perché è vicinissimo.' },
      { type: 'mc', q: 'Dove nascono le stelle?', options: ['Nei buchi neri', 'Nelle nebulose di gas e polvere', 'Sui pianeti', 'Nelle comete'], answer: 1, explain: 'La gravità fa raggrumare il gas delle nebulose finché si accende la fusione.' },
      { type: 'order', q: 'Metti in ordine la vita di una stella come il Sole', items: ['Nebulosa', 'Protostella', 'Stella adulta', 'Gigante rossa', 'Nana bianca'], explain: 'Nube → palla che si scalda → stella stabile → si gonfia → resta il nucleo caldo.' },
      { type: 'mc', q: 'Come finiscono le stelle molto più grandi del Sole?', options: ['Si spengono piano piano', 'Con un\'esplosione di supernova', 'Diventano pianeti', 'Diventano comete'], answer: 1, explain: 'Esplodono come supernove e lasciano una stella di neutroni o un buco nero.' }
    ]
  });
})();
