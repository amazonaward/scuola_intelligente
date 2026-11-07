TOPIC('en', {
  id: "p2-tec-computer",
  title: "The Computer and Its Parts",
  intro: "The <b>computer</b> 💻 is a machine that <b>receives</b> information, <b>processes</b> it (works on it) and <b>gives</b> us a result. Today we discover its parts: <b>keyboard</b> ⌨️, <b>mouse</b> 🖱️, <b>screen</b> 🖥️ and <b>memory</b> 🧠… and how they work together!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "What does a computer do? 🤔",
      html: `<p>A computer always works in <b>three steps</b>:</p>
<ol>
<li>📥 <b>INPUT</b>: we give it information, for example we type on the keyboard.</li>
<li>⚙️ <b>PROCESSING</b>: the computer “thinks” and works on the information, super fast.</li>
<li>📤 <b>OUTPUT</b>: the computer shows us the result, for example on the screen.</li>
</ol>
<p>It is like when the teacher asks you a question 👂 (input), you think 🤔 (processing) and you answer 🗣️ (output)!</p>`
    },
    {
      type: "text",
      title: "The parts for giving information (input) 📥",
      html: `<ul>
<li>⌨️ <b>Keyboard</b>: it has lots of keys with letters, numbers and symbols. It is used for <b>typing</b>.</li>
<li>🖱️ <b>Mouse</b>: it moves on the table and makes the <b>arrow</b> move on the screen. With the <b>click</b> we choose things.</li>
<li>👆 <b>Touchpad</b> and <b>touch screen</b>: you touch them with your finger, like on a tablet.</li>
<li>🎤 <b>Microphone</b>: it lets our <b>voice</b> in.</li>
<li>📷 <b>Webcam</b>: a small camera that lets <b>images</b> in.</li>
</ul>`
    },
    {
      type: "text",
      title: "The parts that give us the result (output) 📤",
      html: `<ul>
<li>🖥️ <b>Screen</b> (or <b>monitor</b>): it lets us <b>see</b> writing, drawings and videos.</li>
<li>🔊 <b>Speakers</b> and <b>headphones</b> 🎧: they let us <b>hear</b> sounds and music.</li>
<li>🖨️ <b>Printer</b>: it puts what is on the screen onto <b>paper</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "The brain and the memory 🧠",
      html: `<p>Inside the computer, hidden in the box (or under the keyboard, in a laptop), are the most important parts:</p>
<ul>
<li>⚙️ The <b>processor</b> (CPU): it is the <b>brain</b>. It does the calculations, billions in a second!</li>
<li>📝 The <b>RAM memory</b>: it is the <b>“for now”</b> memory. It remembers what you are doing right now. When you switch off the computer, it is <b>erased</b>.</li>
<li>💾 The <b>disk</b> (or storage memory): it is the <b>“for ever”</b> memory. It keeps your drawings, photos and games even when the computer is off.</li>
</ul>
<p>That is why it is important to <b>save</b> 💾 your work: saving means moving it from the “for now” memory to the “for ever” one!</p>`
    },
    {
      type: "svg",
      title: "The parts of the computer",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f1f5f9"/>
<rect x="170" y="20" width="260" height="170" rx="12" fill="#1e293b"/>
<rect x="185" y="35" width="230" height="140" rx="4" fill="#38bdf8"/>
<circle cx="300" cy="28" r="4" fill="#94a3b8"/>
<rect x="285" y="190" width="30" height="30" fill="#475569"/>
<rect x="240" y="218" width="120" height="10" rx="4" fill="#475569"/>
<rect x="150" y="245" width="270" height="55" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
<rect x="165" y="256" width="240" height="10" rx="2" fill="#94a3b8"/>
<rect x="165" y="272" width="240" height="10" rx="2" fill="#94a3b8"/>
<rect x="220" y="287" width="130" height="8" rx="2" fill="#94a3b8"/>
<ellipse cx="480" cy="270" rx="25" ry="35" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
<line x1="480" y1="235" x2="480" y2="262" stroke="#475569" stroke-width="2"/>
<rect x="30" y="60" width="90" height="200" rx="8" fill="#334155"/>
<circle cx="75" cy="90" r="8" fill="#22c55e"/>
<rect x="45" y="120" width="60" height="8" fill="#64748b"/>
<rect x="470" y="70" width="50" height="80" rx="10" fill="#0f172a"/>
<circle cx="495" cy="100" r="15" fill="#475569"/>
<circle cx="495" cy="133" r="9" fill="#475569"/>
<text x="300" y="110" font-size="22" text-anchor="middle" fill="#0f172a" font-weight="bold">SCREEN</text>
<text x="285" y="315" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">keyboard</text>
<text x="545" y="310" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">mouse</text>
<text x="75" y="285" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">system unit</text>
<text x="75" y="160" font-size="13" text-anchor="middle" fill="#ffffff">CPU</text>
<text x="75" y="180" font-size="13" text-anchor="middle" fill="#ffffff">memory</text>
<text x="545" y="60" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">speaker</text>
</svg>`,
      caption: "A desktop computer: the system unit contains the processor (CPU) and the memory."
    },
    {
      type: "widget",
      title: "Input or output?",
      widget: "classify",
      options: {
        groups: ["📥 Input", "📤 Output"],
        items: [
          ["⌨️ keyboard", 0],
          ["🖱️ mouse", 0],
          ["🎤 microphone", 0],
          ["📷 webcam", 0],
          ["🖥️ screen", 1],
          ["🖨️ printer", 1],
          ["🔊 speakers", 1],
          ["🎧 headphones", 1]
        ]
      },
      caption: "Input parts let information GO IN to the computer; output parts let it COME OUT to us."
    },
    {
      type: "quiz",
      title: "Mini-quiz: the parts",
      questions: [
        { type: "mc", q: "What do you use to type letters on the computer?", options: ["The keyboard", "The printer", "The speakers"], answer: 0, explain: "The keyboard is used for typing." },
        { type: "mc", q: "What is the “brain” of the computer?", options: ["The screen", "The processor (CPU)", "The mouse"], answer: 1, explain: "The processor does all the calculations." },
        { type: "tf", q: "The printer is an output part.", answer: true, explain: "It puts the work out on paper." }
      ]
    },
    {
      type: "3d",
      title: "The computer in 3D: everything is connected to the processor",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.55, color: "#f59e0b", label: "Processor (CPU)" },
          { x: -1.6, y: 0.9, z: 0, r: 0.35, color: "#22c55e", label: "Keyboard" },
          { x: -1.6, y: -0.9, z: 0.3, r: 0.35, color: "#22c55e", label: "Mouse" },
          { x: -1.1, y: 0, z: 1.4, r: 0.3, color: "#22c55e", label: "Microphone" },
          { x: 1.6, y: 0.9, z: 0, r: 0.4, color: "#3b82f6", label: "Screen" },
          { x: 1.6, y: -0.9, z: 0.3, r: 0.32, color: "#3b82f6", label: "Printer" },
          { x: 1.1, y: 0, z: 1.4, r: 0.3, color: "#3b82f6", label: "Speakers" },
          { x: 0, y: 1.5, z: -0.8, r: 0.35, color: "#a855f7", label: "RAM (memory for now)" },
          { x: 0, y: -1.5, z: -0.8, r: 0.38, color: "#ec4899", label: "Disk (memory for ever)" }
        ],
        bonds: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [7, 8]]
      },
      caption: "Rotate the model. Green = input, blue = output, purple and pink = memories. In the centre, in orange, the processor that controls everything."
    },
    {
      type: "example",
      title: "Practical example: I type and print a card 💌",
      html: `<p>Giulia wants to make a card for Mother's Day:</p>
<ol>
<li>⌨️ She types “I love you, mum!” with the <b>keyboard</b>. → <i>input</i></li>
<li>🖱️ With the <b>mouse</b> she chooses a red colour and a heart. → <i>input</i></li>
<li>⚙️ The <b>processor</b> puts together letters, colours and drawings. → <i>processing</i></li>
<li>🖥️ Giulia sees the card on the <b>screen</b>. → <i>output</i></li>
<li>💾 She clicks <b>Save</b>, so the card goes onto the <b>disk</b>.</li>
<li>🖨️ She <b>prints</b> it on paper. → <i>output</i> 🎉</li>
</ol>`
    },
    {
      type: "example",
      title: "Practical example: switching on and off properly 🔌",
      html: `<p>A computer must be treated with care. Here are the golden rules:</p>
<ul>
<li>🔘 To switch on, press the <b>power button</b> and wait until it is ready.</li>
<li>💾 Before closing, <b>save</b> your work.</li>
<li>⏻ To switch off, use the <b>Shut down</b> command on the screen: do not pull out the plug!</li>
<li>🥤 No drinks near the keyboard.</li>
<li>🪑 Sit with your back straight, the screen in front of your eyes, and take a <b>break</b> every now and then to rest your eyes 👀.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Find the parts of the computer",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<rect x="150" y="30" width="260" height="160" rx="10" fill="#1e293b"/>
<rect x="163" y="43" width="234" height="134" rx="4" fill="#a7f3d0"/>
<rect x="265" y="190" width="30" height="25" fill="#475569"/>
<rect x="150" y="235" width="250" height="50" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
<ellipse cx="460" cy="260" rx="22" ry="30" fill="#f8fafc" stroke="#475569" stroke-width="3"/>
<rect x="30" y="80" width="80" height="190" rx="8" fill="#334155"/>
<rect x="470" y="40" width="100" height="70" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="3"/>
<rect x="490" y="25" width="60" height="18" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="268" y="8" width="24" height="14" rx="4" fill="#0f172a"/>
</svg>`,
        spots: [
          { x: 280, y: 110, label: "Screen" },
          { x: 275, y: 260, label: "Keyboard" },
          { x: 460, y: 260, label: "Mouse" },
          { x: 70, y: 175, label: "System unit" },
          { x: 520, y: 75, label: "Printer" },
          { x: 280, y: 15, label: "Webcam" }
        ]
      },
      caption: "Click each spot and choose the right name."
    },
    {
      type: "curiosity",
      title: "Did you know…? 🐘",
      html: `<p>One of the first computers, <b>ENIAC</b>, was switched on in the United States in <b>1946</b>. It weighed about <b>27 tonnes</b> (like 4 elephants!) and filled a room of about 170 square metres, as big as three school classrooms. Yet it did fewer calculations than the smartphone you have at home!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 🇮🇹",
      html: `<p>One of the first <b>desktop computers</b> in history is <b>Italian</b>! It was called the <b>Programma 101</b> and was built by <b>Olivetti</b> of Ivrea, in Piedmont, and presented in New York in <b>1965</b>. NASA, the American space agency, used it too. And the first <b>mouse</b>, invented by Douglas Engelbart in 1964, was a little <b>wooden</b> box with two wheels! 🖱️</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the computer",
      intro: "Does the computer seem mysterious? Try imagining it in another way!",
      tabs: [
        {
          label: "👩‍🍳 The computer is a kitchen",
          html: `<p>Imagine a <b>cook</b> in a kitchen:</p>
<ul>
<li>👩‍🍳 the <b>cook</b> is the <b>processor</b>: it works and prepares;</li>
<li>🍽️ the <b>worktop</b> is the <b>RAM</b>: you put on it only what you are using right now. When you close the kitchen, the worktop is cleared;</li>
<li>🗄️ the <b>pantry</b> is the <b>disk</b>: there you keep everything, even for months;</li>
<li>📝 the customers' <b>orders</b> are the <b>input</b> (keyboard, mouse);</li>
<li>🍝 the <b>finished dish</b> is the <b>output</b> (screen, printer).</li>
</ul>
<p>The bigger the worktop (RAM), the more things the cook can prepare at once!</p>`
        },
        {
          label: "🧍 The computer is like the body",
          html: `<p>Our body works with <b>input → processing → output</b> too!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<circle cx="300" cy="70" r="45" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<circle cx="283" cy="62" r="6" fill="#0f172a"/>
<circle cx="317" cy="62" r="6" fill="#0f172a"/>
<path d="M285 90 Q300 102 315 90" stroke="#7c2d12" stroke-width="4" fill="none"/>
<rect x="265" y="118" width="70" height="100" rx="12" fill="#60a5fa"/>
<text x="120" y="50" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">eyes = webcam</text>
<text x="120" y="80" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">ears = microphone</text>
<text x="120" y="110" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">fingers = keyboard</text>
<text x="300" y="245" font-size="16" text-anchor="middle" fill="#b45309" font-weight="bold">brain = processor + memory</text>
<text x="480" y="60" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">mouth = speakers</text>
<text x="480" y="90" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">drawing hand</text>
<text x="480" y="112" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">= printer</text>
<text x="120" y="150" font-size="18" text-anchor="middle" fill="#15803d">INPUT</text>
<text x="480" y="150" font-size="18" text-anchor="middle" fill="#1d4ed8">OUTPUT</text>
</svg>`
        },
        {
          label: "💡 The language of light bulbs",
          html: `<p>Inside, the computer understands only <b>two things</b>: current <b>on</b> (1) or <b>off</b> (0). Like a row of light bulbs!</p>
<p>With lots of bulbs switched on and off you can write numbers, letters, colours. Each bulb is called a <b>bit</b>. With 8 bulbs (8 bits = 1 <b>byte</b>) you can write a letter.</p>
<p>Try it: move the blocks below. Each block is a piece of information the computer keeps in memory: memory is like an enormous warehouse of blocks that are on and off!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 8, b: 4 }
        },
        {
          label: "🎮 Game: who does what?",
          html: `<p>Match each part with its job.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Keyboard", "typing"],
              ["Mouse", "moving the arrow and clicking"],
              ["Screen", "seeing"],
              ["Speakers", "hearing"],
              ["Processor", "doing the calculations"],
              ["Disk", "keeping things for ever"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: how the computer works",
      nodes: [
        { id: "computer", label: "Computer", x: 50, y: 6, color: "#6366f1", html: "<p>A machine that receives, processes and returns information.</p>", why: "<p>The word comes from the English <i>to compute</i>, “to calculate”, which comes from the Latin <i>computare</i>. At first computers were only used to do very difficult calculations, for example for science.</p>" },
        { id: "input", label: "Input", x: 15, y: 32, color: "#22c55e", html: "<p>Keyboard, mouse, microphone, webcam, touch.</p>", why: "<p>The computer knows nothing by itself: it needs someone to give it information. The <b>keyboard</b> comes from the old typewriters of the 1800s: that is why the letters are in “QWERTY” order and not alphabetical.</p>" },
        { id: "cpu", label: "Processor (CPU)", x: 50, y: 32, color: "#f59e0b", html: "<p>The brain that does the calculations.</p>", why: "<p>It is made of billions of tiny switches called <b>transistors</b>, invented in 1947. The first microprocessor, in 1971, was also designed by an Italian: <b>Federico Faggin</b>.</p>" },
        { id: "output", label: "Output", x: 85, y: 32, color: "#3b82f6", html: "<p>Screen, speakers, headphones, printer.</p>", why: "<p>The result of the work has to come back to us in a form our senses understand: images for the eyes, sounds for the ears, sheets we can touch.</p>" },
        { id: "ram", label: "RAM", x: 30, y: 62, color: "#a855f7", html: "<p>“For now” memory: it is erased when you switch off.</p>", why: "<p>RAM is very fast but needs electric current to remember: without current, the switches inside it all go back to off.</p>" },
        { id: "disco", label: "Disk", x: 70, y: 62, color: "#ec4899", html: "<p>“For ever” memory: it keeps files even when switched off.</p>", why: "<p>The disk stores information so that it stays even without current: once on spinning magnetic disks, today often on special chips (SSD), like in USB sticks.</p>" },
        { id: "salvare", label: "Saving", x: 50, y: 82, color: "#14b8a6", html: "<p>Moving the work from the RAM to the disk.</p>", why: "<p>If you do not save and the power goes out, everything that was only in the RAM is lost. That is why the “save” symbol is an old <b>floppy disk</b> 💾.</p>" },
        { id: "bit", label: "Bits: 0 and 1", x: 50, y: 97, color: "#64748b", html: "<p>The computer understands only on (1) and off (0).</p>", why: "<p>With only two symbols you can write any number: the German mathematician <b>Leibniz</b> showed this as early as 1703, long before computers existed.</p>" }
      ],
      edges: [
        ["computer", "input", "receives from the"],
        ["computer", "cpu", "processes with the"],
        ["computer", "output", "returns with the"],
        ["input", "cpu", "→"],
        ["cpu", "output", "→"],
        ["cpu", "ram", "uses the"],
        ["ram", "salvare", "with the command"],
        ["salvare", "disco", "goes onto the"],
        ["cpu", "bit", "works with"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: memory",
      questions: [
        { type: "mc", q: "Which memory is erased when you switch off the computer?", options: ["The RAM", "The disk", "None"], answer: 0, explain: "The RAM is the “for now” memory." },
        { type: "tf", q: "If I save the drawing, I will find it again tomorrow.", answer: true, explain: "By saving, the drawing goes onto the disk, the “for ever” memory." },
        { type: "order", q: "Put in order how the computer works.", items: ["Input", "Processing", "Output"], explain: "First it receives, then it processes, then it gives the result." }
      ]
    },
    {
      type: "remember",
      title: "Remember 📌",
      html: `<ul>
<li>The computer works in 3 steps: <b>input → processing → output</b>.</li>
<li>Input: <b>keyboard, mouse, microphone, webcam</b>.</li>
<li>Output: <b>screen, speakers, printer</b>.</li>
<li>The <b>processor</b> is the brain; the <b>RAM</b> is the “for now” memory, the <b>disk</b> the “for ever” one.</li>
<li>Remember to <b>save</b> and to switch off with the right command!</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Computer", d: "A machine that receives information, processes it and gives a result." },
    { t: "Keyboard", d: "An input part with keys for typing." },
    { t: "Mouse", d: "An input part that moves the arrow on the screen." },
    { t: "Screen (monitor)", d: "An output part that shows images and writing." },
    { t: "Processor (CPU)", d: "The “brain” of the computer, which does the calculations." },
    { t: "RAM", d: "Fast memory that is erased when the computer is switched off." },
    { t: "Disk", d: "Memory that keeps files even when the computer is off." },
    { t: "Input / Output", d: "Information going in / coming out." },
    { t: "Save", d: "To keep your work in the “for ever” memory." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these is an INPUT part?", options: ["Printer", "Mouse", "Speakers"], answer: 1, explain: "The mouse sends our commands into the computer." },
      { type: "mc", q: "Which of these is an OUTPUT part?", options: ["Screen", "Keyboard", "Microphone"], answer: 0, explain: "The screen shows us the result." },
      { type: "text", q: "What is the “brain” of the computer called?", answer: ["processor", "cpu", "the processor", "the cpu"], explain: "The processor, or CPU." },
      { type: "order", q: "Put the 3 steps of the computer in order.", items: ["Input", "Processing", "Output"], explain: "It receives, processes, returns." },
      { type: "tf", q: "The RAM keeps files even when the computer is off.", answer: false, explain: "The RAM is erased; it is the disk that keeps files." },
      { type: "mc", q: "What must you do before closing a drawing?", options: ["Save it", "Pull out the plug", "Switch off the screen"], answer: 0, explain: "By saving it you will find it again next time." },
      { type: "mc", q: "What do you hear the computer's music with?", options: ["The webcam", "The speakers or headphones", "The mouse"], answer: 1, explain: "Speakers and headphones are output parts for sounds." },
      { type: "tf", q: "The microphone lets the voice into the computer.", answer: true, explain: "It is an input part." },
      { type: "mc", q: "How do you switch off a computer correctly?", options: ["By pulling out the plug", "With the Shut down command", "By slamming the screen shut"], answer: 1, explain: "The Shut down command closes everything in an orderly way." },
      { type: "text", q: "What is the part with keys for typing called?", answer: ["keyboard", "the keyboard"], explain: "The keyboard." },
      { type: "mc", q: "What was the Italian desktop computer of 1965 called?", options: ["Programma 101", "ENIAC", "Super Mario"], answer: 0, explain: "The Programma 101 by Olivetti." }
    ]
  }
});
