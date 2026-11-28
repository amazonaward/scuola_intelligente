TOPIC('en', {
  id: "l2-fis-moto-accelerato",
  title: "Uniformly accelerated motion",
  intro: "A traffic light turns green and the car pulls away: its velocity is not constant, it <b>increases</b>. A stone dropped from a bridge goes faster at every instant. When velocity changes, a new quantity comes into play: <b>acceleration</b>. The simplest and most important case is <b>uniformly accelerated motion</b>, in which velocity changes at a constant rate over time. It is the motion of <b>free fall</b>, which Galileo studied with the inclined plane and which changed the way physics is done forever.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Acceleration: when velocity changes",
      html: `<p>In the previous lesson velocity was constant. Now we let it change. <b>Average acceleration</b> is the ratio between the change in velocity and the time interval:</p>
<p style="text-align:center"><b>a<sub>m</sub> = Δv / Δt = (v₂ − v₁) / (t₂ − t₁)</b></p>
<p>The unit is the <b>metre per second squared (m/s²)</b>: "m/s every second". An acceleration of 3 m/s² means that every second the velocity increases by 3 m/s.</p>
<p>In linear motion acceleration has a <b>sign</b>, and it must be interpreted together with the velocity:</p>
<ul>
<li><b>a and v with the same sign</b>: the body <b>speeds up</b> (the magnitude of the velocity increases).</li>
<li><b>a and v with opposite signs</b>: the body <b>slows down</b>, decelerates (brakes).</li>
<li>a = 0: constant velocity (uniform motion).</li>
</ul>
<p>Careful: <b>"braking" is not "having negative acceleration" in an absolute sense</b>: if a car is reversing (v &lt; 0) and speeds up, a is negative too, but the magnitude of the velocity grows. What matters is how the signs compare.</p>
<p>We speak of <b>uniformly accelerated</b> motion when the acceleration is <b>constant</b>. It is a model, but a good one for many situations: free fall, braking with constant force on the brakes, a rocket launch over a short stretch.</p>`
    },
    {
      type: "example",
      title: "Examples: orders of magnitude of acceleration",
      html: `<p><b>A sports car</b> goes from 0 to 100 km/h in 8 s. 100 km/h ≈ 27.8 m/s: a = 27.8 / 8 ≈ <b>3.5 m/s²</b>. A small city car, in 14 s, has a ≈ 2 m/s²; a very powerful electric car, in 2.5 s, has a ≈ 11 m/s² (more than gravity).</p>
<p><b>Braking</b>: a car at 72 km/h (20 m/s) stops in 4 s: a = (0 − 20) / 4 = <b>−5 m/s²</b> (negative, because the velocity is positive and decreasing).</p>
<p><b>A falling object</b>: its velocity increases by about 9.8 m/s every second. After 1 s it is moving at 9.8 m/s (35 km/h), after 2 s at 19.6 m/s (70 km/h), after 3 s at 29.4 m/s (106 km/h): in the absence of air.</p>
<p><b>Record accelerations</b>: a Formula 1 car goes from 0 to 100 km/h in about 2.5 s. In tight corners and under braking, drivers experience accelerations of more than 4–5 times gravity.</p>`
    },
    {
      type: "remember",
      title: "The laws of uniformly accelerated motion",
      html: `<p>If the acceleration <b>a</b> is constant, with initial velocity <b>v₀</b> and initial position <b>s₀</b> at time t = 0:</p>
<ul>
<li><b>Velocity law</b>: <b>v = v₀ + a · t</b></li>
<li><b>Equation of motion</b>: <b>s = s₀ + v₀ · t + ½ · a · t²</b></li>
<li><b>Without time</b>: <b>v² = v₀² + 2 · a · (s − s₀)</b></li>
</ul>
<p>If the body starts from rest (v₀ = 0) and from the origin (s₀ = 0): v = a t, s = ½ a t², v² = 2 a s. You can also derive the relation <b>s = (v₀ + v)/2 · t</b>: the distance is the <i>average</i> velocity (the arithmetic mean of v₀ and v) times the time. Note: over time the position grows like <b>t²</b>: no longer a straight line, but a <b>parabola</b>.</p>`
    },
    {
      type: "svg",
      title: "The velocity-time graph: a sloping line",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,250 460,250 460,50" fill="#bbf7d0" stroke="none"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">v (m/s)</text>
<line x1="60" y1="250" x2="460" y2="50" stroke="#166534" stroke-width="5"/>
<line x1="460" y1="250" x2="460" y2="50" stroke="#6b7280" stroke-width="2" stroke-dasharray="6 5"/>
<text x="456" y="274" font-size="16" fill="#1f2937" font-weight="bold">5</text>
<text x="26" y="56" font-size="16" fill="#1f2937" font-weight="bold">20</text>
<text x="120" y="228" font-size="16" fill="#14532d" font-weight="bold">Area = ½ · 5 · 20 = 50 m</text>
<text x="290" y="130" font-size="16" fill="#166534" font-weight="bold">slope = a = 4 m/s²</text>
<text x="290" y="154" font-size="16" fill="#1f2937">(starts from rest)</text>
</svg>`,
      caption: "The slope of the v-t line is the acceleration; the area under the line is the distance travelled. Here: from rest, a = 4 m/s² for 5 s ⇒ final v 20 m/s and distance 50 m."
    },
    {
      type: "svg",
      title: "The position-time graph: a parabola",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">s (m)</text>
<polyline points="60,250 100,248 140,242 180,232 220,218 260,200 300,178 340,152 380,122 420,88 460,50" fill="none" stroke="#7c3aed" stroke-width="5"/>
<circle cx="140" cy="242" r="5" fill="#7c3aed"/><circle cx="220" cy="218" r="5" fill="#7c3aed"/><circle cx="300" cy="178" r="5" fill="#7c3aed"/><circle cx="380" cy="122" r="5" fill="#7c3aed"/><circle cx="460" cy="50" r="5" fill="#7c3aed"/>
<text x="340" y="212" font-size="16" fill="#6d28d9" font-weight="bold">s = ½ a t² = 2 t²</text>
<text x="340" y="236" font-size="16" fill="#1f2937">(a = 4 m/s², from rest)</text>
<text x="76" y="140" font-size="16" fill="#1f2937">The curve gets</text>
<text x="76" y="162" font-size="16" fill="#1f2937">steeper and steeper:</text>
<text x="76" y="184" font-size="16" fill="#1f2937">velocity is growing</text>
</svg>`,
      caption: "In uniformly accelerated motion from rest, distance grows like t²: 2 m in 1 s, 8 m in 2 s, 18 m in 3 s, 32 m in 4 s, 50 m in 5 s."
    },
    {
      type: "quiz",
      title: "Mini-quiz: velocity and acceleration",
      questions: [
        { type: "num", q: "A moped starts from rest and after 5 s has a velocity of 10 m/s. What is its average acceleration?", answer: 2, unit: "m/s²", explain: "a = Δv / Δt = 10 / 5 = 2 m/s²." },
        { type: "num", q: "A body with a = 3 m/s² starts from rest. What is its velocity after 6 s?", answer: 18, unit: "m/s", explain: "v = a t = 3 · 6 = 18 m/s." },
        { type: "num", q: "A car starts from rest with a = 2 m/s². How many metres does it cover in 10 s?", answer: 100, unit: "m", explain: "s = ½ a t² = ½ · 2 · 100 = 100 m." },
        { type: "tf", q: "In the velocity-time graph, the area under the graph represents the distance travelled.", answer: true, explain: "The area is the sum of all the v·Δt: the total displacement." }
      ]
    },
    {
      type: "text",
      title: "Braking and stopping distance",
      html: `<p>A key application of the third formula. A car has initial velocity v₀ and brakes with a constant deceleration of magnitude <b>a</b> (acceleration −a) until it stops (v = 0):</p>
<ul>
<li><b>Stopping time</b>: 0 = v₀ − a t, so <b>t = v₀ / a</b>.</li>
<li><b>Braking distance</b>: 0 = v₀² − 2 a s, so <b>s = v₀² / (2 a)</b>.</li>
</ul>
<p><b>Braking distance grows with the square of the speed</b>! If the speed doubles, the distance <b>quadruples</b>; if it triples, it becomes 9 times as long. With a = 5 m/s²:</p>
<table>
<tr><th>Speed</th><th>v₀ (m/s)</th><th>Braking distance</th></tr>
<tr><td>30 km/h</td><td>8.3</td><td>≈ 7 m</td></tr>
<tr><td>50 km/h</td><td>13.9</td><td>≈ 19 m</td></tr>
<tr><td>90 km/h</td><td>25</td><td>= 62.5 m</td></tr>
<tr><td>130 km/h</td><td>36.1</td><td>≈ 130 m</td></tr>
</table>
<p>On top of this comes the distance covered during the <b>reaction time</b> (about 1 s, at constant speed): at 130 km/h that is another 36 m. In total, <b>stopping distance ≈ 166 m</b>. That is why speed limits are stricter where there are pedestrians: a pedestrian hit at 30 km/h has a good chance of surviving; at 50 km/h much less so.</p>`
    },
    {
      type: "example",
      title: "Example: a complete problem",
      html: `<p><b>Problem</b>: a train travelling at 54 km/h brakes with a constant deceleration of 0.5 m/s². How long does it take to stop and how far does it travel?</p>
<ol>
<li>Conversion: 54 km/h = 54 / 3.6 = 15 m/s.</li>
<li>Time: t = v₀ / a = 15 / 0.5 = <b>30 s</b>.</li>
<li>Distance: s = v₀² / (2 a) = 225 / 1 = <b>225 m</b> (or s = v₀ t / 2 = 15 · 30 / 2 = 225 m: average velocity 7.5 m/s for 30 s).</li>
</ol>
<p><b>Another one</b>: a car starts from rest and accelerates at 3 m/s² up to 30 m/s (108 km/h). How much road does it need? s = v² / (2a) = 900 / 6 = <b>150 m</b>, in t = v / a = 10 s.</p>`
    },
    {
      type: "text",
      title: "Free fall",
      html: `<p>In a <b>vacuum</b>, every body that is dropped moves with the <b>same acceleration</b>, regardless of mass, shape and material: the <b>acceleration due to gravity</b> <b>g ≈ 9.8 m/s²</b> (standard value 9.80665; on Earth it varies slightly, from ≈ 9.78 at the equator to ≈ 9.83 at the poles). In problems 9.8 or 10 m/s² is often used for simplicity.</p>
<p><b>Free fall</b> is uniformly accelerated motion with a = g. Starting from rest at height h:</p>
<ul>
<li>Velocity after t: <b>v = g t</b></li>
<li>Distance fallen: <b>s = ½ g t²</b></li>
<li>Time to fall from height h: <b>t = √(2h / g)</b></li>
<li>Impact velocity: <b>v = √(2 g h)</b></li>
</ul>
<p><b>Example</b>: a diver jumps from 10 m. t = √(2 · 10 / 9.8) ≈ 1.43 s and v = 9.8 · 1.43 ≈ 14 m/s = <b>50 km/h</b> when hitting the water.</p>
<p><b>Throwing upwards</b>: you throw a ball upwards at 19.6 m/s. The motion is uniformly accelerated with a = −g (gravity slows the rise): the velocity decreases by 9.8 m/s every second, becomes zero after <b>2 s</b> (highest point, h = v₀² / 2g = 19.6 m) and then the ball falls back, passing your hand again after 4 s with the opposite velocity (−19.6 m/s). The way up and the way down are symmetrical.</p>
<p>In reality, <b>air</b> slows the fall with a resistance that grows with speed: a skydiver falling with arms spread stops accelerating at about 55 m/s (200 km/h): they have reached <b>terminal velocity</b>. A feather falls slowly for the same reason.</p>`
    },
    {
      type: "svg",
      title: "Galileo's odd-number rule",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="560" y2="150" stroke="#9ca3af" stroke-width="3"/>
<circle cx="60" cy="150" r="9" fill="#dc2626"/>
<circle cx="85" cy="150" r="9" fill="#ea580c"/>
<circle cx="160" cy="150" r="9" fill="#ca8a04"/>
<circle cx="285" cy="150" r="9" fill="#16a34a"/>
<circle cx="460" cy="150" r="9" fill="#2563eb"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="60" y="124">t = 0</text><text x="85" y="104">1 s</text><text x="160" y="124">2 s</text><text x="285" y="124">3 s</text><text x="460" y="124">4 s</text>
</g>
<g font-size="16" text-anchor="middle" fill="#1f2937">
<text x="85" y="186">1</text><text x="160" y="186">4</text><text x="285" y="186">9</text><text x="460" y="186">16</text>
<text x="122" y="226" fill="#b45309" font-weight="bold">3</text><text x="222" y="226" fill="#b45309" font-weight="bold">5</text><text x="372" y="226" fill="#b45309" font-weight="bold">7</text>
<text x="72" y="226" fill="#b45309" font-weight="bold">1</text>
</g>
<text x="40" y="262" font-size="16" fill="#1f2937">Total distances: 1, 4, 9, 16 (squares). Distance in each second: 1, 3, 5, 7 (odd).</text>
<text x="40" y="30" font-size="16" fill="#1f2937">A ball leaves the origin from rest and accelerates: each second it covers more ground.</text>
</svg>`,
      caption: "Galileo discovered that, in equal times, the distances covered are in the ratio of the odd numbers 1 : 3 : 5 : 7…, and so the total distances are in the ratio of the squares of the times."
    },
    {
      type: "curiosity",
      title: "Did you know…? Galileo versus Aristotle",
      html: `<p>For almost 2000 years people believed <b>Aristotle</b>: heavy bodies fall faster than light ones. <b>Galileo Galilei</b> realised that this was not so: in a vacuum they fall together. Since free fall was too fast to be measured with 17th-century instruments, he used an <b>inclined plane</b> to "slow down" the fall (with a gentle slope the ball rolls down slowly) and measured the times with a water clock. He found that distances grow as the square of the times. He published the results in the <i>Discourses and Mathematical Demonstrations Relating to Two New Sciences</i> (1638). The legend of the experiment from the Leaning Tower of Pisa comes from his pupil Vincenzo Viviani: there is no evidence that Galileo actually performed it.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The hammer and the feather on the Moon",
      html: `<p>On 2 August 1971, during the <b>Apollo 15</b> mission, astronaut <b>David Scott</b> dropped a hammer and a falcon feather on the Moon, in front of the cameras. There is no air on the Moon, and the acceleration due to gravity there is about 1.62 m/s² (one sixth of Earth's): the two objects hit the ground together. Scott said: "Mr Galileo was correct". Try it: if you are 1.7 m tall, an object falling from your hands takes 0.59 s on Earth but a full 1.45 s on the Moon.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand accelerated motion",
      intro: "Acceleration is an everyday sensation: you feel it in your stomach when the car pulls away. Here are other ways of seeing it.",
      tabs: [
        {
          label: "🎢 What your body feels",
          html: `<p>You can <b>feel</b> acceleration: when the car pulls away you feel pushed back into the seat; when it brakes, forwards; in a lift going up you feel heavier as it starts and lighter as it stops. You do not feel velocity (on a plane at 900 km/h you are quite calm), but you <b>feel</b> its changes. That is why acceleration is also measured in "g": an acceleration of 1 g is 9.8 m/s², the one you feel when standing still on Earth. Astronauts at lift-off experience about 3 g; a fighter jet pilot up to 9 g.</p>`
        },
        {
          label: "📋 Table of a fall",
          html: `<p>With g ≈ 9.8 m/s² (you could round it to 10 to read the numbers more easily), starting from rest:</p>
<table><tr><th>t (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>v (m/s)</th><td>0</td><td>9.8</td><td>19.6</td><td>29.4</td><td>39.2</td></tr><tr><th>s (m)</th><td>0</td><td>4.9</td><td>19.6</td><td>44.1</td><td>78.4</td></tr></table>
<p>Notice: the velocity increases by 9.8 every second (a straight line on the v-t graph); the distance grows much faster: 4.9 → 19.6 → 44.1 → 78.4, i.e. 1 : 4 : 9 : 16.</p>`
        },
        {
          label: "🧮 The area of the triangle",
          html: `<p>A geometric way to remember s = ½ a t²: on the v-t graph, starting from rest, the velocity forms a straight line. The distance travelled is the <b>area of the triangle</b> under the line: base t, height v = a t, so area = ½ · t · a t = <b>½ a t²</b>. If you start with an initial velocity v₀, the area of the rectangle v₀ · t underneath is added to that of the triangle: s = v₀ t + ½ a t². Nothing to learn by heart: you just need to be able to work out an area!</p>`
        }
      ]
    },
    {
      type: "widget",
      title: "Speeding up, slowing down or constant velocity?",
      widget: "classify",
      options: { groups: ["Speeds up (|v| increases)", "Slows down (|v| decreases)", "Constant velocity"], items: [
        ["v = +10 m/s and a = +2 m/s²", 0],
        ["v = +10 m/s and a = −2 m/s²", 1],
        ["v = −10 m/s and a = −2 m/s²", 0],
        ["v = −10 m/s and a = +2 m/s²", 1],
        ["v = +30 m/s and a = 0", 2],
        ["A stone in free fall (no air)", 0],
        ["A car braking at a red light", 1]
      ] },
      caption: "Rule: if v and a have the same sign the body speeds up; if they have opposite signs it slows down."
    },
    {
      type: "conceptMap",
      title: "Map: uniformly accelerated motion",
      nodes: [
        { id: "acc", label: "Acceleration", x: 50, y: 6, color: "#6366f1", html: "a = Δv / Δt, in m/s².", why: "It measures how quickly velocity changes. Introduced in the 17th century by Galileo, who was the first to distinguish velocity from its change: an idea that escaped the intuition of the Greeks." },
        { id: "mua", label: "Uniformly accelerated motion", x: 50, y: 32, color: "#a855f7", html: "Constant acceleration: v linear in t, s quadratic in t.", why: "It is the simplest motion after uniform motion: a 'constant change of velocity'. Newton would show that a constant force gives exactly a constant acceleration." },
        { id: "vt", label: "v-t graph", x: 18, y: 56, color: "#16a34a", html: "Sloping line: slope = a, area = distance.", why: "Distance is the area because each small interval contributes v·Δt: adding up the areas of the rectangles is the idea behind the integral." },
        { id: "st", label: "s-t graph", x: 82, y: 56, color: "#ef4444", html: "Parabola: s = s₀ + v₀t + ½at².", why: "Velocity increases, so the slope of the curve grows: an ever steeper curve, a parabola. Galileo found 1 : 3 : 5 : 7." },
        { id: "cad", label: "Free fall", x: 82, y: 82, color: "#0ea5e9", html: "a = g ≈ 9.8 m/s², independent of mass.", why: "In a vacuum all bodies fall together (Galileo): a heavier body is attracted more strongly, but it also has more inertia, and the two effects cancel out. Newton would explain it with F = ma and gravitation." },
        { id: "fre", label: "Braking and stopping distance", x: 18, y: 82, color: "#f59e0b", html: "s = v₀² / (2a): grows with the square of v₀.", why: "It follows from v² = v₀² + 2as. It is the scientific reason behind speed limits and safe following distances." },
        { id: "uni", label: "From uniform motion", x: 50, y: 94, color: "#14b8a6", html: "With a = 0 the formulas go back to s = s₀ + v t.", why: "Uniform motion is the special case a = 0: every formula of accelerated motion contains it." }
      ],
      edges: [
        ["acc", "mua", "if constant gives"],
        ["mua", "vt", "read in"],
        ["mua", "st", "read in"],
        ["mua", "cad", "case g"],
        ["mua", "fre", "case a < 0"],
        ["mua", "uni", "generalises"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: falling and braking",
      questions: [
        { type: "num", q: "A stone falls from rest for 3 s (g = 10 m/s², no air). How many metres has it fallen?", answer: 45, unit: "m", explain: "s = ½ g t² = 5 · 9 = 45 m." },
        { type: "num", q: "A car at 20 m/s brakes with a deceleration of 5 m/s². How many metres does it travel before stopping?", answer: 40, unit: "m", explain: "s = v₀² / (2a) = 400 / 10 = 40 m." },
        { type: "mc", q: "If the initial speed when braking doubles, the stopping distance…", options: ["Doubles", "Quadruples", "Stays the same"], answer: 1, explain: "s = v₀² / (2a): squaring the speed makes the distance four times as long." },
        { type: "tf", q: "In a vacuum, a feather and a hammer dropped together reach the ground at the same instant.", answer: true, explain: "Without air, the acceleration of fall is the same for all bodies." }
      ]
    }
  ],
  glossary: [
    { t: "Acceleration", d: "Change in velocity per unit time: a = Δv/Δt, in m/s²." },
    { t: "Uniformly accelerated motion", d: "Linear motion with constant acceleration." },
    { t: "Deceleration", d: "Acceleration that reduces the magnitude of the velocity (opposite sign to v)." },
    { t: "Free fall", d: "Motion of a body acted on only by gravity: a = g ≈ 9.8 m/s²." },
    { t: "Acceleration due to gravity", d: "The acceleration g of a body in free fall; on Earth ≈ 9.8 m/s²." },
    { t: "Braking distance", d: "Distance covered by a braking body until it stops: s = v₀²/(2a)." },
    { t: "Terminal velocity", d: "Constant velocity reached when air resistance balances the force of gravity." },
    { t: "Parabola", d: "The curve of the s-t graph of uniformly accelerated motion: s grows like t²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "The SI unit of acceleration is…", options: ["m/s", "m/s²", "m²/s"], answer: 1, explain: "m/s², i.e. metres per second every second." },
      { type: "num", q: "A motorbike goes from 0 to 27 m/s in 9 s. What is its average acceleration?", answer: 3, unit: "m/s²", explain: "27 / 9 = 3 m/s²." },
      { type: "num", q: "A body starts with v₀ = 4 m/s and a = 2 m/s². What is its velocity after 5 s?", answer: 14, unit: "m/s", explain: "v = 4 + 2 · 5 = 14 m/s." },
      { type: "num", q: "A car starts from rest with a = 4 m/s². How many metres does it cover in 5 s?", answer: 50, unit: "m", explain: "s = ½ · 4 · 25 = 50 m." },
      { type: "tf", q: "The position-time graph of uniformly accelerated motion is a straight line.", answer: false, explain: "It is a parabola: s depends on the square of time." },
      { type: "num", q: "From what height must an object fall to hit the ground after 2 s? (g = 9.8 m/s²)", answer: 19.6, tol: 0.1, unit: "m", explain: "h = ½ · 9.8 · 4 = 19.6 m." },
      { type: "num", q: "A train at 30 m/s brakes with a = −1.5 m/s². After how many seconds does it stop?", answer: 20, unit: "s", explain: "t = v₀ / a = 30 / 1.5 = 20 s." },
      { type: "mc", q: "A ball is thrown upwards. At the highest point…", options: ["Velocity is zero, acceleration is −g", "Velocity and acceleration are both zero", "Acceleration is zero and velocity is at its maximum"], answer: 0, explain: "The velocity is zero for an instant, but gravity keeps acting: a = −g." },
      { type: "text", q: "What is the name of the scientist who studied falling bodies with the inclined plane in the 17th century?", answer: ["galileo", "galileo galilei", "galilei"], explain: "Galileo Galilei, in the Discourses (1638)." },
      { type: "order", q: "Put in order the steps for calculating braking distance.", items: ["Convert the speed into m/s", "Identify v₀ and the deceleration a", "Apply s = v₀² / (2a)", "Check the unit: metres"], explain: "First you work in SI units, then you apply the formula and check the result." }
    ]
  }
});
