/* Roverul pe Marte (de tip Perseverance). Format: data/library/FORMATO.md
   Roverul privește spre +x; z = laterale; y = sus. Suspensiile rocker-bogie oscilează (aceleași animații în „ruote” și „sospensioni”). */
(function () {
  const WR = 0.34, HUB = 0.36;
  const ZS = [-1.22, 1.22];
  const ROCK = { type: 'swing', axis: 'z', amp: 6, rate: 0.5, pivot: [0.15, 1.0, 0] };
  const BOG = { type: 'swing', axis: 'z', amp: 9, rate: 0.5, phase: 0.3, pivot: [-0.55, 0.72, 0] };
  /* roata: jantă, banda de rulare în „chevron”, butuc; se rotește în jurul lui z */
  const wheel = (x, z) => ({ t: 'group', pos: [x, HUB, z], anim: { type: 'spin', axis: 'z', dir: -1, rate: 1.2 }, shapes: [
    { t: 'cyl', r: WR, h: 0.32, n: 30, rot: [90, 0, 0], color: '#a1a1aa' },
    { t: 'cyl', r: WR * 0.55, h: 0.34, n: 20, rot: [90, 0, 0], color: '#52525b' },
    { t: 'cyl', r: 0.07, h: 0.38, n: 12, rot: [90, 0, 0], color: '#d4d4d8' }
  ].concat(Array.from({ length: 16 }, (_, k) => ({ t: 'group', rot: [0, 0, k * 22.5], shapes: [
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, 0.075], rot: [0, 22, 0], color: '#3f3f46' },
    { t: 'box', s: [0.035, 0.035, 0.16], pos: [0, WR + 0.01, -0.075], rot: [0, -22, 0], color: '#3f3f46' } ] }))) });
  const side = (z, withWheels) => {
    const zz = z + Math.sign(z) * 0.0;
    const rockerArms = [ { t: 'pipe', r: 0.055, n: 10, pts: [[1.15, HUB, zz], [0.85, 0.98, zz], [0.15, 1.0, zz], [-0.55, 0.72, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.11, h: 0.16, n: 16, rot: [90, 0, 0], pos: [0.15, 1.0, zz], color: '#71717a' } ];
    const bogieArms = [ { t: 'pipe', r: 0.05, n: 10, pts: [[0, HUB, zz], [-0.3, 0.68, zz], [-0.8, 0.68, zz], [-1.15, HUB, zz]], color: '#d4d4d8' },
      { t: 'cyl', r: 0.09, h: 0.15, n: 16, rot: [90, 0, 0], pos: [-0.55, 0.72, zz], color: '#71717a' } ];
    const wf = [wheel(1.15, z)], wb = [wheel(0, z), wheel(-1.15, z)];
    return { t: 'group', anim: ROCK, shapes: (withWheels ? wf : rockerArms).concat([ { t: 'group', anim: BOG, shapes: withWheels ? wb : bogieArms } ]) };
  };

  LIBRARY({
    lang: 'ro',
    id: 'rover',
    title: 'Roverul pe Marte',
    intro: 'Un <b>rover</b> este un robot-laborator cât o mașină care explorează singur Marte. Fotografiază, merge printre stânci, le analizează cu un laser și adună probe ca să caute urme de <b>viață străveche</b>.',
    model: {
      rx: 0.3, ry: -0.75, speed: 0.22, height: 470, fit: 1.12,
      parts: [
        { id: 'suolo', name: 'Solul lui Marte', label: 'Sol marțian', color: '#b45f3c', explode: [0, -0.6, 0], chip: true,
          info: '<p>Marte este roșu pentru că praful lui conține multă <b>rugină</b> (oxid de fier). Solul este plin de pietre, nisip și dune.</p>',
          more: '<p>Pe Marte gravitația este aproximativ <b>o treime</b> din cea a Pământului, aerul este foarte rarefiat (aproape numai dioxid de carbon), iar noaptea temperatura coboară până la −80 °C.</p>',
          shapes: [ { t: 'lathe', n: 40, pts: [[0, 0.0], [3.0, 0.0], [3.25, -0.12], [3.2, -0.2], [0, -0.2]], color: '#b45f3c' },
            { t: 'sphere', r: 0.28, n: 8, m: 10, pos: [3.0, 0.08, 0.6], scale: [1.3, 0.8, 1], color: '#7c2d12' },
            { t: 'sphere', r: 0.2, n: 8, m: 10, pos: [-2.4, 0.05, 1.2], scale: [1.2, 0.7, 1], color: '#92400e' },
            { t: 'sphere', r: 0.15, n: 8, m: 10, pos: [1.9, 0.03, -2.0], color: '#78350f' },
            { t: 'sphere', r: 0.35, n: 8, m: 10, pos: [-1.5, 0.05, -2.3], scale: [1.4, 0.6, 1], color: '#9a3412' },
            { t: 'sphere', r: 0.1, n: 6, m: 8, pos: [1.4, 0.02, 2.3], color: '#7c2d12' } ] },
        { id: 'corpo', name: 'Corpul roverului', label: 'Corp', color: '#e4e4e7', explode: [0, 0.9, 0],
          info: '<p>Este „burta” roverului: înăuntru, la căldură, se află <b>calculatorul</b>, bateriile și instrumentele de laborator. Deasupra este „puntea”, unde sunt montate antene și camere.</p>',
          more: '<p>Roverul este cât o mașină mică (3 m lungime) și cântărește aproximativ <b>1 tonă</b>. Calculatorul este „întărit” împotriva radiațiilor, iar roverul merge singur pe porțiuni scurte, alegând drumul cu ajutorul camerelor.</p>',
          shapes: [ { t: 'box', s: [2.3, 0.5, 1.75], pos: [0, 1.25, 0] },
            { t: 'box', s: [2.2, 0.06, 1.65], pos: [0, 1.53, 0], color: '#d4d4d8' },
            { t: 'box', s: [2.36, 0.08, 1.81], pos: [0, 1.02, 0], color: '#a1a1aa' },
            { t: 'box', s: [0.03, 0.3, 1.3], pos: [1.16, 1.25, 0], color: '#27272a', decal: 1 },
            { t: 'box', s: [0.6, 0.02, 0.4], pos: [0.3, 1.565, -0.5], color: '#fbbf24', decal: 1 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, 0.45], color: '#0ea5e9', decal: 2 },
            { t: 'cyl', r: 0.06, h: 0.03, n: 12, rot: [0, 0, 90], pos: [1.17, 1.15, -0.45], color: '#0ea5e9', decal: 2 } ] },
        { id: 'ruote', name: 'Roți', color: '#a1a1aa', explode: [0, 0, 0.9],
          info: '<p>Șase roți de aluminiu cu „gheare” (crampoane în zigzag) ca să nu alunece pe nisip. Fiecare roată are <b>motorul ei</b>, iar cele din față și din spate pot și să vireze.</p>',
          more: '<p>Roțile nu au anvelope: o cameră cu aer pe Marte s-ar putea sparge, iar nimeni nu ar schimba-o! Roverul merge foarte încet, cam <b>150 de metri pe oră</b>, ca să nu riște nimic.</p>',
          shapes: ZS.map((z) => side(z, true)) },
        { id: 'sospensioni', name: 'Suspensii rocker-bogie', label: 'Suspensii', color: '#d4d4d8', explode: [0, 0, 0.55],
          info: '<p>Brațe articulate leagă roțile de corp. Se îndoaie ca leagănele, așa că <b>toate cele șase roți</b> ating mereu solul, chiar și peste pietre.</p>',
          more: '<p>Sistemul se numește <b>rocker-bogie</b>: „rocker” (balansierul) ține roata din față, iar „bogie” pe celelalte două. Roverul poate trece peste pietre cât roțile lui de înalte fără să se răstoarne, chiar și când este înclinat la 45°.</p>',
          shapes: ZS.map((z) => side(z, false)).concat([ { t: 'pipe', r: 0.045, n: 10, pts: [[0.15, 1.42, -1.1], [0.15, 1.62, 0], [0.15, 1.42, 1.1]], color: '#a1a1aa' } ]) },
        { id: 'testa', name: 'Catargul cu camere', label: 'Cap și camere', color: '#e4e4e7', pos: [0.85, 1.55, 0.55], explode: [0.3, 1.2, 0.4],
          info: '<p>Este „capul” roverului, la 2 metri înălțime. Două camere color, ca doi ochi, fac <b>fotografii 3D</b>; alte camere supraveghează obstacolele de lângă roți.</p>',
          more: '<p>Imaginile și comenzile călătoresc între Marte și Pământ în <b>4 până la 24 de minute</b> (depinde de unde se află cele două planete): de aceea roverul nu poate fi condus „în direct” ca o mașinuță.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 1.35, n: 14, pos: [0, 0.67, 0], color: '#d4d4d8' }, { t: 'cyl', r: 0.12, h: 0.1, n: 16, pos: [0, 0.05, 0], color: '#71717a' },
            { t: 'group', pos: [0, 1.42, 0], anim: { type: 'swing', axis: 'y', amp: 50, wave: 'window', from: 0.05, to: 0.45, ramp: 0.3 }, shapes: [
              { t: 'cyl', r: 0.1, h: 0.14, n: 16, color: '#71717a' },
              { t: 'box', s: [0.42, 0.28, 0.62], pos: [0.05, 0.2, 0], color: '#f4f4f5' },
              { t: 'box', s: [0.32, 0.2, 0.2], pos: [0.12, 0.2, -0.02], color: '#d4d4d8' },
              { t: 'cyl', r: 0.09, h: 0.08, n: 20, rot: [0, 0, 90], pos: [0.29, 0.22, 0], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, 0.22], color: '#18181b' },
              { t: 'cyl', r: 0.055, h: 0.06, n: 16, rot: [0, 0, 90], pos: [0.27, 0.2, -0.22], color: '#18181b' },
              { t: 'cyl', r: 0.035, h: 0.02, n: 12, rot: [0, 0, 90], pos: [0.305, 0.22, 0], color: '#38bdf8', decal: 1 } ] } ] },
        { id: 'laser', name: 'Laserul SuperCam', label: 'Laser', color: '#ef4444', chip: true,
          info: '<p>Din cap, roverul trage un <b>laser</b> foarte mic spre o stâncă aflată până la 7 metri depărtare. Stânca scoate o scânteie și, privind lumina scânteii, roverul înțelege <b>din ce este făcută</b>.</p>',
          more: '<p>Fiecare element chimic emite lumină de culori precise: analizând <b>spectrul</b> scânteii se recunosc fierul, siliciul, calciul… Un microfon înregistrează și „tic-ul” laserului: sunetul spune dacă stânca este dură sau moale.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[1.17, 3.19, 0.55], [2.9, 0.22, 0.6]], color: '#ef4444', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.1 } },
            { t: 'sphere', r: 0.11, n: 8, pos: [2.9, 0.22, 0.6], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.5, to: 0.6, ramp: 0.2 } } ] },
        { id: 'braccio', name: 'Braț robotic', color: '#e4e4e7', pos: [1.18, 1.18, -0.35], explode: [0.9, 0.2, -0.6],
          info: '<p>Un braț lung de peste 2 metri, cu 5 articulații. În vârf are o „mână” cu un <b>burghiu</b>, o lupă și alte instrumente pentru studierea stâncilor de aproape.</p>',
          shapes: [ { t: 'cyl', r: 0.11, h: 0.2, n: 16, rot: [90, 0, 0], color: '#71717a' },
            { t: 'group', anim: { type: 'swing', axis: 'z', amp: -38, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
              { t: 'pipe', r: 0.06, n: 12, pts: [[0, 0, 0], [0.95, 0.15, 0]] },
              { t: 'group', pos: [0.95, 0.15, 0], anim: { type: 'swing', axis: 'z', amp: -45, wave: 'window', from: 0.62, to: 0.98, ramp: 0.35 }, shapes: [
                { t: 'sphere', r: 0.09, n: 10, color: '#71717a' },
                { t: 'pipe', r: 0.055, n: 12, pts: [[0, 0, 0], [0.8, -0.1, 0]] },
                { t: 'group', pos: [0.85, -0.1, 0], shapes: [
                  { t: 'box', s: [0.28, 0.28, 0.28], color: '#a1a1aa' },
                  { t: 'cyl', r: 0.05, h: 0.38, n: 12, pos: [0, -0.3, 0], color: '#52525b' },
                  { t: 'cyl', r: 0.02, h: 0.2, n: 8, pos: [0, -0.56, 0], color: '#d4d4d8' },
                  { t: 'cyl', r: 0.08, h: 0.12, n: 14, pos: [0.18, 0, 0], rot: [0, 0, 90], color: '#3f3f46' },
                  { t: 'box', s: [0.12, 0.18, 0.12], pos: [0, 0, 0.2], color: '#fbbf24' } ] } ] } ] } ] },
        { id: 'provette', name: 'Eprubetele cu probe', label: 'Eprubete', color: '#e5e7eb', explode: [0, -0.4, -1.1],
          info: '<p>Burghiul ia mici „carote” de rocă, cât o cretă, și le închide în <b>eprubete</b> sigilate. Într-o zi, o altă misiune le va aduce pe Pământ.</p>',
          shapes: Array.from({ length: 7 }, (_, k) => ({ t: 'cyl', r: 0.045, h: 0.42, n: 14, rot: [0, 0, 90], pos: [-0.2, 0.94, -0.6 + k * 0.12], color: k % 2 ? '#e5e7eb' : '#cbd5e1' })).concat([ { t: 'box', s: [0.6, 0.06, 0.95], pos: [-0.2, 0.89, -0.24], color: '#71717a' } ]) },
        { id: 'rtg', name: 'Generator nuclear (RTG)', label: 'Generator', color: '#3f3f46', pos: [-1.35, 1.55, 0], explode: [-1.0, 0.4, 0],
          info: '<p>Roverul nu folosește panouri solare, pe care praful le-ar acoperi. Are o „baterie” specială: un material <b>radioactiv</b> care se încălzește, iar căldura devine electricitate, zi și noapte, ani la rând.</p>',
          more: '<p>RTG conține aproximativ 5 kg de plutoniu-238 și produce cam 110 wați: puțin, dar timp de 14 ani. Căldura în plus servește și la <b>menținerea la cald</b> a instrumentelor în nopțile înghețate de pe Marte.</p>',
          shapes: [ { t: 'group', rot: [0, 0, 32], shapes: [ { t: 'cyl', r: 0.24, h: 0.95, n: 24, rot: [0, 0, 90] },
            { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [0.48, 0, 0], color: '#71717a' }, { t: 'cyl', r: 0.26, h: 0.06, n: 24, rot: [0, 0, 90], pos: [-0.48, 0, 0], color: '#71717a' } ]
            .concat(Array.from({ length: 8 }, (_, k) => ({ t: 'group', rot: [k * 45, 0, 0], shapes: [ { t: 'box', s: [0.86, 0.2, 0.025], pos: [0, 0.33, 0], color: '#27272a' } ] }))) },
            { t: 'sphere', r: 0.24, n: 10, color: '#f97316', alpha: 0.35, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ] },
        { id: 'antenne', name: 'Antene', color: '#d4d4d8', explode: [-0.3, 1.0, -0.6],
          info: '<p>Roverul „dă telefon” acasă cu două antene: cea hexagonală vorbește <b>direct cu Pământul</b>; cea mică vorbește cu sateliții aflați pe orbită în jurul lui Marte, care servesc drept repetitoare.</p>',
          more: '<p>Cea mai mare parte a datelor trece prin sateliți (ca Mars Reconnaissance Orbiter), care primesc mult mai repede și apoi retransmit spre marile antene ale NASA din California, Spania și Australia.</p>',
          shapes: [ { t: 'cyl', r: 0.05, h: 0.3, n: 10, pos: [-0.55, 1.7, -0.55], color: '#71717a' },
            { t: 'group', pos: [-0.55, 1.9, -0.55], anim: { type: 'swing', axis: 'y', amp: 30, rate: 0.5 }, shapes: [
              { t: 'group', rot: [0, 0, 55], shapes: [ { t: 'cyl', r: 0.32, h: 0.06, n: 6, color: '#e4e4e7' }, { t: 'cyl', r: 0.26, h: 0.02, n: 6, pos: [0, 0.035, 0], color: '#a1a1aa', decal: 1 } ] } ] },
            { t: 'cyl', r: 0.06, h: 0.32, n: 14, pos: [-0.85, 1.72, 0.55], color: '#f4f4f5' }, { t: 'sphere', r: 0.06, n: 8, pos: [-0.85, 1.88, 0.55], color: '#f4f4f5' } ] },
        { id: 'elicottero', name: 'Elicopterul Ingenuity', label: 'Elicopter', color: '#a1a1aa', pos: [-1.6, 0, 2.0], explode: [-0.6, 0.8, 0.8],
          anim: { type: 'move', dir: [0, 1, 0], amp: 1.6, wave: 'window', from: 0.15, to: 0.85, ramp: 0.4 },
          info: '<p>Un mic elicopter de <b>1,8 kg</b>, sosit împreună cu roverul Perseverance. În 2021 a fost primul aparat care a zburat pe o altă planetă!</p>',
          more: '<p>Aerul de pe Marte este de 100 de ori mai rarefiat decât al nostru: ca să se ridice, palele, lungi de 1,2 m, se rotesc cu <b>2400 de rotații pe minut</b>, mult mai repede decât ale unui elicopter obișnuit. A zburat de 72 de ori.</p>',
          shapes: [ { t: 'box', s: [0.2, 0.18, 0.2], pos: [0, 0.38, 0], color: '#f4f4f5' },
            { t: 'cyl', r: 0.02, h: 0.42, n: 8, pos: [0, 0.64, 0], color: '#3f3f46' },
            { t: 'box', s: [0.32, 0.02, 0.2], pos: [0, 0.88, 0], color: '#1e3a8a' } ]
            .concat([45, 135, 225, 315].map((a) => ({ t: 'pipe', r: 0.012, n: 6, pts: [[0.08 * Math.cos(a * Math.PI / 180), 0.3, 0.08 * Math.sin(a * Math.PI / 180)], [0.3 * Math.cos(a * Math.PI / 180), 0.0, 0.3 * Math.sin(a * Math.PI / 180)]], color: '#9ca3af' })))
            .concat([ [0.68, 1], [0.78, -1] ].map(([y, d]) => ({ t: 'group', pos: [0, y, 0], anim: { type: 'spin', axis: 'y', dir: d, rate: 12 }, shapes: [
              { t: 'box', s: [1.2, 0.012, 0.09], rot: [d * 8, 0, 0], color: '#52525b' }, { t: 'cyl', r: 0.04, h: 0.04, n: 10, color: '#3f3f46' } ] }))) }
      ]
    },
    steps: [
      { icon: '🤖', title: 'Un robot explorator', explode: 0,
        html: '<p>Marte este foarte departe: ca să ajungi acolo ai nevoie de o călătorie de <b>7 luni</b>. Să trimitem oameni este încă prea greu, așa că trimitem roboți. Roverul este un <b>laborator pe roți</b> care lucrează singur ani de zile.</p>' },
      { icon: '🛞', title: 'Șase roți și brațe articulate', focus: ['ruote', 'sospensioni', 'suolo'], view: { rx: 0.12, ry: -0.1 },
        html: '<p>Fiecare roată are un motor. <b>Suspensiile rocker-bogie</b> sunt brațe care se îndoaie ca leagănele: așa, toate cele 6 roți rămân mereu lipite de sol, chiar și peste pietre.</p><p class="tip">🐢 Roverul merge încet: sub 200 de metri pe oră. Pe Marte nu există platformă de remorcare!</p>' },
      { icon: '👀', title: 'Ochii roverului', focus: ['testa', 'corpo'], loop: [0, 0.48], zoom: 1.4, view: { rx: 0.2, ry: -0.5 },
        html: '<p>În vârful catargului sunt două <b>camere</b>, depărtate ca ochii noștri: împreună fac fotografii 3D. Oamenii de știință de pe Pământ se uită la ele și hotărăsc încotro să meargă.</p><p>Roverul poate și să meargă singur câțiva metri, alegând drumul cel mai sigur.</p>' },
      { icon: '🔴', title: 'Un laser ca să citească stâncile', focus: ['laser', 'testa', 'suolo'], loop: [0.45, 0.65], view: { rx: 0.25, ry: -0.9 },
        html: '<p>Roverul trage un mic <b>laser</b> spre o stâncă: se aprinde o scânteie minusculă. Din lumina scânteii se înțelege din ce este făcută stânca, fără măcar să o atingi!</p>' },
      { icon: '🦾', title: 'Brațul și burghiul', focus: ['braccio', 'provette', 'suolo'], loop: [0.6, 1.0], view: { rx: 0.2, ry: -0.35 },
        html: '<p><b>Brațul robotic</b> așază instrumentele pe stâncă: o lupă, senzori chimici și un <b>burghiu</b>. „Carotele” de rocă sunt închise în <b>eprubete</b>.</p><p class="tip">🧪 Scopul? Să caute urme de microbi care au trăit acum miliarde de ani, când pe Marte existau lacuri și râuri.</p>' },
      { icon: '⚡', title: 'Energie zi și noapte', focus: ['rtg', 'corpo'], view: { rx: 0.25, ry: -2.3 }, zoom: 1.3,
        html: '<p>În spate se află <b>generatorul nuclear</b> (RTG): un material care se încălzește singur; căldura devine electricitate. Funcționează și noaptea, și în timpul furtunilor de nisip, când panourile solare nu ar fi de folos.</p>' },
      { icon: '📡', title: 'Apel acasă', focus: ['antenne', 'corpo'], view: { rx: 0.5, ry: -1.6 }, zoom: 1.2,
        html: '<p>Cu <b>antenele</b>, roverul primește comenzile și trimite fotografii și date. Mesajul are nevoie de câteva minute ca să ajungă: roverul trebuie să se descurce singur.</p>' },
      { icon: '🚁', title: 'Primul zbor pe Marte', focus: ['elicottero', 'suolo'], loop: [0.1, 0.9], view: { rx: 0.15, ry: -1.2 },
        html: '<p><b>Ingenuity</b> este un mini-elicopter care a făcut pe „exploratorul văzut de sus”. Palele lui se rotesc foarte repede pentru că aerul de pe Marte este foarte rarefiat.</p>' }
    ],
    facts: [
      { icon: '🚗', title: 'Cât o mașină', html: 'Perseverance are 3 metri lungime, 2,7 lățime și cântărește aproximativ o tonă. Numele lui înseamnă <b>„perseverență”</b>.' },
      { icon: '🪂', title: 'Șapte minute de groază', html: 'Ca să aterizeze, roverul trece de la 20 000 km/h la zero în 7 minute: scut termic, parașută și, în sfârșit, o „macara zburătoare” care îl coboară cu cabluri.' },
      { icon: '🎙️', title: 'Sunetele lui Marte', html: 'Perseverance are microfoane: pentru prima dată am auzit <b>vântul de pe Marte</b> și bâzâitul elicopterului.' },
      { icon: '🏆', title: 'Recordul lui Opportunity', html: 'Roverul Opportunity trebuia să reziste 90 de zile și a lucrat în schimb <b>14 ani</b>, parcurgând mai mult decât un maraton (45 km).' },
      { icon: '🔤', title: 'Un mesaj pe roți', html: 'Roțile lui Curiosity au găuri care lasă pe nisip un mesaj în alfabet Morse: „JPL”, laboratorul care l-a construit.' }
    ],
    quiz: [
      { type: 'mc', q: 'De ce sunt articulate suspensiile roverului (rocker-bogie)?', options: ['Ca să meargă mai repede', 'Ca să țină toate roțile pe sol peste pietre', 'Ca să economisească energie', 'Ca să semene cu un păianjen'], answer: 1, explain: 'Brațele se îndoaie ca leagănele: cele 6 roți rămân în contact cu solul, iar roverul nu se răstoarnă.' },
      { type: 'mc', q: 'De ce nu este condus roverul „în direct” ca o mașinuță?', options: ['Pentru că aceste comenzi au nevoie de minute ca să ajungă', 'Pentru că nu are volan', 'Pentru că pe Marte este mereu noapte', 'Pentru că nu are antene'], answer: 0, explain: 'Semnalele radio au nevoie de 4 până la 24 de minute între Pământ și Marte.' },
      { type: 'tf', q: 'Marte este roșu pentru că praful lui conține rugină.', answer: true, explain: 'Oxidul de fier (rugina) colorează în roșu praful marțian.' },
      { type: 'mc', q: 'La ce servește laserul roverului?', options: ['Ca să se apere', 'Ca să încălzească instrumentele', 'Ca să înțeleagă din ce sunt făcute stâncile', 'Ca să lumineze noaptea'], answer: 2, explain: 'Laserul face o scânteie pe stâncă; lumina scânteii dezvăluie elementele chimice.' },
      { type: 'mc', q: 'De unde ia energie Perseverance?', options: ['Din panouri solare mari', 'Dintr-un generator care transformă căldura în electricitate', 'Din vântul de pe Marte', 'Din baterii schimbate în fiecare lună'], answer: 1, explain: 'RTG folosește căldura unui material radioactiv: funcționează zi și noapte ani la rând.' },
      { type: 'num', q: 'Câte roți are roverul?', answer: 6, explain: 'Șase roți, fiecare cu motorul ei.' }
    ]
  });
})();
