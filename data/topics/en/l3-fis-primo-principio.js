TOPIC('en', {
  id: "l3-fis-primo-principio",
  title: "The first law of thermodynamics",
  intro: "If you rub your hands together they warm up; if you pump up your bike tyre, the pump gets hot; the steam in a pressure cooker lifts the lid. In all these cases <b>heat</b>, <b>work</b> and <b>energy</b> turn into one another. The <b>first law of thermodynamics</b> is the great balance sheet that links them: energy is neither created nor destroyed, but it can be converted and transferred. We will learn to calculate work and heat in the <b>processes</b> of a gas (isobaric, isochoric, isothermal, adiabatic) and understand why no machine can run without \"fuel\".",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "The thermodynamic system",
      html: `<p>In thermodynamics we choose a portion of the universe to study, the <b>system</b> (for example a gas in a cylinder with a piston); everything else is the <b>surroundings</b>. A system can be:</p>
<ul>
<li><b>open</b>: it exchanges matter and energy with the surroundings (a pan without a lid);</li>
<li><b>closed</b>: it exchanges only energy (a gas in a closed cylinder);</li>
<li><b>isolated</b>: it exchanges neither matter nor energy.</li>
</ul>
<p>The state of a gas in equilibrium is described by p, V, T (and n). A <b>process</b> (or transformation) is the change from an initial state to a final state. To represent it as a curve on the <b>p–V diagram</b> (Clapeyron diagram: V on the horizontal axis and p on the vertical axis) we consider <b>quasi-static</b> processes, very slow ones in which the gas passes through a succession of equilibrium states, and <b>reversible</b> ones (they can be run backwards without leaving any trace in the surroundings).</p>
<p>Quantities are divided into <b>state functions</b> (which depend only on the current state: p, V, T, U, and entropy, which we will meet later) and <b>process quantities</b> (work and heat: they depend on the path followed between two states).</p>`
    },
    {
      type: "text",
      title: "Thermodynamic work",
      html: `<p>A gas that expands pushes the piston and does <b>work</b> on the surroundings. If the pressure is constant (an <b>isobaric</b> process), a piston of area A moves by Δx: W = F·Δx = p·A·Δx = <b>p·ΔV</b>.</p>
<p style="text-align:center"><b>W = p · ΔV</b> (isobaric) &nbsp; — &nbsp; in general, W = <b>area under the curve</b> on the (V, p) diagram</p>
<ul>
<li>expansion (ΔV &gt; 0): W &gt; 0, the system <b>does</b> work;</li>
<li>compression (ΔV &lt; 0): W &lt; 0, the surroundings do work <b>on</b> the system;</li>
<li>at constant volume (isochoric): W = 0, the piston does not move.</li>
</ul>
<p>The sign convention used here (the one used in Italian schools): <b>W &gt; 0 if work is done by the system</b>, <b>Q &gt; 0 if heat is absorbed by the system</b>. Work depends on the path: between the same two states, an expansion along a different path does a different amount of work, because the area under the curve changes. In a <b>cycle</b> (a closed path) the net work is the <b>area enclosed</b> by the cycle: positive if it is traversed clockwise.</p>
<p>Example: a gas at 1.0·10⁵ Pa expands at constant pressure by 2.0 L (= 2.0·10⁻³ m³): W = 1.0·10⁵ × 2.0·10⁻³ = <b>200 J</b>.</p>`
    },
    {
      type: "svg",
      title: "Work as an area",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="p1A" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1d4ed8"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="60" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#334155" stroke-width="3"/>
<text x="560" y="278" font-size="15" fill="#334155" text-anchor="end">volume V</text>
<text x="35" y="140" font-size="15" fill="#334155" transform="rotate(-90 35 140)" text-anchor="middle">pressure p</text>
<polygon points="150,250 150,110 400,110 400,250" fill="#93c5fd" fill-opacity="0.7" stroke="#1e3a8a" stroke-width="3"/>
<circle cx="150" cy="110" r="7" fill="#1d4ed8"/>
<circle cx="400" cy="110" r="7" fill="#1d4ed8"/>
<line x1="165" y1="110" x2="380" y2="110" stroke="#1d4ed8" stroke-width="4" marker-end="url(#p1A)"/>
<text x="150" y="272" font-size="14" fill="#334155" text-anchor="middle">V1</text>
<text x="400" y="272" font-size="14" fill="#334155" text-anchor="middle">V2</text>
<text x="275" y="190" font-size="17" fill="#1e3a8a" text-anchor="middle" font-weight="bold">area = W = p·ΔV</text>
<text x="275" y="95" font-size="15" fill="#1e3a8a" text-anchor="middle">isobaric (expansion)</text>
</g>
</svg>`,
      caption: "On the (V, p) diagram the work done by the gas in a process is the area under the curve."
    },
    {
      type: "text",
      title: "Heat, internal energy and the first law",
      html: `<p>The <b>internal energy U</b> of a system is the sum of the kinetic and potential energies of its molecules. For a monatomic ideal gas U = (3/2)·nRT, for a diatomic one (at room temperature) U = (5/2)·nRT: it <b>depends only on T</b>. It is a state function.</p>
<p>In the nineteenth century a puzzle was solved: <b>heat</b> was seen as a fluid (\"caloric\"), but experiments such as those of Count Rumford (1798, heat produced by friction while boring cannons) and above all of <b>James Prescott Joule</b> (1843-1850) showed that heat is a <b>form of energy in transit</b>. Joule let weights fall, turning paddles immersed in water: the water warmed up, and the amount of heat produced was proportional to the work done. He found the <b>mechanical equivalent of heat</b>: <b>1 cal = 4.186 J</b>.</p>
<p>Building on this discovery, Julius Robert Mayer (1842), Joule and Hermann von Helmholtz (1847) formulated the conservation of energy. The <b>first law of thermodynamics</b> is its form for thermal systems:</p>
<p style="text-align:center"><b>ΔU = Q − W</b></p>
<p>that is: the change in internal energy equals the heat absorbed minus the work done by the system. Equivalently <b>Q = ΔU + W</b>: the heat absorbed goes into increasing the internal energy and doing work.</p>
<p>Important consequences:</p>
<ul>
<li>for an <b>isolated</b> system (Q = 0, W = 0) U is conserved;</li>
<li>in a <b>cycle</b> the system returns to its initial state: ΔU = 0, so <b>Q<sub>net</sub> = W<sub>net</sub></b>: a cyclic machine can produce work only by absorbing heat;</li>
<li>it is <b>impossible</b> to build a "<b>perpetual motion machine of the first kind</b>", that is, a machine that produces work out of nothing, without any energy going in.</li>
</ul>`
    },
    {
      type: "example",
      title: "The energy balance of a process",
      html: `<p>A gas absorbs 500 J of heat and, as it expands, does 200 J of work. ΔU = Q − W = 500 − 200 = <b>+300 J</b>: the internal energy rises and so the temperature increases.</p>
<p>A gas is compressed by a piston that does 150 J of work on the gas (W = −150 J) while it gives out 40 J of heat to the surroundings (Q = −40 J). ΔU = −40 − (−150) = <b>+110 J</b>: the compression warms the gas.</p>
<p><b>The bicycle pump.</b> When you push it in quickly, the heat does not have time to escape: Q ≈ 0 and ΔU = −W &gt; 0. The compressed air warms up and the pump gets hot. The same principle, on a large scale, ignites the fuel in diesel engines without a spark plug.</p>`
    },
    {
      type: "quiz",
      title: "Check: the first law",
      questions: [
        { type: "num", q: "A system absorbs 800 J of heat and does 300 J of work. What is the change in internal energy?", answer: 500, tol: 0, unit: "J", explain: "ΔU = Q − W = 800 − 300 = 500 J." },
        { type: "num", q: "A gas expands at a constant pressure of 2·10⁵ Pa, its volume changing by 3 L. How much work does it do?", answer: 600, tol: 0, unit: "J", explain: "W = p·ΔV = 2·10⁵ × 3·10⁻³ = 600 J." },
        { type: "tf", q: "In a thermodynamic cycle the change in internal energy is zero.", answer: true, explain: "Internal energy is a state function: returning to the initial state ΔU = 0, so net Q = net W." }
      ]
    },
    {
      type: "text",
      title: "Processes of an ideal gas",
      html: `<p>Let us apply ΔU = Q − W to the four fundamental processes of an ideal gas. Remember that, for an ideal gas, ΔU = n·C<sub>V</sub>·ΔT, with <b>C<sub>V</sub> = (3/2)R</b> (monatomic) or (5/2)R (diatomic): C<sub>V</sub> is the <b>molar heat capacity at constant volume</b>.</p>
<table>
<tr><th>Process</th><th>Condition</th><th>Work W</th><th>Heat Q</th><th>ΔU</th></tr>
<tr><td><b>Isochoric</b></td><td>V constant</td><td>0</td><td>n·C<sub>V</sub>·ΔT</td><td>= Q</td></tr>
<tr><td><b>Isobaric</b></td><td>p constant</td><td>p·ΔV = nRΔT</td><td>n·C<sub>P</sub>·ΔT</td><td>n·C<sub>V</sub>·ΔT</td></tr>
<tr><td><b>Isothermal</b></td><td>T constant</td><td>nRT·ln(V<sub>f</sub>/V<sub>i</sub>)</td><td>= W</td><td>0</td></tr>
<tr><td><b>Adiabatic</b></td><td>Q = 0</td><td>= −ΔU = −nC<sub>V</sub>ΔT</td><td>0</td><td>−W</td></tr>
</table>
<p><b>Mayer's relation</b>: <b>C<sub>P</sub> = C<sub>V</sub> + R</b>. At constant pressure part of the heat goes into making the gas expand (work nRΔT), so more heat is needed than at constant volume to raise the temperature by ΔT. For a monatomic gas C<sub>P</sub> = (5/2)R. The ratio <b>γ = C<sub>P</sub>/C<sub>V</sub></b> is 5/3 ≈ 1.67 for monatomic gases and 7/5 = 1.4 for diatomic gases (air).</p>
<p>In a <b>reversible adiabatic process</b> the relation <b>p·V<sup>γ</sup> = constant</b> holds (and T·V<sup>γ−1</sup> = constant): on the (V, p) diagram the adiabatic curve falls more steeply than the isothermal one. In an adiabatic expansion the gas cools down: the work is done at the expense of the internal energy (this is what happens to air that rises and expands: that is exactly how clouds form; or in a spray can that gets cold when you use it). The <b>isothermal</b> process, on the other hand, is the case in which the gas, in contact with a heat reservoir, absorbs all the heat needed to keep T constant: Q = W.</p>`
    },
    {
      type: "svg",
      title: "The processes on the p–V diagram",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="p1B" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#0f172a"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="60" y1="260" x2="560" y2="260" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="260" x2="60" y2="20" stroke="#334155" stroke-width="3"/>
<text x="555" y="285" font-size="15" fill="#334155" text-anchor="end">V</text>
<text x="40" y="30" font-size="15" fill="#334155" text-anchor="end">p</text>
<circle cx="150" cy="80" r="7" fill="#0f172a"/>
<text x="130" y="75" font-size="16" fill="#0f172a" font-weight="bold">A</text>
<line x1="150" y1="80" x2="150" y2="200" stroke="#16a34a" stroke-width="4"/>
<text x="95" y="150" font-size="14" fill="#166534">isochoric</text>
<line x1="150" y1="80" x2="400" y2="80" stroke="#2563eb" stroke-width="4"/>
<text x="275" y="68" font-size="14" fill="#1e3a8a" text-anchor="middle">isobaric</text>
<path d="M150 80 Q 220 140 400 200" stroke="#dc2626" stroke-width="4" fill="none"/>
<text x="330" y="170" font-size="14" fill="#991b1b">isothermal</text>
<path d="M150 80 Q 190 170 330 215" stroke="#f59e0b" stroke-width="4" fill="none"/>
<text x="195" y="215" font-size="14" fill="#b45309">adiabatic</text>
<text x="450" y="130" font-size="15" fill="#0f172a">Starting from A:</text>
<text x="450" y="152" font-size="14" fill="#166534">isochoric: W = 0</text>
<text x="450" y="172" font-size="14" fill="#1e3a8a">isobaric: W = pΔV</text>
<text x="450" y="192" font-size="14" fill="#991b1b">isothermal: ΔU = 0</text>
<text x="450" y="212" font-size="14" fill="#b45309">adiabatic: Q = 0</text>
</g>
</svg>`,
      caption: "The four fundamental processes on the Clapeyron (p–V) diagram (schematic curves)."
    },
    {
      type: "example",
      title: "Four calculations with 1 mole of gas",
      html: `<p>Take n = 1 mol of monatomic ideal gas (C<sub>V</sub> = 12.47 J/mol·K, C<sub>P</sub> = 20.79 J/mol·K, R = 8.314).</p>
<ul>
<li><b>Isochoric</b> from 300 K to 340 K: W = 0; Q = ΔU = 1.5 × 8.314 × 40 ≈ <b>499 J</b>.</li>
<li><b>Isobaric</b> from 300 K to 340 K: Q = 2.5 × 8.314 × 40 ≈ <b>831 J</b>; W = R·ΔT = 8.314 × 40 ≈ <b>333 J</b>; ΔU = 499 J. Check: Q − W = 831 − 333 = 498 ✓ (rounding).</li>
<li><b>Isothermal</b> at 300 K with the volume doubling: ΔU = 0; Q = W = nRT·ln 2 = 8.314 × 300 × 0.693 ≈ <b>1729 J</b>.</li>
<li><b>Adiabatic</b> with work done by the gas W = 500 J: Q = 0, ΔU = −500 J, ΔT = −500/(1.5 × 8.314) ≈ <b>−40 K</b>: the gas cools by 40 K.</li>
</ul>
<p>Compare the first two: to heat the same gas by the same ΔT at constant pressure takes more heat (831 J against 499 J), because part of it is "spent" on the work of expansion.</p>`
    },
    {
      type: "widget",
      title: "Processes and conditions",
      widget: "classify",
      options: { groups: ["Isochoric", "Isobaric", "Isothermal", "Adiabatic"], items: [
        ["No work is done (W = 0)", 0],
        ["The heat absorbed is nRΔT plus nC_VΔT", 1],
        ["The internal energy does not change (ΔU = 0)", 2],
        ["No heat is exchanged (Q = 0)", 3],
        ["A gas in a rigid container is heated", 0],
        ["A gas with a free piston at atmospheric pressure is heated", 1],
        ["A gas slowly expanded in contact with a heat reservoir", 2],
        ["Very rapid compression with a pump", 3]
      ] },
      caption: "Recognise the process from its constraint."
    },
    {
      type: "quiz",
      title: "Check: processes",
      questions: [
        { type: "num", q: "One mole of monatomic gas (C_V = 12.5 J/mol·K) is heated at constant volume by 20 K. How much heat does it absorb?", answer: 250, tol: 1, unit: "J", explain: "Q = n·C_V·ΔT = 12.5 × 20 = 250 J." },
        { type: "mc", q: "In an isothermal expansion of an ideal gas, the heat absorbed is:", options: ["zero", "equal to the work done", "equal to the change in internal energy", "negative"], answer: 1, explain: "ΔU = 0 so Q = W." },
        { type: "tf", q: "In an adiabatic expansion the temperature of an ideal gas decreases.", answer: true, explain: "Q = 0: the gas does work at the expense of its internal energy, so ΔU < 0 and T falls." }
      ]
    },
    {
      type: "text",
      title: "Specific heat capacity and molar heat capacities",
      html: `<p>Remember from earlier years that heating a substance of mass m requires Q = m·c·ΔT (c = specific heat capacity). For gases the amount of heat depends on the type of process: at constant volume you need <b>C<sub>V</sub></b>, at constant pressure you need <b>C<sub>P</sub> = C<sub>V</sub> + R</b>. For solids and liquids, which expand very little, the two values are practically the same. This is why tables give a single specific heat capacity (water: 4186 J/(kg·K)), but for a gas you have to specify which process you mean.</p>
<p>A notable example: the specific heat capacity of <b>air</b> at constant volume is about 718 J/(kg·K) and at constant pressure about 1005 J/(kg·K): heating the air in a closed room takes less energy than heating the same air when it is free to expand.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the first law",
      intro: "Heat, work and internal energy are three sides of the same coin: here are some pictures to help you remember them.",
      tabs: [
        {
          label: "🏦 The bank account",
          html: "<p>Think of internal energy as the <b>balance</b> of an account. Heat Q is a deposit (Q &gt; 0) or a withdrawal (Q &lt; 0) made \"thermally\"; work W is a withdrawal (W &gt; 0 is work done by the system) or a \"mechanical\" deposit. The final balance is: <b>ΔU = Q − W</b>. It does not matter <i>how</i> the money arrived: the balance (U) depends only on the state; the movements Q and W depend on the \"path\".</p>"
        },
        {
          label: "🔥 Hands and the pump",
          html: "<p>You rub your hands: you do (mechanical) work and your hands warm up without any heat being supplied: <b>ΔU = −W</b>, work done on the system. Then you hold a hot mug: no work, only heat: <b>ΔU = Q</b>. These are two different routes to the same result: increasing the internal energy. Joule showed that whichever route you take, the same effect requires the same amount of energy: 4.186 J for every calorie.</p>"
        },
        {
          label: "🔗 Match process and formula",
          html: "<p>Match each process to its feature.</p>",
          widget: "match",
          options: { pairs: [
            ["Isochoric", "W = 0, Q = ΔU"],
            ["Isobaric", "W = p·ΔV"],
            ["Isothermal", "ΔU = 0, Q = W"],
            ["Adiabatic", "Q = 0, ΔU = −W"],
            ["Cycle", "ΔU = 0, Q = W"]
          ] }
        },
        {
          label: "🔄 Drawing: a cycle",
          html: "<p>In a cycle the system returns to its initial state: the net work is the area enclosed by the curve. Here the cycle is clockwise, so the work is positive (as in an engine).</p>",
          svg: "<svg viewBox='0 0 600 280' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='280' fill='#f0fdf4'/><defs><marker id='p1C' markerWidth='10' markerHeight='10' refX='8' refY='5' orient='auto'><path d='M0 0 L10 5 L0 10 Z' fill='#0f172a'/></marker></defs><g font-family='sans-serif'><line x1='60' y1='240' x2='540' y2='240' stroke='#334155' stroke-width='3'/><line x1='60' y1='240' x2='60' y2='20' stroke='#334155' stroke-width='3'/><polygon points='160,190 160,70 400,70 400,190' fill='#86efac' fill-opacity='0.7' stroke='#166534' stroke-width='4'/><line x1='160' y1='130' x2='160' y2='80' stroke='#0f172a' stroke-width='3' marker-end='url(#p1C)'/><line x1='250' y1='70' x2='330' y2='70' stroke='#0f172a' stroke-width='3' marker-end='url(#p1C)'/><line x1='400' y1='110' x2='400' y2='170' stroke='#0f172a' stroke-width='3' marker-end='url(#p1C)'/><line x1='330' y1='190' x2='240' y2='190' stroke='#0f172a' stroke-width='3' marker-end='url(#p1C)'/><text x='280' y='135' font-size='16' fill='#14532d' text-anchor='middle' font-weight='bold'>net work = area</text><text x='280' y='160' font-size='14' fill='#14532d' text-anchor='middle'>ΔU = 0, W = net Q</text><text x='300' y='265' font-size='14' fill='#334155' text-anchor='middle'>V</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Joule and the honeymoon",
      html: `<p>James Prescott Joule (1818-1889), the son of a wealthy Manchester brewer, made his measurements with instruments of exceptional precision for the time: his thermometers could detect changes of a two-hundredth of a degree. The story goes that on his honeymoon in Switzerland (1847) he took a thermometer with him to measure the temperature difference between the top and the bottom of a waterfall: as it falls, the water should warm up by about 0.23 °C for every 100 metres (potential energy → internal energy). In everyday life this tiny warming is invisible, but the principle is exact: in his honour the unit of energy is called the <b>joule</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Perpetual motion: a thousand patents rejected",
      html: `<p>For centuries inventors designed machines that were supposed to produce work without consuming anything: unbalanced wheels, pumps that recirculate water, cleverly arranged magnets. None of them works, and the first law explains why: the conservation of energy rules out <b>perpetual motion of the first kind</b>. As early as 1775 the Paris Academy of Sciences stopped examining designs of this kind; even today the patent offices of many countries do not accept applications for perpetual motion machines without a working model. (There is, however, an even subtler limit, perpetual motion of the second kind, which will be the subject of the next topic.)</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the first law",
      nodes: [
        { id: "u", label: "Internal energy U", x: 15, y: 12, color: "#2563eb", html: "The sum of the energies of the molecules; for an ideal gas it depends only on T.", why: "Kinetic theory shows that U is the sum of the kinetic (and rotational) energy of the molecules. It is a state function: it depends only on the state, not on how it was reached." },
        { id: "q", label: "Heat Q", x: 50, y: 12, color: "#ef4444", html: "Energy exchanged between system and surroundings because of a temperature difference.", why: "For a century heat was thought to be a fluid (caloric). Rumford (1798) and Joule (1843-50) showed that it is energy in transit, convertible into work at a fixed rate: 4.186 J/cal." },
        { id: "w", label: "Work W", x: 85, y: 12, color: "#16a34a", html: "Energy exchanged through a change in volume against a pressure: W = p·ΔV, an area on the (V, p) diagram.", why: "It follows from W = F·Δx applied to a piston. It depends on the path: this is why the first law involves Q as well." },
        { id: "primo", label: "ΔU = Q − W", x: 50, y: 45, color: "#8b5cf6", html: "The first law: conservation of energy for thermal systems.", why: "Formulated by Mayer, Joule and Helmholtz (1842-47) and in mathematical form by Clausius (1850). It rules out perpetual motion of the first kind." },
        { id: "trasf", label: "Isochoric, isobaric, isothermal, adiabatic", x: 20, y: 82, color: "#f59e0b", html: "Special cases: W = 0; W = pΔV; ΔU = 0; Q = 0.", why: "They are obtained by imposing a constraint (volume, pressure, temperature or insulation) and using pV = nRT and U = nC_VT." },
        { id: "ciclo", label: "Cycles and engines", x: 78, y: 82, color: "#64748b", html: "In a cycle ΔU = 0, so the net work equals the net heat absorbed.", why: "The steam engines of the nineteenth century made it urgent to understand how to get work from heat; the full answer also requires the second law." }
      ],
      edges: [["u", "primo", "its change in"], ["q", "primo", "enters as"], ["w", "primo", "enters as"], ["primo", "trasf", "applied to"], ["primo", "ciclo", "implies"]]
    }
  ],
  glossary: [
    { t: "Thermodynamic system", d: "The part of the universe being studied; the rest is the surroundings." },
    { t: "State function", d: "A quantity that depends only on the state of the system (p, V, T, U)." },
    { t: "Internal energy", d: "The sum of the (kinetic and potential) energies of the molecules of the system." },
    { t: "Heat", d: "Energy exchanged because of a temperature difference." },
    { t: "Thermodynamic work", d: "Energy exchanged through a change in volume: W = p·ΔV at constant p." },
    { t: "First law", d: "ΔU = Q − W: conservation of energy for thermodynamic systems." },
    { t: "Adiabatic process", d: "A process with no exchange of heat (Q = 0)." },
    { t: "Mayer's relation", d: "C_P = C_V + R for an ideal gas." },
    { t: "Thermodynamic cycle", d: "A sequence of processes that brings the system back to its initial state." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which formula expresses the first law of thermodynamics (W = work done by the system)?", options: ["ΔU = Q + W", "ΔU = Q − W", "ΔU = W − Q", "Q = ΔU − W"], answer: 1, explain: "ΔU = Q − W: the heat absorbed goes into increasing U and doing work." },
      { type: "num", q: "A gas absorbs 600 J and does 450 J of work. What is ΔU?", answer: 150, tol: 0, unit: "J", explain: "ΔU = 600 − 450 = 150 J." },
      { type: "num", q: "A gas expands at 1.5·10⁵ Pa from 4 L to 10 L. How much work does it do?", answer: 900, tol: 0, unit: "J", explain: "W = p·ΔV = 1.5·10⁵ × 6·10⁻³ = 900 J." },
      { type: "tf", q: "In an isochoric process the gas does no work.", answer: true, explain: "ΔV = 0 so W = p·ΔV = 0." },
      { type: "num", q: "How much heat is needed to heat 2 mol of monatomic gas (C_V = 12.47 J/mol·K) by 30 K at constant volume?", answer: 748, tol: 2, unit: "J", explain: "Q = n·C_V·ΔT = 2 × 12.47 × 30 ≈ 748 J." },
      { type: "mc", q: "In an adiabatic expansion of an ideal gas:", options: ["Q > 0", "T is constant", "the gas cools down", "the work is zero"], answer: 2, explain: "Q = 0: the work done by the gas comes at the expense of U, so the temperature falls." },
      { type: "mc", q: "Which relation links C_P and C_V for an ideal gas?", options: ["C_P = C_V − R", "C_P = C_V + R", "C_P = R/C_V", "C_P = C_V"], answer: 1, explain: "It is Mayer's relation: at constant pressure part of the heat goes into work." },
      { type: "tf", q: "The first law makes it possible to build a machine that produces work without absorbing energy.", answer: false, explain: "This is forbidden: it is perpetual motion of the first kind, ruled out by the conservation of energy." },
      { type: "num", q: "In a cycle a gas absorbs a total net heat of 900 J. How much net work does it do?", answer: 900, tol: 0, unit: "J", explain: "ΔU = 0 in the cycle, so net W = net Q = 900 J." },
      { type: "order", q: "Put the steps of a thermodynamic argument for an isobaric process in order.", items: ["Recognise that p is constant", "Calculate W = p·ΔV", "Calculate ΔU = n·C_V·ΔT", "Find Q = ΔU + W"], explain: "First the constraint, then the work, then the internal energy and finally the heat from the first law." }
    ]
  }
});
