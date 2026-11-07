TOPIC('en', {
 "id": "p1-mat-forme",
 "title": "Shapes around us",
 "intro": "Look around you: a bike wheel is a <b>circle</b> 🚲, the window is a <b>square</b> or a <b>rectangle</b> 🪟, a slice of pizza is a <b>triangle</b> 🍕. Shapes are everywhere! Let's learn to recognise them and give them a name.",
 "minutes": 20,
 "sections": [
  {
   "type": "text",
   "title": "The four most famous shapes",
   "html": "<p>Today we'll meet <b>four shapes</b>. They are called <b>flat shapes</b> (or 2D shapes) because they are flat, like a drawing on paper.</p>\n<ul>\n<li>⚪ The <b>circle</b> is round. It has no corners and no straight sides.</li>\n<li>🔺 The <b>triangle</b> has <b>3</b> straight <b>sides</b> and <b>3 corners</b>.</li>\n<li>🟥 The <b>square</b> has <b>4 sides</b>, all <b>equal</b>, and <b>4 corners</b>.</li>\n<li>▬ The <b>rectangle</b> has <b>4 sides</b>: 2 long and 2 short. It has <b>4 corners</b>.</li>\n</ul>\n<p>The straight edges are called <b>sides</b>. The corners are called <b>vertices</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Here are the shapes",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<circle cx=\"80\" cy=\"120\" r=\"60\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"4\"/>\n<polygon points=\"230,60 290,180 170,180\" fill=\"#f87171\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<rect x=\"330\" y=\"60\" width=\"120\" height=\"120\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<rect x=\"470\" y=\"85\" width=\"120\" height=\"70\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"4\"/>\n<circle cx=\"230\" cy=\"60\" r=\"7\" fill=\"#111827\"/>\n<circle cx=\"290\" cy=\"180\" r=\"7\" fill=\"#111827\"/>\n<circle cx=\"170\" cy=\"180\" r=\"7\" fill=\"#111827\"/>\n<text x=\"80\" y=\"220\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#a16207\">CIRCLE</text>\n<text x=\"80\" y=\"245\" font-size=\"15\" text-anchor=\"middle\" fill=\"#374151\">no sides</text>\n<text x=\"230\" y=\"220\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#991b1b\">TRIANGLE</text>\n<text x=\"230\" y=\"245\" font-size=\"15\" text-anchor=\"middle\" fill=\"#374151\">3 sides, 3 vertices</text>\n<text x=\"390\" y=\"220\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e3a8a\">SQUARE</text>\n<text x=\"390\" y=\"245\" font-size=\"15\" text-anchor=\"middle\" fill=\"#374151\">4 equal sides</text>\n<text x=\"530\" y=\"220\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#166534\">RECTANGLE</text>\n<text x=\"530\" y=\"245\" font-size=\"15\" text-anchor=\"middle\" fill=\"#374151\">2 long, 2 short</text>\n<text x=\"300\" y=\"285\" font-size=\"15\" text-anchor=\"middle\" fill=\"#111827\">The black dots on the triangle are its 3 vertices</text>\n</svg>",
   "caption": "Count the sides and the corners (vertices) of each shape."
  },
  {
   "type": "text",
   "title": "How do I recognise a shape? Step by step",
   "html": "<ol>\n<li>👀 <b>I look at the edge</b>: is it all round? Then it's a <b>circle</b>.</li>\n<li>☝️ If it has straight edges, <b>I count the sides</b> with my finger.</li>\n<li>3 sides? It's a <b>triangle</b>.</li>\n<li>4 sides? I check whether they are <b>all equal</b>: yes → <b>square</b>; no, 2 long and 2 short → <b>rectangle</b>.</li>\n</ol>\n<p>Careful: if you turn a square, it's still a square! Even if it looks like a \"diamond\" 🔷, it still has 4 equal sides.</p>"
  },
  {
   "type": "example",
   "title": "Example: shape hunt in the kitchen 🍽️",
   "html": "<ul>\n<li>🍪 The round biscuit and the plate → <b>circle</b></li>\n<li>🧀 The toast cut diagonally and the slice of pizza → <b>triangle</b></li>\n<li>🧇 The tile and the slice of sandwich cheese → <b>square</b></li>\n<li>🍫 The chocolate bar and the fridge door → <b>rectangle</b></li>\n</ul>\n<p>Now you try: how many shapes can you find at home?</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: recognise the shapes",
   "questions": [
    {
     "type": "mc",
     "q": "How many sides does a triangle have? 🔺",
     "options": [
      "2",
      "3",
      "4"
     ],
     "answer": 1,
     "explain": "A triangle has 3 sides and 3 vertices: «tri» means three."
    },
    {
     "type": "mc",
     "q": "What shape is a bicycle wheel? 🚲",
     "options": [
      "Square",
      "Circle",
      "Triangle"
     ],
     "answer": 1,
     "explain": "The wheel is round: it's a circle. If it were square it couldn't roll!"
    },
    {
     "type": "tf",
     "q": "A square has 4 sides that are all equal.",
     "answer": true,
     "explain": "Yes: that's exactly what makes it different from a rectangle."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Put each object in the right shape",
   "widget": "classify",
   "options": {
    "groups": [
     "⚪ Circle",
     "🔺 Triangle",
     "🟥 Square",
     "▬ Rectangle"
    ],
    "items": [
     [
      "🪙 coin",
      0
     ],
     [
      "🕐 wall clock",
      0
     ],
     [
      "🍕 slice of pizza",
      1
     ],
     [
      "⚠️ warning sign",
      1
     ],
     [
      "🎲 face of a dice",
      2
     ],
     [
      "🧇 tile",
      2
     ],
     [
      "🚪 door",
      3
     ],
     [
      "📱 phone",
      3
     ],
     [
      "🍪 round biscuit",
      0
     ],
     [
      "📖 book",
      3
     ]
    ]
   },
   "caption": "Drag or tap each object and choose the shape it looks most like."
  },
  {
   "type": "widget",
   "title": "The house of shapes",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#e0f2fe\"/>\n<circle cx=\"520\" cy=\"60\" r=\"38\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"4\"/>\n<polygon points=\"300,30 470,130 130,130\" fill=\"#ef4444\" stroke=\"#7f1d1d\" stroke-width=\"4\"/>\n<rect x=\"150\" y=\"130\" width=\"300\" height=\"160\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<rect x=\"190\" y=\"160\" width=\"70\" height=\"70\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<rect x=\"330\" y=\"190\" width=\"70\" height=\"100\" fill=\"#a16207\" stroke=\"#451a03\" stroke-width=\"4\"/>\n<rect x=\"0\" y=\"290\" width=\"600\" height=\"30\" fill=\"#22c55e\"/>\n</svg>",
    "spots": [
     {
      "x": 520,
      "y": 60,
      "label": "Circle (sun)"
     },
     {
      "x": 300,
      "y": 95,
      "label": "Triangle (roof)"
     },
     {
      "x": 225,
      "y": 195,
      "label": "Square (window)"
     },
     {
      "x": 365,
      "y": 240,
      "label": "Rectangle (door)"
     }
    ]
   },
   "caption": "Tap each point and choose the name of the shape."
  },
  {
   "type": "curiosity",
   "title": "Did you know…? 🐝",
   "html": "<p><b>Bees</b> build the cells of their honeycomb with <b>6 sides</b>: it's a shape called a <b>hexagon</b>. Hexagons fit snugly together without leaving gaps and use very little wax!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? 🛑",
   "html": "<p>The <b>STOP</b> sign has <b>8 sides</b> (it's an <b>octagon</b>). It's the only sign with this shape: that way a driver can recognise it even from behind or when it's covered in snow!</p>\n<p>And in Italy <b>warning</b> signs are <b>triangles</b>, while signs that <b>forbid</b> something are <b>circles</b>.</p>"
  },
  {
   "type": "example",
   "title": "Example: draw a robot with shapes 🤖",
   "html": "<ol>\n<li>The <b>head</b>: a square.</li>\n<li>The <b>eyes</b>: two circles.</li>\n<li>The <b>body</b>: a big rectangle.</li>\n<li>The <b>arms</b> and <b>legs</b>: 4 thin rectangles.</li>\n<li>The <b>hat</b>: a triangle!</li>\n</ol>\n<p>With just 4 shapes you can draw almost anything: houses, trains, cats, rockets 🚀.</p>"
  },
  {
   "type": "3d",
   "title": "Shapes become solid 🧊",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "color": "#60a5fa",
    "labels": false,
    "shapes": [
     "cube",
     "pyramid",
     "cylinder",
     "sphere",
     "box"
    ]
   },
   "caption": "Circles, squares and triangles are flat. But if you «blow them up» they become solids: a cube has 6 square faces, a cylinder has 2 circles, a pyramid has triangles. Press the buttons and turn them!"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>⚪ <b>Circle</b>: round, no sides.</li>\n<li>🔺 <b>Triangle</b>: 3 sides, 3 vertices.</li>\n<li>🟥 <b>Square</b>: 4 equal sides, 4 vertices.</li>\n<li>▬ <b>Rectangle</b>: 4 sides (2 long and 2 short), 4 vertices.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand shapes 🌈",
   "intro": "<p>If it's not clear yet, try one of these ways.</p>",
   "tabs": [
    {
     "label": "🇨🇳 The Chinese tangram",
     "html": "<p>In <b>China</b> children have played with the <b>tangram</b> for centuries: a square cut into <b>7 pieces</b> (5 triangles, 1 square and 1 parallelogram). With the same pieces you can make cats, houses, boats…</p>\n<p>Cut out a square of cardboard like in the picture and give it a try!</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/>\n<polygon points=\"30,30 270,30 150,150\" fill=\"#ef4444\" stroke=\"#111827\" stroke-width=\"3\"/>\n<polygon points=\"30,30 150,150 30,270\" fill=\"#f59e0b\" stroke=\"#111827\" stroke-width=\"3\"/>\n<polygon points=\"270,150 270,270 150,270\" fill=\"#3b82f6\" stroke=\"#111827\" stroke-width=\"3\"/>\n<polygon points=\"150,150 210,90 210,210\" fill=\"#22c55e\" stroke=\"#111827\" stroke-width=\"3\"/>\n<polygon points=\"30,270 90,210 150,270\" fill=\"#ec4899\" stroke=\"#111827\" stroke-width=\"3\"/>\n<polygon points=\"150,150 210,210 150,270 90,210\" fill=\"#a855f7\" stroke=\"#111827\" stroke-width=\"3\"/>\n<polygon points=\"210,90 270,30 270,150 210,210\" fill=\"#14b8a6\" stroke=\"#111827\" stroke-width=\"3\"/>\n<text x=\"430\" y=\"120\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7c2d12\">Tangram</text>\n<text x=\"430\" y=\"155\" font-size=\"17\" text-anchor=\"middle\" fill=\"#374151\">a square in 7 pieces</text>\n<text x=\"430\" y=\"185\" font-size=\"17\" text-anchor=\"middle\" fill=\"#374151\">5 triangles, 1 square</text>\n<text x=\"430\" y=\"212\" font-size=\"17\" text-anchor=\"middle\" fill=\"#374151\">and 1 parallelogram</text>\n</svg>"
    },
    {
     "label": "🖐️ With your body",
     "html": "<p>Try making the shapes with your hands and your body:</p>\n<ul>\n<li>⚪ Join your thumbs and curved index fingers: it's a <b>circle</b>.</li>\n<li>🔺 Join your thumbs and straight index fingers: it's a <b>triangle</b>!</li>\n<li>🟥 4 children lying on the floor: you are the 4 sides of a <b>square</b>.</li>\n<li>▬ Two tall children and two small ones? Make a <b>rectangle</b>: the long sides and the short ones.</li>\n</ul>\n<p>You can also walk along the edge of a rug and count how many times you turn: each turn is a <b>vertex</b>.</p>"
    },
    {
     "label": "🧊 Turn the 3D solids",
     "html": "<p>Flat shapes are the <b>faces</b> of solids. Turn the pyramid: can you see the <b>triangles</b> on the sides and the <b>square</b> underneath?</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 4,
      "r": 1.2,
      "h": 1.3,
      "color": "#f87171",
      "labels": true,
      "shapes": [
       "pyramid",
       "cube",
       "cylinder"
      ]
     }
    },
    {
     "label": "🔢 Count on your fingers",
     "html": "<p>A trick so you don't get mixed up: <b>the name tells you the number</b>!</p>\n<ul>\n<li><b>TRI</b>-angle → <b>3</b> angles (like a <b>tri</b>cycle, 3 wheels 🚲).</li>\n<li><b>QUAD</b>: in Italian a square is a <i>quadrato</i>, and \"quad\" means <b>4</b> sides (like a <b>quad</b> bike with 4 wheels, or the 4 legs of a table).</li>\n</ul>\n<p>Put your finger on a corner and count each time you \"turn the corner\".</p>",
     "widget": "counter",
     "options": {
      "emoji": "📐",
      "max": 8
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "The map of shapes 🗺️",
   "nodes": [
    {
     "id": "punto",
     "label": "The point",
     "x": 50,
     "y": 6,
     "color": "#111827",
     "html": "<p>A <b>point</b> is the smallest mark you can make with a pencil.</p>",
     "why": "<p>More than 2000 years ago the Greek mathematician <b>Euclid</b> wrote a very famous book, the <i>Elements</i>, which starts with the point: «that which has no parts».</p>"
    },
    {
     "id": "linea",
     "label": "The line",
     "x": 50,
     "y": 24,
     "color": "#6b7280",
     "html": "<p>If you move the pencil, the point leaves a <b>line</b>: it can be <b>straight</b> or <b>curved</b>.</p>",
     "why": "<p>A line is like the path made by a walking point. We draw straight lines well with a ruler.</p>"
    },
    {
     "id": "chiusa",
     "label": "Closed line",
     "x": 50,
     "y": 42,
     "color": "#8b5cf6",
     "html": "<p>If the line goes back to where it started, it's <b>closed</b>: inside there's a shape!</p>",
     "why": "<p>A closed line splits the paper into two parts: <b>inside</b> and <b>outside</b>. The inside is the shape.</p>"
    },
    {
     "id": "cerchio",
     "label": "Circle",
     "x": 12,
     "y": 66,
     "color": "#eab308",
     "html": "<p>A closed line that is <b>all curved</b>: every point on the edge is the same distance from the centre.</p>",
     "why": "<p>You draw it with a <b>compass</b> or with a piece of string tied to a pencil. That's why wheels, which are circles, turn without bumping: the centre always stays at the same height.</p>"
    },
    {
     "id": "lati",
     "label": "Sides and vertices",
     "x": 62,
     "y": 62,
     "color": "#0ea5e9",
     "html": "<p>If the closed line is made of <b>straight</b> pieces, the pieces are the <b>sides</b> and the corners are the <b>vertices</b>.</p>",
     "why": "<p>These shapes are called <b>polygons</b>, from the Greek for «many angles». Sides and vertices are always the same number!</p>"
    },
    {
     "id": "triangolo",
     "label": "Triangle",
     "x": 35,
     "y": 90,
     "color": "#ef4444",
     "html": "<p>3 sides and 3 vertices.</p>",
     "why": "<p>It's the polygon with the fewest sides possible: with 2 sticks you can't close anything! It's also the most <b>rigid</b> shape: that's why it's used in bridges and cranes.</p>"
    },
    {
     "id": "quadrato",
     "label": "Square",
     "x": 62,
     "y": 90,
     "color": "#3b82f6",
     "html": "<p>4 equal sides and 4 equal angles (right angles, «L-shaped»).</p>",
     "why": "<p>It's a special rectangle: a rectangle with all its sides the same length.</p>"
    },
    {
     "id": "rettangolo",
     "label": "Rectangle",
     "x": 88,
     "y": 80,
     "color": "#22c55e",
     "html": "<p>4 sides, equal in pairs, and 4 right angles.</p>",
     "why": "<p>Doors, books and screens are rectangles because right angles fit together well: bricks and tiles sit side by side without gaps.</p>"
    },
    {
     "id": "solidi",
     "label": "Solids",
     "x": 88,
     "y": 30,
     "color": "#f97316",
     "html": "<p>The cube, the pyramid, the cylinder: «full» shapes you can hold in your hand.</p>",
     "why": "<p>The faces of solids are flat shapes: a cube has 6 squares, a cylinder 2 circles.</p>"
    }
   ],
   "edges": [
    [
     "punto",
     "linea",
     "moves"
    ],
    [
     "linea",
     "chiusa",
     "closes"
    ],
    [
     "chiusa",
     "cerchio",
     "all curved"
    ],
    [
     "chiusa",
     "lati",
     "straight pieces"
    ],
    [
     "lati",
     "triangolo",
     "3"
    ],
    [
     "lati",
     "quadrato",
     "4 equal"
    ],
    [
     "lati",
     "rettangolo",
     "4 in pairs"
    ],
    [
     "rettangolo",
     "quadrato",
     "special case"
    ],
    [
     "lati",
     "solidi",
     "faces of"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: sides and vertices",
   "questions": [
    {
     "type": "num",
     "q": "How many vertices (corners) does a square have?",
     "answer": 4,
     "explain": "A square has 4 sides and 4 vertices."
    },
    {
     "type": "mc",
     "q": "A shape has 4 sides: 2 long and 2 short. What is it?",
     "options": [
      "A square",
      "A rectangle",
      "A circle"
     ],
     "answer": 1,
     "explain": "If the sides aren't all equal but long and short, it's a rectangle."
    },
    {
     "type": "tf",
     "q": "A circle has 1 straight side.",
     "answer": false,
     "explain": "A circle is all curved: it has no straight sides and no vertices."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Flat shape",
   "d": "A flat shape that can be drawn on paper."
  },
  {
   "t": "Side",
   "d": "Each straight edge of a shape."
  },
  {
   "t": "Vertex",
   "d": "The corner where two sides meet."
  },
  {
   "t": "Circle",
   "d": "A completely round shape, with no sides and no vertices."
  },
  {
   "t": "Triangle",
   "d": "A shape with 3 sides and 3 vertices."
  },
  {
   "t": "Square",
   "d": "A shape with 4 sides that are all equal."
  },
  {
   "t": "Rectangle",
   "d": "A shape with 4 sides: 2 long and 2 short."
  },
  {
   "t": "Solid",
   "d": "A «full» shape, like a cube or a ball."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "How many sides does a triangle have?",
    "answer": 3,
    "explain": "A triangle has 3 sides."
   },
   {
    "type": "num",
    "q": "How many sides does a rectangle have?",
    "answer": 4,
    "explain": "A rectangle has 4 sides: 2 long and 2 short."
   },
   {
    "type": "mc",
    "q": "Which shape has no vertices?",
    "options": [
     "Square",
     "Circle",
     "Triangle"
    ],
    "answer": 1,
    "explain": "A circle is all curved: it has no corners."
   },
   {
    "type": "mc",
    "q": "The face of a dice 🎲 is…",
    "options": [
     "a square",
     "a triangle",
     "a circle"
    ],
    "answer": 0,
    "explain": "A dice is a cube: each face is a square."
   },
   {
    "type": "mc",
    "q": "A door 🚪 has the shape of a…",
    "options": [
     "circle",
     "rectangle",
     "triangle"
    ],
    "answer": 1,
    "explain": "A door is taller than it is wide: it's a rectangle."
   },
   {
    "type": "tf",
    "q": "If I turn a square, it becomes a triangle.",
    "answer": false,
    "explain": "Turning a shape doesn't change the number of sides: it stays a square."
   },
   {
    "type": "tf",
    "q": "The warning sign ⚠️ is a triangle.",
    "answer": true,
    "explain": "Yes, warning signs are triangles."
   },
   {
    "type": "text",
    "q": "What is the round shape, like a coin, called?",
    "answer": [
     "circle",
     "a circle"
    ],
    "explain": "It's a circle."
   },
   {
    "type": "text",
    "q": "What are the corners of a shape called?",
    "answer": [
     "vertices",
     "corners",
     "vertex"
    ],
    "explain": "The corners are called vertices."
   },
   {
    "type": "order",
    "q": "Put them in order from the shape with the fewest sides to the one with the most.",
    "items": [
     "Circle (0 straight sides)",
     "Triangle (3 sides)",
     "Square (4 sides)",
     "Stop sign (8 sides)"
    ],
    "explain": "0, 3, 4, 8: a circle has no straight sides, the stop sign is an octagon."
   },
   {
    "type": "mc",
    "q": "Which shape is the most rigid and is used in bridges?",
    "options": [
     "The circle",
     "The triangle",
     "The rectangle"
    ],
    "answer": 1,
    "explain": "A triangle doesn't lose its shape if you push it: that's why it's used in buildings."
   }
  ]
 }
});
