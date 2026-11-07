TOPIC('ro', {
  id: "p3-ing-body",
  title: "My body",
  intro: "Hello! 👋 Astăzi învățăm în engleză <b>părțile corpului</b> (the parts of the body), de la cap până la picioare: <i>from head to toe!</i> Vom învăța și să spunem <b>I've got two eyes</b> 👀 și să cântăm o melodie faimoasă în toată lumea. 🎵",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The face: fața 🙂",
      html: `<table><tr><th>Engleză</th><th>Se pronunță</th><th>Română</th></tr>
<tr><td>🙂 <b>face</b></td><td>feis</td><td>față</td></tr>
<tr><td>💇 <b>hair</b></td><td>heăr</td><td>păr</td></tr>
<tr><td>👁️ <b>eye</b> / <b>eyes</b></td><td>ai / aiz</td><td>ochi (singular) / ochi (plural)</td></tr>
<tr><td>👂 <b>ear</b> / <b>ears</b></td><td>ier / ierz</td><td>ureche / urechi</td></tr>
<tr><td>👃 <b>nose</b></td><td>nouz</td><td>nas</td></tr>
<tr><td>👄 <b>mouth</b></td><td>mauth</td><td>gură</td></tr>
<tr><td>🦷 <b>tooth</b> / <b>teeth</b></td><td>tuuth / tiith</td><td>dinte / dinți</td></tr>
</table>
<p>Atenție: <b>hair</b> (păr) în engleză este <b>singular</b>: se spune <i>My hair <b>is</b> brown</i> = Părul meu este castaniu.</p>`
    },
    {
      type: "text", title: "The body: corpul 🧍",
      html: `<ul>
<li>🗣️ <b>head</b> (hed) – cap · <b>neck</b> (nek) – gât · <b>shoulders</b> (șoul-ders) – umeri</li>
<li>💪 <b>arm</b> – braț · <b>hand</b> (hend) – mână · <b>finger</b> (fin-ghăr) – deget de la mână</li>
<li>🫃 <b>tummy</b> (tă-mi) – burtă · <b>back</b> (bek) – spate</li>
<li>🦵 <b>leg</b> – picior (de la șold în jos) · <b>knee</b> (nii, k nu se citește!) – genunchi</li>
<li>🦶 <b>foot</b> / <b>feet</b> (fut / fiit) – laba piciorului / labele picioarelor · <b>toe</b> (tou) – deget de la picior</li>
</ul>`
    },
    {
      type: "widget", title: "Joc: dă nume părților corpului",
      widget: "labelDiagram",
      caption: "Atinge un cerc galben și alege cuvântul englezesc potrivit.",
      options: {
        svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="420" fill="#f0f9ff"/>
<path d="M255,40 Q300,5 345,40 L345,60 L255,60 Z" fill="#92400e"/>
<circle cx="300" cy="75" r="45" fill="#fcd9b6" stroke="#b45309" stroke-width="3"/>
<circle cx="283" cy="68" r="6" fill="#1e3a8a"/>
<circle cx="317" cy="68" r="6" fill="#1e3a8a"/>
<path d="M300,74 L295,88 L303,88" stroke="#b45309" stroke-width="3" fill="none"/>
<path d="M285,100 Q300,110 315,100" stroke="#dc2626" stroke-width="4" fill="none"/>
<ellipse cx="254" cy="78" rx="8" ry="14" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<ellipse cx="346" cy="78" rx="8" ry="14" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<rect x="288" y="118" width="24" height="18" fill="#fcd9b6"/>
<rect x="245" y="135" width="110" height="130" rx="20" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<rect x="205" y="140" width="38" height="110" rx="16" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<rect x="357" y="140" width="38" height="110" rx="16" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<circle cx="224" cy="268" r="17" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<circle cx="376" cy="268" r="17" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<rect x="255" y="262" width="40" height="120" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
<rect x="305" y="262" width="40" height="120" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="268" cy="395" rx="30" ry="13" fill="#7c2d12"/>
<ellipse cx="332" cy="395" rx="30" ry="13" fill="#7c2d12"/>
</svg>`,
        spots: [
          { x: 300, y: 25, label: "hair" },
          { x: 283, y: 68, label: "eye" },
          { x: 300, y: 84, label: "nose" },
          { x: 300, y: 104, label: "mouth" },
          { x: 346, y: 78, label: "ear" },
          { x: 300, y: 127, label: "neck" },
          { x: 365, y: 150, label: "shoulder" },
          { x: 214, y: 200, label: "arm" },
          { x: 376, y: 268, label: "hand" },
          { x: 300, y: 210, label: "tummy" },
          { x: 275, y: 330, label: "leg" },
          { x: 332, y: 395, label: "foot" }
        ]
      }
    },
    {
      type: "remember", title: "Unu, doi… și pluralele ciudate",
      html: `<p>Ca să formezi pluralul se adaugă de obicei <b>-s</b>:</p>
<p>one eye → two eye<b>s</b> 👀 · one hand → two hand<b>s</b> 🙌 · one finger → ten finger<b>s</b></p>
<p>Dar două cuvinte ale corpului sunt „rebele” și schimbă vocalele:</p>
<p style="font-size:1.15em">🦶 one <b>foot</b> → two <b>feet</b> · 🦷 one <b>tooth</b> → many <b>teeth</b></p>
<p>Truc: cele două <b>o</b> devin două <b>e</b>! oo → ee</p>`
    },
    {
      type: "remember", title: "I've got… = Eu am…",
      html: `<p>Pentru a descrie corpul se folosește <b>have got</b> (a avea):</p>
<ul>
<li><b>I've got</b> two eyes. = Eu am doi ochi.</li>
<li><b>I've got</b> brown hair. = Am părul castaniu.</li>
<li><b>She's got</b> long hair. = Ea are părul lung.</li>
<li><b>It's got</b> four legs. = Are patru picioare. 🐶</li>
</ul>
<p>Ține minte: în engleză culoarea vine <b>înainte</b>: <i>blue eyes</i> = ochi albaștri.</p>`
    },
    {
      type: "quiz", title: "Mini-test: the face",
      questions: [
        { type: "mc", q: "Cum se spune «nas» în engleză?", options: ["mouth", "nose", "ear"], answer: 1, explain: "Nas = nose 👃." },
        { type: "mc", q: "«Eyes» înseamnă…", options: ["urechi", "ochi", "dinți"], answer: 1, explain: "Eye = ochi (singular), eyes = ochi (plural) 👀." },
        { type: "text", q: "Scrie în engleză: gură", answer: ["mouth"], explain: "Gură = mouth 👄." }
      ]
    },
    {
      type: "widget", title: "Flashcards: de la cap la picioare",
      widget: "flashcards",
      caption: "Spune cuvântul cu voce tare și atinge acea parte a corpului tău, apoi întoarce cartonașul.",
      options: {
        cards: [
          { front: "🗣️ head", back: "cap" },
          { front: "💇 hair", back: "păr" },
          { front: "👁️ eye", back: "ochi" },
          { front: "👂 ear", back: "ureche" },
          { front: "👃 nose", back: "nas" },
          { front: "👄 mouth", back: "gură" },
          { front: "🦷 teeth", back: "dinți" },
          { front: "💪 arm", back: "braț" },
          { front: "✋ hand", back: "mână" },
          { front: "☝️ finger", back: "deget (de la mână)" },
          { front: "🦵 leg", back: "picior (de la șold în jos)" },
          { front: "🦶 feet", back: "labele picioarelor" },
          { front: "🦶 toes", back: "degetele de la picioare" },
          { front: "🦵 knee", back: "genunchi" }
        ]
      }
    },
    {
      type: "example", title: "Exemplu: cântecul «Head, shoulders, knees and toes» 🎵",
      html: `<p>Este cel mai faimos cântec despre corp din lume! Cântă-l atingând fiecare parte numită, tot mai repede:</p>
<p style="font-size:1.15em"><b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
And <b>eyes</b> and <b>ears</b> and <b>mouth</b> and <b>nose</b>…<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!</p>
<p>(cap, umeri, genunchi și degetele de la picioare… și ochi și urechi și gură și nas)</p>`
    },
    {
      type: "example", title: "Exemplu: monstrul meu 👾",
      html: `<p>Citește descrierea și încearcă să desenezi monstrul:</p>
<p><i>This is my monster. His name is Blob. 👾<br>
He's got <b>three eyes</b> and <b>one big mouth</b>.<br>
He's got <b>green hair</b> and <b>four arms</b>.<br>
He's got <b>two legs</b> and <b>big feet</b>.<br>
He's got <b>six fingers</b> on each hand!</i></p>
<p>Acum este rândul tău: inventează un monstru și descrie-l cu <b>He's got…</b> sau <b>She's got…</b></p>`,
    },
    {
      type: "svg", title: "Monstrul Blob",
      caption: "Three eyes, one big mouth, green hair, four arms, two legs, big feet!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#fdf4ff"/>
<path d="M240,70 L250,40 L262,68 L275,35 L288,66 L300,32 L312,66 L325,35 L338,68 L350,40 L360,70 Z" fill="#16a34a"/>
<ellipse cx="300" cy="140" rx="85" ry="80" fill="#a855f7" stroke="#6b21a8" stroke-width="4"/>
<circle cx="260" cy="115" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="300" cy="100" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="340" cy="115" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="262" cy="117" r="7" fill="#111827"/>
<circle cx="302" cy="102" r="7" fill="#111827"/>
<circle cx="342" cy="117" r="7" fill="#111827"/>
<path d="M245,160 Q300,215 355,160 Z" fill="#7f1d1d"/>
<rect x="270" y="160" width="14" height="14" fill="#ffffff"/>
<rect x="316" y="160" width="14" height="14" fill="#ffffff"/>
<line x1="220" y1="130" x2="160" y2="100" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="220" y1="165" x2="160" y2="195" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="380" y1="130" x2="440" y2="100" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="380" y1="165" x2="440" y2="195" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="270" y1="215" x2="265" y2="255" stroke="#6b21a8" stroke-width="12"/>
<line x1="330" y1="215" x2="335" y2="255" stroke="#6b21a8" stroke-width="12"/>
<ellipse cx="250" cy="265" rx="35" ry="14" fill="#f97316"/>
<ellipse cx="350" cy="265" rx="35" ry="14" fill="#f97316"/>
<text x="90" y="60" font-size="18" font-weight="bold" fill="#16a34a">green hair</text>
<text x="470" y="80" font-size="18" font-weight="bold" fill="#6b21a8">four arms</text>
<text x="470" y="140" font-size="18" font-weight="bold" fill="#1f2937">three eyes</text>
<text x="40" y="250" font-size="18" font-weight="bold" fill="#c2410c">big feet</text>
<text x="420" y="250" font-size="18" font-weight="bold" fill="#7f1d1d">big mouth</text>
</svg>`
    },
    {
      type: "widget", title: "Potrivește: engleză și română",
      widget: "match",
      options: {
        pairs: [["head", "cap"], ["shoulders", "umeri"], ["knees", "genunchi"], ["toes", "degetele de la picioare"], ["neck", "gât"], ["teeth", "dinți"], ["hand", "mână"], ["back", "spate"]]
      }
    },
    {
      type: "widget", title: "Joc: plural cu -s sau plural rebel?",
      widget: "classify",
      caption: "Care cuvinte formează pluralul adăugând -s și care schimbă vocalele?",
      options: {
        groups: ["➕ plural cu -s", "🔀 plural rebel"],
        items: [["eye → eyes", 0], ["ear → ears", 0], ["hand → hands", 0], ["leg → legs", 0], ["finger → fingers", 0], ["arm → arms", 0], ["foot → feet", 1], ["tooth → teeth", 1]]
      }
    },
    {
      type: "curiosity", title: "Știai că… în engleză degetele au două nume?",
      html: `<p>În română spunem „degete” și pentru mâini, și pentru picioare. În engleză nu!</p>
<ul><li>☝️ degetele de la <b>mâini</b> sunt <b>fingers</b>;</li><li>🦶 degetele de la <b>picioare</b> sunt <b>toes</b>.</li></ul>
<p>Iar degetul mare are un nume numai al lui: <b>thumb</b> (tham, b-ul final nu se citește). Englezii spun de fapt <i>fingers and thumbs</i>.</p>`
    },
    {
      type: "curiosity", title: "Știai că… actorii își urează «rupe-ți un picior»?",
      html: `<p>Înainte de un spectacol, în Anglia și în America actorii își spun <b>Break a leg!</b> (literal „rupe-ți un picior!”). Nu este răutate: înseamnă <b>mult noroc</b>, exact ca „baftă!” al nostru! 🍀</p>
<p>Și știi câte oase are un adult? <b>206</b>! Mai mult de jumătate sunt în mâini și în picioare.</p>`
    },
    {
      type: "alternatives", title: "Alte moduri de a ține minte cuvintele",
      intro: "<p>Unii învață mișcându-se, alții privind, alții jucându-se. Alege drumul care merge pentru tine!</p>",
      tabs: [
        {
          label: "🙋 Simon says (joc englezesc)",
          html: `<p>Copiii englezi și americani se joacă <b>Simon says</b> („Simon spune”). Unul este Simon și dă ordine:</p>
<p><i>«Simon says: touch your <b>nose</b>!»</i> 👃 → toți își ating nasul.<br>
<i>«Simon says: touch your <b>knees</b>!»</i> → toți își ating genunchii.<br>
<i>«Touch your <b>head</b>!»</i> → atenție! Simon nu a spus-o: cine se mișcă este eliminat! 😄</p>
<p>Mișcarea corpului în timp ce spui cuvântul ajută creierul să-l țină minte: profesorii o numesc <b>TPR</b> (răspuns fizic total).</p>`
        },
        {
          label: "🔗 Cuvinte rude",
          html: `<p>Engleza este „verișoara” germanei: multe cuvinte despre corp seamănă!</p>
<table><tr><th>Engleză</th><th>Germană</th><th>Română</th></tr>
<tr><td>hand</td><td>Hand</td><td>mână</td></tr>
<tr><td>arm</td><td>Arm</td><td>braț</td></tr>
<tr><td>finger</td><td>Finger</td><td>deget</td></tr>
<tr><td>knee</td><td>Knie</td><td>genunchi</td></tr>
<tr><td>nose</td><td>Nase</td><td>nas</td></tr></table>
<p>Și cu româna? <b>nose</b> seamănă cu <b>nas</b>, <b>mouth</b>… nu! Dar <b>face</b> amintește de <b>față</b> (vine din latină, prin franceză).</p>`
        },
        {
          label: "🖼️ Desenează și scrie",
          html: `<p>Desenează o persoană mare pe o foaie și scrie cuvintele cu săgeți. Folosește o culoare pentru <b>față</b>, una pentru <b>corp</b> și una pentru <b>picioare și labele picioarelor</b>. Creierul tău va ține minte și culoarea!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#fffbeb"/>
<circle cx="300" cy="50" r="30" fill="#fcd9b6" stroke="#b45309" stroke-width="3"/>
<line x1="300" y1="80" x2="300" y2="160" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="100" x2="245" y2="140" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="100" x2="355" y2="140" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="160" x2="265" y2="220" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="160" x2="335" y2="220" stroke="#111827" stroke-width="5"/>
<line x1="230" y1="40" x2="270" y2="45" stroke="#dc2626" stroke-width="2"/>
<text x="140" y="45" font-size="20" font-weight="bold" fill="#dc2626">head</text>
<line x1="390" y1="125" x2="350" y2="135" stroke="#16a34a" stroke-width="2"/>
<text x="395" y="130" font-size="20" font-weight="bold" fill="#16a34a">arm</text>
<line x1="390" y1="200" x2="320" y2="195" stroke="#2563eb" stroke-width="2"/>
<text x="395" y="205" font-size="20" font-weight="bold" fill="#2563eb">leg</text>
<line x1="210" y1="225" x2="262" y2="222" stroke="#2563eb" stroke-width="2"/>
<text x="140" y="230" font-size="20" font-weight="bold" fill="#2563eb">foot</text>
</svg>`
        },
        {
          label: "🃏 Cartonașe cu emoji",
          html: `<p>Privește doar emoji-ul, spune cuvântul englezesc și apoi întoarce ca să verifici.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "👁️", back: "eye" }, { front: "👂", back: "ear" }, { front: "👃", back: "nose" }, { front: "👄", back: "mouth" }, { front: "🦷", back: "tooth" }, { front: "✋", back: "hand" }, { front: "🦵", back: "leg" }, { front: "🦶", back: "foot" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Hartă: corpul în engleză",
      nodes: [
        { id: "body", label: "My body", x: 50, y: 6, color: "#0ea5e9", html: "Corpul: <b>body</b>.", why: "Cuvântul <i>body</i> vine din engleza veche <i>bodig</i>, de origine germanică. Engleza s-a născut din limba anglilor și a saxonilor, popoare germanice sosite în Britania în jurul secolului al V-lea: de aceea multe cuvinte despre corp seamănă cu germana." },
        { id: "head", label: "Head & face", x: 18, y: 32, color: "#f97316", html: "head, hair, eyes, ears, nose, mouth, teeth.", why: "Sunt printre primele cuvinte pe care le înveți în orice limbă, pentru că arată lucruri pe care le vedem și le atingem în fiecare zi. <i>Face</i>, în schimb, a venit cu normanzii francezi în 1066: vine din latinescul <i>facies</i>, ca românescul „față”." },
        { id: "upper", label: "Arms & hands", x: 50, y: 32, color: "#22c55e", html: "neck, shoulders, arms, hands, fingers, thumb.", why: "<i>Hand</i>, <i>arm</i> și <i>finger</i> sunt cuvinte germanice foarte vechi, aproape la fel în germană (Hand, Arm, Finger)." },
        { id: "lower", label: "Legs & feet", x: 82, y: 32, color: "#2563eb", html: "legs, knees, feet, toes.", why: "În <i>knee</i> k nu se mai pronunță, dar odinioară se pronunța: în engleza veche se spunea „cneo”. Scrierea a rămas veche, iar pronunția s-a schimbat." },
        { id: "plural", label: "Plural cu -s", x: 25, y: 62, color: "#a855f7", html: "eye → eyes, hand → hands.", why: "În engleza veche existau multe feluri de a forma pluralul; cu timpul aproape toate cuvintele au primit -s, care era cel mai obișnuit mod." },
        { id: "irreg", label: "Plurale rebele", x: 75, y: 62, color: "#e11d48", html: "foot → feet, tooth → teeth.", why: "Sunt „fosile” ale limbii vechi: acum mii de ani pluralul se forma schimbând vocala din interiorul cuvântului. Cuvintele foarte folosite precum foot și tooth au păstrat vechea regulă, ca și man → men." },
        { id: "got", label: "I've got…", x: 25, y: 90, color: "#ca8a04", html: "Servește pentru a descrie: I've got blue eyes.", why: "<i>Have got</i> este tipic pentru engleza britanică vorbită; americanii spun mai des <i>I have</i>. Înseamnă același lucru: a avea, a poseda." },
        { id: "adj", label: "Culoarea înainte", x: 75, y: 90, color: "#0d9488", html: "brown hair, blue eyes, big feet.", why: "În engleză adjectivul stă aproape întotdeauna înaintea substantivului și nu se schimbă niciodată: big foot, big feet. În română, în schimb, de obicei stă după și se acordă (ochi albaștri, ochiul albastru)." }
      ],
      edges: [
        ["body", "head", "sus"], ["body", "upper", "la mijloc"], ["body", "lower", "jos"],
        ["upper", "plural", "hands"], ["lower", "irreg", "feet"], ["head", "irreg", "teeth"],
        ["plural", "got", "I've got two…"], ["got", "adj", "se descrie cu"]
      ]
    },
    {
      type: "quiz", title: "Mini-test: from head to toe",
      questions: [
        { type: "mc", q: "Pluralul lui «foot» este…", options: ["foots", "feet", "feets"], answer: 1, explain: "Foot → feet: plural rebel, oo devine ee." },
        { type: "mc", q: "Degetele de la picioare în engleză sunt…", options: ["fingers", "toes", "thumbs"], answer: 1, explain: "Toes = degetele de la picioare; fingers = degetele de la mâini." },
        { type: "tf", q: "«I've got two ears» înseamnă «Eu am două urechi».", answer: true, explain: "I've got = eu am; ears = urechi 👂." }
      ]
    }
  ],
  glossary: [
    { t: "body", d: "corp" },
    { t: "head", d: "cap" },
    { t: "face", d: "față" },
    { t: "hair", d: "păr (în engleză este singular: my hair is…)" },
    { t: "eye / eyes", d: "ochi (singular) / ochi (plural)" },
    { t: "ear / ears", d: "ureche / urechi" },
    { t: "nose", d: "nas" },
    { t: "mouth", d: "gură" },
    { t: "tooth / teeth", d: "dinte / dinți (plural neregulat)" },
    { t: "neck · shoulders", d: "gât · umeri" },
    { t: "arm · hand · finger · thumb", d: "braț · mână · deget de la mână · degetul mare" },
    { t: "leg · knee", d: "picior (de la șold în jos) · genunchi (k nu se pronunță)" },
    { t: "foot / feet · toe", d: "laba piciorului / labele picioarelor (plural neregulat) · deget de la picior" },
    { t: "I've got", d: "eu am (pentru a descrie: I've got brown hair)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cum se spune «cap» în engleză?", options: ["hand", "head", "hair"], answer: 1, explain: "Cap = head; hand = mână; hair = păr." },
      { type: "mc", q: "«Mouth» înseamnă…", options: ["gură", "nas", "ureche"], answer: 0, explain: "Mouth = gură 👄." },
      { type: "text", q: "Scrie în engleză: ochi (la plural)", answer: ["eyes"], explain: "Eye = ochi, eyes = ochii (plural)." },
      { type: "text", q: "Scrie în engleză: picior", answer: ["leg"], explain: "Picior = leg 🦵." },
      { type: "mc", q: "Care este pluralul lui «tooth»?", options: ["tooths", "teeth", "toothes"], answer: 1, explain: "Tooth → teeth: oo devine ee." },
      { type: "mc", q: "Cum se numesc degetele de la mâini?", options: ["toes", "fingers", "knees"], answer: 1, explain: "Fingers = degetele de la mâini; toes = degetele de la picioare." },
      { type: "tf", q: "În «knee» litera k se pronunță.", answer: false, explain: "Knee se citește «nii»: k este mută." },
      { type: "tf", q: "«She's got long hair» înseamnă «Ea are părul lung».", answer: true, explain: "She's got = ea are; long hair = păr lung." },
      { type: "mc", q: "Completează: «I've got two blue …»", options: ["eye", "eyes", "nose"], answer: 1, explain: "Doi → plural: two blue eyes. Culoarea stă înaintea substantivului." },
      { type: "order", q: "Pune în ordine cuvintele din cântec: Head, …", items: ["head", "shoulders", "knees", "toes"], explain: "Head, shoulders, knees and toes: de sus în jos!" },
      { type: "mc", q: "Cum se spune «umeri»?", options: ["shoulders", "shoes", "legs"], answer: 0, explain: "Shoulders = umeri. Shoes = pantofi!" },
      { type: "mc", q: "«Break a leg!» se spune pentru a ura…", options: ["noapte bună", "noroc", "poftă bună"], answer: 1, explain: "Este ca al nostru «baftă!» pentru actori." }
    ]
  }
});
