TOPIC('en', {
  id: "l3-fil-nascita-presocratici",
  title: "The birth of philosophy and the Presocratics",
  intro: "Why does thunder crash? For the archaic Greeks the answer was simple: Zeus is angry. Then, around the 6th century BC, in <b>Miletus</b>, someone began to answer in a different way: by looking for <b>natural causes</b> that could be explained by reason and discussed by everyone. <b>Philosophy</b> (\"love of wisdom\") was born. In this lesson you will meet the first thinkers, the so-called <b>Presocratics</b>, and the problem that obsessed them: <i>what is reality made of, and why does everything change?</i>",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. From myth to logos",
      html: `<p>Before philosophy, the Greeks explained the world through <b>myth</b>: stories about the gods (in Homer and Hesiod) that give a reason for natural phenomena and customs. Myth is not "stupid": it is a story that gives people their bearings, but it is accepted through tradition and not questioned.</p>
<p>The move to <b>logos</b> ("speech", "reason") took place in the Greek colonies of Asia Minor and southern Italy. Why there, of all places? Some favourable conditions (which historians put forward as plausible hypotheses):</p>
<ul>
<li><b>trade and contacts</b> with Egypt and the East: knowledge of astronomy and geometry could be compared;</li>
<li>a religion <b>with no sacred book and no priestly caste</b> to impose dogmas;</li>
<li>the life of the <b>polis</b>: laws were discussed in public, so ideas could be discussed too;</li>
<li>a society of merchants and craftsmen with free time and curiosity (<i>scholé</i>, "leisure").</li>
</ul>
<p>The philosophers looked for the <b>archè</b> (<i>arché</i>): the "principle", that from which everything comes and to which everything returns, and which remains beneath change. It is a question about unity within multiplicity. Of these thinkers only a few <b>fragments</b> survive, along with reports by later authors (above all Aristotle): this is why every reconstruction involves some degree of uncertainty.</p>`
    },
    {
      type: "decision",
      title: "Miletus, 6th century BC: why did the storm break?",
      html: `<p>You are a young merchant in Miletus. From the harbour you watch a violent storm arrive and sink a boat. Everyone says: "The gods are angry". But a friend of yours, who has travelled to Egypt and observed the floods of the Nile, tells you: "Perhaps there is a natural cause that we can study".</p>`,
      question: "Which path do you choose to understand what happened?",
      options: [
        { label: "I make a sacrifice and rely on tradition.", outcome: "It reassures the community, but explains nothing: next time the storm will be just as unpredictable." },
        { label: "I observe the phenomena, look for regular patterns and propose an explanation that others can criticise.", outcome: "This is the move made by the first philosophers: an explanation based on causes within the world itself, which can be discussed and corrected." },
        { label: "I give up: the world is too mysterious.", outcome: "It is understandable, but it blocks inquiry. The Greeks were convinced that the world had an order (kosmos) that could be known." }
      ],
      answer: 1,
      explain: "What was new about the first philosophers was not that they made no mistakes (many of their explanations seem naive to us today), but their method: explaining nature through nature and submitting their theses to rational discussion."
    },
    {
      type: "text",
      title: "2. The Ionian physicists: Thales, Anaximander, Anaximenes",
      html: `<p>In <b>Miletus</b>, an Ionian city on the coast of present-day Turkey, the school known as the <b>Ionian</b> or Milesian school was born.</p>
<ul>
<li><b>Thales</b> (c. 624-546 BC): considered the first philosopher. For him the principle is <b>water</b> (as Aristotle reports). He was also a mathematician and astronomer: according to tradition he predicted the eclipse of 585 BC.</li>
<li><b>Anaximander</b> (c. 610-546 BC): the principle is the <b><i>apeiron</i></b>, the "boundless", an indeterminate and infinite reality from which the opposites (hot and cold, dry and wet) arise by separation. According to tradition, he was the first to use the term "archè" in this sense.</li>
<li><b>Anaximenes</b> (6th century BC): the principle is <b>air</b>, which by rarefaction becomes fire and by condensation wind, clouds, water, earth and stone. He explains change through a natural process: quantity becomes quality.</li>
</ul>
<p>Why did they choose such different principles? Because each one was trying to answer a problem: how can <i>many</i> things come from <i>one</i> substance? Anaximander noticed that if the principle were one of the elements (water, for example), it would cancel out its opposite (fire): so something indeterminate was needed, something that is not one of the opposites.</p>`
    },
    {
      type: "3d",
      title: "3D map: where philosophy was born",
      scene: "spacetime",
      caption: "Base: the eastern Mediterranean and southern Italy; height: time (6th-5th century BC). Tap the events to read causes and effects. Dates are approximate.",
      options: {
        lat: [34, 44],
        lon: [10, 32],
        years: [-650, -350],
        places: [
          { lat: 37.5, lon: 27.3, label: "Miletus" },
          { lat: 37.9, lon: 27.3, label: "Ephesus" },
          { lat: 39.1, lon: 17.1, label: "Croton" },
          { lat: 40.2, lon: 15.2, label: "Elea" },
          { lat: 40.9, lon: 25.0, label: "Abdera" },
          { lat: 38.0, lon: 23.7, label: "Athens" }
        ],
        events: [
          { id: "e1", lat: 37.5, lon: 27.3, year: -585, label: "Thales and water", html: "In Miletus Thales proposes that everything derives from water: the first explanation of nature through a natural principle." },
          { id: "e2", lat: 37.5, lon: 27.3, year: -550, label: "Anaximander: the apeiron", html: "The principle becomes the boundless, from which the opposites separate.", causes: ["e1"] },
          { id: "e3", lat: 39.1, lon: 17.1, year: -530, label: "Pythagoras in Croton", html: "Pythagoras, originally from Samos, founds a philosophical and religious community in Croton: the principle is number.", causes: ["e1"] },
          { id: "e4", lat: 37.9, lon: 27.3, year: -500, label: "Heraclitus in Ephesus", html: "For Heraclitus everything flows and fire is the symbol of becoming.", causes: ["e2"] },
          { id: "e5", lat: 40.2, lon: 15.2, year: -480, label: "Parmenides in Elea", html: "Parmenides states that being is motionless and becoming is appearance.", causes: ["e3", "e4"] },
          { id: "e6", lat: 40.9, lon: 25.0, year: -430, label: "Democritus and the atoms", html: "Building on Leucippus, Democritus explains everything through atoms and void.", causes: ["e5"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Pythagoras and numbers",
      html: `<p><b>Pythagoras</b> (born in Samos in the 6th century BC, active in Croton) founded a community that was partly a school and partly a religious sect, with rules of life, study and even secrecy. What we know about him is mixed with legend: this is why we speak of the <b>Pythagoreans</b> rather than of doctrines that certainly belong to Pythagoras himself.</p>
<p>Their characteristic thesis: <b>"everything is number"</b>. They observed that harmonious sounds correspond to simple numerical ratios (an octave corresponds to the ratio 2:1, a fifth to 3:2, a fourth to 4:3): if even music has a mathematical structure, perhaps the cosmos too is ordered by numbers. The world is therefore a <b>cosmos</b>, a word that means "order". They studied mathematics as a way of purifying the soul, and they also believed in <b>metempsychosis</b> (the transmigration of souls).</p>
<p>Tradition links the Pythagorean school to the theorem that bears Pythagoras' name (in a right-angled triangle the square on the hypotenuse equals the sum of the squares on the other two sides), but the property was already known to the Babylonians and others; the Pythagoreans probably gave a proof of it.</p>`
    },
    {
      type: "svg",
      title: "Harmony and ratios",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e1b4b">The Pythagorean strings</text>
<line x1="60" y1="80" x2="540" y2="80" stroke="#7c3aed" stroke-width="6"/>
<text x="560" y="86" font-size="14" fill="#1e1b4b">1</text>
<line x1="60" y1="140" x2="300" y2="140" stroke="#0ea5e9" stroke-width="6"/>
<text x="320" y="146" font-size="14" fill="#1e1b4b">1/2 : octave (2:1)</text>
<line x1="60" y1="190" x2="380" y2="190" stroke="#16a34a" stroke-width="6"/>
<text x="400" y="196" font-size="14" fill="#1e1b4b">2/3 : fifth (3:2)</text>
<line x1="60" y1="240" x2="420" y2="240" stroke="#f59e0b" stroke-width="6"/>
<text x="440" y="246" font-size="14" fill="#1e1b4b">3/4 : fourth (4:3)</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#334155">Strings whose lengths are in simple ratios give consonant sounds.</text>
</svg>`,
      caption: "Musical harmony has a mathematical basis: hence the idea that the cosmos is a numerical order."
    },
    {
      type: "quiz",
      title: "Mini-quiz: the first steps",
      questions: [
        { type: "mc", q: "What is meant by \"archè\"?", options: ["The original principle of all things", "A Greek deity", "A kind of poetry"], answer: 0, explain: "The archè is that from which everything comes and to which everything returns." },
        { type: "tf", q: "Anaximenes named air as the principle.", answer: true, explain: "Through rarefaction and condensation, air becomes all other things." },
        { type: "text", q: "What is the name of the principle proposed by Anaximander (\"the boundless\")?", answer: ["apeiron", "àpeiron", "the apeiron"], explain: "The apeiron." }
      ]
    },
    {
      type: "text",
      title: "4. Heraclitus: everything flows",
      html: `<p><b>Heraclitus of Ephesus</b> (c. 540-480 BC), called "the obscure" because of his enigmatic style, has come down to us in fragments. His theme is <b>becoming</b>: reality is in constant change. The formula <i>panta rhei</i> ("everything flows") is attributed to him, but it is a later summary of his thought, not a direct quotation; closer to the fragments is the famous comparison with a <b>river</b>: you cannot step into the same river twice, because other waters are always flowing.</p>
<p>Change, however, is not chaos. Behind it lies the <b><i>logos</i></b>, a common rational law that governs everything. Reality is made of <b>opposites</b> in tension (day and night, life and death, hot and cold), which turn into one another: this struggle is the hidden <b>harmony</b> of the world, like that of the bow and the lyre, stretched in opposite directions. The symbol of the principle is <b>fire</b>, which lives by consuming and transforming.</p>`
    },
    {
      type: "example",
      title: "An example from everyday life: a team and a river",
      html: `<p>A football team stays "the same team" for decades, but the players change, the coach changes, even the stadium may change. Just like Heraclitus' river: what remains is not the matter but the <b>form</b>, identity within the flow. Your body, too, constantly renews its cells, and yet you are still "you". Heraclitus invites us to see unity in transformation, not to deny change.</p>`
    },
    {
      type: "text",
      title: "5. Parmenides: being and not-being",
      html: `<p><b>Parmenides of Elea</b> (c. 515-450 BC), a Greek colony in southern Italy, answered in the opposite way. In his poem in hexameters he distinguishes two paths:</p>
<ul>
<li>the way of <b>truth</b> (<i>alétheia</i>): "being is and cannot not be; not-being is not and cannot be";</li>
<li>the way of <b>opinion</b> (<i>dóxa</i>): that of mortals, who believe in becoming and in multiplicity.</li>
</ul>
<p>From a seemingly obvious thesis, that "what is, is", Parmenides draws radical conclusions through deductive reasoning. If only being exists, and not-being does not exist, then being <b>is not born</b> (it would have to come from not-being, which is not), <b>does not die</b>, and is <b>one, motionless, continuous, eternal</b> and like a solid sphere. Birth, death, movement and plurality are therefore <b>appearances</b> of the senses, not truths of reason. For the first time <b>argumentative thinking</b> prevails over experience: this is the beginning of <b>ontology</b>, the study of being as being.</p>
<p>His pupil <b>Zeno</b> defended Parmenides with paradoxes against motion. In the most famous, <b>Achilles and the tortoise</b>, Achilles will never catch the tortoise because, whenever he reaches the place where she was, she has already moved a little further ahead. The paradox revealed the problems of the infinite (later solved with mathematics).</p>`
    },
    {
      type: "conceptMap",
      title: "Map: the problem of being and becoming",
      nodes: [
        { id: "arche", label: "Archè", x: 50, y: 6, color: "#7c3aed", html: "The single principle that explains the multiplicity of things.", why: "It comes from the conviction that the world is ordered (kosmos) and that behind the variety of phenomena there is something unified that reason can know." },
        { id: "ioni", label: "Ionian physicists", x: 18, y: 32, color: "#0ea5e9", html: "Thales (water), Anaximander (apeiron), Anaximenes (air).", why: "They look for a material principle: they are the first to explain nature without turning to the gods, opening the way to science." },
        { id: "pita", label: "Pythagoreans", x: 50, y: 34, color: "#16a34a", html: "Number as the structure of the cosmos.", why: "They discover that musical harmony can be expressed through ratios: the principle is form, not matter." },
        { id: "eraclito", label: "Heraclitus", x: 82, y: 32, color: "#f59e0b", html: "Becoming, opposites, logos, fire.", why: "He starts from experience: everything changes. To avoid falling into chaos he introduces the logos, the law that holds the opposites together." },
        { id: "parmenide", label: "Parmenides", x: 30, y: 62, color: "#ef4444", html: "Being is, not-being is not: being is motionless.", why: "He makes thinking rigorous: if not-being cannot be thought, birth and movement become unthinkable. He poses the problem that later philosophers will try to solve." },
        { id: "pluralisti", label: "Pluralists and atomists", x: 72, y: 62, color: "#14b8a6", html: "Empedocles, Anaxagoras, Democritus.", why: "They look for a middle way: many eternal principles (roots, seeds, atoms) that join and separate, so change is possible without anything coming from nothing." }
      ],
      edges: [
        ["arche", "ioni", "material answer"],
        ["arche", "pita", "formal answer"],
        ["arche", "eraclito", "becoming"],
        ["eraclito", "parmenide", "objection"],
        ["parmenide", "pluralisti", "challenge taken up"]
      ]
    },
    {
      type: "text",
      title: "6. The pluralists and Democritus",
      html: `<p>After Parmenides the question is: how can change be saved without admitting that something comes from nothing? The <b>pluralists</b> answer with several eternal principles that combine.</p>
<ul>
<li><b>Empedocles</b> of Akragas (Agrigento, 5th century BC): four eternal "roots", <b>earth, water, air, fire</b>, joined by <b>Love</b> (<i>Philía</i>) and separated by <b>Strife</b> (<i>Neîkos</i>).</li>
<li><b>Anaxagoras</b> of Clazomenae: infinite "seeds" and a <b>Mind</b> (<i>Nous</i>) that orders the cosmos. He lived in Athens and was Pericles' teacher.</li>
<li><b>Leucippus and Democritus</b> (Abdera, 5th-4th century BC): <b>atomism</b>. Reality is made of <b>atoms</b> (<i>átomos</i>, "indivisible"), eternal, invisible particles, identical in matter but different in shape, arrangement and position, which move in the <b>void</b>. The void is a "not-being" that in a certain sense exists (a correction to Parmenides), and so movement becomes possible. Everything happens through mechanical <b>necessity</b>, with no purpose and no gods intervening.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to remember",
      intro: "If the names get muddled, try one of these routes.",
      tabs: [
        {
          label: "🌊 Analogy: the river and the rock",
          html: `<p>Heraclitus is the river: everything flows. Parmenides is the rock: what is, is, and does not change. Democritus tries a compromise: sand made of eternal grains (atoms) that are constantly mixing. The grains are the rock; their movement is the river.</p>`
        },
        {
          label: "📋 Table of principles",
          html: `<table>
<tr><th>Philosopher</th><th>Principle</th></tr>
<tr><td>Thales</td><td>water</td></tr>
<tr><td>Anaximander</td><td>apeiron</td></tr>
<tr><td>Anaximenes</td><td>air</td></tr>
<tr><td>Pythagoreans</td><td>number</td></tr>
<tr><td>Heraclitus</td><td>fire / logos</td></tr>
<tr><td>Parmenides</td><td>being, one and motionless</td></tr>
<tr><td>Empedocles</td><td>four roots</td></tr>
<tr><td>Democritus</td><td>atoms and void</td></tr>
</table>`
        },
        {
          label: "⏳ Timeline",
          html: `<p>Approximate dates: the dating of the Presocratics is often uncertain.</p>`,
          widget: "timeline",
          options: { events: [
            { year: -585, label: "Thales (eclipse)", icon: "🌑" },
            { year: -530, label: "Pythagoras in Croton", icon: "🔺" },
            { year: -500, label: "Heraclitus", icon: "🔥" },
            { year: -470, label: "Parmenides", icon: "⚪" },
            { year: -440, label: "Empedocles", icon: "⚖️" },
            { year: -420, label: "Democritus", icon: "⚛️" }
          ], unit: "years" }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Did you know...?",
      html: `<p>Democritus' word "<b>atom</b>" has nothing to do with the atoms of modern chemistry: his were indivisible by definition and differed in shape, whereas today's atoms have a structure (protons, neutrons, electrons). But the basic idea, that matter is made of tiny parts moving in empty space, would return with modern science.</p>`
    },
    {
      type: "curiosity",
      title: "The philosopher in the well",
      html: `<p>A famous anecdote about Thales tells that, while he was gazing at the stars, he fell into a well, and a Thracian servant girl laughed at him for wanting to know the sky without seeing what was at his feet. Plato reports the anecdote in the <i>Theaetetus</i>. Aristotle, on the other hand, tells how Thales, foreseeing an excellent olive harvest, rented all the olive presses to show that philosophers could get rich if they wanted to.</p>`
    },
    {
      type: "example",
      title: "An example: explaining a rainbow",
      html: `<p>Today we know that a rainbow is produced by the refraction of light in water droplets. In Greek myth, instead, it was linked to Iris, the messenger of the gods. The move from myth to logos is exactly this: instead of asking "<i>who</i> sent it?", we ask "<i>how</i> is it produced, and <i>from what causes</i>?". Even when the first answer is wrong, the method makes it possible to correct it.</p>`
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Philosophy was born in the 6th century BC with the move from <b>myth to logos</b>.</li>
<li><b>Archè</b>: the principle of all things. Thales: water; Anaximander: apeiron; Anaximenes: air.</li>
<li><b>Pythagoreans</b>: everything is number and harmony.</li>
<li><b>Heraclitus</b>: becoming and logos; <b>Parmenides</b>: being is motionless and not-being is not.</li>
<li><b>Democritus</b>: atoms and void, a mechanical explanation.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: being and becoming",
      questions: [
        { type: "mc", q: "Who argued that being is motionless and becoming is appearance?", options: ["Parmenides", "Heraclitus", "Thales"], answer: 0, explain: "It is Parmenides' thesis." },
        { type: "tf", q: "For Democritus reality is made of atoms moving in the void.", answer: true, explain: "Atoms and void are the principles of atomism." },
        { type: "order", q: "Put in approximate chronological order.", items: ["Thales", "Pythagoras", "Heraclitus", "Democritus"], explain: "From the 6th to the 5th-4th century BC." }
      ]
    }
  ],
  glossary: [
    { t: "Archè", d: "The original principle from which all things derive." },
    { t: "Logos", d: "Word, speech, reason; for Heraclitus, the rational law that governs the cosmos." },
    { t: "Cosmos", d: "The world understood as order; in Greek \"order, beauty\"." },
    { t: "Apeiron", d: "Anaximander's \"boundless\", an indeterminate principle." },
    { t: "Becoming", d: "The continuous change of things." },
    { t: "Ontology", d: "The study of being as being, born with Parmenides." },
    { t: "Atom", d: "For Democritus, an indivisible and eternal particle of which reality is made." },
    { t: "Metempsychosis", d: "The transmigration of the soul from one body to another, believed in by the Pythagoreans." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What are the first philosophers looking for with the notion of archè?", options: ["The unifying principle of all things", "The names of the gods", "A written law for the polis"], answer: 0, explain: "They are looking for that from which everything is born and to which everything returns." },
      { type: "mc", q: "Which principle did Thales name?", options: ["Water", "Fire", "Air"], answer: 0, explain: "According to Aristotle, water." },
      { type: "tf", q: "For the Pythagoreans, numerical ratios explain musical harmony and the order of the cosmos.", answer: true, explain: "Hence the idea that \"everything is number\"." },
      { type: "text", q: "What is the name of the rational law that, for Heraclitus, governs becoming?", answer: ["logos", "the logos"], explain: "The logos." },
      { type: "mc", q: "What conclusion does Parmenides draw from the thesis that not-being is not?", options: ["Being is not born, does not die and is motionless", "Everything is constantly changing", "Reality is made of numbers"], answer: 0, explain: "Birth, death and movement would require not-being." },
      { type: "mc", q: "How does Democritus differ from Parmenides?", options: ["He accepts the void, so movement is possible", "He denies that atoms exist", "He identifies being with water"], answer: 0, explain: "The void allows the many atoms to move." },
      { type: "order", q: "Put in (approximate) order of time.", items: ["Thales", "Anaximander", "Heraclitus", "Democritus"], explain: "6th century: Thales and Anaximander; around 500 BC: Heraclitus; 5th-4th century: Democritus." },
      { type: "tf", q: "Zeno tried to defend Parmenides by presenting paradoxes about motion.", answer: true, explain: "Achilles and the tortoise is the most famous." },
      { type: "mc", q: "What are Empedocles' four roots?", options: ["Earth, water, air, fire", "Atoms, void, number, logos", "Mind, chaos, order, time"], answer: 0, explain: "Joined by Love and separated by Strife." }
    ]
  }
});
