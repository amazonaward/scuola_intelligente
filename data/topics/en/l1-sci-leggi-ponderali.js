TOPIC('en', {
  id: "l1-sci-leggi-ponderali",
  title: "The laws of chemical combination and atomic theory",
  intro: "At the end of the 18th century chemistry became a science thanks to a simple idea: <b>weighing</b>. By precisely measuring the masses of the substances that react, Lavoisier, Proust and Dalton discovered numerical rules so exact that they raised a question: why is nature so orderly? The answer was one of the most powerful ideas in history: matter is made of <b>atoms</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Before Lavoisier: the mystery of fire",
      html: `<p>In the 18th century people believed that a burning body lost a mysterious substance called <b>phlogiston</b>. But there was a problem: iron that rusts, or a metal that is "calcined" in air, <b>gains</b> weight. How can something that loses a substance become heavier?</p>
<p>Antoine-Laurent de <b>Lavoisier</b> (1743–1794) turned chemistry into a quantitative science: he always weighed everything, <b>before and after</b>, and worked in sealed containers so that no gas could escape. He understood that combustion is a reaction with the <b>oxygen</b> in the air (a gas isolated by Priestley in 1774 and named "oxygen" by Lavoisier), and that the metal weighs more afterwards because it has <b>absorbed</b> oxygen.</p>`
    },
    {
      type: "text",
      title: "The law of conservation of mass (Lavoisier, 1789)",
      html: `<p>In his <i>Traité élémentaire de chimie</i> (1789) Lavoisier stated the principle that is usually summed up as:</p>
<p><b>"Nothing is created, nothing is destroyed, everything is transformed."</b></p>
<p>In a chemical reaction in a <b>closed system</b>, the total mass of the reactants equals the total mass of the products:</p>
<p><b>m(reactants) = m(products)</b></p>
<p>Why does it sometimes seem otherwise? If you burn a piece of paper, the ash weighs less than the original paper: but the rest of the mass has gone into gases (CO₂ and water vapour) that spread into the air. If instead you burn steel wool, its weight <b>increases</b>, because it combines with the oxygen in the air.</p>
<p>Today we know that conservation holds with great precision in chemical reactions; the changes in mass linked to changes in energy (E = mc²) are far too small to be measured. They only become significant in nuclear reactions.</p>`
    },
    {
      type: "example",
      title: "Weighing a combustion",
      html: `<p>We burn <b>12 g of carbon</b> in a sealed container with oxygen. <b>44 g of carbon dioxide</b> are formed. How much oxygen reacted?</p>
<ol>
<li>m(reactants) = m(products): m(C) + m(O₂) = m(CO₂).</li>
<li>12 g + m(O₂) = 44 g → m(O₂) = <b>32 g</b>.</li>
</ol>
<p>Another case: 5.6 g of iron react with sulfur, producing 8.8 g of iron sulfide. The sulfur used up is 8.8 − 5.6 = <b>3.2 g</b>.</p>`
    },
    {
      type: "text",
      title: "The law of definite proportions (Proust, 1799)",
      html: `<p>The French chemist Joseph-Louis <b>Proust</b> (1754–1826) spent years analysing samples of compounds from different sources and found a surprising fact:</p>
<p><b>In a pure compound, the elements are always combined in the same mass ratio, whatever the origin of the compound.</b></p>
<p>Water is always made of <b>1 part hydrogen to 8 parts oxygen</b> by mass (1 : 8): 9 g of water contain 1 g of H and 8 g of O; 90 g contain 10 g of H and 80 g of O. If you put 2 g of hydrogen with 8 g of oxygen, only 1 g of hydrogen reacts: 1 g of H is left over, because the ratio must be respected.</p>
<p>The law was hotly debated: the chemist <b>Berthollet</b> argued that proportions could vary with conditions. The dispute lasted almost a decade, but Proust's increasingly precise data won. Some solid compounds, called <b>non-stoichiometric</b>, can show small variations (for example certain iron oxides): they are not exceptions to the law, but cases where the crystal structure has "gaps".</p>`
    },
    {
      type: "example",
      title: "Applying Proust's law",
      html: `<p>Calcium oxide forms from calcium and oxygen in a mass ratio of <b>5 : 2</b> (that is, 5 g of Ca for every 2 g of O). How much oxygen is needed for 35 g of calcium?</p>
<ol>
<li>Proportion: 5 : 2 = 35 : x</li>
<li>x = 2 × 35 / 5 = <b>14 g of oxygen</b>.</li>
<li>35 + 14 = 49 g of calcium oxide are formed (conservation of mass).</li>
</ol>`
    },
    {
      type: "svg",
      title: "The 1 : 8 ratio in water",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="320" y="26" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Water from different sources: always 1 part H to 8 parts O</text>
<line x1="30" y1="240" x2="610" y2="240" stroke="#475569" stroke-width="2"/>
<rect x="60" y="232" width="34" height="8" fill="#9ca3af" stroke="#475569"/><rect x="94" y="176" width="34" height="64" fill="#ef4444" stroke="#475569"/>
<text x="94" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">River</text><text x="94" y="282" font-size="14" text-anchor="middle" fill="#1f2937">1 g H + 8 g O</text>
<rect x="240" y="224" width="34" height="16" fill="#9ca3af" stroke="#475569"/><rect x="274" y="112" width="34" height="128" fill="#ef4444" stroke="#475569"/>
<text x="274" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Rain</text><text x="274" y="282" font-size="14" text-anchor="middle" fill="#1f2937">2 g H + 16 g O</text>
<rect x="420" y="216" width="34" height="24" fill="#9ca3af" stroke="#475569"/><rect x="454" y="48" width="34" height="192" fill="#ef4444" stroke="#475569"/>
<text x="454" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Sea</text><text x="454" y="282" font-size="14" text-anchor="middle" fill="#1f2937">3 g H + 24 g O</text>
<rect x="530" y="60" width="16" height="16" fill="#9ca3af" stroke="#475569"/><text x="552" y="74" font-size="14" fill="#1f2937">hydrogen</text>
<rect x="530" y="86" width="16" height="16" fill="#ef4444" stroke="#475569"/><text x="552" y="100" font-size="14" fill="#1f2937">oxygen</text>
</svg>`,
      caption: "The red bar (oxygen) is always 8 times taller than the grey one (hydrogen), for every water sample."
    },
    {
      type: "text",
      title: "The law of multiple proportions (Dalton, 1803)",
      html: `<p>The Englishman John <b>Dalton</b> (1766–1844), a teacher and meteorologist, wondered what happens when <b>two elements form several different compounds</b>. Example: carbon and oxygen form the monoxide (CO) and the dioxide (CO₂).</p>
<table>
<tr><th>Compound</th><th>g of O per 12 g of C</th></tr>
<tr><td>CO (carbon monoxide)</td><td>16 g</td></tr>
<tr><td>CO₂ (carbon dioxide)</td><td>32 g</td></tr>
</table>
<p>The ratio between the masses of oxygen that combine with the <b>same mass</b> of carbon is 16 : 32 = <b>1 : 2</b>, a ratio of <b>small whole numbers</b>. This is the law:</p>
<p><b>When two elements combine in more than one way to form different compounds, the masses of one element that combine with a fixed mass of the other are in a ratio of small whole numbers.</b></p>
<p>Another example: nitrogen and oxygen form N₂O, NO, N₂O₃, NO₂ and N₂O₅. The masses of oxygen per 28 g of nitrogen are 16, 32, 48, 64 and 80 g: a ratio of 1 : 2 : 3 : 4 : 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the three laws",
      questions: [
        { type: "mc", q: "Which law states that mass is conserved in a reaction in a closed system?", options: ["Proust", "Lavoisier", "Dalton"], answer: 1, explain: "It is Lavoisier's law of conservation of mass (1789)." },
        { type: "num", q: "Water contains H and O in a mass ratio of 1 : 8. How many grams of oxygen combine with 5 g of hydrogen?", answer: 40, unit: "g", explain: "5 × 8 = 40 g." },
        { type: "tf", q: "According to Dalton, if two elements form different compounds, the ratios between the masses of one element that combine with a fixed amount of the other are small whole numbers.", answer: true, explain: "This is the statement of the law of multiple proportions." }
      ]
    },
    {
      type: "text",
      title: "Dalton's atomic theory (1808)",
      html: `<p>The three laws are experimental rules: they <b>describe</b> but do not <b>explain</b>. In 1808 (<i>A New System of Chemical Philosophy</i>) Dalton proposed a model that could explain all of them. The idea of the atom was ancient (<b>Democritus</b> and Leucippus, 5th century BC), but it had been a philosophical speculation; Dalton turned it into a theory that predicted numbers. His postulates:</p>
<ol>
<li>Matter is made of tiny, indivisible <b>atoms</b>.</li>
<li>Atoms of the same element are <b>all identical</b> (same mass, same properties); atoms of different elements are different.</li>
<li>Atoms are <b>neither created nor destroyed</b> in reactions: they are rearranged.</li>
<li>Compounds form when atoms of different elements join in <b>simple, fixed ratios</b> (one atom of A with one, two or three atoms of B).</li>
</ol>
<p>How they explain the laws:</p>
<ul>
<li><b>Lavoisier</b>: if atoms are neither created nor destroyed, the total mass cannot change.</li>
<li><b>Proust</b>: if every water molecule always has the same structure (2 H + 1 O), the mass ratio between H and O is always the same.</li>
<li><b>Dalton (multiple proportions)</b>: CO and CO₂ differ by 1 atom of O versus 2 atoms of O per atom of C: hence 1 : 2.</li>
</ul>`
    },
    {
      type: "3d",
      title: "An atom in 3D",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Na"] },
      caption: "Dalton's model saw atoms as solid, indivisible spheres. Today we know they have a nucleus with electrons around it: but the core of his idea is still valid for chemistry."
    },
    {
      type: "text",
      title: "What was corrected after Dalton",
      html: `<p>Dalton's theory was a great idea with a few mistakes, which later science corrected:</p>
<ul>
<li><b>Indivisible atoms?</b> No: in 1897 <b>J.J. Thomson</b> discovered the electron; in 1911 <b>Rutherford</b> discovered the nucleus; the neutron was discovered by <b>Chadwick</b> in 1932.</li>
<li><b>All atoms identical?</b> Not exactly: <b>isotopes</b> of the same element have different masses (carbon-12 and carbon-14).</li>
<li><b>Formulas of compounds</b>: Dalton thought water was HO. In 1811 <b>Avogadro</b> proposed that equal volumes of gases at the same temperature and pressure contain the same number of molecules, and that gaseous elements are diatomic molecules (H₂, O₂); but he was ignored for 50 years, until <b>Cannizzaro</b> showed the strength of his idea at the Karlsruhe Congress in 1860. Since Gay-Lussac (1808) it had been known that 2 volumes of hydrogen and 1 of oxygen give 2 of steam: the formula H₂O explains this ratio.</li>
</ul>
<p>Not everyone accepted the atom: as late as 1900 eminent scientists (such as <b>Ostwald</b> and <b>Mach</b>) considered it just a calculating tool. Brownian motion, explained by Einstein in 1905 and confirmed by <b>Perrin</b> in 1908, convinced even the sceptics.</p>`
    },
    {
      type: "text",
      title: "Atoms, elements, molecules and compounds",
      html: `<p>An <b>element</b> is made of atoms with the same <b>atomic number</b> Z (number of protons). There are 118 known elements, arranged in the <b>periodic table</b> of <b>Mendeleev</b> (1869), who left empty boxes for elements not yet discovered and predicted their properties: gallium (1875) and germanium (1886) confirmed them.</p>
<p>A <b>molecule</b> is a group of bonded atoms: O₂, H₂O, CO₂. A <b>compound</b> contains atoms of different elements.</p>
<p><b>Atomic mass</b> is measured in <b>atomic mass units</b> (u): 1 u is one twelfth of the mass of a carbon-12 atom, about 1.66 × 10⁻²⁷ kg. Hydrogen weighs about 1 u, carbon 12 u, oxygen 16 u. The <b>molecular mass</b> of a water molecule is 2 × 1 + 16 = 18 u: there is Proust's ratio 2 : 16 = 1 : 8 again!</p>`
    },
    {
      type: "widget",
      title: "The periodic table",
      widget: "periodicTable",
      options: {},
      caption: "Tap the elements: symbol, atomic number, mass and group. Find H, C, N, O, Na, Cl."
    },
    {
      type: "alternatives",
      title: "Other ways to understand the laws of chemical combination",
      intro: "If mass ratios confuse you, try reasoning with atoms or with analogies.",
      tabs: [
        {
          label: "🧱 With building blocks",
          html: `<p>Imagine H atoms as white 1 g bricks and O atoms as red 16 g bricks. A water molecule is 2 white + 1 red: 2 g + 16 g = 18 g, a 1 : 8 ratio. Whatever the number of molecules, every "build" has the same ratio: that is Proust's law. And if you make "double" builds (H₂O₂, hydrogen peroxide: 2 white + 2 red), the amount of O for the same mass of H doubles: the law of multiple proportions (H₂O: 16 g of O per 2 g of H; H₂O₂: 32 g of O per 2 g of H, so 1 : 2).</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🥪 The sandwich",
          html: `<p>A sandwich always takes 2 slices of bread and 1 slice of ham: if you have 10 slices of bread and 10 of ham, you make 5 sandwiches and have 5 slices of ham left over. In the same way, 2 g of hydrogen and 8 g of oxygen do not react completely: 1 g of H reacts with 8 g of O and 1 g of H is left over. Fixed ratios are not a human rule, but a consequence of the fact that molecules are "sandwiches" of atoms.</p>`
        },
        {
          label: "🗂️ A bit of history",
          html: `<p>Three ideas in about twenty years: <b>1789</b> (Lavoisier: mass is conserved), <b>1799</b> (Proust: ratios are fixed), <b>1803–1808</b> (Dalton: atoms explain everything). Each needed more precise instruments: Lavoisier's balance, extremely precise for its time, could detect differences of a few milligrams. And so, step by step, chemistry moved from alchemy to exact science.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lavoisier and the end of a genius",
      html: `<p>Lavoisier was not just a chemist: he was also an official of the <b>Ferme Générale</b>, the private company that collected taxes for the French monarchy. During the Revolution he was arrested and guillotined on 8 May 1794. The mathematician Lagrange is said to have commented: "It took them only an instant to cut off that head, and a hundred years may not be enough to produce another like it." His wife, <b>Marie-Anne Paulze</b>, was his collaborator: she drew his instruments, translated English texts and edited the publication of his works.</p>`
    },
    {
      type: "curiosity",
      title: "How many atoms are there in a drop of water?",
      html: `<p>A drop of water of about 0.05 g contains about <b>1.7 × 10²¹ molecules</b>, more than a thousand billion billion. An atom has a diameter of the order of 10⁻¹⁰ m (a tenth of a nanometre): about 700,000 of them would fit in a row across a hair (about 70 µm). That is why chemists use the <b>mole</b> to count atoms: 1 mole contains 6.022 × 10²³ particles (Avogadro's number) and has a mass in grams equal to the molecular mass: 18 g of water is one mole of molecules.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of atomic theory: tap the nodes and find out why",
      nodes: [
        { id: "lav", label: "Conservation of mass", x: 15, y: 8, color: "#3b82f6", html: "In a closed system mass does not change.", why: "<b>Lavoisier</b> (1789) established it by precisely weighing reactants and products in sealed containers, and so demolished the phlogiston theory: combustion adds oxygen, it does not remove phlogiston." },
        { id: "prou", label: "Definite proportions", x: 50, y: 8, color: "#22c55e", html: "A compound always has the same composition by mass.", why: "<b>Proust</b> (1799) proved it with repeated analyses of copper carbonate and other natural and artificial compounds, answering Berthollet's objections." },
        { id: "mult", label: "Multiple proportions", x: 85, y: 8, color: "#f59e0b", html: "Ratios of small whole numbers.", why: "<b>Dalton</b> (1803) derived it from data on the compounds of carbon and oxygen and of nitrogen and oxygen: the very existence of whole numbers was the clue that matter is \"grainy\"." },
        { id: "dalton", label: "Dalton's atomic theory", x: 50, y: 38, color: "#a855f7", html: "Indivisible atoms, identical for each element, that are rearranged.", why: "Dalton took up Democritus' and Leucippus' idea of the atom and turned it into a quantitative theory in 1808, giving each element a relative mass (hydrogen = 1)." },
        { id: "avog", label: "Avogadro and Cannizzaro", x: 20, y: 62, color: "#06b6d4", html: "Molecules and volumes of gases.", why: "Dalton did not distinguish between atoms and molecules and gave wrong formulas (water = HO). <b>Avogadro</b> (1811) solved the problem, but was listened to only after Cannizzaro (Karlsruhe, 1860)." },
        { id: "elettrone", label: "Electron, nucleus, neutron", x: 50, y: 70, color: "#ef4444", html: "The atom has an internal structure.", why: "Thomson (1897), Rutherford (1911), Chadwick (1932): experiments on cathode rays and on the scattering of alpha particles showed that the atom is not indivisible." },
        { id: "tavola", label: "Periodic table", x: 82, y: 62, color: "#14b8a6", html: "The elements arranged by atomic number.", why: "<b>Mendeleev</b> (1869) arranged the elements by atomic mass and properties, leaving empty boxes; <b>Moseley</b> (1913) showed that the true order is by atomic number." },
        { id: "mole", label: "Mole", x: 50, y: 92, color: "#eab308", html: "Unit of amount of substance.", why: "It lets us move from the scale of single atoms (u) to the scale of grams, because 1 mole contains the same number of particles (6.022 × 10²³) for any substance." }
      ],
      edges: [
        ["lav", "dalton", "explained by"],
        ["prou", "dalton", "explained by"],
        ["mult", "dalton", "explained by"],
        ["dalton", "avog", "corrected by"],
        ["dalton", "elettrone", "superseded by"],
        ["avog", "tavola", "leads to"],
        ["elettrone", "tavola", "explains"],
        ["avog", "mole", "leads to"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: atoms",
      questions: [
        { type: "mc", q: "Which of Dalton's postulates was corrected by later discoveries?", options: ["Atoms are indivisible", "Matter is made of atoms", "Atoms are rearranged in reactions"], answer: 0, explain: "The atom has an internal structure: a nucleus (protons and neutrons) and electrons." },
        { type: "num", q: "What is the molecular mass of water in u? (H = 1, O = 16)", answer: 18, unit: "u", explain: "2 × 1 + 16 = 18 u." },
        { type: "tf", q: "Dalton believed the formula of water was H₂O.", answer: false, explain: "He thought it was HO, because he did not know that gaseous hydrogen and oxygen are diatomic (Avogadro, 1811)." }
      ]
    }
  ],
  glossary: [
    { t: "Lavoisier's law", d: "In a chemical reaction in a closed system the mass of the reactants equals the mass of the products." },
    { t: "Proust's law", d: "In a compound the elements are always combined in the same mass ratio." },
    { t: "Dalton's law", d: "The masses of one element that combine with a fixed mass of another are in a ratio of small whole numbers." },
    { t: "Atom", d: "The smallest particle of an element that keeps its chemical properties." },
    { t: "Molecule", d: "A group of two or more bonded atoms." },
    { t: "Element", d: "A pure substance made of atoms that all have the same atomic number." },
    { t: "Compound", d: "A pure substance made of atoms of different elements in a fixed ratio." },
    { t: "Atomic number (Z)", d: "The number of protons in the nucleus: it identifies the element." },
    { t: "Atomic mass unit (u)", d: "One twelfth of the mass of a carbon-12 atom." },
    { t: "Isotopes", d: "Atoms of the same element with different numbers of neutrons." },
    { t: "Mole", d: "The amount of substance that contains 6.022 × 10²³ particles." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Who stated the law of conservation of mass?", options: ["Dalton", "Lavoisier", "Proust"], answer: 1, explain: "Lavoisier, in the Traité élémentaire de chimie (1789)." },
      { type: "num", q: "10 g of magnesium burn, forming 16.6 g of magnesium oxide. How many grams of oxygen reacted?", answer: 6.6, tol: 0.05, unit: "g", explain: "16.6 − 10 = 6.6 g, by conservation of mass." },
      { type: "num", q: "The H : O mass ratio in water is 1 : 8. How much hydrogen is there in 45 g of water?", answer: 5, unit: "g", explain: "1 part in 9 is hydrogen: 45/9 = 5 g." },
      { type: "mc", q: "Which law explains why CO and CO₂ contain oxygen in a 1 : 2 ratio for the same mass of carbon?", options: ["Conservation of mass", "Definite proportions", "Multiple proportions"], answer: 2, explain: "It is Dalton's law of multiple proportions." },
      { type: "tf", q: "According to Dalton, the atoms of an element are all identical.", answer: true, explain: "It was one of his postulates; isotopes later made it less clear-cut." },
      { type: "mc", q: "Who discovered the electron in 1897?", options: ["J.J. Thomson", "Rutherford", "Mendeleev"], answer: 0, explain: "Joseph John Thomson, while studying cathode rays." },
      { type: "text", q: "What is the unit that contains 6.022 × 10²³ particles called?", answer: ["mole", "the mole", "a mole"], explain: "One mole contains Avogadro's number of particles." },
      { type: "order", q: "Put these in chronological order.", items: ["Conservation of mass (Lavoisier)", "Definite proportions (Proust)", "Atomic theory (Dalton)", "Karlsruhe Congress (Cannizzaro)"], explain: "1789, 1799, 1808, 1860." },
      { type: "mc", q: "What did Rutherford show in 1911?", options: ["That the atom has a small, dense nucleus", "That atoms do not exist", "That electrons are waves"], answer: 0, explain: "With the experiment of alpha particles scattered by a gold foil." },
      { type: "num", q: "4 g of hydrogen are made to react with 24 g of oxygen (ratio 1 : 8). How many grams of hydrogen are left over?", answer: 1, unit: "g", explain: "24 g of O react with 3 g of H: 4 − 3 = 1 g is left over." }
    ]
  }
});
