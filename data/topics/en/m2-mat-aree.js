TOPIC('en', {
  id: "m2-mat-aree",
  title: "The areas of polygons",
  intro: "How many tiles do you need for the floor? How much paint for a wall? How much grass for a football pitch? To answer you need the <b>area</b>. Let's discover where the formulas for the rectangle, square, parallelogram, triangle, rhombus, trapezium and regular polygons come from, and how to use them «backwards» too with <b>inverse formulas</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Surface, area and equal area",
      html: `<p>The <b>surface</b> is the part of the plane enclosed by a polygon; the <b>area</b> is the <b>measure</b> of the surface, that is how many times it contains a little square chosen as the unit.</p>
<p>The main unit of measure is the <b>square metre (m²)</b>: a square with a side of 1 m. Each unit is <b>100 times</b> bigger than the next:</p>
<p style="text-align:center"><b>km² → hm² → dam² → m² → dm² → cm² → mm²</b> &nbsp; (× 100 at every step to the right)</p>
<p>Example: 1 m² = 100 dm² = 10 000 cm². In farming the <b>hectare</b> (ha = 1 hm² = 10 000 m²) and the <b>are</b> (a = 100 m²) are used.</p>
<p>Two figures are <b>equal in area</b> (or equivalent) if they have the <b>same area</b>, even if they have different shapes. Two figures made of the same pieces arranged differently (<b>equidecomposable</b>) always have equal areas: this is the idea on which all the formulas are based!</p>`
    },
    {
      type: "text",
      title: "Rectangle and square",
      html: `<p><b>Rectangle</b>: inside a rectangle with base 5 cm and height 3 cm there are 3 rows of 5 little squares of 1 cm²: 5 × 3 = 15 cm².</p>
<p style="text-align:center;font-size:1.15em"><b>A = b × h</b> &nbsp;&nbsp; inverse formulas: <b>b = A : h</b> &nbsp; <b>h = A : b</b></p>
<p><b>Square</b>: it is a rectangle with equal base and height.</p>
<p style="text-align:center;font-size:1.15em"><b>A = l × l = l²</b> &nbsp;&nbsp; inverse formula: <b>l = √A</b></p>
<p>The square can also be seen as a rhombus: <b>A = d² : 2</b> (d = diagonal), and therefore <b>d = √(2 × A)</b>.</p>`
    },
    {
      type: "widget",
      title: "Area of the rectangle on squared paper",
      widget: "areaGrid",
      options: { w: 5, h: 3, max: 12 },
      caption: "Change base and height and count the little squares: the area is always base × height."
    },
    {
      type: "text",
      title: "Parallelogram and triangle",
      html: `<p><b>Parallelogram</b>: if you cut off the triangle on the left and move it to the right, you get a <b>rectangle</b> with the same base and the same height (they are equidecomposable):</p>
<p style="text-align:center;font-size:1.15em"><b>A = b × h</b> &nbsp;&nbsp; <b>b = A : h</b> &nbsp; <b>h = A : b</b></p>
<p><b>Triangle</b>: two equal triangles placed side by side form a parallelogram. So the triangle is <b>half</b> of the parallelogram with the same base and height:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (b × h) : 2</b> &nbsp;&nbsp; <b>b = (2 × A) : h</b> &nbsp; <b>h = (2 × A) : b</b></p>
<p>In a <b>right triangle</b> the two legs are base and height: A = (c₁ × c₂) : 2. Remember: the height is always <b>perpendicular</b> to the base and can also fall <b>outside</b> the triangle (obtuse triangles).</p>`
    },
    {
      type: "svg",
      title: "From parallelogram to rectangle, from triangle to parallelogram",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<polygon points="40,130 100,40 260,40 200,130" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="40,130 100,40 100,130" fill="#f97316" stroke="#92400e" stroke-width="3"/>
<line x1="100" y1="40" x2="100" y2="130" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="150" y="155" font-size="15" text-anchor="middle" fill="#78350f">base b</text>
<text x="108" y="95" font-size="15" fill="#dc2626">h</text>
<text x="290" y="95" font-size="34" fill="#1f2937">→</text>
<rect x="340" y="40" width="160" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="440,130 500,40 500,130" fill="#f97316" stroke="#92400e" stroke-width="3"/>
<text x="420" y="155" font-size="15" text-anchor="middle" fill="#78350f">rectangle b × h</text>
<polygon points="60,270 140,180 220,270" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="140" y="292" font-size="15" text-anchor="middle" fill="#1e3a8a">triangle</text>
<text x="290" y="235" font-size="34" fill="#1f2937">→</text>
<polygon points="340,270 420,180 500,270" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<polygon points="420,180 580,180 500,270" fill="#a5b4fc" stroke="#1e3a8a" stroke-width="3"/>
<text x="460" y="292" font-size="15" text-anchor="middle" fill="#1e3a8a">2 triangles = parallelogram</text>
</svg>`,
      caption: "By moving one piece the parallelogram becomes a rectangle; by doubling a triangle you get a parallelogram."
    },
    {
      type: "quiz",
      title: "Mini-quiz: the first formulas",
      questions: [
        { type: "num", q: "A rectangle has base 12 cm and height 7 cm. Area?", answer: 84, unit: "cm²", explain: "12 × 7 = 84 cm²." },
        { type: "num", q: "A triangle has area 30 cm² and base 10 cm. How long is the height?", answer: 6, unit: "cm", explain: "h = 2 × 30 : 10 = 6 cm." },
        { type: "num", q: "How many cm² are 3 dm²?", answer: 300, unit: "cm²", explain: "1 dm² = 100 cm² → 3 × 100 = 300 cm²." }
      ]
    },
    {
      type: "text",
      title: "Rhombus and trapezium",
      html: `<p><b>Rhombus</b>: it is contained in a rectangle whose sides are the two diagonals, and takes up exactly <b>half</b> of it:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (D × d) : 2</b> &nbsp;&nbsp; <b>D = (2 × A) : d</b> &nbsp; <b>d = (2 × A) : D</b></p>
<p>The rhombus is also a parallelogram, so A = side × height holds as well. (The formula with the diagonals holds for every quadrilateral with perpendicular diagonals, like the <b>kite</b>.)</p>
<p><b>Trapezium</b> (trapezoid in US English): two equal trapezia, one turned upside down, form a parallelogram with base (B + b) and height h:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (B + b) × h : 2</b> &nbsp;&nbsp; <b>h = (2 × A) : (B + b)</b> &nbsp; <b>B + b = (2 × A) : h</b></p>`
    },
    {
      type: "svg",
      title: "Rhombus and the doubled trapezium",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdfa"/>
<rect x="30" y="40" width="220" height="160" fill="#ccfbf1" stroke="#0f766e" stroke-width="2" stroke-dasharray="8 5"/>
<polygon points="140,40 250,120 140,200 30,120" fill="#14b8a6" stroke="#0f766e" stroke-width="3"/>
<line x1="30" y1="120" x2="250" y2="120" stroke="#fff" stroke-width="3"/>
<line x1="140" y1="40" x2="140" y2="200" stroke="#fff" stroke-width="3"/>
<text x="200" y="113" font-size="16" fill="#fff" font-weight="bold">D</text>
<text x="146" y="70" font-size="16" fill="#fff" font-weight="bold">d</text>
<text x="140" y="230" font-size="16" text-anchor="middle" fill="#134e4a" font-weight="bold">rhombus = half of the rectangle D × d</text>
<polygon points="270,200 310,90 410,90 440,200" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<polygon points="410,90 580,90 540,200 440,200" fill="#ddd6fe" stroke="#5b21b6" stroke-width="3"/>
<text x="360" y="82" font-size="15" text-anchor="middle" fill="#4c1d95">b</text>
<text x="355" y="220" font-size="15" text-anchor="middle" fill="#4c1d95">B</text>
<text x="495" y="82" font-size="15" text-anchor="middle" fill="#4c1d95">B</text>
<text x="490" y="220" font-size="15" text-anchor="middle" fill="#4c1d95">b</text>
<text x="425" y="250" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">2 trapezia = parallelogram</text>
<text x="425" y="272" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">with base B + b</text>
</svg>`,
      caption: "The rhombus takes up half of the rectangle built on its diagonals; two equal trapezia form a parallelogram."
    },
    {
      type: "text",
      title: "Regular polygons and any polygon",
      html: `<p>A <b>regular polygon</b> (all sides and angles equal) can be divided into many <b>equal triangles</b> with their vertex at the centre. The height of each triangle is the <b>apothem</b> (a), the radius of the inscribed circle.</p>
<p style="text-align:center;font-size:1.15em"><b>A = (2p × a) : 2 = p × a</b> &nbsp; (2p = perimeter, p = semiperimeter)</p>
<p>Inverse formulas: <b>a = (2 × A) : 2p</b> &nbsp; <b>2p = (2 × A) : a</b>.</p>
<p>In every regular polygon the ratio apothem/side is a <b>fixed number</b> (f): a = l × f.</p>
<table>
<tr><th>Polygon</th><td>Equilateral triangle</td><td>Square</td><td>Pentagon</td><td>Hexagon</td><td>Octagon</td></tr>
<tr><th>f (a = l·f)</th><td>0.289</td><td>0.5</td><td>0.688</td><td>0.866</td><td>1.207</td></tr>
</table>
<p><b>Irregular polygons</b>: they are <b>broken up</b> into known figures (rectangles, triangles, trapezia) and the areas are added; or you calculate the area of a bigger figure and <b>subtract</b> the extra pieces.</p>`
    },
    {
      type: "example",
      title: "Worked example: tiling the kitchen",
      html: `<p>A rectangular kitchen measures <b>4.5 m × 3.2 m</b>. The tiles are square, with a side of <b>40 cm</b>, and one box holds 10. How many boxes are needed?</p>
<ol>
<li>Floor area: 4.5 × 3.2 = <b>14.4 m²</b>.</li>
<li>Area of one tile: 0.4 × 0.4 = <b>0.16 m²</b>.</li>
<li>Number of tiles: 14.4 : 0.16 = <b>90</b>.</li>
<li>Boxes: 90 : 10 = <b>9</b> (in reality you buy one more for cuts and waste!).</li>
</ol>`
    },
    {
      type: "example",
      title: "Worked example: an irregular plot of land",
      html: `<p>A vegetable garden has the shape of a <b>right trapezium</b> with bases 18 m and 12 m and height 10 m. Inside there is a square pond with a side of 2 m that cannot be planted.</p>
<ol>
<li>Area of the trapezium: (18 + 12) × 10 : 2 = <b>150 m²</b>.</li>
<li>Area of the pond: 2² = <b>4 m²</b>.</li>
<li>Plantable area: 150 − 4 = <b>146 m²</b>.</li>
</ol>
<p>If one bag of fertiliser is enough for 25 m², you need 146 : 25 = 5.84 → <b>6 bags</b>.</p>
<p><b>Inverse formula</b>: and if we knew that the garden is 150 m² with bases 18 and 12 m, the height would be h = 2 × 150 : (18 + 12) = 300 : 30 = <b>10 m</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Areas on the Nile",
      html: `<p>The word <b>geometry</b> means «measuring the earth». According to the Greek historian <b>Herodotus</b> it was born in Egypt: every year the floods of the <b>Nile</b> wiped out the boundaries of the fields and the «rope-stretchers» had to measure them again to work out the taxes. The <b>Rhind papyrus</b> (about 1650 BC) contains problems on the area of triangles, trapezia and even the circle.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Pick's formula",
      html: `<p>In <b>1899</b> the Austrian mathematician <b>Georg Pick</b> discovered a surprising formula for polygons with their vertices on the points of a square grid: <b>A = I + B/2 − 1</b>, where <b>I</b> is the number of <b>interior</b> points and <b>B</b> the number of points on the <b>boundary</b>. You just have to count the dots! Try it on a 2 × 2 square: I = 1, B = 8 → A = 1 + 4 − 1 = 4 ✓.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand areas",
      intro: "Formulas can be discovered by cutting, moving and putting back together. Here are some different roads.",
      tabs: [
        {
          label: "✂️ Cut and rearrange (China)",
          html: `<p>In ancient China the text <b>«The Nine Chapters on the Mathematical Art»</b> (about 2nd–1st century BC) and the commentator <b>Liu Hui</b> (3rd century) used the <b>«out-in» principle</b> (<i>chu ru xiang bu</i>): a figure is cut into pieces that are moved to form a rectangle. The area does not change, because the pieces are the same! It is exactly what we do with the parallelogram, triangle and trapezium.</p>`
        },
        {
          label: "🧩 The tangram",
          html: `<p>The <b>tangram</b> is a Chinese puzzle: a square cut into <b>7 pieces</b> (5 triangles, 1 square, 1 parallelogram). With the same 7 pieces you can make a cat, a boat, a house… and all these figures have <b>the same area</b> as the starting square: they are <b>equidecomposable</b>, so equal in area.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ffffff"/>
<polygon points="40,20 260,20 150,130" fill="#ef4444" stroke="#fff" stroke-width="3"/>
<polygon points="40,20 150,130 40,240" fill="#3b82f6" stroke="#fff" stroke-width="3"/>
<polygon points="260,20 260,130 205,75" fill="#facc15" stroke="#fff" stroke-width="3"/>
<polygon points="205,75 260,130 205,185 150,130" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<polygon points="150,130 205,185 95,185" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<polygon points="260,130 260,240 150,240" fill="#f97316" stroke="#fff" stroke-width="3"/>
<polygon points="40,240 95,185 205,185 150,240" fill="#14b8a6" stroke="#fff" stroke-width="3"/>
<text x="300" y="70" font-size="18" fill="#1f2937" font-weight="bold">7 pieces, 1 square</text>
<text x="300" y="110" font-size="16" fill="#334155">2 large triangles = 1/2</text>
<text x="300" y="138" font-size="16" fill="#334155">1 medium triangle = 1/8</text>
<text x="300" y="166" font-size="16" fill="#334155">2 small triangles = 1/8</text>
<text x="300" y="194" font-size="16" fill="#334155">1 little square = 1/8</text>
<text x="300" y="222" font-size="16" fill="#334155">1 parallelogram = 1/8</text>
<text x="300" y="256" font-size="16" fill="#be185d" font-weight="bold">Total = 1 whole square</text>
</svg>`
        },
        {
          label: "🧊 Cubes in 3D",
          html: `<p>The area of the rectangle is the number of little squares in rows and columns: here you see <b>4 × 6 = 24</b> (think of the top face of the cubes). Change the sliders: base and height always multiply. And what if you put another layer of cubes on top? You go from <b>area</b> to <b>volume</b>!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 4, b: 6 }
        },
        {
          label: "🔺 The hexagonal prism",
          html: `<p>Rotate the prism: its base is a <b>regular hexagon</b>. If you look at it from above you see that the hexagon divides into <b>6 equal equilateral triangles</b> with their vertex at the centre. The height of each is the <b>apothem</b>: that is why A = perimeter × apothem : 2 (6 triangles × side × apothem : 2).</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 0.6, color: "#f59e0b", labels: true }
        },
        {
          label: "🃏 Formulas by heart",
          html: `<p>Match each figure with its formula.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Rectangle", "b × h"],
              ["Square", "l²"],
              ["Triangle", "b × h : 2"],
              ["Rhombus", "D × d : 2"],
              ["Trapezium", "(B + b) × h : 2"],
              ["Regular polygon", "2p × a : 2"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of areas",
      nodes: [
        { id: "area", label: "Area", x: 50, y: 6, color: "#0f172a", html: "Measure of a surface in square units.", why: "Measuring an area means counting how many square units fit inside. The metric system, with the m², was born in France in <b>1795</b>; in Italy it has been compulsory since 1861." },
        { id: "equi", label: "Equal area", x: 50, y: 24, color: "#7c3aed", html: "Different figures with the same area.", why: "It is based on an idea Euclid puts among the «common notions»: <i>things that coincide with one another are equal</i> and <i>the whole is greater than the part</i>. If you move pieces around without losing any, the area stays the same." },
        { id: "rett", label: "Rectangle", x: 18, y: 42, color: "#2563eb", html: "A = b × h.", why: "It is the «base» figure because it is filled exactly with rows of little squares: b squares for h rows. All the other formulas come from turning figures into rectangles." },
        { id: "parall", label: "Parallelogram", x: 42, y: 50, color: "#0891b2", html: "A = b × h.", why: "By cutting a triangle from one side and moving it to the other it becomes a rectangle with the same base and height (Euclid, Elements I, 35: parallelograms on the same base and between the same parallels are equal)." },
        { id: "tri", label: "Triangle", x: 66, y: 46, color: "#16a34a", html: "A = b × h : 2.", why: "Two equal triangles form a parallelogram (Euclid I, 41). That is why the «: 2» appears. Every polygon can be divided into triangles: that is why the triangle is the «building block» of geometry." },
        { id: "rombo", label: "Rhombus", x: 84, y: 66, color: "#db2777", html: "A = D × d : 2.", why: "The diagonals are perpendicular and divide the rhombus into 4 equal right triangles; the rectangle built on the diagonals contains 8 of them." },
        { id: "trap", label: "Trapezium", x: 60, y: 76, color: "#ca8a04", html: "A = (B + b) × h : 2.", why: "Two equal trapezia, one turned upside down, form a parallelogram with base B + b. This formula was already known to the <b>Egyptians</b> and <b>Babylonians</b> for measuring fields." },
        { id: "reg", label: "Regular polygons", x: 30, y: 76, color: "#ea580c", html: "A = 2p × a : 2; a = l × f.", why: "They are divided into n equal triangles whose height is the apothem. The fixed number f depends only on the shape (on the angles), not on the size: it is a consequence of <b>similarity</b>." },
        { id: "inv", label: "Inverse formulas", x: 18, y: 94, color: "#64748b", html: "Finding a side or a height from the area.", why: "You get them by «undoing» the operations in the opposite order: if A = b × h : 2, then 2A = b × h and h = 2A : b. It is the same reasoning as in equations, which you will study in the third year of middle school." }
      ],
      edges: [
        ["area", "equi", "is compared with"],
        ["equi", "rett", "leads back to"],
        ["rett", "parall", "cut and move"],
        ["parall", "tri", "half"],
        ["tri", "rombo", "4 triangles"],
        ["parall", "trap", "half of 2 trapezia"],
        ["tri", "reg", "n triangles"],
        ["rett", "inv", "are used backwards"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: rhombus, trapezium, polygons",
      questions: [
        { type: "num", q: "A rhombus has diagonals of 16 cm and 10 cm. Area?", answer: 80, unit: "cm²", explain: "16 × 10 : 2 = 80 cm²." },
        { type: "num", q: "A trapezium has bases 9 cm and 5 cm and height 4 cm. Area?", answer: 28, unit: "cm²", explain: "(9 + 5) × 4 : 2 = 28 cm²." },
        { type: "num", q: "A regular hexagon has perimeter 60 cm and apothem 8.66 cm. Area?", answer: 259.8, tol: 0.1, unit: "cm²", explain: "60 × 8.66 : 2 = 259.8 cm²." }
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<table>
<tr><th>Figure</th><th>Area</th><th>Inverse formulas</th></tr>
<tr><td>Rectangle / parallelogram</td><td>b × h</td><td>b = A : h; h = A : b</td></tr>
<tr><td>Square</td><td>l² (or d² : 2)</td><td>l = √A</td></tr>
<tr><td>Triangle</td><td>b × h : 2</td><td>b = 2A : h; h = 2A : b</td></tr>
<tr><td>Rhombus</td><td>D × d : 2</td><td>D = 2A : d; d = 2A : D</td></tr>
<tr><td>Trapezium</td><td>(B + b) × h : 2</td><td>h = 2A : (B + b); B + b = 2A : h</td></tr>
<tr><td>Regular polygon</td><td>2p × a : 2</td><td>a = 2A : 2p; 2p = 2A : a</td></tr>
</table>`
    }
  ],
  glossary: [
    { t: "Surface", d: "The part of the plane enclosed by a figure." },
    { t: "Area", d: "The measure of a surface." },
    { t: "Equal in area", d: "Figures that have the same area." },
    { t: "Equidecomposable", d: "Figures made of the same pieces arranged differently." },
    { t: "Height", d: "A segment perpendicular to the base drawn from the opposite vertex (or the opposite side)." },
    { t: "Apothem", d: "The distance from the centre of a regular polygon to one of its sides; the radius of the inscribed circle." },
    { t: "Fixed number", d: "The constant ratio between the apothem and the side of a regular polygon." },
    { t: "Inverse formula", d: "A formula that finds an element (base, height…) when you know the area." },
    { t: "Hectare", d: "A unit of farmland area equal to 10 000 m²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "A square has a side of 9 cm. Area?", answer: 81, unit: "cm²", explain: "9² = 81 cm²." },
      { type: "num", q: "A square has an area of 144 m². How long is its side?", answer: 12, unit: "m", explain: "√144 = 12 m." },
      { type: "num", q: "A parallelogram has an area of 96 cm² and a height of 8 cm. How long is the base?", answer: 12, unit: "cm", explain: "b = 96 : 8 = 12 cm." },
      { type: "num", q: "A right triangle has legs of 6 cm and 8 cm. Area?", answer: 24, unit: "cm²", explain: "6 × 8 : 2 = 24 cm²." },
      { type: "num", q: "A rhombus has an area of 60 cm² and one diagonal of 12 cm. How long is the other diagonal?", answer: 10, unit: "cm", explain: "d = 2 × 60 : 12 = 10 cm." },
      { type: "num", q: "A trapezium has an area of 50 cm² and a height of 5 cm. What is the sum of the bases?", answer: 20, unit: "cm", explain: "B + b = 2 × 50 : 5 = 20 cm." },
      { type: "mc", q: "How many times bigger is a m² than a dm²?", options: ["10", "100", "1000"], answer: 1, explain: "Units of area go up by 100 each step." },
      { type: "tf", q: "Two equidecomposable figures always have the same area.", answer: true, explain: "They are made of the same pieces: the area is the same." },
      { type: "tf", q: "If you double the side of a square, the area doubles.", answer: false, explain: "The area becomes 4 times bigger: (2l)² = 4l²." },
      { type: "mc", q: "One hectare is equal to…", options: ["100 m²", "1000 m²", "10 000 m²"], answer: 2, explain: "1 ha = 1 hm² = 10 000 m²." },
      { type: "num", q: "A square has a side of 10 cm. Calculate the apothem with the fixed number 0.5.", answer: 5, unit: "cm", explain: "a = 10 × 0.5 = 5 cm (half the side)." },
      { type: "order", q: "Order the figures from the smallest area to the largest: all have base 6 and height 4 (for the trapezium the shorter base is 2).", items: ["Triangle", "Trapezium", "Rectangle"], explain: "6×4:2 = 12; (6+2)×4:2 = 16; 6×4 = 24." }
    ],
    gen: [["areaRect", 2], ["areaTri", 2]]
  }
});
