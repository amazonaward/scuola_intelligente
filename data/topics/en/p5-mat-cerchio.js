TOPIC('en', {
 "id": "p5-mat-cerchio",
 "title": "The circle",
 "intro": "Wheels, pizzas, clocks, coins: the <b>circle</b> is everywhere! Let's learn the difference between a <b>circle</b> and a <b>circumference</b>, what <b>radius</b> and <b>diameter</b> are and discover the most famous number in mathematics: <b>π (pi)</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Circumference and circle: they are not the same thing!",
   "html": "<p>Take a compass, put the point on a sheet of paper and make a complete turn with the pencil.</p>\n<ul>\n<li>The <b>closed curved line</b> you drew is the <b>circumference</b>: all its points are at the <b>same distance</b> from the point where you put the needle.</li>\n<li>That point is called the <b>centre</b>.</li>\n<li>The <b>surface</b> inside the circumference (which you can colour in) is the <b>circle</b>.</li>\n</ul>\n<p>In short: the circumference is the <b>outline</b> (like the edge of the pizza), the circle is <b>the whole pizza</b>. The circumference has a <b>length</b>; the circle has an <b>area</b>.</p>"
  },
  {
   "type": "svg",
   "title": "The parts of the circle",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<circle cx=\"200\" cy=\"160\" r=\"130\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"6\"/>\n<circle cx=\"200\" cy=\"160\" r=\"6\" fill=\"#111827\"/>\n<line x1=\"200\" y1=\"160\" x2=\"292\" y2=\"68\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"70\" y1=\"160\" x2=\"330\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<line x1=\"110\" y1=\"254\" x2=\"310\" y2=\"240\" stroke=\"#9333ea\" stroke-width=\"4\"/>\n<path d=\"M90 90 A130 130 0 0 1 150 40\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"9\"/>\n<text x=\"188\" y=\"185\" font-size=\"16\" fill=\"#111827\">centre</text>\n<text x=\"252\" y=\"108\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">r</text>\n<text x=\"128\" y=\"152\" font-size=\"18\" fill=\"#16a34a\" font-weight=\"bold\">d</text>\n<text x=\"360\" y=\"60\" font-size=\"20\" fill=\"#dc2626\">— radius (r)</text>\n<text x=\"360\" y=\"95\" font-size=\"20\" fill=\"#16a34a\">— diameter (d = 2 × r)</text>\n<text x=\"360\" y=\"130\" font-size=\"20\" fill=\"#1d4ed8\">— circumference (the edge)</text>\n<text x=\"360\" y=\"165\" font-size=\"20\" fill=\"#3b82f6\">▇ circle (the surface)</text>\n<text x=\"360\" y=\"200\" font-size=\"20\" fill=\"#f97316\">— arc (a piece of the edge)</text>\n<text x=\"360\" y=\"235\" font-size=\"20\" fill=\"#9333ea\">— chord (joins 2 points)</text>\n</svg>",
   "caption": "The diameter is the longest chord: it passes through the centre and is two radii long."
  },
  {
   "type": "text",
   "title": "Radius, diameter, chord and arc",
   "html": "<ul>\n<li>The <b>radius</b> (r) is the segment that goes from the <b>centre</b> to a point on the circumference. All the radii of a circle are <b>equal</b>.</li>\n<li>The <b>diameter</b> (d) is the segment that joins two points of the circumference <b>passing through the centre</b>. It is <b>twice</b> as long as the radius:\n<br><b>d = r × 2</b> and <b>r = d ÷ 2</b>.</li>\n<li>The <b>chord</b> is a segment that joins any two points of the circumference. The diameter is the longest chord.</li>\n<li>The <b>arc</b> is a piece of circumference.</li>\n<li>The <b>sector</b> is a \"slice\" of the circle, bounded by two radii and an arc (just like a slice of pizza!).</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: the parts of the circle",
   "questions": [
    {
     "type": "mc",
     "q": "The line that forms the outline of the circle is called the…",
     "options": [
      "diameter",
      "circumference",
      "radius"
     ],
     "answer": 1,
     "explain": "The circumference is the closed curved line; the circle is the surface inside."
    },
    {
     "type": "num",
     "q": "A circle has a radius of 6 cm. How long is the diameter?",
     "answer": 12,
     "unit": "cm",
     "explain": "d = r × 2 = 6 × 2 = 12 cm."
    },
    {
     "type": "num",
     "q": "A plate has a diameter of 26 cm. How long is the radius?",
     "answer": 13,
     "unit": "cm",
     "explain": "r = d ÷ 2 = 26 ÷ 2 = 13 cm."
    },
    {
     "type": "tf",
     "q": "In a circle all the radii have the same length.",
     "answer": true,
     "explain": "Yes: it is exactly the definition of the circumference (points at the same distance from the centre)."
    }
   ]
  },
  {
   "type": "text",
   "title": "The magic number π (pi)",
   "html": "<p>Do an experiment: take a jar, wrap a piece of string around its edge and measure it. Then measure the diameter and do the division <b>circumference ÷ diameter</b>.</p>\n<p>With any round object (coin, plate, bike wheel) you will <b>always get about 3.14</b>!</p>\n<p>This number is called <b>π</b> (read \"pi\", from the Greek letter <i>pi</i>). Its digits after the decimal point never end and never repeat: π = 3.14159265358979… For calculations at school we use <b>π ≈ 3.14</b>.</p>\n<p>So the circumference is <b>a bit more than 3 times</b> the diameter.</p>"
  },
  {
   "type": "remember",
   "title": "The formulas of the circumference",
   "html": "<ul>\n<li><b>C = d × 3.14</b> (diameter times pi)</li>\n<li><b>C = r × 2 × 3.14</b> (radius times two times pi)</li>\n<li>Inverse formula: <b>d = C ÷ 3.14</b> and then <b>r = d ÷ 2</b></li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Unrolling the wheel",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fffbeb\"/>\n<circle cx=\"80\" cy=\"120\" r=\"50\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"6\"/>\n<line x1=\"30\" y1=\"120\" x2=\"130\" y2=\"120\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<text x=\"80\" y=\"110\" font-size=\"16\" fill=\"#16a34a\" text-anchor=\"middle\">d</text>\n<line x1=\"30\" y1=\"200\" x2=\"344\" y2=\"200\" stroke=\"#b45309\" stroke-width=\"8\"/>\n<g stroke=\"#16a34a\" stroke-width=\"5\">\n<line x1=\"30\" y1=\"225\" x2=\"130\" y2=\"225\"/><line x1=\"134\" y1=\"225\" x2=\"234\" y2=\"225\"/><line x1=\"238\" y1=\"225\" x2=\"338\" y2=\"225\"/>\n</g>\n<line x1=\"338\" y1=\"225\" x2=\"344\" y2=\"225\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<text x=\"80\" y=\"250\" font-size=\"16\" fill=\"#16a34a\" text-anchor=\"middle\">1 d</text>\n<text x=\"184\" y=\"250\" font-size=\"16\" fill=\"#16a34a\" text-anchor=\"middle\">2 d</text>\n<text x=\"288\" y=\"250\" font-size=\"16\" fill=\"#16a34a\" text-anchor=\"middle\">3 d</text>\n<text x=\"370\" y=\"232\" font-size=\"16\" fill=\"#dc2626\">+ 0.14 d</text>\n<path d=\"M80 172 Q80 195 40 198\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<text x=\"360\" y=\"120\" font-size=\"22\" fill=\"#78350f\">The wheel makes one turn:</text>\n<text x=\"360\" y=\"150\" font-size=\"22\" fill=\"#78350f\">the unrolled edge is</text>\n<text x=\"360\" y=\"180\" font-size=\"22\" fill=\"#b45309\" font-weight=\"bold\">≈ 3.14 diameters</text>\n</svg>",
   "caption": "If you roll a wheel for one complete turn, it covers a road about 3.14 times as long as its diameter."
  },
  {
   "type": "example",
   "title": "Practical example: the bicycle wheel",
   "html": "<p>The wheel of Anna's bike has a diameter of <b>60 cm</b>. How far does the bike go with each turn of the wheel?</p>\n<p>C = d × 3.14 = 60 × 3.14 = <b>188.4 cm</b>, that is almost <b>1.9 metres</b>.</p>\n<p>After <b>100 turns</b> of the wheel Anna has travelled 188.4 × 100 = 18,840 cm = <b>188.4 metres</b>. That is how the bike's odometer works: it counts the turns of the wheel!</p>"
  },
  {
   "type": "example",
   "title": "Practical example: the ribbon for the cake",
   "html": "<p>Mum wants to put a ribbon around a round cake with a <b>radius of 12 cm</b>. How much ribbon does she need?</p>\n<ol>\n<li>Diameter: 12 × 2 = 24 cm</li>\n<li>Circumference: 24 × 3.14 = <b>75.36 cm</b></li>\n</ol>\n<p>It is better for her to buy <b>at least 80 cm</b> of ribbon, so there is a little piece left over to make the bow 🎀.</p>"
  },
  {
   "type": "text",
   "title": "For the curious: the area of the circle",
   "html": "<p>The area of the circle is also calculated with π:</p>\n<p><b>A = r × r × 3.14</b> (radius times radius times pi)</p>\n<p>Example: a pizza with a radius of 15 cm has an area of 15 × 15 × 3.14 = 225 × 3.14 = <b>706.5 cm²</b>.</p>\n<p>Why? Cut the circle into many thin slices and place them in a zig-zag, one pointing up and one pointing down: you get almost a <b>rectangle</b> with base half the circumference (r × 3.14) and height r. Its area is r × 3.14 × r!</p>"
  },
  {
   "type": "3d",
   "title": "The circle in solids",
   "scene": "solid",
   "options": {
    "shape": "cylinder",
    "r": 1,
    "h": 1.6,
    "color": "#38bdf8",
    "labels": true,
    "shapes": [
     "cylinder",
     "cone",
     "sphere"
    ]
   },
   "caption": "The cylinder has two circular bases; the cone has one. If you cut a sphere with a plane you always get a circle!"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Pi Day",
   "html": "<p>On <b>14 March</b> people all over the world celebrate <b>Pi Day</b>, because in the United States the date is written <b>3/14</b>. Since 2020 UNESCO has proclaimed it the <b>International Day of Mathematics</b>.</p>\n<p>A coincidence: <b>Albert Einstein</b> was born on 14 March 1879!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Endless digits",
   "html": "<p>With supercomputers more than <b>100 trillion digits</b> of π have been calculated, but it never ends. To send probes into space NASA uses just <b>15</b> of them!</p>\n<p>Some people train to remember as many as possible: the recognised world record is over <b>70,000 digits</b> recited from memory.</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand the circle",
   "intro": "The circle is better understood by touching it, measuring it and discovering how other peoples studied it. Choose the way you prefer!",
   "tabs": [
    {
     "label": "🧵 String and jar",
     "html": "<p>Do the experiment that humankind did thousands of years ago:</p>\n<ol>\n<li>take 3 round objects (a jar, a roll of tape, a large coin);</li>\n<li>wrap a string around each one, mark it and measure with the ruler: it is the <b>circumference</b>;</li>\n<li>measure the <b>diameter</b> passing through the centre;</li>\n<li>divide circumference ÷ diameter.</li>\n</ol>\n<table><tr><th>Object</th><th>C</th><th>d</th><th>C ÷ d</th></tr>\n<tr><td>Jar</td><td>25.1 cm</td><td>8 cm</td><td>≈ 3.14</td></tr>\n<tr><td>Tape</td><td>31.4 cm</td><td>10 cm</td><td>≈ 3.14</td></tr></table>\n<p>Every time you get about <b>3.14</b>: you have discovered π by yourself!</p>"
    },
    {
     "label": "🍕 Zig-zag slices",
     "html": "<p>How do you find the area? Cut a pizza into many slices and put them in a row, one with the point up and one with the point down. An almost-<b>rectangle</b> forms:</p>\n<ul><li>the base is <b>half the circumference</b> = r × 3.14;</li><li>the height is the <b>radius</b> r.</li></ul>\n<p>Area of the rectangle = base × height = <b>r × 3.14 × r</b>. The more slices you make, the more perfect the rectangle is!</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fff7ed\"/>\n<g stroke=\"#9a3412\" stroke-width=\"2\">\n<path d=\"M40 180 L65 80 L90 180 Z\" fill=\"#fbbf24\"/><path d=\"M65 80 L90 180 L115 80 Z\" fill=\"#f97316\"/>\n<path d=\"M90 180 L115 80 L140 180 Z\" fill=\"#fbbf24\"/><path d=\"M115 80 L140 180 L165 80 Z\" fill=\"#f97316\"/>\n<path d=\"M140 180 L165 80 L190 180 Z\" fill=\"#fbbf24\"/><path d=\"M165 80 L190 180 L215 80 Z\" fill=\"#f97316\"/>\n<path d=\"M190 180 L215 80 L240 180 Z\" fill=\"#fbbf24\"/><path d=\"M215 80 L240 180 L265 80 Z\" fill=\"#f97316\"/>\n<path d=\"M240 180 L265 80 L290 180 Z\" fill=\"#fbbf24\"/><path d=\"M265 80 L290 180 L315 80 Z\" fill=\"#f97316\"/>\n<path d=\"M290 180 L315 80 L340 180 Z\" fill=\"#fbbf24\"/><path d=\"M315 80 L340 180 L365 80 Z\" fill=\"#f97316\"/>\n</g>\n<line x1=\"40\" y1=\"205\" x2=\"340\" y2=\"205\" stroke=\"#1d4ed8\" stroke-width=\"4\"/>\n<text x=\"190\" y=\"230\" font-size=\"18\" fill=\"#1d4ed8\" text-anchor=\"middle\">half circumference = r × 3.14</text>\n<line x1=\"380\" y1=\"80\" x2=\"380\" y2=\"180\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<text x=\"392\" y=\"136\" font-size=\"20\" fill=\"#dc2626\">r</text>\n<text x=\"430\" y=\"110\" font-size=\"20\" fill=\"#78350f\">≈ rectangle</text>\n<text x=\"430\" y=\"145\" font-size=\"20\" fill=\"#78350f\" font-weight=\"bold\">A = r × r × 3.14</text>\n</svg>"
    },
    {
     "label": "🏛️ Archimedes and the polygons",
     "html": "<p>The great Sicilian mathematician <b>Archimedes of Syracuse</b> (about 287–212 BC) had no calculators. How did he calculate π?</p>\n<p>He drew a <b>hexagon</b> inside the circle and one outside. The perimeter of the circle had to lie <b>between the two</b>. Then he doubled the sides: 12, 24, 48, up to <b>96 sides</b>! The more sides the polygon has, the more it looks like the circle.</p>\n<p>He found that π lies between <b>3 10/71</b> and <b>3 1/7</b>, that is between 3.1408 and 3.1428. An extraordinary result for 2200 years ago!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f5f3ff\"/>\n<circle cx=\"150\" cy=\"130\" r=\"100\" fill=\"#ddd6fe\" stroke=\"#6d28d9\" stroke-width=\"4\"/>\n<polygon points=\"250,130 200,216.6 100,216.6 50,130 100,43.4 200,43.4\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<polygon points=\"265.5,130 207.7,230 92.3,230 34.5,130 92.3,30 207.7,30\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"4\"/>\n<text x=\"320\" y=\"80\" font-size=\"20\" fill=\"#dc2626\">inner hexagon: perimeter = 6 r</text>\n<text x=\"320\" y=\"115\" font-size=\"20\" fill=\"#16a34a\">outer hexagon: perimeter ≈ 6.93 r</text>\n<text x=\"320\" y=\"150\" font-size=\"20\" fill=\"#6d28d9\">circumference: in between!</text>\n<text x=\"320\" y=\"200\" font-size=\"18\" fill=\"#1f2937\">With 96 sides: π ≈ 3.14</text>\n</svg>"
    },
    {
     "label": "🌍 π in the ancient world",
     "html": "<p>Many peoples looked for the number of the circle:</p>\n<ul>\n<li>🇪🇬 the <b>Egyptians</b> (Rhind papyrus, about 1650 BC) used a value of about <b>3.16</b>;</li>\n<li>🏺 the <b>Babylonians</b> used <b>3</b> or <b>3 + 1/8 = 3.125</b>;</li>\n<li>🇬🇷 <b>Archimedes</b> enclosed it between 3.1408 and 3.1428;</li>\n<li>🇨🇳 the Chinese <b>Zu Chongzhi</b> (5th century AD) found the fraction <b>355/113 = 3.1415929…</b>, correct to 6 decimal places: nobody did better for almost 1000 years!</li>\n<li>🇬🇧 The symbol <b>π</b> was first used by the Welshman William Jones in 1706, and made famous by the Swiss Leonhard Euler.</li>\n</ul>"
    },
    {
     "label": "🧭 The compass and the rope",
     "html": "<p>Don't have a compass? Do as gardeners do: drive a stake into the ground, tie a rope and at the other end a stick. Keep the rope taut and walk all the way round: you draw a <b>perfect circumference</b>!</p>\n<ul><li>The stake is the <b>centre</b>.</li><li>The taut rope is the <b>radius</b>.</li><li>The mark on the ground is the <b>circumference</b>.</li></ul>\n<p>This is how round flower beds and the centre circle on football pitches are marked out (radius 9.15 m).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of the circle: touch a node and discover the why",
   "nodes": [
    {
     "id": "centro",
     "label": "Centre",
     "x": 50,
     "y": 6,
     "color": "#111827",
     "html": "The fixed point from which all the radii start.",
     "why": "Without a centre there is no circle: it is the point where you put the compass needle. <b>Euclid</b>, in his <i>Elements</i> (about 300 BC), defines the circle starting from the centre."
    },
    {
     "id": "circonf",
     "label": "Circumference",
     "x": 25,
     "y": 30,
     "color": "#1d4ed8",
     "html": "The closed curved line made of all the points at the same distance from the centre.",
     "why": "It is Euclid's definition. The name comes from the Latin <i>circum ferre</i>, \"to carry around\": it is the line that goes all the way round the centre."
    },
    {
     "id": "cerchio",
     "label": "Circle",
     "x": 75,
     "y": 30,
     "color": "#3b82f6",
     "html": "The part of the plane enclosed by the circumference.",
     "why": "From the Latin <i>circulus</i>, \"little ring\". It is one of the first shapes humans used: the <b>wheel</b> was born in Mesopotamia about 5500 years ago."
    },
    {
     "id": "raggio",
     "label": "Radius",
     "x": 15,
     "y": 55,
     "color": "#dc2626",
     "html": "A segment from the centre to the circumference.",
     "why": "All the radii are equal because the circumference is made exactly of the points at that distance from the centre. The name recalls the spokes of the wheel and the rays of the Sun."
    },
    {
     "id": "diametro",
     "label": "Diameter",
     "x": 45,
     "y": 55,
     "color": "#16a34a",
     "html": "A chord that passes through the centre: d = 2 × r.",
     "why": "From the Greek <i>diá</i> (through) + <i>métron</i> (measure): \"measure that goes through\". It is made of two radii placed in a line, one on each side of the centre."
    },
    {
     "id": "pi",
     "label": "π ≈ 3.14",
     "x": 75,
     "y": 55,
     "color": "#a855f7",
     "html": "The ratio between circumference and diameter, the same for all circles.",
     "why": "All circles are \"enlargements\" of one another, so the ratio C ÷ d does not change. Archimedes calculated it with 96-sided polygons; in 1761 the Swiss <b>Lambert</b> proved that its digits never end and never repeat."
    },
    {
     "id": "formulaC",
     "label": "C = d × 3.14",
     "x": 30,
     "y": 82,
     "color": "#f59e0b",
     "html": "Formula for the length of the circumference.",
     "why": "It comes directly from π: if C ÷ d = π, then C = d × π. Since d = 2 × r, you can also write C = 2 × r × π."
    },
    {
     "id": "area",
     "label": "A = r × r × 3.14",
     "x": 72,
     "y": 82,
     "color": "#14b8a6",
     "html": "Formula for the area of the circle.",
     "why": "Archimedes proved that the circle has the same area as a triangle with the circumference as base and the radius as height. It is the same trick as the zig-zag slices that form a rectangle."
    }
   ],
   "edges": [
    [
     "centro",
     "circonf",
     "points at the same distance"
    ],
    [
     "circonf",
     "cerchio",
     "encloses the"
    ],
    [
     "centro",
     "raggio",
     "from here starts the"
    ],
    [
     "raggio",
     "diametro",
     "× 2"
    ],
    [
     "diametro",
     "pi",
     "C ÷ d ="
    ],
    [
     "pi",
     "formulaC",
     "gives the"
    ],
    [
     "pi",
     "area",
     "gives the"
    ],
    [
     "raggio",
     "area",
     "is used in the"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: calculating the circumference",
   "questions": [
    {
     "type": "num",
     "q": "A circle has a diameter of 10 cm. How long is the circumference? (π = 3.14)",
     "answer": 31.4,
     "tol": 0.01,
     "unit": "cm",
     "explain": "C = 10 × 3.14 = 31.4 cm."
    },
    {
     "type": "num",
     "q": "A circle has a radius of 5 cm. How long is the circumference? (π = 3.14)",
     "answer": 31.4,
     "tol": 0.01,
     "unit": "cm",
     "explain": "d = 10 cm; C = 10 × 3.14 = 31.4 cm."
    },
    {
     "type": "mc",
     "q": "About how many times is the circumference longer than the diameter?",
     "options": [
      "2 times",
      "a bit more than 3 times",
      "10 times"
     ],
     "answer": 1,
     "explain": "C ÷ d = π ≈ 3.14."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Circumference",
   "d": "A closed curved line whose points are all at the same distance from the centre."
  },
  {
   "t": "Circle",
   "d": "The part of the plane enclosed by the circumference."
  },
  {
   "t": "Centre",
   "d": "The point equidistant from all the points of the circumference."
  },
  {
   "t": "Radius",
   "d": "A segment that joins the centre to a point of the circumference."
  },
  {
   "t": "Diameter",
   "d": "A chord that passes through the centre; it is twice as long as the radius."
  },
  {
   "t": "Chord",
   "d": "A segment that joins two points of the circumference."
  },
  {
   "t": "Arc",
   "d": "The part of the circumference between two points."
  },
  {
   "t": "Sector",
   "d": "The part of a circle bounded by two radii and an arc (a “slice”)."
  },
  {
   "t": "π (pi)",
   "d": "The fixed ratio between circumference and diameter: about 3.14."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "What is the difference between a circle and a circumference?",
    "options": [
     "They are the same thing",
     "The circumference is the edge, the circle is the surface",
     "The circle is the edge, the circumference is the surface"
    ],
    "answer": 1,
    "explain": "The circumference is the line; the circle is the part of the plane it encloses."
   },
   {
    "type": "num",
    "q": "The radius is 9 cm. How long is the diameter?",
    "answer": 18,
    "unit": "cm",
    "explain": "9 × 2 = 18 cm."
   },
   {
    "type": "num",
    "q": "The diameter is 50 cm. How long is the radius?",
    "answer": 25,
    "unit": "cm",
    "explain": "50 ÷ 2 = 25 cm."
   },
   {
    "type": "tf",
    "q": "The diameter is the longest chord of a circle.",
    "answer": true,
    "explain": "It passes through the centre: no chord can be longer."
   },
   {
    "type": "text",
    "q": "What is the number obtained by dividing the circumference by the diameter called?",
    "answer": [
     "pi",
     "π",
     "the number pi",
     "pi number",
     "pi (π)"
    ],
    "explain": "It is π (pi), about 3.14."
   },
   {
    "type": "num",
    "q": "A coin has a diameter of 2 cm. How long is its circumference? (π = 3.14)",
    "answer": 6.28,
    "tol": 0.01,
    "unit": "cm",
    "explain": "2 × 3.14 = 6.28 cm."
   },
   {
    "type": "num",
    "q": "A round pool has a radius of 3 m. How long is its edge? (π = 3.14)",
    "answer": 18.84,
    "tol": 0.01,
    "unit": "m",
    "explain": "d = 6 m; C = 6 × 3.14 = 18.84 m."
   },
   {
    "type": "mc",
    "q": "A slice of pizza shaped like a wedge is…",
    "options": [
     "a sector",
     "a chord",
     "a diameter"
    ],
    "answer": 0,
    "explain": "It is bounded by two radii and an arc: a sector."
   },
   {
    "type": "num",
    "q": "A circumference measures 31.4 cm. How long is the diameter? (π = 3.14)",
    "answer": 10,
    "tol": 0.01,
    "unit": "cm",
    "explain": "d = C ÷ 3.14 = 31.4 ÷ 3.14 = 10 cm."
   },
   {
    "type": "order",
    "q": "Put in order the steps for finding the circumference starting from the radius.",
    "items": [
     "I read the radius",
     "I multiply the radius by 2 and find the diameter",
     "I multiply the diameter by 3.14",
     "I write the result with the unit of measure"
    ],
    "explain": "r → d = r × 2 → C = d × 3.14."
   },
   {
    "type": "mc",
    "q": "Who calculated π using polygons with 96 sides?",
    "options": [
     "Pythagoras",
     "Archimedes",
     "Galileo"
    ],
    "answer": 1,
    "explain": "Archimedes of Syracuse, in the 3rd century BC."
   }
  ],
  "gen": [
   [
    "circle",
    3
   ]
  ]
 }
});
