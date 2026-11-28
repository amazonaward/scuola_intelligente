TOPIC('en', {
  id: "l3-sci-legami-chimici",
  title: "Chemical bonds",
  intro: "Why is the oxygen in the air O₂ and not O? Why is table salt a hard solid that dissolves in water and conducts electricity only when dissolved, while copper is a flexible wire that always conducts? The answer lies in the way atoms share, give away or pool their <b>valence electrons</b>. In this lesson we study <b>ionic</b>, <b>covalent</b> and <b>metallic</b> bonding, learn to draw Lewis structures and predict the <b>shape of molecules</b> with the <b>VSEPR</b> model.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Why atoms bond",
      html: `<p>A bond forms when the bonded atoms together have a <b>lower energy</b> than the separate atoms: breaking the bond therefore takes energy (the bond energy). In 1916 <b>Gilbert Lewis</b> and, independently, <b>Walther Kossel</b> observed that the noble gases, with eight electrons in their outer shell (two for helium), are very stable and unreactive. Other atoms tend to reach the same situation: this is the <b>octet rule</b>.</p>
<p>There are three ways to obtain an octet:</p>
<ul>
<li><b>giving away or gaining</b> electrons and becoming ions that attract each other: <b>ionic bonding</b>;</li>
<li><b>sharing</b> pairs of electrons: <b>covalent bonding</b>;</li>
<li><b>pooling</b> the valence electrons of many identical atoms: <b>metallic bonding</b>.</li>
</ul>
<p>To represent valence electrons we use <b>Lewis symbols</b>: the symbol of the element surrounded by dots, one per electron. Sodium has one dot (Na·), chlorine seven (three pairs and one unpaired dot), oxygen six (two of them unpaired).</p>
<p>The rule has exceptions: hydrogen stops at 2 electrons (a duet); boron in BF₃ has 6 electrons; elements from the third period onwards, such as P and S, can have more than eight electrons (PCl₅, SF₆).</p>`
    },
    {
      type: "text",
      title: "Which bond? Electronegativity decides",
      html: `<p>As you saw with the periodic table, <b>electronegativity (EN)</b> measures how strongly an atom attracts bonding electrons. From the <b>difference ΔEN</b> between the two atoms you can tell what type of bond forms (approximate thresholds):</p>
<ul>
<li><b>ΔEN ≈ 0 – 0.4</b>: <b>non-polar covalent</b> bond, the electrons are shared equally (Cl₂, O₂, C–H).</li>
<li><b>ΔEN ≈ 0.4 – 1.7</b>: <b>polar covalent</b> bond, the electrons are pulled towards the more electronegative atom, which takes on a partial negative charge δ⁻ (HCl, H₂O).</li>
<li><b>ΔEN &gt; about 1.7</b>: <b>ionic</b> bond, the transfer of electrons is almost complete (NaCl, MgO).</li>
</ul>
<p>Examples with the Pauling scale: NaCl: 3.16 − 0.93 = 2.23 (ionic). HCl: 3.16 − 2.20 = 0.96 (polar). O–H: 3.44 − 2.20 = 1.24 (polar). C–H: 2.55 − 2.20 = 0.35 (almost non-polar). In reality the change is gradual: every ionic bond has some covalent character and vice versa.</p>`
    },
    {
      type: "svg",
      title: "From covalent to ionic",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><linearGradient id="gr" x1="0" x2="1"><stop offset="0" stop-color="#4ade80"/><stop offset="0.5" stop-color="#facc15"/><stop offset="1" stop-color="#f87171"/></linearGradient></defs>
<rect x="40" y="100" width="520" height="40" rx="8" fill="url(#gr)"/>
<text x="300" y="35" font-size="17" font-weight="bold" fill="#1f2937" text-anchor="middle">The character of the bond changes with ΔEN</text>
<text x="60" y="90" font-size="15" fill="#166534" font-weight="bold">non-polar covalent</text>
<text x="300" y="90" font-size="15" fill="#92400e" font-weight="bold" text-anchor="middle">polar covalent</text>
<text x="540" y="90" font-size="15" fill="#991b1b" font-weight="bold" text-anchor="end">ionic</text>
<g stroke="#1f2937" stroke-width="2"><line x1="60" y1="140" x2="60" y2="158"/><line x1="180" y1="140" x2="180" y2="158"/><line x1="320" y1="140" x2="320" y2="158"/><line x1="500" y1="140" x2="500" y2="158"/></g>
<g font-size="15" fill="#1f2937" text-anchor="middle">
<text x="60" y="182">Cl–Cl</text><text x="60" y="203" fill="#475569" font-size="14">ΔEN = 0</text>
<text x="180" y="182">C–H</text><text x="180" y="203" fill="#475569" font-size="14">0.35</text>
<text x="320" y="182">H–Cl</text><text x="320" y="203" fill="#475569" font-size="14">0.96</text>
<text x="500" y="182">Na⁺Cl⁻</text><text x="500" y="203" fill="#475569" font-size="14">2.23</text>
</g>
<text x="300" y="260" font-size="15" fill="#475569" text-anchor="middle">The categories are a convention: the change is gradual.</text>
</svg>`,
      caption: "The bigger the difference in electronegativity, the more the electrons are pulled towards one atom, up to complete transfer."
    },
    {
      type: "text",
      title: "Ionic bonding",
      html: `<p>It forms between a <b>metal</b> (low ionisation energy) and a <b>non-metal</b> (high electron affinity). Sodium gives its 3s electron to chlorine: Na → Na⁺ + e⁻ (configuration of neon), Cl + e⁻ → Cl⁻ (configuration of argon). The two oppositely charged ions attract each other by the Coulomb force.</p>
<p>An ionic compound is <b>not made of molecules</b> but of a <b>crystal lattice</b> in which each ion is surrounded by ions of opposite charge (in NaCl each Na⁺ has 6 Cl⁻ neighbours and vice versa). The formula shows only the <b>ratio</b> of the ions (formula unit): MgCl₂ means 1 Mg²⁺ for every 2 Cl⁻, neutral overall. The stability of the crystal is given by the <b>lattice energy</b>: the higher the charges and the smaller the ions, the stronger the bonding.</p>
<p><b>Properties</b> of ionic compounds:</p>
<ul>
<li>crystalline solids, <b>hard but brittle</b> (if one layer slips, ions of the same charge end up side by side, repel each other and the crystal breaks);</li>
<li>high melting point (NaCl 801 °C, MgO about 2850 °C);</li>
<li>they <b>do not conduct</b> when solid (the ions are locked in place), but they do conduct <b>when molten or in solution</b>, because the ions are free to move;</li>
<li>often soluble in water, whose polar molecules surround the ions.</li>
</ul>`
    },
    {
      type: "example",
      title: "Writing the formula of an ionic compound",
      html: `<p>Balance the charges so that the total is zero. <b>Aluminium oxide</b>: Al forms Al³⁺, oxygen forms O²⁻. The lowest common multiple of 3 and 2 is 6: you need 2 Al³⁺ (+6) and 3 O²⁻ (−6), so <b>Al₂O₃</b>. <b>Calcium chloride</b>: Ca²⁺ and Cl⁻, so CaCl₂. A shortcut: swap the charges over and use them as subscripts (Al³⁺ O²⁻ → Al₂O₃).</p>`
    },
    {
      type: "text",
      title: "Covalent bonding",
      html: `<p>Between two <b>non-metals</b> neither atom can pull the electron away from the other: they <b>share</b> them. One shared pair is a <b>single bond</b>; two pairs a <b>double</b> bond, three a <b>triple</b> bond. In Lewis structures a bonding pair is drawn as a line, and pairs that are not shared (<b>lone pairs</b>) as two dots.</p>
<p><b>How to draw a Lewis structure</b>:</p>
<ol>
<li>Add up the valence electrons of all the atoms (add one for each negative charge, subtract one for each positive charge).</li>
<li>Put the least electronegative atom in the centre (never hydrogen) and connect the others to it with single bonds.</li>
<li>Distribute the remaining electrons as lone pairs, starting with the outer atoms, until the octets are complete.</li>
<li>If the central atom is short of electrons, turn lone pairs into double or triple bonds.</li>
</ol>
<p><b>Examples.</b> H₂: H–H. Cl₂: Cl–Cl with three lone pairs on each atom. O₂: O=O (double). N₂: N≡N (triple; it is an extremely strong bond, 945 kJ/mol: that is why atmospheric nitrogen is so unreactive). CO₂: O=C=O. H₂O: H–O–H with two lone pairs on the oxygen. NH₃: three N–H bonds and one lone pair on the nitrogen.</p>
<p>The more bonds there are between two atoms, <b>the shorter and stronger the bond</b>. For example C–C 154 pm and about 347 kJ/mol, C=C 134 pm and 614 kJ/mol, C≡C 120 pm and 839 kJ/mol.</p>
<p>In a <b>dative</b> (or coordinate) bond both electrons of the pair come from the same atom: in the ammonium ion NH₄⁺ the lone pair on the nitrogen of NH₃ bonds to an H⁺. Once formed, it is identical to the other three N–H bonds.</p>
<p>In terms of orbitals, a covalent bond is the <b>overlap</b> of atomic orbitals: a <b>σ</b> bond is head-on overlap along the axis (the first bond is always σ), a <b>π</b> bond is sideways overlap of p orbitals (the second and third bonds are π). A double bond is therefore σ + π, a triple bond σ + 2π.</p>`
    },
    {
      type: "svg",
      title: "Lewis structures",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="22" font-weight="bold" fill="#1f2937" text-anchor="middle">
<text x="80" y="90">H</text><text x="140" y="90">H</text><line x1="92" y1="82" x2="128" y2="82" stroke="#1f2937" stroke-width="3"/>
<text x="110" y="130" font-size="15" font-weight="normal" fill="#475569">H₂ (single)</text>
<text x="260" y="90">O</text><text x="320" y="90">O</text>
<line x1="274" y1="78" x2="306" y2="78" stroke="#1f2937" stroke-width="3"/><line x1="274" y1="87" x2="306" y2="87" stroke="#1f2937" stroke-width="3"/>
<text x="290" y="130" font-size="15" font-weight="normal" fill="#475569">O₂ (double)</text>
<text x="450" y="90">N</text><text x="510" y="90">N</text>
<line x1="464" y1="74" x2="496" y2="74" stroke="#1f2937" stroke-width="3"/><line x1="464" y1="82" x2="496" y2="82" stroke="#1f2937" stroke-width="3"/><line x1="464" y1="90" x2="496" y2="90" stroke="#1f2937" stroke-width="3"/>
<text x="480" y="130" font-size="15" font-weight="normal" fill="#475569">N₂ (triple)</text>
<text x="110" y="230">H</text><text x="160" y="205" fill="#dc2626">O</text><text x="210" y="230">H</text>
<line x1="124" y1="222" x2="148" y2="208" stroke="#1f2937" stroke-width="3"/><line x1="172" y1="208" x2="196" y2="222" stroke="#1f2937" stroke-width="3"/>
<circle cx="150" cy="185" r="3" fill="#2563eb"/><circle cx="162" cy="185" r="3" fill="#2563eb"/><circle cx="170" cy="185" r="3" fill="#2563eb"/>
<text x="160" y="268" font-size="15" font-weight="normal" fill="#475569">H₂O: 2 lone pairs</text>
<text x="360" y="230">O</text><text x="430" y="230" fill="#dc2626">C</text><text x="500" y="230">O</text>
<line x1="376" y1="218" x2="414" y2="218" stroke="#1f2937" stroke-width="3"/><line x1="376" y1="227" x2="414" y2="227" stroke="#1f2937" stroke-width="3"/>
<line x1="446" y1="218" x2="484" y2="218" stroke="#1f2937" stroke-width="3"/><line x1="446" y1="227" x2="484" y2="227" stroke="#1f2937" stroke-width="3"/>
<text x="430" y="268" font-size="15" font-weight="normal" fill="#475569">CO₂: two double bonds</text>
</g>
<text x="300" y="30" font-size="16" fill="#0369a1" text-anchor="middle" font-weight="bold">Each line is a shared pair of electrons</text>
</svg>`,
      caption: "The lone pairs on the oxygen (blue dots) do not take part in bonds but they determine the shape of the molecule."
    },
    {
      type: "quiz",
      title: "Mini-quiz: ionic and covalent",
      questions: [
        { type: "mc", q: "Which formula is correct for the compound of Mg²⁺ and Cl⁻?", options: ["MgCl₂", "Mg₂Cl", "MgCl", "Mg₂Cl₂"], answer: 0, explain: "You need two Cl⁻ (−2) to balance one Mg²⁺ (+2): MgCl₂." },
        { type: "tf", q: "Solid sodium chloride is a good conductor of electricity.", answer: false, explain: "In the solid state the ions are locked in the lattice; it conducts only when molten or in solution." },
        { type: "num", q: "How many pairs of electrons do the two nitrogen atoms share in N₂?", answer: 3, explain: "N₂ has a triple bond: three shared pairs, 1 σ and 2 π." }
      ]
    },
    {
      type: "text",
      title: "Metallic bonding",
      html: `<p>In a metal the atoms have few valence electrons and a low ionisation energy. In the solid the valence electrons <b>do not belong to any one atom</b> but are <b>delocalised</b>: they form a "sea" of electrons that moves among the cations arranged in a regular lattice. It is a strong, non-directional bond.</p>
<p>This model explains the properties of metals:</p>
<ul>
<li>high <b>electrical and thermal conductivity</b>: the electrons are free to move;</li>
<li><b>lustre</b>: the electrons reflect light;</li>
<li><b>malleability and ductility</b>: layers of cations slide over one another without the bonding breaking, because the sea of electrons adapts (unlike in ionic crystals);</li>
<li>very varied melting points: low for mercury (liquid down to −39 °C), extremely high for tungsten (about 3420 °C).</li>
</ul>
<p><b>Alloys</b> are mixtures of metals (or of metals with small amounts of non-metals) with improved properties: <b>steel</b> is iron with a little carbon, <b>bronze</b> is copper and tin, <b>brass</b> is copper and zinc.</p>`
    },
    {
      type: "text",
      title: "The shape of molecules: the VSEPR model",
      html: `<p>A Lewis formula does not tell you how the atoms are arranged in space. The <b>VSEPR</b> model (<i>Valence Shell Electron Pair Repulsion</i>, Gillespie and Nyholm, 1957) starts from a simple idea: the <b>electron pairs</b> around the central atom (bonding pairs and lone pairs) repel each other and spread out as far apart as possible. A multiple bond counts as a single "cloud".</p>
<table>
<tr><th>Clouds around the centre</th><th>Lone pairs</th><th>Shape</th><th>Angle</th><th>Example</th></tr>
<tr><td>2</td><td>0</td><td>linear</td><td>180°</td><td>CO₂, BeCl₂</td></tr>
<tr><td>3</td><td>0</td><td>trigonal planar</td><td>120°</td><td>BF₃, SO₃</td></tr>
<tr><td>4</td><td>0</td><td>tetrahedral</td><td>109.5°</td><td>CH₄</td></tr>
<tr><td>4</td><td>1</td><td>trigonal pyramidal</td><td>about 107°</td><td>NH₃</td></tr>
<tr><td>4</td><td>2</td><td>bent (V-shaped)</td><td>about 104.5°</td><td>H₂O</td></tr>
<tr><td>5</td><td>0</td><td>trigonal bipyramidal</td><td>90° and 120°</td><td>PCl₅</td></tr>
<tr><td>6</td><td>0</td><td>octahedral</td><td>90°</td><td>SF₆</td></tr>
</table>
<p>Lone pairs take up more space than bonding pairs: that is why the angles in NH₃ (107°) and H₂O (104.5°) are a little smaller than the perfect tetrahedral angle (109.5°). The shape is described by looking only at the <b>atoms</b>, not at the lone pairs: water, with four clouds around the oxygen, is "bent", not tetrahedral.</p>
<p>Hybrid orbitals (<b>sp³</b>, <b>sp²</b>, <b>sp</b>) are the tool that valence bond theory uses to explain these shapes: in methane, carbon mixes one 2s and three 2p orbitals into four identical sp³ orbitals, pointing towards the corners of a tetrahedron.</p>`
    },
    {
      type: "svg",
      title: "Four basic shapes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">
<g>
<line x1="30" y1="120" x2="120" y2="120" stroke="#64748b" stroke-width="4"/>
<circle cx="75" cy="120" r="14" fill="#f59e0b"/><circle cx="30" cy="120" r="10" fill="#ef4444"/><circle cx="120" cy="120" r="10" fill="#ef4444"/>
<text x="75" y="175">Linear</text><text x="75" y="198" font-weight="normal">180° (CO₂)</text>
</g>
<g>
<line x1="225" y1="120" x2="225" y2="75" stroke="#64748b" stroke-width="4"/><line x1="225" y1="120" x2="186" y2="143" stroke="#64748b" stroke-width="4"/><line x1="225" y1="120" x2="264" y2="143" stroke="#64748b" stroke-width="4"/>
<circle cx="225" cy="120" r="14" fill="#f59e0b"/><circle cx="225" cy="75" r="10" fill="#ef4444"/><circle cx="186" cy="143" r="10" fill="#ef4444"/><circle cx="264" cy="143" r="10" fill="#ef4444"/>
<text x="225" y="175">Trigonal</text><text x="225" y="198" font-weight="normal">120° (BF₃)</text>
</g>
<g>
<line x1="375" y1="120" x2="375" y2="68" stroke="#64748b" stroke-width="4"/><line x1="375" y1="120" x2="335" y2="150" stroke="#64748b" stroke-width="4"/><line x1="375" y1="120" x2="420" y2="148" stroke="#64748b" stroke-width="4"/><line x1="375" y1="120" x2="395" y2="95" stroke="#94a3b8" stroke-width="4" stroke-dasharray="4 3"/>
<circle cx="375" cy="120" r="14" fill="#f59e0b"/><circle cx="375" cy="68" r="10" fill="#ef4444"/><circle cx="335" cy="150" r="10" fill="#ef4444"/><circle cx="420" cy="148" r="10" fill="#ef4444"/><circle cx="395" cy="95" r="9" fill="#ef4444"/>
<text x="375" y="175">Tetrahedral</text><text x="375" y="198" font-weight="normal">109.5° (CH₄)</text>
</g>
<g>
<line x1="525" y1="95" x2="555" y2="140" stroke="#64748b" stroke-width="4"/><line x1="525" y1="95" x2="490" y2="140" stroke="#64748b" stroke-width="4"/>
<circle cx="525" cy="95" r="14" fill="#f59e0b"/><circle cx="555" cy="140" r="10" fill="#ef4444"/><circle cx="490" cy="140" r="10" fill="#ef4444"/>
<path d="M505 68 q12 -14 24 0" stroke="#2563eb" stroke-width="3" fill="none"/>
<text x="525" y="175">Bent</text><text x="525" y="198" font-weight="normal">104.5° (H₂O)</text>
</g>
</g>
<text x="300" y="250" font-size="15" fill="#475569" text-anchor="middle">Orange = central atom, red = bonded atoms, blue arc = lone pairs</text>
<text x="300" y="30" font-size="16" fill="#0369a1" text-anchor="middle" font-weight="bold">Electron clouds move as far apart as possible</text>
</svg>`,
      caption: "The number of electron clouds around the central atom decides the shape."
    },
    {
      type: "3d",
      title: "Methane in 3D",
      scene: "molecule",
      options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#475569", label: "C" }, { x: 0.65, y: 0.65, z: 0.65, r: 0.3, color: "#e2e8f0", label: "H" }, { x: 0.65, y: -0.65, z: -0.65, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.65, y: 0.65, z: -0.65, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.65, y: -0.65, z: 0.65, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]] },
      caption: "CH₄: four identical bonds pointing towards the corners of a regular tetrahedron (109.5°)."
    },
    {
      type: "example",
      title: "Predicting the shape of SO₂ and BF₃",
      html: `<p><b>BF₃</b>: B has 3 valence electrons, each F has 7: three single B–F bonds, three clouds around the boron and no lone pairs. The shape is <b>trigonal planar</b>, 120°, and the molecule is non-polar (it is an exception to the octet rule: boron has only 6 electrons).</p>
<p><b>SO₂</b>: S (6) + 2 O (6 + 6) = 18 electrons. Draw O=S–O (or with one double and one single bond in resonance), with a lone pair on the sulfur. There are three clouds (two bonds and one lone pair): the molecule is <b>bent</b> with an angle of about 119°, and it is polar.</p>`
    },
    {
      type: "text",
      title: "Polar molecules and intermolecular forces",
      html: `<p>A molecule is <b>polar</b> if it has an overall <b>electric dipole</b>, that is if the dipoles of its bonds do not cancel out. Shape matters:</p>
<ul>
<li><b>CO₂</b>: the two C=O bonds are polar but point in opposite directions (linear): the molecule is <b>non-polar</b>.</li>
<li><b>H₂O</b>: the O–H bonds are polar and at an angle: the dipoles add up, the molecule is <b>polar</b>.</li>
<li><b>CCl₄</b>: four polar bonds in a symmetrical tetrahedron: non-polar. <b>CHCl₃</b> (chloroform): the symmetry is broken, polar.</li>
</ul>
<p>Between molecules there are forces much weaker than bonds (<b>intermolecular forces</b>), which decide physical state, boiling point and solubility:</p>
<ul>
<li><b>London forces</b> (dispersion forces): present in all molecules, they increase with mass and surface area; they are the only ones in non-polar molecules;</li>
<li><b>dipole-dipole forces</b>: between polar molecules;</li>
<li><b>hydrogen bonds</b>: an H bonded to F, O or N attracted to a lone pair on another F, O or N. This is the strongest and explains why water (mass 18) boils at 100 °C while H₂S (mass 34) boils at −60 °C.</li>
</ul>
<p>Rule of thumb: <b>like dissolves like</b>. Polar and ionic substances dissolve in polar solvents (water), non-polar ones (oil, petrol) in non-polar solvents.</p>`
    },
    {
      type: "remember",
      title: "Summary of the three bond types",
      html: `<table>
<tr><th></th><th>Ionic</th><th>Covalent</th><th>Metallic</th></tr>
<tr><td>Between</td><td>metal + non-metal</td><td>non-metals</td><td>metals</td></tr>
<tr><td>Electrons</td><td>transferred</td><td>shared in pairs</td><td>delocalised</td></tr>
<tr><td>Structure</td><td>lattice of ions</td><td>molecules (or covalent networks: diamond, SiO₂)</td><td>lattice of cations</td></tr>
<tr><td>Conductivity</td><td>only molten/dissolved</td><td>usually insulators</td><td>always, even as solids</td></tr>
<tr><td>Melting point</td><td>high</td><td>low (molecules) or very high (networks)</td><td>variable</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: shape and polarity",
      questions: [
        { type: "mc", q: "What is the shape of a water molecule?", options: ["Bent", "Linear", "Tetrahedral", "Trigonal planar"], answer: 0, explain: "Oxygen has two bonding pairs and two lone pairs: four clouds, but the shape formed by the atoms is a V." },
        { type: "tf", q: "The CO₂ molecule is non-polar even though the C=O bonds are polar.", answer: true, explain: "It is linear: the two dipoles are equal and opposite and cancel out." },
        { type: "num", q: "What are the ideal bond angles in a tetrahedral molecule? (in degrees, one decimal place)", answer: 109.5, tol: 0.1, unit: "°", explain: "For four identical clouds the angle is 109.5°." }
      ]
    },
    {
      type: "alternatives",
      title: "Other ways to understand bonds",
      intro: "Different pictures and models for the same ideas.",
      tabs: [
        { label: "🎈 Balloons", html: "<p>Tie four inflated balloons together at one point: they arrange themselves at the corners of a tetrahedron, because they push each other away and fill all the space. Three balloons form a flat triangle, two point in opposite directions. This is exactly VSEPR: the balloons are the electron clouds. A \"fat\" balloon (a lone pair, which is bulkier) pushes the others away: the angles close up a little. Of the four balloons in H₂O, two are lone pairs: looking only at the atoms, you see a V.</p>" },
        { label: "🤝 Tug of war", html: "<p>Two atoms are two players pulling on a rope (the electron pair). If they are equally strong (ΔEN = 0), the rope stays in the middle: a non-polar covalent bond. If one is a little stronger, the rope moves towards them: a polar bond. If one is much stronger, they take the rope away: an ionic bond. This picture is the same as the coloured spectrum in the lesson, and it explains why there is no sharp boundary.</p>" },
        { label: "💧 Ammonia in 3D", html: "<p>Ammonia has four clouds around the nitrogen, but one of them is a lone pair: the three hydrogen atoms form the base of a pyramid and the lone pair sits at the opposite tip. The H–N–H angles are about 107°. Rotate the molecule and see that it is a pyramid, not a flat triangle.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0.35, z: 0, r: 0.45, color: "#3b82f6", label: "N" }, { x: 0.9, y: -0.3, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.45, y: -0.3, z: 0.78, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.45, y: -0.3, z: -0.78, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2], [0, 3]] } },
        { label: "🧪 Virtual lab", html: "<p>In the virtual lab you can make different substances react and watch how states and formulas change: sodium and chlorine form an ionic solid, hydrogen and oxygen a molecule.</p>", widget: "chemLab", options: {} }
      ]
    },
    {
      type: "curiosity",
      title: "Diamond and graphite: same atom, different bonds",
      html: `<p><b>Diamond</b> and <b>graphite</b> are both pure carbon. In diamond each C forms 4 tetrahedral σ bonds (sp³) with four neighbours: an extremely rigid covalent network, very hard, an insulator, with a very high melting point. In graphite each C has 3 bonds in a plane (sp²) and one delocalised p electron: the layers slide over one another (as in a pencil lead) and conduct electricity. In 2004 Geim and Novoselov isolated a single layer, <b>graphene</b>, and won the Nobel Prize in Physics in 2010.</p>`
    },
    {
      type: "curiosity",
      title: "Salt and water: why it dissolves",
      html: `<p>When you pour salt into water, the polar molecules turn with their oxygen (δ⁻) towards the Na⁺ ions and their hydrogens (δ⁺) towards the Cl⁻ ions, pulling the ions out of the crystal and surrounding them (<b>hydration</b>). If water were non-polar, like oil, salt would not dissolve. This is also one reason why that same bent, polar water molecule is the basis of almost all the chemistry of life.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: from bonds to properties",
      nodes: [
        { id: "ottetto", label: "Octet rule", x: 20, y: 12, color: "#2563eb", html: "Atoms tend to have eight outer electrons.", why: "Lewis and Kossel (1916) started from the inertness of the noble gases: their s²p⁶ configuration is an energy minimum. It is an empirical rule with exceptions, but it explains much of the chemistry of the main groups." },
        { id: "en", label: "Electronegativity", x: 80, y: 12, color: "#f59e0b", html: "The tool for choosing between ionic and covalent.", why: "Pauling (1932) defined it by comparing bond energies: a bond between different atoms is stronger than expected because of its partly ionic character; the difference gives the EN scale." },
        { id: "ion", label: "Ionic bonding", x: 15, y: 55, color: "#dc2626", html: "Transfer of electrons and attraction between ions.", why: "It explains why salt conducts only when molten or dissolved: the electric current is a movement of ions, not electrons. The idea of ions was proposed by Arrhenius (1884) while studying solutions." },
        { id: "cov", label: "Covalent bonding", x: 50, y: 55, color: "#16a34a", html: "Sharing of electron pairs; σ and π.", why: "Using quantum mechanics, Heitler and London (1927) showed that sharing lowers the energy because the wave functions of the two electrons overlap between the nuclei." },
        { id: "met", label: "Metallic bonding", x: 85, y: 55, color: "#a855f7", html: "A sea of delocalised electrons.", why: "Delocalisation explains the properties of metals; band theory (Bloch, Wilson) shows why some solids are conductors, others insulators and others semiconductors." },
        { id: "vsepr", label: "VSEPR shapes", x: 35, y: 90, color: "#0ea5e9", html: "The shape is decided by the repulsion between electron clouds.", why: "Sidgwick and Powell (1940) and Gillespie and Nyholm (1957) noticed that the shapes of molecules can be predicted by counting the electron pairs around the central atom." },
        { id: "prop", label: "Polarity and forces", x: 70, y: 90, color: "#ef4444", html: "Dipoles, London forces and hydrogen bonds.", why: "They decide solubility and boiling points: hydrogen bonding explains why water is a liquid under conditions in which similar molecules are gases." }
      ],
      edges: [["ottetto", "ion", "leads to"], ["ottetto", "cov", "leads to"], ["en", "ion", "if ΔEN is high"], ["en", "cov", "if ΔEN is low"], ["cov", "vsepr", "has a"], ["vsepr", "prop", "determines the"], ["met", "prop", "gives the"]]
    }
  ],
  glossary: [
    { t: "Octet rule", d: "The tendency of atoms to reach eight electrons in their outer shell." },
    { t: "Lewis structure", d: "Representation of a molecule with lines for bonding pairs and dots for lone pairs." },
    { t: "Ionic bond", d: "Electrostatic attraction between oppositely charged ions, formed by transfer of electrons." },
    { t: "Covalent bond", d: "Bond due to the sharing of one or more pairs of electrons." },
    { t: "Polar bond", d: "Covalent bond in which the electrons are pulled towards the more electronegative atom." },
    { t: "Metallic bond", d: "Bond due to valence electrons delocalised among metal cations." },
    { t: "σ and π bonds", d: "σ: head-on overlap along the axis; π: sideways overlap of p orbitals." },
    { t: "VSEPR", d: "Model that predicts the shape of molecules from the repulsion between valence electron pairs." },
    { t: "Lone pair", d: "A pair of valence electrons not involved in a bond." },
    { t: "Hydrogen bond", d: "Intermolecular force between an H bonded to F, O or N and a lone pair on another F, O or N." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What bond forms between sodium and chlorine?", options: ["Ionic", "Non-polar covalent", "Metallic", "Dative covalent"], answer: 0, explain: "ΔEN = 3.16 − 0.93 = 2.23: sodium gives an electron to chlorine, forming Na⁺ and Cl⁻." },
      { type: "mc", q: "Which substance conducts electricity in the solid state?", options: ["Copper", "NaCl", "Diamond", "Sugar"], answer: 0, explain: "Metals have delocalised electrons; solid ionic compounds and covalent solids do not conduct." },
      { type: "num", q: "How many pairs of electrons are shared in the bond between the O atoms in O₂?", answer: 2, explain: "O₂ has a double bond: two shared pairs (1 σ + 1 π)." },
      { type: "mc", q: "What is the formula of the compound of Al³⁺ and O²⁻?", options: ["Al₂O₃", "AlO", "Al₃O₂", "AlO₃"], answer: 0, explain: "The LCM of 3 and 2 is 6: 2 Al³⁺ (+6) and 3 O²⁻ (−6)." },
      { type: "tf", q: "The H–Cl bond is polar covalent, with a partial negative charge on the chlorine.", answer: true, explain: "ΔEN = 0.96: the electrons are pulled towards chlorine, which is more electronegative." },
      { type: "mc", q: "What shape does NH₃ have according to the VSEPR model?", options: ["Trigonal pyramidal", "Trigonal planar", "Tetrahedral", "Linear"], answer: 0, explain: "Three N–H bonds and one lone pair: four clouds, a pyramid shape with angles of about 107°." },
      { type: "mc", q: "Why is the CO₂ molecule non-polar even though it has polar bonds?", options: ["It is linear: the dipoles cancel out", "Because carbon is metallic", "Because it has ionic bonds", "Because it has lone pairs"], answer: 0, explain: "The two C=O dipole moments are equal and opposite." },
      { type: "mc", q: "Why does water boil at 100 °C, much higher than H₂S?", options: ["Because of hydrogen bonds between the molecules", "Because it has a greater mass", "Because it is ionic", "Because it has double bonds"], answer: 0, explain: "Oxygen is small and very electronegative: hydrogen bonds hold the molecules together." },
      { type: "tf", q: "In a metal, when a force is applied, layers of cations can slide without breaking the bonding.", answer: true, explain: "The sea of electrons adapts: metals are malleable and ductile, unlike ionic crystals, which are brittle." },
      { type: "order", q: "Put the carbon-carbon bonds in order of increasing strength.", items: ["C–C", "C=C", "C≡C"], explain: "The triple bond is the strongest and the shortest: 347 < 614 < 839 kJ/mol." }
    ]
  }
});
