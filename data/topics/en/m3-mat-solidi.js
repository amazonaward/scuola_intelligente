TOPIC('en', {
  id: "m3-mat-solidi",
  title: "Solids: surface area and volume",
  intro: "Boxes, cans, ice-cream cones, balls: we are surrounded by solids. Let's learn to recognise them, to calculate how much material is needed to build them (<b>surface area</b>) and how much space they take up (<b>volume</b>).",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Polyhedra and solids of revolution",
      html: "<p>A <b>solid</b> is a three-dimensional geometric figure: length, width, height. Solids are divided into two big families:</p><ul><li><b>Polyhedra</b>: bounded only by polygons (the <b>faces</b>). Faces meet at <b>edges</b>, edges meet at <b>vertices</b>. Examples: cube, cuboid, prism, pyramid.</li><li><b>Solids of revolution</b>: obtained by rotating a flat figure around an axis. They have curved surfaces. Examples: cylinder (a rotating rectangle), cone (a rotating right-angled triangle), sphere (a rotating semicircle).</li></ul>"
    },
    {
      type: "3d",
      title: "Explore the solids in 3D",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "box", "prism", "pyramid", "cylinder", "cone", "sphere"], labels: true, color: "#60a5fa" },
      caption: "Turn each solid with your finger or the mouse. Count the faces, edges and vertices of the polyhedra."
    },
    {
      type: "remember",
      title: "Euler's formula",
      html: "<p>In every convex polyhedron: <b>F + V − E = 2</b> (faces + vertices − edges).</p><p>Cube: 6 + 8 − 12 = 2 ✔ &nbsp; Square-based pyramid: 5 + 5 − 8 = 2 ✔</p>"
    },
    {
      type: "text",
      title: "2. Surface area and volume: what's the difference?",
      html: "<ul><li>The <b>lateral surface area</b> (S<sub>l</sub>) is the area of the side faces.</li><li>The <b>total surface area</b> (S<sub>t</sub>) is S<sub>l</sub> + the area of the bases. It is measured in cm², m²…</li><li>The <b>volume</b> (V) is the space taken up. It is measured in cm³, dm³, m³.</li></ul><p>Remember the equivalences: <b>1 dm³ = 1 litre</b>; 1 m³ = 1000 dm³ = 1000 litres; 1 cm³ = 1 ml.</p><p>To calculate the surface area it helps to imagine the <b>net</b> of the solid: we «open» it and lay it flat on the table.</p>"
    },
    {
      type: "svg",
      title: "The nets of the cube and the cylinder",
      svg: "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#ffffff\"/><g fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"80\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"20\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"140\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"200\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"150\" width=\"60\" height=\"60\"/></g><text x=\"140\" y=\"250\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cube: 6 equal squares</text><text x=\"140\" y=\"275\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">S<tspan font-size=\"12\" dy=\"4\">t</tspan><tspan dy=\"-4\"> = 6 · s²</tspan></text><g stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"330\" y=\"95\" width=\"220\" height=\"90\" fill=\"#fed7aa\"/><circle cx=\"440\" cy=\"60\" r=\"35\" fill=\"#fdba74\"/><circle cx=\"440\" cy=\"220\" r=\"35\" fill=\"#fdba74\"/></g><text x=\"440\" y=\"145\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\">base = 2πr (circumference)</text><text x=\"560\" y=\"145\" font-size=\"16\" font-family=\"sans-serif\">h</text><text x=\"440\" y=\"290\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cylinder: 1 rectangle + 2 circles</text></svg>",
      caption: "Nets: the cube opens into 6 squares, the cylinder into a rectangle (the lateral surface) and two circles."
    },
    {
      type: "alternatives",
      title: "Other ways to understand it: why the formulas are what they are",
      intro: "Volume formulas don't just have to be learned by heart: you can «see» them and even touch them.",
      tabs: [
        {
          label: "🪙 Cavalieri's principle",
          html: "<p>Take a straight stack of coins and then push it sideways: it becomes slanted, but the coins are the same, so the <b>volume doesn't change</b>. Bonaventura Cavalieri (1635), a pupil of Galileo, turned this into a principle: <b>if two solids have the same height and, at every height, cross-sections with the same area, they have the same volume</b>. That's why a slanted prism has the same volume as a straight one: V = A<sub>base</sub> × h.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><ellipse cx=\"150\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"400\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"420\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"438\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"453\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"463\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"469\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"471\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"468\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"462\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"454\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"150\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Straight stack</text><text x=\"440\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Slanted stack</text><text x=\"300\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">Same coins = same volume</text></svg>"
        },
        {
          label: "📐 Nets",
          html: "<p>Cut the solid along some edges and open it out on the table: you get the <b>net</b>. The area of the net is the <b>total surface area</b>. The cylinder becomes a rectangle (as long as the circumference, 2πr) plus two circles; the cone a circular sector plus a circle.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/><g transform=\"translate(20,40)\" stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#bfdbfe\"><rect x=\"50\" y=\"0\" width=\"50\" height=\"50\"/><rect x=\"0\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"100\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"150\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"100\" width=\"50\" height=\"50\"/></g><text x=\"120\" y=\"230\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Cube: 6 squares</text><g transform=\"translate(260,30)\" stroke=\"#166534\" stroke-width=\"2\" fill=\"#bbf7d0\"><circle cx=\"60\" cy=\"25\" r=\"25\"/><rect x=\"0\" y=\"50\" width=\"157\" height=\"80\"/><circle cx=\"60\" cy=\"155\" r=\"25\"/></g><text x=\"340\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Cylinder: rectangle</text><text x=\"340\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">2πr long + 2 circles</text><g transform=\"translate(470,40)\" stroke=\"#9a3412\" stroke-width=\"2\" fill=\"#fed7aa\"><path d=\"M60,0 L0,110 A125,125 0 0 0 120,110 Z\"/><circle cx=\"60\" cy=\"158\" r=\"28\"/></g><text x=\"530\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Cone: circular</text><text x=\"530\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">sector + circle</text></svg>"
        },
        {
          label: "💧 With water",
          html: "<p>Take a plastic cone and cylinder with <b>the same base and the same height</b>. Fill the cone with water and pour it into the cylinder: it takes exactly <b>3 cones</b> to fill it. That's why V<sub>cone</sub> = πr²h ÷ 3. The same is true for the pyramid and the prism. Archimedes also discovered that the sphere has <b>2/3</b> of the volume of the cylinder it fits inside.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><g transform=\"translate(60,40)\"><polygon points=\"0,0 120,0 60,180\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">cone full of water</text></g><text x=\"235\" y=\"140\" font-size=\"28\" fill=\"#b91c1c\" font-weight=\"bold\">× 3 =</text><g transform=\"translate(340,40)\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#93c5fd\" opacity=\".85\"/><line x1=\"0\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><line x1=\"0\" y1=\"120\" x2=\"120\" y2=\"120\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">full cylinder</text></g><text x=\"520\" y=\"100\" font-size=\"15\" fill=\"#1f2937\">same base</text><text x=\"520\" y=\"125\" font-size=\"15\" fill=\"#1f2937\">same</text><text x=\"520\" y=\"148\" font-size=\"15\" fill=\"#1f2937\">height</text></svg>"
        },
        {
          label: "🧊 3D cubes",
          html: "<p>Volume is the <b>number of unit cubes</b> that fill the solid. A 4 × 3 × 2 cuboid holds 4 × 3 = 12 cubes per layer, and there are 2 layers: 24 cubes. Change the measurements with the sliders and count!</p>",
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 2 }
        },
        {
          label: "🔺 3 pyramids = 1 cube",
          html: "<p>A cube can be divided into <b>3 identical square-based pyramids</b>, all with their apex at the same corner of the cube. So each one has a third of the cube's volume: V = l² × l ÷ 3. Turn the pyramid and imagine putting three of them together.</p>",
          scene: "solid",
          options: { shape: "pyramid", n: 4, h: 1.4, labels: true }
        }
      ]
    },
    {
      type: "text",
      title: "3. The formula sheet",
      html: "<table><tr><th>Solid</th><th>Lateral surface area</th><th>Total surface area</th><th>Volume</th></tr><tr><td>Cube (edge s)</td><td>4·s²</td><td>6·s²</td><td>s³</td></tr><tr><td>Cuboid (a, b, c)</td><td>2p<sub>b</sub>·c = 2(a+b)·c</td><td>2(ab + bc + ac)</td><td>a·b·c</td></tr><tr><td>Right prism</td><td>2p<sub>b</sub>·h</td><td>S<sub>l</sub> + 2·A<sub>b</sub></td><td>A<sub>b</sub>·h</td></tr><tr><td>Right pyramid (slant height a)</td><td>p<sub>b</sub>·a (semi-perimeter × slant height)</td><td>S<sub>l</sub> + A<sub>b</sub></td><td>A<sub>b</sub>·h / 3</td></tr><tr><td>Cylinder</td><td>2πr·h</td><td>2πr·h + 2πr²</td><td>πr²·h</td></tr><tr><td>Cone (slant height a)</td><td>πr·a</td><td>πr·a + πr²</td><td>πr²·h / 3</td></tr><tr><td>Sphere</td><td>—</td><td>4πr²</td><td>4/3·πr³</td></tr></table><p>In the cone the slant height is found with Pythagoras: <b>a = √(r² + h²)</b>. In a square-based pyramid with side l: <b>a = √(h² + (l/2)²)</b>.</p>"
    },
    {
      type: "remember",
      title: "The «divide by 3» rule",
      html: "<p>The pyramid and the cone have a volume equal to <b>one third</b> of the prism and the cylinder with the same base and height. With a cone full of water you fill the matching cylinder in exactly <b>3 pourings</b>.</p>"
    },
    {
      type: "example",
      title: "Example: how much water does the aquarium hold?",
      html: "<p>A cuboid-shaped aquarium measures 60 cm × 30 cm × 40 cm.</p><p>V = 60 × 30 × 40 = <b>72,000 cm³</b> = 72 dm³ = <b>72 litres</b>.</p><p>To know how much glass is needed (without a lid): base area 60×30 = 1800 cm², walls 2·(60×40) + 2·(30×40) = 4800 + 2400 = 7200 cm². Total: <b>9000 cm²</b> = 0.9 m².</p>"
    },
    {
      type: "example",
      title: "Example: the label on the can",
      html: "<p>A cylindrical can has radius 3.3 cm and height 11.5 cm.</p><ul><li>Label (lateral surface): 2π·3.3·11.5 ≈ <b>238.4 cm²</b>.</li><li>Volume: π·3.3²·11.5 ≈ 3.14·10.89·11.5 ≈ <b>393 cm³</b>, that is about 0.39 litres: it's the 330 ml can, with a little empty space at the top!</li></ul>"
    },
    {
      type: "quiz",
      title: "Mini-quiz 1",
      questions: [
        { type: "num", q: "Volume of a cube with edge 5 cm?", answer: 125, tol: 0, unit: "cm³", explain: "V = s³ = 5 × 5 × 5 = 125 cm³." },
        { type: "mc", q: "Which of these is a solid of revolution?", options: ["Prism", "Pyramid", "Cone", "Cube"], answer: 2, explain: "The cone is obtained by rotating a right-angled triangle around one of its legs." },
        { type: "num", q: "How many litres are 3 dm³?", answer: 3, tol: 0, unit: "litres", explain: "1 dm³ = 1 litre." }
      ]
    },
    {
      type: "text",
      title: "4. Density: from volume to weight",
      html: "<p>Every material has its own <b>density</b> (also called specific weight): how many grams 1 cm³ weighs. <b>Weight = Volume × density</b>.</p><table><tr><th>Material</th><th>density (g/cm³)</th></tr><tr><td>Cork</td><td>0.25</td></tr><tr><td>Fir wood</td><td>0.5</td></tr><tr><td>Water</td><td>1</td></tr><tr><td>Glass</td><td>2.5</td></tr><tr><td>Iron</td><td>7.8</td></tr><tr><td>Gold</td><td>19.3</td></tr></table><p>An iron cube with a 10 cm edge: V = 1000 cm³ → weight = 1000 × 7.8 = <b>7800 g = 7.8 kg</b>. If the density is less than 1, the object <b>floats</b> on water.</p>"
    },
    {
      type: "curiosity",
      title: "Archimedes' prize",
      html: "<p>Archimedes of Syracuse (3rd century BC) proved that the volume of a sphere is exactly <b>2/3</b> of the volume of the cylinder that contains it. He was so proud of it that he wanted a sphere inside a cylinder on his tomb. Centuries later, Cicero found the tomb thanks to that very drawing.</p>"
    },
    {
      type: "curiosity",
      title: "Why are bubbles round?",
      html: "<p>Of all solids with the same volume, the <b>sphere</b> is the one with the smallest surface. The soap film «pulls» to take up as little surface as possible, and so it becomes a sphere. For the same reason animals curl up into a ball when it's cold: they reduce the surface through which they lose heat.</p>"
    },
    {
      type: "quiz",
      title: "Mini-quiz 2",
      questions: [
        { type: "num", q: "A cuboid measures 4 cm, 5 cm, 10 cm. Volume?", answer: 200, tol: 0, unit: "cm³", explain: "V = 4 × 5 × 10 = 200 cm³." },
        { type: "mc", q: "A cylinder and a cone have the same base and height. The cone's volume is:", options: ["the same", "half", "a third", "double"], answer: 2, explain: "V cone = πr²h / 3." },
        { type: "tf", q: "In a polyhedron F + V − E = 2.", answer: true, explain: "It's Euler's formula." }
      ]
    },
    {
      type: "conceptMap",
      title: "Concept map: where the formulas come from",
      nodes: [
        { id: "unita", label: "Unit of volume: the little cube", x: 50, y: 6, color: "#64748b", html: "<p>1 cm³ is a cube with a 1 cm edge; 1 dm³ = 1 litre.</p>", why: "<p>Measuring means comparing with a unit. For lengths we use a segment, for areas a little square, for volumes a little cube. The metric system (France, 1795) linked the litre to the cubic decimetre.</p>" },
        { id: "par", label: "Cuboid: V = a·b·c", x: 22, y: 24, color: "#2563eb", html: "<p>Layers of cubes: a·b cubes per layer, c layers.</p>", why: "<p>It's just counting: rows × columns × layers. It also works with non-whole measurements by moving to smaller and smaller cubes.</p>" },
        { id: "cav", label: "Cavalieri's principle", x: 78, y: 24, color: "#7c3aed", html: "<p>Same cross-sections at every height → same volume.</p>", why: "<p>Cavalieri (1635) thought of a solid as a stack of very thin sheets («indivisibles»). It's an idea that anticipates the integral calculus of Newton and Leibniz.</p>" },
        { id: "prisma", label: "Prism and cylinder: V = A_b · h", x: 50, y: 44, color: "#0d9488", html: "<p>Base area times height.</p>", why: "<p>Every prism has the same cross-sections as a cuboid with the same base area: by Cavalieri they have the same volume. The cylinder is like a prism with infinitely many sides.</p>" },
        { id: "piramide", label: "Pyramid and cone: V = A_b · h ÷ 3", x: 22, y: 66, color: "#ea580c", html: "<p>A third of the corresponding prism.</p>", why: "<p>Euclid (Elements, book XII) proved that a triangular prism can be split into 3 equivalent pyramids. Even earlier, the Egyptians calculated the volume of a truncated pyramid (Moscow Papyrus, about 1850 BC).</p>" },
        { id: "sfera", label: "Sphere: V = 4/3 π r³", x: 78, y: 66, color: "#dc2626", html: "<p>And surface area S = 4πr².</p>", why: "<p>Archimedes (3rd century BC) proved that the sphere has 2/3 of the volume and surface area of the cylinder around it. He was so proud of it that he wanted the sphere-and-cylinder figure on his tomb.</p>" },
        { id: "eulero", label: "Euler's formula F + V − E = 2", x: 22, y: 90, color: "#a855f7", html: "<p>It holds for every convex polyhedron.</p>", why: "<p>Euler published it in 1758. If you add a vertex by cutting off a corner, faces, vertices and edges increase together in such a way that the total stays 2: that's why the rule never changes.</p>" },
        { id: "peso", label: "Weight = Volume × density", x: 78, y: 90, color: "#475569", html: "<p>From the volume you can work out the mass of an object.</p>", why: "<p>Every material has its own density (water 1 g/cm³, iron about 7.8). Archimedes realised that King Hiero's crown was not pure gold by measuring its volume with the water it displaced.</p>" }
      ],
      edges: [
        ["unita", "par", "I count the cubes"],
        ["par", "prisma", "generalises"],
        ["cav", "prisma", "proves"],
        ["prisma", "piramide", "÷ 3"],
        ["cav", "sfera", "used for"],
        ["prisma", "sfera", "compared with the cylinder"],
        ["prisma", "peso", "used for"],
        ["piramide", "eulero", "polyhedra"]
      ]
    }
  ],
  glossary: [
    { t: "Polyhedron", d: "A solid bounded by polygons." },
    { t: "Solid of revolution", d: "A solid obtained by rotating a flat figure around a line (axis)." },
    { t: "Edge", d: "A segment where two faces of a polyhedron meet." },
    { t: "Slant height", d: "In a pyramid, the height of a side face; in a cone, the segment from the apex to the circle of the base." },
    { t: "Net", d: "The flat figure you get by «opening up» the surface of a solid." },
    { t: "Volume", d: "Measure of the space taken up by a solid." },
    { t: "Density", d: "Weight of a unit of volume of a material (e.g. g/cm³)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Total surface area of a cube with edge 3 cm?", answer: 54, tol: 0, unit: "cm²", explain: "6 × 3² = 54 cm²." },
      { type: "num", q: "Volume of a cube with edge 4 cm?", answer: 64, tol: 0, unit: "cm³", explain: "4³ = 64 cm³." },
      { type: "num", q: "A prism has base area 12 cm² and height 10 cm. Volume?", answer: 120, tol: 0, unit: "cm³", explain: "V = A_b × h = 120 cm³." },
      { type: "num", q: "A pyramid has base area 36 cm² and height 5 cm. Volume?", answer: 60, tol: 0, unit: "cm³", explain: "V = 36 × 5 / 3 = 60 cm³." },
      { type: "num", q: "A cone has radius 3 cm and height 4 cm: how long is the slant height?", answer: 5, tol: 0, unit: "cm", explain: "a = √(9 + 16) = 5 cm." },
      { type: "mc", q: "The volume of a cylinder is calculated with:", options: ["2πr·h", "πr²·h", "4πr²", "πr·a"], answer: 1, explain: "Base area (πr²) times height." },
      { type: "mc", q: "How many faces, edges and vertices does a cube have?", options: ["6, 12, 8", "6, 8, 12", "8, 12, 6", "4, 6, 4"], answer: 0, explain: "6 faces, 12 edges, 8 vertices: 6 + 8 − 12 = 2." },
      { type: "tf", q: "1 m³ is 1000 litres.", answer: true, explain: "1 m³ = 1000 dm³ and 1 dm³ = 1 l." },
      { type: "num", q: "Cylinder with radius 2 cm and height 10 cm. Volume (use π = 3.14)?", answer: 125.6, tol: 0.1, unit: "cm³", explain: "3.14 × 4 × 10 = 125.6 cm³." },
      { type: "mc", q: "An object floats on water if its density is:", options: ["greater than 1", "less than 1", "equal to 7.8", "anything"], answer: 1, explain: "If it is less dense than water (density < 1 g/cm³) it floats." },
      { type: "text", q: "What is the solid obtained by rotating a rectangle around one of its sides called?", answer: ["cylinder", "the cylinder", "a cylinder"], explain: "It's the cylinder." }
    ],
    gen: [["volCube", 1], ["volBox", 1]]
  }
});
