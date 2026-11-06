TOPIC('it', {
  id: "p1-ing-colours",
  title: "Colours",
  intro: "Il mondo è pieno di colori! 🌈 In inglese i colori si chiamano <b>colours</b> (si legge <i>càlors</i>). Oggi impariamo i loro nomi, a chiedere <b>«What colour is it?»</b> (di che colore è?) e a fare le magie dei colori mescolandoli! 🎨",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "I colori in inglese",
      html: `<table>
<tr><th>Colore</th><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>🔴</td><td><b>red</b></td><td>red</td><td>rosso</td></tr>
<tr><td>🟡</td><td><b>yellow</b></td><td>iè-lou</td><td>giallo</td></tr>
<tr><td>🔵</td><td><b>blue</b></td><td>blu</td><td>blu, azzurro</td></tr>
<tr><td>🟢</td><td><b>green</b></td><td>griin</td><td>verde</td></tr>
<tr><td>🟠</td><td><b>orange</b></td><td>ò-rinj</td><td>arancione</td></tr>
<tr><td>🟣</td><td><b>purple</b></td><td>pèr-pol</td><td>viola</td></tr>
<tr><td>🩷</td><td><b>pink</b></td><td>pink</td><td>rosa</td></tr>
<tr><td>🟤</td><td><b>brown</b></td><td>braun</td><td>marrone</td></tr>
<tr><td>⚫</td><td><b>black</b></td><td>blek</td><td>nero</td></tr>
<tr><td>⚪</td><td><b>white</b></td><td>uàit</td><td>bianco</td></tr>
<tr><td>🩶</td><td><b>grey</b></td><td>grei</td><td>grigio</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Le matite colorate ✏️",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#fffbeb"/>
<g stroke="#334155" stroke-width="2">
<rect x="30" y="80" width="40" height="150" fill="#ef4444"/><path d="M30 80 L50 40 L70 80 Z" fill="#fcd9b6"/>
<rect x="85" y="80" width="40" height="150" fill="#facc15"/><path d="M85 80 L105 40 L125 80 Z" fill="#fcd9b6"/>
<rect x="140" y="80" width="40" height="150" fill="#3b82f6"/><path d="M140 80 L160 40 L180 80 Z" fill="#fcd9b6"/>
<rect x="195" y="80" width="40" height="150" fill="#22c55e"/><path d="M195 80 L215 40 L235 80 Z" fill="#fcd9b6"/>
<rect x="250" y="80" width="40" height="150" fill="#f97316"/><path d="M250 80 L270 40 L290 80 Z" fill="#fcd9b6"/>
<rect x="305" y="80" width="40" height="150" fill="#a855f7"/><path d="M305 80 L325 40 L345 80 Z" fill="#fcd9b6"/>
<rect x="360" y="80" width="40" height="150" fill="#f9a8d4"/><path d="M360 80 L380 40 L400 80 Z" fill="#fcd9b6"/>
<rect x="415" y="80" width="40" height="150" fill="#92400e"/><path d="M415 80 L435 40 L455 80 Z" fill="#fcd9b6"/>
<rect x="470" y="80" width="40" height="150" fill="#111827"/><path d="M470 80 L490 40 L510 80 Z" fill="#fcd9b6"/>
<rect x="525" y="80" width="40" height="150" fill="#f8fafc"/><path d="M525 80 L545 40 L565 80 Z" fill="#fcd9b6"/>
</g>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">
<text x="50" y="255">red</text><text x="105" y="255">yellow</text><text x="160" y="255">blue</text><text x="215" y="255">green</text><text x="270" y="255">orange</text>
<text x="325" y="255">purple</text><text x="380" y="255">pink</text><text x="435" y="255">brown</text><text x="490" y="255">black</text><text x="545" y="255">white</text>
</g>
<text x="300" y="290" font-size="18" text-anchor="middle" fill="#7c2d12">What colour is it? It's red!</text>
</svg>`,
      caption: "Dieci matite, dieci colori. Indica una matita e di' il suo nome in inglese!"
    },
    {
      type: "widget",
      title: "Flashcards: i colori",
      widget: "flashcards",
      options: { cards: [
        { front: "🔴", back: "red – rosso" },
        { front: "🟡", back: "yellow – giallo" },
        { front: "🔵", back: "blue – blu" },
        { front: "🟢", back: "green – verde" },
        { front: "🟠", back: "orange – arancione" },
        { front: "🟣", back: "purple – viola" },
        { front: "🩷", back: "pink – rosa" },
        { front: "🟤", back: "brown – marrone" },
        { front: "⚫", back: "black – nero" },
        { front: "⚪", back: "white – bianco" },
        { front: "🩶", back: "grey – grigio" }
      ] },
      caption: "Guarda il colore, di' il nome in inglese, poi gira la carta per controllare."
    },
    {
      type: "quiz",
      title: "Mini-quiz: che colore?",
      questions: [
        { type: "mc", q: "🍌 La banana è…", options: ["yellow", "blue", "black"], answer: 0, explain: "La banana è gialla: yellow." },
        { type: "mc", q: "«Green» vuol dire…", options: ["grigio", "verde", "rosso"], answer: 1, explain: "Green = verde 🐸." },
        { type: "text", q: "Scrivi in inglese: bianco", answer: ["white"], explain: "Bianco = white ⚪." }
      ]
    },
    {
      type: "remember",
      title: "Domanda e risposta",
      html: `<p>❓ <b>What colour is it?</b> (uòt càlor is it) = Di che colore è?</p>
<p>💬 <b>It's blue.</b> (its blu) = È blu.</p>
<p>🎨 Il colore va <b>prima</b> della cosa: <b>a red apple</b> = una mela rossa 🍎, <b>a yellow sun</b> = un sole giallo ☀️.</p>
<p>❤️ Per dire il tuo preferito: <b>My favourite colour is pink.</b> = Il mio colore preferito è il rosa.</p>`
    },
    {
      type: "text",
      title: "La magia dei colori: mix! 🎨",
      html: `<p>I pittori sanno che con <b>3 colori</b> si possono fare tanti altri colori. In inglese «mescolare» si dice <b>mix</b>:</p>
<ul>
<li>🔴 <b>red</b> + 🟡 <b>yellow</b> = 🟠 <b>orange</b></li>
<li>🔵 <b>blue</b> + 🟡 <b>yellow</b> = 🟢 <b>green</b></li>
<li>🔴 <b>red</b> + 🔵 <b>blue</b> = 🟣 <b>purple</b></li>
<li>🔴 <b>red</b> + ⚪ <b>white</b> = 🩷 <b>pink</b></li>
<li>⚫ <b>black</b> + ⚪ <b>white</b> = 🩶 <b>grey</b></li>
</ul>
<p>Rosso, giallo e blu si chiamano <b>colori primari</b> (primary colours).</p>`
    },
    {
      type: "svg",
      title: "Mix the colours!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ffffff"/>
<circle cx="230" cy="110" r="80" fill="#ef4444" opacity="0.75"/>
<circle cx="370" cy="110" r="80" fill="#facc15" opacity="0.75"/>
<circle cx="300" cy="210" r="80" fill="#3b82f6" opacity="0.75"/>
<g font-size="20" font-weight="bold" text-anchor="middle">
<text x="200" y="90" fill="#7f1d1d">red</text>
<text x="400" y="90" fill="#713f12">yellow</text>
<text x="300" y="260" fill="#ffffff">blue</text>
<text x="300" y="95" fill="#7c2d12" font-size="16">orange</text>
<text x="230" y="185" fill="#ffffff" font-size="16">purple</text>
<text x="370" y="185" fill="#14532d" font-size="16">green</text>
</g>
<text x="520" y="60" font-size="18" fill="#0f172a">🎨 mix!</text>
</svg>`,
      caption: "Dove due cerchi si sovrappongono nasce un colore nuovo: rosso + giallo = arancione, giallo + blu = verde, blu + rosso = viola."
    },
    {
      type: "example",
      title: "Esempio: le bandiere 🏳️",
      html: `<p>Descrivi le bandiere in inglese!</p>
<ul>
<li>🇮🇹 <b>Italy</b>: green, white and red.</li>
<li>🇬🇧 <b>The United Kingdom</b>: red, white and blue.</li>
<li>🇫🇷 <b>France</b>: blue, white and red.</li>
<li>🇩🇪 <b>Germany</b>: black, red and yellow.</li>
</ul>
<p>Domanda: <i>What colours are on the Italian flag?</i> → <b>Green, white and red!</b></p>`
    },
    {
      type: "example",
      title: "Esempio: al negozio di gelati 🍦",
      html: `<p><b>Bambina:</b> Hello! A pink ice cream, please! 🍓<br>
<b>Gelataio:</b> Pink? Strawberry! Here you are.<br>
<b>Bambino:</b> And a brown ice cream for me, please! 🍫<br>
<b>Gelataio:</b> Brown… chocolate! Here you are.<br>
<b>Bambini:</b> Thank you! 😋</p>
<p>👉 <b>please</b> = per favore · <b>Here you are</b> = ecco a te.</p>`
    },
    {
      type: "widget",
      title: "Gioco: di che colore sono?",
      widget: "classify",
      options: {
        groups: ["🔴 red", "🟢 green", "🟡 yellow"],
        items: [["🍓 fragola", 0], ["🚒 camion dei pompieri", 0], ["🍅 pomodoro", 0], ["🐸 rana", 1], ["🥦 broccolo", 1], ["🍀 quadrifoglio", 1], ["🍋 limone", 2], ["🌻 girasole", 2], ["🐥 pulcino", 2]]
      },
      caption: "Metti ogni cosa nel gruppo del suo colore."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… prima è arrivata l'arancia? 🍊",
      html: `<p>Tanto tempo fa gli inglesi non avevano una parola per il colore arancione: lo chiamavano «giallo-rosso». Poi in Inghilterra arrivò un frutto nuovo, l'<b>orange</b> (arancia), e circa 500 anni fa iniziarono a usare il nome del frutto anche per il colore! Prima il frutto, poi il colore. 😄</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… «colour» e «color» sono la stessa parola? 🇬🇧🇺🇸",
      html: `<p>In <b>Inghilterra</b> si scrive <b>colour</b>, negli <b>Stati Uniti</b> si scrive <b>color</b>, senza la «u». Si pronunciano allo stesso modo! La parola viene dal latino <i>color</i>, come il nostro «colore». Anche <b>grey</b> (inglese) negli Stati Uniti si scrive spesso <b>gray</b>.</p>`
    },
    {
      type: "3d",
      title: "Gira il cubo colorato 🧊",
      scene: "solid",
      options: { shapes: ["cube", "sphere", "cylinder", "cone"], shape: "cube", color: "#a855f7", labels: false },
      caption: "Cambia forma con i pulsanti e gira il solido. Che colore ha? «It's purple!» Prova a dire anche la forma: cube = cubo, ball = palla."
    },
    {
      type: "alternatives",
      title: "Altri modi per ricordare i colori",
      intro: "<p>C'è chi impara cantando, chi giocando, chi guardando. Prova tutti i modi!</p>",
      tabs: [
        {
          label: "🌈 Arcobaleno inglese",
          html: `<p>I bambini inglesi ricordano i colori dell'arcobaleno con una frase buffa: <b>«Richard Of York Gave Battle In Vain»</b>. Le prime lettere sono le iniziali dei colori:</p>
<p><b>R</b>ed · <b>O</b>range · <b>Y</b>ellow · <b>G</b>reen · <b>B</b>lue · <b>I</b>ndigo · <b>V</b>iolet</p>
<p>Indigo è il blu scuro (indaco), violet è il viola. Per noi basta ricordare: <b>ROY G BIV</b>, come il nome di un signore! 🧔</p>`
        },
        {
          label: "🕵️ I spy",
          html: `<p>Gioca con la famiglia a <b>I spy</b> (io spio): uno guarda intorno e dice</p>
<p>🗣️ <i>«I spy with my little eye something… <b>blue</b>!»</i></p>
<p>Gli altri devono indovinare l'oggetto blu nella stanza. Chi indovina, fa la prossima domanda!</p>`
        },
        {
          label: "🎵 Canta",
          html: `<p>Canta questa filastrocca toccando qualcosa di quel colore:</p>
<p style="font-size:1.2em"><b>Red</b> and <b>yellow</b> and <b>pink</b> and <b>green</b>,<br><b>Purple</b> and <b>orange</b> and <b>blue</b>!<br>I can sing a rainbow,<br>sing a rainbow, sing a rainbow too! 🌈</p>
<p>È una canzone famosissima nelle scuole inglesi: «I Can Sing a Rainbow».</p>`
        },
        {
          label: "🔗 Abbina",
          html: `<p>Tocca la parola inglese e poi il suo colore.</p>`,
          widget: "match",
          options: { pairs: [["red", "🔴 rosso"], ["blue", "🔵 blu"], ["yellow", "🟡 giallo"], ["purple", "🟣 viola"], ["brown", "🟤 marrone"], ["grey", "🩶 grigio"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa dei colours",
      nodes: [
        { id: "col", label: "Colours", x: 50, y: 8, color: "#8b5cf6", html: "<p>I colori in inglese.</p>", why: "<p>La parola «colour» viene dal latino <i>color</i>, arrivata in inglese dal francese antico circa 700 anni fa.</p>" },
        { id: "prim", label: "Primary colours", x: 20, y: 32, color: "#ef4444", html: "<p>Red, yellow, blue: i colori primari dei pittori.</p>", why: "<p>Mescolando questi tre si ottengono quasi tutti gli altri colori di pittura. Gli artisti lo sanno da secoli!</p>" },
        { id: "sec", label: "Mix: orange, green, purple", x: 20, y: 62, color: "#f97316", html: "<p>I colori che nascono mescolando due primari.</p>", why: "<p>Si chiamano colori secondari: red+yellow=orange, yellow+blue=green, blue+red=purple.</p>" },
        { id: "bw", label: "Black, white, grey", x: 50, y: 40, color: "#64748b", html: "<p>Nero, bianco e grigio.</p>", why: "<p>Mescolando black e white si ottiene grey. Il bianco rende i colori più chiari (red + white = pink).</p>" },
        { id: "rain", label: "Rainbow", x: 80, y: 32, color: "#22c55e", html: "<p>L'arcobaleno: ROY G BIV.</p>", why: "<p>Lo scienziato inglese <b>Isaac Newton</b>, circa 350 anni fa, fece passare la luce del sole in un prisma di vetro e vide che si divideva in colori. Scelse di contarne <b>sette</b>.</p>" },
        { id: "q", label: "What colour is it?", x: 80, y: 62, color: "#3b82f6", html: "<p>Di che colore è? → It's green.</p>", why: "<p>Con «what» si chiede un'informazione. «It's» è la forma corta di «it is».</p>" },
        { id: "order", label: "a red apple", x: 50, y: 90, color: "#ec4899", html: "<p>Il colore va prima della cosa.</p>", why: "<p>In inglese l'aggettivo (la parola che descrive) sta prima del nome. In italiano di solito dopo: «una mela rossa».</p>" }
      ],
      edges: [
        ["col", "prim", ""], ["col", "bw", ""], ["col", "rain", ""], ["prim", "sec", "mix"], ["bw", "sec", "schiarisce/scurisce"], ["col", "q", "si chiede"], ["q", "order", "si descrive"], ["sec", "order", ""]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: mix e frasi",
      questions: [
        { type: "mc", q: "Red + yellow = ?", options: ["green", "orange", "grey"], answer: 1, explain: "Rosso + giallo = arancione: orange." },
        { type: "mc", q: "Come si dice «una mela rossa»?", options: ["an apple red", "a red apple", "red an apple"], answer: 1, explain: "Il colore va prima: a red apple." },
        { type: "tf", q: "«What colour is it?» vuol dire «Di che colore è?».", answer: true, explain: "Esatto!" }
      ]
    }
  ],
  glossary: [
    { t: "Colour / color", d: "Colore (inglese britannico / americano)." },
    { t: "Red, yellow, blue", d: "Rosso, giallo, blu: i colori primari." },
    { t: "Orange, green, purple", d: "Arancione, verde, viola." },
    { t: "Pink, brown, grey", d: "Rosa, marrone, grigio." },
    { t: "Black, white", d: "Nero, bianco." },
    { t: "Mix", d: "Mescolare." },
    { t: "What colour is it?", d: "Di che colore è?" },
    { t: "Rainbow", d: "Arcobaleno." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "«Red» vuol dire…", options: ["rosso", "rosa", "verde"], answer: 0, explain: "Red = rosso 🔴." },
      { type: "text", q: "Scrivi in inglese: giallo", answer: ["yellow"], explain: "Giallo = yellow." },
      { type: "mc", q: "🐻 L'orso bruno è…", options: ["pink", "brown", "blue"], answer: 1, explain: "Brown = marrone." },
      { type: "mc", q: "Blue + yellow = ?", options: ["green", "purple", "pink"], answer: 0, explain: "Blu + giallo = verde." },
      { type: "tf", q: "«Black» vuol dire bianco.", answer: false, explain: "Black = nero; white = bianco." },
      { type: "mc", q: "I colori della bandiera italiana sono…", options: ["red, white and blue", "green, white and red", "black, red and yellow"], answer: 1, explain: "Verde, bianco e rosso." },
      { type: "text", q: "Scrivi in inglese: viola", answer: ["purple", "violet"], explain: "Viola = purple." },
      { type: "mc", q: "Come chiedi «Di che colore è?»", options: ["What's your name?", "What colour is it?", "How are you?"], answer: 1, explain: "What colour is it?" },
      { type: "mc", q: "Black + white = ?", options: ["grey", "brown", "orange"], answer: 0, explain: "Nero + bianco = grigio." },
      { type: "order", q: "Metti in ordine i colori dell'arcobaleno (dall'alto):", items: ["red", "orange", "yellow", "green", "blue"], explain: "ROY G BIV: red, orange, yellow, green, blue (poi indigo e violet)." },
      { type: "tf", q: "In America «colour» si scrive «color».", answer: true, explain: "Gli americani tolgono la «u»." }
    ]
  }
});
