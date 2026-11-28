TOPIC('en', {
  id: "l2-mat-circonferenza-poligoni",
  title: "Circles and polygons",
  intro: "The circle is the most perfect curve there is: every point on it is the same distance from the centre. From wheels to CDs, from lenses to orbits, it is everywhere. In this lesson you will discover its geometric properties: <b>chords, tangents, angles at the centre and angles at the circumference</b>, and the special relationship it has with <b>inscribed and circumscribed polygons</b>. One result above all: the angle at the circumference is <b>half</b> the angle at the centre subtended by the same arc.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Circle and disc: the vocabulary",
      html: `<p>The <b>circle</b> (in Italian, <i>circonferenza</i>) is the locus of points in the plane at a fixed distance <b>r</b> (the <b>radius</b>) from a fixed point <b>O</b>, the <b>centre</b>. The <b>disc</b> (in Italian, <i>cerchio</i>) is the circle together with the part of the plane it encloses. It is the last of Euclid's three "constructive" postulates: given a centre and a radius, a circle can be drawn.</p>
<ul>
<li><b>Chord</b>: a segment joining two points of the circle. The longest chord passes through the centre and is called the <b>diameter</b> (d = 2r).</li>
<li><b>Arc</b>: a portion of the circle between two of its points. A chord determines two arcs; a diameter makes them equal (two <b>semicircles</b>).</li>
<li><b>Angle at the centre</b> (central angle): its vertex is at the centre O and its arms pass through the endpoints of the arc: it is <i>subtended</i> by that arc.</li>
<li><b>Angle at the circumference</b> (or <b>inscribed angle</b>): its vertex is <i>on</i> the circle and its arms are chords (or a chord and a tangent).</li>
<li><b>Sector</b> and <b>segment</b>: parts of a disc bounded respectively by two radii and an arc, or by a chord and an arc.</li>
</ul>
<p>Two arcs, two chords or two central angles in the <b>same circle</b> (or in congruent circles) correspond to each other: congruent arcs correspond to congruent chords and congruent central angles, and vice versa.</p>`
    },
    {
      type: "text",
      title: "Chords, diameters and tangents",
      html: `<p>Some fundamental properties, which are proved using congruent triangles:</p>
<ul>
<li>The <b>diameter</b> is the longest chord. A chord <i>not passing through the centre</i> is longer the closer it is to the centre.</li>
<li>The diameter perpendicular to a chord bisects it (and also bisects its arcs). Consequently <b>the perpendicular bisector of a chord passes through the centre</b>: to find the centre of a drawn circle, draw the perpendicular bisectors of two chords; the centre is where they intersect.</li>
<li>A line and a circle can be <b>secant</b> (two points in common), <b>tangent</b> (only one) or <b>external</b> (none). You can tell which by comparing the distance d of the line from the centre with the radius r: d &lt; r secant, d = r tangent, d &gt; r external.</li>
<li><b>The tangent is perpendicular to the radius</b> at the point of tangency.</li>
<li>From a point P <b>outside</b> the circle you can draw <b>two tangents</b>, and the two tangent segments PA and PB are <b>congruent</b>. The line PO bisects the angle APB.</li>
</ul>
<p>Two circles can also be in different positions: separate, externally tangent, intersecting, internally tangent, one inside the other. They are distinguished by comparing the distance between the centres with the sum and the difference of the radii.</p>`
    },
    {
      type: "svg",
      title: "The tangent and the two tangents from a point",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="100" cy="150" r="80" fill="#e0e7ff" stroke="#4338ca" stroke-width="4"/>
<line x1="100" y1="150" x2="131" y2="76" stroke="#1f2937" stroke-width="3"/>
<line x1="100" y1="150" x2="131" y2="224" stroke="#1f2937" stroke-width="3"/>
<line x1="308" y1="150" x2="131" y2="76" stroke="#dc2626" stroke-width="4"/>
<line x1="308" y1="150" x2="131" y2="224" stroke="#dc2626" stroke-width="4"/>
<line x1="100" y1="150" x2="308" y2="150" stroke="#9ca3af" stroke-width="2" stroke-dasharray="7 6"/>
<circle cx="100" cy="150" r="5" fill="#1f2937"/><circle cx="308" cy="150" r="6" fill="#1f2937"/>
<circle cx="131" cy="76" r="6" fill="#dc2626"/><circle cx="131" cy="224" r="6" fill="#dc2626"/>
<text x="76" y="172" font-size="18" fill="#1f2937" font-weight="bold">O</text>
<text x="318" y="156" font-size="18" fill="#1f2937" font-weight="bold">P</text>
<text x="136" y="68" font-size="18" fill="#b91c1c" font-weight="bold">A</text>
<text x="136" y="248" font-size="18" fill="#b91c1c" font-weight="bold">B</text>
<text x="380" y="80" font-size="16" fill="#1f2937">OA ⟂ PA and OB ⟂ PB</text>
<text x="380" y="115" font-size="16" fill="#b91c1c">PA = PB (congruent tangents)</text>
<text x="380" y="165" font-size="16" fill="#1f2937">Example: r = 5, OP = 13</text>
<text x="380" y="195" font-size="16" fill="#166534" font-weight="bold">PA² = 13² − 5² = 144</text>
<text x="380" y="225" font-size="16" fill="#166534" font-weight="bold">PA = PB = 12</text>
</svg>`,
      caption: "Triangle OAP is right-angled at A (radius ⟂ tangent): Pythagoras' theorem gives the length of the tangent."
    },
    {
      type: "remember",
      title: "Angle at the centre and angle at the circumference",
      html: `<p><b>Theorem.</b> Every angle at the circumference is <b>half</b> the angle at the centre subtended by the same arc.</p>
<p>Important consequences:</p>
<ul>
<li>All angles at the circumference subtended by the <b>same arc</b> are <b>congruent</b> to each other (wherever the vertex is on the opposite arc).</li>
<li>An angle at the circumference subtended by a <b>semicircle</b> is a <b>right angle</b>: its central angle is a straight angle (180°), and half of that is 90°. This is <b>Thales' theorem on the semicircle</b>.</li>
<li>If triangle ABC is inscribed in a semicircle with diameter AB, then it is <b>right-angled</b> at C. The converse is also true: the centre of the circle circumscribed about a right-angled triangle is the <b>midpoint of the hypotenuse</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Why half?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="120" fill="#ecfdf5" stroke="#166534" stroke-width="4"/>
<line x1="170" y1="150" x2="57" y2="191" stroke="#4338ca" stroke-width="4"/>
<line x1="170" y1="150" x2="283" y2="191" stroke="#4338ca" stroke-width="4"/>
<line x1="170" y1="30" x2="57" y2="191" stroke="#ea580c" stroke-width="4"/>
<line x1="170" y1="30" x2="283" y2="191" stroke="#ea580c" stroke-width="4"/>
<circle cx="170" cy="150" r="5" fill="#1f2937"/>
<circle cx="170" cy="30" r="6" fill="#ea580c"/><circle cx="57" cy="191" r="6" fill="#1f2937"/><circle cx="283" cy="191" r="6" fill="#1f2937"/>
<text x="180" y="146" font-size="16" fill="#4338ca" font-weight="bold">140°</text>
<text x="176" y="62" font-size="16" fill="#c2410c" font-weight="bold">70°</text>
<text x="176" y="26" font-size="16" fill="#1f2937">P</text>
<text x="28" y="212" font-size="16" fill="#1f2937">B</text>
<text x="290" y="212" font-size="16" fill="#1f2937">C</text>
<text x="156" y="170" font-size="16" fill="#1f2937">O</text>
<circle cx="460" cy="200" r="110" fill="#fef9c3" stroke="#a16207" stroke-width="4"/>
<line x1="350" y1="200" x2="570" y2="200" stroke="#1f2937" stroke-width="4"/>
<line x1="350" y1="200" x2="515" y2="105" stroke="#dc2626" stroke-width="4"/>
<line x1="570" y1="200" x2="515" y2="105" stroke="#dc2626" stroke-width="4"/>
<circle cx="350" cy="200" r="6" fill="#1f2937"/><circle cx="570" cy="200" r="6" fill="#1f2937"/><circle cx="515" cy="105" r="6" fill="#dc2626"/>
<rect x="499" y="116" width="14" height="14" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="330" y="222" font-size="16" fill="#1f2937">A</text>
<text x="574" y="222" font-size="16" fill="#1f2937">B</text>
<text x="522" y="98" font-size="16" fill="#1f2937">C</text>
<text x="412" y="250" font-size="16" fill="#a16207" font-weight="bold">AB diameter → 90°</text>
</svg>`,
      caption: "Left: central angle 140° and angle at the circumference 70° on the same arc BC. Right: the angle subtended by a diameter is always a right angle."
    },
    {
      type: "example",
      title: "How it is proved (the idea)",
      html: `<p>Take an angle at the circumference BPC with the centre O inside it and draw the radius OP. Triangles OPB and OPC are <b>isosceles</b> (two sides are radii). By the exterior angle theorem, the central angle BOP equals the sum of the two base angles, so it is <b>twice</b> the angle OPB. The same happens on the other side, with COP and OPC. Adding the two parts: <b>BOC = 2 · BPC</b>.</p>
<p>Numerical example: the central angle BOC measures 140°. Any point P on the "major" arc sees BC at an angle of 70°. If you move P along the arc, the angle does not change: this is the basis of instruments that measure angles and of the construction of <b>arcs of a given angle</b> used in surveying.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: circles and angles",
      questions: [
        { type: "num", q: "An angle at the centre of a circle measures 100°. What is the angle at the circumference subtended by the same arc?", answer: 50, unit: "°", explain: "The angle at the circumference is half the angle at the centre: 100° / 2 = 50°." },
        { type: "mc", q: "A triangle is inscribed in a semicircle with one side along the diameter. What kind of triangle is it?", options: ["Equilateral", "Right-angled", "Obtuse"], answer: 1, explain: "The angle opposite the diameter is an angle at the circumference on a semicircle, so it is 90°." },
        { type: "tf", q: "The tangent to a circle at a point is perpendicular to the radius ending at that point.", answer: true, explain: "This is the fundamental property of the tangent: the radius at the point of tangency is perpendicular to it." },
        { type: "num", q: "From a point P, tangents are drawn to a circle of radius 6 cm. The distance from P to the centre is 10 cm. How long is each tangent PA?", answer: 8, unit: "cm", explain: "OAP is right-angled at A: PA = √(10² − 6²) = √64 = 8 cm." }
      ]
    },
    {
      type: "text",
      title: "Inscribed and circumscribed polygons",
      html: `<p>A polygon is <b>inscribed</b> in a circle if all its vertices lie on the circle; the circle is then said to be <b>circumscribed</b> about the polygon. A polygon is <b>circumscribed</b> about a circle if all its sides are tangent to it; the circle is <b>inscribed</b> in the polygon.</p>
<p><b>Triangles</b>: every triangle can always be both inscribed and circumscribed.</p>
<ul>
<li>The circumscribed circle (circumcircle) has its centre at the <b>circumcentre</b>, where the <b>perpendicular bisectors of the sides</b> meet (every point on a perpendicular bisector is equidistant from the endpoints of the side). The circumcentre is inside the triangle if it is acute, at the midpoint of the hypotenuse if it is right-angled, and outside if it is obtuse.</li>
<li>The inscribed circle (incircle) has its centre at the <b>incentre</b>, where the <b>angle bisectors</b> meet (every point on an angle bisector is equidistant from the arms of the angle). Its radius is the distance from the incentre to the sides.</li>
</ul>
<p><b>Quadrilaterals</b>: not all of them can be inscribed or circumscribed.</p>
<ul>
<li>A quadrilateral can be <b>inscribed</b> in a circle (it is cyclic) if and only if its <b>opposite angles are supplementary</b> (they add up to 180°). So squares, rectangles and isosceles trapeziums can be inscribed; a rhombus that is not a square cannot, nor can a general parallelogram.</li>
<li>A quadrilateral can be <b>circumscribed</b> about a circle (it is tangential) if and only if <b>the sum of two opposite sides equals the sum of the other two</b> (Pitot's theorem). Squares, rhombuses and kites can be circumscribed; a rectangle that is not a square cannot.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Inscribable, circumscribable, both or neither?",
      widget: "classify",
      options: { groups: ["Inscribable", "Circumscribable", "Both", "Neither"], items: [
        ["Square", 2],
        ["Rectangle (not a square)", 0],
        ["Rhombus (not a square)", 1],
        ["Isosceles trapezium", 0],
        ["General parallelogram", 3],
        ["Any triangle", 2],
        ["Kite", 1]
      ] },
      caption: "Remember: inscribable = opposite angles supplementary; circumscribable = equal sums of opposite sides. An isosceles trapezium is inscribable but, in general, not circumscribable."
    },
    {
      type: "example",
      title: "Examples: two calculations with quadrilaterals",
      html: `<p><b>1.</b> Quadrilateral ABCD is inscribed in a circle and the angle at A measures 72°. Then the opposite angle C is 180° − 72° = <b>108°</b>. If the angle at B measures 95°, the angle at D is 180° − 95° = 85°.</p>
<p><b>2.</b> A quadrilateral circumscribed about a circle has three consecutive sides of 7 cm, 9 cm and 10 cm. By Pitot's theorem the sums of opposite sides are equal, so AB + CD = BC + DA. With AB = 7, BC = 9, CD = 10 the fourth side is DA = 7 + 10 − 9 = <b>8 cm</b>. The perimeter is 34 cm.</p>
<p><b>In real life</b>: if you want to cut the largest possible wheel from a triangular board, its centre is the incentre and its radius is the distance to the sides. If instead you want to put a post equidistant from three trees, you place it at the circumcentre of the triangle formed by the trees.</p>`
    },
    {
      type: "text",
      title: "Regular polygons",
      html: `<p>A polygon is <b>regular</b> if all its sides and all its angles are congruent. Every regular polygon can be <b>both inscribed and circumscribed</b>, and the two circles have the <b>same centre</b>, called the <b>centre of the polygon</b>.</p>
<ul>
<li>The <b>radius</b> R of the circumscribed circle joins the centre to a vertex.</li>
<li>The <b>apothem</b> a is the radius of the inscribed circle: it joins the centre to the midpoint of a side and is perpendicular to it.</li>
<li>The central angle subtended by one side measures 360° / n; the interior angle measures 180° · (n − 2) / n (hexagon: 120°).</li>
<li>The <b>area</b> of a regular polygon is A = <b>(perimeter × apothem) / 2</b>: it is divided into n congruent isosceles triangles with the side as base and the apothem as height. The formula holds in general for any polygon circumscribed about a circle, with the radius in place of the apothem.</li>
</ul>
<p><b>Three fixed numbers</b> (apothem / side ratio):</p>
<ul>
<li>Equilateral triangle: a = l · √3 / 6 and R = l · √3 / 3 (R = 2a).</li>
<li>Square: a = l / 2 and R = l · √2 / 2.</li>
<li>Regular hexagon: a = l · √3 / 2 and <b>R = l</b>: the side of a regular hexagon equals the radius. Why? The triangle formed by two radii and a side has a central angle of 60° and is isosceles: so it is equilateral.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Archimedes and the number π",
      html: `<p>The ratio between the circumference of a circle and its diameter is always the same number, <b>π (pi)</b> ≈ 3.14159. Around the 3rd century BC <b>Archimedes</b> calculated it by <b>trapping</b> the circle between an inscribed and a circumscribed regular polygon, doubling the number of sides up to 96. He found that 223/71 &lt; π &lt; 22/7, that is between 3.1408 and 3.1429. The circumference of the circle is greater than the perimeter of the inscribed polygon and smaller than that of the circumscribed one: the more sides the polygon has, the tighter the "cage". This idea lies at the heart of calculus, which you will meet in the last three years of the <i>liceo</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The pentagon and Gauss's construction",
      html: `<p>With straightedge and compasses, Euclid could inscribe the regular triangle, square, pentagon and hexagon in a circle. For over two thousand years nobody found any other constructible regular polygons. In 1796, aged just 19, <b>Carl Friedrich Gauss</b> proved that the <b>regular 17-sided polygon</b> can also be constructed: he was so proud of it that, according to tradition, he wanted a heptadecagon on his tombstone. He then established exactly which regular polygons are constructible: for example, the 7-sided and 9-sided polygons are not.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the circle",
      intro: "If the theorems seem abstract, try looking at them from another angle.",
      tabs: [
        {
          label: "🧭 The circle as a locus",
          html: `<p>Think of the circle as a <b>rule</b> rather than a shape: "all the points at distance r from O". If you hold a taut string with a peg at the centre and a piece of chalk at the other end, you draw a circle (this is how gardeners mark out round flower beds). All the properties follow from this definition: the radii are all equal, so triangles with two radii as sides are isosceles, and <b>that is where the equal angles</b> you use in proofs come from.</p>`
        },
        {
          label: "🎯 The viewing angle",
          html: `<p><b>A picture of the angle at the circumference</b>: imagine a chord BC as a "cinema screen" and a person P sitting on the circle on the opposite side. If P moves along the arc, they always see the screen at the <b>same angle</b> (70° in the example). If they sit inside the circle they see it bigger; if they move outside they see it smaller. This is why circular stadiums and semicircular halls give everyone the same view of the edge of the stage.</p>`
        },
        {
          label: "⬡ The hexagon: six equilateral triangles",
          html: `<p>Draw a circle with radius R and, without changing the opening of your compasses, "step" six times around the circle: you get back exactly to the starting point. The six points are the vertices of a regular hexagon, because each of the six triangles with the centre has two sides equal to R and an angle of 60°: it is equilateral, so the side of the hexagon is also R. The flower drawn with compasses (the "flower of life") comes from this construction.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="200" cy="150" r="100" fill="#fef9c3" stroke="#a16207" stroke-width="3"/>
<polygon points="300,150 250,236.6 150,236.6 100,150 150,63.4 250,63.4" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<line x1="200" y1="150" x2="300" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="250" y2="236.6" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="150" y2="236.6" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="100" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="150" y2="63.4" stroke="#4338ca" stroke-width="3"/>
<line x1="200" y1="150" x2="250" y2="63.4" stroke="#4338ca" stroke-width="3"/>
<circle cx="200" cy="150" r="5" fill="#1f2937"/>
<text x="360" y="110" font-size="16" fill="#1f2937">6 equilateral triangles</text>
<text x="360" y="140" font-size="16" fill="#4338ca">side = radius R</text>
<text x="360" y="170" font-size="16" fill="#1f2937">central angle = 60°</text>
<text x="360" y="200" font-size="16" fill="#166534" font-weight="bold">perimeter = 6R</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: circles and polygons",
      nodes: [
        { id: "circ", label: "Circle", x: 50, y: 6, color: "#6366f1", html: "The locus of points at distance r from the centre.", why: "It is the 'constructible' figure par excellence: Euclid's third postulate says that, given a centre and a radius, it can be drawn. All its properties come from the fact that the radii are equal." },
        { id: "tang", label: "Tangents", x: 15, y: 30, color: "#f59e0b", html: "Tangent ⟂ radius; the two tangents from an external point are congruent.", why: "The tangent is the line with only one point in common: it is the limiting position of a secant as the two points get closer. This idea will lead to the derivative." },
        { id: "ang", label: "Angle at the centre / at the circumference", x: 70, y: 30, color: "#a855f7", html: "The inscribed angle is half the central angle on the same arc.", why: "It is proved by splitting into isosceles triangles (two sides are radii) and using the exterior angle. Euclid's Elements deals with it in Book III." },
        { id: "semi", label: "Semicircle → 90°", x: 85, y: 58, color: "#ef4444", html: "A triangle with a diameter as one side and its vertex on the circle is right-angled.", why: "The special case in which the central angle is a straight angle (180°). Attributed to Thales, it is the key to constructing tangents and finding the centre of a circle." },
        { id: "ins", label: "Inscribed and circumscribed", x: 30, y: 58, color: "#16a34a", html: "Triangles always; quadrilaterals only under conditions.", why: "The circumcentre (perpendicular bisectors) and the incentre (angle bisectors) come from the locus of points equidistant from two points or from two lines. For quadrilaterals you need 4 points on the same circle: too much to expect in general." },
        { id: "reg", label: "Regular polygons", x: 50, y: 85, color: "#0ea5e9", html: "Inscribable and circumscribable, with a common centre; area = perimeter × apothem / 2.", why: "Full symmetry makes the circumcentre and incentre coincide. With more and more sides the polygon gets closer to the circle: this is Archimedes' method for π." }
      ],
      edges: [
        ["circ", "tang", "has"],
        ["circ", "ang", "has"],
        ["ang", "semi", "case with 180°"],
        ["circ", "ins", "combines with"],
        ["ins", "reg", "most symmetric case"],
        ["semi", "ins", "used for"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: inscribed and regular polygons",
      questions: [
        { type: "tf", q: "A parallelogram that is not a rectangle can be inscribed in a circle.", answer: false, explain: "A parallelogram has equal opposite angles: they would be supplementary only if all were 90°, that is if it were a rectangle." },
        { type: "num", q: "A regular hexagon has sides of 8 cm. What is the radius of the circumscribed circle?", answer: 8, unit: "cm", explain: "In a regular hexagon the radius equals the side." },
        { type: "num", q: "A regular polygon has a perimeter of 60 cm and an apothem of 8 cm. What is its area?", answer: 240, unit: "cm²", explain: "A = perimeter × apothem / 2 = 60 × 8 / 2 = 240 cm²." },
        { type: "mc", q: "Where is the centre of the circle circumscribed about a right-angled triangle?", options: ["At the vertex of the right angle", "At the midpoint of the hypotenuse", "At the centroid"], answer: 1, explain: "The hypotenuse is a diameter (a right angle inscribed in a semicircle): the centre is its midpoint." }
      ]
    }
  ],
  glossary: [
    { t: "Circle", d: "The locus of points in the plane equidistant from a point called the centre." },
    { t: "Chord and diameter", d: "A chord joins two points of the circle; the diameter is the chord through the centre." },
    { t: "Angle at the centre", d: "An angle with its vertex at the centre of the circle." },
    { t: "Angle at the circumference", d: "An angle with its vertex on the circle; it is half the angle at the centre subtended by the same arc." },
    { t: "Tangent", d: "A line with only one point in common with the circle; it is perpendicular to the radius at the point of tangency." },
    { t: "Secant", d: "A line that intersects the circle at two points." },
    { t: "Inscribed polygon", d: "A polygon with all its vertices on the circle." },
    { t: "Circumscribed polygon", d: "A polygon with all its sides tangent to the circle." },
    { t: "Circumcentre and incentre", d: "The centres of the circumscribed circle (perpendicular bisectors of the sides) and the inscribed circle (angle bisectors) of a triangle." },
    { t: "Apothem", d: "The radius of the circle inscribed in a regular polygon, perpendicular to a side." },
    { t: "Regular polygon", d: "A polygon with all sides and all angles congruent." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the relationship between an angle at the circumference and the angle at the centre subtended by the same arc?", options: ["They are equal", "The angle at the circumference is half", "The angle at the circumference is double"], answer: 1, explain: "The theorem states that the angle at the circumference is half the corresponding angle at the centre." },
      { type: "num", q: "The central angle BOC measures 112°. What is the angle at the circumference subtended by BC?", answer: 56, unit: "°", explain: "112° / 2 = 56°." },
      { type: "tf", q: "The tangent to a circle at a point is parallel to the radius at that point.", answer: false, explain: "It is perpendicular to the radius at the point of tangency." },
      { type: "num", q: "A circle has radius 9 cm. Two tangents are drawn from a point P 15 cm from the centre. How long is each one?", answer: 12, unit: "cm", explain: "PA = √(15² − 9²) = √144 = 12 cm." },
      { type: "mc", q: "Which quadrilateral can always be inscribed in a circle?", options: ["The rhombus", "The rectangle", "Any parallelogram"], answer: 1, explain: "A rectangle has opposite angles of 90° + 90° = 180°: they are supplementary." },
      { type: "num", q: "An inscribed quadrilateral ABCD has angle B = 64°. What is the opposite angle D?", answer: 116, unit: "°", explain: "Opposite angles of an inscribed quadrilateral are supplementary: 180° − 64° = 116°." },
      { type: "text", q: "What is the point where the angle bisectors of a triangle meet, the centre of the inscribed circle, called?", answer: ["incentre", "the incentre", "incenter", "the incenter"], explain: "The incentre is equidistant from the three sides: it is the centre of the inscribed circle." },
      { type: "mc", q: "A quadrilateral has consecutive sides of 5, 8, 9 and 6 cm (in that order). Can it be circumscribed about a circle?", options: ["Yes: 5 + 9 = 8 + 6", "No: 5 + 9 ≠ 8 + 6", "Yes, because it has 4 sides"], answer: 0, explain: "Pitot's theorem: opposite sides 5 and 9, and 8 and 6; 5 + 9 = 14 = 8 + 6, so it can be circumscribed." },
      { type: "order", q: "Put the steps for finding the centre of a drawn circle in order.", items: ["Draw two non-parallel chords", "Draw the perpendicular bisector of each chord", "Find where the bisectors intersect", "That point is the centre"], explain: "The perpendicular bisectors of chords pass through the centre: where they meet is the centre." },
      { type: "num", q: "A regular hexagon has sides of 10 cm. What is its perimeter?", answer: 60, unit: "cm", explain: "6 sides of 10 cm: 6 × 10 = 60 cm." }
    ]
  }
});
