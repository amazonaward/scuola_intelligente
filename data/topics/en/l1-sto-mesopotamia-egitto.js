TOPIC('en', {
  id: "l1-sto-mesopotamia-egitto",
  title: "Mesopotamia and Egypt",
  intro: "Two great rivers, the <b>Tigris and the Euphrates</b>, and an even more famous one, the <b>Nile</b>, saw the birth of the first cities, the first written laws and the first states in history. In these \"river civilisations\" water meant life and power: whoever could control it was in charge. In this lesson we compare two very different worlds, the city-states of <b>Mesopotamia</b> and the <b>Egypt</b> of the pharaoh, and find out what they left us: writing, mathematics, law codes, the pyramids.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. River civilisations: the gift (and the risk) of water",
      html: `<p>Between the 4th and 3rd millennium BC four great civilisations arose along rivers: <b>Mesopotamia</b> (Tigris and Euphrates), <b>Egypt</b> (Nile), the <b>Indus Valley</b> and the <b>Yellow River valley</b>. What do they have in common?</p>
<ul>
<li><b>Fertile land</b>: the rivers deposit silt that makes the soil very productive.</li>
<li><b>Water control</b>: <b>canals</b> have to be dug, and embankments and reservoirs built. This needs collective work, calendars and officials: a <b>state</b> is born.</li>
<li><b>Surplus</b>: abundant harvests support craftsmen, priests, scribes and soldiers.</li>
<li><b>Writing</b> to keep the storehouse accounts and record the laws.</li>
</ul>
<p>The historian Karl Wittfogel spoke of "hydraulic societies"; today the label is debated, but the idea is still useful: <b>water → organisation → power</b>.</p>
<p><b>Mesopotamia</b> means "land between the two rivers" (in Greek). The Nile, by contrast, has a predictable flood (from July to October) and desert on both sides: <b>Egypt</b> is "the gift of the Nile", as the Greek historian Herodotus wrote.</p>`
    },
    {
      type: "3d",
      title: "3D map: from Uruk to Ramesses",
      scene: "spacetime",
      caption: "The base is the map of the Near East and Egypt, the height is time (3500-1000 BC). Tap the events: the arrows link causes and effects.",
      options: {
        lat: [22, 38],
        lon: [28, 52],
        years: [-3500, -1000],
        places: [
          { lat: 30.05, lon: 31.25, label: "Memphis / Cairo" },
          { lat: 25.7, lon: 32.65, label: "Thebes" },
          { lat: 32.5, lon: 44.4, label: "Babylon" },
          { lat: 36.35, lon: 43.15, label: "Nineveh" },
          { lat: 30.96, lon: 46.1, label: "Ur" }
        ],
        events: [
          { id: "uruk", lat: 31.32, lon: 45.64, year: -3300, label: "Uruk: city and writing", html: "In the Sumerian city of Uruk <b>writing</b> is born: signs on clay tablets to record grain, beer and flocks. It is one of the first urban centres in history." },
          { id: "unif", lat: 29.85, lon: 31.25, year: -3100, label: "Unification of Egypt", html: "Around 3100 BC (tradition says under King Menes/Narmer) Upper and Lower Egypt are united into a single kingdom with Memphis as its capital.", causes: [] },
          { id: "sargon", lat: 32.5, lon: 44.3, year: -2334, label: "Sargon of Akkad", html: "Sargon defeats the Sumerian cities and creates the first <b>empire</b> in history, from the Persian Gulf to the Mediterranean." , causes: ["uruk"] },
          { id: "giza", lat: 29.98, lon: 31.13, year: -2560, label: "Pyramid of Khufu", html: "The pharaoh Khufu (Cheops) has the Great Pyramid built at Giza, originally about 146 m tall: a symbol of the absolute power of the god-pharaoh.", causes: ["unif"] },
          { id: "hammurabi", lat: 32.54, lon: 44.42, year: -1754, label: "Code of Hammurabi", html: "Hammurabi, king of Babylon (about 1792-1750 BC), has 282 laws carved on a basalt stele: the most complete collection in the Mesopotamian world.", causes: ["sargon"] },
          { id: "hyksos", lat: 30.9, lon: 31.8, year: -1650, label: "The Hyksos in Egypt", html: "Asian peoples with chariots and horses conquer the Nile Delta; they will be driven out around 1550 BC by the Egyptians, who learn to use chariots and better bronze weapons.", causes: ["giza"] },
          { id: "nuovo", lat: 25.7, lon: 32.65, year: -1550, label: "New Kingdom", html: "With the expulsion of the Hyksos the New Kingdom begins (1550-1070 BC): Egypt becomes a military power with Thebes as its capital; pharaohs such as Thutmose III conquer Syria.", causes: ["hyksos"] },
          { id: "akhenaton", lat: 27.65, lon: 30.9, year: -1350, label: "Akhenaten and Aten", html: "The pharaoh Amenhotep IV takes the name Akhenaten and imposes the worship of a single god, the sun disc <b>Aten</b>, founding the city of Akhetaten (Amarna). After his death Egypt returns to polytheism.", causes: ["nuovo"] },
          { id: "qadesh", lat: 34.57, lon: 36.52, year: -1274, label: "Battle of Kadesh", html: "Ramesses II fights the Hittites at Kadesh (Syria): there is no clear winner. Around 1259 BC the two kingdoms sign the <b>first written peace treaty</b> to have survived.", causes: ["nuovo"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Mesopotamia: city-states and empires",
      html: `<p>In the plain between the Tigris and the Euphrates, poor in stone and metals but rich in clay, many peoples followed one another.</p>
<ul>
<li><b>Sumerians</b> (from the 4th millennium BC): they lived in independent <b>city-states</b> that were often at war: Uruk, Ur, Lagash, Kish. At the centre of each city stood the <b>ziggurat</b>, a stepped tower with a temple on top. The priest-king ruled in the name of the city's god.</li>
<li><b>Akkadians</b>: <b>Sargon</b> (about 2334 BC) united the region into the first empire.</li>
<li><b>Babylonians</b>: the city of <b>Babylon</b> became powerful under <b>Hammurabi</b> (about 1792-1750 BC). A second golden age came under <b>Nebuchadnezzar II</b> (6th century BC).</li>
<li><b>Assyrians</b>: from northern Mesopotamia, between the 9th and 7th centuries BC they built an empire with an army of iron and notorious cruelty; Nineveh housed the library of <b>Ashurbanipal</b> (more than 20,000 tablets).</li>
</ul>
<p>In time the region was conquered by the Persians of <b>Cyrus the Great</b> (fall of Babylon, 539 BC).</p>`
    },
    {
      type: "text",
      title: "3. Cuneiform writing and Mesopotamian culture",
      html: `<p>Writing was born for very practical needs: <b>counting</b>. The first signs (about 3300 BC) are pictograms on clay tablets: an ox head, an ear of grain, a number. Then the signs became more and more stylised and were pressed into the clay with a reed with a triangular tip: <b>cuneiform</b> writing (from the Latin <i>cuneus</i>, "wedge"). It was adapted to several languages (Sumerian, Akkadian, Hittite, Old Persian).</p>
<ul>
<li><b>Scribes</b> studied for years in the "tablet houses" (edubba): they were the state's bureaucracy.</li>
<li><b>Literature</b>: the <b>Epic of Gilgamesh</b>, a poem about the king of Uruk searching for immortality, with a <b>flood</b> story very similar to the one in the Bible.</li>
<li><b>Mathematics</b>: a <b>sexagesimal</b> number system (base 60). This is where the 60 minutes of the hour and the 360 degrees of the circle come from.</li>
<li><b>Astronomy</b>: they observed the sky precisely, predicted eclipses and devised the zodiac.</li>
<li><b>Technology</b>: the wheel (about 3500 BC), the plough, canals.</li>
</ul>`
    },
    {
      type: "svg",
      title: "From picture to wedge: how writing changed",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<text x="300" y="32" font-size="18" font-weight="bold" text-anchor="middle" fill="#78350f">From image to sign</text>
<g stroke="#78350f" stroke-width="3" fill="none">
<path d="M70 120 Q55 90 80 80 Q110 70 120 100 Q130 130 105 150 Z"/>
<path d="M200 140 L260 90 M215 100 L260 140 M190 120 L270 120"/>
<path d="M360 80 L380 140 M395 80 L415 140 M420 100 L440 100"/>
</g>
<g fill="#78350f"><polygon points="500,90 520,90 510,130"/><polygon points="530,90 550,90 540,130"/><polygon points="510,135 530,135 520,175"/></g>
<text x="95" y="190" font-size="15" text-anchor="middle" fill="#0f172a">drawing of</text>
<text x="95" y="210" font-size="15" text-anchor="middle" fill="#0f172a">an ox head</text>
<text x="230" y="190" font-size="15" text-anchor="middle" fill="#0f172a">sign rotated</text>
<text x="230" y="210" font-size="15" text-anchor="middle" fill="#0f172a">and simplified</text>
<text x="400" y="190" font-size="15" text-anchor="middle" fill="#0f172a">quicker strokes</text>
<text x="400" y="210" font-size="15" text-anchor="middle" fill="#0f172a">in the clay</text>
<text x="520" y="190" font-size="15" text-anchor="middle" fill="#0f172a">cuneiform</text>
<text x="520" y="210" font-size="15" text-anchor="middle" fill="#0f172a">with a reed</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#7c2d12">Simplified diagram: the change took many centuries.</text>
</svg>`,
      caption: "Cuneiform grew out of pictograms on wet clay, used for keeping accounts."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Mesopotamia",
      questions: [
        { type: "mc", q: "What was a ziggurat?", options: ["A stepped tower with a temple on top", "A type of ship", "A law code"], answer: 0, explain: "It was the religious centre of a Sumerian city." },
        { type: "mc", q: "Why does an hour have 60 minutes?", options: ["Because of the legacy of the Mesopotamian sexagesimal system", "Because Ramesses II decided so", "Because of the length of the Nile"], answer: 0, explain: "The Babylonians counted in base 60 and the tradition has come down to us." },
        { type: "tf", q: "Cuneiform writing was carved into stone with a point.", answer: false, explain: "It was pressed into wet clay with a reed with a triangular tip." }
      ]
    },
    {
      type: "text",
      title: "4. The Code of Hammurabi and written justice",
      html: `<p>Around <b>1754 BC</b> <b>Hammurabi</b>, king of Babylon, had <b>282 laws</b> carved on a black basalt stele (more than 2 metres tall, now in the Louvre). At the top, the king receives his mission from <b>Shamash</b>, the god of justice. It is not the first code (there was an earlier one by <b>Ur-Nammu</b>, about 2100 BC) but it is the most complete.</p>
<ul>
<li><b>Law of retaliation</b>: "an eye for an eye, a tooth for a tooth" — the punishment must match the offence and not exceed it: a way of limiting private revenge.</li>
<li>But the punishment <b>depends on social class</b>: if a noble injures another noble, he pays with the same injury; if he injures a man of lower rank, he pays a fine.</li>
<li>Rules on <b>trade, loans, marriage, inheritance, wages</b> and the responsibilities of builders and doctors.</li>
<li>The laws are <b>written and public</b>: the judge cannot decide on a whim.</li>
</ul>
<p>For us the important new idea is the principle of <b>legal certainty</b>: everyone must be able to know the law. Today these laws seem harsh and unequal to us, but at the time they were a step forward from the arbitrary justice of the strongest.</p>`
    },
    {
      type: "decision",
      title: "Babylon, about 1760 BC: should justice be written down?",
      html: `<p>You are an adviser to Hammurabi. The kingdom has grown and includes many cities with different customs and judges. Merchants complain: the same dispute can have opposite outcomes from one city to another. The priest-judges argue that justice is in the hands of the gods and of their case-by-case decisions.</p>`,
      question: "What do you advise the king?",
      options: [
        { label: "Let local judges decide case by case, as always.", outcome: "Local traditions are preserved, but justice stays unpredictable and merchants do not trust it: trade suffers." },
        { label: "Collect the same laws for the whole kingdom and have them carved in public places.", outcome: "The kingdom becomes more united and predictable: subjects know what they are risking. The king strengthens his authority, presenting himself as the guarantor of justice." },
        { label: "Hand everything over to a single great royal court in Babylon.", outcome: "Justice is centralised, but cases take a very long time and many subjects cannot reach the capital." }
      ],
      answer: 1,
      explain: "Hammurabi chose <b>written, public laws</b>: the stele was placed where it could be read (but many people could not read: judges and scribes acted as go-betweens). It was also a propaganda tool: the just king, chosen by the gods."
    },
    {
      type: "text",
      title: "5. Egypt: the gift of the Nile and the pharaoh",
      html: `<p>Egypt is a strip of fertile land (the "Black Land") surrounded by desert (the "Red Land"). The Nile flows from south to north and splits into a great <b>delta</b>. Every summer it floods and deposits silt; this is why the Egyptians invented a <b>365-day calendar</b> based on the floods and the star Sirius.</p>
<p><b>A history of 3000 years</b>, divided into:</p>
<ul>
<li><b>Predynastic period</b> and unification (about <b>3100 BC</b>): Upper Egypt (south) and Lower Egypt (north, with the Delta) are united under one king.</li>
<li><b>Old Kingdom</b> (about 2686-2181 BC): capital Memphis, the great <b>pyramids of Giza</b> (Khufu, Khafre, Menkaure).</li>
<li><b>Middle Kingdom</b> (about 2055-1650 BC): reunification, capital Thebes, art and literature; then the invasion of the <b>Hyksos</b>.</li>
<li><b>New Kingdom</b> (about 1550-1070 BC): the age of empire and of the great pharaohs: <b>Hatshepsut</b> (a female pharaoh), <b>Thutmose III</b>, <b>Amenhotep IV/Akhenaten</b>, <b>Tutankhamun</b>, <b>Ramesses II</b>.</li>
<li><b>Late Period</b>: invasions by the Assyrians and the Persians (525 BC), then the conquest by <b>Alexander the Great</b> (332 BC) and the Ptolemies, and finally Rome (30 BC).</li>
</ul>
<p><b>The pharaoh</b> was king and living god, son of the god Horus and guarantor of the <b>cosmic order</b> (Maat). In theory he owned all the land. He ruled with the help of a <b>vizier</b>, official <b>scribes</b> and priests.</p>`
    },
    {
      type: "svg",
      title: "The social pyramid of Egypt",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef9c3"/>
<polygon points="300,20 160,270 440,270" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<line x1="270" y1="80" x2="330" y2="80" stroke="#92400e" stroke-width="2"/>
<line x1="235" y1="140" x2="365" y2="140" stroke="#92400e" stroke-width="2"/>
<line x1="200" y1="200" x2="400" y2="200" stroke="#92400e" stroke-width="2"/>
<text x="300" y="68" font-size="16" font-weight="bold" text-anchor="middle" fill="#7c2d12">Pharaoh</text>
<text x="300" y="118" font-size="14" text-anchor="middle" fill="#0f172a">Vizier, priests, nobles</text>
<text x="300" y="175" font-size="14" text-anchor="middle" fill="#0f172a">Scribes, soldiers, craftsmen</text>
<text x="300" y="240" font-size="14" text-anchor="middle" fill="#0f172a">Peasants (the great majority)</text>
<text x="500" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Slaves (few)</text>
<text x="90" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Prisoners</text>
</svg>`,
      caption: "Egyptian society was strongly hierarchical; during the flood, peasants also worked on the state's great building sites."
    },
    {
      type: "text",
      title: "6. Writing, religion and life after death",
      html: `<ul>
<li><b>Hieroglyphs</b> ("sacred carvings"): a picture script that combines signs for sounds, ideas and categories. Alongside it, for everyday life, there was <b>hieratic</b> script and later <b>demotic</b>. People wrote on <b>papyrus</b>, made from a plant that grows along the Nile.</li>
<li>Hieroglyphs were forgotten and then deciphered in <b>1822</b> by <b>Jean-François Champollion</b> thanks to the <b>Rosetta Stone</b> (discovered in 1799), which carries the same text in hieroglyphic, demotic and Greek.</li>
<li><b>Polytheistic religion</b>: Ra (the sun), Osiris (the afterlife), Isis, Horus, Anubis. The gods often have animal heads.</li>
<li><b>Afterlife</b>: after death the deceased is judged: their heart is weighed against the feather of Maat. That is why <b>mummification</b> was practised (to preserve the body) and <b>tombs</b> were built with treasures and the "Book of the Dead".</li>
<li><b>Sciences</b>: geometry to redraw field boundaries after the floods, practical medicine (medical papyri), astronomy.</li>
</ul>
<p>The <b>pyramids</b> are the monumental tombs of the Old Kingdom pharaohs, built by organised workers (not by slaves, according to archaeological discoveries near Giza) using ramps and stone blocks. Later, for fear of tomb robbers, the New Kingdom pharaohs were buried in tombs cut into the rock of the <b>Valley of the Kings</b>, near Thebes.</p>`
    },
    {
      type: "example",
      title: "Worked example: reading a cartouche",
      html: `<p>A pharaoh's name was written inside an elongated oval, the <b>cartouche</b>. Champollion realised that the hieroglyphs inside the cartouches of Ptolemy and Cleopatra, on the Rosetta Stone, stood for <b>sounds</b> and not just ideas: from there he began to decipher everything. Try to reason like him:</p>
<ol>
<li>The stone has the same text in <b>three scripts</b>: the Greek could be read, so it provided the translation.</li>
<li>The name "Ptolemy" appears several times in the Greek: look for the same sequence in the hieroglyphs, inside a cartouche.</li>
<li>Match each sign to a sound and compare with "Cleopatra": the letters they share (P, O, L, T) correspond to the same signs.</li>
</ol>
<p>This is the method for deciphering any lost script: you need a comparative key and a lot of patience.</p>`
    },
    {
      type: "example",
      title: "Worked example: your clock is Babylonian",
      html: `<p>Every time you check the time or measure an angle, you use a Mesopotamian legacy:</p>
<ul>
<li>1 hour = 60 minutes, 1 minute = 60 seconds: base 60;</li>
<li>the circle has 360 degrees (6 × 60);</li>
<li>the days of the week are linked to the seven heavenly bodies visible to the naked eye (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn), as you can still see in English Sunday, Monday and Saturday, or in Italian <i>lunedì</i> (Moon) and <i>martedì</i> (Mars)...</li>
</ul>
<p>And from Egypt we inherited the <b>365-day solar calendar</b>, later corrected by the Romans under Julius Caesar (the leap year).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The curse of Tutankhamun",
      html: `<p>In <b>1922</b> the British archaeologist <b>Howard Carter</b> discovered in the Valley of the Kings the almost intact tomb of <b>Tutankhamun</b>, a pharaoh who died very young (about 18-19 years old) around 1323 BC, the son or a relative of Akhenaten. When the expedition's sponsor, Lord Carnarvon, died in 1923, people began talking about the "curse of the pharaoh". But archaeologists showed that most of those involved died of natural causes and at an advanced age (Carter in 1939): the "curse" was invented by the newspapers. The tomb contained more than 5000 objects, including the famous gold funerary mask.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The first \"peace treaty\" in history",
      html: `<p>After the Battle of Kadesh (about 1274 BC) the pharaoh <b>Ramesses II</b> and the Hittite king <b>Hattusili III</b> signed, around 1259 BC, a treaty of peace and alliance of which we have both the Egyptian version (carved on the walls of the temple of Karnak) and the Hittite one (clay tablets). A copy hangs at the United Nations headquarters in New York as an example of an ancient international agreement.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand Mesopotamia and Egypt",
      intro: "Two river civilisations, two solutions. Here are some ways to compare them.",
      tabs: [
        {
          label: "⚖️ Side-by-side comparison",
          html: `<table>
<tr><th></th><th>Mesopotamia</th><th>Egypt</th></tr>
<tr><td><b>River</b></td><td>Tigris and Euphrates: sudden, destructive floods</td><td>Nile: regular, predictable flood</td></tr>
<tr><td><b>Territory</b></td><td>Open plain, easy to invade</td><td>Deserts on both sides: well protected</td></tr>
<tr><td><b>State</b></td><td>Many city-states, then empires</td><td>A united kingdom under the pharaoh</td></tr>
<tr><td><b>King</b></td><td>Priest-king, representative of the gods</td><td>Pharaoh: a living god</td></tr>
<tr><td><b>Writing</b></td><td>Cuneiform on clay</td><td>Hieroglyphs on papyrus</td></tr>
<tr><td><b>Monuments</b></td><td>Ziggurats, in brick</td><td>Pyramids and temples, in stone</td></tr>
<tr><td><b>Afterlife</b></td><td>Gloomy and dusty</td><td>A happy life for those who pass the judgement</td></tr>
</table>
<p>Geography explains a lot: an unpredictable river and open territory produce rival cities and aggressive peoples; a regular river and a protective desert produce stable unity and an optimistic view of life.</p>`
        },
        {
          label: "🗺️ Where they are: spin the globe",
          html: `<p>Rotate the globe to locate the great cities of the two civilisations.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.3, lon: 45.6, label: "Uruk", color: "#f97316" },
              { lat: 30.96, lon: 46.1, label: "Ur", color: "#f97316" },
              { lat: 32.5, lon: 44.4, label: "Babylon", color: "#ef4444" },
              { lat: 36.35, lon: 43.15, label: "Nineveh", color: "#ef4444" },
              { lat: 29.98, lon: 31.13, label: "Giza", color: "#2563eb" },
              { lat: 25.7, lon: 32.65, label: "Thebes", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 3], color: "#f97316" }, { points: [4, 5], color: "#2563eb" }]
          }
        },
        {
          label: "📅 Timeline",
          html: `<p>Place the events on the timeline: see how long these histories are.</p>`,
          widget: "timeline",
          options: {
            unit: "years",
            events: [
              { year: -3300, label: "Writing at Uruk", icon: "✍️" },
              { year: -3100, label: "Unification of Egypt", icon: "👑" },
              { year: -2560, label: "Pyramid of Khufu", icon: "🔺" },
              { year: -2334, label: "Sargon of Akkad", icon: "⚔️" },
              { year: -1754, label: "Code of Hammurabi", icon: "⚖️" },
              { year: -1550, label: "New Kingdom", icon: "🏛️" },
              { year: -1350, label: "Akhenaten", icon: "☀️" },
              { year: -1274, label: "Kadesh", icon: "🛡️" },
              { year: -539, label: "Persians in Babylon", icon: "🏰" },
              { year: -332, label: "Alexander in Egypt", icon: "🐎" }
            ]
          }
        },
        {
          label: "🃏 Review cards",
          html: `<p>Flip the cards to review the key words.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Ziggurat", back: "A stepped tower with a temple on top, the centre of a Sumerian city" },
              { front: "Cuneiform", back: "Writing with wedge-shaped signs on clay" },
              { front: "Hammurabi", back: "King of Babylon (c. 1792-1750 BC), author of the famous code of 282 laws" },
              { front: "Pharaoh", back: "The god-king of Egypt, guarantor of order (Maat)" },
              { front: "Rosetta", back: "A stone with the same text in three scripts: the key to deciphering hieroglyphs" },
              { front: "Law of retaliation", back: "Punishment matching the offence (\"an eye for an eye\")" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the river civilisations: tap the nodes and find out why",
      nodes: [
        { id: "fiumi", label: "Great rivers", x: 50, y: 6, color: "#0ea5e9", html: "The Tigris, Euphrates and Nile provide water, silt and transport routes.", why: "Where water is plentiful and predictable (or manageable), the land is very productive: more food means more people and a surplus to support specialists." },
        { id: "canali", label: "Irrigation and control", x: 18, y: 30, color: "#16a34a", html: "Canals, embankments, flood calendars.", why: "Digging and maintaining canals needs collective work and coordination. Central power establishes itself precisely because it organises and protects these works." },
        { id: "surplus", label: "Surplus and storehouses", x: 82, y: 30, color: "#eab308", html: "Harvests pile up in the granaries of the temple or palace.", why: "Those who run the storehouses need to record what comes in and what goes out: accounting is born." },
        { id: "scrittura", label: "Writing", x: 50, y: 50, color: "#a855f7", html: "Cuneiform in Mesopotamia, hieroglyphs in Egypt.", why: "Invented to count stores and debts, then used for laws, letters, prayers and stories. It marks the beginning of history." },
        { id: "stato", label: "State and king", x: 20, y: 75, color: "#ef4444", html: "Sumerian city-states, Mesopotamian empires, the united kingdom of Egypt.", why: "Power is legitimised by religion: the king is the god's representative (Mesopotamia) or is himself a god (Egypt). An army, taxes and a bureaucracy support the state." },
        { id: "leggi", label: "Written laws", x: 80, y: 75, color: "#7c2d12", html: "Code of Ur-Nammu, Code of Hammurabi.", why: "In large, complex societies people can no longer rely on oral tradition alone: common, public rules are needed to settle disputes and protect trade." },
        { id: "cultura", label: "Science and religion", x: 50, y: 95, color: "#0f766e", html: "Mathematics, astronomy, mummification, temples.", why: "Working out the calendar, measuring fields after the floods and building great works stimulate mathematics and astronomy; fear of death and the need for order produce myths and rituals." }
      ],
      edges: [
        ["fiumi", "canali", "require"],
        ["fiumi", "surplus", "produce"],
        ["canali", "stato", "strengthen the"],
        ["surplus", "scrittura", "requires"],
        ["scrittura", "leggi", "makes possible"],
        ["stato", "leggi", "issues"],
        ["scrittura", "cultura", "passes on"],
        ["stato", "cultura", "funds"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Egypt",
      questions: [
        { type: "mc", q: "Who deciphered hieroglyphs in 1822?", options: ["Howard Carter", "Jean-François Champollion", "Herodotus"], answer: 1, explain: "Champollion used the Rosetta Stone." },
        { type: "mc", q: "What was the pharaoh for the Egyptians?", options: ["A god-king, guarantor of the cosmic order", "A simple judge", "An elected military leader"], answer: 0, explain: "He was considered the son of gods and the guarantor of Maat." },
        { type: "tf", q: "The pyramids of Giza belong to the New Kingdom.", answer: false, explain: "They were built in the Old Kingdom (about 2600-2500 BC)." },
        { type: "text", q: "What is the Egyptian picture script called?", answer: ["hieroglyphs", "hieroglyphics", "hieroglyphic", "hieroglyph"], explain: "Hieroglyphs, \"sacred carvings\"." }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>River civilisations arise where water provides a surplus and demands organisation: Mesopotamia, Egypt, the Indus, the Yellow River.</li>
<li><b>Mesopotamia</b>: Sumerians (city-states, ziggurats, cuneiform), Akkadians (Sargon, the first empire), Babylonians (<b>Hammurabi</b>, c. 1792-1750 BC), Assyrians.</li>
<li><b>Code of Hammurabi</b>: 282 written laws, retaliation, different punishments by social class.</li>
<li><b>Egypt</b>: unification about 3100 BC; Old (pyramids), Middle and New Kingdoms; the pharaoh as god-king; hieroglyphs deciphered in 1822.</li>
<li>Legacy: writing, base 60, the 365-day calendar, geometry, written laws.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "River civilisation", d: "A society that grew up along a great river, using and controlling its waters." },
    { t: "City-state", d: "An independent city with its own government and territory." },
    { t: "Ziggurat", d: "A Mesopotamian stepped tower with a temple on top." },
    { t: "Cuneiform", d: "Mesopotamian writing with wedge-shaped signs pressed into clay." },
    { t: "Scribe", d: "An official who could read and write." },
    { t: "Retaliation", d: "The principle that the punishment equals the harm suffered." },
    { t: "Pharaoh", d: "The king of Egypt, considered a god." },
    { t: "Hieroglyph", d: "The picture script of ancient Egypt." },
    { t: "Papyrus", d: "A writing material made from a plant that grows along the Nile." },
    { t: "Mummification", d: "A technique for preserving the bodies of the dead." },
    { t: "Empire", d: "A large state that rules over many peoples." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What does \"Mesopotamia\" mean?", options: ["Land between the two rivers", "Land of the Nile", "Land of the sun"], answer: 0, explain: "From Greek: \"land in the middle of the rivers\" (Tigris and Euphrates)." },
      { type: "mc", q: "What was the Sumerians' writing system?", options: ["Hieroglyphic", "Cuneiform", "Alphabetic"], answer: 1, explain: "Cuneiform, on clay tablets." },
      { type: "tf", q: "The Code of Hammurabi laid down identical punishments for nobles and commoners.", answer: false, explain: "Punishments depended on social class." },
      { type: "text", q: "What was the name of the first king to unite Mesopotamia into an empire, around 2334 BC?", answer: ["sargon", "sargon of akkad"], explain: "Sargon of Akkad." },
      { type: "mc", q: "In which period were the pyramids of Giza built?", options: ["Old Kingdom", "New Kingdom", "Ptolemaic period"], answer: 0, explain: "The Old Kingdom, about 2600-2500 BC." },
      { type: "mc", q: "What made it possible to decipher hieroglyphs?", options: ["The Rosetta Stone", "The tomb of Tutankhamun", "The Code of Hammurabi"], answer: 0, explain: "The text in three scripts, one of them Greek, was the key." },
      { type: "order", q: "Put these in chronological order.", items: ["Birth of writing at Uruk", "Unification of Egypt", "Pyramid of Khufu", "Code of Hammurabi", "Battle of Kadesh"], explain: "About 3300, 3100, 2560, 1754, 1274 BC." },
      { type: "mc", q: "Why was Egypt more stable than Mesopotamia?", options: ["It had a regular Nile and borders protected by desert", "It had no rivers", "It was an island"], answer: 0, explain: "The predictable flood and natural protection favoured a united kingdom." },
      { type: "num", q: "How many laws does the Code of Hammurabi contain? (approximately)", answer: 282, tol: 2, explain: "282 articles, carved on the basalt stele." },
      { type: "tf", q: "Akhenaten introduced the worship of a single god, Aten, in Egypt.", answer: true, explain: "It was an attempt at monotheism, abandoned after his death." },
      { type: "mc", q: "Which Mesopotamian legacy do we still use today?", options: ["Dividing the hour into 60 minutes", "Roman numerals", "Coins"], answer: 0, explain: "The sexagesimal system." }
    ]
  }
});
