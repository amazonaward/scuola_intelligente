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
    lang: 'ro',
    title: 'Calculatorul',
    intro: 'Un calculator este o mașină care <b>urmează instrucțiuni</b> extrem de repede: primește date (tastatură, mouse), le <b>prelucrează</b> și arată rezultatul (monitor). Deschide carcasa de sticlă și descoperă toate piesele lui!',
    model: {
      rx: 0.3, ry: -0.42, speed: 0.6, height: 470,
      parts: [
        { id: 'case', name: 'Carcasa (învelișul)', label: 'Carcasa', color: '#374151', pos: [1.6, 1.05, -0.3], explode: [0, 0, 0],
          info: '<p>Este „cutia” care ține laolaltă și protejează toate piesele. Are un panou de sticlă ca să te uiți înăuntru, orificii pentru aer și <b>butonul de pornire</b>.</p>',
          more: '<p>Carcasa este din oțel sau aluminiu: pe lângă protecție, face rol de <b>ecran</b> împotriva perturbațiilor electromagnetice și conduce aerul rece din față spre spate.</p>',
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
        { id: 'scheda-madre', name: 'Placa de bază', color: '#15803d', pos: [1.45, 1.2, -0.68], explode: [0, 0, 0.35],
          info: '<p>Este „orașul” calculatorului: o placă mare cu <b>drumuri de cupru</b> (trasee) care leagă toate piesele între ele, așa cum străzile leagă casele.</p>',
          more: '<p>Conține <b>soclul</b> (socket) pentru CPU, sloturile pentru RAM și pentru plăci, <b>chipset-ul</b> care dirijează traficul de date și un mic cip (BIOS/UEFI) cu primul program care pornește la deschidere.</p>',
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
        { id: 'cpu', name: 'CPU (procesorul)', label: 'CPU', color: '#cbd5e1', pos: [1.25, 1.55, -0.635], explode: [0, 0.2, 1.25],
          info: '<p>Este <b>creierul</b> calculatorului: execută instrucțiunile programelor una după alta, <b>de miliarde de ori pe secundă</b>. Face calcule și ia decizii („dacă… atunci…”).</p>',
          more: '<p>Înăuntru sunt <b>miliarde de tranzistori</b>, întrerupătoare minuscule care se aprind și se sting (1 și 0). Viteza se măsoară în gigahertzi: 3 GHz = 3 miliarde de „bătăi” de ceas pe secundă. Procesoarele moderne au mai multe <b>nuclee</b>, adică mai multe creiere care lucrează împreună.</p>',
          shapes: [ { t: 'box', s: [0.34, 0.34, 0.03], color: '#166534' }, { t: 'box', s: [0.27, 0.27, 0.03], pos: [0, 0, 0.025] } ] },
        { id: 'dissipatore', name: 'Radiatorul', color: '#d1d5db', pos: [1.25, 1.55, -0.38], explode: [0, 0.25, 2.05],
          info: '<p>Când lucrează, CPU se încălzește foarte tare. Radiatorul este făcut din multe <b>lamele de metal</b> care duc căldura departe, ca un calorifer pe dos.</p>',
          more: '<p><b>Țevile de cupru</b> (heat pipe) conțin un lichid care se evaporă lângă CPU și se condensează la loc printre lamele: așa căldura călătorește foarte repede. Între CPU și radiator se pune <b>pasta termoconductoare</b>.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.3, 0.05], pos: [0, 0, -0.23], color: '#b45309' } ]
            .concat(Array.from({ length: 11 }, (_, k) => ({ t: 'box', s: [0.3, 0.014, 0.42], pos: [0, -0.27 + k * 0.054, 0.02] })))
            .concat([-0.08, 0, 0.08].map((x) => ({ t: 'cyl', r: 0.022, h: 0.64, n: 8, pos: [x, 0, 0.02], color: '#c2410c' }))) },
        { id: 'ventola-cpu', name: 'Ventilatorul CPU', label: 'Ventilator CPU', color: '#60a5fa', pos: [1.45, 1.55, -0.36], rot: [0, 0, 90], explode: [0.7, 0.25, 2.05],
          info: '<p>Suflă aer rece printre lamelele radiatorului, ca să plece căldura mai repede. Cu cât CPU lucrează mai mult, cu atât ventilatorul se învârte mai repede.</p>',
          shapes: fan(0.25, '#60a5fa', 3) },
        { id: 'ram', name: 'RAM (memoria de lucru)', label: 'RAM', color: '#1e3a8a', pos: [1.82, 1.5, -0.51], explode: [0.45, 0.1, 1.45],
          info: '<p>Este <b>masa de lucru</b> a calculatorului: ține datele programelor deschise, ca CPU să le ia pe loc. Este foarte rapidă, dar când oprești calculatorul <b>se șterge tot</b>.</p>',
          more: '<p>RAM înseamnă <i>Random Access Memory</i> (memorie cu acces aleatoriu): se poate citi orice punct în câteva nanosecunde. Un PC de azi are de obicei 8–32 GB de RAM. Dacă e puțină, calculatorul devine lent, pentru că trebuie să folosească discul.</p>',
          shapes: [-0.05, 0.05].map((x) => ({ t: 'group', pos: [x, 0, 0], shapes: [
            { t: 'box', s: [0.035, 0.9, 0.28] },
            { t: 'box', s: [0.04, 0.9, 0.03], pos: [0, 0, 0.15], color: '#a855f7', anim: { type: 'blink', color: '#22d3ee', rate: 0.5, phase: x } }
          ] })) },
        { id: 'ssd', name: 'SSD (memoria de stocare)', label: 'SSD', color: '#111827', pos: [1.25, 1.12, -0.645], explode: [0, -0.05, 1.15],
          info: '<p>Este „depozitul” unde rămân salvate programele, pozele și jocurile <b>chiar și cu calculatorul oprit</b>. Nu are piese în mișcare: folosește cipuri de memorie flash, ca un stick USB.</p>',
          more: '<p>SSD înseamnă <i>Solid State Drive</i>. Este mult mai rapid decât vechiul <b>hard disk</b> (HDD) cu platane care se învârt. Când deschizi un program, datele lui sunt copiate de pe SSD în RAM.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.17, 0.02] }, { t: 'box', s: [0.34, 0.12, 0.006], pos: [-0.05, 0, 0.013], decal: 2, color: '#f97316' }, { t: 'box', s: [0.1, 0.1, 0.012], pos: [0.22, 0, 0.014], color: '#334155' } ] },
        { id: 'scheda-video', name: 'Placa video (GPU)', label: 'Placa video', color: '#1f2937', pos: [1.3, 0.83, -0.425], explode: [0, -0.5, 1.6],
          info: '<p>Desenează imaginile pe care le vezi pe ecran: calculează culoarea a <b>milioane de pixeli</b>, de aproximativ <b>60 de ori pe secundă</b>. În jocuri video muncește foarte mult!</p>',
          more: '<p>GPU are mii de nuclee mici care lucrează <b>în paralel</b>: este perfectă pentru a face multe operații la fel în același timp. De aceea azi este folosită și pentru a antrena <b>inteligența artificială</b>.</p>',
          shapes: [
            { t: 'box', s: [1.3, 0.12, 0.47] },
            { t: 'box', s: [1.3, 0.03, 0.45], pos: [0, 0.075, 0], color: '#065f46' },
            { t: 'box', s: [1.3, 0.02, 0.05], pos: [0, 0.07, 0.22], color: '#ef4444' },
            { t: 'box', s: [0.04, 0.18, 0.5], pos: [-0.67, 0.02, 0.0], color: '#9ca3af' },
            { t: 'group', pos: [0.3, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) },
            { t: 'group', pos: [-0.25, -0.07, 0], shapes: fan(0.18, '#9ca3af', 2.5) }
          ] },
        { id: 'alimentatore', name: 'Sursa de alimentare', color: '#111827', pos: [1.0, 0.31, -0.32], explode: [-0.2, -0.35, 1.35],
          info: '<p>Ia curentul din priza de acasă (230 de volți, prea puternic!) și îl transformă în curent <b>mai slab și continuu</b> (12, 5 și 3,3 volți), potrivit pentru fiecare piesă.</p>',
          more: '<p>Curentul din priză este <b>alternativ</b>: își schimbă sensul de 50 de ori pe secundă. Sursa îl coboară, îl „îndreaptă” și îl face stabil. O sursă bună risipește puțină energie sub formă de căldură.</p>',
          shapes: [
            { t: 'box', s: [0.75, 0.42, 0.82] },
            { t: 'group', pos: [0, 0.2, 0.05], shapes: fan(0.22, '#4b5563', 2) },
            { t: 'box', s: [0.3, 0.005, 0.2], pos: [0.15, 0.212, -0.28], color: '#fbbf24' },
            { t: 'pipe', r: 0.035, curve: true, pts: [[0.3, 0.2, -0.3], [0.4, 0.5, -0.35], [0.55, 1.0, -0.3], [0.62, 1.3, -0.32]], color: '#f59e0b' },
            { t: 'pipe', r: 0.03, curve: true, pts: [[0.25, 0.2, -0.2], [0.35, 0.45, -0.15], [0.4, 0.55, -0.1]], color: '#ef4444' }
          ] },
        { id: 'ventola-case', name: 'Ventilatorul carcasei', label: 'Ventilator carcasă', color: '#a78bfa', pos: [0.67, 1.6, -0.35], rot: [0, 0, 90], explode: [-0.9, 0.1, 0.6],
          info: '<p>Aruncă aerul cald în afara carcasei. Împreună cu ventilatorul CPU creează un <b>curent de aer</b>: intră rece în față, iese cald în spate.</p>',
          shapes: fan(0.27, '#a78bfa', 2) },
        { id: 'monitor', name: 'Monitorul', color: '#1f2937', pos: [-1.0, 0, -0.4], explode: [-0.7, 0.15, 0],
          info: '<p>Este un dispozitiv de <b>ieșire</b> (output): arată imaginile pregătite de placa video. Ecranul este făcut din milioane de punctulețe, <b>pixelii</b>.</p>',
          more: '<p>Fiecare pixel are trei lumini: <b>roșie, verde și albastră</b> (RGB). Amestecându-le cu intensități diferite se obțin milioane de culori. Un ecran Full HD are 1920 × 1080 = peste 2 milioane de pixeli.</p>',
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
        { id: 'tastiera', name: 'Tastatura', color: '#334155', pos: [-0.9, 0.03, 0.75], explode: [0, 0, 0.75],
          info: '<p>Este un dispozitiv de <b>intrare</b> (input): fiecare tastă pe care o apeși închide un mic circuit și trimite calculatorului un <b>cod</b>, un număr care indică litera.</p>',
          more: '<p>Aranjarea literelor se numește <b>QWERTY</b> (primele șase litere din stânga sus) și a fost inventată pentru mașinile de scris, în jurul anului 1870.</p>',
          shapes: [ { t: 'box', s: [1.9, 0.06, 0.62] } ].concat(keys) },
        { id: 'mouse', name: 'Mouse-ul', color: '#e5e7eb', pos: [0.55, 0.0, 0.85], explode: [0.6, 0, 0.6],
          info: '<p>Și mouse-ul este un dispozitiv de <b>intrare</b>: o mică cameră de dedesubt privește masa și înțelege cum îl miști; așa se mută săgeata pe ecran.</p>',
          more: '<p>Senzorul optic face mii de „poze” pe secundă suprafeței și le compară ca să calculeze deplasarea. Primul mouse (1964, Douglas Engelbart) era din lemn!</p>',
          shapes: [
            { t: 'sphere', r: 1, n: 10, hemi: true, scale: [0.17, 0.12, 0.27] },
            { t: 'cyl', r: 0.028, h: 0.03, n: 12, pos: [0, 0.115, -0.1], rot: [0, 0, 90], color: '#ef4444' },
            { t: 'box', s: [0.004, 0.02, 0.14], pos: [0, 0.11, -0.13], color: '#94a3b8' }
          ] }
      ]
    },
    steps: [
      { icon: '🔌', title: 'Se pornește!', focus: ['alimentatore', 'case'], explode: 0.25, view: { rx: 0.3, ry: -0.2 },
        html: '<p>Apasă <b>butonul verde</b> de pe carcasă. <b>Sursa</b> ia curentul din priză și îl transformă în curent mai slab, potrivit pentru circuitele delicate ale calculatorului.</p><p class="tip">⚠️ Nu deschide niciodată un calculator pornit sau conectat la priză!</p>' },
      { icon: '🏙️', title: 'Placa de bază leagă totul', focus: ['scheda-madre'], explode: 0.5,
        html: '<p>Curentul ajunge la <b>placa de bază</b>. Este ca un oraș: traseele de cupru sunt străzi pe care călătoresc electricitatea și datele de la o piesă la alta.</p><p>Primul pornește un mic program (<b>BIOS</b>) care verifică dacă totul funcționează.</p>' },
      { icon: '📦', title: 'Din depozit pe masa de lucru', focus: ['ssd', 'ram'], explode: 0.75,
        html: '<p>Programele sunt salvate pe <b>SSD</b>, depozitul care nu uită. Când deschizi un joc, datele lui sunt copiate în <b>RAM</b>, masa de lucru: este foarte rapidă, dar se golește când oprești calculatorul.</p><p class="tip">🧠 E ca și cum ai lua o carte din bibliotecă (SSD) și ai deschide-o pe masă (RAM).</p>' },
      { icon: '🧠', title: 'CPU execută instrucțiunile', focus: ['cpu', 'ram'], explode: 0.85,
        html: '<p><b>CPU</b> citește din RAM instrucțiunile programului și le execută una după alta: adună, compară, decide. Face asta <b>de miliarde de ori pe secundă</b>!</p><p>Pentru ea totul este făcut din <b>0 și 1</b>: curent oprit sau pornit.</p>' },
      { icon: '🌬️', title: 'Să ne răcorim!', focus: ['dissipatore', 'ventola-cpu', 'ventola-case', 'cpu'], explode: 0.5,
        html: '<p>Atâta muncă produce <b>căldură</b>. <b>Radiatorul</b> o adună cu lamelele lui, <b>ventilatorul</b> suflă aerul cald, iar ventilatorul carcasei îl aruncă afară.</p><p>Fără răcire, CPU s-ar opri singur ca să nu se ardă.</p>' },
      { icon: '🎨', title: 'Placa video desenează', focus: ['scheda-video', 'monitor'], explode: 0.6,
        html: '<p><b>Placa video</b> calculează culoarea fiecărui pixel și trimite imaginea la <b>monitor</b> printr-un cablu, de aproximativ 60 de ori pe secundă: de aceea vezi lucrurile mișcându-se fluid.</p>' },
      { icon: '⌨️', title: 'Tu comanzi: intrare și ieșire', focus: ['tastiera', 'mouse', 'monitor'], explode: 0, view: { rx: 0.45, ry: -0.6 },
        html: '<p><b>Tastatura și mouse-ul</b> sunt dispozitive de <b>intrare</b> (input): aduc comenzile tale în calculator. <b>Monitorul</b> este un dispozitiv de <b>ieșire</b> (output).</p><p class="tip">🔁 Intrare → prelucrare (CPU) → ieșire: este ciclul oricărui calculator, chiar și al smartphone-ului!</p>' }
    ],
    facts: [
      { icon: '🐘', title: 'Gigantul ENIAC', html: 'Unul dintre primele calculatoare, ENIAC (1946), cântărea 27 de tone și ocupa o încăpere întreagă. Telefonul tău este de milioane de ori mai puternic!' },
      { icon: '🦋', title: 'Primul „bug”', html: 'În 1947 un fluture de noapte a rămas prins într-un calculator și l-a blocat. De atunci erorile programelor se numesc <i>bug</i>, adică „insectă”.' },
      { icon: '🔬', title: 'Miliarde de întrerupătoare', html: 'Un procesor modern conține zeci de miliarde de tranzistori, fiecare de mii de ori mai subțire decât un fir de păr.' },
      { icon: '0️⃣', title: 'Doar 0 și 1', html: 'Textele, pozele, muzica și filmele, în interiorul calculatorului, sunt șiruri foarte lungi de 0 și 1: <b>codul binar</b>.' }
    ],
    quiz: [
      { type: 'mc', q: 'Care piesă este „creierul” care execută instrucțiunile?', options: ['RAM-ul', 'CPU', 'Monitorul', 'Sursa de alimentare'], answer: 1, explain: 'CPU (procesorul) execută instrucțiunile programelor, de miliarde de ori pe secundă.' },
      { type: 'tf', q: 'Când oprești calculatorul, datele din RAM rămân salvate.', answer: false, explain: 'RAM-ul se șterge când lipsește curentul: datele rămân în schimb pe SSD.' },
      { type: 'mc', q: 'La ce servesc radiatorul și ventilatorul?', options: ['Ca să facă zgomot', 'Ca să ducă căldura departe', 'Ca să salveze fișiere', 'Ca să se conecteze la internet'], answer: 1, explain: 'CPU se încălzește: lamelele radiatorului adună căldura, iar ventilatorul o suflă afară.' },
      { type: 'mc', q: 'Care dintre acestea este un dispozitiv de IEȘIRE (output)?', options: ['Tastatura', 'Mouse-ul', 'Monitorul', 'Microfonul'], answer: 2, explain: 'Monitorul arată rezultatele: este un dispozitiv de ieșire. Tastatura, mouse-ul și microfonul sunt de intrare.' },
      { type: 'mc', q: 'Ce face sursa de alimentare?', options: ['Transformă curentul din priză în curent potrivit pentru circuite', 'Desenează imaginile', 'Răcește placa video', 'Păstrează pozele'], answer: 0, explain: 'Coboară cei 230 V din priză la 12, 5 și 3,3 V de curent continuu.' },
      { type: 'order', q: 'Pune în ordine drumul unui program pe care îl deschizi', items: ['Este salvat pe SSD', 'Este copiat în RAM', 'CPU îi execută instrucțiunile', 'Rezultatul apare pe monitor'], explain: 'Depozit (SSD) → masă de lucru (RAM) → creier (CPU) → ieșire (monitor).' }
    ]
  });
})();
