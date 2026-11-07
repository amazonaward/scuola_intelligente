TOPIC('en', {
  id: "p3-sto-eta-metalli",
  title: "The Metal Ages",
  intro: `At the end of the Neolithic, humans discovered that certain stones, heated in a very hot fire, melted and became <b>metal</b>. The <b>Metal Ages</b> began: first <b>copper</b>, then <b>bronze</b>, finally <b>iron</b>. With metals came weapons, trade, warriors, chiefs… and <b>writing</b>, which brought prehistory to an end.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Three ages, three metals",
      html: `<p>Historians divide the Metal Ages into three periods, according to the most widely used metal:</p>
<table>
<tr><td>🟠 <b>Copper Age</b> (Chalcolithic)</td><td>in Italy about 3600–2200 BC</td></tr>
<tr><td>🟡 <b>Bronze Age</b></td><td>in Italy about 2200–950 BC</td></tr>
<tr><td>⚫ <b>Iron Age</b></td><td>in Italy from about 950 BC</td></tr>
</table>
<p>Careful: dates change from place to place! In the Near East copper was already being worked before 5000 BC and bronze from about 3300 BC. New things started there and reached Europe slowly, through trade.</p>
<p>And stone? It did not disappear straight away: for a long time metal and stone were used together.</p>`
    },
    {
      type: "text",
      title: "Step 1: copper, the first metal",
      html: `<p><b>Copper</b> is sometimes found in nature in little lumps that are already pure (<b>native</b> copper), but more often inside rocks coloured green or blue, the <b>ores</b>.</p>
<p>At first native copper was hammered cold with a stone, as if it were a special kind of stone. Then <b>metallurgy</b> was discovered:</p>
<ol>
<li>ores were dug out of <b>mines</b>;</li>
<li>they were heated in clay <b>furnaces</b>, blowing in air with leather bellows or with pipes, up to about <b>1085 °C</b>: the copper melted and separated from the rock;</li>
<li>the liquid metal was poured into stone or clay <b>moulds</b> (<b>casting</b>);</li>
<li>once cold, it was hammered and sharpened.</li>
</ol>
<p>But copper is <b>soft</b>: blades bend and get damaged quickly. It was used mostly for axes, daggers, awls and jewellery.</p>`
    },
    {
      type: "svg",
      title: "From ore to axe: casting",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="mm" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<rect width="600" height="300" fill="#fff7ed"/>
<polygon points="40,190 70,150 110,160 120,200 80,215" fill="#16a34a" stroke="#14532d" stroke-width="3"/>
<circle cx="70" cy="180" r="6" fill="#0ea5e9"/><circle cx="95" cy="190" r="5" fill="#0ea5e9"/>
<text x="80" y="245" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">1. ore</text>
<path d="M135 185 L175 185" stroke="#334155" stroke-width="4" marker-end="url(#mm)"/>
<path d="M190 230 L200 120 Q240 100 280 120 L290 230 Z" fill="#a16207" stroke="#713f12" stroke-width="3"/>
<path d="M215 150 Q240 110 265 150 Q255 135 240 165 Q228 140 215 150 Z" fill="#f97316"/>
<path d="M225 140 Q240 115 252 140 Q245 130 240 150 Z" fill="#facc15"/>
<text x="240" y="245" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">2. furnace</text>
<text x="240" y="265" font-size="13" text-anchor="middle" fill="#9a3412">over 1000 °C</text>
<path d="M300 185 L340 185" stroke="#334155" stroke-width="4" marker-end="url(#mm)"/>
<rect x="350" y="170" width="90" height="40" rx="6" fill="#78716c"/>
<path d="M365 180 L425 180 L410 200 L380 200 Z" fill="#f59e0b"/>
<path d="M395 120 Q400 150 395 175" stroke="#f97316" stroke-width="8" fill="none"/>
<text x="395" y="245" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">3. mould</text>
<path d="M450 185 L490 185" stroke="#334155" stroke-width="4" marker-end="url(#mm)"/>
<rect x="525" y="110" width="12" height="110" rx="4" fill="#92400e"/>
<path d="M500 115 L560 115 Q575 140 560 165 L500 165 Q510 140 500 115 Z" fill="#c2410c" stroke="#7c2d12" stroke-width="3"/>
<text x="535" y="245" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">4. axe</text>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">How a metal axe was made</text>
</svg>`,
      caption: "The ore is heated in the furnace, the molten metal is poured into the mould, then it is hammered and sharpened."
    },
    {
      type: "text",
      title: "Step 2: bronze, an \"invented\" metal",
      html: `<p>Around <b>3300 BC</b>, in the Near East, smiths discovered that by mixing molten copper with another metal, <b>tin</b>, you got a new metal: <b>bronze</b>.</p>
<p>The "recipe" was about <b>9 parts copper and 1 of tin</b> (90% and 10%). Bronze is:</p>
<ul>
<li>much <b>harder</b> than copper;</li>
<li>easier to pour into moulds, because it melts at a lower temperature (about 950 °C);</li>
<li><b>shiny</b> like gold, when new.</li>
</ul>
<p>A metal made by mixing several metals is called an <b>alloy</b>. With bronze people made swords, helmets, shields, axes, sickles, mirrors, jewellery and statues.</p>
<p>The problem? Tin was <b>rare</b>: it was found in only a few places (Cornwall in England, Spain, Bohemia, Afghanistan…). To get it you had to <b>trade</b> over thousands of kilometres.</p>`
    },
    {
      type: "3d",
      title: "Inside bronze: copper and tin atoms",
      scene: "molecule",
      options: {
        atoms: [
          { x: -1, y: -1, z: -1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 0, y: -1, z: -1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 1, y: -1, z: -1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: -1, y: 0, z: -1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 0, y: 0, z: -1, r: 0.4, color: "#94a3b8", label: "Sn" },
          { x: 1, y: 0, z: -1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: -1, y: 1, z: -1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 0, y: 1, z: -1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 1, y: 1, z: -1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: -1, y: -1, z: 0, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 0, y: -1, z: 0, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 1, y: -1, z: 0, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: -1, y: 0, z: 0, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 0, y: 0, z: 0, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 1, y: 0, z: 0, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: -1, y: 1, z: 0, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 0, y: 1, z: 0, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 1, y: 1, z: 0, r: 0.4, color: "#94a3b8", label: "Sn" },
          { x: -1, y: -1, z: 1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 0, y: -1, z: 1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 1, y: -1, z: 1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: -1, y: 0, z: 1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 0, y: 0, z: 1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 1, y: 0, z: 1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: -1, y: 1, z: 1, r: 0.4, color: "#94a3b8", label: "Sn" },
          { x: 0, y: 1, z: 1, r: 0.32, color: "#c2410c", label: "Cu" },
          { x: 1, y: 1, z: 1, r: 0.32, color: "#c2410c", label: "Cu" }
        ],
        bonds: [[0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8], [0, 3], [3, 6], [1, 4], [4, 7], [2, 5], [5, 8], [9, 10], [10, 11], [12, 13], [13, 14], [15, 16], [16, 17], [9, 12], [12, 15], [10, 13], [13, 16], [11, 14], [14, 17], [18, 19], [19, 20], [21, 22], [22, 23], [24, 25], [25, 26], [18, 21], [21, 24], [19, 22], [22, 25], [20, 23], [23, 26], [0, 9], [9, 18], [4, 13], [13, 22], [8, 17], [17, 26]]
      },
      caption: "Simplified model: the tin atoms (Sn) (grey, bigger) \"jam\" the orderly rows of copper atoms (Cu, orange). The layers can no longer slide over each other so easily: that is why bronze is harder than copper. Rotate it!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: copper and bronze",
      questions: [
        { type: "mc", q: "Bronze is an alloy of…", options: ["copper and tin", "iron and coal", "gold and silver"], answer: 0, explain: "About 90% copper and 10% tin." },
        { type: "tf", q: "Copper is harder than bronze.", answer: false, explain: "It is the other way round: bronze is much harder than copper." },
        { type: "mc", q: "Why was trade needed to make bronze?", options: ["Because tin was rare and far away", "Because copper was forbidden", "Because bronze was bought ready-made"], answer: 0, explain: "Tin was found only in a few areas of Europe and Asia." }
      ]
    },
    {
      type: "text",
      title: "Step 3: iron",
      html: `<p><b>Iron</b> is the most common metal in the Earth's crust, but it is harder to work: it melts at a full <b>1538 °C</b>, a temperature that ancient furnaces could not reach.</p>
<p>Ancient smiths obtained a spongy mass of red-hot iron mixed with slag, and <b>beat</b> it for a long time with a hammer on the <b>anvil</b> to clean it and shape it: this is <b>forging</b>. By heating iron together with charcoal they got a harder iron, a kind of <b>steel</b>.</p>
<p>Ironworking spread from <b>Anatolia</b> and the Near East after <b>1200 BC</b> and reached Italy around the <b>10th century BC</b> (about 950 BC).</p>
<p>The great advantage: iron is found <b>almost everywhere</b>. Iron tools and weapons cost less than bronze and many more people could afford them, even farmers.</p>`
    },
    {
      type: "widget",
      title: "Copper, bronze or iron?",
      widget: "classify",
      caption: "Put each piece of information under the right metal.",
      options: {
        groups: ["🟠 Copper", "🟡 Bronze", "⚫ Iron"],
        items: [
          ["the first metal worked", 0], ["soft, blades bend", 0], ["Ötzi's axe", 0],
          ["alloy with tin", 1], ["tin came from far away", 1], ["the nuraghi of Sardinia", 1],
          ["melts at 1538 °C", 2], ["found almost everywhere", 2], ["worked by hammering on the anvil", 2]
        ]
      }
    },
    {
      type: "text",
      title: "Step 4: how society changes",
      html: `<p>Metals changed people's lives, not just their tools:</p>
<ul>
<li>⚒️ <b>Specialised</b> jobs appeared: miners, smiths, founders. The smith was highly respected, almost \"magical\".</li>
<li>🚢 <b>Trade</b> grew by land and by sea: copper from Cyprus and Sardinia, tin from northern Europe, amber from the Baltic Sea.</li>
<li>⚔️ With swords and better weapons <b>warriors</b> appeared, along with wars between villages; villages surrounded themselves with walls.</li>
<li>👑 Those who controlled mines and trade became rich and powerful: <b>chiefs</b> and then <b>kings</b> appeared. In their tombs we find weapons, gold jewellery and precious objects.</li>
<li>🛞 The <b>wheel</b> and the <b>cart</b>, the <b>plough</b> with a metal tip, and the <b>sail</b> spread.</li>
</ul>
<p>In the Near East, to keep count of all these goods, <b>writing</b> was born around <b>3200 BC</b>: with it <b>Prehistory</b> ends and <b>History</b> begins.</p>`
    },
    {
      type: "example",
      title: "Practical example: Ötzi, the Iceman",
      html: `<p>On <b>19 September 1991</b> two German hikers, on the Similaun glacier (between South Tyrol and Austria, at about 3200 metres), saw a body sticking out of the ice. It was <b>Ötzi</b>, a man who lived about <b>5300 years ago</b>, in the Copper Age!</p>
<p>The ice had preserved him with his clothes and equipment:</p>
<ul>
<li>a <b>copper axe</b> with a yew handle (an object of great value!);</li>
<li>a flint dagger, an unfinished bow and a quiver with arrows;</li>
<li>clothes of goat and sheep skin, a bearskin cap, shoes stuffed with hay;</li>
<li>a sort of "first-aid kit" with a medicinal fungus, and more than 60 <b>tattoos</b>.</li>
</ul>
<p>Today Ötzi is kept in the <b>South Tyrol Museum of Archaeology</b> in <b>Bolzano</b>, in a cold room at −6 °C.</p>`
    },
    {
      type: "example",
      title: "Practical example: the Metal Ages in Italy",
      html: `<p>In Italy the Metal Ages have left beautiful traces:</p>
<ul>
<li>🏰 The <b>nuraghi</b> in <b>Sardinia</b>: towers of big stones shaped like a truncated cone, built from the Bronze Age (from about 1700 BC). There are about <b>7000</b> of them! The most famous is <b>Su Nuraxi</b> at Barumini, a UNESCO heritage site.</li>
<li>🏘️ The <b>terramare</b> in <b>Emilia</b> and Lombardy: villages on wooden platforms, surrounded by a ditch and an earth bank (about 1650–1150 BC).</li>
<li>🛶 The <b>stilt houses</b> of the Alpine lakes, such as those of Lake <b>Ledro</b> (Trentino) and Viverone (Piedmont), a UNESCO heritage site since 2011.</li>
<li>🪨 The <b>rock carvings</b> of <b>Val Camonica</b> (Lombardy), with warriors, carts, ploughs and weapons: the first Italian site to enter the UNESCO list, in 1979.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Did you know… Olympic medals recall the Metal Ages?",
      html: `<p>The Greek poet <b>Hesiod</b>, about 2700 years ago, told how humanity had lived through an age of <b>gold</b>, one of <b>silver</b>, one of <b>bronze</b> and then the age of <b>iron</b>, each worse than the last. Today the podiums at competitions have gold, silver and bronze! The modern idea of dividing prehistory into the Stone, Bronze and Iron Ages came in 1836 to the Dane <b>Christian Jürgensen Thomsen</b>, who had to sort the objects of a museum.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… some ancient iron objects came from the sky?",
      html: `<p>Before they knew how to extract iron from ores, some peoples used the iron of <b>meteorites</b>, already pure. The dagger found in the tomb of <b>Tutankhamun</b> has a blade of <b>meteoritic iron</b>: analyses in 2016 found the same "recipe" of iron and nickel as in meteorites. The Egyptians called iron "metal from the sky".</p>`
    },
    {
      type: "3d",
      title: "The 3D space-time map of the Metal Ages",
      scene: "spacetime",
      caption: "The base is the map from Europe to the Near East, the height is time. See how discoveries are born in the east and reach Italy centuries later. Touch the events to see causes and effects.",
      options: {
        lat: [28, 58],
        lon: [-10, 50],
        years: [-6000, -700],
        places: [
          { lat: 33.0, lon: 44.0, label: "Mesopotamia" },
          { lat: 39.0, lon: 33.0, label: "Anatolia" },
          { lat: 42.5, lon: 12.5, label: "Italy" },
          { lat: 50.3, lon: -5.0, label: "Cornwall (tin)" },
          { lat: 35.0, lon: 33.0, label: "Cyprus (copper)" }
        ],
        events: [
          { id: "rame", lat: 44.0, lon: 21.0, year: -5000, label: "First copper smelting", html: "In the Balkans (Serbia) and in the Near East we find some of the oldest traces of <b>copper smelting</b> from ores, about 7000 years old." },
          { id: "varna", lat: 43.2, lon: 27.9, year: -4500, label: "The gold of Varna", html: "In the <b>Varna</b> necropolis (Bulgaria) one tomb contains more gold than all the others put together: it is the oldest worked gold in the world, a sign that there were already very rich chiefs.", causes: ["rame"] },
          { id: "otzi", lat: 46.78, lon: 10.84, year: -3300, label: "Ötzi on the Similaun", html: "In the Alps <b>Ötzi</b> dies, with his copper axe. He was killed by an arrow in the shoulder: perhaps a clash between rival groups.", causes: ["rame"] },
          { id: "bronzo", lat: 33.0, lon: 44.0, year: -3300, label: "Bronze is born", html: "In Mesopotamia and Anatolia people begin to melt copper with <b>tin</b> (at first also with arsenic): <b>bronze</b> is born.", causes: ["rame"] },
          { id: "scrittura", lat: 31.3, lon: 45.6, year: -3200, label: "Writing at Uruk", html: "In the city of <b>Uruk</b> people write on clay tablets to count goods and trades: <b>Prehistory ends</b>.", causes: ["bronzo"] },
          { id: "camonica", lat: 46.03, lon: 10.35, year: -2500, label: "Carvings in Val Camonica", html: "The <b>Camunni</b> carve weapons, carts, ploughs, warriors and the symbol of the \"Camunian rose\" on the rocks. The carvings continue for thousands of years.", causes: ["otzi"] },
          { id: "bronzoit", lat: 45.4, lon: 10.5, year: -2200, label: "Bronze reaches Italy", html: "The <b>Bronze Age</b> begins in Italy. On the northern lakes <b>stilt-house</b> villages are built.", causes: ["bronzo"] },
          { id: "nuraghi", lat: 39.7, lon: 8.99, year: -1700, label: "The nuraghi", html: "In Sardinia, rich in copper and lead, the first <b>nuraghi</b> are built. The Sardinians trade with Mycenaeans and Cypriots.", causes: ["bronzoit"] },
          { id: "terramare", lat: 44.6, lon: 10.9, year: -1650, label: "The terramare", html: "In the Po Valley the <b>terramare</b> appear: fortified villages of farmers and bronze smiths. Around 1150 BC they are abandoned.", causes: ["bronzoit"] },
          { id: "ferro", lat: 40.0, lon: 34.6, year: -1200, label: "Iron spreads", html: "After the end of the empire of the <b>Hittites</b> in Anatolia (about 1180 BC), who knew iron well, its working spreads all over the Mediterranean.", causes: ["bronzo"] },
          { id: "ferroit", lat: 43.4, lon: 11.2, year: -950, label: "Iron Age in Italy", html: "The Iron Age begins in Italy with the <b>Villanovan culture</b> (named after Villanova, near Bologna), from which the <b>Etruscans</b> will emerge. The island of Elba has large iron mines.", causes: ["ferro"] },
          { id: "roma", lat: 41.89, lon: 12.49, year: -753, label: "Founding of Rome", html: "According to tradition, in the Iron Age <b>Rome</b> is founded, on hills inhabited by villages of huts.", causes: ["ferroit"] }
        ]
      }
    },
    {
      type: "decision",
      title: "1700 BC: you are a village chief and you need tin",
      html: `<p>Your village has a small <b>copper</b> mine and a good smith. But to make <b>bronze</b>, which gives much better swords and sickles, you need <b>tin</b>, and tin comes from very distant lands, beyond the mountains and the sea.</p>
<p>A neighbouring village, bigger than yours, already has bronze weapons.</p>`,
      question: "What do you do?",
      options: [
        { label: "We give up: we carry on with copper and stone.", outcome: "No risk of long journeys, but your tools and weapons will stay worse than your neighbours'. Sooner or later the neighbouring village will become stronger." },
        { label: "We attack the neighbouring village to take its bronze weapons.", outcome: "They have better weapons and more warriors: you risk losing everything. And even if you win, when the swords wear out you would have no new bronze." },
        { label: "We trade: we swap our copper, skins and cheeses with the merchants who bring tin.", outcome: "You have to trust strangers, learn to count and bargain, and protect the roads. But the copper you have becomes wealth and the village joins a network of exchanges that also brings ideas and novelties." }
      ],
      answer: 2,
      explain: "In the Bronze Age real <b>trade networks</b> grew up, linking Europe and the Mediterranean: tin from Cornwall, amber from the Baltic, copper from Cyprus and Sardinia. On the sea floor in Turkey the wreck of <b>Uluburun</b> (about 1300 BC) has been found, carrying about <b>10 tonnes of copper and 1 of tin</b>: exactly the right amounts to make bronze! Trade was not always peaceful and warriors and fortifications appeared too, but exchange was the real strength of this era."
    },
    {
      type: "alternatives",
      title: "Other ways to understand the Metal Ages",
      intro: "If you can't remember the order of the metals or why they were so important, try this.",
      tabs: [
        {
          label: "🍫 Like chocolate",
          html: `<p>Have you ever melted <b>chocolate</b> and then put it into <b>little moulds</b> to make chocolates? It is just like casting metals!</p>
<ul>
<li>chocolate melts at about 35 °C, copper at <b>1085 °C</b>: that is why a very powerful furnace was needed;</li>
<li>you pour the liquid into the mould and wait for it to cool;</li>
<li>when you take it out it has the shape of the mould: an axe, a spearhead, a bracelet.</li>
</ul>
<p>And bronze? It is like adding some <b>hazelnuts</b> to the chocolate: the result is different, more "sturdy". Mixing ingredients = making an <b>alloy</b>.</p>`
        },
        {
          label: "🌍 Iron in Africa and China",
          html: `<p>The story of metals is not the same everywhere:</p>
<ul>
<li>🇨🇳 In <b>China</b> huge ritual bronze vessels were cast during the Shang dynasty (from about 1600 BC). Later the Chinese were the first to melt iron into liquid (<b>cast iron</b>), about 2500 years ago, thanks to powered bellows and very tall furnaces.</li>
<li>🌍 In much of <b>Africa</b> south of the Sahara people went almost straight from stone to <b>iron</b>, without a real Bronze Age. At Nok, in Nigeria, iron was being worked already 2500 years ago.</li>
<li>🌎 In the <b>Americas</b> people worked gold, silver and copper (the Incas bronze too), but not iron.</li>
</ul>`,
          scene: "globe",
          options: {
            points: [
              { lat: 36.1, lon: 114.3, label: "China: Shang bronzes", color: "#eab308" },
              { lat: 9.6, lon: 8.3, label: "Nok (Nigeria): iron", color: "#334155" },
              { lat: -13.5, lon: -72.0, label: "Andes: gold, silver, bronze", color: "#f59e0b" },
              { lat: 46.78, lon: 10.84, label: "Similaun: Ötzi", color: "#c2410c" },
              { lat: 50.3, lon: -5.0, label: "Cornwall: tin", color: "#94a3b8" },
              { lat: 36.13, lon: 30.43, label: "Uluburun: the bronze ship", color: "#0ea5e9" }
            ]
          }
        },
        {
          label: "🧪 The table of elements",
          html: `<p>For a chemist copper, tin and iron are <b>elements</b>, the building blocks of matter. Look in the periodic table for <b>Cu</b> (copper, from the Latin <i>cuprum</i>, \"metal of Cyprus\"), <b>Fe</b> (iron, from the Latin <i>ferrum</i>), <b>Au</b> (gold, <i>aurum</i>) and <b>Ag</b> (silver, <i>argentum</i>). Tin is <b>Sn</b>, from the Latin <i>stannum</i>.</p>`,
          widget: "periodicTable",
          options: {}
        },
        {
          label: "🔑 The order trick",
          html: `<p>To remember the order think of <b>"C-B-I"</b>: <b>C</b>opper, <b>B</b>ronze, <b>I</b>ron, like <b>"Clever Builders Invent"</b>.</p>
<p>And another trick: the order follows the <b>temperature</b> needed and the difficulty. First the easiest metal (copper, 1085 °C), then the alloy (bronze, harder but you need two metals), finally the most difficult but most widespread (iron, 1538 °C).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the Metal Ages: touch the nodes",
      nodes: [
        { id: "fuoco", label: "🔥 Powerful furnaces", x: 50, y: 5, color: "#ef4444", html: "Closed, ventilated fires that exceed 1000 °C.", why: "Neolithic potters already had kilns for firing pottery. Blowing in air with bellows or pipes, charcoal burns much hotter: perhaps it was a potter's kiln that first made the earliest copper \"sweat\" out of a green ore." },
        { id: "rame", label: "🟠 Copper", x: 20, y: 25, color: "#c2410c", html: "The first metal to be melted, soft.", why: "Copper melts at 1085 °C and also exists pure in nature. It was called <i>aes cyprium</i>, \"metal of Cyprus\", the island of the great mines: hence the chemical symbol Cu." },
        { id: "bronzo", label: "🟡 Bronze", x: 50, y: 30, color: "#ca8a04", html: "Alloy of copper (90%) and tin (10%).", why: "The bigger tin atoms \"block\" the sliding of the layers of copper atoms: the metal becomes harder. The ancients found this out by trial and error, without knowing about atoms." },
        { id: "ferro", label: "⚫ Iron", x: 80, y: 25, color: "#334155", html: "A very widespread metal, to be forged.", why: "Iron makes up about 5% of the Earth's crust. But it melts at 1538 °C: the ancients worked it without melting it, hammering the red-hot mass (the iron \"sponge\") on the anvil." },
        { id: "commercio", label: "🚢 Trade", x: 20, y: 55, color: "#0ea5e9", html: "Exchanges thousands of kilometres long.", why: "Copper and tin are rarely found in the same place. Wrecks such as Uluburun (about 1300 BC) prove it, loaded with ingots of copper and tin, glass, ivory and amber." },
        { id: "mestieri", label: "⚒️ Smiths and miners", x: 50, y: 55, color: "#78350f", html: "Specialised work.", why: "Smelting metals takes years of experience: you have to recognise the ore, control the fire and prepare the moulds. This knowledge was passed from master to apprentice." },
        { id: "guerra", label: "⚔️ Weapons and warriors", x: 80, y: 55, color: "#dc2626", html: "Swords, helmets, shields; fortified villages.", why: "The sword is an invention of the Bronze Age: with stone you can't make a long blade that doesn't snap. Metal weapons made warriors more important." },
        { id: "capi", label: "👑 Chiefs and kings", x: 35, y: 80, color: "#a855f7", html: "A few rich people control mines, trade and warriors.", why: "The \"princely\" tombs with gold and weapons show great differences in wealth. The first states will grow out of these chiefs." },
        { id: "scrittura", label: "✍️ Writing: the end of Prehistory", x: 70, y: 92, color: "#16a34a", html: "About 3200 BC in Mesopotamia.", why: "With so many goods to count and trade, memory was no longer enough: the Sumerians began to draw signs on clay tablets. From that moment we speak of <b>History</b>." }
      ],
      edges: [
        ["fuoco", "rame", "melts"],
        ["rame", "bronzo", "+ tin ="],
        ["bronzo", "ferro", "then comes"],
        ["bronzo", "commercio", "tin is needed:"],
        ["fuoco", "mestieri", "requires"],
        ["ferro", "guerra", "weapons for all"],
        ["bronzo", "guerra", "first swords"],
        ["commercio", "capi", "enriches"],
        ["guerra", "capi", "strengthens"],
        ["capi", "scrittura", "goods to count:"]
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>The Metal Ages are divided into the <b>Copper</b>, <b>Bronze</b> and <b>Iron</b> Ages.</li>
<li>Metals are obtained by heating <b>ores</b> in furnaces and pouring the molten metal into <b>moulds</b>.</li>
<li><b>Bronze</b> is an <b>alloy</b> of copper and tin: harder than copper.</li>
<li><b>Iron</b> is found everywhere and is worked by hammering it on the anvil.</li>
<li><b>Trade</b>, <b>jobs</b>, <b>wars</b> and the power of <b>chiefs</b> grow; with <b>writing</b> (3200 BC) Prehistory ends.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: iron, Ötzi and society",
      questions: [
        { type: "order", q: "Put the metals in order from the first to the last used.", items: ["Copper", "Bronze", "Iron"], explain: "First copper, then the bronze alloy, finally iron." },
        { type: "mc", q: "What metal object did Ötzi have?", options: ["An iron sword", "A copper axe", "A bronze helmet"], answer: 1, explain: "Ötzi lived in the Copper Age and had a copper axe with a yew handle." },
        { type: "mc", q: "Where are the nuraghi found?", options: ["In Sicily", "In Sardinia", "In Piedmont"], answer: 1, explain: "There are about 7000, built from the Bronze Age." }
      ]
    }
  ],
  glossary: [
    { t: "Metallurgy", d: "The art of extracting metals from ores and working them." },
    { t: "Ore", d: "Rock from which a metal can be extracted." },
    { t: "Casting", d: "Turning a metal from solid to liquid with heat; also the technique of pouring it into moulds." },
    { t: "Alloy", d: "A metal obtained by mixing two or more metals, like bronze." },
    { t: "Bronze", d: "An alloy of about 90% copper and 10% tin." },
    { t: "Forging", d: "Working red-hot metal by hammering it on the anvil." },
    { t: "Chalcolithic", d: "Another name for the Copper Age: \"age of copper and stone\"." },
    { t: "Nuraghe", d: "A tower of big stones typical of Bronze Age Sardinia." },
    { t: "Terramare", d: "Bronze Age villages of the Po Valley, surrounded by a ditch and a bank." },
    { t: "Prehistory", d: "The long period before the invention of writing." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Put the Metal Ages in order.", items: ["Copper Age", "Bronze Age", "Iron Age"], explain: "Copper → bronze → iron." },
      { type: "mc", q: "What is bronze?", options: ["A pure metal", "An alloy of copper and tin", "A stone"], answer: 1, explain: "An alloy of about 90% copper and 10% tin." },
      { type: "text", q: "What is a metal obtained by mixing two or more metals called?", answer: ["alloy", "an alloy", "the alloy"], explain: "It is called an alloy." },
      { type: "mc", q: "Why did iron come last?", options: ["Because it was extremely rare", "Because it melts at a very high temperature and is hard to work", "Because it was forbidden by kings"], answer: 1, explain: "It melts at 1538 °C: a new technique was needed, forging." },
      { type: "tf", q: "Iron is found in a great many places, while tin is rare.", answer: true, explain: "That is why with iron tools and weapons became cheaper." },
      { type: "mc", q: "Who is Ötzi?", options: ["An Egyptian king", "A Copper Age man found in the ice of the Alps", "A Roman warrior"], answer: 1, explain: "He lived about 5300 years ago and was found in 1991 on the Similaun glacier." },
      { type: "num", q: "Ötzi lived around 3300 BC. How many years before the founding of Rome (753 BC)?", answer: 2547, tol: 0, unit: "years", explain: "Both are BC years: 3300 − 753 = 2547 years." },
      { type: "mc", q: "Which of these changes did NOT happen in the Metal Ages?", options: ["Trade grew", "Warriors and chiefs appeared", "Fire was discovered"], answer: 2, explain: "Fire was already used in the Palaeolithic, hundreds of thousands of years earlier." },
      { type: "mc", q: "In which Italian region are the nuraghi?", options: ["Sardinia", "Tuscany", "Veneto"], answer: 0, explain: "In Sardinia, about 7000 of them." },
      { type: "tf", q: "With the invention of writing, Prehistory ends.", answer: true, explain: "Writing was born in Mesopotamia around 3200 BC." },
      { type: "mc", q: "Why did trade become so important in the Bronze Age?", options: ["Because copper and tin were found in different, distant places", "Because coins were used", "Because there were motor ships"], answer: 0, explain: "To make bronze you had to get tin from very far away." },
      { type: "text", q: "What is the block of iron on which the smith hammers the metal called?", answer: ["anvil", "the anvil", "an anvil"], explain: "The anvil." }
    ]
  }
});
