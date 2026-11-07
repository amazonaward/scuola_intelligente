TOPIC('en', {
  id: "m2-sci-scheletro-muscoli",
  title: "Skeleton and muscles",
  intro: "Running, writing, smiling, standing up: everything is possible thanks to the <b>locomotor system</b>, made up of the <b>skeleton</b> (about <b>206 bones</b> in an adult), the <b>joints</b> and more than <b>600 muscles</b>. Bones and muscles work together like a system of <b>levers</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. What the skeleton is for",
      html: `<p>The <b>skeleton</b> (or skeletal system) has five main functions:</p>
<ol>
<li><b>Support</b>: it is the framework that gives the body its shape and holds it up.</li>
<li><b>Protection</b>: the skull protects the brain, the rib cage the heart and lungs, the spine the spinal cord.</li>
<li><b>Movement</b>: bones are levers moved by muscles.</li>
<li><b>Blood production</b>: in the <b>red bone marrow</b> red blood cells, white blood cells and platelets are born.</li>
<li><b>Mineral store</b>: bones contain about <b>99% of the body's calcium</b> and a lot of phosphorus, which they release into the blood when needed.</li>
</ol>
<p>A newborn baby has about <b>300</b> bony elements; as they grow many fuse together (for example the bones of the skull and those of the sacrum) and in the adult they become about <b>206</b>.</p>`
    },
    {
      type: "text",
      title: "2. The parts of the skeleton",
      html: `<p>The skeleton is divided into two parts:</p>
<p><b>Axial skeleton</b> (the central axis, about 80 bones):</p>
<ul>
<li><b>skull</b>: fused flat bones forming the cranium, plus the bones of the face (the only movable bone is the <b>mandible</b>, or lower jaw);</li>
<li><b>spine</b>: 33–34 vertebrae (7 cervical, 12 thoracic, 5 lumbar, 5 sacral fused into the sacrum, 4–5 coccygeal). It has 4 natural <b>curves</b> that work as shock absorbers. Between one vertebra and the next there are the <b>intervertebral discs</b>, cushions of cartilage;</li>
<li><b>rib cage</b>: <b>12 pairs of ribs</b> and the <b>breastbone</b> (sternum).</li>
</ul>
<p><b>Appendicular skeleton</b> (the limbs, 126 bones):</p>
<ul>
<li><b>shoulder girdle</b> (collarbones and shoulder blades) and <b>upper limbs</b>: humerus, radius and ulna, bones of the hand (27 per hand!);</li>
<li><b>pelvic girdle</b> (pelvis) and <b>lower limbs</b>: <b>femur</b> (the longest bone, about 1/4 of your height), kneecap, tibia and fibula, bones of the foot (26 per foot).</li>
</ul>
<p>The smallest bone is the <b>stapes</b>, in the middle ear: it measures about <b>3 mm</b>.</p>`
    },
    {
      type: "widget",
      title: "Find the main bones",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 440" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="440" fill="#f8fafc"/>
<g fill="#fef9c3" stroke="#78716c" stroke-width="3">
<ellipse cx="300" cy="45" rx="35" ry="38"/>
<rect x="293" y="83" width="14" height="150" rx="5"/>
<ellipse cx="300" cy="150" rx="55" ry="60" fill="none"/>
<line x1="250" y1="95" x2="350" y2="95"/>
<line x1="245" y1="100" x2="200" y2="200"/><line x1="355" y1="100" x2="400" y2="200"/>
<line x1="200" y1="205" x2="180" y2="290"/><line x1="208" y1="205" x2="190" y2="292"/>
<line x1="400" y1="205" x2="420" y2="290"/><line x1="392" y1="205" x2="410" y2="292"/>
<path d="M255 235 Q300 210 345 235 L335 270 L265 270 Z"/>
<line x1="280" y1="270" x2="265" y2="360"/><line x1="320" y1="270" x2="335" y2="360"/>
<circle cx="265" cy="365" r="7"/><circle cx="335" cy="365" r="7"/>
<line x1="263" y1="372" x2="260" y2="425"/><line x1="271" y1="372" x2="270" y2="425"/>
<line x1="337" y1="372" x2="340" y2="425"/><line x1="329" y1="372" x2="330" y2="425"/>
</g>
<g stroke="#a8a29e" stroke-width="2" fill="none">
<path d="M255 125 Q300 140 345 125"/><path d="M252 145 Q300 160 348 145"/><path d="M255 165 Q300 180 345 165"/>
</g>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Skull" },
          { x: 300, y: 215, label: "Spine" },
          { x: 335, y: 150, label: "Ribs" },
          { x: 225, y: 150, label: "Humerus" },
          { x: 300, y: 245, label: "Pelvis" },
          { x: 272, y: 315, label: "Femur" },
          { x: 265, y: 365, label: "Kneecap" },
          { x: 340, y: 400, label: "Tibia" }
        ]
      },
      caption: "A simplified diagram of the human skeleton seen from the front."
    },
    {
      type: "text",
      title: "3. What a bone is made of",
      html: `<p>Bones are not "dead stones": they are <b>living organs</b>, with blood vessels and nerves, that grow, repair themselves and are constantly renewed (the skeleton is almost completely renewed in about <b>10 years</b>).</p>
<p><b>Bone tissue</b> is made of:</p>
<ul>
<li><b>mineral salts</b> (mostly calcium phosphate, about 2/3 of the weight): they give <b>hardness</b>;</li>
<li><b>collagen</b>, a fibrous protein (about 1/3): it gives <b>elasticity</b>, so the bone does not snap like glass;</li>
<li><b>cells</b>: <b>osteoblasts</b> build new bone, <b>osteoclasts</b> break it down, <b>osteocytes</b> maintain it.</li>
</ul>
<p>According to their shape bones are <b>long</b> (femur, humerus), <b>short</b> (vertebrae, wrist bones) and <b>flat</b> (skull, shoulder blade, breastbone).</p>
<p>A long bone has:</p>
<ul>
<li>the <b>periosteum</b>, an outer membrane that feeds the bone and repairs it after fractures;</li>
<li><b>compact bone</b>, hard and solid, on the outside;</li>
<li><b>spongy bone</b>, with lots of cavities like a sponge, at the ends (the <b>epiphyses</b>), where the red marrow is found;</li>
<li>the <b>medullary canal</b> in the central part (the <b>diaphysis</b>), with the <b>yellow marrow</b>, rich in fat.</li>
</ul>
<p>Bones grow in length thanks to the <b>growth plates</b>, near the epiphyses: they close around the age of 18–21 and from then on you stop growing taller.</p>`
    },
    {
      type: "3d",
      title: "3D cross-section of a long bone",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fca5a5", label: "Periosteum" },
          { r: 0.95, color: "#f5f5f4", label: "Compact bone" },
          { r: 0.7, color: "#fde68a", label: "Spongy bone" },
          { r: 0.45, color: "#facc15", label: "Medullary canal (marrow)" }
        ]
      },
      caption: "Rotate the section: the bone is a tube with hard walls and a lighter inside. That way it is strong but not too heavy."
    },
    {
      type: "text",
      title: "4. The joints",
      html: `<p>The place where two or more bones meet is called a <b>joint</b>. There are three types:</p>
<table>
<tr><th>Type</th><th>Movement</th><th>Examples</th></tr>
<tr><td><b>Immovable</b> (synarthroses)</td><td>none</td><td>bones of the skull (joined by sutures)</td></tr>
<tr><td><b>Slightly movable</b> (amphiarthroses)</td><td>limited</td><td>vertebrae, the joining of the ribs to the breastbone</td></tr>
<tr><td><b>Freely movable</b> (diarthroses)</td><td>wide</td><td>shoulder, elbow, knee, hip, fingers</td></tr>
</table>
<p>In movable joints the ends of the bones are covered with smooth <b>cartilage</b> and enclosed in a <b>joint capsule</b> full of <b>synovial fluid</b>, an "oil" that reduces friction. <b>Ligaments</b>, strong cords, hold the bones together.</p>
<p>Movable joints come in different shapes:</p>
<ul>
<li><b>hinge</b> (elbow, knee): they bend in one plane only, like a door;</li>
<li><b>ball-and-socket</b> (shoulder, hip): they rotate in all directions;</li>
<li><b>pivot</b> (between the first two vertebrae of the neck): they allow rotation, like when you shake your head for "no";</li>
<li><b>saddle</b> (at the base of the thumb): lets us bring the thumb against the other fingers.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: bones and joints",
      questions: [
        { type: "num", q: "About how many bones does an adult's skeleton have?", answer: 206, explain: "About 206 bones." },
        { type: "mc", q: "Which is the longest bone in the body?", options: ["Humerus", "Tibia", "Femur", "Spine"], answer: 2, explain: "The femur, in the thigh." },
        { type: "mc", q: "Where is the red bone marrow found?", options: ["In spongy bone", "In the periosteum", "In cartilage"], answer: 0, explain: "In the cavities of spongy bone, especially in flat bones and the epiphyses." },
        { type: "mc", q: "The shoulder joint is…", options: ["a hinge", "a ball-and-socket", "immovable"], answer: 1, explain: "It is a ball-and-socket: it allows movement in all directions." }
      ]
    },
    {
      type: "text",
      title: "5. Muscles",
      html: `<p><b>Muscles</b> are organs able to <b>contract</b>, that is to shorten, turning chemical energy into movement. They make up about <b>40%</b> of body weight. There are three types of muscle tissue:</p>
<table>
<tr><th>Type</th><th>Appearance</th><th>Control</th><th>Where</th></tr>
<tr><td><b>Skeletal (striated)</b></td><td>long striped fibres</td><td><b>voluntary</b></td><td>muscles attached to bones</td></tr>
<tr><td><b>Smooth</b></td><td>spindle-shaped cells, no stripes</td><td><b>involuntary</b></td><td>walls of stomach, intestine, vessels</td></tr>
<tr><td><b>Cardiac</b></td><td>striped and branched</td><td><b>involuntary</b></td><td>only in the heart (myocardium)</td></tr>
</table>
<p>A skeletal muscle is a bundle of <b>muscle fibres</b> (cells up to several centimetres long), themselves full of <b>myofibrils</b> made of two proteins, <b>actin</b> and <b>myosin</b>, which slide over each other when the muscle contracts.</p>
<p>Muscles are attached to bones by <b>tendons</b>, very strong cords of collagen. The biggest is the <b>Achilles tendon</b>, in the heel.</p>
<p>The biggest muscle is the <b>gluteus maximus</b>, the smallest the <b>stapedius</b> in the ear (about 1 mm); the strongest in proportion to its size is the <b>masseter</b>, which closes the jaw.</p>`
    },
    {
      type: "text",
      title: "6. Antagonist muscles and the levers of the body",
      html: `<p>A muscle can only <b>pull</b>, never push. That is why muscles work <b>in pairs</b>: <b>antagonist muscles</b>.</p>
<ul>
<li>To <b>bend</b> the arm the <b>biceps</b> contracts and the <b>triceps</b> relaxes (a <b>flexor</b> muscle).</li>
<li>To <b>straighten</b> the arm the <b>triceps</b> contracts and the biceps relaxes (an <b>extensor</b> muscle).</li>
</ul>
<p>Bones work as <b>levers</b>: the joint is the <b>fulcrum</b>, the muscle applies the <b>effort</b>, the weight to be lifted is the <b>load</b>.</p>
<ul>
<li>The <b>forearm</b> lifting a weight: a <b>3rd class</b> lever (the effort, the biceps, is attached between the elbow and the hand). It is <b>disadvantageous</b>: the biceps has to exert a force many times greater than the weight, but in exchange the hand moves fast and over a wide range.</li>
<li>Standing <b>on tiptoe</b>: a <b>2nd class</b> lever (fulcrum on the toes, load = body weight on the ankle, effort = calf on the heel).</li>
<li>Nodding your <b>head</b>: a <b>1st class</b> lever (fulcrum between the skull and the first vertebra).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Biceps and triceps: an antagonist pair",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<text x="150" y="28" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Flexion</text>
<text x="450" y="28" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Extension</text>
<rect x="50" y="60" width="18" height="150" rx="8" fill="#f5f5f4" stroke="#78716c" stroke-width="3"/>
<line x1="59" y1="210" x2="200" y2="120" stroke="#78716c" stroke-width="16" stroke-linecap="round"/>
<line x1="59" y1="210" x2="200" y2="120" stroke="#f5f5f4" stroke-width="10" stroke-linecap="round"/>
<ellipse cx="88" cy="140" rx="22" ry="55" fill="#ef4444"/>
<ellipse cx="38" cy="140" rx="12" ry="50" fill="#fca5a5"/>
<text x="115" y="110" font-size="15" fill="#b91c1c" font-weight="bold">biceps</text>
<text x="115" y="128" font-size="14" fill="#b91c1c">contracted</text>
<text x="0" y="250" font-size="14" fill="#be123c">triceps relaxed</text>
<circle cx="59" cy="210" r="9" fill="#475569"/>
<text x="75" y="230" font-size="14" fill="#334155">elbow = fulcrum</text>
<rect x="350" y="60" width="18" height="150" rx="8" fill="#f5f5f4" stroke="#78716c" stroke-width="3"/>
<line x1="359" y1="210" x2="560" y2="230" stroke="#78716c" stroke-width="16" stroke-linecap="round"/>
<line x1="359" y1="210" x2="560" y2="230" stroke="#f5f5f4" stroke-width="10" stroke-linecap="round"/>
<ellipse cx="388" cy="135" rx="10" ry="60" fill="#fca5a5"/>
<ellipse cx="335" cy="140" rx="20" ry="55" fill="#ef4444"/>
<text x="410" y="110" font-size="15" fill="#be123c">biceps relaxed</text>
<text x="230" y="80" font-size="15" fill="#b91c1c" font-weight="bold">triceps</text>
<text x="230" y="98" font-size="14" fill="#b91c1c">contracted</text>
<circle cx="359" cy="210" r="9" fill="#475569"/>
</svg>`,
      caption: "The contracted muscle is bright red, the relaxed one is pink: when one pulls, the other lengthens."
    },
    {
      type: "widget",
      title: "What type of muscle is it?",
      widget: "classify",
      options: {
        groups: ["Skeletal (voluntary)", "Smooth (involuntary)", "Cardiac"],
        items: [
          ["💪 Biceps", 0],
          ["🦵 Quadriceps of the thigh", 0],
          ["😃 Smile muscles", 0],
          ["🍽️ Wall of the stomach", 1],
          ["🩸 Wall of the arteries", 1],
          ["🌀 Wall of the intestine", 1],
          ["❤️ Myocardium", 2]
        ]
      },
      caption: "Remember: the heart is striated but involuntary, a type of its own."
    },
    {
      type: "example",
      title: "Worked example: the strength of the biceps",
      html: `<p>Hold in your hand a bottle of <b>20 N</b> (about 2 kg) with your forearm horizontal. The hand is <b>35 cm</b> from the elbow; the biceps is attached to the radius about <b>5 cm</b> from the elbow.</p>
<p>Law of the lever: E · b<sub>E</sub> = L · b<sub>L</sub> → E · 5 = 20 · 35 → E = 700 / 5 = <b>140 N</b>.</p>
<p>The biceps has to pull with a force <b>7 times</b> greater than the weight! In exchange, when it shortens by 1 cm, the hand moves 7 cm: the disadvantageous lever gains speed and range.</p>`
    },
    {
      type: "example",
      title: "Worked example: the backpack and posture",
      html: `<p>Health authorities recommend that a backpack should not exceed about <b>10–15% of body weight</b>. If you weigh 45 kg, the backpack should not exceed 45 × 0.15 ≈ <b>6.7 kg</b>.</p>
<p>Tips: use <b>both shoulder straps</b>, adjust them so the backpack sits snug against your back, put the heaviest books close to your back. To lift a weight from the ground <b>bend your knees</b> and keep your back straight: that way the strong muscles of the legs do the work and the lumbar discs are not loaded.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand skeleton and muscles",
      intro: "If the Latin names of the bones frighten you, try looking at them with different eyes.",
      tabs: [
        {
          label: "🏗️ The body as a crane",
          html: `<p>Think of a <b>construction crane</b>: the metal structure (the skeleton) does not move by itself; you need the <b>cables</b> (the muscles and tendons) that pull and the <b>pivots</b> (the joints) around which the arms turn. Cables can only pull: to move the arm in both directions you need two, one on each side (the antagonist muscles).</p>
<p>Engineers copy nature too: cranes, robotic arms and modern prostheses are built on the same principle.</p>`
        },
        {
          label: "🧪 The chicken bone experiment",
          html: `<p>Try it at home with an adult:</p>
<ol>
<li>Take two clean chicken drumstick bones.</li>
<li>Put the first in a jar of <b>vinegar</b> for 3–4 days: the acid dissolves the <b>calcium salts</b>. The bone becomes so flexible that you can bend it almost into a knot! Only the <b>collagen</b> is left.</li>
<li>Put the second in a hot <b>oven</b> for about an hour (with an adult's help): the heat destroys the collagen. The bone becomes <b>brittle</b> and crumbles.</li>
</ol>
<p>Conclusion: minerals give <b>hardness</b>, collagen gives <b>elasticity</b>. You need both.</p>`
        },
        {
          label: "🦴 Why bones are tubes",
          html: `<p>A <b>tube</b> resists bending almost as well as a solid cylinder, but weighs much less: that is why bicycles and scaffolding are made of tubes, and the femur has a canal in the middle. The human femur can withstand vertical loads of several tonnes before breaking. Rotate the cylinder: imagine that the central part is hollow.</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 0.6, h: 2.2, color: "#f5f5f4", labels: true }
        },
        {
          label: "🌍 Skeletons of other animals",
          html: `<p>Comparing helps us understand what is really important:</p>
<ul>
<li>the <b>giraffe</b> has <b>7 cervical vertebrae</b>, just like us (and like almost all mammals): they are just much longer, up to 25 cm each;</li>
<li><b>birds</b> have hollow bones with thin internal "beams": light and strong for flying;</li>
<li><b>insects</b> and crabs have an <b>external skeleton</b> (exoskeleton) of chitin: to grow they have to change it (moulting);</li>
<li>sharks have a skeleton of <b>cartilage</b>, lighter and more flexible.</li>
</ul>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Did you know…? Vesalius and modern anatomy",
      html: `<p>In <b>1543</b> the Flemish doctor <b>Andreas Vesalius</b>, a professor at the University of <b>Padua</b>, published the <i>De humani corporis fabrica</i>, the first great atlas of anatomy based on the dissection of human bodies. He showed that many of Galen's descriptions, accepted for 1300 years, were wrong because they were based on animals such as monkeys and pigs. For example, the human jaw is a single bone, not two as in the dog. His plates are so beautiful that they are still studied today.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Taller in space",
      html: `<p>Without gravity the intervertebral discs "swell" and astronauts become up to <b>5 cm taller</b>! But without the load of gravity bones lose calcium (about 1–2% a month) and muscles weaken. That is why on the International Space Station astronauts train for about <b>2 hours a day</b>. On Earth the same rule applies: bones and muscles get stronger only if they are used.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the locomotor system: tap the nodes and find out why",
      nodes: [
        { id: "loco", label: "Locomotor system", x: 50, y: 6, color: "#0ea5e9", html: "Bones + joints + muscles: it allows support and movement.", why: "In vertebrates the internal skeleton has grown along with the body, without moulting. Andreas Vesalius (1543) gave its first modern description based on direct observation." },
        { id: "ossa", label: "Bones", x: 20, y: 28, color: "#a8a29e", html: "About 206 living organs, long, short or flat.", why: "They are made of calcium minerals (hardness) and collagen (elasticity). The balance between osteoblasts and osteoclasts reshapes them according to the stresses they receive: this is Wolff's law (1892)." },
        { id: "midollo", label: "Bone marrow", x: 8, y: 55, color: "#ef4444", html: "Red marrow produces blood cells.", why: "Here the skeletal system links to the circulatory one. The stem cells of the marrow were discovered in the 1960s by Till and McCulloch; marrow transplants save people with leukaemia." },
        { id: "calcio", label: "Calcium and vitamin D", x: 30, y: 52, color: "#f5f5f4", html: "The main mineral of bones; vitamin D helps absorb it.", why: "Vitamin D forms in skin exposed to the Sun. Its lack in children causes rickets, very common in the smoky industrial cities of the 19th century." },
        { id: "artic", label: "Joints", x: 50, y: 32, color: "#f59e0b", html: "Contact points between bones: immovable, slightly movable, movable.", why: "The shape of the surfaces decides the movement: a ball in a socket rotates in every direction, a hinge bends in one plane only. Cartilage and synovial fluid reduce friction more than ice on ice." },
        { id: "muscoli", label: "Muscles", x: 80, y: 28, color: "#dc2626", html: "Organs that contract: skeletal, smooth, cardiac.", why: "Actin and myosin slide over each other using the energy of ATP: this is the sliding filament theory, proposed in 1954 by Hugh Huxley and Andrew Huxley (two scientists with the same surname but not related)." },
        { id: "tendini", label: "Tendons and ligaments", x: 82, y: 58, color: "#a16207", html: "Tendons join muscles to bones; ligaments join bones to bones.", why: "They are made of collagen, the most abundant protein in the body, arranged in parallel fibres that are very resistant to pulling." },
        { id: "antag", label: "Antagonist muscles", x: 62, y: 62, color: "#be123c", html: "Pairs of muscles with opposite actions (biceps/triceps).", why: "A muscle can only shorten and pull: to go back you need another muscle pulling the opposite way." },
        { id: "leve", label: "Levers of the body", x: 45, y: 88, color: "#7c3aed", html: "Bones = levers, joints = fulcrums, muscles = efforts.", why: "Giovanni Alfonso Borelli, in De motu animalium (1680), was the first to apply Archimedes' law of levers to muscles, founding biomechanics." }
      ],
      edges: [
        ["loco", "ossa", ""],
        ["loco", "artic", ""],
        ["loco", "muscoli", ""],
        ["ossa", "midollo", "contain the"],
        ["ossa", "calcio", "store of"],
        ["muscoli", "tendini", "are attached with the"],
        ["muscoli", "antag", "work as"],
        ["artic", "leve", "act as fulcrum for the"],
        ["antag", "leve", "move the"]
      ]
    },
    {
      type: "remember",
      title: "Remember – and take care of your body",
      html: `<ul>
<li>The skeleton (about <b>206 bones</b>) supports, protects, allows movement, produces blood and stores calcium.</li>
<li>Bone = <b>minerals</b> (hardness) + <b>collagen</b> (elasticity); periosteum, compact bone, spongy bone, marrow.</li>
<li><b>Immovable, slightly movable, movable</b> joints; ligaments, cartilage, synovial fluid.</li>
<li><b>Skeletal</b> (voluntary), <b>smooth</b> (involuntary), <b>cardiac</b> muscles; attached by <b>tendons</b>; working in <b>antagonist</b> pairs.</li>
<li>For your health: <b>exercise</b> every day (the WHO recommends at least 60 minutes for young people), milk, dairy products, leafy vegetables, sunshine, good posture.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: muscles",
      questions: [
        { type: "mc", q: "What connects a muscle to a bone?", options: ["The ligament", "The tendon", "The cartilage"], answer: 1, explain: "The tendon; the ligament connects bone to bone." },
        { type: "tf", q: "Muscles can both pull and push.", answer: false, explain: "They can only pull (contract): that is why they work in antagonist pairs." },
        { type: "mc", q: "The muscle of the intestine is…", options: ["voluntary skeletal", "involuntary smooth", "cardiac"], answer: 1, explain: "The walls of the internal organs have smooth muscle." }
      ]
    }
  ],
  glossary: [
    { t: "Axial skeleton", d: "The central part of the skeleton: skull, spine, rib cage." },
    { t: "Appendicular skeleton", d: "The bones of the limbs and girdles (shoulders and pelvis)." },
    { t: "Periosteum", d: "The membrane that covers the bone and feeds it." },
    { t: "Spongy bone", d: "Bone tissue with cavities, which contains the red marrow." },
    { t: "Bone marrow", d: "Tissue inside the bones; the red kind produces blood cells." },
    { t: "Collagen", d: "A fibrous protein that gives elasticity to bones, tendons and skin." },
    { t: "Joint", d: "A contact point between two or more bones." },
    { t: "Ligament", d: "A fibrous cord that joins two bones in a joint." },
    { t: "Tendon", d: "A fibrous cord that attaches a muscle to a bone." },
    { t: "Antagonist muscles", d: "Pairs of muscles that perform opposite movements." },
    { t: "Actin and myosin", d: "Proteins of muscle fibres that produce contraction by sliding over each other." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these is NOT a function of the skeleton?", options: ["Protecting organs", "Producing blood cells", "Digesting calcium", "Supporting the body"], answer: 2, explain: "The skeleton stores calcium, but does not digest it." },
      { type: "mc", q: "What does the rib cage protect?", options: ["Brain", "Heart and lungs", "Stomach and intestine"], answer: 1, explain: "Ribs and breastbone protect the heart and lungs." },
      { type: "num", q: "How many cervical vertebrae (in the neck) are there?", answer: 7, explain: "Seven, as in almost all mammals, giraffe included." },
      { type: "tf", q: "Bones are living organs, with blood vessels and nerves.", answer: true, explain: "They grow, repair themselves and are constantly renewed." },
      { type: "mc", q: "What gives bones their hardness?", options: ["Collagen", "Calcium salts", "Yellow marrow"], answer: 1, explain: "Mineral salts (calcium phosphate) give hardness; collagen gives elasticity." },
      { type: "mc", q: "The knee is a…", options: ["ball-and-socket joint", "hinge joint", "immovable joint", "pivot joint"], answer: 1, explain: "It bends mainly in one plane, like a hinge." },
      { type: "text", q: "What is the muscle that contracts to bend the arm called?", answer: ["biceps", "the biceps", "biceps brachii"], explain: "The biceps; the triceps is its antagonist." },
      { type: "mc", q: "Which type of muscle is voluntary?", options: ["Smooth", "Cardiac", "Skeletal (striated)"], answer: 2, explain: "Only skeletal striated muscles move at our will." },
      { type: "order", q: "Put the layers of a long bone in order, from the outside in.", items: ["Periosteum", "Compact bone", "Spongy bone", "Medullary canal"], explain: "Periosteum, compact bone, spongy bone, canal with the marrow." },
      { type: "num", q: "The hand is 30 cm from the elbow and the biceps is attached 5 cm away. What force must the biceps exert to hold a weight of 10 N?", answer: 60, unit: "N", explain: "E · 5 = 10 · 30 → E = 300 / 5 = 60 N." },
      { type: "mc", q: "The forearm lifting an object is a lever of…", options: ["1st class", "2nd class", "3rd class"], answer: 2, explain: "The effort (biceps) is between the fulcrum (elbow) and the load (hand)." },
      { type: "text", q: "What is the biggest tendon in the body, in the heel, called?", answer: ["achilles tendon", "achilles", "the achilles tendon", "achilles' tendon", "tendon of achilles"], explain: "The Achilles tendon, which joins the calf to the heel bone." }
    ],
    gen: [["proportion", 1]]
  }
});
