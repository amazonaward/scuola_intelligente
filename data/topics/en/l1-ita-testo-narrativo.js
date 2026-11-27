TOPIC('en', {
  id: "l1-ita-testo-narrativo",
  title: "The narrative text",
  intro: "We have been telling stories ever since language has existed: around the fire, in novels, in TV series, in video games. But how is a story built? In this lesson you will learn the <b>tools of narrative analysis</b>: the difference between <b>story and plot</b> (<i>fabula</i> and <i>intreccio</i>), the <b>narrator</b> and <b>point of view</b>, <b>characters</b>, <b>time</b> and <b>setting</b>. They are the same tools used by critics, screenwriters and writers.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. What a narrative text is",
      html: `<p>A <b>narrative text</b> tells a series of <b>events</b> (real or invented), linked to one another in time and by cause and effect, involving <b>characters</b>. Novels, short stories, novellas, fairy tales and fables are narrative, but so are a news report, a comic or a film.</p>
<p>A narrative text is usually made of different kinds of <b>sequences</b>:</p>
<ul>
<li><b>narrative</b>: they tell the events and move the action forward;</li>
<li><b>descriptive</b>: they present places, people, objects, and stop the action for a moment;</li>
<li><b>dialogue</b>: they report the characters' words (direct speech);</li>
<li><b>reflective</b>: they contain thoughts and comments of the narrator or the characters.</li>
</ul>
<p>A story has a typical four-stage structure, which we call the <b>narrative scheme</b>:</p>
<ol>
<li><b>Initial situation</b> (balance): who, where, when.</li>
<li><b>Breaking of the balance</b> (complication): something happens that sets the story in motion.</li>
<li><b>Development</b> (twists and adventures): the protagonist faces obstacles (often up to a peak, the <i>climax</i>).</li>
<li><b>Resolution</b> and <b>final situation</b>: the problem is solved and a new balance is reached (sometimes open).</li>
</ol>`
    },
    {
      type: "svg",
      title: "The narrative scheme",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polyline points="30,230 130,230 200,170 290,120 380,60 470,170 570,200" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="30" cy="230" r="7" fill="#2563eb"/><circle cx="130" cy="230" r="7" fill="#dc2626"/><circle cx="380" cy="60" r="8" fill="#f59e0b"/><circle cx="570" cy="200" r="7" fill="#16a34a"/>
<text x="30" y="260" font-size="14" fill="#0f172a">Initial</text><text x="30" y="278" font-size="14" fill="#0f172a">situation</text>
<text x="105" y="205" font-size="14" fill="#dc2626" font-weight="bold">Breaking</text><text x="105" y="222" font-size="14" fill="#dc2626" font-weight="bold">the balance</text>
<text x="215" y="115" font-size="14" fill="#0f172a">Development</text><text x="215" y="133" font-size="14" fill="#0f172a">(twists)</text>
<text x="395" y="55" font-size="14" fill="#b45309" font-weight="bold">Climax</text>
<text x="470" y="210" font-size="14" fill="#0f172a">Resolution</text><text x="470" y="288" font-size="14" fill="#16a34a" font-weight="bold">Final situation</text>
<text x="300" y="25" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Tension rises and then falls</text>
</svg>`,
      caption: "The blue line represents narrative tension: it grows up to the climax and then is resolved."
    },
    {
      type: "text",
      title: "2. Story (fabula) and plot (intreccio)",
      html: `<p>In the 20th century the <b>Russian Formalists</b> (Viktor Shklovsky, Boris Tomashevsky) distinguished two levels:</p>
<ul>
<li><b>Story</b> (<i>fabula</i>): the events in the <b>chronological and causal order</b> in which they \"really\" happened.</li>
<li><b>Plot</b> (<i>intreccio</i>): the events as the author <b>chooses to present them</b>, even in a different order (anticipations, flashbacks, jumps), to create suspense, surprise or meaning.</li>
</ul>
<p>Example: in a detective story the <i>fabula</i> starts from the crime and ends with the discovery of the culprit; the plot starts from the body and reconstructs <i>backwards</i> how things got there. The <i>fabula</i> is a \"chronicle\"; the plot is the <b>art</b> of storytelling.</p>`
    },
    {
      type: "example",
      title: "Same story, two plots",
      html: `<p><b>Story (fabula)</b>: (1) Sara loses her wallet, (2) a passer-by finds it, (3) takes it to the police, (4) Sara gets it back.</p>
<p><b>Plot A</b> (linear): 1-2-3-4, in the order of events.</p>
<p><b>Plot B</b> (with a flashback): it opens with Sara collecting her wallet from the police (4); then it goes back: \"three hours earlier\" she had lost it (1)... The reader immediately wonders <i>how it got there</i>: curiosity is born. The story is identical, the effect is different.</p>`
    },
    {
      type: "widget",
      title: "Story or plot?",
      widget: "classify",
      options: { groups: ["Belongs to the plot (narrative technique)", "Belongs to the story (order of events)"], items: [["Flashback", 0], ["Flash-forward", 0], ["Chronological order of events", 1], ["A narrative that starts from the end", 0], ["The real cause-and-effect sequence", 1]] },
      caption: "Tell the author's techniques apart from the real order of events."
    },
    {
      type: "text",
      title: "3. The narrator and point of view",
      html: `<p>We must not confuse the <b>author</b> (the real person who writes) with the <b>narrator</b> (the voice that tells the story inside the text). The narrator can be:</p>
<ul>
<li><b>External</b> (3rd person): does not take part in the story (\"Lucia was running home...\"). It can be <b>omniscient</b> (knows everything, even thoughts), or limit itself to what can be observed from outside.</li>
<li><b>Internal</b> (1st person): a character in the story, protagonist or witness (\"I was running home...\"). It knows only what it knows and sees, and it can be <b>unreliable</b>.</li>
</ul>
<p>The theorist <b>Gérard Genette</b> (1930-2018) also distinguishes <b>focalisation</b>, that is, <i>from which point of view</i> we see the events:</p>
<ul>
<li><b>Zero focalisation</b>: the narrator knows more than the characters (omniscience). E.g. Manzoni's <i>I promessi sposi</i> (The Betrothed).</li>
<li><b>Internal focalisation</b>: we see through a character's eyes and know only what that character knows.</li>
<li><b>External focalisation</b>: the narrator knows less than the character and reports only what can be seen and heard, without explaining thoughts.</li>
</ul>
<p>The <b>characters' words</b> can be reported in three ways: <b>direct speech</b> (quotation marks or dashes: \"I'm coming,\" she said), <b>indirect speech</b> (She said that she would come) and <b>free indirect speech</b> (with no introduction, the character's voice blends with the narrator's: <i>She went to the window. How boring, this rain!</i>).</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand point of view",
      intro: "Point of view is the hardest thing to see in a text. Here are three metaphors.",
      tabs: [
        { label: "🎥 The camera", html: "<p>Think of the narrator as a <b>camera</b>. With <b>zero focalisation</b> the camera is a drone that sees everything from above, even inside houses. With <b>internal focalisation</b> it is a first-person video game: you see only what the character sees. With <b>external focalisation</b> it is a security camera: it records actions and words, but not thoughts.</p>" },
        { label: "🔁 Rewrite the scene", html: "<p>The best way to understand point of view is to <b>change it</b>. Scene: a boy arrives late at school. <br><b>External omniscient</b>: <i>Marco walked into the classroom anxiously: he knew the teacher was already furious.</i> <br><b>Internal (1st person)</b>: <i>I walked in and my blood ran cold: the teacher was staring at me.</i> <br><b>External objective</b>: <i>Marco opened the door. The teacher stopped talking.</i><br>The tone changes, and so do the information and the sympathy we feel for the character.</p>" },
        { label: "👁️ Points of view at a glance", html: "<p>The diagram shows how much the narrator knows compared with the character.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Focalisation (Genette)</text><rect x="30" y="60" width="160" height="150" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="110" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ZERO</text><text x="110" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narrator &gt; character</text><text x="110" y="150" font-size="14" text-anchor="middle" fill="#0f172a">knows everything</text><text x="110" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(omniscience)</text><rect x="220" y="60" width="160" height="150" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">INTERNAL</text><text x="300" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narrator = character</text><text x="300" y="150" font-size="14" text-anchor="middle" fill="#0f172a">sees through their eyes</text><rect x="410" y="60" width="160" height="150" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="490" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">EXTERNAL</text><text x="490" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narrator &lt; character</text><text x="490" y="150" font-size="14" text-anchor="middle" fill="#0f172a">only actions and words</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Point of view changes what we know and what we feel</text></svg>` }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: narrator and story",
      questions: [
        { type: "mc", q: "In a first-person story the narrator is...", options: ["external", "internal", "always omniscient"], answer: 1, explain: "Whoever says 'I' is a character in the story: an internal narrator." },
        { type: "tf", q: "The plot always follows the chronological order of events.", answer: false, explain: "The plot can change the order with flashbacks and flash-forwards; it is the story (fabula) that follows the real order." },
        { type: "mc", q: "'She sat down. How boring, that lesson!' is an example of...", options: ["direct speech", "free indirect speech", "description"], answer: 1, explain: "The character's thought enters the narrative with no introductory verbs and no quotation marks." }
      ]
    },
    {
      type: "text",
      title: "4. Characters",
      html: `<p>Characters are the beings (people, animals, fantastic creatures) who act in the story. According to their <b>role</b> we distinguish:</p>
<ul>
<li><b>Protagonist</b>: the central character, whose story we follow (the <b>hero</b> in fairy tales).</li>
<li><b>Antagonist</b>: the one who opposes the protagonist.</li>
<li><b>Helper</b> (or ally): the one who supports the protagonist. <b>Supporting</b> and <b>minor characters</b>: they complete the action.</li>
</ul>
<p>The English writer <b>E. M. Forster</b> (<i>Aspects of the Novel</i>, 1927) distinguished <b>flat</b> characters (defined by a single quality, predictable) from <b>round</b> characters (complex, able to surprise and change). A character can be:</p>
<ul>
<li><b>static</b> (does not change during the story) or <b>dynamic</b> (is transformed);</li>
<li>a <b>type</b> (represents a category, like the miser) or an <b>individual</b> (unique).</li>
</ul>
<p>The reader gets to know a character in various ways: <b>direct characterisation</b> (the narrator describes them: \"he was a miserly man\") and <b>indirect characterisation</b> (we infer it from actions, words, choices and the things they own). The latter is preferred in modern fiction: <i>\"show, don't tell\"</i>.</p>`
    },
    {
      type: "example",
      title: "How we \"see\" a character",
      html: `<p>Compare two ways of presenting the same character:</p>
<p><b>Direct</b>: <i>\"Giulia was a very generous person.\"</i></p>
<p><b>Indirect</b>: <i>\"Giulia emptied her wallet for the man sitting on the pavement, then walked home.\"</i></p>
<p>In the second case we infer it from the facts: the reader takes an active part, and so becomes more involved.</p>`
    },
    {
      type: "text",
      title: "5. Time and setting",
      html: `<p><b>Time</b> has two dimensions:</p>
<ul>
<li><b>Story time</b>: the real duration of the events (years, a day).</li>
<li><b>Discourse time</b>: how much space the text gives to those events (lines, pages).</li>
</ul>
<p>The relationship between the two creates <b>pace</b>:</p>
<ul>
<li><b>Scene</b>: story time ≈ discourse time (mostly dialogue).</li>
<li><b>Summary</b>: long periods told in a few lines (\"Ten years went by\").</li>
<li><b>Ellipsis</b>: a stretch of time is skipped completely.</li>
<li><b>Pause</b>: the narration stops (description, reflection) while the story does not move forward.</li>
<li><b>Stretch</b>: a moment lasts many lines (the long wait).</li>
</ul>
<p>And for order: <b>analepsis</b> (flashback: a jump into the past), <b>prolepsis</b> (flash-forward: an anticipation of the future). Time can be <b>chronological</b> (external, clock time) or <b>psychological</b> (inner: an hour of boredom feels endless).</p>
<p>The <b>setting</b> (space) is where the action takes place: <b>real</b> or <b>imaginary</b>, <b>open</b> or <b>closed</b>. It is not just a background: it creates atmosphere, expresses a state of mind, sometimes it is a symbol (the castle, the forest, the sea).</p>`
    },
    {
      type: "curiosity",
      title: "\"The Betrothed\" begins with a landscape",
      html: `<p>Alessandro Manzoni's famous opening, <i>\"Quel ramo del lago di Como, che volge a mezzogiorno...\"</i> (That branch of Lake Como which turns towards the south...), begins the story with a <b>long description</b> of the places (a narrative pause) before even introducing the characters. The novel, published in its final version in 1840-42, has an external, <b>omniscient</b> and often ironic narrator who comments on the events. It pretends to be rewriting an anonymous 17th-century manuscript: this is the device of the \"found manuscript\".</p>`
    },
    {
      type: "curiosity",
      title: "Time in video games and TV series",
      html: `<p>TV series constantly use the techniques we have seen: the <i>flashback</i> (analepsis), the <i>ellipsis</i> (\"three months later\") and the <i>cliffhanger</i> (an ending suspended at the moment of highest tension, as in a series left halfway). Video games also play with point of view: the first-person camera is internal focalisation, the view from above is omniscience.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: the elements of the narrative text",
      nodes: [
        { id: "tn", label: "Narrative text", x: 50, y: 8, color: "#3b82f6", html: "Tells events linked in time and by cause and effect, lived by characters.", why: "Storytelling is one of the oldest forms of thought: it gives order to experience and makes it possible to share it." },
        { id: "fab", label: "Story and plot", x: 18, y: 38, color: "#10b981", html: "Story (fabula) = chronological order of events; plot (intreccio) = order chosen by the author.", why: "A distinction proposed by the Russian Formalists (1910s-1920s) to show that art lies in the way of telling, not only in what is told." },
        { id: "nar", label: "Narrator and point of view", x: 82, y: 38, color: "#f59e0b", html: "External or internal narrator; zero, internal, external focalisation.", why: "Whoever tells the story decides what we know and how much we trust them. Genette (<i>Figures III</i>, 1972) systematised these concepts for precise analysis." },
        { id: "per", label: "Characters", x: 30, y: 72, color: "#8b5cf6", html: "Protagonist, antagonist, helpers; flat or round.", why: "Characters give the plot emotional meaning: Forster (1927) showed that a well-built character surprises in a convincing way." },
        { id: "ts", label: "Time and setting", x: 70, y: 72, color: "#ef4444", html: "Story time and discourse time; analepsis and prolepsis; places as atmosphere and symbol.", why: "Discourse time creates pace and suspense; the setting is not just a background but fills the events with meaning." }
      ],
      edges: [["tn", "fab", "is organised into"], ["tn", "nar", "is filtered by"], ["tn", "per", "has"], ["tn", "ts", "is set in"]]
    },
    {
      type: "remember",
      title: "Take-away",
      html: `<p>To analyse a narrative text ask yourself: <b>who is telling?</b> (narrator), <b>from where do they see?</b> (focalisation), <b>in what order?</b> (story/plot), <b>who acts?</b> (characters), <b>when and where?</b> (time and setting). Then look for the <b>structure</b>: initial situation, breaking of the balance, development, resolution.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: characters, time and setting",
      questions: [
        { type: "mc", q: "A predictable character built on a single quality is, according to Forster...", options: ["round", "flat", "dynamic"], answer: 1, explain: "Forster calls characters with a single feature 'flat'." },
        { type: "mc", q: "'Ten years later, Anna returned to the village.' Here time is handled with...", options: ["a pause", "a summary/ellipsis", "a scene"], answer: 1, explain: "Ten years are summed up in a few words." },
        { type: "tf", q: "A flashback is an analepsis.", answer: true, explain: "It is a jump back in story time." }
      ]
    }
  ],
  glossary: [
    { t: "Story (fabula)", d: "The events told in the chronological and causal order in which they happened." },
    { t: "Plot (intreccio)", d: "The events told in the order chosen by the author." },
    { t: "Narrator", d: "The voice that tells the story, distinct from the author." },
    { t: "Focalisation", d: "The point of view from which the events are presented." },
    { t: "Analepsis", d: "A jump back in time (flashback)." },
    { t: "Prolepsis", d: "An anticipation of future events (flash-forward)." },
    { t: "Ellipsis", d: "A time jump in which a period is not told." },
    { t: "Climax", d: "The moment of highest tension in the story." },
    { t: "Antagonist", d: "The character who opposes the protagonist." },
    { t: "Free indirect speech", d: "The character's words or thoughts blend with the narrator's voice, without any markers." },
    { t: "Cliffhanger", d: "The ending of an episode left suspended at the point of highest tension." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What distinguishes the story (fabula) from the plot (intreccio)?", options: ["The length of the text", "The order in which the events are presented", "The number of characters", "The type of narrator"], answer: 1, explain: "The story follows chronological order; the plot follows the order chosen by the author." },
      { type: "tf", q: "Author and narrator are always the same thing.", answer: false, explain: "The author is the real person; the narrator is a voice created inside the text." },
      { type: "mc", q: "With internal focalisation the reader...", options: ["knows more than the characters", "knows only what the character knows", "does not know the thoughts and sees only actions", "knows the future"], answer: 1, explain: "We see the story through a character's eyes." },
      { type: "text", q: "What is a jump back in time in a narrative called?", answer: ["analepsis", "flashback", "an analepsis", "a flashback", "flash-back"], explain: "Analepsis (flashback): a past event is recalled." },
      { type: "order", q: "Put the stages of the narrative scheme in order.", items: ["Initial situation", "Breaking of the balance", "Development", "Resolution"], explain: "We start from balance, it is broken, the story develops and finally it is resolved." },
      { type: "mc", q: "'He was a miserly man' is an example of ... characterisation.", options: ["direct", "indirect", "ironic", "dialogue-based"], answer: 0, explain: "The narrator states the quality directly." },
      { type: "mc", q: "A description that stops the action is...", options: ["a scene", "a pause", "an ellipsis", "a climax"], answer: 1, explain: "Story time does not move forward while the narration goes on: a pause." },
      { type: "num", q: "How many stages does the basic narrative scheme described in the lesson have (initial situation, breaking of the balance, development, resolution)?", answer: 4, tol: 0, explain: "There are four." },
      { type: "mc", q: "In 'The Betrothed' (I promessi sposi) the narrator is...", options: ["internal protagonist", "external omniscient", "external objective", "internal witness"], answer: 1, explain: "It tells the story from outside, knows everything and comments." }
    ]
  }
});
