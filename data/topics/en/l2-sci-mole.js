TOPIC('en', {
  id: "l2-sci-mole",
  title: "The mole and chemical formulas",
  intro: "A chemist cannot count atoms one by one: they are too small and too numerous (a teaspoon of water contains more of them than there are grains of sand on all the beaches in the world). So how can you say \"I'll take exactly two hydrogen atoms for every oxygen atom\" if all you can do is <b>weigh</b> matter? The answer is an ingenious quantity, the <b>mole</b>, which acts as a bridge between the invisible world of atoms and the visible world of the balance. With it you will be able to work out how much reactant you need, how much product you get and how to find the formula of an unknown compound.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "The mass of atoms: the atomic mass unit",
      html: `<p>In your first year you saw the mass laws of Lavoisier (conservation of mass), Proust (definite proportions) and Dalton (multiple proportions), which led people to imagine matter as made of atoms. But how much does an atom weigh? A hydrogen atom has a mass of about 1.67 · 10⁻²⁷ kg: using kilograms would be awkward. So a unit suited to the atomic scale was chosen, the <b>atomic mass unit</b> (symbol <b>u</b>, or Da, dalton):</p>
<p style="text-align:center"><b>1 u = 1/12 of the mass of a carbon-12 atom ≈ 1.6605 · 10⁻²⁷ kg</b></p>
<p>Carbon-12 (6 protons and 6 neutrons) has been the reference isotope since 1961. On this scale a proton or a neutron weighs about 1 u, so the <b>atomic mass</b> of an atom is roughly its mass number A.</p>
<p>The values in the periodic table, however, are not whole numbers: the <b>relative atomic mass</b> of an element is the <b>weighted average</b> of the masses of its naturally occurring isotopes. Chlorine, for example, has two main isotopes: ³⁵Cl (about 75.8%) and ³⁷Cl (about 24.2%). The average is 0.758 · 34.97 + 0.242 · 36.97 ≈ <b>35.45 u</b>, the value given in the table.</p>
<p>For a compound we speak of <b>molecular mass</b> (or formula mass, for ionic compounds): it is the sum of the atomic masses of all the atoms in the formula. Example: H₂O = 2 · 1.008 + 16.00 ≈ <b>18.02 u</b>; CO₂ = 12.01 + 2 · 16.00 = <b>44.01 u</b>; NaCl = 22.99 + 35.45 = <b>58.44 u</b>.</p>`
    },
    {
      type: "widget",
      title: "The periodic table: find the atomic masses",
      widget: "periodicTable",
      options: {},
      caption: "Tap an element to see its atomic number and atomic mass: these are the data you need for all the calculations in this lesson."
    },
    {
      type: "text",
      title: "The mole and Avogadro's number",
      html: `<p>A carbon atom has a mass of 12 u, a water molecule 18 u. If you took 12 g of carbon and 18 g of water, would you have the same number of particles in both cases? Yes! Because the ratio between the masses is 12 : 18, the same as for the individual atoms/molecules. This idea, which grew out of <b>Amedeo Avogadro</b>'s hypothesis (1811) about the volumes of gases, leads to the definition of the <b>mole</b>:</p>
<p style="text-align:center"><b>1 mole (mol) = the amount of substance that contains N<sub>A</sub> = 6.022 · 10²³ elementary entities</b></p>
<p>Since 2019 the International System has defined the mole by fixing the exact value <b>N<sub>A</sub> = 6.02214076 · 10²³ mol⁻¹</b>. The "entities" can be atoms, molecules, ions or electrons: you must always specify which (1 mol of O₂ contains 6.022 · 10²³ molecules, i.e. twice as many atoms).</p>
<p>The name "Avogadro's number" was given later, after the measurements of <b>Jean Perrin</b> (early 20th century), who determined N<sub>A</sub> by several independent methods and received the Nobel Prize in Physics in 1926.</p>
<p>The mole is like a chemical "dozen": a dozen is always 12 objects, whatever the objects; a mole is always 6.022 · 10²³ objects. The difference is that a mole of atoms can actually be weighed: <b>1 mol of carbon-12 atoms weighs exactly 12 g</b> (the historical definition, still valid to excellent precision).</p>`
    },
    {
      type: "svg",
      title: "The mole as a bridge",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="mA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#334155"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="20" y="105" width="170" height="90" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="105" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Mass m</text>
<text x="105" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(grams)</text>
<rect x="235" y="105" width="170" height="90" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="320" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Moles n</text>
<text x="320" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(mol)</text>
<rect x="450" y="105" width="170" height="90" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="535" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Particles N</text>
<text x="535" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(atoms, molecules)</text>
<line x1="190" y1="130" x2="235" y2="130" stroke="#334155" stroke-width="3" marker-end="url(#mA)"/>
<line x1="235" y1="175" x2="190" y2="175" stroke="#334155" stroke-width="3" marker-end="url(#mA)"/>
<line x1="405" y1="130" x2="450" y2="130" stroke="#334155" stroke-width="3" marker-end="url(#mA)"/>
<line x1="450" y1="175" x2="405" y2="175" stroke="#334155" stroke-width="3" marker-end="url(#mA)"/>
<text x="212" y="92" font-size="15" fill="#0f172a" text-anchor="middle">÷ M</text>
<text x="212" y="212" font-size="15" fill="#0f172a" text-anchor="middle">× M</text>
<text x="428" y="92" font-size="15" fill="#0f172a" text-anchor="middle">× N_A</text>
<text x="428" y="212" font-size="15" fill="#0f172a" text-anchor="middle">÷ N_A</text>
<text x="320" y="260" font-size="16" fill="#0f172a" text-anchor="middle">n = m / M &nbsp;&nbsp;&nbsp; N = n · N_A</text>
</g>
</svg>`,
      caption: "From the balance (grams) to moles, from moles to particles: the mole is the step you cannot skip."
    },
    {
      type: "text",
      title: "Molar mass and conversions",
      html: `<p>The <b>molar mass M</b> is the mass of <b>one mole</b> of a substance, in <b>g/mol</b>. Its numerical value is the same as the atomic or molecular mass in u. So:</p>
<ul>
<li>M(C) = 12.01 g/mol; M(H₂O) = 18.02 g/mol; M(CO₂) = 44.01 g/mol; M(NaCl) = 58.44 g/mol; M(glucose C₆H₁₂O₆) = 6·12.01 + 12·1.008 + 6·16.00 ≈ 180.16 g/mol.</li>
</ul>
<p>Key formulas (with n in mol, m in g, M in g/mol):</p>
<p style="text-align:center"><b>n = m / M</b> &nbsp;&nbsp;&nbsp; <b>m = n · M</b> &nbsp;&nbsp;&nbsp; <b>N = n · N<sub>A</sub></b></p>
<p><b>Molar volume of gases.</b> For an ideal gas at standard conditions (0 °C, 1 atm) one mole occupies about <b>22.4 L</b>, whatever the gas (a consequence of Avogadro's hypothesis: equal volumes of different gases, at the same T and p, contain the same number of molecules). So n = V / 22.4 L/mol at standard conditions.</p>
<p><b>Method for problems:</b> 1) write the formula and calculate M; 2) convert the given quantity into moles; 3) use the required ratio (particles, volume, another mass); 4) check units and significant figures.</p>`
    },
    {
      type: "example",
      title: "Weighing to count",
      html: `<p><b>Water.</b> In 36 g of water there are n = 36/18 = <b>2 mol</b> of molecules, i.e. N = 2 · 6.022·10²³ ≈ <b>1.2·10²⁴ molecules</b>; the total number of atoms is three times as many (2 H + 1 O per molecule): about 3.6·10²⁴. A single water molecule has a mass of 18/(6.022·10²³) ≈ 3.0·10⁻²³ g.</p>
