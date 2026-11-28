TOPIC('en', {
  id: "l3-fil-scolastica-tommaso",
  title: "Scholasticism and Thomas Aquinas",
  intro: "Around the year 1000, in Christian Europe, <b>schools</b> spring up in monasteries and cathedrals, followed by the first <b>universities</b>: Bologna, Paris, Oxford. In <b>Scholasticism</b> people study, discuss and argue according to precise rules: every thesis is met with objections and replies. In the 12th and 13th centuries the works of <b>Aristotle</b> reach the West (often by way of Arab philosophers). What should be done with them? For some they are a danger to the faith; for <b>Thomas Aquinas</b> they are an opportunity. Then an English friar, <b>William of Ockham</b>, will cut away much of that learning with his «razor». This lesson tells the story of the great medieval synthesis of faith and reason, and of its crisis.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. What Scholasticism is",
      html: `<p>After the fall of the Western Roman Empire, ancient learning survived mainly in monasteries. With the revival of the 11th-12th centuries (towns, trade, bishops and kings looking for educated men) <b>schools</b> and <b>universities</b> developed (<i>universitas</i>: an association of masters and students). The term «<b>Scholasticism</b>» refers to the philosophy and theology taught in these schools, from the 9th-11th centuries to the end of the Middle Ages.</p>
<p>General features:</p>
<ul>
<li>the central issue is the relationship between <b>faith and reason</b>: philosophy is often the «handmaid of theology» (<i>ancilla theologiae</i>), but it has a space of its own;</li>
<li>the method is the <b>lectio</b> (a commented reading of an authoritative text) and the <b>disputatio</b> (a debate with objections and replies). This gives rise to the presentation by <b>questions</b>: question, objections, contrary answer (<i>sed contra</i>), solution (<i>respondeo</i>), replies to the objections;</li>
<li>the authoritative sources are the Bible, the Church Fathers (Augustine above all), and later Aristotle, called simply «the Philosopher»;</li>
<li>the big questions: the existence of God, the divine attributes, the nature of the soul, universals.</li>
</ul>
<p>Some figures of early Scholasticism: <b>Anselm of Aosta</b> (also known as Anselm of Canterbury, 1033-1109), with the formula «I believe in order to understand» (<i>credo ut intelligam</i>) and his argument for the existence of God; <b>Peter Abelard</b> (1079-1142), master of dialectic in Paris, also known for his love story with Héloïse.</p>`
    },
    {
      type: "text",
      title: "2. Anselm and the problem of universals",
      html: `<p>In the <i>Proslogion</i> Anselm puts forward the so-called <b>ontological argument</b>: God is «that than which nothing greater can be thought» (<i>id quo maius cogitari nequit</i>). If he existed only in the mind, something greater could be thought, namely something that also exists in reality: therefore God exists in reality too. The argument is much debated: the monk Gaunilo already objected that with the same reasoning one could prove the existence of a perfect island; Aquinas and Kant would reject it.</p>
<p>The <b>dispute over universals</b> is another great debate: do general words («man», «beauty») correspond to something real?</p>
<table>
<tr><th>Position</th><th>Thesis</th><th>Who</th></tr>
<tr><td><b>Realism</b></td><td>Universals really exist (like Platonic Forms)</td><td>Anselm</td></tr>
<tr><td><b>Nominalism</b></td><td>Only individuals exist; universals are names (<i>flatus vocis</i>)</td><td>Roscelin, later Ockham</td></tr>
<tr><td><b>Conceptualism / moderate realism</b></td><td>Universals exist in the mind as concepts, grounded in things</td><td>Abelard, Aquinas</td></tr>
</table>
<p>It is a very concrete debate: if concepts do not correspond to anything real, what value do science and doctrine have?</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Scholasticism",
      questions: [
        { type: "mc", q: "What is the disputatio?", options: ["A debate with objections and replies", "A Latin exam", "A prayer"], answer: 0, explain: "A typical method of Scholastic teaching." },
        { type: "tf", q: "Nominalism holds that universals exist as independent realities.", answer: false, explain: "For nominalists only individuals exist." },
        { type: "text", q: "Who formulated the ontological argument for the existence of God in the Proslogion?", answer: ["anselm", "anselm of aosta", "anselm of canterbury", "saint anselm", "st anselm"], explain: "Anselm of Aosta." }
      ]
    },
    {
      type: "text",
      title: "3. Thomas Aquinas: life and works",
      html: `<p><b>Thomas Aquinas</b> was born in Roccasecca, near Aquino, around <b>1225</b>, into a noble family. He studied at Montecassino and in Naples, where he joined the <b>Dominican</b> order (despite his family's opposition). In Paris and Cologne he was a pupil of <b>Albert the Great</b>, a great scholar of Aristotle. He taught in Paris, in various Italian cities and in Naples. He died on <b>7 March 1274</b> at the abbey of Fossanova, on his way to the Council of Lyon. He was canonised in 1323 and called the «Angelic Doctor».</p>
<p>His main works: the <b>Summa contra Gentiles</b> (for dialogue with non-Christians) and the <b>Summa Theologiae</b>, a great synthesis that he left unfinished. He also wrote commentaries on Aristotle.</p>
<p>The context: in the 13th century the works of Aristotle (physics, metaphysics, ethics) arrive, translated from Arabic and Greek; Arab commentators such as <b>Avicenna</b> and <b>Averroes</b> are widely read. Some supporters of Aristotle (the Latin «Averroists») defended theses that conflicted with the faith, such as the eternity of the world and the unity of the intellect for all human beings; other theologians, like the Franciscans (<b>Bonaventure</b>), distrusted the Philosopher and preferred Augustine. In 1277 the Bishop of Paris, <b>Étienne Tempier</b>, condemned a series of theses, some of them close to Aquinas's own.</p>`
    },
    {
      type: "decision",
      title: "Paris, mid-13th century: what to do with Aristotle?",
      html: `<p>You are a master of theology in Paris. The writings of Aristotle (a pagan!) explain nature, logic and ethics wonderfully. Some colleagues want to ban them, because they contain dangerous theses (an eternal world, a soul that is not individual). Others use them without discernment, even against the faith.</p>`,
      question: "What position do you take?",
      options: [
        { label: "Ban Aristotle: faith is enough and pagan reason damages it.", outcome: "You would avoid conflicts, but you would lose an enormous heritage of knowledge about nature and human beings." },
        { label: "Study him rigorously, accept what is true and correct what conflicts with the faith, showing that faith and reason cannot contradict each other.", outcome: "This is Aquinas's path: truth is one, because God is the author of both reason and revelation." },
        { label: "Accept everything in Aristotle, even when it contradicts the faith, keeping two separate truths.", outcome: "This is the line attributed to the Averroists («double truth»): a suspect thesis, because it makes any synthesis impossible." }
      ],
      answer: 1,
      explain: "Aquinas chose synthesis: truths of reason and truths of faith cannot contradict each other, because they have the same source (God). If they seem to contradict each other, there is a mistake in one of the two lines of reasoning. In this way he managed to integrate Aristotle into Christian thought."
    },
    {
      type: "text",
      title: "4. Faith and reason according to Aquinas",
      html: `<p>For Aquinas there are two orders of truth:</p>
<ul>
<li>truths <b>that reason can reach</b> (the existence of God, the immortality of the soul, moral principles): these are the <i>preambles of faith</i> (<i>praeambula fidei</i>);</li>
<li><b>revealed</b> truths, which reason cannot discover on its own (the Trinity, the Incarnation): they go beyond reason, but <b>do not contradict it</b>.</li>
</ul>
<p>Philosophy therefore has its own autonomy, and theology brings it to completion. «Grace does not destroy nature but perfects it» (a Thomist formula). The aim is a <b>synthesis</b>: Aristotle (nature, logic, ethics, form and matter) built into the Christian faith.</p>
<p>From the Philosopher he takes the notion of substance, the doctrine of actuality and potentiality, the four causes and the doctrine of virtue (adding the theological virtues: faith, hope, charity). He also distinguishes, in every created being, <b>essence</b> (what it is) and <b>existence</b> (the fact that it is): only in God do they coincide, because God is <b>Being itself</b> (<i>Ipsum esse subsistens</i>).</p>`
    },
    {
      type: "text",
      title: "5. The Five Ways",
      html: `<p>In the <i>Summa Theologiae</i> (I, q. 2, a. 3) Aquinas, rejecting Anselm's ontological argument (you cannot move from a concept to existence), proposes five <b>a posteriori</b> proofs: they start from our experience of the world and work back to God. They are known as the <b>Five Ways</b>.</p>
<table>
<tr><th>Way</th><th>Starting point...</th><th>Conclusion</th></tr>
<tr><td>1. From <b>motion</b></td><td>Whatever moves is moved by something else</td><td>A <b>first unmoved mover</b></td></tr>
<tr><td>2. From <b>efficient causes</b></td><td>Every effect has a cause</td><td>An uncaused <b>first cause</b></td></tr>
<tr><td>3. From <b>possibility and necessity</b></td><td>Things can exist or not exist (they are contingent)</td><td>A <b>necessary being</b> in itself</td></tr>
<tr><td>4. From <b>degrees of perfection</b></td><td>Things are more or less good, true, noble</td><td>A <b>supremely perfect</b> being</td></tr>
<tr><td>5. From the <b>order</b> of the world</td><td>Things without intelligence act for an end</td><td>An <b>ordering intelligence</b></td></tr>
</table>
<p>For each way Aquinas concludes: «and this everyone calls God». The heart of the argument is that a chain of causes or motions cannot go back to infinity (in the <i>essential</i> sense, <i>per se</i>): an uncaused principle is needed. The proofs have been much discussed in the history of philosophy: Hume and Kant, for example, criticised their validity.</p>
<p>How can we speak about God? Our language is made for finite things. Aquinas proposes <b>analogy</b>: when we say «God is good» and «Mary is good», the meaning is neither identical (univocal) nor completely different (equivocal), but <i>analogous</i>: in God goodness exists in a perfect way.</p>`
    },
    {
      type: "svg",
      title: "The Five Ways at a glance",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="215" y="14" width="170" height="50" rx="25" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="300" y="45" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">God</text>
<rect x="15" y="130" width="105" height="70" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="67" y="160" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">1. Motion</text>
<text x="67" y="182" font-size="14" text-anchor="middle" fill="#0f172a">mover</text>
<rect x="132" y="130" width="105" height="70" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="185" y="160" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">2. Causes</text>
<text x="185" y="182" font-size="14" text-anchor="middle" fill="#0f172a">first cause</text>
<rect x="248" y="130" width="105" height="70" rx="8" fill="#fae8ff" stroke="#a21caf" stroke-width="2"/>
<text x="300" y="160" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">3. Contingency</text>
<text x="300" y="182" font-size="14" text-anchor="middle" fill="#0f172a">necessary being</text>
<rect x="365" y="130" width="105" height="70" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/>
<text x="417" y="160" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">4. Degrees</text>
<text x="417" y="182" font-size="14" text-anchor="middle" fill="#0f172a">perfection</text>
<rect x="482" y="130" width="105" height="70" rx="8" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="535" y="160" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">5. Order</text>
<text x="535" y="182" font-size="14" text-anchor="middle" fill="#0f172a">intelligence</text>
<path d="M67 130 L260 64 M185 130 L280 64 M300 130 L300 64 M417 130 L320 64 M535 130 L340 64" stroke="#475569" stroke-width="2" fill="none"/>
<rect x="15" y="235" width="570" height="50" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
<text x="300" y="266" font-size="15" text-anchor="middle" fill="#0f172a">From the world we observe (things, motion, causes) up to the first principle</text>
</svg>`,
      caption: "Five a posteriori paths: from our experience of the world to God."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Aquinas",
      questions: [
        { type: "mc", q: "Aquinas's Five Ways are proofs...", options: ["A posteriori: they start from experience of the world", "A priori: they start from the concept of God", "Based on the Bible"], answer: 0, explain: "Unlike the ontological argument." },
        { type: "tf", q: "For Aquinas truths of faith and truths of reason cannot contradict each other.", answer: true, explain: "They have the same source in God." },
        { type: "text", q: "What is his main, unfinished work? (Summa...)", answer: ["summa theologiae", "theologiae", "summa theologica", "theologica"], explain: "The Summa Theologiae." }
      ]
    },
    {
      type: "text",
      title: "6. Ethics, law and politics",
      html: `<p>In <b>ethics</b> Aquinas follows Aristotle: the end of human life is <b>happiness</b>, but perfect happiness cannot be reached in this life: it consists in the <b>vision of God</b>. To Aristotle's virtues he adds the <b>theological</b> virtues: faith, hope and charity.</p>
<p>He distinguishes four kinds of <b>law</b>:</p>
<ul>
<li><b>eternal law</b>: God's rational plan for creation;</li>
<li><b>natural law</b>: human participation in the eternal law, through reason (its principle: «good is to be done and evil avoided»);</li>
<li><b>human law</b>: the positive laws of the state, just if they derive from natural law (an unjust law, says Aquinas, is rather a corruption of law);</li>
<li><b>divine law</b>: revealed in the Scriptures.</li>
</ul>
<p>In <b>politics</b> he follows Aristotle: man is a social and political animal, and the state is natural. Legitimate authority serves the common good: if a ruler governs unjustly, his subjects are not obliged to obey, and in extreme cases one may speak of resistance to tyranny.</p>`
    },
    {
      type: "text",
      title: "7. Ockham and the crisis of Scholasticism",
      html: `<p>In the 14th century Aquinas's synthesis goes into crisis. <b>William of Ockham</b> (about 1285-1347), an English Franciscan, is the leading figure. His ideas:</p>
<ul>
<li><b>Nominalism</b>: only individual things exist; universals are signs in the mind or in language (<i>terms</i>), not realities. So knowledge starts from <b>experience</b> of individual things (intuitive knowledge).</li>
<li><b>Ockham's razor</b>: the formula is «<i>entia non sunt multiplicanda praeter necessitatem</i>» (entities must not be multiplied beyond necessity): an explanation should not assume more entities than it needs. It is a principle of economy that is still used in science today. (The sentence in this form is the traditional summary: it does not appear word for word in his writings, but it captures his method well.)</li>
<li><b>Separation of faith and reason</b>: dogmas (the Trinity, the Incarnation) cannot be demonstrated by reason; the existence of God cannot be rigorously proved. Faith rests on revelation.</li>
<li><b>God's omnipotence</b>: God is not bound by necessary laws of nature: anything that does not involve a contradiction is possible. So the world is «contingent» and must be studied through experience.</li>
<li>In politics, he defended the independence of civil power from the Pope in the dispute with John XXII (over Franciscan poverty).</li>
</ul>
<p>With Ockham philosophy separates from theology, opening the way to modern science and to reflection on language. The Middle Ages do not end suddenly, but the great synthesis gives way to a more empirical and critical kind of thought.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: from synthesis to crisis",
      nodes: [
        { id: "scuole", label: "Schools and universities", x: 50, y: 5, color: "#64748b", html: "Lectio and disputatio.", why: "Towns and universities create an environment for debate and research, and an audience for learning." },
        { id: "aristotele", label: "Arrival of Aristotle", x: 18, y: 32, color: "#0ea5e9", html: "Physics, metaphysics, ethics via the Arabs.", why: "He offers a complete system of the world and a method, but raises problems for the faith (eternal world, the soul)." },
        { id: "tommaso", label: "Aquinas: synthesis", x: 50, y: 34, color: "#7c3aed", html: "Faith and reason in harmony; Five Ways.", why: "He holds that truth is one because God is the author of both reason and revelation: so he can integrate Aristotle into the faith." },
        { id: "bonaventura", label: "Augustinianism", x: 82, y: 32, color: "#f59e0b", html: "Bonaventure, Anselm.", why: "It prefers Plato and Augustine and distrusts Aristotle: a more mystical, less naturalistic path." },
        { id: "universali", label: "Universals", x: 28, y: 64, color: "#16a34a", html: "Realism, nominalism.", why: "If universals do not exist as things, science must be based on individuals: hence the empirical method." },
        { id: "ockham", label: "Ockham and the razor", x: 70, y: 64, color: "#ef4444", html: "Nominalism, separation of faith and reason.", why: "He breaks the synthesis: reason does not demonstrate the truths of faith, and the world is studied through experience. A preparation for modern science." }
      ],
      edges: [
        ["scuole", "aristotele", "welcomes"],
        ["aristotele", "tommaso", "integrated by"],
        ["scuole", "bonaventura", "coexists with"],
        ["tommaso", "universali", "moderate realism"],
        ["universali", "ockham", "radicalised by"],
        ["tommaso", "ockham", "superseded by"]
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand Scholasticism",
      intro: "Images, analogies and diagrams to help you remember.",
      tabs: [
        {
          label: "🏛️ Analogy: the cathedral",
          html: `<p>The <i>Summa Theologiae</i> is often compared to a <b>Gothic cathedral</b>: an ordered structure, with parts (questions, articles) fitted into a grand design, every element in its place, everything pointing upwards. Ockham is the one who, with his razor, strips away the ornaments to see only the essential structure.</p>`
        },
        {
          label: "🔪 The razor today",
          html: `<p>Your phone won't switch on. Possible explanations: (a) the battery is flat; (b) a hacker has tampered with the phone, a ghost has frozen the system and the government has sent a signal. Ockham's razor says: try the simplest explanation first. Not because it is always true, but because you should not assume more than you need to.</p>`
        },
        {
          label: "🗂️ Table: Aquinas and Ockham",
          html: `<table>
<tr><th></th><th>Aquinas</th><th>Ockham</th></tr>
<tr><td>Universals</td><td>Moderate realism</td><td>Nominalism</td></tr>
<tr><td>Faith and reason</td><td>In harmony</td><td>Separate</td></tr>
<tr><td>God</td><td>Demonstrable through the Five Ways</td><td>Not rigorously demonstrable</td></tr>
<tr><td>Nature</td><td>Rational order, purpose</td><td>Contingent, to be studied through experience</td></tr>
<tr><td>Order</td><td>Dominican</td><td>Franciscan</td></tr>
</table>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Did you know...?",
      html: `<p>Aquinas was heavily built and quiet: his fellow students called him the «dumb ox». Albert the Great replied that «this ox will bellow so loudly that his bellowing will fill the world». In December 1273, after a spiritual experience, he stopped writing, saying that everything he had written seemed to him like «straw» compared with what he had seen: the <i>Summa</i> remained unfinished.</p>`
    },
    {
      type: "curiosity",
      title: "Dante and Aquinas",
      html: `<p>In the <i>Paradiso</i> (Canto X) Dante places Aquinas in the Heaven of the Sun, among the wise spirits, and has him introduce the other souls of the wise; in Canto XI it is Aquinas who tells the life of St Francis in his praise, and in Canto XII Bonaventure praises St Dominic: a crossed tribute between the two rival orders. Dante's ordered vision of the cosmos and of morality owes a great deal to Aquinas's synthesis.</p>`
    },
    {
      type: "example",
      title: "Example: why is there «something» rather than «nothing»?",
      html: `<p>Your phone exists because someone manufactured it, from extracted materials, by people born to parents, and so on. That chain of causes cannot be infinite if every cause depends on another: there must be something that depends on nothing. Aquinas calls it God. Other philosophers reply that an infinite series is not impossible, or that the series could just be a brute fact: the question remains open, and that is why the Five Ways are still studied.</p>`
    },
    {
      type: "example",
      title: "Example: two theories, one razor",
      html: `<p>A student discovers that the biscuits in the cupboard have disappeared. Theory A: his brother ate them. Theory B: his brother ate them, but with the help of an invisible cat that no one has ever seen. If A and B explain everything equally well, Ockham's razor cuts away the invisible cat: it is not needed and it is one entity too many.</p>`
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Scholasticism</b>: the philosophy and theology of medieval schools and universities; lectio and disputatio; the <b>dispute over universals</b>.</li>
<li><b>Anselm</b>: the ontological argument. <b>Abelard</b>: dialectic, conceptualism.</li>
<li><b>Thomas Aquinas</b> (c. 1225 - 1274): synthesis of faith and reason with Aristotle; <b>Summa Theologiae</b>; <b>Five Ways</b>; analogy; natural law.</li>
<li><b>Ockham</b> (c. 1285 - 1347): nominalism, the <b>razor</b>, separation of faith and reason.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Final mini-quiz",
      questions: [
        { type: "mc", q: "What does «Ockham's razor» state?", options: ["Do not multiply entities beyond necessity", "Everything that exists is necessary", "Reason is the servant of faith"], answer: 0, explain: "A principle of economy in explanations." },
        { type: "tf", q: "Ockham held that the existence of God could be proved with certainty.", answer: false, explain: "He considered the proofs not rigorous and left faith to revelation." },
        { type: "order", q: "Put in chronological order.", items: ["Anselm of Aosta", "Abelard", "Thomas Aquinas", "Ockham"], explain: "11th, 12th, 13th, 14th century." }
      ]
    }
  ],
  glossary: [
    { t: "Scholasticism", d: "The philosophy and theology taught in medieval schools and universities." },
    { t: "Disputatio", d: "A debate with objections and replies, typical of medieval teaching." },
    { t: "Universals", d: "General concepts (man, beauty); whether they are real is a matter of debate." },
    { t: "Nominalism", d: "The doctrine that only individuals exist, and universals are names." },
    { t: "Summa", d: "A work that systematically sums up a field of knowledge (Summa Theologiae)." },
    { t: "Five Ways", d: "Aquinas's a posteriori proofs of the existence of God." },
    { t: "Analogy", d: "A way of speaking about God with terms that are neither univocal nor equivocal." },
    { t: "Ockham's razor", d: "A principle of economy: do not multiply entities beyond necessity." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which authority is called simply «the Philosopher» in Scholasticism?", options: ["Aristotle", "Plato", "Augustine"], answer: 0, explain: "His works are studied and commented on." },
      { type: "mc", q: "What is Anselm's ontological argument?", options: ["God is that than which nothing greater can be thought, and therefore exists", "God is the first mover", "God exists because there is order in the world"], answer: 0, explain: "Aquinas did not accept it." },
      { type: "tf", q: "Aquinas started from the concept of God in order to prove his existence.", answer: false, explain: "The Five Ways are a posteriori proofs." },
      { type: "mc", q: "What does it mean that, for Aquinas, faith and reason do not contradict each other?", options: ["They have the same source in God", "Faith does not need reason", "Reason must deny faith"], answer: 0, explain: "Truth is one." },
      { type: "mc", q: "Which way starts from the fact that whatever moves is moved by something else?", options: ["The first, from motion", "The third, from contingency", "The fifth, from order"], answer: 0, explain: "It concludes with a first unmoved mover." },
      { type: "mc", q: "What is natural law for Aquinas?", options: ["Human participation in the eternal law through reason", "The laws of physics", "A code drawn up by rulers"], answer: 0, explain: "Its principle: do good and avoid evil." },
      { type: "text", q: "What is the name of Ockham's principle that tells us not to multiply entities? (Ockham's ...)", answer: ["razor", "ockham's razor", "the razor", "occam's razor"], explain: "Ockham's razor." },
      { type: "tf", q: "Ockham holds that only individual things exist.", answer: true, explain: "This is the basis of nominalism." },
      { type: "mc", q: "Which religious order did Aquinas belong to?", options: ["Dominicans", "Franciscans", "Benedictines"], answer: 0, explain: "He joined the Dominican order in Naples." }
    ]
  }
});
