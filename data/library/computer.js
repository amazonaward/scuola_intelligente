/* Il computer (PC fisso). Formato: data/library/FORMATO.md */
(function () {
  /* ventola generica: asse lungo y locale, gira (spin) */
  const fan = (r, color, rate) => [
    { t: 'tube', r: r, ri: r * 0.9, h: 0.06, n: 28, color: '#1f2937' },
    { t: 'group', anim: { type: 'spin', axis: 'y', rate: rate || 3 }, shapes: [
      { t: 'cyl', r: r * 0.28, h: 0.07, n: 16, color: '#374151' }
    ].concat(Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [r * 0.62, 0.012, r * 0.3], pos: [r * 0.58, 0, 0], rot: [28, 0, 0], color: color }] }))) }
  ];
  const keys = [];
  for (let row = 0; row < 3; row++) for (let i = 0; i < 13; i++) keys.push({ t: 'box', decal: 1, s: [0.11, 0.045, 0.1], pos: [-0.81 + i * 0.135, 0.05, -0.2 + row * 0.135], color: row === 0 && i > 10 ? '#fbbf24' : '#f1f5f9' });
  keys.push({ t: 'box', decal: 1, s: [0.7, 0.045, 0.1], pos: [-0.05, 0.05, 0.205], color: '#f1f5f9' });
  keys.push({ t: 'box', decal: 1, s: [0.24, 0.045, 0.1], pos: [0.7, 0.05, 0.205], color: '#f1f5f9' });
  const caps = Array.from({ length: 6 }, (_, k) => ({ t: 'cyl', r: 0.03, h: 0.08, n: 10, pos: [-0.62 + k * 0.07, -0.62, 0.06], rot: [90, 0, 0], color: k % 2 ? '#1e293b' : '#475569' }));

  LIBRARY({
    id: 'computer',
    title: 'Il computer',
    intro: 'Un computer è una macchina che <b>segue istruzioni</b> velocissima: riceve dati (tastiera, mouse), li <b>elabora</b> e mostra il risultato (monitor). Apri il case di vetro e scopri tutti i suoi pezzi!',
    model: {
      rx: 0.3, ry: -0.42, speed: 0.6, height: 470,
      parts: [
        { id: 'case', name: 'Case (involucro)', label: 'Case', color: '#374151', pos: [1.6, 1.05, -0.3], explode: [0, 0, 0],
          info: '<p>È la "scatola" che tiene insieme e protegge tutti i pezzi. Ha un pannello di vetro per guardare dentro, le prese d\'aria e il <b>pulsante di accensione</b>.</p>',
          more: '<p>Il case è di acciaio o alluminio: oltre a proteggere, fa da <b>schermo</b> contro i disturbi elettromagnetici e guida l\'aria fresca dal davanti verso il retro.</p>',
          shapes: [
            { t: 'box', s: [2, 2, 0.04], pos: [0, 0, -0.43] },
            { t: 'box', s: [2, 0.05, 0.9], pos: [0, 0.975, 0] },
            { t: 'box', s: [2, 0.05, 0.9], pos: [0, -0.975, 0] },
            { t: 'box', s: [0.06, 2, 0.9], pos: [0.97, 0, 0], color: '#1f2937' },
            { t: 'box', s: [0.04, 2, 0.9], pos: [-0.98, 0, 0] },
            { t: 'box', s: [2, 2, 0.02], pos: [0, 0, 0.44], color: '#bfdbfe', alpha: 0.13 },
            { t: 'cyl', r: 0.06, h: 0.03, pos: [1.01, 0.8, 0.1], rot: [0, 0, 90], color: '#22c55e' },
            { t: 'box', s: [0.01, 1.4, 0.04], pos: [1.005, -0.1, -0.25], color: '#38bdf8' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [0.85, -1.02, 0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [-0.85, -1.02, 0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [0.85, -1.02, -0.35], color: '#111827' },
            { t: 'box', s: [0.15, 0.04, 0.12], pos: [-0.85, -1.02, -0.35], color: '#111827' }
          ] },
        { id: 'scheda-madre', name: 'Scheda madre', color: '#15803d', pos: [1.45, 1.2, -0.68], explode: [0, 0, 0.35],
          info: '<p>È la "città" del computer: una grande piastra con <b>strade di rame</b> (piste) che collegano tutti i pezzi tra loro, come le vie collegano le case.</p>',
          more: '<p>Contiene lo <b>zoccolo</b> (socket) per la CPU, gli slot per la RAM e per le schede, il <b>chipset</b> che smista il traffico dei dati e un piccolo chip (BIOS/UEFI) con il primo programma che parte all\'accensione.</p>',
          shapes: [
            { t: 'box', s: [1.5, 1.55, 0.04] },
            { t: 'box', s: [0.42, 0.42, 0.03], pos: [-0.2, 0.35, 0.03], color: '#d1d5db' },
            { t: 'box', s: [0.2, 0.2, 0.05], pos: [0.3, -0.42, 0.04], color: '#1f2937' },
            { t: 'box', s: [1.0, 0.06, 0.06], pos: [-0.12, -0.25, 0.05], color: '#111827' },
            { t: 'box', s: [1.0, 0.06, 0.06], pos: [-0.12, -0.6, 0.05], color: '#111827' },
            { t: 'box', s: [0.05, 0.95, 0.05], pos: [0.32, 0.3, 0.04], color: '#111827' },
            { t: 'box', s: [0.05, 0.95, 0.05], pos: [0.42, 0.3, 0.04], color: '#111827' },
            { t: 'box', s: [0.16, 0.5, 0.26], pos: [-0.68, 0.42, 0.15], color: '#9ca3af' }
          ].concat(caps) },
        { id: 'cpu', name: 'CPU (processore)', label: 'CPU', color: '#cbd5e1', pos: [1.25, 1.55, -0.635], explode: [0, 0.2, 1.25],
          info: '<p>È il <b>cervello</b> del computer: esegue le istruzioni dei programmi una dopo l\'altra, <b>miliardi di volte al secondo</b>. Fa calcoli e prende decisioni ("se… allora…").</p>',
          more: '<p>Dentro ci sono <b>miliardi di transistor</b>, interruttori minuscoli che si accendono e spengono (1 e 0). La velocità si misura in gigahertz: 3 GHz = 3 miliardi di "colpi" di orologio al secondo. Le CPU moderne hanno più <b>core</b>, cioè più cervelli che lavorano insieme.</p>',
          shapes: [ { t: 'box', s: [0.34, 0.34, 0.03], color: '#166534' }, { t: 'box', s: [0.27, 0.27, 0.03], pos: [0, 0, 0.025] } ] },
        { id: 'dissipatore', name: 'Dissipatore', color: '#d1d5db', pos: [1.25, 1.55, -0.38], explode: [0, 0.25, 2.05],
          info: '<p>La CPU lavorando si scalda tantissimo. Il dissipatore è fatto di tante <b>alette di metallo</b> che portano via il calore, come un termosifone al contrario.</p>',
          more: '<p>I <b>tubi di rame</b> (heat pipe) contengono un liquido che evapora vicino alla CPU e si ricondensa tra le alette: così il calore viaggia velocissimo. Tra CPU e dissipatore si mette la <b>pasta termica</b>.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.3, 0.05], pos: [0, 0, -0.23], color: '#b45309' } ]
            .concat(Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.3, 0.014, 0.42], pos: [0, -0.27 + k * 0.054, 0.02] })))
            .concat([-0.08, 0, 0.08].map((x) => ({ t: 'cyl', r: 0.022, h: 0.64, n: 8, pos: [x, 0, 0.02], color: '#c2410c' }))) },
        { id: 'ventola-cpu', name: 'Ventola della CPU', label: 'Ventola CPU', color: '#60a5fa', pos: [1.45, 1.55, -0.36], rot: [0, 0, 90], explode: [0.7, 0.25, 2.05],
          info: '<p>Soffia aria fresca tra le alette del dissipatore, così il calore se ne va più in fretta. Più la CPU lavora, più la ventola gira veloce.</p>',
          shapes: fan(0.25, '#60a5fa', 3) },
        { id: 'ram', name: 'RAM (memoria di lavoro)', label: 'RAM', color: '#1e3a8a', pos: [1.82, 1.5, -0.51], explode: [0.45, 0.1, 1.45],
          info: '<p>È il <b>banco di lavoro</b> del computer: tiene i dati dei programmi aperti, così la CPU li prende al volo. È velocissima, ma quando spegni il computer <b>si cancella tutto</b>.</p>',
          more: '<p>RAM vuol dire <i>Random Access Memory</i>: si può leggere qualsiasi punto in pochi nanosecondi. Un PC di oggi ha di solito 8–32 GB di RAM. Se è poca, il computer diventa lento perché deve usare il disco.</p>',
          shapes: [-0.05, 0.05].map((x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
            { t: 'box', s: [0.035, 0.9, 0.28] },
            { t: 'box', s: [0.04, 0.9, 0.03], pos: [0, 0, 0.15], color: '#a855f7', anim: { type: 'blink', color: '#22d3ee', rate: 0.5, phase: x } }
          ] })) },
        { id: 'ssd', name: 'SSD (memoria di massa)', label: 'SSD', color: '#111827', pos: [1.25, 1.12, -0.645], explode: [0, -0.05, 1.15],
          info: '<p>È il "magazzino" dove restano salvati programmi, foto e giochi <b>anche a computer spento</b>. Non ha parti in movimento: usa chip di memoria flash, come una chiavetta USB.</p>',
          more: '<p>SSD significa <i>Solid State Drive</i>. È molto più veloce del vecchio <b>disco rigido</b> (HDD) con i piatti che girano. Quando apri un programma, i suoi dati vengono copiati dall\'SSD alla RAM.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.17, 0.02] }, { t: 'box', s: [0.34, 0.12, 0.006], pos: [-0.05, 0, 0.013], decal: 2, color: '#f97316' }, { t: 'box', s: [0.1, 0.1, 0.012], pos: [0.22, 0, 0.014], color: '#334155' } ] },
        { id: 'scheda-video', name: 'Scheda video (GPU)', label: 'Scheda video', color: '#1f2937', pos: [1.3, 0.83, -0.425], explode: [0, -0.5, 1.6],
          info: '<p>Disegna le immagini che vedi sullo schermo: calcola il colore di <b>milioni di pixel</b>, circa <b>60 volte al secondo</b>. Nei videogiochi lavora tantissimo!</p>',
          more: '<p>La GPU ha migliaia di piccoli core che lavorano <b>in parallelo</b>: è perfetta per fare tante operazioni uguali insieme. Per questo oggi si usa anche per addestrare l\'<b>intelligenza artificiale</b>.</p>',
          shapes: [
            { t: 'box', s: [1.3, 0.12, 0.47] },
            { t: 'box', s: [1.3, 0.03, 0.45], pos: [0, 0.075, 0], color: '#065f46' },
            { t: 'box', s: [1.3, 0.02, 0.05], pos: [0, 0.07, 0.22], color: '#ef4444' },
            { t: 'box', s: [0.04, 0.18, 0.5], pos: [-0.67, 0.02, 0.0], color: '#9ca3af' },
            { t: 'group', pos: [0.3, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) },
            { t: 'group', pos: [-0.25, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) }
          ] },
        { id: 'alimentatore', name: 'Alimentatore', color: '#111827', pos: [1.0, 0.31, -0.32], explode: [-0.2, -0.35, 1.35],
          info: '<p>Prende la corrente della presa di casa (230 volt, troppo forte!) e la trasforma in corrente <b>più debole e continua</b> (12, 5 e 3,3 volt) adatta a ogni pezzo.</p>',
          more: '<p>La corrente della presa è <b>alternata</b>: cambia verso 50 volte al secondo. L\'alimentatore la abbassa, la "raddrizza" e la rende stabile. Un buon alimentatore spreca poca energia in calore.</p>',
          shapes: [
            { t: 'box', s: [0.75, 0.42, 0.82] },
            { t: 'group', pos: [0, 0.2, 0.05], shapes: fan(0.22, '#4b5563', 2) },
            { t: 'box', s: [0.3, 0.005, 0.2], pos: [0.15, 0.212, -0.28], color: '#fbbf24' },
            { t: 'pipe', r: 0.035, curve: true, pts: [[0.3, 0.2, -0.3], [0.4, 0.5, -0.35], [0.55, 1.0, -0.3], [0.62, 1.3, -0.32]], color: '#f59e0b' },
            { t: 'pipe', r: 0.03, curve: true, pts: [[0.25, 0.2, -0.2], [0.35, 0.45, -0.15], [0.4, 0.55, -0.1]], color: '#ef4444' }
          ] },
        { id: 'ventola-case', name: 'Ventola del case', label: 'Ventola case', color: '#a78bfa', pos: [0.67, 1.6, -0.35], rot: [0, 0, 90], explode: [-0.9, 0.1, 0.6],
          info: '<p>Butta fuori dal case l\'aria calda. Insieme alla ventola della CPU crea una <b>corrente d\'aria</b>: entra fresca davanti, esce calda dietro.</p>',
          shapes: fan(0.27, '#a78bfa', 2) },
        { id: 'monitor', name: 'Monitor', color: '#1f2937', pos: [-1.0, 0, -0.4], explode: [-0.7, 0.15, 0],
          info: '<p>È un dispositivo di <b>uscita</b> (output): mostra le immagini preparate dalla scheda video. Lo schermo è fatto di milioni di puntini, i <b>pixel</b>.</p>',
          more: '<p>Ogni pixel ha tre luci: <b>rossa, verde e blu</b> (RGB). Mescolandole con intensità diverse si ottengono milioni di colori. Uno schermo Full HD ha 1920 × 1080 = più di 2 milioni di pixel.</p>',
          shapes: [
            { t: 'box', s: [0.8, 0.04, 0.45], pos: [0, 0.02, 0], color: '#374151' },
            { t: 'box', s: [0.12, 0.75, 0.07], pos: [0, 0.42, -0.08], color: '#4b5563' },
            { t: 'box', s: [2.3, 1.35, 0.08], pos: [0, 1.35, 0] },
            { t: 'box', s: [2.18, 1.23, 0.01], pos: [0, 1.37, 0.045], decal: 1, color: '#2563eb' },
            { t: 'box', s: [1.0, 0.6, 0.006], pos: [-0.25, 1.45, 0.052], decal: 2, color: '#f8fafc' },
            { t: 'box', s: [1.0, 0.08, 0.008], pos: [-0.25, 1.71, 0.054], decal: 2, color: '#4c7cf3' },
            { t: 'box', s: [0.5, 0.05, 0.008], pos: [-0.38, 1.5, 0.056], decal: 2, color: '#94a3b8' },
            { t: 'box', s: [0.7, 0.05, 0.008], pos: [-0.28, 1.38, 0.056], decal: 2, color: '#cbd5e1' },
            { t: 'box', s: [0.45, 0.35, 0.007], pos: [0.62, 1.15, 0.053], decal: 2, color: '#fde68a' },
            { t: 'box', s: [2.18, 0.08, 0.008], pos: [0, 0.795, 0.053], decal: 2, color: '#0f172a' },
            { t: 'box', s: [0.02, 0.07, 0.01], pos: [-0.5, 1.38, 0.06], decal: 3, color: '#111827', anim: { type: 'blink', fade: true, wave: 'square', rate: 2 } }
          ] },
        { id: 'tastiera', name: 'Tastiera', color: '#334155', pos: [-0.9, 0.03, 0.75], explode: [0, 0, 0.75],
          info: '<p>È un dispositivo di <b>ingresso</b> (input): ogni tasto che premi chiude un piccolo circuito e manda al computer un <b>codice</b>, un numero che indica la lettera.</p>',
          more: '<p>La disposizione delle lettere si chiama <b>QWERTY</b> (le prime sei lettere in alto a sinistra) ed è stata inventata per le macchine da scrivere nel 1870 circa.</p>',
          shapes: [ { t: 'box', s: [1.9, 0.06, 0.62] } ].concat(keys) },
        { id: 'mouse', name: 'Mouse', color: '#e5e7eb', pos: [0.55, 0.0, 0.85], explode: [0.6, 0, 0.6],
          info: '<p>Anche il mouse è un dispositivo di <b>ingresso</b>: una piccola telecamera sotto guarda il tavolo e capisce come lo muovi; così la freccia si sposta sullo schermo.</p>',
          more: '<p>Il sensore ottico scatta migliaia di "foto" al secondo della superficie e le confronta per calcolare lo spostamento. Il primo mouse (1964, Douglas Engelbart) era di legno!</p>',
          shapes: [
            { t: 'sphere', r: 1, n: 10, hemi: true, scale: [0.17, 0.12, 0.27] },
            { t: 'cyl', r: 0.028, h: 0.03, n: 12, pos: [0, 0.115, -0.1], rot: [0, 0, 90], color: '#ef4444' },
            { t: 'box', s: [0.004, 0.02, 0.14], pos: [0, 0.11, -0.13], color: '#94a3b8' }
          ] }
      ]
    },
    steps: [
      { icon: '🔌', title: 'Si accende!', focus: ['alimentatore', 'case'], explode: 0.25, view: { rx: 0.3, ry: -0.2 },
        html: '<p>Premi il <b>pulsante verde</b> sul case. L\'<b>alimentatore</b> prende la corrente della presa e la trasforma in corrente più debole, adatta ai delicati circuiti del computer.</p><p class="tip">⚠️ Mai aprire un computer acceso o attaccato alla presa!</p>' },
      { icon: '🏙️', title: 'La scheda madre collega tutto', focus: ['scheda-madre'], explode: 0.5,
        html: '<p>La corrente arriva alla <b>scheda madre</b>. È come una città: le piste di rame sono strade su cui viaggiano elettricità e dati tra un pezzo e l\'altro.</p><p>Per primo parte un piccolo programma (il <b>BIOS</b>) che controlla che tutto funzioni.</p>' },
      { icon: '📦', title: 'Dal magazzino al banco di lavoro', focus: ['ssd', 'ram'], explode: 0.75,
        html: '<p>I programmi sono salvati nell\'<b>SSD</b>, il magazzino che non dimentica. Quando apri un gioco, i suoi dati vengono copiati nella <b>RAM</b>, il banco di lavoro: è velocissima, ma si svuota quando spegni.</p><p class="tip">🧠 È come prendere un libro dalla libreria (SSD) e aprirlo sul banco (RAM).</p>' },
      { icon: '🧠', title: 'La CPU esegue le istruzioni', focus: ['cpu', 'ram'], explode: 0.85,
        html: '<p>La <b>CPU</b> legge dalla RAM le istruzioni del programma e le esegue una dopo l\'altra: somma, confronta, decide. Lo fa <b>miliardi di volte al secondo</b>!</p><p>Per lei tutto è fatto di <b>0 e 1</b>: corrente spenta o accesa.</p>' },
      { icon: '🌬️', title: 'Rinfrescarsi!', focus: ['dissipatore', 'ventola-cpu', 'ventola-case', 'cpu'], explode: 0.5,
        html: '<p>Tanto lavoro produce <b>calore</b>. Il <b>dissipatore</b> lo raccoglie con le sue alette, la <b>ventola</b> soffia via l\'aria calda e la ventola del case la butta fuori.</p><p>Senza raffreddamento la CPU si spegnerebbe da sola per non bruciarsi.</p>' },
      { icon: '🎨', title: 'La scheda video disegna', focus: ['scheda-video', 'monitor'], explode: 0.6,
        html: '<p>La <b>scheda video</b> calcola il colore di ogni pixel e manda l\'immagine al <b>monitor</b> attraverso un cavo, circa 60 volte al secondo: per questo vedi le cose muoversi in modo fluido.</p>' },
      { icon: '⌨️', title: 'Tu comandi: ingresso ed uscita', focus: ['tastiera', 'mouse', 'monitor'], explode: 0, view: { rx: 0.45, ry: -0.6 },
        html: '<p><b>Tastiera e mouse</b> sono dispositivi di <b>ingresso</b> (input): portano i tuoi comandi dentro al computer. Il <b>monitor</b> è un dispositivo di <b>uscita</b> (output).</p><p class="tip">🔁 Ingresso → elaborazione (CPU) → uscita: è il ciclo di ogni computer, anche dello smartphone!</p>' }
    ],
    facts: [
      { icon: '🐘', title: 'Il gigante ENIAC', html: 'Uno dei primi computer, l\'ENIAC (1946), pesava 27 tonnellate e occupava una stanza intera. Il tuo telefono è milioni di volte più potente!' },
      { icon: '🦋', title: 'Il primo "bug"', html: 'Nel 1947 una falena rimase incastrata in un computer e lo bloccò. Da allora gli errori dei programmi si chiamano <i>bug</i>, cioè "insetto".' },
      { icon: '🔬', title: 'Miliardi di interruttori', html: 'Una CPU moderna contiene decine di miliardi di transistor, ognuno migliaia di volte più sottile di un capello.' },
      { icon: '0️⃣', title: 'Solo 0 e 1', html: 'Testi, foto, musica e video, dentro al computer, sono lunghissime file di 0 e 1: il <b>codice binario</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'Quale pezzo è il "cervello" che esegue le istruzioni?', options: ['La RAM', 'La CPU', 'Il monitor', 'L\'alimentatore'], answer: 1, explain: 'La CPU (processore) esegue le istruzioni dei programmi, miliardi di volte al secondo.' },
      { type: 'tf', q: 'Quando spegni il computer, i dati nella RAM restano salvati.', answer: false, explain: 'La RAM si cancella quando manca la corrente: i dati restano invece nell\'SSD.' },
      { type: 'mc', q: 'A cosa servono dissipatore e ventola?', options: ['A fare rumore', 'A portare via il calore', 'A salvare i file', 'A collegarsi a Internet'], answer: 1, explain: 'La CPU si scalda: le alette del dissipatore raccolgono il calore e la ventola lo soffia via.' },
      { type: 'mc', q: 'Quale di questi è un dispositivo di USCITA (output)?', options: ['Tastiera', 'Mouse', 'Monitor', 'Microfono'], answer: 2, explain: 'Il monitor mostra i risultati: è un dispositivo di uscita. Tastiera, mouse e microfono sono di ingresso.' },
      { type: 'mc', q: 'Che cosa fa l\'alimentatore?', options: ['Trasforma la corrente della presa in corrente adatta ai circuiti', 'Disegna le immagini', 'Raffredda la scheda video', 'Conserva le foto'], answer: 0, explain: 'Abbassa i 230 V della presa a 12, 5 e 3,3 V di corrente continua.' },
      { type: 'order', q: 'Metti in ordine il viaggio di un programma che apri', items: ['È salvato nell\'SSD', 'Viene copiato nella RAM', 'La CPU esegue le sue istruzioni', 'Il risultato appare sul monitor'], explain: 'Magazzino (SSD) → banco di lavoro (RAM) → cervello (CPU) → uscita (monitor).' }
    ]
  });
})();
