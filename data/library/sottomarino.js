/* Il sottomarino (diesel-elettrico). Asse lungo x: prua a +x, poppa a -x. Ciclo (1): 0–0.5 le casse si riempiono, 0.5–1 si svuotano. */
(function () {
  const ROT = [0, 0, -90]; // porta l'asse y delle primitive lungo x
  const hull = [[0, -3.25], [0.18, -3.05], [0.42, -2.55], [0.6, -1.85], [0.7, -1.0], [0.72, 0], [0.72, 2.1], [0.64, 2.65], [0.45, 3.0], [0.2, 3.2], [0, 3.27]];
  const blades = Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [0.42, 0.025, 0.16], pos: [0.27, 0, 0], rot: [30, 0, 0] }] }));
  const tankWater = (x, w) => ({ t: 'group', pos: [x, -0.62, 0], anim: { type: 'scale', axis: 'y', from: 0.04, to: 1, wave: 'window', win: [0.02, 0.98], ramp: 0.45 }, shapes: [
    { t: 'box', s: [w, 1.2, 1.15], pos: [0, 0.6, 0] }
  ] });

  LIBRARY({
    id: 'sottomarino',
    title: 'Il sottomarino',
    intro: 'Un sottomarino può <b>galleggiare</b> come una nave oppure <b>scendere</b> sott\'acqua e risalire. Il trucco? Cambiare il proprio peso riempiendo d\'acqua o d\'aria delle grandi casse.',
    model: {
      rx: 0.22, ry: -0.5, speed: 0.12, height: 460, bg: 'sea', floor: false,
      parts: [
        { id: 'scafo-esterno', name: 'Scafo esterno', color: '#cbd5e1', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>È il "vestito" del sottomarino, con una forma affusolata come quella di un pesce o di una balena, per scivolare nell\'acqua facendo poca fatica.</p>',
          shapes: [ { t: 'lathe', n: 32, rot: ROT, pts: hull } ] },
        { id: 'scafo-resistente', name: 'Scafo resistente', color: '#94a3b8', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>È un grande tubo d\'acciaio spesso, dove vive l\'equipaggio. Deve resistere all\'enorme <b>pressione</b> dell\'acqua in profondità.</p>',
          more: '<p>Ogni 10 metri di profondità la pressione aumenta di circa 1 atmosfera. A 300 metri, su ogni centimetro quadrato dello scafo preme un peso di circa 30 kg!</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 4.2, n: 32, rot: ROT, pos: [0, 0, 0] } ] },
        { id: 'casse-zavorra', name: 'Casse di zavorra', label: 'Casse di zavorra', color: '#7dd3fc', alpha: 0.35, explode: [0, -0.9, 0],
          info: '<p>Sono grandi "serbatoi" tra i due scafi, a prua e a poppa. Si possono riempire di <b>acqua</b> (per scendere) o di <b>aria</b> (per salire).</p>',
          shapes: [ { t: 'box', s: [0.75, 1.24, 1.2], pos: [2.55, 0, 0] }, { t: 'box', s: [0.6, 1.0, 1.0], pos: [-2.4, 0, 0] } ] },
        { id: 'acqua-zavorra', name: 'Acqua nelle casse', label: 'Acqua', color: '#0284c7', alpha: 0.7, explode: [0, -0.9, 0],
          info: '<p>Quando le valvole si aprono, l\'acqua del mare entra nelle casse: il sottomarino diventa <b>più pesante</b> e scende.</p>',
          shapes: [ tankWater(2.55, 0.72), Object.assign(tankWater(-2.4, 0.57), { pos: [-2.4, -0.5, 0], shapes: [{ t: 'box', s: [0.57, 1.0, 0.95], pos: [0, 0.5, 0] }] }) ] },
        { id: 'aria-compressa', name: 'Bombole d\'aria compressa', label: 'Aria compressa', color: '#22c55e', pos: [0.2, 0.36, 0], explode: [0, 1.1, 0.6],
          info: '<p>Contengono aria schiacciata ad altissima pressione. Per risalire, l\'aria viene soffiata nelle casse di zavorra e <b>spinge fuori l\'acqua</b>.</p>',
          shapes: [-0.45, 0, 0.45].map((x) => ({ t: 'cyl', r: 0.07, h: 0.38, n: 14, rot: ROT, pos: [x, 0, -0.18] })) },
        { id: 'torretta', name: 'Torretta', color: '#1f2937', pos: [0.95, 0.68, 0], explode: [0, 0.9, 0],
          info: '<p>La torre sopra lo scafo. Quando il sottomarino è in superficie, da qui si guarda intorno; dentro passano il periscopio e le antenne.</p>',
          shapes: [ { t: 'extrude', d: 0.3, pts: [[-0.5, 0], [0.48, 0], [0.38, 0.85], [-0.36, 0.85]], smooth: false }, { t: 'box', s: [0.25, 0.03, 0.9], pos: [0.12, 0.55, 0] } ] },
        { id: 'periscopio', name: 'Periscopio', color: '#64748b', pos: [1.05, 1.45, 0], explode: [0, 1.3, 0], anim: { type: 'move', dir: [0, 1, 0], amp: 0.4, wave: 'sin01', rate: 0.5 },
          info: '<p>Un lungo tubo con due specchi (o prismi) che permette di vedere sopra l\'acqua restando sotto. Oggi molti usano una <b>telecamera</b>.</p>',
          more: '<p>La luce entra in alto, si riflette su uno specchio inclinato a 45°, scende nel tubo e un secondo specchio la manda all\'occhio. È lo stesso principio del periscopio di cartone che puoi costruire a casa.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 0.9, n: 10 }, { t: 'box', s: [0.14, 0.12, 0.1], pos: [0.03, 0.48, 0], color: '#334155' }, { t: 'box', s: [0.01, 0.08, 0.07], pos: [0.105, 0.48, 0], color: '#38bdf8', decal: 1 } ] },
        { id: 'elica', name: 'Elica', color: '#ca8a04', pos: [-3.3, 0, 0], rot: [0, 0, 90], explode: [-0.6, 0, 0], anim: { type: 'spin', axis: 'y', rate: 2 },
          info: '<p>Girando spinge l\'acqua all\'indietro, e l\'acqua spinge il sottomarino in avanti. Ha pale larghe e lente per fare <b>poco rumore</b>.</p>',
          shapes: [ { t: 'cone', r: 0.1, h: 0.25, n: 16, color: '#a16207' } ].concat(blades) },
        { id: 'timoni', name: 'Timoni', color: '#475569', explode: [-0.4, 0, 0],
          info: '<p>Le "pinne" della coda. Il timone verticale fa girare a destra e a sinistra; quelli orizzontali (di <b>profondità</b>) fanno puntare la prua in su o in giù.</p>',
          shapes: [ { t: 'box', s: [0.4, 1.3, 0.05], pos: [-2.85, 0, 0], color: '#475569' },
            { t: 'group', pos: [-2.75, 0, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.25 }, shapes: [ { t: 'box', s: [0.4, 0.05, 1.5], color: '#334155' } ] } ] },
        { id: 'motore-elettrico', name: 'Motore elettrico', color: '#f59e0b', pos: [-1.75, 0, 0], explode: [0, 0, 1.1],
          info: '<p>Fa girare l\'elica. Sott\'acqua funziona con l\'elettricità delle batterie: non ha bisogno di aria ed è silenzioso.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.6, n: 24, rot: ROT }, { t: 'cyl', r: 0.045, h: 1.35, n: 10, rot: ROT, pos: [-0.95, 0, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2 } } ] },
        { id: 'diesel', name: 'Motore diesel e generatore', label: 'Motore diesel', color: '#9a3412', pos: [-0.85, -0.05, 0], explode: [0, 0, 1.2],
          info: '<p>Quando il sottomarino è vicino alla superficie, il motore diesel prende aria con un tubo (lo <b>snorkel</b>) e produce elettricità per ricaricare le batterie.</p>',
          more: '<p>I sottomarini più grandi usano invece un piccolo <b>reattore nucleare</b>, che non ha bisogno d\'aria: possono restare sott\'acqua per mesi.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.45, 0.5] }, { t: 'cyl', r: 0.15, h: 0.3, n: 16, rot: ROT, pos: [0.42, 0, 0], color: '#b45309' } ] },
        { id: 'batterie', name: 'Batterie', color: '#16a34a', pos: [0.2, -0.36, 0], explode: [0, -1.0, 0.6],
          info: '<p>Tante batterie in fondo allo scafo danno corrente al motore elettrico, alle luci e agli strumenti quando si naviga sott\'acqua.</p>',
          shapes: Array.from({ length: 10 }, (_, k) => ({ t: 'box', s: [0.18, 0.16, 0.22], pos: [-0.85 + (k % 5) * 0.21 + 0.4, 0, (k < 5 ? -0.13 : 0.13)] })) },
        { id: 'sala-controllo', name: 'Sala di controllo', label: 'Sala di controllo', color: '#e2e8f0', pos: [1.05, 0.05, 0], explode: [0, 0, 1.3],
          info: '<p>Il "cervello" del sottomarino: da qui il comandante e l\'equipaggio guidano, controllano la profondità e ascoltano il sonar.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.6] }, { t: 'box', s: [0.6, 0.18, 0.01], pos: [0, 0.08, 0.305], color: '#0f766e', decal: 1 }, { t: 'box', s: [0.08, 0.06, 0.01], pos: [-0.2, -0.12, 0.31], color: '#ef4444', decal: 1, anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 1.5 } } ] },
        { id: 'sonar', name: 'Sonar', color: '#facc15', alpha: 0.85, pos: [2.85, -0.05, 0], explode: [0.7, 0, 0],
          info: '<p>Gli "orecchi" del sottomarino. Manda un suono ("ping!") e ascolta l\'<b>eco</b> che rimbalza sugli ostacoli: dal tempo dell\'eco capisce quanto sono lontani. Lo fanno anche delfini e pipistrelli!</p>',
          more: '<p>Nell\'acqua il suono viaggia a circa <b>1500 m/s</b>, più di 4 volte più veloce che nell\'aria. Se l\'eco torna dopo 2 secondi, l\'ostacolo è a 1500 m (il suono fa andata e ritorno).</p>',
          shapes: [ { t: 'sphere', r: 0.36, n: 12, scale: [1, 1, 1.15] },
            { t: 'group', anim: [{ type: 'move', dir: [1, 0, 0], amp: 2.2, wave: 'saw', rate: 0.6 }, { type: 'scale', from: 0.6, to: 2.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 }],
              shapes: [ { t: 'torus', R: 0.35, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#fef08a' } ] } ] }
      ]
    },
    steps: [
      { icon: '🛟', title: 'Galleggiare', focus: ['casse-zavorra', 'scafo-esterno', 'torretta'], loop: [0, 0.02], explode: 0,
        html: '<p>Quando le <b>casse di zavorra</b> sono piene d\'aria, il sottomarino è più leggero dell\'acqua che sposta: <b>galleggia</b> come una nave.</p><p class="tip">🛁 È il <b>principio di Archimede</b>: l\'acqua spinge verso l\'alto un oggetto con una forza pari al peso dell\'acqua che l\'oggetto sposta.</p>' },
      { icon: '⬇️', title: 'Immersione', focus: ['casse-zavorra', 'acqua-zavorra', 'timoni'], loop: [0, 0.5], explode: 0,
        html: '<p>Si aprono le valvole: l\'acqua di mare <b>entra nelle casse</b> e caccia fuori l\'aria. Il sottomarino diventa più pesante e <b>scende</b>.</p><p>I <b>timoni di profondità</b> lo aiutano a inclinarsi e a fermarsi alla quota giusta.</p>' },
      { icon: '⬆️', title: 'Risalita', focus: ['aria-compressa', 'acqua-zavorra', 'casse-zavorra'], loop: [0.5, 1], explode: 0,
        html: '<p>Per tornare su, l\'<b>aria compressa</b> delle bombole viene soffiata nelle casse e spinge fuori l\'acqua. Il sottomarino diventa più leggero e <b>risale</b>.</p>' },
      { icon: '⚙️', title: 'Avanti tutta!', focus: ['elica', 'motore-elettrico', 'batterie', 'diesel'], explode: 0.45, view: { rx: 0.25, ry: -0.9 },
        html: '<p>Le <b>batterie</b> alimentano il <b>motore elettrico</b>, che fa girare l\'<b>elica</b>. Vicino alla superficie il <b>motore diesel</b> ricarica le batterie.</p><p>Il timone verticale fa girare a destra e a sinistra.</p>' },
      { icon: '🔊', title: 'Vedere senza luce', focus: ['sonar', 'periscopio', 'sala-controllo'], explode: 0.25, view: { rx: 0.2, ry: -0.3 },
        html: '<p>In profondità è buio pesto. Il <b>sonar</b> usa il suono: manda un "ping" e ascolta l\'eco. Vicino alla superficie si alza il <b>periscopio</b> per guardare fuori.</p>' },
      { icon: '🧑‍✈️', title: 'Vivere là sotto', focus: ['scafo-resistente', 'sala-controllo'], explode: 0.2,
        html: '<p>L\'equipaggio vive dentro lo <b>scafo resistente</b>, che sopporta la pressione dell\'acqua. Macchine speciali producono ossigeno e tolgono l\'anidride carbonica dall\'aria.</p>' }
    ],
    facts: [
      { icon: '🐳', title: 'Ispirati alla natura', html: 'I pesci ossei hanno una <b>vescica natatoria</b>: gonfiandola o sgonfiandola di gas salgono o scendono, proprio come un sottomarino.' },
      { icon: '📏', title: 'Fino all\'abisso', html: 'Nel 1960 il batiscafo <b>Trieste</b>, progettato da Auguste Piccard e costruito in Italia, scese nella Fossa delle Marianne a quasi 11 000 metri.' },
      { icon: '🐬', title: 'Come i delfini', html: 'Delfini e pipistrelli usano l\'<b>ecolocalizzazione</b>: emettono suoni e ascoltano l\'eco per "vedere" al buio.' },
      { icon: '📚', title: 'Ventimila leghe', html: 'Nel romanzo di Jules Verne (1870) il capitano Nemo viaggia sul sottomarino <i>Nautilus</i>, molto prima che ne esistessero di veri così.' }
    ],
    quiz: [
      { type: 'mc', q: 'Che cosa fa scendere il sottomarino?', options: ['Spegnere il motore', 'Riempire d\'acqua le casse di zavorra', 'Alzare il periscopio', 'Accendere il sonar'], answer: 1, explain: 'L\'acqua nelle casse lo rende più pesante dell\'acqua che sposta, quindi scende.' },
      { type: 'mc', q: 'Come risale?', options: ['Soffiando aria compressa nelle casse per cacciare l\'acqua', 'Girando l\'elica al contrario', 'Aprendo la torretta', 'Usando il periscopio'], answer: 0, explain: 'L\'aria spinge fuori l\'acqua: il sottomarino diventa più leggero e risale.' },
      { type: 'mc', q: 'Quale principio spiega il galleggiamento?', options: ['Principio di Archimede', 'Legge di Ohm', 'Principio di Pascal', 'Prima legge di Newton'], answer: 0, explain: 'Un corpo immerso riceve una spinta verso l\'alto pari al peso del liquido spostato.' },
      { type: 'tf', q: 'Il sonar usa la luce per trovare gli ostacoli.', answer: false, explain: 'Il sonar usa il suono e ascolta l\'eco: sott\'acqua la luce arriva poco lontano.' },
      { type: 'num', q: 'Il suono in acqua viaggia a 1500 m/s. Se l\'eco torna dopo 2 secondi, a quanti metri è l\'ostacolo?', answer: 1500, unit: 'm', explain: 'In 2 s il suono percorre 3000 m, ma è andata e ritorno: 3000 ÷ 2 = 1500 m.' }
    ]
  });
})();
