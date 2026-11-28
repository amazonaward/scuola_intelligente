TOPIC('fr', {
  id: "l2-mat-equazioni-secondo-grado",
  title: "Équations du second degré",
  intro: "Un ballon lancé en l'air, l'aire d'un terrain de football dont on connaît le périmètre, le prix idéal pour maximiser un bénéfice : dans toutes ces situations, l'inconnue apparaît <b>au carré</b>. Les <b>équations du second degré</b> font partie des plus anciens problèmes des mathématiques (les Babyloniens les résolvaient déjà) et elles ont une formule de résolution puissante et compacte. Nous allons apprendre à l'utiliser, à comprendre le rôle du <b>discriminant</b> (le nombre qui décide combien il y a de solutions), à relier les solutions aux coefficients et à <b>factoriser</b> les trinômes.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Forme développée et premiers cas",
      html: `<p>Une équation du <b>second degré</b> en x, écrite sous <b>forme développée réduite</b>, est :</p>
<p style="text-align:center"><b>ax² + bx + c = 0 &nbsp;&nbsp; avec a ≠ 0</b></p>
<p>a, b, c sont les <b>coefficients</b> (a celui de x², b celui de x, c le <b>terme constant</b>). Si l'on avait a = 0, l'équation serait du premier degré. Les <b>solutions</b> (ou racines) sont les valeurs de x qui la rendent vraie ; il y en a au plus deux.</p>
<p>Si b ou c (ou les deux) sont nuls, l'équation est <b>incomplète</b> et se résout sans formule :</p>
<ul>
<li><b>Sans terme en x</b> (b = 0) : ax² + c = 0 → x² = −c/a. Si −c/a &gt; 0, les solutions sont <b>x = ±√(−c/a)</b> ; si −c/a &lt; 0, il n'y a pas de solution réelle. Ex. : 3x² − 12 = 0 → x² = 4 → x = ±2.</li>
<li><b>Sans terme constant</b> (c = 0) : ax² + bx = 0 → <b>x(ax + b) = 0</b> (mise en facteur) → x = 0 ou x = −b/a. On utilise la <b>règle du produit nul</b> : un produit est nul si et seulement si au moins un de ses facteurs est nul. Ex. : x² − 7x = 0 → x(x − 7) = 0 → x = 0 ou x = 7. L'une des solutions est toujours 0 !</li>
<li><b>Réduite à ax² = 0</b> (b = c = 0) : <b>x = 0</b> (solution double).</li>
</ul>
<p>⚠️ Erreur classique : dans x² = 7x, ne divise pas par x (tu perdrais x = 0) : passe tout à gauche et factorise.</p>`
    },
    {
      type: "text",
      title: "La formule de résolution et le discriminant",
      html: `<p>Pour l'équation complète ax² + bx + c = 0, on utilise la <b>formule de résolution</b> :</p>
<p style="text-align:center"><b>x = (−b ± √Δ) / (2a) &nbsp;&nbsp; avec &nbsp; Δ = b² − 4ac</b></p>
<p>Le nombre <b>Δ</b> (delta, ou <b>discriminant</b>) décide combien il y a de solutions réelles :</p>
<ul>
<li><b>Δ &gt; 0</b> : <b>deux solutions réelles distinctes</b> x₁ = (−b − √Δ)/(2a) et x₂ = (−b + √Δ)/(2a).</li>
<li><b>Δ = 0</b> : <b>deux solutions réelles confondues</b> (une solution double) : x = −b/(2a).</li>
<li><b>Δ &lt; 0</b> : <b>aucune solution réelle</b>, car la racine carrée d'un nombre négatif n'existe pas.</li>
</ul>
<p><b>Exemples.</b></p>
<ul>
<li>x² − 5x + 6 = 0 : Δ = 25 − 24 = 1 → x = (5 ± 1)/2 → <b>x = 2 ou x = 3</b>.</li>
<li>x² − 4x + 4 = 0 : Δ = 16 − 16 = 0 → <b>x = 2</b> (double).</li>
<li>x² + x + 1 = 0 : Δ = 1 − 4 = −3 &lt; 0 → <b>aucune solution réelle</b>.</li>
<li>2x² − 3x − 2 = 0 : Δ = 9 + 16 = 25 → x = (3 ± 5)/4 → <b>x = 2 ou x = −1/2</b>.</li>
</ul>
<p><b>Formule réduite</b> : si b est pair, b = 2k (c'est-à-dire k = b/2), il est pratique d'utiliser le discriminant réduit Δ′ = Δ/4 = k² − ac et <b>x = (−k ± √(Δ/4))/a</b>. Ex. : x² − 6x − 7 = 0 : k = −3, Δ/4 = 9 + 7 = 16 → x = 3 ± 4 → <b>x = 7 ou x = −1</b>.</p>`
    },
    {
      type: "svg",
      title: "Le discriminant et la parabole",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="100" y="26" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">Δ &gt; 0</text>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#9a3412" font-weight="bold">Δ = 0</text>
<text x="500" y="26" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">Δ &lt; 0</text>
<line x1="10" y1="140" x2="190" y2="140" stroke="#475569" stroke-width="2"/>
<path d="M20 70 Q100 270 180 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="56" cy="140" r="7" fill="#16a34a"/>
<circle cx="144" cy="140" r="7" fill="#16a34a"/>
<text x="100" y="220" font-size="16" text-anchor="middle" fill="#166534">2 solutions</text>
<line x1="210" y1="170" x2="390" y2="170" stroke="#475569" stroke-width="2"/>
<path d="M220 70 Q300 270 380 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="300" cy="170" r="7" fill="#ea580c"/>
<text x="300" y="220" font-size="16" text-anchor="middle" fill="#9a3412">1 solution (double)</text>
<line x1="410" y1="200" x2="590" y2="200" stroke="#475569" stroke-width="2"/>
<path d="M420 70 Q500 270 580 70" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="500" y="240" font-size="16" text-anchor="middle" fill="#991b1b">aucune solution réelle</text>
<text x="300" y="282" font-size="14" text-anchor="middle" fill="#334155">Les solutions sont les points où la parabole y = ax² + bx + c coupe l'axe x</text>
</svg>`,
      caption: "La courbe de y = ax² + bx + c est une parabole : les solutions de l'équation sont les abscisses des points où elle touche l'axe des abscisses."
    },
    {
      type: "remember",
      title: "La méthode",
      html: `<ol>
<li>Écris l'équation sous la <b>forme</b> ax² + bx + c = 0 (avec a &gt; 0 si possible).</li>
<li>Si elle est <b>incomplète</b>, utilise la mise en facteur ou la racine carrée (b = 0 ou c = 0).</li>
<li>Si elle est complète, calcule <b>Δ = b² − 4ac</b> (ou Δ/4 si b est pair).</li>
<li>Regarde son signe : Δ &lt; 0, aucune solution réelle ; Δ = 0, une solution double ; Δ &gt; 0, deux solutions distinctes.</li>
<li>Applique la formule et simplifie.</li>
<li><b>Vérifie</b> : remplace x par les solutions, ou contrôle la somme et le produit (voir plus loin).</li>
</ol>`
    },
    {
      type: "widget",
      title: "Combien a-t-elle de solutions ?",
      widget: "classify",
      options: { groups: ["Deux solutions distinctes", "Une solution double", "Aucune solution réelle"], items: [
        ["x² − 5x + 6 = 0", 0],
        ["x² − 4x + 4 = 0", 1],
        ["x² + 2x + 5 = 0", 2],
        ["2x² − x − 1 = 0", 0],
        ["x² + 6x + 9 = 0", 1],
        ["x² + x + 1 = 0", 2],
        ["x² − 3 = 0", 0]
      ] },
      caption: "Calcule Δ = b² − 4ac et regarde son signe : il t'indique combien il y a de solutions réelles."
    },
    {
      type: "example",
      title: "Exemple concret : le terrain rectangulaire",
      html: `<p>Un terrain rectangulaire a un périmètre de 28 m et une aire de 48 m². Quelles sont ses dimensions ?</p>
<ul>
<li>Demi-périmètre : longueur + largeur = 14. Soit x la longueur : la largeur vaut 14 − x.</li>
<li>Aire : x(14 − x) = 48 → 14x − x² = 48 → <b>x² − 14x + 48 = 0</b>.</li>
<li>Δ/4 = 49 − 48 = 1 → x = 7 ± 1 → x = 6 ou x = 8.</li>
<li>Les deux solutions correspondent au même rectangle (6 × 8 ou 8 × 6). Vérification : périmètre 2(6 + 8) = 28 ✔️, aire 48 ✔️.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemple concret : le ballon lancé",
      html: `<p>Un ballon est lancé verticalement depuis le sol à 20 m/s. Avec g ≈ 10 m/s², sa hauteur après t secondes est, dans un modèle simplifié, h(t) = 20t − 5t². Au bout de combien de temps retombe-t-il au sol ?</p>
<ul>
<li>Il revient au sol quand h = 0 : 20t − 5t² = 0 → 5t(4 − t) = 0 (équation <b>sans terme constant</b>).</li>
<li>t = 0 (le lancer) ou <b>t = 4 s</b> (l'atterrissage).</li>
<li>Par symétrie de la parabole, le point le plus haut est atteint à mi-parcours, t = 2 s, avec h(2) = 40 − 20 = <b>20 m</b>.</li>
<li>Quand le ballon est-il à 15 m ? 20t − 5t² = 15 → t² − 4t + 3 = 0 → t = 1 ou t = 3 : il passe à 15 m <b>deux fois</b>, en montant et en descendant.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : formule et discriminant",
      questions: [
        { type: "num", q: "Calcule le discriminant de x² − 6x + 5 = 0.", answer: 16, explain: "Δ = 36 − 20 = 16." },
        { type: "mc", q: "L'équation x² + 4 = 0 a…", options: ["x = ±2", "aucune solution réelle", "x = 0"], answer: 1, explain: "x² = −4 est impossible dans ℝ : un carré ne peut pas être négatif." },
        { type: "mc", q: "Les solutions de x² − 7x = 0 sont…", options: ["0 et 7", "7 seulement", "±7"], answer: 0, explain: "x(x − 7) = 0 → x = 0 ou x = 7." }
      ]
    },
    {
      type: "text",
      title: "Relations entre racines et coefficients",
      html: `<p>Si l'équation ax² + bx + c = 0 a pour racines x₁ et x₂ (réelles, avec Δ ≥ 0), la formule de résolution fait apparaître deux relations étonnantes (<b>formules de Viète</b>) :</p>
<p style="text-align:center"><b>somme : x₁ + x₂ = −b/a &nbsp;&nbsp;&nbsp;&nbsp; produit : x₁ · x₂ = c/a</b></p>
<p><b>Pourquoi ?</b> En additionnant (−b − √Δ)/(2a) + (−b + √Δ)/(2a), les radicaux s'annulent et il reste −2b/(2a) = −b/a. En multipliant, on obtient (b² − Δ)/(4a²) = 4ac/(4a²) = c/a.</p>
<p><b>Utilisations pratiques.</b></p>
<ul>
<li><b>Contrôler</b> les solutions sans les remplacer : x² − 5x + 6 = 0 a pour somme 5 et pour produit 6 ; en effet 2 + 3 = 5 et 2 · 3 = 6.</li>
<li><b>Résoudre de tête</b> les équations avec a = 1 : cherche deux nombres de somme S = −b et de produit P = c connus. x² − 7x + 12 = 0 : deux nombres de somme 7 et de produit 12 → <b>3 et 4</b>.</li>
<li><b>Construire une équation</b> ayant deux racines données : <b>x² − S·x + P = 0</b>. Racines 2 et −5 : S = −3, P = −10 → x² + 3x − 10 = 0.</li>
<li><b>Trouver le signe des racines</b> : si P &lt; 0, les racines sont de signes contraires ; si P &gt; 0 et S &gt; 0, elles sont toutes les deux positives ; si P &gt; 0 et S &lt; 0, toutes les deux négatives.</li>
</ul>
<p><b>Factorisation du trinôme.</b> Si Δ ≥ 0, <b>ax² + bx + c = a(x − x₁)(x − x₂)</b>. Ex. : 2x² − 3x − 2 = 2(x − 2)(x + 1/2) = (x − 2)(2x + 1). Si Δ &lt; 0, le trinôme <b>ne se factorise pas</b> (dans ℝ) : on dit qu'il est irréductible.</p>`
    },
    {
      type: "example",
      title: "Exemple : équations avec paramètre et équations quotients",
      html: `<p><b>Avec paramètre.</b> Pour quelles valeurs de k l'équation x² − 4x + k = 0 a-t-elle deux solutions réelles distinctes ? Il faut Δ &gt; 0 : 16 − 4k &gt; 0 → <b>k &lt; 4</b>. Pour k = 4, une solution double (x = 2) ; pour k &gt; 4, aucune.</p>
<p><b>Équation quotient.</b> 1/(x − 1) + 1/x = 3/2. Valeurs interdites : x ≠ 0, x ≠ 1. Dénominateur commun = 2x(x − 1) : 2x + 2(x − 1) = 3x(x − 1) → 4x − 2 = 3x² − 3x → 3x² − 7x + 2 = 0. Δ = 49 − 24 = 25 → x = (7 ± 5)/6 → x = 2 ou x = 1/3. Aucune n'est une valeur interdite : <b>ce sont deux solutions acceptables</b>.</p>
<p>Comme toujours, dans les équations quotients, on contrôle les valeurs interdites à la fin.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Quatre mille ans d'équations du second degré",
      html: `<p>Sur des tablettes d'argile babyloniennes datant d'environ <b>4000 ans</b>, on trouve des problèmes qui se traduisent par des équations du second degré (aires de rectangles dont on connaît le demi-périmètre, comme notre exemple du terrain), avec des procédés équivalents à la formule. Au IXe siècle, <b>al-Khwārizmī</b> les classa et les résolut par des constructions géométriques (la <b>complétion du carré</b>) ; les symboles modernes arrivèrent bien plus tard, avec <b>Viète</b> et <b>Descartes</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Et le troisième, le quatrième, le cinquième degré ?",
      html: `<p>Pour les équations du troisième degré, une formule fut trouvée au XVIe siècle (Scipione del Ferro, Niccolò Tartaglia, Gerolamo Cardano), et peu après pour celles du quatrième degré (Lodovico Ferrari). Pour le <b>cinquième degré</b>, en revanche, le Norvégien <b>Niels Henrik Abel</b> démontra en 1824 (après une tentative de Paolo Ruffini) qu'<b>il n'existe pas de formule générale par radicaux</b>. Même le célèbre <b>nombre d'or</b> φ est solution d'une équation du second degré : x² − x − 1 = 0, avec Δ = 5 et φ = (1 + √5)/2 ≈ 1,618.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de résoudre",
      intro: "La formule est un outil puissant, mais pas le seul. Voici des méthodes historiques et visuelles qui aident à comprendre d'où elle vient.",
      tabs: [
        {
          label: "🟦 Compléter le carré",
          html: `<p>C'est la méthode d'al-Khwārizmī, et c'est d'elle que l'on tire la formule. Prends <b>x² + 6x = 16</b> : imagine un carré de côté x et deux rectangles 3 × x accolés ; pour obtenir un carré plus grand, il manque un petit carré 3 × 3 = 9. J'ajoute 9 aux deux membres : <b>x² + 6x + 9 = 25</b>, c'est-à-dire <b>(x + 3)² = 25</b>. Donc x + 3 = ±5 → <b>x = 2 ou x = −8</b>. La même démarche avec des coefficients quelconques (diviser par a, ajouter (b/2a)² aux deux membres) conduit à la formule de résolution.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><rect x="60" y="50" width="120" height="120" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/><text x="120" y="118" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">x²</text><rect x="180" y="50" width="60" height="120" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><text x="210" y="118" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">3x</text><rect x="60" y="170" width="120" height="60" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><text x="120" y="206" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">3x</text><rect x="180" y="170" width="60" height="60" fill="#fecaca" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/><text x="210" y="206" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">9</text><text x="270" y="110" font-size="16" fill="#334155">x² + 6x = 16</text><text x="270" y="140" font-size="16" fill="#334155">+ 9 pour compléter</text><text x="270" y="170" font-size="16" fill="#334155">(x + 3)² = 25</text><text x="270" y="200" font-size="16" fill="#334155" font-weight="bold">x = 2 ou x = −8</text></svg>`
        },
        {
          label: "🔍 Somme et produit",
          html: `<p>Pour x² + bx + c = 0 avec un coefficient 1 devant x², cherche deux nombres dont le <b>produit</b> vaut c et la <b>somme</b> vaut −b. Exemple : x² − 8x + 15 = 0. Couples de produit 15 : (1, 15), (3, 5). De somme 8 : <b>3 et 5</b>. Donc x = 3 ou x = 5. C'est la factorisation (x − 3)(x − 5) = 0 suivie de la règle du produit nul. Cela marche avec de petits nombres entiers ; sinon, on utilise la formule.</p>`
        },
        {
          label: "📈 Avec la parabole",
          html: `<p>Trace y = x² − 4x + 3. C'est une parabole qui coupe l'axe des abscisses en x = 1 et x = 3 : ce sont les solutions de x² − 4x + 3 = 0. Le <b>sommet</b> est à mi-chemin entre les deux racines, en x = −b/(2a) = 2, où y = −1 (le minimum). Δ &gt; 0 : la parabole coupe l'axe ; Δ = 0 : elle le touche en son sommet ; Δ &lt; 0 : elle ne l'atteint pas. Si a &lt; 0, la parabole est « tournée vers le bas », mais les solutions restent ses points sur l'axe des abscisses.</p>`,
          widget: "numberLine",
          options: { min: -2, max: 6, step: 1, marks: [1, 3, 2] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des équations du second degré",
      nodes: [
        { id: "eq", label: "ax² + bx + c = 0", x: 50, y: 6, color: "#6366f1", html: "Équation du second degré (a ≠ 0).", why: "Elle naît de problèmes d'aires et de mouvements, déjà dans l'antique Babylone ; l'inconnue y apparaît au carré." },
        { id: "inc", label: "Incomplètes", x: 15, y: 30, color: "#16a34a", html: "Sans terme en x (b = 0), sans terme constant (c = 0), ou ax² = 0.", why: "Elles se résolvent avec la racine carrée ou la mise en facteur et la règle du produit nul." },
        { id: "delta", label: "Discriminant Δ", x: 50, y: 32, color: "#f59e0b", html: "Δ = b² − 4ac : il décide du nombre de solutions.", why: "C'est le nombre sous la racine dans la formule : on ne peut pas extraire la racine d'un nombre négatif (dans ℝ), donc si Δ &lt; 0 il n'y a pas de solution réelle." },
        { id: "formula", label: "Formule de résolution", x: 85, y: 30, color: "#a855f7", html: "x = (−b ± √Δ)/(2a).", why: "Elle découle de la complétion du carré sur ax² + bx + c, méthode géométrique d'al-Khwārizmī." },
        { id: "viete", label: "Somme et produit", x: 20, y: 58, color: "#0ea5e9", html: "x₁ + x₂ = −b/a ; x₁x₂ = c/a.", why: "Cela découle de la formule (les radicaux s'annulent dans la somme, et le produit donne une différence de carrés) ; c'est l'idée de Viète." },
        { id: "scomp", label: "Factorisation", x: 80, y: 58, color: "#ef4444", html: "ax² + bx + c = a(x − x₁)(x − x₂).", why: "Si x₁ est une racine, (x − x₁) est un facteur : c'est la propriété des racines des polynômes (théorème de Ruffini en Italie)." },
        { id: "para", label: "Parabole", x: 50, y: 78, color: "#14b8a6", html: "y = ax² + bx + c : les solutions sont les intersections avec l'axe des abscisses.", why: "Elle relie l'algèbre à la géométrie analytique : Δ indique si la parabole coupe, touche ou n'atteint pas l'axe des abscisses." },
        { id: "prob", label: "Problèmes", x: 50, y: 94, color: "#22c55e", html: "Aires, mouvements, optimisation : deux solutions, souvent une seule acceptable.", why: "Le contexte peut éliminer une solution (longueurs négatives, instants avant le début)." }
      ],
      edges: [
        ["eq", "inc", "si b ou c est nul"],
        ["eq", "delta", "s'étudie avec"],
        ["delta", "formula", "intervient dans"],
        ["formula", "viete", "implique"],
        ["viete", "scomp", "conduit à"],
        ["delta", "para", "se voit sur"],
        ["prob", "eq", "se traduisent en"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : racines et factorisation",
      questions: [
        { type: "num", q: "Dans x² − 9x + 14 = 0, quelle est la somme des racines ?", answer: 9, explain: "x₁ + x₂ = −b/a = 9 (les racines sont 2 et 7)." },
        { type: "mc", q: "Le trinôme x² − 5x + 6 se factorise en…", options: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 1)(x − 6)"], answer: 0, explain: "Les racines sont 2 et 3 : (x − 2)(x − 3)." },
        { type: "tf", q: "Une équation du second degré avec c = 0 a toujours la solution x = 0.", answer: true, explain: "ax² + bx = x(ax + b) = 0 : une racine vaut 0 et l'autre −b/a." }
      ]
    }
  ],
  glossary: [
    { t: "Équation du second degré", d: "Équation qui peut s'écrire ax² + bx + c = 0 avec a ≠ 0." },
    { t: "Discriminant", d: "Le nombre Δ = b² − 4ac qui indique combien l'équation a de solutions réelles." },
    { t: "Racines (solutions)", d: "Valeurs de x qui rendent l'équation vraie." },
    { t: "Équation sans terme en x", d: "ax² + c = 0 (b = 0) ; en Italie, on l'appelle « pure »." },
    { t: "Équation sans terme constant", d: "ax² + bx = 0 (c = 0) ; en Italie, on l'appelle « spuria »." },
    { t: "Règle du produit nul", d: "Un produit est nul si et seulement si au moins un de ses facteurs est nul." },
    { t: "Formule réduite", d: "Formule avec Δ′ = Δ/4, utilisable quand b est pair." },
    { t: "Relations de Viète", d: "x₁ + x₂ = −b/a et x₁·x₂ = c/a." },
    { t: "Parabole", d: "Courbe représentative de y = ax² + bx + c." },
    { t: "Complétion du carré", d: "Transformation de x² + bx en carré d'un binôme en ajoutant (b/2)²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Les solutions de x² − 5x + 4 = 0 sont…", options: ["1 et 4", "−1 et −4", "2 et 3"], answer: 0, explain: "Δ = 25 − 16 = 9 → x = (5 ± 3)/2 = 4 ou 1." },
      { type: "num", q: "Calcule Δ pour 2x² + 3x − 2 = 0.", answer: 25, explain: "Δ = 9 − 4·2·(−2) = 25." },
      { type: "mc", q: "L'équation x² + 2x + 5 = 0 a…", options: ["deux solutions réelles", "une solution double", "aucune solution réelle"], answer: 2, explain: "Δ = 4 − 20 = −16 &lt; 0." },
      { type: "mc", q: "Les solutions de 4x² − 16 = 0 sont…", options: ["x = ±2", "x = 4", "x = ±4"], answer: 0, explain: "x² = 4 → x = ±2." },
      { type: "mc", q: "Les solutions de x² − 3x = 0 sont…", options: ["0 et 3", "3 et −3", "3 seulement"], answer: 0, explain: "x(x − 3) = 0 → x = 0 ou x = 3." },
      { type: "num", q: "Dans 2x² − 8x + 6 = 0, quel est le produit des racines ?", answer: 3, explain: "x₁x₂ = c/a = 6/2 = 3 (les racines sont 1 et 3)." },
      { type: "num", q: "Deux nombres ont pour somme 11 et pour produit 24. Quel est le plus grand ?", answer: 8, explain: "x² − 11x + 24 = 0 → 3 et 8." },
      { type: "tf", q: "Si Δ = 0, l'équation du second degré n'a pas de solution.", answer: false, explain: "Avec Δ = 0, il y a une solution double x = −b/(2a)." },
      { type: "num", q: "Pour quelle valeur de k l'équation x² − 6x + k = 0 a-t-elle une solution double ?", answer: 9, explain: "Δ = 36 − 4k = 0 → k = 9 (x = 3)." },
      { type: "order", q: "Remets dans l'ordre les étapes pour résoudre une équation complète.", items: ["Écrire l'équation sous la forme ax² + bx + c = 0", "Calculer Δ = b² − 4ac", "Étudier le signe de Δ", "Appliquer x = (−b ± √Δ)/(2a)", "Vérifier avec la somme et le produit"], explain: "La mise en forme et le signe de Δ viennent avant la formule ; le contrôle termine." }
    ]
  }
});
