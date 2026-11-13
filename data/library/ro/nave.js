/* La nave portacontainer. Prua verso +x, alto = +y, la linea di galleggiamento è a y = 0.
   Lo scafo è fatto da "piante" (vista dall'alto) estruse in verticale. La nave beccheggia piano sulle onde. */
(function () {
  const TAU = Math.PI * 2;
  const plan = (s, sx) => [[-3.5, -0.75], [2.0, -0.75], [2.7, -0.62], [3.2, -0.38], [3.52, -0.12], [3.6, 0], [3.52, 0.12], [3.2, 0.38], [2.7, 0.62], [2.0, 0.75], [-3.5, 0.75], [-3.62, 0.5], [-3.62, -0.5]]
    .map(([x, z]) => [x * (sx || 1), z * s]);
  /* estrude una pianta tra y0 e y1 */
  const slab = (pts, y0, y1, color, extra) => Object.assign({ t: 'extrude', d: y1 - y0, pts, rot: [90, 0, 0], pos: [0, (y0 + y1) / 2, 0], color }, extra || {});
  const BOB = { type: 'move', dir: [0, 1, 0], amp: 0.035, wave: 'sin', rate: 0.5 };
  const PAL = ['#ef4444', '#2563eb', '#f59e0b', '#16a34a', '#64748b', '#0891b2', '#b91c1c', '#7c3aed', '#ea580c', '#0f766e'];
  const boxes = [];
  for (let b = 0; b < 11; b++) {
    const x = -1.65 + b * 0.43, rows = x > 2.3 ? [-0.18, 0.18] : x > 1.9 ? [-0.48, -0.16, 0.16, 0.48] : [-0.54, -0.18, 0.18, 0.54];
    rows.forEach((z, r) => { for (let t = 0; t < (x > 2.3 ? 2 : 3); t++) boxes.push({ t: 'box', div: 1, s: [0.41, 0.25, 0.34], pos: [x, 0.7 + t * 0.26, z], color: PAL[(b * 7 + r * 3 + t * 5) % PAL.length] }); });
  }
  const winds = [0.95, 1.25, 1.55].flatMap((y) => [1, -1].map((s) => ({ t: 'box', s: [0.62, 0.07, 0.01], pos: [-2.55, y, s * 0.6], color: '#1e293b', decal: 1 }))).concat([0.95, 1.25, 1.55].map((y) => ({ t: 'box', s: [0.01, 0.07, 1.0], pos: [-2.19, y, 0], color: '#1e293b', decal: 1 })));
  const smoke = Array.from({ length: 6 }, (_, k) => ({ t: 'sphere', r: 0.12, n: 6, m: 10, pos: [-3.15, 1.75, 0], color: '#9ca3af',
    anim: [{ type: 'move', dir: [-0.6, 1, 0], amp: 0.9, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'scale', from: 0.5, to: 1.6, wave: 'saw', rate: 0.5, phase: k / 6 }, { type: 'blink', fade: true, wave: 'rsaw', rate: 0.5, phase: k / 6 }] }));
  const arrow = (pos, down, len, color) => ({ t: 'group', pos, rot: down ? [180, 0, 0] : [0, 0, 0], anim: { type: 'scale', from: 0.95, to: 1.05, wave: 'sin01', rate: 0.5 },
    shapes: [ { t: 'cyl', r: 0.07, h: len, n: 12, pos: [0, len / 2, 0], color }, { t: 'cone', r: 0.17, h: 0.32, n: 14, pos: [0, len, 0], color } ] });

  LIBRARY({
    id: 'nave',
    lang: 'ro',
    title: 'Nava',
    intro: 'O navă port-container are lungimea a <b>4 terenuri de fotbal</b>, este făcută din oțel și duce mii de containere… și totuși plutește! Descoperă secretul lui Arhimede, elicea, cârma și balastul.',
    model: {
      rx: 0.25, ry: -0.6, speed: 0.4, height: 460, bg: 'sky', floor: false, fit: 1.1,
      parts: [
        { id: 'mare', name: 'Marea', color: '#0284c7', alpha: 0.22, explode: [0, 0, 0], chip: false, noLabel: true,
          info: '<p>Apa mării. Partea navei aflată sub apă se numește <b>carenă</b> (opera vie), iar cea de deasupra <b>opera moartă</b>.</p>',
          shapes: [ { t: 'box', s: [9.5, 1.1, 3.6], pos: [0, -0.56, 0], div: 1 }, { t: 'box', s: [9.5, 0.01, 3.6], pos: [0, -0.005, 0], color: '#7dd3fc', alpha: 0.35, div: 4 } ] },
        { id: 'scafo', name: 'Corpul navei (opera moartă)', label: 'Corpul navei', color: '#1e3a8a', anim: BOB, explode: [0, 0.4, 0],
          info: '<p>Este marea „carapace” de oțel a navei. Partea de deasupra apei este adesea întunecată; sus se află <b>puntea principală</b>, unde se așază containerele.</p>',
          more: '<p>Corpul este făcut din table de oțel sudate pe un „schelet” de grinzi (<b>coastele</b> și <b>chila</b>). Multe nave au <b>dublu fund</b>: dacă corpul exterior se sparge, apa nu intră imediat în navă.</p>',
          shapes: [ slab(plan(1), 0, 0.56), slab(plan(0.99), 0.56, 0.59, '#475569'),
            slab(plan(1).filter(([x]) => x > 2.4).concat([[2.4, 0.71], [2.4, -0.71]]), 0.56, 0.78, '#1e3a8a'),
            { t: 'box', s: [0.6, 0.06, 0.012], pos: [3.0, 0.42, 0.53], rot: [0, -25, 0], color: '#f8fafc', decal: 1 },
            { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, 0.757], color: '#f8fafc', decal: 1 }, { t: 'box', s: [7.0, 0.04, 0.012], pos: [-0.75, 0.02, -0.757], color: '#f8fafc', decal: 1 } ] },
        { id: 'carena', name: 'Carena (opera vie)', label: 'Carena', color: '#b91c1c', anim: BOB, explode: [0, -0.45, 0],
          info: '<p>Este partea corpului aflată <b>sub apă</b>, vopsită în roșu cu o vopsea specială care împiedică algele și scoicile să se lipească.</p>',
          more: '<p>Cu cât nava este mai încărcată, cu atât carena se scufundă mai mult. Pe bordaj există un semn, <b>marca bordului liber</b> (linia Plimsoll), care arată până unde se poate scufunda nava în siguranță în diferite mări și anotimpuri.</p>',
          shapes: [ slab(plan(0.97, 0.995), -0.36, 0), slab(plan(0.85, 0.97), -0.52, -0.36), slab(plan(0.6, 0.93), -0.58, -0.52),
            { t: 'sphere', r: 1, n: 10, m: 16, pos: [3.4, -0.42, 0], scale: [0.36, 0.13, 0.13] } ] },
        { id: 'container', name: 'Containere', color: '#ef4444', anim: BOB, explode: [0, 1.0, 0],
          info: '<p><b>Containerele</b> sunt cutii mari de oțel, toate de aceeași mărime. Se stivuiesc ca niște cărămizi și trec de la navă la tren și la camion fără să fie deschise.</p>',
          more: '<p>Un container standard are 20 de picioare lungime (aproximativ 6 m): se numește <b>TEU</b>. Cele mai mari nave duc peste <b>24 000</b>! Aproape toate lucrurile pe care le cumpărăm au călătorit într-un container.</p>',
          shapes: boxes },
        { id: 'ponte-comando', name: 'Puntea de comandă', label: 'Puntea de comandă', color: '#f8fafc', anim: BOB, explode: [-0.4, 0.8, 0],
          info: '<p>Clădirea albă din pupa. Sus se află <b>puntea de comandă</b>, unde comandantul și ofițerii conduc nava cu radar, GPS și radio. Dedesubt sunt cabinele echipajului.</p>',
          more: '<p>Ca să vadă dincolo de stiva de containere, puntea trebuie să fie foarte înaltă. „Aripile” laterale servesc pentru a privi bordajul la intrarea în port. <b>Radarul</b> de pe acoperiș „vede” celelalte nave și noaptea, și în ceață.</p>',
          shapes: [ { t: 'box', s: [0.72, 1.2, 1.2], pos: [-2.55, 1.17, 0] }, { t: 'box', s: [0.5, 0.14, 1.7], pos: [-2.45, 1.72, 0] }, ...winds,
            { t: 'cyl', r: 0.025, h: 0.4, n: 8, pos: [-2.55, 2.0, 0], color: '#475569' }, { t: 'group', pos: [-2.55, 2.2, 0], anim: { type: 'spin', axis: 'y', rate: 1 }, shapes: [ { t: 'box', s: [0.05, 0.05, 0.45], color: '#1f2937' } ] } ] },
        { id: 'fumaiolo', name: 'Coșul de fum', color: '#f97316', anim: BOB, explode: [-0.6, 0.9, 0],
          info: '<p>„Hornul” navei: pe aici ies fumurile motorului. Navele moderne au filtre ca să polueze mai puțin.</p>',
          shapes: [ { t: 'box', s: [0.38, 0.95, 0.42], pos: [-3.15, 1.1, 0] }, { t: 'box', s: [0.4, 0.12, 0.44], pos: [-3.15, 1.52, 0], color: '#111827' }, ...smoke ] },
        { id: 'motore', name: 'Motor diesel', label: 'Motor', color: '#57534e', anim: BOB, explode: [0, -0.4, 1.2],
          info: '<p>În partea de jos a navei se află un motor uriaș, cât o clădire de 4 etaje! Arde combustibil și învârte <b>axul</b> elicei.</p>',
          more: '<p>Motoarele navelor mari sunt diesel <b>în doi timpi</b> foarte lente: se rotesc cu aproximativ 80–100 de rotații pe minut și sunt legate direct de elice, fără cutie de viteze. Pot depăși 80 000 de cai putere.</p>',
          shapes: [ { t: 'box', s: [0.8, 0.5, 0.5], pos: [-2.45, -0.15, 0] }, ...[-2.75, -2.6, -2.45, -2.3, -2.15].map((x) => ({ t: 'cyl', r: 0.07, h: 0.2, n: 12, pos: [x, 0.18, 0], color: '#78716c' })) ] },
        { id: 'asse', name: 'Axul elicei', label: 'Axul', color: '#9ca3af', anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], pos: [0, -0.33, 0], explode: [0, -0.4, 1.2],
          info: '<p>Un cilindru lung de oțel care duce rotația de la motor la elice, ieșind din corp printr-o garnitură etanșă.</p>',
          shapes: [ { t: 'cyl', r: 0.04, h: 1.15, n: 12, rot: [0, 0, 90], pos: [-3.25, 0, 0] }, { t: 'box', s: [0.02, 0.08, 0.02], pos: [-3.25, 0.04, 0], color: '#475569' } ] },
        { id: 'elica', name: 'Elicea', color: '#ca8a04', pos: [-3.78, -0.33, 0], anim: [BOB, { type: 'spin', axis: 'x', rate: 1.2 }], explode: [-0.6, -0.4, 0],
          info: '<p>Elicea, din bronz, are pale mari înșurubate. Învârtindu-se, împinge apa <b>înapoi</b>, iar apa împinge nava <b>înainte</b>.</p>',
          more: '<p>Elicea unei mari nave port-container are un diametru de aproximativ <b>9–10 metri</b> și cântărește peste 100 de tone, dar se rotește încet. Este a treia lege a lui Newton: acțiune și reacțiune, ca atunci când înoți împingând apa cu mâinile.</p>',
          shapes: [ { t: 'sphere', r: 0.08, n: 8, m: 12, scale: [1.4, 1, 1], color: '#a16207' } ].concat([0, 90, 180, 270].map((a) => ({ t: 'group', rot: [a, 0, 0], shapes: [
            { t: 'sphere', r: 1, n: 8, m: 12, pos: [0, 0.2, 0], scale: [0.05, 0.2, 0.12], rot: [0, 35, 0] } ] }))) },
        { id: 'timone', name: 'Cârma', color: '#b91c1c', pos: [-3.98, -0.25, 0], anim: [BOB, { type: 'swing', axis: 'y', amp: 22, rate: 0.2 }], explode: [-0.8, -0.3, 0],
          info: '<p>O „aripioară” mare în spatele elicei. Când se rotește, deviază apa care vine de la elice și întoarce pupa: așa nava își schimbă direcția.</p>',
          shapes: [ { t: 'box', s: [0.32, 0.5, 0.05], pos: [-0.12, 0, 0] }, { t: 'cyl', r: 0.03, h: 0.7, n: 8, pos: [0, 0.15, 0], color: '#475569' } ] },
        { id: 'zavorra', name: 'Tancurile de balast', label: 'Balast', color: '#0369a1', alpha: 0.55, anim: BOB, explode: [0, -0.9, 0],
          info: '<p>În dublul fund sunt tancuri mari care pot fi umplute cu <b>apă de mare</b>. Când nava este goală, balastul o face să se scufunde mai mult și o face <b>stabilă</b>.</p>',
          more: '<p>Greutatea de jos coboară <b>centrul de greutate</b>: nava devine ca o jucărie cu fundul greu, care se ridică mereu drept. Dar apa de balast poate duce animale mici în mări îndepărtate: astăzi trebuie <b>curățată</b> înainte de a fi evacuată.</p>',
          shapes: [-1.6, -0.4, 0.8, 2.0].map((x) => ({ t: 'group', pos: [x, -0.52, 0], anim: { type: 'scale', axis: 'y', from: 0.15, to: 1, wave: 'sin01', rate: 0.15 }, shapes: [ { t: 'box', s: [1.0, 0.16, 1.1], pos: [0, 0.08, 0] } ] })) },
        { id: 'ancora', name: 'Ancora și lanțul', label: 'Ancora', color: '#374151', anim: BOB, explode: [0.4, 0, 0.4],
          info: '<p><b>Ancora</b> cântărește zeci de tone. Coborâtă pe fund cu un lanț lung, se agață de fundul mării și ține nava pe loc.</p>',
          shapes: [ { t: 'box', s: [0.06, 0.2, 0.02], pos: [3.05, 0.38, 0.47], rot: [0, -32, 0] }, { t: 'box', s: [0.18, 0.05, 0.02], pos: [3.05, 0.27, 0.47], rot: [0, -32, 0] },
            { t: 'cyl', r: 0.05, h: 0.03, n: 12, rot: [90, 0, 0], pos: [3.12, 0.5, 0.42], color: '#111827' } ] },
        { id: 'forze', name: 'Greutatea și împingerea lui Arhimede', label: 'Forțe', color: '#22c55e', explode: [0, 0, 0], noLabel: false,
          info: '<p>Săgeata <b>roșie</b> este <b>greutatea</b> navei, care o trage în jos. Săgeata <b>verde</b> este <b>împingerea</b> apei în sus. Când sunt egale, nava plutește.</p>',
          more: '<p><b>Principiul lui Arhimede</b>: un corp scufundat primește o împingere în sus egală cu greutatea apei pe care o dislocă. Corpul navei este gol pe dinăuntru: dislocă foarte multă apă, mult mai grea decât oțelul din care este făcut.</p>',
          shapes: [ arrow([0.2, 2.75, 0], true, 0.75, '#ef4444'), arrow([0.2, -1.75, 0], false, 0.75, '#22c55e') ] }
      ]
    },
    steps: [
      { icon: '🚢', title: 'Un oraș de oțel care plutește', explode: 0,
        html: '<p>Marile nave port-container transportă aproape toate mărfurile lumii: haine, jucării, telefoane, banane… Sunt din <b>oțel</b>, care este mult mai greu decât apa. Atunci de ce nu se scufundă?</p>' },
      { icon: '⚖️', title: 'Secretul lui Arhimede', focus: ['forze', 'carena', 'scafo', 'mare'], explode: 0, view: { rx: 0.05, ry: -0.05 },
        html: '<p>Corpul navei este ca o cutie mare <b>goală</b>: scufundându-se puțin, dislocă (împinge deoparte) o cantitate mare de apă. Apa împinge nava în sus cu o forță egală cu <b>greutatea apei dislocate</b>.</p><p>Dacă această împingere este egală cu greutatea navei, nava plutește.</p><p class="tip">🥣 Încearcă: o bilă de plastilină se scufundă, dar dacă o modelezi în formă de barcă plutește!</p>' },
      { icon: '🐬', title: 'Forma corpului și bulbul', focus: ['carena', 'scafo'], explode: 0, view: { rx: -0.25, ry: -0.9 },
        html: '<p>Prora este ascuțită ca să „taie” apa. Sub prora se află un <b>bulb</b> rotunjit: creează un val care îl reduce pe cel al navei, așa că se consumă mai puțin combustibil.</p><p>Partea de sub apă, <b>carena</b>, este roșie: vopseaua specială ține departe algele și scoicile.</p>' },
      { icon: '📦', title: 'Încărcătura și balastul', focus: ['container', 'zavorra', 'carena'], explode: 0.3, view: { rx: 0.25, ry: -0.5 },
        html: '<p><b>Containerele</b> se stivuiesc pe punte și în magazii. Cu cât nava este mai încărcată, cu atât se scufundă mai mult. Când este goală, se umplu cu apă <b>tancurile de balast</b> de jos: greutatea din fund o face stabilă și nu se răstoarnă.</p>' },
      { icon: '⚙️', title: 'Motorul, axul și elicea', focus: ['motore', 'asse', 'elica', 'fumaiolo'], explode: 0.2, view: { rx: 0.1, ry: -1.2 },
        html: '<p>Un <b>motor diesel</b> uriaș învârte un <b>ax</b> lung care iese din corp. La capăt se află <b>elicea</b>: palele ei împing apa înapoi, iar apa împinge nava înainte.</p>' },
      { icon: '🧭', title: 'Cârma și puntea de comandă', focus: ['timone', 'ponte-comando', 'elica'], explode: 0, view: { rx: 0.3, ry: -2.2 },
        html: '<p>De pe <b>puntea de comandă</b>, de sus, comandantul conduce nava cu radar și GPS. Întorcând <b>cârma</b>, apa împinsă de elice este deviată, iar nava își schimbă direcția, foarte încet: ca să se oprească poate fi nevoie de mai mult de un kilometru!</p>' },
      { icon: '⚓', title: 'În port: ancora', focus: ['ancora', 'scafo'], explode: 0, zoom: 1.2, view: { rx: 0.2, ry: -0.35 },
        html: '<p>Când așteaptă să intre în port, nava coboară <b>ancora</b>: cântărește zeci de tone și, cu lanțul ei lung, se agață de fundul mării.</p><p>În port, macarale uriașe descarcă containerele unul câte unul, chiar 30 pe oră pentru fiecare macara.</p>' }
    ],
    facts: [
      { icon: '🛁', title: 'Eureka!', html: 'Se povestește că <b>Arhimede</b> din Siracuza și-a descoperit principiul intrând în cada de baie: văzând cum urcă apa, a fugit pe stradă strigând „Eureka!” („Am găsit!”).' },
      { icon: '🏟️', title: 'Mai lungă de 4 terenuri', html: 'Cele mai mari nave port-container au aproximativ <b>400 de metri</b> lungime și 60 lățime: mai mult decât Turnul Eiffel culcat.' },
      { icon: '🌍', title: '90% din mărfuri', html: 'Aproximativ <b>90%</b> din mărfurile schimbate în lume călătoresc pe mare. Genova, Trieste și Gioia Tauro sunt printre cele mai importante porturi din Italia.' },
      { icon: '🧂', title: 'Apă sărată, apă dulce', html: 'În apa sărată a mării navele plutesc puțin mai sus decât pe râuri: apa sărată este mai densă și împinge mai tare.' }
    ],
    quiz: [
      { type: 'mc', q: 'De ce plutește o navă de oțel?', options: ['Pentru că oțelul plutește', 'Pentru că un corp gol dislocă multă apă, care o împinge în sus', 'Pentru că elicea o ține sus', 'Pentru că marea este sărată'], answer: 1, explain: 'Principiul lui Arhimede: împingerea este egală cu greutatea apei dislocate de corpul navei.' },
      { type: 'mc', q: 'Ce împinge nava înainte?', options: ['Cârma', 'Elicea care împinge apa înapoi', 'Coșul de fum', 'Ancora'], answer: 1, explain: 'Acțiune și reacțiune: elicea împinge apa înapoi, iar apa împinge nava înainte.' },
      { type: 'tf', q: 'Tancurile de balast servesc la a face nava mai stabilă când este goală.', answer: true, explain: 'Apa de balast pune greutate jos și coboară centrul de greutate.' },
      { type: 'mc', q: 'Cum se numește partea corpului care se află sub apă?', options: ['Opera vie (carena)', 'Opera moartă', 'Puntea de comandă', 'Coșul de fum'], answer: 0, explain: 'Opera vie, sau carena, este partea scufundată; opera moartă este cea din afara apei.' },
      { type: 'mc', q: 'La ce servește cârma?', options: ['Să frâneze', 'Să schimbe direcția', 'Să plutească', 'Să încarce containerele'], answer: 1, explain: 'Deviind apa împinsă de elice, cârma face nava să vireze.' },
      { type: 'mc', q: 'Cine a descoperit principiul plutirii?', options: ['Galileo Galilei', 'Arhimede', 'Leonardo da Vinci', 'Isaac Newton'], answer: 1, explain: 'Arhimede din Siracuza, acum mai bine de 2200 de ani.' }
    ]
  });
})();
