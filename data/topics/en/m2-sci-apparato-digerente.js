TOPIC('en', {
  id: "m2-sci-apparato-digerente",
  title: "The digestive system",
  intro: "A sandwich cannot enter your cells just as it is: it has to be <b>broken up</b> into tiny molecules. This job is done by the <b>digestive system</b>, a tube about <b>8–9 metres</b> long that runs from the mouth to the anus, helped by glands such as the liver and the pancreas.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Why we have to digest",
      html: `<p>Foods contain <b>nutrients</b>:</p>
<ul>
<li><b>carbohydrates</b> (bread, pasta, fruit): ready energy;</li>
<li><b>proteins</b> (meat, fish, pulses, eggs): used to build and repair tissues;</li>
<li><b>fats</b> or lipids (oil, butter): reserve energy and building the membranes;</li>
<li><b>vitamins</b>, <b>mineral salts</b> and <b>water</b>, which do not need to be digested.</li>
</ul>
<p>Carbohydrates, proteins and fats, however, are <b>macromolecules</b>, too big to cross the wall of the intestine. <b>Digestion</b> breaks them into simple molecules:</p>
<table>
<tr><th>Macromolecule</th><th>→ becomes</th></tr>
<tr><td>starch, sucrose (carbohydrates)</td><td><b>glucose</b> and other simple sugars</td></tr>
<tr><td>proteins</td><td><b>amino acids</b></td></tr>
<tr><td>fats</td><td><b>fatty acids and glycerol</b></td></tr>
</table>
<p>Digestion is both <b>mechanical</b> (chewing, churning) and <b>chemical</b>, thanks to <b>enzymes</b>: special proteins that, like molecular scissors, cut one precise type of molecule.</p>
<p>There are four stages: <b>ingestion</b> → <b>digestion</b> → <b>absorption</b> → <b>elimination</b> (egestion).</p>`
    },
    {
      type: "widget",
      title: "The food's journey: name the organs",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="420" fill="#fff7ed"/>
<ellipse cx="300" cy="40" rx="60" ry="28" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<rect x="290" y="68" width="20" height="110" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
<path d="M300 175 C380 160 420 200 400 240 C385 270 330 260 320 235 C310 215 300 200 300 175 Z" fill="#f9a8d4" stroke="#9d174d" stroke-width="3"/>
<path d="M180 150 C230 130 290 150 290 175 C280 210 220 220 180 200 C160 190 160 160 180 150 Z" fill="#92400e" stroke="#451a03" stroke-width="3"/>
<path d="M280 260 C310 275 350 270 370 255" fill="none" stroke="#ca8a04" stroke-width="16"/>
<path d="M200 280 L200 380 L420 380 L420 280 Z" fill="none" stroke="#a16207" stroke-width="22"/>
<path d="M240 300 q20 15 40 0 q20 -15 40 0 q20 15 40 0 M240 330 q20 15 40 0 q20 -15 40 0 q20 15 40 0 M240 355 q20 15 40 0 q20 -15 40 0 q20 15 40 0" fill="none" stroke="#f472b6" stroke-width="10"/>
<rect x="290" y="380" width="20" height="30" fill="#a16207"/>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Mouth" },
          { x: 300, y: 120, label: "Oesophagus" },
          { x: 360, y: 215, label: "Stomach" },
          { x: 215, y: 175, label: "Liver" },
          { x: 330, y: 268, label: "Pancreas" },
          { x: 300, y: 330, label: "Small intestine" },
          { x: 420, y: 330, label: "Large intestine" },
          { x: 300, y: 400, label: "Rectum and anus" }
        ]
      },
      caption: "A simplified diagram. The liver is on the person's right (that is, on the left in the drawing, which shows the body from the front)."
    },
    {
      type: "text",
      title: "2. Mouth, pharynx and oesophagus",
      html: `<p>Digestion begins in the <b>mouth</b>:</p>
<ul>
<li>the <b>teeth</b> cut and grind (mechanical digestion). An adult has <b>32 teeth</b>: 8 incisors (cut), 4 canines (tear), 8 premolars and 12 molars (grind). Children have 20 milk teeth;</li>
<li>the <b>salivary glands</b> produce about 1–1.5 litres of <b>saliva</b> a day. Saliva moistens the food and contains the enzyme <b>salivary amylase</b> (ptyalin), which starts turning starch into sugars;</li>
<li>the <b>tongue</b> mixes it and forms the <b>bolus</b>, a soft little ball.</li>
</ul>
<p>With <b>swallowing</b> the bolus passes into the <b>pharynx</b>; a little flap, the <b>epiglottis</b>, closes the windpipe so the food does not go into the lungs. Then the bolus goes down the <b>oesophagus</b>, a tube about 25 cm long, pushed by <b>peristalsis</b>: waves of muscle contraction, like when you squeeze a tube of toothpaste. It works even upside down!</p>`
    },
    {
      type: "3d",
      title: "Inside a tooth, in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#f8fafc", label: "Enamel (the hardest tissue in the body)" },
          { r: 0.82, color: "#fde68a", label: "Dentine" },
          { r: 0.45, color: "#f87171", label: "Pulp (nerves and vessels)" }
        ]
      },
      caption: "Enamel is made mostly of hydroxyapatite, a mineral of calcium and phosphate. Plaque bacteria, feeding on sugars, produce acids that dissolve it: this is tooth decay. That is why you brush your teeth after every meal!"
    },
    {
      type: "text",
      title: "3. The stomach",
      html: `<p>The <b>stomach</b> is a muscular "J"-shaped bag that can hold up to 1–1.5 litres. The bolus enters through a valve, the <b>cardia</b>, and stays in the stomach for <b>2 to 4 hours</b>.</p>
<p>Its walls produce <b>gastric juice</b> (about 2 litres a day), which contains:</p>
<ul>
<li><b>hydrochloric acid</b> (HCl): makes the environment very acidic (pH 1.5–2), kills many bacteria and activates the enzymes;</li>
<li><b>pepsin</b>: an enzyme that begins to break down <b>proteins</b>;</li>
<li><b>mucus</b>: protects the stomach wall from its own acid.</li>
</ul>
<p>The muscles churn the food and turn it into a semi-liquid paste, the <b>chyme</b>, which passes in small doses into the intestine through another valve, the <b>pylorus</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: mouth and stomach",
      questions: [
        { type: "mc", q: "Which enzyme in saliva starts digesting starch?", options: ["Pepsin", "Amylase", "Lipase"], answer: 1, explain: "Salivary amylase (ptyalin) turns starch into simpler sugars." },
        { type: "text", q: "What is the little ball of chewed food formed in the mouth called?", answer: ["bolus", "the bolus", "food bolus"], explain: "The food bolus." },
        { type: "tf", q: "The stomach protects itself from its own acid thanks to mucus.", answer: true, explain: "The layer of mucus stops the hydrochloric acid from damaging the wall." },
        { type: "num", q: "How many teeth does an adult with a full set have?", answer: 32, explain: "8 incisors, 4 canines, 8 premolars, 12 molars." }
      ]
    },
    {
      type: "text",
      title: "4. The small intestine: final digestion and absorption",
      html: `<p>The <b>small intestine</b> is about <b>6–7 metres</b> long and has three sections: the <b>duodenum</b> (about 25 cm), the <b>jejunum</b> and the <b>ileum</b>. Here digestion is completed thanks to three juices:</p>
<ul>
<li><b>bile</b>, produced by the <b>liver</b> and stored in the <b>gallbladder</b>: it is not an enzyme, but it <b>emulsifies</b> fats, that is it splits them into tiny droplets (as soap does with oil), so the enzymes attack them better;</li>
<li><b>pancreatic juice</b>, produced by the <b>pancreas</b>: it neutralises the acidity of the chyme and contains enzymes for all the nutrients (amylase, trypsin, lipase);</li>
<li><b>intestinal juice</b>, produced by the intestinal wall, which completes the job.</li>
</ul>
<p>In the end the food has become <b>chyle</b>: a liquid with glucose, amino acids, fatty acids, vitamins, salts and water.</p>
<p>Now <b>absorption</b> takes place. The inner wall of the small intestine is covered with millions of <b>villi</b>, little fingers about 1 mm tall, themselves covered with <b>microvilli</b>. Thanks to these folds the absorbing surface is huge: about <b>30–40 m²</b>, like a small flat! Inside each villus there are <b>blood capillaries</b> (which absorb sugars and amino acids and carry them to the liver) and a <b>lymph vessel</b> (which absorbs most of the fats).</p>`
    },
    {
      type: "svg",
      title: "The intestinal villi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf2f8"/>
<rect x="0" y="230" width="600" height="70" fill="#f9a8d4"/>
<g fill="#fbcfe8" stroke="#be185d" stroke-width="3">
<path d="M40 230 L40 110 Q70 70 100 110 L100 230 Z"/>
<path d="M130 230 L130 90 Q160 50 190 90 L190 230 Z"/>
<path d="M220 230 L220 110 Q250 70 280 110 L280 230 Z"/>
<path d="M310 230 L310 90 Q340 50 370 90 L370 230 Z"/>
</g>
<path d="M150 225 L150 100 Q160 80 170 100 L170 225" fill="none" stroke="#dc2626" stroke-width="5"/>
<path d="M155 225 L155 105 M165 105 L165 225" stroke="#2563eb" stroke-width="3"/>
<line x1="160" y1="225" x2="160" y2="110" stroke="#eab308" stroke-width="5"/>
<circle cx="70" cy="40" r="9" fill="#22c55e"/><circle cx="250" cy="45" r="9" fill="#22c55e"/><circle cx="330" cy="30" r="9" fill="#22c55e"/>
<circle cx="120" cy="60" r="7" fill="#f97316"/><circle cx="300" cy="65" r="7" fill="#f97316"/>
<text x="400" y="40" font-size="16" fill="#15803d">● glucose</text>
<text x="400" y="65" font-size="16" fill="#c2410c">● amino acids</text>
<text x="400" y="110" font-size="16" fill="#b91c1c">blood capillaries</text>
<text x="400" y="135" font-size="16" fill="#a16207">lymph vessel (fats)</text>
<text x="400" y="180" font-size="16" fill="#9d174d" font-weight="bold">villus ≈ 1 mm</text>
<text x="300" y="275" font-size="17" text-anchor="middle" fill="#831843" font-weight="bold">wall of the small intestine</text>
</svg>`,
      caption: "Small molecules cross the wall of the villi and enter the blood or the lymph."
    },
    {
      type: "text",
      title: "5. Large intestine and elimination",
      html: `<p>What has not been absorbed passes into the <b>large intestine</b> (about <b>1.5 metres</b>), made up of the <b>caecum</b> (with the <b>appendix</b>), the <b>colon</b> (ascending, transverse, descending) and the <b>rectum</b>.</p>
<ul>
<li>Here most of the <b>water</b> and salts are reabsorbed.</li>
<li>Trillions of <b>friendly bacteria</b> live here (the <b>gut microbiota</b>): they digest part of the plant <b>fibre</b>, produce vitamins such as <b>K</b> and some of the B group and protect us from harmful microbes.</li>
<li>The residues become compact and form the <b>faeces</b>, eliminated through the <b>anus</b>.</li>
</ul>
<p><b>Fibre</b> (in vegetables, fruit, wholegrain cereals, pulses) is not digested by us, but it is essential: it helps the intestine move and feeds the friendly bacteria.</p>
<p>The complete journey of food usually lasts from <b>24 to 72 hours</b>.</p>`
    },
    {
      type: "widget",
      title: "Who digests what?",
      widget: "match",
      options: {
        pairs: [
          ["Amylase (saliva and pancreas)", "Starch → sugars"],
          ["Pepsin (stomach)", "Proteins → smaller pieces"],
          ["Trypsin (pancreas)", "Proteins → amino acids"],
          ["Lipase (pancreas)", "Fats → fatty acids and glycerol"],
          ["Bile (liver)", "Emulsifies fats into droplets"],
          ["Hydrochloric acid (stomach)", "Kills bacteria and activates pepsin"]
        ]
      },
      caption: "Match each substance with its job."
    },
    {
      type: "example",
      title: "Worked example: the bread experiment",
      html: `<p>Take a small piece of <b>bread</b> without sugar and chew it for a long time, for at least <b>2 minutes</b>, without swallowing it.</p>
<p>At some point you will taste a <b>sweet</b> flavour! It is the amylase in the saliva that has broken the <b>starch</b> (which is not sweet) into smaller sugars like <b>maltose</b> (which is sweet). You are watching an enzyme at work inside your mouth.</p>
<p>Try it with a cracker too: the same thing happens.</p>`
    },
    {
      type: "example",
      title: "Worked example: reading a label and the healthy plate",
      html: `<p>On a packet of biscuits you read, per 100 g: carbohydrates 70 g (of which sugars 25 g), fat 18 g (of which saturated 8 g), protein 7 g, fibre 3 g, salt 0.5 g.</p>
<p>That means a quarter of the biscuit is sugar! The WHO guidelines recommend not exceeding about <b>25 g of added sugar a day</b> for a young person (about 6 teaspoons).</p>
<p>The "<b>healthy plate</b>" (Harvard) suggests: <b>half</b> the plate vegetables and fruit, <b>a quarter</b> cereals preferably wholegrain, <b>a quarter</b> protein (best pulses, fish, white meat), a drizzle of olive oil and water as the drink. It is very similar to the <b>Mediterranean diet</b>, declared by UNESCO an Intangible Cultural Heritage of Humanity in 2010.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand digestion",
      intro: "If the names of the enzymes all seem the same, try these images.",
      tabs: [
        {
          label: "🏭 The disassembly line",
          html: `<p>Think of the digestive system as a <b>factory in reverse</b>: instead of assembling objects, it <b>takes them apart</b> piece by piece.</p>
<ul>
<li><b>Mouth</b> = cutting department (teeth) and first wash (saliva);</li>
<li><b>Stomach</b> = the acid cement mixer that churns;</li>
<li><b>Duodenum</b> = the department with the special tools (pancreas enzymes, bile soap);</li>
<li><b>Small intestine</b> = the belt where the small pieces are "shipped" into the blood;</li>
<li><b>Large intestine</b> = the department that recovers water and compacts the waste;</li>
<li><b>Anus</b> = the waste exit.</li>
</ul>`
        },
        {
          label: "🧱 Little bricks to take apart",
          html: `<p>A protein is like a long <b>necklace of beads</b> (the <b>amino acids</b>, there are 20 types). Starch is a long necklace of identical beads (the <b>glucose</b>).</p>
<p>Enzymes are <b>specialised scissors</b>: amylase cuts only the glucose necklaces, pepsin only the amino acid necklaces. The single beads are small enough to pass through the wall of the villi; then the body's cells will use them to build their <b>own</b> necklaces, that is human proteins.</p>
<p>Here you see a small molecule, <b>water</b> (H<sub>2</sub>O): digestive enzymes use water itself to "break" the bonds (it is called <b>hydrolysis</b>, "breaking with water").</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.7, color: "#ef4444", label: "O" },
              { x: 0.95, y: 0.6, z: 0, r: 0.45, color: "#e2e8f0", label: "H" },
              { x: -0.95, y: 0.6, z: 0, r: 0.45, color: "#e2e8f0", label: "H" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        },
        {
          label: "🐄 How other animals digest",
          html: `<p>Comparing helps us understand:</p>
<ul>
<li>the <b>cow</b> (a ruminant) has a <b>4-chambered</b> stomach (rumen, reticulum, omasum, abomasum) and chews the cud: in the rumen billions of microbes digest the <b>cellulose</b> that we cannot digest;</li>
<li><b>birds</b> have no teeth: they swallow little stones that, in the <b>gizzard</b>, grind the seeds;</li>
<li>the <b>snake</b> swallows its prey whole and may take weeks to digest it;</li>
<li><b>herbivores</b> generally have a much longer intestine than <b>carnivores</b>, because plants are digested more slowly. Our intestine is of intermediate length: we are <b>omnivores</b>.</li>
</ul>`
        },
        {
          label: "📏 The unrolled tube",
          html: `<p>If we unrolled the whole digestive tube of an adult, it would be about as long as <b>a bus</b>. Here are the approximate proportions:</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="20" y="80" width="10" height="40" fill="#ef4444"/>
<rect x="30" y="80" width="17" height="40" fill="#fb923c"/>
<rect x="47" y="80" width="17" height="40" fill="#ec4899"/>
<rect x="64" y="80" width="420" height="40" fill="#f9a8d4"/>
<rect x="484" y="80" width="100" height="40" fill="#a16207"/>
<text x="25" y="70" font-size="14" fill="#b91c1c">mouth</text>
<text x="20" y="145" font-size="14" fill="#c2410c">oesophagus 25 cm</text>
<text x="60" y="168" font-size="14" fill="#9d174d">stomach 25 cm</text>
<text x="270" y="105" font-size="18" text-anchor="middle" fill="#831843" font-weight="bold">small intestine ≈ 6–7 m</text>
<text x="534" y="150" font-size="15" text-anchor="middle" fill="#713f12" font-weight="bold">large ≈ 1.5 m</text>
<text x="300" y="205" font-size="17" text-anchor="middle" fill="#0f172a">Total about 8–9 metres</text>
</svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Did you know…? The man with a hole in his stomach",
      html: `<p>In <b>1822</b> a young Canadian hunter, <b>Alexis St. Martin</b>, was accidentally hit by a shotgun blast. He recovered, but he was left with a <b>permanent hole</b> in his stomach. The army doctor <b>William Beaumont</b> for years put through the hole pieces of food tied to a string and observed how long it took to digest them. In this way he showed that digestion is above all a <b>chemical</b> process, due to gastric juice, and not just a "churning". St. Martin lived to be 78!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The second brain",
      html: `<p>The walls of the intestine contain about <b>500 million neurons</b>, more than the spinal cord: that is why we speak of a "<b>second brain</b>". It is also the reason why when you are nervous you feel "butterflies in your stomach". And the gut microbiota counts about <b>40 trillion</b> bacteria, roughly as many as the cells in our body!</p>`
    },
    {
      type: "conceptMap",
      title: "Map of digestion: tap the nodes and find out why",
      nodes: [
        { id: "cibo", label: "Food and nutrients", x: 50, y: 6, color: "#f59e0b", html: "Carbohydrates, proteins, fats, vitamins, salts, water.", why: "The body needs energy (calories) and building material. The large molecules in foods come from other living things and must be taken apart to become \"ours\"." },
        { id: "mecc", label: "Mechanical digestion", x: 18, y: 28, color: "#ef4444", html: "Chewing, peristalsis, churning of the stomach.", why: "Smaller pieces have more exposed surface, so enzymes work faster. For the same reason icing sugar dissolves faster than a sugar lump." },
        { id: "enzimi", label: "Enzymes", x: 50, y: 30, color: "#a855f7", html: "Proteins that break down macromolecules in a specific way.", why: "The first enzyme was discovered in 1833 by Payen and Persoz (diastase, which digests starch). Each enzyme has a shape that fits only certain molecules: it is the \"lock-and-key\" model proposed by Emil Fischer in 1894." },
        { id: "stomaco", label: "Acid stomach", x: 82, y: 28, color: "#ec4899", html: "Gastric juice with HCl and pepsin; produces chyme.", why: "The acidity kills most of the microbes swallowed and is needed by pepsin, which works well only at very low pH. William Beaumont showed the chemical role of gastric juice (1833)." },
        { id: "fegpanc", label: "Liver and pancreas", x: 82, y: 55, color: "#92400e", html: "Accessory glands: bile and pancreatic juice.", why: "The liver is the largest gland in the body (about 1.5 kg). The pancreas also produces insulin, the hormone that regulates glucose in the blood, discovered in 1921 by Banting and Best." },
        { id: "tenue", label: "Small intestine", x: 50, y: 58, color: "#f472b6", html: "Completes digestion and absorbs nutrients.", why: "It is the longest section because absorption takes time and surface: folds, villi and microvilli multiply the surface up to tens of square metres." },
        { id: "villi", label: "Villi → blood and lymph", x: 20, y: 62, color: "#dc2626", html: "Small molecules pass into the capillaries and lymph vessels.", why: "Here the digestive system connects to the circulatory one: the blood from the intestine goes first to the liver (portal vein), which checks and stores the nutrients." },
        { id: "crasso", label: "Large intestine and microbiota", x: 50, y: 85, color: "#a16207", html: "Reabsorbs water; bacteria digest fibre and make vitamins.", why: "The microbiota is a real alliance: we give the bacteria food and a home, they help us digest and defend us. Antibiotics can upset it." },
        { id: "salute", label: "Healthy eating", x: 15, y: 88, color: "#16a34a", html: "A varied diet, fibre, water, little added sugar.", why: "The Mediterranean diet, studied by the American Ancel Keys in the 1950s in southern Italy itself, is associated with less cardiovascular disease." }
      ],
      edges: [
        ["cibo", "mecc", "undergoes"],
        ["cibo", "enzimi", "is broken down by"],
        ["enzimi", "stomaco", "pepsin in the"],
        ["fegpanc", "tenue", "pour juices into the"],
        ["enzimi", "tenue", "finish the job in the"],
        ["tenue", "villi", "absorbs with the"],
        ["tenue", "crasso", "passes the rest to the"],
        ["salute", "cibo", "chooses the"]
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Path: <b>mouth → pharynx → oesophagus → stomach → small intestine → large intestine → anus</b>.</li>
<li>Accessory glands: <b>salivary glands, liver (bile), pancreas</b>.</li>
<li>Mechanical digestion (teeth, peristalsis) + chemical (<b>enzymes</b>).</li>
<li>Carbohydrates → <b>glucose</b>; proteins → <b>amino acids</b>; fats → <b>fatty acids and glycerol</b>.</li>
<li><b>Absorption</b> takes place in the <b>villi</b> of the small intestine; the large intestine reabsorbs <b>water</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: intestine",
      questions: [
        { type: "mc", q: "Where does most of the absorption of nutrients take place?", options: ["Stomach", "Small intestine", "Large intestine"], answer: 1, explain: "In the villi of the small intestine." },
        { type: "tf", q: "Bile is an enzyme that breaks down fats.", answer: false, explain: "Bile is not an enzyme: it emulsifies fats into droplets, then lipase breaks them down." },
        { type: "mc", q: "In which section do most of the gut bacteria live?", options: ["Oesophagus", "Stomach", "Large intestine"], answer: 2, explain: "The microbiota lives mostly in the colon." }
      ]
    }
  ],
  glossary: [
    { t: "Digestion", d: "The transformation of food into simple molecules that can be absorbed." },
    { t: "Enzyme", d: "A protein that speeds up a specific chemical reaction, for example by breaking a molecule apart." },
    { t: "Bolus", d: "A little ball of chewed food mixed with saliva." },
    { t: "Peristalsis", d: "Waves of muscle contraction that move food along the digestive tube." },
    { t: "Chyme", d: "The acid paste that leaves the stomach." },
    { t: "Chyle", d: "A nutrient-rich liquid formed in the small intestine." },
    { t: "Bile", d: "A liquid produced by the liver that emulsifies fats." },
    { t: "Intestinal villi", d: "Small projections of the wall of the small intestine that absorb nutrients." },
    { t: "Microbiota", d: "The community of microorganisms living in the intestine." },
    { t: "Epiglottis", d: "A flap that closes the windpipe during swallowing." },
    { t: "Fibre", d: "Parts of plants that we do not digest but that help the intestine." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Put the path of the food in order.", items: ["Mouth", "Pharynx", "Oesophagus", "Stomach", "Small intestine", "Large intestine"], explain: "Mouth, pharynx, oesophagus, stomach, small intestine, large intestine, then rectum and anus." },
      { type: "mc", q: "What are proteins turned into?", options: ["Glucose", "Amino acids", "Fatty acids"], answer: 1, explain: "Proteins are chains of amino acids." },
      { type: "mc", q: "Which organ produces bile?", options: ["Pancreas", "Stomach", "Liver", "Gallbladder"], answer: 2, explain: "The liver produces it; the gallbladder stores it." },
      { type: "tf", q: "The digestion of starch already begins in the mouth.", answer: true, explain: "Thanks to salivary amylase." },
      { type: "text", q: "What is the wave-like movement that pushes food along the oesophagus called?", answer: ["peristalsis", "the peristalsis"], explain: "Peristalsis." },
      { type: "mc", q: "Why is the inner surface of the small intestine so large?", options: ["Because it is full of air", "Because of folds, villi and microvilli", "Because it contains many bacteria"], answer: 1, explain: "Villi and microvilli multiply the absorbing surface." },
      { type: "num", q: "About how many metres long is the small intestine of an adult?", answer: 6.5, tol: 1, unit: "m", explain: "About 6–7 metres." },
      { type: "mc", q: "What is the function of the large intestine?", options: ["It produces bile", "It reabsorbs water and salts", "It digests proteins with pepsin"], answer: 1, explain: "The large intestine reabsorbs water and hosts the microbiota." },
      { type: "tf", q: "Gastric juice is basic (not acidic).", answer: false, explain: "It is strongly acidic, pH 1.5–2, because of hydrochloric acid." },
      { type: "mc", q: "What stops food from entering the windpipe?", options: ["The pylorus", "The epiglottis", "The cardia"], answer: 1, explain: "The epiglottis closes the windpipe during swallowing." },
      { type: "text", q: "What are the proteins that break down the molecules in food called?", answer: ["enzymes", "the enzymes", "digestive enzymes"], explain: "Digestive enzymes." },
      { type: "mc", q: "When you chew bread for a long time you taste a sweet flavour because…", options: ["bread contains salt", "amylase turns starch into sugars", "the tongue produces sugar"], answer: 1, explain: "The starch is broken into maltose, which is sweet." }
    ]
  }
});
