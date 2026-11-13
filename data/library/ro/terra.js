/* La Terra "tagliata a metà": la metà davanti (Europa e Africa, longitudine 0 verso +z) si sposta con Esplodi;
   sulla faccia del taglio si vedono crosta, mantello e nucleo. Tutto è inclinato di 23,5° come l'asse terrestre. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const ll = (lat, lon, r) => [r * Math.cos(lat * D) * Math.sin(lon * D), r * Math.sin(lat * D), r * Math.cos(lat * D) * Math.cos(lon * D)];
  /* contorni molto semplificati dei continenti [lat, lon] */
  const LAND = {
    africa: [[37, -10], [37, 10], [32, 32], [12, 44], [11, 51], [-2, 41], [-15, 40], [-26, 33], [-35, 20], [-30, 15], [-17, 12], [-5, 9], [4, 7], [5, -5], [5, -10], [10, -15], [15, -17], [21, -17], [28, -13], [35, -6]],
    europa: [[36, -9], [43, -9], [44, -1], [48, -5], [51, 2], [54, 8], [57, 8], [59, 5], [62, 5], [70, 20], [71, 30], [68, 40], [60, 60], [45, 50], [42, 42], [41, 29], [37, 27], [38, 23], [40, 19], [45, 13], [42, 15], [38, 16], [40, 9], [43, 5], [43, 3], [41, 1], [37, -2]],
    asia: [[41, 29], [42, 42], [45, 50], [60, 60], [70, 70], [77, 105], [72, 130], [70, 160], [65, 180], [60, 165], [53, 157], [45, 142], [40, 130], [35, 129], [30, 122], [22, 114], [20, 106], [10, 107], [1, 104], [8, 98], [16, 97], [22, 90], [20, 86], [8, 77], [20, 72], [25, 66], [25, 57], [13, 45], [30, 48], [30, 35], [36, 36]],
    nordamerica: [[70, -160], [71, -155], [70, -140], [69, -115], [72, -95], [64, -85], [60, -94], [55, -82], [52, -79], [60, -64], [53, -56], [47, -53], [44, -66], [41, -70], [35, -76], [31, -81], [25, -80], [30, -84], [29, -95], [22, -97], [19, -96], [21, -87], [15, -88], [9, -79], [8, -83], [15, -93], [20, -105], [23, -110], [32, -117], [40, -124], [48, -125], [58, -136], [60, -147], [57, -157], [60, -163], [66, -165]],
    groenlandia: [[60, -44], [66, -36], [70, -22], [78, -18], [83, -30], [82, -60], [77, -72], [70, -54], [65, -52]],
    sudamerica: [[12, -72], [11, -63], [5, -52], [0, -50], [-5, -35], [-13, -38], [-23, -42], [-34, -53], [-40, -62], [-52, -68], [-55, -68], [-50, -75], [-40, -73], [-30, -71], [-18, -70], [-5, -81], [1, -80], [8, -77]],
    australia: [[-11, 131], [-12, 137], [-17, 141], [-11, 143], [-25, 153], [-38, 149], [-39, 146], [-35, 138], [-32, 133], [-35, 117], [-22, 114], [-14, 127]],
    madagascar: [[-12, 49], [-25, 47], [-25, 44], [-16, 44]], uk: [[50, -5], [51, 1], [53, 0], [58, -3], [58, -6], [55, -5], [53, -4]], giappone: [[31, 130], [35, 140], [41, 141], [45, 142], [40, 139], [34, 131]]
  };
  const inPoly = (p, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  const isLand = (lat, lon) => lat < -70 || Object.keys(LAND).some((k) => inPoly([lat, lon], LAND[k].map(([a, o]) => [a, o])));
  const landColor = (lat, lon) => Math.abs(lat) > 62 && (lon < -15 && lon > -75 || lat < -60) ? '#f1f5f9' : (lat > 14 && lat < 32 && lon > -15 && lon < 55) || (lat < -18 && lat > -32 && lon > 118 && lon < 145) ? '#ca8a04' : (Math.abs(lat) > 55 ? '#3f6212' : '#4d7c0f');
  /* "tessere" di terra: dischetti appoggiati sulla superficie, su una griglia di 6° (front = longitudine tra -90 e 90) */
  const tiles = (front) => {
    const s = [];
    for (let lat = -84; lat <= 84; lat += 6) {
      const step = 6 / Math.max(0.25, Math.cos(lat * D));
      for (let lon = -180; lon < 180; lon += step) {
        const isFront = Math.abs(lon) < 90; if (isFront !== front || !isLand(lat, lon)) continue;
        s.push({ t: 'group', rot: [0, lon, 0], shapes: [ { t: 'group', rot: [-lat, 0, 0], shapes: [ { t: 'cyl', r: 0.17, h: 0.02, n: 8, rot: [90, 0, 0], pos: [0, 0, R + 0.005], color: landColor(lat, lon), decal: 1 } ] } ] });
      }
    }
    return s;
  };
  const surfPipe = (pts, r, color) => ({ t: 'pipe', r, n: 6, curve: true, pts: pts.map(([a, o]) => ll(a, o, R + 0.03)), color });
  const T = (shapes) => [ { t: 'group', rot: [0, 0, -23.5], shapes } ];           // inclinazione dell'asse
  const hemi = (r, color, dz, front) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [front ? 90 : -90, 0, 0], pos: [0, 0, dz], color });
  /* celle che girano sulla faccia del taglio (convezione) */
  const loops = (rc, rr, n, col, col2, rate) => {
    const s = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 360 * D + 0.2, c = [rc * Math.cos(a), rc * Math.sin(a)], dir = i % 2 ? 1 : -1;
      const pts = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.09]; });
      s.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.07], color: col2 });
      for (let k = 0; k < 2; k++) s.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: col, anim: { type: 'path', pts, wave: 'saw', rate, phase: k / 2 } });
    }
    return s;
  };
  /* linee del campo magnetico (dipolo): r = L·cos²(lat) */
  const field = [];
  [2.6, 3.2].forEach((Lr) => [0, 60, 120, 180, 240, 300].forEach((lon) => {
    const pts = []; for (let lat = -70; lat <= 70; lat += 5) { const r = Lr * Math.cos(lat * D) ** 2; if (r > R + 0.08) pts.push(ll(lat, lon, r)); }
    if (pts.length > 2) { field.push({ t: 'pipe', r: 0.014, n: 5, curve: true, pts, color: '#a78bfa' }); field.push({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: pts[0], color: '#ddd6fe', anim: { type: 'path', pts, wave: 'saw', rate: 0.3, phase: lon / 360 } }); }
  }));
  const clouds = [[50, -30, 1.4], [10, -20, 1.0], [-40, 0, 1.6], [55, 20, 1.0], [5, 60, 1.2], [-50, 60, 1.3], [-10, -60, 1.1], [30, -50, 0.9], [62, -5, 0.8]];


  LIBRARY({
    lang: 'ro',
    id: 'terra',
    title: 'Pământul',
    intro: 'Pământul este planeta noastră: o minge de rocă și metal lată de aproape <b>13 000 km</b>, cu oceane, continente și o pătură subțire de aer. Înăuntru este făcut din <b>straturi</b>, ca o piersică: coajă, miez și sâmbure. Haide să-l deschidem!',
    model: {
      rx: 0.22, ry: -0.42, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'superficie', name: 'Suprafața: oceane și continente', label: 'Continente și oceane', color: '#1d4ed8', explode: [4.6, 0.3, -2.6],
          info: '<p>Din afară, Pământul este <b>albastru</b>: oceanele acoperă aproximativ <b>71 %</b> din suprafață. Restul sunt continentele. Aici în față vezi Europa (cu Italia!) și Africa.</p>',
          more: '<p>Oceanele au în medie 3700 m adâncime; cel mai adânc punct, Groapa Marianelor, coboară la aproape 11 000 m. Cel mai înalt munte, Everest, are 8849 m.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, true) ].concat(tiles(true))) },
        { id: 'nuvole', name: 'Nori', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>Norii sunt picături de apă și cristale de gheață suspendate în aer. În orice moment acoperă aproximativ două treimi din planetă.</p>',
          shapes: T(clouds.map(([a, o, s], i) => ({ t: 'group', rot: [0, o, 0], shapes: [ { t: 'group', rot: [-a, 0, 0], shapes: [ { t: 'sphere', r: 0.16 * s, n: 6, m: 10, scale: [1.6, 0.6, 0.1], rot: [0, 0, i * 25], pos: [0, 0, R + 0.06], color: '#ffffff' } ] } ] }))) },
        { id: 'crosta', name: 'Scoarța', color: '#92400e', explode: [0, 0, -0.4],
          info: '<p>„Coaja" de rocă pe care trăim. Este foarte subțire: proporțional, este mai subțire decât coaja unui măr! Sub continente are 30–70 km grosime, sub oceane doar 5–10 km.</p>',
          more: '<p>Scoarța este împărțită în bucăți mari, <b>plăcile</b>, care plutesc pe manta și se mișcă cu câțiva centimetri pe an, cam cât cresc unghiile tale.</p>',
          shapes: T([ hemi(R, '#1d4ed8', 0, false), { t: 'tube', r: R + 0.004, ri: R - 0.08, h: 0.03, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#92400e' } ].concat(tiles(false))) },
        { id: 'placche', name: 'Marginile plăcilor', label: 'Plăci', color: '#facc15', explode: [4.6, 0.3, -2.6],
          info: '<p>Liniile galbene sunt câteva dintre <b>marginile dintre plăci</b>. Unde plăcile se îndepărtează se naște scoarță nouă (ca în mijlocul Atlanticului); unde se ciocnesc se ridică munți ca <b>Alpii</b> și Himalaya, și apar vulcani și cutremure.</p>',
          more: '<p>Acum 200 de milioane de ani continentele erau unite într-un singur supercontinent, <b>Pangeea</b>. Privește țărmurile Africii și ale Americii de Sud: se potrivesc ca piesele unui puzzle!</p>',
          shapes: T([ surfPipe([[66, -18], [50, -29], [30, -42], [15, -46], [0, -22], [-20, -13], [-40, -16], [-55, -5]], 0.03, '#facc15'),
            surfPipe([[36, -8], [40, 5], [45, 12], [41, 22], [38, 35], [34, 50], [30, 65], [30, 80], [27, 88]], 0.03, '#facc15'),
            surfPipe([[12, -79], [-5, -83], [-20, -73], [-35, -74], [-50, -77]], 0.03, '#facc15'),
            surfPipe([[13, 42], [0, 37], [-15, 35]], 0.025, '#facc15') ]) },
        { id: 'mantello-superiore', name: 'Mantaua superioară', label: 'Mantaua superioară', color: '#ea580c', explode: [0, 0, 0],
          info: '<p>Sub scoarță se află <b>mantaua</b>: rocă foarte fierbinte care, în timp foarte îndelungat, se mișcă încet ca un aluat des. În partea de sus, în unele locuri, roca se topește și formează <b>magma</b> vulcanilor.</p>',
          shapes: T([ hemi(R - 0.08, '#ea580c', 0.022, false) ]) },
        { id: 'mantello-inferiore', name: 'Mantaua inferioară', label: 'Mantaua inferioară', color: '#b91c1c', explode: [0, 0, 0],
          info: '<p>Mantaua este cel mai mare strat: ajunge până la <b>2900 km</b> adâncime și singură reprezintă mai mult de 80 % din volumul Pământului. Cu cât cobori mai mult, cu atât e mai cald: până la aproximativ 4000 °C.</p>',
          shapes: T([ hemi(1.79, '#b91c1c', 0.032, false) ]) },
        { id: 'convezione', name: 'Curenții din manta', label: 'Curenți de convecție', color: '#fed7aa', explode: [0, 0, 0.05], chip: true,
          info: '<p>Mantaua este mai caldă jos și mai rece sus: roca caldă urcă încet, cea rece coboară. Acești <b>curenți de convecție</b> târăsc plăcile scoarței.</p>',
          more: '<p>O rotație completă a acestor curenți durează <b>zeci de milioane de ani</b>: roca mantalei se mișcă cu viteza de câțiva centimetri pe an.</p>',
          shapes: T(loops(1.45, 0.28, 10, '#fed7aa', '#7f1d1d', 0.3)) },
        { id: 'nucleo-esterno', name: 'Nucleul extern (lichid)', label: 'Nucleul extern', color: '#f59e0b', explode: [0, 0, 0.1],
          info: '<p>Un strat de <b>fier și nichel topite</b>, lichide, la 4000–5000 °C. Metalul lichid aflat în mișcare creează <b>câmpul magnetic</b> al Pământului.</p>',
          shapes: T([ hemi(1.09, '#f59e0b', 0.042, false) ].concat(loops(0.74, 0.17, 7, '#fef3c7', '#b45309', 0.8))) },
        { id: 'nucleo-interno', name: 'Nucleul intern (solid)', label: 'Nucleul intern', color: '#fef3c7', explode: [0, 0, 0.2],
          info: '<p>Centrul Pământului: o minge de <b>fier și nichel</b> foarte fierbinte, cam <b>5400 °C</b>, ca suprafața Soarelui! Cu toate acestea este <b>solid</b>, pentru că presiunea este enormă.</p>',
          more: '<p>Nimeni n-a coborât vreodată atât de adânc: cea mai adâncă gaură săpată vreodată ajunge la 12 km. Cunoaștem interiorul Pământului studiind cum călătoresc <b>undele cutremurelor</b>: își schimbă viteza și direcția când trec de la un strat la altul.</p>',
          shapes: T([ { t: 'sphere', r: 0.38, n: 14, m: 22, anim: { type: 'blink', color: '#ffffff', amount: 0.4, rate: 0.8 } } ]) },
        { id: 'campo-magnetico', name: 'Câmpul magnetic', label: 'Câmp magnetic', color: '#a78bfa', explode: [0, 0, 0],
          info: '<p>Pământul se comportă ca un <b>magnet gigantic</b>. De aceea acul busolei arată spre nord. Câmpul magnetic ne protejează și de vântul solar.</p>',
          more: '<p>Polul nord magnetic nu coincide exact cu cel geografic și se deplasează cu zeci de km pe an. În istoria Pământului, polii magnetici s-au <b>inversat</b> de multe ori!</p>',
          shapes: T(field) },
        { id: 'asse', name: 'Axa de rotație', label: 'Axa Pământului', color: '#e2e8f0', explode: [0, 0, 0],
          info: '<p>Pământul se rotește în jurul lui însuși, în jurul unei linii imaginare, <b>axa</b>, care trece prin Polul Nord și Polul Sud. O rotație durează <b>24 de ore</b>: este ziua și noaptea.</p>',
          more: '<p>Axa este înclinată cu <b>23,5°</b>. De aceea, în timp ce Pământul se mișcă în jurul Soarelui, razele ajung mai drepte când pe emisfera nordică, când pe cea sudică: iată <b>anotimpurile</b>!</p>',
          shapes: T([ { t: 'cyl', r: 0.025, h: 5.6, n: 8, color: '#e2e8f0' }, { t: 'cone', r: 0.08, h: 0.22, n: 12, pos: [0, 2.9, 0], color: '#ef4444' },
            { t: 'group', pos: [0, 2.45, 0], anim: { type: 'spin', axis: 'y', rate: 0.5, dir: -1 }, shapes: [ { t: 'torus', R: 0.42, r: 0.02, n: 24, m: 4, arc: 300, color: '#e2e8f0' }, { t: 'cone', r: 0.06, h: 0.16, n: 10, rot: [0, 0, 90], pos: [0.42, 0, 0], color: '#e2e8f0' } ] } ]) },
        { id: 'atmosfera', name: 'Atmosfera', color: '#7dd3fc', alpha: 0.14, explode: [0, 0, 0],
          info: '<p>O pătură subțire de <b>aer</b> înconjoară planeta: conține oxigenul pe care îl respirăm, păstrează căldura și ne protejează de cele mai periculoase raze ale Soarelui.</p>',
          more: '<p>Aerul este format în proporție de 78 % din azot și 21 % din oxigen. Jumătate din tot aerul se află sub 5,5 km înălțime: la această scară, atmosfera este subțire ca o foaie de ceapă.</p>',
          shapes: [ { t: 'sphere', r: R + 0.13, n: 18, m: 32 } ] }
      ]
    },
    steps: [
      { icon: '🌍', title: 'Planeta albastră', explode: 0,
        html: '<p>Văzut din spațiu, Pământul este albastru și alb: <b>oceane</b> și <b>nori</b>. Este singura planetă pe care o cunoaștem cu apă lichidă la suprafață și cu viață.</p><p class="tip">🇮🇹 Poți găsi Italia? Este „cizma" din mijlocul mării, deasupra Africii.</p>' },
      { icon: '🔄', title: 'Se învârte în jurul ei', explode: 0,
        html: '<p>Pământul se rotește în jurul <b>axei</b> sale în 24 de ore, de la vest spre est: de aceea Soarele pare să răsară la est și să apună la vest. Axa este <b>înclinată</b> și asta ne dăruiește anotimpurile.</p>' },
      { icon: '🍑', title: 'Înăuntru este făcut din straturi', explode: 1, focus: ['crosta', 'mantello-superiore', 'mantello-inferiore', 'nucleo-esterno', 'nucleo-interno'], view: { rx: 0.15, ry: -0.2 },
        html: '<p>Dacă am putea tăia Pământul ca pe o piersică, am vedea <b>scoarța</b> (coaja), <b>mantaua</b> (pulpa) și <b>nucleul</b> (sâmburele), împărțit în nucleu extern lichid și nucleu intern solid.</p><p class="tip">🌡️ Cu cât cobori mai mult, cu atât e mai cald: în centru sunt aproximativ 5400 °C.</p>' },
      { icon: '🥾', title: 'Scoarța și plăcile', explode: 0, view: { rx: 0.3, ry: -0.05 },
        html: '<p>Scoarța este foarte subțire și împărțită în bucăți mari, <b>plăcile</b>. Unde se ciocnesc se nasc munți, vulcani și cutremure: Italia se află chiar acolo unde placa africană împinge placa europeană.</p>' },
      { icon: '♨️', title: 'Mantaua se mișcă', explode: 1, focus: ['mantello-superiore', 'mantello-inferiore', 'convezione'], view: { rx: 0.1, ry: -0.15 }, zoom: 1.2,
        html: '<p>Mantaua este rocă foarte fierbinte care se mișcă foarte încet, ca un aluat des: partea caldă urcă, cea rece coboară. Acești <b>curenți</b> deplasează plăcile cu câțiva centimetri în fiecare an.</p>' },
      { icon: '🧲', title: 'Nucleul și magnetul Pământ', explode: 1, focus: ['nucleo-esterno', 'nucleo-interno', 'campo-magnetico'], view: { rx: 0.15, ry: -0.3 },
        html: '<p>În <b>nucleul extern</b>, fierul lichid se rotește și creează <b>câmpul magnetic</b>: Pământul este ca un magnet mare. Datorită lui funcționează busola și vântul solar nu ne lovește direct.</p>' },
      { icon: '🌬️', title: 'Pătura de aer', explode: 0, 
        html: '<p>În jurul Pământului se află <b>atmosfera</b>: aerul pe care îl respirăm. Păstrează căldura Soarelui (fără ea am avea −18 °C!) și ne protejează. În atmosferă se formează norii și vremea.</p>' }
    ],
    facts: [
      { icon: '🥔', title: 'Nu este o minge perfectă', html: 'Rotindu-se, Pământul se „turtește" puțin la poli: diametrul la ecuator este cu aproximativ 43 km mai lung decât cel dintre poli.' },
      { icon: '🏎️', title: 'Foarte rapizi fără să ne dăm seama', html: 'La ecuator, rotația ne poartă cu aproximativ <b>1670 km/h</b>, iar în jurul Soarelui Pământul aleargă cu 107 000 km/h!' },
      { icon: '🎂', title: 'O planetă străveche', html: 'Pământul are aproximativ <b>4,6 miliarde de ani</b>. Oamenii există de circa 300 000 de ani: dacă istoria Pământului ar fi o zi, am fi apărut în ultimele 6 secunde.' },
      { icon: '🧩', title: 'Puzzle-ul continentelor', html: 'Țărmurile Africii și ale Americii de Sud se potrivesc: odinioară erau unite în supercontinentul <b>Pangeea</b>.' },
      { icon: '🕳️', title: 'Cea mai adâncă gaură', html: 'Cel mai adânc puț săpat vreodată (în Rusia) ajunge la aproximativ 12 km: mai puțin de 0,2 % din drumul spre centrul Pământului.' }
    ],
    quiz: [
      { type: 'order', q: 'Pune în ordine straturile Pământului, de la suprafață spre centru', items: ['Scoarța', 'Mantaua', 'Nucleul extern', 'Nucleul intern'], explain: 'Coajă, pulpă și sâmbure: scoarță, manta, nucleu lichid și nucleu solid.' },
      { type: 'mc', q: 'Din ce este făcut în special nucleul Pământului?', options: ['Apă și gheață', 'Fier și nichel', 'Nisip', 'Aer comprimat'], answer: 1, explain: 'Nucleul este făcut din fier și nichel: lichide în partea exterioară, solide în centru.' },
      { type: 'tf', q: 'Nucleul intern este solid, deși este foarte fierbinte.', answer: true, explain: 'Presiunea enormă nu lasă metalul să se topească.' },
      { type: 'mc', q: 'Ce creează câmpul magnetic al Pământului?', options: ['Vântul', 'Fierul lichid care se mișcă în nucleul extern', 'Luna', 'Oceanele'], answer: 1, explain: 'Mișcarea metalului lichid produce câmpul magnetic.' },
      { type: 'num', q: 'În câte ore face Pământul o rotație completă în jurul lui?', answer: 24, unit: 'ore', explain: 'Aproximativ 24 de ore: este durata unei zile.' },
      { type: 'mc', q: 'De ce există anotimpurile?', options: ['Pentru că Pământul se apropie și se depărtează mult de Soare', 'Pentru că axa Pământului este înclinată', 'Pentru că Soarele se aprinde și se stinge', 'Din cauza norilor'], answer: 1, explain: 'Înclinarea de 23,5° face ca razele să ajungă mai drepte când pe o emisferă, când pe cealaltă.' }
    ]
  });
})();
