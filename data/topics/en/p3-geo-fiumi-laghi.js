TOPIC('en', {
  id: "p3-geo-fiumi-laghi",
  title: "Rivers and lakes",
  intro: `Every river makes a long journey: it is born in the mountains from a small <b>spring</b>, rushes down between the rocks, crosses the plain with wide curves and finally flows into the sea at the <b>mouth</b>. Along the way it meets other rivers and sometimes stops in a <b>lake</b>. Let's follow this journey, even in <b>3D</b>!`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Where does river water come from?",
      html: `<p>River water comes from the <b>sky</b>: it is the <b>rain</b> and <b>snow</b> that fall on the mountains. Some of it flows straight over the ground, some soaks underground and then comes out of <b>springs</b>, and some stays frozen in <b>glaciers</b> and melts slowly in summer.</p>
<p>The river carries the water to the <b>sea</b>; from the sea the Sun makes it evaporate, clouds form and it rains again on the mountains. This is the <b>water cycle</b>: rivers are the "roads" by which water returns to the sea.</p>
<p>Water always flows <b>downhill</b>, because of gravity: that is why rivers begin high up and end low down, in the sea, in a lake or in another river.</p>`
    },
    {
      type: "text",
      title: "Step 1: the river's journey",
      html: `<ol>
<li>💧 <b>Source</b>: the point where the river is born, usually in the mountains, from a spring or a glacier.</li>
<li>⛰️ <b>Upper course</b> (in the mountains): the bed is narrow and steep, the water is <b>fast</b>, forms rapids and <b>waterfalls</b> and carves deep <b>V</b>-shaped <b>valleys</b>. It drags big stones.</li>
<li>🌳 <b>Middle course</b> (in the hills): the river slows down and widens, and receives other rivers.</li>
<li>🌾 <b>Lower course</b> (on the plain): the water is <b>slow</b> and the river draws big curves called <b>meanders</b>. It deposits sand and fine silt.</li>
<li>🌊 <b>Mouth</b>: the point where the river ends, in the sea, in a lake or in another river.</li>
</ol>
<p>The "channel" in which the water flows is called the <b>bed</b>; its edges are the <b>banks</b>; the earth ridges built to prevent floods are the <b>embankments</b> (levees). Looking towards the mouth, the bank on the right is the <b>right bank</b> and the one on the left is the <b>left bank</b>.</p>`
    },
    {
      type: "svg",
      title: "From the source to the mouth",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#e0f2fe"/>
<path d="M0 150 L70 40 L130 110 L180 60 L250 170 L600 250 L600 330 L0 330 Z" fill="#a8a29e"/>
<path d="M50 70 L70 40 L90 68 Z M165 82 L180 60 L196 86 Z" fill="#ffffff"/>
<path d="M200 180 L600 250 L600 330 L120 330 Z" fill="#86efac"/>
<path d="M480 260 L600 250 L600 330 L460 330 Z" fill="#3b82f6"/>
<path d="M95 85 Q110 120 140 150 Q170 175 200 190 Q260 215 300 235 Q260 250 320 262 Q390 270 360 285 Q420 300 475 290" stroke="#2563eb" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M475 290 L500 275 M475 290 L505 300 M475 290 L495 315" stroke="#2563eb" stroke-width="5"/>
<path d="M250 140 Q240 180 230 200" stroke="#60a5fa" stroke-width="5" fill="none"/>
<circle cx="95" cy="85" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="3"/>
<g font-size="15" font-weight="bold" fill="#0f172a">
<text x="20" y="25">💧 source</text>
<text x="100" y="175">upper course</text>
<text x="100" y="193" font-size="12" font-weight="normal">fast, V-shaped valley</text>
<text x="275" y="200">tributary</text>
<text x="270" y="310">meanders</text>
<text x="500" y="245">mouth (delta)</text>
<text x="540" y="320" fill="#ffffff">sea</text>
</g>
<path d="M120 30 L160 30" stroke="#f59e0b" stroke-width="3"/>
<text x="165" y="35" font-size="13" fill="#78350f">high up: fast water → low down: slow water</text>
</svg>`,
      caption: "A river's journey: in the mountains the water races and carves, on the plain it slows down and draws curves, at the mouth it enters the sea."
    },
    {
      type: "3d",
      title: "The river landscape in 3D",
      scene: "terrain",
      caption: "Rotate the landscape and touch each label: that part lights up. Follow the water's journey from the glacier to the sea.",
      options: {
        features: {
          glacier: { label: "Glacier", html: "A big mass of ice on the highest mountains. In summer it melts a little and gives water to rivers even when it doesn't rain. The <b>Dora Baltea</b> is born from the glaciers of Mont Blanc." },
          peak: { label: "Peak", html: "The top of the mountain. The ridge lines between the peaks are the <b>watersheds</b>: rain that falls on one side goes into one river, rain that falls on the other side goes into another." },
          mountain: { label: "Mountain", html: "Here it rains and snows the most: mountains are the \"water tanks\" of rivers." },
          source: { label: "Source", html: "The point where the river is born. The <b>Po</b> is born in Piedmont, at <b>Pian del Re</b>, at about 2000 metres, at the foot of Monviso." },
          valley: { label: "Valley", html: "With the force of water and stones the river carves the rock: river valleys have a <b>V</b> shape. Valleys carved by glaciers, instead, have a <b>U</b> shape." },
          river: { label: "River", html: "A watercourse that flows all year round. On the plain it slows down and forms <b>meanders</b>, big S-shaped curves." },
          lake: { label: "Lake", html: "Fresh water collected in a hollow of the ground. The river that enters the lake is called the <b>inflow</b>, the one that leaves it the <b>outflow</b>." },
          plain: { label: "Plain", html: "Often it is the river itself that built it, depositing sand and silt for thousands of years: the <b>Po Valley</b> was formed by the Po and its tributaries." },
          delta: { label: "Delta", html: "A triangle-shaped mouth, divided into many branches, formed when the river carries more debris than the sea can carry away. Example: the <b>Po delta</b>." },
          sea: { label: "Sea", html: "The end of the journey. The river's fresh water mixes with the salty water of the sea… and sooner or later it will evaporate and rain again on the mountains." }
        }
      }
    },
    {
      type: "quiz",
      title: "Mini-quiz: the river's journey",
      questions: [
        { type: "mc", q: "What is the point where a river is born called?", options: ["Mouth", "Source", "Delta"], answer: 1, explain: "The river is born at the source and ends at the mouth." },
        { type: "mc", q: "Where is river water fastest?", options: ["In the mountains", "On the plain", "At the mouth"], answer: 0, explain: "In the mountains the slope is steep and the water runs fast." },
        { type: "tf", q: "Meanders are the big curves the river makes on the plain.", answer: true, explain: "On the plain the water is slow and the river winds, forming meanders." }
      ]
    },
    {
      type: "text",
      title: "Step 2: tributaries, torrents and basin",
      html: `<ul>
<li>A <b>tributary</b> is a river that flows into a bigger river. The Po has very many tributaries: from the left (from the Alps) the <b>Dora Baltea</b>, the <b>Ticino</b>, the <b>Adda</b>, the <b>Oglio</b>, the <b>Mincio</b>; from the right (from the Apennines) the <b>Tanaro</b>, the <b>Trebbia</b>, the <b>Taro</b>, the <b>Panaro</b>.</li>
<li>The point where two rivers join is called a <b>confluence</b>.</li>
<li>A <b>torrent</b> is a watercourse that in summer can be almost dry and after storms swells suddenly. In Italy there are many, especially in the Apennines and in the South, where it rains little in summer.</li>
<li>A <b>stream</b> (brook) is a small watercourse.</li>
<li>The <b>drainage basin</b> is all the land from which rainwater ends up in a certain river. The basin of the Po is about <b>71,000 km²</b>: almost a quarter of Italy!</li>
</ul>
<p>The amount of water in a river changes during the year: this is called its <b>regime</b>. Alpine rivers are fullest in spring and summer, when snow and glaciers melt; Apennine ones in autumn and winter, when it rains more.</p>`
    },
    {
      type: "widget",
      title: "The parts of a river",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<path d="M0 0 L200 0 L120 120 L0 160 Z" fill="#a8a29e"/>
<path d="M60 20 Q70 10 80 22 Z" fill="#ffffff"/>
<path d="M500 220 L600 200 L600 300 L470 300 Z" fill="#3b82f6"/>
<path d="M70 40 Q100 90 150 120 Q230 150 260 180 Q300 210 360 200 Q420 190 430 230 Q440 260 490 255" stroke="#2563eb" stroke-width="9" fill="none" stroke-linecap="round"/>
<path d="M330 40 Q320 100 285 190" stroke="#60a5fa" stroke-width="6" fill="none"/>
<ellipse cx="200" cy="245" rx="70" ry="30" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
<path d="M240 190 Q230 205 220 218" stroke="#2563eb" stroke-width="5" fill="none"/>
<circle cx="70" cy="40" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 70, y: 40, label: "Source" },
          { x: 325, y: 70, label: "Tributary" },
          { x: 285, y: 192, label: "Confluence" },
          { x: 420, y: 200, label: "Meander" },
          { x: 200, y: 245, label: "Lake" },
          { x: 490, y: 255, label: "Mouth" },
          { x: 90, y: 120, label: "Mountain" }
        ]
      },
      caption: "Touch each point and choose the right name."
    },
    {
      type: "text",
      title: "Step 3: two kinds of mouth",
      html: `<p>Not all rivers end in the same way:</p>
<ul>
<li><b>Delta mouth</b>: the river splits into many branches and forms a triangle of new land, because it carries a lot of debris and the sea (with few tides) cannot carry it away. Examples: the <b>Po</b>, the <b>Nile</b>, the <b>Danube</b>.</li>
<li><b>Estuary mouth</b>: the river ends in a single wide funnel-shaped mouth, "cleaned" by the <b>tides</b> that flow in and out. Examples: the <b>Thames</b> in London, the <b>Seine</b> in France, the <b>Río de la Plata</b> in South America.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Delta and estuary",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<rect x="10" y="10" width="280" height="240" fill="#86efac"/>
<rect x="10" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M150 10 L150 110" stroke="#2563eb" stroke-width="10"/>
<path d="M150 110 L90 175 M150 110 L130 178 M150 110 L170 178 M150 110 L210 175" stroke="#2563eb" stroke-width="6"/>
<path d="M150 110 L70 170 L230 170 Z" fill="#facc15" opacity="0.45"/>
<text x="150" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">DELTA</text>
<text x="150" y="225" font-size="14" text-anchor="middle" fill="#ffffff">many branches, triangle</text>
<rect x="310" y="10" width="280" height="240" fill="#86efac"/>
<rect x="310" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M450 10 L450 90" stroke="#2563eb" stroke-width="10"/>
<path d="M445 90 L380 172 L520 172 L455 90 Z" fill="#3b82f6"/>
<text x="450" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ESTUARY</text>
<text x="450" y="225" font-size="14" text-anchor="middle" fill="#ffffff">a single funnel-shaped mouth</text>
</svg>`,
      caption: "In a delta the river builds new land; in an estuary the sea enters the river with the tides."
    },
    {
      type: "text",
      title: "Step 4: lakes",
      html: `<p>A <b>lake</b> is a mass of water (usually fresh) that fills a <b>basin</b>, a "hole" in the ground. It is not directly connected to the sea. It is fed by rivers (the <b>inflows</b>), by springs on the bottom and by rain; often a river leaves it (the <b>outflow</b>).</p>
<p>Lakes are classified according to how the basin was formed:</p>
<ul>
<li>🧊 <b>Glacial</b>: carved by glaciers during the ice ages. They are long and narrow, like the big pre-Alpine lakes: <b>Garda</b>, <b>Maggiore</b>, <b>Como</b>, <b>Iseo</b>, <b>Orta</b>. The small Alpine tarns are glacial too.</li>
<li>🌋 <b>Volcanic</b>: in the crater of an extinct volcano. They are almost round: <b>Bolsena</b>, <b>Bracciano</b>, <b>Vico</b>, <b>Albano</b> (in Lazio).</li>
<li>🪨 <b>Tectonic</b>: in a basin created by movements of the Earth's crust, like <b>Trasimeno</b> in Umbria.</li>
<li>🏖️ <b>Coastal</b>: near the sea, separated by strips of sand, like <b>Lesina</b> and <b>Varano</b> in Puglia.</li>
<li>🏗️ <b>Artificial</b>: made by people with a <b>dam</b>, to have water and produce electricity, like the lake of <b>Ceresole Reale</b> in Piedmont.</li>
</ul>`
    },
    {
      type: "widget",
      title: "What kind of lake is it?",
      widget: "classify",
      caption: "Put each lake in the right group.",
      options: {
        groups: ["🧊 Glacial", "🌋 Volcanic", "🏖️ Coastal", "🏗️ Artificial"],
        items: [
          ["Lake Garda", 0], ["Lake Maggiore", 0], ["Lake Como", 0],
          ["Lake Bolsena", 1], ["Lake Bracciano", 1], ["Lake Albano", 1],
          ["Lake Lesina", 2], ["Lake Varano", 2],
          ["Lake Ceresole Reale (with a dam)", 3]
        ]
      }
    },
    {
      type: "example",
      title: "Practical example: the journey of the Po",
      html: `<p>The <b>Po</b> is the longest river in Italy: <b>652 km</b>.</p>
<ul>
<li>It is born in <b>Piedmont</b>, at <b>Pian del Re</b> (about 2000 m), at the foot of <b>Monviso</b>.</li>
<li>It rushes down the valley, then reaches the plain and crosses <b>Turin</b>.</li>
<li>It flows from West to East across the <b>Po Valley</b>, between Piedmont, Lombardy, Emilia-Romagna and Veneto, passing near Piacenza, Cremona and Ferrara.</li>
<li>It receives more than 140 tributaries.</li>
<li>It flows into the <b>Adriatic Sea</b> with a big <b>delta</b>, between Veneto and Emilia-Romagna, now a nature park.</li>
</ul>
<p>After the Po, the longest rivers in Italy are the <b>Adige</b> (about 410 km) and the <b>Tiber</b> (about 405 km), which crosses Rome.</p>`
    },
    {
      type: "example",
      title: "Practical example: what are rivers and lakes useful for?",
      html: `<ul>
<li>🚰 <b>Water</b> for drinking and for homes (after being purified).</li>
<li>🌾 <b>Irrigation</b>: canals that bring water to the fields. The Po Valley is full of canals, like the <b>Cavour Canal</b> in Piedmont.</li>
<li>⚡ <b>Energy</b>: dams and hydroelectric power stations turn the force of falling water into electricity.</li>
<li>🚢 <b>Transport</b>: once boats and barges carried goods on rivers; even today big ships sail on the Rhine and the Danube.</li>
<li>🐟 <b>Fishing</b>, sport and tourism: canoeing, sailing, swimming in lakes.</li>
<li>🏙️ Many <b>cities</b> were born on rivers: Rome on the Tiber, Florence on the Arno, Turin on the Po, Paris on the Seine, London on the Thames.</li>
</ul>
<p>But rivers must be <b>respected</b>: they can burst their banks and cause <b>floods</b>. That is why we should not build too close to the embankments, and we must keep rivers clean.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… Lake Baikal holds a fifth of the world's lake fresh water?",
      html: `<p><b>Lake Baikal</b>, in Siberia (Russia), is the <b>deepest</b> lake in the world: <b>1642 metres</b>! It contains about <b>20%</b> of all the liquid fresh water in the lakes and rivers of the Earth. It is also one of the oldest: it is about 25 million years old. In winter it freezes and the ice is so thick that cars drive over it.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… the world's biggest \"lake\" is called a sea?",
      html: `<p>The <b>Caspian Sea</b>, between Europe and Asia, is really the biggest lake in the world: about <b>371,000 km²</b>, bigger than Italy (about 302,000 km²)! It is called a "sea" because its water is a little <b>salty</b>. The biggest freshwater lake is <b>Lake Superior</b>, between Canada and the United States.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… the Nile or the Amazon?",
      html: `<p>The <b>Nile</b> (about 6650 km) and the <b>Amazon</b> (about 6400 km, but some scholars say more) compete for the title of longest river in the world: it depends on where you put the source! On the amount of water, however, there is no contest: the Amazon carries to the sea about <b>a fifth</b> of all the water of the world's rivers.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand rivers and lakes",
      intro: "If there are too many words, try looking at the river in a different way.",
      tabs: [
        {
          label: "🌳 The river as a tree",
          html: `<p>Look at a river from above with all its tributaries: it looks like an upside-down <b>tree</b>!</p>
<ul>
<li>the <b>roots</b> and the smallest twigs are the streams in the mountains;</li>
<li>the <b>branches</b> are the tributaries;</li>
<li>the <b>trunk</b> is the main river;</li>
<li>the point where the trunk touches the ground is the <b>mouth</b>.</li>
</ul>
<p>And the whole crown of the tree? It is the <b>drainage basin</b>. Tree-like shapes are called <b>dendritic</b> (from the Greek <i>déndron</i>, tree).</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<path d="M300 250 L300 160" stroke="#2563eb" stroke-width="12"/>
<path d="M300 160 Q240 120 180 90 M300 160 Q360 120 420 90 M300 190 Q230 180 160 170 M300 190 Q380 185 450 165" stroke="#2563eb" stroke-width="7" fill="none"/>
<path d="M180 90 Q150 60 120 40 M180 90 Q190 55 200 30 M420 90 Q450 60 480 40 M420 90 Q400 55 390 25 M160 170 Q120 150 90 130 M450 165 Q490 145 520 120" stroke="#60a5fa" stroke-width="4" fill="none"/>
<text x="310" y="245" font-size="15" fill="#1e3a8a" font-weight="bold">mouth (trunk)</text>
<text x="440" y="200" font-size="15" fill="#1e3a8a" font-weight="bold">tributaries (branches)</text>
<text x="60" y="30" font-size="15" fill="#1e3a8a" font-weight="bold">streams and springs</text>
</svg>`
        },
        {
          label: "🧪 The baking-tray experiment",
          html: `<p>Build a miniature river:</p>
<ol>
<li>Put some damp <b>sand</b> in a baking tray, higher on one side (the "mountain").</li>
<li>Rest the tray slightly tilted, with the low end over a sink or a bowl (the "sea").</li>
<li>Slowly pour water from a glass onto the high part.</li>
</ol>
<p>Watch: the water carves a <b>furrow</b> (the valley), splits and joins again (tributaries and confluences), at the bottom it slows down and leaves the sand, forming a little <b>delta</b>! If you dig a hole in the sand, the water fills it: here is a <b>lake</b> with its inflow and its outflow.</p>`
        },
        {
          label: "🌍 The world's great rivers",
          html: `<p>Rotate the globe and find the mouths of the most famous rivers. Notice that the great ancient civilisations were born near rivers: Egyptians on the Nile, Sumerians between the Tigris and the Euphrates, Indians on the Indus, Chinese on the Yellow River.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.5, lon: 31.0, label: "Nile (~6650 km)", color: "#2563eb" },
              { lat: -0.5, lon: -50.0, label: "Amazon (~6400 km)", color: "#16a34a" },
              { lat: 31.4, lon: 121.9, label: "Yangtze (~6300 km)", color: "#f97316" },
              { lat: 29.0, lon: -89.3, label: "Mississippi", color: "#a855f7" },
              { lat: 45.2, lon: 29.6, label: "Danube", color: "#0ea5e9" },
              { lat: 44.95, lon: 12.45, label: "Po (652 km)", color: "#dc2626" },
              { lat: 53.5, lon: 108.0, label: "Lake Baikal", color: "#06b6d4" },
              { lat: 42.0, lon: 50.5, label: "Caspian Sea", color: "#06b6d4" }
            ]
          }
        },
        {
          label: "🇮🇹 The words in Italian",
          html: `<p>Flip the cards: you will find the Italian words for rivers and lakes, as they appear on Italian maps!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🏞️ river", back: "fiume" },
              { front: "💧 spring / source", back: "sorgente" },
              { front: "🌊 mouth", back: "foce" },
              { front: "🔀 tributary", back: "affluente" },
              { front: "〰️ meander", back: "meandro" },
              { front: "🏔️ glacier", back: "ghiacciaio" },
              { front: "🛶 lake", back: "lago" },
              { front: "🧱 dam", back: "diga" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why are rivers and lakes the way they are? Touch the nodes",
      nodes: [
        { id: "ciclo", label: "🌧️ Water cycle", x: 50, y: 5, color: "#0ea5e9", html: "Evaporation, clouds, rain and snow.", why: "The Sun makes the water of the seas evaporate; the vapour rises, cools and forms clouds; then it falls as rain or snow. That all river water comes from rain was shown by the Frenchman Pierre Perrault in 1674, by measuring the rain and the water of the Seine." },
        { id: "gravita", label: "⬇️ Gravity", x: 20, y: 25, color: "#7c3aed", html: "Water always flows downhill.", why: "It is the same force that makes apples fall, described by Isaac Newton in 1687. The steeper the ground, the more the water speeds up: that is why rivers are fast in the mountains." },
        { id: "sorgente", label: "💧 Spring", x: 80, y: 25, color: "#06b6d4", html: "Where the river is born.", why: "Rainwater soaks into porous or cracked rocks, flows underground and comes out where it finds a layer of impermeable rock that blocks it." },
        { id: "erosione", label: "⛏️ Erosion", x: 20, y: 50, color: "#b45309", html: "Fast water carves and carries stones.", why: "Running water drags stones and sand that strike the bed like a file: over thousands of years it carves deep valleys. The Grand Canyon was carved by the Colorado River in a few million years." },
        { id: "deposito", label: "🏝️ Deposition", x: 50, y: 50, color: "#eab308", html: "Slow water leaves sand and silt.", why: "The slower the water, the less weight it can carry: first it drops the stones, then the sand, finally the very fine silt. This is how alluvial plains and deltas are born." },
        { id: "meandri", label: "〰️ Meanders and delta", x: 80, y: 55, color: "#2563eb", html: "Curves on the plain, a branching mouth.", why: "In a bend the water is faster on the outer bank (which gets eroded) and slower on the inner one (where sand is deposited): the bend gets wider and wider. The name comes from the Meander river in Turkey, famous for its curves." },
        { id: "ghiacciai", label: "🧊 Ancient glaciers", x: 25, y: 80, color: "#38bdf8", html: "During the ice ages they carved big basins.", why: "Until about 20,000 years ago huge tongues of ice came down from the Alps as far as the plain. They carved deep basins (the bottom of Lake Como goes below sea level!) and left hills of debris, the moraines, that act as a dam." },
        { id: "laghi", label: "🛶 Lakes", x: 60, y: 90, color: "#0369a1", html: "Glacial, volcanic, tectonic, coastal, artificial.", why: "A lake forms wherever there is a basin that holds water: a crater, a valley carved by ice, a sinking of the crust, a dune or a dam. Sooner or later rivers fill it with debris: lakes, too, slowly \"grow old\"." }
      ],
      edges: [
        ["ciclo", "sorgente", "feeds the"],
        ["ciclo", "gravita", "water falls because of"],
        ["gravita", "erosione", "fast water:"],
        ["erosione", "deposito", "debris ends up in"],
        ["deposito", "meandri", "forms"],
        ["sorgente", "meandri", "the river flows as far as"],
        ["ghiacciai", "laghi", "carve the basins of"],
        ["erosione", "ghiacciai", "ice carves too:"]
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>The river is born at the <b>source</b>, flows in its <b>bed</b> and ends at the <b>mouth</b>.</li>
<li>In the mountains it is <b>fast</b> and carves V-shaped valleys; on the plain it is <b>slow</b> and forms <b>meanders</b>.</li>
<li><b>Tributaries</b> flow into a bigger river; a <b>torrent</b> can be dry in summer.</li>
<li>The mouth can be a <b>delta</b> (many branches) or an <b>estuary</b> (a funnel-shaped mouth).</li>
<li>A <b>lake</b> fills a basin: it can be glacial, volcanic, tectonic, coastal or artificial. The river that enters is the <b>inflow</b>, the one that leaves is the <b>outflow</b>.</li>
<li>The Po (652 km) is the longest river in Italy; Garda is the biggest lake.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: lakes",
      questions: [
        { type: "mc", q: "What is the river that leaves a lake called?", options: ["Inflow", "Outflow", "Tributary"], answer: 1, explain: "The outflow leaves, the inflow comes in." },
        { type: "mc", q: "The lakes Bolsena and Bracciano, almost round, are of … origin.", options: ["glacial", "volcanic", "artificial"], answer: 1, explain: "They lie in the craters of ancient volcanoes in Lazio." },
        { type: "mc", q: "Which is the biggest lake in Italy?", options: ["Lake Como", "Lake Garda", "Lake Trasimeno"], answer: 1, explain: "Lake Garda, about 370 km²." }
      ]
    }
  ],
  glossary: [
    { t: "Source", d: "The point where a river is born." },
    { t: "Mouth", d: "The point where a river ends, in the sea, in a lake or in another river." },
    { t: "Bed", d: "The channel in which the river's water flows." },
    { t: "Embankment", d: "A ridge of earth along the river that stops the water from spilling out." },
    { t: "Tributary", d: "A river that flows into another river." },
    { t: "Confluence", d: "The point where two rivers join." },
    { t: "Torrent", d: "A watercourse with plenty of water after rain and little or none in summer." },
    { t: "Meander", d: "A big S-shaped curve that a river forms on the plain." },
    { t: "Delta", d: "A mouth divided into many branches, shaped like a triangle." },
    { t: "Estuary", d: "A single-branch mouth, wide and funnel-shaped." },
    { t: "Drainage basin", d: "The land from which all the waters end up in a certain river." },
    { t: "Inflow / Outflow", d: "The river that enters a lake / the river that leaves a lake." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Put the river's journey in order.", items: ["Source", "Upper course (mountains)", "Lower course (plain)", "Mouth"], explain: "The river is born in the mountains and ends at the mouth." },
      { type: "mc", q: "Where does river water come from?", options: ["From rain, snow and glaciers", "Only from the sea", "From taps"], answer: 0, explain: "It is the water of the water cycle: rain, snow and melting ice." },
      { type: "text", q: "What is a river that flows into another river called?", answer: ["tributary", "a tributary", "the tributary"], explain: "It is called a tributary; the meeting point is the confluence." },
      { type: "tf", q: "On the plain a river's water is faster than in the mountains.", answer: false, explain: "On the plain the ground is almost flat and the water slows down." },
      { type: "mc", q: "Which is the longest river in Italy?", options: ["The Tiber", "The Arno", "The Po"], answer: 2, explain: "The Po, 652 km, is born at Monviso and flows into the Adriatic." },
      { type: "num", q: "The Po is 652 km long and the Tiber 405 km. How many km longer is the Po?", answer: 247, tol: 0, unit: "km", explain: "652 − 405 = 247 km." },
      { type: "mc", q: "A mouth divided into many branches in a triangle shape is called a…", options: ["estuary", "delta", "meander"], answer: 1, explain: "Delta, like the Greek letter Δ." },
      { type: "mc", q: "What is a torrent?", options: ["A river that in summer can be almost dry", "A mountain lake", "A river with no mouth"], answer: 0, explain: "Torrents depend on rainfall: in summer they can dry up." },
      { type: "mc", q: "The big lakes of northern Italy (Garda, Maggiore, Como) are of … origin.", options: ["volcanic", "glacial", "coastal"], answer: 1, explain: "Their basins were carved by the glaciers of the ice ages." },
      { type: "tf", q: "The outflow is the river that leaves a lake.", answer: true, explain: "The inflow comes in, the outflow goes out." },
      { type: "mc", q: "Which is the deepest lake in the world?", options: ["The Caspian Sea", "Baikal", "Lake Garda"], answer: 1, explain: "Baikal, in Siberia, 1642 metres deep." },
      { type: "text", q: "What is the big S-shaped curve a river makes on the plain called?", answer: ["meander", "the meander", "meanders", "a meander"], explain: "The meander." }
    ],
    gen: [["sub100", 2]]
  }
});
