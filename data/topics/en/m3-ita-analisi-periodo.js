TOPIC('en', {
  id: "m3-ita-analisi-periodo",
  title: "Analysing the complex sentence (analisi del periodo)",
  intro: "A complex sentence is like a building: there is a load-bearing structure (the <b>main clause</b>) and there are connected rooms (the <b>coordinate</b> and <b>subordinate clauses</b>). With sentence analysis (<i>analisi del periodo</i>) we learn to take long sentences apart, to understand who is in charge and who depends on whom, and to write clearer texts. The examples are Italian sentences, as this lesson is about Italian grammar; an English version is given in brackets where it helps.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Simple sentence, complex sentence and clauses",
      html: `<p>In logical analysis (<i>analisi logica</i>) you studied the <b>simple sentence</b>: a single predicate (verb) with its complements. When a sentence contains <b>more than one verb in a finite or non-finite mood</b>, we have a <b>periodo</b> (a complex sentence).</p>
<p>Every part of the <i>periodo</i> that has its own predicate is called a <b>clause</b> (<i>proposizione</i>). Golden rule: <b>as many clauses as there are predicates</b>.</p>
<p>Example: <i>"Quando sono arrivato, | Marco dormiva | e non ho voluto svegliarlo."</i> (When I arrived, Marco was sleeping and I didn't want to wake him.) → three predicates (<i>sono arrivato</i>, <i>dormiva</i>, <i>ho voluto svegliare</i>) → three clauses.</p>
<p>⚠️ Watch out for modal verbs (<i>volere, potere, dovere</i>: want, can, must) and phrasal/aspectual verbs (<i>stare per, cominciare a, smettere di</i>: be about to, begin to, stop): they form <b>a single predicate</b> with the infinitive that follows them. <i>"Devo studiare"</i> (I must study) is one clause only.</p>`
    },
    {
      type: "text",
      title: "Step 1 – Find the main clause",
      html: `<p>The <b>main clause</b> (or independent clause) is the one that:</p>
<ul>
<li>makes <b>complete sense on its own</b>;</li>
<li>does <b>not depend</b> on any other clause;</li>
<li>usually has its verb in the <b>indicative</b>, <b>conditional</b>, <b>imperative</b> or in the exhortative/optative subjunctive (<i>"Magari piovesse!"</i> – If only it would rain!).</li>
</ul>
<p>Main clauses can be: <b>declarative</b> (they state or deny: <i>"Oggi piove"</i> – It's raining today), <b>direct questions</b> (<i>"Vieni?"</i> – Are you coming?), <b>exclamatory</b> (<i>"Che bello!"</i> – How lovely!), <b>volitive/commands</b> (<i>"Chiudi la porta"</i> – Close the door), <b>optative/wishes</b> (<i>"Vorrei un gelato"</i> – I'd like an ice cream), <b>dubitative</b> (<i>"Che fare?"</i> – What to do?).</p>`
    },
    {
      type: "text",
      title: "Step 2 – Coordination and subordination",
      html: `<p>Clauses are linked in two ways:</p>
<table>
<tr><th>Coordination (parataxis)</th><th>Subordination (hypotaxis)</th></tr>
<tr><td>Clauses <b>on the same level</b>, none depends on the other.</td><td>One clause <b>depends</b> on another (the governing clause) and completes it.</td></tr>
<tr><td>Coordinating conjunctions: <i>e, né, o, ma, però, quindi, infatti, cioè, sia… sia</i> (and, nor, or, but, however, so, in fact, that is, both… and); or just a comma (<b>asyndeton</b>).</td><td>Subordinating conjunctions: <i>che, perché, quando, se, mentre, affinché, sebbene, poiché</i> (that, because, when, if, while, so that, although, since); relative pronouns; verbs in a non-finite mood.</td></tr>
<tr><td><i>"Studio <b>e</b> ascolto musica."</i> (I study <b>and</b> listen to music.)</td><td><i>"Studio <b>perché</b> domani ho la verifica."</i> (I study <b>because</b> I have a test tomorrow.)</td></tr>
</table>
<p>Coordinate clauses are classified according to the conjunction: <b>copulative</b> (e, né, anche: and, nor, also), <b>adversative</b> (ma, però, tuttavia: but, however, yet), <b>disjunctive</b> (o, oppure: or), <b>conclusive</b> (quindi, perciò, dunque: so, therefore), <b>declarative/explanatory</b> (infatti, cioè: in fact, that is), <b>correlative</b> (sia… sia, né… né: both… and, neither… nor).</p>`
    },
    {
      type: "svg",
      title: "The tree diagram of a complex sentence",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#334155">"Luca ha detto che verrà alla festa e porterà la torta, se finisce i compiti."</text>
<rect x="210" y="50" width="220" height="50" rx="10" fill="#2563eb"/>
<text x="320" y="73" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">MAIN CLAUSE</text>
<text x="320" y="92" font-size="15" text-anchor="middle" fill="#fff">Luca ha detto</text>
<line x1="320" y1="100" x2="190" y2="150" stroke="#334155" stroke-width="3"/>
<rect x="60" y="150" width="240" height="50" rx="10" fill="#16a34a"/>
<text x="180" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">SUB. 1st degree (object)</text>
<text x="180" y="191" font-size="15" text-anchor="middle" fill="#fff">che verrà alla festa</text>
<line x1="300" y1="175" x2="350" y2="175" stroke="#f97316" stroke-width="4" stroke-dasharray="8 5"/>
<text x="325" y="165" font-size="14" text-anchor="middle" fill="#c2410c">e</text>
<rect x="350" y="150" width="250" height="50" rx="10" fill="#22c55e"/>
<text x="475" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">coordinate to the 1st-degree sub.</text>
<text x="475" y="191" font-size="15" text-anchor="middle" fill="#fff">(e) porterà la torta</text>
<line x1="180" y1="200" x2="180" y2="250" stroke="#334155" stroke-width="3"/>
<rect x="60" y="250" width="240" height="50" rx="10" fill="#a855f7"/>
<text x="180" y="272" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">SUB. 2nd degree (conditional)</text>
<text x="180" y="291" font-size="15" text-anchor="middle" fill="#fff">se finisce i compiti</text>
<text x="470" y="275" font-size="14" fill="#334155">— solid line: depends on</text>
<text x="470" y="298" font-size="14" fill="#c2410c">- - dashed: coordination</text>
</svg>`,
      caption: "The main clause is at the top; each subordinate clause 'steps down' one degree; coordinate clauses stand on the same level."
    },
    {
      type: "text",
      title: "Step 3 – Explicit and implicit form; the degrees",
      html: `<p>A subordinate clause can be:</p>
<ul>
<li><b>explicit</b>: verb in a <b>finite</b> mood (indicative, subjunctive, conditional), introduced by a conjunction or a relative → <i>"Ti chiamo <b>quando arrivo</b>."</i> (I'll call you <b>when I arrive</b>.)</li>
<li><b>implicit</b>: verb in a <b>non-finite</b> mood (infinitive, participle, gerund) → <i>"Ti chiamo <b>arrivato</b> a casa"</i> (I'll call you once <b>arrived</b> home), <i>"<b>Arrivando</b> a casa, ti chiamo."</i> (<b>Arriving</b> home, I'll call you.)</li>
</ul>
<p>The <b>degree</b> shows the distance from the main clause: a subordinate clause that depends on the main clause is <b>1st degree</b>; if it depends on a 1st-degree subordinate it is <b>2nd degree</b>, and so on.</p>`
    },
    {
      type: "text",
      title: "Step 4 – The types of subordinate clauses",
      html: `<p>Many subordinate clauses correspond to a complement of logical analysis: they are "complements turned into clauses".</p>
<table>
<tr><th>Subordinate</th><th>Answers…</th><th>Example</th></tr>
<tr><td><b>Subject clause</b> (soggettiva)</td><td>acts as the subject</td><td><i>È importante <b>che tu venga</b>.</i> (It is important <b>that you come</b>.)</td></tr>
<tr><td><b>Object clause</b> (oggettiva)</td><td>acts as the direct object</td><td><i>So <b>che hai ragione</b>.</i> (I know <b>that you are right</b>.)</td></tr>
<tr><td><b>Declarative clause</b> (dichiarativa)</td><td>explains a noun or pronoun</td><td><i>Ho la speranza <b>che vinca</b>.</i> (I have the hope <b>that he wins</b>.)</td></tr>
<tr><td><b>Indirect question</b> (interrogativa indiretta)</td><td>reported question</td><td><i>Mi chiedo <b>se verrà</b>.</i> (I wonder <b>whether he will come</b>.)</td></tr>
<tr><td><b>Relative clause</b> (relativa)</td><td>like an adjective</td><td><i>Il libro <b>che leggo</b> è bello.</i> (The book <b>that I am reading</b> is good.)</td></tr>
<tr><td><b>Causal</b> (causale)</td><td>why?</td><td><i>Resto a casa <b>perché piove</b>.</i> (I stay home <b>because it's raining</b>.)</td></tr>
<tr><td><b>Purpose</b> (finale)</td><td>for what purpose?</td><td><i>Studio <b>per superare l'esame</b>.</i> (I study <b>to pass the exam</b>.)</td></tr>
<tr><td><b>Temporal</b> (temporale)</td><td>when?</td><td><i><b>Mentre mangiavo</b>, squillò il telefono.</i> (<b>While I was eating</b>, the phone rang.)</td></tr>
<tr><td><b>Consecutive</b> (consecutiva)</td><td>with what result?</td><td><i>Era così stanco <b>che si addormentò</b>.</i> (He was so tired <b>that he fell asleep</b>.)</td></tr>
<tr><td><b>Concessive</b> (concessiva)</td><td>in spite of what?</td><td><i><b>Sebbene piovesse</b>, uscimmo.</i> (<b>Although it was raining</b>, we went out.)</td></tr>
<tr><td><b>Conditional</b> (condizionale, the "if" sentence)</td><td>on what condition?</td><td><i><b>Se studi</b>, sarai promosso.</i> (<b>If you study</b>, you will pass.)</td></tr>
<tr><td><b>Modal</b> (modale)</td><td>in what way?</td><td><i>Entrò <b>correndo</b>.</i> (He came in <b>running</b>.)</td></tr>
<tr><td><b>Comparative</b> (comparativa)</td><td>compared with what?</td><td><i>È più facile <b>di quanto pensassi</b>.</i> (It is easier <b>than I thought</b>.)</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: clauses and links",
      questions: [
        { type: "num", q: "How many clauses are there in: \"Quando torno a casa, mangio e poi faccio i compiti\" (When I get home, I eat and then I do my homework)?", answer: 3, explain: "Three predicates: torno, mangio, faccio → three clauses." },
        { type: "mc", q: "In \"Esco, ma torno presto\" (I'm going out, but I'll be back soon) the second clause is…", options: ["a causal subordinate", "an adversative coordinate", "a main interrogative"], answer: 1, explain: "\"Ma\" is an adversative coordinating conjunction: the two clauses are on the same level." },
        { type: "tf", q: "\"Voglio partire\" (I want to leave) contains two clauses.", answer: false, explain: "\"Volere\" is a modal verb: \"voglio partire\" is a single predicate, so just one clause." }
      ]
    },
    {
      type: "example",
      title: "Guided example: analysing a complex sentence",
      html: `<p><i>"Poiché era tardi, Anna chiamò sua madre per dirle che sarebbe tornata in autobus."</i> (Since it was late, Anna called her mother to tell her that she would come back by bus.)</p>
<ol>
<li><b>I count the predicates</b>: era, chiamò, dire, sarebbe tornata → 4 clauses.</li>
<li><b>Main clause</b>: <i>Anna chiamò sua madre</i> (it makes sense on its own).</li>
<li><i>Poiché era tardi</i> → explicit <b>causal</b> subordinate, 1st degree.</li>
<li><i>per dirle</i> → implicit (infinitive) <b>purpose</b> subordinate, 1st degree.</li>
<li><i>che sarebbe tornata in autobus</i> → explicit <b>object</b> subordinate, 2nd degree (it depends on "dirle").</li>
</ol>`
    },
    {
      type: "example",
      title: "Worked example: turning implicit ↔ explicit",
      html: `<p>Knowing how to switch from one form to the other helps you write better and avoid repeating "che" (that).</p>
<ul>
<li><i>"<b>Finiti</b> i compiti, uscì"</i> (implicit temporal, participle; "Homework finished, he went out") → <i>"<b>Dopo che ebbe finito</b> i compiti, uscì"</i> (explicit; "After he had finished his homework, he went out").</li>
<li><i>"Penso <b>di avere ragione</b>"</i> (implicit object; "I think I'm right") → <i>"Penso <b>che io abbia ragione</b>"</i>: the explicit form sounds heavy here, because the subject is the same. When the subject is the same the <b>implicit</b> form is preferred.</li>
<li><i>"<b>Sbagliando</b> s'impara"</i> (gerund with a causal/instrumental value; "You learn by making mistakes") → <i>"<b>Poiché si sbaglia</b>, s'impara"</i>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Practice: coordinate or subordinate?",
      widget: "classify",
      options: {
        groups: ["Coordinate", "Subordinate"],
        items: [
          ["…ma non avevo l'ombrello", 0],
          ["…perché avevo fame", 1],
          ["…e poi sono uscito", 0],
          ["…sebbene fosse stanco", 1],
          ["…quindi ho deciso di restare", 0],
          ["…che mi hai prestato", 1],
          ["…oppure guardiamo un film", 0],
          ["…affinché tu capisca", 1],
          ["…infatti era già buio", 0],
          ["…mentre leggevo", 1]
        ]
      },
      caption: "Look at the conjunction: coordinating ones put clauses on an equal footing, subordinating ones create dependence."
    },
    {
      type: "widget",
      title: "Match the subordinate clause to its type",
      widget: "match",
      options: {
        pairs: [
          ["Se piove", "conditional"],
          ["Benché fosse malato", "concessive"],
          ["Per non fare tardi", "purpose"],
          ["Mi domando chi sia", "indirect question"],
          ["Era così buio che non vedevo", "consecutive"],
          ["Dopo aver mangiato", "temporal"]
        ]
      },
      caption: "Always ask yourself: which question does this clause answer?"
    },
    {
      type: "curiosity",
      title: "Did you know…? Parataxis and hypotaxis in literature",
      html: `<p>Writers choose their style also according to syntax. <b>Giovanni Boccaccio</b> in the <i>Decameron</i> (1349–1353) imitated the Latin period, with very long chains of subordinate clauses. Centuries later, <b>Giovanni Verga</b> and then many twentieth-century authors preferred a more <b>paratactic</b> syntax, with short, coordinated sentences, closer to speech. Try comparing a page of <i>I promessi sposi</i> (The Betrothed) with one of Primo Levi's <i>Se questo è un uomo</i> (If This Is a Man): you will notice the difference!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The longest sentence",
      html: `<p>The French writer <b>Marcel Proust</b>, in the novel <i>In Search of Lost Time</i>, wrote a sentence of over <b>900 words</b>! In Italian, Carlo Emilio Gadda is famous for tangled sentences full of parentheses. At the opposite extreme, newspaper headlines and text messages use almost only short sentences: syntax changes with the purpose of the text.</p>`
    },
    {
      type: "remember",
      title: "Remember: the 5-move method",
      html: `<ol>
<li>Underline the <b>predicates</b> and divide the sentence into clauses.</li>
<li>Find the <b>main clause</b> (it makes sense on its own).</li>
<li>For every other clause ask yourself: is it <b>on an equal footing</b> (coordinate) or does it <b>depend</b> (subordinate)?</li>
<li>For subordinate clauses give: <b>type</b> (causal, purpose…), <b>form</b> (explicit/implicit), <b>degree</b>.</li>
<li>Draw the <b>tree diagram</b>.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand sentence analysis",
      intro: "If the traditional diagram confuses you, try one of these routes: an analogy, a method used abroad, a 3D model.",
      tabs: [
        {
          label: "🏢 The building",
          html: `<p>Imagine the complex sentence as a <b>block of flats</b>:</p>
<ul>
<li>the <b>main clause</b> is the <b>ground floor</b>: it stands up on its own;</li>
<li>the <b>1st-degree subordinates</b> are the <b>first floor</b>: they rest on the ground floor;</li>
<li>those of <b>2nd degree</b> are on the <b>second floor</b>, resting on the first;</li>
<li>the <b>coordinate clauses</b> are <b>rooms side by side on the same floor</b>, joined by a door (and, but, or…).</li>
</ul>
<p>If you take away the ground floor everything collapses; if you take away a room on the second floor, the building stays up. That is why the main clause is the only one that holds up on its own!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#e0f2fe"/>
<rect x="100" y="200" width="400" height="60" fill="#2563eb"/>
<text x="300" y="237" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">Ground floor: MAIN CLAUSE</text>
<rect x="100" y="130" width="195" height="70" fill="#16a34a" stroke="#fff" stroke-width="3"/>
<rect x="305" y="130" width="195" height="70" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<text x="197" y="170" font-size="16" text-anchor="middle" fill="#fff">1st degree</text>
<text x="402" y="170" font-size="16" text-anchor="middle" fill="#fff">coordinate (1st degree)</text>
<rect x="100" y="60" width="195" height="70" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<text x="197" y="100" font-size="16" text-anchor="middle" fill="#fff">2nd degree</text>
<polygon points="90,60 197,15 305,60" fill="#ef4444"/>
<rect x="290" y="150" width="30" height="40" fill="#f59e0b"/>
<text x="540" y="170" font-size="14" fill="#334155">door</text>
<text x="540" y="188" font-size="14" fill="#334155">= "e"</text>
</svg>`
        },
        {
          label: "🇬🇧 The English method: main & dependent clauses",
          html: `<p>In English schools they speak of the <b>main clause</b> and the <b>subordinate</b> or <b>dependent clause</b>. The test they teach is very simple: <b>"Can it stand alone?"</b> – can it stand on its own as a sentence?</p>
<p>Subordinate clauses are divided into three families, according to their function:</p>
<ul>
<li><b>noun clauses</b> (they work as a noun) → the Italian subject clauses, object clauses, indirect questions;</li>
<li><b>adjective/relative clauses</b> (they work as an adjective) → the Italian relative clauses;</li>
<li><b>adverbial clauses</b> (they work as an adverb) → causal, temporal, purpose, concessive…</li>
</ul>
<p>Three families instead of twenty names: it is easier to start with! Then inside each family you find the Italian types.</p>`
        },
        {
          label: "🧩 Replace with one word",
          html: `<p>Practical trick: try to <b>replace the subordinate clause with a single word</b>. The type of word tells you the type of clause!</p>
<ul>
<li><i>"So <b>che hai vinto</b>"</i> (I know that you won) → <i>"So <b>questo</b>"</i> (I know this; noun/pronoun object) → <b>object clause</b>.</li>
<li><i>"Il ragazzo <b>che corre</b> è mio fratello"</i> (The boy who is running is my brother) → <i>"Il ragazzo <b>veloce</b>"</i> (the fast boy; adjective) → <b>relative clause</b>.</li>
<li><i>"Esco <b>quando smette di piovere</b>"</i> (I'll go out when it stops raining) → <i>"Esco <b>dopo</b>"</i> (I'll go out later; adverb of time) → <b>temporal clause</b>.</li>
<li><i>"Lo faccio <b>per aiutarti</b>"</i> (I do it to help you) → <i>"Lo faccio <b>per te</b>"</i> (I do it for you; complement of purpose) → <b>purpose clause</b>.</li>
</ul>`
        },
        {
          label: "🧊 The sentence in 3D",
          html: `<p>Look at this layered "tower": each layer is a <b>degree</b> of subordination. The central core is the <b>main clause</b>; the further you move from the centre, the more "distant" and dependent the clause is. Rotate the model: you will notice that every outer layer can exist only if the inner one holds it up.</p>`,
          scene: "layers",
          options: { layers: [
            { r: 1, color: "#c084fc", label: "Subordinate, 3rd degree" },
            { r: 0.78, color: "#a855f7", label: "Subordinate, 2nd degree" },
            { r: 0.56, color: "#22c55e", label: "Subordinate, 1st degree" },
            { r: 0.32, color: "#2563eb", label: "Main clause" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of sentence analysis: tap a node",
      nodes: [
        { id: "periodo", label: "Complex sentence (periodo)", x: 50, y: 6, color: "#0f172a", html: "A complex sentence made of several clauses, from the capital letter to the full stop.", why: "The term comes from the Greek <i>períodos</i>, \"going round, circuit\": Greek rhetoricians, like Aristotle in the <i>Rhetoric</i>, used it for a complete thought that 'goes round' and closes back on itself." },
        { id: "proposizione", label: "Clause", x: 50, y: 26, color: "#334155", html: "Every part of the sentence with its own predicate.", why: "From the Latin <i>propositio</i>, \"what is put forward\", that is, a statement. We count by predicates because it is the verb that governs subject and complements." },
        { id: "principale", label: "Main clause", x: 15, y: 46, color: "#2563eb", html: "The independent clause, which makes complete sense on its own.", why: "It is independent because it contains the essential message: the others add information. That is why in main clauses we find the moods of certainty or will (indicative, imperative, conditional)." },
        { id: "coordinazione", label: "Coordination (parataxis)", x: 50, y: 50, color: "#f97316", html: "Link between clauses of the same level with and, but, or, so…", why: "From the Greek <i>parà</i> (beside) + <i>táxis</i> (order): \"to place side by side\". It is the typical syntax of speech and of the simplest ancient languages, like Homeric Greek." },
        { id: "subordinazione", label: "Subordination (hypotaxis)", x: 85, y: 46, color: "#16a34a", html: "One clause depends on another (the governing clause) and completes it.", why: "From the Greek <i>hypó</i> (under) + <i>táxis</i>: \"to place under\". The classical Latin of Cicero made it an art, and written Italian inherited it through Boccaccio and the humanists." },
        { id: "forma", label: "Explicit / implicit", x: 70, y: 72, color: "#a855f7", html: "Explicit: verb in a finite mood. Implicit: infinitive, participle or gerund.", why: "Non-finite moods do not show the person, so the subject is taken from the governing clause: that is why the implicit form is used above all when the subject is the same." },
        { id: "tipi", label: "Types of subordinates", x: 92, y: 72, color: "#22c55e", html: "Subject, object, relative, causal, purpose, temporal, concessive, consecutive, conditional…", why: "Many are born from a complement of logical analysis 'expanded' into a clause: complement of cause → causal, of purpose → purpose clause, of time → temporal. Grammar classified them following the Latin model." },
        { id: "gradi", label: "Degrees", x: 40, y: 78, color: "#ef4444", html: "The distance of a subordinate from the main clause: 1st, 2nd, 3rd degree…", why: "We count the 'steps' of dependence, as in a family tree: daughter of the main clause = 1st degree, 'granddaughter' = 2nd degree." },
        { id: "logica", label: "Logical analysis", x: 15, y: 90, color: "#64748b", html: "The study of the simple sentence: subject, predicate, complements.", why: "Sentence analysis is the same logic applied at a higher level: what in the simple sentence is a complement becomes a clause in the complex sentence." }
      ],
      edges: [
        ["periodo", "proposizione", "is made of"],
        ["proposizione", "principale", "one is"],
        ["proposizione", "coordinazione", "are linked by"],
        ["proposizione", "subordinazione", "are linked by"],
        ["subordinazione", "forma", "can be"],
        ["subordinazione", "tipi", "divides into"],
        ["subordinazione", "gradi", "is measured in"],
        ["logica", "tipi", "complement → clause"],
        ["principale", "gradi", "degree 0"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: types of subordinates",
      questions: [
        { type: "mc", q: "\"Sebbene fosse tardi, continuammo a giocare\" (Although it was late, we kept playing): the first clause is…", options: ["causal", "concessive", "temporal"], answer: 1, explain: "\"Sebbene\" introduces a concessive: it states a fact that does not prevent the action of the main clause." },
        { type: "mc", q: "\"Dimmi dove sei stato\" (Tell me where you have been): \"dove sei stato\" is…", options: ["an indirect question", "a relative clause", "a locative clause"], answer: 0, explain: "It is a reported question, depending on \"dimmi\": an indirect question." },
        { type: "mc", q: "\"Uscendo, chiudi la porta\" (When leaving, close the door): the subordinate is…", options: ["explicit", "implicit"], answer: 1, explain: "The gerund \"uscendo\" is a non-finite mood: an implicit (temporal) subordinate." }
      ]
    }
  ],
  glossary: [
    { t: "Periodo (complex sentence)", d: "Sentence formed by two or more clauses." },
    { t: "Clause (proposizione)", d: "Part of the sentence that contains a predicate." },
    { t: "Main clause", d: "Independent clause, which makes complete sense on its own." },
    { t: "Governing clause (reggente)", d: "Clause on which a subordinate depends." },
    { t: "Coordinate clause", d: "Clause linked to another of the same level (e, ma, o, quindi…)." },
    { t: "Subordinate clause", d: "Clause that depends on another and completes its sense." },
    { t: "Asyndeton", d: "Coordination made only with punctuation, without conjunctions." },
    { t: "Explicit", d: "Subordinate with a verb in a finite mood." },
    { t: "Implicit", d: "Subordinate with a verb in a non-finite mood (infinitive, participle, gerund)." },
    { t: "Degree", d: "Level of dependence of a subordinate on the main clause." },
    { t: "Parataxis / hypotaxis", d: "Construction by coordination / by subordination." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "How many clauses are there in: \"Mentre aspettavo l'autobus, ho letto un libro che mi aveva regalato Sara\" (While I was waiting for the bus, I read a book that Sara had given me)?", answer: 3, explain: "Predicates: aspettavo, ho letto, aveva regalato → 3." },
      { type: "mc", q: "Which is the main clause in \"Se avessi tempo, verrei con voi\" (If I had time, I would come with you)?", options: ["Se avessi tempo", "verrei con voi"], answer: 1, explain: "\"Verrei con voi\" makes sense on its own; \"se avessi tempo\" is a conditional." },
      { type: "mc", q: "\"Corri, altrimenti perdi il treno\" (Run, otherwise you'll miss the train): the second clause is a coordinate…", options: ["copulative", "disjunctive", "conclusive"], answer: 1, explain: "\"Altrimenti\" is equivalent to \"o\" (or): disjunctive coordinate." },
      { type: "mc", q: "\"È probabile che domani nevichi\" (It's likely that it will snow tomorrow): \"che domani nevichi\" is…", options: ["an object clause", "a subject clause", "a declarative clause"], answer: 1, explain: "It acts as the subject of \"è probabile\" (what is likely? that it snows): subject clause." },
      { type: "mc", q: "\"Parlava così piano che nessuno lo sentiva\" (He spoke so quietly that nobody heard him): the subordinate is…", options: ["causal", "consecutive", "purpose"], answer: 1, explain: "\"Così… che\" shows the result: consecutive." },
      { type: "tf", q: "An implicit subordinate has its verb in the indicative or subjunctive.", answer: false, explain: "The implicit form uses the non-finite moods: infinitive, participle, gerund." },
      { type: "tf", q: "A 2nd-degree subordinate depends on a 1st-degree subordinate.", answer: true, explain: "The degree counts the levels of dependence from the main clause." },
      { type: "text", q: "What is coordination made only with commas, without conjunctions, called?", answer: ["asyndeton", "asindeto", "the asyndeton", "coordination by asyndeton"], explain: "Asyndeton, from the Greek for \"without links\"." },
      { type: "mc", q: "\"Ho comprato il libro che mi avevi consigliato\" (I bought the book that you had recommended to me): the subordinate is…", options: ["relative", "object", "declarative"], answer: 0, explain: "\"Che\" is a relative pronoun (= il quale, which) referring to \"libro\": relative clause." },
      { type: "order", q: "Put the steps of sentence analysis in order.", items: ["Underline the predicates", "Divide into clauses", "Find the main clause", "Recognise coordinates and subordinates", "Give type, form and degree"], explain: "We start from the verbs, isolate the main clause and then classify everything else." },
      { type: "mc", q: "\"Per arrivare in tempo, prese un taxi\" (To arrive on time, he took a taxi): \"per arrivare in tempo\" is…", options: ["implicit purpose", "explicit causal", "implicit temporal"], answer: 0, explain: "It states the aim and is in the infinitive: implicit purpose clause." },
      { type: "tf", q: "In \"Devo finire i compiti\" (I must finish my homework) there are two clauses.", answer: false, explain: "\"Dovere\" is a modal verb: it forms a single predicate with the infinitive." }
    ]
  }
});
