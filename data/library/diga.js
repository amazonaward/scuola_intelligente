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
    title: 'La diga',
    intro: 'Una diga ferma un fiume e forma un grande <b>lago</b>. L\'acqua che scende con forza dal lago fa girare una <b>turbina</b> e un <b>generatore</b>: così si produce elettricità senza fumo. È l\'energia <b>idroelettrica</b>!',
    model: {
      rx: 0.45, ry: -1.15, speed: 0.25, height: 480, bg: 'sky', floor: false,
      phases: [ { from: 0, to: 0.55, label: 'Produzione di energia', color: '#16a34a' }, { from: 0.55, to: 0.9, label: 'Lo sfioratore scarica l\'acqua in più', color: '#0284c7' } ],
      parts: [
        { id: 'versanti', name: 'Montagne e valle', label: 'Valle', color: '#65a30d', explode: [0, -0.5, 0],
          info: '<p>Le dighe si costruiscono in <b>valli strette</b> tra le montagne: basta un muro relativamente corto per chiudere la valle e trattenere tantissima acqua.</p>',
          shapes: [ alongX(HILL(-1), -4.2, 5.2), alongX(HILL(1), -4.2, 5.2), alongX([[-2.1, -0.4], [2.1, -0.4], [2.1, -0.15], [-2.1, -0.15]], -4.2, 5.2, '#a16207'),
            ...[[-3.0, 3.5, -3.2], [1.0, 3.5, 3.1], [4.0, 3.6, -3.1], [-1.5, 3.5, 3.3], [2.6, 3.4, -3.3], [-3.6, 3.5, 3.0]].map(([x, y, z]) => ({ t: 'cone', r: 0.25, h: 0.7, n: 10, pos: [x, y, z], color: '#166534' })) ] },
        { id: 'lago', name: 'Lago artificiale (bacino)', label: 'Lago', color: '#0ea5e9', explode: [-0.8, 0, 0],
          info: '<p>Dietro la diga l\'acqua del fiume si accumula e forma un <b>lago</b>. È una grande "riserva" di energia: l\'acqua in alto può scendere e far lavorare le turbine quando serve.</p>',
          more: '<p>L\'acqua in alto ha <b>energia potenziale</b>: più è alta e più è tanta, più energia può dare scendendo. I laghi artificiali servono anche come riserva d\'acqua per l\'irrigazione e per bere, e a proteggere dalle piene.</p>',
          shapes: [ alongX(LAKE, -4.2, -0.38) ] },
        { id: 'diga', name: 'Diga (muro)', label: 'Diga', color: '#d6d3d1', explode: [0, 0.6, 0],
          info: '<p>È un enorme muro di <b>cemento</b>. È molto più spesso alla base che in cima, perché l\'acqua spinge più forte in profondità.</p>',
          more: '<p>La <b>pressione</b> dell\'acqua aumenta di circa 1 atmosfera ogni 10 metri di profondità. Questa è una diga a <b>gravità</b>: resiste alla spinta grazie al suo enorme peso. Altre dighe sono ad <b>arco</b>, curve verso il lago, come un ponte appoggiato alle montagne.</p>',
          shapes: [ { t: 'extrude', d: 6.0, pts: DAM }, { t: 'box', s: [0.75, 0.12, 6.0], pos: [-0.05, 3.06, 0], color: '#a8a29e' },
            ...Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.05, 0.12, 0.05], pos: [0.27, 3.18, -2.5 + k * 0.5], color: '#78716c' })) ] },
        { id: 'presa', name: 'Opera di presa (griglia)', label: 'Presa', color: '#475569', pos: [-0.48, 1.45, ZP], explode: [-0.7, 0.3, 0],
          info: '<p>L\'ingresso dell\'acqua, sott\'acqua sul lato del lago. Una <b>griglia</b> ferma rami, foglie e pesci che potrebbero rovinare la turbina.</p>',
          shapes: [ { t: 'box', s: [0.18, 0.7, 0.7] }, ...[-0.24, -0.08, 0.08, 0.24].map((z) => ({ t: 'box', s: [0.04, 0.7, 0.025], pos: [-0.1, 0, z], color: '#1f2937' })),
            ...[-0.2, 0, 0.2].map((y) => ({ t: 'box', s: [0.04, 0.025, 0.7], pos: [-0.1, y, 0], color: '#1f2937' })) ] },
        { id: 'condotta', name: 'Condotta forzata', label: 'Condotta forzata', color: '#64748b', explode: [0, 0.3, 0.7],
          info: '<p>Un grosso tubo d\'acciaio che porta l\'acqua dal lago giù fino alla centrale. Scendendo, l\'acqua prende velocità e arriva alla turbina con una <b>forza enorme</b>.</p>',
          more: '<p>Nella condotta l\'energia potenziale dell\'acqua diventa <b>energia cinetica</b> (di movimento) e pressione. In alcune centrali di montagna l\'acqua cade da più di 1000 metri e arriva a oltre 100 atmosfere!</p>',
          shapes: [ { t: 'pipe', r: 0.16, n: 16, curve: true, pts: PEN }, ...[1.3, 1.6, 2.0].map((x) => ({ t: 'box', s: [0.12, 0.3, 0.4], pos: [x, x < 1.5 ? 1.0 : 0.45, ZP], color: '#a8a29e' })) ] },
        { id: 'centrale', name: 'Centrale elettrica', label: 'Centrale', color: '#e7e5e4', alpha: 0.3, explode: [0.5, 0.9, 0],
          info: '<p>L\'edificio ai piedi della diga dove ci sono le macchine: turbine, generatori e quadri di controllo. Molte centrali sono addirittura scavate dentro la montagna.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.45, 1.25], pos: [2.95, 0.55, ZP] }, { t: 'box', s: [1.4, 0.06, 1.35], pos: [2.95, 1.3, ZP], color: '#57534e', alpha: 0.9 } ] },
        { id: 'turbina', name: 'Turbina', color: '#2563eb', pos: [2.75, 0.3, ZP], explode: [0.3, 0, 1.2],
          info: '<p>Una grande ruota con pale curve. L\'acqua che arriva dalla condotta la investe e la fa <b>girare</b> velocissima, come il vento fa girare una girandola.</p>',
          more: '<p>Questa è una turbina <b>Francis</b>: l\'acqua entra da una "chiocciola" che le gira intorno (la cassa a spirale) e scende al centro. Per i salti altissimi si usano turbine <b>Pelton</b> a cucchiai, per i salti bassi turbine <b>Kaplan</b>, simili a un\'elica.</p>',
          shapes: [ { t: 'torus', R: 0.34, r: 0.11, n: 24, m: 8, color: '#64748b' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.22, h: 0.06, n: 20, pos: [0, 0.06, 0] },
              ...Array.from({ length: 9 }, (_, k) => ({ t: 'box', s: [0.18, 0.12, 0.02], pos: [0.13 * Math.cos(k * 40 * D), 0, 0.13 * Math.sin(k * 40 * D)], rot: [0, -k * 40 - 35, 15], color: '#93c5fd' })) ] },
            { t: 'cyl', r: 0.14, r2: 0.1, h: 0.35, n: 16, pos: [0, -0.2, 0], color: '#475569' } ] },
        { id: 'generatore', name: 'Generatore (alternatore)', label: 'Generatore', color: '#b45309', pos: [2.75, 0.95, ZP], explode: [0.3, 0.6, 1.2],
          info: '<p>È attaccato alla turbina con un albero. Dentro, grandi <b>calamite</b> girano vicino a <b>bobine di rame</b>: il movimento fa nascere la corrente elettrica.</p>',
          more: '<p>È l\'<b>induzione elettromagnetica</b>, scoperta da Faraday nel 1831: un magnete che si muove vicino a un filo fa scorrere corrente. È un motore elettrico che funziona "al contrario": riceve movimento e dà elettricità.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 10, pos: [0, -0.35, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 3 } }, { t: 'tube', r: 0.36, ri: 0.28, h: 0.36, n: 26, color: '#b45309' },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [ { t: 'cyl', r: 0.26, h: 0.34, n: 20, color: '#dc2626' }, ...[0, 90, 180, 270].map((a) => ({ t: 'box', s: [0.1, 0.35, 0.08], pos: [0.24 * Math.cos(a * D), 0, 0.24 * Math.sin(a * D)], rot: [0, -a, 0], color: a % 180 ? '#2563eb' : '#ef4444' })) ] },
            { t: 'cyl', r: 0.37, h: 0.04, n: 26, pos: [0, 0.2, 0], color: '#78350f' } ] },
        { id: 'trasformatore', name: 'Trasformatore', color: '#57534e', pos: [3.75, 0.25, 1.65], explode: [0.6, 0.3, 0.6],
          info: '<p>Alza la tensione della corrente (fino a centinaia di migliaia di volt) per farla viaggiare lontano lungo i fili perdendone pochissima.</p>',
          shapes: [ { t: 'box', s: [0.45, 0.45, 0.4] }, ...[-0.15, 0, 0.15].map((z) => ({ t: 'cyl', r: 0.035, h: 0.25, n: 8, pos: [0, 0.35, z], color: '#d6d3d1' })),
            ...[-0.15, -0.05, 0.05, 0.15].map((x) => ({ t: 'box', s: [0.03, 0.38, 0.45], pos: [x, 0, 0], color: '#44403c' })) ] },
        { id: 'traliccio', name: 'Traliccio e linea elettrica', label: 'Linea elettrica', color: '#94a3b8', explode: [0.9, 0.3, 0.6],
          info: '<p>I <b>tralicci</b> d\'acciaio tengono in alto i cavi dell\'alta tensione, che portano l\'elettricità alle città, anche a centinaia di chilometri.</p>',
          shapes: [ leg(4.35, 1.4), leg(4.85, 1.4), leg(4.35, 1.9), leg(4.85, 1.9), { t: 'box', s: [0.06, 0.06, 1.2], pos: [4.6, 2.6, 1.65] }, { t: 'box', s: [0.05, 0.05, 0.8], pos: [4.6, 2.2, 1.65] },
            { t: 'cyl', r: 0.03, h: 0.4, n: 6, pos: [4.6, 2.85, 1.65] },
            ...[1.1, 1.65, 2.2].map((z) => ({ t: 'pipe', r: 0.01, n: 4, curve: true, pts: [[3.8, 0.5, z * 0.3 + 1.15], [4.6, 2.55, z], [5.4, 2.4, z], [6.2, 2.5, z]], color: '#1f2937' })) ] },
        { id: 'sfioratore', name: 'Sfioratore e paratoie', label: 'Sfioratore', color: '#f59e0b', explode: [0, 1.0, -0.4],
          info: '<p>Quando piove tanto e il lago è troppo pieno, si aprono le <b>paratoie</b> (grandi porte d\'acciaio) e l\'acqua in più scivola giù dallo <b>sfioratore</b>, senza superare la diga.</p>',
          shapes: [-0.9, -0.6, -0.3].map((z) => ({ t: 'box', s: [0.08, 0.32, 0.28], pos: [-0.25, 3.1, z - 0.15], anim: GATE }))
            .concat([{ t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, -1.23], color: '#a8a29e' }, { t: 'box', s: [0.5, 0.35, 0.05], pos: [0.0, 3.2, 0.03], color: '#a8a29e' }]) },
        { id: 'fiume', name: 'Fiume a valle', label: 'Fiume', color: '#38bdf8', explode: [0.6, -0.3, 0],
          info: '<p>Dopo la turbina l\'acqua torna nel fiume: è la stessa acqua, non è stata consumata né sporcata. Però la diga cambia il fiume: per questo si deve lasciare sempre un po\' d\'acqua (il <b>deflusso minimo</b>) per pesci e piante.</p>',
          shapes: [ alongX([[-1.2, -0.14], [1.2, -0.14], [1.2, 0.0], [-1.2, 0.0]], 1.95, 5.2) ] },
        { id: 'acqua', name: 'Acqua che scorre', label: 'Acqua', color: '#1d4ed8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Segui l\'acqua: entra dalla presa, scende nella condotta, fa girare la turbina e torna nel fiume.</p>',
          shapes: drops(WATER, 18, 0.35, '#1d4ed8').concat(drops(SPILL, 8, 1.2, '#7dd3fc', 0.07, [{ type: 'blink', fade: true, wave: 'window', from: 0.6, to: 0.9, ramp: 0.1 }])) },
        { id: 'corrente', name: 'Corrente elettrica', label: 'Corrente', color: '#facc15', noLabel: true, explode: [0, 0, 0],
          info: '<p>La corrente prodotta dal generatore passa dal trasformatore e parte lungo i cavi dell\'alta tensione verso le nostre case.</p>',
          shapes: drops(ELEC, 10, 0.5, '#facc15', 0.05) }
      ]
    },
    steps: [
      { icon: '💧', title: 'Energia dall\'acqua', explode: 0,
        html: '<p>L\'acqua che scende dall\'alto ha tanta <b>energia</b>: pensa alla forza di una cascata! Una centrale idroelettrica la usa per produrre elettricità.</p><p>È una fonte <b>rinnovabile</b>: la pioggia e la neve riempiono di nuovo il lago, e non si brucia niente.</p>' },
      { icon: '🧱', title: 'La diga trattiene il lago', focus: ['diga', 'lago', 'versanti'], explode: 0, view: { rx: 0.4, ry: 0.85 },
        html: '<p>La <b>diga</b> chiude la valle e l\'acqua del fiume forma un <b>lago</b>. Il muro è molto più spesso in basso: più si va in profondità, più l\'acqua <b>spinge forte</b>.</p><p class="tip">🍾 Fai tre buchi a diverse altezze in una bottiglia piena: l\'acqua del buco più basso schizza più lontano!</p>' },
      { icon: '⬇️', title: 'Giù per la condotta forzata', focus: ['presa', 'condotta', 'acqua'], explode: 0, view: { rx: 0.35, ry: -0.8 },
        html: '<p>L\'acqua entra dalla <b>presa</b>, protetta da una griglia, e scende nella <b>condotta forzata</b>, un grosso tubo d\'acciaio. Scendendo prende velocità: l\'energia dell\'altezza diventa energia di <b>movimento</b>.</p>' },
      { icon: '🌀', title: 'La turbina gira', focus: ['turbina', 'acqua', 'condotta', 'centrale'], explode: 0.3, zoom: 1.4, view: { rx: 0.35, ry: -0.6 },
        html: '<p>Nella centrale l\'acqua colpisce le pale curve della <b>turbina</b> e la fa girare velocissima, come il vento con una girandola. Poi l\'acqua, più lenta, esce e torna nel fiume.</p>' },
      { icon: '🧲', title: 'Il generatore fa la corrente', focus: ['generatore', 'turbina', 'corrente'], explode: 0.3, zoom: 1.4, view: { rx: 0.3, ry: -0.6 },
        html: '<p>La turbina fa girare il <b>generatore</b>: grandi calamite ruotano vicino a bobine di rame e nella bobina nasce la <b>corrente elettrica</b>. È un motore elettrico che funziona al contrario!</p>' },
      { icon: '🗼', title: 'Verso le città', focus: ['trasformatore', 'traliccio', 'corrente'], explode: 0, view: { rx: 0.3, ry: -0.3 },
        html: '<p>Il <b>trasformatore</b> alza la tensione della corrente e i cavi sostenuti dai <b>tralicci</b> la portano lontano, fino alle città e alle nostre case.</p>' },
      { icon: '🌧️', title: 'Quando il lago è troppo pieno', focus: ['sfioratore', 'diga', 'fiume', 'acqua'], loop: [0.5, 0.95], explode: 0, view: { rx: 0.35, ry: -1.0 },
        html: '<p>Dopo piogge abbondanti si aprono le <b>paratoie</b>: l\'acqua in più scivola giù dallo <b>sfioratore</b> senza mettere in pericolo la diga.</p><p class="tip">🐟 Le dighe danno energia pulita, ma cambiano la vita del fiume: per questo devono lasciare sempre scorrere un po\' d\'acqua e a volte hanno delle "scale" per far passare i pesci.</p>' }
    ],
    facts: [
      { icon: '🇨🇳', title: 'La diga più potente', html: 'La diga delle <b>Tre Gole</b>, in Cina, è la centrale elettrica più potente del mondo: produce quanto circa 20 grandi centrali nucleari.' },
      { icon: '🏔️', title: 'L\'Italia delle dighe', html: 'In Italia ci sono più di <b>500 grandi dighe</b>, soprattutto sulle Alpi. Un tempo l\'energia idroelettrica era chiamata il "carbone bianco" e alimentava le prime fabbriche del Nord.' },
      { icon: '🔋', title: 'Una batteria d\'acqua', html: 'Alcune centrali hanno due laghi, uno in alto e uno in basso: quando c\'è energia in più, <b>pompano</b> l\'acqua in alto; quando serve, la fanno ricadere. Funzionano come una gigantesca batteria.' },
      { icon: '⚙️', title: 'La ruota del mulino', html: 'Già più di 2000 anni fa si usavano le <b>ruote ad acqua</b> per macinare il grano: le turbine di oggi sono le loro nipoti super tecnologiche.' }
    ],
    quiz: [
      { type: 'mc', q: 'Perché una diga è più spessa alla base che in cima?', options: ['Per bellezza', 'Perché in profondità l\'acqua spinge più forte', 'Per farci passare le auto', 'Perché il cemento costa poco'], answer: 1, explain: 'La pressione dell\'acqua aumenta con la profondità: in basso la spinta è massima.' },
      { type: 'order', q: 'Metti in ordine il viaggio dell\'energia', items: ['Acqua nel lago', 'Condotta forzata', 'Turbina', 'Generatore', 'Trasformatore e linee elettriche'], explain: 'L\'acqua scende, fa girare la turbina, il generatore produce corrente e le linee la portano lontano.' },
      { type: 'mc', q: 'Che cosa produce la corrente elettrica nel generatore?', options: ['Il fuoco', 'Calamite che girano vicino a bobine di rame', 'L\'acqua che tocca i fili', 'Il sole'], answer: 1, explain: 'È l\'induzione elettromagnetica: un magnete in movimento fa nascere corrente in una bobina.' },
      { type: 'tf', q: 'L\'energia idroelettrica è una fonte rinnovabile.', answer: true, explain: 'Pioggia e neve riempiono di nuovo il lago: l\'acqua non si consuma.' },
      { type: 'mc', q: 'A che cosa serve lo sfioratore?', options: ['A far entrare i pesci nel lago', 'A scaricare l\'acqua in più quando il lago è troppo pieno', 'A produrre più corrente', 'A pulire la turbina'], answer: 1, explain: 'Le paratoie si aprono e l\'acqua in eccesso scende senza superare la diga.' },
      { type: 'mc', q: 'Quale tipo di energia ha l\'acqua ferma in alto nel lago?', options: ['Energia potenziale', 'Energia chimica', 'Energia nucleare', 'Energia luminosa'], answer: 0, explain: 'L\'acqua in alto ha energia potenziale, che diventa energia di movimento scendendo.' }
    ]
  });
})();
