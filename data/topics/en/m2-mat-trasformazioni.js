TOPIC('en', {
  id: "m2-mat-trasformazioni",
  title: "Geometric transformations",
  intro: "Moving, turning, flipping, enlarging: <b>geometric transformations</b> are the rules by which a figure changes position or size in the plane. You find them in floor tiles, logos, mirrors, video games and even in the wings of a butterfly.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "1. What a transformation is",
      html: `<p>A <b>geometric transformation</b> is a rule that associates with every point <b>P</b> of the plane one and only one point <b>P'</b> (read "P prime"), called the <b>image</b> or <b>corresponding point</b> of P.</p>
<p>Applying the rule to all the points of a figure <b>F</b> gives the transformed figure <b>F'</b>.</p>
<p>Transformations are divided into two big families:</p>
<ul>
<li><b>Isometries</b> (from the Greek <i>isos</i> = equal, <i>metron</i> = measure): they preserve the <b>lengths</b> of segments and the size of angles. The figure moves but stays <b>congruent</b> (it can be placed exactly on top) to the starting one. Isometries are the <b>translation</b>, the <b>rotation</b> and the <b>reflection</b> (axial and central symmetry).</li>
<li><b>Similarities</b>: they preserve the <b>shape</b> (the angles) but may change the size. The figure is enlarged or shrunk by a certain <b>similarity ratio k</b>.</li>
</ul>
<p>A point that coincides with its own image (P = P') is called a <b>fixed point</b>.</p>`
    },
    {
      type: "text",
      title: "2. Translation: sliding",
      html: `<p>In a <b>translation</b> all the points move by the same distance, in the same direction and the same sense. This movement is described by a <b>vector</b> <b>v</b>: an arrow that has</p>
<ul>
<li><b>magnitude</b> (the length of the movement),</li>
<li><b>direction</b> (the line it happens along),</li>
<li><b>sense</b> (which way the arrow points).</li>
</ul>
<p>In the Cartesian plane a vector is written with its components, for example <b>v(3; −2)</b>: "3 to the right and 2 down". The point A(1; 4) becomes A'(1+3; 4−2) = <b>A'(4; 2)</b>.</p>
<p>Rule: <b>P(x; y) → P'(x + a; y + b)</b> with v(a; b).</p>
<p>A translation has <b>no fixed points</b> (except the one with the zero vector) and preserves <b>orientation</b>: if the vertices of a triangle are read anticlockwise, those of the image are read anticlockwise too.</p>`
    },
    {
      type: "svg",
      title: "The four isometries compared",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<line x1="300" y1="0" x2="300" y2="340" stroke="#cbd5e1" stroke-width="2"/>
<line x1="0" y1="170" x2="600" y2="170" stroke="#cbd5e1" stroke-width="2"/>
<text x="150" y="22" font-size="17" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Translation</text>
<polygon points="30,140 80,140 30,70" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="170,140 220,140 170,70" fill="#1d4ed8" fill-opacity="0.75" stroke="#1e3a8a" stroke-width="2"/>
<line x1="85" y1="110" x2="160" y2="110" stroke="#f97316" stroke-width="4"/>
<polygon points="160,102 175,110 160,118" fill="#f97316"/>
<text x="122" y="100" font-size="16" fill="#c2410c" text-anchor="middle">v</text>
<text x="450" y="22" font-size="17" font-weight="bold" fill="#15803d" text-anchor="middle">Axial symmetry</text>
<line x1="450" y1="35" x2="450" y2="160" stroke="#15803d" stroke-width="3" stroke-dasharray="8,6"/>
<polygon points="380,140 430,140 430,70" fill="#86efac" stroke="#15803d" stroke-width="2"/>
<polygon points="520,140 470,140 470,70" fill="#15803d" fill-opacity="0.75" stroke="#14532d" stroke-width="2"/>
<text x="458" y="160" font-size="15" fill="#15803d">axis r</text>
<text x="150" y="195" font-size="17" font-weight="bold" fill="#7c3aed" text-anchor="middle">Rotation by 90°</text>
<circle cx="150" cy="270" r="5" fill="#7c3aed"/>
<text x="140" y="292" font-size="15" fill="#7c3aed">O</text>
<polygon points="160,260 220,260 220,220" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
<polygon points="140,260 140,320 100,320" fill="#7c3aed" fill-opacity="0.75" stroke="#4c1d95" stroke-width="2"/>
<path d="M205 245 A60 60 0 0 1 135 305" fill="none" stroke="#f97316" stroke-width="3" stroke-dasharray="5,4"/>
<text x="450" y="195" font-size="17" font-weight="bold" fill="#be123c" text-anchor="middle">Central symmetry</text>
<circle cx="450" cy="270" r="5" fill="#be123c"/>
<text x="456" y="288" font-size="15" fill="#be123c">O</text>
<polygon points="470,255 530,255 470,215" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
<polygon points="430,285 370,285 430,325" fill="#be123c" fill-opacity="0.75" stroke="#881337" stroke-width="2"/>
<line x1="530" y1="255" x2="370" y2="285" stroke="#be123c" stroke-width="1.5" stroke-dasharray="5,4"/>
</svg>`,
      caption: "The light figure is the starting one (F), the dark one is the image (F'). In all four cases F and F' are congruent."
    },
    {
      type: "text",
      title: "3. Rotation: turning around a point",
      html: `<p>A <b>rotation</b> is defined by three elements:</p>
<ol>
<li>the <b>centre of rotation O</b>, the only point that stays still (fixed point);</li>
<li>the <b>angle of rotation α</b> (for example 90°, 180°, 60°…);</li>
<li>the <b>sense</b>: <b>anticlockwise</b> (positive by convention, +) or <b>clockwise</b> (negative, −).</li>
</ol>
<p>Every point P moves along a circle with centre O: the distance OP stays equal to OP' and the angle POP' is exactly α.</p>
<p>In the Cartesian plane, with centre at the origin:</p>
<ul>
<li>rotation by +90°: <b>(x; y) → (−y; x)</b></li>
<li>rotation by 180°: <b>(x; y) → (−x; −y)</b></li>
<li>rotation by −90° (or +270°): <b>(x; y) → (y; −x)</b></li>
</ul>
<p>A rotation by 360° puts every point back in its place: it is the <b>identity</b>.</p>`
    },
    {
      type: "text",
      title: "4. Symmetries: the mirror",
      html: `<p><b>Axial symmetry</b> (or reflection): it is given by a line <b>r</b>, the <b>axis of symmetry</b>. The point P' is such that the axis r is the <b>perpendicular bisector of the segment PP'</b>: PP' is perpendicular to r and the midpoint of PP' lies on r. The points of the axis are all fixed points.</p>
<p>Axial symmetry <b>reverses orientation</b>: it is like looking in a mirror, where your right hand looks like a left hand.</p>
<ul>
<li>x-axis: (x; y) → (x; −y)</li>
<li>y-axis: (x; y) → (−x; y)</li>
<li>Bisector y = x: (x; y) → (y; x)</li>
</ul>
<p><b>Central symmetry</b>: it is given by a point <b>O</b>, the <b>centre of symmetry</b>, which is the midpoint of every segment PP'. It is equivalent to a <b>rotation by 180°</b> around O. With centre at the origin: (x; y) → (−x; −y).</p>
<p>A figure has an <b>axis of symmetry</b> if the reflection in that axis transforms it into itself. The square has 4, the rectangle 2, the equilateral triangle 3, the circle infinitely many.</p>`
    },
    {
      type: "widget",
      title: "Lab: transform the point",
      widget: "numberLine",
      options: { min: -8, max: 8, step: 1, marks: [-3, 3] },
      caption: "On a line the symmetry about 0 sends 3 to −3: it is the same thing that happens to the x coordinate in the symmetry about the y-axis. Try jumping from 3 to −3: how long is the jump? (6 = twice the distance from the axis)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: isometries",
      questions: [
        { type: "mc", q: "Which transformation is described by a vector?", options: ["Rotation", "Translation", "Axial symmetry"], answer: 1, explain: "Translation moves all the points by the same vector (magnitude, direction, sense)." },
        { type: "mc", q: "The point A(2; 5) is translated by v(−4; 1). Where does it end up?", options: ["A'(6; 6)", "A'(−2; 6)", "A'(−2; 4)"], answer: 1, explain: "x: 2 + (−4) = −2; y: 5 + 1 = 6. So A'(−2; 6)." },
        { type: "tf", q: "Central symmetry is the same as a rotation by 180° about the centre.", answer: true, explain: "Every point ends up on the opposite side of O, at the same distance: it is a half turn." },
        { type: "num", q: "How many axes of symmetry does a square have?", answer: 4, explain: "2 midlines (vertical and horizontal) and 2 diagonals." }
      ]
    },
    {
      type: "text",
      title: "5. Composition of isometries",
      html: `<p>You can apply two transformations one after the other: this is called <b>composition</b>. Some important results:</p>
<ul>
<li>two translations give a translation (the vectors add up);</li>
<li>two axial symmetries with <b>parallel</b> axes give a <b>translation</b> of magnitude twice the distance between the axes;</li>
<li>two axial symmetries with axes <b>intersecting</b> at O give a <b>rotation</b> with centre O and angle twice the angle between the axes;</li>
<li>two central symmetries give a translation.</li>
</ul>
<p>That is why axial symmetry is called the "building block" transformation: by combining at most three axial symmetries you get <b>any isometry</b> of the plane.</p>`
    },
    {
      type: "text",
      title: "6. Dilation and similarity: enlarging and shrinking",
      html: `<p>A <b>dilation</b> (homothety) with centre O and ratio <b>k</b> sends every point P to a point P' on the line OP such that <b>OP' = k · OP</b>.</p>
<ul>
<li>if <b>k &gt; 1</b> the figure is <b>enlarged</b>;</li>
<li>if <b>0 &lt; k &lt; 1</b> the figure is <b>shrunk</b>;</li>
<li>if <b>k = 1</b> it does not change (identity);</li>
<li>if k is negative the image lies on the opposite side of O (with k = −1 it is central symmetry).</li>
</ul>
<p>Two figures are called <b>similar</b> if one is obtained from the other by a dilation followed (possibly) by an isometry. In similar figures:</p>
<ul>
<li><b>corresponding angles are equal</b>;</li>
<li><b>corresponding sides are proportional</b>, with ratio k;</li>
<li>the <b>perimeters</b> are in the ratio <b>k</b>;</li>
<li>the <b>areas</b> are in the ratio <b>k²</b> (and the volumes of solids in the ratio k³).</li>
</ul>`
    },
    {
      type: "svg",
      title: "A dilation with ratio 2",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<circle cx="60" cy="260" r="7" fill="#dc2626"/>
<text x="40" y="290" font-size="18" fill="#dc2626" font-weight="bold">O</text>
<line x1="60" y1="260" x2="540" y2="260" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<line x1="60" y1="260" x2="300" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<line x1="60" y1="260" x2="540" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<polygon points="180,260 300,190 180,150" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<polygon points="300,260 540,120 300,40" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="150" y="160" font-size="18" fill="#92400e" font-weight="bold">A</text>
<text x="290" y="34" font-size="18" fill="#92400e" font-weight="bold">A'</text>
<text x="300" y="215" font-size="18" fill="#92400e" font-weight="bold">B</text>
<text x="545" y="115" font-size="18" fill="#92400e" font-weight="bold">B'</text>
<text x="380" y="215" font-size="17" fill="#0f172a">OA' = 2 · OA</text>
<text x="380" y="240" font-size="17" fill="#0f172a">area F' = 4 · area F</text>
</svg>`,
      caption: "With k = 2 every side doubles, but the area becomes 4 times bigger (2² = 4)."
    },
    {
      type: "example",
      title: "Worked example: the map and the scale",
      html: `<p>A map with a scale of <b>1 : 25 000</b> is a figure <b>similar</b> to the real territory with ratio k = 1/25 000.</p>
<p>If on the map two villages are <b>8 cm</b> apart, in reality they are 8 × 25 000 = 200 000 cm = <b>2 km</b> apart.</p>
<p>Watch out for areas: a field that is 2 cm × 2 cm = 4 cm² on the map measures 500 m × 500 m = 250 000 m² in reality, that is 4 cm² × 25 000² = 2.5 billion cm². Areas scale with <b>k²</b>!</p>`
    },
    {
      type: "example",
      title: "Worked example: the coordinates of a triangle",
      html: `<p>The triangle ABC has vertices A(1; 1), B(4; 1), C(1; 3).</p>
<table>
<tr><th>Transformation</th><th>A'</th><th>B'</th><th>C'</th></tr>
<tr><td>Translation v(2; 3)</td><td>(3; 4)</td><td>(6; 4)</td><td>(3; 6)</td></tr>
<tr><td>Symmetry about the y-axis</td><td>(−1; 1)</td><td>(−4; 1)</td><td>(−1; 3)</td></tr>
<tr><td>Rotation +90° (centre O)</td><td>(−1; 1)</td><td>(−1; 4)</td><td>(−3; 1)</td></tr>
<tr><td>Dilation k = 2 (centre O)</td><td>(2; 2)</td><td>(8; 2)</td><td>(2; 6)</td></tr>
</table>
<p>Check: AB = 3 and A'B' = 3 in the first three rows (isometries); in the dilation A'B' = 6 = 2 · 3.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand transformations",
      intro: "If the rules with coordinates do not convince you, try with your hands, with art or with 3D.",
      tabs: [
        {
          label: "✂️ Paper, scissors and tracing paper",
          html: `<p>The method used in many schools in Northern Europe is <b>hands-on</b>:</p>
<ul>
<li><b>Translation</b>: trace the figure on a transparent sheet and <b>slide</b> it without turning it.</li>
<li><b>Rotation</b>: put a pencil point on the centre O and <b>turn</b> the transparent sheet.</li>
<li><b>Axial symmetry</b>: fold the sheet along the axis, or <b>flip over</b> the tracing paper. With a drop of paint on one side and the fold you immediately get the symmetric figure (the "butterfly").</li>
<li><b>Central symmetry</b>: turn the tracing paper through a half turn around the centre.</li>
</ul>
<p>Key question: to get F' did you have to <b>flip</b> the tracing paper over? If so, the isometry reverses orientation (it is an axial symmetry or a composition of one).</p>`
        },
        {
          label: "🎨 Escher and the Alhambra mosaics",
          html: `<p>The Dutch artist <b>M. C. Escher</b> (1898–1972), after visiting the <b>Alhambra</b> in Granada (Spain), created drawings of fish, birds and lizards that fill the plane without leaving gaps: <b>tessellations</b>.</p>
<p>The trick: you start from a square, "bite" a piece out of one side and <b>translate</b> it to the opposite side (or <b>rotate</b> it around a vertex). The new tile fits perfectly with its copies.</p>
<p>Mathematicians have proved (Fedorov, 1891) that there are exactly <b>17 types</b> of symmetry for patterns that repeat in the plane: the Arab craftsmen of the Alhambra used a great many of them centuries earlier!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#eff6ff"/>
<g stroke="#1e3a8a" stroke-width="2">
<path d="M20 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M100 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M180 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M260 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M340 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M420 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M500 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
</g>
<text x="300" y="165" font-size="18" fill="#1e3a8a" text-anchor="middle">The same "bitten" tile, translated again and again,</text>
<text x="300" y="192" font-size="18" fill="#1e3a8a" text-anchor="middle">fills the strip without gaps.</text>
</svg>`
        },
        {
          label: "🎮 Like in video games",
          html: `<p>In video games every character is a set of points with coordinates. The computer transforms them dozens of times per second:</p>
<ul>
<li>the character <b>walks</b> → translation (x + 2; y);</li>
<li>the character <b>turns</b> to the left → symmetry about a vertical axis (−x; y);</li>
<li>the camera <b>zooms</b> → dilation with k &gt; 1;</li>
<li>a wheel <b>spins</b> → rotation.</li>
</ul>
<p>Graphics cards do billions of these calculations every second using <b>matrices</b>, tables of numbers that you will study in high school.</p>`
        },
        {
          label: "🧊 Rotate a solid in 3D",
          html: `<p>Rotations exist in space too, around an <b>axis</b> instead of a point. Drag the hexagonal prism: when turned by <b>60°</b> around its axis it looks identical again, because its base is a regular hexagon (360° : 6 = 60°). We say it has a <b>rotational symmetry of order 6</b>.</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 1.4, color: "#a78bfa", labels: true }
        },
        {
          "label": "🇬🇷 The Greek key: an endless translation",
          "html": "<p>On the vases, mosaics and temples of ancient <b>Greece</b> you often find a squared spiral border: the <b>meander</b>, which in English is also called the <b>«Greek key»</b>. The name comes from the river Meander (in Turkey), famous for its bends.</p><p>The meander is built with a single transformation: <b>translation</b>.</p><ol><li>On squared paper draw the <b>«brick»</b>: a piece of the spiral (in the drawing it is in the yellow box).</li><li>Choose a <b>vector</b>: for example 8 squares to the right.</li><li>Trace the brick, then move it by that vector and trace it again… and again.</li><li>Join the bricks with the border lines: there is the frieze!</li></ol><p>Every brick is the <b>image</b> of the previous one: same shape, same size, same orientation. A pattern that repeats like this along a strip is called a <b>frieze</b>. Mathematicians have proved that, by combining translations, reflections and half-turn rotations, there are <b>only 7 different types of frieze</b>.</p><p>🎯 Does the meander also have an <b>axial symmetry</b>? Try folding the drawing along a vertical line and check.</p>",
          "svg": "<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"250\" fill=\"#fff7ed\"/><polyline points=\"60,120 60,40 120,40 120,100 80,100 80,60 100,60 100,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"140,120 140,40 200,40 200,100 160,100 160,60 180,60 180,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"220,120 220,40 280,40 280,100 240,100 240,60 260,60 260,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"300,120 300,40 360,40 360,100 320,100 320,60 340,60 340,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"380,120 380,40 440,40 440,100 400,100 400,60 420,60 420,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"460,120 460,40 520,40 520,100 480,100 480,60 500,60 500,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><line x1=\"56\" y1=\"120\" x2=\"544\" y2=\"120\" stroke=\"#1e3a8a\" stroke-width=\"7\"/><line x1=\"56\" y1=\"32\" x2=\"544\" y2=\"32\" stroke=\"#1e3a8a\" stroke-width=\"7\"/><rect x=\"56\" y=\"28\" width=\"80\" height=\"96\" fill=\"#fde68a\" fill-opacity=\"0.35\" stroke=\"#d97706\" stroke-width=\"3\"/><defs><marker id=\"arrM\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 Z\" fill=\"#dc2626\"/></marker></defs><line x1=\"60\" y1=\"170\" x2=\"136\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><line x1=\"140\" y1=\"170\" x2=\"216\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><line x1=\"220\" y1=\"170\" x2=\"296\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><text x=\"320\" y=\"176\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">same vector, repeated over and over</text><text x=\"96\" y=\"225\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">The coloured «brick», translated many times, forms the frieze.</text></svg>"
        },
        {
          "label": "🇲🇩 Carpets and embroidery of Moldova",
          "html": "<p>In <b>Moldova</b> and in <b>Romania</b> the traditional carpets (<i>covoare</i>) and the embroidery on shirts are full of geometry: rhombuses, stars, crosses, stylised trees. In 2016 <b>UNESCO</b> recognised the art of traditional wall carpets of Romania and the Republic of Moldova as <b>intangible cultural heritage of humanity</b>.</p><p>The embroiderers work on the <b>weave of the fabric</b>, which is a grid of little squares, just like your notebook. To create a pattern they use (often without calling them that) <b>geometric transformations</b>:</p><ol><li>They draw <b>a quarter</b> of the pattern, square by square.</li><li>They <b>flip</b> it about a vertical line (<b>axial symmetry</b>): every square goes to the other side, at the same distance from the axis.</li><li>They flip the half they got about a horizontal line: the pattern is complete.</li><li>Then they <b>translate</b> it along the edge of the carpet to make a border.</li></ol><p>The pattern you get has <b>two axes of symmetry</b> and stays the same even if you <b>rotate it by 90°</b> about the centre.</p><p>🎯 Try it: on squared paper draw your own quarter of a pattern in a 6 × 6 square and complete it with two symmetries. Then translate the pattern to make a border!</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"30\" x2=\"274\" y2=\"30\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"58\" y1=\"30\" x2=\"58\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"48\" x2=\"274\" y2=\"48\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"76\" y1=\"30\" x2=\"76\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"66\" x2=\"274\" y2=\"66\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"94\" y1=\"30\" x2=\"94\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"84\" x2=\"274\" y2=\"84\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"112\" y1=\"30\" x2=\"112\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"102\" x2=\"274\" y2=\"102\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"120\" x2=\"274\" y2=\"120\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"148\" y1=\"30\" x2=\"148\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"138\" x2=\"274\" y2=\"138\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"166\" y1=\"30\" x2=\"166\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"156\" x2=\"274\" y2=\"156\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"184\" y1=\"30\" x2=\"184\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"174\" x2=\"274\" y2=\"174\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"202\" y1=\"30\" x2=\"202\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"192\" x2=\"274\" y2=\"192\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"220\" y1=\"30\" x2=\"220\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"210\" x2=\"274\" y2=\"210\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"238\" y1=\"30\" x2=\"238\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"228\" x2=\"274\" y2=\"228\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"256\" y1=\"30\" x2=\"256\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"246\" x2=\"274\" y2=\"246\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"274\" y1=\"30\" x2=\"274\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"264\" x2=\"274\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><rect x=\"41\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"121\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"121\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"157\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"157\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"31\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"247\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"49\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"229\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"67\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"211\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"85\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"193\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"103\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"175\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"121\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"157\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"157\" y1=\"20\" x2=\"157\" y2=\"274\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"30\" y1=\"147\" x2=\"284\" y2=\"147\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><text x=\"320\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">Axes of symmetry (blue):</text><text x=\"320\" y=\"84\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">fold along an axis and the</text><text x=\"320\" y=\"104\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">two halves match.</text><text x=\"320\" y=\"144\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">Rotation: turn by 90°</text><text x=\"320\" y=\"168\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">around the centre and the</text><text x=\"320\" y=\"188\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">pattern stays the same.</text><text x=\"320\" y=\"228\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">Each little square = one cross</text><text x=\"320\" y=\"248\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">stitch on the fabric.</text></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Did you know…? Symmetries in the body and in nature",
      html: `<p>Almost all animals have <b>bilateral symmetry</b> (an axis that divides the body into right and left), while adult starfish have a rotational symmetry of order <b>5</b>. Snowflakes have a symmetry of order <b>6</b>, due to the shape of the water molecules that bond in ice forming hexagons.</p>
<p>Our face, however, is not perfectly symmetric: if you take a photo and build a face from two left halves, it will look almost like another person!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Felix Klein and the geometry of transformations",
      html: `<p>In <b>1872</b> the German mathematician <b>Felix Klein</b>, aged 23, presented the <b>Erlangen Programme</b>: the idea that every geometry can be defined by the transformations that <b>do not</b> change certain properties. Euclidean geometry studies what stays the same under isometries (lengths, angles); the geometry of similarities what stays the same when enlarging (angles, ratios). This idea is at the base of modern physics, including Einstein's relativity.</p>`
    },
    {
      type: "widget",
      title: "Classify the transformations",
      widget: "classify",
      options: {
        groups: ["Isometry (same size)", "Non-isometric similarity (the size changes)"],
        items: [
          ["🪞 Mirror image", 0],
          ["🎡 Cabin turning on the Ferris wheel", 0],
          ["🛗 Lift going up", 0],
          ["🗺️ Map at a scale of 1:100 000", 1],
          ["📷 Photo printed in a larger size", 1],
          ["🔍 Magnifying glass", 1],
          ["🧩 Puzzle piece moved", 0],
          ["🏠 Scale model of a house", 1]
        ]
      },
      caption: "Always ask yourself: do the lengths stay the same?"
    },
    {
      type: "conceptMap",
      title: "Map of transformations: tap the nodes and find out why",
      nodes: [
        { id: "trasf", label: "Transformation", x: 50, y: 6, color: "#0ea5e9", html: "A rule that associates with each point P a unique point P'.", why: "The idea of studying figures through movements goes back to Euclid (about 300 BC), who proved the equality of triangles by \"superimposing\" them. It was Felix Klein in 1872 who put transformations at the centre of all geometry." },
        { id: "iso", label: "Isometries", x: 25, y: 28, color: "#16a34a", html: "Transformations that preserve lengths and angles.", why: "The name comes from the Greek isos (equal) and metron (measure). If all the distances stay the same, the figure is congruent: for Euclid two figures are equal precisely if they can be superimposed by a rigid movement." },
        { id: "simil", label: "Similarities", x: 75, y: 28, color: "#f59e0b", html: "Transformations that preserve shape: equal angles, proportional sides.", why: "They are based on Thales' theorem (6th century BC): parallel lines cut proportional segments on two transversals. Thales, according to tradition, measured the height of the pyramids from their shadow this way." },
        { id: "trasl", label: "Translation", x: 8, y: 55, color: "#2563eb", html: "Movement of all the points by a vector.", why: "The concept of a vector (a quantity with magnitude, direction and sense) was formalised in the 19th century by mathematicians such as Hamilton and Grassmann, studying forces and velocities in physics." },
        { id: "rot", label: "Rotation", x: 28, y: 62, color: "#7c3aed", html: "A turn by an angle α around a centre O.", why: "It is based on the circle: every point stays at the same distance from O. The anticlockwise sense is positive by convention, the same one used in trigonometry to measure angles starting from the x-axis." },
        { id: "simass", label: "Axial symmetry", x: 48, y: 50, color: "#15803d", html: "Reflection about a line (axis).", why: "The axis is the locus of points equidistant from P and P', that is the perpendicular bisector of the segment PP'. By composing at most three axial symmetries you get every isometry of the plane: that is why it is the fundamental transformation." },
        { id: "simcen", label: "Central symmetry", x: 40, y: 82, color: "#be123c", html: "Every point goes to the opposite side of O at the same distance.", why: "O is the midpoint of PP'. It is equivalent to a rotation by 180° and is also a dilation with k = −1: it is the meeting point between the two families of transformations." },
        { id: "omot", label: "Dilation (ratio k)", x: 75, y: 58, color: "#ea580c", html: "Enlargement or reduction from a centre O: OP' = k · OP.", why: "It is the principle of the camera obscura and the projector: rays of light start from a point and spread out in straight lines, so the image is bigger if the screen is farther away." },
        { id: "aree", label: "Perimeters ×k, areas ×k²", x: 82, y: 85, color: "#a16207", html: "In similar figures the perimeter changes by k, the area by k², the volume by k³.", why: "Area is a product of two lengths, and each is multiplied by k: k · k = k². For the same reason Galileo observed (1638) that a giant animal cannot have the same proportions as a small one: weight grows like k³, the cross-section of the bones only like k²." }
      ],
      edges: [
        ["trasf", "iso", "preserves measures"],
        ["trasf", "simil", "preserves shape"],
        ["iso", "trasl", ""],
        ["iso", "rot", ""],
        ["iso", "simass", ""],
        ["rot", "simcen", "by 180°"],
        ["simass", "simcen", "two axes ⊥"],
        ["simil", "omot", "is built with"],
        ["omot", "aree", "effects on"],
        ["omot", "simcen", "with k = −1"]
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li><b>Isometries</b>: translation (vector), rotation (centre, angle, sense), axial symmetry (axis), central symmetry (centre). They preserve lengths and angles.</li>
<li>Translation and rotation preserve <b>orientation</b>; axial symmetry <b>reverses</b> it.</li>
<li><b>Similarity</b> with ratio k: equal angles, sides × k, perimeters × k, areas × k².</li>
<li>Coordinates: translation (x+a; y+b); symmetry about the x-axis (x; −y); about the y-axis (−x; y); central about O (−x; −y); rotation +90° (−y; x).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: similarity",
      questions: [
        { type: "num", q: "A triangle has a perimeter of 15 cm. A similar triangle has similarity ratio k = 3. How long is its perimeter?", answer: 45, unit: "cm", explain: "Perimeters are in the ratio k: 15 × 3 = 45 cm." },
        { type: "num", q: "A square has an area of 9 cm². I enlarge it with k = 2. What area does the new figure have?", answer: 36, unit: "cm²", explain: "Areas are in the ratio k² = 4: 9 × 4 = 36 cm²." },
        { type: "tf", q: "Two similar figures always have equal corresponding angles.", answer: true, explain: "Similarity preserves shape, that is the angles." }
      ]
    }
  ],
  glossary: [
    { t: "Geometric transformation", d: "A rule that associates with each point P of the plane a unique point P'." },
    { t: "Isometry", d: "A transformation that preserves distances: the figure stays congruent." },
    { t: "Vector", d: "A directed segment with magnitude, direction and sense; it describes a translation." },
    { t: "Centre of rotation", d: "The point that stays still in a rotation." },
    { t: "Axis of symmetry", d: "A line about which a figure flips onto itself." },
    { t: "Fixed point", d: "A point that coincides with its own image." },
    { t: "Orientation", d: "The sense (clockwise or anticlockwise) in which the vertices of a figure are read." },
    { t: "Dilation", d: "A transformation that enlarges or reduces figures from a centre with ratio k." },
    { t: "Similarity ratio", d: "The number k by which all the lengths of a similar figure are multiplied." },
    { t: "Congruent", d: "Figures that can be placed exactly on top of each other, with the same measures." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these is NOT an isometry?", options: ["Translation", "Dilation with k = 3", "Central symmetry", "Rotation by 45°"], answer: 1, explain: "A dilation with k = 3 triples the lengths, so it does not preserve distances." },
      { type: "mc", q: "The reflection of P(3; −2) in the x-axis is…", options: ["(−3; −2)", "(3; 2)", "(−3; 2)", "(−2; 3)"], answer: 1, explain: "In the symmetry about the x-axis x stays the same and y changes sign." },
      { type: "mc", q: "The point Q(2; 5) rotated by +90° about the origin becomes…", options: ["(5; 2)", "(−5; 2)", "(5; −2)", "(−2; −5)"], answer: 1, explain: "Rule for rotation by +90°: (x; y) → (−y; x) = (−5; 2)." },
      { type: "tf", q: "Axial symmetry preserves the orientation of figures.", answer: false, explain: "It reverses it: it is the mirror effect, right becomes left." },
      { type: "tf", q: "A translation has no fixed points (if the vector is not zero).", answer: true, explain: "All the points move by the same amount: none stays still." },
      { type: "num", q: "The point A(−1; 4) is translated by the vector v(5; −3). What is the x coordinate of A'?", answer: 4, explain: "x' = −1 + 5 = 4 (and y' = 4 − 3 = 1)." },
      { type: "num", q: "Two similar rectangles have similarity ratio k = 3. The smaller has an area of 5 cm². What is the area of the larger?", answer: 45, unit: "cm²", explain: "Areas are in the ratio k² = 9: 5 × 9 = 45 cm²." },
      { type: "num", q: "How many axes of symmetry does an equilateral triangle have?", answer: 3, explain: "Every altitude (which is also a median and an angle bisector) is an axis of symmetry." },
      { type: "text", q: "What is the transformation that enlarges or reduces a figure from a centre O called?", answer: ["dilation", "a dilation", "homothety", "a homothety", "dilation with centre o", "enlargement"], explain: "It is the dilation (homothety) with ratio k." },
      { type: "mc", q: "Composing two axial symmetries with parallel axes 3 cm apart gives…", options: ["a rotation by 3°", "a translation of 6 cm", "a central symmetry", "a translation of 3 cm"], answer: 1, explain: "The result is a translation perpendicular to the axes of magnitude twice their distance: 2 × 3 = 6 cm." },
      { type: "order", q: "Order the figures from the fewest to the most axes of symmetry.", items: ["Scalene triangle (0)", "Isosceles triangle (1)", "Rectangle (2)", "Square (4)", "Circle (infinitely many)"], explain: "0, 1, 2, 4, infinitely many." },
      { type: "mc", q: "On a map at a scale of 1:50 000 two cities are 6 cm apart. How far apart are they in reality?", options: ["300 m", "3 km", "30 km", "50 km"], answer: 1, explain: "6 × 50 000 = 300 000 cm = 3000 m = 3 km." }
    ],
    gen: [["proportion", 2]]
  }
});
