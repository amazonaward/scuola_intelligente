TOPIC('en', {
  id: "l3-sci-reazioni-stechiometria",
  title: "Chemical reactions and stoichiometry",
  intro: "A cake needs precise amounts of flour and eggs; if you have only a few eggs you will make less, even if you have flour to spare. Chemistry works the same way: <b>stoichiometry</b> (from the Greek <i>stoicheion</i>, element, and <i>metron</i>, measure) is the art of calculating <b>how much</b> reacts and <b>how much</b> you get. Starting from the <b>mole</b>, we will learn to balance equations, find the <b>limiting reagent</b>, calculate the <b>yield</b> and work with <b>solutions</b> and their concentration.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "The chemical equation",
      html: `<p>A <b>chemical reaction</b> rearranges atoms: the bonds of the <b>reactants</b> break and new ones form in the <b>products</b>. It is described by an <b>equation</b>:</p>
<p style="text-align:center"><b>2 H₂(g) + O₂(g) → 2 H₂O(l)</b></p>
<ul>
<li>The formulas tell you <b>which</b> substances take part and are <b>never changed</b> (changing a subscript would mean changing the substance).</li>
<li>The <b>stoichiometric coefficients</b> in front of the formulas tell you <b>how many</b> particles react (a 1 is not written).</li>
<li>The physical state goes in brackets: <b>(s)</b> solid, <b>(l)</b> liquid, <b>(g)</b> gas, <b>(aq)</b> in aqueous solution.</li>
</ul>
<p>The principle behind everything is the <b>conservation of mass</b> (Lavoisier, 1789): atoms are neither created nor destroyed, so for each element the number of atoms on the left and on the right must be the same. Balancing an equation means finding the right coefficients.</p>`
    },
    {
      type: "svg",
      title: "Atoms are rearranged, they don't disappear",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#334155" stroke-width="2">
<circle cx="52" cy="90" r="14" fill="#ffffff"/><circle cx="80" cy="90" r="14" fill="#ffffff"/>
<circle cx="52" cy="140" r="14" fill="#ffffff"/><circle cx="80" cy="140" r="14" fill="#ffffff"/>
<circle cx="170" cy="115" r="22" fill="#ef4444"/><circle cx="212" cy="115" r="22" fill="#ef4444"/>
<circle cx="440" cy="85" r="22" fill="#ef4444"/><circle cx="420" cy="115" r="13" fill="#ffffff"/><circle cx="462" cy="115" r="13" fill="#ffffff"/>
<circle cx="520" cy="135" r="22" fill="#ef4444"/><circle cx="500" cy="165" r="13" fill="#ffffff"/><circle cx="542" cy="165" r="13" fill="#ffffff"/>
</g>
<g font-size="26" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="125" y="125">+</text><text x="305" y="125">→</text></g>
<g font-size="16" fill="#1f2937" text-anchor="middle" font-weight="bold">
<text x="66" y="195">2 H₂</text><text x="191" y="195">O₂</text><text x="480" y="215">2 H₂O</text>
</g>
<text x="300" y="30" font-size="17" font-weight="bold" fill="#0369a1" text-anchor="middle">Before: 4 H + 2 O    After: 4 H + 2 O</text>
<text x="300" y="260" font-size="15" fill="#475569" text-anchor="middle">White = hydrogen, red = oxygen. Same atoms, different bonds.</text>
</svg>`,
      caption: "On Lavoisier's balance: 4 H atoms and 2 O atoms before, 4 H and 2 O after."
    },
    {
      type: "text",
      title: "How to balance an equation",
      html: `<p>A practical method that works for most reactions:</p>
<ol>
<li>Write the correct formulas of reactants and products.</li>
<li>Count the atoms of each element on both sides.</li>
<li>Start with the elements that appear in <b>only one compound on each side</b> (usually metals and carbon) and leave <b>hydrogen</b> and <b>oxygen</b> until last (oxygen can often be sorted out with a fractional coefficient, then everything is multiplied by two).</li>
<li>If a polyatomic group appears unchanged on both sides (for example SO₄²⁻), balance it as a unit.</li>
<li>Check the final count and make sure the coefficients are whole numbers with no common factor.</li>
</ol>
<p><b>Example: burning propane.</b> C₃H₈ + O₂ → CO₂ + H₂O. 3 C → 3 CO₂; 8 H → 4 H₂O; now O on the right: 6 + 4 = 10, so 5 O₂. Result: <b>C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O</b>.</p>
<p><b>Example with the algebraic method.</b> For Al + HCl → AlCl₃ + H₂, write a Al + b HCl → c AlCl₃ + d H₂. Aluminium: a = c; chlorine: b = 3c; hydrogen: b = 2d. Setting c = 1 → a = 1, b = 3, d = 1.5; multiply by 2: <b>2 Al + 6 HCl → 2 AlCl₃ + 3 H₂</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: balancing",
      questions: [
        { type: "num", q: "In the balanced reaction CH₄ + x O₂ → CO₂ + 2 H₂O, what is x?", answer: 2, explain: "On the right there are 2 + 2 = 4 O atoms, so 2 molecules of O₂ are needed." },
        { type: "mc", q: "Which equation is balanced?", options: ["4 Fe + 3 O₂ → 2 Fe₂O₃", "Fe + O₂ → Fe₂O₃", "2 Fe + 3 O₂ → Fe₂O₃", "Fe + 3 O₂ → 2 Fe₂O₃"], answer: 0, explain: "On the left 4 Fe and 6 O, on the right 4 Fe and 6 O." },
        { type: "tf", q: "To balance an equation you may change the subscripts in the formulas.", answer: false, explain: "Changing a subscript means changing the substance: only the coefficients are changed." }
      ]
    },
    {
      type: "text",
      title: "The main types of reaction",
      html: `<table>
<tr><th>Type</th><th>Pattern</th><th>Example</th></tr>
<tr><td><b>Synthesis</b></td><td>A + B → AB</td><td>2 Mg + O₂ → 2 MgO</td></tr>
<tr><td><b>Decomposition</b></td><td>AB → A + B</td><td>CaCO₃ → CaO + CO₂ (on heating)</td></tr>
<tr><td><b>Single displacement</b></td><td>A + BC → AC + B</td><td>Zn + 2 HCl → ZnCl₂ + H₂</td></tr>
<tr><td><b>Double displacement</b></td><td>AB + CD → AD + CB</td><td>AgNO₃ + NaCl → AgCl↓ + NaNO₃ (precipitate); HCl + NaOH → NaCl + H₂O (neutralisation)</td></tr>
<tr><td><b>Combustion</b></td><td>fuel + O₂ → oxides</td><td>CH₄ + 2 O₂ → CO₂ + 2 H₂O</td></tr>
</table>
<p>Many of these are also <b>oxidation-reduction</b> (redox) reactions, in which oxidation numbers change: in the synthesis of MgO, magnesium goes from 0 to +2 (it is oxidised) and oxygen from 0 to −2 (it is reduced). Reactions can be <b>exothermic</b> (they give out heat: combustions) or <b>endothermic</b> (they take it in: the decomposition of limestone).</p>`
    },
    {
      type: "text",
      title: "Stoichiometric calculations: the mole bridge",
      html: `<p>The coefficients of the balanced equation are also <b>mole ratios</b>. 2 H₂ + O₂ → 2 H₂O means that 2 mol of H₂ react with 1 mol of O₂ and produce 2 mol of H₂O. But in the laboratory we weigh grams, not moles. So every calculation has three steps:</p>
<ol>
<li><b>grams → moles</b> of the given substance: n = m / M;</li>
<li><b>moles → moles</b> of the substance you want, using the ratio of the coefficients;</li>
<li><b>moles → grams</b> (or litres, for gases: 22.4 L/mol at 0 °C and 1 atm): m = n · M.</li>
</ol>
<p><b>Moles are the bridge</b>: you cannot convert grams of A directly into grams of B.</p>`
    },
    {
      type: "example",
      title: "Decomposition of limestone",
      html: `<p>CaCO₃ → CaO + CO₂. How much quicklime (CaO) and how much carbon dioxide do you get from <b>100 g</b> of limestone? Molar masses: CaCO₃ = 100 g/mol, CaO = 56 g/mol, CO₂ = 44 g/mol.</p>
<ol>
<li>n(CaCO₃) = 100 / 100 = <b>1.0 mol</b>.</li>
<li>The ratios are 1 : 1 : 1, so 1.0 mol of CaO and 1.0 mol of CO₂ are formed.</li>
<li>m(CaO) = 1.0 · 56 = <b>56 g</b>; m(CO₂) = 1.0 · 44 = <b>44 g</b>. Total: 100 g, the same as at the start (Lavoisier!).</li>
<li>Volume of CO₂ at 0 °C and 1 atm: 1.0 · 22.4 = <b>22.4 L</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "How much hydrogen comes from a little aluminium?",
      html: `<p>2 Al + 6 HCl → 2 AlCl₃ + 3 H₂. <b>27 g</b> of aluminium (M = 27 g/mol) are reacted with excess acid.</p>
<ol>
<li>n(Al) = 27 / 27 = 1.0 mol.</li>
<li>The ratio Al : H₂ is 2 : 3, so n(H₂) = 1.0 · 3/2 = 1.5 mol.</li>
<li>m(H₂) = 1.5 · 2 = <b>3.0 g</b>; V = 1.5 · 22.4 = <b>33.6 L</b> at STP.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: from grams to moles",
      questions: [
        { type: "num", q: "In the reaction 2 H₂ + O₂ → 2 H₂O, how many moles of water are formed from 3 mol of H₂?", answer: 3, explain: "The ratio H₂ : H₂O is 2 : 2 = 1 : 1, so 3 mol." },
        { type: "num", q: "How many grams of CO₂ (M = 44) do you get by burning 1 mol of C according to C + O₂ → CO₂?", answer: 44, explain: "1 mol of C → 1 mol of CO₂ = 44 g." },
        { type: "mc", q: "What must you always calculate to go from grams of A to grams of B?", options: ["The moles", "The density", "The volume", "The temperature"], answer: 0, explain: "The coefficients are ratios of moles, not of masses: moles are the bridge." }
      ]
    },
    {
      type: "text",
      title: "The limiting reagent and the yield",
      html: `<p>Reactants are rarely present in the exact proportions of the equation. The one that runs out first, and therefore <b>limits</b> the amount of product, is the <b>limiting reagent</b>; the other is in <b>excess</b> and some of it is left over.</p>
<p><b>How to find it</b>: convert the masses into moles and divide each by its coefficient: the smallest result shows the limiting reagent.</p>
<p><b>Example.</b> N₂ + 3 H₂ → 2 NH₃. 28 g of N₂ (1.0 mol, M = 28) and 3.0 g of H₂ (1.5 mol, M = 2) are mixed. Ratios n/coefficient: N₂ 1.0/1 = 1.0; H₂ 1.5/3 = 0.5. The lowest is H₂: it is the <b>limiting reagent</b>. 1.5 · 2/3 = <b>1.0 mol of NH₃</b> is formed, that is 17 g. Only 0.5 mol of the nitrogen reacts, so 0.5 mol (14 g) is left over.</p>
<p>The maximum amount you can obtain (calculated from the limiting reagent) is the <b>theoretical yield</b>. In practice you get less: some reactions are incomplete, there are losses and side reactions. The <b>percentage yield</b> is:</p>
<p style="text-align:center"><b>% yield = (actual yield / theoretical yield) × 100</b></p>
<p>If 13.6 g of NH₃ are collected out of a theoretical 17 g, the yield is 13.6/17 · 100 = <b>80%</b>.</p>`
    },
    {
      type: "svg",
      title: "The limiting reagent as a recipe",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="28" font-size="17" font-weight="bold" fill="#1f2937" text-anchor="middle">N₂ + 3 H₂ → 2 NH₃ with 2 N₂ and 3 H₂</text>
<g stroke="#1e3a8a" stroke-width="2" fill="#3b82f6"><circle cx="40" cy="95" r="16"/><circle cx="72" cy="95" r="16"/><circle cx="40" cy="145" r="16"/><circle cx="72" cy="145" r="16"/></g>
<g stroke="#334155" stroke-width="2" fill="#ffffff"><circle cx="150" cy="80" r="11"/><circle cx="172" cy="80" r="11"/><circle cx="150" cy="115" r="11"/><circle cx="172" cy="115" r="11"/><circle cx="150" cy="150" r="11"/><circle cx="172" cy="150" r="11"/></g>
<text x="56" y="188" font-size="15" fill="#1e3a8a" text-anchor="middle" font-weight="bold">2 N₂</text>
<text x="161" y="188" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">3 H₂</text>
<text x="235" y="125" font-size="30" fill="#1f2937" text-anchor="middle" font-weight="bold">→</text>
<g stroke="#1e3a8a" stroke-width="2" fill="#3b82f6"><circle cx="320" cy="85" r="16"/><circle cx="320" cy="145" r="16"/><circle cx="440" cy="115" r="16"/></g>
<g stroke="#334155" stroke-width="2" fill="#ffffff"><circle cx="294" cy="60" r="10"/><circle cx="346" cy="60" r="10"/><circle cx="320" cy="108" r="10"/><circle cx="294" cy="120" r="10"/><circle cx="346" cy="120" r="10"/><circle cx="320" cy="168" r="10"/></g>
<g stroke="#1e3a8a" stroke-width="2" fill="#3b82f6"><circle cx="500" cy="95" r="16"/><circle cx="532" cy="95" r="16"/></g>
<text x="320" y="205" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">2 NH₃</text>
<text x="516" y="140" font-size="15" fill="#1e3a8a" text-anchor="middle" font-weight="bold">1 N₂ left over</text>
<text x="300" y="250" font-size="16" fill="#b91c1c" text-anchor="middle" font-weight="bold">Hydrogen runs out first: it is the limiting reagent</text>
<text x="300" y="275" font-size="14" fill="#475569" text-anchor="middle">Blue = nitrogen, white = hydrogen.</text>
</svg>`,
      caption: "With 6 H atoms you can make only 2 molecules of NH₃: 2 N atoms are left over, that is one N₂."
    },
    {
      type: "widget",
      title: "The chemistry lab",
      widget: "chemLab",
      options: {},
      caption: "Choose two reactants and weigh them: watch the moles, the limiting reagent, the products and the conservation of mass."
    },
    {
      type: "text",
      title: "Solutions and concentration",
      html: `<p>A <b>solution</b> is a homogeneous mixture: the <b>solute</b> (the smaller amount) is dissolved in the <b>solvent</b> (usually water). To say how much solute there is, we use <b>concentrations</b>:</p>
<table>
<tr><th>Quantity</th><th>Definition</th><th>Example</th></tr>
<tr><td>Percentage by mass (% m/m)</td><td>g of solute in 100 g of solution</td><td>10 g of sugar in 90 g of water: 10 / 100 = 10%</td></tr>
<tr><td>Percentage m/V</td><td>g of solute in 100 mL of solution</td><td>saline solution 0.9% m/V: 0.9 g NaCl in 100 mL</td></tr>
<tr><td><b>Molarity M</b></td><td>moles of solute per <b>litre of solution</b>: M = n / V</td><td>5.85 g of NaCl (0.10 mol) in 500 mL: M = 0.10 / 0.5 = 0.20 mol/L</td></tr>
<tr><td>Molality m</td><td>moles of solute per <b>kg of solvent</b></td><td>0.5 mol in 250 g of water: 2 mol/kg</td></tr>
<tr><td>Mole fraction χ</td><td>moles of the component / total moles</td><td>1 mol of ethanol in 9 mol of water: χ = 0.1</td></tr>
</table>
<p>Molarity is the most used in the lab because it links <b>volume</b> (easy to measure) to <b>moles</b>: n = M · V. However, it depends on temperature (the volume changes), while molality and mole fraction do not.</p>
<p><b>Dilution.</b> Adding solvent does not change the moles of solute, so <b>M₁ · V₁ = M₂ · V₂</b>. To make 500 mL of 1.0 M HCl from a 12 M solution you need V₁ = 1.0 · 500 / 12 ≈ 42 mL, made up to 500 mL with water. Safety rule: always pour the acid into the water, never the other way round.</p>
<p><b>Solutions and reactions.</b> With solutions, stoichiometry uses n = M · V. To neutralise 20 mL of 0.10 M HCl with 0.20 M NaOH (ratio 1 : 1): n(HCl) = 0.10 · 0.020 = 2.0·10⁻³ mol; V(NaOH) = 2.0·10⁻³ / 0.20 = 0.010 L = <b>10 mL</b>. The method of using a solution of known concentration to find the concentration of another is called <b>titration</b>.</p>`
    },
    {
      type: "example",
      title: "Making up a solution",
      html: `<p>You want to make <b>250 mL of 0.40 M NaOH</b>. How much sodium hydroxide (M = 40 g/mol) do you weigh out?</p>
<ol>
<li>n = M · V = 0.40 · 0.250 = 0.10 mol.</li>
<li>m = n · M = 0.10 · 40 = <b>4.0 g</b>.</li>
<li>Dissolve the 4.0 g in a little water in a 250 mL volumetric flask and make it up to the mark. (The volumetric flask guarantees the final volume of the solution, not the volume of the solvent.)</li>
</ol>`
    },
    {
      type: "remember",
      title: "The formulas to keep in mind",
      html: `<ul>
<li><b>n = m / M</b> (moles = grams / molar mass)</li>
<li><b>n = V / 22.4</b> for a gas at 0 °C and 1 atm (V in litres)</li>
<li><b>M = n / V</b> (molarity, V in litres of solution); <b>n = M · V</b></li>
<li><b>M₁ V₁ = M₂ V₂</b> (dilution)</li>
<li><b>% yield = actual / theoretical · 100</b></li>
<li>Limiting reagent: the <b>smallest</b> ratio (moles ÷ coefficient).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand stoichiometry",
      intro: "If the calculations seem abstract, try turning them into real situations.",
      tabs: [
        { label: "🥪 The sandwich recipe", html: "<p>A reaction is a recipe: <b>1 sandwich = 2 slices of bread + 1 slice of ham</b> (2 B + 1 H → 1 B₂H). With 10 slices of bread and 8 of ham, how many sandwiches? The bread is enough for 10 / 2 = 5; the ham for 8 / 1 = 8. <b>Bread is the limiting reagent</b>: you make 5 sandwiches and 3 slices of ham are left over. The same calculation, dividing by the coefficients, identifies the limiting reagent in a chemical reaction. The <b>yield</b> is the number of sandwiches that don't end up on the floor while you make them.</p>" },
        { label: "🌉 The mole bridge", html: "<p>Always draw the same diagram in three boxes: <b>[mass A] → (÷ M_A) → [moles A] → (× coeff B / coeff A) → [moles B] → (× M_B) → [mass B]</b>. It is like crossing a river: the mass of A and the mass of B are on the two banks and the only bridge you can use is the moles. If you forget the bridge and try to swim straight across from grams to grams, you get the wrong answer: H₂ and O₂ do <i>not</i> react 1 : 1 by mass; they react 2 : 1 in moles, which means 4 g of H₂ for every 32 g of O₂.</p>" },
        { label: "🧮 Balancing with equations", html: "<p>If trial and error doesn't work, turn the balancing into a system of equations. For C₂H₆ + O₂ → CO₂ + H₂O, write a C₂H₆ + b O₂ → c CO₂ + d H₂O. Carbon: 2a = c. Hydrogen: 6a = 2d → d = 3a. Oxygen: 2b = 2c + d = 4a + 3a = 7a → b = 3.5a. With a = 2: <b>2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O</b>. The method always works and also suits complicated reactions.</p>" },
        { label: "💧 The water molecule in 3D", html: "<p>For every mole of water formed (18 g), 2 H have bonded to 1 O. Look at the molecule: every one of the 6.022·10²³ particles in the mole has the same composition. So 36 g of water (2 mol) contain 4 mol of H (4 g) and 2 mol of O (32 g): 4 + 32 = 36.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.55, color: "#ef4444", label: "O" }, { x: 0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" }, { x: -0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2]] } }
      ]
    },
    {
      type: "curiosity",
      title: "The Haber-Bosch process and the world's food",
      html: `<p>The reaction N₂ + 3 H₂ → 2 NH₃ is the basis of the <b>Haber-Bosch</b> process: in 1909 Fritz Haber showed it could be done in the laboratory and Carl Bosch scaled it up to industrial level (1913). Ammonia is used to make nitrogen fertilisers: it is estimated that about half of the nitrogen in the human body today comes from that process. Haber received the Nobel Prize in Chemistry in 1918 and Bosch in 1931. Because the yield per pass is low (the equilibrium does not lie completely on the side of NH₃), the unreacted gases are recycled: an example of how percentage yield affects the economics of a plant.</p>`
    },
    {
      type: "curiosity",
      title: "Where does burning wood go?",
      html: `<p>When wood burns, the ash weighs much less than the wood: before Lavoisier, many people thought that something had been destroyed. In fact most of the mass has gone off as <b>gas</b>: CO₂ and water vapour. Wood is about half carbon: burning 1 kg of wood produces about 1.8 kg of CO₂, because the carbon combines with oxygen from the air (which is heavier than the carbon). If the burning happens in a closed container, the balance shows no change: the total mass is conserved.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: from the reaction to the numbers",
      nodes: [
        { id: "lav", label: "Conservation of mass", x: 15, y: 12, color: "#2563eb", html: "Atoms are neither created nor destroyed.", why: "Lavoisier (1789) used a balance with closed containers to show that the mass of the products equals that of the reactants: this defeated the phlogiston theory." },
        { id: "bil", label: "Balancing", x: 50, y: 12, color: "#16a34a", html: "Whole-number coefficients that make the atoms equal.", why: "It follows from Lavoisier's law, written with the symbols of Berzelius (1813-1814), who introduced letters as symbols and subscripts." },
        { id: "mole", label: "Mole and molar mass", x: 85, y: 12, color: "#f59e0b", html: "The bridge between grams and number of particles.", why: "Dalton proposed atomic masses; Avogadro and Cannizzaro showed how to compare numbers of particles; the mole is the modern synthesis of their work." },
        { id: "rap", label: "Mole ratios", x: 30, y: 52, color: "#a855f7", html: "The coefficients are ratios of moles.", why: "From Proust's law (definite proportions) and Gay-Lussac's laws of gas volumes (1808) it became clear that atoms combine in small whole numbers." },
        { id: "lim", label: "Limiting reagent and yield", x: 70, y: 52, color: "#ef4444", html: "Whatever runs out first decides the amount of product; the yield compares actual with theoretical.", why: "In industry cost matters: the cheaper reactant is normally used in excess, so that the more expensive one is used up completely." },
        { id: "sol", label: "Solutions and molarity", x: 50, y: 88, color: "#0ea5e9", html: "n = M · V: stoichiometry in liquids.", why: "Most laboratory reactions take place in solution: measuring a volume is easier than weighing, and molarity converts volume directly into moles." }
      ],
      edges: [["lav", "bil", "requires"], ["bil", "rap", "gives the"], ["mole", "rap", "makes possible the"], ["rap", "lim", "are the basis of"], ["rap", "sol", "also apply in"], ["mole", "sol", "defines"]]
    }
  ],
  glossary: [
    { t: "Reactants and products", d: "The substances that react and those that are formed in a reaction." },
    { t: "Stoichiometric coefficient", d: "Number in front of a formula in an equation: it shows the ratio between the amounts." },
    { t: "Balancing", d: "Choosing the coefficients so that the number of atoms of each element is the same on both sides." },
    { t: "Stoichiometry", d: "The study of the amounts of substances that react and are formed in a reaction." },
    { t: "Limiting reagent", d: "The reactant that runs out first and determines the maximum amount of product." },
    { t: "Percentage yield", d: "The amount of product obtained divided by the theoretical amount, times one hundred." },
    { t: "Solution", d: "Homogeneous mixture of a solute in a solvent." },
    { t: "Molarity", d: "Moles of solute per litre of solution (mol/L)." },
    { t: "Dilution", d: "Adding solvent to lower the concentration, with M₁V₁ = M₂V₂." },
    { t: "Titration", d: "Technique for finding an unknown concentration by reacting the solution with one of known concentration." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which law justifies balancing chemical equations?", options: ["Conservation of mass", "Ohm's law", "The Pauli principle", "Boyle's law"], answer: 0, explain: "Atoms are neither created nor destroyed: their number must be the same before and after." },
      { type: "num", q: "Balance: C₃H₈ + x O₂ → 3 CO₂ + 4 H₂O. What is x?", answer: 5, explain: "On the right there are 6 + 4 = 10 O atoms: 5 O₂ are needed." },
      { type: "num", q: "How many moles of H₂O are formed from 2 mol of O₂ according to 2 H₂ + O₂ → 2 H₂O (hydrogen in excess)?", answer: 4, explain: "The ratio O₂ : H₂O is 1 : 2, so 2 · 2 = 4 mol." },
      { type: "num", q: "How many grams of CaO (M = 56) do you get from 2.0 mol of CaCO₃ (CaCO₃ → CaO + CO₂)?", answer: 112, explain: "2.0 mol of CaCO₃ → 2.0 mol of CaO = 2.0 · 56 = 112 g." },
      { type: "num", q: "How many litres of H₂ (0 °C, 1 atm) do you get from 1.0 mol of Zn with excess acid (Zn + 2 HCl → ZnCl₂ + H₂)?", answer: 22.4, tol: 0.1, unit: "L", explain: "1.0 mol of Zn → 1.0 mol of H₂ = 22.4 L." },
      { type: "mc", q: "You have 2 mol of Na and 2 mol of Cl₂ for the reaction 2 Na + Cl₂ → 2 NaCl. Which is the limiting reagent?", options: ["Na", "Cl₂", "Neither", "NaCl"], answer: 0, explain: "Na: 2/2 = 1; Cl₂: 2/1 = 2. Sodium has the smaller ratio." },
      { type: "num", q: "The theoretical yield is 20 g and 15 g are obtained. What is the percentage yield?", answer: 75, unit: "%", explain: "15/20 · 100 = 75%." },
      { type: "num", q: "What is the molarity of a solution with 0.50 mol of solute in 250 mL?", answer: 2, tol: 0.01, unit: "mol/L", explain: "M = 0.50 / 0.250 = 2.0 mol/L." },
      { type: "num", q: "How many mL of 12 M HCl are needed to make 600 mL of 1.0 M HCl?", answer: 50, tol: 0.5, unit: "mL", explain: "V₁ = M₂V₂/M₁ = 1.0 · 600 / 12 = 50 mL." },
      { type: "order", q: "Put the steps of a stoichiometric calculation in order.", items: ["Convert grams to moles", "Apply the ratio of the coefficients", "Convert moles to grams", "Check the yield"], explain: "Go from grams to moles, then use the coefficients, finally convert back and compare the actual yield with the theoretical one." }
    ]
  }
});
