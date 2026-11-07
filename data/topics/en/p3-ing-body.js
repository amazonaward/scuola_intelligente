TOPIC('en', {
  id: "p3-ing-body",
  title: "My body",
  intro: "Hello! 👋 Today we learn the <b>parts of the body</b> in English, from head to toe: <i>from head to toe!</i> We will also learn to say <b>I've got two eyes</b> 👀 and to sing a song that is famous all over the world. 🎵",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The face 🙂",
      html: `<table><tr><th>English</th><th>Sounds like (Italian spelling)</th><th>Italian</th></tr>
<tr><td>🙂 <b>face</b></td><td>feis</td><td>faccia</td></tr>
<tr><td>💇 <b>hair</b></td><td>hèr</td><td>capelli</td></tr>
<tr><td>👁️ <b>eye</b> / <b>eyes</b></td><td>ai / aiz</td><td>occhio / occhi</td></tr>
<tr><td>👂 <b>ear</b> / <b>ears</b></td><td>ìar / ìarz</td><td>orecchio / orecchie</td></tr>
<tr><td>👃 <b>nose</b></td><td>nous</td><td>naso</td></tr>
<tr><td>👄 <b>mouth</b></td><td>mauth</td><td>bocca</td></tr>
<tr><td>🦷 <b>tooth</b> / <b>teeth</b></td><td>tuuth / tiith</td><td>dente / denti</td></tr>
</table>
<p>Careful: <b>hair</b> in English is <b>singular</b>: we say <i>My hair <b>is</b> brown</i> = my hair is brown (in Italian, "capelli" is plural).</p>`
    },
    {
      type: "text", title: "The body 🧍",
      html: `<ul>
<li>🗣️ <b>head</b> (hed) – testa · <b>neck</b> (nek) – collo · <b>shoulders</b> (shòl-ders) – spalle</li>
<li>💪 <b>arm</b> – braccio · <b>hand</b> (hend) – mano · <b>finger</b> (fin-gher) – dito della mano</li>
<li>🫃 <b>tummy</b> (tà-mi) – pancia · <b>back</b> (bek) – schiena</li>
<li>🦵 <b>leg</b> – gamba · <b>knee</b> (nii, the k is silent!) – ginocchio</li>
<li>🦶 <b>foot</b> / <b>feet</b> (fut / fiit) – piede / piedi · <b>toe</b> (tou) – dito del piede</li>
</ul>`
    },
    {
      type: "widget", title: "Game: name the parts of the body",
      widget: "labelDiagram",
      caption: "Touch a yellow dot and choose the right English word.",
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
      type: "remember", title: "One, two… and the strange plurals",
      html: `<p>To make the plural we usually add <b>-s</b>:</p>
<p>one eye → two eye<b>s</b> 👀 · one hand → two hand<b>s</b> 🙌 · one finger → ten finger<b>s</b></p>
<p>But two body words are "rebels" and change their vowels:</p>
<p style="font-size:1.15em">🦶 one <b>foot</b> → two <b>feet</b> · 🦷 one <b>tooth</b> → many <b>teeth</b></p>
<p>Trick: the two <b>o</b>s become two <b>e</b>s! oo → ee</p>`
    },
    {
      type: "remember", title: "I've got… = I have…",
      html: `<p>To describe the body we use <b>have got</b>:</p>
<ul>
<li><b>I've got</b> two eyes. = I have two eyes (Italian: Io ho due occhi).</li>
<li><b>I've got</b> brown hair. = I have brown hair (Ho i capelli castani).</li>
<li><b>She's got</b> long hair. = She has long hair (Lei ha i capelli lunghi).</li>
<li><b>It's got</b> four legs. = It has four legs (Ha quattro zampe). 🐶</li>
</ul>
<p>Remember: in English the colour comes <b>first</b>: <i>blue eyes</i> (in Italian: occhi azzurri).</p>`
    },
    {
      type: "quiz", title: "Mini-quiz: the face",
      questions: [
        { type: "mc", q: "How do you say «naso» in English?", options: ["mouth", "nose", "ear"], answer: 1, explain: "Naso = nose 👃." },
        { type: "mc", q: "«Eyes» means…", options: ["orecchie", "occhi", "denti"], answer: 1, explain: "Eye = occhio, eyes = occhi 👀." },
        { type: "text", q: "Write in English: bocca", answer: ["mouth"], explain: "Bocca = mouth 👄." }
      ]
    },
    {
      type: "widget", title: "Flashcards: from head to toe",
      widget: "flashcards",
      caption: "Say the word out loud and touch that part of your body, then flip the card.",
      options: {
        cards: [
          { front: "🗣️ head", back: "testa" },
          { front: "💇 hair", back: "capelli" },
          { front: "👁️ eye", back: "occhio" },
          { front: "👂 ear", back: "orecchio" },
          { front: "👃 nose", back: "naso" },
          { front: "👄 mouth", back: "bocca" },
          { front: "🦷 teeth", back: "denti" },
          { front: "💪 arm", back: "braccio" },
          { front: "✋ hand", back: "mano" },
          { front: "☝️ finger", back: "dito (della mano)" },
          { front: "🦵 leg", back: "gamba" },
          { front: "🦶 feet", back: "piedi" },
          { front: "🦶 toes", back: "dita dei piedi" },
          { front: "🦵 knee", back: "ginocchio" }
        ]
      }
    },
    {
      type: "example", title: "Example: the song «Head, shoulders, knees and toes» 🎵",
      html: `<p>It is the most famous body song in the world! Sing it touching each part you name, faster and faster:</p>
<p style="font-size:1.15em"><b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
And <b>eyes</b> and <b>ears</b> and <b>mouth</b> and <b>nose</b>…<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!</p>
<p>(testa, spalle, ginocchia e dita dei piedi… e occhi e orecchie e bocca e naso)</p>`
    },
    {
      type: "example", title: "Example: my monster 👾",
      html: `<p>Read the description and try to draw the monster:</p>
<p><i>This is my monster. His name is Blob. 👾<br>
He's got <b>three eyes</b> and <b>one big mouth</b>.<br>
He's got <b>green hair</b> and <b>four arms</b>.<br>
He's got <b>two legs</b> and <b>big feet</b>.<br>
He's got <b>six fingers</b> on each hand!</i></p>
<p>Now it's your turn: invent a monster and describe it with <b>He's got…</b> or <b>She's got…</b></p>`,
    },
    {
      type: "svg", title: "The monster Blob",
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
      type: "widget", title: "Match: English and Italian",
      widget: "match",
      options: {
        pairs: [["head", "testa"], ["shoulders", "spalle"], ["knees", "ginocchia"], ["toes", "dita dei piedi"], ["neck", "collo"], ["teeth", "denti"], ["hand", "mano"], ["back", "schiena"]]
      }
    },
    {
      type: "widget", title: "Game: plural with -s or rebel plural?",
      widget: "classify",
      caption: "Which words make the plural by adding -s and which change their vowels?",
      options: {
        groups: ["➕ plural with -s", "🔀 rebel plural"],
        items: [["eye → eyes", 0], ["ear → ears", 0], ["hand → hands", 0], ["leg → legs", 0], ["finger → fingers", 0], ["arm → arms", 0], ["foot → feet", 1], ["tooth → teeth", 1]]
      }
    },
    {
      type: "curiosity", title: "Did you know… in English fingers have two names?",
      html: `<p>In Italian we say "dita" both for hands and for feet. In English we don't!</p>
<ul><li>☝️ the digits on your <b>hands</b> are <b>fingers</b>;</li><li>🦶 the digits on your <b>feet</b> are <b>toes</b>.</li></ul>
<p>And the thumb has a name all its own: <b>thumb</b> (thum, the final b is silent). English speakers in fact say <i>fingers and thumbs</i>.</p>`
    },
    {
      type: "curiosity", title: "Did you know… actors wish each other «break a leg»?",
      html: `<p>Before a show, in England and America actors say <b>Break a leg!</b> to each other. It isn't unkind: it means <b>good luck</b>, just like the Italian "in bocca al lupo" (into the wolf's mouth)! 🐺</p>
<p>And do you know how many bones an adult has? <b>206</b>! More than half are in the hands and feet.</p>`
    },
    {
      type: "alternatives", title: "Other ways to remember the words",
      intro: "<p>Some people learn by moving, some by looking, some by playing. Choose the way that works for you!</p>",
      tabs: [
        {
          label: "🙋 Simon says (an English game)",
          html: `<p>English and American children play <b>Simon says</b>. One person is Simon and gives orders:</p>
<p><i>«Simon says: touch your <b>nose</b>!»</i> 👃 → everyone touches their nose.<br>
<i>«Simon says: touch your <b>knees</b>!»</i> → everyone touches their knees.<br>
<i>«Touch your <b>head</b>!»</i> → careful! Simon didn't say it: whoever moves is out! 😄</p>
<p>Moving your body while saying the word helps the brain remember it: teachers call this <b>TPR</b> (Total Physical Response).</p>`
        },
        {
          label: "🔗 Word relatives",
          html: `<p>English is a "cousin" of German: many body words look alike!</p>
<table><tr><th>English</th><th>German</th><th>Italian</th></tr>
<tr><td>hand</td><td>Hand</td><td>mano</td></tr>
<tr><td>arm</td><td>Arm</td><td>braccio</td></tr>
<tr><td>finger</td><td>Finger</td><td>dito</td></tr>
<tr><td>knee</td><td>Knie</td><td>ginocchio</td></tr>
<tr><td>nose</td><td>Nase</td><td>naso</td></tr></table>
<p>And with Italian? <b>nose</b> is like <b>naso</b>, <b>mouth</b>… no! But <b>face</b> is like <b>faccia</b> (it comes from Latin through French).</p>`
        },
        {
          label: "🖼️ Draw and write",
          html: `<p>Draw a big person on a sheet of paper and write the words with arrows. Use one colour for the <b>face</b>, one for the <b>body</b> and one for the <b>legs and feet</b>. Your brain will remember the colour too!</p>`,
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
          label: "🃏 Emoji cards",
          html: `<p>Look only at the emoji, say the English word and then flip to check.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "👁️", back: "eye" }, { front: "👂", back: "ear" }, { front: "👃", back: "nose" }, { front: "👄", back: "mouth" }, { front: "🦷", back: "tooth" }, { front: "✋", back: "hand" }, { front: "🦵", back: "leg" }, { front: "🦶", back: "foot" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Map: the body in English",
      nodes: [
        { id: "body", label: "My body", x: 50, y: 6, color: "#0ea5e9", html: "The body: <b>body</b>.", why: "The word <i>body</i> comes from Old English <i>bodig</i>, of Germanic origin. English was born from the language of the Angles and Saxons, Germanic peoples who arrived in Britain around the 5th century: that is why many body words look like German." },
        { id: "head", label: "Head & face", x: 18, y: 32, color: "#f97316", html: "head, hair, eyes, ears, nose, mouth, teeth.", why: "These are among the first words learned in any language, because they name things we see and touch every day. <i>Face</i>, instead, arrived with the French-speaking Normans in 1066: it comes from the Latin <i>facies</i>, like the Italian \"faccia\"." },
        { id: "upper", label: "Arms & hands", x: 50, y: 32, color: "#22c55e", html: "neck, shoulders, arms, hands, fingers, thumb.", why: "<i>Hand</i>, <i>arm</i> and <i>finger</i> are very old Germanic words, almost the same in German (Hand, Arm, Finger)." },
        { id: "lower", label: "Legs & feet", x: 82, y: 32, color: "#2563eb", html: "legs, knees, feet, toes.", why: "In <i>knee</i> the k is no longer pronounced, but it once was: in Old English it was said \"cneo\". The spelling stayed old while the pronunciation changed." },
        { id: "plural", label: "Plural with -s", x: 25, y: 62, color: "#a855f7", html: "eye → eyes, hand → hands.", why: "In Old English there were many ways to make the plural; over time almost all words took the -s, which was the most common way." },
        { id: "irreg", label: "Rebel plurals", x: 75, y: 62, color: "#e11d48", html: "foot → feet, tooth → teeth.", why: "They are \"fossils\" of the old language: thousands of years ago the plural was made by changing the vowel inside the word. Very common words like foot and tooth have kept the old rule, as have man → men." },
        { id: "got", label: "I've got…", x: 25, y: 90, color: "#ca8a04", html: "Used to describe: I've got blue eyes.", why: "<i>Have got</i> is typical of spoken British English; Americans more often say <i>I have</i>. They mean the same thing: to have, to possess." },
        { id: "adj", label: "Colour first", x: 75, y: 90, color: "#0d9488", html: "brown hair, blue eyes, big feet.", why: "In English the adjective almost always goes before the noun and never changes: big foot, big feet. In Italian instead it usually goes after and changes (occhio azzurro, occhi azzurri)." }
      ],
      edges: [
        ["body", "head", "at the top"], ["body", "upper", "in the middle"], ["body", "lower", "at the bottom"],
        ["upper", "plural", "hands"], ["lower", "irreg", "feet"], ["head", "irreg", "teeth"],
        ["plural", "got", "I've got two…"], ["got", "adj", "we describe with"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz: from head to toe",
      questions: [
        { type: "mc", q: "The plural of «foot» is…", options: ["foots", "feet", "feets"], answer: 1, explain: "Foot → feet: a rebel plural, oo becomes ee." },
        { type: "mc", q: "Toes in English are the digits of the…", options: ["hands", "feet", "ears"], answer: 1, explain: "Toes = dita dei piedi; fingers = dita delle mani." },
        { type: "tf", q: "«I've got two ears» means «Io ho due orecchie».", answer: true, explain: "I've got = I have (io ho); ears = orecchie 👂." }
      ]
    }
  ],
  glossary: [
    { t: "body", d: "corpo" },
    { t: "head", d: "testa" },
    { t: "face", d: "faccia" },
    { t: "hair", d: "capelli (in English it is singular: my hair is…)" },
    { t: "eye / eyes", d: "occhio / occhi" },
    { t: "ear / ears", d: "orecchio / orecchie" },
    { t: "nose", d: "naso" },
    { t: "mouth", d: "bocca" },
    { t: "tooth / teeth", d: "dente / denti (irregular plural)" },
    { t: "neck · shoulders", d: "collo · spalle" },
    { t: "arm · hand · finger · thumb", d: "braccio · mano · dito della mano · pollice" },
    { t: "leg · knee", d: "gamba · ginocchio (the k is silent)" },
    { t: "foot / feet · toe", d: "piede / piedi (irregular plural) · dito del piede" },
    { t: "I've got", d: "I have (used to describe: I've got brown hair)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "How do you say «testa» in English?", options: ["hand", "head", "hair"], answer: 1, explain: "Testa = head; hand = mano; hair = capelli." },
      { type: "mc", q: "«Mouth» means…", options: ["bocca", "naso", "orecchio"], answer: 0, explain: "Mouth = bocca 👄." },
      { type: "text", q: "Write in English: occhi", answer: ["eyes"], explain: "Eye = occhio, eyes = occhi." },
      { type: "text", q: "Write in English: gamba", answer: ["leg"], explain: "Gamba = leg 🦵." },
      { type: "mc", q: "What is the plural of «tooth»?", options: ["tooths", "teeth", "toothes"], answer: 1, explain: "Tooth → teeth: oo becomes ee." },
      { type: "mc", q: "What are the digits on your hands called?", options: ["toes", "fingers", "knees"], answer: 1, explain: "Fingers = on the hands; toes = on the feet." },
      { type: "tf", q: "In «knee» the letter k is pronounced.", answer: false, explain: "Knee is said «nee»: the k is silent." },
      { type: "tf", q: "«She's got long hair» means «Lei ha i capelli lunghi».", answer: true, explain: "She's got = she has; long hair = capelli lunghi." },
      { type: "mc", q: "Complete: «I've got two blue …»", options: ["eye", "eyes", "nose"], answer: 1, explain: "Two → plural: two blue eyes. The colour goes before the noun." },
      { type: "order", q: "Put the words of the song in order: Head, …", items: ["head", "shoulders", "knees", "toes"], explain: "Head, shoulders, knees and toes: from top to bottom!" },
      { type: "mc", q: "How do you say «spalle»?", options: ["shoulders", "shoes", "legs"], answer: 0, explain: "Shoulders = spalle. Shoes = scarpe!" },
      { type: "mc", q: "«Break a leg!» is said to wish…", options: ["good night", "good luck", "bon appétit"], answer: 1, explain: "It is like the Italian «in bocca al lupo» for actors." }
    ]
  }
});
