/* Smartphone-ul, în picioare: ecranul privește spre +z, sus este +y. Când se desface, straturile se separă de-a lungul lui z.
   Ciclul (1): 0–0.25 un deget atinge ecranul; semnalul radio pleacă de la antenă. */
(function () {
  /* dreptunghi cu colțuri rotunjite (plan XY), centrat */
  const rrect = (w, h, r, seg) => {
    const out = [], n = seg || 6, cx = w / 2 - r, cy = h / 2 - r;
    [[cx, cy, 0], [-cx, cy, 90], [-cx, -cy, 180], [cx, -cy, 270]].forEach(([x, y, a0]) => {
      for (let i = 0; i <= n; i++) { const a = (a0 + (i / n) * 90) * Math.PI / 180; out.push([x + r * Math.cos(a), y + r * Math.sin(a)]); }
    });
    return out;
  };
  /* ramă: contur exterior + gaură (poligon „cu gaură de cheie”) */
  const ring = (o, i) => o.concat([o[0], i[0]], i.slice(1).reverse(), [i[0]]);
  const W = 1.5, H = 3.1, RC = 0.22;
  /* pictogramele aplicațiilor: grilă 4 × 5 */
  const APP = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7', '#ec4899', '#14b8a6', '#f97316', '#64748b', '#0ea5e9', '#84cc16', '#eab308', '#6366f1', '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4', '#d946ef', '#facc15', '#4ade80'];
  const icons = APP.map((c, k) => ({ t: 'extrude', d: 0.008, pts: rrect(0.22, 0.22, 0.06, 3), pos: [-0.465 + (k % 4) * 0.31, 1.0 - Math.floor(k / 4) * 0.36, 0.012], color: c, decal: 2 }));
  const dock = [0, 1, 2, 3].map((k) => ({ t: 'extrude', d: 0.008, pts: rrect(0.22, 0.22, 0.06, 3), pos: [-0.465 + k * 0.31, -1.18, 0.012], color: ['#22c55e', '#3b82f6', '#f8fafc', '#f59e0b'][k], decal: 2 }));
  /* unde radio: inele care se lărgesc și dispar */
  const waves = [0, 1, 2].map((k) => ({ t: 'group', anim: [{ type: 'scale', from: 0.3, to: 1.9, wave: 'saw', phase: k / 3 }, { type: 'blink', fade: true, wave: 'rsaw', phase: k / 3 }],
    shapes: [{ t: 'torus', R: 0.4, r: 0.02, n: 28, m: 4, rot: [90, 0, 0], color: '#fbbf24' }] }));
  const chip = (w, h, c, x, y, z) => ({ t: 'box', s: [w, h, 0.05], pos: [x, y, z || 0.035], color: c });

  LIBRARY({
    lang: 'ro',
    id: 'smartphone',
    title: 'Smartphone-ul',
    intro: 'Smartphone-ul este un <b>mic calculator de buzunar</b> care este și telefon, aparat foto, navigator și player de muzică. Desfă-l strat cu strat: de la sticla pe care îți simte degetul până la baterie!',
    model: {
      rx: 0.18, ry: -0.75, speed: 0.45, height: 470, fit: 0.95,
      parts: [
        { id: 'vetro', name: 'Sticlă tactilă (touchscreen)', label: 'Sticlă tactilă', color: '#bae6fd', alpha: 0.28, pos: [0, 0, 0.11], explode: [0, 0, 1.5],
          info: '<p>Este sticla pe care o atingi. Dedesubt se află o grilă invizibilă de fire foarte subțiri care simte unde pui degetul, pentru că trupul tău <b>conduce puțină electricitate</b>.</p>',
          more: '<p>Este un touchscreen <b>capacitiv</b>: rândurile și coloanele de electrozi transparenți (oxid de indiu-staniu) formează multe condensatoare mici. Degetul le schimbă sarcina, iar cipul calculează coordonatele atingerii de peste 100 de ori pe secundă. De aceea cu mănuși obișnuite nu funcționează!</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'group', pos: [0, 0, 0.02], shapes: Array.from({ length: 5 }, (_, k) => ({ t: 'box', div: 1, s: [0.006, H - 0.3, 0.002], pos: [-0.5 + k * 0.25, 0, 0], color: '#7dd3fc', alpha: 0.5 }))
              .concat(Array.from({ length: 9 }, (_, k) => ({ t: 'box', div: 1, s: [W - 0.25, 0.006, 0.002], pos: [0, -1.36 + k * 0.34, 0], color: '#7dd3fc', alpha: 0.5 }))) },
            { t: 'extrude', d: 0.01, pts: rrect(0.36, 0.09, 0.045, 3), pos: [0, 1.42, 0.02], color: '#0f172a', alpha: 0.9 } ] },
        { id: 'dito', name: 'Degetul tău', label: 'Atingere', color: '#fda4af', pos: [0.3, -0.2, 0.55], explode: [0, 0, 1.5],
          anim: { type: 'move', dir: [0, 0, -1], amp: 0.36, wave: 'window', from: 0.05, to: 0.35, ramp: 0.35 },
          info: '<p>Când degetul atinge sticla, grila touchscreen-ului simte o mică schimbare electrică exact în acel punct, iar telefonul înțelege <b>unde</b> ai atins.</p>',
          shapes: [ { t: 'cyl', r: 0.13, h: 0.5, n: 16, rot: [90, 0, 0], pos: [0, 0, 0.25] }, { t: 'sphere', r: 0.13, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], scale: [1, 0.8, 1] },
            { t: 'cyl', r: 0.17, h: 0.01, n: 20, rot: [90, 0, 0], pos: [0, 0, -0.33], color: '#fde047', anim: { type: 'blink', fade: true, wave: 'window', from: 0.17, to: 0.32, ramp: 0.3 } } ] },
        { id: 'display', name: 'Display OLED', label: 'Display', color: '#0f172a', pos: [0, 0, 0.07], explode: [0, 0, 1.05],
          info: '<p>Este ecranul care se luminează. E făcut din milioane de puncte colorate, <b>pixelii</b>: fiecare se aprinde în roșu, verde sau albastru și împreună formează imaginile.</p>',
          more: '<p>În display-urile <b>OLED</b>, fiecare sub-pixel este un LED organic minuscul care face lumină singur: negrul este cu adevărat stins, iar asta economisește baterie. Un smartphone are aproximativ 2,5 milioane de pixeli, peste 400 pe fiecare inch.</p>',
          shapes: [ { t: 'extrude', d: 0.025, pts: rrect(W - 0.06, H - 0.06, RC - 0.03, 8) },
            { t: 'extrude', d: 0.006, pts: rrect(W - 0.14, H - 0.14, RC - 0.07, 8), pos: [0, 0, 0.012], color: '#1d4ed8', decal: 1 },
            { t: 'box', s: [W - 0.14, 1.0, 0.004], pos: [0, -0.35, 0.013], color: '#7c3aed', alpha: 0.55, decal: 1 },
            { t: 'box', s: [0.5, 0.06, 0.006], pos: [0, 1.38, 0.014], color: '#e2e8f0', decal: 2 } ].concat(icons, dock) },
        { id: 'telaio', name: 'Șasiu (ramă)', label: 'Șasiu', color: '#9ca3af', pos: [0, 0, 0], explode: [0, 0, 0],
          info: '<p>Este rama de metal care ține laolaltă tot telefonul. Pe laterale se află <b>butoanele</b> de volum și de pornire.</p>',
          more: '<p>Șasiul este din <b>aluminiu</b> sau oțel: ușor și rezistent. Adesea, unele porțiuni ale marginii sunt separate prin fâșii subțiri de plastic pentru că servesc și drept <b>antenă</b>.</p>',
          shapes: [ { t: 'extrude', d: 0.17, pts: ring(rrect(W + 0.04, H + 0.04, RC + 0.02, 8), rrect(W - 0.06, H - 0.06, RC - 0.03, 8)), smooth: true },
            { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.75, 0], color: '#6b7280' }, { t: 'box', s: [0.04, 0.22, 0.05], pos: [-0.78, 0.45, 0], color: '#6b7280' },
            { t: 'box', s: [0.04, 0.35, 0.05], pos: [0.78, 0.6, 0], color: '#6b7280' },
            { t: 'box', s: [0.42, 0.04, 0.12], pos: [0, -1.56, 0], color: '#111827' },
            { t: 'box', s: [0.22, 0.02, 0.055], pos: [0, -1.575, 0], color: '#475569' } ] },
        { id: 'scheda-logica', name: 'Placa logică', label: 'Placa logică', color: '#166534', pos: [0, 0.75, -0.02], explode: [0, 0.25, 0.55],
          info: '<p>Este „placa de bază” a telefonului: o plăcuță verde plină de cipuri legate prin piste foarte subțiri de cupru.</p>',
          more: '<p>Ca să încapă în câțiva centimetri, placa este făcută din <b>mai multe straturi</b> suprapuse (chiar 10!), iar cipurile sunt puse unul peste altul. Mai sunt și cipurile pentru Wi-Fi, Bluetooth, GPS și modemul pentru rețeaua mobilă.</p>',
          shapes: [ { t: 'box', s: [1.3, 1.3, 0.025] }, chip(0.18, 0.12, '#1f2937', 0.42, -0.4), chip(0.14, 0.14, '#334155', -0.42, -0.42), chip(0.2, 0.1, '#1f2937', -0.4, 0.4),
            chip(0.12, 0.08, '#b45309', 0.45, 0.42), { t: 'box', s: [0.3, 0.06, 0.03], pos: [0, -0.6, 0.025], color: '#d1d5db' } ]
            .concat(Array.from({ length: 6 }, (_, k) => ({ t: 'box', s: [0.025, 0.04, 0.03], pos: [-0.1 + k * 0.05, 0.55, 0.025], color: '#a16207' }))) },
        { id: 'processore', name: 'Procesor (SoC)', label: 'Procesor', color: '#cbd5e1', pos: [0.05, 0.85, 0.03], explode: [0.25, 0.4, 1.0],
          info: '<p>Este <b>creierul</b> telefonului. Într-un cip cât o unghie se află procesorul, placa grafică și „creierul” pentru inteligența artificială.</p>',
          more: '<p>Se numește <b>SoC</b> (System on a Chip, „sistem pe un cip”). Conține peste 15 miliarde de tranzistori lați de câțiva nanometri și lucrează cu foarte puțină energie, ca să nu se încălzească prea tare și să nu descarce bateria.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.42, 0.03], color: '#166534' }, { t: 'box', s: [0.34, 0.34, 0.04], pos: [0, 0, 0.03] },
            { t: 'box', s: [0.12, 0.12, 0.005], pos: [-0.07, 0.07, 0.052], color: '#94a3b8', decal: 1 },
            { t: 'box', s: [0.06, 0.06, 0.006], pos: [0.1, -0.08, 0.052], color: '#38bdf8', decal: 1, anim: { type: 'blink', color: '#f0f9ff', wave: 'square', rate: 3 } } ] },
        { id: 'memoria', name: 'Memorie (RAM și stocare)', label: 'Memorie', color: '#334155', pos: [-0.4, 1.08, 0.03], explode: [-0.35, 0.35, 0.85],
          info: '<p>Două tipuri de memorie: <b>RAM</b>, masa de lucru rapidă pentru aplicațiile deschise, și <b>stocarea</b>, unde rămân fotografiile, videoclipurile și aplicațiile chiar și cu telefonul oprit.</p>',
          more: '<p>Stocarea este o memorie <b>flash</b>: informațiile rămân prinse ca sarcini electrice în „cuști” minuscule chiar și fără curent. 128 GB înseamnă aproximativ o mie de miliarde de biți!</p>',
          shapes: [ { t: 'box', s: [0.32, 0.22, 0.04] }, { t: 'box', s: [0.3, 0.2, 0.004], pos: [0, 0, 0.022], color: '#475569', decal: 1 } ] },
        { id: 'batteria', name: 'Baterie', color: '#1f2937', pos: [0, -0.55, -0.02], explode: [0, -0.2, -0.6],
          info: '<p>Este „rezervorul” de energie: o baterie plată cu <b>litiu</b> care se poate reîncărca de sute de ori. Ocupă aproape jumătate din telefon!</p>',
          more: '<p>În timpul încărcării, ionii de litiu se mută de pe o parte pe alta a bateriei; când folosești telefonul, se întorc și fac să curgă curentul. Nu o lăsa la soare: căldura o strică și poate fi periculoasă.</p>',
          shapes: [ { t: 'extrude', d: 0.07, pts: rrect(1.25, 1.75, 0.06, 3) }, { t: 'box', s: [1.1, 0.6, 0.004], pos: [0, 0.2, 0.037], color: '#e2e8f0', decal: 1 },
            { t: 'box', s: [0.6, 0.08, 0.004], pos: [0, 0.32, 0.04], color: '#16a34a', decal: 2 }, { t: 'box', s: [0.3, 0.12, 0.03], pos: [0, 0.92, 0], color: '#b45309' },
            { t: 'group', pos: [-0.35, 0.08, 0.042], shapes: [0, 1, 2, 3].map((k) => ({ t: 'box', s: [0.12, 0.16, 0.004], pos: [k * 0.14, 0, 0], color: '#22c55e', decal: 2, anim: { type: 'blink', fade: true, wave: 'window', from: k * 0.2, to: 0.95, ramp: 0.05, cycle: 1 } })) } ] },
        { id: 'fotocamere', name: 'Aparate foto', color: '#111827', pos: [-0.42, 1.12, -0.12], explode: [0, 0.05, -1.6],
          info: '<p>Aparatele foto au o mică <b>lentilă</b> care adună lumina și un <b>senzor</b> care o transformă în numere: așa se naște o fotografie.</p>',
          more: '<p>Senzorul este o grilă de milioane de fotodiode: fiecare măsoară cât de multă lumină îl lovește. Mai multe aparate foto servesc pentru zoom-uri diferite (unghi larg, tele), iar procesorul combină mai multe cadre pentru fotografii mai bune, chiar și în întuneric.</p>',
          shapes: [ { t: 'extrude', d: 0.04, pts: rrect(0.6, 0.6, 0.14, 5), pos: [0, 0, -0.01], color: '#374151' } ].concat(
            [[-0.13, 0.13], [-0.13, -0.13], [0.14, 0]].map(([x, y]) => ({ t: 'group', pos: [x, y, -0.05], shapes: [
              { t: 'cyl', r: 0.105, h: 0.06, n: 28, rot: [90, 0, 0], color: '#9ca3af' }, { t: 'cyl', r: 0.08, h: 0.065, n: 28, rot: [90, 0, 0], color: '#0f172a' },
              { t: 'sphere', r: 0.06, n: 8, m: 16, hemi: true, rot: [-90, 0, 0], pos: [0, 0, -0.03], color: '#1e3a8a' } ] })),
            [{ t: 'cyl', r: 0.03, h: 0.02, n: 12, rot: [90, 0, 0], pos: [0.15, 0.2, -0.04], color: '#fef9c3' }]) },
        { id: 'antenne', name: 'Antene', color: '#f59e0b', pos: [0, 0, 0], explode: [0.9, 0, 0],
          info: '<p>Antenele trimit și primesc <b>unde radio</b>, invizibile, care călătoresc cu viteza luminii până la cel mai apropiat releu. Așa vorbești, schimbi mesaje și navighezi.</p>',
          more: '<p>Un smartphone are antene diferite pentru 4G/5G, Wi-Fi, Bluetooth, GPS și NFC (cel pentru plată, apropiind telefonul). Undele radio poartă datele sub formă de 0 și 1, schimbându-și continuu forma.</p>',
          shapes: [ { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, 1.52, 0.02], [0.5, 1.52, 0.02]] }, { t: 'pipe', r: 0.018, n: 6, pts: [[-0.5, -1.52, 0.02], [0.5, -1.52, 0.02]] },
            { t: 'pipe', r: 0.014, n: 6, pts: [[0.73, 0.2, 0], [0.73, -0.5, 0]] },
            { t: 'group', pos: [0, 1.6, 0], shapes: waves } ] },
        { id: 'altoparlante', name: 'Difuzor și microfon', label: 'Difuzor', color: '#475569', pos: [0.4, -1.38, 0], explode: [0.35, -0.5, 0.35],
          info: '<p><b>Difuzorul</b> face aerul să vibreze și produce sunetele. <b>Microfonul</b> face invers: simte vibrațiile vocii tale și le transformă în semnale electrice.</p>',
          more: '<p>În difuzor, o bobină parcursă de curent se mișcă înainte și înapoi lângă un magnet și împinge o membrană. Microfonul smartphone-urilor (MEMS) este un cip cu o membrană de siliciu mai subțire decât un fir de păr.</p>',
          shapes: [ { t: 'box', s: [0.42, 0.18, 0.1], anim: { type: 'scale', axis: 'z', from: 1, to: 1.25, wave: 'sin', rate: 6 } }, { t: 'box', s: [0.3, 0.1, 0.01], pos: [0, 0, 0.055], color: '#9ca3af', decal: 1 },
            { t: 'box', s: [0.08, 0.08, 0.06], pos: [-0.75, 0, 0], color: '#64748b' } ] },
        { id: 'vibrazione', name: 'Motorașul de vibrație', label: 'Vibrație', color: '#a16207', pos: [-0.45, -1.35, 0], explode: [-0.4, -0.5, 0.35],
          info: '<p>Un motor minuscul cu o greutate deplasată într-o parte: când se rotește, face telefonul să <b>tremure</b>. Așa simți notificările chiar și în buzunar.</p>',
          shapes: [ { t: 'cyl', r: 0.07, h: 0.22, n: 16, rot: [0, 0, 90], color: '#9ca3af' },
            { t: 'group', pos: [0.15, 0, 0], anim: { type: 'spin', axis: 'x', rate: 6 }, shapes: [ { t: 'cyl', r: 0.065, h: 0.06, n: 16, rot: [0, 0, 90], color: '#a16207' }, { t: 'box', s: [0.06, 0.06, 0.06], pos: [0, 0.05, 0] } ] } ] },
        { id: 'scocca', name: 'Carcasa din spate', label: 'Carcasă', color: '#334155', pos: [0, 0, -0.1], explode: [0, 0, -1.25],
          info: '<p>Este „spatele” telefonului, din sticlă sau plastic. Protejează interiorul și lasă să treacă undele radio și încărcarea fără fir.</p>',
          more: '<p>Sub carcasa multor telefoane se află o <b>bobină</b> de cupru pentru încărcarea wireless: încărcătorul creează un câmp magnetic variabil, iar bobina îl transformă din nou în curent (inducție).</p>',
          shapes: [ { t: 'extrude', d: 0.03, pts: rrect(W, H, RC, 8) },
            { t: 'tube', r: 0.36, ri: 0.24, h: 0.012, n: 32, rot: [90, 0, 0], pos: [0, -0.3, 0.022], color: '#b45309' },
            { t: 'box', s: [0.6, 0.6, 0.02], pos: [-0.42, 1.12, -0.018], color: '#1f2937' } ] }
      ]
    },
    steps: [
      { icon: '📱', title: 'Un calculator în buzunar', explode: 0, view: { rx: 0.18, ry: -0.75 },
        html: '<p>În smartphone se află aceleași piese ca într-un calculator: <b>procesor</b>, <b>memorie</b>, <b>ecran</b> și <b>baterie</b>, dar înghesuite într-o grosime de mai puțin de un centimetru!</p><p class="tip">🔁 Ca orice calculator: <b>intrare</b> (atingere, microfon, aparat foto) → <b>procesare</b> (procesor) → <b>ieșire</b> (ecran, difuzor).</p>' },
      { icon: '👆', title: 'Sticla care simte degetul', focus: ['vetro', 'dito', 'display'], explode: 0.35, loop: [0, 0.45], view: { rx: 0.15, ry: -0.6 },
        html: '<p>Sub sticlă se află o grilă invizibilă de fire. Degetul tău conduce puțină electricitate: când atingi, grila „simte” o schimbare exact în acel punct.</p><p>Un cip calculează poziția atingerii și o trimite procesorului: așa știe telefonul ce aplicație ai atins.</p><p class="tip">🧤 Încearcă cu o mănușă de lână: nu funcționează, pentru că lâna nu conduce!</p>' },
      { icon: '🌈', title: 'Milioane de pixeli colorați', focus: ['display'], explode: 0.5, zoom: 1.15, view: { rx: 0.05, ry: -0.35 },
        html: '<p>Ecranul este făcut din milioane de puncte, <b>pixelii</b>. Fiecare pixel are trei luminițe: <b>roșie</b>, <b>verde</b> și <b>albastră</b>. Aprinzându-le mai tare sau mai slab se obțin toate culorile.</p><p>În display-urile OLED, fiecare luminiță face lumină singură; negrul este un pixel stins.</p>' },
      { icon: '🧠', title: 'Creierul: procesor și memorie', focus: ['scheda-logica', 'processore', 'memoria'], explode: 0.8, view: { rx: 0.2, ry: -0.55 },
        html: '<p><b>Procesorul</b> (SoC) execută instrucțiunile aplicațiilor de miliarde de ori pe secundă. <b>RAM</b> ține aplicațiile deschise, iar <b>stocarea</b> păstrează fotografii, muzică și mesaje chiar și cu telefonul oprit.</p><p>Totul este legat de <b>placa logică</b>, plină de piste de cupru.</p>' },
      { icon: '🔋', title: 'Bateria cu litiu', focus: ['batteria', 'scocca'], explode: 0.7, view: { rx: 0.2, ry: -2.4 },
        html: '<p>Bateria este cea mai mare piesă. Înăuntru, niște particule foarte mici numite <b>ioni de litiu</b> se mută dintr-o parte în alta: când încarci telefonul merg într-un sens, când îl folosești se întorc și fac să curgă curentul.</p><p class="tip">🌡️ Bateriile urăsc căldura: nu lăsa telefonul la soare sau sub pernă cât se încarcă.</p>' },
      { icon: '📡', title: 'Unde radio invizibile', focus: ['antenne', 'telaio', 'scheda-logica'], explode: 0.25, view: { rx: 0.25, ry: -0.5 },
        html: '<p>Când trimiți un mesaj, <b>antenele</b> îl transformă în <b>unde radio</b>: acestea călătoresc cu viteza luminii până la un releu („celula”), care îl trece prin rețea până la telefonul prietenului tău.</p><p>Aceleași unde, dar diferite, servesc pentru Wi-Fi, Bluetooth și GPS.</p>' },
      { icon: '📸', title: 'Aparate foto, sunete și vibrație', focus: ['fotocamere', 'altoparlante', 'vibrazione'], explode: 0.6, view: { rx: 0.2, ry: -2.3 },
        html: '<p><b>Aparatele foto</b> adună lumina cu o lentilă mică și o transformă în numere cu un senzor. <b>Difuzorul</b> face aerul să vibreze, <b>microfonul</b> îți aude vocea, iar <b>motorașul</b> cu o greutate strâmbă face telefonul să vibreze.</p>' }
    ],
    facts: [
      { icon: '🚀', title: 'Mai puternic decât misiunile lunare', html: 'Calculatorul care a condus Apollo 11 pe Lună în 1969 era de mii de ori mai puțin puternic decât telefonul pe care îl ai în buzunar.' },
      { icon: '📞', title: 'Primul telefon mobil', html: 'Primul telefon mobil (1973) cântărea peste un kilogram, se numea „cărămida”, iar bateria ținea 30 de minute de convorbire.' },
      { icon: '⛏️', title: 'O mină în buzunar', html: 'Într-un smartphone există peste 30 de elemente chimice diferite, chiar și un pic de <b>aur</b> și argint. De aceea este important să-l <b>reciclezi</b> și să nu-l arunci la gunoi.' },
      { icon: '🛰️', title: 'GPS-ul ascultă spațiul', html: 'Ca să afle unde ești, telefonul primește semnalele a cel puțin 4 sateliți și îți calculează poziția după timpul în care ajung.' },
      { icon: '🔟', title: 'Un inch, mulți pixeli', html: 'Pe ecranul unui smartphone sunt peste 400 de pixeli pe fiecare inch (2,5 cm): atât de apropiați, încât ochiul nu reușește să-i deosebească.' }
    ],
    quiz: [
      { type: 'mc', q: 'Cum își dă seama touchscreen-ul unde atingi?', options: ['Cu o cameră sub sticlă', 'Simte mica schimbare electrică produsă de deget', 'Măsoară căldura degetului', 'Ascultă zgomotul atingerii'], answer: 1, explain: 'Degetul conduce electricitate și schimbă sarcina grilei invizibile de sub sticlă.' },
      { type: 'mc', q: 'Ce trei culori formează fiecare pixel al ecranului?', options: ['Roșu, galben, albastru', 'Roșu, verde, albastru', 'Alb, negru, gri', 'Verde, violet, portocaliu'], answer: 1, explain: 'RGB: roșu (Red), verde (Green) și albastru (Blue). Amestecate, formează toate culorile.' },
      { type: 'tf', q: 'Fotografiile rămân în memoria telefonului chiar și când îl oprești.', answer: true, explain: 'Fotografiile sunt în stocare (memoria flash), care nu se șterge fără curent. RAM-ul, în schimb, da.' },
      { type: 'mc', q: 'Cum călătoresc mesajele de la telefon la releu?', options: ['Prin unde radio', 'Printr-un cablu invizibil', 'Prin sunet', 'Prin lumina blițului'], answer: 0, explain: 'Antenele transformă datele în unde radio, care călătoresc cu viteza luminii.' },
      { type: 'mc', q: 'Care este cea mai mare piesă din interiorul smartphone-ului?', options: ['Procesorul', 'Bateria', 'Microfonul', 'Aparatul foto'], answer: 1, explain: 'Bateria cu litiu ocupă aproape jumătate din spațiul interior.' },
      { type: 'order', q: 'Pune în ordine: atingi pictograma unei aplicații…', items: ['Sticla tactilă simte degetul', 'Procesorul înțelege ce aplicație ai ales', 'Memoria încarcă aplicația', 'Display-ul arată aplicația deschisă'], explain: 'Intrare (atingere) → procesare (procesor și memorie) → ieșire (display).' }
    ]
  });
})();
