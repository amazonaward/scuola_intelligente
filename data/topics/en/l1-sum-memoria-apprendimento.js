TOPIC('en', {
  id: "l1-sum-memoria-apprendimento",
  title: "Memory and learning",
  intro: "Why do we remember a phone number for a few seconds but the smell of grandma's kitchen for a lifetime? Why did Pavlov's dogs drool at the sound of a bell? In this lesson you'll study how <b>memory</b> works (sensory, short-term and long-term memory, Ebbinghaus's forgetting curve, memories that get reconstructed) and the main theories of <b>learning</b>: classical conditioning (Pavlov), operant conditioning (Thorndike, Skinner), learning by insight (Köhler) and observational learning (Bandura). By the end you'll also understand <b>how to use this research to learn better</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. What memory is",
      html: `<p><b>Memory</b> is the ability to <b>encode, store and retrieve</b> information. These are three separate stages, and a memory can "fail" at any of them:</p>
<ul>
<li><b>Encoding</b>: turning information into a form the brain can store (if you don't pay attention, it doesn't get encoded).</li>
<li><b>Storage</b> (retention): keeping it over time.</li>
<li><b>Retrieval</b>: calling it up when you need it (sometimes it's "on the tip of my tongue").</li>
</ul>
<p>The best-known classic model is the <b>multi-store model</b> proposed by <b>Richard Atkinson and Richard Shiffrin in 1968</b>: information passes through three systems.</p>
<ol>
<li><b>Sensory memory</b>: holds what the senses register for <b>fractions of a second</b> (about 1/4-1 s for images, a few seconds for sounds). George Sperling (1960) showed with an experiment using grids of letters that the "iconic trace" contains much more than we can then report, but fades extremely fast.</li>
<li><b>Short-term memory</b> (STM): keeps a small amount of information for a few seconds. In <b>1956</b> George <b>Miller</b> (in his paper "The Magical Number Seven, Plus or Minus Two") estimated its capacity at <b>7 ± 2 items</b> (<i>chunks</i>). Without rehearsal it lasts about 15-30 seconds (Peterson and Peterson, 1959).</li>
<li><b>Long-term memory</b> (LTM): practically unlimited capacity, lasting even a lifetime.</li>
</ol>
<p>To move from STM to LTM you need <b>rehearsal</b> and, even more, <b>processing the meaning</b> (linking new information to what you already know).</p>`
    },
    {
      type: "svg",
      title: "Atkinson and Shiffrin's model (1968)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="100" width="105" height="80" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="62" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">STIMULI</text>
<text x="62" y="150" font-size="14" text-anchor="middle" fill="#0f172a">from the world</text>
<rect x="150" y="100" width="130" height="80" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="215" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">SENSORY</text>
<text x="215" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">MEMORY</text>
<text x="215" y="166" font-size="14" text-anchor="middle" fill="#0f172a">~1 second</text>
<rect x="315" y="100" width="120" height="80" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="375" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">SHORT</text>
<text x="375" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">TERM</text>
<text x="375" y="166" font-size="14" text-anchor="middle" fill="#0f172a">7 ± 2 chunks</text>
<rect x="470" y="100" width="120" height="80" rx="12" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="530" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">LONG</text>
<text x="530" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">TERM</text>
<text x="530" y="166" font-size="14" text-anchor="middle" fill="#0f172a">unlimited</text>
<line x1="115" y1="140" x2="148" y2="140" stroke="#0f172a" stroke-width="3"/><polygon points="148,140 138,133 138,147" fill="#0f172a"/>
<line x1="280" y1="130" x2="313" y2="130" stroke="#0f172a" stroke-width="3"/><polygon points="313,130 303,123 303,137" fill="#0f172a"/>
<text x="297" y="122" font-size="14" text-anchor="middle" fill="#0f172a">attention</text>
<line x1="435" y1="130" x2="468" y2="130" stroke="#0f172a" stroke-width="3"/><polygon points="468,130 458,123 458,137" fill="#0f172a"/>
<text x="452" y="122" font-size="14" text-anchor="middle" fill="#0f172a">rehearsal</text>
<path d="M 530 182 Q 530 250 375 250 Q 375 220 375 182" fill="none" stroke="#6b21a8" stroke-width="3"/>
<polygon points="375,184 368,196 382,196" fill="#6b21a8"/>
<text x="450" y="272" font-size="14" text-anchor="middle" fill="#0f172a">retrieval</text>
<text x="215" y="215" font-size="14" text-anchor="middle" fill="#991b1b">forgetting</text>
<line x1="215" y1="182" x2="215" y2="200" stroke="#991b1b" stroke-width="2"/>
</svg>`,
      caption: "Information passes through three stores; only part of it reaches long-term memory."
    },
    {
      type: "example",
      title: "The chunking trick",
      html: `<p>Try to remember this for a few seconds: <b>1 4 9 2 1 7 7 6 1 8 6 1</b>. That's twelve digits, too many for STM. Now group them into dates you know: <b>1492</b> (Columbus reaches America), <b>1776</b> (the American Declaration of Independence), <b>1861</b> (the unification of Italy). The "pieces" to remember drop from twelve to three. A <b>chunk</b> is a meaningful unit: an expert chess player recognises whole arrangements of pieces as a single chunk, while a beginner sees individual pieces. It's the same principle as writing phone numbers in groups.</p>`
    },
    {
      type: "text",
      title: "2. Long-term memory and working memory",
      html: `<p>Long-term memory is not one single block. We distinguish:</p>
<ul>
<li><b>Declarative memory</b> (explicit): memories we can "declare" in words. It is divided into <b>episodic</b> (episodes from our life: yesterday's trip) and <b>semantic</b> (general knowledge: the capital of France). The distinction comes from <b>Endel Tulving</b> (1972).</li>
<li><b>Procedural memory</b> (implicit): "knowing how" (riding a bike, tying your shoelaces, playing an instrument). It shows itself in action, not in words, and is very long-lasting.</li>
</ul>
<p>In <b>1974</b> <b>Alan Baddeley and Graham Hitch</b> criticised the idea of a simple STM and proposed the concept of <b>working memory</b>: an active system that <b>holds and manipulates</b> information while we carry out tasks (doing a sum in your head, following a sentence). It includes a "central executive" that coordinates, and two subsystems: a <b>phonological loop</b> (for sounds and words) and a <b>visuospatial sketchpad</b> (for images and positions).</p>
<p>A famous case: the patient <b>H.M.</b> (Henry Molaison), who had surgery in 1953 to treat severe epileptic seizures, lost part of his hippocampus and could no longer form <b>new declarative memories</b>, although he kept his old ones and could still learn new motor skills. He showed that the <b>hippocampus</b> is essential for consolidation and that declarative and procedural memory are separate systems.</p>`
    },
    {
      type: "widget",
      title: "What kind of memory is it?",
      widget: "classify",
      options: { groups: ["Episodic", "Semantic", "Procedural"], items: [
        ["Remembering your birthday party last year", 0],
        ["Knowing that Rome is the capital of Italy", 1],
        ["Riding a bike without thinking about it", 2],
        ["Remembering where you were on the last school trip", 0],
        ["Knowing the meaning of the word \"democracy\"", 1],
        ["Typing on a keyboard without looking at the keys", 2]
      ] },
      caption: "Put each memory in its \"drawer\"."
    },
    {
      type: "text",
      title: "3. Forgetting and reconstructing: Ebbinghaus, Bartlett, Loftus",
      html: `<p><b>Hermann Ebbinghaus</b> (1850-1909) was the first to study memory through experiments: in <b>1885</b> he learnt lists of <b>nonsense syllables</b> by heart (such as "DAX", "BOK", to remove the influence of meaning) and measured how much he remembered after different intervals. He obtained the <b>forgetting curve</b>: the loss is <b>very fast in the first few hours</b> and then slows down. Without revision we forget most of the material within a few days; reviewing at increasing intervals makes the memory last much longer (the <b>spacing effect</b>).</p>
<p>Useful effects to know: in a list we remember the first items best (<b>primacy effect</b>, which have reached LTM thanks to more rehearsal) and the last ones (<b>recency effect</b>, still in STM), and the middle ones worst (the serial position curve).</p>
<p>But a memory is not a video recording. In <b>1932</b> <b>Frederic Bartlett</b> had English students read a Native American folk tale, "The War of the Ghosts", and asked them to rewrite it some time later. The versions became shorter and were <b>changed to fit English cultural schemas</b> (strange details were dropped or "normalised"). Memory is <b>reconstructive</b>: it uses <b>schemas</b> and knowledge to fill in the gaps.</p>
<p>In <b>1974</b> <b>Elizabeth Loftus and John Palmer</b> showed films of car accidents and asked how fast the cars were going when they "<i>smashed</i>" into each other or when they "<i>hit</i>" each other. With the verb "smashed" the estimates were higher; a week later many people said they had seen broken glass, which wasn't there. <b>Leading questions</b> can alter memories: that's why eyewitness testimony must be treated with caution.</p>`
    },
    {
      type: "svg",
      title: "The forgetting curve",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<line x1="70" y1="250" x2="570" y2="250" stroke="#0f172a" stroke-width="2"/>
<line x1="70" y1="30" x2="70" y2="250" stroke="#0f172a" stroke-width="2"/>
<text x="30" y="40" font-size="14" fill="#0f172a">100%</text>
<text x="40" y="255" font-size="14" fill="#0f172a">0%</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#0f172a">time since learning</text>
<path d="M 70 40 C 110 140 150 175 230 195 C 340 215 450 225 560 230" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M 70 40 C 90 90 110 110 150 118 L 150 60 C 175 100 200 125 260 135 L 260 62 C 300 100 350 120 420 128 L 420 70 C 460 100 500 110 560 116" fill="none" stroke="#166534" stroke-width="4"/>
<text x="330" y="205" font-size="14" fill="#991b1b">no revision</text>
<text x="400" y="60" font-size="14" fill="#166534">with spaced revision</text>
<text x="150" y="268" font-size="14" text-anchor="middle" fill="#0f172a">20 min</text>
<text x="260" y="268" font-size="14" text-anchor="middle" fill="#0f172a">1 day</text>
<text x="420" y="268" font-size="14" text-anchor="middle" fill="#0f172a">1 week</text>
</svg>`,
      caption: "Simplified diagram: without revision, forgetting is fast at first; each review \"lifts\" the curve and makes it flatter (the labels are approximate)."
    },
    {
      type: "curiosity",
      title: "\"It's on the tip of my tongue\"",
      html: `<p>The "tip of the tongue" phenomenon shows that a memory can be there but <b>not retrievable</b> at that moment: we remember its first letter or how many syllables it has. So forgetting isn't always losing the information: often it's a <b>retrieval problem</b>, which gets better with <b>cues</b> (that's why multiple-choice tests are easier than open-answer ones).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: memory",
      questions: [
        { type: "mc", q: "How many items can short-term memory hold, according to Miller (1956)?", options: ["2 ± 1", "7 ± 2", "20 ± 5", "unlimited"], answer: 1, explain: "The \"magical number seven, plus or minus two\"." },
        { type: "mc", q: "Bartlett's work (\"The War of the Ghosts\", 1932) shows that memory is...", options: ["a faithful recording", "reconstructive", "only procedural", "fixed from birth"], answer: 1, explain: "Memories are reconstructed on the basis of cultural schemas and knowledge." },
        { type: "tf", q: "Ebbinghaus's forgetting curve shows that we forget a lot in the first few hours and then more and more slowly.", answer: true, explain: "The loss is greatest at the start, then slows down." }
      ]
    },
    {
      type: "text",
      title: "4. Learning: classical conditioning (Pavlov)",
      html: `<p><b>Learning</b> is a <b>relatively lasting change in behaviour</b> caused by experience. The first scientific theories came with behaviourism.</p>
<p><b>Ivan Pavlov</b> (1849-1936), a Russian physiologist (Nobel Prize in Medicine in 1904 for his work on digestion), noticed that his laboratory dogs salivated not only when they saw food, but as soon as the assistant arrived. So he carried out systematic experiments (from around 1900):</p>
<ol>
<li>Food (the <b>unconditioned stimulus</b>, UCS) causes salivation (the <b>unconditioned response</b>, UCR): an innate reflex.</li>
<li>The sound of a bell (a <b>neutral stimulus</b>) does not cause salivation.</li>
<li>The bell is presented repeatedly <b>just before</b> the food (<b>pairing</b>).</li>
<li>In the end the bell alone (the <b>conditioned stimulus</b>, CS) causes salivation (the <b>conditioned response</b>, CR).</li>
</ol>
<p>Other phenomena: <b>extinction</b> (if the bell rings many times without food, the response dies out), <b>generalisation</b> (similar sounds trigger the response), <b>discrimination</b> (the dog learns to tell different sounds apart).</p>
<p>Conditioning explains <b>emotional reactions</b>: phobias, disgust for a food that once made us ill, anxiety linked to a place. In 1920 <b>Watson and Rayner</b> conditioned "Little Albert" to fear a white rat by pairing it with a loud noise (an experiment that is now ethically unacceptable).</p>`
    },
    {
      type: "svg",
      title: "Classical conditioning in three stages",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="100" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">1. Before</text>
<rect x="15" y="45" width="170" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="100" y="71" font-size="14" text-anchor="middle" fill="#0f172a">Food (UCS) → saliva (UCR)</text>
<rect x="15" y="100" width="170" height="40" rx="8" fill="#e5e7eb" stroke="#4b5563" stroke-width="2"/>
<text x="100" y="126" font-size="14" text-anchor="middle" fill="#0f172a">Bell → nothing</text>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2. During</text>
<rect x="215" y="45" width="170" height="95" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Bell + food</text>
<text x="300" y="98" font-size="14" text-anchor="middle" fill="#0f172a">repeated many times</text>
<text x="300" y="121" font-size="14" text-anchor="middle" fill="#0f172a">→ saliva</text>
<text x="500" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">3. After</text>
<rect x="415" y="45" width="170" height="95" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="500" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Bell alone (CS)</text>
<text x="500" y="98" font-size="14" text-anchor="middle" fill="#0f172a">→ saliva (CR)</text>
<text x="500" y="121" font-size="14" text-anchor="middle" fill="#0f172a">learned response</text>
<line x1="188" y1="92" x2="212" y2="92" stroke="#0f172a" stroke-width="3"/><polygon points="212,92 202,86 202,98" fill="#0f172a"/>
<line x1="388" y1="92" x2="412" y2="92" stroke="#0f172a" stroke-width="3"/><polygon points="412,92 402,86 402,98" fill="#0f172a"/>
<rect x="60" y="175" width="480" height="95" rx="12" fill="#ffffff" stroke="#6b21a8" stroke-width="2"/>
<text x="300" y="205" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Everyday example</text>
<text x="300" y="230" font-size="14" text-anchor="middle" fill="#0f172a">The sound of the dentist's drill (neutral stimulus) becomes</text>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">associated with pain: then the sound alone causes anxiety.</text>
</svg>`,
      caption: "For conditioning to happen, the neutral stimulus must come shortly before the unconditioned stimulus."
    },
    {
      type: "text",
      title: "5. Operant conditioning: Thorndike and Skinner",
      html: `<p>In classical conditioning the organism <i>undergoes</i> an association between stimuli. In <b>operant</b> (or instrumental) <b>conditioning</b> it learns that the <b>consequences</b> of an action make it more or less likely.</p>
<p><b>Edward Thorndike</b> (1898) shut hungry cats in "puzzle boxes" that they could escape by pressing a lever. The cats proceeded by <b>trial and error</b>; over time their escape times got shorter. He formulated the <b>law of effect</b>: behaviour followed by pleasant consequences tends to be repeated, behaviour followed by unpleasant consequences tends to disappear.</p>
<p><b>Burrhus F. Skinner</b> (1904-1990) refined the method with the <b>"Skinner box"</b>: a cage in which a rat gets food by pressing a lever. He distinguished:</p>
<ul>
<li><b>Positive reinforcement</b>: something pleasant is <b>added</b> after the behaviour (praise, a reward) → the behaviour increases.</li>
<li><b>Negative reinforcement</b>: something unpleasant is <b>removed</b> → the behaviour increases (fastening your seatbelt to stop the "beep"). It is not a punishment!</li>
<li><b>Punishment</b>: an unpleasant consequence (or the removal of something pleasant) → the behaviour decreases.</li>
</ul>
<p>Skinner also studied <b>schedules of reinforcement</b>: reinforcement given only <i>sometimes</i> (intermittent, like slot machines) makes behaviour much more resistant to extinction than reinforcement given every time. He applied these ideas to <b>programmed instruction</b> (teaching machines, from the 1950s).</p>`
    },
    {
      type: "widget",
      title: "Reinforcement or punishment?",
      widget: "classify",
      options: { groups: ["Positive reinforcement", "Negative reinforcement", "Punishment"], items: [
        ["The teacher praises a student who answered well, and he puts his hand up more often", 0],
        ["You fasten your seatbelt to stop the annoying \"beep\"", 1],
        ["Taking away the phone of whoever is noisy in class, to reduce the noise", 2],
        ["A child gets a sticker every time they tidy up their toys", 0],
        ["You take a painkiller and your headache goes: you'll take it again next time", 1],
        ["A fine for double parking", 2]
      ] },
      caption: "Adding or removing? Does the behaviour increase or decrease?"
    },
    {
      type: "example",
      title: "Conditioning at school",
      html: `<p>A boy is laughed at once while reading aloud. After this happens again, even the thought of reading in class makes him anxious (<b>classical conditioning</b>: reading has been associated with humiliation). To avoid the anxiety he starts "forgetting" his book at home: the avoidance behaviour is <b>negatively reinforced</b> because it ends the unpleasant feeling (<b>operant conditioning</b>). An attentive teacher will work to <b>extinguish</b> the association, by creating positive, gradual reading experiences.</p>`
    },
    {
      type: "text",
      title: "6. Insight and social learning",
      html: `<p>Not all learning happens by trial and error. In 1917 the Gestalt psychologist <b>Wolfgang Köhler</b>, observing chimpanzees on Tenerife, saw the chimpanzee <b>Sultan</b>, who couldn't reach a banana with one stick, fit two sticks together after a <b>thoughtful</b> pause and reach it. He called this <b>insight</b> (a "sudden restructuring" of the problem): you grasp the solution all at once, not through random attempts.</p>
<p><b>Edward Tolman</b> showed that rats form <b>cognitive maps</b> of mazes even without reinforcement (<b>latent learning</b>): they learn without it showing straight away in their behaviour.</p>
<p><b>Albert Bandura</b> (the Bobo doll experiment, 1961) demonstrated <b>observational learning</b> (<i>modelling</i>): we learn by watching others and the consequences of their actions, without trying things ourselves. For this to happen four processes are needed: attention, retention, reproduction, motivation. Bandura later (1977) introduced the concept of <b>self-efficacy</b>: confidence in your own ability to succeed at a task.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand learning",
      intro: "There are many theories of learning: here are some analogies to help you find your way.",
      tabs: [
        { label: "🐕 Three ways of learning", html: `<p><b>Associating</b> (Pavlov): "when you hear the sound, food arrives". <b>Trying and getting consequences</b> (Thorndike, Skinner): "if I press the lever, I get food". <b>Watching and understanding</b> (Bandura, Köhler): "I saw what he did" or "I've worked out how it works".</p>` },
        { label: "🧭 The sat nav", html: `<p>A behaviourist would say that to get somewhere I learn a sequence of reinforced turns (stimulus → response). Tolman would say that instead I learn a <b>map</b> of the city: if a road is closed I find another way. Both things happen, depending on the task.</p>` },
        { label: "🎮 Video games", html: `<p>A video game uses all these principles: <b>reinforcement</b> (points, levels, intermittent rewards), <b>trial and error</b> (you die, you try again), <b>modelling</b> (you watch tutorials) and <b>insight</b> (you work out the boss's trick). Understanding these mechanisms also helps in designing good learning activities.</p>` }
      ]
    },
    {
      type: "text",
      title: "7. Learning to learn: what really works",
      html: `<p>Research on memory and learning has produced practical advice. The most cited study (Dunlosky and colleagues, 2013) compared ten study techniques:</p>
<ul>
<li><b>Highly effective</b>: <b>retrieval practice</b> (trying to remember without looking, testing yourself, getting someone to test you) and <b>distributed practice</b> (reviewing at increasing intervals, instead of studying everything in one night).</li>
<li><b>Not very effective</b>: passively <b>rereading</b> and <b>highlighting</b>, which give the illusion of knowing (the text feels familiar) without real learning.</li>
</ul>
<p>In 2006 Roediger and Karpicke showed that students who read a text once and then "recalled" it from memory remembered more a week later than those who had reread it several times: this is the <b>testing effect</b>. Other tips: <b>process</b> the meaning (Craik and Lockhart, 1972, "levels of processing": thinking about meaning fixes things better than repeating sounds), <b>link</b> new information to what you already know, use <b>images and maps</b>, and <b>sleep</b>, because sleep helps consolidate memories.</p>`
    },
    {
      type: "decision",
      title: "Test in three days: which plan do you choose?",
      html: `<p>You have a history test in three days. You have two hours a day available. You can choose how to use them.</p>`,
      question: "According to memory research, which strategy pays off most?",
      options: [
        { label: "Reread and highlight the chapter in one go the night before.", outcome: "It gives a feeling of familiarity, but Ebbinghaus's rapid forgetting wipes out most of the material; the memory stays fragile." },
        { label: "Study every day, in short blocks, and test yourself without looking at the book.", outcome: "It combines distributed practice and retrieval practice: the two most effective strategies. It's harder work, but the memory lasts much longer." },
        { label: "Copy out the chapter word for word in a notebook.", outcome: "It takes a long time but involves little processing: you repeat without understanding and without checking what you remember." }
      ],
      answer: 1,
      explain: "The findings of Ebbinghaus (the forgetting curve), Roediger and Karpicke (the testing effect) and Dunlosky all point the same way: <b>spread your study over time and test yourself actively</b>. A \"desirable\" difficulty (recalling with effort) strengthens memory."
    },
    {
      type: "conceptMap",
      title: "Map: memory and learning",
      nodes: [
        { id: "mem", label: "Memory", x: 25, y: 8, color: "#3b82f6", html: "Encoding, storage, retrieval.", why: "To remember, the information must have got in (attention), been kept (consolidation) and be findable (cues). A failure at each stage produces a different kind of forgetting." },
        { id: "mod", label: "Models", x: 8, y: 45, color: "#10b981", html: "Atkinson-Shiffrin (1968): sensory, STM, LTM. Baddeley-Hitch (1974): working memory.", why: "They come from the cognitive idea of the mind as an information-processing system; clinical cases like H.M. and experiments on STM show that the systems can be separated." },
        { id: "obl", label: "Forgetting and reconstruction", x: 40, y: 45, color: "#ef4444", html: "Ebbinghaus's curve, Bartlett's schemas, Loftus's leading questions.", why: "Ebbinghaus (1885) measured loss over time; Bartlett (1932) and Loftus (1974) showed that memories get reshaped. So testimony and memories need to be checked." },
        { id: "app", label: "Learning", x: 75, y: 8, color: "#f59e0b", html: "A lasting change in behaviour caused by experience.", why: "Behaviourism studied it through animal experiments to get observable data. Then cognitive psychology pointed out that processes happen inside the mind (insight, maps)." },
        { id: "cond", label: "Conditioning", x: 62, y: 45, color: "#8b5cf6", html: "Classical (Pavlov) and operant (Thorndike, Skinner).", why: "The first explains associations between stimuli (emotions, phobias), the second the role of consequences (rewards, punishments). They underlie behaviour modification and many educational practices." },
        { id: "soc", label: "Insight and modelling", x: 90, y: 45, color: "#ec4899", html: "Köhler, Tolman, Bandura.", why: "They show that we also learn by understanding (restructuring) or by watching others: people are not just \"stimulus-response machines\"." },
        { id: "str", label: "Study strategies", x: 50, y: 82, color: "#0ea5e9", html: "Active recall, distributed practice, processing meaning, sleep.", why: "They apply research findings: what we remember best is what we actively retrieve and review at intervals, linking it to what we already know." }
      ],
      edges: [["mem", "mod", "described by"], ["mem", "obl", "includes"], ["app", "cond", "explained by"], ["app", "soc", "explained by"], ["obl", "str", "guides"], ["cond", "str", "guides"]]
    },
    {
      type: "curiosity",
      title: "The dog that wasn't just a dog",
      html: `<p>Pavlov discovered conditioning while studying something completely different: <b>digestion</b>. His Nobel Prize (1904) wasn't for conditioned reflexes, which he discovered later while studying salivation. Many discoveries in psychology came from observations made "on the side" of other research. Another curiosity: in his experiments Pavlov didn't only use bells, but also metronomes, lights and even touch stimuli.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: learning",
      questions: [
        { type: "mc", q: "In Pavlov's classical conditioning, the bell becomes...", options: ["the unconditioned stimulus", "the conditioned stimulus", "a negative reinforcer", "a punishment"], answer: 1, explain: "After being paired with food, the bell is a conditioned stimulus." },
        { type: "mc", q: "Negative reinforcement...", options: ["makes the behaviour decrease", "removes something unpleasant and makes the behaviour increase", "is the same as punishment", "adds a reward"], answer: 1, explain: "Don't confuse it with punishment: the behaviour increases because it avoids or ends something unpleasant." },
        { type: "tf", q: "With insight (Köhler), the problem is solved by random trial and error.", answer: false, explain: "Insight is a sudden restructuring of the problem, not a series of random attempts." }
      ]
    }
  ],
  glossary: [
    { t: "Memory", d: "The ability to encode, store and retrieve information." },
    { t: "Chunk", d: "A meaningful unit of information, which makes it possible to extend the capacity of short-term memory." },
    { t: "Working memory", d: "A system that holds and manipulates information while carrying out tasks (Baddeley and Hitch, 1974)." },
    { t: "Episodic / semantic memory", d: "Memories of personal episodes / general knowledge (Tulving)." },
    { t: "Procedural memory", d: "Memory for skills and \"knowing how\"." },
    { t: "Forgetting curve", d: "The pattern of forgetting over time, described by Ebbinghaus (1885)." },
    { t: "Schema", d: "A structure of knowledge that guides how memories are interpreted and reconstructed." },
    { t: "Classical conditioning", d: "Learning by association between stimuli (Pavlov)." },
    { t: "Operant conditioning", d: "Learning based on the consequences of behaviour (Thorndike, Skinner)." },
    { t: "Reinforcement / punishment", d: "Consequences that make a behaviour more likely / less likely." },
    { t: "Insight", d: "Sudden understanding of the solution to a problem (Köhler)." },
    { t: "Modelling", d: "Learning by observing a model (Bandura)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What are the three stages of memory?", options: ["Encoding, storage, retrieval", "Listening, reading, writing", "Perception, attention, forgetting", "Sensation, conditioning, reinforcement"], answer: 0, explain: "A memory can fail at any of these stages." },
      { type: "mc", q: "Who proposed the multi-store model of memory in 1968?", options: ["Atkinson and Shiffrin", "Baddeley and Hitch", "Bartlett", "Pavlov"], answer: 0, explain: "Atkinson and Shiffrin: sensory, short-term, long-term." },
      { type: "tf", q: "Ebbinghaus used nonsense syllables as his material to remove the influence of meaning.", answer: true, explain: "In 1885 he used syllables like \"DAX\" to study memory in a controlled way." },
      { type: "mc", q: "Knowing how to ride a bike is an example of which memory?", options: ["episodic", "semantic", "procedural", "sensory"], answer: 2, explain: "It is \"knowing how\": procedural (implicit) memory." },
      { type: "mc", q: "In Loftus and Palmer's experiment (1974), the verb \"smashed\" led people to estimate...", options: ["higher speeds", "lower speeds", "the same speed", "no speed at all"], answer: 0, explain: "Leading questions change the memory." },
      { type: "text", q: "What was the name of the Russian physiologist who studied conditioned reflexes in dogs?", answer: ["pavlov", "ivan pavlov", "ivan petrovich pavlov"], explain: "Ivan Pavlov." },
      { type: "mc", q: "Fastening your seatbelt to stop a \"beep\" is an example of...", options: ["negative reinforcement", "punishment", "classical conditioning", "extinction"], answer: 0, explain: "An unpleasant stimulus is removed and the behaviour increases." },
      { type: "order", q: "Put the stages of classical conditioning in order.", items: ["The bell doesn't cause salivation", "The bell and food are presented together many times", "The bell alone causes salivation"], explain: "First the neutral stimulus, then pairing, then the conditioned response." },
      { type: "mc", q: "Which pair of strategies is most effective according to research?", options: ["Active recall and distributed practice", "Rereading and highlighting", "Copying and studying through the night", "Listening to music and rereading"], answer: 0, explain: "These are the techniques with the strongest evidence of effectiveness." },
      { type: "tf", q: "Bandura showed that we can learn just by watching a model.", answer: true, explain: "This is observational learning (the Bobo doll experiment, 1961)." }
    ]
  }
});
