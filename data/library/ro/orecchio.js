/* Urechea (dreaptă, văzută din față-jos). Sunetul vine din stânga (−x) de la un diapazon, intră în canalul auditiv de-a lungul lui +x,
   face să vibreze timpanul și oscioarele și ajunge la cohlee; în dreapta, nervul auditiv merge spre creier. */
(function () {
  const V = 6;                                                     // viteza vibrațiilor
  const C = [1.4, -0.2, 0.05];                                      // centrul cohleei
  const spiral = (() => { const p = []; for (let i = 0; i <= 40; i++) { const t = i / 40 * 2.6, a = Math.PI + t * Math.PI * 2, r = 0.55 * (1 - 0.3 * t); p.push([C[0] + r * Math.cos(a), C[1] + r * Math.sin(a), C[2] + 0.1 * t]); } return p; })();
  const CANAL = [[-1.95, 0.05, 0.05], [-1.3, 0.12, 0.0], [-0.6, 0.0, 0.0], [-0.06, 0, 0]];
  const NERVE = [[C[0], C[1], C[2] + 0.2], [1.8, 0.0, 0.1], [2.3, 0.2, 0.05], [2.9, 0.3, 0.0]];
  const rings = Array.from({ length: 4 }, (_, k) => ({ t: 'torus', R: 0.55, r: 0.03, n: 28, m: 5, rot: [0, 0, 90], pos: [-3.2, 0.05, 0.05], color: '#38bdf8',
    anim: [ { type: 'move', dir: [0, -1, 0], amp: 3.1, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'scale', from: 1.1, to: 0.35, wave: 'saw', rate: 0.5, phase: k / 4 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 4 } ] }));
  const fluid = Array.from({ length: 9 }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: spiral[0], color: '#7dd3fc', anim: { type: 'path', pts: spiral, wave: 'saw', rate: 0.4, phase: k / 9 } }));

  LIBRARY({
    lang: 'ro',
    id: 'orecchio',
    title: 'Urechea',
    intro: 'Urechea transformă <b>vibrațiile aerului</b> în semnale pentru creier. În interiorul capului ascunde cel mai mic mușchi, cel mai mic os din corp și un „melc” plin cu lichid. Urmărește călătoria sunetului!',
    model: {
      rx: 0.15, ry: 0.6, speed: 0.4, height: 470, bg: 'body', fit: 1.05,
      parts: [
        { id: 'diapason', name: 'Diapazon (sursa sunetului)', label: 'Diapazon', color: '#9ca3af', pos: [-3.5, -0.6, 0], explode: [-0.6, 0, 0],
          info: '<p>Sunetul apare atunci când ceva <b>vibrează</b>. Diapazonul, lovit, vibrează înainte și înapoi de sute de ori pe secundă și împinge aerul din jurul lui.</p>',
          more: '<p>Diapazonul muzicienilor vibrează de 440 de ori pe secundă (440 de herți): este nota <b>La</b>, folosită pentru acordarea instrumentelor. Mai multe vibrații pe secundă = sunet mai ascuțit.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.6, n: 12, pos: [0, -0.3, 0] }, { t: 'sphere', r: 0.08, n: 8, m: 12, pos: [0, -0.62, 0], color: '#6b7280' },
            { t: 'torus', R: 0.15, r: 0.045, n: 16, m: 8, arc: 180, rot: [90, 0, 0], pos: [0, 0.15, 0] },
            { t: 'group', pos: [0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: 1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] },
            { t: 'group', pos: [-0.15, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -1.5, rate: V }, shapes: [ { t: 'box', s: [0.08, 1.1, 0.1], pos: [0, 0.55, 0] } ] } ] },
        { id: 'onde', name: 'Unde sonore', label: 'Unde sonore', color: '#38bdf8', explode: [0, 0, 0], chip: true,
          info: '<p>Vibrațiile trec de la o particulă de aer la alta, ca o împingere într-un șir de oameni: acestea sunt <b>undele sonore</b>. Ele ajung până la urechea noastră.</p>',
          more: '<p>În aer, sunetul călătorește cu aproximativ <b>340 de metri pe secundă</b>; în apă, de 4 ori mai repede. În vidul spațiului nu se propagă: acolo este liniște absolută.</p>',
          shapes: rings },
        { id: 'padiglione', name: 'Pavilionul urechii', label: 'Pavilion', color: '#f5c6a5', explode: [-1.0, 0, 0],
          info: '<p>Este partea pe care o vedem și o numim „ureche”. Cu curbele lui adună sunetele ca o <b>pâlnie</b> și le trimite în canalul auditiv.</p>',
          more: '<p>Cutele pavilionului schimbă puțin sunetul, în funcție de direcția din care vine: așa înțelege creierul dacă un zgomot vine din față, din spate sau de sus. Este făcut din <b>cartilaj</b>, nu din os.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, scale: [0.07, 1.05, 0.62], pos: [-1.97, 0.3, -0.1] },
            { t: 'pipe', r: 0.1, n: 10, curve: true, pts: [[-2.05, -0.15, 0.36], [-2.1, 0.55, 0.47], [-2.12, 1.1, 0.28], [-2.12, 1.3, -0.12], [-2.11, 0.95, -0.52], [-2.08, 0.3, -0.64], [-2.07, -0.35, -0.55], [-2.07, -0.75, -0.3]], color: '#f0b48e' },
            { t: 'sphere', r: 1, n: 10, m: 16, scale: [0.1, 0.32, 0.24], pos: [-2.02, -0.78, -0.18], color: '#f5c6a5' },
            { t: 'lathe', n: 24, rot: [0, 0, 90], pos: [-2.0, 0.08, 0.0], pts: [[0, -0.02], [0.2, 0.0], [0.34, 0.09], [0.38, 0.13]], ds: true, color: '#e8a782' },
            { t: 'pipe', r: 0.06, n: 8, curve: true, pts: [[-2.08, 0.75, 0.25], [-2.08, 0.85, -0.15], [-2.07, 0.45, -0.35]], color: '#f0b48e' },
            { t: 'sphere', r: 0.1, n: 8, m: 10, scale: [0.6, 1, 0.8], pos: [-2.07, 0.02, 0.36], color: '#f0b48e' } ] },
        { id: 'condotto', name: 'Canal auditiv', label: 'Canal auditiv', color: '#f9a8d4', alpha: 0.45, explode: [-0.5, 0, 0.3],
          info: '<p>Un tubuleț lung de aproximativ <b>2,5 cm</b> care duce sunetul până la timpan. Are păr fin și produce <b>ceara din ureche</b>, care prinde praful și insectele.</p>',
          more: '<p>Ceara iese singură, încet-încet: de aceea nu trebuie să bagi bețișoare în urechi, riști să o împingi spre timpan.</p>',
          shapes: [ { t: 'pipe', r: 0.2, n: 18, curve: true, pts: CANAL, caps: false } ] },
        { id: 'timpano', name: 'Timpan', color: '#fda4af', alpha: 0.85, explode: [0, 0.3, 0.6], anim: { type: 'move', dir: [1, 0, 0], amp: 0.035, rate: V },
          info: '<p>O membrană subțire și întinsă ca pielea unei tobe, la capătul canalului. Când ajunge sunetul, <b>vibrează</b> odată cu aerul.</p>',
          more: '<p>Timpanul este gros doar de o zecime de milimetru și vibrează chiar și pentru deplasări mai mici decât un atom! Un zgomot prea puternic îl poate însă strica.</p>',
          shapes: [ { t: 'cone', r: 0.3, h: 0.1, n: 28, rot: [0, 0, -90], pos: [0, 0, 0] }, { t: 'torus', R: 0.3, r: 0.025, n: 28, m: 6, rot: [0, 0, 90], color: '#e11d48', alpha: 1 } ] },
        { id: 'martello', name: 'Ciocan', color: '#fef3c7', explode: [0.1, 0.8, 0.5], anim: { type: 'swing', axis: 'z', amp: -3, rate: V, pivot: [0.13, 0.5, 0] },
          info: '<p>Primul dintre cele trei <b>oscioare</b>. „Mânerul” lui este lipit de timpan: când timpanul vibrează, ciocanul se mișcă odată cu el.</p>',
          shapes: [ { t: 'pipe', r: 0.04, n: 8, curve: true, pts: [[0.03, -0.05, 0], [0.05, 0.2, 0], [0.1, 0.42, 0]] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [0.13, 0.52, 0] } ] },
        { id: 'incudine', name: 'Nicovală', color: '#fde68a', explode: [0.3, 0.9, 0.5], anim: { type: 'swing', axis: 'z', amp: 3, rate: V, pivot: [0.32, 0.55, 0] },
          info: '<p>Al doilea osciar, în formă de nicovală de fierar. Primește lovitura de la ciocan și o trece mai departe scăriței.</p>',
          shapes: [ { t: 'sphere', r: 0.1, n: 10, m: 14, scale: [1.1, 0.9, 0.9], pos: [0.3, 0.52, 0] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.33, 0.47, 0], [0.42, 0.33, 0], [0.45, 0.19, 0]] }, { t: 'pipe', r: 0.03, n: 8, pts: [[0.36, 0.56, 0], [0.55, 0.6, -0.02]] } ] },
        { id: 'staffa', name: 'Scăriță', color: '#fcd34d', explode: [0.5, 0.7, 0.5], anim: { type: 'move', dir: [1, 0, 0], amp: 0.025, rate: V },
          info: '<p>Al treilea osciar, în formă de scăriță de călărie: este <b>cel mai mic os din corp</b> (aproximativ 3 mm). Împinge ca un piston în „fereastra ovală” a cohleei.</p>',
          more: '<p>Cele trei oscioare funcționează ca o <b>pârghie</b>: împingerea care ajunge la fereastra ovală este de aproximativ <b>20 de ori</b> mai puternică decât cea de la timpan. Este nevoie de ea pentru că sunetul trebuie să treacă din aer în lichidul cohleei.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.22, 0.05], [0.68, 0.17, 0.06]] }, { t: 'pipe', r: 0.022, n: 6, curve: true, pts: [[0.46, 0.18, 0], [0.56, 0.12, -0.05], [0.68, 0.13, -0.06]] },
            { t: 'cyl', r: 0.08, h: 0.025, n: 16, rot: [0, 0, 90], scale: [1, 1, 0.6], pos: [0.7, 0.15, 0] } ] },
        { id: 'cassa', name: 'Cutia timpanului (urechea medie)', label: 'Urechea medie', color: '#fecdd3', alpha: 0.16, explode: [0.2, 0.4, 0.4],
          info: '<p>O mică cavitate plină cu <b>aer</b> în spatele timpanului: aici se află cele trei oscioare. Este <b>urechea medie</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.55, n: 14, m: 22, scale: [1, 1.05, 0.8], pos: [0.35, 0.22, 0] } ] },
        { id: 'tromba', name: 'Trompa lui Eustachio', label: 'Trompa lui Eustachio', color: '#f9a8d4', explode: [0.2, -0.4, 0.5],
          info: '<p>Un canal care leagă urechea medie de gât. Lasă aerul să intre și să iasă, astfel încât presiunea să fie egală de ambele părți ale timpanului.</p>',
          more: '<p>Când în avion sau la munte simți urechile „înfundate”, înghițitul sau căscatul deschide trompa lui Eustachio: auzi un „clic” și presiunea se egalizează.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: [[0.45, -0.25, 0.05], [0.6, -0.7, 0.25], [0.75, -1.2, 0.5], [0.85, -1.55, 0.65]] }, { t: 'cyl', r: 0.12, r2: 0.07, h: 0.18, n: 14, pos: [0.87, -1.62, 0.68], rot: [20, 0, -15] } ] },
        { id: 'coclea', name: 'Cohleea (melcul)', label: 'Cohleea', color: '#fbcfe8', explode: [0.7, -0.3, 0.3],
          info: '<p>Un tubuleț răsucit ca cochilia unui <b>melc</b>, plin cu lichid. Scărița pune lichidul în mișcare, iar mii de <b>celule ciliate</b> transformă mișcarea în semnale electrice.</p>',
          more: '<p>Fiecare porțiune a cohleei „ascultă” note diferite: baza (lângă scăriță) sunetele <b>înalte</b>, vârful pe cele <b>grave</b>. Celulele ciliate sunt aproximativ 15 000 și nu mai cresc la loc: zgomotele prea puternice (căștile date la maximum!) le pot strica pentru totdeauna.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: spiral }, { t: 'sphere', r: 0.15, n: 10, m: 14, pos: spiral[spiral.length - 1], color: '#f9a8d4' } ] },
        { id: 'liquido', name: 'Lichidul care se mișcă', label: 'Lichid', color: '#7dd3fc', explode: [0.7, -0.3, 0.3], chip: true,
          info: '<p>Când scărița împinge, în lichidul din cohlee pornește o undă care aleargă de-a lungul melcului și încovoaie cilii celulelor.</p>',
          shapes: fluid },
        { id: 'canali', name: 'Canale semicirculare (echilibru)', label: 'Canale semicirculare', color: '#f9a8d4', explode: [0.6, 0.8, 0],
          info: '<p>Trei inele pline cu lichid, câte unul pentru fiecare direcție din spațiu. Când miști capul, lichidul se deplasează, iar creierul înțelege cum ești întors: ele servesc pentru <b>echilibru</b>!</p>',
          more: '<p>Dacă te învârți pe loc și te oprești brusc, lichidul continuă să se miște încă puțin: de aceea ți se învârte capul. Împreună cu canalele, două săculețe (utricula și sacula) simt gravitația și accelerațiile.</p>',
          shapes: [ { t: 'sphere', r: 0.18, n: 12, m: 16, pos: [0.88, 0.22, 0], color: '#fbcfe8' },
            { t: 'torus', R: 0.3, r: 0.045, n: 26, m: 8, arc: 290, rot: [90, 0, 120], pos: [1.0, 0.62, 0.05] },
            { t: 'torus', R: 0.28, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 30, 90], pos: [1.12, 0.55, -0.3] },
            { t: 'torus', R: 0.27, r: 0.045, n: 26, m: 8, arc: 290, rot: [0, 200, 0], pos: [1.25, 0.32, 0.05] } ] },
        { id: 'nervo', name: 'Nerv auditiv', label: 'Nerv auditiv', color: '#fde047', explode: [1.0, 0, 0],
          info: '<p>Duce semnalele electrice de la cohlee și de la canalele echilibrului până la <b>creier</b>. Creierul este cel care recunoaște o voce, un cântec sau mieunatul pisicii.</p>',
          shapes: [ { t: 'pipe', r: 0.09, n: 12, curve: true, pts: NERVE }, { t: 'pipe', r: 0.06, n: 10, curve: true, pts: [[0.95, 0.25, 0.05], [1.5, 0.15, 0.1], [1.8, 0.0, 0.1]] } ]
            .concat(Array.from({ length: 5 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: NERVE[0], color: '#ffffff', anim: [ { type: 'path', pts: NERVE, wave: 'saw', rate: 0.8, phase: k / 5 }, { type: 'blink', color: '#38bdf8', rate: 1.6, phase: k / 5 } ] }))) }
      ]
    },
    steps: [
      { icon: '🔔', title: 'Sunetul este o vibrație', focus: ['diapason', 'onde', 'padiglione'], view: { rx: 0.1, ry: 0.5 },
        html: '<p>Când ceva vibrează, ca <b>diapazonul</b>, împinge aerul înainte și înapoi. Vibrațiile călătoresc prin aer ca niște <b>unde</b>, până ajung la urechile noastre.</p><p class="tip">✋ Pune degetele pe gât și spune „aaa”: simți coardele vocale vibrând!</p>' },
      { icon: '👂', title: 'Urechea externă adună sunetele', focus: ['padiglione', 'condotto', 'onde', 'timpano'], view: { rx: 0.15, ry: 0.95 }, zoom: 1.3,
        html: '<p><b>Pavilionul</b> adună sunetele ca o pâlnie și le trimite în <b>canalul auditiv</b>. La capăt se află <b>timpanul</b>, o membrană întinsă ca pielea unei tobe.</p>' },
      { icon: '🥁', title: 'Timpanul vibrează', focus: ['timpano', 'martello', 'incudine', 'staffa', 'cassa'], view: { rx: 0.1, ry: -0.3 }, zoom: 2.4,
        html: '<p>Sunetul face <b>timpanul să vibreze</b>. În spatele lui, în <b>urechea medie</b>, trei oscioare, <b>ciocanul</b>, <b>nicovala</b> și <b>scărița</b>, își transmit vibrația și o fac mai puternică, ca o pârghie.</p><p class="tip">🦴 Scărița este cel mai mic os din corp: e cât un bob de orez!</p>' },
      { icon: '🐌', title: 'În melc', focus: ['coclea', 'liquido', 'staffa', 'nervo'], view: { rx: 0.1, ry: -0.2 }, zoom: 1.6,
        html: '<p>Scărița împinge lichidul din <b>cohlee</b>. Lichidul se mișcă și încovoaie cilii a mii de celule, care produc <b>semnale electrice</b>. Baza melcului simte sunetele înalte, vârful pe cele grave.</p>' },
      { icon: '🧠', title: 'Creierul ascultă', focus: ['nervo', 'coclea', 'canali'], view: { rx: 0.2, ry: 0.4 }, zoom: 1.3,
        html: '<p><b>Nervul auditiv</b> duce semnalele la creier, care le transformă în ceea ce „auzim”: cuvinte, muzică, zgomote. Cu două urechi, creierul înțelege și <b>de unde</b> vine un sunet.</p>' },
      { icon: '🤸', title: 'Urechi pentru echilibru', focus: ['canali', 'nervo'], view: { rx: 0.4, ry: -0.6 }, zoom: 2.0,
        html: '<p>Urechea nu servește doar ca să auzim! Cele trei <b>canale semicirculare</b>, pline cu lichid, spun creierului cum se mișcă capul. Așa reușești să te ții în echilibru pe un picior.</p>' },
      { icon: '🌬️', title: 'Supapa de presiune', focus: ['tromba', 'cassa', 'timpano'], view: { rx: -0.1, ry: -0.5 }, zoom: 1.6,
        html: '<p><b>Trompa lui Eustachio</b> leagă urechea medie de gât și egalizează presiunea aerului. De aceea, în avion, când înghiți sau cașți, urechile „se desfundă”.</p><p class="tip">🎧 Protejează-ți urechile: cu căștile nu depăși jumătate din volum.</p>' }
    ],
    facts: [
      { icon: '🔊', title: 'Se măsoară în decibeli', html: 'Intensitatea sunetului se măsoară în <b>decibeli</b> (dB): o șoaptă are 30 dB, o conversație 60 dB, un concert rock 110 dB. Peste 85 dB, pe durată lungă, auzul se strică.' },
      { icon: '🐕', title: 'Sunete pe care nu le auzim', html: 'Noi auzim sunete de la 20 la 20 000 de vibrații pe secundă. Câinii ajung la 45 000, liliecii și delfinii la peste 100 000 (ultrasunete)!' },
      { icon: '😴', title: 'Mereu pornite', html: 'Urechile nu se „opresc” niciodată, nici când dormi: creierul este cel care ignoră zgomotele, dar un ceas deșteptător sau numele tău te trezesc.' },
      { icon: '🦉', title: 'Urechi asimetrice', html: 'Bufnița de hambar are o ureche mai sus decât cealaltă: așa înțelege exact unde se ascunde un șoricel în întuneric.' },
      { icon: '🎤', title: 'Vocea ta înregistrată', html: 'Vocea ta înregistrată ți se pare ciudată pentru că, atunci când vorbești, o auzi și prin <b>oasele craniului</b>, care o fac mai gravă.' }
    ],
    quiz: [
      { type: 'order', q: 'Pune în ordine călătoria sunetului', items: ['Pavilion', 'Canal auditiv', 'Timpan', 'Oscioare', 'Cohlee', 'Nerv auditiv'], explain: 'De la urechea externă la cea medie, apoi la cea internă și, în sfârșit, la creier.' },
      { type: 'mc', q: 'Care este cel mai mic os al corpului uman?', options: ['Ciocanul', 'Scărița', 'Rotula', 'Nicovala'], answer: 1, explain: 'Scărița, din urechea medie, măsoară aproximativ 3 mm.' },
      { type: 'mc', q: 'Ce conține cohleea?', options: ['Aer', 'Lichid', 'Nisip', 'Sânge'], answer: 1, explain: 'Cohleea este plină cu lichid: mișcarea lui încovoaie celulele ciliate.' },
      { type: 'tf', q: 'Canalele semicirculare servesc pentru echilibru.', answer: true, explain: 'Lichidul din cele trei inele semnalează creierului mișcările capului.' },
      { type: 'mc', q: 'Ce este sunetul?', options: ['O lumină invizibilă', 'O vibrație care călătorește prin aer', 'Un gaz', 'Un curent electric'], answer: 1, explain: 'Sunetul este o vibrație care se propagă printr-un material, precum aerul sau apa.' },
      { type: 'mc', q: 'De ce, în avion, înghițitul „desfundă” urechile?', options: ['Pentru că curăță canalul', 'Pentru că deschide trompa lui Eustachio și egalizează presiunea', 'Pentru că face timpanul să vibreze', 'Pentru că închide cohleea'], answer: 1, explain: 'Trompa lui Eustachio leagă urechea medie de gât și egalizează presiunea.' }
    ]
  });
})();
