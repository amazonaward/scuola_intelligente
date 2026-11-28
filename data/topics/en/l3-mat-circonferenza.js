TOPIC('en', {
  id: "l3-mat-circonferenza",
  title: "The circle in the Cartesian plane",
  intro: "A lighthouse lights up the sea up to 20 km away: which ships can it see? Your phone's GPS knows it is a certain distance from three satellites: how does it work out where it is? The answer is always a <b>circle</b>, that is, the set of points at a fixed distance from a centre. In your first two years you studied it with Euclidean geometry; now we translate it into <b>algebra</b>: we will discover that a circle is a <b>second-degree equation</b> in x and y, and that the positions of a line relative to it (secant, tangent, external) are decided by a <b>discriminant</b>, just as with quadratic equations.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "The circle as a locus",
      html: `<p>A <b>circle</b> with centre C and radius r &gt; 0 is the <b>locus</b> of points P in the plane such that <b>PC = r</b>. In the lesson on the Cartesian plane (second year) you saw that the distance between two points is calculated with Pythagoras' theorem: now we just need to use it.</p>
<p>If the centre is C(a, b) and P(x, y) is a general point, the condition PC = r becomes √[(x − a)² + (y − b)²] = r. Squaring (both sides are positive) gives the <b>standard (centre-radius) equation</b>:</p>
<p style="text-align:center"><b>(x − a)² + (y − b)² = r²</b></p>
<p>A point lies on the circle if its coordinates satisfy the equation; it lies <b>inside</b> if (x − a)² + (y − b)² &lt; r², <b>outside</b> if &gt; r². If the centre is the origin, the equation simplifies to <b>x² + y² = r²</b>.</p>
<p><b>Example.</b> Circle with centre C(2, −1) and radius 3: (x − 2)² + (y + 1)² = 9. The point (5, −1) lies on it (9 + 0 = 9); the point (2, 1) is inside (0 + 4 &lt; 9); the point (6, 1) is outside (16 + 4 &gt; 9).</p>`
    },
    {
      type: "svg",
      title: "From distance to equation",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="330" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="150" y1="10" x2="150" y2="290" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="190" cy="120" r="90" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="4"/>
<line x1="190" y1="120" x2="254" y2="56" stroke="#ea580c" stroke-width="3"/>
<line x1="190" y1="120" x2="254" y2="120" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="254" y1="120" x2="254" y2="56" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="190" cy="120" r="6" fill="#dc2626"/>
<circle cx="254" cy="56" r="6" fill="#16a34a"/>
<text x="168" y="145" font-size="16" fill="#991b1b" font-weight="bold">C(a, b)</text>
<text x="262" y="52" font-size="16" fill="#166534" font-weight="bold">P(x, y)</text>
<text x="205" y="85" font-size="16" fill="#9a3412" font-weight="bold">r</text>
<text x="205" y="140" font-size="14" fill="#166534">x − a</text>
<text x="258" y="95" font-size="14" fill="#166534">y − b</text>
<text x="350" y="70" font-size="16" fill="#334155">Pythagoras:</text>
<text x="350" y="100" font-size="16" fill="#334155">(x − a)² + (y − b)² = r²</text>
<text x="350" y="150" font-size="16" fill="#1d4ed8" font-weight="bold">Centre C(2, −1), r = 3:</text>
<text x="350" y="180" font-size="16" fill="#1d4ed8">(x − 2)² + (y + 1)² = 9</text>
</svg>`,
      caption: "The right-angled triangle with legs x − a and y − b has hypotenuse r: the equation of the circle is Pythagoras' theorem written for a general point."
    },
    {
      type: "text",
      title: "General form: finding the centre and radius",
      html: `<p>Expanding the squares in the standard equation gives the <b>general form</b>:</p>
<p style="text-align:center"><b>x² + y² + αx + βy + γ = 0</b></p>
<p>with α = −2a, β = −2b, γ = a² + b² − r². From this we can read off the centre and radius:</p>
<ul>
<li><b>centre</b> C(−α/2 ; −β/2)</li>
<li><b>radius</b> r = √(α²/4 + β²/4 − γ) = ½·√(α² + β² − 4γ)</li>
</ul>
<p>Not every equation of this type is a circle: the radicand must be positive, that is <b>α² + β² − 4γ &gt; 0</b>. If it equals 0 the only solution of the equation is the centre (a "degenerate" circle of radius 0, that is, a point); if it is negative there are no real solutions.</p>
<p>Recognising a circle: the coefficients of x² and y² are <b>equal</b> (divide to make them 1) and <b>there is no xy term</b>.</p>
<p><b>Example 1.</b> x² + y² − 4x + 6y − 12 = 0: α = −4, β = 6, γ = −12. Centre (2, −3); r² = 4 + 9 + 12 = 25, r = <b>5</b>. Alternatively, <b>complete the square</b>: (x² − 4x + 4) + (y² + 6y + 9) = 12 + 4 + 9 → (x − 2)² + (y + 3)² = 25.</p>
<p><b>Example 2.</b> x² + y² + 2x + 4y + 10 = 0: α² + β² − 4γ = 4 + 16 − 40 = −20 &lt; 0: <b>no point</b> of the plane satisfies it.</p>
<p><b>Example 3.</b> 2x² + 2y² − 8x + 4y − 2 = 0: divide by 2 → x² + y² − 4x + 2y − 1 = 0; centre (2, −1); r² = 4 + 1 + 1 = 6, r = √6.</p>`
    },
    {
      type: "remember",
      title: "Summary: special cases",
      html: `<ul>
<li>Centre at the origin: <b>x² + y² = r²</b> (γ ≠ 0, α = β = 0).</li>
<li>Passes through the origin: <b>γ = 0</b>.</li>
<li>Centre on the x-axis (b = 0): <b>β = 0</b>. Centre on the y-axis (a = 0): <b>α = 0</b>.</li>
<li>Tangent to the x-axis: |b| = r. Tangent to the y-axis: |a| = r.</li>
<li>To find a circle you need <b>three conditions</b>, because there are three parameters (α, β, γ), or (a, b, r).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: equation and general form",
      questions: [
        { type: "mc", q: "What is the centre of the circle (x + 3)² + (y − 4)² = 16?", options: ["(3, −4)", "(−3, 4)", "(−3, −4)"], answer: 1, explain: "(x + 3) = (x − (−3)): a = −3; (y − 4): b = 4. The centre is (−3, 4) and r = 4." },
        { type: "num", q: "Calculate the radius of the circle x² + y² − 6x + 8y = 0.", answer: 5, explain: "α = −6, β = 8, γ = 0: r = ½√(36 + 64) = ½·10 = 5. The centre is (3, −4), and indeed the circle passes through the origin." },
        { type: "tf", q: "The equation x² + 2y² − 4 = 0 represents a circle.", answer: false, explain: "The coefficients of x² and y² are different: it is not a circle (it is an ellipse, see the next lesson)." }
      ]
    },
    {
      type: "text",
      title: "Line and circle: three possible positions",
      html: `<p>A line s and a circle can have <b>two points</b> in common (a <b>secant</b> line), <b>one</b> (a <b>tangent</b> line) or <b>none</b> (an <b>external</b> line). There are two equivalent methods.</p>
<p><b>Method 1: the system and the discriminant.</b> Solve the two equations as a system, substituting y (or x) from the line into the circle: you get a quadratic equation. The sign of Δ decides:</p>
<ul>
<li><b>Δ &gt; 0</b>: two distinct solutions → secant;</li>
<li><b>Δ = 0</b>: two coincident solutions → <b>tangent</b>;</li>
<li><b>Δ &lt; 0</b>: no real solutions → external.</li>
</ul>
<p><b>Method 2: the distance from the centre.</b> Calculate the distance d of the centre from the line (the point-to-line formula from the lesson on the Cartesian plane: d = |ax₀ + by₀ + c|/√(a² + b²)) and compare it with r: <b>d &lt; r</b> secant, <b>d = r</b> tangent, <b>d &gt; r</b> external.</p>
<p><b>Example.</b> Circle x² + y² = 25 and line y = x + 1. Substituting: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0 → Δ = 49 &gt; 0, x = 3 or x = −4. The points of intersection are (3, 4) and (−4, −3): the line is a secant. Check with method 2: d = |1|/√2 ≈ 0.71 &lt; 5 ✔️.</p>
<p><b>Parameter k.</b> For which k is the line y = x + k tangent to x² + y² = 8? Using the distance: the line is x − y + k = 0, d = |k|/√2 = 2√2 → |k| = 4 → k = ±4. The tangents parallel to the line y = x are y = x + 4 and y = x − 4.</p>`
    },
    {
      type: "svg",
      title: "The three positions of a line",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="300" cy="150" r="90" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="4"/>
<circle cx="300" cy="150" r="5" fill="#dc2626"/>
<text x="308" y="172" font-size="16" fill="#991b1b" font-weight="bold">C</text>
<line x1="150" y1="110" x2="460" y2="110" stroke="#16a34a" stroke-width="4"/>
<line x1="390" y1="30" x2="390" y2="280" stroke="#ea580c" stroke-width="4"/>
<line x1="130" y1="270" x2="470" y2="270" stroke="#7c3aed" stroke-width="4"/>
<line x1="300" y1="150" x2="300" y2="110" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="300" y1="150" x2="390" y2="150" stroke="#ea580c" stroke-width="2" stroke-dasharray="4 3"/>
<circle cx="390" cy="150" r="6" fill="#ea580c"/>
<text x="20" y="100" font-size="16" fill="#166534" font-weight="bold">secant: d &lt; r</text>
<text x="20" y="122" font-size="16" fill="#166534">Δ &gt; 0, two points</text>
<text x="400" y="50" font-size="16" fill="#9a3412" font-weight="bold">tangent: d = r</text>
<text x="400" y="72" font-size="16" fill="#9a3412">Δ = 0, one point</text>
<text x="20" y="262" font-size="16" fill="#6d28d9" font-weight="bold">external: d &gt; r</text>
<text x="20" y="284" font-size="16" fill="#6d28d9">Δ &lt; 0, no points</text>
<text x="398" y="166" font-size="14" fill="#9a3412">T</text>
</svg>`,
      caption: "The tangent line touches the circle at a single point T and is perpendicular to the radius CT."
    },
    {
      type: "text",
      title: "Tangent lines",
      html: `<p>A property from Euclidean geometry is the key: <b>the tangent at a point T is perpendicular to the radius CT</b>. From this, two cases.</p>
<p><b>1. Tangent at a point T(x₀, y₀) on the circle.</b> Calculate the gradient of the radius CT; the gradient of the tangent is its <b>negative reciprocal</b> (m·m′ = −1); then write the line through T. For the circle x² + y² = r² there is a shortcut: the tangent at T is <b>x₀x + y₀y = r²</b>. Example: at T(3, 4) on the circle x² + y² = 25 the tangent is 3x + 4y = 25. Check: the distance from the origin to 3x + 4y − 25 = 0 is 25/5 = 5 = r ✔️.</p>
<p><b>2. Tangents from an external point P.</b> There are two. Write the <b>pencil of lines</b> through P, y − y₀ = m(x − x₀), and impose that the distance of the centre from the line equals r (or Δ = 0 in the system): you get an equation in m with two solutions. If one tangent is vertical, the pencil with m will not find it: it must be checked separately (x = x₀).</p>
<p><b>Example.</b> Tangents from P(5, 0) to x² + y² = 9. The pencil is y = m(x − 5), that is mx − y − 5m = 0. Distance from the centre O: 5|m|/√(m² + 1) = 3 → 25m² = 9m² + 9 → 16m² = 9 → <b>m = ±3/4</b>. The tangents are y = ±(3/4)(x − 5). The points of tangency are (9/5, ±12/5); you can check that 9/5·5 = 9 ✔️. The vertical line x = 5 is not tangent (its distance from O is 5 &gt; 3).</p>`
    },
    {
      type: "example",
      title: "Real-life example: where am I? (trilateration)",
      html: `<p>A rescuer receives a person's signal at a radio tower at T₁(0, 0) and works out that the person is <b>5 km</b> away; from a second tower T₂(6, 0) the estimated distance is <b>5 km</b>. Where could the person be? On both circles: x² + y² = 25 and (x − 6)² + y² = 25. Subtracting one equation from the other: x² − (x − 6)² = 0 → 12x − 36 = 0 → x = 3; then y² = 25 − 9 = 16 → y = ±4. The two possible positions are (3, 4) and (3, −4): a <b>third tower</b> would be needed to choose between them, and this is exactly why GPS uses at least three satellites (in space the "circles" become spheres).</p>
<p>Note the trick: subtracting the equations of two circles makes the second-degree terms disappear and leaves a <b>line</b>, called the <b>radical axis</b>, on which the intersections lie.</p>`
    },
    {
      type: "example",
      title: "Real-life example: the circle through three points",
      html: `<p>Exactly one circle passes through three non-collinear points. Let's find the one through A(0, 0), B(4, 0), C(0, 2) using the general form x² + y² + αx + βy + γ = 0 and imposing that it passes through them:</p>
<ul>
<li>A: γ = 0;</li>
<li>B: 16 + 4α + γ = 0 → α = −4;</li>
<li>C: 4 + 2β + γ = 0 → β = −2.</li>
</ul>
<p>Equation: <b>x² + y² − 4x − 2y = 0</b>, centre (2, 1), r² = 4 + 1 − 0 = 5, r = √5. Geometric check: triangle ABC has a right angle at A (A is the origin, B is on the x-axis, C on the y-axis), so the hypotenuse BC is a diameter and the centre is its midpoint, ((4 + 0)/2 ; (0 + 2)/2) = (2, 1) ✔️.</p>
<p>Another type of question: the circle with centre (2, −1) <b>tangent to the line</b> 3x + 4y + 13 = 0. The radius is the distance of the centre from the line: |6 − 4 + 13|/5 = 15/5 = 3. Equation: (x − 2)² + (y + 1)² = 9.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? GPS and spheres",
      html: `<p>The GPS (Global Positioning System) uses a constellation of at least 24 satellites. The receiver measures the time the signal takes to arrive and, multiplying it by the speed of light, works out the distance from each satellite: each measurement identifies a <b>sphere</b> (in 2D, a circle) on which you are located. Three spheres meet at two points, one of which is absurd (far from the Earth); but the receiver's clock is much less precise than the satellites' atomic clocks, so a <b>fourth satellite</b> is used to correct the timing error. It's analytic geometry at work every time you open a map.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The number π",
      html: `<p>The ratio between the circumference and the diameter is the same for every circle: it is the number <b>π</b> ≈ 3.14159…, which is <b>irrational</b> (proved by Johann Heinrich Lambert in 1761) and even <b>transcendental</b> (Ferdinand von Lindemann, 1882): it is not a solution of any algebraic equation with integer coefficients. This implies that <b>squaring the circle</b> is impossible: the Greek problem of constructing, with straightedge and compass, a square with the same area as a given circle.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the circle",
      intro: "If the equation seems like just a formula to learn by heart, try one of these ways of seeing it.",
      tabs: [
        {
          label: "📏 Compass and string",
          html: `<p>Hammer a peg into the ground (the centre), tie on a rope of length r and walk round keeping it taut: the end of the rope traces a circle. The taut rope is the segment PC and its length never changes: <b>PC = r</b>. The equation says the same thing in coordinates: "the distance of P from the centre is r". A point inside is one where the rope would be "slack" (distance less than r); a point outside is beyond the length of the rope.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><circle cx="220" cy="150" r="110" fill="none" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 6"/><circle cx="220" cy="150" r="7" fill="#dc2626"/><line x1="220" y1="150" x2="300" y2="76" stroke="#ea580c" stroke-width="4"/><circle cx="300" cy="76" r="7" fill="#16a34a"/><text x="232" y="172" font-size="16" fill="#991b1b" font-weight="bold">peg C</text><text x="312" y="72" font-size="16" fill="#166534" font-weight="bold">P (pencil)</text><text x="238" y="106" font-size="16" fill="#9a3412" font-weight="bold">rope = r</text><text x="400" y="160" font-size="16" fill="#334155">PC = r for every P</text></svg>`
        },
        {
          label: "🧩 Completing the square",
          html: `<p>The general form x² + y² + αx + βy + γ = 0 is a "disguise" for the standard form. To unmask it, <b>complete the square</b> twice (once for x, once for y), as with quadratic equations. Example: x² + y² + 6x − 2y + 6 = 0 → (x² + 6x + 9) + (y² − 2y + 1) = −6 + 9 + 1 → (x + 3)² + (y − 1)² = 4: centre (−3, 1), r = 2. If a negative number came out on the right-hand side, no point would satisfy the equation. This method is easier to remember than the formulas α/2, β/2 because it reuses a skill you already have.</p>`,
          widget: "numberLine",
          options: { min: -6, max: 2, step: 1, marks: [-3, -1, -5] }
        },
        {
          label: "🔺 Right triangles and triples",
          html: `<p>Draw the circle x² + y² = 25: all its points with integer coordinates are linked to the <b>Pythagorean triple</b> 3-4-5. The points (±3, ±4), (±4, ±3), (±5, 0), (0, ±5) are as many as 12, and they lie on the circle because 9 + 16 = 25. Move the sliders and notice that the right-angled triangle with hypotenuse 5 has legs 3 and 4: the equation of the circle is exactly Pythagoras' relation, with the hypotenuse fixed.</p>`,
          widget: "pythagoras",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the circle: tap the nodes to find out why",
      nodes: [
        { id: "luogo", label: "Locus", x: 50, y: 6, color: "#6366f1", html: "The points at distance r from a centre C.", why: "It is the definition given by Euclid in the Elements (Book I, Definition 15): a plane figure bounded by one line, such that all the straight lines falling on it from one point inside it are equal." },
        { id: "pitagora", label: "Pythagoras and distance", x: 18, y: 30, color: "#16a34a", html: "d(P, C)² = (x − a)² + (y − b)².", why: "Pythagoras' theorem on the right-angled triangle with legs x − a and y − b: the analytic geometry of Descartes and Fermat (17th century) makes distance algebraic." },
        { id: "eq", label: "Equation", x: 82, y: 30, color: "#f59e0b", html: "(x − a)² + (y − b)² = r², or x² + y² + αx + βy + γ = 0.", why: "Squaring the condition PC = r eliminates the square root; the general form comes from expanding the squares." },
        { id: "tre", label: "Three conditions", x: 50, y: 50, color: "#a855f7", html: "Three parameters are needed: the centre (two coordinates) and the radius.", why: "Exactly one circle passes through three non-collinear points: its centre is the intersection of the perpendicular bisectors of the segments (points equidistant from the endpoints)." },
        { id: "retta", label: "Line and Δ", x: 18, y: 75, color: "#ef4444", html: "Substituting the line into the circle gives a quadratic equation: Δ &gt; 0, = 0, &lt; 0.", why: "The intersection of two curves is the solution of a system: the degree of the resulting equation gives the maximum number of common points (here at most 2)." },
        { id: "dist", label: "Centre-to-line distance", x: 82, y: 75, color: "#0ea5e9", html: "d &lt; r secant, d = r tangent, d &gt; r external.", why: "The point of the line closest to the centre is the foot of the perpendicular: if its distance is r, the line touches the circle only there." },
        { id: "tang", label: "Tangent ⟂ radius", x: 50, y: 92, color: "#14b8a6", html: "The tangent at T is perpendicular to CT.", why: "If it were not, the line would enter the disc and cut the circle at a second point (a theorem of Euclidean geometry from your first two years)." }
      ],
      edges: [
        ["luogo", "pitagora", "is measured with"],
        ["pitagora", "eq", "gives"],
        ["luogo", "tre", "has"],
        ["eq", "retta", "intersects"],
        ["retta", "dist", "is equivalent to"],
        ["dist", "tang", "limiting case"],
        ["tre", "retta", "after the general form"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: lines and tangents",
      questions: [
        { type: "mc", q: "With respect to the circle x² + y² = 16, the line y = 5 is…", options: ["secant", "tangent", "external"], answer: 2, explain: "The distance from O to y = 5 is 5 &gt; 4 = r: the line is external." },
        { type: "mc", q: "The tangent to x² + y² = 25 at the point (0, 5) is…", options: ["y = 5", "x = 5", "y = −5"], answer: 0, explain: "Using the shortcut x₀x + y₀y = r²: 0·x + 5y = 25 → y = 5, a horizontal line perpendicular to the vertical radius." },
        { type: "num", q: "For what positive value of k is the line y = k tangent to x² + (y − 1)² = 9?", answer: 4, explain: "The centre is (0, 1), r = 3: the horizontal tangents are y = 1 ± 3, that is y = 4 and y = −2. The one with positive k is y = 4." }
      ]
    }
  ],
  glossary: [
    { t: "Circle", d: "The locus of points in the plane at a fixed distance r (the radius) from a point C (the centre)." },
    { t: "Standard equation", d: "(x − a)² + (y − b)² = r²: it shows the centre C(a, b) and the radius r straight away." },
    { t: "General form", d: "x² + y² + αx + βy + γ = 0, with α² + β² − 4γ &gt; 0." },
    { t: "Completing the square", d: "A procedure for rewriting a trinomial as the square of a binomial plus a constant." },
    { t: "Secant", d: "A line that intersects the circle at two points." },
    { t: "Tangent", d: "A line that has only one point in common with the circle and is perpendicular to the radius at that point." },
    { t: "External line", d: "A line that has no points in common with the circle." },
    { t: "Discriminant Δ", d: "The number b² − 4ac: its sign tells you how many real solutions a quadratic equation has." },
    { t: "Pencil of lines", d: "The set of lines passing through the same point, described by a parameter m." },
    { t: "Radical axis", d: "The line obtained by subtracting the equations of two circles: it contains their common points." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the equation of the circle with centre (1, −2) and radius 4?", options: ["(x − 1)² + (y + 2)² = 16", "(x + 1)² + (y − 2)² = 16", "(x − 1)² + (y + 2)² = 4"], answer: 0, explain: "With C(a, b): (x − a)² + (y − b)² = r², so (x − 1)² + (y + 2)² = 16." },
      { type: "num", q: "What is the radius of x² + y² − 2x + 4y − 4 = 0?", answer: 3, explain: "Centre (1, −2); r² = 1 + 4 + 4 = 9, r = 3." },
      { type: "mc", q: "Which equation does NOT represent a circle?", options: ["x² + y² − 4 = 0", "x² + y² + 2x + 2y + 5 = 0", "x² + y² − 6x = 0"], answer: 1, explain: "α² + β² − 4γ = 4 + 4 − 20 = −12 &lt; 0: no real points. The other two have radius 2 and 3." },
      { type: "tf", q: "The circle x² + y² − 10x = 0 passes through the origin.", answer: true, explain: "Substituting x = y = 0 gives 0 = 0. Indeed γ = 0 (centre (5, 0), r = 5)." },
      { type: "mc", q: "At how many points does the line y = x + 1 intersect x² + y² = 25?", options: ["0", "1", "2"], answer: 2, explain: "Substituting: x² + x − 12 = 0, Δ = 49 &gt; 0: two points, (3, 4) and (−4, −3)." },
      { type: "num", q: "Calculate the distance of the centre O from the line 3x + 4y − 15 = 0 (circle x² + y² = 4): is it greater than, equal to or less than r? Write the distance.", answer: 3, explain: "d = 15/√(9 + 16) = 15/5 = 3 &gt; 2 = r: the line is external." },
      { type: "mc", q: "A line is tangent to a circle when…", options: ["Δ &gt; 0", "d(C, line) = r", "d(C, line) &gt; r"], answer: 1, explain: "Tangent: only one common point, that is Δ = 0 and the distance of the centre from the line equals the radius." },
      { type: "mc", q: "The tangent to x² + y² = 25 at (3, 4) is…", options: ["3x + 4y = 25", "4x + 3y = 25", "3x − 4y = 25"], answer: 0, explain: "x₀x + y₀y = r² with x₀ = 3, y₀ = 4. The radius has gradient 4/3 and the tangent −3/4." },
      { type: "text", q: "What is a line that has two points in common with a circle called?", answer: ["secant", "a secant", "secant line", "a secant line", "the secant"], explain: "Two points in common: secant; only one: tangent; none: external." },
      { type: "order", q: "Put in order the steps for finding the tangents from an external point P.", items: ["Write the pencil of lines through P: y − y₀ = m(x − x₀)", "Impose d(centre, line) = r", "Solve the equation in m", "Write the two tangents and check the vertical line"], explain: "Start from the pencil, impose tangency, solve for m and check separately the vertical case, which the pencil does not contain." }
    ]
  }
});
