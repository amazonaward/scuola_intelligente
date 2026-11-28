TOPIC('en', {
  id: "l3-sci-nomenclatura",
  title: "Chemical nomenclature",
  intro: "H₂O, NaCl, Ca(OH)₂, H₂SO₄, CaCO₃: every compound has a name which, read carefully, tells you <b>what it is made of</b>. Learning nomenclature does not mean memorising hundreds of names, but understanding a few families (<b>oxides, hydroxides, acids, salts</b>) and their family tree. We will start from the <b>oxidation number</b>, the number that lets you write formulas and names, and we will use both <b>traditional</b> nomenclature (still widely used) and <b>IUPAC and Stock</b> nomenclature (systematic and international).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Why we need a common language",
      html: `<p>Until the eighteenth century substances had fanciful names: "oil of vitriol" (sulfuric acid), "spirit of salt" (hydrochloric acid), "quicklime" (calcium oxide). In 1787 <b>Lavoisier</b>, with de Morveau, Berthollet and Fourcroy, published the <i>Méthode de nomenclature chimique</i>: names were to describe composition, as with "oxide" and "sulfate". Since 1919 <b>IUPAC</b> (the International Union of Pure and Applied Chemistry) has set the rules used all over the world.</p>
<p>Today three systems exist side by side:</p>
<ul>
<li><b>traditional</b>: uses suffixes and prefixes linked to the oxidation number (<i>-ous</i>, <i>-ic</i>, <i>hypo-</i>, <i>per-</i>): ferric oxide, sulfuric acid;</li>
<li><b>IUPAC</b>: uses prefixes that say <b>how many atoms</b> there are (mono-, di-, tri-, tetra-, penta-, hexa-, hepta-): sulfur trioxide;</li>
<li><b>Stock</b>: shows the <b>oxidation number</b> of the metal with a Roman numeral in brackets: iron(III) oxide.</li>
</ul>
<p>Many compounds, however, keep a common name: water (H₂O), ammonia (NH₃), methane (CH₄).</p>`
    },
    {
      type: "text",
      title: "The oxidation number",
      html: `<p>The <b>oxidation number (ox. no.)</b> is the charge an atom would have if the electrons of every bond were assigned to the more electronegative atom. For ionic compounds it is the same as the charge of the ion (Na⁺: +1; O²⁻: −2); for covalent compounds it is a book-keeping convention. The main rules, in order of priority:</p>
<ol>
<li>In an uncombined element (Na, O₂, Fe, P₄) the ox. no. is <b>0</b>.</li>
<li>In a simple ion the ox. no. equals the charge (Mg²⁺: +2).</li>
<li>The sum of the ox. nos. of all the atoms is <b>0</b> in a neutral molecule, and equal to the charge in a polyatomic ion.</li>
<li><b>Fluorine: −1</b> always. <b>Oxygen: −2</b> (exception: −1 in peroxides, such as H₂O₂). <b>Hydrogen: +1</b> (exception: −1 in metal hydrides, such as NaH).</li>
<li>Alkali metals <b>+1</b>, alkaline earth metals <b>+2</b>, aluminium <b>+3</b>; the other halogens <b>−1</b> in binary compounds with metals and with hydrogen.</li>
</ol>
<p><b>Example.</b> What is the ox. no. of sulfur in H₂SO₄? 2·(+1) + x + 4·(−2) = 0, so x = +6. And of nitrogen in HNO₃? (+1) + x + 3·(−2) = 0, so x = +5. Of manganese in KMnO₄? (+1) + x + 4·(−2) = 0, x = +7.</p>
<p>An element can have several ox. nos.: sulfur −2, +4, +6; chlorine −1, +1, +3, +5, +7; iron +2 and +3. The highest ox. no. of a main-group element is usually the same as its group number for groups 1-2, and the group number minus 10 for groups 13-17: S (group 16) goes up to +6, Cl (17) up to +7.</p>`
    },
    {
      type: "svg",
      title: "The family tree of compounds",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#475569"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle">
<rect x="20" y="30" width="120" height="40" rx="8" fill="#bfdbfe"/><text x="80" y="55" fill="#1e3a8a">Metal</text>
<rect x="20" y="210" width="120" height="40" rx="8" fill="#fecaca"/><text x="80" y="235" fill="#7f1d1d">Non-metal</text>
<rect x="200" y="30" width="130" height="40" rx="8" fill="#93c5fd"/><text x="265" y="55" fill="#1e3a8a">Basic oxide</text>
<rect x="200" y="210" width="130" height="40" rx="8" fill="#fca5a5"/><text x="265" y="235" fill="#7f1d1d">Acidic oxide</text>
<rect x="400" y="30" width="130" height="40" rx="8" fill="#60a5fa"/><text x="465" y="55" fill="#1e3a8a">Hydroxide</text>
<rect x="400" y="210" width="130" height="40" rx="8" fill="#f87171"/><text x="465" y="235" fill="#7f1d1d">Oxoacid</text>
<rect x="400" y="120" width="130" height="40" rx="8" fill="#fde68a"/><text x="465" y="145" fill="#78350f">Salt + H₂O</text>
</g>
<g stroke="#475569" stroke-width="3" fill="none" marker-end="url(#ar)">
<line x1="140" y1="50" x2="198" y2="50"/><line x1="330" y1="50" x2="398" y2="50"/>
<line x1="140" y1="230" x2="198" y2="230"/><line x1="330" y1="230" x2="398" y2="230"/>
<line x1="465" y1="72" x2="465" y2="118"/><line x1="465" y1="208" x2="465" y2="162"/>
</g>
<g font-size="14" fill="#334155" text-anchor="middle">
<text x="170" y="40">+ O₂</text><text x="365" y="40">+ H₂O</text>
<text x="170" y="220">+ O₂</text><text x="365" y="220">+ H₂O</text>
<text x="300" y="150">neutralisation</text>
</g>
<text x="300" y="285" font-size="15" fill="#0369a1" text-anchor="middle">A non-metal with oxygen gives an acidic oxide (anhydride)</text>
</svg>`,
      caption: "Combining with oxygen and water gives the families; a hydroxide + an acid gives a salt."
    },
    {
      type: "text",
      title: "Oxides: metals and non-metals with oxygen",
      html: `<p>An <b>oxide</b> is a binary compound of oxygen (ox. no. −2) with another element. The less electronegative element is written first, and the subscripts are found by <b>swapping over</b> the ox. nos. (simplifying if possible).</p>
<ul>
<li><b>Basic oxides</b> (metal + O): they react with water to give hydroxides. Na₂O: IUPAC <i>disodium oxide</i>, Stock/traditional <i>sodium oxide</i>. CaO: calcium oxide (quicklime). With metals that have two ox. nos.: FeO is <i>iron(II) oxide</i> (traditional <i>ferrous oxide</i>), Fe₂O₃ is <i>iron(III) oxide</i> (<i>ferric oxide</i>, IUPAC <i>diiron trioxide</i>): it is rust.</li>
<li><b>Acidic oxides or anhydrides</b> (non-metal + O): they react with water to give oxoacids. CO₂: <i>carbon dioxide</i> (traditional <i>carbonic anhydride</i>). SO₂: <i>sulfur dioxide</i> (<i>sulfurous anhydride</i>), SO₃: <i>sulfur trioxide</i> (<i>sulfuric anhydride</i>). N₂O₅: <i>dinitrogen pentoxide</i> (<i>nitric anhydride</i>). P₂O₅: <i>diphosphorus pentoxide</i> (<i>phosphoric anhydride</i>). Cl₂O₇: <i>dichlorine heptoxide</i> (<i>perchloric anhydride</i>).</li>
</ul>
<p>In the traditional system, with two ox. nos. you use <b>-ous</b> for the lower and <b>-ic</b> for the higher (SO₂ sulfurous, SO₃ sulfuric). With four ox. nos., as for chlorine, you add <b>hypo-…-ous</b> (+1), <b>-ous</b> (+3), <b>-ic</b> (+5), <b>per-…-ic</b> (+7). (In English the "anhydride" names are now rare and the IUPAC names, such as sulfur dioxide, are the everyday ones; Italian textbooks still use them a lot, e.g. <i>anidride carbonica</i>.)</p>`
    },
    {
      type: "example",
      title: "From name to formula and back",
      html: `<ul>
<li><b>Aluminium oxide</b>: Al has ox. no. +3, O −2; swap the numbers: Al₂O₃.</li>
<li><b>Diphosphorus pentoxide</b>: P₂O₅. P has ox. no. +5: the same compound is called <i>phosphoric anhydride</i> or <i>phosphorus(V) oxide</i>.</li>
<li><b>Fe₂O₃</b>: two Fe and three O: 2x + 3·(−2) = 0 → x = +3. Name: iron(III) oxide.</li>
<li><b>Cl₂O₃</b>: 2x − 6 = 0, x = +3, <i>chlorous anhydride</i> or <i>dichlorine trioxide</i>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Hydroxides",
      html: `<p><b>Hydroxides</b> contain the <b>hydroxide ion OH⁻</b> bonded to a metal: M(OH)ₙ, with n equal to the ox. no. of the metal. They are obtained from a basic oxide + water: Na₂O + H₂O → 2 NaOH.</p>
<ul>
<li>NaOH: sodium hydroxide (caustic soda). KOH: potassium hydroxide.</li>
<li>Ca(OH)₂: calcium hydroxide (slaked lime). Mg(OH)₂: magnesium hydroxide (found in antacid medicines).</li>
<li>Fe(OH)₂: iron(II) hydroxide (<i>ferrous</i>); Fe(OH)₃: iron(III) hydroxide (<i>ferric</i>); IUPAC: <i>iron trihydroxide</i>.</li>
<li>Al(OH)₃: aluminium hydroxide.</li>
</ul>
<p>In water, soluble hydroxides release OH⁻ ions and give <b>basic</b> (alkaline) solutions. Ammonia, NH₃, has no OH but is still a base, because in water it forms NH₄⁺ and OH⁻. Note that when the OH group is repeated, brackets are used: Ca(OH)₂ and not CaOH₂.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: oxides and hydroxides",
      questions: [
        { type: "mc", q: "What is the Stock name of Fe₂O₃?", options: ["Iron(III) oxide", "Iron(II) oxide", "Diiron(III) oxide", "Iron trioxide"], answer: 0, explain: "Iron has ox. no. +3: 2·3 = 6 = 3·2." },
        { type: "mc", q: "What is the formula of aluminium hydroxide?", options: ["Al(OH)₃", "AlOH₃", "Al₃OH", "Al(OH)₂"], answer: 0, explain: "Al has ox. no. +3, so three OH⁻ groups are needed; the brackets show the repeated group." },
        { type: "num", q: "What is the oxidation number of sulfur in SO₃?", answer: 6, explain: "x + 3·(−2) = 0 → x = +6." }
      ]
    },
    {
      type: "text",
      title: "Acids: hydracids and oxoacids",
      html: `<p><b>Hydracids</b>: binary compounds of hydrogen with the halogens or sulfur, in aqueous solution. The name is <b>hydro- + root + -ic acid</b>: HF hydrofluoric acid, HCl hydrochloric acid, HBr hydrobromic acid, HI hydroiodic acid, H₂S hydrosulfuric acid.</p>
<p><b>Oxoacids</b> (or oxyacids): H + non-metal + O. They are obtained by adding <b>anhydride + water</b>:</p>
<ul>
<li>CO₂ + H₂O → H₂CO₃ (carbonic acid)</li>
<li>SO₂ + H₂O → H₂SO₃ (sulfurous acid); SO₃ + H₂O → H₂SO₄ (sulfuric acid)</li>
<li>N₂O₃ + H₂O → 2 HNO₂ (nitrous acid); N₂O₅ + H₂O → 2 HNO₃ (nitric acid)</li>
<li>P₂O₅ + 3 H₂O → 2 H₃PO₄ (phosphoric acid)</li>
<li>Cl₂O + H₂O → 2 HClO (hypochlorous acid); Cl₂O₃ → HClO₂ (chlorous); Cl₂O₅ → HClO₃ (chloric); Cl₂O₇ → HClO₄ (perchloric)</li>
</ul>
<p>The traditional name has the same suffix as the anhydride: an <i>-ous</i> anhydride gives an <i>-ous acid</i>, an <i>-ic</i> anhydride an <i>-ic acid</i>. The systematic IUPAC name, rarely used in practice, describes the oxygens and the ox. no. of the central atom: H₂SO₄ is <i>tetraoxosulfuric(VI) acid</i> and HNO₃ <i>trioxonitric(V) acid</i>. In the laboratory the traditional names are still almost always used.</p>
<p>In water, acids release <b>H⁺</b> ions (really H₃O⁺): the solution is <b>acidic</b>. The number of H atoms an acid can give away is called its <b>basicity</b>: HCl is monoprotic, H₂SO₄ diprotic, H₃PO₄ triprotic.</p>`
    },
    {
      type: "text",
      title: "Salts: the product of neutralisation",
      html: `<p>A <b>salt</b> contains a cation (usually a metal) and an anion that comes from an acid by loss of H⁺. In English the name is <b>name of the cation + name of the anion</b> (in Italian it is the other way round: <i>cloruro di sodio</i>). The suffix of the anion depends on the acid it comes from:</p>
<table>
<tr><th>Acid</th><th>Anion</th><th>Example of a salt</th></tr>
<tr><td>hydro-…-ic (HCl, H₂S)</td><td>-ide (Cl⁻ chloride, S²⁻ sulfide)</td><td>NaCl sodium chloride; FeS iron(II) sulfide</td></tr>
<tr><td>-ous (H₂SO₃, HNO₂, HClO)</td><td>-ite (SO₃²⁻ sulfite, NO₂⁻ nitrite, ClO⁻ hypochlorite)</td><td>Na₂SO₃ sodium sulfite; NaClO sodium hypochlorite</td></tr>
<tr><td>-ic (H₂SO₄, HNO₃, H₂CO₃, H₃PO₄, HClO₃)</td><td>-ate (SO₄²⁻ sulfate, NO₃⁻ nitrate, CO₃²⁻ carbonate, PO₄³⁻ phosphate, ClO₃⁻ chlorate)</td><td>CaCO₃ calcium carbonate; KNO₃ potassium nitrate; Ca₃(PO₄)₂ calcium phosphate</td></tr>
</table>
<p>To write the formula, balance the charges: calcium (Ca²⁺) with phosphate (PO₄³⁻): 3 Ca²⁺ (+6) and 2 PO₄³⁻ (−6): <b>Ca₃(PO₄)₂</b>. A polyatomic ion that is needed more than once goes in brackets. With metals that have more than one ox. no., you state which one is used: FeCl₂ iron(II) chloride (<i>ferrous chloride</i>); FeCl₃ iron(III) chloride (<i>ferric chloride</i>).</p>
<p><b>Acid salts</b>: they come from polyprotic acids that have lost only some of their H⁺ ions: NaHCO₃ is <i>sodium hydrogencarbonate</i> (traditional name: <i>sodium bicarbonate</i>, or bicarbonate of soda); NaHSO₄ is <i>sodium hydrogensulfate</i>.</p>
<p><b>Neutralisation</b> is the reaction acid + hydroxide → salt + water: <b>HCl + NaOH → NaCl + H₂O</b>; <b>H₂SO₄ + Ca(OH)₂ → CaSO₄ + 2 H₂O</b>.</p>`
    },
    {
      type: "example",
      title: "From metal to salt, step by step",
      html: `<p>Let's follow <b>calcium</b> through its whole family:</p>
<ol>
<li>2 Ca + O₂ → 2 CaO (calcium oxide, quicklime).</li>
<li>CaO + H₂O → Ca(OH)₂ (calcium hydroxide, slaked lime).</li>
<li>C + O₂ → CO₂; CO₂ + H₂O → H₂CO₃ (carbonic acid).</li>
<li>Ca(OH)₂ + H₂CO₃ → CaCO₃ + 2 H₂O (calcium carbonate, limestone). This is exactly what happens when slaked lime, used in mortar, "hardens" by absorbing CO₂ from the air.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: acids and salts",
      questions: [
        { type: "mc", q: "What is KNO₂ called?", options: ["Potassium nitrite", "Potassium nitrate", "Potassium nitride", "Potassium hyponitrite"], answer: 0, explain: "It comes from nitrous acid HNO₂ (-ous → -ite)." },
        { type: "num", q: "How many oxygen atoms are there in phosphoric acid, H₃PO₄?", answer: 4, explain: "The formula H₃PO₄ contains 4 oxygen atoms." },
        { type: "tf", q: "Sodium bicarbonate has the formula NaHCO₃.", answer: true, explain: "It is sodium hydrogencarbonate, an acid salt." }
      ]
    },
    {
      type: "widget",
      title: "Classify the compounds",
      widget: "classify",
      options: { groups: ["Basic oxide", "Acidic oxide (anhydride)", "Hydroxide", "Acid", "Salt"], items: [["CaO", 0], ["Na₂O", 0], ["CO₂", 1], ["SO₃", 1], ["NaOH", 2], ["Al(OH)₃", 2], ["HCl", 3], ["H₂SO₄", 3], ["HNO₃", 3], ["NaCl", 4], ["CaCO₃", 4], ["KNO₃", 4]] },
      caption: "Drag or tap to put each formula in its family."
    },
    {
      type: "widget",
      title: "Match formula and name",
      widget: "match",
      options: { pairs: [["H₂SO₄", "sulfuric acid"], ["Na₂SO₃", "sodium sulfite"], ["Ca(OH)₂", "calcium hydroxide"], ["NaClO", "sodium hypochlorite"], ["Fe₂O₃", "iron(III) oxide"], ["KNO₃", "potassium nitrate"], ["CO₂", "carbon dioxide"]] },
      caption: "If the suffix confuses you, go back to the acid the salt comes from."
    },
    {
      type: "remember",
      title: "The method in five moves",
      html: `<ol>
<li>Recognise the <b>family</b> (oxide, hydroxide, acid, salt) from the formula.</li>
<li>Work out the <b>oxidation number</b> of the unknown element (O −2, H +1, sum zero).</li>
<li>Choose the <b>name</b>: traditional (suffixes -ous/-ic), IUPAC (prefixes) or Stock (Roman numeral).</li>
<li>To go the other way, to the formula: write the two ions with their charges, <b>balance</b> them until neutral and add brackets if needed.</li>
<li>For salts: <b>-ic acid → -ate</b>, <b>-ous acid → -ite</b>, <b>hydro-…-ic acid → -ide</b>.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Other ways to master the names",
      intro: "Nomenclature is a language: there are many ways to learn it.",
      tabs: [
        { label: "🧱 Prefixes as building blocks", html: "<p>In the IUPAC system the prefix counts the atoms: <b>mono</b> 1, <b>di</b> 2, <b>tri</b> 3, <b>tetra</b> 4, <b>penta</b> 5, <b>hexa</b> 6, <b>hepta</b> 7. You read the formula like a sentence: N₂O₅ has 2 N and 5 O, so it is <i>dinitrogen pentoxide</i>. The prefix mono- is left out for the first element (CO is <i>carbon monoxide</i>, not \"monocarbon monoxide\"). The method is mechanical and does not require you to know the ox. no.: perfect when you don't know which family the substance belongs to.</p>" },
        { label: "🪜 The chlorine ladder", html: "<p>Chlorine has four oxoacids, and the order of the suffixes can be learnt with a single image: a ladder you climb one rung at a time. <b>HClO</b> (+1) <i>hypochlorous</i>, <b>HClO₂</b> (+3) <i>chlorous</i>, <b>HClO₃</b> (+5) <i>chloric</i>, <b>HClO₄</b> (+7) <i>perchloric</i>. Each rung adds one oxygen. Salts: hypochlorite, chlorite, chlorate, perchlorate. The same pattern works for bromine and iodine. If an element has only two ox. nos., only the middle rungs are used (-ous and -ic).</p>" },
        { label: "👨‍👩‍👧 The sulfur family", html: "<p>Sulfur has a complete 'family tree': S (0) → SO₂ (+4, sulfur dioxide or sulfurous anhydride) → H₂SO₃ (sulfurous acid) → Na₂SO₃ (sodium sulfite); S → SO₃ (+6, sulfur trioxide or sulfuric anhydride) → H₂SO₄ (sulfuric acid) → Na₂SO₄ (sodium sulfate). Draw the tree for any element (nitrogen, phosphorus, carbon) and you will have all the nomenclature for that element. Try it with the virtual lab.</p>", widget: "chemLab", options: {} },
        { label: "🔬 A molecule in 3D", html: "<p>The name of a molecule does not tell you everything about its shape: <b>carbon dioxide</b> (O=C=O) is linear, while <b>sulfur dioxide</b> (S with two O) is bent because the sulfur also has a lone pair. Same 'XO₂' formula, different shapes and properties: the name is only a starting point.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#facc15", label: "S" }, { x: 1.0, y: -0.55, z: 0, r: 0.4, color: "#ef4444", label: "O" }, { x: -1.0, y: -0.55, z: 0, r: 0.4, color: "#ef4444", label: "O" } ], bonds: [[0, 1], [0, 2]] } }
      ]
    },
    {
      type: "curiosity",
      title: "Bleach, caustic soda and bicarbonate",
      html: `<p>Many household products have a precise formula: <b>bleach</b> is a solution of <b>sodium hypochlorite</b> NaClO; <b>caustic soda</b> (for unblocking drains) is <b>sodium hydroxide</b> NaOH; <b>bicarbonate of soda</b> is <b>sodium hydrogencarbonate</b> NaHCO₃ (it breaks down when heated, giving off CO₂, which is why it makes cakes rise); <b>muriatic acid</b> is <b>hydrochloric acid</b> HCl; <b>gypsum</b> (plaster) is <b>calcium sulfate</b>; <b>marble</b> and <b>limestone</b> are <b>calcium carbonate</b> CaCO₃. Never mix bleach and acid: toxic chlorine gas is released.</p>`
    },
    {
      type: "curiosity",
      title: "Why rust is called an oxide",
      html: `<p>Rust is mainly <b>hydrated iron(III) oxide</b>, Fe₂O₃·nH₂O. Iron (ox. no. 0) is oxidised by oxygen and water: its ox. no. rises to +3, which is why we speak of <b>oxidation</b>, and the number we have learnt to calculate is called the "oxidation" number. This idea will come back in <b>redox</b> (oxidation-reduction) reactions: when an element's ox. no. goes up it is oxidised, when it goes down it is reduced. The word "oxygen", from which "oxide" comes, is built on <i>oxys</i>, Greek for "sharp, acid": Lavoisier believed oxygen was the principle of all acids, which turned out to be wrong (HCl contains no oxygen), but the name stuck.</p>`
    },
    {
      type: "conceptMap",
      title: "Map: the logic of nomenclature",
      nodes: [
        { id: "no", label: "Oxidation number", x: 50, y: 10, color: "#2563eb", html: "Formal charge of an atom in a compound.", why: "It is a book-keeping exercise: the more electronegative atom takes the bonding electrons. It lets you predict formulas and follow the exchange of electrons in reactions, but it is not always a real charge." },
        { id: "ossidi", label: "Oxides", x: 15, y: 40, color: "#dc2626", html: "Element + O (−2): basic (metals) or acidic (non-metals).", why: "Whether an oxide is acidic or basic depends on the electronegativity of the element: metals, with low electronegativity, form ionic bonds and give OH⁻ with water; non-metals form covalent bonds and give H⁺." },
        { id: "idrossidi", label: "Hydroxides", x: 50, y: 40, color: "#a855f7", html: "Basic oxide + H₂O: M(OH)ₙ.", why: "They contain the OH⁻ ion: Arrhenius (1884-1887) defined bases as substances that release OH⁻ in water." },
        { id: "acidi", label: "Acids", x: 85, y: 40, color: "#f59e0b", html: "Hydracids and oxoacids: they release H⁺ in water.", why: "Lavoisier thought all acids contained oxygen; Davy (1810) showed that hydrochloric acid does not, and that the acidic principle is hydrogen." },
        { id: "sali", label: "Salts", x: 50, y: 70, color: "#16a34a", html: "Cation from a base + anion from an acid.", why: "They form in neutralisation: the H⁺ and OH⁻ ions make water, the other ions stay in solution and crystallise when the water evaporates." },
        { id: "suff", label: "Suffixes -ide, -ite, -ate", x: 15, y: 90, color: "#0ea5e9", html: "From the name of the acid to that of the salt.", why: "The suffix keeps a memory of the parent acid: hydro-…-ic → -ide, -ous → -ite, -ic → -ate; it is a memory rule introduced by Lavoisier and confirmed by IUPAC." },
        { id: "iupac", label: "IUPAC and Stock systems", x: 85, y: 90, color: "#ef4444", html: "Number prefixes and Roman numerals.", why: "With hundreds of thousands of compounds, traditional names were no longer enough: Stock (1919) proposed Roman numerals, IUPAC the prefixes, so that each formula would have a unique name." }
      ],
      edges: [["no", "ossidi", "predicts the formula of"], ["ossidi", "idrossidi", "+ water give"], ["ossidi", "acidi", "(acidic) + water give"], ["idrossidi", "sali", "+ acid give"], ["acidi", "sali", "+ base give"], ["acidi", "suff", "determine the"], ["suff", "iupac", "used alongside"]]
    }
  ],
  glossary: [
    { t: "Oxidation number", d: "Formal charge of an atom in a compound, obtained by assigning the bonding electrons to the more electronegative atom." },
    { t: "Oxide", d: "Binary compound of oxygen (ox. no. −2) with another element." },
    { t: "Anhydride", d: "Traditional name for an acidic oxide (non-metal + oxygen)." },
    { t: "Hydroxide", d: "Compound formed by a metal and the OH⁻ group: M(OH)ₙ." },
    { t: "Hydracid", d: "Binary acid of a non-metal with hydrogen (HCl, H₂S...), with a name of the form hydro-…-ic acid." },
    { t: "Oxoacid", d: "Acid containing hydrogen, a non-metal and oxygen (H₂SO₄, HNO₃...)." },
    { t: "Salt", d: "Compound formed by the cation of a base and the anion of an acid." },
    { t: "Neutralisation", d: "Reaction between an acid and a base that gives a salt and water." },
    { t: "Stock nomenclature", d: "System that shows the ox. no. of the metal with a Roman numeral: iron(III) oxide." },
    { t: "IUPAC nomenclature", d: "Systematic naming with number prefixes (mono-, di-, tri-, tetra-...) for the number of atoms." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "What is the oxidation number of carbon in CO₂?", answer: 4, explain: "x + 2·(−2) = 0 → x = +4." },
      { type: "mc", q: "Which formula corresponds to sulfur trioxide?", options: ["SO₃", "SO₂", "S₂O₃", "S₃O"], answer: 0, explain: "Tri- means 3 oxygen atoms and mono- is left out for the first element: SO₃, in which sulfur has ox. no. +6." },
      { type: "mc", q: "What is NaOH called?", options: ["Sodium hydroxide", "Sodium oxide", "Sodium hydride", "Sodium peroxide"], answer: 0, explain: "It contains the OH⁻ ion: it is sodium hydroxide (caustic soda)." },
      { type: "mc", q: "What is the formula of sulfuric acid?", options: ["H₂SO₄", "H₂SO₃", "HSO₄", "H₂S"], answer: 0, explain: "In H₂SO₄ S has ox. no. +6 (-ic); H₂SO₃ is sulfurous acid (+4); H₂S is hydrosulfuric acid." },
      { type: "mc", q: "What is CaCO₃ called?", options: ["Calcium carbonate", "Calcium carbide", "Calcium carbon oxide", "Calcium bicarbonate"], answer: 0, explain: "CO₃²⁻ is the carbonate ion (from H₂CO₃, an -ic acid): it is limestone, marble." },
      { type: "tf", q: "A salt derived from an -ous acid has a name ending in -ite.", answer: true, explain: "-ous acid → -ite anion (sulfurous acid → sulfite); -ic acid → -ate." },
      { type: "mc", q: "What is the formula of calcium phosphate?", options: ["Ca₃(PO₄)₂", "CaPO₄", "Ca₂(PO₄)₃", "Ca₃PO₄"], answer: 0, explain: "3 Ca²⁺ (+6) and 2 PO₄³⁻ (−6): Ca₃(PO₄)₂." },
      { type: "mc", q: "Which reaction describes the neutralisation of HCl with NaOH?", options: ["HCl + NaOH → NaCl + H₂O", "HCl + NaOH → NaClO + H₂", "HCl + NaOH → NaH + HClO", "HCl + NaOH → Na + Cl + H₂O"], answer: 0, explain: "Acid + base → salt (sodium chloride) + water." },
      { type: "num", q: "What is the oxidation number of nitrogen in HNO₃?", answer: 5, explain: "+1 + x − 6 = 0 → x = +5." },
      { type: "order", q: "Put the oxoacids of chlorine in order of increasing oxidation number of chlorine.", items: ["HClO", "HClO₂", "HClO₃", "HClO₄"], explain: "+1 (hypochlorous), +3 (chlorous), +5 (chloric), +7 (perchloric)." }
    ]
  }
});
