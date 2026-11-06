TOPIC('en', {
  id: "m1-sci-cellula",
  title: "The cell",
  intro: "All living things, from a bacterium to a whale, are made of <b>cells</b>. The cell is the smallest unit capable of living: it feeds, produces energy, grows and reproduces. Let's go in and explore it!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "The cell theory",
      html: `<p>In <b>1665</b> the English scientist <b>Robert Hooke</b> looked at a thin slice of cork under a microscope and saw lots of little \"rooms\": he called them <b>cells</b> (from the Latin <i>cella</i>, small room).</p>
<p>In the 19th century the scientists Schleiden, Schwann and Virchow put forward the <b>cell theory</b>:</p>
<ol>
<li>all living things are made of one or more <b>cells</b>;</li>
<li>the cell is the <b>basic unit</b> of life: it is the smallest part that can live on its own;</li>
<li>every cell comes from <b>another cell</b>, which divides.</li>
</ol>
<p>Organisms made of a single cell are called <b>unicellular</b> (bacteria, amoebas, yeasts); those made of a huge number of cells are called <b>multicellular</b> (plants, animals, us!).</p>`
    },
    {
      type: "text",
      title: "How small is a cell?",
      html: `<p>Most cells measure between <b>10 and 100 micrometres</b>. A micrometre (µm) is a thousandth of a millimetre!</p>
<p>To see them you need a <b>light microscope</b>, which magnifies up to about 1,000–1,500 times. To observe the smallest parts we use the <b>electron microscope</b>, which can magnify more than 100,000 times.</p>
<p>There are exceptions, though: the <b>yolk of a hen's egg</b> is one single enormous cell, and some nerve cells (neurons) are more than a metre long!</p>`
    },
    {
      type: "text",
      title: "The three basic parts",
      html: `<p>Almost all cells have three main parts:</p>
<ul>
<li><b>Cell membrane (or plasma membrane)</b>: a thin \"wrapper\" around the cell. It decides what comes in (nutrients, water, oxygen) and what goes out (waste). It's like the <b>front door with a doorkeeper</b>.</li>
<li><b>Cytoplasm</b>: a jelly-like substance, made mostly of water, that fills the cell. Floating in it are the <b>organelles</b>, the little \"organs\" of the cell, each with its own job.</li>
<li><b>Nucleus</b>: the \"control centre\". It contains the <b>DNA</b>, the instructions for running the cell and for building new ones. Inside it is the <b>nucleolus</b>, where ribosomes are built.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Inside the cell in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#f472b6", label: "Cell membrane" },
          { r: 0.95, color: "#fde68a", label: "Cytoplasm" },
          { r: 0.42, color: "#8b5cf6", label: "Nucleus (nuclear membrane)" },
          { r: 0.16, color: "#1e1b4b", label: "Nucleolus" }
        ]
      },
      caption: "Turn the model: the cut-away slice shows the membrane, the cytoplasm, the nucleus and the nucleolus in the centre."
    },
    {
      type: "text",
      title: "Organelles: a little city",
      html: `<p>We can imagine the cell as a <b>city</b>, where each organelle has its own job:</p>
<table>
<tr><th>Organelle</th><th>What it does</th><th>In the city it is…</th></tr>
<tr><td><b>Nucleus</b></td><td>Contains the DNA and controls the cell</td><td>the town hall</td></tr>
<tr><td><b>Mitochondria</b></td><td>Produce energy through cellular respiration (they use sugars and oxygen)</td><td>the power station</td></tr>
<tr><td><b>Ribosomes</b></td><td>Build proteins</td><td>the factories</td></tr>
<tr><td><b>Endoplasmic reticulum</b></td><td>Network of channels that transports substances</td><td>the roads</td></tr>
<tr><td><b>Golgi apparatus</b></td><td>Prepares, \"packs\" and ships substances</td><td>the post office</td></tr>
<tr><td><b>Lysosomes</b></td><td>Digest substances and waste</td><td>the refuse collectors</td></tr>
<tr><td><b>Vacuoles</b></td><td>Store water and substances</td><td>the warehouses</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Practical example: observing onion cells",
      html: `<p>With a school microscope you can see real plant cells:</p>
<ol>
<li>Cut an onion and, with tweezers, peel off the <b>thin transparent skin</b> found between one layer and the next.</li>
<li>Lay it on a slide with a drop of water.</li>
<li>Add a drop of <b>iodine solution</b> (or methylene blue) to stain the nuclei.</li>
<li>Cover with the cover slip, taking care not to trap bubbles.</li>
<li>Look first with the lowest magnification, then with the highest.</li>
</ol>
<p>You will see lots of <b>brick-shaped</b> cells, arranged as in a wall, each with a dark dot: the <b>nucleus</b>. The regular shape is due to the <b>cell wall</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to imagine the cell",
      intro: "The cell is invisible to the naked eye: to understand it, it helps to compare it to something you know. Choose the comparison that works best for you.",
      tabs: [
        {
          label: "🏙️ The cell as a city",
          html: "<table><tr><th>Organelle</th><th>In the city it is…</th><th>What it does</th></tr><tr><td>Cell membrane</td><td>the walls with gates and customs</td><td>decides who comes in and who goes out</td></tr><tr><td>Nucleus</td><td>the town hall with its archive</td><td>keeps the DNA, the city's «instructions»</td></tr><tr><td>Mitochondria</td><td>the power stations</td><td>produce energy from food and oxygen</td></tr><tr><td>Ribosomes</td><td>the small workshops</td><td>build proteins</td></tr><tr><td>Endoplasmic reticulum</td><td>the roads and assembly lines</td><td>transports and processes substances</td></tr><tr><td>Golgi apparatus</td><td>the post office</td><td>packs and ships</td></tr><tr><td>Lysosomes</td><td>the refuse collectors</td><td>digest waste and old parts</td></tr><tr><td>Vacuole</td><td>the water tank and warehouse</td><td>stores water and substances</td></tr><tr><td>Chloroplasts (plants only)</td><td>the solar panels</td><td>turn light into food</td></tr><tr><td>Cell wall (plants only)</td><td>the stone walls</td><td>give a rigid shape and protection</td></tr></table>"
        },
        {
          label: "🍪 The biscuit factory",
          html: "<p>Imagine a biscuit factory:</p><ul><li>In the <b>manager's office</b> (nucleus) there is the recipe book (DNA).</li><li>The recipes are copied and taken to the <b>ovens</b> (ribosomes), where the biscuits (proteins) are made.</li><li>The biscuits travel on <b>conveyor belts</b> (endoplasmic reticulum) to the <b>packing department</b> (Golgi), which wraps them and ships them out.</li><li>The <b>generator</b> (mitochondria) powers the whole factory.</li><li>The <b>gate with the guard</b> (membrane) checks the goods coming in and going out.</li></ul><p>If the recipe book has a mistake, the biscuits come out wrong: that's why DNA is so well protected inside the nucleus.</p>"
        },
        {
          label: "🔬 An animal cell in 3D",
          html: "<p>Here is a 3D model: the big sphere in the middle is the <b>nucleus</b> (N), the red ones are the <b>mitochondria</b> (M), the yellow one the <b>Golgi</b> (G), the small blue ones the <b>lysosomes</b> (L) and the purple dots the <b>ribosomes</b>. Turn it: you'll see that the organelles are scattered in every direction, immersed in the cytoplasm.</p>",
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.75, color: "#7c3aed", label: "N" }, { x: 1.3, y: 0.4, z: 0.3, r: 0.3, color: "#ef4444", label: "M" }, { x: -1.2, y: -0.5, z: 0.6, r: 0.3, color: "#ef4444", label: "M" }, { x: 0.3, y: -1.3, z: -0.5, r: 0.3, color: "#ef4444", label: "M" }, { x: -0.4, y: 1.2, z: -0.8, r: 0.3, color: "#ef4444", label: "M" }, { x: 1.0, y: -0.7, z: 1.0, r: 0.35, color: "#f59e0b", label: "G" }, { x: -1.1, y: 0.9, z: 0.7, r: 0.2, color: "#3b82f6", label: "L" }, { x: 0.9, y: 1.0, z: -0.9, r: 0.2, color: "#3b82f6", label: "L" }, { x: 0.6, y: 0.8, z: 0.9, r: 0.08, color: "#a855f7" }, { x: -0.8, y: -0.9, z: -0.6, r: 0.08, color: "#a855f7" }, { x: 1.4, y: -0.2, z: -0.6, r: 0.08, color: "#a855f7" }, { x: -1.4, y: 0.1, z: -0.3, r: 0.08, color: "#a855f7" }, { x: 0.1, y: 0.6, z: 1.4, r: 0.08, color: "#a855f7" }, { x: -0.3, y: -0.7, z: 1.3, r: 0.08, color: "#a855f7" } ], bonds: [] }
        },
        {
          label: "🧽 Hooke's cork",
          html: "<p>In 1665 Robert Hooke looked at a very thin slice of <b>cork</b> with a microscope he had built himself. He saw lots of small empty compartments, like the little rooms of monks (in Latin <i>cella</i> = small room). In fact he was only seeing the walls of dead plant cells.</p><p>You can do it too with a strong magnifying glass and a thinly cut cork stopper: you'll see a honeycomb pattern.</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#fef3c7"/><g fill="#fde68a" stroke="#92400e" stroke-width="4"><polygon points="60,40 100,20 140,40 140,80 100,100 60,80"/><polygon points="140,40 180,20 220,40 220,80 180,100 140,80"/><polygon points="220,40 260,20 300,40 300,80 260,100 220,80"/><polygon points="100,100 140,80 180,100 180,140 140,160 100,140"/><polygon points="180,100 220,80 260,100 260,140 220,160 180,140"/><polygon points="260,100 300,80 340,100 340,140 300,160 260,140"/><polygon points="60,160 100,140 140,160 140,200 100,220 60,200"/><polygon points="140,160 180,140 220,160 220,200 180,220 140,200"/><polygon points="220,160 260,140 300,160 300,200 260,220 220,200"/></g><text x="470" y="100" font-size="20" text-anchor="middle" fill="#78350f" font-weight="bold">Cork</text><text x="470" y="130" font-size="18" text-anchor="middle" fill="#78350f">under the microscope</text><text x="470" y="160" font-size="18" text-anchor="middle" fill="#78350f">(Hooke, 1665)</text></svg>`
        },
        {
          label: "📏 How small is it?",
          html: "<p>A skin cell measures about <b>30 micrometres</b> (0.03 mm). You would need about <b>30 in a row to make 1 millimetre</b>.</p><p>If we enlarged a cell until it was as big as your <b>classroom</b>, the nucleus would be as big as the teacher's desk and a mitochondrion as big as a pencil case. Your body, enlarged in the same way, would be more than 300 kilometres tall!</p><p>The human body contains about <b>37 trillion</b> cells.</p>"
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the parts of the cell",
      questions: [
        { type: "mc", q: "Which part of the cell contains the DNA?", options: ["The membrane", "The cytoplasm", "The nucleus", "The vacuole"], answer: 2, explain: "The nucleus contains the DNA, with the instructions for the cell's life." },
        { type: "mc", q: "Which organelles produce energy?", options: ["Ribosomes", "Mitochondria", "Lysosomes", "Vacuoles"], answer: 1, explain: "Mitochondria are the power stations: they carry out cellular respiration." },
        { type: "tf", q: "Unicellular organisms are made of a single cell.", answer: true, explain: "For example bacteria, amoebas and yeasts." },
        { type: "text", q: "What is the name of the scientist who, in 1665, called the little rooms in cork \"cells\"?", answer: ["hooke", "robert hooke"], explain: "It was Robert Hooke, looking at cork under the microscope." }
      ]
    },
    {
      type: "text",
      title: "Animal cell and plant cell",
      html: `<p>Animal cells and plant cells look alike, but they have some important differences.</p>
<p>The <b>plant cell</b> also has:</p>
<ul>
<li>the <b>cell wall</b>, a rigid covering of <b>cellulose</b> outside the membrane: it gives shape and support (that's why plants stand upright even without a skeleton);</li>
<li><b>chloroplasts</b>, green organelles that contain <b>chlorophyll</b> and carry out <b>photosynthesis</b>: they turn sunlight, water and carbon dioxide into sugars and oxygen;</li>
<li>a <b>large central vacuole</b> full of water, which keeps the cell \"plump\".</li>
</ul>
<p>The <b>animal cell</b> has no wall or chloroplasts, has a more <b>rounded and variable</b> shape and small vacuoles.</p>
<table>
<tr><th></th><th>Animal</th><th>Plant</th></tr>
<tr><td>Membrane, cytoplasm, nucleus</td><td>✔️</td><td>✔️</td></tr>
<tr><td>Mitochondria</td><td>✔️</td><td>✔️</td></tr>
<tr><td>Cell wall</td><td>❌</td><td>✔️</td></tr>
<tr><td>Chloroplasts</td><td>❌</td><td>✔️</td></tr>
<tr><td>Large vacuole</td><td>❌</td><td>✔️</td></tr>
<tr><td>Shape</td><td>rounded, variable</td><td>regular, often rectangular</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Animal cell and plant cell compared",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#ffffff"/>
<text x="160" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#be185d">Animal cell</text>
<ellipse cx="160" cy="155" rx="130" ry="105" fill="#fef3c7" stroke="#db2777" stroke-width="4"/>
<circle cx="150" cy="150" r="40" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="155" cy="145" r="13" fill="#4c1d95"/>
<ellipse cx="230" cy="110" rx="22" ry="11" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
<path d="M214 110 q8 -8 16 0 q8 8 16 0" fill="none" stroke="#c2410c" stroke-width="2"/>
<ellipse cx="90" cy="210" rx="22" ry="11" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
<circle cx="230" cy="200" r="10" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<g fill="#334155"><circle cx="100" cy="110" r="3"/><circle cx="110" cy="100" r="3"/><circle cx="200" cy="230" r="3"/><circle cx="215" cy="160" r="3"/></g>
<text x="480" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#15803d">Plant cell</text>
<rect x="350" y="45" width="260" height="225" rx="8" fill="#dcfce7" stroke="#166534" stroke-width="8"/>
<rect x="360" y="55" width="240" height="205" rx="5" fill="#fefce8" stroke="#db2777" stroke-width="3"/>
<rect x="440" y="95" width="120" height="120" rx="20" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<circle cx="400" cy="100" r="28" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="403" cy="97" r="9" fill="#4c1d95"/>
<g fill="#22c55e" stroke="#14532d" stroke-width="2">
<ellipse cx="390" cy="200" rx="18" ry="10"/><ellipse cx="580" cy="80" rx="16" ry="9"/><ellipse cx="420" cy="245" rx="16" ry="9"/><ellipse cx="585" cy="235" rx="16" ry="9"/>
</g>
<ellipse cx="530" cy="245" rx="18" ry="9" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
</svg>`,
      caption: "In the plant cell you can see the cell wall (thick green border), the chloroplasts (green) and the large vacuole (light blue)."
    },
    {
      type: "widget",
      title: "Identify the parts of the plant cell",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<rect width="400" height="300" fill="#ffffff"/>
<rect x="40" y="30" width="320" height="240" rx="10" fill="#dcfce7" stroke="#166534" stroke-width="10"/>
<rect x="52" y="42" width="296" height="216" rx="6" fill="#fefce8" stroke="#db2777" stroke-width="3"/>
<rect x="170" y="80" width="140" height="140" rx="24" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<circle cx="105" cy="95" r="32" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/>
<circle cx="108" cy="92" r="10" fill="#4c1d95"/>
<ellipse cx="100" cy="210" rx="22" ry="12" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
<ellipse cx="140" cy="240" rx="20" ry="9" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 44, y: 150, label: "Cell wall" },
          { x: 58, y: 60, label: "Cell membrane" },
          { x: 105, y: 120, label: "Nucleus" },
          { x: 240, y: 150, label: "Vacuole" },
          { x: 100, y: 210, label: "Chloroplast" },
          { x: 140, y: 240, label: "Mitochondrion" },
          { x: 150, y: 160, label: "Cytoplasm" }
        ]
      },
      caption: "Click on each point and choose the right name."
    },
    {
      type: "curiosity",
      title: "How many cells do you have?",
      html: `<p>An adult's body is made of about <b>30 trillion cells</b> (30 followed by 12 zeros)! And in our gut live even more friendly bacteria.</p>
<p>Cells don't all live for the same time: <b>red blood cells</b> live about 120 days, skin cells a few weeks, while many brain <b>neurons</b> last a whole lifetime. Every second millions of new cells are born in your body!</p>`
    },
    {
      type: "curiosity",
      title: "A cell for every job",
      html: `<p>In multicellular organisms cells are <b>specialised</b>: they have different shapes depending on their job.</p>
<ul>
<li><b>Neurons</b> have long \"wires\" to send electrical messages.</li>
<li><b>Red blood cells</b> are flattened discs with no nucleus, so they can carry more oxygen.</li>
<li><b>Muscle cells</b> are long and can shorten.</li>
</ul>
<p>Identical cells form a <b>tissue</b>, different tissues form an <b>organ</b> (like the heart), several organs form a <b>system</b>, and the systems together form the <b>organism</b>.</p>`
    },
    {
      type: "example",
      title: "Practical example: why does lettuce wilt?",
      html: `<p>If you leave lettuce out of the fridge it goes limp. Why?</p>
<p>Plant cells keep the plant \"firm\" thanks to the <b>large vacuole full of water</b>, which pushes against the cell wall, like the air in a ball.</p>
<p>When the leaf loses water, the vacuoles empty and the cells \"deflate\": the leaf wilts. If you put it in cold water for a while, the cells soak up water again and the leaf becomes crisp again!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: animal or plant?",
      questions: [
        { type: "mc", q: "Which structure is found ONLY in the plant cell?", options: ["Nucleus", "Membrane", "Chloroplast", "Mitochondrion"], answer: 2, explain: "Chloroplasts, which carry out photosynthesis, are found only in plant cells (and algae)." },
        { type: "tf", q: "Plant cells have mitochondria too.", answer: true, explain: "Yes: plants also respire and produce energy with mitochondria." },
        { type: "mc", q: "What is the plant cell wall made of?", options: ["Cellulose", "Fat", "Bone", "Chlorophyll"], answer: 0, explain: "The wall is made of cellulose, the same substance used to make paper." }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: how the cell theory was born",
      nodes: [
        { id: "lenti", label: "Lenses and microscopes", x: 50, y: 6, color: "#64748b", html: "Instruments that magnify what the eye cannot see.", why: "Around 1590 Dutch spectacle makers discovered that putting two lenses in a row greatly enlarges the image. Without this instrument nobody would ever have seen a cell." },
        { id: "hooke", label: "Hooke (1665)", x: 20, y: 24, color: "#f59e0b", html: "Robert Hooke observes cork and calls the little rooms he sees «cells».", why: "He had built a compound microscope and published his drawings in the book Micrographia. But he was only seeing the walls of dead cells." },
        { id: "leeuwenhoek", label: "Van Leeuwenhoek (1674)", x: 80, y: 24, color: "#ea580c", html: "Antoni van Leeuwenhoek is the first to see living cells: bacteria, red blood cells, protozoa in a drop of water.", why: "He made tiny, perfect lenses that magnified up to about 270 times. He called the microscopic living things he saw moving «little animals»." },
        { id: "schleiden", label: "Schleiden (1838)", x: 20, y: 46, color: "#16a34a", html: "Matthias Schleiden: all plants are made of cells.", why: "By observing a great many plant tissues under the microscope he found cells everywhere: leaves, roots, stems." },
        { id: "schwann", label: "Schwann (1839)", x: 80, y: 46, color: "#0ea5e9", html: "Theodor Schwann: all animals are made of cells too.", why: "Talking with Schleiden he realised that the structures he saw in animal tissues were similar to plant cells: so the cell is the common unit of all living things." },
        { id: "virchow", label: "Virchow (1855)", x: 50, y: 64, color: "#dc2626", html: "Rudolf Virchow: every cell comes from another cell (omnis cellula e cellula).", why: "Before, many believed that life could arise from nothing (spontaneous generation). Virchow, studying diseases, saw that cells multiply by dividing. Shortly afterwards Pasteur proved with experiments that spontaneous generation doesn't exist." },
        { id: "teoria", label: "Cell theory", x: 50, y: 82, color: "#7c3aed", html: "1) All living things are made of cells. 2) The cell is the smallest unit of life. 3) Every cell comes from another cell.", why: "It is the result of almost two centuries of observations. It is one of the foundations of biology, like the theory of evolution." },
        { id: "oggi", label: "Today", x: 50, y: 96, color: "#0f766e", html: "The electron microscope (since 1931) shows the organelles; DNA in the nucleus is studied.", why: "The electron microscope uses electrons instead of light and magnifies up to millions of times: that's how ribosomes, the reticulum and the structure of mitochondria were discovered." }
      ],
      edges: [ ["lenti", "hooke", "make it possible to see"], ["lenti", "leeuwenhoek", "better lenses"], ["hooke", "schleiden", "the name cell"], ["leeuwenhoek", "schwann", "living cells"], ["schleiden", "schwann", "plants vs animals"], ["schleiden", "teoria", "point 1"], ["schwann", "teoria", "points 1 and 2"], ["virchow", "teoria", "point 3"], ["teoria", "oggi", "goes deeper"] ]
    }
  ],
  glossary: [
    { t: "Cell", d: "The smallest living unit." },
    { t: "Cell membrane", d: "Thin wrapper around the cell that controls exchanges with the outside." },
    { t: "Cytoplasm", d: "Jelly-like substance that fills the cell, where the organelles are found." },
    { t: "Nucleus", d: "Control centre of the cell, it contains the DNA." },
    { t: "DNA", d: "Molecule that contains hereditary information." },
    { t: "Organelle", d: "Structure of the cell with a specific job." },
    { t: "Mitochondrion", d: "Organelle that produces energy through cellular respiration." },
    { t: "Chloroplast", d: "Green organelle of plant cells that carries out photosynthesis." },
    { t: "Cell wall", d: "Rigid cellulose covering of plant cells." },
    { t: "Unicellular", d: "Organism made of a single cell." },
    { t: "Tissue", d: "Group of identical cells that carry out the same function." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "According to the cell theory, every cell…", options: ["arises from nothing", "comes from another cell", "comes from cork", "lives for ever"], answer: 1, explain: "Every cell comes from the division of another cell." },
      { type: "mc", q: "Which part controls what enters and leaves the cell?", options: ["The nucleus", "The cell membrane", "The nucleolus", "The cytoplasm"], answer: 1, explain: "The membrane is like a doorkeeper: it selects the substances." },
      { type: "mc", q: "Which pair contains only structures typical of the plant cell?", options: ["Wall and chloroplasts", "Nucleus and mitochondria", "Membrane and cytoplasm", "Ribosomes and lysosomes"], answer: 0, explain: "The cell wall and chloroplasts are missing in the animal cell." },
      { type: "tf", q: "The yolk of a hen's egg is a single cell.", answer: true, explain: "It is an enormous cell, full of nutrients." },
      { type: "text", q: "What is the green pigment in chloroplasts called?", answer: ["chlorophyll", "the chlorophyll"], explain: "Chlorophyll captures sunlight for photosynthesis." },
      { type: "mc", q: "What do ribosomes do?", options: ["Produce energy", "Build proteins", "Digest waste", "Carry out photosynthesis"], answer: 1, explain: "Ribosomes are the protein factories." },
      { type: "order", q: "Put in order from simplest to most complex", items: ["Cell", "Tissue", "Organ", "System", "Organism"], explain: "Cells → tissues → organs → systems → organism." },
      { type: "tf", q: "A bacterium is a multicellular organism.", answer: false, explain: "Bacteria are unicellular: made of a single cell." },
      { type: "mc", q: "Which instrument do you need to see cells?", options: ["The telescope", "The microscope", "The thermometer", "Sunglasses"], answer: 1, explain: "Cells are microscopic: you need a microscope." },
      { type: "num", q: "In what year did Robert Hooke observe the cells of cork?", answer: 1665, tol: 0, explain: "In 1665, publishing it in the book Micrographia." },
      { type: "mc", q: "Why does a lettuce leaf wilt without water?", options: ["The cells lose their nucleus", "The vacuoles empty", "The mitochondria break", "The chlorophyll turns yellow"], answer: 1, explain: "Without water the vacuoles empty and the cells no longer stay \"plump\"." }
    ]
  }
});