<p><b>Sugar.</b> A teaspoon of sucrose (C₁₂H₂₂O₁₁, M = 342 g/mol) weighs about 6.8 g: n = 6.8/342 ≈ 0.020 mol.</p>
<p><b>Gas.</b> 5.6 L of oxygen O₂ at standard conditions: n = 5.6/22.4 = 0.25 mol; m = 0.25 · 32 = <b>8 g</b>.</p>
<p><b>Caustic soda.</b> 10 g of NaOH (M = 23 + 16 + 1 = 40 g/mol): n = 10/40 = <b>0.25 mol</b>, i.e. 1.5·10²³ formula units.</p>`
    },
    {
      type: "curiosity",
      title: "How big is 6.022·10²³?",
      html: `<p>If you had a mole of grains of sand, they would cover an area the size of a country to a depth of many metres. If every person on Earth (8 billion people) counted one unit per second, it would take about 2.4 million years to count a mole. And yet 18 g of water, a single sip, contains a mole of molecules. The size of chemical numbers reminds us how tiny an atom is. The first to realise that gases are made of "molecules", equal in number for equal volumes, was Avogadro (1811), but the idea was accepted only after the Karlsruhe Congress of 1860, thanks to Stanislao Cannizzaro, who showed how to distinguish atomic weights from molecular weights.</p>`
    },
    {
      type: "quiz",
      title: "Check: mole and molar mass",
      questions: [
        { type: "num", q: "What is the molar mass of carbon dioxide CO₂ (C = 12, O = 16)?", answer: 44, tol: 0.1, unit: "g/mol", explain: "M = 12 + 2·16 = 44 g/mol." },
        { type: "num", q: "How many moles are there in 90 g of water (M = 18 g/mol)?", answer: 5, tol: 0.05, unit: "mol", explain: "n = m/M = 90/18 = 5 mol." },
        { type: "tf", q: "One mole of O₂ and one mole of CO₂ contain the same number of molecules.", answer: true, explain: "A mole always contains N_A = 6.022·10²³ entities, whatever the substance." }
      ]
    },
    {
      type: "text",
      title: "Percentage composition and formulas",
      html: `<p>The <b>percentage composition</b> tells you how many grams of each element there are in 100 g of a compound:</p>
