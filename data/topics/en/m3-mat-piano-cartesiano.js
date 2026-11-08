TOPIC('en', {
  id: "m3-mat-piano-cartesiano",
  title: "The Cartesian plane",
  intro: "Battleships, maps, GPS, video-game screens: to point to a spot all you need is a <b>pair of numbers</b>. This is the brilliant idea of the <b>Cartesian plane</b>, which joins geometry and algebra. Let's learn to use coordinates, to calculate distances and to draw <b>functions</b> and <b>lines</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Axes, origin, coordinates",
      html: `<p>The <b>Cartesian plane</b> is made of two <b>perpendicular</b> number lines:</p>
<ul>
<li>the <b>x-axis</b> (the <b>abscissa</b> axis), horizontal;</li>
<li>the <b>y-axis</b> (the <b>ordinate</b> axis), vertical;</li>
<li>they meet at the <b>origin O(0; 0)</b>.</li>
</ul>
<p>Every point P is identified by an <b>ordered pair</b> of numbers, its <b>coordinates</b>: <b>P(x; y)</b>. First you read the <b>x-coordinate</b> (horizontal movement), then the <b>y-coordinate</b> (vertical movement). The order matters: A(2; 5) and B(5; 2) are different points!</p>
<p>The axes divide the plane into <b>four quadrants</b>, numbered anticlockwise:</p>
<ul>
<li>1st quadrant: x &gt; 0, y &gt; 0 &nbsp;(+; +)</li>
<li>2nd quadrant: x &lt; 0, y &gt; 0 &nbsp;(−; +)</li>
<li>3rd quadrant: x &lt; 0, y &lt; 0 &nbsp;(−; −)</li>
<li>4th quadrant: x &gt; 0, y &lt; 0 &nbsp;(+; −)</li>
</ul>
<p>Points on the x-axis have y = 0; those on the y-axis have x = 0.</p>`
    },
    {
      type: "svg",
      title: "The Cartesian plane and the four quadrants",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#ffffff"/>
<g stroke="#e2e8f0" stroke-width="1">
<line x1="140" y1="20" x2="140" y2="320"/><line x1="180" y1="20" x2="180" y2="320"/><line x1="220" y1="20" x2="220" y2="320"/><line x1="260" y1="20" x2="260" y2="320"/><line x1="300" y1="20" x2="300" y2="320"/><line x1="340" y1="20" x2="340" y2="320"/><line x1="380" y1="20" x2="380" y2="320"/><line x1="420" y1="20" x2="420" y2="320"/><line x1="460" y1="20" x2="460" y2="320"/><line x1="500" y1="20" x2="500" y2="320"/>
<line x1="100" y1="50" x2="540" y2="50"/><line x1="100" y1="90" x2="540" y2="90"/><line x1="100" y1="130" x2="540" y2="130"/><line x1="100" y1="210" x2="540" y2="210"/><line x1="100" y1="250" x2="540" y2="250"/><line x1="100" y1="290" x2="540" y2="290"/>
</g>
<line x1="100" y1="170" x2="545" y2="170" stroke="#1f2937" stroke-width="3"/>
<polygon points="550,170 538,164 538,176" fill="#1f2937"/>
<line x1="320" y1="325" x2="320" y2="15" stroke="#1f2937" stroke-width="3"/>
<polygon points="320,10 314,22 326,22" fill="#1f2937"/>
<text x="555" y="190" font-size="20" fill="#1f2937" font-weight="bold">x</text>
<text x="330" y="22" font-size="20" fill="#1f2937" font-weight="bold">y</text>
<text x="305" y="190" font-size="16" fill="#1f2937">O</text>
<text x="470" y="40" font-size="18" fill="#2563eb" font-weight="bold">I (+;+)</text>
<text x="120" y="40" font-size="18" fill="#16a34a" font-weight="bold">II (−;+)</text>
<text x="120" y="315" font-size="18" fill="#dc2626" font-weight="bold">III (−;−)</text>
<text x="460" y="315" font-size="18" fill="#a855f7" font-weight="bold">IV (+;−)</text>
<line x1="440" y1="170" x2="440" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="320" y1="50" x2="440" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="440" cy="50" r="7" fill="#2563eb"/>
<text x="450" y="75" font-size="17" fill="#2563eb" font-weight="bold">A(3; 3)</text>
<circle cx="200" cy="90" r="7" fill="#16a34a"/>
<text x="150" y="80" font-size="17" fill="#16a34a" font-weight="bold">B(−3; 2)</text>
<circle cx="240" cy="250" r="7" fill="#dc2626"/>
<text x="180" y="275" font-size="17" fill="#dc2626" font-weight="bold">C(−2; −2)</text>
<circle cx="480" cy="210" r="7" fill="#a855f7"/>
<text x="490" y="235" font-size="17" fill="#a855f7" font-weight="bold">D(4; −1)</text>
<g font-size="13" fill="#475569" text-anchor="middle"><text x="360" y="188">1</text><text x="400" y="188">2</text><text x="440" y="188">3</text><text x="480" y="188">4</text><text x="280" y="188">−1</text><text x="240" y="188">−2</text><text x="200" y="188">−3</text></g>
</svg>`,
      caption: "Each square of the grid is one unit. To find A(3; 3): 3 steps to the right, then 3 up."
    },
    {
      type: "text",
      title: "Distance between two points and midpoint",
      html: `<ul>
<li><b>Horizontal segment</b> (same y): distance = difference of the x-coordinates in absolute value. A(1; 4), B(7; 4) → AB = |7 − 1| = <b>6</b>.</li>
<li><b>Vertical segment</b> (same x): difference of the y-coordinates. C(2; −3), D(2; 5) → CD = |5 − (−3)| = <b>8</b>.</li>
<li><b>Slanting segment</b>: it is the hypotenuse of a right triangle! You use the <b>Pythagorean theorem</b>:<br><b>AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>.<br>A(1; 2), B(4; 6) → AB = √(3² + 4²) = √25 = <b>5</b>.</li>
<li><b>Midpoint</b> M of AB: the average of the coordinates: <b>M((x₁ + x₂)/2; (y₁ + y₂)/2)</b>. A(2; 1), B(8; 5) → M(5; 3).</li>
</ul>
<p>With coordinates you can calculate the <b>perimeters and areas</b> of polygons drawn in the plane.</p>`
    },
    {
      type: "widget",
      title: "Pythagoras in the plane",
      widget: "pythagoras",
      options: {},
      caption: "The legs are the horizontal (Δx) and vertical (Δy) displacements between the two points; the hypotenuse is their distance."
    },
    {
      type: "quiz",
      title: "Mini-quiz: coordinates and distances",
      questions: [
        { type: "mc", q: "In which quadrant is P(−4; 7)?", options: ["I", "II", "III", "IV"], answer: 1, explain: "Negative x and positive y: 2nd quadrant." },
        { type: "num", q: "Distance between A(−2; 3) and B(6; 3)?", answer: 8, explain: "Same y-coordinate: |6 − (−2)| = 8." },
        { type: "num", q: "Distance between O(0; 0) and P(6; 8)?", answer: 10, explain: "√(36 + 64) = √100 = 10." }
      ]
    },
    {
      type: "text",
      title: "Functions and their graphs",
      html: `<p>A <b>function</b> is a relation that associates with each value of <b>x</b> <b>one and only one</b> value of <b>y</b>. It is written <b>y = f(x)</b>. To draw it: make a <b>table</b> of values (x; y), plot the points in the plane and join them.</p>
<ul>
<li><b>Direct proportionality</b> <b>y = kx</b>: if x doubles, y doubles. The graph is a <b>straight line through the origin</b>. Example: cost = €2 × number of notebooks.</li>
<li><b>Inverse proportionality</b> <b>y = k/x</b>: if x doubles, y halves (xy = k constant). The graph is a <b>branch of a hyperbola</b>. Example: time for a 120 km journey = 120 / speed.</li>
<li><b>Linear function</b> <b>y = mx + q</b>: the graph is a <b>straight line</b>. Example: a taxi with a €3 starting fee and €1.50 per km → y = 1.5x + 3.</li>
<li><b>Quadratic function</b> <b>y = ax²</b>: the graph is a <b>parabola</b> with its vertex at the origin. Example: area of a square as a function of its side.</li>
</ul>`
    },
    {
      type: "text",
      title: "The line: y = mx + q",
      html: `<ul>
<li><b>m</b> is the <b>slope</b> (gradient): by how much y goes up when x increases by 1. If m &gt; 0 the line <b>rises</b>, if m &lt; 0 it <b>falls</b>, if m = 0 it is <b>horizontal</b>. It is calculated with two points: <b>m = (y₂ − y₁) / (x₂ − x₁)</b>.</li>
<li><b>q</b> is the <b>y-intercept</b>: the point where the line cuts the y-axis, that is, (0; q).</li>
<li>Special cases: <b>y = k</b> is a horizontal line; <b>x = k</b> is a vertical line (not a function!); the x-axis has equation y = 0, the y-axis x = 0; <b>y = x</b> is the bisector of the 1st and 3rd quadrants.</li>
<li><b>Parallel</b> lines: same m (y = 2x + 1 and y = 2x − 5).</li>
<li><b>Perpendicular</b> lines: m · m′ = −1 (y = 2x and y = −½x + 3).</li>
<li>A point <b>belongs</b> to a line if its coordinates satisfy the equation: is P(2; 7) on y = 3x + 1? 3·2 + 1 = 7 ✔️</li>
</ul>`
    },
    {
      type: "svg",
      title: "Lines compared",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<line x1="60" y1="190" x2="440" y2="190" stroke="#1f2937" stroke-width="2"/>
<line x1="250" y1="330" x2="250" y2="10" stroke="#1f2937" stroke-width="2"/>
<text x="445" y="195" font-size="16">x</text><text x="256" y="20" font-size="16">y</text>
<line x1="170" y1="350" x2="350" y2="-10" stroke="#2563eb" stroke-width="4"/>
<line x1="130" y1="350" x2="290" y2="30" stroke="#60a5fa" stroke-width="4" stroke-dasharray="10 6"/>
<line x1="60" y1="95" x2="440" y2="285" stroke="#dc2626" stroke-width="4"/>
<line x1="60" y1="110" x2="440" y2="110" stroke="#16a34a" stroke-width="4"/>
<circle cx="250" cy="190" r="6" fill="#1f2937"/>
<circle cx="250" cy="110" r="6" fill="#16a34a"/>
<text x="460" y="60" font-size="18" fill="#2563eb" font-weight="bold">y = 2x  (rises, through O)</text>
<text x="460" y="95" font-size="18" fill="#60a5fa" font-weight="bold">y = 2x + 2  (parallel)</text>
<text x="460" y="130" font-size="18" fill="#dc2626" font-weight="bold">y = −½x  (falls,</text>
<text x="478" y="152" font-size="18" fill="#dc2626" font-weight="bold">perpendicular to y = 2x)</text>
<text x="460" y="190" font-size="18" fill="#16a34a" font-weight="bold">y = 2  (horizontal, m = 0)</text>
<text x="460" y="240" font-size="15" fill="#475569">1 square = 40 px</text>
</svg>`,
      caption: "The two blue lines have the same slope m = 2: they are parallel. The red one has m = −½: 2 · (−½) = −1, so it is perpendicular to the blue one."
    },
    {
      type: "example",
      title: "Worked example: two memberships compared",
      html: `<p>Gym A: <b>€30 joining fee + €20 a month</b>. Gym B: <b>no joining fee, €26 a month</b>.</p>
<ul>
<li>A: y = 20x + 30 &nbsp;&nbsp; B: y = 26x</li>
<li>When do they cost the same? 20x + 30 = 26x → 6x = 30 → <b>x = 5 months</b> (cost €130).</li>
<li>On the graph it is the point where the two lines <b>cross</b>: (5; 130). Before 5 months B is better value, after that A is.</li>
</ul>
<table><tr><th>months</th><th>1</th><th>3</th><th>5</th><th>8</th><th>12</th></tr><tr><td>A</td><td>50</td><td>90</td><td>130</td><td>190</td><td>270</td></tr><tr><td>B</td><td>26</td><td>78</td><td>130</td><td>208</td><td>312</td></tr></table>`
    },
    {
      type: "example",
      title: "Worked example: a polygon in the plane",
      html: `<p>Draw the points A(1; 1), B(7; 1), C(7; 5), D(1; 5).</p>
<ul>
<li>It is a <b>rectangle</b>: AB = 7 − 1 = 6, BC = 5 − 1 = 4.</li>
<li>Perimeter = 2·(6 + 4) = <b>20</b> units; Area = 6 · 4 = <b>24</b> square units.</li>
<li>Diagonal AC = √(6² + 4²) = √52 ≈ <b>7.21</b>.</li>
<li>Centre (midpoint of AC) = ((1 + 7)/2; (1 + 5)/2) = <b>(4; 3)</b>.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Descartes and the fly",
      html: `<p>The plane is named after the French philosopher and mathematician <b>René Descartes</b> (in Latin <i>Cartesius</i>, 1596–1650), who described it in the <i>Géométrie</i>, an appendix to the <i>Discourse on Method</i> (1637). A legend says he had the idea in bed, watching a <b>fly</b> on the ceiling and wondering how to describe its position with two numbers: the distances from two walls! In the same years another Frenchman reached the same idea independently: <b>Pierre de Fermat</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Coordinates everywhere",
      html: `<ul>
<li>The <b>screen</b> you are reading on is a grid of pixels with coordinates: but in computers the origin is at the <b>top left</b> and y grows downwards!</li>
<li><b>GPS</b> uses latitude and longitude: coordinates on a sphere. Rome is at about (41.9° N; 12.5° E).</li>
<li><b>Chess</b> uses coordinates: "Knight to f3" = column f, row 3.</li>
<li>Many cities are built on a grid, like <b>Manhattan</b> (plan of 1811) or the centre of <b>Turin</b>, which keeps the orthogonal layout of the Roman <i>castrum</i> of <i>Augusta Taurinorum</i>.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>P(x; y): first the x-coordinate (horizontal), then the y-coordinate (vertical).</li>
<li>Distance: AB = √[(Δx)² + (Δy)²]; midpoint = average of the coordinates.</li>
<li>y = kx → line through the origin (direct proportionality); y = k/x → hyperbola (inverse proportionality).</li>
<li>y = mx + q: m = slope, q = intercept. Parallel: same m. Perpendicular: m·m′ = −1.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the Cartesian plane",
      intro: "If the axes and formulas seem abstract, try a game, the globe or a staircase.",
      tabs: [
        {
          label: "🚢 Battleships",
          html: `<p>In <b>Battleships</b> you say "B5": a <b>column</b> (letter) and a <b>row</b> (number). It is exactly a pair of coordinates!</p>
<p>In the Cartesian plane it is the same, but: the columns are numbers (even negative ones), the origin is in the middle, and you say <b>x</b> (column) first and then <b>y</b> (row). Trick to remember the order: "<b>first you walk, then you climb the stairs</b>" (first horizontal, then vertical), or "x comes before y in the alphabet".</p>
<p>Play with a friend: draw a grid from −5 to 5 and hide 3 ships. "Fire" with pairs like (−2; 3)!</p>`
        },
        {
          label: "🌍 The Earth's coordinates",
          html: `<p>The Earth uses a "Cartesian plane" wrapped round a sphere: <b>longitude</b> (east-west, like x) and <b>latitude</b> (north-south, like y). The "origin" is the crossing of the <b>equator</b> and the <b>Greenwich meridian</b>, in the middle of the Atlantic Ocean, in the Gulf of Guinea.</p>
<p>The four "quadrants" are: North-East (Italy), North-West (USA), South-West (Brazil), South-East (Australia). Rotate the globe and find the points.</p>`,
          scene: "globe",
          options: { points: [
            { lat: 0, lon: 0, label: "Origin (0°; 0°)", color: "#1f2937" },
            { lat: 41.9, lon: 12.5, label: "Rome (N; E)", color: "#2563eb" },
            { lat: 40.7, lon: -74, label: "New York (N; W)", color: "#16a34a" },
            { lat: -22.9, lon: -43.2, label: "Rio de Janeiro (S; W)", color: "#dc2626" },
            { lat: -33.9, lon: 151.2, label: "Sydney (S; E)", color: "#a855f7" }
          ] }
        },
        {
          label: "🪜 Slope like a staircase",
          html: `<p>The slope <b>m</b> is like the <b>steepness of a staircase or a road</b>: "how much you climb for every step forward".</p>
<ul>
<li>m = 1: for every step forward you climb 1 (a 100% slope, 45°).</li>
<li>m = 0.1: for every 10 m forward you climb 1 m: it is the <b>10%</b> slope of road signs!</li>
<li>negative m: the road goes downhill.</li>
</ul>
<p>In the United States it is taught with the formula "<b>rise over run</b>": m = Δy / Δx.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0fdf4"/>
<path d="M60 210 L140 210 L140 170 L220 170 L220 130 L300 130 L300 90 L380 90 L380 50" fill="none" stroke="#166534" stroke-width="5"/>
<line x1="60" y1="210" x2="380" y2="50" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 6"/>
<text x="100" y="232" font-size="16" text-anchor="middle" fill="#b45309">run = 2</text>
<text x="165" y="195" font-size="16" fill="#dc2626">rise = 1</text>
<text x="430" y="110" font-size="22" fill="#1f2937" font-weight="bold">m = rise / run</text>
<text x="430" y="145" font-size="22" fill="#2563eb" font-weight="bold">= 1/2</text>
</svg>`
        },
        {
          label: "🔗 Match equation and graph",
          html: `<p>Link each equation to the description of its graph.</p>`,
          widget: "match",
          options: { pairs: [
            ["y = 3x", "rising line through the origin"],
            ["y = −2x + 4", "falling line that cuts the y-axis at 4"],
            ["y = 5", "horizontal line"],
            ["x = −1", "vertical line"],
            ["y = 12/x", "hyperbola (inverse proportionality)"],
            ["y = x²", "parabola with vertex at O"]
          ] }
        },
        {
          "label": "🇬🇧 «Along the corridor, then up the stairs» (England)",
          "html": "<p>Which is x and which is y? In <b>England</b> kids remember it with a phrase: <b>«along the corridor, then up the stairs»</b>.</p><ol><li>Start from the <b>origin</b> O, as if you were at the entrance of a building.</li><li><b>First</b> you walk along the corridor: that is <b>x</b> (horizontal). At the point (3; 5) you take 3 steps to the right.</li><li><b>Then</b> you climb the stairs: that is <b>y</b> (vertical). You climb 5 steps.</li></ol><p>You can't climb the stairs before you have reached the right spot in the corridor: that is why <b>x always comes first</b>. And negatives? At the point (−2; −4) the corridor goes to the <b>left</b> and the stairs go down <b>to the cellar</b>!</p><p>🎯 Where do you end up with (−3; 2)? And with (4; −1)? In which quadrant is each point?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"98\" y1=\"20\" x2=\"98\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"132\" y1=\"20\" x2=\"132\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"166\" y1=\"20\" x2=\"166\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"234\" y1=\"20\" x2=\"234\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"268\" y1=\"20\" x2=\"268\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"302\" y1=\"20\" x2=\"302\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"336\" y1=\"20\" x2=\"336\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"404\" y1=\"20\" x2=\"404\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"438\" y1=\"20\" x2=\"438\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"472\" y1=\"20\" x2=\"472\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"506\" y1=\"20\" x2=\"506\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"540\" y1=\"20\" x2=\"540\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"284\" x2=\"560\" y2=\"284\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"250\" x2=\"560\" y2=\"250\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"216\" x2=\"560\" y2=\"216\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"182\" x2=\"560\" y2=\"182\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"148\" x2=\"560\" y2=\"148\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"114\" x2=\"560\" y2=\"114\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"80\" x2=\"560\" y2=\"80\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"46\" x2=\"560\" y2=\"46\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"250\" x2=\"560\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"200\" y1=\"290\" x2=\"200\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"565\" y=\"255\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">x</text><text x=\"206\" y=\"24\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">y</text><line x1=\"200\" y1=\"246\" x2=\"302\" y2=\"246\" stroke=\"#16a34a\" stroke-width=\"8\"/><line x1=\"302\" y1=\"250\" x2=\"302\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"5\"/><line x1=\"292\" y1=\"216\" x2=\"312\" y2=\"216\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"182\" x2=\"312\" y2=\"182\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"148\" x2=\"312\" y2=\"148\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"114\" x2=\"312\" y2=\"114\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"80\" x2=\"312\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"4\"/><circle cx=\"302\" cy=\"80\" r=\"8\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"316\" y=\"74\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">(3; 5)</text><text x=\"222\" y=\"280\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">1) along the corridor →</text><text x=\"340\" y=\"150\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#ea580c\" font-weight=\"bold\">2) up the stairs ↑</text><circle cx=\"200\" cy=\"250\" r=\"5\" fill=\"#334155\" stroke=\"none\" stroke-width=\"2\"/><text x=\"182\" y=\"270\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">O</text></svg>"
        },
        {
          "label": "🇺🇸 Slope as «rise over run» (USA)",
          "html": "<p>In the <b>United States</b> the slope m (in English <i>slope</i>) is learned with a catchphrase: <b>«rise over run»</b>.</p><ul><li><b>run</b> = how far you move horizontally (difference of the x's);</li><li><b>rise</b> = how far you go up vertically (difference of the y's);</li><li><b>m = rise : run</b>.</li></ul><p><b>Example</b>: the line passes through A(1; 2) and B(5; 4).</p><ol><li>run = 5 − 1 = <b>4</b></li><li>rise = 4 − 2 = <b>2</b></li><li>m = 2 / 4 = <b>1/2</b>: for every step forward you go up half a square.</li><li>Find q with the point A: 2 = ½ · 1 + q → q = 3/2. The line is <b>y = ½x + 3/2</b>. Check with B: ½ · 5 + 3/2 = 4 ✔</li></ol><p>Special cases: if the line <b>falls</b>, the rise is <b>negative</b> and m &lt; 0; if it is <b>horizontal</b>, rise = 0 and m = 0; if it is <b>vertical</b>, run = 0 and you can't divide by zero: the slope does not exist.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"200\" y1=\"10\" x2=\"200\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"260\" y1=\"10\" x2=\"260\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"320\" y1=\"10\" x2=\"320\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"380\" y1=\"10\" x2=\"380\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"440\" y1=\"10\" x2=\"440\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"500\" y1=\"10\" x2=\"500\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"260\" x2=\"520\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"210\" x2=\"520\" y2=\"210\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"160\" x2=\"520\" y2=\"160\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"110\" x2=\"520\" y2=\"110\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"60\" x2=\"520\" y2=\"60\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"10\" x2=\"520\" y2=\"10\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"260\" x2=\"530\" y2=\"260\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"80\" y1=\"270\" x2=\"80\" y2=\"5\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"140\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"200\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">2</text><text x=\"260\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">3</text><text x=\"320\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">4</text><text x=\"380\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">5</text><text x=\"440\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">6</text><text x=\"500\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">7</text><text x=\"68\" y=\"215\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">1</text><text x=\"68\" y=\"165\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">2</text><text x=\"68\" y=\"115\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">3</text><text x=\"68\" y=\"65\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">4</text><text x=\"68\" y=\"15\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">5</text><line x1=\"80\" y1=\"185\" x2=\"500\" y2=\"10\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"140\" y1=\"160\" x2=\"380\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"5\"/><line x1=\"380\" y1=\"160\" x2=\"380\" y2=\"60\" stroke=\"#ea580c\" stroke-width=\"5\"/><circle cx=\"140\" cy=\"160\" r=\"7\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"380\" cy=\"60\" r=\"7\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><text x=\"130\" y=\"146\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">A(1; 2)</text><text x=\"366\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">B(5; 4)</text><text x=\"260\" y=\"184\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\" font-weight=\"bold\">run = 4</text><text x=\"390\" y=\"115\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#ea580c\" font-weight=\"bold\">rise = 2</text><text x=\"380\" y=\"200\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">m = rise / run</text><text x=\"380\" y=\"226\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">m = 2 / 4 = 1/2</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the Cartesian plane",
      nodes: [
        { id: "retta", label: "Number line", x: 50, y: 6, color: "#64748b", html: "A line with origin, direction and unit: every point is a number.", why: "It comes from signed numbers: a single line is enough for one dimension. For the plane you need two." },
        { id: "piano", label: "Cartesian plane", x: 50, y: 26, color: "#2563eb", html: "Two perpendicular number lines meeting at the origin.", why: "Described by Descartes in the <i>Géométrie</i> (1637) and, independently, by Fermat. The ancients already used something similar: Ptolemy (2nd century) gave the latitude and longitude of cities." },
        { id: "coordinate", label: "Coordinates P(x; y)", x: 18, y: 46, color: "#16a34a", html: "Abscissa and ordinate: the 'identity card' of a point.", why: "'Abscissa' comes from the Latin <i>abscissa</i>, 'cut off' (a segment cut off on the axis); 'coordinates' was used by Leibniz in 1692." },
        { id: "quadranti", label: "Quadrants", x: 10, y: 70, color: "#22c55e", html: "The 4 regions of the plane, with signs (+;+), (−;+), (−;−), (+;−).", why: "They are a consequence of signed numbers on the axes; they are numbered anticlockwise, the same direction in which angles are measured in mathematics." },
        { id: "distanza", label: "Distance and midpoint", x: 36, y: 72, color: "#f59e0b", html: "AB = √[(Δx)² + (Δy)²]; M = average of the coordinates.", why: "The distance formula is the Pythagorean theorem (6th century BC) applied to the right triangle formed by the horizontal and vertical displacements." },
        { id: "funzioni", label: "Functions y = f(x)", x: 72, y: 46, color: "#a855f7", html: "To each x corresponds a single y; the graph is the set of points (x; f(x)).", why: "The term 'function' was introduced by Leibniz (1673) and the notation f(x) by Euler (1734). The Cartesian plane lets us 'see' a numerical law." },
        { id: "rette", label: "Lines y = mx + q", x: 64, y: 72, color: "#ef4444", html: "m = slope, q = intercept. Parallel: same m; perpendicular: m·m′ = −1.", why: "Every first-degree equation in x and y has a line as its graph: it is Descartes's great discovery, which turns geometric problems into equations." },
        { id: "proporzionalita", label: "Proportionality", x: 88, y: 70, color: "#0ea5e9", html: "Direct y = kx (line through O); inverse y = k/x (hyperbola).", why: "It links the plane to the proportions studied in year 2: the constant k is the ratio (direct) or the product (inverse) of x and y." },
        { id: "applicazioni", label: "Applications", x: 50, y: 92, color: "#14b8a6", html: "GPS, screens, scientific and economic graphs, video games, robotics.", why: "Whenever a position or a relation between two quantities has to be described with numbers, coordinates are used: from pixels to digital maps." }
      ],
      edges: [
        ["retta", "piano", "two perpendicular"],
        ["piano", "coordinate", "every point has"],
        ["coordinate", "quadranti", "the sign shows"],
        ["coordinate", "distanza", "let us calculate"],
        ["piano", "funzioni", "represents"],
        ["funzioni", "rette", "linear"],
        ["funzioni", "proporzionalita", "cases"],
        ["rette", "applicazioni", "model"],
        ["distanza", "applicazioni", "used in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: lines and functions",
      questions: [
        { type: "mc", q: "The line y = −3x + 2 cuts the y-axis at the point…", options: ["(0; 2)", "(2; 0)", "(0; −3)"], answer: 0, explain: "The y-intercept q = 2: point (0; 2)." },
        { type: "mc", q: "Which line is parallel to y = 4x − 1?", options: ["y = −4x + 1", "y = 4x + 7", "y = ¼x"], answer: 1, explain: "Parallel lines have the same slope m = 4." },
        { type: "tf", q: "The point P(3; 10) belongs to the line y = 3x + 1.", answer: true, explain: "3·3 + 1 = 10 ✔️" }
      ]
    }
  ],
  glossary: [
    { t: "Cartesian plane", d: "Plane with two perpendicular number axes meeting at the origin." },
    { t: "Abscissa", d: "The first coordinate (x): horizontal movement." },
    { t: "Ordinate", d: "The second coordinate (y): vertical movement." },
    { t: "Origin", d: "The point O(0; 0), where the axes cross." },
    { t: "Quadrant", d: "Each of the four parts into which the axes divide the plane." },
    { t: "Function", d: "Relation that associates with each x one and only one y." },
    { t: "Slope", d: "The number m in y = mx + q: it shows the steepness of the line." },
    { t: "y-intercept", d: "The number q in y = mx + q: where the line cuts the y-axis." },
    { t: "Hyperbola", d: "The graph of inverse proportionality y = k/x." },
    { t: "Parabola", d: "The graph of y = ax²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "The point (0; −5) lies…", options: ["on the x-axis", "on the y-axis", "in the 4th quadrant"], answer: 1, explain: "x = 0: the point is on the y-axis." },
      { type: "mc", q: "In which quadrant do points have x > 0 and y < 0?", options: ["I", "II", "III", "IV"], answer: 3, explain: "(+; −): 4th quadrant." },
      { type: "num", q: "Distance between A(1; 1) and B(4; 5)?", answer: 5, explain: "√(3² + 4²) = √25 = 5." },
      { type: "mc", q: "Midpoint of A(−2; 4) and B(6; 0)?", options: ["(2; 2)", "(4; 4)", "(2; 4)"], answer: 0, explain: "((−2 + 6)/2; (4 + 0)/2) = (2; 2)." },
      { type: "num", q: "Slope of the line through A(1; 3) and B(3; 11)?", answer: 4, explain: "m = (11 − 3)/(3 − 1) = 8/2 = 4." },
      { type: "tf", q: "The graph of y = 5x passes through the origin.", answer: true, explain: "For x = 0, y = 0: direct proportionality." },
      { type: "mc", q: "y = 24/x represents…", options: ["a direct proportionality", "an inverse proportionality", "a parabola"], answer: 1, explain: "xy = 24 constant: inverse proportionality (hyperbola)." },
      { type: "mc", q: "Which line is perpendicular to y = 3x?", options: ["y = 3x + 1", "y = −⅓x", "y = −3x"], answer: 1, explain: "3 · (−⅓) = −1." },
      { type: "num", q: "For which value of x does the line y = 2x − 8 meet the x-axis?", answer: 4, explain: "y = 0 → 2x = 8 → x = 4." },
      { type: "num", q: "Area of the triangle with vertices O(0; 0), A(6; 0), B(0; 4)?", answer: 12, explain: "Right triangle with legs 6 and 4: 6·4/2 = 12." },
      { type: "text", q: "What is the first coordinate of a point called?", answer: ["abscissa", "the abscissa", "x-coordinate"], explain: "Abscissa (x); the second is the ordinate (y)." }
    ],
    gen: [["pythagoras", 2]]
  }
});
