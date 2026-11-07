TOPIC('de', {
  id: "p3-ing-body",
  title: "My body",
  intro: "Hello! 👋 Heute lernen wir auf Englisch die <b>Körperteile</b> (the parts of the body), vom Kopf bis zu den Füßen: <i>from head to toe!</i> Wir lernen auch, <b>I've got two eyes</b> 👀 zu sagen, und singen ein Lied, das auf der ganzen Welt bekannt ist. 🎵",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The face: das Gesicht 🙂",
      html: `<table><tr><th>Englisch</th><th>Aussprache</th><th>Deutsch</th></tr>
<tr><td>🙂 <b>face</b></td><td>feis</td><td>Gesicht</td></tr>
<tr><td>💇 <b>hair</b></td><td>här</td><td>Haare</td></tr>
<tr><td>👁️ <b>eye</b> / <b>eyes</b></td><td>ai / aiz</td><td>Auge / Augen</td></tr>
<tr><td>👂 <b>ear</b> / <b>ears</b></td><td>ier / ierz</td><td>Ohr / Ohren</td></tr>
<tr><td>👃 <b>nose</b></td><td>nous</td><td>Nase</td></tr>
<tr><td>👄 <b>mouth</b></td><td>mauth (th wie in „think“)</td><td>Mund</td></tr>
<tr><td>🦷 <b>tooth</b> / <b>teeth</b></td><td>tuuth / tiith</td><td>Zahn / Zähne</td></tr>
</table>
<p>Aufgepasst: <b>hair</b> (Haare) ist im Englischen <b>Einzahl</b>: Man sagt <i>My hair <b>is</b> brown</i> = Meine Haare sind braun.</p>`
    },
    {
      type: "text", title: "The body: der Körper 🧍",
      html: `<ul>
<li>🗣️ <b>head</b> (hed) – Kopf · <b>neck</b> (nek) – Hals · <b>shoulders</b> (schoul-derz) – Schultern</li>
<li>💪 <b>arm</b> – Arm · <b>hand</b> (händ) – Hand · <b>finger</b> (fing-ger) – Finger</li>
<li>🫃 <b>tummy</b> (ta-mi) – Bauch · <b>back</b> (bäk) – Rücken</li>
<li>🦵 <b>leg</b> – Bein · <b>knee</b> (nii, das k spricht man nicht!) – Knie</li>
<li>🦶 <b>foot</b> / <b>feet</b> (fut / fiit) – Fuß / Füße · <b>toe</b> (tou) – Zeh</li>
</ul>`
    },
    {
      type: "widget", title: "Spiel: Benenne die Körperteile",
      widget: "labelDiagram",
      caption: "Tippe auf einen gelben Punkt und wähle das richtige englische Wort.",
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
      type: "remember", title: "Eins, zwei … und die seltsamen Mehrzahlen",
      html: `<p>Die Mehrzahl bildet man meistens mit <b>-s</b>:</p>
<p>one eye → two eye<b>s</b> 👀 · one hand → two hand<b>s</b> 🙌 · one finger → ten finger<b>s</b></p>
<p>Aber zwei Körperwörter sind „Rebellen“ und verändern die Vokale:</p>
<p style="font-size:1.15em">🦶 one <b>foot</b> → two <b>feet</b> · 🦷 one <b>tooth</b> → many <b>teeth</b></p>
<p>Trick: Die zwei <b>o</b> werden zu zwei <b>e</b>! oo → ee</p>`
    },
    {
      type: "remember", title: "I've got… = Ich habe …",
      html: `<p>Um den Körper zu beschreiben, benutzt man <b>have got</b> (haben):</p>
<ul>
<li><b>I've got</b> two eyes. = Ich habe zwei Augen.</li>
<li><b>I've got</b> brown hair. = Ich habe braune Haare.</li>
<li><b>She's got</b> long hair. = Sie hat lange Haare.</li>
<li><b>It's got</b> four legs. = Es hat vier Beine. 🐶</li>
</ul>
<p>Denk daran: Im Englischen steht die Farbe <b>vorne</b>: <i>blue eyes</i> = blaue Augen.</p>`
    },
    {
      type: "quiz", title: "Mini-Quiz: the face",
      questions: [
        { type: "mc", q: "Wie sagt man „Nase“ auf Englisch?", options: ["mouth", "nose", "ear"], answer: 1, explain: "Nase = nose 👃." },
        { type: "mc", q: "„Eyes“ bedeutet …", options: ["Ohren", "Augen", "Zähne"], answer: 1, explain: "Eye = Auge, eyes = Augen 👀." },
        { type: "text", q: "Schreibe auf Englisch: Mund", answer: ["mouth"], explain: "Mund = mouth 👄." }
      ]
    },
    {
      type: "widget", title: "Karteikarten: vom Kopf bis zu den Füßen",
      widget: "flashcards",
      caption: "Sag das Wort laut und tippe dabei auf diesen Körperteil, dann dreh die Karte um.",
      options: {
        cards: [
          { front: "🗣️ head", back: "Kopf" },
          { front: "💇 hair", back: "Haare" },
          { front: "👁️ eye", back: "Auge" },
          { front: "👂 ear", back: "Ohr" },
          { front: "👃 nose", back: "Nase" },
          { front: "👄 mouth", back: "Mund" },
          { front: "🦷 teeth", back: "Zähne" },
          { front: "💪 arm", back: "Arm" },
          { front: "✋ hand", back: "Hand" },
          { front: "☝️ finger", back: "Finger" },
          { front: "🦵 leg", back: "Bein" },
          { front: "🦶 feet", back: "Füße" },
          { front: "🦶 toes", back: "Zehen" },
          { front: "🦵 knee", back: "Knie" }
        ]
      }
    },
    {
      type: "example", title: "Beispiel: das Lied „Head, shoulders, knees and toes“ 🎵",
      html: `<p>Das ist das berühmteste Körperlied der Welt! Sing es und berühre dabei jeden genannten Körperteil – immer schneller:</p>
<p style="font-size:1.15em"><b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
And <b>eyes</b> and <b>ears</b> and <b>mouth</b> and <b>nose</b>…<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!</p>
<p>(Kopf, Schultern, Knie und Zehen … und Augen und Ohren und Mund und Nase)</p>`
    },
    {
      type: "example", title: "Beispiel: mein Monster 👾",
      html: `<p>Lies die Beschreibung und versuche, das Monster zu zeichnen:</p>
<p><i>This is my monster. His name is Blob. 👾<br>
He's got <b>three eyes</b> and <b>one big mouth</b>.<br>
He's got <b>green hair</b> and <b>four arms</b>.<br>
He's got <b>two legs</b> and <b>big feet</b>.<br>
He's got <b>six fingers</b> on each hand!</i></p>
<p>Jetzt bist du dran: Erfinde ein Monster und beschreibe es mit <b>He's got…</b> oder <b>She's got…</b></p>`,
    },
    {
      type: "svg", title: "Das Monster Blob",
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
      type: "widget", title: "Zuordnen: Englisch und Deutsch",
      widget: "match",
      options: {
        pairs: [["head", "Kopf"], ["shoulders", "Schultern"], ["knees", "Knie"], ["toes", "Zehen"], ["neck", "Hals"], ["teeth", "Zähne"], ["hand", "Hand"], ["back", "Rücken"]]
      }
    },
    {
      type: "widget", title: "Spiel: Mehrzahl mit -s oder Rebellen-Mehrzahl?",
      widget: "classify",
      caption: "Welche Wörter bilden die Mehrzahl mit -s und welche verändern die Vokale?",
      options: {
        groups: ["➕ Mehrzahl mit -s", "🔀 Rebellen-Mehrzahl"],
        items: [["eye → eyes", 0], ["ear → ears", 0], ["hand → hands", 0], ["leg → legs", 0], ["finger → fingers", 0], ["arm → arms", 0], ["foot → feet", 1], ["tooth → teeth", 1]]
      }
    },
    {
      type: "curiosity", title: "Wusstest du, dass … Finger im Englischen zwei Namen haben?",
      html: `<p>Im Deutschen sagen wir „Finger“ für die Hand und „Zehen“ für den Fuß – im Englischen ist das genauso klar getrennt:</p>
<ul><li>☝️ die Finger an den <b>Händen</b> heißen <b>fingers</b>;</li><li>🦶 die Zehen an den <b>Füßen</b> heißen <b>toes</b>.</li></ul>
<p>Und der Daumen hat einen ganz eigenen Namen: <b>thumb</b> (thamm, das b am Ende spricht man nicht). Die Engländer sagen deshalb <i>fingers and thumbs</i>.</p>`
    },
    {
      type: "curiosity", title: "Wusstest du, dass … sich Schauspieler „Brich dir ein Bein“ wünschen?",
      html: `<p>Vor einer Aufführung sagen sich Schauspieler in England und Amerika <b>Break a leg!</b> (wörtlich „Brich dir ein Bein!“). Das ist nicht böse gemeint: Es bedeutet <b>viel Glück</b>, genau wie bei uns „Hals- und Beinbruch“! 🍀</p>
<p>Und weißt du, wie viele Knochen ein Erwachsener hat? <b>206</b>! Mehr als die Hälfte davon sind in den Händen und Füßen.</p>`
    },
    {
      type: "alternatives", title: "Andere Wege, sich die Wörter zu merken",
      intro: "<p>Manche lernen durch Bewegung, andere durch Anschauen, wieder andere durch Spielen. Wähle den Weg, der zu dir passt!</p>",
      tabs: [
        {
          label: "🙋 Simon says (englisches Spiel)",
          html: `<p>Englische und amerikanische Kinder spielen <b>Simon says</b> („Simon sagt“). Einer ist Simon und gibt Befehle:</p>
<p><i>„Simon says: touch your <b>nose</b>!“</i> 👃 → alle fassen sich an die Nase.<br>
<i>„Simon says: touch your <b>knees</b>!“</i> → alle fassen sich an die Knie.<br>
<i>„Touch your <b>head</b>!“</i> → Achtung! Simon hat es nicht gesagt: Wer sich bewegt, scheidet aus! 😄</p>
<p>Den Körper zu bewegen, während man das Wort sagt, hilft dem Gehirn, es sich zu merken: Lehrer nennen das <b>TPR</b> (Total Physical Response).</p>`
        },
        {
          label: "🔗 Verwandte Wörter",
          html: `<p>Englisch ist eine „Cousine“ des Deutschen: Viele Körperwörter sehen ähnlich aus!</p>
<table><tr><th>Englisch</th><th>Deutsch</th></tr>
<tr><td>hand</td><td>Hand</td></tr>
<tr><td>arm</td><td>Arm</td></tr>
<tr><td>finger</td><td>Finger</td></tr>
<tr><td>knee</td><td>Knie</td></tr>
<tr><td>nose</td><td>Nase</td></tr>
<tr><td>ear</td><td>Ohr</td></tr>
<tr><td>mouth</td><td>Mund</td></tr>
<tr><td>hair</td><td>Haar</td></tr></table>
<p>Bei <b>face</b> klappt das nicht: Es kommt aus dem Französischen und Lateinischen (<i>facies</i>), nicht aus dem Germanischen – deshalb ist es dem deutschen „Gesicht“ gar nicht ähnlich.</p>`
        },
        {
          label: "🖼️ Zeichne und schreibe",
          html: `<p>Zeichne einen großen Menschen auf ein Blatt und schreibe die Wörter mit Pfeilen dazu. Nimm eine Farbe für das <b>Gesicht</b>, eine für den <b>Körper</b> und eine für <b>Beine und Füße</b>. Dein Gehirn merkt sich auch die Farbe!</p>`,
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
          label: "🃏 Karten mit Emojis",
          html: `<p>Schau nur das Emoji an, sag das englische Wort und dreh dann um, um es zu prüfen.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "👁️", back: "eye" }, { front: "👂", back: "ear" }, { front: "👃", back: "nose" }, { front: "👄", back: "mouth" }, { front: "🦷", back: "tooth" }, { front: "✋", back: "hand" }, { front: "🦵", back: "leg" }, { front: "🦶", back: "foot" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Landkarte: der Körper auf Englisch",
      nodes: [
        { id: "body", label: "My body", x: 50, y: 6, color: "#0ea5e9", html: "Der Körper: <b>body</b>.", why: "Das Wort <i>body</i> stammt vom altenglischen <i>bodig</i> und hat germanische Wurzeln. Das Englische entstand aus der Sprache der Angeln und Sachsen, germanischer Völker, die etwa im 5. Jahrhundert nach Britannien kamen: Deshalb ähneln viele Körperwörter dem Deutschen." },
        { id: "head", label: "Head & face", x: 18, y: 32, color: "#f97316", html: "head, hair, eyes, ears, nose, mouth, teeth.", why: "Das gehört in jeder Sprache zu den ersten Wörtern, die man lernt, weil sie Dinge bezeichnen, die wir jeden Tag sehen und berühren. <i>Face</i> dagegen kam 1066 mit den französischen Normannen: Es stammt vom lateinischen <i>facies</i>." },
        { id: "upper", label: "Arms & hands", x: 50, y: 32, color: "#22c55e", html: "neck, shoulders, arms, hands, fingers, thumb.", why: "<i>Hand</i>, <i>arm</i> und <i>finger</i> sind uralte germanische Wörter, im Deutschen fast gleich (Hand, Arm, Finger)." },
        { id: "lower", label: "Legs & feet", x: 82, y: 32, color: "#2563eb", html: "legs, knees, feet, toes.", why: "In <i>knee</i> spricht man das k nicht mehr, früher aber schon: Im Altenglischen sagte man „cneo“ (und im Deutschen sagen wir bis heute „Knie“ mit k). Die Schreibweise ist alt geblieben, während sich die Aussprache verändert hat." },
        { id: "plural", label: "Mehrzahl mit -s", x: 25, y: 62, color: "#a855f7", html: "eye → eyes, hand → hands.", why: "Im Altenglischen gab es viele Arten, die Mehrzahl zu bilden; mit der Zeit bekamen fast alle Wörter das -s, das die häufigste Form war." },
        { id: "irreg", label: "Rebellen-Mehrzahlen", x: 75, y: 62, color: "#e11d48", html: "foot → feet, tooth → teeth.", why: "Das sind „Fossilien“ der alten Sprache: Vor Tausenden von Jahren bildete man die Mehrzahl, indem man den Vokal im Wort veränderte. Sehr häufige Wörter wie foot und tooth haben die alte Regel behalten, genauso wie man → men – und im Deutschen Fuß → Füße." },
        { id: "got", label: "I've got…", x: 25, y: 90, color: "#ca8a04", html: "Dient zum Beschreiben: I've got blue eyes.", why: "<i>Have got</i> ist typisch für gesprochenes britisches Englisch; Amerikaner sagen öfter <i>I have</i>. Beides bedeutet dasselbe: haben, besitzen." },
        { id: "adj", label: "Farbe zuerst", x: 75, y: 90, color: "#0d9488", html: "brown hair, blue eyes, big feet.", why: "Im Englischen steht das Adjektiv fast immer vor dem Nomen und verändert sich nie: big foot, big feet. Das ist wie im Deutschen, nur dass wir dort die Endung anpassen (ein großer Fuß, große Füße)." }
      ],
      edges: [
        ["body", "head", "oben"], ["body", "upper", "in der Mitte"], ["body", "lower", "unten"],
        ["upper", "plural", "hands"], ["lower", "irreg", "feet"], ["head", "irreg", "teeth"],
        ["plural", "got", "I've got two…"], ["got", "adj", "beschreibt man mit"]
      ]
    },
    {
      type: "quiz", title: "Mini-Quiz: from head to toe",
      questions: [
        { type: "mc", q: "Die Mehrzahl von „foot“ ist …", options: ["foots", "feet", "feets"], answer: 1, explain: "Foot → feet: Rebellen-Mehrzahl, oo wird zu ee." },
        { type: "mc", q: "Die Zehen heißen auf Englisch …", options: ["fingers", "toes", "thumbs"], answer: 1, explain: "Toes = Zehen; fingers = Finger an den Händen." },
        { type: "tf", q: "„I've got two ears“ bedeutet „Ich habe zwei Ohren“.", answer: true, explain: "I've got = ich habe; ears = Ohren 👂." }
      ]
    }
  ],
  glossary: [
    { t: "body", d: "Körper" },
    { t: "head", d: "Kopf" },
    { t: "face", d: "Gesicht" },
    { t: "hair", d: "Haare (im Englischen Einzahl: my hair is…)" },
    { t: "eye / eyes", d: "Auge / Augen" },
    { t: "ear / ears", d: "Ohr / Ohren" },
    { t: "nose", d: "Nase" },
    { t: "mouth", d: "Mund" },
    { t: "tooth / teeth", d: "Zahn / Zähne (unregelmäßige Mehrzahl)" },
    { t: "neck · shoulders", d: "Hals · Schultern" },
    { t: "arm · hand · finger · thumb", d: "Arm · Hand · Finger · Daumen" },
    { t: "leg · knee", d: "Bein · Knie (das k spricht man nicht)" },
    { t: "foot / feet · toe", d: "Fuß / Füße (unregelmäßige Mehrzahl) · Zeh" },
    { t: "I've got", d: "ich habe (zum Beschreiben: I've got brown hair)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie sagt man „Kopf“ auf Englisch?", options: ["hand", "head", "hair"], answer: 1, explain: "Kopf = head; hand = Hand; hair = Haare." },
      { type: "mc", q: "„Mouth“ bedeutet …", options: ["Mund", "Nase", "Ohr"], answer: 0, explain: "Mouth = Mund 👄." },
      { type: "text", q: "Schreibe auf Englisch: Augen", answer: ["eyes"], explain: "Eye = Auge, eyes = Augen." },
      { type: "text", q: "Schreibe auf Englisch: Bein", answer: ["leg"], explain: "Bein = leg 🦵." },
      { type: "mc", q: "Was ist die Mehrzahl von „tooth“?", options: ["tooths", "teeth", "toothes"], answer: 1, explain: "Tooth → teeth: oo wird zu ee." },
      { type: "mc", q: "Wie heißen die Finger der Hände?", options: ["toes", "fingers", "knees"], answer: 1, explain: "Fingers = Finger an den Händen; toes = Zehen an den Füßen." },
      { type: "tf", q: "In „knee“ spricht man den Buchstaben k aus.", answer: false, explain: "Knee spricht man „nii“: Das k ist stumm." },
      { type: "tf", q: "„She's got long hair“ bedeutet „Sie hat lange Haare“.", answer: true, explain: "She's got = sie hat; long hair = lange Haare." },
      { type: "mc", q: "Ergänze: „I've got two blue …“", options: ["eye", "eyes", "nose"], answer: 1, explain: "Zwei → Mehrzahl: two blue eyes. Die Farbe steht vor dem Nomen." },
      { type: "order", q: "Bring die Wörter aus dem Lied in die richtige Reihenfolge: Head, …", items: ["head", "shoulders", "knees", "toes"], explain: "Head, shoulders, knees and toes: von oben nach unten!" },
      { type: "mc", q: "Wie sagt man „Schultern“?", options: ["shoulders", "shoes", "legs"], answer: 0, explain: "Shoulders = Schultern. Shoes = Schuhe!" },
      { type: "mc", q: "„Break a leg!“ sagt man, um zu wünschen …", options: ["gute Nacht", "viel Glück", "guten Appetit"], answer: 1, explain: "Das ist wie unser „Hals- und Beinbruch“ für Schauspieler." }
    ]
  }
});
