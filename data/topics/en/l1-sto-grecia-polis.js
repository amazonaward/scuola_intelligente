TOPIC('en', {
  id: "l1-sto-grecia-polis",
  title: "Greece of the poleis",
  intro: "A land of mountains and islands, with no great rivers or plains, where nobody ever managed to unite everyone under a single king. And yet this is where <b>democracy</b>, philosophy, theatre and the Olympic Games were born. How? Thanks to a typically Greek invention: the <b>polis</b>, a city that is also a state and a community of citizens. In this lesson we start from the Bronze Age civilisations, the Minoans and the Mycenaeans, and arrive at the two opposite models of <b>Sparta</b> and <b>Athens</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. The Greek landscape and why it matters",
      html: `<p>Greece is made of <b>peninsulas, islands and mountains</b>: about 80% of the land is mountainous, and the farmable plains are small and separated from one another. This has three decisive effects:</p>
<ul>
<li><b>Political fragmentation</b>: each valley or island develops its own independent community; it is hard to unite them into a single kingdom.</li>
<li><b>Shortage of land</b>: harvests are limited (little grain, but plenty of olive oil and wine), so people look elsewhere for food and trade.</li>
<li><b>A seafaring calling</b>: no part of Greece is far from the sea; the Mediterranean is the main road. As Plato said, the Greeks live «around the sea like frogs around a pond».</li>
</ul>
<p>The Greeks called themselves <b>Hellenes</b> and their country <b>Hellas</b>; they felt they were one people because of their language, religion (the same gods of Olympus), Panhellenic festivals (the <b>Olympic Games</b>, from <b>776 BC</b>) and sanctuaries (Delphi, with the oracle of Apollo). Anyone who did not speak Greek was a <i>bárbaros</i>.</p>`
    },
    {
      type: "text",
      title: "2. Minoans and Mycenaeans: Bronze Age Greece",
      html: `<p><b>Minoan civilisation</b> (Crete, c. 2000-1450 BC): named after the mythical King Minos. Rich <b>palaces</b> such as the one at <b>Knossos</b>, with no defensive walls (a sign of naval power), and lively frescoes with dolphins, bulls and young acrobats. They wrote in <b>Linear A</b>, which has still not been deciphered. Their power declined after the eruption of the <b>Thera</b> volcano (Santorini, c. 1600 BC) and the conquest by the Mycenaeans.</p>
<p><b>Mycenaean civilisation</b> (mainland Greece, c. 1600-1100 BC): named after <b>Mycenae</b> in the Peloponnese. They were <b>Greeks</b> speaking an Indo-European language, who arrived from the north in the 2nd millennium BC. They built <b>fortified citadels</b> (with huge boulders, the «Cyclopean walls», and the Lion Gate) and tholos tombs with golden treasures (the «Mask of Agamemnon»). They wrote in <b>Linear B</b>, deciphered in 1952 by <b>Michael Ventris</b>: it is ancient Greek, and it gives us palace inventories. At the end of the 2nd millennium BC (c. 1200-1100) Mycenaean civilisation collapsed, as part of the general crisis of the Mediterranean (invasions, earthquakes, wars).</p>
<p>The memory of that age survives in the poems of <b>Homer</b> (the <i>Iliad</i> and the <i>Odyssey</i>, perhaps written down in the 8th century BC): the Trojan War (c. 1200 BC), King Agamemnon, Achilles, Odysseus. They are literary tales, not chronicles, but they contain real memories.</p>`
    },
    {
      type: "3d",
      title: "3D map: from Mycenaean Greece to the colonies",
      scene: "spacetime",
      caption: "The base is a map of Greece and the Aegean, the height is time (1700-500 BC). Tap the events: the arrows link causes and effects.",
      options: {
        lat: [34, 41],
        lon: [20, 30],
        years: [-1700, -500],
        places: [
          { lat: 37.97, lon: 23.72, label: "Athens" },
          { lat: 37.08, lon: 22.43, label: "Sparta" },
          { lat: 37.73, lon: 22.76, label: "Mycenae" },
          { lat: 35.3, lon: 25.16, label: "Knossos" }
        ],
        events: [
          { id: "cnosso", lat: 35.3, lon: 25.16, year: -1700, label: "Palace of Knossos", html: "The great palace of Crete is the administrative and religious centre of Minoan civilisation.", causes: [] },
          { id: "micene", lat: 37.73, lon: 22.76, year: -1500, label: "Mycenae", html: "The Mycenaeans, mainland Greeks, dominate the Peloponnese and conquer Crete around 1450 BC.", causes: ["cnosso"] },
          { id: "crollo", lat: 37.73, lon: 22.76, year: -1150, label: "Collapse of the palaces", html: "Around 1200-1100 BC the Mycenaean palaces are destroyed. Centuries of decline follow: the «Greek Dark Ages».", causes: ["micene"] },
          { id: "olimpiadi", lat: 37.64, lon: 21.63, year: -776, label: "First Olympic Games", html: "In 776 BC (the traditional date) the first Panhellenic games in honour of Zeus are held at Olympia: they were used to date events.", causes: ["crollo"] },
          { id: "polis", lat: 37.97, lon: 23.72, year: -800, label: "Birth of the poleis", html: "Around the 8th century BC villages join together into city-states (poleis), with an acropolis, an agora and an assembly of citizens.", causes: ["crollo"] },
          { id: "cuma", lat: 40.85, lon: 14.05, year: -750, label: "Cumae: first colony in Italy", html: "Around 750 BC settlers from Chalcis and Eretria land in Campania: Magna Graecia begins.", causes: ["polis"] },
          { id: "siracusa", lat: 37.07, lon: 15.29, year: -733, label: "Syracuse", html: "In 733 BC settlers from Corinth found Syracuse, which will become the most powerful Greek city in the West.", causes: ["polis"] },
          { id: "solone", lat: 37.97, lon: 23.72, year: -594, label: "Reforms of Solon", html: "In Athens Solon cancels debts and debt slavery, divides citizens by income and gives everyone access to the assembly.", causes: ["polis"] },
          { id: "clistene", lat: 37.97, lon: 23.72, year: -508, label: "Reforms of Cleisthenes", html: "In 508-507 BC Cleisthenes reorganises the citizens into 10 mixed tribes and creates the Boule of 500: it is the beginning of Athenian democracy.", causes: ["solone"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. What is a polis?",
      html: `<p>After the Mycenaean collapse, between the 9th and 8th centuries BC Greek villages joined together into <b>poleis</b> (singular <i>polis</i>): independent communities with their own laws, army, coinage and protecting gods. It is not simply a city: it is a <b>state</b> in miniature.</p>
<ul>
<li><b>Acropolis</b> («upper city»): a fortified hill with the temples, a refuge in case of attack.</li>
<li><b>Agora</b>: the central square for the market and assemblies; the heart of public life.</li>
<li><b>Chora</b>: the surrounding countryside, with the citizens' fields.</li>
<li><b>Citizens</b>: only adult males born of citizen parents took part in political life. Women, slaves and foreigners (<i>metics</i>) were excluded.</li>
<li>Size: from a few thousand inhabitants to a few tens of thousands (Athens and Syracuse were the largest). So everyone could know each other and take part directly.</li>
</ul>
<p>The poleis were rivals and often at war, but they felt part of a single culture. Their forms of government changed over time: <b>monarchy → aristocracy (oligarchy) → tyranny → democracy</b>. A <b>tyrant</b> was someone who seized power by force (often with the support of the poor) and ruled outside the rules; the word did not necessarily have today's negative meaning.</p>`
    },
    {
      type: "svg",
      title: "How a polis was laid out",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect x="0" y="230" width="600" height="70" fill="#bfdbfe"/>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#1e3a8a">sea: harbour and trade</text>
<path d="M200 220 L250 90 L350 90 L400 220 Z" fill="#d6d3d1" stroke="#44403c" stroke-width="3"/>
<rect x="265" y="55" width="70" height="35" fill="#fafaf9" stroke="#44403c" stroke-width="2"/>
<polygon points="260,55 300,30 340,55" fill="#fecaca" stroke="#7f1d1d" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">temple</text>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ACROPOLIS</text>
<rect x="215" y="150" width="170" height="60" fill="#fef9c3" stroke="#a16207" stroke-width="2"/>
<text x="300" y="185" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">AGORA</text>
<g fill="#fde68a" stroke="#92400e" stroke-width="2"><rect x="60" y="170" width="50" height="40"/><rect x="120" y="180" width="50" height="30"/><rect x="430" y="170" width="50" height="40"/><rect x="490" y="180" width="50" height="30"/></g>
<text x="115" y="160" font-size="14" text-anchor="middle" fill="#0f172a">houses</text>
<text x="490" y="160" font-size="14" text-anchor="middle" fill="#0f172a">houses</text>
<text x="85" y="40" font-size="14" fill="#14532d">fields and villages (chora)</text>
<text x="400" y="40" font-size="14" fill="#14532d">fields and villages (chora)</text>
</svg>`,
      caption: "Ideal layout of a polis: acropolis with temples, agora in the centre, houses, countryside and harbour."
    },
    {
      type: "quiz",
      title: "Mini-quiz: the origins",
      questions: [
        { type: "mc", q: "Which Mycenaean script was deciphered in 1952?", options: ["Linear A", "Linear B", "Hieroglyphics"], answer: 1, explain: "Linear B, by Michael Ventris: it is Greek." },
        { type: "mc", q: "What was the agora?", options: ["The central square of the polis", "The fortified hill", "A temple"], answer: 0, explain: "The square for the market and assemblies." },
        { type: "tf", q: "Ancient Greece was a united state under a single king.", answer: false, explain: "It was divided into many independent poleis." }
      ]
    },
    {
      type: "text",
      title: "4. Greek colonisation (8th-6th centuries BC)",
      html: `<p>Between the 8th and 6th centuries BC many poleis sent groups of citizens to found <b>colonies</b> along the coasts of the Mediterranean and the Black Sea. Each colony (<i>apoikia</i>, «home far away») was an <b>independent</b> polis, linked to its mother city (<i>metropolis</i>) by religious and emotional ties.</p>
<p><b>Why?</b></p>
<ul>
<li><b>Overpopulation and shortage of land</b>: the younger sons of farmers had no fields;</li>
<li><b>Trade</b>: ports of call were needed for metals and grain;</li>
<li><b>Political struggles</b>: the losers often left;</li>
<li><b>A spirit of adventure</b> and curiosity.</li>
</ul>
<p>Before leaving, the settlers consulted the <b>oracle of Delphi</b>. The leader of the expedition was called the <i>oikist</i> (founder).</p>
<p><b>Where?</b> To the west: <b>Magna Graecia</b> (southern Italy) and <b>Sicily</b>: Cumae, Neapolis (Naples), Taras (Taranto, founded by Sparta c. 706 BC), Sybaris, Croton, Rhegium, Syracuse (Corinth, 733 BC), Akragas (Agrigento), Naxos. In France <b>Massalia</b> (Marseille, c. 600 BC), in Spain Emporion; to the east, on the Black Sea and the Hellespont (Byzantium, c. 660 BC).</p>
<p><b>Consequences</b>: more trade and wealth; the rise of a <b>merchant class</b> demanding power; the spread of Greek culture (and of the alphabet) among the Italic peoples and contact with the Etruscans and the Romans; a sense of a shared <b>Greek</b> identity in contrast with the barbarians.</p>`
    },
    {
      type: "text",
      title: "5. Sparta: the barracks state",
      html: `<p><b>Sparta</b>, in the plain of Laconia (Peloponnese), conquered its neighbours the Messenians in a long war (8th-7th centuries BC) and reduced them to <b>helots</b>, serfs owned collectively by the state who worked the land. To keep them under control, the Spartans chose to become a nation of soldiers.</p>
<ul>
<li><b>Three classes</b>: the <b>Spartiates</b> (full citizens, few in number, warriors), the <b>perioikoi</b> (free people without political rights, craftsmen and traders) and the <b>helots</b>.</li>
<li><b>Mixed government</b>, attributed to the legendary <b>Lycurgus</b>: two <b>kings</b> (a dyarchy) with mainly military powers; the <b>gerousia</b>, a council of 28 elders over 60 plus the two kings; the <b>apella</b>, the assembly of all Spartiates, which approved or rejected proposals by acclamation; the five <b>ephors</b>, magistrates elected every year who kept watch over the kings.</li>
<li><b>Agoge</b> («upbringing»): at 7 boys left their families to be raised by the state: discipline, hunger, endurance of pain, training. Until the age of 30 they lived in barracks.</li>
<li><b>Women</b>: they had more freedom and respect than elsewhere in Greece (physical exercise, managing property), but their task was to give birth to warriors.</li>
<li>Sparta had the strongest <b>phalanx</b>: soldiers with a shield (<i>hoplon</i>) and spear, in tight ranks. In the 5th century it had about 8,000 Spartiates.</li>
</ul>
<p>Sparta remained closed and conservative, with little interest in the arts; its military strength made it the leader of the <b>Peloponnesian League</b>.</p>`
    },
    {
      type: "text",
      title: "6. Athens: from aristocracy to democracy",
      html: `<p><b>Athens</b>, in Attica, was larger and had more access to the sea. Its political development was gradual, step by step:</p>
<ul>
<li><b>Aristocracy</b>: power belonged to the great landowners (<i>eupatridae</i>), who elected the nine <b>archons</b>. Small farmers in debt risked becoming slaves.</li>
<li><b>Draco</b> (621 BC): writes down the laws: very harsh («draconian») but now known to everyone.</li>
<li><b>Solon</b> (594 BC): cancels debts (<i>seisachtheia</i>, «shaking off of burdens») and bans debt slavery; divides citizens into <b>four classes by income</b>: access to office now depends on wealth, not birth; sets up a council of 400 and a people's court.</li>
<li><b>Peisistratus</b> (561-527 BC): a popular tyrant who protects farmers and sponsors public works and festivals (the Great Dionysia).</li>
<li><b>Cleisthenes</b> (508-507 BC): divides the population into <b>10 mixed tribes</b> (no longer tied to noble families) and creates the <b>Boule of 500</b>, which prepares the laws. He introduces <b>ostracism</b>: every year citizens can vote by writing on a potsherd the name of a dangerous man, who is exiled for 10 years without trial.</li>
</ul>
<p>With Cleisthenes <b>democracy</b> («power of the people») is born: the most important decisions belong to the <b>Ecclesia</b> (the assembly of all adult male citizens, which met on the Pnyx hill) and most offices are <b>assigned by lot</b>.</p>`
    },
    {
      type: "widget",
      title: "Sparta or Athens?",
      widget: "classify",
      options: {
        groups: ["🛡️ Sparta", "🏛️ Athens"],
        items: [
          ["Two kings and five ephors", 0],
          ["Assembly of all citizens (Ecclesia)", 1],
          ["Agoge, military upbringing from age 7", 0],
          ["Ostracism", 1],
          ["Helots working the land", 0],
          ["Reforms of Solon and Cleisthenes", 1],
          ["Gerousia of 28 elders", 0],
          ["Strong merchant and war fleet", 1]
        ]
      },
      caption: "Tap a phrase and then the right polis."
    },
    {
      type: "decision",
      title: "Athens, 508 BC: who should decide?",
      html: `<p>After the fall of the tyrants, Athens is torn by struggles between noble families. You are <b>Cleisthenes</b>, an aristocrat who wants to avoid civil war and the return of a tyrant. Almost all power is still in the hands of a few families. The other citizens, especially farmers and craftsmen, want to count for more.</p>`,
      question: "What solution do you propose?",
      options: [
        { label: "Strengthen the power of the great families, so that they rule firmly.", outcome: "The families keep fighting, and the excluded citizens back a new tyrant: the risk of civil war stays high." },
        { label: "Give every male citizen a place in the assembly and the councils, reorganising the tribes.", outcome: "Citizens feel responsible for the state and defend it: this will be Athens' strength in the Persian Wars. The price: most of the population (women, slaves, metics) remains excluded." },
        { label: "Hand everything over to a king who rules for everyone.", outcome: "A return to monarchy, but the Athenians had already given up that idea centuries earlier: it would have gone against the trend of the times." }
      ],
      answer: 1,
      explain: "Cleisthenes chose the path of <b>broad participation</b>: power passed from the aristocracy of birth to the whole body of male citizens. It was the birth of Athenian democracy, which would reach its peak under Pericles."
    },
    {
      type: "example",
      title: "Worked example: an Athenian citizen at work",
      html: `<p>Imagine you are <b>Nicias</b>, a 30-year-old Athenian farmer. Your day:</p>
<ol>
<li>In the morning you work in your vegetable garden and olive grove, helped by a slave.</li>
<li>Roughly every ten days you go to the <b>Pnyx</b> for the <b>assembly</b>: you vote by show of hands on war, taxes and laws.</li>
<li>If you are drawn by lot, you serve for a year as a member of the <b>Boule</b> or as a <b>juror</b> in the people's courts (with a small payment so you don't lose out).</li>
<li>In wartime you are a <b>hoplite</b> and fight with your own shield.</li>
</ol>
<p>You are directly involved in decisions, unlike today, when we elect representatives: Athenian democracy was <b>direct</b>. But your wife, your slaves and your metic neighbour cannot vote.</p>`
    },
    {
      type: "example",
      title: "Worked example: the names of forms of government",
      html: `<p>The political words we use today are Greek:</p>
<ul>
<li><b>monarchy</b>: rule by one person (<i>mónos</i> + <i>archía</i>);</li>
<li><b>aristocracy</b>: rule by the best (<i>áristoi</i>);</li>
<li><b>oligarchy</b>: rule by the few (<i>olígoi</i>);</li>
<li><b>democracy</b>: power of the people (<i>dêmos</i> + <i>krátos</i>);</li>
<li><b>tyranny</b>: power of someone who has seized command by force.</li>
</ul>
<p>Try to classify the state you live in this way: who decides? How many citizens can vote? How are the rulers chosen? The same questions the Greeks asked are still useful today.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The 300 at Thermopylae",
      html: `<p>In <b>480 BC</b> the Spartan king <b>Leonidas</b> held the pass of Thermopylae for three days with 300 Spartiates and a few thousand other Greeks against the immense Persian army. In fact the Greek allies numbered about 7,000; the 300 Spartiates were the core of the force. When he was outflanked, Leonidas sent most of the allies back and stayed to fight with his men to the death. In the next lesson we will see the background to these wars.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Voting with a potsherd",
      html: `<p>The word «ostracism» comes from <i>óstrakon</i>, the piece of broken pottery on which citizens wrote the name of the man to be exiled. Archaeologists have found more than ten thousand of them in the Athenian agora. Some, bearing the name of <b>Themistocles</b>, were prepared in advance by political opponents, all written in the same hand: proof that election propaganda existed even then! After ten years of exile, the ostracised man could return and recover all his rights.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand Sparta and Athens",
      intro: "Two cities, two opposite choices. Here are some analogies to help you remember them.",
      tabs: [
        {
          label: "🏫 Two schools compared",
          html: `<p>Imagine two schools with opposite rules.</p>
<ul>
<li><b>Sparta School</b>: iron discipline, uniforms, military timetable, a few teachers decide everything, everyone the same, no art. It works in emergencies, but is bad at change.</li>
<li><b>Athens School</b>: a class assembly that discusses and votes, every subject, sport, theatre, experimentation. More confusion and slowness, but creativity and innovation.</li>
</ul>
<p>Sparta chose <b>security and order</b>, Athens <b>participation and freedom</b>. Neither was perfect: both excluded the majority (women, slaves, foreigners).</p>`
        },
        {
          label: "📊 Who rules?",
          html: `<table>
<tr><th></th><th>Sparta</th><th>Athens</th></tr>
<tr><td>Leaders</td><td>2 kings + 5 ephors</td><td>9 archons, strategoi, Boule</td></tr>
<tr><td>Assembly</td><td>Apella (acclamation)</td><td>Ecclesia (vote, debate)</td></tr>
<tr><td>Economy</td><td>Farming, with helots</td><td>Trade, crafts, fleet</td></tr>
<tr><td>Army</td><td>Phalanx of Spartiates</td><td>Hoplites, then a fleet of triremes</td></tr>
<tr><td>Culture</td><td>Discipline and silence</td><td>Theatre, philosophy, art</td></tr>
<tr><td>Excluded</td><td>Helots, perioikoi, women</td><td>Slaves, metics, women</td></tr>
</table>`
        },
        {
          label: "🗺️ Spin the globe",
          html: `<p>Rotate the globe: the Greek poleis and colonies from Marseille to the Black Sea.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Athens", color: "#2563eb" },
              { lat: 37.08, lon: 22.43, label: "Sparta", color: "#ef4444" },
              { lat: 37.07, lon: 15.29, label: "Syracuse", color: "#f97316" },
              { lat: 40.85, lon: 14.05, label: "Cumae", color: "#f97316" },
              { lat: 40.47, lon: 17.24, label: "Taranto", color: "#f97316" },
              { lat: 43.3, lon: 5.37, label: "Marseille", color: "#f97316" },
              { lat: 41.01, lon: 28.98, label: "Byzantium", color: "#f97316" }
            ],
            routes: [{ points: [0, 2, 3], color: "#f97316" }, { points: [0, 6], color: "#f97316" }]
          }
        },
        {
          label: "📅 Timeline",
          html: `<p>Scroll through the main stages, from the Mycenaeans to Cleisthenes.</p>`,
          widget: "timeline",
          options: {
            unit: "years",
            events: [
              { year: -2000, label: "Minoan palaces", icon: "🐂" },
              { year: -1600, label: "Mycenae", icon: "🛡️" },
              { year: -1200, label: "Trojan War (tradition)", icon: "🐴" },
              { year: -776, label: "First Olympic Games", icon: "🥇" },
              { year: -733, label: "Syracuse", icon: "⚓" },
              { year: -621, label: "Draco", icon: "📜" },
              { year: -594, label: "Solon", icon: "⚖️" },
              { year: -508, label: "Cleisthenes", icon: "🗳️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of Greece of the poleis",
      nodes: [
        { id: "geo", label: "Fragmented land", x: 50, y: 6, color: "#16a34a", html: "Mountains, islands, small plains.", why: "Geography prevents unification: each community organises itself and learns to govern itself. The sea pushes people to trade and found colonies." },
        { id: "polis", label: "Polis", x: 20, y: 32, color: "#2563eb", html: "City-state with acropolis, agora and citizens.", why: "Small communities where citizens know each other and take part: this is the ground on which the idea of citizenship is born." },
        { id: "colonie", label: "Colonisation", x: 82, y: 32, color: "#f97316", html: "Colonies from the Black Sea to Spain.", why: "Little land, too many inhabitants and the desire to trade led to the founding of new poleis. Greek culture spreads, and the idea of being Hellenes as opposed to barbarians is born." },
        { id: "sparta", label: "Sparta", x: 20, y: 62, color: "#ef4444", html: "Military oligarchy with helots.", why: "Having to control a huge number of helots, Sparta chose permanent military discipline; this made it strong but rigid and not very creative." },
        { id: "atene", label: "Athens", x: 80, y: 62, color: "#7c3aed", html: "From aristocracy to democracy (Solon, Cleisthenes).", why: "Tensions between rich and poor (debts, slavery) made reforms necessary. Extending rights made the polis stronger and gave its citizens a shared identity." },
        { id: "democrazia", label: "Democracy", x: 50, y: 85, color: "#0ea5e9", html: "Power of the demos: assembly, lot, ostracism.", why: "It is direct and limited to a few (adult men born Athenian), but it is the first time a community is trusted to decide. It will influence modern democracies." },
        { id: "panellenismo", label: "Greek identity", x: 50, y: 50, color: "#eab308", html: "Language, gods, Olympic Games, oracle of Delphi.", why: "Although divided, the poleis shared a culture: this united them to resist the Persians." }
      ],
      edges: [
        ["geo", "polis", "gives rise to the"],
        ["geo", "colonie", "drives"],
        ["polis", "sparta", "model"],
        ["polis", "atene", "model"],
        ["atene", "democrazia", "develops"],
        ["colonie", "panellenismo", "strengthens"],
        ["panellenismo", "democrazia", "shares values with"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Sparta and Athens",
      questions: [
        { type: "mc", q: "What were the serfs of Sparta called?", options: ["Helots", "Metics", "Ephors"], answer: 0, explain: "The helots worked the land for the Spartiates." },
        { type: "mc", q: "According to tradition, who gave Sparta its laws?", options: ["Lycurgus", "Solon", "Cleisthenes"], answer: 0, explain: "The legendary Lycurgus." },
        { type: "tf", q: "Solon banned debt slavery.", answer: true, explain: "He cancelled debts and freed those who had been enslaved." },
        { type: "mc", q: "What was ostracism?", options: ["A 10-year exile voted on a potsherd", "A death penalty", "A kind of tax"], answer: 0, explain: "People wrote on a potsherd the name of the man they wanted to exile." }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Minoans (Crete, Linear A) and Mycenaeans (Mycenae, Linear B, collapse c. 1200-1100 BC).</li>
<li><b>Polis</b>: city-state with acropolis, agora, adult male citizens; never unified.</li>
<li><b>Colonisation</b> (8th-6th centuries BC): Magna Graecia, Syracuse (733), Marseille; causes: scarce land and trade.</li>
<li><b>Sparta</b>: military oligarchy, two kings, ephors, helots, agoge. <b>Athens</b>: from aristocracy to democracy with Draco, Solon, Peisistratus, Cleisthenes (508 BC).</li>
<li>Olympic Games from 776 BC; oracle of Delphi; shared language and gods.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Polis", d: "Greek city-state, an independent community of citizens." },
    { t: "Acropolis", d: "The high, fortified part of the polis with the temples." },
    { t: "Agora", d: "The central square of the polis, a place for the market and assemblies." },
    { t: "Magna Graecia", d: "The Greek colonies of southern Italy." },
    { t: "Helot", d: "Serf owned by the Spartan state." },
    { t: "Ephor", d: "Spartan magistrate who supervised the kings." },
    { t: "Agoge", d: "Military upbringing of young Spartans." },
    { t: "Ecclesia", d: "Assembly of Athenian citizens." },
    { t: "Ostracism", d: "Ten-year exile voted by the assembly." },
    { t: "Metic", d: "Foreigner living in Athens, without political rights." },
    { t: "Tyrant", d: "Someone who seizes power by force, outside the rules." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Why did Greece not unite into a single state?", options: ["Because the land was fragmented by mountains and islands", "Because there was no water", "Because it had no gods"], answer: 0, explain: "The landscape favoured independent communities." },
      { type: "mc", q: "Who deciphered Linear B?", options: ["Michael Ventris", "Howard Carter", "Champollion"], answer: 0, explain: "In 1952; he discovered that it was ancient Greek." },
      { type: "tf", q: "A Greek colony was subject to its mother city like a province.", answer: false, explain: "It was an independent polis, linked to its metropolis by religious and emotional ties." },
      { type: "text", q: "What is the high, fortified part of a polis with the temples called?", answer: ["acropolis", "the acropolis", "akropolis"], explain: "The acropolis." },
      { type: "mc", q: "Which Greek city founded Syracuse (733 BC)?", options: ["Corinth", "Sparta", "Athens"], answer: 0, explain: "Settlers from Corinth." },
      { type: "mc", q: "Which reform by Cleisthenes laid the foundations of democracy?", options: ["Ten mixed tribes and the Boule of 500", "Abolition of slavery", "Popular tyranny"], answer: 0, explain: "It overcame the divisions between noble families." },
      { type: "order", q: "Put in chronological order.", items: ["First Olympic Games", "Draco", "Solon", "Peisistratus becomes tyrant", "Cleisthenes"], explain: "776, 621, 594, 561, 508 BC." },
      { type: "mc", q: "Who were the ephors in Sparta?", options: ["Five elected magistrates who supervised the kings", "Priests of the oracle", "Elite warriors"], answer: 0, explain: "They controlled the kings and directed policy." },
      { type: "num", q: "In what year BC were the first Olympic Games held, according to tradition?", answer: 776, tol: 0, explain: "776 BC." },
      { type: "tf", q: "In Athens women and slaves took part in the assembly.", answer: false, explain: "Only adult male citizens voted." },
      { type: "mc", q: "Why was Sparta organised in such a militarised way?", options: ["To control a large number of helots", "To conquer Asia", "To defend itself against the Romans"], answer: 0, explain: "A few Spartiates had to dominate many helots." }
    ]
  }
});
