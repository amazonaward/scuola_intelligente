TOPIC('it', {
  id: "p1-ing-hello",
  title: "Hello! Saluti e presentazioni",
  intro: "<b>Hello!</b> 👋 In inglese «ciao» si dice <b>hello</b> (si legge <i>hellòu</i>). Oggi impariamo a <b>salutare</b>, a dire <b>come ci chiamiamo</b> e a chiedere <b>come stai</b>. Così potrai fare amicizia con bambini di tutto il mondo! 🌍",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Salutare: hello e goodbye",
      html: `<table>
<tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>👋 <b>Hello!</b></td><td>hellòu</td><td>Ciao! (quando arrivi)</td></tr>
<tr><td>🙋 <b>Hi!</b></td><td>hai</td><td>Ciao! (più veloce, tra amici)</td></tr>
<tr><td>👋 <b>Goodbye!</b></td><td>gud-bài</td><td>Arrivederci! Ciao! (quando vai via)</td></tr>
<tr><td>✌️ <b>Bye!</b> / <b>Bye-bye!</b></td><td>bai</td><td>Ciao ciao!</td></tr>
<tr><td>👀 <b>See you!</b></td><td>sii iu</td><td>Ci vediamo!</td></tr>
</table>
<p>⚠️ In italiano diciamo «ciao» sia quando arriviamo sia quando andiamo via. In inglese no: <b>hello</b> quando arrivi, <b>goodbye</b> quando vai via!</p>`
    },
    {
      type: "text",
      title: "Buongiorno, buonasera, buonanotte",
      html: `<p>In inglese ci sono saluti diversi per ogni momento della giornata:</p>
<ul>
<li>🌅 <b>Good morning!</b> (gud mòrning) = Buongiorno! — la mattina</li>
<li>☀️ <b>Good afternoon!</b> (gud aftenùun) = Buon pomeriggio! — dopo pranzo</li>
<li>🌆 <b>Good evening!</b> (gud ìivning) = Buonasera! — la sera, quando arrivi</li>
<li>🌙 <b>Good night!</b> (gud nàit) = Buonanotte! — quando vai a dormire</li>
</ul>
<p>Tutti cominciano con <b>good</b>, che vuol dire «buono». 👍</p>`
    },
    {
      type: "svg",
      title: "Il sole durante la giornata",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="150" height="300" fill="#fde68a"/>
<rect x="150" y="0" width="150" height="300" fill="#7dd3fc"/>
<rect x="300" y="0" width="150" height="300" fill="#fb923c"/>
<rect x="450" y="0" width="150" height="300" fill="#1e3a8a"/>
<rect x="0" y="230" width="600" height="70" fill="#4ade80"/>
<circle cx="75" cy="190" r="30" fill="#f59e0b"/>
<circle cx="225" cy="70" r="34" fill="#facc15"/>
<circle cx="375" cy="190" r="30" fill="#dc2626"/>
<circle cx="525" cy="70" r="26" fill="#f8fafc"/>
<circle cx="537" cy="62" r="24" fill="#1e3a8a"/>
<g font-size="20" font-weight="bold" text-anchor="middle">
<text x="75" y="265" fill="#14532d">Good</text><text x="75" y="288" fill="#14532d">morning</text>
<text x="225" y="265" fill="#14532d">Good</text><text x="225" y="288" fill="#14532d">afternoon</text>
<text x="375" y="265" fill="#14532d">Good</text><text x="375" y="288" fill="#14532d">evening</text>
<text x="525" y="265" fill="#14532d">Good</text><text x="525" y="288" fill="#14532d">night</text>
</g>
</svg>`,
      caption: "Mattina, pomeriggio, sera, notte: ogni momento ha il suo saluto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: hello o goodbye?",
      questions: [
        { type: "mc", q: "Entri in classe la mattina. Dici…", options: ["Good night!", "Good morning!", "Goodbye!"], answer: 1, explain: "La mattina si dice Good morning!" },
        { type: "mc", q: "Vai via dalla festa. Dici…", options: ["Hello!", "Goodbye!", "Hi!"], answer: 1, explain: "Quando vai via: Goodbye! o Bye!" },
        { type: "tf", q: "«Good night» si dice quando si va a dormire.", answer: true, explain: "Good night = buonanotte 🌙." }
      ]
    },
    {
      type: "text",
      title: "Come ti chiami? What's your name?",
      html: `<p>Per presentarti:</p>
<p>❓ <b>What's your name?</b> (uòts ior nèim) = Come ti chiami?</p>
<p>🙂 <b>My name is Sofia.</b> (mai nèim is…) = Mi chiamo Sofia.</p>
<p>oppure, più corto: <b>I'm Sofia.</b> (aim Sofia) = Sono Sofia.</p>
<p>🤝 <b>Nice to meet you!</b> (nais tu mìit iu) = Piacere di conoscerti!</p>
<hr>
<p>Per chiedere come sta un amico:</p>
<p>❓ <b>How are you?</b> (hau àr iu) = Come stai?</p>
<p>😀 <b>I'm fine, thank you!</b> (aim fàin, thènk iu) = Sto bene, grazie!</p>
<p>😃 <b>I'm great!</b> = Sto benissimo! · 😐 <b>I'm OK.</b> = Così così. · 😢 <b>I'm sad.</b> = Sono triste.</p>`
    },
    {
      type: "svg",
      title: "Un dialogo con i fumetti",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#f0f9ff"/>
<circle cx="110" cy="230" r="40" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>
<path d="M72 215 Q110 160 148 215" fill="#7c2d12"/>
<circle cx="97" cy="228" r="5" fill="#1e293b"/><circle cx="123" cy="228" r="5" fill="#1e293b"/>
<path d="M95 248 Q110 260 125 248" stroke="#1e293b" stroke-width="3" fill="none"/>
<rect x="80" y="270" width="60" height="50" fill="#ec4899"/>
<circle cx="490" cy="230" r="40" fill="#e7b48f" stroke="#78350f" stroke-width="3"/>
<path d="M452 212 Q490 175 528 212" fill="#111827"/>
<circle cx="477" cy="228" r="5" fill="#1e293b"/><circle cx="503" cy="228" r="5" fill="#1e293b"/>
<path d="M475 248 Q490 260 505 248" stroke="#1e293b" stroke-width="3" fill="none"/>
<rect x="460" y="270" width="60" height="50" fill="#3b82f6"/>
<rect x="20" y="20" width="260" height="70" rx="20" fill="#ffffff" stroke="#ec4899" stroke-width="3"/>
<path d="M100 90 L110 170 L130 90 Z" fill="#ffffff" stroke="#ec4899" stroke-width="3"/>
<text x="150" y="50" font-size="20" text-anchor="middle" fill="#9d174d" font-weight="bold">Hello! I'm Anna.</text>
<text x="150" y="76" font-size="20" text-anchor="middle" fill="#9d174d" font-weight="bold">What's your name?</text>
<rect x="320" y="20" width="260" height="70" rx="20" fill="#ffffff" stroke="#3b82f6" stroke-width="3"/>
<path d="M480 90 L490 170 L510 90 Z" fill="#ffffff" stroke="#3b82f6" stroke-width="3"/>
<text x="450" y="50" font-size="20" text-anchor="middle" fill="#1e40af" font-weight="bold">Hi! My name is Tom.</text>
<text x="450" y="76" font-size="20" text-anchor="middle" fill="#1e40af" font-weight="bold">Nice to meet you!</text>
</svg>`,
      caption: "Anna e Tom si incontrano al parco e si presentano."
    },
    {
      type: "widget",
      title: "Flashcards: i saluti",
      widget: "flashcards",
      options: { cards: [
        { front: "👋 Hello!", back: "Ciao! (arrivando)" },
        { front: "✌️ Goodbye!", back: "Arrivederci!" },
        { front: "🌅 Good morning!", back: "Buongiorno!" },
        { front: "🌙 Good night!", back: "Buonanotte!" },
        { front: "❓ What's your name?", back: "Come ti chiami?" },
        { front: "🙂 My name is…", back: "Mi chiamo…" },
        { front: "❓ How are you?", back: "Come stai?" },
        { front: "😀 I'm fine, thank you!", back: "Sto bene, grazie!" },
        { front: "🤝 Nice to meet you!", back: "Piacere di conoscerti!" }
      ] },
      caption: "Leggi ad alta voce la frase inglese, poi gira la carta."
    },
    {
      type: "example",
      title: "Esempio: il primo giorno con la teacher 👩‍🏫",
      html: `<p><b>Teacher:</b> Good morning, children! ☀️<br>
<b>Children:</b> Good morning, teacher!<br>
<b>Teacher:</b> How are you?<br>
<b>Children:</b> We're fine, thank you! 😀<br>
<b>Teacher:</b> What's your name? (a un bambino)<br>
<b>Luca:</b> My name is Luca.<br>
<b>Teacher:</b> Nice to meet you, Luca! 🤝</p>`
    },
    {
      type: "example",
      title: "Esempio: una videochiamata con la cugina in Inghilterra 💻",
      html: `<p><b>Emma:</b> Hi, Marco! 👋<br>
<b>Marco:</b> Hello, Emma! How are you?<br>
<b>Emma:</b> I'm great! And you?<br>
<b>Marco:</b> I'm fine, thank you!<br>
…<br>
<b>Emma:</b> Bye-bye, Marco! See you!<br>
<b>Marco:</b> Goodbye, Emma! 💕</p>
<p>👉 <b>And you?</b> = E tu? Serve per rimandare la domanda all'amico.</p>`
    },
    {
      type: "widget",
      title: "Gioco: domanda e risposta",
      widget: "match",
      options: { pairs: [["What's your name?", "My name is Anna."], ["How are you?", "I'm fine, thank you!"], ["Hello!", "Hi!"], ["Nice to meet you!", "Nice to meet you too!"], ["Good night!", "Good night! Sweet dreams!"]] },
      caption: "Abbina ogni domanda o saluto alla risposta giusta."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… «hello» è diventato famoso grazie al telefono? ☎️",
      html: `<p>Quando nel 1876 nacque il telefono, nessuno sapeva cosa dire quando si rispondeva! Alexander Graham Bell, l'inventore, proponeva <b>«Ahoy!»</b>, come i marinai ⚓. Thomas Edison invece suggerì <b>«Hello!»</b>… e vinse Edison: da allora «hello» è il saluto più usato in inglese.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… «goodbye» era una benedizione? 🙏",
      html: `<p>Tanto tempo fa, in Inghilterra, per salutare si diceva <b>«God be with ye»</b>, cioè «Dio sia con te». A forza di dirlo velocemente, le parole si sono «schiacciate» ed è nato <b>goodbye</b>! Anche l'italiano «ciao» ha una storia simile: viene dal veneziano <i>s'ciào</i>, che voleva dire «(sono vostro) schiavo», cioè «al vostro servizio».</p>`
    },
    {
      type: "3d",
      title: "Hello in tutto il mondo 🌍",
      scene: "globe",
      options: { points: [
        { lat: 52, lon: -1, label: "🇬🇧 Hello!", color: "#3b82f6" },
        { lat: 42, lon: 12.5, label: "🇮🇹 Ciao!", color: "#22c55e" },
        { lat: 40.4, lon: -3.7, label: "🇪🇸 ¡Hola!", color: "#eab308" },
        { lat: 46.6, lon: 2.4, label: "🇫🇷 Bonjour!", color: "#1d4ed8" },
        { lat: 51, lon: 10, label: "🇩🇪 Hallo!", color: "#111827" },
        { lat: 36, lon: 138, label: "🇯🇵 Konnichiwa!", color: "#ef4444" },
        { lat: 35, lon: 104, label: "🇨🇳 Nǐ hǎo!", color: "#dc2626" },
        { lat: -6, lon: 35, label: "🇹🇿 Jambo!", color: "#16a34a" },
        { lat: -25, lon: 134, label: "🇦🇺 G'day! (inglese)", color: "#f97316" },
        { lat: 39, lon: -98, label: "🇺🇸 Hi! (inglese)", color: "#6366f1" }
      ] },
      caption: "Gira il globo e scopri come si saluta in tanti Paesi. L'inglese si parla in Inghilterra, negli Stati Uniti, in Australia e in molti altri Paesi!"
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare i saluti",
      intro: "<p>Le parole nuove si ricordano meglio se le usi in tanti modi diversi.</p>",
      tabs: [
        {
          label: "🎵 Canta",
          html: `<p>Canta sulla melodia di «Fra Martino»:</p>
<p style="font-size:1.2em"><b>Hello, hello!</b> 👋 <b>Hello, hello!</b><br><b>How are you? How are you?</b><br><b>I'm fine, thank you!</b> 😀 <b>I'm fine, thank you!</b><br><b>Goodbye!</b> ✌️ <b>Goodbye!</b></p>`
        },
        {
          label: "🎭 Con i pupazzi",
          html: `<p>Prendi due peluche o fai due pupazzi con i calzini 🧦. Fai parlare uno in inglese e l'altro risponde:</p>
<p>🐻 «Hello! What's your name?»<br>🐰 «My name is Bunny. And you?»<br>🐻 «I'm Teddy. Nice to meet you!»</p>
<p>Quando parla un pupazzo, ci si vergogna meno di sbagliare! 😉</p>`
        },
        {
          label: "🤝 Saluti nel mondo",
          html: `<p>Ogni Paese saluta anche con il <b>corpo</b>:</p>
<ul>
<li>🇬🇧🇺🇸 In Inghilterra e in America: una <b>stretta di mano</b> o un cenno con la mano.</li>
<li>🇯🇵 In Giappone: un <b>inchino</b> (ojigi), più profondo per le persone importanti.</li>
<li>🇮🇳 In India: le mani unite davanti al petto dicendo <b>«Namaste»</b>.</li>
<li>🇮🇹🇫🇷 In Italia e Francia: spesso due <b>bacini</b> sulle guance.</li>
<li>🇳🇿 In Nuova Zelanda, i Maori fanno l'<b>hongi</b>: toccano naso e fronte.</li>
</ul>`
        },
        {
          label: "🃏 Gioca a carte",
          html: `<p>Guarda l'immagine e di' il saluto giusto in inglese, poi gira la carta.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "🌅 è mattina", back: "Good morning!" },
            { front: "☀️ è pomeriggio", back: "Good afternoon!" },
            { front: "🌆 è sera, arrivi", back: "Good evening!" },
            { front: "🛏️ vai a letto", back: "Good night!" },
            { front: "🚪 vai via", back: "Goodbye! / Bye!" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa dei saluti",
      nodes: [
        { id: "greet", label: "Greetings (saluti)", x: 50, y: 8, color: "#8b5cf6", html: "<p>Le parole per salutare e presentarsi.</p>", why: "<p>Salutare è il primo modo per dire «sono amico». In tutte le lingue del mondo esiste un saluto: è una delle prime cose che si imparano.</p>" },
        { id: "hello", label: "Hello / Hi", x: 15, y: 32, color: "#22c55e", html: "<p>Ciao quando arrivi.</p>", why: "<p>«Hello» esisteva già come esclamazione per attirare l'attenzione; è diventato il saluto più comune con il telefono, grazie a Thomas Edison (1877).</p>" },
        { id: "bye", label: "Goodbye / Bye", x: 85, y: 32, color: "#ef4444", html: "<p>Ciao quando vai via.</p>", why: "<p>Viene da «God be with ye» (Dio sia con te), una frase del 1500 che si è accorciata col tempo.</p>" },
        { id: "time", label: "Good morning / night", x: 50, y: 36, color: "#f59e0b", html: "<p>Saluti per i momenti della giornata.</p>", why: "<p>Si usa «good» (buono) come in italiano «buon-giorno»: si augura una buona parte della giornata. Molte lingue europee fanno così (Bonjour, Guten Morgen).</p>" },
        { id: "name", label: "What's your name?", x: 22, y: 64, color: "#3b82f6", html: "<p>Come ti chiami? → My name is…</p>", why: "<p>«What's» è la forma corta di «what is». In inglese si accorciano spesso le parole con l'apostrofo: I'm = I am.</p>" },
        { id: "how", label: "How are you?", x: 78, y: 64, color: "#ec4899", html: "<p>Come stai? → I'm fine, thank you!</p>", why: "<p>In Inghilterra e in America è una domanda di cortesia: spesso si risponde «Fine, thanks!» anche solo per gentilezza.</p>" },
        { id: "nice", label: "Nice to meet you", x: 30, y: 90, color: "#14b8a6", html: "<p>Piacere di conoscerti!</p>", why: "<p>Si dice solo la <b>prima</b> volta che si conosce una persona. La volta dopo si dice «Nice to see you!» (che bello vederti).</p>" },
        { id: "polite", label: "Thank you / Please", x: 70, y: 90, color: "#a855f7", html: "<p>Grazie / per favore: le parole gentili.</p>", why: "<p>Gli inglesi usano «please» e «thank you» moltissimo: sono considerati segno di buona educazione fin da piccoli.</p>" }
      ],
      edges: [
        ["greet", "hello", "arrivo"], ["greet", "bye", "partenza"], ["greet", "time", "per l'ora"], ["hello", "name", "poi chiedo"], ["hello", "how", "poi chiedo"], ["name", "nice", "rispondo"], ["how", "polite", "rispondo con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: presentarsi",
      questions: [
        { type: "mc", q: "«What's your name?» vuol dire…", options: ["Quanti anni hai?", "Come ti chiami?", "Come stai?"], answer: 1, explain: "Name = nome." },
        { type: "mc", q: "Come rispondi a «How are you?»", options: ["My name is Leo.", "I'm fine, thank you!", "Good night!"], answer: 1, explain: "How are you? → I'm fine, thank you!" },
        { type: "text", q: "Completa: «My ___ is Sara.»", answer: ["name"], explain: "My name is Sara = Mi chiamo Sara." }
      ]
    }
  ],
  glossary: [
    { t: "Hello / Hi", d: "Ciao (quando arrivi). Hi è più informale." },
    { t: "Goodbye / Bye", d: "Arrivederci, ciao (quando vai via)." },
    { t: "Good morning", d: "Buongiorno (la mattina)." },
    { t: "Good afternoon", d: "Buon pomeriggio." },
    { t: "Good evening", d: "Buonasera." },
    { t: "Good night", d: "Buonanotte (quando si va a dormire)." },
    { t: "What's your name?", d: "Come ti chiami?" },
    { t: "My name is… / I'm…", d: "Mi chiamo… / Sono…" },
    { t: "How are you?", d: "Come stai?" },
    { t: "I'm fine, thank you", d: "Sto bene, grazie." },
    { t: "Nice to meet you", d: "Piacere di conoscerti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si dice «ciao» quando arrivi?", options: ["Hello!", "Goodbye!", "Good night!"], answer: 0, explain: "Hello! (o Hi!)." },
      { type: "mc", q: "«Good night» si dice…", options: ["la mattina", "quando si va a dormire", "a pranzo"], answer: 1, explain: "Good night = buonanotte." },
      { type: "text", q: "Scrivi in inglese: Buongiorno! (la mattina)", answer: ["good morning", "good morning!"], explain: "Good morning!" },
      { type: "tf", q: "«Goodbye» si dice quando si va via.", answer: true, explain: "Goodbye = arrivederci." },
      { type: "mc", q: "«My name is Pietro» vuol dire…", options: ["Mi chiamo Pietro", "Sto bene, Pietro", "Ciao Pietro"], answer: 0, explain: "My name is… = Mi chiamo…" },
      { type: "mc", q: "Un amico ti chiede «How are you?». Rispondi:", options: ["I'm fine, thank you!", "What's your name?", "Good morning!"], answer: 0, explain: "Sto bene, grazie!" },
      { type: "text", q: "Come si dice «grazie» in inglese?", answer: ["thank you", "thanks"], explain: "Thank you (o thanks)." },
      { type: "order", q: "Metti in ordine il dialogo:", items: ["Hello! What's your name?", "My name is Tom. And you?", "I'm Anna. Nice to meet you!", "Nice to meet you too! Bye!"], explain: "Si saluta, ci si presenta, si dice piacere e alla fine ci si saluta." },
      { type: "mc", q: "Sono le 4 del pomeriggio. Dici…", options: ["Good morning!", "Good afternoon!", "Good night!"], answer: 1, explain: "Afternoon = pomeriggio." },
      { type: "tf", q: "In inglese si usa «hello» anche per andare via.", answer: false, explain: "No: per andare via si dice goodbye o bye." },
      { type: "mc", q: "Come si saluta in Giappone?", options: ["Bonjour", "Konnichiwa", "Hola"], answer: 1, explain: "Konnichiwa, spesso con un inchino." }
    ]
  }
});
