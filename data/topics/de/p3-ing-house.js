TOPIC('de', {
  id: "p3-ing-house",
  title: "My house",
  intro: "Welcome to my house! 🏠 Heute besuchen wir ein englisches Haus, Zimmer für Zimmer: Wir lernen die Namen der <b>Zimmer</b> (rooms) und der <b>Möbel</b> (furniture) und sagen mit <b>there is</b> und <b>there are</b>, was es gibt.",
  minutes: 30,
  sections: [
    {
      type: "text", title: "The rooms: die Zimmer 🚪",
      html: `<table><tr><th>Englisch</th><th>Aussprache</th><th>Deutsch</th></tr>
<tr><td>🍳 <b>kitchen</b></td><td>kit-schen</td><td>Küche</td></tr>
<tr><td>🛋️ <b>living room</b></td><td>li-wing rum</td><td>Wohnzimmer</td></tr>
<tr><td>🍽️ <b>dining room</b></td><td>dai-ning rum</td><td>Esszimmer</td></tr>
<tr><td>🛏️ <b>bedroom</b></td><td>bed-rum</td><td>Schlafzimmer</td></tr>
<tr><td>🛁 <b>bathroom</b></td><td>baath-rum</td><td>Badezimmer</td></tr>
<tr><td>🚪 <b>hall</b></td><td>hool</td><td>Flur</td></tr>
<tr><td>🚗 <b>garage</b></td><td>gä-raasch</td><td>Garage</td></tr>
<tr><td>🌳 <b>garden</b></td><td>gaa-den</td><td>Garten</td></tr>
<tr><td>🪜 <b>stairs</b></td><td>stärz</td><td>Treppe</td></tr></table>
<p>Hast du es bemerkt? Viele Zimmer enden auf <b>room</b> (Zimmer): <b>bed</b>room = Bett-Zimmer, <b>bath</b>room = Bade-Zimmer. Ganz einfach!</p>`
    },
    {
      type: "svg", title: "Ein englisches Haus im Querschnitt",
      caption: "Ein typisches englisches Haus mit zwei Stockwerken: oben (upstairs) die Schlafzimmer und das Bad, unten (downstairs) Küche und Wohnzimmer.",
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
      type: "text", title: "Furniture: die Möbel 🛋️",
      html: `<ul>
<li>🛏️ <b>bed</b> – Bett · <b>wardrobe</b> (word-roub) – Kleiderschrank · <b>desk</b> – Schreibtisch · <b>lamp</b> – Lampe</li>
<li>🛋️ <b>sofa</b> (sou-fa) – Sofa · <b>armchair</b> (aam-tschär) – Sessel · 📺 <b>TV</b> (ti-wi) – Fernseher · 📚 <b>bookcase</b> – Bücherregal</li>
<li>🍽️ <b>table</b> (tei-bl) – Tisch · 🪑 <b>chair</b> (tschär) – Stuhl · ❄️ <b>fridge</b> (fridsch) – Kühlschrank · 🔥 <b>cooker</b> (ku-ker) – Herd</li>
<li>🛁 <b>bath</b> – Badewanne · 🚿 <b>shower</b> (schau-er) – Dusche · 🚽 <b>toilet</b> – Toilette · <b>sink</b> – Waschbecken</li>
</ul>
<p>Aufgepasst: <b>furniture</b> (Möbel) ist ein „nicht zählbares“ Wort: Man sagt nicht <s>furnitures</s>!</p>`
    },
    {
      type: "remember", title: "There is / There are = Es gibt / Da sind",
      html: `<p>So sagst du, was in einem Zimmer ist:</p>
<ul>
<li><b>There is</b> (oder <b>There's</b>) + <b>eine</b> Sache: <i>There's <b>a</b> bed in my bedroom.</i> = In meinem Zimmer steht ein Bett.</li>
<li><b>There are</b> + <b>mehrere</b> Sachen: <i>There are <b>two</b> chairs in the kitchen.</i> = In der Küche stehen zwei Stühle.</li>
</ul>
<p>Zum Fragen: <b>Is there</b> a TV? – Yes, there is. / No, there isn't.<br>
<b>Are there</b> any books? – Yes, there are. / No, there aren't.</p>
<p>Trick: <b>is</b> = 1 ☝️ · <b>are</b> = 2, 3, 4… ✌️</p>`
    },
    {
      type: "quiz", title: "Mini-Quiz: rooms",
      questions: [
        { type: "mc", q: "Wo schläfst du? In the …", options: ["kitchen", "bedroom", "garden"], answer: 1, explain: "Bedroom = Schlafzimmer 🛏️." },
        { type: "mc", q: "„Kitchen“ bedeutet …", options: ["Küche", "Bad", "Wohnzimmer"], answer: 0, explain: "Kitchen = Küche 🍳." },
        { type: "mc", q: "Ergänze: There … three chairs.", options: ["is", "are"], answer: 1, explain: "Drei Stühle sind mehrere Sachen: there are." }
      ]
    },
    {
      type: "widget", title: "Spiel: In welches Zimmer gehört es?",
      widget: "classify",
      caption: "Ordne jedes Möbelstück dem Zimmer zu, in dem du es normalerweise findest.",
      options: {
        groups: ["🍳 kitchen", "🛏️ bedroom", "🛁 bathroom", "🛋️ living room"],
        items: [["fridge", 0], ["cooker", 0], ["bed", 1], ["wardrobe", 1], ["bath", 2], ["shower", 2], ["toilet", 2], ["sofa", 3], ["armchair", 3], ["TV", 3]]
      }
    },
    {
      type: "widget", title: "Spiel: Finde die Möbel in der Küche",
      widget: "labelDiagram",
      caption: "Tippe auf jeden Punkt und wähle das richtige englische Wort.",
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
      type: "example", title: "Beispiel: Emmas Zimmer 🛏️",
      html: `<p><i>Hi! I'm Emma. This is my bedroom. 💜<br>
<b>There's</b> a big bed and <b>there's</b> a white wardrobe.<br>
<b>There's</b> a desk under the window.<br>
<b>There are</b> two lamps and <b>there are</b> lots of books.<br>
<b>There isn't</b> a TV in my bedroom, but <b>there's</b> a cat on my bed! 🐱</i></p>
<p>Jetzt bist du dran: Beschreibe dein Zimmer mit <b>There's…</b> und <b>There are…</b></p>`
    },
    {
      type: "example", title: "Beispiel: Wo ist die Katze? (in, on, under)",
      html: `<p>Um zu sagen, <b>wo</b> etwas ist, benutzen wir drei Wörtchen:</p>
<ul>
<li>📦 <b>in</b> = in: <i>The cat is <b>in</b> the box.</i></li>
<li>🛋️ <b>on</b> = auf: <i>The cat is <b>on</b> the sofa.</i></li>
<li>🛏️ <b>under</b> = unter: <i>The cat is <b>under</b> the bed.</i></li>
</ul>
<p><b>Mum:</b> Where's the cat? 🐱<br><b>Ben:</b> Is it in the kitchen?<br><b>Mum:</b> No, it isn't.<br><b>Ben:</b> Look! It's <b>under</b> the table in the living room!</p>`
    },
    {
      type: "widget", title: "Zuordnen: Englisch und Deutsch",
      widget: "match",
      options: { pairs: [["wardrobe", "Kleiderschrank"], ["sofa", "Sofa"], ["fridge", "Kühlschrank"], ["shower", "Dusche"], ["desk", "Schreibtisch"], ["stairs", "Treppe"], ["garden", "Garten"], ["armchair", "Sessel"]] }
    },
    {
      type: "curiosity", title: "Wusstest du, dass … das englische „first floor“ nicht überall gleich ist?",
      html: `<p>In Großbritannien ist das Stockwerk auf Straßenhöhe, wie bei uns, das <b>ground floor</b> (Erdgeschoss) und das darüber der <b>first floor</b> (erster Stock).</p>
<p>In den <b>Vereinigten Staaten</b> dagegen heißt schon das Erdgeschoss <b>first floor</b>! So liegt in einem amerikanischen Hotel das Zimmer im „second floor“ bei uns im ersten Stock. 🛗</p>
<p>Und in englischen Häusern liegt oft Teppichboden (<b>carpet</b>) auch im Schlafzimmer und auf der Treppe, und in älteren Bädern gibt es manchmal zwei getrennte Wasserhähne: einen für heißes und einen für kaltes Wasser!</p>`
    },
    {
      type: "curiosity", title: "Wusstest du, dass … der Buckingham Palace 775 Zimmer hat?",
      html: `<p>Das Haus des englischen Königs in London, der <b>Buckingham Palace</b>, hat <b>775 Zimmer</b>: darunter 52 Schlafzimmer für die königliche Familie und die Gäste, 188 Zimmer für das Personal, 92 Büros und <b>78 Badezimmer</b>! 👑</p>
<p>Versuch es auf Englisch zu sagen: <i>There are 775 rooms in Buckingham Palace!</i></p>`
    },
    {
      type: "alternatives", title: "Andere Wege, es zu verstehen",
      intro: "<p>Wenn dich die Zimmer oder „there is / there are“ verwirren, probier einen anderen Weg!</p>",
      tabs: [
        {
          label: "🔍 Zusammengesetzte Wörter",
          html: `<p>Im Englischen bestehen viele Namen aus zwei zusammengefügten Wörtern, wie Lego-Steine 🧱 – genau wie im Deutschen! Wenn du die Teile kennst, verstehst du das Wort!</p>
<ul>
<li><b>bed</b> (Bett) + <b>room</b> (Zimmer) = <b>bedroom</b></li>
<li><b>bath</b> (Bad) + <b>room</b> = <b>bathroom</b></li>
<li><b>arm</b> (Arm) + <b>chair</b> (Stuhl) = <b>armchair</b>, der Stuhl mit Armlehnen!</li>
<li><b>book</b> (Buch) + <b>case</b> (Behälter) = <b>bookcase</b></li>
<li><b>up</b> (hinauf) + <b>stairs</b> (Treppe) = <b>upstairs</b>, im Stockwerk darüber</li>
</ul>`
        },
        {
          label: "✋ Mit den Fingern zählen",
          html: `<p>Bevor du dich zwischen <b>is</b> und <b>are</b> entscheidest, zähle mit den Fingern die Dinge, von denen du sprichst:</p>
<p>☝️ <b>ein</b> Finger → <b>There is</b> a lamp.<br>✌️ <b>zwei oder mehr</b> Finger → <b>There are</b> two lamps.</p>
<p>Das gilt auch im Deutschen: ☝️ <b>Da ist</b> eine Lampe · ✌️ <b>Da sind</b> zwei Lampen. Die Regel ist dieselbe!</p>`,
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
          label: "🏡 House tour (wie YouTuber)",
          html: `<p>Nimm ein Handy oder tu so, als hättest du eine Kamera 🎥, und mach auf Englisch eine <b>Tour durch dein Zuhause</b>, so wie es viele Videos in England und Amerika machen:</p>
<p><i>„Hello everybody! Welcome to my house! This is the <b>kitchen</b>. There's a big <b>fridge</b>… And this is my <b>bedroom</b>! There are lots of toys…“</i></p>
<p>Wenn du beim Gehen sprichst und auf Dinge zeigst, merkst du dir die Wörter viel besser.</p>`
        },
        {
          label: "🃏 Möbelkarten",
          html: `<p>Schau das Emoji an, sag das Wort und dreh die Karte zum Überprüfen um.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "🛏️", back: "bed" }, { front: "🛋️", back: "sofa" }, { front: "🪑", back: "chair" }, { front: "🚿", back: "shower" }, { front: "🛁", back: "bath" }, { front: "📺", back: "TV" }, { front: "🚪", back: "door" }, { front: "🪟", back: "window" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Landkarte: das Haus auf Englisch beschreiben",
      nodes: [
        { id: "house", label: "My house", x: 50, y: 6, color: "#ef4444", html: "Das Haus: <b>house</b> (oder <b>home</b>, das Zuhause, in dem du mit deiner Familie lebst).", why: "<i>House</i> ist das Gebäude; <i>home</i> ist der Ort, an dem wir uns zu Hause fühlen. Deshalb sagt man <i>I'm going home</i> (ich gehe nach Hause) und das Sprichwort <i>Home sweet home</i>." },
        { id: "rooms", label: "Rooms", x: 20, y: 32, color: "#f97316", html: "kitchen, living room, bedroom, bathroom…", why: "Viele Namen sind mit <i>room</i> = Zimmer zusammengesetzt. In britischen Häusern verteilen sich die Zimmer oft auf zwei Stockwerke, mit den Schlafzimmern oben: Das kommt auch daher, dass die Grundstücke in den Städten schmal und teuer waren." },
        { id: "floors", label: "Upstairs / downstairs", x: 20, y: 62, color: "#0ea5e9", html: "Oben / unten; ground floor, first floor.", why: "<i>Stairs</i> = Treppe: <i>up</i> + stairs = oben an der Treppe, <i>down</i> + stairs = unten. Die Amerikaner zählen die Stockwerke ab 1 auf Straßenhöhe, die Briten beginnen mit „ground“." },
        { id: "furniture", label: "Furniture", x: 80, y: 32, color: "#16a34a", html: "bed, sofa, table, chair, wardrobe…", why: "<i>Furniture</i> kommt vom französischen <i>fourniture</i> (das, was man einem Haus liefert). Es ist nicht zählbar wie <i>water</i>: Für ein einzelnes Möbelstück sagt man <i>a piece of furniture</i>." },
        { id: "there", label: "There is / are", x: 50, y: 50, color: "#a855f7", html: "Es gibt / da sind.", why: "Im Englischen braucht jeder Satz ein Subjekt: <i>there</i> dient als „Hilfs-Subjekt“, ähnlich wie das „es“ in „es gibt“. Das Verb richtet sich nach der Sache, die folgt: is für eine, are für mehrere." },
        { id: "q", label: "Is there…? Are there…?", x: 35, y: 85, color: "#6366f1", html: "Fragen und Kurzantworten: Yes, there is / No, there isn't.", why: "Im Englischen bildet man eine Frage, indem man Verb und Subjekt vertauscht (there is → is there?). Das ist wie im Deutschen („Da ist …“ → „Ist da …?“)." },
        { id: "prep", label: "in / on / under", x: 80, y: 62, color: "#ca8a04", html: "In, auf, unter.", why: "Ortsangaben sagen, wo etwas im Verhältnis zu etwas anderem ist. Sie gehören in allen Sprachen zu den am häufigsten benutzten Wörtern, weil sie helfen, sich im Raum zurechtzufinden." },
        { id: "plural", label: "Eins oder mehrere?", x: 70, y: 85, color: "#e11d48", html: "a bed (eins) – two beds (mehrere).", why: "Die Mehrzahl mit -s entscheidet, ob man is oder are benutzt: Deshalb muss man zuerst zählen, bevor man spricht!" }
      ],
      edges: [
        ["house", "rooms", "hat"], ["rooms", "floors", "auf zwei Stockwerken"], ["house", "furniture", "ist eingerichtet mit"],
        ["rooms", "there", "darin"], ["furniture", "there", "beschreibt man mit"], ["there", "q", "Frage"], ["furniture", "prep", "wo?"], ["there", "plural", "is oder are?"]
      ]
    },
    {
      type: "quiz", title: "Mini-Quiz: there is / there are",
      questions: [
        { type: "mc", q: "Ergänze: There … a sofa in the living room.", options: ["is", "are"], answer: 0, explain: "Nur ein Sofa: there is." },
        { type: "mc", q: "„Wardrobe“ bedeutet …", options: ["Kleiderschrank", "Schreibtisch", "Fenster"], answer: 0, explain: "Wardrobe = Kleiderschrank." },
        { type: "tf", q: "„The cat is under the bed“ bedeutet „Die Katze ist auf dem Bett“.", answer: false, explain: "Under = unter; on = auf." }
      ]
    }
  ],
  glossary: [
    { t: "house / home", d: "Haus (Gebäude) / Zuhause (wo du lebst)" },
    { t: "kitchen", d: "Küche" },
    { t: "living room · dining room", d: "Wohnzimmer · Esszimmer" },
    { t: "bedroom · bathroom", d: "Schlafzimmer · Badezimmer" },
    { t: "hall · garden · garage", d: "Flur · Garten · Garage" },
    { t: "stairs · upstairs · downstairs", d: "Treppe · oben · unten" },
    { t: "furniture", d: "Möbel (nicht zählbar)" },
    { t: "bed · wardrobe · desk · lamp", d: "Bett · Kleiderschrank · Schreibtisch · Lampe" },
    { t: "sofa · armchair · bookcase", d: "Sofa · Sessel · Bücherregal" },
    { t: "table · chair · fridge · cooker", d: "Tisch · Stuhl · Kühlschrank · Herd" },
    { t: "bath · shower · sink · toilet", d: "Badewanne · Dusche · Waschbecken · Toilette" },
    { t: "there is / there are", d: "es gibt / da sind" },
    { t: "in · on · under", d: "in · auf · unter" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wo kochst du? In the …", options: ["bathroom", "kitchen", "bedroom"], answer: 1, explain: "Kitchen = Küche 🍳." },
      { type: "mc", q: "„Bathroom“ ist …", options: ["das Badezimmer", "das Schlafzimmer", "der Garten"], answer: 0, explain: "Bath (Bad) + room (Zimmer) = Badezimmer." },
      { type: "text", q: "Schreibe auf Englisch: Sofa", answer: ["sofa", "couch"], explain: "Sofa = sofa (in Amerika auch couch)." },
      { type: "text", q: "Schreibe auf Englisch: Bett", answer: ["bed"], explain: "Bett = bed 🛏️." },
      { type: "mc", q: "Ergänze: There … four chairs in the kitchen.", options: ["is", "are"], answer: 1, explain: "Vier Stühle → Mehrzahl → there are." },
      { type: "mc", q: "Ergänze: There … a fridge in the kitchen.", options: ["is", "are"], answer: 0, explain: "Ein Kühlschrank → there is." },
      { type: "mc", q: "Der Kühlschrank heißt auf Englisch …", options: ["cooker", "fridge", "freezer"], answer: 1, explain: "Fridge = Kühlschrank; cooker = Herd." },
      { type: "tf", q: "„Upstairs“ bedeutet „im Stockwerk darüber“.", answer: true, explain: "Up = hinauf, stairs = Treppe." },
      { type: "tf", q: "Man kann „furnitures“ sagen.", answer: false, explain: "Furniture hat keine Mehrzahl: Man sagt furniture oder pieces of furniture." },
      { type: "mc", q: "„The book is on the desk“ bedeutet, dass das Buch …", options: ["unter dem Schreibtisch ist", "auf dem Schreibtisch ist", "im Schreibtisch ist"], answer: 1, explain: "On = auf." },
      { type: "order", q: "Bring die Wörter in die richtige Reihenfolge: „Im Garten ist eine Katze.“", items: ["There", "is", "a", "cat", "in", "the", "garden"], explain: "There is a cat in the garden." },
      { type: "mc", q: "Antworte: Is there a TV in your bedroom? (nein)", options: ["No, there isn't.", "No, there aren't.", "No, it is."], answer: 0, explain: "Is there…? → Yes, there is / No, there isn't." }
    ]
  }
});
