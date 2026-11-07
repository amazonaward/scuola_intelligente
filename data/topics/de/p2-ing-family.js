TOPIC('de', {
  id: "p2-ing-family",
  title: "My family",
  intro: "Hello! 👋 Heute lernen wir, unsere <b>Familie</b> auf Englisch vorzustellen: <b>family</b> (sprich <i>fä-mi-li</i>). Am Ende kannst du sagen: <i>„This is my mum!“</i> 👩 und <i>„I have got a brother!“</i> 👦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "The family: die Namen in der Familie 👨‍👩‍👧‍👦",
      html: "<table><tr><th>Englisch</th><th>Aussprache</th><th>Deutsch</th></tr>" +
        "<tr><td>👩 <b>mother</b> / <b>mum</b></td><td>ma-dher / mamm</td><td>Mutter / Mama</td></tr>" +
        "<tr><td>👨 <b>father</b> / <b>dad</b></td><td>fa-dher / dädd</td><td>Vater / Papa</td></tr>" +
        "<tr><td>👧 <b>sister</b></td><td>sis-ter</td><td>Schwester</td></tr>" +
        "<tr><td>👦 <b>brother</b></td><td>bra-dher</td><td>Bruder</td></tr>" +
        "<tr><td>👶 <b>baby</b></td><td>bei-bi</td><td>Baby, Säugling</td></tr>" +
        "<tr><td>👵 <b>grandmother</b> / <b>grandma</b></td><td>grän-ma-dher / grän-ma</td><td>Großmutter / Oma</td></tr>" +
        "<tr><td>👴 <b>grandfather</b> / <b>grandpa</b></td><td>grän-fa-dher / grän-pa</td><td>Großvater / Opa</td></tr>" +
        "<tr><td>👩‍🦰 <b>aunt</b></td><td>ant</td><td>Tante</td></tr>" +
        "<tr><td>👨‍🦱 <b>uncle</b></td><td>an-kl</td><td>Onkel</td></tr>" +
        "<tr><td>🧒 <b>cousin</b></td><td>ka-sin</td><td>Cousin / Cousine</td></tr></table>" +
        "<p>💡 <b>Mum</b> und <b>dad</b> sind die liebevollen Wörter, wie „Mama“ und „Papa“. <b>Mother</b> und <b>father</b> sind förmlicher, wie „Mutter“ und „Vater“.</p>"
    },
    {
      type: "svg",
      title: "My family tree 🌳 (mein Stammbaum)",
      svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="320" fill="#f0fdf4"/>' +
        '<line x1="150" y1="75" x2="450" y2="75" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="75" x2="300" y2="140" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="200" y1="170" x2="400" y2="170" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="170" x2="300" y2="225" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="150" y1="225" x2="450" y2="225" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="150" y1="225" x2="150" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="225" x2="300" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="450" y1="225" x2="450" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<rect x="80" y="45" width="140" height="55" rx="12" fill="#c4b5fd"/>' +
        '<text x="150" y="70" font-size="17" text-anchor="middle" fill="#3b0764" font-weight="bold">grandpa</text>' +
        '<text x="150" y="91" font-size="14" text-anchor="middle" fill="#3b0764">Opa</text>' +
        '<rect x="380" y="45" width="140" height="55" rx="12" fill="#c4b5fd"/>' +
        '<text x="450" y="70" font-size="17" text-anchor="middle" fill="#3b0764" font-weight="bold">grandma</text>' +
        '<text x="450" y="91" font-size="14" text-anchor="middle" fill="#3b0764">Oma</text>' +
        '<rect x="130" y="140" width="140" height="55" rx="12" fill="#93c5fd"/>' +
        '<text x="200" y="165" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">dad</text>' +
        '<text x="200" y="186" font-size="14" text-anchor="middle" fill="#1e3a8a">Papa</text>' +
        '<rect x="330" y="140" width="140" height="55" rx="12" fill="#f9a8d4"/>' +
        '<text x="400" y="165" font-size="17" text-anchor="middle" fill="#831843" font-weight="bold">mum</text>' +
        '<text x="400" y="186" font-size="14" text-anchor="middle" fill="#831843">Mama</text>' +
        '<rect x="85" y="245" width="130" height="55" rx="12" fill="#fde68a"/>' +
        '<text x="150" y="270" font-size="17" text-anchor="middle" fill="#78350f" font-weight="bold">brother</text>' +
        '<text x="150" y="291" font-size="14" text-anchor="middle" fill="#78350f">Bruder</text>' +
        '<rect x="235" y="245" width="130" height="55" rx="12" fill="#fb923c"/>' +
        '<text x="300" y="270" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">ME</text>' +
        '<text x="300" y="291" font-size="14" text-anchor="middle" fill="#ffffff">ich</text>' +
        '<rect x="385" y="245" width="130" height="55" rx="12" fill="#fde68a"/>' +
        '<text x="450" y="270" font-size="17" text-anchor="middle" fill="#78350f" font-weight="bold">sister</text>' +
        '<text x="450" y="291" font-size="14" text-anchor="middle" fill="#78350f">Schwester</text>' +
        '</svg>',
      caption: "Oben die Großeltern (grandparents), in der Mitte die Eltern (parents), unten die Kinder (children). Der Papa hier ist der Sohn von Grandpa und Grandma."
    },
    {
      type: "widget",
      title: "Flashcards: die Familie",
      widget: "flashcards",
      options: {
        cards: [
          { front: "👩 mum", back: "Mama" },
          { front: "👨 dad", back: "Papa" },
          { front: "👧 sister", back: "Schwester" },
          { front: "👦 brother", back: "Bruder" },
          { front: "👶 baby", back: "Baby" },
          { front: "👵 grandma", back: "Oma" },
          { front: "👴 grandpa", back: "Opa" },
          { front: "👩‍🦰 aunt", back: "Tante" },
          { front: "👨‍🦱 uncle", back: "Onkel" },
          { front: "🧒 cousin", back: "Cousin / Cousine" },
          { front: "👫 parents", back: "Eltern" },
          { front: "👴👵 grandparents", back: "Großeltern" }
        ]
      },
      caption: "Lies das englische Wort laut vor und dreh dann die Karte um."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: who is it?",
      questions: [
        { type: "mc", q: "Wie sagt man „Bruder“ auf Englisch?", options: ["sister", "brother", "father"], answer: 1, explain: "Brother = Bruder. Sister = Schwester." },
        { type: "mc", q: "„Grandma“ bedeutet …", options: ["Oma", "Tante", "Mama"], answer: 0, explain: "Grandma = Oma (grand = groß, ma = Mama)." },
        { type: "text", q: "Schreib auf Englisch: Papa", answer: ["dad", "daddy", "father"], explain: "Papa = dad (förmlich: father)." }
      ]
    },
    {
      type: "remember",
      title: "Die Sätze, um die Familie vorzustellen 🗣️",
      html: "<p>👉 Um jemanden <b>vorzustellen</b>: <b>This is my…</b> = Das ist mein / meine …</p>" +
        "<p>🖼️ <i>This is my mum.</i> = Das ist meine Mama.<br>🖼️ <i>This is my grandpa.</i> = Das ist mein Opa.</p>" +
        "<p>👉 Um zu sagen, wer in deiner Familie ist: <b>I have got a…</b> = Ich habe einen / eine / ein …</p>" +
        "<p>👧 <i>I have got a sister.</i> = Ich habe eine Schwester.<br>👦👦 <i>I have got two brothers.</i> = Ich habe zwei Brüder.</p>" +
        "<p>👉 Um zu fragen: <b>Have you got a brother?</b> = Hast du einen Bruder?<br>✅ <b>Yes, I have.</b> ❌ <b>No, I haven't.</b></p>" +
        "<p>💡 Beachte: Im Englischen gilt <b>my</b> für alle: my mum, my dad, my sisters. Kein „mein / meine / meinen“!</p>"
    },
    {
      type: "example",
      title: "Beispiel: Emma stellt ihre Familie vor 📸",
      html: "<p>Emma zeigt ihren Mitschülern ein Foto:</p>" +
        "<p><b>Emma:</b> Look! This is my family! 📸<br>" +
        "This is my <b>dad</b>. His name is Paul. 👨<br>" +
        "This is my <b>mum</b>. Her name is Lucy. 👩<br>" +
        "I have got a <b>brother</b>. His name is Tom. He is ten. 👦<br>" +
        "And this is my <b>baby sister</b>, Lily! 👶<br>" +
        "I love my family! ❤️</p>" +
        "<p>💡 <b>His name is…</b> = Sein Name ist … (bei einem Jungen). <b>Her name is…</b> = Ihr Name ist … (bei einem Mädchen).</p>"
    },
    {
      type: "example",
      title: "Beispiel: ein Gespräch im Park 🌳",
      html: "<p><b>Sam:</b> Hi! Who is that? 👀<br>" +
        "<b>Mia:</b> That's my <b>grandma</b>. 👵<br>" +
        "<b>Sam:</b> Have you got a brother?<br>" +
        "<b>Mia:</b> No, I haven't. But I have got two <b>cousins</b>! 🧒🧒<br>" +
        "<b>Sam:</b> Cool! I have got a sister. She's six.</p>" +
        "<p>💡 <b>Who is that?</b> = Wer ist das (dort)?</p>"
    },
    {
      type: "widget",
      title: "Junge oder Mädchen?",
      widget: "classify",
      options: {
        groups: ["👦 Boys and men (Jungen und Männer)", "👧 Girls and women (Mädchen und Frauen)"],
        items: [
          ["brother", 0],
          ["sister", 1],
          ["dad", 0],
          ["mum", 1],
          ["uncle", 0],
          ["aunt", 1],
          ["grandpa", 0],
          ["grandma", 1]
        ]
      },
      caption: "Achtung: cousin und baby passen sowohl für Jungen als auch für Mädchen, darum sind sie nicht dabei!"
    },
    {
      type: "widget",
      title: "Ordne die Wörter zu",
      widget: "match",
      options: {
        pairs: [
          ["parents", "Eltern"],
          ["grandparents", "Großeltern"],
          ["uncle", "Onkel"],
          ["aunt", "Tante"],
          ["cousin", "Cousin/Cousine"],
          ["family", "Familie"]
        ]
      },
      caption: "Klicke auf ein englisches Wort und dann auf seine Übersetzung."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🇬🇧🇺🇸",
      html: "<p>In <b>Großbritannien</b> heißt die Mama <b>mum</b>, in den <b>Vereinigten Staaten</b> dagegen <b>mom</b>! Und kleine Kinder sagen <b>mummy</b> und <b>daddy</b>. Die Oma kann auch <b>granny</b> oder <b>nan</b> heißen.</p>"
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🌍",
      html: "<p>In unglaublich vielen Sprachen der Welt klingt das Wort für „Mama“ sehr ähnlich: <b>Mama</b> im Deutschen, <b>mum</b> im Englischen, <b>maman</b> im Französischen, <b>mama</b> im Russischen und im Suaheli, <b>māma</b> im Chinesischen! Forscher glauben, das liegt daran, dass „ma-ma“ eines der ersten leichten Geräusche ist, die Babys sagen können. 👶</p>"
    },
    {
      type: "3d",
      title: "„Mum“ around the world 🌍",
      scene: "globe",
      options: {
        points: [
          { lat: 51.5, lon: -0.1, label: "🇬🇧 mum", color: "#2563eb" },
          { lat: 40.7, lon: -74, label: "🇺🇸 mom", color: "#ef4444" },
          { lat: 41.9, lon: 12.5, label: "🇮🇹 mamma", color: "#16a34a" },
          { lat: 48.9, lon: 2.35, label: "🇫🇷 maman", color: "#1d4ed8" },
          { lat: 40.4, lon: -3.7, label: "🇪🇸 mamá", color: "#f59e0b" },
          { lat: 55.75, lon: 37.6, label: "🇷🇺 mama", color: "#dc2626" },
          { lat: 39.9, lon: 116.4, label: "🇨🇳 māma", color: "#ef4444" },
          { lat: -6.8, lon: 39.3, label: "🇹🇿 mama", color: "#22c55e" },
          { lat: 47.0, lon: 28.8, label: "🇲🇩 mama", color: "#facc15" }
        ]
      },
      caption: "Dreh den Globus: Fast überall auf der Welt heißt die Mama ähnlich!"
    },
    {
      type: "alternatives",
      title: "Andere Wege, sich die Familie zu merken",
      intro: "<p>Du kannst dir nicht alle Wörter merken? Probier einen dieser Tricks!</p>",
      tabs: [
        {
          label: "🖐️ Finger family",
          html: "<p>Jeder Finger der Hand ist ein Familienmitglied! Das ist ein weltberühmtes Lied in den englischsprachigen Ländern:</p>" +
            "<ul><li>👍 Daumen = <b>Daddy finger</b></li><li>☝️ Zeigefinger = <b>Mummy finger</b></li><li>🖕 Mittelfinger = <b>Brother finger</b></li><li>💍 Ringfinger = <b>Sister finger</b></li><li>🤙 kleiner Finger = <b>Baby finger</b></li></ul>" +
            "<p>Sing: <i>„Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?“</i> und bewege den richtigen Finger! 🎵</p>",
          svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="600" height="260" fill="#fff7ed"/>' +
            '<rect x="200" y="140" width="200" height="110" rx="40" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="140" y="130" width="60" height="40" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="210" y="40" width="40" height="110" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="258" y="20" width="40" height="130" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="306" y="35" width="40" height="115" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="354" y="70" width="36" height="85" rx="18" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<text x="110" y="150" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Daddy</text>' +
            '<text x="190" y="30" font-size="16" text-anchor="middle" fill="#be185d" font-weight="bold">Mummy</text>' +
            '<text x="278" y="14" font-size="16" text-anchor="middle" fill="#b45309" font-weight="bold">Brother</text>' +
            '<text x="400" y="30" font-size="16" text-anchor="middle" fill="#7e22ce" font-weight="bold">Sister</text>' +
            '<text x="450" y="90" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">Baby</text>' +
            '</svg>'
        },
        {
          label: "🔗 Zwillingswörter",
          html: "<p>Manche Wörter sind wie Bausteine zusammengesetzt:</p>" +
            "<ul><li><b>grand</b> (groß) + <b>mother</b> = <b>grandmother</b> 👵 (die „große Mama“)</li>" +
            "<li><b>grand</b> + <b>father</b> = <b>grandfather</b> 👴</li>" +
            "<li><b>grand</b> + <b>parents</b> = <b>grandparents</b> (Großeltern)</li></ul>" +
            "<p>Und schau mal: <b>mother – Mutter</b>, <b>father – Vater</b>, <b>brother – Bruder</b>, <b>sister – Schwester</b>. Die Familienwörter sehen im Englischen und im Deutschen ähnlich aus, weil beide Sprachen verwandt sind, wie Verwandte in einer Familie! 😄</p>"
        },
        {
          label: "🎭 Spiel: die Pappfamilie",
          html: "<p>Zeichne und schneide deine Familie aus (auch die Haustiere!). Stelle sie dann einem Freund oder einem Stofftier vor, wie in einem Theaterstück:</p>" +
            "<p>🎤 <i>„Hello! This is my dad. This is my mum. I have got a sister. And this is my dog, Max!“</i> 🐶</p>" +
            "<p>Wenn du mit den Händen spielst, merkt sich das Gehirn die Wörter viel besser, als wenn du sie nur liest.</p>"
        },
        {
          label: "🃏 Finde die Paare",
          html: "<p>Ordne das liebevolle Wort dem förmlichen zu:</p>",
          widget: "match",
          options: { pairs: [["mum", "mother"], ["dad", "father"], ["grandma", "grandmother"], ["grandpa", "grandfather"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Familie auf Englisch",
      nodes: [
        { id: "family", label: "Family", x: 50, y: 6, color: "#8b5cf6", html: "<p><b>Family</b> = Familie.</p>", why: "<p>Es kommt aus dem Lateinischen <i>familia</i>, demselben Wort, von dem auch „Familie“ kommt. Darum sehen sie sich so ähnlich! Im Lateinischen waren damit alle Menschen gemeint, die in einem Haus lebten.</p>" },
        { id: "parents", label: "Parents", x: 25, y: 30, color: "#3b82f6", html: "<p>Mum and dad = die Eltern.</p>", why: "<p><b>Parents</b> kommt vom lateinischen <i>parens</i>, „wer gebiert“. Achtung: <b>parents</b> heißt NICHT „Verwandte“ (die heißen auf Englisch <b>relatives</b>): Es ist ein „falscher Freund“!</p>" },
        { id: "children", label: "Children", x: 75, y: 30, color: "#f59e0b", html: "<p>Die Kinder: brother, sister, baby.</p>", why: "<p>Ein Kind ist <b>a child</b>, zwei Kinder sind <b>two children</b>: Das ist eine besondere Mehrzahl, man hängt nicht einfach ein -s an.</p>" },
        { id: "grand", label: "Grandparents", x: 25, y: 58, color: "#a855f7", html: "<p>Grandma und grandpa: die Großeltern.</p>", why: "<p>Der Wortteil <b>grand-</b> kommt aus dem Französischen und bedeutet „groß“: Die Großeltern sind die „großen“ Eltern, eine Generation früher.</p>" },
        { id: "relatives", label: "Aunt, uncle, cousin", x: 75, y: 58, color: "#ec4899", html: "<p>Tante, Onkel, Cousin/Cousine.</p>", why: "<p>Die Wörter <b>aunt</b> und <b>uncle</b> kamen vor etwa 800 Jahren aus dem Altfranzösischen ins Englische. <b>Cousin</b> gilt für Jungen und Mädchen, wie im Französischen.</p>" },
        { id: "this", label: "This is my…", x: 20, y: 88, color: "#22c55e", html: "<p>Zum Vorstellen: <i>This is my sister.</i></p>", why: "<p><b>This</b> zeigt auf etwas, das nah bei dir ist (dies, diese). <b>That</b> zeigt auf etwas, das weiter weg ist (das dort). <b>My</b> ändert sich nie.</p>" },
        { id: "haveGot", label: "I have got…", x: 50, y: 88, color: "#0ea5e9", html: "<p>Um zu sagen, wen du hast: <i>I have got a brother.</i></p>", why: "<p>Im britischen Englisch benutzt man oft <b>have got</b>, um „haben“ zu sagen. In Amerika sagt man häufiger nur <b>I have a brother</b>.</p>" },
        { id: "hisHer", label: "His / Her", x: 80, y: 88, color: "#ef4444", html: "<p>His name = sein Name (von ihm). Her name = ihr Name (von ihr).</p>", why: "<p>Im Deutschen ist es ähnlich wie im Englischen: „sein“ und „ihr“ richten sich nach der Person, der etwas gehört. Im Englischen ändert sich das Wort aber nie mit dem, was besessen wird: his name, his mum, his friends.</p>" }
      ],
      edges: [
        ["family", "parents", "hat die"],
        ["family", "children", "hat die"],
        ["parents", "grand", "Kinder der"],
        ["family", "relatives", "und die Verwandten"],
        ["parents", "this", "stelle sie vor mit"],
        ["children", "haveGot", "sag es mit"],
        ["relatives", "hisHer", "bei den Namen:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Sätze",
      questions: [
        { type: "mc", q: "Wie sagt man „Das ist meine Mama“?", options: ["This is my mum.", "I have got mum.", "My is mum."], answer: 0, explain: "This is my mum." },
        { type: "mc", q: "„Have you got a sister?“ Wenn du keine Schwester hast, antwortest du …", options: ["Yes, I have.", "No, I haven't.", "I am sister."], answer: 1, explain: "No, I haven't = Nein, habe ich nicht." },
        { type: "tf", q: "„Parents“ bedeutet „Verwandte“.", answer: false, explain: "Parents = Eltern! Das ist ein falscher Freund. Verwandte = relatives." }
      ]
    }
  ],
  glossary: [
    { t: "Family", d: "Familie." },
    { t: "Mum / Mother", d: "Mama / Mutter." },
    { t: "Dad / Father", d: "Papa / Vater." },
    { t: "Brother / Sister", d: "Bruder / Schwester." },
    { t: "Grandma / Grandpa", d: "Oma / Opa." },
    { t: "Aunt / Uncle", d: "Tante / Onkel." },
    { t: "Cousin", d: "Cousin oder Cousine." },
    { t: "Parents", d: "Eltern (nicht „Verwandte“!)." },
    { t: "This is my…", d: "Das ist mein / meine …" },
    { t: "I have got…", d: "Ich habe …" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie sagt man „Schwester“?", options: ["sister", "brother", "aunt"], answer: 0, explain: "Sister = Schwester." },
      { type: "mc", q: "„Uncle“ bedeutet …", options: ["Opa", "Onkel", "Cousin"], answer: 1, explain: "Uncle = Onkel. Aunt = Tante." },
      { type: "text", q: "Schreib auf Englisch: Opa (liebevolles Wort)", answer: ["grandpa", "grandad", "granddad"], explain: "Grandpa = Opa (förmlich: grandfather)." },
      { type: "text", q: "Schreib auf Englisch: Mama", answer: ["mum", "mom", "mummy", "mother"], explain: "Mum (in Amerika mom); förmlich: mother." },
      { type: "tf", q: "„Cousin“ benutzt man sowohl für den Cousin als auch für die Cousine.", answer: true, explain: "Im Englischen gilt cousin für beide." },
      { type: "mc", q: "Ergänze: „This is ___ dad.“", options: ["my", "I", "me"], answer: 0, explain: "This is my dad = Das ist mein Papa." },
      { type: "mc", q: "Wie sagt man „Ich habe einen Bruder“?", options: ["I have got a brother.", "This is brother.", "I am a brother got."], answer: 0, explain: "I have got a brother." },
      { type: "order", q: "Bring den Satz in die richtige Reihenfolge: „Ich habe zwei Schwestern“.", items: ["I", "have", "got", "two", "sisters"], explain: "I have got two sisters." },
      { type: "mc", q: "Der Papa deiner Mama ist dein …", options: ["uncle", "grandpa", "brother"], answer: 1, explain: "Der Papa der Mama ist der Opa: grandpa." },
      { type: "mc", q: "Wie sagt man „Ihr Name ist Anna“ (bei einem Mädchen)?", options: ["His name is Anna.", "Her name is Anna.", "My name is Anna."], answer: 1, explain: "Bei einem Mädchen benutzt man her." },
      { type: "tf", q: "„Grandparents“ bedeutet „Großeltern“.", answer: true, explain: "Grand + parents = die „großen“ Eltern: die Großeltern." }
    ]
  }
});
