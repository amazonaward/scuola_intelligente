TOPIC('en', {
  id: "l1-fis-vettori-forze",
  title: "Vectors and forces",
  intro: "If I tell you “walk 5 metres”, that isn't enough to get you to a precise point: I also have to tell you <b>along which line</b> and <b>which way</b>. Some physical quantities, such as <b>force</b>, need this information and are described by <b>vectors</b>. In this lesson we learn how to add vectors and get to know three fundamental forces of mechanics: <b>weight</b>, the <b>elastic force</b> (Hooke's law) and <b>friction</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Scalar and vector quantities",
      html: `<p>Physical quantities are divided into two large families:</p>
<ul>
<li><b>Scalar quantities</b>: described by a <b>number with a unit</b>. Examples: mass (3 kg), time (5 s), temperature (20 °C), energy, volume.</li>
<li><b>Vector quantities</b>: they need a <b>magnitude</b> (how much), a <b>line of action</b> (the straight line along which they act), a <b>sense</b> (which way along that line), and sometimes also a <b>point of application</b>. Examples: displacement, velocity, acceleration, <b>force</b>.</li>
</ul>
<p>A <b>vector</b> is represented by an <b>arrow</b>: its length is proportional to the magnitude, the line it lies on gives the line of action, and the tip shows the sense. It is written as a letter with an arrow above it (<b>v⃗</b>, <b>F⃗</b>); its magnitude is written v or |v⃗|. (In English, line of action and sense together are often simply called the <i>direction</i>.)</p>
<p>Two vectors are <b>equal</b> if they have the same magnitude, the same line of action and the same sense, even if their points of application are different. The <b>opposite</b> of v⃗ has the same magnitude and line of action but the reverse sense (−v⃗).</p>`
    },
    {
      type: "widget",
      title: "Scalar or vector?",
      widget: "classify",
      options: { groups: ["Scalar", "Vector"], items: [
        ["Mass", 0],
        ["Force", 1],
        ["Time", 0],
        ["Velocity", 1],
        ["Temperature", 0],
        ["Displacement", 1],
        ["Volume", 0],
        ["Acceleration", 1]
      ] },
      caption: "If you also need to know “along which line and which way”, it's a vector."
    },
    {
      type: "text",
      title: "Adding vectors",
      html: `<p>Adding two vectors means finding their <b>overall</b> effect (the <b>resultant vector</b>). You don't simply add the magnitudes!</p>
<p><b>Tip-to-tail method.</b> Draw the first vector; from its tip draw the second; the sum vector goes from the tail of the first to the tip of the second.</p>
<p><b>Parallelogram method.</b> Draw the two vectors from the same origin and complete the parallelogram: the <b>diagonal</b> starting from the origin is the sum.</p>
<p><b>Special cases</b> (the most important ones in the first two years):</p>
<table>
<tr><th>Situation</th><th>Magnitude of the sum</th></tr>
<tr><td>Same line of action and same sense</td><td>the magnitudes are <b>added</b>: R = a + b</td></tr>
<tr><td>Same line of action, opposite senses</td><td>the magnitudes are <b>subtracted</b>: R = |a − b|, in the sense of the larger one</td></tr>
<tr><td>Perpendicular directions</td><td><b>Pythagoras' theorem</b>: R = √(a² + b²)</td></tr>
</table>
<p>The <b>difference</b> a⃗ − b⃗ is found by adding to a⃗ the opposite of b⃗. Multiplying a vector by a <b>number</b> k changes its magnitude (multiplied by |k|) and, if k is negative, also its sense.</p>`
    },
    {
      type: "svg",
      title: "Adding two vectors",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="aR" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="aB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="aG" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<text x="160" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Tip-to-tail</text>
<line x1="40" y1="230" x2="180" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="180" y1="230" x2="250" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="40" y1="230" x2="250" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="110" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="235" y="190" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="120" y="160" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
<text x="480" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Parallelogram</text>
<line x1="360" y1="230" x2="500" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="360" y1="230" x2="430" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="500" y1="230" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="430" y1="130" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="360" y1="230" x2="570" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="430" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="385" y="175" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="480" y="165" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
</g>
</svg>`,
      caption: "The two methods give the same result: the sum vector is the diagonal of the parallelogram."
    },
    {
      type: "example",
      title: "Tug of war and the boat on the river",
      html: `<p><b>Tug of war.</b> Team A pulls to the left with 800 N, team B to the right with 650 N. Same line of action, opposite senses: resultant = 800 − 650 = <b>150 N to the left</b>. The rope moves towards A.</p>
<p><b>The boat.</b> A boat heads at 4.0 m/s <b>perpendicular</b> to the bank of a river flowing at 3.0 m/s. Its velocity relative to the bank is √(4² + 3²) = √25 = <b>5.0 m/s</b>, angled downstream. The boat reaches the other bank further downstream than the point it started from.</p>
<p>If instead the two vectors were parallel and in the same sense, you would get 4 + 3 = 7 m/s: the magnitude of the sum depends on the angle between the vectors.</p>`
    },
    {
      type: "remember",
      title: "Components of a vector",
      html: `<p>A vector can also be <b>resolved</b> into two perpendicular vectors (its <b>components</b>), usually along the x and y axes. The components have magnitudes v<sub>x</sub> = v · cos θ and v<sub>y</sub> = v · sin θ, where θ is the angle with the x-axis (you will study trigonometry properly later on). Resolving is the inverse of adding and lets you add many vectors: add the x-components and the y-components separately, then recombine with Pythagoras.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: vectors",
      questions: [
        { type: "num", q: "Two perpendicular forces of 6 N and 8 N act on the same point. What is the resultant?", answer: 10, tol: 0, unit: "N", explain: "√(6² + 8²) = √100 = 10 N." },
        { type: "num", q: "Two forces of 15 N and 9 N act along the same line in opposite senses. What is the resultant?", answer: 6, tol: 0, unit: "N", explain: "15 − 9 = 6 N, in the sense of the larger force." },
        { type: "tf", q: "The magnitude of the sum of two vectors is always the sum of their magnitudes.", answer: false, explain: "That only happens if they have the same line of action and the same sense." }
      ]
    },
    {
      type: "text",
      title: "What is a force?",
      html: `<p>A <b>force</b> is a vector quantity that describes the interaction between bodies. It can produce two effects:</p>
<ul>
<li><b>deforming</b> a body (a spring that stretches, a ball of clay that gets squashed);</li>
<li><b>changing the state of motion</b> of a body: setting it in motion, stopping it, changing its speed or direction (a ball that is kicked).</li>
</ul>
<p>The SI unit is the <b>newton</b> (N), in honour of Isaac Newton. One newton is roughly the weight of a 100 g apple. The instrument for measuring forces is the <b>dynamometer</b> (spring balance, or newton meter), based on the stretching of a spring.</p>
<p>Forces are divided into <b>contact forces</b> (the push of a hand, friction, elastic force) and <b>non-contact forces</b> acting at a distance (weight, magnetic force, electric force).</p>`
    },
    {
      type: "text",
      title: "Weight",
      html: `<p><b>Weight</b> is the force with which a planet pulls a body towards its centre. It is calculated with:</p>
<p style="text-align:center"><b>P = m · g</b></p>
<p>where <b>m</b> is the mass (kg) and <b>g</b> the <b>acceleration due to gravity</b>, which at the Earth's surface is on average <b>9.8 m/s²</b> (9.81 at mid-latitudes, to be precise). Weight is a <b>vector</b>: vertical line of action, pointing downwards (towards the centre of the Earth), with its point of application at the centre of gravity.</p>
<p><b>Mass and weight are not the same thing:</b></p>
<table>
<tr><th></th><th>Mass</th><th>Weight</th></tr>
<tr><td>What it is</td><td>amount of matter, inertia</td><td>force of gravitational attraction</td></tr>
<tr><td>Unit</td><td>kg</td><td>N</td></tr>
<tr><td>Type</td><td>scalar</td><td>vector</td></tr>
<tr><td>Does it depend on the place?</td><td>no</td><td>yes (it depends on g)</td></tr>
<tr><td>Instrument</td><td>beam balance</td><td>dynamometer</td></tr>
</table>
<p>Values of g: Earth 9.8 m/s²; Moon ≈ 1.6 m/s²; Mars ≈ 3.7 m/s²; Jupiter ≈ 25 m/s². A person of 60 kg weighs about 588 N on Earth and 97 N on the Moon. Their <b>mass</b> stays 60 kg everywhere.</p>`
    },
    {
      type: "widget",
      title: "Mass and weight in the Solar System",
      widget: "flashcards",
      options: { cards: [
        { front: "🌍 Earth, 60 kg", back: "g = 9.8 m/s² → P ≈ 588 N" },
        { front: "🌙 Moon, 60 kg", back: "g ≈ 1.6 m/s² → P ≈ 97 N" },
        { front: "🔴 Mars, 60 kg", back: "g ≈ 3.7 m/s² → P ≈ 222 N" },
        { front: "🪐 Jupiter, 60 kg", back: "g ≈ 25 m/s² → P ≈ 1500 N" },
        { front: "🚀 Deep space, 60 kg", back: "g ≈ 0 → weight ≈ 0, but the mass is still 60 kg" }
      ] },
      caption: "The weight changes, not the mass. Flip the cards to see the values."
    },
    {
      type: "text",
      title: "Elastic force and Hooke's law",
      html: `<p>A <b>spring</b> (or an elastic band) that is stretched or compressed tends to return to its original length by exerting a <b>restoring force</b>, called the <b>elastic force</b>. The English physicist <b>Robert Hooke</b> discovered that, as long as the deformation is small, the force is <b>directly proportional</b> to the extension:</p>
<p style="text-align:center"><b>F = k · Δx</b></p>
<ul>
<li><b>Δx</b> is the extension (or compression) of the spring compared with its natural length, in metres;</li>
<li><b>k</b> is the <b>spring constant</b>, in <b>N/m</b>: a stiff spring has a large k, a soft spring a small k;</li>
<li>the force is <b>always opposite</b> to the deformation (that is why it is often written F = −k·Δx).</li>
</ul>
<p>Beyond the <b>elastic limit</b> the spring is permanently deformed and the law no longer holds. This is how a dynamometer works: the heavier the hanging object, the more the spring stretches; the scale is calibrated in newtons.</p>
<p><b>Example.</b> A spring with k = 50 N/m is stretched by 0.20 m: F = 50 × 0.20 = <b>10 N</b>. To stretch it by 0.40 m you need 20 N (twice as much).</p>`
    },
    {
      type: "svg",
      title: "The graph of a spring",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fffbeb"/>
<g font-family="sans-serif">
<line x1="70" y1="250" x2="360" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#334155" stroke-width="3"/>
<text x="215" y="285" font-size="15" text-anchor="middle" fill="#334155">extension Δx (m)</text>
<text x="30" y="140" font-size="15" fill="#334155" transform="rotate(-90 30 140)" text-anchor="middle">force F (N)</text>
<line x1="70" y1="250" x2="270" y2="80" stroke="#d97706" stroke-width="5"/>
<line x1="270" y1="80" x2="340" y2="60" stroke="#dc2626" stroke-width="5" stroke-dasharray="8 6"/>
<g fill="#334155" font-size="14" text-anchor="middle"><text x="120" y="270">0.1</text><text x="170" y="270">0.2</text><text x="220" y="270">0.3</text></g>
<g fill="#334155" font-size="14" text-anchor="end"><text x="62" y="208">5</text><text x="62" y="165">10</text><text x="62" y="122">15</text></g>
<text x="170" y="100" font-size="15" fill="#92400e" font-weight="bold">slope = k</text>
<text x="300" y="120" font-size="14" fill="#991b1b">beyond the</text>
<text x="300" y="138" font-size="14" fill="#991b1b">elastic limit</text>
<rect x="420" y="50" width="26" height="30" fill="#94a3b8"/>
<path d="M433 80 l-14 8 l28 12 l-28 12 l28 12 l-28 12 l28 12 l-14 8" stroke="#d97706" stroke-width="4" fill="none"/>
<rect x="415" y="168" width="36" height="34" rx="4" fill="#2563eb"/>
<text x="433" y="190" font-size="14" fill="#fff" text-anchor="middle">m</text>
<line x1="500" y1="100" x2="500" y2="168" stroke="#16a34a" stroke-width="3"/>
<text x="540" y="140" font-size="15" fill="#166534">Δx</text>
<line x1="433" y1="202" x2="433" y2="248" stroke="#dc2626" stroke-width="4"/>
<text x="470" y="236" font-size="15" fill="#991b1b" font-weight="bold">P = m·g</text>
</g>
</svg>`,
      caption: "In the elastic region the graph is a straight line through the origin: force and extension are directly proportional."
    },
    {
      type: "text",
      title: "Friction",
      html: `<p>When two surfaces are in contact and one tends to slide over the other, a force arises that <b>opposes</b> the sliding: <b>friction</b>. It acts parallel to the surfaces and opposite to the motion (or to the tendency to move). It depends on the <b>nature of the surfaces</b> (roughness) and on the force pressing them together (the <b>normal force</b> N, perpendicular to the surface). On a horizontal surface, N = P = m·g.</p>
<ul>
<li><b>Static friction</b> (body at rest): stops the body from starting to move. It grows with the applied force up to a maximum value: <b>F<sub>s,max</sub> = μ<sub>s</sub> · N</b>. If the force exceeds this value, the body starts moving.</li>
<li><b>Kinetic</b> (sliding) <b>friction</b> (body in motion): equal to <b>F<sub>d</sub> = μ<sub>d</sub> · N</b>, constant. Usually <b>μ<sub>d</sub> &lt; μ<sub>s</sub></b>: it is harder to get a piece of furniture moving than to keep it moving.</li>
<li><b>Rolling friction</b>: for a body that rolls (wheel, ball), much smaller than sliding friction: that is why the wheel is such a great invention.</li>
</ul>
<p>μ (read “mu”) is the <b>coefficient of friction</b>, a pure number that depends only on the two surfaces. In the model used in the first two years, friction <b>does not depend on the contact area</b> or on the speed.</p>
<p><b>Example.</b> A 20 kg crate on a horizontal floor, with μ<sub>s</sub> = 0.5 and μ<sub>d</sub> = 0.4. N = 20 × 9.8 = 196 N. To get it moving you need more than 0.5 × 196 = <b>98 N</b>; to keep it moving at constant speed, 0.4 × 196 ≈ <b>78 N</b> is enough.</p>`
    },
    {
      type: "example",
      title: "Weighing with a spring",
      html: `<p>A dynamometer has a spring with k = 40 N/m. You hang a backpack on it and the spring stretches by 0.25 m. The elastic force balances the weight: P = k·Δx = 40 × 0.25 = <b>10 N</b>. The mass of the backpack is m = P/g = 10/9.8 ≈ <b>1.0 kg</b>. If you took the same backpack to the Moon, the spring would stretch by only about 0.04 m (P ≈ 1.6 N): a dynamometer measures weight, not mass.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: weight, springs, friction",
      questions: [
        { type: "num", q: "Calculate the weight of a 5 kg body on Earth (g = 9.8 m/s²).", answer: 49, tol: 0.1, unit: "N", explain: "P = m · g = 5 × 9.8 = 49 N." },
        { type: "num", q: "A spring with k = 200 N/m is stretched by 5 cm. What is the elastic force?", answer: 10, tol: 0.01, unit: "N", explain: "Δx = 0.05 m; F = 200 × 0.05 = 10 N." },
        { type: "mc", q: "A 10 kg block has μ_s = 0.3. With g = 10 m/s², what is roughly the minimum force needed to get it moving?", options: ["3 N", "30 N", "100 N", "300 N"], answer: 1, explain: "N = 100 N; F = 0.3 × 100 = 30 N." }
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand vectors and forces",
      intro: "A vector is “an arrow with a meaning”. Let's look at it from other angles.",
      tabs: [
        {
          label: "🗺️ Treasure hunt",
          html: "<p>A vector is a <b>displacement</b> instruction: “walk 3 steps east, then 4 north”. The sum vector is the <b>direct</b> instruction: you have ended up 5 steps to the north-east (Pythagoras: 3, 4, 5). If instead you take 3 steps east and 3 west, you are back where you started: the sum is zero, even though you have walked 6 steps.</p>"
        },
        {
          label: "⚖️ Balance of forces",
          html: "<p>A chandelier hanging from two cables: its weight pointing down is balanced by the sum of the two cable tensions, which point upwards and a little to the side. When <b>the vector sum of all the forces is zero</b>, the body is in equilibrium (you will study this in the next topic). This is why steeply angled cables are under more tension than the weight they hold up.</p>"
        },
        {
          label: "🔗 Match force and formula",
          html: "<p>Connect each force with its formula.</p>",
          widget: "match",
          options: { pairs: [
            ["Weight", "P = m · g"],
            ["Elastic force", "F = k · Δx"],
            ["Kinetic friction", "F = μd · N"],
            ["Maximum static friction", "F = μs · N"]
          ] }
        },
        {
          label: "📊 Drawing friction",
          html: "<p>The graph shows how static friction grows up to its maximum and then, as soon as the body slides, drops to the kinetic value.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#f0fdf4'/><g font-family='sans-serif'><line x1='60' y1='220' x2='560' y2='220' stroke='#334155' stroke-width='3'/><line x1='60' y1='220' x2='60' y2='20' stroke='#334155' stroke-width='3'/><path d='M60 220 L240 60 L260 100 L540 100' stroke='#16a34a' stroke-width='5' fill='none'/><line x1='240' y1='60' x2='240' y2='220' stroke='#94a3b8' stroke-width='2' stroke-dasharray='6 5'/><text x='300' y='248' font-size='14' fill='#334155' text-anchor='middle'>applied force</text><text x='30' y='120' font-size='14' fill='#334155' transform='rotate(-90 30 120)' text-anchor='middle'>friction</text><text x='245' y='50' font-size='14' fill='#166534' text-anchor='middle'>static maximum</text><text x='420' y='88' font-size='14' fill='#166534' text-anchor='middle'>kinetic friction (constant)</text><text x='150' y='170' font-size='14' fill='#166534'>at rest</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Ut tensio, sic vis",
      html: `<p>To stop others stealing his discoveries, Robert Hooke used to publish his announcements as <b>anagrams</b>. In 1676 he published <i>ceiiinosssttuv</i>; only in 1678 did he reveal the solution: <b>“Ut tensio, sic vis”</b>, Latin for “as the extension, so the force”. It is the law that bears his name today. He was also the man who first used the word “cell”, after looking at a piece of cork under the microscope.</p>`
    },
    {
      type: "curiosity",
      title: "Jumping on the Moon",
      html: `<p>On the Moon g is about 1.6 m/s², roughly <b>one sixth</b> of the Earth's value. The Apollo astronauts, with suits and backpacks weighing many tens of kg, weighed a sixth of what they would have weighed on Earth, but their <b>mass</b> was the same: so setting an object in motion or stopping it took the same effort as on Earth (mass measures inertia), while lifting it took much less.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of vectors and forces",
      nodes: [
        { id: "vettore", label: "Vector", x: 50, y: 8, color: "#2563eb", html: "An arrow with magnitude, line of action and sense.", why: "Some quantities (forces, velocities) have an orientation that affects the result: two opposite pushes cancel out, two pushes the same way add up. Vectors were invented to describe this reality geometrically." },
        { id: "somma", label: "Adding vectors", x: 15, y: 42, color: "#16a34a", html: "Tip-to-tail or parallelogram; Pythagoras in perpendicular cases.", why: "The parallelogram rule was already known to Newton and to Stevin: it comes from the experimental observation that two forces applied to the same point are equivalent to a single “diagonal” force." },
        { id: "forza", label: "Force", x: 50, y: 42, color: "#ef4444", html: "A vector quantity that deforms or changes the state of motion (newton).", why: "In the Principia (1687) Newton made force the central concept of dynamics: it is the cause of changes in motion. Before him, people thought a body needed a continuous push to keep moving." },
        { id: "peso", label: "Weight", x: 85, y: 42, color: "#f59e0b", html: "P = m·g, towards the centre of the Earth.", why: "Weight is a case of Newton's universal gravitation: all bodies with mass attract each other. It depends on g, so it changes from one planet to another, while mass is a property of the body." },
        { id: "elastica", label: "Elastic force", x: 28, y: 80, color: "#8b5cf6", html: "F = k·Δx: Hooke's law.", why: "Hooke observed (1676–78) that for small deformations the restoring force grows in proportion to the extension: it is the principle behind the dynamometer and every spring. It comes from the electric forces between the atoms of the material." },
        { id: "attrito", label: "Friction", x: 72, y: 80, color: "#64748b", html: "A force opposing sliding: static, kinetic, rolling.", why: "At the microscopic level surfaces are rough and the bumps catch on each other; adhesion forces also act between the molecules. That is why friction depends on the materials and on the force pressing them together, not on the apparent area." }
      ],
      edges: [["vettore", "somma", "combines by"], ["vettore", "forza", "describes"], ["forza", "peso", "includes"], ["forza", "elastica", "includes"], ["forza", "attrito", "includes"], ["somma", "forza", "gives the resultant of"]]
    }
  ],
  glossary: [
    { t: "Scalar quantity", d: "A quantity described by a single number with a unit." },
    { t: "Vector", d: "A quantity with magnitude, line of action and sense, represented by an arrow." },
    { t: "Magnitude", d: "The size (length) of a vector." },
    { t: "Resultant", d: "The vector sum of several vectors." },
    { t: "Newton (N)", d: "The SI unit of force: 1 N = 1 kg·m/s²." },
    { t: "Weight", d: "The force of gravitational attraction on a body: P = m·g." },
    { t: "Spring constant", d: "The ratio k between the elastic force and the extension of a spring, in N/m." },
    { t: "Friction", d: "A force that opposes sliding between two surfaces in contact." },
    { t: "Normal force", d: "The force, perpendicular to the supporting surface, that the surface exerts on the body." },
    { t: "Dynamometer", d: "An instrument that measures forces from the extension of a spring." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these quantities is a vector?", options: ["Mass", "Temperature", "Force", "Time"], answer: 2, explain: "Force has magnitude, line of action and sense." },
      { type: "tf", q: "Two vectors with the same magnitude are always equal.", answer: false, explain: "They must also have the same line of action and the same sense." },
      { type: "num", q: "Two perpendicular forces of 9 N and 12 N act on the same point. Calculate the magnitude of the resultant.", answer: 15, tol: 0, unit: "N", explain: "√(9² + 12²) = √225 = 15 N." },
      { type: "num", q: "A body of 8 kg: calculate its weight on Earth (g = 9.8 m/s²).", answer: 78.4, tol: 0.1, unit: "N", explain: "P = 8 × 9.8 = 78.4 N." },
      { type: "mc", q: "What changes when you take an object to the Moon?", options: ["Neither the mass nor the weight", "The mass, not the weight", "The weight, not the mass", "Both the mass and the weight"], answer: 2, explain: "Mass is a property of the body; weight depends on g, which on the Moon is about one sixth." },
      { type: "num", q: "A spring stretches by 0.12 m under a force of 6 N. Calculate the spring constant.", answer: 50, tol: 0.1, unit: "N/m", explain: "k = F/Δx = 6/0.12 = 50 N/m." },
      { type: "tf", q: "According to Hooke's law, doubling the extension doubles the elastic force (within the elastic limit).", answer: true, explain: "F = k·Δx: force and extension are directly proportional." },
      { type: "mc", q: "How does kinetic friction usually compare with maximum static friction?", options: ["It is greater", "It is smaller", "It is always equal", "It is zero"], answer: 1, explain: "Usually μ_d < μ_s: it is easier to keep an object moving than to get it started." },
      { type: "num", q: "A 4 kg block on a horizontal surface (g = 9.8 m/s²) has μ_d = 0.25. Calculate the kinetic friction force.", answer: 9.8, tol: 0.1, unit: "N", explain: "N = 4 × 9.8 = 39.2 N; F = 0.25 × 39.2 = 9.8 N." },
      { type: "order", q: "Put in increasing order the weight of a 60 kg person on the following places.", items: ["Deep space", "Moon", "Mars", "Earth", "Jupiter"], explain: "Weight grows with g: deep space (≈0) < Moon (1.6) < Mars (3.7) < Earth (9.8) < Jupiter (≈25 m/s²)." }
    ]
  }
});
