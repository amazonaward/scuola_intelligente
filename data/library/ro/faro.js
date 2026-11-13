/* Il faro, su uno scoglio. Alto = +y. La lanterna è in cima (y ≈ 5–6): la lente di Fresnel gira intorno a y
   e i suoi due "occhi di bue" mandano due fasci di luce che spazzano il mare. */
(function () {
  const D = Math.PI / 180, LY = 5.58, TAU = Math.PI * 2;
  const R = (y) => 0.9 - 0.06 * y; // raggio della torre all'altezza y
  const band = (y0, y1, color) => ({ t: 'lathe', n: 30, pts: [[R(y0), y0], [R(y1), y1]], color });
  const SPIN = { type: 'spin', axis: 'y', rate: 1 };
  /* "occhio di bue": anelli concentrici che guardano verso +x */
  const bullseye = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [
    { t: 'sphere', r: 1, n: 8, m: 14, pos: [0.3, 0, 0], scale: [0.05, 0.12, 0.12], color: '#e0f2fe', alpha: 0.75 },
    ...[0.17, 0.24, 0.31].map((r) => ({ t: 'torus', R: r, r: 0.016, n: 24, m: 4, rot: [0, 0, 90], pos: [0.3, 0, 0], color: '#a5f3fc', alpha: 0.7 })),
    { t: 'box', s: [0.02, 0.72, 0.72], pos: [0.27, 0, 0], color: '#b45309', alpha: 0.9 } ] });
  const beam = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [ { t: 'lathe', n: 18, pts: [[0.12, 0], [0.45, 1.2], [0.9, 3.4]], rot: [0, 0, -90], pos: [0.3, 0, 0], ds: true } ] });
  const steps = Array.from({ length: 44 }, (_, k) => { const a = k * 32, y = 0.25 + k * 0.105; return { t: 'box', s: [0.36, 0.035, 0.13], pos: [0.27 * Math.cos(a * D), y, -0.27 * Math.sin(a * D)], rot: [0, a, 0] }; });
  const ROCK = [[0, -0.75], [2.1, -0.75], [2.2, -0.5], [1.9, -0.3], [1.75, -0.12], [1.3, 0.0], [0, 0.02]];

  LIBRARY({
    id: 'faro',
    lang: 'ro',
    title: 'Farul',
    intro: 'Noaptea, în mijlocul mării, cum știu corăbiile unde sunt stâncile și unde se află portul? Se uită la <b>faruri</b>! Fiecare far clipește în felul lui și o lentilă specială face ca lumina să ajungă foarte departe.',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.22, height: 500, bg: 'sky', floor: false,
      parts: [
        { id: 'scogli', name: 'Stâncă', color: '#78716c', explode: [0, -0.6, 0],
          info: '<p>Farurile se construiesc acolo unde corăbiile riscă cel mai mult: pe stânci, capuri și insulițe, sau la intrarea în porturi.</p>',
          shapes: [ { t: 'lathe', n: 22, pts: ROCK }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [1.3, -0.1, 0.9], scale: [0.6, 0.35, 0.5], color: '#57534e' }, { t: 'sphere', r: 1, n: 7, m: 10, pos: [-1.4, -0.15, -0.6], scale: [0.7, 0.3, 0.6], color: '#57534e' },
            { t: 'cyl', r: 1.15, h: 0.2, n: 30, pos: [0, 0.08, 0], color: '#d6d3d1' } ] },
        { id: 'mare', name: 'Marea', color: '#0369a1', alpha: 0.35, explode: [0, -0.6, 0], chip: false, noLabel: true,
          info: '<p>Marea din jurul farului. Noaptea, pentru marinari, farul este ca un indicator rutier luminos.</p>',
          shapes: [ { t: 'cyl', r: 3.4, h: 0.04, n: 40, pos: [0, -0.3, 0] } ] },
        { id: 'torre', name: 'Turnul', color: '#f8fafc', explode: [0, 0, 0],
          info: '<p>Turnul ridică lumina cât mai sus: cu cât este mai sus, cu atât se vede mai departe, pentru că Pământul este curbat. <b>Dungile</b> colorate îl fac ușor de recunoscut și ziua.</p>',
          more: '<p>De pe un turn înalt de 50 de metri lumina se vede până la aproximativ <b>45 km</b> distanță. Pereții sunt foarte groși la bază (chiar 2 metri) ca să reziste valurilor și vântului furtunilor.</p>',
          shapes: [ band(0.1, 1.1), band(1.1, 2.1, '#dc2626'), band(2.1, 3.1), band(3.1, 4.1, '#dc2626'), band(4.1, 5.0),
            { t: 'box', s: [0.32, 0.6, 0.02], pos: [0, 0.42, R(0.42) - 0.01], color: '#3f2a1d', decal: 1 },
            ...[1.6, 2.6, 3.6].map((y, i) => ({ t: 'box', s: [0.12, 0.22, 0.02], pos: [R(y) * Math.sin(i * 70 * D), y, R(y) * Math.cos(i * 70 * D) - 0.01], rot: [0, i * 70, 0], color: '#1e293b', decal: 1 })) ] },
        { id: 'scala', name: 'Scara în spirală', label: 'Scara', color: '#a8a29e', explode: [1.5, 0, 0],
          info: '<p>În interiorul turnului o lungă <b>scară în spirală</b> urcă până la felinar. Paznicul farului o urca de mai multe ori în fiecare noapte.</p>',
          shapes: [ { t: 'cyl', r: 0.08, h: 4.9, n: 12, pos: [0, 2.55, 0], color: '#78716c' } ].concat(steps) },
        { id: 'contrappeso', name: 'Greutatea mecanismului de ceasornic', label: 'Greutatea', color: '#334155', explode: [1.5, 0, 0],
          info: '<p>În farurile vechi nu exista motor electric: o <b>greutate</b> atârnată de o sfoară cobora încet în interiorul turnului și, ca la un ceas cu pendul, rotea lentila.</p>',
          more: '<p>Paznicul trebuia să „încarce” mecanismul rotind o manivelă și trăgând greutatea în sus, chiar la fiecare 2–4 ore, toată noaptea. Astăzi munca o face un mic motor electric, iar farul este aproape întotdeauna automat.</p>',
          shapes: [ { t: 'cyl', r: 0.006, h: 4.5, n: 4, pos: [0, 2.75, 0.15], color: '#1f2937' },
            { t: 'cyl', r: 0.07, h: 0.3, n: 12, pos: [0, 4.4, 0.15], anim: { type: 'move', dir: [0, -1, 0], amp: 3.6, wave: 'saw', rate: 0.05 } } ] },
        { id: 'ballatoio', name: 'Balconul', color: '#1f2937', explode: [0, 0.4, 0],
          info: '<p>Terasa care înconjoară felinarul. De aici paznicul curăța geamurile de sare și de zăpadă, ca lumina să iasă mereu puternică.</p>',
          shapes: [ { t: 'cyl', r: 1.0, h: 0.1, n: 32, pos: [0, 5.02, 0] }, { t: 'torus', R: 0.97, r: 0.02, n: 40, m: 4, pos: [0, 5.38, 0] },
            ...Array.from({ length: 16 }, (_, k) => ({ t: 'cyl', r: 0.012, h: 0.32, n: 4, pos: [0.97 * Math.cos(k * 22.5 * D), 5.22, 0.97 * Math.sin(k * 22.5 * D)] })),
            ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.12, 0.2, 0.08], pos: [0.88 * Math.cos(k * 30 * D), 4.88, 0.88 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0], color: '#e5e7eb' })) ] },
        { id: 'lanterna', name: 'Felinarul (camera de sticlă)', label: 'Felinarul', color: '#bae6fd', alpha: 0.22, explode: [0, 0.75, 0],
          info: '<p>Camera de sticlă din vârf, unde se află lumina. Geamurile sunt groase ca să reziste vântului, ploii… și păsărilor care se lovesc de ele noaptea!</p>',
          shapes: [ { t: 'cyl', r: 0.6, h: 0.82, n: 32, pos: [0, 5.66, 0], ds: true }, { t: 'tube', r: 0.64, ri: 0.58, h: 0.25, n: 32, pos: [0, 5.18, 0], color: '#f8fafc', alpha: 1 },
            ...Array.from({ length: 8 }, (_, k) => ({ t: 'cyl', r: 0.018, h: 0.82, n: 5, pos: [0.6 * Math.cos(k * 45 * D), 5.66, 0.6 * Math.sin(k * 45 * D)], color: '#1f2937', alpha: 1 })) ] },
        { id: 'cupola', name: 'Cupola', color: '#991b1b', explode: [0, 1.2, 0],
          info: '<p>„Pălăria” de cupru a felinarului. În vârf este un <b>coș</b> pentru ieșirea căldurii lămpii și un <b>paratrăsnet</b>: farul este cel mai înalt punct al coastei!</p>',
          shapes: [ { t: 'sphere', r: 0.66, n: 10, m: 28, hemi: true, pos: [0, 6.07, 0], scale: [1, 0.7, 1] }, { t: 'cyl', r: 0.68, h: 0.05, n: 32, pos: [0, 6.08, 0], color: '#7f1d1d' },
            { t: 'sphere', r: 0.11, n: 8, m: 12, pos: [0, 6.6, 0], color: '#1f2937' }, { t: 'cyl', r: 0.012, h: 0.45, n: 4, pos: [0, 6.9, 0], color: '#475569' },
            { t: 'group', pos: [0, 6.95, 0], anim: { type: 'swing', axis: 'y', amp: 25, rate: 0.15 }, shapes: [ { t: 'extrude', d: 0.01, pts: [[0, 0], [0.25, 0.03], [0.25, -0.05], [0, -0.03]], color: '#475569' } ] } ] },
        { id: 'lente', name: 'Lentila Fresnel', label: 'Lentila Fresnel', color: '#a5f3fc', pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>Este „supraputerea” farului: o cușcă de sticle cu forme de inele, inventată de <b>Augustin Fresnel</b> în 1822. Adună lumina care pleacă în toate direcțiile și o concentrează în <b>fascicule</b> înguste și foarte puternice.</p>',
          more: '<p>O lentilă obișnuită atât de mare ar fi groasă și foarte grea. Fresnel a avut ideea să o „taie” în inele concentrice, păstrând doar suprafețele curbe care îndoaie lumina (<b>refracția</b>): aceeași funcție, mult mai puțină sticlă. Sus și jos mai sunt și prisme care o reflectă. Aceleași lentile subțiri se folosesc la proiectoare și la farurile mașinilor.</p>',
          shapes: [ bullseye(0), bullseye(180), { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, 0.38, 0], color: '#b45309' }, { t: 'torus', R: 0.33, r: 0.02, n: 28, m: 4, pos: [0, -0.38, 0], color: '#b45309' },
            ...[0.22, 0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })), ...[-0.22, -0.3].map((y) => ({ t: 'torus', R: 0.28, r: 0.02, n: 28, m: 4, pos: [0, y, 0], alpha: 0.6 })) ] },
        { id: 'lampada', name: 'Lampa', color: '#fde047', pos: [0, LY, 0], explode: [0, 0, 0.8],
          info: '<p>În centrul lentilei se află sursa de lumină. Odinioară era o flacără de ulei sau de petrol; astăzi este o lampă electrică sau un grup de <b>LED-uri</b>.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 3 } }, { t: 'sphere', r: 0.17, n: 8, m: 12, color: '#fef08a', alpha: 0.35 },
            { t: 'cyl', r: 0.03, h: 0.3, n: 8, pos: [0, -0.22, 0], color: '#475569' } ] },
        { id: 'fasci', name: 'Fascicule de lumină', label: 'Fascicule de lumină', color: '#facc15', alpha: 0.28, pos: [0, LY, 0], explode: [0, 0, 1.6], anim: SPIN,
          info: '<p>Cele două fascicule se rotesc odată cu lentila, ca acele unui ceas. Cine se uită dinspre mare vede o <b>sclipire</b> de fiecare dată când un fascicul trece spre el.</p>',
          more: '<p>Fiecare far are <b>caracteristica</b> lui: de exemplu „2 sclipiri albe la fiecare 10 secunde”. Pe hărțile marine este scrisă pentru fiecare far: numărând sclipirile, marinarul înțelege la ce far se uită și deci unde se află.</p>',
          shapes: [ beam(0), beam(180) ] },
        { id: 'meccanismo', name: 'Mecanismul de rotație', label: 'Mecanism', color: '#b45309', pos: [0, 5.2, 0], explode: [0, -0.2, 1.1],
          info: '<p>Sub lentilă, un mecanism o rotește încet și mereu cu aceeași viteză, așa că sclipirile ajung la momentul potrivit.</p>',
          more: '<p>Lentilele mari cântăresc tone! Ca să le rotească cu puțină forță, le făceau să plutească pe o <b>cuvă cu mercur</b> lichid: era de ajuns o mică împingere ca să se miște.</p>',
          shapes: [ { t: 'cyl', r: 0.28, h: 0.12, n: 24, color: '#94a3b8' }, { t: 'cyl', r: 0.24, h: 0.03, n: 24, pos: [0, 0.07, 0], color: '#cbd5e1' },
            { t: 'group', pos: [0, 0.1, 0], anim: SPIN, shapes: [ { t: 'cyl', r: 0.22, h: 0.04, n: 24 }, ...Array.from({ length: 12 }, (_, k) => ({ t: 'box', s: [0.04, 0.04, 0.03], pos: [0.23 * Math.cos(k * 30 * D), 0, 0.23 * Math.sin(k * 30 * D)], rot: [0, -k * 30, 0] })) ] },
            { t: 'group', pos: [0.32, 0.1, 0], anim: { type: 'spin', axis: 'y', dir: -1, rate: 2.75 }, shapes: [ { t: 'cyl', r: 0.08, h: 0.04, n: 14, color: '#d97706' }, { t: 'box', s: [0.14, 0.045, 0.02], color: '#78350f' } ] },
            { t: 'cyl', r: 0.07, h: 0.16, n: 14, pos: [0.32, -0.04, 0], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '🗼', title: 'Un semafor pentru corăbii', explode: 0,
        html: '<p>Farul semnalează corăbiilor <b>stâncile</b> periculoase și intrarea în <b>porturi</b>. Ziua se recunoaște după culori și formă, noaptea după lumina lui.</p>' },
      { icon: '📏', title: 'De ce atât de înalt?', focus: ['torre', 'scogli', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.4 },
        html: '<p>Pământul este curbat: o lumină joasă dispare după orizont după câțiva kilometri. Cu cât lumina este mai <b>sus</b>, cu atât se vede mai departe. De aceea farurile sunt turnuri înalte, adesea pe faleze.</p><p class="tip">🌍 De la 50 de metri înălțime lumina se vede până la aproximativ 45 km.</p>' },
      { icon: '🪜', title: 'În interiorul turnului', focus: ['scala', 'contrappeso'], explode: 0, view: { rx: 0.25, ry: -0.6 },
        html: '<p>O <b>scară în spirală</b> urcă până sus. În farurile de odinioară, în centru cobora încet o <b>greutate</b> care rotea lentila, ca la un ceas cu pendul. Paznicul o încărca de mai multe ori în fiecare noapte.</p>' },
      { icon: '💡', title: 'Felinarul și lampa', focus: ['lanterna', 'lampada', 'cupola', 'ballatoio'], explode: 0.3, zoom: 1.2, view: { rx: 0.3, ry: -0.5 },
        html: '<p>În vârf se află <b>felinarul</b>, o cameră de sticlă. Înăuntru, <b>lampa</b>: odinioară o flacără de ulei, azi o lampă electrică sau LED-uri. <b>Cupola</b> o protejează și are un paratrăsnet.</p>' },
      { icon: '🔍', title: 'Lentila Fresnel', focus: ['lente', 'lampada', 'fasci'], explode: 0, zoom: 1.25, view: { rx: 0.3, ry: -0.8 },
        html: '<p>Lumina unei lămpi pleacă în toate direcțiile și s-ar irosi. <b>Lentila Fresnel</b>, făcută din inele de sticlă, îndoaie razele și le concentrează în <b>fascicule</b> înguste și foarte puternice, vizibile la zeci de kilometri.</p><p class="tip">🔎 Cu o lupă poți concentra lumina soarelui într-un punctișor: principiul este același!</p>' },
      { icon: '🔄', title: 'Sclipiri care se rotesc', focus: ['fasci', 'lente', 'meccanismo'], explode: 0, view: { rx: 0.35, ry: -0.5 },
        html: '<p><b>Mecanismul</b> rotește lentila, iar fasciculele de lumină mătură marea ca acele unui ceas. De pe o corabie se vede o <b>sclipire</b> de fiecare dată când trece un fascicul.</p><p>Fiecare far are ritmul lui de sclipiri (<b>caracteristica</b>): numărându-le, marinarii știu la ce far se uită.</p>' }
    ],
    facts: [
      { icon: '🏛️', title: 'Farul din Alexandria', html: 'Cel mai faimos far al antichității se afla pe insula <b>Pharos</b>, la Alexandria, în Egipt: înalt de peste 100 de metri, era una dintre cele șapte minuni ale lumii. De la el vine cuvântul „far”.' },
      { icon: '🇮🇹', title: 'Lanterna din Genova', html: '<b>Lanterna</b> din Genova, înaltă de 77 de metri, este unul dintre cele mai vechi faruri încă în funcțiune: turnul de azi este din 1543.' },
      { icon: '📚', title: 'Paznicul farului', html: 'Timp de secole farurile au avut un <b>paznic</b> care locuia acolo cu familia, aprindea lampa, curăța geamurile și încărca mecanismul. Astăzi aproape toate farurile sunt automate.' },
      { icon: '📡', title: 'Faruri și GPS', html: 'Chiar dacă azi corăbiile au GPS, farurile rămân aprinse: dacă electronica se strică, o lumină care clipește pe coastă poate încă salva o corabie.' }
    ],
    quiz: [
      { type: 'mc', q: 'De ce sunt farurile atât de înalte?', options: ['Ca să fie mai frumoase', 'Pentru că lumina de sus se vede mai departe, din cauză că Pământul este curbat', 'Ca să stea departe de valuri', 'Ca să urce turiștii'], answer: 1, explain: 'Cu cât lumina este mai sus, cu atât mai târziu dispare după orizontul curbat.' },
      { type: 'mc', q: 'Ce face lentila Fresnel?', options: ['Colorează lumina', 'Concentrează lumina în fascicule puternice', 'Stinge lumina ziua', 'Rotește farul'], answer: 1, explain: 'Inelele ei de sticlă îndoaie razele și le adună în fascicule înguste.' },
      { type: 'tf', q: 'Fiecare far clipește într-un ritm al lui, numit caracteristică.', answer: true, explain: 'Numărând sclipirile, marinarii recunosc farul chiar și noaptea.' },
      { type: 'mc', q: 'Cum se rotea lentila în farurile vechi?', options: ['Cu un motor pe benzină', 'Cu o greutate care cobora, ca la un ceas', 'Cu vântul', 'De mână, toată noaptea'], answer: 1, explain: 'Un mecanism de ceasornic, pus în mișcare de o greutate, rotea lentila; paznicul îl încărca.' },
      { type: 'mc', q: 'Care far antic era una dintre cele șapte minuni ale lumii?', options: ['Lanterna din Genova', 'Farul din Alexandria', 'Farul de la Capul Horn', 'Turnul din Pisa'], answer: 1, explain: 'Farul de pe insula Pharos, la Alexandria, în Egipt.' }
    ]
  });
})();
