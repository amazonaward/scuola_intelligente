TOPIC('en', {
  id: "p3-ita-frase-minima",
  title: "The Minimal Sentence",
  intro: "«Il cane abbaia.» (The dog barks.) A few words are enough to make a complete sentence! 🐕 Today we discover the <b>subject</b> and the <b>predicate</b>, the two pillars of every sentence, and we learn to find the <b>minimal sentence</b> even inside very long sentences.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "What is a sentence",
      html: `<p>A <b>sentence</b> (<i>frase</i>) is a group of words put in order that has a <b>complete meaning</b>: whoever reads it understands a whole piece of information.</p>
<ul>
<li>«Il gatto dorme.» (The cat sleeps.) ✅ it is a sentence: I understand who does what.</li>
<li>«Il gatto sul.» ❌ it is not a sentence: something is missing, the meaning is not complete.</li>
</ul>
<p>Every sentence has a <b>verb</b>. The verb is the heart of the sentence: without a verb there is no sentence!</p>`
    },
    {
      type: "text",
      title: "Subject and predicate",
      html: `<p>The <b>minimal sentence</b> (<i>frase minima</i> or <i>frase nucleare</i>) is the shortest possible sentence that makes complete sense. It is made of two parts:</p>
<ul>
<li>the <b>subject</b> (<i>soggetto</i>) 👤 = <b>who</b> or <b>what</b> does the action (or who is being talked about). You find it with the question: «<b>Chi?</b>» (Who?) or «<b>Che cosa?</b>» (What?)</li>
<li>the <b>predicate</b> (<i>predicato</i>) 🎬 = <b>what the subject does</b> (or what it is like). It is the verb. You find it with the question: «<b>Che cosa fa?</b>» (What does it do?)</li>
</ul>
<p>Example: «<b>Marta</b> <b>legge</b>.» (Marta reads.)</p>
<ul>
<li>What is being done? → <b>legge</b> → predicate</li>
<li>Who reads? → <b>Marta</b> → subject</li>
</ul>
<p><b>Advice:</b> always look <b>first for the verb</b> (predicate), then ask «who?» to the verb to find the subject.</p>`
    },
    {
      type: "svg",
      title: "Subject and predicate hold hands",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<rect x="60" y="80" width="200" height="90" rx="20" fill="#3b82f6"/>
<rect x="340" y="80" width="200" height="90" rx="20" fill="#ef4444"/>
<text x="160" y="138" font-size="38" font-weight="bold" text-anchor="middle" fill="#ffffff">Il cane</text>
<text x="440" y="138" font-size="38" font-weight="bold" text-anchor="middle" fill="#ffffff">abbaia.</text>
<path d="M262 125 Q300 95 338 125" stroke="#1f2937" stroke-width="5" fill="none"/>
<text x="160" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">SUBJECT</text>
<text x="440" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#b91c1c">PREDICATE</text>
<text x="160" y="205" font-size="20" text-anchor="middle" fill="#1f2937">Chi abbaia?</text>
<text x="440" y="205" font-size="20" text-anchor="middle" fill="#1f2937">Che cosa fa?</text>
<text x="160" y="260" font-size="40" text-anchor="middle">🐕</text>
<text x="440" y="260" font-size="40" text-anchor="middle">🗯️</text>
<text x="300" y="290" font-size="18" text-anchor="middle" fill="#166534">subject + predicate = minimal sentence</text>
</svg>`,
      caption: "In logical analysis, blue is often used for the subject and red for the predicate."
    },
    {
      type: "text",
      title: "Subject and verb agree",
      html: `<p>The predicate <b>agrees</b> with the subject: if the subject is singular, the verb is singular; if it is plural, the verb is plural.</p>
<ul>
<li>«Il bambino <b>gioca</b>.» → «I bambini <b>giocano</b>.»</li>
<li>«Io <b>canto</b>.» → «Noi <b>cantiamo</b>.»</li>
</ul>
<p>The subject can be a <b>noun</b> (Luca, il sole), a <b>pronoun</b> (io, tu, lei, noi…) or even a group of words («<b>Il mio amico Paolo</b> ride»).</p>
<p>The subject is <b>not always at the beginning</b>: «Arriva <b>il treno</b>.» (The train is arriving.) Who arrives? The train! That is why you must ask the question, not just look at the position.</p>`
    },
    {
      type: "text",
      title: "The understood subject",
      html: `<p>Sometimes the subject is <b>not written</b>, but you understand it from the verb. It is called the <b>understood subject</b> (<i>soggetto sottinteso</i>).</p>
<ul>
<li>«<b>Corro</b>.» (I run.) → who runs? <b>io</b> (understood)</li>
<li>«<b>Mangiate</b>!» (Eat!) → who eats? <b>voi</b> (understood)</li>
<li>«Luca è stanco. <b>Dorme</b>.» (Luca is tired. He is sleeping.) → who sleeps? <b>Luca</b> (understood, said before)</li>
</ul>
<p>In Italian we can do this because the <b>ending</b> of the verb already says who does the action: «cant<b>iamo</b>» necessarily means «noi» (we).</p>
<p>And there are also sentences <b>without a subject</b>: «<b>Piove.</b>» (It is raining.), «<b>Nevica.</b>» (It is snowing.), «<b>Tuona.</b>» (It is thundering.) These weather verbs are called <b>impersonal</b>: nobody “does” the rain!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: find the subject and the predicate",
      questions: [
        { type: "mc", q: "In the sentence «Il sole splende» (The sun shines) what is the subject?", options: ["Il sole", "splende"], answer: 0, explain: "Who shines? The sun." },
        { type: "mc", q: "In the sentence «Volano le rondini» (The swallows are flying) what is the predicate?", options: ["le rondini", "volano"], answer: 1, explain: "The verb «volano» says what the swallows do." },
        { type: "text", q: "«Ridiamo.» (We laugh.) What is the understood subject?", answer: ["noi"], explain: "The ending -iamo shows «noi»." },
        { type: "tf", q: "«La maestra con il libro» (The teacher with the book) is a minimal sentence.", answer: false, explain: "The verb (predicate) is missing: it does not have a complete meaning." }
      ]
    },
    {
      type: "text",
      title: "Verbal predicate and nominal predicate",
      html: `<p>The predicate can be of two types:</p>
<ul>
<li><b>Verbal predicate</b>: a verb that shows an action. «Il gatto <b>miagola</b>.» (The cat meows.) «Noi <b>abbiamo giocato</b>.» (We played.)</li>
<li><b>Nominal predicate</b>: the verb <b>essere</b> + a noun or an adjective that says <b>what the subject is like</b> or <b>who it is</b>. «Il cielo <b>è azzurro</b>.» (The sky is blue.) «Luca <b>è un pittore</b>.» (Luca is a painter.)</li>
</ul>
<p>In the nominal predicate the verb essere acts as a “bridge” (it is called the <b>copula</b>, that is, “link”) between the subject and its quality.</p>`
    },
    {
      type: "text",
      title: "From the minimal sentence to the expanded sentence",
      html: `<p>To the minimal sentence we can add lots of information with <b>expansions</b>: they answer the questions <i>what? where? when? how? with whom? why?</i></p>
<p>«Il cane abbaia» → «Il cane <b>di Sara</b> abbaia <b>forte</b> <b>al postino</b> <b>ogni mattina</b>.» (Sara's dog barks loudly at the postman every morning.)</p>
<p>To find the minimal sentence inside a long sentence play the <b>“take away, take away”</b> game: remove words one at a time as long as the sentence still makes sense. What is left and cannot be removed is the minimal sentence!</p>`
    },
    {
      type: "svg",
      title: "The sentence train",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<line x1="10" y1="200" x2="590" y2="200" stroke="#78716c" stroke-width="6"/>
<rect x="20" y="90" width="150" height="90" rx="12" fill="#3b82f6"/>
<rect x="180" y="90" width="150" height="90" rx="12" fill="#ef4444"/>
<rect x="340" y="110" width="115" height="70" rx="10" fill="#fbbf24"/>
<rect x="465" y="110" width="115" height="70" rx="10" fill="#a3e635"/>
<g fill="#1f2937"><circle cx="55" cy="192" r="14"/><circle cx="135" cy="192" r="14"/><circle cx="215" cy="192" r="14"/><circle cx="295" cy="192" r="14"/><circle cx="370" cy="192" r="12"/><circle cx="425" cy="192" r="12"/><circle cx="495" cy="192" r="12"/><circle cx="550" cy="192" r="12"/></g>
<text x="95" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#ffffff">Il cane</text>
<text x="95" y="160" font-size="15" text-anchor="middle" fill="#dbeafe">subject</text>
<text x="255" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#ffffff">abbaia</text>
<text x="255" y="160" font-size="15" text-anchor="middle" fill="#fee2e2">predicate</text>
<text x="397" y="145" font-size="17" text-anchor="middle" fill="#78350f">al postino</text>
<text x="522" y="145" font-size="17" text-anchor="middle" fill="#365314">ogni mattina</text>
<text x="175" y="60" font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">engine: MINIMAL SENTENCE</text>
<text x="460" y="80" font-size="18" text-anchor="middle" fill="#57534e">carriages: expansions</text>
</svg>`,
      caption: "The minimal sentence is the engine: without it the train does not move. The expansions are carriages that can be uncoupled."
    },
    {
      type: "example",
      title: "Practical example: the “take away, take away” game",
      html: `<p>Sentence: «Ieri pomeriggio la mia sorellina ha disegnato un drago verde sul quaderno.» (Yesterday afternoon my little sister drew a green dragon in her notebook.)</p>
<ol>
<li>I remove «ieri pomeriggio» → «La mia sorellina ha disegnato un drago verde sul quaderno.» It makes sense ✅</li>
<li>I remove «sul quaderno» → «La mia sorellina ha disegnato un drago verde.» ✅</li>
<li>I remove «verde» and «un drago» → «La mia sorellina ha disegnato.» ✅</li>
<li>I remove «mia» → «La sorellina ha disegnato.» ✅</li>
<li>If I remove «ha disegnato» or «la sorellina» the sentence no longer stands up ❌</li>
</ol>
<p>Minimal sentence: «<b>La sorellina</b> (subject) <b>ha disegnato</b> (predicate).» Note: «ha disegnato» is a predicate made of <b>two words</b>, but it is a single verb!</p>`
    },
    {
      type: "example",
      title: "Practical example: newspaper headlines and messages",
      html: `<p>In short messages we often use minimal sentences, because they get straight to the point:</p>
<ul>
<li>«<b>Arrivo!</b>» (I'm coming!) → understood subject «io», predicate «arrivo».</li>
<li>«<b>La partita è finita.</b>» (The match is over.) → subject «la partita», predicate «è finita».</li>
<li>«<b>Nevica!</b>» (It's snowing!) → a sentence without a subject: impersonal verb.</li>
</ul>
<p>Newspaper headlines, instead, sometimes <b>have no verb</b>: «Neve sulle Alpi» (Snow on the Alps). In that case they are not real sentences, but the verb is understood all the same («C'è neve sulle Alpi»).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Veni, vidi, vici",
      html: `<p>In <b>47 BC</b> Julius Caesar won a battle in a few days (at Zela, in present-day Turkey) and wrote to Rome only three words: «<b>Veni, vidi, vici</b>», that is “I came, I saw, I conquered”. They are three <b>minimal sentences</b> in a row, each with the understood subject “I”! Latin, like Italian, could leave the subject understood.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? In English it rains “it”",
      html: `<p>In Italian we say «Piove» with no subject. In English, instead, the subject is compulsory, so people say “<b>It</b> rains”, which would be roughly «Esso piove» in Italian. In German «<b>Es</b> regnet», in French «<b>Il</b> pleut». And in Japanese the order is different: the verb always goes <b>at the end</b> of the sentence!</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Minimal sentence = <b>subject</b> + <b>predicate</b>: the shortest sentence with complete meaning.</li>
<li>First I find the <b>verb</b> (predicate), then I ask «<b>chi?</b>» or «<b>che cosa?</b>» to find the subject.</li>
<li>The subject can be <b>understood</b> (Corro → io).</li>
<li>Verbs like piove, nevica have no subject (impersonal).</li>
<li><b>Verbal</b> predicate (action) or <b>nominal</b> predicate (essere + noun/adjective).</li>
<li>The <b>expansions</b> enrich the minimal sentence.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the minimal sentence",
      intro: "If «subject» and «predicate» seem like difficult words, try to see them in another way.",
      tabs: [
        {
          label: "🎬 The film",
          html: `<p>Imagine that every sentence is a little <b>film</b>:</p>
<ul>
<li>the <b>subject</b> is the leading <b>actor</b> 🎭: who is on the scene;</li>
<li>the <b>predicate</b> is the <b>action</b> 🎬: what the actor does;</li>
<li>the <b>expansions</b> are the <b>scenery</b>: where, when, with whom, how.</li>
</ul>
<p>Without an actor or without an action there is no film. Without scenery… it is a rather poor film, but it is still a film!</p>`
        },
        {
          label: "🧩 The coloured blocks",
          html: `<p>A method used in many schools (Montessori too): every type of word has a colour and a shape. The subject is a <b>blue</b> block, the predicate a <b>red</b> one. A red block and a blue block stuck together are enough to make a sentence. Try building yourself: move the blocks and think how many minimal sentences you can form with 2 subjects × 3 verbs!</p>
<p>With 2 subjects (il gatto, la nonna) and 3 predicates (dorme, canta, salta) you get 2 × 3 = <b>6 different minimal sentences</b>: il gatto dorme, il gatto canta, il gatto salta, la nonna dorme…</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        },
        {
          label: "❓ The magic questions",
          html: `<p>If you cannot find the subject, follow this recipe:</p>
<ol>
<li>Underline the verb in <b>red</b> (the word that changes if I put «ieri» (yesterday) or «domani» (tomorrow)).</li>
<li>Ask the verb: «<b>Chi</b> + verb?» or «<b>Che cosa</b> + verb?»</li>
<li>The answer is the subject: underline it in <b>blue</b>.</li>
<li>Check: if the subject is plural, the verb must be plural too.</li>
</ol>
<p>Example: «Nel prato corrono due cavalli.» (Two horses are running in the meadow.) Verb: corrono. Who runs? <b>Due cavalli</b> ✅</p>`
        },
        {
          label: "🌍 Other languages",
          html: `<p>All the languages of the world have a subject and a predicate, but they put them in different orders:</p>
<table>
<tr><th>Language</th><th>Sentence</th><th>Order</th></tr>
<tr><td>🇮🇹 Italian</td><td>Il gatto mangia il pesce</td><td>Subject – Verb – Object</td></tr>
<tr><td>🇬🇧 English</td><td>The cat eats the fish</td><td>Subject – Verb – Object</td></tr>
<tr><td>🇯🇵 Japanese</td><td>Neko wa sakana o taberu (cat fish eats)</td><td>Subject – Object – Verb</td></tr>
<tr><td>🏛️ Latin</td><td>Feles piscem edit (cat fish eats)</td><td>usually with the verb at the end</td></tr>
</table>
<p>In English the subject can never be left out: “I run”, never just “run”.</p>`
        },
        {
          label: "🔗 Make sentences",
          html: `<p>Match each subject with the predicate that makes the most sense.</p>`,
          widget: "match",
          options: { pairs: [["Il pesce", "nuota"], ["Le api", "ronzano"], ["Il gallo", "canta"], ["La campana", "suona"], ["I fiori", "sbocciano"], ["Il vulcano", "erutta"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the minimal sentence: tap a node and find out why",
      nodes: [
        { id: "frase", label: "Sentence", x: 50, y: 6, color: "#2563eb", html: "A group of words with complete meaning and at least one verb.", why: "The word comes from the Greek <i>phrásis</i>, “way of saying”. For grammarians a sentence is a unit of communication: a complete piece of information." },
        { id: "minima", label: "Minimal sentence", x: 50, y: 28, color: "#16a34a", html: "The shortest possible sentence: subject + predicate.", why: "It is the “nucleus” of the sentence: everything else revolves around it. The idea that every sentence has a nucleus with the verb at the centre was developed by the French linguist Lucien Tesnière (1959), who compared the verb to an atom that “attracts” the other words." },
        { id: "soggetto", label: "Subject", x: 20, y: 50, color: "#3b82f6", html: "Who or what does the action, or who is talked about.", why: "From the Latin <i>subiectum</i>, “what lies underneath”: it is the base about which something is said. The Greek philosopher Aristotle (4th century BC) already distinguished “what is spoken about” from “what is said about it”." },
        { id: "predicato", label: "Predicate", x: 80, y: 50, color: "#ef4444", html: "What the subject does or is like: it is the verb.", why: "From the Latin <i>praedicatum</i>, “what is said” about the subject. Without a predicate there is no information: that is why it is the indispensable part." },
        { id: "sottinteso", label: "Understood subject", x: 12, y: 75, color: "#60a5fa", html: "It is not written but is understood: «Corro» (io).", why: "Italian allows it because the endings of the verb change for each person and so already say who acts. English and French, which have less variable verbs, must always write the subject." },
        { id: "accordo", label: "Agreement", x: 40, y: 75, color: "#a855f7", html: "Subject and verb agree in number (and in person).", why: "Agreement is like a “stitch” that tells us which words go together, even when the order changes: «Corrono i cavalli» → corrono is plural, so the subject is «i cavalli»." },
        { id: "verbale", label: "Verbal predicate", x: 68, y: 75, color: "#f97316", html: "A verb that expresses an action: canta, ha corso.", why: "It is called this because the whole meaning lies in the verb." },
        { id: "nominale", label: "Nominal predicate", x: 92, y: 75, color: "#ec4899", html: "Essere + noun or adjective: «è felice», «è un medico».", why: "The meaning lies in the noun or adjective (called the “nominal part”); the verb essere is only a link, the <b>copula</b>, from the Latin <i>copula</i> = link, chain." },
        { id: "espansioni", label: "Expansions", x: 50, y: 94, color: "#eab308", html: "Words that add information: where, when, how, what.", why: "They serve to make the sentence more precise. Later you will discover that they are called <b>complements</b>, from the Latin <i>complere</i>, “to fill, to complete”." }
      ],
      edges: [
        ["frase", "minima", "its nucleus is the"],
        ["minima", "soggetto", "contains the"],
        ["minima", "predicato", "contains the"],
        ["soggetto", "sottinteso", "can be"],
        ["soggetto", "accordo", "makes the"],
        ["predicato", "accordo", "makes the"],
        ["predicato", "verbale", "can be"],
        ["predicato", "nominale", "can be"],
        ["minima", "espansioni", "is enriched with"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: minimal sentence and expansions",
      questions: [
        { type: "mc", q: "What is the minimal sentence of «Domani i miei cugini partiranno per il mare»?", options: ["I miei cugini partiranno per il mare", "I cugini partiranno", "Domani partiranno"], answer: 1, explain: "Subject «i cugini» + predicate «partiranno»: the rest are expansions." },
        { type: "mc", q: "In «La torta è buonissima» (The cake is delicious) the predicate is…", options: ["verbal", "nominal"], answer: 1, explain: "Essere + adjective: nominal predicate." },
        { type: "tf", q: "In the sentence «Nevica» there is no subject.", answer: true, explain: "«Nevicare» is an impersonal verb: it has no subject." }
      ]
    }
  ],
  glossary: [
    { t: "Sentence (frase)", d: "A group of words with complete meaning that contains a verb." },
    { t: "Minimal sentence (frase minima / nucleare)", d: "The shortest possible sentence: subject + predicate." },
    { t: "Subject (soggetto)", d: "Who or what does the action or is talked about. Question: chi? che cosa?" },
    { t: "Predicate (predicato)", d: "The verb that says what the subject does or is like." },
    { t: "Understood subject", d: "A subject that is not written but is understood from the verb (Corro → io)." },
    { t: "Verbal predicate", d: "A predicate formed by a verb that expresses an action." },
    { t: "Nominal predicate", d: "The verb essere + noun or adjective (è bello, è un dottore)." },
    { t: "Copula", d: "The verb essere when it links the subject to the noun or adjective." },
    { t: "Impersonal verb", d: "A verb without a subject, such as piove, nevica, tuona." },
    { t: "Expansion (espansione)", d: "A word or group of words that enriches the minimal sentence." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In the sentence «Il treno parte» (The train leaves) what is the subject?", options: ["Il treno", "parte"], answer: 0, explain: "Who leaves? The train." },
      { type: "mc", q: "In the sentence «Giocano i bambini nel cortile» (The children play in the yard) what is the subject?", options: ["nel cortile", "i bambini", "giocano"], answer: 1, explain: "Who plays? The children. The subject can also come after the verb." },
      { type: "tf", q: "Every sentence must have a verb.", answer: true, explain: "The verb (predicate) is indispensable: without a verb there is no sentence." },
      { type: "text", q: "«Avete vinto!» (You won!) What is the understood subject?", answer: ["voi"], explain: "The ending -ete shows «voi»." },
      { type: "mc", q: "Which of these is a minimal sentence?", options: ["La mamma di Elena", "La mamma lavora.", "Al mattino presto"], answer: 1, explain: "It has a subject (la mamma) and a predicate (lavora)." },
      { type: "mc", q: "In «Mio nonno è un pescatore» (My grandfather is a fisherman) the predicate is…", options: ["verbal", "nominal"], answer: 1, explain: "È + noun (un pescatore): nominal predicate." },
      { type: "mc", q: "What is the predicate in «Le stelle brillano nel cielo» (The stars shine in the sky)?", options: ["Le stelle", "brillano", "nel cielo"], answer: 1, explain: "What do the stars do? They shine (brillano)." },
      { type: "tf", q: "In «Corrono i cavalli», the verb is plural because the subject is plural.", answer: true, explain: "Subject and verb agree: i cavalli → corrono." },
      { type: "order", q: "Put the words in order to form a minimal sentence.", items: ["Il", "gatto", "miagola"], explain: "Subject (il gatto) + predicate (miagola)." },
      { type: "mc", q: "Which sentence has no subject?", options: ["Tuona.", "Canto.", "Luca dorme."], answer: 0, explain: "«Tuonare» is impersonal; in «Canto» the subject is there but understood (io)." },
      { type: "text", q: "Write the predicate of the sentence «Ieri Sara ha mangiato una mela».", answer: ["ha mangiato"], explain: "The predicate is the whole verb: ha mangiato." },
      { type: "mc", q: "What are the words that enrich the minimal sentence called?", options: ["expansions", "endings", "roots"], answer: 0, explain: "Expansions add information (where, when, how…)." }
    ]
  }
});
