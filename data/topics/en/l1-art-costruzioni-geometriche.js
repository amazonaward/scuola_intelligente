TOPIC('en', {
  id: `l1-art-costruzioni-geometriche`,
  title: `Technical drawing: geometric constructions`,
  intro: `Before you draw a house, a machine or a logo, you need to be able to draw <b>perpendicular and parallel lines, angles and polygons</b> accurately. The tools are few: <b>ruler, set squares and compass</b>. Geometric constructions are the grammar of technical drawing: every step has a mathematical reason, and every mistake shows straight away. Let's learn to "think with a compass", as the Greek geometers did! 📐✏️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. The tools and the rules of the game`,
      html: `<p>Classical Euclidean geometry allows only two tools: the <b>unmarked straightedge</b> (to draw straight lines) and the <b>compass</b> (to draw circles and transfer distances). In technical drawing we also use <b>set squares</b> and the <b>protractor</b>, which speed up the work, but "straightedge and compass" constructions remain fundamental.</p>
<ul>
<li><b>Pencils</b>: a hard one (H, 2H) for thin, light construction lines; a softer one (HB, B) to go over the finished drawing.</li>
<li><b>Set squares</b>: the <b>45°</b> set square (an isosceles right triangle) and the <b>30°/60°</b> one (half an equilateral triangle). With a set square resting against the ruler you draw perpendiculars and parallels; combining the two set squares you can also get angles of 15°, 75° and 105°.</li>
<li><b>Compass</b>: you place the point on the centre and rotate the lead. Golden rule: <b>never change the opening</b> until the construction requires it.</li>
</ul>
<p>Conventions: points are labelled with <b>capital</b> letters (A, B, C), lines with lower-case letters (r, s); construction arcs are left <b>visible and thin</b>: anyone looking must be able to "read" your reasoning. The finished drawing is gone over with a bold line.</p>`
    },
    {
      type: `text`, title: `2. Perpendicular bisector and midpoint of a segment`,
      html: `<p>The <b>perpendicular bisector</b> of a segment AB is the line perpendicular to AB passing through its midpoint. It is also the set of points <b>equidistant</b> from A and B: that is why the construction works.</p>
<ol>
<li>Place the compass point on <b>A</b> with an opening <b>greater than half of AB</b> and draw an arc above and below the segment.</li>
<li>Without changing the opening, place the point on <b>B</b> and draw two arcs that cross the previous ones at points <b>C</b> and <b>D</b>.</li>
<li>Join C and D: the line CD is the <b>perpendicular bisector</b>; the point M where it cuts AB is the <b>midpoint</b>.</li>
</ol>
<p>Why it works: C and D are the same distance from A and from B (same radius), so both lie on the bisector; two points are enough to determine a line. The four sides AC, BC, AD, BD are equal, so ACBD is a <b>rhombus</b>: the diagonals of a rhombus are perpendicular and bisect each other.</p>`
    },
    {
      type: `svg`, title: `The perpendicular bisector, step by step`,
      caption: `Two arcs with the same radius, centred on A and on B, meet at C and D: the line CD is perpendicular to AB and passes through the midpoint M.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="340" y2="150" stroke="#1e293b" stroke-width="3"/>
<path d="M200 52 A140 140 0 0 1 200 248" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M200 52 A140 140 0 0 0 200 248" fill="none" stroke="#dc2626" stroke-width="2"/>
<line x1="200" y1="30" x2="200" y2="270" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/>
<g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="52" r="5"/><circle cx="200" cy="248" r="5"/><circle cx="200" cy="150" r="5" fill="#16a34a"/></g>
<g font-size="18" font-weight="bold" fill="#1e293b"><text x="82" y="140">A</text><text x="308" y="140">B</text><text x="210" y="50">C</text><text x="210" y="266">D</text><text x="210" y="142" fill="#16a34a">M</text></g>
<text x="400" y="100" font-size="16" fill="#2563eb">arc centred on A</text>
<text x="400" y="130" font-size="16" fill="#dc2626">arc centred on B</text>
<text x="400" y="160" font-size="16" fill="#16a34a">bisector CD (perpendicular)</text>
<text x="400" y="200" font-size="15" fill="#334155">same radius: AC = BC = AD = BD</text>
</svg>`
    },
    {
      type: `text`, title: `3. Perpendiculars and parallels`,
      html: `<p><b>Perpendicular to a line r through a point P</b></p>
<ul>
<li><b>P on r</b>: with centre P draw an arc that cuts r at two points X and Y; then construct the perpendicular bisector of segment XY (it is the perpendicular you want, and it passes through P).</li>
<li><b>P not on r</b>: with centre P draw an arc that cuts r at X and Y; from X and from Y, with the same opening, draw two arcs that meet at Q; the line PQ is the perpendicular.</li>
<li><b>With set squares</b>: rest one leg of the set square on the line, slide it until the other leg passes through P, and draw.</li>
</ul>
<p><b>Parallel to a line r through a point P</b></p>
<ul>
<li><b>With two set squares</b>: rest the hypotenuse (or a leg) of one set square on r, with the second set square acting as a "guide" against the first; slide the first one up to P and draw. This is the method most used at the drawing board.</li>
<li><b>With the compass (rhombus)</b>: choose a point A on r; with centre A and radius AP draw an arc that cuts r at B; with the same radius and centres B and P draw two arcs that meet at Q (on P's side). APQB is a rhombus, so PQ is parallel to r.</li>
<li><b>With two perpendiculars</b>: two lines perpendicular to the same line r are parallel to each other.</li>
</ul>
<p>An important case is that of <b>parallel lines at a given distance d</b>: construct a perpendicular to r, mark the distance d on it, and from there draw the perpendicular to the perpendicular.</p>`
    },
    {
      type: `example`, title: `Practical example: a page border and a frame`,
      html: `<p>You want to draw a frame <b>1.5 cm</b> wide around a rectangle. You just need to draw four <b>parallels to the sides at a distance of 1.5 cm</b>: for each one, construct a perpendicular, mark 1.5 cm with the compass and draw the parallel with the set squares. The corners stay at 90° because lines parallel to perpendicular sides are themselves perpendicular. It is the procedure a graphic designer uses for the margins of a page.</p>`
    },
    {
      type: `text`, title: `4. The angle bisector and dividing a segment`,
      html: `<p><b>Angle bisector</b> (the ray that divides an angle into two equal angles), given an angle with vertex V:</p>
<ol>
<li>With centre V draw an arc that cuts the two arms at A and B.</li>
<li>With centre A and then B, using the same opening, draw two arcs that meet at E.</li>
<li>The ray VE is the bisector. It works because VAEB is a rhombus (or a kite) and the diagonal of a rhombus bisects its angles.</li>
</ol>
<p>With the bisector you can construct angles of <b>45°</b> (bisector of 90°), <b>30°</b> (bisector of 60°), <b>15°</b>, <b>22.5°</b> and so on. The <b>60°</b> angle comes from an equilateral triangle (same compass opening for all three sides); the <b>90°</b> angle from the perpendicular.</p>
<p><b>Dividing a segment into n equal parts</b> (intercept theorem, known in Italy as Thales' theorem): to divide AB into 5 parts:</p>
<ol>
<li>From A draw any ray not in line with AB.</li>
<li>With any compass opening, mark <b>5 equal consecutive segments</b> on it: A1, A2, … A5.</li>
<li>Join A5 to B and from A4, A3, A2, A1 draw the <b>parallels to A5B</b>: they divide AB into 5 equal parts.</li>
</ol>
<p>The reason: a set of parallel lines cuts two transversals into proportional segments (Thales). If the segments on one transversal are equal, so are those on the other.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: the first tools`,
      questions: [
        { type: `mc`, q: `What property do all the points on the perpendicular bisector of a segment AB share?`, options: [`They are equidistant from A and B`, `They are the same distance from point A only`, `They are in line with A and B`], answer: 0, explain: `The perpendicular bisector is the locus of points equidistant from the endpoints: that is why it is constructed with two arcs of equal radius.` },
        { type: `num`, q: `How many degrees does the bisector of a right angle make with each arm?`, answer: 45, tol: 0, unit: `°`, explain: `90° ÷ 2 = 45°.` },
        { type: `tf`, q: `To divide a segment into 7 equal parts, you just mark 7 equal segments on an auxiliary ray and draw parallels.`, answer: true, explain: `It is an application of the intercept (Thales') theorem: the parallels cut the segment into equal parts.` }
      ]
    },
    {
      type: `text`, title: `5. Regular polygons inscribed in a circle`,
      html: `<p>A <b>regular polygon</b> has all its sides and all its angles equal. When it is inscribed in a circle of radius r, its vertices lie on the circle: the circle is divided into <b>n equal arcs</b>, each of 360°/n.</p>
<ul>
<li><b>Equilateral triangle</b>: divide the circle into 3 parts (arcs of 120°) or construct the three equal sides. The side is s = r√3 ≈ 1.732 r.</li>
<li><b>Square</b>: draw two perpendicular diameters: their endpoints are the 4 vertices. The side is s = r√2 ≈ 1.414 r.</li>
<li><b>Regular hexagon</b>: the <b>side is equal to the radius</b> (s = r). With the same compass opening you step around the circle 6 times and come back exactly to the starting point. Joining every other vertex gives the <b>equilateral triangle</b>.</li>
<li><b>Octagon</b>: start from the square and find the midpoints of the arcs (bisectors); the number of sides doubles: 4 → 8 → 16.</li>
<li><b>Pentagon</b>: more complicated; its side is linked to the <b>golden ratio</b>. It is obtained with a construction that uses the midpoint of a radius (see below).</li>
<li><b>Decagon</b>: its side is the golden section of the radius; doubling the decagon gives 20 sides.</li>
</ul>
<p>The hexagon is the simplest because 360° ÷ 6 = 60°, and the triangle formed by two radii and one side is <b>equilateral</b>. That is why the hexagon appears everywhere in nature: honeycomb cells, snowflakes, the structure of graphene.</p>`
    },
    {
      type: `svg`, title: `The regular hexagon with a compass`,
      caption: `Draw the circle of radius r; without changing the opening, step the radius around the circle 6 times. Joined up, the 6 points form the hexagon. Six equilateral triangles fill the hexagon.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="110" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
<polygon points="280,150 225,245.3 115,245.3 60,150 115,54.7 225,54.7" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round"/>
<g stroke="#1e3a8a" stroke-width="1.5"><line x1="170" y1="150" x2="280" y2="150"/><line x1="170" y1="150" x2="225" y2="245.3"/><line x1="170" y1="150" x2="115" y2="245.3"/><line x1="170" y1="150" x2="60" y2="150"/><line x1="170" y1="150" x2="115" y2="54.7"/><line x1="170" y1="150" x2="225" y2="54.7"/></g>
<g fill="#dc2626"><circle cx="280" cy="150" r="5"/><circle cx="225" cy="245.3" r="5"/><circle cx="115" cy="245.3" r="5"/><circle cx="60" cy="150" r="5"/><circle cx="115" cy="54.7" r="5"/><circle cx="225" cy="54.7" r="5"/></g>
<circle cx="170" cy="150" r="5" fill="#1e293b"/>
<text x="180" y="170" font-size="16" fill="#1e293b">O</text>
<text x="222" y="142" font-size="16" fill="#92400e" font-weight="bold">r</text>
<polygon points="450,150 490,81 570,81 610,150 570,219 490,219" fill="none"/>
<text x="330" y="60" font-size="17" font-weight="bold" fill="#1e3a8a">Regular hexagon</text>
<text x="330" y="95" font-size="16" fill="#334155">side = radius (s = r)</text>
<text x="330" y="125" font-size="16" fill="#334155">central angle = 60°</text>
<text x="330" y="155" font-size="16" fill="#334155">interior angle = 120°</text>
<text x="330" y="185" font-size="16" fill="#334155">6 equilateral triangles</text>
<text x="330" y="225" font-size="16" fill="#334155">joining every other vertex:</text>
<text x="330" y="250" font-size="16" fill="#334155">inscribed equilateral triangle</text>
</svg>`
    },
    {
      type: `3d`, title: `The hexagonal prism: a construction that takes on volume`,
      scene: `solid`,
      options: { shape: `prism`, n: 6, r: 1, h: 1.6, color: `#3b82f6`, labels: true, shapes: [`prism`, `pyramid`, `cube`, `cylinder`] },
      caption: `The base of this prism is the hexagon you have just constructed. Counting faces, edges and vertices you find that F + V - E = 2 (Euler's formula). A horizontal cross-section reproduces your construction.`
    },
    {
      type: `text`, title: `6. Any polygon: the general method and the pentagon`,
      html: `<p><b>Other polygons</b>: for any n you can divide the circle with a protractor into arcs of 360°/n (for example 40° for the nonagon). With straightedge and compass, however, only some polygons are exact: those obtained by doubling the number of sides (4, 8, 16; 6, 12; 5, 10, 20), plus the triangle and the 17-gon. For the others (7, 9, 11…) approximate methods are used.</p>
<p><b>Regular pentagon inscribed</b> in a circle with centre O (classical construction):</p>
<ol>
<li>Draw two perpendicular diameters: AB horizontal and CD vertical.</li>
<li>Find the midpoint M of the radius OB.</li>
<li>With centre M and radius MC (from M to the endpoint C of the vertical diameter) draw an arc that cuts the diameter AB at N, on the side opposite B.</li>
<li>The segment CN is the <b>side of the pentagon</b>. With that opening, step 5 times around the circle starting from C.</li>
</ol>
<p>The ratio of the diagonal to the side of the pentagon is <b>(1+√5)/2 ≈ 1.618</b>, the <b>golden ratio φ</b>. The Pythagoreans adopted the pentagram (five-pointed star) as their secret symbol.</p>`
    },
    {
      type: `example`, title: `Practical example: a logo with a star`,
      html: `<p>You want to draw a five-pointed star for a logo. Construct the regular pentagon in the circle and then join each vertex to the next but one: you get a perfect <b>pentagram</b>. If you drew it "by eye" it would come out lopsided; with the compass the points are all equal, because the circle is divided into 5 arcs of 72°.</p>
<p>The same goes for a clock face: the 12 numbers are at the vertices of a regular dodecagon, 30° apart. You get it from the hexagon by bisecting the arcs.</p>`
    },
    {
      type: `text`, title: `7. Tangents and blending arcs`,
      html: `<p>A <b>tangent</b> to a circle touches the curve at a single point, the <b>point of tangency</b>, and is <b>perpendicular to the radius</b> that reaches that point. This property is the key to all blending arcs.</p>
<p>A <b>blending arc</b> (fillet) is a circular arc that connects two lines (two straight lines, or a line and a curve) "smoothly", without corners. You can see them in roads, railway tracks, and the rounded edges of furniture and phones.</p>
<p><b>Blending two intersecting lines with an arc of radius r</b>:</p>
<ol>
<li>Draw two lines <b>parallel</b> to each of the given ones, at distance <b>r</b> (on the inner side of the angle).</li>
<li>Their meeting point <b>C</b> is the <b>centre of the arc</b>: it is at distance r from both lines.</li>
<li>From the centre C draw the <b>perpendiculars</b> to the two lines: their feet T₁ and T₂ are the <b>points of tangency</b>.</li>
<li>With centre C and radius r draw the arc from T₁ to T₂. Go over in bold <b>only</b> the parts of the lines up to T₁ and T₂, and the arc.</li>
</ol>
<p><b>Blending a line and a circle</b>, or two circles: the centre of the arc is at distance r from the line and at distance (R + r) (external blend) or (R − r) (internal blend) from the centre of the circle. The point of tangency always lies on the <b>line joining the centres</b>.</p>`
    },
    {
      type: `svg`, title: `Blending two perpendicular lines`,
      caption: `The centre C is at distance r from both lines; T1 and T2 are the points of tangency and the arc joins them smoothly. The dashed lines are the auxiliary parallels.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"><line x1="120" y1="240" x2="120" y2="40"/><line x1="120" y1="240" x2="520" y2="240"/></g>
<g stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 4"><line x1="200" y1="40" x2="200" y2="270"/><line x1="90" y1="160" x2="520" y2="160"/></g>
<g stroke="#1e293b" stroke-width="4" stroke-linecap="round" fill="none"><path d="M120 40 L120 160 A80 80 0 0 0 200 240 L520 240"/></g>
<g stroke="#16a34a" stroke-width="2"><line x1="200" y1="160" x2="120" y2="160"/><line x1="200" y1="160" x2="200" y2="240"/></g>
<g fill="#dc2626"><circle cx="200" cy="160" r="6"/><circle cx="120" cy="160" r="5"/><circle cx="200" cy="240" r="5"/></g>
<g font-size="17" font-weight="bold" fill="#1e293b"><text x="208" y="152">C</text><text x="70" y="156">T1</text><text x="208" y="262">T2</text></g>
<text x="240" y="200" font-size="16" fill="#16a34a">r</text>
<text x="150" y="190" font-size="16" fill="#16a34a">r</text>
<text x="320" y="110" font-size="16" fill="#334155">1) parallels at distance r</text>
<text x="320" y="135" font-size="16" fill="#334155">2) where they cross is the centre C</text>
<text x="320" y="190" font-size="16" fill="#334155">3) perpendiculars: points T1 and T2</text>
<text x="320" y="215" font-size="16" fill="#334155">4) arc with centre C and radius r</text>
</svg>`
    },
    {
      type: `curiosity`, title: `Did you know… Euclid wrote the rules 2,300 years ago?`,
      html: `<p>The <i>Elements</i> of <b>Euclid</b> (Alexandria in Egypt, about 300 BC) begin with the construction of an equilateral triangle on a given segment: it uses two circles just like those of the perpendicular bisector. For more than two thousand years people debated which constructions were possible with straightedge and compass alone. Only in the 19th century was it proved that with those tools three famous problems <b>cannot</b> be solved: <b>trisecting any angle</b>, <b>doubling the cube</b> and <b>squaring the circle</b>. On the other hand, the young <b>Carl Friedrich Gauss</b> discovered in 1796, at the age of 19, that the regular polygon with <b>17 sides</b> can be constructed: he was so proud of it that he wanted it engraved on his tombstone.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… bees "draw" hexagons?`,
      html: `<p>Honeycomb cells are <b>regular hexagons</b>. Among the shapes that cover the plane without gaps (equilateral triangle, square, hexagon), the hexagon is the one with <b>the smallest perimeter for a given area</b>: less wax is needed to build the walls. Pappus of Alexandria (4th century AD) had already noticed this; the complete mathematical proof, the "honeycomb conjecture", was given by Thomas Hales in 1999.</p>`
    },
    {
      type: `remember`, title: `Key points`,
      html: `<ul>
<li><b>Perpendicular bisector</b> of a segment: arcs of equal radius from A and from B; the line through the intersections is perpendicular and passes through the midpoint.</li>
<li><b>Angle bisector</b>: an arc from the vertex, then two equal arcs from the points found on the arms.</li>
<li><b>Thales (intercept theorem)</b> to divide a segment into equal parts, using a ray and parallels.</li>
<li><b>Hexagon</b>: side = radius; <b>square</b>: two perpendicular diameters; <b>pentagon</b>: side linked to the golden ratio.</li>
<li><b>Blending arc</b>: centre at distance r from both lines; points of tangency on the perpendiculars from the centre.</li>
<li>Construction lines are left <b>thin and visible</b>; the result is gone over with a <b>bold line</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `If the compass feels like a mysterious ritual, try looking at the same constructions from other angles.`,
      tabs: [
        {
          label: `🧠 The why: loci`,
          html: `<p>Every construction answers a question of the type "<b>where are all the points that…?</b>" (a locus).</p>
<ul>
<li>The points at distance <i>r</i> from O → a <b>circle</b>.</li>
<li>The points equidistant from A and B → the <b>perpendicular bisector</b> of the segment.</li>
<li>The points equidistant from two intersecting lines → the <b>angle bisector</b>.</li>
<li>The points at distance <i>r</i> from a line → two <b>parallel lines</b>.</li>
</ul>
<p>The compass gives you equal distances, the straightedge joins the points. A blending arc is the intersection of two loci: <b>centre = (parallel at r) ∩ (parallel at r)</b>.</p>`
        },
        {
          label: `✂️ With folded paper (origami)`,
          html: `<p>A sheet of paper is a geometer's tool! Fold a sheet so that two points A and B coincide: the <b>crease</b> is the perpendicular bisector of AB. Fold so that the two arms of an angle coincide: the crease is the <b>angle bisector</b>. Folding a square in half along its diagonal gives a 45° angle.</p>
<p>Origami even makes it possible to <b>trisect an angle</b> and double the cube, which are impossible with straightedge and compass: this was shown in 1980 by the Japanese mathematician <b>Hisashi Abe</b>.</p>`
        },
        {
          label: `💻 How the computer does it (CAD)`,
          html: `<p>In drawing programs (CAD, Illustrator, Inkscape), commands such as "<i>Offset</i>" (parallel at a given distance), "<i>Fillet</i>" (blending arc) and "<i>Polygon</i>" (regular polygon) carry out these constructions automatically: <b>Offset</b> draws the parallels at distance r and <b>Fillet</b> finds the centre of the arc where the parallels cross. Understanding the procedure lets you use the software without trial and error.</p>`
        },
        {
          label: `🏷️ Identify the points`,
          html: `<p>On the perpendicular bisector of a segment, click a point and give it the right name.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><line x1="40" y1="150" x2="360" y2="150" stroke="#1e293b" stroke-width="3"/><path d="M200 35 A130 130 0 0 1 200 265" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M200 35 A130 130 0 0 0 200 265" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/><g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="35" r="5"/><circle cx="200" cy="265" r="5"/><circle cx="200" cy="150" r="5"/></g></svg>`,
            spots: [
              { x: 100, y: 150, label: `Endpoint A` },
              { x: 300, y: 150, label: `Endpoint B` },
              { x: 200, y: 150, label: `Midpoint M` },
              { x: 200, y: 35, label: `Intersection of the arcs (C)` },
              { x: 200, y: 22, label: `Perpendicular bisector` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: geometric constructions`,
      nodes: [
        { id: `eucl`, label: `Straightedge and compass`, x: 50, y: 6, color: `#64748b`, html: `Two tools: the line and the circle.`, why: `<b>Euclid</b>'s postulates (Elements, about 300 BC) allow only "drawing a straight line between two points" and "describing a circle with a given centre and radius". Everything else has to be constructed.` },
        { id: `asse`, label: `Bisector and perpendiculars`, x: 18, y: 32, color: `#2563eb`, html: `Perpendicular bisector, perpendiculars, midpoint.`, why: `From equidistance: two circles of equal radius meet at the two points equidistant from their centres (a rhombus with perpendicular diagonals).` },
        { id: `bis`, label: `Angle bisector`, x: 50, y: 32, color: `#f59e0b`, html: `Halving an angle: 45°, 30°, 15°…`, why: `A rhombus is used: its diagonal bisects the angles. With the bisector you double the number of sides of polygons.` },
        { id: `tal`, label: `Thales and proportions`, x: 82, y: 32, color: `#a855f7`, html: `Dividing a segment into equal parts.`, why: `<b>Thales of Miletus</b> (6th century BC): a set of parallels cuts proportional segments on two transversals. Similarity also derives from this.` },
        { id: `pol`, label: `Regular polygons`, x: 30, y: 62, color: `#ef4444`, html: `Triangle, square, hexagon, pentagon, octagon…`, why: `Dividing the circle into n equal arcs. Gauss (1801) proved that the regular n-sided polygon can be constructed with straightedge and compass if n is the product of a power of 2 and distinct Fermat primes (3, 5, 17, 257, 65537).` },
        { id: `tan`, label: `Tangents and blending arcs`, x: 70, y: 62, color: `#16a34a`, html: `Arcs that join lines without corners.`, why: `The tangent is perpendicular to the radius at the point of contact. The centre of the blending arc is the point at distance r from both lines: the intersection of two loci.` },
        { id: `app`, label: `Applications`, x: 50, y: 90, color: `#0ea5e9`, html: `Architecture, mechanics, design, graphics, CAD.`, why: `From the Gothic rose window (arcs drawn with a compass) to roads (transition curves) and machine parts with rounded edges, everything starts from these constructions.` }
      ],
      edges: [
        [`eucl`, `asse`, `generates`], [`eucl`, `bis`, `generates`], [`eucl`, `tal`, `uses`], [`asse`, `pol`, `used for`], [`bis`, `pol`, `doubles sides`],
        [`tal`, `pol`, `generalises`], [`asse`, `tan`, `perpendiculars`], [`pol`, `app`, `for`], [`tan`, `app`, `for`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: polygons and blending arcs`,
      questions: [
        { type: `mc`, q: `How long is the side of a regular hexagon inscribed in a circle of radius 4 cm?`, options: [`2 cm`, `4 cm`, `8 cm`], answer: 1, explain: `In a regular hexagon the side equals the radius: s = r = 4 cm.` },
        { type: `mc`, q: `Where is the centre of a blending arc between two intersecting lines?`, options: [`At the point where the two lines meet`, `Where the parallels to the two lines, at distance r, cross`, `At the midpoint between the two lines`], answer: 1, explain: `The centre must be at distance r from both lines: it is the intersection of the two parallels at distance r.` },
        { type: `tf`, q: `A tangent to a circle is perpendicular to the radius at the point of tangency.`, answer: true, explain: `It is the fundamental property of tangents, and the basis of blending arcs.` },
        { type: `num`, q: `How many degrees is the central angle of a regular octagon?`, answer: 45, tol: 0, unit: `°`, explain: `360° ÷ 8 = 45°.` }
      ]
    }
  ],
  glossary: [
    { t: `Perpendicular bisector`, d: `Line perpendicular to a segment at its midpoint; locus of points equidistant from the endpoints.` },
    { t: `Angle bisector`, d: `Ray that divides an angle into two equal angles.` },
    { t: `Perpendicular`, d: `A line that makes a 90° angle with another.` },
    { t: `Parallel lines`, d: `Lines in the same plane that never meet.` },
    { t: `Regular polygon`, d: `Polygon with all sides and all angles equal; it can be inscribed in a circle.` },
    { t: `Tangent`, d: `Line that touches a circle at a single point, perpendicular to the radius.` },
    { t: `Blending arc (fillet)`, d: `Circular arc that joins two lines without corners, tangent to both.` },
    { t: `Locus`, d: `The set of all points that share the same property.` },
    { t: `Golden ratio`, d: `The ratio φ = (1+√5)/2 ≈ 1.618, linked to the regular pentagon.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `To construct the perpendicular bisector of AB, the compass opening must be…`, options: [`less than half of AB`, `greater than half of AB`, `exactly AB`], answer: 1, explain: `If it were less than or equal to half, the arcs would not meet (or would only touch): you need more than half.` },
      { type: `tf`, q: `The perpendicular bisector of a segment passes through its midpoint.`, answer: true, explain: `It is perpendicular to the segment exactly at the midpoint M.` },
      { type: `num`, q: `How large is each interior angle of a regular hexagon?`, answer: 120, tol: 0, unit: `°`, explain: `Sum of interior angles (6−2)·180° = 720°; 720° ÷ 6 = 120°.` },
      { type: `mc`, q: `With the 30°/60° set square and the 45° set square used together you can get an angle of…`, options: [`15°`, `20°`, `25°`], answer: 0, explain: `45° − 30° = 15°; you can also get 75° (45° + 30°).` },
      { type: `num`, q: `In a blending arc of radius r = 3 cm between two perpendicular lines, how far from the vertex (measured along each line) are the points of tangency?`, answer: 3, tol: 0, unit: `cm`, explain: `The centre is 3 cm from each line; the points of tangency are 3 cm from the vertex along each line (the square with side r).` },
      { type: `order`, q: `Put the steps for constructing an angle bisector in order.`, items: [`Arc centred on the vertex: it cuts the arms at A and B`, `Arc centred on A`, `Same radius, arc centred on B: they cross at E`, `Draw the ray from the vertex to E`], explain: `First the points on the arms, then two equal arcs that meet, and finally the ray.` },
      { type: `text`, q: `What is the theorem used to divide a segment into equal parts with parallels called? (name of the Greek mathematician)`, answer: [`thales`, `thales theorem`, `thales' theorem`, `intercept theorem`, `the intercept theorem`], explain: `Thales' theorem (the intercept theorem): a set of parallel lines cuts proportional segments on the transversals.` },
      { type: `mc`, q: `Which regular polygon has its side equal to the radius of the circumscribed circle?`, options: [`Square`, `Pentagon`, `Hexagon`], answer: 2, explain: `The central angle is 60° and the triangle formed by two radii and a side is equilateral.` },
      { type: `tf`, q: `The point of tangency of a blending arc lies on the perpendicular dropped from the centre of the arc to the line.`, answer: true, explain: `The radius at the point of tangency is perpendicular to the tangent, so the foot of the perpendicular from the centre is the point of tangency.` },
      { type: `mc`, q: `Which pencil is used for construction lines?`, options: [`Hard (H) and light`, `Soft (B) and very bold`, `Felt-tip pen`], answer: 0, explain: `Construction lines must be thin; the finished drawing is gone over with a bolder line.` }
    ]
  }
});
