TOPIC('en', {
  id: "l2-sci-cellula",
  title: "The cell",
  intro: "Every living thing, from a bacterium to a blue whale, is made of <b>cells</b>: tiny units that breathe, feed, reproduce and respond to their surroundings. Your body contains tens of trillions of them. In this lesson we find out how a cell is built, how <b>prokaryotes</b> differ from <b>eukaryotes</b> and <b>animal</b> cells from <b>plant</b> cells, and what each of its <b>organelles</b> does: a real city in miniature.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Cell theory: how we arrived at a simple idea",
      html: `<p>In <b>1665</b> the Englishman <b>Robert Hooke</b>, looking at a thin slice of cork through a primitive microscope, saw many small, regular cavities which he called <i>cells</i> (like the small rooms of monks). What he was actually seeing were the walls of dead plant cells. A few years later the Dutchman <b>Antoni van Leeuwenhoek</b>, using lenses he had made himself, was the first to observe bacteria, protozoa and sperm cells, which he called "animalcules".</p>
<p>Only in the nineteenth century did these observations become a theory:</p>
<ul>
<li><b>1838-1839</b>: the botanist <b>Matthias Schleiden</b> and the zoologist <b>Theodor Schwann</b> state that plants and animals are made of cells;</li>
<li><b>1855</b>: <b>Rudolf Virchow</b> sums it up: <i>omnis cellula e cellula</i>, every cell comes from another cell (an idea already put forward by Robert Remak).</li>
</ul>
<p>So the three principles of <b>cell theory</b> are:</p>
<ol>
<li>all living things are made of one or more cells;</li>
<li>the cell is the basic structural and functional unit of life;</li>
<li>every cell arises from another pre-existing cell (which disproved spontaneous generation, already questioned by Redi and later by Pasteur).</li>
</ol>
<p>Organisms can be <b>unicellular</b> (bacteria, yeasts, amoebas) or <b>multicellular</b> (plants, animals, fungi such as porcini mushrooms), in which cells specialise and form tissues, organs and organ systems.</p>`
    },
    {
      type: "example",
      title: "How big is a cell? Magnification and scale",
      html: `<p>A typical cell has a diameter of 10-100 µm (1 µm = 1 micrometre = one thousandth of a millimetre): too small for the naked eye, which can at best distinguish about 0.1 mm = 100 µm. To see it you need a <b>light microscope</b>, which magnifies 40-1000 times; for internal details (organelles, viruses) the <b>electron microscope</b> reaches hundreds of thousands of times.</p>
<p>The total magnification is the product of the eyepiece and objective magnifications: with a 10× eyepiece and a 40× objective you get 10 × 40 = <b>400×</b>. If under the microscope a cell appears 2 cm = 20,000 µm wide, its real size is:</p>
<p><b>20,000 µm ÷ 400 = 50 µm</b>.</p>
<p>For comparison: a red blood cell measures about 7 µm; a common bacterium 1-5 µm; a hen's egg (a single cell, the yolk) about 3 cm; a nerve cell can have an extension (axon) more than a metre long.</p>`
    },
    {
      type: "example",
      title: "Why are cells small? The surface area to volume ratio",
      html: `<p>A cell exchanges oxygen, nutrients and waste with its surroundings <b>through its surface</b>, but what it consumes depends on its <b>volume</b>. Let's model it as a cube with side <i>l</i>:</p>
<table>
<tr><th>Side</th><th>Surface area (6 l²)</th><th>Volume (l³)</th><th>Surface area / Volume</th></tr>
<tr><td>1 µm</td><td>6 µm²</td><td>1 µm³</td><td><b>6</b></td></tr>
<tr><td>10 µm</td><td>600 µm²</td><td>1000 µm³</td><td><b>0.6</b></td></tr>
<tr><td>100 µm</td><td>60,000 µm²</td><td>1,000,000 µm³</td><td><b>0.06</b></td></tr>
</table>
<p>The SA/V ratio equals 6/<i>l</i>: if you double the side, the surface area becomes four times bigger but the volume eight times bigger. A cell that was too large would have too little surface to "supply" its whole interior. That is why large organisms don't have huge cells but <b>many small cells</b>; and cells specialised in exchange (like those of the intestine) have their membrane folded into <b>microvilli</b> to increase the surface area.</p>`
    },
    {
      type: "text",
      title: "Two great models: prokaryotes and eukaryotes",
      html: `<p>All cells share four components: a <b>plasma membrane</b> that surrounds them, the <b>cytoplasm</b> (a jelly-like solution, the <i>cytosol</i>, containing the organelles), <b>ribosomes</b> that build proteins, and <b>DNA</b>, which holds the instructions. The way DNA is organised gives rise to the two models:</p>
<table>
<tr><th></th><th>Prokaryotic cell</th><th>Eukaryotic cell</th></tr>
<tr><td>Organisms</td><td>Bacteria and Archaea</td><td>Protists, fungi, plants, animals</td></tr>
<tr><td>Typical size</td><td>1-10 µm</td><td>10-100 µm</td></tr>
<tr><td>DNA</td><td>one circular chromosome free in the <b>nucleoid</b> (plus any <b>plasmids</b>)</td><td>several linear chromosomes enclosed in the <b>nucleus</b> by the nuclear membrane</td></tr>
<tr><td>Membrane-bound organelles</td><td>absent</td><td>present (mitochondria, reticulum, Golgi...)</td></tr>
<tr><td>Ribosomes</td><td>smaller (70S)</td><td>larger (80S) in the cytoplasm</td></tr>
<tr><td>Wall</td><td>often present (made of peptidoglycan in bacteria)</td><td>only in plants (cellulose), fungi (chitin) and algae</td></tr>
</table>
<p>"Prokaryote" means "before the nucleus", "eukaryote" "true nucleus". Prokaryotes appeared about <b>3.5-3.8 billion years ago</b>, eukaryotes about 1.5-2 billion years ago. Many prokaryotes have <b>flagella</b> to move, <b>pili</b> to attach themselves, and a protective <b>capsule</b>. They reproduce by <b>binary fission</b> and, under ideal conditions, some double every 20-30 minutes.</p>
<p><b>Viruses</b> are a special case: they are pieces of genetic material (DNA or RNA) enclosed in a protein coat. They have no metabolism and no ribosomes and can only reproduce inside a host cell, which is why they are usually not considered living things in the strict sense.</p>`
    },
    {
      type: "svg",
      title: "Prokaryotic and eukaryotic cells compared",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="70" width="230" height="150" rx="60" fill="#fef3c7" stroke="#92400e" stroke-width="4"/>
<rect x="30" y="80" width="210" height="130" rx="52" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<path d="M95 150 C95 115 135 115 135 140 C135 170 165 165 160 135 C158 120 120 190 100 165" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="180" cy="170" r="10" fill="none" stroke="#7c3aed" stroke-width="3"/>
<circle cx="65" cy="120" r="4" fill="#b91c1c"/><circle cx="200" cy="110" r="4" fill="#b91c1c"/><circle cx="110" cy="195" r="4" fill="#b91c1c"/><circle cx="215" cy="150" r="4" fill="#b91c1c"/>
<path d="M20 145 C-5 120 -5 175 10 160" fill="none" stroke="#475569" stroke-width="3"/>
<text x="135" y="50" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">PROKARYOTE (bacterium)</text>
<text x="135" y="245" font-size="14" fill="#7c3aed" text-anchor="middle" font-weight="bold">circular DNA + plasmid</text>
<text x="135" y="265" font-size="14" fill="#b91c1c" text-anchor="middle" font-weight="bold">ribosomes · no nucleus</text>
<ellipse cx="440" cy="150" rx="140" ry="95" fill="#dbeafe" stroke="#1d4ed8" stroke-width="4"/>
<circle cx="420" cy="140" r="42" fill="#e9d5ff" stroke="#7c3aed" stroke-width="3"/>
<path d="M400 140 C410 120 430 160 445 135" fill="none" stroke="#6d28d9" stroke-width="3"/>
<ellipse cx="510" cy="110" rx="26" ry="14" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
<ellipse cx="500" cy="190" rx="26" ry="14" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
<path d="M360 200 q15 -12 30 0 q15 12 30 0" fill="none" stroke="#16a34a" stroke-width="4"/>
<circle cx="365" cy="105" r="5" fill="#b91c1c"/><circle cx="380" cy="95" r="5" fill="#b91c1c"/><circle cx="470" cy="165" r="5" fill="#b91c1c"/>
<text x="440" y="50" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">EUKARYOTE (animal)</text>
<text x="420" y="145" font-size="14" fill="#4c1d95" text-anchor="middle" font-weight="bold">nucleus</text>
<text x="515" y="150" font-size="14" fill="#991b1b" text-anchor="middle" font-weight="bold">mitochondria</text>
<text x="440" y="265" font-size="14" fill="#1e40af" text-anchor="middle" font-weight="bold">DNA in the nucleus + membrane-bound organelles</text>
</svg>`,
      caption: "The bacterium has its DNA free in the cytoplasm; the eukaryotic cell keeps it in the nucleus and has organelles surrounded by membranes."
    },
    {
      type: "text",
      title: "The organelles of the eukaryotic cell",
      html: `<p><b>Organelles</b> are specialised compartments, like the departments of a factory. The membranes that separate them make it possible to carry out incompatible chemical reactions side by side.</p>
<ul>
<li><b>Plasma membrane</b>: a phospholipid bilayer with proteins; it controls what goes in and out (more on this in the next lesson).</li>
<li><b>Nucleus</b>: contains the DNA, wrapped around proteins (<i>histones</i>) to form <b>chromatin</b>, which condenses into chromosomes during division. It is surrounded by the <b>nuclear envelope</b> (two membranes with pores) and contains the <b>nucleolus</b>, where ribosomes are built.</li>
<li><b>Ribosomes</b>: build proteins by reading messenger RNA. They have no membrane. They are free or attached to the reticulum.</li>
<li><b>Rough endoplasmic reticulum (RER)</b>: a network of sacs with ribosomes on the surface; it makes proteins that will be secreted or inserted into membranes.</li>
<li><b>Smooth endoplasmic reticulum (SER)</b>: has no ribosomes; it synthesises lipids, breaks down toxic substances (abundant in the liver) and stores calcium in muscle cells.</li>
<li><b>Golgi apparatus</b> (described by Camillo Golgi in 1898): stacks of sacs that modify, sort and "package" the products of the reticulum into vesicles, shipping them to their destination.</li>
<li><b>Lysosomes</b>: vesicles full of digestive enzymes that break down molecules, bacteria and old organelles (the cell's "recycling centre").</li>
<li><b>Mitochondria</b>: the "power station". Through <b>cellular respiration</b> they use oxygen to obtain lots of <b>ATP</b>, the cell's energy currency, from glucose. They have a double membrane (the inner one folded into <b>cristae</b>) and a small DNA of their own.</li>
<li><b>Peroxisomes</b>: vesicles that break down fatty acids and neutralise the hydrogen peroxide produced by reactions.</li>
<li><b>Cytoskeleton</b>: a network of protein filaments (microfilaments, intermediate filaments, microtubules) that gives the cell its shape and allows movement and internal transport.</li>
<li><b>Centrioles</b> (in animal cells): a pair of microtubule cylinders that organise the spindle during division.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Identify the organelle: label the diagram",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><ellipse cx="300" cy="150" rx="270" ry="130" fill="#dbeafe" stroke="#1d4ed8" stroke-width="5"/><circle cx="260" cy="140" r="55" fill="#e9d5ff" stroke="#7c3aed" stroke-width="4"/><circle cx="250" cy="135" r="14" fill="#7c3aed"/><ellipse cx="430" cy="100" rx="42" ry="22" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/><path d="M400 100 q10 -10 20 0 q10 10 20 0" fill="none" stroke="#b91c1c" stroke-width="3"/><path d="M360 200 q20 -18 40 0 q20 18 40 0 q20 -18 40 0" fill="none" stroke="#15803d" stroke-width="6"/><path d="M160 90 q30 -25 60 -10 M165 70 q30 -25 60 -10" fill="none" stroke="#0369a1" stroke-width="5"/><circle cx="170" cy="210" r="16" fill="#fde047" stroke="#a16207" stroke-width="3"/></svg>`,
        spots: [
          { x: 260, y: 140, label: "Nucleus" },
          { x: 250, y: 135, label: "Nucleolus" },
          { x: 430, y: 100, label: "Mitochondrion" },
          { x: 400, y: 200, label: "Endoplasmic reticulum" },
          { x: 190, y: 80, label: "Golgi apparatus" },
          { x: 170, y: 210, label: "Lysosome" }
        ]
      },
      caption: "Click a point on the diagram and choose the name of the organelle."
    },
    {
      type: "quiz",
      title: "Mini-quiz: the cell and its organelles",
      questions: [
        { type: "mc", q: "Which organelle produces most of the ATP in an animal cell?", options: ["Mitochondrion", "Lysosome", "Golgi apparatus"], answer: 0, explain: "Cellular respiration takes place in the mitochondria." },
        { type: "tf", q: "A prokaryotic cell has its DNA enclosed in a membrane-bound nucleus.", answer: false, explain: "Prokaryotes have their DNA free in the cytoplasm, in the region called the nucleoid." },
        { type: "num", q: "With a 10× eyepiece and a 20× objective, what is the total magnification?", answer: 200, unit: "×", explain: "Magnification is the product: 10 × 20 = 200." }
      ]
    },
    {
      type: "text",
      title: "Animal cells and plant cells",
      html: `<p>Plants and animals are both eukaryotes and share the nucleus, mitochondria, reticulum and Golgi. But the stationary, "autotrophic" life of a plant requires extra structures:</p>
<ul>
<li>A <b>cell wall</b> made of <b>cellulose</b>, outside the membrane: rigid, it gives shape and support (wood is made of cell walls). Cells communicate through <b>plasmodesmata</b>, channels that pierce the wall.</li>
<li><b>Chloroplasts</b>: they contain <b>chlorophyll</b> and carry out <b>photosynthesis</b>: using light, they turn water and carbon dioxide into glucose and oxygen (6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂). They have a double membrane and their own DNA.</li>
<li><b>Central vacuole</b>: a large sac (up to 80-90% of the volume) full of water and dissolved substances; it pushes against the wall, producing the <b>turgor</b> that keeps a plant upright (a plant without water wilts: the vacuoles deflate).</li>
</ul>
<p>The animal cell, on the other hand, has <b>centrioles</b> and well-developed lysosomes, and has no wall, so it can take on different shapes (neurons, red blood cells, muscle cells) and engulf particles. The cells of <b>fungi</b> have a wall made of <b>chitin</b>, but no chloroplasts.</p>
<table>
<tr><th>Structure</th><th>Animal</th><th>Plant</th></tr>
<tr><td>Nucleus, mitochondria, Golgi, reticulum</td><td>yes</td><td>yes</td></tr>
<tr><td>Cellulose wall</td><td>no</td><td>yes</td></tr>
<tr><td>Chloroplasts</td><td>no</td><td>yes (in green parts)</td></tr>
<tr><td>Large central vacuole</td><td>no (small vesicles)</td><td>yes</td></tr>
<tr><td>Centrioles</td><td>yes</td><td>no (in higher plants)</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Animal, plant or both?",
      widget: "classify",
      options: { groups: ["Animal cell only", "Plant cell only", "Both"], items: [
        ["Cellulose wall", 1],
        ["Mitochondria", 2],
        ["Chloroplasts", 1],
        ["Centrioles", 0],
        ["Nucleus", 2],
        ["Large central vacuole", 1],
        ["Golgi apparatus", 2],
        ["Ribosomes", 2]
      ] },
      caption: "Remember: plants have mitochondria too, because they respire like all eukaryotes."
    },
    {
      type: "3d",
      title: "Inside a cell: the layers, from the outside to the nucleus",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#3b82f6", label: "Plasma membrane" },
        { r: 0.9, color: "#93c5fd", label: "Cytoplasm with organelles" },
        { r: 0.5, color: "#a855f7", label: "Nucleus (nuclear envelope)" },
        { r: 0.2, color: "#f59e0b", label: "Nucleolus" }
      ] },
      caption: "Rotate the sphere: the cut-away wedge shows the concentric structures of a eukaryotic cell (simplified diagram)."
    },
    {
      type: "curiosity",
      title: "Are mitochondria tamed bacteria?",
      html: `<p>Mitochondria and chloroplasts have a double membrane, their own <b>circular DNA</b> and bacterial-type ribosomes, and they divide on their own. In <b>1967</b> the American biologist <b>Lynn Margulis</b> (then Lynn Sagan) revived and developed the <b>endosymbiotic theory</b>: about 2 billion years ago a host cell engulfed a bacterium able to use oxygen, which instead of being digested stayed and lived inside it, providing energy in exchange for protection. A second similar event involving a photosynthetic cyanobacterium led to chloroplasts. The theory was mocked at first, but DNA data have confirmed it. Even today, mitochondrial DNA is (in humans) almost always inherited from the mother.</p>`
    },
    {
      type: "curiosity",
      title: "How many cells do you have? And how many do you lose each day?",
      html: `<p>The most recent estimates give an adult weighing 70 kg about <b>30-40 trillion</b> (3-4 × 10¹³) human cells, plus a similar number of bacteria in the gut microbiota. Cells live very different lives: those lining the intestine last a few days, red blood cells about 120 days (and they have no nucleus!), while many neurons in the cortex stay with us for our whole life. Every second your body replaces millions of them.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the cell",
      intro: "If the list of organelles feels like something to learn by heart, try a different point of view.",
      tabs: [
        {
          label: "🏙️ The cell as a city",
          html: `<p>The <b>nucleus</b> is the town hall with the archive of laws (DNA). The <b>ribosomes</b> are the building sites that make what is needed (proteins), following the plans sent out as RNA, like copies from the archive. The <b>reticulum</b> is the network of roads and warehouses, the <b>Golgi</b> the post office that sorts and ships parcels. The <b>mitochondria</b> are the power stations, the <b>lysosomes</b> the waste collection and recycling service, the <b>membrane</b> the city walls with customs checks, the <b>cytoskeleton</b> the scaffolding and railway tracks. In plants, the <b>chloroplasts</b> are the solar panels and the <b>wall</b> a concrete boundary wall.</p>`
        },
        {
          label: "📐 Comparing sizes",
          html: `<p>If a bacterium were a person 1.7 m tall, a typical eukaryotic cell would be as tall as a 5-10 storey building (about 17-170 m) and a mitochondrion would be roughly the size of a person. In fact, a mitochondrion measures about 1-2 µm, as much as a bacterium: a clue to the "bacterial" origin we have seen. A virus (30-300 nm), by contrast, would be an object the size of a child or a dog compared with the giant bacterium.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="40" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="3"/><circle cx="80" cy="250" r="5" fill="#16a34a"/><text x="80" y="230" font-size="14" fill="#166534" text-anchor="middle" font-weight="bold">virus</text><text x="80" y="275" font-size="14" fill="#334155" text-anchor="middle">0.1 µm</text><circle cx="190" cy="250" r="9" fill="#f59e0b"/><text x="190" y="225" font-size="14" fill="#92400e" text-anchor="middle" font-weight="bold">bacterium</text><text x="190" y="275" font-size="14" fill="#334155" text-anchor="middle">2 µm</text><circle cx="330" cy="250" r="22" fill="#60a5fa"/><text x="330" y="205" font-size="14" fill="#1e40af" text-anchor="middle" font-weight="bold">red blood cell 7 µm</text><text x="330" y="275" font-size="14" fill="#334155" text-anchor="middle">7 µm</text><circle cx="470" cy="215" r="50" fill="#c4b5fd"/><text x="470" y="220" font-size="14" fill="#4c1d95" text-anchor="middle" font-weight="bold">cell</text><text x="470" y="275" font-size="14" fill="#334155" text-anchor="middle">~50 µm</text></svg>`
        },
        {
          label: "🧩 A step-by-step classification",
          html: `<p>To find your way, use three questions in sequence: <b>1)</b> Is the DNA inside a nucleus? No → prokaryote. Yes → eukaryote. <b>2)</b> Is there a cellulose wall? No → animal (or fungus/protist). Yes → plant. <b>3)</b> Are there chloroplasts? Yes → capable of photosynthesis (plant or alga). With three questions you can tell apart the main cell models.</p>`
        }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul><li>Cell theory: all living things are made of cells, the cell is the unit of life, every cell comes from another cell.</li><li>Prokaryote: no nucleus, no membrane-bound organelles. Eukaryote: nucleus and organelles.</li><li>Mitochondria: energy (ATP). Chloroplasts: photosynthesis. Ribosomes: proteins. Golgi: sorting. Lysosomes: digestion.</li><li>Plant cell: in addition, a cellulose wall, chloroplasts, a large vacuole.</li></ul>`
    },
    {
      type: "conceptMap",
      title: "Map of the cell: tap the nodes and find out why",
      nodes: [
        { id: "teoria", label: "Cell theory", x: 50, y: 6, color: "#3b82f6", html: "Every living thing is made of cells and every cell comes from a cell.", why: "It was born from the microscope: without better lenses Hooke (1665) and Leeuwenhoek would have seen nothing. Schleiden and Schwann (1838-39) unified plants and animals; Virchow (1855) ruled out spontaneous generation, which was confirmed by Pasteur's experiments (1860-65)." },
        { id: "procarioti", label: "Prokaryotes", x: 18, y: 32, color: "#f59e0b", html: "Bacteria and Archaea: DNA in the nucleoid, no membrane-bound organelles.", why: "They are the oldest and simplest cells. Carl Woese (1977), comparing ribosomal RNA, discovered that the Archaea are a group distinct from bacteria: life is divided into three domains." },
        { id: "eucarioti", label: "Eukaryotes", x: 82, y: 32, color: "#a855f7", html: "Nucleus and organelles: animals, plants, fungi, protists.", why: "They are thought to derive from a host cell that engulfed other prokaryotes: internal compartments allow specialised reactions and larger cells." },
        { id: "organuli", label: "Organelles", x: 82, y: 58, color: "#22c55e", html: "Nucleus, mitochondria, reticulum, Golgi, lysosomes, chloroplasts...", why: "They were discovered with the electron microscope (1930s-1950s) and with centrifugation, which separates organelles by weight so they can be studied. Golgi saw his apparatus as early as 1898, using a silver salt stain." },
        { id: "endosimbiosi", label: "Endosymbiosis", x: 50, y: 82, color: "#ef4444", html: "Mitochondria and chloroplasts derive from engulfed bacteria.", why: "Lynn Margulis (1967) put the clues together: their own DNA, a double membrane, ribosomes similar to bacterial ones, independent division. Comparing DNA sequences has shown that mitochondria are related to alphaproteobacteria and chloroplasts to cyanobacteria." },
        { id: "vegetale", label: "Plant cell", x: 18, y: 58, color: "#14b8a6", html: "Wall, chloroplasts, central vacuole.", why: "A plant cannot move around to look for food, but it can make its own using light: hence the chloroplasts; since it has no skeleton, it supports its body with rigid walls and turgor." },
        { id: "sv", label: "SA/V ratio", x: 50, y: 40, color: "#06b6d4", html: "Surface area and volume limit cell size.", why: "Volume grows with the cube of the side, surface area with the square: it is a matter of pure geometry, and it explains why large bodies are made of many small cells." }
      ],
      edges: [
        ["teoria", "procarioti", "applies to"],
        ["teoria", "eucarioti", "applies to"],
        ["eucarioti", "organuli", "have"],
        ["organuli", "endosimbiosi", "origin of some"],
        ["eucarioti", "vegetale", "includes"],
        ["sv", "eucarioti", "limits the size"],
        ["procarioti", "endosimbiosi", "are its protagonists"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: comparisons",
      questions: [
        { type: "mc", q: "Which structure is found in plant cells but not in animal cells?", options: ["Mitochondria", "Cellulose wall", "Ribosomes"], answer: 1, explain: "The cellulose wall, together with chloroplasts and the central vacuole, is typical of plant cells." },
        { type: "order", q: "Put in order of increasing size.", items: ["Virus", "Bacterium", "Red blood cell", "Hen's egg"], explain: "Virus (tens to hundreds of nm), bacterium (1-5 µm), red blood cell (7 µm), egg yolk (about 3 cm)." },
        { type: "tf", q: "A cube with a side of 100 µm has a larger surface area/volume ratio than one with a side of 10 µm.", answer: false, explain: "SA/V = 6/l: the bigger the cube, the smaller the ratio (0.06 versus 0.6)." }
      ]
    }
  ],
  glossary: [
    { t: "Cell", d: "The basic structural and functional unit of all living things." },
    { t: "Prokaryote", d: "A cell without a membrane-bound nucleus (bacteria and archaea)." },
    { t: "Eukaryote", d: "A cell with a nucleus and membrane-bound organelles." },
    { t: "Organelle", d: "A specialised compartment inside the cell." },
    { t: "Nucleus", d: "The organelle that contains the DNA of a eukaryotic cell." },
    { t: "Mitochondrion", d: "The organelle where most ATP is produced through cellular respiration." },
    { t: "Chloroplast", d: "The organelle of plant cells where photosynthesis takes place." },
    { t: "Ribosome", d: "A structure that builds proteins by reading messenger RNA." },
    { t: "Golgi apparatus", d: "The organelle that modifies and sorts the substances made by the cell." },
    { t: "Lysosome", d: "A vesicle with digestive enzymes that breaks down molecules and old organelles." },
    { t: "Cell wall", d: "A rigid covering outside the membrane of plants, fungi and bacteria." },
    { t: "ATP", d: "A molecule that stores and transfers energy in cells." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Who published the first observations of \"cells\" in cork in 1665?", options: ["Robert Hooke", "Louis Pasteur", "Charles Darwin"], answer: 0, explain: "Hooke, in his Micrographia, described the small cavities in cork and called them cells." },
      { type: "tf", q: "According to cell theory, every cell comes from another pre-existing cell.", answer: true, explain: "This is Virchow's principle: omnis cellula e cellula." },
      { type: "mc", q: "Which feature distinguishes a eukaryotic cell from a prokaryotic one?", options: ["The presence of DNA", "The presence of a membrane-bound nucleus", "The presence of ribosomes"], answer: 1, explain: "DNA and ribosomes are found in both; a membrane-bound nucleus is found only in eukaryotes." },
      { type: "mc", q: "Where does photosynthesis take place?", options: ["In the mitochondria", "In the lysosomes", "In the chloroplasts"], answer: 2, explain: "Chloroplasts contain chlorophyll, which captures light energy." },
      { type: "num", q: "Under a microscope with a 10× eyepiece and a 40× objective, a cell appears 1.2 cm (12,000 µm) wide. How wide is it really, in µm?", answer: 30, unit: "µm", explain: "Magnification = 10 × 40 = 400; 12,000 ÷ 400 = 30 µm." },
      { type: "text", q: "What is the name of the organelle that works as the cell's power station?", answer: ["mitochondrion", "mitochondria", "the mitochondrion", "the mitochondria", "mitochondrium"], explain: "In the mitochondria, cellular respiration produces ATP." },
      { type: "tf", q: "Plant cells have no mitochondria because they produce energy through photosynthesis.", answer: false, explain: "Plants respire too: they do have mitochondria, which use the glucose produced by the chloroplasts." },
      { type: "order", q: "Put in order the path of a protein that will be secreted.", items: ["Synthesis on the ribosomes of the RER", "Passage through the reticulum", "Modification in the Golgi apparatus", "Exit in a vesicle"], explain: "Ribosomes of the RER, inside the reticulum, the Golgi that modifies and sorts it, then a vesicle towards the membrane." },
      { type: "mc", q: "Why can't a cell grow indefinitely?", options: ["Because the surface area/volume ratio decreases and exchanges become insufficient", "Because the nucleus cannot get bigger", "Because cells have no energy"], answer: 0, explain: "Volume grows faster than the surface through which exchanges take place." },
      { type: "mc", q: "What does the endosymbiotic theory claim?", options: ["Mitochondria derive from bacteria engulfed by a host cell", "The nucleus derives from a virus", "Plants derive from fungi"], answer: 0, explain: "Proposed by Lynn Margulis in 1967, it is supported by the DNA, double membrane and ribosomes of mitochondria." }
    ]
  }
});
