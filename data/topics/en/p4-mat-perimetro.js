TOPIC('en', {
 "id": "p4-mat-perimetro",
 "title": "The perimeter",
 "intro": "How much fencing do we need to enclose the vegetable garden? How much ribbon to go around a gift? To answer we need to measure the <b>outline</b> of figures, that is, their <b>perimeter</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "What is the perimeter?",
   "html": "<p>The <b>perimeter</b> is the <b>length of the outline</b> of a flat figure.</p>\n<p>The word comes from Greek: <i>perí</i> = \"around\" and <i>métron</i> = \"measure\". Perimeter means exactly \"measure of the way around\".</p>\n<p>For a polygon, the perimeter is found in a very simple way:</p>\n<p style=\"font-size:1.2em\"><b>Perimeter = sum of the lengths of all the sides</b></p>\n<p>The perimeter is a <b>length</b>: it is measured in <b>mm, cm, dm, m, km</b>… It is usually written with the letter <b>P</b>.</p>\n<p>⚠️ Before adding, check that all the sides are in the <b>same unit of measure</b>! You can't add centimeters and meters.</p>"
  },
  {
   "type": "svg",
   "title": "The ant that goes around",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<polygon points=\"80,240 120,70 330,50 420,200 260,250\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"6\" stroke-dasharray=\"16 6\"/>\n<text x=\"72\" y=\"236\" font-size=\"30\">🐜</text>\n<text x=\"80\" y=\"155\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"200\" y=\"45\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">6 cm</text>\n<text x=\"385\" y=\"115\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">4 cm</text>\n<text x=\"350\" y=\"245\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"140\" y=\"270\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"440\" y=\"60\" font-size=\"20\" fill=\"#15803d\" font-weight=\"bold\">P = 5 + 6 + 4</text>\n<text x=\"470\" y=\"88\" font-size=\"20\" fill=\"#15803d\" font-weight=\"bold\">+ 5 + 5</text>\n<text x=\"470\" y=\"120\" font-size=\"24\" fill=\"#b91c1c\" font-weight=\"bold\">= 25 cm</text>\n</svg>",
   "caption": "The ant starts from a vertex and walks along all the sides until it gets back to the starting point: the road it has covered is the perimeter."
  },
  {
   "type": "text",
   "title": "The most used formulas",
   "html": "<p>For some figures there are shortcuts, because they have equal sides.</p>\n<table>\n<tr><th>Figure</th><th>Perimeter</th><th>Why</th></tr>\n<tr><td><b>Square</b> (side s)</td><td>P = s × 4</td><td>4 equal sides</td></tr>\n<tr><td><b>Rectangle</b> (base b, height h)</td><td>P = (b + h) × 2</td><td>2 equal bases and 2 equal heights</td></tr>\n<tr><td><b>Equilateral triangle</b></td><td>P = s × 3</td><td>3 equal sides</td></tr>\n<tr><td><b>Isosceles triangle</b></td><td>P = base + side × 2</td><td>2 equal slanted sides</td></tr>\n<tr><td><b>Rhombus</b></td><td>P = s × 4</td><td>4 equal sides</td></tr>\n<tr><td><b>Parallelogram</b></td><td>P = (a + b) × 2</td><td>opposite sides equal</td></tr>\n<tr><td><b>Regular polygon</b> with n sides</td><td>P = s × n</td><td>n equal sides</td></tr>\n<tr><td>Any polygon</td><td>sum of all the sides</td><td>—</td></tr>\n</table>"
  },
  {
   "type": "widget",
   "title": "Play with the rectangle",
   "widget": "areaGrid",
   "options": {
    "w": 6,
    "h": 3,
    "max": 12
   },
   "caption": "Move the sliders: count the squares along the outline and check the perimeter. Try to find different rectangles with the same perimeter!"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: calculating the perimeter",
   "questions": [
    {
     "type": "num",
     "q": "A square has a side of 7 cm. What is its perimeter?",
     "answer": 28,
     "unit": "cm",
     "explain": "7 × 4 = 28 cm."
    },
    {
     "type": "num",
     "q": "A rectangle has a base of 9 cm and a height of 4 cm. What is the perimeter?",
     "answer": 26,
     "unit": "cm",
     "explain": "(9 + 4) × 2 = 13 × 2 = 26 cm."
    },
    {
     "type": "tf",
     "q": "The perimeter is measured in meters, centimeters or other units of length.",
     "answer": true,
     "explain": "It is a length: the outline of the figure."
    }
   ]
  },
  {
   "type": "text",
   "title": "Backwards problems: inverse formulas",
   "html": "<p>Sometimes you know the perimeter and have to find a side. You use the <b>inverse</b> operation:</p>\n<ul>\n<li><b>Square</b>: side = P ÷ 4. If P = 36 cm → s = 36 ÷ 4 = <b>9 cm</b>.</li>\n<li><b>Equilateral triangle</b>: side = P ÷ 3. If P = 27 m → s = <b>9 m</b>.</li>\n<li><b>Rectangle</b>: base + height = P ÷ 2, then I subtract the side I know. If P = 30 cm and b = 10 cm → b + h = 15 → h = 15 − 10 = <b>5 cm</b>.</li>\n<li><b>Regular polygon</b>: side = P ÷ n (n = number of sides).</li>\n</ul>\n<p>Always check: do the calculation \"forwards\" again and see if you get the starting perimeter!</p>"
  },
  {
   "type": "svg",
   "title": "Same perimeter, different shapes",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#eff6ff\"/>\n<rect x=\"30\" y=\"100\" width=\"240\" height=\"40\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<text x=\"150\" y=\"90\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">6 cm</text>\n<text x=\"290\" y=\"127\" font-size=\"18\" fill=\"#1f2937\">1 cm</text>\n<text x=\"150\" y=\"175\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">P = (6+1)×2 = 14 cm</text>\n<rect x=\"380\" y=\"60\" width=\"160\" height=\"120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"460\" y=\"50\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 cm</text>\n<text x=\"550\" y=\"127\" font-size=\"18\" fill=\"#1f2937\">3 cm</text>\n<text x=\"460\" y=\"215\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">P = (4+3)×2 = 14 cm</text>\n<text x=\"300\" y=\"260\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">The same length of string… but there is more or less room inside!</text>\n</svg>",
   "caption": "Two rectangles with the same perimeter (14 cm) can be very different: the perimeter measures the outline, not the space inside."
  },
  {
   "type": "example",
   "title": "Worked example: fencing the vegetable garden",
   "html": "<p>Grandpa has a rectangular vegetable garden <b>12 m</b> long and <b>8 m</b> wide. He wants to fence it with netting, leaving a gate <b>1 m</b> wide. How many meters of netting must he buy?</p>\n<ol>\n<li>Perimeter of the garden: (12 + 8) × 2 = 20 × 2 = <b>40 m</b></li>\n<li>I take away the gate: 40 − 1 = <b>39 m</b> of netting</li>\n</ol>\n<p>If the netting costs €3 per meter, he will spend 39 × 3 = <b>€117</b>.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the frame and the ribbon",
   "html": "<p>Sofia wants to glue a ribbon around her square drawing with a side of <b>25 cm</b>. She has a roll of ribbon of <b>1 m</b>. Is it enough?</p>\n<ol>\n<li>Perimeter of the square: 25 × 4 = <b>100 cm</b></li>\n<li>1 m = 100 cm → the ribbon is <b>just enough</b>, with nothing left over! 🎀</li>\n</ol>\n<p>And for an equilateral triangular poster with a side of 40 cm? 40 × 3 = 120 cm = 1.2 m: it is <b>not enough</b>, 20 cm are missing.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the soccer field",
   "html": "<p>Before the match the children run 2 laps around a small soccer field <b>40 m</b> long and <b>20 m</b> wide. How many meters do they run?</p>\n<ol>\n<li>One lap = perimeter = (40 + 20) × 2 = <b>120 m</b></li>\n<li>Two laps = 120 × 2 = <b>240 m</b></li>\n</ol>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The endless coast",
   "html": "<p>How long is the coast of Great Britain? It depends on the ruler! Measuring it with straight sections of 200 km you get about 2400 km, but with sections of 50 km about 3400 km: the smaller the tool, the more you \"go into\" every inlet and the longer the coast becomes. The mathematician <b>Benoît Mandelbrot</b> studied this strange fact in 1967: it is the \"coastline paradox\", from which <b>fractals</b> were born.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Queen Dido and the ox hide",
   "html": "<p>A legend tells that the Phoenician queen <b>Dido</b>, arriving in Africa, asked for as much land \"as an ox hide can contain\". She cut the hide into very thin strips and with that long rope she surrounded a whole hill, where she founded <b>Carthage</b>. She chose the shape that encloses the most space with a given perimeter: the <b>circle</b> (using the seashore as a boundary too)!</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>Perimeter = <b>sum of all the sides</b>. It is a length (cm, m…).</li>\n<li>Square: <b>s × 4</b>. Rectangle: <b>(b + h) × 2</b>. Equilateral triangle: <b>s × 3</b>. Regular polygon: <b>s × n</b>.</li>\n<li>Inverse formulas: side of the square = <b>P ÷ 4</b>; in the rectangle b + h = <b>P ÷ 2</b>.</li>\n<li>Before adding, bring all the sides to the <b>same unit of measure</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand the perimeter",
   "intro": "The perimeter can be touched, unrolled, walked. Here are other paths to understand it.",
   "tabs": [
    {
     "label": "🧵 The string",
     "html": "<p>Take a piece of string and lay it carefully along the edge of an object (a book, the desk, a plate). Make a mark where the loop closes. Now <b>unroll</b> the string and measure it with the ruler: that is the measure of the perimeter!</p>\n<p>This trick works with curved figures too, like the edge of a plate, where the polygon formulas are not enough.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fffbeb\"/>\n<rect x=\"40\" y=\"40\" width=\"160\" height=\"110\" fill=\"#fde68a\" stroke=\"#b91c1c\" stroke-width=\"6\"/>\n<text x=\"120\" y=\"102\" font-size=\"20\" text-anchor=\"middle\" fill=\"#78350f\">book</text>\n<text x=\"230\" y=\"105\" font-size=\"36\" fill=\"#1f2937\">➜</text>\n<line x1=\"290\" y1=\"95\" x2=\"570\" y2=\"95\" stroke=\"#b91c1c\" stroke-width=\"6\"/>\n<rect x=\"290\" y=\"115\" width=\"280\" height=\"30\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n<g stroke=\"#0369a1\" stroke-width=\"2\">\n<line x1=\"318\" y1=\"115\" x2=\"318\" y2=\"130\"/><line x1=\"346\" y1=\"115\" x2=\"346\" y2=\"130\"/><line x1=\"374\" y1=\"115\" x2=\"374\" y2=\"130\"/><line x1=\"402\" y1=\"115\" x2=\"402\" y2=\"130\"/><line x1=\"430\" y1=\"115\" x2=\"430\" y2=\"135\"/><line x1=\"458\" y1=\"115\" x2=\"458\" y2=\"130\"/><line x1=\"486\" y1=\"115\" x2=\"486\" y2=\"130\"/><line x1=\"514\" y1=\"115\" x2=\"514\" y2=\"130\"/><line x1=\"542\" y1=\"115\" x2=\"542\" y2=\"130\"/>\n</g>\n<text x=\"430\" y=\"190\" font-size=\"22\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">the unrolled string = perimeter</text>\n</svg>"
    },
    {
     "label": "📏 On the number line",
     "html": "<p>Imagine \"opening up\" the outline of a rectangle with base 5 and height 3 and laying it out on a line. Make one jump for each side: <b>5, then 3, then 5, then 3</b>. Where do you land? At <b>16</b>: it is the perimeter! The jumps come in equal pairs, which is why you can do (5 + 3) × 2.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 20,
      "step": 1,
      "marks": [
       5,
       8,
       13,
       16
      ]
     }
    },
    {
     "label": "🚶 Counting steps",
     "html": "<p>In Finland and in many Nordic countries math is often done <b>outdoors</b>. Try it in the yard:</p>\n<ol>\n<li>Walk along the edge of the field or flower bed and count the steps.</li>\n<li>Measure with the tape how long one of your steps is (for example 50 cm).</li>\n<li>Multiply: 80 steps × 50 cm = 4000 cm = <b>40 m</b> of perimeter.</li>\n</ol>\n<p>The ancient Romans measured roads just like this: <b>a thousand paces</b> (<i>mille passus</i>) made a <b>mile</b>, about 1480 m. Their \"pace\" was two strides.</p>"
    },
    {
     "label": "🟦 Squares and toothpicks",
     "html": "<p>Draw a figure on squared paper following the lines. The perimeter is the number of <b>square sides</b> along the edge.</p>\n<p>Or build figures with <b>toothpicks</b>, all the same length: the perimeter is the number of toothpicks used! With 12 toothpicks you can make a 3 × 3 square, a 5 × 1 rectangle, a 4 × 2 rectangle… all with perimeter 12, but of different sizes.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 3,
      "h": 3,
      "max": 10
     }
    },
    {
     "label": "🏛️ Like the Greeks",
     "html": "<p>For regular polygons the Greeks noticed that the perimeter is always <b>side × number of sides</b>. The great <b>Archimedes</b> of Syracuse (3rd century BC) used exactly the perimeters of regular polygons with 6, 12, 24, 48 and 96 sides, drawn inside and outside a circle, to calculate how long the circumference is. He discovered that the \"way around\" the circle is a little more than <b>3 times</b> its diameter: it is the famous number π ≈ 3.14!</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#faf5ff\"/>\n<circle cx=\"150\" cy=\"120\" r=\"90\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<polygon points=\"240,120 195,198 105,198 60,120 105,42 195,42\" fill=\"#ddd6fe\" fill-opacity=\"0.6\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<circle cx=\"420\" cy=\"120\" r=\"90\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<polygon points=\"510,120 498,165 465,198 420,210 375,198 342,165 330,120 342,75 375,42 420,30 465,42 498,75\" fill=\"#ddd6fe\" fill-opacity=\"0.6\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"232\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">6 sides</text>\n<text x=\"420\" y=\"232\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">12 sides: almost a circle!</text>\n</svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Perimeter map: tap a node and find out why",
   "nodes": [
    {
     "id": "lunghezza",
     "label": "Measures of length",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "The meter and its multiples and submultiples: km, hm, dam, m, dm, cm, mm.",
     "why": "The meter was born in France in 1791, during the Revolution, as the ten-millionth part of the distance between the North Pole and the Equator. Before that every city had its own measures (arms, feet, palms) and trade was chaos."
    },
    {
     "id": "poligono",
     "label": "Polygon",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "A flat figure closed by segments: the sides.",
     "why": "Since the outline is made of straight segments, we can measure them one by one with a ruler."
    },
    {
     "id": "perimetro",
     "label": "Perimeter",
     "x": 50,
     "y": 40,
     "color": "#dc2626",
     "html": "The length of the outline of a figure: the sum of the sides.",
     "why": "From the Greek <i>perí</i> (around) + <i>métron</i> (measure). Egyptian land surveyors calculated it after every flooding of the Nile to redraw the boundaries of the fields and know how much wall or hedge was needed."
    },
    {
     "id": "somma",
     "label": "Sum of the sides",
     "x": 82,
     "y": 28,
     "color": "#f59e0b",
     "html": "The method that always works: add up all the sides.",
     "why": "Going around the outline means walking along each side once: the total road is the sum of the pieces."
    },
    {
     "id": "quadrato",
     "label": "Square: s × 4",
     "x": 15,
     "y": 66,
     "color": "#2563eb",
     "html": "4 equal sides: P = s × 4.",
     "why": "Multiplication is repeated addition: s + s + s + s = s × 4."
    },
    {
     "id": "rettangolo",
     "label": "Rectangle: (b + h) × 2",
     "x": 40,
     "y": 72,
     "color": "#0ea5e9",
     "html": "Two equal bases and two equal heights.",
     "why": "The opposite sides of the rectangle are equal. You can do b × 2 + h × 2, or (b + h) × 2: by the <b>distributive property</b> the result is the same."
    },
    {
     "id": "regolare",
     "label": "Regular: s × n",
     "x": 65,
     "y": 72,
     "color": "#a855f7",
     "html": "Regular polygon with n sides: P = s × n.",
     "why": "All the sides are equal: you add the same length n times. Archimedes used the perimeters of regular polygons to get close to the length of the circle."
    },
    {
     "id": "inverse",
     "label": "Inverse formulas",
     "x": 88,
     "y": 66,
     "color": "#14b8a6",
     "html": "From the perimeter I find the side: s = P ÷ 4 (square), s = P ÷ n (regular).",
     "why": "Division is the inverse operation of multiplication: if s × 4 = P, then P ÷ 4 = s."
    },
    {
     "id": "area",
     "label": "It's not the area!",
     "x": 50,
     "y": 94,
     "color": "#be185d",
     "html": "The perimeter measures the edge, the area measures the space inside.",
     "why": "Figures with the same perimeter can have different areas. Among all rectangles with the same perimeter, the square has the largest area; among all figures, the circle (the isoperimetric problem, already known to the Greeks)."
    }
   ],
   "edges": [
    [
     "lunghezza",
     "perimetro",
     "is measured in"
    ],
    [
     "poligono",
     "perimetro",
     "has a"
    ],
    [
     "perimetro",
     "somma",
     "is calculated with"
    ],
    [
     "perimetro",
     "quadrato",
     "shortcut"
    ],
    [
     "perimetro",
     "rettangolo",
     "shortcut"
    ],
    [
     "perimetro",
     "regolare",
     "shortcut"
    ],
    [
     "regolare",
     "inverse",
     "backwards"
    ],
    [
     "perimetro",
     "area",
     "not to be confused with"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: inverse formulas and problems",
   "questions": [
    {
     "type": "num",
     "q": "The perimeter of a square is 48 cm. How long is the side?",
     "answer": 12,
     "unit": "cm",
     "explain": "48 ÷ 4 = 12 cm."
    },
    {
     "type": "num",
     "q": "A regular hexagon has a side of 5 m. What is the perimeter?",
     "answer": 30,
     "unit": "m",
     "explain": "5 × 6 = 30 m."
    },
    {
     "type": "mc",
     "q": "A rectangle has a perimeter of 20 cm and a base of 7 cm. The height is…",
     "options": [
      "3 cm",
      "6 cm",
      "13 cm"
     ],
     "answer": 0,
     "explain": "20 ÷ 2 = 10 (base + height); 10 − 7 = 3 cm."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Perimeter",
   "d": "The length of the outline of a flat figure; in polygons it is the sum of the sides."
  },
  {
   "t": "Outline",
   "d": "The line that bounds a figure."
  },
  {
   "t": "Base",
   "d": "In the rectangle, the side the figure \"rests\" on."
  },
  {
   "t": "Height",
   "d": "In the rectangle, the side perpendicular to the base."
  },
  {
   "t": "Formula",
   "d": "A rule written briefly with letters and symbols, for example P = s × 4."
  },
  {
   "t": "Inverse formula",
   "d": "The rule to find a side starting from the perimeter."
  },
  {
   "t": "Unit of measure",
   "d": "The quantity used for comparison, for example the meter."
  },
  {
   "t": "Isoperimetric",
   "d": "Figures that have the same perimeter."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "The perimeter is…",
    "options": [
     "the space inside a figure",
     "the length of the outline of a figure",
     "the number of sides"
    ],
    "answer": 1,
    "explain": "Perimeter = measure of the way around."
   },
   {
    "type": "num",
    "q": "A triangle has sides of 6 cm, 8 cm and 10 cm. What is the perimeter?",
    "answer": 24,
    "unit": "cm",
    "explain": "6 + 8 + 10 = 24 cm."
   },
   {
    "type": "num",
    "q": "A square has a side of 15 m. What is the perimeter?",
    "answer": 60,
    "unit": "m",
    "explain": "15 × 4 = 60 m."
   },
   {
    "type": "num",
    "q": "A rectangle has a base of 25 cm and a height of 10 cm. What is the perimeter?",
    "answer": 70,
    "unit": "cm",
    "explain": "(25 + 10) × 2 = 70 cm."
   },
   {
    "type": "num",
    "q": "An equilateral triangle has a perimeter of 36 dm. How long is one side?",
    "answer": 12,
    "unit": "dm",
    "explain": "36 ÷ 3 = 12 dm."
   },
   {
    "type": "tf",
    "q": "Two rectangles with the same perimeter always have the same shape.",
    "answer": false,
    "explain": "For example 6×1 and 4×3 both have perimeter 14 but different shapes."
   },
   {
    "type": "mc",
    "q": "What is the formula for the perimeter of the rectangle?",
    "options": [
     "b × h",
     "(b + h) × 2",
     "l × 4"
    ],
    "answer": 1,
    "explain": "Two bases plus two heights."
   },
   {
    "type": "num",
    "q": "A regular octagon has a side of 4 cm. What is the perimeter?",
    "answer": 32,
    "unit": "cm",
    "explain": "4 × 8 = 32 cm."
   },
   {
    "type": "num",
    "q": "A rectangle has a perimeter of 50 m and a height of 10 m. How long is the base?",
    "answer": 15,
    "unit": "m",
    "explain": "50 ÷ 2 = 25; 25 − 10 = 15 m."
   },
   {
    "type": "text",
    "q": "From which ancient language does the word \"perimeter\" come?",
    "answer": [
     "Greek",
     "from Greek",
     "the Greek"
    ],
    "explain": "From the Greek perí (around) and métron (measure)."
   },
   {
    "type": "order",
    "q": "Put in order the steps to solve: \"A square has a side of 2 m. How many cm of ribbon are needed to go around it?\"",
    "items": [
     "I convert the side: 2 m = 200 cm",
     "I apply the formula: P = s × 4",
     "I calculate 200 × 4 = 800",
     "I answer: 800 cm of ribbon are needed"
    ],
    "explain": "First I make the units the same, then I apply the formula, calculate and answer."
   },
   {
    "type": "num",
    "q": "A rectangle has a base of 1 m and a height of 30 cm. What is the perimeter in cm?",
    "answer": 260,
    "unit": "cm",
    "explain": "1 m = 100 cm; (100 + 30) × 2 = 260 cm."
   }
  ],
  "gen": [
   [
    "perimRect",
    3
   ],
   [
    "lengthConv",
    1
   ]
  ]
 }
});
