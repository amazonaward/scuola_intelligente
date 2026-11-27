TOPIC('en', {
  id: "l1-ita-comunicazione-registri",
  title: "Communication and language registers",
  intro: "Every day we send and receive dozens of messages: a voice note to a friend, an email to a teacher, a sign at the station, a social media story. And yet we never speak to everyone in the same way. In this lesson you will discover <b>how communication works</b> (sender, receiver, message, code, channel, context), Roman Jakobson's <b>six functions of language</b> and how to choose the right <b>register</b>, from the most formal to the most informal, depending on the situation. The Italian examples stay in Italian, with an English translation in brackets.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Communicating: a simple model, a complex reality",
      html: `<p>Communicating means <b>passing information</b> from someone to someone else. For communication to happen, a few elements are needed. They were described in the 20th century by the Russian-American linguist <b>Roman Jakobson</b> (1896-1982), who started from studies on information theory:</p>
<ul>
<li><b>Sender</b> (or addresser): the person who produces the message.</li>
<li><b>Receiver</b> (or addressee): the person who receives and interprets it.</li>
<li><b>Message</b>: the information that is passed on.</li>
<li><b>Code</b>: the system of signs shared by sender and receiver (a language, an alphabet, the highway code, emoji).</li>
<li><b>Channel</b>: the physical medium the message travels through (air for the voice, paper, the internet).</li>
<li><b>Context</b> (or referent): the situation and the things being talked about, which the message refers to.</li>
</ul>
<p>If one element is missing or does not work, communication breaks down: two people who do not share the <b>code</b> (an Italian and a Japanese person with no common language) cannot understand each other; a disturbed <b>channel</b> (a phone with no signal, noise in the classroom) distorts the message. Any disturbance of this kind is called <b>noise</b>.</p>`
    },
    {
      type: "svg",
      title: "The communication model",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="110" width="130" height="70" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="85" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">SENDER</text>
<text x="85" y="162" font-size="14" text-anchor="middle" fill="#0f172a">who speaks</text>
<rect x="450" y="110" width="130" height="70" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="515" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">RECEIVER</text>
<text x="515" y="162" font-size="14" text-anchor="middle" fill="#0f172a">who listens</text>
<line x1="150" y1="145" x2="445" y2="145" stroke="#0f172a" stroke-width="3"/>
<polygon points="445,145 430,137 430,153" fill="#0f172a"/>
<rect x="215" y="120" width="170" height="50" rx="10" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="300" y="150" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">MESSAGE</text>
<rect x="215" y="20" width="170" height="50" rx="10" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="300" y="42" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">CONTEXT</text>
<text x="300" y="60" font-size="14" text-anchor="middle" fill="#0f172a">what it is about</text>
<line x1="300" y1="70" x2="300" y2="118" stroke="#6b21a8" stroke-width="2" stroke-dasharray="5 4"/>
<rect x="215" y="220" width="170" height="50" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="300" y="242" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">CHANNEL</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">the physical medium</text>
<line x1="300" y1="172" x2="300" y2="218" stroke="#991b1b" stroke-width="2" stroke-dasharray="5 4"/>
<rect x="20" y="220" width="170" height="50" rx="10" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="105" y="242" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">CODE</text>
<text x="105" y="260" font-size="14" text-anchor="middle" fill="#0f172a">shared by both</text>
<line x1="105" y1="220" x2="85" y2="182" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="190" y1="245" x2="450" y2="182" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
</svg>`,
      caption: "Jakobson's model: if sender and receiver do not share the code, the message is not understood."
    },
    {
      type: "example",
      title: "The model in action",
      html: `<p>Giulia texts Marco on WhatsApp: <i>\"Ci vediamo alle 5 al solito posto\"</i> (See you at 5 at the usual place).</p>
<ul>
<li><b>Sender</b>: Giulia. <b>Receiver</b>: Marco.</li>
<li><b>Message</b>: the invitation to meet.</li>
<li><b>Code</b>: written Italian (plus a bit of shared slang).</li>
<li><b>Channel</b>: the internet and the smartphone screen.</li>
<li><b>Context</b>: \"the usual place\" is understood <b>only by Marco</b>, because he shares a previous experience with Giulia. To a stranger the message would be obscure: context is part of the meaning.</li>
</ul>`
    },
    {
      type: "text",
      title: "2. The six functions of language",
      html: `<p>We do not always use language for the same purpose. Jakobson noticed that each element of the model can become the <b>focus</b> of a message, and he identified <b>six functions</b>:</p>
<table>
<tr><th>Function</th><th>Element in the foreground</th><th>Purpose</th><th>Example</th></tr>
<tr><td><b>Referential</b> (or informative)</td><td>context</td><td>to inform about facts</td><td>\"Mount Etna is about 3,300 metres high.\"</td></tr>
<tr><td><b>Emotive</b> (or expressive)</td><td>sender</td><td>to express feelings</td><td>\"How lovely! I can't wait!\"</td></tr>
<tr><td><b>Conative</b> (or persuasive)</td><td>receiver</td><td>to influence, order, convince</td><td>\"Buy now, last items left!\"</td></tr>
<tr><td><b>Phatic</b></td><td>channel</td><td>to open, keep up or close contact</td><td>\"Hello? Can you hear me?\"</td></tr>
<tr><td><b>Metalingual</b></td><td>code</td><td>to talk about language itself</td><td>\"'Quercia' (oak) is a feminine noun in Italian.\"</td></tr>
<tr><td><b>Poetic</b></td><td>message</td><td>to draw attention to the form</td><td>\"Chi va piano va sano e va lontano\" (Slow and steady goes far: a rhyming proverb)</td></tr>
</table>
<p>A message almost never has just one function: usually one <b>prevails</b> and the others coexist. An advert can inform (referential), strike you with a rhyme (poetic) and push you to buy (conative).</p>`
    },
    {
      type: "remember",
      title: "How to recognise the function",
      html: `<p>Ask yourself: <b>where is the attention focused?</b> On the world (referential), on the speaker (emotive), on the listener (conative), on the contact (phatic), on the language (metalingual), on the words themselves (poetic). The <b>phatic</b> function seems \"empty\" (\"Hi, how are you?\"), but it keeps the relationship alive: take it away and the conversation cools down.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: model and functions",
      questions: [
        { type: "mc", q: "In a phone call, 'Hello? Can you hear me?' mainly has a ... function.", options: ["referential", "phatic", "poetic", "metalingual"], answer: 1, explain: "It checks that the channel works and the contact is active: this is the phatic function." },
        { type: "tf", q: "The code is the physical medium that carries the message.", answer: false, explain: "That is the channel. The code is the shared system of signs (for example, the language)." },
        { type: "mc", q: "An instruction manual for assembling a piece of furniture mainly has a ... function.", options: ["emotive", "referential and conative", "phatic", "poetic"], answer: 1, explain: "It informs about a procedure (referential) and tells the reader what to do (conative)." }
      ]
    },
    {
      type: "text",
      title: "3. A language is not just one: its varieties",
      html: `<p>The Italian we speak is not the same for everyone. Linguists distinguish several <b>varieties</b> of a language, which depend on four \"dimensions\":</p>
<ul>
<li><b>Diachronic</b> (over time): Dante's Italian is not today's; \"vostra mercé\" (by your grace) is now an archaism.</li>
<li><b>Diatopic</b> (in space): dialects and <b>regional Italians</b>. The same watermelon is called \"anguria\" in most of the North and \"cocomero\" in most of the Centre and South. Words change from area to area.</li>
<li><b>Diastratic</b> (across social groups): the way people speak changes with age, education, profession. Teenage slang (\"cringe\", \"flexare\", i.e. to flex) or the jargon of a trade are diastratic varieties.</li>
<li><b>Diamesic</b> (depending on the medium): spoken, written, broadcast (radio, TV), digital. A voice note and a class essay use different styles.</li>
</ul>
<p>On top of these there is the <b>diaphasic</b> dimension: it changes according to the <b>communicative situation</b> and who we are talking to. This is where <b>registers</b> come from.</p>`
    },
    {
      type: "text",
      title: "4. Language registers",
      html: `<p>A <b>register</b> is the way we adapt language to the situation: who we are, who the receiver is, what we are talking about, where we are. When you talk to a friend you use a different register from the one you use in an oral test. It is not a question of speaking \"well\" or \"badly\": it is a question of <b>appropriateness</b>.</p>
<ul>
<li><b>Formal register</b> (or high; elevated/refined in extreme cases): used with strangers, authorities, in official situations. In Italian you use <i>Lei</i> (the polite form of \"you\"), precise vocabulary, complete and well-built sentences, \"correct\" verb tenses (subjunctive, <i>passato remoto</i> in writing).</li>
<li><b>Neutral register</b> (or standard): neutral, suitable for most everyday public situations, like a newspaper article or a polite conversation.</li>
<li><b>Informal register</b> (or colloquial, familiar): used with friends and family; the informal <i>tu</i>, broken sentences, abbreviations, filler words, slang, sometimes dialect expressions.</li>
</ul>
<p>There are also <b>specialised languages</b> (or technical languages): the vocabulary of doctors, lawyers, computer scientists or athletes, with precise technical terms (\"prescription\", \"algorithm\", \"offside\").</p>`
    },
    {
      type: "example",
      title: "Same content, three registers",
      html: `<p>You have to say that you cannot go to a meeting because you are ill.</p>
<ul>
<li><b>Formal</b>: <i>\"Gentile Professore, la informo che a causa di un'improvvisa indisposizione mi sarà impossibile partecipare all'incontro. La ringrazio per la comprensione.\"</i> (Dear Professor, I am writing to inform you that, owing to a sudden indisposition, I shall be unable to attend the meeting. Thank you for your understanding.)</li>
<li><b>Neutral</b>: <i>\"Buongiorno, non mi sento bene e non potrò venire alla riunione. Grazie.\"</i> (Good morning, I'm not feeling well and won't be able to come to the meeting. Thanks.)</li>
<li><b>Informal</b>: <i>\"Ciao ragà, sto male e non vengo. A dopo!\"</i> (Hey guys, I'm sick, not coming. Later!)</li>
</ul>
<p>The information is identical; what changes is the <b>vocabulary</b> (\"indisposizione\" / \"non mi sento bene\" / \"sto male\"), the <b>form of politeness</b> (Lei / tu) and the <b>structure</b> of the sentence.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand registers",
      intro: "If registers seem abstract, try these approaches.",
      tabs: [
        { label: "👔 Clothes", html: "<p>A register is like an <b>outfit</b>: for a job interview you wear a jacket and tie, for an afternoon with friends jeans and a hoodie. Neither is \"wrong\": it becomes wrong if you wear it in the wrong place. Turning up to a wedding in a tracksuit, or to a pizzeria in a tuxedo, has the same effect as saying \"Yo, mate, walk me to the head's office?\" to the head teacher.</p>" },
        { label: "🎚️ A sliding scale", html: "<p>Registers are not three separate boxes but a graded <b>scale</b>, like the volume of a radio. You can move a little higher or a little lower depending on the relationship: with your grandmother you are informal but respectful; with a close friend you can be much more \"casual\".</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><defs><linearGradient id="gr" x1="0" x2="1"><stop offset="0" stop-color="#f87171"/><stop offset="0.5" stop-color="#fde047"/><stop offset="1" stop-color="#4ade80"/></linearGradient></defs><rect x="40" y="110" width="520" height="40" rx="20" fill="url(#gr)" stroke="#334155" stroke-width="2"/><text x="40" y="95" font-size="16" font-weight="bold" fill="#0f172a">Informal</text><text x="300" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Neutral</text><text x="560" y="95" font-size="16" font-weight="bold" text-anchor="end" fill="#0f172a">Formal</text><text x="40" y="190" font-size="14" fill="#0f172a">friends, family</text><text x="300" y="190" font-size="14" text-anchor="middle" fill="#0f172a">newspapers, shops</text><text x="560" y="190" font-size="14" text-anchor="end" fill="#0f172a">letters, exams, offices</text><text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">The register moves along the scale according to the situation</text></svg>` },
        { label: "🔁 Code-switching", html: "<p>Many people are <b>register-bilingual</b>: without noticing, they switch from formal Italian to a dialect or to teenage slang depending on who they are talking to. Linguists call this <b>code-switching</b> (<i>commutazione di codice</i>). It is a skill, not a flaw: it means knowing how to choose the right tool.</p>" }
      ]
    },
    {
      type: "widget",
      title: "Practise: formal or informal?",
      widget: "classify",
      options: { groups: ["Formal register", "Informal register"], items: [["Dear Dr Rossi, I am contacting you regarding your request", 0], ["Hey, all good? Catch you later?", 1], ["Please be advised that the meeting has been postponed", 0], ["Dunno, I reckon it's totally mad", 1], ["Yours sincerely", 0], ["Byeeee, see ya!!", 1]] },
      caption: "Drag or select each sentence into the right group."
    },
    {
      type: "curiosity",
      title: "Lei, Voi and Tu",
      html: `<p>In Italian we use <b>Lei</b> (literally \"she\") as the polite singular form of \"you\", but it was not always like this. In the Middle Ages people used <i>tu</i>; under the influence of Latin, <i>voi</i> spread as a way to address a person of rank (still used today in some areas of the South). <i>Lei</i> took hold between the 16th and 17th centuries, probably from the courtesy form \"Vostra Signoria\" (Your Lordship: understood as <i>la</i> vostra persona, \"your person\", which is feminine). Under Fascism the regime tried to impose <i>voi</i> as a \"more Italian\" form and to ban <i>Lei</i>, but without lasting success.</p>`
    },
    {
      type: "curiosity",
      title: "The language of text messages and emoji",
      html: `<p>Chats have created a new variety, halfway between speech and writing: abbreviations (Italian \"cmq\" for <i>comunque</i>, anyway; \"xké\" for <i>perché</i>, because), no punctuation, expressive repetitions (\"graaande!!!\", greaaat!!!) and <b>emoji</b>, which stand in for tone of voice and facial expressions (<b>non-verbal</b> communication). A 🙂 after a sentence can turn a reproach into a joke. But be careful: emoji are a code that not everyone interprets in the same way.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: communication and registers",
      nodes: [
        { id: "com", label: "Communication", x: 50, y: 8, color: "#3b82f6", html: "Passing a message from a sender to a receiver through a channel, with a shared code, in a context.", why: "The model was born in the 20th century from information theory (Shannon and Weaver, 1948) for telecommunications; Roman Jakobson adapted it to human language. It helps to find where and why communication breaks down." },
        { id: "elem", label: "Elements of the model", x: 18, y: 40, color: "#10b981", html: "Sender, receiver, message, code, channel, context.", why: "They are the six minimum elements: take one away and communication cannot happen. Each one gives rise to a function." },
        { id: "fun", label: "Six functions", x: 50, y: 40, color: "#f59e0b", html: "Referential, emotive, conative, phatic, metalingual, poetic.", why: "Jakobson (1960, <i>Linguistics and Poetics</i>) noticed that each message puts a different element of the model in the foreground, and that the communicative purpose determines the linguistic choices." },
        { id: "var", label: "Varieties of language", x: 82, y: 40, color: "#8b5cf6", html: "Diachronic, diatopic, diastratic, diamesic, diaphasic.", why: "No language is uniform: it changes with time, place, society, medium and situation. Italian has a history of strong dialect fragmentation and late unification (the common language really spread only in the 20th century through school, military service and television)." },
        { id: "reg", label: "Registers", x: 82, y: 75, color: "#ef4444", html: "Formal, neutral, informal; specialised languages.", why: "Registers come from appropriateness: we choose the form according to receiver, topic and occasion. Using the right register makes the message effective and respectful." }
      ],
      edges: [["com", "elem", "is made of"], ["elem", "fun", "gives rise to"], ["com", "var", "takes shape in"], ["var", "reg", "diaphasic dimension"]]
    },
    {
      type: "remember",
      title: "Take-away",
      html: `<p><b>Sender, receiver, message, code, channel, context</b>: six elements. <b>Six functions</b>, one for each element. <b>Register</b> = adapting language to the situation; the golden rule is always to ask yourself <i>\"who am I talking to, about what, on what occasion?\"</i>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: varieties and registers",
      questions: [
        { type: "mc", q: "Teenage slang is a ... variety.", options: ["diachronic", "diatopic", "diastratic", "diamesic"], answer: 2, explain: "It depends on the social group (age, environment): it is diastratic." },
        { type: "tf", q: "The informal register is always wrong in a school situation.", answer: false, explain: "It is not wrong in absolute terms: it is inappropriate in some situations (an oral test) but suitable in others (break time)." },
        { type: "mc", q: "'Dear customer, we wish to inform you that...' belongs to the ... register.", options: ["informal", "formal", "dialectal"], answer: 1, explain: "It uses polite address, refined vocabulary and a complete structure: it is formal." }
      ]
    }
  ],
  glossary: [
    { t: "Sender", d: "The person who produces and sends the message." },
    { t: "Receiver", d: "The person who receives and interprets the message." },
    { t: "Code", d: "A system of signs shared by sender and receiver, such as a language." },
    { t: "Channel", d: "The physical medium that carries the message (voice, paper, network)." },
    { t: "Context", d: "The situation and reality the message refers to." },
    { t: "Phatic function", d: "The function used to open, keep up or close contact." },
    { t: "Metalingual function", d: "The function in which language talks about itself." },
    { t: "Register", d: "A way of using language suited to a particular communicative situation." },
    { t: "Diaphasic variety", d: "Variation of language according to the situation and the receiver." },
    { t: "Specialised language", d: "The vocabulary and style typical of a profession or discipline." },
    { t: "Code-switching", d: "Moving from one code or register to another within the same conversation." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which element of Jakobson's model is the shared system of signs?", options: ["Channel", "Code", "Context", "Message"], answer: 1, explain: "The code (for example, the Italian language) must be known by both." },
      { type: "mc", q: "The slogan 'Think, therefore buy!' mainly has a ... function.", options: ["conative", "referential", "metalingual", "emotive"], answer: 0, explain: "It wants to push the receiver to act: conative (persuasive) function." },
      { type: "tf", q: "Noise is any disturbance that alters the message during transmission.", answer: true, explain: "It can be physical (crackling) or linguistic (unknown words)." },
      { type: "text", q: "What is the function of language in which we talk about language itself called (for example: 'The verb to be is irregular')?", answer: ["metalingual", "metalingual function", "metalinguistic", "metalinguistic function", "the metalingual function"], explain: "The code itself is the subject of the discourse: metalingual function." },
      { type: "mc", q: "The difference between the Italian of the North and of the South is a ... variety.", options: ["diachronic", "diatopic", "diaphasic", "diamesic"], answer: 1, explain: "It depends on geographical location: diatopic." },
      { type: "order", q: "Put these in order from the most formal to the most informal.", items: ["Dear Sir, I am writing to report a problem with your service.", "Good morning, I wanted to report a problem.", "Hi, I'm writing because there's a bit of a mess.", "Hey, there's a total mess!"], explain: "We move from polite address and refined vocabulary down to casual address and colloquial words." },
      { type: "mc", q: "Why is 'see you at the usual place' understandable only to someone who knows the context?", options: ["Because it contains a mistake", "Because it refers to a shared experience", "Because it is a poetic message", "Because it uses the wrong channel"], answer: 1, explain: "The meaning depends on a contextual reference that only sender and receiver share." },
      { type: "tf", q: "Using an appropriate register means always using the most formal one possible.", answer: false, explain: "Appropriate means suited to the situation: a register that is too formal among friends sounds unnatural." },
      { type: "mc", q: "'Hello, can you hear me?' is an example of the ... function.", options: ["poetic", "phatic", "referential", "metalingual"], answer: 1, explain: "It checks the channel and the contact: phatic." }
    ]
  }
});
