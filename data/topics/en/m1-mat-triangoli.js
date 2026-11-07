TOPIC('en', {
 "id": "m1-mat-triangoli",
 "title": "Triangles",
 "intro": "The <b>triangle</b> is the simplest polygon: just 3 sides and 3 angles. Yet it is the \"strongest\" shape in geometry: it is rigid, it does not change shape, and that is why you find it in bridges, cranes and roofs. Let's find out how triangles are classified, why their angles always add up to 180° and what their <b>special points</b> are.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "1. What is a triangle?",
   "html": "<p>A <b>triangle</b> is a polygon with <b>3 sides</b>, <b>3 vertices</b> and <b>3 interior angles</b>. We name it with the letters of its vertices: triangle <b>ABC</b>.</p>\n<ul>\n<li>The sides opposite the vertices A, B, C are often written with small letters <b>a, b, c</b>.</li>\n<li>The interior angles are written <b>α, β, γ</b> (or Â, B̂, Ĉ).</li>\n<li>The <b>perimeter</b> is the sum of the sides: P = a + b + c.</li>\n</ul>\n<p><b>The triangle inequality.</b> Not every set of three segments makes a triangle! Each side must be <b>shorter than the sum</b> of the other two (and longer than their difference).</p>\n<p>With 3, 4 and 5 cm you can build a triangle (5 &lt; 3 + 4). With 2, 3 and 7 cm you can't: 7 is longer than 2 + 3 = 5, so the two short sides can't \"close up\".</p>"
  },
  {
   "type": "text",
   "title": "2. The interior angles add up to 180°",
   "html": "<p>In <b>every</b> triangle, big or small, the sum of the interior angles is always <b>180°</b>, that is, a straight angle:</p>\n<p style=\"text-align:center\"><b>α + β + γ = 180°</b></p>\n<p><b>Why?</b> Through vertex C draw the line <b>parallel</b> to side AB. Around C a straight angle is formed, split into three parts: the middle one is γ, and the two outer ones are congruent to α and β (they are <i>alternate interior angles</i> between parallel lines). So α + β + γ = one straight angle = 180°. This is theorem 32 of the first book of Euclid's <b>Elements</b>.</p>\n<p><b>Useful consequences:</b></p>\n<ul>\n<li>if you know two angles, you can find the third: γ = 180° − α − β;</li>\n<li>a triangle can have at most <b>one</b> right or obtuse angle;</li>\n<li>the <b>exterior angle</b> (formed by one side and the extension of another) is equal to the <b>sum of the two non-adjacent interior angles</b>.</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "The proof with the parallel line",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/>\n<line x1=\"40\" y1=\"60\" x2=\"560\" y2=\"60\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<polygon points=\"110,250 500,250 330,60\" fill=\"#fde68a\" stroke=\"#111827\" stroke-width=\"4\"/>\n<path d=\"M160 250 A50 50 0 0 0 147 220\" stroke=\"#dc2626\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M450 250 A50 50 0 0 1 468 214\" stroke=\"#2563eb\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M310 82 A30 30 0 0 0 350 83\" stroke=\"#9333ea\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M290 60 A40 40 0 0 0 300 87\" stroke=\"#dc2626\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M370 60 A40 40 0 0 1 356 89\" stroke=\"#2563eb\" stroke-width=\"5\" fill=\"none\"/>\n<text x=\"175\" y=\"238\" font-size=\"22\" fill=\"#dc2626\" font-weight=\"bold\">α</text>\n<text x=\"420\" y=\"238\" font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n<text x=\"322\" y=\"115\" font-size=\"22\" fill=\"#9333ea\" font-weight=\"bold\">γ</text>\n<text x=\"262\" y=\"88\" font-size=\"22\" fill=\"#dc2626\" font-weight=\"bold\">α</text>\n<text x=\"380\" y=\"88\" font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n<text x=\"95\" y=\"275\" font-size=\"18\" font-weight=\"bold\">A</text>\n<text x=\"505\" y=\"275\" font-size=\"18\" font-weight=\"bold\">B</text>\n<text x=\"322\" y=\"48\" font-size=\"18\" font-weight=\"bold\">C</text>\n<text x=\"60\" y=\"40\" font-size=\"16\" fill=\"#16a34a\">line parallel to AB through C</text>\n<text x=\"300\" y=\"295\" font-size=\"18\" text-anchor=\"middle\" fill=\"#111827\">α + γ + β = straight angle = 180°</text>\n</svg>",
   "caption": "At the top, around C, the three angles α, γ, β make a straight angle."
  },
  {
   "type": "example",
   "title": "Worked examples: finding the missing angle",
   "html": "<p><b>1.</b> A triangle has α = 48° and β = 67°. Then γ = 180° − 48° − 67° = <b>65°</b>.</p>\n<p><b>2.</b> In an <b>isosceles</b> triangle the apex angle measures 40°. The base angles are equal: (180° − 40°) : 2 = <b>70°</b> each.</p>\n<p><b>3.</b> In a <b>right</b> triangle one acute angle is 35°. The other is 90° − 35° = <b>55°</b>: the two acute angles of a right triangle are always <b>complementary</b>.</p>\n<p><b>4.</b> Exterior angle: if two interior angles are 50° and 60°, the exterior angle at the third vertex is 50° + 60° = <b>110°</b>.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: sides and angles",
   "questions": [
    {
     "type": "num",
     "q": "Two angles of a triangle measure 72° and 38°. How much is the third one?",
     "answer": 70,
     "unit": "°",
     "explain": "180° − 72° − 38° = 70°."
    },
    {
     "type": "tf",
     "q": "You can build a triangle with segments 4 cm, 5 cm and 10 cm long.",
     "answer": false,
     "explain": "10 is greater than 4 + 5 = 9: the triangle inequality is not satisfied."
    },
    {
     "type": "mc",
     "q": "At most how many obtuse angles can a triangle have?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 1,
     "explain": "Two obtuse angles would already add up to more than 180°."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Classifying triangles",
   "html": "<p><b>By sides</b>:</p>\n<ul>\n<li><b>equilateral</b>: 3 congruent sides, and also 3 congruent angles of <b>60°</b>;</li>\n<li><b>isosceles</b>: 2 congruent sides (the <b>legs</b>); the third is the <b>base</b>. The base angles are congruent;</li>\n<li><b>scalene</b>: 3 different sides and 3 different angles.</li>\n</ul>\n<p><b>By angles</b>:</p>\n<ul>\n<li><b>acute</b>: 3 acute angles;</li>\n<li><b>right</b>: one right angle. The sides that form it are the <b>legs</b>, the opposite side is the <b>hypotenuse</b> (always the longest side);</li>\n<li><b>obtuse</b>: one obtuse angle.</li>\n</ul>\n<p>The two classifications combine: there is the <b>isosceles right triangle</b> (angles 90°, 45°, 45°: half of a square), the <b>obtuse scalene triangle</b>, and so on. But an equilateral triangle is always acute!</p>"
  },
  {
   "type": "svg",
   "title": "The family of triangles",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f0f9ff\"/>\n<text x=\"300\" y=\"24\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">By sides</text>\n<polygon points=\"40,140 160,140 100,36\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/>\n<text x=\"100\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">equilateral</text>\n<polygon points=\"240,140 360,140 300,40\" fill=\"#fde047\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<line x1=\"264\" y1=\"92\" x2=\"276\" y2=\"86\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<line x1=\"324\" y1=\"86\" x2=\"336\" y2=\"92\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">isosceles</text>\n<polygon points=\"420,140 580,140 460,50\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"3\"/>\n<text x=\"500\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">scalene</text>\n<text x=\"300\" y=\"194\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">By angles</text>\n<polygon points=\"40,295 170,295 120,215\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"105\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">acute</text>\n<polygon points=\"250,295 360,295 250,210\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"250\" y=\"279\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">right</text>\n<polygon points=\"420,295 580,295 450,250\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<text x=\"500\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">obtuse</text>\n</svg>",
   "caption": "The little ticks on the sides show congruent sides; the little square shows the right angle."
  },
  {
   "type": "widget",
   "title": "What kind of triangle is it?",
   "widget": "classify",
   "options": {
    "groups": [
     "Acute",
     "Right",
     "Obtuse"
    ],
    "items": [
     [
      "60°, 60°, 60°",
      0
     ],
     [
      "90°, 45°, 45°",
      1
     ],
     [
      "120°, 30°, 30°",
      2
     ],
     [
      "70°, 60°, 50°",
      0
     ],
     [
      "90°, 30°, 60°",
      1
     ],
     [
      "100°, 50°, 30°",
      2
     ],
     [
      "80°, 80°, 20°",
      0
     ],
     [
      "sides 3, 4, 5 cm",
      1
     ],
     [
      "one angle of 95°",
      2
     ]
    ]
   },
   "caption": "The triangle with sides 3, 4, 5 is right-angled because 3² + 4² = 5² (you'll see this with Pythagoras)."
  },
  {
   "type": "text",
   "title": "4. Altitudes, medians, bisectors, perpendicular bisectors",
   "html": "<p>In every triangle you can draw 4 kinds of special segments or lines, <b>three of each kind</b>. The three lines of each kind always meet at <b>a single point</b>: these are the <b>special points</b> (or centres) of the triangle.</p>\n<table>\n<tr><th>Line</th><th>What it is</th><th>Special point</th></tr>\n<tr><td><b>Altitude</b></td><td>segment perpendicular from a vertex to the opposite side (or to its extension)</td><td><b>Orthocenter</b></td></tr>\n<tr><td><b>Median</b></td><td>segment from a vertex to the <b>midpoint</b> of the opposite side</td><td><b>Centroid</b>: divides each median into two parts, one double the other (2 : 1)</td></tr>\n<tr><td><b>Angle bisector</b></td><td>ray that divides an angle into two congruent angles</td><td><b>Incenter</b>: centre of the <b>inscribed</b> circle</td></tr>\n<tr><td><b>Perpendicular bisector</b></td><td>line perpendicular to a side at its midpoint</td><td><b>Circumcenter</b>: centre of the <b>circumscribed</b> circle</td></tr>\n</table>\n<p><b>Where do they fall?</b> The centroid and the incenter are always <b>inside</b>. The orthocenter and circumcenter are inside an acute triangle; in a right triangle the orthocenter is at the vertex of the right angle and the circumcenter is at the midpoint of the hypotenuse; in an obtuse triangle they are <b>outside</b>.</p>\n<p>In an <b>equilateral</b> triangle the four special points <b>coincide</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Recognise the lines of the triangle",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<polygon points=\"60,280 540,280 220,40\" fill=\"#e0f2fe\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"280\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/>\n<rect x=\"220\" y=\"264\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"540\" y1=\"280\" x2=\"140\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<circle cx=\"140\" cy=\"160\" r=\"6\" fill=\"#16a34a\"/>\n<circle cx=\"300\" cy=\"280\" r=\"6\" fill=\"#9333ea\"/>\n<text x=\"40\" y=\"300\" font-size=\"18\" font-weight=\"bold\">A</text>\n<text x=\"548\" y=\"300\" font-size=\"18\" font-weight=\"bold\">B</text>\n<text x=\"212\" y=\"30\" font-size=\"18\" font-weight=\"bold\">C</text>\n</svg>",
    "spots": [
     {
      "x": 220,
      "y": 170,
      "label": "Altitude"
     },
     {
      "x": 340,
      "y": 220,
      "label": "Median"
     },
     {
      "x": 140,
      "y": 160,
      "label": "Midpoint of AC"
     },
     {
      "x": 220,
      "y": 272,
      "label": "Right angle"
     },
     {
      "x": 300,
      "y": 280,
      "label": "Base AB"
     }
    ]
   },
   "caption": "The altitude forms a right angle with the base; the median reaches the midpoint of the opposite side."
  },
  {
   "type": "example",
   "title": "Worked example: the centroid and the perimeter",
   "html": "<p><b>Balancing on the centroid.</b> Cut out a cardboard triangle, draw two medians and find the point where they meet: the <b>centroid</b>. Rest it on the tip of a pencil: the triangle stays <b>balanced</b>! The centroid is in fact the \"centre of mass\" of the shape.</p>\n<p>If a median is 12 cm long, the centroid divides it into <b>8 cm</b> (on the vertex side) and <b>4 cm</b> (on the side of the triangle's edge).</p>\n<p><b>Perimeter.</b> An isosceles triangle has a base of 10 cm and legs of 13 cm: P = 10 + 13 + 13 = <b>36 cm</b>. An equilateral triangle with a perimeter of 27 cm has sides of 27 : 3 = <b>9 cm</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Triangles in space: the tetrahedron",
   "scene": "solid",
   "options": {
    "shape": "pyramid",
    "n": 3,
    "r": 1.2,
    "h": 1.6,
    "color": "#f97316",
    "labels": true,
    "shapes": [
     "pyramid",
     "prism"
    ]
   },
   "caption": "A pyramid with a triangular base has 4 faces, all triangles. The triangular prism has two triangular bases: you find it in camping tents and in the prisms that split light."
  },
  {
   "type": "curiosity",
   "title": "Did you know… the triangle doesn't change shape?",
   "html": "<p>Take 4 sticks joined at the corners with paper fasteners: the square squashes easily and becomes a rhombus. With 3 sticks, instead, the triangle <b>does not move</b>: three sides determine only one triangle (this is the third congruence criterion).</p>\n<p>That is why triangles are everywhere in <b>structures</b>: the <b>Eiffel Tower</b>, cranes, high-voltage pylons, iron bridges, roof trusses and even bicycle frames are made of triangles.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know… on Earth triangles \"cheat\"?",
   "html": "<p>The 180° rule holds on a <b>flat surface</b>. On a sphere it doesn't! Start from the North Pole, go down to the equator, walk a quarter of the way around the equator and return to the Pole: you have drawn a triangle with <b>three right angles</b>, that is 270°!</p>\n<p>The great mathematician <b>Carl Friedrich Gauss</b>, in the early 1800s, measured a huge triangle between three German mountains (Brocken, Hohehagen and Inselsberg) to check whether space was really \"flat\". He found 180°, within the measurement errors.</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand triangles",
   "intro": "If the proof with parallel lines doesn't convince you, try it with your hands, with your body or with technology.",
   "tabs": [
    {
     "label": "✂️ Tear off the angles",
     "html": "<p>The method most used in schools all over the world to <b>see</b> the 180°:</p>\n<ol>\n<li>draw any triangle on a sheet of paper and colour the three angles in different colours;</li>\n<li>cut it out and <b>tear off</b> the three angles;</li>\n<li>put them side by side with their vertices at the same point: they always form a <b>straight line</b>, that is a straight angle!</li>\n</ol>\n<p>Try it with different triangles: it always works.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fdf4ff\"/>\n<polygon points=\"30,180 230,180 150,40\" fill=\"#ffffff\" stroke=\"#111827\" stroke-width=\"3\"/>\n<path d=\"M30 180 L70 180 A40 40 0 0 0 64 160 Z\" fill=\"#ef4444\"/>\n<path d=\"M230 180 L190 180 A40 40 0 0 1 210 145 Z\" fill=\"#3b82f6\"/>\n<path d=\"M150 40 L132 72 A36 36 0 0 0 170 75 Z\" fill=\"#22c55e\"/>\n<text x=\"280\" y=\"120\" font-size=\"30\" fill=\"#111827\">→</text>\n<line x1=\"330\" y1=\"160\" x2=\"580\" y2=\"160\" stroke=\"#111827\" stroke-width=\"3\"/>\n<path d=\"M455 160 L525 160 A70 70 0 0 0 516 125 Z\" fill=\"#ef4444\"/>\n<path d=\"M455 160 L516 125 A70 70 0 0 0 420 99 Z\" fill=\"#22c55e\"/>\n<path d=\"M455 160 L420 99 A70 70 0 0 0 385 160 Z\" fill=\"#3b82f6\"/>\n<text x=\"455\" y=\"200\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\">the three angles = 180°</text>\n</svg>"
    },
    {
     "label": "🚶 Walk around the triangle",
     "html": "<p>Draw a big triangle in the yard with chalk. Start at a vertex, looking along one side, walk to the next vertex and <b>turn</b> to look along the new side. Do the same at the other vertices, until you are facing the starting direction again.</p>\n<p>You have made one <b>full turn</b>: 360°. The three \"turns\" are the <b>exterior angles</b>, so their sum is 360°. Each exterior angle + its interior angle = 180°: 3 × 180° − 360° = <b>180°</b> for the interior angles. This method is very popular in English-speaking countries and is the basis of \"turtle\" programming (Logo, Scratch).</p>"
    },
    {
     "label": "📐 The interactive right triangle",
     "html": "<p>Move the sliders for the legs: the triangle changes shape, but it always stays <b>right-angled</b>. Notice that the <b>hypotenuse</b> is always the longest side and that the two acute angles are complementary. The squares on the sides get you ready for the Pythagorean theorem that you will study in Grade 7 (second year of middle school).</p>",
     "widget": "pythagoras",
     "options": {
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🏗️ Analogy: the triangle as engineer",
     "html": "<p>Think of triangles as the <b>engineers</b> of geometry. A cardboard rectangle bends under a weight; if you add a <b>diagonal</b>, it becomes two triangles and stops bending.</p>\n<p>Surveyors also use triangles to <b>measure</b> distances that can't be reached (rivers, mountains): this is <b>triangulation</b>, which was used to draw the maps of the whole of Europe. And the GPS in your phone works out your position with a similar principle, trilateration.</p>"
    },
    {
     "label": "🇬🇷 Euclid's proof (the parallel line)",
     "html": "<p>Tearing off the angles lets us <b>see</b> that the sum is 180°, but the <b>Greek</b> mathematicians wanted to be <b>sure</b> that it holds for <b>all</b> triangles, even ones nobody has ever drawn. Here is the proof found in Euclid's <i>Elements</i> (book I, proposition 32):</p><ol><li>Take any triangle ABC with angles α, β, γ.</li><li>Through vertex <b>C</b> draw the line <b>parallel</b> to side AB.</li><li>To the left of C an angle <b>equal to α</b> is formed: they are <b>alternate interior angles</b> between two parallels cut by the line AC.</li><li>To the right of C an angle <b>equal to β</b> is formed, for the same reason with the line BC.</li><li>Now around C, on the parallel line, there are α, γ and β side by side: together they form a <b>straight angle</b>, that is <b>180°</b>.</li></ol><p>So α + β + γ = 180° <b>always</b>. Notice that we used the fact that through C there passes <b>only one</b> parallel to AB: this is the famous <b>fifth postulate</b>. On a sphere (like the Earth) that postulate doesn't hold, and in fact there the angles of a triangle add up to <b>more</b> than 180°!</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"100,250 500,250 260,70\" fill=\"#e0f2fe\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><line x1=\"30\" y1=\"70\" x2=\"570\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/><path d=\"M140,250 A40,40 0 0 0 126.6,220.1\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"7\"/><path d=\"M460,250 A40,40 0 0 1 468,226\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"7\"/><path d=\"M236.8,96.1 A35,35 0 0 0 288,91\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"7\"/><path d=\"M225,70 A35,35 0 0 0 236.8,96.1\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"7\"/><path d=\"M288,91 A35,35 0 0 0 295,70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"7\"/><text x=\"78\" y=\"275\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"508\" y=\"275\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"252\" y=\"58\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">C</text><text x=\"150\" y=\"240\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">α</text><text x=\"430\" y=\"240\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">β</text><text x=\"253\" y=\"125\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">γ</text><text x=\"180\" y=\"62\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">α</text><text x=\"315\" y=\"62\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">β</text><text x=\"400\" y=\"100\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">line parallel to AB</text><text x=\"300\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">α + γ + β = straight angle = 180°</text></svg>"
    },
    {
     "label": "𓂀 The \"seked\" of the ancient Egyptians",
     "html": "<p>In the <b>Rhind papyrus</b> (Egypt, about 1550 BC, copied by the scribe <b>Ahmes</b>) there are problems about pyramids. To say how <b>steep</b> a face is, the Egyptians used the <b>seked</b>: how many <b>palms</b> you move <b>horizontally</b> when you go up by <b>1 cubit</b> (1 cubit = 7 palms).</p><p>The seked describes a <b>right triangle</b>: the vertical leg is always 1 cubit, the horizontal leg is the seked. All pyramids with the same seked have faces with the <b>same slope</b>, whether they are big or small: their triangles are <b>similar</b>. The Great Pyramid of Khufu has a seked of 5 and a half palms (an angle of about 52°).</p><p><b>Problem 56 of the papyrus</b>: a pyramid has a base of <b>360</b> cubits and a height of <b>250</b> cubits. What is the seked?</p><ol><li>Take <b>half the base</b>: 360 : 2 = 180 cubits (this is the horizontal leg of the right triangle inside the pyramid).</li><li>Going up 250 cubits you move 180: going up 1 cubit you move 180 : 250 = 0.72 cubits.</li><li>Convert to palms: 0.72 × 7 = <b>5.04 palms</b>. Ahmes writes \"5 palms and 1/25\": that is exactly 5.04!</li></ol><p>Careful: <b>smaller seked = steeper pyramid</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polygon points=\"200,260 200,50 365,260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"200,260 200,50 35,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/><rect x=\"200\" y=\"240\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"190\" y=\"160\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">1 cubit</text><text x=\"190\" y=\"180\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">= 7 palms</text><text x=\"282\" y=\"284\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">seked = 5 and ½ palms</text><text x=\"390\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Pyramid of Khufu:</text><text x=\"390\" y=\"115\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">for every cubit of climb</text><text x=\"390\" y=\"137\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">you move 5½ palms</text><text x=\"390\" y=\"159\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">horizontally.</text><text x=\"390\" y=\"195\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">Angle ≈ 52°</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Triangle map: tap and find out why",
   "nodes": [
    {
     "id": "tri",
     "label": "Triangle",
     "x": 50,
     "y": 6,
     "color": "#f97316",
     "html": "A polygon with 3 sides, 3 vertices, 3 angles.",
     "why": "It is the polygon with the fewest possible sides: with 2 segments you can't close a shape. Every other polygon can be divided into triangles with its diagonals."
    },
    {
     "id": "disug",
     "label": "Triangle inequality",
     "x": 16,
     "y": 26,
     "color": "#ef4444",
     "html": "Each side is shorter than the sum of the other two.",
     "why": "The straight way is the shortest: going from A to B through C is always longer than going straight. Euclid proves it in proposition 20 of the first book."
    },
    {
     "id": "somma",
     "label": "Angle sum = 180°",
     "x": 50,
     "y": 30,
     "color": "#a855f7",
     "html": "α + β + γ = 180° in every triangle on a plane.",
     "why": "It comes from Euclid's fifth postulate (the one about parallels): by drawing the parallel to one side through the opposite vertex, the three angles fit together into a straight angle."
    },
    {
     "id": "rigido",
     "label": "Rigidity",
     "x": 84,
     "y": 26,
     "color": "#64748b",
     "html": "A triangle doesn't change shape if its sides are fixed.",
     "why": "Three sides determine only one triangle (the SSS congruence criterion). That is why engineers build trusses made of triangles."
    },
    {
     "id": "lati",
     "label": "Classify by sides",
     "x": 25,
     "y": 54,
     "color": "#eab308",
     "html": "Equilateral, isosceles, scalene.",
     "why": "If two sides are equal, the opposite angles are equal too (the isosceles triangle theorem, called in the Middle Ages the pons asinorum, the \"bridge of donkeys\", because it gave students trouble)."
    },
    {
     "id": "angoli",
     "label": "Classify by angles",
     "x": 75,
     "y": 54,
     "color": "#3b82f6",
     "html": "Acute, right, obtuse.",
     "why": "Since the sum is 180°, at most one angle can be right or obtuse: the other two must share what is left."
    },
    {
     "id": "punti",
     "label": "Special points",
     "x": 50,
     "y": 74,
     "color": "#16a34a",
     "html": "Orthocenter, centroid, incenter, circumcenter.",
     "why": "The three altitudes, medians, angle bisectors or perpendicular bisectors always meet at a single point: this can be proved, it is not a coincidence. The ancient Greeks already knew the centroid, incenter and circumcenter."
    },
    {
     "id": "eulero",
     "label": "Euler line",
     "x": 25,
     "y": 94,
     "color": "#14b8a6",
     "html": "The orthocenter, centroid and circumcenter always lie on the same line.",
     "why": "It was discovered by the Swiss mathematician Leonhard Euler in 1765. The centroid always lies at 1/3 of the distance from the circumcenter to the orthocenter."
    },
    {
     "id": "pitagora",
     "label": "Towards Pythagoras",
     "x": 75,
     "y": 94,
     "color": "#ec4899",
     "html": "In a right triangle: a² + b² = c².",
     "why": "You will study it in Grade 7 (second year of middle school). The Babylonians and the Chinese already knew it; tradition credits Pythagoras (6th century BC) with the first proof."
    }
   ],
   "edges": [
    [
     "tri",
     "disug",
     "exists if"
    ],
    [
     "tri",
     "somma",
     "property"
    ],
    [
     "tri",
     "rigido",
     "property"
    ],
    [
     "tri",
     "lati",
     "is classified"
    ],
    [
     "tri",
     "angoli",
     "is classified"
    ],
    [
     "somma",
     "angoli",
     "limits"
    ],
    [
     "tri",
     "punti",
     "has"
    ],
    [
     "punti",
     "eulero",
     "lie on the"
    ],
    [
     "angoli",
     "pitagora",
     "if right"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: classification and special points",
   "questions": [
    {
     "type": "mc",
     "q": "What is the meeting point of the medians called?",
     "options": [
      "Orthocenter",
      "Centroid",
      "Incenter",
      "Circumcenter"
     ],
     "answer": 1,
     "explain": "The medians meet at the centroid."
    },
    {
     "type": "mc",
     "q": "A triangle with angles 90°, 45°, 45° is…",
     "options": [
      "right scalene",
      "right isosceles",
      "equilateral",
      "obtuse"
     ],
     "answer": 1,
     "explain": "It has one right angle and two equal angles (and so two equal sides)."
    },
    {
     "type": "num",
     "q": "In an isosceles triangle the apex angle is 50°. How much does each base angle measure?",
     "answer": 65,
     "unit": "°",
     "explain": "(180° − 50°) : 2 = 65°."
    }
   ]
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>Each side is <b>shorter than the sum</b> of the other two.</li>\n<li>The sum of the interior angles is <b>180°</b>; an exterior angle = the sum of the two non-adjacent interior angles.</li>\n<li>Sides: <b>equilateral, isosceles, scalene</b>. Angles: <b>acute, right, obtuse</b>.</li>\n<li>Altitudes → <b>orthocenter</b>; medians → <b>centroid</b> (2:1); angle bisectors → <b>incenter</b>; perpendicular bisectors → <b>circumcenter</b>.</li>\n<li>The triangle is <b>rigid</b>: that is why it is used in construction.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Triangle",
   "d": "A polygon with three sides and three angles."
  },
  {
   "t": "Triangle inequality",
   "d": "Each side is shorter than the sum of the other two."
  },
  {
   "t": "Exterior angle",
   "d": "The angle between a side and the extension of the next side."
  },
  {
   "t": "Legs",
   "d": "The two sides that form the right angle in a right triangle."
  },
  {
   "t": "Hypotenuse",
   "d": "The side opposite the right angle; it is the longest."
  },
  {
   "t": "Altitude",
   "d": "A perpendicular segment drawn from a vertex to the opposite side."
  },
  {
   "t": "Median",
   "d": "A segment joining a vertex to the midpoint of the opposite side."
  },
  {
   "t": "Angle bisector",
   "d": "A ray that divides an angle into two congruent parts."
  },
  {
   "t": "Perpendicular bisector of a segment",
   "d": "A line perpendicular to the segment at its midpoint."
  },
  {
   "t": "Centroid",
   "d": "The meeting point of the medians; the balance point of the triangle."
  },
  {
   "t": "Orthocenter, incenter, circumcenter",
   "d": "The meeting points of the altitudes, angle bisectors and perpendicular bisectors."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Two angles of a triangle measure 55° and 85°. How much is the third one?",
    "answer": 40,
    "unit": "°",
    "explain": "180° − 55° − 85° = 40°."
   },
   {
    "type": "mc",
    "q": "With which set of segments can you build a triangle?",
    "options": [
     "2, 3, 6 cm",
     "3, 4, 8 cm",
     "5, 6, 9 cm",
     "1, 1, 3 cm"
    ],
    "answer": 2,
    "explain": "9 < 5 + 6 = 11: it is the only set that satisfies the triangle inequality."
   },
   {
    "type": "tf",
    "q": "An equilateral triangle has all its angles equal to 60°.",
    "answer": true,
    "explain": "Three equal angles: 180° : 3 = 60°."
   },
   {
    "type": "mc",
    "q": "In a right triangle, the side opposite the right angle is called the…",
    "options": [
     "leg",
     "base",
     "hypotenuse",
     "median"
    ],
    "answer": 2,
    "explain": "It is the hypotenuse, the longest side."
   },
   {
    "type": "text",
    "q": "What is the meeting point of the three altitudes called?",
    "answer": [
     "orthocenter",
     "the orthocenter"
    ],
    "explain": "The altitudes meet at the orthocenter."
   },
   {
    "type": "mc",
    "q": "The centre of the inscribed circle of a triangle is…",
    "options": [
     "the centroid",
     "the incenter",
     "the circumcenter",
     "the orthocenter"
    ],
    "answer": 1,
    "explain": "The incenter, the intersection of the angle bisectors, is equidistant from the three sides."
   },
   {
    "type": "num",
    "q": "An acute angle of a right triangle measures 28°. How much does the other acute angle measure?",
    "answer": 62,
    "unit": "°",
    "explain": "The acute angles of a right triangle are complementary: 90° − 28° = 62°."
   },
   {
    "type": "num",
    "q": "Two interior angles measure 45° and 70°. How much does the exterior angle adjacent to the third angle measure?",
    "answer": 115,
    "unit": "°",
    "explain": "The exterior angle is the sum of the two non-adjacent interior angles: 45° + 70° = 115°."
   },
   {
    "type": "num",
    "q": "A median is 18 cm long. How long is the part between the vertex and the centroid?",
    "answer": 12,
    "unit": "cm",
    "explain": "The centroid divides the median in the ratio 2:1: 18 : 3 × 2 = 12 cm."
   },
   {
    "type": "tf",
    "q": "In an obtuse triangle the orthocenter lies outside the triangle.",
    "answer": true,
    "explain": "Two altitudes fall on the extensions of the sides, so the orthocenter is outside."
   },
   {
    "type": "num",
    "q": "An isosceles triangle has a base of 12 cm and a leg of 10 cm. What is the perimeter?",
    "answer": 32,
    "unit": "cm",
    "explain": "12 + 10 + 10 = 32 cm."
   },
   {
    "type": "order",
    "q": "Put the steps for finding the centroid in order.",
    "items": [
     "Find the midpoint of one side",
     "Join it to the opposite vertex (a median)",
     "Repeat with another side",
     "The meeting point of the medians is the centroid"
    ],
    "explain": "Two medians are enough: the third passes through the same point."
   }
  ],
  "gen": [
   [
    "triAngle",
    3
   ]
  ]
 }
});
