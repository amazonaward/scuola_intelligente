TOPIC('en', {
  id: "m2-mat-pitagora",
  title: "Pythagoras' theorem",
  intro: "Pythagoras' theorem is one of the most famous discoveries in mathematics: it links the three sides of every <b>right-angled triangle</b> and lets us calculate distances that we cannot measure directly.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "1. The right-angled triangle",
      html: "<p>A <b>right-angled triangle</b> has one right angle (90°). Its sides have special names:</p><ul><li>the two sides that form the right angle are called the <b>legs</b> (we call them <i>a</i> and <i>b</i>);</li><li>the side opposite the right angle is the <b>hypotenuse</b> (<i>c</i>): it is always the longest side.</li></ul><p>Pythagoras was a Greek mathematician and philosopher who lived in the 6th century BC in Croton, in Calabria (southern Italy).</p>"
    },
    {
      type: "svg",
      title: "Legs and hypotenuse",
      svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"150,250 450,250 150,50\" fill=\"#dbeafe\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><rect x=\"150\" y=\"225\" width=\"25\" height=\"25\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"300\" y=\"280\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">leg b</text><text x=\"95\" y=\"155\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">leg a</text><text x=\"330\" y=\"135\" font-size=\"20\" fill=\"#15803d\" font-family=\"sans-serif\">hypotenuse c</text><text x=\"190\" y=\"240\" font-size=\"16\" fill=\"#1e3a8a\" font-family=\"sans-serif\">90°</text></svg>",
      caption: "The legs form the right angle; the hypotenuse is opposite it."
    },
    {
      type: "remember",
      title: "The statement",
      html: "<p>In every right-angled triangle <b>the square built on the hypotenuse is equal in area to the sum of the squares built on the legs</b>.</p><p style=\"font-size:1.3em;text-align:center\"><b>c² = a² + b²</b></p><p>Inverse formulas: <b>c = √(a² + b²)</b> &nbsp; <b>a = √(c² − b²)</b> &nbsp; <b>b = √(c² − a²)</b></p>"
    },
    {
      type: "svg",
      title: "The proof with squares (3, 4, 5)",
      svg: "<svg viewBox=\"0 0 600 370\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"370\" fill=\"#ffffff\"/><g stroke=\"#334155\" stroke-width=\"2\"><rect x=\"150\" y=\"230\" width=\"120\" height=\"120\" fill=\"#fde68a\"/><rect x=\"60\" y=\"140\" width=\"90\" height=\"90\" fill=\"#bfdbfe\"/><polygon points=\"150,140 270,230 360,110 240,20\" fill=\"#bbf7d0\"/><polygon points=\"150,230 270,230 150,140\" fill=\"#e2e8f0\" stroke-width=\"3\"/></g><text x=\"210\" y=\"297\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">b² = 16</text><text x=\"105\" y=\"192\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">a² = 9</text><text x=\"255\" y=\"130\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">c² = 25</text><text x=\"400\" y=\"220\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e3a8a\">a = 3, b = 4, c = 5</text><text x=\"400\" y=\"255\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#15803d\">9 + 16 = 25 ✔</text><text x=\"400\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">yellow area + blue area</text><text x=\"400\" y=\"312\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">= green area</text></svg>",
      caption: "If you build a square on each side, the area of the green square (on the hypotenuse) equals the sum of the other two."
    },
    {
      type: "widget",
      title: "Your turn: move the legs",
      widget: "pythagoras",
      options: { a: 3, b: 4 },
      caption: "Change the length of the legs and watch how the squares change: the sum of the small areas is always equal to the big area."
    },
    {
      type: "alternatives",
      title: "Other ways to understand it: 6 proofs from around the world",
      intro: "Pythagoras' theorem has more than 350 different proofs! If one doesn't convince you, try another: everyone has the one that «clicks».",
      tabs: [
        {
          label: "🇨🇳 China: the Gougu",
          html: "<p>In the <b>Zhou Bi Suan Jing</b>, an ancient Chinese text on astronomy and mathematics (its contents go back about 2,000 years), the theorem is called <b>Gougu</b> (gou = short leg, gu = long leg). The classic figure is a square of side a + b with four identical triangles inside: the space in the middle is the square of the hypotenuse.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#fffbeb\"/><g transform=\"translate(40,20)\"><rect x=\"0\" y=\"0\" width=\"260\" height=\"260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"0,0 100,0 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,0 260,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"260,100 260,260 160,260\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"160,260 0,260 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,100 160,260 0,160\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/><text x=\"130\" y=\"138\" font-size=\"28\" text-anchor=\"middle\" fill=\"#7f1d1d\" font-weight=\"bold\">c²</text><text x=\"50\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">a</text><text x=\"180\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">b</text></g><text x=\"330\" y=\"70\" font-size=\"18\" fill=\"#1f2937\">Big square: side a + b</text><text x=\"330\" y=\"105\" font-size=\"18\" fill=\"#1f2937\">Area = (a + b)²</text><text x=\"330\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">= 4 triangles + square c²</text><text x=\"330\" y=\"175\" font-size=\"18\" fill=\"#1f2937\">= 4 · (a·b ÷ 2) + c²</text><text x=\"330\" y=\"220\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">a² + 2ab + b² = 2ab + c²</text><text x=\"330\" y=\"255\" font-size=\"20\" fill=\"#b91c1c\" font-weight=\"bold\">a² + b² = c²</text></svg>"
        },
        {
          label: "🏛️ Euclid",
          html: "<p>In the <b>Elements</b> (around 300 BC), proposition I.47, Euclid draws a line from the vertex of the right angle perpendicular to the hypotenuse. It divides the big square into two rectangles and, using congruent triangles, he proves that each rectangle is <b>equivalent</b> (has the same area) to the square on one of the legs. It's the «windmill figure».</p>",
          svg: "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#f5f3ff\"/><g transform=\"translate(150,30)\"><polygon points=\"0,90 120,90 0,0\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"2\"/><polygon points=\"0,0 -90,0 -90,90 0,90\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,0 120,90 210,-30 90,-120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,90 120,90 120,210 0,210\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\" opacity=\".8\"/><line x1=\"0\" y1=\"90\" x2=\"133\" y2=\"-88\" stroke=\"#7c3aed\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"-45\" y=\"50\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">a²</text><text x=\"60\" y=\"160\" font-size=\"20\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">b²</text><text x=\"105\" y=\"-15\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">c²</text></g><text x=\"360\" y=\"200\" font-size=\"16\" fill=\"#1f2937\">The purple line, from the vertex</text><text x=\"360\" y=\"222\" font-size=\"16\" fill=\"#1f2937\">of the right angle, splits c²</text><text x=\"360\" y=\"244\" font-size=\"16\" fill=\"#1f2937\">into two rectangles: one equals a²,</text><text x=\"360\" y=\"266\" font-size=\"16\" fill=\"#1f2937\">the other equals b² (Elements, I.47)</text></svg>"
        },
        {
          label: "🇺🇸 President Garfield",
          html: "<p>In 1876 the congressman (and future President of the United States) <b>James Garfield</b> found a proof using a <b>trapezium</b> made of two identical right-angled triangles and an isosceles triangle. Calculating the area of the trapezium in two different ways gives the theorem.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/><g transform=\"translate(40,30)\"><polygon points=\"0,240 0,80 100,240\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,240 260,240 260,140\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"0,80 100,240 260,140\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/><line x1=\"0\" y1=\"80\" x2=\"260\" y2=\"140\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"-12\" y=\"165\" font-size=\"16\" fill=\"#1e3a8a\">a</text><text x=\"45\" y=\"262\" font-size=\"16\" fill=\"#1e3a8a\">b</text><text x=\"175\" y=\"262\" font-size=\"16\" fill=\"#92400e\">a</text><text x=\"268\" y=\"195\" font-size=\"16\" fill=\"#92400e\">b</text><text x=\"120\" y=\"160\" font-size=\"20\" fill=\"#7f1d1d\" font-weight=\"bold\">c²/2</text></g><text x=\"340\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">Trapezium with bases a and b, height a + b</text><text x=\"340\" y=\"115\" font-size=\"17\" fill=\"#1f2937\">Area = (a + b)(a + b) ÷ 2</text><text x=\"340\" y=\"150\" font-size=\"17\" fill=\"#1f2937\">= ab/2 + ab/2 + c²/2</text><text x=\"340\" y=\"195\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">→ a² + b² = c²</text><text x=\"340\" y=\"240\" font-size=\"14\" fill=\"#475569\">James Garfield, 1876 (later US President)</text></svg>"
        },
        {
          label: "🧩 Puzzle",
          html: "<p>Take <b>4 identical right-angled triangles</b> and a square of side a + b. Arranged one way, they leave two squares free, a² and b². Arranged another way, they leave just one tilted square free, c². The free space is the same, so <b>a² + b² = c²</b>. No calculations, just your eyes!</p>",
          svg: "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f0fdf4\"/><g transform=\"translate(30,20)\"><rect width=\"240\" height=\"240\" fill=\"#fff\" stroke=\"#14532d\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"90\" height=\"90\" fill=\"#93c5fd\"/><rect x=\"90\" y=\"90\" width=\"150\" height=\"150\" fill=\"#86efac\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 90,90 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"0,90 90,90 0,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,90 90,240 0,240\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"45\" y=\"52\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e3a8a\">a²</text><text x=\"165\" y=\"172\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#166534\">b²</text></g><g transform=\"translate(330,20)\"><rect width=\"240\" height=\"240\" fill=\"#fca5a5\" stroke=\"#14532d\" stroke-width=\"3\"/><polygon points=\"0,0 90,0 0,150\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"240,90 240,240 150,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"150,240 0,240 0,150\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"120\" y=\"128\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7f1d1d\">c²</text></g><text x=\"300\" y=\"275\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Same 4 triangles, same square: the free space is the same!</text></svg>"
        },
        {
          label: "🪢 The Egyptian rope",
          html: "<p>According to a tradition, the builders and surveyors of ancient Egypt (the «harpedonaptae», rope-stretchers) used a rope with <b>12 equal sections</b> separated by knots. Pulling it tight into a triangle with sides 3, 4 and 5 gives a perfect <b>right angle</b>: useful for marking out fields and foundations. It's the <b>converse theorem</b> in action: if 3² + 4² = 5², the triangle is right-angled. Builders still use the «3-4-5» trick with a tape measure today.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><polyline points=\"100,250 340,250 100,70 100,250\" fill=\"#fed7aa\" stroke=\"#9a3412\" stroke-width=\"5\"/><circle cx=\"100\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"160\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"220\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"280\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"340\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"190\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"130\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"70\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"148\" cy=\"106\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"196\" cy=\"142\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"244\" cy=\"178\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"292\" cy=\"214\" r=\"7\" fill=\"#7c2d12\"/><rect x=\"100\" y=\"230\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/><text x=\"220\" y=\"282\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 sections</text><text x=\"60\" y=\"165\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">3 sections</text><text x=\"250\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">5 sections</text><text x=\"380\" y=\"110\" font-size=\"17\" fill=\"#1f2937\">Rope with 12 equal sections</text><text x=\"380\" y=\"140\" font-size=\"17\" fill=\"#1f2937\">stretched into a 3-4-5 triangle:</text><text x=\"380\" y=\"170\" font-size=\"17\" fill=\"#b91c1c\" font-weight=\"bold\">right angle guaranteed!</text></svg>"
        },
        {
          label: "🧊 With 3D cubes",
          html: "<p>The 3 × 3 square has <b>9</b> cubes, the 4 × 4 has <b>16</b>. Together they make 25: exactly the number needed to fill the <b>5 × 5</b> square built on the hypotenuse. Try changing the numbers with the sliders: with 6 and 8 you need 36 + 64 = 100 cubes, that is a 10 × 10 square.</p>",
          scene: "blocks",
          options: { mode: "array", a: 5, b: 5 }
        }
      ]
    },
    {
      type: "text",
      title: "2. How to use it: step by step",
      html: "<p><b>Finding the hypotenuse</b> (I know both legs):</p><ol><li>square each leg;</li><li>add the two squares;</li><li>take the square root.</li></ol><p><b>Finding a leg</b> (I know the hypotenuse and the other leg):</p><ol><li>square the hypotenuse and the known leg;</li><li><b>subtract</b> the square of the leg from the square of the hypotenuse;</li><li>take the square root.</li></ol><p>Careful: for a leg you <b>subtract</b>, for the hypotenuse you <b>add</b>!</p>"
    },
    {
      type: "example",
      title: "Example: the ladder against the wall",
      html: "<p>A ladder <b>5 m</b> long leans against a wall; the foot of the ladder is <b>3 m</b> from the wall. How high does it reach?</p><p>The ladder is the hypotenuse, the distance from the wall is a leg: <br>h = √(5² − 3²) = √(25 − 9) = √16 = <b>4 m</b>.</p>"
    },
    {
      type: "example",
      title: "Example: the diagonal of a screen",
      html: "<p>The inches of a TV give its <b>diagonal</b>. A screen 88.6 cm wide and 49.8 cm high has a diagonal of:</p><p>d = √(88.6² + 49.8²) = √(7849.96 + 2480.04) = √10330 ≈ <b>101.6 cm</b>, that is about 40 inches (1 inch = 2.54 cm).</p><p>In the same way you can calculate the diagonal of a rectangle or a square: in a square of side <i>l</i>, d = l·√2 ≈ l × 1.414.</p>"
    },
    {
      type: "quiz",
      title: "Mini-quiz 1",
      questions: [
        { type: "mc", q: "Which is the longest side of a right-angled triangle?", options: ["The longer leg", "The hypotenuse", "It depends on the triangle"], answer: 1, explain: "The hypotenuse is opposite the right angle, the biggest angle in the triangle, so it is always the longest side." },
        { type: "num", q: "Legs 6 cm and 8 cm. How long is the hypotenuse?", answer: 10, tol: 0, unit: "cm", explain: "√(36 + 64) = √100 = 10 cm." },
        { type: "tf", q: "Pythagoras' theorem works for all triangles.", answer: false, explain: "It only works for right-angled triangles." }
      ]
    },
    {
      type: "text",
      title: "3. Pythagorean triples",
      html: "<p>A <b>Pythagorean triple</b> is a group of three whole numbers that satisfy a² + b² = c². The most used ones:</p><table><tr><th>a</th><th>b</th><th>c</th></tr><tr><td>3</td><td>4</td><td>5</td></tr><tr><td>5</td><td>12</td><td>13</td></tr><tr><td>8</td><td>15</td><td>17</td></tr><tr><td>7</td><td>24</td><td>25</td></tr><tr><td>20</td><td>21</td><td>29</td></tr></table><p>Multiplying a triple by the same number gives another triple: 3-4-5 × 2 = <b>6-8-10</b>, × 3 = <b>9-12-15</b>.</p><p>The theorem also works the other way round: if a² + b² = c², the triangle is <b>right-angled</b>.</p>"
    },
    {
      type: "curiosity",
      title: "The rope with 12 knots",
      html: "<p>To mark out right angles in the fields after the Nile floods, the ancient Egyptians used a rope with <b>12 equally spaced knots</b>: pulling it into a triangle with sides 3, 4 and 5 gave them a perfect right angle. Builders still use this trick today (3-4-5 metres) to check that walls are square.</p>"
    },
    {
      type: "curiosity",
      title: "More than 370 proofs",
      html: "<p>The theorem has been known for at least 3,800 years: the Babylonian tablet <b>Plimpton 322</b> contains Pythagorean triples. In 1940 the mathematician Elisha Loomis collected <b>367 different proofs</b>; one was even found by a President of the United States, James Garfield, in 1876.</p>"
    },
    {
      type: "text",
      title: "4. Applications in geometry",
      html: "<ul><li><b>Diagonal of a rectangle</b>: d = √(b² + h²).</li><li><b>Height of an equilateral triangle</b> with side l: h = √(l² − (l/2)²) ≈ l × 0.866.</li><li><b>Slanted side of a right trapezium</b>: use the triangle formed by the height and the difference between the bases.</li><li><b>Distance between two points</b> on the Cartesian plane: d = √((x₂−x₁)² + (y₂−y₁)²).</li><li><b>Diagonal of a cube</b> with edge s: D = s·√3.</li></ul>"
    },
    {
      type: "conceptMap",
      title: "Concept map: where does the theorem come from?",
      nodes: [
        { id: "def", label: "Definitions: point, line, plane", x: 50, y: 6, color: "#64748b", html: "<p>The basic objects of geometry.</p>", why: "<p>Euclid begins the Elements with 23 definitions («a point is that which has no part»). They can't be proved: they are the shared vocabulary we start from.</p>" },
        { id: "post", label: "Euclid's first 4 postulates", x: 22, y: 24, color: "#a855f7", html: "<p>Through two points there is a line; a segment can be extended; a circle can be drawn; all right angles are equal.</p>", why: "<p>A <b>postulate</b> (or axiom) is a rule accepted without proof because it seems obvious. Every theorem has to rest on something: if we tried to prove everything forever we would never get started. Euclid chose very few rules and from them derived hundreds of theorems.</p>" },
        { id: "quinto", label: "5th postulate: parallels", x: 78, y: 24, color: "#7c3aed", html: "<p>Through a point outside a line there is <b>only one</b> parallel line (in Playfair's form).</p>", why: "<p>For more than 2,000 years mathematicians tried to prove it from the other four, without success. In the 19th century Lobachevsky, Bolyai and Gauss understood why: it can be <b>replaced</b> by a different postulate, giving geometries that are just as consistent!</p>" },
        { id: "angoli", label: "Sum of angles = 180°", x: 78, y: 46, color: "#2563eb", html: "<p>In every triangle the interior angles add up to 180°.</p>", why: "<p>It is proved by drawing the parallel to one side: you need alternate interior angles, which depend precisely on the 5th postulate.</p>" },
        { id: "aree", label: "Areas and equivalent figures", x: 22, y: 46, color: "#0d9488", html: "<p>Figures cut into the same pieces have the same area; a rectangle has area b × h.</p>", why: "<p>Euclid compares areas by moving and rearranging congruent figures (triangle congruence criteria). Rectangles and squares also only «work» properly in the geometry with the 5th postulate.</p>" },
        { id: "pit", label: "Pythagoras' theorem", x: 50, y: 66, color: "#dc2626", html: "<p>c² = a² + b² in right-angled triangles.</p>", why: "<p>It is proved by combining equivalent areas (Euclid, I.47) or similar triangles. It is credited to Pythagoras (6th century BC), but the Babylonians already knew triples such as 3-4-5: the tablet <b>Plimpton 322</b> (about 1800 BC) lists many of them. The Greek achievement was the general <b>proof</b>, not just the example.</p>" },
        { id: "inverso", label: "Converse theorem", x: 18, y: 86, color: "#ea580c", html: "<p>If a² + b² = c², the triangle is right-angled.</p>", why: "<p>It is Euclid's proposition I.48. It is used to construct right angles (the 3-4-5 rope) and to check whether a triangle is right-angled.</p>" },
        { id: "distanza", label: "Distance on the Cartesian plane", x: 50, y: 92, color: "#16a34a", html: "<p>d = √((x₂ − x₁)² + (y₂ − y₁)²)</p>", why: "<p>The horizontal and vertical movements are the legs of a right-angled triangle: the distance is the hypotenuse. This is also how GPS, video games and digital maps work.</p>" },
        { id: "noneuclide", label: "Non-Euclidean geometries", x: 84, y: 82, color: "#be185d", html: "<p>On a sphere, Pythagoras' theorem <b>does not hold</b>.</p>", why: "<p>On the Earth's surface a triangle with one vertex at the North Pole and two on the equator can have <b>three right angles</b> (sum 270°). Change the 5th postulate and Pythagoras and the angle sum change too. Einstein used exactly a non-Euclidean geometry to describe curved space-time in general relativity (1915).</p>" }
      ],
      edges: [
        ["def", "post", "basis of"],
        ["def", "quinto", "basis of"],
        ["post", "aree", "make possible"],
        ["quinto", "angoli", "proves"],
        ["aree", "pit", "prove"],
        ["angoli", "pit", "used for"],
        ["pit", "inverso", "is reversed"],
        ["pit", "distanza", "is applied"],
        ["quinto", "noneuclide", "if you change it…"],
        ["noneuclide", "pit", "no longer holds"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz 2",
      questions: [
        { type: "num", q: "Hypotenuse 13 cm, one leg 5 cm. How long is the other leg?", answer: 12, tol: 0, unit: "cm", explain: "√(169 − 25) = √144 = 12 cm." },
        { type: "mc", q: "Which of these is a Pythagorean triple?", options: ["4, 5, 6", "6, 8, 10", "2, 3, 4"], answer: 1, explain: "36 + 64 = 100 = 10². It is double the 3-4-5 triple." },
        { type: "num", q: "A rectangle has base 12 cm and height 5 cm: how long is the diagonal?", answer: 13, tol: 0, unit: "cm", explain: "√(144 + 25) = √169 = 13 cm." }
      ]
    }
  ],
  glossary: [
    { t: "Right-angled triangle", d: "Triangle with one 90° angle." },
    { t: "Legs", d: "The two sides that form the right angle." },
    { t: "Hypotenuse", d: "The side opposite the right angle; it is the longest." },
    { t: "Pythagorean triple", d: "Three whole numbers a, b, c such that a² + b² = c²." },
    { t: "Square root", d: "The number which, multiplied by itself, gives the starting number: √49 = 7." },
    { t: "Equivalent", d: "Having the same area (or volume), even if the shape is different." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Pythagoras' theorem is written:", options: ["c = a + b", "c² = a² + b²", "a² = b² + c²", "c² = a² − b²"], answer: 1, explain: "The square of the hypotenuse (c) equals the sum of the squares of the legs." },
      { type: "num", q: "Legs 9 cm and 12 cm. Hypotenuse?", answer: 15, tol: 0, unit: "cm", explain: "√(81 + 144) = √225 = 15 cm (the 3-4-5 triple × 3)." },
      { type: "num", q: "Hypotenuse 17 cm, leg 8 cm. Other leg?", answer: 15, tol: 0, unit: "cm", explain: "√(289 − 64) = √225 = 15 cm." },
      { type: "tf", q: "A triangle with sides 5, 12, 13 is right-angled.", answer: true, explain: "25 + 144 = 169 = 13²: the converse theorem applies." },
      { type: "tf", q: "A triangle with sides 4, 6, 7 is right-angled.", answer: false, explain: "16 + 36 = 52, but 7² = 49: they are not equal." },
      { type: "num", q: "A square has side 10 cm. Diagonal (round to one decimal place)?", answer: 14.1, tol: 0.05, unit: "cm", explain: "d = 10 × √2 ≈ 14.1 cm." },
      { type: "mc", q: "To find a leg when I know the hypotenuse and the other leg I must:", options: ["add the squares", "subtract the squares", "add the sides", "multiply the sides"], answer: 1, explain: "a = √(c² − b²): subtract the square of the known leg from the square of the hypotenuse." },
      { type: "num", q: "A 10 m ladder has its foot 6 m from the wall. How high does it reach?", answer: 8, tol: 0, unit: "m", explain: "√(100 − 36) = √64 = 8 m." },
      { type: "text", q: "What is the side opposite the right angle called?", answer: ["hypotenuse", "the hypotenuse"], explain: "It's the hypotenuse." },
      { type: "order", q: "Put in order the steps for calculating the hypotenuse", items: ["Square the legs", "Add the squares", "Take the square root"], explain: "First the squares, then the sum, finally the root." }
    ],
    gen: [["pythagoras", 2]]
  }
});
