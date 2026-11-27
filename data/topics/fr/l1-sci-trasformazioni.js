TOPIC('fr', {
  id: "l1-sci-trasformazioni",
  title: "Transformations physiques et chimiques",
  intro: "Un glaçon qui fond et un clou qui rouille sont deux changements, mais profondément différents : dans le premier, la substance reste de l'eau ; dans le second, le fer se transforme en quelque chose de nouveau. Comprendre cette différence est le premier pas pour faire de la chimie. Dans cette leçon, nous étudions les <b>changements d'état</b>, nous lisons une <b>courbe de chauffage</b> et nous découvrons comment on reconnaît et comment on écrit une <b>réaction chimique</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Transformations physiques et chimiques",
      html: `<p>Une <b>transformation physique</b> modifie l'aspect ou l'état de la matière, mais <b>pas</b> la nature des substances : la composition des particules reste la même. Exemples : fusion de la glace, évaporation de l'eau, dissolution du sucre dans le thé, bris d'un verre. Elles sont souvent <b>réversibles</b>.</p>
<p>Dans une <b>transformation chimique</b> (ou <b>réaction chimique</b>), les substances de départ, les <b>réactifs</b>, se transforment en substances nouvelles, les <b>produits</b>, qui ont des propriétés différentes. Les atomes ne sont ni créés ni détruits : ils se réorganisent, en rompant et en formant des liaisons. Exemples : combustion du méthane, rouille, cuisson d'un œuf, photosynthèse.</p>
<p>Comment reconnaît-on une réaction chimique ? On observe souvent (pas toujours) :</p>
<ul>
<li>un dégagement de <b>gaz</b> (bulles, effervescence) ;</li>
<li>la formation d'un <b>précipité</b> (un solide qui apparaît dans une solution limpide) ;</li>
<li>un <b>changement de couleur</b> qui n'est pas dû à une simple dilution ;</li>
<li>une production ou une absorption de <b>chaleur</b> ou de <b>lumière</b>.</li>
</ul>
<p>Ce ne sont que des indices : l'eau qui bout fait des bulles et absorbe de la chaleur, mais c'est une transformation physique. La preuve décisive, c'est qu'après la transformation il y a des <b>substances nouvelles</b>.</p>`
    },
    {
      type: "widget",
      title: "Physique ou chimique ?",
      widget: "classify",
      options: { groups: ["Transformation physique", "Transformation chimique"], items: [
        ["Le beurre fond dans la poêle", 0],
        ["Un clou en fer rouille", 1],
        ["Le lait devient yaourt", 1],
        ["L'eau bout dans la casserole", 0],
        ["Une bougie brûle", 1],
        ["On découpe une feuille de papier", 0],
        ["Une pomme croquée brunit", 1],
        ["Le sel se dissout dans l'eau", 0],
        ["Un comprimé effervescent dans un verre d'eau", 1],
        ["La naphtaline se sublime", 0]
      ] },
      caption: "Dans la bougie, la cire fond (physique) puis brûle (chimique) : une même scène peut contenir les deux."
    },
    {
      type: "text",
      title: "Les changements d'état",
      html: `<p>Le changement d'état d'une substance est une transformation physique. Chaque changement a un nom :</p>
<table>
<tr><th>Changement</th><th>De → à</th><th>Chaleur</th></tr>
<tr><td><b>Fusion</b></td><td>solide → liquide</td><td>absorbée</td></tr>
<tr><td><b>Solidification</b></td><td>liquide → solide</td><td>cédée</td></tr>
<tr><td><b>Vaporisation</b> (évaporation / ébullition)</td><td>liquide → gaz</td><td>absorbée</td></tr>
<tr><td><b>Liquéfaction</b> (ou condensation liquide)</td><td>gaz → liquide</td><td>cédée</td></tr>
<tr><td><b>Sublimation</b></td><td>solide → gaz</td><td>absorbée</td></tr>
<tr><td><b>Condensation</b> solide (ou déposition)</td><td>gaz → solide</td><td>cédée</td></tr>
</table>
<p>L'<b>évaporation</b> ne se produit qu'à la surface et à n'importe quelle température (le linge sèche même à 15 °C) ; l'<b>ébullition</b> se produit dans tout le liquide, quand la pression de vapeur égale la pression extérieure, à une température précise. C'est pourquoi en haute montagne, où la pression est plus faible, l'eau bout en dessous de 100 °C (vers 90 °C à environ 3000 m) et les pâtes cuisent plus lentement. Dans l'autocuiseur (cocotte-minute), c'est l'inverse.</p>`
    },
    {
      type: "svg",
      title: "La courbe de chauffage de l'eau",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<line x1="70" y1="20" x2="70" y2="270" stroke="#1f2937" stroke-width="2"/>
<line x1="70" y1="270" x2="620" y2="270" stroke="#1f2937" stroke-width="2"/>
<text x="20" y="150" font-size="15" fill="#1f2937" transform="rotate(-90 20 150)" text-anchor="middle">Température (°C)</text>
<text x="350" y="305" font-size="15" fill="#1f2937" text-anchor="middle">Chaleur fournie au cours du temps</text>
<line x1="62" y1="200" x2="70" y2="200" stroke="#1f2937" stroke-width="2"/><text x="56" y="205" font-size="14" text-anchor="end" fill="#1f2937">0</text>
<line x1="62" y1="70" x2="70" y2="70" stroke="#1f2937" stroke-width="2"/><text x="56" y="75" font-size="14" text-anchor="end" fill="#1f2937">100</text>
<line x1="70" y1="200" x2="620" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="70" y1="70" x2="620" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<polyline points="70,250 150,200 250,200 400,70 520,70 600,25" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="110" y="240" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">glace</text>
<text x="200" y="185" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">fusion</text>
<text x="330" y="150" font-size="14" fill="#15803d" font-weight="bold" text-anchor="middle">eau liquide</text>
<text x="460" y="55" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle">ébullition</text>
<text x="570" y="70" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle" dy="30">vapeur</text>
</svg>`,
      caption: "Pendant les deux paliers horizontaux (fusion à 0 °C et ébullition à 100 °C), la température ne change pas : la chaleur fournie sert à rompre les liaisons entre les molécules, pas à les accélérer."
    },
    {
      type: "text",
      title: "Lire la courbe de chauffage",
      html: `<p>Si tu chauffes un bloc de glace avec une flamme constante et que tu mesures la température au cours du temps, tu obtiens une courbe par morceaux :</p>
<ol>
<li><b>Parties inclinées</b> : la chaleur augmente l'énergie cinétique des particules, donc la température. La quantité de chaleur nécessaire dépend de la <b>capacité thermique massique</b> (eau liquide : 4,18 J/(g·°C) ; glace environ 2,1 J/(g·°C)).</li>
<li><b>Paliers (parties horizontales)</b> : pendant le changement d'état, la température reste constante. La chaleur fournie sert à vaincre les forces entre les particules : c'est la <b>chaleur latente</b>.</li>
</ol>
<p>Pour l'eau : chaleur latente de fusion ≈ <b>334 J/g</b> ; chaleur latente de vaporisation ≈ <b>2260 J/g</b>. Vaporiser l'eau demande presque sept fois plus d'énergie que la faire fondre.</p>
<p>La formule de la chaleur échangée sans changement d'état est <b>Q = m · c · ΔT</b> ; avec changement d'état, c'est <b>Q = m · L</b>.</p>`
    },
    {
      type: "example",
      title: "Combien de chaleur faut-il ?",
      html: `<p>Combien de chaleur faut-il pour chauffer <b>200 g d'eau de 20 °C à 70 °C</b> ?</p>
<ol>
<li>Q = m · c · ΔT = 200 g × 4,18 J/(g·°C) × (70 − 20) °C</li>
<li>Q = 200 × 4,18 × 50 = <b>41 800 J ≈ 41,8 kJ</b>.</li>
</ol>
<p>Et pour vaporiser 100 g d'eau déjà à 100 °C ? Q = m · L = 100 × 2260 = <b>226 000 J</b>. C'est pourquoi la transpiration est un excellent « climatiseur » : en s'évaporant, la sueur enlève beaucoup de chaleur au corps.</p>`
    },
    {
      type: "curiosity",
      title: "Pourquoi le sel fait fondre la glace sur les routes",
      html: `<p>Une solution d'eau salée gèle à une température <b>plus basse</b> que 0 °C : c'est l'<b>abaissement cryoscopique</b>. Une solution saturée de NaCl gèle vers −21 °C. Répandre du sel sur les routes verglacées ne réchauffe pas la glace : cela abaisse sa température de fusion, et d'ailleurs, à des températures bien inférieures à −10 °C, le sel devient peu efficace. De même, dans un mélange d'eau et de sel, l'ébullition se produit un peu au-dessus de 100 °C (<b>élévation ébullioscopique</b>).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : états et courbes",
      questions: [
        { type: "mc", q: "Le passage de l'état solide à l'état gazeux s'appelle…", options: ["fusion", "sublimation", "liquéfaction"], answer: 1, explain: "Sublimation : elle se produit par exemple avec la naphtaline et avec la glace carbonique (CO₂ solide)." },
        { type: "tf", q: "Pendant la fusion de la glace, la température augmente.", answer: false, explain: "Elle reste à 0 °C tant que toute la glace n'a pas fondu : la chaleur sert à changer d'état." },
        { type: "num", q: "Combien de chaleur faut-il pour faire fondre 50 g de glace à 0 °C (L = 334 J/g) ?", answer: 16700, unit: "J", explain: "Q = m · L = 50 × 334 = 16 700 J." }
      ]
    },
    {
      type: "text",
      title: "La réaction chimique et son équation",
      html: `<p>Une réaction chimique se décrit par une <b>équation chimique</b> : à gauche les <b>réactifs</b>, à droite les <b>produits</b>, reliés par une flèche. Par exemple, la combustion du méthane :</p>
<p><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>
<p>Les nombres placés devant les formules sont les <b>coefficients stœchiométriques</b> ; ceux placés en bas (les indices) indiquent combien d'atomes il y a dans une molécule et on ne peut pas les modifier. L'équation doit être <b>ajustée</b> (équilibrée) : les atomes de chaque élément doivent être en même nombre à gauche et à droite, car au cours d'une réaction la masse se conserve (loi de Lavoisier, que nous verrons).</p>
<p>Vérification pour le méthane : à gauche 1 C, 4 H, 4 O ; à droite 1 C, 4 H (2×2), 4 O (2 + 2×1). L'équation est ajustée.</p>
<p>Comment ajuster, étape par étape :</p>
<ol>
<li>écris les formules correctes des réactifs et des produits ;</li>
<li>compte les atomes de chaque élément de chaque côté ;</li>
<li>ajoute des coefficients devant les formules (ne jamais modifier les indices), en commençant par les éléments présents dans le moins de substances, et en gardant pour la fin l'oxygène ou l'hydrogène ;</li>
<li>recompte et simplifie les coefficients.</li>
</ol>`
    },
    {
      type: "example",
      title: "Ajuster la synthèse de l'eau",
      html: `<p>Réaction non ajustée : <b>H₂ + O₂ → H₂O</b>. Les atomes de O ne sont pas en même nombre (2 contre 1).</p>
<ol>
<li>Je mets 2 devant H₂O : H₂ + O₂ → 2 H₂O. Maintenant O : 2 = 2 ✔️ mais H : 2 à gauche, 4 à droite.</li>
<li>Je mets 2 devant H₂ : <b>2 H₂ + O₂ → 2 H₂O</b>. H : 4 = 4 ✔️.</li>
</ol>
<p>On lit : deux molécules de dihydrogène réagissent avec une molécule de dioxygène et donnent deux molécules d'eau. Le rapport 2 : 1 : 2 vaut aussi pour les volumes des gaz (dans les mêmes conditions) : une idée qui conduira à la théorie d'Avogadro.</p>`
    },
    {
      type: "widget",
      title: "Le laboratoire de chimie",
      widget: "chemLab",
      options: {},
      caption: "Choisis les réactifs, mets-les dans le bécher et observe la réaction ajustée, la masse avant et après, et le réactif limitant."
    },
    {
      type: "alternatives",
      title: "D'autres façons de voir une réaction",
      intro: "Si ajuster une équation te semble être un tour d'algèbre, essaie de la voir de ces façons.",
      tabs: [
        {
          label: "🧱 Les briques LEGO",
          html: `<p>Les atomes sont des briques : une réaction n'en crée pas et n'en détruit pas, elle les <b>réassemble</b>. Pour faire 2 molécules d'eau, il faut 4 briques H et 2 briques O. Si tu n'as que des molécules de H₂ et de O₂, tu dois compter les briques et utiliser un nombre de « pièces » qui donne le même total avant et après : c'est tout le sens des coefficients.</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🍳 Une recette de cuisine",
          html: `<p>Une équation chimique est une <b>recette</b> : « 1 œuf + 100 g de farine → 1 beignet » se multiplie en 2 œufs et 200 g de farine. De même, CH₄ + 2 O₂ → CO₂ + 2 H₂O dit que pour chaque molécule de méthane il faut deux molécules de dioxygène ; pour 10 molécules de méthane, il en faut 20. Le <b>réactif limitant</b> est l'ingrédient qui s'épuise le premier et arrête la production.</p>`
        },
        {
          label: "⚖️ La balance",
          html: `<p>Comme une équation algébrique, une équation chimique est une balance : ce que tu as à gauche doit peser autant que ce que tu as à droite, atome par atome. C'est la même idée, sous forme intuitive, qui a fait découvrir la conservation de la masse : si la pesée d'une réaction « ne tombe pas juste », c'est que tu as oublié de peser un gaz.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Réactions exothermiques et endothermiques",
      html: `<p>Toute réaction échange de l'énergie avec le milieu extérieur, en général sous forme de chaleur :</p>
<ul>
<li><b>exothermique</b> : elle libère de la chaleur (combustions, explosions, neutralisations ; l'oxydation du fer dans les chaufferettes) ;</li>
<li><b>endothermique</b> : elle absorbe de la chaleur (photosynthèse, cuisson d'un œuf, les poches de « froid instantané » des trousses de secours).</li>
</ul>
<p>Pour démarrer, beaucoup de réactions ont besoin d'une petite quantité d'énergie, l'<b>énergie d'activation</b> : il faut frotter une allumette, mais ensuite la combustion continue toute seule. Un <b>catalyseur</b> abaisse l'énergie d'activation et accélère la réaction sans être consommé (comme les pots catalytiques des voitures ou les enzymes de notre corps).</p>`
    },
    {
      type: "curiosity",
      title: "La glace carbonique et le point triple",
      html: `<p>Ce qu'on appelle la <b>glace carbonique</b> (ou « glace sèche ») est du dioxyde de carbone solide : à la pression atmosphérique, elle ne fond pas, elle se <b>sublime</b> directement à −78,5 °C, sans laisser de flaque (c'est pourquoi on l'utilise pour conserver les glaces et pour les fumées des scènes de spectacle). Le CO₂ ne peut être liquide qu'au-dessus d'environ 5,2 atmosphères. Chaque substance a un <b>point triple</b>, une combinaison unique de température et de pression où solide, liquide et gaz coexistent : pour l'eau, il se situe à 0,01 °C, et il a servi jusqu'en 2019 à définir le kelvin.</p>`
    },
    {
      type: "remember",
      title: "Récapitulatif express",
      html: `<ul>
<li>Physique : l'<b>état ou la forme</b> change ; les substances restent les mêmes.</li>
<li>Chimique : des <b>substances nouvelles</b> apparaissent ; les atomes se réorganisent.</li>
<li>Pendant les changements d'état d'un corps pur, la <b>température est constante</b>.</li>
<li>Q = m · c · ΔT (chauffage), Q = m · L (changement d'état).</li>
<li>Une équation chimique doit être <b>ajustée</b>.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Carte des transformations : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "trasf", label: "Transformations", x: 50, y: 6, color: "#a855f7", html: "Changements de la matière : physiques ou chimiques.", why: "Les alchimistes pensaient que tout changement transformait la substance elle-même ; ce n'est qu'avec la chimie moderne (Lavoisier, 1780-90) qu'on a compris qu'il fallait distinguer ce qui change l'état de ce qui crée de nouvelles substances." },
        { id: "fisica", label: "Physiques", x: 22, y: 30, color: "#3b82f6", html: "Changements d'état, dissolutions, ruptures.", why: "Elles ne changent pas les molécules, seulement leur disposition et leur mouvement : c'est pourquoi elles sont en général réversibles par un changement de température ou de pression." },
        { id: "chimica", label: "Chimiques (réactions)", x: 78, y: 30, color: "#ef4444", html: "Réactifs → produits.", why: "Les liaisons des réactifs se rompent et de nouvelles se forment. En 1808, <b>Dalton</b> expliqua que les réactions sont une redistribution d'atomes, qui restent les mêmes : c'est de là que vient l'ajustement des équations." },
        { id: "stato", label: "Changements d'état", x: 10, y: 58, color: "#0ea5e9", html: "Fusion, vaporisation, sublimation…", why: "Ils dépendent de la température et de la pression : le diagramme d'état d'une substance montre les régions où elle est solide, liquide ou gazeuse, et le <b>point triple</b> où ces états coexistent (eau : 0,01 °C et environ 611 Pa)." },
        { id: "latente", label: "Chaleur latente", x: 30, y: 82, color: "#f59e0b", html: "Chaleur échangée sans variation de température.", why: "C'est l'Écossais <b>Joseph Black</b> qui la découvrit vers 1760 : en chauffant de la glace en train de fondre, le thermomètre ne bougeait pas mais la chaleur était tout de même absorbée ; il l'appela « chaleur cachée »." },
        { id: "equazione", label: "Équation chimique", x: 70, y: 58, color: "#22c55e", html: "Décrit les réactifs et les produits avec des coefficients.", why: "Le système de formules comme H₂O fut mis en ordre par <b>Berzelius</b> (1813-14), qui introduisit les lettres comme symboles des éléments." },
        { id: "bilancio", label: "Ajustement", x: 70, y: 82, color: "#14b8a6", html: "Même nombre d'atomes avant et après.", why: "C'est une conséquence directe de la <b>conservation de la masse</b> de Lavoisier (1789) : dans un système fermé, la masse totale ne change pas." },
        { id: "energia", label: "Énergie de la réaction", x: 92, y: 80, color: "#f97316", html: "Exothermique ou endothermique.", why: "Rompre des liaisons demande de l'énergie, en former en libère : le bilan entre les deux détermine si la réaction chauffe ou refroidit." }
      ],
      edges: [
        ["trasf", "fisica", "peuvent être"],
        ["trasf", "chimica", "peuvent être"],
        ["fisica", "stato", "exemple"],
        ["stato", "latente", "demandent de la"],
        ["chimica", "equazione", "se décrivent par une"],
        ["equazione", "bilancio", "doit être ajustée"],
        ["chimica", "energia", "échangent de l'"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : réactions",
      questions: [
        { type: "mc", q: "Au cours d'une réaction chimique…", options: ["les atomes se transforment en atomes d'autres éléments", "les atomes se réorganisent en formant des substances nouvelles", "la masse totale diminue"], answer: 1, explain: "Les atomes se conservent ; ce sont les liaisons entre eux qui changent." },
        { type: "mc", q: "Quels sont les bons coefficients : __ Al + __ O₂ → __ Al₂O₃ ?", options: ["2, 3, 1", "4, 3, 2", "2, 2, 2"], answer: 1, explain: "4 Al + 3 O₂ → 2 Al₂O₃ : 4 Al et 6 O de chaque côté." },
        { type: "tf", q: "Un catalyseur est consommé pendant la réaction.", answer: false, explain: "Il accélère la réaction en abaissant l'énergie d'activation, mais on le retrouve intact à la fin." }
      ]
    }
  ],
  glossary: [
    { t: "Transformation physique", d: "Changement qui ne modifie pas la nature des substances." },
    { t: "Réaction chimique", d: "Transformation au cours de laquelle des réactifs donnent des produits différents." },
    { t: "Réactif", d: "Substance consommée au cours d'une réaction." },
    { t: "Produit", d: "Substance formée au cours d'une réaction." },
    { t: "Fusion", d: "Passage de l'état solide à l'état liquide." },
    { t: "Sublimation", d: "Passage direct de l'état solide à l'état gazeux." },
    { t: "Chaleur latente", d: "Chaleur échangée pendant un changement d'état sans variation de température." },
    { t: "Capacité thermique massique", d: "Énergie nécessaire pour élever de 1 °C la température de 1 g de substance." },
    { t: "Équation chimique", d: "Représentation d'une réaction à l'aide de formules et de coefficients." },
    { t: "Réaction exothermique", d: "Réaction qui cède de la chaleur au milieu extérieur." },
    { t: "Catalyseur", d: "Substance qui accélère une réaction sans être consommée." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Laquelle de ces transformations est chimique ?", options: ["La fusion de la glace", "La combustion du bois", "L'évaporation de l'eau"], answer: 1, explain: "La combustion forme des cendres, du dioxyde de carbone et de la vapeur d'eau : des substances nouvelles." },
      { type: "tf", q: "L'évaporation ne se produit qu'à 100 °C.", answer: false, explain: "L'évaporation se produit à la surface à n'importe quelle température ; à 100 °C (au niveau de la mer), il y a ébullition." },
      { type: "mc", q: "Comment s'appelle le passage de l'état gazeux à l'état solide ?", options: ["Condensation solide (déposition)", "Liquéfaction", "Fusion"], answer: 0, explain: "C'est la condensation solide (ou déposition) : c'est ainsi que se forme le givre." },
      { type: "num", q: "Combien de chaleur faut-il pour élever de 30 °C la température de 100 g d'eau ? (c = 4,18 J/g·°C)", answer: 12540, unit: "J", explain: "Q = 100 × 4,18 × 30 = 12 540 J." },
      { type: "mc", q: "Sur la courbe de chauffage, les paliers horizontaux correspondent à…", options: ["une augmentation de température", "un changement d'état", "une réaction chimique"], answer: 1, explain: "La température reste constante pendant le changement d'état." },
      { type: "num", q: "Dans l'équation 2 H₂ + O₂ → 2 H₂O, combien y a-t-il d'atomes d'hydrogène au total à droite ?", answer: 4, explain: "2 molécules × 2 atomes = 4." },
      { type: "tf", q: "Dans une réaction ajustée, le nombre d'atomes de chaque élément est le même dans les réactifs et dans les produits.", answer: true, explain: "C'est la conservation de la masse." },
      { type: "mc", q: "Une réaction qui absorbe de la chaleur est dite…", options: ["exothermique", "endothermique", "catalytique"], answer: 1, explain: "Endothermique : elle prend de la chaleur au milieu extérieur, qui se refroidit." },
      { type: "order", q: "Range dans l'ordre les étapes vécues par l'eau quand on chauffe un glaçon de −10 °C jusqu'à 120 °C.", items: ["Chauffage de la glace", "Fusion à 0 °C", "Chauffage de l'eau liquide", "Ébullition à 100 °C", "Chauffage de la vapeur"], explain: "Chaque partie inclinée (chauffage) est suivie d'un palier (changement d'état)." },
      { type: "text", q: "Comment s'appelle la substance qui accélère une réaction sans être consommée ?", answer: ["catalyseur", "le catalyseur", "un catalyseur"], explain: "Les catalyseurs abaissent l'énergie d'activation ; les enzymes sont des catalyseurs biologiques." }
    ]
  }
});
