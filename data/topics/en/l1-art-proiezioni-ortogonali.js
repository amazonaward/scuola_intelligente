TOPIC('en', {
  id: `l1-art-proiezioni-ortogonali`,
  title: `Technical drawing: orthographic projection`,
  intro: `How can an engineer explain to a factory how to build a part without sending the object itself? They <b>draw it from several sides</b>, following precise rules, so that anyone in the world can rebuild and measure it. <b>Orthographic projection</b> is the universal language of technical drawing: every point, every segment, every solid is "flattened" onto planes that are perpendicular to each other. Let's learn to read and write this language. 📐🧊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. What is an orthographic projection?`,
      html: `<p>To project a point onto a plane means to send a straight line (<b>projector</b>, or projecting ray) from that point to the plane. If the ray is <b>perpendicular</b> to the plane, the projection is <b>orthographic</b>. The image we get is like the shadow of an object lit by a very distant light source, perpendicular to the plane.</p>
<p>One projection is not enough: the shadow of a cube seen from the front is a square, but the same square could be the shadow of a very deep box! To identify an object with certainty you need <b>at least two projections on perpendicular planes</b>, often three.</p>
<p>The method was systematised by <b>Gaspard Monge</b> (1746-1818), a French mathematician, to design military fortifications. Kept secret for years, it was then taught at the École Normale (1795) and published as <i>Géométrie descriptive</i>: this is the birth of <b>descriptive geometry</b>. That is why we speak of <b>Monge's method</b>.</p>`
    },
    {
      type: `text`, title: `2. The three planes and unfolding them`,
      html: `<p>Imagine the corner of a room: two walls and the floor meet at 90°. These are the three planes of projection:</p>
<ul>
<li><b>VP – vertical plane</b> (the wall in front of you): the <b>front view</b> (elevation) is projected onto it;</li>
<li><b>HP – horizontal plane</b> (the floor): the <b>plan</b> (top view) is projected onto it;</li>
<li><b>SP – side plane</b> (the side wall): the <b>side view</b> (side elevation, usually seen from the left) is projected onto it.</li>
</ul>
<p>The lines where the planes meet are the axes of the system: the <b>ground line</b> (VP ∩ HP) and the other two. To put everything on one flat sheet of paper we <b>unfold</b> (rotate) the planes: the VP stays still, the HP rotates 90° about the ground line until it lies in the same plane as the VP, and the SP rotates 90° about its own folding line.</p>
<p>The result is the <b>standard layout</b>: the <b>front view</b> at top left, the <b>plan</b> <b>below</b> the front view (same width), the <b>side view</b> <b>to the right</b> of the front view (same height). Thanks to the <b>projection lines</b> (thin construction lines) the three views line up with each other.</p>`
    },
    {
      type: `svg`, title: `The three views of a rectangular box`,
      caption: `Front view (top left), plan (below) and side view (right) of a 120 × 70 × 80 box. The thin lines are projection lines: front view and plan have the same width, front view and side view the same height.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="90" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="60" y="150" width="170" height="110" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<rect x="270" y="30" width="110" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"><line x1="60" y1="120" x2="60" y2="150"/><line x1="230" y1="120" x2="230" y2="150"/><line x1="230" y1="30" x2="270" y2="30"/><line x1="230" y1="120" x2="270" y2="120"/></g>
<line x1="20" y1="135" x2="250" y2="135" stroke="#dc2626" stroke-width="2"/>
<text x="26" y="130" font-size="14" fill="#dc2626">ground line</text>
<text x="145" y="80" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">FRONT VIEW</text>
<text x="145" y="210" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">PLAN</text>
<text x="325" y="80" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">SIDE VIEW</text>
<text x="145" y="108" font-size="14" fill="#334155" text-anchor="middle">width × height</text>
<text x="145" y="232" font-size="14" fill="#334155" text-anchor="middle">width × depth</text>
<text x="325" y="104" font-size="14" fill="#334155" text-anchor="middle">depth × height</text>
<text x="420" y="60" font-size="15" fill="#1e293b">VP: front wall</text>
<text x="420" y="90" font-size="15" fill="#1e293b">HP: floor</text>
<text x="420" y="120" font-size="15" fill="#1e293b">SP: side wall</text>
<text x="420" y="180" font-size="15" fill="#334155">each view shows</text>
<text x="420" y="205" font-size="15" fill="#334155">two dimensions and</text>
<text x="420" y="230" font-size="15" fill="#334155">hides one</text>
</svg>`
    },
    {
      type: `3d`, title: `Rotate the solid: where are you looking from?`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#3b82f6`, labels: true, shapes: [`box`, `cube`, `prism`, `pyramid`, `cylinder`, `cone`, `sphere`] },
      caption: `Look at the solid from above (plan), from the front (front view) and from the side (side view). Then try the pyramid, cylinder and cone: which view shows a circle? Which one a triangle?`
    },
    {
      type: `quiz`, title: `Mini-quiz: the three planes`,
      questions: [
        { type: `mc`, q: `Onto which plane is the plan projected?`, options: [`VP`, `HP`, `SP`], answer: 1, explain: `The plan is the top view: it is projected onto the horizontal plane (HP).` },
        { type: `mc`, q: `In the standard layout, where is the plan drawn relative to the front view?`, options: [`Above`, `Below`, `To the right`], answer: 1, explain: `After the HP is unfolded, the plan sits below the front view, with the same width.` },
        { type: `tf`, q: `A single orthographic projection is enough to define a solid.`, answer: false, explain: `Different solids can have the same projection: you need at least two views.` }
      ]
    },
    {
      type: `text`, title: `3. Points and segments`,
      html: `<p>A <b>point</b> P in space has three coordinates (x, y, z). Its projections are: <b>P'</b> on the HP (plan, showing width and depth) and <b>P''</b> on the VP (front view, showing width and height). After unfolding, P' and P'' lie on the <b>same perpendicular to the ground line</b> (the "projection line"). The distance of P'' from the ground line is the <b>height</b> (how high P is above the floor); the distance of P' from the ground line is the <b>depth</b> (how far P is from the wall).</p>
<p>A <b>segment</b> AB is projected by joining the projections of its two endpoints. The special positions are:</p>
<ul>
<li><b>parallel to the HP</b> (horizontal): in plan it appears in <b>true length</b>, in the front view it is parallel to the ground line;</li>
<li><b>parallel to the VP</b>: in the front view it appears in true length;</li>
<li><b>perpendicular to the HP</b> (vertical): in plan it shrinks to a <b>point</b>, in the front view it is in true length and perpendicular to the ground line;</li>
<li><b>perpendicular to the VP</b>: in the front view it is a point, in plan it is in true length and perpendicular to the ground line;</li>
<li><b>general</b> (oblique): in <b>both</b> projections it is shorter than it really is, and the true length is found with an auxiliary construction.</li>
</ul>
<p>General rule: the orthographic projection of a segment is <b>as long as the segment multiplied by the cosine</b> of its angle with the plane: if it is parallel (0°) the cosine is 1 and nothing changes; if it is perpendicular (90°) the cosine is 0 and it shrinks to a point.</p>`
    },
    {
      type: `example`, title: `Example: where is the lamp?`,
      html: `<p>A lamp hanging from the ceiling of a room is 2.5 m above the floor and 1.2 m from the back wall. How do you represent it?</p>
<ul>
<li>The <b>front view</b> (VP) shows the lamp <b>2.5 m</b> above the ground line.</li>
<li>The <b>plan</b> (HP) shows it <b>1.2 m</b> below the ground line (after unfolding).</li>
<li>The two projections lie on the same vertical line (the projection line).</li>
</ul>
<p>From two simple measurements you can find the exact position in space: this is the principle behind topographic maps with spot heights and GPS coordinates.</p>`
    },
    {
      type: `text`, title: `4. Plane figures`,
      html: `<p>A <b>plane figure</b> (for example a square or a circle) is projected orthographically point by point. What happens depends on its <b>orientation</b>:</p>
<ul>
<li><b>parallel to a plane of projection</b>: on that plane it appears in its <b>true shape</b> (same shape and size); on the other one it shrinks to a <b>segment</b> (parallel to the ground line);</li>
<li><b>perpendicular to a plane</b>: on that plane it is a <b>segment</b>;</li>
<li><b>inclined</b>: in both projections it is <b>distorted</b> (a square becomes a parallelogram; a circle becomes an <b>ellipse</b>).</li>
</ul>
<p>Example: a <b>square with 4 cm sides</b> lying on the floor (parallel to the HP) is, in plan, a 4 × 4 cm square in true shape; in the front view it is a horizontal segment 4 cm long. If we stand it on its edge (perpendicular to the VP) the opposite happens.</p>
<p>A <b>circle</b> parallel to the HP is projected in plan as a circle and in the front view as a segment as long as its diameter. If it is inclined it becomes an ellipse: its major axis stays equal to the diameter.</p>`
    },
    {
      type: `text`, title: `5. Solids: rules for drawing them`,
      html: `<p>To draw the orthographic projections of a solid resting on the ground plane, proceed like this:</p>
<ol>
<li>Draw the <b>plan</b> (the base): the outline seen from above.</li>
<li>From each vertex of the plan, draw a vertical <b>projection line</b> upwards.</li>
<li>In the front view, mark the <b>heights</b> of the vertices, starting from the ground line, and join the points.</li>
<li>For the <b>side view</b>, use horizontal projection lines from the front view (same heights) and transfer the depths from the plan, turning them with a 45° line or with a compass.</li>
<li>Go over the <b>visible edges with a continuous line</b> and the <b>hidden edges with a dashed line</b>; draw <b>axes of symmetry</b> with a chain line (dash-dot).</li>
</ol>
<p>Some typical views:</p>
<ul>
<li><b>Cube</b> (resting on a face): front view and side view are squares, and so is the plan.</li>
<li><b>Right prism</b>: front view a rectangle, plan = the base polygon.</li>
<li><b>Right square pyramid</b>: front view a <b>triangle</b>, plan a square with its <b>diagonals</b> (the lateral edges).</li>
<li><b>Cylinder</b> (vertical axis): front view a rectangle, plan a <b>circle</b>.</li>
<li><b>Cone</b> (vertical axis): front view an isosceles triangle, plan a circle with its centre.</li>
<li><b>Sphere</b>: all three projections are identical <b>circles</b>.</li>
</ul>`
    },
    {
      type: `svg`, title: `Plan and front view of the main solids`,
      caption: `Solids of revolution (cylinder, cone, sphere) have at least one circular view: that is the clue for recognising them. In plan, the pyramid shows its diagonals, which are the slanting edges seen from above.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#f8fafc"/><line x1="10" y1="150" x2="590" y2="150" stroke="#dc2626" stroke-width="2"/><text x="14" y="145" font-size="14" fill="#dc2626">ground line</text><text x="60" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cube</text><rect x="30" y="60" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="30" y="180" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="60" y1="122" x2="60" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="180" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Pyramid</text><polygon points="145,120 215,120 180,50" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="145" y="175" width="70" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="145" y1="175" x2="215" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="215" y1="175" x2="145" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="180" y1="122" x2="180" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cylinder</text><rect x="270" y="50" width="60" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="300" cy="210" r="30" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="300" y1="122" x2="300" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="420" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cone</text><polygon points="385,120 455,120 420,45" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="3" fill="#1e3a8a"/><line x1="420" y1="122" x2="420" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="540" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Sphere</text><circle cx="540" cy="85" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="540" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="540" y1="122" x2="540" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="285" font-size="15" fill="#334155" text-anchor="middle">top: front view (on the VP) – bottom: plan (on the HP)</text><text x="300" y="308" font-size="14" fill="#475569" text-anchor="middle">the projections of the same point lie on the same perpendicular to the ground line</text></svg>`
    },
    {
      type: `example`, title: `Example: the paper cup`,
      html: `<p>A paper cup is a <b>truncated cone</b> (frustum) with the smaller base at the bottom. Its front view is an <b>isosceles trapezium</b>; the plan is made of <b>two concentric circles</b> (the large rim at the top and the smaller bottom). Someone reading only the front view might think of a vase or a bucket; the circular plan, with two circles, tells you it is a solid of revolution. It is precisely by cross-checking the views that you "rebuild" the object.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… Monge had to keep his method secret?`,
      html: `<p>Gaspard Monge invented the method as a young man (around 1765) while working as a draughtsman at the military school of Mézières, to work out where to place cannons without long numerical calculations. It was considered a <b>military secret</b> and stayed classified for about thirty years. Only after the French Revolution could Monge, who had become a minister and a founder of the École polytechnique, teach it publicly. He was also one of Napoleon's scientific advisers during the Egyptian campaign.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… video games and 3D printers think the same way?`,
      html: `<p>3D modelling programs (Blender, CAD) show four views by default: <b>Top</b> (plan), <b>Front</b> (front view), <b>Right/Left</b> (side view) and a 3D view. These are exactly Monge's projections! 3D printers work in "layers": each layer is a horizontal section of the object, in other words a "plan" at a certain height.</p>`
    },
    {
      type: `remember`, title: `Key points`,
      html: `<ul>
<li><b>Orthographic</b> projection: rays perpendicular to the plane.</li>
<li>Three planes: <b>VP</b> (front view), <b>HP</b> (plan), <b>SP</b> (side view). After unfolding: plan below the front view, side view on the right.</li>
<li>A figure <b>parallel</b> to a plane appears in its <b>true shape</b> on that plane; <b>perpendicular</b> → a segment (or a point, for a segment).</li>
<li>Visible edges with a <b>continuous</b> line, hidden edges with a <b>dashed</b> line, axes with a <b>dash-dot</b> line.</li>
<li>Cylinder, cone and sphere have a <b>circular</b> view.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Orthographic projections are easier to grasp when you see them with your hands and eyes.`,
      tabs: [
        {
          label: `🔦 Shadows`,
          html: `<p>Put an object in front of a wall and light it with a very distant lamp (or the sun): the shadow is the projection. If the wall is perpendicular to the rays, the shadow is <b>orthographic</b>. Try with a cereal box: from one side the shadow is a wide rectangle, from the other a narrow one, from above a different rectangle. Each one is a view.</p>`
        },
        {
          label: `🧊 The glass box`,
          html: `<p>Imagine the object inside a transparent glass box: looking through the front face, the top face and the side face, you see the three views "drawn" on the glass. Opening the box like a cardboard box (that is, <b>unfolding</b> its faces onto one plane) gives you exactly the three views laid out as on the drawing sheet.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#60a5fa`, labels: true, shapes: [`cube`, `box`, `pyramid`, `cone`] }
        },
        {
          label: `🇺🇸 European and American methods`,
          html: `<p>There are two conventions in the world:</p>
<ul>
<li><b>European method</b> (first-angle projection, the one used in Italy): the object is <b>between the observer and the plane</b>: the plan goes below the front view, the left side view on the right.</li>
<li><b>American method</b> (third-angle projection): the plane is between the observer and the object, like a transparent pane of glass: the plan goes <b>above</b> the front view and the left side view on the left.</li>
</ul>
<p>In international standards (ISO), a small symbol showing a truncated cone tells you which method was used in the drawing.</p>`
        },
        {
          label: `🏷️ Recognise the views`,
          html: `<p>Match each solid to its top view.</p>`,
          widget: `match`,
          options: { pairs: [[`Cube`, `Square`], [`Cylinder`, `Circle`], [`Square-based pyramid`, `Square with diagonals`], [`Cone`, `Circle with a centre point`], [`Sphere`, `Circle`]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: orthographic projection`,
      nodes: [
        { id: `rapp`, label: `Representing 3D on paper`, x: 50, y: 6, color: `#64748b`, html: `How to reduce a three-dimensional object to flat drawings without losing its measurements.`, why: `A flat drawing always loses one dimension. You recover it by combining several views on different planes.` },
        { id: `proj`, label: `Orthographic projection`, x: 20, y: 30, color: `#0ea5e9`, html: `Rays perpendicular to the plane.`, why: `If the ray is perpendicular, a segment parallel to the plane keeps its length: that is why the method preserves measurements.` },
        { id: `piani`, label: `Three planes VP, HP, SP`, x: 52, y: 30, color: `#f59e0b`, html: `Front wall, floor, side wall.`, why: `You need two perpendicular planes to fix a point: x, y, z are Descartes' Cartesian coordinates (1637) applied to the views.` },
        { id: `rib`, label: `Unfolding`, x: 82, y: 30, color: `#a855f7`, html: `Rotating the planes until everything lies flat on the sheet.`, why: `<b>Monge</b>'s brilliant idea (around 1765, published in 1795-1799): flattening three-dimensional space with a 90° rotation.` },
        { id: `vera`, label: `True length`, x: 22, y: 62, color: `#22c55e`, html: `A segment or figure parallel to the plane is not distorted.`, why: `A projection multiplies lengths by the cosine of the angle with the plane: if the angle is 0, the cosine is 1.` },
        { id: `solidi`, label: `Solids`, x: 52, y: 62, color: `#ef4444`, html: `Plan + front view (+ side view) identify a solid.`, why: `Each view gives two dimensions; with two or three views you get all three. Hidden edges are dashed so you can read the inside.` },
        { id: `norma`, label: `Standards and conventions`, x: 82, y: 62, color: `#14b8a6`, html: `Continuous, dashed and dash-dot lines; European and American methods.`, why: `For someone drawing in Turin and someone reading in Tokyo to understand the same drawing, shared rules are needed: UNI and ISO standards.` },
        { id: `uso`, label: `Applications`, x: 50, y: 90, color: `#0ea5e9`, html: `Engineering, architecture, CAD, 3D printing.`, why: `Every mass-produced part is defined by a dimensioned drawing in orthographic projection.` }
      ],
      edges: [
        [`rapp`, `proj`, `method`], [`rapp`, `piani`, `uses`], [`piani`, `rib`, `gives`], [`proj`, `vera`, `if parallel`],
        [`rib`, `solidi`, `for`], [`piani`, `solidi`, `draws`], [`solidi`, `norma`, `follows`], [`solidi`, `uso`, `for`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: segments and solids`,
      questions: [
        { type: `mc`, q: `A segment perpendicular to the horizontal plane appears in plan as…`, options: [`A segment in true length`, `A point`, `A segment half as long`], answer: 1, explain: `The projecting ray coincides with the segment: the projection shrinks to a point.` },
        { type: `mc`, q: `The plan of a cone with a vertical axis is…`, options: [`A triangle`, `A circle with its centre point`, `A rectangle`], answer: 1, explain: `The circular base, with the apex projected onto the centre.` },
        { type: `tf`, q: `The front view of a sphere is a circle.`, answer: true, explain: `All three projections of a sphere are circles, with a radius equal to the sphere's radius.` },
        { type: `num`, q: `A cube with 5 cm edges rests on one face: what is the area of the square in the front view?`, answer: 25, tol: 0, unit: `cm²`, explain: `The front view is a square in true shape with 5 cm sides: 5 × 5 = 25 cm².` }
      ]
    }
  ],
  glossary: [
    { t: `Orthographic projection`, d: `Projection with rays perpendicular to the plane of projection.` },
    { t: `Plan`, d: `Top view: projection onto the horizontal plane (HP).` },
    { t: `Front view`, d: `View from the front (elevation): projection onto the vertical plane (VP).` },
    { t: `Side view`, d: `View from the side: projection onto the side plane (SP).` },
    { t: `Ground line`, d: `The line where the vertical plane and the horizontal plane meet.` },
    { t: `Unfolding`, d: `90° rotation of the planes so that all the views lie flat on the sheet.` },
    { t: `True length`, d: `Projection of a segment or figure that keeps its real dimensions.` },
    { t: `Projection line`, d: `Thin line that links the projections of the same point.` },
    { t: `Monge's method`, d: `System of representation with perpendicular planes unfolded flat, devised by Gaspard Monge.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Who systematised the method of orthographic projection (descriptive geometry)?`, options: [`Gaspard Monge`, `Filippo Brunelleschi`, `Euclid`], answer: 0, explain: `Monge, a French mathematician, published the Géométrie descriptive (1795-1799).` },
      { type: `mc`, q: `The front view is projected onto the…`, options: [`horizontal plane`, `vertical plane`, `side plane`], answer: 1, explain: `The front view is the view from the front: VP.` },
      { type: `tf`, q: `A segment parallel to the plane of projection is projected in true length.`, answer: true, explain: `The segment and its projection are opposite sides of a rectangle.` },
      { type: `num`, q: `A vertical segment is 8 cm long: how long is its projection on the horizontal plane (in cm)?`, answer: 0, tol: 0, unit: `cm`, explain: `It is a point: zero length.` },
      { type: `mc`, q: `How are hidden edges drawn?`, options: [`Thick continuous line`, `Dashed line`, `They are never drawn`], answer: 1, explain: `Technical drawing convention: a dashed line.` },
      { type: `mc`, q: `The plan of a cylinder with a vertical axis is…`, options: [`a rectangle`, `a circle`, `a triangle`], answer: 1, explain: `Seen from above, you see the circular base.` },
      { type: `order`, q: `Put in order the steps for drawing the plan and front view of a pyramid.`, items: [`Draw the plan of the base`, `Draw the vertical projection lines`, `Mark the heights in the front view`, `Join the points and go over the lines`], explain: `The plan gives the horizontal positions; then you add the heights.` },
      { type: `tf`, q: `The front view of a right square pyramid, seen from the front, is a triangle.`, answer: true, explain: `You see the base as a segment and the faces as a triangle.` },
      { type: `text`, q: `What is the name of the line where the vertical plane and the horizontal plane intersect?`, answer: [`ground line`, `the ground line`, `ground-line`, `reference line`, `the reference line`, `folding line`, `the folding line`, `xy line`], explain: `The ground line: after unfolding, it separates the front view from the plan.` },
      { type: `mc`, q: `Which solid has three identical projections, all circles?`, options: [`Sphere`, `Cone`, `Cylinder`], answer: 0, explain: `The sphere is symmetrical in every direction.` }
    ]
  }
});
