TOPIC('en', {
  id: "l1-sci-trasformazioni",
  title: "Physical and chemical changes",
  intro: "An ice cube melting and a nail rusting are both changes, but deeply different ones: in the first the substance is still water, in the second the iron turns into something new. Understanding this difference is the first step in doing chemistry. In this lesson we study <b>changes of state</b>, read a <b>heating curve</b> and find out how to recognise and write a <b>chemical reaction</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Physical and chemical changes",
      html: `<p>A <b>physical change</b> alters the appearance or the state of matter, but <b>not</b> the nature of the substances: the particles keep the same composition. Examples: ice melting, water evaporating, sugar dissolving in tea, a glass breaking. They are often <b>reversible</b>.</p>
<p>In a <b>chemical change</b> (or <b>chemical reaction</b>) the starting substances, the <b>reactants</b>, turn into new substances, the <b>products</b>, with different properties. Atoms are neither created nor destroyed: they rearrange, breaking and forming bonds. Examples: burning methane, rust, cooking an egg, photosynthesis.</p>
<p>How can you recognise a chemical reaction? Often (but not always) you observe:</p>
<ul>
<li>a <b>gas</b> being given off (bubbles, fizzing);</li>
<li>a <b>precipitate</b> forming (a solid appearing in a clear solution);</li>
<li>a <b>colour change</b> not due to simple dilution;</li>
<li><b>heat</b> or <b>light</b> being given out or taken in.</li>
</ul>
<p>These are only clues: boiling water forms bubbles and takes in heat, but it is a physical change. The decisive proof is that afterwards there are <b>new substances</b>.</p>`
    },
    {
      type: "widget",
      title: "Physical or chemical?",
      widget: "classify",
      options: { groups: ["Physical change", "Chemical change"], items: [
        ["Butter melts in the frying pan", 0],
        ["An iron nail rusts", 1],
        ["Milk turns into yoghurt", 1],
        ["Water boils in the saucepan", 0],
        ["A candle burns", 1],
        ["A sheet of paper is cut", 0],
        ["A bitten apple turns brown", 1],
        ["Salt dissolves in water", 0],
        ["An effervescent tablet in a glass", 1],
        ["Mothballs sublime", 0]
      ] },
      caption: "In a candle the wax melts (physical) but then burns (chemical): the same scene can contain both."
    },
    {
      type: "text",
      title: "Changes of state",
      html: `<p>A substance changing state is a physical change. Each change has a name:</p>
<table>
<tr><th>Change</th><th>From → to</th><th>Heat</th></tr>
<tr><td><b>Melting</b></td><td>solid → liquid</td><td>absorbed</td></tr>
<tr><td><b>Freezing</b> (solidification)</td><td>liquid → solid</td><td>released</td></tr>
<tr><td><b>Evaporation</b> / <b>boiling</b></td><td>liquid → gas</td><td>absorbed</td></tr>
<tr><td><b>Condensation</b></td><td>gas → liquid</td><td>released</td></tr>
<tr><td><b>Sublimation</b></td><td>solid → gas</td><td>absorbed</td></tr>
<tr><td><b>Deposition</b></td><td>gas → solid</td><td>released</td></tr>
</table>
<p><b>Evaporation</b> happens only at the surface and at any temperature (washing dries even at 15 °C); <b>boiling</b> happens throughout the liquid, when the vapour pressure equals the external pressure, at a precise temperature. That is why high in the mountains, where the pressure is lower, water boils below 100 °C (at about 3000 m, around 90 °C) and pasta takes longer to cook. In a pressure cooker the opposite happens.</p>`
    },
    {
      type: "svg",
      title: "The heating curve of water",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<line x1="70" y1="20" x2="70" y2="270" stroke="#1f2937" stroke-width="2"/>
<line x1="70" y1="270" x2="620" y2="270" stroke="#1f2937" stroke-width="2"/>
<text x="20" y="150" font-size="15" fill="#1f2937" transform="rotate(-90 20 150)" text-anchor="middle">Temperature (°C)</text>
<text x="350" y="305" font-size="15" fill="#1f2937" text-anchor="middle">Heat supplied over time</text>
<line x1="62" y1="200" x2="70" y2="200" stroke="#1f2937" stroke-width="2"/><text x="56" y="205" font-size="14" text-anchor="end" fill="#1f2937">0</text>
<line x1="62" y1="70" x2="70" y2="70" stroke="#1f2937" stroke-width="2"/><text x="56" y="75" font-size="14" text-anchor="end" fill="#1f2937">100</text>
<line x1="70" y1="200" x2="620" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="70" y1="70" x2="620" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<polyline points="70,250 150,200 250,200 400,70 520,70 600,25" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="110" y="240" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">ice</text>
<text x="200" y="185" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">melting</text>
<text x="330" y="150" font-size="14" fill="#15803d" font-weight="bold" text-anchor="middle">liquid water</text>
<text x="460" y="55" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle">boiling</text>
<text x="570" y="70" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle" dy="30">steam</text>
</svg>`,
      caption: "During the two horizontal sections (melting at 0 °C and boiling at 100 °C) the temperature does not change: the heat supplied is used to break the bonds between molecules, not to speed them up."
    },
    {
      type: "text",
      title: "Reading the heating curve",
      html: `<p>If you heat a block of ice with a steady flame and measure the temperature over time, you get a curve made of sections:</p>
<ol>
<li><b>Sloping sections</b>: the heat increases the kinetic energy of the particles and therefore the temperature. How much heat is needed depends on the <b>specific heat capacity</b> (liquid water: 4.18 J/(g·°C); ice about 2.1 J/(g·°C)).</li>
<li><b>Plateaus (horizontal sections)</b>: during a change of state the temperature stays constant. The heat supplied is used to overcome the forces between the particles: this is the <b>latent heat</b>.</li>
</ol>
<p>For water: latent heat of fusion ≈ <b>334 J/g</b>; latent heat of vaporisation ≈ <b>2260 J/g</b>. Evaporating water takes almost seven times the energy needed to melt it.</p>
<p>The formula for the heat exchanged without a change of state is <b>Q = m · c · ΔT</b>; with a change of state it is <b>Q = m · L</b>.</p>`
    },
    {
      type: "example",
      title: "How much heat is needed?",
      html: `<p>How much heat is needed to warm <b>200 g of water from 20 °C to 70 °C</b>?</p>
<ol>
<li>Q = m · c · ΔT = 200 g × 4.18 J/(g·°C) × (70 − 20) °C</li>
<li>Q = 200 × 4.18 × 50 = <b>41 800 J ≈ 41.8 kJ</b>.</li>
</ol>
<p>Now: how much to evaporate 100 g of water that is already at 100 °C? Q = m · L = 100 × 2260 = <b>226 000 J</b>. That is why sweat is an excellent \"air conditioner\": as it evaporates it takes a lot of heat away from the body.</p>`
    },
    {
      type: "curiosity",
      title: "Why salt melts ice on the roads",
      html: `<p>A solution of water and salt freezes at a temperature <b>lower</b> than 0 °C: this is called <b>freezing-point depression</b>. A saturated NaCl solution freezes at about −21 °C. Spreading salt on icy roads doesn't warm the ice: it lowers its melting point, and in fact at temperatures well below −10 °C salt becomes much less effective. In the same way, a mixture of water and salt boils just above 100 °C (<b>boiling-point elevation</b>).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: states and curves",
      questions: [
        { type: "mc", q: "The change from solid to gas is called…", options: ["melting", "sublimation", "condensation"], answer: 1, explain: "Sublimation: it happens, for example, with mothballs and with dry ice (solid CO₂)." },
        { type: "tf", q: "While ice is melting, the temperature rises.", answer: false, explain: "It stays at 0 °C until all the ice has melted: the heat is used to change state." },
        { type: "num", q: "How much heat is needed to melt 50 g of ice at 0 °C (L = 334 J/g)?", answer: 16700, unit: "J", explain: "Q = m · L = 50 × 334 = 16 700 J." }
      ]
    },
    {
      type: "text",
      title: "The chemical reaction and its equation",
      html: `<p>A chemical reaction is described by a <b>chemical equation</b>: the <b>reactants</b> on the left, the <b>products</b> on the right, joined by an arrow. For example, the combustion of methane:</p>
<p><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>
<p>The numbers in front of the formulas are the <b>stoichiometric coefficients</b>; the small numbers at the bottom (subscripts) show how many atoms there are in a molecule and cannot be changed. The equation must be <b>balanced</b>: the atoms of each element must be equal in number on the left and on the right, because mass is conserved in a reaction (Lavoisier's law, which we will see later).</p>
<p>Check for methane: on the left 1 C, 4 H, 4 O; on the right 1 C, 4 H (2×2), 4 O (2 + 2×1). Balanced.</p>
<p>How to balance, step by step:</p>
<ol>
<li>write the correct formulas of the reactants and products;</li>
<li>count the atoms of each element on each side;</li>
<li>add coefficients in front of the formulas (never change the subscripts), starting with the elements that appear in the fewest substances and leaving oxygen or hydrogen until last;</li>
<li>count again and simplify the coefficients.</li>
</ol>`
    },
    {
      type: "example",
      title: "Balancing the synthesis of water",
      html: `<p>Unbalanced reaction: <b>H₂ + O₂ → H₂O</b>. The O atoms are not equal (2 against 1).</p>
<ol>
<li>Put 2 in front of H₂O: H₂ + O₂ → 2 H₂O. Now O: 2 = 2 ✔️ but H: 2 on the left, 4 on the right.</li>
<li>Put 2 in front of H₂: <b>2 H₂ + O₂ → 2 H₂O</b>. H: 4 = 4 ✔️.</li>
</ol>
<p>It reads: two molecules of hydrogen react with one of oxygen to give two molecules of water. The ratio 2 : 1 : 2 also holds for the volumes of the gases (under the same conditions): an idea that will lead to Avogadro's theory.</p>`
    },
    {
      type: "widget",
      title: "The chemistry lab",
      widget: "chemLab",
      options: {},
      caption: "Choose the reactants, put them in the beaker and observe the balanced reaction, the mass before and after, and the limiting reactant."
    },
    {
      type: "alternatives",
      title: "Other ways to look at a reaction",
      intro: "If balancing seems like an algebra trick, try looking at it in these ways.",
      tabs: [
        {
          label: "🧱 LEGO bricks",
          html: `<p>Atoms are bricks: a reaction neither creates nor destroys them, it <b>reassembles</b> them. To make 2 water molecules you need 4 H bricks and 2 O bricks. If you only have H₂ and O₂ molecules, you have to count the bricks and use a number of \"pieces\" that gives the same total before and after: that is the whole point of the coefficients.</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🍳 A cooking recipe",
          html: `<p>A chemical equation is a <b>recipe</b>: \"1 egg + 100 g of flour → 1 pancake\" scales up to 2 eggs and 200 g of flour. In the same way CH₄ + 2 O₂ → CO₂ + 2 H₂O says that for every molecule of methane you need two molecules of oxygen; for 10 molecules of methane you need 20. The <b>limiting reactant</b> is the ingredient that runs out first and stops production.</p>`
        },
        {
          label: "⚖️ The balance",
          html: `<p>Like an algebraic equation, a chemical equation is a balance: what you have on the left must weigh as much as what you have on the right, atom by atom. It is the same idea, in intuitive form, that led to the discovery of the conservation of mass: if the weighing of a reaction \"doesn't add up\", you have forgotten to weigh a gas.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Exothermic and endothermic reactions",
      html: `<p>Every reaction exchanges energy with its surroundings, usually as heat:</p>
<ul>
<li><b>exothermic</b>: it releases heat (combustion, explosions, neutralisation; the oxidation of iron in hand warmers);</li>
<li><b>endothermic</b>: it absorbs heat (photosynthesis, cooking an egg, the \"instant ice packs\" in first-aid kits).</li>
</ul>
<p>To get started, many reactions need a small amount of energy, the <b>activation energy</b>: a match has to be struck, but then the combustion carries on by itself. A <b>catalyst</b> lowers the activation energy and speeds up the reaction without being used up (like the catalytic converters in car exhausts or the enzymes in our body).</p>`
    },
    {
      type: "curiosity",
      title: "Dry ice and the triple point",
      html: `<p>So-called <b>dry ice</b> is solid carbon dioxide: at atmospheric pressure it does not melt, it <b>sublimes</b> directly at −78.5 °C, without leaving puddles (that is why it is used to keep ice cream cold and to make stage fog). CO₂ can only be liquid above about 5.2 atmospheres. Every substance has a <b>triple point</b>, a single combination of temperature and pressure at which solid, liquid and gas coexist: for water it is at 0.01 °C, and until 2019 it was used to define the kelvin.</p>`
    },
    {
      type: "remember",
      title: "Quick summary",
      html: `<ul>
<li>Physical: the <b>state or shape</b> changes; the substances stay the same.</li>
<li>Chemical: <b>new substances</b> appear; the atoms rearrange.</li>
<li>During the changes of state of a pure substance the <b>temperature is constant</b>.</li>
<li>Q = m · c · ΔT (heating), Q = m · L (change of state).</li>
<li>A chemical equation must be <b>balanced</b>.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Map of changes: tap the nodes and find out why",
      nodes: [
        { id: "trasf", label: "Changes", x: 50, y: 6, color: "#a855f7", html: "Changes in matter: physical or chemical.", why: "Alchemists believed that every change transformed the substance itself; only with modern chemistry (Lavoisier, 1780–90) did people realise that changes of state had to be distinguished from changes that create new substances." },
        { id: "fisica", label: "Physical", x: 22, y: 30, color: "#3b82f6", html: "Changes of state, dissolving, breaking.", why: "The molecules don't change, only their arrangement and their motion: that is why these changes can usually be reversed by changing temperature or pressure." },
        { id: "chimica", label: "Chemical (reactions)", x: 78, y: 30, color: "#ef4444", html: "Reactants → products.", why: "The bonds of the reactants break and new ones form. In 1808 <b>Dalton</b> explained that reactions are a redistribution of atoms, which stay the same: this is where balancing comes from." },
        { id: "stato", label: "Changes of state", x: 10, y: 58, color: "#0ea5e9", html: "Melting, evaporation, sublimation…", why: "They depend on temperature and pressure: the phase diagram of a substance shows the regions where it is solid, liquid or gas, and the <b>triple point</b> where they coexist (water: 0.01 °C and about 611 Pa)." },
        { id: "latente", label: "Latent heat", x: 30, y: 82, color: "#f59e0b", html: "Heat exchanged without a change in temperature.", why: "It was discovered by the Scot <b>Joseph Black</b> around 1760: when heating melting ice, the thermometer did not move but heat was still being absorbed, and he called it \"hidden heat\"." },
        { id: "equazione", label: "Chemical equation", x: 70, y: 58, color: "#22c55e", html: "Describes reactants and products with coefficients.", why: "The notation of formulas such as H₂O was set out by <b>Berzelius</b> (1813–14), who introduced letters as the symbols of the elements." },
        { id: "bilancio", label: "Balancing", x: 70, y: 82, color: "#14b8a6", html: "The same number of atoms before and after.", why: "A direct consequence of Lavoisier's <b>conservation of mass</b> (1789): in a closed system the total mass does not change." },
        { id: "energia", label: "Energy of the reaction", x: 92, y: 80, color: "#f97316", html: "Exothermic or endothermic.", why: "Breaking bonds takes energy, forming them releases it: the balance between the two decides whether the reaction heats up or cools down." }
      ],
      edges: [
        ["trasf", "fisica", "can be"],
        ["trasf", "chimica", "can be"],
        ["fisica", "stato", "example"],
        ["stato", "latente", "requires"],
        ["chimica", "equazione", "is described by"],
        ["equazione", "bilancio", "must have"],
        ["chimica", "energia", "exchanges"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: reactions",
      questions: [
        { type: "mc", q: "In a chemical reaction…", options: ["atoms turn into atoms of other elements", "atoms rearrange to form new substances", "the total mass decreases"], answer: 1, explain: "Atoms are conserved; the bonds between them change." },
        { type: "mc", q: "Which are the correct coefficients: __ Al + __ O₂ → __ Al₂O₃ ?", options: ["2, 3, 1", "4, 3, 2", "2, 2, 2"], answer: 1, explain: "4 Al + 3 O₂ → 2 Al₂O₃: 4 Al and 6 O on each side." },
        { type: "tf", q: "A catalyst is used up during the reaction.", answer: false, explain: "It speeds up the reaction by lowering the activation energy, but at the end it is unchanged." }
      ]
    }
  ],
  glossary: [
    { t: "Physical change", d: "A change that does not alter the nature of the substances." },
    { t: "Chemical reaction", d: "A change in which different products form from the reactants." },
    { t: "Reactant", d: "A substance that is used up in a reaction." },
    { t: "Product", d: "A substance that forms in a reaction." },
    { t: "Melting", d: "The change from solid to liquid." },
    { t: "Sublimation", d: "The direct change from solid to gas." },
    { t: "Latent heat", d: "Heat exchanged during a change of state with no change in temperature." },
    { t: "Specific heat capacity", d: "The energy needed to raise the temperature of 1 g of a substance by 1 °C." },
    { t: "Chemical equation", d: "A representation of a reaction using formulas and coefficients." },
    { t: "Exothermic reaction", d: "A reaction that gives out heat to its surroundings." },
    { t: "Catalyst", d: "A substance that speeds up a reaction without being used up." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these is a chemical change?", options: ["Ice melting", "Wood burning", "Water evaporating"], answer: 1, explain: "Burning produces ash, carbon dioxide and water vapour: new substances." },
      { type: "tf", q: "Evaporation happens only at 100 °C.", answer: false, explain: "Evaporation happens at any temperature from the surface; at 100 °C (at sea level) there is boiling." },
      { type: "mc", q: "What is the change from gas to solid called?", options: ["Deposition", "Condensation", "Melting"], answer: 0, explain: "It is deposition: this is how frost forms." },
      { type: "num", q: "How much heat is needed to raise the temperature of 100 g of water by 30 °C? (c = 4.18 J/g·°C)", answer: 12540, unit: "J", explain: "Q = 100 × 4.18 × 30 = 12 540 J." },
      { type: "mc", q: "On a heating curve, the horizontal sections correspond to…", options: ["a rise in temperature", "a change of state", "a chemical reaction"], answer: 1, explain: "The temperature stays constant during the change of state." },
      { type: "num", q: "In the equation 2 H₂ + O₂ → 2 H₂O, how many hydrogen atoms are there in total on the right?", answer: 4, explain: "2 molecules × 2 atoms = 4." },
      { type: "tf", q: "In a balanced reaction the number of atoms of each element is the same in the reactants and the products.", answer: true, explain: "This is the conservation of mass." },
      { type: "mc", q: "A reaction that absorbs heat is called…", options: ["exothermic", "endothermic", "catalytic"], answer: 1, explain: "Endothermic: it takes heat from the surroundings, which cool down." },
      { type: "order", q: "Put in order the stages of water when an ice cube at −10 °C is heated to 120 °C.", items: ["Heating the ice", "Melting at 0 °C", "Heating the liquid water", "Boiling at 100 °C", "Heating the steam"], explain: "Each sloping section (heating) is followed by a plateau (change of state)." },
      { type: "text", q: "What is the substance that speeds up a reaction without being used up called?", answer: ["catalyst", "a catalyst", "the catalyst"], explain: "Catalysts lower the activation energy; enzymes are biological catalysts." }
    ]
  }
});
