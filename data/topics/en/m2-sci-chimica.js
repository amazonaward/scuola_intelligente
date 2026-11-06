TOPIC('en', {
  id: 'm2-sci-chimica',
  title: `Elements, compounds, reactions`,
  intro: `What happens when you mix vinegar with baking soda? Why does iron rust? Where does burning wood "go"? In this lesson we enter the world of <b>atoms</b> and <b>molecules</b>, we learn to write and <b>balance</b> reactions and to calculate how much product we get: these are <b>stoichiometric ratios</b>. And then… off to the <b>lab</b>!`,
  minutes: 50,
  sections: [
    {
      type: 'text', title: `1. Matter is made of atoms`,
      html: `<p>Everything around us is made of tiny particles called <b>atoms</b>. An atom is so small that a grain of salt contains about a billion billion of them.</p>
<p>Every atom has:</p>
<ul>
<li>a <b>nucleus</b> in the centre, with <b>protons</b> (+ charge) and <b>neutrons</b> (no charge);</li>
<li>around it, the <b>electrons</b> (− charge), much lighter, arranged on energy levels ("shells").</li>
</ul>
<p>The <b>atomic number Z</b> is the number of protons: it's the element's "identity card". All atoms with 6 protons are carbon, all those with 8 protons are oxygen.</p>
<p>An atom is <b>neutral</b>: it has as many electrons as protons.</p>`
    },
    {
      type: '3d', title: `The atom in 3D (Bohr model)`,
      scene: 'atom',
      caption: `Choose an element: see how the electrons are arranged in the shells. The first shell holds at most 2 electrons, the second 8.`,
      options: { elements: ['H', 'He', 'C', 'N', 'O', 'Na', 'Mg', 'Cl'] }
    },
    {
      type: 'text', title: `2. Elements and compounds`,
      html: `<p>An <b>element</b> is a substance made of just one kind of atom: iron (Fe), oxygen (O₂), gold (Au). Today we know <b>118 elements</b>, arranged in the <b>periodic table</b>.</p>
<p>A <b>compound</b> is a substance made of atoms of different elements bonded together <b>in fixed proportions</b>: water (H₂O) always has 2 hydrogen atoms for every oxygen atom.</p>
<p>Careful: a compound has <b>completely different</b> properties from the elements that form it. Sodium (Na) is a metal that explodes in contact with water, chlorine (Cl₂) is a poisonous gas… but together they form <b>table salt</b> (NaCl)!</p>
<p>A <b>mixture</b>, on the other hand, is just things mixed together (water and sand, air): the components stay themselves and can be separated by physical methods.</p>`
    },
    {
      type: 'widget', title: `The interactive periodic table`,
      widget: 'periodicTable',
      caption: `Tap an element to see its atomic number, mass and fun facts. Elements in the same column (group) behave in similar ways.`,
      options: {}
    },
    {
      type: 'text', title: `3. Molecules`,
      html: `<p>A <b>molecule</b> is a group of bonded atoms. The <b>chemical formula</b> tells you which atoms there are and how many:</p>
<ul>
<li><b>H₂O</b> (water): 2 hydrogen + 1 oxygen.</li>
<li><b>CO₂</b> (carbon dioxide): 1 carbon + 2 oxygen.</li>
<li><b>CH₄</b> (methane, the gas for the cooker): 1 carbon + 4 hydrogen.</li>
</ul>
<p>Salt, <b>NaCl</b>, doesn't form single molecules but a <b>crystal lattice</b>: Na⁺ and Cl⁻ ions alternating like a three-dimensional chessboard. That's why salt crystals are little cubes!</p>`
    },
    {
      type: 'alternatives', title: `Molecules in 3D`,
      intro: `Turn the molecules: shape matters! Water is "bent", carbon dioxide is straight.`,
      tabs: [
        { label: `💧 H₂O water`, html: `<p>Oxygen (red) is in the centre, the two hydrogens form an angle of about <b>104.5°</b>. This bent shape is what makes water able to dissolve so many substances.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0.2, z: 0, r: 0.55, color: '#ef4444', label: 'O' }, { x: 0.76, y: -0.39, z: 0, r: 0.35, color: '#94a3b8', label: 'H' }, { x: -0.76, y: -0.39, z: 0, r: 0.35, color: '#94a3b8', label: 'H' }], bonds: [[0, 1], [0, 2]] } },
        { label: `🫧 CO₂`, html: `<p>A <b>linear</b> molecule: O=C=O. It's the gas in fizzy drinks and the gas we breathe out. Plants use it for photosynthesis.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0, z: 0, r: 0.5, color: '#374151', label: 'C' }, { x: 1.16, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }, { x: -1.16, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }], bonds: [[0, 1], [0, 2]] } },
        { label: `🔥 CH₄ methane`, html: `<p>Carbon in the centre and 4 hydrogens at the corners of a <b>tetrahedron</b> (angles of 109.5°): the atoms get as far away from each other as possible.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0, z: 0, r: 0.5, color: '#374151', label: 'C' }, { x: 0.63, y: 0.63, z: 0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: -0.63, y: -0.63, z: 0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: -0.63, y: 0.63, z: -0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: 0.63, y: -0.63, z: -0.63, r: 0.32, color: '#94a3b8', label: 'H' }], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]] } },
        { label: `🧂 NaCl salt`, html: `<p>A small piece of the <b>crystal lattice</b>: Na⁺ (purple, small) and Cl⁻ (green, large) alternate along all the edges of the cube.</p>`, scene: 'molecule', options: { atoms: [
          { x: -0.8, y: -0.8, z: -0.8, r: 0.3, color: '#8b5cf6', label: 'Na' }, { x: 0.8, y: -0.8, z: -0.8, r: 0.45, color: '#22c55e', label: 'Cl' },
          { x: -0.8, y: 0.8, z: -0.8, r: 0.45, color: '#22c55e', label: 'Cl' }, { x: 0.8, y: 0.8, z: -0.8, r: 0.3, color: '#8b5cf6', label: 'Na' },
          { x: -0.8, y: -0.8, z: 0.8, r: 0.45, color: '#22c55e', label: 'Cl' }, { x: 0.8, y: -0.8, z: 0.8, r: 0.3, color: '#8b5cf6', label: 'Na' },
          { x: -0.8, y: 0.8, z: 0.8, r: 0.3, color: '#8b5cf6', label: 'Na' }, { x: 0.8, y: 0.8, z: 0.8, r: 0.45, color: '#22c55e', label: 'Cl' }],
          bonds: [[0, 1], [0, 2], [1, 3], [2, 3], [4, 5], [4, 6], [5, 7], [6, 7], [0, 4], [1, 5], [2, 6], [3, 7]] } }
      ]
    },
    {
      type: 'quiz', title: `Mini-quiz: atoms and molecules`,
      questions: [
        { type: 'mc', q: `The atomic number Z tells you the number of…`, options: [`neutrons`, `protons`, `molecules`], answer: 1, explain: `Z = number of protons in the nucleus: it identifies the element.` },
        { type: 'mc', q: `Which of these substances is a compound?`, options: [`O₂`, `Fe`, `H₂O`], answer: 2, explain: `H₂O contains atoms of two different elements (H and O).` },
        { type: 'tf', q: `Table salt has the same properties as sodium and chlorine.`, answer: false, explain: `A compound has new properties: sodium is explosive and chlorine poisonous, salt is not.` }
      ]
    },
    {
      type: 'text', title: `4. Chemical reactions`,
      html: `<p>In a <b>chemical reaction</b> the bonds between atoms break and new ones form: the starting substances (<b>reactants</b>) turn into new substances (<b>products</b>).</p>
<p>How can you tell a reaction has happened? Look for these <b>clues</b>:</p>
<ul>
<li>🫧 gas <b>bubbles</b> form;</li>
<li>🎨 the <b>colour</b> changes;</li>
<li>🌫️ a solid appears that makes the liquid "cloudy" (<b>precipitate</b>);</li>
<li>🔥 <b>heat</b>, light or a flame is produced or absorbed.</li>
</ul>
<p>A reaction is written as a <b>chemical equation</b>: reactants on the left, arrow, products on the right.</p>
<p style="text-align:center;font-size:1.2em"><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>
<p>The numbers in front of the formulas are called <b>coefficients</b>: they tell you how many molecules take part.</p>`
    },
    {
      type: 'text', title: `5. The two great laws`,
      html: `<p><b>Lavoisier's law (conservation of mass, 1789)</b>: "Nothing is created, nothing is lost, everything is transformed". In a reaction in a closed container the <b>mass of the reactants equals the mass of the products</b>. Atoms don't disappear: they rearrange.</p>
<p><b>Proust's law (definite proportions, 1799)</b>: in a compound the elements are always combined in the <b>same mass ratio</b>. In iron sulfide (FeS) there are always <b>7 g of iron for every 4 g of sulfur</b>. If you add more iron, the extra is <b>left over</b>.</p>
<p>That's why an equation must be <b>balanced</b>: on the left and on the right there must be the same number of atoms of each element.</p>`
    },
    {
      type: 'svg', title: `Lavoisier's balance`,
      caption: `Before and after the reaction the balance shows the same value, if the container is closed.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="295" y="80" width="10" height="170" fill="#475569"/>
<rect x="220" y="250" width="160" height="16" rx="4" fill="#334155"/>
<rect x="90" y="76" width="420" height="8" rx="4" fill="#64748b"/>
<polygon points="300,60 290,80 310,80" fill="#334155"/>
<line x1="120" y1="84" x2="120" y2="150" stroke="#64748b" stroke-width="2"/>
<line x1="480" y1="84" x2="480" y2="150" stroke="#64748b" stroke-width="2"/>
<rect x="60" y="150" width="120" height="10" rx="3" fill="#94a3b8"/>
<rect x="420" y="150" width="120" height="10" rx="3" fill="#94a3b8"/>
<rect x="85" y="100" width="70" height="50" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<rect x="445" y="100" width="70" height="50" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="120" y="130" font-size="14" text-anchor="middle" fill="#1e3a8a">4 g H₂</text>
<text x="120" y="146" font-size="14" text-anchor="middle" fill="#1e3a8a">32 g O₂</text>
<text x="480" y="132" font-size="14" text-anchor="middle" fill="#14532d">36 g H₂O</text>
<text x="120" y="190" font-size="17" text-anchor="middle" fill="#0f172a" font-weight="bold">BEFORE: 36 g</text>
<text x="480" y="190" font-size="17" text-anchor="middle" fill="#0f172a" font-weight="bold">AFTER: 36 g</text>
<text x="300" y="30" font-size="18" text-anchor="middle" fill="#7c3aed" font-weight="bold">2 H₂ + O₂ → 2 H₂O</text>
</svg>`
    },
    {
      type: 'example', title: `Worked example 1: balancing an equation`,
      html: `<p>Let's balance the reaction of hydrogen with oxygen: <b>H₂ + O₂ → H₂O</b></p>
<ol>
<li>I count the atoms: on the left H = 2, O = 2; on the right H = 2, O = 1. Oxygen doesn't match.</li>
<li>I put a <b>2</b> in front of H₂O: <b>H₂ + O₂ → 2 H₂O</b>. Now on the right H = 4, O = 2.</li>
<li>Now hydrogen doesn't match: I put a <b>2</b> in front of H₂: <b>2 H₂ + O₂ → 2 H₂O</b>.</li>
<li>Check: left H = 4, O = 2; right H = 4, O = 2. ✅ Balanced!</li>
</ol>
<p>⚠️ You only change the <b>coefficients</b>, never the small numbers in the formulas: H₂O₂ isn't water, it's hydrogen peroxide!</p>`
    },
    {
      type: 'text', title: `6. The mole and stoichiometric ratios`,
      html: `<p>Atoms are too small to count one by one. Chemists count them "in packs", the way eggs are counted by the dozen. The chemists' pack is called a <b>mole</b> and contains <b>6.022 × 10²³</b> particles (Avogadro's number).</p>
<p>The <b>molar mass</b> is the mass of one mole, in grams. You calculate it by adding up the atomic masses (from the periodic table): H = 1, C = 12, O = 16, Na = 23, S = 32, Cl = 35.5, Fe = 56.</p>
<ul>
<li>H₂ → 2 × 1 = <b>2 g/mol</b></li>
<li>O₂ → 2 × 16 = <b>32 g/mol</b></li>
<li>H₂O → 2 × 1 + 16 = <b>18 g/mol</b></li>
<li>CO₂ → 12 + 2 × 16 = <b>44 g/mol</b></li>
</ul>
<p>The <b>coefficients</b> of a balanced equation give the <b>mole ratios</b>: in 2 H₂ + O₂ → 2 H₂O, <b>2 moles</b> of hydrogen react with <b>1 mole</b> of oxygen to give <b>2 moles</b> of water. These are the <b>stoichiometric ratios</b> (from the Greek <i>stoicheion</i> = element and <i>metron</i> = measure).</p>`
    },
    {
      type: 'example', title: `Worked example 2: how much water do I get?`,
      html: `<p>Reaction: <b>2 H₂ + O₂ → 2 H₂O</b>. I have <b>4 g of H₂</b> and <b>32 g of O₂</b>.</p>
<ol>
<li>I turn grams into moles: H₂ → 4 g ÷ 2 g/mol = <b>2 mol</b>; O₂ → 32 g ÷ 32 g/mol = <b>1 mol</b>.</li>
<li>The required ratio is 2 : 1 and that's exactly what I have. Both react completely.</li>
<li>2 mol of H₂O form → 2 × 18 g = <b>36 g</b>.</li>
<li>Check with Lavoisier: 4 g + 32 g = 36 g ✅</li>
</ol>`
    },
    {
      type: 'example', title: `Worked example 3: the limiting reactant`,
      html: `<p>Now I have <b>10 g of H₂</b> and still <b>32 g of O₂</b>.</p>
<ol>
<li>Moles: H₂ = 10 ÷ 2 = <b>5 mol</b>; O₂ = 32 ÷ 32 = <b>1 mol</b>.</li>
<li>1 mol of O₂ needs 2 mol of H₂. I have 5: hydrogen is in excess.</li>
<li>Oxygen runs out first: it is the <b>limiting reactant</b>. It decides how much product forms: 2 mol of H₂O = <b>36 g</b>.</li>
<li>5 − 2 = 3 mol of H₂ are left over = <b>6 g</b> of hydrogen that has not reacted.</li>
<li>Check: 10 + 32 = 42 g before; 36 + 6 = 42 g after ✅</li>
</ol>
<p>Same reasoning for iron and sulfur (Fe + S → FeS): with <b>14 g of Fe</b> and <b>10 g of S</b>, 14 g of Fe react with 8 g of S (ratio 7 : 4), <b>22 g of FeS</b> form and <b>2 g of sulfur</b> are left over.</p>`
    },
    {
      type: 'widget', title: `🧪 Online lab`,
      widget: 'chemLab',
      caption: `Take the reactants from the shelf, choose how many grams to use and pour them into the beaker. The lab tells you whether a reaction takes place and shows the balanced equation, the moles, the limiting reactant and the products, and checks that mass is conserved.`,
      options: {}
    },
    {
      type: 'remember', title: `Experiments to try in the lab`,
      html: `<ul>
<li>🫧 <b>Baking soda + vinegar</b>: NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂ (carbon dioxide bubbles). If the beaker is open the gas escapes and the balance shows less: why?</li>
<li>🔩 <b>Iron + sulfur</b>: Fe + S → FeS. Try 56 g + 32 g, then 56 g + 50 g: what is left over?</li>
<li>⚖️ <b>Sodium hydroxide + hydrochloric acid</b>: NaOH + HCl → NaCl + H₂O (neutralisation: salt and water form and it warms up).</li>
<li>🌫️ <b>Silver nitrate + sodium chloride</b>: AgNO₃ + NaCl → AgCl↓ + NaNO₃ (white precipitate).</li>
<li>🔥 <b>Burning methane</b>: CH₄ + 2 O₂ → CO₂ + 2 H₂O.</li>
<li>✨ <b>Magnesium + oxygen</b>: 2 Mg + O₂ → 2 MgO (very bright white light).</li>
<li>🎈 <b>Zinc + hydrochloric acid</b>: Zn + 2 HCl → ZnCl₂ + H₂ (hydrogen is released).</li>
</ul>
<p>⚠️ These are <b>virtual</b> experiments: many of these reactants are dangerous and are only used in a real lab, with a teacher and protective equipment.</p>`
    },
    {
      type: 'curiosity', title: `Did you know… when you burn wood nothing "disappears"?`,
      html: `<p>A 1 kg log leaves only a few grams of ash. It looks as if the mass has vanished, but it hasn't: the carbon and hydrogen in the wood have joined with the <b>oxygen in the air</b> and become <b>CO₂ and water vapour</b>, which have flown away. If you also weighed all the gases, the mass of the products would actually be <b>greater</b> than that of the wood, because it includes the oxygen taken from the air!</p>`
    },
    {
      type: 'curiosity', title: `Did you know… Mendeleev left gaps in his table?`,
      html: `<p>In 1869 Dmitri Mendeleev arranged the 63 known elements and noticed that their properties repeated at regular intervals. Where things didn't add up he left <b>empty boxes</b> and predicted the properties of elements not yet known. A few years later <b>gallium</b> (1875) and <b>germanium</b> (1886) were discovered, with properties almost identical to the ones he had predicted!</p>`
    },
    {
      type: 'alternatives', title: `Other ways to understand stoichiometry`,
      intro: `If moles and coefficients confuse you, try thinking of them like this.`,
      tabs: [
        {
          label: `🥞 A cooking recipe`,
          html: `<p>Pancake recipe: <b>2 eggs + 1 cup of milk → 4 pancakes</b>. It's a balanced equation!</p>
<ul>
<li>With 6 eggs and 3 cups of milk → 12 pancakes (everything tripled).</li>
<li>With 6 eggs and <b>only 1 cup</b> of milk → just 4 pancakes: milk is the <b>limiting reactant</b>, and 4 eggs are left over.</li>
</ul>
<p>Moles are like the recipe's "dozens": they count ingredients in groups.</p>`
        },
        {
          label: `🧱 Building bricks`,
          html: `<p>Imagine atoms as building bricks: <b>white</b> = H, <b>red</b> = O. A water molecule = 1 red + 2 white.</p>
<p>If you have 10 white and 3 red, how many "waters" can you build? Each water uses 2 white: with 10 white you could make 5, but with 3 red only 3. You build <b>3</b> and 4 white are left over. Bricks never disappear: at the end of the game you count them all (Lavoisier!).</p>`,
          scene: 'blocks', options: { mode: 'array', a: 3, b: 3 }
        },
        {
          label: `⚖️ The two-pan balance`,
          html: `<p>Balancing an equation is like balancing a pair of scales: on each pan there must be the same number of atoms of each kind. You can add <b>whole molecules</b> (the coefficients), but you can't "cut" a molecule in half or turn one atom into another.</p>
<p>Try with methane: CH₄ + O₂ → CO₂ + H₂O. On the right you need 2 H₂O to have 4 H; then there are 4 O on the right and you need 2 O₂ on the left. Result: <b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b>.</p>`
        }
      ]
    },
    {
      type: 'conceptMap', title: `Map: how we discovered atoms`,
      nodes: [
        { id: 'democrito', label: `Democritus (5th c. BC)`, x: 12, y: 12, color: '#a855f7', html: `The Greek philosopher imagined that matter was made of indivisible particles: "átomos" = that cannot be cut.`, why: `It was just reasoning, with no experiments: if you cut an object into smaller and smaller pieces, sooner or later you must reach a piece that can't be divided any more. For 2,000 years the idea remained philosophy.` },
        { id: 'lavoisier', label: `Lavoisier (1789)`, x: 38, y: 30, color: '#ef4444', html: `Conservation of mass: in reactions the total mass doesn't change.`, why: `Lavoisier used the balance with great rigour and carried out reactions in closed containers. He discovered that heated metals gain weight because they combine with a gas from the air, which he called oxygen. That's how chemistry became a science of measurement.` },
        { id: 'proust', label: `Proust (1799)`, x: 62, y: 30, color: '#f97316', html: `Definite proportions: a compound always has the same composition by mass.`, why: `Analysing samples of copper carbonate prepared in different ways, Proust always found the same percentages. It was a clue that elements join together "in whole pieces".` },
        { id: 'dalton', label: `Dalton (1808)`, x: 50, y: 52, color: '#3b82f6', html: `Atomic theory: each element is made of identical atoms; compounds are combinations of atoms in whole numbers.`, why: `Dalton realised that the laws of Lavoisier and Proust are easily explained if atoms exist: mass is conserved because atoms are neither created nor destroyed; proportions are fixed because they always combine in whole-number ratios.` },
        { id: 'mendeleev', label: `Mendeleev (1869)`, x: 22, y: 76, color: '#22c55e', html: `The periodic table: elements ordered by mass show properties that repeat.`, why: `Mendeleev noticed the periodicity and dared to leave empty boxes for unknown elements. When they were discovered with the predicted properties, everyone understood that the table reflected a hidden structure of atoms.` },
        { id: 'bohr', label: `Bohr (1913)`, x: 78, y: 76, color: '#0ea5e9', html: `Atomic model: electrons on energy orbits (levels) around the nucleus.`, why: `After Rutherford (1911) discovered the nucleus, Bohr explained why atoms only give off light of certain colours: electrons jump between fixed energy levels. The levels also explain why the table repeats.` },
        { id: 'stechiometria', label: `Stoichiometry`, x: 50, y: 95, color: '#eab308', html: `Calculating the amounts of reactants and products using moles and coefficients.`, why: `If atoms combine in whole numbers (Dalton) and mass is conserved (Lavoisier), then we can predict precisely how many grams of product we'll get: it's the basis of the chemical and pharmaceutical industry.` }
      ],
      edges: [
        ['democrito', 'dalton', 'the idea returns'], ['lavoisier', 'dalton', 'explained by'], ['proust', 'dalton', 'explained by'],
        ['dalton', 'mendeleev', 'atomic masses'], ['mendeleev', 'bohr', 'hidden structure'], ['dalton', 'stechiometria', 'whole numbers'], ['lavoisier', 'stechiometria', 'constant mass']
      ]
    },
    {
      type: 'decision', title: `1770: what happens when a metal burns?`,
      html: `<p>In the 18th century almost all chemists believed in the <b>phlogiston theory</b>: every substance that burns supposedly contains a "fire principle", phlogiston, which leaves it during burning. But there was a problem: when you heat tin or lead in air, the powder you get (the "calx") <b>weighs more</b> than the starting metal.</p>`,
      question: `In Lavoisier's place, which explanation would you have chosen?`,
      options: [
        { label: `Phlogiston has negative weight: when it leaves, the metal gets heavier.`, outcome: `Some chemists really did propose this to save the theory. But it's a made-to-measure hypothesis that can't be tested and contradicts all other experience with weights.` },
        { label: `The metal takes something from the air: that's why it weighs more.`, outcome: `This is Lavoisier's hypothesis. It can be tested: if I heat the metal in a closed container, the air inside must decrease and the total weight must stay the same.` },
        { label: `The balance is wrong: it's just a measuring error.`, outcome: `The weight gain happened every time, with different metals and balances: it couldn't be a random error.` }
      ],
      answer: 1,
      explain: `Lavoisier heated metals in sealed containers: the total weight didn't change, but when he opened the container air rushed in. The metal had "taken" a gas, which he called <b>oxygen</b> (1777). Science chose his explanation not because it was more famous, but because <b>it made measurable predictions that turned out to be true</b>, while phlogiston needed invented exceptions. It was the birth of modern chemistry.`
    },
    {
      type: 'quiz', title: `Mini-quiz: reactions and calculations`,
      questions: [
        { type: 'num', q: `Molar mass of CO₂ (C = 12, O = 16)?`, answer: 44, unit: 'g/mol', explain: `12 + 2 × 16 = 44 g/mol.` },
        { type: 'mc', q: `In 2 H₂ + O₂ → 2 H₂O, how many moles of O₂ are needed for 4 moles of H₂?`, options: [`1`, `2`, `4`], answer: 1, explain: `The ratio is 2 : 1, so 4 mol of H₂ need 2 mol of O₂.` },
        { type: 'tf', q: `The limiting reactant is the one that runs out first.`, answer: true, explain: `It decides how much product can form.` }
      ]
    }
  ],
  glossary: [
    { t: `Atom`, d: `The smallest particle of an element: nucleus (protons and neutrons) and electrons.` },
    { t: `Atomic number (Z)`, d: `Number of protons in the nucleus; it identifies the element.` },
    { t: `Element`, d: `A substance made of only one kind of atom.` },
    { t: `Compound`, d: `A substance made of atoms of different elements in fixed proportions.` },
    { t: `Molecule`, d: `A group of atoms bonded together.` },
    { t: `Chemical reaction`, d: `A change in which reactants become new products.` },
    { t: `Coefficient`, d: `Number in front of a formula in an equation: it tells you how many molecules or moles.` },
    { t: `Mole`, d: `Amount that contains 6.022 × 10²³ particles.` },
    { t: `Molar mass`, d: `Mass in grams of one mole of a substance (g/mol).` },
    { t: `Stoichiometric ratio`, d: `Mole ratio between reactants and products given by the coefficients.` },
    { t: `Limiting reactant`, d: `The reactant that is used up first and limits the amount of product.` },
    { t: `Precipitate`, d: `A solid that forms in a solution during a reaction.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: 'mc', q: `What does Lavoisier's law say?`, options: [`The mass of the products equals that of the reactants`, `Gases always weigh less than solids`, `Elements can be turned into other elements`], answer: 0, explain: `Nothing is created, nothing is lost, everything is transformed.` },
      { type: 'num', q: `Molar mass of water H₂O (H = 1, O = 16)?`, answer: 18, unit: 'g/mol', explain: `2 × 1 + 16 = 18 g/mol.` },
      { type: 'num', q: `Balance: CH₄ + ? O₂ → CO₂ + 2 H₂O. Which coefficient goes in front of O₂?`, answer: 2, explain: `On the right there are 2 + 2 = 4 O atoms, so you need 2 O₂.` },
      { type: 'num', q: `How many grams of O₂ react completely with 8 g of H₂? (2 H₂ + O₂ → 2 H₂O)`, answer: 64, unit: 'g', explain: `8 g H₂ = 4 mol; you need 2 mol O₂ = 2 × 32 = 64 g.` },
      { type: 'num', q: `How many moles of water form from 3 moles of O₂ (with hydrogen in excess)?`, answer: 6, unit: 'mol', explain: `The O₂ : H₂O ratio is 1 : 2, so 3 × 2 = 6 mol.` },
      { type: 'num', q: `14 g of iron react exactly with 8 g of sulfur. How many grams of FeS form?`, answer: 22, unit: 'g', explain: `By Lavoisier: 14 + 8 = 22 g.` },
      { type: 'mc', q: `With 10 g of H₂ and 32 g of O₂, which is the limiting reactant?`, options: [`H₂`, `O₂`, `Neither`], answer: 1, explain: `5 mol of H₂ and 1 mol of O₂: oxygen runs out first and 6 g of H₂ are left over.` },
      { type: 'num', q: `How many moles are 88 g of CO₂?`, answer: 2, unit: 'mol', explain: `88 ÷ 44 = 2 mol.` },
      { type: 'mc', q: `Mixing silver nitrate and sodium chloride forms a precipitate that is…`, options: [`blue`, `white`, `red`], answer: 1, explain: `Silver chloride (AgCl) is a white solid.` },
      { type: 'mc', q: `Which of these is a mixture and not a compound?`, options: [`distilled water`, `table salt`, `air`], answer: 2, explain: `Air is a mixture of gases (nitrogen, oxygen, argon…).` },
      { type: 'order', q: `Put in chronological order.`, items: [`Democritus`, `Lavoisier`, `Dalton`, `Mendeleev`, `Bohr`], explain: `5th c. BC, 1789, 1808, 1869, 1913.` },
      { type: 'tf', q: `To balance an equation you can change the small numbers in the formulas.`, answer: false, explain: `You only change the coefficients: changing the formulas would mean changing the substance.` }
    ]
  }
});