<p style="text-align:center"><b>% element = (n · atomic mass of the element / molar mass of the compound) · 100</b></p>
<p>where n is the number of atoms of that element in the formula. Example: for H₂O (M = 18.02): % H = 2.016/18.02 · 100 ≈ <b>11.19%</b>; % O = 16.00/18.02 · 100 ≈ <b>88.81%</b>. The sum is always 100%. For Fe₂O₃ (M ≈ 159.7): % Fe = 2·55.85/159.7 ≈ 69.9%; % O ≈ 30.1%. For NH₄NO₃ (ammonium nitrate, M = 80): % N = 28/80 = 35%, which is why it is used as a nitrogen fertiliser.</p>
<p><b>From composition to formula.</b> If you know the percentage composition of an unknown compound, you can find its <b>empirical formula</b> (the simplest whole-number ratio between the atoms):</p>
<ol>
<li>assume you have 100 g: the percentages become grams;</li>
<li>divide each mass by the atomic mass to get the moles;</li>
<li>divide all the moles by the smallest one;</li>
<li>if the ratios are not whole numbers, multiply by a common factor (2, 3...).</li>
</ol>
<p>The <b>molecular formula</b> is a whole-number multiple of the empirical formula: you find it by dividing the actual molar mass by the mass of the empirical formula. Example: a compound with 40.0% C, 6.7% H, 53.3% O has moles C = 40/12 = 3.33; H = 6.7/1.008 = 6.65; O = 53.3/16 = 3.33. Dividing by 3.33: C : H : O = 1 : 2 : 1, empirical formula <b>CH₂O</b> (mass 30). If the molar mass is 180 g/mol, the factor is 180/30 = 6 and the molecular formula is <b>C₆H₁₂O₆</b>: glucose. If instead it is 60 g/mol, it is acetic acid C₂H₄O₂.</p>`
    },
    {
      type: "example",
      title: "Finding the formula of iron oxide",
      html: `<p>An iron oxide ore contains 70.0% iron and 30.0% oxygen. In 100 g: Fe = 70.0/55.85 = 1.253 mol; O = 30.0/16.00 = 1.875 mol. Divide by the smallest (1.253): Fe = 1; O = 1.50. The ratio is not a whole number: multiply by 2 → Fe : O = 2 : 3. The empirical formula (here also the formula unit) is <b>Fe₂O₃</b>, haematite, the main iron ore.</p>`
    },
    {
      type: "remember",
      title: "The key formulas",
      html: `<p><b>n = m/M</b> · <b>N = n·N<sub>A</sub></b> · <b>V = n · 22.4 L</b> (gases, standard conditions) · <b>% = (n_atoms · M_atom / M_compound) · 100</b>.</p>
