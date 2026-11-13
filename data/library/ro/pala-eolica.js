/* Turbina eoliană (aerogenerator cu ax orizontal). Vântul vine din −x; rotorul se învârte în jurul axei x.
   Nacela este semitransparentă ca să se vadă arborele, multiplicatorul și generatorul. */
(function () {
  const AX = [0, 0, -90], HY = 6.25, HX = -1.05;                  // înălțimea butucului și poziția rotorului
  const blade = (a) => ({ t: 'group', rot: [a, 0, 0], shapes: [ { t: 'group', rot: [0, 78, 0], shapes: [
    { t: 'cyl', r: 0.11, h: 0.45, n: 16, pos: [0, 0.45, 0], color: '#e5e7eb' },
    { t: 'extrude', d: 0.07, smooth: true, pts: [[-0.08, 0.6], [0.14, 0.62], [0.27, 0.95], [0.25, 1.6], [0.18, 2.6], [0.1, 3.5], [0.04, 3.95], [-0.02, 3.98], [-0.05, 3.2], [-0.07, 2.0], [-0.09, 1.1]], color: '#f8fafc' },
    { t: 'extrude', d: 0.075, pts: [[0.0, 3.6], [0.07, 3.6], [0.04, 3.95], [-0.02, 3.98], [-0.03, 3.6]], color: '#ef4444' } ] } ] });
  const gear = (r, teeth, col) => [ { t: 'cyl', r, h: 0.06, n: 28, color: col }, { t: 'cyl', r: r * 0.3, h: 0.08, n: 14, color: '#1f2937' } ]
    .concat(Array.from({ length: teeth }, (_, k) => ({ t: 'group', rot: [0, k * 360 / teeth, 0], shapes: [ { t: 'box', s: [0.05, 0.06, 0.04], pos: [r + 0.02, 0, 0], color: col } ] })));
  const R1 = 0.22, R2 = 0.09, GY = HY, GX = 0.68;                 // roțile dințate ale multiplicatorului
  const wind = Array.from({ length: 16 }, (_, k) => {
    const a = k * 2.4, r = 0.6 + (k % 4) * 0.8, y = HY + r * Math.sin(a), z = r * Math.cos(a);
    return { t: 'sphere', r: 0.05, n: 6, m: 8, scale: [4, 1, 1], pos: [-5, y, z], color: '#bae6fd', anim: [ { type: 'path', pts: [[-5, y, z], [-1.3, y, z], [2.6, y * 0.98 + 0.12, z * 1.1]], wave: 'saw', rate: 0.45, phase: k / 16 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.98, ramp: 0.1, rate: 0.45, phase: k / 16 } ] };
  });
  const POWER = [[1.05, HY + 0.2, 0], [1.0, HY - 0.3, 0.05], [0.05, 5.8, 0.05], [0.05, 0.5, 0.05], [0.4, 0.15, 0.4], [1.1, 0.25, 0.9], [2.0, 0.05, 1.6], [3.2, 0.05, 2.4]];

  LIBRARY({
    lang: 'ro',
    id: 'pala-eolica',
    title: 'Turbina eoliană',
    intro: 'O turbină eoliană (sau <b>aerogenerator</b>) este o moară de vânt modernă: vântul învârte palele ei mari, iar un <b>generator</b> transformă mișcarea în <b>electricitate</b>, fără să ardă nimic și fără să polueze aerul.',
    model: {
      rx: 0.2, ry: -0.75, speed: 0.4, height: 500, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'pale', name: 'Pale', color: '#f8fafc', pos: [HX, HY, 0], explode: [-1.4, 0, 0],
          anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>Trei pale lungi în formă de <b>aripă de avion</b>. Vântul, trecând peste suprafața lor curbată, le împinge într-o parte și le face să se rotească.</p>',
          more: '<p>Palele moderne sunt lungi de peste <b>80 de metri</b> și făcute din fibră de sticlă și rășini, ușoare și rezistente. Vârful poate depăși 300 km/h, chiar dacă rotorul pare să se învârtă încet. De ce trei pale? Este cel mai bun compromis între eficiență, greutate și stabilitate.</p>',
          shapes: [ blade(0), blade(120), blade(240) ] },
        { id: 'mozzo', name: 'Butuc și con frontal', label: 'Butuc', color: '#e5e7eb', pos: [HX, HY, 0], explode: [-1.0, 0, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 },
          info: '<p>„Centrul” rotorului, de care sunt prinse palele. Conul din față, <b>ogiva</b>, protejează mecanismele și taie aerul.</p>',
          more: '<p>În interiorul butucului sunt motoarele de <b>reglare a unghiului</b>: rotesc fiecare pală în jurul axei ei. Cu vânt puternic, palele se întorc „pe muchie” ca rotorul să nu se învârtă prea repede; cu vânt prea puternic (peste 90 km/h) turbina se oprește din motive de siguranță.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pts: [[0.32, 0.12], [0.33, 0], [0.3, -0.18], [0.2, -0.38], [0.08, -0.5], [0, -0.53]] }, { t: 'cyl', r: 0.3, h: 0.25, n: 30, rot: AX, pos: [0.22, 0, 0], color: '#cbd5e1' } ] },
        { id: 'navicella', name: 'Nacelă', color: '#f1f5f9', alpha: 0.32, explode: [0.3, 1.1, 0],
          info: '<p>„Căsuța” din vârful turnului: conține toate mașinăriile care transformă rotația în electricitate. Este cât o camionetă, iar tehnicienii intră în ea pentru întreținere.</p>',
          shapes: [ { t: 'lathe', n: 30, rot: AX, pos: [-0.15, HY, 0], pts: [[0.26, -0.72], [0.4, -0.62], [0.46, -0.4], [0.47, 0], [0.47, 1.25], [0.43, 1.45], [0.3, 1.55], [0, 1.57]], ds: true },
            { t: 'box', s: [0.25, 0.12, 0.06], pos: [0.95, HY + 0.47, 0], color: '#94a3b8', alpha: 1 } ] },
        { id: 'albero', name: 'Arbore lent', label: 'Arbore lent', color: '#94a3b8', explode: [-0.2, 0.6, 0.6],
          info: '<p>Un cilindru gros de oțel legat de butuc: se învârte încet, odată cu palele (aproximativ <b>10–15 rotații pe minut</b>), dar cu o forță uriașă.</p>',
          shapes: [ { t: 'cyl', r: 0.18, h: 0.18, n: 24, rot: AX, pos: [-0.55, HY, 0], color: '#475569' },
            { t: 'group', pos: [-0.25, HY, 0], anim: { type: 'spin', axis: 'x', rate: 0.5 }, shapes: [ { t: 'cyl', r: 0.08, h: 1.1, n: 18, rot: AX }, { t: 'box', s: [0.6, 0.02, 0.17], pos: [0, 0.08, 0], color: '#facc15', decal: 1 } ] } ] },
        { id: 'moltiplicatore', name: 'Multiplicator de turație', label: 'Multiplicator', color: '#475569', explode: [0.1, 0.9, 0.9],
          info: '<p>O cutie cu <b>roți dințate</b>, ca schimbătorul de viteze al unei biciclete: o roată mare face o roată mică să se învârtă mult mai repede. Așa, puținele rotații ale palelor devin multe rotații pentru generator.</p>',
          more: '<p>Multiplicatorul mărește viteza de aproximativ <b>100 de ori</b>: de la 15 la 1500 de rotații pe minut. Unele turbine moderne nu îl au: folosesc generatoare uriașe pline de magneți, care funcționează și când se rotesc încet („direct drive”).</p>',
          shapes: [ { t: 'box', s: [0.5, 0.52, 0.55], pos: [0.36, HY, 0] },
            { t: 'group', pos: [GX, GY, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: 0.5 }, shapes: gear(R1, 18, '#f59e0b') },
            { t: 'group', pos: [GX, GY + R1 + R2 + 0.02, 0], rot: AX, anim: { type: 'spin', axis: 'y', rate: -0.5 * R1 / R2 }, shapes: gear(R2, 8, '#fbbf24') } ] },
        { id: 'freno', name: 'Frână cu disc', label: 'Frână', color: '#9ca3af', explode: [0.4, 0.6, 1.0],
          info: '<p>O frână cu disc, ca aceea de la motociclete, care oprește rotorul pentru întreținere sau în caz de urgență.</p>',
          shapes: [ { t: 'group', pos: [0.86, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.13, h: 0.03, n: 24, rot: AX }, { t: 'cyl', r: 0.03, h: 0.4, n: 10, rot: AX, pos: [0.15, 0, 0], color: '#64748b' } ] },
            { t: 'box', s: [0.08, 0.08, 0.1], pos: [0.86, GY + R1 + R2 + 0.15, 0], color: '#dc2626' } ] },
        { id: 'generatore', name: 'Generator', color: '#1d4ed8', explode: [0.9, 0.9, 0.5],
          info: '<p>Inima electrică a turbinei: înăuntru, niște <b>magneți</b> se rotesc lângă bobine de sârmă de cupru. Mișcarea magneților face să apară <b>curentul electric</b> în sârmă.</p>',
          more: '<p>Este principiul <b>inducției electromagnetice</b>, descoperit de Michael Faraday în 1831: același ca la dinamul bicicletei. O turbină mare produce 3–15 megawați, suficient pentru mii de case.</p>',
          shapes: [ { t: 'cyl', r: 0.19, h: 0.42, n: 28, rot: AX, pos: [1.2, GY + R1 + R2 + 0.02, 0] }, { t: 'cyl', r: 0.2, h: 0.04, n: 28, rot: AX, pos: [1.0, GY + R1 + R2 + 0.02, 0], color: '#94a3b8' },
            { t: 'group', pos: [1.43, GY + R1 + R2 + 0.02, 0], anim: { type: 'spin', axis: 'x', rate: -0.5 * R1 / R2 }, shapes: [ { t: 'cyl', r: 0.12, h: 0.03, n: 6, rot: AX, color: '#e2e8f0' }, { t: 'box', s: [0.035, 0.2, 0.03], pos: [0.02, 0, 0], color: '#b45309' } ] },
            { t: 'box', s: [0.3, 0.3, 0.2], pos: [1.1, HY - 0.2, 0.2], color: '#334155' } ] },
        { id: 'anemometro', name: 'Anemometru și girueta', label: 'Anemometru', color: '#e2e8f0', explode: [0.5, 1.4, 0],
          info: '<p>Pe acoperișul nacelei, un <b>anemometru</b> măsoară viteza vântului, iar o <b>giruetă</b> îi arată direcția. Calculatorul turbinei hotărăște astfel cum să se orienteze și când să pornească.</p>',
          shapes: [ { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.0, HY + 0.65, -0.1] }, { t: 'cyl', r: 0.02, h: 0.4, n: 8, pos: [1.25, HY + 0.65, 0.1] },
            { t: 'group', pos: [1.0, HY + 0.86, -0.1], anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [0, 120, 240].map((a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'cyl', r: 0.012, h: 0.2, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'sphere', r: 0.05, n: 8, m: 10, hemi: true, rot: [0, 0, 90], pos: [0.2, 0, 0], color: '#f8fafc' } ] })) },
            { t: 'group', pos: [1.25, HY + 0.86, 0.1], anim: { type: 'swing', axis: 'y', amp: 15, rate: 0.4 }, shapes: [ { t: 'cyl', r: 0.012, h: 0.3, n: 6, rot: [0, 0, 90], pos: [0.1, 0, 0] }, { t: 'extrude', pts: [[0.2, 0], [0.35, 0.1], [0.35, -0.06]], d: 0.01, color: '#ef4444' } ] } ] },
        { id: 'imbardata', name: 'Sistem de orientare', label: 'Orientare', color: '#64748b', explode: [0, 0.4, 0],
          info: '<p>O coroană dințată mare, cu motoare, între turn și nacelă: <b>rotește întreaga nacelă</b> ca să țină palele mereu în fața vântului, ca o giruetă.</p>',
          shapes: [ { t: 'torus', R: 0.3, r: 0.05, n: 30, m: 8, pos: [0, HY - 0.45, 0] }, { t: 'cyl', r: 0.33, h: 0.08, n: 30, pos: [0, HY - 0.5, 0], color: '#475569' } ]
            .concat([0.6, -0.6].map((x) => ({ t: 'group', pos: [x * 0.6, HY - 0.3, 0.25], shapes: [ { t: 'cyl', r: 0.06, h: 0.22, n: 12, color: '#334155' }, { t: 'group', pos: [0, -0.14, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'cyl', r: 0.05, h: 0.05, n: 8, color: '#facc15' } ] } ] }))) },
        { id: 'torre', name: 'Turn', color: '#e5e7eb', explode: [0, 0, 0],
          info: '<p>Un turn de oțel în formă de tub, înalt cât o clădire de 30–40 de etaje. Cu cât urci mai sus, cu atât vântul este mai puternic și mai constant: de aceea palele sunt atât de sus.</p>',
          more: '<p>În interiorul turnului sunt o scară, uneori un lift mic, și cablurile care duc electricitatea în jos. Cele mai înalte turnuri depășesc 160 de metri.</p>',
          shapes: [ { t: 'lathe', n: 32, pts: [[0, 0.1], [0.32, 0.1], [0.29, 2.0], [0.24, 4.0], [0.19, 5.8], [0, 5.8]] },
            { t: 'box', s: [0.18, 0.4, 0.04], pos: [0, 0.4, 0.31], rot: [-1, 0, 0], color: '#64748b', decal: 1 }, { t: 'torus', R: 0.3, r: 0.02, n: 30, m: 4, pos: [0, 2.0, 0], color: '#cbd5e1' }, { t: 'torus', R: 0.24, r: 0.02, n: 30, m: 4, pos: [0, 4.0, 0], color: '#cbd5e1' } ] },
        { id: 'fondazione', name: 'Fundație', color: '#a8a29e', explode: [0, -0.6, 0],
          info: '<p>Sub pământ se află un „picior” uriaș de <b>beton armat</b> care ține turnul drept chiar și în timpul furtunilor. Cântărește mii de tone.</p>',
          shapes: [ { t: 'cyl', r: 1.2, r2: 0.5, h: 0.35, n: 8, pos: [0, -0.08, 0] }, { t: 'cyl', r: 2.4, h: 0.06, n: 36, pos: [0, -0.04, 0], color: '#65a30d' } ] },
        { id: 'trasformatore', name: 'Transformator și rețea', label: 'Transformator', color: '#64748b', explode: [0.7, -0.2, 0.7],
          info: '<p>La baza turnului, un <b>transformator</b> ridică tensiunea electricității, ca să poată călători departe prin cablurile rețelei electrice până la case, școli și fabrici.</p>',
          shapes: [ { t: 'box', s: [0.55, 0.5, 0.45], pos: [1.15, 0.27, 0.95] }, { t: 'box', s: [0.6, 0.05, 0.5], pos: [1.15, 0.54, 0.95], color: '#475569' } ]
            .concat([0, 1, 2, 3, 4].map((k) => ({ t: 'box', s: [0.02, 0.36, 0.5], pos: [0.86, 0.27, 0.95 - 0.2 + k * 0.1], color: '#94a3b8' })), [ { t: 'box', s: [0.1, 0.12, 0.02], pos: [1.15, 0.33, 1.18], color: '#facc15', decal: 1 } ]) },
        { id: 'corrente', name: 'Curent electric', label: 'Electricitate', color: '#facc15', explode: [0, 0, 0], chip: true,
          info: '<p>Electricitatea produsă de generator coboară prin <b>cablurile</b> din turn, trece prin transformator și intră în rețeaua electrică.</p>',
          shapes: [ { t: 'pipe', r: 0.025, n: 6, pts: POWER, color: '#1f2937' } ].concat(Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: POWER[0], color: '#facc15', anim: { type: 'path', pts: POWER, wave: 'saw', rate: 0.25, phase: k / 10 } }))) },
        { id: 'vento', name: 'Vânt', color: '#bae6fd', explode: [0, 0, 0], chip: true,
          info: '<p>Vântul este <b>aer în mișcare</b>: apare pentru că Soarele încălzește Pământul inegal, iar aerul cald urcă, în timp ce cel rece îi ia locul. Vântul are <b>energie de mișcare</b> (energie cinetică).</p>',
          more: '<p>Dacă viteza vântului se <b>dublează</b>, energia pe care o poartă devine de <b>8 ori</b> mai mare. O turbină nu poate capta toată energia vântului: cel mult 59 % (limita lui Betz), iar cele mai bune ajung la 50 %.</p>',
          shapes: wind }
      ]
    },
    steps: [
      { icon: '🌬️', title: 'Energia vântului', explode: 0,
        html: '<p>Vântul este aer care se mișcă, iar tot ce se mișcă are <b>energie</b>. De secole, morile de vânt o folosesc ca să macine grâul; astăzi, turbinele eoliene o transformă în <b>electricitate</b>.</p><p class="tip">☀️ Vântul există datorită Soarelui, care încălzește aerul diferit în locuri diferite.</p>' },
      { icon: '✈️', title: 'Pale ca aripile de avion', focus: ['pale', 'mozzo', 'vento'], view: { rx: 0.1, ry: -1.2 },
        html: '<p><b>Palele</b> au forma unei aripi de avion. Vântul care curge peste suprafața lor creează o împingere laterală care le face să se <b>rotească</b>, exact ca portanța care face un avion să zboare.</p>' },
      { icon: '🐢', title: 'Lente, dar foarte puternice', focus: ['mozzo', 'albero', 'navicella'], view: { rx: 0.25, ry: -0.5 }, zoom: 1.8,
        html: '<p>Rotorul se învârte încet, cam 15 rotații pe minut, dar cu o forță uriașă. Mișcarea trece la <b>arborele lent</b>, un cilindru gros de oțel din interiorul <b>nacelei</b>.</p>' },
      { icon: '⚙️', title: 'Multiplicatorul', focus: ['moltiplicatore', 'albero', 'freno'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.1,
        html: '<p><b>Roțile dințate</b> ale multiplicatorului funcționează ca pinioanele unei biciclete: roata mare face roata mică să se învârtă foarte repede. De la 15 rotații se ajunge la aproximativ <b>1500 de rotații pe minut</b>.</p>' },
      { icon: '🧲', title: 'Generatorul face curentul', focus: ['generatore', 'moltiplicatore', 'freno'], view: { rx: 0.25, ry: -0.9 }, zoom: 2.1,
        html: '<p>În <b>generator</b>, niște magneți se rotesc lângă bobine de sârmă de cupru: mișcarea face să apară <b>curentul electric</b>. E ca dinamul bicicletei, dar uriaș!</p>' },
      { icon: '🧭', title: 'Mereu cu fața la vânt', focus: ['anemometro', 'imbardata', 'navicella'], view: { rx: 0.4, ry: -0.6 }, zoom: 1.8,
        html: '<p><b>Anemometrul</b> măsoară vântul, iar girueta îi arată direcția. Motoarele de <b>orientare</b> rotesc întreaga nacelă ca să pună palele contra vântului.</p>' },
      { icon: '🔌', title: 'De la turbină la priza de acasă', focus: ['corrente', 'torre', 'trasformatore', 'fondazione'], view: { rx: 0.2, ry: -0.6 },
        html: '<p>Curentul coboară prin cabluri în <b>turn</b>, <b>transformatorul</b> ridică tensiunea, iar rețeaua electrică îl duce până la casele noastre.</p><p class="tip">🌍 Energia eoliană este <b>regenerabilă</b>: vântul nu se termină și nu produce nici fum, nici CO₂.</p>' }
    ],
    facts: [
      { icon: '📏', title: 'Uriașe', html: 'Cele mai mari turbine sunt înalte de peste <b>250 de metri</b> (aproape cât Turnul Eiffel), iar o singură rotație a palelor poate alimenta o casă timp de două zile.' },
      { icon: '🌊', title: 'În mijlocul mării', html: 'Multe turbine eoliene se construiesc în larg (<b>offshore</b>), unde vântul este mai puternic și mai constant. Și în Italia, în largul orașului Taranto, există un parc eolian marin.' },
      { icon: '🏛️', title: 'O istorie veche', html: 'Primele mori de vânt au fost construite în Persia, acum mai bine de 1000 de ani. Morile olandeze serveau și la pomparea apei de pe câmpuri.' },
      { icon: '🔇', title: 'Se opresc singure', html: 'Cu vânt slab (sub 10 km/h) palele nu se rotesc; cu vânt prea puternic se pun „pe muchie” și se opresc ca să nu se strice.' },
      { icon: '♻️', title: 'Douăzeci de ani de muncă', html: 'O turbină eoliană funcționează aproximativ 20–25 de ani. În doar câteva luni produce deja energia care a fost necesară pentru a o construi.' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce fel de energie transformă o turbină eoliană?', options: ['Energia vântului în energie electrică', 'Energia electrică în vânt', 'Căldura în lumină', 'Cărbunele în electricitate'], answer: 0, explain: 'Energia de mișcare a vântului devine energie electrică.' },
      { type: 'mc', q: 'La ce servește multiplicatorul de turație?', options: ['La frânarea palelor', 'La învârtirea generatorului mult mai repede decât palele', 'La măsurarea vântului', 'La răcirea turnului'], answer: 1, explain: 'Cu ajutorul roților dințate transformă 15 rotații pe minut în aproximativ 1500.' },
      { type: 'tf', q: 'Energia eoliană este o sursă regenerabilă.', answer: true, explain: 'Vântul nu se epuizează, iar turbina nu produce fum.' },
      { type: 'mc', q: 'Care parte produce curentul electric?', options: ['Turnul', 'Anemometrul', 'Generatorul', 'Fundația'], answer: 2, explain: 'În generator, magneții care se rotesc creează curent în bobinele de cupru.' },
      { type: 'mc', q: 'De ce au palele forma unei aripi de avion?', options: ['Ca să fie mai frumoase', 'Pentru că vântul care curge creează o împingere care le face să se rotească', 'Ca să cântărească mai mult', 'Ca să facă umbră'], answer: 1, explain: 'Ca portanța unei aripi, împingerea laterală face rotorul să se învârtă.' },
      { type: 'order', q: 'Pune în ordine drumul energiei', items: ['Vânt', 'Pale', 'Arbore lent', 'Multiplicator', 'Generator', 'Rețea electrică'], explain: 'Vântul învârte palele; rotația este accelerată și transformată în electricitate.' }
    ]
  });
})();
