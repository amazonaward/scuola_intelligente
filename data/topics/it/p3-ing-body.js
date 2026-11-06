TOPIC('it', {
  id: "p3-ing-body",
  title: "My body",
  intro: "Hello! 👋 Oggi impariamo in inglese le <b>parti del corpo</b> (the parts of the body), dalla testa ai piedi: <i>from head to toe!</i> Impareremo anche a dire <b>I've got two eyes</b> 👀 e a cantare una canzone famosissima in tutto il mondo. 🎵",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The face: la faccia 🙂",
      html: `<table><tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>🙂 <b>face</b></td><td>feis</td><td>faccia</td></tr>
<tr><td>💇 <b>hair</b></td><td>hèr</td><td>capelli</td></tr>
<tr><td>👁️ <b>eye</b> / <b>eyes</b></td><td>ai / aiz</td><td>occhio / occhi</td></tr>
<tr><td>👂 <b>ear</b> / <b>ears</b></td><td>ìar / ìarz</td><td>orecchio / orecchie</td></tr>
<tr><td>👃 <b>nose</b></td><td>nous</td><td>naso</td></tr>
<tr><td>👄 <b>mouth</b></td><td>mauth</td><td>bocca</td></tr>
<tr><td>🦷 <b>tooth</b> / <b>teeth</b></td><td>tuuth / tiith</td><td>dente / denti</td></tr>
</table>
<p>Attenzione: <b>hair</b> (capelli) in inglese è <b>singolare</b>: si dice <i>My hair <b>is</b> brown</i> = I miei capelli sono castani.</p>`
    },
    {
      type: "text", title: "The body: il corpo 🧍",
      html: `<ul>
<li>🗣️ <b>head</b> (hed) – testa · <b>neck</b> (nek) – collo · <b>shoulders</b> (shòl-ders) – spalle</li>
<li>💪 <b>arm</b> – braccio · <b>hand</b> (hend) – mano · <b>finger</b> (fin-gher) – dito della mano</li>
<li>🫃 <b>tummy</b> (tà-mi) – pancia · <b>back</b> (bek) – schiena</li>
<li>🦵 <b>leg</b> – gamba · <b>knee</b> (nii, la k non si legge!) – ginocchio</li>
<li>🦶 <b>foot</b> / <b>feet</b> (fut / fiit) – piede / piedi · <b>toe</b> (tou) – dito del piede</li>
</ul>`
    },
    {
      type: "widget", title: "Gioco: dai il nome alle parti del corpo",
      widget: "labelDiagram",
      caption: "Tocca un pallino giallo e scegli la parola inglese giusta.",
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
      type: "remember", title: "Uno, due… e i plurali strani",
      html: `<p>Per fare il plurale di solito si aggiunge <b>-s</b>:</p>
<p>one eye → two eye<b>s</b> 👀 · one hand → two hand<b>s</b> 🙌 · one finger → ten finger<b>s</b></p>
<p>Ma due parole del corpo sono "ribelli" e cambiano le vocali:</p>
<p style="font-size:1.15em">🦶 one <b>foot</b> → two <b>feet</b> · 🦷 one <b>tooth</b> → many <b>teeth</b></p>
<p>Trucco: le due <b>o</b> diventano due <b>e</b>! oo → ee</p>`
    },
    {
      type: "remember", title: "I've got… = Io ho…",
      html: `<p>Per descrivere il corpo si usa <b>have got</b> (avere):</p>
<ul>
<li><b>I've got</b> two eyes. = Io ho due occhi.</li>
<li><b>I've got</b> brown hair. = Ho i capelli castani.</li>
<li><b>She's got</b> long hair. = Lei ha i capelli lunghi.</li>
<li><b>It's got</b> four legs. = Ha quattro zampe. 🐶</li>
</ul>
<p>Ricorda: in inglese il colore viene <b>prima</b>: <i>blue eyes</i> = occhi azzurri.</p>`
    },
    {
      type: "quiz", title: "Mini-quiz: the face",
      questions: [
        { type: "mc", q: "Come si dice «naso» in inglese?", options: ["mouth", "nose", "ear"], answer: 1, explain: "Naso = nose 👃." },
        { type: "mc", q: "«Eyes» vuol dire…", options: ["orecchie", "occhi", "denti"], answer: 1, explain: "Eye = occhio, eyes = occhi 👀." },
        { type: "text", q: "Scrivi in inglese: bocca", answer: ["mouth"], explain: "Bocca = mouth 👄." }
      ]
    },
    {
      type: "widget", title: "Flashcards: dalla testa ai piedi",
      widget: "flashcards",
      caption: "Di' la parola ad alta voce e tocca quella parte del tuo corpo, poi gira la carta.",
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
      type: "example", title: "Esempio: la canzone «Head, shoulders, knees and toes» 🎵",
      html: `<p>È la canzone del corpo più famosa del mondo! Cantala toccando ogni parte nominata, sempre più veloce:</p>
<p style="font-size:1.15em"><b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
And <b>eyes</b> and <b>ears</b> and <b>mouth</b> and <b>nose</b>…<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!</p>
<p>(testa, spalle, ginocchia e dita dei piedi… e occhi e orecchie e bocca e naso)</p>`
    },
    {
      type: "example", title: "Esempio: il mio mostro 👾",
      html: `<p>Leggi la descrizione e prova a disegnare il mostro:</p>
<p><i>This is my monster. His name is Blob. 👾<br>
He's got <b>three eyes</b> and <b>one big mouth</b>.<br>
He's got <b>green hair</b> and <b>four arms</b>.<br>
He's got <b>two legs</b> and <b>big feet</b>.<br>
He's got <b>six fingers</b> on each hand!</i></p>
<p>Ora tocca a te: inventa un mostro e descrivilo con <b>He's got…</b> o <b>She's got…</b></p>`,
    },
    {
      type: "svg", title: "Il mostro Blob",
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
      type: "widget", title: "Abbina: inglese e italiano",
      widget: "match",
      options: {
        pairs: [["head", "testa"], ["shoulders", "spalle"], ["knees", "ginocchia"], ["toes", "dita dei piedi"], ["neck", "collo"], ["teeth", "denti"], ["hand", "mano"], ["back", "schiena"]]
      }
    },
    {
      type: "widget", title: "Gioco: plurale con -s o plurale ribelle?",
      widget: "classify",
      caption: "Quali parole fanno il plurale aggiungendo -s e quali cambiano le vocali?",
      options: {
        groups: ["➕ plurale con -s", "🔀 plurale ribelle"],
        items: [["eye → eyes", 0], ["ear → ears", 0], ["hand → hands", 0], ["leg → legs", 0], ["finger → fingers", 0], ["arm → arms", 0], ["foot → feet", 1], ["tooth → teeth", 1]]
      }
    },
    {
      type: "curiosity", title: "Lo sapevi che… in inglese le dita hanno due nomi?",
      html: `<p>In italiano diciamo "dita" sia per le mani sia per i piedi. In inglese no!</p>
<ul><li>☝️ le dita delle <b>mani</b> sono <b>fingers</b>;</li><li>🦶 le dita dei <b>piedi</b> sono <b>toes</b>.</li></ul>
<p>E il pollice ha un nome tutto suo: <b>thumb</b> (tham, la b finale non si legge). Gli inglesi dicono infatti <i>fingers and thumbs</i>.</p>`
    },
    {
      type: "curiosity", title: "Lo sapevi che… gli attori si augurano «rompiti una gamba»?",
      html: `<p>Prima di uno spettacolo, in Inghilterra e in America gli attori si dicono <b>Break a leg!</b> (letteralmente "rompiti una gamba!"). Non è cattiveria: vuol dire <b>buona fortuna</b>, proprio come il nostro "in bocca al lupo"! 🐺</p>
<p>E sai quante ossa ha un adulto? <b>206</b>! Più della metà sono nelle mani e nei piedi.</p>`
    },
    {
      type: "alternatives", title: "Altri modi per ricordare le parole",
      intro: "<p>C'è chi impara muovendosi, chi guardando, chi giocando. Scegli la strada che funziona per te!</p>",
      tabs: [
        {
          label: "🙋 Simon says (gioco inglese)",
          html: `<p>I bambini inglesi e americani giocano a <b>Simon says</b> ("Simone dice"). Uno è Simon e dà ordini:</p>
<p><i>«Simon says: touch your <b>nose</b>!»</i> 👃 → tutti si toccano il naso.<br>
<i>«Simon says: touch your <b>knees</b>!»</i> → tutti si toccano le ginocchia.<br>
<i>«Touch your <b>head</b>!»</i> → attenzione! Simon non l'ha detto: chi si muove è eliminato! 😄</p>
<p>Muovere il corpo mentre si dice la parola aiuta il cervello a ricordarla: gli insegnanti la chiamano <b>TPR</b> (risposta fisica totale).</p>`
        },
        {
          label: "🔗 Parole parenti",
          html: `<p>L'inglese è "cugino" del tedesco: molte parole del corpo si somigliano!</p>
<table><tr><th>Inglese</th><th>Tedesco</th><th>Italiano</th></tr>
<tr><td>hand</td><td>Hand</td><td>mano</td></tr>
<tr><td>arm</td><td>Arm</td><td>braccio</td></tr>
<tr><td>finger</td><td>Finger</td><td>dito</td></tr>
<tr><td>knee</td><td>Knie</td><td>ginocchio</td></tr>
<tr><td>nose</td><td>Nase</td><td>naso</td></tr></table>
<p>E con l'italiano? <b>nose</b> ricorda <b>naso</b>, <b>mouth</b>… no! Ma <b>face</b> ricorda <b>faccia</b> (viene dal latino tramite il francese).</p>`
        },
        {
          label: "🖼️ Disegna e scrivi",
          html: `<p>Disegna una persona grande su un foglio e scrivi le parole con le frecce. Usa un colore per la <b>faccia</b>, uno per il <b>corpo</b> e uno per le <b>gambe e i piedi</b>. Il tuo cervello ricorderà anche il colore!</p>`,
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
          label: "🃏 Carte con le emoji",
          html: `<p>Guarda solo l'emoji, di' la parola inglese e poi gira per controllare.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "👁️", back: "eye" }, { front: "👂", back: "ear" }, { front: "👃", back: "nose" }, { front: "👄", back: "mouth" }, { front: "🦷", back: "tooth" }, { front: "✋", back: "hand" }, { front: "🦵", back: "leg" }, { front: "🦶", back: "foot" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Mappa: il corpo in inglese",
      nodes: [
        { id: "body", label: "My body", x: 50, y: 6, color: "#0ea5e9", html: "Il corpo: <b>body</b>.", why: "La parola <i>body</i> viene dall'inglese antico <i>bodig</i>, di origine germanica. L'inglese è nato dalla lingua degli Angli e dei Sassoni, popoli germanici arrivati in Britannia intorno al V secolo: per questo molte parole del corpo somigliano al tedesco." },
        { id: "head", label: "Head & face", x: 18, y: 32, color: "#f97316", html: "head, hair, eyes, ears, nose, mouth, teeth.", why: "Sono tra le prime parole che si imparano in ogni lingua, perché indicano cose che vediamo e tocchiamo ogni giorno. <i>Face</i> invece è arrivata con i Normanni francesi nel 1066: viene dal latino <i>facies</i>, come l'italiano \"faccia\"." },
        { id: "upper", label: "Arms & hands", x: 50, y: 32, color: "#22c55e", html: "neck, shoulders, arms, hands, fingers, thumb.", why: "<i>Hand</i>, <i>arm</i> e <i>finger</i> sono parole germaniche antichissime, quasi uguali in tedesco (Hand, Arm, Finger)." },
        { id: "lower", label: "Legs & feet", x: 82, y: 32, color: "#2563eb", html: "legs, knees, feet, toes.", why: "In <i>knee</i> la k non si pronuncia più, ma un tempo sì: nell'inglese antico si diceva \"cneo\". La scrittura è rimasta vecchia mentre la pronuncia è cambiata." },
        { id: "plural", label: "Plurale con -s", x: 25, y: 62, color: "#a855f7", html: "eye → eyes, hand → hands.", why: "Nell'inglese antico c'erano tanti modi di fare il plurale; col tempo quasi tutte le parole hanno preso la -s, che era il modo più comune." },
        { id: "irreg", label: "Plurali ribelli", x: 75, y: 62, color: "#e11d48", html: "foot → feet, tooth → teeth.", why: "Sono \"fossili\" della lingua antica: migliaia di anni fa il plurale si faceva cambiando la vocale dentro la parola. Le parole usatissime come foot e tooth hanno conservato la vecchia regola, come anche man → men." },
        { id: "got", label: "I've got…", x: 25, y: 90, color: "#ca8a04", html: "Serve per descrivere: I've got blue eyes.", why: "<i>Have got</i> è tipico dell'inglese britannico parlato; gli americani dicono più spesso <i>I have</i>. Significano la stessa cosa: avere, possedere." },
        { id: "adj", label: "Colore prima", x: 75, y: 90, color: "#0d9488", html: "brown hair, blue eyes, big feet.", why: "In inglese l'aggettivo va quasi sempre prima del nome e non cambia mai: big foot, big feet. In italiano invece di solito va dopo e cambia (occhio azzurro, occhi azzurri)." }
      ],
      edges: [
        ["body", "head", "in alto"], ["body", "upper", "in mezzo"], ["body", "lower", "in basso"],
        ["upper", "plural", "hands"], ["lower", "irreg", "feet"], ["head", "irreg", "teeth"],
        ["plural", "got", "I've got two…"], ["got", "adj", "si descrive con"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz: from head to toe",
      questions: [
        { type: "mc", q: "Il plurale di «foot» è…", options: ["foots", "feet", "feets"], answer: 1, explain: "Foot → feet: plurale ribelle, oo diventa ee." },
        { type: "mc", q: "Le dita dei piedi in inglese sono…", options: ["fingers", "toes", "thumbs"], answer: 1, explain: "Toes = dita dei piedi; fingers = dita delle mani." },
        { type: "tf", q: "«I've got two ears» vuol dire «Io ho due orecchie».", answer: true, explain: "I've got = io ho; ears = orecchie 👂." }
      ]
    }
  ],
  glossary: [
    { t: "body", d: "corpo" },
    { t: "head", d: "testa" },
    { t: "face", d: "faccia" },
    { t: "hair", d: "capelli (in inglese è singolare: my hair is…)" },
    { t: "eye / eyes", d: "occhio / occhi" },
    { t: "ear / ears", d: "orecchio / orecchie" },
    { t: "nose", d: "naso" },
    { t: "mouth", d: "bocca" },
    { t: "tooth / teeth", d: "dente / denti (plurale irregolare)" },
    { t: "neck · shoulders", d: "collo · spalle" },
    { t: "arm · hand · finger · thumb", d: "braccio · mano · dito della mano · pollice" },
    { t: "leg · knee", d: "gamba · ginocchio (la k non si pronuncia)" },
    { t: "foot / feet · toe", d: "piede / piedi (plurale irregolare) · dito del piede" },
    { t: "I've got", d: "io ho (per descrivere: I've got brown hair)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si dice «testa» in inglese?", options: ["hand", "head", "hair"], answer: 1, explain: "Testa = head; hand = mano; hair = capelli." },
      { type: "mc", q: "«Mouth» vuol dire…", options: ["bocca", "naso", "orecchio"], answer: 0, explain: "Mouth = bocca 👄." },
      { type: "text", q: "Scrivi in inglese: occhi", answer: ["eyes"], explain: "Eye = occhio, eyes = occhi." },
      { type: "text", q: "Scrivi in inglese: gamba", answer: ["leg"], explain: "Gamba = leg 🦵." },
      { type: "mc", q: "Qual è il plurale di «tooth»?", options: ["tooths", "teeth", "toothes"], answer: 1, explain: "Tooth → teeth: oo diventa ee." },
      { type: "mc", q: "Come si chiamano le dita delle mani?", options: ["toes", "fingers", "knees"], answer: 1, explain: "Fingers = dita delle mani; toes = dita dei piedi." },
      { type: "tf", q: "In «knee» la lettera k si pronuncia.", answer: false, explain: "Knee si legge «nii»: la k è muta." },
      { type: "tf", q: "«She's got long hair» vuol dire «Lei ha i capelli lunghi».", answer: true, explain: "She's got = lei ha; long hair = capelli lunghi." },
      { type: "mc", q: "Completa: «I've got two blue …»", options: ["eye", "eyes", "nose"], answer: 1, explain: "Due → plurale: two blue eyes. Il colore va prima del nome." },
      { type: "order", q: "Metti in ordine le parole della canzone: Head, …", items: ["head", "shoulders", "knees", "toes"], explain: "Head, shoulders, knees and toes: dall'alto verso il basso!" },
      { type: "mc", q: "Come si dice «spalle»?", options: ["shoulders", "shoes", "legs"], answer: 0, explain: "Shoulders = spalle. Shoes = scarpe!" },
      { type: "mc", q: "«Break a leg!» si dice per augurare…", options: ["buona notte", "buona fortuna", "buon appetito"], answer: 1, explain: "È come il nostro «in bocca al lupo» per gli attori." }
    ]
  }
});
