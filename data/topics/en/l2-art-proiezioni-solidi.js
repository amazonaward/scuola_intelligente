TOPIC('en', {
  id: `l2-art-proiezioni-solidi`,
  title: `Technical drawing: sections and solids`,
  intro: `An engineer has to get a part made that doesn't exist yet; a surgeon looks at a CT scan, which is a stack of "slices" of the body; a baker cuts a loaf to see how it has risen. Drawing <b>solids</b> in orthographic projection, <b>cutting</b> them with a plane (<b>sections</b>) and <b>opening them out</b> on paper (<b>nets</b>) is the grammar of technical drawing. Here you take the projections from your first year and apply them to real solids: prisms, pyramids, cylinders, cones and spheres. ✏️📐`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Review: the three views`,
      html: `<p>In <b>orthographic projection</b> (the method of <b>Gaspard Monge</b>, 1746-1818, a French mathematician who turned it into "descriptive geometry") every point of the object is projected with rays <b>perpendicular</b> to planes:</p>
<ul>
<li><b>VP</b> (vertical plane): front view, or <b>elevation</b>;</li>
<li><b>HP</b> (horizontal plane): top view, or <b>plan</b>;</li>
<li><b>PP</b> (profile plane): view from the right or left, or <b>side view</b>.</li>
</ul>
<p>After projecting, the HP is <b>rotated</b> 90° about the <b>ground line</b> (GL, the intersection of VP and HP) so that it lies on the same sheet. The views stay <b>aligned</b>: corresponding points lie on the same <b>projection line</b> (perpendicular to the GL).</p>
<p>Drawing rules to remember: visible edges are drawn with a <b>continuous line</b>; edges <b>hidden</b> behind other parts with a <b>dashed line</b>; axes of symmetry with a <b>dash-dot line</b> (centre line).</p>`
    },
    {
      type: `text`, title: `2. Projecting a solid`,
      html: `<p>The simplest case: the solid <b>rests on the HP</b> (its base lies on the horizontal plane) and its axis is perpendicular to the HP. Then:</p>
<ul>
<li><b>Right prism</b> (with a polygonal base): the plan is the <b>base polygon</b> (true shape); the elevation is a <b>rectangle</b> as tall as the solid (with as many vertical lines as there are visible edges);</li>
<li><b>Right pyramid</b>: the plan is the base polygon with <b>lines from the apex</b> to the vertices (the lateral edges); the elevation is a <b>triangle</b>;</li>
<li><b>Right cylinder</b>: plan = <b>circle</b>; elevation = <b>rectangle</b>;</li>
<li><b>Right cone</b>: plan = <b>circle</b> with the apex at the centre; elevation = <b>isosceles triangle</b>;</li>
<li><b>Sphere</b>: all three views are <b>circles</b> of equal radius.</li>
</ul>
<p>The <b>height</b> of the solid is read on the elevation, the <b>depth</b> on the plan, and the <b>width</b> on both: technical drawing "repeats" shared measurements in different views, which lets you check for mistakes.</p>`
    },
    {
      type: `svg`, title: `Prism, pyramid and cone in projection`,
      caption: `Above the ground line (GL) is the elevation, below it the rotated plan. The views are aligned vertically.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0fdf4"/><line x1="20" y1="150" x2="580" y2="150" stroke="#166534" stroke-width="3"/><text x="25" y="170" font-size="14" font-weight="bold" fill="#166534">GL</text><rect x="70" y="50" width="80" height="100" fill="#bbf7d0" stroke="#14532d" stroke-width="3"/><rect x="70" y="150" width="80" height="70" fill="#dcfce7" stroke="#14532d" stroke-width="3"/><line x1="110" y1="40" x2="110" y2="225" stroke="#166534" stroke-width="1.5" stroke-dasharray="6 4"/><text x="110" y="36" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">PRISM</text><text x="110" y="245" font-size="14" fill="#14532d" text-anchor="middle">base = plan</text><polygon points="270,150 350,150 310,50" fill="#bbf7d0" stroke="#14532d" stroke-width="3"/><rect x="270" y="150" width="80" height="80" fill="#dcfce7" stroke="#14532d" stroke-width="3"/><line x1="270" y1="150" x2="350" y2="230" stroke="#14532d" stroke-width="2"/><line x1="350" y1="150" x2="270" y2="230" stroke="#14532d" stroke-width="2"/><text x="310" y="36" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">PYRAMID</text><text x="310" y="250" font-size="14" fill="#14532d" text-anchor="middle">edges to the apex</text><polygon points="470,150 550,150 510,50" fill="#bbf7d0" stroke="#14532d" stroke-width="3"/><circle cx="510" cy="190" r="40" fill="#dcfce7" stroke="#14532d" stroke-width="3"/><circle cx="510" cy="190" r="3" fill="#14532d"/><text x="510" y="36" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">CONE</text><text x="510" y="250" font-size="14" fill="#14532d" text-anchor="middle">circle</text><text x="315" y="285" font-size="14" fill="#334155" text-anchor="middle">top: elevation (VP) · bottom: plan (HP)</text></svg>`
    },
    {
      type: `3d`, title: `Rotate the solid: which side are you looking from?`,
      scene: `solid`,
      options: { shape: `pyramid`, n: 4, r: 1.3, h: 2, color: `#22c55e`, labels: true, shapes: [`cube`, `box`, `prism`, `pyramid`, `cylinder`, `cone`, `sphere`] },
      caption: `Look at each solid from above (plan) and from the front (elevation) and check the shapes: the sphere always gives circles, the cylinder a circle and a rectangle, the pyramid a square with diagonals and a triangle.`
    },
    {
      type: `example`, title: `Example: drawing a square-based pyramid`,
      html: `<p>A right pyramid with a <b>square base of side 6 cm</b> and <b>height 8 cm</b>, resting on the HP. How do you proceed?</p>
<ol>
<li>Draw the <b>ground line</b>.</li>
<li><b>Plan</b> (below the GL): draw a 6 × 6 cm square; draw the two diagonals: they meet at the centre, where the apex is projected.</li>
<li><b>Elevation</b> (above the GL): using vertical projection lines from the corners of the square, mark the 6 cm base on the GL; the apex lies on the projection line from the centre, <b>8 cm high</b>. Join the two ends of the base to the apex: you get an isosceles triangle.</li>
<li>The <b>slant height</b> (the height of a face) is found with Pythagoras' theorem: √(8² + 3²) = √73 ≈ <b>8.5 cm</b>; the lateral edge is √(8² + (3√2)²) = √(64 + 18) = √82 ≈ <b>9.1 cm</b>. In the normal projections they do not appear at true length because they are not parallel to the planes. To see them you need an auxiliary view (change of plane) or a rotation.</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: views of solids`,
      questions: [
        { type: `mc`, q: `What shape is the plan of a right cone resting on the HP?`, options: [`A circle`, `A triangle`, `An ellipse`], answer: 0, explain: `The base is a circle parallel to the HP, so it appears in true shape.` },
        { type: `mc`, q: `Which solid has all three views the same (circles)?`, options: [`The sphere`, `The cylinder`, `The cube`], answer: 0, explain: `The sphere is symmetrical about every plane.` },
        { type: `tf`, q: `Hidden edges are drawn with a dashed line.`, answer: true, explain: `By convention.` }
      ]
    },
    {
      type: `text`, title: `3. Sections`,
      html: `<p>A <b>section</b> is obtained by "cutting" the solid with a <b>cutting plane</b>: the resulting shape (the intersection of the plane with the surface of the solid) is the <b>section shape</b>. After the cut, one part can be removed to show the inside: it is the same principle as an architectural section or a CT scan.</p>
<p>The section shape depends on the <b>position of the plane</b>:</p>
<ul>
<li>a plane <b>parallel to the base</b> of a prism or cylinder: a shape <b>identical to the base</b>; in a pyramid or cone: a shape <b>similar to the base</b>, but smaller;</li>
<li>a plane <b>perpendicular to the base</b> and passing through the axis of a cylinder: a <b>rectangle</b>; of a cone: an <b>isosceles triangle</b>;</li>
<li>a plane <b>oblique</b> to a cylinder: an <b>ellipse</b>;</li>
<li><b>sphere</b>: any plane cuts it in a <b>circle</b> (the largest if it passes through the centre);</li>
<li><b>cube</b>: plane parallel to a face → square; plane through two opposite edges (diagonal section) → rectangle with sides <i>a</i> and <i>a</i>√2; plane through the three vertices adjacent to one vertex → <b>equilateral triangle</b>; plane through the midpoints of six edges → <b>regular hexagon</b>.</li>
</ul>
<p>To get the <b>true shape</b> of the section (which appears distorted in the normal projections if the plane is inclined) the cutting plane is <b>rotated</b> onto one of the projection planes, or an auxiliary view perpendicular to the cutting plane is used.</p>`
    },
    {
      type: `svg`, title: `Sections of the cone: the conics`,
      caption: `Cutting a cone with different planes gives: a circle (plane parallel to the base), an ellipse (oblique plane cutting all the generators), a parabola (plane parallel to a generator), a hyperbola (plane parallel to the axis).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fef3c7"/><polygon points="300,30 180,220 420,220" fill="#fde68a" stroke="#78350f" stroke-width="3"/><ellipse cx="300" cy="220" rx="120" ry="18" fill="#fcd34d" stroke="#78350f" stroke-width="3"/><line x1="233" y1="130" x2="367" y2="130" stroke="#2563eb" stroke-width="4"/><line x1="216" y1="163" x2="348" y2="106" stroke="#16a34a" stroke-width="4"/><line x1="253" y1="105" x2="322" y2="214" stroke="#dc2626" stroke-width="4"/><line x1="330" y1="78" x2="330" y2="220" stroke="#7c3aed" stroke-width="4"/><text x="300" y="20" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">one cone, four cuts</text><text x="150" y="134" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">circle</text><text x="470" y="90" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">ellipse (oblique)</text><line x1="400" y1="95" x2="350" y2="106" stroke="#15803d" stroke-width="1.5"/><text x="215" y="80" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="middle">parabola</text><line x1="245" y1="86" x2="262" y2="112" stroke="#b91c1c" stroke-width="1.5"/><text x="400" y="190" font-size="14" font-weight="bold" fill="#6d28d9" text-anchor="middle">hyperbola</text><line x1="356" y1="184" x2="332" y2="170" stroke="#6d28d9" stroke-width="1.5"/><line x1="200" y1="128" x2="233" y2="130" stroke="#1d4ed8" stroke-width="1.5"/><line x1="430" y1="125" x2="368" y2="130" stroke="#15803d" stroke-width="1.5" opacity="0"/></svg>`
    },
    {
      type: `curiosity`, title: `Did you know… conics describe the planets?`,
      html: `<p>The <b>conic sections</b> were studied in the 3rd-2nd century BC by <b>Apollonius of Perga</b>, who named the ellipse, parabola and hyperbola. For almost 1800 years they seemed to be pure geometry. Then in the 17th century <b>Kepler</b> discovered that the planets move in <b>ellipses</b> with the Sun at one focus; <b>Galileo</b> that a thrown projectile follows (without air resistance) a <b>parabola</b>; and <b>Newton</b> that comets can follow a parabola or a <b>hyperbola</b>. <b>Satellite dishes</b> and car headlights also use the parabola to concentrate or direct rays.</p>`
    },
    {
      type: `text`, title: `4. Nets of solids`,
      html: `<p>The <b>net</b> of a solid is the flat shape you get by "opening out" its surface and laying it on a sheet: if you cut it out and fold it, you rebuild the solid. It is essential for making boxes, packaging, tents and lampshades (sheet-metal work, paper engineering).</p>
<ul>
<li><b>Cube</b>: six squares; there are <b>11</b> different nets (the famous "cross" is just one of them);</li>
<li><b>Right prism</b>: two base polygons + side-by-side lateral <b>rectangles</b>, whose bases equal the sides of the polygon and whose height equals that of the prism;</li>
<li><b>Right pyramid</b>: the base polygon + as many <b>isosceles triangles</b> as there are sides;</li>
<li><b>Right cylinder</b>: two circles + a <b>rectangle</b> with sides 2πr (circumference of the base) and h (height);</li>
<li><b>Right cone</b>: a circle + a <b>circular sector</b> with radius equal to the cone's <b>slant height</b> <i>a</i> (generator) and an arc as long as the circumference of the base: the <b>central angle</b> measures <b>360° · r / a</b>;</li>
<li><b>Sphere</b>: it has no net! It cannot be flattened without stretching or tearing it: that is why every world map is distorted (see the Mercator projection).</li>
</ul>
<p>A solid is <b>developable</b> if its surface can be laid flat on a plane <b>without distortion</b>; the lateral surface of prisms, cylinders, pyramids and cones is developable, that of the sphere is not.</p>`
    },
    {
      type: `svg`, title: `The net of a cone`,
      caption: `A cone with base radius r = 3 and slant height a = 5 opens out into a circular sector of radius 5 and angle 360° × 3 / 5 = 216°, plus the base circle.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#faf5ff"/><polygon points="100,50 40,200 160,200" fill="#e9d5ff" stroke="#581c87" stroke-width="3"/><ellipse cx="100" cy="200" rx="60" ry="15" fill="#d8b4fe" stroke="#581c87" stroke-width="3"/><text x="100" y="270" font-size="14" fill="#581c87" text-anchor="middle">cone: r = 3, a = 5</text><text x="55" y="120" font-size="14" font-weight="bold" fill="#581c87" text-anchor="end">a</text><path d="M400 80 L257.3 33.6 A150 150 0 1 0 542.7 33.6 Z" fill="#e9d5ff" stroke="#581c87" stroke-width="3"/><line x1="400" y1="80" x2="400" y2="230" stroke="#7e22ce" stroke-width="2" stroke-dasharray="6 4"/><text x="412" y="150" font-size="14" fill="#581c87">a = 5</text><path d="M330 100 A60 60 0 0 0 470 100" fill="none" stroke="#dc2626" stroke-width="3"/><text x="400" y="190" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">216°</text><text x="400" y="270" font-size="14" fill="#581c87" text-anchor="middle">circular sector (lateral surface)</text><circle cx="555" cy="260" r="26" fill="#d8b4fe" stroke="#581c87" stroke-width="3"/><text x="555" y="266" font-size="14" fill="#581c87" text-anchor="middle">r=3</text></svg>`
    },
    {
      type: `example`, title: `Example: how much card for a cone-shaped lampshade?`,
      html: `<p>A <b>cone</b>-shaped lampshade (with no base) has base radius <b>r = 12 cm</b> and slant height <b>a = 20 cm</b>.</p>
<ol>
<li>Height: h = √(20² − 12²) = √(400 − 144) = √256 = <b>16 cm</b> (the Pythagorean triple 12-16-20).</li>
<li>Net: a circular sector of radius 20 cm; central angle = 360° × 12 / 20 = <b>216°</b>.</li>
<li>Arc length = circumference of the base = 2π · 12 ≈ <b>75.4 cm</b>.</li>
<li>Lateral surface area: S = π · r · a = π · 12 · 20 ≈ <b>754 cm²</b> (about 0.075 m²): you will need a slightly larger piece of card, for the gluing tabs.</li>
</ol>
<p>For a <b>cylinder</b> of radius 2 and height 5, on the other hand, the lateral area is the rectangle 2π·2 × 5 = 20π ≈ <b>62.8 cm²</b>.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: sections and nets`,
      questions: [
        { type: `mc`, q: `What shape do you get by cutting a sphere with any plane?`, options: [`A circle`, `An ellipse`, `A square`], answer: 0, explain: `Every plane section of a sphere is a circle.` },
        { type: `num`, q: `A cone has base radius 4 and slant height 8. What is the central angle of the sector (in degrees)?`, answer: 180, tol: 0, unit: `°`, explain: `360 × 4 / 8 = 180°: a semicircle.` },
        { type: `tf`, q: `A cutting plane parallel to a generator of the cone gives a parabola.`, answer: true, explain: `It is one of the four conics.` }
      ]
    },
    {
      type: `curiosity`, title: `Did you know… a sphere can't be "unrolled"?`,
      html: `<p>A sphere is not developable: <b>Gauss</b> proved this in the 19th century with his "<i>Theorema Egregium</i>" (1827): the curvature of a surface does not change if you bend it without stretching it. The cylinder and the cone have zero Gaussian curvature (like a flat sheet); the sphere has positive curvature. That is why every map on a flat sheet distorts areas, distances or shapes, and why a football is made by sewing together specially shaped pieces.</p>`
    },
    {
      type: `remember`, title: `Key points`,
      html: `<ul><li>Solid on the HP: prism → polygon + rectangle; pyramid → polygon with diagonals + triangle; cylinder → circle + rectangle; cone → circle + triangle; sphere → circles.</li><li>Sections: the shape depends on the plane; the cone gives the <b>conics</b> (circle, ellipse, parabola, hyperbola).</li><li>Nets: cone → sector with angle 360°·r/a; cylinder → rectangle 2πr × h; the sphere has no net.</li></ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Sections and nets are easier to understand with everyday objects and a bit of hands-on work.`,
      tabs: [
        {
          label: `🥖 In the kitchen`,
          html: `<p>Cut a carrot in three ways: <b>across</b> (discs: circles), <b>at a slant</b> (ovals: ellipses), <b>lengthways</b> (a rectangle). Do the same with a salami (a cylinder). An ice-cream cone cut in half vertically shows the triangle; cut horizontally, a circle. Trying it with a real object is the best way to "see" sections.</p>`
        },
        {
          label: `✂️ Cut and fold`,
          html: `<p>Draw a circular sector of radius 10 cm and angle 216° on paper, cut it out and glue the two straight edges together: you get a cone with base radius 6 cm (circumference = 2π·6 ≈ 37.7 cm, equal to the arc 2π·10·216/360 ≈ 37.7 cm). Roll up a 6.28 × 4 cm rectangle and you have a cylinder of radius 1 cm and height 4 cm. With paper you can see why the lateral surface is a rectangle or a sector.</p>`
        },
        {
          label: `🧩 Match solid and view`,
          html: `<p>Link each solid to its plan and elevation.</p>`,
          widget: `match`,
          options: { pairs: [[`Right cylinder (plan, elevation)`, `Circle and rectangle`], [`Right cone (plan, elevation)`, `Circle and triangle`], [`Square pyramid (plan, elevation)`, `Square with diagonals and triangle`], [`Square prism (plan, elevation)`, `Square and rectangle`], [`Sphere (plan, elevation)`, `Circle and circle`]] }
        },
        {
          label: `🧩 Developable or not?`,
          html: `<p>Sort the surfaces.</p>`,
          widget: `classify`,
          options: { groups: [`Developable`, `Not developable`], items: [[`Cylinder`, 0], [`Cone`, 0], [`Cube`, 0], [`Sphere`, 1], [`Prism`, 0], [`Surface of a ball`, 1]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: sections and nets`,
      nodes: [
        { id: `sol`, label: `Solids`, x: 50, y: 6, color: `#64748b`, html: `Prisms, pyramids, cylinders, cones, spheres.`, why: `Almost all real objects are combinations of these simple solids.` },
        { id: `po`, label: `Orthographic projection`, x: 18, y: 28, color: `#f59e0b`, html: `VP, HP, PP with rotation.`, why: `Monge (1795-1799) systematised it for the military design of fortifications.` },
        { id: `sez`, label: `Sections`, x: 50, y: 28, color: `#0ea5e9`, html: `Cutting plane and section shape.`, why: `To show the inside of an object and its structure: useful for designing and understanding.` },
        { id: `svi`, label: `Nets`, x: 82, y: 28, color: `#a855f7`, html: `Surface laid flat on the plane.`, why: `To build objects from sheet metal, cardboard or fabric: geometry becomes a cutting pattern.` },
        { id: `con`, label: `Conics`, x: 40, y: 58, color: `#ef4444`, html: `Circle, ellipse, parabola, hyperbola.`, why: `Apollonius described them; Kepler and Newton found them again in the motion of the planets.` },
        { id: `vf`, label: `True shape`, x: 14, y: 62, color: `#22c55e`, html: `Rotating the plane.`, why: `An inclined plane projects distorted shapes: to measure, you must rotate it flat.` },
        { id: `dev`, label: `Developable surfaces`, x: 78, y: 62, color: `#14b8a6`, html: `Cylinder and cone yes, sphere no.`, why: `Gauss: curvature does not change when you bend; the sphere has positive curvature.` },
        { id: `app`, label: `Applications`, x: 50, y: 90, color: `#3b82f6`, html: `Carpentry, CAD, CT scans, packaging.`, why: `From paper to computer: 3D modelling software uses the same ideas.` }
      ],
      edges: [[`sol`, `po`, `are represented`], [`sol`, `sez`, `are cut`], [`sol`, `svi`, `are opened out`], [`sez`, `con`, `cone`], [`po`, `vf`, `rotate`], [`svi`, `dev`, `limit`], [`con`, `app`, `uses`], [`dev`, `app`, `uses`]]
    }
  ],
  glossary: [
    { t: `Orthographic projection`, d: `Projection with rays perpendicular to the projection plane.` },
    { t: `Ground line (GL)`, d: `Intersection between the vertical plane and the horizontal plane.` },
    { t: `Cutting plane`, d: `Plane that cuts through a solid.` },
    { t: `Section`, d: `Shape produced by the intersection of a solid with a plane.` },
    { t: `True shape`, d: `A figure in its real size and shape, when its plane is parallel to the projection plane.` },
    { t: `Net`, d: `Flat shape obtained by opening out the surface of a solid.` },
    { t: `Slant height (of a cone)`, d: `Segment joining the apex to a point on the base circumference (generator).` },
    { t: `Circular sector`, d: `Part of a circle between two radii and an arc.` },
    { t: `Conic`, d: `Curve obtained by cutting a cone with a plane: circle, ellipse, parabola, hyperbola.` },
    { t: `Generator`, d: `Segment that, by rotating, generates the surface of a cone or cylinder.` },
    { t: `Developable surface`, d: `Surface that can be laid flat on a plane without distortion.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `What shape is the elevation of a right cylinder resting on the HP?`, options: [`A rectangle`, `A circle`, `A triangle`], answer: 0, explain: `As wide as the diameter, as tall as the cylinder.` },
      { type: `mc`, q: `What shape is the plan of a right square-based pyramid?`, options: [`A square with its diagonals`, `A triangle`, `A circle`], answer: 0, explain: `The base in true shape, with the lateral edges meeting at the centre.` },
      { type: `tf`, q: `A section of a sphere is always a circle.`, answer: true, explain: `Any plane cuts it in a circle.` },
      { type: `mc`, q: `Which conic is produced by a plane parallel to a generator of the cone?`, options: [`Parabola`, `Ellipse`, `Circle`], answer: 0, explain: `The circle comes from a plane parallel to the base; the ellipse from an oblique plane.` },
      { type: `num`, q: `A cone has r = 6 and a = 10. How many degrees is the central angle of its circular sector?`, answer: 216, tol: 0, unit: `°`, explain: `360 × 6 / 10 = 216°.` },
      { type: `num`, q: `A cylinder has r = 3 cm and h = 10 cm. How long (in cm) is the base of the rectangle in its net, i.e. the circumference? (round to the nearest whole number)`, answer: 19, tol: 0.5, unit: `cm`, explain: `2π × 3 ≈ 18.85 cm ≈ 19 cm.` },
      { type: `mc`, q: `How many distinct nets does a cube have?`, options: [`11`, `6`, `4`], answer: 0, explain: `The cube has 11 different nets.` },
      { type: `tf`, q: `A sphere can be laid flat on a plane without distortion.`, answer: false, explain: `It is not a developable surface.` },
      { type: `text`, q: `What is the line where the vertical plane and the horizontal plane meet called?`, answer: [`ground line`, `gl`, `the ground line`, `xy line`, `reference line`], explain: `Ground line (GL).` },
      { type: `order`, q: `Put the steps for drawing a solid in projection in order.`, items: [`Draw the ground line`, `Draw the plan in true shape`, `Draw the vertical projection lines`, `Draw the elevation with the heights`, `Dash the hidden edges`], explain: `From the GL to the views, and finally the line conventions.` }
    ]
  }
});
