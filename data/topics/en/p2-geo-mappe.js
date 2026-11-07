TOPIC('en', {
  id: "p2-geo-mappe",
  title: "Floor Plans and Maps",
  intro: "Imagine you are a little <b>bird</b> 🐦 flying over your classroom: what would you see? Only the <b>roofs</b>, the <b>tops</b> of the desks and chairs! Today we learn to <b>look from above</b> and to read <b>plans</b>, <b>maps</b> and <b>keys</b> 🗺️.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Three ways of looking at an object 👀",
      html: `<p>The same object looks different if you look at it from different places. Take a <b>glass</b> 🥛:</p>
<ul>
<li>👁️ <b>From the front</b> (front view): you see a rectangle.</li>
<li>↘️ <b>From an angle</b> (oblique view, a bit from above): you see the glass and a bit of the round rim.</li>
<li>⬇️ <b>From above</b> (top view, “bird's-eye view”): you see just a <b>circle</b>!</li>
</ul>
<p><b>Plans</b> and <b>maps</b> are always drawn <b>from above</b>, as a little bird would see them.</p>`
    },
    {
      type: "svg",
      title: "A table seen in three ways",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="110" width="140" height="18" fill="#b45309"/>
<rect x="50" y="128" width="14" height="80" fill="#92400e"/>
<rect x="156" y="128" width="14" height="80" fill="#92400e"/>
<polygon points="250,110 400,110 370,145 220,145" fill="#d97706"/>
<rect x="220" y="145" width="150" height="12" fill="#b45309"/>
<rect x="226" y="157" width="12" height="60" fill="#92400e"/>
<rect x="355" y="157" width="12" height="60" fill="#92400e"/>
<rect x="388" y="125" width="10" height="60" fill="#92400e"/>
<rect x="450" y="90" width="120" height="120" fill="#f59e0b" stroke="#92400e" stroke-width="4"/>
<text x="110" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">from the front</text>
<text x="300" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">from an angle</text>
<text x="510" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">from above</text>
<text x="510" y="275" font-size="15" text-anchor="middle" fill="#475569">(as in a plan)</text>
<text x="300" y="40" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">The same table!</text>
</svg>`,
      caption: "From above the table becomes a square: you can no longer see the legs, they are hidden underneath."
    },
    {
      type: "3d",
      title: "Turn the solid and look at it from above 🔄",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "cylinder", "cone", "pyramid", "sphere"], color: "#38bdf8" },
      caption: "Change the solid with the buttons and rotate it until you see it from right above. The cube becomes a square, the cylinder and the cone become a circle, the pyramid a square with an X!"
    },
    {
      type: "text",
      title: "Making it smaller: scale reduction 🔍",
      html: `<p>A real room is big; the sheet of paper is small. To draw it we have to make everything <b>smaller</b> <b>in the same way</b>. This is called <b>scale reduction</b>.</p>
<p>An easy way is to use the <b>squares</b> of your notebook:</p>
<p style="font-size:1.1em">📏 <b>1 square = 1 step</b> (or 1 metre)</p>
<p>If the teacher's desk is 2 steps long, you draw it <b>2 squares</b> long. If the classroom is 8 steps long, you draw it <b>8 squares</b> long. This way everything stays <b>in proportion</b>: big things stay bigger, small things stay smaller.</p>`
    },
    {
      type: "widget",
      title: "Draw the plan of a room on the squares",
      widget: "areaGrid",
      options: { w: 6, h: 4, max: 12 },
      caption: "Each square is 1 step. Move the sliders: how many squares do you need for a room 6 steps long and 4 wide?"
    },
    {
      type: "text",
      title: "Plan, map, geographical map 🗺️",
      html: `<p>The bigger the space, the more you have to shrink. The name of the drawing changes too:</p>
<table>
<tr><th>Name</th><th>What it shows</th><th>Example</th></tr>
<tr><td>📐 <b>Plan</b></td><td>a small space, with lots of details</td><td>your bedroom, the classroom, a house</td></tr>
<tr><td>🗺️ <b>Map</b></td><td>a bigger space: streets, squares, parks</td><td>the neighbourhood, the town centre</td></tr>
<tr><td>🌍 <b>Geographical map</b></td><td>very big spaces: regions, countries, continents</td><td>the map of Italy, the globe</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: from above",
      questions: [
        { type: "mc", q: "Seen from above, a ball looks like…", options: ["a square", "a circle", "a triangle"], answer: 1, explain: "A ball seen from above looks like a circle." },
        { type: "mc", q: "What do we call the drawing of a room seen from above?", options: ["Plan", "Portrait", "Comic strip"], answer: 0, explain: "It is a plan." },
        { type: "num", q: "1 square = 1 step. A wardrobe 3 steps wide: how many squares?", answer: 3, tol: 0, unit: "squares", explain: "3 steps = 3 squares." }
      ]
    },
    {
      type: "text",
      title: "The key: the map's dictionary 🔑",
      html: `<p>On plans and maps we do not draw everything exactly as it is: we use <b>symbols</b> 🔣 (small drawings, colours, lines).</p>
<p>To understand what each symbol means there is the <b>key</b> (also called the legend): a box, usually in a corner, that explains all the symbols. It is like a little <b>dictionary</b>!</p>
<p>Some colours are almost always used in the same way:</p>
<ul>
<li>🟦 <b>blue</b>: water (rivers, lakes, sea);</li>
<li>🟩 <b>green</b>: meadows, parks, plains;</li>
<li>🟫 <b>brown</b>: mountains and hills;</li>
<li>⬜ <b>grey</b> or <b>white</b>: roads and squares.</li>
</ul>`
    },
    {
      type: "svg",
      title: "A map with a key",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<rect x="10" y="10" width="400" height="300" fill="#bbf7d0" stroke="#0f172a" stroke-width="2"/>
<path d="M10 220 C120 200 200 260 410 230" stroke="#3b82f6" stroke-width="16" fill="none"/>
<rect x="10" y="110" width="400" height="22" fill="#d1d5db"/>
<rect x="190" y="10" width="22" height="300" fill="#d1d5db"/>
<rect x="60" y="40" width="70" height="50" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<rect x="260" y="40" width="50" height="50" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="340" cy="170" r="16" fill="#15803d"/>
<circle cx="370" cy="160" r="16" fill="#15803d"/>
<circle cx="80" cy="165" r="16" fill="#15803d"/>
<rect x="430" y="10" width="160" height="300" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
<text x="510" y="38" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">KEY</text>
<rect x="445" y="60" width="28" height="22" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<text x="482" y="77" font-size="15" fill="#0f172a">school</text>
<rect x="445" y="100" width="28" height="22" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<text x="482" y="117" font-size="15" fill="#0f172a">shop</text>
<circle cx="459" cy="152" r="12" fill="#15803d"/>
<text x="482" y="157" font-size="15" fill="#0f172a">tree</text>
<rect x="445" y="182" width="28" height="14" fill="#d1d5db"/>
<text x="482" y="195" font-size="15" fill="#0f172a">road</text>
<rect x="445" y="222" width="28" height="12" fill="#3b82f6"/>
<text x="482" y="234" font-size="15" fill="#0f172a">river</text>
<rect x="445" y="258" width="28" height="22" fill="#bbf7d0" stroke="#0f172a" stroke-width="1"/>
<text x="482" y="275" font-size="15" fill="#0f172a">meadow</text>
</svg>`,
      caption: "Thanks to the key you can immediately see where the school, the shop, the trees and the river are."
    },
    {
      type: "widget",
      title: "Match the symbol to its meaning",
      widget: "match",
      options: {
        pairs: [
          ["🟦 blue line", "river"],
          ["🟩 green area", "park or meadow"],
          ["🔺 brown triangle", "mountain"],
          ["✝️ cross", "church"],
          ["🅿️ blue P", "car park"],
          ["➕ green cross", "pharmacy"]
        ]
      },
      caption: "These are symbols often used on real maps."
    },
    {
      type: "example",
      title: "Practical example: the plan of my classroom ✏️",
      html: `<p>Here is how Matteo draws the plan of his classroom:</p>
<ol>
<li>👣 He <b>measures</b> the classroom in steps: 8 steps long, 6 wide.</li>
<li>📏 In his notebook he draws a rectangle of <b>8 × 6 squares</b>.</li>
<li>🚪 He marks the <b>door</b> and the <b>windows</b> on the right sides.</li>
<li>🟫 He draws the <b>desks</b> as little rectangles, the <b>teacher's desk</b> as a bigger rectangle, the <b>blackboard</b> as a thick line on the wall.</li>
<li>🔑 He makes the <b>key</b>: desk = little brown rectangle, teacher's desk = blue rectangle…</li>
</ol>
<p>Now a classmate from another class, looking at the plan, knows where Matteo's desk is!</p>`
    },
    {
      type: "example",
      title: "Practical example: the treasure hunt 🏴‍☠️",
      html: `<p>The teacher hides a treasure in the garden and gives the children a <b>map</b>:</p>
<ul>
<li>🌳 Three green circles = the three trees.</li>
<li>🟫 A brown rectangle = the bench.</li>
<li>❌ A red X = the treasure, between the bench and the biggest tree.</li>
</ul>
<p>The children <b>turn the map</b> until the drawings are placed like the real things in front of them (this is called <b>orienting the map</b>) and… they find the treasure! 🎁</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 🏛️",
      html: `<p>More than <b>1,800 years ago</b>, in Rome, a gigantic plan of the city was made, carved in <b>marble</b>: the <b>Forma Urbis</b>. It was about <b>18 metres</b> wide and <b>13</b> high, like the front of a building, and it showed every house and every room! Today only pieces of it remain, and archaeologists try to put them back together like a puzzle.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 🛰️",
      html: `<p>Today maps are also made from <b>satellite photos</b>. Satellites orbit the Earth hundreds of kilometres up and photograph everything <b>from above</b>. The map apps on your phone use exactly these photos: you can see the roof of your school!</p>`
    },
    {
      type: "3d",
      title: "From reality to the map: the 3D landscape",
      scene: "terrain",
      caption: "Rotate the landscape and look at it from right above: you will see the mountain as a brown patch, the lake and the river as blue shapes, the plain green. This is how a geographical map is born!",
      options: {
        features: {
          mountain: { label: "Mountain", html: "On maps it is coloured <b>brown</b>: the darker it is, the higher it is." },
          hill: { label: "Hill", html: "On maps it is light brown or yellow." },
          plain: { label: "Plain", html: "On maps it is coloured <b>green</b>." },
          river: { label: "River", html: "On maps it is a <b>blue line</b> that widens towards the sea." },
          lake: { label: "Lake", html: "On maps it is a closed <b>blue</b> patch." },
          sea: { label: "Sea", html: "On maps it is <b>blue</b>: the darker it is, the deeper it is." }
        }
      }
    },
    {
      type: "alternatives",
      title: "Other ways to understand maps",
      intro: "Do maps seem hard? Try these other ways.",
      tabs: [
        {
          label: "🧱 With building blocks",
          html: `<p>Build your bedroom with <b>building blocks</b> or little boxes: a long block for the bed, a square one for the bedside table…</p>
<p>Then put them on a <b>sheet of paper</b> and <b>trace</b> the outline of each block with a pencil. Take the blocks away: on the paper the <b>plan</b> of your bedroom is left! It is just like seeing it from above.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 1 }
        },
        {
          label: "🔦 The shadow game",
          html: `<p>In the dark, hold a torch <b>right above</b> an object (a cup, a toy). The <b>shadow</b> on the table is the shape you would see from above!</p>
<ul>
<li>☕ the cup makes a circular shadow;</li>
<li>📦 a box makes a rectangular shadow;</li>
<li>🧸 a teddy bear makes a blob-shaped shadow.</li>
</ul>
<p>Plans are a bit like the “shadows from above” of things.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="270" y="10" width="60" height="30" rx="6" fill="#facc15"/>
<polygon points="280,40 320,40 420,200 180,200" fill="#fef9c3" opacity="0.25"/>
<rect x="265" y="120" width="70" height="60" fill="#60a5fa"/>
<ellipse cx="300" cy="205" rx="45" ry="14" fill="#0f172a"/>
<rect x="0" y="200" width="600" height="40" fill="#78350f"/>
<ellipse cx="300" cy="215" rx="50" ry="12" fill="#1c1917"/>
<text x="480" y="90" font-size="17" fill="#fef9c3" text-anchor="middle">torch above</text>
<text x="480" y="225" font-size="17" fill="#fef9c3" text-anchor="middle">shadow = shape from above</text>
</svg>`
        },
        {
          label: "🌍 Maps of other peoples",
          html: `<p>Around the world maps have been made in many ways:</p>
<ul>
<li>🐚 The people of the <b>Marshall Islands</b> (Pacific Ocean) made <b>maps with sticks and shells</b>: the shells were the islands, the sticks showed how the waves move.</li>
<li>🏺 In <b>Mesopotamia</b> (present-day Iraq), about 2,600 years ago, one of the oldest “maps of the world” was carved on a clay tablet.</li>
<li>📜 The <b>Peutinger Map</b> is a medieval copy of a Roman road map: it is almost <b>7 metres</b> long and only 34 cm wide, like a very long scroll!</li>
</ul>`
        },
        {
          label: "🧩 Read the park plan",
          html: `<p>Look at the plan and click on the spots: can you say what each thing is, just by looking at its shape from above?</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bbf7d0"/>
<path d="M0 150 L600 150" stroke="#d6d3d1" stroke-width="26"/>
<ellipse cx="130" cy="70" rx="80" ry="40" fill="#60a5fa"/>
<circle cx="330" cy="70" r="22" fill="#15803d"/>
<circle cx="380" cy="80" r="22" fill="#15803d"/>
<rect x="470" y="210" width="80" height="20" fill="#a16207"/>
<rect x="100" y="210" width="90" height="60" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<circle cx="320" cy="240" r="30" fill="#e5e7eb" stroke="#64748b" stroke-width="4"/>
</svg>`,
            spots: [
              { x: 130, y: 70, label: "Pond" },
              { x: 355, y: 75, label: "Trees" },
              { x: 300, y: 150, label: "Path" },
              { x: 510, y: 220, label: "Bench" },
              { x: 145, y: 240, label: "Sandpit" },
              { x: 320, y: 240, label: "Fountain" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of maps",
      nodes: [
        { id: "alto", label: "View from above", x: 50, y: 6, color: "#6366f1", html: "<p>Looking at things from above, like a little bird.</p>", why: "<p>From above you see all things <b>together</b> and in their real position, without one hiding another. That is why cartographers (people who make maps) always draw from above.</p>" },
        { id: "riduzione", label: "Scale reduction", x: 20, y: 30, color: "#f97316", html: "<p>Making everything smaller in the same way.</p>", why: "<p>A sheet of paper cannot be as big as a city! By shrinking everything <b>by the same amount</b> (for example 1 square = 1 metre) shapes and distances stay correct.</p>" },
        { id: "simboli", label: "Symbols", x: 50, y: 30, color: "#0ea5e9", html: "<p>Small drawings, colours and lines in place of real things.</p>", why: "<p>If we drew every house with all its windows, the map would be confusing. Symbols are <b>simple</b> and quick to recognise.</p>" },
        { id: "legenda", label: "Key", x: 80, y: 30, color: "#a855f7", html: "<p>The box that explains the symbols.</p>", why: "<p>The Italian word <i>legenda</i> comes from Latin and means “things to be read”. Without a key the symbols would be a secret code!</p>" },
        { id: "pianta", label: "Plan", x: 20, y: 62, color: "#16a34a", html: "<p>Small spaces: a room, a house, the school.</p>", why: "<p>Little reduction is used, so lots of details can be seen: doors, windows, furniture. <b>Architects</b> draw plans before building a house.</p>" },
        { id: "mappa", label: "Map", x: 50, y: 62, color: "#eab308", html: "<p>Bigger spaces: the neighbourhood, the city.</p>", why: "<p>We shrink more: houses become little rectangles and you mostly see streets, squares and parks.</p>" },
        { id: "carta", label: "Geographical map", x: 80, y: 62, color: "#ef4444", html: "<p>Huge spaces: Italy, the continents.</p>", why: "<p>We shrink a great deal: a city becomes a dot. The Greek geographer <b>Ptolemy</b>, about 1,900 years ago, wrote how to draw the world with parallels and meridians.</p>" },
        { id: "colori", label: "Conventional colours", x: 50, y: 92, color: "#14b8a6", html: "<p>Blue = water, green = plain, brown = mountain.</p>", why: "<p>“Conventional” means <b>decided by everyone together</b>. If everybody uses the same colours, anyone in the world can read a map without knowing the language of the person who made it.</p>" }
      ],
      edges: [
        ["alto", "riduzione", "then we do the"],
        ["alto", "simboli", "we use"],
        ["simboli", "legenda", "explained in the"],
        ["riduzione", "pianta", "little:"],
        ["riduzione", "mappa", "more:"],
        ["riduzione", "carta", "a great deal:"],
        ["simboli", "colori", "like the"],
        ["carta", "colori", "uses the"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the key",
      questions: [
        { type: "mc", q: "What is the key (legend) for?", options: ["To explain the symbols of the map", "To colour the map", "To measure the temperature"], answer: 0, explain: "The key is the “dictionary” of the symbols." },
        { type: "mc", q: "Usually, on maps, blue means…", options: ["mountains", "water", "roads"], answer: 1, explain: "Blue = seas, lakes and rivers." },
        { type: "tf", q: "To draw the neighbourhood we use the same reduction as for the bedroom.", answer: false, explain: "The neighbourhood is bigger: we have to shrink more." }
      ]
    },
    {
      type: "remember",
      title: "Remember 📌",
      html: `<ul>
<li>Plans and maps show places <b>seen from above</b>.</li>
<li>To draw them we <b>shrink</b> everything in the same way (scale reduction).</li>
<li><b>Plan</b> = small spaces; <b>map</b> = bigger spaces; <b>geographical map</b> = huge spaces.</li>
<li><b>Symbols</b> are explained in the <b>key</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Plan", d: "A drawing from above of a small space, like a room." },
    { t: "Map", d: "A drawing from above of a bigger space, like a neighbourhood." },
    { t: "Geographical map", d: "A drawing of very large territories: regions, countries, continents." },
    { t: "Top view", d: "Looking from above, from right overhead." },
    { t: "Scale reduction", d: "Making everything smaller in the same way so that it fits on the sheet." },
    { t: "Symbol", d: "A small drawing or colour that stands in place of a real thing." },
    { t: "Key (legend)", d: "The box that explains what the symbols mean." },
    { t: "Cartographer", d: "The person who draws maps." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Seen from above, a glass looks like…", options: ["a rectangle", "a circle", "a star"], answer: 1, explain: "From above you see the round rim: a circle." },
      { type: "mc", q: "What is the “bird's-eye” view, from right above, called?", options: ["Front view", "Top view", "Side view"], answer: 1, explain: "Top view = from above." },
      { type: "text", q: "What is the box that explains the symbols of a map called?", answer: ["key", "the key", "legend", "the legend", "map key"], explain: "The key (or legend)." },
      { type: "order", q: "Put in order, from the drawing of the smallest space to the biggest.", items: ["Plan of the bedroom", "Map of the neighbourhood", "Geographical map of Italy"], explain: "Plan → map → geographical map." },
      { type: "num", q: "1 square = 1 step. The classroom is 9 steps long. How many squares do you draw?", answer: 9, tol: 0, unit: "squares", explain: "9 steps = 9 squares." },
      { type: "tf", q: "On geographical maps the plain is often coloured green.", answer: true, explain: "Green = plain, brown = mountain, blue = water." },
      { type: "mc", q: "Seen from above, a bed looks like…", options: ["a rectangle", "a circle", "a triangle"], answer: 0, explain: "A bed from above is a rectangle." },
      { type: "mc", q: "Why are symbols used on maps?", options: ["To make them easier to read", "To hide them from pirates", "Because real drawings are forbidden"], answer: 0, explain: "Symbols are simple and quick to recognise." },
      { type: "tf", q: "Shrinking “to scale” means shrinking every thing in a different way.", answer: false, explain: "Everything must be shrunk in the same way, so the proportions stay right." },
      { type: "order", q: "Put the steps for drawing the classroom plan in order.", items: ["I measure the classroom in steps", "I draw the outline on the squares", "I draw doors, windows and desks", "I make the key"], explain: "First we measure, then we draw the outline, then the inside, and finally we explain the symbols." },
      { type: "mc", q: "What was the Forma Urbis?", options: ["A plan of Rome carved in marble", "A map app", "A Roman compass"], answer: 0, explain: "A gigantic marble plan of ancient Rome." }
    ]
  }
});
