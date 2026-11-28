TOPIC('en', {
  id: "l3-fil-aristotele",
  title: "Aristotle",
  intro: "If Plato looks upwards, to the world of Forms, <b>Aristotle</b> (who stands beside him in Raphael's famous fresco, pointing at the ground) looks at the world around us: plants, animals, cities, constitutions, poems. He was the first great <b>encyclopaedic thinker</b>: he invented <b>logic</b> and studied physics, biology, politics, ethics and poetry. For centuries he was simply called «the Philosopher». In this lesson you will discover how he built a system in which the Forms are not in another world, but <b>inside</b> things.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Life and works",
      html: `<p><b>Aristotle</b> was born in <b>Stagira</b> (Chalcidice) in 384 BC; his father was a physician at the Macedonian court. At 17 he arrived in Athens and entered Plato's <b>Academy</b>, where he stayed for about twenty years, until his teacher's death (348/347 BC). He then travelled (Assos, Lesbos, where he studied marine biology) and was summoned by King Philip to Pella to be <b>tutor to the young Alexander</b> (the future Alexander the Great). In <b>335 BC</b> he returned to Athens and founded his own school, the <b>Lyceum</b> (named after the temple of Apollo Lykeios), also called the <i>Peripatetic</i> school from «walking about» (<i>peripatéo</i>) during lessons. After Alexander's death (323 BC), because of anti-Macedonian hostility, he left Athens and withdrew to Chalcis, in Euboea, where he died in <b>322 BC</b>.</p>
<p>Of his early dialogues, written in a literary style, only fragments survive; what we have instead are the «<b>acroamatic</b>» writings, that is, lectures and notes for the school, later arranged by editors: the <i>Organon</i> (logic), <i>Physics</i>, <i>Metaphysics</i>, <i>Nicomachean Ethics</i>, <i>Politics</i>, <i>Poetics</i>, <i>Rhetoric</i>, <i>On the Soul</i>, and treatises on zoology.</p>`
    },
    {
      type: "decision",
      title: "335 BC: stay at the Academy or found the Lyceum?",
      html: `<p>You are Aristotle, back in Athens after years of travel and of teaching Alexander. The Academy is now led by others and continues the Platonic tradition, with lots of mathematics and the theory of Forms. You, on the other hand, have collected data on animal species and on the constitutions of cities (you will study 158 of them) and you think that knowledge starts from observation.</p>`,
      question: "What do you choose?",
      options: [
        { label: "I go back to the Academy and continue Plato's research.", outcome: "You would stay within the tradition, but it would be hard to pursue your criticism of separate Forms." },
        { label: "I found my own school, with a library and field research.", outcome: "This is Aristotle's choice: the Lyceum becomes a centre of empirical research and encyclopaedic knowledge." },
        { label: "I give up philosophy and devote myself to medicine.", outcome: "Your father was a physician, and biology interests you greatly: but you would not have built the system that influenced centuries." }
      ],
      answer: 1,
      explain: "In 335 BC Aristotle founded the Lyceum: one of the first organised centres of collective research, with collections of data, a library and specialisations. The Academy carried on alongside it, with a more mathematical and Platonic orientation."
    },
    {
      type: "text",
      title: "2. The critique of the Forms and substance",
      html: `<p>Aristotle criticises his teacher (the saying «Plato is dear to me, but truth is dearer» was attributed to him in a later form, but it conveys the idea): if the Forms exist in a separate world, how can they explain the things here below? It is not enough to say that things «participate» in the Forms: that is a metaphor, not an explanation. And doubling the world does not help, because you then have to explain the relationship between the two (the «third man» argument).</p>
<p>For Aristotle <b>forms</b> do not exist separately: they are <b>in things</b>. The fundamental reality is <b>substance</b> (<i>ousía</i>): the concrete individual, like this horse or this man. Every substance is a <b>synolon</b> (<i>sýnolon</i>, «compound whole») of two principles:</p>
<ul>
<li><b>matter</b> (<i>hýle</i>): what the thing is made of;</li>
<li><b>form</b> (<i>morphé</i>): what the thing is, its essence and structure.</li>
</ul>
<p>A statue is bronze (matter) with a certain shape (form): in a statue of Athena, the bronze could have taken other forms; the shape does not exist without the bronze. In the same way, the body is the matter and the soul is the form of a living being: for Aristotle the soul is not a separate entity, but the organising principle of the body (with an open question about the intellect).</p>
<p>The <b>categories</b> (in the <i>Organon</i>) are the ways in which being is said: substance, quantity, quality, relation, place, time, and others, up to ten.</p>`
    },
    {
      type: "text",
      title: "3. Actuality, potentiality and the four causes",
      html: `<p>How can <b>becoming</b> be explained, the issue that Heraclitus and Parmenides had argued over so much? With the pair <b>potentiality and actuality</b>:</p>
<ul>
<li><b>potentiality</b> (<i>dýnamis</i>): the capacity to become something (the seed is «potentially» a tree);</li>
<li><b>actuality</b> (<i>enérgeia</i>): the realisation of that capacity (the tree is the actuality of the seed).</li>
</ul>
<p>Change is the passage from potentiality to actuality: it does not come from nothing or from absolute non-being, but from something that was already there potentially. This is how Aristotle solves Parmenides' problem.</p>
<p>To explain anything, you have to identify its <b>four causes</b>:</p>
<table>
<tr><th>Cause</th><th>Question</th><th>Example: a statue</th></tr>
<tr><td><b>Material</b></td><td>What is it made of?</td><td>the bronze</td></tr>
<tr><td><b>Formal</b></td><td>What is it?</td><td>the shape (Athena)</td></tr>
<tr><td><b>Efficient</b></td><td>Who or what produces it?</td><td>the sculptor</td></tr>
<tr><td><b>Final</b></td><td>What is it for?</td><td>to honour the goddess, to adorn the temple</td></tr>
</table>
<p>In nature the <b>final cause</b> dominates: Aristotle has a <b>teleological</b> view (from <i>télos</i>, «end, purpose»): every being tends towards its own fulfilment; the seed tends to become a tree. This is a point on which modern science would take a different path.</p>`
    },
    {
      type: "svg",
      title: "The four causes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">One statue, four whys</text>
<rect x="20" y="55" width="260" height="95" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="150" y="85" font-size="16" font-weight="bold" text-anchor="middle" fill="#78350f">Material</text>
<text x="150" y="115" font-size="15" text-anchor="middle" fill="#0f172a">the bronze</text>
<rect x="320" y="55" width="260" height="95" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="450" y="85" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Formal</text>
<text x="450" y="115" font-size="15" text-anchor="middle" fill="#0f172a">the shape of Athena</text>
<rect x="20" y="170" width="260" height="95" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="150" y="200" font-size="16" font-weight="bold" text-anchor="middle" fill="#14532d">Efficient</text>
<text x="150" y="230" font-size="15" text-anchor="middle" fill="#0f172a">the sculptor at work</text>
<rect x="320" y="170" width="260" height="95" rx="10" fill="#fae8ff" stroke="#a21caf" stroke-width="2"/>
<text x="450" y="200" font-size="16" font-weight="bold" text-anchor="middle" fill="#701a75">Final</text>
<text x="450" y="230" font-size="15" text-anchor="middle" fill="#0f172a">to honour the goddess</text>
</svg>`,
      caption: "To explain a thing, Aristotle asks all four whys."
    },
    {
      type: "quiz",
      title: "Mini-quiz: substance and causes",
      questions: [
        { type: "mc", q: "What is the synolon?", options: ["The union of matter and form", "The world of Forms", "A form of government"], answer: 0, explain: "Every concrete substance is a synolon of matter and form." },
        { type: "tf", q: "For Aristotle forms exist in a world separate from things.", answer: false, explain: "They exist in things: this is his criticism of Plato." },
        { type: "text", q: "What is the name of the cause that answers «what is it for?»", answer: ["final", "final cause", "the final cause"], explain: "The final cause (télos)." }
      ]
    },
    {
      type: "example",
      title: "Example: potentiality and actuality in the kitchen",
      html: `<p>Flour, eggs and sugar are a cake <b>potentially</b>; the pastry chef is the efficient cause, the recipe the form, the enjoyment of whoever eats it the final cause. The baked cake is the <b>actuality</b>. But the cake too is potentially something else (crumbs, for example): every actuality is potentiality with respect to a later actuality, until we reach pure actuality.</p>`
    },
    {
      type: "text",
      title: "4. Logic and metaphysics",
      html: `<p>Aristotle founds <b>logic</b> as the tool (<i>órganon</i>) of every science. He studies the correct forms of reasoning. At its heart is the <b>syllogism</b>: an argument in which, given two premises, a conclusion follows necessarily. The classic example:</p>
<p style="text-align:center"><i>All men are mortal.<br>Socrates is a man.<br>Therefore Socrates is mortal.</i></p>
<p>The syllogism works thanks to the <b>middle term</b> (here «man»), which links subject and predicate. Aristotle also formulates the principles of all reasoning: the <b>principle of non-contradiction</b> (the same thing cannot, at the same time and in the same respect, both be and not be) and the principle of the excluded middle.</p>
<p><b>Metaphysics</b> (the term comes from the order of his writings, «after the physics») is the «science of being as being» or <i>first philosophy</i>. Being «is said in many ways», but all of them refer to <b>substance</b>. It also studies the supreme cause of motion.</p>
<p>Everything that moves is moved by something else; to avoid going back to infinity, Aristotle posits an <b>Unmoved Mover</b>: pure actuality, without matter, eternal, which moves the cosmos not by pushing it but by <b>attracting it as the object of love</b> (final cause). Its activity is «thought thinking itself» (<i>nóesis noéseos</i>). For Aristotle it is the foundation of cosmic order; it is not the personal creator God of the monotheistic religions.</p>`
    },
    {
      type: "text",
      title: "5. Physics and cosmology",
      html: `<p>For Aristotle nature (<i>physis</i>) is the totality of beings that have within themselves the principle of their own motion. «Motion» (<i>kínesis</i>) is any kind of change: of place, of quantity, of quality, of substance. The cosmos, finite and <b>geocentric</b>, has two regions:</p>
<ul>
<li><b>the sublunary world</b> (from the Moon downwards): earth, water, air, fire; here there is coming-to-be and passing-away. Each element has a <b>natural place</b>: heavy bodies move down towards the centre, fire rises;</li>
<li><b>the celestial world</b>: concentric crystalline spheres, made of a fifth element, <b>aether</b> (the <i>quintessence</i>), incorruptible, with eternal circular motion.</li>
</ul>
<p>This physics remained dominant until Galileo (17th century). Aristotle was also a careful observer in <b>biology</b>: he classified hundreds of animal species and described, for example, the development of the chick embryo.</p>`
    },
    {
      type: "text",
      title: "6. Ethics: happiness and the golden mean",
      html: `<p>In the <i>Nicomachean Ethics</i> (dedicated to his son Nicomachus, or to his father) Aristotle asks: what is the <b>end</b> of human action? The highest good, which everyone seeks for its own sake and not for the sake of something else, is <b>happiness</b> (<i>eudaimonía</i>). It is not pleasure or wealth, but <b>activity of the soul in accordance with virtue</b>: fulfilling the function proper to human beings, which is <b>reason</b>. External goods are also needed (health, friends, a certain prosperity): «one swallow does not make a spring».</p>
<p>The virtues are of two kinds:</p>
<ul>
<li><b>dianoetic</b> (intellectual): wisdom, understanding, and <b>practical wisdom</b> (<i>phrónesis</i>), which knows how to choose what is right in each situation;</li>
<li><b>ethical</b> (of character): courage, temperance, generosity, justice. They are acquired through <b>habit</b> (<i>éthos</i>): we become brave by doing brave acts.</li>
</ul>
<p>Every ethical virtue is a <b>golden mean</b> (<i>mesótes</i>) between two vices, one of excess and one of deficiency. Not an arithmetical average, but what is right «for us», in relation to the situation.</p>
<table>
<tr><th>Deficiency</th><th>Virtue</th><th>Excess</th></tr>
<tr><td>Cowardice</td><td><b>Courage</b></td><td>Recklessness</td></tr>
<tr><td>Insensibility</td><td><b>Temperance</b></td><td>Self-indulgence</td></tr>
<tr><td>Meanness</td><td><b>Generosity</b></td><td>Extravagance</td></tr>
</table>
<p>Against Socrates (for whom knowing the good was enough), Aristotle observes that you can know what is good and not do it (<i>akrasía</i>, weakness of will): character must be educated. The highest form of life is the <b>contemplative</b> one (<i>theoría</i>), the exercise of the intellect.</p>`
    },
    {
      type: "example",
      title: "Example: the golden mean on the pitch",
      html: `<p>Your teammate is attacked by a bigger opponent. If you run away out of fear you are <b>cowardly</b>; if you rush in throwing punches without thinking you are <b>reckless</b>; if you step in to defend him sensibly, calling the referee and placing yourself in between, you act with <b>courage</b>. There is no formula: it depends on the situation, and only practical wisdom can recognise it. That is why virtue is learnt through experience, the way you learn to play an instrument: by playing.</p>`
    },
    {
      type: "text",
      title: "7. Politics and poetics",
      html: `<p>«Man is by nature a <b>political animal</b>» (<i>zôon politikón</i>): he is born to live in a community. The <b>polis</b> comes before the individual as the whole comes before the part, because only within it can a good life be achieved. Aristotle studies 158 constitutions of Greek cities (the one of Athens has come down to us). He classifies governments according to who rules (one, few, many) and to their aim (the common good or the interest of the rulers):</p>
<table>
<tr><th>Who rules</th><th>Good form</th><th>Corrupt form</th></tr>
<tr><td>One</td><td>Monarchy</td><td>Tyranny</td></tr>
<tr><td>Few</td><td>Aristocracy</td><td>Oligarchy</td></tr>
<tr><td>Many</td><td>Polity</td><td>Democracy (demagogic)</td></tr>
</table>
<p>In practice the best, for him, is a <b>polity</b> with a strong middle class, which avoids the extremes of the very rich and the very poor. Unlike Plato, he defends private property and the family. However, he justified «natural» slavery and the inferiority of women: limits of his age that should not be ignored.</p>
<p>In the <i>Poetics</i>, analysing <b>tragedy</b>, he defines it as the imitation of a serious action which, by arousing pity and fear, brings about the <b>catharsis</b> (purification) of these emotions.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: Aristotle's system",
      nodes: [
        { id: "critica", label: "Critique of Plato", x: 50, y: 5, color: "#ef4444", html: "Forms are not separate from things.", why: "Aristotle wants to explain the concrete world, not double it: the starting point is experience." },
        { id: "sostanza", label: "Substance (synolon)", x: 20, y: 32, color: "#7c3aed", html: "Matter + form.", why: "It is concrete, individual reality: the Forms become forms immanent in things." },
        { id: "attopot", label: "Actuality and potentiality", x: 80, y: 32, color: "#0ea5e9", html: "Becoming as fulfilment.", why: "A reply to Parmenides: change does not come from nothing, but from a possibility already present (potentiality)." },
        { id: "cause", label: "Four causes", x: 12, y: 62, color: "#16a34a", html: "Material, formal, efficient, final.", why: "To truly know something you must answer all the «whys»; the final cause dominates (teleology)." },
        { id: "motore", label: "Unmoved Mover", x: 50, y: 62, color: "#f59e0b", html: "Pure actuality, thought thinking itself.", why: "To avoid an infinite regress in the causes of motion a first mover is needed, which moves as an object of love." },
        { id: "etica", label: "Ethics and politics", x: 88, y: 62, color: "#14b8a6", html: "Happiness, golden mean, political animal.", why: "Human beings, like every being, have a function (reason) and an end (eudaimonía), which is fulfilled in the polis." }
      ],
      edges: [
        ["critica", "sostanza", "proposes"],
        ["sostanza", "attopot", "explains motion"],
        ["sostanza", "cause", "analyses"],
        ["attopot", "motore", "culminates"],
        ["attopot", "etica", "applies"]
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand Aristotle",
      intro: "Try looking at the same concepts from other perspectives.",
      tabs: [
        {
          label: "🌰 The acorn and the oak",
          html: `<p>The acorn is <b>potentially</b> an oak: it already contains the plan (form), but it is not yet an oak. Growth is the passage to <b>actuality</b>. The final cause is the adult oak, which «explains» why the acorn grows the way it does. For Aristotle nature is ordered like this: not by chance, but towards an end.</p>`
        },
        {
          label: "⚖️ Plato and Aristotle",
          html: `<table>
<tr><th></th><th>Plato</th><th>Aristotle</th></tr>
<tr><td>Forms</td><td>separate, in the intelligible world</td><td>immanent in things</td></tr>
<tr><td>Knowledge</td><td>recollection</td><td>starts from sense experience</td></tr>
<tr><td>Soul</td><td>immortal, separable</td><td>form of the body</td></tr>
<tr><td>Politics</td><td>philosophers rule, property in common</td><td>polity, private property</td></tr>
<tr><td>Method</td><td>dialectic, mathematics</td><td>observation, classification, logic</td></tr>
</table>`
        },
        {
          label: "🃏 Flashcards",
          html: `<p>Review the concepts.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "Synolon", back: "The union of matter and form" },
            { front: "Potentiality", back: "The capacity to become something" },
            { front: "Actuality", back: "The realisation of potentiality" },
            { front: "Eudaimonia", back: "Happiness as activity in accordance with virtue" },
            { front: "Phronesis", back: "Practical wisdom" },
            { front: "Catharsis", back: "Purification of the emotions through tragedy" }
          ] }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Did you know...?",
      html: `<p>In the Middle Ages many of Aristotle's texts, lost in the West, were preserved and commented on by Arab philosophers (<b>Avicenna</b>, <b>Averroes</b>) and then translated back into Latin: their rediscovery was decisive for Scholastic philosophy and for Thomas Aquinas. Dante calls him «the master of those who know» (<i>Inferno</i>, IV).</p>`
    },
    {
      type: "curiosity",
      title: "A mistake that lasted two thousand years",
      html: `<p>Aristotle believed that heavier bodies fall faster. This was repeated for centuries, until Galileo (with experiments and reasoning, and probably not from the Leaning Tower of Pisa) showed that in a vacuum all bodies fall in the same way. Getting physics wrong takes nothing away from the greatness of the method Aristotle inaugurated: observe, classify, argue.</p>`
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Aristotle (Stagira 384 - Chalcis 322 BC): Plato's pupil, Alexander's tutor, founder of the <b>Lyceum</b> (335 BC).</li>
<li><b>Substance</b> = synolon of matter and form; <b>actuality and potentiality</b> explain becoming; <b>four causes</b>.</li>
<li><b>Logic</b>: the syllogism; the principle of non-contradiction. <b>Metaphysics</b>: the Unmoved Mover.</li>
<li><b>Ethics</b>: happiness as activity in accordance with virtue, the <b>golden mean</b>.</li>
<li><b>Politics</b>: man as a political animal; monarchy, aristocracy, polity and their corrupt forms.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: ethics and politics",
      questions: [
        { type: "mc", q: "What is ethical virtue for Aristotle?", options: ["A mean between excess and deficiency", "Knowledge of the good", "Obedience to the laws"], answer: 0, explain: "E.g. courage lies between cowardice and recklessness." },
        { type: "tf", q: "For Aristotle man is a political animal.", answer: true, explain: "He fulfils his nature in the polis." },
        { type: "order", q: "Put in chronological order.", items: ["Birth of Aristotle", "Entry into the Academy", "Tutor to Alexander", "Foundation of the Lyceum"], explain: "384, 367, around 343, 335 BC." }
      ]
    }
  ],
  glossary: [
    { t: "Synolon", d: "The concrete union of matter and form that makes up every substance." },
    { t: "Actuality and potentiality", d: "Realisation and possibility: becoming is the passage from potentiality to actuality." },
    { t: "Syllogism", d: "An argument with two premises and a conclusion that follows from them necessarily." },
    { t: "Teleology", d: "Explaining phenomena through their end or purpose (télos)." },
    { t: "Unmoved Mover", d: "The first cause of the motion of the cosmos, pure actuality." },
    { t: "Eudaimonia", d: "Happiness as activity in accordance with virtue." },
    { t: "Phronesis", d: "Practical wisdom, which chooses the right action in the concrete case." },
    { t: "Catharsis", d: "Purification of the passions (pity and fear) by means of tragedy." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is Aristotle's main criticism of Plato?", options: ["Forms do not exist separately from things", "The soul is immortal", "The state must have philosophers"], answer: 0, explain: "Forms are immanent in things." },
      { type: "mc", q: "What explains becoming according to Aristotle?", options: ["The passage from potentiality to actuality", "Chance", "The action of the gods"], answer: 0, explain: "Change is the realisation of a possibility." },
      { type: "tf", q: "The final cause answers the question «what is it for?».", answer: true, explain: "It is the end or purpose (télos)." },
      { type: "text", q: "What is the name of the school Aristotle founded in Athens?", answer: ["lyceum", "the lyceum"], explain: "The Lyceum, in 335 BC." },
      { type: "mc", q: "What is the Unmoved Mover?", options: ["Pure actuality, cause of motion as an object of love", "A divine craftsman who creates the world", "The soul of the world"], answer: 0, explain: "It moves without being moved." },
      { type: "mc", q: "What is the end of human action for Aristotle?", options: ["Happiness (eudaimonía)", "Pleasure", "Power"], answer: 0, explain: "Activity of the soul in accordance with virtue." },
      { type: "mc", q: "Which virtue lies between cowardice and recklessness?", options: ["Courage", "Temperance", "Justice"], answer: 0, explain: "It is the golden mean." },
      { type: "tf", q: "For Aristotle the heavenly bodies are made of a fifth element, aether.", answer: true, explain: "Incorruptible, with circular motion." },
      { type: "mc", q: "Which good form of government is rule by the many?", options: ["Polity", "Oligarchy", "Tyranny"], answer: 0, explain: "Democracy is its corrupt form." },
      { type: "mc", q: "Which is the correct syllogism?", options: ["All men are mortal; Socrates is a man; Socrates is mortal", "Some men are Greek; Socrates is Greek; Socrates is a man", "Socrates is a man; Socrates is Greek; everyone is Greek"], answer: 0, explain: "The conclusion follows necessarily from the premises." }
    ]
  }
});
