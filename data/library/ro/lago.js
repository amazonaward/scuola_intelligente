/* Il lago (di origine glaciale, in una valle tra le montagne), tagliato davanti (piano z = 0) per vedere la conca e l'acqua.
   x = da sinistra a destra, z negativo = verso il fondo della valle, y = alto; il pelo dell'acqua è a y = 0. */
(function () {
  const L = 3.6;                                   // lunghezza della valle (z da -L a 0)
  const LEFT = [[-1.85, 0], [-1.7, -0.4], [-1.4, -0.9], [-0.9, -1.35], [-0.3, -1.45]];
  const RIGHT = [[1.9, 0], [1.5, -0.35], [1.0, -0.9], [0.4, -1.3], [-0.3, -1.45]];
  const TERRAIN = [[-4.5, -2.2], [4.5, -2.2], [4.5, 0.06], [2.4, 0.06]].concat(RIGHT, LEFT.slice(0, -1).reverse(), [[-2.1, 0.6], [-2.6, 1.6], [-3.1, 2.3], [-3.4, 2.45], [-3.8, 2.1], [-4.5, 1.3]]);
  const xAt = (br, y) => { for (let i = 0; i < br.length - 1; i++) { const a = br[i], b = br[i + 1]; if (y <= a[1] && y >= b[1]) return a[0] + (b[0] - a[0]) * (a[1] - y) / ((a[1] - b[1]) || 1); } return br[br.length - 1][0]; };
  /* fascia d'acqua tra due profondità (per gli strati sul taglio) */
  const slab = (y0, y1, inset) => {
    const ys = []; for (let i = 0; i <= 8; i++) ys.push(y0 + (y1 - y0) * i / 8);
    return ys.map((y) => [xAt(RIGHT, y) - inset, y]).concat(ys.slice().reverse().map((y) => [xAt(LEFT, y) + inset, y]));
  };
  const WATER = slab(-0.02, -1.43, 0.03);
  const BOTTOM = RIGHT.concat(LEFT.slice(0, -1).reverse());
  const SED = BOTTOM.map(([x, y]) => [x, y + 0.08]).reverse().concat(BOTTOM.map(([x, y]) => [x, y + 0.01]));
  const prism = (pts, d, z, color, extra) => Object.assign({ t: 'extrude', pts, d, pos: [0, 0, z], color }, extra || {});
  /* pesce: corpo + coda + occhio; nuota in cerchio (spin intorno a y) */
  const fish = (c, r, col, rate, ph, s) => ({ t: 'group', pos: c, anim: { type: 'spin', axis: 'y', rate, phase: ph }, shapes: [ { t: 'group', pos: [r, 0, 0], scale: s, shapes: [
    { t: 'sphere', r: 0.12, n: 10, m: 14, scale: [0.6, 0.75, 1.7], color: col },
    { t: 'extrude', pts: [[0, 0], [0.13, 0.1], [0.13, -0.1]], d: 0.02, rot: [0, 90, 0], pos: [0, 0, 0.19], color: col, anim: { type: 'swing', axis: 'y', amp: 20, rate: 6 } },
    { t: 'sphere', r: 0.018, n: 6, pos: [0.06, 0.03, -0.12], color: '#111827' }, { t: 'sphere', r: 0.018, n: 6, pos: [-0.06, 0.03, -0.12], color: '#111827' } ] } ] });
  const flowDots = (pts, n, rate, col, r) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: r || 0.045, n: 6, m: 8, pos: pts[0], color: col, anim: { type: 'path', pts, wave: 'saw', rate, phase: k / n } }));
  const INFLOW = [[0.35, 2.55, -4.62], [0.3, 1.9, -4.28], [0.15, 1.1, -3.85], [0.05, 0.4, -3.42], [0, 0.02, -3.15]];
  const OUTFLOW = [[2.05, 0.03, -1.8], [2.6, 0.08, -1.6], [3.3, 0.08, -1.9], [3.9, 0.08, -1.7], [4.5, 0.08, -1.8]];
  const reeds = [];
  [[2.0, 0.06, -0.5], [2.15, 0.06, -0.9], [1.95, 0.06, -1.2], [2.25, 0.06, -0.3], [1.8, -0.15, -0.7], [1.75, -0.12, -1.05], [2.1, 0.06, -2.6], [1.9, 0.0, -2.9], [-1.95, 0.15, -2.2], [-1.98, 0.2, -1.5], [-1.9, 0.08, -2.7]].forEach((p, i) => {
    const h = 0.55 + (i % 3) * 0.12;
    reeds.push({ t: 'group', pos: p, anim: { type: 'swing', axis: 'z', amp: 4, rate: 0.8, phase: i * 0.13, pivot: [0, 0, 0] }, shapes: [
      { t: 'cyl', r: 0.012, h, n: 6, pos: [0, h / 2, 0], color: '#65a30d' }, { t: 'cyl', r: 0.03, h: 0.12, n: 8, pos: [0, h - 0.04, 0], color: '#78350f' },
      { t: 'box', s: [0.015, 0.35, 0.05], pos: [0.04, 0.2, 0], rot: [0, 0, -12], color: '#84cc16' } ] });
  });

  LIBRARY({
    lang: 'ro',
    id: 'lago',
    title: 'Lacul',
    intro: 'Un lac este o mare întindere de <b>apă dulce</b> care stă liniștită într-o adâncitură a terenului. Primește apă din râuri, din ploaie și din zăpada topită și o dă mai departe printr-un alt râu și prin evaporare. În Italia, cele mai mari lacuri, precum <b>Garda</b> și <b>Como</b>, s-au născut din ghețari.',
    model: {
      rx: 0.38, ry: -0.5, speed: 0.4, height: 480, bg: 'sky', fit: 1.0,
      parts: [
        { id: 'valle', name: 'Vale și munți', label: 'Munți', color: '#4d7c0f', explode: [0, -0.5, -0.4],
          info: '<p>Lacul se află pe fundul unei <b>văi</b> dintre munți. Adâncitura care ține apa se numește <b>cuvetă</b>: e ca un castron uriaș de piatră.</p>',
          more: '<p>În secțiune se vede că sub iarbă se află <b>rocă</b>: rocile impermeabile nu lasă apa să se scurgă în jos, de aceea lacul nu se golește.</p>',
          shapes: [ prism(TERRAIN, L, -L / 2, '#4d7c0f'),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -0.25], [2.2, -0.25]].concat(RIGHT.map(([x, y]) => [x + 0.15, y - 0.2]), LEFT.slice(0, -1).reverse().map(([x, y]) => [x - 0.15, y - 0.2]), [[-2.2, 0.35], [-2.7, 1.35], [-3.2, 2.05], [-3.45, 2.15], [-3.85, 1.85], [-4.5, 1.1]]), 0.02, 0.012, '#78716c', { decal: 1 }),
            prism([[-4.5, -2.2], [4.5, -2.2], [4.5, -1.75], [-4.5, -1.75]], 0.02, 0.016, '#57534e', { decal: 2 }) ] },
        { id: 'vetta', name: 'Munte înzăpezit', label: 'Munte înzăpezit', color: '#a8a29e', explode: [0, 0.6, -1.2],
          info: '<p>La capătul văii se află un munte cu vârful acoperit de zăpadă. Acum mii de ani, în timpul <b>glaciațiunilor</b>, un ghețar uriaș cobora de-a lungul văii și săpa roca precum un buldozer.</p>',
          more: '<p>Când clima s-a încălzit (acum aproximativ 15 000 de ani), ghețarul s-a retras: apa s-a adunat în adâncitura săpată și închisă în aval de resturile de roci (<b>morenele</b>). Așa s-au născut lacurile Maggiore, Como, Iseo și Garda.</p>',
          shapes: [ { t: 'lathe', n: 30, pos: [0, 0, -5.6], scale: [1.4, 1, 0.75], pts: [[0, -2.2], [3.2, -2.2], [3.0, 0.1], [2.2, 1.1], [1.3, 2.3], [0.6, 3.2], [0.15, 3.6], [0, 3.65]] },
            { t: 'lathe', n: 30, pos: [0, 0.02, -5.6], scale: [1.42, 1, 0.77], pts: [[1.05, 2.6], [0.6, 3.2], [0.15, 3.6], [0, 3.66], [0, 2.6]], color: '#f8fafc' } ] },
        { id: 'immissario', name: 'Afluent (râul care intră)', label: 'Afluent', color: '#38bdf8', explode: [0, 0.3, -1.0],
          info: '<p>Râul care <b>aduce apă</b> în lac se numește <b>afluent</b>. Se naște din zăpada și ghețarul care se topesc și coboară repede pe munte.</p>',
          shapes: [ { t: 'pipe', r: 0.07, n: 10, curve: true, pts: INFLOW, color: '#38bdf8' } ].concat(flowDots(INFLOW, 8, 0.8, '#e0f2fe')) },
        { id: 'acqua', name: 'Apa lacului', label: 'Apă', color: '#38bdf8', alpha: 0.42, explode: [0, 0.6, 0.6],
          info: '<p>Apa lacului este <b>dulce</b>: conține foarte puțină sare, spre deosebire de mare. Apa marilor lacuri este atât de curată încât adesea devine apă de băut.</p>',
          more: '<p>Lacul Garda conține aproximativ <b>50 de miliarde de metri cubi</b> de apă și în unele locuri are 346 m adâncime: fundul lui e sub nivelul mării! Un lac mare „îmblânzește” clima: iarna dă înapoi căldura adunată vara, de aceea pe malurile lui cresc lămâi și măslini.</p>',
          shapes: [ prism(WATER, L - 0.05, -L / 2, '#38bdf8'),
            { t: 'box', s: [3.7, 0.01, L - 0.05], pos: [0.02, -0.005, -L / 2], color: '#7dd3fc', alpha: 0.35, anim: { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.5 } } ] },
        { id: 'strati', name: 'Straturi de apă (caldă și rece)', label: 'Straturi de apă', color: '#0369a1', explode: [0, 0.2, 1.0],
          info: '<p>Vara lacul este așezat în <b>straturi</b>: sus apa este călduță și plină de lumină, jos este <b>rece și întunecată</b> (cam 4–6 °C), chiar și când afară e cald.</p>',
          more: '<p>Stratul cald de sus se numește <b>epilimnion</b>, cel rece de la fund <b>hipolimnion</b>; la mijloc se află <b>termoclina</b>, unde temperatura scade brusc. Apa este cea mai grea la 4 °C: de aceea iarna gheața plutește, iar dedesubt peștii supraviețuiesc.</p>',
          shapes: [ prism(slab(-0.03, -0.42, 0.05), 0.02, 0.02, '#7dd3fc', { decal: 1 }), prism(slab(-0.42, -0.62, 0.05), 0.02, 0.02, '#38bdf8', { decal: 1 }), prism(slab(-0.62, -1.36, 0.05), 0.02, 0.02, '#1e40af', { decal: 1 }) ] },
        { id: 'sedimenti', name: 'Fundul lacului și sedimentele', label: 'Sedimente', color: '#78350f', explode: [0, -0.3, 0.6],
          info: '<p>Pe fund se depune încetul cu încetul <b>mâlul</b>: nisip și pământ aduse de râuri, frunze, resturi de plante și de animale. Strat după strat, lacul se umple.</p>',
          more: '<p>Studiind straturile de mâl (ca pe inelele copacilor), oamenii de știință reconstituie clima de acum mii de ani. Peste foarte mult timp, un lac poate deveni o <b>mlaștină</b> și apoi o pajiște.</p>',
          shapes: [ prism(SED, L - 0.1, -L / 2, '#92400e') ] },
        { id: 'emissario', name: 'Emisar (râul care iese)', label: 'Emisar', color: '#0ea5e9', explode: [0.8, 0, 0],
          info: '<p>Râul care <b>iese</b> din lac este <b>emisarul</b>. De exemplu, râul Ticino iese din lacul Maggiore, iar Mincio din lacul Garda.</p>',
          shapes: [ { t: 'pipe', r: 0.08, n: 10, curve: true, pts: OUTFLOW, color: '#0ea5e9' } ].concat(flowDots(OUTFLOW, 7, 0.6, '#e0f2fe')) },
        { id: 'canneto', name: 'Stufăriș', color: '#65a30d', explode: [0.4, 0.3, 0.3],
          info: '<p>De-a lungul malurilor cresc <b>stuful</b> și papura. Stufărișul este „creșa” lacului: acolo își fac cuibul păsările și își depun icrele peștii. Rădăcinile filtrează și curăță apa.</p>',
          shapes: reeds },
        { id: 'ninfee', name: 'Nuferi', color: '#16a34a', explode: [0, 0.5, 0.2],
          info: '<p><b>Nuferii</b> au rădăcinile în mâl și frunzele rotunde care plutesc. Fac umbră apei și oferă adăpost animalelor.</p>',
          shapes: [[1.35, -0.6], [1.15, -1.0], [1.5, -1.3], [1.05, -0.35], [-1.55, -2.0], [-1.45, -2.5]].map(([x, z], i) => ({ t: 'group', pos: [x, 0.012, z], anim: { type: 'swing', axis: 'y', amp: 8, rate: 0.3, phase: i * 0.2 }, shapes: [
            { t: 'cyl', r: 0.13, h: 0.015, n: 16, color: '#16a34a' }, { t: 'box', s: [0.12, 0.02, 0.025], pos: [0.07, 0.003, 0], color: '#38bdf8' }
          ].concat(i % 2 ? [] : [ { t: 'cone', r: 0.06, h: 0.07, n: 8, pos: [0.02, 0.04, 0.03], color: '#f9a8d4' }, { t: 'sphere', r: 0.02, n: 6, pos: [0.02, 0.05, 0.03], color: '#fde047' } ]) })) },
        { id: 'pesci', name: 'Pești', color: '#a3a3a3', explode: [0, 0.2, 0.8],
          info: '<p>În lacuri trăiesc păstrăvi, bibani, știuci, crapi, țipari… Unii stau aproape de mal, printre plante, alții înoată în larg sau în apa rece și adâncă.</p>',
          more: '<p>Peștii respiră cu branhiile <b>oxigenul dizolvat</b> în apă. Apa rece conține mai mult oxigen: de aceea păstrăvilor le plac lacurile de munte.</p>',
          shapes: [ fish([0.1, -0.35, -1.2], 0.5, '#9ca3af', 0.35, 0, 1), fish([-0.5, -0.9, -2.3], 0.4, '#a16207', -0.3, 0.4, 1.2), fish([0.4, -0.7, -0.5], 0.3, '#64748b', 0.45, 0.2, 0.9) ] },
        { id: 'plancton', name: 'Plancton și alge', label: 'Plancton', color: '#86efac', explode: [0, 0.3, 0.9], chip: true,
          info: '<p>În apă plutesc ființe foarte mici, <b>planctonul</b>: alge microscopice și animăluțe minuscule. Ele sunt prima verigă a <b>lanțului trofic</b> al lacului.</p>',
          shapes: Array.from({ length: 22 }, (_, i) => ({ t: 'sphere', r: 0.025, n: 4, m: 6, pos: [-1.3 + (i * 0.37) % 2.6, -0.05 - (i * 0.13) % 0.35, -0.2 - (i * 0.71) % 3.2], color: i % 3 ? '#86efac' : '#fef08a',
            anim: { type: 'move', dir: [0.3, 1, 0.2], amp: 0.06, rate: 0.7, phase: i * 0.09 } })) },
        { id: 'anatra', name: 'Rață mare', label: 'Rață', color: '#78350f', pos: [0.6, 0.05, -2.2], explode: [0, 0.5, 0],
          anim: [ { type: 'move', dir: [1, 0, 0.3], amp: 0.5, rate: 0.12 }, { type: 'move', dir: [0, 1, 0], amp: 0.015, rate: 1.2 } ],
          info: '<p><b>Rața mare</b> este cea mai obișnuită rață de pe lacuri: masculul are capul verde strălucitor. Penele sunt impermeabile datorită unui ulei pe care rața îl întinde cu ciocul.</p>',
          shapes: [ { t: 'sphere', r: 0.14, n: 10, m: 14, scale: [1.6, 0.8, 1], color: '#a16207' }, { t: 'sphere', r: 0.08, n: 10, m: 12, pos: [0.2, 0.15, 0], color: '#15803d' },
            { t: 'cone', r: 0.03, h: 0.1, n: 8, rot: [0, 0, -90], pos: [0.3, 0.14, 0], color: '#facc15' }, { t: 'box', s: [0.14, 0.06, 0.02], pos: [-0.05, 0.05, 0.13], color: '#1d4ed8', decal: 1 },
            { t: 'cone', r: 0.06, h: 0.12, n: 8, rot: [0, 0, 70], pos: [-0.24, 0.06, 0], color: '#f8fafc' } ] },
        { id: 'ciclo', name: 'Evaporare, nori și ploaie', label: 'Circuitul apei', color: '#f8fafc', explode: [0, 1.2, 0],
          info: '<p>Soarele încălzește lacul: puțină apă se <b>evaporă</b> și urcă sub formă de vapori invizibili. Sus se răcește și formează <b>norii</b>; apoi coboară ca <b>ploaie</b> sau zăpadă pe munți și, prin râuri, ajunge din nou în lac.</p>',
          more: '<p>Este <b>circuitul apei în natură</b>: apa planetei este aceeași de miliarde de ani și continuă să circule între mări, lacuri, aer, ghețari și subsol.</p>',
          shapes: [ [-2.2, 3.3, -2.6, 0.55], [-1.5, 3.45, -2.4, 0.65], [-0.8, 3.3, -2.7, 0.5], [-1.6, 3.2, -3.1, 0.5] ].map(([x, y, z, r]) => ({ t: 'sphere', r, n: 10, m: 16, pos: [x, y, z], scale: [1.3, 0.75, 1], color: '#f8fafc', anim: { type: 'move', dir: [1, 0, 0], amp: 0.12, rate: 0.2 } }))
            .concat(Array.from({ length: 10 }, (_, k) => { const x = -1.0 + (k * 0.53) % 2.4, z = -0.6 - (k * 0.77) % 2.6; return { t: 'sphere', r: 0.04, n: 6, m: 8, pos: [x, 0.05, z], color: '#e0f2fe',
              anim: [ { type: 'path', pts: [[x, 0.05, z], [x - 0.4, 1.5, z - 0.6], [-1.5, 2.9, -2.6]], wave: 'saw', rate: 0.3, phase: k / 10 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.3, phase: k / 10 } ] }; }))
            .concat(Array.from({ length: 12 }, (_, k) => { const x = -3.4 + (k * 0.41) % 1.6, z = -1.6 - (k * 0.63) % 2.0; return { t: 'cyl', r: 0.012, h: 0.14, n: 4, pos: [x, 2.9, z], color: '#60a5fa',
              anim: { type: 'path', pts: [[x, 2.9, z], [x, 2.2, z]], wave: 'saw', rate: 1.2, phase: k / 12 } }; })) }
      ]
    },
    steps: [
      { icon: '🏞️', title: 'O adâncitură plină cu apă', explode: 0,
        html: '<p>Un lac se formează acolo unde apa se adună într-o <b>adâncitură</b> a terenului, numită <b>cuvetă</b>, și nu poate scăpa pentru că fundul este din rocă impermeabilă.</p><p class="tip">✂️ Am tăiat valea prin față: așa vezi cât de adânc este lacul.</p>' },
      { icon: '🧊', title: 'Născut dintr-un ghețar', focus: ['vetta', 'valle', 'acqua'], view: { rx: 0.3, ry: -0.2 },
        html: '<p>Multe lacuri din Italia sunt de <b>origine glaciară</b>: în timpul glaciațiunilor, ghețari uriași coborau de-a lungul văilor și le săpau. Când gheața s-a topit, adâncitura s-a umplut cu apă.</p><p class="tip">🗺️ Există și lacuri vulcanice (în cratere, ca Bolsena), lacuri formate de alunecări de teren și lacuri artificiale, făcute de baraje.</p>' },
      { icon: '➡️', title: 'Apă care intră, apă care iese', focus: ['immissario', 'emissario', 'acqua', 'vetta'], view: { rx: 0.6, ry: -0.3 },
        html: '<p><b>Afluentul</b> aduce în lac apa din zăpadă și din ghețar. <b>Emisarul</b> o duce mai departe. Dacă intră și iese aceeași cantitate de apă, nivelul lacului rămâne (aproape) la fel.</p>' },
      { icon: '🌡️', title: 'Sus călduț, jos rece', focus: ['strati', 'acqua', 'sedimenti'], view: { rx: 0.08, ry: -0.05 }, zoom: 1.4,
        html: '<p>Vara, Soarele încălzește doar partea de sus a lacului. Dedesubt, apa rămâne <b>rece și întunecată</b>, pe la 4–6 °C. Pe fund se depune încetul cu încetul mâlul: <b>sedimentele</b>.</p>' },
      { icon: '🐟', title: 'Cine trăiește în lac', focus: ['pesci', 'canneto', 'ninfee', 'plancton', 'anatra', 'acqua'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.3,
        html: '<p>Lacul este un <b>ecosistem</b>: <b>planctonul</b> hrănește peștii mici, care hrănesc peștii mai mari și păsările. În <b>stufărișul</b> de pe maluri se nasc pești și rațe; <b>nuferii</b> plutesc cu frunzele pe apă.</p>' },
      { icon: '☁️', title: 'Circuitul apei', focus: ['ciclo', 'acqua', 'vetta', 'immissario'], view: { rx: 0.25, ry: -0.6 },
        html: '<p>Soarele face să se <b>evapore</b> puțină apă din lac. Vaporii urcă, formează <b>norii</b> și cad înapoi ca <b>ploaie</b> sau zăpadă pe munți. Râurile o aduc înapoi în lac: un drum fără sfârșit!</p>' },
      { icon: '♻️', title: 'Să ocrotim lacul', explode: 0,
        html: '<p>Un lac se poluează ușor: apa lui se reînnoiește încet (în Garda durează aproape <b>30 de ani</b>). Apele murdare, îngrășămintele și plasticul rămân acolo mult timp. De aceea e nevoie de stații de epurare, maluri naturale și multă grijă din partea tuturor.</p>' }
    ],
    facts: [
      { icon: '🥇', title: 'Cel mai mare din Italia', html: '<b>Lacul Garda</b> este cel mai mare din Italia (370 km²). Cel mai adânc este <b>lacul Como</b>, care ajunge la aproximativ 410 metri.' },
      { icon: '🌍', title: 'Cel mai adânc lac din lume', html: 'Lacul <b>Baikal</b>, din Siberia, are peste 1600 de metri adâncime și conține singur aproximativ o cincime din apa dulce a lacurilor planetei.' },
      { icon: '🧂', title: 'Lacuri sărate', html: 'Unele lacuri nu au emisar: apa se evaporă și sarea se adună. În <b>Marea Moartă</b> apa este atât de sărată încât plutești fără niciun efort!' },
      { icon: '🌋', title: 'Lacuri în vulcani', html: 'Lacurile <b>Bolsena</b>, <b>Bracciano</b> și Albano, din regiunea Lazio, umplu cratere vulcanice străvechi: de aceea sunt aproape rotunde.' },
      { icon: '🧊', title: 'Gheața plutește', html: 'Când un lac îngheață, gheața rămâne la suprafață și îl acoperă ca o pătură: dedesubt, apa de 4 °C nu îngheață, iar peștii trec astfel iarna.' }
    ],
    quiz: [
      { type: 'mc', q: 'Cum se numește râul care aduce apă într-un lac?', options: ['Emisar', 'Afluent', 'Afluent al mării', 'Pârâu sărat'], answer: 1, explain: 'Afluentul intră în lac, emisarul iese.' },
      { type: 'mc', q: 'Cum s-au născut marile lacuri din nordul Italiei (Garda, Como, Maggiore)?', options: ['Din vulcani', 'Din ghețari străvechi care au săpat văile', 'Din meteoriți', 'Din baraje construite de romani'], answer: 1, explain: 'Sunt lacuri de origine glaciară: ghețarii au săpat adânciturile.' },
      { type: 'tf', q: 'Apa lacurilor este de obicei dulce, adică are foarte puțină sare.', answer: true, explain: 'Lacurile cu emisar își reînnoiesc apa și rămân dulci.' },
      { type: 'mc', q: 'Vara, unde este cea mai rece apa unui lac adânc?', options: ['La suprafață', 'Aproape de mal', 'La fund', 'Este la fel peste tot'], answer: 2, explain: 'Soarele încălzește doar stratul de sus: la fund apa rămâne la aproximativ 4–6 °C.' },
      { type: 'order', q: 'Pune în ordine drumul apei', items: ['Apa lacului se evaporă', 'Se formează norii', 'Plouă sau ninge pe munți', 'Afluentul aduce apa înapoi în lac'], explain: 'Este circuitul apei în natură.' },
      { type: 'text', q: 'Care este cel mai mare lac din Italia?', answer: ['garda', 'lacul garda', 'lacul de garda'], explain: 'Lacul Garda, între Lombardia, Veneto și Trentino.' }
    ]
  });
})();
