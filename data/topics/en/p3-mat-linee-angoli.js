TOPIC('en', {
 "id": "p3-mat-linee-angoli",
 "title": "Lines and angles",
 "intro": "Look around you: train tracks 🚆, the edges of your desk, the hands of a clock 🕒… they are all made of <b>lines</b> and <b>angles</b>! Let's learn to recognise lines, rays and line segments, and to give names to angles.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Many kinds of lines",
   "html": "<p>A <b>line</b> is the mark left by the tip of a pencil when it moves over the paper. There are lines that are:</p>\n<ul>\n<li><b>curved</b> 〰️: they change direction smoothly, like a wave;</li>\n<li><b>straight</b> ➖: they always go the same way;</li>\n<li><b>broken</b> ⚡: made of straight pieces that suddenly change direction;</li>\n<li><b>mixed</b>: partly curved and partly straight.</li>\n</ul>\n<p>A line can be <b>open</b> (the ends do not touch) or <b>closed</b> (it ends where it started, like the edge of a circle ⭕). A closed line divides the page into an <b>inside region</b> and an <b>outside region</b>.</p>"
  },
  {
   "type": "text",
   "title": "Straight line, ray and line segment",
   "html": "<p>Straight lines have three important \"cousins\":</p>\n<ul>\n<li><b>Straight line</b> ↔️: it has no start and no end, it goes on <b>forever</b> in both directions. On paper we only draw a piece of it.</li>\n<li><b>Ray</b> •→: it has a <b>starting point</b> (the <b>origin</b>) and then goes on forever in one direction only, like the beam of a torch 🔦.</li>\n<li><b>Line segment</b> •—•: it has a <b>start</b> and an <b>end</b> (two <b>endpoints</b>). It is the only one that can be <b>measured</b> with a ruler! 📏</li>\n</ul>\n<p>Points are named with <b>capital letters</b>: the segment from A to B is called <b>AB</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Line, ray, segment",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<defs><marker id=\"fr\" markerWidth=\"12\" markerHeight=\"12\" refX=\"6\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 L12 6 L0 12 z\" fill=\"#2563eb\"/></marker><marker id=\"fl\" markerWidth=\"12\" markerHeight=\"12\" refX=\"6\" refY=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L12 6 L0 12 z\" fill=\"#2563eb\"/></marker><marker id=\"fg\" markerWidth=\"12\" markerHeight=\"12\" refX=\"6\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 L12 6 L0 12 z\" fill=\"#16a34a\"/></marker></defs>\n<line x1=\"60\" y1=\"60\" x2=\"540\" y2=\"60\" stroke=\"#2563eb\" stroke-width=\"5\" marker-start=\"url(#fl)\" marker-end=\"url(#fr)\"/>\n<text x=\"300\" y=\"95\" font-size=\"22\" fill=\"#1d4ed8\" text-anchor=\"middle\" font-weight=\"bold\">LINE: no start and no end</text>\n<line x1=\"80\" y1=\"150\" x2=\"540\" y2=\"150\" stroke=\"#16a34a\" stroke-width=\"5\" marker-end=\"url(#fg)\"/>\n<circle cx=\"80\" cy=\"150\" r=\"9\" fill=\"#16a34a\"/>\n<text x=\"70\" y=\"135\" font-size=\"20\" fill=\"#166534\" font-weight=\"bold\">O</text>\n<text x=\"300\" y=\"185\" font-size=\"22\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">RAY: one origin, then forever</text>\n<line x1=\"150\" y1=\"240\" x2=\"450\" y2=\"240\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<circle cx=\"150\" cy=\"240\" r=\"9\" fill=\"#dc2626\"/><circle cx=\"450\" cy=\"240\" r=\"9\" fill=\"#dc2626\"/>\n<text x=\"140\" y=\"225\" font-size=\"20\" fill=\"#991b1b\" font-weight=\"bold\">A</text>\n<text x=\"445\" y=\"225\" font-size=\"20\" fill=\"#991b1b\" font-weight=\"bold\">B</text>\n<text x=\"300\" y=\"280\" font-size=\"22\" fill=\"#991b1b\" text-anchor=\"middle\" font-weight=\"bold\">SEGMENT AB: two endpoints, it can be measured</text>\n</svg>",
   "caption": "The arrows show that the line goes on forever; the dots are the points where it starts or ends."
  },
  {
   "type": "text",
   "title": "How lines sit: position",
   "html": "<p>Compared with the page (or the floor) a line can be:</p>\n<ul>\n<li><b>horizontal</b> ➖ like the horizon over the sea;</li>\n<li><b>vertical</b> | like a plumb line or a lamp post;</li>\n<li><b>oblique</b> ⟋ that is, slanted, like a slide 🛝.</li>\n</ul>\n<p>Two lines, in relation to each other, can be:</p>\n<ul>\n<li><b>parallel</b> ⏸: they never meet, they always stay the same distance apart, like <b>railway tracks</b>;</li>\n<li><b>intersecting</b> ✖️: they meet at one point;</li>\n<li><b>perpendicular</b> ➕: they intersect and form <b>4 right angles</b>, like the lines of a squared notebook.</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Find parallel and perpendicular lines in a cube",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "color": "#60a5fa",
    "labels": true
   },
   "caption": "Turn the cube: the edges that are \"side by side\" without touching are parallel; the ones that meet at a vertex form right angles, that is, they are perpendicular."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: lines",
   "questions": [
    {
     "type": "mc",
     "q": "Which line has two endpoints and can be measured?",
     "options": [
      "The straight line",
      "The ray",
      "The line segment"
     ],
     "answer": 2,
     "explain": "The segment has a start and an end: it can be measured with a ruler."
    },
    {
     "type": "mc",
     "q": "Railway tracks are…",
     "options": [
      "parallel",
      "perpendicular",
      "intersecting"
     ],
     "answer": 0,
     "explain": "They never meet and stay the same distance apart: parallel."
    },
    {
     "type": "tf",
     "q": "A straight line has a starting point called the origin.",
     "answer": false,
     "explain": "A straight line has no start and no end. It is the ray that has an origin."
    }
   ]
  },
  {
   "type": "text",
   "title": "What an angle is",
   "html": "<p>If <b>two rays</b> start from the same point, they divide the page into two parts. Each of these parts is an <b>angle</b>.</p>\n<ul>\n<li>the point they start from is called the <b>vertex</b>;</li>\n<li>the two rays are called the <b>sides</b> of the angle;</li>\n<li>the \"opening\" between the sides is the <b>size</b> (or <b>measure</b>).</li>\n</ul>\n<p>⚠️ The size <b>does not depend on the length</b> of the sides you draw, but only on <b>how wide open</b> they are! An angle with long sides is not \"bigger\" than one with short sides, if the opening is the same.</p>\n<p>The size is measured in <b>degrees</b> (°) with a <b>protractor</b>.</p>"
  },
  {
   "type": "text",
   "title": "The names of angles",
   "html": "<table>\n<tr><th>Angle</th><th>What it is like</th><th>Degrees</th></tr>\n<tr><td>📐 <b>Right</b></td><td>like the corner of a sheet of paper; the sides are perpendicular</td><td>90°</td></tr>\n<tr><td>🔺 <b>Acute</b></td><td>narrower than a right angle</td><td>less than 90°</td></tr>\n<tr><td>🔓 <b>Obtuse</b></td><td>wider than a right angle but less than a straight angle</td><td>between 90° and 180°</td></tr>\n<tr><td>➖ <b>Straight</b></td><td>the sides form a straight line</td><td>180° (= 2 right angles)</td></tr>\n<tr><td>🔄 <b>Full turn</b></td><td>one side makes a complete turn and comes back to the other</td><td>360° (= 4 right angles)</td></tr>\n</table>\n<p>Trick: to find out whether an angle is right, place the <b>corner of a sheet of paper</b> or of a set square against it: if it fits, it is a right angle!</p>"
  },
  {
   "type": "svg",
   "title": "Acute, right, obtuse, straight",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/>\n<g stroke-width=\"5\" stroke-linecap=\"round\">\n<line x1=\"30\" y1=\"200\" x2=\"140\" y2=\"200\" stroke=\"#1f2937\"/><line x1=\"30\" y1=\"200\" x2=\"120\" y2=\"110\" stroke=\"#1f2937\"/>\n<line x1=\"180\" y1=\"200\" x2=\"280\" y2=\"200\" stroke=\"#1f2937\"/><line x1=\"180\" y1=\"200\" x2=\"180\" y2=\"100\" stroke=\"#1f2937\"/>\n<line x1=\"350\" y1=\"200\" x2=\"440\" y2=\"200\" stroke=\"#1f2937\"/><line x1=\"350\" y1=\"200\" x2=\"290\" y2=\"120\" stroke=\"#1f2937\"/>\n<line x1=\"460\" y1=\"200\" x2=\"590\" y2=\"200\" stroke=\"#1f2937\"/>\n</g>\n<path d=\"M70 200 A40 40 0 0 0 58 172\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"4\"/>\n<rect x=\"180\" y=\"170\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<path d=\"M390 200 A40 40 0 0 0 326 168\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<path d=\"M565 200 A40 40 0 0 0 485 200\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<circle cx=\"525\" cy=\"200\" r=\"7\" fill=\"#7c3aed\"/>\n<text x=\"85\" y=\"245\" font-size=\"22\" fill=\"#16a34a\" text-anchor=\"middle\" font-weight=\"bold\">acute</text>\n<text x=\"85\" y=\"272\" font-size=\"18\" fill=\"#16a34a\" text-anchor=\"middle\">&lt; 90°</text>\n<text x=\"230\" y=\"245\" font-size=\"22\" fill=\"#2563eb\" text-anchor=\"middle\" font-weight=\"bold\">right</text>\n<text x=\"230\" y=\"272\" font-size=\"18\" fill=\"#2563eb\" text-anchor=\"middle\">90°</text>\n<text x=\"370\" y=\"245\" font-size=\"22\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">obtuse</text>\n<text x=\"370\" y=\"272\" font-size=\"18\" fill=\"#dc2626\" text-anchor=\"middle\">between 90° and 180°</text>\n<text x=\"525\" y=\"245\" font-size=\"22\" fill=\"#7c3aed\" text-anchor=\"middle\" font-weight=\"bold\">straight</text>\n<text x=\"525\" y=\"272\" font-size=\"18\" fill=\"#7c3aed\" text-anchor=\"middle\">180°</text>\n<text x=\"300\" y=\"40\" font-size=\"22\" fill=\"#1f2937\" text-anchor=\"middle\">the coloured arc shows the size</text>\n</svg>",
   "caption": "The little blue square is the symbol of the right angle."
  },
  {
   "type": "widget",
   "title": "What kind of angle is it?",
   "widget": "classify",
   "options": {
    "groups": [
     "Acute",
     "Right",
     "Obtuse"
    ],
    "items": [
     [
      "📄 the corner of a sheet of paper",
      1
     ],
     [
      "🍕 the tip of a slice of pizza",
      0
     ],
     [
      "🕒 the clock hands at 3:00",
      1
     ],
     [
      "🕐 the clock hands at 1:00",
      0
     ],
     [
      "🕔 the clock hands at 5:00",
      2
     ],
     [
      "💻 a computer screen opened very wide",
      2
     ],
     [
      "🪟 the corner of a window",
      1
     ],
     [
      "✂️ scissors just slightly open",
      0
     ]
    ]
   },
   "caption": "Drag each object into the right group."
  },
  {
   "type": "example",
   "title": "Worked example: the clock",
   "html": "<p>The hands of a clock are two rays with the same vertex: the pivot in the middle! ⏰</p>\n<ul>\n<li>At <b>3:00</b> they form a <b>right</b> angle (90°).</li>\n<li>At <b>2:00</b> they form an <b>acute</b> angle (60°).</li>\n<li>At <b>4:00</b> they form an <b>obtuse</b> angle (120°).</li>\n<li>At <b>6:00</b> they form a <b>straight</b> angle (180°).</li>\n</ul>\n<p>In one hour the minute hand makes a <b>full turn</b>: 360°!</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the line hunt at school",
   "html": "<p>Go on a geometry treasure hunt in the classroom! 🔍</p>\n<ul>\n<li><b>Parallel lines</b>: the long sides of the board, the lines of your notebook.</li>\n<li><b>Perpendicular lines</b>: the corner where the wall meets the floor, the rows and columns of the squares.</li>\n<li><b>Segments</b>: the edge of the eraser, the pencil.</li>\n<li><b>Right angles</b>: the corners of the desk, the door, the book.</li>\n<li><b>Acute angles</b>: the tip of a sharpened pencil ✏️.</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>A full turn measures <b>360 degrees</b> thanks to the ancient <b>Babylonians</b>, who counted in base 60. Perhaps they chose it because the year lasts about 360 days and because 360 can be divided exactly by lots of numbers: 2, 3, 4, 5, 6, 8, 9, 10, 12…</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>The Greek mathematician <b>Euclid</b>, about 2300 years ago, wrote a very famous book, the <b>Elements</b>, in which he defined the point as <i>\"that which has no parts\"</i> and the line as <i>\"length without breadth\"</i>. For centuries it was the most studied geometry book in the world! 📜</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>Line: infinite in both directions. Ray: has an origin. Segment: has two endpoints.</li>\n<li>Parallel: never meet. Perpendicular: meet forming right angles.</li>\n<li>Angle = two rays with the same origin (vertex).</li>\n<li>Acute &lt; 90° · Right = 90° · Obtuse between 90° and 180° · Straight = 180° · Full turn = 360°.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand lines and angles",
   "intro": "Geometry is easier to understand by moving and touching. Try one of these routes!",
   "tabs": [
    {
     "label": "🙆 With your arms",
     "html": "<p>Stand up! Your body can make angles:</p>\n<ul>\n<li>one arm up and one out to the side → <b>right</b> angle 🙋;</li>\n<li>arms open in a straight line → <b>straight</b> angle 🤸;</li>\n<li>arms almost closed above your head → <b>acute</b> angle;</li>\n<li>a complete spin on the spot → <b>full turn</b>! 🔄</li>\n</ul>\n<p>Your shoulder is the <b>vertex</b>, your arms are the <b>sides</b>.</p>"
    },
    {
     "label": "🕒 With the clock",
     "html": "<p>Think of the minute hand starting from 12. Every 5 minutes it turns <b>30°</b>.</p>\n<ul>\n<li>After 15 minutes → <b>90°</b>, a right angle (a quarter turn).</li>\n<li>After 30 minutes → <b>180°</b>, a straight angle (a half turn).</li>\n<li>After 60 minutes → <b>360°</b>, a full turn.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#eff6ff\"/>\n<circle cx=\"130\" cy=\"130\" r=\"100\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"5\"/>\n<path d=\"M130 130 L130 30 A100 100 0 0 1 230 130 Z\" fill=\"#93c5fd\" opacity=\"0.8\"/>\n<line x1=\"130\" y1=\"130\" x2=\"130\" y2=\"45\" stroke=\"#1f2937\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n<line x1=\"130\" y1=\"130\" x2=\"215\" y2=\"130\" stroke=\"#dc2626\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n<circle cx=\"130\" cy=\"130\" r=\"8\" fill=\"#1f2937\"/>\n<text x=\"130\" y=\"25\" font-size=\"18\" text-anchor=\"middle\">12</text>\n<text x=\"245\" y=\"136\" font-size=\"18\">3</text>\n<text x=\"300\" y=\"80\" font-size=\"24\" fill=\"#1d4ed8\" font-weight=\"bold\">15 minutes</text>\n<text x=\"300\" y=\"120\" font-size=\"24\" fill=\"#1f2937\">= 1/4 of a turn</text>\n<text x=\"300\" y=\"160\" font-size=\"24\" fill=\"#dc2626\" font-weight=\"bold\">= 90° (right)</text>\n</svg>"
    },
    {
     "label": "🧊 In 3D solids",
     "html": "<p>Objects have lines and angles too! In this <b>box</b> (rectangular prism):</p>\n<ul>\n<li>the <b>edges</b> are segments;</li>\n<li>edges that meet form <b>right</b> angles;</li>\n<li>opposite edges of a face are <b>parallel</b>.</li>\n</ul>\n<p>Change the solid with the buttons: the pyramid has <b>acute</b> angles too!</p>",
     "scene": "solid",
     "options": {
      "shape": "box",
      "w": 3,
      "h": 2,
      "d": 1.5,
      "color": "#fbbf24",
      "labels": true,
      "shapes": [
       "box",
       "cube",
       "pyramid"
      ]
     }
    },
    {
     "label": "🗺️ The street analogy",
     "html": "<p>Think of the streets of a city:</p>\n<ul>\n<li>two streets running side by side without ever crossing are <b>parallel</b>;</li>\n<li>a <b>crossroads</b> is where two <b>intersecting</b> streets meet;</li>\n<li>if the crossroads forms a \"perfect\" cross ➕, the streets are <b>perpendicular</b>.</li>\n</ul>\n<p>In New York, Turin and Barcelona many streets are built like this, in a <b>grid</b>: all parallel or perpendicular!</p>"
    },
    {
     "label": "🔤 The letters of the alphabet",
     "html": "<p>Even capital letters hide lines and angles!</p>\n<ul>\n<li><b>L</b> and <b>T</b>: <b>right</b> angles, perpendicular segments.</li>\n<li><b>V</b> and <b>A</b>: <b>acute</b> angles.</li>\n<li><b>H</b>, <b>=</b>: <b>parallel</b> segments.</li>\n<li><b>X</b>: <b>intersecting</b> segments.</li>\n<li><b>O</b>, <b>C</b>, <b>S</b>: <b>curved</b> lines; the O is a <b>closed</b> line!</li>\n</ul>\n<p>Try writing your name and look for the angles! ✍️</p>"
    },
    {
     "label": "𓂀 The Egyptians' set square and plumb line",
     "html": "<p>The ancient <b>Egyptians</b> built huge pyramids and temples with perfectly straight walls. How did they do it without electronic tools? In a tomb in the workers' village of <b>Deir el-Medina</b>, that of <b>Sennedjem</b>, who worked on the pharaohs' tombs more than 3000 years ago, his tools were found: a <b>set square</b> and an <b>A-shaped level</b> with a <b>plumb line</b>.</p><ul><li>The <b>plumb line</b> is a string with a weight: the weight pulls the string down, so it always becomes <b>vertical</b>.</li><li>The A-shaped level: when the string passes exactly over the <b>centre mark</b>, the base of the A is <b>horizontal</b>.</li><li>The <b>set square</b> is used to check <b>right angles</b>.</li></ul><p>🎯 <b>Build your own plumb line</b>: tie an eraser to a piece of string and hold it still. The string is vertical. Place a set square against the string: the bottom side is horizontal. Vertical and horizontal are <b>perpendicular</b>: they form a right angle! Now check: is the door frame vertical? Is the desk horizontal?</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polyline points=\"150,260 300,40 450,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"12\" stroke-linejoin=\"round\"/><line x1=\"205\" y1=\"180\" x2=\"395\" y2=\"180\" stroke=\"#92400e\" stroke-width=\"10\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"215\" stroke=\"#1e293b\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"222\" r=\"10\" fill=\"#475569\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"300\" y1=\"172\" x2=\"300\" y2=\"188\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"110\" y1=\"266\" x2=\"490\" y2=\"266\" stroke=\"#16a34a\" stroke-width=\"4\"/><text x=\"320\" y=\"120\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">plumb line</text><text x=\"320\" y=\"140\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">(vertical)</text><text x=\"410\" y=\"288\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">horizontal base</text><text x=\"330\" y=\"200\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#dc2626\">centre mark</text><polyline points=\"30,40 30,130 120,130\" fill=\"none\" stroke=\"#a16207\" stroke-width=\"12\"/><text x=\"30\" y=\"160\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#a16207\" font-weight=\"bold\">set square</text><rect x=\"30\" y=\"112\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/></svg>"
    },
    {
     "label": "🇯🇵 The right angle with origami (Japan)",
     "html": "<p>In <b>Japan</b> <b>origami</b>, the art of paper folding, is also done at school. With two folds you can make a perfect <b>right angle</b>, even starting from a piece of paper with a completely crooked edge!</p><ol><li>Take any piece of paper and fold it in half, wherever you like. The edge of the fold is a <b>straight line</b>.</li><li>Now fold again, making the <b>fold match up with itself</b> (one part of the fold on top of the other).</li><li>Open the paper: the two folds cross and form <b>4 right angles</b>! The two folds are <b>perpendicular</b>.</li><li>Close it again and fold the right angle in half: you get an <b>acute</b> angle (half of a right angle).</li></ol><p>🎯 Use your \"paper right angle\" as a tool: place it against the corners of your book, the board, the window. If the angle is smaller it is <b>acute</b>, if it is bigger it is <b>obtuse</b>.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of lines and angles: tap a node to find out why",
   "nodes": [
    {
     "id": "punto",
     "label": "Point",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "The smallest \"place\" in geometry: it has no size. It is named with a capital letter.",
     "why": "Euclid, in the book <i>Elements</i> (about 300 BC), defined it as \"that which has no parts\". It is an idea: the dot of a pencil is just a way to see it."
    },
    {
     "id": "linea",
     "label": "Line",
     "x": 50,
     "y": 24,
     "color": "#0ea5e9",
     "html": "Curved, straight, broken or mixed; open or closed.",
     "why": "For Euclid it is \"length without breadth\". You can imagine it as the path of a moving point."
    },
    {
     "id": "retta",
     "label": "Straight line",
     "x": 18,
     "y": 42,
     "color": "#2563eb",
     "html": "A straight line with no start and no end.",
     "why": "One of Euclid's postulates says that through two points there passes one and only one straight line: that is why a ruler is enough to draw one."
    },
    {
     "id": "semi",
     "label": "Ray",
     "x": 50,
     "y": 48,
     "color": "#16a34a",
     "html": "A straight line cut at one point: it has an origin.",
     "why": "If you choose a point on a straight line, you divide it into two rays: \"semi-\" means \"half\"."
    },
    {
     "id": "seg",
     "label": "Segment",
     "x": 82,
     "y": 42,
     "color": "#dc2626",
     "html": "The piece of a straight line between two points: it can be measured.",
     "why": "The Italian word <i>segmento</i> comes from the Latin <i>secare</i>, \"to cut\": it is a piece cut from the line. It is the shortest line between two points."
    },
    {
     "id": "pos",
     "label": "Parallel and perpendicular",
     "x": 18,
     "y": 72,
     "color": "#f59e0b",
     "html": "Parallel: never meet. Perpendicular: meet at a right angle.",
     "why": "Euclid's fifth postulate is all about parallels. For 2000 years mathematicians tried to prove it; in the nineteenth century people discovered that other geometries exist, where \"straight lines\" are curved, like on the surface of a sphere."
    },
    {
     "id": "angolo",
     "label": "Angle",
     "x": 60,
     "y": 72,
     "color": "#a855f7",
     "html": "Part of the plane between two rays with the same origin (vertex).",
     "why": "It comes from the Latin <i>angulus</i>, \"corner, bend\". Only the opening counts, not the length of the sides."
    },
    {
     "id": "gradi",
     "label": "Degrees and kinds of angle",
     "x": 60,
     "y": 93,
     "color": "#ec4899",
     "html": "Acute, right (90°), obtuse, straight (180°), full turn (360°).",
     "why": "The Babylonians divided the full turn into 360 parts because they counted in base 60 and because 360 divides by lots of numbers. The tool for measuring is the protractor."
    }
   ],
   "edges": [
    [
     "punto",
     "linea",
     "moves and traces"
    ],
    [
     "linea",
     "retta",
     "if it is straight"
    ],
    [
     "retta",
     "semi",
     "cut at one point"
    ],
    [
     "retta",
     "seg",
     "cut at two points"
    ],
    [
     "retta",
     "pos",
     "two lines can be"
    ],
    [
     "semi",
     "angolo",
     "two with the same origin"
    ],
    [
     "angolo",
     "gradi",
     "is measured in"
    ],
    [
     "pos",
     "gradi",
     "perpendicular = 90°"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: angles",
   "questions": [
    {
     "type": "mc",
     "q": "An angle of 120° is…",
     "options": [
      "acute",
      "right",
      "obtuse"
     ],
     "answer": 2,
     "explain": "It is more than 90° and less than 180°: obtuse."
    },
    {
     "type": "num",
     "q": "How many degrees does a straight angle measure?",
     "answer": 180,
     "unit": "°",
     "explain": "A straight angle is like two right angles: 90° + 90° = 180°."
    },
    {
     "type": "tf",
     "q": "If I make the sides of an angle longer, the angle becomes wider.",
     "answer": false,
     "explain": "The size depends only on the opening of the sides, not on their length."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Straight line",
   "d": "A straight line with no start and no end."
  },
  {
   "t": "Ray",
   "d": "Part of a straight line with an origin, infinite in one direction."
  },
  {
   "t": "Line segment",
   "d": "Part of a straight line between two points (endpoints); it can be measured."
  },
  {
   "t": "Parallel lines",
   "d": "Lines that never meet."
  },
  {
   "t": "Intersecting lines",
   "d": "Lines that meet at a point."
  },
  {
   "t": "Perpendicular lines",
   "d": "Intersecting lines that form four right angles."
  },
  {
   "t": "Angle",
   "d": "Part of the plane between two rays with the same origin."
  },
  {
   "t": "Vertex",
   "d": "The point the sides of an angle start from."
  },
  {
   "t": "Right angle",
   "d": "An angle of 90°, like the corner of a sheet of paper."
  },
  {
   "t": "Protractor",
   "d": "A tool for measuring the size of angles in degrees."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Which line has no start and no end?",
    "options": [
     "Segment",
     "Straight line",
     "Ray"
    ],
    "answer": 1,
    "explain": "The straight line goes on forever in both directions."
   },
   {
    "type": "mc",
    "q": "What is the starting point of a ray called?",
    "options": [
     "Origin",
     "Final endpoint",
     "Side"
    ],
    "answer": 0,
    "explain": "The ray starts from the origin."
   },
   {
    "type": "tf",
    "q": "Two parallel lines sooner or later meet.",
    "answer": false,
    "explain": "Parallel lines never meet."
   },
   {
    "type": "mc",
    "q": "Two lines that meet forming 4 right angles are…",
    "options": [
     "parallel",
     "perpendicular",
     "oblique"
    ],
    "answer": 1,
    "explain": "They are perpendicular."
   },
   {
    "type": "num",
    "q": "How many degrees does a right angle measure?",
    "answer": 90,
    "unit": "°",
    "explain": "A right angle measures 90°."
   },
   {
    "type": "mc",
    "q": "An angle of 45° is…",
    "options": [
     "acute",
     "obtuse",
     "straight"
    ],
    "answer": 0,
    "explain": "It is less than 90°: acute."
   },
   {
    "type": "text",
    "q": "What is the point the sides of an angle start from called?",
    "answer": [
     "vertex",
     "the vertex"
    ],
    "explain": "It is the vertex."
   },
   {
    "type": "num",
    "q": "How many right angles make a full turn?",
    "answer": 4,
    "explain": "4 × 90° = 360°."
   },
   {
    "type": "mc",
    "q": "At 6:00 the hands of a clock form a…",
    "options": [
     "right angle",
     "acute angle",
     "straight angle"
    ],
    "answer": 2,
    "explain": "One points at 12 and the other at 6: they are in a straight line, a straight angle."
   },
   {
    "type": "order",
    "q": "Order the angles from the narrowest to the widest.",
    "items": [
     "acute",
     "right",
     "obtuse",
     "straight",
     "full turn"
    ],
    "explain": "Acute < 90° < obtuse < 180° (straight) < 360° (full turn)."
   },
   {
    "type": "tf",
    "q": "The segment is the only one of these lines that can be measured with a ruler.",
    "answer": true,
    "explain": "A straight line and a ray are infinite; the segment has two endpoints."
   }
  ]
 }
});
