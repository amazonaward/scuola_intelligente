TOPIC('en', {
  id: "l1-sum-psicologia-intro",
  title: "What is psychology?",
  intro: "Why do we get emotional, remember things, get angry, obey other people or imitate them? <b>Psychology</b> tries to answer these questions not with opinions, but with <b>observations and experiments</b>. In this lesson you'll find out what it studies, how it became a science (with Wundt, in 1879), which <b>schools</b> followed one another (psychoanalysis, behaviourism, Gestalt, cognitive psychology, humanistic psychology) and which <b>methods</b> it uses to understand the mind and behaviour.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. What psychology is about",
      html: `<p>The word comes from the Greek <i>psyché</i> ("soul", "breath of life") and <i>lógos</i> ("discourse, study"). Today <b>psychology</b> is defined as the <b>science that studies behaviour and mental processes</b> (perception, attention, memory, thinking, emotions, motivation) in human beings and, to some extent, in animals too.</p>
<p>Two key words:</p>
<ul>
<li><b>Behaviour</b>: what can be observed from the outside (talking, running, avoiding a dog, answering a test).</li>
<li><b>Mental processes</b>: what happens "inside" and can't be seen directly (remembering, deciding, feeling afraid). They are studied <i>indirectly</i>, starting from behaviour, from what people say and, today, also from brain activity.</li>
</ul>
<p>Psychology is a <b>borderline discipline</b>: it works alongside biology and neuroscience (how the brain works), sociology and anthropology (how society and culture influence us), philosophy (from which it was born) and education (how we learn and are taught).</p>`
    },
    {
      type: "text",
      title: "2. From philosophy to science: Wundt and James",
      html: `<p>For centuries questions about the mind were tackled by <b>philosophers</b>: Plato and Aristotle (in <i>De anima</i>) asked what the soul was; in the 17th century <b>Descartes</b> drew a sharp line between mind (<i>res cogitans</i>) and body (<i>res extensa</i>). But the <b>experimental method</b> was missing.</p>
<p>The birth of psychology as an independent science is dated to <b>1879</b>, when the German <b>Wilhelm Wundt</b> (1832-1920) founded the first laboratory of experimental psychology in <b>Leipzig</b>. Wundt measured, for example, <b>reaction times</b> to a stimulus and used controlled <b>introspection</b>: trained people described their own sensations when faced with standardised stimuli (a sound, a light). The aim was to break consciousness down into its "elements", as in chemistry; that's why this approach is called <b>structuralism</b>.</p>
<p>In America <b>William James</b> (1842-1910) published the <i>Principles of Psychology</i> in <b>1890</b>, influenced by Darwin's theory of evolution: he was less interested in the "elements" of consciousness than in its <b>function</b>, that is, what it is for in adapting to the environment (<b>functionalism</b>). James spoke of the "stream of consciousness": thought is not a chain of separate pieces but a continuous river.</p>`
    },
    {
      type: "widget",
      title: "Timeline of psychology",
      widget: "timeline",
      options: { unit: "year", events: [
        { year: 1879, label: "Wundt opens the first psychology laboratory in Leipzig", icon: "🔬" },
        { year: 1890, label: "James: Principles of Psychology", icon: "📘" },
        { year: 1900, label: "Freud: The Interpretation of Dreams", icon: "💭" },
        { year: 1912, label: "Wertheimer and the phi phenomenon: Gestalt is born", icon: "🧩" },
        { year: 1913, label: "Watson: the behaviourist manifesto", icon: "🐀" },
        { year: 1954, label: "Maslow: Motivation and Personality", icon: "🌱" },
        { year: 1967, label: "Neisser: Cognitive Psychology", icon: "💻" }
      ] },
      caption: "Drag or tap the events: in less than a hundred years psychology moves from introspection to the mind as an information processor."
    },
    {
      type: "text",
      title: "3. The great schools",
      html: `<p>In the 20th century several "ways of looking" at the mind emerged. None of them wiped out the others: today they are complementary perspectives.</p>
<table>
<tr><th>School</th><th>Main figures</th><th>Central idea</th></tr>
<tr><td><b>Psychoanalysis</b></td><td>Sigmund Freud (1856-1939), then Jung, Adler</td><td>Much of mental life is <b>unconscious</b>: repressed desires and conflicts (from childhood) influence dreams, slips, symptoms. Method: free association, dream interpretation (<i>The Interpretation of Dreams</i>, 1899-1900).</td></tr>
<tr><td><b>Behaviourism</b></td><td>John B. Watson, Pavlov, Skinner</td><td>Psychology should study only <b>observable behaviour</b>; we learn through conditioning, stimulus→response.</td></tr>
<tr><td><b>Gestalt</b></td><td>Max Wertheimer, Wolfgang Köhler, Kurt Koffka</td><td>The whole is <b>different from the sum of its parts</b>: we perceive organised forms, not isolated pieces.</td></tr>
<tr><td><b>Cognitive psychology</b></td><td>Neisser, Miller, Bruner, Piaget (development)</td><td>The mind processes information like a system (input, memory, decision, output); its internal processes are studied.</td></tr>
<tr><td><b>Humanistic psychology</b></td><td>Abraham Maslow, Carl Rogers</td><td>People strive for <b>growth and self-actualisation</b>; meaning, freedom and the helping relationship matter.</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "The schools compared: where do they look?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">The same person is afraid of dogs: how do the schools see it?</text>
<rect x="15" y="45" width="108" height="215" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="69" y="72" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Psychoanalysis</text>
<text x="69" y="110" font-size="14" text-anchor="middle" fill="#0f172a">Unconscious</text>
<text x="69" y="130" font-size="14" text-anchor="middle" fill="#0f172a">conflict,</text>
<text x="69" y="150" font-size="14" text-anchor="middle" fill="#0f172a">repressed</text>
<text x="69" y="170" font-size="14" text-anchor="middle" fill="#0f172a">experiences</text>
<rect x="131" y="45" width="108" height="215" rx="10" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="185" y="72" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Behaviour-</text>
<text x="185" y="89" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">ism</text>
<text x="185" y="125" font-size="14" text-anchor="middle" fill="#0f172a">Learned fear:</text>
<text x="185" y="145" font-size="14" text-anchor="middle" fill="#0f172a">dog + bite</text>
<text x="185" y="165" font-size="14" text-anchor="middle" fill="#0f172a">= condition-</text>
<text x="185" y="185" font-size="14" text-anchor="middle" fill="#0f172a">ing</text>
<rect x="247" y="45" width="108" height="215" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="301" y="72" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Gestalt</text>
<text x="301" y="110" font-size="14" text-anchor="middle" fill="#0f172a">How the</text>
<text x="301" y="130" font-size="14" text-anchor="middle" fill="#0f172a">whole scene</text>
<text x="301" y="150" font-size="14" text-anchor="middle" fill="#0f172a">is perceived</text>
<text x="301" y="170" font-size="14" text-anchor="middle" fill="#0f172a">as one</text>
<rect x="363" y="45" width="108" height="215" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="417" y="72" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Cognitive</text>
<text x="417" y="110" font-size="14" text-anchor="middle" fill="#0f172a">Distorted</text>
<text x="417" y="130" font-size="14" text-anchor="middle" fill="#0f172a">thoughts and</text>
<text x="417" y="150" font-size="14" text-anchor="middle" fill="#0f172a">predictions:</text>
<text x="417" y="170" font-size="14" text-anchor="middle" fill="#0f172a">"it will bite me"</text>
<rect x="479" y="45" width="106" height="215" rx="10" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="532" y="72" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Humanistic</text>
<text x="532" y="110" font-size="14" text-anchor="middle" fill="#0f172a">Listening to</text>
<text x="532" y="130" font-size="14" text-anchor="middle" fill="#0f172a">the whole person,</text>
<text x="532" y="150" font-size="14" text-anchor="middle" fill="#0f172a">their experience</text>
<text x="532" y="170" font-size="14" text-anchor="middle" fill="#0f172a">and values</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Different perspectives, not necessarily contradictory.</text>
</svg>`,
      caption: "Put simply: each school highlights a different side of the same experience."
    },
    {
      type: "example",
      title: "Example: one test, five readings",
      html: `<p>Martina panics every time she's tested orally in class. How would the schools explain it?</p>
<ul>
<li><b>Psychoanalysis</b>: perhaps underneath there is a fear of her parents' judgement that began in childhood.</li>
<li><b>Behaviourism</b>: an oral test that went badly became "associated" with humiliation in front of the class: now the classroom triggers anxiety (conditioning).</li>
<li><b>Cognitive psychology</b>: Martina thinks "if I get one thing wrong, I'm a disaster"; these catastrophic thoughts increase her anxiety.</li>
<li><b>Gestalt</b>: Martina sees the task only as "all or nothing", not as a set of manageable parts.</li>
<li><b>Humanistic psychology</b>: school asks her to be assessed, but she needs to feel accepted and recognised as a person.</li>
</ul>
<p>A modern psychologist combines several points of view and tests them against data.</p>`
    },
    {
      type: "curiosity",
      title: "Little Albert and the rules of ethics",
      html: `<p>In 1920 Watson and his student Rosalie Rayner conditioned a baby of about nine months ("Little Albert") to be afraid of a white rat, by pairing it with a loud noise. Today an experiment like this would be <b>forbidden</b>: psychology has a <b>code of ethics</b> (informed consent, protection of participants, no harm). In Italy psychologists must be registered with a professional body (the <i>Ordine degli Psicologi</i>) and follow a code of professional conduct.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: origins and schools",
      questions: [
        { type: "mc", q: "Where and when was the first laboratory of experimental psychology founded?", options: ["Vienna, 1900", "Leipzig, 1879", "Paris, 1850", "Boston, 1913"], answer: 1, explain: "Wilhelm Wundt founded it in Leipzig in 1879." },
        { type: "tf", q: "For behaviourism, the subject of psychology is unconscious processes.", answer: false, explain: "For behaviourists it is observable behaviour; the unconscious is Freud's central theme." },
        { type: "mc", q: "\"The whole is more than the sum of its parts\" is the slogan of which school?", options: ["psychoanalytic", "Gestalt", "humanistic", "structuralist"], answer: 1, explain: "Gestalt holds that we perceive organised forms, not sums of elements." }
      ]
    },
    {
      type: "text",
      title: "4. How the mind is studied: the scientific method",
      html: `<p>What makes psychology "scientific"? The fact that it works with <b>testable hypotheses</b>. You start from a question ("does too little sleep make memory worse?"), form a <b>hypothesis</b>, collect data with a controlled method, analyse it and draw conclusions that others can <b>repeat</b> (replicability).</p>
<p>The main methods:</p>
<ul>
<li><b>Observation</b>: naturalistic (in the real setting: children in the park) or systematic, with observation grids. Pro: realistic. Con: the observer can influence what they see.</li>
<li><b>Experiment</b>: the researcher <b>manipulates</b> one variable (the <i>independent variable</i>) and measures the effect on another (the <i>dependent variable</i>), keeping everything else constant. There is an <b>experimental group</b> and a <b>control group</b>, with random assignment.</li>
<li><b>Questionnaire and interview</b>: they collect the opinions, attitudes and experiences of many people. Risk: insincere answers, "social desirability".</li>
<li><b>Psychological tests</b>: standardised tools (for example intelligence or personality tests) with <i>validity</i> (they measure what they claim to measure) and <i>reliability</i> (they give stable results).</li>
<li><b>Case study</b>: in-depth analysis of a single person (used by Freud and in neuropsychology).</li>
</ul>`
    },
    {
      type: "example",
      title: "A classic experiment: the Bobo doll (Bandura, 1961)",
      html: `<p>Albert Bandura wanted to test whether children <b>imitate</b> adults' aggression. In the experiment, at Stanford University, pre-school children watched an adult hitting a large inflatable doll (Bobo) violently; another group saw a calm adult; a control group saw no model at all. Then all the children were left alone in a room with the doll.</p>
<ul>
<li><b>Independent variable</b>: the type of model seen (aggressive / calm / none).</li>
<li><b>Dependent variable</b>: how many aggressive behaviours the child showed.</li>
<li><b>Result</b>: children exposed to the aggressive model often copied the same actions and words. This gave rise to the theory of <b>social</b> (observational) <b>learning</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Which method should you use?",
      widget: "classify",
      options: { groups: ["Observation", "Experiment", "Questionnaire/Test"], items: [
        ["Watching how children play in the playground, without stepping in", 0],
        ["Splitting two classes at random: one sleeps 8 hours, the other 5, then both do a memory test", 1],
        ["Asking 500 students how many hours they sleep and how they feel", 2],
        ["Noting every 5 minutes how many times a baby smiles", 0],
        ["Changing the noise level in a classroom to see how concentration changes", 1],
        ["Giving a standardised anxiety test", 2]
      ] },
      caption: "Assign each situation to the right method."
    },
    {
      type: "remember",
      title: "Correlation is not causation",
      html: `<p>If two things happen together (people who sleep little get lower marks) we can't say that one <b>causes</b> the other: there could be a third variable (stress), or the cause could run the other way. Only an <b>experiment</b> with controlled variables lets us talk about <b>cause and effect</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the schools of psychology",
      intro: "If the list of schools feels like something to memorise, try one of these ways of reading it.",
      tabs: [
        { label: "🔍 What they look at", html: `<p>Imagine experts inspecting a house. The <b>behaviourist</b> looks at how the people living there behave (what can be seen), the <b>psychoanalyst</b> looks for the hidden foundations (the unconscious), the <b>cognitive psychologist</b> checks the wiring (how information flows), the <b>Gestalt psychologist</b> looks at how the front of the house appears as a whole, and the <b>humanist</b> asks the people living there how they feel and what they want.</p>` },
        { label: "🕰️ A story of reactions", html: `<p>Each school is often born <b>against</b> the one before. Wundt breaks the mind into elements → <b>Gestalt</b> replies "the whole is more than the parts". Freud talks about an unobservable unconscious → <b>behaviourism</b> reacts "let's study only what can be seen". Behaviourism ignores the mind → <b>cognitive psychology</b> "reopens" it. Freud and Skinner seem pessimistic about human beings → <b>humanistic</b> psychology puts freedom and growth at the centre.</p>` },
        { label: "🗂️ The questions", html: `<p><b>Why do I act like this?</b> Psychoanalysis (unconscious motives) and humanistic psychology (needs, goals). <b>How do I learn?</b> Behaviourism and cognitive psychology. <b>How do I see the world?</b> Gestalt. <b>How does my mind work?</b> Cognitive psychology. Each school is the strongest answer to a different question.</p>` }
      ]
    },
    {
      type: "decision",
      title: "You're a psychologist in 1913: what should you study?",
      html: `<p>It's the early 20th century. For thirty years experimental psychology has been based on introspection: subjects describe what they "feel", and the results vary from person to person and are hard to compare. You want to make psychology a science as rigorous as physics.</p>`,
      question: "What is the most promising way to make the data reliable?",
      options: [
        { label: "Carry on with introspection, training the subjects better.", outcome: "The results stay subjective: different laboratories describe consciousness in different ways and no agreement can be reached." },
        { label: "Study only observable, measurable behaviour, as physicists do with phenomena.", outcome: "The data become comparable and replicable. This is Watson's proposal. The price: thoughts and emotions are left out, and they will only come back to centre stage with cognitive psychology." },
        { label: "Give up experiments and rely on interpreting dreams.", outcome: "This is Freud's path: very fruitful, but his hypotheses are hard to test and remain controversial among scientists." }
      ],
      answer: 1,
      explain: "In <b>1913</b> John B. Watson published \"Psychology as the Behaviorist Views It\" and proposed exactly this turn. Behaviourism dominated American psychology for decades, until in the 1950s and 60s <b>cognitive psychology</b> brought the mind back to the centre, while keeping the same rigorous experimental methods."
    },
    {
      type: "conceptMap",
      title: "Map: psychology",
      nodes: [
        { id: "psi", label: "Psychology", x: 50, y: 8, color: "#3b82f6", html: "The science of behaviour and mental processes.", why: "From the Greek for \"study of the soul\". It became a science in 1879, when Wundt moved the question from philosophy to the laboratory: people no longer just argued about \"what the mind is\", they measured how it works." },
        { id: "scuole", label: "Schools", x: 15, y: 42, color: "#f59e0b", html: "Psychoanalysis, behaviourism, Gestalt, cognitive, humanistic.", why: "Each school grows out of a problem left open by the one before (the subjectivity of introspection, the invisibility of the unconscious, the rejection of the mind...). They are complementary ways of looking at the same thing." },
        { id: "metodi", label: "Methods", x: 50, y: 42, color: "#10b981", html: "Observation, experiment, questionnaire, test, case study.", why: "Psychology is scientific because of its method: testable hypotheses, controlled variables, replicability. Only an experiment lets us say which factor causes an effect." },
        { id: "ambiti", label: "Fields", x: 85, y: 42, color: "#8b5cf6", html: "General, developmental, social, clinical, educational.", why: "The same subject (behaviour) is studied at different levels: basic processes, growing up, relationships, distress, learning. Educational psychology is the bridge to education studies." },
        { id: "etica", label: "Ethics", x: 50, y: 78, color: "#ef4444", html: "Informed consent, protection of participants, code of conduct.", why: "After questionable experiments (like Little Albert) and research abuses in the 20th century, the scientific community set rules: knowledge does not justify harming people." }
      ],
      edges: [["psi", "scuole", "divides into"], ["psi", "metodi", "uses"], ["psi", "ambiti", "is organised into"], ["metodi", "etica", "is limited by"]]
    },
    {
      type: "curiosity",
      title: "Psychology and education",
      html: `<p><b>Pedagogy</b> (from the Greek <i>paidagogía</i>, "guiding the child") thinks about <b>how to educate</b>; <b>psychology</b> studies <b>how</b> the person being educated <b>works</b>. The two disciplines meet in developmental psychology (Piaget, Vygotsky) and the psychology of learning: to educate well you need to understand how a six-year-old or a teenager thinks. That's why in the Italian human sciences high school (<i>liceo delle scienze umane</i>) they are studied together.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the method",
      questions: [
        { type: "mc", q: "In an experiment, the variable the researcher deliberately changes is the...", options: ["dependent variable", "independent variable", "control variable", "random variable"], answer: 1, explain: "It is the independent variable; the effect that is measured is the dependent variable." },
        { type: "tf", q: "If two phenomena are correlated, one must be the cause of the other.", answer: false, explain: "There could be a third variable or reverse causation: correlation is not causation." },
        { type: "mc", q: "A test that measures consistently over time has good...", options: ["validity", "reliability", "ethics", "social objectivity"], answer: 1, explain: "Reliability means stable results; validity means it measures what it claims to." }
      ]
    }
  ],
  glossary: [
    { t: "Psychology", d: "The science that studies behaviour and mental processes." },
    { t: "Introspection", d: "Observing and describing your own inner states; Wundt's method." },
    { t: "Structuralism", d: "The approach of Wundt and Titchener: breaking consciousness down into elements." },
    { t: "Functionalism", d: "James's approach: consciousness is studied for its function in adaptation." },
    { t: "Unconscious", d: "The part of mental life not accessible to consciousness, central to Freud." },
    { t: "Behaviourism", d: "The school that studies only observable behaviour (Watson, Skinner)." },
    { t: "Gestalt", d: "German word for \"form\"; the school holding that the whole is more than the sum of its parts." },
    { t: "Cognitive psychology", d: "The school that studies the mind as an information processor." },
    { t: "Independent / dependent variable", d: "The first is manipulated by the researcher, the second is the effect measured." },
    { t: "Control group", d: "A group that doesn't receive the experimental treatment, used for comparison." },
    { t: "Validity and reliability", d: "A test is valid if it measures what it claims to measure, reliable if it gives stable results." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Who founded the first laboratory of experimental psychology in 1879?", options: ["Sigmund Freud", "William James", "Wilhelm Wundt", "Ivan Pavlov"], answer: 2, explain: "Wilhelm Wundt, in Leipzig: the birth of scientific psychology is dated from this." },
      { type: "mc", q: "Which school claims that much of mental life is unconscious?", options: ["Behaviourism", "Gestalt", "Psychoanalysis", "Cognitive psychology"], answer: 2, explain: "It is the central idea of Freud's psychoanalysis." },
      { type: "tf", q: "According to Watson (1913), psychology should mainly study consciousness through introspection.", answer: false, explain: "Watson argued the opposite: only observable behaviour is a scientific subject." },
      { type: "mc", q: "Which researcher is linked to the Bobo doll experiment?", options: ["Albert Bandura", "Burrhus Skinner", "Max Wertheimer", "Carl Rogers"], answer: 0, explain: "Bandura (1961) showed that children imitate the aggression of an adult model." },
      { type: "text", q: "What is the group that doesn't receive the experimental treatment and is used for comparison called?", answer: ["control group", "the control group", "control"], explain: "The control group shows whether the effect is really due to the treatment." },
      { type: "mc", q: "Which method is best for establishing cause and effect?", options: ["Naturalistic observation", "Controlled experiment", "Questionnaire", "Open interview"], answer: 1, explain: "Only an experiment, with variables manipulated and controlled, lets us talk about causes." },
      { type: "order", q: "Put in chronological order.", items: ["Wundt's laboratory in Leipzig", "James's Principles of Psychology", "Watson's behaviourist manifesto", "Neisser's Cognitive Psychology"], explain: "1879, 1890, 1913, 1967." },
      { type: "mc", q: "Maslow and Rogers belong to...", options: ["humanistic psychology", "psychoanalysis", "Gestalt", "structuralist psychology"], answer: 0, explain: "Both are leading figures of humanistic psychology, centred on growth and self-actualisation." },
      { type: "tf", q: "A strong correlation between two variables proves that one causes the other.", answer: false, explain: "Correlation only shows that they vary together; causation must be shown with an experiment." },
      { type: "mc", q: "Why is Little Albert quoted today as a negative example?", options: ["Because the experiment didn't work", "Because it broke ethical rules protecting participants", "Because it was never published", "Because it used animals"], answer: 1, explain: "Conditioning fear in a baby without any safeguards would break today's ethical codes." }
    ]
  }
});
