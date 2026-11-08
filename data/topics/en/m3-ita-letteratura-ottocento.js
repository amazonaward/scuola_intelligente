TOPIC('en', {
  id: "m3-ita-letteratura-ottocento",
  title: "Nineteenth-century Italian literature",
  intro: "The 19th century is the century in which united Italy was born, and literature accompanies this journey. We will meet four great authors: <b>Ugo Foscolo</b>, <b>Giacomo Leopardi</b>, <b>Alessandro Manzoni</b> and <b>Giovanni Verga</b>, and three movements: <b>Neoclassicism</b>, <b>Romanticism</b> and <b>Verismo</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "The context: a century of revolutions",
      html: `<p>The 19th century opens with <b>Napoleon</b>, who dominates Europe and Italy too until 1815. After the <b>Congress of Vienna</b> (1814–1815) the old rulers come back, but the ideas of freedom and nation do not die out: the <b>uprisings</b> of 1820–21, 1831 and 1848 arrive, then the wars of independence and finally the <b>Unification of Italy (1861)</b> and Rome as capital (1871).</p>
<p>Meanwhile Europe changes with the <b>Industrial Revolution</b>, railways, the growth of cities and the birth of the "social question". Literature reflects all this:</p>
<ul>
<li><b>Neoclassicism</b> (late 18th – early 19th century): admiration for the harmonious beauty of Greek and Roman art.</li>
<li><b>Romanticism</b> (from about 1816 in Italy): feeling, history, the people, homeland, faith.</li>
<li><b>Verismo</b> (from about 1878): representing reality, above all that of humble people, in an objective way.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Timeline of authors and works",
      widget: "timeline",
      options: { unit: "years", events: [
        { year: 1802, label: "Foscolo: Ultime lettere di Jacopo Ortis (The Last Letters of Jacopo Ortis)", icon: "✉️" },
        { year: 1807, label: "Foscolo: Dei Sepolcri (On Sepulchres)", icon: "🪦" },
        { year: 1819, label: "Leopardi: L'infinito (The Infinite)", icon: "🌄" },
        { year: 1821, label: "Manzoni: Il cinque maggio (The Fifth of May)", icon: "🦅" },
        { year: 1827, label: "Manzoni: I promessi sposi (The Betrothed, 1st ed.)", icon: "📖" },
        { year: 1831, label: "Leopardi: Canti (1st ed.)", icon: "🎶" },
        { year: 1840, label: "Manzoni: definitive edition of I promessi sposi", icon: "🖋️" },
        { year: 1861, label: "Unification of Italy", icon: "🇮🇹" },
        { year: 1881, label: "Verga: I Malavoglia (The House by the Medlar Tree)", icon: "⛵" },
        { year: 1889, label: "Verga: Mastro-don Gesualdo", icon: "🏚️" }
      ] },
      caption: "Tap the events: in less than ninety years Italian literature goes from neoclassical sonnets to the verist novel."
    },
    {
      type: "text",
      title: "Ugo Foscolo (1778–1827): beauty against nothingness",
      html: `<p>Born on <b>Zakynthos</b> (Zante), a Greek island then belonging to Venice, to a Venetian father and a Greek mother, Foscolo lived as an exile and died in London. He was a soldier in Napoleon's army, but was left disillusioned when Napoleon handed Venice over to Austria with the <b>Treaty of Campoformio (1797)</b>.</p>
<ul>
<li><b><i>Ultime lettere di Jacopo Ortis</i></b> (1802): an epistolary novel. Jacopo, a young patriot disappointed in politics and in love, takes his own life. It is the first modern Italian novel.</li>
<li><b>Sonnets</b>: <i>Alla sera</i> (To the Evening), <i>A Zacinto</i> (To Zakynthos), <i>In morte del fratello Giovanni</i> (On the Death of My Brother Giovanni).</li>
<li><b><i>Dei Sepolcri</i></b> (1807): a <i>carme</i> (solemn poem) in blank hendecasyllables. The tombs of the great are not for the dead but for the <b>living</b>: they keep memory alive and inspire great deeds.</li>
</ul>
<p>Key themes: <b>death</b> as "eternal nothingness", <b>exile</b>, the <b>homeland</b>, and the "illusions" (beauty, poetry, love, glory) that give life meaning.</p>`
    },
    {
      type: "text",
      title: "Giacomo Leopardi (1798–1837): the poet of the infinite",
      html: `<p>Born in <b>Recanati</b> (in the Marche, then part of the Papal States), he spent his adolescence in the great library of his father Monaldo: seven years of "<i>mad and desperate study</i>" in which he taught himself Latin, Greek and Hebrew. He died in <b>Naples</b> in 1837.</p>
<ul>
<li><b><i>Canti</i></b> (Songs): the collection of his poems, including <i>L'infinito</i> (1819), <i>A Silvia</i> (1828), <i>Il sabato del villaggio</i> (The Village Saturday, 1829), <i>La ginestra</i> (The Broom, 1836).</li>
<li><b><i>Operette morali</i></b> (Little Moral Works, 1827): prose dialogues, ironic and philosophical (e.g. <i>Dialogue between Nature and an Icelander</i>).</li>
<li><b><i>Zibaldone</i></b>: an enormous diary of thoughts, over 4,500 pages.</li>
</ul>
<p>His thought is called <b>pessimism</b>: man desires an infinite happiness, but reality cannot give it to him. At first he blames history and civilisation (<b>historical</b> pessimism), then <b>Nature</b> itself, an indifferent "stepmother" (<b>cosmic</b> pessimism). In <i>La ginestra</i>, however, he proposes an answer: <b>solidarity</b> among human beings.</p>`
    },
    {
      type: "svg",
      title: "L'infinito: the hedge and the gaze",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e3a8a"/><stop offset="1" stop-color="#93c5fd"/></linearGradient></defs>
<rect width="640" height="300" fill="url(#cielo)"/>
<path d="M0 200 Q160 150 320 190 T640 180 L640 300 L0 300 Z" fill="#65a30d"/>
<path d="M0 230 Q200 210 400 235 T640 225 L640 300 L0 300 Z" fill="#3f6212"/>
<g fill="#166534">
<circle cx="230" cy="215" r="28"/><circle cx="270" cy="205" r="30"/><circle cx="310" cy="212" r="28"/><circle cx="350" cy="205" r="30"/><circle cx="390" cy="215" r="28"/>
</g>
<circle cx="110" cy="250" r="12" fill="#fde68a"/>
<rect x="104" y="262" width="12" height="28" fill="#1f2937"/>
<path d="M118 255 L230 200" stroke="#fde68a" stroke-width="3" stroke-dasharray="6 6"/>
<text x="300" y="60" font-size="20" fill="#fff" font-style="italic" text-anchor="middle">"Sempre caro mi fu quest'ermo colle,</text>
<text x="300" y="88" font-size="20" fill="#fff" font-style="italic" text-anchor="middle">e questa siepe, che da tanta parte</text>
<text x="300" y="116" font-size="20" fill="#fff" font-style="italic" text-anchor="middle">dell'ultimo orizzonte il guardo esclude."</text>
<text x="310" y="270" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">the hedge hides the horizon → imagination creates the infinite</text>
<text x="560" y="40" font-size="30">✨</text>
</svg>`,
      caption: "(\"This lonely hill was always dear to me, and this hedge, which hides so much of the far horizon from my sight.\") Precisely because the hedge prevents seeing, the poet imagines \"endless spaces\" and \"superhuman silences\"."
    },
    {
      type: "text",
      title: "Alessandro Manzoni (1785–1873): the history of the humble",
      html: `<p>A Milanese, grandson of the Enlightenment thinker Cesare Beccaria, Manzoni converted to Catholicism in 1810. He was the most important voice of <b>Italian Romanticism</b>.</p>
<ul>
<li><b>Civic odes</b>: <i>Marzo 1821</i> and <i>Il cinque maggio</i> (1821), written in one burst on hearing of Napoleon's death.</li>
<li><b>Tragedies</b>: <i>Il conte di Carmagnola</i> and <i>Adelchi</i>.</li>
<li><b><i>I promessi sposi</i></b> (The Betrothed): the first great Italian historical novel, set in Lombardy between 1628 and 1630, under Spanish rule. The protagonists are two <b>humble</b> young people, Renzo and Lucia, obstructed by the bully don Rodrigo.</li>
</ul>
<p>The novel had three versions: <i>Fermo e Lucia</i> (1821–23), the "Ventisettana" (1827) and the "Quarantana" (1840–42), rewritten after Manzoni went to Florence to "<b>rinse his clothes in the Arno</b>", that is, to use cultivated spoken Florentine as a model of a <b>common language</b> for all Italians.</p>
<p>The key ideas: <b>historical truth</b> as the basis of the story, attention to the <b>humble</b>, divine <b>Providence</b> acting in history.</p>`
    },
    {
      type: "text",
      title: "Giovanni Verga (1840–1922) and Verismo",
      html: `<p>A Catanian, Verga began with sentimental novels set in Florence and Milan. Then, influenced by the French <b>Naturalism</b> of Émile Zola, he chose to tell of the Sicily of fishermen, peasants and miners.</p>
<ul>
<li><b><i>Rosso Malpelo</i></b> (1878): the short story of a boy who works in a sand quarry, mistreated by everyone because of his red hair.</li>
<li><b><i>Vita dei campi</i></b> (Life in the Fields, 1880) and <b><i>Novelle rusticane</i></b> (Rustic Tales, 1883): collections of short stories.</li>
<li><b><i>I Malavoglia</i></b> (1881): the Toscano family of fishermen from Aci Trezza loses its boat, the <i>Provvidenza</i>, and a cargo of lupins, and its life goes to ruin.</li>
<li><b><i>Mastro-don Gesualdo</i></b> (1889): a bricklayer who became rich, but is alone and unhappy.</li>
</ul>
<p>Verismo uses the technique of <b>impersonality</b>: the author "eclipses himself", does not comment, and lets the characters speak in their own way of thinking (<b>regression</b> and <b>free indirect speech</b>). For Verga, whoever tries to change his condition is swept away: this is the "<b>ideal of the oyster</b>" and the "<b>cycle of the vanquished</b>".</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: authors and works",
      questions: [
        { type: "mc", q: "Who wrote \"Dei Sepolcri\"?", options: ["Leopardi", "Foscolo", "Manzoni"], answer: 1, explain: "Ugo Foscolo, in 1807." },
        { type: "mc", q: "In which town was Leopardi born?", options: ["Recanati", "Milan", "Catania"], answer: 0, explain: "Recanati, in the Marche, in 1798." },
        { type: "tf", q: "I Malavoglia is a verist novel.", answer: true, explain: "Written by Verga in 1881, it is the masterpiece of Verismo." }
      ]
    },
    {
      type: "widget",
      title: "Match the author to the work",
      widget: "match",
      options: { pairs: [
        ["Foscolo", "Ultime lettere di Jacopo Ortis"],
        ["Leopardi", "Operette morali"],
        ["Manzoni", "Il cinque maggio"],
        ["Verga", "Rosso Malpelo"],
        ["Leopardi", "A Silvia"],
        ["Manzoni", "Adelchi"]
      ] },
      caption: "Review the main works of each author."
    },
    {
      type: "example",
      title: "Example: reading a text and recognising the movement",
      html: `<p>Read these two openings:</p>
<ol>
<li><i>"Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti…"</i> ("That branch of the Lake of Como that turns towards the south, between two unbroken chains of mountains…") → a precise description of a real place, the start of a historical novel with humble characters: <b>Manzoni, Romanticism</b>.</li>
<li><i>"Malpelo si chiamava così perché aveva i capelli rossi; ed aveva i capelli rossi perché era un ragazzo malizioso e cattivo…"</i> ("He was called Malpelo because he had red hair; and he had red hair because he was a malicious and wicked boy…") → the narrator reasons like the people of the village, with a prejudice: this is the <b>regression</b> typical of Verga's <b>Verismo</b>.</li>
</ol>
<p>Useful clues: lofty language and classical myths → Neoclassicism/Foscolo; feeling, history, homeland, faith → Romanticism; popular dialogue, proverbs, a narrator who "disappears" → Verismo.</p>`
    },
    {
      type: "example",
      title: "Worked example: why the Sepolcri speak to us too",
      html: `<p>In 1804 Napoleon issued the <b>Edict of Saint-Cloud</b>, extended to Italy in 1806: cemeteries had to be outside the cities and tombs had to be all alike, with controlled inscriptions. Foscolo's poem was born from a discussion about this law.</p>
<p>Today we find the same idea when we visit the Basilica of <b>Santa Croce in Florence</b> (where Michelangelo, Galileo, Machiavelli and Alfieri rest – and since 1871 Foscolo himself too) or a war memorial: tombs and memorials "speak" to the living and keep collective memory alive. Think of the <b>stumbling stones</b> (<i>Stolpersteine</i>) in front of the homes of deportees: they are a modern way of remembering.</p>`
    },
    {
      type: "3d",
      title: "The authors' places on the globe",
      scene: "globe",
      options: {
        points: [
          { lat: 37.78, lon: 20.9, label: "Zakynthos (Foscolo)", color: "#2563eb" },
          { lat: 51.49, lon: -0.26, label: "London (Foscolo's death)", color: "#2563eb" },
          { lat: 43.4, lon: 13.55, label: "Recanati (Leopardi)", color: "#16a34a" },
          { lat: 40.85, lon: 14.27, label: "Naples (Leopardi's death)", color: "#16a34a" },
          { lat: 45.46, lon: 9.19, label: "Milan (Manzoni)", color: "#dc2626" },
          { lat: 43.77, lon: 11.25, label: "Florence (\"rinsing clothes in the Arno\")", color: "#dc2626" },
          { lat: 37.5, lon: 15.09, label: "Catania (Verga)", color: "#a855f7" },
          { lat: 37.56, lon: 15.16, label: "Aci Trezza (I Malavoglia)", color: "#a855f7" }
        ],
        routes: [ { points: [0, 1], color: "#2563eb" }, { points: [2, 3], color: "#16a34a" } ]
      },
      caption: "Rotate the globe: the lives of Foscolo and Leopardi were also journeys, between exile and searching."
    },
    {
      type: "curiosity",
      title: "Did you know…? Leopardi and ice cream",
      html: `<p>In his last years in Naples, Leopardi had a big sweet tooth: he loved <b>ice creams</b> and pastries, and frequented the city's cafés. For a long time the image of the "sad and sick poet" hid a curious, ironic man full of interests, from philosophy to astronomy: as a boy he even wrote a <i>History of Astronomy</i>, at only 15!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Verdi and Manzoni",
      html: `<p>Giuseppe Verdi admired Manzoni so much that, when the writer died (22 May 1873), he composed in his honour the <b>Requiem Mass</b>, first performed a year later, on 22 May 1874, in the church of San Marco in Milan. And the famous opening "<i>Quel ramo del lago di Como</i>" is one of the most quoted in Italian literature.</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<table>
<tr><th>Author</th><th>Movement</th><th>Key work</th><th>Key idea</th></tr>
<tr><td>Foscolo</td><td>Neoclassicism / pre-Romanticism</td><td>Dei Sepolcri</td><td>Illusions and memory against nothingness</td></tr>
<tr><td>Leopardi</td><td>Romanticism (personal position)</td><td>Canti</td><td>Pessimism, the infinite, solidarity</td></tr>
<tr><td>Manzoni</td><td>Romanticism</td><td>I promessi sposi</td><td>Historical truth, the humble, Providence</td></tr>
<tr><td>Verga</td><td>Verismo</td><td>I Malavoglia</td><td>Impersonality, cycle of the vanquished</td></tr>
</table>`
    },
    {
      type: "alternatives",
      title: "Other ways to get to know these authors",
      intro: "Literature is not just dates and titles. Here are other ways into the world of 19th-century writers.",
      tabs: [
        {
          label: "📱 If they had a social media profile",
          html: `<p>Imagine the four authors with an online profile:</p>
<ul>
<li><b>Foscolo</b> 🏛️ – <i>"Exile. Poet. Ex-soldier. I love Greece and hate tyrants."</i> Posts photos of tombs and ancient statues.</li>
<li><b>Leopardi</b> 🌙 – <i>"I study everything. I watch the stars. Uncomfortable questions about happiness."</i> Posts long thoughts at night (the <i>Zibaldone</i>!).</li>
<li><b>Manzoni</b> 📖 – <i>"Historical novelist. I correct my texts endlessly. A common language for everyone."</i> His book has three versions.</li>
<li><b>Verga</b> ⛵ – <i>"I tell the real life of fishermen and peasants. No filters."</i> His stories often end badly.</li>
</ul>`
        },
        {
          label: "🇫🇷🇬🇧 Foreign authors of the same period",
          html: `<p>Linking the Italians to foreigners helps us see that the movements were <b>European</b>:</p>
<ul>
<li>Foscolo's <i>Jacopo Ortis</i> is inspired by the <b><i>Werther</i></b> of the German <b>Goethe</b> (1774).</li>
<li>Manzoni admired the historical novels of the Scot <b>Walter Scott</b>, such as <i>Ivanhoe</i> (1819).</li>
<li>Leopardi is often compared with English Romantics such as <b>Byron</b>, <b>Shelley</b> and <b>Keats</b>, his contemporaries.</li>
<li>Verga's Verismo is born from the French <b>Naturalism</b> of <b>Émile Zola</b> and the Goncourt brothers; Verga also admired Flaubert.</li>
</ul>`
        },
        {
          label: "🃏 Flashcards: famous openings",
          html: `<p>Recognise the author from the opening of the text! Flip the cards.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "\"Né più mai toccherò le sacre sponde…\" (Never again shall I touch the sacred shores…)", back: "Foscolo, A Zacinto" },
            { front: "\"Sempre caro mi fu quest'ermo colle…\" (This lonely hill was always dear to me…)", back: "Leopardi, L'infinito" },
            { front: "\"Silvia, rimembri ancora…\" (Silvia, do you still remember…)", back: "Leopardi, A Silvia" },
            { front: "\"Ei fu. Siccome immobile…\" (He was. As motionless…)", back: "Manzoni, Il cinque maggio" },
            { front: "\"Quel ramo del lago di Como…\" (That branch of the Lake of Como…)", back: "Manzoni, I promessi sposi" },
            { front: "\"Malpelo si chiamava così perché aveva i capelli rossi…\" (He was called Malpelo because he had red hair…)", back: "Verga, Rosso Malpelo" }
          ] }
        },
        {
          label: "🗂️ Sort the themes",
          html: `<p>Which movement does each theme or technique belong to?</p>`,
          widget: "classify",
          options: { groups: ["Neoclassicism", "Romanticism", "Verismo"], items: [
            ["Harmonious beauty of the classics", 0],
            ["Greek and Roman myths", 0],
            ["Feeling and homeland", 1],
            ["Historical novel", 1],
            ["Impersonality of the narrator", 2],
            ["Life of fishermen and peasants", 2],
            ["Value of faith and history", 1],
            ["Influence of Zola", 2]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of 19th-century literature",
      nodes: [
        { id: "storia", label: "Napoleon → Unification of Italy", x: 50, y: 6, color: "#64748b", html: "The historical context: Napoleonic rule, Restoration, Risorgimento, Unification (1861).", why: "Political and industrial revolutions change the readership and the themes: homeland, freedom, the people, modern society." },
        { id: "neoclassicismo", label: "Neoclassicism", x: 15, y: 28, color: "#0ea5e9", html: "A return to the ideal beauty of Greek and Roman art.", why: "It was born from the excavations of Herculaneum (1738) and Pompeii (1748) and the writings of the German scholar Johann J. Winckelmann, who spoke of \"noble simplicity and quiet grandeur\"." },
        { id: "romanticismo", label: "Romanticism", x: 50, y: 28, color: "#dc2626", html: "Feeling, the individual, history, the people, the nation.", why: "Born in Germany and England in the late 18th century, it reached Italy with the 1816 controversy, when Madame de Staël urged Italians to translate foreign authors." },
        { id: "verismo", label: "Verismo", x: 85, y: 28, color: "#a855f7", html: "Objective representation of reality, above all of the humble.", why: "It derives from Zola's French Naturalism and from Positivism, the philosophy that wanted to study society with the method of the sciences. In Italy it was theorised by Luigi Capuana." },
        { id: "foscolo", label: "Foscolo", x: 15, y: 58, color: "#2563eb", html: "Ortis, sonnets, Dei Sepolcri. Illusions, exile, memory.", why: "He joins classical forms (hendecasyllables, myths) with romantic passions: that is why he is called a poet of transition between Neoclassicism and Romanticism." },
        { id: "leopardi", label: "Leopardi", x: 38, y: 62, color: "#16a34a", html: "Canti, Operette morali, Zibaldone. Pessimism and the infinite.", why: "His thought comes from philological and philosophical studies (French Enlightenment thinkers, Greek classics) and from reflection on his own physical suffering: from it he draws a lucid vision of the human condition." },
        { id: "manzoni", label: "Manzoni", x: 62, y: 62, color: "#b91c1c", html: "I promessi sposi, odes, tragedies. Historical truth and Providence.", why: "He joins his Enlightenment education (his grandfather Beccaria) and the Catholic faith he rediscovered in 1810: true history is the ground in which one sees the action of God and the dignity of the humble." },
        { id: "verga", label: "Verga", x: 85, y: 58, color: "#7c3aed", html: "Rosso Malpelo, I Malavoglia, Mastro-don Gesualdo.", why: "After the success of his society novels, in 1878 he 'discovers' the Sicily of the humble: he applies Zola's method to the southern reality after Unification, marked by poverty and emigration." },
        { id: "lingua", label: "The common Italian language", x: 50, y: 90, color: "#eab308", html: "The problem of a language for all Italians.", why: "In 1861 only a small minority spoke Italian (estimates range from 2.5% to 10%). Manzoni proposed cultivated Florentine; Verga mixed Italian with Sicilian turns of phrase." }
      ],
      edges: [
        ["storia", "neoclassicismo", "Napoleonic age"],
        ["storia", "romanticismo", "Risorgimento"],
        ["storia", "verismo", "after Unification"],
        ["neoclassicismo", "foscolo", "classical forms"],
        ["romanticismo", "leopardi", "in a personal way"],
        ["romanticismo", "manzoni", "Italian leader"],
        ["verismo", "verga", "master"],
        ["manzoni", "lingua", "rinses in the Arno"],
        ["verga", "lingua", "spoken language"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: ideas and techniques",
      questions: [
        { type: "mc", q: "Leopardi's \"cosmic pessimism\" attributes unhappiness…", options: ["to modern society", "to Nature", "to the Greek gods"], answer: 1, explain: "In the cosmic phase Leopardi sees Nature as a \"stepmother\", indifferent to man." },
        { type: "mc", q: "What does \"rinsing clothes in the Arno\" mean?", options: ["Taking a pleasure trip", "Using cultivated Florentine as a model of language", "Writing in Milanese dialect"], answer: 1, explain: "Manzoni revised the novel on cultivated spoken Florentine to offer a common language." },
        { type: "tf", q: "In verist impersonality the narrator often comments on events.", answer: false, explain: "On the contrary: the author \"eclipses himself\" and lets facts and characters speak." }
      ]
    }
  ],
  glossary: [
    { t: "Neoclassicism", d: "Movement that imitates the ideal beauty of Greco-Roman art." },
    { t: "Romanticism", d: "Movement that values feeling, history, the people and the nation." },
    { t: "Verismo", d: "Italian movement that represents reality objectively, above all that of the humble." },
    { t: "Epistolary novel", d: "Novel written in the form of letters (e.g. Jacopo Ortis)." },
    { t: "Carme", d: "Solemn poem, like Dei Sepolcri." },
    { t: "Historical / cosmic pessimism", d: "The two phases of Leopardi's thought on human unhappiness." },
    { t: "Providence", d: "According to Manzoni, God's intervention in human history." },
    { t: "Impersonality", d: "Verist technique in which the author does not intervene with comments." },
    { t: "Regression", d: "The narrator adopts the point of view and language of the characters." },
    { t: "Cycle of the vanquished", d: "Verga's project of novels about those swept away by the desire to improve." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Where was Ugo Foscolo born?", options: ["Venice", "Zakynthos", "London"], answer: 1, explain: "On Zakynthos (Zacinto), a Greek island then belonging to Venice." },
      { type: "mc", q: "Which work is NOT by Leopardi?", options: ["L'infinito", "Il sabato del villaggio", "Il cinque maggio"], answer: 2, explain: "Il cinque maggio is by Manzoni, on the death of Napoleon." },
      { type: "num", q: "In which year did the first edition of I promessi sposi (the \"Ventisettana\") come out?", answer: 1827, explain: "In 1827; the definitive edition came out in 1840–42." },
      { type: "mc", q: "In which period is the novel I promessi sposi set?", options: ["1628–1630", "1815–1820", "1492–1500"], answer: 0, explain: "In Spanish Lombardy, during the famine and plague of 1630." },
      { type: "text", q: "What is the name of the Toscano family's boat in I Malavoglia?", answer: ["provvidenza", "la provvidenza", "providence", "the providence"], explain: "The Provvidenza (Providence): an ironic name, because it will lead to ruin." },
      { type: "tf", q: "According to Foscolo in the Sepolcri, tombs are useful above all to the living.", answer: true, explain: "They keep memory alive and inspire great deeds." },
      { type: "mc", q: "From which French movement does Verismo derive?", options: ["Symbolism", "Naturalism", "Enlightenment"], answer: 1, explain: "From the Naturalism of Émile Zola." },
      { type: "order", q: "Put these works in chronological order.", items: ["Ultime lettere di Jacopo Ortis", "L'infinito", "I promessi sposi (1st ed.)", "I Malavoglia"], explain: "1802, 1819, 1827, 1881." },
      { type: "mc", q: "In \"La ginestra\" Leopardi proposes as a response to pain…", options: ["flight from society", "solidarity among human beings", "faith in Providence"], answer: 1, explain: "Human beings must unite against hostile Nature." },
      { type: "tf", q: "Manzoni and Verga both tell of humble characters.", answer: true, explain: "Yes, but with different visions: in Manzoni there is Providence, in Verga a destiny without redemption." },
      { type: "text", q: "What is the name of the red-haired boy who is the protagonist of a story by Verga?", answer: ["rosso malpelo", "malpelo"], explain: "Rosso Malpelo, in the collection Vita dei campi (1880)." }
    ]
  }
});
