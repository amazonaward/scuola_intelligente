TOPIC('en', {
  id: "l1-sto-alessandro-ellenismo",
  title: "Alexander the Great and the Hellenistic Age",
  intro: "In little more than <b>ten years</b>, between 334 and 323 BC, a twenty-year-old king from a kingdom on the edge of the Greek world conquered the largest empire ever seen, from the Mediterranean to India. He died at 32, without having settled the succession. But his adventure changed the world: from his conquests a new civilisation was born, <b>Hellenism</b>, in which Greek language and culture blended with those of Egypt, Persia and Asia. In this lesson we follow Alexander and discover what legacy he left behind.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Macedon under Philip II",
      html: `<p><b>Macedon</b>, north of Greece, was a kingdom of shepherds and farmers ruled by kings and warrior nobles. The Greeks considered it half-barbarian, even though its kings spoke Greek. Under <b>Philip II</b> (359-336 BC) it became the dominant power:</p>
<ul>
<li><b>A reformed army</b>: infantry armed with the <b>sarissa</b> (a spear about 5-6 metres long) in a tight <b>phalanx</b>, the <b>Companion</b> cavalry, siege engineering.</li>
<li><b>Resources</b>: the gold mines of Mount Pangaeus, which paid for the army and diplomacy.</li>
<li><b>Politics</b>: taking advantage of the divisions between the poleis (weakened by the Peloponnesian War), Philip gradually imposed himself. In <b>338 BC</b> at <b>Chaeronea</b> he defeated Athens and Thebes. The Athenian orator <b>Demosthenes</b> had warned against him in his «Philippics»: too late.</li>
<li>In 337 BC he created the <b>League of Corinth</b>: all the poleis (except Sparta) swore alliance and recognised Philip as their leader, in order to wage war on Persia.</li>
</ul>
<p>Philip was assassinated in <b>336 BC</b> during his daughter's wedding. He was succeeded by his son <b>Alexander</b>.</p>`
    },
    {
      type: "text",
      title: "2. Alexander: youth and first steps",
      html: `<p><b>Alexander</b> was born in <b>356 BC</b> in Pella, son of Philip II and Olympias. At 13 he was taught by the philosopher <b>Aristotle</b>, who passed on to him a love of Homer, science and geography. At 16 he ruled the kingdom while his father was away; at 18 he commanded the cavalry at Chaeronea. He came to the throne at <b>20</b> (336 BC), quickly crushed the rebels (he destroyed Thebes in 335 BC) and in <b>334 BC</b> crossed the Hellespont with about 40,000 men: Macedonians, allied Greeks, Thracians.</p>
<p>His declared aim was to avenge Xerxes' Persian invasion and free the Greeks of Asia. But the campaign soon took on a new dimension: the conquest of the Persian Empire.</p>`
    },
    {
      type: "3d",
      title: "3D map: Alexander's march (334-323 BC)",
      scene: "spacetime",
      caption: "The base is a map from the Aegean to India, the height is time (336-320 BC). Tap the events to see the stages of the conquest.",
      options: {
        lat: [24, 44],
        lon: [20, 78],
        years: [-337, -320],
        places: [
          { lat: 40.76, lon: 22.52, label: "Pella" },
          { lat: 32.5, lon: 44.4, label: "Babylon" },
          { lat: 29.9, lon: 52.9, label: "Persepolis" },
          { lat: 31.2, lon: 29.9, label: "Alexandria" }
        ],
        events: [
          { id: "pella", lat: 40.76, lon: 22.52, year: -336, label: "Alexander becomes king", html: "On the death of Philip II, Alexander (aged 20) becomes king of Macedon. He crushes the revolts in Greece.", causes: [] },
          { id: "granico", lat: 40.2, lon: 27.3, year: -334, label: "Granicus", html: "Spring 334 BC: first battle against the Persian satraps; Macedonian victory and control of Asia Minor.", causes: ["pella"] },
          { id: "isso", lat: 36.8, lon: 36.2, year: -333, label: "Issus", html: "In 333 BC Alexander defeats the Persian king Darius III, who flees leaving his family behind.", causes: ["granico"] },
          { id: "tiro", lat: 33.27, lon: 35.2, year: -332, label: "Siege of Tyre", html: "After seven months, in 332 BC, Alexander takes Tyre by building a causeway out to the island.", causes: ["isso"] },
          { id: "egitto", lat: 31.2, lon: 29.9, year: -331, label: "Egypt and Alexandria", html: "The Egyptians welcome him as a liberator from the Persians. In 331 BC he founds <b>Alexandria</b>, which will become the capital of Hellenistic culture.", causes: ["tiro"] },
          { id: "gaugamela", lat: 36.4, lon: 43.3, year: -331, label: "Gaugamela", html: "On 1 October 331 BC, the decisive victory over Darius III. Alexander enters Babylon, then Susa.", causes: ["egitto"] },
          { id: "persepoli", lat: 29.93, lon: 52.9, year: -330, label: "Persepolis", html: "In 330 BC Alexander takes Persepolis, the ceremonial capital, and its palace is burned. Darius III is murdered by his own men.", causes: ["gaugamela"] },
          { id: "battriana", lat: 36.7, lon: 67.1, year: -329, label: "Bactria and Sogdiana", html: "Between 329 and 327 BC, hard campaigns in Central Asia. He marries the princess Roxana.", causes: ["persepoli"] },
          { id: "idaspe", lat: 32.7, lon: 73.4, year: -326, label: "Hydaspes", html: "In 326 BC he defeats the Indian king Porus on the river Hydaspes. On the borders of India the exhausted army refuses to go on.", causes: ["battriana"] },
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -323, label: "Death in Babylon", html: "June 323 BC: Alexander dies in Babylon, aged 32 (of a fever, perhaps malaria or typhoid; the cause remains uncertain). The empire has no adult heir.", causes: ["idaspe"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. The conquests: from the Granicus to India",
      html: `<p>The conquest proceeded in stages:</p>
<ul>
<li><b>334 BC Granicus</b>: victory over the Persian satraps and control of Asia Minor.</li>
<li><b>333 BC Issus</b>: the Persian king <b>Darius III</b> is defeated in Cilicia and flees.</li>
<li><b>332 BC</b>: siege and destruction of <b>Tyre</b>, then <b>Egypt</b> surrenders without a fight; at the oasis of Siwa the priests hail him as the son of Ammon (the Egyptian Zeus).</li>
<li><b>331 BC Gaugamela</b>: another victory against a much larger Persian army; Alexander is now the «Great King» of Persia.</li>
<li><b>330 BC</b>: Persepolis is burned; Darius III is killed by one of his satraps.</li>
<li><b>329-327 BC</b>: Bactria and Sogdiana (Afghanistan and Central Asia): a very tough guerrilla war.</li>
<li><b>326 BC</b>: north-western India, victory over Porus at the <b>Hydaspes</b>; then, on the river Hyphasis, the army refuses to go any further.</li>
<li><b>325-324 BC</b>: return through the Gedrosian desert (with heavy losses); at Susa he holds mass weddings between Macedonians and Persian women to merge the two elites.</li>
<li><b>323 BC</b>: he dies in <b>Babylon</b>, aged 32, while preparing new expeditions.</li>
</ul>
<p><b>How did he do it?</b> With a trained and loyal army, excellent cavalry, skilful tactics (he attacked the weakest point, often leading his men in person), great personal courage and ... the weakness of the Persian Empire, huge but poorly united. The cost was enormous: cities destroyed, hundreds of thousands dead, executions even of his most loyal followers.</p>`
    },
    {
      type: "svg",
      title: "Alexander's empire (diagram)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<path d="M40 170 L70 150 L120 160 L130 190 L90 210 L50 200 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="85" y="185" font-size="14" text-anchor="middle" fill="#0f172a">Greece</text>
<path d="M150 150 L300 120 L420 130 L500 160 L520 220 L400 250 L250 240 L160 210 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="330" y="190" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">ALEXANDER'S EMPIRE</text>
<polyline points="90,175 170,170 230,160 280,190 330,200 400,170 490,160" fill="none" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<g fill="#dc2626"><circle cx="90" cy="175" r="6"/><circle cx="170" cy="170" r="6"/><circle cx="230" cy="160" r="6"/><circle cx="280" cy="190" r="6"/><circle cx="330" cy="200" r="6"/><circle cx="400" cy="170" r="6"/><circle cx="490" cy="160" r="6"/></g>
<g font-size="14" fill="#0f172a" text-anchor="middle"><text x="170" y="150">Issus</text><text x="230" y="140">Egypt</text><text x="280" y="215">Babylon</text><text x="400" y="150">Persepolis</text><text x="490" y="145">India</text></g>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#7c2d12">334 BC – 323 BC: about 11 years of campaigning, over 20,000 km travelled</text>
</svg>`,
      caption: "A very simplified map of the route; the dashed line shows the march eastwards."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Alexander",
      questions: [
        { type: "mc", q: "Who was Alexander's teacher?", options: ["Aristotle", "Plato", "Socrates"], answer: 0, explain: "Aristotle, the Greek philosopher." },
        { type: "mc", q: "In which battle did Alexander finally defeat Darius III?", options: ["Gaugamela", "Marathon", "Hydaspes"], answer: 0, explain: "At Gaugamela in 331 BC." },
        { type: "tf", q: "Alexander died in Babylon at the age of 32.", answer: true, explain: "In June 323 BC." },
        { type: "text", q: "Which Egyptian city did he found in 331 BC?", answer: ["alexandria", "alexandria in egypt"], explain: "Alexandria, on the coast of the Nile Delta." }
      ]
    },
    {
      type: "decision",
      title: "On the river Hyphasis, 326 BC: forward or back?",
      html: `<p>You are Alexander. Your army has marched thousands of kilometres in eight years and has fought in the monsoon rains. Ahead, beyond the river Hyphasis, lie more Indian kingdoms and, it is said, an army with hundreds of elephants. The soldiers are tired and sick, and they want to see their homeland again. Your general Coenus speaks for them all: «let us go back».</p>`,
      question: "What do you decide?",
      options: [
        { label: "Keep going east at any cost, even against the army's will.", outcome: "You risk a mutiny: without the troops' consent, even a semi-divine king cannot command. Your prestige and your life would be in danger." },
        { label: "Give in and turn back, founding new cities and consolidating the empire.", outcome: "You save the army and can organise the territory, even though you give up the dream of reaching the «Eastern Ocean». But the return is very hard: many soldiers die in the Gedrosian desert." },
        { label: "Dismiss the army and carry on with local volunteers.", outcome: "You risk losing the Macedonian military core and finding yourself surrounded by hostile peoples." }
      ],
      answer: 1,
      explain: "After three days shut in his tent, Alexander had to give in: on the river <b>Hyphasis</b> (today's Beas) the army refused to go on. He had twelve altars built and turned back. Even the greatest commanders depend on the consent of those who follow them."
    },
    {
      type: "text",
      title: "4. After Alexander: the Diadochi and the Hellenistic kingdoms",
      html: `<p>Alexander died without a suitable heir (his son Alexander IV was born after his death). His generals, the <b>Diadochi</b> («successors»), fought over the empire in long wars, and after the battle of <b>Ipsus</b> (301 BC) three great kingdoms emerged, later joined by others:</p>
<ul>
<li><b>Ptolemaic Kingdom</b> (Egypt): founded by <b>Ptolemy I</b>, capital <b>Alexandria</b>. It lasted until the death of <b>Cleopatra VII</b> (30 BC), its last queen, when Rome annexed it.</li>
<li><b>Seleucid Empire</b> (Syria, Mesopotamia, Persia): founded by <b>Seleucus I</b>, capital Antioch; the largest, but the hardest to hold together.</li>
<li><b>Antigonid Kingdom</b> (Macedon and Greece): more traditional, close to Rome.</li>
<li>Others: the kingdom of <b>Pergamon</b> (the Attalids), the Greco-Bactrian kingdom (Afghanistan), the kingdom of Syracuse.</li>
</ul>
<p>These kingdoms were <b>absolute monarchies</b>: the king was military leader and judge, and was sometimes worshipped as a god. They fought constant wars against each other for control of territories such as Syria. The old Greek poleis, smaller and weaker than ever, formed leagues (such as the Achaean League and the Aetolian League) to resist.</p>`
    },
    {
      type: "text",
      title: "5. What is Hellenism?",
      html: `<p>The term <b>Hellenism</b> (coined in German by Droysen in the 19th century) refers to the period from the death of Alexander (323 BC) to the Roman conquest of Egypt (30 BC), and to the culture that characterises it: a <b>Greek civilisation that expanded and blended</b> with Eastern cultures.</p>
<ul>
<li><b>A common language</b>: the <b>koine</b>, a simplified Greek spoken and written from Egypt to Persia. The New Testament would also be written in koine.</li>
<li><b>New cities</b>: Alexander and his successors founded dozens of cities with Greek names (the Alexandrias, the Antiochs, the Seleucias) with gymnasia, theatres, temples and markets. A new Greek elite governed local populations.</li>
<li><b>A meeting of cultures</b>: the cult of Isis and Serapis, the Greco-Buddhist art of Gandhara (faces of the Buddha with Greek features), the blending of deities.</li>
<li><b>Cosmopolitanism</b>: after the crisis of the polis, people no longer felt like «citizens of a city» but <b>citizens of the world</b> (<i>kosmopolítes</i>).</li>
<li><b>Economy</b>: large-scale trade and shared currencies, sea routes and caravans as far as India and China.</li>
</ul>
<p>Not everyone benefited, however: the Greeks were in charge, and local people often remained on the margins. And there were revolts, such as that of the Maccabees in Judea against the Seleucid king Antiochus IV (167 BC).</p>`
    },
    {
      type: "text",
      title: "6. Hellenistic science, philosophy and art",
      html: `<p>The Hellenistic kings funded culture for the sake of prestige. The centre was <b>Alexandria in Egypt</b>, with the <b>Museum</b> (a research institute) and the <b>Library</b>, which aimed to collect every book in the world (estimates speak of hundreds of thousands of scrolls). The <b>Lighthouse</b> of Alexandria (c. 280 BC, over 100 metres tall) was one of the Seven Wonders of the World.</p>
<ul>
<li><b>Mathematics</b>: <b>Euclid</b> wrote the <i>Elements</i> (c. 300 BC), the geometry textbook used for over two thousand years. <b>Archimedes</b> of Syracuse (287-212 BC) calculated areas and volumes and discovered the law of the lever and the principles of hydrostatics («Eureka!»).</li>
<li><b>Astronomy and geography</b>: <b>Aristarchus of Samos</b> proposed that the Earth revolves around the Sun. <b>Eratosthenes</b> measured the Earth's circumference (about 40,000 km) using the shadow of a stick at Syene and at Alexandria. <b>Hipparchus</b> catalogued the stars.</li>
<li><b>Medicine</b>: Herophilus and Erasistratus studied anatomy and the nervous system.</li>
<li><b>Philosophy</b>: <b>Stoicism</b> (Zeno: live according to reason and nature, accept fate), <b>Epicureanism</b> (Epicurus: inner peace, <i>ataraxia</i>), <b>Scepticism</b>, <b>Cynicism</b>. They seek individual happiness in a large and uncertain world.</li>
<li><b>Art</b>: more dramatic and realistic: the <b>Laocoön</b>, the <b>Winged Victory of Samothrace</b>, the <b>Venus de Milo</b>; realistic portraits, scenes of everyday life.</li>
<li><b>Literature</b>: philology (the study of texts) is born, along with the refined poetry of Callimachus and Theocritus.</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: measuring the Earth with a stick",
      html: `<p><b>Eratosthenes</b>, head of the Library of Alexandria (c. 240 BC), learned that at Syene (today's Aswan), at noon on the day of the summer solstice, the Sun lights up the bottom of a well (it is directly overhead). At Alexandria, at the same moment, a vertical stick casts a shadow: the angle is about <b>7.2°</b>, that is 1/50 of a full circle.</p>
<ol>
<li>If 7.2° corresponds to the distance from Alexandria to Syene (about 5,000 stadia),</li>
<li>then the whole circumference is 50 times as much: 250,000 stadia.</li>
<li>Using the most likely length of a stadion (about 157-185 m), we get about <b>40,000-46,000 km</b>: within 15% of the true value (40,075 km).</li>
</ol>
<p>With basic geometry, a stick and a brilliant idea, the planet was measured. You can repeat the experiment with a friend in another city and a gnomon!</p>`
    },
    {
      type: "example",
      title: "Worked example: Greek words we use today",
      html: `<p>The koine and Hellenistic science left us a huge vocabulary: <b>geometry</b> (measuring the earth), <b>library</b> (Italian <i>biblioteca</i>, from Greek <i>bibliothḗkē</i>), <b>museum</b> (house of the Muses), <b>philology</b>, <b>cosmopolitan</b>, <b>gymnasium</b>. When we call someone <b>«epicurean»</b> (devoted to pleasure) or <b>«stoic»</b> (unmoved by emotion) we are using words from the Hellenistic schools, though often with a different meaning: for Epicurus, pleasure was above all peace of mind, not luxury!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The Gordian knot",
      html: `<p>At Gordium, in Phrygia, an oracle said that whoever untied an incredibly tangled knot, which tied a cart to its yoke, would become lord of Asia. According to legend, Alexander, unable to untie it, <b>cut it with his sword</b>. Hence the expression «to cut the Gordian knot»: to solve a difficult problem with one decisive action.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The lost tomb",
      html: `<p>Alexander's body was taken to Egypt by Ptolemy I and buried in Alexandria, where for centuries the tomb was visited by Roman emperors (Augustus, Caracalla). Then all trace of it was lost: despite many searches, nobody has ever found the tomb. It is one of the great mysteries of archaeology.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand Hellenism",
      intro: "A civilisation that brings different worlds together: here are some analogies.",
      tabs: [
        {
          label: "🍲 The world soup",
          html: `<p>Imagine Hellenism as a big <b>soup</b>: the broth is <b>Greek culture</b> (language, philosophy, theatre, cities), to which ingredients from the East are added (Egyptian and Persian religions, Babylonian science, Indian art). The result is neither purely Greek nor purely Eastern: it is a <b>mixed</b> culture.</p>
<p>Example: an Indo-Greek king of Bactria, Menander (2nd century BC), talks with a Buddhist monk in a famous text, the «Milindapañha». A coin with Greek writing on one side and Indian on the other: an object that speaks two languages.</p>`
        },
        {
          label: "🏛️ Before and after Alexander",
          html: `<table>
<tr><th></th><th>Before (classical polis)</th><th>After (Hellenistic Age)</th></tr>
<tr><td>State</td><td>Small polis of citizens</td><td>Large kingdom with a king</td></tr>
<tr><td>Citizen</td><td>Takes part in political life</td><td>Subject, often far from power</td></tr>
<tr><td>Philosophy</td><td>Politics and public virtue</td><td>Individual happiness and cosmopolitanism</td></tr>
<tr><td>Culture</td><td>Mainly Greek</td><td>Mixed Greek and Eastern</td></tr>
<tr><td>Language</td><td>Greek dialects</td><td>Common koine</td></tr>
</table>`
        },
        {
          label: "🗺️ Spin the globe",
          html: `<p>Rotate the globe and follow Alexander's march and the great Hellenistic cities.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 40.76, lon: 22.52, label: "Pella", color: "#2563eb" },
              { lat: 36.8, lon: 36.2, label: "Issus", color: "#ef4444" },
              { lat: 31.2, lon: 29.9, label: "Alexandria", color: "#16a34a" },
              { lat: 36.4, lon: 43.3, label: "Gaugamela", color: "#ef4444" },
              { lat: 32.5, lon: 44.4, label: "Babylon", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persepolis", color: "#ef4444" },
              { lat: 32.7, lon: 73.4, label: "Hydaspes", color: "#ef4444" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6], color: "#dc2626" }]
          }
        },
        {
          label: "📅 Timeline",
          html: `<p>Scroll through the life of Alexander and his successors.</p>`,
          widget: "timeline",
          options: {
            unit: "years",
            events: [
              { year: -356, label: "Alexander is born", icon: "👶" },
              { year: -338, label: "Chaeronea", icon: "⚔️" },
              { year: -334, label: "Granicus", icon: "🏇" },
              { year: -331, label: "Gaugamela, Alexandria", icon: "🏛️" },
              { year: -326, label: "Hydaspes", icon: "🐘" },
              { year: -323, label: "Death of Alexander", icon: "🕯️" },
              { year: -301, label: "Ipsus, Hellenistic kingdoms", icon: "👑" },
              { year: -146, label: "Rome destroys Corinth", icon: "🦅" },
              { year: -30, label: "End of Ptolemaic Egypt", icon: "🏺" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: from Philip to Hellenism",
      nodes: [
        { id: "filippo", label: "Philip II", x: 50, y: 6, color: "#0ea5e9", html: "Strengthens the army and the state; wins at Chaeronea (338 BC).", why: "The poleis were exhausted and divided; Philip combined diplomacy, money from the mines and a new army with the sarissa." },
        { id: "alessandro", label: "Alexander", x: 22, y: 30, color: "#ef4444", html: "Conquers the Persian Empire (334-323 BC).", why: "He inherited a ready army and a Panhellenic dream; Persian weakness and his own daring did the rest." },
        { id: "fusione", label: "Blending of cultures", x: 78, y: 30, color: "#16a34a", html: "The Susa weddings, new cities, adoption of Persian customs.", why: "To rule different peoples, Alexander tried to unite the Greco-Macedonian and Persian elites; many Macedonians, however, did not accept this." },
        { id: "diadochi", label: "Wars of the Diadochi", x: 50, y: 52, color: "#f97316", html: "The generals fight over the empire (323-301 BC).", why: "The empire was too vast and too personal: without an adult heir, the generals divided it up." },
        { id: "regni", label: "Hellenistic kingdoms", x: 20, y: 75, color: "#7c3aed", html: "Ptolemies, Seleucids, Antigonids, Pergamon.", why: "Monarchies based on professional armies and Greek officials, who governed local populations: they were large but unstable." },
        { id: "cultura", label: "Hellenistic culture", x: 80, y: 75, color: "#eab308", html: "Koine, science, philosophies, mixed art.", why: "Kings funded research for prestige; the common language and the new cities made it easier to exchange ideas over a vast area." },
        { id: "roma", label: "Roman conquest", x: 50, y: 95, color: "#334155", html: "Macedon 168, Corinth 146, Pergamon 133, Egypt 30 BC.", why: "The kingdoms, weakened by internal wars, fell one after another to Rome, which inherited their culture." }
      ],
      edges: [
        ["filippo", "alessandro", "prepares the way for"],
        ["alessandro", "fusione", "promotes the"],
        ["alessandro", "diadochi", "leaves behind the"],
        ["diadochi", "regni", "create the"],
        ["fusione", "cultura", "feeds"],
        ["regni", "cultura", "fund"],
        ["regni", "roma", "fall to the"],
        ["cultura", "roma", "inherited by"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Hellenism",
      questions: [
        { type: "mc", q: "What is the koine?", options: ["The common Greek language of the Hellenistic Age", "A type of ship", "An assembly"], answer: 0, explain: "A simplified Greek used throughout the empire." },
        { type: "mc", q: "Where was the Museum with the great library?", options: ["Alexandria", "Athens", "Pergamon"], answer: 0, explain: "Alexandria in Egypt, capital of the Ptolemies." },
        { type: "tf", q: "Eratosthenes measured the Earth's circumference quite accurately.", answer: true, explain: "Using the shadow of a stick at Syene and Alexandria." },
        { type: "mc", q: "Which dynasty ruled Egypt after Alexander?", options: ["The Ptolemies", "The Seleucids", "The Antigonids"], answer: 0, explain: "Founded by Ptolemy I." }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Philip II</b> (359-336 BC) unites Greece under Macedon (Chaeronea, 338). <b>Alexander</b> (356-323 BC) conquers the Persian Empire: Granicus, Issus, Gaugamela, India.</li>
<li>After Alexander's death, the <b>Diadochi</b> divide up the empire: <b>Ptolemies</b>, <b>Seleucids</b>, <b>Antigonids</b>.</li>
<li><b>Hellenism</b>: Greek culture expanded and blended with Eastern culture, the koine, cosmopolitanism.</li>
<li>Alexandria: the Museum, the Library, the Lighthouse. <b>Euclid</b>, <b>Archimedes</b>, <b>Eratosthenes</b>, <b>Aristarchus</b>.</li>
<li>End of Hellenism: the Roman conquest (Macedon 168/146, Egypt 30 BC).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Sarissa", d: "Long spear of the Macedonian foot soldiers." },
    { t: "Macedonian phalanx", d: "Tight infantry formation armed with sarissas." },
    { t: "League of Corinth", d: "Alliance of the poleis under the leadership of Philip II." },
    { t: "Diadochi", d: "The generals who succeeded Alexander." },
    { t: "Hellenism", d: "Greek civilisation extended and blended with Eastern cultures (323-30 BC)." },
    { t: "Koine", d: "Common Greek spoken throughout the Hellenistic world." },
    { t: "Cosmopolitanism", d: "Feeling like a citizen of the world and not just of one polis." },
    { t: "Museum", d: "Research institute in Alexandria." },
    { t: "Stoicism", d: "Philosophy that urges people to live according to reason and nature." },
    { t: "Epicureanism", d: "Philosophy that seeks peace of mind by avoiding pain." },
    { t: "Satrap", d: "Governor of a Persian province." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which battle of 338 BC gave Philip II control of Greece?", options: ["Chaeronea", "Marathon", "Gaugamela"], answer: 0, explain: "Chaeronea, against Athens and Thebes." },
      { type: "mc", q: "Who was Alexander's teacher?", options: ["Aristotle", "Plato", "Euclid"], answer: 0, explain: "Aristotle." },
      { type: "tf", q: "Alexander conquered the Persian Empire in just a few years.", answer: true, explain: "Between 334 and 330 BC he conquered most of the empire." },
      { type: "text", q: "What are the generals who divided up the empire after Alexander's death called?", answer: ["diadochi", "the diadochi", "diadochoi"], explain: "The Diadochi, «successors»." },
      { type: "mc", q: "Which city founded by Alexander became a cultural capital?", options: ["Alexandria in Egypt", "Antioch", "Pella"], answer: 0, explain: "With the Museum and the Library." },
      { type: "mc", q: "Which scientist from Syracuse studied the lever and hydrostatics?", options: ["Archimedes", "Euclid", "Eratosthenes"], answer: 0, explain: "Archimedes (287-212 BC)." },
      { type: "order", q: "Put in chronological order.", items: ["Chaeronea", "Granicus", "Gaugamela", "Death of Alexander", "Battle of Ipsus"], explain: "338, 334, 331, 323, 301 BC." },
      { type: "mc", q: "Which of the following was NOT a Hellenistic kingdom?", options: ["The Roman Empire", "The Ptolemaic Kingdom", "The Seleucid Empire"], answer: 0, explain: "Rome was a different power." },
      { type: "num", q: "How old was Alexander the Great when he died?", answer: 32, tol: 1, explain: "He was born in 356 and died in 323 BC, at about 32." },
      { type: "tf", q: "Hellenism was simply the spread of Greek culture, without Eastern influences.", answer: false, explain: "It was a meeting and blending of cultures." },
      { type: "mc", q: "With what geometric method did Eratosthenes measure the Earth?", options: ["With the shadow of a stick in two cities", "With a telescope", "With a compass"], answer: 0, explain: "He compared the angle of the shadow at Alexandria and at Syene." }
    ]
  }
});
