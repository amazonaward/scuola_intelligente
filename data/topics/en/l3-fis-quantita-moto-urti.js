TOPIC('en', {
  id: "l3-fis-quantita-moto-urti",
  title: "Momentum and collisions",
  intro: "Why is it much more dangerous to be hit by a lorry than by a bicycle, even if they are going at the same speed? And why does an airbag save lives? The answer lies in a quantity that combines mass and velocity: <b>momentum</b>. In this lesson we discover that, in an isolated system, momentum is <b>conserved</b>, and we use this law to analyse <b>collisions</b>, from billiard balls to car crashes.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Momentum",
      html: `<p>In your first two years you studied the laws of dynamics with the formula F = m·a. Now we rewrite it in a more general way. The <b>momentum</b> (or linear momentum) of a body of mass m and velocity v⃗ is defined as the vector</p>
<p style="text-align:center"><b>p⃗ = m · v⃗</b></p>
<ul>
<li>It is a <b>vector</b> quantity: it has the same direction as the velocity.</li>
<li>It is measured in <b>kg·m/s</b> (it has no special name in the International System).</li>
<li>It depends on both mass and velocity: a slow lorry and a fast bullet can have comparable momenta.</li>
</ul>
<p>In the original formulation of the <i>Principia</i> (1687) Newton does not write F = m·a, but states that force is related to the <b>change in momentum</b>:</p>
<p style="text-align:center"><b>F⃗<sub>net</sub> = Δp⃗ / Δt</b></p>
<p>If the mass is constant, Δp = m·Δv and we get back F = m·Δv/Δt = m·a. The form with momentum, however, is more general (it also holds when the mass changes, as for a rocket burning fuel) and, unlike F = m·a, it remains valid in relativity too.</p>`
    },
    {
      type: "example",
      title: "Lorry, car, bullet",
      html: `<p>Let us calculate the momentum of three objects:</p>
<ul>
<li>a 10 000 kg lorry at 10 m/s (36 km/h): p = 10 000 × 10 = <b>100 000 kg·m/s</b>;</li>
<li>a 1000 kg car at 25 m/s (90 km/h): p = 1000 × 25 = <b>25 000 kg·m/s</b>;</li>
<li>a 10 g bullet at 400 m/s: p = 0.010 × 400 = <b>4 kg·m/s</b>.</li>
</ul>
<p>Even though the bullet is extremely fast, its momentum is small because its mass is small. This is why the lorry, although slow, is much harder to stop: it needs an enormous change in momentum.</p>`
    },
    {
      type: "text",
      title: "The impulse of a force",
      html: `<p>Rearranging Newton's formula gives the <b>impulse–momentum theorem</b>:</p>
<p style="text-align:center"><b>J⃗ = F⃗ · Δt = Δp⃗ = m·v⃗<sub>f</sub> − m·v⃗<sub>i</sub></b></p>
<p>The product of the (average) force and the duration of the interaction is called the <b>impulse</b> J (unit: <b>N·s</b>, equivalent to kg·m/s). It tells us: <b>to change the momentum of a body, what matters is not only how hard you push it, but also for how long</b>.</p>
<p>If the force is not constant, the impulse is the <b>area under the force–time graph</b>. When you kick a ball the force rises in an instant (to over a thousand newtons) and then drops, all in just about 10 ms.</p>
<p>This idea has huge practical consequences: for the same change in momentum (same Δp), if you <b>lengthen the time</b> of the interaction the average force <b>decreases</b>. Airbags, the crumple zones of cars, helmets, the high jumper's landing mat and bending your knees when you land all work this way.</p>`
    },
    {
      type: "svg",
      title: "Impulse: the area under the F(t) curve",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="60" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#334155" stroke-width="3"/>
<text x="310" y="288" font-size="15" text-anchor="middle" fill="#334155">time t</text>
<text x="25" y="140" font-size="15" fill="#334155" transform="rotate(-90 25 140)" text-anchor="middle">force F</text>
<path d="M120 250 Q 180 40 240 250 Z" fill="#fca5a5" stroke="#dc2626" stroke-width="4"/>
<path d="M300 250 Q 380 150 460 250 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="4"/>
<text x="180" y="190" font-size="15" fill="#7f1d1d" text-anchor="middle" font-weight="bold">hard impact</text>
<text x="180" y="210" font-size="14" fill="#7f1d1d" text-anchor="middle">large F, short Δt</text>
<text x="380" y="215" font-size="15" fill="#1e3a8a" text-anchor="middle" font-weight="bold">with airbag</text>
<text x="380" y="235" font-size="14" fill="#1e3a8a" text-anchor="middle">small F, long Δt</text>
<text x="330" y="60" font-size="15" fill="#0f172a">The two areas are equal:</text>
<text x="330" y="82" font-size="15" fill="#0f172a">same impulse, same Δp</text>
</g>
</svg>`,
      caption: "The two areas are equal: the same impulse can be obtained with a large, brief force or with a small, long-lasting one."
    },
    {
      type: "example",
      title: "Kicking a ball and the airbag",
      html: `<p><b>Ball.</b> A 0.43 kg ball at rest leaves at 20 m/s after a kick. Δp = 0.43 × 20 = 8.6 kg·m/s. If the contact lasts 0.010 s, the average force is F = 8.6/0.010 = <b>860 N</b>: about the weight of an 88 kg man, but for a hundredth of a second.</p>
<p><b>Airbag.</b> A 70 kg driver travelling at 14 m/s (≈50 km/h) is brought to a stop in a crash: Δp = 70 × 14 = 980 kg·m/s. Against the rigid steering wheel the stop lasts 0.02 s: F ≈ 49 000 N, the weight of about 5 tonnes. With the airbag the body slows down over 0.20 s: F ≈ <b>4900 N</b>, ten times less. The impulse is the same, but the force is reduced because it lasted longer.</p>`
    },
    {
      type: "quiz",
      title: "Check: momentum and impulse",
      questions: [
        { type: "num", q: "What is the momentum of a bicycle and rider, total mass 80 kg, travelling at 5 m/s?", answer: 400, tol: 0, unit: "kg·m/s", explain: "p = m·v = 80 × 5 = 400 kg·m/s." },
        { type: "num", q: "A kick gives a 0.5 kg ball a velocity of 16 m/s. The contact lasts 0.01 s. What is the average force?", answer: 800, tol: 0, unit: "N", explain: "Δp = 0.5 × 16 = 8 kg·m/s; F = Δp/Δt = 8/0.01 = 800 N." },
        { type: "mc", q: "Why does bending your knees when you land from a jump hurt less?", options: ["It reduces your momentum", "It lengthens the stopping time and so reduces the force", "It reduces the mass of your body", "It increases gravity"], answer: 1, explain: "The Δp to be cancelled is the same, but if Δt is longer the average force F = Δp/Δt is smaller." }
      ]
    },
    {
      type: "text",
      title: "Conservation of momentum",
      html: `<p>Consider two bodies interacting with each other (they collide, push each other apart, couple together). By Newton's <b>third law</b>, during the interaction body 1 exerts a force F⃗<sub>12</sub> on body 2 and body 2 exerts the opposite force F⃗<sub>21</sub> = −F⃗<sub>12</sub> on body 1, for the <b>same time interval</b> Δt. So the two impulses are equal and opposite:</p>
<p style="text-align:center">Δp⃗<sub>1</sub> = −Δp⃗<sub>2</sub> &nbsp;&nbsp;⟹&nbsp;&nbsp; Δ(p⃗<sub>1</sub> + p⃗<sub>2</sub>) = 0</p>
<p>The total momentum does not change. This is the <b>principle of conservation of momentum</b>:</p>
<p style="text-align:center"><b>in an isolated system (or one in which the resultant of the external forces is zero) the total momentum is constant:<br>m<sub>1</sub>v⃗<sub>1</sub> + m<sub>2</sub>v⃗<sub>2</sub> = m<sub>1</sub>v⃗'<sub>1</sub> + m<sub>2</sub>v⃗'<sub>2</sub></b></p>
<p>Note the three key points:</p>
<ul>
<li>it is a <b>vector</b> law: it holds component by component (x and y);</li>
<li>it holds even when the internal forces are <b>very complicated</b> or unknown: you do not need to know them;</li>
<li>in real collisions the internal forces are much larger than the external ones (such as friction) and last a very short time: during the collision the system can be treated as isolated.</li>
</ul>`
    },
    {
      type: "example",
      title: "Recoil and the skaters",
      html: `<p><b>Recoil.</b> A 4.0 kg rifle, initially at rest, fires a 10 g bullet at 400 m/s. Before the shot the total momentum is zero; afterwards it must still be zero: 0.010 × 400 + 4.0 × V = 0 ⟹ V = −4/4.0 = <b>−1.0 m/s</b>. The rifle recoils at 1 m/s in the opposite direction: its velocity is small because its mass is large.</p>
<p><b>Two skaters.</b> Two skaters standing still on ice, of 60 kg and 40 kg, push each other. If the first moves off at 2.0 m/s, the second goes the opposite way with: 60 × 2.0 = 40 × v ⟹ v = <b>3.0 m/s</b>. The lighter one gains the greater speed.</p>
<p>The same principle explains the <b>rocket</b>: it expels gas downwards at high speed and, to conserve momentum, the rocket gains momentum upwards. It does not need to "push against" the air: it works in the vacuum of space too.</p>`
    },
    {
      type: "text",
      title: "Collisions: three families",
      html: `<p>A <b>collision</b> is a very short, intense interaction between two or more bodies. In every collision in an isolated system the <b>total momentum is conserved</b>. What changes is what happens to the <b>kinetic energy</b>:</p>
<table>
<tr><th>Type of collision</th><th>Momentum</th><th>Kinetic energy</th><th>Examples</th></tr>
<tr><td><b>Elastic</b></td><td>conserved</td><td><b>conserved</b></td><td>billiard balls, collisions between gas molecules, Newton's cradle (to a good approximation)</td></tr>
<tr><td><b>Inelastic</b></td><td>conserved</td><td><b>decreases</b> (it turns into heat, sound, deformation)</td><td>two cars that crash and partly bounce apart</td></tr>
<tr><td><b>Perfectly inelastic</b></td><td>conserved</td><td>decreases by the <b>maximum</b> possible amount: the bodies stick together</td><td>a bullet that stays embedded in a block, two railway wagons coupling</td></tr>
</table>
<p>Total energy is always conserved; it is the <b>kinetic energy</b> that in inelastic collisions is partly transformed into internal energy (a rise in temperature, permanent deformation). This is why a crash between two cars is so devastating: much of the kinetic energy goes into deforming the bodywork.</p>`
    },
    {
      type: "widget",
      title: "What type of collision?",
      widget: "classify",
      options: { groups: ["Elastic (approximately)", "Perfectly inelastic"], items: [
        ["Two billiard balls", 0],
        ["A bullet that embeds itself in a wooden block", 1],
        ["Two railway wagons coupling", 1],
        ["A tennis ball against a rigid wall", 0],
        ["Two gas molecules", 0],
        ["A lump of clay that falls and sticks to the floor", 1]
      ] },
      caption: "If the bodies stay together after the collision, it is perfectly inelastic."
    },
    {
      type: "text",
      title: "Perfectly inelastic collisions",
      html: `<p>After the collision the two bodies move together with the same velocity V. From conservation of momentum (in one dimension):</p>
<p style="text-align:center"><b>m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = (m<sub>1</sub> + m<sub>2</sub>) · V &nbsp;⟹&nbsp; V = (m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>)</b></p>
<p>The velocities must be entered <b>with their sign</b> (positive in one direction, negative in the other).</p>
<p><b>Example.</b> A 20 000 kg wagon at 3.0 m/s hits a stationary 10 000 kg wagon and couples to it. V = (20 000 × 3.0 + 0)/(30 000) = <b>2.0 m/s</b>. Kinetic energy before: ½·20 000·9 = 90 000 J; after: ½·30 000·4 = 60 000 J. 30 000 J (one third) has been "lost", transformed into deformation, heat and sound.</p>
<p><b>The ballistic pendulum.</b> A bullet of mass m embeds itself in a large block of mass M hanging from a string. The collision is perfectly inelastic: momentum is conserved and gives V = m·v/(m+M). Immediately after the collision, however, the block swings up like a pendulum and <b>mechanical energy is conserved</b>: ½(m+M)V² = (m+M)·g·h. By measuring the height h reached we can work out the velocity v of the bullet, which would otherwise be very hard to measure. This is why we say that the collision conserves momentum but not energy, while the swing that follows conserves energy.</p>`
    },
    {
      type: "text",
      title: "Elastic collisions in one dimension",
      html: `<p>In an elastic collision <b>two</b> quantities are conserved: momentum and kinetic energy. With two equations we can find the two final velocities. For two bodies of masses m<sub>1</sub> and m<sub>2</sub> moving along a line we get:</p>
<p style="text-align:center">v'<sub>1</sub> = [(m<sub>1</sub> − m<sub>2</sub>)·v<sub>1</sub> + 2·m<sub>2</sub>·v<sub>2</sub>] / (m<sub>1</sub> + m<sub>2</sub>)<br>v'<sub>2</sub> = [(m<sub>2</sub> − m<sub>1</sub>)·v<sub>2</sub> + 2·m<sub>1</sub>·v<sub>1</sub>] / (m<sub>1</sub> + m<sub>2</sub>)</p>
<p>A remarkable consequence: in an elastic collision the <b>relative velocity is reversed</b> (v'<sub>2</sub> − v'<sub>1</sub> = −(v<sub>2</sub> − v<sub>1</sub>)): the bodies move apart as fast as they were approaching.</p>
<p>Three special cases worth knowing (body 2 initially at rest, v<sub>2</sub> = 0):</p>
<ul>
<li><b>equal masses</b> (m<sub>1</sub> = m<sub>2</sub>): v'<sub>1</sub> = 0 and v'<sub>2</sub> = v<sub>1</sub>. The balls <b>exchange velocities</b>: the cue ball stops and the ball it hits moves off (a head-on shot in billiards);</li>
<li><b>the moving body is much heavier</b> (m<sub>1</sub> ≫ m<sub>2</sub>): the heavy body carries on almost as before, the light one moves off at about 2·v<sub>1</sub>;</li>
<li><b>the moving body is much lighter</b> (m<sub>1</sub> ≪ m<sub>2</sub>): it bounces back with a velocity of about −v<sub>1</sub> and the heavy body stays almost still (a ball against a wall).</li>
</ul>
<p>In Newton's cradle, when you let one ball drop, just one ball leaves at the other end: it is the exchange of velocities between equal masses. With two balls, two leave, and so on.</p>`
    },
    {
      type: "svg",
      title: "Before and after the collision",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="qaR" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="qaB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<text x="20" y="30" font-size="16" fill="#0f172a" font-weight="bold">BEFORE</text>
<line x1="20" y1="110" x2="580" y2="110" stroke="#94a3b8" stroke-width="2"/>
<circle cx="130" cy="80" r="30" fill="#ef4444"/>
<text x="130" y="86" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">m1</text>
<line x1="170" y1="80" x2="260" y2="80" stroke="#dc2626" stroke-width="5" marker-end="url(#qaR)"/>
<text x="215" y="66" font-size="15" fill="#991b1b" text-anchor="middle">v1</text>
<circle cx="400" cy="80" r="30" fill="#3b82f6"/>
<text x="400" y="86" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">m2</text>
<text x="400" y="132" font-size="15" fill="#1e3a8a" text-anchor="middle">at rest</text>
<text x="20" y="180" font-size="16" fill="#0f172a" font-weight="bold">AFTER (equal masses, elastic collision)</text>
<line x1="20" y1="260" x2="580" y2="260" stroke="#94a3b8" stroke-width="2"/>
<circle cx="250" cy="230" r="30" fill="#ef4444"/>
<text x="250" y="236" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">m1</text>
<text x="250" y="282" font-size="15" fill="#991b1b" text-anchor="middle">at rest</text>
<circle cx="440" cy="230" r="30" fill="#3b82f6"/>
<text x="440" y="236" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">m2</text>
<line x1="480" y1="230" x2="570" y2="230" stroke="#2563eb" stroke-width="5" marker-end="url(#qaB)"/>
<text x="525" y="216" font-size="15" fill="#1e3a8a" text-anchor="middle">v2 = v1</text>
</g>
</svg>`,
      caption: "Head-on elastic collision between equal masses: the first ball stops and the second moves off with the velocity of the first."
    },
    {
      type: "example",
      title: "An elastic collision with numbers",
      html: `<p>A 2.0 kg ball moving at 6.0 m/s collides head-on, elastically, with a stationary 4.0 kg ball. Calculate the velocities after the collision.</p>
<p>v'<sub>1</sub> = (2 − 4)·6/(2 + 4) = −12/6 = <b>−2.0 m/s</b> (it bounces back)<br>
v'<sub>2</sub> = 2·2·6/(2 + 4) = 24/6 = <b>+4.0 m/s</b></p>
<p><b>Check.</b> Momentum before: 2·6 = 12; after: 2·(−2) + 4·4 = −4 + 16 = 12 ✓. Kinetic energy before: ½·2·36 = 36 J; after: ½·2·4 + ½·4·16 = 4 + 32 = 36 J ✓. The relative velocity has also been reversed: before, 6 m/s of approach; after, 6 m/s of separation (4 − (−2) = 6).</p>`
    },
    {
      type: "quiz",
      title: "Check: collisions",
      questions: [
        { type: "num", q: "A 1000 kg car at 20 m/s runs into the back of a stationary 1000 kg car and they stay locked together. What is their velocity immediately afterwards?", answer: 10, tol: 0, unit: "m/s", explain: "V = (1000·20)/(2000) = 10 m/s." },
        { type: "mc", q: "In a head-on elastic collision between two identical balls, one at rest, what happens?", options: ["They both stop", "They both bounce back", "The first stops and the second moves off with the velocity of the first", "They move on together at half the speed"], answer: 2, explain: "With equal masses and an elastic collision the velocities are exchanged." },
        { type: "tf", q: "In a perfectly inelastic collision the total momentum is not conserved.", answer: false, explain: "Momentum is conserved in every collision in an isolated system; what is not conserved is kinetic energy." }
      ]
    },
    {
      type: "text",
      title: "Collisions in two dimensions and the centre of mass",
      html: `<p>If the bodies do not collide "head-on", after the collision they move in different directions. In billiards, for example, the ball that is hit moves off in another direction. Conservation of momentum still holds, but as a <b>vector</b> law: it is written separately for the components along x and along y:</p>
<p style="text-align:center">Σp<sub>x</sub> (before) = Σp<sub>x</sub> (after), &nbsp;&nbsp; Σp<sub>y</sub> (before) = Σp<sub>y</sub> (after)</p>
<p>An elegant result: in a glancing (not head-on) elastic collision between two balls of <b>equal mass</b>, one of them at rest, after the collision the two balls move off along directions <b>perpendicular</b> to each other. Billiard players know this well.</p>
<p>A useful quantity for studying systems of several bodies is the <b>centre of mass</b>, the point whose position is the average of the positions weighted by the masses. For bodies colliding with no external forces, the centre of mass moves with <b>uniform motion in a straight line</b>, whatever happens in the collision: the total momentum is M·v⃗<sub>CM</sub>. A firework exploding in mid-air is another good example: the fragments fly in all directions, but their centre of mass carries on along the parabola that the whole firework would have followed (neglecting air resistance).</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand momentum",
      intro: "An abstract concept becomes clear through different analogies. Choose the one that works best for you.",
      tabs: [
        {
          label: "💰 The bank account",
          html: "<p>Think of momentum as <b>capital</b> that two people exchange. In the interaction, what body 1 \"loses\" body 2 \"gains\": the money passes from one pocket to the other but the total does not change. The only way to change the total is an outside intervention (an external force), like a deposit or a withdrawal from outside.</p><p>The <b>impulse</b> is the cheque being passed over: the size of the transfer. The impulse–momentum theorem says that what a body gains is equal to the \"price\" F·Δt.</p>"
        },
        {
          label: "🎱 The role of the masses",
          html: "<p>Change the mass of the ball being hit and see what the formulas say (elastic collision, target at rest, v<sub>1</sub> = 6 m/s):</p><ul><li>m<sub>1</sub> = m<sub>2</sub>: v'<sub>1</sub> = 0, v'<sub>2</sub> = 6 m/s (exchange of velocities);</li><li>m<sub>2</sub> = 3·m<sub>1</sub>: v'<sub>1</sub> = −3 m/s, v'<sub>2</sub> = +3 m/s (the light one <b>bounces back</b>);</li><li>m<sub>1</sub> = 3·m<sub>2</sub>: v'<sub>1</sub> = +3 m/s, v'<sub>2</sub> = +9 m/s (the heavy one <b>launches</b> the light one forward at more than its own speed).</li></ul><p>A ball that hits a wall bounces back; a lorry that hits a ball sends it off at almost twice its own speed.</p>"
        },
        {
          label: "🚀 The rocket and the ball",
          html: "<p>Sit on a trolley holding a heavy ball. If you throw it forwards, the trolley (with you on it) moves backwards. No support is needed: the total momentum (trolley + you + ball) was zero and stays zero. A rocket does the same by throwing out a huge amount of gas every second: each bit carries momentum downwards, and the rocket gains the same amount upwards.</p><p>So it can \"push\" even in a vacuum, where there is no air to push against: this answers the common mistake that rockets push against the air.</p>"
        },
        {
          label: "🔗 Match quantity and formula",
          html: "<p>Match each quantity or law to its expression.</p>",
          widget: "match",
          options: { pairs: [
            ["Momentum", "p = m·v"],
            ["Impulse", "J = F·Δt = Δp"],
            ["Perfectly inelastic collision", "V = (m1v1 + m2v2)/(m1+m2)"],
            ["Isolated system", "total p constant"]
          ] }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Who first studied collisions?",
      html: `<p>In 1668 the Royal Society of London invited scientists to explain the laws of collision. Three of the greatest of the time answered: <b>John Wallis</b>, <b>Christopher Wren</b> and <b>Christiaan Huygens</b>. In his work Huygens realised that in an elastic collision a second quantity is conserved besides momentum, the one we now call kinetic energy (Leibniz's <i>vis viva</i>, "living force"). Before that, Descartes had proposed a law of conservation of momentum <i>without taking direction into account</i>, which was therefore wrong in some cases: understanding that momentum is a <b>vector</b> was the decisive step.</p>`
    },
    {
      type: "curiosity",
      title: "Newton's cradle and the limits of elastic collisions",
      html: `<p>Newton's cradle (the row of hanging steel balls) seems to defy physics when the balls keep swinging "for ever": in reality the collision is never perfectly elastic. At each collision a small part of the energy becomes heat and sound (the characteristic "click-clack"), and after a few minutes the device stops. Conservation of momentum, on the other hand, remains exact (apart from friction with the air and the strings): it is <b>more fundamental</b> than conservation of kinetic energy, which only holds in special cases.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of momentum and collisions",
      nodes: [
        { id: "p", label: "Momentum p = mv", x: 50, y: 8, color: "#2563eb", html: "A vector equal to the product of mass and velocity. It is measured in kg·m/s.", why: "Descartes introduced it as the \"quantity of motion\", a measure of the effect of an impact; Newton placed it at the centre of dynamics in the <i>Principia</i> (1687), where force is defined as the change in momentum." },
        { id: "impulso", label: "Impulse J = F·Δt", x: 15, y: 42, color: "#ef4444", html: "The product of the average force and the time it acts: it is equal to the change in momentum.", why: "It comes from the second law written as F = Δp/Δt. It explains why airbags and helmets reduce the force: by lengthening the time, the impulse stays the same." },
        { id: "terzo", label: "Third law", x: 50, y: 42, color: "#8b5cf6", html: "Action and reaction: equal and opposite forces between the two bodies.", why: "It is the deep reason for conservation: since the internal forces are equal and opposite and act for the same time, the impulses cancel and the total momentum does not change." },
        { id: "conserv", label: "Conservation of p", x: 85, y: 42, color: "#16a34a", html: "In an isolated system the total momentum is constant.", why: "It is linked to a symmetry of nature: invariance under translation in space (Noether's theorem, 1918). The laws of physics do not depend on \"where\" the experiment is done." },
        { id: "elastico", label: "Elastic collision", x: 25, y: 82, color: "#f59e0b", html: "Momentum and kinetic energy are conserved; the relative velocity is reversed.", why: "The forces involved are conservative (elastic forces between the surfaces): the kinetic energy is temporarily stored as elastic energy and then given back." },
        { id: "anelastico", label: "Inelastic collision", x: 75, y: 82, color: "#64748b", html: "Only momentum is conserved: part of the kinetic energy becomes internal energy.", why: "In real collisions kinetic energy \"disappears\" into deformation, heat and sound. The total energy is not lost (first law of thermodynamics), but it is dispersed in a form that is no longer mechanical." }
      ],
      edges: [["p", "impulso", "changes because of"], ["terzo", "conserv", "implies"], ["p", "conserv", "is conserved in"], ["conserv", "elastico", "holds in"], ["conserv", "anelastico", "holds in"], ["impulso", "terzo", "equal and opposite forces"]]
    }
  ],
  glossary: [
    { t: "Momentum", d: "The vector p = m·v, the product of mass and velocity. Unit: kg·m/s." },
    { t: "Impulse", d: "The product of the average force and the time interval, J = F·Δt, equal to the change in momentum. Unit: N·s." },
    { t: "Isolated system", d: "A system on which the resultant of the external forces is zero (or negligible)." },
    { t: "Elastic collision", d: "A collision in which both momentum and kinetic energy are conserved." },
    { t: "Inelastic collision", d: "A collision in which momentum is conserved but kinetic energy is not." },
    { t: "Perfectly inelastic collision", d: "A collision after which the bodies stick together and move with the same velocity." },
    { t: "Centre of mass", d: "The point where the mass of a system can be thought of as concentrated; its velocity is total p / M." },
    { t: "Recoil", d: "The backward motion of a firearm, a consequence of the conservation of momentum." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the SI unit of momentum?", options: ["kg·m/s²", "kg·m/s", "N·m", "kg·m²/s"], answer: 1, explain: "p = m·v, so kg × m/s." },
      { type: "num", q: "Calculate the momentum of a 1200 kg car travelling at 20 m/s.", answer: 24000, tol: 0, unit: "kg·m/s", explain: "p = 1200 × 20 = 24 000 kg·m/s." },
      { type: "num", q: "An average force of 500 N acts on a ball for 0.020 s. What is the impulse?", answer: 10, tol: 0, unit: "N·s", explain: "J = F·Δt = 500 × 0.020 = 10 N·s." },
      { type: "tf", q: "An airbag reduces the impulse the driver receives when brought to a stop.", answer: false, explain: "The impulse (change in momentum) is the same; the airbag lengthens the time and so reduces the average force." },
      { type: "num", q: "A 2 kg block moving at 6 m/s hits a stationary 4 kg block and they stick together. What is the final velocity?", answer: 2, tol: 0, unit: "m/s", explain: "V = (2·6)/(2+4) = 12/6 = 2 m/s." },
      { type: "mc", q: "In a head-on elastic collision between two equal masses, one at rest, the final velocity of the first is:", options: ["equal to its initial velocity", "half its initial velocity", "zero", "opposite to its initial velocity"], answer: 2, explain: "The two masses exchange velocities: the first one stops." },
      { type: "num", q: "A 4 kg rifle fires a 10 g bullet at 400 m/s. At what speed does the rifle recoil?", answer: 1, tol: 0.01, unit: "m/s", explain: "0 = 0.010·400 + 4·V ⟹ |V| = 4/4 = 1 m/s." },
      { type: "tf", q: "In an inelastic collision the total energy is not conserved.", answer: false, explain: "Total energy is always conserved: what decreases is the kinetic energy, which becomes internal energy (heat, deformation)." },
      { type: "num", q: "A 0.2 kg ball hits a wall at 10 m/s and bounces back at the same speed. What is the magnitude of the change in momentum?", answer: 4, tol: 0, unit: "kg·m/s", explain: "Δp = 0.2·10 − 0.2·(−10) = 4 kg·m/s: the direction changes, so the two contributions add up." },
      { type: "order", q: "Put in order of increasing momentum (approximately): 10 g bullet at 400 m/s, 80 kg cyclist at 5 m/s, 1000 kg car at 20 m/s, 10 t lorry at 10 m/s.", items: ["Bullet", "Cyclist", "Car", "Lorry"], explain: "p = 4, 400, 20 000 and 100 000 kg·m/s respectively." }
    ]
  }
});
