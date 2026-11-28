TOPIC('en', {
  id: "l3-mat-parabola",
  title: "The parabola",
  intro: "The arc of a jet of water, a three-point shot in basketball, the cables of a suspension bridge, the satellite dish on the roof: they all trace a <b>parabola</b>. You already know y = ax² + bx + c as the graph of a function; now we look at it through the eyes of analytic geometry, as a <b>locus of points</b> equidistant from a point (the <b>focus</b>) and a line (the <b>directrix</b>). We learn to find the vertex, axis, focus and directrix, to write the equation from given data, and to study <b>intersections with lines</b> and <b>tangents</b>.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "The parabola as a locus",
      html: `<p>A <b>parabola</b> is the locus of points in the plane that are <b>equidistant</b> from a fixed point F, the <b>focus</b>, and a fixed line d, the <b>directrix</b> (with F not on d). The line through the focus perpendicular to the directrix is the <b>axis</b> of symmetry; the point on the axis halfway between F and the directrix is the <b>vertex</b> V (the point of the parabola closest to the directrix).</p>
<p>Let's translate this into coordinates. Take the focus F(0, p) and the directrix y = −p (with p &gt; 0). A point P(x, y) lies on the parabola if PF = the distance from P to the directrix: √(x² + (y − p)²) = |y + p|. Squaring: x² + y² − 2py + p² = y² + 2py + p² → x² = 4py, that is</p>
<p style="text-align:center"><b>y = x²/(4p)</b></p>
<p>So y = ax² has focus F(0, 1/(4a)) and directrix y = −1/(4a): <b>the coefficient a determines how "narrow" the parabola is</b>. A parabola with large a is narrower (the focus is close to the vertex); with small a it is wider.</p>`
    },
    {
      type: "svg",
      title: "Focus, directrix and vertex",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="230" x2="570" y2="230" stroke="#cbd5e1" stroke-width="1"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="60" y1="280" x2="540" y2="280" stroke="#ea580c" stroke-width="3"/>
<polyline points="100,30 112,54 125,77 138,98 150,118 162,135 175,152 188,167 200,180 212,192 225,202 238,210 250,218 262,223 275,227 288,229 300,230 312,229 325,227 338,223 350,218 362,210 375,202 388,192 400,180 412,167 425,152 438,135 450,118 462,98 475,77 488,54 500,30" fill="none" stroke="#7c3aed" stroke-width="4"/>
<line x1="300" y1="180" x2="400" y2="180" stroke="#16a34a" stroke-width="3"/>
<line x1="400" y1="180" x2="400" y2="280" stroke="#16a34a" stroke-width="3"/>
<circle cx="300" cy="180" r="7" fill="#dc2626"/>
<circle cx="300" cy="230" r="6" fill="#1d4ed8"/>
<circle cx="400" cy="180" r="6" fill="#16a34a"/>
<text x="260" y="176" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="end">F(0, 1)</text>
<text x="260" y="248" font-size="16" fill="#1d4ed8" font-weight="bold" text-anchor="end">V(0, 0)</text>
<text x="412" y="170" font-size="16" fill="#166534" font-weight="bold">P</text>
<text x="350" y="172" font-size="14" fill="#166534" text-anchor="middle">PF = 2</text>
<text x="412" y="235" font-size="14" fill="#166534">PH = 2</text>
<text x="70" y="270" font-size="16" fill="#9a3412" font-weight="bold">directrix y = −1</text>
<text x="330" y="20" font-size="16" fill="#334155">axis: x = 0     parabola y = x²/4</text>
</svg>`,
      caption: "For every point P on the parabola y = x²/4, the distance from the focus F equals the distance from the directrix (PF = PH)."
    },
    {
      type: "text",
      title: "The equation y = ax² + bx + c: all the elements",
      html: `<p>A parabola with a <b>vertical axis</b> (parallel to the y-axis) has equation <b>y = ax² + bx + c</b>, with a ≠ 0. The discriminant is Δ = b² − 4ac. Here are its elements:</p>
<ul>
<li><b>Concavity</b>: it opens upwards if a &gt; 0, downwards if a &lt; 0.</li>
<li><b>Vertex</b>: <b>V(−b/(2a) ; −Δ/(4a))</b>.</li>
<li><b>Axis of symmetry</b>: <b>x = −b/(2a)</b> (if there are two roots, it is the line halfway between them).</li>
<li><b>Focus</b>: <b>F(−b/(2a) ; (1 − Δ)/(4a))</b>.</li>
<li><b>Directrix</b>: <b>y = −(1 + Δ)/(4a)</b>.</li>
<li><b>Intersection with the y-axis</b>: (0, c). <b>Intersections with the x-axis</b>: the roots of ax² + bx + c = 0 (if Δ ≥ 0).</li>
</ul>
<p>To remember the formulas: the vertex is found by <b>completing the square</b>: y = a(x + b/2a)² − Δ/4a. The focus and directrix are symmetric about the vertex at a distance <b>1/(4|a|)</b>: from the vertex, the focus lies 1/(4a) "inside" the curve, on the side it opens towards.</p>
<p><b>Complete example.</b> y = x² − 4x + 3 (a = 1, b = −4, c = 3, Δ = 16 − 12 = 4).</p>
<ul>
<li>Axis: x = 2. Vertex: V(2, −1).</li>
<li>Focus: F(2 ; (1 − 4)/4) = <b>(2 ; −3/4)</b>. Directrix: y = −(1 + 4)/4 = <b>−5/4</b>.</li>
<li>Check: V is 1/4 away both from F (−1 → −0.75) and from the directrix (−1 → −1.25) ✔️.</li>
<li>Intersections: with the y-axis at (0, 3); with the x-axis: x² − 4x + 3 = 0 → x = 1 and x = 3 → (1, 0) and (3, 0).</li>
</ul>
<p><b>Parabola with a horizontal axis</b>: x = ay² + by + c. The roles of x and y are swapped: vertex V(−Δ/(4a) ; −b/(2a)), axis y = −b/(2a), focus F((1 − Δ)/(4a) ; −b/(2a)), directrix x = −(1 + Δ)/(4a). It is not the graph of a function y = f(x), but it is the graph of x = g(y).</p>`
    },
    {
      type: "remember",
      title: "How to sketch a parabola in five steps",
      html: `<ol>
<li>Concavity from the sign of a.</li>
<li>Vertex V(−b/2a ; −Δ/4a).</li>
<li>Intersection with the y-axis: (0, c) and its mirror image in the axis.</li>
<li>Intersections with the x-axis (if Δ ≥ 0).</li>
<li>A few more points (table of values) and a freehand sketch, <b>symmetric</b> about the axis.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: elements of the parabola",
      questions: [
        { type: "mc", q: "The vertex of y = x² − 6x + 5 is…", options: ["(3, −4)", "(−3, 4)", "(6, 5)"], answer: 0, explain: "x = −b/2a = 3; y = 9 − 18 + 5 = −4." },
        { type: "num", q: "What is the y-coordinate of the focus of the parabola y = x²? (answer as a decimal)", answer: 0.25, tol: 0.001, explain: "With a = 1: F(0, 1/(4a)) = (0; 0.25)." },
        { type: "tf", q: "The parabola y = −2x² + 3 opens upwards.", answer: false, explain: "a = −2 &lt; 0: it opens downwards." }
      ]
    },
    {
      type: "text",
      title: "How to write the equation of a parabola",
      html: `<p>The parabola y = ax² + bx + c has <b>3 parameters</b> (a, b, c): so you need <b>3 independent conditions</b> to determine it. Typical examples:</p>
<ul>
<li><b>Passing through three points</b>: substitute the coordinates into y = ax² + bx + c and solve the 3×3 system. E.g.: A(0, 3), B(1, 0), C(3, 0): from A, c = 3; from B, a + b + 3 = 0; from C, 9a + 3b + 3 = 0 → 3a + b + 1 = 0. Subtracting: 2a − 2 = 0 → a = 1, b = −4: <b>y = x² − 4x + 3</b>.</li>
<li><b>Vertex and one point</b>: use the vertex form <b>y = a(x − x_V)² + y_V</b> and find a. E.g.: V(1, 2) and passing through (3, 10): 10 = a·4 + 2 → a = 2: y = 2(x − 1)² + 2 = 2x² − 4x + 4.</li>
<li><b>x-intercepts and one point</b>: the factored form <b>y = a(x − x₁)(x − x₂)</b>. E.g.: roots 1 and 5, passing through (0, 10): 10 = a·5 → a = 2: y = 2(x − 1)(x − 5) = 2x² − 12x + 10.</li>
<li><b>Focus and directrix</b>: impose PF = distance from the directrix. E.g.: F(0, 1), d: y = −1 → x² = 4y (seen above).</li>
<li><b>Vertex and focus</b> (or directrix): a = 1/(4·signed distance).</li>
</ul>
<p><b>Parabola through two points with a given axis</b>, or other conditions (tangent to a line, passing through a point with a certain gradient): we use families of parabolas, but the principle is always the same: each free parameter requires one condition.</p>`
    },
    {
      type: "text",
      title: "Position of a line relative to a parabola",
      html: `<p>To find out how a line r and the parabola γ meet, we solve their equations as a <b>system</b>: { y = ax² + bx + c ; y = mx + q }. Substituting: ax² + (b − m)x + (c − q) = 0, a quadratic equation with discriminant Δ′:</p>
<ul>
<li><b>Δ′ &gt; 0</b>: the line is a <b>secant</b> (two points of intersection);</li>
<li><b>Δ′ = 0</b>: the line is a <b>tangent</b> (a single point, with double multiplicity);</li>
<li><b>Δ′ &lt; 0</b>: the line is <b>external</b> (no points in common).</li>
</ul>
<p>Careful: lines <b>parallel to the axis</b> of the parabola (vertical lines, for a vertical axis) meet the parabola at a single point <b>without being tangent</b>: the system reduces to a first-degree equation. The condition Δ′ = 0 applies only to lines not parallel to the axis.</p>
<p><b>Example.</b> Parabola y = x² − 4x + 3 and line y = x − 3. x² − 4x + 3 = x − 3 → x² − 5x + 6 = 0 → Δ′ = 1 &gt; 0, x = 2 and x = 3: points (2, −1) and (3, 0). Secant line.</p>
<p><b>Example (tangent).</b> Line y = −4x + 3: x² − 4x + 3 = −4x + 3 → x² = 0 → Δ′ = 0, x = 0, point (0, 3): the line y = −4x + 3 is <b>tangent</b> to the parabola at (0, 3).</p>`
    },
    {
      type: "text",
      title: "Tangent lines to the parabola",
      html: `<p>The <b>tangent</b> to a parabola at one of its points P is the line that has <b>only the point P in common</b> with the parabola (with double multiplicity) and lies entirely on one side of the curve. Three typical problems:</p>
<p><b>1. Tangent at a point P(x₀, y₀) on the parabola.</b> Use the pencil of lines through P: y − y₀ = m(x − x₀), solve it as a system with the parabola and impose Δ′ = 0 (which gives m). For y = x² − 4x + 3 and P(0, 3): y − 3 = mx; x² − 4x + 3 = mx + 3 → x² − (4 + m)x = 0 → Δ′ = (4 + m)² = 0 → m = −4: <b>y = −4x + 3</b>.</p>
<p><b>Ready-made formula</b> (worth knowing): the tangent to the parabola y = ax² + bx + c at its point with x-coordinate x₀ has gradient <b>m = 2ax₀ + b</b>. (Here with a = 1, b = −4, x₀ = 0: m = −4 ✔️. This formula is explained by the <b>derivative</b>, which you will study in your fourth year.)</p>
<p><b>2. Tangents from an external point P(x₀, y₀).</b> Pencil through P and Δ′ = 0 → an equation in m: there are <b>two</b> tangents if P is outside the parabola (that is, on the opposite side to the one it opens towards), one if P lies on the parabola, none if it is inside. Example: from P(2, −5) to the parabola y = x² − 4x + 3: the line is y = m(x − 2) − 5. x² − 4x + 3 = mx − 2m − 5 → x² − (4 + m)x + (8 + 2m) = 0 → Δ′ = (4 + m)² − 4(8 + 2m) = m² − 16 = 0 → m = ±4. The tangents: <b>y = 4x − 13</b> and <b>y = −4x + 3</b>. The points of tangency: for m = −4, x = 0 → (0, 3); for m = 4, x² − 8x + 16 = 0 → x = 4 → (4, 3). Check: they are symmetric about the axis x = 2 ✔️.</p>
<p><b>3. Tangent with a given gradient m.</b> Use the family of parallel lines y = mx + k and impose Δ′ = 0 to find k. For y = x² − 4x + 3 and m = 2: x² − 4x + 3 = 2x + k → x² − 6x + (3 − k) = 0 → Δ′ = 36 − 4(3 − k) = 0 → 24 + 4k = 0 → k = −6: <b>y = 2x − 6</b>, tangent at x = 3 (indeed 2·3 − 4 = 2 ✔️).</p>`
    },
    {
      type: "svg",
      title: "The two tangents from an external point",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="120" x2="570" y2="120" stroke="#cbd5e1" stroke-width="1"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<path d="M 130 20 Q 300 330 470 20" fill="none" stroke="#7c3aed" stroke-width="4"/>
<line x1="140" y1="80" x2="300" y2="280" stroke="#2563eb" stroke-width="3"/>
<line x1="460" y1="80" x2="300" y2="280" stroke="#2563eb" stroke-width="3"/>
<circle cx="300" cy="280" r="7" fill="#dc2626"/>
<circle cx="188" cy="140" r="6" fill="#16a34a"/>
<circle cx="412" cy="140" r="6" fill="#16a34a"/>
<text x="318" y="285" font-size="16" fill="#991b1b" font-weight="bold">P (external)</text>
<text x="40" y="170" font-size="16" fill="#166534" font-weight="bold">point of tangency</text>
<text x="420" y="170" font-size="16" fill="#166534" font-weight="bold">point of tangency</text>
<text x="300" y="40" font-size="16" fill="#334155" text-anchor="middle">From an external point there are two tangents</text>
</svg>`,
      caption: "From a point outside the parabola (that is, on the opposite side to the one it opens towards) two tangents can be drawn; only one if the point is on the parabola; none if it is inside."
    },
    {
      type: "example",
      title: "Real-life example: the basketball shot",
      html: `<p>A player throws the ball from a height of 2 m; its path, in metres, is y = −0.1x² + 0.9x + 2 (x is the horizontal distance from the point where the shot is taken). The basket is 3.05 m high. At what distance does the ball reach that height?</p>
<ul>
<li>−0.1x² + 0.9x + 2 = 3.05 → −0.1x² + 0.9x − 1.05 = 0 → x² − 9x + 10.5 = 0 → x = (9 ± √(81 − 42))/2 = (9 ± 6.245)/2 ≈ 1.38 or 7.62. The ball passes 3.05 m in height <b>twice</b>: first on the way up (at 1.38 m) and then on the way down (at 7.62 m): the basket must be about 7.6 m away for a "dropping" shot.</li>
<li>The highest point is the <b>vertex</b>: x = 0.9/0.2 = 4.5 m; y = −0.1·20.25 + 4.05 + 2 = 4.025 m (about 4 m).</li>
</ul>
<p>In physics in your fourth and fifth years you will discover that the path of a projectile (ignoring air resistance) is a parabola: Galileo proved it in his <i>Discourses and Mathematical Demonstrations Relating to Two New Sciences</i> (1638).</p>`
    },
    {
      type: "example",
      title: "Real-life example: the parabola of a bridge's cables",
      html: `<p>The main cables of a suspension bridge, with a load evenly distributed along the deck, take on a parabolic shape. Suppose the two towers are 40 m high and 200 m apart, and the lowest point of the cable is 10 m above the ground, at mid-span. Putting the origin at the lowest point, the cable has equation y = ax²; at x = 100 (half the span) the height above the lowest point is 30 m: 30 = a · 10000 → a = 0.003, y = 0.003x². The <b>focus</b> has y-coordinate 1/(4a) ≈ 83.3 m above the vertex, so much higher than the towers. 50 m from the centre the cable is 0.003·2500 = 7.5 m above the lowest point, that is 17.5 m above the ground.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The name and Apollonius",
      html: `<p>The name <b>parabola</b> was given by <b>Apollonius of Perga</b> (about 262 – 190 BC) in his treatise on <i>Conics</i>: from the Greek <i>parabolé</i>, "comparison", "application". Apollonius defined the parabola, ellipse and hyperbola as sections of a cone by a plane: the parabola is obtained with a plane <b>parallel to a generator</b> (a slant line) of the cone. The fact that the same curve is also the locus of points equidistant from a focus and a directrix is a remarkable property, which can be proved with Dandelin spheres (early 19th century).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The reflective property of the focus",
      html: `<p>A ray of light (or a radio wave) <b>parallel to the axis</b> that hits a parabola-shaped surface is reflected through the <b>focus</b> (and vice versa). That is why <b>satellite dishes</b> collect the signal in a receiver placed at the focus, and <b>car headlights</b> and <b>torches</b> have a parabolic mirror with the bulb at the focus: the rays all come out parallel, in a beam. Reflecting telescopes and solar cookers exploit the same property.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the parabola",
      intro: "Three different ways of looking at the same curve, so that you see it as more than just a formula.",
      tabs: [
        {
          label: "🧵 Drawing it with string and a set square",
          html: `<p>You can draw a parabola with a <b>set square</b> and a <b>piece of string</b>: fix one end of the string (as long as the vertical side of the set square) at the focus F and the other to the corner of the set square; slide the set square along the directrix while keeping the string taut against the vertical side with your pencil. The pencil traces the parabola, because for each of its points the distance from the focus (the length of string) equals the distance from the directrix (the length of set square): it is the geometric definition, done by hand.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="60" y1="270" x2="540" y2="270" stroke="#ea580c" stroke-width="4"/><line x1="360" y1="270" x2="360" y2="60" stroke="#2563eb" stroke-width="5"/><circle cx="300" cy="180" r="7" fill="#dc2626"/><line x1="300" y1="180" x2="360" y2="110" stroke="#16a34a" stroke-width="3"/><circle cx="360" cy="110" r="6" fill="#111827"/><text x="285" y="175" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="end">F</text><text x="372" y="115" font-size="16" fill="#166534" font-weight="bold">P</text><text x="372" y="205" font-size="16" fill="#1d4ed8" font-weight="bold">set square</text><text x="70" y="255" font-size="16" fill="#9a3412" font-weight="bold">directrix</text><text x="40" y="60" font-size="16" fill="#334155">string: F → P → set square</text></svg>`
        },
        {
          label: "✂️ The sliced cone",
          html: `<p>Take a cone of light (a torch shining on a wall): the edge of the lit area is a circle if the wall is perpendicular to the axis, an <b>ellipse</b> if you tilt it a little, a <b>parabola</b> when the wall is <b>parallel to a generator</b> (a ray on the edge of the cone), and one branch of a <b>hyperbola</b> if you tilt it even further. So the conic sections are a single family, depending on the tilt. In the next analytic geometry lesson you will see the ellipse and the hyperbola.</p>`
        },
        {
          label: "📋 Rebuilding it point by point",
          html: `<p>For y = x²: x = 0, 1, 2, 3 → y = 0, 1, 4, 9. The successive <b>differences</b> are 1, 3, 5 (odd numbers!), and the second differences are constant (2): this is the signature of a quadratic function. This is how you recognise a parabola in a table of data: if the growth is not constant but <b>the differences of the differences are</b>, the phenomenon is quadratic (free fall: s = ½gt², with g ≈ 9.8 m/s²).</p>`,
          widget: "flashcards",
          options: { cards: [{ front: "Vertex of y = ax² + bx + c", back: "(−b/2a ; −Δ/4a)" }, { front: "Axis of symmetry", back: "x = −b/2a" }, { front: "Focus", back: "(−b/2a ; (1 − Δ)/4a)" }, { front: "Directrix", back: "y = −(1 + Δ)/4a" }, { front: "Tangent: condition", back: "Δ′ = 0 in the line–parabola system" }] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the parabola",
      nodes: [
        { id: "luogo", label: "Locus", x: 50, y: 6, color: "#6366f1", html: "Points equidistant from the focus and the directrix.", why: "It is Apollonius' definition revisited with coordinates: PF = d(P, directrix) gives x² = 4py." },
        { id: "eq", label: "y = ax² + bx + c", x: 18, y: 30, color: "#16a34a", html: "Equation with a vertical axis.", why: "It is obtained from the locus by a translation and a change of scale: a = 1/(4p)." },
        { id: "elem", label: "Vertex, axis, focus, directrix", x: 82, y: 30, color: "#f59e0b", html: "Formulas in a, b, Δ.", why: "The vertex is found by completing the square; the focus and directrix are symmetric about the vertex at a distance 1/4|a|." },
        { id: "retta", label: "Line and parabola", x: 18, y: 62, color: "#ef4444", html: "Quadratic system: Δ′ &gt; 0 secant, = 0 tangent, &lt; 0 external.", why: "The discriminant of the resulting equation counts the common points." },
        { id: "tang", label: "Tangents", x: 82, y: 62, color: "#0ea5e9", html: "At a point, from an external point, with a given gradient.", why: "Tangent = a secant whose two points coincide, hence Δ′ = 0: an idea that will lead to the derivative (Newton, Leibniz)." },
        { id: "app", label: "Applications", x: 50, y: 88, color: "#a855f7", html: "Projectiles, bridges, dishes, headlights, optimisation.", why: "Reflection through the focus and the fall of bodies (Galileo) are the two physical reasons why the parabola is everywhere." }
      ],
      edges: [
        ["luogo", "eq", "in coordinates"],
        ["eq", "elem", "gives"],
        ["eq", "retta", "with a line"],
        ["retta", "tang", "case Δ′ = 0"],
        ["elem", "app", "used in"],
        ["tang", "app", "used in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: lines and the parabola",
      questions: [
        { type: "mc", q: "With respect to the parabola y = x², the line y = −1:", options: ["is a secant", "is a tangent", "is external"], answer: 2, explain: "x² = −1 has no real solutions: Δ′ &lt; 0, external line." },
        { type: "mc", q: "With respect to the parabola y = x², the line y = 2x − 1 is…", options: ["tangent at (1, 1)", "a secant", "external"], answer: 0, explain: "x² = 2x − 1 → (x − 1)² = 0: Δ′ = 0, tangent at (1, 1)." },
        { type: "num", q: "How many tangents can be drawn from an external point to a parabola?", answer: 2, explain: "Two: the condition Δ′ = 0 gives a quadratic equation in m with two solutions." }
      ]
    }
  ],
  glossary: [
    { t: "Parabola", d: "The locus of points equidistant from a point (the focus) and a line (the directrix)." },
    { t: "Focus", d: "The fixed point F in the definition of the parabola." },
    { t: "Directrix", d: "The fixed line in the definition of the parabola." },
    { t: "Vertex", d: "The point of the parabola on the axis of symmetry, the one closest to the directrix." },
    { t: "Axis of symmetry", d: "The line through the focus perpendicular to the directrix: the parabola is symmetric about it." },
    { t: "Concavity", d: "The direction in which the parabola \"opens\": determined by the sign of a." },
    { t: "Discriminant", d: "Δ = b² − 4ac: it determines the number of intersections with the x-axis." },
    { t: "Tangent line", d: "A line that has only one point in common with the parabola (zero discriminant) without crossing it." },
    { t: "Secant line", d: "A line that meets the parabola at two points." },
    { t: "Conic section", d: "A curve obtained by slicing a cone with a plane: parabola, ellipse, hyperbola (and circle)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "The vertex of y = −x² + 4x − 3 is…", options: ["(2, 1)", "(−2, 1)", "(2, −1)"], answer: 0, explain: "x = −b/2a = 2; y = −4 + 8 − 3 = 1." },
      { type: "mc", q: "The parabola y = −3x² + x opens…", options: ["upwards", "downwards", "it depends on x"], answer: 1, explain: "a = −3 &lt; 0." },
      { type: "num", q: "What is the focus (y-coordinate) of y = x²/4?", answer: 1, explain: "a = 1/4, so 1/(4a) = 1: F(0, 1)." },
      { type: "mc", q: "The directrix of y = x²/4 is…", options: ["y = 1", "y = −1", "x = −1"], answer: 1, explain: "It is symmetric to the focus with respect to the vertex: y = −1." },
      { type: "num", q: "At what value of x does the parabola y = x² − 6x + 5 have its vertex?", answer: 3, explain: "x = −b/2a = 6/2 = 3." },
      { type: "mc", q: "The line y = 2x − 1 and the parabola y = x² have…", options: ["two points in common", "only one point in common (tangency)", "no points in common"], answer: 1, explain: "x² − 2x + 1 = 0 → Δ′ = 0: tangent at (1, 1)." },
      { type: "num", q: "How many points of intersection does the parabola y = x² − 4x + 3 have with the x-axis?", answer: 2, explain: "Δ = 4 &gt; 0: roots 1 and 3." },
      { type: "mc", q: "Which is the parabola with vertex V(1, 2) passing through (3, 10)?", options: ["y = 2x² − 4x + 4", "y = x² − 2x + 3", "y = 2x² + 2"], answer: 0, explain: "y = a(x − 1)² + 2; from 10 = 4a + 2 we get a = 2 → 2x² − 4x + 4." },
      { type: "order", q: "Put in order the steps for finding the tangents from an external point P.", items: ["Write the pencil of lines through P", "Solve the line and the parabola as a system", "Write the resulting quadratic equation", "Impose Δ′ = 0", "Find the two gradients m"], explain: "Use the pencil, solve by substitution, and the tangency condition Δ′ = 0 gives m." },
      { type: "text", q: "What is the name of the ancient Greek mathematician who gave the parabola its name in his treatise on conics? (name)", answer: ["apollonius", "apollonius of perga", "apollonio", "apollonio di perga"], explain: "Apollonius of Perga (about 262–190 BC), in his Conics." }
    ]
  }
});
