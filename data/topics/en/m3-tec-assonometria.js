TOPIC('en', {
  id: `m3-tec-assonometria`,
  title: `Axonometric projection`,
  intro: `A sheet of paper is flat, but objects have three dimensions. How do you draw a cube, a piece of furniture or a building so that its <b>shape</b> is clear and its parts can also be <b>measured</b>? With <b>axonometry</b>: a technical drawing method that shows width, depth and height in a single view. It is the language of designers, architects… and of many video games! 📐🧊`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. From orthogonal projections to axonometry`,
      html: `<p>With <b>orthogonal projections</b> (which you have already studied) an object is drawn with <b>three separate views</b>: plan, elevation, side. They are precise, but to understand the shape you have to "assemble" them in your head.</p>
<p><b>Axonometry</b> (from Greek <i>áxōn</i> = axis and <i>métron</i> = measure: "measure along the axes") instead shows the object <b>in a single drawing</b>, with three faces visible at once.</p>
<p>It is a <b>parallel projection</b>: the projection rays are all parallel to each other, as if we were looking at the object from infinitely far away. Important consequences:</p>
<ul>
<li><b>parallel</b> lines in reality stay <b>parallel</b> in the drawing;</li>
<li>measurements along the axes can be <b>read with a ruler</b> (possibly multiplied by a coefficient);</li>
<li>objects do <b>not shrink</b> in the distance (unlike in <b>perspective</b>).</li>
</ul>`
    },
    {
      type: `text`, title: `2. The three axes: x, y, z`,
      html: `<p>Every axonometric drawing is built on <b>three axes</b> that start from an origin O:</p>
<ul>
<li><b>z axis</b>: always <b>vertical</b>, for <b>heights</b>;</li>
<li><b>x axis</b>: for <b>widths</b> (lengths);</li>
<li><b>y axis</b>: for <b>depths</b>.</li>
</ul>
<p>The different axonometric projections are distinguished by two things:</p>
<ol>
<li>the <b>angles</b> that the x and y axes form with the horizontal;</li>
<li>the <b>reduction coefficients</b>: whether the measurements along an axis are drawn true (×1) or reduced (for example ×½).</li>
</ol>`
    },
    {
      type: `text`, title: `3. The types of axonometry`,
      html: `<table>
<tr><th>Type</th><th>Angles of the x and y axes</th><th>Reductions</th><th>Typical use</th></tr>
<tr><td><b>Isometric</b></td><td>30° and 30° (the three axes form angles of 120°)</td><td>none: x, y, z in true size</td><td>mechanics, objects, design</td></tr>
<tr><td><b>Cavalier</b></td><td>x horizontal; y at 45° (or 30°, 60°)</td><td>y reduced to ½ ("reduced cavalier")</td><td>objects with one important face, quick sketches</td></tr>
<tr><td><b>Monometric (planometric)</b></td><td>x and y at 30°/60° (or 45°/45°) to each other at 90°</td><td>none</td><td>architecture, furnishing: the plan stays true</td></tr>
</table>
<p><b>Isometric</b> = "same measure": all three axes have the same scale. In theory the exact reduction would be about 0.82 on all axes, but in technical drawing the <b>unified isometric</b> is used, with true measurements: the drawing comes out only a little larger.</p>
<p>In the <b>cavalier</b> projection the front face is drawn <b>exactly as it is</b> (in true shape): perfect for objects with a complicated front, such as a gear wheel or a letter.</p>
<p>In the <b>monometric</b> projection the <b>plan</b> is in true shape, only rotated: you draw the plan of a house and then "raise" the walls vertically.</p>`
    },
    {
      type: `svg`, title: `The same cube in three axonometric views`,
      caption: `Cube with side 60: isometric (axes at 30°), cavalier (depth at 45° reduced by half), monometric (plan rotated 30°/60°).`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="100,140 152,170 100,200 48,170" fill="#fde68a"/>
<polygon points="48,170 100,200 100,260 48,230" fill="#f59e0b"/>
<polygon points="100,200 152,170 152,230 100,260" fill="#fbbf24"/>
</g>
<text x="100" y="40" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">ISOMETRIC</text>
<text x="100" y="62" font-size="13" fill="#334155" text-anchor="middle">30° – 30°, all ×1</text>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="250,170 310,170 331,149 271,149" fill="#bfdbfe"/>
<polygon points="310,170 331,149 331,209 310,230" fill="#3b82f6"/>
<rect x="250" y="170" width="60" height="60" fill="#60a5fa"/>
</g>
<text x="290" y="40" font-size="17" font-weight="bold" fill="#1e40af" text-anchor="middle">CAVALIER</text>
<text x="290" y="62" font-size="13" fill="#334155" text-anchor="middle">y at 45°, reduced ×½</text>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="490,120 542,150 512,202 460,172" fill="#bbf7d0"/>
<polygon points="460,172 512,202 512,262 460,232" fill="#22c55e"/>
<polygon points="512,202 542,150 542,210 512,262" fill="#4ade80"/>
</g>
<text x="490" y="40" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">MONOMETRIC</text>
<text x="490" y="62" font-size="13" fill="#334155" text-anchor="middle">plan 30°/60°, ×1</text>
<line x1="20" y1="290" x2="580" y2="290" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="300" y="312" font-size="13" fill="#475569" text-anchor="middle">parallel lines stay parallel: no vanishing point</text>
</svg>`
    },
    {
      type: `3d`, title: `Turn the solid and find the isometric view`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#f59e0b`, labels: true, shapes: [`cube`, `box`, `prism`, `pyramid`, `cylinder`] },
      caption: `Rotate the solid until you see three faces with the same "importance": that is the isometric point of view. The dimensions shown are the ones to transfer to the axes.`
    },
    {
      type: `quiz`, title: `Mini-quiz: recognise the axonometry`,
      questions: [
        { type: `mc`, q: `In isometric axonometry the x and y axes form an angle of … with the horizontal.`, options: [`45°`, `30°`, `60°`], answer: 1, explain: `Isometric: x and y at 30°, z vertical; the three axes are 120° apart from each other.` },
        { type: `mc`, q: `In which axonometry is the front face in true shape?`, options: [`Isometric`, `Cavalier`, `Monometric`], answer: 1, explain: `In the cavalier projection the frontal plane (x-z) is drawn as it is.` },
        { type: `tf`, q: `In axonometry parallel lines converge at a vanishing point.`, answer: false, explain: `It is a parallel projection: parallel lines stay parallel. The vanishing point belongs to perspective.` }
      ]
    },
    {
      type: `text`, title: `4. How to draw a box in isometric (step by step)`,
      html: `<p>Let's draw a box of <b>4 × 3 × 2 cm</b> (width × depth × height) with 30°/60° set squares and a ruler.</p>
<ol>
<li><b>Origin</b>: choose a point O at the bottom centre of the sheet.</li>
<li><b>Axes</b>: from O draw the vertical line (z) and, with the 30° set square, two lines at 30° above the horizontal: to the right (x) and to the left (y).</li>
<li><b>Measurements</b>: on the x axis mark 4 cm, on the y axis 3 cm, on the z axis 2 cm.</li>
<li><b>Base</b>: from the ends draw lines parallel to the axes (parallel to y from the point on x, parallel to x from the point on y): you get the base rhombus.</li>
<li><b>Vertical edges</b>: from each visible vertex of the base raise a vertical line of 2 cm.</li>
<li><b>Top face</b>: join the tops with lines parallel to the x and y axes.</li>
<li><b>Finishing</b>: go over the visible edges with a <b>thick</b> line; hidden edges are drawn <b>dashed</b> or left out; erase the construction lines.</li>
</ol>
<p>Golden rule: <b>measure only along the axes</b> (or parallel to them). Diagonals and circles are not in true size!</p>`
    },
    {
      type: `svg`, title: `The constructions step by step`,
      caption: `1) axes at 30°; 2) measurements on the axes and the base; 3) vertical edges and top face.`,
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fffbeb"/>
<g font-size="16" font-weight="bold" fill="#92400e"><text x="100" y="28" text-anchor="middle">1. Axes</text><text x="300" y="28" text-anchor="middle">2. Base</text><text x="500" y="28" text-anchor="middle">3. Solid</text></g>
<g stroke="#64748b" stroke-width="2"><line x1="100" y1="240" x2="100" y2="60"/><line x1="100" y1="240" x2="185" y2="191"/><line x1="100" y1="240" x2="15" y2="191"/></g>
<text x="108" y="70" font-size="16" fill="#dc2626" font-weight="bold">z</text>
<text x="180" y="185" font-size="16" fill="#dc2626" font-weight="bold">x</text>
<text x="15" y="185" font-size="16" fill="#dc2626" font-weight="bold">y</text>
<path d="M140 240 A40 40 0 0 0 135 220" stroke="#2563eb" stroke-width="2" fill="none"/>
<line x1="100" y1="240" x2="185" y2="240" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="145" y="258" font-size="14" fill="#2563eb">30°</text>
<g stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 3"><line x1="300" y1="250" x2="390" y2="198"/><line x1="300" y1="250" x2="225" y2="207"/><line x1="300" y1="250" x2="300" y2="120"/></g>
<polygon points="300,250 369,210 317,180 248,220" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="345" y="248" font-size="14" fill="#b45309">4 cm</text>
<text x="240" y="250" font-size="14" fill="#b45309">3 cm</text>
<polygon points="500,240 569,200 569,165 500,205" fill="#f59e0b" stroke="#1e293b" stroke-width="3"/>
<polygon points="500,240 448,210 448,175 500,205" fill="#fbbf24" stroke="#1e293b" stroke-width="3"/>
<polygon points="500,205 569,165 517,135 448,175" fill="#fef3c7" stroke="#1e293b" stroke-width="3"/>
<polyline points="448,210 517,170 569,200" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="517" y1="170" x2="517" y2="135" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="580" y="190" font-size="14" fill="#1e293b">2 cm</text>
</svg>`
    },
    {
      type: `example`, title: `Practical example: the bedroom shelf`,
      html: `<p>You want to have a shelf of <b>80 × 20 × 2 cm</b> made. With orthogonal projections alone the carpenter would understand, but your parents perhaps would not. Drawing it in <b>isometric</b> at a scale of 1:10 (8 cm on the x axis, 2 cm on y, 0.2 cm on z) you immediately see what it looks like, and you can write the <b>dimensions</b> along the edges.</p>
<p>If the shelf has a decorative carving on the front, the <b>cavalier</b> projection is better: the front face stays in true shape and the carving is easy to draw.</p>`
    },
    {
      type: `example`, title: `Practical example: a house plan in monometric`,
      html: `<p>You have the plan of your bedroom at a scale of 1:50. To show it "furnished":</p>
<ol>
<li>rotate the plan by 30° (or 45°) and copy it exactly: the measurements stay true;</li>
<li>from each corner raise the walls vertically, for example 2.70 m ➜ 5.4 cm at a scale of 1:50;</li>
<li>draw the bed and desk as boxes, always raising their heights vertically.</li>
</ol>
<p>Architects often use this "bird's-eye" view, also called an <b>exploded</b> view when the parts are separated.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… video games use axonometry?`,
      html: `<p>Many strategy and simulation games (such as the classic <i>SimCity 2000</i> or <i>Age of Empires</i>) use a view called "isometric". In fact, on pixel screens a <b>2:1 dimetric</b> projection is almost always used: the lines rise 1 pixel every 2 horizontally (an angle of about 26.6° instead of 30°), because on screen the lines come out clean, without irregular "steps". As in axonometry, distant objects do <b>not get smaller</b>!</p>`
    },
    {
      type: `curiosity`, title: `Did you know… China was drawing in axonometry centuries ago?`,
      html: `<p>In Chinese painted scrolls, such as the famous <i>Along the River During the Qingming Festival</i> (12th century), houses and bridges are drawn with oblique parallel lines: it is a kind of <b>axonometry</b>, which lets you "unroll" the city without a fixed point of view. In Europe isometry was described as a scientific method by the English professor <b>William Farish</b> in <b>1822</b>, for drawing machines.</p>`
    },
    {
      type: `remember`, title: `To remember`,
      html: `<ul>
<li>Axonometry = <b>parallel</b> projection on three axes (x width, y depth, z vertical height).</li>
<li><b>Isometric</b>: x and y at 30°, all measurements true.</li>
<li><b>Cavalier</b>: front face true, depth at 45° reduced by ½.</li>
<li><b>Monometric</b>: true plan rotated (30°/60° or 45°), true heights.</li>
<li>Measure <b>only parallel to the axes</b>; visible edges thick, hidden edges dashed.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Axonometry is easier to see than to explain. Try these approaches.`,
      tabs: [
        {
          label: `🧊 Rotate the 3D cube`,
          html: `<p>Take the cube and rotate it so that the <b>nearest vertical edge</b> is at the centre and you see three equal faces (top, left, right). That is exactly the view of <b>isometry</b>: no face is "more important" than the others.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#3b82f6`, labels: true }
        },
        {
          label: `📄 Isometric paper`,
          html: `<p>In many countries (the United Kingdom, Japan, the USA) <b>isometric paper</b> is used at school: a sheet of dots arranged in triangles. Just join the dots following the three directions (vertical and two at 30°) and the drawing comes out by itself, without set squares!</p>
<p>Try it: a cube of side 1 occupies a hexagon made of 6 small triangles.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<g fill="#94a3b8">
<circle cx="100" cy="30" r="3"/><circle cx="100" cy="70" r="3"/><circle cx="100" cy="110" r="3"/><circle cx="100" cy="150" r="3"/><circle cx="100" cy="190" r="3"/><circle cx="100" cy="230" r="3"/>
<circle cx="135" cy="50" r="3"/><circle cx="135" cy="90" r="3"/><circle cx="135" cy="130" r="3"/><circle cx="135" cy="170" r="3"/><circle cx="135" cy="210" r="3"/>
<circle cx="170" cy="30" r="3"/><circle cx="170" cy="70" r="3"/><circle cx="170" cy="110" r="3"/><circle cx="170" cy="150" r="3"/><circle cx="170" cy="190" r="3"/><circle cx="170" cy="230" r="3"/>
<circle cx="205" cy="50" r="3"/><circle cx="205" cy="90" r="3"/><circle cx="205" cy="130" r="3"/><circle cx="205" cy="170" r="3"/><circle cx="205" cy="210" r="3"/>
<circle cx="240" cy="30" r="3"/><circle cx="240" cy="70" r="3"/><circle cx="240" cy="110" r="3"/><circle cx="240" cy="150" r="3"/><circle cx="240" cy="190" r="3"/><circle cx="240" cy="230" r="3"/>
<circle cx="275" cy="50" r="3"/><circle cx="275" cy="90" r="3"/><circle cx="275" cy="130" r="3"/><circle cx="275" cy="170" r="3"/><circle cx="275" cy="210" r="3"/>
<circle cx="65" cy="50" r="3"/><circle cx="65" cy="90" r="3"/><circle cx="65" cy="130" r="3"/><circle cx="65" cy="170" r="3"/><circle cx="65" cy="210" r="3"/>
</g>
<g stroke="#1e293b" stroke-width="3" stroke-linejoin="round">
<polygon points="170,70 240,110 170,150 100,110" fill="#fde68a"/>
<polygon points="100,110 170,150 170,230 100,190" fill="#f59e0b"/>
<polygon points="170,150 240,110 240,190 170,230" fill="#fbbf24"/>
</g>
<text x="440" y="100" font-size="17" fill="#1e293b" text-anchor="middle" font-weight="bold">Join the dots</text>
<text x="440" y="130" font-size="15" fill="#334155" text-anchor="middle">in 3 directions only:</text>
<text x="440" y="160" font-size="15" fill="#334155" text-anchor="middle">| vertical, / and \ at 30°</text>
</svg>`
        },
        {
          label: `🔦 The shadow in the sun`,
          html: `<p>The Sun is so far away that its rays arrive <b>parallel</b>. The shadow of an object on the floor is therefore a <b>parallel projection</b>, just like axonometry! If you move a wire-frame cube in the sun, its shadow changes shape, but parallel lines always stay parallel.</p>
<p>With a nearby lamp, instead, the rays start from one point: the shadow spreads out, as in <b>perspective</b>.</p>`
        },
        {
          label: `🏷️ Name the axes`,
          html: `<p>Tap the points of the drawing and choose the right label.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><g stroke="#1e293b" stroke-width="3"><polygon points="200,90 290,140 200,190 110,140" fill="#bfdbfe"/><polygon points="110,140 200,190 200,270 110,220" fill="#3b82f6"/><polygon points="200,190 290,140 290,220 200,270" fill="#60a5fa"/></g><g stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"><line x1="200" y1="270" x2="200" y2="30"/><line x1="200" y1="270" x2="360" y2="178"/><line x1="200" y1="270" x2="40" y2="178"/></g></svg>`,
            spots: [
              { x: 200, y: 40, label: `z axis (height)` },
              { x: 350, y: 184, label: `x axis (width)` },
              { x: 50, y: 184, label: `y axis (depth)` },
              { x: 200, y: 270, label: `Origin O` },
              { x: 200, y: 140, label: `Top face` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: axonometry`,
      nodes: [
        { id: `rapp`, label: `Representing 3D`, x: 50, y: 6, color: `#64748b`, html: `Drawing three-dimensional objects on a flat sheet.`, why: `Every drawing on paper loses one dimension. <b>Descriptive geometry</b>, founded by <b>Gaspard Monge</b> (1795), studies how to do it without losing information.` },
        { id: `orto`, label: `Orthogonal projections`, x: 15, y: 30, color: `#0ea5e9`, html: `Three separate views: plan, elevation, side.`, why: `A method systematised by Monge for French military fortifications: precise but not very intuitive.` },
        { id: `ass`, label: `Axonometry`, x: 50, y: 30, color: `#f59e0b`, html: `A single view with three axes and readable measurements.`, why: `It was born to have together the precision of measurements and the immediacy of shape. Isometry was formalised by William Farish (Cambridge, 1822).` },
        { id: `prosp`, label: `Perspective`, x: 85, y: 30, color: `#a855f7`, html: `How the eye sees: parallel lines converge at vanishing points.`, why: `Rediscovered by <b>Filippo Brunelleschi</b> in Florence around 1415 and described by Leon Battista Alberti in 1435. Realistic, but the measurements cannot be read directly.` },
        { id: `par`, label: `Parallel projection`, x: 50, y: 52, color: `#22c55e`, html: `All rays parallel: no vanishing point.`, why: `It is like looking from an infinite distance. A parallel transformation preserves parallelism and the ratios between parallel segments: this is why it can be measured with a ruler.` },
        { id: `iso`, label: `Isometric`, x: 15, y: 78, color: `#ef4444`, html: `x and y at 30°, everything in true measure.`, why: `If you look at a cube along its diagonal, the three edges appear equal and 120° apart. The theoretical factor is √(2/3) ≈ 0.82; 1 is used for convenience (unified isometry).` },
        { id: `cav`, label: `Cavalier`, x: 50, y: 78, color: `#3b82f6`, html: `Front face true, depth at 45° ×½.`, why: `The name comes from the "cavalier", the small hill of the fortifications from which everything could be seen from above. The ½ reduction makes the solid look more natural.` },
        { id: `mono`, label: `Monometric`, x: 85, y: 78, color: `#16a34a`, html: `True plan rotated, vertical heights.`, why: `Widely used by twentieth-century architects (for example in the De Stijl movement and at the Bauhaus) because the plan stays measurable and the walls can be "raised".` }
      ],
      edges: [
        [`rapp`, `orto`, `method`], [`rapp`, `ass`, `method`], [`rapp`, `prosp`, `method`], [`ass`, `par`, `is a`],
        [`par`, `iso`, `type`], [`par`, `cav`, `type`], [`par`, `mono`, `type`], [`orto`, `par`, `also`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: construct`,
      questions: [
        { type: `num`, q: `In reduced cavalier, a real depth of 6 cm is drawn as long as…`, answer: 3, tol: 0, unit: `cm`, explain: `Coefficient ½: 6 × 0.5 = 3 cm.` },
        { type: `mc`, q: `How are hidden edges drawn?`, options: [`With a thick continuous line`, `Dashed (or left out)`, `In red`], answer: 1, explain: `Technical drawing convention: dashed lines for hidden edges.` },
        { type: `tf`, q: `In isometry you can measure a diagonal of a face with a ruler.`, answer: false, explain: `You measure only along directions parallel to the axes.` }
      ]
    }
  ],
  glossary: [
    { t: `Axonometry`, d: `Representation method using parallel projection on three axes.` },
    { t: `Axes x, y, z`, d: `Directions of width, depth and height (z always vertical).` },
    { t: `Isometric`, d: `Axonometry with x and y axes at 30° and true measurements on all axes.` },
    { t: `Cavalier`, d: `Axonometry with the front face in true shape and reduced oblique depth.` },
    { t: `Monometric`, d: `Axonometry with the plan in true shape, rotated, and vertical heights.` },
    { t: `Reduction coefficient`, d: `The number by which measurements along an axis are multiplied (e.g. ½).` },
    { t: `Perspective`, d: `Representation with vanishing points, as the eye sees.` },
    { t: `Parallel projection`, d: `Projection with all rays parallel to each other.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"Axonometry" means…`, options: [`measure along the axes`, `freehand drawing`, `view from above`], answer: 0, explain: `From Greek áxōn (axis) + métron (measure).` },
      { type: `mc`, q: `The z axis represents…`, options: [`depth`, `height`, `width`], answer: 1, explain: `z is always vertical: heights.` },
      { type: `mc`, q: `In isometry the three axes form angles of…`, options: [`90°`, `120°`, `45°`], answer: 1, explain: `360° : 3 = 120°.` },
      { type: `num`, q: `A cube of side 5 cm in unified isometry: how long is the edge drawn on the x axis?`, answer: 5, tol: 0, unit: `cm`, explain: `In unified isometry the measurements are true.` },
      { type: `num`, q: `In reduced cavalier (½), a box 12 cm deep: length drawn on the y axis?`, answer: 6, tol: 0, unit: `cm`, explain: `12 × ½ = 6 cm.` },
      { type: `tf`, q: `In axonometry distant objects are drawn smaller.`, answer: false, explain: `This happens in perspective, not in axonometry.` },
      { type: `tf`, q: `In monometric the plan is in true shape.`, answer: true, explain: `The plan is only rotated (30°/60° or 45°).` },
      { type: `order`, q: `Put in order the steps for drawing a box in isometry.`, items: [`Fix the origin and draw the axes`, `Mark the measurements on the axes`, `Draw the base with lines parallel to the axes`, `Raise the vertical edges`, `Close the top face`, `Go over the visible edges`], explain: `First axes and measurements, then base, heights, top face and finishing.` },
      { type: `mc`, q: `For an object with a very decorated front, which projection is best?`, options: [`the cavalier`, `the isometric`, `central perspective`], answer: 0, explain: `The cavalier keeps the front face in true shape.` },
      { type: `text`, q: `What is the name of the method with vanishing points, rediscovered by Brunelleschi?`, answer: [`perspective`, `the perspective`], explain: `Perspective, used from the Renaissance onwards.` },
      { type: `mc`, q: `Who described isometry as a scientific method in 1822?`, options: [`Leonardo da Vinci`, `William Farish`, `Gaspard Monge`], answer: 1, explain: `William Farish, professor at Cambridge.` }
    ]
  }
});
