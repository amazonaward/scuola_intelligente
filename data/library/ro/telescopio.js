/* Il telescopio riflettore (tipo Newton) su montatura altazimutale a forcella e treppiede.
   Il tubo è descritto lungo x (x+ = bocca del tubo); viene inclinato di 32° e ruota piano intorno all'asse verticale. */
(function () {
  const PIV = [0, 2.45, 0], TILT = 32;
  const PAN = { type: 'swing', axis: 'y', amp: 28, rate: 0.22 };
  const TILTA = { type: 'swing', axis: 'z', amp: 6, rate: 0.22, phase: 0.25 };
  /* tutto ciò che sta sul tubo segue la rotazione (stesse animazioni in tutti i pezzi) */
  const onTube = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes: [ { t: 'group', rot: [0, 0, TILT], anim: TILTA, shapes } ] } ];
  const onFork = (shapes) => [ { t: 'group', pos: PIV, anim: PAN, shapes } ];
  const R = 0.42, X0 = -1.7, X1 = 1.7, SEC = 1.12;
  const RAYS = [0.27, -0.27, 0.14, -0.14];
  const photons = [];
  RAYS.forEach((y, i) => { for (let k = 0; k < 5; k++) photons.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [3.0, y, 0], color: '#fde047',
    anim: { type: 'path', pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], wave: 'saw', rate: 0.9, phase: k / 5 + i * 0.07 } }); });
  const rayLines = RAYS.map((y) => ({ t: 'pipe', r: 0.008, n: 5, pts: [[3.0, y, 0], [-1.47, y, 0], [SEC, 0, 0], [SEC, 0.95, 0]], color: '#fde68a', alpha: 0.45 }));


  LIBRARY({
    lang: 'ro',
    id: 'telescopio',
    title: 'Telescopul',
    intro: 'Un telescop este o „pâlnie pentru lumină": adună foarte multă lumină cu o <b>oglindă</b> sau o <b>lentilă</b> mare și o concentrează în ochiul nostru. Așa vedem obiecte slabe și îndepărtate, ca craterele Lunii sau inelele lui Saturn.',
    model: {
      rx: 0.18, ry: -0.35, speed: 0.4, height: 480, fit: 1.05,
      parts: [
        { id: 'tubo', name: 'Tub optic', label: 'Tub', color: '#e2e8f0', alpha: 0.28, explode: [0, 0.5, 0.9],
          info: '<p>Tubul ține oglinzile la distanța potrivită și le ferește de lumina care vine din lateral, de praf și de umezeala nopții.</p>',
          more: '<p>Distanța dintre oglinda principală și punctul în care se concentrează lumina se numește <b>distanță focală</b>. Dacă împarți distanța focală a telescopului la cea a ocularului, obții <b>mărirea</b>: 1000 mm ÷ 10 mm = de 100 de ori.</p>',
          shapes: onTube([ { t: 'cyl', r: R, h: X1 - X0, n: 36, rot: [0, 0, 90], open: true, ds: true },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.12, n: 36, rot: [0, 0, 90], pos: [X1 - 0.06, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'tube', r: R + 0.03, ri: R - 0.01, h: 0.1, n: 36, rot: [0, 0, 90], pos: [X0 + 0.05, 0, 0], color: '#1e293b', alpha: 1 },
            { t: 'cyl', r: R + 0.03, h: 0.04, n: 36, rot: [0, 0, 90], pos: [X0 - 0.02, 0, 0], color: '#334155', alpha: 1 } ]) },
        { id: 'specchio-primario', name: 'Oglinda principală', label: 'Oglinda principală', color: '#cbd5e1', explode: [-1.0, -0.5, 0],
          info: '<p>Este inima telescopului: o oglindă <b>curbă</b> (concavă) la capătul tubului. Adună lumina stelelor și o trimite înapoi, făcând-o să <b>convergă</b> într-un punct, focarul.</p>',
          more: '<p>Suprafața este o <b>parabolă</b> precisă până la o zecime de miime de milimetru, acoperită cu un strat subțire de aluminiu. Cu cât oglinda este mai mare, cu atât adună mai multă lumină: o oglindă de 20 cm adună de aproximativ <b>800 de ori</b> mai multă lumină decât ochiul nostru.</p>',
          shapes: onTube([ { t: 'lathe', n: 36, rot: [0, 0, -90], pos: [-1.5, 0, 0], pts: [[0, 0.0], [0.2, 0.012], [0.38, 0.045], [0.38, -0.06], [0, -0.06]], color: '#e0f2fe' },
            { t: 'cyl', r: 0.4, h: 0.08, n: 30, rot: [0, 0, 90], pos: [-1.6, 0, 0], color: '#475569' },
            { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, 0.25, 0], color: '#94a3b8' }, { t: 'cyl', r: 0.03, h: 0.12, n: 8, rot: [0, 0, 90], pos: [-1.68, -0.25, 0], color: '#94a3b8' } ]) },
        { id: 'specchio-secondario', name: 'Oglinda secundară', label: 'Oglinda secundară', color: '#e0f2fe', explode: [0.4, 0.9, 0.5],
          info: '<p>O oglindă mică și plată, înclinată la 45°, aproape de gura tubului. Abate lumina într-o parte, spre <b>ocular</b>, așa că nu trebuie să ne punem cu capul în fața tubului!</p>',
          more: '<p>Este ținută în centru de niște brațe subțiri de metal, <b>„crucea"</b> (spider). Ele creează „vârfurile" în formă de cruce care se văd în fotografiile stelelor luminoase.</p>',
          shapes: onTube([ { t: 'group', pos: [SEC, 0, 0], shapes: [ { t: 'cyl', r: 0.1, h: 0.025, n: 24, rot: [0, 0, 45] },
            { t: 'cyl', r: 0.05, h: 0.18, n: 14, rot: [0, 0, 90], pos: [0.11, 0, 0], color: '#334155' } ] },
            { t: 'box', s: [0.015, R * 2 - 0.02, 0.012], pos: [SEC + 0.15, 0, 0], color: '#334155' },
            { t: 'box', s: [0.015, 0.012, R * 2 - 0.02], pos: [SEC + 0.15, 0, 0], color: '#334155' } ]) },
        { id: 'oculare', name: 'Ocular', color: '#1f2937', explode: [0.2, 1.2, 0],
          info: '<p>Este „lupa" în care se lipește ochiul. Preia imaginea mititică formată de oglinzi și o <b>mărește</b>.</p>',
          more: '<p>Ocularele se schimbă: unul cu distanță focală mică (de ex. 6 mm) mărește mai mult, unul cu distanță focală mare (25 mm) arată o porțiune de cer mai mare și mai luminoasă. Prea multă mărire face imaginea întunecată și tremurată.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.09, h: 0.24, n: 20, pos: [SEC, R + 0.28, 0], color: '#1f2937' },
            { t: 'cyl', r: 0.11, h: 0.08, n: 20, pos: [SEC, R + 0.43, 0], color: '#111827' },
            { t: 'cyl', r: 0.065, h: 0.02, n: 16, pos: [SEC, R + 0.475, 0], color: '#0ea5e9', decal: 1 },
            { t: 'torus', R: 0.1, r: 0.012, n: 20, m: 6, pos: [SEC, R + 0.25, 0], color: '#64748b' } ]) },
        { id: 'focheggiatore', name: 'Focalizator (reglarea clarității)', label: 'Reglaj', color: '#64748b', explode: [0.6, 0.9, -0.4],
          info: '<p>Un tub mic care urcă și coboară când rotești două <b>butoane</b>: mută ocularul până când imaginea devine clară, exact ca atunci când reglezi un binoclu.</p>',
          shapes: onTube([ { t: 'box', s: [0.32, 0.12, 0.3], pos: [SEC, R + 0.03, 0], color: '#475569' },
            { t: 'cyl', r: 0.07, h: 0.14, n: 18, pos: [SEC, R + 0.14, 0], color: '#94a3b8' },
            { t: 'group', pos: [SEC, R + 0.05, 0], anim: { type: 'swing', axis: 'z', amp: 60, rate: 0.5 }, shapes: [
              { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.22], color: '#111827' }, { t: 'cyl', r: 0.06, h: 0.07, n: 16, rot: [90, 0, 0], pos: [0, 0, -0.22], color: '#111827' },
              { t: 'cyl', r: 0.015, h: 0.42, n: 8, rot: [90, 0, 0], color: '#94a3b8' } ] } ]) },
        { id: 'cercatore', name: 'Căutător', color: '#f1f5f9', explode: [0, 0.9, -0.9],
          info: '<p>O lunetă mică montată pe tub. Vede o porțiune mare de cer și folosește la <b>țintirea</b> telescopului spre obiectul potrivit, ca o cătare.</p>',
          shapes: onTube([ { t: 'cyl', r: 0.07, h: 0.6, n: 20, rot: [0, 0, 90], pos: [0.85, R + 0.22, -0.2] },
            { t: 'cyl', r: 0.085, h: 0.12, n: 20, rot: [0, 0, 90], pos: [1.18, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'cyl', r: 0.04, h: 0.1, n: 14, rot: [0, 0, 90], pos: [0.52, R + 0.22, -0.2], color: '#1f2937' },
            { t: 'box', s: [0.06, 0.16, 0.04], pos: [0.7, R + 0.1, -0.15], color: '#64748b' }, { t: 'box', s: [0.06, 0.16, 0.04], pos: [1.0, R + 0.1, -0.15], color: '#64748b' } ]) },
        { id: 'luce', name: 'Drumul luminii', label: 'Lumina stelelor', color: '#fde047', chip: true,
          info: '<p>Lumina unei stele intră pe gura tubului, coboară până la oglinda mare, este <b>reflectată și concentrată</b> spre oglinjoara mică și în final iese lateral, în ocular.</p>',
          more: '<p>Razele care vin de la o stea foarte îndepărtată sunt practic <b>paralele</b>. Oglinda parabolică le face să convergă pe toate în același punct: <b>focarul</b>. Acolo se formează o mică imagine răsturnată.</p>',
          shapes: onTube(rayLines.concat(photons)) },
        { id: 'montatura', name: 'Montură cu furcă', label: 'Montură', color: '#475569', explode: [0, -0.2, 0],
          info: '<p>Susține tubul și permite rotirea lui în două direcții: <b>dreapta-stânga</b> (azimut) și <b>sus-jos</b> (înălțime). Trebuie mișcată cu grijă: la 100 de mărimi, un milimetru mută totul!</p>',
          more: '<p>Pământul se rotește, așa că stelele „fug" din câmpul vizual. Multe montări au <b>motoare</b> care urmăresc cerul singure; cele „ecuatoriale" au o axă paralelă cu axa Pământului.</p>',
          shapes: onFork([ { t: 'cyl', r: 0.36, h: 0.14, n: 30, pos: [0, -0.62, 0], color: '#334155' },
            { t: 'box', s: [0.34, 0.12, 1.24], pos: [0, -0.5, 0] },
            { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, 0.62] }, { t: 'box', s: [0.22, 0.6, 0.08], pos: [0, -0.2, -0.62] },
            { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, 0.68], color: '#111827' }, { t: 'cyl', r: 0.09, h: 0.06, n: 18, rot: [90, 0, 0], pos: [0, 0, -0.68], color: '#111827' } ])
            .concat(onTube([ { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [0.45, 0, 0] }, { t: 'torus', R: R + 0.035, r: 0.035, n: 32, m: 6, rot: [0, 0, 90], pos: [-0.45, 0, 0] },
              { t: 'cyl', r: 0.05, h: 1.18, n: 14, rot: [90, 0, 0], color: '#64748b' } ]),
            [ { t: 'cyl', r: 0.3, h: 0.16, n: 30, pos: [0, 1.73, 0], color: '#334155' } ]) },
        { id: 'treppiede', name: 'Trepied', color: '#94a3b8', explode: [0, -0.6, 0],
          info: '<p>Trei picioare solide: cu trei puncte de sprijin un obiect <b>nu se clatină niciodată</b>, nici măcar pe o pajiște denivelată. Un telescop trebuie să stea nemișcat.</p>',
          shapes: [ { t: 'cyl', r: 0.24, h: 0.2, n: 24, pos: [0, 1.56, 0], color: '#475569' } ].concat([0, 120, 240].map((a) => {
            const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180);
            return { t: 'group', shapes: [ { t: 'pipe', r: 0.045, n: 10, pts: [[0.2 * c, 1.5, 0.2 * s], [1.25 * c, 0.05, 1.25 * s]] },
              { t: 'pipe', r: 0.032, n: 10, pts: [[0.75 * c, 0.75, 0.75 * s], [1.25 * c, 0.05, 1.25 * s]], color: '#e2e8f0' },
              { t: 'sphere', r: 0.06, n: 8, pos: [1.25 * c, 0.04, 1.25 * s], color: '#1f2937' } ] };
          })) },
        { id: 'vassoio', name: 'Tava pentru oculare', label: 'Tavă', color: '#64748b', explode: [0, -0.3, 0.6],
          info: '<p>Un raft între picioare care ține trepiedul rigid și poartă <b>ocularele de schimb</b>, pentru a schimba mărirea.</p>',
          shapes: [ { t: 'cyl', r: 0.55, h: 0.05, n: 3, pos: [0, 0.78, 0], phase: 30 } ].concat([0, 120, 240].map((a) => ({ t: 'cyl', r: 0.07, h: 0.14, n: 16, pos: [0.25 * Math.cos((a + 60) * Math.PI / 180), 0.86, 0.25 * Math.sin((a + 60) * Math.PI / 180)], color: '#111827' }))) }
      ]
    },
    steps: [
      { icon: '🔭', title: 'O pâlnie pentru lumină', explode: 0,
        html: '<p>Stelele sunt foarte departe și ne trimit foarte puțină lumină. Pupila ochiului nostru are doar câțiva milimetri; un telescop are o oglindă mare cât o farfurie: adună de <b>sute de ori mai multă lumină</b> și ne lasă să vedem lucruri invizibile cu ochiul liber.</p>' },
      { icon: '✨', title: 'Lumina intră în tub', focus: ['luce', 'tubo'], view: { rx: 0.1, ry: 0 }, zoom: 1.15,
        html: '<p>Razele de lumină ale unei stele sosesc <b>paralele</b>, intră pe gura deschisă a tubului și coboară până în fund.</p>' },
      { icon: '🪞', title: 'Oglinda curbă concentrează', focus: ['specchio-primario', 'luce', 'tubo'], view: { rx: 0.1, ry: 0.2 }, zoom: 1.2,
        html: '<p>În fund se află <b>oglinda principală</b>, curbă ca interiorul unei linguri. Reflectă razele și le face să <b>convergă</b> pe toate spre un punct: <b>focarul</b>.</p><p class="tip">🥄 Privește într-o lingură lucioasă: și ea este o oglindă concavă!</p>' },
      { icon: '↗️', title: 'Oglinjoara abate lumina', focus: ['specchio-secondario', 'luce', 'oculare'], view: { rx: 0.15, ry: -0.2 }, zoom: 1.2,
        html: '<p>Înainte ca razele să ajungă în focar, <b>oglinda secundară</b>, înclinată la 45°, le trimite într-o parte, în afara tubului. Acest tip de telescop l-a inventat <b>Isaac Newton</b> în 1668.</p>' },
      { icon: '👁️', title: 'Ocularul mărește', focus: ['oculare', 'focheggiatore', 'luce'], view: { rx: 0.3, ry: -0.4 }, zoom: 1.25,
        html: '<p><b>Ocularul</b> este o lupă mică: privește imaginea din focar și o face să pară mare. Cu butoanele <b>focalizatorului</b> se reglează claritatea până când stelele devin punctișoare clare.</p><p class="tip">🙃 La telescop, Luna apare adesea cu susul în jos: pentru astronomie nu contează!</p>' },
      { icon: '🎯', title: 'Țintirea și urmărirea cerului', focus: ['cercatore', 'montatura', 'treppiede', 'vassoio'], explode: 0.25,
        html: '<p>Cu <b>căutătorul</b> se țintește obiectul, apoi <b>montura</b> permite rotirea tubului dreapta-stânga și sus-jos. <b>Trepiedul</b> ține totul nemișcat: chiar și o mică tremurare pare un cutremur când mărești de 100 de ori.</p>' },
      { icon: '🌌', title: 'Lentile sau oglinzi?', explode: 0,
        html: '<p>Există două mari familii: <b>refractoarele</b> folosesc o lentilă în față (ca luneta lui <b>Galileo</b>, 1609), iar <b>reflectoarele</b> o oglindă în fund (ca acesta). Cele mai mari telescoape din lume sunt toate cu oglindă: e mai ușor să construiești o oglindă uriașă decât o lentilă uriașă.</p>' }
    ],
    facts: [
      { icon: '🌙', title: 'Galileo și Luna', html: 'În 1609, <b>Galileo Galilei</b> a îndreptat luneta spre cer și a descoperit craterele Lunii, fazele lui Venus și patru luni ale lui Jupiter.' },
      { icon: '🏔️', title: 'În vârful munților', html: 'Marile observatoare se construiesc pe munți înalți și pustii, ca în Chile sau în Insulele Canare: acolo aerul este mai rarefiat, mai uscat și mai liniștit.' },
      { icon: '🛰️', title: 'Telescoape în spațiu', html: 'Telescopul <b>James Webb</b> are o oglindă de 6,5 metri făcută din 18 hexagoane aurii și observă universul din spațiu, departe de aerul care face stelele să tremure.' },
      { icon: '⏳', title: 'O privire în trecut', html: 'Lumina călătorește repede, dar nu la nesfârșit: steaua pe care o vezi în noaptea asta ar fi putut emite acea lumină <b>acum secole</b>. Un telescop este o mașină a timpului!' },
      { icon: '⚠️', title: 'Niciodată Soarele!', html: 'Nu te uita <b>niciodată</b> la Soare printr-un telescop sau un binoclu fără un filtru special: lumina concentrată poate deteriora ochiul într-o clipă.' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce face oglinda principală a unui telescop reflector?', options: ['Colorează lumina', 'Adună lumina și o concentrează în focar', 'Produce lumină', 'Blochează lumina Lunii'], answer: 1, explain: 'Este concavă: reflectă razele paralele făcându-le să convergă în focar.' },
      { type: 'mc', q: 'Cine a inventat telescopul cu oglindă?', options: ['Galileo Galilei', 'Isaac Newton', 'Albert Einstein', 'Leonardo da Vinci'], answer: 1, explain: 'Newton a construit primul reflector în 1668. Galileo folosea o lunetă cu lentile.' },
      { type: 'mc', q: 'La ce folosește căutătorul?', options: ['Să regleze claritatea', 'Să țintească telescopul spre obiectul potrivit', 'Să mărească mai mult', 'Să răcească oglinda'], answer: 1, explain: 'Este o lunetă mică cu câmp larg, folosită drept cătare.' },
      { type: 'tf', q: 'Te poți uita la Soare printr-un telescop fără filtru, dacă o faci pentru puțin timp.', answer: false, explain: 'Niciodată! Lumina concentrată dăunează ochiului pe loc. Sunt necesare filtre solare certificate.' },
      { type: 'num', q: 'Un telescop are distanța focală de 1200 mm, iar ocularul de 12 mm. Ce mărire oferă?', answer: 100, unit: '×', explain: '1200 ÷ 12 = mărire de 100 de ori.' },
      { type: 'mc', q: 'De ce ne lasă un telescop să vedem stele invizibile cu ochiul liber?', options: ['Pentru că se apropie de stele', 'Pentru că adună mult mai multă lumină decât ochiul', 'Pentru că aprinde stelele', 'Pentru că filtrează norii'], answer: 1, explain: 'Oglinda are o suprafață enormă față de pupilă: adună mult mai multă lumină.' }
    ]
  });
})();
