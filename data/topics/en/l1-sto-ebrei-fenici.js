TOPIC('en', {
  id: "l1-sto-ebrei-fenici",
  title: "Hebrews, Phoenicians and Mediterranean peoples",
  intro: "Around <b>1200 BC</b> the Near East went through a great crisis: empires collapsed, cities were destroyed, and \"Sea Peoples\" migrated across the region. From the ruins emerged smaller peoples who were destined to leave an enormous legacy. The <b>Hebrews</b> developed the idea of <b>one God</b> and a heritage of laws and stories that underlies Judaism, Christianity and Islam. The <b>Phoenicians</b>, skilled sailors and traders, founded colonies all over the Mediterranean and spread the <b>alphabet</b> from which the ones we use today descend. In this lesson we meet them, together with their neighbours.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. The Near East after 1200 BC",
      html: `<p>Around <b>1200 BC</b> many Bronze Age civilisations collapsed almost at the same time: the Hittites disappeared, the Mycenaean cities and Ugarit were destroyed, Egypt was weakened. The Egyptians speak of the <b>Sea Peoples</b>, mysterious groups who attacked from the sea. The causes are still debated: drought, earthquakes, migrations, the breakdown of the bronze trade, internal revolts.</p>
<p>In the power vacuum, <b>small kingdoms</b> arose or grew stronger in the strip of land between the Mediterranean and the Syrian-Arabian desert, the region of <b>Canaan</b> (today Lebanon, Israel, Palestine):</p>
<ul>
<li>the <b>Phoenicians</b> on the coast (Lebanon);</li>
<li>the <b>Hebrews</b> (or Israelites) in the inland hills;</li>
<li>the <b>Philistines</b> on the southern coast (hence the name "Palestine");</li>
<li>the <b>Arameans</b> in Syria, whose language would become the common language (lingua franca) of the Near East.</li>
</ul>
<p>Further west, around the 7th century BC, another fundamental invention appeared in the kingdom of <b>Lydia</b> (Anatolia): struck <b>coins</b> (King Croesus).</p>`
    },
    {
      type: "3d",
      title: "3D map: Phoenicians and Hebrews in the Mediterranean",
      scene: "spacetime",
      caption: "The base is the Mediterranean, the height is time (1200-500 BC). Tap the events: the arrows link causes and effects.",
      options: {
        lat: [29, 42],
        lon: [-8, 40],
        years: [-1250, -500],
        places: [
          { lat: 33.27, lon: 35.2, label: "Tyre" },
          { lat: 31.78, lon: 35.22, label: "Jerusalem" },
          { lat: 36.85, lon: 10.32, label: "Carthage" },
          { lat: 36.53, lon: -6.29, label: "Cádiz" }
        ],
        events: [
          { id: "mare", lat: 33.5, lon: 36.0, year: -1200, label: "Crisis and Sea Peoples", html: "Around 1200 BC many Bronze Age kingdoms collapse: room for new peoples and city-states.", causes: [] },
          { id: "fenici", lat: 34.1, lon: 35.65, year: -1100, label: "The Phoenician cities", html: "Byblos, Sidon and Tyre become trading powers. They develop an <b>alphabet of 22 signs</b> (consonants only).", causes: ["mare"] },
          { id: "davide", lat: 31.78, lon: 35.22, year: -1000, label: "David and Jerusalem", html: "King David unites the tribes of Israel and makes Jerusalem the capital (about 1000 BC). His son Solomon builds the Temple (about 960 BC).", causes: ["mare"] },
          { id: "cadice", lat: 36.53, lon: -6.29, year: -1000, label: "Gadir (Cádiz)", html: "One of the oldest Phoenician colonies in the West (traditionally about 1100 BC): they were looking for the silver and tin of Spain.", causes: ["fenici"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -814, label: "Founding of Carthage", html: "According to tradition, in 814 BC Princess Elissa-Dido of Tyre founds Carthage (\"new city\") in Africa, which will become the greatest power in the western Mediterranean.", causes: ["fenici"] },
          { id: "scisma", lat: 32.2, lon: 35.2, year: -930, label: "The kingdom splits", html: "When Solomon dies (about 930 BC) the kingdom breaks in two: Israel in the north (capital Samaria) and Judah in the south (Jerusalem).", causes: ["davide"] },
          { id: "assiri", lat: 32.2, lon: 35.2, year: -722, label: "The Assyrians destroy Israel", html: "In 722 BC the Assyrians conquer Samaria and deport much of the population: the \"ten lost tribes\".", causes: ["scisma"] },
          { id: "babilonia", lat: 31.78, lon: 35.22, year: -586, label: "Destruction of the Temple", html: "In 586 BC Nebuchadnezzar II conquers Jerusalem, destroys the Temple and deports the elite to Babylon: this is the <b>Babylonian exile</b>. The Hebrews write down many of their sacred texts.", causes: ["assiri"] },
          { id: "ciro", lat: 31.78, lon: 35.22, year: -539, label: "Return from Babylon", html: "In 539 BC Cyrus the Great, king of the Persians, conquers Babylon and allows the exiles to return. The Second Temple will be inaugurated around 516 BC.", causes: ["babilonia"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. The Hebrews: a history, a faith",
      html: `<p>Our main sources are the sacred texts collected in the <b>Hebrew Bible</b> (<i>Tanakh</i>), which historians read as a religious and historical source to be cross-checked with archaeology.</p>
<ul>
<li><b>The patriarchs</b>: according to tradition, <b>Abraham</b> leaves Ur in Mesopotamia for Canaan with God's promise: a land and descendants. Then come Isaac and Jacob (Israel).</li>
<li><b>The Exodus</b>: according to the biblical account, the Hebrews live as slaves in Egypt and are led by <b>Moses</b> towards Canaan (traditionally in the 13th century BC). On <b>Mount Sinai</b> they receive the Law (the <b>Ten Commandments</b>) and make a <b>Covenant</b> with God. The Jewish Passover (<i>Pesach</i>) remembers this liberation.</li>
<li><b>Judges and kings</b>: after settling in Canaan the twelve tribes are led by charismatic leaders (the judges). To defend themselves against the Philistines they choose a king: <b>Saul</b>, then <b>David</b> (about 1000 BC), who conquers <b>Jerusalem</b>, and <b>Solomon</b>, the builder of the Temple.</li>
<li><b>Division</b> (about 930 BC): <b>Israel</b> in the north and <b>Judah</b> in the south. The Assyrians destroy Israel (722 BC), Babylon destroys Judah (586 BC).</li>
<li><b>Return</b> thanks to Persian tolerance (539 BC): the Temple is rebuilt and the <b>Torah</b> is defined as the law. The people of Judah take the name <b>Judeans</b> (hence "Jews" in the modern sense).</li>
</ul>
<p>Note: for historians many details (the Exodus, the patriarchs, the size of David's kingdom) are still debated, because there is no direct archaeological evidence.</p>`
    },
    {
      type: "text",
      title: "3. The great innovation: one God",
      html: `<p>Almost all ancient peoples were <b>polytheists</b>: many gods, often linked to a city, a natural phenomenon or a trade. The Hebrews gradually developed <b>monotheism</b>: a single God, <b>Yahweh</b>, creator of everything, invisible (he must not be represented in images), just, and bound to his people by a <b>covenant</b>.</p>
<ul>
<li>God is not nature: he is <b>above</b> nature and history. History has a meaning and a direction (liberation, justice, waiting for the Messiah).</li>
<li>The <b>Law</b> covers the whole of life: worship, justice, family, food, relations with foreigners and with the poor.</li>
<li>The <b>prophets</b> (Isaiah, Jeremiah, Ezekiel...) do not foretell the future like fortune-tellers, but call the people and the kings back to social justice and faithfulness.</li>
<li>The sacred books (<b>Torah</b>, Prophets, Writings) were written down mainly after the exile and became the shared identity of the people even without a state and without a Temple.</li>
</ul>
<p><b>Judaism</b> would give rise to <b>Christianity</b> (1st century AD) and <b>Islam</b> (7th century AD): the three great monotheistic religions.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Hebrews",
      questions: [
        { type: "mc", q: "According to tradition, who led the Hebrews out of Egypt?", options: ["Moses", "David", "Abraham"], answer: 0, explain: "Moses, who received the Law on Mount Sinai." },
        { type: "mc", q: "Which king made Jerusalem the capital?", options: ["Saul", "David", "Nebuchadnezzar"], answer: 1, explain: "David, around 1000 BC." },
        { type: "tf", q: "Hebrew monotheism involved a single God who must not be represented in images.", answer: true, explain: "God is unique and invisible." },
        { type: "mc", q: "What was the Babylonian exile?", options: ["The deportation of Hebrews to Babylon after 586 BC", "The flight from Egypt", "A journey by Abraham"], answer: 0, explain: "Nebuchadnezzar II destroyed the Temple and deported the elite." }
      ]
    },
    {
      type: "text",
      title: "4. The Phoenicians: merchants of the sea",
      html: `<p>The Phoenicians lived on a narrow strip of coast (today Lebanon), with mountains covered in <b>cedars</b> behind them and little room for fields. The sea was their path to growth.</p>
<ul>
<li>Independent <b>city-states</b> (Byblos, Sidon, Tyre, Arwad), each with its own king and fleet; they never formed a single kingdom. Tyre was the richest, built on an island close to the coast.</li>
<li><b>Ships and navigation</b>: they built cargo ships and warships (from cedar wood) and found their way by the stars, especially the Little Bear (the "Phoenician star").</li>
<li><b>Goods</b>: cedar wood, glass, <b>purple dye</b> (a colouring obtained from the murex sea snail, so precious that "purple" became a symbol of kings and emperors; the name "Phoenicians" may come from the Greek <i>phoinix</i>, "purple-red"), fabrics, ivory, metals.</li>
<li><b>Trade</b>: they exchanged goods between East and West: from Spain they took silver and tin, from Egypt linen and gold.</li>
</ul>
<p>The Phoenicians were not conquerors: they were looking for <b>markets and harbours</b>, not territory. Their dominance was a dominance of trade.</p>`
    },
    {
      type: "text",
      title: "5. The colonies and Carthage",
      html: `<p>Between the 10th and 7th centuries BC the Phoenicians founded <b>trading posts</b> (emporia) and colonies along the Mediterranean routes: in Cyprus, in Malta, in <b>Sicily</b> (Motya, Palermo/<i>Zyz</i>, Solunto), in <b>Sardinia</b> (Nora, Tharros, Sulky), in North Africa (<b>Utica</b>, <b>Carthage</b>), in Spain (<b>Gadir</b>, today Cádiz).</p>
<p>The most important was <b>Carthage</b> (in present-day Tunisia), founded, according to tradition, in <b>814 BC</b> by the Tyrian princess <b>Elissa (Dido)</b>. When Tyre was weakened by the Assyrians and then by Babylon, Carthage became an independent power: it had a huge fleet, an aristocracy of merchants and a trading empire in the western Mediterranean. It became the great rival of <b>Rome</b>, which destroyed it in 146 BC (we will see this with the Punic Wars; "Punic" comes from <i>poenus</i>, "Phoenician").</p>`
    },
    {
      type: "svg",
      title: "The discovery of the alphabet",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e3a8a">One sign for each sound: how the letter "A" evolved</text>
<g stroke="#1e3a8a" stroke-width="4" fill="none">
<path d="M50 90 L80 140 L110 90 M80 140 L80 110" />
<path d="M200 150 L230 90 L260 150 M215 125 L245 125"/>
<path d="M350 150 L380 90 L410 150 M360 128 L400 128"/>
<path d="M490 150 L520 90 L550 150 M502 130 L538 130"/>
</g>
<g font-size="15" fill="#0f172a" text-anchor="middle">
<text x="80" y="185">hieroglyph:</text><text x="80" y="205">ox head</text>
<text x="230" y="185">Phoenician</text><text x="230" y="205">aleph ("ox")</text>
<text x="380" y="185">Greek</text><text x="380" y="205">alpha</text>
<text x="520" y="185">Latin</text><text x="520" y="205">A</text>
</g>
<g stroke="#b45309" stroke-width="3" fill="#b45309"><line x1="115" y1="115" x2="170" y2="115"/><polygon points="170,108 186,115 170,122"/>
<line x1="270" y1="115" x2="320" y2="115"/><polygon points="320,108 336,115 320,122"/>
<line x1="425" y1="115" x2="470" y2="115"/><polygon points="470,108 486,115 470,122"/></g>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#7c2d12">Simplified diagram: the upside-down shape of the letter recalls an ox's head.</text>
</svg>`,
      caption: "The Phoenician alphabet (22 signs, consonants only) was taken up by the Greeks, who added vowels; the Latin and Cyrillic alphabets descend from the Greek one."
    },
    {
      type: "text",
      title: "6. The alphabet: the revolution of 22 signs",
      html: `<p>Earlier writing systems (cuneiform, hieroglyphs) had hundreds of signs and took years to learn: they were for scribes. The <b>Phoenician alphabet</b>, developed around <b>1200-1000 BC</b> from earlier Semitic scripts, has only <b>22 signs</b>, one for each <b>consonant</b>. Learning to read and write becomes much quicker, and useful for merchants.</p>
<ul>
<li>The names of the first letters mean objects: <i>aleph</i> = ox, <i>bet</i> = house, <i>gimel</i> = camel. Hence <b>alpha, beta, gamma</b> and the word "alphabet".</li>
<li>The <b>Greeks</b> (about 9th-8th century BC) adopted the alphabet and used some signs for <b>vowels</b>, making it suitable for Indo-European languages.</li>
<li>From Greek came the <b>Etruscan</b> alphabet, then the <b>Latin</b> one (ours) and the <b>Cyrillic</b> one (Russian, Bulgarian...).</li>
<li><b>Hebrew</b> and <b>Arabic</b> scripts also derive from Semitic scripts close to Phoenician, and are written from right to left.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Tyre, about 800 BC: explore the sea or stay at home?",
      html: `<p>You are a wealthy merchant of Tyre. The city is overcrowded, there is little land, and the Assyrians demand ever heavier tribute. Some captains say that across the sea, in the far West, there are silver and tin mines and coasts free of empires. But the voyage takes weeks and the risk is high.</p>`,
      question: "What do you decide?",
      options: [
        { label: "Stay in Tyre and pay tribute to the Assyrians: it is not worth the risk.", outcome: "The risk is avoided, but trade shrinks and taxes grow. Over time Tyre would lose wealth and importance." },
        { label: "Found trading posts and colonies in the western Mediterranean, far from the empires.", outcome: "This was the Phoenicians' choice: ports every few days' sailing, alliances with local peoples and safe trade routes. Some colonies, such as Carthage, would become as rich as the mother city." },
        { label: "Raise an army and conquer neighbouring lands to enlarge the kingdom.", outcome: "A trading city-state does not have the resources to sustain a war against an empire like Assyria: it would be far too risky a gamble." }
      ],
      answer: 1,
      explain: "The Phoenicians chose to <b>expand by sea</b>: the colonies secured raw materials and markets. When Tyre fell under the eastern empires, the colonies, and Carthage in particular, continued to prosper."
    },
    {
      type: "example",
      title: "Worked example: where does the word \"Bible\" come from?",
      html: `<p>The Phoenician city of <b>Byblos</b> exported Egyptian papyrus. So the Greeks called papyrus <i>byblos</i>, and a "book" made of papyrus <i>biblíon</i>. Hence:</p>
<ul>
<li><b>Bible</b> (literally: "the books"), <b>bibliography</b>, <b>bibliophile</b> (and in Italian <i>biblioteca</i>, "library").</li>
</ul>
<p>Many words of Mediterranean trade also come from Semitic languages: "magazine" (originally a storehouse) and "tariff" come from Arabic, as do "cotton" and "sugar". Words travel like goods: following a word is a way of doing history.</p>`
    },
    {
      type: "example",
      title: "Worked example: reading an ancient text critically",
      html: `<p>The Bible is a historical source on the kingdoms of Israel and Judah, but it is not a neutral account: it is a religious text written and reworked over centuries. How does a historian use it?</p>
<ol>
<li><b>Who is writing, and when?</b> The texts were written and revised over a long time, mostly after the events.</li>
<li><b>For what purpose?</b> To pass on a religious message: justice and faithfulness to the Covenant.</li>
<li><b>What do other sources say?</b> Assyrian inscriptions (such as those of Sennacherib besieging Jerusalem), Babylonian texts and archaeological excavations confirm some events and correct others.</li>
</ol>
<p>For example, Assyrian texts confirm the destruction of Samaria in 722 BC and the deportation of its inhabitants. Cross-checking sources is the central method of history.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Purple dye cost more than gold",
      html: `<p>To obtain a single gram of purple dye, thousands of murex sea snails were needed: a gland was removed from each one and left to steep. The result was a reddish-violet colour that did not fade. In ancient times a purple cloth could cost more than its weight in silver. That is why it was reserved for kings, priests and, in Rome, senators and emperors: to be "born in the purple" meant to be born into the imperial family.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The sailors who went around Africa",
      html: `<p>The Greek historian Herodotus tells that around <b>600 BC</b> the pharaoh Necho II sent an expedition of Phoenician sailors to sail around Africa. They set off from the Red Sea, came back through the Pillars of Hercules three years later, and reported that during the voyage they had "the sun on their right": a detail Herodotus did not believe, but which proves they had crossed the equator heading south. If the voyage really took place, it came more than 2000 years before that of the Portuguese Vasco da Gama.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the Hebrews and the Phoenicians",
      intro: "Two small peoples, two enormous legacies. Here are some keys to remembering them.",
      tabs: [
        {
          label: "⚓ Tool vs idea",
          html: `<p>A simple way to put it: the Phoenicians left <b>a tool</b>, the Hebrews <b>an idea</b>.</p>
<ul>
<li><b>Phoenicians → the alphabet</b>: a quick way to write any language; it changed communication.</li>
<li><b>Hebrews → ethical monotheism</b>: one God, a Law that also concerns justice and poverty, a sacred text that holds a people together even in exile.</li>
</ul>
<p>Two peoples without great armies or vast empires left a more lasting mark than many empires.</p>`
        },
        {
          label: "🗺️ Spin the globe",
          html: `<p>Rotate the globe: the Phoenician routes from the coast of Lebanon to Cádiz and Carthage.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 33.27, lon: 35.2, label: "Tyre", color: "#7c3aed" },
              { lat: 35.1, lon: 33.4, label: "Cyprus", color: "#f97316" },
              { lat: 35.9, lon: 14.4, label: "Malta", color: "#f97316" },
              { lat: 37.9, lon: 12.5, label: "Motya", color: "#f97316" },
              { lat: 36.85, lon: 10.32, label: "Carthage", color: "#ef4444" },
              { lat: 36.53, lon: -6.29, label: "Gadir (Cádiz)", color: "#f97316" },
              { lat: 31.78, lon: 35.22, label: "Jerusalem", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 4, 5], color: "#7c3aed" }]
          }
        },
        {
          label: "🔤 Match letter and meaning",
          html: `<p>Some Phoenician letters had names that meant an object. Match them to their meanings.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Aleph", "Ox"],
              ["Bet", "House"],
              ["Gimel", "Camel"],
              ["Mem", "Water"],
              ["Ayin", "Eye"]
            ]
          }
        },
        {
          label: "📅 Timeline",
          html: `<p>Scroll through the main dates of the Hebrews and the Phoenicians.</p>`,
          widget: "timeline",
          options: {
            unit: "years",
            events: [
              { year: -1200, label: "Crisis and Sea Peoples", icon: "🌊" },
              { year: -1000, label: "David in Jerusalem", icon: "👑" },
              { year: -960, label: "Solomon's Temple", icon: "🏛️" },
              { year: -930, label: "Division of the kingdom", icon: "✂️" },
              { year: -814, label: "Carthage", icon: "⚓" },
              { year: -722, label: "End of Israel", icon: "⚔️" },
              { year: -586, label: "Babylonian exile", icon: "⛓️" },
              { year: -539, label: "Return under Cyrus", icon: "🏠" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: small peoples, great legacies",
      nodes: [
        { id: "crisi", label: "Crisis of 1200 BC", x: 50, y: 6, color: "#64748b", html: "Collapse of Bronze Age kingdoms, Sea Peoples.", why: "The collapse of the great empires left empty spaces: coastal cities and hill peoples could grow without being smothered by a central power." },
        { id: "fenici", label: "Phoenicians", x: 20, y: 32, color: "#7c3aed", html: "Trading city-states on the Lebanese coast.", why: "Little farmland and plenty of timber: their resource was the sea. They chose trade, not conquest." },
        { id: "ebrei", label: "Hebrews", x: 80, y: 32, color: "#2563eb", html: "Tribes, then the kingdoms of Israel and Judah; faith in one God.", why: "A small people squeezed between great empires (Egypt, Assyria, Babylon): in exile, religion and the written Law became its real bond." },
        { id: "colonie", label: "Colonies and Carthage", x: 15, y: 60, color: "#f97316", html: "Phoenician trading posts from Lebanon to Spain; Carthage founded in 814 BC.", why: "They sought metals and safe markets far from the eastern empires; the colonies formed an independent network that outlived Tyre." },
        { id: "alfabeto", label: "Alphabet", x: 50, y: 60, color: "#16a34a", html: "22 consonant signs.", why: "Merchants needed a simple, quick script for contracts and letters: the alphabet made writing accessible to many, not just to scribes." },
        { id: "mono", label: "Monotheism", x: 85, y: 60, color: "#0ea5e9", html: "One God, one Law, one Covenant.", why: "After the destruction of the Temple, the idea of a God not tied to one place made it possible to keep the people's identity in exile, and opened the way to Christianity and Islam." },
        { id: "eredita", label: "Legacy in the Mediterranean", x: 50, y: 92, color: "#7c2d12", html: "Greek and Latin alphabets; the Bible; trade.", why: "The Greeks and Romans inherited both the alphabet and the sea routes; Christianity and Islam grew out of Judaism." }
      ],
      edges: [
        ["crisi", "fenici", "makes room for the"],
        ["crisi", "ebrei", "makes room for the"],
        ["fenici", "colonie", "found"],
        ["fenici", "alfabeto", "spread the"],
        ["ebrei", "mono", "develop"],
        ["colonie", "eredita", "leave networks and cities"],
        ["alfabeto", "eredita", "passes to the Greeks and Romans"],
        ["mono", "eredita", "gives rise to religions"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Phoenicians",
      questions: [
        { type: "mc", q: "How many letters (consonants) did the Phoenician alphabet have?", options: ["12", "22", "50"], answer: 1, explain: "Twenty-two signs, consonants only." },
        { type: "tf", q: "The Phoenicians formed a great united empire under a single king.", answer: false, explain: "They were independent city-states." },
        { type: "text", q: "What is the name of the Phoenician colony in North Africa that became a great power?", answer: ["carthage"], explain: "Carthage, founded (according to tradition) in 814 BC." },
        { type: "mc", q: "Who added vowels to the Phoenician alphabet?", options: ["The Greeks", "The Romans", "The Egyptians"], answer: 0, explain: "The Greeks adapted the signs for their vowels." }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>After the crisis of <b>1200 BC</b>, smaller peoples emerge: Phoenicians, Hebrews, Philistines, Arameans.</li>
<li><b>Hebrews</b>: Abraham, Moses (Exodus, the Law), the kingdoms of David and Solomon, the division into Israel and Judah, the Babylonian exile (586 BC). Legacy: <b>monotheism</b> and the Torah.</li>
<li><b>Phoenicians</b>: city-states (Tyre, Sidon, Byblos), trade, purple dye, colonies; <b>Carthage</b> (814 BC).</li>
<li>Phoenician <b>alphabet</b> of 22 consonants → Greek (with vowels) → Latin.</li>
<li><b>Coins</b> appear in Lydia (7th century BC).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Sea Peoples", d: "Groups of invaders who attacked the eastern coasts of the Mediterranean around 1200 BC." },
    { t: "Monotheism", d: "Belief in a single God." },
    { t: "Polytheism", d: "Belief in many gods." },
    { t: "Covenant", d: "The pact between God and the Hebrew people, the basis of the Law." },
    { t: "Torah", d: "The Law: the first five books of the Hebrew Bible." },
    { t: "Prophet", d: "Someone who speaks in God's name, calling the people back to justice." },
    { t: "Babylonian exile", d: "The deportation of the Hebrews of Judah to Babylon after 586 BC." },
    { t: "Trading post (emporium)", d: "A commercial port in a foreign land." },
    { t: "Purple dye", d: "A precious colouring obtained from the murex sea snail." },
    { t: "Alphabet", d: "A writing system in which each sign stands for a sound." },
    { t: "Punic", d: "Relating to the western Phoenicians and to Carthage." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What happened around 1200 BC in the eastern Mediterranean?", options: ["The collapse of many Bronze Age kingdoms", "The birth of the Roman Empire", "The invention of coins"], answer: 0, explain: "A general crisis involving the so-called Sea Peoples." },
      { type: "mc", q: "Which ruler made Jerusalem the capital of the Hebrews?", options: ["David", "Solomon", "Saul"], answer: 0, explain: "David, around 1000 BC (Solomon built the Temple there)." },
      { type: "tf", q: "The Hebrew kingdom split into Israel (north) and Judah (south).", answer: true, explain: "After Solomon's death, about 930 BC." },
      { type: "mc", q: "What was the Babylonian exile?", options: ["The deportation of the Hebrews of Judah to Babylon", "The flight from Egypt", "The conquest of Canaan"], answer: 0, explain: "After the destruction of the Temple in 586 BC." },
      { type: "text", q: "What is the name of the main Phoenician city, built on an island, with a large fleet?", answer: ["tyre"], explain: "Tyre." },
      { type: "mc", q: "Why did the Phoenicians found colonies?", options: ["To have trading ports and raw materials", "To found territorial empires", "To spread monotheism"], answer: 0, explain: "They were looking for markets and metals, not conquest." },
      { type: "order", q: "Put these in chronological order.", items: ["David in Jerusalem", "Founding of Carthage", "Fall of Samaria", "Destruction of the Temple", "Return of the exiles under Cyrus"], explain: "About 1000, 814, 722, 586, 539 BC." },
      { type: "mc", q: "What is the main difference between the Phoenician alphabet and cuneiform?", options: ["Phoenician has few signs, one for each sound", "Phoenician has thousands of signs", "Phoenician uses only pictures"], answer: 0, explain: "22 signs versus hundreds." },
      { type: "num", q: "How many signs did the Phoenician alphabet have?", answer: 22, tol: 0, explain: "Twenty-two consonants." },
      { type: "tf", q: "The Latin alphabet derives from the Greek one, which derives from the Phoenician one.", answer: true, explain: "Phoenician → Greek → Etruscan/Latin." },
      { type: "mc", q: "Which of these is NOT a religion derived from Judaism?", options: ["Christianity", "Islam", "Zoroastrianism"], answer: 2, explain: "Zoroastrianism is the Persian religion, with a different origin." }
    ]
  }
});
