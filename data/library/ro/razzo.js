/* Il razzo a due stadi con capsula (modello generico ispirato ai lanciatori reali). Asse verticale = y. */
(function () {
  /* serbatoio con fondi bombati (profilo di rivoluzione) */
  const tank = (r, h) => ({ t: 'lathe', n: 28, pts: [[0, -h / 2 - r * 0.5], [r * 0.55, -h / 2 - r * 0.42], [r * 0.85, -h / 2 - r * 0.22], [r, -h / 2], [r, h / 2], [r * 0.85, h / 2 + r * 0.22], [r * 0.55, h / 2 + r * 0.42], [0, h / 2 + r * 0.5]] });
  const ring5 = [[0, 0], [0.3, 0], [-0.3, 0], [0, 0.3], [0, -0.3]];
  const bell = (s) => ({ t: 'lathe', ds: true, n: 24, pts: [[0.07 * s, 0], [0.09 * s, -0.08 * s], [0.14 * s, -0.25 * s], [0.19 * s, -0.42 * s]] });
  const fin = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [{ t: 'extrude', d: 0.05, pts: [[0.55, 0.9], [0.55, 0], [1.05, -0.12], [1.05, 0.25]], color: '#1f2937' }] });
  const flame = (x, z) => ({ t: 'group', pos: [x, -0.72, z], anim: [{ type: 'scale', axis: 'y', from: 1, to: 1.25, wave: 'sin01', rate: 7, phase: (x + z) * 3, pivot: [0, 0.55, 0] }], shapes: [
    { t: 'cone', r: 0.19, h: 1.1, n: 16, rot: [180, 0, 0], color: '#f97316', alpha: 0.82 },
    { t: 'cone', r: 0.1, h: 0.75, n: 12, rot: [180, 0, 0], pos: [0, 0.17, 0], color: '#fde047' }
  ] });

  LIBRARY({
    lang: 'ro',
    id: 'razzo',
    title: 'Racheta',
    intro: 'Ca să ajungi în spațiu trebuie să alergi cu <b>28 000 km/h</b>! Racheta arde tone de combustibil și împinge gazele foarte fierbinți în jos: așa ea urcă în sus. Desfă-o treaptă cu treaptă.',
    model: {
      rx: 0.12, ry: -0.5, speed: 0.6, height: 520, bg: 'sky',
      parts: [
        { id: 'stadio-1', name: 'Prima treaptă', color: '#f8fafc', explode: [0, -1.5, 0],
          info: '<p>Este partea cea mai mare și mai grea: conține mult combustibil și cele mai puternice motoare. Lucrează în primele <b>2–3 minute</b>, apoi se desprinde și cade.</p>',
          more: '<p>La decolare, prima treaptă trebuie să ridice toată racheta, care poate cântări sute de tone. Unele trepte moderne se întorc și <b>aterizează în picioare</b> ca să fie folosite din nou!</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 3.6, n: 36, pos: [0, 1.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 3.5, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.25, n: 36, pos: [0, 0.12, 0], color: '#111827' }, { t: 'lathe', n: 36, ds: true, pts: [[0.55, 0], [0.62, -0.3]], color: '#334155' } ].concat([45, 135, 225, 315].map(fin)) },
        { id: 'ossidante-1', name: 'Rezervorul de oxigen (treapta 1)', label: 'Oxigen lichid', color: '#7dd3fc', pos: [0, 2.6, 0], explode: [-1.1, -1.5, 0],
          info: '<p>Conține <b>oxigen lichid</b>, foarte rece: −183 °C! În spațiu nu există aer, așa că racheta trebuie să ia cu ea și oxigenul ca să ardă combustibilul.</p>',
          more: '<p>Oxigenul care ajută la ardere se numește <b>oxidant</b>. Ca să rămână lichid trebuie ținut sub −183 °C: de aceea rezervoarele sunt izolate și pe pielea rachetei se vede gheață.</p>',
          shapes: [ tank(0.48, 1.3) ] },
        { id: 'carburante-1', name: 'Rezervorul de combustibil (treapta 1)', label: 'Combustibil', color: '#fb923c', pos: [0, 1.05, 0], explode: [1.1, -1.5, 0],
          info: '<p>Conține <b>combustibilul</b>, de exemplu kerosen rafinat (asemănător cu combustibilul avioanelor) sau metan lichid.</p>',
          shapes: [ tank(0.48, 0.75), { t: 'cyl', r: 0.05, h: 2.6, n: 10, pos: [0.25, 0.7, 0.25], color: '#94a3b8' } ] },
        { id: 'motori-1', name: 'Motoarele treptei 1', label: 'Motoare', color: '#9ca3af', pos: [0, -0.02, 0], explode: [0, -1.7, 0],
          info: '<p>În motoare, niște <b>pompe</b> puternice împing combustibilul și oxigenul în <b>camera de ardere</b>, unde ard la peste 3000 °C.</p>',
          more: '<p>Turbopompele se învârt cu zeci de mii de rotații pe minut: ar goli o piscină în câteva secunde! Motoarele se pot și înclina puțin ca să <b>conducă</b> racheta.</p>',
          shapes: [ { t: 'cyl', r: 0.52, h: 0.08, n: 36, pos: [0, 0.2, 0], color: '#475569' } ].concat(ring5.map(([x, z]) => ({ t: 'group', pos: [x, 0, z], shapes: [
            { t: 'cyl', r: 0.085, h: 0.22, n: 16 }, { t: 'box', s: [0.08, 0.12, 0.08], pos: [0.1, 0.06, 0], color: '#64748b' } ] }))) },
        { id: 'ugelli-1', name: 'Ajutaje', color: '#475569', pos: [0, -0.12, 0], explode: [0, -1.85, 0],
          info: '<p>Sunt „clopotele” mari de sub motoare. Gazul fierbinte iese strâns și apoi se lărgește în ajutaj, <b>accelerând</b> până la peste 10 000 km/h.</p>',
          more: '<p>Forma de clopot (ajutajul <b>de Laval</b>) transformă căldura gazelor în viteză. Cu cât gazele ies mai repede, cu atât racheta primește o împingere mai mare.</p>',
          shapes: ring5.map(([x, z]) => Object.assign(bell(1), { pos: [x, 0, z] })) },
        { id: 'fiamma', name: 'Jet de gaze fierbinți', label: 'Jet', color: '#f97316', explode: [0, -1.85, 0],
          info: '<p>Racheta împinge gazele <b>în jos</b>, iar gazele împing racheta <b>în sus</b>: este principiul acțiunii și reacțiunii.</p>',
          shapes: ring5.map(([x, z]) => flame(x, z)) },
        { id: 'stadio-2', name: 'A doua treaptă', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>Se aprinde după ce prima treaptă s-a desprins. Lucrează în vid, aproape fără aer, și duce încărcătura până pe <b>orbită</b>.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 2.1, n: 36, pos: [0, 4.8, 0], alpha: 0.28 }, { t: 'tube', r: 0.565, ri: 0.5, h: 0.18, n: 36, pos: [0, 3.84, 0], color: '#111827' },
            { t: 'tube', r: 0.565, ri: 0.5, h: 0.12, n: 36, pos: [0, 5.8, 0], color: '#cbd5e1' } ] },
        { id: 'ossidante-2', name: 'Rezervorul de oxigen (treapta 2)', label: 'Oxigen 2', color: '#7dd3fc', pos: [0, 5.2, 0], explode: [-1.0, 0, 0],
          info: '<p>Oxigen lichid pentru a doua treaptă: rezervorul e mai mic, pentru că acum racheta este mult mai ușoară.</p>', shapes: [ tank(0.46, 0.45) ] },
        { id: 'carburante-2', name: 'Rezervorul de combustibil (treapta 2)', label: 'Combustibil 2', color: '#fb923c', pos: [0, 4.35, 0], explode: [1.0, 0, 0],
          info: '<p>Combustibil pentru a doua treaptă. Deseori se folosește <b>hidrogen lichid</b>, care e foarte ușor, dar și foarte rece (−253 °C).</p>', shapes: [ tank(0.46, 0.25) ] },
        { id: 'motore-2', name: 'Motorul treptei 2', label: 'Motor 2', color: '#94a3b8', pos: [0, 3.78, 0], explode: [0, -0.45, 0],
          info: '<p>Un singur motor cu un <b>ajutaj foarte lung</b>: în vid gazele se pot lărgi mai mult și împing mai bine.</p>',
          shapes: [ { t: 'cyl', r: 0.1, h: 0.2, n: 16, pos: [0, 0.1, 0] }, Object.assign(bell(1.9), { pos: [0, 0, 0], color: '#64748b' }) ] },
        { id: 'modulo-servizio', name: 'Modulul de serviciu', color: '#e5e7eb', pos: [0, 6.18, 0], explode: [0, 0.8, 0],
          info: '<p>Este „cămara” capsulei: conține oxigen de respirat, apă, baterii și motoare mici pentru manevre în spațiu.</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 0.6, n: 36 }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [0.85, 0, 0], color: '#1e3a8a' }, { t: 'box', s: [0.9, 0.02, 0.32], pos: [-0.85, 0, 0], color: '#1e3a8a' },
            { t: 'cone', r: 0.12, h: 0.18, n: 12, pos: [0, -0.38, 0], rot: [180, 0, 0], color: '#475569' } ] },
        { id: 'capsula', name: 'Capsula echipajului', label: 'Capsulă', color: '#cbd5e1', pos: [0, 6.5, 0], explode: [0, 1.3, 0],
          info: '<p>Aici călătoresc <b>astronauții</b>. La întoarcere intră în atmosferă protejată de un <b>scut termic</b> și coboară cu parașutele.</p>',
          more: '<p>În timpul reintrării, aerul din fața capsulei devine incandescent: peste 2500 °C! Scutul termic se consumă încet și duce căldura cu el.</p>',
          shapes: [ { t: 'cyl', r: 0.5, r2: 0.2, h: 0.75, n: 36, pos: [0, 0.375, 0] }, { t: 'cyl', r: 0.5, h: 0.05, n: 36, pos: [0, -0.02, 0], color: '#78350f' },
            { t: 'box', s: [0.12, 0.12, 0.02], pos: [0, 0.45, 0.385], rot: [-22, 0, 0], color: '#0f172a', decal: 1 } ] },
        { id: 'torre', name: 'Turnul de salvare', label: 'Turn de salvare', color: '#ef4444', pos: [0, 7.25, 0], explode: [0, 1.9, 0],
          info: '<p>Este o mică rachetă de urgență: dacă ceva merge prost la decolare, <b>smulge capsula</b> și o duce departe în câteva secunde.</p>',
          shapes: [ { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [0.08, 0.27, 0], rot: [0, 0, -8] }, { t: 'cyl', r: 0.025, h: 0.55, n: 8, pos: [-0.08, 0.27, 0], rot: [0, 0, 8] },
            { t: 'cyl', r: 0.08, h: 0.45, n: 16, pos: [0, 0.75, 0] }, { t: 'cone', r: 0.08, h: 0.2, n: 16, pos: [0, 1.07, 0] } ] }
      ]
    },
    steps: [
      { icon: '⛽', title: 'Plinul: combustibil și oxigen', focus: ['ossidante-1', 'carburante-1', 'ossidante-2', 'carburante-2'], explode: 0.4,
        html: '<p>Aproape toată racheta este <b>rezervor</b>! Ca să ardă e nevoie de două ingrediente: <b>combustibilul</b> și <b>oxigenul</b>. Pe Pământ oxigenul se află în aer, dar în spațiu nu există: racheta îl ia cu ea, lichid și foarte rece.</p>' },
      { icon: '🔥', title: 'Aprinderea!', focus: ['motori-1', 'ugelli-1', 'fiamma'], explode: 0, view: { rx: -0.1, ry: -0.5 },
        html: '<p>Pompele împing combustibilul și oxigenul în <b>camera de ardere</b>. Ard la peste 3000 °C și devin gaze foarte fierbinți care vor să iasă.</p><p><b>Ajutajele</b> le fac să iasă foarte repede în jos.</p>' },
      { icon: '🎈', title: 'Acțiune și reacțiune', focus: ['fiamma', 'ugelli-1', 'stadio-1'], explode: 0,
        html: '<p>Ai dat vreodată drumul unui balon umflat? Aerul iese pe o parte și balonul zboară în partea cealaltă. Racheta face la fel!</p><p class="tip">🍎 Este <b>a treia lege a lui Newton</b>: oricărei acțiuni îi corespunde o reacțiune egală și de sens opus. Racheta nu are nevoie de aer ca să „se sprijine”: funcționează și în vid.</p>' },
      { icon: '✂️', title: 'Se desprinde prima treaptă', focus: ['stadio-1', 'ossidante-1', 'carburante-1', 'motori-1', 'ugelli-1', 'fiamma', 'stadio-2'], explode: 1,
        html: '<p>După aproximativ 2–3 minute, rezervoarele primei trepte sunt goale. Să le cari după tine ar fi doar greutate inutilă: prima treaptă <b>se desprinde</b> și cade înapoi.</p><p>Așa restul rachetei e mult mai ușor și accelerează mai ușor.</p>' },
      { icon: '🌍', title: 'Pe orbită cu a doua treaptă', focus: ['stadio-2', 'motore-2', 'ossidante-2', 'carburante-2'], explode: 0.6,
        html: '<p><b>A doua treaptă</b> se aprinde și împinge până la aproximativ <b>28 000 km/h</b>. La această viteză capsula continuă să „cadă” în jurul Pământului fără să-l atingă vreodată: este pe <b>orbită</b>!</p>' },
      { icon: '👩‍🚀', title: 'Capsula și întoarcerea', focus: ['capsula', 'modulo-servizio', 'torre'], explode: 0.5, view: { rx: 0.3, ry: -0.4 },
        html: '<p><b>Turnul de salvare</b> îi protejează pe astronauți la decolare și apoi este desprins. În spațiu, <b>modulul de serviciu</b> le dă aer, apă și energie.</p><p>Ca să se întoarcă, capsula reintră în atmosferă cu <b>scutul termic</b> și coboară cu parașutele.</p>' }
    ],
    facts: [
      { icon: '🌕', title: 'Uriașul Saturn V', html: 'Racheta care i-a dus pe oameni pe Lună în 1969 avea 110 metri înălțime, cât un bloc cu 36 de etaje, și cântărea aproape 3000 de tone.' },
      { icon: '🇮🇹', title: 'O rachetă italiană', html: '<b>Vega</b> este un lansator european proiectat și construit în Italia, la Colleferro (Roma). Duce pe orbită sateliți mici.' },
      { icon: '🔁', title: 'Rachete care aterizează', html: 'Din 2015, unele prime trepte se întorc și aterizează vertical pe o platformă, chiar și în mijlocul mării, ca să fie refolosite.' },
      { icon: '🏎️', title: 'Mai rapidă decât un glonț', html: 'Ca să rămâi pe o orbită joasă ai nevoie de aproximativ 7,8 km pe secundă: ai ajunge de la Milano la Roma în puțin peste un minut!' }
    ],
    quiz: [
      { type: 'mc', q: 'De ce ia racheta cu ea oxigen lichid?', options: ['Ca să-l respire astronauții la decolare', 'Pentru că în spațiu nu există aer ca să ardă combustibilul', 'Ca să răcească motoarele', 'Ca să facă flacăra albastră'], answer: 1, explain: 'Fără oxigen combustibilul nu arde, iar în spațiu nu există aer: racheta trebuie să ia cu ea și oxidantul.' },
      { type: 'mc', q: 'Ce lege explică cum zboară o rachetă?', options: ['Legea lui Arhimede', 'A treia lege a lui Newton (acțiune și reacțiune)', 'Legea gravitației a lui Galilei', 'Legea lui Ohm'], answer: 1, explain: 'Gazele împinse în jos împing racheta în sus: acțiune și reacțiune.' },
      { type: 'tf', q: 'O rachetă are nevoie de aer ca să se împingă înainte.', answer: false, explain: 'Racheta împinge în propriile gaze, nu în aer: funcționează și în vid, ba chiar mai bine.' },
      { type: 'mc', q: 'De ce se desprinde prima treaptă?', options: ['Pentru că e stricată', 'Pentru că rezervoarele ei sunt goale și ar fi doar greutate inutilă', 'Ca să facă loc astronauților', 'Ca să încetinească'], answer: 1, explain: 'Scăpând de greutatea goală, restul rachetei poate accelera mai mult.' },
      { type: 'mc', q: 'La ce folosește scutul termic al capsulei?', options: ['O protejează de căldura reintrării în atmosferă', 'O apără de ploaie', 'O face să plutească', 'Produce curent electric'], answer: 0, explain: 'Când reintră cu viteză mare, aerul din fața capsulei devine foarte fierbinte: scutul îi protejează pe astronauți.' }
    ]
  });
})();
