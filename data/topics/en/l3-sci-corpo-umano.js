TOPIC('en', {
  id: "l3-sci-corpo-umano",
  title: "The human body: organisation",
  intro: "Your body is made of tens of trillions of cells, and yet it works as a single organism: it walks, thinks and keeps its temperature at 37 °C even when it is snowing outside. How is this possible? Thanks to an <b>organisation in levels</b>, from the cell to the whole body, and to a system of <b>feedback controls</b> that keeps the internal environment constant: <b>homeostasis</b>. In this lesson we look at the <b>four basic tissues</b>, how they combine into organs and systems, the language used to describe the body, and the mechanisms by which it regulates itself.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "From cell to organism: the levels of organisation",
      html: `<p>In the human body each level is formed by putting together units of the level below, and it has properties that the level below does not have (the so-called <b>emergent properties</b>):</p>
<ol>
<li><b>Chemical</b>: atoms and molecules (water, proteins, lipids, DNA: see the lesson on the molecules of life).</li>
<li><b>Cell</b>: the basic unit of life. The human body has about 200 different types of cell (neurons, red blood cells, muscle cells...).</li>
<li><b>Tissue</b>: a group of similar cells, with their extracellular matrix, that carry out a common function.</li>
<li><b>Organ</b>: a structure made of several different tissues, with a specific function (heart, stomach, skin).</li>
<li><b>Organ system</b>: a group of organs that work together on a function (digestive system, nervous system).</li>
<li><b>Organism</b>: all the systems together.</li>
</ol>
<p>All the cells of the body contain the same DNA (they come from the zygote by mitosis), but they are very different because different genes are expressed in each of them: this process is called <b>cell differentiation</b>. <b>Stem cells</b> are cells that are not yet differentiated, able to give rise to different types of cell and to renew themselves: in the bone marrow they constantly regenerate the blood.</p>`
    },
    {
      type: "svg",
      title: "The body's nesting boxes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#475569"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#1f2937">
<rect x="10" y="90" width="95" height="70" rx="10" fill="#bfdbfe"/><text x="57" y="120">Cell</text><text x="57" y="140" font-size="14" font-weight="normal">neuron</text>
<rect x="125" y="90" width="95" height="70" rx="10" fill="#bbf7d0"/><text x="172" y="120">Tissue</text><text x="172" y="140" font-size="14" font-weight="normal">nervous</text>
<rect x="240" y="90" width="95" height="70" rx="10" fill="#fef08a"/><text x="287" y="120">Organ</text><text x="287" y="140" font-size="14" font-weight="normal">brain</text>
<rect x="355" y="90" width="110" height="70" rx="10" fill="#fed7aa"/><text x="410" y="120">System</text><text x="410" y="140" font-size="14" font-weight="normal">nervous</text>
<rect x="485" y="90" width="105" height="70" rx="10" fill="#fecaca"/><text x="537" y="120">Organism</text><text x="537" y="140" font-size="14" font-weight="normal">person</text>
</g>
<g stroke="#475569" stroke-width="3" marker-end="url(#ar3)">
<line x1="105" y1="125" x2="123" y2="125"/><line x1="220" y1="125" x2="238" y2="125"/><line x1="335" y1="125" x2="353" y2="125"/><line x1="465" y1="125" x2="483" y2="125"/>
</g>
<text x="300" y="40" font-size="17" font-weight="bold" fill="#0369a1" text-anchor="middle">Each level is made of the levels before it</text>
<text x="300" y="220" font-size="15" fill="#475569" text-anchor="middle">Example with the nervous system: the brain is mostly nervous tissue,</text>
<text x="300" y="242" font-size="15" fill="#475569" text-anchor="middle">but it also contains connective tissue (meninges), epithelium (choroid plexuses) and blood vessels.</text>
</svg>`,
      caption: "Every organ contains several tissues: no single tissue is enough to make an organ."
    },
    {
      type: "text",
      title: "The four basic tissues",
      html: `<p>All the tissues of the body belong to four main classes:</p>
<table>
<tr><th>Tissue</th><th>Function</th><th>Features and types</th></tr>
<tr><td><b>Epithelial</b></td><td>covering surfaces and lining cavities; secreting (glands); absorbing; protecting</td><td>cells tightly joined, little matrix, <b>no blood vessels</b> (it is nourished by the tissue underneath); it rests on a basement membrane. By shape: squamous, cuboidal, columnar; by layers: simple or stratified. Examples: epidermis (stratified squamous), walls of the alveoli (simple squamous, extremely thin), lining of the intestine (simple columnar, absorbs), glands.</td></tr>
<tr><td><b>Connective</b></td><td>supporting, joining, protecting, transporting, storing reserves</td><td>cells scattered in plenty of <b>extracellular matrix</b> (fibres and ground substance). Types: connective tissue proper (loose and dense: tendons and ligaments), <b>adipose</b> (energy store and insulation), <b>cartilage</b>, <b>bone</b> (mineralised matrix), <b>blood</b> (fluid connective tissue: the matrix is the plasma).</td></tr>
<tr><td><b>Muscle</b></td><td>contracting and producing movement</td><td>elongated cells (fibres) with actin and myosin. <b>Skeletal</b> (striated, voluntary, attached to bones), <b>cardiac</b> (striated, involuntary, only in the heart), <b>smooth</b> (not striated, involuntary, in the walls of the stomach, intestine and blood vessels).</td></tr>
<tr><td><b>Nervous</b></td><td>receiving, processing and transmitting signals</td><td><b>Neurons</b> (about 86 billion in the human brain), which transmit electrical impulses, and <b>glial</b> cells, which support, nourish and insulate them (the myelin sheath).</td></tr>
</table>
<p>In a hollow organ such as the <b>stomach</b> we find all four: epithelium (the lining that secretes gastric juice), connective tissue (support and blood vessels), smooth muscle (which churns the food) and nervous tissue (which regulates movement and secretions).</p>`
    },
    {
      type: "widget",
      title: "Which tissue does it belong to?",
      widget: "classify",
      options: { groups: ["Epithelial", "Connective", "Muscle", "Nervous"], items: [["Epidermis", 0], ["Lining of the intestine", 0], ["Sweat gland", 0], ["Blood", 1], ["Cartilage of the ear", 1], ["Adipose tissue", 1], ["Bone", 1], ["Tendon", 1], ["Biceps muscle", 2], ["Myocardium", 2], ["Intestinal wall (smooth fibres)", 2], ["Neuron", 3], ["Glial cells", 3]] },
      caption: "The rule: look at function and structure, not at where it is found."
    },
    {
      type: "example",
      title: "Why the skin is an organ",
      html: `<p>The skin is the largest organ of the body (about 1.5-2 m² and 3-4 kg in adults). It contains all four tissues:</p>
<ul>
<li><b>Epidermis</b>: stratified squamous epithelium, constantly renewed from the deep layers (keratin builds up in the surface layers). It contains melanocytes, which produce melanin, the pigment that protects against UV rays.</li>
<li><b>Dermis</b>: dense connective tissue, with blood vessels, sweat and sebaceous glands, hair follicles, nerve endings (nervous tissue) and tiny smooth muscles that make the hairs stand up ("goose bumps").</li>
<li><b>Hypodermis</b>: adipose connective tissue, a heat insulator and energy store.</li>
</ul>
<p>Its functions: a barrier against microbes, water loss and UV rays; <b>temperature regulation</b> (sweating, blood vessels); sensation (touch, pain, heat, cold); making vitamin D with sunlight.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: tissues and organs",
      questions: [
        { type: "mc", q: "Which tissue has plenty of extracellular matrix and includes bone, cartilage and blood?", options: ["Connective", "Epithelial", "Muscle", "Nervous"], answer: 0, explain: "Connective tissue has cells scattered in a matrix that can be fluid (blood), jelly-like, fibrous or mineralised." },
        { type: "mc", q: "Which type of muscle is striated but involuntary?", options: ["Cardiac", "Skeletal", "Smooth"], answer: 0, explain: "Cardiac muscle is striated like skeletal muscle, but involuntary." },
        { type: "tf", q: "Epithelial tissue is rich in blood vessels.", answer: false, explain: "Epithelium has no blood vessels: it receives nutrients by diffusion from the connective tissue underneath." }
      ]
    },
    {
      type: "text",
      title: "The organ systems",
      html: `<table>
<tr><th>System</th><th>Main function</th><th>Typical organs</th></tr>
<tr><td><b>Integumentary</b></td><td>protection, temperature regulation, sensation</td><td>skin, hair, nails, glands</td></tr>
<tr><td><b>Skeletal</b></td><td>support, protection, calcium store, blood production</td><td>bones, cartilage, joints, marrow</td></tr>
<tr><td><b>Muscular</b></td><td>movement, posture, heat production</td><td>skeletal muscles, tendons</td></tr>
<tr><td><b>Nervous</b></td><td>fast control, processing, senses</td><td>brain, spinal cord, nerves, sense organs</td></tr>
<tr><td><b>Endocrine</b></td><td>slow control by hormones</td><td>pituitary, thyroid, adrenals, pancreas, gonads</td></tr>
<tr><td><b>Circulatory</b></td><td>transport of gases, nutrients, hormones, heat</td><td>heart, blood vessels, blood</td></tr>
<tr><td><b>Lymphatic and immune</b></td><td>defence against infection, drainage of fluids</td><td>lymph vessels, lymph nodes, spleen, thymus</td></tr>
<tr><td><b>Respiratory</b></td><td>exchange of O₂ and CO₂</td><td>airways, lungs</td></tr>
<tr><td><b>Digestive</b></td><td>digestion and absorption of nutrients</td><td>mouth, stomach, intestine, liver, pancreas</td></tr>
<tr><td><b>Urinary (excretory)</b></td><td>removing waste, regulating water, salts and pH</td><td>kidneys, ureters, bladder, urethra</td></tr>
<tr><td><b>Reproductive</b></td><td>producing gametes, reproduction</td><td>gonads, reproductive tract</td></tr>
</table>
<p>The systems <b>always work together</b>: to run a kilometre, the nervous system decides on the movement, the muscles and skeleton carry it out, the respiratory and circulatory systems bring oxygen, the digestive system has supplied the fuel, the integumentary system gets rid of heat, the urinary system removes waste and the endocrine system regulates blood sugar and heart rate.</p>`
    },
    {
      type: "widget",
      title: "Match system and function",
      widget: "match",
      options: { pairs: [["Urinary system", "removes waste and regulates water"], ["Endocrine system", "regulates through hormones"], ["Respiratory system", "exchanges O₂ and CO₂"], ["Nervous system", "fast control with electrical impulses"], ["Lymphatic and immune system", "defends against microbes and drains fluids"], ["Integumentary system", "protects and regulates temperature"]] },
      caption: "Match each system to its main function."
    },
    {
      type: "text",
      title: "Talking about the body: positions, planes and cavities",
      html: `<p>To describe where an organ is, we use precise language that refers to the <b>anatomical position</b>: standing upright, facing forwards, arms by the sides with the palms facing forwards.</p>
<ul>
<li><b>Anterior (ventral)</b> / <b>posterior (dorsal)</b>: in front / behind. <b>Superior (cranial)</b> / <b>inferior (caudal)</b>: towards the head / the feet.</li>
<li><b>Medial</b> / <b>lateral</b>: nearer to / further from the midline. The nose is medial to the eyes.</li>
<li><b>Proximal</b> / <b>distal</b> (in the limbs): nearer to / further from where the limb joins the body. The elbow is proximal to the wrist.</li>
<li><b>Superficial</b> / <b>deep</b>: near to / far from the surface.</li>
</ul>
<p><b>Planes of section</b>: the <b>sagittal</b> plane divides the body into right and left (the midsagittal plane divides it into two equal halves); the <b>frontal</b> or coronal plane divides it into front and back; the <b>transverse</b> (or horizontal) plane into upper and lower.</p>
<p><b>Body cavities</b>: at the back are the <b>cranial cavity</b> (brain) and the <b>vertebral canal</b> (spinal cord). At the front, the <b>diaphragm</b>, the muscle used for breathing, separates the <b>thoracic cavity</b> (lungs, heart in the mediastinum, oesophagus, thymus) from the <b>abdominal cavity</b> (stomach, liver, intestine, kidneys, spleen), which continues into the <b>pelvic cavity</b> (bladder, reproductive organs, rectum). The organs are wrapped in serous membranes (pleura, pericardium, peritoneum) with a thin film of fluid that reduces friction.</p>`
    },
    {
      type: "widget",
      title: "Where is each organ?",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0f9ff"/>
<ellipse cx="300" cy="35" rx="30" ry="28" fill="#fde7d2" stroke="#b45309" stroke-width="2"/>
<rect x="283" y="60" width="34" height="14" fill="#fde7d2" stroke="#b45309" stroke-width="2"/>
<path d="M230 76 Q300 66 370 76 L382 190 Q382 215 360 220 L240 220 Q218 215 218 190 Z" fill="#fff1e6" stroke="#b45309" stroke-width="2"/>
<path d="M232 78 L185 200" stroke="#b45309" stroke-width="22" stroke-linecap="round" fill="none"/>
<path d="M368 78 L415 200" stroke="#b45309" stroke-width="22" stroke-linecap="round" fill="none"/>
<path d="M232 78 L185 200" stroke="#fff1e6" stroke-width="18" stroke-linecap="round" fill="none"/>
<path d="M368 78 L415 200" stroke="#fff1e6" stroke-width="18" stroke-linecap="round" fill="none"/>
<ellipse cx="300" cy="32" rx="18" ry="16" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/>
<ellipse cx="268" cy="118" rx="25" ry="35" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<ellipse cx="332" cy="118" rx="25" ry="35" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<path d="M300 108 Q282 120 296 150 Q308 160 318 140 Q322 118 300 108 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
<path d="M240 160 Q300 150 360 160" stroke="#334155" stroke-width="3" fill="none" stroke-dasharray="5 4"/>
<ellipse cx="335" cy="180" rx="26" ry="14" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<path d="M255 180 Q300 175 320 185" stroke="#a16207" stroke-width="2" fill="none"/>
<rect x="258" y="185" width="85" height="30" rx="15" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<ellipse cx="248" cy="188" rx="10" ry="16" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/>
</svg>`,
        spots: [{ x: 300, y: 32, label: "Brain" }, { x: 268, y: 118, label: "Lung" }, { x: 300, y: 140, label: "Heart" }, { x: 240, y: 160, label: "Diaphragm" }, { x: 335, y: 180, label: "Stomach" }, { x: 300, y: 200, label: "Intestine" }, { x: 248, y: 188, label: "Kidney" }]
      },
      caption: "Simplified diagram: tap a point and choose the organ (the diaphragm is the dashed line separating chest and abdomen)."
    },
    {
      type: "text",
      title: "Homeostasis: keeping the internal environment constant",
      html: `<p>Cells live bathed in <b>interstitial fluid</b> (tissue fluid), their immediate environment. In the mid-nineteenth century the French physiologist <b>Claude Bernard</b> realised that what allows animals to live freely is the constancy of this "<i>milieu intérieur</i>". In 1926 <b>Walter Cannon</b> called it <b>homeostasis</b> (from the Greek <i>homoios</i>, similar, and <i>stasis</i>, state): the ability to keep internal conditions within narrow limits despite changes outside.</p>
<p>Many variables are kept under control: body temperature (about 37 °C), blood glucose (about 0.7-1.0 g/L when fasting), blood pH (7.35-7.45), blood pressure, the concentration of salts and water, and oxygen and carbon dioxide in the blood.</p>
<p>Every control loop has three elements:</p>
<ol>
<li>a <b>receptor</b> (sensor) that measures the variable;</li>
<li>a <b>control centre</b> that compares the measured value with the reference value (<i>set point</i>) and decides what to do: in the brain (hypothalamus) or in an endocrine gland;</li>
<li>an <b>effector</b> (muscle, gland, organ) that carries out the response.</li>
</ol>`
    },
    {
      type: "svg",
      title: "A negative feedback loop: temperature",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar4" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#475569"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#1f2937">
<rect x="20" y="30" width="150" height="55" rx="10" fill="#fecaca"/><text x="95" y="55">Stimulus</text><text x="95" y="75" font-size="14" font-weight="normal">temperature too high</text>
<rect x="225" y="30" width="150" height="55" rx="10" fill="#fde68a"/><text x="300" y="55">Receptors</text><text x="300" y="75" font-size="14" font-weight="normal">thermoreceptors</text>
<rect x="430" y="30" width="150" height="55" rx="10" fill="#bbf7d0"/><text x="505" y="55">Control centre</text><text x="505" y="75" font-size="14" font-weight="normal">hypothalamus</text>
<rect x="430" y="190" width="150" height="70" rx="10" fill="#bfdbfe"/><text x="505" y="215">Effectors</text><text x="505" y="235" font-size="14" font-weight="normal">sweat glands,</text><text x="505" y="253" font-size="14" font-weight="normal">skin blood vessels</text>
<rect x="20" y="190" width="150" height="70" rx="10" fill="#e9d5ff"/><text x="95" y="215">Response</text><text x="95" y="235" font-size="14" font-weight="normal">sweating, heat</text><text x="95" y="253" font-size="14" font-weight="normal">lost: T falls</text>
</g>
<g stroke="#475569" stroke-width="3" fill="none" marker-end="url(#ar4)">
<line x1="170" y1="58" x2="223" y2="58"/><line x1="375" y1="58" x2="428" y2="58"/><line x1="505" y1="87" x2="505" y2="188"/><line x1="428" y1="225" x2="172" y2="225"/><path d="M95 188 L95 90"/>
</g>
<text x="300" y="150" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">Negative feedback:</text>
<text x="300" y="172" font-size="15" fill="#b91c1c" text-anchor="middle">the response cancels the stimulus</text>
</svg>`,
      caption: "When the temperature rises above the set point, the response brings it back down."
    },
    {
      type: "text",
      title: "Negative and positive feedback",
      html: `<p>Almost all homeostatic loops work by <b>negative feedback</b>: the response <b>reduces or cancels</b> the stimulus that caused it, like a thermostat that switches the boiler off when the room is warm enough.</p>
<ul>
<li><b>Temperature.</b> If you are hot, the hypothalamus switches on <b>sweating</b> (evaporation removes heat) and <b>vasodilation</b> of the skin's blood vessels (which gives off heat). If you are cold: <b>vasoconstriction</b>, <b>shivering</b> (muscle contractions that produce heat), hairs standing on end.</li>
<li><b>Blood glucose.</b> After a meal blood glucose rises: the β cells of the pancreas secrete <b>insulin</b>, which makes glucose enter the cells and be stored as glycogen (in the liver and muscles), and blood glucose falls. When you fast it drops: the α cells secrete <b>glucagon</b>, which makes the liver release glucose. In <b>type 1 diabetes</b> the β cells are destroyed (an autoimmune disease) and insulin is missing; in <b>type 2</b> the cells respond poorly to insulin.</li>
<li><b>Carbon dioxide and breathing.</b> If CO₂ in the blood rises, chemoreceptors stimulate the respiratory centre in the medulla and breathing becomes faster, until the CO₂ falls.</li>
</ul>
<p>Less common is <b>positive feedback</b>, which <b>amplifies</b> the stimulus until some event stops it. Examples: <b>childbirth</b> (contractions push the baby's head against the cervix, which triggers the release of <b>oxytocin</b>, which strengthens the contractions, until the baby is born); blood <b>clotting</b> (activated platelets attract more platelets). Without a brake, positive feedback becomes dangerous.</p>
<p>Homeostasis can fail: <b>disease</b> often means that a control loop is not working (diabetes: blood glucose; hypertension: blood pressure; fever: the hypothalamus set point raised by substances released during an infection).</p>`
    },
    {
      type: "example",
      title: "A sugary snack, minute by minute",
      html: `<p>You drink a sugary drink: in the intestine the sucrose is digested into glucose and fructose, which pass into the blood.</p>
<ol>
<li><b>Stimulus</b>: blood glucose rises, from about 0.9 to over 1.2 g/L.</li>
<li><b>Receptors and control centre</b>: the β cells of the pancreas measure the glucose in the blood directly, acting as both sensor and control centre.</li>
<li><b>Response</b>: they secrete insulin; the liver, muscles and adipose tissue (effectors) take up the glucose and store it as glycogen and fat.</li>
<li><b>Negative feedback</b>: blood glucose falls; the pancreas reduces insulin; after 2-3 hours levels are back close to 0.9 g/L.</li>
</ol>
<p>When the loop breaks down (diabetes) blood glucose stays high, and over time it damages blood vessels, kidneys, eyes and nerves.</p>`
    },
    {
      type: "remember",
      title: "The key idea of homeostasis",
      html: `<p>Homeostasis does not mean "everything stays still", but <b>dynamic equilibrium</b>: the variables fluctuate around a set point and are continuously brought back. A loop always has: <b>receptor → control centre → effector → response</b>, and in negative feedback the response <b>reduces</b> the stimulus. If you understand one loop (temperature, blood glucose), you can understand them all.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: homeostasis",
      questions: [
        { type: "mc", q: "Which hormone lowers blood glucose?", options: ["Insulin", "Glucagon", "Oxytocin", "Adrenaline"], answer: 0, explain: "Insulin, produced by the β cells of the pancreas, makes glucose enter the cells." },
        { type: "tf", q: "Shivering is a response that produces heat when body temperature falls.", answer: true, explain: "Rapid contractions of the skeletal muscles produce heat." },
        { type: "mc", q: "Which example is positive feedback?", options: ["Labour contractions stimulated by oxytocin", "Sweating", "Insulin secretion", "Shivering"], answer: 0, explain: "In childbirth each contraction stimulates more oxytocin, which strengthens the contraction, until the birth." }
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand how the body is organised",
      intro: "The body is very complex: an analogy helps you keep hold of the levels and the controls.",
      tabs: [
        { label: "🏙️ The city", html: "<p>The body is a <b>city</b>. The cells are the <b>inhabitants</b>, the tissues are <b>neighbourhoods</b> of people with the same job (factory workers, shopkeepers...), the organs are the <b>buildings</b> (hospital, power station, market), the systems are the <b>public services</b> (water supply, transport, communications, waste). The nervous system is the phone and internet network (fast, with direct messages), the endocrine system the postal service (slower but reaching everywhere), the circulatory system the roads, the digestive system the market that brings in supplies, the urinary system the refuse collection, the immune system the police. Homeostasis is the mayor who keeps an eye on the readings and steps in if they rise or fall too far.</p>" },
        { label: "🪆 The Russian doll", html: "<p>Like a Russian doll: the organism contains the systems, the systems the organs, the organs the tissues, the tissues the cells. Rotate the model and look at the layers: each level is inside the next one.</p>", scene: "layers", options: { layers: [ { r: 1, color: "#fca5a5", label: "Organism" }, { r: 0.82, color: "#fdba74", label: "System" }, { r: 0.64, color: "#fde047", label: "Organ" }, { r: 0.46, color: "#86efac", label: "Tissue" }, { r: 0.28, color: "#93c5fd", label: "Cell" } ] } },
        { label: "🌡️ The thermostat", html: "<p>A home thermostat has a sensor (receptor), a dial with the desired value (set point) and a switch (effector) that turns the boiler on or off. When the room gets too warm, the loop switches off: negative feedback. The hypothalamus works the same way with body temperature; but instead of one switch it has many effectors: sweating, shivering, blood vessels, behaviour (taking off your jumper). A fever is a thermostat set higher.</p>" },
        { label: "🧪 The virtual lab", html: "<p>Chemistry lies at the root of homeostasis: blood pH is kept between 7.35 and 7.45 by buffer systems, such as the carbonic acid and hydrogencarbonate ion pair. In the virtual lab you can explore reactants, acids and bases and see how they react.</p>", widget: "chemLab", options: {} }
      ]
    },
    {
      type: "curiosity",
      title: "How old is your body?",
      html: `<p>Most of the body's cells live only a few weeks or months: intestinal cells about 4-5 days, red blood cells about 120 days, epidermal cells about a month. Others last much longer: the neurons of the cerebral cortex and the cells of the lens of the eye stay with you for almost your whole life, which means you have to look after them. In tissues that renew themselves, stem cells make up for the losses: every second the bone marrow produces millions of red blood cells. That is why a wound heals, but damage to the spinal cord does not.</p>`
    },
    {
      type: "curiosity",
      title: "Why the body is built this way: size and surface",
      html: `<p>A large cell would need to exchange far more substances with its surroundings than its surface could handle, because volume grows faster than surface area (volume ∝ r³, surface ∝ r²). That is why large bodies are not made of giant cells but of <b>a huge number of small cells</b>, and why large organisms need specialised systems that bring substances close to every cell: the circulatory system brings oxygen, the digestive system nutrients. The alveoli of the lungs, if they were spread out flat, would cover an area of around 70 m² (like a small flat), squeezed into the chest: exchange surface is the key to the body's organisation.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: how the human body is organised",
      nodes: [
        { id: "cellula", label: "Differentiated cells", x: 15, y: 12, color: "#2563eb", html: "Same DNA, different genes switched on: about 200 cell types.", why: "Cell theory (Schleiden, Schwann, Virchow, 1838-1858) states that all living things are made of cells. Differentiation comes from different gene expression, not from different DNA." },
        { id: "tess", label: "Four tissues", x: 50, y: 12, color: "#16a34a", html: "Epithelial, connective, muscle, nervous.", why: "Histology began with Bichat (1800), who distinguished 21 tissues, later grouped into four classes thanks to the microscope; the four-class system is an excellent simplification." },
        { id: "organo", label: "Organs", x: 85, y: 12, color: "#f59e0b", html: "Several tissues combined into a structure with a specific function.", why: "Combining tissues with complementary functions (protecting, contracting, secreting, controlling) gives the organ a function that no tissue has on its own." },
        { id: "app", label: "Organ systems", x: 30, y: 55, color: "#a855f7", html: "Organs that cooperate: eleven main systems.", why: "The division into systems is partly a teaching device: in reality the systems are closely interconnected through blood, nerves and hormones." },
        { id: "omeo", label: "Homeostasis", x: 70, y: 55, color: "#ef4444", html: "Keeping the internal environment constant.", why: "Claude Bernard (milieu intérieur) and Walter Cannon (1926) showed that internal stability is the condition for cells to work: every enzyme has an optimal range of temperature and pH." },
        { id: "feed", label: "Feedback", x: 50, y: 90, color: "#0ea5e9", html: "Receptor → centre → effector; negative or positive.", why: "The same pattern inspired cybernetics (Wiener, 1948): living systems and machines regulate their variables with feedback loops." }
      ],
      edges: [["cellula", "tess", "form"], ["tess", "organo", "combine into"], ["organo", "app", "cooperate in"], ["app", "omeo", "maintain"], ["omeo", "feed", "works through"]]
    }
  ],
  glossary: [
    { t: "Tissue", d: "A group of similar cells and extracellular matrix that carry out a common function." },
    { t: "Organ", d: "A structure made of several tissues that carries out a specific function." },
    { t: "Organ system", d: "A group of organs that cooperate in a complex function." },
    { t: "Differentiation", d: "The process by which cells become specialised by expressing different genes." },
    { t: "Stem cell", d: "An unspecialised cell able to renew itself and to give rise to differentiated cells." },
    { t: "Extracellular matrix", d: "Material produced by cells and found between them, abundant in connective tissue." },
    { t: "Homeostasis", d: "The ability of the organism to keep its internal conditions constant." },
    { t: "Negative feedback", d: "A mechanism in which the response reduces the stimulus that caused it." },
    { t: "Positive feedback", d: "A mechanism in which the response amplifies the stimulus, as in childbirth." },
    { t: "Hormone", d: "A chemical messenger produced by an endocrine gland and carried by the blood." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "How many basic tissues are there in the human body?", answer: 4, explain: "Epithelial, connective, muscle, nervous." },
      { type: "mc", q: "Which tissue has an abundant extracellular matrix?", options: ["Connective", "Epithelial", "Nervous", "Muscle"], answer: 0, explain: "Connective tissue has cells scattered in a large matrix; epithelium has tightly joined cells." },
      { type: "mc", q: "Blood is classified as...", options: ["Fluid connective tissue", "Epithelial tissue", "Smooth muscle tissue", "Nervous tissue"], answer: 0, explain: "Plasma is the fluid matrix in which the blood cells are found." },
      { type: "mc", q: "Which muscle tissue is found only in the heart?", options: ["Cardiac", "Skeletal", "Smooth"], answer: 0, explain: "The myocardium is striated and involuntary." },
      { type: "tf", q: "An organ is made of only one type of tissue.", answer: false, explain: "Every organ contains several tissues: the stomach, for example, has all four." },
      { type: "mc", q: "What separates the thoracic cavity from the abdominal cavity?", options: ["The diaphragm", "The sternum", "The peritoneum", "The mediastinum"], answer: 0, explain: "The diaphragm is the dome-shaped muscle at the base of the chest." },
      { type: "mc", q: "Compared with the wrist, the elbow is...", options: ["Proximal", "Distal", "Medial", "Posterior"], answer: 0, explain: "Proximal = nearer to where the limb joins the trunk." },
      { type: "mc", q: "Which element of a homeostatic loop measures the controlled variable?", options: ["The receptor", "The effector", "The control centre", "The set point"], answer: 0, explain: "The receptor (sensor) measures; the control centre decides; the effector acts." },
      { type: "mc", q: "Which hormone raises blood glucose by stimulating the liver to release glucose?", options: ["Glucagon", "Insulin", "Oxytocin", "Thyroxine"], answer: 0, explain: "Glucagon, produced by the α cells of the pancreas, acts when blood glucose is low." },
      { type: "order", q: "Put the levels of organisation in order from simplest to most complex.", items: ["Cell", "Tissue", "Organ", "Organ system", "Organism"], explain: "Cells form tissues, tissues form organs, organs form systems, systems form the organism." }
    ]
  }
});
