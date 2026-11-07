TOPIC('en', {
  id: "m1-mat-geometria-base",
  title: "Basic geometric entities",
  intro: "All of geometry is born from three very simple ideas: the <b>point</b>, the <b>line</b> and the <b>plane</b>. From these we build rays, segments and <b>angles</b>, the building blocks of every shape. Let's learn to recognise them, measure them and compare them.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. The primitive entities: point, line, plane",
      html: `<p>In geometry some ideas are <b>not defined</b>: they are so simple that we understand them by intuition. They are called <b>primitive entities</b>.</p>
<ul>
<li><b>Point</b>: marks a position. It has no dimensions (no length, no width, no thickness). It is written with a <b>capital</b> letter: A, B, P.</li>
<li><b>Line</b>: a straight line that is <b>unbounded</b> in both directions. It has only one dimension, length. It is written with a <b>lower-case</b> letter: r, s, t.</li>
<li><b>Plane</b>: a flat surface that is <b>unbounded</b> in every direction, with no thickness. It is written with a Greek letter: α (alpha), β (beta), π (pi).</li>
</ul>
<p><b>Space</b> is the set of all points: it is the "container" of all shapes.</p>
<p>The properties of the primitive entities are given by <b>postulates</b> (or axioms): statements that we accept as true without proof. Here are the most important ones:</p>
<ol>
<li>Through <b>one point</b> there pass <b>infinitely many lines</b> (called a <i>pencil of lines</i>).</li>
<li>Through <b>two distinct points</b> there passes <b>one and only one line</b>.</li>
<li>A line contains infinitely many points; between any two points of a line there are always infinitely many others.</li>
<li>Through <b>three non-collinear points</b> there passes <b>one and only one plane</b>.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Point, line, ray, segment",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<circle cx="70" cy="50" r="6" fill="#dc2626"/>
<text x="84" y="44" font-size="18" fill="#dc2626" font-weight="bold">A</text>
<text x="200" y="56" font-size="17" fill="#334155">point: just a position</text>
<line x1="20" y1="110" x2="580" y2="110" stroke="#2563eb" stroke-width="4"/>
<polygon points="580,110 566,102 566,118" fill="#2563eb"/>
<polygon points="20,110 34,102 34,118" fill="#2563eb"/>
<text x="40" y="100" font-size="18" fill="#2563eb" font-weight="bold">r</text>
<text x="200" y="140" font-size="17" fill="#334155">line: infinite in both directions</text>
<line x1="120" y1="190" x2="580" y2="190" stroke="#16a34a" stroke-width="4"/>
<polygon points="580,190 566,182 566,198" fill="#16a34a"/>
<circle cx="120" cy="190" r="6" fill="#16a34a"/>
<text x="104" y="182" font-size="18" fill="#16a34a" font-weight="bold">O</text>
<text x="200" y="220" font-size="17" fill="#334155">ray: it has an origin O and never ends</text>
<line x1="150" y1="270" x2="420" y2="270" stroke="#9333ea" stroke-width="4"/>
<circle cx="150" cy="270" r="6" fill="#9333ea"/>
<circle cx="420" cy="270" r="6" fill="#9333ea"/>
<text x="136" y="262" font-size="18" fill="#9333ea" font-weight="bold">A</text>
<text x="426" y="262" font-size="18" fill="#9333ea" font-weight="bold">B</text>
<text x="200" y="305" font-size="17" fill="#334155">segment AB: it has two endpoints and can be measured</text>
</svg>`,
      caption: "A line and a ray cannot be measured (they are infinite); a segment can."
    },
    {
      type: "text",
      title: "2. Rays and segments",
      html: `<p>A point O on a line divides it into two parts: each one, together with O, is a <b>ray</b> with <b>origin</b> O.</p>
<p>Two points A and B on a line determine the <b>segment AB</b>: it is the part of the line between A and B, which are the <b>endpoints</b>. Unlike lines and rays, a segment has a <b>length</b> that we can measure with a ruler.</p>
<table>
<tr><th>Kinds of segments</th><th>What it means</th></tr>
<tr><td><b>Consecutive</b></td><td>they share only one endpoint (like the sides of a broken line)</td></tr>
<tr><td><b>Adjacent</b></td><td>they are consecutive <b>and</b> lie on the same line</td></tr>
<tr><td><b>Congruent</b> (≅)</td><td>they can be placed exactly on top of each other: they have the same length</td></tr>
<tr><td><b>Intersecting</b></td><td>they cross at an interior point</td></tr>
</table>
<p>The <b>midpoint</b> M of a segment AB is the point that divides it into two congruent segments: AM ≅ MB.</p>
<p>Several consecutive segments form a <b>broken line</b> (or polygonal chain); if the last endpoint coincides with the first, the broken line is <b>closed</b> and encloses a <b>polygon</b>.</p>`
    },
    {
      type: "example",
      title: "Practical example: adding and comparing segments",
      html: `<p>On a line there are, in order, the points A, B, C. We know that <b>AB = 7 cm</b> and <b>BC = 5 cm</b>.</p>
<ul>
<li>The segments AB and BC are <b>adjacent</b> (consecutive and on the same line), so AC = AB + BC = 7 + 5 = <b>12 cm</b>.</li>
<li>The midpoint M of AC is at a distance from A of: 12 ÷ 2 = <b>6 cm</b>.</li>
<li>How far is M from B? AB − AM = 7 − 6 = <b>1 cm</b>.</li>
</ul>
<p>A "backwards" problem: if AC = 20 cm and AB is 4 cm longer than BC, then BC = (20 − 4) ÷ 2 = <b>8 cm</b> and AB = 8 + 4 = <b>12 cm</b>. This is the <b>sum and difference</b> method, very useful in problems!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: points, lines and segments",
      questions: [
        { type: "mc", q: "How many lines pass through two distinct points?", options: ["None", "Only one", "Two", "Infinitely many"], answer: 1, explain: "It is a postulate of Euclid: through two distinct points there passes one and only one line." },
        { type: "tf", q: "A ray can be measured with a ruler.", answer: false, explain: "A ray is unbounded on one side: it has no finite length. Only a segment can be measured." },
        { type: "num", q: "A, B, C are collinear in this order. AB = 9 cm and BC = 6 cm. How long is AC?", answer: 15, unit: "cm", explain: "AB and BC are adjacent: AC = 9 + 6 = 15 cm." }
      ]
    },
    {
      type: "text",
      title: "3. Lines in the plane and in space",
      html: `<p>Two lines in the same plane can be:</p>
<ul>
<li><b>intersecting</b>: they have <b>just one point</b> in common;</li>
<li><b>perpendicular</b> (⊥): they intersect and form <b>4 right angles</b> (90°);</li>
<li><b>parallel</b> (∥): they have <b>no points in common</b>, however far we extend them. They always stay at the same distance.</li>
</ul>
<p>The <b>distance from a point to a line</b> is the length of the <b>perpendicular</b> segment from the point to the line: it is the shortest path.</p>
<p>In <b>space</b> there is one more case: two lines that never meet but are <b>not parallel</b>, because they do not lie in the same plane. They are called <b>skew lines</b>. Think of a road and an overpass that crosses over it at an angle!</p>`
    },
    {
      type: "svg",
      title: "The positions of two lines in the plane",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<line x1="20" y1="40" x2="180" y2="190" stroke="#2563eb" stroke-width="4"/>
<line x1="20" y1="190" x2="180" y2="40" stroke="#dc2626" stroke-width="4"/>
<circle cx="100" cy="115" r="6" fill="#111827"/>
<text x="100" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">intersecting</text>
<line x1="300" y1="30" x2="300" y2="200" stroke="#2563eb" stroke-width="4"/>
<line x1="220" y1="115" x2="380" y2="115" stroke="#dc2626" stroke-width="4"/>
<rect x="300" y="95" width="20" height="20" fill="none" stroke="#111827" stroke-width="2"/>
<text x="300" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">perpendicular</text>
<line x1="420" y1="70" x2="590" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="420" y1="170" x2="590" y2="140" stroke="#dc2626" stroke-width="4"/>
<line x1="490" y1="58" x2="508" y2="155" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 4"/>
<text x="525" y="112" font-size="15" fill="#16a34a">distance</text>
<text x="505" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">parallel</text>
</svg>`,
      caption: "Parallel lines always stay at the same distance; perpendicular lines form four right angles."
    },
    {
      type: "3d",
      title: "Lines and planes in 3D: find the skew lines",
      scene: "solid",
      options: { shape: "box", w: 2, h: 1.2, d: 1.4, color: "#38bdf8", labels: true },
      caption: "Each face of the box lies on a plane, each edge on a line. Rotate it: find two parallel edges, two perpendicular ones and two skew ones (they don't touch and are not parallel)."
    },
    {
      type: "text",
      title: "4. The angle",
      html: `<p>Two rays with the same origin divide the plane into two parts. Each part, together with the rays, is an <b>angle</b>.</p>
<ul>
<li>The rays are the <b>sides</b> of the angle; the common origin is the <b>vertex</b>.</li>
<li>An angle is written with the vertex and a point on each side, like this: <b>AÔB</b>, or with a Greek letter: α, β, γ.</li>
<li>An angle is <b>convex</b> if it does not contain the extensions of its sides, <b>concave</b> if it does.</li>
</ul>
<p>Angles are measured in <b>degrees</b> (°) with a <b>protractor</b>. A full turn is <b>360°</b>. Each degree is divided into <b>60 minutes</b> (′) and each minute into <b>60 seconds</b> (″): this is the <b>sexagesimal system</b>, inherited from the Babylonians.</p>
<table>
<tr><th>Angle</th><th>Size</th></tr>
<tr><td><b>Zero</b></td><td>0° (the sides coincide)</td></tr>
<tr><td><b>Acute</b></td><td>between 0° and 90°</td></tr>
<tr><td><b>Right</b></td><td>90° (a quarter turn)</td></tr>
<tr><td><b>Obtuse</b></td><td>between 90° and 180°</td></tr>
<tr><td><b>Straight</b></td><td>180° (the sides form a line)</td></tr>
<tr><td><b>Full turn</b></td><td>360°</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "The types of angle",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<line x1="30" y1="120" x2="150" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="30" y1="120" x2="130" y2="50" stroke="#111827" stroke-width="4"/>
<path d="M75 120 A45 45 0 0 0 67 94" stroke="#dc2626" stroke-width="4" fill="none"/>
<text x="90" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#dc2626">acute</text>
<line x1="230" y1="120" x2="350" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="230" y1="120" x2="230" y2="30" stroke="#111827" stroke-width="4"/>
<rect x="230" y="96" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="290" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#2563eb">right 90°</text>
<line x1="450" y1="120" x2="570" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="450" y1="120" x2="390" y2="40" stroke="#111827" stroke-width="4"/>
<path d="M490 120 A40 40 0 0 0 426 88" stroke="#9333ea" stroke-width="4" fill="none"/>
<text x="490" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#9333ea">obtuse</text>
<line x1="40" y1="240" x2="260" y2="240" stroke="#111827" stroke-width="4"/>
<circle cx="150" cy="240" r="5" fill="#111827"/>
<path d="M190 240 A40 40 0 0 0 110 240" stroke="#ea580c" stroke-width="4" fill="none"/>
<text x="150" y="285" font-size="17" text-anchor="middle" font-weight="bold" fill="#ea580c">straight 180°</text>
<line x1="420" y1="240" x2="540" y2="240" stroke="#111827" stroke-width="4"/>
<circle cx="420" cy="240" r="5" fill="#111827"/>
<circle cx="420" cy="240" r="34" stroke="#16a34a" stroke-width="4" fill="none"/>
<text x="470" y="285" font-size="17" text-anchor="middle" font-weight="bold" fill="#16a34a">full turn 360°</text>
</svg>`,
      caption: "The coloured arc shows which part of the plane we are measuring."
    },
    {
      type: "widget",
      title: "Classify the angles",
      widget: "classify",
      options: {
        groups: ["Acute", "Right", "Obtuse", "Straight or more"],
        items: [
          ["35°", 0], ["90°", 1], ["120°", 2], ["180°", 3], ["89°", 0], ["91°", 2], ["270°", 3],
          ["🕒 clock hands at 3:00", 1], ["🕐 clock hands at 1:00", 0], ["🕔 clock hands at 5:00", 2], ["🕕 clock hands at 6:00", 3], ["📐 corner of a set square", 1]
        ]
      },
      caption: "Remember: each hour on the clock face corresponds to 360° ÷ 12 = 30°."
    },
    {
      type: "text",
      title: "5. Pairs of angles",
      html: `<ul>
<li><b>Consecutive</b>: they share the vertex and one side.</li>
<li><b>Adjacent</b>: consecutive, with the other two sides on the same line: together they form a <b>straight</b> angle (180°).</li>
<li><b>Complementary</b>: their sum is <b>90°</b>. The complement of 30° is 60°.</li>
<li><b>Supplementary</b>: their sum is <b>180°</b>. The supplement of 130° is 50°.</li>
<li><b>Explementary</b> (or conjugate): their sum is <b>360°</b>. The explement of 100° is 260°.</li>
<li><b>Vertical angles</b>: when two lines cross, the angles "facing each other" are always <b>congruent</b>.</li>
</ul>
<p>Why are vertical angles equal? Call α and β the two opposite angles and γ the one between them. α + γ = 180° and also β + γ = 180°, because they are adjacent. Then α = 180° − γ = β. This is a real <b>proof</b>: the first theorem you meet in geometry!</p>`
    },
    {
      type: "example",
      title: "Practical example: calculating with degrees and minutes",
      html: `<p><b>Sum.</b> 35°40′ + 20°30′ = 55°70′. But 70′ = 1° 10′, so the result is <b>56°10′</b>.</p>
<p><b>Complement.</b> The complement of 52°25′ is 90° − 52°25′. Write 90° as 89°60′: 89°60′ − 52°25′ = <b>37°35′</b>.</p>
<p><b>Clock.</b> At 2:00 the hands form 2 × 30° = <b>60°</b>; at 4:00 they form 4 × 30° = <b>120°</b> (obtuse). At 9:00 they form 90°: a right angle!</p>
<p><b>Navigation.</b> Pilots and sailors give a direction as an angle measured from North, clockwise: East = 90°, South = 180°, West = 270°.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… 360 comes from Babylon?",
      html: `<p>The full turn divided into <b>360 degrees</b> and the <b>minutes</b> and <b>seconds</b> of 60 come from the ancient <b>Babylonians</b>, who counted in base 60. 60 is divisible by 2, 3, 4, 5, 6, 10, 12, 15, 20, 30: very handy for calculating without decimals!</p>
<p>And the names? In medieval Latin people spoke of <i>pars minuta prima</i> ("first small part") and <i>pars minuta secunda</i> ("second small part"): from these come <b>minute</b> and <b>second</b>, the same names we use for the hour (minutes and seconds).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… the most famous geometry book is 2,300 years old?",
      html: `<p>Around <b>300 BC</b>, in Alexandria in Egypt, the Greek mathematician <b>Euclid</b> wrote the <b>Elements</b>, 13 books that start from a few definitions and 5 <b>postulates</b> and from there prove hundreds of theorems. For over 2,000 years it was the textbook geometry was studied from: after the Bible, it is perhaps the book with the most editions in history.</p>
<p>His fifth postulate, the one about <b>parallels</b>, kept mathematicians arguing for centuries. In the 19th century Lobachevsky, Bolyai and Riemann discovered that, by changing it, you get <b>non-Euclidean geometries</b>: the very ones Einstein would use to describe the curved space of the universe!</p>`
    },
    {
      type: "widget",
      title: "Match the term to its definition",
      widget: "match",
      options: {
        pairs: [
          ["Complementary", "sum 90°"],
          ["Supplementary", "sum 180°"],
          ["Explementary", "sum 360°"],
          ["Parallel", "no common point, same plane"],
          ["Skew", "never meet, different planes"],
          ["Midpoint", "divides the segment into two equal parts"]
        ]
      }
    },
    {
      type: "alternatives",
      title: "Other ways to understand geometric entities",
      intro: "Abstract definitions don't convince you? Try seeing them with objects, with your body or in 3D.",
      tabs: [
        {
          label: "🧵 With string and your body",
          html: `<p>Stretch a <b>string</b> between two nails: it is a <b>segment</b>. If you could extend it to infinity in both directions, it would be a <b>line</b>. A lit <b>torch</b> in the dark is an excellent ray: it starts from a point and goes very far.</p>
<p>Now use your <b>arms</b>: hold them together in front of you (zero angle), then raise one upwards until they form an "L" (right angle), then spread them out in a line (straight angle). Turn all the way round: you have made a <b>full turn</b>!</p>
<p>The classroom floor is a piece of <b>plane</b>; the lines between the tiles are parallel and perpendicular lines.</p>`
        },
        {
          label: "🕐 The angles of the clock",
          html: `<p>The clock face is a hidden protractor! The full turn (360°) is divided into 12 hours, so each hour is worth <b>30°</b>. Look at the hands: at 3 they form a right angle, at 6 a straight angle, at 1 an acute angle of 30°.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#eff6ff"/>
<circle cx="150" cy="140" r="110" fill="#ffffff" stroke="#1e3a8a" stroke-width="6"/>
<text x="150" y="55" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">12</text>
<text x="242" y="147" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">3</text>
<text x="150" y="240" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">6</text>
<text x="58" y="147" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">9</text>
<line x1="150" y1="140" x2="150" y2="62" stroke="#dc2626" stroke-width="6"/>
<line x1="150" y1="140" x2="215" y2="140" stroke="#111827" stroke-width="8"/>
<rect x="150" y="118" width="22" height="22" fill="none" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="80" font-size="20" fill="#1e3a8a" font-weight="bold">3:00 = 90°</text>
<text x="400" y="120" font-size="18" fill="#334155">1 hour = 30°</text>
<text x="400" y="155" font-size="18" fill="#334155">1:00 = 30°</text>
<text x="400" y="190" font-size="18" fill="#334155">4:00 = 120°</text>
<text x="400" y="225" font-size="18" fill="#334155">6:00 = 180°</text>
</svg>`
        },
        {
          label: "🧊 The cube in 3D",
          html: `<p>On a cube you find everything: the <b>vertices</b> are points, the <b>edges</b> lie on lines, the <b>faces</b> on planes. Rotate it and look for:</p>
<ul><li><b>parallel</b> edges (same direction);</li><li><b>perpendicular</b> edges (they meet at 90°);</li><li><b>skew</b> edges (they don't touch and are not parallel: they exist only in space!).</li></ul>`,
          scene: "solid",
          options: { shape: "cube", color: "#a78bfa", labels: true }
        },
        {
          label: "🌍 Degrees in other countries and trades",
          html: `<p>Not everyone measures angles in the same way:</p>
<ul>
<li><b>mathematicians</b> and physicists often use <b>radians</b>: a full turn is 2π ≈ 6.28 radians;</li>
<li>in <b>France</b>, after the Revolution, they tried to introduce <b>gradians</b> (or gon): a right angle = 100 gon, a full turn = 400. Surveyors still use them, and you find them on calculators with the "GRAD" key;</li>
<li>armies use <b>mils</b>: a full turn = 6400 mils;</li>
<li>in many countries the line through A and B is written with a double arrow over the letters: <b>AB</b> with ↔.</li>
</ul>
<p>The sexagesimal system (360°) is still the most widespread in the world, because 360 divides in so many ways.</p>`
        },
        {
          label: "🇬🇷 Straightedge and compass, like the Greeks",
          html: "<p>The ancient <b>Greeks</b> (for example <b>Euclid</b>, in Alexandria around 300 BC) built shapes using only <b>two tools</b>: an <b>unmarked straightedge</b> (to draw lines) and a <b>compass</b> (to draw circles). No ruler with centimetres, no protractor! Here is how they find the <b>midpoint</b> of a segment and its <b>perpendicular</b> (called the <b>perpendicular bisector</b>):</p><ol><li>Draw the segment <b>AB</b>.</li><li>Put the compass on <b>A</b> with an opening <b>larger than half</b> of AB and draw an arc above and one below the segment.</li><li><b>Without changing the opening</b>, put it on <b>B</b> and draw two more arcs: they cut the first ones at the points <b>C</b> and <b>D</b>.</li><li>Join C and D with the straightedge: the line CD is <b>perpendicular</b> to AB and cuts it exactly at the <b>midpoint M</b>.</li></ol><p><b>Why does it work?</b> C is at the same distance from A and from B (the compass opening was the same), and so is D. All the points that are <b>at the same distance from A and B</b> lie on a single line: the perpendicular bisector. It is proposition 10 of the first book of the <i>Elements</i>.</p><p>🎯 <b>Try it yourself</b>: construct the <b>bisector</b> of an angle: put the compass on the vertex and draw an arc that cuts the two sides; from those two points draw two equal arcs that cross; join the vertex with the crossing point. You have divided the angle into two equal parts without measuring it!</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"150\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><circle cx=\"450\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><line x1=\"150\" y1=\"150\" x2=\"450\" y2=\"150\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><line x1=\"300\" y1=\"8\" x2=\"300\" y2=\"292\" stroke=\"#dc2626\" stroke-width=\"3\"/><circle cx=\"150\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"450\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"17.7\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"282.3\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"150\" r=\"6\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"128\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"458\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"310\" y=\"30\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">C</text><text x=\"310\" y=\"290\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">D</text><text x=\"308\" y=\"172\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">M</text><rect x=\"8\" y=\"8\" width=\"150\" height=\"50\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><text x=\"16\" y=\"30\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">Just a straightedge</text><text x=\"16\" y=\"50\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">and compass!</text></svg>"
        },
        {
          label: "🇨🇳 Set square and compass in China",
          html: "<p>In <b>China</b>, in ancient paintings and carvings about 2,000 years old (Han dynasty), the two legendary ancestors <b>Fuxi</b> and <b>Nüwa</b> are shown holding a <b>carpenter's square</b> (矩, <i>ju</i>) and a <b>compass</b> (规, <i>gui</i>). Together the two words form <b>规矩</b> (<i>guīju</i>), which in Chinese means… <b>\"rules\"</b>! For the ancient Chinese, whoever can use a square and a compass can put the world in order.</p><p>With these two tools you can do everything you study in this chapter:</p><ul><li><b>Perpendiculars</b>: rest one leg of the set square on a line and draw along the other leg. The two lines form a <b>right angle</b> (90°).</li><li><b>Parallels</b> (the \"sliding set square\" method): rest the straightedge on the sheet and hold it still; <b>slide</b> the set square along the straightedge and draw a line, then another one further along. All the lines have the <b>same direction</b>: they are parallel, because they all form the same angle with the straightedge.</li><li><b>Distance from a point to a line</b>: from the point P draw the perpendicular to the line with the set square: the perpendicular segment is the shortest <b>distance</b>.</li><li><b>Circle</b>: with the compass, all the points at the same distance from the centre.</li></ul><p>🎯 Try it: draw a line and a point outside it. With the sliding set square draw the <b>parallel</b> through the point. How many can you draw? Only one (this is exactly Euclid's fifth postulate!).</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of geometric entities: tap and find out why",
      nodes: [
        { id: "postulati", label: "Postulates", x: 50, y: 6, color: "#a855f7", html: "Statements accepted as true without proof, which describe how points, lines and planes behave.", why: "You can't prove everything: every argument has to start from something. Euclid, around 300 BC, chose a few obvious postulates and from there built all of geometry with rigorous proofs. In 1899 David Hilbert rewrote them even more precisely." },
        { id: "punto", label: "Point", x: 18, y: 26, color: "#dc2626", html: "Marks a position; it has no dimensions.", why: "Euclid defined it as \"that which has no parts\". It is an abstract idea: the dot you draw with a pencil is only a model, because it always has a little thickness." },
        { id: "retta", label: "Line", x: 50, y: 30, color: "#2563eb", html: "A straight, unbounded line with one dimension.", why: "Through two points there passes only one: that is why a string stretched between two points is always straight and a line is the shortest path on the plane." },
        { id: "piano", label: "Plane", x: 82, y: 26, color: "#0ea5e9", html: "A flat, unbounded surface with two dimensions.", why: "Three non-collinear points determine a single plane: that is why a 3-legged stool never wobbles, while a 4-legged chair sometimes does!" },
        { id: "semiretta", label: "Ray and segment", x: 30, y: 54, color: "#16a34a", html: "Parts of a line: a ray has an origin, a segment has two endpoints.", why: "They come from \"cutting\" the line with one or two points. A segment is finite, so it can be compared and measured: this is where measures of length come from." },
        { id: "parallele", label: "Parallel and perpendicular", x: 72, y: 54, color: "#f59e0b", html: "Mutual positions of two lines.", why: "Euclid's fifth postulate basically says that through a point outside a line there passes only one parallel. By changing it, non-Euclidean geometries were born in the 19th century." },
        { id: "angolo", label: "Angle", x: 30, y: 80, color: "#ef4444", html: "The part of the plane between two rays with the same origin.", why: "Two rays leaving the same point divide the plane into two parts: each is an angle. It measures how much one direction is \"turned\" with respect to another." },
        { id: "gradi", label: "Sexagesimal degrees", x: 70, y: 82, color: "#14b8a6", html: "Unit of measure for angles: the full turn is 360°, 1° = 60′, 1′ = 60″.", why: "It comes from the Babylonians, who counted in base 60 and observed that the Sun takes about 360 days to go round the sky. 360 has a great many divisors." },
        { id: "teorema", label: "Vertical angles", x: 50, y: 96, color: "#6366f1", html: "Vertical angles are congruent.", why: "It can be proved: each one is supplementary to the same angle, so they are equal. Tradition says it was Thales of Miletus (6th century BC) who first proved it." }
      ],
      edges: [
        ["postulati", "punto", "describe"],
        ["postulati", "retta", "describe"],
        ["postulati", "piano", "describe"],
        ["retta", "semiretta", "is divided into"],
        ["retta", "parallele", "two lines can be"],
        ["semiretta", "angolo", "two rays form"],
        ["angolo", "gradi", "is measured in"],
        ["angolo", "teorema", "we prove"],
        ["piano", "parallele", "in the same"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: angles",
      questions: [
        { type: "num", q: "What is the supplement of a 125° angle?", answer: 55, unit: "°", explain: "180° − 125° = 55°." },
        { type: "mc", q: "Two vertical angles: one measures 40°. What about the other?", options: ["140°", "40°", "50°", "320°"], answer: 1, explain: "Vertical angles are always congruent." },
        { type: "mc", q: "An angle of 100° is…", options: ["acute", "right", "obtuse", "straight"], answer: 2, explain: "It is greater than 90° and less than 180°: obtuse." }
      ]
    },
    {
      type: "remember",
      title: "To remember",
      html: `<ul>
<li><b>Point, line, plane</b> are primitive entities: they are not defined, they are described by <b>postulates</b>.</li>
<li>Through two points there passes <b>only one line</b>; through three non-collinear points <b>only one plane</b>.</li>
<li>A <b>segment</b> has two endpoints and can be measured; a line and a ray cannot.</li>
<li>Lines in the plane: <b>intersecting, perpendicular, parallel</b>; in space also <b>skew</b>.</li>
<li>Angles: acute (&lt;90°), right (90°), obtuse, straight (180°), full turn (360°).</li>
<li>Complementary 90°, supplementary 180°, explementary 360°; vertical angles = congruent.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Primitive entity", d: "A basic concept that is not defined (point, line, plane)." },
    { t: "Postulate", d: "A statement accepted as true without proof." },
    { t: "Ray", d: "Each of the two parts into which a point divides a line." },
    { t: "Segment", d: "The part of a line between two points, called endpoints." },
    { t: "Midpoint", d: "The point that divides a segment into two congruent parts." },
    { t: "Congruent", d: "Shapes that can be placed exactly on top of each other (same shape and size)." },
    { t: "Skew lines", d: "Lines in space that do not meet and are not parallel." },
    { t: "Angle", d: "The part of the plane between two rays with the same origin." },
    { t: "Protractor", d: "A tool for measuring angles in degrees." },
    { t: "Sexagesimal system", d: "A base-60 system: 1° = 60 minutes, 1 minute = 60 seconds." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these entities is written with a lower-case letter?", options: ["The point", "The line", "The plane"], answer: 1, explain: "Lines are written with lower-case letters (r, s), points with capitals, planes with Greek letters." },
      { type: "tf", q: "Through three non-collinear points there passes one and only one plane.", answer: true, explain: "It is a postulate: that is why a 3-legged stool doesn't wobble." },
      { type: "mc", q: "Two consecutive segments that lie on the same line are called…", options: ["congruent", "adjacent", "intersecting", "parallel"], answer: 1, explain: "They are adjacent: consecutive and collinear." },
      { type: "num", q: "The segment AB measures 18 cm. How long is AM, if M is the midpoint?", answer: 9, unit: "cm", explain: "The midpoint divides the segment in half: 18 ÷ 2 = 9 cm." },
      { type: "num", q: "AB + BC = 30 cm and AB is 6 cm longer than BC. How long is BC?", answer: 12, unit: "cm", explain: "BC = (30 − 6) ÷ 2 = 12 cm; AB = 18 cm." },
      { type: "text", q: "What are two lines in space that don't meet and are not parallel called?", answer: ["skew", "skew lines", "skew line"], explain: "They are skew lines: they don't lie in the same plane." },
      { type: "num", q: "What is the complement of a 37° angle?", answer: 53, unit: "°", explain: "90° − 37° = 53°." },
      { type: "num", q: "What is the explement of a 210° angle?", answer: 150, unit: "°", explain: "360° − 210° = 150°." },
      { type: "mc", q: "What is 25°50′ + 14°20′?", options: ["39°70′", "40°10′", "39°10′", "40°70′"], answer: 1, explain: "25°50′ + 14°20′ = 39°70′ = 40°10′, because 60′ = 1°." },
      { type: "num", q: "How many degrees do the hands of a clock form at 4:00?", answer: 120, unit: "°", explain: "Each hour is worth 30°: 4 × 30° = 120°." },
      { type: "tf", q: "Two perpendicular lines form four acute angles.", answer: false, explain: "They form four right angles (90°)." },
      { type: "order", q: "Put the angles in order from the smallest to the biggest.", items: ["acute", "right", "obtuse", "straight", "full turn"], explain: "Acute (<90°), right (90°), obtuse (90°–180°), straight (180°), full turn (360°)." }
    ]
  }
});
