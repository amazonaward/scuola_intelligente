/* L'elicottero (monorotore con rotore di coda). Muso verso +x, alto = +y, il rotore principale gira intorno a y sopra la cabina.
   Il rotore principale gira in senso antiorario visto dall'alto; la fusoliera tenderebbe a girare al contrario (coppia). */
(function () {
  const D = Math.PI / 180, MX = 0.25, HUB = 2.08, BL = 3.1;
  const blade = (a) => ({ t: 'group', rot: [0, a, 0], shapes: [
    { t: 'box', s: [BL, 0.035, 0.24], pos: [BL / 2 + 0.2, 0, 0], rot: [6, 0, 0], color: '#1f2937', div: 1 },
    { t: 'box', s: [0.25, 0.04, 0.245], pos: [BL + 0.1, 0, 0], rot: [6, 0, 0], color: '#facc15' },
    { t: 'box', s: [0.4, 0.06, 0.1], pos: [0.28, 0, 0], color: '#6b7280' } ] });
  const skid = (z) => [ { t: 'pipe', r: 0.045, n: 10, curve: true, pts: [[-0.9, 0.0, z], [0.9, 0.0, z], [1.25, 0.06, z], [1.4, 0.2, z]] },
    { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[0.6, 0.0, z], [0.6, 0.25, z * 0.9], [0.6, 0.45, z * 0.6]] }, { t: 'pipe', r: 0.035, n: 8, curve: true, pts: [[-0.5, 0.0, z], [-0.5, 0.25, z * 0.9], [-0.5, 0.45, z * 0.6]] } ];
  /* aria spinta in basso dal rotore */
  const DOWN = Array.from({ length: 16 }, (_, k) => { const a = (k / 16) * 360 * D, r = 0.9 + (k % 3) * 0.7; return { t: 'sphere', r: 0.05, n: 5, m: 8, pos: [MX + r * Math.cos(a), HUB + 0.1, r * Math.sin(a)],
    anim: [{ type: 'move', dir: [0.12 * Math.cos(a), -1, 0.12 * Math.sin(a)], amp: 2.4, wave: 'saw', rate: 0.8, phase: (k * 0.29) % 1 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.8, phase: (k * 0.29) % 1 }] }; });
  const arrow = (pos, rot, len, color) => ({ t: 'group', pos, rot, shapes: [ { t: 'cyl', r: 0.05, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.13, h: 0.28, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    id: 'elicottero',
    lang: 'ro',
    title: 'Elicopterul',
    intro: 'Elicopterul poate urca pe verticală, poate sta <b>nemișcat în aer</b> și poate zbura în orice direcție. Secretul? „Aripile” lui se învârt! <b>Rotorul</b> rotește palele lungi care împing aerul în jos.',
    model: {
      rx: 0.3, ry: -0.55, speed: 0.4, height: 470, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'fusoliera', name: 'Fuzelajul', color: '#dc2626', explode: [0, 0, 0],
          info: '<p>Este corpul elicopterului: înăuntru sunt piloții, pasagerii sau, la elicopterele de salvare, targa și medicii.</p>',
          shapes: [ { t: 'sphere', r: 1, n: 14, m: 24, pos: [0.35, 0.95, 0], scale: [1.35, 0.72, 0.68] },
            { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, 0.685], color: '#f8fafc', decal: 1 }, { t: 'box', s: [1.4, 0.1, 0.01], pos: [0.1, 0.78, -0.685], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, 0.655], color: '#7dd3fc', decal: 1 }, { t: 'box', s: [0.5, 0.42, 0.01], pos: [-0.05, 1.0, -0.655], color: '#7dd3fc', decal: 1 },
            { t: 'cyl', r: 0.2, r2: 0.13, h: 0.5, n: 18, rot: [0, 0, 90], pos: [-0.95, 1.05, 0] } ] },
        { id: 'cabina', name: 'Cabina de pilotaj', label: 'Cabina', color: '#bae6fd', alpha: 0.4, explode: [0.6, 0, 0],
          info: '<p>O mare „bulă” de plexiglas în față: piloții văd înainte, în lateral și chiar sub picioare, foarte util pentru aterizarea în locuri dificile.</p>',
          more: '<p>Pilotul folosește trei comenzi: maneta de <b>pas colectiv</b> (în stânga, pentru a urca și a coborî), <b>manșa</b> sau comanda ciclică (între picioare, pentru a merge înainte, înapoi și în lateral) și <b>pedalele</b> (pentru a întoarce botul, comandând rotorul de coadă).</p>',
          shapes: [ { t: 'sphere', r: 1, n: 12, m: 22, pos: [1.15, 1.02, 0], scale: [0.62, 0.55, 0.6] },
            { t: 'box', s: [0.3, 0.35, 0.3], pos: [0.95, 0.75, 0.18], color: '#1f2937', alpha: 1 }, { t: 'box', s: [0.08, 0.4, 0.3], pos: [0.82, 0.95, 0.18], color: '#1f2937', alpha: 1 },
            { t: 'pipe', r: 0.02, n: 6, pts: [[1.25, 0.6, 0.18], [1.2, 0.9, 0.18]], color: '#111827', alpha: 1 } ] },
        { id: 'rotore', name: 'Rotorul principal', label: 'Rotorul principal', color: '#1f2937', pos: [MX, HUB, 0], explode: [0, 1.2, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 },
          info: '<p>Patru <b>pale</b> lungi se rotesc foarte repede. Fiecare pală are forma unei aripi de avion: rotindu-se „taie” aerul, îl împinge în jos și primește o împingere în sus, <b>portanța</b>.</p>',
          more: '<p>Un avion trebuie să ruleze pe pistă ca aripile să primească aer; elicopterul în schimb își rotește chiar aripile, așa că poate crea portanță <b>din staționar</b>. Vârfurile palelor ajung la aproximativ 700 km/h, puțin sub viteza sunetului!</p>',
          shapes: [ { t: 'cyl', r: 0.16, h: 0.16, n: 20, color: '#475569' }, { t: 'cone', r: 0.12, h: 0.14, n: 16, pos: [0, 0.15, 0], color: '#64748b' } ].concat([0, 90, 180, 270].map(blade)) },
        { id: 'piatto', name: 'Platoul oscilant', label: 'Platou oscilant', color: '#9ca3af', pos: [MX, 1.82, 0], explode: [0.8, 0.8, 0.6],
          info: '<p>Este piesa cea mai ingenioasă: două discuri pe arborele rotorului. Înclinându-le sau ridicându-le, niște tije schimbă <b>înclinarea palelor</b> în timp ce acestea se rotesc.</p>',
          more: '<p>Dacă platoul <b>urcă</b>, toate palele se înclină mai mult deodată (pas <b>colectiv</b>): mai multă portanță, elicopterul urcă. Dacă platoul se <b>înclină</b>, fiecare pală își schimbă înclinarea în timpul rotației (pas <b>ciclic</b>): discul rotorului se înclină, iar elicopterul zboară în acea parte.</p>',
          anim: { type: 'swing', axis: 'z', amp: 7, rate: 0.25 },
          shapes: [ { t: 'cyl', r: 0.3, h: 0.05, n: 24, color: '#6b7280' },
            { t: 'group', pos: [0, 0.06, 0], anim: { type: 'spin', axis: 'y', rate: 2.2 }, shapes: [ { t: 'cyl', r: 0.27, h: 0.05, n: 24, color: '#cbd5e1' },
              ...[0, 90, 180, 270].map((a) => ({ t: 'cyl', r: 0.015, h: 0.24, n: 6, pos: [0.24 * Math.cos(a * D), 0.14, -0.24 * Math.sin(a * D)], color: '#f59e0b' })) ] } ] },
        { id: 'albero', name: 'Arborele rotorului și transmisia', label: 'Transmisia', color: '#64748b', explode: [0, 0.5, 0.8],
          info: '<p>Motorul se învârte foarte repede, dar rotorul trebuie să se învârtă mai încet. <b>Transmisia</b>, o cutie plină de roți dințate, reduce viteza și duce mișcarea la rotorul principal și la cel de coadă.</p>',
          more: '<p>Motorul cu turbină se învârte la aproximativ 30 000 de rotații pe minut, rotorul principal la aproximativ 400: transmisia reduce viteza de circa 75 de ori, mărind forța (cuplul) în același raport.</p>',
          shapes: [ { t: 'box', s: [0.6, 0.3, 0.5], pos: [MX, 1.55, 0] }, { t: 'cyl', r: 0.06, h: 0.42, n: 12, pos: [MX, 1.86, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 2.2 } },
            { t: 'cyl', r: 0.03, h: 2.8, n: 10, rot: [0, 0, 90], pos: [-1.5, 1.3, 0], color: '#9ca3af', anim: { type: 'spin', axis: 'y', rate: 6 } } ] },
        { id: 'motore', name: 'Motorul cu turbină', label: 'Turbina', color: '#94a3b8', pos: [-0.45, 1.55, 0], explode: [-0.3, 0.6, -0.9],
          info: '<p>Motorul este o <b>turbină</b>, asemănătoare cu un mic motor de avion: aspiră aer, îl comprimă, îl arde împreună cu combustibilul, iar gazele fierbinți rotesc o roată cu palete legată de transmisie.</p>',
          shapes: [ { t: 'cyl', r: 0.17, h: 0.75, n: 20, rot: [0, 0, 90] }, { t: 'cyl', r: 0.12, h: 0.25, n: 16, rot: [0, 0, 90], pos: [-0.48, 0.04, 0], color: '#57534e' },
            { t: 'group', pos: [0.38, 0, 0], anim: { type: 'spin', axis: 'x', rate: 8 }, shapes: [0, 45, 90, 135].map((a) => ({ t: 'box', s: [0.02, 0.28, 0.04], rot: [a, 0, 0], color: '#475569' })) },
            { t: 'sphere', r: 0.09, n: 6, m: 10, pos: [-0.62, 0.06, 0], color: '#f97316', alpha: 0.6, anim: { type: 'blink', fade: true, wave: 'sin01', rate: 3 } } ] },
        { id: 'trave-coda', name: 'Grinda de coadă', label: 'Coada', color: '#dc2626', explode: [-0.6, 0, 0],
          info: '<p>O țeavă lungă care duce <b>rotorul de coadă</b> departe de centru: cu cât este mai departe, cu atât poate contracara mai ușor rotirea fuzelajului, ca o pârghie lungă.</p>',
          shapes: [ { t: 'cyl', r: 0.19, r2: 0.08, h: 2.9, n: 18, rot: [0, 0, 90], pos: [-2.05, 1.18, 0] },
            { t: 'extrude', d: 0.06, pts: [[-3.1, 1.2], [-3.5, 1.2], [-3.78, 1.95], [-3.52, 1.95]], color: '#f8fafc' },
            { t: 'box', s: [0.32, 0.04, 0.8], pos: [-2.9, 1.2, 0], color: '#f8fafc' } ] },
        { id: 'rotore-coda', name: 'Rotorul de coadă', label: 'Rotorul de coadă', color: '#f8fafc', pos: [-3.58, 1.62, 0.1], explode: [-0.5, 0, 0.6], anim: { type: 'spin', axis: 'z', rate: 8 },
          info: '<p>Mica elice din coadă împinge aerul în lateral și împiedică fuzelajul să se rotească în jurul lui însuși. Cu pedalele pilotul își schimbă împingerea ca să <b>întoarcă botul</b>.</p>',
          more: '<p>Când motorul rotește rotorul într-un sens, fuzelajul „vrea” să se rotească în sens opus: este <b>cuplul de reacție</b> (legea a treia a lui Newton). Unele elicoptere rezolvă problema cu două rotoare care se rotesc în sensuri opuse, fără rotor de coadă.</p>',
          shapes: [ { t: 'cyl', r: 0.06, h: 0.08, n: 14, rot: [90, 0, 0], color: '#475569' },
            { t: 'box', s: [0.06, 0.75, 0.02], rot: [0, 12, 0], color: '#f8fafc' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, 0.33, 0], color: '#ef4444' }, { t: 'box', s: [0.06, 0.12, 0.022], pos: [0, -0.33, 0], color: '#ef4444' } ] },
        { id: 'pattini', name: 'Patinele de aterizare', label: 'Patine', color: '#6b7280', explode: [0, -0.6, 0],
          info: '<p>În loc de roți, multe elicoptere au două <b>patine</b>: simple, ușoare și potrivite pentru aterizarea chiar și pe pajiști, zăpadă sau stânci.</p>',
          shapes: skid(0.62).concat(skid(-0.62)) },
        { id: 'aria', name: 'Aerul împins în jos', label: 'Aerul', color: '#38bdf8', noLabel: true, explode: [0, 0, 0],
          info: '<p>Rotorul împinge în jos o mare cantitate de aer („curentul rotorului”): îl simți foarte puternic dacă ești lângă un elicopter care aterizează.</p>',
          shapes: DOWN },
        { id: 'forze', name: 'Portanță și cuplu', label: 'Forțe', color: '#22c55e', explode: [0, 0, 0],
          info: '<p>Săgeata <b>verde</b> este portanța rotorului. Săgeata <b>violetă</b> curbă arată cum ar tinde să se rotească fuzelajul (cuplul); săgeata <b>albastră</b> din coadă este împingerea rotorului de coadă, care îl ține drept.</p>',
          shapes: [ arrow([MX, 2.35, 0], [0, 0, 0], 0.8, '#22c55e'),
            { t: 'torus', R: 0.95, r: 0.035, n: 30, m: 6, arc: 250, pos: [MX, 0.95, 0], rot: [0, 40, 0], color: '#a855f7' },
            { t: 'cone', r: 0.1, h: 0.25, n: 12, pos: [MX + 0.95 * Math.cos(40 * D), 0.95, 0.95 * Math.sin(40 * D)], rot: [90, 0, 0], color: '#a855f7' },
            arrow([-3.58, 1.62, -0.1], [-90, 0, 0], 0.7, '#3b82f6') ] }
      ]
    },
    steps: [
      { icon: '🚁', title: 'Aripi care se rotesc', explode: 0,
        html: '<p>Elicopterul nu are aripi fixe ca avionul: aripile lui sunt <b>palele</b> lungi ale rotorului, care se învârt deasupra cabinei. Așa poate urca pe verticală, poate sta nemișcat în aer (<b>zbor static</b>) și poate ateriza aproape oriunde.</p>' },
      { icon: '⬆️', title: 'Rotorul împinge aerul în jos', focus: ['rotore', 'aria', 'forze'], explode: 0, view: { rx: 0.2, ry: -0.4 },
        html: '<p>Fiecare pală are forma unei aripi. Rotindu-se la aproximativ 400 de rotații pe minut, palele împing aerul în <b>jos</b>; prin reacție aerul împinge rotorul în <b>sus</b>: este <b>portanța</b>.</p><p class="tip">🍁 Ai văzut vreodată o sămânță de arțar care coboară învârtindu-se? Este un mic elicopter natural!</p>' },
      { icon: '🎛️', title: 'Platoul oscilant: a urca și a înainta', focus: ['piatto', 'rotore', 'albero'], explode: 0.3, zoom: 1.2, view: { rx: 0.25, ry: -0.7 },
        html: '<p>Pilotul nu schimbă viteza rotorului: schimbă <b>înclinarea palelor</b>. <b>Platoul oscilant</b> face asta în timp ce ele se rotesc.</p><p>Toate palele mai înclinate → mai multă portanță → elicopterul <b>urcă</b>. Platoul înclinat înainte → rotorul se înclină → elicopterul <b>înaintează</b>.</p>' },
      { icon: '🔄', title: 'De ce trebuie rotorul de coadă', focus: ['rotore-coda', 'trave-coda', 'forze', 'fusoliera'], explode: 0, view: { rx: 0.9, ry: -0.3 },
        html: '<p>Când motorul rotește rotorul într-o parte, fuzelajul tinde să se rotească în partea cealaltă (săgeata violetă): acțiune și reacțiune!</p><p><b>Rotorul de coadă</b> împinge aerul în lateral și ține fuzelajul drept. Cu <b>pedalele</b> pilotul schimbă această împingere și întoarce botul.</p>' },
      { icon: '🔥', title: 'Motorul și transmisia', focus: ['motore', 'albero', 'rotore-coda'], explode: 0.35, view: { rx: 0.25, ry: -1.0 },
        html: '<p>O <b>turbină</b> arde combustibilul și se învârte foarte repede. <b>Transmisia</b>, plină de roți dințate, încetinește mișcarea și o duce la rotorul principal și, printr-un arbore lung din interiorul cozii, la rotorul de coadă.</p>' },
      { icon: '🏔️', title: 'Cabina, patinele și salvarea', focus: ['cabina', 'fusoliera', 'pattini'], explode: 0, view: { rx: 0.2, ry: -0.2 },
        html: '<p><b>Cabina</b> în formă de bulă permite să vezi în toate direcțiile, chiar și în jos. <b>Patinele</b> permit să te așezi pe pajiști, zăpadă și stânci.</p><p>De aceea elicopterele sunt prețioase la <b>salvarea</b> din munți și de pe mare, împotriva incendiilor și pentru a duce bolnavii la spital.</p>' }
    ],
    facts: [
      { icon: '🎨', title: 'Șurubul aerian al lui Leonardo', html: 'Pe la 1490 <b>Leonardo da Vinci</b> a desenat un „șurub aerian”: o elice în spirală din pânză, care ar fi trebuit să se înșurubeze în aer. Este considerat strămoșul elicopterului.' },
      { icon: '🇮🇹', title: 'Elicoptere italiene', html: 'În Italia, lângă Varese, se construiesc elicoptere exportate în toată lumea, folosite și pentru salvarea montană și pentru ambulanța aeriană.' },
      { icon: '🔙', title: 'Chiar și înapoi', html: 'Un elicopter poate zbura înainte, înapoi, în lateral și se poate roti în jurul lui însuși rămânând în același loc. Niciun avion obișnuit nu poate face asta!' },
      { icon: '🪂', title: 'Dacă motorul se oprește', html: 'Dacă motorul se stinge, rotorul continuă să se învârtă împins de aerul care urcă în timp ce elicopterul coboară (<b>autorotație</b>), iar pilotul poate ateriza ușor.' }
    ],
    quiz: [
      { type: 'mc', q: 'Ce ține în aer un elicopter?', options: ['Un balon plin cu gaz', 'Palele rotorului, care împing aerul în jos', 'Roțile', 'Rotorul de coadă'], answer: 1, explain: 'Palele sunt aripi care se rotesc: împing aerul în jos și primesc portanță în sus.' },
      { type: 'mc', q: 'La ce servește rotorul de coadă?', options: ['Ca să urce elicopterul', 'Ca să împiedice fuzelajul să se rotească în jurul lui însuși', 'Ca să răcească motorul', 'Ca să lumineze pista'], answer: 1, explain: 'Contracarează cuplul de reacție al rotorului principal; cu pedalele pilotul întoarce botul.' },
      { type: 'tf', q: 'Pentru a urca, pilotul mărește înclinarea tuturor palelor deodată.', answer: true, explain: 'Este pasul colectiv: mai multă înclinare, mai multă portanță.' },
      { type: 'mc', q: 'Care piesă schimbă înclinarea palelor în timp ce se rotesc?', options: ['Platoul oscilant', 'Patinele', 'Grinda de coadă', 'Cabina'], answer: 0, explain: 'Platoul oscilant, cu tijele lui, înclină palele ca să urce și să înainteze.' },
      { type: 'mc', q: 'Ce poate face un elicopter și un avion nu poate?', options: ['Să zboare pe ploaie', 'Să stea nemișcat în aer', 'Să zboare noaptea', 'Să transporte oameni'], answer: 1, explain: 'Zborul static (hovering) este posibil pentru că aripile se rotesc chiar dacă elicopterul stă pe loc.' }
    ]
  });
})();
