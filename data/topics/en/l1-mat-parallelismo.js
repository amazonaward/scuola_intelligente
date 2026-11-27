TOPIC('en', {
  id: "l1-mat-parallelismo",
  title: "Parallel lines and quadrilaterals",
  intro: "Two railway tracks run side by side and never meet. It seems obvious, but it is one of the subtlest ideas in mathematics: proving that parallel lines exist is easy, but understanding how many there are took <b>two thousand years</b> and led to the discovery of completely new geometries. In this lesson we look at the <b>angles formed by parallel lines</b>, the <b>sum of the angles</b> of a triangle and the properties of <b>quadrilaterals</b> (parallelograms and trapezoids).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Parallel lines and a transversal",
      html: `<p>Two lines in the plane are <b>parallel</b> if they have no point in common (or if they coincide). We write <b>r ∥ s</b>. Two non-parallel lines in the plane meet at a point.</p>
<p>When a third line, the <b>transversal</b>, cuts two lines, it forms eight angles. The important pairs are:</p>
<ul>
<li><b>alternate interior angles</b>: between the two lines, on opposite sides of the transversal;</li>
<li><b>alternate exterior angles</b>: outside the two lines, on opposite sides of the transversal;</li>
<li><b>corresponding angles</b>: in the same position relative to the two lines and the transversal;</li>
<li><b>co-interior angles</b> (or co-exterior): on the same side of the transversal, both between the lines (or both outside).</li>
</ul>
<p><b>Theorem.</b> Two lines cut by a transversal are parallel if and only if one of these conditions holds:</p>
<ul>
<li>the <b>alternate interior</b> (or exterior) angles are <b>congruent</b>;</li>
<li>the <b>corresponding</b> angles are <b>congruent</b>;</li>
<li>the <b>co-interior</b> angles are <b>supplementary</b> (sum 180°).</li>
</ul>
<p>\"If and only if\" means that it works in both directions. The part \"if the alternate interior angles are congruent, then the lines are parallel\" can be proved using only the first four postulates; the converse, \"if they are parallel, then the alternate interior angles are congruent\", <b>requires the fifth postulate</b>.</p>`
    },
    {
      type: "svg",
      title: "Angles between two parallel lines",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="100" x2="560" y2="100" stroke="#1f2937" stroke-width="3"/>
<line x1="40" y1="200" x2="560" y2="200" stroke="#1f2937" stroke-width="3"/>
<line x1="200" y1="40" x2="400" y2="260" stroke="#6366f1" stroke-width="3"/>
<text x="500" y="90" font-size="16" fill="#1f2937">r</text>
<text x="500" y="190" font-size="16" fill="#1f2937">s</text>
<text x="420" y="268" font-size="16" fill="#4338ca">transversal</text>
<circle cx="255" cy="100" r="5" fill="#1f2937"/><circle cx="345" cy="200" r="5" fill="#1f2937"/>
<text x="272" y="132" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="300" y="186" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="368" y="226" font-size="22" fill="#ea580c" font-weight="bold">α</text>
<text x="212" y="132" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="340" y="170" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="40" y="30" font-size="16" fill="#16a34a" font-weight="bold">green: alternate interior (equal)</text>
<text x="40" y="52" font-size="16" fill="#ea580c" font-weight="bold">orange: corresponding (equal)</text>
<text x="330" y="30" font-size="16" fill="#dc2626" font-weight="bold">β = 180° − α (co-interior)</text>
</svg>`,
      caption: "If r ∥ s: the green angles (alternate interior) and the orange one (corresponding) are equal to α; the red angle β is its supplement."
    },
    {
      type: "example",
      title: "Example: working out the angles",
      html: `<p>Two parallel lines are cut by a transversal; one of the eight angles measures <b>65°</b>. What are the others?</p>
<ul>
<li>Each angle is either <b>65°</b> or its supplement <b>180° − 65° = 115°</b>.</li>
<li>Four angles (the two alternate interior ones, the corresponding ones, the vertically opposite ones) are 65°; the other four are 115°.</li>
<li>At each of the two crossing points, two adjacent angles form a straight angle (180°); vertically opposite angles are equal.</li>
</ul>`
    },
    {
      type: "text",
      title: "The sum of the angles of a triangle",
      html: `<p>The first great result that follows from the fifth postulate:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>In every triangle the interior angles add up to 180°.</b></p>
<p><b>Proof.</b> Let ABC be a triangle. Through vertex C draw the line r parallel to side AB. The angles that r forms with the sides CA and CB are alternate interior angles to the angles A and B of the triangle (with respect to the transversals CA and CB): so they are congruent to A and B. Together with angle C, these angles form a <b>straight angle</b>: A + B + C = 180°. ∎</p>
<p>Consequences:</p>
<ul>
<li><b>Exterior angle</b>: in a triangle, an exterior angle is equal to the <b>sum of the two non-adjacent interior angles</b> (because 180° − C = A + B).</li>
<li><b>Polygon with n sides</b>: it can be divided into (n − 2) triangles, so the sum of the interior angles is <b>(n − 2) · 180°</b>. Quadrilateral: 360°; pentagon: 540°; hexagon: 720°.</li>
<li>The sum of the <b>exterior angles</b> of a convex polygon (one at each vertex) is always <b>360°</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Parallelograms",
      html: `<p>A <b>parallelogram</b> is a quadrilateral with <b>opposite sides parallel</b>. From this definition alone, using the theorems on angles between parallel lines and triangle congruence, we can prove its properties:</p>
<ul>
<li>opposite sides are <b>congruent</b>;</li>
<li>opposite angles are <b>congruent</b>, and angles adjacent to a side are <b>supplementary</b>;</li>
<li>the <b>diagonals</b> bisect each other (at their midpoint).</li>
</ul>
<p>The converse also holds: a quadrilateral is a parallelogram if its opposite sides are congruent, or if two opposite sides are parallel and congruent, or if its diagonals bisect each other.</p>
<p><b>Special parallelograms</b>:</p>
<ul>
<li><b>Rectangle</b>: four right angles; the diagonals are <b>congruent</b>.</li>
<li><b>Rhombus</b>: four congruent sides; the diagonals are <b>perpendicular</b> and bisect the angles.</li>
<li><b>Square</b>: both a rectangle and a rhombus (four congruent sides and four congruent angles).</li>
</ul>
<p><b>Trapezoid</b> (trapezium in British English): a quadrilateral with <b>only one pair of parallel sides</b> (the bases). If the legs are congruent it is <b>isosceles</b> (congruent base angles, congruent diagonals); if a leg is perpendicular to the bases it is a <b>right</b> trapezoid. In every trapezoid, the angles adjacent to a leg are supplementary (co-interior).</p>`
    },
    {
      type: "widget",
      title: "Match each property to its quadrilateral",
      widget: "match",
      options: { pairs: [
        ["Opposite sides parallel and congruent", "Parallelogram"],
        ["Congruent diagonals that bisect each other", "Rectangle"],
        ["Perpendicular diagonals and four equal sides", "Rhombus"],
        ["Four congruent sides and four congruent angles", "Square"],
        ["Only one pair of parallel sides", "Trapezoid"]
      ] },
      caption: "Each quadrilateral has its own characteristic properties."
    },
    {
      type: "svg",
      title: "The quadrilateral family",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="210" y="14" width="180" height="40" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="300" y="40" fill="#312e81">Quadrilateral</text>
<rect x="60" y="110" width="150" height="40" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><text x="135" y="136" fill="#78350f">Trapezoid</text>
<rect x="390" y="110" width="170" height="40" rx="8" fill="#dcfce7" stroke="#166534" stroke-width="2"/><text x="475" y="136" fill="#14532d">Parallelogram</text>
<rect x="290" y="210" width="110" height="40" rx="8" fill="#fce7f3" stroke="#9d174d" stroke-width="2"/><text x="345" y="236" fill="#831843">Rhombus</text>
<rect x="450" y="210" width="130" height="40" rx="8" fill="#cffafe" stroke="#0e7490" stroke-width="2"/><text x="515" y="236" fill="#164e63">Rectangle</text>
<rect x="360" y="266" width="120" height="30" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="420" y="287" fill="#78350f">Square</text>
</g>
<g stroke="#334155" stroke-width="2" fill="none">
<line x1="270" y1="54" x2="150" y2="110"/><line x1="330" y1="54" x2="450" y2="110"/>
<line x1="440" y1="150" x2="365" y2="210"/><line x1="500" y1="150" x2="515" y2="210"/>
<line x1="365" y1="250" x2="400" y2="266"/><line x1="515" y1="250" x2="460" y2="266"/>
</g>
<text x="20" y="215" font-size="14" fill="#475569">each shape lower down has all</text>
<text x="20" y="235" font-size="14" fill="#475569">the properties of the one above</text>
</svg>`,
      caption: "A square is a rhombus, a rectangle and a parallelogram, but not the other way round."
    },
    {
      type: "example",
      title: "Practical example: the pantograph and the desk lamp",
      html: `<p>The <b>pantograph</b> is an instrument made of hinged rods forming a parallelogram: it was used to copy drawings at a larger or smaller scale. It works because, when the parallelogram changes shape, the opposite sides stay <b>parallel and equal in length</b>. You can see the same hinged parallelograms in desk lamps with arms, in car lifts and in the pantographs of electric trains: the top part stays parallel to the base as it goes up and down.</p>
<p>Here the <b>lack of rigidity</b> of the parallelogram (unlike the triangle) is an advantage: the shape needs to be able to change.</p>`
    },
    {
      type: "example",
      title: "Example: angles in a parallelogram",
      html: `<p>In a parallelogram ABCD, angle A measures <b>70°</b>. What are the other angles and, if AB = 12 cm and BC = 8 cm, what is the perimeter?</p>
<ul>
<li>The opposite angle C is congruent to A: <b>70°</b>.</li>
<li>Angle B is supplementary to A: 180° − 70° = <b>110°</b>; D = 110° too.</li>
<li>Check: 70 + 110 + 70 + 110 = 360° ✔️</li>
<li>Perimeter: 2(12 + 8) = <b>40 cm</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: angles and parallel lines",
      questions: [
        { type: "num", q: "Two parallel lines are cut by a transversal. One angle measures 65°: what does its alternate interior angle measure?", answer: 65, unit: "°", explain: "Alternate interior angles between parallel lines are congruent." },
        { type: "mc", q: "Two co-interior angles between parallel lines are…", options: ["congruent", "supplementary", "complementary"], answer: 1, explain: "Their sum is 180° (a straight angle)." },
        { type: "tf", q: "If two lines cut by a transversal form congruent corresponding angles, then they are parallel.", answer: true, explain: "It is one of the conditions in the parallel lines theorem." }
      ]
    },
    {
      type: "decision",
      title: "The postulate nobody could prove",
      html: `<p>You are a mathematician in the early 19th century. Euclid's fifth postulate (\"through a point there passes only one line parallel to a given line\") seems too complicated to be a postulate: for two thousand years thousands of scholars, from Proclus to Saccheri, have tried to <b>prove</b> it from the other four, but every \"proof\" hides a mistake.</p>`,
      question: "What would you have tried?",
      options: [
        { label: "Keep looking for a proof", outcome: "This is the road taken for two millennia, without success: every attempt (secretly) assumed something equivalent to the postulate itself." },
        { label: "Assume it is FALSE and see whether a contradiction follows", outcome: "This is the idea of proof by contradiction: if denying it leads to an absurdity, the postulate is proved. But what happens if the absurdity never comes?" },
        { label: "Accept it as a postulate and move on", outcome: "This is what Euclid did, quite rightly. But the doubt remains: is it really the only possible geometry?" }
      ],
      answer: 1,
      explain: "Saccheri (1733) tried exactly this route by contradiction, but believed he had found a contradiction that wasn't there. Then Gauss (privately), Lobachevsky (1829) and Bolyai (1832) realised that denying the postulate leads to no contradiction at all: it gives rise to non-Euclidean geometries, just as consistent as Euclid's. In the 19th century Riemann broadened the picture, and in the 20th century Einstein used a non-Euclidean geometry to describe gravity in general relativity."
    },
    {
      type: "curiosity",
      title: "Did you know? Triangles with three right angles",
      html: `<p>On the surface of the Earth you can build a triangle with <b>three right angles</b>: start at the North Pole, go down a meridian to the equator, travel a quarter of the way round the equator, then go back up another meridian to the Pole. The angles add up to 270°! It's not a mistake: on a sphere Euclid's postulates do not hold, because there <b>parallel lines do not exist</b> (two \"lines\", that is great circles, always meet). That's why airline pilots fly along routes that look curved on a map.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? The Logo turtle",
      html: `<p>The sum of the <b>exterior angles</b> of any convex polygon is <b>360°</b>: you can see why by walking around its edge. At each vertex you turn through a certain angle, and when you get back to the starting point you have made one full turn. This is the idea behind the programming language <i>Logo</i> (Seymour Papert's \"turtle\", 1960s): to draw a square the turtle moves forward and turns 90° four times.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand parallel lines and quadrilaterals",
      intro: "If the names of the angles confuse you, try anchoring them to images and movements.",
      tabs: [
        {
          label: "🚂 Railway tracks and zebra crossings",
          html: `<p>The stripes of a <b>zebra crossing</b> are parallel; the <b>road edge</b> that cuts them is the transversal. Walking from one stripe to the next, you are always turned by the same angle relative to the stripes. That's why corresponding angles are equal: \"same position = same slope\". Alternate interior angles are equal for the same reason (a half-turn rotation about the midpoint of the section of transversal is enough). Co-interior angles together form a straight angle, 180°, like the two sides of an open door.</p>`
        },
        {
          label: "🐢 The walking turtle",
          html: `<p>Imagine walking around the edge of a polygon and turning through an angle at each vertex (<b>the exterior angle</b>). When you are back at the start, facing the original direction, you have turned through <b>360°</b> in total. So the sum of the exterior angles is 360° <b>whatever the number of sides</b>.</p>
<p>A regular polygon with n sides has n equal exterior angles: each is 360°/n. The interior angle is 180° − 360°/n. For the hexagon: 180° − 60° = 120°; for the octagon: 180° − 45° = 135°. Compare with the formula (n − 2) · 180°/n: you get the same result.</p>`
        },
        {
          label: "🌍 On the sphere (3D)",
          html: `<p>Spin the globe: the triangle that starts at the North Pole, goes down to the equator at 0° longitude, follows the equator to 90° east and goes back up to the Pole has <b>three right angles</b>. On a curved surface the angles of a triangle add up to more than 180°: Euclid's geometry holds for the plane, not for the sphere.</p>`,
          scene: "globe",
          options: { points: [ { lat: 90, lon: 0, label: "North Pole", color: "#ef4444" }, { lat: 0, lon: 0, label: "Equator 0°", color: "#2563eb" }, { lat: 0, lon: 90, label: "Equator 90° E", color: "#16a34a" } ], routes: [ { points: [0, 1, 2, 0], color: "#f97316" } ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of parallel lines",
      nodes: [
        { id: "v", label: "Fifth postulate", x: 50, y: 6, color: "#ef4444", html: "Through a point not on a line there passes only one parallel.", why: "Euclid stated it in a long and not very 'obvious' way; for two millennia people tried to deduce it from the others. Playfair (1795) gave it its modern form." },
        { id: "par", label: "Parallel lines", x: 20, y: 28, color: "#6366f1", html: "Coplanar lines with no points in common.", why: "Existence can be proved without the 5th postulate (congruent alternate angles); uniqueness, however, requires it." },
        { id: "ang", label: "Angles with a transversal", x: 50, y: 40, color: "#16a34a", html: "Alternate, corresponding, co-interior.", why: "They 'translate' parallelism into angle measures: they let you prove that two lines are parallel by measuring angles." },
        { id: "tri", label: "Angle sum = 180°", x: 80, y: 28, color: "#f59e0b", html: "In every triangle A + B + C = 180°.", why: "It is proved by drawing, through a vertex, the parallel to the opposite side: it depends on the 5th postulate (on a sphere the sum is greater than 180°)." },
        { id: "pol", label: "Angles of polygons", x: 80, y: 55, color: "#a855f7", html: "Interior sum (n − 2)·180°, exterior sum 360°.", why: "A polygon can be split into n − 2 triangles; the exterior sum is one full turn." },
        { id: "parall", label: "Parallelograms", x: 20, y: 62, color: "#0ea5e9", html: "Opposite sides parallel: properties of sides, angles, diagonals.", why: "All the properties come from alternate angles between parallel lines and the congruence of the triangles formed by a diagonal." },
        { id: "part", label: "Rectangle, rhombus, square", x: 20, y: 88, color: "#22c55e", html: "Parallelograms with extra properties.", why: "Adding a property (right angles, equal sides) narrows the family: this is the logic of classification." },
        { id: "trap", label: "Trapezoid", x: 55, y: 80, color: "#14b8a6", html: "Only one pair of parallel sides.", why: "The angles adjacent to a leg are co-interior between the parallel bases and therefore supplementary." },
        { id: "non", label: "Non-Euclidean geometries", x: 85, y: 88, color: "#ec4899", html: "Geometries in which the 5th postulate is false.", why: "Lobachevsky (1829), Bolyai (1832) and Riemann (1854): with the 5th denied, consistent geometries are born. Einstein uses them for gravity." }
      ],
      edges: [
        ["v", "par", "governs"],
        ["par", "ang", "translates into"],
        ["ang", "tri", "proves"],
        ["tri", "pol", "generalises to"],
        ["par", "parall", "defines"],
        ["parall", "part", "specialises into"],
        ["par", "trap", "defines"],
        ["v", "non", "denied by"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: polygons",
      questions: [
        { type: "num", q: "What is the sum of the interior angles of a hexagon?", answer: 720, unit: "°", explain: "(6 − 2) · 180° = 720°." },
        { type: "num", q: "In a parallelogram one angle measures 70°. What does an adjacent angle measure?", answer: 110, unit: "°", explain: "The angles adjacent to a side are supplementary: 180° − 70° = 110°." },
        { type: "mc", q: "The diagonals of a rhombus are…", options: ["perpendicular", "always congruent", "parallel"], answer: 0, explain: "In a rhombus the diagonals are perpendicular and bisect the angles." }
      ]
    }
  ],
  glossary: [
    { t: "Parallel lines", d: "Coplanar lines that have no points in common." },
    { t: "Transversal", d: "A line that cuts two or more lines." },
    { t: "Alternate interior angles", d: "Angles between the two lines, on opposite sides of the transversal." },
    { t: "Corresponding angles", d: "Angles in the same position relative to the two lines and the transversal." },
    { t: "Co-interior angles", d: "Angles on the same side of the transversal, both interior or both exterior." },
    { t: "Exterior angle", d: "The angle formed by one side of a polygon and the extension of the adjacent side." },
    { t: "Parallelogram", d: "A quadrilateral with opposite sides parallel." },
    { t: "Trapezoid", d: "A quadrilateral with only one pair of parallel sides (the bases); called a trapezium in British English." },
    { t: "Non-Euclidean geometry", d: "A geometry in which Euclid's fifth postulate does not hold." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Two parallel lines are cut by a transversal. Two co-interior angles are…", options: ["supplementary", "congruent", "complementary"], answer: 0, explain: "They are on the same side of the transversal and add up to 180°." },
      { type: "num", q: "In a triangle two interior angles measure 50° and 60°. What is the exterior angle adjacent to the third angle?", answer: 110, unit: "°", explain: "The exterior angle is the sum of the two non-adjacent interior angles: 50° + 60° = 110°." },
      { type: "num", q: "What is the sum of the interior angles of a pentagon?", answer: 540, unit: "°", explain: "(5 − 2) · 180° = 540°." },
      { type: "num", q: "What is each interior angle of a regular hexagon?", answer: 120, unit: "°", explain: "720°/6 = 120°, or 180° − 360°/6." },
      { type: "mc", q: "Which quadrilateral has congruent diagonals that bisect each other?", options: ["Rectangle", "Rhombus (not a square)", "Scalene trapezoid"], answer: 0, explain: "It is a property of the rectangle." },
      { type: "tf", q: "In every parallelogram the diagonals are congruent.", answer: false, explain: "They are congruent only in a rectangle (and therefore in a square). In general they bisect each other but have different lengths." },
      { type: "mc", q: "A quadrilateral with only one pair of parallel sides is called…", options: ["a trapezoid", "a parallelogram", "a rhombus"], answer: 0, explain: "The bases of a trapezoid are its parallel sides." },
      { type: "num", q: "A parallelogram has a perimeter of 50 cm and one side of 15 cm. How long is the adjacent side?", answer: 10, unit: "cm", explain: "Half the perimeter is 25 cm: 25 − 15 = 10 cm." },
      { type: "order", q: "Put in order the steps of the proof that the angles of a triangle add up to 180°.", items: ["Through a vertex, draw the parallel to the opposite side", "Identify the alternate interior angles, congruent to the angles of the triangle", "The three angles at that vertex form a straight angle", "Conclude: the sum is 180°"], explain: "The key idea is the parallel through a vertex." },
      { type: "mc", q: "On a sphere, the sum of the angles of a triangle is…", options: ["greater than 180°", "exactly 180°", "less than 180°"], answer: 0, explain: "In spherical (elliptic) geometry the sum exceeds 180°: for example 270° for a triangle with three right angles." }
    ]
  }
});
