TOPIC('en', {
  id: "l2-fis-lavoro-energia",
  title: "Work and energy",
  intro: "In everyday language, \"working\" and \"making an effort\" mean almost the same thing. In physics <b>work</b> has a precise definition: it is what a force does when it moves a body. From this definition comes the most important and unifying concept in all of physics, <b>energy</b>, and with it a law that has never been disproved: energy is neither created nor destroyed, it is only transformed. With these tools you will solve problems that would be much more laborious using Newton's laws alone.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "The work done by a force",
      html: `<p>The <b>work</b> done by a constant force F that moves its point of application through a distance s is:</p>
<p style="text-align:center"><b>W = F · s · cos θ</b></p>
<p>where θ is the angle between the direction of the force and that of the displacement. The unit is the <b>joule</b> (J): 1 J = 1 N · 1 m, the work done by a force of 1 N that moves a body 1 m in its own direction.</p>
<ul>
<li><b>θ = 0°</b> (force in the same direction as the displacement): cos θ = 1, work is <b>positive</b> and maximum; the force "helps" the motion;</li>
<li><b>θ = 90°</b> (perpendicular force): cos θ = 0, <b>zero work</b>. A force perpendicular to the displacement does no work: for example the normal force on a body sliding along a surface, or the weight of a suitcase you carry horizontally;</li>
<li><b>θ = 180°</b> (force opposite to the displacement): cos θ = −1, work is <b>negative</b>; the force "brakes". This is how kinetic friction works.</li>
</ul>
<p>Work is a <b>scalar</b> quantity. If several forces act, the total work is the sum of the individual works (or the work done by the resultant). Note that exerting a force is not enough to do work: if you hold a rucksack still you get physically tired, but you do no work on the rucksack because the displacement is zero.</p>`
    },
    {
      type: "svg",
      title: "Work depends on the angle",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="wF" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="wS" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="20" y1="110" x2="210" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="60" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="110" y1="95" x2="190" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="60" y1="130" x2="190" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="115" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 0°</text>
<text x="115" y="188" font-size="15" fill="#16a34a" text-anchor="middle" font-weight="bold">W = F·s</text>
<line x1="230" y1="110" x2="420" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="270" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="295" y1="80" x2="295" y2="25" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="270" y1="130" x2="400" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="325" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 90°</text>
<text x="325" y="188" font-size="15" fill="#475569" text-anchor="middle" font-weight="bold">W = 0</text>
<line x1="440" y1="110" x2="630" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="500" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="500" y1="95" x2="450" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="500" y1="130" x2="620" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="535" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 180°</text>
<text x="535" y="188" font-size="15" fill="#dc2626" text-anchor="middle" font-weight="bold">W = −F·s</text>
<text x="320" y="250" font-size="16" fill="#0f172a" text-anchor="middle">Force in red, displacement in blue</text>
</g>
</svg>`,
      caption: "Same direction: positive work. Perpendicular: zero. Opposite: negative."
    },
    {
      type: "example",
      title: "How much work?",
      html: `<p><b>Horizontal push.</b> You push a cupboard with 50 N for 4 m in the same direction as the force: W = 50 · 4 = <b>200 J</b>.</p>
<p><b>Pulling a suitcase.</b> You pull a suitcase by a handle angled at 60° to the floor, with 40 N, for 10 m: W = 40 · 10 · cos 60° = 40 · 10 · 0.5 = <b>200 J</b>. Only the horizontal component of the force does work.</p>
<p><b>Lifting a weight.</b> You lift a 10 kg crate 2 m at constant velocity (g = 9.8 m/s²): you need a force equal to its weight, 98 N, so W = 98 · 2 = <b>196 J</b>. Over the same displacement, the weight does <b>−196 J</b> of work.</p>`
    },
    {
      type: "text",
      title: "Power",
      html: `<p>Running up a flight of stairs or walking up slowly requires the same work, but not the same <b>power</b>: power measures <b>how fast</b> work is done.</p>
<p style="text-align:center"><b>P = W / Δt</b> &nbsp;&nbsp; (if the force is constant and parallel to v: <b>P = F · v</b>)</p>
<p>The unit is the <b>watt</b> (W) = 1 J/s, named after James Watt, who improved the steam engine. A unit that is still widely used is <b>horsepower</b> (metric horsepower, CV in Italy): 1 hp ≈ 735.5 W. The energy on your electricity bill is measured in <b>kilowatt-hours</b>: 1 kWh is the energy used by a 1 kW appliance in one hour, i.e. 3.6 · 10⁶ J = 3.6 MJ.</p>
<p>A 60 kW engine pushing a car at 20 m/s (72 km/h) develops an average driving force F = P/v = 60000/20 = 3000 N.</p>`
    },
    {
      type: "widget",
      title: "Is the work positive, zero or negative?",
      widget: "classify",
      options: { groups: ["Positive work", "Zero work", "Negative work"], items: [
        ["You push a trolley in the direction of motion", 0],
        ["You carry a rucksack walking on level ground (work done by its weight)", 1],
        ["Friction on a sliding crate", 2],
        ["Gravity on a falling stone", 0],
        ["The brakes of a car that is slowing down", 2],
        ["Gravity on a satellite in a circular orbit", 1]
      ] },
      caption: "Look at the angle between force and displacement."
    },
    {
      type: "quiz",
      title: "Check: work and power",
      questions: [
        { type: "num", q: "A force of 30 N moves a body 5 m in its own direction. How much work is done?", answer: 150, tol: 0.1, unit: "J", explain: "W = F·s = 30 · 5 = 150 J." },
        { type: "tf", q: "The work done by the centripetal force in uniform circular motion is zero.", answer: true, explain: "The force is always perpendicular to the displacement: cos 90° = 0." },
        { type: "num", q: "An engine does 6000 J of work in 30 s. Calculate its power.", answer: 200, tol: 0.1, unit: "W", explain: "P = W/Δt = 6000/30 = 200 W." }
      ]
    },
    {
      type: "text",
      title: "Kinetic energy and the work-energy theorem",
      html: `<p>A moving body can do work (a hammer striking a nail, water turning a wheel). This ability, linked to motion, is called <b>kinetic energy</b>:</p>
<p style="text-align:center"><b>E<sub>k</sub> = ½ · m · v²</b></p>
<p>It depends on the <b>square</b> of the velocity: doubling v makes the energy 4 times larger. That is why high-speed crashes are much more serious (and braking distances grow with the square of v).</p>
<p><b>Work-energy theorem.</b> The total work done on a body is equal to the change in its kinetic energy:</p>
<p style="text-align:center"><b>W<sub>tot</sub> = ΔE<sub>k</sub> = ½ m v² − ½ m v₀²</b></p>
<p>It is derived from the second law and links forces and velocities directly, without going through time. Example: a 1000 kg car at 20 m/s has E<sub>k</sub> = ½ · 1000 · 400 = 200 000 J = 200 kJ. At 40 m/s it would be 800 kJ. To stop it within 40 m, friction must do −200 000 J of work: the average braking force is 200000/40 = 5000 N.</p>`
    },
    {
      type: "text",
      title: "Potential energy",
      html: `<p>A raised object or a compressed spring can give back work even when they are not moving: they have <b>potential energy</b>, energy linked to <b>position</b> (or configuration). This applies to <b>conservative forces</b>, those whose work does not depend on the path but only on the initial and final positions (weight, elastic force, gravitation, electric force).</p>
<ul>
<li><b>Gravitational potential energy</b> (near the Earth): <b>U = m · g · h</b>, with h the height above a reference level chosen at will (only the difference matters). The work done by weight is W = −ΔU;</li>
<li><b>Elastic potential energy</b> of a spring with constant k deformed by x: <b>U = ½ · k · x²</b>.</li>
</ul>
<p><b>Friction</b>, on the other hand, is a <b>dissipative</b> force: the work it does depends on the path (more distance, more negative work) and it turns mechanical energy into thermal energy.</p>`
    },
    {
      type: "svg",
      title: "Roller coasters and energy",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<path d="M30 60 C 120 60 170 250 280 250 C 390 250 420 130 470 130 C 520 130 540 190 610 190" fill="none" stroke="#475569" stroke-width="4"/>
<circle cx="45" cy="60" r="11" fill="#dc2626"/>
<circle cx="280" cy="250" r="11" fill="#dc2626"/>
<circle cx="470" cy="130" r="11" fill="#dc2626"/>
<text x="60" y="40" font-size="15" fill="#0f172a">A: all U (v ≈ 0)</text>
<text x="215" y="285" font-size="15" fill="#0f172a">B: all Ek (h = 0)</text>
<text x="395" y="105" font-size="15" fill="#0f172a">C: some U, some Ek</text>
<rect x="30" y="85" width="60" height="14" fill="#2563eb"/>
<rect x="30" y="103" width="2" height="14" fill="#16a34a"/>
<rect x="330" y="215" width="2" height="14" fill="#2563eb"/>
<rect x="330" y="233" width="60" height="14" fill="#16a34a"/>
<text x="95" y="97" font-size="14" fill="#2563eb">U</text>
<text x="40" y="132" font-size="14" fill="#16a34a">Ek</text>
<text x="400" y="228" font-size="14" fill="#2563eb">U</text>
<text x="395" y="246" font-size="14" fill="#16a34a">Ek</text>
</g>
</svg>`,
      caption: "Without friction the sum U + Ek stays constant: at the top it is all potential, at the bottom all kinetic."
    },
    {
      type: "remember",
      title: "Conservation of mechanical energy",
      html: `<p>If <b>only conservative forces</b> act (or the others do no work), mechanical energy <b>E = E<sub>k</sub> + U</b> is conserved: <b>½mv₁² + mgh₁ = ½mv₂² + mgh₂</b>.</p>
<p>If dissipative forces act: <b>E<sub>final</sub> = E<sub>initial</sub> + W<sub>friction</sub></b> (with W<sub>friction</sub> negative): mechanical energy decreases, but the <b>total</b> energy (including the heat produced) stays constant. This is the <b>principle of conservation of energy</b>, confirmed by every experiment so far.</p>`
    },
    {
      type: "example",
      title: "Falling, pendulum and spring",
      html: `<p><b>Falling.</b> A stone falls from 20 m, starting at rest. Conservation: mgh = ½mv², so v = √(2gh) = √(2 · 9.8 · 20) ≈ <b>19.8 m/s</b> (about 71 km/h). The mass cancels out: it holds for every body, and it is Galileo's idea in energy form.</p>
<p><b>Pendulum.</b> A 1 m pendulum, released from 20 cm above its lowest point, passes through it with v = √(2 · 9.8 · 0.2) ≈ 1.98 m/s. The tension in the string is always perpendicular to the displacement and does no work.</p>
<p><b>Spring.</b> A spring with k = 200 N/m, compressed by 0.10 m, stores U = ½ · 200 · 0.01 = 1 J. If it pushes a 20 g ball along a smooth surface, it launches it at v = √(2 · 1/0.02) = <b>10 m/s</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Calories, joules and energy bars",
      html: `<p>The food calorie (kcal) is about 4186 J. A 200 kcal bar therefore contains about 837 kJ of energy: in theory, enough to lift a mass of over 85 tonnes by 1 m! But our body has an efficiency of about 20-25% and uses energy even at rest, which is why the effort is much greater than the "useful work" we do. It was James Prescott Joule, in the 1840s, who showed with his experiments (paddles stirring water) that mechanical work and heat are two forms of the same quantity, energy: the unit is named after him.</p>`
    },
    {
      type: "curiosity",
      title: "A dam is a water battery",
      html: `<p>One cubic metre of water (1000 kg) falling through a height difference of 100 m releases mgh = 1000 · 9.8 · 100 ≈ 980 000 J, about 0.27 kWh. Hydroelectric power stations convert potential energy into kinetic energy (water in the pipes) and then into electrical energy (in the turbines) in exactly this way. Some, called "pumped storage" plants, pump water back up into the upper reservoir at times of low demand, to reuse it at peak times: they are real gravitational batteries.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand it",
      intro: "Work and energy are abstract ideas: here are some useful analogies.",
      tabs: [
        { label: "🏦 The bank account", html: "<p>Imagine energy as an <b>account</b> with several \"pockets\": kinetic, potential, thermal. Work is a <b>transfer</b> from one pocket to another (or from outside into the system). The conservation principle says that the total never changes: you can only move the money around. Friction is a transfer that sends mechanical energy into the \"heat\" pocket, from which it is very hard to get it back.</p>" },
        { label: "🎢 On the track", html: "<p>To solve a problem about motion along a frictionless track you do not need to know the shape of the track: the heights are enough. If you start at rest from height h₁ and arrive at height h₂, ½mv² = mg(h₁ − h₂). Surprisingly, the speed does not depend on the route chosen (gentle ramp or steep slide), only on the vertical drop. The route matters only for the <b>time</b> taken.</p>" },
        { label: "📊 The area under the graph", html: "<p>If you plot the force F against the displacement s, the work is the <b>area under the curve</b>. For a constant force it is a rectangle (F · s); for a spring (F = k·x) it is a triangle: area = ½ · x · (k·x) = ½ k x², which is exactly the elastic potential energy.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><line x1="60" y1="220" x2="540" y2="220" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="60" y2="30" stroke="#475569" stroke-width="2"/><polygon points="60,220 400,220 400,70" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><line x1="60" y1="220" x2="440" y2="50" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/><text x="400" y="244" font-size="15" fill="#0f172a" text-anchor="middle">x</text><text x="535" y="240" font-size="15" fill="#0f172a">extension</text><text x="70" y="40" font-size="15" fill="#0f172a">F = kx</text><text x="300" y="195" font-size="16" fill="#166534" font-weight="bold">area = ½·k·x²</text></g></svg>` }
      ]
    },
    {
      type: "quiz",
      title: "Check: energy",
      questions: [
        { type: "num", q: "An 80 kg cyclist (including bike) is travelling at 10 m/s. Calculate the kinetic energy.", answer: 4000, tol: 1, unit: "J", explain: "Ek = ½ · 80 · 100 = 4000 J." },
        { type: "mc", q: "If a body's speed triples, its kinetic energy...", options: ["Triples", "Becomes 6 times as large", "Becomes 9 times as large", "Stays the same"], answer: 2, explain: "Ek depends on v²: 3² = 9." },
        { type: "num", q: "A 2 kg ball is 5 m above the ground (g = 10 m/s²). What is its potential energy relative to the ground?", answer: 100, tol: 0.5, unit: "J", explain: "U = m·g·h = 2 · 10 · 5 = 100 J." }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of work and energy",
      nodes: [
        { id: "lavoro", label: "Work", x: 15, y: 12, color: "#2563eb", html: "W = F·s·cos θ: transfer of energy by means of a force.", why: "The concept was born in the 19th century with the engineering of steam engines: Coriolis (1829) and Poncelet introduced the term \"work\" to measure how much useful effect a machine produces." },
        { id: "potenza", label: "Power", x: 50, y: 12, color: "#f59e0b", html: "P = W/Δt: work per unit time, in watts.", why: "Watt defined it by comparing his engines with the work of draught horses: hence horsepower. The cost and performance of an engine depend on its power, not just on the work." },
        { id: "cin", label: "Kinetic energy", x: 85, y: 12, color: "#16a34a", html: "Ek = ½mv²: energy of motion.", why: "Leibniz already spoke of \"vis viva\" (living force) mv²; the factor ½ and the name \"kinetic energy\" came in the 19th century (Coriolis, Thomson/Kelvin). It is obtained by integrating the second law over distance." },
        { id: "pot", label: "Potential energy", x: 20, y: 50, color: "#ef4444", html: "U = mgh and U = ½kx²: energy of position.", why: "It exists only for conservative forces, i.e. those whose work is independent of the path: the force derives from a potential energy. The term was introduced by Rankine (1853)." },
        { id: "teo", label: "Work-energy theorem", x: 78, y: 50, color: "#a855f7", html: "W_tot = ΔEk.", why: "It is proved from Newton's second law: F·s = m·a·s = ½mv² − ½mv₀². It is an equivalent way of stating F = ma, useful when you know displacements rather than times." },
        { id: "cons", label: "Conservation of energy", x: 50, y: 88, color: "#0ea5e9", html: "In an isolated system the total energy is constant.", why: "It was established in the mid-19th century by Mayer, Joule, Helmholtz and others studying heat, work, electricity and living things. With Joule's experiment (1845) on the mechanical equivalent of heat, energy became the unifying concept of physics." }
      ],
      edges: [["lavoro", "potenza", "over time gives"], ["lavoro", "cin", "if resultant: ΔEk ="], ["lavoro", "pot", "conservative forces: −ΔU ="], ["cin", "cons", "adds up with"], ["pot", "cons", "adds up with"], ["teo", "cons", "leads to"]]
    }
  ],
  glossary: [
    { t: "Work", d: "Scalar quantity W = F·s·cos θ, measured in joules." },
    { t: "Joule (J)", d: "Unit of energy and work: 1 J = 1 N·m." },
    { t: "Power", d: "Work done per unit time: P = W/Δt, in watts." },
    { t: "Kinetic energy", d: "Energy due to motion: Ek = ½mv²." },
    { t: "Potential energy", d: "Energy linked to position (gravitational, mgh) or to deformation (elastic, ½kx²)." },
    { t: "Conservative force", d: "A force whose work does not depend on the path, only on the initial and final points." },
    { t: "Dissipative force", d: "A force, such as friction, that turns mechanical energy into heat." },
    { t: "Mechanical energy", d: "The sum of kinetic and potential energy." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "When is the work done by a force zero?", options: ["When F is perpendicular to the displacement", "When the force is small", "When the body moves fast", "Never"], answer: 0, explain: "W = F·s·cos θ is zero for θ = 90°, or if s = 0 or F = 0." },
      { type: "num", q: "A force of 20 N at 60° to the displacement acts over 10 m. Calculate the work done.", answer: 100, tol: 0.5, unit: "J", explain: "W = 20 · 10 · cos 60° = 200 · 0.5 = 100 J." },
      { type: "num", q: "A crane lifts 500 kg by 10 m in 20 s (g = 10 m/s²). What is the minimum power?", answer: 2500, tol: 5, unit: "W", explain: "W = mgh = 500 · 10 · 10 = 50 000 J; P = 50 000/20 = 2500 W." },
      { type: "num", q: "Converting: how many joules are there in 2 kWh?", answer: 7200000, tol: 1000, unit: "J", explain: "1 kWh = 3.6 · 10⁶ J, so 2 kWh = 7.2 · 10⁶ J." },
      { type: "tf", q: "Doubling a car's speed doubles its kinetic energy.", answer: false, explain: "Ek ∝ v²: doubling v quadruples Ek." },
      { type: "num", q: "A 4 kg body goes from 2 m/s to 6 m/s. Calculate the total work done on the body.", answer: 64, tol: 0.5, unit: "J", explain: "W = ½·4·(36 − 4) = 2 · 32 = 64 J." },
      { type: "num", q: "A ball is dropped from 5 m (g = 10 m/s², no friction). At what speed does it hit the ground?", answer: 10, tol: 0.1, unit: "m/s", explain: "v = √(2gh) = √(100) = 10 m/s." },
      { type: "mc", q: "What happens to the mechanical energy of a body sliding with friction?", options: ["It stays constant", "It increases", "It decreases, turning into heat", "It vanishes into nothing"], answer: 2, explain: "Friction does negative work: mechanical energy is turned into thermal energy; total energy is conserved." },
      { type: "tf", q: "Gravitational potential energy depends on the choice of reference level, but its changes do not.", answer: true, explain: "Only differences matter: ΔU = mgΔh does not depend on the chosen zero." },
      { type: "order", q: "Order from least to most energy (same 1 kg body).", items: ["At rest on the ground", "At rest 1 m up (g = 10)", "At rest 5 m up", "Moving at 12 m/s on the ground"], explain: "At rest on the ground: 0 J; at 1 m: mgh = 10 J; at 5 m: 50 J; moving at 12 m/s: ½·1·144 = 72 J." }
    ]
  }
});
