TOPIC('en', {
  id: "l2-sum-comunicazione",
  title: "Communication",
  intro: "We talk, write, gesture, send voice notes and emojis: <b>communicating</b> seems like the most natural thing in the world, and yet misunderstandings are everywhere, in class, in the family, in group chats. Why? In this lesson you open up the «engine» of communication: <b>Shannon's model</b> and <b>Jakobson's</b> six factors, the difference between the <b>verbal</b>, <b>paraverbal</b> and <b>non-verbal</b> channels, <b>Watzlawick's</b> five <b>axioms</b> (including the famous «one cannot not communicate»), Schulz von Thun's «four ears» and finally the role of the <b>media</b>, from print to social networks. By the end you will be able to explain why two people can say the same sentence and get across opposite meanings.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. What does it mean to communicate?",
      html: `<p>The word comes from the Latin <i>communicare</i>, «to make common, to share». Communicating is not just «passing on information»: it means creating a <b>shared meaning</b> between the sender and the receiver. That is why it is studied by psychology, linguistics, sociology and education: in a classroom the quality of communication between teacher and students matters as much as the syllabus.</p>
<p>The first scientific model was born far from psychology, in telecommunications engineering. In <b>1948</b> the American mathematician and engineer <b>Claude Shannon</b> (Bell Laboratories) published <i>A Mathematical Theory of Communication</i>; the following year the work was republished as a book together with <b>Warren Weaver</b>. The problem was a practical one: how do you send a signal from one point to another (telegraph, telephone) losing as little as possible on the way? The model has five elements, plus one obstacle:</p>
<ul>
<li><b>Source (or sender)</b>: the one who has something to say.</li>
<li><b>Encoding</b>: the idea becomes a signal (words, sounds, images, Morse code).</li>
<li><b>Channel</b>: the physical medium (air, telephone wire, screen).</li>
<li><b>Decoding</b>: the receiver turns the signal back into an idea.</li>
<li><b>Destination (receiver)</b>: the one who receives.</li>
<li><b>Noise</b>: anything that interferes (crackling, a real noise, but also tiredness, distraction, prejudice).</li>
</ul>
<p>The model's limitation is obvious: it is <b>linear</b> (A speaks, B listens). In human communication, however, B responds immediately, even just with a look: we speak of <b>feedback</b> and <b>circularity</b>, concepts that later models added.</p>`
    },
    {
      type: "svg",
      title: "The Shannon-Weaver model",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="90" width="100" height="60" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="60" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Source</text>
<text x="60" y="136" font-size="14" text-anchor="middle" fill="#0f172a">idea</text>
<rect x="130" y="90" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="180" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Encoding</text>
<text x="180" y="136" font-size="14" text-anchor="middle" fill="#0f172a">into a signal</text>
<rect x="250" y="90" width="100" height="60" rx="10" fill="#fef08a" stroke="#854d0e" stroke-width="2"/>
<text x="300" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Channel</text>
<text x="300" y="136" font-size="14" text-anchor="middle" fill="#0f172a">the medium</text>
<rect x="370" y="90" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="420" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Decoding</text>
<text x="420" y="136" font-size="14" text-anchor="middle" fill="#0f172a">into an idea</text>
<rect x="490" y="90" width="100" height="60" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="540" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Receiver</text>
<text x="540" y="136" font-size="14" text-anchor="middle" fill="#0f172a">understands?</text>
<line x1="110" y1="120" x2="128" y2="120" stroke="#0f172a" stroke-width="3"/>
<line x1="230" y1="120" x2="248" y2="120" stroke="#0f172a" stroke-width="3"/>
<line x1="350" y1="120" x2="368" y2="120" stroke="#0f172a" stroke-width="3"/>
<line x1="470" y1="120" x2="488" y2="120" stroke="#0f172a" stroke-width="3"/>
<rect x="240" y="20" width="120" height="38" rx="19" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="300" y="45" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">NOISE</text>
<line x1="300" y1="58" x2="300" y2="88" stroke="#991b1b" stroke-width="3" stroke-dasharray="6 4"/>
<path d="M540 160 Q540 230 300 230 Q60 230 60 160" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 5"/>
<text x="300" y="255" font-size="15" font-weight="bold" text-anchor="middle" fill="#4c1d95">FEEDBACK (the response): human communication is circular</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Noise can be physical (crackling) or psychological (distraction, prejudice)</text>
</svg>`,
      caption: "The message that is sent is not always the one that arrives: encoding, channel and noise can distort it."
    },
    {
      type: "text",
      title: "2. Jakobson's six factors and six functions",
      html: `<p>The Russian linguist <b>Roman Jakobson</b> (1896-1982), in a lecture given in 1958 (published in <b>1960</b> as <i>Linguistics and Poetics</i>), proposed a richer scheme: every act of communication involves <b>six factors</b>, and each one corresponds to a <b>function</b> of language, that is, a main purpose of the message.</p>
<table>
<tr><th>Factor</th><th>Function</th><th>Example</th></tr>
<tr><td>Addresser (sender)</td><td><b>Emotive</b> (expressive)</td><td>«How lovely!», «Yuck!»</td></tr>
<tr><td>Addressee (receiver)</td><td><b>Conative</b> (appeal)</td><td>«Shut the door!», advertisements</td></tr>
<tr><td>Context (referent)</td><td><b>Referential</b></td><td>«Water boils at 100 °C at sea level»</td></tr>
<tr><td>Message</td><td><b>Poetic</b></td><td>Slogans and poems: <i>how</i> it is said is what counts</td></tr>
<tr><td>Code</td><td><b>Metalingual</b></td><td>«What does "axiom" mean?»</td></tr>
<tr><td>Contact (channel)</td><td><b>Phatic</b></td><td>«Hello?», «Can you hear me?», «Hi, how's it going?»</td></tr>
</table>
<p>The same sentence can have several functions at once. A «How's it going?» said in passing in the corridor does not really want a medical answer: it has a <b>phatic</b> function, it keeps the contact open and says «I've seen you, I'm here». Understanding this avoids awkward moments (and confusion).</p>`
    },
    {
      type: "example",
      title: "Same message, three functions",
      html: `<p>The teacher says: «It's very noisy in here.» What is she doing?</p>
<ul>
<li>If she is simply describing the situation, the function is <b>referential</b>.</li>
<li>If she actually wants the students to be quiet, the function is <b>conative</b> (an order disguised as an observation).</li>
<li>If she sighs in exasperation, she is expressing her state of mind: <b>emotive</b> function.</li>
</ul>
<p>Meaning is not only in the words, but in the <b>intention</b> and the <b>context</b>: that is why voice assistants, which know the words but not the situation, often misunderstand.</p>`
    },
    {
      type: "text",
      title: "3. Verbal, paraverbal, non-verbal",
      html: `<p>When we communicate face to face we use three channels at the same time:</p>
<ul>
<li><b>Verbal</b>: the <b>words</b>, spoken or written, with their grammar and meaning.</li>
<li><b>Paraverbal</b>: <b>how</b> we say the words: tone, volume, rhythm, pauses, stress, sighs. With «Well done!» you can pay a compliment or make a cutting criticism, depending on your intonation.</li>
<li><b>Non-verbal</b>: the rest of the body: <b>facial expressions</b>, eye contact, gestures, posture, distance, clothing, physical contact.</li>
</ul>
<p><b>Facial expressions.</b> As early as 1872 <b>Charles Darwin</b> (<i>The Expression of the Emotions in Man and Animals</i>) argued that many emotional expressions have a common biological origin. The psychologist <b>Paul Ekman</b> (from the 1960s-70s onwards, including research among isolated peoples in Papua New Guinea) showed that six expressions, <b>happiness, sadness, anger, fear, disgust and surprise</b>, are recognised in very similar ways across different cultures. <b>Gestures</b>, on the other hand, depend on culture: the thumbs-up is positive in many countries but offensive in others.</p>
<p><b>Proxemics.</b> The anthropologist <b>Edward T. Hall</b> (<i>The Hidden Dimension</i>, 1966) gave this name to the study of how we use space. He distinguished four zones, approximate and varying from culture to culture: <b>intimate</b> (up to about 45 cm), <b>personal</b> (about 45-120 cm), <b>social</b> (about 1.2-3.5 m) and <b>public</b> (beyond that). If a stranger enters our intimate zone we feel uncomfortable, even if they have not said a word.</p>
<p><b>A famous figure, often misunderstood.</b> The psychologist <b>Albert Mehrabian</b> (1960s-70s) found that when <i>words</i> contradict tone and facial expression in expressing a feeling, people trust tone (about 38%) and face (about 55%) more than words (7%). The «7-38-55» formula, however, is often quoted as a general rule («communication is 93% non-verbal»): that is false. It applied only to single words expressing an attitude and to inconsistent messages about feelings, not to every kind of speech. When you explain physics, words matter a great deal.</p>`
    },
    {
      type: "widget",
      title: "Verbal, paraverbal or non-verbal?",
      widget: "classify",
      options: {
        groups: ["Verbal", "Paraverbal", "Non-verbal"],
        items: [
          ["📖 The text of an email", 0],
          ["🗣️ The ironic tone of «What a lovely day!»", 1],
          ["😠 Frowning eyebrows", 2],
          ["🔊 Speaking very loudly", 1],
          ["🧍 Folded arms", 2],
          ["💬 The sentence «I understand»", 0],
          ["⏸️ A long pause before answering", 1],
          ["📏 Getting very close to someone", 2]
        ]
      },
      caption: "Drag or tap each item into the right channel."
    },
    {
      type: "quiz",
      title: "Mini-quiz: models and channels",
      questions: [
        { type: "mc", q: "What does «noise» represent in Shannon's model?", options: ["Any interference that distorts the message", "The volume of the voice", "The receiver's feedback", "The code used"], answer: 0, explain: "Noise is anything that interferes with the message on its way, whether physical or psychological." },
        { type: "mc", q: "«Hello? Can you hear me?» mainly has a ... function", options: ["phatic", "poetic", "referential", "metalingual"], answer: 0, explain: "It serves to establish and check the contact." },
        { type: "tf", q: "Mehrabian's 7-38-55 formula proves that 93% of all communication is non-verbal.", answer: false, explain: "It applied only to inconsistent messages about feelings, not to any kind of speech." }
      ]
    },
    {
      type: "text",
      title: "4. The Palo Alto School: the five axioms",
      html: `<p>In the 1960s, in <b>Palo Alto</b> (California), a group of researchers at the <i>Mental Research Institute</i> (including the psychologist and psychotherapist <b>Paul Watzlawick</b>, born in Austria in 1921 and died in 2007, together with Janet Beavin and Don Jackson) studied communication within families in difficulty. In <b>1967</b> they published <i>Pragmatics of Human Communication</i>, which proposes five «axioms», that is, basic principles.</p>
<ol>
<li><b>One cannot not communicate.</b> Every behaviour, even silence or absence, communicates something to whoever observes it. A student staring out of the window «is saying» something, even without meaning to.</li>
<li><b>Every communication has a content aspect and a relationship aspect.</b> Besides <i>what</i> I say, I communicate <i>what kind of relationship</i> there is between you and me. «Tidy up!» and «Would you help me tidy up?» have the same content but different relationships (command versus request).</li>
<li><b>The nature of a relationship depends on the punctuation of the communication sequences.</b> Each person decides where the «chain» of causes and effects begins, and often does so in their own favour: think of arguments that start with «he started it!».</li>
<li><b>People communicate both digitally and analogically.</b> The <b>digital</b> mode is words (precise about content); the <b>analogical</b> mode is everything else: tone, gestures, images (effective for the relationship but ambiguous). The two channels need to be consistent.</li>
<li><b>Communicative exchanges are either symmetrical or complementary.</b> In <b>symmetry</b> the partners behave as equals; in <b>complementarity</b> one is «above» and the other «below» (parent/child, teacher/student), with roles that fit together.</li>
</ol>`
    },
    {
      type: "example",
      title: "The punctuation of an argument",
      html: `<p>Giulia and Marco are having an argument. Marco says: «I withdraw into myself because Giulia pesters me with questions». Giulia says: «I ask him questions because he withdraws into himself». Each is convinced that the other started it.</p>
<p>In reality the process is <b>circular</b>: the more Giulia asks, the more Marco withdraws; the more Marco withdraws, the more Giulia asks. Each <b>punctuates</b> the sequence by placing the beginning (the «cause») in the other's behaviour. To break the circle you have to stop looking for someone to blame and <b>change something in your own move</b>: Marco can say «I need half an hour», Giulia can wait.</p>`
    },
    {
      type: "widget",
      title: "Match the axiom",
      widget: "match",
      options: {
        pairs: [
          ["First axiom", "One cannot not communicate"],
          ["Second axiom", "Content and relationship"],
          ["Third axiom", "The punctuation of events"],
          ["Fourth axiom", "Digital and analogical"],
          ["Fifth axiom", "Symmetrical and complementary"]
        ]
      },
      caption: "Link each number to its principle."
    },
    {
      type: "text",
      title: "5. Schulz von Thun's four ears",
      html: `<p>The German psychologist <b>Friedemann Schulz von Thun</b>, in his book <i>Miteinander reden</i> («Talking with one another», 1981), developed the second axiom with the image of the <b>four ears</b> (or «communication square»): every message has <b>four sides</b>, and the listener may choose to hear mainly one of them.</p>
<ul>
<li><b>The facts</b> (what we are talking about).</li>
<li><b>Self-revelation</b> (what I say about myself).</li>
<li><b>The relationship</b> (what I think of you and of us).</li>
<li><b>The appeal</b> (what I want you to do).</li>
</ul>
<p>A classic example: in a car, the passenger says «The light is green». <i>Facts</i>: the traffic light is green. <i>Self-revelation</i>: I'm in a hurry. <i>Relationship</i>: you can't drive on your own, I'll help you. <i>Appeal</i>: go! The driver may react with irritation by listening with the relationship ear («I'm not a beginner!»), even though the passenger perhaps only wanted to give information. Many conflicts arise because <b>the speaker and the listener are using different ears</b>.</p>
<p>The solution is <b>metacommunication</b>: talking about the way we are talking («maybe I didn't explain myself well, I only meant that...»).</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand communication",
      intro: "If the theoretical models don't convince you, try a different point of view.",
      tabs: [
        { label: "📞 Chinese whispers", html: `<p>A well-known game: the first person whispers a sentence into the second person's ear, who repeats it to the third, and so on. At the end of the line the sentence is often unrecognisable. Every «step» is an encoding and a decoding with a little noise: the errors add up. This is how rumours, urban legends and fake news are born.</p>` },
        { label: "🧊 The iceberg", html: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#e0f2fe"/><rect y="110" width="600" height="190" fill="#7dd3fc"/><polygon points="270,110 300,40 330,110" fill="#ffffff" stroke="#475569" stroke-width="2"/><polygon points="170,110 270,110 330,110 440,110 400,250 300,285 200,250" fill="#e2e8f0" stroke="#475569" stroke-width="2"/><text x="300" y="95" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Spoken words</text><text x="300" y="165" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Tone, looks, gestures,</text><text x="300" y="190" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">emotions, relationship,</text><text x="300" y="215" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">culture, context</text></svg><p>Words are the visible tip; beneath the surface lies the larger part. But don't take it literally: for school subjects, words matter enormously.</p>` },
        { label: "🤝 Active listening", html: `<p>The psychologist <b>Carl Rogers</b> (1902-1987) argued that truly understanding someone requires <b>empathic listening</b>. Active listening techniques: look the person in the face, don't interrupt, <b>rephrase</b> («if I've understood correctly, you're saying that...»), ask open questions, acknowledge the other person's emotions. It works because it gives the other person proof that they have been understood and closes the feedback loop.</p>` },
        { label: "🗣️ Three styles: passive, aggressive, assertive", html: `<p>Faced with a classmate who always copies your homework:</p><ul><li><b>Passive</b>: «Yeah, well... go ahead» (you don't stand up for your rights).</li><li><b>Aggressive</b>: «You're a parasite!» (you attack the person).</li><li><b>Assertive</b>: «It bothers me when you copy without asking me; if you like, we can study together.» (you speak in the first person, describe the behaviour and suggest a solution).</li></ul><p>«I-messages» (<i>I feel...</i>) were popularised by the psychologist <b>Thomas Gordon</b> in his book <i>Parent Effectiveness Training</i> (1970).</p>` }
      ]
    },
    {
      type: "text",
      title: "6. The media: communicating at a distance",
      html: `<p>A <b>medium</b> (plural «media») is a tool that makes it possible to communicate beyond the «here and now». Every new medium has changed the way people think and live.</p>
<ul>
<li><b>Writing</b> (around 3300 BC in Mesopotamia): the message lasts over time.</li>
<li><b>Movable-type printing</b>: <b>Johannes Gutenberg</b> in Mainz prints the Bible around 1455. Books become cheaper, ideas circulate (the Protestant Reformation, the Scientific Revolution).</li>
<li><b>Radio and television</b>: Marconi makes the first radio transmissions at the end of the 19th century (1895); in Italy regular TV broadcasts by RAI, the state broadcaster, begin on <b>3 January 1954</b>.</li>
<li><b>The Internet and the web</b>: the ARPANET network is born in 1969; the <b>World Wide Web</b> is devised by <b>Tim Berners-Lee</b> at CERN in 1989-1991.</li>
<li><b>Social networks and smartphones</b>: since 2007 (the iPhone) mass communication fits in your pocket, and anyone can be a sender.</li>
</ul>
<p>The Canadian scholar <b>Marshall McLuhan</b> (<i>Understanding Media</i>, 1964) argued that «the medium is the message»: the medium is not neutral, it changes the way we perceive and think. He also spoke of the «<b>global village</b>»: electronic media make the world small, and everything is connected.</p>
<p><b>Communicating online: risks and rules.</b> Written messages lack tone and eye contact (the paraverbal and non-verbal channels): that is why we use emojis and punctuation, and why irony is so easily misunderstood. Other risks: <b>fake news</b> (false news spread as if it were true), <b>filter bubbles</b> (a term coined by the activist Eli Pariser in 2011: algorithms mainly show us what confirms our ideas) and <b>cyberbullying</b>, which in Italy is addressed by a specific law (no. 71 of 2017). Before sharing a news story: <b>who</b> is saying it? <b>When</b>? Do other reliable sources confirm it? Is the image really from that event (reverse image search)?</p>`
    },
    {
      type: "widget",
      title: "When was it born? A timeline of the media",
      widget: "timeline",
      options: {
        events: [
          { year: -3300, label: "Writing (Mesopotamia)", icon: "✍️" },
          { year: 1455, label: "Gutenberg's printing press", icon: "📖" },
          { year: 1895, label: "First radio transmissions (Marconi)", icon: "📻" },
          { year: 1954, label: "RAI television", icon: "📺" },
          { year: 1969, label: "ARPANET", icon: "🖧" },
          { year: 1991, label: "World Wide Web", icon: "🌐" },
          { year: 2007, label: "iPhone", icon: "📱" }
        ],
        unit: "years"
      },
      caption: "Every medium speeds up communication and changes its rules."
    },
    {
      type: "decision",
      title: "An ambiguous message in a group chat",
      html: `<p>Sofia writes to Luca in the class chat: «Fine, do what you want.» No emoji, no other comment. Luca can't tell whether Sofia really agrees or is angry. The group is waiting for a decision about the project.</p>`,
      question: "What does Luca do?",
      options: [
        { label: "He takes the sentence literally and carries on without asking anything else.", outcome: "He risks ignoring a bad mood. If Sofia really disagrees, her anger will grow and come out later, perhaps in a worse form. He has only read the «facts» side of the message." },
        { label: "He replies aggressively: «What's your problem?».", outcome: "He attacks the relationship and will probably spark an argument. This confirms the «circle» described by the third axiom: he punctuates the sequence by starting from her." },
        { label: "He writes to her privately: «You seem a bit cold, is everything OK? If you'd prefer a different solution, tell me».", outcome: "He uses metacommunication: he asks about how the message came across, without accusing her. He gives Sofia the chance to explain herself and protects the relationship." }
      ],
      answer: 2,
      explain: "Written communication lacks tone, eye contact and pauses, so ambiguity is high. The most effective solution is <b>metacommunication</b> in an assertive, non-accusing form: asking to check your interpretation, rather than guessing or attacking."
    },
    {
      type: "conceptMap",
      title: "Map: communication",
      nodes: [
        { id: "com", label: "Communication", x: 50, y: 6, color: "#3b82f6", html: "The process by which two or more people create shared meaning.", why: "Meaning does not «travel» from one head to another: it has to be built by both speaker and listener, using a shared code and context. That is why misunderstandings happen." },
        { id: "mod", label: "Models", x: 14, y: 40, color: "#10b981", html: "Shannon-Weaver (1948) and Jakobson (1960).", why: "They come from telecommunications engineering (Shannon) and linguistics (Jakobson): they help identify where communication can break down (code, channel, noise, context)." },
        { id: "can", label: "Channels", x: 38, y: 40, color: "#f59e0b", html: "Verbal, paraverbal, non-verbal.", why: "We use several channels together: body and voice reveal emotions and relationships that words often hide. Darwin and Ekman showed that some expressions are universal." },
        { id: "ass", label: "Watzlawick's axioms", x: 64, y: 40, color: "#ef4444", html: "Five principles of human communication (1967).", why: "By studying families in difficulty, the Palo Alto School noticed that problems arose more from «how» people communicated (relationship, punctuation) than from «what» they said." },
        { id: "ore", label: "Four ears", x: 88, y: 40, color: "#8b5cf6", html: "Facts, self-revelation, relationship, appeal.", why: "Schulz von Thun (1981) explains why the same message is heard in different ways: every message has several sides and each listener picks one." },
        { id: "med", label: "Media", x: 50, y: 78, color: "#0ea5e9", html: "From writing to social networks.", why: "Every medium extends the reach of the message but changes the relationship between people (McLuhan: «the medium is the message»). Online, tone and eye contact are missing, so misunderstandings increase." }
      ],
      edges: [["com", "mod", "described by"], ["com", "can", "uses"], ["com", "ass", "rules"], ["com", "ore", "listening"], ["com", "med", "at a distance"]]
    },
    {
      type: "curiosity",
      title: "Emojis as «written paraverbal communication»",
      html: `<p><b>Emojis</b> were born in Japan in 1999, designed by <b>Shigetaka Kurita</b> for a mobile phone service: the word combines <i>e</i> («picture») and <i>moji</i> («character»), and has nothing to do with the English word <i>emotion</i>, as it might seem. In written language they help rebuild what is missing: tone, facial expression, intention. A 😉 turns a harsh sentence into a joke. Yet they are not universal: the same emoji can be read differently by people of different ages and cultures.</p>`
    },
    {
      type: "curiosity",
      title: "Pygmalion in the classroom",
      html: `<p>In <b>1968</b> the psychologists <b>Robert Rosenthal</b> and <b>Lenore Jacobson</b> described in <i>Pygmalion in the Classroom</i> an experiment in a Californian primary school: they told the teachers that certain pupils, who had in fact been chosen at random, were «about to bloom» intellectually. At the end of the year those pupils had, on average, gained more on intelligence tests (especially the youngest). The hypothesis is that teachers' <b>expectations</b> are passed on through small signals (looks, tone, time allowed to answer) and influence results. The study has been debated and criticised, but the idea that expectations communicate something without words is widely studied.</p>`
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Shannon-Weaver</b>: source, encoding, channel, decoding, receiver, noise. <b>Jakobson</b>: six factors and six functions.</li>
<li>Three channels: <b>verbal</b> (words), <b>paraverbal</b> (tone, rhythm), <b>non-verbal</b> (body, space).</li>
<li>The five axioms: one cannot not communicate; content and relationship; punctuation; digital and analogical; symmetry and complementarity.</li>
<li>Every message has <b>four sides</b>: facts, self-revelation, relationship, appeal.</li>
<li>To avoid misunderstandings: <b>active listening</b>, an <b>assertive</b> style, <b>metacommunication</b>, checking sources online.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Watzlawick and the media",
      questions: [
        { type: "mc", q: "According to Watzlawick's first axiom, a student's silence...", options: ["still communicates something", "communicates nothing", "is always a sign of lack of interest", "is only paraverbal"], answer: 0, explain: "Every behaviour, even silence, has communicative value for whoever observes it." },
        { type: "mc", q: "The «third axiom» is about...", options: ["The punctuation of the sequence of events", "The difference between voice and gestures", "The number of people talking", "The use of social media"], answer: 0, explain: "Each person decides where the chain of actions and reactions begins, usually in their own favour." },
        { type: "tf", q: "A «How's it going?» said in passing in the corridor often has a phatic function.", answer: true, explain: "It maintains social contact rather than asking for information." },
        { type: "order", q: "Put in chronological order.", items: ["Gutenberg Bible (c. 1455)", "Marconi's first radio transmissions (1895)", "RAI television (1954)", "iPhone (2007)"], explain: "1455, 1895, 1954, 2007." }
      ]
    }
  ],
  glossary: [
    { t: "Communication", d: "The process by which shared meaning is created between the sender and the receiver of a message." },
    { t: "Code", d: "A set of shared signs and rules (a language, Morse code, gestures) used to build the message." },
    { t: "Noise", d: "Any interference, physical or psychological, that distorts the message." },
    { t: "Feedback", d: "The receiver's response, which tells the sender how the message was received." },
    { t: "Phatic function", d: "The function of language that serves to establish or maintain contact (Hello? Can you hear me?)." },
    { t: "Paraverbal", d: "The tone, volume, rhythm and pauses with which words are spoken." },
    { t: "Proxemics", d: "The study of the use of space and distance in communication (Hall)." },
    { t: "Metacommunication", d: "Communicating about the way we are communicating." },
    { t: "Punctuation", d: "In Watzlawick, the subjective way of deciding where a sequence of behaviours begins and ends." },
    { t: "Assertive communication", d: "A style that stands up for your own rights and respects other people's, without being passive or aggressive." },
    { t: "Fake news", d: "False or misleading news spread as if it were true." },
    { t: "Filter bubble", d: "The effect by which algorithms show us content similar to our own opinions, reducing the variety of points of view." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Who published the «mathematical theory of communication» in 1948?", options: ["Claude Shannon", "Paul Watzlawick", "Roman Jakobson", "Marshall McLuhan"], answer: 0, explain: "Shannon, an engineer at Bell Laboratories; the model was later developed with Weaver." },
      { type: "mc", q: "In Jakobson's model, the function that focuses on the message and «how» it is said, as in a slogan or a poem, is the...", options: ["poetic", "referential", "emotive", "phatic"], answer: 0, explain: "The poetic function concerns the form of the message." },
      { type: "mc", q: "What is the main function of «Close the window!»?", options: ["Conative", "Metalingual", "Emotive", "Referential"], answer: 0, explain: "It is an appeal to the receiver to do something." },
      { type: "tf", q: "The ironic tone in which «Well done!» is said belongs to the paraverbal channel.", answer: true, explain: "The paraverbal channel concerns the way words are said: tone, rhythm, volume." },
      { type: "text", q: "What is the study of the use of space and distance in communication called?", answer: ["proxemics"], explain: "The term was coined by Edward T. Hall (1966)." },
      { type: "mc", q: "Which of these emotional expressions does Ekman consider universal?", options: ["Disgust", "Embarrassment", "Nostalgia", "Jealousy"], answer: 0, explain: "The six are happiness, sadness, anger, fear, disgust and surprise." },
      { type: "mc", q: "The second axiom states that every communication has...", options: ["a content aspect and a relationship aspect", "only one meaning", "always someone to blame", "one sender and two channels"], answer: 0, explain: "Besides what is said, it communicates what relationship exists between the two people." },
      { type: "tf", q: "According to Watzlawick it is possible not to communicate, if you stay silent.", answer: false, explain: "Silence communicates too." },
      { type: "mc", q: "In the message «The light is green», the side that concerns what the speaker wants the other person to do is...", options: ["the appeal", "the facts", "self-revelation", "the relationship"], answer: 0, explain: "The appeal: «go!»." },
      { type: "mc", q: "What does McLuhan mean by «the medium is the message»?", options: ["The medium changes the way we think and perceive", "Every message is false", "Only television matters", "Content is always irrelevant"], answer: 0, explain: "The medium is not neutral: it changes habits, timing and relationships." }
    ]
  }
});
