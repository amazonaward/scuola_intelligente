TOPIC('en', {
  id: "l2-fis-moti-piano",
  title: "Motion in a plane",
  intro: "In your first year you studied forces and physical quantities; now we set everything in motion. A kicked football, a spinning wheel, a swinging swing: these are all motions that take place <b>in a plane</b>, not along a simple straight line. We will meet three protagonists: <b>projectile motion</b>, <b>uniform circular motion</b> and <b>simple harmonic motion</b>. The common thread is an idea of Galileo's that is as simple as it is powerful: a complicated motion can be understood by <b>breaking it down into simple motions</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Combining motions: Galileo's idea",
      html: `<p>In the <i>Dialogue Concerning the Two Chief World Systems</i> (1632) Galileo argues that a body can take part in several motions at the same time and that these motions <b>do not interfere with each other</b>. This is the <b>principle of independence of motions</b> (or superposition principle).</p>
<p>The classic example: you drop a ball from a ship moving at constant velocity. The ball falls vertically relative to the ship, but relative to the shore it traces a curve, because it also keeps the ship's horizontal velocity.</p>
<p>In practice, to study a motion in a plane you choose two axes, <b>x</b> (horizontal) and <b>y</b> (vertical), and study each motion separately:</p>
<ul>
<li>along x the motion is <b>uniform linear motion</b> (if there are no horizontal forces);</li>
<li>along y the motion is <b>uniformly accelerated</b>, with acceleration due to gravity g ≈ 9.8 m/s² downwards (ignoring air resistance).</li>
</ul>
<p>At the end you combine the two results using the vector addition you know from your first year.</p>`
    },
    {
      type: "svg",
      title: "The path of a projectile",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="pA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="pB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="30" y1="250" x2="610" y2="250" stroke="#475569" stroke-width="2"/>
<path d="M60 250 Q 260 -10 460 250" fill="none" stroke="#16a34a" stroke-width="4"/>
<line x1="60" y1="250" x2="120" y2="190" stroke="#dc2626" stroke-width="4" marker-end="url(#pA)"/>
<text x="124" y="186" font-size="15" fill="#dc2626" font-weight="bold">v0</text>
<line x1="260" y1="120" x2="330" y2="120" stroke="#2563eb" stroke-width="4" marker-end="url(#pB)"/>
<text x="334" y="116" font-size="15" fill="#2563eb" font-weight="bold">vx (constant)</text>
<line x1="260" y1="120" x2="260" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<text x="268" y="170" font-size="15" fill="#0f172a">max h</text>
<text x="250" y="108" font-size="15" fill="#0f172a" text-anchor="end">vertex: vy = 0</text>
<text x="60" y="275" font-size="15" fill="#0f172a">launch</text>
<text x="400" y="275" font-size="15" fill="#0f172a">landing (range)</text>
<path d="M90 250 A 30 30 0 0 0 85 232" fill="none" stroke="#475569" stroke-width="2"/>
<text x="96" y="238" font-size="15" fill="#0f172a">θ</text>
</g>
</svg>`,
      caption: "Horizontally the velocity does not change; vertically the body slows down on the way up, stops at the top and speeds up on the way down."
    },
    {
      type: "text",
      title: "Projectile motion: formulas",
      html: `<p>A body launched with initial velocity <b>v₀</b> at an angle <b>θ</b> to the horizontal has initial components v₀ₓ = v₀·cos θ and v₀ᵧ = v₀·sin θ. The equations of motion are:</p>
<table>
<tr><th>x-axis (uniform)</th><th>y-axis (accelerated)</th></tr>
<tr><td>x = v₀ₓ · t</td><td>y = v₀ᵧ · t − ½ g t²</td></tr>
<tr><td>vₓ = v₀ₓ = constant</td><td>vᵧ = v₀ᵧ − g t</td></tr>
</table>
<p>Eliminating time gives y as a function of x: a quadratic equation, i.e. a <b>parabola</b> (hence the alternative name, parabolic motion). From the formulas we get:</p>
<ul>
<li><b>time of flight</b> (back to the launch height): t = 2 v₀ᵧ / g;</li>
<li><b>maximum height</b> (vᵧ = 0): h = v₀ᵧ² / (2g);</li>
<li><b>range</b>: R = v₀² · sin(2θ) / g.</li>
</ul>
<p>For a given v₀ the range is greatest at <b>θ = 45°</b> (because sin 2θ = 1), and complementary angles (30° and 60°, for example) give the same range. Special case: a <b>horizontal</b> launch from a height h (θ = 0) has a fall time t = √(2h/g), identical to that of free fall.</p>`
    },
    {
      type: "example",
      title: "The free kick and the stone from the cliff",
      html: `<p><b>The football.</b> A footballer kicks the ball with v₀ = 20 m/s and θ = 30°. Components: v₀ₓ = 20·cos 30° ≈ 17.3 m/s and v₀ᵧ = 20·sin 30° = 10 m/s. With g = 9.8 m/s²:</p>
<ul>
<li>time of flight: 2·10/9.8 ≈ 2.04 s;</li>
<li>maximum height: 10²/(2·9.8) ≈ 5.1 m;</li>
<li>range: 17.3 · 2.04 ≈ 35 m (same result as 20²·sin 60°/9.8 ≈ 35.3 m).</li>
</ul>
<p><b>The stone.</b> From a cliff 45 m high you throw a stone horizontally at 10 m/s (g = 10 m/s² for simplicity). Fall time: √(2·45/10) = 3 s. In 3 s the stone moves <b>30 m</b> horizontally (10 · 3). If you simply dropped it, it would hit the water after exactly the same time: the horizontal velocity has no effect on the fall.</p>`
    },
    {
      type: "curiosity",
      title: "The monkey and the hunter",
      html: `<p>A classic thought experiment: a hunter aims a rifle straight at a monkey hanging from a branch. At the instant the shot is fired, the monkey lets go. Is it saved? <b>No</b>: bullet and monkey fall by the same amount in the same time, so the bullet hits it anyway (as long as it gets there before hitting the ground). It is proof that vertical fall does not depend on horizontal motion.</p>
<p>In reality air slows projectiles down: that is why real paths (especially of light, fast balls) are shorter and less symmetrical than the ideal parabola. For large guns, artillery even has to take the Earth's rotation into account.</p>`
    },
    {
      type: "quiz",
      title: "Check: projectile motion",
      questions: [
        { type: "mc", q: "In ideal projectile motion, which component of the velocity stays constant?", options: ["The vertical one", "The horizontal one", "Both", "Neither"], answer: 1, explain: "No forces act horizontally: the motion is uniform linear motion. Vertically, gravity acts." },
        { type: "tf", q: "At the highest point of the path the projectile's velocity is zero.", answer: false, explain: "Only the vertical component becomes zero; the horizontal component vₓ ≠ 0 remains." },
        { type: "num", q: "An object is thrown upwards with v₀ᵧ = 14.7 m/s (g = 9.8 m/s²). After how many seconds does it reach the top?", answer: 1.5, tol: 0.05, unit: "s", explain: "At the top vᵧ = 0: t = v₀ᵧ/g = 14.7/9.8 = 1.5 s." }
      ]
    },
    {
      type: "text",
      title: "Uniform circular motion",
      html: `<p>A point moves with <b>uniform circular motion</b> if it travels around a circle of radius r at <b>constant speed</b>. Careful: the magnitude of the velocity does not change, but its <b>direction does</b>, because the velocity is always <b>tangent</b> to the circle. Since velocity is a vector that changes, there is an acceleration!</p>
<p>Characteristic quantities:</p>
<ul>
<li><b>Period T</b>: time for one complete revolution (seconds);</li>
<li><b>Frequency f = 1/T</b>: revolutions per second (hertz, Hz);</li>
<li><b>Speed</b> v = 2πr / T = 2πr·f;</li>
<li><b>Angular velocity</b> ω = 2π / T = 2π·f (radians per second): the angle swept out per unit time, with v = ω·r.</li>
</ul>
<p>The <b>centripetal acceleration</b> points towards the centre and has magnitude <b>a = v² / r = ω² · r</b>. By Newton's second law a <b>centripetal force</b> F = m·v²/r is needed to keep the body on the curve: it can be the tension in a rope, the friction of the tyres on the road, gravity for a satellite. It is not an "extra" force: it is the name of the role played by a force that is already there.</p>`
    },
    {
      type: "svg",
      title: "Velocity and acceleration in circular motion",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="cV" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="cA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<circle cx="300" cy="150" r="110" fill="#ffffff" stroke="#475569" stroke-width="3"/>
<circle cx="300" cy="150" r="5" fill="#0f172a"/>
<text x="312" y="170" font-size="15" fill="#0f172a">centre</text>
<circle cx="410" cy="150" r="9" fill="#16a34a"/>
<line x1="410" y1="150" x2="410" y2="60" stroke="#2563eb" stroke-width="4" marker-end="url(#cV)"/>
<text x="420" y="75" font-size="16" fill="#2563eb" font-weight="bold">v (tangent)</text>
<line x1="410" y1="150" x2="340" y2="150" stroke="#dc2626" stroke-width="4" marker-end="url(#cA)"/>
<text x="345" y="140" font-size="16" fill="#dc2626" font-weight="bold">a (centripetal)</text>
<line x1="300" y1="150" x2="410" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
<text x="358" y="185" font-size="15" fill="#0f172a">r</text>
<circle cx="190" cy="150" r="9" fill="#16a34a"/>
<line x1="190" y1="150" x2="190" y2="240" stroke="#2563eb" stroke-width="4" marker-end="url(#cV)"/>
<line x1="190" y1="150" x2="250" y2="150" stroke="#dc2626" stroke-width="4" marker-end="url(#cA)"/>
<text x="470" y="150" font-size="15" fill="#0f172a">v constant in magnitude,</text>
<text x="470" y="172" font-size="15" fill="#0f172a">but its direction changes</text>
</g>
</svg>`,
      caption: "The velocity (blue) is tangent to the path; the acceleration (red) always points towards the centre."
    },
    {
      type: "remember",
      title: "Formulas for uniform circular motion",
      html: `<p><b>T = 1/f</b> · <b>ω = 2π/T</b> · <b>v = ω·r = 2πr/T</b> · <b>a<sub>c</sub> = v²/r = ω²·r</b> · <b>F<sub>c</sub> = m·v²/r</b>.</p>
<p><b>Example.</b> A wheel of radius 0.30 m makes one revolution in 0.50 s: ω = 2π/0.5 ≈ 12.6 rad/s; v = 12.6·0.30 ≈ 3.8 m/s; a = ω²r ≈ 47 m/s². The Earth at the equator (r ≈ 6378 km, T ≈ 24 h) moves at about 465 m/s, but we do not notice it because the speed is constant: we feel accelerations, not velocities.</p>`
    },
    {
      type: "quiz",
      title: "Check: circular motion",
      questions: [
        { type: "mc", q: "Which way does the acceleration point in uniform circular motion?", options: ["Along the tangent", "Towards the centre", "Outwards", "It is zero"], answer: 1, explain: "It is the centripetal acceleration, pointing towards the centre of the circle." },
        { type: "num", q: "A satellite completes one orbit in 100 minutes. How many orbits does it complete in a day (24 h = 1440 min)?", answer: 14.4, tol: 0.1, unit: "orbits", explain: "1440/100 = 14.4 orbits: frequency is the inverse of the period." },
        { type: "tf", q: "Doubling the speed on a bend of constant radius doubles the centripetal acceleration.", answer: false, explain: "a = v²/r: doubling v makes a four times as large." }
      ]
    },
    {
      type: "text",
      title: "Simple harmonic motion",
      html: `<p>Take a point moving with uniform circular motion and watch its <b>shadow</b> (its projection) on a wall: the shadow moves back and forth along a segment. That back-and-forth motion is <b>simple harmonic motion</b>. Its equation of motion is <b>x(t) = A · cos(ωt + φ)</b>, where <b>A</b> is the <b>amplitude</b> (maximum displacement from the centre), ω the angular frequency and φ the initial phase.</p>
<p>Features:</p>
<ul>
<li>the acceleration is <b>proportional and opposite to the displacement</b>: a = −ω²·x. It always points towards the centre of oscillation;</li>
<li>the velocity is greatest at the centre (x = 0) and zero at the extremes (x = ±A): v<sub>max</sub> = ω·A;</li>
<li>the period T = 2π/ω does not depend on the amplitude.</li>
</ul>
<p>Two fundamental systems:</p>
<ul>
<li><b>mass-spring</b> (no friction): F = −k·x, so <b>T = 2π·√(m/k)</b>. A stiffer spring (large k) oscillates faster, a larger mass more slowly;</li>
<li><b>simple pendulum</b> (small oscillations): <b>T = 2π·√(L/g)</b>. It depends neither on the hanging mass nor, for small amplitudes, on the amplitude (<i>isochronism</i>, observed by Galileo).</li>
</ul>`
    },
    {
      type: "example",
      title: "The spring and the swing",
      html: `<p><b>Spring.</b> A 1 kg mass is attached to a spring with k = 100 N/m: T = 2π√(1/100) = 2π · 0.1 ≈ <b>0.63 s</b>. With a 4 kg mass the period doubles (≈ 1.26 s).</p>
<p><b>Swing.</b> A swing with 2.5 m chains has T = 2π√(2.5/9.8) ≈ 3.2 s. To "keep it going" you only need to give small pushes at the right moment, one per period: this is the phenomenon of <b>resonance</b>, which lets you increase the amplitude with little effort.</p>`
    },
    {
      type: "curiosity",
      title: "The lamp in Pisa Cathedral",
      html: `<p>Tradition has it that the young Galileo, watching a lamp swinging in Pisa Cathedral, discovered the isochronism of the pendulum by counting his own pulse beats. The story was written down by his biographer Vincenzio Viviani and may have been embellished, but the idea is real: Galileo studied the pendulum and imagined using it to measure time. The first working pendulum clock was built by Christiaan Huygens in 1656-57.</p>`
    },
    {
      type: "svg",
      title: "Oscillation over time",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="40" y1="150" x2="610" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="270" stroke="#475569" stroke-width="2"/>
<path d="M60 60 C 110 60 140 150 190 150 C 240 150 270 240 320 240 C 370 240 400 150 450 150 C 500 150 530 60 580 60" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="320" y1="150" x2="320" y2="240" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 5"/>
<text x="70" y="52" font-size="15" fill="#0f172a">+A</text>
<text x="70" y="262" font-size="15" fill="#0f172a">−A</text>
<text x="590" y="144" font-size="15" fill="#0f172a">t</text>
<text x="66" y="24" font-size="15" fill="#0f172a">x</text>
<text x="190" y="172" font-size="15" fill="#0f172a" text-anchor="middle">T/4</text>
<text x="320" y="172" font-size="15" fill="#0f172a" text-anchor="middle">T/2</text>
<text x="450" y="172" font-size="15" fill="#0f172a" text-anchor="middle">3T/4</text>
<text x="580" y="172" font-size="15" fill="#0f172a" text-anchor="end">T</text>
<text x="330" y="40" font-size="16" fill="#2563eb" font-weight="bold">x = A cos(ωt)</text>
</g>
</svg>`,
      caption: "A sine curve: after one period T the motion repeats exactly."
    },
    {
      type: "alternatives",
      title: "Other ways to understand it",
      intro: "If the formulas do not convince you, try looking at the same motions from another angle.",
      tabs: [
        { label: "🔄 The shadow of the circle", html: "<p>Imagine a small ball fixed to the edge of a disc spinning at constant speed, lit from the side: its shadow on the wall moves up and down. When the ball is at its highest or lowest point, the shadow stops for an instant and reverses; when it is halfway up, the shadow has its maximum speed. This is exactly simple harmonic motion: <b>harmonic motion is circular motion seen from the side</b>.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><circle cx="180" cy="130" r="90" fill="#ffffff" stroke="#475569" stroke-width="3"/><circle cx="244" cy="66" r="10" fill="#16a34a"/><line x1="180" y1="130" x2="244" y2="66" stroke="#64748b" stroke-width="2"/><line x1="244" y1="66" x2="440" y2="66" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="440" y1="30" x2="440" y2="230" stroke="#0f172a" stroke-width="4"/><circle cx="440" cy="66" r="9" fill="#475569"/><text x="455" y="70" font-size="15" fill="#0f172a">shadow</text><text x="180" y="245" font-size="15" fill="#0f172a" text-anchor="middle">circular motion</text></g></svg>` },
        { label: "🧍 On the merry-go-round", html: "<p>On a merry-go-round you feel \"pushed outwards\". In reality, seen from the ground, your body would like to go straight on (inertia) and <b>it is the seat or the chain that deflects you</b> towards the centre: the centripetal force is provided by the chain. The outward push is just a sensation typical of rotating systems (an apparent force). If the chain broke, you would fly off along the <b>tangent</b>, not radially outwards.</p>" },
        { label: "📐 With numbers", html: "<p>Try working out the range without trigonometry: if v₀ᵧ = 10 m/s and v₀ₓ = 17.3 m/s, the way up takes 10/9.8 ≈ 1.02 s and the way down the same, for a total of 2.04 s. Multiply the total time by the horizontal velocity: 17.3 · 2.04 ≈ 35 m. Splitting the problem into \"how long do I stay in the air\" (vertical only) and \"how far do I travel in that time\" (horizontal only) is the whole secret.</p>" }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of motion in a plane",
      nodes: [
        { id: "comp", label: "Combining motions", x: 50, y: 10, color: "#a855f7", html: "A motion in a plane can be split into two motions along perpendicular axes, which can be studied separately.", why: "Galileo (1632) used it to answer Copernicus's critics: if the Earth moved, they said, stones would not fall vertically. He showed that the motion shared by the whole system does not disturb relative motions: this was the birth of the principle of Galilean relativity." },
        { id: "parab", label: "Projectile motion", x: 15, y: 48, color: "#16a34a", html: "Uniform horizontally, uniformly accelerated vertically: a parabolic path.", why: "Galileo, in the Discourses on Two New Sciences (1638), proved that the path of projectiles is a parabola, refuting the Aristotelian physics of 'impetus', which predicted straight stretches followed by a vertical fall." },
        { id: "circ", label: "Uniform circular motion", x: 50, y: 48, color: "#ef4444", html: "Velocity of constant magnitude, changing direction: centripetal acceleration a = v²/r.", why: "The expression for centripetal acceleration was derived by Huygens (1659) and used by Newton to show that the Moon is continuously 'falling' towards the Earth: the same gravity that makes apples fall governs orbits." },
        { id: "arm", label: "Simple harmonic motion", x: 85, y: 48, color: "#f59e0b", html: "x = A cos(ωt + φ), a = −ω²x: oscillations about a centre.", why: "Hooke (1678) found that the elastic force is proportional to the extension: a linear restoring force always leads to a sinusoidal oscillation. That is why the model works for springs, pendulums, atoms in solids and waves." },
        { id: "grav", label: "Gravity g", x: 15, y: 88, color: "#0ea5e9", html: "Downward acceleration, about 9.8 m/s² on Earth.", why: "Galileo showed that all bodies fall with the same acceleration (without air); Newton explained its origin with universal gravitation (1687)." },
        { id: "forza", label: "Centripetal / restoring force", x: 68, y: 88, color: "#64748b", html: "The force that bends the path or pulls the body back towards the centre.", why: "By the second law, F = m·a: if the path is curved there is an acceleration, so there must be a net force pointing towards the inside of the curve." }
      ],
      edges: [["comp", "parab", "gives rise to"], ["comp", "circ", "applies to"], ["circ", "arm", "seen from the side becomes"], ["grav", "parab", "causes the curvature of"], ["forza", "circ", "sustains"], ["forza", "arm", "restores in"]]
    }
  ],
  glossary: [
    { t: "Principle of independence of motions", d: "Simultaneous motions along different directions take place without affecting each other." },
    { t: "Range", d: "Horizontal distance covered by a projectile until it returns to its launch height." },
    { t: "Period", d: "Time needed to complete one full oscillation or revolution." },
    { t: "Frequency", d: "Number of cycles per second: f = 1/T, measured in hertz." },
    { t: "Angular velocity", d: "Angle swept out per unit time: ω = 2π/T (rad/s)." },
    { t: "Centripetal acceleration", d: "Acceleration pointing towards the centre in circular motion: a = v²/r." },
    { t: "Amplitude", d: "Maximum displacement from the equilibrium position in simple harmonic motion." },
    { t: "Isochronism", d: "The fact that a pendulum's period does not depend on its amplitude (for small oscillations)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What path does a projectile follow in the absence of air resistance?", options: ["A straight line", "A parabola", "A circle", "A spiral"], answer: 1, explain: "A combination of uniform horizontal motion and uniformly accelerated vertical motion: a parabola." },
      { type: "num", q: "A ball is thrown with v₀ᵧ = 20 m/s (g = 10 m/s²). What maximum height does it reach?", answer: 20, tol: 0.1, unit: "m", explain: "h = v₀ᵧ²/(2g) = 400/20 = 20 m." },
      { type: "num", q: "An object is thrown horizontally from a height of 20 m (g = 10 m/s²). How long does the fall last?", answer: 2, tol: 0.05, unit: "s", explain: "t = √(2h/g) = √(40/10) = 2 s." },
      { type: "tf", q: "For a given initial speed, the maximum range is obtained at an angle of 45°.", answer: true, explain: "R = v₀² sin(2θ)/g is greatest when sin 2θ = 1, i.e. θ = 45°." },
      { type: "num", q: "A disc makes 5 revolutions in 10 s. Calculate the frequency.", answer: 0.5, tol: 0.01, unit: "Hz", explain: "f = 5/10 = 0.5 Hz; the period is T = 2 s." },
      { type: "num", q: "A point moves around a circle of radius 2 m at a speed of 4 m/s. Calculate the centripetal acceleration.", answer: 8, tol: 0.05, unit: "m/s²", explain: "a = v²/r = 16/2 = 8 m/s²." },
      { type: "tf", q: "In uniform circular motion the acceleration is zero because the velocity has constant magnitude.", answer: false, explain: "The direction of the velocity changes, so there is a centripetal acceleration." },
      { type: "mc", q: "In simple harmonic motion, where is the velocity greatest?", options: ["At the extremes", "At the centre of oscillation", "Halfway between the centre and an extreme", "At no particular point"], answer: 1, explain: "At the centre the energy is all kinetic: v = ωA. At the extremes the velocity is zero." },
      { type: "num", q: "A simple pendulum is 1 m long (g = 9.8 m/s²). Calculate its period.", answer: 2, tol: 0.05, unit: "s", explain: "T = 2π√(L/g) = 2π√(1/9.8) ≈ 2.0 s." },
      { type: "mc", q: "If I quadruple the mass hanging from a spring, the period of oscillation...", options: ["Doubles", "Halves", "Quadruples", "Stays the same"], answer: 0, explain: "T = 2π√(m/k): with m×4, T is multiplied by √4 = 2." }
    ]
  }
});
