TOPIC('en', {
  id: "l2-sum-intelligenza",
  title: "Intelligence",
  intro: "What is <b>intelligence</b>? Being able to solve maths problems? Having an excellent memory? Understanding other people? Playing an instrument well? Psychologists have been asking this question for over a century and have no single answer. In this lesson you meet Binet's <b>first tests</b> and the <b>intelligence quotient</b>, Spearman's <b>g factor</b>, the theories that reject the idea of a single intelligence (Thurstone, Sternberg and <b>Gardner's</b> famous <b>multiple intelligences</b>), the debate on <b>heredity and environment</b>, the <b>Flynn effect</b>, and the limits and risks of tests. You learn to read a number like «IQ 115» with due caution, and you understand why at school it is important not to reduce a person to a score.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. How is intelligence defined?",
      html: `<p>The word comes from the Latin <i>intelligere</i>, «to understand», that is, <i>inter-legere</i>, «to read within, to choose between». In psychology there is no single definition; one of the most often quoted is that of the American psychologist <b>David Wechsler</b>: intelligence is the <b>global capacity</b> to act purposefully, to think rationally and to deal effectively with the environment. Many definitions stress some common abilities: <b>reasoning</b>, <b>solving problems</b>, <b>thinking abstractly</b>, <b>learning from experience</b>, <b>adapting to new situations</b>.</p>
<p>A key point: intelligence cannot be «seen» directly, like weight or height. It can only be <b>inferred from behaviour</b> (answers to tests, performance), and theories differ in what they include. We call this kind of idea a <b>construct</b>: a theoretical concept built to explain the data.</p>
<p>There are three classic questions: <b>(1)</b> is there a single intelligence or are there many? <b>(2)</b> how much depends on genes and how much on the environment? <b>(3)</b> can it be measured with a test? Let's look at them one by one.</p>`
    },
    {
      type: "text",
      title: "2. From the first attempts to IQ",
      html: `<p>The British scientist <b>Francis Galton</b> (1822-1911), Darwin's cousin, argued in his book <i>Hereditary Genius</i> (1869) that talent is passed on by inheritance. He also tried, unsuccessfully, to measure intelligence with sensory tests (reaction speed, visual acuity). He was the founder of <b>eugenics</b> (a term coined in 1883), the idea of improving the species through selection, which had tragic consequences in the 20th century.</p>
<p>The breakthrough, instead, came from school. In <b>1904</b> the French Ministry of Education, after compulsory schooling had been introduced, asked the psychologist <b>Alfred Binet</b> (1857-1911) to find a way to identify the children who needed <b>special help</b>. With <b>Théodore Simon</b>, in <b>1905</b>, Binet published the first <b>metric scale of intelligence</b>: a series of tasks of increasing difficulty (following a movement with the eyes, repeating sentences, comparing objects, defining words, reasoning) arranged by age. The child obtained a <b>mental age</b>: the age of the average children who pass the same tasks.</p>
<p>Binet was very cautious: he thought the test should be used to <b>find those who needed support</b>, not to classify children for ever or to «measure» a fixed, innate intelligence. In <b>1912</b> the German psychologist <b>William Stern</b> proposed expressing the result as the ratio between mental age (MA) and chronological age (CA), giving the <b>intelligence quotient</b>:</p>
<p style="text-align:center"><b>IQ = (MA : CA) × 100</b></p>
<p>An 8-year-old who solves the tasks for 10-year-olds has IQ = (10 : 8) × 100 = <b>125</b>. In 1916 <b>Lewis Terman</b> (Stanford) adapted the scale for the United States: the <b>Stanford-Binet</b> was born. For adults the ratio method did not work (mental age stops increasing), so <b>David Wechsler</b> introduced (in 1939 for adults, then in the WAIS and WISC versions) the <b>deviation IQ</b>: the score shows how far you are from the <b>average of your own age group</b>, with a mean of 100 and a standard deviation of 15.</p>`
    },
    {
      type: "svg",
      title: "The normal curve of IQ",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<path d="M40 250 C120 248 170 230 210 180 C250 105 280 40 300 40 C320 40 350 105 390 180 C430 230 480 248 560 250 Z" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<line x1="300" y1="40" x2="300" y2="250" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="70" y1="250" x2="530" y2="250" stroke="#0f172a" stroke-width="2"/>
<text x="70" y="272" font-size="14" text-anchor="middle" fill="#0f172a">55</text>
<text x="130" y="272" font-size="14" text-anchor="middle" fill="#0f172a">70</text>
<text x="215" y="272" font-size="14" text-anchor="middle" fill="#0f172a">85</text>
<text x="300" y="272" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">100</text>
<text x="385" y="272" font-size="14" text-anchor="middle" fill="#0f172a">115</text>
<text x="470" y="272" font-size="14" text-anchor="middle" fill="#0f172a">130</text>
<text x="530" y="272" font-size="14" text-anchor="middle" fill="#0f172a">145</text>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">about 68%</text>
<text x="300" y="150" font-size="14" text-anchor="middle" fill="#0f172a">between 85 and 115</text>
<text x="300" y="20" font-size="14" text-anchor="middle" fill="#0f172a">about 95% between 70 and 130 (mean 100, standard deviation 15)</text>
</svg>`,
      caption: "IQ scores are distributed like a bell curve: the great majority of the population is close to the average."
    },
    {
      type: "example",
      title: "What does «IQ 115» mean?",
      html: `<p>A score of <b>115</b> is not «115 units of intelligence»: it means that the person scored <b>one standard deviation above the mean</b> of their age group, that is, better than about 84% of people their age. An IQ of 100 is the average, and about two thirds of people score between 85 and 115. Like every measurement, IQ has an <b>error</b> (if you retake the test, you may get a slightly different score, by a few points): that is why it is more correct to speak of a range than of an exact number. IQ tells us <b>something</b> (performance in cognitive abilities such as reasoning, language, working memory), not everything (it does not measure creativity, motivation, character or practical talents).</p>`
    },
    {
      type: "text",
      title: "3. One intelligence or many?",
      html: `<p><b>The g factor (Spearman, 1904).</b> The English psychologist <b>Charles Spearman</b> noticed that people who do well on one cognitive test tend to do well on others too: the correlations are almost always positive. Using a statistical technique (factor analysis) he concluded that there is a common factor, <b>general intelligence (g)</b>, plus specific factors (<b>s</b>) for each task. This is the <b>two-factor theory</b>.</p>
<p><b>Primary mental abilities (Thurstone, 1938).</b> <b>Louis Thurstone</b> challenged the idea of a single factor and identified <b>seven primary abilities</b> that are relatively independent: verbal comprehension, verbal fluency, number, space, memory, perceptual speed, reasoning.</p>
<p><b>Fluid and crystallised (Cattell, Horn).</b> <b>Raymond Cattell</b> (1940s, later with John Horn) distinguished <b>fluid</b> intelligence (reasoning about new problems without prior knowledge; it peaks at a young age) from <b>crystallised</b> intelligence (accumulated knowledge and vocabulary; it keeps growing with experience). An older person may be slower at a puzzle but know a great deal.</p>
<p><b>The triarchic theory (Sternberg, 1985).</b> <b>Robert Sternberg</b> argues that intelligence has three aspects: <b>analytical</b> (analysing and evaluating, what school tests measure), <b>creative</b> (producing new ideas) and <b>practical</b> (adapting to real life, «common sense»).</p>
<p>Today the theory most used by psychologists is a compromise, the hierarchical <b>Cattell-Horn-Carroll</b> model: at the top a general factor, below it several broad abilities (fluid, crystallised, memory, speed...), and below those, specific abilities.</p>`
    },
    {
      type: "text",
      title: "4. Gardner's multiple intelligences",
      html: `<p>In <b>1983</b> the Harvard psychologist <b>Howard Gardner</b> published <i>Frames of Mind</i>. He argues that there are <b>distinct and relatively independent intelligences</b>, each with its own way of working and its own basis in the brain. The first seven:</p>
<ul>
<li><b>Linguistic</b>: using words (writers, lawyers, poets).</li>
<li><b>Logical-mathematical</b>: abstract reasoning, numbers (scientists, programmers).</li>
<li><b>Spatial</b>: imagining and manipulating shapes in space (architects, pilots, painters).</li>
<li><b>Musical</b>: rhythm, pitch, timbre (composers, musicians).</li>
<li><b>Bodily-kinaesthetic</b>: control of the body and of objects (athletes, dancers, surgeons).</li>
<li><b>Interpersonal</b>: understanding and relating to others (teachers, leaders, therapists).</li>
<li><b>Intrapersonal</b>: knowing yourself, your emotions and your goals.</li>
</ul>
<p>In the late 1990s Gardner added <b>naturalist</b> intelligence (recognising and classifying plants, animals and natural phenomena) and discussed the possibility of an «existential» intelligence.</p>
<p><b>Why has it been so successful in schools?</b> Because it says that everyone has a different profile of talents, and it invites teachers to present a topic in <b>several ways</b> (words, diagrams, music, movement, group work). A fine invitation, which schools should always take up.</p>
<p><b>Criticisms.</b> Many psychologists point out that Gardner did not provide objective tests for his intelligences, that some of them look more like <b>talents or skills</b> than «intelligences», and that cognitive abilities do in fact <b>correlate with one another</b> (which supports g). Above all, there is no evidence that teaching according to each person's preferred «style» or «intelligence» improves learning: so-called <b>learning styles</b> are a very widespread myth. Varying the methods, on the other hand, is good for everyone.</p>`
    },
    {
      type: "widget",
      title: "Which of Gardner's intelligences?",
      widget: "classify",
      options: {
        groups: ["Linguistic / logical-mathematical", "Spatial / musical / bodily", "Personal (inter and intra)"],
        items: [
          ["✍️ Writing a gripping story", 0],
          ["🧮 Proving a theorem", 0],
          ["🏛️ Designing a building", 1],
          ["🎻 Composing a piece for violin", 1],
          ["🤸 Performing a difficult gymnastics move", 1],
          ["🤝 Settling an argument between friends", 2],
          ["🪞 Recognising your own weak points and setting yourself goals", 2]
        ]
      },
      caption: "Every activity can draw on several intelligences; here, choose the main one."
    },
    {
      type: "quiz",
      title: "Mini-quiz: from IQ to Gardner",
      questions: [
        { type: "mc", q: "Why did Binet create his scale in 1905?", options: ["To identify the children who needed support at school", "To select soldiers", "To prove heredity", "To rank peoples"], answer: 0, explain: "The French ministry asked him for a tool to recognise those who needed help." },
        { type: "mc", q: "A 6-year-old (CA) solves tasks for 9-year-olds (MA). What is the IQ using Stern's method?", options: ["150", "100", "67", "90"], answer: 0, explain: "(9 : 6) × 100 = 150." },
        { type: "tf", q: "Gardner proposed a single general intelligence that can be measured with one test.", answer: false, explain: "He argues that there are several distinct intelligences." },
        { type: "mc", q: "The g factor is...", options: ["The general intelligence common to many kinds of performance", "Musical intelligence", "A genetic factor", "A test for children"], answer: 0, explain: "Spearman (1904)." }
      ]
    },
    {
      type: "text",
      title: "5. Genes or environment? The debate on heredity and IQ",
      html: `<p>A much-debated topic is the relative weight of <b>nature</b> (genes) and <b>nurture</b> (environment). Studies of <b>twins</b> (identical twins, who have the same genes, and non-identical twins) and of <b>adoptions</b> show that genes contribute to differences in IQ. Estimated <b>heritability</b> is about <b>0.2-0.4 in childhood</b> and rises to <b>0.6-0.8 in adulthood</b> (a surprising result: over time people choose environments that suit their traits). But beware of three common mistakes:</p>
<ol>
<li><b>Heritability concerns differences within a population, not the individual.</b> Saying «heritability 0.5» does not mean «your IQ is half genetic»: it means that about half of the variation between people in that group, in that environment, is associated with genetic differences.</li>
<li><b>Heritable does not mean unchangeable.</b> Height is highly heritable, but it has increased by several centimetres in a century thanks to better nutrition. The same is true of intelligence (see below).</li>
<li><b>No conclusions can be drawn about differences between groups.</b> The average differences observed between populations largely reflect differences in environment, education, health and opportunities: they prove nothing about genes.</li>
</ol>
<p><b>The environment matters.</b> Nutrition and health during pregnancy and the first years of life, language stimulation, quality of education, poverty and stress: all of these influence cognitive development. A review of many studies (2018) estimated that <b>each extra year of schooling</b> raises IQ by a few points: education does not just «add knowledge», it trains thinking.</p>`
    },
    {
      type: "text",
      title: "6. The Flynn effect",
      html: `<p>The New Zealander <b>James Flynn</b> noticed (1984, then in 1987 across 14 countries) a curious fact: scores on IQ tests, which are periodically recalibrated to the average, <b>rose in almost every part of the world</b> during the 20th century, by about <b>3 points per decade</b>. An average adult today, compared with the norms from the beginning of the century, would come out well above average. Yet nobody thinks our great-grandparents were feeble-minded!</p>
<p>The explanations proposed are environmental, because genes do not change in such a short time: <b>more schooling</b>, better <b>nutrition and health</b>, more stimulating family environments, more familiarity with abstract thinking and with <b>test-style tasks</b>, a world richer in symbols and diagrams. In recent decades, in some countries (for example Norway and Denmark) the increase has stopped or reversed: the phenomenon is not a law of nature.</p>
<p><b>Lesson:</b> IQ is not a fixed quantity written in the genes, but a result that also depends on environment and culture.</p>`
    },
    {
      type: "example",
      title: "Two students, two profiles",
      html: `<p>Luca excels at maths and programming but finds public speaking difficult; Sara is brilliant at organising groups and persuading people, but geometry throws her. A single IQ test might give them both a similar score, hiding very different profiles. That is why psychologists and teachers look at the <b>profile</b> (strengths and weaknesses) and not just the final number. At the same time, weak points are not destiny: Luca can train his communication skills and Sara her geometry, with suitable strategies and a little time.</p>`
    },
    {
      type: "text",
      title: "7. Limits and uses of tests",
      html: `<p><b>What they can predict.</b> Well-constructed IQ tests are <b>reliable</b> (they give stable results) and have a certain <b>predictive validity</b>: they correlate with school performance and partly with performance at work. They are used in clinical settings and at school to identify <b>difficulties</b> (intellectual disability, which requires an IQ below 70 <i>and</i> difficulties in everyday adaptive functioning) or <b>giftedness</b> (IQ above about 130), and to design targeted support.</p>
<p><b>What they cannot tell us.</b> They do not measure creativity, motivation, perseverance, emotional intelligence or values. IQ explains only part of success in life. <b>Specific learning disorders</b> (in Italy called DSA: dyslexia, dyscalculia, dysorthography, dysgraphia, protected by Law 170 of 2010) <b>do not depend on low intelligence</b>: many students with specific learning disorders have an average or high IQ, but face obstacles in specific skills.</p>
<p><b>Risks and abuses.</b></p>
<ul>
<li><b>Cultural bias</b>: many tests assume knowledge and habits belonging to a particular culture (vocabulary, types of problem). Tools such as <b>Raven's Progressive Matrices</b> (1936) try to reduce the weight of language and culture by using figures and sequences.</li>
<li><b>Stereotype threat</b>: in <b>1995</b> <b>Claude Steele</b> and <b>Joshua Aronson</b> showed that reminding a group of a negative stereotype about its performance (for example presenting a test to African American students as a «measure of intellectual ability») can worsen their performance because of the anxiety it creates.</li>
<li><b>Discriminatory use</b>: in the 20th century intelligence tests were used to support <b>eugenic</b> policies and restrictions on immigration. The scientist <b>Stephen Jay Gould</b>, in his book <i>The Mismeasure of Man</i> (1981), critically reconstructed this history of errors and prejudice.</li>
<li><b>Fixed labels</b>: saying «you're cut out for it / you're not cut out for it» holds young people back; Carol Dweck's research (see the lesson on emotions and motivation) shows that thinking of intelligence as something that grows with effort helps people persevere.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand intelligence",
      intro: "A few images to help you remember the concepts.",
      tabs: [
        { label: "🔨 The toolbox", html: `<p>Imagine you have a box with lots of tools. <b>Spearman</b> sees a single «engine» (g) that powers all the tools; <b>Thurstone</b> and <b>Gardner</b> see separate tools (hammer, pliers, screwdriver); <b>Cattell</b> distinguishes the tools for forging new things (fluid) from those made of accumulated experience (crystallised). The current model (Cattell-Horn-Carroll) puts them together: a general engine, plus broad and specific tools.</p>` },
        { label: "📏 The ruler and the thermometer", html: `<p>An IQ test is like a ruler that measures a single dimension (some cognitive abilities), not like a school report on the whole person. And every measurement has a margin of error: that is why a series of tests is more trustworthy than just one. Moreover, the ruler must be used with a purpose: a thermometer tells you whether there is a fever, but treating it requires other tools. IQ shows where to look, not what to do in life.</p>` },
        { label: "🌱 Seed and soil", html: `<p>The seed is your genetic inheritance, the soil is the environment (nutrition, stimulation, school, relationships). The same seed grows differently in different soils; different seeds in the same soil give different results. The «genes <i>or</i> environment» debate is badly framed: they work <b>together</b>, and the Flynn effect shows how much the soil can change.</p>` },
        { label: "🎮 The radar profile", html: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><polygon points="300,40 400,90 420,190 300,260 180,190 200,90" fill="none" stroke="#94a3b8" stroke-width="2"/><polygon points="300,90 360,110 380,180 300,225 220,170 240,110" fill="#93c5fd" fill-opacity="0.6" stroke="#1d4ed8" stroke-width="3"/><text x="300" y="30" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">linguistic</text><text x="455" y="95" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">logical-math.</text><text x="470" y="200" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">spatial</text><text x="300" y="285" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">musical</text><text x="120" y="200" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">bodily</text><text x="125" y="95" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">personal</text></svg><p>A radar chart shows a <b>profile</b>: everyone has strengths and weaknesses. This is the teaching idea we take away from Gardner, even though science does not confirm all his «intelligences» as separate entities.</p>` }
      ]
    },
    {
      type: "decision",
      title: "You are Alfred Binet, Paris 1904",
      html: `<p>The ministry asks you to build a tool to identify the children who cannot keep up with ordinary schooling. One colleague suggests using it to <b>separate</b> «unintelligent» children into special classes, permanently. Another wants to <b>do nothing</b>, because «every measurement is unfair». You have an idea of your own.</p>`,
      question: "How do you design and use the scale?",
      options: [
        { label: "I use it to classify children permanently.", outcome: "This is exactly the use Binet wanted to avoid. A score can change with learning and environment; classifying children for ever creates labels that hold them back and discriminate against them." },
        { label: "I give up: no measurement is fair.", outcome: "Without tools, children in difficulty are not identified: they are left without help, or punished for being «lazy». Rejecting measurement does not make the problem go away." },
        { label: "I build graded tasks to identify those who need support, and use them to offer temporary, suitable help.", outcome: "This is what Binet did: a tool in the service of education, with the awareness that intelligence develops and that scores are not destiny." }
      ],
      answer: 2,
      explain: "Binet insisted that his scale should serve to <b>help</b>, not to stigmatise: he feared that the score would be taken as an unchangeable measure. His warning was largely ignored when the tests reached other countries and were used rigidly and sometimes in a discriminatory way."
    },
    {
      type: "conceptMap",
      title: "Map: intelligence",
      nodes: [
        { id: "int", label: "Intelligence", x: 50, y: 6, color: "#3b82f6", html: "The ability to reason, solve problems, learn and adapt.", why: "It cannot be observed directly: it is a theoretical construct inferred from performance. That is why there are many definitions and many theories." },
        { id: "mis", label: "Measurement: IQ", x: 14, y: 40, color: "#10b981", html: "Binet-Simon (1905), Stern (1912), Wechsler (1939).", why: "It arose from a concrete educational need (helping children in difficulty); its use as a fixed label was later criticised." },
        { id: "uni", label: "Just one?", x: 38, y: 40, color: "#f59e0b", html: "The g factor (Spearman 1904), hierarchical models.", why: "Cognitive tests correlate with each other: this suggests a common factor, but does not rule out specific abilities (Thurstone, Cattell)." },
        { id: "mol", label: "Many?", x: 62, y: 40, color: "#ef4444", html: "Thurstone, Sternberg, Gardner (1983).", why: "They stem from the observation that there are different talents (music, sport, relationships); however, empirical evidence for Gardner's intelligences as separate entities is lacking." },
        { id: "gen", label: "Genes and environment", x: 86, y: 40, color: "#8b5cf6", html: "Twin and adoption studies; the Flynn effect.", why: "Individual differences are partly genetic, but the environment (health, school) can change a great deal: the Flynn effect, +3 points per decade, proves it." },
        { id: "lim", label: "Limits of tests", x: 50, y: 78, color: "#0ea5e9", html: "Measurement error, cultural bias, stereotype threat.", why: "A score is not destiny: history (eugenics, discrimination) shows the cost of using tests rigidly and uncritically." }
      ],
      edges: [["int", "mis", "measured with"], ["int", "uni", "theory"], ["int", "mol", "theory"], ["int", "gen", "origin"], ["mis", "lim", "has"], ["gen", "lim", "influences"]]
    },
    {
      type: "curiosity",
      title: "Can a machine be intelligent?",
      html: `<p>In <b>1950</b> the British mathematician <b>Alan Turing</b>, in the article <i>Computing Machinery and Intelligence</i>, proposed replacing the question «can machines think?» with a game: an interrogator converses in writing with a person and with a machine; if he cannot tell them apart, the machine «passes the test». Today artificial intelligence programs excel at specific tasks (chess, translation, generating text), but the debate on whether this amounts to «understanding» remains open. Here, too, the old question comes back: is intelligence a single ability, or a set of capacities?</p>`
    },
    {
      type: "curiosity",
      title: "A healthy mind in... a balanced life?",
      html: `<p>Some studies have shown that <b>regular physical activity</b> and <b>good sleep</b> support attention, memory and cognitive performance in children and teenagers. And <b>reading</b> in childhood is associated with a wider vocabulary and better school results. If intelligence were only «genes», these effects would be small: instead they confirm the weight of the environment and of daily habits, in other words of what <b>you</b> can do something about.</p>`
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Binet and Simon (1905): a scale to help children in difficulty; Stern (1912): <b>IQ = (MA : CA) × 100</b>; Wechsler: deviation IQ, mean 100, s.d. 15.</li>
<li>About 68% of the population has an IQ between 85 and 115, 95% between 70 and 130.</li>
<li><b>Spearman</b>: the g factor. <b>Thurstone</b>: seven primary abilities. <b>Cattell</b>: fluid and crystallised. <b>Sternberg</b>: analytical, creative, practical. <b>Gardner</b> (1983): multiple intelligences.</li>
<li>Heritability ≠ unchangeability; the Flynn effect: +3 points per decade in the 20th century.</li>
<li>A test gives <b>partial information</b>, with measurement error and possible cultural bias.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: genes, environment, tests",
      questions: [
        { type: "mc", q: "What does the Flynn effect describe?", options: ["The rise in IQ scores during the 20th century", "Fear of tests", "The difference between males and females", "The heritability of IQ"], answer: 0, explain: "About 3 points per decade, for environmental reasons." },
        { type: "tf", q: "A high heritability of IQ means that it cannot be changed by the environment.", answer: false, explain: "Heritable does not mean unchangeable." },
        { type: "mc", q: "Which of these is NOT one of the intelligences on Gardner's original list (1983)?", options: ["Naturalist", "Linguistic", "Musical", "Spatial"], answer: 0, explain: "Naturalist intelligence was added in the late 1990s." },
        { type: "mc", q: "Does a person with dyslexia necessarily have a low IQ?", options: ["No, specific learning disorders do not depend on low intelligence", "Yes, always", "Only as an adult", "Only if male"], answer: 0, explain: "Specific learning disorders are specific difficulties in reading, writing or arithmetic." }
      ]
    }
  ],
  glossary: [
    { t: "Intelligence", d: "The ability to reason, solve problems, learn from experience and adapt to the environment." },
    { t: "Construct", d: "A theoretical concept that cannot be observed directly, built to explain data." },
    { t: "Mental age", d: "The age of the average children who pass the same tasks (Binet)." },
    { t: "Intelligence quotient (IQ)", d: "A measure of performance in cognitive tests; from Stern (MA:CA × 100) to Wechsler (deviation from the mean)." },
    { t: "g factor", d: "The general intelligence common to all tests (Spearman)." },
    { t: "Fluid intelligence", d: "The ability to reason about new problems (Cattell)." },
    { t: "Crystallised intelligence", d: "Knowledge and skills accumulated through experience (Cattell)." },
    { t: "Multiple intelligences", d: "Gardner's theory (1983), which distinguishes several relatively independent intelligences." },
    { t: "Heritability", d: "The share of variation in a trait within a population that is associated with genetic variation." },
    { t: "Flynn effect", d: "The rise over time in IQ test scores observed in the 20th century." },
    { t: "Stereotype threat", d: "A drop in performance caused by the fear of confirming a negative stereotype about one's own group." },
    { t: "Specific learning disorders (DSA)", d: "Specific learning disorders (dyslexia, dysgraphia, dysorthography, dyscalculia); in Italy known by the abbreviation DSA." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Who created the first intelligence scale for children in 1905?", options: ["Binet and Simon", "Wechsler", "Gardner", "Galton"], answer: 0, explain: "Alfred Binet and Théodore Simon, in France." },
      { type: "num", q: "A 10-year-old solves tasks suitable for 12-year-olds. What is the IQ according to Stern's formula?", answer: 120, tol: 0, explain: "(12 : 10) × 100 = 120." },
      { type: "mc", q: "In Wechsler's deviation IQ, the mean and standard deviation are...", options: ["100 and 15", "50 and 10", "10 and 100", "0 and 1"], answer: 0, explain: "Mean 100, standard deviation 15." },
      { type: "tf", q: "About 95% of the population has an IQ between 70 and 130.", answer: true, explain: "Two standard deviations either side of the mean." },
      { type: "mc", q: "Spearman spoke of...", options: ["The g factor", "Multiple intelligences", "Triarchic intelligence", "Emotional intelligence"], answer: 0, explain: "Two-factor theory (1904)." },
      { type: "text", q: "Who published «Frames of Mind» in 1983?", answer: ["gardner", "howard gardner"], explain: "Howard Gardner." },
      { type: "mc", q: "Which researcher distinguished fluid from crystallised intelligence?", options: ["Cattell", "Binet", "Stern", "Piaget"], answer: 0, explain: "Raymond Cattell, with Horn." },
      { type: "mc", q: "The most frequent criticism of multiple intelligences is that...", options: ["There are no independent tests and empirical evidence for each one", "There are too few of them", "They have been replaced by IQ", "They only concern children"], answer: 0, explain: "Moreover, the abilities correlate with one another." },
      { type: "mc", q: "Why is the Flynn effect explained by environmental factors?", options: ["Genes cannot change so quickly in a population", "Tests have become easier", "Children are born more intelligent", "Adults study for longer"], answer: 0, explain: "The rise is too fast to be genetic: schooling, nutrition, stimulation." },
      { type: "mc", q: "«Stereotype threat» (Steele and Aronson, 1995) shows that...", options: ["The fear of confirming a negative stereotype can worsen performance", "Stereotypes are always true", "Tests are useless", "Stereotypes improve performance"], answer: 0, explain: "The anxiety it creates reduces performance." }
    ]
  }
});
