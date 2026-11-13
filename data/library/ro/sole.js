/* Soarele, „tăiat în două ca o portocală”: jumătatea din spate arată straturile pe fața tăieturii (planul z = 0, orientat spre +z);
   jumătatea din față (fotosfera) se deplasează cu cursorul Desface. */
(function () {
  const R = 2.0, D = Math.PI / 180;
  const backHemi = (r, color, dz, alpha) => ({ t: 'sphere', r, n: 20, m: 40, hemi: true, rot: [-90, 0, 0], pos: [0, 0, dz], color, alpha });
  /* punct pe suprafață: ax = înclinare de sus spre +z, ay = rotire în jurul lui y */
  const onSurf = (ax, ay, shapes) => ({ t: 'group', rot: [0, ay, 0], shapes: [ { t: 'group', rot: [ax, 0, 0], shapes: [ { t: 'group', pos: [0, R, 0], shapes } ] } ] });
  /* celule convective pe fața tăieturii */
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * 360 * D, c = [1.7 * Math.cos(a), 1.7 * Math.sin(a)], rr = 0.2;
    const dir = i % 2 ? 1 : -1;
    const loop = Array.from({ length: 13 }, (_, k) => { const b = dir * (k / 12) * Math.PI * 2; return [c[0] + rr * Math.cos(b), c[1] + rr * Math.sin(b), 0.07]; });
    cells.push({ t: 'torus', R: rr, r: 0.012, n: 20, m: 4, rot: [90, 0, 0], pos: [c[0], c[1], 0.05], color: '#9a3412' });
    for (let k = 0; k < 2; k++) cells.push({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: loop[0], color: '#fef3c7',
      anim: [ { type: 'path', pts: loop, wave: 'saw', rate: 0.6, phase: k / 2 }, { type: 'blink', color: '#c2410c', amount: 0.9, rate: 0.6, phase: k / 2 } ] });
  }
  /* fotoni care ricoșează în zona radiativă */
  const photons = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * 360 * D + 0.3, u = [Math.cos(a), Math.sin(a)], v = [-u[1], u[0]];
    const pts = [0.5, 0.65, 0.8, 0.95, 1.1, 1.25, 1.42].map((r, k) => [u[0] * r + v[0] * (k % 2 ? 0.09 : -0.09), u[1] * r + v[1] * (k % 2 ? 0.09 : -0.09), 0.07]);
    photons.push({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: pts[0], color: '#ffffff', anim: [ { type: 'path', pts, wave: 'saw', rate: 0.35, phase: i / 8 }, { type: 'blink', fade: true, wave: 'window', from: 0.03, to: 0.97, ramp: 0.06, rate: 0.35, phase: i / 8 } ] });
  }
  const flashes = [[0.15, 0.2], [-0.25, 0.05], [0.05, -0.28], [0.3, -0.1], [-0.12, 0.3]].map((p, i) => ({ t: 'sphere', r: 0.09, n: 8, m: 10, pos: [p[0], p[1], 0.09], color: '#ffffff',
    anim: { type: 'blink', fade: true, wave: 'window', from: 0, to: 0.15, ramp: 0.4, rate: 1.3, phase: i * 0.21 } }));
  const wind = [];
  for (let i = 0; i < 14; i++) {
    const a = i * 137.5 * D, b = ((i * 53) % 140 - 70) * D, d = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)];
    wind.push({ t: 'sphere', r: 0.035, n: 6, m: 8, pos: [d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], color: '#fde68a',
      anim: [ { type: 'path', pts: [[d[0] * 2.1, d[1] * 2.1, d[2] * 2.1], [d[0] * 4.6, d[1] * 4.6, d[2] * 4.6]], wave: 'saw', rate: 0.4, phase: i / 14 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: i / 14 } ] });
  }
  /* granulele fotosferei, împrăștiate la întâmplare (generator pseudo-aleatoriu fix) */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const GRAN = Array.from({ length: 46 }, () => [12 + rnd() * 160, -85 + rnd() * 170, 0.05 + rnd() * 0.07, rnd() < 0.5 ? '#f9c74f' : '#f6a821']);
  const prom = (ax, ay, s, ph) => onSurf(ax, ay, [ { t: 'group', anim: [ { type: 'scale', from: 0.85, to: 1.15, rate: 0.5, phase: ph }, { type: 'blink', color: '#fde047', amount: 0.5, rate: 0.5, phase: ph } ], shapes: [
    { t: 'torus', R: 0.32 * s, r: 0.08 * s, n: 22, m: 10, arc: 180, rot: [-90, 0, 0], color: '#f97316' },
    { t: 'torus', R: 0.32 * s, r: 0.035 * s, n: 22, m: 6, arc: 180, rot: [-90, 0, 0], pos: [0, 0.05 * s, 0], color: '#fde047' } ] } ]);

  LIBRARY({
    lang: 'ro',
    id: 'sole',
    title: 'Soarele',
    intro: 'Soarele este cea mai apropiată <b>stea</b> de noi: o minge de gaz fierbinte de 109 ori mai lată decât Pământul. Ne dă lumină și căldură și face să trăiască plantele, animalele și oamenii. Hai să-l deschidem ca pe o portocală și să ne uităm înăuntru!',
    model: {
      rx: 0.3, ry: -0.4, speed: 0.35, height: 480, bg: 'space', fit: 1.0,
      parts: [
        { id: 'fotosfera', name: 'Fotosfera (suprafața)', label: 'Fotosfera', color: '#fbbf24', explode: [4.6, 0.3, -2.6],
          info: '<p>Este „suprafața” luminoasă a Soarelui, cea pe care o vedem (niciodată cu ochiul liber!). Nu este solidă: este gaz la aproximativ <b>5500 °C</b>, tot numai boabe care clocotesc.</p>',
          more: '<p>„Boabele” (granulele) sunt vârfurile unor bule uriașe de gaz fierbinte, late cât Italia, care urcă din interior, se răcesc și coboară la loc în câteva minute.</p>',
          shapes: [ { t: 'sphere', r: R, n: 20, m: 40, hemi: true, rot: [90, 0, 0] } ]
            .concat(GRAN.map(([ax, ay, r, c]) => onSurf(ax, ay, [ { t: 'sphere', r, n: 6, m: 10, scale: [1, 0.1, 1], color: c, decal: 1 } ]))) },
        { id: 'macchie', name: 'Pete solare', color: '#451a03', explode: [4.6, 0.3, -2.6],
          info: '<p>Zone mai „reci” (vorba vine: 3500 °C!) și, de aceea, mai întunecate. O pată poate fi mai mare decât Pământul.</p>',
          more: '<p>Petele apar acolo unde <b>câmpul magnetic</b> al Soarelui este foarte puternic și frânează gazul fierbinte care urcă. Numărul lor crește și scade după un ciclu de aproximativ <b>11 ani</b>.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.22, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.12, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(68, 8, [ { t: 'sphere', r: 0.15, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]),
            onSurf(110, 30, [ { t: 'sphere', r: 0.18, n: 8, m: 14, scale: [1, 0.1, 1], color: '#b45309', decal: 2 }, { t: 'sphere', r: 0.1, n: 8, m: 12, scale: [1, 0.14, 1], color: '#451a03', decal: 3 } ]) ] },
        { id: 'zona-convettiva', name: 'Zona convectivă', label: 'Zona convectivă', color: '#f97316', explode: [0, 0, 0],
          info: '<p>Stratul exterior al interiorului Soarelui. Aici gazul fierbinte <b>urcă</b>, se răcește la suprafață și <b>coboară</b> la loc, ca apa dintr-o oală care fierbe.</p>',
          shapes: [ backHemi(R, '#fbbf24', 0), { t: 'cyl', r: R - 0.03, h: 0.01, n: 48, rot: [90, 0, 0], pos: [0, 0, 0.007], color: '#f97316' }, { t: 'tube', r: R + 0.005, ri: R - 0.05, h: 0.03, n: 40, rot: [90, 0, 0], pos: [0, 0, 0.012], color: '#fde047' } ] },
        { id: 'celle', name: 'Curenți convectivi', label: 'Curenți convectivi', color: '#fef3c7', explode: [0, 0, 0.05], chip: true, noLabel: true,
          info: '<p>Bulele de gaz fac un drum circular continuu: urcă fierbinți (deschise la culoare), cedează căldura la suprafață și coboară mai reci (închise la culoare). Așa ajunge căldura afară.</p>',
          shapes: cells },
        { id: 'zona-radiativa', name: 'Zona radiativă', label: 'Zona radiativă', color: '#fcd34d', explode: [0, 0, 0.05],
          info: '<p>Aici gazul este atât de dens încât nu se mișcă: energia călătorește ca <b>lumină</b> care ricoșează de la o particulă la alta, în zigzag.</p>',
          more: '<p>Un foton poate avea nevoie de la <b>zeci de mii până la sute de mii de ani</b> ca să traverseze această zonă. Lumina care te încălzește astăzi s-a născut în nucleu pe când pe Pământ trăiau mamuții!</p>',
          shapes: [ backHemi(1.45, '#fcd34d', 0.02) ] },
        { id: 'fotoni', name: 'Lumină care ricoșează (fotoni)', label: 'Fotoni', color: '#ffffff', explode: [0, 0, 0.1], chip: true, noLabel: true,
          info: '<p>Mici „pachețele” de lumină, <b>fotonii</b>, pornesc din nucleu și sunt absorbiți și relansați de miliarde de ori înainte să iasă.</p>',
          shapes: photons },
        { id: 'nucleo', name: 'Nucleu', color: '#fffbeb', explode: [0, 0, 0.1],
          info: '<p>Centrul Soarelui, la aproximativ <b>15 milioane de grade</b>. Aici hidrogenul se transformă în heliu prin <b>fuziune nucleară</b>: fiecare fulger este energie care se naște.</p>',
          more: '<p>În fiecare secundă, Soarele transformă aproximativ 600 de milioane de tone de hidrogen în heliu și „pierde” 4 milioane de tone de masă, care devin energie (E = mc²). Are combustibil pentru încă <b>5 miliarde de ani</b>.</p>',
          shapes: [ backHemi(0.55, '#fffbeb', 0.04) ].concat(flashes) },
        { id: 'protuberanze', name: 'Protuberanțe', color: '#f97316', explode: [0, 0.4, 0],
          info: '<p>Arcuri uriașe de gaz incandescent care se ridică de la suprafață, urmând liniile <b>câmpului magnetic</b>. Într-un arc ar încăpea zeci de Pământuri!</p>',
          shapes: [ prom(0, 0, 1.1, 0), prom(-35, 90, 0.8, 0.3), prom(30, -90, 0.9, 0.6), prom(-60, 20, 0.7, 0.45) ] },
        { id: 'brillamento', name: 'Erupție solară (flare)', label: 'Erupție', color: '#ffffff', explode: [4.6, 0.3, -2.6],
          info: '<p>O explozie bruscă la suprafață, lângă pete: în câteva minute eliberează tot atâta energie cât milioane de vulcani.</p>',
          more: '<p>Erupțiile și marile „bule” de gaz aruncate (CME) pot perturba sateliți, GPS-ul și rețelele electrice de pe Pământ și pot aprinde aurore foarte frumoase.</p>',
          shapes: [ onSurf(62, -12, [ { t: 'sphere', r: 0.2, n: 14, m: 20, color: '#fef9c3', alpha: 0.9, anim: [ { type: 'blink', fade: true, wave: 'window', from: 0.1, to: 0.3, ramp: 0.3 }, { type: 'scale', from: 0.4, to: 1.4, wave: 'window', win: [0.1, 0.3] } ] } ]) ] },
        { id: 'corona', name: 'Coroana', color: '#fde68a', alpha: 0.12, explode: [0, 0, 0],
          info: '<p>O atmosferă foarte subțire care înconjoară Soarele și este mai fierbinte decât suprafața: peste <b>1 milion de grade</b>. Se vede cu ochiul liber doar în timpul <b>eclipselor totale</b>.</p>',
          more: '<p>De ce este coroana atât de fierbinte rămâne una dintre marile mistere ale fizicii solare. Sonda <b>Parker Solar Probe</b> a traversat-o ca să o studieze.</p>',
          shapes: [ { t: 'sphere', r: 2.45, n: 18, m: 30, anim: { type: 'scale', from: 1, to: 1.05, rate: 0.4 } }, { t: 'sphere', r: 2.9, n: 18, m: 30, alpha: 0.06, anim: { type: 'scale', from: 1.04, to: 0.98, rate: 0.4 } } ] },
        { id: 'vento-solare', name: 'Vântul solar', label: 'Vântul solar', color: '#fde68a', explode: [0, 0, 0],
          info: '<p>De la Soare pornește fără încetare un „vânt” de particule foarte rapide (400 km pe secundă!). Câmpul magnetic al Pământului ne servește drept scut.</p>',
          more: '<p>Când particulele vântului solar intră în atmosferă lângă poli, fac aerul să strălucească în verde și violet: acestea sunt <b>aurorele polare</b>.</p>',
          shapes: wind },
        { id: 'terra', name: 'Pământul (la scară)', label: 'Pământ (la scară)', color: '#3b82f6', pos: [3.3, 1.5, 0.4], explode: [0.5, 0.3, 0],
          info: '<p>Acest punctuleț este <b>Pământul</b>, desenat la aceeași scară cu Soarele. În Soare ar încăpea mai mult de <b>un milion</b> de Pământuri!</p>',
          more: '<p>Distanța însă nu este la scară: Pământul se află la aproximativ <b>150 de milioane de km</b> de Soare. La această scară ar fi la mai mult de 200 de metri de ecran!</p>',
          shapes: [ { t: 'sphere', r: 0.04, n: 8, m: 12 }, { t: 'torus', R: 0.12, r: 0.008, n: 20, m: 4, rot: [90, 0, 0], color: '#93c5fd', alpha: 0.7 } ] }
      ]
    },
    steps: [
      { icon: '☀️', title: 'Steaua noastră', explode: 0,
        html: '<p>Soarele este o <b>stea</b> ca cele pe care le vezi noaptea, dar mult mai aproape: se află la 150 de milioane de km, iar lumina lui ajunge la noi în aproximativ <b>8 minute</b>.</p><p class="tip">⚠️ Nu te uita niciodată direct la Soare, nici măcar cu ochelari de soare: îți strică ochii.</p>' },
      { icon: '🍊', title: 'Hai să-l deschidem ca pe o portocală', explode: 1, focus: ['zona-convettiva', 'zona-radiativa', 'nucleo', 'fotosfera'],
        html: '<p>Soarele este făcut din <b>straturi</b>, ca o ceapă: în centru <b>nucleul</b>, apoi <b>zona radiativă</b>, <b>zona convectivă</b> și, în sfârșit, suprafața luminoasă, <b>fotosfera</b>.</p><p>Totul este gaz, nimic solid: mai ales <b>hidrogen</b> (3/4) și <b>heliu</b>.</p>' },
      { icon: '⚛️', title: 'În nucleu se naște energia', explode: 1, focus: ['nucleo'], zoom: 2.2, view: { rx: 0.1, ry: -0.15 },
        html: '<p>În nucleu sunt <b>15 milioane de grade</b>. Hidrogenul se unește și devine heliu: aceasta este <b>fuziunea nucleară</b>. Fiecare fulger eliberează energie care va deveni lumină și căldură.</p>' },
      { icon: '🔦', title: 'Lumina ricoșează mii de ani', explode: 1, focus: ['zona-radiativa', 'fotoni', 'nucleo'], zoom: 1.5, view: { rx: 0.1, ry: -0.15 },
        html: '<p>În <b>zona radiativă</b> energia călătorește ca lumină, dar gazul este atât de dens încât fotonii ricoșează în zigzag: ca să iasă au nevoie de <b>mii de ani</b>.</p>' },
      { icon: '♨️', title: 'Soarele clocotește', explode: 1, focus: ['zona-convettiva', 'celle'], zoom: 1.3, view: { rx: 0.1, ry: -0.15 },
        html: '<p>În <b>zona convectivă</b> gazul se mișcă în mari cercuri: urcă fierbinte, se răcește la suprafață și coboară la loc, ca apa care fierbe în oală. Acești curenți se numesc <b>mișcări convective</b>.</p>' },
      { icon: '🌑', title: 'Pete, arcuri și explozii', explode: 0, focus: ['fotosfera', 'macchie', 'protuberanze', 'brillamento', 'celle', 'fotoni'],
        html: '<p>Pe suprafață apar <b>pete</b> întunecate (zone mai reci), arcuri uriașe de gaz numite <b>protuberanțe</b> și fulgere bruște, <b>erupțiile</b>. Toate sunt provocate de <b>magnetismul</b> Soarelui.</p>' },
      { icon: '🌬️', title: 'Coroana și vântul solar', explode: 0, focus: ['corona', 'vento-solare', 'terra', 'fotosfera', 'celle', 'fotoni'], view: { rx: 0.25, ry: -0.7 },
        html: '<p>În jurul Soarelui se află <b>coroana</b>, foarte fierbinte, dar foarte subțire. De acolo pornește <b>vântul solar</b>, un flux de particule care ajunge până la Pământ și aprinde <b>aurorele polare</b>.</p><p class="tip">🌍 Uită-te la punctul albastru: este Pământul la aceeași scară cu Soarele!</p>' }
    ],
    facts: [
      { icon: '⚖️', title: 'Gigantul Sistemului Solar', html: 'Soarele conține <b>99,8 %</b> din toată masa Sistemului Solar. Toate planetele împreună sunt „fărâmituri”.' },
      { icon: '🕗', title: 'Lumină de acum 8 minute', html: 'Când te uiți la lumina Soarelui, vezi Soarele așa cum era acum <b>8 minute și 20 de secunde</b>: este timpul de care are nevoie lumina ca să ajungă.' },
      { icon: '🌗', title: 'Eclipsele', html: 'În timpul unei eclipse totale, Luna acoperă exact Soarele: Soarele este de 400 de ori mai mare decât Luna, dar și de 400 de ori mai departe!' },
      { icon: '🌱', title: 'Motorul vieții', html: 'Plantele folosesc lumina Soarelui ca să-și fabrice hrana (fotosinteza). Și mâncarea pe care o mănânci este, până la urmă, energie de la Soare.' },
      { icon: '🔄', title: 'Se rotește și el', html: 'Soarele se rotește în jurul lui însuși, dar nu tot odată: la ecuator face o rotație în aproximativ <b>25 de zile</b>, iar lângă poli în peste 30.' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce este Soarele?', options: ['O planetă', 'O stea', 'O cometă', 'Un satelit'], answer: 1, explain: 'Soarele este o stea: produce lumină și căldură prin fuziune nucleară.' },
      { type: 'mc', q: 'În ce parte a Soarelui are loc fuziunea nucleară?', options: ['În coroană', 'În fotosferă', 'În nucleu', 'În pete'], answer: 2, explain: 'Numai în nucleu temperatura și presiunea sunt destul de mari.' },
      { type: 'num', q: 'Câte minute (aproximativ) are nevoie lumina Soarelui ca să ajungă pe Pământ?', answer: 8, tol: 1, unit: 'min', explain: 'Aproximativ 8 minute și 20 de secunde.' },
      { type: 'tf', q: 'Petele solare sunt zone mai fierbinți decât restul suprafeței.', answer: false, explain: 'Sunt mai reci (aproximativ 3500 °C față de 5500 °C), de aceea par întunecate.' },
      { type: 'order', q: 'Pune în ordine straturile Soarelui, din centru spre exterior', items: ['Nucleu', 'Zona radiativă', 'Zona convectivă', 'Fotosfera', 'Coroana'], explain: 'De la nucleu, unde se naște energia, până la coroană, atmosfera exterioară.' },
      { type: 'mc', q: 'Ce provoacă aurorele polare pe Pământ?', options: ['Luna', 'Vântul solar', 'Vulcanii', 'Norii'], answer: 1, explain: 'Particulele vântului solar fac aerul să strălucească lângă poli.' }
    ]
  });
})();
