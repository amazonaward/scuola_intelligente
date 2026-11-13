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
    lang: 'ro',
    title: 'Motorul electric',
    intro: 'Motorul electric transformă <b>curentul</b> în <b>mișcare</b>, folosind magneții. Se găsește în ventilatoare, în bormașini, în mașini de spălat, în jucării și în mașinile electrice. Privește cum se împing și se trag magneții!',
    model: {
      rx: 0.22, ry: -0.65, speed: 0.35, height: 470,
      parts: [
        { id: 'carcassa', name: 'Carcasa', color: '#94a3b8', alpha: 0.2, explode: [0, 0, 0],
          info: '<p>Este „cutia” de metal care conține și protejează motorul. Ține magneții nemișcați și oferă drum câmpului lor magnetic.</p>',
          more: '<p>Carcasa este de <b>fier</b>: câmpului magnetic „îi place” mai mult să treacă prin fier decât prin aer, așa că circuitul magnetic se închide, iar motorul este mai puternic.</p>',
          shapes: [ { t: 'tube', r: 1.02, ri: 0.96, h: 1.5, n: 40, rot: [90, 0, 0] }, { t: 'cyl', r: 1.02, h: 0.05, n: 40, rot: [90, 0, 0], pos: [0, 0, -0.77] },
            { t: 'cyl', r: 0.13, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.84], color: '#cbd5e1', alpha: 1 },
            { t: 'box', s: [1.3, 0.06, 0.6], pos: [0, -1.05, 0], color: '#475569', alpha: 1 } ] },
        { id: 'magnete-n', name: 'Magnet (polul Nord)', label: 'Magnet N', color: '#dc2626', explode: [0, 0.7, 0],
          info: '<p>Un <b>magnet</b> curbat, fixat de carcasă, cu polul <b>Nord</b> îndreptat spre centru. Nu se mișcă niciodată: este <b>statorul</b> (partea care „stă”).</p>',
          more: '<p>Magneții au întotdeauna doi poli. Polii <b>la fel</b> se resping, polii <b>diferiți</b> se atrag. În motoarele moderne se folosesc magneți din <b>neodim</b>, mici dar foarte puternici.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 45, 135, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, 0.83, 0.61], color: '#fef2f2', decal: 1 } ] },
        { id: 'magnete-s', name: 'Magnet (polul Sud)', label: 'Magnet S', color: '#2563eb', explode: [0, -0.7, 0],
          info: '<p>În față este alt magnet cu polul <b>Sud</b> spre centru. Între cei doi magneți există un <b>câmp magnetic</b> invizibil care merge de la Nord la Sud.</p>',
          shapes: [ { t: 'extrude', d: 1.2, pts: sector(0.72, 0.95, 225, 315, 14) }, { t: 'box', s: [0.16, 0.16, 0.01], pos: [0, -0.83, 0.61], color: '#eff6ff', decal: 1 } ] },
        { id: 'campo', name: 'Câmp magnetic', label: 'Câmp magnetic', color: '#a855f7', alpha: 0.75, explode: [0, 0, -0.9],
          info: '<p>Săgețile arată <b>câmpul magnetic</b>: o „forță invizibilă” care iese din polul Nord și intră în polul Sud. Îl poți vedea cu pilitură de fier pe o foaie așezată deasupra unui magnet!</p>',
          shapes: [-0.42, 0, 0.42].map((x) => ({ t: 'pipe', r: 0.012, n: 5, pts: [[x, 0.7, 0], [x, -0.7, 0]], alpha: 0.4 })).concat(fieldLine(-0.42), fieldLine(0), fieldLine(0.42)) },
        { id: 'rotore', name: 'Rotor (miez de fier)', label: 'Rotor', color: '#6b7280', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>Este partea care se <b>învârte</b>. Are trei „brațe” de fier, fiecare înfășurat cu o bobină de fir de cupru.</p>',
          more: '<p>Miezul este făcut din multe foi subțiri de fier lipite între ele (<b>tole</b>): așa se încălzește mai puțin. Cu trei poli motorul pornește mereu, în orice poziție s-ar fi oprit.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 1.0, n: 20, rot: [90, 0, 0], color: '#6b7280' }, pole(0), pole(120), pole(240) ] },
        { id: 'bobine', name: 'Bobine de cupru (electromagneți)', label: 'Bobine', color: '#c2410c', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>Sunt ghemuri de <b>fir de cupru</b> înfășurat de multe ori. Când curentul trece prin ele devin <b>magneți</b> (electromagneți): oprite, nu mai atrag nimic.</p>',
          more: '<p>Un curent electric creează întotdeauna un câmp magnetic în jurul firului (a descoperit asta <b>Ørsted</b> în 1820, văzând cum se mișcă acul unei busole). Înfășurând firul de multe ori în jurul fierului, câmpul devine mult mai puternic. Firul este acoperit cu un lac izolator: de aceea pare roșu-portocaliu.</p>',
          shapes: [ coil(0, 0), coil(120, 1 / 3), coil(240, 2 / 3) ] },
        { id: 'albero', name: 'Axul', color: '#d1d5db', explode: [0, 0, 0.9], anim: SPIN,
          info: '<p>Este „bățul” de oțel din centrul rotorului. Se învârte împreună cu el și iese din motor ca să învârtă ceea ce vrem: o elice, o roată, un angrenaj.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 2.75, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.32] }, { t: 'box', s: [0.02, 0.12, 0.6], pos: [0.055, 0, 1.4], color: '#94a3b8' } ] },
        { id: 'commutatore', name: 'Colectorul', color: '#d97706', pos: [0, 0, 0.88], explode: [0, 0, 1.25], anim: SPIN,
          info: '<p>Este un inel mic de cupru tăiat în <b>trei sectoare</b>, fiecare legat de o bobină. Învârtindu-se, schimbă care bobine primesc curentul și în ce sens.</p>',
          more: '<p>Fără colector rotorul s-ar opri după o jumătate de tură, cu polul Nord al bobinei în fața polului Sud al magnetului. Colectorul <b>inversează curentul</b> chiar în acel moment: polul se schimbă, iar rotorul este împins din nou înainte.</p>',
          shapes: [0, 120, 240].map(commSeg).concat([{ t: 'cyl', r: 0.11, h: 0.34, n: 16, rot: [90, 0, 0], color: '#1f2937' }]) },
        { id: 'spazzole', name: 'Periile', color: '#1f2937', pos: [0, 0, 0.88], explode: [0, 0.4, 1.25],
          info: '<p>Două blocuri mici de <b>carbon</b> apăsate de un arcușor pe colector. Alunecând, duc curentul de la baterie la bobinele care se învârt.</p>',
          more: '<p>Carbonul (grafitul) conduce bine electricitatea și este „alunecos”. Alunecând însă se uzează: motoarele <b>fără perii</b> (brushless) ale dronelor și ale mașinilor electrice folosesc în schimb electronica pentru a schimba curentul și durează mai mult.</p>',
          shapes: [-1, 1].map((sx) => ({ t: 'group', shapes: [
            { t: 'box', s: [0.14, 0.12, 0.14], pos: [sx * 0.27, 0, 0] }, { t: 'box', s: [0.2, 0.18, 0.2], pos: [sx * 0.42, 0, 0], color: '#94a3b8', alpha: 0.6 },
            { t: 'pipe', r: 0.01, n: 4, caps: false, color: '#facc15', pts: Array.from({ length: 20 }, (_, i) => [sx * (0.34 + i * 0.008), 0.035 * Math.cos(i * 1.2), 0.035 * Math.sin(i * 1.2)]) } ] })) },
        { id: 'calotta', name: 'Capac și rulmenți', label: 'Capac', color: '#f8fafc', alpha: 0.3, pos: [0, 0, 0.82], explode: [0, 0, 2.0],
          info: '<p>Este „capacul” de plastic care închide motorul și ține periile. În centru este un <b>rulment</b> care lasă axul să se învârtă fără frecare.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.06, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.4] }, { t: 'tube', r: 1.0, ri: 0.94, h: 0.4, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.2] },
            { t: 'tube', r: 0.14, ri: 0.07, h: 0.12, n: 20, rot: [90, 0, 0], pos: [0, 0, 0.45], color: '#9ca3af', alpha: 1 },
            { t: 'box', s: [0.12, 0.06, 0.1], pos: [0.7, 0, 0.46], color: '#d97706', alpha: 1 }, { t: 'box', s: [0.12, 0.06, 0.1], pos: [-0.7, 0, 0.46], color: '#d97706', alpha: 1 } ] },
        { id: 'pila', name: 'Bateria și firele', label: 'Baterie', color: '#111827', explode: [0, -0.6, 0.5],
          info: '<p><b>Bateria</b> împinge curentul prin fire: iese din polul <b>+</b>, trece prin motor și se întoarce la polul <b>−</b>. Dacă inversezi firele, motorul se învârte invers!</p>',
          more: '<p>Cu cât tensiunea (voltii) bateriei este mai mare, cu atât curentul este mai puternic și motorul se învârte mai repede. O baterie de tip AA are 1,5 V; bateria unei mașini electrice aproximativ 400 V.</p>',
          shapes: [ { t: 'cyl', r: 0.2, h: 1.6, n: 24, rot: [0, 0, 90], pos: [0, -1.6, 0.95] }, { t: 'cyl', r: 0.205, h: 0.5, n: 24, rot: [0, 0, 90], pos: [0.55, -1.6, 0.95], color: '#f59e0b' },
            { t: 'cyl', r: 0.07, h: 0.08, n: 14, rot: [0, 0, 90], pos: [0.84, -1.6, 0.95], color: '#d1d5db' }, { t: 'cyl', r: 0.15, h: 0.02, n: 20, rot: [0, 0, 90], pos: [-0.81, -1.6, 0.95], color: '#d1d5db' },
            { t: 'box', s: [0.1, 0.1, 0.01], pos: [0.55, -1.6, 1.16], color: '#111827', decal: 1 }, { t: 'box', s: [0.03, 0.1, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 }, { t: 'box', s: [0.1, 0.03, 0.012], pos: [0.55, -1.6, 1.165], color: '#f8fafc', decal: 2 },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#ef4444', pts: [[0.9, -1.6, 0.95], [0.95, -1.2, 1.05], [0.75, -0.4, 1.3], [0.7, 0, 1.3]] },
            { t: 'pipe', r: 0.025, n: 6, curve: true, color: '#111827', pts: [[-0.85, -1.6, 0.95], [-0.95, -1.2, 1.05], [-0.75, -0.4, 1.3], [-0.7, 0, 1.3]] } ] },
        { id: 'corrente', name: 'Curent electric', label: 'Curent', color: '#facc15', noLabel: true, explode: [0, 0, 0.5],
          info: '<p>Curentul (bilele galbene) pornește de la baterie, intră printr-o perie, trece printr-o bobină a rotorului și iese prin cealaltă perie, întorcându-se la baterie.</p>',
          shapes: Array.from({ length: 14 }, (_, k) => ({ t: 'sphere', r: 0.035, n: 5, m: 8, pos: BAT[0], color: '#facc15', anim: { type: 'path', pts: BAT, wave: 'saw', rate: 0.5, phase: k / 14 } })) },
        { id: 'elica', name: 'Elicea (munca!)', label: 'Elice', color: '#22c55e', pos: [0, 0, 1.62], explode: [0, 0, 1.4], anim: SPIN,
          info: '<p>Iată la ce servește motorul: învârte ceva! Aici o elice, ca la un ventilator. Energia electrică a devenit <b>energie de mișcare</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.12, h: 0.14, n: 20, rot: [90, 0, 0], color: '#15803d' } ].concat([0, 120, 240].map((a) => ({ t: 'group', rot: [0, 0, a], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.45, 0], scale: [0.16, 0.38, 0.03], rot: [0, 25, 0] } ] }))) }
      ]
    },
    steps: [
      { icon: '⚡', title: 'De la curent la mișcare', explode: 0,
        html: '<p>Un motor electric învârte un <b>ax</b> folosind doar electricitate și magneți. Nu arde nimic, nu scoate fum și aproape nu se încălzește.</p><p>Are o parte nemișcată, <b>statorul</b> (magneții), și o parte care se învârte, <b>rotorul</b> (bobinele).</p>' },
      { icon: '🧲', title: 'Magneții: se trag și se împing', focus: ['magnete-n', 'magnete-s', 'campo'], explode: 0.2, view: { rx: 0.05, ry: -0.1 },
        html: '<p>Fiecare magnet are un pol <b>Nord</b> și un pol <b>Sud</b>. Polii <b>diferiți se atrag</b>, polii <b>la fel se resping</b>.</p><p>Între cei doi magneți ai motorului există un <b>câmp magnetic</b> invizibil (săgețile violete) care merge de la Nord la Sud.</p><p class="tip">🧪 Încearcă cu doi magneți de frigider: întorcându-l pe unul, simți că se resping sau se lipesc.</p>' },
      { icon: '🌀', title: 'Bobine care devin magneți', focus: ['bobine', 'rotore', 'corrente'], explode: 0.35, view: { rx: 0.2, ry: -0.5 },
        html: '<p><b>Bobinele</b> sunt fire de cupru înfășurate de multe ori în jurul fierului rotorului. Când trece curent prin ele devin <b>electromagneți</b>: magneți care pot fi aprinși și stinși!</p><p class="tip">🔩 Poți construi unul: înfășoară un fir în jurul unui cui și leagă-l la o baterie. Cuiul va atrage agrafele de birou.</p>' },
      { icon: '🔄', title: 'Împingeri și trageri: rotorul se învârte', focus: ['rotore', 'bobine', 'magnete-n', 'magnete-s'], explode: 0, view: { rx: 0.0, ry: 0.0 },
        html: '<p>Polul unei bobine este <b>atras</b> de magnetul din față cu pol opus și <b>respins</b> de cel cu același pol. Așa rotorul începe să se învârtă.</p>' },
      { icon: '🔀', title: 'Colectorul și periile: trucul', focus: ['commutatore', 'spazzole', 'corrente', 'pila'], explode: 0.3, zoom: 1.1, view: { rx: 0.25, ry: -0.3 },
        html: '<p>Dacă nu s-ar întâmpla nimic, bobina s-ar opri în fața magnetului care o atrage. Dar chiar în acel moment <b>colectorul</b>, învârtindu-se sub <b>perii</b>, <b>inversează curentul</b>: polul bobinei se schimbă și este din nou împins înainte.</p><p>Așa rotorul nu se oprește niciodată cât timp există curent.</p>' },
      { icon: '🌬️', title: 'Axul face munca', focus: ['albero', 'elica', 'calotta'], explode: 0, view: { rx: 0.25, ry: -0.9 },
        html: '<p><b>Axul</b> iese din motor și învârte <b>elicea</b>: energia electrică a devenit energie de mișcare. În locul elicei ar putea fi o roată, fulia mașinii de spălat sau burghiul unei bormașini.</p>' },
      { icon: '🔁', title: 'Și invers: dinamul', explode: 0.5, view: { rx: 0.3, ry: -0.7 },
        html: '<p>Dacă învârți cu mâna axul unui motor ca acesta, din perii iese curent: devine un <b>generator</b> (un dinam)! Este același principiu ca la centralele electrice și la dinamul bicicletei.</p><p class="tip">🚗 Mașinile electrice îl folosesc când frânează: motorul devine generator și reîncarcă bateria.</p>' }
    ],
    facts: [
      { icon: '🧭', title: 'O busolă înnebunită', html: 'În 1820 Hans Christian Ørsted a observat că acul unei busole se mișca lângă un fir prin care trecea curent: descoperise că <b>electricitatea și magnetismul</b> sunt legate.' },
      { icon: '🇮🇹', title: 'Galileo Ferraris', html: 'Inginerul din Torino <b>Galileo Ferraris</b> a inventat în 1885 motorul cu câmp magnetic rotitor, „tatăl” motoarelor din fabricile de astăzi.' },
      { icon: '🏠', title: 'Câte motoare în casă?', html: 'Frigider, mașină de spălat, aspirator, ventilator, uscător de păr, blender, cititor… Într-o casă există adesea mai mult de <b>30 de motoare electrice</b>!' },
      { icon: '🔋', title: 'Foarte eficient', html: 'Un motor electric bun transformă în mișcare mai mult de <b>90%</b> din energia primită; un motor pe benzină aproximativ 30%.' }
    ],
    quiz: [
      { type: 'mc', q: 'Doi magneți cu polii Nord unul în fața celuilalt…', options: ['se atrag', 'se resping', 'nu fac nimic', 'devin un singur magnet'], answer: 1, explain: 'Polii la fel se resping, polii diferiți se atrag.' },
      { type: 'mc', q: 'Ce devine o bobină de cupru când trece curent prin ea?', options: ['Un bec', 'Un electromagnet', 'O baterie', 'Un izolator'], answer: 1, explain: 'Curentul creează un câmp magnetic: bobina devine un magnet care poate fi aprins și stins.' },
      { type: 'mc', q: 'La ce servește colectorul?', options: ['Să răcească motorul', 'Să inverseze curentul în bobine la momentul potrivit', 'Să facă zgomot', 'Să țină magneții nemișcați'], answer: 1, explain: 'Inversând curentul, polul bobinei se schimbă, așa că rotorul continuă să fie împins.' },
      { type: 'tf', q: 'Dacă schimbi între ele cele două fire ale bateriei, motorul se învârte invers.', answer: true, explain: 'Curentul curge în sens opus, polii bobinelor se inversează și la fel sensul de rotație.' },
      { type: 'mc', q: 'Cum se numește partea motorului care se învârte?', options: ['Stator', 'Rotor', 'Carcasă', 'Capac'], answer: 1, explain: 'Rotorul se învârte; statorul (cu magneții) stă nemișcat.' },
      { type: 'mc', q: 'Ce se întâmplă dacă învârți cu mâna axul unui motor electric?', options: ['Se strică', 'Produce curent: devine un generator', 'Se magnetizează bateria', 'Nimic'], answer: 1, explain: 'Motorul funcționează și invers: este principiul dinamurilor și al centralelor electrice.' }
    ]
  });
})();
