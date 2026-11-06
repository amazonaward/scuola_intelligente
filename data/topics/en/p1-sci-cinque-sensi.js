TOPIC('en', {
  id: "p1-sci-cinque-sensi",
  title: "The five senses",
  intro: "How do we know that ice cream is cold 🍦, that the sun is bright ☀️ or that Mum is calling us? Thanks to our <b>five senses</b>! They are like five «windows» that our body opens onto the world.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "What are the senses?",
      html: "<p>The <b>senses</b> help us get to know everything around us.</p>" +
        "<p>Each sense has its own <b>organ</b>, the part of the body that works for it:</p>" +
        "<ul><li>👀 <b>Sight</b> → the <b>eyes</b>: we see colours, shapes, light.</li>" +
        "<li>👂 <b>Hearing</b> → the <b>ears</b>: we hear sounds and noises.</li>" +
        "<li>👃 <b>Smell</b> → the <b>nose</b>: we smell odours and scents.</li>" +
        "<li>👅 <b>Taste</b> → the <b>tongue</b>: we taste flavours.</li>" +
        "<li>✋ <b>Touch</b> → the <b>skin</b>: we feel hot, cold, soft, rough.</li></ul>" +
        "<p>All the information goes to the <b>brain</b> 🧠, which understands it.</p>"
    },
    {
      type: "svg",
      title: "The senses and their organs",
      svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="320" fill="#f0f9ff"/>' +
        '<circle cx="300" cy="150" r="95" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
        '<path d="M210 120 Q300 30 390 120" fill="#7c2d12"/>' +
        '<ellipse cx="265" cy="135" rx="14" ry="10" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="265" cy="135" r="6" fill="#1e3a8a"/>' +
        '<ellipse cx="335" cy="135" rx="14" ry="10" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="335" cy="135" r="6" fill="#1e3a8a"/>' +
        '<path d="M300 145 L290 175 L305 178" fill="none" stroke="#c2410c" stroke-width="3"/>' +
        '<path d="M270 200 Q300 225 330 200" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>' +
        '<ellipse cx="203" cy="155" rx="12" ry="22" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
        '<ellipse cx="397" cy="155" rx="12" ry="22" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
        '<g font-size="20" font-weight="bold">' +
        '<line x1="250" y1="130" x2="90" y2="60" stroke="#2563eb" stroke-width="2"/><text x="20" y="55" fill="#2563eb">👀 SIGHT</text>' +
        '<line x1="410" y1="155" x2="480" y2="70" stroke="#9333ea" stroke-width="2"/><text x="455" y="60" fill="#9333ea">👂 HEARING</text>' +
        '<line x1="295" y1="170" x2="110" y2="200" stroke="#16a34a" stroke-width="2"/><text x="10" y="210" fill="#16a34a">👃 SMELL</text>' +
        '<line x1="320" y1="210" x2="470" y2="250" stroke="#dc2626" stroke-width="2"/><text x="455" y="275" fill="#dc2626">👅 TASTE</text>' +
        '<text x="200" y="300" fill="#ea580c">✋ TOUCH: all over the skin!</text>' +
        '</g></svg>',
      caption: "Each sense has its own organ. Touch is everywhere: all over the skin!"
    },
    {
      type: "widget",
      title: "Find the right organ",
      widget: "labelDiagram",
      options: {
        svg: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="400" height="300" fill="#fffbeb"/>' +
          '<circle cx="200" cy="140" r="100" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
          '<path d="M105 110 Q200 10 295 110" fill="#713f12"/>' +
          '<circle cx="160" cy="125" r="12" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="160" cy="125" r="6" fill="#1e3a8a"/>' +
          '<circle cx="240" cy="125" r="12" fill="#fff" stroke="#333" stroke-width="2"/><circle cx="240" cy="125" r="6" fill="#1e3a8a"/>' +
          '<path d="M200 135 L188 170 L205 172" fill="none" stroke="#c2410c" stroke-width="3"/>' +
          '<path d="M165 200 Q200 230 235 200 Z" fill="#7f1d1d"/><ellipse cx="200" cy="212" rx="18" ry="9" fill="#f87171"/>' +
          '<ellipse cx="98" cy="145" rx="12" ry="24" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
          '<ellipse cx="302" cy="145" rx="12" ry="24" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>' +
          '</svg>',
        spots: [
          { x: 160, y: 125, label: "Eye – sight" },
          { x: 302, y: 145, label: "Ear – hearing" },
          { x: 195, y: 160, label: "Nose – smell" },
          { x: 200, y: 212, label: "Tongue – taste" },
          { x: 250, y: 75, label: "Skin – touch" }
        ]
      },
      caption: "Click on each point and choose the right name."
    },
    {
      type: "example",
      title: "Example: snack time with all 5 senses 🍊",
      html: "<p>Take an orange and use all your senses:</p>" +
        "<ul><li>👀 You look at it: it is <b>orange</b> and <b>round</b>.</li>" +
        "<li>✋ You touch it: the peel is a little <b>rough</b>.</li>" +
        "<li>👃 You sniff it: it has a fresh <b>scent</b>.</li>" +
        "<li>👂 You peel it: you hear a small <b>«crack»</b>.</li>" +
        "<li>👅 You taste it: it is <b>sweet</b> and a bit <b>sour</b>.</li></ul>"
    },
    {
      type: "quiz",
      title: "Mini-quiz: who does what?",
      questions: [
        { type: "mc", q: "Which organ do you use to hear music? 🎵", options: ["Eyes", "Ears", "Nose"], answer: 1, explain: "Music is a sound: we hear it with our ears (hearing)." },
        { type: "mc", q: "Which sense tells you the pillow is soft?", options: ["Touch", "Taste", "Sight"], answer: 0, explain: "We feel soft or hard by touching: it's touch." },
        { type: "tf", q: "The nose is used to smell odours.", answer: true, explain: "Yes! Smell works with the nose." }
      ]
    },
    {
      type: "text",
      title: "Taste and touch: lots of sensations",
      html: "<p>The tongue recognises different tastes: <b>sweet</b> 🍬, <b>salty</b> 🥨, <b>sour</b> 🍋, <b>bitter</b> ☕ and <b>umami</b> (the «savoury» taste, like parmesan cheese 🧀).</p>" +
        "<p>With our skin we feel whether something is <b>hot</b> 🔥 or <b>cold</b> ❄️, <b>smooth</b> or <b>rough</b>, <b>soft</b> or <b>hard</b>, and also if something <b>hurts</b>.</p>"
    },
    {
      type: "widget",
      title: "Game: which sense do I use?",
      widget: "classify",
      options: {
        groups: ["👀 Sight", "👂 Hearing", "👅 Taste"],
        items: [
          ["🌈 the colours of the rainbow", 0],
          ["🐶 the barking dog", 1],
          ["🍋 the sour lemon", 2],
          ["⭐ the stars at night", 0],
          ["🔔 the doorbell", 1],
          ["🍯 sweet honey", 2],
          ["🥁 the drum", 1],
          ["🧂 the salty crisp", 2]
        ]
      },
      caption: "Put each thing in the group of the right sense."
    },
    {
      type: "remember",
      title: "Let's protect our senses",
      html: "<ul><li>Never look straight at the sun 🕶️.</li>" +
        "<li>Don't listen to music too loud 🔊.</li>" +
        "<li>Don't put objects in your nose or ears.</li>" +
        "<li>Always wash your hands and brush your teeth 🪥.</li></ul>"
    },
    {
      type: "example",
      title: "Example: our senses protect us 🚒",
      html: "<p>If you <b>smell burning</b> 👃, you understand something is on the fire. If you hear the fire engine's <b>siren</b> 👂, you move out of the way. If you touch a pan and feel it is <b>hot</b> ✋, you pull your hand away at once. The senses are our <b>guardians</b>!</p>"
    },
    {
      type: "curiosity",
      title: "Did you know…? 🐕",
      html: "<p><b>Dogs</b> have a super-strong sense of smell: they smell things much, much better than we do. That's why dogs help rescue teams find people!</p>"
    },
    {
      type: "curiosity",
      title: "Did you know…? 👃👅",
      html: "<p>When you have a cold, food seems to have no taste. This happens because <b>taste and smell work together</b>: if your nose is blocked, the tongue on its own understands less!</p>"
    },
    {
      type: "3d",
      title: "Inside the eye in 3D 👁️",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#f8fafc", label: "Sclera (the white of the eye)" },
        { r: 0.93, color: "#7c2d12", label: "Choroid (carries blood)" },
        { r: 0.87, color: "#f472b6", label: "Retina (senses light)" },
        { r: 0.82, color: "#bae6fd", label: "Vitreous body (clear jelly)" }
      ] },
      caption: "The eye is a ball about as big as a large marble. We have cut out a slice to look inside. At the front (not visible here) are the pupil, the black hole that lets light in, and the iris, the coloured part."
    },
    {
      type: "alternatives",
      title: "Other ways to understand the senses 🌈",
      intro: "<p>The senses are easier to understand when you try them out! Choose a way.</p>",
      tabs: [
        {
          label: "📬 The postman brain",
          html: "<p>Imagine the body as a town. The <b>sense organs</b> (eyes, ears, nose, tongue, skin) are the <b>letterboxes</b>: they receive news from the world.</p><p>The <b>nerves</b> are the <b>postmen</b>: they run super fast to carry messages to the <b>brain</b>, which is the boss and decides: «It's hot, move your hand!»</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f5f3ff"/><ellipse cx="480" cy="110" rx="90" ry="70" fill="#f9a8d4" stroke="#9d174d" stroke-width="3"/><text x="480" y="118" font-size="24" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#831843">🧠 Brain</text><g font-size="34" text-anchor="middle"><text x="60" y="50">👁️</text><text x="60" y="100">👂</text><text x="60" y="150">👃</text><text x="60" y="200">👅</text><text x="140" y="225">✋</text></g><g stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 6" fill="none"><path d="M90 40 Q250 30 390 90"/><path d="M90 90 Q250 90 390 105"/><path d="M90 140 Q250 140 390 120"/><path d="M90 190 Q250 180 395 135"/><path d="M165 215 Q300 220 410 150"/></g><text x="250" y="120" font-size="30" text-anchor="middle">🏃‍♂️📩</text><text x="240" y="160" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#5b21b6">nerves carry the messages</text></svg>`
        },
        {
          label: "🧪 Experiment: blocked nose",
          html: "<p>Try it with an adult: close your eyes and <b>hold your nose</b>. Ask for a small piece of apple and one of raw potato. Can you tell which is which?</p><p>It's really hard! Because <b>taste</b> and <b>smell</b> work as a team: a big part of «flavour» is sensed by the nose.</p><p>That's why, when you have a cold, food seems to taste of nothing.</p>"
        },
        {
          label: "🎵 Sound that shakes",
          html: "<p>Put your hand on your throat and say «Aaaa»: do you feel a <b>trembling</b>? Sound is made of <b>vibrations</b> that travel through the air to your ears.</p><p>Try with a stretched rubber band too: pluck it, it shakes and makes a sound! The faster it shakes, the higher the sound.</p>"
        },
        {
          label: "🐾 Animal super-senses",
          html: "<p>Let's compare our senses with those of animals:</p><ul><li>🐶 <b>Dogs</b> smell things thousands of times better than we do.</li><li>🦅 <b>Eagles</b> can see a rabbit from very far away.</li><li>🦇 <b>Bats</b> «see» with their ears: they send out sounds and listen to the echo.</li><li>🐍 Some <b>snakes</b> can feel the heat of nearby animals.</li></ul><p>Every animal has the senses it needs to live in its environment.</p>"
        },
        {
          label: "👂 Why two?",
          html: "<p>Close one eye and try to touch, with your finger, the tip of a pencil held by a friend: it's harder! With <b>two eyes</b> we can tell how far away things are: we see in <b>3D</b>.</p><p>Our <b>two ears</b> are useful too: sound reaches the closer ear first, and so the brain works out where it comes from.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "The map of the senses 🗺️",
      nodes: [
        { id: "mondo", label: "The world around us", x: 50, y: 6, color: "#f59e0b", html: "<p>Lights, sounds, scents, flavours, hot or cold things: the world sends us lots and lots of information.</p>", why: "<p>To survive, every living thing has to understand what is around it: find food, run away from danger, recognise friends.</p>" },
        { id: "vista", label: "Sight – eyes", x: 10, y: 35, color: "#3b82f6", html: "<p>The <b>eyes</b> receive <b>light</b> and let us see shapes, colours and movements.</p>", why: "<p>In the dark we can't see because without light nothing reaches the eyes. Light comes in through the pupil and reaches the retina, at the back of the eye.</p>" },
        { id: "udito", label: "Hearing – ears", x: 30, y: 35, color: "#8b5cf6", html: "<p>The <b>ears</b> collect <b>sounds</b>.</p>", why: "<p>Sounds are vibrations of the air. Inside the ear there is the eardrum, a thin skin that vibrates like the skin of a drum.</p>" },
        { id: "olfatto", label: "Smell – nose", x: 50, y: 35, color: "#22c55e", html: "<p>The <b>nose</b> smells <b>odours</b>.</p>", why: "<p>Smells are tiny tiny particles flying in the air. When you breathe they go into your nose and it recognises them.</p>" },
        { id: "gusto", label: "Taste – tongue", x: 70, y: 35, color: "#ef4444", html: "<p>The <b>tongue</b> recognises <b>tastes</b>: sweet, salty, sour, bitter.</p>", why: "<p>On the tongue there are taste buds. Taste helps us tell if food is good or if it has gone off.</p>" },
        { id: "tatto", label: "Touch – skin", x: 90, y: 35, color: "#f97316", html: "<p>The <b>skin</b> feels hot, cold, soft, rough and pain.</p>", why: "<p>Skin covers the whole body: it is our biggest organ! Pain is useful because it warns us of danger.</p>" },
        { id: "nervi", label: "The nerves", x: 50, y: 65, color: "#a855f7", html: "<p><b>Nerves</b> are like wires that carry messages from the sense organs to the brain.</p>", why: "<p>Messages travel super fast: that's why you pull your hand away at once if you touch something burning hot.</p>" },
        { id: "cervello", label: "The brain", x: 50, y: 90, color: "#ec4899", html: "<p>The <b>brain</b> receives all the messages, understands them and decides what to do.</p>", why: "<p>The eyes receive light, but it's the brain that «sees»: it puts the information together and tells us what we are looking at.</p>" }
      ],
      edges: [
        ["mondo", "vista", "light"],
        ["mondo", "udito", "sounds"],
        ["mondo", "olfatto", "smells"],
        ["mondo", "gusto", "flavours"],
        ["mondo", "tatto", "contact"],
        ["vista", "nervi", ""],
        ["udito", "nervi", ""],
        ["olfatto", "nervi", ""],
        ["gusto", "nervi", ""],
        ["tatto", "nervi", ""],
        ["olfatto", "gusto", "a team"],
        ["nervi", "cervello", "carry the messages"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: tastes and sensations",
      questions: [
        { type: "mc", q: "What does a lemon taste like? 🍋", options: ["Sweet", "Sour", "Salty"], answer: 1, explain: "Lemon is sour." },
        { type: "tf", q: "Touch only works with our hands.", answer: false, explain: "No: touch works with all the skin of the body." },
        { type: "mc", q: "Which animal has a super-strong sense of smell?", options: ["The dog", "The goldfish", "The butterfly"], answer: 0, explain: "Dogs smell things much better than we do." }
      ]
    }
  ],
  glossary: [
    { t: "Sense", d: "An ability of the body that lets us know the world." },
    { t: "Sense organ", d: "The part of the body that works for a sense (eyes, ears, nose, tongue, skin)." },
    { t: "Sight", d: "The sense that uses the eyes." },
    { t: "Hearing", d: "The sense that uses the ears." },
    { t: "Smell", d: "The sense that uses the nose." },
    { t: "Taste", d: "The sense that uses the tongue." },
    { t: "Touch", d: "The sense that uses the skin." },
    { t: "Brain", d: "The part of the body that receives and understands the messages from the senses." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "How many senses are there?", answer: 5, explain: "Sight, hearing, smell, taste and touch: 5." },
      { type: "mc", q: "Which organ do you see colours with?", options: ["Ears", "Eyes", "Tongue"], answer: 1, explain: "Sight works with the eyes." },
      { type: "mc", q: "You smell the scent of flowers 🌸 with…", options: ["your nose", "your tongue", "your skin"], answer: 0, explain: "Smells are sensed with the nose." },
      { type: "mc", q: "Ice cream is cold ❄️. Which sense tells you?", options: ["Hearing", "Touch", "Sight"], answer: 1, explain: "Hot and cold are felt with the skin: it's touch." },
      { type: "tf", q: "The tongue is used for taste.", answer: true, explain: "Yes, the tongue recognises tastes." },
      { type: "tf", q: "You can look at the sun with no problem.", answer: false, explain: "No! The sun hurts your eyes." },
      { type: "mc", q: "What does sugar taste like?", options: ["Bitter", "Salty", "Sweet"], answer: 2, explain: "Sugar is sweet." },
      { type: "text", q: "What is the name of the sense that uses the ears?", answer: ["hearing", "the hearing"], explain: "It's hearing." },
      { type: "mc", q: "Who receives the messages from the senses?", options: ["The heart", "The brain", "The tummy"], answer: 1, explain: "The messages from the senses go to the brain." },
      { type: "tf", q: "When you have a cold, food seems to have less taste.", answer: true, explain: "True: taste and smell work together." }
    ]
  }
});
