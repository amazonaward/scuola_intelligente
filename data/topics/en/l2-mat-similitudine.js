TOPIC('en', {
  id: "l2-mat-similitudine",
  title: "Similarity and Thales' theorem",
  intro: "How can you measure the height of a pyramid or a skyscraper without climbing it? How can a map fit on a sheet of paper without the city changing shape? The answer is <b>similarity</b>: two figures are similar when they have the <b>same shape</b> but not necessarily the same size. In this lesson you will meet <b>Thales' theorem</b> (the intercept theorem), the <b>similarity criteria for triangles</b> and their applications, from the shadow of a pole to the scale of maps.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Proportions between segments",
      html: `<p>Two segments AB and CD have a <b>ratio</b> AB / CD (a number with no unit, if the two segments are measured in the same unit). Four segments form a <b>proportion</b> if AB : CD = EF : GH, that is if the two ratios are equal. The fundamental property: <b>the product of the means equals the product of the extremes</b>, AB · GH = CD · EF.</p>
<p>Other useful properties of proportions, for a : b = c : d:</p>
<ul>
<li><b>Swapping</b>: a : c = b : d (exchanging the means).</li>
<li><b>Inverting</b>: b : a = d : c.</li>
<li><b>Adding</b>: (a + b) : a = (c + d) : c, and <b>subtracting</b>: (a − b) : a = (c − d) : c.</li>
</ul>
<p>Two quantities are <b>directly proportional</b> if their ratio is constant: if one doubles, so does the other. In similarity, all corresponding lengths are proportional with the same ratio.</p>`
    },
    {
      type: "text",
      title: "Thales' theorem",
      html: `<p><b>A set of parallel lines</b> cut by two transversals determines corresponding segments on them that are <b>proportional</b>.</p>
<p>In symbols, if the parallel lines a, b, c cut the transversal r at A, B, C and the transversal s at A', B', C', then:</p>
<p style="text-align:center"><b>AB : BC = A'B' : B'C'</b></p>
<p>Equivalently: AB : A'B' = BC : B'C' = AC : A'C'. In particular, if the parallel lines determine congruent segments on one transversal, they also determine congruent segments on the other (for example, the midpoint of a side and the line parallel to the base in triangles).</p>
<p><b>Consequence in triangles</b>: a line parallel to one side of a triangle divides the other two sides proportionally. With a line parallel to the base BC cutting AB at D and AC at E: AD : DB = AE : EC and AD : AB = AE : AC.</p>
<p><b>The converse also holds</b>: if a line divides two sides of a triangle proportionally, it is parallel to the third side.</p>
<p>The theorem is named after <b>Thales of Miletus</b> (7th–6th century BC), but in its more general forms it is found in Euclid's <i>Elements</i> (Book VI, Proposition 2).</p>`
    },
    {
      type: "svg",
      title: "Parallels and transversals",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="60" x2="560" y2="60" stroke="#4338ca" stroke-width="3"/>
<line x1="30" y1="150" x2="560" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="30" y1="250" x2="560" y2="250" stroke="#4338ca" stroke-width="3"/>
<text x="540" y="50" font-size="16" fill="#4338ca" font-weight="bold">a</text>
<text x="540" y="140" font-size="16" fill="#4338ca" font-weight="bold">b</text>
<text x="540" y="240" font-size="16" fill="#4338ca" font-weight="bold">c</text>
<line x1="100" y1="60" x2="184" y2="250" stroke="#dc2626" stroke-width="4"/>
<line x1="330" y1="60" x2="457" y2="250" stroke="#166534" stroke-width="4"/>
<circle cx="100" cy="60" r="6" fill="#dc2626"/><circle cx="140" cy="150" r="6" fill="#dc2626"/><circle cx="184" cy="250" r="6" fill="#dc2626"/>
<circle cx="330" cy="60" r="6" fill="#166534"/><circle cx="390" cy="150" r="6" fill="#166534"/><circle cx="457" cy="250" r="6" fill="#166534"/>
<text x="74" y="52" font-size="16" fill="#b91c1c" font-weight="bold">A</text>
<text x="114" y="142" font-size="16" fill="#b91c1c" font-weight="bold">B</text>
<text x="158" y="272" font-size="16" fill="#b91c1c" font-weight="bold">C</text>
<text x="338" y="52" font-size="16" fill="#166534" font-weight="bold">A'</text>
<text x="398" y="142" font-size="16" fill="#166534" font-weight="bold">B'</text>
<text x="465" y="272" font-size="16" fill="#166534" font-weight="bold">C'</text>
<text x="215" y="104" font-size="16" fill="#1f2937" font-weight="bold">AB : BC = A'B' : B'C'</text>
</svg>`,
      caption: "The three parallel lines a, b, c divide the two transversals (red and green) into proportional segments."
    },
    {
      type: "example",
      title: "Examples with Thales",
      html: `<p><b>1.</b> Three parallel lines cut two transversals. On one, the segments measure AB = 6 cm and BC = 9 cm; on the other, A'B' = 8 cm. What is B'C'? From the proportion 6 : 9 = 8 : x we get x = 9 · 8 / 6 = <b>12 cm</b>.</p>
<p><b>2.</b> In a triangle ABC, a line parallel to BC meets AB at D and AC at E. We know AD = 4, DB = 6 and AE = 5. By Thales AD : DB = AE : EC, that is 4 : 6 = 5 : EC; so EC = 6 · 5 / 4 = <b>7.5</b>.</p>
<p><b>3. Dividing a segment into equal parts</b>. To divide a segment AB into 5 congruent parts with straightedge and compasses, draw any ray from A, mark off 5 equal segments on it, join the last point to B and draw the <b>parallels</b> to this line through the intermediate points. By Thales they also divide AB into 5 equal parts.</p>`
    },
    {
      type: "text",
      title: "Similar figures and the scale factor",
      html: `<p>Two polygons are <b>similar</b> if their <b>corresponding angles are congruent</b> and their <b>corresponding sides are in proportion</b>. The constant ratio between corresponding sides is called the <b>scale factor</b> (ratio of similarity) k. If k = 1 the figures are congruent. Two circles are always similar (k = ratio of the radii); two squares are always similar; two rectangles, in general, are not.</p>
<p>What changes when you enlarge by a factor k?</p>
<ul>
<li><b>Lengths</b> (sides, perimeters, heights, diagonals, radii) are multiplied by <b>k</b>.</li>
<li><b>Angles</b> do not change.</li>
<li><b>Areas</b> are multiplied by <b>k²</b>.</li>
<li><b>Volumes</b> (of similar solids) are multiplied by <b>k³</b>.</li>
</ul>
<p>Why k²? If you enlarge a square with side l by k = 3, the side becomes 3l and the area goes from l² to 9l²: 9 copies of the original small square fit inside. A 2× enlargement of a photo does not double the paper, it quadruples it.</p>`
    },
    {
      type: "remember",
      title: "The three similarity criteria for triangles",
      html: `<p>Two triangles are similar if they have:</p>
<ol>
<li><b>1st criterion (AA)</b>: <b>two angles</b> respectively congruent (the third follows, because the sum is 180°).</li>
<li><b>2nd criterion (SAS)</b>: <b>two proportional sides</b> and the <b>included angle</b> congruent.</li>
<li><b>3rd criterion (SSS)</b>: all <b>three sides</b> in proportion.</li>
</ol>
<p>The similarity criteria are the "proportional version" of the congruence criteria. The first (AA) is the most used: to recognise two similar triangles it is often enough to find two equal angles, for example because sides are parallel or because of vertically opposite angles.</p>
<p>⚠️ <b>Careful</b>: in similar triangles the proportion between sides must use <b>corresponding</b> sides, that is the ones opposite equal angles.</p>`
    },
    {
      type: "widget",
      title: "Similar or not?",
      widget: "classify",
      options: { groups: ["Definitely similar", "Not necessarily similar"], items: [
        ["Two triangles with two equal angles (50° and 60°)", 0],
        ["Any two equilateral triangles", 0],
        ["Any two rectangles", 1],
        ["Any two squares", 0],
        ["Two rhombuses with one equal side", 1],
        ["Any two circles", 0],
        ["Two isosceles triangles", 1],
        ["Two right-angled triangles with an acute angle of 30°", 0]
      ] },
      caption: "For triangles the criteria are enough (for example two equal angles); for polygons with more than 3 sides you need congruent angles and proportional sides together."
    },
    {
      type: "svg",
      title: "Two similar triangles",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="40,250 200,250 80,150" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<polygon points="260,250 580,250 340,50" fill="#fed7aa" stroke="#c2410c" stroke-width="4"/>
<path d="M 64,250 A 24,24 0 0 0 54,226" fill="none" stroke="#166534" stroke-width="3"/>
<path d="M 300,250 A 40,40 0 0 0 282,220" fill="none" stroke="#c2410c" stroke-width="3"/>
<path d="M 184,250 A 16,16 0 0 1 188,238" fill="none" stroke="#166534" stroke-width="3"/>
<path d="M 540,250 A 40,40 0 0 1 553,223" fill="none" stroke="#c2410c" stroke-width="3"/>
<text x="120" y="276" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">side 160 px</text>
<text x="420" y="276" font-size="16" text-anchor="middle" fill="#c2410c" font-weight="bold">side 320 px</text>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">k = 320 / 160 = 2</text>
<text x="210" y="120" font-size="16" fill="#1f2937">same angles, sides ×2</text>
<text x="210" y="145" font-size="16" fill="#1f2937">area ×4, perimeter ×2</text>
</svg>`,
      caption: "The orange triangle is a 2:1 enlargement of the green one: the angles do not change, the lengths double, the areas quadruple."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Thales and similarity",
      questions: [
        { type: "num", q: "Two similar triangles have a scale factor of 3. The perimeter of the smaller one is 14 cm. What is the perimeter of the larger one?", answer: 42, unit: "cm", explain: "The perimeters are in the same ratio as the sides: 14 · 3 = 42 cm." },
        { type: "num", q: "The scale factor between two polygons is 4. The area of the smaller one is 5 cm². What is the area of the larger one?", answer: 80, unit: "cm²", explain: "The areas are in the ratio k² = 16: 5 · 16 = 80 cm²." },
        { type: "tf", q: "Two triangles with two congruent angles are definitely similar.", answer: true, explain: "This is the first similarity criterion (AA): the third angle is automatically congruent." },
        { type: "mc", q: "In triangle ABC a line parallel to BC meets AB at D and AC at E. Which proportion is correct?", options: ["AD : DB = AE : EC", "AD : DB = EC : AE", "AD : AB = EC : AC"], answer: 0, explain: "By Thales' theorem: AD : DB = AE : EC, or AD : AB = AE : AC." }
      ]
    },
    {
      type: "text",
      title: "Applications: similarity in the real world",
      html: `<ul>
<li><b>Measuring inaccessible heights</b>. If a person 1.5 m tall casts a 2 m shadow, and at the same moment a tree casts a 6 m shadow, the Sun's rays are parallel and the two triangles (object–shadow) have the same angles (AA): they are similar. So h : 6 = 1.5 : 2 and h = 6 · 1.5 / 2 = <b>4.5 m</b>.</li>
<li><b>Maps and scale models</b>: a map at a scale of 1 : 25 000 is similar to the land with k = 1/25 000. 4 cm on the map is 4 · 25 000 = 100 000 cm = 1 km. <b>Areas</b> at scale are divided by k²: 1 cm² on the map represents 625 000 000 cm² = 62 500 m².</li>
<li><b>The mirror method</b>: place a flat mirror on the ground and step back until you can see the top of the building in it. The incoming ray and the reflected ray make equal angles with the mirror (law of reflection): the triangles object–mirror and eye–mirror are similar.</li>
<li><b>Photocopiers and projectors</b>: a 141% (√2) enlargement turns an A4 sheet into an A3. The area doubles because k² = 2: that is why the A-series formats all have the same ratio between their sides, equal to √2.</li>
</ul>`
    },
    {
      type: "text",
      title: "The angle bisector theorem and the link with Euclid",
      html: `<p><b>(Internal) angle bisector theorem</b>: the bisector of an angle of a triangle divides the opposite side into two segments <b>proportional to the other two sides</b>. If AD bisects the angle at A of triangle ABC (D on BC): <b>BD : DC = AB : AC</b>.</p>
<p><b>The link with Euclid</b>: in a right-angled triangle ABC (right angle at A), the height AH onto the hypotenuse divides it into two triangles ABH and ACH. They have a right angle at H and share an acute angle with ABC: so they are <b>similar to ABC</b> (AA) and similar to each other. The proportions between corresponding sides give Euclid's theorems:</p>
<ul>
<li>ABC ~ HBA: BC : AB = AB : BH, that is <b>c : a = a : p</b>, from which a² = c · p (1st theorem).</li>
<li>HBA ~ HAC: BH : AH = AH : HC, that is <b>p : h = h : q</b>, from which h² = p · q (2nd theorem).</li>
</ul>
<p>So similarity proves in a few lines what Euclid obtains with equivalence, and from here we also get Pythagoras' theorem.</p>`
    },
    {
      type: "example",
      title: "Example: the angle bisector",
      html: `<p>In a triangle ABC, AB = 6 cm, AC = 9 cm and BC = 10 cm. The bisector of the angle at A meets BC at D. Calculate BD and DC.</p>
<p>By the theorem: BD : DC = 6 : 9 = 2 : 3, and BD + DC = 10. Dividing 10 in the ratio 2 : 3: BD = 10 · 2 / 5 = <b>4 cm</b> and DC = 10 · 3 / 5 = <b>6 cm</b>.</p>
<p><b>Common-sense check</b>: the bisector cuts off the shorter part on the side of the shorter side (AB is the shortest: BD is the smaller part).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Thales and the pyramid",
      html: `<p>According to tradition, reported among others by <b>Diogenes Laërtius</b> and <b>Plutarch</b>, Thales of Miletus measured the height of the Great Pyramid of Khufu in Egypt: he waited for the time of day when his shadow was as long as he was tall, and at that moment he measured the pyramid's shadow (adding half the side of the base, because the shadow starts from the centre). If the shadow is as long as the height, the shadow–object triangle is an isosceles right-angled triangle: the two triangles are similar and the height of the pyramid equals its shadow. A very elegant special case of proportion!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Scaling laws in animals",
      html: `<p>Why are there no insects as big as elephants or giant ants like in films? Because of the <b>square–cube law</b>. If an animal were enlarged by k, its mass would grow like k³ (the volume), but the cross-section of its bones and muscles, which determines its strength, only like k². The weight/strength ratio would get worse by a factor of k: its legs would give way. <b>Galileo</b> had already noticed this in his <i>Discourses and Mathematical Demonstrations Relating to Two New Sciences</i> (1638): to support a larger body you need a disproportionately thicker skeleton. That is why elephants have stocky legs and ants thin ones.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand similarity",
      intro: "If proportions seem abstract, try seeing them with your eyes or your hands.",
      tabs: [
        {
          label: "📷 Zooming",
          html: `<p>Think of a photo you enlarge with your phone's zoom: everything grows in the same way, no angle changes, the face stays the same. That is similarity: an enlargement (or reduction) with the same <b>scale factor</b> in every direction. If instead you stretch the picture only horizontally, the face gets distorted: it is no longer similar, because the ratios are not the same everywhere.</p>
<p>It also works for real lengths: if on the map you see 3 cm between two towns and the scale is 1 : 500 000, the real distance is 3 · 500 000 = 1 500 000 cm = 15 km.</p>`
        },
        {
          label: "🌞 The shadow",
          html: `<p>Draw a pole and its shadow, then a tree and its shadow: the Sun's rays are parallel, so the angles are the same and the two triangles are similar. The 1.5 m pole has a 2 m shadow; the tree has a 6 m shadow; the height of the tree follows from the proportion h : 1.5 = 6 : 2.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="240" width="600" height="60" fill="#d9f99d"/>
<circle cx="560" cy="40" r="22" fill="#facc15"/>
<line x1="80" y1="180" x2="160" y2="240" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"/>
<line x1="250" y1="60" x2="490" y2="240" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"/>
<line x1="80" y1="240" x2="80" y2="180" stroke="#92400e" stroke-width="7"/>
<line x1="80" y1="240" x2="160" y2="240" stroke="#475569" stroke-width="6"/>
<line x1="250" y1="240" x2="250" y2="60" stroke="#166534" stroke-width="10"/>
<circle cx="250" cy="60" r="26" fill="#22c55e"/>
<line x1="250" y1="240" x2="490" y2="240" stroke="#475569" stroke-width="6"/>
<text x="40" y="168" font-size="16" fill="#92400e" font-weight="bold">1.5 m</text>
<text x="96" y="266" font-size="16" fill="#1f2937" font-weight="bold">2 m</text>
<text x="262" y="150" font-size="16" fill="#166534" font-weight="bold">h = ?</text>
<text x="360" y="266" font-size="16" fill="#1f2937" font-weight="bold">6 m</text>
<text x="320" y="110" font-size="16" fill="#1f2937">h : 1.5 = 6 : 2 → h = 4.5 m</text>
</svg>`
        },
        {
          label: "🧊 With 3D solids",
          html: `<p>Cubes, spheres and cylinders of different sizes are similar when their proportions are the same. Try changing the solid with the buttons and imagine doubling all its measurements: the surface area quadruples (k² = 4) and the volume becomes 8 times bigger (k³ = 8). That is why a pizza twice as wide has four times the area: if the big pizza only costs twice as much, you are getting a bargain!</p>`,
          scene: "solid",
          options: { shape: "cube", color: "#6366f1", labels: true, shapes: ["cube", "cylinder", "cone", "sphere", "pyramid"] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: similarity",
      nodes: [
        { id: "prop", label: "Proportions", x: 50, y: 6, color: "#6366f1", html: "Equality between two ratios: a : b = c : d.", why: "For the Greeks, ratios between quantities were the basis of geometry: Eudoxus' theory of proportions (4th century BC) can handle incommensurable ratios too. Euclid sets it out in Book V." },
        { id: "tal", label: "Thales' theorem", x: 20, y: 30, color: "#f59e0b", html: "Parallel lines cut transversals into proportional segments.", why: "It is the property that 'carries' a ratio along the set of parallels: it comes from noticing that equally spaced parallels mark off equal parts. The theory of similarity is built on it." },
        { id: "sim", label: "Similar figures", x: 80, y: 30, color: "#16a34a", html: "Same angles and sides in proportion with ratio k.", why: "It formalises the idea of 'same shape': enlargements and reductions. It lets us study a large object with a small model (maps, scale models, wind-tunnel models)." },
        { id: "crit", label: "Criteria for triangles", x: 50, y: 54, color: "#a855f7", html: "AA, SAS, SSS.", why: "They are the counterpart of the congruence criteria, with 'equal' replaced by 'proportional'. AA alone is enough because the angles add up to 180°." },
        { id: "k", label: "Ratios: k, k², k³", x: 80, y: 76, color: "#ef4444", html: "Lengths ×k, areas ×k², volumes ×k³.", why: "Areas depend on two dimensions, volumes on three. This is Galileo's scaling law: it explains the shape of animals and bridges." },
        { id: "euc", label: "Euclid's theorems", x: 20, y: 76, color: "#0ea5e9", html: "They follow from the similarity of triangles ABC, HBA, HAC.", why: "The height onto the hypotenuse creates two triangles similar to the original: the ratios of their sides give a² = c·p and h² = p·q, and from these Pythagoras." },
        { id: "app", label: "Applications", x: 50, y: 92, color: "#14b8a6", html: "Shadows, maps, mirrors, surveys.", why: "Surveying (measuring land) uses triangulation: from a baseline measured on the ground, inaccessible distances are calculated with similar triangles." }
      ],
      edges: [
        ["prop", "tal", "is the basis of"],
        ["prop", "sim", "defines"],
        ["tal", "crit", "proves"],
        ["sim", "crit", "checked with"],
        ["crit", "euc", "prove"],
        ["sim", "k", "implies"],
        ["crit", "app", "used for"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: applications",
      questions: [
        { type: "num", q: "A 2 m pole casts a 3 m shadow. At the same moment a building casts a 24 m shadow. How tall is the building?", answer: 16, unit: "m", explain: "h : 2 = 24 : 3, so h = 2 · 24 / 3 = 16 m." },
        { type: "num", q: "At a scale of 1 : 50 000, how many real kilometres are represented by 6 cm on the map?", answer: 3, unit: "km", explain: "6 · 50 000 = 300 000 cm = 3 000 m = 3 km." },
        { type: "num", q: "In triangle ABC, the bisector AD divides BC into BD and DC, with AB = 8 and AC = 12. If BC = 15, how long is BD?", answer: 6, unit: "", explain: "BD : DC = AB : AC = 8 : 12 = 2 : 3; BD = 15 · 2/5 = 6." }
      ]
    }
  ],
  glossary: [
    { t: "Proportion", d: "Equality between two ratios: a : b = c : d." },
    { t: "Thales' theorem", d: "A set of parallel lines determines proportional corresponding segments on two transversals." },
    { t: "Similar figures", d: "Figures with congruent corresponding angles and proportional corresponding sides." },
    { t: "Scale factor", d: "The constant ratio k between corresponding sides of two similar figures." },
    { t: "Similarity criteria", d: "AA (two angles), SAS (two proportional sides and the included angle), SSS (three proportional sides)." },
    { t: "Angle bisector theorem", d: "The bisector divides the opposite side into parts proportional to the other two sides." },
    { t: "Scale", d: "The ratio between a length in the drawing and the real length (for example 1 : 25 000)." },
    { t: "Corresponding sides", d: "In two similar triangles, the sides opposite congruent angles." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Thales' theorem states that a set of parallel lines…", options: ["divides the transversals into proportional segments", "is always perpendicular to the transversals", "forms congruent triangles"], answer: 0, explain: "The corresponding segments on the two transversals are in proportion." },
      { type: "num", q: "Three parallel lines determine AB = 4 and BC = 10 on one transversal; on the other A'B' = 6. What is B'C'?", answer: 15, unit: "", explain: "4 : 10 = 6 : x, so x = 10 · 6 / 4 = 15." },
      { type: "tf", q: "Two equilateral triangles are always similar.", answer: true, explain: "All their angles are 60°: by the AA criterion they are similar." },
      { type: "num", q: "Two similar polygons have a scale factor of 5. The area of the smaller one is 4 cm². What is the area of the larger one?", answer: 100, unit: "cm²", explain: "The areas are in the ratio k² = 25: 4 · 25 = 100 cm²." },
      { type: "num", q: "The sides of a triangle measure 3, 4 and 5 cm. A similar triangle has a longest side of 15 cm. What is its perimeter?", answer: 36, unit: "cm", explain: "k = 15 / 5 = 3; the original perimeter is 12 cm: 12 · 3 = 36 cm." },
      { type: "mc", q: "A 1 m pole casts a 0.8 m shadow. A tree has a 12 m shadow. How tall is it?", options: ["9.6 m", "15 m", "12.8 m"], answer: 1, explain: "h : 1 = 12 : 0.8, so h = 15 m." },
      { type: "tf", q: "In triangle ABC, a line parallel to BC meeting AB at D and AC at E gives AD : AB = AE : AC.", answer: true, explain: "It is a form of Thales' theorem (and also a consequence of the similarity ADE ~ ABC)." },
      { type: "num", q: "At a scale of 1 : 200 000, how many centimetres on the map correspond to 8 real km?", answer: 4, unit: "cm", explain: "8 km = 800 000 cm; divided by 200 000 = 4 cm." },
      { type: "text", q: "Which similarity criterion for triangles requires only two congruent angles? (write the abbreviation)", answer: ["aa", "angle-angle", "first", "1", "1st", "first criterion"], explain: "The first criterion (AA): two congruent angles; the third is automatically congruent." },
      { type: "order", q: "Put the steps for measuring the height of a tree using its shadow in order.", items: ["Measure the length of the tree's shadow", "At the same moment, measure the height and shadow of a pole", "Notice that the triangles have the same angles (similar)", "Set up the proportion between heights and shadows", "Solve the proportion for the height of the tree"], explain: "The measurements must be taken at the same moment; then you recognise the similarity and set up the proportion." }
    ]
  }
});
