TOPIC('en', {
  id: `l2-art-assonometria`,
  title: `Technical drawing: axonometric projection`,
  intro: `Orthographic projections are precise but "cold": you need three drawings to see one object. Often, though, you want a <b>single</b> image that can be read at a glance: the assembly drawing for a piece of furniture, the box art in board-game manuals, the layout of a room. That is the job of <b>axonometric projection</b>: showing the <b>three dimensions</b> in one drawing, with rules that still let you <b>measure</b>. The three variants you will study: <b>isometric</b>, <b>cavalier</b> and <b>monometric</b>. 📦✏️`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. What is an axonometric projection?`,
      html: `<p>The word comes from Greek: <i>áxon</i> (axis) + <i>métron</i> (measure): "measuring along the axes". A <b>set of three Cartesian axes</b> (<b>x</b>, <b>y</b>, <b>z</b>) attached to the object is fixed in space, and the object and axes are projected with <b>parallel rays</b> onto a single plane, the <b>picture plane</b>. Because the three directions appear in the same drawing, lengths can be <b>measured along the axes</b>, using <b>reduction coefficients</b> (lengths along the axes are shortened by a known factor).</p>
<p>Remember <b>orthographic projection</b> (Monge, three separate views)? There the projection plane is parallel to one face of the object, and each view shows one face in true shape. Here, instead, the picture plane is <b>tilted</b> relative to the axes (or the projection is oblique), so several faces are seen <b>together</b>.</p>
<p>There are two families:</p>
<ul>
<li><b>orthogonal axonometry</b>: the projecting rays are <b>perpendicular</b> to the picture plane (example: <b>isometric</b>);</li>
<li><b>oblique axonometry</b>: the projecting rays are <b>inclined</b> to the picture plane (examples: <b>cavalier</b>, monometric).</li>
</ul>
<p>All of them share one feature: <b>parallel lines stay parallel</b> (lines do not "converge" as in perspective: the object does not get smaller with distance). This makes them very suitable for technical drawing, but less "realistic" than perspective.</p>`
    },
    {
      type: `text`, title: `2. Isometric projection`,
      html: `<p>"Isometric" means "<b>of equal measure</b>" (Greek <i>ísos</i>, equal): the three axes are equally inclined to the picture plane, so the <b>three reduction coefficients are equal</b>.</p>
<ul>
<li>The axes form <b>angles of 120°</b> with each other: <b>z</b> is <b>vertical</b>, <b>x</b> and <b>y</b> slope down at <b>30°</b> to the horizontal (to the left and to the right);</li>
<li>The theoretical <b>reduction coefficient</b> is √(2/3) ≈ <b>0.816</b> on each axis. For simplicity, <b>simplified isometric</b> drawing is almost always used: measurements are drawn <b>full size (coefficient 1)</b>; the drawing is enlarged by about 22%, but the proportions are correct;</li>
<li>All edges parallel to the axes are drawn as lines at <b>30°</b> (to the right or left) or vertical: you use a 30°-60° set square (as on isometric dot or triangle grid paper);</li>
<li>A <b>circle</b> on a face of the object becomes an <b>ellipse</b> (in the theoretical projection the ratio of the minor to the major axis is 1/√3 ≈ 0.577).</li>
</ul>
<p><b>Right angles</b> (such as those at the corner of a cube) become angles of 120° or 60°: that is why the image has its typical "diamond" shapes. <b>Lengths not parallel to the axes</b> (for example the diagonal of a face) <b>cannot be measured directly</b>: they have to be built point by point using coordinates.</p>`
    },
    {
      type: `svg`, title: `A cube in isometric and cavalier projection`,
      caption: `Left, the cube in isometric: three visible faces, all distorted into rhombuses, with vertical edges and edges at 30°. Right, in cavalier: the front face is a true square, the depth is drawn at 45° and halved.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#ecfeff"/><polygon points="150,150 236.6,100 150,50 63.4,100" fill="#a5f3fc" stroke="#164e63" stroke-width="3" stroke-linejoin="round"/><polygon points="150,250 63.4,200 63.4,100 150,150" fill="#67e8f9" stroke="#164e63" stroke-width="3" stroke-linejoin="round"/><polygon points="150,250 236.6,200 236.6,100 150,150" fill="#22d3ee" stroke="#164e63" stroke-width="3" stroke-linejoin="round"/><text x="150" y="28" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">ISOMETRIC</text><text x="150" y="278" font-size="14" fill="#164e63" text-anchor="middle">120° angles, axes at 30°</text><text x="215" y="170" font-size="14" fill="#164e63">30°</text><polygon points="350,150 450,150 485.4,114.6 385.4,114.6" fill="#fde68a" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/><rect x="350" y="150" width="100" height="100" fill="#fcd34d" stroke="#78350f" stroke-width="3"/><polygon points="450,150 485.4,114.6 485.4,214.6 450,250" fill="#f59e0b" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/><text x="420" y="28" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">CAVALIER</text><text x="420" y="278" font-size="14" fill="#78350f" text-anchor="middle">front in true shape, y at 45°</text><text x="400" y="205" font-size="14" fill="#78350f" text-anchor="middle">true square</text><text x="520" y="170" font-size="14" fill="#78350f">1/2</text></svg>`
    },
    {
      type: `example`, title: `Example: an 8 × 6 × 4 box in isometric`,
      html: `<p>A box with <b>width 8 cm</b> (x axis), <b>depth 6 cm</b> (y axis) and <b>height 4 cm</b> (z axis), drawn in simplified isometric at <b>scale 1:1</b>:</p>
<ol>
<li>Fix a point <b>O</b> (the lowest corner, nearest to you) and draw three lines from it: one <b>vertical</b> (z) and two at <b>30°</b> to the horizontal, one to the left and one to the right.</li>
<li>Mark <b>8 cm</b> on the left-hand line (x), <b>6 cm</b> on the right-hand line (y) and <b>4 cm</b> on the vertical (z).</li>
<li>From each end, draw <b>parallels</b> to the other two axes, completing the three visible faces (two side faces and the lid).</li>
<li>Complete the remaining edges; if you like, draw the hidden ones dashed.</li>
</ol>
<p>Check: in the drawing every edge parallel to an axis has its true length (in the simplified version), so you can measure it directly with a ruler; but the diagonal of the lid, which is really √(8² + 6²) = <b>10 cm</b>, does <b>not</b> measure 10 cm in the drawing.</p>`
    },
    {
      type: `text`, title: `3. Cavalier projection`,
      html: `<p>The name comes from the "<b>cavalier</b>", a raised earthwork used in fortifications: military draughtsmen had to show bastions and towers in a single drawing, and they invented this method (16th-17th century), much simpler than perspective. It is an <b>oblique projection</b>:</p>
<ul>
<li>The <b>picture plane</b> is parallel to the front plane (xz): the <b>front faces</b> are seen in <b>true shape and true size</b>;</li>
<li><b>x</b> is horizontal, <b>z</b> is vertical (90° between them); the <b>depth axis y</b> is inclined at <b>45°</b> (sometimes 30° or 60°) and is <b>halved</b> (coefficient <b>1/2</b>), otherwise the object would look too long and distorted;</li>
<li><b>circles</b> on the front plane stay <b>circles</b>; those on the other planes become ellipses;</li>
<li>It is <b>very easy to draw</b> with a 45° set square and a compass.</li>
</ul>
<p>Drawback: the image looks a little "out of proportion" (as if the object were "pulled" to the right). It is suitable when one face (usually the most complex one: for example the front of a house or an engine) needs to be seen in true shape.</p>`
    },
    {
      type: `example`, title: `Example: the same box in cavalier`,
      html: `<p>Box 8 × 6 × 4 cm (x, y, z).</p>
<ol>
<li>Draw the <b>front face</b> in true shape: an <b>8 × 4 cm</b> rectangle.</li>
<li>From each corner draw a line at <b>45°</b> upwards to the right; the depth is 6 cm but it is halved: <b>3 cm</b> in the drawing.</li>
<li>Join the ends of these lines: you get the back rectangle (8 × 4 cm), which you can draw dashed for the hidden parts.</li>
<li>Complete the top face (a parallelogram) and the right side face.</li>
</ol>
<p>Notice that the two non-front faces are <b>parallelograms</b>, not rectangles: the 90° angles in space become 45° and 135° in the drawing. The projected depth edge appears at 45° with a length of 3 cm (its horizontal and vertical components are 3·cos45° ≈ 2.1 cm each).</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: isometric and cavalier`,
      questions: [
        { type: `mc`, q: `What are the angles between the axes in isometric projection?`, options: [`120°`, `90°`, `45°`], answer: 0, explain: `Three equally spaced axes: 360° / 3 = 120°.` },
        { type: `mc`, q: `In cavalier projection, which face is seen in true shape?`, options: [`The front face`, `The top face`, `None`], answer: 0, explain: `The picture plane is parallel to the front plane.` },
        { type: `tf`, q: `In axonometric projection, lines that are parallel in space stay parallel in the drawing.`, answer: true, explain: `Unlike central perspective.` }
      ]
    },
    {
      type: `svg`, title: `The three axis systems`,
      caption: `Isometric: x and y at 30° below the horizontal, z vertical. Cavalier: x horizontal, z vertical, y at 45° and halved. Monometric: horizontal plane in true shape (x and y axes at 90°, rotated by 30° and 60°), z vertical.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fdf2f8"/><line x1="100" y1="170" x2="100" y2="60" stroke="#be185d" stroke-width="4"/><line x1="100" y1="170" x2="4.7" y2="225" stroke="#be185d" stroke-width="4"/><line x1="100" y1="170" x2="195.3" y2="225" stroke="#be185d" stroke-width="4"/><text x="108" y="64" font-size="16" font-weight="bold" fill="#831843">z</text><text x="14" y="215" font-size="16" font-weight="bold" fill="#831843">x</text><text x="185" y="215" font-size="16" font-weight="bold" fill="#831843">y</text><text x="100" y="28" font-size="16" font-weight="bold" fill="#831843" text-anchor="middle">ISOMETRIC</text><text x="100" y="270" font-size="14" fill="#831843" text-anchor="middle">120° between the axes</text><line x1="300" y1="200" x2="300" y2="90" stroke="#be185d" stroke-width="4"/><line x1="300" y1="200" x2="410" y2="200" stroke="#be185d" stroke-width="4"/><line x1="300" y1="200" x2="338.9" y2="161.1" stroke="#be185d" stroke-width="4"/><text x="308" y="94" font-size="16" font-weight="bold" fill="#831843">z</text><text x="404" y="222" font-size="16" font-weight="bold" fill="#831843">x</text><text x="344" y="156" font-size="16" font-weight="bold" fill="#831843">y</text><text x="330" y="28" font-size="16" font-weight="bold" fill="#831843" text-anchor="middle">CAVALIER</text><text x="350" y="270" font-size="14" fill="#831843" text-anchor="middle">y at 45°, coefficient 1/2</text><line x1="500" y1="210" x2="500" y2="100" stroke="#be185d" stroke-width="4"/><line x1="500" y1="210" x2="595" y2="155" stroke="#be185d" stroke-width="4"/><line x1="500" y1="210" x2="445" y2="115" stroke="#be185d" stroke-width="4"/><text x="508" y="104" font-size="16" font-weight="bold" fill="#831843">z</text><text x="578" y="150" font-size="16" font-weight="bold" fill="#831843">x</text><text x="440" y="110" font-size="16" font-weight="bold" fill="#831843">y</text><text x="500" y="28" font-size="16" font-weight="bold" fill="#831843" text-anchor="middle">MONOMETRIC</text><text x="505" y="270" font-size="14" fill="#831843" text-anchor="middle">x ⟂ y, base in true shape</text></svg>`
    },
    {
      type: `text`, title: `4. Monometric projection`,
      html: `<p>The prefix "mono-" (a single measure) means that <b>all three axes have the same reduction coefficient (1)</b>: measurements are always drawn full size, without shortening. In the form most used at school, the <b>horizontal plane</b> (xy) is seen <b>in true shape</b>: the <b>x</b> and <b>y</b> axes form <b>90°</b> and are rotated on the sheet (typically by 30° and 60°, or by 45°), while the <b>z</b> axis stays <b>vertical</b>. In practice you first draw the rotated <b>plan</b> and then "raise" the walls vertically: it is like looking at a plan from above, but with the heights shown. (Some books also call it <i>planometric</i> or "military" axonometry; textbooks may differ in the details: follow the conventions of your own textbook.)</p>
<p>It is widely used in <b>architecture</b> and <b>interior design</b> because:</p>
<ul>
<li>the <b>plan</b> of the room (which the architect already has) can be rotated and copied without distortion;</li>
<li>you then just <b>raise</b> the walls with their heights at true length;</li>
<li><b>horizontal distances</b> can be measured in every direction.</li>
</ul>
<p>The drawback: vertical faces are distorted (parallelograms) and the image feels less real. Many <b>isometric video games</b> (city-builders, strategy games) and <b>board-game maps</b> use exactly these projections to show an area from above with a sense of depth, without having to calculate perspective.</p>`
    },
    {
      type: `3d`, title: `How do you see a solid from an "isometric" viewpoint?`,
      scene: `blocks`,
      options: { mode: `volume`, a: 4, b: 3, c: 2 },
      caption: `Rotate the block of cubes until you see three faces at the same angle: that is the isometric view. The sliders change width, depth and height.`
    },
    {
      type: `text`, title: `5. Which axonometric projection should you choose?`,
      html: `<table>
<tr><th></th><th>Isometric</th><th>Cavalier</th><th>Monometric</th></tr>
<tr><td><b>Type</b></td><td>orthogonal</td><td>oblique</td><td>oblique (base in true shape)</td></tr>
<tr><td><b>Angles between axes</b></td><td>120° each</td><td>x ⟂ z (90°), y at 45°</td><td>x ⟂ y (90°), z vertical</td></tr>
<tr><td><b>Coefficients</b></td><td>equal (0.816 theoretical, 1 simplified)</td><td>x, z = 1; y = 1/2</td><td>equal (1)</td></tr>
<tr><td><b>Face in true shape</b></td><td>none</td><td>the front face</td><td>the horizontal face</td></tr>
<tr><td><b>Used for</b></td><td>objects, machines, assembly instructions</td><td>façades, parts with one complex face</td><td>building plans and interiors</td></tr>
</table>
<p>Rule of thumb: choose the <b>most complex face</b> (with circles, curves, details) and place it <b>parallel to the picture plane</b> in cavalier or monometric; choose <b>isometric</b> when the three directions matter equally and you want a balanced image.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… about M. C. Escher and isometric video games?`,
      html: `<p>The Dutch artist <b>M. C. Escher</b> (1898-1972) used the isometric view in his "impossible worlds" (<i>Relativity</i>, 1953; <i>Ascending and Descending</i>, 1960): in axonometry parallel lines do not converge, which makes it possible to draw staircases that keep climbing and return to where they started, tricking the eye. From the 1980s the same view was used in video games: <i>Zaxxon</i> (1982), <i>Q*bert</i> (1982) and later city-builders like <i>SimCity 2000</i> (1993): it is easy to program (no perspective calculations) and makes the space easy to read. Today "isometric art" is a very popular graphic genre.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… the isometric ellipse is a "squashed" circle?`,
      html: `<p>A circle seen from an "isometric" viewpoint appears as an ellipse whose axes are in the ratio 1/√3 ≈ 0.577: that is, the minor axis is about 58% of the major one. This happens because the circle, tilted by about 54.7° (the angle between the picture plane and the plane of the circle, i.e. arccos(1/√3)), is "squashed" in the direction of the tilt. In practice, to draw it by hand you construct a rhombus (the circumscribed square in isometric) and inscribe the ellipse tangent to the midpoints of the sides, using an approximation made of circular arcs called an "<b>isometric oval</b>".</p>`
    },
    {
      type: `remember`, title: `Key points`,
      html: `<ul><li><b>Axonometric projection</b>: one drawing for three dimensions; parallel lines stay parallel.</li><li><b>Isometric</b>: axes at 120°, x and y at 30°, equal coefficients; no face in true shape.</li><li><b>Cavalier</b>: front face in true shape, y at 45° with coefficient 1/2.</li><li><b>Monometric</b>: plan in true shape, z vertical, equal coefficients.</li></ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Axonometric projection is easier to understand with real objects and by comparing it with other methods.`,
      tabs: [
        {
          label: `📦 The cardboard box`,
          html: `<p>Take a box and put it on the table. Look at it from a distance and from a position where you see <b>three faces at the same angle</b>: that is the isometric view; close up, the lines converge (perspective), from far away they become almost parallel. Axonometry is perspective "from infinitely far away": the rays are parallel, like the Sun's.</p>`
        },
        {
          label: `🧩 Match method and feature`,
          html: `<p>Link each method to its feature.</p>`,
          widget: `classify`,
          options: { groups: [`Isometric`, `Cavalier`, `Monometric`], items: [[`Axes at 120°`, 0], [`Front face in true shape`, 1], [`y axis halved`, 1], [`Rotated plan in true shape`, 2], [`All three coefficients equal (orthogonal)`, 0], [`45° angle for depth`, 1], [`Used for building plans`, 2]] }
        },
        {
          label: `🧱 With 3D cubes`,
          html: `<p>Build a cuboid out of cubes: with the sliders you can change width, depth and height. Then rotate the scene and count how many cubes you see on each face.</p>`,
          scene: `blocks`,
          options: { mode: `volume`, a: 3, b: 3, c: 3 }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: axonometric projection`,
      nodes: [
        { id: `ass`, label: `Axonometric projection`, x: 50, y: 6, color: `#64748b`, html: `A single drawing for three dimensions.`, why: `Object and axes are projected onto a plane with parallel rays: you can still measure.` },
        { id: `ort`, label: `Orthogonal`, x: 20, y: 28, color: `#f59e0b`, html: `Rays perpendicular to the picture plane.`, why: `A plane equally inclined to all three axes gives isometric projection.` },
        { id: `obl`, label: `Oblique`, x: 80, y: 28, color: `#a855f7`, html: `Inclined rays.`, why: `If the picture plane is parallel to a face, that face stays in true shape.` },
        { id: `iso`, label: `Isometric`, x: 12, y: 58, color: `#ef4444`, html: `120° between the axes.`, why: `Equal coefficients: no direction is favoured, a balanced image.` },
        { id: `cav`, label: `Cavalier`, x: 55, y: 62, color: `#22c55e`, html: `Front in true shape, y at 45°, 1/2.`, why: `Born in the drawing of fortifications: simple with a 45° set square and a compass.` },
        { id: `mon`, label: `Monometric`, x: 88, y: 62, color: `#14b8a6`, html: `Plan in true shape, z vertical.`, why: `For architecture: the plan is rotated and raised.` },
        { id: `pro`, label: `Perspective`, x: 50, y: 90, color: `#3b82f6`, html: `Parallel lines converge.`, why: `Axonometry is a limiting case: viewpoint at infinity, no convergence.` }
      ],
      edges: [[`ass`, `ort`, `type`], [`ass`, `obl`, `type`], [`ort`, `iso`, `case`], [`obl`, `cav`, `case`], [`obl`, `mon`, `case`], [`iso`, `pro`, `comparison`], [`cav`, `pro`, `comparison`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: choosing the method`,
      questions: [
        { type: `mc`, q: `Which method would you use to show the plan of a flat "raised" into three dimensions?`, options: [`Monometric`, `Isometric`, `Three-point perspective`], answer: 0, explain: `Monometric keeps the plan in true shape.` },
        { type: `num`, q: `In cavalier with coefficient 1/2, a real depth of 10 cm is drawn how many cm long?`, answer: 5, tol: 0, unit: `cm`, explain: `10 × 1/2 = 5 cm.` },
        { type: `tf`, q: `In isometric, all the faces of a cube are rhombuses.`, answer: true, explain: `The squares are distorted into rhombuses with angles of 60° and 120°.` }
      ]
    }
  ],
  glossary: [
    { t: `Axonometric projection`, d: `Representation of a three-dimensional object in a single drawing, by parallel projection onto a picture plane.` },
    { t: `Picture plane`, d: `Plane onto which the object is projected.` },
    { t: `Reduction coefficient`, d: `Ratio between the drawn length and the real length along an axis.` },
    { t: `Isometric`, d: `Orthogonal axonometry with three axes at 120° and equal coefficients.` },
    { t: `Cavalier`, d: `Oblique axonometry with the front face in true shape and the depth axis at 45°, halved.` },
    { t: `Monometric`, d: `Axonometry with three equal coefficients and the horizontal plane in true shape (as used at school).` },
    { t: `Projecting rays`, d: `Lines joining the points of the object to their projection on the picture plane.` },
    { t: `True shape`, d: `A figure shown without distortion, because it is parallel to the picture plane.` },
    { t: `Isometric oval`, d: `Approximate construction of the isometric ellipse using circular arcs.` },
    { t: `Parallel projection`, d: `Projection in which all rays are parallel (centre at infinity).` },
    { t: `Set of axes`, d: `Three axes x, y, z attached to the object.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `What does "isometric" mean?`, options: [`Of equal measure`, `Of equal shape`, `With three vanishing points`], answer: 0, explain: `From Greek ísos, equal, and métron, measure.` },
      { type: `num`, q: `How many degrees are there between the axes of isometric projection?`, answer: 120, tol: 0, unit: `°`, explain: `120° each.` },
      { type: `mc`, q: `What is the reduction coefficient of the depth axis in the most common cavalier projection?`, options: [`1/2`, `1`, `2`], answer: 0, explain: `Depth is halved, otherwise the image looks too stretched.` },
      { type: `tf`, q: `In axonometric projection, parallel lines converge at a vanishing point.`, answer: false, explain: `They stay parallel: it is a parallel projection.` },
      { type: `mc`, q: `In cavalier projection, which face of the object is seen in true shape?`, options: [`The front`, `The right side`, `The top`], answer: 0, explain: `It is parallel to the picture plane.` },
      { type: `text`, q: `What is the plane onto which the object is projected in axonometry called?`, answer: [`picture plane`, `the picture plane`, `plane of projection`, `projection plane`], explain: `Picture plane.` },
      { type: `mc`, q: `What happens to a circle in isometric projection?`, options: [`It becomes an ellipse`, `It stays a circle`, `It becomes a square`], answer: 0, explain: `A circle on an inclined plane appears as an ellipse.` },
      { type: `num`, q: `How many cm do you draw in cavalier (coefficient 1/2) for a real depth of 12 cm?`, answer: 6, tol: 0, unit: `cm`, explain: `12 × 1/2 = 6 cm.` },
      { type: `tf`, q: `Axonometric projection lets you measure lengths parallel to the axes using a known coefficient.`, answer: true, explain: `That is the principle of the method.` },
      { type: `mc`, q: `Which method rotates the plan in true shape and raises the walls vertically?`, options: [`Monometric`, `Isometric`, `Perspective`], answer: 0, explain: `Monometric keeps the horizontal plane in true shape.` }
    ]
  }
});
