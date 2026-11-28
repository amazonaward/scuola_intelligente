TOPIC('en', {
  id: "l2-mat-equivalenza-pitagora",
  title: "Equivalent figures and the theorems of Euclid and Pythagoras",
  intro: "A rectangle and a triangle can have completely different shapes and still take up the <b>same amount of space</b>. When two figures have the same extent they are called <b>equivalent</b>. From this idea, which you have already used to calculate areas, comes the most famous theorem in mathematics, <b>Pythagoras' theorem</b>, together with <b>Euclid's</b> two theorems on the right-angled triangle. You will see not only how to use them, but also <b>why</b> they are true.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Equivalent figures",
      html: `<p>Two plane figures are called <b>congruent</b> if they can be placed exactly on top of each other. They are called <b>equivalent</b> if they have the <b>same extent</b>, that is the same area, even if they have different shapes. Two congruent figures are always equivalent, but not vice versa: a square with side 4 cm and a rectangle of 8 cm × 2 cm both have an area of 16 cm², but they cannot be superimposed.</p>
<p>Equivalence is an equivalence relation (reflexive, symmetric, transitive) and has two useful properties:</p>
<ul>
<li>sums of equivalent figures <b>(with no interior points in common)</b> are equivalent;</li>
<li>differences of equivalent figures are equivalent.</li>
</ul>
<p>This is the technique of <b>dissection and rearrangement</b>: you cut a figure into pieces and reassemble them into another figure. That is why, to compare areas, you do not need formulas: scissors and imagination are enough. The apparent paradox is that you can compare areas without measuring them.</p>`
    },
    {
      type: "text",
      title: "Areas of polygons: it all starts from the rectangle",
      html: `<p>All the other formulas are derived from the rectangle using equivalence:</p>
<ul>
<li><b>Rectangle</b>: A = base × height.</li>
<li><b>Parallelogram</b>: it is equivalent to a rectangle with the <b>same base and the same height</b> (move the small triangle from the left to the right). A = b × h.</li>
<li><b>Triangle</b>: it is <b>half</b> of a parallelogram with the same base and the same height. A = b × h / 2. All triangles with the same base and the same height are equivalent, even if they have different shapes: just slide the vertex along a line parallel to the base.</li>
<li><b>Trapezium</b>: A = (B + b) × h / 2 (join it to a second identical trapezium turned upside down, obtaining a parallelogram with base B + b).</li>
<li><b>Rhombus</b>: A = (D × d) / 2.</li>
<li><b>Polygon circumscribed about a circle</b>: A = p × r (semi-perimeter times radius).</li>
</ul>
<p>Remember: two figures can have the same area but different perimeters, and vice versa. For a given perimeter, the square has the largest area of all rectangles.</p>`
    },
    {
      type: "svg",
      title: "The sliding triangle",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="60" x2="570" y2="60" stroke="#6366f1" stroke-width="3" stroke-dasharray="9 7"/>
<line x1="60" y1="240" x2="360" y2="240" stroke="#1f2937" stroke-width="4"/>
<polygon points="60,240 360,240 150,60" fill="#bbf7d0" fill-opacity="0.55" stroke="#166534" stroke-width="3"/>
<polygon points="60,240 360,240 300,60" fill="#fed7aa" fill-opacity="0.55" stroke="#c2410c" stroke-width="3"/>
<polygon points="60,240 360,240 480,60" fill="#bfdbfe" fill-opacity="0.55" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="150" cy="60" r="7" fill="#166534"/><circle cx="300" cy="60" r="7" fill="#c2410c"/><circle cx="480" cy="60" r="7" fill="#1d4ed8"/>
<line x1="150" y1="60" x2="150" y2="240" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 5"/>
<text x="458" y="150" font-size="16" fill="#1f2937">same base b</text>
<text x="458" y="178" font-size="16" fill="#1f2937">same height h</text>
<text x="458" y="214" font-size="16" fill="#166534" font-weight="bold">three different triangles,</text>
<text x="458" y="236" font-size="16" fill="#166534" font-weight="bold">same area b·h/2</text>
<text x="40" y="42" font-size="16" fill="#4338ca">The vertex can slide along this line parallel to the base</text>
</svg>`,
      caption: "If the vertex moves along a line parallel to the base, the height does not change: all the triangles obtained are equivalent."
    },
    {
      type: "remember",
      title: "The right-angled triangle and its elements",
      html: `<p>In a right-angled triangle the sides that form the right angle are the <b>legs</b> (a, b); the side opposite the right angle is the <b>hypotenuse</b> (c): it is always the longest side. If you draw the <b>height h</b> onto the hypotenuse, it divides it into two segments, the <b>projections of the legs</b> onto the hypotenuse: <b>p</b> is the projection of leg a and <b>q</b> is that of leg b. We have c = p + q.</p>
<p>A theorem is an implication: the <b>direct</b> theorem ("if H then T") and the <b>converse</b> ("if T then H"). Pythagoras' theorem also works the other way round.</p>`
    },
    {
      type: "text",
      title: "Pythagoras' theorem",
      html: `<p><b>Geometric statement</b>: in a right-angled triangle, the square built on the hypotenuse is equivalent to the sum of the squares built on the two legs.</p>
<p><b>Formula</b>: if a and b are the legs and c the hypotenuse, <b>a² + b² = c²</b>. From this:</p>
<ul>
<li>c = √(a² + b²)</li>
<li>a = √(c² − b²) and b = √(c² − a²)</li>
</ul>
<p><b>Converse theorem</b>: if in a triangle the square of one side equals the sum of the squares of the other two, the triangle is <b>right-angled</b> and that side is the hypotenuse. This is the principle behind the <b>knotted rope</b> used by surveyors: a rope with 12 equally spaced knots, folded into a triangle with sides of 3, 4 and 5 units, gives a perfect right angle (indeed 3² + 4² = 9 + 16 = 25 = 5²).</p>
<p><b>Pythagorean triples</b> are triples of whole numbers that satisfy a² + b² = c²: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), and all their multiples, such as (6, 8, 10) or (9, 12, 15).</p>
<p><b>Two right-angled triangles to know by heart</b>:</p>
<ul>
<li>The <b>isosceles right-angled triangle</b> (45°-45°-90°): the diagonal d of a square with side l is <b>d = l · √2</b>.</li>
<li><b>Half an equilateral triangle</b> (30°-60°-90°): the shorter leg is half the hypotenuse, the longer one is (hypotenuse · √3) / 2. The height of an equilateral triangle with side l is <b>h = l · √3 / 2</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Play with Pythagoras' theorem",
      widget: "pythagoras",
      options: {},
      caption: "Change the legs with the sliders: the area of the square on the hypotenuse is always the sum of the areas of the two squares on the legs."
    },
    {
      type: "example",
      title: "Examples: the ladder and the screen",
      html: `<p><b>The ladder</b>. A 5 m ladder leans against a wall with its foot 3 m from the wall. How high does it reach? The ladder is the hypotenuse and the distance from the wall is a leg: the height is √(5² − 3²) = √(25 − 9) = √16 = <b>4 m</b>.</p>
<p><b>The screen</b>. When a TV is described as "55 inches", that is the <b>diagonal</b>. A screen 48 cm wide and 36 cm high has a diagonal of √(48² + 36²) = √(2304 + 1296) = √3600 = <b>60 cm</b>: it is a 3-4-5 triple multiplied by 12.</p>
<p><b>The diagonal of a room</b>. A room is 8 m long, 6 m wide and 3 m high. The diagonal of the floor is √(64 + 36) = 10 m; the longest pole that fits in the room has length √(10² + 3²) = √109 ≈ 10.44 m (the theorem works in space too!).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Pythagoras",
      questions: [
        { type: "num", q: "The legs of a right-angled triangle measure 9 cm and 12 cm. How long is the hypotenuse?", answer: 15, unit: "cm", explain: "√(81 + 144) = √225 = 15 cm (the 3-4-5 triple times 3)." },
        { type: "num", q: "The hypotenuse of a right-angled triangle is 17 cm and one leg is 8 cm. How long is the other leg?", answer: 15, unit: "cm", explain: "√(17² − 8²) = √(289 − 64) = √225 = 15 cm (the 8-15-17 triple)." },
        { type: "tf", q: "A triangle with sides of 6, 8 and 11 cm is right-angled.", answer: false, explain: "6² + 8² = 100, whereas 11² = 121: the converse theorem does not apply." },
        { type: "mc", q: "What is the diagonal of a square with side 10 cm?", options: ["10√2 cm ≈ 14.1 cm", "20 cm", "10√3 cm"], answer: 0, explain: "d = l·√2 = 10√2 ≈ 14.14 cm." }
      ]
    },
    {
      type: "text",
      title: "Euclid's two theorems",
      html: `<p>Euclid proves Pythagoras' theorem (Elements I.47) with reasoning based on equivalence. From his technique come two theorems on the right-angled triangle, involving the height h onto the hypotenuse and the projections p and q of the legs.</p>
<p><b>Euclid's first theorem</b>: in a right-angled triangle, the square built on a leg is equivalent to the rectangle whose dimensions are the hypotenuse and the projection of that leg onto the hypotenuse.</p>
<p style="text-align:center"><b>a² = c · p &nbsp;&nbsp;&nbsp; b² = c · q</b></p>
<p>In words: <b>a leg is the geometric mean (mean proportional) between the hypotenuse and its projection</b>: c : a = a : p.</p>
<p><b>Euclid's second theorem</b>: the square built on the height onto the hypotenuse is equivalent to the rectangle whose dimensions are the two projections of the legs.</p>
<p style="text-align:center"><b>h² = p · q</b></p>
<p>The height is the <b>geometric mean</b> of the projections: p : h = h : q.</p>
<p><b>From Euclid's theorems to Pythagoras</b>: adding a² = c·p and b² = c·q gives a² + b² = c·(p + q) = c·c = c². So Pythagoras' theorem is a consequence of Euclid's first theorem. The height is also h = (a · b) / c (obtained by calculating the area in two ways: a·b/2 = c·h/2).</p>`
    },
    {
      type: "svg",
      title: "The right-angled triangle and its projections",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="40,250 400,250 144,106" fill="#e0e7ff" stroke="#4338ca" stroke-width="4"/>
<line x1="144" y1="106" x2="144" y2="250" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<rect x="144" y="236" width="14" height="14" fill="none" stroke="#dc2626" stroke-width="3"/>
<circle cx="40" cy="250" r="6" fill="#1f2937"/><circle cx="400" cy="250" r="6" fill="#1f2937"/><circle cx="144" cy="106" r="6" fill="#1f2937"/><circle cx="144" cy="250" r="6" fill="#dc2626"/>
<text x="22" y="276" font-size="16" fill="#1f2937">B</text>
<text x="404" y="276" font-size="16" fill="#1f2937">C</text>
<text x="136" y="94" font-size="16" fill="#1f2937">A (right angle)</text>
<text x="136" y="274" font-size="16" fill="#dc2626">H</text>
<text x="76" y="272" font-size="16" fill="#166534" font-weight="bold">p</text>
<text x="262" y="272" font-size="16" fill="#c2410c" font-weight="bold">q</text>
<text x="150" y="190" font-size="16" fill="#dc2626" font-weight="bold">h</text>
<text x="58" y="168" font-size="16" fill="#4338ca" font-weight="bold">leg a</text>
<text x="290" y="170" font-size="16" fill="#4338ca" font-weight="bold">leg b</text>
<text x="210" y="236" font-size="16" fill="#1f2937">hypotenuse c = p + q</text>
<text x="430" y="90" font-size="16" fill="#1f2937">Euclid 1:</text>
<text x="430" y="115" font-size="16" fill="#166534" font-weight="bold">a² = c · p</text>
<text x="430" y="140" font-size="16" fill="#c2410c" font-weight="bold">b² = c · q</text>
<text x="430" y="180" font-size="16" fill="#1f2937">Euclid 2:</text>
<text x="430" y="205" font-size="16" fill="#dc2626" font-weight="bold">h² = p · q</text>
<text x="430" y="245" font-size="16" fill="#1f2937">Pythagoras: a² + b² = c²</text>
</svg>`,
      caption: "In the diagram, p is the projection of leg a (AB) onto the hypotenuse and q that of leg b (AC)."
    },
    {
      type: "example",
      title: "Numerical example with Euclid's theorems",
      html: `<p>A right-angled triangle has projections of the legs onto the hypotenuse p = 4 cm and q = 9 cm. Calculate all its elements.</p>
<ul>
<li>Hypotenuse: c = p + q = 13 cm.</li>
<li>Height (Euclid 2): h = √(p · q) = √36 = <b>6 cm</b>.</li>
<li>Leg a (Euclid 1): a = √(c · p) = √(13 · 4) = √52 = 2√13 ≈ 7.21 cm.</li>
<li>Leg b: b = √(c · q) = √(13 · 9) = √117 = 3√13 ≈ 10.82 cm.</li>
<li>Check with Pythagoras: a² + b² = 52 + 117 = 169 = 13². ✓</li>
<li>Area: c · h / 2 = 13 · 6 / 2 = <b>39 cm²</b> (and also a · b / 2 = (2√13 · 3√13) / 2 = 6 · 13 / 2 = 39: the two calculations agree).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Before Pythagoras",
      html: `<p>The theorem is named after <b>Pythagoras of Samos</b> (6th century BC), but the relationship was already known to other peoples. The Babylonian tablet <b>Plimpton 322</b> (about 1800 BC) lists very large Pythagorean triples, such as (119, 120, 169). In India, the <i>Sulba Sutras</i> describe rules for building altars with right-angled triangles; in China the <i>Zhou Bi Suan Jing</i> shows the proof with squares. The Greeks were probably the first to prove it in general: Greek mathematics was not satisfied with knowing that it works, it wanted to know <b>why</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The mathematician president and the impossible side",
      html: `<p>The theorem has hundreds of different proofs. One was published in 1876 by <b>James A. Garfield</b>, then a member of the United States Congress and later the 20th president: it used a trapezium made of three right-angled triangles.</p>
<p>The theorem also caused a crisis. The diagonal of a square with side 1 is √2, and <b>√2 is not a ratio of whole numbers</b> (it is irrational). According to tradition, this discovery troubled the Pythagoreans, who believed that everything was a whole number or a ratio of whole numbers: it was the discovery of <b>incommensurable quantities</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to see Pythagoras' theorem",
      intro: "You do not have to trust the formula: you can see it with your own eyes, by cutting and pasting.",
      tabs: [
        {
          label: "🇨🇳 Chinese proof (tilted square)",
          html: `<p>Take a square with side <b>a + b</b>. Inside it, arrange <b>4 identical right-angled triangles</b> (legs a and b) in two different ways. In the first arrangement the triangles leave a tilted square of side <b>c</b> uncovered. In the second they leave two squares uncovered, with sides <b>a</b> and <b>b</b>. The area of the big square is the same in both cases and the four triangles are the same: what is left over must be equal. So <b>c² = a² + b²</b>. No calculation: just rearrangement!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="30" width="200" height="200" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<polygon points="30,30 98,30 30,98" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="230,30 230,98 162,30" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="230,230 162,230 230,162" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="30,230 30,162 98,230" fill="#a5b4fc" stroke="#1f2937" stroke-width="2"/>
<polygon points="98,30 230,98 162,230 30,162" fill="#fde68a" stroke="#b45309" stroke-width="3" fill-opacity="0.6"/>
<text x="95" y="140" font-size="16" fill="#92400e" font-weight="bold">c²</text>
<rect x="330" y="30" width="200" height="200" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<rect x="330" y="30" width="68" height="68" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<rect x="398" y="98" width="132" height="132" fill="#fed7aa" stroke="#c2410c" stroke-width="3"/>
<text x="352" y="72" font-size="16" fill="#166534" font-weight="bold">b²</text>
<text x="446" y="168" font-size="16" fill="#c2410c" font-weight="bold">a²</text>
<text x="70" y="262" font-size="16" fill="#1f2937">Square with side a + b: 4 triangles + c²</text>
<text x="300" y="286" font-size="16" fill="#1f2937">Same 4 triangles + a² + b²  →  c² = a² + b²</text>
</svg>`
        },
        {
          label: "🧩 With squared paper",
          html: `<p>On squared paper draw a right-angled triangle with legs of 3 and 4 squares. Build the three squares on its sides and count: the one on the leg of 3 contains 9 small squares, the one on the leg of 4 contains 16, and the one on the hypotenuse contains <b>25</b> (side 5): 9 + 16 = 25. Then try with 5 and 12: 25 + 144 = 169 = 13². If the three numbers do not form a Pythagorean triple, the hypotenuse is not a whole number and you can no longer count the squares on it "by eye": but the equality of the areas still holds.</p>`
        },
        {
          label: "🧵 The 12-knot rope",
          html: `<p>How did builders (and the ancient Egyptians, according to the tradition of the <i>harpedonaptai</i>, the "rope-stretchers") mark out right angles? With a rope with <b>12</b> equally spaced <b>knots</b>. They folded it into a triangle with sides of 3, 4 and 5 segments: the angle between the sides of 3 and 4 is a <b>right angle</b>. The converse theorem guarantees it always works: if the sides satisfy 3² + 4² = 5², the triangle is right-angled. Builders still use the "3-4-5 rule" today to square up foundations.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: equivalence, Euclid, Pythagoras",
      nodes: [
        { id: "equi", label: "Equivalence", x: 50, y: 6, color: "#6366f1", html: "Same extent, even with different shapes.", why: "The ancients did not have numbers to measure every area (incommensurable quantities troubled them): they compared figures by cutting and rearranging, without numbers." },
        { id: "aree", label: "Area formulas", x: 20, y: 30, color: "#f59e0b", html: "Rectangle, parallelogram, triangle, trapezium.", why: "Each formula comes from the rectangle by dissection: parallelogram = rectangle, triangle = half a parallelogram." },
        { id: "rett", label: "Right-angled triangle", x: 80, y: 30, color: "#16a34a", html: "Legs, hypotenuse, height, projections.", why: "It is the 'building block' of trigonometry and of calculating distances: any triangle can be split into right-angled triangles by a height." },
        { id: "euc", label: "Euclid's theorems", x: 50, y: 52, color: "#a855f7", html: "a² = c·p, b² = c·q, h² = p·q.", why: "Euclid derives them from the equivalence of squares and rectangles (Books I and VI). They can also be proved using the similarity of the three triangles ABC, HBA, HAC: you will see this in the next lesson." },
        { id: "pit", label: "Pythagoras' theorem", x: 20, y: 76, color: "#ef4444", html: "a² + b² = c².", why: "For the Babylonians it was a numerical recipe; in Euclid (I.47) it becomes a theorem with a proof: the squares are not numbers but figures." },
        { id: "inv", label: "Converse theorem", x: 80, y: 76, color: "#0ea5e9", html: "If a² + b² = c², the triangle is right-angled.", why: "It lets you recognise a right angle using only length measurements: the knotted rope, squaring up walls." },
        { id: "irr", label: "Irrational numbers", x: 50, y: 92, color: "#14b8a6", html: "√2 is not a fraction.", why: "Pythagoras applied to the unit square produces the diagonal √2. Its irrationality, discovered by the Pythagoreans, showed that rational numbers are not enough to measure geometry." }
      ],
      edges: [
        ["equi", "aree", "makes possible"],
        ["aree", "euc", "used in"],
        ["rett", "euc", "has"],
        ["euc", "pit", "implies"],
        ["pit", "inv", "can be reversed"],
        ["pit", "irr", "leads to"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Euclid",
      questions: [
        { type: "num", q: "In a right-angled triangle the hypotenuse measures 25 cm and the projection of one leg onto it is 9 cm. How long is that leg?", answer: 15, unit: "cm", explain: "Euclid's first theorem: a² = c · p = 25 · 9 = 225, so a = 15 cm." },
        { type: "num", q: "The projections of the legs onto the hypotenuse measure 2 cm and 8 cm. How long is the height onto the hypotenuse?", answer: 4, unit: "cm", explain: "Euclid's second theorem: h² = p · q = 16, so h = 4 cm." },
        { type: "tf", q: "Two triangles with the same base and the same height always have the same area.", answer: true, explain: "Area = base × height / 2: if the base and height are equal, so are the areas (they are equivalent)." }
      ]
    }
  ],
  glossary: [
    { t: "Equivalent figures", d: "Figures that have the same area (extent), even if they have different shapes." },
    { t: "Congruent", d: "Figures that can be superimposed exactly by a rigid motion." },
    { t: "Leg", d: "Each of the two sides of a right-angled triangle that form the right angle." },
    { t: "Hypotenuse", d: "The side opposite the right angle: the longest side of the right-angled triangle." },
    { t: "Projection of a leg", d: "The segment of the hypotenuse between the vertex and the foot of the height onto the hypotenuse." },
    { t: "Pythagoras' theorem", d: "In a right-angled triangle a² + b² = c²." },
    { t: "Pythagorean triple", d: "Three whole numbers that satisfy a² + b² = c², such as (3, 4, 5)." },
    { t: "Geometric mean (mean proportional)", d: "The number x such that a : x = x : b, that is x = √(a·b)." },
    { t: "Euclid's theorems", d: "In a right-angled triangle: a² = c·p, b² = c·q (first) and h² = p·q (second)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Two figures are equivalent when…", options: ["They can be superimposed", "They have the same area", "They have the same perimeter"], answer: 1, explain: "Equivalent = same extent (area), even with different shapes." },
      { type: "num", q: "A triangle has base 10 cm and height 6 cm. What is its area?", answer: 30, unit: "cm²", explain: "A = b · h / 2 = 10 · 6 / 2 = 30 cm²." },
      { type: "num", q: "The legs of a right-angled triangle measure 5 cm and 12 cm. How long is the hypotenuse?", answer: 13, unit: "cm", explain: "√(25 + 144) = √169 = 13 cm." },
      { type: "tf", q: "In a triangle with sides 7, 24 and 25 cm the angle opposite the 25 cm side is a right angle.", answer: true, explain: "7² + 24² = 49 + 576 = 625 = 25²: by the converse theorem it is right-angled." },
      { type: "num", q: "The diagonal of a square measures 12√2 cm. How long is the side?", answer: 12, unit: "cm", explain: "d = l√2, so l = d/√2 = 12 cm." },
      { type: "mc", q: "Euclid's first theorem states that…", options: ["h² = p · q", "a² = c · p", "a + b = c"], answer: 1, explain: "The square of a leg equals the product of the hypotenuse and the projection of that leg." },
      { type: "num", q: "In a right-angled triangle the projections of the legs onto the hypotenuse are 3 cm and 12 cm. How long is the height onto the hypotenuse?", answer: 6, unit: "cm", explain: "h = √(3 · 12) = √36 = 6 cm." },
      { type: "num", q: "An equilateral triangle has side 10 cm. What is its height, rounded to 1 decimal place? (√3 ≈ 1.732)", answer: 8.7, tol: 0.1, unit: "cm", explain: "h = l · √3 / 2 = 10 · 1.732 / 2 ≈ 8.66 ≈ 8.7 cm." },
      { type: "text", q: "What is the side of a right-angled triangle opposite the right angle called?", answer: ["hypotenuse", "the hypotenuse"], explain: "The hypotenuse is the longest side of the right-angled triangle." },
      { type: "order", q: "Put the steps for finding how high up a wall a ladder reaches in order.", items: ["Recognise the right-angled triangle (ladder = hypotenuse)", "Write c² = a² + b²", "Isolate the leg: a = √(c² − b²)", "Calculate the numerical value"], explain: "Identify the triangle, apply Pythagoras, solve for the unknown leg and calculate." }
    ]
  }
});
