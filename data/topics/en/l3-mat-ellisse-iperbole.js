TOPIC('en', {
  id: "l3-mat-ellisse-iperbole",
  title: "Ellipse and hyperbola",
  intro: "The planets do not move round the Sun in circles, but in <b>ellipses</b>; a comet that passes by only once and heads off into deep space traces one branch of a <b>hyperbola</b>; the sonic boom of a supersonic plane forms a cone that traces a hyperbola on the ground. The ellipse and the hyperbola, together with the circle and the parabola, are the <b>conic sections</b>, the curves obtained by slicing a cone with a plane. In this lesson we define them using their <b>foci</b>, derive their equations and learn to read off their elements: semi-axes, foci, eccentricity, asymptotes.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Conic sections: a family of curves",
      html: `<p>The Greek mathematician <b>Apollonius of Perga</b> (3rd–2nd century BC) wrote eight books on <i>Conics</i>, in which he studied the curves obtained by slicing a cone with a plane: the <b>circle</b> (plane perpendicular to the axis), the <b>ellipse</b> (tilted plane cutting all the generators), the <b>parabola</b> (plane parallel to a generator) and the <b>hyperbola</b> (plane cutting both halves, or nappes, of the cone). The names ellipse, parabola and hyperbola are due to him.</p>
<p>In the 17th century, with the analytic geometry of Descartes and Fermat, every conic became the set of points satisfying a <b>second-degree equation</b> in x and y. After the circle (previous lesson), here we study the two "central" conics with two foci: the ellipse and the hyperbola.</p>
<p>A common key: both the ellipse and the hyperbola are defined by <b>two fixed points F₁ and F₂, the foci</b>, and a condition on the distances from them. Only the operation changes: the <b>sum</b> for the ellipse, the <b>difference</b> for the hyperbola.</p>`
    },
    {
      type: "text",
      title: "The ellipse: definition and equation",
      html: `<p>The <b>ellipse</b> is the locus of points P in the plane for which the <b>sum of the distances from two fixed points F₁ and F₂ is constant</b>: PF₁ + PF₂ = 2a, with 2a greater than the distance F₁F₂. If the foci coincide, we get the circle again.</p>
<p>Let's choose the coordinate system with the foci on the x-axis, symmetric about the origin: F₁(−c, 0) and F₂(c, 0). With a little algebra (isolate one square root and square twice) we obtain the <b>standard equation</b>:</p>
<p style="text-align:center"><b>x²/a² + y²/b² = 1</b>, with b² = a² − c², that is <b>c² = a² − b²</b></p>
<ul>
<li><b>a</b> is the semi-major axis (along the x-axis), <b>b</b> the semi-minor axis: the ellipse crosses the axes at the <b>vertices</b> (±a, 0) and (0, ±b).</li>
<li>The <b>foci</b> are F(±c, 0), with c = √(a² − b²).</li>
<li>The <b>eccentricity</b> <b>e = c/a</b> measures how "flattened" the ellipse is: 0 ≤ e &lt; 1. With e = 0 it is a circle; with e close to 1 it is very elongated.</li>
<li>The ellipse is symmetric about the axes and about the origin (its centre). Its <b>area</b> is <b>πab</b>.</li>
<li>If instead <b>b &gt; a</b>, the major axis is vertical: the foci are on the y-axis, F(0, ±c) with <b>c² = b² − a²</b>, and e = c/b.</li>
</ul>
<p><b>Example.</b> x²/25 + y²/9 = 1: a = 5, b = 3, c = √(25 − 9) = 4. Foci F(±4, 0), eccentricity e = 4/5 = 0.8. Check with the point P(3, 12/5): PF₂ = √(1 + 144/25) = 13/5; PF₁ = √(49 + 144/25) = 37/5; sum = 50/5 = 10 = 2a ✔️.</p>
<p><b>From the general equation.</b> 9x² + 25y² = 225 → dividing by 225 → x²/25 + y²/9 = 1. And 4x² + y² = 16 → x²/4 + y²/16 = 1: b² = 16 &gt; a² = 4, vertical major axis, c² = 12, foci F(0, ±2√3), e = 2√3/4 = √3/2.</p>`
    },
    {
      type: "svg",
      title: "The elements of the ellipse",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#94a3b8" stroke-width="1.5"/>
<ellipse cx="300" cy="150" rx="200" ry="110" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="4"/>
<circle cx="167" cy="150" r="6" fill="#dc2626"/>
<circle cx="433" cy="150" r="6" fill="#dc2626"/>
<circle cx="360" cy="45" r="6" fill="#16a34a"/>
<line x1="167" y1="150" x2="360" y2="45" stroke="#ea580c" stroke-width="2.5"/>
<line x1="433" y1="150" x2="360" y2="45" stroke="#ea580c" stroke-width="2.5"/>
<text x="130" y="175" font-size="16" fill="#991b1b" font-weight="bold">F₁(−c, 0)</text>
<text x="415" y="175" font-size="16" fill="#991b1b" font-weight="bold">F₂(c, 0)</text>
<text x="368" y="42" font-size="16" fill="#166534" font-weight="bold">P</text>
<text x="500" y="140" font-size="14" fill="#334155">(a, 0)</text>
<text x="305" y="36" font-size="14" fill="#334155">(0, b)</text>
<text x="20" y="40" font-size="16" fill="#9a3412" font-weight="bold">PF₁ + PF₂ = 2a</text>
<text x="20" y="65" font-size="16" fill="#1d4ed8">x²/a² + y²/b² = 1</text>
<text x="20" y="90" font-size="16" fill="#334155">c² = a² − b²,  e = c/a &lt; 1</text>
</svg>`,
      caption: "At every point of the ellipse the sum of the distances from the two foci is always the same: 2a, the length of the major axis."
    },
    {
      type: "remember",
      title: "The ellipse in brief",
      html: `<ul>
<li>Equation: <b>x²/a² + y²/b² = 1</b>, with a ≠ b (if a = b it is a circle of radius a).</li>
<li>The foci lie on the axis of the <b>major</b> semi-axis; c² = (semi-major axis)² − (semi-minor axis)².</li>
<li>Eccentricity <b>e = c/(semi-major axis)</b>, always between 0 and 1.</li>
<li>The major axis measures 2a (the constant sum of the distances from the foci).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the ellipse",
      questions: [
        { type: "num", q: "In the ellipse x²/16 + y²/7 = 1, what is c (the distance of a focus from the centre)?", answer: 3, explain: "c² = a² − b² = 16 − 7 = 9, so c = 3. The foci are (±3, 0)." },
        { type: "mc", q: "For the ellipse x²/4 + y²/9 = 1 the foci are…", options: ["on the x-axis", "on the y-axis", "at the origin"], answer: 1, explain: "The semi-major axis is b = 3, vertical: the foci are on the y-axis, at distance c = √(9 − 4) = √5." },
        { type: "tf", q: "An ellipse with eccentricity 0 is a circle.", answer: true, explain: "e = c/a = 0 means c = 0: the foci coincide with the centre and a = b." }
      ]
    },
    {
      type: "text",
      title: "The hyperbola: definition and equation",
      html: `<p>The <b>hyperbola</b> is the locus of points P in the plane for which the <b>difference (in absolute value) of the distances from two fixed points F₁ and F₂ is constant</b>: |PF₁ − PF₂| = 2a, with 2a less than the distance F₁F₂. With the foci F(±c, 0) we obtain the standard equation:</p>
<p style="text-align:center"><b>x²/a² − y²/b² = 1</b>, with <b>c² = a² + b²</b></p>
<ul>
<li>The hyperbola consists of <b>two separate branches</b>. The <b>vertices</b> are V(±a, 0): it never crosses the y-axis (for x = 0 we would have y² = −b², which is impossible).</li>
<li>The <b>foci</b> are F(±c, 0), with c = √(a² + b²) &gt; a (whereas in the ellipse c &lt; a).</li>
<li>The <b>eccentricity</b> is <b>e = c/a &gt; 1</b>.</li>
<li>The <b>asymptotes</b> are the lines <b>y = ±(b/a)x</b>: the branches get closer and closer to them as they move away from the origin, without ever touching them.</li>
<li>If the equation is <b>x²/a² − y²/b² = −1</b>, the branches open upwards and downwards: vertices (0, ±b), foci F(0, ±c) with c² = a² + b², asymptotes still y = ±(b/a)x.</li>
</ul>
<p><b>Example.</b> x²/9 − y²/16 = 1: a = 3, b = 4, c = √(9 + 16) = 5. Vertices (±3, 0), foci (±5, 0), e = 5/3, asymptotes y = ±(4/3)x. Check: P(5, 16/3) lies on the hyperbola (25/9 − (256/9)/16 = 25/9 − 16/9 = 1); its distance from the focus (5, 0) is 16/3 and from (−5, 0) it is √(100 + 256/9) = 34/3: the difference is 18/3 = 6 = 2a ✔️.</p>
<p><b>Rectangular hyperbola.</b> If a = b the asymptotes are perpendicular (y = ±x) and e = √2. Rotated so that the asymptotes are the coordinate axes, its equation is <b>xy = k</b> (k ≠ 0): it is the graph of <b>inverse proportion</b> y = k/x. For k &gt; 0 it lies in the 1st and 3rd quadrants, for k &lt; 0 in the 2nd and 4th.</p>`
    },
    {
      type: "svg",
      title: "The elements of the hyperbola",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="120" y1="20" x2="480" y2="280" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="8 6"/>
<line x1="120" y1="280" x2="480" y2="20" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="8 6"/>
<path d="M 380 30 Q 350 150 380 270" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M 220 30 Q 250 150 220 270" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="350" cy="150" r="6" fill="#16a34a"/>
<circle cx="250" cy="150" r="6" fill="#16a34a"/>
<circle cx="425" cy="150" r="6" fill="#dc2626"/>
<circle cx="175" cy="150" r="6" fill="#dc2626"/>
<text x="352" y="172" font-size="14" fill="#166534" font-weight="bold">V(a,0)</text>
<text x="185" y="172" font-size="14" fill="#166534" font-weight="bold">V′</text>
<text x="432" y="172" font-size="14" fill="#991b1b" font-weight="bold">F₂</text>
<text x="150" y="172" font-size="14" fill="#991b1b" font-weight="bold">F₁</text>
<text x="440" y="60" font-size="16" fill="#9a3412" font-weight="bold">y = (b/a)x</text>
<text x="440" y="250" font-size="16" fill="#9a3412" font-weight="bold">y = −(b/a)x</text>
<text x="20" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">|PF₁ − PF₂| = 2a</text>
<text x="20" y="65" font-size="16" fill="#1d4ed8">x²/a² − y²/b² = 1</text>
<text x="20" y="90" font-size="16" fill="#334155">c² = a² + b²,  e = c/a &gt; 1</text>
</svg>`,
      caption: "The two branches of the hyperbola approach the asymptotes (dashed). The foci lie inside the branches, further from the centre than the vertices."
    },
    {
      type: "text",
      title: "Lines and conics: tangents and intersections",
      html: `<p>As with the circle, the position of a line relative to an ellipse or a hyperbola is decided by <b>substituting</b> y = mx + q into the equation of the conic: you get a quadratic equation in x, and the sign of the <b>discriminant</b> tells you whether the line is a <b>secant</b> (Δ &gt; 0), a <b>tangent</b> (Δ = 0) or <b>external</b> (Δ &lt; 0). (For the hyperbola you need to be extra careful: a line parallel to an asymptote meets the hyperbola at a single point without being tangent, because the equation drops in degree.)</p>
<p><b>Example.</b> Ellipse x²/4 + y² = 1 and line y = x + 1: x²/4 + (x + 1)² = 1 → x² + 4x² + 8x + 4 = 4 → 5x² + 8x = 0 → x = 0 or x = −8/5. The points are (0, 1) and (−8/5, −3/5): a secant line.</p>
<p><b>Tangent at a point.</b> For a point P(x₀, y₀) on the ellipse x²/a² + y²/b² = 1 the tangent is <b>x₀x/a² + y₀y/b² = 1</b>; for the hyperbola x²/a² − y²/b² = 1 it is <b>x₀x/a² − y₀y/b² = 1</b>. Example: at P(0, b) the ellipse has tangent y = b (horizontal), as you would expect at the highest point.</p>
<p><b>Parameter k.</b> For which k is the line y = x + k tangent to x²/8 + y²/2 = 1? Substituting: x² + 4(x + k)² = 8 → 5x² + 8kx + 4k² − 8 = 0, Δ/4 = 16k² − 5(4k² − 8) = 40 − 4k² = 0 → k² = 10 → k = ±√10.</p>`
    },
    {
      type: "example",
      title: "Real-life example: the whispering gallery",
      html: `<p>The ellipse has a surprising property: <b>a ray (of light or sound) that leaves one focus and bounces off the curve always passes through the other focus</b>. In a room with an elliptical ceiling or walls, a person whispering at one focus can be heard perfectly by someone standing at the other focus, even if they are far apart and there is noise in between. Effects of this kind can be observed in some famous galleries and domes; the same principle is used in <b>lithotripsy</b> (kidney stones are broken up with shock waves: the device is at one focus of an elliptical reflector, the stone at the other).</p>
<p>If the room is x²/25 + y²/9 = 1 with units in metres, the foci are at (±4, 0): the two people must stand 8 m apart, on the segment joining the foci.</p>`
    },
    {
      type: "example",
      title: "Real-life example: orbits and comets",
      html: `<p>In 1609 <b>Johannes Kepler</b> published his <i>Astronomia nova</i> containing his <b>first law</b>: the orbit of every planet is an <b>ellipse</b> with the Sun at one of the two foci. The Earth's orbit has eccentricity e ≈ 0.017, practically circular: its distance from the Sun ranges from about 147 to about 152 million km. Halley's Comet, on the other hand, has e ≈ 0.97: a very elongated ellipse, with a period of about 76 years.</p>
<p>If the eccentricity rises above 1, the curve no longer closes: the object passes by only once and leaves along <b>one branch of a hyperbola</b>. In 2017 the interstellar object 'Oumuamua, on a clearly hyperbolic orbit, was the first body of this kind observed in the Solar System: it came from outside and would not return.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The gardener's method",
      html: `<p>To draw an ellipse, all you need is a piece of string and two nails: fix the ends of the string at the two foci and, keeping it taut with a pencil, trace the curve. Since the string has a fixed length, the sum PF₁ + PF₂ is constant at every point: this is exactly the definition of the ellipse. It is also called the <b>gardener's method</b>, because this is how elliptical flower beds are marked out.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Hyperbolas in the sky and at sea",
      html: `<p><b>LORAN</b> navigation (used before GPS) worked out a ship's position from the <b>difference</b> in arrival times of radio signals from two transmitters: a constant difference in distance means being on a hyperbola with its foci at the transmitters; with two pairs of transmitters, two hyperbolas intersect and the point is found. A plane flying faster than sound drags a shock cone behind it, which traces a hyperbolic curve where it meets the ground. It is no coincidence: the hyperbola is precisely a section of a cone.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the ellipse and the hyperbola",
      intro: "The equations look similar: here are three ways to remember which is which, and why.",
      tabs: [
        {
          label: "✂️ The sliced cone",
          html: `<p>Imagine a double cone, like two hourglass halves joined at their tips. If you slice it with a <b>horizontal</b> plane you get a circle. Tilting the plane, the section becomes an increasingly elongated <b>ellipse</b>. When the plane becomes parallel to a side of the cone, the curve no longer closes: it is the <b>parabola</b>. Tilting it further, the plane cuts both halves of the cone and you get the <b>two branches of the hyperbola</b>. The same family, with a single parameter that changes: the eccentricity (0 for the circle, between 0 and 1 for the ellipse, 1 for the parabola, greater than 1 for the hyperbola).</p>`
        },
        {
          label: "🔤 The sign makes the difference",
          html: `<p>The equation of the ellipse has a <b>+</b>: x²/a² + y²/b² = 1. Since two squares are positive, x and y cannot grow too large: the curve is bounded and closed. The hyperbola has a <b>−</b>: x²/a² − y²/b² = 1. Now x² can become huge as long as y² compensates for it, and the curve goes off to infinity. When x and y are very large, the "= 1" matters little and the equation becomes almost x²/a² − y²/b² = 0, that is y = ±(b/a)x: there are the asymptotes. The − sign also reminds you that for the hyperbola c² = a² + b² (you add), while for the ellipse c² = a² − b² (you subtract).</p>`
        },
        {
          label: "🔺 The c, a, b triangle",
          html: `<p>One way to remember the relationships between a, b and c is to use a <b>right-angled triangle</b>. In the ellipse, the focus F, the centre O and the vertex (0, b) form a right-angled triangle with legs c and b and hypotenuse a (the distance from that vertex to a focus, which equals a): so a² = b² + c², that is c² = a² − b². In the hyperbola, the right-angled triangle with legs a and b has hypotenuse c: c² = a² + b². Move the sliders and check with Pythagoras' theorem: in one case the hypotenuse is a, in the other it is c.</p>`,
          widget: "pythagoras",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the ellipse and hyperbola: tap the nodes to find out why",
      nodes: [
        { id: "cono", label: "Conic sections", x: 50, y: 6, color: "#6366f1", html: "Curves obtained by slicing a cone with a plane.", why: "Apollonius of Perga (about 200 BC) studied them all with synthetic geometry; the names ellipse, parabola and hyperbola come from him." },
        { id: "fuochi", label: "Foci", x: 18, y: 30, color: "#16a34a", html: "Two fixed points F₁ and F₂ that define the curve.", why: "Dandelin's theorem (1822) shows that the spheres inscribed in the cone and tangent to the plane touch the plane exactly at the foci: the definition with foci and the one with the cone are equivalent." },
        { id: "ell", label: "Ellipse: constant sum", x: 82, y: 30, color: "#f59e0b", html: "PF₁ + PF₂ = 2a; x²/a² + y²/b² = 1; c² = a² − b²; e &lt; 1.", why: "It comes from the 'taut string' definition. Squaring the condition twice gives the standard equation; the relationship between a, b, c is a right-angled triangle." },
        { id: "ip", label: "Hyperbola: constant difference", x: 50, y: 52, color: "#a855f7", html: "|PF₁ − PF₂| = 2a; x²/a² − y²/b² = 1; c² = a² + b²; e &gt; 1.", why: "The same algebraic procedure as for the ellipse, but with the difference instead of the sum: the minus sign in the equation changes its whole shape." },
        { id: "ecc", label: "Eccentricity", x: 18, y: 78, color: "#ef4444", html: "e = c/a measures how far the curve is from a circle.", why: "In the unified definition of the conics, attributed to Pappus of Alexandria (4th century AD), the curve is the locus of points with a constant ratio e between their distances from a focus and from a line (the directrix)." },
        { id: "asin", label: "Asymptotes", x: 82, y: 78, color: "#0ea5e9", html: "y = ±(b/a)x: lines that the hyperbola approaches at infinity.", why: "For large x and y, the '1' in the equation becomes negligible, leaving x²/a² − y²/b² ≈ 0, that is, two lines through the origin." },
        { id: "keplero", label: "Kepler and orbits", x: 50, y: 94, color: "#14b8a6", html: "The planets travel along ellipses with the Sun at one focus.", why: "Kepler discovered this in 1609 from Tycho Brahe's data on the orbit of Mars; Newton later proved that a force inversely proportional to the square of the distance produces conic orbits." }
      ],
      edges: [
        ["cono", "fuochi", "is described by"],
        ["fuochi", "ell", "sum"],
        ["fuochi", "ip", "difference"],
        ["ell", "ecc", "e &lt; 1"],
        ["ip", "asin", "has"],
        ["ip", "ecc", "e &gt; 1"],
        ["ell", "keplero", "applied to"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the hyperbola",
      questions: [
        { type: "num", q: "In the hyperbola x²/9 − y²/16 = 1, calculate c.", answer: 5, explain: "c² = a² + b² = 9 + 16 = 25, so c = 5." },
        { type: "mc", q: "The asymptotes of x²/4 − y²/9 = 1 are…", options: ["y = ±(3/2)x", "y = ±(2/3)x", "y = ±x"], answer: 0, explain: "y = ±(b/a)x with a = 2 and b = 3." },
        { type: "tf", q: "The eccentricity of a hyperbola is always less than 1.", answer: false, explain: "For the hyperbola e = c/a &gt; 1 because c² = a² + b² &gt; a². It is the ellipse that has e less than 1." }
      ]
    }
  ],
  glossary: [
    { t: "Conic section", d: "A curve obtained as the section of a cone by a plane: circle, ellipse, parabola, hyperbola." },
    { t: "Foci", d: "The two fixed points F₁ and F₂ with respect to which the ellipse and hyperbola are defined." },
    { t: "Ellipse", d: "The locus of points whose distances from the foci have a constant sum (2a)." },
    { t: "Hyperbola", d: "The locus of points whose distances from the foci have a constant difference in absolute value (2a)." },
    { t: "Semi-axes", d: "The numbers a and b in the standard equation: half the lengths of the axes of the ellipse." },
    { t: "Vertices", d: "The points where the conic crosses its axes of symmetry." },
    { t: "Eccentricity", d: "The ratio e = c/a: 0 ≤ e &lt; 1 for the ellipse, e &gt; 1 for the hyperbola." },
    { t: "Asymptote", d: "A line that a curve approaches indefinitely without touching it: for the hyperbola, y = ±(b/a)x." },
    { t: "Rectangular hyperbola", d: "A hyperbola with a = b and perpendicular asymptotes: xy = k is its equation with respect to the asymptotes." },
    { t: "Apollonius of Perga", d: "Greek mathematician (3rd–2nd century BC), author of the Conics, who gave the conic sections their names." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which equation represents an ellipse?", options: ["x²/9 + y²/4 = 1", "x²/9 − y²/4 = 1", "x² + y² = 9"], answer: 0, explain: "A sum of squares with different denominators: an ellipse. With the minus sign it is a hyperbola; x² + y² = r² is a circle." },
      { type: "num", q: "In the ellipse x²/25 + y²/9 = 1, calculate the focal distance 2c.", answer: 8, explain: "c² = 25 − 9 = 16, c = 4, so 2c = 8." },
      { type: "num", q: "What is the eccentricity (as a decimal) of the ellipse x²/25 + y²/9 = 1?", answer: 0.8, tol: 0.001, explain: "e = c/a = 4/5 = 0.8." },
      { type: "mc", q: "What are the foci of x²/9 − y²/16 = 1?", options: ["(±5, 0)", "(±√7, 0)", "(0, ±5)"], answer: 0, explain: "c² = a² + b² = 25; the hyperbola opens along the x-axis." },
      { type: "mc", q: "The asymptotes of x²/16 − y²/9 = 1 are…", options: ["y = ±(3/4)x", "y = ±(4/3)x", "y = ±x"], answer: 0, explain: "y = ±(b/a)x = ±(3/4)x." },
      { type: "tf", q: "An ellipse with a = b has eccentricity 0.", answer: true, explain: "c² = a² − b² = 0: the foci coincide with the centre and the curve is a circle." },
      { type: "mc", q: "The equation xy = 6 represents…", options: ["a rectangular hyperbola", "an ellipse", "a parabola"], answer: 0, explain: "It is the graph of the inverse proportion y = 6/x, a hyperbola with the axes as asymptotes." },
      { type: "tf", q: "A hyperbola crosses the y-axis at the origin.", answer: false, explain: "For x²/a² − y²/b² = 1, with x = 0 we would have y² = −b² &lt; 0: there are no intersections with the y-axis. The origin is the centre and does not lie on the curve." },
      { type: "text", q: "What is the name of the astronomer who first stated, in 1609, that planetary orbits are elliptical? (surname)", answer: ["kepler", "johannes kepler", "keplero", "giovanni keplero"], explain: "Johannes Kepler, in his Astronomia nova (1609): the Sun is at one of the two foci." },
      { type: "order", q: "Put in order the steps for finding the foci of an ellipse given in the form 9x² + 25y² = 225.", items: ["Divide by 225 to get x²/25 + y²/9 = 1", "Read off a² = 25 and b² = 9", "Calculate c² = a² − b² = 16", "Write the foci F(±4, 0)"], explain: "Put the equation in standard form, read off the squares of the semi-axes, calculate c and write the foci on the axis of the semi-major axis." }
    ]
  }
});
