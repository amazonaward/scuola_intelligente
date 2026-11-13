/* Il cuore umano, visto da davanti (la sinistra del corpo è a destra dello schermo: +x).
   Ciclo cardiaco (cycle 1): 0–0.16 contraggono gli atri; 0.2–0.55 contraggono i ventricoli. */
(function () {
  const ell = (pos, sc, rot) => ({ t: 'sphere', r: 1, n: 14, m: 24, pos, scale: sc, rot });
  /* valvola: anello + due lembi che si aprono (sign 1 = verso il basso, -1 = verso l'alto) */
  const valve = (win, sign) => [
    { t: 'torus', R: 0.13, r: 0.022, n: 24, m: 6 },
    { t: 'group', pos: [-0.12, 0, 0], anim: { type: 'swing', axis: 'z', amp: -65 * sign, wave: 'window', from: win[0], to: win[1], ramp: 0.25 }, shapes: [{ t: 'box', s: [0.12, 0.012, 0.2], pos: [0.06, 0, 0], color: '#fef3c7' }] },
    { t: 'group', pos: [0.12, 0, 0], anim: { type: 'swing', axis: 'z', amp: 65 * sign, wave: 'window', from: win[0], to: win[1], ramp: 0.25 }, shapes: [{ t: 'box', s: [0.12, 0.012, 0.2], pos: [-0.06, 0, 0], color: '#fef3c7' }] }
  ];
  const BLUE = [[-0.8, 1.45, 0.1], [-0.75, 0.5, 0.12], [-0.55, 0.1, 0.25], [-0.38, -0.45, 0.32], [-0.22, 0.0, 0.4], [-0.15, 0.4, 0.42], [-0.05, 0.8, 0.45], [0.2, 1.05, 0.3], [0.75, 1.0, 0.05], [1.2, 1.0, -0.1]];
  const RED = [[1.2, 0.42, -0.4], [0.7, 0.45, -0.35], [0.42, 0.48, -0.3], [0.38, 0.1, -0.18], [0.36, -0.6, -0.05], [0.2, -0.1, 0.0], [0.12, 0.38, 0.0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.6, -0.55]];
  const drops = (path, color) => Array.from({ length: 10 }, (_, k) => ({ t: 'sphere', r: 0.055, n: 6, m: 8, pos: path[0], color, anim: { type: 'path', pts: path, wave: 'saw', rate: 0.25, phase: k / 10 } }));
  const AV = [0.58, 0.19], SL = [0.22, 0.52];
  const squeeze = (win, amt) => ({ type: 'scale', from: 1, to: amt, wave: 'window', win, ramp: 0.45 });

  LIBRARY({
    id: 'cuore',
    lang: 'ro',
    title: 'Inima omului',
    intro: 'Inima este un mușchi cât pumnul tău, care bate de aproximativ <b>100 000 de ori pe zi</b>. Este o <b>pompă dublă</b>: partea dreaptă trimite sângele spre plămâni, cea stângă în tot corpul.',
    model: {
      rx: 0.12, ry: -0.25, speed: 0.75, height: 480, bg: 'body',
      phases: [ { from: 0, to: 0.18, label: 'Atriile se strâng', color: '#7c3aed' }, { from: 0.18, to: 0.56, label: 'Ventriculele se strâng (sistola)', color: '#dc2626' }, { from: 0.56, to: 1, label: 'Repaus și umplere (diastola)', color: '#0891b2' } ],
      parts: [
        { id: 'atrio-destro', name: 'Atriul drept', color: '#818cf8', alpha: 0.5, explode: [-0.6, 0.35, 0.2], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [-0.72, 0.42, 0.12] }),
          info: '<p>Este „sala de așteptare” din dreapta: aici ajunge sângele <b>sărac în oxigen</b> care se întoarce din corp prin venele cave.</p>', shapes: [ ell([-0.72, 0.42, 0.12], [0.45, 0.45, 0.42]) ] },
        { id: 'ventricolo-destro', name: 'Ventriculul drept', color: '#4f46e5', alpha: 0.5, explode: [-0.45, -0.4, 0.5], anim: Object.assign(squeeze([0.19, 0.56], 0.84), { pivot: [-0.32, -0.38, 0.32] }),
          info: '<p>Împinge sângele sărac în oxigen în <b>artera pulmonară</b>, spre plămâni. Pereții lui sunt mai subțiri decât cei ai ventriculului stâng: plămânii sunt aproape.</p>', shapes: [ ell([-0.32, -0.38, 0.32], [0.6, 0.8, 0.42], [0, 0, -15]) ] },
        { id: 'atrio-sinistro', name: 'Atriul stâng', color: '#fca5a5', alpha: 0.5, explode: [0.55, 0.45, -0.35], anim: Object.assign(squeeze([0, 0.17], 0.84), { pivot: [0.42, 0.48, -0.3] }),
          info: '<p>Primește sângele <b>bogat în oxigen</b> care vine de la plămâni prin venele pulmonare.</p>', shapes: [ ell([0.42, 0.48, -0.3], [0.45, 0.36, 0.4]) ] },
        { id: 'ventricolo-sinistro', name: 'Ventriculul stâng', color: '#dc2626', alpha: 0.5, explode: [0.55, -0.5, -0.1], anim: Object.assign(squeeze([0.19, 0.56], 0.86), { pivot: [0.3, -0.45, -0.05] }),
          info: '<p>Este camera cea mai puternică: cu un perete muscular gros împinge sângele bogat în oxigen în <b>aortă</b> și de acolo în tot corpul, până în vârful degetelor de la picioare.</p>',
          more: '<p>La fiecare bătaie ventriculul stâng împinge aproximativ <b>70 ml</b> de sânge: într-un minut cam 5 litri, adică tot sângele din corpul tău!</p>', shapes: [ ell([0.3, -0.45, -0.05], [0.66, 0.95, 0.62], [0, 0, 22]) ] },
        { id: 'setto', name: 'Septul', color: '#fda4af', explode: [0, -0.4, 0.15],
          info: '<p>Un perete de mușchi care împarte inima în două jumătăți: așa sângele albastru (dreapta) și cel roșu (stânga) <b>nu se amestecă niciodată</b>.</p>',
          shapes: [ { t: 'box', s: [0.06, 1.15, 0.62], pos: [-0.02, -0.38, 0.13], rot: [0, 31, 8] } ] },
        { id: 'tricuspide', name: 'Valva tricuspidă', label: 'Tricuspida', color: '#fbbf24', pos: [-0.55, 0.06, 0.24], explode: [-0.4, 0, 0.3],
          info: '<p>O „ușă cu sens unic” între atriul și ventriculul drept: se deschide ca să lase sângele să coboare și se închide când ventriculul împinge, ca sângele să nu se întoarcă.</p>', shapes: valve(AV, 1) },
        { id: 'mitrale', name: 'Valva mitrală', label: 'Mitrala', color: '#fbbf24', pos: [0.4, 0.1, -0.18], explode: [0.45, 0, -0.2],
          info: '<p>Ușa dintre atriul și ventriculul stâng. Are două valve și seamănă cu mitra, pălăria episcopilor: de aici numele.</p>', shapes: valve(AV, 1) },
        { id: 'polmonare', name: 'Valva pulmonară', label: 'Valva pulmonară', color: '#fbbf24', pos: [-0.15, 0.4, 0.42], explode: [-0.2, 0.5, 0.4],
          info: '<p>La ieșirea din ventriculul drept: se deschide când ventriculul împinge și se închide imediat după, ca sângele să nu se întoarcă.</p>', shapes: valve(SL, -1) },
        { id: 'aortica', name: 'Valva aortică', label: 'Valva aortică', color: '#fbbf24', pos: [0.12, 0.36, 0.0], explode: [0.25, 0.55, 0],
          info: '<p>La ieșirea din ventriculul stâng, la începutul aortei. Când se închide, produce o parte din zgomotul „tum-<b>TA</b>” al bătăii.</p>', shapes: valve(SL, -1) },
        { id: 'aorta', name: 'Aorta', color: '#ef4444', explode: [0.25, 0.85, -0.2],
          info: '<p>Cea mai mare arteră din corp: groasă aproape cât un deget mare. Pornește din ventriculul stâng, face o curbă (<b>crosa aortei</b>) și duce sângele bogat în oxigen în tot corpul.</p>',
          shapes: [ { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[0.12, 0.33, 0], [0.12, 0.9, 0.05], [0.2, 1.35, 0], [0.5, 1.5, -0.25], [0.75, 1.3, -0.5], [0.8, 0.6, -0.55], [0.8, -0.8, -0.55]] },
            { t: 'pipe', r: 0.055, n: 10, pts: [[0.25, 1.4, -0.05], [0.2, 1.85, 0]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.45, 1.5, -0.2], [0.45, 1.9, -0.2]] }, { t: 'pipe', r: 0.05, n: 10, pts: [[0.62, 1.45, -0.35], [0.7, 1.85, -0.4]] } ] },
        { id: 'arteria-polmonare', name: 'Artera pulmonară', color: '#3b82f6', explode: [0, 0.9, 0.45],
          info: '<p>Duce sângele <b>sărac în oxigen</b> de la ventriculul drept la cei doi plămâni. Este singura arteră care transportă sânge „albastru”!</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, curve: true, pts: [[-0.15, 0.35, 0.42], [-0.08, 0.8, 0.45], [0.2, 1.05, 0.3]] },
            { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [-0.3, 1.06, 0.08], [-1.05, 1.0, 0]] }, { t: 'pipe', r: 0.09, n: 12, curve: true, pts: [[0.2, 1.05, 0.3], [0.75, 1.02, 0.05], [1.25, 1.0, -0.1]] } ] },
        { id: 'vene-cave', name: 'Venele cave', color: '#2563eb', explode: [-0.85, 0.2, 0],
          info: '<p>Două vene mari aduc înapoi la inimă sângele folosit: <b>vena cavă superioară</b> de la cap și de la brațe, <b>vena cavă inferioară</b> din restul corpului.</p>',
          shapes: [ { t: 'pipe', r: 0.13, n: 14, pts: [[-0.78, 0.7, 0.1], [-0.8, 1.55, 0.1]] }, { t: 'pipe', r: 0.14, n: 14, curve: true, pts: [[-0.74, 0.15, 0.06], [-0.72, -0.6, 0], [-0.7, -1.35, 0]] } ] },
        { id: 'vene-polmonari', name: 'Venele pulmonare', color: '#f87171', explode: [0.5, 0.5, -0.8],
          info: '<p>Patru vene aduc la inimă sângele <b>proaspăt încărcat cu oxigen</b> în plămâni.</p>',
          shapes: [ [[0.2, 0.42, -0.45], [-0.55, 0.45, -0.58]], [[0.2, 0.58, -0.45], [-0.5, 0.75, -0.62]], [[0.7, 0.42, -0.35], [1.25, 0.4, -0.42]], [[0.7, 0.58, -0.35], [1.25, 0.75, -0.48]] ].map((p) => ({ t: 'pipe', r: 0.065, n: 10, pts: p })) },
        { id: 'coronarie', name: 'Arterele coronare', label: 'Coronarele', color: '#b91c1c', explode: [0, 0, 0.5],
          info: '<p>Și inima are nevoie de oxigen! Coronarele sunt artere mici care înconjoară suprafața ei ca o coroană și o hrănesc.</p>',
          more: '<p>Dacă o coronară se înfundă, o parte din mușchiul inimii rămâne fără oxigen: este <b>infarctul</b>. O alimentație sănătoasă și mișcarea țin arterele curate.</p>',
          shapes: [ { t: 'pipe', r: 0.032, n: 8, curve: true, pts: [[0.1, 0.35, 0.18], [0.0, 0.1, 0.46], [-0.05, -0.45, 0.66], [0.18, -1.05, 0.45]] },
            { t: 'pipe', r: 0.03, n: 8, curve: true, pts: [[0.0, 0.33, 0.22], [-0.5, 0.14, 0.52], [-0.9, -0.25, 0.32], [-0.75, -0.75, 0.1]] } ] },
        { id: 'nodi', name: 'Nodurile bătăii (stimulatorul cardiac natural)', label: 'Stimulator cardiac natural', color: '#facc15', explode: [-0.3, 0.3, 0.6],
          info: '<p>Inima bate <b>singură</b>! Un grupuleț de celule din atriul drept, <b>nodul sinoatrial</b>, produce un mic impuls electric care face să se contracte mai întâi atriile și apoi, trecând prin nodul atrioventricular, ventriculele.</p>',
          more: '<p>Impulsurile electrice ale inimii pot fi înregistrate cu <b>electrocardiograma</b> (EKG). Dacă nodul nu funcționează bine, se implantează un stimulator cardiac (pacemaker) artificial.</p>',
          shapes: [ { t: 'sphere', r: 0.07, n: 8, pos: [-0.68, 0.8, 0.3], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0, to: 0.08, ramp: 0.3 } },
            { t: 'sphere', r: 0.06, n: 8, pos: [-0.2, 0.06, 0.25], anim: { type: 'blink', color: '#ffffff', wave: 'window', from: 0.12, to: 0.2, ramp: 0.3 } },
            { t: 'pipe', r: 0.014, n: 6, curve: true, pts: [[-0.68, 0.8, 0.3], [-0.45, 0.4, 0.3], [-0.2, 0.06, 0.25], [-0.05, -0.5, 0.3], [0.05, -1.0, 0.25]] } ] },
        { id: 'sangue-blu', name: 'Sânge sărac în oxigen', label: 'Sânge „albastru”', color: '#3b82f6', noLabel: true,
          info: '<p>Sângele care se întoarce din corp a predat oxigenul celulelor și duce cu el <b>dioxidul de carbon</b>. În desene se colorează în albastru, dar în realitate este roșu închis.</p>', shapes: drops(BLUE, '#2563eb') },
        { id: 'sangue-rosso', name: 'Sânge bogat în oxigen', label: 'Sânge roșu', color: '#ef4444', noLabel: true,
          info: '<p>În plămâni sângele se reîncarcă cu <b>oxigen</b> și devine roșu aprins. Inima îl împinge în tot corpul.</p>', shapes: drops(RED, '#ef4444') }
      ]
    },
    steps: [
      { icon: '🫀', title: 'O pompă dublă', explode: 0,
        html: '<p>Inima are <b>4 camere</b>: două <b>atrii</b> sus și două <b>ventricule</b> jos. Jumătatea <b>dreaptă</b> (în stânga pe ecran!) pompează sângele spre plămâni, jumătatea <b>stângă</b> spre tot corpul.</p><p class="tip">🪞 Te uiți la inima unei persoane care stă în fața ta: dreapta ei este stânga ta.</p>' },
      { icon: '⚡', title: 'Bătaia pornește singură', focus: ['nodi', 'atrio-destro', 'atrio-sinistro'], loop: [0, 0.25],
        html: '<p><b>Nodul sinoatrial</b>, stimulatorul nostru cardiac natural, aruncă o mică scânteie electrică. Impulsul se răspândește pe atrii, apoi trece la <b>nodul atrioventricular</b> și coboară spre ventricule.</p>' },
      { icon: '⬇️', title: 'Atriile umplu ventriculele', focus: ['atrio-destro', 'atrio-sinistro', 'tricuspide', 'mitrale', 'sangue-blu', 'sangue-rosso'], loop: [0.55, 1.2 - 0.02],
        html: '<p>Cât timp ventriculele sunt relaxate, sângele coboară din atrii prin <b>tricuspidă</b> și <b>mitrală</b>, care sunt deschise. La sfârșit atriile se strâng și dau ultima împingere.</p>' },
      { icon: '💥', title: 'Ventriculele împing', focus: ['ventricolo-destro', 'ventricolo-sinistro', 'polmonare', 'aortica', 'tricuspide', 'mitrale'], loop: [0.18, 0.6],
        html: '<p>Ventriculele se contractă cu putere (<b>sistola</b>). Valvele tricuspidă și mitrală se închid brusc, cele <b>pulmonară</b> și <b>aortică</b> se deschid, iar sângele iese în artere.</p><p class="tip">🩺 „Tum-TA”: primul sunet este închiderea valvelor dintre atrii și ventricule, al doilea cel al valvelor arterelor.</p>' },
      { icon: '🫁', title: 'Circulația mică: spre plămâni', focus: ['atrio-destro', 'ventricolo-destro', 'arteria-polmonare', 'vene-polmonari', 'vene-cave', 'sangue-blu', 'atrio-sinistro'],
        html: '<p>Sângele „albastru” vine prin <b>venele cave</b>, trece prin atriul și ventriculul drept și merge la plămâni prin <b>artera pulmonară</b>. Acolo lasă dioxidul de carbon și ia oxigen, apoi se întoarce în atriul stâng prin <b>venele pulmonare</b>.</p>' },
      { icon: '🏃', title: 'Circulația mare: în tot corpul', focus: ['atrio-sinistro', 'ventricolo-sinistro', 'aorta', 'sangue-rosso', 'coronarie', 'vene-polmonari'],
        html: '<p>Ventriculul stâng împinge sângele roșu în <b>aortă</b> și de acolo în toate arterele corpului. Primele care primesc sânge sunt <b>coronarele</b>, care hrănesc chiar inima!</p><p class="tip">⏱️ O picătură de sânge face înconjurul complet al corpului în aproximativ un minut.</p>' }
    ],
    facts: [
      { icon: '✊', title: 'Cât un pumn', html: 'Inima cântărește aproximativ 300 de grame, cât un măr mare, și este puțin deplasată spre stânga în piept.' },
      { icon: '🔢', title: 'Neobosită', html: 'De-a lungul unei vieți întregi inima bate de peste <b>2,5 miliarde</b> de ori, fără să se oprească vreodată să se odihnească.' },
      { icon: '🐋', title: 'Cea mai mare inimă', html: 'Inima balenei albastre cântărește aproximativ 180 kg: este cea mai mare din regnul animal.' },
      { icon: '🏃‍♀️', title: 'Mai repede când alergi', html: 'În repaus, un copil are aproximativ 80–100 de bătăi pe minut; când aleargă, inima accelerează ca să ducă mai mult oxigen mușchilor.' }
    ],
    quiz: [
      { type: 'mc', q: 'Câte camere are inima omului?', options: ['2', '3', '4', '6'], answer: 2, explain: 'Două atrii (sus) și două ventricule (jos).' },
      { type: 'mc', q: 'Unde merge sângele împins de ventriculul drept?', options: ['La creier', 'La plămâni', 'La picioare', 'La ficat'], answer: 1, explain: 'Ventriculul drept trimite sângele sărac în oxigen la plămâni prin artera pulmonară.' },
      { type: 'mc', q: 'Care este cea mai mare arteră din corp?', options: ['Vena cavă', 'Artera pulmonară', 'Aorta', 'Coronara'], answer: 2, explain: 'Aorta pornește din ventriculul stâng și duce sângele oxigenat în tot corpul.' },
      { type: 'tf', q: 'Valvele inimii lasă sângele să treacă într-un singur sens.', answer: true, explain: 'Sunt uși cu sens unic: se închid ca să împiedice sângele să se întoarcă.' },
      { type: 'mc', q: 'Ce declanșează fiecare bătaie?', options: ['Creierul, la fiecare bătaie', 'Un impuls electric al nodului sinoatrial', 'Plămânii când respiri', 'Stomacul'], answer: 1, explain: 'Inima are propriul „stimulator cardiac natural”: nodul sinoatrial.' },
      { type: 'order', q: 'Pune în ordine drumul sângelui care se întoarce din corp', items: ['Venele cave', 'Atriul drept', 'Ventriculul drept', 'Artera pulmonară', 'Plămânii', 'Venele pulmonare', 'Atriul stâng', 'Ventriculul stâng', 'Aorta'], explain: 'Mai întâi circulația mică (inima dreaptă → plămâni → inima stângă), apoi circulația mare, cu aorta.' }
    ]
  });
})();
