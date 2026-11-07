TOPIC('en', {
 "id": "p4-mat-poligoni",
 "title": "Polygons",
 "intro": "Look around you: your notebook is a rectangle, the STOP sign is an octagon, the cells of bees are hexagons. They are all <b>polygons</b>! Let's learn to recognize them, to give them names and to discover the secrets of <b>triangles</b> and <b>quadrilaterals</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "What is a polygon?",
   "html": "<p>Take a pencil and draw a line that starts from a point and, made of <b>many straight pieces</b>, comes back exactly to the starting point without ever crossing itself. You have drawn a <b>closed broken line</b>.</p>\n<p>A <b>polygon</b> is the part of the plane enclosed by a closed broken line, <b>together with</b> the line itself (its outline).</p>\n<p>Every polygon has:</p>\n<ul>\n<li><b>sides</b>: the straight segments of the outline;</li>\n<li><b>vertices</b>: the points where two sides meet;</li>\n<li><b>angles</b>: the \"openings\" between two neighboring sides, at each vertex;</li>\n<li><b>diagonals</b>: the segments joining two <b>non-neighboring</b> vertices.</li>\n</ul>\n<p>In every polygon the number of sides, vertices and angles is <b>always the same</b>: a polygon with 5 sides also has 5 vertices and 5 angles.</p>\n<p><b>These are not polygons</b>: the circle (its outline is curved), an open figure, a figure with sides that cross each other.</p>"
  },
  {
   "type": "svg",
   "title": "The parts of a polygon",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<polygon points=\"120,230 90,120 200,50 310,110 280,230\" fill=\"#bae6fd\" stroke=\"#1e40af\" stroke-width=\"5\"/>\n<line x1=\"90\" y1=\"120\" x2=\"310\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<line x1=\"200\" y1=\"50\" x2=\"120\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<circle cx=\"200\" cy=\"50\" r=\"9\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"2\"/>\n<path d=\"M 105 210 A 25 25 0 0 1 140 228\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<text x=\"350\" y=\"60\" font-size=\"20\" fill=\"#f59e0b\" font-weight=\"bold\">● vertex</text>\n<text x=\"350\" y=\"110\" font-size=\"20\" fill=\"#1e40af\" font-weight=\"bold\">━ side</text>\n<text x=\"350\" y=\"160\" font-size=\"20\" fill=\"#16a34a\" font-weight=\"bold\">◜ angle</text>\n<text x=\"350\" y=\"210\" font-size=\"20\" fill=\"#dc2626\" font-weight=\"bold\">┅ diagonal</text>\n<text x=\"200\" y=\"280\" font-size=\"18\" fill=\"#1f2937\" text-anchor=\"middle\">Pentagon: 5 sides, 5 vertices, 5 angles</text>\n</svg>",
   "caption": "The pentagon has 5 sides, 5 vertices, 5 angles and 5 diagonals (here you see 2 of them)."
  },
  {
   "type": "text",
   "title": "The name depends on the number of sides",
   "html": "<p>The word <b>polygon</b> comes from Greek: <i>polýs</i> = \"many\" and <i>gonía</i> = \"angle\". So \"polygon\" means \"figure with many angles\".</p>\n<table>\n<tr><th>Sides</th><th>Name</th><th>Where you see it</th></tr>\n<tr><td>3</td><td><b>Triangle</b></td><td>warning sign ⚠️</td></tr>\n<tr><td>4</td><td><b>Quadrilateral</b></td><td>window, sheet of paper, screen</td></tr>\n<tr><td>5</td><td><b>Pentagon</b></td><td>the black patches of a soccer ball ⚽</td></tr>\n<tr><td>6</td><td><b>Hexagon</b></td><td>bee cells 🐝, bolt nut</td></tr>\n<tr><td>7</td><td><b>Heptagon</b></td><td>some British coins</td></tr>\n<tr><td>8</td><td><b>Octagon</b></td><td>STOP sign 🛑</td></tr>\n<tr><td>9</td><td><b>Nonagon</b></td><td></td></tr>\n<tr><td>10</td><td><b>Decagon</b></td><td></td></tr>\n</table>\n<p>The polygon with the <b>fewest sides</b> is the triangle: with only 2 segments you can't close a figure!</p>"
  },
  {
   "type": "text",
   "title": "Convex, concave and regular",
   "html": "<ul>\n<li>A polygon is <b>convex</b> if no side, when extended, goes inside the figure. All its angles are less than a straight angle (180°).</li>\n<li>A polygon is <b>concave</b> if it has a \"dent\", like a star or an arrow: at least one side extended goes into the figure and at least one angle is greater than 180°.</li>\n<li>A polygon is <b>regular</b> if it has <b>all sides equal</b> and <b>all angles equal</b>: the equilateral triangle, the square, the bees' hexagon…</li>\n</ul>\n<p>Careful: the <b>rhombus</b> has 4 equal sides but its angles are not equal, so it is <b>not</b> regular. The <b>rectangle</b> has 4 equal angles but its sides are not equal, so it is <b>not</b> regular either. Only the <b>square</b> has both!</p>"
  },
  {
   "type": "svg",
   "title": "Convex, concave, regular",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fefce8\"/>\n<polygon points=\"40,200 70,80 170,60 190,190\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"4\"/>\n<text x=\"115\" y=\"245\" font-size=\"20\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">convex</text>\n<polygon points=\"300,50 325,120 395,125 340,165 360,235 300,195 240,235 260,165 205,125 275,120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"270\" font-size=\"20\" fill=\"#991b1b\" text-anchor=\"middle\" font-weight=\"bold\">concave (star)</text>\n<polygon points=\"490,60 550,95 550,165 490,200 430,165 430,95\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<text x=\"490\" y=\"245\" font-size=\"20\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">regular (hexagon)</text>\n</svg>",
   "caption": "The star has \"dents\": it is concave. The hexagon has all sides and angles equal: it is regular."
  },
  {
   "type": "widget",
   "title": "Find the parts of the polygon",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<polygon points=\"150,250 100,110 300,40 500,110 450,250\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"5\"/>\n<line x1=\"100\" y1=\"110\" x2=\"500\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<path d=\"M 420 250 A 30 30 0 0 1 462 226\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<circle cx=\"300\" cy=\"40\" r=\"9\" fill=\"#1d4ed8\"/>\n</svg>",
    "spots": [
     {
      "x": 300,
      "y": 40,
      "label": "Vertex"
     },
     {
      "x": 300,
      "y": 250,
      "label": "Side"
     },
     {
      "x": 300,
      "y": 110,
      "label": "Diagonal"
     },
     {
      "x": 440,
      "y": 235,
      "label": "Angle"
     },
     {
      "x": 300,
      "y": 180,
      "label": "Interior region"
     }
    ]
   },
   "caption": "Tap each point and choose the right name."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: recognizing polygons",
   "questions": [
    {
     "type": "mc",
     "q": "Which of these figures is NOT a polygon?",
     "options": [
      "The square",
      "The circle",
      "The triangle"
     ],
     "answer": 1,
     "explain": "The circle has a curved outline: a polygon has only straight sides."
    },
    {
     "type": "num",
     "q": "How many vertices does an octagon have?",
     "answer": 8,
     "explain": "Sides, vertices and angles are always the same number: 8."
    },
    {
     "type": "tf",
     "q": "The rhombus is a regular polygon.",
     "answer": false,
     "explain": "It has equal sides but its angles are not equal: to be regular it needs both."
    }
   ]
  },
  {
   "type": "text",
   "title": "Triangles",
   "html": "<p>The triangle has 3 sides, 3 vertices, 3 angles and <b>no diagonals</b>. It is the most \"sturdy\" polygon: if you build a triangle with three sticks, it doesn't change shape!</p>\n<p><b>Classification by sides</b>:</p>\n<ul>\n<li><b>equilateral</b>: 3 equal sides (and 3 equal angles of 60°);</li>\n<li><b>isosceles</b>: 2 equal sides (and 2 equal base angles);</li>\n<li><b>scalene</b>: 3 different sides.</li>\n</ul>\n<p><b>Classification by angles</b>:</p>\n<ul>\n<li><b>right</b>: has one <b>right</b> angle (90°), like the corner of a sheet of paper;</li>\n<li><b>acute</b>: 3 <b>acute</b> angles (less than 90°);</li>\n<li><b>obtuse</b>: one <b>obtuse</b> angle (greater than 90°).</li>\n</ul>\n<p>⭐ The golden rule: <b>the sum of the interior angles of a triangle is always 180°</b>, that is, a straight angle.</p>\n<p>Another rule: in a triangle <b>each side is shorter than the sum of the other two</b>. With sticks of 2, 3 and 10 cm the triangle doesn't close!</p>"
  },
  {
   "type": "svg",
   "title": "The family of triangles",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fdf4ff\"/>\n<text x=\"300\" y=\"26\" font-size=\"18\" fill=\"#6b21a8\" text-anchor=\"middle\" font-weight=\"bold\">By sides</text>\n<polygon points=\"40,125 140,125 90,40\" fill=\"#f0abfc\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<text x=\"90\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">equilateral</text>\n<polygon points=\"250,125 350,125 300,35\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">isosceles</text>\n<polygon points=\"440,125 570,125 470,55\" fill=\"#a5b4fc\" stroke=\"#3730a3\" stroke-width=\"4\"/>\n<text x=\"505\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">scalene</text>\n<text x=\"300\" y=\"176\" font-size=\"18\" fill=\"#9a3412\" text-anchor=\"middle\" font-weight=\"bold\">By angles</text>\n<polygon points=\"40,280 150,280 40,195\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n<rect x=\"40\" y=\"262\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"215\" font-size=\"16\" fill=\"#1f2937\">right</text>\n<polygon points=\"250,280 360,280 290,190\" fill=\"#fcd34d\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<text x=\"350\" y=\"215\" font-size=\"16\" fill=\"#1f2937\">acute</text>\n<polygon points=\"420,280 580,280 450,240\" fill=\"#bef264\" stroke=\"#3f6212\" stroke-width=\"4\"/>\n<text x=\"500\" y=\"225\" font-size=\"16\" fill=\"#1f2937\">obtuse</text>\n</svg>",
   "caption": "Every triangle has two \"surnames\": one for the sides and one for the angles. E.g.: right isosceles triangle."
  },
  {
   "type": "widget",
   "title": "Classify the triangles by their sides",
   "widget": "classify",
   "options": {
    "groups": [
     "Equilateral",
     "Isosceles",
     "Scalene"
    ],
    "items": [
     [
      "sides 5, 5, 5 cm",
      0
     ],
     [
      "sides 4, 4, 6 cm",
      1
     ],
     [
      "sides 3, 4, 5 cm",
      2
     ],
     [
      "sides 7, 7, 7 cm",
      0
     ],
     [
      "sides 10, 6, 10 cm",
      1
     ],
     [
      "sides 6, 8, 9 cm",
      2
     ],
     [
      "⚠️ warning sign",
      0
     ],
     [
      "🏠 roof with two equal slopes",
      1
     ]
    ]
   },
   "caption": "Count how many sides are equal: 3 → equilateral, 2 → isosceles, none → scalene."
  },
  {
   "type": "text",
   "title": "Quadrilaterals",
   "html": "<p>Quadrilaterals have 4 sides, 4 vertices, 4 angles and <b>2 diagonals</b>. The <b>sum of their interior angles is 360°</b>: in fact a diagonal divides the quadrilateral into <b>2 triangles</b>, and 180° + 180° = 360°.</p>\n<p>They are classified by looking at the <b>parallel sides</b> (which never meet, like railway tracks):</p>\n<ul>\n<li><b>Trapezoid</b> (called a <i>trapezium</i> in British English): has <b>only one pair</b> of parallel sides (the two bases). It can be <i>right</i>, <i>isosceles</i> or <i>scalene</i>.</li>\n<li><b>Parallelogram</b>: has <b>two pairs</b> of parallel sides; opposite sides are equal and opposite angles are equal.</li>\n<li><b>Rhombus</b>: a parallelogram with <b>4 equal sides</b>; the diagonals are perpendicular.</li>\n<li><b>Rectangle</b>: a parallelogram with <b>4 right angles</b>; the diagonals are equal.</li>\n<li><b>Square</b>: has 4 equal sides <b>and</b> 4 right angles. It is a rhombus and a rectangle at the same time!</li>\n</ul>\n<p>A quadrilateral with no parallel sides is called an <b>irregular quadrilateral</b>, like a kite 🪁.</p>"
  },
  {
   "type": "svg",
   "title": "The family tree of quadrilaterals",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#ecfeff\"/>\n<rect x=\"215\" y=\"10\" width=\"170\" height=\"36\" rx=\"10\" fill=\"#0e7490\"/>\n<text x=\"300\" y=\"34\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">Quadrilaterals</text>\n<line x1=\"300\" y1=\"46\" x2=\"140\" y2=\"80\" stroke=\"#0e7490\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"46\" x2=\"460\" y2=\"80\" stroke=\"#0e7490\" stroke-width=\"3\"/>\n<polygon points=\"80,140 200,140 170,90 110,90\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"165\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Trapezoid (1 pair ∥)</text>\n<polygon points=\"390,140 510,140 540,90 420,90\" fill=\"#a7f3d0\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<text x=\"465\" y=\"165\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Parallelogram (2 pairs ∥)</text>\n<line x1=\"465\" y1=\"172\" x2=\"370\" y2=\"200\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<line x1=\"465\" y1=\"172\" x2=\"540\" y2=\"200\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<polygon points=\"370,205 405,240 370,275 335,240\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"3\"/>\n<text x=\"370\" y=\"298\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Rhombus</text>\n<rect x=\"495\" y=\"215\" width=\"90\" height=\"50\" fill=\"#c7d2fe\" stroke=\"#3730a3\" stroke-width=\"3\"/>\n<text x=\"540\" y=\"298\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Rectangle</text>\n<rect x=\"430\" y=\"245\" width=\"42\" height=\"42\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/>\n<text x=\"451\" y=\"314\" font-size=\"16\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">Square</text>\n<line x1=\"395\" y1=\"262\" x2=\"430\" y2=\"266\" stroke=\"#991b1b\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<line x1=\"495\" y1=\"250\" x2=\"472\" y2=\"262\" stroke=\"#991b1b\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<polygon points=\"120,210 160,240 120,300 80,240\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"210\" y=\"260\" font-size=\"16\" fill=\"#1f2937\">Irregular quadrilateral</text>\n<text x=\"210\" y=\"280\" font-size=\"14\" fill=\"#5b21b6\">(kite, no ∥)</text>\n</svg>",
   "caption": "The square is the child of two \"parents\": it is both a rhombus (equal sides) and a rectangle (right angles)."
  },
  {
   "type": "3d",
   "title": "Polygons in solids",
   "scene": "solid",
   "options": {
    "shape": "prism",
    "n": 6,
    "r": 1,
    "h": 1.2,
    "color": "#f59e0b",
    "labels": true,
    "shapes": [
     "cube",
     "prism",
     "pyramid"
    ]
   },
   "caption": "The faces of solids are polygons: the hexagonal prism has 2 hexagons and 6 rectangles, the pyramid has triangles. Change the solid with the buttons and count the faces."
  },
  {
   "type": "example",
   "title": "Worked example: the tile layer",
   "html": "<p>Mrs. Anna must tile the bathroom floor <b>without leaving gaps</b>. Which regular tiles can she use?</p>\n<ul>\n<li><b>Squares</b>: 4 fit around a point, because 4 × 90° = 360° ✅</li>\n<li><b>Equilateral triangles</b>: 6 fit, because 6 × 60° = 360° ✅</li>\n<li><b>Regular hexagons</b>: 3 fit, because 3 × 120° = 360° ✅</li>\n<li><b>Regular pentagons</b>: each angle is 108°; 3 × 108° = 324°, a gap is left ❌</li>\n</ul>\n<p>Only these three regular polygons can cover a floor on their own: they are called <b>regular tessellations</b>.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the missing angle",
   "html": "<p>Luca has drawn a triangle. With the protractor he measures two angles: <b>50°</b> and <b>70°</b>. How big is the third one, without measuring it?</p>\n<ol>\n<li>I add the angles I know: 50° + 70° = 120°</li>\n<li>I subtract from 180°: 180° − 120° = <b>60°</b></li>\n</ol>\n<p>All three angles are less than 90°: it is an <b>acute</b> triangle.</p>\n<p>With a quadrilateral it is the same, but starting from <b>360°</b>: if three angles measure 90°, 90° and 120°, the fourth is 360° − 300° = <b>60°</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Mathematical bees",
   "html": "<p>Bees build their honeycombs with <b>hexagon</b>-shaped cells. Among the figures that cover the plane without gaps, the hexagon is the one that encloses the most space using the least wax for the walls. In 1999 the mathematician Thomas Hales proved that it really is the best solution (the \"honeycomb conjecture\", already proposed in ancient times)!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The soccer ball",
   "html": "<p>The classic soccer ball is made of <b>12 black pentagons</b> and <b>20 white hexagons</b> stitched together. The same pattern is found in a carbon molecule called <b>fullerene</b> (C₆₀), discovered in 1985.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Why cranes are made of triangles",
   "html": "<p>Look at a crane, a power pylon or the Eiffel Tower: they are full of <b>triangles</b>. A square of sticks gets \"squashed\" and becomes a rhombus, but a triangle doesn't: if the three sides are fixed, the shape is fixed. That is why engineers use triangles to make structures rigid.</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>Polygon = part of the plane enclosed by a closed broken line. Sides = vertices = angles.</li>\n<li>Triangles: by sides <b>equilateral, isosceles, scalene</b>; by angles <b>right, acute, obtuse</b>. Sum of angles = <b>180°</b>.</li>\n<li>Quadrilaterals: trapezoid (1 pair of parallel sides), parallelogram, rhombus, rectangle, square (2 pairs). Sum of angles = <b>360°</b>.</li>\n<li>Regular = equal sides <b>and</b> equal angles.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand polygons",
   "intro": "If the definitions seem difficult, try touching, folding, walking or building. Choose the path you prefer!",
   "tabs": [
    {
     "label": "🐢 Walk like a turtle",
     "html": "<p>In the 1960s, at MIT (USA), Seymour Papert invented the <b>Logo</b> language: children draw by commanding a turtle that walks and turns. Try it in the yard or the gym!</p>\n<ul>\n<li><b>Square</b>: repeat 4 times \"forward 5 steps, turn 90°\".</li>\n<li><b>Equilateral triangle</b>: repeat 3 times \"forward 5 steps, turn 120°\".</li>\n<li><b>Hexagon</b>: repeat 6 times \"forward 5 steps, turn 60°\".</li>\n</ul>\n<p>Did you notice? In the end you always made <b>a complete turn: 360°</b>! 4 × 90 = 3 × 120 = 6 × 60 = 360. To make a regular polygon with <b>n</b> sides you must turn each time by 360° ÷ n.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0fdf4\"/>\n<rect x=\"60\" y=\"50\" width=\"160\" height=\"160\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\" stroke-dasharray=\"14 8\"/>\n<text x=\"60\" y=\"40\" font-size=\"30\">🐢</text>\n<text x=\"140\" y=\"240\" font-size=\"18\" text-anchor=\"middle\" fill=\"#14532d\">4 × (forward, turn 90°)</text>\n<polygon points=\"420,40 510,200 330,200\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\" stroke-dasharray=\"14 8\"/>\n<text x=\"405\" y=\"30\" font-size=\"30\">🐢</text>\n<text x=\"420\" y=\"240\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1e3a8a\">3 × (forward, turn 120°)</text>\n</svg>"
    },
    {
     "label": "🪢 With rubber bands (geoboard)",
     "html": "<p>The <b>geoboard</b> is a board with pegs in rows, invented by the Egyptian-British mathematician <b>Caleb Gattegno</b> in the 1950s. You stretch colored rubber bands from one peg to another.</p>\n<p>You can build one with a cork board and pushpins: try making</p>\n<ul>\n<li>a square, then move just one corner of the band: it becomes a trapezoid or any quadrilateral;</li>\n<li>a triangle with a right angle (follow the rows of pegs);</li>\n<li>a figure with a dent: a <b>concave</b> polygon.</li>\n</ul>\n<p>With your hands you see right away that the number of \"points\" (vertices) is equal to the number of pieces of rubber band (sides).</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"150\" y=\"10\" width=\"300\" height=\"240\" rx=\"14\" fill=\"#d6a76b\" stroke=\"#78350f\" stroke-width=\"4\"/>\n<g fill=\"#374151\">\n<circle cx=\"190\" cy=\"50\" r=\"6\"/><circle cx=\"245\" cy=\"50\" r=\"6\"/><circle cx=\"300\" cy=\"50\" r=\"6\"/><circle cx=\"355\" cy=\"50\" r=\"6\"/><circle cx=\"410\" cy=\"50\" r=\"6\"/>\n<circle cx=\"190\" cy=\"105\" r=\"6\"/><circle cx=\"245\" cy=\"105\" r=\"6\"/><circle cx=\"300\" cy=\"105\" r=\"6\"/><circle cx=\"355\" cy=\"105\" r=\"6\"/><circle cx=\"410\" cy=\"105\" r=\"6\"/>\n<circle cx=\"190\" cy=\"160\" r=\"6\"/><circle cx=\"245\" cy=\"160\" r=\"6\"/><circle cx=\"300\" cy=\"160\" r=\"6\"/><circle cx=\"355\" cy=\"160\" r=\"6\"/><circle cx=\"410\" cy=\"160\" r=\"6\"/>\n<circle cx=\"190\" cy=\"215\" r=\"6\"/><circle cx=\"245\" cy=\"215\" r=\"6\"/><circle cx=\"300\" cy=\"215\" r=\"6\"/><circle cx=\"355\" cy=\"215\" r=\"6\"/><circle cx=\"410\" cy=\"215\" r=\"6\"/>\n</g>\n<polygon points=\"190,50 300,50 245,160\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\"/>\n<polygon points=\"300,105 410,105 410,215 355,160 300,215\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\"/>\n</svg>"
    },
    {
     "label": "📄 Folding a sheet (origami)",
     "html": "<p>In <b>Japan</b> geometry is also learned with <b>origami</b>, the art of folding paper.</p>\n<ol>\n<li>Take a rectangular sheet (A4). Fold one corner until it touches the opposite side and cut off the leftover strip: you get a <b>square</b>!</li>\n<li>Fold the square along the diagonal: you get 2 equal <b>right isosceles triangles</b>.</li>\n<li>Tear off the 3 corners of any paper triangle and put them next to each other: they always form a <b>straight line</b>, that is, a straight angle of <b>180°</b>!</li>\n</ol>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fff7ed\"/>\n<polygon points=\"40,200 240,200 110,50\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n<path d=\"M 70 200 A 30 30 0 0 0 52 172\" fill=\"#ef4444\"/>\n<path d=\"M 210 200 A 30 30 0 0 1 222 179\" fill=\"#3b82f6\"/>\n<text x=\"110\" y=\"85\" font-size=\"22\" fill=\"#16a34a\">●</text>\n<text x=\"270\" y=\"130\" font-size=\"34\" fill=\"#1f2937\">➜</text>\n<line x1=\"330\" y1=\"180\" x2=\"580\" y2=\"180\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<path d=\"M 455 180 L 395 180 A 60 60 0 0 1 420 131 Z\" fill=\"#ef4444\"/>\n<path d=\"M 455 180 L 420 131 A 60 60 0 0 1 480 125 Z\" fill=\"#16a34a\"/>\n<path d=\"M 455 180 L 480 125 A 60 60 0 0 1 515 180 Z\" fill=\"#3b82f6\"/>\n<text x=\"455\" y=\"220\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">= 180°</text>\n</svg>"
    },
    {
     "label": "🧊 Polygons in 3D solids",
     "html": "<p>Polygons are \"flat\", but you find them as the <b>faces</b> of solids. Rotate the pyramid: the base is a polygon, the side faces are <b>triangles</b>. Change the solid and count the faces of each kind.</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 5,
      "r": 1.1,
      "h": 1.3,
      "color": "#a855f7",
      "labels": true,
      "shapes": [
       "pyramid",
       "prism",
       "cube"
      ]
     }
    },
    {
     "label": "🔺 Straws and pipe cleaners",
     "html": "<p>In many schools in <b>Northern Europe</b> children build before drawing. Take straws and pipe cleaners (or toothpicks and modeling clay):</p>\n<ul>\n<li>make a square and push it from a corner: it gets deformed and becomes a <b>rhombus</b>. The angles change, the sides don't!</li>\n<li>make a triangle and push it: it <b>doesn't move</b>. The triangle is rigid.</li>\n<li>add a diagonal to the square: now there are 2 triangles and it doesn't deform any more. It's the trick of gates and cranes!</li>\n</ul>"
    },
    {
     "label": "🇬🇷 Archimedes: the polygon that becomes a circle",
     "html": "<p><b>Archimedes</b> was a great <b>Greek</b> mathematician who lived in <b>Syracuse</b>, in Sicily, in the 3rd century BC. He wanted to know how many times the circumference contains the diameter (the number we now call <b>π</b>). His idea: draw <b>regular polygons</b> inside the circle, with more and more <b>sides</b>: 6, 12, 24, 48, 96. The more sides the polygon has, the more it looks like the circle!</p><p>With the 96-sided polygon he discovered that π is a little more than 3 10/71 and a little less than 3 1/7, that is, about <b>3.14</b>.</p><p>🎯 <b>Build Archimedes' hexagon</b>:</p><ol><li>Draw a circle with the compass. <b>Don't change the opening!</b></li><li>Put the compass point on a spot of the circle and make a mark on the circle. Put the point on the mark and make another mark. Keep going: there are exactly <b>6</b> marks.</li><li>Join the marks with the ruler: there is a <b>regular hexagon</b>.</li></ol><p>The side of the hexagon is as long as the <b>radius</b>! So the perimeter is 6 radii = 3 diameters. The circle is a little longer than the hexagon: that is why π is a little more than 3.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"160\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"160,30 263.9,90 263.9,210 160,270 56.1,210 56.1,90\" fill=\"#fde68a\" fill-opacity=\"0.8\" stroke=\"#b45309\" stroke-width=\"3\"/><line x1=\"160\" y1=\"150\" x2=\"160\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"166\" y=\"95\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">r</text><text x=\"222\" y=\"56\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">r</text><circle cx=\"440\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"440,30 500,46.1 543.9,90 560,150 543.9,210 500,253.9 440,270 380,253.9 336.1,210 320,150 336.1,90 380,46.1\" fill=\"#bbf7d0\" fill-opacity=\"0.8\" stroke=\"#15803d\" stroke-width=\"3\"/><text x=\"160\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6 sides</text><text x=\"440\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">12 sides: almost a circle!</text></svg>"
    },
    {
     "label": "🕌 The geometric stars of Arab art",
     "html": "<p>In mosques, palaces and books of the <b>Arab</b> and Islamic world there are decorations made only of <b>regular polygons</b>: stars, hexagons, octagons that fit together. Craftsmen drew them with <b>ruler and compass</b>, always starting from a circle. One of the most famous stars is the <b>8-pointed star</b>.</p><ol><li>Draw a circle and a <b>square</b> with its vertices on the circle.</li><li>Draw a <b>second equal square</b>, with the same center, but <b>rotated by 45°</b> (its vertices are halfway between those of the first).</li><li>The two squares together form an <b>8-pointed star</b>.</li></ol><p>Now look for the hidden polygons: in the center there is an <b>octagon</b> (8 sides, red outline); on the points there are <b>8 isosceles triangles</b>. How many sides does the outline of the star have? <b>16</b>! It is a <b>concave</b> polygon: some of its angles are bigger than a straight angle.</p><p>🎯 Try with <b>two equilateral triangles</b>: one pointing up and one pointing down. What star do you get? And what polygon is in the center?</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><circle cx=\"300\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"300,25 425,150 300,275 175,150\" fill=\"#2563eb\" fill-opacity=\"0.55\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"388.4,61.6 388.4,238.4 211.6,238.4 211.6,61.6\" fill=\"#f59e0b\" fill-opacity=\"0.55\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"336.6,61.6 388.4,113.4 388.4,186.6 336.6,238.4 263.4,238.4 211.6,186.6 211.6,113.4 263.4,61.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"40\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">square 1</text><text x=\"40\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">+ square 2</text><text x=\"40\" y=\"104\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\">rotated by 45°</text><text x=\"450\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">in the center:</text><text x=\"450\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">an octagon</text><text x=\"450\" y=\"220\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">on the points:</text><text x=\"450\" y=\"242\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">8 triangles</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Polygon map: tap a node and find out why",
   "nodes": [
    {
     "id": "piano",
     "label": "Points, lines and the plane",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "The basic \"ingredients\" of geometry: the point, the straight line and the plane.",
     "why": "They are not defined: they are accepted as starting ideas. The Greek mathematician <b>Euclid</b>, in Alexandria in Egypt around 300 BC, wrote the <i>Elements</i>, starting from a few <b>postulates</b> (starting truths) like \"through two points there passes only one line\". Everything else is proved from there."
    },
    {
     "id": "spezzata",
     "label": "Closed broken line",
     "x": 50,
     "y": 24,
     "color": "#0ea5e9",
     "html": "A line made of consecutive segments that comes back to the starting point without crossing itself.",
     "why": "It is used to \"fence in\" a part of the plane. If the line were curved we would have figures like the circle; if it were open, it would enclose nothing."
    },
    {
     "id": "poligono",
     "label": "Polygon",
     "x": 50,
     "y": 42,
     "color": "#16a34a",
     "html": "The part of the plane enclosed by a closed broken line, including the outline.",
     "why": "From the Greek <i>polýs</i> (many) + <i>gonía</i> (angle). The ancient Egyptians and Babylonians already measured fields shaped like triangles and trapezoids; the Greeks gave the names and the proofs."
    },
    {
     "id": "elementi",
     "label": "Sides, vertices, angles, diagonals",
     "x": 15,
     "y": 42,
     "color": "#f59e0b",
     "html": "The parts of every polygon. Sides, vertices and angles are always the same number.",
     "why": "Each side ends at a vertex where the next side begins: going around the figure you meet a side and a vertex in turn, so they are equal in number."
    },
    {
     "id": "regolare",
     "label": "Regular polygon",
     "x": 85,
     "y": 42,
     "color": "#a855f7",
     "html": "It has all sides and all angles equal.",
     "why": "It can always be drawn inside a circle with its vertices on the circumference. Euclid taught how to construct the equilateral triangle, the square, the regular pentagon and hexagon with only a ruler and compass. In 1796 the young <b>Gauss</b> discovered that the regular 17-sided polygon can be constructed too!"
    },
    {
     "id": "triangolo",
     "label": "Triangle",
     "x": 25,
     "y": 70,
     "color": "#ef4444",
     "html": "A polygon with 3 sides. It is classified by its sides and by its angles.",
     "why": "It is the simplest and most rigid polygon: three sides fix the shape. Every other polygon can be divided into triangles by drawing diagonals from one vertex."
    },
    {
     "id": "somma180",
     "label": "Sum of angles = 180°",
     "x": 25,
     "y": 92,
     "color": "#dc2626",
     "html": "The interior angles of any triangle always add up to 180°.",
     "why": "It is proved with <b>Euclid's fifth postulate</b> (on parallels): draw from the vertex a parallel to the base, and the three angles find themselves side by side on the line, that is, they form a straight angle. On a sphere (like the Earth) the postulate doesn't hold and the sum is more than 180°!"
    },
    {
     "id": "quadrilatero",
     "label": "Quadrilaterals",
     "x": 75,
     "y": 70,
     "color": "#2563eb",
     "html": "Polygons with 4 sides: trapezoids, parallelograms, rhombuses, rectangles, squares.",
     "why": "They are classified by the <b>pairs of parallel sides</b>: 0 (irregular quadrilateral), 1 (trapezoid), 2 (parallelogram and its \"children\" rhombus, rectangle and square)."
    },
    {
     "id": "somma360",
     "label": "Sum of angles = 360°",
     "x": 75,
     "y": 92,
     "color": "#1d4ed8",
     "html": "The interior angles of every quadrilateral add up to 360°.",
     "why": "A diagonal divides it into 2 triangles: 2 × 180° = 360°. In general a polygon with n sides is divided into (n − 2) triangles, so the sum is (n − 2) × 180°: for the pentagon 540°, for the hexagon 720°."
    }
   ],
   "edges": [
    [
     "piano",
     "spezzata",
     "the segments form"
    ],
    [
     "spezzata",
     "poligono",
     "encloses"
    ],
    [
     "poligono",
     "elementi",
     "has"
    ],
    [
     "poligono",
     "regolare",
     "can be"
    ],
    [
     "poligono",
     "triangolo",
     "3 sides"
    ],
    [
     "poligono",
     "quadrilatero",
     "4 sides"
    ],
    [
     "triangolo",
     "somma180",
     "property"
    ],
    [
     "quadrilatero",
     "somma360",
     "= 2 triangles"
    ],
    [
     "somma180",
     "somma360",
     "× 2"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: triangles and quadrilaterals",
   "questions": [
    {
     "type": "num",
     "q": "In a triangle two angles measure 90° and 35°. How big is the third?",
     "answer": 55,
     "unit": "°",
     "explain": "180 − 90 − 35 = 55°."
    },
    {
     "type": "mc",
     "q": "A quadrilateral with only one pair of parallel sides is a…",
     "options": [
      "rhombus",
      "trapezoid",
      "rectangle"
     ],
     "answer": 1,
     "explain": "The trapezoid has only one pair of parallel sides, the bases."
    },
    {
     "type": "tf",
     "q": "The square is also a rectangle.",
     "answer": true,
     "explain": "It has 4 right angles: so it is a special rectangle (with all sides equal)."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Polygon",
   "d": "Part of the plane bounded by a closed broken line, outline included."
  },
  {
   "t": "Side",
   "d": "Each of the segments that form the outline of the polygon."
  },
  {
   "t": "Vertex",
   "d": "The point where two consecutive sides meet."
  },
  {
   "t": "Diagonal",
   "d": "A segment joining two non-consecutive vertices."
  },
  {
   "t": "Regular polygon",
   "d": "A polygon with all sides and all angles equal."
  },
  {
   "t": "Concave polygon",
   "d": "A polygon with a dent: at least one angle is greater than 180°."
  },
  {
   "t": "Isosceles triangle",
   "d": "A triangle with two equal sides."
  },
  {
   "t": "Scalene triangle",
   "d": "A triangle with three different sides."
  },
  {
   "t": "Right angle",
   "d": "An angle of 90°, like the corner of a sheet of paper."
  },
  {
   "t": "Parallel sides",
   "d": "Sides that lie on lines that never meet."
  },
  {
   "t": "Trapezoid",
   "d": "A quadrilateral with only one pair of parallel sides."
  },
  {
   "t": "Parallelogram",
   "d": "A quadrilateral with two pairs of parallel sides."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "What is the polygon with 6 sides called?",
    "options": [
     "Pentagon",
     "Hexagon",
     "Octagon"
    ],
    "answer": 1,
    "explain": "6 sides: hexagon, like the cells of bees."
   },
   {
    "type": "num",
    "q": "How many sides does a decagon have?",
    "answer": 10,
    "explain": "Deca = ten."
   },
   {
    "type": "tf",
    "q": "A triangle can have two right angles.",
    "answer": false,
    "explain": "90° + 90° = 180°: nothing would be left for the third angle."
   },
   {
    "type": "num",
    "q": "In a triangle two angles measure 60° and 80°. How big is the third?",
    "answer": 40,
    "unit": "°",
    "explain": "180 − 60 − 80 = 40°."
   },
   {
    "type": "mc",
    "q": "A triangle with sides of 6 cm, 6 cm and 4 cm is…",
    "options": [
     "equilateral",
     "isosceles",
     "scalene"
    ],
    "answer": 1,
    "explain": "It has two equal sides: isosceles."
   },
   {
    "type": "mc",
    "q": "Which quadrilateral has 4 equal sides but angles that are NOT right?",
    "options": [
     "Rhombus",
     "Rectangle",
     "Trapezoid"
    ],
    "answer": 0,
    "explain": "The rhombus has equal sides and equal opposite angles, but they are not right angles."
   },
   {
    "type": "num",
    "q": "Three angles of a quadrilateral measure 90°, 90° and 100°. How big is the fourth?",
    "answer": 80,
    "unit": "°",
    "explain": "360 − 90 − 90 − 100 = 80°."
   },
   {
    "type": "text",
    "q": "What is the segment that joins two non-neighboring vertices called?",
    "answer": [
     "diagonal",
     "the diagonal"
    ],
    "explain": "It is the diagonal."
   },
   {
    "type": "tf",
    "q": "The triangle has no diagonals.",
    "answer": true,
    "explain": "In a triangle every vertex is next to the other two: there are no non-consecutive vertices."
   },
   {
    "type": "order",
    "q": "Put in order from the polygon with the fewest sides to the one with the most.",
    "items": [
     "Triangle",
     "Quadrilateral",
     "Pentagon",
     "Hexagon",
     "Octagon"
    ],
    "explain": "3, 4, 5, 6, 8 sides."
   },
   {
    "type": "mc",
    "q": "A regular polygon must have…",
    "options": [
     "only equal sides",
     "only equal angles",
     "all sides and all angles equal"
    ],
    "answer": 2,
    "explain": "You need both."
   }
  ],
  "gen": [
   [
    "triAngle",
    2
   ]
  ]
 }
});
