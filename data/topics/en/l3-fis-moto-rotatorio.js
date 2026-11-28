TOPIC('en', {
  id: "l3-fis-moto-rotatorio",
  title: "Rotational motion",
  intro: "A figure skater spins slowly with her arms out, then pulls them in to her body and starts spinning at dizzying speed, without anyone pushing her. A top stays upright as long as it spins; a spinning bicycle wheel seems to \"resist\" when you try to tilt it. To understand these phenomena we need the <b>rotational motion</b> of rigid bodies: this is where the <b>moment of inertia</b> comes in, which is to rotation what mass is to translation, together with <b>angular momentum</b>, a quantity that is <b>conserved</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "From translation to rotation",
      html: `<p>In circular motion (second year) you have already met the angular quantities: the <b>angle</b> θ (in radians), the <b>angular velocity</b> ω = Δθ/Δt (rad/s) and the <b>angular acceleration</b> α = Δω/Δt (rad/s²). Every point of a rotating body at a distance <b>r</b> from the axis has linear velocity <b>v = ω·r</b> and tangential acceleration <b>a<sub>t</sub> = α·r</b>.</p>
<p>A <b>rigid body</b> is a body that does not deform: all its parts rotate with the same ω (but not with the same v!). The rotational quantities have a perfect "twin" in translation:</p>
<table>
<tr><th>Translation</th><th>Rotation</th></tr>
<tr><td>position x</td><td>angle θ</td></tr>
<tr><td>velocity v</td><td>angular velocity ω</td></tr>
<tr><td>acceleration a</td><td>angular acceleration α</td></tr>
<tr><td>mass m</td><td><b>moment of inertia I</b></td></tr>
<tr><td>force F</td><td><b>torque τ</b></td></tr>
<tr><td>F = m·a</td><td><b>τ = I·α</b></td></tr>
<tr><td>momentum p = m·v</td><td><b>angular momentum L = I·ω</b></td></tr>
<tr><td>kinetic energy ½mv²</td><td>rotational kinetic energy ½Iω²</td></tr>
</table>
<p>In this lesson we build up the right-hand column, step by step.</p>`
    },
    {
      type: "text",
      title: "The moment of a force (torque)",
      html: `<p>To open a door you push far from the hinges, not close to them. If you push <b>on the axis</b> (the hinges) the door does not move at all. The turning effect of a force depends on its magnitude, its distance from the axis and its direction. We define the <b>moment of a force</b> (or torque):</p>
<p style="text-align:center"><b>τ = F · b = F · r · sin θ</b></p>
<ul>
<li><b>r</b> is the distance between the axis and the point where the force is applied;</li>
<li><b>θ</b> is the angle between the vector r and the force F;</li>
<li><b>b = r·sin θ</b> is the <b>lever arm</b> of the force: the distance between the axis and the <i>line of action</i> of the force;</li>
<li>unit: <b>N·m</b> (like work, but it is a different quantity: here it is a vector quantity, with a clockwise or anticlockwise sense).</li>
</ul>
<p>The torque is greatest if the force is perpendicular to the radius (θ = 90°) and zero if the force passes through the axis (θ = 0° or 180°). Long spanners and handles at the far edge of a door exploit the fact that, for the same force, a longer lever arm gives a larger torque: this is Archimedes' <b>lever</b> ("give me a place to stand and I will move the Earth").</p>
<p>A rigid body is in <b>equilibrium</b> if the resultant force is zero <b>and</b> the sum of the torques about any point is zero. This brings us back to levers and seesaws: two children balance if m<sub>1</sub>·d<sub>1</sub> = m<sub>2</sub>·d<sub>2</sub>.</p>`
    },
    {
      type: "example",
      title: "The spanner and the seesaw",
      html: `<p><b>Spanner.</b> Undoing a nut requires a torque of 60 N·m. With a spanner 0.20 m long, with the force perpendicular, you need F = 60/0.20 = <b>300 N</b>. With a pipe that extends the spanner to 0.60 m, F = 60/0.60 = <b>100 N</b> is enough: the classic trick of mechanics and plumbers.</p>
<p><b>Seesaw.</b> A 30 kg girl sits 2.0 m from the pivot. Where must a 40 kg boy sit to balance? 30 × 2.0 = 40 × d ⟹ d = <b>1.5 m</b>. The heavier child sits closer to the pivot.</p>`
    },
    {
      type: "svg",
      title: "The moment of a force",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="rmA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<circle cx="120" cy="170" r="8" fill="#0f172a"/>
<text x="120" y="205" font-size="15" fill="#0f172a" text-anchor="middle">axis</text>
<rect x="120" y="163" width="280" height="14" fill="#a16207" rx="4"/>
<line x1="400" y1="170" x2="400" y2="60" stroke="#dc2626" stroke-width="5" marker-end="url(#rmA)"/>
<text x="425" y="85" font-size="16" fill="#991b1b" font-weight="bold">F</text>
<line x1="120" y1="230" x2="400" y2="230" stroke="#2563eb" stroke-width="3"/>
<line x1="120" y1="222" x2="120" y2="238" stroke="#2563eb" stroke-width="3"/>
<line x1="400" y1="222" x2="400" y2="238" stroke="#2563eb" stroke-width="3"/>
<text x="260" y="256" font-size="16" fill="#1e3a8a" text-anchor="middle">r = lever arm</text>
<text x="300" y="30" font-size="16" fill="#0f172a" font-weight="bold">τ = F · r  (perpendicular force)</text>
<path d="M170 140 A 50 50 0 0 0 150 120" stroke="#16a34a" stroke-width="3" fill="none"/>
<text x="480" y="170" font-size="15" fill="#166534">Anticlockwise rotation</text>
<text x="480" y="192" font-size="15" fill="#166534">(positive torque)</text>
</g>
</svg>`,
      caption: "The same force produces a larger torque if it is applied further from the axis and perpendicular to the radius."
    },
    {
      type: "text",
      title: "Moment of inertia and the second law for rotation",
      html: `<p>A rotating body "resists" a change in its rotation, but this resistance does not depend only on its mass: it also depends on <b>how the mass is distributed about the axis</b>. A point of mass m at a distance r from the axis has <b>moment of inertia</b> I = m·r². For an extended body all the contributions are added up:</p>
<p style="text-align:center"><b>I = Σ m<sub>i</sub> · r<sub>i</sub>²</b> &nbsp; (unit: kg·m²)</p>
<p>Mass far from the axis counts <b>with the square</b> of the distance: moving mass towards the edge greatly increases I. The second law of rotational dynamics is</p>
<p style="text-align:center"><b>τ<sub>net</sub> = I · α</b></p>
<p>and it follows directly for a point mass: F = m·a<sub>t</sub> ⟹ F·r = m·r²·(a<sub>t</sub>/r) = I·α. The larger I is, the harder it is to make the body rotate (or to stop it).</p>
<p>Values for uniform bodies of mass M and radius R (or length L), about the axes shown:</p>
<table>
<tr><th>Body</th><th>Axis</th><th>I</th></tr>
<tr><td>Thin ring (hoop)</td><td>central axis</td><td><b>M·R²</b></td></tr>
<tr><td>Solid disc or cylinder</td><td>central axis</td><td><b>½·M·R²</b></td></tr>
<tr><td>Solid sphere</td><td>through the centre</td><td><b>⅖·M·R²</b></td></tr>
<tr><td>Thin rod</td><td>through the centre, perpendicular</td><td><b>1/12 · M·L²</b></td></tr>
<tr><td>Thin rod</td><td>through one end</td><td><b>1/3 · M·L²</b></td></tr>
</table>
<p>The <b>parallel axis theorem</b> (Huygens–Steiner theorem) lets you change axis: if I<sub>CM</sub> is the moment of inertia about an axis through the centre of mass, about a parallel axis at a distance d it is <b>I = I<sub>CM</sub> + M·d²</b>. Check it with the rod: 1/12·ML² + M·(L/2)² = 1/12 + 1/4 = 1/3·ML² ✓.</p>`
    },
    {
      type: "example",
      title: "Which is harder to spin?",
      html: `<p>A disc of 2.0 kg and radius 0.30 m has I = ½·2.0·0.30² = <b>0.090 kg·m²</b>. A ring with the same mass and radius has I = 2.0·0.30² = <b>0.18 kg·m²</b>: twice as much. This is why, for the same applied torque, the disc has twice the acceleration: if τ = 0.36 N·m, the disc has α = 4 rad/s² and the ring 2 rad/s².</p>
<p>This is why <b>flywheels</b> (energy stores in engines) have their mass concentrated at the rim: for the same mass they store more energy. And why a tightrope walker uses a long pole with weights at the ends: the pole has a large moment of inertia and makes every wobble slower and easier to control.</p>`
    },
    {
      type: "quiz",
      title: "Check: torque and inertia",
      questions: [
        { type: "num", q: "A force of 50 N is applied perpendicularly 0.40 m from the axis. What is the torque?", answer: 20, tol: 0, unit: "N·m", explain: "τ = F·r = 50 × 0.40 = 20 N·m." },
        { type: "num", q: "A disc with a moment of inertia of 0.50 kg·m² is subjected to a torque of 2 N·m. What is the angular acceleration?", answer: 4, tol: 0, unit: "rad/s²", explain: "α = τ/I = 2/0.5 = 4 rad/s²." },
        { type: "mc", q: "If you double the distance of a point mass from the axis, its moment of inertia:", options: ["doubles", "quadruples", "halves", "does not change"], answer: 1, explain: "I = m·r²: the radius appears squared." }
      ]
    },
    {
      type: "text",
      title: "Rotational kinetic energy and rolling",
      html: `<p>Every point of a rotating body has kinetic energy ½·m<sub>i</sub>·v<sub>i</sub>² = ½·m<sub>i</sub>·r<sub>i</sub>²·ω². Adding over all the points:</p>
<p style="text-align:center"><b>K<sub>rot</sub> = ½ · I · ω²</b></p>
<p>It is the same formula as ½mv² with I in place of m and ω in place of v. The <b>work</b> done by a torque is W = τ·Δθ and the <b>work–energy theorem</b> holds here too.</p>
<p><b>Rolling without slipping.</b> A rolling wheel has two motions at once: translation of the centre (velocity v) and rotation (ω = v/R). The total kinetic energy is the sum:</p>
<p style="text-align:center"><b>K = ½·M·v² + ½·I·ω²</b>, with ω = v/R.</p>
<p><b>A race down a slope.</b> Let a solid sphere, a solid cylinder and a ring, all with the same radius, roll down from the same height h without slipping. By conservation of energy: M·g·h = ½Mv² + ½Iω² = ½Mv²·(1 + I/(MR²)), so</p>
<p style="text-align:center"><b>v = √[ 2gh / (1 + I/(MR²)) ]</b></p>
<p>The ratio I/(MR²) is 2/5 for the sphere, 1/2 for the cylinder and 1 for the ring. So the winner is the one with the <b>smallest</b> I/(MR²): the <b>sphere</b> (v = √(10gh/7)), then the <b>cylinder</b> (v = √(4gh/3)), and finally the <b>ring</b> (v = √(gh)). The result depends on neither the mass nor the radius, and it holds for any body with the same mass distribution (a solid sphere is always faster than a hollow one). If instead there were no rotation (a block sliding without friction), v = √(2gh), the fastest of all: in rolling bodies part of the energy is "spent" on making them rotate.</p>`
    },
    {
      type: "svg",
      title: "The race down the slope",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<g font-family="sans-serif">
<polygon points="40,250 560,250 40,60" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
<circle cx="90" cy="70" r="20" fill="#16a34a"/>
<text x="90" y="76" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">S</text>
<circle cx="150" cy="104" r="20" fill="#2563eb"/>
<text x="150" y="110" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">C</text>
<circle cx="210" cy="138" r="20" fill="none" stroke="#dc2626" stroke-width="8"/>
<text x="210" y="144" font-size="14" fill="#991b1b" text-anchor="middle" font-weight="bold">R</text>
<text x="340" y="60" font-size="16" fill="#0f172a" font-weight="bold">Finishing order:</text>
<text x="340" y="92" font-size="16" fill="#166534">1st S = solid sphere (I = 2/5 MR²)</text>
<text x="340" y="120" font-size="16" fill="#1e3a8a">2nd C = solid cylinder (I = 1/2 MR²)</text>
<text x="340" y="148" font-size="16" fill="#991b1b">3rd R = ring (I = MR²)</text>
<text x="340" y="190" font-size="15" fill="#334155">Mass concentrated at the rim</text>
<text x="340" y="212" font-size="15" fill="#334155">slows the descent.</text>
</g>
</svg>`,
      caption: "The body with the smallest moment of inertia (relative to MR²) rolls down fastest."
    },
    {
      type: "text",
      title: "Angular momentum",
      html: `<p>For translation, momentum p = m·v describes "how much motion" a body has. For rotation the analogous quantity is <b>angular momentum</b>. For a rigid body rotating about a fixed axis:</p>
<p style="text-align:center"><b>L = I · ω</b> &nbsp;&nbsp; (unit: kg·m²/s)</p>
<p>(For a point of mass m moving with velocity v at a distance r from the axis, perpendicular to the radius, L = m·v·r.) It is a <b>vector</b> quantity: by the <b>right-hand rule</b> the vector L points along the axis, in the direction of your thumb when your other fingers follow the sense of rotation.</p>
<p>The second law can be written in general form as</p>
<p style="text-align:center"><b>τ<sub>net</sub> = ΔL / Δt</b></p>
<p>that is: the torque of the external forces is the rate of change of angular momentum. For constant I we get back τ = I·Δω/Δt = I·α.</p>
<h4>Conservation of angular momentum</h4>
<p>If the resultant torque of the external forces is <b>zero</b>, the total angular momentum is constant:</p>
<p style="text-align:center"><b>τ<sub>net</sub> = 0 &nbsp;⟹&nbsp; L = I·ω = constant &nbsp;⟹&nbsp; I<sub>i</sub>·ω<sub>i</sub> = I<sub>f</sub>·ω<sub>f</sub></b></p>
<p>If the body changes shape and I <b>decreases</b>, ω must <b>increase</b> (and vice versa).</p>`
    },
    {
      type: "example",
      title: "The pirouette and the diver",
      html: `<p><b>Pirouette.</b> A skater spins at 2.0 rad/s with her arms out, I = 3.0 kg·m². Pulling her arms in, her I drops to 1.0 kg·m². By conservation: 3.0 × 2.0 = 1.0 × ω<sub>f</sub> ⟹ ω<sub>f</sub> = <b>6.0 rad/s</b>: she spins three times faster. Her kinetic energy goes from ½·3.0·4 = 6 J to ½·1.0·36 = 18 J: the extra work is done by her arm muscles, which pull towards the axis against the centrifugal tendency.</p>
<p><b>Diver.</b> She leaves the platform with a small rotation, then tucks into a ball: I decreases and ω increases, so she can do more twists and somersaults. Before entering the water she stretches out to reduce ω and enter vertically.</p>
<p><b>A falling cat.</b> Even a cat dropped upside down turns over in the air and lands on its feet, despite starting with L = 0: it changes the shape of its body (front legs tucked in and back legs stretched out, then the other way round) so that the two halves rotate in opposite directions with a total angular momentum that is still zero.</p>`
    },
    {
      type: "widget",
      title: "What is conserved?",
      widget: "classify",
      options: { groups: ["Always conserved (isolated system)", "Conserved only in certain cases"], items: [
        ["Angular momentum (no external torques)", 0],
        ["Momentum (no external forces)", 0],
        ["Angular velocity ω", 1],
        ["Rotational kinetic energy", 1],
        ["Moment of inertia I", 1]
      ] },
      caption: "In the pirouette ω, I and kinetic energy change: the only thing that stays the same is L."
    },
    {
      type: "quiz",
      title: "Check: angular momentum",
      questions: [
        { type: "num", q: "A gymnast has I = 4 kg·m² and ω = 3 rad/s. She tucks in and her I becomes 2 kg·m². What is her new angular velocity?", answer: 6, tol: 0, unit: "rad/s", explain: "I·ω = constant: 4·3 = 2·ω' ⟹ ω' = 6 rad/s." },
        { type: "num", q: "A disc has I = 0.2 kg·m² and rotates at 10 rad/s. What is its angular momentum?", answer: 2, tol: 0, unit: "kg·m²/s", explain: "L = I·ω = 0.2 × 10 = 2 kg·m²/s." },
        { type: "tf", q: "When a skater pulls her arms in, her rotational kinetic energy stays constant.", answer: false, explain: "L is conserved, not energy: ω triples and K = ½Iω² increases (work done by the muscles)." }
      ]
    },
    {
      type: "text",
      title: "Gyroscopes, tops and satellites",
      html: `<p>Since L is a vector, it is conserved not only in magnitude but also in <b>direction</b>. A body spinning fast therefore tends to keep its axis of rotation fixed in space. This is the principle of the <b>gyroscope</b>: a heavy wheel with a large L resists attempts to tilt it. This is why:</p>
<ul>
<li>a moving bicycle stays balanced more easily (the wheel behaves like a gyroscope);</li>
<li>an American football thrown with a spin ("spiral") keeps its axis steady and flies better; gun barrels have internal grooves ("rifling") that make bullets spin to stabilise them;</li>
<li>aircraft, ships and satellites use <b>gyroscopes</b> to keep an orientation reference (gyrocompass);</li>
<li>the <b>Earth</b>'s axis of rotation keeps pointing at almost the same region of the sky (the Pole Star) throughout the year.</li>
</ul>
<p>When an external torque acts perpendicular to L, it does not change its magnitude but rotates its direction: this is <b>precession</b>. A tilted top does not fall straight away: its axis traces a cone around the vertical. The Earth's axis also undergoes a very slow precession (about 26 000 years) because of the pull of the Sun and Moon on the equatorial bulge.</p>
<p>Finally, conservation of angular momentum explains a fact discovered by Kepler (second law): when a planet gets closer to the Sun, orbiting nearer to it, it moves faster, because L = m·v·r is constant. We will discuss this in the next lesson on gravitation.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand rotation",
      intro: "Moment of inertia and angular momentum are not intuitive: here are other ways to \"feel\" them.",
      tabs: [
        {
          label: "🪑 The swivel chair",
          html: "<p>Sit on a swivel chair holding two weights with your arms out, and get someone to give you a small push. Then bring the weights to your chest: <b>you spin much faster</b>! Stretch your arms out again: you slow down. It is not magic: you have changed I (from large to small) and, since L is conserved, ω has increased. It is the same trick as the skater's, and you can try it at home (carefully).</p>"
        },
        {
          label: "🎯 Mass \"counts\" with the square",
          html: "<p>Imagine two dumbbells with the same total mass: in the first the weights are close to the axis (r = 0.1 m), in the second far away (r = 0.5 m). I = Σmr²: the second has a moment of inertia <b>25 times</b> larger (because (0.5/0.1)² = 25). Making it rotate, or stopping it, takes 25 times more torque. This is why small children can spin the short dumbbell with one finger, while one finger is not enough to stop a tightrope walker's long pole.</p>"
        },
        {
          label: "🔗 Match the analogies",
          html: "<p>Match each translational quantity to its rotational \"twin\".</p>",
          widget: "match",
          options: { pairs: [
            ["Mass m", "Moment of inertia I"],
            ["Force F", "Torque τ"],
            ["Momentum p = mv", "Angular momentum L = Iω"],
            ["F = m·a", "τ = I·α"],
            ["Kinetic energy ½mv²", "Kinetic energy ½Iω²"]
          ] }
        },
        {
          label: "⚙️ Drawing: two distributions",
          html: "<p>Two discs with the same total mass: in the first the mass is concentrated at the centre, in the second at the rim. The second has a larger I.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#fefce8'/><g font-family='sans-serif'><circle cx='150' cy='120' r='80' fill='none' stroke='#475569' stroke-width='3' stroke-dasharray='6 5'/><circle cx='150' cy='120' r='22' fill='#2563eb'/><text x='150' y='125' font-size='14' fill='#ffffff' text-anchor='middle' font-weight='bold'>M</text><text x='150' y='235' font-size='15' fill='#1e3a8a' text-anchor='middle'>mass at the centre: small I</text><circle cx='450' cy='120' r='80' fill='none' stroke='#dc2626' stroke-width='12'/><text x='450' y='125' font-size='14' fill='#991b1b' text-anchor='middle' font-weight='bold'>M</text><text x='450' y='235' font-size='15' fill='#991b1b' text-anchor='middle'>mass at the rim: large I</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "The Earth is slowing down, the days are getting longer",
      html: `<p>The Earth does not rotate at an exactly constant rate: the tides caused by the Moon exert a braking torque and the day gets longer by about 1.7 milliseconds per century. Since the angular momentum of the Earth–Moon system is conserved, what the Earth loses is transferred to the Moon, which moves away by about <b>3.8 cm a year</b> (measured with the reflectors left by the Apollo astronauts). Around 400 million years ago a day lasted only about 22 hours: we can tell from the growth rings of fossil corals.</p>`
    },
    {
      type: "curiosity",
      title: "Pulsars: the cosmic flywheel",
      html: `<p>A star that collapses into a neutron star goes from a radius of hundreds of thousands of kilometres to about 10-12 km: I decreases by an enormous factor and, to conserve L, ω increases by the same factor. This is why <b>pulsars</b> (neutron stars that emit beams of radiation) can spin hundreds of times a second. It was the astrophysicist Jocelyn Bell Burnell who discovered the first pulsar in 1967: the radio pulses were so regular that they were jokingly nicknamed "LGM", Little Green Men, at first.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of rotational motion",
      nodes: [
        { id: "momento", label: "Torque τ = F·b", x: 15, y: 10, color: "#ef4444", html: "Measures how effective a force is at making a body rotate: it depends on F and on the lever arm b.", why: "Studying levers, Archimedes showed that equilibrium depends on the product force × distance from the fulcrum. The concept was later formalised in rigid-body mechanics (Euler, eighteenth century)." },
        { id: "inerzia", label: "Moment of inertia I = Σmr²", x: 85, y: 10, color: "#2563eb", html: "Measures a body's resistance to changing its rotation; it depends on how the mass is distributed.", why: "It comes from applying F = m·a to every point of the rigid body: adding up m·r² gives a quantity that depends on the geometry and the axis." },
        { id: "seconda", label: "τ = I·α", x: 50, y: 40, color: "#8b5cf6", html: "Newton's second law for rotation.", why: "It is F = m·a \"translated\" into angles: every translational quantity has its rotational twin, because Newton's laws apply to every point of the body." },
        { id: "angolare", label: "Angular momentum L = I·ω", x: 20, y: 75, color: "#16a34a", html: "The body's \"amount of rotation\"; τ = ΔL/Δt.", why: "Kepler sensed it (the area swept out) and Newton proved it for central forces; the general form is linked to the third law applied to rotations." },
        { id: "conserv", label: "Conservation of L", x: 55, y: 85, color: "#f59e0b", html: "If τ_net = 0 then L stays constant: pirouettes, dives, gyroscopes.", why: "It corresponds to the rotational symmetry of space: no direction is special (Noether's theorem). It is one of the deepest laws of physics, valid in the atomic world too." },
        { id: "energia", label: "Energy ½Iω²", x: 88, y: 65, color: "#64748b", html: "Rotational kinetic energy; in rolling it is added to ½Mv².", why: "It is obtained by adding ½mv² over all the points: it explains why, for the same mass, a ring rolls down a slope more slowly than a sphere." }
      ],
      edges: [["momento", "seconda", "produces"], ["inerzia", "seconda", "opposes"], ["seconda", "angolare", "ΔL/Δt = τ"], ["angolare", "conserv", "if τ=0"], ["inerzia", "energia", "determines"]]
    }
  ],
  glossary: [
    { t: "Angular velocity", d: "ω = Δθ/Δt, in rad/s: how fast the angle changes." },
    { t: "Torque (moment of a force)", d: "τ = F·b: a quantity that measures the turning effect of a force, in N·m." },
    { t: "Lever arm", d: "The distance between the axis of rotation and the line of action of the force." },
    { t: "Moment of inertia", d: "I = Σ m·r²: a body's resistance to changing its rotation, in kg·m²." },
    { t: "Angular momentum", d: "L = I·ω: a vector quantity describing a body's rotation, in kg·m²/s." },
    { t: "Conservation of angular momentum", d: "With no external torques, L stays constant." },
    { t: "Rigid body", d: "A body that does not deform: the distances between its points stay constant." },
    { t: "Precession", d: "The slow rotation of the axis of a spinning body under the action of an external torque." },
    { t: "Parallel axis theorem", d: "Huygens–Steiner theorem for changing axis: I = I_CM + M·d²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "A rod is pushed with a force of 30 N perpendicular to the rod, 0.50 m from the axis. What is the torque?", answer: 15, tol: 0, unit: "N·m", explain: "τ = F·b = 30 × 0.50 = 15 N·m." },
      { type: "mc", q: "Which object has the largest moment of inertia, for the same mass and radius?", options: ["Solid sphere", "Solid cylinder", "Thin ring", "They are all equal"], answer: 2, explain: "The ring has all its mass at distance R: I = MR², the largest value." },
      { type: "num", q: "A 2 kg point mass rotates 0.5 m from the axis. What is its moment of inertia?", answer: 0.5, tol: 0.001, unit: "kg·m²", explain: "I = m·r² = 2 × 0.25 = 0.5 kg·m²." },
      { type: "num", q: "A torque of 1.2 N·m acts on a body with I = 0.40 kg·m². What is the angular acceleration?", answer: 3, tol: 0, unit: "rad/s²", explain: "α = τ/I = 1.2/0.40 = 3 rad/s²." },
      { type: "tf", q: "The angular momentum of an isolated system is always conserved.", answer: true, explain: "If the resultant torque of the external forces is zero, L = I·ω is constant." },
      { type: "num", q: "A skater spins at 3 rad/s with I = 2.4 kg·m². Pulling her arms in, I becomes 1.2 kg·m². What is the new ω?", answer: 6, tol: 0, unit: "rad/s", explain: "2.4·3 = 1.2·ω' ⟹ ω' = 6 rad/s." },
      { type: "mc", q: "Who wins the race down a slope (rolling without slipping) between a solid sphere, a solid cylinder and a ring of the same mass and radius?", options: ["The ring", "The cylinder", "The solid sphere", "They arrive together"], answer: 2, explain: "The sphere has the smallest ratio I/(MR²) = 2/5, so it converts more energy into translation." },
      { type: "tf", q: "The moment of inertia of a body depends only on its mass.", answer: false, explain: "It also depends on how the mass is distributed about the axis of rotation." },
      { type: "num", q: "A uniform disc of 4 kg and radius 0.5 m rotates about its axis. Calculate I.", answer: 0.5, tol: 0.001, unit: "kg·m²", explain: "I = ½·M·R² = ½ × 4 × 0.25 = 0.5 kg·m²." },
      { type: "order", q: "Put in order of increasing moment of inertia (same mass M and same radius R, central axis).", items: ["Solid sphere", "Solid disc", "Thin ring"], explain: "I = 2/5 MR² (0.4) < ½ MR² (0.5) < MR² (1)." }
    ]
  }
});
