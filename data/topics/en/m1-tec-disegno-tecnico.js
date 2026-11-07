TOPIC('en', {
  id: `m1-tec-disegno-tecnico`,
  title: `Technical drawing`,
  intro: `An artistic drawing expresses emotions; a <b>technical drawing</b> must be <b>precise</b> and <b>understood by everyone in the same way</b>, in any country in the world: it is the "language" of engineers, architects and craftspeople. In this lesson we get to know the <b>tools</b>, the <b>sheet sizes</b>, the <b>types of line</b>, the <b>scales</b> and the main <b>geometric constructions</b> with ruler, set squares and compass. 📐✏️`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Why we need a "technical" drawing`,
      html: `<p>Imagine you have to get a carpenter who speaks another language to build a shelf. With a well-made technical drawing he understands <b>shape</b>, <b>measurements</b> and <b>material</b> at once, without needing words.</p>
<p>To be understood by everyone, technical drawing follows <b>standards</b> (common rules):</p>
<ul>
<li>the <b>UNI</b> standards (the Italian Standards Body), founded in 1921;</li>
<li>the European <b>EN</b> standards and the international <b>ISO</b> ones, often combined: for example <b>UNI EN ISO 128</b> sets the types of line.</li>
</ul>
<p>The standards fix: sheet sizes, types and thicknesses of lines, lettering, dimensions (the measurements) and scales.</p>`
    },
    {
      type: `text`, title: `2. The tools`,
      html: `<table>
<tr><th>Tool</th><th>What it is for</th></tr>
<tr><td>✏️ <b>Pencils</b></td><td>The lead can be <b>hard</b> (H, 2H… light, thin mark, for construction lines) or <b>soft</b> (B, 2B… dark mark, for going over the lines). <b>HB</b> is medium. A mechanical pencil (0.5 mm) is also used.</td></tr>
<tr><td>📏 <b>Ruler</b></td><td>Drawing straight segments and measuring (usually 30-50 cm).</td></tr>
<tr><td>📐 <b>45° set square</b></td><td>Isosceles right triangle: angles of 90°, 45°, 45°.</td></tr>
<tr><td>📐 <b>30°/60° set square</b></td><td>Right triangle with angles of 90°, 60°, 30°.</td></tr>
<tr><td>🔵 <b>Compass</b></td><td>Drawing circles and arcs, transferring measurements.</td></tr>
<tr><td>🟠 <b>Protractor</b></td><td>Measuring and drawing angles in degrees (a semicircle from 0° to 180°).</td></tr>
<tr><td>🧽 <b>Eraser</b> and <b>pencil sharpener</b></td><td>Rubbing out without smudging; keeping the point thin.</td></tr>
</table>
<p>By putting the two set squares together you can also get angles of <b>15°</b> (60 − 45), <b>75°</b> (30 + 45), <b>105°</b>, <b>135°</b>…</p>`
    },
    {
      type: `svg`, title: `The two set squares`,
      caption: `On the left the 45° set square, on the right the 30°/60° one. Together they allow you to draw parallel and perpendicular lines.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<path d="M40 260 L240 260 L40 60 Z" fill="#7dd3fc" fill-opacity="0.7" stroke="#0369a1" stroke-width="4"/>
<path d="M90 230 L150 230 L90 170 Z" fill="#f8fafc" stroke="#0369a1" stroke-width="2"/>
<rect x="40" y="240" width="20" height="20" fill="none" stroke="#0f172a" stroke-width="2"/>
<text x="70" y="90" font-size="18" fill="#0c4a6e" font-weight="bold">45°</text>
<text x="190" y="250" font-size="18" fill="#0c4a6e" font-weight="bold">45°</text>
<text x="65" y="255" font-size="15" fill="#0f172a">90°</text>
<text x="140" y="290" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">45° set square</text>
<path d="M330 260 L566 260 L330 124 Z" fill="#fdba74" fill-opacity="0.75" stroke="#c2410c" stroke-width="4"/>
<path d="M370 240 L470 240 L370 182 Z" fill="#f8fafc" stroke="#c2410c" stroke-width="2"/>
<rect x="330" y="240" width="20" height="20" fill="none" stroke="#0f172a" stroke-width="2"/>
<text x="340" y="160" font-size="18" fill="#7c2d12" font-weight="bold">60°</text>
<text x="505" y="252" font-size="18" fill="#7c2d12" font-weight="bold">30°</text>
<text x="355" y="255" font-size="15" fill="#0f172a">90°</text>
<text x="450" y="290" font-size="17" text-anchor="middle" fill="#7c2d12" font-weight="bold">30°/60° set square</text>
<text x="300" y="35" font-size="16" text-anchor="middle" fill="#334155">The sum of the angles is always 180°</text>
</svg>`
    },
    {
      type: `text`, title: `3. Sheets: the A sizes`,
      html: `<p>Drawing sheets follow the <b>A</b> series (ISO 216 standard). The biggest sheet, <b>A0</b>, has an area of <b>1 m²</b>. Cutting it in half along the long side gives A1, then A2, A3, A4…</p>
<table>
<tr><th>Size</th><th>Measurements (mm)</th></tr>
<tr><td>A0</td><td>841 × 1189</td></tr>
<tr><td>A1</td><td>594 × 841</td></tr>
<tr><td>A2</td><td>420 × 594</td></tr>
<tr><td><b>A3</b></td><td><b>297 × 420</b> (the one you use at school for drawing boards)</td></tr>
<tr><td><b>A4</b></td><td><b>210 × 297</b> (the printer sheet)</td></tr>
</table>
<p>The secret: the ratio between the long side and the short side is always about <b>1.414</b> (that is, √2). So, when folded in half, the sheet <b>keeps the same shape</b>!</p>
<p>Before drawing you make the <b>border</b>: a frame about 1 cm from the edge, with the <b>title block</b> at the bottom right (name, class, date, title, scale).</p>`
    },
    {
      type: `svg`, title: `From A0 to A4`,
      caption: `Each size is half of the previous one. Two A4 sheets side by side make an A3.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<rect x="150" y="20" width="370" height="262" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<rect x="150" y="20" width="185" height="262" fill="#bbf7d0" stroke="#1f2937" stroke-width="3"/>
<rect x="335" y="20" width="185" height="131" fill="#bfdbfe" stroke="#1f2937" stroke-width="3"/>
<rect x="335" y="151" width="92" height="131" fill="#fbcfe8" stroke="#1f2937" stroke-width="3"/>
<rect x="427" y="151" width="93" height="65" fill="#ddd6fe" stroke="#1f2937" stroke-width="3"/>
<text x="242" y="160" font-size="26" text-anchor="middle" fill="#166534" font-weight="bold">A1</text>
<text x="427" y="95" font-size="24" text-anchor="middle" fill="#1e40af" font-weight="bold">A2</text>
<text x="381" y="225" font-size="20" text-anchor="middle" fill="#9d174d" font-weight="bold">A3</text>
<text x="473" y="190" font-size="17" text-anchor="middle" fill="#5b21b6" font-weight="bold">A4</text>
<text x="20" y="60" font-size="20" fill="#854d0e" font-weight="bold">A0 = 1 m²</text>
<text x="20" y="90" font-size="15" fill="#334155">each cut</text>
<text x="20" y="110" font-size="15" fill="#334155">halves the area</text>
<text x="20" y="150" font-size="15" fill="#334155">long side :</text>
<text x="20" y="170" font-size="15" fill="#334155">short side ≈ 1.414</text>
</svg>`
    },
    {
      type: `widget`, title: `The drawing sheet: find the parts`,
      widget: `labelDiagram`,
      caption: `Click on the points and choose the right name.`,
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="10" width="560" height="280" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
<rect x="45" y="30" width="515" height="240" fill="none" stroke="#0f172a" stroke-width="4"/>
<rect x="400" y="215" width="160" height="55" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>
<line x1="400" y1="242" x2="560" y2="242" stroke="#0f172a" stroke-width="1"/>
<rect x="120" y="90" width="160" height="90" fill="none" stroke="#0f172a" stroke-width="3"/>
<line x1="200" y1="70" x2="200" y2="200" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="14 4 2 4"/>
<line x1="120" y1="215" x2="280" y2="215" stroke="#0f172a" stroke-width="1"/>
<text x="200" y="210" font-size="14" text-anchor="middle" fill="#0f172a">80</text>
</svg>`,
        spots: [
          { x: 32, y: 150, label: `margin` },
          { x: 45, y: 120, label: `border` },
          { x: 480, y: 242, label: `title block` },
          { x: 120, y: 135, label: `visible outline` },
          { x: 200, y: 75, label: `axis of symmetry` },
          { x: 200, y: 215, label: `dimension` }
        ]
      }
    },
    {
      type: `text`, title: `4. The types of line`,
      html: `<p>In technical drawing every line has a <b>meaning</b>:</p>
<table>
<tr><th>Line</th><th>Look</th><th>Meaning</th></tr>
<tr><td><b>Thick continuous</b></td><td>━━━━━</td><td><b>visible</b> outlines and edges</td></tr>
<tr><td><b>Thin continuous</b></td><td>─────</td><td><b>dimension</b> and reference lines, hatching of sections</td></tr>
<tr><td><b>Dashed</b> (broken)</td><td>– – – – –</td><td><b>hidden</b> edges (that you can't see)</td></tr>
<tr><td><b>Thin chain</b> (dash-dot)</td><td>—·—·—·—</td><td><b>axes</b> of symmetry, centres of circles</td></tr>
</table>
<p>The <b>dimension</b> is the measurement written on the drawing, always in <b>millimetres</b> (without writing "mm") and always the <b>real</b> measurement of the object, even if the drawing is to scale.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: tools and lines`,
      questions: [
        { type: `mc`, q: `Which pencil leaves the darkest, softest mark?`, options: [`2H`, `HB`, `2B`], answer: 2, explain: `B = soft (black): 2B is darker than HB, H is hard and light.` },
        { type: `mc`, q: `A hidden edge is drawn with a…`, options: [`thick continuous line`, `dashed line`, `dash-dot chain line`], answer: 1, explain: `Hidden edges are drawn dashed.` },
        { type: `num`, q: `How many mm is the short side of an A4 sheet?`, answer: 210, tol: 0, unit: `mm`, explain: `A4 = 210 × 297 mm.` }
      ]
    },
    {
      type: `text`, title: `5. Scales`,
      html: `<p>Often an object is too big (a house) or too small (a screw) to fit on the sheet. So we use a <b>scale</b>: the ratio between the measurement <b>on the drawing</b> and the <b>real</b> measurement.</p>
<ul>
<li><b>1:1</b> → <b>real</b> scale: 1 cm on the sheet = 1 real cm.</li>
<li><b>1:2, 1:5, 1:10, 1:100…</b> → <b>reduction</b> scales: at 1:10, 1 cm on the sheet = 10 real cm.</li>
<li><b>2:1, 5:1, 10:1</b> → <b>enlargement</b> scales: at 2:1, 2 cm on the sheet = 1 real cm.</li>
</ul>
<p><b>Step by step</b>: a table 120 cm long drawn at a scale of 1:10 → 120 ÷ 10 = <b>12 cm</b> on the sheet.</p>`
    },
    {
      type: `example`, title: `Practical example: the plan of your bedroom`,
      html: `<p>Your bedroom measures 4 m × 3 m. You want to draw it on an A4 sheet at a scale of <b>1:50</b>.</p>
<ol>
<li>Convert to cm: 400 cm × 300 cm.</li>
<li>Divide by 50: 400 ÷ 50 = <b>8 cm</b>; 300 ÷ 50 = <b>6 cm</b>.</li>
<li>The bed (200 cm × 90 cm) becomes 4 cm × 1.8 cm.</li>
</ol>
<p>In the title block you write "Scale 1:50", but on the dimensions you write the <b>real</b> measurements (4000 and 3000 mm).</p>`
    },
    {
      type: `text`, title: `6. The basic geometric constructions`,
      html: `<p><b>Perpendicular bisector of a segment AB</b> (the perpendicular line that passes through the midpoint):</p>
<ol>
<li>put the compass point on A with an opening larger than half of AB and draw an arc above and below;</li>
<li>with the same opening put the point on B and draw two more arcs;</li>
<li>join the two points where the arcs cross: that is the bisector.</li>
</ol>
<p><b>Bisector of an angle</b> (the line that divides it in half):</p>
<ol>
<li>put the point on the vertex V and draw an arc that cuts the two sides at points 1 and 2;</li>
<li>put the point on 1 and then on 2 with the same opening and draw two arcs that cross at P;</li>
<li>join V to P.</li>
</ol>
<p><b>Inscribed regular hexagon</b>: draw a circle; with the <b>same opening as the radius</b> put the point on a point of the circle and step the measure around 6 times: the side of the hexagon is equal to the radius! By joining every second point you get an <b>equilateral triangle</b>.</p>`
    },
    {
      type: `svg`, title: `Perpendicular bisector of a segment and hexagon with a compass`,
      caption: `On the left: the arcs from A and from B meet on the bisector. On the right: the radius stepped around 6 times forms the hexagon.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="70" y1="150" x2="230" y2="150" stroke="#0f172a" stroke-width="4"/>
<circle cx="70" cy="150" r="5" fill="#0f172a"/><circle cx="230" cy="150" r="5" fill="#0f172a"/>
<text x="55" y="175" font-size="18" fill="#0f172a" font-weight="bold">A</text>
<text x="235" y="175" font-size="18" fill="#0f172a" font-weight="bold">B</text>
<path d="M135 61.3 A110 110 0 0 1 165 94.5" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M165 205.5 A110 110 0 0 1 135 238.7" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M165 61.3 A110 110 0 0 0 135 94.5" fill="none" stroke="#dc2626" stroke-width="2"/>
<path d="M135 205.5 A110 110 0 0 0 165 238.7" fill="none" stroke="#dc2626" stroke-width="2"/>
<circle cx="150" cy="74.5" r="4" fill="#16a34a"/><circle cx="150" cy="225.5" r="4" fill="#16a34a"/>
<line x1="150" y1="40" x2="150" y2="265" stroke="#16a34a" stroke-width="2" stroke-dasharray="12 4 2 4"/>
<text x="160" y="60" font-size="16" fill="#166534" font-weight="bold">bisector</text>
<text x="150" y="290" font-size="15" text-anchor="middle" fill="#334155">midpoint M</text>
<circle cx="150" cy="150" r="4" fill="#16a34a"/>
<circle cx="440" cy="150" r="100" fill="none" stroke="#94a3b8" stroke-width="2"/>
<polygon points="540,150 490,237 390,237 340,150 390,63 490,63" fill="#c7d2fe" fill-opacity="0.6" stroke="#4338ca" stroke-width="3"/>
<polygon points="540,150 390,237 390,63" fill="none" stroke="#db2777" stroke-width="2"/>
<line x1="440" y1="150" x2="540" y2="150" stroke="#ea580c" stroke-width="3"/>
<text x="490" y="142" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">r</text>
<text x="525" y="208" font-size="15" fill="#9a3412" font-weight="bold">side = r</text>
<circle cx="440" cy="150" r="4" fill="#0f172a"/>
<text x="440" y="285" font-size="15" text-anchor="middle" fill="#334155">hexagon and equilateral triangle</text>
</svg>`
    },
    {
      type: `3d`, title: `From drawing to solid`,
      scene: `solid`,
      caption: `A hexagon drawn on the sheet, "lifted" up in height, becomes a hexagonal prism (like a pencil!). Change solid with the buttons and observe edges and measurements.`,
      options: { shape: `prism`, n: 6, r: 1, h: 2, color: `#6366f1`, labels: true, shapes: [`prism`, `cube`, `cylinder`, `pyramid`] }
    },
    {
      type: `example`, title: `Practical example: the team logo`,
      html: `<p>The class has to draw the logo of the football tournament: a <b>hexagon</b> with a <b>ball</b> inside.</p>
<ol>
<li>Draw perpendicular axes in the centre of the sheet with the chain line.</li>
<li>With the compass draw a circle with a radius of 6 cm.</li>
<li>Step the radius around the circle 6 times: you get the vertices of the hexagon.</li>
<li>Go over the hexagon with the soft pencil (thick continuous line).</li>
<li>In the centre draw a circle with a radius of 3 cm for the ball.</li>
</ol>
<p>The same method is used for hexagonal floor tiles and for hexagonal bolts!</p>`
    },
    {
      type: `widget`, title: `Game: match tool and use`,
      widget: `match`,
      options: {
        pairs: [
          [`Compass`, `Drawing circles and arcs`],
          [`Protractor`, `Measuring angles in degrees`],
          [`45° set square`, `Angles of 90° and 45°`],
          [`30°/60° set square`, `Angles of 90°, 60° and 30°`],
          [`H pencil`, `Light mark for construction lines`],
          [`B pencil`, `Dark mark for going over lines`],
          [`Title block`, `Box with name, title and scale`]
        ]
      }
    },
    {
      type: `curiosity`, title: `Did you know… Euclid drew only with a ruler and compass?`,
      html: `<p>Around <b>300 BC</b>, in Alexandria in Egypt, the Greek mathematician <b>Euclid</b> wrote the <i>Elements</i>, in which all the constructions are made with a <b>straightedge (without marks) and compass</b>. For over 2000 years mathematicians tried to divide an angle into three equal parts with these tools alone: only in <b>1837</b> did the Frenchman Pierre Wantzel prove that, in general, it is <b>impossible</b>!</p>`
    },
    {
      type: `curiosity`, title: `Did you know… the idea of the A4 sheet dates from the eighteenth century?`,
      html: `<p>The German scientist <b>Georg Christoph Lichtenberg</b> noticed as early as <b>1786</b> that a sheet whose sides are in the ratio √2 keeps its shape when folded in half. The system was adopted in Germany in <b>1922</b> (DIN 476 standard, by the engineer Walter Porstmann) and then in almost the whole world. The exception is the <b>United States</b>, which still uses the <i>Letter</i> size (8.5 × 11 inches).</p>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `If geometric constructions seem like "magic" to you, try these paths.`,
      tabs: [
        {
          label: `🧵 With string and pegs`,
          html: `<p>Gardeners and ancient builders didn't have a big compass: they used a <b>string tied to a peg</b>. Holding the string tight and turning around the peg you draw a circle on the ground. The <b>Egyptians</b> used a rope with <b>12 equally spaced knots</b>: by forming a triangle with sides of 3, 4 and 5 sections they got a perfect right angle for building the pyramids!</p>`
        },
        {
          label: `🇯🇵 Folding paper`,
          html: `<p>In Japan <b>origami</b> has also become a method of geometry: by folding paper you construct bisectors, angle bisectors and perpendiculars without any tools.</p>
<ul>
<li><b>Perpendicular bisector of a segment</b>: fold the sheet so that A lands exactly on B: the crease is the bisector!</li>
<li><b>Angle bisector</b>: fold so that one side of the angle lies on top of the other.</li>
<li><b>Perpendicular</b>: fold a line onto itself.</li>
</ul>
<p>With folds you can even divide an angle into three parts: something impossible with ruler and compass!</p>`
        },
        {
          label: `🧊 The drawing becomes 3D`,
          html: `<p>Technical drawing is used to build real objects. Rotate the cube: each face you see from the front, from the side and from above will become a square on the sheet. This is the idea of <b>orthogonal projections</b>, invented by the Frenchman <b>Gaspard Monge</b> at the end of the eighteenth century, which you will study in year two.</p>`,
          scene: `solid`,
          options: { shape: `box`, w: 3, h: 1, d: 2, color: `#f59e0b`, labels: true }
        },
        {
          label: `🧮 The scale on the line`,
          html: `<p>Think of the scale as a line in which every "jump" is worth more centimetres. At a scale of 1:10 each 1 cm mark on the sheet is worth 10 cm in reality. Move the jumps: 12 marks = 120 cm, the table from the example!</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 150, step: 10, marks: [120] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: the language of technical drawing`,
      nodes: [
        { id: `dt`, label: `Technical drawing`, x: 50, y: 8, color: `#4f46e5`, html: `A precise and universal graphic language.`, why: `It is used to communicate a project without ambiguity. Already in the Renaissance artist-engineers like <b>Leonardo da Vinci</b> and <b>Francesco di Giorgio Martini</b> drew machines with great precision, but common rules were born with industry in the nineteenth century.` },
        { id: `norme`, label: `UNI EN ISO standards`, x: 15, y: 30, color: `#0ea5e9`, html: `Common rules for everyone.`, why: `With mass production, parts made in different factories had to fit together. ISO (the International Organization for Standardization) was founded in <b>1947</b> in Geneva; in Italy UNI in 1921.` },
        { id: `strum`, label: `Tools`, x: 50, y: 30, color: `#f97316`, html: `Pencils, ruler, set squares, compass, protractor.`, why: `Ruler and compass are the tools of <b>Euclid's</b> geometry (around 300 BC). The 45° and 30°/60° set squares come from the two "special" right triangles: half of a square and half of an equilateral triangle.` },
        { id: `fogli`, label: `A sizes`, x: 85, y: 30, color: `#eab308`, html: `A0 = 1 m², A4 = 210 × 297 mm.`, why: `Sides in the ratio √2: if a : b = √2, cutting in half the new ratio stays √2. An idea of Lichtenberg (1786), DIN 476 standard (1922), then ISO 216.` },
        { id: `linee`, label: `Types of line`, x: 20, y: 62, color: `#22c55e`, html: `Continuous, dashed, dash-dot.`, why: `A single view doesn't show everything: different marks are needed to tell apart what you see, what is hidden and the axes. The rules are set by the ISO 128 standard.` },
        { id: `scala`, label: `Scales`, x: 50, y: 62, color: `#ef4444`, html: `1:1 real, 1:n reduction, n:1 enlargement.`, why: `A scale is a <b>ratio</b>: the same concept as proportions in maths. Maps use the same principle.` },
        { id: `costr`, label: `Geometric constructions`, x: 80, y: 62, color: `#a855f7`, html: `Bisector, angle bisector, perpendicular, polygons.`, why: `They work because the compass draws points at the <b>same distance</b> from the centre: the perpendicular bisector is the set of points equidistant from A and B; in the hexagon the side equals the radius because it is made of 6 equilateral triangles.` },
        { id: `cad`, label: `From the sheet to CAD and 3D`, x: 50, y: 92, color: `#14b8a6`, html: `Today we also draw on the computer.`, why: `In <b>1963</b> Ivan Sutherland created <i>Sketchpad</i>, the first computer drawing program. Today CAD programs and 3D printers turn the drawing directly into an object. But the rules are always those of hand drawing!` }
      ],
      edges: [
        [`dt`, `norme`, `follows`], [`dt`, `strum`, `uses`], [`dt`, `fogli`, `on`], [`norme`, `linee`, `set`],
        [`strum`, `costr`, `allow`], [`fogli`, `scala`, `require`], [`costr`, `cad`, `evolve into`], [`scala`, `cad`, `also in`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: scales and constructions`,
      questions: [
        { type: `mc`, q: `A 2:1 scale is a scale of…`, options: [`reduction`, `enlargement`, `real size`], answer: 1, explain: `2 cm on the drawing = 1 real cm: the object looks bigger.` },
        { type: `num`, q: `A wall 500 cm long drawn at a scale of 1:100 is… long`, answer: 5, tol: 0, unit: `cm`, explain: `500 ÷ 100 = 5 cm.` },
        { type: `tf`, q: `In the inscribed regular hexagon the side is equal to the radius.`, answer: true, explain: `The hexagon is made of 6 equilateral triangles with side = radius.` }
      ]
    }
  ],
  glossary: [
    { t: `Technical drawing`, d: `A precise graphic representation of an object, following common rules (standards).` },
    { t: `UNI, EN, ISO standards`, d: `Italian, European and international rules for drawings and products.` },
    { t: `Border`, d: `A frame drawn on the sheet about 1 cm from the edge.` },
    { t: `Title block`, d: `The box at the bottom right with name, title, date and scale.` },
    { t: `Dimension`, d: `The real measurement written on the drawing, in millimetres.` },
    { t: `Scale`, d: `The ratio between the measurement on the drawing and the real measurement (e.g. 1:10).` },
    { t: `Perpendicular bisector of a segment`, d: `The line perpendicular to the segment that passes through its midpoint.` },
    { t: `Angle bisector`, d: `A half-line that divides an angle into two equal angles.` },
    { t: `A4 size`, d: `A sheet of 210 × 297 mm; A0 measures 1 m².` },
    { t: `CAD`, d: `Computer-Aided Design: technical drawing on the computer.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Which line is used for axes of symmetry?`, options: [`Thick continuous`, `Dashed`, `Thin dash-dot chain`], answer: 2, explain: `Axes are drawn with the thin chain line (dash-dot).` },
      { type: `mc`, q: `Which angles does the 30°/60° set square have?`, options: [`90°, 45°, 45°`, `90°, 60°, 30°`, `60°, 60°, 60°`], answer: 1, explain: `It is a right triangle with angles of 90°, 60° and 30°.` },
      { type: `num`, q: `How many m² does an A0 sheet measure?`, answer: 1, tol: 0, unit: `m²`, explain: `A0 has an area of 1 m² (841 × 1189 mm).` },
      { type: `mc`, q: `An A3 is as big as…`, options: [`two A4`, `half an A4`, `four A4`], answer: 0, explain: `Each size is double the next: A3 = 2 × A4.` },
      { type: `num`, q: `A door 210 cm high drawn at a scale of 1:10 is… cm high`, answer: 21, tol: 0, unit: `cm`, explain: `210 ÷ 10 = 21 cm.` },
      { type: `tf`, q: `Dimensions show the real measurement even if the drawing is to scale.`, answer: true, explain: `We always write the real measurement of the object, in mm.` },
      { type: `mc`, q: `A 2H pencil is…`, options: [`hard, light mark`, `soft, dark mark`, `medium`], answer: 0, explain: `H = hard: thin, light mark.` },
      { type: `order`, q: `Put in order the steps to construct the perpendicular bisector of segment AB.`, items: [`Put the point on A and draw two arcs (above and below)`, `With the same opening put the point on B and draw two arcs`, `Find the two points where the arcs cross`, `Join the two points with the ruler`], explain: `The arcs from A and from B meet at points equidistant from A and B: the line that joins them is the bisector.` },
      { type: `text`, q: `What is the half-line that divides an angle into two equal parts called?`, answer: [`bisector`, `the bisector`, `angle bisector`, `the angle bisector`], explain: `The bisector.` },
      { type: `mc`, q: `By putting the two set squares together you can get an angle of…`, options: [`15°`, `20°`, `50°`], answer: 0, explain: `60° − 45° = 15°.` },
      { type: `tf`, q: `A drawing of a postage stamp at a scale of 5:1 is smaller than the real stamp.`, answer: false, explain: `5:1 is an enlargement: the drawing is 5 times bigger.` },
      { type: `mc`, q: `Who wrote the "Elements", with constructions using ruler and compass?`, options: [`Pythagoras`, `Euclid`, `Leonardo`], answer: 1, explain: `Euclid, around 300 BC, in Alexandria in Egypt.` }
    ],
    gen: [[`proportion`, 2]]
  }
});
