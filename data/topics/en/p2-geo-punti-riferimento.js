TOPIC('en', {
  id: "p2-geo-punti-riferimento",
  title: "Landmarks",
  intro: "How do you avoid getting lost when you go to school or to the park? 🤔 You use <b>landmarks</b>: things you see around you that help you understand <b>where you are</b> and <b>where to go</b>. Today we learn how to <b>find our way</b> 🧭.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "What is a landmark? 📍",
      html: `<p>A <b>landmark</b> is something that is easy to see and that <b>does not move</b>.</p>
<p>For example, to go to grandma's house: <i>“I pass in front of the <b>fountain</b> ⛲, turn near the <b>pharmacy</b> ➕ and the house is the one with the <b>green door</b> 🟩.”</i></p>
<p>A good landmark is:</p>
<ul>
<li>👀 <b>easy to see</b> (big, colourful, tall);</li>
<li>🧱 <b>fixed</b>: it always stays there;</li>
<li>⭐ <b>special</b>: there are not many identical ones nearby.</li>
</ul>
<p><b>Finding your way</b> (orienting yourself) means understanding where you are and which road to take.</p>`
    },
    {
      type: "text",
      title: "Fixed or movable? 🌳🚗",
      html: `<p>Careful: not everything works as a landmark!</p>
<table>
<tr><th>✅ Fixed (good)</th><th>❌ Movable (not good)</th></tr>
<tr><td>⛪ a church</td><td>🚗 a parked car</td></tr>
<tr><td>🌳 a big tree</td><td>🐕 a sleeping dog</td></tr>
<tr><td>⛲ a fountain</td><td>🚌 the bus</td></tr>
<tr><td>🏔️ a mountain</td><td>☁️ a cloud</td></tr>
<tr><td>🏫 the school</td><td>🧑 a man sitting on the bench</td></tr>
</table>
<p>If I say <i>“Turn where the red car is”</i> and the car drives away… I get lost! 😵</p>`
    },
    {
      type: "widget",
      title: "Game: fixed or movable?",
      widget: "classify",
      options: {
        groups: ["🧱 Fixed: good landmark", "🚶 Movable: not good"],
        items: [
          ["⛪ bell tower", 0],
          ["🚲 bicycle", 1],
          ["🌉 bridge", 0],
          ["🐈 cat", 1],
          ["🏰 castle", 0],
          ["🚚 lorry", 1],
          ["🗼 tower", 0],
          ["🎈 balloon", 1],
          ["🚦 traffic light", 0]
        ]
      },
      caption: "Put each thing in the right group."
    },
    {
      type: "text",
      title: "Words for finding your way ↔️↕️",
      html: `<p>To explain where something is, we use <b>position words</b>. They depend on <b>who is looking</b>!</p>
<ul>
<li>⬆️⬇️ <b>above</b> / <b>below</b>: the picture is <i>above</i> the blackboard.</li>
<li>➡️⬅️ <b>in front of</b> / <b>behind</b>: the garden is <i>behind</i> the school.</li>
<li>👈👉 <b>on the left</b> / <b>on the right</b>: the door is <i>on my right</i>.</li>
<li>🤏📏 <b>near</b> / <b>far</b>: the café is <i>near</i> my house.</li>
<li>🎯 <b>in the middle</b> / <b>between</b>: the bench is <i>between</i> two trees.</li>
</ul>
<p>💡 <b>Trick for the right side:</b> the right hand is usually the one you write with (if you are left-handed, it is the other one!). Many children wear a bracelet on their right wrist.</p>`
    },
    {
      type: "svg",
      title: "Where is it? Look at the picture",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bae6fd"/>
<rect y="230" width="600" height="90" fill="#86efac"/>
<rect x="230" y="110" width="150" height="120" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<polygon points="220,110 305,50 390,110" fill="#b91c1c"/>
<rect x="290" y="170" width="35" height="60" fill="#7c2d12"/>
<text x="305" y="150" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">SCHOOL</text>
<rect x="95" y="160" width="16" height="70" fill="#78350f"/>
<circle cx="103" cy="140" r="40" fill="#16a34a"/>
<text x="103" y="265" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">tree</text>
<circle cx="490" cy="215" r="28" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="484" y="170" width="12" height="30" fill="#64748b"/>
<text x="490" y="265" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">fountain</text>
<circle cx="520" cy="50" r="28" fill="#facc15"/>
<text x="520" y="100" font-size="16" text-anchor="middle" fill="#92400e" font-weight="bold">sun</text>
<rect x="400" y="280" width="60" height="22" rx="5" fill="#a16207"/>
<text x="430" y="297" font-size="13" text-anchor="middle" fill="#ffffff">bench</text>
<text x="160" y="300" font-size="17" text-anchor="middle" fill="#0f172a">The tree is to the LEFT of the school</text>
</svg>`,
      caption: "Looking at the picture: the tree is to the left of the school, the fountain to the right, the sun above the fountain."
    },
    {
      type: "quiz",
      title: "Mini-quiz: look at the picture",
      questions: [
        { type: "mc", q: "In the picture, what is to the right of the school?", options: ["The tree", "The fountain", "Nothing"], answer: 1, explain: "The fountain is to the right of the school." },
        { type: "tf", q: "A parked car is a good landmark.", answer: false, explain: "Cars move: it is not a fixed point." },
        { type: "mc", q: "Which word is the opposite of “near”?", options: ["below", "far", "behind"], answer: 1, explain: "Near ↔ far." }
      ]
    },
    {
      type: "text",
      title: "The Sun: a landmark in the sky ☀️",
      html: `<p>The sky helps us find our way too!</p>
<ul>
<li>🌅 In the morning the Sun <b>rises</b> (appears) in a direction called <b>EAST</b>.</li>
<li>🌞 At noon it is high towards the <b>SOUTH</b>.</li>
<li>🌇 In the evening it <b>sets</b> on the opposite side, in the <b>WEST</b>.</li>
<li>🧊 Behind us, when we look at the midday Sun, is the <b>NORTH</b>.</li>
</ul>
<p>North, South, East and West are the <b>cardinal points</b>. They are the same for everyone, all over the world: that is why they are more precise than “right” and “left”.</p>
<p>🧭 The <b>compass</b> has a magnetic needle that always points to the <b>North</b>.</p>`
    },
    {
      type: "svg",
      title: "The compass rose",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fefce8"/>
<circle cx="300" cy="160" r="120" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<polygon points="300,45 318,160 300,175 282,160" fill="#dc2626"/>
<polygon points="300,275 318,160 300,145 282,160" fill="#1e3a8a"/>
<polygon points="185,160 300,142 315,160 300,178" fill="#64748b"/>
<polygon points="415,160 300,142 285,160 300,178" fill="#f59e0b"/>
<circle cx="300" cy="160" r="8" fill="#0f172a"/>
<text x="300" y="30" font-size="22" text-anchor="middle" fill="#dc2626" font-weight="bold">N - North</text>
<text x="300" y="305" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">S - South</text>
<text x="490" y="168" font-size="22" text-anchor="middle" fill="#b45309" font-weight="bold">E - East</text>
<text x="105" y="168" font-size="22" text-anchor="middle" fill="#475569" font-weight="bold">W - West</text>
<text x="530" y="210" font-size="15" text-anchor="middle" fill="#b45309">the Sun rises</text>
<text x="80" y="210" font-size="15" text-anchor="middle" fill="#475569">the Sun sets</text>
</svg>`,
      caption: "The compass rose shows the 4 cardinal points. The red needle of the compass points to the North."
    },
    {
      type: "example",
      title: "Practical example: the way to school 🎒",
      html: `<p>Sara describes her route using landmarks:</p>
<ol>
<li>🏠 I leave home and walk towards the <b>bakery</b> 🥖.</li>
<li>➡️ At the bakery I turn <b>right</b>.</li>
<li>⛲ I walk straight to the <b>fountain</b> in the square.</li>
<li>⬅️ At the fountain I turn <b>left</b>.</li>
<li>🏫 The school is <b>in front of</b> me, next to the <b>church</b> ⛪.</li>
</ol>
<p>Try it yourself: write the route from your home to school with at least <b>3 landmarks</b>!</p>`
    },
    {
      type: "example",
      title: "Practical example: lost at the playground 🎠",
      html: `<p>Luca has wandered away from his mum and cannot see her any more. What does he do?</p>
<ul>
<li>😮‍💨 He stops and breathes.</li>
<li>👀 He looks for a <b>landmark</b> he knows: the big <b>yellow slide</b>, near where they had been sitting.</li>
<li>🚶 He goes back towards the slide and waits there.</li>
</ul>
<p>💡 A tip: when you arrive in a new place, choose an easy-to-see <b>meeting point</b> with your parents (“we meet under the big clock”).</p>`
    },
    {
      type: "3d",
      title: "Landmarks in nature 🏞️",
      scene: "terrain",
      caption: "Rotate the landscape and tap the parts: they are natural landmarks, big and fixed.",
      options: {
        features: {
          mountain: { label: "Mountain", html: "It can be seen from very far away and never moves: a perfect landmark. People who live in Turin, for example, can see the Alps and Monviso." },
          peak: { label: "Peak", html: "The tip of the mountain. Hikers use it to understand which direction to walk in." },
          river: { label: "River", html: "Following a river you reach the sea or a lake. Many cities were born along rivers: “I live on this side of the river or on that side”." },
          lake: { label: "Lake", html: "A large stretch of still fresh water: easy to recognise even from above." },
          hill: { label: "Hill", html: "Lower than a mountain. Often on hills there is a castle or a church that can be seen from far away." },
          valley: { label: "Valley", html: "The low part between two mountains. Often there is a river and the main road goes through it." },
          sea: { label: "Sea", html: "On the coast the sea is an excellent landmark: “the beach is that way”." }
        }
      }
    },
    {
      type: "curiosity",
      title: "Did you know…? 🗿",
      html: `<p>In the Far North of Canada, where there is only snow and ice and everything looks the same, the <b>Inuit</b> people build <b>inukshuk</b>: piles of stones shaped like a person. They work as <b>landmarks</b> to show the way, a good place to fish or a danger.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 🐝",
      html: `<p>Animals use landmarks too! <b>Bees</b> remember trees and houses to return to the hive and use the <b>Sun</b> as a compass. <b>Homing pigeons</b> can find their way home from hundreds of kilometres away, helped by the Sun, by the Earth's magnetic field and by rivers and roads that they see from above.</p>`
    },
    {
      type: "widget",
      title: "Find the landmarks on the plan",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<rect x="0" y="130" width="600" height="40" fill="#9ca3af"/>
<rect x="280" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="60" y="40" width="120" height="70" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<rect x="400" y="30" width="80" height="80" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<circle cx="440" cy="70" r="12" fill="#92400e"/>
<circle cx="300" cy="150" r="22" fill="#60a5fa" stroke="#1e40af" stroke-width="3"/>
<circle cx="120" cy="230" r="35" fill="#16a34a"/>
<rect x="400" y="200" width="120" height="70" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 120, y: 75, label: "School" },
          { x: 440, y: 70, label: "Church with bell tower" },
          { x: 300, y: 150, label: "Fountain" },
          { x: 120, y: 230, label: "Big tree" },
          { x: 460, y: 235, label: "Library" }
        ]
      },
      caption: "Click each spot and choose its name. The fountain is right at the crossing of the two roads!"
    },
    {
      type: "alternatives",
      title: "Other ways to find your way",
      intro: "Around the world people find their way in many different ways. Try to discover them!",
      tabs: [
        {
          label: "🌊 The Polynesian navigators",
          html: `<p>In the Pacific Ocean, thousands of years ago, the <b>Polynesians</b> travelled from one island to another by canoe, for thousands of kilometres, <b>without a compass or maps</b>!</p>
<ul>
<li>⭐ At night they watched the <b>stars</b>: each one rises at a precise point on the horizon.</li>
<li>🌊 They felt the shape of the <b>waves</b> under the canoe.</li>
<li>🐦 They followed the sea <b>birds</b>, which in the evening fly back towards land.</li>
<li>☁️ They looked for the <b>clouds</b> that stay still above islands.</li>
</ul>
<p>For them the stars, the waves and the birds were landmarks!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -17.5, lon: -149.6, label: "Tahiti", color: "#f97316" },
              { lat: 19.6, lon: -155.5, label: "Hawaii", color: "#ef4444" },
              { lat: -41, lon: 174, label: "New Zealand", color: "#22c55e" },
              { lat: -27.1, lon: -109.4, label: "Easter Island", color: "#a855f7" }
            ],
            routes: [{ points: [0, 1], color: "#0ea5e9" }, { points: [0, 2], color: "#0ea5e9" }, { points: [0, 3], color: "#0ea5e9" }]
          }
        },
        {
          label: "🎶 The Australian “songlines”",
          html: `<p>The <b>Aboriginal</b> peoples of Australia have <b>songlines</b>: long songs that describe, one after another, the landmarks of a journey (a rock, a waterhole, a hill).</p>
<p>By singing the song you remember the way! 🎵 It is a bit as if you made up a rhyme: <i>“At the baker's I turn right, the fountain's a delight, then on the left there's the church in sight…”</i></p>`
        },
        {
          label: "🤖 Like a car's sat nav",
          html: `<p>The <b>sat nav</b> (GPS) in phones and cars talks using landmarks too: <i>“In 200 metres, at the roundabout, take the second exit”</i>.</p>
<p>It knows where you are thanks to the <b>satellites</b> that orbit the Earth 🛰️: the phone receives their signals and works out its position. But the sat nav also needs a <b>map</b> and words like right, left, straight on.</p>`
        },
        {
          label: "🧍 The body game",
          html: `<p>Stand in the middle of the room. 🧍</p>
<ol>
<li>Point to the <b>door</b> with your right hand.</li>
<li>Turn around: now the door is <b>behind</b> you!</li>
<li>Turn again by a quarter: is it on your <b>left</b> now?</li>
</ol>
<p>You have discovered that <b>right, left, in front and behind change</b> when you turn, but the door always stays there. That is why fixed landmarks are so useful!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f1f5f9"/>
<circle cx="300" cy="80" r="26" fill="#fcd9b6" stroke="#92400e" stroke-width="2"/>
<rect x="278" y="108" width="44" height="70" rx="8" fill="#3b82f6"/>
<line x1="230" y1="130" x2="278" y2="125" stroke="#334155" stroke-width="8"/>
<line x1="322" y1="125" x2="370" y2="130" stroke="#334155" stroke-width="8"/>
<text x="160" y="140" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">LEFT</text>
<text x="450" y="140" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">RIGHT</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">FRONT (towards you)</text>
<text x="300" y="208" font-size="16" text-anchor="middle" fill="#475569">The child is facing you: their right is on your left!</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: how we find our way",
      nodes: [
        { id: "orientarsi", label: "Finding your way", x: 50, y: 6, color: "#6366f1", html: "<p>Understanding where we are and where to go.</p>", why: "<p>The Italian word <i>orientarsi</i> comes from <b>Orient</b>, that is the East, where the Sun rises. Long ago maps and churches were drawn and built “facing the Orient”: finding your bearings meant finding the East.</p>" },
        { id: "riferimento", label: "Landmarks", x: 25, y: 30, color: "#f97316", html: "<p>Fixed and clearly visible things: a church, a tree, a fountain.</p>", why: "<p>Our brain remembers <b>images</b> better than words. In the brain there is a part, the <b>hippocampus</b>, that creates a kind of “map” of places: the scientists who discovered this won the Nobel Prize in 2014.</p>" },
        { id: "posizione", label: "Position words", x: 75, y: 30, color: "#0ea5e9", html: "<p>Above, below, in front, behind, right, left, near, far.</p>", why: "<p>These words depend on <b>who is looking</b>: your right is the left of someone standing in front of you. That is why they are handy but can be confusing.</p>" },
        { id: "fissi", label: "Fixed and movable", x: 10, y: 55, color: "#16a34a", html: "<p>Only things that do not move are good landmarks.</p>", why: "<p>A landmark must always be in the same place, otherwise the description of the route no longer works the next time.</p>" },
        { id: "sole", label: "The Sun", x: 45, y: 55, color: "#eab308", html: "<p>It rises in the east and sets in the west.</p>", why: "<p>The Sun seems to move across the sky, but in reality it is the <b>Earth turning</b> on itself from west to east, once a day. That is why we always see the Sun appear from the east.</p>" },
        { id: "cardinali", label: "Cardinal points", x: 75, y: 72, color: "#ef4444", html: "<p>North, South, East, West.</p>", why: "<p>They are the same for everyone, all over the world, because they depend on the Earth and not on us. They are called “cardinal” from the Latin <i>cardo</i>, hinge: they are the “hinges” on which orientation turns.</p>" },
        { id: "bussola", label: "The compass", x: 45, y: 92, color: "#a855f7", html: "<p>An instrument with a needle that points North.</p>", why: "<p>The Earth is like a huge <b>magnet</b>: the magnetic needle turns towards the North. The compass was invented in <b>China</b> and reached Europe in the Middle Ages; the sailors of <b>Amalfi</b> used it a lot.</p>" },
        { id: "mappe", label: "Maps", x: 15, y: 85, color: "#14b8a6", html: "<p>Drawings of places seen from above.</p>", why: "<p>On a map landmarks are drawn with <b>symbols</b>: this way anyone can find the way even in a place they have never seen.</p>" }
      ],
      edges: [
        ["orientarsi", "riferimento", "with"],
        ["orientarsi", "posizione", "with"],
        ["riferimento", "fissi", "must be"],
        ["orientarsi", "sole", "also with"],
        ["sole", "cardinali", "shows the"],
        ["cardinali", "bussola", "found with the"],
        ["riferimento", "mappe", "drawn on"],
        ["posizione", "cardinali", "more precise:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Sun and the compass",
      questions: [
        { type: "mc", q: "In which direction does the Sun rise?", options: ["North", "East", "West"], answer: 1, explain: "The Sun rises in the East." },
        { type: "mc", q: "Where does the compass needle point?", options: ["Towards the North", "Towards the Sun", "Towards home"], answer: 0, explain: "The magnetic needle always points North." },
        { type: "num", q: "How many cardinal points are there?", answer: 4, tol: 0, explain: "North, South, East and West." }
      ]
    },
    {
      type: "remember",
      title: "Remember 📌",
      html: `<ul>
<li>A <b>landmark</b> is something <b>fixed</b> and <b>easy to see</b>.</li>
<li>Position words (right, left, in front, behind…) <b>change</b> when we turn around.</li>
<li>The Sun rises in the <b>East</b> and sets in the <b>West</b>.</li>
<li>The <b>cardinal points</b> are North, South, East, West; the <b>compass</b> points North.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Landmark", d: "A fixed and clearly visible thing that helps us find our way." },
    { t: "To find your way", d: "To understand where you are and which direction to take." },
    { t: "Fixed", d: "Something that never moves." },
    { t: "Movable", d: "Something that can be moved or moves by itself." },
    { t: "Cardinal points", d: "North, South, East, West: the directions that are the same for everyone." },
    { t: "Compass", d: "An instrument with a magnetic needle that points North." },
    { t: "Compass rose", d: "A star-shaped drawing that shows the cardinal points." },
    { t: "Route", d: "The way you take to go from one place to another." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which is the best landmark?", options: ["🐕 A dog", "⛪ A bell tower", "☁️ A cloud"], answer: 1, explain: "The bell tower is fixed and can be seen from far away." },
      { type: "tf", q: "A landmark must be fixed.", answer: true, explain: "If it moves, it no longer helps us find the way." },
      { type: "mc", q: "The opposite of “above” is…", options: ["below", "behind", "far"], answer: 0, explain: "Above ↔ below." },
      { type: "mc", q: "The Sun sets in the…", options: ["East", "West", "North"], answer: 1, explain: "It rises in the East and sets in the West." },
      { type: "text", q: "What is the instrument that shows the North called?", answer: ["compass", "the compass", "a compass"], explain: "The compass, with its magnetic needle." },
      { type: "order", q: "Put Sara's route in order: home → … → school.", items: ["I leave home", "At the bakery I turn right", "I arrive at the fountain", "I turn left", "I go into school"], explain: "It is the order of the route described in the example." },
      { type: "tf", q: "If I turn around, my right and my left change in relation to the things around me.", answer: true, explain: "Right and left depend on how I am turned." },
      { type: "mc", q: "A person is facing you and raises their right hand. Which side do you see it on?", options: ["On my right", "On my left", "Above me"], answer: 1, explain: "Someone facing you is turned the opposite way: their right is on your left." },
      { type: "num", q: "How many cardinal points are there?", answer: 4, tol: 0, explain: "North, South, East, West." },
      { type: "mc", q: "What do the Inuit build to show the way?", options: ["Inukshuk, piles of stones", "Traffic lights", "Ice towers"], answer: 0, explain: "Inukshuk are landmarks made of stone." },
      { type: "text", q: "The cardinal point opposite the North is the…", answer: ["south", "the south"], explain: "North ↔ South, East ↔ West." }
    ]
  }
});
