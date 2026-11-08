TOPIC('en', {
  id: `m3-tec-ia-dati`,
  title: `Artificial intelligence and data`,
  intro: `Video suggestions, translators, chatbots that write texts, cars that brake by themselves: <b>artificial intelligence</b> (AI) is already part of our lives. But how does a machine <b>learn from data</b>? What is a <b>neural network</b>? And what are the <b>risks</b> (errors, prejudices, privacy, fakes) and the <b>opportunities</b>? In this lesson we look inside the "black box". 🤖📊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Data, information, knowledge`,
      html: `<p>A <b>datum</b> is a raw value: <i>38.5</i>. An <b>information</b> is a datum with a meaning: <i>Marco's temperature is 38.5 °C</i>. <b>Knowledge</b> arises by connecting many pieces of information: <i>above 37.5 °C you have a fever</i>.</p>
<p>Data can be:</p>
<ul>
<li><b>structured</b>: arranged in tables (marks, temperatures, prices);</li>
<li><b>unstructured</b>: texts, photos, audio, video (they are the large majority).</li>
</ul>
<p>In a computer every datum becomes a sequence of <b>bits</b> (0 and 1). A photo is a grid of pixels, each with three numbers (red, green, blue from 0 to 255). A text is a sequence of numbers, one for each character or piece of word.</p>
<p>Every day huge quantities of data are produced around the world (this is called <b>big data</b>): it is exactly this abundance that has allowed modern AI to work.</p>`
    },
    {
      type: `text`, title: `2. Programming or letting it learn?`,
      html: `<p>In <b>classic programming</b> the person writes the <b>rules</b>; the computer applies them to the data and gives the answers.</p>
<p>In <b>machine learning</b> you give the computer the <b>data</b> and the <b>correct answers</b> (examples); the computer works out the <b>rules</b> by itself, that is, it builds a <b>model</b>.</p>
<p>There are three main ways of learning:</p>
<ul>
<li><b>Supervised</b>: examples with the right <b>label</b> ("this email is spam / is not spam"). The model learns to predict the label.</li>
<li><b>Unsupervised</b>: data without a label; the model finds <b>groups</b> and similarities on its own (e.g. customers with similar tastes).</li>
<li><b>Reinforcement</b>: the model tries actions and receives <b>rewards or penalties</b>, like when training a dog (e.g. learning to play a video game).</li>
</ul>`
    },
    {
      type: `svg`, title: `The machine learning cycle`,
      caption: `Data ➜ split into training and test ➜ training ➜ check on data never seen ➜ use. If the model makes too many mistakes, you go back to the data.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="20" y="40" width="120" height="70" rx="12" fill="#a78bfa"/>
<text x="80" y="70" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">1. DATA</text>
<text x="80" y="94" font-size="13" fill="#fff" text-anchor="middle">collection, cleaning</text>
<rect x="170" y="20" width="120" height="50" rx="10" fill="#22c55e"/>
<text x="230" y="50" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">80% training</text>
<rect x="170" y="85" width="120" height="50" rx="10" fill="#f59e0b"/>
<text x="230" y="115" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">20% test</text>
<rect x="320" y="20" width="130" height="70" rx="12" fill="#7c3aed"/>
<text x="385" y="50" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">2. TRAIN</text>
<text x="385" y="73" font-size="12" fill="#ede9fe" text-anchor="middle">try, fail, correct</text>
<rect x="470" y="40" width="115" height="70" rx="12" fill="#1d4ed8"/>
<text x="527" y="70" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">3. MODEL</text>
<text x="527" y="93" font-size="12" fill="#dbeafe" text-anchor="middle">the "rules" found</text>
<rect x="320" y="170" width="130" height="70" rx="12" fill="#f59e0b"/>
<text x="385" y="200" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">4. CHECK</text>
<text x="385" y="223" font-size="12" fill="#fff" text-anchor="middle">on the test data</text>
<rect x="470" y="170" width="115" height="70" rx="12" fill="#16a34a"/>
<text x="527" y="200" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">5. USE</text>
<text x="527" y="223" font-size="12" fill="#fff" text-anchor="middle">new data</text>
<g stroke="#4c1d95" stroke-width="3" fill="none">
<path d="M140 65 L168 45"/><path d="M140 85 L168 110"/>
<path d="M290 45 L318 50"/><path d="M450 55 L468 70"/>
<path d="M527 112 L527 168"/><path d="M290 110 C 330 120, 360 140, 380 168"/>
<path d="M450 205 L468 205"/>
<path d="M320 220 C 200 260, 90 230, 80 112" stroke-dasharray="7 5"/>
</g>
<text x="170" y="262" font-size="13" fill="#4c1d95" font-weight="bold">too many errors? improve the data</text>
</svg>`
    },
    {
      type: `text`, title: `3. Inside a neural network`,
      html: `<p>The most powerful AIs today use <b>artificial neural networks</b>, inspired (very loosely) by the neurons of the brain.</p>
<p>An <b>artificial neuron</b> does a very simple calculation:</p>
<ol>
<li>it receives <b>numbers as input</b>;</li>
<li>it multiplies each one by a <b>weight</b> (how important it is);</li>
<li>it adds everything up (plus a value called the <i>bias</i>);</li>
<li>if the result exceeds a <b>threshold</b>, it "fires" and sends a signal to the next neurons.</li>
</ol>
<p>Example: <i>"Do I go to the park?"</i> Inputs: it is sunny (1), I have homework (1), a friend is there (1). Weights: sun +3, homework −4, friend +2. Sum: 3 − 4 + 2 = <b>1</b>. Threshold 0 ➜ 1 &gt; 0 ➜ <b>yes, I go!</b></p>
<p>A network is made of <b>layers</b>: an input layer, one or more <b>hidden layers</b>, an output layer. When networks have many layers we speak of <b>deep learning</b>. <b>Training</b> the network means automatically adjusting, millions of times, the <b>weights</b> to reduce errors. Large language models have <b>billions</b> of weights.</p>`
    },
    {
      type: `3d`, title: `A small neural network in 3D`,
      scene: `molecule`,
      options: {
        atoms: [
          { x: -2, y: 1.2, z: 0, r: 0.3, color: `#22c55e`, label: `input 1` },
          { x: -2, y: 0, z: 0, r: 0.3, color: `#22c55e`, label: `input 2` },
          { x: -2, y: -1.2, z: 0, r: 0.3, color: `#22c55e`, label: `input 3` },
          { x: 0, y: 1.6, z: 0.5, r: 0.3, color: `#a855f7`, label: `hidden` },
          { x: 0, y: 0.5, z: -0.5, r: 0.3, color: `#a855f7`, label: `hidden` },
          { x: 0, y: -0.5, z: 0.5, r: 0.3, color: `#a855f7`, label: `hidden` },
          { x: 0, y: -1.6, z: -0.5, r: 0.3, color: `#a855f7`, label: `hidden` },
          { x: 2, y: 0.6, z: 0, r: 0.35, color: `#f97316`, label: `cat` },
          { x: 2, y: -0.6, z: 0, r: 0.35, color: `#f97316`, label: `dog` }
        ],
        bonds: [[0, 3], [0, 4], [0, 5], [0, 6], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5], [2, 6], [3, 7], [3, 8], [4, 7], [4, 8], [5, 7], [5, 8], [6, 7], [6, 8]]
      },
      caption: `Green: input neurons (for example pixels). Purple: hidden layer. Orange: outputs (cat or dog). Every connection has a weight that is adjusted during training.`
    },
    {
      type: `quiz`, title: `Mini-quiz: how a machine learns`,
      questions: [
        { type: `mc`, q: `A model that learns from emails already labelled "spam / not spam" uses … learning.`, options: [`supervised`, `unsupervised`, `reinforcement`], answer: 0, explain: `The examples have the right label: it is supervised.` },
        { type: `num`, q: `A neuron has inputs 1 and 1 and weights 2 and −5. What is the weighted sum?`, answer: -3, tol: 0, explain: `1×2 + 1×(−5) = 2 − 5 = −3.` },
        { type: `tf`, q: `Test data is used to check the model on examples it has never seen.`, answer: true, explain: `If you checked it on the same training data, the model could only "remember" and not generalise.` }
      ]
    },
    {
      type: `text`, title: `4. Generative AI and chatbots`,
      html: `<p><b>Generative AI</b> creates new content: texts, images, music, video. Chatbots like the ones you know are based on <b>large language models</b> (LLMs).</p>
<p>An LLM has been trained on enormous quantities of text to do one thing only, but very well: <b>predict the next word (or piece of word)</b>. By repeating the prediction many times, it writes whole sentences.</p>
<p>Important consequences:</p>
<ul>
<li>the model <b>does not "know" like a person does</b>: it produces the most probable text, which is usually correct, but <b>sometimes it invents</b> facts, dates or sources in a convincing way (these are called <b>hallucinations</b>);</li>
<li>the answers depend on how you ask the question (the <b>prompt</b>);</li>
<li>information must always be <b>checked</b> against reliable sources.</li>
</ul>`
    },
    {
      type: `text`, title: `5. Risks and rules`,
      html: `<ul>
<li><b>Prejudices (bias)</b>: if the data is unbalanced, the model will be too. A system trained almost only on faces of one type recognises the others less well.</li>
<li><b>Errors and hallucinations</b>: AI can be wrong with great confidence.</li>
<li><b>Privacy</b>: photos, voice, messages, location are <b>personal data</b>. In Europe they are protected by the <b>GDPR</b> (General Data Protection Regulation, in force since 2018).</li>
<li><b>Deepfakes and disinformation</b>: fake but realistic images, audio and video.</li>
<li><b>Energy and environment</b>: training and using large models requires data centres that consume a lot of electricity and water for cooling.</li>
<li><b>Work and study</b>: AI can help, but if it does your homework for you… you won't learn!</li>
</ul>
<p>In <b>2024</b> the European Union approved the <b>AI Act</b>, the first major law in the world on AI: it divides systems by <b>level of risk</b> and bans unacceptable ones (for example a "social score" for citizens). In 2025 Italy also approved its own AI law, which among other things requires <b>parental consent</b> for use by minors under 14.</p>
<p><b>Opportunities</b>: earlier medical diagnoses, instant translations, help for people with disabilities (reading texts aloud for the blind, automatic subtitles), weather forecasts, discovery of new drugs and materials.</p>`
    },
    {
      type: `widget`, title: `Game: risk or opportunity?`,
      widget: `classify`,
      options: {
        groups: [`Opportunity 🌱`, `Risk ⚠️`],
        items: [
          [`🩺 Finding tumours in X-rays before the doctor does`, 0],
          [`🔊 Reading a text aloud to someone who cannot see`, 0],
          [`🌍 Translating a conversation in real time`, 0],
          [`💊 Discovering new molecules for medicines`, 0],
          [`🎭 A fake video of a politician saying things never said`, 1],
          [`📸 Using photos of people without their permission`, 1],
          [`⚖️ Selecting candidates with data full of prejudices`, 1],
          [`📝 Copying an assignment written by AI without understanding it`, 1]
        ]
      },
      caption: `The same tool can serve good or bad purposes: what matters is how we use it.`
    },
    {
      type: `example`, title: `Practical example: the spam filter`,
      html: `<p>Your email service receives millions of messages. To train the filter:</p>
<ol>
<li><b>Data</b>: many emails already marked by users as "spam" or "not spam".</li>
<li><b>Features</b>: words such as "FREE", "you have won", strange links, unknown sender…</li>
<li><b>Training</b>: the model learns how much each feature weighs.</li>
<li><b>Test</b>: on 1000 new emails it classifies 980 correctly ➜ <b>accuracy</b> = 980 ÷ 1000 = <b>98%</b>.</li>
</ol>
<p>When you press "Report as spam", you are providing a new labelled example: you too are training the model!</p>`
    },
    {
      type: `example`, title: `Practical example: video suggestions`,
      html: `<p>Video platforms record what you watch, for how long, and what you skip. With <b>unsupervised</b> learning they group users with similar tastes; then they suggest what was liked by "people like you".</p>
<p>The positive side: you discover interesting content. The risk: the <b>filter bubble</b>, that is seeing always the same ideas, and the time passing without you noticing. The goal of the system is to keep you there as long as possible: remember that!</p>`
    },
    {
      type: `curiosity`, title: `Did you know… the term "artificial intelligence" has a birth date?`,
      html: `<p>In <b>1950</b> the English mathematician <b>Alan Turing</b> asked "Can machines think?" and proposed a game, later called the <b>Turing test</b>. The term <b>"artificial intelligence"</b> was used by <b>John McCarthy</b> for a summer seminar at Dartmouth College (USA) in <b>1956</b>. In 1958 Frank Rosenblatt built the <b>perceptron</b>, the first artificial neuron capable of learning.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… machines have beaten the champions?`,
      html: `<p>In <b>1997</b> IBM's computer <b>Deep Blue</b> defeated the world chess champion <b>Garry Kasparov</b>, but mainly by "brute force" calculation. In <b>2016</b> DeepMind's <b>AlphaGo</b> beat the champion <b>Lee Sedol</b> at <b>Go</b>, a game with more possible positions than atoms in the observable universe: there, neural networks were needed. In November <b>2022</b> the release of ChatGPT introduced chatbots to hundreds of millions of people within a few months.</p>`
    },
    {
      type: `widget`, title: `The history of AI`,
      widget: `timeline`,
      options: { events: [
        { year: 1950, label: `Turing: "Can machines think?"`, icon: `🧠` },
        { year: 1956, label: `Dartmouth: the term "AI" is born`, icon: `🏫` },
        { year: 1958, label: `Rosenblatt's perceptron`, icon: `🔘` },
        { year: 1997, label: `Deep Blue beats Kasparov at chess`, icon: `♟️` },
        { year: 2012, label: `Deep networks recognise images`, icon: `🖼️` },
        { year: 2016, label: `AlphaGo beats Lee Sedol at Go`, icon: `⚫` },
        { year: 2022, label: `Chatbots go mainstream`, icon: `💬` },
        { year: 2024, label: `EU: AI Act approved`, icon: `⚖️` }
      ], unit: `years` },
      caption: `Seventy years of history: long periods of waiting ("AI winters") and sudden accelerations.`
    },
    {
      type: `remember`, title: `To remember: using AI with your head`,
      html: `<ul>
<li>AI learns <b>from data</b>: if the data is wrong or partial, so will it be.</li>
<li>It gives <b>probable</b> answers, not certain ones: always <b>check</b> against reliable sources.</li>
<li><b>Do not enter personal data</b> (yours or other people's) into chatbots.</li>
<li>Use it to understand, not to copy; and declare when you have used it.</li>
<li>Important decisions remain with <b>people</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `How does a machine really "learn"? Here are four different routes.`,
      tabs: [
        {
          label: `🍳 The cook and the recipe`,
          html: `<p><b>Classic programming</b>: I give you the <b>recipe</b> (rules) and the ingredients (data) ➜ you make the cake (answer).</p>
<p><b>Machine learning</b>: I give you <b>many cakes already made</b> with their ingredients, and you have to <b>guess the recipe</b>. You taste, try, fail, correct… In the end the "recipe" you have reconstructed is the <b>model</b>.</p>`
        },
        {
          label: `🎛️ The knobs`,
          html: `<p>Imagine a mixer with thousands of <b>knobs</b> (the weights). You show the machine a photo of a cat: it answers "dog". Mistake! So you turn each knob <b>a little</b> in the direction that would have reduced the error. You repeat with millions of photos. In the end the knobs are in the right position to recognise cats.</p>
<p>This method of adjusting the knobs is called <b>gradient descent</b>: like coming down a mountain in the fog by always taking one step downhill.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#0f172a"/>
<g fill="#334155" stroke="#94a3b8" stroke-width="2">
<circle cx="80" cy="90" r="34"/><circle cx="190" cy="90" r="34"/><circle cx="300" cy="90" r="34"/><circle cx="410" cy="90" r="34"/><circle cx="520" cy="90" r="34"/>
</g>
<g stroke="#facc15" stroke-width="5" stroke-linecap="round">
<line x1="80" y1="90" x2="100" y2="65"/><line x1="190" y1="90" x2="165" y2="70"/><line x1="300" y1="90" x2="300" y2="58"/><line x1="410" y1="90" x2="440" y2="100"/><line x1="520" y1="90" x2="500" y2="62"/>
</g>
<g font-size="15" fill="#e2e8f0" text-anchor="middle"><text x="80" y="150">weight 1</text><text x="190" y="150">weight 2</text><text x="300" y="150">weight 3</text><text x="410" y="150">weight 4</text><text x="520" y="150">…</text></g>
<text x="300" y="195" font-size="16" fill="#facc15" text-anchor="middle" font-weight="bold">each error ➜ small correction of all the knobs</text>
</svg>`
        },
        {
          label: `👶 Like a child`,
          html: `<p>A small child sees a dog and says "woof". Then they see a cat and say "woof" too: Mum corrects them, "no, that is a <b>cat</b>". After many examples, they learn the difference. This is <b>supervised</b> learning.</p>
<p>But beware of the differences: a child needs only a few examples; a neural network needs thousands or millions. And the child <b>understands</b> what an animal is, while the network only finds regularities in numbers.</p>`
        },
        {
          label: `🃏 Flashcards of the terms`,
          html: `<p>Review the key words of AI (many are in English).</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `dataset`, back: `the set of data used for training` },
            { front: `training`, back: `training: the model adjusts the weights` },
            { front: `model`, back: `the result of training: the "rules" found` },
            { front: `bias`, back: `prejudice in the data that the model learns` },
            { front: `prompt`, back: `the request you write to the chatbot` },
            { front: `hallucination`, back: `invented but convincing answer` },
            { front: `deepfake`, back: `fake video/audio created with AI` }
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: artificial intelligence`,
      nodes: [
        { id: `dati`, label: `Data`, x: 15, y: 10, color: `#a855f7`, html: `Numbers, texts, images, sounds: the "raw material" of AI.`, why: `With the Internet, smartphones and sensors, since the 2000s the quantity of digital data has exploded: without this abundance neural networks would not have enough examples.` },
        { id: `ml`, label: `Machine learning`, x: 50, y: 10, color: `#7c3aed`, html: `Learning rules from examples instead of writing them.`, why: `The term was used by <b>Arthur Samuel</b> in 1959 for a program that learned to play draughts by improving game after game.` },
        { id: `calc`, label: `Computing power`, x: 85, y: 10, color: `#0ea5e9`, html: `Graphics processors (GPUs) and data centres.`, why: `GPUs, born for video games, perform thousands of multiplications in parallel: exactly what neural networks need. Since 2012 they have become the main tool of AI.` },
        { id: `sup`, label: `Supervised`, x: 15, y: 40, color: `#22c55e`, html: `Examples with the right label.`, why: `It is the most widely used method because the error is easy to measure: the model's answer is compared with the label.` },
        { id: `nonsup`, label: `Unsupervised`, x: 40, y: 40, color: `#16a34a`, html: `Finds groups in data without labels.`, why: `Labelling takes time and human work: much data lacks labels, and clustering algorithms exploit it anyway.` },
        { id: `rinf`, label: `Reinforcement`, x: 65, y: 40, color: `#15803d`, html: `Rewards and penalties.`, why: `It is inspired by psychology experiments on animal conditioning (such as those of B. F. Skinner). AlphaGo used it by playing millions of games against itself.` },
        { id: `rete`, label: `Neural networks`, x: 85, y: 62, color: `#f97316`, html: `Layers of artificial neurons with adjustable weights.`, why: `Inspired by the biological neuron described by McCulloch and Pitts (1943) and by Rosenblatt's perceptron (1958). The method for training networks with many layers (backpropagation) became famous in 1986.` },
        { id: `gen`, label: `Generative AI`, x: 55, y: 75, color: `#ef4444`, html: `Creates new texts, images, sounds.`, why: `In 2017 Google researchers published the <b>Transformer</b> architecture, which makes it possible to analyse whole sentences in parallel: it is the basis of large language models.` },
        { id: `etica`, label: `Risks and rules`, x: 20, y: 85, color: `#64748b`, html: `Bias, privacy, deepfakes, energy; GDPR and AI Act.`, why: `The more AI decides important things (loans, work, healthcare), the more rules are needed. The EU chose an approach based on <b>level of risk</b>: the higher the risk, the stricter the checks.` }
      ],
      edges: [
        [`dati`, `ml`, `feed`], [`calc`, `ml`, `makes possible`], [`ml`, `sup`, `type`], [`ml`, `nonsup`, `type`], [`ml`, `rinf`, `type`],
        [`ml`, `rete`, `tool`], [`rete`, `gen`, `allows`], [`dati`, `etica`, `privacy`], [`gen`, `etica`, `deepfakes`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: risks and responsible use`,
      questions: [
        { type: `mc`, q: `What is a chatbot "hallucination"?`, options: [`A connection error`, `An invented answer written in a convincing way`, `A colourful image`], answer: 1, explain: `The model generates probable text, which is sometimes not true.` },
        { type: `tf`, q: `If the training data contains prejudices, the model can repeat them.`, answer: true, explain: `The model learns what it finds in the data, including prejudices (bias).` },
        { type: `mc`, q: `Which European rule has protected personal data since 2018?`, options: [`AI Act`, `GDPR`, `Wi-Fi Act`], answer: 1, explain: `The GDPR, General Data Protection Regulation.` }
      ]
    }
  ],
  glossary: [
    { t: `Datum`, d: `Raw value that, with a meaning, becomes information.` },
    { t: `Machine learning`, d: `Automatic learning: the computer works out rules from examples.` },
    { t: `Model`, d: `The result of training, used to make predictions on new data.` },
    { t: `Neural network`, d: `Set of artificial neurons organised in layers, connected by weights.` },
    { t: `Weight`, d: `A number that shows how much a connection counts in a neural network.` },
    { t: `Deep learning`, d: `Learning with neural networks that have many layers.` },
    { t: `LLM`, d: `Large language model: predicts the next word in a text.` },
    { t: `Bias`, d: `Prejudice or imbalance in the data that the model learns.` },
    { t: `Deepfake`, d: `Fake image, audio or video made with AI.` },
    { t: `AI Act`, d: `European Union law on AI (2024), based on levels of risk.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `In machine learning, what do we provide to the computer?`, options: [`Only the rules`, `Many examples (data), often with the right answers`, `Only electricity`], answer: 1, explain: `The computer works out the rules from the examples.` },
      { type: `mc`, q: `A robot that learns to walk by receiving a reward when it doesn't fall uses … learning.`, options: [`supervised`, `unsupervised`, `reinforcement`], answer: 2, explain: `Rewards and penalties: reinforcement learning.` },
      { type: `num`, q: `A model correctly classifies 450 photos out of 500. What is the accuracy as a percentage?`, answer: 90, tol: 0, unit: `%`, explain: `450 ÷ 500 = 0.9 = 90%.` },
      { type: `num`, q: `Neuron: inputs 1, 0, 1 with weights 3, 5, −1. Weighted sum?`, answer: 2, tol: 0, explain: `1×3 + 0×5 + 1×(−1) = 3 + 0 − 1 = 2.` },
      { type: `tf`, q: `A chatbot always tells the truth because it has read the whole Internet.`, answer: false, explain: `It can make mistakes and "hallucinations": you must check.` },
      { type: `tf`, q: `Deep learning uses neural networks with many layers.`, answer: true, explain: `"Deep" means many hidden layers.` },
      { type: `mc`, q: `What are test data used for?`, options: [`To train the model`, `To check the model on examples it has never seen`, `To decorate the dataset`], answer: 1, explain: `It measures how well the model generalises.` },
      { type: `text`, q: `What is the name of the English mathematician who asked in 1950 whether machines can think?`, answer: [`turing`, `alan turing`], explain: `Alan Turing proposed the "imitation game", the Turing test.` },
      { type: `order`, q: `Put in order the phases of machine learning.`, items: [`Collect and clean the data`, `Train the model`, `Check it on test data`, `Use it on new data`], explain: `Data ➜ training ➜ test ➜ use.` },
      { type: `mc`, q: `Which behaviour is correct with a chatbot?`, options: [`Writing your classmates' addresses and phone numbers`, `Using it to understand a topic and then checking in the book`, `Handing in the generated text as if it were yours`], answer: 1, explain: `Responsible use: to understand, checking, without personal data.` },
      { type: `mc`, q: `Why can a face recogniser work worse with some people?`, options: [`Because the training data was unbalanced`, `Because those people move`, `Because the computer is tired`], answer: 0, explain: `It is a case of bias in the data.` },
      { type: `tf`, q: `The European AI Act classifies AI systems according to their level of risk.`, answer: true, explain: `Unacceptable risk (banned), high, limited, minimal.` }
    ],
    gen: [[`percent`, 2]]
  }
});
