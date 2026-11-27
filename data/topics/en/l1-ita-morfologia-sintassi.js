TOPIC('en', {
  id: "l1-ita-morfologia-sintassi",
  title: "Thinking about language: morphology and syntax",
  intro: "Italian speakers have spoken it all their lives, but <b>do they know how it works</b>? Grammar is the tool we use to \"take a language apart\" and understand its mechanisms, like opening up a watch. In this lesson we review and go deeper into <b>morphology</b> (the parts of speech: what kinds of words we have) and the <b>syntax</b> of the simple sentence (<b>analisi logica</b>, \"logical analysis\": what role each word or group of words plays in the sentence). The Italian words and sentences are what we are studying, so they stay in Italian, with an English translation in brackets.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Morphology and syntax: two levels of analysis",
      html: `<p>Grammar studies how a language is built and is divided into levels:</p>
<ul>
<li><b>Phonology and spelling</b>: sounds and how they are written.</li>
<li><b>Morphology</b>: the <b>form of words</b> and their classification into <b>parts of speech</b>. It studies how a word changes (gender, number, person, tense...).</li>
<li><b>Syntax</b>: how words combine to form <b>sentences</b> (clauses) and <b>complex sentences</b>. It studies their order and relationships.</li>
<li><b>Vocabulary and semantics</b>: the meaning of words.</li>
</ul>
<p>Example: in the sentence <i>\"Il gatto dorme sul divano\"</i> (The cat sleeps on the sofa), morphology tells us that <i>gatto</i> is a masculine singular noun and <i>dorme</i> a verb in the third person singular of the present tense; syntax tells us that <i>il gatto</i> is the subject and <i>sul divano</i> indicates the place where the action happens.</p>`
    },
    {
      type: "text",
      title: "2. The nine parts of speech",
      html: `<p>Italian words are divided into <b>nine categories</b>. Five are <b>variable</b> (they change form) and four are <b>invariable</b>.</p>
<p><b>Variable</b></p>
<ul>
<li><b>Noun</b>: names people, animals, things, ideas. Common/proper, concrete/abstract, primitive/derived/altered/compound, individual/collective.</li>
<li><b>Article</b>: comes before the noun and shows its gender and number. <i>Definite</i> (il, lo, la, i, gli, le = the), <i>indefinite</i> (un, uno, una = a/an), <i>partitive</i> (del, dello, della... = some).</li>
<li><b>Adjective</b>: goes with a noun to describe it (<i>qualifying</i>: \"un libro interessante\", an interesting book) or to specify it (<i>possessive, demonstrative, indefinite, numeral, interrogative/exclamatory</i>).</li>
<li><b>Pronoun</b>: replaces a noun (<i>personal, possessive, demonstrative, indefinite, relative, interrogative</i>). \"Marco è arrivato: <b>lo</b> ho visto.\" (Marco has arrived: I saw <b>him</b>.)</li>
<li><b>Verb</b>: indicates an action, a state or a way of being. It is conjugated for person, number, tense, mood and voice (active, passive, reflexive).</li>
</ul>
<p><b>Invariable</b></p>
<ul>
<li><b>Adverb</b>: modifies a verb, an adjective or another adverb (\"corre <b>velocemente</b>\", runs <b>quickly</b>; \"molto bello\", very beautiful).</li>
<li><b>Preposition</b>: links words and shows the kind of relationship (<i>di, a, da, in, con, su, per, tra, fra</i> = of, to, from, in, with, on, for, between). When it joins with the article it becomes an <i>articulated preposition</i> (del, nella, sul... = of the, in the, on the).</li>
<li><b>Conjunction</b>: joins words or clauses (<i>e, ma, perché, se, quando...</i> = and, but, because, if, when).</li>
<li><b>Interjection</b>: expresses a sudden emotion (<i>ah!, uffa!, evviva!</i> = ah!, ugh!, hooray!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Variable or invariable?",
      widget: "classify",
      options: { groups: ["Variable", "Invariable"], items: [["gatto, cat (noun)", 0], ["veloce, fast (adjective)", 0], ["rapidamente, quickly (adverb)", 1], ["con, with (preposition)", 1], ["mangiare, to eat (verb)", 0], ["ma, but (conjunction)", 1], ["la, the (article)", 0], ["evviva!, hooray! (interjection)", 1]] },
      caption: "Sort the words according to whether or not they change form."
    },
    {
      type: "example",
      title: "Grammatical analysis of a sentence",
      html: `<p><i>\"Domani i miei amici arriveranno con un treno velocissimo.\"</i> (Tomorrow my friends will arrive on a very fast train.)</p>
<ul>
<li><b>Domani</b> (tomorrow): adverb (of time).</li>
<li><b>i</b> (the): definite article, masculine plural.</li>
<li><b>miei</b> (my): possessive adjective, masculine plural.</li>
<li><b>amici</b> (friends): common, concrete noun, masculine plural.</li>
<li><b>arriveranno</b> (will arrive): intransitive verb, indicative simple future, 3rd person plural.</li>
<li><b>con</b> (with/on): simple preposition.</li>
<li><b>un</b> (a): indefinite article, masculine singular.</li>
<li><b>treno</b> (train): common, concrete noun, masculine singular.</li>
<li><b>velocissimo</b> (very fast): qualifying adjective, absolute superlative, masculine singular.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: parts of speech",
      questions: [
        { type: "mc", q: "In the sentence 'Parla troppo piano' (He speaks too softly), the word 'piano' is...", options: ["a noun", "an adverb", "an adjective"], answer: 1, explain: "It modifies the verb 'parla': it is an adverb (of manner)." },
        { type: "mc", q: "Which word is an articulated preposition?", options: ["della", "dalla vita", "perché", "quello"], answer: 0, explain: "'della' = di + la (of the). The others are a group of words, a conjunction and a pronoun/adjective." },
        { type: "tf", q: "The conjunction is a variable part of speech.", answer: false, explain: "Conjunctions, adverbs, prepositions and interjections are invariable." }
      ]
    },
    {
      type: "text",
      title: "3. The simple sentence and logical analysis",
      html: `<p>A <b>sentence</b> is a group of words with complete meaning. If it contains only one verb (one predicate) it is called a <b>simple sentence</b> or <b>clause</b> (<i>proposizione</i>); if it contains more than one it is a <b>complex sentence</b> (<i>periodo</i>, studied in <i>analisi del periodo</i>).</p>
<p><b>Logical analysis</b> (<i>analisi logica</i>) breaks the simple sentence down into its <b>elements</b>, each with a precise function. The core is made up of:</p>
<ul>
<li><b>Subject</b>: who performs the action or whom something is said about. You find it with the question <i>\"Who is it that...?\"</i>. It can be implied (\"Mangiamo\" = we eat: <i>noi</i>, we).</li>
<li><b>Predicate</b>: what is said about the subject. It can be:
  <ul>
  <li><b>verbal</b> (<i>predicato verbale</i>): a verb with full meaning (\"Il cane <b>corre</b>\", the dog <b>runs</b>);</li>
  <li><b>nominal</b> (<i>predicato nominale</i>): copula (the verb \"to be\" or similar) + <b>predicate noun or adjective</b> (\"Il cane <b>è</b> <b>fedele</b>\", the dog <b>is loyal</b>).</li>
  </ul></li>
</ul>
<p>Around the core come the <b>expansions</b>: <b>attribute</b>, <b>apposition</b> and the <b>complements</b> (<i>complementi</i>).</p>`
    },
    {
      type: "svg",
      title: "Anatomy of a simple sentence",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="35" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Ieri Marco ha mangiato una mela con la nonna</text>
<rect x="20" y="60" width="70" height="40" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="55" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Ieri</text>
<rect x="105" y="60" width="90" height="40" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="150" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Marco</text>
<rect x="210" y="60" width="140" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="280" y="86" font-size="16" text-anchor="middle" fill="#0f172a">ha mangiato</text>
<rect x="365" y="60" width="90" height="40" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="410" y="86" font-size="16" text-anchor="middle" fill="#0f172a">una mela</text>
<rect x="470" y="60" width="110" height="40" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="525" y="86" font-size="16" text-anchor="middle" fill="#0f172a">con la nonna</text>
<text x="55" y="140" font-size="14" text-anchor="middle" fill="#92400e" font-weight="bold">time compl.</text>
<text x="150" y="140" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">subject</text>
<text x="280" y="140" font-size="14" text-anchor="middle" fill="#166534" font-weight="bold">verbal predicate</text>
<text x="410" y="140" font-size="14" text-anchor="middle" fill="#991b1b" font-weight="bold">direct object</text>
<text x="525" y="140" font-size="14" text-anchor="middle" fill="#6b21a8" font-weight="bold">compl. of company</text>
<text x="300" y="210" font-size="16" text-anchor="middle" fill="#0f172a">Guiding questions:</text>
<text x="300" y="235" font-size="14" text-anchor="middle" fill="#0f172a">Who? (subject) · What does he do? (predicate) · What? (object)</text>
<text x="300" y="258" font-size="14" text-anchor="middle" fill="#0f172a">When? Where? With whom? How? Why? (indirect complements)</text>
</svg>`,
      caption: "\"Yesterday Marco ate an apple with his grandmother\": each part of the sentence answers a question. Find the predicate first, then the subject."
    },
    {
      type: "text",
      title: "4. Attribute, apposition and complements",
      html: `<p><b>Attribute</b>: an adjective that goes with a noun (\"una <b>bella</b> giornata\", a <b>beautiful</b> day). <b>Apposition</b>: a noun placed next to another to specify it (\"Dante, <b>poeta</b>\", Dante, <b>poet</b>; \"il fiume <b>Po</b>\", the river <b>Po</b>).</p>
<p><b>Complements</b> complete the meaning of the predicate. The <b>direct object</b> (<i>complemento oggetto</i>) answers <i>\"whom? what?\"</i> and has no preposition: \"Leggo <b>un libro</b>\" (I read <b>a book</b>). The others are <b>indirect complements</b>, introduced by a preposition:</p>
<table>
<tr><th>Complement</th><th>Answers</th><th>Example</th></tr>
<tr><td>Specification</td><td>whose? of what?</td><td>La casa <b>di Luca</b> (Luca's house)</td></tr>
<tr><td>Term (indirect object)</td><td>to whom? to what?</td><td>Scrivo <b>a Marta</b> (I write to Marta)</td></tr>
<tr><td>Place</td><td>where? where from? which way?</td><td>Vivo <b>a Torino</b> (I live in Turin)</td></tr>
<tr><td>Time</td><td>when? for how long?</td><td>Parto <b>domani</b>; studio <b>per due ore</b> (I leave tomorrow; I study for two hours)</td></tr>
<tr><td>Means</td><td>by what means?</td><td>Viaggio <b>in treno</b> (I travel by train)</td></tr>
<tr><td>Manner</td><td>how?</td><td>Parla <b>con calma</b> (He speaks calmly)</td></tr>
<tr><td>Cause</td><td>for what reason?</td><td>Tremo <b>per il freddo</b> (I'm shivering with cold)</td></tr>
<tr><td>Purpose</td><td>for what aim?</td><td>Studio <b>per la promozione</b> (I study to pass the year)</td></tr>
<tr><td>Company / union</td><td>with whom? with what?</td><td>Esco <b>con gli amici</b> (I go out with friends)</td></tr>
<tr><td>Agent / efficient cause</td><td>by whom? (with a passive verb)</td><td>Il quadro fu dipinto <b>da Giotto</b> (The painting was painted by Giotto)</td></tr>
<tr><td>Topic</td><td>about what?</td><td>Un libro <b>sulla storia romana</b> (A book on Roman history)</td></tr>
<tr><td>Material</td><td>made of what?</td><td>Un anello <b>d'oro</b> (A gold ring)</td></tr>
<tr><td>Quality</td><td>with what feature?</td><td>Una ragazza <b>dai capelli rossi</b> (A girl with red hair)</td></tr>
</table>
<p>The same noun can have different functions: it depends on the <b>verb</b> and the <b>preposition</b>. In \"Il vaso <b>di vetro</b>\" (the glass vase) it is material; in \"il vaso <b>di Marta</b>\" (Marta's vase) it is specification.</p>`
    },
    {
      type: "remember",
      title: "The method of logical analysis",
      html: `<ol><li>Look for the <b>predicate</b> (the verb, possibly with a copula).</li><li>Find the <b>subject</b> (who does the action?). In the passive, the subject <i>undergoes</i> the action.</li><li>Look for the <b>direct object</b> (no preposition).</li><li>For indirect complements, look at the <b>preposition</b> and ask the <b>right question</b>.</li><li>Remember: the <b>same preposition</b> can introduce different complements (<i>con</i>: company, means, manner...). Meaning is what counts.</li></ol>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the sentence",
      intro: "If logical analysis looks like a list to learn by heart, try these points of view.",
      tabs: [
        { label: "🎬 The sentence as a film", html: "<p>Imagine the sentence as a <b>scene in a film</b>: the <b>predicate</b> is the action, the <b>subject</b> is the actor, the <b>direct object</b> is what the action directly affects, and the <b>indirect complements</b> are the background: where, when, with whom, why, how. Ask yourself \"who does what? And where, when, how?\".</p>" },
        { label: "🌳 The sentence tree", html: "<p>Some schools of linguistics represent the sentence as a <b>tree</b>: the predicate is the trunk, from which the branches (subject, object, complements) grow, each with its own twigs (attributes, appositions). The \"valency\" grammar of <b>Lucien Tesnière</b> (1893-1954) works like this: the verb is the centre and requires a certain number of \"slots\" (<i>valencies</i>) to be filled. The verb <i>dare</i> (to give) requires three: who gives, what, to whom.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><circle cx="300" cy="50" r="38" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="56" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">dà (gives)</text><line x1="270" y1="78" x2="120" y2="170" stroke="#334155" stroke-width="2"/><line x1="300" y1="88" x2="300" y2="170" stroke="#334155" stroke-width="2"/><line x1="330" y1="78" x2="480" y2="170" stroke="#334155" stroke-width="2"/><rect x="60" y="170" width="120" height="44" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="120" y="197" font-size="16" text-anchor="middle" fill="#0f172a">Anna (who)</text><rect x="240" y="170" width="120" height="44" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="300" y="197" font-size="16" text-anchor="middle" fill="#0f172a">un libro (what)</text><rect x="420" y="170" width="140" height="44" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="490" y="197" font-size="16" text-anchor="middle" fill="#0f172a">a Luca (to whom)</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">The verb \"dare\" has three valencies: subject, object, indirect object</text></svg>` },
        { label: "🧩 The substitution test", html: "<p>To work out the <b>part of speech</b> of a word, test it in a frame you are sure of. If you can put <i>\"molto\"</i> (very) in front of it (\"molto <b>bene</b>\", very well), it is an adverb; if you can put <i>\"il/la\"</i> (the) in front of it, it is a noun (\"il <b>bene</b>\", the good). The same word <i>bene</i> changes category depending on the sentence. In grammar what counts is the <b>function</b>, not just the word.</p>" }
      ]
    },
    {
      type: "text",
      title: "5. Special cases: passive, reflexive, nominal predicate",
      html: `<p>Some verbs change the structure of the sentence.</p>
<ul>
<li><b>Passive voice</b>: the subject <i>undergoes</i> the action; whoever performs it becomes the <b>agent complement</b>: \"Il ladro <b>fu arrestato dai carabinieri</b>\" (The thief <b>was arrested by the carabinieri</b>, the Italian military police). Active sentence: \"I carabinieri arrestarono il ladro\" (carabinieri = subject; ladro = direct object).</li>
<li><b>Reflexive voice</b>: subject and object are the same (\"Luca <b>si lava</b>\", Luca washes himself): <i>si</i> is a direct object pronoun.</li>
<li><b>Nominal predicate</b>: \"La Terra <b>è</b> <b>rotonda</b>\" (The Earth is round); \"Roma è la capitale\" (Rome is the capital). Here the verb <i>essere</i> (to be) is a copula and has no meaning of its own; other copular verbs: <i>sembrare, diventare, parere, restare</i> (to seem, to become, to appear, to remain).</li>
<li><b>Implied subject</b>: in Italian, subject pronouns are often left out, because the verb ending shows the person (\"Vado\" = io vado, I go).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Is logical analysis an Italian invention?",
      html: `<p>Largely, yes: <b>analisi logica</b> as a school exercise, with this name and this list of complements, is typical of Italian schools. In other countries students do <i>sentence parsing</i> or constituent analysis. The name \"logical\" recalls the idea of recognising in the sentence the relationships of thought between words. Today modern linguists, such as <b>Noam Chomsky</b> (born in 1928), describe syntax with \"tree\" models similar to the one in the previous card.</p>`
    },
    {
      type: "curiosity",
      title: "Words that change jobs",
      html: `<p>Many words move from one category to another. <i>\"Il bello della vita\"</i> (the beauty of life, literally \"the beautiful of life\"): <i>bello</i>, an adjective, is used as a noun. <i>\"Cammina piano\"</i> (walk slowly) and <i>\"un piano di studi\"</i> (a study plan): adverb and noun. That is why we say that the <b>grammatical category</b> is decided <b>in use</b>, not in the dictionary.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: grammar and the simple sentence",
      nodes: [
        { id: "gram", label: "Grammar", x: 50, y: 8, color: "#3b82f6", html: "The study of the rules by which a language works.", why: "Since the Greeks and Romans (Dionysius Thrax, Priscian) grammar has described words and their relationships. The names of the parts of speech come from these ancient grammars." },
        { id: "morf", label: "Morphology", x: 20, y: 40, color: "#10b981", html: "Studies the form and classification of words: nine parts of speech.", why: "The categories come from how words behave: some change (variable), others do not. Classification helps predict how they are used." },
        { id: "sint", label: "Syntax", x: 80, y: 40, color: "#f59e0b", html: "Studies how words form sentences and complex sentences.", why: "A sentence is not a sum of words: order and links (agreement, prepositions) produce meaning. \"Il cane morde l'uomo\" (the dog bites the man) and \"L'uomo morde il cane\" (the man bites the dog) have the same words and opposite meanings." },
        { id: "log", label: "Logical analysis", x: 80, y: 72, color: "#8b5cf6", html: "Subject, predicate, attribute, apposition, direct object and indirect complements.", why: "It helps you understand who does what and in what circumstances. It helps you write clear sentences and avoid ambiguity." },
        { id: "parti", label: "Parts of speech", x: 20, y: 72, color: "#ef4444", html: "Five variable (noun, article, adjective, pronoun, verb), four invariable (adverb, preposition, conjunction, interjection).", why: "The split into variable and invariable depends on whether a word can be inflected; in Italian (a language derived from Latin) inflection is rich in the verb and in the noun group." }
      ],
      edges: [["gram", "morf", "includes"], ["gram", "sint", "includes"], ["sint", "log", "simple sentence"], ["morf", "parti", "classifies into"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz: logical analysis",
      questions: [
        { type: "mc", q: "'La torta è squisita' (The cake is delicious): 'è squisita' is...", options: ["a verbal predicate", "a nominal predicate", "an attribute"], answer: 1, explain: "It is copula + adjective (predicate adjective)." },
        { type: "mc", q: "In 'Sono partito per Roma' (I left for Rome), 'per Roma' is a complement of...", options: ["purpose", "place", "cause"], answer: 1, explain: "It indicates the destination of the journey: complement of motion to a place." },
        { type: "tf", q: "In the sentence 'Il libro fu scritto da Manzoni' (The book was written by Manzoni), 'Manzoni' is the subject.", answer: false, explain: "It is the agent complement: the subject is 'il libro'." }
      ]
    }
  ],
  glossary: [
    { t: "Morphology", d: "The study of the form of words and of the parts of speech." },
    { t: "Syntax", d: "The study of the relationships between words in the clause and in the complex sentence." },
    { t: "Verbal predicate", d: "A predicate made of a verb with complete meaning." },
    { t: "Nominal predicate", d: "A copula (the verb to be or similar) plus a predicate noun or adjective." },
    { t: "Direct object", d: "A direct complement, without a preposition, showing whom or what the action falls on (complemento oggetto)." },
    { t: "Indirect complement", d: "A complement introduced by a preposition." },
    { t: "Apposition", d: "A noun placed next to another noun to specify it." },
    { t: "Attribute", d: "An adjective referring directly to a noun." },
    { t: "Copula", d: "The verb to be (or similar) linking the subject and the predicate noun or adjective." },
    { t: "Agent complement", d: "Shows by whom the action is performed in a passive sentence." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "How many parts of speech are there in Italian?", options: ["seven", "eight", "nine", "ten"], answer: 2, explain: "Noun, article, adjective, pronoun, verb, adverb, preposition, conjunction, interjection." },
      { type: "mc", q: "Which part of speech is invariable?", options: ["Pronoun", "Conjunction", "Adjective", "Verb"], answer: 1, explain: "The invariable ones are adverb, preposition, conjunction and interjection." },
      { type: "text", q: "What is the verb 'essere' (to be) called when it links the subject to the predicate noun or adjective?", answer: ["copula", "the copula", "a copula", "linking verb"], explain: "In 'Anna è stanca' (Anna is tired), 'è' is the copula." },
      { type: "mc", q: "In 'Parlo con calma' (I speak calmly), 'con calma' is a complement of...", options: ["company", "means", "manner", "cause"], answer: 2, explain: "It answers 'how?': manner." },
      { type: "tf", q: "In the sentence 'Mi piace il mare' (I like the sea, literally \"the sea pleases me\"), 'il mare' is the subject.", answer: true, explain: "What is pleasing? The sea: subject; 'mi' is the indirect object (complement of term)." },
      { type: "mc", q: "'La casa di Luca' (Luca's house) contains a complement of...", options: ["specification", "term (indirect object)", "place", "agent"], answer: 0, explain: "It answers 'whose?': specification." },
      { type: "mc", q: "In 'Dante, poeta fiorentino, scrisse la Commedia' (Dante, a Florentine poet, wrote the Comedy), 'poeta' is...", options: ["an attribute", "an apposition", "a nominal predicate", "a direct object"], answer: 1, explain: "It is a noun placed next to 'Dante' to specify him: apposition." },
      { type: "order", q: "Put the steps of logical analysis in the recommended order.", items: ["Find the predicate", "Find the subject", "Find the direct object", "Analyse the indirect complements"], explain: "Start from the verb, then the subject, then the elements the verb governs, and finally the indirect complements." },
      { type: "mc", q: "In 'Il compito fu corretto dal professore' (The test was marked by the teacher), 'dal professore' is...", options: ["a complement of cause", "an agent complement", "the subject", "a complement of place"], answer: 1, explain: "It shows who performs the action in a passive sentence." }
    ]
  }
});
