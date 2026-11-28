TOPIC('en', {
  id: "l3-mat-retta-analitica",
  title: "Analytic geometry: the straight line",
  intro: "How does a maps app find the point closest to a road, tell you how far a shop is from a straight stretch of road, or describe \"all the points equidistant from two houses\"? With <b>coordinates</b>, geometry becomes calculation. Having seen the equation of a line in your second year, today we make it the star: <b>families of lines</b> (infinitely many lines described by a single equation with a parameter), <b>point-to-line distance</b>, <b>angles</b>, <b>angle bisectors</b>, <b>areas</b> and <b>loci</b>.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Recap: the line and its tools",
      html: `<p>Let's recall the basics without starting from scratch (if necessary, review the second-year lesson on the Cartesian plane and the line). A line can be written in <b>general (implicit) form</b> ax + by + c = 0 or in <b>slope-intercept (explicit) form</b> y = mx + q (if it is not vertical; vertical lines are x = k). Tools you already know:</p>
<ul>
<li><b>Gradient (slope)</b> through two points: m = (y₂ − y₁)/(x₂ − x₁); for ax + by + c = 0 (b ≠ 0) it is <b>m = −a/b</b>.</li>
<li>Line through P(x₀, y₀) with gradient m: <b>y − y₀ = m(x − x₀)</b>.</li>
<li>Parallel lines: m = m′; perpendicular lines: m·m′ = −1 (in general form: the vectors (a, b) and (a′, b′) are multiples of each other, or orthogonal: aa′ + bb′ = 0).</li>
<li>Distance between two points and midpoint.</li>
</ul>
<p>In this lesson we take a leap: instead of a single line, we reason about <b>families</b> of lines and about <b>sets of points satisfying a property</b> (loci). This is how analytic geometry proves theorems and solves optimisation problems.</p>`
    },
    {
      type: "text",
      title: "Distance from a point to a line",
      html: `<p>The distance from a point P to a line r is the length of the segment PH, where H is the <b>orthogonal projection</b> of P onto r (the "foot" of the perpendicular): it is the <b>shortest</b> distance between P and the points of the line. For P(x₀, y₀) and r: ax + by + c = 0:</p>
<p style="text-align:center"><b>d(P, r) = |a x₀ + b y₀ + c| / √(a² + b²)</b></p>
<p><b>Why it works</b>: the vector (a, b) is perpendicular to the line (the "normal vector"); the quantity a x₀ + b y₀ + c measures how far P is from the line, multiplied by √(a² + b²), the length of (a, b). Dividing gives the true distance. The sign of the expression (before taking the absolute value) tells you <b>which side</b> of the line P is on.</p>
<p><b>Example 1.</b> Distance from P(3, 4) to the line 3x − 4y + 10 = 0: |9 − 16 + 10|/√(9 + 16) = 3/5 = <b>0.6</b>.</p>
<p><b>Example 2 (parallel lines).</b> The distance between two parallel lines r: 2x + y − 1 = 0 and s: 2x + y + 4 = 0 is the distance from any point of r to s. On r take, for example, (0, 1) → |0 + 1 + 4|/√5 = 5/√5 = <b>√5</b>. In general, for ax + by + c₁ = 0 and ax + by + c₂ = 0: d = |c₁ − c₂|/√(a² + b²).</p>
<p><b>Example 3 (line at a given distance).</b> Find the lines through P(1, 2) at distance 1 from the origin. The family is y − 2 = m(x − 1), that is mx − y + 2 − m = 0. The distance from O: |2 − m|/√(m² + 1) = 1 → (2 − m)² = m² + 1 → 4 − 4m = 1 → <b>m = 3/4</b>: 3x − 4y + 5 = 0. But careful: the <b>vertical line x = 1</b> passes through P and is at distance 1 from O, and the family "with m" does not contain it: the solutions are <b>3x − 4y + 5 = 0 and x = 1</b>. Always check the vertical line!</p>`
    },
    {
      type: "svg",
      title: "Point-to-line distance",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="270" x2="430" y2="85" stroke="#2563eb" stroke-width="4"/>
<line x1="250" y1="70" x2="285" y2="144" stroke="#dc2626" stroke-width="4"/>
<line x1="250" y1="70" x2="170" y2="190" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="250" y1="70" x2="370" y2="115" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<polyline points="278,137 285,140 281,147" fill="none" stroke="#dc2626" stroke-width="2"/>
<circle cx="250" cy="70" r="7" fill="#16a34a"/>
<circle cx="285" cy="144" r="6" fill="#dc2626"/>
<text x="228" y="62" font-size="16" fill="#166534" font-weight="bold" text-anchor="end">P(x₀, y₀)</text>
<text x="298" y="160" font-size="16" fill="#991b1b" font-weight="bold">H</text>
<text x="300" y="100" font-size="16" fill="#991b1b" font-weight="bold">d</text>
<text x="400" y="150" font-size="16" fill="#1d4ed8" font-weight="bold">r: ax + by + c = 0</text>
<text x="440" y="195" font-size="16" fill="#334155">d = |ax₀ + by₀ + c|</text>
<text x="472" y="218" font-size="16" fill="#334155">/ √(a² + b²)</text>
<text x="440" y="255" font-size="14" fill="#64748b">The other distances (dashed)</text>
<text x="440" y="273" font-size="14" fill="#64748b">are longer: PH is the shortest.</text>
</svg>`,
      caption: "The distance from P to the line r is the length of the perpendicular PH: of all the segments from P to a point on the line, it is the shortest."
    },
    {
      type: "text",
      title: "Families of lines",
      html: `<p>A <b>family (pencil) of lines</b> is a set of infinitely many lines described by an equation containing a <b>parameter</b> (usually k or m).</p>
<ul>
<li><b>Pencil through a point</b> (centre C(x₀, y₀)): all the lines through C. Equation: <b>y − y₀ = m(x − x₀)</b> (as m varies), to which you must add separately the <b>vertical line x = x₀</b>.</li>
<li><b>Family of parallel lines</b>: all the lines are <b>parallel</b> (centre "at infinity"). For example <b>y = m₀x + k</b> with m₀ fixed and k varying; or x = k for vertical lines.</li>
<li><b>Family generated by two lines</b> r: ax + by + c = 0 and s: a′x + b′y + c′ = 0: <b>(ax + by + c) + k(a′x + b′y + c′) = 0</b>. If r and s intersect, the family is a pencil through a point, with its centre at their point of intersection; if they are parallel, it is a family of parallel lines. The value k = 0 gives r; the line s is obtained "in the limit" (k → ∞): it must be checked separately.</li>
</ul>
<p><b>Example.</b> Family generated by r: x + y − 3 = 0 and s: x − y + 1 = 0: (x + y − 3) + k(x − y + 1) = 0. The centre is the intersection: x + y = 3, x − y = −1 → x = 1, y = 2, that is C(1, 2). To find the line of the family that passes through the origin, impose O: (−3) + k(1) = 0 → k = 3, so 4x − 2y = 0, that is <b>y = 2x</b>: it does indeed pass through (1, 2) ✔️.</p>
<p><b>What families are for</b>: finding lines that satisfy <b>one condition</b> without first calculating the intersection: all you need is the family and the condition (passing through a point, a given distance, being parallel or perpendicular to another line), from which you find the parameter. You "pay" one condition for each parameter.</p>
<p><b>A notable case</b>: the line through a point P perpendicular to a line r: use the pencil through P and the condition m·m_r = −1; or, in general form, if r: ax + by + c = 0, the perpendicular through P(x₀, y₀) is <b>b(x − x₀) − a(y − y₀) = 0</b>. Example: through P(2, 1) perpendicular to 3x + 4y − 1 = 0: 4(x − 2) − 3(y − 1) = 0 → 4x − 3y − 5 = 0.</p>`
    },
    {
      type: "svg",
      title: "A pencil through a point and a family of parallel lines",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#2563eb" stroke-width="3">
<line x1="40" y1="150" x2="260" y2="150"/>
<line x1="40" y1="230" x2="260" y2="70"/>
<line x1="40" y1="70" x2="260" y2="230"/>
<line x1="150" y1="30" x2="150" y2="270"/>
<line x1="70" y1="270" x2="230" y2="30"/>
</g>
<circle cx="150" cy="150" r="8" fill="#dc2626"/>
<text x="160" y="140" font-size="16" fill="#991b1b" font-weight="bold">C</text>
<text x="40" y="288" font-size="16" fill="#1d4ed8" font-weight="bold">pencil through C</text>
<g stroke="#ea580c" stroke-width="3">
<line x1="350" y1="270" x2="520" y2="60"/>
<line x1="390" y1="285" x2="560" y2="75"/>
<line x1="430" y1="300" x2="590" y2="105"/>
<line x1="310" y1="245" x2="480" y2="35"/>
</g>
<text x="330" y="22" font-size="16" fill="#9a3412" font-weight="bold">parallel family</text>
<text x="330" y="288" font-size="14" fill="#64748b">(parallel lines)</text>
</svg>`,
      caption: "Left: all the lines pass through the centre C. Right: the lines are parallel; they have the same gradient and differ in their intercept."
    },
    {
      type: "quiz",
      title: "Mini-quiz: distance and families",
      questions: [
        { type: "num", q: "Distance from the origin to the line 3x + 4y − 15 = 0.", answer: 3, explain: "|−15|/√(9 + 16) = 15/5 = 3." },
        { type: "mc", q: "The family of lines y − 3 = m(x − 2) has its centre at…", options: ["(3, 2)", "(2, 3)", "(−2, −3)"], answer: 1, explain: "It is the pencil of lines through P(x₀, y₀) = (2, 3)." },
        { type: "tf", q: "The equation y − y₀ = m(x − x₀) also includes the vertical line x = x₀.", answer: false, explain: "The vertical line has no gradient: it must be added separately." }
      ]
    },
    {
      type: "text",
      title: "Angles between lines and angle bisectors",
      html: `<p><b>Angle between two</b> non-vertical <b>lines</b> with gradients m₁ and m₂: if θ is the acute (or right) angle between them,</p>
<p style="text-align:center"><b>tan θ = | (m₂ − m₁) / (1 + m₁m₂) |</b></p>
<p>(if 1 + m₁m₂ = 0 the lines are perpendicular: θ = 90°). The formula comes from the tangent subtraction formula, which you will see in trigonometry: m = tan α, where α is the angle of inclination of the line. Example: y = 2x and y = x/3: tan θ = |(1/3 − 2)/(1 + 2/3)| = (5/3)/(5/3) = 1 → θ = <b>45°</b>.</p>
<p>The <b>bisectors</b> of the angles formed by two intersecting lines r: ax + by + c = 0 and s: a′x + b′y + c′ = 0 are the locus of points <b>equidistant</b> from the two lines, so we impose</p>
<p style="text-align:center"><b>|ax + by + c| / √(a² + b²) = |a′x + b′y + c′| / √(a′² + b′²)</b></p>
<p>which splits into two lines (the + sign and the − sign): the two bisectors, perpendicular to each other.</p>
<p><b>Example.</b> r: 3x − 4y + 1 = 0 and s: 4x + 3y − 2 = 0 (both with √(a² + b²) = 5). The bisectors: 3x − 4y + 1 = ±(4x + 3y − 2). With +: −x − 7y + 3 = 0 → <b>x + 7y − 3 = 0</b>. With −: 7x − y − 1 = 0 → <b>7x − y − 1 = 0</b>. The gradients −1/7 and 7 have product −1: they are perpendicular ✔️. (And since r and s are already perpendicular to each other, the bisectors make 45° with each of them.)</p>`
    },
    {
      type: "text",
      title: "Areas and collinearity",
      html: `<p>The <b>area of a triangle</b> with vertices A(x₁, y₁), B(x₂, y₂), C(x₃, y₃) is</p>
<p style="text-align:center"><b>Area = ½ · | x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂) |</b></p>
<p>(the "shoelace formula", attributed to Gauss, or ½|det|). If the area is <b>zero</b>, the three points are <b>collinear</b>. Alternatively: base = AB (distance), height = distance from C to the line AB; Area = ½ · AB · h.</p>
<p><b>Example.</b> A(0, 0), B(4, 1), C(1, 3). Area = ½|0 + 4(3 − 0) + 1(0 − 1)| = ½|12 − 1| = <b>5.5</b>. Check with base and height: AB = √17; line AB: x − 4y = 0; distance from C: |1 − 12|/√17 = 11/√17; Area = ½ · √17 · 11/√17 = 5.5 ✔️.</p>
<p><b>Collinearity.</b> The points A(1, 1), B(3, 5), C(5, 9): m_AB = 2, m_BC = 2: they are equal, so the points are collinear (area = ½|1(5 − 9) + 3(9 − 1) + 5(1 − 5)| = ½|−4 + 24 − 20| = 0 ✔️).</p>`
    },
    {
      type: "text",
      title: "Loci",
      html: `<p>A <b>locus</b> is the set of <b>all and only</b> the points of the plane that have a certain property. Analytic geometry lets us find its <b>equation</b>: take a general point P(x, y), translate the property into a relationship between x and y, and simplify.</p>
<ul>
<li><b>Perpendicular bisector of a segment AB</b>: the locus of points equidistant from A and B. For A(0, 0) and B(4, 2): PA² = PB² → x² + y² = (x − 4)² + (y − 2)² → 0 = −8x + 16 − 4y + 4 → <b>2x + y − 5 = 0</b>. (Check: it passes through the midpoint (2, 1): 4 + 1 − 5 = 0 ✔️; gradient −2, perpendicular to AB, which has gradient ½ ✔️.)</li>
<li><b>Angle bisectors</b>: the points equidistant from two lines (seen above).</li>
<li><b>Lines parallel to a given line at distance h</b>: |ax + by + c|/√(a² + b²) = h → two parallel lines. For y = x (that is x − y = 0) and h = 2: |x − y| = 2√2, that is x − y = ±2√2.</li>
<li><b>Points P such that the area of ABP is constant</b>: P is at a constant distance from AB: two lines parallel to AB.</li>
<li><b>Circle</b>: the locus of points at distance r from a centre (we'll see it in the next lessons); <b>parabola</b>, <b>ellipse</b>, <b>hyperbola</b>: loci defined by distances from a point and a line, or from two points (the conic sections).</li>
</ul>
<p><b>Method</b>: (1) draw the situation; (2) choose the coordinates (it often helps to put the given points in convenient positions, such as A(0, 0)); (3) translate the property using the distance formulas; (4) simplify; (5) recognise the curve and check special cases (excluded points, impossible values).</p>
<p><b>Example: the fixed difference.</b> Find the locus of points P(x, y) such that PA² − PB² = 8, with A(0, 0) and B(4, 0). We get x² + y² − (x − 4)² − y² = 8 → 8x − 16 = 8 → <b>x = 3</b>: a vertical line (perpendicular to AB). In general, a constant PA² − PB² always gives a line perpendicular to AB.</p>`
    },
    {
      type: "example",
      title: "Real-life example: where to build the cycle path?",
      html: `<p>On a map in metres, a straight road has equation 3x + 4y − 120 = 0 (the road passes through (40, 0) and (0, 30)). A school is located at S(10, 5). The council wants to build a cycle link perpendicular to the road. How long will it be, and where will it meet the road?</p>
<ul>
<li>Length of the link = distance from S to the road: |30 + 20 − 120|/5 = 70/5 = <b>14 m</b>.</li>
<li>Line of the link: perpendicular to the road through S: 4(x − 10) − 3(y − 5) = 0 → 4x − 3y − 25 = 0.</li>
<li>Point where it meets the road: system { 3x + 4y = 120 ; 4x − 3y = 25 } → multiplying: 9x + 12y = 360 and 16x − 12y = 100, adding 25x = 460 → x = 18.4; y = (120 − 55.2)/4 = 16.2. H(18.4; 16.2). Check: distance SH = √(8.4² + 11.2²) = √(70.56 + 125.44) = √196 = 14 ✔️.</li>
</ul>`
    },
    {
      type: "example",
      title: "Real-life example: the equidistant delivery point",
      html: `<p>Two warehouses are at A(0, 0) and B(8, 6) (coordinates in km). A courier wants to stop at a point that is the same distance from both warehouses <b>and</b> on the straight road y = 2x − 5. Where is the point?</p>
<p>The locus of points equidistant from A and B is the perpendicular bisector of the segment: x² + y² = (x − 8)² + (y − 6)² → 0 = −16x + 64 − 12y + 36 → 4x + 3y − 25 = 0. Intersecting with y = 2x − 5: 4x + 6x − 15 − 25 = 0 → 10x = 40 → x = 4, y = 3. The point is <b>(4, 3)</b>: as you can see, it is also the midpoint of AB, because the road passes exactly through the midpoint. Distance from each warehouse: 5 km.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? From algebra to proof",
      html: `<p>Many theorems of Euclidean geometry can be proved in a few lines with coordinates. For example, "the diagonals of a parallelogram bisect each other" becomes: if the vertices are O(0, 0), A(a, 0), C(c, d) and B(a + c, d), the midpoint of OB is ((a + c)/2 ; d/2) and that of AC is ((a + c)/2 ; d/2): they coincide. This approach, which Descartes described in <i>La Géométrie</i> (1637), made geometry "mechanisable": even today, dynamic geometry software and automatic theorem provers work precisely with coordinates.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? When a line is the whole answer: regression",
      html: `<p>Statisticians look for the line that "best" fits a cloud of points: it is the <b>regression line</b>, chosen so as to minimise the sum of the squares of the (vertical) distances of the points from the line. It is a modern, everyday use of analytic geometry: forecasts of consumption, sales trends, relationships between height and weight. We will talk about it in the last lesson of this year (bivariate statistics).</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand point-to-line distance",
      intro: "The formula with an absolute value and a square root can look like a magic spell: here is where it comes from and how to work it out again.",
      tabs: [
        {
          label: "📐 With the perpendicular",
          html: `<p>Do everything as in the geometric problem: (1) the line through P perpendicular to r; (2) its intersection H with r (a system); (3) the distance PH with Pythagoras. The result is identical to the formula, but with more steps: the formula is the general shortcut. For P(1, 1) and r: y = 2x − 4 (2x − y − 4 = 0): perpendicular through P: gradient −½ → y − 1 = −½(x − 1) → x + 2y − 3 = 0; intersection with y = 2x − 4: x + 4x − 8 − 3 = 0 → x = 11/5, y = 2/5; PH = √((6/5)² + (3/5)²) = √(45)/5 = 3√5/5. With the formula: |2 − 1 − 4|/√5 = 3/√5 = 3√5/5 ✔️.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="60" y1="260" x2="360" y2="110" stroke="#2563eb" stroke-width="4"/><line x1="200" y1="70" x2="260" y2="190" stroke="#dc2626" stroke-width="3" stroke-dasharray="7 5"/><circle cx="200" cy="70" r="7" fill="#16a34a"/><circle cx="260" cy="190" r="6" fill="#dc2626"/><text x="180" y="62" font-size="16" fill="#166534" font-weight="bold" text-anchor="end">P</text><text x="272" y="205" font-size="16" fill="#991b1b" font-weight="bold">H</text><text x="380" y="115" font-size="16" fill="#1d4ed8" font-weight="bold">r</text><text x="380" y="180" font-size="16" fill="#334155">1) perpendicular through P</text><text x="380" y="205" font-size="16" fill="#334155">2) intersection H with r</text><text x="380" y="230" font-size="16" fill="#334155">3) distance PH</text></svg>`
        },
        {
          label: "🔄 With the area",
          html: `<p>Take any two points A and B on the line r and the triangle ABP. Its area can be calculated in two ways: from the vertices (shoelace formula) or as ½·AB·d, where d is exactly the distance from P to r (the height relative to AB). Setting them equal, d = 2·Area/AB. The line r: 3x + 4y − 12 = 0 passes through A(4, 0) and B(0, 3); with P(0, 0): Area = ½·4·3 = 6, AB = 5, so d = 12/5 = 2.4. The formula gives |−12|/5 = 2.4 ✔️.</p>`
        },
        {
          label: "🧭 With vectors",
          html: `<p>The vector <b>n = (a, b)</b> is perpendicular to the line ax + by + c = 0 (a line with gradient −a/b has direction (b, −a), and (a, b)·(b, −a) = 0). To go from a point Q on the line to P, we "project" the vector QP onto n: the length of the projection is |n · QP|/|n| = |a(x₀ − xQ) + b(y₀ − yQ)|/√(a² + b²). But a·xQ + b·yQ = −c because Q lies on the line: we get exactly the formula. It is the same idea used in 3D graphics to work out how far a point is from a plane.</p>`,
          widget: "match",
          options: { pairs: [["(a, b)", "vector perpendicular to the line"], ["|ax₀ + by₀ + c|", "numerator of the distance"], ["√(a² + b²)", "length of the normal vector"], ["H", "foot of the perpendicular"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the line in the Cartesian plane",
      nodes: [
        { id: "retta", label: "Line", x: 50, y: 6, color: "#6366f1", html: "ax + by + c = 0, or y = mx + q.", why: "From collinear points: the change in y is proportional to the change in x, so the equation is of the first degree." },
        { id: "dist", label: "Point-to-line distance", x: 18, y: 30, color: "#16a34a", html: "d = |ax₀ + by₀ + c|/√(a² + b²).", why: "It is obtained by projecting onto the normal vector (a, b): it is Pythagoras in vector form; it is also the reason why the perpendicular is the shortest distance." },
        { id: "fasci", label: "Families of lines", x: 82, y: 30, color: "#f59e0b", html: "Through a point, or parallel.", why: "An equation with a parameter describes infinitely many lines; combining two lines r + k·s gives all those that pass through their intersection." },
        { id: "ang", label: "Angles and bisectors", x: 18, y: 62, color: "#ef4444", html: "tan θ = |(m₂ − m₁)/(1 + m₁m₂)|; bisectors by equidistance.", why: "The angle comes from the tangent of the difference of two angles of inclination; the bisectors are by definition the points equidistant from the sides." },
        { id: "area", label: "Area of a triangle", x: 82, y: 62, color: "#0ea5e9", html: "Shoelace formula; zero area = collinear points.", why: "It can be derived as base × height/2, where the height is the point-to-line distance; or with the determinant." },
        { id: "luogo", label: "Loci", x: 50, y: 88, color: "#a855f7", html: "Sets of points with a property: perpendicular bisector, angle bisector, parallels...", why: "Translating a property into an equation is the founding idea of analytic geometry (Descartes and Fermat)." }
      ],
      edges: [
        ["retta", "dist", "measures"],
        ["retta", "fasci", "families"],
        ["dist", "ang", "bisectors"],
        ["fasci", "ang", "conditions"],
        ["dist", "area", "height"],
        ["ang", "luogo", "loci"],
        ["area", "luogo", "loci"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: angles, areas, loci",
      questions: [
        { type: "num", q: "Area of the triangle with vertices A(0, 0), B(6, 0), C(2, 4).", answer: 12, explain: "Base 6, height 4: Area = ½ · 6 · 4 = 12." },
        { type: "mc", q: "The perpendicular bisector of the segment with endpoints A(0, 0) and B(6, 0) is…", options: ["y = 3", "x = 3", "y = x"], answer: 1, explain: "It is the perpendicular to AB (horizontal) at the midpoint (3, 0): the vertical line x = 3." },
        { type: "tf", q: "Three points are collinear if the area of the triangle they form is zero.", answer: true, explain: "A degenerate triangle has zero area: the three vertices lie on the same line." }
      ]
    }
  ],
  glossary: [
    { t: "General (implicit) form", d: "Equation of a line of the form ax + by + c = 0." },
    { t: "Family of lines", d: "A set of infinitely many lines described by an equation with a parameter." },
    { t: "Pencil through a point", d: "All the lines passing through a point, called the centre of the pencil." },
    { t: "Family of parallel lines", d: "A set of lines that are all parallel to each other." },
    { t: "Point-to-line distance", d: "The length of the perpendicular drawn from the point to the line." },
    { t: "Angle bisector", d: "The line of points equidistant from two intersecting lines." },
    { t: "Locus", d: "The set of all and only the points that satisfy a given property." },
    { t: "Normal vector", d: "The vector (a, b), perpendicular to the line ax + by + c = 0." },
    { t: "Perpendicular bisector", d: "The locus of points equidistant from the endpoints of a segment: the perpendicular through its midpoint." },
    { t: "Collinear", d: "Points that lie on the same line." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Distance from P(2, 3) to the line 3x + 4y + 2 = 0.", answer: 4, explain: "|6 + 12 + 2|/√(9 + 16) = 20/5 = 4." },
      { type: "mc", q: "What is the distance between the parallel lines x + y − 1 = 0 and x + y + 3 = 0?", options: ["4", "2√2", "√2"], answer: 1, explain: "|−1 − 3|/√2 = 4/√2 = 2√2." },
      { type: "mc", q: "The centre of the family generated by x + y − 3 = 0 and x − y + 1 = 0 is…", options: ["(1, 2)", "(2, 1)", "(−1, 4)"], answer: 0, explain: "Solve the system: x = 1, y = 2." },
      { type: "mc", q: "The line through P(2, 1) perpendicular to 3x + 4y − 1 = 0 is…", options: ["4x − 3y − 5 = 0", "3x + 4y − 10 = 0", "4x + 3y − 11 = 0"], answer: 0, explain: "The normal (3, 4) gives the direction of the perpendicular: 4(x − 2) − 3(y − 1) = 0." },
      { type: "num", q: "Acute angle (in degrees) between the lines y = 2x and y = x/3.", answer: 45, explain: "tan θ = |(1/3 − 2)/(1 + 2/3)| = 1, so θ = 45°." },
      { type: "num", q: "Area of the triangle A(0, 0), B(4, 1), C(1, 3).", answer: 5.5, tol: 0.01, explain: "½|0 + 4(3 − 0) + 1(0 − 1)| = ½ · 11 = 5.5." },
      { type: "mc", q: "The perpendicular bisector of the segment with endpoints A(0, 0) and B(4, 2) is…", options: ["2x + y − 5 = 0", "x + 2y − 4 = 0", "2x − y = 0"], answer: 0, explain: "Impose PA² = PB²: x² + y² = (x − 4)² + (y − 2)² → 2x + y − 5 = 0." },
      { type: "tf", q: "The family y − 2 = m(x − 1) contains all the lines through (1, 2), including x = 1.", answer: false, explain: "The vertical line x = 1 is missing, because it has no gradient." },
      { type: "order", q: "Put in order the steps for finding a locus.", items: ["Take a general point P(x, y)", "Translate the property into a relationship between the coordinates", "Simplify the equation", "Recognise the curve obtained", "Check for any excluded points"], explain: "Start from a general P, translate, simplify, recognise the curve and check the special cases." },
      { type: "text", q: "What is the name of the line that passes through the midpoint of a segment and is perpendicular to it?", answer: ["perpendicular bisector", "the perpendicular bisector", "perpendicular bisector of the segment", "bisector", "mediator"], explain: "It is the perpendicular bisector of the segment: all its points are equidistant from the endpoints." }
    ]
  }
});
