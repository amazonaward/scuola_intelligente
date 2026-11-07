TOPIC('en', {
  id: `p5-tec-ia-intro`,
  title: `What is artificial intelligence?`,
  intro: `The phone that recognises your face, the voice assistant that answers questions, the program that translates a text in a flash: behind them there is <b>artificial intelligence</b> (AI). But how can a machine "learn"? Is it really intelligent like us? Today we find out, and we also learn to use it with our heads. 🤖🧠`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Normal programs and programs that learn`,
      html: `<p>A <b>normal program</b> follows <b>instructions</b> written by a person, step by step, like a recipe: <i>"if the number is even, write EVEN; otherwise write ODD"</i>. The programmer has to think of everything.</p>
<p>But try writing the instructions to recognise a <b>cat</b> in a photo: "it has pointed ears"… so do foxes! "It has whiskers"… so do mice! It is almost impossible to write all the rules.</p>
<p><b>Artificial intelligence</b> takes another road: instead of giving the machine the rules, we give it <b>lots and lots of examples</b>, and it discovers the "hidden rules" by itself. This way is called <b>machine learning</b>.</p>
<p>It is a bit like how you learned to recognise dogs: nobody gave you a definition, you saw lots of dogs and worked out what they looked like!</p>`
    },
    {
      type: `text`, title: `2. How a machine learns: 4 steps`,
      html: `<ol>
<li><b>Collect the data</b>: for example 10,000 photos of cats and 10,000 photos of dogs.</li>
<li><b>Label</b>: a person writes "cat" or "dog" on every photo. These are the <b>training data</b>.</li>
<li><b>Train</b>: the machine looks at the photos, tries to guess, checks the label and, if it got it wrong, corrects itself a tiny bit. It repeats this thousands and thousands of times. In the end it has built a <b>model</b>.</li>
<li><b>Use and check</b>: we show it a <b>new</b> photo it has never seen. The model answers: "cat, 95%". We check how often it is right.</li>
</ol>
<p>Note: AI is not 100% sure, it gives a <b>probability</b>. And it only learns from what we give it: if the photos only show black cats, it might not recognise a white cat!</p>`
    },
    {
      type: `svg`, title: `From examples to a model`,
      caption: `Lots of labelled examples ➜ training ➜ a model that also recognises new examples.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="95" y="30" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">1. Examples + labels</text>
<rect x="20" y="45" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="55" y="85" font-size="30" text-anchor="middle">🐱</text>
<rect x="100" y="45" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="135" y="85" font-size="30" text-anchor="middle">🐶</text>
<rect x="20" y="125" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="55" y="165" font-size="30" text-anchor="middle">🐈</text>
<rect x="100" y="125" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="135" y="165" font-size="30" text-anchor="middle">🐕</text>
<text x="55" y="120" font-size="13" text-anchor="middle" fill="#16a34a" font-weight="bold">cat</text>
<text x="135" y="120" font-size="13" text-anchor="middle" fill="#2563eb" font-weight="bold">dog</text>
<text x="55" y="200" font-size="13" text-anchor="middle" fill="#16a34a" font-weight="bold">cat</text>
<text x="135" y="200" font-size="13" text-anchor="middle" fill="#2563eb" font-weight="bold">dog</text>
<text x="95" y="230" font-size="14" text-anchor="middle" fill="#4c1d95">… thousands of photos</text>
<text x="200" y="130" font-size="34" fill="#7c3aed">➜</text>
<rect x="240" y="70" width="140" height="120" rx="16" fill="#7c3aed"/>
<text x="310" y="110" font-size="34" text-anchor="middle">⚙️</text>
<text x="310" y="145" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">2. Training</text>
<text x="310" y="168" font-size="13" text-anchor="middle" fill="#ede9fe">tries, errs, corrects</text>
<text x="390" y="130" font-size="34" fill="#7c3aed">➜</text>
<rect x="430" y="45" width="150" height="80" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/>
<text x="505" y="75" font-size="15" text-anchor="middle" fill="#4c1d95" font-weight="bold">3. New photo</text>
<text x="505" y="112" font-size="30" text-anchor="middle">🐈‍⬛</text>
<rect x="430" y="150" width="150" height="80" rx="12" fill="#22c55e"/>
<text x="505" y="182" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">4. Answer</text>
<text x="505" y="212" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">cat: 95%</text>
<line x1="505" y1="125" x2="505" y2="150" stroke="#7c3aed" stroke-width="3"/>
<text x="300" y="275" font-size="16" text-anchor="middle" fill="#4c1d95">More good, varied examples = better answers</text>
</svg>`
    },
    {
      type: `widget`, title: `Try "training" your own brain`,
      widget: `classify`,
      caption: `Do what an AI does: look at the examples and sort them into two groups. What "hidden rule" did you use?`,
      options: {
        groups: [`🍎 Fruit`, `🥕 Vegetables`],
        items: [
          [`🍎 apple`, 0], [`🍌 banana`, 0], [`🍇 grapes`, 0], [`🍓 strawberry`, 0], [`🍐 pear`, 0],
          [`🥕 carrot`, 1], [`🥦 broccoli`, 1], [`🥬 lettuce`, 1], [`🧅 onion`, 1], [`🥔 potato`, 1]
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz: how AI learns`,
      questions: [
        { type: `mc`, q: `How does a machine learning system learn?`, options: [`It reads a book of rules`, `From lots of examples`, `By asking the teacher`], answer: 1, explain: `It learns from training data: lots of examples, often with labels.` },
        { type: `tf`, q: `AI is always 100% sure of its answers.`, answer: false, explain: `It gives a probability and it can make mistakes.` },
        { type: `order`, q: `Put the steps in order.`, items: [`Collect the data`, `Label the examples`, `Train the model`, `Test with new data`], explain: `Data ➜ labels ➜ training ➜ checking.` }
      ]
    },
    {
      type: `text`, title: `3. Neural networks: a "brain" made of numbers`,
      html: `<p>Many AIs today use <b>artificial neural networks</b>, inspired (very loosely) by the <b>neurons</b> in our brain.</p>
<ul>
<li>A network is made of lots of artificial "neurons" arranged in <b>layers</b>.</li>
<li>The first layer receives the data (for example the pixels of a photo).</li>
<li>The layers in the middle, called <b>hidden</b> layers, discover more and more complex things: first lines and blobs, then shapes like eyes and ears, then "cat face".</li>
<li>The last layer gives the answer.</li>
</ul>
<p>Every connection has a <b>weight</b>, a number that says how important it is. Training the network means <b>adjusting the weights</b> little by little until the answers become right. The biggest networks have <b>billions</b> of weights!</p>
<p>When networks have many layers we talk about <b>deep learning</b>.</p>`
    },
    {
      type: `3d`, title: `A neural network in 3D`,
      scene: `molecule`,
      caption: `Rotate the network: on the left the inputs (I, in blue), in the middle the hidden layer (N, in purple), on the right the outputs (cat C and dog D, in green). Each little stick is a connection with its own "weight".`,
      options: {
        atoms: [
          { x: -1.6, y: 0.9, z: 0, r: 0.25, color: `#3b82f6`, label: `I` },
          { x: -1.6, y: 0.3, z: 0, r: 0.25, color: `#3b82f6`, label: `I` },
          { x: -1.6, y: -0.3, z: 0, r: 0.25, color: `#3b82f6`, label: `I` },
          { x: -1.6, y: -0.9, z: 0, r: 0.25, color: `#3b82f6`, label: `I` },
          { x: 0, y: 0.75, z: 0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 0, y: 0, z: -0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 0, y: -0.75, z: 0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 1.6, y: 0.4, z: 0, r: 0.32, color: `#22c55e`, label: `C` },
          { x: 1.6, y: -0.4, z: 0, r: 0.32, color: `#22c55e`, label: `D` }
        ],
        bonds: [
          [0, 4], [0, 5], [0, 6], [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6],
          [4, 7], [4, 8], [5, 7], [5, 8], [6, 7], [6, 8]
        ]
      }
    },
    {
      type: `text`, title: `4. Where you meet AI every day`,
      html: `<ul>
<li>📷 <b>Recognising images</b>: unlocking with your face, photos grouped by person, the car that reads road signs.</li>
<li>🗣️ <b>Understanding speech</b>: voice assistants, automatic subtitles.</li>
<li>🌐 <b>Translating</b>: automatic translators.</li>
<li>🎬 <b>Recommending</b>: the videos and songs "you might like".</li>
<li>💬 <b>Generating text and pictures</b>: chatbots and programs that create drawings from a description (<b>generative</b> AI).</li>
<li>🏥 <b>Medicine</b>: helping doctors spot diseases in X-rays.</li>
<li>🌦️ <b>Science</b>: forecasting the weather, discovering the shape of proteins.</li>
</ul>`
    },
    {
      type: `example`, title: `Practical example: the spam filter`,
      html: `<p>Your mailbox separates useful emails from advertising or scam ones (<b>spam</b>) all by itself. How?</p>
<ol>
<li>Millions of users have pressed the "Report as spam" button: these are the <b>labels</b>.</li>
<li>The system has learned that certain things often appear in spam: "YOU HAVE WON!!!", strange links, unknown senders.</li>
<li>When a new email arrives, it works out the probability that it is spam. If it is high, it moves it to the spam folder.</li>
</ol>
<p>Every time you report spam, you help the AI to learn!</p>`
    },
    {
      type: `example`, title: `Practical example: why a chatbot can be wrong`,
      html: `<p>A <b>chatbot</b> (like the assistants you can "chat" with) has been trained on an enormous amount of text. It has learned to predict <b>which word comes next</b>, so well that it writes sentences that look as if a person wrote them.</p>
<p>But it does <b>not "know"</b> things the way you do: sometimes it makes up wrong answers written in a very convincing way (these are called "<b>hallucinations</b>").</p>
<p>Example: you ask "Who won my school's running race?". The chatbot can't know, but it might make up a name! That is why you must always <b>check</b> information in reliable sources: a book, a teacher, a trustworthy website.</p>`
    },
    {
      type: `decision`, title: `What would you do?`,
      html: `<p>You have to do a research project on the ancient Egyptians for school. A chatbot instantly writes you a beautiful text, which also says that "the pyramids were built in 1200 AD".</p>`,
      question: `What do you do?`,
      options: [
        { label: `I copy the text as it is and hand it in.`, outcome: `The text isn't yours and it contains a serious mistake: the pyramids of Giza are about 4,500 years old (2600–2500 BC)! Your teacher will notice, and above all you haven't learned anything.` },
        { label: `I use the chatbot to explain the main ideas, check the facts in a book and write the text in my own words.`, outcome: `Excellent! You use AI as a helper, not as someone who does the work for you. By checking, you also discover the mistake in the date.` },
        { label: `I never use any AI because it's all wrong.`, outcome: `That's cautious, but AI can be useful: it explains things in different ways and helps you make outlines and practise. What matters is to use it with an adult, with the right permissions, and to always check.` }
      ],
      answer: 1,
      explain: `AI is a <b>tool</b>: it can help you understand and organise ideas, but it can be wrong and it doesn't replace your brain. The golden rule: <b>use it, but always check and write in your own words</b>. And remember that many AI services need your parents' permission, especially if you are under 14.`
    },
    {
      type: `remember`, title: `Rules for using AI well`,
      html: `<ul>
<li>✅ <b>Check</b>: AI can be wrong or make things up. Check reliable sources.</li>
<li>🔒 <b>Privacy</b>: never write your full name, address, school, passwords or personal photos.</li>
<li>🧠 <b>Think for yourself</b>: use it to understand better, not to copy.</li>
<li>👨‍👩‍👧 <b>Ask an adult</b>: many services need your parents' permission.</li>
<li>⚖️ <b>Respect</b>: don't use it to make fun of someone or to create fake pictures of real people.</li>
</ul>`
    },
    {
      type: `widget`, title: `Game: AI or not AI?`,
      widget: `classify`,
      caption: `Which of these things use machine learning, and which only follow fixed rules?`,
      options: {
        groups: [`🤖 Uses AI (learns from data)`, `⚙️ Follows fixed rules`],
        items: [
          [`Unlocking the phone with your face`, 0], [`Automatic translator`, 0], [`Recommended videos`, 0], [`Voice assistant`, 0], [`Spam filter`, 0],
          [`Calculator`, 1], [`Timed traffic light`, 1], [`Alarm clock`, 1], [`Thermostat that switches on at 20 °C`, 1]
        ]
      }
    },
    {
      type: `curiosity`, title: `Did you know… the question "can machines think?" is more than 75 years old?`,
      html: `<p>In <b>1950</b> the English mathematician <b>Alan Turing</b> proposed a game: a person chats with two hidden partners, a human and a machine. If the person can't tell which is the machine, then the machine behaves in an "intelligent" way. This is the famous <b>Turing test</b>. The name "artificial intelligence" was coined in <b>1956</b>, at a conference at Dartmouth College (USA) organised by <b>John McCarthy</b>.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… a computer has beaten the world chess champion?`,
      html: `<p>In <b>1997</b> IBM's computer <b>Deep Blue</b> beat the world chess champion <b>Garry Kasparov</b>. In <b>2016</b> the program <b>AlphaGo</b> beat the champion <b>Lee Sedol</b> at <b>Go</b>, a Chinese game with more possible positions than there are atoms in the universe. AlphaGo had learned by studying games played by humans and then playing millions of games… against itself!</p>`
    },
    {
      type: `curiosity`, title: `Did you know… Europe made the first law on AI?`,
      html: `<p>In <b>2024</b> the European Union approved the <b>AI Act</b>, the world's first big law on artificial intelligence. It divides AIs according to <b>risk</b>: some are banned (for example those that manipulate people), while others, like those used in hospitals or schools, have to follow strict rules. Italy also passed its own AI law in 2025.</p>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Machine learning is a difficult idea. Here are some other routes.`,
      tabs: [
        {
          label: `🐕 Like training a dog`,
          html: `<p>When you teach a dog to sit, you don't explain the rules: you say "sit", and when it does it you give it a treat 🦴. If it gets it wrong, no treat. After lots of tries the dog "gets it".</p>
<p>Some AIs learn exactly like this! It is called <b>reinforcement learning</b>: the machine tries actions, gets "points" when it does well, and little by little learns the best strategy. This is how AlphaGo became a champion.</p>`
        },
        {
          label: `🍝 The recipe and the chef`,
          html: `<table>
<tr><th>Normal program</th><th>Artificial intelligence</th></tr>
<tr><td>Like following a <b>recipe</b> word for word: 200 g of pasta, 10 minutes, salt.</td><td>Like a cook who has tasted <b>a thousand dishes</b> and has worked out for themselves what makes them good.</td></tr>
<tr><td>Rules ➜ answers</td><td>Examples + answers ➜ rules</td></tr>
<tr><td>Only does what is written.</td><td>Can deal with new cases, but can also make mistakes.</td></tr>
</table>`
        },
        {
          label: `📈 Guess the rule`,
          html: `<p>Look at these examples: 1 ➜ 3 · 2 ➜ 5 · 3 ➜ 7 · 4 ➜ 9. What will the result be for 10?</p>
<p>You discovered the rule "<b>double it and add one</b>" and answered <b>21</b>, even though nobody told you. This is exactly what a machine that learns does: it finds the hidden rule from the examples! On the number line below the results are marked: can you see the pattern?</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 22, step: 1, marks: [3, 5, 7, 9, 21] }
        },
        {
          label: `🔗 AI words`,
          html: `<p>Match each word with its meaning.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Training data`, `The examples the machine learns from`],
              [`Label`, `The right answer written on an example`],
              [`Model`, `The result of training`],
              [`Neural network`, `Layers of connected artificial neurons`],
              [`Hallucination`, `A made-up but convincing answer`],
              [`Chatbot`, `A program you can chat with`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: the roots of artificial intelligence`,
      nodes: [
        { id: `ia`, label: `Artificial intelligence`, x: 50, y: 8, color: `#7c3aed`, html: `Systems that do tasks that usually need human intelligence.`, why: `The name was chosen by <b>John McCarthy</b> for the Dartmouth conference of 1956. The scientists of the time thought they would solve the problem in a few years… it has taken decades!` },
        { id: `turing`, label: `Alan Turing`, x: 15, y: 25, color: `#64748b`, html: `The "father" of computer science and AI.`, why: `In 1936 he described the "Turing machine", the model of every computer. In 1950 he asked whether machines can think and proposed his test. During the war he helped to break the Nazi secret codes.` },
        { id: `dati`, label: `Data`, x: 85, y: 25, color: `#0ea5e9`, html: `The examples the machine learns from.`, why: `Modern AIs work because today, thanks to the Internet, there are enormous amounts of text, photos and sounds. A big project, <b>ImageNet</b> (2009), collected more than 14 million images labelled by hand.` },
        { id: `ml`, label: `Machine learning`, x: 50, y: 35, color: `#a855f7`, html: `Learning from examples instead of written rules.`, why: `The term <i>machine learning</i> was used in 1959 by <b>Arthur Samuel</b>, who created a draughts program that could improve by playing against itself.` },
        { id: `neuro`, label: `Brain neurons`, x: 15, y: 60, color: `#ec4899`, html: `The biological inspiration.`, why: `In 1943 McCulloch and Pitts described a "mathematical neuron". Our brain has about 86 billion neurons connected to each other: artificial networks copy the idea, not the exact way it works.` },
        { id: `rete`, label: `Neural networks`, x: 40, y: 62, color: `#8b5cf6`, html: `Layers of artificial neurons with weights to adjust.`, why: `The first one, the <b>Perceptron</b>, was built by Frank Rosenblatt in 1958. Deep networks only became powerful after 2012, thanks to more data and super-fast chips (GPUs, originally made for video games!).` },
        { id: `usi`, label: `Everyday uses`, x: 70, y: 62, color: `#22c55e`, html: `Translators, voice assistants, photos, medicine.`, why: `They work well where there are lots of examples and rules that are hard to write by hand: images, voice, languages.` },
        { id: `etica`, label: `Responsible use`, x: 55, y: 88, color: `#ef4444`, html: `Checking, protecting privacy, avoiding unfairness.`, why: `If the training data are incomplete or full of prejudice, the AI will be too (this is called <b>bias</b>). That is why we need rules, like the European AI Act of 2024, and people who check.` }
      ],
      edges: [
        [`turing`, `ia`, `asks the question`], [`ia`, `ml`, `today mostly`], [`dati`, `ml`, `feed`], [`neuro`, `rete`, `inspire`],
        [`ml`, `rete`, `uses`], [`rete`, `usi`, `make possible`], [`usi`, `etica`, `require`], [`dati`, `etica`, `can contain bias`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: AI in everyday life`,
      questions: [
        { type: `mc`, q: `What is a chatbot's "hallucination"?`, options: [`A dream of the computer`, `A made-up answer written in a convincing way`, `A virus`], answer: 1, explain: `A chatbot can make up facts: you must always check.` },
        { type: `tf`, q: `It is a good idea to type your home address into a chatbot.`, answer: false, explain: `Never share personal data online.` },
        { type: `mc`, q: `Which of these does NOT use AI?`, options: [`An automatic translator`, `A calculator`, `Unlocking with your face`], answer: 1, explain: `A calculator follows fixed rules, it doesn't learn.` }
      ]
    }
  ],
  glossary: [
    { t: `Artificial intelligence (AI)`, d: `Computer systems that can do tasks like recognising, translating and predicting, by learning from data.` },
    { t: `Machine learning`, d: `The machine learns from examples instead of from written rules.` },
    { t: `Training data`, d: `The examples used to teach an AI.` },
    { t: `Label`, d: `The right answer attached to an example (e.g. "cat").` },
    { t: `Model`, d: `The result of training, which gives answers about new data.` },
    { t: `Neural network`, d: `A set of artificial neurons arranged in layers and connected by weights.` },
    { t: `Chatbot`, d: `A program you can have a conversation with by typing or speaking.` },
    { t: `Hallucination`, d: `A false answer made up by an AI but presented as true.` },
    { t: `Bias`, d: `Prejudice: a systematic error caused by incomplete or unbalanced data.` },
    { t: `Algorithm`, d: `A sequence of precise instructions for solving a problem.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `What is the main difference between a normal program and an AI that learns?`, options: [`AI is more colourful`, `A normal program follows written rules; AI finds the rules from examples`, `There is no difference`], answer: 1, explain: `AI learns from examples (training data).` },
      { type: `text`, q: `What is it called when a machine learns from examples? (two words)`, answer: [`machine learning`], explain: `Machine learning.` },
      { type: `order`, q: `Put the training steps in order.`, items: [`I collect lots of photos`, `I write the label on every photo`, `The machine tries, errs and corrects itself`, `I test the model with new photos`], explain: `Data ➜ labels ➜ training ➜ checking.` },
      { type: `mc`, q: `Who proposed in 1950 a test to find out whether a machine "thinks"?`, options: [`Alan Turing`, `Leonardo da Vinci`, `Albert Einstein`], answer: 0, explain: `The Turing test.` },
      { type: `num`, q: `In which year was the name "artificial intelligence" coined?`, answer: 1956, tol: 0, explain: `At the Dartmouth conference, in 1956.` },
      { type: `tf`, q: `If an AI only learns from photos of black cats, it might not recognise a white cat.`, answer: true, explain: `AI only learns from what it sees: varied data are needed (otherwise there is bias).` },
      { type: `mc`, q: `Artificial neural networks are inspired by…`, options: [`the neurons of the brain`, `spiders' webs`, `fishing nets`], answer: 0, explain: `They are inspired, very loosely, by neurons.` },
      { type: `mc`, q: `A chatbot gives you a historical date. What do you do?`, options: [`Believe it straight away`, `Check it in a book or a reliable website`, `Change it at random`], answer: 1, explain: `AIs can be wrong: always check.` },
      { type: `mc`, q: `Which piece of information must NEVER be typed into a chatbot?`, options: [`A question about dinosaurs`, `Your password`, `A word to translate`], answer: 1, explain: `Passwords and personal data must always be protected.` },
      { type: `tf`, q: `In 1997 the computer Deep Blue beat the world chess champion.`, answer: true, explain: `It beat Garry Kasparov.` },
      { type: `text`, q: `What is the European law on AI of 2024 called?`, answer: [`ai act`, `the ai act`, `artificial intelligence act`], explain: `The AI Act, the world's first big law on AI.` },
      { type: `mc`, q: `What does "training" a neural network mean?`, options: [`Switching it on`, `Adjusting the weights of the connections until the answers are right`, `Connecting it to the Internet`], answer: 1, explain: `Training adjusts the weights little by little.` }
    ]
  }
});
