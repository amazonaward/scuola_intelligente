TOPIC('en', {
  id: "l2-mat-piano-cartesiano-retta",
  title: "The Cartesian plane and the straight line",
  intro: "How does a satnav tell you how many kilometres are left, or a map show you a point with two numbers? How does a video game know where your character is? Behind all this is a brilliant 17th-century idea: <b>describing points with numbers and shapes with equations</b>. In this lesson we use the <b>Cartesian plane</b> to calculate distances and midpoints, and discover the <b>equation of a straight line</b>, its elements (gradient and intercept) and when two lines are <b>parallel</b> or <b>perpendicular</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "The Cartesian plane",
      html: `<p>An <b>orthogonal Cartesian coordinate system</b> is made up of two perpendicular lines, the <b>axes</b>: the <b>x-axis</b> (horizontal, the axis of abscissas) and the <b>y-axis</b> (vertical, the axis of ordinates), which meet at the <b>origin</b> O(0, 0), with the same unit on both. Each point P in the plane is identified by an <b>ordered pair</b> (x, y): the <b>x-coordinate</b> (abscissa) is the signed distance from the y-axis, the <b>y-coordinate</b> (ordinate) the signed distance from the x-axis. The axes divide the plane into four <b>quadrants</b>: I (x &gt; 0, y &gt; 0), II (x &lt; 0, y &gt; 0), III (x &lt; 0, y &lt; 0), IV (x &gt; 0, y &lt; 0).</p>
<p>Some useful facts: points on the x-axis have y = 0; points on the y-axis have x = 0. The <b>reflection</b> of P(a, b) in the x-axis is (a, −b), in the y-axis it is (−a, b), and through the origin it is (−a, −b).</p>
<p>The key step is this: <b>a geometric figure becomes a set of points whose coordinates satisfy an equation</b>. Geometry is translated into algebra, and vice versa: this is <b>analytic geometry</b> (coordinate geometry).</p>`
    },
    {
      type: "svg",
      title: "Distance and midpoint",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="250" x2="400" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="20" x2="60" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="110" y1="200" x2="310" y2="50" stroke="#ea580c" stroke-width="4"/>
<line x1="110" y1="200" x2="310" y2="200" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 5"/>
<line x1="310" y1="200" x2="310" y2="50" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 5"/>
<circle cx="110" cy="200" r="7" fill="#16a34a"/>
<circle cx="310" cy="50" r="7" fill="#16a34a"/>
<circle cx="210" cy="125" r="7" fill="#dc2626"/>
<text x="90" y="222" font-size="16" fill="#166534" font-weight="bold">A(1, 1)</text>
<text x="320" y="55" font-size="16" fill="#166534" font-weight="bold">B(5, 4)</text>
<text x="222" y="118" font-size="16" fill="#991b1b" font-weight="bold">M(3, 2.5)</text>
<text x="210" y="222" font-size="16" fill="#1d4ed8" text-anchor="middle">Δx = 4</text>
<text x="322" y="130" font-size="16" fill="#1d4ed8">Δy = 3</text>
<text x="150" y="130" font-size="16" fill="#9a3412" font-weight="bold" text-anchor="end">AB = 5</text>
<text x="420" y="90" font-size="16" fill="#334155">AB = √(Δx² + Δy²)</text>
<text x="420" y="120" font-size="16" fill="#334155">= √(16 + 9) = 5</text>
<text x="420" y="170" font-size="16" fill="#334155">M = ((x₁+x₂)/2 , (y₁+y₂)/2)</text>
</svg>`,
      caption: "The distance between two points is the hypotenuse of a right-angled triangle built from the differences of the coordinates (Pythagoras' theorem)."
    },
    {
      type: "remember",
      title: "Distance and midpoint",
      html: `<ul>
<li><b>Distance</b> between A(x₁, y₁) and B(x₂, y₂): <b>AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>. If the points have the same y (horizontal segment) the distance is |x₂ − x₁|; if they have the same x, it is |y₂ − y₁|.</li>
<li><b>Midpoint</b> of AB: <b>M = ( (x₁ + x₂)/2 , (y₁ + y₂)/2 )</b>: the mean of the x-coordinates and the mean of the y-coordinates.</li>
</ul>
<p>Example: A(1, 2) and B(7, 10): AB = √(36 + 64) = √100 = <b>10</b>; M = (4, 6).</p>`
    },
    {
      type: "widget",
      title: "Pythagoras in action",
      widget: "pythagoras",
      options: {},
      caption: "Set the sliders to 3 and 4: the hypotenuse is 5, like the distance between A(1,1) and B(5,4). The distance formula is Pythagoras' theorem applied to Δx and Δy."
    },
    {
      type: "text",
      title: "The equation of a straight line",
      html: `<p>Every line in the plane has a first-degree equation in x and y. The <b>general (implicit) form</b> is <b>ax + by + c = 0</b> (a and b not both zero). If b ≠ 0 you can rearrange it into the <b>explicit form</b> (slope-intercept form):</p>
<p style="text-align:center"><b>y = m x + q</b></p>
<ul>
<li><b>m</b> is the <b>gradient</b> (slope): how much y rises (or falls) when x increases by 1.</li>
<li><b>q</b> is the <b>y-intercept</b>: the y-coordinate of the point where the line crosses the y-axis, that is (0, q).</li>
</ul>
<p>Special cases:</p>
<ul>
<li><b>Horizontal</b> line (parallel to the x-axis): <b>y = k</b> (m = 0). The x-axis is y = 0.</li>
<li><b>Vertical</b> line (parallel to the y-axis): <b>x = k</b>: it has <b>no</b> gradient (it cannot be written in explicit form). The y-axis is x = 0.</li>
<li>Line through the origin: <b>y = mx</b> (q = 0), which expresses <b>direct proportionality</b>.</li>
<li>Bisectors of the quadrants: y = x (I and III) and y = −x (II and IV).</li>
</ul>
<p>To draw a line, <b>two points</b> are enough: usually the intersections with the axes (setting x = 0 and then y = 0). A point lies on the line if and only if its coordinates <b>satisfy the equation</b>: the point (2, 5) lies on y = 3x − 1 because 3·2 − 1 = 5.</p>`
    },
    {
      type: "text",
      title: "Finding the line: through two points, through one point",
      html: `<p>The <b>gradient</b> of the line through A(x₁, y₁) and B(x₂, y₂), with x₁ ≠ x₂, is the ratio of the change in y to the change in x:</p>
<p style="text-align:center"><b>m = (y₂ − y₁)/(x₂ − x₁)</b></p>
<p>If m &gt; 0 the line <b>rises</b> (from left to right); if m &lt; 0 it <b>falls</b>; if m = 0 it is horizontal; the bigger |m| is, the steeper the line.</p>
<ul>
<li><b>Line through a point P(x₀, y₀) with gradient m</b>: <b>y − y₀ = m(x − x₀)</b>.</li>
<li><b>Line through two points</b>: calculate m and then use the previous formula (or <b>(y − y₁)/(y₂ − y₁) = (x − x₁)/(x₂ − x₁)</b>).</li>
</ul>
<p><b>Example</b>: line through A(1, 2) and B(3, 8). m = (8 − 2)/(3 − 1) = 3. Line through A: y − 2 = 3(x − 1) → <b>y = 3x − 1</b>. Check with B: 3·3 − 1 = 8 ✔️.</p>
<p><b>Intersection of two lines</b>: solve the <b>system</b> made up of their equations (previous lesson!). E.g. y = x + 1 and y = −2x + 7: x + 1 = −2x + 7 → x = 2, y = 3: they meet at (2, 3). If there is no solution the lines are parallel; if there are infinitely many, they coincide.</p>`
    },
    {
      type: "example",
      title: "Worked example: taxi fares",
      html: `<p>A taxi charges a starting fee of €4 and then €1.20 per kilometre. The cost y for x km is <b>y = 1.2x + 4</b>: a line with <b>m = 1.2</b> (€ per km: the rate at which the cost grows) and <b>q = 4</b> (the starting fee, the cost at distance 0). For 15 km: y = 18 + 4 = €22. How many km for €40? 1.2x = 36 → x = 30 km.</p>
<p>Another taxi has a starting fee of €2 and €1.40/km: y = 1.4x + 2. When do they cost the same? Intersection: 1.2x + 4 = 1.4x + 2 → 2 = 0.2x → x = 10 km (cost €16). Below 10 km the second is cheaper, above it the first.</p>`
    },
    {
      type: "example",
      title: "Worked example: the drone and the charging station",
      html: `<p>On a map in metres a drone is at D(2, 3) and the charging station at S(14, 8). How far must it fly in a straight line? And where is it halfway?</p>
<ul>
<li>Δx = 14 − 2 = 12 and Δy = 8 − 3 = 5.</li>
<li>Distance: √(12² + 5²) = √169 = <b>13 m</b> (a Pythagorean triple: 5-12-13).</li>
<li>Midpoint: ((2 + 14)/2 , (3 + 8)/2) = <b>(8, 5.5)</b>.</li>
<li>The path lies on the line with m = 5/12: y − 3 = (5/12)(x − 2).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: distance and lines",
      questions: [
        { type: "num", q: "Calculate the distance between O(0, 0) and P(6, 8).", answer: 10, explain: "√(36 + 64) = √100 = 10." },
        { type: "num", q: "What is the gradient of the line through A(0, 1) and B(2, 7)?", answer: 3, explain: "m = (7 − 1)/(2 − 0) = 3." },
        { type: "mc", q: "What is the equation of the vertical line through (4, 9)?", options: ["y = 9", "x = 4", "y = 4x"], answer: 1, explain: "A vertical line has an equation of the form x = constant: x = 4." }
      ]
    },
    {
      type: "text",
      title: "Parallel and perpendicular lines",
      html: `<p>Given two non-vertical lines r: y = mx + q and r′: y = m′x + q′, they are:</p>
<ul>
<li><b>parallel</b> (r ∥ r′) if and only if they have the <b>same gradient</b>: <b>m = m′</b> (if q = q′ as well, they coincide);</li>
<li><b>perpendicular</b> (r ⊥ r′) if and only if <b>m · m′ = −1</b>, that is <b>m′ = −1/m</b> (gradients that are "negative reciprocals").</li>
</ul>
<p>If a line is horizontal (m = 0), the lines perpendicular to it are the vertical lines x = k.</p>
<p><b>Example 1.</b> Line through P(0, 5) parallel to y = 2x + 1: same m = 2 → <b>y = 2x + 5</b>.</p>
<p><b>Example 2.</b> Line through P(4, 1) perpendicular to y = 2x + 1: m′ = −1/2, y − 1 = −½(x − 4) → <b>y = −x/2 + 3</b>.</p>
<p><b>Example 3: perpendicular bisector of a segment</b>. The perpendicular bisector of AB is the line perpendicular to AB through its midpoint; all its points are equidistant from A and B. For A(1, 1) and B(5, 4): m<sub>AB</sub> = 3/4; M(3, 2.5); bisector with m = −4/3: y − 2.5 = −(4/3)(x − 3) → <b>y = −(4/3)x + 6.5</b>.</p>
<p><b>Distance from a point to a line</b> (a useful formula): the distance of P(x₀, y₀) from the line ax + by + c = 0 is <b>d = |ax₀ + by₀ + c| / √(a² + b²)</b>. E.g.: distance of O from the line 3x + 4y − 10 = 0: |−10|/5 = <b>2</b>.</p>`
    },
    {
      type: "svg",
      title: "Parallel and perpendicular",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#cbd5e1" stroke-width="1"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#cbd5e1" stroke-width="1"/>
<line x1="60" y1="260" x2="340" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="120" y1="285" x2="400" y2="65" stroke="#2563eb" stroke-width="4" stroke-dasharray="10 6"/>
<line x1="240" y1="30" x2="470" y2="270" stroke="#ea580c" stroke-width="4" transform="rotate(0)"/>
<text x="30" y="30" font-size="16" fill="#1d4ed8" font-weight="bold">r ∥ r′: same slope (m = m′)</text>
<text x="330" y="288" font-size="16" fill="#9a3412" font-weight="bold">s ⊥ r: m · m′ = −1</text>
<text x="400" y="45" font-size="14" fill="#334155">(solid and dashed lines:</text>
<text x="400" y="62" font-size="14" fill="#334155">parallel)</text>
</svg>`,
      caption: "Two lines with the same slope are parallel; if the product of the slopes is −1 they meet at a right angle."
    },
    {
      type: "curiosity",
      title: "Did you know…? Descartes and the fly",
      html: `<p>The Cartesian plane is named after <b>René Descartes</b>, Latinised as <i>Cartesius</i>, who in 1637 published <i>La Géométrie</i>, an appendix to his <i>Discourse on the Method</i>. At the same time the Frenchman <b>Pierre de Fermat</b> was developing similar ideas. An anecdote, for which there is no firm evidence, says that Descartes had the idea while watching a fly on the ceiling of his room: to describe where it was, it was enough to say how far it was from two walls. True or not, that is exactly how coordinates work!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Coordinates everywhere",
      html: `<p><b>Geographic coordinates</b> (latitude and longitude) are a coordinate system on a sphere; <b>GPS</b> works out your position from your distance to several satellites, using the same idea of distance between points in a space with coordinates (in 3D the formula has one more term, Δz²). Every pixel on a screen also has coordinates (x, y), and a video game calculates distances and collisions with the formulas from this lesson.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the straight line",
      intro: "The gradient and perpendicularity are not formulas to learn by heart: here are three ways of seeing them.",
      tabs: [
        {
          label: "⛰️ The gradient of a road",
          html: `<p>The <b>gradient</b> is the <b>slope</b>, like on road signs: "10%" means that over 100 m horizontally you climb 10 m, that is m = 0.10. A spiral staircase has a different slope from a wheelchair ramp (about 8%, that is m ≈ 0.08). Uphill = positive m, downhill = negative m, flat road = m = 0, vertical wall = no m (you cannot divide by Δx = 0).</p>`
        },
        {
          label: "🔄 A 90° rotation",
          html: `<p>A line with gradient m has direction (1, m): for every step of 1 to the right you go up by m. Rotating this direction by <b>90° anticlockwise</b>, the vector (a, b) becomes (−b, a): (1, m) → (−m, 1), which is the direction of a line with gradient 1/(−m) = <b>−1/m</b>. That explains why m · m′ = −1 for perpendicular lines: it is the effect of rotating through a right angle.</p>`,
          widget: "numberLine",
          options: { min: -4, max: 4, step: 1, marks: [2, -2] }
        },
        {
          label: "📋 Table of points",
          html: `<p>To draw y = 2x − 1, build a table: x = −1, 0, 1, 2 → y = −3, −1, 1, 3. Notice that every time x increases by 1, y increases by <b>2</b>: that constant difference is exactly m. This is why a straight line is the graph of situations with <b>constant</b> growth (hourly pay, bills with a fixed and a variable cost, distance at constant speed).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="20" y1="150" x2="580" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="10" x2="300" y2="290" stroke="#475569" stroke-width="2"/><line x1="140" y1="280" x2="440" y2="20" stroke="#2563eb" stroke-width="4"/><circle cx="300" cy="200" r="7" fill="#16a34a"/><text x="312" y="222" font-size="16" fill="#166534" font-weight="bold">(0, −1): q</text><text x="340" y="120" font-size="16" fill="#1d4ed8" font-weight="bold">y = 2x − 1  (m = 2)</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the coordinate geometry of the line",
      nodes: [
        { id: "piano", label: "Cartesian plane", x: 50, y: 6, color: "#6366f1", html: "Two perpendicular axes; each point is a pair (x, y).", why: "Descartes and Fermat (17th century) joined geometry and algebra: figures are studied through equations." },
        { id: "dist", label: "Distance", x: 18, y: 28, color: "#16a34a", html: "AB = √(Δx² + Δy²).", why: "It is Pythagoras' theorem on the right-angled triangle with legs Δx and Δy, so it follows from Euclidean geometry." },
        { id: "med", label: "Midpoint", x: 82, y: 28, color: "#f59e0b", html: "Means of the coordinates.", why: "The midpoint is halfway horizontally and vertically: each coordinate is the mean of the two." },
        { id: "retta", label: "Equation of a line", x: 50, y: 50, color: "#a855f7", html: "ax + by + c = 0, or y = mx + q.", why: "Collinear points have a constant change in y for each change in x: this gives a first-degree equation." },
        { id: "m", label: "Gradient", x: 18, y: 75, color: "#ef4444", html: "m = Δy/Δx: the slope.", why: "Similar right-angled triangles built on the line have the same vertical/horizontal ratio: that is why m is constant (Thales and similarity)." },
        { id: "par", label: "Parallel and perpendicular", x: 82, y: 75, color: "#0ea5e9", html: "m = m′ parallel; m·m′ = −1 perpendicular.", why: "Parallel = same inclination. Perpendicular = direction rotated by 90°, which turns m into −1/m." },
        { id: "sist", label: "Systems and intersections", x: 50, y: 92, color: "#14b8a6", html: "The intersection of two lines is found by solving a linear system.", why: "A point lies on both lines only if its coordinates satisfy both equations." }
      ],
      edges: [
        ["piano", "dist", "measures with"],
        ["piano", "med", "calculates"],
        ["piano", "retta", "contains"],
        ["retta", "m", "has"],
        ["m", "par", "compares"],
        ["retta", "sist", "meet through"],
        ["par", "sist", "case with no solution"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: parallel and perpendicular",
      questions: [
        { type: "mc", q: "A line perpendicular to y = 4x − 3 has gradient…", options: ["4", "−4", "−1/4"], answer: 2, explain: "m·m′ = −1 → m′ = −1/4." },
        { type: "mc", q: "The line through (0, 1) parallel to y = 3x + 5 is…", options: ["y = 3x + 1", "y = −3x + 1", "y = x/3 + 1"], answer: 0, explain: "Same m = 3 and passing through (0, 1): q = 1." },
        { type: "tf", q: "The lines y = 2x and y = −x/2 are perpendicular.", answer: true, explain: "2 · (−1/2) = −1." }
      ]
    }
  ],
  glossary: [
    { t: "x-coordinate (abscissa)", d: "The x coordinate of a point: its signed distance from the y-axis." },
    { t: "y-coordinate (ordinate)", d: "The y coordinate of a point: its signed distance from the x-axis." },
    { t: "Quadrant", d: "Each of the four regions into which the axes divide the plane." },
    { t: "Midpoint", d: "The point of a segment equidistant from its endpoints: its coordinates are the means." },
    { t: "Gradient", d: "The number m in the line y = mx + q: it indicates the slope." },
    { t: "y-intercept", d: "The term q in y = mx + q: the y-coordinate of the point where the line crosses the y-axis." },
    { t: "Parallel lines", d: "Non-vertical lines with the same gradient." },
    { t: "Perpendicular lines", d: "Lines whose gradients multiply to −1." },
    { t: "Perpendicular bisector", d: "The line perpendicular to a segment through its midpoint: the locus of points equidistant from the endpoints." },
    { t: "General (implicit) form", d: "The equation of a line written as ax + by + c = 0." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Calculate the distance between A(−1, 2) and B(2, 6).", answer: 5, explain: "√(3² + 4²) = 5." },
      { type: "mc", q: "The midpoint of A(2, −4) and B(8, 6) is…", options: ["(5, 1)", "(10, 2)", "(3, 5)"], answer: 0, explain: "((2 + 8)/2 , (−4 + 6)/2) = (5, 1)." },
      { type: "num", q: "Gradient of the line through A(1, 5) and B(4, −1).", answer: -2, explain: "m = (−1 − 5)/(4 − 1) = −2." },
      { type: "mc", q: "The line through (2, 3) with m = 2 is…", options: ["y = 2x − 1", "y = 2x + 3", "y = −2x + 7"], answer: 0, explain: "y − 3 = 2(x − 2) → y = 2x − 1." },
      { type: "mc", q: "Which line is parallel to 2x + y − 3 = 0?", options: ["y = −2x + 5", "y = 2x + 5", "y = x/2 + 1"], answer: 0, explain: "2x + y − 3 = 0 → y = −2x + 3: m = −2, like y = −2x + 5." },
      { type: "mc", q: "Which line is perpendicular to y = 3x + 1?", options: ["y = 3x − 5", "y = −x/3 + 2", "y = −3x"], answer: 1, explain: "You need m′ = −1/3." },
      { type: "num", q: "Where do y = x + 1 and y = −2x + 7 meet? Give the x-coordinate.", answer: 2, explain: "x + 1 = −2x + 7 → x = 2 (the point is (2, 3))." },
      { type: "tf", q: "The line x = 5 has gradient 0.", answer: false, explain: "x = 5 is vertical: it has no gradient. The line with m = 0 is horizontal, y = k." },
      { type: "order", q: "Put the steps for writing the line through two points in order.", items: ["Calculate m = (y₂ − y₁)/(x₂ − x₁)", "Choose one of the two points", "Write y − y₁ = m(x − x₁)", "Solve for y and simplify", "Check with the other point"], explain: "First the gradient, then the point-gradient formula and the check." },
      { type: "text", q: "What is the name of the French philosopher and mathematician (Latin name Cartesius) after whom the Cartesian plane is named? (surname)", answer: ["descartes", "rene descartes", "cartesius", "cartesio", "des cartes"], explain: "René Descartes (Cartesius), La Géométrie, 1637." }
    ]
  }
});
