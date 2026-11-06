TOPIC('it', {
  id: "p2-ing-family",
  title: "My family",
  intro: "Hello! 👋 Oggi impariamo a presentare la nostra <b>famiglia</b> in inglese: <b>family</b> (si dice <i>fè-mi-li</i>). Alla fine saprai dire: <i>«This is my mum!»</i> 👩 e <i>«I have got a brother!»</i> 👦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "The family: i nomi della famiglia 👨‍👩‍👧‍👦",
      html: "<table><tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>" +
        "<tr><td>👩 <b>mother</b> / <b>mum</b></td><td>mà-der / mam</td><td>madre / mamma</td></tr>" +
        "<tr><td>👨 <b>father</b> / <b>dad</b></td><td>fà-der / ded</td><td>padre / papà</td></tr>" +
        "<tr><td>👧 <b>sister</b></td><td>sì-ster</td><td>sorella</td></tr>" +
        "<tr><td>👦 <b>brother</b></td><td>brà-der</td><td>fratello</td></tr>" +
        "<tr><td>👶 <b>baby</b></td><td>bèi-bi</td><td>bebè, neonato</td></tr>" +
        "<tr><td>👵 <b>grandmother</b> / <b>grandma</b></td><td>grèn-mà-der / grèn-ma</td><td>nonna</td></tr>" +
        "<tr><td>👴 <b>grandfather</b> / <b>grandpa</b></td><td>grèn-fà-der / grèn-pa</td><td>nonno</td></tr>" +
        "<tr><td>👩‍🦰 <b>aunt</b></td><td>ant</td><td>zia</td></tr>" +
        "<tr><td>👨‍🦱 <b>uncle</b></td><td>àn-col</td><td>zio</td></tr>" +
        "<tr><td>🧒 <b>cousin</b></td><td>cà-sin</td><td>cugino / cugina</td></tr></table>" +
        "<p>💡 <b>Mum</b> e <b>dad</b> sono le parole affettuose, come «mamma» e «papà». <b>Mother</b> e <b>father</b> sono più formali, come «madre» e «padre».</p>"
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
      caption: "In alto i nonni (grandparents), al centro i genitori (parents), in basso i figli (children). Il papà qui è figlio del grandpa e della grandma."
    },
    {
      type: "widget",
      title: "Flashcards: la famiglia",
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
      caption: "Leggi ad alta voce la parola inglese, poi gira la carta."
    },
    {
      type: "quiz",
      title: "Mini-quiz: who is it?",
      questions: [
        { type: "mc", q: "Come si dice «fratello» in inglese?", options: ["sister", "brother", "father"], answer: 1, explain: "Brother = fratello. Sister = sorella." },
        { type: "mc", q: "«Grandma» vuol dire…", options: ["nonna", "zia", "mamma"], answer: 0, explain: "Grandma = nonna (grand = grande, ma = mamma)." },
        { type: "text", q: "Scrivi in inglese: papà", answer: ["dad", "daddy", "father"], explain: "Papà = dad (formale: father)." }
      ]
    },
    {
      type: "remember",
      title: "Le frasi per presentare la famiglia 🗣️",
      html: "<p>👉 Per <b>presentare</b> qualcuno: <b>This is my…</b> = Questo/questa è il mio / la mia…</p>" +
        "<p>🖼️ <i>This is my mum.</i> = Questa è la mia mamma.<br>🖼️ <i>This is my grandpa.</i> = Questo è il mio nonno.</p>" +
        "<p>👉 Per dire chi c'è nella tua famiglia: <b>I have got a…</b> = Io ho un / una…</p>" +
        "<p>👧 <i>I have got a sister.</i> = Ho una sorella.<br>👦👦 <i>I have got two brothers.</i> = Ho due fratelli.</p>" +
        "<p>👉 Per chiedere: <b>Have you got a brother?</b> = Hai un fratello?<br>✅ <b>Yes, I have.</b> ❌ <b>No, I haven't.</b></p>" +
        "<p>💡 Nota: in inglese <b>my</b> vale per tutti: my mum, my dad, my sisters. Niente «il mio / la mia / i miei»!</p>"
    },
    {
      type: "example",
      title: "Esempio: Emma presenta la sua famiglia 📸",
      html: "<p>Emma mostra una foto ai compagni:</p>" +
        "<p><b>Emma:</b> Look! This is my family! 📸<br>" +
        "This is my <b>dad</b>. His name is Paul. 👨<br>" +
        "This is my <b>mum</b>. Her name is Lucy. 👩<br>" +
        "I have got a <b>brother</b>. His name is Tom. He is ten. 👦<br>" +
        "And this is my <b>baby sister</b>, Lily! 👶<br>" +
        "I love my family! ❤️</p>" +
        "<p>💡 <b>His name is…</b> = Il suo nome è… (per un maschio). <b>Her name is…</b> = Il suo nome è… (per una femmina).</p>"
    },
    {
      type: "example",
      title: "Esempio: un dialogo al parco 🌳",
      html: "<p><b>Sam:</b> Hi! Who is that? 👀<br>" +
        "<b>Mia:</b> That's my <b>grandma</b>. 👵<br>" +
        "<b>Sam:</b> Have you got a brother?<br>" +
        "<b>Mia:</b> No, I haven't. But I have got two <b>cousins</b>! 🧒🧒<br>" +
        "<b>Sam:</b> Cool! I have got a sister. She's six.</p>" +
        "<p>💡 <b>Who is that?</b> = Chi è quello/quella?</p>"
    },
    {
      type: "widget",
      title: "Maschio o femmina?",
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
      caption: "Attenzione: cousin e baby vanno bene sia per i maschi sia per le femmine, per questo non ci sono!"
    },
    {
      type: "widget",
      title: "Abbina le parole",
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
      caption: "Clicca una parola inglese e poi la sua traduzione."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🇬🇧🇺🇸",
      html: "<p>In <b>Gran Bretagna</b> la mamma si chiama <b>mum</b>, mentre negli <b>Stati Uniti</b> si dice <b>mom</b>! E i bambini piccoli dicono <b>mummy</b> e <b>daddy</b>. La nonna può essere anche <b>granny</b> o <b>nan</b>.</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🌍",
      html: "<p>In tantissime lingue del mondo la parola per «mamma» è molto simile: <b>mamma</b> in italiano, <b>mum</b> in inglese, <b>maman</b> in francese, <b>mama</b> in russo e in swahili, <b>māma</b> in cinese! Gli studiosi pensano che sia perché «ma-ma» è uno dei primi suoni facili che i bebè riescono a dire. 👶</p>"
    },
    {
      type: "3d",
      title: "«Mum» around the world 🌍",
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
      caption: "Gira il globo: in quasi tutto il mondo la mamma si chiama in modo simile!"
    },
    {
      type: "alternatives",
      title: "Altri modi per ricordare la famiglia",
      intro: "<p>Non riesci a ricordare tutte le parole? Prova uno di questi trucchi!</p>",
      tabs: [
        {
          label: "🖐️ Finger family",
          html: "<p>Ogni dito della mano è un membro della famiglia! È una canzoncina famosissima nei Paesi di lingua inglese:</p>" +
            "<ul><li>👍 pollice = <b>Daddy finger</b></li><li>☝️ indice = <b>Mummy finger</b></li><li>🖕 medio = <b>Brother finger</b></li><li>💍 anulare = <b>Sister finger</b></li><li>🤙 mignolo = <b>Baby finger</b></li></ul>" +
            "<p>Canta: <i>«Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?»</i> e muovi il dito giusto! 🎵</p>",
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
          label: "🔗 Parole gemelle",
          html: "<p>Alcune parole si costruiscono come i mattoncini:</p>" +
            "<ul><li><b>grand</b> (grande) + <b>mother</b> = <b>grandmother</b> 👵 (la «mamma grande»)</li>" +
            "<li><b>grand</b> + <b>father</b> = <b>grandfather</b> 👴</li>" +
            "<li><b>grand</b> + <b>parents</b> = <b>grandparents</b> (nonni)</li></ul>" +
            "<p>E guarda che coppie: <b>mother – brother</b> e <b>father</b> finiscono tutte con <b>-ther</b>! Anche <b>sister</b> finisce con <b>-er</b>. Le parole della famiglia «si somigliano», come i parenti! 😄</p>"
        },
        {
          label: "🎭 Gioco: la famiglia di cartone",
          html: "<p>Disegna e ritaglia la tua famiglia (anche gli animali di casa!). Poi presentala a un amico o a un pupazzo, come in uno spettacolo:</p>" +
            "<p>🎤 <i>«Hello! This is my dad. This is my mum. I have got a sister. And this is my dog, Max!»</i> 🐶</p>" +
            "<p>Recitare con le mani aiuta il cervello a ricordare le parole molto meglio che solo leggerle.</p>"
        },
        {
          label: "🃏 Trova le coppie",
          html: "<p>Abbina la parola affettuosa a quella formale:</p>",
          widget: "match",
          options: { pairs: [["mum", "mother"], ["dad", "father"], ["grandma", "grandmother"], ["grandpa", "grandfather"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della famiglia in inglese",
      nodes: [
        { id: "family", label: "Family", x: 50, y: 6, color: "#8b5cf6", html: "<p><b>Family</b> = famiglia.</p>", why: "<p>Viene dal latino <i>familia</i>, la stessa parola da cui viene «famiglia». Per questo si somigliano tanto! In latino indicava tutte le persone che vivevano in una casa.</p>" },
        { id: "parents", label: "Parents", x: 25, y: 30, color: "#3b82f6", html: "<p>Mum and dad = i genitori.</p>", why: "<p><b>Parents</b> viene dal latino <i>parens</i>, «chi fa nascere». Attenzione: <b>parents</b> NON vuol dire «parenti» (che in inglese si dice <b>relatives</b>): è un «falso amico»!</p>" },
        { id: "children", label: "Children", x: 75, y: 30, color: "#f59e0b", html: "<p>I figli: brother, sister, baby.</p>", why: "<p>Un bambino è <b>a child</b>, due bambini sono <b>two children</b>: è un plurale speciale, non si aggiunge solo la -s.</p>" },
        { id: "grand", label: "Grandparents", x: 25, y: 58, color: "#a855f7", html: "<p>Grandma e grandpa: i nonni.</p>", why: "<p>Il pezzetto <b>grand-</b> viene dal francese e vuol dire «grande»: i nonni sono la mamma e il papà «grandi», di una generazione prima.</p>" },
        { id: "relatives", label: "Aunt, uncle, cousin", x: 75, y: 58, color: "#ec4899", html: "<p>Zia, zio, cugino/cugina.</p>", why: "<p>Le parole <b>aunt</b> e <b>uncle</b> arrivarono in inglese dal francese antico, circa 800 anni fa. <b>Cousin</b> vale sia per maschi sia per femmine, come in francese.</p>" },
        { id: "this", label: "This is my…", x: 20, y: 88, color: "#22c55e", html: "<p>Per presentare: <i>This is my sister.</i></p>", why: "<p><b>This</b> indica qualcosa di vicino a te (questo, questa). <b>That</b> indica qualcosa di lontano (quello). <b>My</b> non cambia mai.</p>" },
        { id: "haveGot", label: "I have got…", x: 50, y: 88, color: "#0ea5e9", html: "<p>Per dire chi hai: <i>I have got a brother.</i></p>", why: "<p>In inglese britannico si usa molto <b>have got</b> per dire «avere». In America dicono più spesso solo <b>I have a brother</b>.</p>" },
        { id: "hisHer", label: "His / Her", x: 80, y: 88, color: "#ef4444", html: "<p>His name = il suo nome (di lui). Her name = il suo nome (di lei).</p>", why: "<p>In italiano «suo» cambia con la cosa posseduta; in inglese cambia con <b>chi possiede</b>: his per un maschio, her per una femmina.</p>" }
      ],
      edges: [
        ["family", "parents", "ha i"],
        ["family", "children", "ha i"],
        ["parents", "grand", "figli dei"],
        ["family", "relatives", "e i parenti"],
        ["parents", "this", "presentali con"],
        ["children", "haveGot", "dillo con"],
        ["relatives", "hisHer", "con i nomi:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: frasi",
      questions: [
        { type: "mc", q: "Come si dice «Questa è la mia mamma»?", options: ["This is my mum.", "I have got mum.", "My is mum."], answer: 0, explain: "This is my mum." },
        { type: "mc", q: "«Have you got a sister?» Se non hai una sorella rispondi…", options: ["Yes, I have.", "No, I haven't.", "I am sister."], answer: 1, explain: "No, I haven't = No, non ce l'ho." },
        { type: "tf", q: "«Parents» vuol dire «parenti».", answer: false, explain: "Parents = genitori! È un falso amico. Parenti = relatives." }
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
    { t: "Parents", d: "Genitori (non «parenti»!)." },
    { t: "This is my…", d: "Questo/questa è il mio / la mia…" },
    { t: "I have got…", d: "Io ho…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si dice «sorella»?", options: ["sister", "brother", "aunt"], answer: 0, explain: "Sister = sorella." },
      { type: "mc", q: "«Uncle» vuol dire…", options: ["nonno", "zio", "cugino"], answer: 1, explain: "Uncle = zio. Aunt = zia." },
      { type: "text", q: "Scrivi in inglese: nonno (parola affettuosa)", answer: ["grandpa", "grandad", "granddad"], explain: "Grandpa = nonno (formale: grandfather)." },
      { type: "text", q: "Scrivi in inglese: mamma", answer: ["mum", "mom", "mummy", "mother"], explain: "Mum (in America mom); formale: mother." },
      { type: "tf", q: "«Cousin» si usa sia per il cugino sia per la cugina.", answer: true, explain: "In inglese cousin vale per tutti e due." },
      { type: "mc", q: "Completa: «This is ___ dad.»", options: ["my", "I", "me"], answer: 0, explain: "This is my dad = Questo è il mio papà." },
      { type: "mc", q: "Come si dice «Ho un fratello»?", options: ["I have got a brother.", "This is brother.", "I am a brother got."], answer: 0, explain: "I have got a brother." },
      { type: "order", q: "Metti in ordine la frase: «Ho due sorelle».", items: ["I", "have", "got", "two", "sisters"], explain: "I have got two sisters." },
      { type: "mc", q: "Il papà della tua mamma è il tuo…", options: ["uncle", "grandpa", "brother"], answer: 1, explain: "Il papà della mamma è il nonno: grandpa." },
      { type: "mc", q: "Come si dice «Il suo nome è Anna» (di una femmina)?", options: ["His name is Anna.", "Her name is Anna.", "My name is Anna."], answer: 1, explain: "Per una femmina si usa her." },
      { type: "tf", q: "«Grandparents» vuol dire «nonni».", answer: true, explain: "Grand + parents = i genitori «grandi»: i nonni." }
    ]
  }
});
