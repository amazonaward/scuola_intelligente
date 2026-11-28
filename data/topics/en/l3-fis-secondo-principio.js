TOPIC('en', {
  id: "l3-fis-secondo-principio",
  title: "The second law and entropy",
  intro: "The first law says that energy is conserved, but it does not explain why a cup of coffee cools down and never warms up on its own, why ice melts in a warm room and not the other way round, why broken eggs do not put themselves back together. There is an \"arrow of time\" that the first law ignores. The <b>second law of thermodynamics</b> explains it with a new quantity, <b>entropy</b>, and sets an unbreakable limit on the <b>efficiency</b> of every heat engine. Born out of the effort to improve steam engines, it is one of the deepest and most general laws in all of physics.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "The problem: processes that do not run backwards",
      html: `<p>In everyday life many processes happen in only one direction, even though the reverse would not violate the conservation of energy:</p>
<ul>
<li>heat flows from a hot body to a cold one, never spontaneously the other way;</li>
<li>a gas compressed into a corner of a container expands to fill the whole volume, but it never "gathers itself up" again on its own;</li>
<li>friction turns kinetic energy into heat, but the heat in the brakes does not set the car moving again;</li>
<li>a drop of ink spreads out in water; it does not pull itself back together.</li>
</ul>
<p>All these processes are <b>irreversible</b>. The conservation of energy (the first law) does not distinguish them from their reverse: a second law is needed. There are several statements of it, all equivalent:</p>
<ul>
<li><b>Clausius statement</b> (1850): it is impossible to carry out a process whose <b>sole result</b> is the transfer of heat from a colder body to a hotter one.</li>
<li><b>Kelvin–Planck statement</b> (1851): it is impossible to carry out a cyclic process whose <b>sole result</b> is the absorption of heat from a single reservoir and its complete conversion into work.</li>
</ul>
<p>Pay attention to the words "sole result": a refrigerator moves heat from cold to hot, but by using electrical energy (work). And an isothermal process of a gas converts all the heat into work, but it is not a cycle (at the end the gas is in a different state).</p>`
    },
    {
      type: "text",
      title: "Heat engines and efficiency",
      html: `<p>A <b>heat engine</b> is a device that, working in cycles, converts heat into work. It must exchange heat with <b>two</b> reservoirs at different temperatures:</p>
<ul>
<li>it absorbs heat <b>Q<sub>h</sub></b> (hot) from the hot reservoir at temperature T<sub>h</sub> (the boiler, the combustion);</li>
<li>it produces work <b>W</b>;</li>
<li>it gives out heat <b>Q<sub>c</sub></b> (cold) to the cold reservoir at T<sub>c</sub> (the surroundings, the condenser, the exhaust air).</li>
</ul>
<p>Since ΔU = 0 in a cycle, by the first law <b>W = Q<sub>h</sub> − Q<sub>c</sub></b>. The <b>efficiency</b> is the ratio between what you get (work) and what you spend (heat absorbed):</p>
<p style="text-align:center"><b>η = W / Q<sub>h</sub> = 1 − Q<sub>c</sub> / Q<sub>h</sub></b></p>
<p>The Kelvin–Planck version of the second law is equivalent to saying that <b>η &lt; 1 always</b>: there is no engine with 100% efficiency, because some heat must always be given out to the cold reservoir. A petrol engine has η ≈ 25-35%, a diesel 35-45%, a large combined-cycle power station up to about 60%: the rest of the fuel's energy leaves as heat through the exhaust and the radiator.</p>
<p>Real heat engines were the driving force of the nineteenth century: the steam engines of Thomas Newcomen (1712) and James Watt (1769) pumped water out of mines, drove trains and ships, and powered the Industrial Revolution. Nobody knew their theoretical limit, until a young French engineer worked it out.</p>`
    },
    {
      type: "svg",
      title: "The heat engine",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="s2A" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="s2B" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="s2C" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="150" y="20" width="300" height="50" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="3"/>
<text x="300" y="52" font-size="16" fill="#7f1d1d" text-anchor="middle" font-weight="bold">Hot reservoir  Th</text>
<line x1="300" y1="70" x2="300" y2="115" stroke="#dc2626" stroke-width="5" marker-end="url(#s2A)"/>
<text x="325" y="100" font-size="16" fill="#991b1b" font-weight="bold">Qh</text>
<circle cx="300" cy="150" r="38" fill="#fef9c3" stroke="#a16207" stroke-width="4"/>
<text x="300" y="156" font-size="16" fill="#713f12" text-anchor="middle" font-weight="bold">Engine</text>
<line x1="338" y1="150" x2="440" y2="150" stroke="#16a34a" stroke-width="5" marker-end="url(#s2C)"/>
<text x="445" y="140" font-size="16" fill="#166534" font-weight="bold">W</text>
<line x1="300" y1="188" x2="300" y2="235" stroke="#2563eb" stroke-width="5" marker-end="url(#s2B)"/>
<text x="325" y="215" font-size="16" fill="#1e3a8a" font-weight="bold">Qc</text>
<rect x="150" y="240" width="300" height="50" rx="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
<text x="300" y="272" font-size="16" fill="#1e3a8a" text-anchor="middle" font-weight="bold">Cold reservoir  Tc</text>
<text x="500" y="200" font-size="15" fill="#0f172a">W = Qh − Qc</text>
<text x="500" y="222" font-size="15" fill="#0f172a">η = W/Qh</text>
</g>
</svg>`,
      caption: "Every heat engine absorbs heat Qh from the hot reservoir, produces work W and must give out Qc to the cold reservoir."
    },
    {
      type: "example",
      title: "The efficiency of an engine",
      html: `<p>An engine absorbs Q<sub>h</sub> = 1000 J from combustion and gives out Q<sub>c</sub> = 700 J to the surroundings. The work is W = 1000 − 700 = <b>300 J</b> and the efficiency is η = 300/1000 = <b>0.30 = 30%</b>.</p>
<p>A car burns petrol with a heat of combustion of about 44 MJ/kg. Burning 1 kg releases 44 MJ of heat, but only about 13 MJ (η = 30%) become mechanical work in the engine, and part of that is lost to friction. The rest (≈ 31 MJ) leaves through the exhaust and the radiator: this is why the engine gets hot and why a large part of the petrol's energy does not move the car.</p>`
    },
    {
      type: "text",
      title: "The Carnot cycle",
      html: `<p>In 1824 the young French engineer <b>Sadi Carnot</b> (1796-1832) published <i>Réflexions sur la puissance motrice du feu</i> (Reflections on the Motive Power of Fire), a little book that founded thermodynamics even before the first law. He asked himself: what is the <b>maximum efficiency</b> possible for an engine working between two temperatures? He imagined an ideal, <b>reversible</b> cycle made up of four processes of an ideal gas:</p>
<ol>
<li><b>Isothermal expansion</b> at T<sub>h</sub>: the gas absorbs Q<sub>h</sub> from the hot reservoir and does work;</li>
<li><b>Adiabatic expansion</b>: the gas keeps expanding without exchanging heat and cools from T<sub>h</sub> to T<sub>c</sub>;</li>
<li><b>Isothermal compression</b> at T<sub>c</sub>: the gas gives out Q<sub>c</sub> to the cold reservoir;</li>
<li><b>Adiabatic compression</b>: the gas returns to T<sub>h</sub> and to its initial state.</li>
</ol>
<p><b>Carnot's theorem</b> states that:</p>
<ul>
<li>no engine working between two reservoirs T<sub>h</sub> and T<sub>c</sub> can have a greater efficiency than a reversible engine;</li>
<li>all reversible engines working between the same two temperatures have the <b>same efficiency</b>, which depends only on T<sub>h</sub> and T<sub>c</sub> (not on the working fluid):</li>
</ul>
<p style="text-align:center"><b>η<sub>Carnot</sub> = 1 − T<sub>c</sub> / T<sub>h</sub></b> &nbsp; (temperatures in kelvin!)</p>
<p>The Carnot efficiency is the <b>unbreakable theoretical limit</b>: no real engine reaches it, and η = 1 would require T<sub>c</sub> = 0 K (unattainable). To get a high efficiency you need a <b>very hot</b> hot reservoir and/or a <b>very cold</b> cold reservoir: this is why power-station turbines run on steam at 500-600 °C.</p>
<p>A useful consequence: for reversible engines Q<sub>c</sub>/Q<sub>h</sub> = T<sub>c</sub>/T<sub>h</sub>, and for real ones Q<sub>c</sub>/T<sub>c</sub> ≥ Q<sub>h</sub>/T<sub>h</sub>. This inequality is the seed of entropy.</p>`
    },
    {
      type: "svg",
      title: "The Carnot cycle on the (V, p) diagram",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="60" y1="260" x2="560" y2="260" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="260" x2="60" y2="20" stroke="#334155" stroke-width="3"/>
<text x="555" y="285" font-size="15" fill="#334155" text-anchor="end">V</text>
<text x="40" y="30" font-size="15" fill="#334155" text-anchor="end">p</text>
<path d="M130 60 Q 220 80 320 130" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M320 130 Q 400 170 440 230" stroke="#f59e0b" stroke-width="5" fill="none"/>
<path d="M440 230 Q 340 215 280 195" stroke="#2563eb" stroke-width="5" fill="none"/>
<path d="M280 195 Q 170 140 130 60" stroke="#f59e0b" stroke-width="5" fill="none"/>
<g font-size="16" font-weight="bold" fill="#0f172a"><text x="115" y="55">A</text><text x="328" y="125">B</text><text x="448" y="240">C</text><text x="262" y="205">D</text></g>
<text x="225" y="72" font-size="14" fill="#991b1b">1: isothermal Th (Qh absorbed)</text>
<text x="395" y="170" font-size="14" fill="#b45309">2: adiabatic</text>
<text x="330" y="245" font-size="14" fill="#1e3a8a">3: isothermal Tc (Qc given out)</text>
<text x="105" y="165" font-size="14" fill="#b45309">4: adiabatic</text>
<text x="290" y="170" font-size="15" fill="#14532d" font-weight="bold" text-anchor="middle">W = area</text>
</g>
</svg>`,
      caption: "The Carnot cycle: two isothermals and two adiabatics. The enclosed area is the net work produced."
    },
    {
      type: "example",
      title: "What is the best it can do?",
      html: `<p><b>Heat engine.</b> An engine works between T<sub>h</sub> = 500 K and T<sub>c</sub> = 300 K: η<sub>max</sub> = 1 − 300/500 = <b>0.40 = 40%</b>. If T<sub>h</sub> rises to 600 K: η<sub>max</sub> = 1 − 300/600 = 50%. To get 100 J of work from the 40% engine you must supply at least Q<sub>h</sub> = 100/0.40 = 250 J and give out at least 150 J.</p>
<p><b>Steam power station.</b> Steam at 540 °C (813 K) and a condenser at 30 °C (303 K): η<sub>Carnot</sub> = 1 − 303/813 ≈ <b>63%</b>. Real power stations reach about 40-45% because real cycles (the Rankine cycle) are irreversible and have losses.</p>
<p><b>Ocean temperature gradient.</b> There is a proposal to exploit the difference between tropical surface water (25 °C = 298 K) and deep water (5 °C = 278 K): η<sub>max</sub> = 1 − 278/298 ≈ <b>6.7%</b>. A tiny efficiency even in theory, because of the small temperature difference: this is why such plants are rarely worthwhile.</p>`
    },
    {
      type: "quiz",
      title: "Check: engines and Carnot",
      questions: [
        { type: "num", q: "An engine absorbs 2000 J and gives out 1400 J. What is its efficiency?", answer: 0.3, tol: 0.001, unit: "", explain: "W = 600 J; η = 600/2000 = 0.30." },
        { type: "num", q: "What is the maximum efficiency of an engine operating between 600 K and 300 K?", answer: 0.5, tol: 0.001, unit: "", explain: "η = 1 − 300/600 = 0.5." },
        { type: "tf", q: "A heat engine can have 100% efficiency if it has no friction.", answer: false, explain: "By the second law, part of the heat must be given out to the cold reservoir; η = 1 would require T_c = 0 K." }
      ]
    },
    {
      type: "text",
      title: "Refrigerators and heat pumps",
      html: `<p>A heat engine running in reverse, taking in work to move heat from cold to hot, is a <b>refrigerator</b> or a <b>heat pump</b> (like an air conditioner). The cycle is the same, traversed anticlockwise: the system absorbs Q<sub>c</sub> from the cold reservoir (the inside of the fridge), receives work W (the electric compressor), and gives out Q<sub>h</sub> = Q<sub>c</sub> + W to the hot reservoir (the coil at the back of the fridge).</p>
<p>Its performance is measured by the <b>coefficient of performance</b> (COP):</p>
<ul>
<li>refrigerator: <b>COP = Q<sub>c</sub> / W</b> (heat removed per joule of work); the theoretical maximum is T<sub>c</sub>/(T<sub>h</sub> − T<sub>c</sub>);</li>
<li>heat pump: <b>COP = Q<sub>h</sub> / W</b> (heat delivered to the house per joule of work).</li>
</ul>
<p><b>Example.</b> A refrigerator removes 300 J from the inside at 270 K and releases it into the kitchen at 300 K, with an ideal COP of 270/30 = 9: each joule of work moves 9 J of heat. Real refrigerators have a COP of around 2-4. A heat pump heating a house with COP = 4 delivers 4 kWh of heat for every 1 kWh of electricity used: this is why it is much more efficient than an electric heater (which at best turns 1 kWh into 1 kWh of heat). The second law is not violated, because the heat moves from cold to hot <b>thanks to the work</b> spent: it is not the "sole result".</p>`
    },
    {
      type: "text",
      title: "Entropy",
      html: `<p>In 1865 <b>Rudolf Clausius</b> introduced a new state function, which he called <b>entropy</b> (from the Greek <i>tropé</i>, "transformation"), with the symbol S. For a <b>reversible</b> process at constant temperature T, in which the system exchanges heat Q:</p>
<p style="text-align:center"><b>ΔS = Q<sub>rev</sub> / T</b> &nbsp; (unit: J/K)</p>
<p>(In general ΔS = ∫ dQ<sub>rev</sub>/T.) Since it is a state function, the change in entropy between two states is the same whatever the path, reversible or not. The second law can then be stated like this:</p>
<p style="text-align:center"><b>in an isolated system entropy can never decrease: ΔS ≥ 0</b><br>(= in reversible processes, &gt; in irreversible processes)</p>
<p>This extends to the universe: <b>ΔS<sub>universe</sub> ≥ 0</b>. A process is possible only if it does not decrease the total entropy. The entropy of one part of the system can decrease (the refrigerator cools the food, water freezes), but only if the entropy of another part increases by more.</p>
<p><b>Example 1: heat flowing from hot to cold.</b> An amount Q = 1000 J passes from a body at 400 K to one at 300 K. The hot body loses entropy: ΔS<sub>1</sub> = −1000/400 = −2.50 J/K; the cold one gains ΔS<sub>2</sub> = +1000/300 = +3.33 J/K. Total: <b>ΔS = +0.83 J/K &gt; 0</b>: the process is possible. The reverse process would give ΔS = −0.83 J/K &lt; 0: impossible spontaneously.</p>
<p><b>Example 2: melting ice.</b> Melting 1 kg of ice at 0 °C (273.15 K) requires Q = m·L<sub>f</sub> = 334 kJ: ΔS = 334 000/273.15 ≈ <b>+1223 J/K</b>. Entropy increases because liquid water (disordered) can be arranged in more ways than the ordered solid.</p>`
    },
    {
      type: "text",
      title: "Entropy and disorder: Boltzmann's interpretation",
      html: `<p>What is entropy really? <b>Ludwig Boltzmann</b> (1844-1906) gave it a statistical interpretation: entropy measures the number of <b>microstates</b> W (the microscopic arrangements of positions and velocities of the molecules) compatible with the same macroscopic state:</p>
<p style="text-align:center"><b>S = k<sub>B</sub> · ln W</b></p>
<p>The formula, with k<sub>B</sub> = 1.381·10⁻²³ J/K, is engraved on his tomb in the Central Cemetery in Vienna. "Ordered" macroscopic states correspond to very few microstates; "disordered" ones to an astronomical number: this is why systems almost certainly evolve towards the latter.</p>
<p><b>An example with coins.</b> Toss 100 coins. The state "all heads" can happen in only one way (W = 1), while the state "50 heads, 50 tails" can happen in about 10²⁹ ways. So it is practically certain that you will get about half heads and half tails, while "all heads" is practically impossible. In the same way, a gas expanding into twice the volume has 2<sup>N</sup> times more microstates (N molecules): the probability that all the molecules spontaneously end up in one half of the container is 2<sup>-N</sup>, a number so small that for N = 10²³ it amounts to "never".</p>
<p>So the second law is not an absolute law like the conservation of energy, but a <b>statistical</b> law, with a probability of being violated so low that it is negligible for macroscopic systems. It is the basis of the <b>"arrow of time"</b>: watching a film played backwards, we recognise that it is reversed because entropy would be decreasing.</p>`
    },
    {
      type: "widget",
      title: "Possible or impossible?",
      widget: "classify",
      options: { groups: ["Possible spontaneously", "Impossible spontaneously"], items: [
        ["A cup of hot tea cools down in the room", 0],
        ["A cup of lukewarm tea heats up by itself, taking heat from the room", 1],
        ["A drop of ink spreads out in water", 0],
        ["Spread-out ink gathers itself back into a drop", 1],
        ["All the heat from friction turns back into motion of the car", 1],
        ["Ice melts in a warm room", 0]
      ] },
      caption: "Spontaneous processes go in the direction in which total entropy increases."
    },
    {
      type: "quiz",
      title: "Check: entropy",
      questions: [
        { type: "tf", q: "In an isolated system entropy can decrease.", answer: false, explain: "According to the second law ΔS ≥ 0 for an isolated system." },
        { type: "num", q: "A body absorbs 600 J of heat, reversibly, at 300 K. What is ΔS?", answer: 2, tol: 0.001, unit: "J/K", explain: "ΔS = Q/T = 600/300 = 2 J/K." },
        { type: "mc", q: "Which has the greater entropy?", options: ["An ice crystal at 0 °C", "Liquid water at 0 °C", "They are the same", "It depends on the mass"], answer: 1, explain: "At the same T liquid water is less ordered than ice: more microstates." }
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand the second law",
      intro: "The second law is difficult because it is not \"a formula\" but a way of looking at the world.",
      tabs: [
        {
          label: "🃏 The pack of cards",
          html: "<p>A new pack of cards is in order: there is only one way to have it like that. Shuffle it: there are about 8·10⁶⁷ different orders (52!). After shuffling it is practically certain that you will get a \"random\" order. To get back to the original order you have to sort the cards (work). It is the same with entropy: disorder is simply <b>much more probable</b>.</p>"
        },
        {
          label: "🏔️ The energy waterfall",
          html: "<p>Energy is conserved, but its <b>quality</b> degrades. Work (ordered energy) turns into heat (disordered energy) easily: friction. The reverse does not, at least not completely: turning heat into work always costs a share given out to the cold reservoir. Like a river flowing down from the mountains to the sea: the water does not disappear, but the \"drop in height\" from which work can be obtained is used up and does not climb back.</p>"
        },
        {
          label: "🔗 Match concept and formula",
          html: "<p>Match each concept to its expression.</p>",
          widget: "match",
          options: { pairs: [
            ["Efficiency", "η = W/Qh"],
            ["Carnot efficiency", "η = 1 − Tc/Th"],
            ["Change in entropy", "ΔS = Q_rev/T"],
            ["Boltzmann entropy", "S = k_B ln W"],
            ["Refrigerator coefficient", "COP = Qc/W"]
          ] }
        },
        {
          label: "📈 Drawing: heat and disorder",
          html: "<p>Heat Q flowing from a hot body (high T) to a cold one (low T) changes their entropies by –Q/T<sub>h</sub> and +Q/T<sub>c</sub>: since T<sub>c</sub> &lt; T<sub>h</sub>, the gain is larger than the loss, and the total entropy increases.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#fff7ed'/><defs><marker id='s2D' markerWidth='10' markerHeight='10' refX='8' refY='5' orient='auto'><path d='M0 0 L10 5 L0 10 Z' fill='#0f172a'/></marker></defs><g font-family='sans-serif'><rect x='40' y='80' width='160' height='100' rx='10' fill='#fecaca' stroke='#dc2626' stroke-width='3'/><text x='120' y='122' font-size='16' fill='#7f1d1d' text-anchor='middle' font-weight='bold'>Hot 400 K</text><text x='120' y='148' font-size='15' fill='#7f1d1d' text-anchor='middle'>ΔS = −2.5 J/K</text><rect x='400' y='80' width='160' height='100' rx='10' fill='#bfdbfe' stroke='#2563eb' stroke-width='3'/><text x='480' y='122' font-size='16' fill='#1e3a8a' text-anchor='middle' font-weight='bold'>Cold 300 K</text><text x='480' y='148' font-size='15' fill='#1e3a8a' text-anchor='middle'>ΔS = +3.33 J/K</text><line x1='210' y1='130' x2='390' y2='130' stroke='#0f172a' stroke-width='5' marker-end='url(#s2D)'/><text x='300' y='115' font-size='16' fill='#0f172a' text-anchor='middle'>Q = 1000 J</text><text x='300' y='225' font-size='17' fill='#14532d' text-anchor='middle' font-weight='bold'>Total ΔS = +0.83 J/K</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Maxwell's demon",
      html: `<p>In 1867 James Clerk Maxwell imagined a tiny "demon" opening and closing a little door between two chambers of gas, letting only fast molecules through in one direction and slow ones in the other: in this way one chamber would heat up and the other cool down, without any work, violating the second law. For a century physicists and engineers argued about the solution. The answer came from information theory: the demon has to <b>measure and remember</b> the speed of each molecule, and sooner or later it has to erase its memory. <b>Rolf Landauer</b> (1961) and <b>Charles Bennett</b> (1982) showed that erasing one bit of information produces an entropy of at least k<sub>B</sub> ln 2, which exactly compensates for the decrease obtained: thermodynamics is not violated. Recent experiments with microscopic particles have built versions of this "demon" in the laboratory.</p>`
    },
    {
      type: "curiosity",
      title: "The fate of the universe",
      html: `<p>If the entropy of the universe always increases, where does this process lead? In the nineteenth century Kelvin and Clausius suggested the <b>"heat death"</b> of the universe: a future in which all the energy is spread out evenly, all temperatures are equal and no process is possible any more, because there are no differences left from which work can be obtained. Modern cosmology has a more complex view (the expansion of the universe and gravity change the picture), but the principle remains: life, refrigerators and stars keep their local \"low entropy\" only by increasing entropy elsewhere. For the Earth, the Sun supplies low-entropy light, and the Earth radiates high-entropy heat into space: it is this flow that allows life to exist.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the second law",
      nodes: [
        { id: "irrev", label: "Irreversibility", x: 15, y: 10, color: "#ef4444", html: "Real processes have a preferred direction: heat flows from hot to cold, gases expand.", why: "The first law does not forbid the reverse processes. Everyday observation shows that they do not happen: a new law is needed." },
        { id: "enunciati", label: "Clausius and Kelvin–Planck statements", x: 55, y: 10, color: "#8b5cf6", html: "Heat does not flow spontaneously from cold to hot; you cannot turn all the heat from a single reservoir into work.", why: "Formulated by Clausius (1850) and Kelvin (1851) starting from Carnot's analysis of steam engines. They can be shown to be equivalent: violating one means violating the other." },
        { id: "carnot", label: "Carnot cycle", x: 85, y: 45, color: "#2563eb", html: "η_max = 1 − Tc/Th: an efficiency limit valid for every engine.", why: "Sadi Carnot (1824) reasoned about the impossibility of perpetual motion and about heat as a \"fall\" between two temperatures, like water on a wheel: the efficiency depends on the drop in T." },
        { id: "rendimento", label: "Engines, refrigerators, heat pumps", x: 15, y: 50, color: "#f59e0b", html: "Cyclic devices that exchange heat between two reservoirs and work with the surroundings.", why: "They arose from the industrial needs of the nineteenth century (Watt, Stephenson); refrigerators are the same machines, run in reverse." },
        { id: "entropia", label: "Entropy ΔS = Q/T", x: 50, y: 50, color: "#16a34a", html: "A state function; ΔS ≥ 0 in an isolated system.", why: "Clausius (1865) discovered that for reversible cycles ∮dQ/T = 0 and for real ones < 0: this implies the existence of a state function S. It is the mathematical form of the second law." },
        { id: "boltz", label: "Statistical interpretation", x: 50, y: 88, color: "#64748b", html: "S = k_B ln W: entropy counts the microstates compatible with the observed state.", why: "Boltzmann (1877) connected thermodynamics to statistical mechanics: the second law holds with overwhelming probability, not with absolute certainty. It explains the arrow of time." }
      ],
      edges: [["irrev", "enunciati", "summed up by"], ["enunciati", "carnot", "leads to"], ["carnot", "rendimento", "limits"], ["carnot", "entropia", "gives rise to"], ["entropia", "boltz", "explained by"], ["irrev", "entropia", "measured by"]]
    }
  ],
  glossary: [
    { t: "Heat engine", d: "A cyclic device that converts heat into work by exchanging heat with two reservoirs." },
    { t: "Efficiency", d: "η = W/Q_h = 1 − Q_c/Q_h: the ratio of the work produced to the heat absorbed." },
    { t: "Carnot cycle", d: "An ideal reversible cycle with two isothermals and two adiabatics." },
    { t: "Carnot's theorem", d: "No engine between two reservoirs can exceed the efficiency η = 1 − T_c/T_h." },
    { t: "Reversible process", d: "A process that can be reversed without leaving any trace in the surroundings; it is an idealisation." },
    { t: "Entropy", d: "A state function S, with ΔS = Q_rev/T; it never decreases in an isolated system." },
    { t: "Microstate", d: "A specific microscopic arrangement (positions and velocities of the molecules)." },
    { t: "COP", d: "Coefficient of performance of a refrigerator or heat pump." },
    { t: "Arrow of time", d: "The preferred direction of spontaneous processes, linked to the increase in entropy." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of the following is the Clausius statement?", options: ["Heat flows spontaneously from cold to hot", "Heat does not flow spontaneously from a cold body to a hot one", "Energy is conserved", "Temperature cannot be negative"], answer: 1, explain: "To make heat flow from cold to hot you have to spend work, as in a refrigerator." },
      { type: "num", q: "An engine absorbs 5000 J and produces 1500 J of work. Calculate its efficiency.", answer: 0.3, tol: 0.001, unit: "", explain: "η = W/Q_h = 1500/5000 = 0.30." },
      { type: "num", q: "Calculate the Carnot efficiency between 800 K and 400 K.", answer: 0.5, tol: 0.001, unit: "", explain: "η = 1 − 400/800 = 0.5." },
      { type: "tf", q: "It is possible to build a heat engine with an efficiency greater than Carnot's between the same temperatures.", answer: false, explain: "Carnot's theorem rules out efficiencies greater than the reversible one." },
      { type: "num", q: "An engine with η = 25% absorbs 800 J. How much heat does it give out to the cold reservoir?", answer: 600, tol: 0, unit: "J", explain: "W = 0.25 × 800 = 200 J; Q_c = 800 − 200 = 600 J." },
      { type: "num", q: "A body at 250 K reversibly absorbs 500 J. What is ΔS?", answer: 2, tol: 0.001, unit: "J/K", explain: "ΔS = Q/T = 500/250 = 2 J/K." },
      { type: "tf", q: "The entropy of a system that is not isolated can decrease.", answer: true, explain: "It can decrease if the system gives out heat to the surroundings, provided the total entropy (system + surroundings) does not decrease." },
      { type: "mc", q: "Why is it extremely unlikely that a gas will spontaneously gather in one corner of its container?", options: ["The first law forbids it", "It corresponds to very few microstates compared with those of the spread-out gas", "Because the molecules repel each other", "Because the temperature would fall"], answer: 1, explain: "The number of microstates of a uniform distribution is immensely larger: it is overwhelmingly more probable." },
      { type: "mc", q: "A refrigerator with COP = 3 removes 600 J of heat from the inside. How much work does it need?", options: ["100 J", "200 J", "600 J", "1800 J"], answer: 1, explain: "COP = Q_c/W ⟹ W = 600/3 = 200 J." },
      { type: "order", q: "Put the stages of the Carnot cycle in order, starting from the isothermal expansion.", items: ["Isothermal expansion at Th", "Adiabatic expansion", "Isothermal compression at Tc", "Adiabatic compression"], explain: "The cycle alternates isothermals and adiabatics: it absorbs Q_h in (1) and gives out Q_c in (3)." }
    ]
  }
});
