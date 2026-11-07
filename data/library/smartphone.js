/* Lo smartphone, in piedi: lo schermo guarda verso +z, l'alto è +y. Esplodendo, gli strati si separano lungo z.
   Ciclo (1): 0–0.25 un dito tocca lo schermo; il segnale radio parte dall'antenna. */
(function () {
  /* rettangolo arrotondato (piano XY), centrato */
  const rrect = (w, h, r, seg) => {
    const out = [], n = seg || 6, cx = w / 2 - r, cy = h / 2 - r;
    [[cx, cy, 0], [-cx, cy, 90], [-cx, -cy, 180], [cx, -cy, 270]].forEach(([x, y, a0]) => {
      for (let i = 0; i <= n; i++) { const a = (a0 + (i / n) * 90) * Math.PI / 180; out.push([x + r * Math.cos(a), y + r * Math.sin(a)]); }
    });
    return out;
  };
  /* cornice: contorno esterno + foro (poligono "a buco di serratura") */
  const ring = (o, i) => o.concat([o[0], i[0]], i.slice(1).reverse(), [i[0]]);
  const W = 1.5, H = 3.1, RC = 0.22;
  /* icone delle app: griglia 4 × 5 */
  const APP = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7', '#ec4899', '#14b8a6', '#f97316', '#64748b', '#0ea5e9', '#84cc16', '#eab308', '#6366f1', '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4', '#d946ef', '#facc15', '#4ade80'];
  const icons = APP.map((c, k) => ({ t: 'extrude', d: 0.008, pts: rrect(0.22, 0.22, 0.06, 3), pos: [-0.465 + (k % 4) * 0.31, 1.0 - Math.floor(k / 4) * 0.36, 0.012], color: c, decal: 2 }));
  const dock = [0, 1, 2, 3].map((k) => ({ t: 'extrude', d: 0.008, pts: rrect(0.22, 0.22, 0.06, 3), pos: [-0.465 + k * 0.31, -1.18, 0.012], color: ['#22c55e', '#3b82f6', '#f8fafc', '#f59e0b'][k], decal: 2 }));
  /* onde radio: anelli che si allargano e svaniscono */
  const waves = [0, 1, 2].map((k) => ({ t: 'group', anim: [{ type: 'scale', from: 0.3, to: 1.9, wave: 'saw', phase: k / 3 }, { type: 'blink', fade: true, wave: 'rsaw', phase: k / 3 }],
    shapes: [{ t: 'torus', R: 0.4, r: 0.02, n: 28, m: 4, rot: [90, 0, 0], color: '#fbbf24' }] }));
  const chip = (w, h, c, x, y, z) => ({ t: 'box', s: [w, h, 0.05], pos: [x, y, z || 0.035], color: c });

  LIBRARY({
    id: 'smartphone',
    title: 'Lo smartphone',
    intro: 'Lo smartphone è un <b>piccolo computer da tasca</b> che è anche telefono, macchina fotografica, navigatore e lettore di musica. Smontalo strato per strato: dal vetro che senti il tuo dito fino alla batteria!',
    model: {
      rx: 0.18, ry: -0.75, speed: 0.45, height: 470, fit: 0.95,
      parts: [
        { id: 'vetro', name: 'Vetro touch (touchscreen)', label: 'Vetro touch', color: '#bae6fd', alpha: 0.28, pos: [0, 0, 0.11], explode: [0, 0, 1.5],
          info: '<p>È il vetro che tocchi. Sotto c\'è una griglia invisibile di fili sottilissimi che sente dove appoggi il dito, perché il tuo corpo <b>conduce un po\' di elettricità</b>.</p>',
          more: '<p>È un touchscreen <b>capacitivo</b>: le righe e colonne di elettrodi trasparenti (ossido di indio-stagno) formano tanti piccoli condensatori. Il dito ne cambia la carica e il chip calcola le coordinate del tocco più di 100 volte al secondo. Per questo con i guanti normali non funziona!</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'group', pos: [0, 0, 0.02], shapes: Array.from({ length: 5 }, (_, k) => ({ t: 'box', div: 1, s: [0.006, H - 0.3, 0.002], pos: [-0.5 + k * 0.25, 0, 0], color: '#7dd3fc', alpha: 0.5 }))
              .concat(Array.from({ length: 9 }, (_, k) => ({ t: 'box', div: 1, s: [W - 0.25, 0.006, 0.002], pos: [0, -1.36 + k * 0.34, 0], color: '#7dd3fc', alpha: 0.5 }))) },
            { t: 'extrude', d: 0.01, pts: rrect(0.36, 0.09, 0.045, 3), pos: [0, 1.42, 0.02], color: '#0f172a', alpha: 0.9 } ] },
        { id: 'dito', name: 'Il tuo dito', label: 'Tocco', color: '#fda4af', pos: [0.3, -0.2, 0.55], explode: [0, 0, 1.5],
          anim: { type: 'move', dir: [0, 0, -1], amp: 0.36, wave: 'window', from: 0.05, to: 0.35, ramp: 0.35 },
          info: '<p>Quando il dito tocca il vetro, la griglia del touchscreen sente un piccolo cambiamento elettrico proprio in quel punto e il telefono capisce <b>dove</b> hai toccato.</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.5, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.25] }, { t: 'sphere', r: 0.13, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], scale: [1, 0.8, 1] },
            { t: 'cyl', r: 0.17, h: 0.01, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.33], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.17, to: 0.32, ramp: 0.3 } } ] },
        { id: 'display', name: 'Display OLED', label: 'Display', color: '#0f172a', pos: [0, 0, 0.07], explode: [0, 0, 1.05],
          info: '<p>È lo schermo che si illumina. È fatto di milioni di puntini colorati, i <b>pixel</b>: ognuno si accende di rosso, verde o blu e insieme formano le immagini.</p>',
          more: '<p>Nei display <b>OLED</b> ogni sotto-pixel è un minuscolo LED organico che fa luce da solo: il nero è davvero spento, e questo fa risparmiare batteria. Uno smartphone ha circa 2,5 milioni di pixel, più di 400 per ogni pollice.</p>',
          shapes: [ { t: 'extrude', d: 0.025, pts: rrect(W - 0.06, H - 0.06, RC - 0.03, 8) },
            { t: 'extrude', d: 0.006, pts: rrect(W - 0.14, H - 0.14, RC - 0.07, 8), pos: [0, 0, 0.012], color: '#1d4ed8', decal: 1 },
            { t: 'box', s: [W - 0.14, 1.0, 0.004], pos: [0, -0.35, 0.013], color: '#7c3aed', alpha: 0.55, decal: 1 },
            { t: 'box', s: [0.5, 0.06, 0.006], pos: [0, 1.38, 0.014], color: '#e2e8f0', decal: 2 } ].concat(icons, dock) },
        { id: 'telaio', name: 'Telaio (cornice)', label: 'Telaio', color: '#9ca3af', pos: [0, 0, 0], explode: [0, 0, 0],
          info: '<p>È la cornice di metallo che tiene insieme tutto il telefono. Sui lati ci sono i <b>tasti</b> del volume e di accensione.</p>',
          more: '<p>Il telaio è di <b>alluminio</b> o acciaio: leggero e robusto. Spesso alcune parti del bordo sono separate da sottili strisce di plastica perché fanno anche da <b>antenna</b>.</p>',
          shapes: [ { t: 'extrude', d: 0.17, pts: ring(rrect(W + 0.04, H + 0.04, RC + 0.02, 8), rrect(W - 0.06, H - 0.06, RC - 0.03, 8)), smooth: true },
            { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.75, 0], color: '#6b7280' }, { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.45, 0], color: '#6b7280' },
            { t: 'box', s: [0.04, 0.35, 0.05], pos: [0.78, 0.6, 0], color: '#6b7280' },
            { t: 'box', s: [0.42, 0.04, 0.12], pos: [0, -1.56, 0], color: '#111827' },
            { t: 'box', s: [0.22, 0.02, 0.055], pos: [0, -1.575, 0], color: '#475569' } ] },
        { id: 'scheda-logica', name: 'Scheda logica', label: 'Scheda logica', color: '#166534', pos: [0, 0.75, -0.02], explode: [0, 0.25, 0.55],
          info: '<p>È la "scheda madre" del telefono: una piastrina verde piena di chip collegati da piste di rame sottilissime.</p>',
          more: '<p>Per stare in pochi centimetri la scheda è fatta di <b>più strati</b> sovrapposti (anche 10!) e i chip sono impilati uno sopra l\'altro. Ci sono anche i chip per Wi-Fi, Bluetooth, GPS e il modem per la rete mobile.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.3, 0.025] }, chip(0.18, 0.12, '#1f2937', 0.42, -0.4), chip(0.14, 0.14, '#334155', -0.42, -0.42), chip(0.2, 0.1, '#1f2937', -0.4, 0.4),
            chip(0.12, 0.08, '#b45309', 0.45, 0.42), { t: 'box', s: [0.3, 0.06, 0.03], pos: [0, -0.6, 0.025], color: '#d1d5db' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'box', s: [0.025, 0.04, 0.03], pos: [-0.1 + k * 0.05, 0.55, 0.025], color: '#a16207' }))) },
        { id: 'processore', name: 'Processore (SoC)', label: 'Processore', color: '#cbd5e1', pos: [0.05, 0.85, 0.03], explode: [0.25, 0.4, 1.0],
          info: '<p>È il <b>cervello</b> del telefono. In un chip grande come un\'unghia ci sono il processore, la scheda grafica e il "cervello" per l\'intelligenza artificiale.</p>',
          more: '<p>Si chiama <b>SoC</b> (System on a Chip, "sistema su un chip"). Contiene più di 15 miliardi di transistor larghi pochi nanometri e lavora con pochissima energia, per non scaldare troppo e non scaricare la batteria.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.42, 0.03], color: '#166534' }, { t: 'box', s: [0.34, 0.34, 0.04], pos: [0, 0, 0.03] },
            { t: 'box', s: [0.12, 0.12, 0.005], pos: [-0.07, 0.07, 0.052], color: '#94a3b8', decal: 1 },
            { t: 'box', s: [0.06, 0.06, 0.006], pos: [0.1, -0.08, 0.052], color: '#38bdf8', decal: 1, anim: { type: 'blink', color: '#f0f9ff', wave: 'square', rate: 3 } } ] },
        { id: 'memoria', name: 'Memoria (RAM e archivio)', label: 'Memoria', color: '#334155', pos: [-0.4, 1.08, 0.03], explode: [-0.35, 0.35, 0.85],
          info: '<p>Due tipi di memoria: la <b>RAM</b>, il banco di lavoro veloce per le app aperte, e l\'<b>archivio</b> dove restano foto, video e app anche a telefono spento.</p>',
          more: '<p>L\'archivio è una memoria <b>flash</b>: le informazioni restano intrappolate come cariche elettriche dentro minuscole "gabbie" anche senza corrente. 128 GB sono circa mille miliardi di bit!</p>',
          shapes: [ { t: 'box', s: [0.32, 0.22, 0.04] }, { t: 'box', s: [0.3, 0.2, 0.004], pos: [0, 0, 0.022], color: '#475569', decal: 1 } ] },
        { id: 'batteria', name: 'Batteria', color: '#1f2937', pos: [0, -0.55, -0.02], explode: [0, -0.2, -0.6],
          info: '<p>È il "serbatoio" di energia: una batteria piatta al <b>litio</b> che si ricarica centinaia di volte. Occupa quasi metà del telefono!</p>',
          more: '<p>Durante la ricarica gli ioni di litio si spostano da un lato all\'altro della batteria; usando il telefono tornano indietro e fanno scorrere la corrente. Non lasciarla al sole: il calore la rovina e può essere pericoloso.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: rrect(1.25, 1.75, 0.06, 3) }, { t: 'box', s: [1.1, 0.6, 0.004], pos: [0, 0.2, 0.037], color: '#e2e8f0', decal: 1 },
            { t: 'box', s: [0.6, 0.08, 0.004], pos: [0, 0.32, 0.04], color: '#16a34a', decal: 2 }, { t: 'box', s: [0.3, 0.12, 0.03], pos: [0, 0.92, 0], color: '#b45309' },
            { t: 'group', pos: [-0.35, 0.08, 0.042], shapes: [0, 1, 2, 3].map((k) => ({ t: 'box', s: [0.12, 0.16, 0.004], pos: [k * 0.14, 0, 0], color: '#22c55e', decal: 2, anim: { type: 'blink', fade: true, wave: 'window', from: k * 0.2, to: 0.95, ramp: 0.05, cycle: 1 } })) } ] },
        { id: 'fotocamere', name: 'Fotocamere', color: '#111827', pos: [-0.42, 1.12, -0.12], explode: [0, 0.05, -1.6],
          info: '<p>Le fotocamere hanno una piccola <b>lente</b> che raccoglie la luce e un <b>sensore</b> che la trasforma in numeri: così nasce una foto.</p>',
          more: '<p>Il sensore è una griglia di milioni di fotodiodi: ognuno misura quanta luce lo colpisce. Più fotocamere servono per zoom diversi (grandangolo, tele) e il processore unisce più scatti per foto migliori, anche al buio.</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: rrect(0.6, 0.6, 0.14, 5), pos: [0, 0, -0.01], color: '#374151' } ].concat(
            [[-0.13, 0.13], [-0.13, -0.13], [0.14, 0]].map(([x, y]) => ({ t: 'group', pos: [x, y, -0.05], shapes: [
              { t: 'cyl', r: 0.105, h: 0.06, n: 28, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.08, h: 0.065, n: 28, rot: [90, 0, 0], color: '#0f172a' },
              { t: 'sphere', r: 0.06, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], pos: [0, 0, -0.03], color: '#1e3a8a' } ] })),
            [{ t: 'cyl', r: 0.03, h: 0.02, n: 12, rot: [90, 0, 0], pos: [0.15, 0.2, -0.04], color: '#fef9c3' }]) },
        { id: 'antenne', name: 'Antenne', color: '#f59e0b', pos: [0, 0, 0], explode: [0.9, 0, 0],
          info: '<p>Le antenne mandano e ricevono <b>onde radio</b>, invisibili, che viaggiano alla velocità della luce fino al ripetitore più vicino. Così parli, chatti e navighi.</p>',
          more: '<p>Uno smartphone ha antenne diverse per 4G/5G, Wi-Fi, Bluetooth, GPS e NFC (quello per pagare avvicinando il telefono). Le onde radio portano i dati come 0 e 1, cambiando di continuo la loro forma.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, 1.52, 0.02], [0.5, 1.52, 0.02]] }, { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, -1.52, 0.02], [0.5, -1.52, 0.02]] },
            { t: 'pipe', r: 0.014, n: 6, pts: [[0.73, 0.2, 0], [0.73, -0.5, 0]] },
            { t: 'group', pos: [0, 1.6, 0], shapes: waves } ] },
        { id: 'altoparlante', name: 'Altoparlante e microfono', label: 'Altoparlante', color: '#475569', pos: [0.4, -1.38, 0], explode: [0.35, -0.5, 0.35],
          info: '<p>L\'<b>altoparlante</b> fa vibrare l\'aria e produce i suoni. Il <b>microfono</b> fa il contrario: sente le vibrazioni della tua voce e le trasforma in segnali elettrici.</p>',
          more: '<p>Nell\'altoparlante una bobina percorsa dalla corrente si muove avanti e indietro vicino a un magnete e spinge una membrana. Il microfono degli smartphone (MEMS) è un chip con una membrana di silicio più sottile di un capello.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.18, 0.1], anim: { type: 'scale', axis: 'z', from: 1, to: 1.25, wave: 'sin', rate: 6 } }, { t: 'box', s: [0.3, 0.1, 0.01], pos: [0, 0, 0.055], color: '#9ca3af', decal: 1 },
            { t: 'box', s: [0.08, 0.08, 0.06], pos: [-0.75, 0, 0], color: '#64748b' } ] },
        { id: 'vibrazione', name: 'Motorino della vibrazione', label: 'Vibrazione', color: '#a16207', pos: [-0.45, -1.35, 0], explode: [-0.4, -0.5, 0.35],
          info: '<p>Un minuscolo motore con un peso spostato da un lato: quando gira, fa <b>tremare</b> il telefono. Così senti le notifiche anche in tasca.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 0.22, n: 16, rot: [0, 0, 90], color: '#9ca3af' },
            { t: 'group', pos: [0.15, 0, 0], anim: { type: 'spin', axis: 'x', rate: 6 }, shapes: [ { t: 'cyl', r: 0.065, h: 0.06, n: 16, rot: [0, 0, 90], color: '#a16207' }, { t: 'box', s: [0.06, 0.06, 0.06], pos: [0, 0.05, 0] } ] } ] },
        { id: 'scocca', name: 'Scocca posteriore', label: 'Scocca', color: '#334155', pos: [0, 0, -0.1], explode: [0, 0, -1.25],
          info: '<p>È il "dorso" del telefono, di vetro o plastica. Protegge l\'interno e lascia passare le onde radio e la ricarica senza fili.</p>',
          more: '<p>Sotto la scocca di molti telefoni c\'è una <b>bobina</b> di rame per la ricarica wireless: il caricatore crea un campo magnetico che cambia e la bobina lo trasforma di nuovo in corrente (induzione).</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'tube', r: 0.36, ri: 0.24, h: 0.012, n: 32, rot: [90, 0, 0], pos: [0, -0.3, 0.022], color: '#b45309' },
            { t: 'box', s: [0.6, 0.6, 0.02], pos: [-0.42, 1.12, -0.018], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '📱', title: 'Un computer in tasca', explode: 0, view: { rx: 0.18, ry: -0.75 },
        html: '<p>Dentro lo smartphone ci sono gli stessi pezzi di un computer: <b>processore</b>, <b>memoria</b>, <b>schermo</b> e <b>batteria</b>, ma schiacciati in meno di un centimetro di spessore!</p><p class="tip">🔁 Come ogni computer: <b>ingresso</b> (touch, microfono, fotocamera) → <b>elaborazione</b> (processore) → <b>uscita</b> (schermo, altoparlante).</p>' },
      { icon: '👆', title: 'Il vetro che sente il dito', focus: ['vetro', 'dito', 'display'], explode: 0.35, loop: [0, 0.45], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Sotto il vetro c\'è una griglia invisibile di fili. Il tuo dito conduce un pochino di elettricità: quando tocchi, la griglia "sente" un cambiamento proprio in quel punto.</p><p>Un chip calcola la posizione del tocco e la manda al processore: così il telefono sa quale app hai toccato.</p><p class="tip">🧤 Prova con un guanto di lana: non funziona, perché la lana non conduce!</p>' },
      { icon: '🌈', title: 'Milioni di pixel colorati', focus: ['display'], explode: 0.5, zoom: 1.15, view: { rx: 0.05, ry: -0.35 },
        html: '<p>Lo schermo è fatto di milioni di puntini, i <b>pixel</b>. Ogni pixel ha tre lucine: <b>rossa</b>, <b>verde</b> e <b>blu</b>. Accendendole più o meno forte si ottengono tutti i colori.</p><p>Nei display OLED ogni lucina fa luce da sola; il nero è un pixel spento.</p>' },
      { icon: '🧠', title: 'Il cervello: processore e memoria', focus: ['scheda-logica', 'processore', 'memoria'], explode: 0.8, view: { rx: 0.2, ry: -0.55 },
        html: '<p>Il <b>processore</b> (SoC) esegue le istruzioni delle app miliardi di volte al secondo. La <b>RAM</b> tiene le app aperte, l\'<b>archivio</b> conserva foto, musica e messaggi anche a telefono spento.</p><p>Tutto è collegato dalla <b>scheda logica</b>, piena di piste di rame.</p>' },
      { icon: '🔋', title: 'La batteria al litio', focus: ['batteria', 'scocca'], explode: 0.7, view: { rx: 0.2, ry: -2.4 },
        html: '<p>La batteria è il pezzo più grande. Dentro, piccolissime particelle chiamate <b>ioni di litio</b> si spostano da una parte all\'altra: quando carichi il telefono vanno in un verso, quando lo usi tornano indietro e fanno scorrere la corrente.</p><p class="tip">🌡️ Le batterie odiano il caldo: non lasciare il telefono al sole o sotto il cuscino mentre si carica.</p>' },
      { icon: '📡', title: 'Onde radio invisibili', focus: ['antenne', 'telaio', 'scheda-logica'], explode: 0.25, view: { rx: 0.25, ry: -0.5 },
        html: '<p>Quando mandi un messaggio, le <b>antenne</b> lo trasformano in <b>onde radio</b>: viaggiano alla velocità della luce fino a un ripetitore (la "cella"), che lo passa alla rete fino al telefono del tuo amico.</p><p>Le stesse onde, ma diverse, servono per Wi-Fi, Bluetooth e GPS.</p>' },
      { icon: '📸', title: 'Fotocamere, suoni e vibrazione', focus: ['fotocamere', 'altoparlante', 'vibrazione'], explode: 0.6, view: { rx: 0.2, ry: -2.3 },
        html: '<p>Le <b>fotocamere</b> raccolgono la luce con una piccola lente e la trasformano in numeri con un sensore. L\'<b>altoparlante</b> fa vibrare l\'aria, il <b>microfono</b> sente la tua voce, e il <b>motorino</b> con un peso storto fa vibrare il telefono.</p>' }
    ],
    facts: [
      { icon: '🚀', title: 'Più potente delle missioni lunari', html: 'Il computer che guidò l\'Apollo 11 sulla Luna nel 1969 era migliaia di volte meno potente del telefono che hai in tasca.' },
      { icon: '📞', title: 'Il primo cellulare', html: 'Il primo telefono cellulare (1973) pesava più di un chilo, si chiamava "il mattone" e la batteria durava 30 minuti di chiamata.' },
      { icon: '⛏️', title: 'Una miniera in tasca', html: 'In uno smartphone ci sono più di 30 elementi chimici diversi, anche un po\' di <b>oro</b> e argento. Per questo è importante <b>riciclarlo</b> e non buttarlo nel cestino.' },
      { icon: '🛰️', title: 'Il GPS ascolta lo spazio', html: 'Per sapere dove sei, il telefono riceve i segnali di almeno 4 satelliti e calcola la tua posizione dal tempo che impiegano ad arrivare.' },
      { icon: '🔟', title: 'Un pollice, molti pixel', html: 'Su uno schermo di smartphone ci sono più di 400 pixel per ogni pollice (2,5 cm): così vicini che l\'occhio non riesce a distinguerli.' }
    ],
    quiz: [
      { type: 'mc', q: 'Come fa il touchscreen a capire dove tocchi?', options: ['Con una telecamera sotto il vetro', 'Sente il piccolo cambiamento elettrico del dito', 'Misura il calore del dito', 'Ascolta il rumore del tocco'], answer: 1, explain: 'Il dito conduce elettricità e cambia la carica della griglia invisibile sotto il vetro.' },
      { type: 'mc', q: 'Quali tre colori formano ogni pixel dello schermo?', options: ['Rosso, giallo, blu', 'Rosso, verde, blu', 'Bianco, nero, grigio', 'Verde, viola, arancione'], answer: 1, explain: 'RGB: rosso (Red), verde (Green) e blu (Blue). Mescolati formano tutti i colori.' },
      { type: 'tf', q: 'Le foto restano nella memoria del telefono anche quando lo spegni.', answer: true, explain: 'Le foto sono nell\'archivio (memoria flash), che non si cancella senza corrente. La RAM invece sì.' },
      { type: 'mc', q: 'Come viaggiano i messaggi dal telefono al ripetitore?', options: ['Con onde radio', 'Con un cavo invisibile', 'Con il suono', 'Con la luce del flash'], answer: 0, explain: 'Le antenne trasformano i dati in onde radio, che viaggiano alla velocità della luce.' },
      { type: 'mc', q: 'Qual è il pezzo più grande dentro lo smartphone?', options: ['Il processore', 'La batteria', 'Il microfono', 'La fotocamera'], answer: 1, explain: 'La batteria al litio occupa quasi metà dello spazio interno.' },
      { type: 'order', q: 'Metti in ordine: tocchi l\'icona di un\'app…', items: ['Il vetro touch sente il dito', 'Il processore capisce quale app hai scelto', 'La memoria carica l\'app', 'Il display mostra l\'app aperta'], explain: 'Ingresso (touch) → elaborazione (processore e memoria) → uscita (display).' }
    ]
  });
})();