<p>Typical mistake: forgetting the subscripts (1 mol of H₂O contains 2 mol of H atoms) or confusing atoms and molecules (O versus O₂). Always check: if the mass is greater than the molar mass, you have more than one mole.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand it",
      intro: "If the mole seems abstract, look at it through these images.",
      tabs: [
        { label: "🥚 Like a dozen", html: "<p>A dozen eggs weighs about 600 g, a dozen bricks about 30 kg: same number, different masses. A mole works the same way: a mole of water weighs 18 g, a mole of iron 55.85 g, a mole of lead 207 g. The number of particles is identical; the mass changes because the mass of each individual particle changes. So if you weigh out 18 g of water and 55.85 g of iron, you know you have exactly the same number of water molecules and iron atoms.</p>" },
        { label: "🧪 Virtual lab", html: "<p>Try \"weighing\" some reactants in the interactive lab: choose the substances, watch the balance, the moles and the limiting reactant, and check that the mass of the products equals that of the reactants (Lavoisier's conservation of mass).</p>", widget: "chemLab", options: {} },
        { label: "💧 The molecule in 3D", html: "<p>Here is a water molecule. 1 mol of H₂O contains 6.022·10²³ molecules like this one: each has 1 oxygen atom and 2 hydrogen atoms. Counting atoms: 1 mol of H₂O contains 2 mol of H atoms and 1 mol of O atoms. Multiplying by the molar masses: 2 · 1.008 + 16.00 = 18.02 g.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.55, color: "#ef4444", label: "O" }, { x: 0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" }, { x: -0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2]] } }
      ]
    },
    {
      type: "quiz",
      title: "Check: composition and formulas",
      questions: [
        { type: "num", q: "What is the percentage by mass of hydrogen in CH₄ (C = 12, H = 1)?", answer: 25, tol: 0.2, unit: "%", explain: "M = 16; H = 4/16 = 25%." },
        { type: "mc", q: "A compound contains C and H in a molar ratio of 1 : 2. What could its empirical formula be?", options: ["CH", "CH₂", "C₂H", "C₂H₂"], answer: 1, explain: "A 1 : 2 ratio means one C for every two H: CH₂." },
        { type: "tf", q: "The empirical formula and the molecular formula are always the same.", answer: false, explain: "They are the same only if the compound is not a multiple (e.g. CH₂O is the empirical formula of glucose, C₆H₁₂O₆)." }
      ]
    },
    {
      type: "curiosity",
      title: "What are you weighing when you weigh a gram?",
      html: `<p>In 2019 the International System of Units was redefined: the kilogram is no longer tied to a platinum-iridium cylinder kept at Sèvres, but to the fixed value of the Planck constant, and the mole to the exact value of Avogadro's number. To measure N_A very precisely, almost perfect spheres of silicon-28 were used: by counting the atoms in the crystal lattice and measuring the mass and volume of the sphere, the number of atoms was obtained with uncertainties of a few parts in a hundred million.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the mole",
      nodes: [
        { id: "uma", label: "Atomic mass unit", x: 15, y: 12, color: "#2563eb", html: "1 u = 1/12 of the mass of carbon-12.", why: "Dalton proposed atomic weights relative to hydrogen (1803); in the 20th century, with mass spectrometers, carbon-12 was adopted (1961) because it is more precise and convenient, and it makes M numerically equal in g/mol." },
        { id: "massa", label: "Relative atomic mass", x: 50, y: 12, color: "#16a34a", html: "Weighted average of the naturally occurring isotopes.", why: "It is not a whole number because natural elements are mixtures of isotopes; the discovery of isotopes (Soddy, Aston, early 20th century) explained the fractional values that had puzzled chemists." },
        { id: "avog", label: "Avogadro's hypothesis", x: 85, y: 12, color: "#f59e0b", html: "Equal volumes of gases, same conditions: same number of molecules.", why: "Gay-Lussac had found simple ratios between the volumes of reacting gases; Avogadro (1811) explained them by proposing diatomic molecules for gaseous elements (H₂, O₂). It was ignored for 50 years, until Cannizzaro (1860) revived it." },
        { id: "mole", label: "Mole and N_A", x: 50, y: 50, color: "#ef4444", html: "1 mol = 6.022·10²³ entities.", why: "It lets us count by weighing: a group of particles large enough to have a measurable mass. Perrin (1908-1913) proved that atoms are real by measuring N_A with several independent methods." },
        { id: "molare", label: "Molar mass", x: 15, y: 88, color: "#a855f7", html: "M in g/mol: n = m/M.", why: "It is the conversion factor between the microscopic world (u) and the macroscopic world (g): that is why the mole was defined so that 12 g of ¹²C is one mole." },
        { id: "comp", label: "Composition and formulas", x: 85, y: 88, color: "#0ea5e9", html: "Percentages by mass, empirical and molecular formulas.", why: "It is Proust's law of definite proportions (1799) translated into moles: from the composition you work back to the numerical ratio between atoms, as Dalton did to deduce the formulas of compounds." }
      ],
      edges: [["uma", "massa", "measures the"], ["massa", "molare", "gives the"], ["avog", "mole", "leads to the"], ["mole", "molare", "links m and n via"], ["molare", "comp", "lets you calculate the"], ["mole", "comp", "gives the atomic ratio of the"]]
    }
  ],
  glossary: [
    { t: "Atomic mass unit (u)", d: "1/12 of the mass of a carbon-12 atom, about 1.66·10⁻²⁷ kg." },
    { t: "Relative atomic mass", d: "Average mass of an atom of an element, taking isotopes into account, in u." },
    { t: "Molecular mass", d: "Sum of the atomic masses of the atoms in a molecule." },
    { t: "Mole", d: "The amount of substance that contains 6.022·10²³ elementary entities." },
    { t: "Avogadro's number", d: "N_A = 6.02214076·10²³ mol⁻¹, the number of entities in one mole." },
    { t: "Molar mass", d: "The mass of one mole of a substance, in g/mol." },
    { t: "Percentage composition", d: "Percentage by mass of each element in a compound." },
    { t: "Empirical formula", d: "The simplest whole-number ratio between the atoms of a compound." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What reference is the atomic mass unit defined against?", options: ["1/12 of the mass of ¹²C", "The mass of hydrogen", "The mass of oxygen-16", "The mass of the electron"], answer: 0, explain: "1 u = 1/12 of the mass of a carbon-12 atom." },
      { type: "num", q: "Calculate the molar mass of sulfuric acid H₂SO₄ (H = 1, S = 32, O = 16).", answer: 98, tol: 0.1, unit: "g/mol", explain: "2·1 + 32 + 4·16 = 98 g/mol." },
      { type: "num", q: "How many moles are there in 49 g of H₂SO₄ (M = 98 g/mol)?", answer: 0.5, tol: 0.01, unit: "mol", explain: "n = 49/98 = 0.5 mol." },
      { type: "num", q: "How many molecules are there in 0.5 mol of a substance? Give your answer in units of 10²³ (N_A = 6.02·10²³).", answer: 3.01, tol: 0.05, unit: "×10²³", explain: "N = 0.5 · 6.02·10²³ = 3.01·10²³." },
      { type: "tf", q: "The number of hydrogen atoms in 1 mol of H₂O is 6.022·10²³.", answer: false, explain: "Each molecule has 2 H atoms: 1 mol of H₂O contains 2 mol of H atoms, i.e. 1.2·10²⁴ atoms." },
      { type: "num", q: "What is the mass of 3 mol of NaOH (M = 40 g/mol)?", answer: 120, tol: 0.5, unit: "g", explain: "m = n·M = 3 · 40 = 120 g." },
      { type: "num", q: "What volume do 2 mol of a gas occupy at standard conditions (22.4 L/mol)?", answer: 44.8, tol: 0.1, unit: "L", explain: "V = 2 · 22.4 = 44.8 L." },
      { type: "num", q: "What is the percentage by mass of oxygen in CO₂ (C = 12, O = 16)? Round to the nearest whole number.", answer: 73, tol: 0.5, unit: "%", explain: "O = 32/44 = 72.7% ≈ 73%." },
      { type: "mc", q: "A compound is 40% C, 6.7% H and 53.3% O. What is its empirical formula?", options: ["CHO", "CH₂O", "C₂H₄O", "CH₄O"], answer: 1, explain: "Moles: C 3.33, H 6.65, O 3.33 → ratio 1 : 2 : 1 → CH₂O." },
      { type: "order", q: "Order by increasing molar mass.", items: ["H₂", "H₂O", "CO₂", "NaCl"], explain: "H₂ ≈ 2 < H₂O ≈ 18 < CO₂ ≈ 44 < NaCl ≈ 58.4 g/mol." }
    ]
  }
});
