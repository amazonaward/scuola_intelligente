TOPIC('en', {
 "id": "p5-mat-solidi-intro",
 "title": "Solids",
 "intro": "A die, a can, an ice-cream cone, a ball: they are all <b>solids</b>, shapes that don't lie flat on a sheet but take up space. Let's learn to tell <b>polyhedra</b> from <b>solids of revolution</b>, to count <b>faces, edges and vertices</b> and to \"open out\" a solid into its <b>net</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "From the plane to space",
   "html": "<p>The shapes you have studied so far (square, triangle, circle…) are <b>plane figures</b>: they have only <b>two dimensions</b>, length and width. They all lie on a sheet.</p>\n<p><b>Solids</b> have <b>three dimensions</b>: length, width and <b>height</b> (or depth). They take up space: you can hold them in your hand, turn them, fill them.</p>\n<p>Geometric solids are divided into two big families:</p>\n<ul>\n<li><b>Polyhedra</b>: they have only <b>flat faces</b>, shaped like polygons (e.g. cube, pyramid). If you put them down they never roll.</li>\n<li><b>Solids of revolution</b> (or \"round\" solids): they have at least one <b>curved surface</b> (e.g. cylinder, cone, sphere). They can roll!</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Turn the solids in 3D",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "shapes": [
     "cube",
     "box",
     "prism",
     "pyramid",
     "cylinder",
     "cone",
     "sphere"
    ],
    "labels": true,
    "color": "#60a5fa"
   },
   "caption": "Use the buttons to change solid and rotate it with your finger or the mouse. Which ones have only flat faces? Which ones have curved surfaces?"
  },
  {
   "type": "text",
   "title": "Faces, edges and vertices",
   "html": "<p>Every polyhedron has three \"ingredients\":</p>\n<ul>\n<li>the <b>faces</b>: the polygons that enclose it (on a die they are the 6 squares with dots);</li>\n<li>the <b>edges</b>: the segments where two faces meet (if you run your finger over them, you feel the \"border\");</li>\n<li>the <b>vertices</b>: the points where several edges meet (the \"corners\").</li>\n</ul>\n<table>\n<tr><th>Polyhedron</th><th>Faces</th><th>Edges</th><th>Vertices</th></tr>\n<tr><td>Cube</td><td>6</td><td>12</td><td>8</td></tr>\n<tr><td>Cuboid</td><td>6</td><td>12</td><td>8</td></tr>\n<tr><td>Triangular prism</td><td>5</td><td>9</td><td>6</td></tr>\n<tr><td>Square-based pyramid</td><td>5</td><td>8</td><td>5</td></tr>\n<tr><td>Triangular-based pyramid (tetrahedron)</td><td>4</td><td>6</td><td>4</td></tr>\n</table>"
  },
  {
   "type": "widget",
   "title": "Recognise the parts of the cube",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<polygon points=\"200,110 380,110 380,290 200,290\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<polygon points=\"200,110 280,40 460,40 380,110\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<polygon points=\"380,110 460,40 460,220 380,290\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<line x1=\"200\" y1=\"290\" x2=\"280\" y2=\"220\" stroke=\"#1e3a8a\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n<line x1=\"280\" y1=\"220\" x2=\"460\" y2=\"220\" stroke=\"#1e3a8a\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n<line x1=\"280\" y1=\"220\" x2=\"280\" y2=\"40\" stroke=\"#1e3a8a\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n<circle cx=\"460\" cy=\"40\" r=\"8\" fill=\"#dc2626\"/>\n<line x1=\"380\" y1=\"110\" x2=\"380\" y2=\"290\" stroke=\"#f97316\" stroke-width=\"8\"/>\n</svg>",
    "spots": [
     {
      "x": 290,
      "y": 200,
      "label": "Face"
     },
     {
      "x": 380,
      "y": 200,
      "label": "Edge"
     },
     {
      "x": 460,
      "y": 40,
      "label": "Vertex"
     },
     {
      "x": 370,
      "y": 75,
      "label": "Top face"
     },
     {
      "x": 280,
      "y": 130,
      "label": "Hidden edge"
     }
    ]
   },
   "caption": "Touch each point and choose the right name. The dashed lines are the edges that cannot be seen from this position."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: polyhedra and round solids",
   "questions": [
    {
     "type": "mc",
     "q": "Which of these is a polyhedron?",
     "options": [
      "The ball",
      "The die",
      "The can"
     ],
     "answer": 1,
     "explain": "The die (cube) has only flat faces: it is a polyhedron."
    },
    {
     "type": "num",
     "q": "How many edges does a cube have?",
     "answer": 12,
     "explain": "4 on top, 4 on the bottom and 4 vertical: 12."
    },
    {
     "type": "tf",
     "q": "The cone is a solid of revolution.",
     "answer": true,
     "explain": "It has a curved surface and is obtained by rotating a right-angled triangle."
    }
   ]
  },
  {
   "type": "text",
   "title": "Prisms and pyramids",
   "html": "<p>Two very important families of polyhedra:</p>\n<ul>\n<li><b>Prism</b>: it has <b>two equal parallel bases</b> (one on top and one on the bottom) and side faces that are <b>rectangles</b>. It takes its name from the shape of the base: triangular, quadrangular, pentagonal, hexagonal prism… The <b>cube</b> and the <b>cuboid</b> are special prisms.</li>\n<li><b>Pyramid</b>: it has <b>only one base</b> and side faces that are <b>triangles</b> meeting at a point at the top, the <b>apex</b>. It too takes its name from the base: triangular pyramid, quadrangular pyramid…</li>\n</ul>\n<p>Trick: if a prism has a base with <b>n</b> sides, it has <b>n + 2</b> faces. A pyramid with a base of <b>n</b> sides has <b>n + 1</b> faces.</p>"
  },
  {
   "type": "text",
   "title": "Solids of revolution",
   "html": "<p>Why are they called \"of revolution\"? Because they can be obtained by <b>rotating a plane figure</b> around a line (the <b>axis</b>):</p>\n<ul>\n<li>a <b>rectangle</b> rotating around one side forms a <b>cylinder</b> 🥫;</li>\n<li>a <b>right-angled triangle</b> rotating around a leg forms a <b>cone</b> 🍦;</li>\n<li>a <b>semicircle</b> rotating around the diameter forms a <b>sphere</b> ⚽.</li>\n</ul>\n<p>The cylinder has 2 circular bases, the cone has 1, the sphere none: it is all curved!</p>"
  },
  {
   "type": "svg",
   "title": "Shapes that turn and become solids",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fefce8\"/>\n<line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<rect x=\"100\" y=\"60\" width=\"60\" height=\"140\" fill=\"#fb923c\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<ellipse cx=\"100\" cy=\"60\" rx=\"60\" ry=\"14\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<ellipse cx=\"100\" cy=\"200\" rx=\"60\" ry=\"14\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<path d=\"M150 30 A40 12 0 1 1 50 30\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<polygon points=\"50,24 44,34 58,34\" fill=\"#dc2626\"/>\n<text x=\"100\" y=\"265\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">rectangle → cylinder</text>\n<line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<polygon points=\"300,60 300,200 360,200\" fill=\"#a3e635\" stroke=\"#3f6212\" stroke-width=\"3\"/>\n<ellipse cx=\"300\" cy=\"200\" rx=\"60\" ry=\"14\" fill=\"none\" stroke=\"#3f6212\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<line x1=\"300\" y1=\"60\" x2=\"240\" y2=\"200\" stroke=\"#3f6212\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<text x=\"300\" y=\"265\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">triangle → cone</text>\n<line x1=\"500\" y1=\"30\" x2=\"500\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<path d=\"M500 60 A70 70 0 0 1 500 200 Z\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<path d=\"M500 60 A70 70 0 0 0 500 200\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<text x=\"500\" y=\"265\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">semicircle → sphere</text>\n<text x=\"300\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#dc2626\">the dashed red line is the axis of rotation</text>\n</svg>",
   "caption": "The coloured part turns around the red axis: the dashed outline shows the solid that forms."
  },
  {
   "type": "text",
   "title": "The net: opening a solid",
   "html": "<p>If you take a cardboard box and \"unstitch\" it along some edges, you can lay it flat on the table. The plane figure you get is called the <b>net</b> of the solid.</p>\n<ul>\n<li>the net of the <b>cube</b> is made of <b>6 equal squares</b> (there are 11 different ways to draw it!);</li>\n<li>the net of the <b>cuboid</b> is made of <b>6 rectangles</b>, equal two by two;</li>\n<li>the net of the <b>cylinder</b> is a <b>rectangle</b> and <b>2 circles</b>: the rectangle is the label of the can!</li>\n<li>the net of the <b>cone</b> is a <b>sector</b> (a \"fan\") and a circle.</li>\n</ul>\n<p>The sphere, instead, <b>has no exact net</b>: it cannot be laid flat without tearing or distorting it. That is why world maps are always a little \"wrong\"!</p>"
  },
  {
   "type": "svg",
   "title": "The net of the cube",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<g stroke=\"#166534\" stroke-width=\"3\">\n<rect x=\"110\" y=\"20\" width=\"65\" height=\"65\" fill=\"#86efac\"/>\n<rect x=\"45\" y=\"85\" width=\"65\" height=\"65\" fill=\"#4ade80\"/>\n<rect x=\"110\" y=\"85\" width=\"65\" height=\"65\" fill=\"#22c55e\"/>\n<rect x=\"175\" y=\"85\" width=\"65\" height=\"65\" fill=\"#4ade80\"/>\n<rect x=\"240\" y=\"85\" width=\"65\" height=\"65\" fill=\"#86efac\"/>\n<rect x=\"110\" y=\"150\" width=\"65\" height=\"65\" fill=\"#bbf7d0\"/>\n</g>\n<text x=\"142\" y=\"60\" font-size=\"18\" text-anchor=\"middle\">top</text>\n<text x=\"142\" y=\"124\" font-size=\"18\" text-anchor=\"middle\">front</text>\n<text x=\"142\" y=\"190\" font-size=\"18\" text-anchor=\"middle\">bottom</text>\n<text x=\"272\" y=\"124\" font-size=\"18\" text-anchor=\"middle\">back</text>\n<text x=\"370\" y=\"110\" font-size=\"40\" fill=\"#166534\">→</text>\n<polygon points=\"440,130 520,130 520,210 440,210\" fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"3\"/>\n<polygon points=\"440,130 480,95 560,95 520,130\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"3\"/>\n<polygon points=\"520,130 560,95 560,175 520,210\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"270\" font-size=\"20\" text-anchor=\"middle\" fill=\"#14532d\">Fold along the edges: 6 squares become a cube</text>\n</svg>",
   "caption": "One of the 11 possible nets of the cube. Try drawing it, cutting it out and closing it with sticky tape!"
  },
  {
   "type": "example",
   "title": "Practical example: the solid hunt in the kitchen",
   "html": "<p>Open the pantry and look carefully:</p>\n<ul>\n<li>the cereal box is a <b>cuboid</b> (6 rectangular faces);</li>\n<li>the tin of tomatoes is a <b>cylinder</b>;</li>\n<li>the ice-cream cone is a <b>cone</b>;</li>\n<li>the orange is (almost) a <b>sphere</b>;</li>\n<li>the Toblerone box is a <b>triangular prism</b>;</li>\n<li>the pyramid-shaped tea bag is a <b>tetrahedron</b>.</li>\n</ul>\n<p>Why are cans cylinders and not cubes? Because cylinders resist pressure better, stack well and can roll along the factory belts!</p>"
  },
  {
   "type": "example",
   "title": "Practical example: how many little cubes?",
   "html": "<p>The <b>volume</b> of a solid is the <b>space</b> it occupies. It can be measured by counting how many equal little cubes fit inside.</p>\n<p>A box is <b>4</b> cubes long, <b>3</b> wide and <b>2</b> high:</p>\n<ul>\n<li>one layer contains 4 × 3 = <b>12</b> cubes;</li>\n<li>there are 2 layers: 12 × 2 = <b>24 cubes</b>.</li>\n</ul>\n<p>If each little cube has an edge of 1 cm, the volume is <b>24 cm³</b> (cubic centimetres). Try below with the sliders!</p>"
  },
  {
   "type": "3d",
   "title": "Fill the box with little cubes",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 4,
    "b": 3,
    "c": 2
   },
   "caption": "Volume = length × width × height. Change the three measures and count the cubes."
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The 5 perfect solids",
   "html": "<p>There are only <b>5 regular polyhedra</b>, with all faces equal and regular: the <b>tetrahedron</b> (4 triangles), the <b>cube</b> (6 squares), the <b>octahedron</b> (8 triangles), the <b>dodecahedron</b> (12 pentagons) and the <b>icosahedron</b> (20 triangles).</p>\n<p>They are also called <b>Platonic solids</b>, after the Greek philosopher <b>Plato</b>, who linked them to the elements: fire, earth, air, universe and water. You find them in the <b>dice</b> of role-playing games: d4, d6, d8, d12, d20!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Bees and hexagons",
   "html": "<p>The cells of honeycombs are <b>hexagonal prisms</b>. With this shape bees manage to build more cells using as little wax as possible, without leaving empty spaces. Already the Greek mathematician Pappus of Alexandria, about 1700 years ago, wondered how bees could be so \"good at geometry\"!</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>Solids</b> have 3 dimensions.</li>\n<li><b>Polyhedra</b>: only flat faces (cube, cuboid, prism, pyramid).</li>\n<li><b>Solids of revolution</b>: curved surfaces (cylinder, cone, sphere).</li>\n<li>In polyhedra we count <b>faces</b>, <b>edges</b> and <b>vertices</b>.</li>\n<li>The <b>net</b> is the solid \"opened\" and laid flat.</li>\n<li>The <b>volume</b> is the space occupied: it is measured in little cubes (cm³).</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "Polyhedron or solid of revolution?",
   "widget": "classify",
   "options": {
    "groups": [
     "Polyhedra",
     "Solids of revolution"
    ],
    "items": [
     [
      "🎲 die",
      0
     ],
     [
      "⚽ ball",
      1
     ],
     [
      "🥫 can",
      1
     ],
     [
      "📦 shoe box",
      0
     ],
     [
      "🍦 ice-cream cone",
      1
     ],
     [
      "🔺 Pyramid of Cheops",
      0
     ],
     [
      "🧱 brick",
      0
     ],
     [
      "🕯️ cylindrical candle",
      1
     ],
     [
      "🍫 Toblerone box",
      0
     ],
     [
      "🌍 globe",
      1
     ]
    ]
   },
   "caption": "Drag or touch each object and put it in the right group."
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand solids",
   "intro": "Solids are better understood with the hands than with the eyes: try building them, touching them or discovering a secret formula.",
   "tabs": [
    {
     "label": "🍡 Toothpicks and modelling clay",
     "html": "<p>Build polyhedra with <b>toothpicks</b> (the edges) and <b>balls of modelling clay</b> (the vertices):</p>\n<ul>\n<li>for a cube you need <b>12 toothpicks</b> and <b>8 balls</b>;</li>\n<li>for a square-based pyramid <b>8 toothpicks</b> and <b>5 balls</b>;</li>\n<li>for a tetrahedron <b>6 toothpicks</b> and <b>4 balls</b>.</li>\n</ul>\n<p>Then count the empty \"windows\": they are the <b>faces</b>! This way you never make mistakes counting edges and vertices again.</p>"
    },
    {
     "label": "✨ Euler's formula",
     "html": "<p>The great Swiss mathematician <b>Leonhard Euler</b> discovered in 1750 a magic rule that holds for all \"normal\" polyhedra (without holes):</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>Faces + Vertices − Edges = 2</b></p>\n<ul>\n<li>Cube: 6 + 8 − 12 = <b>2</b> ✔</li>\n<li>Square pyramid: 5 + 5 − 8 = <b>2</b> ✔</li>\n<li>Triangular prism: 5 + 6 − 9 = <b>2</b> ✔</li>\n</ul>\n<p>Use it to check whether you counted correctly!</p>"
    },
    {
     "label": "🔺 Prism or pyramid in 3D",
     "html": "<p>Compare a <b>prism</b> and a <b>pyramid</b> with the same hexagonal base. The prism has <b>two bases</b> and rectangular side faces; the pyramid has <b>one base</b> and triangular faces rising to the apex. Use the buttons to switch from one to the other.</p>",
     "scene": "solid",
     "options": {
      "shape": "prism",
      "n": 6,
      "r": 1,
      "h": 1.4,
      "labels": true,
      "color": "#f59e0b",
      "shapes": [
       "prism",
       "pyramid"
      ]
     }
    },
    {
     "label": "🙈 The mystery bag",
     "html": "<p>A game for two: put some objects in a bag (a die, a little ball, a cork, an eraser, a paper cone). Your partner, <b>with eyes closed</b>, touches one and must say:</p>\n<ul>\n<li>does it have flat or curved faces? → polyhedron or solid of revolution;</li>\n<li>how many points (vertices) can they feel?</li>\n<li>how many borders (edges)?</li>\n</ul>\n<p>Blind children learn geometry exactly like this: with their <b>hands</b>!</p>"
    },
    {
     "label": "🌍 Famous solids in the world",
     "html": "<ul>\n<li>🇪🇬 The <b>pyramids</b> of Giza: square-based pyramids.</li>\n<li>🇫🇷 The <b>Louvre pyramid</b> in Paris: made of glass, also square-based.</li>\n<li>🇮🇹 The <b>Tower of Pisa</b>: a cylinder (leaning!).</li>\n<li>🇧🇪 The <b>Atomium</b> in Brussels: 9 spheres connected by cylindrical tubes.</li>\n<li>🇯🇵 In Japan <b>cube-shaped watermelons</b> are grown, made to grow inside glass boxes, because they fit better in fridges!</li>\n</ul>"
    },
    {
     "label": "🇬🇷 The five Platonic solids",
     "html": "<p>A polyhedron is called <b>regular</b> if all its faces are <b>equal regular polygons</b> and at every vertex the <b>same number</b> of faces meet. The <b>Greek</b> philosopher <b>Plato</b> (about 360 BC) wrote about them in the book <i>Timaeus</i> and linked them to fire, earth, air, water and the universe: that is why they are called <b>Platonic solids</b>. <b>Euclid</b> proved that there are <b>only five</b>!</p><table><tr><th>Solid</th><th>Faces</th><th>Vertices</th><th>Edges</th></tr><tr><td>Tetrahedron</td><td>4 triangles</td><td>4</td><td>6</td></tr><tr><td>Cube (hexahedron)</td><td>6 squares</td><td>8</td><td>12</td></tr><tr><td>Octahedron</td><td>8 triangles</td><td>6</td><td>12</td></tr><tr><td>Dodecahedron</td><td>12 pentagons</td><td>20</td><td>30</td></tr><tr><td>Icosahedron</td><td>20 triangles</td><td>12</td><td>30</td></tr></table><p><b>Why only 5?</b> At a vertex at least 3 faces must meet, and their angles must add up to <b>less than 360°</b> (otherwise the solid becomes flat):</p><ul><li>triangles (60°): 3 → 180°, 4 → 240°, 5 → 300° ✔; 6 → 360° ✘ flat;</li><li>squares (90°): 3 → 270° ✔; 4 → 360° ✘;</li><li>pentagons (108°): 3 → 324° ✔;</li><li>hexagons (120°): 3 → 360° ✘ already flat.</li></ul><p>That is 3 + 1 + 1 = <b>5</b> possibilities. Check Euler's formula on every row of the table! The 4-, 6-, 8-, 12- and 20-sided dice of role-playing games are exactly Plato's solids.</p>"
    },
    {
     "label": "🇩🇪 Sphere, cube, cylinder: Fröbel's gift (Germany)",
     "html": "<p><b>Friedrich Fröbel</b>, the <b>German</b> teacher who invented the <b>Kindergarten</b> (nursery school), gave children a wooden box with three solids: <b>sphere, cube and cylinder</b>. It was his «second gift». Why exactly these three? Because they are the most different from each other, and the cylinder is <b>halfway</b> between the other two.</p><ol><li><b>Sphere</b>: only a <b>curved</b> surface. It rolls in every direction and never stays still on a sloping surface.</li><li><b>Cube</b>: only <b>flat</b> faces (6 squares), 8 vertices and 12 edges. It doesn't roll: it slides or stays still.</li><li><b>Cylinder</b>: 2 flat faces (two circles) and a curved surface. If you stand it up it stays still like the cube; if you lay it down it rolls like the sphere, but only <b>in one direction</b>, straight.</li></ol><p>🎯 Try with a ball, a die and a paper roll on a tilted book. Then look at the model below and change solid with the buttons: which one is a <b>polyhedron</b>? Which are <b>solids of revolution</b>?</p>",
     "scene": "solid",
     "options": {
      "shapes": [
       "sphere",
       "cube",
       "cylinder"
      ],
      "shape": "sphere",
      "labels": true,
      "color": "#f59e0b"
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of solids: touch a node and discover the why",
   "nodes": [
    {
     "id": "solido",
     "label": "Solid",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "A three-dimensional geometric figure.",
     "why": "The real world is 3-dimensional: every object has length, width and height. The geometry of solids was collected by <b>Euclid</b> in the last books of the <i>Elements</i> (about 300 BC)."
    },
    {
     "id": "poliedri",
     "label": "Polyhedra",
     "x": 25,
     "y": 28,
     "color": "#16a34a",
     "html": "Solids with only flat faces (polygons).",
     "why": "From the Greek <i>polýs</i> (many) + <i>hédra</i> (face, seat): \"with many faces\". Since they are made of polygons, they can be studied with the plane geometry you already know."
    },
    {
     "id": "rotazione",
     "label": "Solids of revolution",
     "x": 75,
     "y": 28,
     "color": "#f97316",
     "html": "Solids with curved surfaces: cylinder, cone, sphere.",
     "why": "They are obtained by rotating a plane figure around an axis. This is how the <b>lathe</b> works, invented in ancient times to make perfectly round vases and wooden objects."
    },
    {
     "id": "fsv",
     "label": "Faces, edges, vertices",
     "x": 12,
     "y": 52,
     "color": "#a855f7",
     "html": "The elements of a polyhedron.",
     "why": "Faces are polygons; where two faces touch an edge is born; where at least three edges meet a vertex is born. There cannot be fewer than 3 faces at a vertex, otherwise the solid doesn't close."
    },
    {
     "id": "eulero",
     "label": "F + V − E = 2",
     "x": 12,
     "y": 80,
     "color": "#ec4899",
     "html": "Euler's relation.",
     "why": "Discovered by <b>Leonhard Euler</b> in 1750 (Descartes had almost got there a century earlier). It holds for all polyhedra without holes and is the starting point of a part of mathematics called topology."
    },
    {
     "id": "prismipir",
     "label": "Prisms and pyramids",
     "x": 38,
     "y": 62,
     "color": "#0ea5e9",
     "html": "Prism: 2 equal bases and rectangular faces. Pyramid: 1 base and triangular faces.",
     "why": "The prism is obtained by \"dragging\" a polygon upwards; the pyramid by joining all the vertices of the base to a single point. <b>Democritus</b> discovered that a pyramid has a third of the volume of the prism with the same base and height; <b>Eudoxus</b> proved it."
    },
    {
     "id": "platonici",
     "label": "Platonic solids",
     "x": 38,
     "y": 90,
     "color": "#14b8a6",
     "html": "The 5 regular polyhedra: tetrahedron, cube, octahedron, dodecahedron, icosahedron.",
     "why": "There are only 5 because around a vertex the sum of the angles of the faces must be less than 360°: with triangles 3, 4 or 5 faces fit, with squares 3, with pentagons 3; with hexagons already 3 × 120° = 360° and the vertex becomes flat. Euclid proved it in the last book of the <i>Elements</i>."
    },
    {
     "id": "sviluppo",
     "label": "Net",
     "x": 72,
     "y": 58,
     "color": "#84cc16",
     "html": "The solid opened and laid on a plane.",
     "why": "It is used to build boxes and packaging. All polyhedra and also cylinders and cones can be unfolded; the sphere cannot, because it is curved in all directions: that is why no flat map of the world is perfect."
    },
    {
     "id": "volume",
     "label": "Volume",
     "x": 72,
     "y": 86,
     "color": "#64748b",
     "html": "The space occupied by a solid, measured in little cubes (cm³, dm³, m³).",
     "why": "It is measured by counting how many cubes with a 1 cm edge fit inside. 1 dm³ of water is exactly 1 litre: the metric system, born in France at the end of the 18th century, links volumes and capacities in this way."
    }
   ],
   "edges": [
    [
     "solido",
     "poliedri",
     "flat faces"
    ],
    [
     "solido",
     "rotazione",
     "curved surfaces"
    ],
    [
     "poliedri",
     "fsv",
     "have"
    ],
    [
     "fsv",
     "eulero",
     "linked by"
    ],
    [
     "poliedri",
     "prismipir",
     "e.g."
    ],
    [
     "prismipir",
     "platonici",
     "the most regular"
    ],
    [
     "poliedri",
     "sviluppo",
     "open out into the"
    ],
    [
     "rotazione",
     "sviluppo",
     "cylinder and cone"
    ],
    [
     "solido",
     "volume",
     "occupies a"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: prisms, pyramids and nets",
   "questions": [
    {
     "type": "mc",
     "q": "Which solid has only one base and triangular side faces?",
     "options": [
      "The prism",
      "The pyramid",
      "The cylinder"
     ],
     "answer": 1,
     "explain": "The pyramid has one base and triangles meeting at the apex."
    },
    {
     "type": "mc",
     "q": "The net of a cylinder is made of…",
     "options": [
      "6 squares",
      "a rectangle and 2 circles",
      "4 triangles"
     ],
     "answer": 1,
     "explain": "The side surface unrolled is a rectangle; the two bases are circles."
    },
    {
     "type": "num",
     "q": "How many vertices does a square-based pyramid have?",
     "answer": 5,
     "explain": "4 vertices of the base + 1 at the top = 5."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Solid",
   "d": "A three-dimensional geometric figure: length, width, height."
  },
  {
   "t": "Polyhedron",
   "d": "A solid bounded only by flat faces shaped like polygons."
  },
  {
   "t": "Solid of revolution",
   "d": "A solid obtained by rotating a plane figure around an axis; it has curved surfaces."
  },
  {
   "t": "Face",
   "d": "Each of the polygons that bound a polyhedron."
  },
  {
   "t": "Edge",
   "d": "The segment where two faces meet."
  },
  {
   "t": "Vertex",
   "d": "The point where three or more edges meet."
  },
  {
   "t": "Prism",
   "d": "A polyhedron with two equal parallel bases and rectangular side faces."
  },
  {
   "t": "Pyramid",
   "d": "A polyhedron with one base and triangular side faces that meet at the apex."
  },
  {
   "t": "Net",
   "d": "The plane figure obtained by opening out a solid."
  },
  {
   "t": "Volume",
   "d": "The space occupied by a solid; it is measured in cm³, dm³, m³."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "How many dimensions does a solid have?",
    "options": [
     "2",
     "3",
     "4"
    ],
    "answer": 1,
    "explain": "Length, width and height."
   },
   {
    "type": "mc",
    "q": "Which of these objects is a solid of revolution?",
    "options": [
     "A brick",
     "A tube of crisps",
     "A die"
    ],
    "answer": 1,
    "explain": "The tube is a cylinder: it has a curved surface."
   },
   {
    "type": "num",
    "q": "How many faces does a cube have?",
    "answer": 6,
    "explain": "Like a die: 6 square faces."
   },
   {
    "type": "num",
    "q": "How many vertices does a cube have?",
    "answer": 8,
    "explain": "4 on top and 4 on the bottom."
   },
   {
    "type": "tf",
    "q": "The sphere has an edge.",
    "answer": false,
    "explain": "The sphere has neither edges nor vertices: it is all curved."
   },
   {
    "type": "text",
    "q": "What is the segment where two faces of a polyhedron meet called?",
    "answer": [
     "edge",
     "the edge"
    ],
    "explain": "It is the edge."
   },
   {
    "type": "mc",
    "q": "Rotating a rectangle around one of its sides gives…",
    "options": [
     "a cone",
     "a cylinder",
     "a sphere"
    ],
    "answer": 1,
    "explain": "The rotating rectangle forms a cylinder."
   },
   {
    "type": "mc",
    "q": "Which figure can NOT be the net of a cube?",
    "options": [
     "6 squares in a cross shape",
     "6 squares all in a row",
     "6 squares in a T shape"
    ],
    "answer": 1,
    "explain": "With 6 squares in a row, when folded, two faces overlap and two stay uncovered."
   },
   {
    "type": "tf",
    "q": "The cube is a special prism.",
    "answer": true,
    "explain": "It has two equal parallel square bases and side faces that are squares (special rectangles)."
   },
   {
    "type": "num",
    "q": "A box holds 5 cubes in length, 2 in width and 3 in height. How many cubes in all?",
    "answer": 30,
    "explain": "5 × 2 = 10 cubes per layer; 10 × 3 = 30."
   },
   {
    "type": "order",
    "q": "Put in order from the solid with the fewest faces to the one with the most faces.",
    "items": [
     "Tetrahedron (triangular pyramid)",
     "Square-based pyramid",
     "Cube",
     "Hexagonal prism"
    ],
    "explain": "4, 5, 6 and 8 faces (6 side faces + 2 bases)."
   }
  ],
  "gen": [
   [
    "volBox",
    2
   ]
  ]
 }
});
