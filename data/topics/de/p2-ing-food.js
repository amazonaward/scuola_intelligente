TOPIC('de', {
  id: "p2-ing-food",
  title: "Food",
  intro: "Yummy! 😋 Heute lernen wir auf Englisch die Namen der <b>Lebensmittel</b> (food, sprich <i>fuud</i>) und der <b>Getränke</b> (drinks). Und wir lernen zu sagen, was wir mögen: <i>„I like pizza!“</i> 🍕 und was wir nicht mögen: <i>„I don't like broccoli!“</i> 🥦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Fruit and vegetables: Obst und Gemüse 🍎🥕",
      html: "<table><tr><th>Englisch</th><th>Aussprache</th><th>Deutsch</th></tr>" +
        "<tr><td>🍎 <b>apple</b></td><td>äpl</td><td>Apfel</td></tr>" +
        "<tr><td>🍌 <b>banana</b></td><td>be-na-na</td><td>Banane</td></tr>" +
        "<tr><td>🍊 <b>orange</b></td><td>o-rindsch</td><td>Orange</td></tr>" +
        "<tr><td>🍓 <b>strawberry</b></td><td>stro-be-ri</td><td>Erdbeere</td></tr>" +
        "<tr><td>🍇 <b>grapes</b></td><td>greips</td><td>Weintrauben</td></tr>" +
        "<tr><td>🥕 <b>carrot</b></td><td>kä-rot</td><td>Karotte</td></tr>" +
        "<tr><td>🍅 <b>tomato</b></td><td>to-ma-tou</td><td>Tomate</td></tr>" +
        "<tr><td>🥔 <b>potato</b></td><td>po-tei-tou</td><td>Kartoffel</td></tr></table>" +
        "<p>💡 <b>Orange</b> bedeutet sowohl die Frucht <b>Orange</b> als auch die Farbe <b>orange</b>!</p>"
    },
    {
      type: "text",
      title: "Other food and drinks: weitere Speisen und Getränke 🍞🥛",
      html: "<ul>" +
        "<li>🍞 <b>bread</b> (bred) – Brot</li>" +
        "<li>🧀 <b>cheese</b> (tschihs) – Käse</li>" +
        "<li>🥚 <b>egg</b> (eg) – Ei</li>" +
        "<li>🍗 <b>chicken</b> (tschi-ken) – Hähnchen</li>" +
        "<li>🐟 <b>fish</b> (fisch) – Fisch</li>" +
        "<li>🍝 <b>pasta</b> – Nudeln · 🍕 <b>pizza</b> – Pizza (das sind italienische Wörter!)</li>" +
        "<li>🍰 <b>cake</b> (keik) – Kuchen · 🍦 <b>ice cream</b> (ais kriem) – Eis · 🍫 <b>chocolate</b> (tschok-lit) – Schokolade · 🍪 <b>biscuit</b> (bis-kit) – Keks</li>" +
        "</ul>" +
        "<p><b>Drinks</b> (Getränke):</p>" +
        "<ul><li>💧 <b>water</b> (wo-ter) – Wasser · 🥛 <b>milk</b> (milk) – Milch · 🧃 <b>juice</b> (dschuhs) – Saft · 🍵 <b>tea</b> (tih) – Tee</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards: food",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🍎 apple", back: "Apfel" },
          { front: "🍌 banana", back: "Banane" },
          { front: "🍊 orange", back: "Orange" },
          { front: "🍓 strawberry", back: "Erdbeere" },
          { front: "🥕 carrot", back: "Karotte" },
          { front: "🍅 tomato", back: "Tomate" },
          { front: "🍞 bread", back: "Brot" },
          { front: "🧀 cheese", back: "Käse" },
          { front: "🥚 egg", back: "Ei" },
          { front: "🍗 chicken", back: "Hähnchen" },
          { front: "🍦 ice cream", back: "Eis" },
          { front: "🥛 milk", back: "Milch" },
          { front: "💧 water", back: "Wasser" },
          { front: "🧃 juice", back: "Saft" }
        ]
      },
      caption: "Sag das Wort laut auf Englisch und dreh dann die Karte um, um zu prüfen."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: what's this?",
      questions: [
        { type: "mc", q: "🍞 Wie sagt man „Brot“?", options: ["bread", "cheese", "cake"], answer: 0, explain: "Bread = Brot." },
        { type: "mc", q: "„Milk“ bedeutet …", options: ["Wasser", "Milch", "Saft"], answer: 1, explain: "Milk = Milch 🥛." },
        { type: "text", q: "Schreib auf Englisch: Apfel 🍎", answer: ["apple", "an apple"], explain: "Apfel = apple." }
      ]
    },
    {
      type: "remember",
      title: "I like / I don't like 👍👎",
      html: "<p>👍 <b>I like</b> + Essen = Ich mag …<br><i>I like pizza.</i> = Ich mag Pizza. 🍕<br><i>I like apples.</i> = Ich mag Äpfel. 🍎</p>" +
        "<p>👎 <b>I don't like</b> + Essen = Ich mag kein / keine …<br><i>I don't like fish.</i> = Ich mag keinen Fisch. 🐟</p>" +
        "<p>❓ Um zu fragen: <b>Do you like…?</b> = Magst du …?<br><i>Do you like chocolate?</i> 🍫<br>✅ <b>Yes, I do!</b> ❌ <b>No, I don't.</b></p>" +
        "<p>💡 Im Englischen setzt man kein „der, die, das“ davor: Man sagt <b>I like pizza</b>, nicht „I like the pizza“.</p>"
    },
    {
      type: "svg",
      title: "My plate: mein Teller 🍽️",
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
      caption: "Ein gesundes Mittagessen (healthy): Gemüse, Obst, Brot oder Nudeln, ein bisschen Fisch oder Eier und viel Wasser."
    },
    {
      type: "example",
      title: "Beispiel: im Schulkiosk 🧃",
      html: "<p><b>Tom:</b> Hello! Can I have a juice, please? 🧃<br>" +
        "<b>Lady:</b> Orange juice or apple juice?<br>" +
        "<b>Tom:</b> Apple juice, please. And a biscuit! 🍪<br>" +
        "<b>Lady:</b> Here you are!<br>" +
        "<b>Tom:</b> Thank you! 😊</p>" +
        "<p>💡 <b>Can I have…, please?</b> = Kann ich … haben, bitte? &nbsp; <b>Here you are</b> = Bitte sehr / Hier, bitte.</p>"
    },
    {
      type: "example",
      title: "Beispiel: was magst du? 🤔",
      html: "<p><b>Anna:</b> Do you like carrots? 🥕<br>" +
        "<b>Leo:</b> Yes, I do! I like carrots. And you?<br>" +
        "<b>Anna:</b> No, I don't. I don't like carrots. I like strawberries! 🍓<br>" +
        "<b>Leo:</b> Me too! 🙌</p>" +
        "<p>💡 <b>Me too!</b> = Ich auch!</p>"
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
      caption: "Ordne jedes englische Wort der richtigen Gruppe zu."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🍟",
      html: "<p>Pommes frites heißen in <b>Großbritannien</b> <b>chips</b>, in den <b>Vereinigten Staaten</b> aber <b>fries</b> (oder French fries)! Und die Kartoffelchips aus der Tüte? Die Engländer nennen sie <b>crisps</b>, die Amerikaner <b>chips</b>. Was für ein Durcheinander! 😄 Ein sehr berühmtes Gericht in England ist <b>fish and chips</b>: frittierter Fisch mit Pommes.</p>"
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🍕",
      html: "<p>Viele englische Wörter für Essen kommen aus dem <b>Italienischen</b>: <b>pizza</b>, <b>pasta</b>, <b>spaghetti</b>, <b>lasagne</b>, <b>broccoli</b>, <b>cappuccino</b>, <b>espresso</b> … Das italienische Essen wird auf der ganzen Welt geliebt, und die Namen sind zusammen mit den Rezepten gereist! Und die Tomate? Sie kam nach der Reise von Christoph Kolumbus im Jahr 1492 aus <b>Amerika</b> nach Europa.</p>"
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
      caption: "Dreh den Globus und entdecke die typischen Gerichte vieler Länder. Welches würdest du gern probieren? Sag es auf Englisch: „I like sushi!“"
    },
    {
      type: "alternatives",
      title: "Andere Wege, Essen auf Englisch zu lernen",
      intro: "<p>Jeder lernt anders. Probier alle diese Spiele aus!</p>",
      tabs: [
        {
          label: "🛒 Supermarkt-Spiel",
          html: "<p>Nimm ein paar echte Lebensmittel aus der Küche (oder male sie). Ein Spieler ist der <b>Kassierer</b>, der andere der <b>Kunde</b>.</p>" +
            "<p>🧑 <i>„Can I have an apple, please?“</i><br>🧑‍🍳 <i>„Here you are! One euro, please.“</i><br>🧑 <i>„Thank you!“</i></p>" +
            "<p>Mit echten Dingen zu spielen hilft beim Merken: Das Gehirn verbindet das Wort mit der <b>Farbe</b>, dem <b>Duft</b> und dem <b>Gewicht</b> der Sache!</p>"
        },
        {
          label: "😋 Die Geschmacksgesichter",
          html: "<p>Benutze die Gesichter, um dir die Sätze zu merken:</p>",
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
          label: "🎵 Das Obstlied",
          html: "<p>Sing es auf die Melodie von „Bruder Jakob“:</p>" +
            "<p><i>🎶 Apples, bananas, apples, bananas,<br>I like them, I like them!<br>Carrots and tomatoes, carrots and tomatoes,<br>Yummy, yummy! Yummy, yummy! 🎶</i></p>" +
            "<p>Tausche dann die Wörter gegen deine Lieblingsspeisen aus. Lieder lassen die Wörter wie Kleber im Kopf haften!</p>"
        },
        {
          label: "🃏 Finde die Paare",
          html: "<p>Ordne das englische Wort dem deutschen Wort zu.</p>",
          widget: "match",
          options: { pairs: [["cheese", "Käse"], ["egg", "Ei"], ["chicken", "Hähnchen"], ["cake", "Kuchen"], ["juice", "Saft"], ["ice cream", "Eis"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Essens auf Englisch",
      nodes: [
        { id: "food", label: "Food", x: 50, y: 6, color: "#f97316", html: "<p><b>Food</b> = Essen, Nahrung.</p>", why: "<p>Es ist ein sehr altes englisches Wort, verwandt mit <b>feed</b> (füttern) und dem deutschen „Futter“. Es stammt aus den germanischen Sprachen, wie das Deutsche.</p>" },
        { id: "fruit", label: "Fruit", x: 15, y: 30, color: "#ef4444", html: "<p>apple, banana, orange, strawberry, grapes</p>", why: "<p><b>Fruit</b> kommt vom lateinischen <i>fructus</i>, wie das deutsche „Frucht“: Darum sehen sie sich ähnlich!</p>" },
        { id: "veg", label: "Vegetables", x: 38, y: 30, color: "#22c55e", html: "<p>carrot, tomato, potato, broccoli</p>", why: "<p><b>Vegetable</b> kommt vom lateinischen <i>vegetare</i>, „wachsen“: Es sind Pflanzen, die im Gemüsegarten wachsen. Kartoffeln und Tomaten kamen aus Amerika.</p>" },
        { id: "other", label: "Bread, cheese, egg…", x: 62, y: 30, color: "#eab308", html: "<p>bread, cheese, egg, chicken, fish, pasta, pizza</p>", why: "<p><b>Cheese</b> kommt vom lateinischen <i>caseus</i> (daher auch das deutsche „Käse“). <b>Pizza</b> und <b>pasta</b> sind italienische Wörter, die ins Englische gekommen sind.</p>" },
        { id: "drinks", label: "Drinks", x: 85, y: 30, color: "#0ea5e9", html: "<p>water, milk, juice, tea</p>", why: "<p>Der <b>Tee</b> (tea) ist das berühmteste Getränk Großbritanniens: Er kam aus China und wurde im 17. Jahrhundert in England Mode.</p>" },
        { id: "like", label: "I like…", x: 25, y: 65, color: "#16a34a", html: "<p>I like pizza = Ich mag Pizza.</p>", why: "<p>Im Englischen und im Deutschen baut man den Satz gleich: „<b>Ich</b> mag Pizza“. Das Subjekt ist immer <b>I</b>.</p>" },
        { id: "dont", label: "I don't like…", x: 50, y: 65, color: "#dc2626", html: "<p>I don't like fish = Ich mag keinen Fisch.</p>", why: "<p><b>Don't</b> ist die Kurzform von <b>do not</b>. Im Englischen braucht man für „nicht“ dieses Hilfswort <b>do</b>; im Deutschen sagt man einfach „nicht“ oder „kein“.</p>" },
        { id: "do", label: "Do you like…?", x: 75, y: 65, color: "#8b5cf6", html: "<p>Do you like milk? Yes, I do / No, I don't.</p>", why: "<p>Für eine Frage setzt das Englische <b>do</b> an den Anfang (im Deutschen tauschen Verb und „du“ den Platz: „Magst du …?“). In der Kurzantwort wiederholt man nur das „do“: <i>Yes, I do</i>.</p>" },
        { id: "please", label: "Can I have…, please?", x: 50, y: 92, color: "#ec4899", html: "<p>Um höflich nach etwas zu Essen zu fragen.</p>", why: "<p><b>Please</b> (bitte) und <b>thank you</b> (danke) sind die „Zauberwörter“: In Großbritannien benutzt man sie sehr oft, auch unter Freunden.</p>" }
      ],
      edges: [
        ["food", "fruit", "es gibt das"],
        ["food", "veg", "es gibt das"],
        ["food", "other", "und dann"],
        ["food", "drinks", "zusammen mit den"],
        ["fruit", "like", "du sagst"],
        ["veg", "dont", "oder"],
        ["other", "do", "du fragst"],
        ["drinks", "please", "bestell mit"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: I like!",
      questions: [
        { type: "mc", q: "Wie sagt man „Ich mag keine Milch“?", options: ["I like milk.", "I don't like milk.", "Do you like milk?"], answer: 1, explain: "I don't like milk." },
        { type: "mc", q: "„Do you like apples?“ Du magst sie. Du antwortest …", options: ["Yes, I do!", "No, I don't.", "I am apple."], answer: 0, explain: "Yes, I do = Ja!" },
        { type: "tf", q: "„Me too!“ bedeutet „Ich auch!“", answer: true, explain: "Me too = ich auch." }
      ]
    }
  ],
  glossary: [
    { t: "Food", d: "Essen, Nahrung." },
    { t: "Drinks", d: "Getränke." },
    { t: "Fruit", d: "Obst." },
    { t: "Vegetables", d: "Gemüse." },
    { t: "I like…", d: "Ich mag …" },
    { t: "I don't like…", d: "Ich mag kein / keine …" },
    { t: "Do you like…?", d: "Magst du …?" },
    { t: "Please / Thank you", d: "Bitte / danke." },
    { t: "Healthy", d: "Gesund, tut gut." },
    { t: "Yummy", d: "Lecker! (Kinderwort)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🧀 Wie sagt man „Käse“?", options: ["cheese", "chicken", "cake"], answer: 0, explain: "Cheese = Käse." },
      { type: "mc", q: "„Water“ bedeutet …", options: ["Wasser", "Saft", "Tee"], answer: 0, explain: "Water = Wasser 💧." },
      { type: "text", q: "Schreib auf Englisch: Ei 🥚", answer: ["egg", "an egg"], explain: "Ei = egg." },
      { type: "text", q: "Schreib auf Englisch: Eis 🍦", answer: ["ice cream", "icecream", "ice-cream"], explain: "Eis = ice cream." },
      { type: "mc", q: "Welches davon ist ein Obst (fruit)?", options: ["carrot", "strawberry", "potato"], answer: 1, explain: "Strawberry = Erdbeere, das ist ein Obst." },
      { type: "mc", q: "Wie sagt man „Ich mag Pizza“?", options: ["I like pizza.", "I like the pizza is.", "Pizza me like."], answer: 0, explain: "I like pizza." },
      { type: "order", q: "Bring die Frage „Magst du Schokolade?“ in die richtige Reihenfolge.", items: ["Do", "you", "like", "chocolate?"], explain: "Do you like chocolate?" },
      { type: "mc", q: "„Do you like fish?“ Du magst ihn nicht. Du antwortest …", options: ["Yes, I do.", "No, I don't.", "No, I am."], answer: 1, explain: "No, I don't." },
      { type: "tf", q: "Im Englischen kann „orange“ sowohl die Frucht als auch die Farbe bedeuten.", answer: true, explain: "Die Frucht und die Farbe haben denselben Namen." },
      { type: "mc", q: "Im Schulkiosk bittest du höflich um einen Saft:", options: ["Juice!", "Can I have a juice, please?", "I don't like juice."], answer: 1, explain: "Can I have…, please? ist die höfliche Art." },
      { type: "tf", q: "„Bread“ bedeutet „Butter“.", answer: false, explain: "Bread = Brot. Butter = butter." }
    ]
  }
});
