TOPIC('en', {
  id: "l3-fis-fluidodinamica",
  title: "Fluid dynamics",
  intro: "Why does the water from a garden hose come out faster if you squeeze the end with your finger? How can a plane weighing hundreds of tonnes stay in the air? Why does honey pour slowly and water does not? In <b>fluid statics</b> (first year) liquids were at rest: now we make them <b>flow</b>. We will meet <b>flow rate</b>, the <b>continuity equation</b> and the famous <b>Bernoulli's principle</b>, which links pressure, speed and height, and finally <b>viscosity</b>, the \"internal friction\" of real fluids.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "The ideal fluid model",
      html: `<p>Studying a moving fluid is difficult: billions of molecules colliding with each other. To describe it we introduce a simplified <b>model</b>, the <b>ideal fluid</b>, which has these properties:</p>
<ul>
<li><b>incompressible</b>: the density ρ is constant (true for liquids, and for gases at speeds much lower than the speed of sound);</li>
<li><b>non-viscous</b>: no internal friction between the layers of the fluid;</li>
<li><b>steady flow</b>: the velocity at each point does not change with time;</li>
<li><b>laminar flow</b> (not turbulent): the layers slide past each other smoothly along <b>streamlines</b>, which never cross.</li>
</ul>
<p><b>Streamlines</b> are the paths of the particles of the fluid: where they are closer together, the fluid is faster. A <b>flow tube</b> is a bundle of streamlines that behaves like a pipe, with nothing leaking out of the sides.</p>
<p>The model works surprisingly well for water flowing in a pipe, for blood in an artery (with a few corrections) and for air around a wing. Where it does not work (honey, oil, turbulent flows) viscosity comes into play, which we will discuss at the end.</p>`
    },
    {
      type: "text",
      title: "Flow rate and the continuity equation",
      html: `<p>The <b>flow rate</b> Q is the <b>volume of fluid passing through a cross-section of the pipe per unit time</b>:</p>
<p style="text-align:center"><b>Q = ΔV / Δt = A · v</b> &nbsp; (unit: m³/s; in practice L/s or L/min)</p>
<p>where A is the cross-sectional area and v the average speed of the fluid. In fact, in a time Δt the fluid travels a distance v·Δt and fills a cylinder of volume A·v·Δt.</p>
<p>If the fluid is incompressible and there are no leaks, the flow rate in a flow tube is <b>the same at every cross-section</b>: as much water comes out as goes in. This gives the <b>continuity equation</b>:</p>
<p style="text-align:center"><b>A<sub>1</sub> · v<sub>1</sub> = A<sub>2</sub> · v<sub>2</sub> = constant</b></p>
<p>Where the pipe <b>narrows</b> the fluid <b>speeds up</b>; where it widens it slows down. This is the garden hose effect: by squeezing the end you reduce A and the jet speeds up. The same happens in a river: in the narrow stretch of a gorge the current is fast, in the lake on the plain it is slow.</p>`
    },
    {
      type: "svg",
      title: "The narrowing pipe",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<defs>
<marker id="fdA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1d4ed8"/></marker>
</defs>
<g font-family="sans-serif">
<path d="M30 80 L 230 80 L 330 130 L 570 130 L 570 190 L 330 190 L 230 240 L 30 240 Z" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="120" x2="150" y2="120" stroke="#1d4ed8" stroke-width="3" marker-end="url(#fdA)"/>
<line x1="50" y1="160" x2="150" y2="160" stroke="#1d4ed8" stroke-width="3" marker-end="url(#fdA)"/>
<line x1="50" y1="200" x2="150" y2="200" stroke="#1d4ed8" stroke-width="3" marker-end="url(#fdA)"/>
<line x1="370" y1="145" x2="540" y2="145" stroke="#1d4ed8" stroke-width="5" marker-end="url(#fdA)"/>
<line x1="370" y1="175" x2="540" y2="175" stroke="#1d4ed8" stroke-width="5" marker-end="url(#fdA)"/>
<text x="130" y="65" font-size="16" fill="#0f172a" font-weight="bold" text-anchor="middle">large A1</text>
<text x="130" y="265" font-size="16" fill="#1e3a8a" text-anchor="middle">small v1</text>
<text x="450" y="115" font-size="16" fill="#0f172a" font-weight="bold" text-anchor="middle">small A2</text>
<text x="450" y="215" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="middle">large v2</text>
<text x="300" y="30" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">A1·v1 = A2·v2 (the flow rate is constant)</text>
</g>
</svg>`,
      caption: "In the constriction the streamlines crowd together and the fluid speeds up."
    },
    {
      type: "example",
      title: "The garden hose and the arteries",
      html: `<p><b>Garden.</b> A hose with an internal diameter of 2.0 cm carries water at 1.0 m/s. At the end you fit a nozzle with a diameter of 0.5 cm. The area falls by a factor of (2.0/0.5)² = 16, so the speed rises 16 times: <b>16 m/s</b>. The flow rate stays the same: Q = π·(0.010)²·1.0 ≈ 3.1·10<sup>-4</sup> m³/s ≈ 0.31 L/s.</p>
<p><b>Aorta and capillaries.</b> The aorta has a cross-section of about 4 cm² and blood flows through it at about 20 cm/s (flow rate ≈ 5 L/min at rest). Capillaries are microscopic, but there are billions of them and their <b>total cross-section</b> is hundreds of times that of the aorta (a few thousand cm²): the speed of the blood drops to fractions of a millimetre per second, the perfect time to exchange oxygen and nutrients with the tissues. In the capillaries "narrower = faster" does not apply, because it is the sum of the cross-sections that counts.</p>`
    },
    {
      type: "quiz",
      title: "Check: flow rate and continuity",
      questions: [
        { type: "num", q: "Water flows at 2 m/s in a pipe with a cross-section of 0.01 m². What is the flow rate?", answer: 0.02, tol: 0.0001, unit: "m³/s", explain: "Q = A·v = 0.01 × 2 = 0.02 m³/s = 20 L/s." },
        { type: "num", q: "A pipe with a cross-section of 0.08 m² and a speed of 1.5 m/s narrows to a cross-section of 0.02 m². What is the speed of the fluid in the narrow section?", answer: 6, tol: 0.01, unit: "m/s", explain: "v2 = A1·v1/A2 = 0.08 × 1.5/0.02 = 6 m/s." },
        { type: "tf", q: "In a flow tube, the fluid is faster where the cross-section is larger.", answer: false, explain: "A·v is constant: a larger cross-section means a lower speed." }
      ]
    },
    {
      type: "text",
      title: "Bernoulli's principle",
      html: `<p>In 1738 the Swiss mathematician and physicist <b>Daniel Bernoulli</b> published <i>Hydrodynamica</i>, in which he expressed the <b>conservation of energy</b> for a moving fluid. If an ideal fluid is in steady flow, along a streamline the sum</p>
<p style="text-align:center"><b>p + ½·ρ·v² + ρ·g·h = constant</b></p>
<p>is the same at every point. The three terms are:</p>
<ul>
<li><b>p</b>: the static <b>pressure</b> (pressure work per unit volume);</li>
<li><b>½ρv²</b>: the <b>dynamic pressure</b> (kinetic energy per unit volume);</li>
<li><b>ρgh</b>: the <b>gravitational term</b> (potential energy per unit volume, h = height).</li>
</ul>
<p>Proof in brief: the work done on the fluid by the pressure forces between two cross-sections equals the change in kinetic and potential energy (work–energy theorem). Dividing by the volume ΔV gives the equation.</p>
<p><b>Key consequence</b> (at constant height, horizontal pipe): where the speed is <b>higher</b> the pressure is <b>lower</b>, and vice versa:</p>
<p style="text-align:center"><b>p<sub>1</sub> + ½ρv<sub>1</sub>² = p<sub>2</sub> + ½ρv<sub>2</sub>²</b></p>
<p>It may seem strange: the fast fluid "pushes less" on the walls. The reason is that, to speed up in the constriction, the fluid must receive a net force from the higher-pressure region towards the lower-pressure region. With h = 0 for both cross-sections, the increase in kinetic energy is paid for by a decrease in pressure. For statics (v = 0) we get back <b>Stevin's law</b> (the hydrostatic pressure law): p<sub>1</sub> − p<sub>2</sub> = ρ·g·(h<sub>2</sub> − h<sub>1</sub>).</p>`
    },
    {
      type: "example",
      title: "Venturi and Torricelli",
      html: `<p><b>The Venturi effect.</b> In a horizontal pipe water goes from v<sub>1</sub> = 2.0 m/s to v<sub>2</sub> = 6.0 m/s. The pressure difference is Δp = ½·ρ·(v<sub>2</sub>² − v<sub>1</sub>²) = ½ × 1000 × (36 − 4) = <b>16 000 Pa</b> (about 0.16 atm): the pressure in the narrow section is 16 kPa lower. By measuring this difference with two small vertical tubes (manometers) you can calculate the flow rate: this is the <b>Venturi meter</b>, also used in carburettors.</p>
<p><b>Torricelli.</b> A tank has a hole at a depth h below the free surface. At the free surface and at the hole the pressure is atmospheric; the speed of the free surface is negligible. Bernoulli gives ρ·g·h = ½·ρ·v² ⟹</p>
<p style="text-align:center"><b>v = √(2·g·h)</b> (Torricelli's theorem, 1643)</p>
<p>It is the same speed a stone would have after falling from height h. With h = 1.25 m: v = √(2·9.8·1.25) ≈ <b>4.9 m/s</b>. The jet has a flow rate Q = A<sub>hole</sub>·v: this is why, in a bottle with several holes, the jet from the lowest hole comes out fastest (how far it lands also depends on how high the hole is above the ground).</p>`
    },
    {
      type: "text",
      title: "Lift and other applications",
      html: `<p>Bernoulli's principle appears in a great many everyday situations:</p>
<ul>
<li><b>Sprayers and perfume atomisers</b>: fast air passing over a small tube lowers the pressure there and the liquid rises; it is the same principle as the airbrush and the carburettor.</li>
<li><b>Chimneys and draughts</b>: fast wind over the chimney lowers the pressure and \"sucks\" the smoke up. The same happens when a door slams as a draught passes.</li>
<li><b>Roofs blown off</b>: in storms, fast wind over the roof creates low pressure compared with the pressure inside and can lift it.</li>
<li><b>Two ships side by side</b> are pulled together: the fast water in the gap between the ships is at lower pressure and pushes them towards each other (a well-known danger in harbours).</li>
<li><b>A ball with spin</b> (Magnus effect): the rotation drags the air, creating different speeds on the two sides and a sideways force that curves the shot, from the dipping free kick in football to topspin in tennis.</li>
</ul>
<p><b>The aircraft wing.</b> A wing has an asymmetric profile and is tilted (the \"angle of attack\") relative to the airflow. The air above the wing is faster and at lower pressure than the air below: the pressure difference multiplied by the area gives the <b>lift</b>, an upward force that balances the weight. An equivalent way of looking at it is Newton's third law: the wing <b>deflects the air downwards</b> and, in reaction, the air pushes the wing upwards. Beware of a common mistake: it is not true that the two streams of air \"must arrive together\" at the trailing edge; in reality the air over the top arrives first. Bernoulli's principle correctly describes the pressures, but the cause is the <b>shape of the flow</b> imposed by the wing.</p>`
    },
    {
      type: "svg",
      title: "Flow around a wing",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<defs>
<marker id="fdB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<path d="M150 160 C 200 120 360 120 450 150 C 360 175 220 180 150 160 Z" fill="#475569" stroke="#0f172a" stroke-width="3" transform="rotate(-6 300 150)"/>
<path d="M20 90 C 150 90 230 50 330 55 C 440 60 500 90 580 92" stroke="#1d4ed8" stroke-width="3" fill="none"/>
<path d="M20 60 C 150 60 230 20 330 25 C 440 30 500 55 580 58" stroke="#1d4ed8" stroke-width="3" fill="none"/>
<path d="M20 210 C 150 215 250 225 330 215 C 440 205 500 205 580 205" stroke="#1d4ed8" stroke-width="3" fill="none"/>
<path d="M20 245 C 150 245 250 260 330 255 C 440 250 500 245 580 245" stroke="#1d4ed8" stroke-width="3" fill="none"/>
<line x1="300" y1="140" x2="300" y2="80" stroke="#dc2626" stroke-width="5" marker-end="url(#fdB)"/>
<text x="318" y="100" font-size="16" fill="#991b1b" font-weight="bold">lift</text>
<text x="300" y="190" font-size="15" fill="#0f172a" text-anchor="middle">below: slower flow, higher pressure</text>
<text x="300" y="283" font-size="14" fill="#334155" text-anchor="middle">above: lines closer together, faster flow, lower pressure</text>
</g>
</svg>`,
      caption: "Above the wing the streamlines are closer together (higher speed, lower pressure); the pressure difference produces lift."
    },
    {
      type: "quiz",
      title: "Check: Bernoulli",
      questions: [
        { type: "mc", q: "In a horizontal pipe, where the fluid is faster the pressure is:", options: ["higher", "lower", "the same", "zero"], answer: 1, explain: "By Bernoulli, at constant height p + ½ρv² is constant: if v increases, p decreases." },
        { type: "num", q: "A tank has a hole 1.8 m below the free surface. With g = 10 m/s², what is the speed at which the water comes out?", answer: 6, tol: 0.01, unit: "m/s", explain: "v = √(2gh) = √(2·10·1.8) = √36 = 6 m/s." },
        { type: "tf", q: "Bernoulli's principle expresses the conservation of energy for an ideal fluid.", answer: true, explain: "The three terms are energies per unit volume: pressure, kinetic and potential." }
      ]
    },
    {
      type: "text",
      title: "Viscosity: real fluids",
      html: `<p>In real fluids the layers sliding over one another drag on each other and slow each other down: this is <b>viscosity</b>, a kind of \"internal friction\". A viscous fluid flows with difficulty (honey, engine oil), a low-viscosity fluid flows easily (water, air).</p>
<p>It is measured with the <b>coefficient of viscosity η</b> (read \"eta\"), unit: <b>Pa·s</b>. Values at about 20 °C:</p>
<table>
<tr><th>Fluid</th><th>η (Pa·s)</th></tr>
<tr><td>Air</td><td>≈ 1.8·10<sup>-5</sup></td></tr>
<tr><td>Water</td><td>≈ 1.0·10<sup>-3</sup></td></tr>
<tr><td>Blood (37 °C)</td><td>≈ 3-4·10<sup>-3</sup></td></tr>
<tr><td>Olive oil</td><td>≈ 0.08</td></tr>
<tr><td>Glycerine</td><td>≈ 1.4</td></tr>
<tr><td>Honey</td><td>≈ 10 (very variable)</td></tr>
</table>
<p>The viscosity of <b>liquids decreases with temperature</b> (this is why hot oil flows better), whereas that of gases <b>increases</b>.</p>
<p>In a cylindrical pipe of radius r and length L, a viscous fluid only flows if there is a <b>pressure difference</b> Δp between the two ends. <b>Poiseuille's law</b> (valid for laminar flow) gives the flow rate:</p>
<p style="text-align:center"><b>Q = π · r⁴ · Δp / (8 · η · L)</b></p>
<p>Notice the dependence on the <b>fourth power of the radius</b>: halving the radius makes the flow rate 1/16! For blood this is crucial: a slight reduction in the diameter of an artery (because of cholesterol deposits) forces the heart to raise the pressure a lot to keep the flow rate up, with the risk of high blood pressure and heart attack.</p>
<p>Viscosity also determines the <b>drag</b> on a body moving through a fluid. For a small sphere of radius r moving slowly at speed v, <b>Stokes' law</b> gives the viscous drag force <b>F = 6π·η·r·v</b>. A small sphere falling through a liquid accelerates until it reaches a <b>terminal velocity</b>, when weight, buoyancy (Archimedes' upthrust) and drag balance: this is the principle of the falling-ball viscometer, and it explains why fog droplets stay suspended and sand settles slowly in water.</p>`
    },
    {
      type: "text",
      title: "Laminar and turbulent flow",
      html: `<p>When a fluid flows slowly the flow is <b>laminar</b>: the layers slide parallel to each other. If the speed rises above a certain limit the flow becomes <b>turbulent</b>: eddies appear, the flow becomes chaotic and the resistance increases. The transition is governed by a dimensionless number, the <b>Reynolds number</b>:</p>
<p style="text-align:center"><b>Re = ρ · v · d / η</b> &nbsp; (d = diameter of the pipe)</p>
<p>In a circular pipe the flow is laminar for Re ≲ 2000 and turbulent for Re ≳ 4000 (in between it is unstable). You can see this clearly in the smoke from a candle that has just been blown out, which rises in a neat thread (laminar flow) and at a certain height breaks up into swirls. Heart murmurs heard through a stethoscope and the noise of a tap turned on full are caused by turbulence. Bernoulli's principle only holds for laminar, non-viscous flows: with turbulence and viscosity part of the mechanical energy is turned into heat.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand moving fluids",
      intro: "The behaviour of fluids becomes intuitive with the right analogies.",
      tabs: [
        {
          label: "🚗 Traffic",
          html: "<p>Imagine a motorway that goes from four lanes down to one: the cars must <b>speed up</b> to handle the same flow, otherwise a queue builds up (the flow rate cannot change, otherwise cars would vanish or appear out of nowhere). The continuity equation is exactly this: <b>flow in = flow out</b>. The narrowing forces a higher speed, just like the constriction in the pipe.</p>"
        },
        {
          label: "⚡ Energy is transformed",
          html: "<p>Bernoulli is conservation of energy told in terms of pressure. Imagine a ball on a table: if it picks up speed, the energy has come from somewhere (a drop in height or a push). In a fluid the energy can be held in three \"banks\": <b>pressure</b> (energy stored like in a compressed spring), <b>speed</b> (kinetic energy) and <b>height</b> (potential energy). When one goes up, the others go down: fast = lower pressure, at constant height.</p>"
        },
        {
          label: "🔗 Match laws and formulas",
          html: "<p>Match each law to its expression.</p>",
          widget: "match",
          options: { pairs: [
            ["Flow rate", "Q = A·v"],
            ["Continuity equation", "A1·v1 = A2·v2"],
            ["Bernoulli's principle", "p + ½ρv² + ρgh = constant"],
            ["Torricelli's theorem", "v = √(2gh)"],
            ["Poiseuille's law", "Q = πr⁴Δp/(8ηL)"]
          ] }
        },
        {
          label: "🎨 Drawing: the Venturi effect",
          html: "<p>In the narrow section the level in the small tube is lower: the pressure is lower. This is the principle of the Venturi meter.</p>",
          svg: "<svg viewBox='0 0 600 280' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='280' fill='#ecfeff'/><g font-family='sans-serif'><path d='M30 170 L 200 170 L 280 195 L 400 195 L 480 170 L 570 170 L 570 240 L 480 240 L 400 215 L 280 215 L 200 240 L 30 240 Z' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='3'/><rect x='90' y='70' width='20' height='100' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='3'/><rect x='320' y='110' width='20' height='85' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='3'/><line x1='60' y1='70' x2='140' y2='70' stroke='#dc2626' stroke-width='2' stroke-dasharray='5 4'/><text x='100' y='60' font-size='14' fill='#991b1b' text-anchor='middle'>high p</text><text x='330' y='100' font-size='14' fill='#991b1b' text-anchor='middle'>low p</text><text x='130' y='210' font-size='14' fill='#1e3a8a' text-anchor='middle'>small v</text><text x='340' y='235' font-size='14' fill='#1e3a8a' text-anchor='middle'>large v</text><text x='300' y='30' font-size='15' fill='#0f172a' text-anchor='middle' font-weight='bold'>Lower pressure where the fluid is faster</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Daniel Bernoulli and the family of mathematicians",
      html: `<p>The Bernoullis were a dynasty of mathematicians and physicists from Basel: <b>Jakob</b>, <b>Johann</b> (Euler's teacher) and <b>Daniel</b> (1700-1782), Johann's son. Father and son had a difficult relationship: in 1734 Daniel shared a prize of the Paris Academy with his father, and Johann, jealous, threw him out of the house. When Daniel published <i>Hydrodynamica</i> (1738), Johann wrote his own <i>Hydraulica</i> and backdated it to 1732 to claim priority, a famous case of plagiarism within one family. In <i>Hydrodynamica</i> Daniel also set out an early kinetic theory of gases: pressure as the effect of particles colliding with the walls.</p>`
    },
    {
      type: "curiosity",
      title: "Water clocks",
      html: `<p>In a container emptying through a hole, according to Torricelli the exit speed v = √(2gh) decreases as the level falls, so the flow slows down and a simple cylinder does not measure time evenly. Ancient water clocks (<i>clepsydrae</i>), already used in Egypt (examples have been found at Karnak) and later in Greece and Rome, therefore had walls shaped like a truncated cone and scales calibrated to compensate for the change. An hourglass, on the other hand, has an almost constant flow, because sand does not behave like an ideal fluid.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of fluid dynamics",
      nodes: [
        { id: "ideale", label: "Ideal fluid", x: 50, y: 8, color: "#2563eb", html: "Incompressible, non-viscous, steady and laminar flow.", why: "It is a model: it removes the complications (viscosity, turbulence, compressibility) so we can understand the essential physics. Euler and Bernoulli used it in the eighteenth century; it was later corrected by Navier and Stokes to include viscosity." },
        { id: "continuita", label: "Continuity A·v = const", x: 15, y: 45, color: "#16a34a", html: "The flow rate Q = A·v is constant in a flow tube: where it narrows, the fluid speeds up.", why: "It expresses the conservation of mass (or of volume for an incompressible fluid): fluid is neither created nor lost in the pipe." },
        { id: "bernoulli", label: "Bernoulli", x: 55, y: 45, color: "#ef4444", html: "p + ½ρv² + ρgh = constant along a streamline.", why: "It expresses the conservation of energy (work done by pressure forces = change in kinetic and potential energy). Published by Daniel Bernoulli in Hydrodynamica (1738) and formalised by Euler." },
        { id: "torricelli", label: "Torricelli and applications", x: 88, y: 45, color: "#f59e0b", html: "v = √(2gh) for flow out of a hole; Venturi, lift, sprayers.", why: "Evangelista Torricelli found it in 1643, forty years before Newton's laws: it is a special case of Bernoulli's principle." },
        { id: "viscosita", label: "Viscosity η", x: 30, y: 85, color: "#8b5cf6", html: "Internal friction of fluids; Poiseuille Q = πr⁴Δp/(8ηL); Stokes F = 6πηrv.", why: "Newton (1687) suggested that the friction between layers is proportional to the velocity gradient. Poiseuille (1840) studied flow in blood capillaries and found the dependence on r⁴." },
        { id: "turbolenza", label: "Turbulence and Reynolds", x: 75, y: 85, color: "#64748b", html: "At high Re the flow becomes chaotic; Re = ρvd/η.", why: "Osborne Reynolds (1883) showed, with a thread of ink in a glass tube, that the transition to turbulence depends on a dimensionless number. It is still an open problem in physics." }
      ],
      edges: [["ideale", "continuita", "implies"], ["ideale", "bernoulli", "implies"], ["bernoulli", "torricelli", "special case"], ["ideale", "viscosita", "corrected by"], ["viscosita", "turbolenza", "up to"]]
    }
  ],
  glossary: [
    { t: "Ideal fluid", d: "A model of a fluid that is incompressible, non-viscous, in steady and laminar flow." },
    { t: "Flow rate", d: "The volume of fluid passing through a cross-section per unit time: Q = A·v (m³/s)." },
    { t: "Continuity equation", d: "A1·v1 = A2·v2: the flow rate is constant in a flow tube." },
    { t: "Streamline", d: "The path followed by a particle of fluid in steady flow." },
    { t: "Bernoulli's principle", d: "p + ½ρv² + ρgh = constant: conservation of energy for an ideal fluid." },
    { t: "Lift", d: "The force perpendicular to the airflow that holds up a wing, due to the pressure difference." },
    { t: "Viscosity", d: "The internal friction of a fluid; it is measured by η in Pa·s." },
    { t: "Reynolds number", d: "Re = ρvd/η: predicts the transition from laminar to turbulent flow." },
    { t: "Turbulent flow", d: "Chaotic flow with eddies, which dissipates energy." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the SI unit of flow rate?", options: ["m/s", "m³/s", "Pa", "kg/m³"], answer: 1, explain: "Q = ΔV/Δt: cubic metres per second." },
      { type: "num", q: "A pipe with a cross-section of 0.005 m² carries water at a speed of 4 m/s. Calculate the flow rate in L/s.", answer: 20, tol: 0.01, unit: "L/s", explain: "Q = 0.005 × 4 = 0.02 m³/s = 20 L/s." },
      { type: "num", q: "A pipe with a diameter of 4 cm narrows to 2 cm. If the speed in the wide section is 1 m/s, what is it in the narrow section?", answer: 4, tol: 0.01, unit: "m/s", explain: "The area is proportional to the square of the diameter: A1/A2 = 4, so v2 = 4 m/s." },
      { type: "tf", q: "According to Bernoulli's principle, at constant height, the pressure is higher where the speed is higher.", answer: false, explain: "It is the other way round: p + ½ρv² is constant, so if v increases p decreases." },
      { type: "num", q: "A tank has a hole 5 m below the free surface. With g = 9.8 m/s², what is the speed at which the water comes out?", answer: 9.9, tol: 0.1, unit: "m/s", explain: "v = √(2gh) = √(2·9.8·5) = √98 ≈ 9.9 m/s." },
      { type: "num", q: "In a horizontal pipe water goes from 1 m/s to 3 m/s (ρ = 1000 kg/m³). By how much does the pressure drop?", answer: 4000, tol: 1, unit: "Pa", explain: "Δp = ½ρ(v2² − v1²) = 500 × (9 − 1) = 4000 Pa." },
      { type: "mc", q: "How does the flow rate in a pipe change (Poiseuille) if the radius doubles, with the same Δp, η and L?", options: ["It doubles", "It quadruples", "It becomes 8 times larger", "It becomes 16 times larger"], answer: 3, explain: "Q ∝ r⁴: 2⁴ = 16." },
      { type: "tf", q: "The viscosity of liquids generally decreases as temperature increases.", answer: true, explain: "Hot oil flows better than cold oil." },
      { type: "mc", q: "Why does the air above an aircraft wing contribute to lift?", options: ["It is slower and at higher pressure", "It is faster and at lower pressure", "It is still", "It has a higher density"], answer: 1, explain: "Above the wing the flow is faster and the pressure is lower: the difference produces an upward push." },
      { type: "order", q: "Put in order of increasing viscosity (approximately).", items: ["Air", "Water", "Olive oil", "Honey"], explain: "η ≈ 2·10⁻⁵ (air) < 10⁻³ (water) < 0.08 (oil) < 10 Pa·s (honey)." }
    ]
  }
});
