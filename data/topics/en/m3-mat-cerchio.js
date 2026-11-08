TOPIC('en', {
  id: "m3-mat-cerchio",
  title: "Circumference and Circle",
  intro: "Wheels, pizzas, clocks, coins, the running track: circles are everywhere. Let's learn their parts, discover the mysterious number <b>π</b> (pi) and calculate the <b>circumference</b>, the <b>area of the circle</b>, and of <b>arcs</b>, <b>sectors</b> and <b>annuli</b> (rings).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Circumference and circle: they are not the same thing",
      html: `<p>The <b>circumference</b> is the closed <b>line</b> made up of all the points of the plane that are at the <b>same distance</b> from a fixed point, the <b>centre</b>. The <b>circle</b> is the <b>part of the plane</b> enclosed by the circumference (including the circumference).</p>
<p>Think of a ring 💍 (circumference: it only has a length) and a coin 🪙 (circle: it has an area).</p>
<ul>
<li><b>Radius</b> (r): a segment from the centre to a point on the circumference.</li>
<li><b>Diameter</b> (d): a segment that passes through the centre and joins two points of the circumference: <b>d = 2r</b>. It is the longest chord.</li>
<li><b>Chord</b>: a segment that joins any two points of the circumference.</li>
<li><b>Arc</b>: the part of the circumference between two points.</li>
<li><b>Central angle</b>: an angle with its vertex at the centre.</li>
<li><b>Sector</b>: the part of the circle between two radii (a "slice of pizza").</li>
<li><b>Circular segment</b>: the part of the circle between a chord and an arc.</li>
<li><b>Annulus</b> (circular ring): the part of the plane between two circles with the same centre (<b>concentric</b>), like a CD or a doughnut.</li>
</ul>`
    },
    {
      type: "svg",
      title: "The parts of the circle",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fffbeb"/>
<circle cx="200" cy="160" r="130" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<path d="M200 160 L330 160 A130 130 0 0 0 292 68 Z" fill="#f97316" opacity="0.85"/>
<path d="M95 236 A130 130 0 0 0 200 290 L95 236 Z" fill="#60a5fa" opacity="0.9"/>
<line x1="95" y1="236" x2="200" y2="290" stroke="#1d4ed8" stroke-width="3"/>
<line x1="70" y1="160" x2="200" y2="160" stroke="#16a34a" stroke-width="4"/>
<line x1="108" y1="68" x2="292" y2="252" stroke="#7c3aed" stroke-width="4" stroke-dasharray="10 5"/>
<circle cx="200" cy="160" r="6" fill="#1f2937"/>
<text x="185" y="185" font-size="16" fill="#1f2937" font-weight="bold">O</text>
<text x="400" y="50" font-size="18" fill="#b45309" font-weight="bold">— circumference (the line)</text>
<text x="400" y="85" font-size="18" fill="#92400e" font-weight="bold">▇ circle (the surface)</text>
<text x="400" y="120" font-size="18" fill="#16a34a" font-weight="bold">— radius r</text>
<text x="400" y="155" font-size="18" fill="#7c3aed" font-weight="bold">- - diameter d = 2r</text>
<text x="400" y="190" font-size="18" fill="#ea580c" font-weight="bold">▇ sector</text>
<text x="400" y="225" font-size="18" fill="#1d4ed8" font-weight="bold">— chord and ▇ circular segment</text>
<text x="400" y="260" font-size="18" fill="#c2410c">∠ central angle of the sector</text>
</svg>`,
      caption: "The orange sector is bounded by two radii and an arc; the blue segment by a chord and an arc."
    },
    {
      type: "text",
      title: "Lines and circles, inscribed angles",
      html: `<p>A line can be in one of three positions relative to a circle (d = distance of the line from the centre):</p>
<ul>
<li><b>external</b>: no points in common (d &gt; r);</li>
<li><b>tangent</b>: exactly one point in common (d = r); the tangent is <b>perpendicular to the radius</b> at the point of contact;</li>
<li><b>secant</b>: two points in common (d &lt; r).</li>
</ul>
<p>An <b>inscribed angle</b> has its vertex on the circle and its sides cut the circle. Important property: <b>an inscribed angle is half of the central angle</b> that subtends the same arc. Consequence: every inscribed angle that subtends a <b>semicircle</b> is a <b>right angle</b> (90°): every triangle inscribed with one side on the diameter is right-angled (a theorem attributed to <b>Thales</b>).</p>`
    },
    {
      type: "text",
      title: "The number π and the length of the circumference",
      html: `<p>Take any round object, measure its circumference C with a piece of string and its diameter d, and work out C : d. With a can, a plate or a wheel you will always get about <b>3.14</b>! This number is called <b>π</b> (pi):</p>
<p style="text-align:center;font-size:1.2em"><b>π = C : d ≈ 3.14159265…</b></p>
<p>π is an <b>irrational</b> number: it has infinitely many decimal digits that never repeat in a regular pattern. In calculations we usually use <b>3.14</b>.</p>
<p>Formulas:</p>
<ul>
<li><b>C = π · d = 2 · π · r</b></li>
<li>Inverse formulas: <b>d = C : π</b>, <b>r = C : (2π)</b></li>
<li><b>Length of an arc</b> with central angle α: <b>l = C · α / 360°</b>. The arc is proportional to its angle: half the angle, half the arc.</li>
</ul>
<p>Example: r = 5 cm → C = 2 · 3.14 · 5 = <b>31.4 cm</b>. A 72° arc is 72/360 = 1/5 → 31.4 : 5 = <b>6.28 cm</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: parts and circumference",
      questions: [
        { type: "mc", q: "The longest chord of a circle is…", options: ["the radius", "the diameter", "the arc"], answer: 1, explain: "The diameter passes through the centre and is the longest possible chord." },
        { type: "num", q: "Length of the circumference with radius 10 cm (π = 3.14)?", answer: 62.8, tol: 0.01, unit: "cm", explain: "2 · 3.14 · 10 = 62.8 cm." },
        { type: "tf", q: "A tangent line has two points in common with the circle.", answer: false, explain: "A tangent has only one point in common; a secant has two." }
      ]
    },
    {
      type: "text",
      title: "The area of the circle, the sector and the annulus",
      html: `<ul>
<li><b>Area of the circle</b>: <b>A = π · r²</b>. Inverse formula: <b>r = √(A : π)</b>.</li>
<li><b>Area of a sector</b> with angle α: <b>A<sub>s</sub> = π r² · α / 360°</b>. A quarter of a circle (90°) has area πr²/4.</li>
<li>Alternative formula for the sector: <b>A<sub>s</sub> = l · r / 2</b> (like a "triangle" with the arc as its base and the radius as its height).</li>
<li><b>Area of the annulus</b>: <b>A = π (R² − r²)</b>, where R is the outer radius and r the inner one.</li>
</ul>
<p>⚠️ Careful: if the radius <b>doubles</b>, the circumference doubles but the area becomes <b>4 times</b> bigger (because r is squared)!</p>
<p>Example: r = 6 cm → A = 3.14 · 36 = <b>113.04 cm²</b>. A 60° sector → 113.04 · 60/360 = 113.04 : 6 = <b>18.84 cm²</b>.</p>`
    },
    {
      type: "widget",
      title: "Sectors as fractions of a circle",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "A sector is a fraction of the circle: 1/6 of the circle corresponds to an angle of 360° : 6 = 60°. Move the sliders and work out the angle of each sector."
    },
    {
      type: "example",
      title: "Practical example: the bicycle wheel",
      html: `<p>A bicycle wheel has a diameter of <b>66 cm</b> (a 26-inch wheel).</p>
<ul>
<li>In one turn it covers C = 3.14 · 66 = <b>207.24 cm ≈ 2.07 m</b>.</li>
<li>To cover <b>1 km</b> (100,000 cm), how many turns does it make? 100,000 : 207.24 ≈ <b>483 turns</b>.</li>
<li>This is exactly how a bike's <b>speedometer</b> works: a magnet on the wheel counts the turns and multiplies them by the circumference!</li>
</ul>`
    },
    {
      type: "example",
      title: "Practical example: one large pizza or two medium ones?",
      html: `<p>At the pizzeria: a <b>large</b> pizza has a diameter of <b>40 cm</b>, a <b>medium</b> one has a diameter of <b>28 cm</b>. Is it better to get one large or two medium?</p>
<ul>
<li>Large: r = 20 → A = 3.14 · 400 = <b>1256 cm²</b>.</li>
<li>Two medium: r = 14 → A = 3.14 · 196 = 615.44 → × 2 = <b>1230.88 cm²</b>.</li>
</ul>
<p>Surprise: <b>one single large pizza</b> has more pizza than two medium ones! Because the area grows with the <b>square</b> of the radius.</p>
<p><b>Bonus – the annulus</b>: the 2 cm wide crust of the large pizza is an annulus with R = 20 and r = 18: A = 3.14 · (400 − 324) = 3.14 · 76 ≈ <b>238.6 cm²</b>, almost a fifth of the pizza!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The hunt for π",
      html: `<ul>
<li>In the <b>Rhind papyrus</b> (Egypt, about 1650 BC) the area of the circle was calculated as if π were about <b>3.16</b>.</li>
<li><b>Archimedes</b> of Syracuse (3rd century BC) inscribed polygons inside the circle and circumscribed them around it, up to <b>96 sides</b>, and proved that π lies between <b>3 + 10/71</b> and <b>3 + 1/7</b> (that is, between 3.1408 and 3.1429).</li>
<li>In China, <b>Zu Chongzhi</b> (5th century) found the fraction <b>355/113</b>, correct up to the sixth decimal place.</li>
<li>The symbol π was used by William Jones in 1706 and made famous by Euler; it comes from the first letter of the Greek word <i>perímetros</i>.</li>
<li>Today computers have calculated over <b>100 trillion</b> digits of π. On <b>14 March</b> (3/14 in the American way of writing dates) we celebrate <b>Pi Day</b>, which UNESCO has proclaimed the International Day of Mathematics since 2019.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Why wheels and manhole covers are round",
      html: `<p>A round wheel keeps its axle <b>always at the same height</b>, because all the points of the circumference are at the same distance from the centre: that is why the ride is smooth. And <b>manhole covers</b> are often round because a circular lid <b>cannot fall into the hole</b>: its width is the same in every direction. A square lid, on the other hand, turned sideways can slip in along the diagonal!</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<table>
<tr><th>Quantity</th><th>Formula</th></tr>
<tr><td>Diameter</td><td>d = 2r</td></tr>
<tr><td>Circumference</td><td>C = 2πr = πd</td></tr>
<tr><td>Arc</td><td>l = C · α / 360°</td></tr>
<tr><td>Area of the circle</td><td>A = πr²</td></tr>
<tr><td>Area of the sector</td><td>A<sub>s</sub> = πr² · α / 360° = l · r / 2</td></tr>
<tr><td>Annulus</td><td>A = π(R² − r²)</td></tr>
</table>
<p>π ≈ 3.14. Inscribed angle = half of the corresponding central angle.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand π and the area of the circle",
      intro: "Why exactly πr²? Here are four ways to \"see\" the formulas instead of learning them by heart.",
      tabs: [
        {
          label: "🍕 The sliced pizza",
          html: `<p>Cut the circle into lots of thin slices and place them <b>alternately upside down</b>, one next to the other. You get a shape that looks more and more like a <b>rectangle</b>:</p>
<ul>
<li>the <b>base</b> is half of the circumference: <b>πr</b>;</li>
<li>the <b>height</b> is the radius: <b>r</b>.</li>
</ul>
<p>Area = base × height = πr × r = <b>πr²</b>! The more slices you make, the closer the shape gets to a perfect rectangle. This idea can be found in the writings of Leonardo da Vinci and Kepler.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<g stroke="#92400e" stroke-width="2">
<path d="M40 180 L65 80 L90 180 Z" fill="#fbbf24"/><path d="M65 80 L90 180 L115 80 Z" fill="#f97316"/>
<path d="M90 180 L115 80 L140 180 Z" fill="#fbbf24"/><path d="M115 80 L140 180 L165 80 Z" fill="#f97316"/>
<path d="M140 180 L165 80 L190 180 Z" fill="#fbbf24"/><path d="M165 80 L190 180 L215 80 Z" fill="#f97316"/>
<path d="M190 180 L215 80 L240 180 Z" fill="#fbbf24"/><path d="M215 80 L240 180 L265 80 Z" fill="#f97316"/>
<path d="M240 180 L265 80 L290 180 Z" fill="#fbbf24"/><path d="M265 80 L290 180 L315 80 Z" fill="#f97316"/>
<path d="M290 180 L315 80 L340 180 Z" fill="#fbbf24"/><path d="M315 80 L340 180 L365 80 Z" fill="#f97316"/>
</g>
<line x1="40" y1="205" x2="365" y2="205" stroke="#1d4ed8" stroke-width="3"/>
<text x="200" y="232" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">base ≈ half the circumference = πr</text>
<line x1="385" y1="80" x2="385" y2="180" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="135" font-size="20" fill="#16a34a" font-weight="bold">height = r</text>
<text x="300" y="45" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">A = πr · r = πr²</text>
</svg>`
        },
        {
          label: "🏛️ Archimedes' method",
          html: `<p>Archimedes did not know how to "measure" a curve, so he trapped it between two <b>polygons</b>: one <b>inside</b> (inscribed) and one <b>outside</b> (circumscribed). The circumference is longer than the perimeter of the inner one and shorter than that of the outer one.</p>
<ul>
<li>With an inscribed <b>hexagon</b> (sides = r) the perimeter is 6r = 3d → π &gt; 3.</li>
<li>By doubling the sides (12, 24, 48, <b>96</b>) the polygons get closer and closer to the circle.</li>
</ul>
<p>With 96 sides he got 3.1408 &lt; π &lt; 3.1429. Without a calculator, more than 2200 years ago!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<circle cx="150" cy="130" r="100" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<polygon points="250,130 200,217 100,217 50,130 100,43 200,43" fill="#86efac" fill-opacity="0.5" stroke="#16a34a" stroke-width="3"/>
<polygon points="265,130 208,230 92,230 35,130 92,30 208,30" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="330" y="80" font-size="18" fill="#16a34a" font-weight="bold">inscribed hexagon: perimeter 6r</text>
<text x="330" y="120" font-size="18" fill="#1d4ed8" font-weight="bold">circumference 2πr</text>
<text x="330" y="160" font-size="18" fill="#dc2626" font-weight="bold">circumscribed hexagon: ≈ 6.93r</text>
<text x="330" y="210" font-size="20" fill="#1f2937" font-weight="bold">→ 3 &lt; π &lt; 3.47</text>
</svg>`
        },
        {
          label: "🥫 The rolling can (3D)",
          html: `<p>Take a <b>cylinder</b>, like a can: its base is a circle. <b>Roll</b> it one full turn on a sheet of paper: the distance covered is its <b>circumference</b>. If you measure it with a ruler you will see that it is about <b>3.14 times</b> the diameter.</p>
<p>Rotate the model: the lateral surface of the cylinder, unrolled, is a rectangle whose base is exactly <b>2πr</b>. That is why the formula for the lateral surface is 2πr · h!</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 1, h: 1.6, color: "#f59e0b", labels: true, shapes: ["cylinder", "cone", "sphere"] }
        },
        {
          label: "🇯🇵 Counting squares",
          html: `<p>In Japan and in many other countries, children start by estimating the area by <b>counting squares</b>. Draw a circle with a radius of 10 squares on squared paper: inside there are about <b>314 squares</b>, that is 3.14 × 10².</p>
<p>The square containing the circle has area (2r)² = 4r² = 400 squares: the circle takes up about <b>¾</b> of it (precisely π/4 ≈ 0.785). Try it with the widget: build a 10 × 10 square and imagine a circle of radius 5 inside it: it takes up about 78 squares out of 100.</p>`,
          widget: "areaGrid",
          options: { w: 10, h: 10, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of circumference and circle",
      nodes: [
        { id: "def", label: "Circumference", x: 50, y: 6, color: "#b45309", html: "The set of points at equal distance from a centre.", why: "It is the 15th definition in Euclid's <i>Elements</i> (around 300 BC); the third postulate says that you can always draw a circle with a given centre and radius: that is the compass!" },
        { id: "cerchio", label: "Circle", x: 20, y: 26, color: "#f59e0b", html: "The part of the plane enclosed by the circumference.", why: "The circumference is a 'boundary' (a line, it has length), the circle is a 'region' (it has area). The distinction matters for the formulas." },
        { id: "parti", label: "Radius, diameter, chord, arc", x: 80, y: 26, color: "#16a34a", html: "The elements of the circumference; d = 2r.", why: "They follow from the definition: all radii are equal, and the diameter is made of two radii in a straight line." },
        { id: "pi", label: "π ≈ 3.14", x: 50, y: 42, color: "#7c3aed", html: "The constant ratio between circumference and diameter.", why: "It is constant because all circles are similar (enlargements of one another). Archimedes estimated it with polygons; in 1761 Johann Lambert proved that it is irrational and in 1882 Ferdinand von Lindemann that it is transcendental (hence the impossibility of 'squaring the circle' with ruler and compass)." },
        { id: "lunghezza", label: "C = 2πr", x: 25, y: 64, color: "#2563eb", html: "Length of the circumference.", why: "It comes straight from the definition of π: if C/d = π, then C = πd = 2πr." },
        { id: "area", label: "A = πr²", x: 75, y: 64, color: "#dc2626", html: "Area of the circle.", why: "Archimedes proved it in <i>Measurement of a Circle</i>: the circle is equivalent to a triangle whose base is the circumference and whose height is the radius, that is 2πr · r / 2 = πr²." },
        { id: "arco", label: "Arcs", x: 10, y: 86, color: "#0ea5e9", html: "l = C · α/360°.", why: "Arcs and central angles are directly proportional. The division of the full turn into 360° comes from the Babylonians, who used base 60 and a year of about 360 days." },
        { id: "settore", label: "Sectors", x: 40, y: 86, color: "#f97316", html: "A = πr² · α/360°.", why: "The area of a sector is also proportional to its angle: a 90° sector is 1/4 of the circle." },
        { id: "corona", label: "Annulus", x: 70, y: 86, color: "#14b8a6", html: "A = π(R² − r²).", why: "It is the difference between two concentric circles: big area minus small area, factoring out π." },
        { id: "angoli", label: "Inscribed angles", x: 92, y: 86, color: "#a855f7", html: "Half of the corresponding central angle.", why: "Proved by Euclid (Book III, Proposition 20). Special case: the angle inscribed in a semicircle is a right angle, a theorem attributed to Thales (6th century BC)." }
      ],
      edges: [
        ["def", "cerchio", "encloses"],
        ["def", "parti", "has"],
        ["parti", "pi", "C : d ="],
        ["pi", "lunghezza", "gives"],
        ["pi", "area", "gives"],
        ["lunghezza", "arco", "fraction"],
        ["area", "settore", "fraction"],
        ["area", "corona", "difference"],
        ["parti", "angoli", "property"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: areas",
      questions: [
        { type: "num", q: "Area of a circle with radius 4 cm (π = 3.14)?", answer: 50.24, tol: 0.01, unit: "cm²", explain: "3.14 · 16 = 50.24 cm²." },
        { type: "mc", q: "If the radius triples, the area becomes…", options: ["3 times bigger", "6 times bigger", "9 times bigger"], answer: 2, explain: "The area depends on r²: 3² = 9." },
        { type: "num", q: "A 90° sector in a circle of area 200 cm² has area…", answer: 50, unit: "cm²", explain: "90° is 1/4 of 360°: 200 : 4 = 50 cm²." }
      ]
    }
  ],
  glossary: [
    { t: "Circumference", d: "The closed line made up of the points at equal distance from the centre." },
    { t: "Circle", d: "The part of the plane bounded by a circumference." },
    { t: "Radius", d: "A segment joining the centre to a point on the circumference." },
    { t: "Diameter", d: "A chord passing through the centre; it is twice the radius." },
    { t: "Chord", d: "A segment joining two points of the circumference." },
    { t: "Arc", d: "The part of the circumference between two points." },
    { t: "Sector", d: "The part of the circle between two radii and an arc." },
    { t: "Annulus", d: "The part of the plane between two concentric circles." },
    { t: "π (pi)", d: "The ratio between circumference and diameter, about 3.14; an irrational number." },
    { t: "Tangent", d: "A line with only one point in common with the circle, perpendicular to the radius at that point." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "The circumference is a line, the circle is a surface.", answer: true, explain: "The circumference has a length, the circle has an area." },
      { type: "num", q: "The diameter is 18 cm. How long is the radius?", answer: 9, unit: "cm", explain: "r = d : 2 = 9 cm." },
      { type: "num", q: "Length of the circumference with diameter 50 cm (π = 3.14)?", answer: 157, tol: 0.01, unit: "cm", explain: "3.14 · 50 = 157 cm." },
      { type: "num", q: "A circumference is 94.2 cm long. How long is the radius? (π = 3.14)", answer: 15, tol: 0.01, unit: "cm", explain: "r = 94.2 : (2 · 3.14) = 94.2 : 6.28 = 15 cm." },
      { type: "num", q: "Area of the circle with radius 10 cm (π = 3.14)?", answer: 314, tol: 0.01, unit: "cm²", explain: "3.14 · 100 = 314 cm²." },
      { type: "num", q: "Length of a 60° arc on a circumference 36 cm long?", answer: 6, unit: "cm", explain: "60/360 = 1/6 → 36 : 6 = 6 cm." },
      { type: "num", q: "Area of the annulus with R = 5 cm and r = 3 cm (π = 3.14)?", answer: 50.24, tol: 0.01, unit: "cm²", explain: "3.14 · (25 − 9) = 3.14 · 16 = 50.24 cm²." },
      { type: "mc", q: "A line whose distance from the centre is less than the radius is…", options: ["external", "tangent", "secant"], answer: 2, explain: "If d < r the line cuts the circle at two points." },
      { type: "mc", q: "A central angle measures 80°. How much does the inscribed angle subtending the same arc measure?", options: ["160°", "40°", "80°"], answer: 1, explain: "It is half: 40°." },
      { type: "mc", q: "Who estimated π with 96-sided polygons?", options: ["Pythagoras", "Archimedes", "Descartes"], answer: 1, explain: "Archimedes of Syracuse, 3rd century BC." },
      { type: "order", q: "Order these approximations of π from the least precise to the most precise.", items: ["3", "3.14", "22/7 (≈ 3.1429)", "355/113 (≈ 3.1415929)"], explain: "π = 3.14159265…: 355/113 is wrong only at the seventh decimal place; 22/7 is more precise than 3.14 (error about 0.0013 against 0.0016)." },
      { type: "tf", q: "If the radius doubles, the area also doubles.", answer: false, explain: "The area becomes 4 times bigger, because it depends on r²." }
    ],
    gen: [["circle", 3]]
  }
});
