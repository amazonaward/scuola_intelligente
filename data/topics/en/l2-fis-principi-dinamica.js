TOPIC('en', {
  id: "l2-fis-principi-dinamica",
  title: "Newton's laws of motion",
  intro: "Why does a football stop rolling? Why are you pushed back into your seat when the car pulls away? For almost two thousand years, following Aristotle, people thought a body moves only if something keeps pushing it. Galileo and then <b>Isaac Newton</b> overturned this idea, and the three laws of motion (published in the <i>Philosophiae Naturalis Principia Mathematica</i>, 1687) are still the foundation of the mechanics we use to design bridges, cars and space probes.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "First law: inertia",
      html: `<p>In Aristotelian physics the "natural" state of bodies on Earth was rest. Galileo, with experiments on inclined planes and a famous thought experiment, realised that it is <b>friction</b> that stops bodies, not their nature. If a ball rolls down one inclined plane and up a second one, it reaches almost the same height; if you make the second plane less steep, the ball has to travel further and further; on a perfectly smooth horizontal plane it would never stop.</p>
<p><b>First law (law of inertia).</b> A body that is not acted on by forces, or is acted on by forces whose <b>resultant is zero</b>, stays at rest or keeps moving with uniform linear motion.</p>
<p>The tendency to keep one's state of motion is called <b>inertia</b>, and it is measured by <b>inertial mass</b>: more mass means it is harder to change the velocity. When a car brakes suddenly your body "carries on" forwards: it is not a force pushing you, it is the absence of a force on your body, until the seat belt steps in.</p>
<p>The law holds in <b>inertial frames of reference</b>: those in which the law itself is verified (a train moving at constant velocity is one; a car that is braking or turning is not).</p>`
    },
    {
      type: "example",
      title: "The glass and the tablecloth",
      html: `<p>If you pull a tablecloth sharply from under a glass, the glass stays (almost) where it is: the friction force acts for a very short time and cannot change its velocity noticeably. The more mass the glass has, the better the trick works.</p>
<p>On the ice of a skating rink you feel inertia very clearly: after one push you keep gliding for a long time, because friction is small. In space, far from stars and planets, a probe with its engines off keeps moving at constant velocity for millions of years: the Voyager 1 probe, launched in 1977, is an example.</p>`
    },
    {
      type: "text",
      title: "Second law: F = m · a",
      html: `<p>If the resultant of the forces is not zero, the velocity changes. <b>Second law.</b> The acceleration of a body is <b>directly proportional to the resultant force</b> and <b>inversely proportional to its mass</b>, with the same direction as the force:</p>
<p style="text-align:center"><b>F⃗<sub>res</sub> = m · a⃗</b></p>
<p>The unit of force is the <b>newton</b>: 1 N = 1 kg · m/s², the force that gives 1 kg an acceleration of 1 m/s². Some key points:</p>
<ul>
<li>what counts is the <b>resultant</b> (vector sum) of all the forces acting on the body;</li>
<li>for the same force, a body with more mass accelerates less;</li>
<li><b>weight</b> W = m·g is a special case: a body in free fall has acceleration g because the only force is its weight (F = m·g = m·a, so a = g for all bodies: the mass cancels out);</li>
<li>if a = 0 you get back the first law (equilibrium): the first law is therefore a special case of the second, but historically and logically it defines the inertial frames in which the second law holds.</li>
</ul>`
    },
    {
      type: "svg",
      title: "More force, more mass",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="dF" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="dA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="20" y1="120" x2="620" y2="120" stroke="#475569" stroke-width="3"/>
<rect x="80" y="70" width="60" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<text x="110" y="100" font-size="15" fill="#0f172a" text-anchor="middle">m</text>
<line x1="140" y1="95" x2="200" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#dF)"/>
<text x="150" y="60" font-size="15" fill="#dc2626" font-weight="bold">F</text>
<line x1="80" y1="140" x2="170" y2="140" stroke="#16a34a" stroke-width="4" marker-end="url(#dA)"/>
<text x="95" y="162" font-size="15" fill="#16a34a" font-weight="bold">a = F/m</text>
<line x1="20" y1="260" x2="620" y2="260" stroke="#475569" stroke-width="3"/>
<rect x="80" y="190" width="120" height="70" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<text x="140" y="232" font-size="15" fill="#0f172a" text-anchor="middle">2m</text>
<line x1="200" y1="225" x2="260" y2="225" stroke="#dc2626" stroke-width="4" marker-end="url(#dF)"/>
<text x="215" y="212" font-size="15" fill="#dc2626" font-weight="bold">F</text>
<line x1="80" y1="280" x2="125" y2="280" stroke="#16a34a" stroke-width="4" marker-end="url(#dA)"/>
<text x="135" y="285" font-size="15" fill="#16a34a" font-weight="bold">a/2</text>
<text x="330" y="100" font-size="16" fill="#0f172a">Same force, double mass:</text>
<text x="330" y="124" font-size="16" fill="#0f172a">half the acceleration</text>
</g>
</svg>`,
      caption: "Acceleration is proportional to force and inversely proportional to mass."
    },
    {
      type: "example",
      title: "Car, lift and inclined plane",
      html: `<p><b>Car.</b> A 1500 kg car accelerates under a net driving force of 3000 N: a = 3000/1500 = <b>2 m/s²</b>. In 5 s its velocity goes from 0 to 10 m/s.</p>
<p><b>Lift.</b> A 70 kg person stands on a scale in a lift (g = 9.8 m/s²). At rest: the scale reads 70 · 9.8 = 686 N (≈ 70 kg). If the lift <b>accelerates upwards</b> at 2 m/s²: N − mg = ma, N = 70 · (9.8 + 2) = <b>826 N</b> (you feel heavier). If it accelerates downwards at 2 m/s²: N = 70 · (9.8 − 2) = <b>546 N</b> (you feel lighter). If the cable snaps (free fall, a = g), N = 0: apparent weightlessness.</p>
<p><b>Smooth inclined plane.</b> On a frictionless 30° inclined plane, the acceleration along the plane is g · sin 30° = 9.8 · 0.5 = <b>4.9 m/s²</b>, independent of the mass.</p>`
    },
    {
      type: "quiz",
      title: "Check: first and second laws",
      questions: [
        { type: "mc", q: "A body moves at constant velocity along a straight line. What can be said about the resultant force?", options: ["It points in the direction of motion", "It is zero", "It is equal to the weight", "It is constant but not zero"], answer: 1, explain: "Constant velocity means zero acceleration, so the resultant is zero (first law)." },
        { type: "num", q: "What resultant force is needed to accelerate a 20 kg trolley at 3 m/s²?", answer: 60, tol: 0.1, unit: "N", explain: "F = m·a = 20 · 3 = 60 N." },
        { type: "tf", q: "A double mass, under the same force, has double the acceleration.", answer: false, explain: "a = F/m: with double the mass, the acceleration is halved." }
      ]
    },
    {
      type: "text",
      title: "Third law: action and reaction",
      html: `<p><b>Third law.</b> If a body A exerts a force on a body B, then B exerts on A a force of <b>equal magnitude, along the same line and in the opposite direction</b>: F⃗<sub>AB</sub> = −F⃗<sub>BA</sub>.</p>
<p>Two important points, which are often a source of mistakes:</p>
<ul>
<li>the two forces act on <b>different bodies</b>: that is why they do not cancel each other out (they would cancel only if they acted on the same body);</li>
<li>there is no "action first, then reaction": they arise together and are of the <b>same type</b> (two gravitational forces, two contact forces, etc.).</li>
</ul>
<p>If you push a wall with 100 N, the wall pushes you with 100 N. When you walk, your foot pushes the ground backwards and the ground pushes you forwards: it is this reaction (static friction) that moves you forward. A rocket pushes gases downwards and the gases push the rocket upwards, even in a vacuum where there is nothing to "push against".</p>
<p>The forces in an action-reaction pair have the same magnitude even if the bodies have different masses; but the accelerations are different: a = F/m. When the Earth pulls an apple with 1 N, the apple also pulls the Earth with 1 N, but the Earth's acceleration is negligible.</p>`
    },
    {
      type: "svg",
      title: "Force pairs: a book on a table",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="tP" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="tN" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="200" y="140" width="140" height="50" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="270" y="170" font-size="16" fill="#0f172a" text-anchor="middle">Book</text>
<rect x="120" y="190" width="300" height="30" fill="#d6d3d1" stroke="#57534e" stroke-width="3"/>
<text x="270" y="210" font-size="16" fill="#0f172a" text-anchor="middle">Table</text>
<line x1="270" y1="165" x2="270" y2="235" stroke="#dc2626" stroke-width="4" marker-end="url(#tP)"/>
<text x="285" y="245" font-size="15" fill="#dc2626" font-weight="bold">Weight W (Earth→book)</text>
<line x1="240" y1="140" x2="240" y2="70" stroke="#2563eb" stroke-width="4" marker-end="url(#tN)"/>
<text x="130" y="60" font-size="15" fill="#2563eb" font-weight="bold">N (table→book)</text>
<text x="450" y="150" font-size="15" fill="#0f172a">The book is at rest: W and N</text>
<text x="450" y="172" font-size="15" fill="#0f172a">balance, but they are NOT</text>
<text x="450" y="194" font-size="15" fill="#0f172a">action and reaction.</text>
<text x="450" y="226" font-size="15" fill="#0f172a">The reaction to N is the push</text>
<text x="450" y="248" font-size="15" fill="#0f172a">of the book on the table.</text>
</g>
</svg>`,
      caption: "Weight and the normal force act on the same body and balance each other: they do not form an action-reaction pair."
    },
    {
      type: "curiosity",
      title: "How can a horse pull a cart?",
      html: `<p>A classic paradox: "If the cart pulls the horse backwards with the same force with which the horse pulls the cart, how can they move?". The solution is that the two forces act on different bodies. The cart accelerates because the horse's force on it is greater than friction; the horse moves forward because it pushes on the ground with its hooves and the ground (reaction) pushes it forward more than the cart holds it back. To understand motion you must consider <b>all the forces on each body</b>.</p>`
    },
    {
      type: "remember",
      title: "The three laws in one line",
      html: `<p><b>1st</b>: if the resultant is zero, the motion does not change (inertia). <b>2nd</b>: F = m·a (the resultant causes acceleration). <b>3rd</b>: every force has its reaction, equal and opposite, <b>on another body</b>.</p>
<p>Method for problems: 1) draw the body and <b>all the forces acting on it</b>; 2) choose an axis and write the sum of the components equal to m·a; 3) solve for the unknown; 4) check units and order of magnitude.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand it",
      intro: "The second law is all here: force, mass and acceleration. Look at it through other images.",
      tabs: [
        { label: "🛒 The shopping trolley", html: "<p>Pushing an empty trolley is easy: little mass, large acceleration. With a full trolley the same push makes it start much more slowly (a = F/m). If two people push together in the same direction, the force doubles and so does the acceleration; if they push in opposite directions with the same force, the trolley does not move (zero resultant). Every time you \"feel\" you have to push harder to move something heavier, you are rediscovering F = m·a.</p>" },
        { label: "📈 The graph", html: "<p>If in a lab you measure a trolley's acceleration as the force changes (constant mass), the points lie on a <b>straight line through the origin</b>: a ∝ F. If you keep the force fixed and change the mass, the a–m graph is a <b>hyperbola</b>: a ∝ 1/m. The gradient of the a–F line is 1/m.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><line x1="60" y1="220" x2="320" y2="220" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="60" y2="30" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="290" y2="60" stroke="#16a34a" stroke-width="4"/><text x="300" y="236" font-size="15" fill="#0f172a">F</text><text x="40" y="40" font-size="15" fill="#0f172a">a</text><text x="190" y="248" font-size="15" fill="#16a34a" font-weight="bold">a ∝ F</text><line x1="360" y1="220" x2="580" y2="220" stroke="#475569" stroke-width="2"/><line x1="360" y1="220" x2="360" y2="30" stroke="#475569" stroke-width="2"/><path d="M375 40 Q 400 190 560 212" fill="none" stroke="#dc2626" stroke-width="4"/><text x="570" y="240" font-size="15" fill="#0f172a">m</text><text x="340" y="40" font-size="15" fill="#0f172a">a</text><text x="470" y="248" font-size="15" fill="#dc2626" font-weight="bold">a ∝ 1/m</text></g></svg>` },
        { label: "🚀 In space", html: "<p>An astronaut outside the space station who throws a hammer in one direction starts moving in the opposite direction: the third law. If the hammer has a mass of 2 kg and the astronaut with spacesuit 100 kg, since the two forces are equal the astronaut's acceleration is 50 times smaller than the hammer's (a = F/m). Total momentum is conserved: m₁v₁ + m₂v₂ = 0, so v_astronaut = −(2/100)·v_hammer. Neither air nor a floor is needed.</p>" }
      ]
    },
    {
      type: "quiz",
      title: "Check: action and reaction",
      questions: [
        { type: "mc", q: "What is the reaction to the weight force that the Earth exerts on an apple?", options: ["The push of the table on the apple", "The force with which the apple pulls the Earth", "Air resistance", "There isn't one"], answer: 1, explain: "The third law: if the Earth pulls the apple with W, the apple pulls the Earth with an equal and opposite force." },
        { type: "tf", q: "Action and reaction forces cancel out because they are equal and opposite.", answer: false, explain: "They act on different bodies, so they cannot be added together to give the resultant on a single body." },
        { type: "num", q: "A 50 kg person is in a lift accelerating upwards at 1 m/s² (g = 10 m/s²): what is the normal force from the floor?", answer: 550, tol: 1, unit: "N", explain: "N − mg = ma → N = m(g + a) = 50 · 11 = 550 N." }
      ]
    },
    {
      type: "curiosity",
      title: "Newton in 1687",
      html: `<p>The <i>Principia</i> were published in 1687, thanks in part to the encouragement and funding of Edmond Halley. Newton did not just state the three laws: he used them, together with the law of universal gravitation, to explain the orbits of the planets, the tides and the paths of comets. It was the first time that the same physics explained the fall of an apple and the motion of the Moon. Today we know that the laws hold to an excellent approximation for speeds much lower than that of light and for objects that are not microscopic: beyond these limits we need Einstein's relativity (1905, 1915) and quantum mechanics.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of dynamics",
      nodes: [
        { id: "inerzia", label: "1st law: inertia", x: 18, y: 12, color: "#16a34a", html: "With no resultant force: rest or uniform linear motion.", why: "Galileo realised that friction, not the nature of bodies, slows motion down; Descartes and then Newton gave it its general form. It overturned Aristotelian physics, according to which a cause was needed to keep something moving." },
        { id: "fma", label: "2nd law: F = m·a", x: 50, y: 40, color: "#ef4444", html: "The resultant force determines the acceleration.", why: "Newton defined force as the cause of the change in momentum (p = m·v): F = Δp/Δt. Hence F = ma when the mass is constant. It gives a quantitative method for predicting any motion." },
        { id: "azione", label: "3rd law: action-reaction", x: 82, y: 12, color: "#2563eb", html: "Forces come in pairs acting on different bodies.", why: "It came from observing collisions (Wren, Huygens, Wallis): total momentum is conserved. Newton generalised it to every interaction: it is the origin of the conservation of momentum." },
        { id: "massa", label: "Inertial mass", x: 20, y: 72, color: "#f59e0b", html: "Measures a body's resistance to a change in velocity.", why: "The fact that inertial mass (in F = ma) is the same as gravitational mass (in weight) explains why all bodies fall with the same g: this is the equivalence principle, later the basis of Einstein's general relativity." },
        { id: "peso", label: "Weight and free fall", x: 52, y: 85, color: "#0ea5e9", html: "W = m·g: all bodies fall with acceleration g.", why: "Galileo showed that, apart from air resistance, falling does not depend on mass. In 1971 astronaut David Scott demonstrated it on the Moon by dropping a hammer and a feather together." },
        { id: "conserv", label: "Conservation of momentum", x: 85, y: 62, color: "#a855f7", html: "In an isolated system the total momentum does not change.", why: "A direct consequence of the third law: the changes in momentum of the two bodies are equal and opposite, and their sum stays constant. It holds even where Newtonian mechanics does not." }
      ],
      edges: [["inerzia", "fma", "is the a = 0 case of the"], ["fma", "massa", "defines"], ["fma", "peso", "explains"], ["azione", "conserv", "implies the"], ["fma", "azione", "is completed by the"], ["massa", "peso", "equal by equivalence"]]
    }
  ],
  glossary: [
    { t: "Inertia", d: "The tendency of a body to stay at rest or keep moving with uniform linear motion." },
    { t: "Inertial mass", d: "Measure of a body's resistance to a change in its velocity." },
    { t: "Resultant", d: "Vector sum of all the forces acting on a body." },
    { t: "Newton (N)", d: "The force that gives a 1 kg body an acceleration of 1 m/s²." },
    { t: "Inertial frame", d: "A frame of reference in which the laws of motion hold in their usual form." },
    { t: "Constraint reaction", d: "Force exerted by a surface or support on a body, for example the normal force." },
    { t: "Free fall", d: "Motion under weight alone: acceleration g for all bodies." },
    { t: "Momentum", d: "The product of mass and velocity: p = m·v." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Who first put forward the idea that a body not acted on by forces keeps moving with uniform linear motion, overturning Aristotelian physics?", options: ["Galileo Galilei", "Ptolemy", "Archimedes", "Kepler"], answer: 0, explain: "Galileo, with his experiments and reasoning on motion, paved the way for the law of inertia later stated by Newton." },
      { type: "tf", q: "A body moving at constant velocity must be acted on by a resultant force in the direction of motion.", answer: false, explain: "That is exactly the Aristotelian idea refuted by the first law: at constant velocity the resultant is zero." },
      { type: "num", q: "A resultant force of 120 N acts on a 30 kg body. Calculate its acceleration.", answer: 4, tol: 0.05, unit: "m/s²", explain: "a = F/m = 120/30 = 4 m/s²." },
      { type: "num", q: "A 1000 kg car goes from 0 to 20 m/s in 8 s with constant acceleration. What is the resultant force?", answer: 2500, tol: 5, unit: "N", explain: "a = 20/8 = 2.5 m/s²; F = 1000 · 2.5 = 2500 N." },
      { type: "mc", q: "What happens to the normal force on a person in a lift that slows down while going up (downward acceleration)?", options: ["It increases", "It decreases", "It stays equal to mg", "It always becomes zero"], answer: 1, explain: "If a points downwards, N = m(g − a) < mg: you feel lighter." },
      { type: "mc", q: "A tennis ball hits a racket. How are the contact forces related?", options: ["The one on the racket is greater", "The one on the ball is greater", "They are equal in magnitude and opposite", "It depends on the speed of the ball"], answer: 2, explain: "Third law: the forces are always equal and opposite, even if the effects (accelerations) are different." },
      { type: "tf", q: "The weight and the normal force on a book at rest on a table form an action-reaction pair.", answer: false, explain: "They act on the same body. The reaction to the weight is the force with which the book pulls the Earth." },
      { type: "num", q: "A block slides down a smooth 30° inclined plane (g = 10 m/s²). Calculate its acceleration along the plane.", answer: 5, tol: 0.1, unit: "m/s²", explain: "a = g · sin 30° = 10 · 0.5 = 5 m/s²." },
      { type: "text", q: "What is the name of the SI unit of force?", answer: ["newton", "the newton", "n", "newtons"], explain: "The newton: 1 N = 1 kg·m/s²." },
      { type: "order", q: "Put in chronological order.", items: ["Galileo studies motion on inclined planes", "Newton publishes the Principia (1687)", "Einstein formulates special relativity (1905)", "First Moon landing (1969)"], explain: "Galileo (early 17th century) → Newton (1687) → Einstein (1905) → Apollo 11 (1969)." }
    ]
  }
});
