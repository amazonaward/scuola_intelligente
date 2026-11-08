TOPIC('en', {
  id: "m2-tec-proiezioni-ortogonali",
  title: "Orthographic projections",
  intro: "How do you explain to a carpenter, a mechanic or a 3D printer what a <b>three-dimensional</b> object looks like, using only a <b>flat</b> sheet of paper? With <b>orthographic projections</b>: the same object drawn <b>seen from the front, from above and from the side</b>, with precise rules that technicians all over the world understand.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "What they are",
      html: `<p><b>To project</b> means "to throw forward": imagine projecting the shadow of an object onto a wall. In an <b>orthographic</b> projection the projection rays are <b>parallel</b> to each other and <b>perpendicular</b> (that is, at 90°, "orthogonal") to the plane we are drawing on.</p>
<p>The result is a drawing in which the faces parallel to the plane appear in <b>true shape and true size</b> (to scale): no perspective, no distortion. That is why you can <b>measure</b> them.</p>
<p>A single view is not enough, though: a cube and a cylinder, seen from the front, can both look like a square! That is why we use <b>three planes</b> perpendicular to each other, forming a corner like the corner of a room (the <b>trihedron</b>):</p>
<ul>
<li><b>V.P. – vertical plane</b>: receives the <b>front view</b> (or <b>elevation</b>);</li>
<li><b>H.P. – horizontal plane</b>: receives the <b>top view</b> (or <b>plan</b>);</li>
<li><b>S.P. – side plane</b>: receives the <b>side view</b> (or <b>profile</b>).</li>
</ul>
<p>The line where V.P. and H.P. meet is called the <b>ground line</b> (G.L.).</p>`
    },
    {
      type: "widget",
      title: "Recognise the planes of the trihedron",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="120,30 420,30 420,190 120,190" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<polygon points="120,190 420,190 350,300 50,300" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<polygon points="420,30 420,190 350,300 350,140" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<line x1="120" y1="190" x2="420" y2="190" stroke="#dc2626" stroke-width="5"/>
<polygon points="200,210 270,210 270,250 200,250" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
<polygon points="200,210 270,210 290,180 220,180" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
<polygon points="270,210 290,180 290,220 270,250" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
<text x="500" y="80" font-size="16" fill="#334155">tap the circles</text>
<text x="500" y="100" font-size="16" fill="#334155">and choose the name</text>
</svg>`,
        spots: [
          { x: 260, y: 100, label: "Vertical plane (V.P.)" },
          { x: 130, y: 270, label: "Horizontal plane (H.P.)" },
          { x: 385, y: 160, label: "Side plane (S.P.)" },
          { x: 160, y: 190, label: "Ground line (G.L.)" },
          { x: 240, y: 230, label: "Object to be represented" }
        ]
      },
      caption: "The three planes form a corner like the walls and floor of a room. The object is placed in the corner and \"projected\" onto each plane."
    },
    {
      type: "text",
      title: "The method step by step",
      html: `<ol>
<li><b>Look at the object</b> and choose the most meaningful face as the <b>front view</b> (the one that shows the shape best).</li>
<li>With a light pencil, draw the horizontal <b>ground line</b> and a vertical line: they divide the sheet into four quadrants.</li>
<li>In the <b>top-left</b> quadrant draw the <b>front view</b> (V.P.), measuring width and height.</li>
<li><b>Below</b> the front view draw the <b>top view</b> (H.P.): width (the same as the elevation, which you carry across with vertical lines) and depth.</li>
<li><b>To the right</b> of the front view draw the <b>left side view</b> (S.P.): height (which you carry across with horizontal lines) and depth.</li>
<li>To carry the <b>depth</b> from the plan to the side view use a <b>45°</b> line in the bottom-right quadrant (or a compass): the horizontal lines from the plan touch it and "turn", becoming vertical.</li>
<li><b>Trace over</b> the visible edges with a thick continuous line; the <b>hidden</b> edges with a dashed line; the <b>axes</b> of symmetry with a chain line (dash-dot).</li>
</ol>
<p>This is the <b>European method</b> (also called "first-angle projection", ISO method E).</p>`
    },
    {
      type: "svg",
      title: "The three views of a step (European method)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<line x1="20" y1="150" x2="380" y2="150" stroke="#dc2626" stroke-width="2"/>
<line x1="220" y1="20" x2="220" y2="300" stroke="#dc2626" stroke-width="2"/>
<line x1="220" y1="150" x2="330" y2="260" stroke="#64748b" stroke-width="2"/>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4">
<line x1="60" y1="130" x2="60" y2="170"/>
<line x1="120" y1="130" x2="120" y2="170"/>
<line x1="180" y1="130" x2="180" y2="170"/>
<line x1="180" y1="50" x2="240" y2="50"/>
<line x1="180" y1="90" x2="240" y2="90"/>
<line x1="180" y1="170" x2="240" y2="170"/>
<line x1="180" y1="230" x2="300" y2="230"/>
<line x1="240" y1="150" x2="240" y2="170"/>
<line x1="300" y1="130" x2="300" y2="230"/>
</g>
<polygon points="60,50 120,50 120,90 180,90 180,130 60,130" fill="#bfdbfe" stroke="#0f172a" stroke-width="4"/>
<rect x="60" y="170" width="120" height="60" fill="#bbf7d0" stroke="#0f172a" stroke-width="4"/>
<line x1="120" y1="170" x2="120" y2="230" stroke="#0f172a" stroke-width="4"/>
<rect x="240" y="50" width="60" height="80" fill="#fde68a" stroke="#0f172a" stroke-width="4"/>
<line x1="240" y1="90" x2="300" y2="90" stroke="#0f172a" stroke-width="3" stroke-dasharray="8 5"/>
<text x="120" y="40" font-size="15" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Front view (V.P.)</text>
<text x="120" y="255" font-size="15" font-weight="bold" fill="#15803d" text-anchor="middle">Top view (H.P.)</text>
<text x="270" y="40" font-size="15" font-weight="bold" fill="#b45309" text-anchor="middle">Left view (S.P.)</text>
<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">45° line</text>
<polygon points="410,140 455,140 455,170 500,170 500,200 410,200" fill="#bfdbfe" stroke="#0f172a" stroke-width="2"/>
<polygon points="410,140 455,140 491,112 446,112" fill="#93c5fd" stroke="#0f172a" stroke-width="2"/>
<polygon points="455,140 491,112 491,142 455,170" fill="#60a5fa" stroke="#0f172a" stroke-width="2"/>
<polygon points="455,170 500,170 536,142 491,142" fill="#93c5fd" stroke="#0f172a" stroke-width="2"/>
<polygon points="500,170 536,142 536,172 500,200" fill="#60a5fa" stroke="#0f172a" stroke-width="2"/>
<text x="480" y="255" font-size="15" fill="#0f172a" text-anchor="middle">the object (step)</text>
<text x="300" y="310" font-size="14" fill="#0f172a" text-anchor="middle">dashes = hidden edge</text>
</svg>`,
      caption: "The top view sits below the elevation, the left side view sits to its right. In the side view the edge of the step is hidden behind the tall block: that is why it is dashed."
    },
    {
      type: "3d",
      title: "Turn the solid and imagine the three views",
      scene: "solid",
      options: { shape: "box", w: 3, h: 1.5, d: 2, color: "#60a5fa", labels: true, shapes: ["box", "cube", "prism", "cylinder", "pyramid", "cone"] },
      caption: "Rotate the solid until you see it exactly from the front, then from above, then from the side: what you see in each case is an orthographic projection. Try changing the solid."
    },
    {
      type: "quiz",
      title: "Mini-quiz: planes and views",
      questions: [
        { type: "mc", q: "In the European method, where is the top view drawn?", options: ["Above the front view", "Below the front view", "To the left of the front view"], answer: 1, explain: "In the European method (first angle) the plan sits below the elevation." },
        { type: "mc", q: "How do you draw a hidden edge?", options: ["Thick continuous line", "Dashed line", "Dash-dot line"], answer: 1, explain: "Hidden edges are shown with a dashed line." },
        { type: "tf", q: "In orthographic projection the projection rays are perpendicular to the plane.", answer: true, explain: "Orthographic means exactly \"at a right angle\"." }
      ]
    },
    {
      type: "example",
      title: "Practical example: the cuboid",
      html: `<p>A cuboid (like a brick) measures <b>8 cm</b> in length, <b>5 cm</b> in depth and <b>3 cm</b> in height.</p>
<ul>
<li><b>Front view</b>: a rectangle 8 cm wide and 3 cm high.</li>
<li><b>Top view</b>: a rectangle 8 cm wide and 5 cm deep, drawn below the first.</li>
<li><b>Side view</b>: a rectangle 5 cm deep and 3 cm high, to the right of the first.</li>
</ul>
<p>Notice: every measurement appears in <b>two views</b>. The width (8) is in the elevation and the plan, the height (3) in the elevation and the side view, the depth (5) in the plan and the side view. It is the "check" that tells you whether you have drawn correctly!</p>`
    },
    {
      type: "example",
      title: "Practical example: cylinder and pyramid",
      html: `<ul>
<li><b>Upright cylinder</b> (diameter 4 cm, height 6 cm): front view = <b>rectangle</b> 4 × 6 with the vertical axis in dash-dot; side view = the same rectangle; top view = <b>circle</b> of diameter 4 cm with two crossing axes.</li>
<li><b>Square-based pyramid</b> (side 5 cm, height 6 cm): front and side views = isosceles <b>triangles</b> with base 5 and height 6; top view = a 5 × 5 <b>square</b> with the two <b>diagonals</b>, which are the edges rising to the apex.</li>
</ul>
<p>Two identical views (rectangle, rectangle) are not enough to tell whether the object is a cylinder or a cuboid: you need the third!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Monge's military secret",
      html: `<p>The method of projections onto perpendicular planes was developed by the French mathematician <b>Gaspard Monge</b> (1746–1818), when he was a young draughtsman at the military school of Mézières. With his method <b>fortifications</b> could be designed much faster than with calculations.</p>
<p>It was considered so useful that for years the French army kept it <b>secret</b>! Only after the Revolution could Monge teach it publicly, and in 1799 his book <i>Géométrie descriptive</i> (descriptive geometry) came out.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Europe versus America",
      html: `<p>In the <b>United States</b> and Canada another method is used, called the "American" or <b>third-angle</b> method: the top view is placed <b>above</b> the elevation and the right view to the <b>right</b>. The views are the same, only their position on the sheet changes.</p>
<p>To avoid mistakes, a symbol is put in the title block of technical drawings: a <b>truncated cone</b> seen from the front and from the side. From the position of the two drawings you can immediately tell which method was used. A mistake can be costly: a part made as a "mirror image" will not fit!</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Orthographic projection: rays parallel and perpendicular to the plane → true shape, no perspective.</li>
<li>Three planes: <b>V.P.</b> (front view), <b>H.P.</b> (top view), <b>S.P.</b> (side view).</li>
<li>European method: plan <b>below</b> the elevation, left side view <b>to the right</b> of the elevation.</li>
<li>Width, height and depth each appear in two views: carry them across with projection lines and the 45° line.</li>
<li>Lines: thick continuous = visible; dashed = hidden; dash-dot = axes.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand projections",
      intro: "Orthographic projections are easier to understand with your hands and your eyes. Here are some different ways to \"see\" them.",
      tabs: [
        {
          label: "📦 The box that opens up",
          html: `<p>Take a shoebox without a lid and put an object inside (a die, a bottle cap, a LEGO piece). Imagine drawing on each wall the <b>shadow</b> of the object seen from the front, from above and from the side.</p>
<p>Now <b>open the box</b> and lay it flat on the table: the back wall stays still (V.P.), the bottom folds <b>down</b> (H.P. below) and the side wall folds <b>sideways</b> (S.P. to the right). That is why the views are in exactly those positions!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<rect x="150" y="20" width="160" height="120" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="150" y="140" width="160" height="110" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<rect x="310" y="20" width="110" height="120" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="230" y="85" font-size="20" font-weight="bold" fill="#1e3a8a" text-anchor="middle">V.P.</text>
<text x="230" y="200" font-size="20" font-weight="bold" fill="#14532d" text-anchor="middle">H.P.</text>
<text x="365" y="85" font-size="20" font-weight="bold" fill="#78350f" text-anchor="middle">S.P.</text>
<path d="M120 60 Q 90 160 140 220" fill="none" stroke="#dc2626" stroke-width="3"/>
<polygon points="140,220 128,206 146,204" fill="#dc2626"/>
<text x="20" y="150" font-size="16" fill="#b91c1c">the bottom</text>
<text x="20" y="170" font-size="16" fill="#b91c1c">folds down</text>
<path d="M430 30 Q 500 20 520 90" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="440" y="130" font-size="16" fill="#b91c1c">the wall</text>
<text x="440" y="150" font-size="16" fill="#b91c1c">opens sideways</text>
</svg>`
        },
        {
          label: "🔦 Shadows in the sun",
          html: `<p>The <b>Sun</b> is so far away that its rays arrive practically <b>parallel</b>. At midday in summer, when the Sun is high, the shadow of an object on the floor is almost its <b>top view</b>.</p>
<p>A nearby torch, instead, makes rays that spread out: the shadow becomes bigger than the object. This is the <b>central projection</b>, the one used in perspective and photography. Orthographic projection is like a "perfect sun" that always shines at 90° to the plane.</p>`
        },
        {
          label: "🇺🇸 The American method",
          html: `<p>In the American method (third angle) you imagine the plane is <b>between you and the object</b>, like a sheet of glass on which you trace what you see. Then:</p>
<ul>
<li>the top view is drawn <b>above</b> the elevation;</li>
<li>the right view is drawn <b>to the right</b>.</li>
</ul>
<p>In the European method, instead, the object is <b>between you and the plane</b> and you project its "shadow" behind it. The figures are identical: only their arrangement on the sheet changes. To many students the American method seems more intuitive: "I draw what I see where I see it".</p>`
        },
        {
          label: "🧊 Turn the 3D solid",
          html: `<p>Choose a solid, look at it exactly from the front, then from above, then from the side. Draw on a sheet what you see in each position: you have made the three projections!</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 1, h: 2, color: "#f97316", labels: true, shapes: ["cylinder", "cone", "pyramid", "prism", "box"] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of orthographic projections",
      nodes: [
        { id: "geomdesc", label: "Descriptive geometry", x: 50, y: 7, color: "#7c3aed", html: "The part of geometry that represents 3D objects on a 2D sheet in an exact way.", why: "It was put in order by Gaspard Monge at the end of the 1700s. Before him architects and stonemasons already used plans and elevations (the Romans and cathedral builders did), but without a single mathematical method." },
        { id: "proiezione", label: "Orthographic projection", x: 50, y: 28, color: "#2563eb", html: "Rays parallel to each other and perpendicular to the projection plane.", why: "If the rays are perpendicular, every segment parallel to the plane keeps its length: that is why the drawing can be measured. It is the same idea as a shadow in the sun (parallel rays)." },
        { id: "triedro", label: "Trihedron (3 planes)", x: 50, y: 48, color: "#0ea5e9", html: "V.P., H.P. and S.P., perpendicular to each other like walls and floor.", why: "Space has three dimensions (width, height, depth): each view shows two of them, so with three views every dimension is represented at least twice." },
        { id: "pv", label: "Front view", x: 15, y: 66, color: "#3b82f6", html: "On the vertical plane: shows width and height.", why: "You choose the face that describes the object best: it is the main \"portrait\" on which the other views depend." },
        { id: "po", label: "Top view", x: 38, y: 82, color: "#16a34a", html: "On the horizontal plane: shows width and depth.", why: "It is the \"plan\", the same one used for houses and cities: the idea of looking from above is very ancient (city plans already existed in ancient Mesopotamia)." },
        { id: "pl", label: "Side view", x: 62, y: 82, color: "#f59e0b", html: "On the side plane: shows depth and height.", why: "It removes the doubts left by the first two views: for example, between a cylinder and a prism." },
        { id: "linee", label: "Line types", x: 85, y: 66, color: "#ef4444", html: "Thick continuous (visible), dashed (hidden), dash-dot (axes).", why: "Technical standards (UNI in Italy, ISO worldwide) fix the line types so that anyone, in any country, reads the drawing in the same way." },
        { id: "metodi", label: "European and American method", x: 85, y: 92, color: "#64748b", html: "European (first angle): plan below. American (third angle): plan above.", why: "It depends on where the plane is imagined: behind the object (European, like a shadow) or in front (American, like a sheet of glass). Both are allowed by the ISO 128 standard, as long as they are marked with the symbol." },
        { id: "monge", label: "Gaspard Monge", x: 15, y: 92, color: "#a855f7", html: "French mathematician (1746–1818), father of descriptive geometry.", why: "Working on fortifications at Mézières he invented a fast graphic method. His book <i>Géométrie descriptive</i> (1799) became the basis for teaching technical drawing in engineering schools." }
      ],
      edges: [
        ["geomdesc", "proiezione", "uses"],
        ["proiezione", "triedro", "onto"],
        ["triedro", "pv", "gives"],
        ["triedro", "po", "gives"],
        ["triedro", "pl", "gives"],
        ["proiezione", "linee", "is drawn with"],
        ["triedro", "metodi", "is arranged with"],
        ["monge", "geomdesc", "founded"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: reading the views",
      questions: [
        { type: "mc", q: "An object has front view = rectangle, side view = rectangle, top view = circle. What is it?", options: ["A cone", "An upright cylinder", "A sphere"], answer: 1, explain: "Only an upright cylinder has a circular plan and rectangular elevations." },
        { type: "num", q: "A cuboid measures 6 × 4 × 2 cm (length × depth × height). What is the area of its top view in cm²?", answer: 24, unit: "cm²", explain: "From above you see length and depth: 6 × 4 = 24 cm²." },
        { type: "tf", q: "The depth of an object appears in the front view.", answer: false, explain: "The front view shows width and height; depth appears in the plan and the side view." }
      ]
    }
  ],
  glossary: [
    { t: "Orthographic projection", d: "Representation with parallel rays perpendicular to the plane: measurements stay true." },
    { t: "Trihedron", d: "The three perpendicular planes V.P., H.P. and S.P. onto which the object is projected." },
    { t: "Elevation", d: "The front view, on the vertical plane." },
    { t: "Plan", d: "The top view, on the horizontal plane." },
    { t: "Side view (profile)", d: "The side view, on the side plane." },
    { t: "Ground line", d: "The line where the vertical plane and the horizontal plane meet." },
    { t: "Projection lines", d: "Thin lines that carry measurements from one view to another." },
    { t: "45° line", d: "A line used to transfer the depth from the plan to the side view." },
    { t: "Hidden edge", d: "An edge that cannot be seen from that point of view: it is drawn dashed." },
    { t: "Descriptive geometry", d: "The science that represents 3D objects in 2D in an exact way, founded by Gaspard Monge." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What does \"orthogonal\" mean?", options: ["Oblique", "Perpendicular, at a right angle", "Curved"], answer: 1, explain: "Orthogonal = perpendicular (from the Greek orthós, \"straight\", and gonía, \"angle\")." },
      { type: "mc", q: "Onto which plane is the front view projected?", options: ["Horizontal plane", "Vertical plane", "Side plane"], answer: 1, explain: "The front view (elevation) is on the vertical plane." },
      { type: "mc", q: "In the European method the left side view is drawn…", options: ["to the right of the elevation", "to the left of the elevation", "above the elevation"], answer: 0, explain: "In first angle the view from the left goes to the right of the front view." },
      { type: "tf", q: "Axes of symmetry are drawn with the dash-dot line.", answer: true, explain: "A thin chain line (dash-dot) = axes and centre lines." },
      { type: "num", q: "A cube has an edge of 5 cm. What is the area of its front view in cm²?", answer: 25, unit: "cm²", explain: "The front view of a cube is a 5 × 5 square = 25 cm²." },
      { type: "mc", q: "What is the top view of a square-based pyramid?", options: ["A triangle", "A square with its diagonals", "A circle"], answer: 1, explain: "From above you see the square base and the four edges rising to the apex, which are the diagonals." },
      { type: "text", q: "What is the line where V.P. and H.P. meet called? (… line)", answer: ["ground", "ground line"], explain: "It is the ground line (G.L.)." },
      { type: "mc", q: "What is the 45° line for?", options: ["To draw perspective", "To transfer the depth from the plan to the side view", "To show hidden edges"], answer: 1, explain: "The horizontal projection lines from the plan \"turn\" on the 45° line and become vertical in the side view." },
      { type: "order", q: "Put the stages of the drawing in order.", items: ["Choose the front view", "Draw the ground line and axes", "Draw the elevation", "Carry the measurements across and draw plan and side view", "Trace over the lines according to their type"], explain: "First the choice and the construction, then the views, finally the tracing over." },
      { type: "text", q: "Surname of the French mathematician who founded descriptive geometry.", answer: ["monge", "gaspard monge"], explain: "Gaspard Monge (1746–1818)." },
      { type: "tf", q: "In the American method the plan is drawn above the front view.", answer: true, explain: "In third angle the top view goes above." },
      { type: "num", q: "A cuboid is 10 cm long, 4 cm deep and 3 cm high. How wide (in cm) is the rectangle of the side view?", answer: 4, unit: "cm", explain: "The side view shows depth (4 cm) and height (3 cm): its width is the depth, 4 cm." }
    ],
    gen: [["areaRect", 2]]
  }
});
