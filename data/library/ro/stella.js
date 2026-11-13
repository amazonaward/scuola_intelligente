/* La stella: come funziona (fusione, equilibrio tra gravità e pressione) e come vive (ciclo di vita).
   Al centro una stella "come il Sole" vista in trasparenza; intorno, su un anello, le fasi della vita delle stelle. */
(function () {
  const D = Math.PI / 180;
  /* freccia lungo +y (base nell'origine): asta + punta */
  const arrow = (len, col, flip) => ({ t: 'group', rot: flip ? [180, 0, 0] : [0, 0, 0], pos: flip ? [0, len, 0] : [0, 0, 0], shapes: [
    { t: 'cyl', r: 0.035, h: len * 0.65, n: 10, pos: [0, len * 0.325, 0], color: col },
    { t: 'cone', r: 0.09, h: len * 0.35, n: 14, pos: [0, len * 0.82, 0], color: col } ] });
  /* frecce radiali: dirs come angoli [giro intorno a z, giro intorno a x] */
  const DIRS = [0, 45, 90, 135, 180, 225, 270, 315].map((a) => [0, a]).concat([[90, 0], [-90, 0], [90, 180], [-90, 180]]);
  const radial = (r0, len, col, inward, shift) => DIRS.map(([ax, az], i) => {
    const rz = az + (shift || 0), rx = ax;
    const dir = [-Math.sin(rz * D) * Math.cos(rx * D), Math.cos(rz * D) * Math.cos(rx * D), Math.sin(rx * D)];
    return { t: 'group', rot: [rx, 0, rz], shapes: [ { t: 'group', pos: [0, r0, 0], anim: { type: 'move', dir: [0, inward ? -1 : 1, 0], amp: 0.1, rate: 1, phase: i * 0.05 }, shapes: [ arrow(len, col, inward) ] } ], _d: dir };
  });
  /* protoni che si scontrano al centro (fusione) */
  const fusion = [];
  [[0.42, 0.1, 0.05], [-0.4, -0.12, 0.1], [0.08, 0.42, -0.1], [-0.1, -0.4, -0.08], [0.15, 0.05, 0.42], [-0.12, 0.06, -0.42]].forEach((p, i) => {
    fusion.push({ t: 'sphere', r: 0.07, n: 8, m: 10, pos: p, color: i % 2 ? '#ef4444' : '#f87171',
      anim: [ { type: 'path', pts: [p, [p[0] * 0.12, p[1] * 0.12, p[2] * 0.12]], wave: 'saw', rate: 1, phase: (i >> 1) * 0.33 }, { type: 'blink', fade: true, wave: 'window', from: 0.05, to: 0.95, ramp: 0.08, rate: 1, phase: (i >> 1) * 0.33 } ] });
  });
  for (let k = 0; k < 3; k++) fusion.push({ t: 'sphere', r: 0.16, n: 10, m: 14, color: '#ffffff', anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.9, to: 1.0, ramp: 0.3, phase: k * 0.33 }, { type: 'scale', from: 0.6, to: 1.6, wave: 'window', win: [0.9, 1.0], phase: k * 0.33 } ] });
  /* fotoni che escono con un cammino a zig-zag */
  const photons = [];
  for (let i = 0; i < 9; i++) {
    const a = i * 40 * D, b = (i % 3 - 1) * 30 * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)], q = [-d[2], 0.4, d[0]];
    const pts = [0.3, 0.55, 0.8, 1.05, 1.25, 2.4].map((r, k) => [d[0] * r + q[0] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[1] * r + q[1] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0), d[2] * r + q[2] * (k % 2 ? 0.12 : -0.08) * (k < 5 ? 1 : 0)]);
    photons.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: pts[0], color: '#fef08a', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.5, phase: i / 9 }, { type: 'blink', fade: true, wave: 'window', from: 0.02, to: 0.98, ramp: 0.05, rate: 0.5, phase: i / 9 } ] });
  }
  const at = (p, shapes) => ({ t: 'group', pos: p, shapes });
  const P = { nebulosa: [-3.3, 0.3, -1.3], proto: [-1.5, 0.2, -3.2], gigante: [1.6, 0.5, -3.3], planetaria: [3.5, 0.2, -1.0], supernova: [3.2, 0.2, 1.7], neutroni: [1.2, 0, 3.4], buco: [-1.7, 0, 3.1] };


  LIBRARY({
    lang: 'ro',
    id: 'stella',
    title: 'Steaua',
    intro: 'O stea este o minge uriașă de gaz fierbinte care <b>strălucește cu lumină proprie</b>. Înăuntru, în nucleu, hidrogenul se transformă în heliu și eliberează o energie enormă. Și stelele se nasc, trăiesc și mor!',
    model: {
      rx: 0.55, ry: -0.35, speed: 0.35, height: 480, bg: 'space', fit: 0.98,
      parts: [
        { id: 'involucro', name: 'Stea (ca Soarele)', label: 'Stea', color: '#fcd34d', alpha: 0.4, explode: [0, 0, 0],
          info: '<p>O stea adultă, ca Soarele nostru. Este făcută mai ales din <b>hidrogen</b> și <b>heliu</b>, atât de fierbinți încât formează un gaz special numit <b>plasmă</b>. La suprafață sunt aproximativ 5500 °C.</p>',
          more: '<p>Stelele au culori diferite în funcție de temperatură: cele mai reci sunt <b>roșii</b> (3000 °C), cele ca Soarele sunt <b>galbene</b>, cele mai fierbinți sunt <b>albastre</b> (peste 20 000 °C). Culoarea ne spune temperatura chiar și de la distanțe uriașe.</p>',
          shapes: [ { t: 'sphere', r: 1.25, n: 22, m: 36 }, { t: 'sphere', r: 1.32, n: 18, m: 30, color: '#fde68a', alpha: 0.12, anim: { type: 'scale', from: 1, to: 1.04, rate: 0.7 } } ] },
        { id: 'nucleo', name: 'Nucleul (centrala)', label: 'Nucleu', color: '#fff7cc', alpha: 0.55, explode: [0, 0, 0],
          info: '<p>Centrul stelei: aici sunt aproximativ <b>15 milioane de grade</b> și o presiune enormă. Este „centrala electrică" a stelei.</p>',
          shapes: [ { t: 'sphere', r: 0.5, n: 16, m: 24 } ] },
        { id: 'fusione', name: 'Fuziune nucleară', label: 'Fuziune', color: '#ef4444', explode: [0, 0, 0],
          info: '<p>În nucleu, nucleele de <b>hidrogen</b> aleargă foarte repede și se ciocnesc: se unesc și devin <b>heliu</b>. La fiecare fuziune, puțină materie se transformă în multă energie: lumină și căldură.</p>',
          more: '<p>Sunt necesare 4 nuclee de hidrogen (protoni) pentru a face un nucleu de heliu, care cântărește puțin mai puțin decât cei 4 protoni: masa lipsă devine energie după formula lui Einstein <b>E = mc²</b>. Soarele „arde" astfel 600 de milioane de tone de hidrogen pe secundă.</p>',
          shapes: fusion },
        { id: 'luce', name: 'Lumina care iese', label: 'Lumină', color: '#fef08a', explode: [0, 0, 0], chip: true,
          info: '<p>Energia produsă în nucleu călătorește spre exterior, ricoșând între particule, și în cele din urmă iese de la suprafață sub formă de <b>lumină</b> și căldură.</p>',
          more: '<p>În Soare, un „pachet" de lumină (foton) are nevoie chiar de <b>100 000 de ani</b> ca să iasă din nucleu, pentru că este absorbit și emis din nou de miliarde de ori. Apoi, de la suprafață până la Pământ, îi trebuie doar 8 minute!</p>',
          shapes: photons },
        { id: 'gravita', name: 'Gravitația (împinge spre interior)', label: 'Gravitație', color: '#60a5fa', explode: [0, 0, 0],
          info: '<p>Toată materia stelei este atrasă spre centru de <b>gravitație</b>: dacă ar fi singură, steaua s-ar strivi de la sine.</p>',
          shapes: radial(1.45, 0.55, '#60a5fa', true, 22.5).map((g) => (delete g._d, g)) },
        { id: 'pressione', name: 'Presiunea (împinge spre exterior)', label: 'Presiune', color: '#fb923c', explode: [0, 0, 0],
          info: '<p>Căldura nucleului face gazul să împingă <b>spre exterior</b>, ca aerul cald care umflă un balon. Gravitația și presiunea se echilibrează: steaua rămâne în <b>echilibru</b> miliarde de ani.</p>',
          shapes: radial(0.62, 0.5, '#fb923c', false, 0).map((g) => (delete g._d, g)) },
        { id: 'percorso', name: 'Ciclul de viață', label: 'Ciclul de viață', color: '#c4b5fd', explode: [0, 0, 0], noLabel: true,
          info: '<p>Stelele se schimbă pe parcursul vieții: se nasc într-un nor, strălucesc multă vreme și la sfârșit se transformă. <b>Cum</b> se sfârșesc depinde de <b>cât de mari sunt</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], color: '#c4b5fd', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.gigante, [3.1, 0.4, 0.2], P.supernova, P.neutroni], color: '#fca5a5', alpha: 0.5 },
            { t: 'pipe', r: 0.02, n: 6, curve: true, pts: [P.supernova, [0.9, 0.1, 2.9], P.buco], color: '#fca5a5', alpha: 0.5 } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.06, n: 6, m: 8, pos: P.nebulosa, color: '#ede9fe',
              anim: { type: 'path', pts: [P.nebulosa, P.proto, [0.1, 0.3, -2.1], P.gigante, P.planetaria], wave: 'saw', rate: 0.12, phase: k / 6 } }))) },
        { id: 'nebulosa', name: 'Nebuloasa (unde se nasc stelele)', label: 'Nebuloasă', color: '#c084fc', alpha: 0.32, explode: [-0.6, 0.3, -0.3],
          info: '<p>Stelele se nasc în <b>nori</b> uriași de gaz și praf, numiți nebuloase. Unde norul este mai des, gravitația îl face să se adune în bulgări din ce în ce mai denși.</p>',
          shapes: [ at(P.nebulosa, [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.15 }, shapes: [
            { t: 'sphere', r: 0.75, n: 12, m: 18, scale: [1.3, 0.8, 1] }, { t: 'sphere', r: 0.55, n: 12, m: 18, pos: [0.6, 0.25, 0.3], color: '#f472b6' },
            { t: 'sphere', r: 0.5, n: 12, m: 18, pos: [-0.55, -0.15, -0.3], color: '#818cf8' }, { t: 'sphere', r: 0.4, n: 10, m: 16, pos: [0.1, 0.45, -0.4], color: '#e879f9' },
            { t: 'sphere', r: 0.07, n: 6, pos: [0.2, 0, 0.2], color: '#ffffff', alpha: 1 }, { t: 'sphere', r: 0.05, n: 6, pos: [-0.4, 0.2, 0.1], color: '#ffffff', alpha: 1 } ] } ]) ] },
        { id: 'protostella', name: 'Protostea', color: '#fb923c', explode: [-0.3, 0.3, -0.6],
          info: '<p>O minge de gaz care se strânge și se încălzește. În jur se rotește un <b>disc</b> de materie (unde se pot naște planetele!), iar de la poli ies două jeturi de gaz.</p>',
          more: '<p>Când în centru se ajunge la aproximativ 10 milioane de grade, se aprinde fuziunea hidrogenului: protostea devine o stea adevărată. Durează câteva milioane de ani.</p>',
          shapes: [ at(P.proto, [ { t: 'sphere', r: 0.3, n: 12, m: 18 },
            { t: 'group', anim: { type: 'spin', axis: 'y', rate: 0.6 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 30, m: 8, scale: [1, 0.25, 1], color: '#fdba74', alpha: 0.45 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.75, 0, 0], color: '#a16207' } ] },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, 0.6, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } },
            { t: 'cone', r: 0.1, h: 0.7, n: 12, pos: [0, -0.6, 0], rot: [180, 0, 0], color: '#bae6fd', alpha: 0.5, anim: { type: 'blink', fade: true, min: 0.3, rate: 2 } } ]) ] },
        { id: 'gigante-rossa', name: 'Gigantă roșie', label: 'Gigantă roșie', color: '#dc2626', alpha: 0.8, explode: [0.3, 0.4, -0.6],
          info: '<p>Când hidrogenul din nucleu se termină, steaua se <b>umflă</b> enorm, iar suprafața se răcește: devine o gigantă roșie. Peste 5 miliarde de ani se va întâmpla și cu Soarele.</p>',
          more: '<p>Soarele va deveni atât de mare încât va înghiți Mercur și Venus. Stelele mult mai mari decât Soarele devin <b>supergigante</b> roșii, cum este Betelgeuse din constelația Orion.</p>',
          shapes: [ at(P.gigante, [ { t: 'sphere', r: 0.95, n: 18, m: 28, anim: { type: 'scale', from: 0.94, to: 1.05, rate: 0.5 } }, { t: 'sphere', r: 1.05, n: 14, m: 22, color: '#f87171', alpha: 0.15 } ]) ] },
        { id: 'nana-bianca', name: 'Nebuloasă planetară și pitică albă', label: 'Pitică albă', color: '#e0f2fe', explode: [0.6, 0.3, -0.2],
          info: '<p>Stelele ca Soarele, la sfârșit, își suflă departe straturile exterioare într-un inel de gaz foarte frumos (<b>nebuloasă planetară</b>). În centru rămâne nucleul: o <b>pitică albă</b>, mică cât Pământul, dar foarte fierbinte.</p>',
          more: '<p>O linguriță de pitică albă ar cântări <b>câteva tone</b>! Fără fuziune, se răcește încet, de-a lungul a miliarde de ani.</p>',
          shapes: [ at(P.planetaria, [ { t: 'sphere', r: 0.12, n: 10, m: 14, color: '#ffffff' },
            { t: 'group', rot: [70, 0, 20], shapes: [ { t: 'torus', R: 0.6, r: 0.2, n: 32, m: 10, color: '#22d3ee', alpha: 0.45, anim: { type: 'scale', from: 0.9, to: 1.1, rate: 0.4 } }, { t: 'torus', R: 0.6, r: 0.08, n: 32, m: 8, color: '#f472b6', alpha: 0.5 } ] } ]) ] },
        { id: 'supernova', name: 'Supernovă', color: '#fde047', explode: [0.6, 0.3, 0.4],
          info: '<p>Stelele <b>foarte mari</b> (de cel puțin 8 ori cât Soarele) se sfârșesc cu o explozie uriașă: o supernovă. Câteva săptămâni strălucește mai tare decât miliarde de stele la un loc!</p>',
          more: '<p>În supernove se formează multe elemente grele, cum este <b>aurul</b>, care sunt împrăștiate în spațiu. Fierul din sângele tău și calciul din oasele tale au fost produse în stele străvechi: suntem făcuți din <b>praf de stele</b>!</p>',
          shapes: [ at(P.supernova, [ { t: 'sphere', r: 0.18, n: 10, m: 14, color: '#ffffff' },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fb923c', alpha: 0.5, anim: [ { type: 'scale', from: 0.3, to: 1.6, wave: 'saw', rate: 0.6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6 } ] },
            { t: 'sphere', r: 0.5, n: 14, m: 20, color: '#fde047', alpha: 0.6, anim: [ { type: 'scale', from: 0.2, to: 1.1, wave: 'saw', rate: 0.6, phase: 0.5 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: 0.5 } ] } ]) ] },
        { id: 'stella-neutroni', name: 'Stea neutronică (pulsar)', label: 'Pulsar', color: '#a5f3fc', explode: [0.3, 0.3, 0.6],
          info: '<p>După supernovă poate rămâne o <b>stea neutronică</b>: lată de doar 20 km, cât un oraș, dar mai grea decât Soarele. Unele se rotesc foarte repede și aruncă două fascicule de lumină, ca un far: sunt <b>pulsarii</b>.</p>',
          shapes: [ at(P.neutroni, [ { t: 'group', rot: [0, 0, 25], shapes: [ { t: 'group', anim: { type: 'spin', axis: 'y', rate: 3 }, shapes: [
            { t: 'sphere', r: 0.16, n: 10, m: 14, color: '#e0f2fe' },
            { t: 'group', rot: [0, 0, 20], shapes: [ { t: 'cone', r: 0.16, h: 1.0, n: 14, rot: [180, 0, 0], pos: [0, 0.6, 0], color: '#67e8f9', alpha: 0.4 }, { t: 'cone', r: 0.16, h: 1.0, n: 14, pos: [0, -0.6, 0], color: '#67e8f9', alpha: 0.4 } ] } ] },
            { t: 'torus', R: 0.35, r: 0.012, n: 24, m: 4, color: '#a5f3fc', alpha: 0.5 } ] } ]) ] },
        { id: 'buco-nero', name: 'Gaură neagră', label: 'Gaură neagră', color: '#020617', explode: [-0.3, 0.3, 0.6],
          info: '<p>Dacă steaua a fost <b>uriașă</b>, nucleul ei se strivește fără oprire și devine o gaură neagră: gravitația este atât de puternică încât <b>nici lumina</b> nu poate scăpa.</p>',
          more: '<p>Gaura neagră în sine este invizibilă, dar gazul care se rotește în jurul ei, înainte de a cădea înăuntru, se încălzește și strălucește: este <b>discul de acreție</b>. În 2019 s-a făcut prima „fotografie" a unei găuri negre.</p>',
          shapes: [ at(P.buco, [ { t: 'sphere', r: 0.32, n: 14, m: 20 },
            { t: 'group', rot: [12, 0, 0], anim: { type: 'spin', axis: 'y', rate: 0.8 }, shapes: [ { t: 'torus', R: 0.7, r: 0.22, n: 36, m: 8, scale: [1, 0.18, 1], color: '#f97316', alpha: 0.85 },
              { t: 'torus', R: 0.5, r: 0.08, n: 36, m: 6, scale: [1, 0.3, 1], color: '#fde68a', alpha: 0.9 }, { t: 'sphere', r: 0.05, n: 6, pos: [0.9, 0, 0], color: '#fed7aa' } ] },
            { t: 'torus', R: 0.38, r: 0.02, n: 30, m: 6, rot: [90, 0, 0], color: '#fbbf24', alpha: 0.8 } ]) ] }
      ]
    },
    steps: [
      { icon: '⭐', title: 'Ce este o stea', focus: ['involucro', 'nucleo', 'luce', 'fusione'], view: { rx: 0.3, ry: -0.35 }, zoom: 1.7,
        html: '<p>O stea este o minge uriașă de <b>gaz fierbinte</b> care produce singură lumină și căldură. Soarele este o stea: celelalte ni se par doar niște puncte pentru că sunt <b>foarte departe</b>.</p><p class="tip">🌟 Planetele, în schimb, nu strălucesc cu lumină proprie: reflectă lumina Soarelui, ca Luna.</p>' },
      { icon: '⚛️', title: 'Fuziunea din nucleu', focus: ['nucleo', 'fusione'], view: { rx: 0.25, ry: -0.3 }, zoom: 2.4,
        html: '<p>În nucleu sunt milioane de grade. Nucleele de <b>hidrogen</b> se ciocnesc atât de tare încât se <b>unesc</b> și devin <b>heliu</b>: de fiecare dată se eliberează un fulger de energie.</p><p class="tip">💡 Este aceeași energie ca a „bombelor cu hidrogen", dar în stea este controlată de propria ei gravitație.</p>' },
      { icon: '⚖️', title: 'Un echilibru perfect', focus: ['gravita', 'pressione', 'involucro'], view: { rx: 0.15, ry: -0.3 }, zoom: 1.7,
        html: '<p><b>Gravitația</b> (săgețile albastre) ar vrea să strivească steaua; <b>presiunea</b> gazului fierbinte (săgețile portocalii) împinge spre exterior. Cât timp există fuziune, cele două forțe se echilibrează și steaua rămâne stabilă <b>miliarde de ani</b>.</p>' },
      { icon: '☀️', title: 'Lunga călătorie a luminii', focus: ['luce', 'involucro', 'nucleo'], view: { rx: 0.3, ry: -0.6 }, zoom: 1.7,
        html: '<p>Energia produsă în centru iese încet, ricoșând în zigzag, și în cele din urmă părăsește suprafața sub formă de <b>lumină</b>. Călătorește prin spațiu cu 300 000 km pe secundă.</p>' },
      { icon: '☁️', title: 'Nașterea: nebuloase și protostele', focus: ['nebulosa', 'protostella', 'percorso'], view: { rx: 0.6, ry: -0.6 },
        html: '<p>Stelele se nasc în <b>nebuloase</b>, nori de gaz și praf. Gravitația adună gazul într-o minge din ce în ce mai fierbinte: o <b>protostea</b>, cu un disc în jur din care se pot naște <b>planetele</b>.</p>' },
      { icon: '🔴', title: 'Bătrânețea: gigantele roșii', focus: ['gigante-rossa', 'nana-bianca', 'percorso'], view: { rx: 0.6, ry: 0.1 },
        html: '<p>Când hidrogenul se termină, steaua se umflă și devine o <b>gigantă roșie</b>. Stelele ca Soarele pierd apoi straturile exterioare (o <b>nebuloasă planetară</b>) și rămâne o mică <b>pitică albă</b>.</p>' },
      { icon: '💥', title: 'Stelele uriașe explodează', focus: ['supernova', 'stella-neutroni', 'buco-nero', 'percorso'], view: { rx: 0.6, ry: 2.8 },
        html: '<p>Stelele mult mai mari decât Soarele se sfârșesc cu o explozie: o <b>supernovă</b>. Rămâne o <b>stea neutronică</b> foarte mică și foarte grea, sau o <b>gaură neagră</b>.</p><p class="tip">✨ Atomii din corpul tău au fost creați în stele străvechi: ești făcut din praf de stele!</p>' }
    ],
    facts: [
      { icon: '🔢', title: 'Mai multe stele decât grăunțe de nisip', html: 'În univers sunt mai multe stele decât grăunțe de nisip pe toate plajele Pământului. Doar galaxia noastră, Calea Lactee, are <b>sute de miliarde</b>.' },
      { icon: '🚀', title: 'Cea mai apropiată stea', html: 'După Soare, cea mai apropiată stea este <b>Proxima Centauri</b>: lumina ei are nevoie de mai bine de 4 ani ca să ajungă la noi.' },
      { icon: '🎨', title: 'Stele colorate', html: 'Privește Orion iarna: <b>Betelgeuse</b> este roșie (mai rece), <b>Rigel</b> este albastră (foarte fierbinte).' },
      { icon: '✨', title: 'De ce par că „clipesc"?', html: 'Stelele tremură pentru că lumina lor trece prin aerul în mișcare al atmosferei noastre. În spațiu nu tremură.' },
      { icon: '⏳', title: 'Vieți foarte lungi', html: 'Soarele va trăi aproximativ <b>10 miliarde de ani</b> (are deja 4,6). Cele mai mari stele își consumă combustibilul repede și trăiesc „doar" câteva milioane de ani.' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce se întâmplă în nucleul unei stele?', options: ['Apa fierbe', 'Hidrogenul se unește și devine heliu', 'Lemnul arde', 'Fierul se topește'], answer: 1, explain: 'Este fuziunea nucleară: hidrogen → heliu, cu eliberarea unei cantități uriașe de energie.' },
      { type: 'mc', q: 'Care două forțe se echilibrează într-o stea?', options: ['Vântul și ploaia', 'Gravitația și presiunea gazului fierbinte', 'Magnetismul și electricitatea', 'Frecarea și împingerea'], answer: 1, explain: 'Gravitația împinge spre interior, presiunea gazului fierbinte spre exterior.' },
      { type: 'tf', q: 'Soarele este o stea.', answer: true, explain: 'Este o stea de mărime medie: ni se pare diferit doar pentru că este foarte aproape.' },
      { type: 'mc', q: 'Unde se nasc stelele?', options: ['În găurile negre', 'În nebuloasele de gaz și praf', 'Pe planete', 'În comete'], answer: 1, explain: 'Gravitația adună gazul nebuloaselor în bulgări până când se aprinde fuziunea.' },
      { type: 'order', q: 'Pune în ordine viața unei stele ca Soarele', items: ['Nebuloasă', 'Protostea', 'Stea adultă', 'Gigantă roșie', 'Pitică albă'], explain: 'Nor → minge care se încălzește → stea stabilă → se umflă → rămâne nucleul fierbinte.' },
      { type: 'mc', q: 'Cum se sfârșesc stelele mult mai mari decât Soarele?', options: ['Se sting încet', 'Cu o explozie de supernovă', 'Devin planete', 'Devin comete'], answer: 1, explain: 'Explodează ca supernove și lasă o stea neutronică sau o gaură neagră.' }
    ]
  });
})();
