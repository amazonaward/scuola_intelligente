TOPIC('en', {
 "id": "p5-mat-perimetro-area",
 "title": "Perimeter and area",
 "intro": "How much ribbon do you need to decorate the edge of a picture? How many tiles do you need to cover the floor? To answer you need two different measures: <b>perimeter</b> and <b>area</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Perimeter and area: what's the difference?",
   "html": "<p>Every flat shape has two important measures:</p>\n<ul>\n<li>the <b>perimeter</b> is the <b>length of the outline</b> of the shape. It's measured in units of length: <b>cm, m, km…</b> It's written <b>P</b>.</li>\n<li>the <b>area</b> is the <b>measure of the surface</b>, that is how much space the shape takes up \"inside\" the outline. It's measured in square units: <b>cm², m², km²…</b> It's written <b>A</b>.</li>\n</ul>\n<p>Imagine a football pitch: the <b>perimeter</b> is the length of the white line around it; the <b>area</b> is all the grass to be mowed.</p>\n<p><b>1 cm²</b> (square centimetre) is the area of a little square with sides of 1 cm. Working out an area means counting how many of these little squares \"fit inside\" the shape.</p>"
  },
  {
   "type": "svg",
   "title": "Outline and surface",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<text x=\"150\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">PERIMETER = outline</text>\n<rect x=\"50\" y=\"60\" width=\"200\" height=\"120\" fill=\"#fff7ed\" stroke=\"#dc2626\" stroke-width=\"6\"/>\n<text x=\"150\" y=\"55\" font-size=\"15\" text-anchor=\"middle\" fill=\"#dc2626\">5 cm</text>\n<text x=\"150\" y=\"200\" font-size=\"15\" text-anchor=\"middle\" fill=\"#dc2626\">5 cm</text>\n<text x=\"40\" y=\"125\" font-size=\"15\" text-anchor=\"end\" fill=\"#dc2626\">3 cm</text>\n<text x=\"260\" y=\"125\" font-size=\"15\" fill=\"#dc2626\">3 cm</text>\n<text x=\"150\" y=\"235\" font-size=\"16\" text-anchor=\"middle\" fill=\"#111\">P = 5+3+5+3 = 16 cm</text>\n<text x=\"450\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">AREA = surface</text>\n<g fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"2\">\n<rect x=\"350\" y=\"60\" width=\"40\" height=\"40\"/><rect x=\"390\" y=\"60\" width=\"40\" height=\"40\"/><rect x=\"430\" y=\"60\" width=\"40\" height=\"40\"/><rect x=\"470\" y=\"60\" width=\"40\" height=\"40\"/><rect x=\"510\" y=\"60\" width=\"40\" height=\"40\"/>\n<rect x=\"350\" y=\"100\" width=\"40\" height=\"40\"/><rect x=\"390\" y=\"100\" width=\"40\" height=\"40\"/><rect x=\"430\" y=\"100\" width=\"40\" height=\"40\"/><rect x=\"470\" y=\"100\" width=\"40\" height=\"40\"/><rect x=\"510\" y=\"100\" width=\"40\" height=\"40\"/>\n<rect x=\"350\" y=\"140\" width=\"40\" height=\"40\"/><rect x=\"390\" y=\"140\" width=\"40\" height=\"40\"/><rect x=\"430\" y=\"140\" width=\"40\" height=\"40\"/><rect x=\"470\" y=\"140\" width=\"40\" height=\"40\"/><rect x=\"510\" y=\"140\" width=\"40\" height=\"40\"/>\n</g>\n<text x=\"450\" y=\"235\" font-size=\"16\" text-anchor=\"middle\" fill=\"#111\">A = 5 × 3 = 15 cm²</text>\n</svg>",
   "caption": "The same rectangle: on the left we measure the edge (perimeter), on the right we count the 1 cm² squares (area)."
  },
  {
   "type": "text",
   "title": "How to work out the perimeter",
   "html": "<p>To work out the perimeter of a <b>polygon</b> just <b>add the lengths of all the sides</b>.</p>\n<p>For some shapes there are shortcuts:</p>\n<table>\n<tr><th>Shape</th><th>Perimeter</th></tr>\n<tr><td>Square (4 equal sides)</td><td>P = side × 4</td></tr>\n<tr><td>Rectangle</td><td>P = (base + height) × 2</td></tr>\n<tr><td>Equilateral triangle (3 equal sides)</td><td>P = side × 3</td></tr>\n<tr><td>Rhombus (4 equal sides)</td><td>P = side × 4</td></tr>\n<tr><td>Regular polygon with n sides</td><td>P = side × n</td></tr>\n</table>\n<p><b>Careful:</b> before adding, all the measurements must be in the <b>same unit</b> (for example all in cm).</p>"
  },
  {
   "type": "svg",
   "title": "Area formulas",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#ffffff\"/>\n<g font-size=\"15\" fill=\"#111\">\n<rect x=\"20\" y=\"30\" width=\"80\" height=\"80\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"60\" y=\"130\" text-anchor=\"middle\" font-weight=\"bold\">Square</text>\n<text x=\"60\" y=\"150\" text-anchor=\"middle\">A = l × l</text>\n<rect x=\"140\" y=\"45\" width=\"130\" height=\"65\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<text x=\"205\" y=\"130\" text-anchor=\"middle\" font-weight=\"bold\">Rectangle</text>\n<text x=\"205\" y=\"150\" text-anchor=\"middle\">A = b × h</text>\n<polygon points=\"320,110 350,40 450,40 420,110\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<line x1=\"350\" y1=\"40\" x2=\"350\" y2=\"110\" stroke=\"#1d4ed8\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<text x=\"356\" y=\"85\" font-size=\"13\">h</text>\n<text x=\"385\" y=\"130\" text-anchor=\"middle\" font-weight=\"bold\">Parallelogram</text>\n<text x=\"385\" y=\"150\" text-anchor=\"middle\">A = b × h</text>\n<polygon points=\"500,110 560,30 620,110\" fill=\"#fbcfe8\" stroke=\"#be185d\" stroke-width=\"3\"/>\n<line x1=\"560\" y1=\"30\" x2=\"560\" y2=\"110\" stroke=\"#be185d\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<text x=\"566\" y=\"80\" font-size=\"13\">h</text>\n<text x=\"560\" y=\"130\" text-anchor=\"middle\" font-weight=\"bold\">Triangle</text>\n<text x=\"560\" y=\"150\" text-anchor=\"middle\">A = b × h : 2</text>\n<polygon points=\"110,180 160,230 110,280 60,230\" fill=\"#ddd6fe\" stroke=\"#6d28d9\" stroke-width=\"3\"/>\n<line x1=\"60\" y1=\"230\" x2=\"160\" y2=\"230\" stroke=\"#6d28d9\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"180\" x2=\"110\" y2=\"280\" stroke=\"#6d28d9\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<text x=\"250\" y=\"220\" font-weight=\"bold\">Rhombus</text>\n<text x=\"250\" y=\"240\">A = D × d : 2</text>\n<text x=\"250\" y=\"260\" font-size=\"13\">(D and d = diagonals)</text>\n<polygon points=\"420,280 450,190 540,190 600,280\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"3\"/>\n<line x1=\"450\" y1=\"190\" x2=\"450\" y2=\"280\" stroke=\"#c2410c\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<text x=\"510\" y=\"235\" text-anchor=\"middle\" font-weight=\"bold\">Trapezium</text>\n<text x=\"510\" y=\"255\" text-anchor=\"middle\">A = (B + b) × h : 2</text>\n</g>\n</svg>",
   "caption": "b = base, h = height, l = side. The height (dashed) is always perpendicular to the base."
  },
  {
   "type": "text",
   "title": "Why do the formulas work?",
   "html": "<p>Formulas aren't magic: you can understand them with a pair of scissors!</p>\n<ul>\n<li><b>Rectangle</b>: if the base is 5 cm and the height 3 cm, there are 3 rows of 5 squares: 5 × 3 = 15 cm².</li>\n<li><b>Parallelogram</b>: cut off the triangle on the left and move it to the right: it becomes a rectangle with the same base and height. So A = b × h.</li>\n<li><b>Triangle</b>: two equal triangles put together form a parallelogram. So the triangle's area is <b>half</b>: A = b × h ÷ 2.</li>\n<li><b>Rhombus</b>: it's half of the rectangle whose sides are the two diagonals: A = D × d ÷ 2.</li>\n<li><b>Trapezium</b>: two equal trapeziums, one upside down, form a parallelogram with base B + b: A = (B + b) × h ÷ 2.</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "Lab: change the rectangle",
   "widget": "areaGrid",
   "options": {
    "w": 5,
    "h": 3,
    "max": 12
   },
   "caption": "Move the sliders and watch how perimeter and area change. Can you find two rectangles with the same area but different perimeters?"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand perimeter and area",
   "intro": "Formulas won't stick in your head? No problem: here are other ways to really understand what you're calculating.",
   "tabs": [
    {
     "label": "🐜 The ant and the painter",
     "html": "<p>Imagine a shape drawn on the floor.</p><ul><li>An <b>ant</b> walks along the edge until it gets back to where it started: the path it walks is the <b>perimeter</b>. It's measured in cm, m… (a length).</li><li>A <b>painter</b> has to colour the whole inside: the amount of floor to paint is the <b>area</b>. It's measured in cm², m²… (little squares).</li></ul><p>That's why perimeter and area can't be compared: one is a path, the other is a surface!</p>"
    },
    {
     "label": "🟦 Counting squares",
     "html": "<p>Use the sliders: each square is 1 cm². Count the squares in one row, then how many rows there are. Rows × squares per row = area. You'll notice it's exactly <b>base × height</b>! Then go round the edge counting the sides of the squares: that's the perimeter.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 6,
      "h": 4,
      "max": 12
     }
    },
    {
     "label": "🧊 With 3D cubes",
     "html": "<p>Put the cubes in neat rows: 5 cubes per row, 3 rows. How many are there? 5 × 3 = 15. Look at them from above: their «footprint» is a rectangle with an area of 15 squares. Change the numbers with the sliders and watch the rectangle grow.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 5,
      "b": 3
     }
    },
    {
     "label": "✂️ Cut and rearrange",
     "html": "<p>The mathematicians' trick: <b>turn a shape into another one we already know how to measure</b>, without losing or adding any paper.</p><ul><li><b>Parallelogram</b>: cut off the triangle on the left and move it to the right: it becomes a rectangle with the same base and height. Area = b × h.</li><li><b>Triangle</b>: two equal triangles put together form a parallelogram. So the triangle is half: Area = b × h ÷ 2.</li><li><b>Trapezium</b>: two equal trapeziums, one upside down, form a parallelogram with base (B + b). Area = (B + b) × h ÷ 2.</li></ul><p>Really try it with a sheet of paper and scissors!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"40,200 100,80 260,80 200,200\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"200\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><polygon points=\"40,200 100,80 100,200\" fill=\"#fca5a5\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"150\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">parallelogram</text><text x=\"300\" y=\"150\" font-size=\"40\" text-anchor=\"middle\" fill=\"#334155\">→</text><rect x=\"360\" y=\"80\" width=\"160\" height=\"120\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><polygon points=\"460,200 520,80 520,200\" fill=\"#fca5a5\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"440\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">rectangle: b × h</text><text x=\"130\" y=\"40\" font-size=\"16\" text-anchor=\"middle\" fill=\"#b91c1c\">I cut the red triangle here…</text><text x=\"470\" y=\"40\" font-size=\"16\" text-anchor=\"middle\" fill=\"#b91c1c\">…and move it here</text></svg>"
    },
    {
     "label": "🏺 Egyptian surveyors",
     "html": "<p>Every year the <b>Nile</b> flooded and wiped out the boundaries of the fields. The Egyptian «rope stretchers» (surveyors) had to measure the land again to know how much tax each farmer had to pay.</p><p>They used a <b>rope with 12 knots</b> at equal distances: by stretching it into a triangle with sides of 3, 4 and 5 spaces they got a perfect <b>right angle</b>, and from there they drew rectangles. Then they divided irregular fields into rectangles and triangles, just as we do!</p><p>The word <b>geometry</b> comes from Greek and means exactly «measuring the earth».</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"240\" fill=\"#fef3c7\"/><polygon points=\"180,210 315,210 315,30\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"5\"/><g fill=\"#78350f\"><circle cx=\"180\" cy=\"210\" r=\"7\"/><circle cx=\"225\" cy=\"210\" r=\"7\"/><circle cx=\"270\" cy=\"210\" r=\"7\"/><circle cx=\"315\" cy=\"210\" r=\"7\"/><circle cx=\"315\" cy=\"165\" r=\"7\"/><circle cx=\"315\" cy=\"120\" r=\"7\"/><circle cx=\"315\" cy=\"75\" r=\"7\"/><circle cx=\"315\" cy=\"30\" r=\"7\"/><circle cx=\"288\" cy=\"66\" r=\"7\"/><circle cx=\"261\" cy=\"102\" r=\"7\"/><circle cx=\"234\" cy=\"138\" r=\"7\"/><circle cx=\"207\" cy=\"174\" r=\"7\"/></g><rect x=\"297\" y=\"192\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"248\" y=\"234\" font-size=\"18\" text-anchor=\"middle\" fill=\"#78350f\" font-weight=\"bold\">3 spaces</text><text x=\"330\" y=\"125\" font-size=\"18\" fill=\"#78350f\" font-weight=\"bold\">4 spaces</text><text x=\"225\" y=\"95\" font-size=\"18\" text-anchor=\"end\" fill=\"#78350f\" font-weight=\"bold\">5 spaces</text><text x=\"470\" y=\"205\" font-size=\"16\" text-anchor=\"middle\" fill=\"#dc2626\">right angle!</text><text x=\"470\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#78350f\">12 knots in all</text></svg>"
    },
    {
     "label": "📐 Heron's formula",
     "html": "<p>What if you only know the <b>three sides</b> of a triangle and not its height? Heron of Alexandria (1st century AD) found a special formula:</p><ol><li>work out the semi-perimeter: s = (a + b + c) ÷ 2</li><li>Area = √( s × (s − a) × (s − b) × (s − c) )</li></ol><p><b>Example</b>: sides 3, 4 and 5 cm → s = 6; Area = √(6 × 3 × 2 × 1) = √36 = <b>6 cm²</b>. Check with the usual formula: the triangle is right-angled, base 3 and height 4 → 3 × 4 ÷ 2 = 6 cm². Same result by two different routes!</p>"
    }
   ]
  },
  {
   "type": "curiosity",
   "title": "Same perimeter, different area!",
   "html": "<p>A 6 × 2 rectangle and a 4 × 4 square have <b>equal</b> perimeters (16 cm), but different areas: 12 cm² and 16 cm²!</p>\n<p>And the other way round: a 12 × 1 rectangle and a 4 × 3 one have the <b>same area</b> (12 cm²), but perimeters of 26 cm and 14 cm.</p>\n<p>For the same perimeter, the rectangle with the biggest area is always the <b>square</b>. That's why bees build hexagonal cells and farmers once looked for fields as \"square\" as possible: less fence for more land!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: perimeter",
   "questions": [
    {
     "type": "num",
     "q": "A square has a side of 7 cm. What is its perimeter?",
     "answer": 28,
     "tol": 0,
     "unit": "cm",
     "explain": "P = 7 × 4 = 28 cm."
    },
    {
     "type": "num",
     "q": "A rectangle has a base of 9 cm and a height of 4 cm. What is its perimeter?",
     "answer": 26,
     "tol": 0,
     "unit": "cm",
     "explain": "P = (9 + 4) × 2 = 26 cm."
    },
    {
     "type": "mc",
     "q": "What unit is perimeter measured in?",
     "options": [
      "cm²",
      "cm",
      "kg",
      "litres"
     ],
     "answer": 1,
     "explain": "Perimeter is a length: it's measured in cm, m, km…"
    }
   ]
  },
  {
   "type": "example",
   "title": "Practical example: fencing the vegetable garden",
   "html": "<p>Grandpa has a rectangular vegetable garden <b>12 m</b> long and <b>8 m</b> wide. He wants to fence it with netting that costs <b>€3 per metre</b>.</p>\n<ol>\n<li>How much netting is needed? It's the <b>perimeter</b>: P = (12 + 8) × 2 = <b>40 m</b>.</li>\n<li>How much does he spend? 40 × 3 = <b>€120</b>.</li>\n<li>He also wants to sow the whole plot: how much surface is it? It's the <b>area</b>: A = 12 × 8 = <b>96 m²</b>.</li>\n<li>One packet of seeds is enough for 8 m²: he needs 96 ÷ 8 = <b>12 packets</b>.</li>\n</ol>"
  },
  {
   "type": "example",
   "title": "Practical example: the bedroom tiles",
   "html": "<p>The bedroom floor is a <b>4 m × 3 m</b> rectangle. We want to cover it with square tiles with <b>50 cm</b> sides.</p>\n<ol>\n<li>Floor area: 4 × 3 = <b>12 m²</b>.</li>\n<li>One tile: 0.5 m × 0.5 m = <b>0.25 m²</b>.</li>\n<li>Tiles needed: 12 ÷ 0.25 = <b>48 tiles</b>.</li>\n</ol>\n<p>Check with another method: 8 tiles fit along 4 m, 6 fit along 3 m. 8 × 6 = 48. ✔️</p>"
  },
  {
   "type": "remember",
   "title": "Units of area",
   "html": "<p>Units of area \"jump\" by <b>100 at a time</b>, because a big square contains 10 rows of 10 small squares:</p>\n<p><b>1 m² = 100 dm² = 10,000 cm²</b></p>\n<p><b>1 dm² = 100 cm²</b> &nbsp;&nbsp; <b>1 cm² = 100 mm²</b></p>\n<p>For land we also use the <b>hectare</b> (1 ha = 10,000 m², about one and a half football pitches) and the <b>km²</b> (1 km² = 1,000,000 m²).</p>"
  },
  {
   "type": "curiosity",
   "title": "How big is Italy?",
   "html": "<p>Italy has an area of about <b>302,000 km²</b>. The largest region is <b>Sicily</b> (about 25,800 km²), the smallest is the <b>Aosta Valley</b> (about 3,260 km²).</p>\n<p>The smallest country in the world, <b>Vatican City</b>, measures only 0.44 km²: less than 62 football pitches!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: area",
   "questions": [
    {
     "type": "num",
     "q": "Area of a rectangle with a base of 8 cm and a height of 5 cm?",
     "answer": 40,
     "tol": 0,
     "unit": "cm²",
     "explain": "A = 8 × 5 = 40 cm²."
    },
    {
     "type": "num",
     "q": "Area of a triangle with a base of 10 cm and a height of 6 cm?",
     "answer": 30,
     "tol": 0,
     "unit": "cm²",
     "explain": "A = 10 × 6 ÷ 2 = 30 cm²."
    },
    {
     "type": "tf",
     "q": "Two shapes with the same perimeter always have the same area.",
     "answer": false,
     "explain": "No: a 6 × 2 rectangle and a 4 × 4 square have the same perimeter (16) but different areas (12 and 16)."
    },
    {
     "type": "num",
     "q": "How many cm² are there in 1 dm²?",
     "answer": 100,
     "tol": 0,
     "unit": "cm²",
     "explain": "1 dm² = 10 cm × 10 cm = 100 cm²."
    }
   ]
  },
  {
   "type": "3d",
   "title": "From area to volume: let's add layers",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 4,
    "b": 3,
    "c": 2
   },
   "caption": "A 4 × 3 = 12-square rectangle is the base. If you stack 2 layers of cubes you get 12 × 2 = 24 cubes: that's the volume, which you'll study at middle school. Area counts squares, volume counts cubes."
  },
  {
   "type": "conceptMap",
   "title": "Map: from units of measure to formulas",
   "nodes": [
    {
     "id": "unita",
     "label": "Units of measure",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "To measure you need a standard that's the same for everyone: the metre (m) and its multiples and submultiples.",
     "why": "Once every city had its own measures (feet, arms, palms…) and quarrels broke out in trade. During the French Revolution (1791-1799) the metre was invented, linked to the size of the Earth, and since then the metric system has spread to almost the whole world."
    },
    {
     "id": "lunghezza",
     "label": "Length (cm, m)",
     "x": 22,
     "y": 26,
     "color": "#3b82f6",
     "html": "The measure of a line: a side, an outline, a road.",
     "why": "We count how many times the unit (for example 1 cm) fits along the line."
    },
    {
     "id": "quadratino",
     "label": "Unit square (cm²)",
     "x": 78,
     "y": 26,
     "color": "#f59e0b",
     "html": "A square with 1 cm sides: its area is 1 cm².",
     "why": "To measure a surface we need a little piece of surface as a standard. The square is chosen because it fits together with other squares without leaving gaps and covers the whole plane."
    },
    {
     "id": "perimetro",
     "label": "Perimeter",
     "x": 22,
     "y": 48,
     "color": "#2563eb",
     "html": "The sum of the lengths of all the sides.",
     "why": "It's the length of the outline: just add the pieces. In regular polygons the sides are equal, so side × number of sides."
    },
    {
     "id": "rettangolo",
     "label": "Rectangle area: b × h",
     "x": 78,
     "y": 48,
     "color": "#ea580c",
     "html": "Base times height.",
     "why": "In a rectangle the little squares are arranged in rows and columns: there are h rows of b squares, so b × h squares in all. It's multiplication as an array!"
    },
    {
     "id": "parall",
     "label": "Parallelogram: b × h",
     "x": 55,
     "y": 68,
     "color": "#16a34a",
     "html": "Same formula as the rectangle.",
     "why": "By cutting off a triangle and moving it you get a rectangle with the same base and height: the area doesn't change because nothing is removed or added (principle of equidecomposability)."
    },
    {
     "id": "triangolo",
     "label": "Triangle: b × h ÷ 2",
     "x": 85,
     "y": 76,
     "color": "#dc2626",
     "html": "Base times height divided by 2.",
     "why": "Two equal triangles form a parallelogram: the triangle is half of it."
    },
    {
     "id": "trapezio",
     "label": "Trapezium: (B + b) × h ÷ 2",
     "x": 30,
     "y": 82,
     "color": "#9333ea",
     "html": "Sum of the bases times height divided by 2.",
     "why": "Two equal trapeziums, one upside down, form a parallelogram with base B + b: the trapezium is half of it."
    },
    {
     "id": "rombo",
     "label": "Rhombus: D × d ÷ 2",
     "x": 60,
     "y": 94,
     "color": "#0891b2",
     "html": "Long diagonal times short diagonal divided by 2.",
     "why": "The rhombus fits inside a rectangle with sides equal to the diagonals, and takes up exactly half of it (the 4 little triangles outside equal the 4 inside)."
    }
   ],
   "edges": [
    [
     "unita",
     "lunghezza",
     "for lines"
    ],
    [
     "unita",
     "quadratino",
     "for surfaces"
    ],
    [
     "lunghezza",
     "perimetro",
     "are added"
    ],
    [
     "quadratino",
     "rettangolo",
     "counted in rows"
    ],
    [
     "rettangolo",
     "parall",
     "cut out"
    ],
    [
     "parall",
     "triangolo",
     "half"
    ],
    [
     "parall",
     "trapezio",
     "half of two trapeziums"
    ],
    [
     "rettangolo",
     "rombo",
     "half"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Perimeter",
   "d": "Length of the outline of a flat shape."
  },
  {
   "t": "Area",
   "d": "Measure of the surface enclosed by a shape."
  },
  {
   "t": "Polygon",
   "d": "Closed flat shape bounded by line segments (sides)."
  },
  {
   "t": "Base",
   "d": "The side the shape \"rests\" on."
  },
  {
   "t": "Height",
   "d": "Segment perpendicular to the base reaching the opposite side or vertex."
  },
  {
   "t": "Diagonal",
   "d": "Segment joining two non-adjacent vertices of a polygon."
  },
  {
   "t": "Square metre (m²)",
   "d": "Area of a square with 1-metre sides."
  },
  {
   "t": "Equal in area",
   "d": "Shapes that have the same area, even if they have different shapes."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "The perimeter is…",
    "options": [
     "the surface of the shape",
     "the length of the outline",
     "the number of sides",
     "the height of the shape"
    ],
    "answer": 1,
    "explain": "The perimeter is the length of the outline."
   },
   {
    "type": "mc",
    "q": "What is the formula for the area of a triangle?",
    "options": [
     "b × h",
     "b + h",
     "b × h ÷ 2",
     "l × 3"
    ],
    "answer": 2,
    "explain": "A triangle is half a parallelogram: A = b × h ÷ 2."
   },
   {
    "type": "num",
    "q": "Perimeter of an equilateral triangle with a 9 cm side?",
    "answer": 27,
    "tol": 0,
    "unit": "cm",
    "explain": "P = 9 × 3 = 27 cm."
   },
   {
    "type": "num",
    "q": "Area of a square with a 6 m side?",
    "answer": 36,
    "tol": 0,
    "unit": "m²",
    "explain": "A = 6 × 6 = 36 m²."
   },
   {
    "type": "num",
    "q": "Area of a rhombus with diagonals of 10 cm and 6 cm?",
    "answer": 30,
    "tol": 0,
    "unit": "cm²",
    "explain": "A = D × d ÷ 2 = 10 × 6 ÷ 2 = 30 cm²."
   },
   {
    "type": "num",
    "q": "Area of a trapezium with bases of 8 cm and 4 cm and a height of 5 cm?",
    "answer": 30,
    "tol": 0,
    "unit": "cm²",
    "explain": "A = (8 + 4) × 5 ÷ 2 = 30 cm²."
   },
   {
    "type": "tf",
    "q": "Area is measured in square units, like cm² or m².",
    "answer": true,
    "explain": "Area measures a surface: square units are used."
   },
   {
    "type": "num",
    "q": "A rectangle has an area of 24 cm² and a base of 6 cm. What is its height?",
    "answer": 4,
    "tol": 0,
    "unit": "cm",
    "explain": "Inverse formula: h = A ÷ b = 24 ÷ 6 = 4 cm."
   },
   {
    "type": "num",
    "q": "A square has a perimeter of 36 cm. What is its side?",
    "answer": 9,
    "tol": 0,
    "unit": "cm",
    "explain": "Inverse formula: l = P ÷ 4 = 36 ÷ 4 = 9 cm."
   },
   {
    "type": "mc",
    "q": "Which rectangle has the biggest area?",
    "options": [
     "10 × 1",
     "5 × 2",
     "4 × 3",
     "6 × 1"
    ],
    "answer": 2,
    "explain": "Areas: 10, 10, 12, 6. The 4 × 3 wins with 12."
   },
   {
    "type": "num",
    "q": "How many m² are there in a hectare?",
    "answer": 10000,
    "tol": 0,
    "unit": "m²",
    "explain": "1 hectare = 10,000 m² (a 100 m × 100 m square)."
   }
  ],
  "gen": [
   [
    "perimRect",
    1
   ],
   [
    "areaRect",
    1
   ],
   [
    "areaTri",
    1
   ]
  ]
 }
});
