TOPIC('en', {
  id: "m2-sci-forze-moto",
  title: "Forces and motion",
  intro: "Why does a bicycle speed up, brake or turn? Why can you lift a boulder with a crowbar? In this lesson you learn to describe <b>motion</b> (speed and acceleration), to understand what <b>forces</b> are and how <b>levers</b> help us multiply them.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Motion is relative",
      html: `<p>A body is <b>in motion</b> when its position changes over time with respect to a <b>frame of reference</b>, that is with respect to something we consider to be still.</p>
<p>Sitting on a train, you are <b>still</b> with respect to your seat but <b>in motion</b> with respect to the station. And the Earth itself goes around the Sun at about 30 km per second! That is why we say that motion is <b>relative</b>.</p>
<p>To describe a motion you need:</p>
<ul>
<li>the <b>trajectory</b>: the line travelled (straight, circular, curved…);</li>
<li>the <b>distance travelled</b> <i>s</i>, in metres (m);</li>
<li>the <b>time</b> taken <i>t</i>, in seconds (s).</li>
</ul>`
    },
    {
      type: "text",
      title: "2. Speed",
      html: `<p><b>Speed</b> tells how much distance is covered in a unit of time:</p>
<p style="font-size:1.3em;text-align:center"><b>v = s / t</b></p>
<p>In the International System it is measured in <b>metres per second (m/s)</b>; in everyday life we use <b>kilometres per hour (km/h)</b>.</p>
<ul>
<li>from km/h to m/s: <b>divide by 3.6</b> (72 km/h = 20 m/s);</li>
<li>from m/s to km/h: <b>multiply by 3.6</b> (10 m/s = 36 km/h).</li>
</ul>
<p>Why 3.6? Because 1 km = 1000 m and 1 h = 3600 s: 1000/3600 = 1/3.6.</p>
<p>Inverse formulas: <b>s = v · t</b> and <b>t = s / v</b>.</p>
<p><b>Uniform rectilinear motion</b> is when a body moves in a straight line with <b>constant</b> speed: it covers equal distances in equal times. Its distance-time graph is a <b>straight line</b> starting from the origin; the steeper it is, the greater the speed.</p>
<p>Almost always, though, the speed changes: then we calculate the <b>average speed</b> (total distance / total time).</p>`
    },
    {
      type: "svg",
      title: "The distance-time graph",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<line x1="70" y1="270" x2="560" y2="270" stroke="#0f172a" stroke-width="3"/>
<line x1="70" y1="270" x2="70" y2="30" stroke="#0f172a" stroke-width="3"/>
<polygon points="560,264 575,270 560,276" fill="#0f172a"/>
<polygon points="64,30 70,15 76,30" fill="#0f172a"/>
<text x="560" y="300" font-size="17" fill="#0f172a">t (s)</text>
<text x="20" y="40" font-size="17" fill="#0f172a">s (m)</text>
<g stroke="#e2e8f0" stroke-width="1">
<line x1="170" y1="270" x2="170" y2="40"/><line x1="270" y1="270" x2="270" y2="40"/><line x1="370" y1="270" x2="370" y2="40"/><line x1="470" y1="270" x2="470" y2="40"/>
<line x1="70" y1="210" x2="560" y2="210"/><line x1="70" y1="150" x2="560" y2="150"/><line x1="70" y1="90" x2="560" y2="90"/>
</g>
<line x1="70" y1="270" x2="320" y2="40" stroke="#dc2626" stroke-width="5"/>
<line x1="70" y1="270" x2="560" y2="150" stroke="#2563eb" stroke-width="5"/>
<path d="M70 270 Q300 265 470 60" fill="none" stroke="#16a34a" stroke-width="5"/>
<text x="250" y="70" font-size="17" fill="#dc2626" font-weight="bold">fast 🚗</text>
<text x="440" y="185" font-size="17" fill="#2563eb" font-weight="bold">slow 🚲</text>
<text x="420" y="110" font-size="17" fill="#16a34a" font-weight="bold">speeding up 🏃</text>
</svg>`,
      caption: "Straight lines = constant speed (uniform motion): the steepest is the fastest. The green curve gets steeper and steeper: the body is accelerating."
    },
    {
      type: "text",
      title: "3. Acceleration",
      html: `<p>When the speed changes, there is an <b>acceleration</b>. It is calculated as the change in speed divided by the time:</p>
<p style="font-size:1.3em;text-align:center"><b>a = (v<sub>final</sub> − v<sub>initial</sub>) / t</b></p>
<p>It is measured in <b>m/s²</b> ("metres per second squared"): it tells by how many m/s the speed increases every second.</p>
<ul>
<li><b>positive</b> acceleration: the speed increases;</li>
<li><b>negative</b> acceleration (deceleration): the speed decreases, like when you brake.</li>
</ul>
<p>Example: a car goes from 0 to 27 m/s (about 100 km/h) in 9 s. a = 27 / 9 = <b>3 m/s²</b>.</p>
<p>A very famous case is <b>free fall</b>: near the Earth's surface, without air, all bodies fall with the same acceleration <b>g ≈ 9.8 m/s²</b>. <b>Galileo Galilei</b> understood this by studying balls rolling down inclined planes (published in 1638).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: speed and acceleration",
      questions: [
        { type: "num", q: "A cyclist travels 600 m in 120 s. What is the average speed in m/s?", answer: 5, unit: "m/s", explain: "v = s / t = 600 / 120 = 5 m/s (that is 18 km/h)." },
        { type: "num", q: "How many km/h is 25 m/s?", answer: 90, unit: "km/h", explain: "25 × 3.6 = 90 km/h." },
        { type: "num", q: "A scooter goes from 2 m/s to 12 m/s in 5 s. What is its acceleration?", answer: 2, unit: "m/s²", explain: "a = (12 − 2) / 5 = 10 / 5 = 2 m/s²." },
        { type: "tf", q: "In uniform rectilinear motion the acceleration is zero.", answer: true, explain: "The speed does not change, so there is no acceleration." }
      ]
    },
    {
      type: "text",
      title: "4. Forces",
      html: `<p>A <b>force</b> is an action able to <b>change the state of motion</b> of a body (make it start, stop, speed up, turn) or to <b>deform</b> it.</p>
<p>Force is a <b>vector</b> quantity: to describe it you need <b>magnitude</b> (how strong it is), <b>direction</b>, <b>sense</b> and <b>point of application</b>. It is drawn as an arrow.</p>
<p>It is measured in <b>newtons (N)</b> with the <b>spring balance</b>, a calibrated spring. 1 N is about the weight of a small apple (100 g).</p>
<p>Everyday forces:</p>
<ul>
<li><b>weight</b>: W = m · g. A boy of 50 kg weighs about 50 × 9.8 = <b>490 N</b>. Careful: <b>mass</b> (kg) is the amount of matter and does not change; <b>weight</b> (N) is a force and on the Moon it is about 6 times smaller;</li>
<li><b>friction</b>: opposes movement between two surfaces (brakes, shoe soles);</li>
<li><b>elastic force</b>: of springs and elastic bands;</li>
<li><b>forces at a distance</b>: gravity, magnetic force, electric force.</li>
</ul>
<p>If several forces act on the same body they add up as vectors: their sum is the <b>resultant</b>. If the resultant is zero the body is in <b>equilibrium</b>.</p>`
    },
    {
      type: "text",
      title: "5. Newton's three laws of motion",
      html: `<p>In <b>1687</b> <b>Isaac Newton</b> published the <i>Principia</i>, in which he summed up the link between forces and motion in three laws.</p>
<ol>
<li><b>Law of inertia</b>: if the resultant of the forces is zero, a body stays still or keeps moving in a straight line at constant speed. (That is why you wear a seat belt in a car: when braking the body tends to keep going forward.)</li>
<li><b>Fundamental law</b>: <b>F = m · a</b>. A force produces an acceleration proportional to itself and inversely proportional to the mass. Pushing an empty trolley is easier than pushing a full one.</li>
<li><b>Law of action and reaction</b>: if a body A exerts a force on B, then B exerts on A an equal and opposite force. The rocket pushes the gases backwards and the gases push the rocket forwards; when you walk, you push the floor backwards and it pushes you forwards.</li>
</ol>`
    },
    {
      type: "svg",
      title: "The forces on a moving car",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<rect x="0" y="230" width="600" height="70" fill="#64748b"/>
<line x1="0" y1="265" x2="600" y2="265" stroke="#f8fafc" stroke-width="4" stroke-dasharray="30,20"/>
<rect x="210" y="150" width="190" height="60" rx="14" fill="#ef4444"/>
<path d="M240 150 L265 110 L345 110 L370 150 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="3"/>
<circle cx="250" cy="215" r="20" fill="#1f2937"/><circle cx="360" cy="215" r="20" fill="#1f2937"/>
<line x1="400" y1="180" x2="520" y2="180" stroke="#16a34a" stroke-width="7"/>
<polygon points="520,168 545,180 520,192" fill="#16a34a"/>
<text x="430" y="165" font-size="16" fill="#166534" font-weight="bold">engine thrust</text>
<line x1="210" y1="180" x2="110" y2="180" stroke="#f97316" stroke-width="7"/>
<polygon points="110,168 85,180 110,192" fill="#f97316"/>
<text x="60" y="160" font-size="16" fill="#c2410c" font-weight="bold">friction + air</text>
<line x1="305" y1="180" x2="305" y2="280" stroke="#7c3aed" stroke-width="6"/>
<polygon points="293,270 305,295 317,270" fill="#7c3aed"/>
<text x="315" y="290" font-size="16" fill="#6d28d9" font-weight="bold">weight W</text>
<line x1="305" y1="150" x2="305" y2="60" stroke="#0284c7" stroke-width="6"/>
<polygon points="293,65 305,40 317,65" fill="#0284c7"/>
<text x="315" y="60" font-size="16" fill="#0369a1" font-weight="bold">reaction of the road</text>
</svg>`,
      caption: "If the engine thrust equals the friction, the resultant is zero: the car moves at constant speed (1st law). If the thrust is greater, the car accelerates (2nd law)."
    },
    {
      type: "text",
      title: "6. Levers: multiplying force",
      html: `<p>A <b>lever</b> is a simple machine: a rigid bar that can rotate around a fixed point, the <b>fulcrum</b>. Acting on it are:</p>
<ul>
<li>the <b>effort E</b>: the force we apply;</li>
<li>the <b>load L</b>: the force to be overcome (a weight, a nail…).</li>
</ul>
<p>The distances from the fulcrum are called the <b>effort arm b<sub>E</sub></b> and the <b>load arm b<sub>L</sub></b>. The lever is in equilibrium when:</p>
<p style="font-size:1.3em;text-align:center"><b>E · b<sub>E</sub> = L · b<sub>L</sub></b></p>
<p>The longer the effort arm, the less force is needed. If b<sub>E</sub> &gt; b<sub>L</sub> the lever is <b>advantageous</b>; if b<sub>E</sub> &lt; b<sub>L</sub> it is <b>disadvantageous</b> (but gains speed and range of movement); if they are equal it is <b>indifferent</b>.</p>
<p>Levers are classified into three <b>classes</b>:</p>
<table>
<tr><th>Class</th><th>Position</th><th>Examples</th></tr>
<tr><td>1st class</td><td>Fulcrum <b>in the middle</b> between E and L</td><td>seesaw, scissors, crowbar, balance scales</td></tr>
<tr><td>2nd class</td><td>Load in the middle (always advantageous)</td><td>wheelbarrow, nutcracker, bottle opener</td></tr>
<tr><td>3rd class</td><td>Effort in the middle (always disadvantageous)</td><td>tweezers, fishing rod, forearm</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "The three classes of levers",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#fefce8"/>
<text x="20" y="30" font-size="17" font-weight="bold" fill="#0f172a">1st class: F in the middle</text>
<rect x="60" y="62" width="320" height="10" fill="#92400e"/>
<polygon points="220,72 205,100 235,100" fill="#475569"/>
<text x="245" y="98" font-size="15" fill="#475569">fulcrum</text>
<rect x="60" y="30" width="34" height="32" fill="#64748b"/><text x="66" y="52" font-size="15" fill="#fff">L</text>
<line x1="370" y1="20" x2="370" y2="58" stroke="#16a34a" stroke-width="5"/><polygon points="362,52 370,64 378,52" fill="#16a34a"/>
<text x="384" y="40" font-size="15" fill="#166534">E</text>
<text x="420" y="70" font-size="15" fill="#0f172a">✂️ scissors, seesaw</text>
<text x="20" y="135" font-size="17" font-weight="bold" fill="#0f172a">2nd class: L in the middle</text>
<rect x="60" y="167" width="320" height="10" fill="#92400e"/>
<polygon points="60,177 45,205 75,205" fill="#475569"/>
<rect x="160" y="135" width="34" height="32" fill="#64748b"/><text x="166" y="157" font-size="15" fill="#fff">L</text>
<line x1="370" y1="200" x2="370" y2="182" stroke="#16a34a" stroke-width="5"/><polygon points="362,186 370,174 378,186" fill="#16a34a"/>
<text x="384" y="200" font-size="15" fill="#166534">E</text>
<text x="420" y="175" font-size="15" fill="#0f172a">🛒 wheelbarrow, nutcracker</text>
<text x="20" y="240" font-size="17" font-weight="bold" fill="#0f172a">3rd class: E in the middle</text>
<rect x="60" y="272" width="320" height="10" fill="#92400e"/>
<polygon points="60,282 45,310 75,310" fill="#475569"/>
<rect x="346" y="240" width="34" height="32" fill="#64748b"/><text x="352" y="262" font-size="15" fill="#fff">L</text>
<line x1="150" y1="315" x2="150" y2="287" stroke="#16a34a" stroke-width="5"/><polygon points="142,291 150,279 158,291" fill="#16a34a"/>
<text x="164" y="315" font-size="15" fill="#166534">E</text>
<text x="420" y="280" font-size="15" fill="#0f172a">💪 forearm, tweezers</text>
</svg>`,
      caption: "To recognise the class look at what is in the middle: fulcrum (1st), load (2nd) or effort (3rd)."
    },
    {
      type: "example",
      title: "Worked example: the seesaw",
      html: `<p>Mark weighs <b>400 N</b> and sits <b>1.5 m</b> from the fulcrum. His little sister weighs <b>200 N</b>. How far away must she sit to balance?</p>
<p>E · b<sub>E</sub> = L · b<sub>L</sub> → 200 · x = 400 · 1.5 → 200 · x = 600 → <b>x = 3 m</b>.</p>
<p>Whoever weighs half must sit at twice the distance: force and arm are <b>inversely proportional</b>.</p>`
    },
    {
      type: "example",
      title: "Worked example: braking distance",
      html: `<p>A car travels at <b>90 km/h</b> = 90 : 3.6 = <b>25 m/s</b>. The driver sees an obstacle and takes about <b>1 second</b> to react (reaction time): in that second the car still covers 25 m without braking!</p>
<p>If the driver looks at the phone for 3 seconds, the car covers 25 × 3 = <b>75 m "blind"</b>: almost a football pitch. Then, with brakes that give a deceleration of about 7 m/s², it takes about another 45 m to stop. That is why a safe distance and paying attention save lives.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand forces and motion",
      intro: "Formulas not enough? Try an analogy, a home experiment or 3D.",
      tabs: [
        {
          label: "🛒 The trolley analogy",
          html: `<p>Think of the <b>supermarket trolley</b>:</p>
<ul>
<li>Empty, a small push gets it going at once: <b>little mass → large acceleration</b>.</li>
<li>Full of bottles, you have to push much harder to get it going just as quickly: <b>more mass → more force needed</b>. This is F = m · a.</li>
<li>Once launched, if you let go it keeps going by itself for a while (<b>inertia</b>) until the friction of the wheels stops it.</li>
<li>To turn it you have to push it sideways: changing direction also needs a force.</li>
</ul>`
        },
        {
          label: "🧪 Galileo's experiment at home",
          html: `<p>Galileo wanted to understand how bodies fall, but falling is too fast to measure. So he "slowed it down" with an <b>inclined plane</b>.</p>
<ol>
<li>Rest a board or a big book at a slope on a pile of books.</li>
<li>Roll a marble and mark with tape where it is after 1, 2, 3 "ticks" of a metronome (or clapping to a rhythm).</li>
<li>You will find that the distances travelled grow like <b>1, 4, 9…</b>, that is like the squares of the times: the marble <b>accelerates</b> steadily.</li>
</ol>
<p>Galileo used as a clock a bucket of dripping water: he weighed the water that ran out to measure the time!</p>`
        },
        {
          label: "🇯🇵 The magic triangle (a method used in Asia)",
          html: `<p>In many Asian and English-speaking schools a <b>triangle</b> is used to remember the inverse formulas: cover with your finger the quantity you are looking for and read the other two.</p>
<ul>
<li>cover <b>s</b> → v · t is left (they are side by side: you multiply);</li>
<li>cover <b>v</b> → s / t is left (one above the other: you divide);</li>
<li>cover <b>t</b> → s / v is left.</li>
</ul>
<p>It works for F = m · a too: F on top, m and a below.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<polygon points="150,20 40,230 260,230" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/>
<line x1="85" y1="140" x2="215" y2="140" stroke="#15803d" stroke-width="4"/>
<line x1="150" y1="140" x2="150" y2="230" stroke="#15803d" stroke-width="4"/>
<text x="150" y="115" font-size="38" text-anchor="middle" fill="#14532d" font-weight="bold">s</text>
<text x="108" y="200" font-size="34" text-anchor="middle" fill="#14532d" font-weight="bold">v</text>
<text x="192" y="200" font-size="34" text-anchor="middle" fill="#14532d" font-weight="bold">t</text>
<polygon points="450,20 340,230 560,230" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<line x1="385" y1="140" x2="515" y2="140" stroke="#b45309" stroke-width="4"/>
<line x1="450" y1="140" x2="450" y2="230" stroke="#b45309" stroke-width="4"/>
<text x="450" y="115" font-size="38" text-anchor="middle" fill="#78350f" font-weight="bold">F</text>
<text x="408" y="200" font-size="34" text-anchor="middle" fill="#78350f" font-weight="bold">m</text>
<text x="492" y="200" font-size="34" text-anchor="middle" fill="#78350f" font-weight="bold">a</text>
</svg>`
        },
        {
          label: "🪐 Gravity in 3D",
          html: `<p>Newton realised that the force that makes an apple fall is the <b>same</b> one that keeps the Moon around the Earth and the planets around the Sun: <b>universal gravitation</b>. The planets keep "falling" towards the Sun, but they also have a sideways speed: so instead of crashing in they go round in orbit. The closer a planet is to the Sun, the stronger the force and the faster its orbit. Watch it in the model.</p>`,
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "widget",
      title: "Recognise the class of the lever",
      widget: "classify",
      options: {
        groups: ["1st class (fulcrum in the middle)", "2nd class (load in the middle)", "3rd class (effort in the middle)"],
        items: [
          ["✂️ Scissors", 0],
          ["🎢 Seesaw", 0],
          ["🔧 Crowbar", 0],
          ["🛒 Wheelbarrow", 1],
          ["🌰 Nutcracker", 1],
          ["🍾 Bottle opener", 1],
          ["🪡 Tweezers", 2],
          ["🎣 Fishing rod", 2],
          ["💪 Forearm lifting a weight", 2]
        ]
      },
      caption: "Find the fulcrum, the point where you push (effort) and the thing to overcome (load)."
    },
    {
      type: "curiosity",
      title: "Did you know…? \"Give me a place to stand…\"",
      html: `<p>The Greek scientist <b>Archimedes</b> of Syracuse (about 287–212 BC) was the first to study the law of levers mathematically. According to tradition he said: <i>"Give me a place to stand and I will move the world"</i>. In theory he was right: with a long enough arm any force is enough… but to lift the Earth by 1 cm he would have had to move the end of the lever through an enormous distance, far greater than the visible Universe!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The hammer and the feather on the Moon",
      html: `<p>In <b>1971</b>, during the <b>Apollo 15</b> mission, the astronaut <b>David Scott</b> dropped a hammer and a falcon feather on the Moon at the same moment. With no air to slow it down, the feather hit the ground <b>together</b> with the hammer: just as Galileo had predicted more than 300 years earlier. On the Moon g is about 1.6 m/s², about 1/6 of the Earth's.</p>`
    },
    {
      type: "widget",
      title: "Timeline: who understood motion",
      widget: "timeline",
      options: {
        unit: "years",
        events: [
          { year: -340, label: "Aristotle: \"heavy bodies fall faster\" (wrong!)", icon: "🏛️" },
          { year: -250, label: "Archimedes: the law of the lever", icon: "⚖️" },
          { year: 1638, label: "Galileo: falling bodies and inertia", icon: "🔭" },
          { year: 1687, label: "Newton: the three laws and gravitation", icon: "🍎" },
          { year: 1905, label: "Einstein: special relativity", icon: "⚡" },
          { year: 1971, label: "Hammer and feather on the Moon", icon: "🌕" }
        ]
      },
      caption: "For almost 2000 years people believed Aristotle: it was experiments that corrected the mistake."
    },
    {
      type: "conceptMap",
      title: "Map of forces and motion: tap the nodes and find out why",
      nodes: [
        { id: "rif", label: "Frame of reference", x: 15, y: 8, color: "#64748b", html: "What we measure motion against.", why: "Galileo, in the Dialogue (1632), imagined a ship sailing smoothly: someone below deck cannot tell with any experiment whether the ship is moving. From this comes the idea that motion is relative, the basis of Einstein's relativity." },
        { id: "vel", label: "Speed v = s/t", x: 40, y: 22, color: "#2563eb", html: "Distance covered in a unit of time (m/s, km/h).", why: "We need a way to compare different motions: dividing distance by time gives how much is covered in 1 second. With precise clocks (the pendulum, studied by Galileo and built by Huygens in 1656) speed could be measured well." },
        { id: "acc", label: "Acceleration", x: 65, y: 22, color: "#7c3aed", html: "Change in speed over time (m/s²).", why: "Galileo discovered that in a fall the speed always increases by the same amount every second: a constant acceleration. To measure it he used inclined planes and water clocks." },
        { id: "forza", label: "Force (newton)", x: 50, y: 48, color: "#dc2626", html: "An action that changes motion or deforms a body; measured in N.", why: "The unit carries the name of Isaac Newton. 1 N is the force that gives 1 kg an acceleration of 1 m/s². Before Newton people thought (with Aristotle) that a force was needed even just to keep a body moving." },
        { id: "n1", label: "1st law: inertia", x: 18, y: 50, color: "#0891b2", html: "Without forces a body stays still or moves in uniform rectilinear motion.", why: "Galileo noticed that a ball on a smooth plane slows down less the less friction there is: he imagined that without friction it would go on forever. Newton turned this insight into the first law (1687)." },
        { id: "n2", label: "2nd law: F = m·a", x: 82, y: 50, color: "#ea580c", html: "Force equals mass times acceleration.", why: "It links causes (forces) to effects (accelerations). Mass measures inertia: how much a body \"resists\" changing speed." },
        { id: "n3", label: "3rd law: action and reaction", x: 82, y: 78, color: "#16a34a", html: "Forces always come in pairs, equal and opposite.", why: "Newton deduced it by observing collisions between bodies: nobody can push without being pushed. It is the law on which rockets, swimmers and even our walking work." },
        { id: "peso", label: "Weight and gravity", x: 50, y: 78, color: "#a16207", html: "W = m · g, with g ≈ 9.8 m/s² on Earth.", why: "Newton realised that the force that makes bodies fall is the same one that keeps the Moon in orbit: universal gravitation. Weight depends on the planet, mass does not." },
        { id: "leva", label: "Levers", x: 18, y: 85, color: "#92400e", html: "Simple machines: E · bE = L · bL.", why: "Archimedes (3rd century BC) proved the law starting from symmetry: equal weights at equal distances balance. A lever does not create energy: you save force but must move the effort over a longer distance." }
      ],
      edges: [
        ["rif", "vel", "is measured relative to"],
        ["vel", "acc", "if it changes there is"],
        ["forza", "acc", "produces"],
        ["n1", "forza", "without"],
        ["forza", "n2", ""],
        ["forza", "n3", ""],
        ["forza", "peso", "example:"],
        ["forza", "leva", "multiplied by"],
        ["n2", "acc", "calculates"]
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li><b>v = s / t</b> (m/s); km/h ÷ 3.6 = m/s.</li>
<li><b>a = Δv / t</b> (m/s²); in free fall g ≈ 9.8 m/s².</li>
<li><b>Force</b>: a vector, measured in newtons with the spring balance. Weight W = m · g.</li>
<li>Newton: <b>inertia</b>, <b>F = m · a</b>, <b>action and reaction</b>.</li>
<li><b>Levers</b>: E · b<sub>E</sub> = L · b<sub>L</sub>; 1st class fulcrum in the middle, 2nd class load in the middle, 3rd class effort in the middle.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: forces and levers",
      questions: [
        { type: "num", q: "What force is needed to give a 20 kg trolley an acceleration of 1.5 m/s²?", answer: 30, unit: "N", explain: "F = m · a = 20 × 1.5 = 30 N." },
        { type: "mc", q: "The wheelbarrow is a lever of…", options: ["1st class", "2nd class", "3rd class"], answer: 1, explain: "The fulcrum is the wheel, the load is in the middle, the effort at the handles." },
        { type: "num", q: "A lever has bE = 2 m and bL = 0.5 m. With what effort do I lift L = 800 N?", answer: 200, unit: "N", explain: "E · 2 = 800 · 0.5 = 400 → E = 200 N." }
      ]
    }
  ],
  glossary: [
    { t: "Frame of reference", d: "A body or point considered still against which a motion is described." },
    { t: "Trajectory", d: "The line travelled by a moving body." },
    { t: "Speed", d: "The ratio between distance travelled and time taken (m/s)." },
    { t: "Acceleration", d: "The ratio between change in speed and time (m/s²)." },
    { t: "Force", d: "An action that changes the motion or shape of a body; measured in newtons (N)." },
    { t: "Spring balance", d: "A spring instrument for measuring forces." },
    { t: "Mass", d: "The amount of matter in a body (kg); it measures its inertia." },
    { t: "Weight", d: "The force with which a planet attracts a body: W = m · g." },
    { t: "Inertia", d: "The tendency of a body to keep its state of rest or uniform motion." },
    { t: "Friction", d: "A force that opposes sliding between two surfaces." },
    { t: "Fulcrum", d: "The fixed point around which a lever turns." },
    { t: "Arm", d: "The distance between the fulcrum and the point where a force acts." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "A train travels 360 km in 2 hours. What is its average speed in km/h?", answer: 180, unit: "km/h", explain: "v = 360 / 2 = 180 km/h." },
      { type: "num", q: "Convert 72 km/h into m/s.", answer: 20, unit: "m/s", explain: "72 : 3.6 = 20 m/s." },
      { type: "num", q: "A runner starts from rest and in 4 s reaches 8 m/s. What is the average acceleration?", answer: 2, unit: "m/s²", explain: "a = (8 − 0) / 4 = 2 m/s²." },
      { type: "mc", q: "What does a spring balance measure?", options: ["Mass", "Speed", "Forces", "Time"], answer: 2, explain: "The spring balance measures forces in newtons." },
      { type: "tf", q: "On the Moon an astronaut's mass is 6 times smaller than on Earth.", answer: false, explain: "Mass does not change; it is the weight that is about 6 times smaller." },
      { type: "mc", q: "When a bus brakes suddenly the passengers are thrown forward. Which law explains it?", options: ["Law of inertia", "Action and reaction", "Law of levers"], answer: 0, explain: "The body tends to keep the speed it had: it is inertia (1st law)." },
      { type: "mc", q: "A rocket rises because…", options: ["the air pushes it upwards", "it pushes the gases downwards and the gases push it upwards", "it is lighter than air"], answer: 1, explain: "It is the third law: action and reaction. It works in a vacuum too." },
      { type: "num", q: "What is the weight on Earth (g = 10 m/s², rounded) of a 6 kg backpack?", answer: 60, unit: "N", explain: "W = m · g = 6 × 10 = 60 N." },
      { type: "mc", q: "In which lever is the effort between the fulcrum and the load?", options: ["1st class", "2nd class", "3rd class"], answer: 2, explain: "In a 3rd class lever (tweezers, forearm) the effort is in the middle: it is always disadvantageous." },
      { type: "num", q: "On a seesaw a child of 300 N sits 2 m from the fulcrum. How many metres from it must an adult of 600 N sit to balance?", answer: 1, unit: "m", explain: "600 · x = 300 · 2 = 600 → x = 1 m." },
      { type: "text", q: "Which scientist published the three laws of motion in 1687?", answer: ["newton", "isaac newton", "sir isaac newton"], explain: "Isaac Newton, in the Principia." },
      { type: "order", q: "Put these scientists in chronological order.", items: ["Aristotle", "Archimedes", "Galileo Galilei", "Isaac Newton", "Albert Einstein"], explain: "4th century BC, 3rd century BC, 1564–1642, 1643–1727, 1879–1955." }
    ],
    gen: [["proportion", 2]]
  }
});
