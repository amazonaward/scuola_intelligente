/* Il sottomarino (diesel-elettrico). Asse lungo x: prua a +x, poppa a -x. Ciclo (1): 0–0.5 le casse si riempiono, 0.5–1 si svuotano. */
(function () {
  const ROT = [0, 0, -90]; // porta l'asse y delle primitive lungo x
  const hull = [[0, -3.25], [0.18, -3.05], [0.42, -2.55], [0.6, -1.85], [0.7, -1.0], [0.72, 0], [0.72, 2.1], [0.64, 2.65], [0.45, 3.0], [0.2, 3.2], [0, 3.27]];
  const blades = Array.from({ length: 7 }, (_, k) => ({ t: 'group', rot: [0, k * 360 / 7, 0], shapes: [{ t: 'box', s: [0.42, 0.025, 0.16], pos: [0.27, 0, 0], rot: [30, 0, 0] }] }));
  const tankWater = (x, w) => ({ t: 'group', pos: [x, -0.62, 0], anim: { type: 'scale', axis: 'y', from: 0.04, to: 1, wave: 'window', win: [0.02, 0.98], ramp: 0.45 }, shapes: [
    { t: 'box', s: [w, 1.2, 1.15], pos: [0, 0.6, 0] }
  ] });

  LIBRARY({
    lang: 'ro',
    id: 'sottomarino',
    title: 'Submarinul',
    intro: 'Un submarin poate să <b>plutească</b> ca o navă sau să <b>coboare</b> sub apă și apoi să urce înapoi. Care e secretul? Își schimbă greutatea umplând cu apă sau cu aer niște rezervoare mari.',
    model: {
      rx: 0.22, ry: -0.5, speed: 0.12, height: 460, bg: 'sea', floor: false,
      parts: [
        { id: 'scafo-esterno', name: 'Carena exterioară', color: '#cbd5e1', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>Este „haina” submarinului, cu o formă alungită ca a unui pește sau a unei balene, ca să alunece prin apă fără prea mult efort.</p>',
          shapes: [ { t: 'lathe', n: 32, rot: ROT, pts: hull } ] },
        { id: 'scafo-resistente', name: 'Carena rezistentă', color: '#94a3b8', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>Este un tub mare din oțel gros, în care locuiește echipajul. Trebuie să reziste la <b>presiunea</b> uriașă a apei din adânc.</p>',
          more: '<p>La fiecare 10 metri de adâncime presiunea crește cu aproximativ 1 atmosferă. La 300 de metri, pe fiecare centimetru pătrat al carenei apasă o greutate de circa 30 kg!</p>',
          shapes: [ { t: 'cyl', r: 0.5, h: 4.2, n: 32, rot: ROT, pos: [0, 0, 0] } ] },
        { id: 'casse-zavorra', name: 'Tancuri de balast', label: 'Tancuri de balast', color: '#7dd3fc', alpha: 0.35, explode: [0, -0.9, 0],
          info: '<p>Sunt niște „rezervoare” mari între cele două carene, la prova și la pupa. Pot fi umplute cu <b>apă</b> (pentru a coborî) sau cu <b>aer</b> (pentru a urca).</p>',
          shapes: [ { t: 'box', s: [0.75, 1.24, 1.2], pos: [2.55, 0, 0] }, { t: 'box', s: [0.6, 1.0, 1.0], pos: [-2.4, 0, 0] } ] },
        { id: 'acqua-zavorra', name: 'Apa din tancuri', label: 'Apă', color: '#0284c7', alpha: 0.7, explode: [0, -0.9, 0],
          info: '<p>Când se deschid supapele, apa mării intră în tancuri: submarinul devine <b>mai greu</b> și coboară.</p>',
          shapes: [ tankWater(2.55, 0.72), Object.assign(tankWater(-2.4, 0.57), { pos: [-2.4, -0.5, 0], shapes: [{ t: 'box', s: [0.57, 1.0, 0.95], pos: [0, 0.5, 0] }] }) ] },
        { id: 'aria-compressa', name: 'Butelii cu aer comprimat', label: 'Aer comprimat', color: '#22c55e', pos: [0.2, 0.36, 0], explode: [0, 1.1, 0.6],
          info: '<p>Conțin aer strâns la o presiune foarte mare. Pentru a urca, aerul este suflat în tancurile de balast și <b>împinge apa afară</b>.</p>',
          shapes: [-0.45, 0, 0.45].map((x) => ({ t: 'cyl', r: 0.07, h: 0.38, n: 14, rot: ROT, pos: [x, 0, -0.18] })) },
        { id: 'torretta', name: 'Turelă', color: '#1f2937', pos: [0.95, 0.68, 0], explode: [0, 0.9, 0],
          info: '<p>Turnul de deasupra carenei. Când submarinul este la suprafață, de aici se privește în jur; prin el trec periscopul și antenele.</p>',
          shapes: [ { t: 'extrude', d: 0.3, pts: [[-0.5, 0], [0.48, 0], [0.38, 0.85], [-0.36, 0.85]], smooth: false }, { t: 'box', s: [0.25, 0.03, 0.9], pos: [0.12, 0.55, 0] } ] },
        { id: 'periscopio', name: 'Periscop', color: '#64748b', pos: [1.05, 1.45, 0], explode: [0, 1.3, 0], anim: { type: 'move', dir: [0, 1, 0], amp: 0.4, wave: 'sin01', rate: 0.5 },
          info: '<p>Un tub lung cu două oglinzi (sau prisme) care îți permite să vezi deasupra apei rămânând dedesubt. Azi multe submarine folosesc o <b>cameră video</b>.</p>',
          more: '<p>Lumina intră pe sus, se reflectă într-o oglindă înclinată la 45°, coboară prin tub, iar o a doua oglindă o trimite spre ochi. Este același principiu ca la periscopul din carton pe care îl poți construi acasă.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 0.9, n: 10 }, { t: 'box', s: [0.14, 0.12, 0.1], pos: [0.03, 0.48, 0], color: '#334155' }, { t: 'box', s: [0.01, 0.08, 0.07], pos: [0.105, 0.48, 0], color: '#38bdf8', decal: 1 } ] },
        { id: 'elica', name: 'Elice', color: '#ca8a04', pos: [-3.3, 0, 0], rot: [0, 0, 90], explode: [-0.6, 0, 0], anim: { type: 'spin', axis: 'y', rate: 2 },
          info: '<p>Când se învârte, împinge apa înapoi, iar apa împinge submarinul înainte. Are pale late și lente ca să facă <b>puțin zgomot</b>.</p>',
          shapes: [ { t: 'cone', r: 0.1, h: 0.25, n: 16, color: '#a16207' } ].concat(blades) },
        { id: 'timoni', name: 'Cârme', color: '#475569', explode: [-0.4, 0, 0],
          info: '<p>„Înotătoarele” cozii. Cârma verticală îl face să se întoarcă la dreapta și la stânga; cele orizontale (de <b>adâncime</b>) îndreaptă prova în sus sau în jos.</p>',
          shapes: [ { t: 'box', s: [0.4, 1.3, 0.05], pos: [-2.85, 0, 0], color: '#475569' },
            { t: 'group', pos: [-2.75, 0, 0], anim: { type: 'swing', axis: 'z', amp: 10, rate: 0.25 }, shapes: [ { t: 'box', s: [0.4, 0.05, 1.5], color: '#334155' } ] } ] },
        { id: 'motore-elettrico', name: 'Motor electric', color: '#f59e0b', pos: [-1.75, 0, 0], explode: [0, 0, 1.1],
          info: '<p>Învârte elicea. Sub apă funcționează cu electricitatea din baterii: nu are nevoie de aer și este silențios.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.6, n: 24, rot: ROT }, { t: 'cyl', r: 0.045, h: 1.35, n: 10, rot: ROT, pos: [-0.95, 0, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2 } } ] },
        { id: 'diesel', name: 'Motor diesel și generator', label: 'Motor diesel', color: '#9a3412', pos: [-0.85, -0.05, 0], explode: [0, 0, 1.2],
          info: '<p>Când submarinul este aproape de suprafață, motorul diesel ia aer printr-un tub (<b>snorkelul</b>) și produce electricitate pentru a reîncărca bateriile.</p>',
          more: '<p>Submarinele mai mari folosesc în schimb un mic <b>reactor nuclear</b>, care nu are nevoie de aer: ele pot rămâne sub apă luni întregi.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.45, 0.5] }, { t: 'cyl', r: 0.15, h: 0.3, n: 16, rot: ROT, pos: [0.42, 0, 0], color: '#b45309' } ] },
        { id: 'batterie', name: 'Baterii', color: '#16a34a', pos: [0.2, -0.36, 0], explode: [0, -1.0, 0.6],
          info: '<p>Multe baterii așezate pe fundul carenei dau curent motorului electric, luminilor și instrumentelor atunci când se navighează sub apă.</p>',
          shapes: Array.from({ length: 10 }, (_, k) => ({ t: 'box', s: [0.18, 0.16, 0.22], pos: [-0.85 + (k % 5) * 0.21 + 0.4, 0, (k < 5 ? -0.13 : 0.13)] })) },
        { id: 'sala-controllo', name: 'Camera de comandă', label: 'Camera de comandă', color: '#e2e8f0', pos: [1.05, 0.05, 0], explode: [0, 0, 1.3],
          info: '<p>„Creierul” submarinului: de aici comandantul și echipajul conduc, controlează adâncimea și ascultă sonarul.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.6] }, { t: 'box', s: [0.6, 0.18, 0.01], pos: [0, 0.08, 0.305], color: '#0f766e', decal: 1 }, { t: 'box', s: [0.08, 0.06, 0.01], pos: [-0.2, -0.12, 0.31], color: '#ef4444', decal: 1, anim: { type: 'blink', color: '#fecaca', wave: 'square', rate: 1.5 } } ] },
        { id: 'sonar', name: 'Sonar', color: '#facc15', alpha: 0.85, pos: [2.85, -0.05, 0], explode: [0.7, 0, 0],
          info: '<p>„Urechile” submarinului. Trimite un sunet („ping!”) și ascultă <b>ecoul</b> care se întoarce de la obstacole: din timpul ecoului își dă seama cât de departe sunt. La fel fac și delfinii și liliecii!</p>',
          more: '<p>În apă sunetul călătorește cu aproximativ <b>1500 m/s</b>, de peste 4 ori mai repede decât în aer. Dacă ecoul se întoarce după 2 secunde, obstacolul este la 1500 m (sunetul face drumul dus-întors).</p>',
          shapes: [ { t: 'sphere', r: 0.36, n: 12, scale: [1, 1, 1.15] },
            { t: 'group', anim: [{ type: 'move', dir: [1, 0, 0], amp: 2.2, wave: 'saw', rate: 0.6 }, { type: 'scale', from: 0.6, to: 2.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 }],
              shapes: [ { t: 'torus', R: 0.35, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#fef08a' } ] } ] }
      ]
    },
    steps: [
      { icon: '🛟', title: 'Plutirea', focus: ['casse-zavorra', 'scafo-esterno', 'torretta'], loop: [0, 0.02], explode: 0,
        html: '<p>Când <b>tancurile de balast</b> sunt pline cu aer, submarinul este mai ușor decât apa pe care o dislocă: <b>plutește</b> ca o navă.</p><p class="tip">🛁 Este <b>principiul lui Arhimede</b>: apa împinge în sus un obiect cu o forță egală cu greutatea apei pe care obiectul o dislocă.</p>' },
      { icon: '⬇️', title: 'Scufundarea', focus: ['casse-zavorra', 'acqua-zavorra', 'timoni'], loop: [0, 0.5], explode: 0,
        html: '<p>Se deschid supapele: apa mării <b>intră în tancuri</b> și scoate aerul afară. Submarinul devine mai greu și <b>coboară</b>.</p><p><b>Cârmele de adâncime</b> îl ajută să se încline și să se oprească la adâncimea potrivită.</p>' },
      { icon: '⬆️', title: 'Ridicarea', focus: ['aria-compressa', 'acqua-zavorra', 'casse-zavorra'], loop: [0.5, 1], explode: 0,
        html: '<p>Pentru a urca înapoi, <b>aerul comprimat</b> din butelii este suflat în tancuri și împinge apa afară. Submarinul devine mai ușor și <b>urcă</b>.</p>' },
      { icon: '⚙️', title: 'Înainte, toată viteza!', focus: ['elica', 'motore-elettrico', 'batterie', 'diesel'], explode: 0.45, view: { rx: 0.25, ry: -0.9 },
        html: '<p><b>Bateriile</b> alimentează <b>motorul electric</b>, care învârte <b>elicea</b>. Aproape de suprafață, <b>motorul diesel</b> reîncarcă bateriile.</p><p>Cârma verticală îl face să se întoarcă la dreapta și la stânga.</p>' },
      { icon: '🔊', title: 'Să vezi fără lumină', focus: ['sonar', 'periscopio', 'sala-controllo'], explode: 0.25, view: { rx: 0.2, ry: -0.3 },
        html: '<p>În adânc este întuneric beznă. <b>Sonarul</b> folosește sunetul: trimite un „ping” și ascultă ecoul. Aproape de suprafață se ridică <b>periscopul</b> ca să se privească afară.</p>' },
      { icon: '🧑‍✈️', title: 'Viața acolo jos', focus: ['scafo-resistente', 'sala-controllo'], explode: 0.2,
        html: '<p>Echipajul trăiește în interiorul <b>carenei rezistente</b>, care suportă presiunea apei. Aparate speciale produc oxigen și scot dioxidul de carbon din aer.</p>' }
    ],
    facts: [
      { icon: '🐳', title: 'Inspirați de natură', html: 'Peștii osoși au o <b>vezică înotătoare</b>: umflând-o sau dezumflând-o cu gaz, urcă sau coboară, exact ca un submarin.' },
      { icon: '📏', title: 'Până în abis', html: 'În 1960 batiscaful <b>Trieste</b>, proiectat de Auguste Piccard și construit în Italia, a coborât în Groapa Marianelor la aproape 11 000 de metri.' },
      { icon: '🐬', title: 'Ca delfinii', html: 'Delfinii și liliecii folosesc <b>ecolocația</b>: scot sunete și ascultă ecoul ca să „vadă” pe întuneric.' },
      { icon: '📚', title: 'Douăzeci de mii de leghe', html: 'În romanul lui Jules Verne (1870), căpitanul Nemo călătorește cu submarinul <i>Nautilus</i>, cu mult înainte să existe unele adevărate ca el.' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce face submarinul să coboare?', options: ['Oprirea motorului', 'Umplerea cu apă a tancurilor de balast', 'Ridicarea periscopului', 'Pornirea sonarului'], answer: 1, explain: 'Apa din tancuri îl face mai greu decât apa pe care o dislocă, deci coboară.' },
      { type: 'mc', q: 'Cum urcă înapoi?', options: ['Suflând aer comprimat în tancuri ca să scoată apa', 'Învârtind elicea invers', 'Deschizând turela', 'Folosind periscopul'], answer: 0, explain: 'Aerul împinge apa afară: submarinul devine mai ușor și urcă.' },
      { type: 'mc', q: 'Ce principiu explică plutirea?', options: ['Principiul lui Arhimede', 'Legea lui Ohm', 'Principiul lui Pascal', 'Prima lege a lui Newton'], answer: 0, explain: 'Un corp scufundat primește o împingere în sus egală cu greutatea lichidului dislocat.' },
      { type: 'tf', q: 'Sonarul folosește lumina ca să găsească obstacolele.', answer: false, explain: 'Sonarul folosește sunetul și ascultă ecoul: sub apă lumina nu ajunge prea departe.' },
      { type: 'num', q: 'Sunetul în apă călătorește cu 1500 m/s. Dacă ecoul se întoarce după 2 secunde, la câți metri este obstacolul?', answer: 1500, unit: 'm', explain: 'În 2 s sunetul parcurge 3000 m, dar e drum dus-întors: 3000 ÷ 2 = 1500 m.' }
    ]
  });
})();
