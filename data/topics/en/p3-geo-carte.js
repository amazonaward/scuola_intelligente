TOPIC('en', {
  id: "p3-geo-carte",
  title: "Maps",
  intro: "A map is like a <b>photograph from above</b>, shrunk down and drawn with colours and symbols. Today we discover how to fit a town, a region or the whole world on one sheet: the <b>scale</b>, the <b>key</b> and the different <b>types of maps</b>. 🗺️",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Step 1: looking from above",
      html: `<p>Try looking at your pencil case from three different points:</p>
<ul>
<li><b>From the front</b> (front view): you see the front.</li>
<li><b>From an angle</b> (oblique view): you see the front and a bit of the top.</li>
<li><b>From above</b> (<b>overhead</b> view, or "bird's-eye view"): you see only the top. 🦅</li>
</ul>
<p>Cartographers, that is, people who draw maps, <b>always use the view from above</b>. This way everything has its true shape and distances can be measured.</p>`
    },
    {
      type: "text", title: "Step 2: shrinking (scale reduction)",
      html: `<p>A park or a city is too big for a sheet of paper. So the cartographer <b>shrinks</b> it: all the measurements are divided by the same number. This is called <b>scale reduction</b>.</p>
<p>The <b>scale</b> is written like this: <b>1 : 100</b> (read "one to one hundred"). It means:</p>
<p style="font-size:1.15em">📏 <b>1 cm</b> on the drawing = <b>100 cm</b> (that is, 1 metre) in real life.</p>
<ul>
<li><b>1 : 100</b> → 1 cm = 1 m. Good for the plan of your classroom.</li>
<li><b>1 : 100,000</b> → 1 cm = 1 km. Good for a province.</li>
<li><b>1 : 10,000,000</b> → 1 cm = 100 km. Good for the whole of Italy.</li>
</ul>
<p>The <b>bigger</b> the second number, the more reality has been shrunk and the <b>fewer details</b> you can see.</p>`
    },
    {
      type: "svg", title: "From reality to the plan",
      caption: "The same classroom seen from an angle and then from above, shrunk and drawn with the symbols of the key.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<text x="140" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">ANGLED VIEW</text>
<polygon points="40,240 240,240 270,110 70,110" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="70,110 270,110 270,60 70,60" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<rect x="110" y="70" width="70" height="30" fill="#166534" stroke="#14532d" stroke-width="2"/>
<polygon points="80,215 120,215 128,185 88,185" fill="#a16207"/>
<polygon points="150,215 190,215 198,185 158,185" fill="#a16207"/>
<polygon points="105,170 140,170 146,145 111,145" fill="#a16207"/>
<polygon points="175,170 210,170 216,145 181,145" fill="#a16207"/>
<text x="300" y="165" font-size="34" text-anchor="middle" fill="#2563eb">➜</text>
<text x="300" y="195" font-size="13" text-anchor="middle" fill="#1e3a8a">from above</text>
<text x="465" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">PLAN 1 : 100</text>
<rect x="350" y="50" width="230" height="190" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
<rect x="420" y="54" width="90" height="12" fill="#166534"/>
<rect x="375" y="100" width="40" height="25" fill="#a16207"/>
<rect x="445" y="100" width="40" height="25" fill="#a16207"/>
<rect x="515" y="100" width="40" height="25" fill="#a16207"/>
<rect x="375" y="160" width="40" height="25" fill="#a16207"/>
<rect x="445" y="160" width="40" height="25" fill="#a16207"/>
<rect x="515" y="160" width="40" height="25" fill="#a16207"/>
<rect x="545" y="236" width="30" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<rect x="355" y="258" width="16" height="12" fill="#a16207"/>
<text x="377" y="269" font-size="14" fill="#0f172a">desk</text>
<rect x="425" y="258" width="16" height="12" fill="#166534"/>
<text x="447" y="269" font-size="14" fill="#0f172a">board</text>
<rect x="510" y="258" width="16" height="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<text x="532" y="269" font-size="14" fill="#0f172a">door</text>
<text x="465" y="292" font-size="14" text-anchor="middle" fill="#475569">KEY</text>
</svg>`
    },
    {
      type: "example", title: "Practical example: measuring on the plan",
      html: `<p>On the plan of your classroom at a scale of <b>1 : 100</b> the long wall measures <b>7 cm</b>.</p>
<p>How long is it really? Each centimetre stands for 100 cm, so:</p>
<p><b>7 × 100 = 700 cm = 7 metres</b> ✅</p>
<p>And the other way round: if the corridor is 12 m long, on the plan I draw it <b>12 cm</b> long.</p>`
    },
    {
      type: "remember", title: "The key and the colours",
      html: `<p>Every map has a <b>key</b> (legend): a box that explains what the <b>symbols</b> and <b>colours</b> mean. On physical maps the colours are almost always these:</p>
<ul>
<li>🟦 <b>light blue / blue</b>: seas, lakes, rivers (the darker, the deeper the water);</li>
<li>🟩 <b>green</b>: plains;</li>
<li>🟨 <b>yellow / light brown</b>: hills;</li>
<li>🟫 <b>dark brown</b>: mountains (the darker, the higher);</li>
<li>⬜ <b>white</b>: glaciers and permanent snow.</li>
</ul>
<p>And don't forget the <b>North</b>: it is usually <b>at the top</b>, shown by an arrow or by the <b>compass rose</b>.</p>`
    },
    {
      type: "3d", title: "The real landscape and its colours on the map",
      scene: "terrain",
      caption: "Rotate the landscape and touch the parts: for each one you find out which colour or symbol the cartographer uses to draw it.",
      options: {
        features: {
          sea: { label: "Sea", html: "On a physical map it is <b>light blue</b>: the darker the blue, the deeper the sea." },
          coast: { label: "Coast", html: "It is drawn with a <b>line</b> that separates the blue of the sea from the colour of the land." },
          plain: { label: "Plain", html: "Flat, low land (under 200 m): on a physical map it is <b>green</b>." },
          hill: { label: "Hill", html: "Relief up to about 600 m: on the map it is <b>yellow</b> or light brown." },
          mountain: { label: "Mountain", html: "Relief above 600 m: on the map it is <b>brown</b>, darker and darker as you climb." },
          peak: { label: "Peak", html: "The top of the mountain: it is marked with a little <b>triangle ▲</b> and its height in metres, for example ▲ 4,808 (Mont Blanc)." },
          glacier: { label: "Glacier", html: "Ice that never melts: on the map it is <b>white</b>." },
          river: { label: "River", html: "A <b>blue line</b> that widens towards the mouth." },
          lake: { label: "Lake", html: "A <b>blue patch</b> surrounded by land." }
        }
      }
    },
    {
      type: "quiz", title: "Mini-quiz: scale and key",
      questions: [
        { type: "mc", q: "A map drawn by looking from above uses the … view.", options: ["front", "overhead", "side"], answer: 1, explain: "Overhead = from above, like a bird in flight." },
        { type: "num", q: "Scale 1 : 100. A wall on the plan measures 5 cm. How many metres long is it really?", answer: 5, tol: 0, unit: "m", explain: "5 cm × 100 = 500 cm = 5 m." },
        { type: "mc", q: "On a physical map plains are coloured…", options: ["brown", "green", "white"], answer: 1, explain: "Green for plains, brown for mountains." }
      ]
    },
    {
      type: "text", title: "Step 3: types of maps",
      html: `<p>Maps are divided in two ways: <b>by how much they shrink</b> (the scale) and <b>by what they show</b> (the content).</p>
<table>
<tr><th>By scale</th><th>What it shows</th><th>Typical scale</th></tr>
<tr><td><b>Plan</b></td><td>a room, a house, a school</td><td>1 : 50 – 1 : 500</td></tr>
<tr><td><b>City map</b></td><td>a district, a city with its streets</td><td>up to 1 : 10,000</td></tr>
<tr><td><b>Topographic map</b></td><td>a small area: paths, houses, woods</td><td>1 : 25,000 – 1 : 100,000</td></tr>
<tr><td><b>Regional map</b></td><td>a region</td><td>1 : 200,000 – 1 : 1,000,000</td></tr>
<tr><td><b>Geographic map</b></td><td>a country, a continent</td><td>over 1 : 1,000,000</td></tr>
<tr><td><b>World map</b></td><td>the whole Earth on one sheet</td><td>about 1 : 100,000,000</td></tr>
</table>
<p>By <b>content</b>:</p>
<ul>
<li><b>Physical map</b>: mountains, plains, rivers, lakes, seas (the elements of nature).</li>
<li><b>Political map</b>: countries, regions, borders, cities (the elements decided by people). Each country has a different colour.</li>
<li><b>Thematic map</b>: one subject only, for example climate, roads, farm products or where most people live.</li>
</ul>`
    },
    {
      type: "svg", title: "Physical, political or thematic?",
      caption: "The same imaginary island drawn in three different ways.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ffffff"/>
<rect x="10" y="40" width="185" height="200" fill="#7dd3fc"/>
<ellipse cx="102" cy="140" rx="75" ry="80" fill="#4ade80"/>
<ellipse cx="110" cy="125" rx="45" ry="45" fill="#facc15"/>
<ellipse cx="115" cy="115" rx="22" ry="22" fill="#92400e"/>
<polygon points="115,100 108,112 122,112" fill="#ffffff"/>
<path d="M115,130 Q90,170 70,215" stroke="#1d4ed8" stroke-width="4" fill="none"/>
<text x="102" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#166534">PHYSICAL</text>
<text x="102" y="265" font-size="14" text-anchor="middle" fill="#0f172a">mountains, hills,</text>
<text x="102" y="283" font-size="14" text-anchor="middle" fill="#0f172a">plains, rivers</text>
<rect x="208" y="40" width="185" height="200" fill="#e0f2fe"/>
<path d="M300,60 A75,80 0 0 0 225,140 L300,140 Z" fill="#fca5a5" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M300,60 A75,80 0 0 1 375,140 L300,140 Z" fill="#c4b5fd" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M225,140 A75,80 0 0 0 375,140 Z" fill="#fde68a" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<circle cx="270" cy="115" r="5" fill="#0f172a"/>
<circle cx="335" cy="110" r="5" fill="#0f172a"/>
<rect x="294" y="174" width="12" height="12" fill="#dc2626"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#b91c1c">POLITICAL</text>
<text x="300" y="265" font-size="14" text-anchor="middle" fill="#0f172a">borders, regions,</text>
<text x="300" y="283" font-size="14" text-anchor="middle" fill="#0f172a">cities, capital ■</text>
<rect x="406" y="40" width="185" height="200" fill="#e0f2fe"/>
<ellipse cx="498" cy="140" rx="75" ry="80" fill="#e5e7eb"/>
<text x="470" y="115" font-size="26" text-anchor="middle">🍇</text>
<text x="530" y="125" font-size="26" text-anchor="middle">🐄</text>
<text x="490" y="180" font-size="26" text-anchor="middle">🌾</text>
<text x="498" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c3aed">THEMATIC</text>
<text x="498" y="265" font-size="14" text-anchor="middle" fill="#0f172a">one theme only:</text>
<text x="498" y="283" font-size="14" text-anchor="middle" fill="#0f172a">farm products</text>
</svg>`
    },
    {
      type: "widget", title: "Game: physical map or political map?",
      widget: "classify",
      caption: "On which map do you look for these things? Natural elements are on the physical map, those decided by people on the political one.",
      options: {
        groups: ["🏔️ Physical map", "🏛️ Political map"],
        items: [
          ["the river Po", 0], ["the Alps", 0], ["Lake Garda", 0], ["the Po Valley", 0], ["the height of Mont Blanc", 0],
          ["the border with France", 1], ["Rome, the capital", 1], ["the 20 regions", 1], ["provincial capitals", 1], ["the names of countries", 1]
        ]
      }
    },
    {
      type: "example", title: "Practical example: which map do I need?",
      html: `<ul>
<li>🥾 You go on a mountain trip and want to follow the path → <b>topographic map</b> 1 : 25,000 (you can even see the huts and fountains).</li>
<li>🏙️ You have to find Via Garibaldi in a new city → <b>city map</b>.</li>
<li>🚗 You are going on holiday from Turin to Bari → <b>road map</b> of Italy (a thematic map: roads).</li>
<li>☀️ You want to know where it rains most in Italy → <b>thematic climate map</b>.</li>
<li>🌍 You want to see all the continents together → <b>world map</b> or <b>globe</b>.</li>
</ul>`
    },
    {
      type: "3d", title: "The globe: the Earth without distortion",
      scene: "globe",
      caption: "Rotate the globe. The globe is the only \"map\" that shows the Earth with the right shape: all flat maps distort it a little.",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Rome" },
          { lat: 72, lon: -40, label: "Greenland" },
          { lat: 2, lon: 21, label: "Africa (centre)" },
          { lat: 51.48, lon: 0, label: "Greenwich (0° meridian)" },
          { lat: 0, lon: -50, label: "Equator" },
          { lat: 90, lon: 0, label: "North Pole" }
        ]
      }
    },
    {
      type: "curiosity", title: "Did you know… Greenland looks as big as Africa?",
      html: `<p>On many world maps (those drawn with the method of <b>Gerardus Mercator</b>, in 1569) <b>Greenland</b> looks almost as big as <b>Africa</b>. In reality Africa is about <b>14 times bigger</b>! 😮</p>
<p>The reason: the Earth is a ball and, to "flatten" it onto a sheet, you have to stretch it. Lands near the poles get stretched enormously. That is why the <b>globe</b> is more faithful than any flat map.</p>`
    },
    {
      type: "curiosity", title: "Did you know… there is a map almost 7 metres long?",
      html: `<p>The <b>Tabula Peutingeriana</b> is a medieval copy of a road map of <b>ancient Rome</b>. It is a scroll about <b>6 metres 75 centimetres</b> long and only 34 cm high! It shows the roads of the Roman Empire, the cities and the distances between one stop and the next, like an old "satnav" for travellers. Today it is in Vienna.</p>`
    },
    {
      type: "alternatives", title: "Other ways to understand it",
      intro: "If the scale or the symbols seem difficult, try one of these paths.",
      tabs: [
        {
          label: "🧸 The world of toys",
          html: `<p>A toy <b>car</b> is a real car shrunk down. Often underneath it says <b>1 : 43</b>: it means the real car is <b>43 times</b> longer.</p>
<p>A map does the same thing with a territory: the scale tells you <b>how many times</b> reality has been shrunk. A doll's house, a model railway layout, a model aeroplane: they are all objects "to scale"!</p>`
        },
        {
          label: "🏃 Orienteering maps (Sweden and Norway)",
          html: `<p>In the Nordic countries children learn maps by playing <b>orienteering</b>: a race in the woods with a map and a compass, looking for marked points. Their maps use special colours, the same all over the world:</p>
<ul>
<li>⬜ <b>white</b> = woodland that is easy to run through;</li>
<li>🟩 <b>green</b> = thick woodland, hard to get through;</li>
<li>🟨 <b>yellow</b> = open meadow;</li>
<li>🟦 <b>blue</b> = water;</li>
<li>🟫 <b>brown</b> = landforms (contour lines);</li>
<li>⬛ <b>black</b> = paths, rocks, houses.</li>
</ul>
<p>Did you notice? Here white is not ice! That is why you must <b>always read the key</b>.</p>`
        },
        {
          label: "✏️ Draw your bedroom",
          html: `<p>The best way to understand a plan is to <b>make one</b>:</p>
<ol>
<li>Measure your bedroom with a tape measure (for example 4 m × 3 m).</li>
<li>Choose the scale 1 : 100: 1 m becomes 1 cm. Draw a rectangle of <b>4 cm × 3 cm</b>.</li>
<li>Draw the bed, wardrobe and desk from above, all shrunk.</li>
<li>Invent a symbol for each piece of furniture and write it in the <b>key</b>.</li>
<li>Draw the <b>North</b> arrow.</li>
</ol>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#f1f5f9"/>
<rect x="40" y="20" width="320" height="200" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
<rect x="50" y="30" width="90" height="140" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<rect x="55" y="35" width="80" height="30" fill="#ffffff" stroke="#1e3a8a"/>
<rect x="250" y="30" width="100" height="40" fill="#a16207"/>
<rect x="270" y="160" width="80" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<rect x="150" y="214" width="60" height="10" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="200" y="130" font-size="15" text-anchor="middle" fill="#475569">4 cm × 3 cm</text>
<text x="390" y="40" font-size="17" font-weight="bold" fill="#0f172a">KEY</text>
<rect x="390" y="55" width="22" height="16" fill="#93c5fd" stroke="#1e3a8a"/>
<text x="420" y="69" font-size="15" fill="#0f172a">bed</text>
<rect x="390" y="85" width="22" height="16" fill="#a16207"/>
<text x="420" y="99" font-size="15" fill="#0f172a">wardrobe</text>
<rect x="390" y="115" width="22" height="16" fill="#fbbf24" stroke="#92400e"/>
<text x="420" y="129" font-size="15" fill="#0f172a">desk</text>
<rect x="390" y="145" width="22" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="420" y="155" font-size="15" fill="#0f172a">door</text>
<text x="420" y="190" font-size="15" fill="#0f172a">scale 1 : 100</text>
<polygon points="545,30 535,60 555,60" fill="#dc2626"/>
<text x="545" y="80" font-size="18" font-weight="bold" text-anchor="middle" fill="#dc2626">N</text>
</svg>`
        },
        {
          label: "🌍 3D globe versus sheet of paper",
          html: `<p>Try "peeling" an orange and squashing the peel on the table: it tears or stretches! It is the same problem cartographers have with the Earth. Turn the globe and look at where Greenland and Africa are: on the globe you see their <b>true</b> sizes.</p>`,
          scene: "globe",
          options: { points: [ { lat: 72, lon: -40, label: "Greenland: 2.2 million km²" }, { lat: 2, lon: 21, label: "Africa: 30 million km²" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Map: how a map is made",
      nodes: [
        { id: "realta", label: "The real territory", x: 50, y: 6, color: "#16a34a", html: "Mountains, rivers, towns and roads, big and three-dimensional.", why: "The territory is too big to see all at once: that is why people have always tried to draw it, first on clay and skin, then on paper, today on a screen." },
        { id: "zenit", label: "View from above", x: 18, y: 30, color: "#0ea5e9", html: "The territory is looked at from above (overhead view).", why: "Only by looking from above does everything keep its shape and can distances be measured. Once people measured on the ground with optical instruments; from the 1800s photographs from balloons and aeroplanes were used, today satellite images." },
        { id: "scala", label: "Scale reduction", x: 50, y: 30, color: "#f97316", html: "All measurements are divided by the same number.", why: "If everything is shrunk in the same way, the shapes stay the same (they are \"similar\", as geometry says). So with a ruler you can work out the true distance: measurement on the map × the scale number." },
        { id: "simboli", label: "Symbols and key", x: 82, y: 30, color: "#a855f7", html: "Colours and signs in place of real things.", why: "A real house on a map of Italy would be smaller than a dot: so symbols are used. Many colours are conventions accepted all over the world (blue for water, green for plains), but every map explains them in its key." },
        { id: "nord", label: "Orientation (North)", x: 82, y: 58, color: "#dc2626", html: "North is usually at the top.", why: "It is a habit that spread in Europe with printed maps from the 1500s onwards, also linked to the use of the compass, whose needle points North. In the Middle Ages many European maps instead had East at the top, towards Jerusalem: hence the word \"orient\" (to seek the Orient)." },
        { id: "proiezione", label: "From sphere to sheet", x: 18, y: 58, color: "#0284c7", html: "The Earth is a sphere, the sheet is flat: every flat map distorts a little.", why: "Already Eratosthenes, around 240 BC, calculated the circumference of the Earth. Ptolemy (2nd century AD) taught how to draw the Earth with parallels and meridians. In 1569 Mercator invented a map that was very useful to sailors, but that enlarges lands near the poles." },
        { id: "fisica", label: "Physical map", x: 18, y: 88, color: "#65a30d", html: "Shows natural elements.", why: "It is used to understand how the territory is made: where you can farm (plains), where rivers flow, how high the mountains are. For relief, colour bands or contour lines are used." },
        { id: "politica", label: "Political map", x: 50, y: 88, color: "#e11d48", html: "Shows countries, regions, borders and cities.", why: "Borders cannot be seen on the ground: they are decided by people with laws and treaties, and can change over time. That is why political maps have to be updated more often than physical maps." },
        { id: "tematica", label: "Thematic map", x: 82, y: 88, color: "#7c3aed", html: "Shows one subject only (climate, roads, population…).", why: "By putting a single theme on a map you immediately see the differences between one place and another. One of the most famous was drawn by the doctor John Snow in 1854 in London: by marking the cholera patients he understood that the disease came from a water pump." }
      ],
      edges: [
        ["realta", "zenit", "is looked at"], ["realta", "scala", "is shrunk"], ["realta", "simboli", "is simplified"],
        ["zenit", "proiezione", "if it's the whole Earth"], ["simboli", "nord", "with"], ["scala", "fisica", "content"], ["scala", "politica", "content"], ["scala", "tematica", "content"],
        ["simboli", "tematica", "one theme"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz: types of maps",
      questions: [
        { type: "mc", q: "On which map do you find the borders between countries?", options: ["physical", "political", "topographic map of paths"], answer: 1, explain: "The political map shows countries, regions and borders." },
        { type: "mc", q: "The map that shows the whole Earth on one sheet is…", options: ["the world map", "the plan", "the city map"], answer: 0, explain: "The world map (or, if it is a ball, the globe)." },
        { type: "tf", q: "On a map at 1 : 1,000,000 you see more details than on a map at 1 : 25,000.", answer: false, explain: "It is the opposite: the bigger the second number, the more reality is shrunk and the fewer details you see." }
      ]
    }
  ],
  glossary: [
    { t: "Cartographer", d: "A person who draws maps." },
    { t: "Overhead view", d: "Looking at a place from above, perpendicularly." },
    { t: "Scale reduction", d: "Shrinking reality by dividing all measurements by the same number." },
    { t: "Scale", d: "The ratio between measurements on the map and real ones. 1 : 100 means 1 cm = 100 cm." },
    { t: "Key (legend)", d: "The box that explains the meaning of the map's symbols and colours." },
    { t: "Plan", d: "A drawing from above, at a very large scale, of a small space (room, house, school)." },
    { t: "Physical map", d: "A map that shows natural elements: mountains, plains, rivers, lakes, seas." },
    { t: "Political map", d: "A map that shows countries, regions, borders and cities." },
    { t: "Thematic map", d: "A map devoted to one subject only, such as climate, roads or population." },
    { t: "World map", d: "A map that represents the whole surface of the Earth on one sheet." },
    { t: "Globe", d: "A ball that represents the Earth with its spherical shape, without distortion." },
    { t: "Compass rose", d: "A drawing that shows the cardinal points: North, South, East, West." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Maps show the territory seen…", options: ["from the front", "from above", "from the side"], answer: 1, explain: "The overhead view, from above, is used." },
      { type: "mc", q: "What does the scale 1 : 100 mean?", options: ["1 cm on the map = 100 cm in reality", "1 m on the map = 100 km in reality", "the map has 100 symbols"], answer: 0, explain: "Each centimetre drawn corresponds to 100 cm, that is, 1 metre." },
      { type: "num", q: "Plan at a scale of 1 : 100. The bed on the drawing is 2 cm long. How many metres long is the real bed?", answer: 2, tol: 0, unit: "m", explain: "2 × 100 = 200 cm = 2 m." },
      { type: "num", q: "Scale 1 : 100. The gym is 20 m long. How many centimetres long will it be on the plan?", answer: 20, tol: 0, unit: "cm", explain: "With the scale 1 : 100 every metre becomes 1 cm: 20 m → 20 cm." },
      { type: "text", q: "What is the box that explains the symbols of a map called?", answer: ["key", "the key", "legend", "the legend"], explain: "The key (legend)." },
      { type: "mc", q: "On a physical map mountains are…", options: ["green", "brown", "light blue"], answer: 1, explain: "Brown, darker and darker where the mountains are higher." },
      { type: "mc", q: "You want to know where the border between Italy and Switzerland runs. You use a … map.", options: ["physical", "political", "climate"], answer: 1, explain: "Borders are on the political map." },
      { type: "mc", q: "A map that shows only rainfall in Italy is a … map.", options: ["thematic", "topographic", "political"], answer: 0, explain: "It deals with a single theme: it is thematic." },
      { type: "order", q: "Put in order from the map that shows the smallest place to the one that shows the biggest.", items: ["plan of the classroom", "city map", "map of the region", "map of Italy", "world map"], explain: "The bigger the territory, the more you have to shrink." },
      { type: "tf", q: "The globe shows the shape of the Earth better than a world map.", answer: true, explain: "The Earth is spherical like the globe; every flat map distorts it a little." },
      { type: "tf", q: "On Mercator's world maps Greenland looks smaller than it really is.", answer: false, explain: "It looks much bigger: lands near the poles get stretched." },
      { type: "mc", q: "Usually, on maps, North is…", options: ["at the bottom", "at the top", "on the right"], answer: 1, explain: "By convention North is at the top, shown by an arrow or by the compass rose." }
    ]
  }
});
