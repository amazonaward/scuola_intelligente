TOPIC('en', {
  id: "m2-sci-apparato-respiratorio",
  title: "The respiratory system",
  intro: "You can go weeks without food and a few days without water, but only a few minutes without <b>oxygen</b>. The <b>respiratory system</b> brings air to the lungs, where <b>gas exchange</b> takes place: oxygen comes in, carbon dioxide goes out. Every day you breathe about <b>20 000 times</b>!",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Breathing: two meanings",
      html: `<p>The word "respiration" refers to two connected things:</p>
<ul>
<li><b>breathing</b> (or ventilation): the movement of air in and out of the lungs and the exchange of gases between air and blood;</li>
<li><b>cellular respiration</b>: the chemical reaction that takes place in the <b>mitochondria</b> of every cell, where glucose "burns" with oxygen and releases the energy that keeps us alive:</li>
</ul>
<p style="text-align:center;font-size:1.15em"><b>glucose + oxygen → carbon dioxide + water + energy</b><br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + energy</p>
<p>The lungs exist precisely for this: to take in the O<sub>2</sub> that the mitochondria need and to get rid of the CO<sub>2</sub> they produce. The blood acts as a courier between the two.</p>`
    },
    {
      type: "text",
      title: "2. The airways",
      html: `<p>Air follows this path:</p>
<ol>
<li><b>Nose and nasal cavities</b>: hairs and <b>mucus</b> trap dust; the blood vessels warm the air and the lining moistens it. That is why it is better to breathe through your nose than through your mouth.</li>
<li><b>Pharynx</b>: a crossroads shared with the digestive system.</li>
<li><b>Larynx</b>: contains the <b>vocal cords</b>, which vibrate as air passes and produce the voice. The <b>epiglottis</b> closes it when we swallow. The "Adam's apple" is one of its cartilages.</li>
<li><b>Trachea</b> (windpipe): a tube about 12 cm long held open by C-shaped <b>rings of cartilage</b>. It is lined with cells with <b>cilia</b> that, like lots of little brooms, sweep dirty mucus towards the throat.</li>
<li><b>Bronchi</b>: the trachea divides into two bronchi, one for each lung, which branch into smaller and smaller tubes, the <b>bronchioles</b>. The whole thing looks like an upside-down tree: the <b>bronchial tree</b>.</li>
<li><b>Alveoli</b>: at the end of the bronchioles there are clusters of little sacs 0.2 mm across. In the two lungs there are about <b>300–500 million</b> of them!</li>
</ol>`
    },
    {
      type: "widget",
      title: "Name the parts",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="400" fill="#eff6ff"/>
<path d="M270 30 Q300 10 330 30 L330 60 L270 60 Z" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<rect x="288" y="60" width="24" height="30" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
<rect x="290" y="90" width="20" height="90" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<g stroke="#94a3b8" stroke-width="3"><line x1="290" y1="105" x2="310" y2="105"/><line x1="290" y1="120" x2="310" y2="120"/><line x1="290" y1="135" x2="310" y2="135"/><line x1="290" y1="150" x2="310" y2="150"/><line x1="290" y1="165" x2="310" y2="165"/></g>
<path d="M180 120 C120 150 110 280 140 340 C180 360 260 350 270 320 L275 200 C260 150 220 120 180 120 Z" fill="#fbcfe8" stroke="#be185d" stroke-width="4"/>
<path d="M420 120 C480 150 490 280 460 340 C420 360 340 350 330 320 L325 200 C340 150 380 120 420 120 Z" fill="#fbcfe8" stroke="#be185d" stroke-width="4"/>
<path d="M300 180 L240 220 L200 270 M240 220 L230 290 M300 180 L360 220 L400 270 M360 220 L370 290" fill="none" stroke="#7c3aed" stroke-width="7"/>
<circle cx="200" cy="275" r="10" fill="#f472b6"/><circle cx="215" cy="285" r="8" fill="#f472b6"/>
<path d="M120 365 Q300 300 480 365" fill="none" stroke="#ea580c" stroke-width="10"/>
</svg>`,
        spots: [
          { x: 300, y: 35, label: "Nose and nasal cavities" },
          { x: 300, y: 75, label: "Larynx" },
          { x: 300, y: 135, label: "Trachea" },
          { x: 355, y: 215, label: "Bronchus" },
          { x: 205, y: 280, label: "Alveoli" },
          { x: 440, y: 230, label: "Lung" },
          { x: 300, y: 335, label: "Diaphragm" }
        ]
      },
      caption: "The right lung has 3 lobes, the left only 2, because it leaves room for the heart."
    },
    {
      type: "text",
      title: "3. The lungs and the diaphragm",
      html: `<p>The <b>lungs</b> are two spongy, elastic organs contained in the <b>rib cage</b> (ribs, breastbone, spine). They are wrapped in the <b>pleura</b>, a double membrane with a film of fluid that lets them slide without friction.</p>
<p>The lungs have no muscles: they inflate and deflate thanks to the <b>diaphragm</b> (a dome-shaped muscle under the lungs) and the <b>intercostal muscles</b>.</p>
<ul>
<li><b>Inhalation</b> (active): the diaphragm <b>contracts</b> and moves down, the ribs lift. The volume of the chest increases, the pressure inside the lungs drops and air <b>flows in</b>.</li>
<li><b>Exhalation</b> (passive at rest): the diaphragm <b>relaxes</b> and moves back up, the ribs lower. The volume decreases, the pressure rises and air <b>flows out</b>.</li>
</ul>
<p>At rest a young person breathes about <b>12–20 times per minute</b> and with every breath exchanges about <b>0.5 litres</b> of air. The maximum amount that can be breathed out after a deep breath in is called the <b>vital capacity</b>: about 3–5 litres in an adult.</p>
<p>The rhythm is controlled automatically by the <b>medulla</b> (in the brainstem), which mainly measures the amount of <b>CO<sub>2</sub></b> in the blood: when the CO<sub>2</sub> rises, we breathe faster.</p>`
    },
    {
      type: "svg",
      title: "Inhalation and exhalation",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="150" y="30" font-size="19" text-anchor="middle" fill="#0369a1" font-weight="bold">Inhalation</text>
<text x="450" y="30" font-size="19" text-anchor="middle" fill="#9a3412" font-weight="bold">Exhalation</text>
<path d="M80 70 C60 120 60 200 85 235 L215 235 C240 200 240 120 220 70 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<path d="M75 240 Q150 255 225 240" fill="none" stroke="#ea580c" stroke-width="9"/>
<text x="150" y="285" font-size="15" text-anchor="middle" fill="#c2410c">diaphragm moves down (contracted)</text>
<line x1="150" y1="40" x2="150" y2="100" stroke="#0284c7" stroke-width="6"/>
<polygon points="140,95 150,115 160,95" fill="#0284c7"/>
<text x="150" y="170" font-size="17" text-anchor="middle" fill="#0c4a6e">volume ↑</text>
<text x="150" y="195" font-size="17" text-anchor="middle" fill="#0c4a6e">pressure ↓</text>
<path d="M390 90 C375 130 375 180 395 205 L505 205 C525 180 525 130 510 90 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="4"/>
<path d="M380 210 Q450 160 520 210" fill="none" stroke="#ea580c" stroke-width="9"/>
<text x="450" y="285" font-size="15" text-anchor="middle" fill="#c2410c">diaphragm moves up (relaxed)</text>
<line x1="450" y1="105" x2="450" y2="50" stroke="#9a3412" stroke-width="6"/>
<polygon points="440,55 450,35 460,55" fill="#9a3412"/>
<text x="450" y="140" font-size="17" text-anchor="middle" fill="#7c2d12">volume ↓</text>
<text x="450" y="165" font-size="17" text-anchor="middle" fill="#7c2d12">pressure ↑</text>
</svg>`,
      caption: "Air always moves from where the pressure is higher to where it is lower."
    },
    {
      type: "quiz",
      title: "Mini-quiz: airways and ventilation",
      questions: [
        { type: "mc", q: "Where are the vocal cords?", options: ["In the trachea", "In the larynx", "In the bronchi"], answer: 1, explain: "The vocal cords are in the larynx." },
        { type: "mc", q: "During inhalation the diaphragm…", options: ["relaxes and moves up", "contracts and moves down", "stays still"], answer: 1, explain: "By contracting it moves down and increases the volume of the chest." },
        { type: "tf", q: "The lungs have their own muscles that make them inflate.", answer: false, explain: "They move thanks to the diaphragm and the intercostal muscles." },
        { type: "text", q: "What are the little sacs where gas exchange takes place called?", answer: ["alveoli", "pulmonary alveoli", "the alveoli", "air sacs"], explain: "The pulmonary alveoli." }
      ]
    },
    {
      type: "text",
      title: "4. Gas exchange in the alveoli",
      html: `<p>Every alveolus is wrapped in a dense network of <b>capillaries</b>. The wall of the alveolus and that of the capillary together are less than <b>one thousandth of a millimetre</b> thick.</p>
<p>Gases cross this barrier by <b>diffusion</b>: each gas moves spontaneously from where it is more concentrated to where it is less.</p>
<ul>
<li>In the alveolus there is <b>a lot of O<sub>2</sub></b>, in the blood arriving from the right heart there is little → the O<sub>2</sub> passes <b>into the blood</b> and binds to haemoglobin.</li>
<li>In the blood there is <b>a lot of CO<sub>2</sub></b>, in the alveolus little → the CO<sub>2</sub> passes <b>into the alveolus</b> and is breathed out.</li>
</ul>
<p>All the alveoli together have a surface of about <b>70 m²</b>: roughly like a school classroom or a flat, folded up inside your chest!</p>
<table>
<tr><th>Gas</th><th>Inhaled air</th><th>Exhaled air</th></tr>
<tr><td>Nitrogen N<sub>2</sub></td><td>78%</td><td>78%</td></tr>
<tr><td>Oxygen O<sub>2</sub></td><td>21%</td><td>about 16%</td></tr>
<tr><td>Carbon dioxide CO<sub>2</sub></td><td>0.04%</td><td>about 4%</td></tr>
<tr><td>Water vapour</td><td>variable</td><td>saturated</td></tr>
</table>
<p>Note: we still breathe out a lot of oxygen (16%). That is why <b>mouth-to-mouth resuscitation</b> works!</p>`
    },
    {
      type: "svg",
      title: "An alveolus and its capillary",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<circle cx="240" cy="150" r="110" fill="#fbcfe8" stroke="#be185d" stroke-width="5"/>
<text x="240" y="100" font-size="18" text-anchor="middle" fill="#831843" font-weight="bold">alveolus (air)</text>
<path d="M360 20 C340 60 335 110 337 150" fill="none" stroke="#2563eb" stroke-width="34"/>
<path d="M337 150 C335 190 340 240 360 280" fill="none" stroke="#dc2626" stroke-width="34"/>
<text x="420" y="45" font-size="16" fill="#1d4ed8">oxygen-poor blood ↓</text>
<text x="420" y="270" font-size="16" fill="#b91c1c">oxygen-rich blood ↓</text>
<line x1="270" y1="140" x2="320" y2="140" stroke="#16a34a" stroke-width="6"/>
<polygon points="318,130 338,140 318,150" fill="#16a34a"/>
<text x="190" y="146" font-size="19" fill="#15803d" font-weight="bold">O₂ →</text>
<line x1="330" y1="190" x2="280" y2="190" stroke="#64748b" stroke-width="6"/>
<polygon points="282,180 262,190 282,200" fill="#64748b"/>
<text x="180" y="196" font-size="19" fill="#334155" font-weight="bold">← CO₂</text>
<text x="420" y="160" font-size="16" fill="#334155">capillary</text>
</svg>`,
      caption: "Oxygen enters the blood, carbon dioxide leaves: all by diffusion, without using energy."
    },
    {
      type: "3d",
      title: "The molecules of the breathing gases",
      scene: "molecule",
      options: {
        atoms: [
          { x: -3.2, y: 0.8, z: 0, r: 0.55, color: "#ef4444", label: "O" },
          { x: -2.0, y: 0.8, z: 0, r: 0.55, color: "#ef4444", label: "O" },
          { x: 0.4, y: 0.8, z: 0, r: 0.55, color: "#ef4444", label: "O" },
          { x: 1.6, y: 0.8, z: 0, r: 0.5, color: "#334155", label: "C" },
          { x: 2.8, y: 0.8, z: 0, r: 0.55, color: "#ef4444", label: "O" },
          { x: -0.6, y: -1.4, z: 0, r: 0.55, color: "#3b82f6", label: "N" },
          { x: 0.6, y: -1.4, z: 0, r: 0.55, color: "#3b82f6", label: "N" }
        ],
        bonds: [[0, 1], [2, 3], [3, 4], [5, 6]]
      },
      caption: "Top left oxygen O₂, top right carbon dioxide CO₂ (linear), at the bottom nitrogen N₂, the most abundant gas in air: we breathe it in and out without using it."
    },
    {
      type: "example",
      title: "Worked example: build a model lung",
      html: `<p>You need: a plastic bottle cut in half, a balloon, a straw, a latex glove or another balloon cut open, sticky tape.</p>
<ol>
<li>Put the balloon into the neck of the bottle, fixed to the straw (balloon = lung, straw = trachea).</li>
<li>Close the cut bottom with the stretched glove, fixed with tape (glove = diaphragm).</li>
<li><b>Pull down</b> the glove: the volume in the bottle increases, the pressure drops and the balloon <b>inflates</b> (inhalation).</li>
<li><b>Let go</b>: the balloon deflates (exhalation).</li>
</ol>`
    },
    {
      type: "example",
      title: "Worked example: work out how much air you breathe",
      html: `<p>At rest you take about <b>15 breaths per minute</b> of <b>0.5 litres</b> each.</p>
<p>In one minute: 15 × 0.5 = <b>7.5 litres</b>.<br>In one hour: 7.5 × 60 = <b>450 litres</b>.<br>In one day: 450 × 24 = <b>10 800 litres</b>, that is about 11 000 litres of air!</p>
<p>During a run you can go over 100 litres per minute. That is why the <b>quality of the air</b> we breathe (smog, fine particulates PM10 and PM2.5, smoke) is so important for health.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand breathing",
      intro: "If pressure and diffusion seem abstract, try these roads.",
      tabs: [
        {
          label: "🌳 The upside-down tree",
          html: `<p>Turn a tree upside down: the <b>trunk</b> is the trachea, the <b>big branches</b> are the bronchi, the <b>twigs</b> the bronchioles and the <b>leaves</b> the alveoli. Just as the leaves of a tree offer a huge surface to the light, the alveoli offer a huge surface to the air.</p>
<p>And there is a real link between trees and lungs: trees, with <b>photosynthesis</b>, do the opposite of us: they absorb CO<sub>2</sub> and release O<sub>2</sub>.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<rect x="290" y="10" width="20" height="90" fill="#92400e"/>
<path d="M300 100 L200 160 L150 210 M200 160 L210 230 M300 100 L400 160 L450 210 M400 160 L390 230 M300 100 L300 200" fill="none" stroke="#92400e" stroke-width="10"/>
<g fill="#22c55e"><circle cx="145" cy="218" r="18"/><circle cx="212" cy="236" r="16"/><circle cx="455" cy="218" r="18"/><circle cx="388" cy="236" r="16"/><circle cx="300" cy="212" r="18"/></g>
<text x="320" y="55" font-size="17" fill="#78350f">trunk = trachea</text>
<text x="40" y="150" font-size="17" fill="#78350f">branches = bronchi</text>
<text x="460" y="150" font-size="17" fill="#15803d">leaves = alveoli</text>
</svg>`
        },
        {
          label: "🎈 The balloon and the syringe",
          html: `<p>Take a <b>syringe without a needle</b> and block the hole with your finger. If you pull the plunger, you feel it "sucking": you have increased the volume and the pressure inside has dropped. As soon as you take your finger off, air rushes in. It is exactly what the diaphragm does!</p>
<p>This link between volume and pressure (at constant temperature, if the volume doubles the pressure is halved) is <b>Boyle's law</b>, discovered by the Irishman <b>Robert Boyle</b> in <b>1662</b>.</p>`
        },
        {
          label: "🔥 The candle that breathes",
          html: `<p>In 1774–1777 the French chemist <b>Antoine Lavoisier</b> understood that breathing is a <b>slow combustion</b>, like a burning candle: both use up <b>oxygen</b> and produce <b>CO<sub>2</sub></b>, water and heat. Lavoisier measured the heat produced by a guinea pig and showed that it was similar to that from burning carbon.</p>
<p>An important difference: in the candle the energy is all released at once as a flame; in cells, thanks to enzymes, it is released in small steps and stored in a molecule called <b>ATP</b>.</p>`
        },
        {
          label: "🐟 Gills, tracheae and lungs",
          html: `<p>Not everyone breathes like us:</p>
<ul>
<li><b>Fish</b>: <b>gills</b>, very thin plates that extract the O<sub>2</sub> dissolved in water (which contains about 30 times less than air);</li>
<li><b>Insects</b>: <b>tracheae</b>, little tubes that carry air straight to the cells through holes in the body (the spiracles);</li>
<li><b>Amphibians</b>: simple lungs, but also breathing through the moist <b>skin</b>;</li>
<li><b>Birds</b>: lungs with <b>air sacs</b>, in which air flows in one direction only: they are the most efficient breathers, able to fly above 8000 m.</li>
</ul>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Did you know…? Smoke and cilia",
      html: `<p>Cigarette smoke contains over <b>7000 chemicals</b>, at least 70 of which cause cancer. It paralyses the <b>cilia</b> of the trachea: the dirty mucus is no longer pushed out and builds up (hence the "smoker's cough"). The <b>carbon monoxide</b> (CO) in smoke binds to haemoglobin about <b>200 times</b> more strongly than oxygen and "steals its place". The good news: after quitting, the risk goes down year by year. The best way is never to start.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Hiccups and yawns",
      html: `<p>A <b>hiccup</b> is a sudden, involuntary contraction of the diaphragm, followed by the rapid closing of the vocal cords: that is the "hic!". A <b>sneeze</b> can expel air at speeds of tens of km/h. And in breath-hold diving, professional freedivers, after long training, manage to hold their breath for over <b>10 minutes</b> by first breathing pure oxygen, while an ordinary person lasts about 1 minute.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of breathing: tap the nodes and find out why",
      nodes: [
        { id: "mito", label: "Cellular respiration", x: 50, y: 6, color: "#f59e0b", html: "In the mitochondria glucose reacts with O₂ and releases energy, CO₂ and water.", why: "It is the deep reason why we breathe. Lavoisier (1777) guessed that breathing is like burning slowly; the cycle of reactions that takes place in the mitochondria was discovered by Hans Krebs in 1937." },
        { id: "vie", label: "Airways", x: 18, y: 26, color: "#0ea5e9", html: "Nose, pharynx, larynx, trachea, bronchi, bronchioles.", why: "Before reaching the delicate alveoli the air has to be cleaned, warmed and humidified: that is why the airways are lined with mucus and cilia." },
        { id: "polmoni", label: "Lungs", x: 50, y: 30, color: "#ec4899", html: "Spongy organs with millions of alveoli.", why: "To exchange a lot of gas you need a huge surface in little space: folding the surface into millions of little sacs is the solution, as with the villi of the intestine." },
        { id: "diaframma", label: "Diaphragm", x: 82, y: 26, color: "#ea580c", html: "A dome-shaped muscle whose contraction draws air in.", why: "The lungs have no muscles: they inflate because the chest widens and the internal pressure drops, as Boyle's law explains (1662)." },
        { id: "alveoli", label: "Alveoli", x: 50, y: 55, color: "#be185d", html: "Little sacs with very thin walls surrounded by capillaries.", why: "They were first observed under the microscope by Marcello Malpighi in 1661, who described the lungs as made of \"little bladders\" and not of solid flesh." },
        { id: "diff", label: "Diffusion", x: 18, y: 60, color: "#16a34a", html: "Gases pass from where they are more concentrated to where they are less.", why: "It is a physical phenomenon due to the random movement of molecules, described mathematically by Adolf Fick in 1855. It needs no energy: that is why the walls must be very thin." },
        { id: "sangue", label: "Blood and haemoglobin", x: 82, y: 58, color: "#dc2626", html: "The blood carries O₂ to the cells and brings back CO₂.", why: "Here the respiratory and circulatory systems work as a team: the pulmonary circulation carries blood from the right heart to the lungs and returns it oxygenated to the left heart." },
        { id: "bulbo", label: "Nervous control", x: 30, y: 85, color: "#7c3aed", html: "The medulla automatically regulates the rhythm of breathing.", why: "Sensors in the vessels and the brain mainly measure CO₂: when it rises (for example when running) breathing speeds up. That is why you cannot hold your breath forever." },
        { id: "salute", label: "Lung health", x: 70, y: 88, color: "#64748b", html: "No smoking, clean air, physical activity.", why: "Smoke and smog damage cilia and alveoli; diseases such as asthma narrow the bronchi. Sport increases the efficiency of the breathing muscles." }
      ],
      edges: [
        ["mito", "polmoni", "needs O₂ from the"],
        ["vie", "polmoni", "carry air to the"],
        ["diaframma", "polmoni", "draws air into the"],
        ["polmoni", "alveoli", "are made of"],
        ["alveoli", "diff", "exchange by"],
        ["alveoli", "sangue", "give O₂ to the"],
        ["sangue", "mito", "carries O₂ to the"],
        ["bulbo", "diaframma", "commands the"],
        ["salute", "vie", "protects the"]
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Airways: <b>nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli</b>.</li>
<li><b>Inhalation</b>: the diaphragm contracts and moves down, volume ↑, pressure ↓, air flows in. <b>Exhalation</b>: the opposite.</li>
<li>In the <b>alveoli</b> <b>gas exchange</b> takes place by <b>diffusion</b>: O<sub>2</sub> into the blood, CO<sub>2</sub> out.</li>
<li>The aim is <b>cellular respiration</b> in the mitochondria, which produces energy.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: gas exchange",
      questions: [
        { type: "mc", q: "How does oxygen pass from the alveolus to the blood?", options: ["By diffusion", "Pumped by the heart", "With the help of digestive enzymes"], answer: 0, explain: "By diffusion, from where it is more concentrated to where it is less." },
        { type: "num", q: "Roughly what percentage of CO₂ is there in exhaled air?", answer: 4, tol: 1, unit: "%", explain: "About 4%, against 0.04% in inhaled air: a hundred times more." },
        { type: "tf", q: "There is no oxygen left in exhaled air.", answer: false, explain: "There is still about 16%." }
      ]
    }
  ],
  glossary: [
    { t: "Pulmonary ventilation", d: "The movement of air in and out of the lungs." },
    { t: "Cellular respiration", d: "The reaction by which cells get energy from glucose using oxygen." },
    { t: "Larynx", d: "The organ of the airways that contains the vocal cords." },
    { t: "Trachea", d: "A tube reinforced with rings of cartilage that carries air to the bronchi." },
    { t: "Bronchi", d: "The two branches of the trachea that enter the lungs." },
    { t: "Alveoli", d: "Tiny sacs in the lungs where gas exchange takes place." },
    { t: "Diaphragm", d: "A dome-shaped muscle separating chest and abdomen; the main breathing muscle." },
    { t: "Pleura", d: "The double membrane that wraps the lungs." },
    { t: "Diffusion", d: "The spontaneous movement of a substance from where it is more concentrated to where it is less." },
    { t: "Vital capacity", d: "The maximum volume of air that can be breathed out after a deep breath in." },
    { t: "Mitochondrion", d: "The cell organelle in which cellular respiration takes place." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Put the path of inhaled air in order.", items: ["Nose", "Pharynx", "Larynx", "Trachea", "Bronchi", "Alveoli"], explain: "Nose, pharynx, larynx, trachea, bronchi (and bronchioles), alveoli." },
      { type: "mc", q: "What is the function of the rings of cartilage in the trachea?", options: ["To produce the voice", "To keep the trachea always open", "To warm the air"], answer: 1, explain: "They stop the trachea from being squashed flat." },
      { type: "mc", q: "Where does the exchange between oxygen and carbon dioxide take place?", options: ["In the trachea", "In the alveoli", "In the larynx", "In the diaphragm"], answer: 1, explain: "In the alveoli, surrounded by capillaries." },
      { type: "tf", q: "During inhalation the pressure inside the lungs decreases.", answer: true, explain: "The volume increases, the pressure drops and air flows in." },
      { type: "num", q: "You take 16 breaths per minute of 0.5 litres each. How many litres of air do you breathe in a minute?", answer: 8, unit: "litres", explain: "16 × 0.5 = 8 litres." },
      { type: "mc", q: "Which gas is the most abundant in the air we breathe?", options: ["Oxygen", "Nitrogen", "Carbon dioxide"], answer: 1, explain: "Nitrogen is about 78%." },
      { type: "text", q: "What is the dome-shaped muscle under the lungs called?", answer: ["diaphragm", "the diaphragm"], explain: "The diaphragm." },
      { type: "mc", q: "Why is it better to breathe through the nose?", options: ["Because more oxygen gets in", "Because the air is filtered, warmed and humidified", "Because the mouth does not connect to the lungs"], answer: 1, explain: "Hairs, mucus and vessels in the nose prepare the air." },
      { type: "mc", q: "In cellular respiration glucose reacts with oxygen and produces…", options: ["nitrogen and salt", "carbon dioxide, water and energy", "only oxygen"], answer: 1, explain: "Glucose + O₂ → CO₂ + H₂O + energy." },
      { type: "tf", q: "The rhythm of breathing is regulated mainly by the amount of CO₂ in the blood.", answer: true, explain: "The medulla measures CO₂: if it rises, breathing speeds up." },
      { type: "mc", q: "Smoke damages the airways because…", options: ["it paralyses the cilia and CO occupies the haemoglobin", "it strengthens the alveoli", "it increases the vital capacity"], answer: 0, explain: "The cilia no longer clean and carbon monoxide reduces the transport of O₂." }
    ]
  }
});
