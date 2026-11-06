TOPIC('it', {
  id: "p3-ing-house",
  title: "My house",
  intro: "Welcome to my house! 🏠 Oggi visitiamo una casa inglese stanza per stanza: impariamo i nomi delle <b>stanze</b> (rooms) e dei <b>mobili</b> (furniture), e a dire che cosa c'è con <b>there is</b> e <b>there are</b>.",
  minutes: 30,
  sections: [
    {
      type: "text", title: "The rooms: le stanze 🚪",
      html: `<table><tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>🍳 <b>kitchen</b></td><td>kì-cen</td><td>cucina</td></tr>
<tr><td>🛋️ <b>living room</b></td><td>lì-ving rum</td><td>soggiorno</td></tr>
<tr><td>🍽️ <b>dining room</b></td><td>dài-ning rum</td><td>sala da pranzo</td></tr>
<tr><td>🛏️ <b>bedroom</b></td><td>bèd-rum</td><td>camera da letto</td></tr>
<tr><td>🛁 <b>bathroom</b></td><td>bàth-rum</td><td>bagno</td></tr>
<tr><td>🚪 <b>hall</b></td><td>hool</td><td>ingresso</td></tr>
<tr><td>🚗 <b>garage</b></td><td>gà-raj</td><td>garage</td></tr>
<tr><td>🌳 <b>garden</b></td><td>gàr-den</td><td>giardino</td></tr>
<tr><td>🪜 <b>stairs</b></td><td>stèrs</td><td>scale</td></tr></table>
<p>Hai notato? Molte stanze finiscono con <b>room</b> (stanza): <b>bed</b>room = stanza del letto, <b>bath</b>room = stanza della vasca. Facile!</p>`
    },
    {
      type: "svg", title: "Una casa inglese in sezione",
      caption: "Una tipica casa inglese a due piani: di sopra (upstairs) le camere e il bagno, di sotto (downstairs) cucina e soggiorno.",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#e0f2fe"/>
<rect x="0" y="290" width="600" height="30" fill="#4ade80"/>
<polygon points="80,110 300,15 520,110" fill="#b91c1c" stroke="#7f1d1d" stroke-width="3"/>
<rect x="80" y="110" width="440" height="180" fill="#fef3c7" stroke="#78350f" stroke-width="4"/>
<line x1="80" y1="200" x2="520" y2="200" stroke="#78350f" stroke-width="4"/>
<line x1="300" y1="110" x2="300" y2="290" stroke="#78350f" stroke-width="4"/>
<line x1="420" y1="110" x2="420" y2="200" stroke="#78350f" stroke-width="3"/>
<rect x="100" y="165" width="70" height="25" fill="#60a5fa"/>
<rect x="100" y="155" width="20" height="12" fill="#ffffff"/>
<text x="190" y="140" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e3a8a">bedroom</text>
<rect x="320" y="165" width="70" height="25" fill="#93c5fd"/>
<text x="360" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e3a8a">bedroom</text>
<rect x="435" y="168" width="70" height="22" rx="10" fill="#ffffff" stroke="#0ea5e9" stroke-width="3"/>
<text x="470" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#0369a1">bathroom</text>
<rect x="100" y="250" width="80" height="30" rx="6" fill="#16a34a"/>
<rect x="215" y="235" width="55" height="40" fill="#1f2937"/>
<text x="190" y="225" font-size="18" font-weight="bold" text-anchor="middle" fill="#14532d">living room</text>
<rect x="320" y="240" width="40" height="50" fill="#e5e7eb" stroke="#475569" stroke-width="2"/>
<rect x="370" y="250" width="50" height="40" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
<rect x="440" y="260" width="60" height="8" fill="#a16207"/>
<rect x="445" y="268" width="6" height="22" fill="#a16207"/>
<rect x="489" y="268" width="6" height="22" fill="#a16207"/>
<text x="410" y="225" font-size="18" font-weight="bold" text-anchor="middle" fill="#9a3412">kitchen</text>
<text x="555" y="150" font-size="16" font-weight="bold" fill="#0f172a">⬆</text>
<text x="530" y="175" font-size="14" fill="#0f172a">upstairs</text>
<text x="530" y="250" font-size="14" fill="#0f172a">down-</text>
<text x="530" y="268" font-size="14" fill="#0f172a">stairs</text>
<text x="555" y="290" font-size="16" font-weight="bold" fill="#0f172a">⬇</text>
</svg>`
    },
    {
      type: "text", title: "Furniture: i mobili 🛋️",
      html: `<ul>
<li>🛏️ <b>bed</b> – letto · <b>wardrobe</b> (uòrd-roub) – armadio · <b>desk</b> – scrivania · <b>lamp</b> – lampada</li>
<li>🛋️ <b>sofa</b> (sòu-fa) – divano · <b>armchair</b> (àrm-cèr) – poltrona · 📺 <b>TV</b> (ti-vi) – televisione · 📚 <b>bookcase</b> – libreria</li>
<li>🍽️ <b>table</b> (tèi-bol) – tavolo · 🪑 <b>chair</b> (cèr) – sedia · ❄️ <b>fridge</b> (frij) – frigorifero · 🔥 <b>cooker</b> (kù-ker) – fornello</li>
<li>🛁 <b>bath</b> – vasca · 🚿 <b>shower</b> (shàu-er) – doccia · 🚽 <b>toilet</b> – water · <b>sink</b> – lavandino</li>
</ul>
<p>Attenzione: <b>furniture</b> (mobili) è una parola "non numerabile": non si dice <s>furnitures</s>!</p>`
    },
    {
      type: "remember", title: "There is / There are = C'è / Ci sono",
      html: `<p>Per dire che cosa c'è in una stanza:</p>
<ul>
<li><b>There is</b> (o <b>There's</b>) + <b>una</b> cosa: <i>There's <b>a</b> bed in my bedroom.</i> = C'è un letto nella mia camera.</li>
<li><b>There are</b> + <b>tante</b> cose: <i>There are <b>two</b> chairs in the kitchen.</i> = Ci sono due sedie in cucina.</li>
</ul>
<p>Per chiedere: <b>Is there</b> a TV? – Yes, there is. / No, there isn't.<br>
<b>Are there</b> any books? – Yes, there are. / No, there aren't.</p>
<p>Trucco: <b>is</b> = 1 ☝️ · <b>are</b> = 2, 3, 4… ✌️</p>`
    },
    {
      type: "quiz", title: "Mini-quiz: rooms",
      questions: [
        { type: "mc", q: "Dove dormi? In the…", options: ["kitchen", "bedroom", "garden"], answer: 1, explain: "Bedroom = camera da letto 🛏️." },
        { type: "mc", q: "«Kitchen» vuol dire…", options: ["cucina", "bagno", "soggiorno"], answer: 0, explain: "Kitchen = cucina 🍳." },
        { type: "mc", q: "Completa: There … three chairs.", options: ["is", "are"], answer: 1, explain: "Tre sedie sono tante cose: there are." }
      ]
    },
    {
      type: "widget", title: "Gioco: in quale stanza va?",
      widget: "classify",
      caption: "Metti ogni mobile nella stanza dove lo trovi di solito.",
      options: {
        groups: ["🍳 kitchen", "🛏️ bedroom", "🛁 bathroom", "🛋️ living room"],
        items: [["fridge", 0], ["cooker", 0], ["bed", 1], ["wardrobe", 1], ["bath", 2], ["shower", 2], ["toilet", 2], ["sofa", 3], ["armchair", 3], ["TV", 3]]
      }
    },
    {
      type: "widget", title: "Gioco: trova i mobili nella cucina",
      widget: "labelDiagram",
      caption: "Tocca ogni pallino e scegli la parola inglese giusta.",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="340" fill="#fef9c3"/>
<rect x="0" y="270" width="600" height="70" fill="#d6d3d1"/>
<rect x="30" y="100" width="90" height="190" fill="#e5e7eb" stroke="#475569" stroke-width="3"/>
<line x1="30" y1="170" x2="120" y2="170" stroke="#475569" stroke-width="3"/>
<rect x="105" y="120" width="6" height="30" fill="#475569"/>
<rect x="140" y="200" width="110" height="90" fill="#f1f5f9" stroke="#475569" stroke-width="3"/>
<circle cx="170" cy="195" r="12" fill="#1f2937"/>
<circle cx="220" cy="195" r="12" fill="#1f2937"/>
<rect x="155" y="225" width="80" height="45" fill="#1f2937"/>
<rect x="270" y="200" width="110" height="90" fill="#a16207" stroke="#78350f" stroke-width="3"/>
<rect x="290" y="192" width="70" height="12" rx="4" fill="#94a3b8"/>
<rect x="320" y="170" width="6" height="25" fill="#64748b"/>
<rect x="400" y="200" width="170" height="12" fill="#b45309"/>
<rect x="410" y="212" width="10" height="78" fill="#b45309"/>
<rect x="550" y="212" width="10" height="78" fill="#b45309"/>
<rect x="430" y="230" width="40" height="8" fill="#dc2626"/>
<rect x="430" y="238" width="6" height="52" fill="#dc2626"/>
<rect x="430" y="180" width="6" height="52" fill="#dc2626"/>
<rect x="290" y="40" width="160" height="90" fill="#bae6fd" stroke="#78350f" stroke-width="5"/>
<line x1="370" y1="40" x2="370" y2="130" stroke="#78350f" stroke-width="4"/>
<line x1="540" y1="20" x2="540" y2="60" stroke="#111827" stroke-width="2"/>
<polygon points="520,80 560,80 550,60 530,60" fill="#f97316"/>
</svg>`,
        spots: [
          { x: 75, y: 140, label: "fridge" },
          { x: 195, y: 245, label: "cooker" },
          { x: 325, y: 240, label: "sink" },
          { x: 490, y: 206, label: "table" },
          { x: 450, y: 260, label: "chair" },
          { x: 330, y: 85, label: "window" },
          { x: 540, y: 75, label: "lamp" }
        ]
      }
    },
    {
      type: "example", title: "Esempio: la camera di Emma 🛏️",
      html: `<p><i>Hi! I'm Emma. This is my bedroom. 💜<br>
<b>There's</b> a big bed and <b>there's</b> a white wardrobe.<br>
<b>There's</b> a desk under the window.<br>
<b>There are</b> two lamps and <b>there are</b> lots of books.<br>
<b>There isn't</b> a TV in my bedroom, but <b>there's</b> a cat on my bed! 🐱</i></p>
<p>Ora prova tu: descrivi la tua camera con <b>There's…</b> e <b>There are…</b></p>`
    },
    {
      type: "example", title: "Esempio: dov'è il gatto? (in, on, under)",
      html: `<p>Per dire <b>dove</b> si trova una cosa usiamo tre paroline:</p>
<ul>
<li>📦 <b>in</b> = dentro: <i>The cat is <b>in</b> the box.</i></li>
<li>🛋️ <b>on</b> = sopra: <i>The cat is <b>on</b> the sofa.</i></li>
<li>🛏️ <b>under</b> = sotto: <i>The cat is <b>under</b> the bed.</i></li>
</ul>
<p><b>Mum:</b> Where's the cat? 🐱<br><b>Ben:</b> Is it in the kitchen?<br><b>Mum:</b> No, it isn't.<br><b>Ben:</b> Look! It's <b>under</b> the table in the living room!</p>`
    },
    {
      type: "widget", title: "Abbina: inglese e italiano",
      widget: "match",
      options: { pairs: [["wardrobe", "armadio"], ["sofa", "divano"], ["fridge", "frigorifero"], ["shower", "doccia"], ["desk", "scrivania"], ["stairs", "scale"], ["garden", "giardino"], ["armchair", "poltrona"]] }
    },
    {
      type: "curiosity", title: "Lo sapevi che… il «first floor» inglese non è il nostro primo piano?",
      html: `<p>In Gran Bretagna, come in Italia, il piano a livello della strada è il <b>ground floor</b> (piano terra) e quello sopra è il <b>first floor</b> (primo piano).</p>
<p>Negli <b>Stati Uniti</b> invece il piano terra si chiama già <b>first floor</b>! Così, in un hotel americano, la stanza al "second floor" è al nostro primo piano. 🛗</p>
<p>E nelle case inglesi c'è spesso la <b>moquette</b> (carpet) anche in camera e sulle scale, e nei bagni più vecchi due rubinetti separati: uno per l'acqua calda e uno per la fredda!</p>`
    },
    {
      type: "curiosity", title: "Lo sapevi che… Buckingham Palace ha 775 stanze?",
      html: `<p>La casa del re d'Inghilterra a Londra, <b>Buckingham Palace</b>, ha <b>775 stanze</b>: tra queste 52 camere da letto per la famiglia reale e gli ospiti, 188 camere per il personale, 92 uffici e <b>78 bagni</b>! 👑</p>
<p>Prova a dirlo in inglese: <i>There are 775 rooms in Buckingham Palace!</i></p>`
    },
    {
      type: "alternatives", title: "Altri modi per capirlo",
      intro: "<p>Se le stanze o «there is / there are» ti confondono, prova un'altra strada!</p>",
      tabs: [
        {
          label: "🔍 Le parole composte",
          html: `<p>In inglese tanti nomi sono due parole attaccate, come i mattoncini Lego 🧱. Se conosci i pezzi, capisci la parola!</p>
<ul>
<li><b>bed</b> (letto) + <b>room</b> (stanza) = <b>bedroom</b></li>
<li><b>bath</b> (vasca) + <b>room</b> = <b>bathroom</b></li>
<li><b>arm</b> (braccio) + <b>chair</b> (sedia) = <b>armchair</b>, la sedia con i braccioli!</li>
<li><b>book</b> (libro) + <b>case</b> (contenitore) = <b>bookcase</b></li>
<li><b>up</b> (su) + <b>stairs</b> (scale) = <b>upstairs</b>, al piano di sopra</li>
</ul>`
        },
        {
          label: "✋ Conta con le dita",
          html: `<p>Prima di scegliere tra <b>is</b> e <b>are</b>, conta con le dita le cose di cui parli:</p>
<p>☝️ <b>un</b> dito alzato → <b>There is</b> a lamp.<br>✌️ <b>due o più</b> dita → <b>There are</b> two lamps.</p>
<p>Vale anche in italiano: ☝️ <b>C'è</b> una lampada · ✌️ <b>Ci sono</b> due lampade. La regola è la stessa!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="200" fill="#f0fdf4"/>
<text x="150" y="80" font-size="60" text-anchor="middle">☝️</text>
<text x="150" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">There IS</text>
<text x="150" y="160" font-size="17" text-anchor="middle" fill="#0f172a">a chair 🪑</text>
<text x="450" y="80" font-size="60" text-anchor="middle">✌️</text>
<text x="450" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">There ARE</text>
<text x="450" y="160" font-size="17" text-anchor="middle" fill="#0f172a">two chairs 🪑🪑</text>
</svg>`
        },
        {
          label: "🏡 House tour (come gli youtuber)",
          html: `<p>Prendi un telefono o fai finta di avere una telecamera 🎥 e fai il <b>tour della tua casa</b> in inglese, come fanno tanti video in Inghilterra e in America:</p>
<p><i>«Hello everybody! Welcome to my house! This is the <b>kitchen</b>. There's a big <b>fridge</b>… And this is my <b>bedroom</b>! There are lots of toys…»</i></p>
<p>Parlare mentre cammini e indichi le cose aiuta moltissimo a ricordare le parole.</p>`
        },
        {
          label: "🃏 Carte dei mobili",
          html: `<p>Guarda l'emoji, di' la parola e gira la carta per controllare.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "🛏️", back: "bed" }, { front: "🛋️", back: "sofa" }, { front: "🪑", back: "chair" }, { front: "🚿", back: "shower" }, { front: "🛁", back: "bath" }, { front: "📺", back: "TV" }, { front: "🚪", back: "door" }, { front: "🪟", back: "window" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Mappa: descrivere la casa in inglese",
      nodes: [
        { id: "house", label: "My house", x: 50, y: 6, color: "#ef4444", html: "La casa: <b>house</b> (o <b>home</b>, la casa dove vivi con la famiglia).", why: "<i>House</i> è l'edificio; <i>home</i> è il posto dove ci sentiamo a casa. Per questo si dice <i>I'm going home</i> (vado a casa) e il proverbio <i>Home sweet home</i>." },
        { id: "rooms", label: "Rooms", x: 20, y: 32, color: "#f97316", html: "kitchen, living room, bedroom, bathroom…", why: "Molti nomi sono composti con <i>room</i> = stanza. Nelle case britanniche le stanze sono spesso su due piani, con le camere di sopra: una abitudine nata anche perché i terreni in città erano stretti e costosi." },
        { id: "floors", label: "Upstairs / downstairs", x: 20, y: 62, color: "#0ea5e9", html: "Di sopra / di sotto; ground floor, first floor.", why: "<i>Stairs</i> = scale: <i>up</i> + stairs = in cima alle scale, <i>down</i> + stairs = in fondo. Gli americani contano i piani partendo da 1 al livello della strada, i britannici partono da \"ground\"." },
        { id: "furniture", label: "Furniture", x: 80, y: 32, color: "#16a34a", html: "bed, sofa, table, chair, wardrobe…", why: "<i>Furniture</i> viene dal francese <i>fourniture</i> (ciò che si fornisce a una casa). È non numerabile come <i>water</i>: si dice <i>a piece of furniture</i> per un solo mobile." },
        { id: "there", label: "There is / are", x: 50, y: 50, color: "#a855f7", html: "C'è / ci sono.", why: "In inglese ogni frase ha bisogno di un soggetto: <i>there</i> fa da soggetto \"di servizio\", come <i>ci</i> in \"c'è\". Il verbo si accorda con la cosa che segue: is per una, are per più." },
        { id: "q", label: "Is there…? Are there…?", x: 35, y: 85, color: "#6366f1", html: "Domande e risposte brevi: Yes, there is / No, there isn't.", why: "In inglese per fare una domanda si scambia il posto del verbo e del soggetto (there is → is there?). In italiano basta cambiare il tono della voce." },
        { id: "prep", label: "in / on / under", x: 80, y: 62, color: "#ca8a04", html: "Dentro, sopra, sotto.", why: "Le preposizioni di luogo dicono dove si trova una cosa rispetto a un'altra. Sono tra le parole più usate in tutte le lingue, perché servono a orientarsi nello spazio." },
        { id: "plural", label: "Una o tante?", x: 70, y: 85, color: "#e11d48", html: "a bed (uno) – two beds (tanti).", why: "Il plurale con -s decide se usare is o are: per questo bisogna contare prima di parlare!" }
      ],
      edges: [
        ["house", "rooms", "ha"], ["rooms", "floors", "su due piani"], ["house", "furniture", "è arredata con"],
        ["rooms", "there", "dentro"], ["furniture", "there", "si descrive con"], ["there", "q", "domanda"], ["furniture", "prep", "dove?"], ["there", "plural", "is o are?"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz: there is / there are",
      questions: [
        { type: "mc", q: "Completa: There … a sofa in the living room.", options: ["is", "are"], answer: 0, explain: "Un solo divano: there is." },
        { type: "mc", q: "«Wardrobe» vuol dire…", options: ["armadio", "scrivania", "finestra"], answer: 0, explain: "Wardrobe = armadio." },
        { type: "tf", q: "«The cat is under the bed» vuol dire «Il gatto è sopra il letto».", answer: false, explain: "Under = sotto; on = sopra." }
      ]
    }
  ],
  glossary: [
    { t: "house / home", d: "casa (edificio) / casa (dove vivi)" },
    { t: "kitchen", d: "cucina" },
    { t: "living room · dining room", d: "soggiorno · sala da pranzo" },
    { t: "bedroom · bathroom", d: "camera da letto · bagno" },
    { t: "hall · garden · garage", d: "ingresso · giardino · garage" },
    { t: "stairs · upstairs · downstairs", d: "scale · di sopra · di sotto" },
    { t: "furniture", d: "mobili (non numerabile)" },
    { t: "bed · wardrobe · desk · lamp", d: "letto · armadio · scrivania · lampada" },
    { t: "sofa · armchair · bookcase", d: "divano · poltrona · libreria" },
    { t: "table · chair · fridge · cooker", d: "tavolo · sedia · frigorifero · fornello" },
    { t: "bath · shower · sink · toilet", d: "vasca · doccia · lavandino · water" },
    { t: "there is / there are", d: "c'è / ci sono" },
    { t: "in · on · under", d: "dentro · sopra · sotto" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dove cucini? In the…", options: ["bathroom", "kitchen", "bedroom"], answer: 1, explain: "Kitchen = cucina 🍳." },
      { type: "mc", q: "«Bathroom» è…", options: ["il bagno", "la camera", "il giardino"], answer: 0, explain: "Bath (vasca) + room (stanza) = bagno." },
      { type: "text", q: "Scrivi in inglese: divano", answer: ["sofa", "couch"], explain: "Divano = sofa (in America anche couch)." },
      { type: "text", q: "Scrivi in inglese: letto", answer: ["bed"], explain: "Letto = bed 🛏️." },
      { type: "mc", q: "Completa: There … four chairs in the kitchen.", options: ["is", "are"], answer: 1, explain: "Quattro sedie → plurale → there are." },
      { type: "mc", q: "Completa: There … a fridge in the kitchen.", options: ["is", "are"], answer: 0, explain: "Un frigorifero → there is." },
      { type: "mc", q: "Il frigorifero in inglese è…", options: ["cooker", "fridge", "freezer"], answer: 1, explain: "Fridge = frigorifero; cooker = fornello." },
      { type: "tf", q: "«Upstairs» vuol dire «al piano di sopra».", answer: true, explain: "Up = su, stairs = scale." },
      { type: "tf", q: "Si può dire «furnitures».", answer: false, explain: "Furniture non ha plurale: si dice furniture o pieces of furniture." },
      { type: "mc", q: "«The book is on the desk» vuol dire che il libro è…", options: ["sotto la scrivania", "sopra la scrivania", "dentro la scrivania"], answer: 1, explain: "On = sopra." },
      { type: "order", q: "Metti in ordine le parole: «C'è un gatto in giardino».", items: ["There", "is", "a", "cat", "in", "the", "garden"], explain: "There is a cat in the garden." },
      { type: "mc", q: "Rispondi: Is there a TV in your bedroom? (no)", options: ["No, there isn't.", "No, there aren't.", "No, it is."], answer: 0, explain: "Is there…? → Yes, there is / No, there isn't." }
    ]
  }
});
