/* Il frigorifero (combinato: freezer in alto, frigo in basso). Davanti = +z, alto = +y, le porte sono aperte.
   Circuito del refrigerante: compressore → condensatore (dietro) → capillare → evaporatore (nel freezer) → compressore. */
(function () {
  const ZC = -0.66; // piano del condensatore (dietro al mobile)
  const serp = (x0, x1, ys, z) => { const out = []; ys.forEach((y, i) => { const a = i % 2 ? x1 : x0, b = i % 2 ? x0 : x1; out.push([a, y, z], [b, y, z]); }); return out; };
  const CROWS = Array.from({ length: 9 }, (_, i) => 2.75 - i * 0.25);
  const COND = serp(0.45, -0.45, CROWS, ZC);
  const EROWS = [2.25, 2.42, 2.59, 2.76];
  const EVAP = serp(-0.42, 0.42, EROWS, -0.44);
  const HOT = [[0.2, 0.46, -0.8], [0.5, 0.62, -0.8], [0.55, 2.75, ZC], ...COND, [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.48, 2.25, -0.5]];
  const COLD = [[-0.48, 2.25, -0.5], ...EVAP, [0.5, 2.76, -0.5], [0.5, 2.76, -0.76], [0.4, 0.75, -0.76], [0.28, 0.46, -0.8]];
  const drops = (path, color, n, rate) => Array.from({ length: n }, (_, k) => ({ t: 'sphere', r: 0.045, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate, phase: k / n } }));
  const glass = (y) => ({ t: 'box', s: [1.04, 0.025, 0.9], pos: [0, y, 0.0], div: 2 });
  /* porta: parte dal cardine (x = 0) e si estende verso +x; aperta ruotando intorno a y */
  const DOOR_OPEN = -112;

  LIBRARY({
    id: 'frigorifero',
    lang: 'ro',
    title: 'Frigiderul',
    intro: 'Frigiderul nu „produce” frigul: <b>scoate căldura</b> din alimente și o aruncă afară, în spate. O face cu un lichid special care călătorește într-un circuit închis, se evaporă și se condensează mereu. Urmărește-i călătoria!',
    model: {
      rx: 0.18, ry: -0.5, speed: 0.35, height: 490,
      parts: [
        { id: 'mobile', name: 'Corpul (caseta)', label: 'Corp', color: '#f1f5f9', alpha: 0.3, explode: [0, 0, 0],
          info: '<p>Este marea „cutie” a frigiderului: pe dinafară este din tablă vopsită, pe dinăuntru din plastic alb, ușor de curățat.</p>',
          shapes: [ { t: 'box', s: [1.2, 3.0, 0.05], pos: [0, 1.5, -0.525] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [-0.57, 1.5, 0] }, { t: 'box', s: [0.06, 3.0, 1.1], pos: [0.57, 1.5, 0] },
            { t: 'box', s: [1.2, 0.06, 1.1], pos: [0, 2.97, 0] }, { t: 'box', s: [1.2, 0.12, 1.1], pos: [0, 0.06, 0] },
            { t: 'box', s: [1.08, 0.06, 1.0], pos: [0, 2.05, 0.03], color: '#e2e8f0', alpha: 0.7 },
            { t: 'box', s: [1.2, 0.08, 0.04], pos: [0, 0.04, 0.56], color: '#64748b', alpha: 0.8 } ] },
        { id: 'isolamento', name: 'Izolația (spuma)', label: 'Izolația', color: '#fde68a', alpha: 0.16, explode: [0, 0, -0.35],
          info: '<p>Între tabla de la exterior și plasticul de la interior se află un strat de <b>spumă</b> plină de bulițe de aer. Aerul nemișcat lasă să treacă foarte puțină căldură: așa căldura din bucătărie nu pătrunde.</p>',
          more: '<p>Este spumă de <b>poliuretan</b>, groasă de 4–7 cm. Este același principiu ca la geaca de puf sau la termos: un material <b>izolator</b> încetinește trecerea căldurii, care merge întotdeauna de la corpul mai cald la cel mai rece.</p>',
          shapes: [ { t: 'box', s: [1.08, 2.8, 0.06], pos: [0, 1.52, -0.47] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [-0.515, 1.52, 0.0] }, { t: 'box', s: [0.05, 2.8, 0.98], pos: [0.515, 1.52, 0.0] } ] },
        { id: 'porta-frigo', name: 'Ușa frigiderului', label: 'Ușa', color: '#e5e7eb', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.35],
          info: '<p>Și ușa este plină cu spumă izolatoare. Pe partea interioară sunt <b>rafturile</b> pentru sticle, ouă și unt.</p>',
          shapes: [ { t: 'box', s: [1.2, 1.9, 0.09], pos: [0.6, 0.95, 0.045] }, { t: 'box', s: [1.04, 1.74, 0.05], pos: [0.6, 0.95, -0.02], color: '#f8fafc' },
            { t: 'box', s: [0.06, 0.9, 0.05], pos: [1.1, 1.3, 0.12], color: '#94a3b8' },
            ...[0.35, 0.85, 1.35].map((y) => ({ t: 'group', pos: [0.6, y, -0.13], shapes: [ { t: 'box', s: [0.96, 0.03, 0.17] }, { t: 'box', s: [0.96, 0.14, 0.02], pos: [0, 0.07, -0.085], color: '#bae6fd', alpha: 0.6 } ] })),
            { t: 'cyl', r: 0.06, h: 0.42, n: 14, pos: [0.4, 0.58, -0.13], color: '#16a34a', alpha: 0.85 }, { t: 'cyl', r: 0.025, h: 0.12, n: 10, pos: [0.4, 0.85, -0.13], color: '#16a34a', alpha: 0.85 },
            { t: 'cyl', r: 0.065, h: 0.3, n: 14, pos: [0.65, 0.52, -0.13], color: '#f8fafc' }, { t: 'box', s: [0.18, 0.2, 0.09], pos: [0.85, 0.47, -0.13], color: '#fde047' } ] },
        { id: 'porta-freezer', name: 'Ușa congelatorului', label: 'Ușa congelatorului', color: '#e5e7eb', pos: [-0.6, 2.08, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0.2, 0.35],
          info: '<p><b>Congelatorul</b> are ușa lui: înăuntru se ajunge la <b>−18 °C</b>, destul ca să transforme apa în gheață și să păstreze alimentele luni de zile.</p>',
          shapes: [ { t: 'box', s: [1.2, 0.9, 0.09], pos: [0.6, 0.45, 0.045] }, { t: 'box', s: [1.04, 0.76, 0.05], pos: [0.6, 0.45, -0.02], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.45, 0.05], pos: [1.1, 0.3, 0.12], color: '#94a3b8' } ] },
        { id: 'guarnizione', name: 'Garnitura magnetică', label: 'Garnitura', color: '#475569', pos: [-0.6, 0.12, 0.56], rot: [0, DOOR_OPEN, 0], explode: [-0.35, 0, 0.6],
          info: '<p>Marginea de cauciuc din jurul ușii conține un <b>magnet</b> care o ține bine închisă pe corpul de metal: așa aerul rece nu scapă.</p>',
          more: '<p>Fă o încercare: prinde o foaie de hârtie în ușă. Dacă iese ușor, garnitura este stricată, iar frigiderul consumă mai mult. Un magnet de frigider se lipește tocmai pentru că tabla este din <b>fier</b>.</p>',
          shapes: [ { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 0.06, -0.02] }, { t: 'box', s: [1.12, 0.04, 0.04], pos: [0.6, 1.84, -0.02] },
            { t: 'box', s: [0.04, 1.82, 0.04], pos: [0.06, 0.95, -0.02] }, { t: 'box', s: [0.04, 1.82, 0.04], pos: [1.14, 0.95, -0.02] } ] },
        { id: 'ripiani', name: 'Rafturi și sertare', label: 'Rafturi', color: '#bae6fd', alpha: 0.45, explode: [0, 0, 0.7],
          info: '<p>Rafturi de sticlă și sertare pentru fructe și legume. Jos, lângă sertarul pentru legume, aerul este mai puțin rece; sus este mai rece.</p>',
          more: '<p>Aerul rece este mai <b>dens</b> și coboară, cel mai cald urcă: se formează zone cu temperaturi diferite. De aceea carnea și peștele se pun pe raftul cel mai rece, iar legumele în sertar.</p>',
          shapes: [ glass(0.55), glass(1.05), glass(1.5), { t: 'box', s: [0.98, 0.32, 0.8], pos: [0, 0.3, 0.02], color: '#a7f3d0' }, glass(2.45) ] },
        { id: 'cibi', name: 'Alimente', color: '#ef4444', explode: [0, 0, 1.1],
          info: '<p>Alimentele se păstrează mai bine la rece pentru că <b>bacteriile</b> și mucegaiurile, care le strică, cresc foarte încet la rece.</p>',
          more: '<p>În frigider (aproximativ 4 °C) bacteriile încetinesc; în congelator (−18 °C) se opresc aproape complet, dar nu mor: de aceea un aliment dezghețat trebuie consumat repede.</p>',
          shapes: [ { t: 'sphere', r: 0.11, n: 10, m: 14, pos: [-0.25, 0.66, 0.05] }, { t: 'sphere', r: 0.1, n: 10, m: 14, pos: [-0.05, 0.65, 0.12], color: '#84cc16' },
            { t: 'cyl', r: 0.17, h: 0.12, n: 20, pos: [0.25, 1.13, 0.0], color: '#fde68a' }, { t: 'box', s: [0.3, 0.16, 0.2], pos: [-0.2, 1.15, -0.05], color: '#38bdf8' },
            { t: 'cyl', r: 0.07, h: 0.32, n: 14, pos: [0.3, 1.68, -0.15], color: '#f8fafc' }, { t: 'cyl', r: 0.07, h: 0.06, n: 14, pos: [0.3, 1.87, -0.15], color: '#2563eb' },
            { t: 'box', s: [0.36, 0.1, 0.24], pos: [-0.2, 2.53, 0.08], color: '#c4b5fd' }, { t: 'box', s: [0.28, 0.08, 0.2], pos: [0.2, 2.52, 0.1], color: '#e0f2fe' },
            { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.0, 0.42, 0.15], color: '#f97316' }, { t: 'sphere', r: 0.06, n: 8, m: 10, pos: [0.14, 0.41, 0.1], color: '#ef4444' } ] },
        { id: 'compressore', name: 'Compresorul', color: '#1f2937', pos: [0.2, 0.28, -0.8], explode: [0.4, -0.2, -0.8],
          info: '<p>Este „inima” frigiderului, o pompă cu motor electric. <b>Strânge</b> gazul frigorific: comprimat, gazul devine fierbinte și aleargă spre condensator.</p>',
          more: '<p>Când comprimi un gaz, îi dai energie, iar temperatura lui crește (simți și când umfli roata bicicletei: pompa se încălzește). Bâzâitul pe care îl auzi din când în când este compresorul care pornește.</p>',
          anim: { type: 'move', dir: [1, 0, 0], amp: 0.006, wave: 'sin', rate: 9 },
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 20, scale: [0.26, 0.2, 0.2] }, { t: 'cyl', r: 0.24, h: 0.04, n: 24, pos: [0, -0.02, 0], color: '#111827' },
            { t: 'box', s: [0.6, 0.04, 0.4], pos: [0, -0.2, 0], color: '#475569' }, { t: 'box', s: [0.12, 0.1, 0.08], pos: [-0.2, 0.05, 0.16], color: '#0f172a' } ] },
        { id: 'condensatore', name: 'Condensatorul (grila din spate)', label: 'Condensator', color: '#334155', explode: [0, 0, -0.9],
          info: '<p>Este grila neagră din spatele frigiderului. Gazul fierbinte o parcurge, își cedează căldura aerului din bucătărie și se răcește până devine <b>lichid</b>. Atinge-o (ușor!): este caldă.</p>',
          more: '<p>Trecerea de la gaz la lichid se numește <b>condensare</b> și eliberează căldură, ca aburul care se condensează pe capacul oalei. Dacă grila este plină de praf sau lipită de perete, căldura iese greu, iar frigiderul consumă mai mult.</p>',
          shapes: [ { t: 'pipe', r: 0.022, n: 6, pts: COND }, ...Array.from({ length: 10 }, (_, k) => ({ t: 'cyl', r: 0.006, h: 2.1, n: 4, pos: [-0.42 + k * 0.093, 1.75, ZC - 0.03], color: '#475569' })) ] },
        { id: 'capillare', name: 'Tubul capilar (destindere)', label: 'Capilar', color: '#b45309', explode: [-0.5, 0, -0.6],
          info: '<p>Este un tubuleț foarte subțire, ca un spaghetel de cupru. Lichidul trece cu greu și, ieșind pe partea cealaltă, găsește mult spațiu: presiunea lui scade brusc și devine <b>foarte rece</b>.</p>',
          more: '<p>Când presiunea scade deodată, lichidul începe să fiarbă chiar și la −25 °C. Ceva asemănător se întâmplă cu un spray: dacă pulverizezi mult timp, se răcește.</p>',
          shapes: [ { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.45, 0.75, ZC], [-0.52, 0.65, ZC], [-0.52, 0.65, -0.58], [-0.5, 1.4, -0.55], [-0.48, 2.25, -0.5]] },
            { t: 'cyl', r: 0.035, h: 0.18, n: 12, pos: [-0.52, 0.55, ZC], color: '#78716c' } ] },
        { id: 'evaporatore', name: 'Evaporatorul', color: '#93c5fd', explode: [0, 0.45, 0.25],
          info: '<p>În congelator, în spatele peretelui, merge o serpentină înghețată. Aici agentul frigorific se <b>evaporă</b>: ca să facă asta are nevoie de căldură și o „fură” din aer și din alimente. Iată frigul!</p>',
          more: '<p>Ca să se evapore, un lichid are nevoie de energie (<b>căldura latentă</b>). Este același motiv pentru care ți-e frig când ieși din apă: transpirația sau apa care se evaporă iau căldură de la tine. Pe evaporator se formează adesea <b>chiciură</b>.</p>',
          shapes: [ { t: 'pipe', r: 0.026, n: 6, pts: EVAP }, { t: 'box', s: [0.95, 0.68, 0.015], pos: [0, 2.5, -0.465], color: '#dbeafe', alpha: 0.7 } ] },
        { id: 'refrigerante-caldo', name: 'Agent frigorific cald (comprimat)', label: 'Agent frigorific cald', color: '#f97316', noLabel: true, explode: [0, 0, -0.9],
          info: '<p>Ieșit din compresor, agentul frigorific este un <b>gaz fierbinte și comprimat</b>. În condensator pierde căldură și devine lichid.</p>',
          shapes: drops(HOT, '#f97316', 16, 0.35) },
        { id: 'refrigerante-freddo', name: 'Agent frigorific rece', label: 'Agent frigorific rece', color: '#2563eb', noLabel: true, explode: [0, 0.45, 0.25],
          info: '<p>După capilar, agentul frigorific este <b>rece</b> și la presiune joasă. În evaporator absoarbe căldura din frigider și redevine gaz, gata pentru compresor.</p>',
          more: '<p>Astăzi se folosesc agenți frigorifici precum <b>izobutanul</b> (R600a), care nu dăunează stratului de ozon. Vechii CFC, în schimb, îl distrugeau și au fost interziși în 1987 (Protocolul de la Montreal).</p>',
          shapes: drops(COLD, '#2563eb', 10, 0.5) },
        { id: 'calore', name: 'Căldura care iese', label: 'Căldură', color: '#ef4444', alpha: 0.7, explode: [0, 0, -1.1],
          info: '<p>Căldura luată din alimente, plus cea a motorului, iese prin condensator și încălzește puțin bucătăria. Aerul cald <b>urcă</b>.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.05, n: 6, m: 8, pos: [-0.35 + (k % 4) * 0.23, 0.9 + (k > 3 ? 0.9 : 0), -0.8],
            anim: [{ type: 'move', dir: [0, 1, 0], amp: 0.9, wave: 'saw', rate: 0.6, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.6, phase: k / 8 }] })) },
        { id: 'aria-fredda', name: 'Aer rece', label: 'Aer rece', color: '#7dd3fc', alpha: 0.8, explode: [0, 0, 0.7],
          info: '<p>Aerul răcit de evaporator este mai greu și <b>coboară</b> pe rafturi, în timp ce aerul mai călduț urcă: aerul se învârte singur în frigider.</p>',
          shapes: Array.from({ length: 8 }, (_, k) => ({ t: 'sphere', r: 0.04, n: 6, m: 8, pos: [-0.3 + (k % 4) * 0.2, 1.95, 0.25 - (k > 3 ? 0.25 : 0)],
            anim: [{ type: 'move', dir: [0, -1, 0], amp: 1.5, wave: 'saw', rate: 0.4, phase: k / 8 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.4, phase: k / 8 }] })) },
        { id: 'termostato', name: 'Termostatul și lumina', label: 'Termostat', color: '#f8fafc', pos: [0.38, 1.92, 0.25], explode: [0.4, 0, 0.6],
          info: '<p><b>Termostatul</b> măsoară temperatura: când înăuntru este destul de frig oprește compresorul, când se încălzește îl pornește la loc. Alături este becul care se aprinde când deschizi ușa.</p>',
          more: '<p>Temperatura potrivită pentru frigider este de aproximativ <b>4 °C</b>, pentru congelator <b>−18 °C</b>. De fiecare dată când lași ușa deschisă intră aer cald și umed, iar compresorul trebuie să lucreze mai mult.</p>',
          shapes: [ { t: 'box', s: [0.3, 0.14, 0.2] }, { t: 'cyl', r: 0.045, h: 0.04, n: 16, rot: [90, 0, 0], pos: [0.06, 0, 0.11], color: '#475569' },
            { t: 'sphere', r: 0.05, n: 8, m: 12, pos: [-0.08, -0.08, 0.04], color: '#fef9c3', anim: { type: 'blink', color: '#ffffff', wave: 'sin01', rate: 0.5 } } ] }
      ]
    },
    steps: [
      { icon: '🧊', title: 'Frigul nu se face: se scoate căldura', explode: 0,
        html: '<p>Frigiderul este o <b>pompă de căldură</b>: ia căldura dinăuntru (din alimente) și o aruncă afară, în bucătărie. Fără căldură, înăuntru rămâne frigul.</p><p>„Camionul” care transportă căldura este un lichid special, <b>agentul frigorific</b>, care circulă într-un circuit închis de țevi.</p>' },
      { icon: '🔄', title: 'Călătoria agentului frigorific', focus: ['compressore', 'condensatore', 'capillare', 'evaporatore', 'refrigerante-caldo', 'refrigerante-freddo'], explode: 0.3, view: { rx: 0.25, ry: -2.3 },
        html: '<p>Agentul frigorific face mereu același drum: <b>compresor → condensator → capilar → evaporator</b> și iar la compresor.</p><p>Cu portocaliu este cald și comprimat, cu albastru este rece. Își schimbă starea fără încetare: din gaz în lichid și din lichid în gaz.</p>' },
      { icon: '💪', title: '1 · Compresorul strânge', focus: ['compressore', 'refrigerante-caldo'], explode: 0.2, view: { rx: 0.42, ry: -2.5 },
        html: '<p><b>Compresorul</b> este o pompă cu motor electric. Strânge gazul frigorific: un gaz comprimat se <b>încălzește</b>, exact ca pompa de bicicletă când umfli o roată.</p>' },
      { icon: '♨️', title: '2 · Condensatorul aruncă căldura afară', focus: ['condensatore', 'refrigerante-caldo', 'calore'], explode: 0.25, view: { rx: 0.15, ry: -2.75 },
        html: '<p>Gazul fierbinte străbate grila neagră din spate. Își cedează căldura aerului din bucătărie, se răcește și devine <b>lichid</b> (condensare).</p><p class="tip">🖐️ Iată de ce în spatele frigiderului aerul este călduț: este căldura scoasă din alimentele tale!</p>' },
      { icon: '🍝', title: '3 · Capilarul: presiunea scade, temperatura scade', focus: ['capillare', 'refrigerante-caldo', 'refrigerante-freddo', 'evaporatore'], explode: 0.2, view: { rx: 0.2, ry: -2.2 },
        html: '<p>Lichidul trece printr-un tubuleț subțire cât un spaghetel. La ieșire găsește mult spațiu: presiunea scade brusc, iar agentul frigorific devine <b>înghețat</b>, sub −20 °C.</p>' },
      { icon: '❄️', title: '4 · Evaporatorul fură căldura', focus: ['evaporatore', 'refrigerante-freddo', 'aria-fredda', 'cibi', 'ripiani'], explode: 0, view: { rx: 0.15, ry: -0.35 },
        html: '<p>În <b>evaporator</b> agentul frigorific fierbe și redevine gaz. Ca să se evapore are nevoie de căldură și o ia din aer și din alimente: așa se răcește frigiderul.</p><p>Aerul rece este mai greu și <b>coboară</b> pe rafturi.</p><p class="tip">💧 Ți se întâmplă și ție: când ieși din piscină, apa care se evaporă de pe piele ia căldură de la tine și îți e frig.</p>' },
      { icon: '🧱', title: 'Păstrarea frigului înăuntru', focus: ['isolamento', 'guarnizione', 'porta-frigo', 'porta-freezer', 'termostato'], explode: 0.45, view: { rx: 0.2, ry: -0.75 },
        html: '<p>Pereții și ușile sunt plini de <b>spumă izolatoare</b>, iar <b>garnitura magnetică</b> închide bine ușa. <b>Termostatul</b> pornește compresorul doar când e nevoie.</p><p class="tip">🚪 Nu ține ușa deschisă mult timp și nu pune alimente fierbinți în frigider: compresorul ar trebui să lucreze mult mai mult.</p>' }
    ],
    facts: [
      { icon: '🏔️', title: 'Înainte de frigider: ghețăriile', html: 'Odinioară alimentele se păstrau în <b>ghețării</b>: gropi sau încăperi în care se punea zăpada strânsă iarna, acoperită cu paie ca să țină până vara.' },
      { icon: '🔁', title: 'Un frigider pe dos', html: '<b>Aparatul de aer condiționat</b> și <b>pompa de căldură</b> care încălzește casele funcționează ca un frigider: mută căldura dintr-un loc în altul.' },
      { icon: '🧪', title: 'Un gaz prietenos cu ozonul', html: 'Vechile frigidere foloseau gaze (CFC) care distrugeau stratul de ozon. Din 1987 sunt interzise în toată lumea, iar astăzi stratul de ozon se vindecă.' },
      { icon: '⚡', title: 'Mereu pornit', html: 'Frigiderul este singurul electrocasnic pornit zi și noapte: de aceea merită să-l alegi cu o clasă energetică înaltă și să ții curată grila din spate.' },
      { icon: '🧑‍🔬', title: 'Einstein și frigiderul', html: 'Și Albert Einstein, în 1930, a brevetat împreună cu Leó Szilárd un frigider fără piese în mișcare!' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce face de fapt un frigider?', options: ['Produce frig din nimic', 'Duce căldura dinăuntru în afară', 'Folosește gheață cumpărată', 'Suflă aer din exterior'], answer: 1, explain: 'Frigiderul este o pompă de căldură: scoate căldura din interior și o aruncă afară prin condensator.' },
      { type: 'order', q: 'Pune în ordine drumul agentului frigorific, începând de la compresor', items: ['Compresorul', 'Condensatorul', 'Capilarul', 'Evaporatorul'], explain: 'Comprimat și cald, apoi lichid în condensator, rece după capilar, se evaporă în congelator și se întoarce la compresor.' },
      { type: 'mc', q: 'De ce în spatele frigiderului aerul este călduț?', options: ['Este o sobiță', 'Condensatorul aruncă afară căldura scoasă din alimente', 'Becul încălzește', 'Este un defect'], answer: 1, explain: 'În condensator, agentul frigorific cedează aerului din bucătărie căldura luată din interiorul frigiderului.' },
      { type: 'tf', q: 'Când un lichid se evaporă, absoarbe căldură din ceea ce îl înconjoară.', answer: true, explain: 'Pentru a se evapora este nevoie de energie: de aceea evaporatorul răcește frigiderul (iar transpirația răcește pielea).' },
      { type: 'mc', q: 'La ce servește spuma din pereți?', options: ['Ca să facă frigiderul mai greu', 'Ca să izoleze: căldura din bucătărie pătrunde foarte puțin', 'Ca să parfumeze mâncarea', 'Ca să facă lumină'], answer: 1, explain: 'Spuma plină de bulițe de aer este un izolator termic excelent.' },
      { type: 'num', q: 'La câte grade sub zero se ține de obicei un congelator? (scrie doar numărul, fără minus)', answer: 18, explain: 'Congelatorul lucrează la aproximativ −18 °C; frigiderul la aproximativ 4 °C.' }
    ]
  });
})();
