TOPIC('en', {
  id: "l1-mat-geometria-euclidea",
  title: "Euclidean geometry: axioms and triangles",
  intro: "Almost two thousand three hundred years ago, in Alexandria in Egypt, Euclid had a revolutionary idea: start from a very small number of statements accepted without proof and <b>deduce</b> everything else by rigorous reasoning. This was the birth of the axiomatic-deductive method, the basis of all mathematics. In this lesson you will see how it works: the <b>primitive notions</b>, the <b>axioms and postulates</b>, and the first great result, the <b>triangle congruence criteria</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Euclid and the deductive method",
      html: `<p><b>Euclid</b> lived in Alexandria in Egypt around 300 BC and wrote the <b>Elements</b>, in 13 books: a treatise that collects and organises Greek geometry (and some number theory) in a systematic way. For more than two thousand years it was the geometry textbook par excellence, second in circulation only to the Bible.</p>
<p>The method is this:</p>
<ul>
<li><b>Primitive notions</b>: concepts that are not defined, because any definition would require other words, which in turn would need defining, and so on for ever. In geometry: <b>point, line, plane</b> (and \"lying between\"). We describe them by their properties, not by a definition.</li>
<li><b>Definitions</b>: the meaning of new concepts is explained using concepts already known (segment, angle, triangle, angle bisector…).</li>
<li><b>Axioms and postulates</b>: statements accepted as true without proof. Euclid called those valid everywhere <i>common notions</i> (\"things equal to the same thing are equal to each other\") and those specific to geometry <i>postulates</i>.</li>
<li><b>Theorems</b>: statements that are <b>proved</b>, that is, deduced logically from axioms, postulates and theorems already proved.</li>
</ul>
<p>A theorem is stated with a <b>hypothesis</b> (what is assumed to be true) and a <b>thesis</b> or conclusion (what we want to prove). If H is the hypothesis and T the thesis, the theorem says: \"if H, then T\".</p>`
    },
    {
      type: "text",
      title: "Euclid's five postulates",
      html: `<ol>
<li>Through two distinct points there passes one (and only one) line; that is, a segment can be drawn between two points.</li>
<li>A segment can be extended indefinitely in a straight line.</li>
<li>Given a centre and a radius, a circle can be drawn.</li>
<li>All right angles are equal to one another.</li>
<li><b>The fifth postulate</b>: if a line crossing two others forms, on the same side, interior angles whose sum is less than two right angles, then the two lines, if extended, meet on that side. (In modern form this is equivalent to: \"through a point not on a line there passes <b>exactly one</b> line parallel to it\".)</li>
</ol>
<p>The first four seem obvious. The fifth is long and complicated: for centuries mathematicians tried to prove it from the others, without success. We will talk about it in the lesson on parallel lines.</p>`
    },
    {
      type: "svg",
      title: "Why the triangle is special",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="34" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">Triangle: rigid</text>
<polygon points="50,240 250,240 150,80" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<circle cx="50" cy="240" r="8" fill="#166534"/><circle cx="250" cy="240" r="8" fill="#166534"/><circle cx="150" cy="80" r="8" fill="#166534"/>
<text x="150" y="272" font-size="16" text-anchor="middle" fill="#14532d">three sides fixed → shape fixed (SSS)</text>
<text x="430" y="34" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Quadrilateral: deforms</text>
<polygon points="340,240 520,240 520,100 340,100" fill="#fed7aa" stroke="#9a3412" stroke-width="4"/>
<polygon points="340,240 520,240 560,100 380,100" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="340" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="100" r="8" fill="#9a3412"/><circle cx="340" cy="100" r="8" fill="#9a3412"/>
<text x="430" y="272" font-size="16" text-anchor="middle" fill="#7c2d12">four sides fixed, shape can change</text>
</svg>`,
      caption: "That's why pylons, bridges and cranes are made of triangles: triangles don't deform."
    },
    {
      type: "text",
      title: "The triangle and its elements",
      html: `<p>A <b>triangle</b> is the part of the plane bounded by three segments (<b>sides</b>) joining three non-collinear points (<b>vertices</b>). It has three <b>interior angles</b>.</p>
<ul>
<li><b>By sides</b>: <b>scalene</b> (three different sides), <b>isosceles</b> (two equal sides), <b>equilateral</b> (three equal sides).</li>
<li><b>By angles</b>: <b>acute</b>, <b>right-angled</b> (one right angle), <b>obtuse</b>.</li>
<li><b>Special segments</b>: the <b>median</b> joins a vertex to the midpoint of the opposite side; the <b>angle bisector</b> divides the angle in half; the <b>altitude</b> is the perpendicular segment from a vertex to the line of the opposite side. The three medians meet at the <b>centroid</b>, the three angle bisectors at the <b>incentre</b>, the three altitudes at the <b>orthocentre</b>.</li>
</ul>
<p>Two figures are <b>congruent</b> if they can be superimposed by a rigid motion (translation, rotation, reflection): same shape and same size. For triangles, congruence requires 6 equalities (3 sides and 3 angles), but the <b>criteria</b> tell us that <b>three</b>, well chosen, are enough.</p>
<p><b>Triangle inequality</b>: in every triangle each side is <b>less than the sum</b> of the other two (and greater than their difference). With three sticks of 2, 3 and 7 cm you cannot build any triangle: 2 + 3 &lt; 7!</p>`
    },
    {
      type: "remember",
      title: "The three congruence criteria",
      html: `<p>Two triangles are congruent if they have, in corresponding order, congruent:</p>
<ol>
<li><b>1st criterion (SAS)</b>: two sides and the <b>included angle</b> between them.</li>
<li><b>2nd criterion (ASA)</b>: one side and the <b>two angles adjacent</b> to it.</li>
<li><b>3rd criterion (SSS)</b>: the <b>three sides</b>.</li>
</ol>
<p>⚠️ <b>These are not criteria</b>: three equal angles (similar triangles but of different sizes), two sides and a <b>non-included</b> angle (SSA: more than one triangle may be possible).</p>`
    },
    {
      type: "widget",
      title: "Which criterion?",
      widget: "classify",
      options: { groups: ["1st criterion (SAS)", "2nd criterion (ASA)", "3rd criterion (SSS)", "Not enough"], items: [
        ["two sides and the included angle", 0],
        ["one side and the two adjacent angles", 1],
        ["the three sides", 2],
        ["three equal angles", 3],
        ["two sides and a non-included angle", 3],
        ["AB = DE, BC = EF and angle B = angle E", 0],
        ["AB = DE, angle A = D and angle B = E", 1]
      ] },
      caption: "The angle must be included between the two sides; the side must be adjacent to the two angles."
    },
    {
      type: "example",
      title: "A proof: the base angles of an isosceles triangle",
      html: `<p><b>Theorem</b>: in an isosceles triangle the base angles are congruent.</p>
<p><b>Hypothesis</b>: ABC with AC = BC. <b>Thesis</b>: angle A = angle B.</p>
<p><b>Proof</b>: draw the bisector of angle C, which meets AB at D. Consider the triangles ACD and BCD:</p>
<ul>
<li>AC = BC by hypothesis;</li>
<li>angle ACD = angle BCD because CD is the bisector;</li>
<li>CD is a common side.</li>
</ul>
<p>They have two sides and the included angle congruent: by the <b>1st criterion</b> ACD ≅ BCD. So the corresponding angles, at A and at B, are congruent. <b>Q.E.D.</b> (which was to be proved; in Italian <i>c.v.d.</i>)</p>
<p>This theorem (Elements, I.5) was called <i>pons asinorum</i>, \"the bridge of donkeys\", in the Middle Ages, because it was the first obstacle where weaker students got stuck.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: axioms and criteria",
      questions: [
        { type: "mc", q: "What are the primitive notions of geometry?", options: ["Point, line and plane", "Triangle, square and circle", "Angle, segment and area"], answer: 0, explain: "Point, line and plane are not defined: they are described by the axioms." },
        { type: "tf", q: "A postulate must be proved before it can be used.", answer: false, explain: "A postulate is a statement accepted without proof." },
        { type: "num", q: "How many postulates did Euclid state?", answer: 5, explain: "Five; the fifth is the famous parallel postulate." }
      ]
    },
    {
      type: "example",
      title: "Practical example: measuring a river without crossing it",
      html: `<p>How can you measure the width AT of a river? From the bank where you are standing, at A, opposite a tree T on the other bank:</p>
<ol>
<li>walk along the bank perpendicular to AT up to a point B and plant a stake;</li>
<li>carry on for the same distance up to C (so AB = BC);</li>
<li>from C walk away from the river at right angles to the bank until, looking back, the tree T and the stake B line up with you: you are at D.</li>
</ol>
<p>The triangles ABT and CBD have AB = CB, right angles at A and C, and equal angles at B because they are vertically opposite: by the <b>2nd criterion</b> they are congruent. So CD = AT: the distance you measured on land is the width of the river. The drawing is in the \"The river\" tab among the alternative explanations.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? The bridge of donkeys and Thales",
      html: `<p>According to tradition, the first person to prove geometry theorems was <b>Thales of Miletus</b> (7th–6th century BC). It is said that he used the congruence of triangles to calculate the distance of a ship from the coast, an application very similar to the river problem. Euclid, three centuries later, organised everything into a system.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know? Hilbert and modern rigour",
      html: `<p>Euclid's <i>Elements</i>, brilliant as they are, have a few logical gaps: Euclid sometimes uses things that are \"obvious\" from the drawing but are not in the postulates. In 1899 the German mathematician <b>David Hilbert</b> published the <i>Grundlagen der Geometrie</i> (\"Foundations of Geometry\") with a complete axiom system without gaps. Hilbert said that instead of points, lines and planes one could say \"tables, chairs and beer mugs\": what matters are the relations between the objects, not their names.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand Euclidean geometry",
      intro: "Geometry is easier to understand with your hands and with drawings. Try these routes.",
      tabs: [
        {
          label: "📏 Straightedge and compass",
          html: `<p>In the first proposition of the <i>Elements</i> (I.1), Euclid constructs an <b>equilateral triangle</b> on a segment AB using only the first three postulates. With the compass (postulate 3) you draw the circle with centre A and radius AB, then the one with centre B and radius AB. They meet at C, and AC = AB (radii of the first), BC = AB (radii of the second): the three sides are equal. No measuring, just logic!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="225" cy="190" r="90" fill="none" stroke="#6366f1" stroke-width="3"/>
<circle cx="315" cy="190" r="90" fill="none" stroke="#f97316" stroke-width="3"/>
<polygon points="225,190 315,190 270,112" fill="#fde68a" stroke="#1f2937" stroke-width="4"/>
<circle cx="225" cy="190" r="6" fill="#1f2937"/><circle cx="315" cy="190" r="6" fill="#1f2937"/><circle cx="270" cy="112" r="6" fill="#1f2937"/>
<text x="212" y="212" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="322" y="212" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="262" y="100" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="470" y="140" font-size="16" fill="#4338ca">AC = radius of circle A</text>
<text x="470" y="170" font-size="16" fill="#c2410c">BC = radius of circle B</text>
<text x="470" y="200" font-size="16" fill="#1f2937">AB = radius of both</text>
<text x="470" y="232" font-size="16" fill="#166534" font-weight="bold">→ ABC equilateral</text>
</svg>`
        },
        {
          label: "🌊 The river (with a drawing)",
          html: `<p>Here is the diagram of the river problem: the triangles ABT and CBD are \"upside down\" copies of each other, rotated half a turn about B. If two triangles can be superimposed by a rotation, they are congruent.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="70" width="600" height="110" fill="#bae6fd"/>
<text x="500" y="125" font-size="18" fill="#0369a1" font-weight="bold">river</text>
<circle cx="150" cy="70" r="9" fill="#16a34a"/><text x="130" y="60" font-size="18" fill="#166534" font-weight="bold">T (tree)</text>
<line x1="150" y1="70" x2="150" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="180" x2="450" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="450" y1="180" x2="450" y2="280" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="70" x2="450" y2="280" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="150" cy="180" r="6" fill="#1f2937"/><circle cx="300" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="280" r="6" fill="#1f2937"/>
<text x="128" y="206" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="293" y="206" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="458" y="206" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="458" y="285" font-size="18" fill="#1f2937" font-weight="bold">D</text>
<text x="225" y="228" font-size="16" text-anchor="middle" fill="#1f2937">AB = BC</text>
<text x="105" y="130" font-size="16" fill="#1f2937">AT</text>
<text x="470" y="240" font-size="16" fill="#1f2937">CD = AT</text>
</svg>`
        },
        {
          label: "🥢 With sticks",
          html: `<p>Take sticks or straws 3, 4 and 5 cm long and join them at the ends with a bit of modelling clay: you will get <b>only one possible triangle</b> (apart from flipping it over). Any other triangle built with the same three lengths fits exactly on yours: that is the 3rd criterion. Now join four sticks: the quadrilateral squashes and changes shape. That's why a single diagonal (one more stick) is enough to make it rigid, and that's why you see triangles everywhere in pylons and bridges.</p>
<p>Also try building one with 2, 3 and 7 cm: you can't, because 2 + 3 &lt; 7 (triangle inequality).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of Euclidean geometry",
      nodes: [
        { id: "prim", label: "Primitive notions", x: 50, y: 6, color: "#6366f1", html: "Point, line, plane: they are not defined.", why: "A definition uses other words that in turn must be defined: to avoid going on for ever, we start from a few concepts taken as known. Hilbert (1899) deliberately left them 'nameless'." },
        { id: "ass", label: "Axioms and postulates", x: 20, y: 28, color: "#f59e0b", html: "Truths accepted without proof.", why: "They are needed because every proof starts from something already accepted. Euclid chose a few simple ones: the five postulates and the common notions." },
        { id: "def", label: "Definitions", x: 80, y: 28, color: "#16a34a", html: "New concepts are explained using known ones.", why: "They give precise names (triangle, angle bisector…) using only what has already been introduced." },
        { id: "teo", label: "Theorems and proofs", x: 50, y: 52, color: "#a855f7", html: "Hypothesis → thesis, by logical deduction.", why: "The axiomatic-deductive method, already present in Thales and Pythagoras and turned into a system by Euclid, guarantees that a truth is as certain as the postulates it comes from." },
        { id: "cong", label: "Congruence", x: 20, y: 76, color: "#0ea5e9", html: "Same shape and same size: figures that can be superimposed.", why: "Euclid introduces it through 'superposition' (a rigid motion); Hilbert takes it as a primitive relation with its own axioms." },
        { id: "crit", label: "Triangle criteria", x: 50, y: 92, color: "#ef4444", html: "SAS, ASA, SSS.", why: "They follow from the postulates: given three suitable elements, the triangle is uniquely determined. It is the foundation of the triangulation used by surveyors and navigators." },
        { id: "isos", label: "Isosceles triangle", x: 85, y: 76, color: "#22c55e", html: "Congruent base angles (and vice versa).", why: "It is the first 'real' theorem of Book I (pons asinorum): it is proved with the 1st criterion." },
        { id: "v", label: "Fifth postulate", x: 85, y: 52, color: "#14b8a6", html: "The condition for two lines to meet; equivalent to the uniqueness of the parallel.", why: "Denying it leads to non-Euclidean geometries (Lobachevsky, Bolyai, Riemann in the 19th century): another geometry, just as consistent." }
      ],
      edges: [
        ["prim", "ass", "described by"],
        ["prim", "def", "basis of"],
        ["ass", "teo", "premises of"],
        ["def", "teo", "language of"],
        ["teo", "cong", "studies"],
        ["cong", "crit", "checked with"],
        ["crit", "isos", "proves"],
        ["ass", "v", "includes"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: triangles",
      questions: [
        { type: "mc", q: "Two triangles have their three sides respectively congruent. They are congruent by…", options: ["the 1st criterion", "the 2nd criterion", "the 3rd criterion"], answer: 2, explain: "Three congruent sides: the SSS criterion, the third one." },
        { type: "tf", q: "Two triangles with their three angles respectively equal are always congruent.", answer: false, explain: "They can have the same shape but different sizes (they are similar, not congruent)." },
        { type: "num", q: "An isosceles triangle has a vertex angle of 40°. What is each base angle? (The interior angles add up to 180°.)", answer: 70, unit: "°", explain: "(180 − 40)/2 = 70° each." }
      ]
    }
  ],
  glossary: [
    { t: "Primitive notion", d: "A concept that is not defined (point, line, plane)." },
    { t: "Axiom / postulate", d: "A statement accepted without proof." },
    { t: "Theorem", d: "A statement proved from axioms and theorems already known." },
    { t: "Hypothesis and thesis", d: "The hypothesis is what is assumed to be true; the thesis is what we want to prove." },
    { t: "Congruence", d: "The relation between figures that can be superimposed by a rigid motion." },
    { t: "Congruence criteria", d: "The minimum conditions (SAS, ASA, SSS) that guarantee that two triangles are congruent." },
    { t: "Isosceles triangle", d: "A triangle with at least two congruent sides." },
    { t: "Median, angle bisector, altitude", d: "Special segments of a triangle: to the midpoint of the opposite side, halving the angle, perpendicular to the opposite side." },
    { t: "Triangle inequality", d: "Each side of a triangle is less than the sum of the other two." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Why are point, line and plane primitive notions?", options: ["Because they are not defined: any definition would require other terms to be defined", "Because they are the easiest to draw", "Because they were the first to be proved"], answer: 0, explain: "They are the starting concepts of the theory, described by the axioms." },
      { type: "tf", q: "A postulate is a statement accepted without proof.", answer: true, explain: "Axioms and postulates are the starting point of proofs." },
      { type: "text", q: "Who wrote the Elements around 300 BC?", answer: ["euclid", "euclide"], explain: "Euclid, in Alexandria in Egypt." },
      { type: "mc", q: "The 1st triangle congruence criterion requires…", options: ["two sides and the included angle", "two sides and any angle", "three angles"], answer: 0, explain: "SAS: two sides and the angle between them." },
      { type: "mc", q: "The 2nd criterion requires…", options: ["one side and the two adjacent angles", "three sides", "two angles and two sides"], answer: 0, explain: "ASA: one side and the two angles adjacent to it." },
      { type: "num", q: "An isosceles triangle has a perimeter of 40 cm and a base of 12 cm. How long is each of the equal sides?", answer: 14, unit: "cm", explain: "(40 − 12)/2 = 14 cm." },
      { type: "order", q: "Put the steps of a proof in order.", items: ["Write the hypothesis", "Write the thesis", "Draw the figure and identify the triangles to compare", "Apply a congruence criterion", "Conclude"], explain: "You start from the hypothesis and thesis, then build the chain of deductions." },
      { type: "mc", q: "Why are triangles used in pylons?", options: ["Because with three sides fixed the shape cannot deform (3rd criterion)", "Because they are cheaper than squares", "Because they have the largest angles"], answer: 0, explain: "The triangle is the only rigid polygon." },
      { type: "tf", q: "In an isosceles triangle the base angles are congruent.", answer: true, explain: "It is proved with the 1st criterion by drawing the bisector of the vertex angle." },
      { type: "num", q: "A triangle has two sides of 3 cm and 5 cm; the third is a whole number of cm. What is the largest possible value?", answer: 7, unit: "cm", explain: "The third side must be less than 3 + 5 = 8 and greater than 5 − 3 = 2: the largest integer is 7." }
    ]
  }
});
