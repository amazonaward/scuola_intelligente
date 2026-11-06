TOPIC('it', {
  id: "p2-ing-food",
  title: "Food",
  intro: "Yummy! 😋 Oggi impariamo i nomi dei <b>cibi</b> (food, si dice <i>fuud</i>) e delle <b>bevande</b> (drinks) in inglese. E impariamo a dire che cosa ci piace: <i>«I like pizza!»</i> 🍕 e che cosa non ci piace: <i>«I don't like broccoli!»</i> 🥦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Fruit and vegetables: frutta e verdura 🍎🥕",
      html: "<table><tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>" +
        "<tr><td>🍎 <b>apple</b></td><td>èpol</td><td>mela</td></tr>" +
        "<tr><td>🍌 <b>banana</b></td><td>ba-nà-na</td><td>banana</td></tr>" +
        "<tr><td>🍊 <b>orange</b></td><td>ò-rinj</td><td>arancia</td></tr>" +
        "<tr><td>🍓 <b>strawberry</b></td><td>stròo-be-ri</td><td>fragola</td></tr>" +
        "<tr><td>🍇 <b>grapes</b></td><td>greips</td><td>uva</td></tr>" +
        "<tr><td>🥕 <b>carrot</b></td><td>kè-rot</td><td>carota</td></tr>" +
        "<tr><td>🍅 <b>tomato</b></td><td>to-mà-tou</td><td>pomodoro</td></tr>" +
        "<tr><td>🥔 <b>potato</b></td><td>po-tèi-tou</td><td>patata</td></tr></table>" +
        "<p>💡 <b>Orange</b> vuol dire sia <b>arancia</b> sia il colore <b>arancione</b>!</p>"
    },
    {
      type: "text",
      title: "Other food and drinks: altri cibi e bevande 🍞🥛",
      html: "<ul>" +
        "<li>🍞 <b>bread</b> (bred) – pane</li>" +
        "<li>🧀 <b>cheese</b> (ciiz) – formaggio</li>" +
        "<li>🥚 <b>egg</b> (eg) – uovo</li>" +
        "<li>🍗 <b>chicken</b> (cì-chen) – pollo</li>" +
        "<li>🐟 <b>fish</b> (fish) – pesce</li>" +
        "<li>🍝 <b>pasta</b> – pasta · 🍕 <b>pizza</b> – pizza (sono parole italiane!)</li>" +
        "<li>🍰 <b>cake</b> (keik) – torta · 🍦 <b>ice cream</b> (ais criim) – gelato · 🍫 <b>chocolate</b> (cìo-co-let) – cioccolato · 🍪 <b>biscuit</b> (bìs-kit) – biscotto</li>" +
        "</ul>" +
        "<p><b>Drinks</b> (bevande):</p>" +
        "<ul><li>💧 <b>water</b> (uò-ter) – acqua · 🥛 <b>milk</b> (milk) – latte · 🧃 <b>juice</b> (giuus) – succo · 🍵 <b>tea</b> (tii) – tè</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards: food",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🍎 apple", back: "mela" },
          { front: "🍌 banana", back: "banana" },
          { front: "🍊 orange", back: "arancia" },
          { front: "🍓 strawberry", back: "fragola" },
          { front: "🥕 carrot", back: "carota" },
          { front: "🍅 tomato", back: "pomodoro" },
          { front: "🍞 bread", back: "pane" },
          { front: "🧀 cheese", back: "formaggio" },
          { front: "🥚 egg", back: "uovo" },
          { front: "🍗 chicken", back: "pollo" },
          { front: "🍦 ice cream", back: "gelato" },
          { front: "🥛 milk", back: "latte" },
          { front: "💧 water", back: "acqua" },
          { front: "🧃 juice", back: "succo" }
        ]
      },
      caption: "Di' la parola in inglese ad alta voce, poi gira la carta per controllare."
    },
    {
      type: "quiz",
      title: "Mini-quiz: what's this?",
      questions: [
        { type: "mc", q: "🍞 Come si dice «pane»?", options: ["bread", "cheese", "cake"], answer: 0, explain: "Bread = pane." },
        { type: "mc", q: "«Milk» vuol dire…", options: ["acqua", "latte", "succo"], answer: 1, explain: "Milk = latte 🥛." },
        { type: "text", q: "Scrivi in inglese: mela 🍎", answer: ["apple", "an apple"], explain: "Mela = apple." }
      ]
    },
    {
      type: "remember",
      title: "I like / I don't like 👍👎",
      html: "<p>👍 <b>I like</b> + cibo = Mi piace / mi piacciono…<br><i>I like pizza.</i> = Mi piace la pizza. 🍕<br><i>I like apples.</i> = Mi piacciono le mele. 🍎</p>" +
        "<p>👎 <b>I don't like</b> + cibo = Non mi piace…<br><i>I don't like fish.</i> = Non mi piace il pesce. 🐟</p>" +
        "<p>❓ Per chiedere: <b>Do you like…?</b> = Ti piace…?<br><i>Do you like chocolate?</i> 🍫<br>✅ <b>Yes, I do!</b> ❌ <b>No, I don't.</b></p>" +
        "<p>💡 In inglese non si mette «il, la»: si dice <b>I like pizza</b>, non «I like the pizza».</p>"
    },
    {
      type: "svg",
      title: "My plate: il mio piatto 🍽️",
      svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="300" fill="#fefce8"/>' +
        '<circle cx="230" cy="150" r="125" fill="#ffffff" stroke="#94a3b8" stroke-width="6"/>' +
        '<circle cx="230" cy="150" r="100" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>' +
        '<path d="M230 150 L230 50 A100 100 0 0 1 330 150 Z" fill="#86efac"/>' +
        '<path d="M230 150 L330 150 A100 100 0 0 1 230 250 Z" fill="#fca5a5"/>' +
        '<path d="M230 150 L230 250 A100 100 0 0 1 130 150 Z" fill="#fde68a"/>' +
        '<path d="M230 150 L130 150 A100 100 0 0 1 230 50 Z" fill="#fdba74"/>' +
        '<text x="272" y="110" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">vegetables</text>' +
        '<text x="275" y="200" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">fish, egg</text>' +
        '<text x="190" y="200" font-size="16" text-anchor="middle" fill="#78350f" font-weight="bold">bread</text>' +
        '<text x="190" y="115" font-size="16" text-anchor="middle" fill="#7c2d12" font-weight="bold">fruit</text>' +
        '<rect x="430" y="80" width="70" height="140" rx="10" fill="#bfdbfe" stroke="#1e40af" stroke-width="3"/>' +
        '<rect x="434" y="120" width="62" height="96" rx="6" fill="#60a5fa"/>' +
        '<text x="465" y="250" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">water</text>' +
        '<text x="300" y="25" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">A healthy lunch!</text>' +
        '</svg>',
      caption: "Un pranzo sano (healthy): verdura, frutta, pane o pasta, un po' di pesce o uova, e tanta acqua."
    },
    {
      type: "example",
      title: "Esempio: al bar della scuola 🧃",
      html: "<p><b>Tom:</b> Hello! Can I have a juice, please? 🧃<br>" +
        "<b>Lady:</b> Orange juice or apple juice?<br>" +
        "<b>Tom:</b> Apple juice, please. And a biscuit! 🍪<br>" +
        "<b>Lady:</b> Here you are!<br>" +
        "<b>Tom:</b> Thank you! 😊</p>" +
        "<p>💡 <b>Can I have…, please?</b> = Posso avere…, per favore? &nbsp; <b>Here you are</b> = Ecco a te.</p>"
    },
    {
      type: "example",
      title: "Esempio: che cosa ti piace? 🤔",
      html: "<p><b>Anna:</b> Do you like carrots? 🥕<br>" +
        "<b>Leo:</b> Yes, I do! I like carrots. And you?<br>" +
        "<b>Anna:</b> No, I don't. I don't like carrots. I like strawberries! 🍓<br>" +
        "<b>Leo:</b> Me too! 🙌</p>" +
        "<p>💡 <b>Me too!</b> = Anche a me!</p>"
    },
    {
      type: "widget",
      title: "Fruit, vegetables or drinks?",
      widget: "classify",
      options: {
        groups: ["🍎 Fruit", "🥕 Vegetables", "🥤 Drinks"],
        items: [
          ["banana", 0],
          ["strawberry", 0],
          ["grapes", 0],
          ["carrot", 1],
          ["potato", 1],
          ["broccoli", 1],
          ["milk", 2],
          ["water", 2],
          ["juice", 2]
        ]
      },
      caption: "Metti ogni parola inglese nel gruppo giusto."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🍟",
      html: "<p>Le patatine fritte in <b>Gran Bretagna</b> si chiamano <b>chips</b>, ma negli <b>Stati Uniti</b> si chiamano <b>fries</b> (o French fries)! E le patatine in sacchetto? Gli inglesi le chiamano <b>crisps</b>, gli americani <b>chips</b>. Che confusione! 😄 Un piatto famosissimo in Inghilterra è il <b>fish and chips</b>: pesce fritto con patatine.</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🍕",
      html: "<p>Tante parole inglesi del cibo vengono dall'<b>italiano</b>: <b>pizza</b>, <b>pasta</b>, <b>spaghetti</b>, <b>lasagne</b>, <b>broccoli</b>, <b>cappuccino</b>, <b>espresso</b>… Il cibo italiano è amato in tutto il mondo, e i nomi hanno viaggiato insieme alle ricette! E il pomodoro? È arrivato in Europa dall'<b>America</b> dopo il viaggio di Cristoforo Colombo del 1492.</p>"
    },
    {
      type: "3d",
      title: "Food around the world 🌍",
      scene: "globe",
      options: {
        points: [
          { lat: 40.85, lon: 14.27, label: "🍕 pizza (Italy)", color: "#16a34a" },
          { lat: 51.5, lon: -0.1, label: "🐟🍟 fish and chips (UK)", color: "#2563eb" },
          { lat: 40.7, lon: -74, label: "🍔 hamburger (USA)", color: "#ef4444" },
          { lat: 19.4, lon: -99.1, label: "🌮 tacos (Mexico)", color: "#f59e0b" },
          { lat: 35.7, lon: 139.7, label: "🍣 sushi (Japan)", color: "#dc2626" },
          { lat: 48.9, lon: 2.35, label: "🥐 croissant (France)", color: "#1d4ed8" },
          { lat: 28.6, lon: 77.2, label: "🍛 curry (India)", color: "#ea580c" },
          { lat: 39.9, lon: 116.4, label: "🥟 dumplings (China)", color: "#be123c" }
        ]
      },
      caption: "Gira il globo e scopri i piatti tipici di tanti Paesi. Quale ti piacerebbe assaggiare? Dillo in inglese: «I like sushi!»"
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare il cibo in inglese",
      intro: "<p>Ognuno impara in modo diverso. Prova tutti questi giochi!</p>",
      tabs: [
        {
          label: "🛒 Gioco del supermercato",
          html: "<p>Prendi dalla cucina alcuni cibi veri (o disegnali). Un giocatore fa il <b>cassiere</b>, l'altro il <b>cliente</b>.</p>" +
            "<p>🧑 <i>«Can I have an apple, please?»</i><br>🧑‍🍳 <i>«Here you are! One euro, please.»</i><br>🧑 <i>«Thank you!»</i></p>" +
            "<p>Recitare con oggetti veri aiuta a ricordare: il cervello collega la parola al <b>colore</b>, al <b>profumo</b> e al <b>peso</b> della cosa!</p>"
        },
        {
          label: "😋 Le facce del gusto",
          html: "<p>Usa le facce per ricordare le frasi:</p>",
          svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="600" height="240" fill="#f0f9ff"/>' +
            '<circle cx="150" cy="100" r="70" fill="#facc15" stroke="#a16207" stroke-width="4"/>' +
            '<circle cx="125" cy="80" r="8" fill="#0f172a"/>' +
            '<circle cx="175" cy="80" r="8" fill="#0f172a"/>' +
            '<path d="M110 115 Q150 160 190 115" stroke="#7c2d12" stroke-width="6" fill="none"/>' +
            '<circle cx="450" cy="100" r="70" fill="#a3e635" stroke="#3f6212" stroke-width="4"/>' +
            '<circle cx="425" cy="80" r="8" fill="#0f172a"/>' +
            '<circle cx="475" cy="80" r="8" fill="#0f172a"/>' +
            '<path d="M410 140 Q450 105 490 140" stroke="#7c2d12" stroke-width="6" fill="none"/>' +
            '<text x="150" y="205" font-size="24" text-anchor="middle" fill="#15803d" font-weight="bold">I like it!</text>' +
            '<text x="450" y="205" font-size="24" text-anchor="middle" fill="#b91c1c" font-weight="bold">I don\'t like it!</text>' +
            '</svg>'
        },
        {
          label: "🎵 La canzone della frutta",
          html: "<p>Canta sull'aria di «Fra Martino»:</p>" +
            "<p><i>🎶 Apples, bananas, apples, bananas,<br>I like them, I like them!<br>Carrots and tomatoes, carrots and tomatoes,<br>Yummy, yummy! Yummy, yummy! 🎶</i></p>" +
            "<p>Poi cambia le parole con i tuoi cibi preferiti. Le canzoni fanno restare le parole in testa come una colla!</p>"
        },
        {
          label: "🃏 Abbina le coppie",
          html: "<p>Abbina la parola inglese alla parola italiana.</p>",
          widget: "match",
          options: { pairs: [["cheese", "formaggio"], ["egg", "uovo"], ["chicken", "pollo"], ["cake", "torta"], ["juice", "succo"], ["ice cream", "gelato"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del cibo in inglese",
      nodes: [
        { id: "food", label: "Food", x: 50, y: 6, color: "#f97316", html: "<p><b>Food</b> = cibo.</p>", why: "<p>È una parola molto antica dell'inglese, parente di <b>feed</b> (dare da mangiare). Viene dalle lingue germaniche, come il tedesco.</p>" },
        { id: "fruit", label: "Fruit", x: 15, y: 30, color: "#ef4444", html: "<p>apple, banana, orange, strawberry, grapes</p>", why: "<p><b>Fruit</b> viene dal latino <i>fructus</i>, come la parola italiana «frutto»: per questo si somigliano!</p>" },
        { id: "veg", label: "Vegetables", x: 38, y: 30, color: "#22c55e", html: "<p>carrot, tomato, potato, broccoli</p>", why: "<p><b>Vegetable</b> viene dal latino <i>vegetare</i>, «crescere»: sono piante che crescono nell'orto. Patate e pomodori arrivarono dall'America.</p>" },
        { id: "other", label: "Bread, cheese, egg…", x: 62, y: 30, color: "#eab308", html: "<p>bread, cheese, egg, chicken, fish, pasta, pizza</p>", why: "<p><b>Cheese</b> viene dal latino <i>caseus</i> (da cui anche «cacio»). <b>Pizza</b> e <b>pasta</b> sono parole italiane entrate in inglese.</p>" },
        { id: "drinks", label: "Drinks", x: 85, y: 30, color: "#0ea5e9", html: "<p>water, milk, juice, tea</p>", why: "<p>Il <b>tè</b> (tea) è la bevanda più famosa della Gran Bretagna: arrivò dalla Cina e diventò di moda in Inghilterra nel Seicento.</p>" },
        { id: "like", label: "I like…", x: 25, y: 65, color: "#16a34a", html: "<p>I like pizza = Mi piace la pizza.</p>", why: "<p>In inglese la frase è al contrario dell'italiano: in italiano «la pizza piace a me», in inglese è come dire «<b>io</b> gradisco la pizza». Il soggetto è sempre <b>I</b>.</p>" },
        { id: "dont", label: "I don't like…", x: 50, y: 65, color: "#dc2626", html: "<p>I don't like fish = Non mi piace il pesce.</p>", why: "<p><b>Don't</b> è la forma corta di <b>do not</b>. In inglese, per dire «non», serve questo aiutante <b>do</b>.</p>" },
        { id: "do", label: "Do you like…?", x: 75, y: 65, color: "#8b5cf6", html: "<p>Do you like milk? Yes, I do / No, I don't.</p>", why: "<p>Per fare una domanda l'inglese mette <b>do</b> all'inizio. Nella risposta breve si ripete solo il «do»: <i>Yes, I do</i>.</p>" },
        { id: "please", label: "Can I have…, please?", x: 50, y: 92, color: "#ec4899", html: "<p>Per chiedere gentilmente qualcosa da mangiare.</p>", why: "<p><b>Please</b> (per favore) e <b>thank you</b> (grazie) sono le «parole magiche»: in Gran Bretagna si usano tantissimo, anche con gli amici.</p>" }
      ],
      edges: [
        ["food", "fruit", "c'è la"],
        ["food", "veg", "ci sono le"],
        ["food", "other", "e poi"],
        ["food", "drinks", "insieme ai"],
        ["fruit", "like", "dici"],
        ["veg", "dont", "o"],
        ["other", "do", "chiedi"],
        ["drinks", "please", "ordina con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: I like!",
      questions: [
        { type: "mc", q: "Come si dice «Non mi piace il latte»?", options: ["I like milk.", "I don't like milk.", "Do you like milk?"], answer: 1, explain: "I don't like milk." },
        { type: "mc", q: "«Do you like apples?» Ti piacciono. Rispondi…", options: ["Yes, I do!", "No, I don't.", "I am apple."], answer: 0, explain: "Yes, I do = Sì!" },
        { type: "tf", q: "«Me too!» vuol dire «Anche a me!»", answer: true, explain: "Me too = anche io / anche a me." }
      ]
    }
  ],
  glossary: [
    { t: "Food", d: "Cibo." },
    { t: "Drinks", d: "Bevande." },
    { t: "Fruit", d: "Frutta." },
    { t: "Vegetables", d: "Verdura, ortaggi." },
    { t: "I like…", d: "Mi piace / mi piacciono…" },
    { t: "I don't like…", d: "Non mi piace / non mi piacciono…" },
    { t: "Do you like…?", d: "Ti piace…?" },
    { t: "Please / Thank you", d: "Per favore / grazie." },
    { t: "Healthy", d: "Sano, che fa bene." },
    { t: "Yummy", d: "Buonissimo! (parola dei bambini)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🧀 Come si dice «formaggio»?", options: ["cheese", "chicken", "cake"], answer: 0, explain: "Cheese = formaggio." },
      { type: "mc", q: "«Water» vuol dire…", options: ["acqua", "succo", "tè"], answer: 0, explain: "Water = acqua 💧." },
      { type: "text", q: "Scrivi in inglese: uovo 🥚", answer: ["egg", "an egg"], explain: "Uovo = egg." },
      { type: "text", q: "Scrivi in inglese: gelato 🍦", answer: ["ice cream", "icecream", "ice-cream"], explain: "Gelato = ice cream." },
      { type: "mc", q: "Quale di questi è un frutto (fruit)?", options: ["carrot", "strawberry", "potato"], answer: 1, explain: "Strawberry = fragola, è un frutto." },
      { type: "mc", q: "Come si dice «Mi piace la pizza»?", options: ["I like pizza.", "I like the pizza is.", "Pizza me like."], answer: 0, explain: "I like pizza." },
      { type: "order", q: "Metti in ordine la domanda «Ti piace il cioccolato?»", items: ["Do", "you", "like", "chocolate?"], explain: "Do you like chocolate?" },
      { type: "mc", q: "«Do you like fish?» Non ti piace. Rispondi…", options: ["Yes, I do.", "No, I don't.", "No, I am."], answer: 1, explain: "No, I don't." },
      { type: "tf", q: "In inglese «orange» può voler dire sia arancia sia arancione.", answer: true, explain: "Il frutto e il colore hanno lo stesso nome." },
      { type: "mc", q: "Al bar chiedi un succo con gentilezza:", options: ["Juice!", "Can I have a juice, please?", "I don't like juice."], answer: 1, explain: "Can I have…, please? è il modo gentile." },
      { type: "tf", q: "«Bread» vuol dire «burro».", answer: false, explain: "Bread = pane. Burro = butter." }
    ]
  }
});
