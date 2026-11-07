TOPIC('en', {
  id: "p2-ing-family",
  title: "My family",
  intro: "Hello! 👋 Today we learn to introduce our <b>family</b> in English: <b>family</b> (say <i>FAM-i-lee</i>). By the end you will be able to say: <i>“This is my mum!”</i> 👩 and <i>“I have got a brother!”</i> 👦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "The family: names for family members 👨‍👩‍👧‍👦",
      html: "<table><tr><th>English</th><th>How to say it</th><th>Italian</th></tr>" +
        "<tr><td>👩 <b>mother</b> / <b>mum</b></td><td>MUH-ther / mum</td><td>madre / mamma</td></tr>" +
        "<tr><td>👨 <b>father</b> / <b>dad</b></td><td>FAH-ther / dad</td><td>padre / papà</td></tr>" +
        "<tr><td>👧 <b>sister</b></td><td>SIS-ter</td><td>sorella</td></tr>" +
        "<tr><td>👦 <b>brother</b></td><td>BRUH-ther</td><td>fratello</td></tr>" +
        "<tr><td>👶 <b>baby</b></td><td>BAY-bee</td><td>bebè, neonato</td></tr>" +
        "<tr><td>👵 <b>grandmother</b> / <b>grandma</b></td><td>GRAND-muh-ther / GRAN-mah</td><td>nonna</td></tr>" +
        "<tr><td>👴 <b>grandfather</b> / <b>grandpa</b></td><td>GRAND-fah-ther / GRAN-pah</td><td>nonno</td></tr>" +
        "<tr><td>👩‍🦰 <b>aunt</b></td><td>aunt</td><td>zia</td></tr>" +
        "<tr><td>👨‍🦱 <b>uncle</b></td><td>UN-kul</td><td>zio</td></tr>" +
        "<tr><td>🧒 <b>cousin</b></td><td>CUZ-in</td><td>cugino / cugina</td></tr></table>" +
        "<p>💡 <b>Mum</b> and <b>dad</b> are the affectionate words, like “mamma” and “papà” in Italian. <b>Mother</b> and <b>father</b> are more formal, like “madre” and “padre”.</p>"
    },
    {
      type: "svg",
      title: "My family tree 🌳 (il mio albero genealogico)",
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
        '<text x="150" y="91" font-size="14" text-anchor="middle" fill="#3b0764">nonno</text>' +
        '<rect x="380" y="45" width="140" height="55" rx="12" fill="#c4b5fd"/>' +
        '<text x="450" y="70" font-size="17" text-anchor="middle" fill="#3b0764" font-weight="bold">grandma</text>' +
        '<text x="450" y="91" font-size="14" text-anchor="middle" fill="#3b0764">nonna</text>' +
        '<rect x="130" y="140" width="140" height="55" rx="12" fill="#93c5fd"/>' +
        '<text x="200" y="165" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">dad</text>' +
        '<text x="200" y="186" font-size="14" text-anchor="middle" fill="#1e3a8a">papà</text>' +
        '<rect x="330" y="140" width="140" height="55" rx="12" fill="#f9a8d4"/>' +
        '<text x="400" y="165" font-size="17" text-anchor="middle" fill="#831843" font-weight="bold">mum</text>' +
        '<text x="400" y="186" font-size="14" text-anchor="middle" fill="#831843">mamma</text>' +
        '<rect x="85" y="245" width="130" height="55" rx="12" fill="#fde68a"/>' +
        '<text x="150" y="270" font-size="17" text-anchor="middle" fill="#78350f" font-weight="bold">brother</text>' +
        '<text x="150" y="291" font-size="14" text-anchor="middle" fill="#78350f">fratello</text>' +
        '<rect x="235" y="245" width="130" height="55" rx="12" fill="#fb923c"/>' +
        '<text x="300" y="270" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">ME</text>' +
        '<text x="300" y="291" font-size="14" text-anchor="middle" fill="#ffffff">io</text>' +
        '<rect x="385" y="245" width="130" height="55" rx="12" fill="#fde68a"/>' +
        '<text x="450" y="270" font-size="17" text-anchor="middle" fill="#78350f" font-weight="bold">sister</text>' +
        '<text x="450" y="291" font-size="14" text-anchor="middle" fill="#78350f">sorella</text>' +
        '</svg>',
      caption: "At the top the grandparents, in the middle the parents, at the bottom the children. Here dad is the son of grandpa and grandma."
    },
    {
      type: "widget",
      title: "Flashcards: the family",
      widget: "flashcards",
      options: {
        cards: [
          { front: "👩 mum", back: "mamma" },
          { front: "👨 dad", back: "papà" },
          { front: "👧 sister", back: "sorella" },
          { front: "👦 brother", back: "fratello" },
          { front: "👶 baby", back: "bebè" },
          { front: "👵 grandma", back: "nonna" },
          { front: "👴 grandpa", back: "nonno" },
          { front: "👩‍🦰 aunt", back: "zia" },
          { front: "👨‍🦱 uncle", back: "zio" },
          { front: "🧒 cousin", back: "cugino / cugina" },
          { front: "👫 parents", back: "genitori" },
          { front: "👴👵 grandparents", back: "nonni" }
        ]
      },
      caption: "Read the English word aloud, then flip the card."
    },
    {
      type: "quiz",
      title: "Mini-quiz: who is it?",
      questions: [
        { type: "mc", q: "How do you say “fratello” in English?", options: ["sister", "brother", "father"], answer: 1, explain: "Brother = fratello. Sister = sorella." },
        { type: "mc", q: "“Grandma” means…", options: ["nonna", "zia", "mamma"], answer: 0, explain: "Grandma = nonna (grand = big, ma = mum)." },
        { type: "text", q: "Write in English: papà", answer: ["dad", "daddy", "father"], explain: "Papà = dad (formal: father)." }
      ]
    },
    {
      type: "remember",
      title: "Sentences for introducing your family 🗣️",
      html: "<p>👉 To <b>introduce</b> someone: <b>This is my…</b> = Questo/questa è il mio / la mia…</p>" +
        "<p>🖼️ <i>This is my mum.</i> = Questa è la mia mamma.<br>🖼️ <i>This is my grandpa.</i> = Questo è il mio nonno.</p>" +
        "<p>👉 To say who is in your family: <b>I have got a…</b> = Io ho un / una…</p>" +
        "<p>👧 <i>I have got a sister.</i> = Ho una sorella.<br>👦👦 <i>I have got two brothers.</i> = Ho due fratelli.</p>" +
        "<p>👉 To ask: <b>Have you got a brother?</b> = Hai un fratello?<br>✅ <b>Yes, I have.</b> ❌ <b>No, I haven't.</b></p>" +
        "<p>💡 Note: in English <b>my</b> works for everything: my mum, my dad, my sisters. There is no “il mio / la mia / i miei”!</p>"
    },
    {
      type: "example",
      title: "Example: Emma introduces her family 📸",
      html: "<p>Emma shows a photo to her classmates:</p>" +
        "<p><b>Emma:</b> Look! This is my family! 📸<br>" +
        "This is my <b>dad</b>. His name is Paul. 👨<br>" +
        "This is my <b>mum</b>. Her name is Lucy. 👩<br>" +
        "I have got a <b>brother</b>. His name is Tom. He is ten. 👦<br>" +
        "And this is my <b>baby sister</b>, Lily! 👶<br>" +
        "I love my family! ❤️</p>" +
        "<p>💡 <b>His name is…</b> = Il suo nome è… (for a boy). <b>Her name is…</b> = Il suo nome è… (for a girl).</p>"
    },
    {
      type: "example",
      title: "Example: a dialogue in the park 🌳",
      html: "<p><b>Sam:</b> Hi! Who is that? 👀<br>" +
        "<b>Mia:</b> That's my <b>grandma</b>. 👵<br>" +
        "<b>Sam:</b> Have you got a brother?<br>" +
        "<b>Mia:</b> No, I haven't. But I have got two <b>cousins</b>! 🧒🧒<br>" +
        "<b>Sam:</b> Cool! I have got a sister. She's six.</p>" +
        "<p>💡 <b>Who is that?</b> = Chi è quello/quella?</p>"
    },
    {
      type: "widget",
      title: "Male or female?",
      widget: "classify",
      options: {
        groups: ["👦 Boys and men (maschi)", "👧 Girls and women (femmine)"],
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
      caption: "Careful: cousin and baby are fine for both boys and girls, so they are not here!"
    },
    {
      type: "widget",
      title: "Match the words",
      widget: "match",
      options: {
        pairs: [
          ["parents", "genitori"],
          ["grandparents", "nonni"],
          ["uncle", "zio"],
          ["aunt", "zia"],
          ["cousin", "cugino/a"],
          ["family", "famiglia"]
        ]
      },
      caption: "Click an English word and then its translation."
    },
    {
      type: "curiosity",
      title: "Did you know…? 🇬🇧🇺🇸",
      html: "<p>In <b>Great Britain</b> mother is called <b>mum</b>, while in the <b>United States</b> they say <b>mom</b>! And little children say <b>mummy</b> and <b>daddy</b>. Grandma can also be <b>granny</b> or <b>nan</b>.</p>"
    },
    {
      type: "curiosity",
      title: "Did you know…? 🌍",
      html: "<p>In lots of languages around the world the word for “mum” is very similar: <b>mamma</b> in Italian, <b>mum</b> in English, <b>maman</b> in French, <b>mama</b> in Russian and Swahili, <b>māma</b> in Chinese! Scholars think this is because “ma-ma” is one of the first easy sounds that babies can say. 👶</p>"
    },
    {
      type: "3d",
      title: "“Mum” around the world 🌍",
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
      caption: "Spin the globe: in almost the whole world mum is called by a similar name!"
    },
    {
      type: "alternatives",
      title: "Other ways to remember the family",
      intro: "<p>Can't remember all the words? Try one of these tricks!</p>",
      tabs: [
        {
          label: "🖐️ Finger family",
          html: "<p>Every finger of your hand is a member of the family! It is a very famous little song in English-speaking countries:</p>" +
            "<ul><li>👍 thumb = <b>Daddy finger</b></li><li>☝️ index finger = <b>Mummy finger</b></li><li>🖕 middle finger = <b>Brother finger</b></li><li>💍 ring finger = <b>Sister finger</b></li><li>🤙 little finger = <b>Baby finger</b></li></ul>" +
            "<p>Sing: <i>“Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?”</i> and wiggle the right finger! 🎵</p>",
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
          label: "🔗 Twin words",
          html: "<p>Some words are built like building blocks:</p>" +
            "<ul><li><b>grand</b> (big) + <b>mother</b> = <b>grandmother</b> 👵 (the “big mum”)</li>" +
            "<li><b>grand</b> + <b>father</b> = <b>grandfather</b> 👴</li>" +
            "<li><b>grand</b> + <b>parents</b> = <b>grandparents</b> (nonni)</li></ul>" +
            "<p>And look at these: <b>mother – brother</b> and <b>father</b> all end in <b>-ther</b>! <b>Sister</b> ends in <b>-er</b> too. The family words “look alike”, just like relatives! 😄</p>"
        },
        {
          label: "🎭 Game: the cardboard family",
          html: "<p>Draw and cut out your family (pets too!). Then introduce it to a friend or a puppet, like in a show:</p>" +
            "<p>🎤 <i>“Hello! This is my dad. This is my mum. I have got a sister. And this is my dog, Max!”</i> 🐶</p>" +
            "<p>Acting with your hands helps your brain remember words much better than just reading them.</p>"
        },
        {
          label: "🃏 Find the pairs",
          html: "<p>Match the affectionate word with the formal one:</p>",
          widget: "match",
          options: { pairs: [["mum", "mother"], ["dad", "father"], ["grandma", "grandmother"], ["grandpa", "grandfather"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the family in English",
      nodes: [
        { id: "family", label: "Family", x: 50, y: 6, color: "#8b5cf6", html: "<p><b>Family</b> = famiglia.</p>", why: "<p>It comes from the Latin <i>familia</i>, the same word that gives Italian “famiglia”. That is why they look so alike! In Latin it meant all the people who lived in one house.</p>" },
        { id: "parents", label: "Parents", x: 25, y: 30, color: "#3b82f6", html: "<p>Mum and dad = i genitori.</p>", why: "<p><b>Parents</b> comes from the Latin <i>parens</i>, “one who gives birth”. Careful: <b>parents</b> does NOT mean “parenti” (which in English is <b>relatives</b>): it is a “false friend”!</p>" },
        { id: "children", label: "Children", x: 75, y: 30, color: "#f59e0b", html: "<p>The children: brother, sister, baby.</p>", why: "<p>One child is <b>a child</b>, two children are <b>two children</b>: it is a special plural, you do not just add -s.</p>" },
        { id: "grand", label: "Grandparents", x: 25, y: 58, color: "#a855f7", html: "<p>Grandma and grandpa: i nonni.</p>", why: "<p>The part <b>grand-</b> comes from French and means “big”: grandparents are the “big” mum and dad, one generation earlier.</p>" },
        { id: "relatives", label: "Aunt, uncle, cousin", x: 75, y: 58, color: "#ec4899", html: "<p>Zia, zio, cugino/cugina.</p>", why: "<p>The words <b>aunt</b> and <b>uncle</b> came into English from Old French, about 800 years ago. <b>Cousin</b> works for both boys and girls, as in French.</p>" },
        { id: "this", label: "This is my…", x: 20, y: 88, color: "#22c55e", html: "<p>To introduce someone: <i>This is my sister.</i></p>", why: "<p><b>This</b> points to something near you (questo, questa). <b>That</b> points to something far away (quello). <b>My</b> never changes.</p>" },
        { id: "haveGot", label: "I have got…", x: 50, y: 88, color: "#0ea5e9", html: "<p>To say who you have: <i>I have got a brother.</i></p>", why: "<p>In British English <b>have got</b> is often used to say “to have”. In America they more often say just <b>I have a brother</b>.</p>" },
        { id: "hisHer", label: "His / Her", x: 80, y: 88, color: "#ef4444", html: "<p>His name = il suo nome (di lui). Her name = il suo nome (di lei).</p>", why: "<p>In Italian “suo” changes with the thing owned; in English it changes with <b>who owns it</b>: his for a boy, her for a girl.</p>" }
      ],
      edges: [
        ["family", "parents", "has the"],
        ["family", "children", "has the"],
        ["parents", "grand", "children of the"],
        ["family", "relatives", "and the relatives"],
        ["parents", "this", "introduce them with"],
        ["children", "haveGot", "say it with"],
        ["relatives", "hisHer", "with names:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: sentences",
      questions: [
        { type: "mc", q: "How do you say “Questa è la mia mamma”?", options: ["This is my mum.", "I have got mum.", "My is mum."], answer: 0, explain: "This is my mum." },
        { type: "mc", q: "“Have you got a sister?” If you do not have a sister you answer…", options: ["Yes, I have.", "No, I haven't.", "I am sister."], answer: 1, explain: "No, I haven't = No, non ce l'ho." },
        { type: "tf", q: "“Parents” means “parenti”.", answer: false, explain: "Parents = genitori! It is a false friend. Parenti = relatives." }
      ]
    }
  ],
  glossary: [
    { t: "Family", d: "Famiglia." },
    { t: "Mum / Mother", d: "Mamma / madre." },
    { t: "Dad / Father", d: "Papà / padre." },
    { t: "Brother / Sister", d: "Fratello / sorella." },
    { t: "Grandma / Grandpa", d: "Nonna / nonno." },
    { t: "Aunt / Uncle", d: "Zia / zio." },
    { t: "Cousin", d: "Cugino o cugina." },
    { t: "Parents", d: "Genitori (not “parenti”!)." },
    { t: "This is my…", d: "Questo/questa è il mio / la mia…" },
    { t: "I have got…", d: "Io ho…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "How do you say “sorella”?", options: ["sister", "brother", "aunt"], answer: 0, explain: "Sister = sorella." },
      { type: "mc", q: "“Uncle” means…", options: ["nonno", "zio", "cugino"], answer: 1, explain: "Uncle = zio. Aunt = zia." },
      { type: "text", q: "Write in English: nonno (affectionate word)", answer: ["grandpa", "grandad", "granddad"], explain: "Grandpa = nonno (formal: grandfather)." },
      { type: "text", q: "Write in English: mamma", answer: ["mum", "mom", "mummy", "mother"], explain: "Mum (in America mom); formal: mother." },
      { type: "tf", q: "“Cousin” is used for both a male cousin and a female cousin.", answer: true, explain: "In English cousin works for both." },
      { type: "mc", q: "Complete: “This is ___ dad.”", options: ["my", "I", "me"], answer: 0, explain: "This is my dad = Questo è il mio papà." },
      { type: "mc", q: "How do you say “Ho un fratello”?", options: ["I have got a brother.", "This is brother.", "I am a brother got."], answer: 0, explain: "I have got a brother." },
      { type: "order", q: "Put the sentence in order: “Ho due sorelle”.", items: ["I", "have", "got", "two", "sisters"], explain: "I have got two sisters." },
      { type: "mc", q: "Your mum's dad is your…", options: ["uncle", "grandpa", "brother"], answer: 1, explain: "Mum's dad is your grandfather: grandpa." },
      { type: "mc", q: "How do you say “Il suo nome è Anna” (about a girl)?", options: ["His name is Anna.", "Her name is Anna.", "My name is Anna."], answer: 1, explain: "For a girl we use her." },
      { type: "tf", q: "“Grandparents” means “nonni”.", answer: true, explain: "Grand + parents = the “big” parents: nonni." }
    ]
  }
});
