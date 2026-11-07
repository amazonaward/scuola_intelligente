/* Il frigorifero (combinato: freezer in alto, frigo in basso). Davanti = +z, alto = +y, le porte sono aperte.
   Circuito del refrigerante: compressore → condensatore (dietro) → capillare → evaporatore (nel freezer) → compressore. */
(function () {
  const ZC = -0.66; // piano del condensatore (dietro al mobile)
  const serp = (x0, x1, ys, z) => { const out = []; ys.forEach((y, i) => { const a = i % 2 ? x1 : x0, b = i % 2 ? x0 : x1; out.push([a, y, z], [b, y, z]); }); return out; };
  const CROWS = Array.from({ length: 9 }, (_, i) => 2.75 - i * 0.25);
  const COND = serp(0.45, -0.45, CROWS, ZC);
  const EROWS = [2.25, 2.42, 2.59, 2.76];
  const EVAP = serp(-0.42, 0.42, EROWS, -0.44);
  const HOT = [[0.2, 0.46, -0.8], [0.5, 0.62, -0.8], [0.55, 2.75, ZC], ...COND, [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.48, 2.25, -0.5]];
  const COLD = [[-0.48, 2.25, -0.5], ...EVAP, [0.5, 2.76, -0.5], [0.5, 2.76, -0.76], [0.4, 0.75, -0.76], [0.28, 0.46, -0.8]];
  const drops = (path, color, n, rate) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate, phase: k / n } }));
  const glass = (y) => ({ t: 'box', s: [1.04, 0.025, 0.9], pos: [0, y, 0.0], div: 2 });
  /* porta: parte dal cardine (x = 0) e si estende verso +x; aperta ruotando intorno a y */
  const DOOR_OPEN = -112;

  LIBRARY({
    id: 'frigorifero',
    title: 'Il frigorifero',
    intro: 'Il frigorifero non "produce" il freddo: <b>porta via il calore</b> dai cibi e lo butta fuori, dietro. Lo fa con un liquido speciale che viaggia in un circuito chiuso, evapora e si condensa di continuo. Segui il suo viaggio!',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.35, height: 490,
      parts: [
        { id: 'mobile', name: 'Mobile (cassa)', label: 'Mobile', color: '#f1f5f9', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>È la grande "scatola" del frigorifero: fuori è di lamiera verniciata, dentro di plastica bianca facile da pulire.</p>',
          shapes: [ { t: 'box', s: [1.2, 3.0, 0.05], pos: [0, 1.5, -0.525] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [-0.57, 1.5, 0] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [0.57, 1.5, 0] },
            { t: 'box', s: [1.2, 0.06, 1.1], pos: [0, 2.97, 0] }, { t: 'box', s: [1.2, 0.12, 1.1], pos: [0, 0.06, 0] },
            { t: 'box', s: [1.08, 0.06, 1.0], pos: [0, 2.05, 0.03], color: '#e2e8f0', alpha: 0.7 },
            { t: 'box', s: [1.2, 0.08, 0.04], pos: [0, 0.04, 0.56], color: '#64748b', alpha: 0.8 } ] },
        { id: 'isolamento', name: 'Isolamento (schiuma)', label: 'Isolamento', color: '#fcd34d', alpha: 0.35, explode: [0, 0, -0.35],
          info: '<p>Tra la lamiera esterna e la plastica interna c\'è uno strato di <b>schiuma</b> piena di bollicine d\'aria. L\'aria ferma lascia passare pochissimo calore: così il caldo della cucina non entra.</p>',
          more: '<p>È schiuma di <b>poliuretano</b>, spessa 4–7 cm. È lo stesso principio del piumino o del thermos: un materiale <b>isolante</b> rallenta il passaggio del calore, che va sempre dal corpo più caldo a quello più freddo.</p>',
          shapes: [ { t: 'box', s: [1.08, 2.8, 0.06], pos: [0, 1.52, -0.47] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [-0.515, 1.52, 0.0] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [0.515, 1.52, 0.0] } ] },
        { id: 'porta-frigo', name: 'Porta del frigo', label: 'Porta', color: '#e5e7eb', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.35],
          info: '<p>La porta è anche lei piena di schiuma isolante. Sulla parte interna ci sono i <b>balconcini</b> per bottiglie, uova e burro.</p>',
          shapes: [ { t: 'box', s: [1.2, 1.9, 0.09], pos: [0.6, 0.95, 0.045] }, { t: 'box', s: [1.04, 1.74, 0.05], pos: [0.6, 0.95, -0.02], color: '#f8fafc' },
            { t: 'box', s: [0.06, 0.9, 0.05], pos: [1.1, 1.3, 0.12], color: '#94a3b8' },
            ...[0.35, 0.85, 1.35].map((y) => ({ t: 'group', pos: [0.6, y, -0.13], shapes: [ { t: 'box', s: [0.96, 0.03, 0.17] }, { t: 'box', s: [0.96, 0.14, 0.02], pos: [0, 0.07, -0.085], color: '#bae6fd', alpha: 0.6 } ] })),
            { t: 'cyl', r: 0.06, h: 0.42, n: 14, pos: [0.4, 0.58, -0.13], color: '#16a34a', alpha: 0.85 }, { t: 'cyl', r: 0.025, h: 0.12, n: 10, pos: [0.4, 0.85, -0.13], color: '#16a34a', alpha: 0.85 },
            { t: 'cyl', r: 0.065, h: 0.3, n: 14, pos: [0.65, 0.52, -0.13], color: '#f8fafc' }, { t: 'box', s: [0.18, 0.2, 0.09], pos: [0.85, 0.47, -0.13], color: '#fde047' } ] },
        { id: 'porta-freezer', name: 'Porta del freezer', label: 'Porta freezer', color: '#e5e7eb', pos: [-0.6, 2.08, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0.2, 0.35],
          info: '<p>Il <b>freezer</b> (congelatore) ha la sua porta: dentro si arriva a <b>−18 °C</b>, abbastanza per trasformare l\'acqua in ghiaccio e conservare i cibi per mesi.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.9, 0.09], pos: [0.6, 0.45, 0.045] }, { t: 'box', s: [1.04, 0.76, 0.05], pos: [0.6, 0.45, -0.02], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.45, 0.05], pos: [1.1, 0.3, 0.12], color: '#94a3b8' } ] },
        { id: 'guarnizione', name: 'Guarnizione magnetica', label: 'Guarnizione', color: '#475569', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.6],
          info: '<p>Il bordo di gomma intorno alla porta contiene una <b>calamita</b> che la tiene ben chiusa contro il mobile di metallo: così l\'aria fredda non scappa.</p>',
          more: '<p>Fai una prova: chiudi un foglio di carta nella porta. Se si sfila facilmente, la guarnizione è rovinata e il frigo consuma di più. Una calamita del frigorifero si attacca proprio perché la lamiera è di <b>ferro</b>.</p>',
          shapes: [ { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 0.06, -0.02] }, { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 1.84, -0.02] },
            { t: 'box', s: [0.04, 1.82, 0.04], pos: [0.06, 0.95, -0.02] }, { t: 'box', s: [0.04, 1.82, 0.04], pos: [1.14, 0.95, -0.02] } ] },
        { id: 'ripiani', name: 'Ripiani e cassetti', label: 'Ripiani', color: '#bae6fd', alpha: 0.45, explode: [0, 0, 0.7],
          info: '<p>Ripiani di vetro e cassetti per frutta e verdura. In basso, vicino al cassetto delle verdure, l\'aria è meno fredda; in alto è più fredda.</p>',
          more: '<p>L\'aria fredda è più <b>densa</b> e scende, quella più calda sale: si formano zone a temperatura diversa. Per questo carne e pesce vanno sul ripiano più freddo e le verdure nel cassetto.</p>',
          shapes: [ glass(0.55), glass(1.05), glass(1.5), { t: 'box', s: [0.98, 0.32, 0.8], pos: [0, 0.3, 0.02], color: '#a7f3d0' }, glass(2.45) ] },
        { id: 'cibi', name: 'Cibi', color: '#ef4444', explode: [0, 0, 1.1],
          info: '<p>I cibi si conservano meglio al freddo perché i <b>batteri</b> e le muffe, che li fanno andare a male, al freddo crescono molto lentamente.</p>',
          more: '<p>Nel frigo (circa 4 °C) i batteri rallentano; nel freezer (−18 °C) si fermano quasi del tutto, ma non muoiono: per questo un cibo scongelato va consumato presto.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 10, m: 14, pos: [-0.25, 0.66, 0.05] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [-0.05, 0.65, 0.12], color: '#84cc16' },
            { t: 'cyl', r: 0.17, h: 0.12, n: 20, pos: [0.25, 1.13, 0.0], color: '#fde68a' }, { t: 'box', s: [0.3, 0.16, 0.2], pos: [-0.2, 1.15, -0.05], color: '#38bdf8' },
            { t: 'cyl', r: 0.07, h: 0.32, n: 14, pos: [0.3, 1.68, -0.15], color: '#f8fafc' }, { t: 'cyl', r: 0.07, h: 0.06, n: 14, pos: [0.3, 1.87, -0.15], color: '#2563eb' },
            { t: 'box', s: [0.36, 0.1, 0.24], pos: [-0.2, 2.53, 0.08], color: '#c4b5fd' }, { t: 'box', s: [0.28, 0.08, 0.2], pos: [0.2, 2.52, 0.1], color: '#e0f2fe' },
            { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.0, 0.42, 0.15], color: '#f97316' }, { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.14, 0.41, 0.1], color: '#ef4444' } ] },
        { id: 'compressore', name: 'Compressore', color: '#1f2937', pos: [0.2, 0.28, -0.8], explode: [0.4, -0.2, -0.8],
          info: '<p>È il "cuore" del frigorifero, una pompa con un motore elettrico. <b>Spreme</b> il gas refrigerante: schiacciato, il gas diventa caldo e corre verso il condensatore.</p>',
          more: '<p>Quando comprimi un gas, gli dai energia e la sua temperatura sale (lo senti anche gonfiando la ruota della bici: la pompa si scalda). Il ronzio che senti ogni tanto è il compressore che si accende.</p>',
          anim: { type: 'move', dir: [1, 0, 0], amp: 0.006, wave: 'sin', rate: 9 },
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 20, scale: [0.26, 0.2, 0.2] }, { t: 'cyl', r: 0.24, h: 0.04, n: 24, pos: [0, -0.02, 0], color: '#111827' },
            { t: 'box', s: [0.6, 0.04, 0.4], pos: [0, -0.2, 0], color: '#475569' }, { t: 'box', s: [0.12, 0.1, 0.08], pos: [-0.2, 0.05, 0.16], color: '#0f172a' } ] },
        { id: 'condensatore', name: 'Condensatore (griglia dietro)', label: 'Condensatore', color: '#334155', explode: [0, 0, -0.9],
          info: '<p>È la griglia nera dietro al frigo. Il gas caldo la percorre, cede il suo calore all\'aria della cucina e si raffredda fino a diventare <b>liquido</b>. Toccala (piano!): è tiepida.</p>',
          more: '<p>Passare da gas a liquido si chiama <b>condensazione</b> e libera calore, come il vapore che si condensa sul coperchio della pentola. Se la griglia è piena di polvere o attaccata al muro, il calore esce male e il frigo consuma di più.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, pts: COND }, ...Array.from({ length: 10 }, (_, k) => ({ t: 'cyl', r: 0.006, h: 2.1, n: 4, pos: [-0.42 + k * 0.093, 1.75, ZC - 0.03], color: '#475569' })) ] },
        { id: 'capillare', name: 'Tubo capillare (espansione)', label: 'Capillare', color: '#b45309', explode: [-0.5, 0, -0.6],
          info: '<p>È un tubicino sottilissimo, come uno spaghetto di rame. Il liquido ci passa a fatica e, uscendo dall\'altra parte, trova tanto spazio: la sua pressione crolla e diventa <b>freddissimo</b>.</p>',
          more: '<p>Quando la pressione scende di colpo il liquido comincia a bollire anche a −25 °C. Succede qualcosa di simile con una bomboletta spray: se spruzzi a lungo diventa fredda.</p>',
          shapes: [ { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.45, 0.75, ZC], [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.5, 1.4, -0.55], [-0.48, 2.25, -0.5]] },
            { t: 'cyl', r: 0.035, h: 0.18, n: 12, pos: [-0.52, 0.55, ZC], color: '#78716c' } ] },
        { id: 'evaporatore', name: 'Evaporatore', color: '#93c5fd', explode: [0, 0.45, 0.25],
          info: '<p>Nel freezer, dietro la parete, corre una serpentina gelata. Qui il refrigerante <b>evapora</b>: per farlo ha bisogno di calore e lo "ruba" all\'aria e ai cibi. Ecco il freddo!</p>',
          more: '<p>Per evaporare un liquido serve energia (il <b>calore latente</b>). È lo stesso motivo per cui senti freddo uscendo dall\'acqua: il sudore o l\'acqua che evaporano ti portano via calore. Sull\'evaporatore spesso si forma la <b>brina</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.026, n: 6, pts: EVAP }, { t: 'box', s: [0.95, 0.68, 0.015], pos: [0, 2.5, -0.465], color: '#dbeafe', alpha: 0.7 } ] },
        { id: 'refrigerante-caldo', name: 'Refrigerante caldo (compresso)', label: 'Refrigerante caldo', color: '#f97316', noLabel: true, explode: [0, 0, -0.9],
          info: '<p>Uscito dal compressore il refrigerante è un <b>gas caldo e schiacciato</b>. Nel condensatore perde calore e diventa liquido.</p>',
          shapes: drops(HOT, '#f97316', 16, 0.35) },
        { id: 'refrigerante-freddo', name: 'Refrigerante freddo', label: 'Refrigerante freddo', color: '#2563eb', noLabel: true, explode: [0, 0.45, 0.25],
          info: '<p>Dopo il capillare il refrigerante è <b>freddo</b> e a bassa pressione. Nell\'evaporatore assorbe il calore del frigo e torna gas, pronto per il compressore.</p>',
          more: '<p>Oggi si usano refrigeranti come l\'<b>isobutano</b> (R600a), che non danneggiano lo strato di ozono. I vecchi CFC invece lo rovinavano e sono stati vietati nel 1987 (Protocollo di Montréal).</p>',
          shapes: drops(COLD, '#2563eb', 10, 0.5) },
        { id: 'calore', name: 'Calore che esce', label: 'Calore', color: '#ef4444', alpha: 0.7, explode: [0, 0, -1.1],
          info: '<p>Il calore tolto ai cibi più quello del motore esce dal condensatore e scalda un po\' la cucina. L\'aria calda <b>sale</b>.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: [-0.35 + (k % 4) * 0.23, 0.9 + (k > 3 ? 0.9 : 0), -0.8],
            anim: [{ type: 'move', dir: [0, 1, 0], amp: 0.9, wave: 'saw', rate: 0.6, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: k / 8 }] })) },
        { id: 'aria-fredda', name: 'Aria fredda', label: 'Aria fredda', color: '#7dd3fc', alpha: 0.8, explode: [0, 0, 0.7],
          info: '<p>L\'aria raffreddata dall\'evaporatore è più pesante e <b>scende</b> sui ripiani, mentre l\'aria più tiepida sale: l\'aria gira da sola dentro il frigo.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: [-0.3 + (k % 4) * 0.2, 1.95, 0.25 - (k > 3 ? 0.25 : 0)],
            anim: [{ type: 'move', dir: [0, -1, 0], amp: 1.5, wave: 'saw', rate: 0.4, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: k / 8 }] })) },
        { id: 'termostato', name: 'Termostato e luce', label: 'Termostato', color: '#f8fafc', pos: [0.38, 1.92, 0.25], explode: [0.4, 0, 0.6],
          info: '<p>Il <b>termostato</b> misura la temperatura: quando dentro fa abbastanza freddo spegne il compressore, quando si scalda lo riaccende. Accanto c\'è la lampadina che si accende aprendo la porta.</p>',
          more: '<p>La temperatura giusta per il frigo è circa <b>4 °C</b>, per il freezer <b>−18 °C</b>. Ogni volta che lasci la porta aperta entra aria calda e umida, e il compressore deve lavorare di più.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.14, 0.2] }, { t: 'cyl', r: 0.045, h: 0.04, n: 16, rot: [90, 0, 0], pos: [0.06, 0, 0.11], color: '#475569' },
            { t: 'sphere', r: 0.05, n: 8, m: 12, pos: [-0.08, -0.08, 0.04], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.5 } } ] }
      ]
    },
    steps: [
      { icon: '🧊', title: 'Il freddo non si fa: si porta via il caldo', explode: 0,
        html: '<p>Il frigorifero è una <b>pompa di calore</b>: prende il calore da dentro (dai cibi) e lo butta fuori, nella cucina. Senza calore, dentro resta il freddo.</p><p>Il "camion" che trasporta il calore è un liquido speciale, il <b>refrigerante</b>, che gira in un circuito chiuso di tubi.</p>' },
      { icon: '🔄', title: 'Il viaggio del refrigerante', focus: ['compressore', 'condensatore', 'capillare', 'evaporatore', 'refrigerante-caldo', 'refrigerante-freddo'], explode: 0.3, view: { rx: 0.25, ry: -2.3 },
        html: '<p>Il refrigerante fa sempre lo stesso giro: <b>compressore → condensatore → capillare → evaporatore</b> e di nuovo al compressore.</p><p>In arancione è caldo e compresso, in blu è freddo. Cambia stato in continuazione: da gas a liquido e da liquido a gas.</p>' },
      { icon: '💪', title: '1 · Il compressore spreme', focus: ['compressore', 'refrigerante-caldo'], explode: 0.2, view: { rx: 0.25, ry: -2.6 }, zoom: 1.2,
        html: '<p>Il <b>compressore</b> è una pompa col motore elettrico. Schiaccia il gas refrigerante: un gas compresso si <b>scalda</b>, proprio come la pompa della bici quando gonfi una ruota.</p>' },
      { icon: '♨️', title: '2 · Il condensatore butta fuori il calore', focus: ['condensatore', 'refrigerante-caldo', 'calore'], explode: 0.25, view: { rx: 0.15, ry: -2.75 },
        html: '<p>Il gas caldo attraversa la griglia nera sul retro. Cede il suo calore all\'aria della cucina, si raffredda e diventa <b>liquido</b> (condensazione).</p><p class="tip">🖐️ Ecco perché dietro al frigo l\'aria è tiepida: è il calore tolto ai tuoi cibi!</p>' },
      { icon: '🍝', title: '3 · Il capillare: pressione giù, temperatura giù', focus: ['capillare', 'refrigerante-caldo', 'refrigerante-freddo', 'evaporatore'], explode: 0.2, view: { rx: 0.2, ry: -2.2 },
        html: '<p>Il liquido passa in un tubicino sottile come uno spaghetto. All\'uscita trova tanto spazio: la pressione crolla e il refrigerante diventa <b>gelido</b>, sotto i −20 °C.</p>' },
      { icon: '❄️', title: '4 · L\'evaporatore ruba il calore', focus: ['evaporatore', 'refrigerante-freddo', 'aria-fredda', 'cibi', 'ripiani'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>Nell\'<b>evaporatore</b> il refrigerante bolle e torna gas. Per evaporare ha bisogno di calore e lo prende dall\'aria e dai cibi: così il frigo si raffredda.</p><p>L\'aria fredda è più pesante e <b>scende</b> sui ripiani.</p><p class="tip">💧 Succede anche a te: quando esci dalla piscina, l\'acqua che evapora dalla pelle ti porta via calore e senti freddo.</p>' },
      { icon: '🧱', title: 'Tenere il freddo dentro', focus: ['isolamento', 'guarnizione', 'porta-frigo', 'porta-freezer', 'termostato'], explode: 0.45, view: { rx: 0.2, ry: -0.75 },
        html: '<p>Pareti e porte sono piene di <b>schiuma isolante</b>, e la <b>guarnizione magnetica</b> chiude bene la porta. Il <b>termostato</b> accende il compressore solo quando serve.</p><p class="tip">🚪 Non tenere la porta aperta a lungo e non mettere cibi caldi in frigo: il compressore dovrebbe lavorare molto di più.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'Prima del frigo: le ghiacciaie', html: 'Un tempo si conservava il cibo in <b>ghiacciaie</b>: buche o stanze dove si metteva la neve raccolta d\'inverno, coperta di paglia per farla durare fino all\'estate.' },
      { icon: '🔁', title: 'Un frigo al contrario', html: 'Il <b>condizionatore</b> e la <b>pompa di calore</b> che scalda le case funzionano come un frigorifero: spostano il calore da un posto a un altro.' },
      { icon: '🧪', title: 'Un gas amico dell\'ozono', html: 'I vecchi frigoriferi usavano gas (CFC) che rovinavano lo strato di ozono. Dal 1987 sono vietati in tutto il mondo e oggi lo strato di ozono sta guarendo.' },
      { icon: '⚡', title: 'Sempre acceso', html: 'Il frigorifero è l\'unico elettrodomestico acceso giorno e notte: per questo conviene sceglierlo di classe energetica alta e tenere pulita la griglia dietro.' },
      { icon: '🧑‍🔬', title: 'Einstein e il frigorifero', html: 'Anche Albert Einstein, nel 1930, brevettò insieme a Leó Szilárd un frigorifero senza parti in movimento!' }
    ],
    quiz: [
      { type: 'mc', q: 'Che cosa fa davvero un frigorifero?', options: ['Produce freddo dal nulla', 'Porta il calore da dentro a fuori', 'Usa il ghiaccio comprato', 'Soffia aria dall\'esterno'], answer: 1, explain: 'Il frigorifero è una pompa di calore: toglie calore all\'interno e lo butta fuori dal condensatore.' },
      { type: 'order', q: 'Metti in ordine il viaggio del refrigerante, partendo dal compressore', items: ['Compressore', 'Condensatore', 'Capillare', 'Evaporatore'], explain: 'Compresso e caldo, poi liquido nel condensatore, freddo dopo il capillare, evapora nel freezer e torna al compressore.' },
      { type: 'mc', q: 'Perché dietro al frigorifero l\'aria è tiepida?', options: ['C\'è una stufetta', 'Il condensatore butta fuori il calore tolto ai cibi', 'La lampadina scalda', 'È un difetto'], answer: 1, explain: 'Nel condensatore il refrigerante cede all\'aria della cucina il calore preso dentro al frigo.' },
      { type: 'tf', q: 'Quando un liquido evapora assorbe calore da ciò che ha intorno.', answer: true, explain: 'Per evaporare serve energia: per questo l\'evaporatore raffredda il frigo (e il sudore raffredda la pelle).' },
      { type: 'mc', q: 'A cosa serve la schiuma nelle pareti?', options: ['A rendere il frigo più pesante', 'A isolare: il calore della cucina entra pochissimo', 'A profumare il cibo', 'A fare luce'], answer: 1, explain: 'La schiuma piena di bollicine d\'aria è un ottimo isolante termico.' },
      { type: 'num', q: 'A quanti gradi sotto zero si tiene di solito un freezer? (scrivi solo il numero, senza meno)', answer: 18, explain: 'Il freezer lavora a circa −18 °C; il frigorifero a circa 4 °C.' }
    ]
  });
})();
