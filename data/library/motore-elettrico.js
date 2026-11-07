/* Il motore elettrico a corrente continua (con spazzole), come quello dei giocattoli e dei ventilatori a pile.
   L'albero è lungo l'asse z (davanti = +z, dove c'è l'elica). Magnete N in alto, S in basso. Il rotore gira intorno a z. */
(function () {
  const TAU = Math.PI * 2, D = Math.PI / 180;
  /* settore di corona circolare nel piano XY, da a0 ad a1 gradi */
  const sector = (r0, r1, a0, a1, n) => {
    const o = [], i = []; for (let k = 0; k <= n; k++) { const a = (a0 + (a1 - a0) * k / n) * D; o.push([r1 * Math.cos(a), r1 * Math.sin(a)]); i.push([r0 * Math.cos(a), r0 * Math.sin(a)]); }
    return o.concat(i.reverse());
  };
  const SPIN = { type: 'spin', axis: 'z', dir: -1 };
  /* un polo del rotore: gambo + "cappello" ad arco; orientato verso +y e poi ruotato */
  const pole = (a) => ({ t: 'group', rot: [0, 0, a], shapes: [
    { t: 'box', s: [0.2, 0.42, 1.0], pos: [0, 0.33, 0], color: '#6b7280' },
    { t: 'extrude', d: 1.0, pts: sector(0.5, 0.64, 52, 128, 10), color: '#6b7280' } ] });
  const coil = (a, ph) => ({ t: 'group', rot: [0, 0, a], shapes: [
    { t: 'box', s: [0.36, 0.3, 0.86], pos: [0, 0.3, 0], color: '#c2410c', anim: { type: 'blink', color: '#fb923c', wave: 'sin01', rate: 1, phase: ph } },
    ...[-0.32, -0.16, 0, 0.16, 0.32].map((z) => ({ t: 'box', s: [0.37, 0.31, 0.012], pos: [0, 0.3, z], color: '#9a3412' })),
    { t: 'box', s: [0.37, 0.12, 1.0], pos: [0, 0.26, 0], color: '#b45309' } ] });
  const commSeg = (a) => ({ t: 'extrude', d: 0.32, pts: sector(0.12, 0.2, a + 8, a + 112, 8), color: '#d97706' });
  const fieldLine = (x) => Array.from({ length: 2 }, (_, k) => ({ t: 'group', pos: [x, 0.62, 0.0], anim: { type: 'move', dir: [0, -1, 0], amp: 1.24, wave: 'saw', rate: 0.5, phase: k / 2 + x },
    shapes: [{ t: 'cone', r: 0.05, h: 0.12, n: 10, rot: [180, 0, 0] }] }));
  const BAT = [[0.95, -1.55, 0.95], [0.95, -1.2, 1.05], [0.45, -0.1, 1.05], [0.3, 0, 1.05], [0.22, 0.0, 1.05], [0, 0.18, 1.05], [-0.22, 0, 1.05], [-0.3, 0, 1.05], [-0.45, -0.1, 1.05], [-0.95, -1.2, 1.05], [-0.95, -1.55, 0.95]];

  LIBRARY({
    id: 'motore-elettrico',
    title: 'Il motore elettrico',
    intro: 'Il motore elettrico trasforma la <b>corrente</b> in <b>movimento</b>, usando le calamite. È nei ventilatori, nei trapani, nelle lavatrici, nei giocattoli e nelle auto elettriche. Guarda come i magneti si spingono e si tirano!',
    model: {
      rx: 0.22, ry: -0.65, speed: 0.35, height: 470,
      parts: [
        { id: 'carcassa', name: 'Carcassa', color: '#94a3b8', alpha: 0.2, explode: [0, 0, 0],
          info: '<p>È il "barattolo" di metallo che contiene e protegge il motore. Tiene fermi i magneti e fa da strada al loro campo magnetico.</p>',
          more: '<p>La carcassa è di <b>ferro</b>: il campo magnetico "preferisce" passare nel ferro piuttosto che nell\'aria, così il circuito magnetico si chiude e il motore è più forte.</p>',
          shapes: [ { t: 'tube', r: 1.02, ri: 0.96, h: 1.5, n: 40, rot: [90, 0, 0] }, { t: 'cyl', r: 1.02, h: 0.05, n: 40, rot: [90, 0, 0], pos: [0, 0, -0.77] },
            { t: 'cyl', r: 0.13, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.84], color: '#cbd5e1', alpha: 1 },
            { t: 'box', s: [1.3, 0.06, 0.6], pos: [0, -1.05, 0], color: '#475569', alpha: 1 } ] },
        { id: 'magnete-n', name: 'Magnete (polo Nord)', label: 'Magnete N', color: '#dc2626', explode: [0, 0.7, 0],
          info: '<p>Una <b>calamita</b> curva, fissata alla carcassa, con il polo <b>Nord</b> rivolto verso il centro. Non si muove mai: è lo <b>statore</b> (la parte che "sta").</p>',
          more: '<p>Le calamite hanno sempre due poli. Poli <b>uguali</b> si respingono, poli <b>diversi</b> si attraggono. Nei motori moderni si usano magneti al <b>neodimio</b>, piccoli ma fortissimi.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 45, 135, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, 0.83, 0.61], color: '#fef2f2', decal: 1 } ] },
        { id: 'magnete-s', name: 'Magnete (polo Sud)', label: 'Magnete S', color: '#2563eb', explode: [0, -0.7, 0],
          info: '<p>Di fronte c\'è un\'altra calamita con il polo <b>Sud</b> verso il centro. Tra le due calamite c\'è un <b>campo magnetico</b> invisibile che va da Nord a Sud.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 225, 315, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, -0.83, 0.61], color: '#eff6ff', decal: 1 } ] },
        { id: 'campo', name: 'Campo magnetico', label: 'Campo magnetico', color: '#a855f7', alpha: 0.75, explode: [0, 0, -0.9],
          info: '<p>Le frecce mostrano il <b>campo magnetico</b>: una "forza invisibile" che esce dal polo Nord ed entra nel polo Sud. Puoi vederlo con la limatura di ferro su un foglio sopra una calamita!</p>',
          shapes: [-0.42, 0, 0.42].map((x) => ({ t: 'pipe', r: 0.012, n: 5, pts: [[x, 0.7, 0], [x, -0.7, 0]], alpha: 0.4 })).concat(fieldLine(-0.42), fieldLine(0), fieldLine(0.42)) },
        { id: 'rotore', name: 'Rotore (nucleo di ferro)', label: 'Rotore', color: '#6b7280', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>È la parte che <b>gira</b>. Ha tre "bracci" di ferro, ognuno avvolto da una bobina di filo di rame.</p>',
          more: '<p>Il nucleo è fatto di tanti fogli di ferro sottili incollati (<b>lamierini</b>): così si scalda meno. Con tre poli il motore parte sempre, in qualunque posizione si sia fermato.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 1.0, n: 20, rot: [90, 0, 0], color: '#6b7280' }, pole(0), pole(120), pole(240) ] },
        { id: 'bobine', name: 'Bobine di rame (elettromagneti)', label: 'Bobine', color: '#c2410c', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>Sono matasse di <b>filo di rame</b> avvolto tante volte. Quando la corrente le attraversa diventano <b>calamite</b> (elettromagneti): spente, non attirano più niente.</p>',
          more: '<p>Una corrente elettrica crea sempre un campo magnetico intorno al filo (lo scoprì <b>Ørsted</b> nel 1820 vedendo muoversi l\'ago di una bussola). Avvolgendo il filo tante volte intorno al ferro il campo diventa molto più forte. Il filo è coperto da una vernice isolante: per questo sembra rosso-arancio.</p>',
          shapes: [ coil(0, 0), coil(120, 1 / 3), coil(240, 2 / 3) ] },
        { id: 'albero', name: 'Albero', color: '#d1d5db', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>È il "bastoncino" d\'acciaio al centro del rotore. Gira insieme a lui ed esce dal motore per far girare quello che vogliamo: un\'elica, una ruota, un ingranaggio.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 2.75, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.32] }, { t: 'box', s: [0.02, 0.12, 0.6], pos: [0.055, 0, 1.4], color: '#94a3b8' } ] },
        { id: 'commutatore', name: 'Commutatore', color: '#d97706', pos: [0, 0, 0.88], explode: [0, 0, 1.25], anim: SPIN,
          info: '<p>È un anellino di rame tagliato in <b>tre spicchi</b>, ognuno collegato a una bobina. Girando, cambia quali bobine ricevono la corrente e in che verso.</p>',
          more: '<p>Senza commutatore il rotore si fermerebbe dopo mezzo giro, con il polo Nord della bobina davanti al polo Sud del magnete. Il commutatore <b>inverte la corrente</b> proprio in quel momento: il polo cambia e il rotore viene spinto ancora avanti.</p>',
          shapes: [0, 120, 240].map(commSeg).concat([{ t: 'cyl', r: 0.11, h: 0.34, n: 16, rot: [90, 0, 0], color: '#1f2937' }]) },
        { id: 'spazzole', name: 'Spazzole', color: '#1f2937', pos: [0, 0, 0.88], explode: [0, 0.4, 1.25],
          info: '<p>Due blocchetti di <b>carbone</b> premuti da una mollettina contro il commutatore. Strisciando, portano la corrente dalla pila alle bobine che girano.</p>',
          more: '<p>Il carbone (grafite) conduce bene l\'elettricità ed è "scivoloso". Strisciando però si consuma: i motori <b>senza spazzole</b> (brushless) dei droni e delle auto elettriche usano invece l\'elettronica per cambiare la corrente, e durano di più.</p>',
          shapes: [-1, 1].map((sx) => ({ t: 'group', shapes: [
            { t: 'box', s: [0.14, 0.12, 0.14], pos: [sx * 0.27, 0, 0] }, { t: 'box', s: [0.2, 0.18, 0.2], pos: [sx * 0.42, 0, 0], color: '#94a3b8', alpha: 0.6 },
            { t: 'pipe', r: 0.01, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 20 }, (_, i) => [sx * (0.34 + i * 0.008), 0.035 * Math.cos(i * 1.2), 0.035 * Math.sin(i * 1.2)]) } ] })) },
        { id: 'calotta', name: 'Calotta e cuscinetti', label: 'Calotta', color: '#f8fafc', alpha: 0.3, pos: [0, 0, 0.82], explode: [0, 0, 2.0],
          info: '<p>È il "coperchio" di plastica che chiude il motore e tiene le spazzole. Al centro c\'è un <b>cuscinetto</b> che fa girare l\'albero senza attrito.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.06, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.4] }, { t: 'tube', r: 1.0, ri: 0.94, h: 0.4, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.2] },
            { t: 'tube', r: 0.14, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af', alpha: 1 },
            { t: 'box', s: [0.12, 0.06, 0.1], pos: [0.7, 0, 0.46], color: '#d97706', alpha: 1 }, { t: 'box', s: [0.12, 0.06, 0.1], pos: [-0.7, 0, 0.46], color: '#d97706', alpha: 1 } ] },
        { id: 'pila', name: 'Pila e fili', label: 'Pila', color: '#111827', explode: [0, -0.6, 0.5],
          info: '<p>La <b>pila</b> spinge la corrente nei fili: esce dal polo <b>+</b>, passa nel motore e torna al polo <b>−</b>. Se inverti i fili, il motore gira al contrario!</p>',
          more: '<p>Più alta è la tensione (i volt) della pila, più forte è la corrente e più veloce gira il motore. Una pila stilo fa 1,5 V; la batteria di un\'auto elettrica circa 400 V.</p>',
          shapes: [ { t: 'cyl', r: 0.2, h: 1.6, n: 24, rot: [0, 0, 90], pos: [0, -1.6, 0.95] }, { t: 'cyl', r: 0.205, h: 0.5, n: 24, rot: [0, 0, 90], pos: [0.55, -1.6, 0.95], color: '#f59e0b' },
            { t: 'cyl', r: 0.07, h: 0.08, n: 14, rot: [0, 0, 90], pos: [0.84, -1.6, 0.95], color: '#d1d5db' }, { t: 'cyl', r: 0.15, h: 0.02, n: 20, rot: [0, 0, 90], pos: [-0.81, -1.6, 0.95], color: '#d1d5db' },
            { t: 'box', s: [0.1, 0.1, 0.01], pos: [0.55, -1.6, 1.16], color: '#111827', decal: 1 }, { t: 'box', s: [0.03, 0.1, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 }, { t: 'box', s: [0.1, 0.03, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#ef4444', pts: [[0.9, -1.6, 0.95], [0.95, -1.2, 1.05], [0.75, -0.4, 1.3], [0.7, 0, 1.3]] },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#111827', pts: [[-0.85, -1.6, 0.95], [-0.95, -1.2, 1.05], [-0.75, -0.4, 1.3], [-0.7, 0, 1.3]] } ] },
        { id: 'corrente', name: 'Corrente elettrica', label: 'Corrente', color: '#facc15', noLabel: true, explode: [0, 0, 0.5],
          info: '<p>La corrente (i pallini gialli) parte dalla pila, entra da una spazzola, attraversa una bobina del rotore ed esce dall\'altra spazzola, tornando alla pila.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.035, n: 5, m: 8, pos: BAT[0], color: '#facc15', anim: { type: 'path', pts: BAT, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'elica', name: 'Elica (il lavoro!)', label: 'Elica', color: '#22c55e', pos: [0, 0, 1.62], explode: [0, 0, 1.4], anim: SPIN,
          info: '<p>Ecco a che cosa serve il motore: fa girare qualcosa! Qui un\'elica, come in un ventilatore. L\'energia elettrica è diventata <b>energia di movimento</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.14, n: 20, rot: [90, 0, 0], color: '#15803d' } ].concat([0, 120, 240].map((a) => ({ t: 'group', rot: [0, 0, a], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.45, 0], scale: [0.16, 0.38, 0.03], rot: [0, 25, 0] } ] }))) }
      ]
    },
    steps: [
      { icon: '⚡', title: 'Dalla corrente al movimento', explode: 0,
        html: '<p>Un motore elettrico fa girare un <b>albero</b> usando solo elettricità e calamite. Non brucia niente, non fa fumo e quasi non scalda.</p><p>Ha una parte ferma, lo <b>statore</b> (i magneti), e una parte che gira, il <b>rotore</b> (le bobine).</p>' },
      { icon: '🧲', title: 'Le calamite: si tirano e si spingono', focus: ['magnete-n', 'magnete-s', 'campo'], explode: 0.2, view: { rx: 0.05, ry: -0.1 },
        html: '<p>Ogni calamita ha un polo <b>Nord</b> e un polo <b>Sud</b>. Poli <b>diversi si attraggono</b>, poli <b>uguali si respingono</b>.</p><p>Tra le due calamite del motore c\'è un <b>campo magnetico</b> invisibile (le frecce viola) che va dal Nord al Sud.</p><p class="tip">🧪 Prova con due calamite da frigo: girandone una, senti che si respingono o si attaccano.</p>' },
      { icon: '🌀', title: 'Bobine che diventano calamite', focus: ['bobine', 'rotore', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.5 },
        html: '<p>Le <b>bobine</b> sono fili di rame avvolti tante volte intorno al ferro del rotore. Quando ci passa la corrente diventano <b>elettromagneti</b>: calamite che si possono accendere e spegnere!</p><p class="tip">🔩 Puoi costruirne uno: avvolgi un filo intorno a un chiodo e collegalo a una pila. Il chiodo attirerà le graffette.</p>' },
      { icon: '🔄', title: 'Spinte e tirate: il rotore gira', focus: ['rotore', 'bobine', 'magnete-n', 'magnete-s'], explode: 0, view: { rx: 0.0, ry: 0.0 },
        html: '<p>Il polo di una bobina viene <b>attirato</b> dalla calamita di fronte di polo opposto e <b>respinto</b> da quella dello stesso polo. Così il rotore comincia a girare.</p>' },
      { icon: '🔀', title: 'Commutatore e spazzole: il trucco', focus: ['commutatore', 'spazzole', 'corrente', 'pila'], explode: 0.3, zoom: 1.1, view: { rx: 0.25, ry: -0.3 },
        html: '<p>Se non succedesse niente, la bobina si fermerebbe davanti alla calamita che la attira. Ma proprio in quel momento il <b>commutatore</b>, girando sotto le <b>spazzole</b>, <b>inverte la corrente</b>: il polo della bobina cambia e viene di nuovo spinto avanti.</p><p>Così il rotore non si ferma mai finché c\'è corrente.</p>' },
      { icon: '🌬️', title: 'L\'albero fa il lavoro', focus: ['albero', 'elica', 'calotta'], explode: 0, view: { rx: 0.25, ry: -0.9 },
        html: '<p>L\'<b>albero</b> esce dal motore e fa girare l\'<b>elica</b>: l\'energia elettrica è diventata energia di movimento. Al posto dell\'elica potrebbe esserci una ruota, la puleggia della lavatrice o la punta di un trapano.</p>' },
      { icon: '🔁', title: 'E al contrario: la dinamo', explode: 0.5, view: { rx: 0.3, ry: -0.7 },
        html: '<p>Se fai girare a mano l\'albero di un motore come questo, dalle spazzole esce corrente: diventa un <b>generatore</b> (una dinamo)! È lo stesso principio delle centrali elettriche e della dinamo della bici.</p><p class="tip">🚗 Le auto elettriche lo usano quando frenano: il motore diventa generatore e ricarica la batteria.</p>' }
    ],
    facts: [
      { icon: '🧭', title: 'Una bussola impazzita', html: 'Nel 1820 Hans Christian Ørsted notò che l\'ago di una bussola si muoveva vicino a un filo con la corrente: aveva scoperto che <b>elettricità e magnetismo</b> sono legati.' },
      { icon: '🇮🇹', title: 'Galileo Ferraris', html: 'L\'ingegnere torinese <b>Galileo Ferraris</b> inventò nel 1885 il motore a campo magnetico rotante, il "papà" dei motori delle fabbriche di oggi.' },
      { icon: '🏠', title: 'Quanti motori in casa?', html: 'Frigorifero, lavatrice, aspirapolvere, ventilatore, phon, frullatore, lettore… In una casa ci sono spesso più di <b>30 motori elettrici</b>!' },
      { icon: '🔋', title: 'Efficientissimo', html: 'Un buon motore elettrico trasforma in movimento più del <b>90%</b> dell\'energia che riceve; un motore a benzina circa il 30%.' }
    ],
    quiz: [
      { type: 'mc', q: 'Due calamite con i poli Nord uno davanti all\'altro…', options: ['si attraggono', 'si respingono', 'non fanno niente', 'diventano una sola calamita'], answer: 1, explain: 'Poli uguali si respingono, poli diversi si attraggono.' },
      { type: 'mc', q: 'Che cosa diventa una bobina di rame quando ci passa la corrente?', options: ['Una lampadina', 'Un elettromagnete', 'Una pila', 'Un isolante'], answer: 1, explain: 'La corrente crea un campo magnetico: la bobina diventa una calamita che si può accendere e spegnere.' },
      { type: 'mc', q: 'A che cosa serve il commutatore?', options: ['A raffreddare il motore', 'A invertire la corrente nelle bobine al momento giusto', 'A fare rumore', 'A tenere ferme le calamite'], answer: 1, explain: 'Invertendo la corrente cambia il polo della bobina, così il rotore continua a essere spinto.' },
      { type: 'tf', q: 'Se scambi i due fili della pila, il motore gira al contrario.', answer: true, explain: 'La corrente scorre nel verso opposto, i poli delle bobine si invertono e anche il senso di rotazione.' },
      { type: 'mc', q: 'Come si chiama la parte del motore che gira?', options: ['Statore', 'Rotore', 'Carcassa', 'Calotta'], answer: 1, explain: 'Il rotore gira; lo statore (con le calamite) sta fermo.' },
      { type: 'mc', q: 'Che cosa succede se fai girare a mano l\'albero di un motore elettrico?', options: ['Si rompe', 'Produce corrente: diventa un generatore', 'Si magnetizza la pila', 'Niente'], answer: 1, explain: 'Il motore funziona anche al contrario: è il principio delle dinamo e delle centrali elettriche.' }
    ]
  });
})();
