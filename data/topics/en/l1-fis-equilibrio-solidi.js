TOPIC('en', {
  id: "l1-fis-equilibrio-solidi",
  title: "Equilibrium of solids",
  intro: "Why does a crate stay still on a ramp? Why can a light child lift an adult on a seesaw? Why does the Tower of Pisa lean but not fall? Behind all these questions lie two simple and very powerful ideas: the <b>sum of the forces</b> and the <b>sum of the torques</b>. In this lesson we learn to recognise when a body is in <b>equilibrium</b> and to use the inclined plane and levers, the \"simple machines\" that humanity has used to lift loads for thousands of years.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "What does \"being in equilibrium\" mean?",
      html: `<p>A body is in <b>static equilibrium</b> when it <b>stays at rest</b> even though forces act on it. A force is a <b>vector</b> quantity: it has a value (in <b>newtons</b>, N), a direction and a sense. That is why it is not enough to add the numbers: you have to add the <b>vectors</b>.</p>
<p>For a <b>point particle</b> (a body so small, or so compact, that it can be treated as a point) there is only one condition for equilibrium:</p>
<p style="text-align:center"><b>the resultant of the applied forces is zero: ΣF = 0</b></p>
<p>The forces we meet most often are:</p>
<ul>
<li><b>weight</b> P = m·g, directed towards the centre of the Earth, with g ≈ 9.8 m/s² (often rounded to 10 for mental arithmetic). A mass of 50 kg has a weight P = 50 × 9.8 = 490 N. Careful: <b>mass</b> is measured in kg and is the same everywhere, <b>weight</b> is measured in N and on the Moon is about six times smaller;</li>
<li>the <b>constraint reaction</b> (support force): the force with which a support, a string or a wall prevents a movement. A table does not \"want\" to make you fall: it deforms by a tiny amount and pushes upwards with a force equal to the weight of the object;</li>
<li>the <b>static friction force</b>, which opposes sliding. It has a maximum value F<sub>s</sub> = μ<sub>s</sub>·N, where N is the normal force pressing perpendicular to the surface and μ<sub>s</sub> the coefficient of static friction (it depends on the two surfaces).</li>
</ul>
<p>Example: a book on the table. The weight P points downwards, the reaction N upwards: P = N, the resultant is zero and the book stays still. If instead you bump into a wall while pushing a trolley, the wall answers with an equal and opposite force (Newton's third law), but it acts on a different body: it must not be confused with the weight/support-reaction pair.</p>`
    },
    {
      type: "example",
      title: "Example: a lamp hanging from two wires",
      html: `<p>A lamp of mass 4 kg hangs from the ceiling by a single vertical wire. What is the tension T in the wire?</p>
<ol>
<li>The weight is P = 4 × 9.8 = 39.2 N downwards.</li>
<li>The point particle (the lamp) is at rest: ΣF = 0, so the tension must balance the weight: T = 39.2 N upwards.</li>
</ol>
<p>If the same lamp is held by <b>two identical wires</b> at an angle, each wire must provide a vertical component of 19.6 N, but the total force along the wire is <b>greater</b> than 19.6 N, because part of the tension \"pulls sideways\". The closer the wires are to horizontal, the more the tension grows: that is why a rope stretched horizontally with a weight in the middle can never become perfectly straight without snapping.</p>`
    },
    {
      type: "svg",
      title: "The inclined plane and resolving the weight",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,260 540,260 540,60" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<text x="548" y="170" font-size="18" fill="#334155" font-weight="bold">h</text>
<text x="280" y="285" font-size="16" fill="#334155">base b</text>
<text x="190" y="190" font-size="16" fill="#334155" transform="rotate(-22 190 190)">length l</text>
<path d="M130 260 A70 70 0 0 0 126 238" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="140" y="250" font-size="18" fill="#dc2626" font-weight="bold">α</text>
<g transform="translate(300 160) rotate(-22.6)">
<rect x="-30" y="-40" width="60" height="40" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
</g>
<circle cx="292" cy="141" r="4" fill="#111827"/>
<line x1="292" y1="141" x2="292" y2="228" stroke="#16a34a" stroke-width="4"/>
<polygon points="292,236 285,222 299,222" fill="#16a34a"/>
<text x="262" y="250" font-size="18" fill="#16a34a" font-weight="bold">P</text>
<line x1="292" y1="141" x2="262" y2="154" stroke="#2563eb" stroke-width="4"/>
<polygon points="256,157 267,147 270,161" fill="#2563eb"/>
<text x="100" y="140" font-size="16" fill="#2563eb" font-weight="bold">P∥ = P sin α</text>
<line x1="292" y1="141" x2="322" y2="215" stroke="#9333ea" stroke-width="4"/>
<polygon points="324,221 314,208 328,203" fill="#9333ea"/>
<text x="345" y="225" font-size="16" fill="#9333ea" font-weight="bold">P⊥ = P cos α</text>
<text x="20" y="30" font-size="17" fill="#1f2937">The weight splits into a part along the plane and a perpendicular part.</text>
</svg>`,
      caption: "The parallel component P∥ tends to make the body slide; the perpendicular component P⊥ is balanced by the reaction of the plane. The angle α is the angle between the plane and the horizontal."
    },
    {
      type: "text",
      title: "The inclined plane",
      html: `<p>An <b>inclined plane</b> is a flat surface that makes an angle α with the horizontal. The weight P, which is vertical, acts on a body resting on it. It is convenient to resolve it along two axes: one <b>parallel</b> to the plane and one <b>perpendicular</b> to it.</p>
<ul>
<li>P<sub>⊥</sub> = P·cos α: presses the body onto the plane and is balanced by the constraint reaction N = P cos α;</li>
<li>P<sub>∥</sub> = P·sin α: pulls the body down the slope.</li>
</ul>
<p>If the plane is <b>smooth</b> (frictionless), keeping the body still needs a force F, parallel to the plane, that balances P<sub>∥</sub>:</p>
<p style="text-align:center"><b>F = P·sin α = P·h/l</b></p>
<p>where h is the height of the plane and l its length (sin α = h/l in the right-angled triangle). Since h &lt; l, the force needed is <b>less than the weight</b>: the inclined plane \"saves force\", but you have to cover a longer distance. The work (force × displacement) needed to reach the same height stays the same, if friction is negligible.</p>
<p>With friction, the body stays still as long as P sin α ≤ μ<sub>s</sub>·P cos α, that is, as long as <b>tan α ≤ μ<sub>s</sub></b>. Beyond the critical angle the body starts to slide, and the mass doesn't matter: the condition does not depend on the weight!</p>`
    },
    {
      type: "example",
      title: "Example: the ramp for the van",
      html: `<p>You need to load an 80 kg fridge into a van. The floor of the van is 1 m above the ground and you use a 4 m ramp (ignore friction).</p>
<ol>
<li>Weight: P = 80 × 9.8 = 784 N.</li>
<li>Parallel force needed to hold it still (or push it up at constant speed): F = P·h/l = 784 × 1/4 = <b>196 N</b>, like lifting about 20 kg.</li>
<li>With an 8 m ramp the force drops to 98 N, but you have to push it twice as far.</li>
</ol>
<p>It is the same principle as zigzag mountain paths, gently sloping stairs and Alpine passes: increase the length to reduce the effort.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: forces and the inclined plane",
      questions: [
        { type: "mc", q: "A point particle is in equilibrium when…", options: ["the sum of the magnitudes of the forces is zero", "the vector resultant of the forces is zero", "only one force acts on it"], answer: 1, explain: "Forces are vectors: ΣF = 0 means that their vector sum is zero, even if the individual magnitudes are not." },
        { type: "num", q: "A 10 kg body is on a smooth 30° inclined plane. What is the force parallel to the plane (in N, with g = 9.8 m/s²) that holds it still?", answer: 49, tol: 0.5, unit: "N", explain: "P = 98 N; F = P sin 30° = 98 × 0.5 = 49 N." },
        { type: "tf", q: "On a plane with friction, the maximum angle at which a body stays still depends on its mass.", answer: false, explain: "It stays still as long as tan α ≤ μs: the mass cancels out and doesn't matter." }
      ]
    },
    {
      type: "text",
      title: "The moment of a force (torque)",
      html: `<p>Pushing a door near its hinges is very hard work; near the handle it is easy. The force is the same, but its <b>turning</b> effect changes. To describe it we introduce the <b>moment of a force</b>, or <b>torque</b>, about a point O (the pivot or fulcrum):</p>
<p style="text-align:center"><b>M = F · b</b></p>
<p>where <b>b</b> is the <b>lever arm</b>: the <b>perpendicular</b> distance between the point O and the <b>line of action</b> of the force. It is measured in <b>newton metres</b> (N·m).</p>
<ul>
<li>If the force is perpendicular to the rod, the lever arm is the same as the distance from the pivot;</li>
<li>if the force passes through the pivot, the lever arm is zero and the torque is zero: pushing a door along the plane of the door does not turn it;</li>
<li>the torque has a <b>sense</b>: by convention it is positive if it turns anticlockwise, negative if it turns clockwise.</li>
</ul>
<p>A <b>couple</b> is made up of two equal, parallel and opposite forces with different lines of action: the resultant is zero, but the torque is not (it equals F·d, where d is the distance between the lines). It is what you use to turn a steering wheel with two hands or to unscrew a lid.</p>
<p>A <b>rigid body</b> (one that does not deform) is in equilibrium if <b>two</b> conditions hold at the same time:</p>
<p style="text-align:center"><b>ΣF = 0 (it doesn't move along) &nbsp;and&nbsp; ΣM = 0 (it doesn't rotate)</b></p>`
    },
    {
      type: "svg",
      title: "The lever: effort, load and fulcrum",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<polygon points="300,215 270,260 330,260" fill="#475569"/>
<g transform="rotate(0 300 210)"><rect x="60" y="200" width="480" height="14" rx="4" fill="#92400e"/></g>
<rect x="95" y="140" width="70" height="60" rx="6" fill="#ef4444"/>
<text x="130" y="178" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">load</text>
<line x1="130" y1="95" x2="130" y2="135" stroke="#ef4444" stroke-width="4"/>
<polygon points="130,139 122,124 138,124" fill="#ef4444"/>
<text x="130" y="85" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">resistance Fr</text>
<line x1="470" y1="120" x2="470" y2="196" stroke="#16a34a" stroke-width="4"/>
<polygon points="470,200 462,185 478,185" fill="#16a34a"/>
<text x="470" y="108" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">effort Fm</text>
<text x="300" y="285" font-size="17" text-anchor="middle" fill="#334155" font-weight="bold">fulcrum</text>
<line x1="130" y1="232" x2="300" y2="232" stroke="#2563eb" stroke-width="3"/>
<line x1="300" y1="232" x2="470" y2="232" stroke="#9333ea" stroke-width="3"/>
<text x="215" y="250" font-size="16" text-anchor="middle" fill="#2563eb" font-weight="bold">br</text>
<text x="385" y="250" font-size="16" text-anchor="middle" fill="#9333ea" font-weight="bold">bm</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">Equilibrium: Fm · bm = Fr · br</text>
</svg>`,
      caption: "A first-class lever: the fulcrum is in the middle. The arm bm is twice br, so an effort half the load is enough."
    },
    {
      type: "text",
      title: "Levers",
      html: `<p>A <b>lever</b> is a rigid bar free to rotate about a fixed point, the <b>fulcrum</b>. Two forces act on it: an <b>effort</b> F<sub>m</sub> (the force we apply) and a <b>resistance</b> or load F<sub>r</sub> (the weight to lift or the force to overcome). The lever is in equilibrium when the torques balance:</p>
<p style="text-align:center"><b>F<sub>m</sub> · b<sub>m</sub> = F<sub>r</sub> · b<sub>r</sub></b></p>
<p>This gives the <b>mechanical advantage</b> of the lever: F<sub>m</sub>/F<sub>r</sub> = b<sub>r</sub>/b<sub>m</sub>. If the effort arm is longer than the load arm, the lever is <b>advantageous</b> (it saves force); if it is shorter, it is <b>disadvantageous</b> (you lose force but gain speed and range of movement).</p>
<table>
<tr><th>Class</th><th>Arrangement</th><th>Examples</th><th>Advantage</th></tr>
<tr><td><b>1st</b></td><td>fulcrum between effort and load</td><td>seesaw, scissors, pincers, crowbar</td><td>can be advantageous, disadvantageous or neutral</td></tr>
<tr><td><b>2nd</b></td><td>load between fulcrum and effort</td><td>wheelbarrow, nutcracker, bottle opener, nail clippers</td><td>always advantageous</td></tr>
<tr><td><b>3rd</b></td><td>effort between fulcrum and load</td><td>tweezers, ice tongs, fishing rod, forearm</td><td>always disadvantageous</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Example: balancing the seesaw",
      html: `<p>An adult of 60 kg sits 1 m from the centre of a seesaw. How far from the centre must a 20 kg child sit to balance them?</p>
<ol>
<li>The weights: 588 N (adult) and 196 N (child): but you can just use the masses, because g cancels out.</li>
<li>Balance of torques: 60 · 1 = 20 · x</li>
<li>x = 60/20 = <b>3 m</b>.</li>
</ol>
<p>The child weighs a third as much and sits three times as far away: the product \"weight × distance\" is the same. If the seesaw is only 4 m long in total (2 m each side), the child couldn't balance the adult from there: the adult would have to move closer to the fulcrum (0.67 m).</p>`
    },
    {
      type: "widget",
      title: "Which class of lever is it?",
      widget: "classify",
      options: { groups: ["1st class (fulcrum in the middle)", "2nd class (load in the middle)", "3rd class (effort in the middle)"], items: [
        ["seesaw", 0],
        ["scissors", 0],
        ["pincers", 0],
        ["wheelbarrow", 1],
        ["nutcracker", 1],
        ["lever bottle opener", 1],
        ["tweezers", 2],
        ["ice tongs", 2],
        ["fishing rod", 2]
      ] },
      caption: "Find the three points (fulcrum, effort, load) and see which one is in the middle."
    },
    {
      type: "curiosity",
      title: "\"Give me a place to stand and I will move the world\"",
      html: `<p>The saying is attributed to <b>Archimedes of Syracuse</b> (3rd century BC), who in his treatise <i>On the Equilibrium of Planes</i> was the first to prove the law of the lever with mathematical rigour: two weights are in equilibrium when they are inversely proportional to their distances from the fulcrum. The quotation has come down to us through later sources (Pappus of Alexandria), but it sums up the idea well: with a long enough arm, a small force can balance an enormous one. To lift the Earth, however, Archimedes would have had to move his lever through astronomical distances: a gain in force is always paid for with a greater displacement.</p>`
    },
    {
      type: "curiosity",
      title: "Your body is full of levers",
      html: `<p>The elbow is the fulcrum, the biceps is attached a few centimetres from the elbow, while the hand holding a weight is about 30 cm away: it is a <b>3rd-class</b> lever, disadvantageous in terms of force. To hold a 5 kg weight (49 N) with your arm bent, the biceps has to exert a force several times greater. In return you get great speed and range of movement: a small shortening of the muscle moves the hand a long way. Rising onto your toes, on the other hand, uses a 2nd-class lever, which is advantageous. Chewing with your jaw and nodding your head also make use of levers!</p>`
    },
    {
      type: "text",
      title: "Centre of gravity and types of equilibrium",
      html: `<p>The <b>centre of gravity</b> is the point where the whole weight of a body can be thought to act. In a uniform, symmetrical body it coincides with the geometric centre (the centre of a disc, a cube, a sphere). A body hanging from a string stays still when its centre of gravity is directly below the point of suspension; a body resting on a surface does not topple as long as the <b>vertical line through the centre of gravity falls inside its base</b>.</p>
<p>For a body that can move or rotate, after a small displacement from equilibrium there are three cases:</p>
<ul>
<li><b>stable equilibrium</b>: the body tends to return to its original position (a ball at the bottom of a bowl; the centre of gravity rises if you move it);</li>
<li><b>unstable equilibrium</b>: the body moves even further away (a ball on top of a hill; the centre of gravity drops);</li>
<li><b>neutral equilibrium</b>: the body stays in its new position (a sphere on a flat table; the centre of gravity stays at the same height).</li>
</ul>
<p>The <b>lower</b> the centre of gravity and the <b>wider</b> the base, the more stable the equilibrium: that is why racing cars are low and wide, a lorry loaded high up tips over more easily on a bend, and you stand more firmly on a tram with your legs apart.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand torque",
      intro: "Torque is often the hardest idea in this lesson. Here are four different routes to grasp it.",
      tabs: [
        {
          label: "🚪 The door",
          html: `<p>Try closing a door by pushing 5 cm from the hinges: it takes an enormous force. Push at the handle, 80 cm away, and one finger is enough. The <b>torque</b> M = F·b measures this difference: if the lever arm b becomes 16 times larger, the same turning effect is obtained with a force 16 times smaller. That is why handles are on the side opposite the hinges and spanners have long handles.</p>`
        },
        {
          label: "⚖️ Weight × distance",
          html: `<p>Imagine a rod with bags hanging at different distances from the centre. What matters is not only <b>how heavy</b> a bag is, but also <b>where</b> it hangs: you multiply the weight by the distance. If on the left you have 3 kg at 4 cm (3 × 4 = 12) and on the right 2 kg at 6 cm (2 × 6 = 12), the \"scores\" are equal and the rod balances. If on the right you put 2 kg at 5 cm, the score is 10 and the left side wins.</p>`,
          widget: "match",
          options: { pairs: [["3 kg at 4 cm", "torque 12"], ["5 kg at 2 cm", "torque 10"], ["1 kg at 9 cm", "torque 9"], ["4 kg at 5 cm", "torque 20"]] }
        },
        {
          label: "🏗️ The perpendicular arm",
          html: `<p>The lever arm is the <b>perpendicular</b> distance between the fulcrum and the line of the force, not just any distance. If you push a spanner at a slant, only the component perpendicular to the handle turns the bolt. Pushing along the handle, towards the bolt, doesn't turn it at all (zero arm). That is why the torque can also be written M = F·d·sin θ, where θ is the angle between the force and the segment from the fulcrum to the point of application.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<circle cx="90" cy="130" r="16" fill="#475569"/>
<text x="90" y="170" font-size="16" text-anchor="middle" fill="#1f2937">bolt</text>
<rect x="90" y="124" width="320" height="12" rx="5" fill="#92400e"/>
<line x1="410" y1="130" x2="470" y2="50" stroke="#16a34a" stroke-width="4"/>
<polygon points="474,45 456,53 468,63" fill="#16a34a"/>
<text x="480" y="48" font-size="17" fill="#15803d" font-weight="bold">F</text>
<line x1="410" y1="130" x2="410" y2="62" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 3"/>
<text x="360" y="72" font-size="16" fill="#2563eb" font-weight="bold">F sin θ</text>
<text x="300" y="200" font-size="17" text-anchor="middle" fill="#1f2937">Only the component perpendicular to the handle turns it.</text>
</svg>`
        },
        {
          label: "🔁 Torque as \"how much it turns\"",
          html: `<p>A useful analogy with straight-line motion: a force <b>changes the velocity</b> of a body, a torque <b>changes its rotation</b>. Zero force means no acceleration; zero torque means no angular acceleration. A body in equilibrium is like a body that neither moves, nor accelerates, nor turns: that is why we need both ΣF = 0 and ΣM = 0.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the equilibrium of solids",
      nodes: [
        { id: "equilibrio", label: "Static equilibrium", x: 50, y: 6, color: "#64748b", html: "A body is at rest and stays at rest: it neither moves along nor rotates.", why: "This is statics, the first branch of physics to be treated with mathematical rigour, already by Archimedes (3rd century BC) and later by Stevin and Galileo. If a body at rest accelerated, we would see it move: equilibrium is the condition in which the effects of the forces cancel each other out." },
        { id: "forze", label: "Sum of forces is zero", x: 20, y: 28, color: "#2563eb", html: "ΣF = 0: the body does not move along.", why: "It follows from Newton's second law (1687): F = ma. If the resultant is zero, the acceleration is zero. And if it starts at rest, it stays at rest (the first law, already intuited by Galileo)." },
        { id: "momenti", label: "Sum of torques is zero", x: 80, y: 28, color: "#9333ea", html: "ΣM = 0: the body does not rotate.", why: "For an extended body it is not enough to add the forces: their points of application matter too. The torque M = F·b measures a force's ability to cause rotation. The concept comes from Archimedes' law of the lever." },
        { id: "peso", label: "Weight and reactions", x: 8, y: 52, color: "#16a34a", html: "P = mg, N, tensions, friction.", why: "Weight is the Earth's gravitational attraction (Newton, 1687); constraint reactions follow from the third law: every action has an equal and opposite reaction." },
        { id: "inclinato", label: "Inclined plane", x: 32, y: 66, color: "#22c55e", html: "Resolving the weight: P sin α along the plane, P cos α perpendicular.", why: "Resolving vectors into components is an application of trigonometry and of the parallelogram rule. Galileo studied the inclined plane to \"slow down\" the fall of bodies and measure it." },
        { id: "leve", label: "Levers", x: 80, y: 56, color: "#f59e0b", html: "Fm·bm = Fr·br; three classes.", why: "Archimedes proved the law of the lever in his treatise On the Equilibrium of Planes (3rd century BC), starting from symmetry postulates. It is a special case of the condition ΣM = 0." },
        { id: "baricentro", label: "Centre of gravity", x: 56, y: 80, color: "#ef4444", html: "The point where the total weight acts.", why: "Archimedes studied it for plane figures (parabola, triangle). A body is stable if the vertical through its centre of gravity falls within its base." },
        { id: "stabilita", label: "Stable / unstable / neutral", x: 20, y: 92, color: "#0ea5e9", html: "What happens after a small disturbance.", why: "It depends on gravitational potential energy: equilibrium is stable where the potential energy is at a minimum (the centre of gravity is at the lowest possible point)." }
      ],
      edges: [["equilibrio", "forze", "condition 1"], ["equilibrio", "momenti", "condition 2"], ["forze", "peso", "forces involved"], ["peso", "inclinato", "is resolved"], ["momenti", "leve", "application"], ["peso", "baricentro", "acts at the"], ["baricentro", "stabilita", "determines"]]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Point particle: <b>ΣF = 0</b>. Rigid body: <b>ΣF = 0 and ΣM = 0</b>.</li>
<li>Weight: <b>P = m g</b>. Components on the inclined plane: <b>P∥ = P sin α</b>, <b>P⊥ = P cos α</b>.</li>
<li>Torque: <b>M = F · b</b> (b = lever arm, the perpendicular distance from the line of action).</li>
<li>Lever: <b>Fm · bm = Fr · br</b>. 1st class: fulcrum in the middle; 2nd: load in the middle; 3rd: effort in the middle.</li>
<li>A simple machine <b>does not save work</b>: it only changes the ratio between force and displacement.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: torques, levers and equilibrium",
      questions: [
        { type: "num", q: "A force of 20 N acts perpendicularly 0.5 m from the fulcrum. What is the torque (in N·m)?", answer: 10, unit: "N·m", explain: "M = F·b = 20 × 0.5 = 10 N·m." },
        { type: "mc", q: "A wheelbarrow is a lever of the…", options: ["1st class", "2nd class", "3rd class"], answer: 1, explain: "The fulcrum is the wheel, the load is in the middle and the effort is applied at the handles: load between fulcrum and effort, so 2nd class, always advantageous." },
        { type: "mc", q: "A sphere resting on a horizontal table is in…", options: ["stable equilibrium", "unstable equilibrium", "neutral equilibrium"], answer: 2, explain: "If you move it, it stays where you put it: the centre of gravity does not change height." },
        { type: "tf", q: "A force that passes through the fulcrum has zero torque.", answer: true, explain: "The lever arm is zero: the torque M = F·0 = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Static equilibrium", d: "The condition of a body at rest, on which the resultant of the forces and of the torques is zero." },
    { t: "Resultant", d: "The vector sum of all the forces acting on a body." },
    { t: "Weight", d: "The force with which the Earth attracts a body: P = m·g, in newtons." },
    { t: "Constraint reaction", d: "A force exerted by a support, a string or a wall that prevents a movement." },
    { t: "Static friction", d: "A force that opposes the start of sliding; maximum value μs·N." },
    { t: "Inclined plane", d: "A flat surface tilted at an angle α to the horizontal." },
    { t: "Torque (moment of a force)", d: "M = F·b: measures a force's ability to make a body rotate about a point." },
    { t: "Lever arm", d: "The perpendicular distance between the pivot and the line of action of the force." },
    { t: "Couple", d: "Two equal, parallel and opposite forces with different lines of action: zero resultant, non-zero torque." },
    { t: "Lever", d: "A rigid bar that rotates about a fulcrum, acted on by an effort and a load." },
    { t: "Centre of gravity", d: "The point where the total weight of a body is considered to act." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the condition for equilibrium of a point particle?", options: ["The resultant of the forces is zero", "The torque of the forces is zero", "The weight equals the mass"], answer: 0, explain: "For a point particle there is no rotation to consider: ΣF = 0 is enough." },
      { type: "num", q: "What is the weight (in N, with g = 9.8 m/s²) of a 5 kg object?", answer: 49, tol: 0.1, unit: "N", explain: "P = m·g = 5 × 9.8 = 49 N." },
      { type: "num", q: "A smooth inclined plane is 2 m high and 5 m long. What parallel force (in N) holds still a load weighing 300 N?", answer: 120, unit: "N", explain: "F = P·h/l = 300 × 2/5 = 120 N." },
      { type: "tf", q: "With friction, the maximum angle of a plane on which a body stays still depends on the body's mass.", answer: false, explain: "The condition is tan α ≤ μs: the mass cancels out." },
      { type: "num", q: "A force of 50 N is applied perpendicularly 0.4 m from the axis of rotation. Calculate the torque (N·m).", answer: 20, unit: "N·m", explain: "M = F·b = 50 × 0.4 = 20 N·m." },
      { type: "num", q: "A lever is in equilibrium with a load of 90 N at 20 cm from the fulcrum. What effort (in N) is needed at 60 cm from the fulcrum, on the opposite side?", answer: 30, unit: "N", explain: "Fm·60 = 90·20, so Fm = 1800/60 = 30 N." },
      { type: "mc", q: "Which of these tools is a 3rd-class lever?", options: ["Scissors", "Tweezers", "Nutcracker"], answer: 1, explain: "In tweezers the effort is applied between the fulcrum (the hinge) and the tip, where the load is." },
      { type: "tf", q: "A 2nd-class lever is always advantageous.", answer: true, explain: "The load is closer to the fulcrum than the effort: br < bm, so Fm < Fr." },
      { type: "order", q: "Put in order the steps for solving an equilibrium problem on an inclined plane.", items: ["Draw all the forces on the body", "Choose axes parallel and perpendicular to the plane", "Resolve the weight into its two components", "Set ΣF = 0 along each axis", "Work out the unknown force"], explain: "The standard method: diagram, suitable axes, resolution, equilibrium along each axis, solution." },
      { type: "mc", q: "When does a body resting on a surface not tip over?", options: ["When its centre of gravity is at its highest point", "When the vertical through its centre of gravity falls inside its base", "When its mass is small"], answer: 1, explain: "If the vertical through the centre of gravity falls outside the base, the weight creates a torque that rotates the body until it topples." },
      { type: "text", q: "What is the fixed point about which a lever rotates called?", answer: ["fulcrum", "the fulcrum", "pivot", "the pivot"], explain: "The fulcrum is the lever's point of support." }
    ]
  }
});
