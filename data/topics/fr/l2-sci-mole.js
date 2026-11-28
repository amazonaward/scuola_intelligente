TOPIC('fr', {
  id: "l2-sci-mole",
  title: "La mole et les formules chimiques",
  intro: "Un chimiste ne peut pas compter les atomes un par un : ils sont trop petits et trop nombreux (une petite cuillère d'eau en contient plus qu'il n'y a de grains de sable sur toutes les plages du monde). Comment dire alors « je prends exactement deux atomes d'hydrogène pour chaque atome d'oxygène » si l'on ne peut que <b>peser</b> la matière ? La réponse est une grandeur ingénieuse, la <b>mole</b>, qui fait le pont entre le monde invisible des atomes et le monde visible de la balance. Grâce à elle, tu pourras calculer la quantité de réactif nécessaire, la quantité de produit obtenue et retrouver la formule d'un composé inconnu.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "La masse des atomes : l'unité de masse atomique",
      html: `<p>L'année dernière, tu as vu les lois pondérales de Lavoisier (conservation de la masse), de Proust (proportions définies) et de Dalton (proportions multiples), qui conduisirent à imaginer la matière faite d'atomes. Mais combien pèse un atome ? Un atome d'hydrogène a une masse d'environ 1,67 · 10⁻²⁷ kg : utiliser les kilogrammes serait peu pratique. On a donc choisi une unité adaptée à l'échelle atomique, l'<b>unité de masse atomique</b> (symbole <b>u</b>, ou Da, dalton) :</p>
<p style="text-align:center"><b>1 u = 1/12 de la masse d'un atome de carbone 12 ≈ 1,6605 · 10⁻²⁷ kg</b></p>
<p>Le carbone 12 (6 protons et 6 neutrons) est l'isotope choisi comme référence depuis 1961. Sur cette échelle, un proton ou un neutron pèse environ 1 u, et la <b>masse atomique</b> d'un atome est donc à peu près égale à son nombre de masse A.</p>
<p>Les valeurs du tableau périodique, cependant, ne sont pas entières : la <b>masse atomique relative</b> d'un élément est la <b>moyenne pondérée</b> des masses de ses isotopes naturels. Le chlore, par exemple, a deux isotopes principaux : ³⁵Cl (environ 75,8 %) et ³⁷Cl (environ 24,2 %). La moyenne vaut 0,758 · 34,97 + 0,242 · 36,97 ≈ <b>35,45 u</b>, la valeur indiquée dans le tableau.</p>
<p>Pour un composé, on parle de <b>masse moléculaire</b> (ou masse formulaire, pour les composés ioniques) : c'est la somme des masses atomiques de tous les atomes de la formule. Exemple : H₂O = 2 · 1,008 + 16,00 ≈ <b>18,02 u</b> ; CO₂ = 12,01 + 2 · 16,00 = <b>44,01 u</b> ; NaCl = 22,99 + 35,45 = <b>58,44 u</b>.</p>`
    },
    {
      type: "widget",
      title: "Le tableau périodique : trouve les masses atomiques",
      widget: "periodicTable",
      options: {},
      caption: "Touche un élément pour voir son numéro atomique et sa masse atomique : ce sont les données dont tu as besoin pour tous les calculs de cette leçon."
    },
    {
      type: "text",
      title: "La mole et le nombre d'Avogadro",
      html: `<p>Un atome de carbone a une masse de 12 u, une molécule d'eau de 18 u. Si tu prenais 12 g de carbone et 18 g d'eau, aurais-tu le même nombre de particules dans les deux cas ? Oui ! Parce que le rapport des masses est 12 : 18, le même que celui des atomes et des molécules pris un par un. Cette idée, issue de l'hypothèse d'<b>Amedeo Avogadro</b> (1811) sur les volumes des gaz, conduit à définir la <b>mole</b> :</p>
<p style="text-align:center"><b>1 mole (mol) = quantité de matière qui contient N<sub>A</sub> = 6,022 · 10²³ entités élémentaires</b></p>
<p>Depuis 2019, le Système international définit la mole en fixant la valeur exacte <b>N<sub>A</sub> = 6,02214076 · 10²³ mol⁻¹</b>. Les « entités » peuvent être des atomes, des molécules, des ions, des électrons : il faut toujours préciser lesquelles (1 mol de O₂ contient 6,022 · 10²³ molécules, soit deux fois plus d'atomes).</p>
<p>Le nom de « nombre d'Avogadro » fut donné plus tard, après les mesures de <b>Jean Perrin</b> (début du XXe siècle), qui détermina N<sub>A</sub> par plusieurs méthodes indépendantes et reçut le prix Nobel de physique en 1926.</p>
<p>La mole est une sorte de « douzaine » chimique : une douzaine, c'est toujours 12 objets, quels qu'ils soient ; une mole, c'est toujours 6,022 · 10²³ objets. La différence, c'est qu'une mole d'atomes peut vraiment être pesée : <b>1 mol d'atomes de carbone 12 pèse exactement 12 g</b> (définition historique, toujours valable avec une excellente précision).</p>`
    },
    {
      type: "svg",
      title: "La mole comme pont",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="mA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#334155"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="20" y="105" width="170" height="90" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="105" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Masse m</text>
<text x="105" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(grammes)</text>
<rect x="235" y="105" width="170" height="90" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="320" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Moles n</text>
<text x="320" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(mol)</text>
<rect x="450" y="105" width="170" height="90" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="535" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Particules N</text>
<text x="535" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(atomes, molécules)</text>
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
      caption: "De la balance (grammes) aux moles, des moles aux particules : la mole est le passage obligé."
    },
    {
      type: "text",
      title: "Masse molaire et conversions",
      html: `<p>La <b>masse molaire M</b> est la masse d'<b>une mole</b> de substance, en <b>g/mol</b>. Sa valeur numérique est égale à la masse atomique ou moléculaire en u. Donc :</p>
<ul>
<li>M(C) = 12,01 g/mol ; M(H₂O) = 18,02 g/mol ; M(CO₂) = 44,01 g/mol ; M(NaCl) = 58,44 g/mol ; M(glucose C₆H₁₂O₆) = 6·12,01 + 12·1,008 + 6·16,00 ≈ 180,16 g/mol.</li>
</ul>
<p>Formules fondamentales (avec n en mol, m en g, M en g/mol) :</p>
<p style="text-align:center"><b>n = m / M</b> &nbsp;&nbsp;&nbsp; <b>m = n · M</b> &nbsp;&nbsp;&nbsp; <b>N = n · N<sub>A</sub></b></p>
<p><b>Volume molaire des gaz.</b> Pour un gaz parfait dans les conditions normales de température et de pression (0 °C, 1 atm), une mole occupe environ <b>22,4 L</b>, quel que soit le gaz (conséquence de l'hypothèse d'Avogadro : des volumes égaux de gaz différents, dans les mêmes conditions de T et de p, contiennent le même nombre de molécules). Donc, dans ces conditions, n = V / 22,4 L/mol.</p>
<p><b>Méthode pour les exercices :</b> 1) écris la formule et calcule M ; 2) convertis la donnée en moles ; 3) utilise la relation demandée (particules, volume, autre masse) ; 4) vérifie les unités et les chiffres significatifs.</p>`
    },
    {
      type: "example",
      title: "Peser pour compter",
      html: `<p><b>L'eau.</b> Dans 36 g d'eau, il y a n = 36/18 = <b>2 mol</b> de molécules, soit N = 2 · 6,022·10²³ ≈ <b>1,2·10²⁴ molécules</b> ; les atomes sont trois fois plus nombreux (2 H + 1 O par molécule) : environ 3,6·10²⁴. Une seule molécule d'eau a une masse de 18/(6,022·10²³) ≈ 3,0·10⁻²³ g.</p>
<p><b>Le sucre.</b> Une petite cuillère de saccharose (C₁₂H₂₂O₁₁, M = 342 g/mol) pèse environ 6,8 g : n = 6,8/342 ≈ 0,020 mol.</p>
<p><b>Un gaz.</b> 5,6 L de dioxygène O₂ dans les conditions normales : n = 5,6/22,4 = 0,25 mol ; m = 0,25 · 32 = <b>8 g</b>.</p>
<p><b>La soude caustique.</b> 10 g de NaOH (M = 23 + 16 + 1 = 40 g/mol) : n = 10/40 = <b>0,25 mol</b>, soit 1,5·10²³ unités formulaires.</p>`
    },
    {
      type: "curiosity",
      title: "Quelle est la taille de 6,022·10²³ ?",
      html: `<p>Si tu avais une mole de grains de sable, ils recouvriraient une surface aussi grande qu'un pays entier sur une épaisseur de nombreux mètres. Si chaque habitant de la Terre (8 milliards de personnes) comptait une unité par seconde, il faudrait environ 2,4 millions d'années pour compter une mole. Pourtant, 18 g d'eau, une gorgée, contiennent une mole de molécules. La taille des nombres de la chimie nous rappelle à quel point l'atome est minuscule. Le premier à avoir l'intuition que les gaz sont faits de « molécules » en nombre égal pour un même volume fut Avogadro (1811), mais l'idée ne fut acceptée qu'après le congrès de Karlsruhe de 1860, grâce à Stanislao Cannizzaro, qui montra comment distinguer masses atomiques et masses moléculaires.</p>`
    },
    {
      type: "quiz",
      title: "Vérifie : mole et masse molaire",
      questions: [
        { type: "num", q: "Quelle est la masse molaire du dioxyde de carbone CO₂ (C = 12, O = 16) ?", answer: 44, tol: 0.1, unit: "g/mol", explain: "M = 12 + 2·16 = 44 g/mol." },
        { type: "num", q: "Combien de moles y a-t-il dans 90 g d'eau (M = 18 g/mol) ?", answer: 5, tol: 0.05, unit: "mol", explain: "n = m/M = 90/18 = 5 mol." },
        { type: "tf", q: "Une mole de O₂ et une mole de CO₂ contiennent le même nombre de molécules.", answer: true, explain: "Une mole contient toujours N_A = 6,022·10²³ entités, quelle que soit la substance." }
      ]
    },
    {
      type: "text",
      title: "Composition centésimale et formules",
      html: `<p>La <b>composition centésimale</b> (en pourcentage massique) indique combien de grammes de chaque élément il y a dans 100 g de composé :</p>
<p style="text-align:center"><b>% élément = (n · masse atomique de l'élément / masse molaire du composé) · 100</b></p>
<p>où n est le nombre d'atomes de cet élément dans la formule. Exemple : pour H₂O (M = 18,02) : % H = 2,016/18,02 · 100 ≈ <b>11,19 %</b> ; % O = 16,00/18,02 · 100 ≈ <b>88,81 %</b>. La somme fait toujours 100 %. Pour Fe₂O₃ (M ≈ 159,7) : % Fe = 2·55,85/159,7 ≈ 69,9 % ; % O ≈ 30,1 %. Pour NH₄NO₃ (nitrate d'ammonium, M = 80) : % N = 28/80 = 35 %, c'est pourquoi c'est un engrais azoté.</p>
<p><b>De la composition à la formule.</b> Si tu connais la composition centésimale d'un composé inconnu, tu trouves sa <b>formule empirique</b> (ou formule minimale : le rapport le plus simple, en nombres entiers, entre les atomes) :</p>
<ol>
<li>suppose que tu as 100 g : les pourcentages deviennent des grammes ;</li>
<li>divise chaque masse par la masse atomique pour obtenir les moles ;</li>
<li>divise toutes les quantités de matière par la plus petite ;</li>
<li>si les rapports ne sont pas entiers, multiplie par un facteur commun (2, 3…).</li>
</ol>
<p>La <b>formule moléculaire</b> est un multiple entier de la formule empirique : on la trouve en divisant la masse molaire réelle par la masse de la formule empirique. Exemple : un composé contenant 40,0 % de C, 6,7 % de H et 53,3 % de O a pour quantités : C = 40/12 = 3,33 ; H = 6,7/1,008 = 6,65 ; O = 53,3/16 = 3,33. En divisant par 3,33 : C : H : O = 1 : 2 : 1, formule empirique <b>CH₂O</b> (masse 30). Si la masse molaire vaut 180 g/mol, le facteur est 180/30 = 6 et la formule moléculaire est <b>C₆H₁₂O₆</b> : le glucose. Si elle vaut 60 g/mol, c'est l'acide acétique C₂H₄O₂.</p>`
    },
    {
      type: "example",
      title: "Trouver la formule de l'oxyde de fer",
      html: `<p>Un minerai d'oxyde de fer contient 70,0 % de fer et 30,0 % d'oxygène. Dans 100 g : Fe = 70,0/55,85 = 1,253 mol ; O = 30,0/16,00 = 1,875 mol. On divise par la plus petite valeur (1,253) : Fe = 1 ; O = 1,50. Le rapport n'est pas entier : on multiplie par 2 → Fe : O = 2 : 3. La formule empirique (qui est ici aussi la formule du composé) est <b>Fe₂O₃</b>, l'hématite, le principal minerai de fer.</p>`
    },
    {
      type: "remember",
      title: "Les formules clés",
      html: `<p><b>n = m/M</b> · <b>N = n·N<sub>A</sub></b> · <b>V = n · 22,4 L</b> (gaz, conditions normales) · <b>% = (n_atomes · M_atome / M_composé) · 100</b>.</p>
<p>Erreur typique : oublier les indices (dans 1 mol de H₂O, il y a 2 mol d'atomes de H) ou confondre atomes et molécules (O et O₂). Vérifie toujours : si la masse est supérieure à la masse molaire, tu as plus d'une mole.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre",
      intro: "Si la mole te semble abstraite, regarde-la à travers ces images.",
      tabs: [
        { label: "🥚 Comme une douzaine", html: "<p>Une douzaine d'œufs pèse environ 600 g, une douzaine de briques environ 30 kg : même nombre, masses différentes. Une mole fonctionne de la même manière : une mole d'eau pèse 18 g, une mole de fer 55,85 g, une mole de plomb 207 g. Le nombre de particules est identique ; la masse change parce que la masse de chaque particule change. Ainsi, si tu pèses 18 g d'eau et 55,85 g de fer, tu sais que tu as exactement le même nombre de molécules d'eau et d'atomes de fer.</p>" },
        { label: "🧪 Laboratoire virtuel", html: "<p>Essaie de « peser » des réactifs dans le laboratoire interactif : choisis les substances, observe la balance, les quantités de matière et le réactif limitant, et vérifie que la masse des produits est égale à celle des réactifs (conservation de la masse de Lavoisier).</p>", widget: "chemLab", options: {} },
        { label: "💧 La molécule en 3D", html: "<p>Voici une molécule d'eau. Dans 1 mol de H₂O, il y a 6,022·10²³ molécules comme celle-ci : chacune a 1 atome d'oxygène et 2 atomes d'hydrogène. En comptant les atomes : 1 mol de H₂O contient 2 mol d'atomes de H et 1 mol d'atomes de O. En multipliant par les masses molaires : 2 · 1,008 + 16,00 = 18,02 g.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.55, color: "#ef4444", label: "O" }, { x: 0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" }, { x: -0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2]] } }
      ]
    },
    {
      type: "quiz",
      title: "Vérifie : composition et formules",
      questions: [
        { type: "num", q: "Quel est le pourcentage massique d'hydrogène dans CH₄ (C = 12, H = 1) ?", answer: 25, tol: 0.2, unit: "%", explain: "M = 16 ; H = 4/16 = 25 %." },
        { type: "mc", q: "Un composé contient C et H dans un rapport molaire 1 : 2. Quelle peut être sa formule empirique ?", options: ["CH", "CH₂", "C₂H", "C₂H₂"], answer: 1, explain: "Un rapport 1 : 2 signifie un C pour deux H : CH₂." },
        { type: "tf", q: "La formule empirique et la formule moléculaire sont toujours identiques.", answer: false, explain: "Elles ne coïncident que si la molécule n'est pas un multiple de la formule empirique (ex. : CH₂O est la formule empirique du glucose C₆H₁₂O₆)." }
      ]
    },
    {
      type: "curiosity",
      title: "Que pèse-t-on quand on pèse un gramme ?",
      html: `<p>En 2019, le Système international a été redéfini : le kilogramme n'est plus lié à un cylindre de platine iridié conservé à Sèvres, mais à la valeur fixée de la constante de Planck, et la mole à la valeur exacte du nombre d'Avogadro. Pour mesurer N_A avec une grande précision, on a utilisé des sphères de silicium 28 presque parfaites : en comptant les atomes du réseau cristallin et en mesurant la masse et le volume de la sphère, on a obtenu le nombre d'atomes avec une incertitude de quelques parties sur cent millions.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de la mole",
      nodes: [
        { id: "uma", label: "Unité de masse atomique", x: 15, y: 12, color: "#2563eb", html: "1 u = 1/12 de la masse du carbone 12.", why: "Dalton proposa des masses atomiques relatives à l'hydrogène (1803) ; au XXe siècle, avec les spectromètres de masse, on passa au carbone 12 (1961), plus précis et plus pratique, qui rend M numériquement égale en g/mol." },
        { id: "massa", label: "Masse atomique relative", x: 50, y: 12, color: "#16a34a", html: "Moyenne pondérée des isotopes naturels.", why: "Ce n'est pas un nombre entier parce que les éléments naturels sont des mélanges d'isotopes ; la découverte des isotopes (Soddy, Aston, début du XXe siècle) expliqua les valeurs fractionnaires qui avaient dérouté les chimistes." },
        { id: "avog", label: "Hypothèse d'Avogadro", x: 85, y: 12, color: "#f59e0b", html: "Volumes égaux de gaz, mêmes conditions : même nombre de molécules.", why: "Gay-Lussac avait trouvé des rapports simples entre les volumes des gaz qui réagissent ; Avogadro (1811) les expliqua en supposant que les éléments gazeux sont formés de molécules diatomiques (H₂, O₂). Son idée fut ignorée pendant 50 ans, jusqu'à ce que Cannizzaro (1860) la relance." },
        { id: "mole", label: "Mole et N_A", x: 50, y: 50, color: "#ef4444", html: "1 mol = 6,022·10²³ entités.", why: "Elle sert à compter en pesant : un groupe de particules assez grand pour avoir une masse mesurable. Perrin (1908-1913) démontra la réalité des atomes en mesurant N_A par plusieurs méthodes indépendantes." },
        { id: "molare", label: "Masse molaire", x: 15, y: 88, color: "#a855f7", html: "M en g/mol : n = m/M.", why: "C'est le facteur de conversion entre le monde microscopique (u) et le monde macroscopique (g) : c'est pourquoi la mole fut définie de sorte que 12 g de ¹²C fassent une mole." },
        { id: "comp", label: "Composition et formules", x: 85, y: 88, color: "#0ea5e9", html: "Pourcentages massiques, formules empirique et moléculaire.", why: "C'est la loi des proportions définies de Proust (1799) traduite en moles : à partir de la composition, on remonte au rapport numérique entre les atomes, comme le fit Dalton pour déduire les formules des composés." }
      ],
      edges: [["uma", "massa", "mesure la"], ["massa", "molare", "donne la"], ["avog", "mole", "conduit à la"], ["mole", "molare", "relie m et n avec la"], ["molare", "comp", "permet de calculer la"], ["mole", "comp", "donne le rapport atomique de la"]]
    }
  ],
  glossary: [
    { t: "Unité de masse atomique (u)", d: "1/12 de la masse d'un atome de carbone 12, environ 1,66·10⁻²⁷ kg." },
    { t: "Masse atomique relative", d: "Masse moyenne d'un atome d'un élément, en tenant compte des isotopes, en u." },
    { t: "Masse moléculaire", d: "Somme des masses atomiques des atomes d'une molécule." },
    { t: "Mole", d: "Quantité de matière qui contient 6,022·10²³ entités élémentaires." },
    { t: "Nombre d'Avogadro", d: "N_A = 6,02214076·10²³ mol⁻¹, nombre d'entités dans une mole." },
    { t: "Masse molaire", d: "Masse d'une mole de substance, en g/mol." },
    { t: "Composition centésimale", d: "Pourcentage massique de chaque élément dans un composé." },
    { t: "Formule empirique", d: "Rapport le plus simple, en nombres entiers, entre les atomes d'un composé (aussi appelée formule minimale)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Par rapport à quelle référence l'unité de masse atomique est-elle définie ?", options: ["1/12 de la masse du ¹²C", "La masse de l'hydrogène", "La masse de l'oxygène 16", "La masse de l'électron"], answer: 0, explain: "1 u = 1/12 de la masse d'un atome de carbone 12." },
      { type: "num", q: "Calcule la masse molaire de l'acide sulfurique H₂SO₄ (H = 1, S = 32, O = 16).", answer: 98, tol: 0.1, unit: "g/mol", explain: "2·1 + 32 + 4·16 = 98 g/mol." },
      { type: "num", q: "Combien de moles y a-t-il dans 49 g de H₂SO₄ (M = 98 g/mol) ?", answer: 0.5, tol: 0.01, unit: "mol", explain: "n = 49/98 = 0,5 mol." },
      { type: "num", q: "Combien de molécules y a-t-il dans 0,5 mol de substance ? Exprime le résultat en unités de 10²³ (N_A = 6,02·10²³).", answer: 3.01, tol: 0.05, unit: "×10²³", explain: "N = 0,5 · 6,02·10²³ = 3,01·10²³." },
      { type: "tf", q: "Le nombre d'atomes d'hydrogène dans 1 mol de H₂O est 6,022·10²³.", answer: false, explain: "Chaque molécule a 2 atomes de H : dans 1 mol de H₂O, il y a 2 mol d'atomes de H, soit 1,2·10²⁴ atomes." },
      { type: "num", q: "Quelle est la masse de 3 mol de NaOH (M = 40 g/mol) ?", answer: 120, tol: 0.5, unit: "g", explain: "m = n·M = 3 · 40 = 120 g." },
      { type: "num", q: "Quel volume occupent 2 mol d'un gaz dans les conditions normales (22,4 L/mol) ?", answer: 44.8, tol: 0.1, unit: "L", explain: "V = 2 · 22,4 = 44,8 L." },
      { type: "num", q: "Quel est le pourcentage massique d'oxygène dans CO₂ (C = 12, O = 16) ? Arrondis à l'unité.", answer: 73, tol: 0.5, unit: "%", explain: "O = 32/44 = 72,7 % ≈ 73 %." },
      { type: "mc", q: "Un composé contient 40 % de C, 6,7 % de H et 53,3 % de O. Quelle est sa formule empirique ?", options: ["CHO", "CH₂O", "C₂H₄O", "CH₄O"], answer: 1, explain: "Quantités : C 3,33, H 6,65, O 3,33 → rapport 1 : 2 : 1 → CH₂O." },
      { type: "order", q: "Range par masse molaire croissante.", items: ["H₂", "H₂O", "CO₂", "NaCl"], explain: "H₂ ≈ 2 < H₂O ≈ 18 < CO₂ ≈ 44 < NaCl ≈ 58,4 g/mol." }
    ]
  }
});
