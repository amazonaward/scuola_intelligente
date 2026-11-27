TOPIC('fr', {
  id: "l1-mat-scomposizione",
  title: "Factorisation des polynômes",
  intro: "De même qu'un nombre comme 84 peut s'écrire 2·2·3·7, un polynôme peut se décomposer en un <b>produit de facteurs</b> plus simples. <b>Factoriser</b>, c'est le contraire de développer : c'est l'outil qui rendra possibles les fractions rationnelles, les équations de degré supérieur à un et presque toute l'algèbre des années à venir. Dans cette leçon, nous voyons les techniques fondamentales : facteur commun, identités remarquables, trinôme particulier et méthode de Ruffini.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Que signifie factoriser",
      html: `<p><b>Factoriser</b> un polynôme, c'est l'écrire comme un <b>produit de polynômes</b> de degré plus petit (les <b>facteurs</b>). C'est l'opération inverse de la multiplication :</p>
<p style="text-align:center"><b>(x + 2)(x + 3) = x² + 5x + 6</b><br>développer →<br>← factoriser</p>
<p>Un polynôme qu'on ne peut plus décomposer en facteurs de degré plus petit (à coefficients rationnels) est dit <b>irréductible</b>, comme les nombres premiers : x + 1 et x² + 1 sont irréductibles. Factoriser « complètement » signifie ne s'arrêter que lorsque tous les facteurs sont irréductibles.</p>
<p>À quoi cela sert-il ? Un produit est <b>nul</b> seulement si l'un des facteurs est nul (règle du produit nul) : une fois le polynôme factorisé, on voit tout de suite les valeurs qui l'annulent ; de plus, on peut <b>simplifier</b> les facteurs communs dans les fractions. La factorisation est la clé de tout.</p>`
    },
    {
      type: "text",
      title: "1) La mise en facteur commun",
      html: `<p>C'est la distributivité appliquée « à l'envers » : a·b + a·c = <b>a(b + c)</b>. On cherche le <b>plus grand diviseur commun</b> (PGCD) de tous les termes : le plus grand coefficient numérique qui les divise tous, et les lettres communes avec le <b>plus petit exposant</b>.</p>
<p>Exemple : <b>6x³ − 9x² + 3x</b>. Le PGCD des coefficients 6, 9, 3 est 3 ; la lettre x apparaît dans tous les termes avec un exposant minimal égal à 1. Donc :</p>
<p style="text-align:center">6x³ − 9x² + 3x = <b>3x(2x² − 3x + 1)</b></p>
<p>Vérification : multiplie 3x par chaque terme de la parenthèse et tu retrouves l'expression de départ. Attention : si un terme est égal au facteur commun, il reste <b>1</b> dans la parenthèse (et non zéro !) : 3x : 3x = 1.</p>
<p><b>Factorisation par groupements</b> : avec quatre termes, on met en facteur par groupes, en espérant qu'il reste le même facteur entre parenthèses :</p>
<p style="text-align:center">ax + ay + bx + by = a(x + y) + b(x + y) = <b>(x + y)(a + b)</b></p>`
    },
    {
      type: "svg",
      title: "Factoriser, c'est reconstruire un rectangle",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="50" width="160" height="150" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="220" y="50" width="90" height="150" fill="#86efac" stroke="#166534" stroke-width="3"/>
<rect x="60" y="200" width="160" height="60" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="220" y="200" width="90" height="60" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<text x="140" y="132" font-size="26" text-anchor="middle" fill="#1e1b4b" font-weight="bold">x²</text>
<text x="265" y="132" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">3x</text>
<text x="140" y="238" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">2x</text>
<text x="265" y="238" font-size="22" text-anchor="middle" fill="#7f1d1d" font-weight="bold">6</text>
<text x="140" y="38" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="265" y="38" font-size="18" text-anchor="middle" fill="#334155">3</text>
<text x="42" y="130" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="42" y="237" font-size="18" text-anchor="middle" fill="#334155">2</text>
<text x="340" y="100" font-size="18" fill="#1f2937" font-weight="bold">Aire totale :</text>
<text x="340" y="130" font-size="18" fill="#1f2937">x² + 3x + 2x + 6 = x² + 5x + 6</text>
<text x="340" y="170" font-size="18" fill="#1f2937" font-weight="bold">Côtés : (x + 3) et (x + 2)</text>
<text x="340" y="210" font-size="20" fill="#4338ca" font-weight="bold">x² + 5x + 6 = (x + 2)(x + 3)</text>
</svg>`,
      caption: "Un polynôme du second degré vu comme une aire : le factoriser, c'est trouver les longueurs des côtés du rectangle."
    },
    {
      type: "text",
      title: "2) Factoriser avec les identités remarquables",
      html: `<p>En lisant les identités remarquables « à l'envers », on obtient les factorisations les plus utiles :</p>
<table>
<tr><th>Polynôme</th><th>Factorisation</th><th>Nom</th></tr>
<tr><td>A² − B²</td><td>(A + B)(A − B)</td><td>différence de deux carrés</td></tr>
<tr><td>A² + 2AB + B²</td><td>(A + B)²</td><td>carré d'une somme</td></tr>
<tr><td>A² − 2AB + B²</td><td>(A − B)²</td><td>carré d'une différence</td></tr>
<tr><td>A³ + 3A²B + 3AB² + B³</td><td>(A + B)³</td><td>cube d'un binôme</td></tr>
<tr><td>A³ + B³</td><td>(A + B)(A² − AB + B²)</td><td>somme de deux cubes</td></tr>
<tr><td>A³ − B³</td><td>(A − B)(A² + AB + B²)</td><td>différence de deux cubes</td></tr>
</table>
<p><b>Exemples.</b></p>
<ul>
<li>4x² − 25 = (2x)² − 5² = <b>(2x + 5)(2x − 5)</b></li>
<li>9x² + 12x + 4 : les carrés sont (3x)² et 2² ; le double produit 2·3x·2 = 12x ✔ → <b>(3x + 2)²</b></li>
<li>x⁴ − 16 = (x²)² − 4² = (x² + 4)(x² − 4) = <b>(x² + 4)(x + 2)(x − 2)</b> : le facteur x² + 4 est irréductible, mais x² − 4 peut encore se factoriser !</li>
<li>x³ + 8 = x³ + 2³ = <b>(x + 2)(x² − 2x + 4)</b></li>
</ul>
<p>⚠️ La <b>somme</b> de deux carrés (x² + 9) <b>ne</b> se factorise <b>pas</b> : (x + 3)² donne x² + 6x + 9, et non x² + 9.</p>`
    },
    {
      type: "example",
      title: "Calcul mental avec la différence de deux carrés",
      html: `<p>Combien font <b>99 × 101</b> sans calculatrice ? Écris 99 = 100 − 1 et 101 = 100 + 1 : c'est (a − b)(a + b) = a² − b².</p>
<p>99 × 101 = 100² − 1² = 10 000 − 1 = <b>9 999</b>.</p>
<p>De même, 48 × 52 = (50 − 2)(50 + 2) = 2 500 − 4 = <b>2 496</b>. Une identité algébrique qui devient une astuce de champion de calcul mental.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : facteur commun et identités remarquables",
      questions: [
        { type: "num", q: "6x + 12 = 6(x + ?). Quel nombre remplace le point d'interrogation ?", answer: 2, explain: "12 : 6 = 2, donc 6x + 12 = 6(x + 2)." },
        { type: "mc", q: "Comment factorise-t-on x² − 49 ?", options: ["(x − 7)²", "(x + 7)(x − 7)", "(x + 49)(x − 1)"], answer: 1, explain: "C'est une différence de deux carrés : x² − 7² = (x + 7)(x − 7)." },
        { type: "tf", q: "x² + 9 = (x + 3)².", answer: false, explain: "(x + 3)² = x² + 6x + 9 : il manque le double produit. La somme de carrés x² + 9 est irréductible." }
      ]
    },
    {
      type: "text",
      title: "3) Le trinôme particulier x² + sx + p",
      html: `<p>Un trinôme du second degré dont le coefficient de x² vaut 1 se factorise, lorsque c'est possible, en cherchant <b>deux nombres m et n</b> tels que :</p>
<p style="text-align:center">m + n = s (coefficient de x) &nbsp;&nbsp; et &nbsp;&nbsp; m · n = p (terme constant)</p>
<p>Alors <b>x² + sx + p = (x + m)(x + n)</b>. La raison est simple : (x + m)(x + n) = x² + (m + n)x + m·n.</p>
<p><b>Exemple 1</b> : x² − 5x + 6. Je cherche deux nombres de produit 6 et de somme −5 : ce sont −2 et −3. Donc <b>(x − 2)(x − 3)</b>.</p>
<p><b>Exemple 2</b> : x² + x − 12. Produit −12 (signes contraires), somme +1 : les couples de facteurs de 12 sont (1,12), (2,6), (3,4) ; celui dont la différence vaut 1 est 3 et 4, et le plus grand doit être positif : +4 et −3. Donc <b>(x + 4)(x − 3)</b>.</p>
<p><b>Astuce des signes</b> : si p &gt; 0, les deux nombres ont le même signe (celui de s) ; si p &lt; 0, ils sont de signes contraires et le plus grand en valeur absolue a le signe de s. S'il n'existe pas d'entiers qui conviennent, le trinôme est (en général) irréductible.</p>`
    },
    {
      type: "widget",
      title: "Quelle technique utiliser ?",
      widget: "classify",
      options: { groups: ["Facteur commun", "Différence de deux carrés", "Trinôme particulier", "Carré d'un binôme"], items: [
        ["6x² + 9x", 0],
        ["x² − 36", 1],
        ["x² + 5x + 6", 2],
        ["4x² + 12x + 9", 3],
        ["4a² − 9b²", 1],
        ["x² − x − 12", 2],
        ["9x² − 6x + 1", 3],
        ["ab + ac", 0]
      ] },
      caption: "Avant de calculer, reconnais la forme : c'est la moitié du travail."
    },
    {
      type: "text",
      title: "4) La méthode de Ruffini",
      html: `<p>Pour les polynômes de degré 3 ou plus qui n'ont pas de forme « particulière », on utilise le <b>théorème de Ruffini</b> (appelé aussi théorème du facteur) :</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Un polynôme P(x) est divisible par (x − a) si et seulement si P(a) = 0.</b></p>
<p>Il suffit donc de trouver un nombre <b>a</b> qui annule le polynôme : alors (x − a) est un facteur. Pour un polynôme à coefficients entiers et de coefficient dominant 1, les candidats entiers sont les <b>diviseurs du terme constant</b> (avec les deux signes).</p>
<p><b>Exemple</b> : P(x) = x³ − 2x² − 5x + 6. Terme constant 6, diviseurs ±1, ±2, ±3, ±6.</p>
<ul>
<li>P(1) = 1 − 2 − 5 + 6 = 0 ✔ → (x − 1) est un facteur.</li>
<li>Division par la <b>méthode de Ruffini</b> (en France, on parle aussi de schéma de Horner) : j'écris les coefficients 1, −2, −5, 6 ; j'abaisse le 1 ; je multiplie par a = 1 et j'additionne en colonne : 1 → (−2 + 1) = −1 → (−5 − 1) = −6 → (6 − 6) = 0 (reste nul ✔).</li>
<li>Le quotient a pour coefficients 1, −1, −6 : x² − x − 6.</li>
<li>C'est un trinôme particulier : somme −1, produit −6 → −3 et +2 : (x − 3)(x + 2).</li>
</ul>
<p>Résultat : <b>x³ − 2x² − 5x + 6 = (x − 1)(x − 3)(x + 2)</b>. Les racines (1, 3, −2) sont exactement les valeurs qui annulent le polynôme.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Paolo Ruffini",
      html: `<p><b>Paolo Ruffini</b> (1765–1822) était un médecin et mathématicien italien, né à Valentano et ayant vécu à Modène. Il mit au point la méthode de division qui porte son nom au début du XIXe siècle, mais il est encore plus célèbre pour avoir tenté, dès 1799, de démontrer que l'équation générale du <b>cinquième degré ne se résout pas par radicaux</b> : sa démonstration était incomplète, mais elle ouvrit la voie à Abel, puis à Galois, qui réglèrent la question. Une règle apprise en début de lycée naît donc d'une grande histoire des mathématiques.</p>`
    },
    {
      type: "example",
      title: "Exemple concret : le jardin avec un massif",
      html: `<p>Un jardin carré de côté x mètres a en son centre un massif de fleurs carré de côté 3 m. L'aire de gazon est x² − 9. En factorisant : <b>(x + 3)(x − 3)</b>. Cela signifie qu'on peut voir le gazon comme un rectangle de côtés (x + 3) et (x − 3). Pour x = 13 m : 16 · 10 = 160 m², comme 169 − 9 = 160 m², mais avec un calcul plus rapide.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Fermat et les grands nombres",
      html: `<p>Le mathématicien français <b>Pierre de Fermat</b> (1601–1665) utilisa la différence de deux carrés pour factoriser des nombres entiers : si un nombre N s'écrit a² − b², alors N = (a + b)(a − b). Sa méthode fonctionne bien quand les deux facteurs sont proches. La sécurité de nombreux systèmes de cryptographie modernes repose d'ailleurs sur le fait que décomposer des nombres énormes en facteurs premiers est extrêmement difficile.</p>`
    },
    {
      type: "remember",
      title: "La stratégie : dans quel ordre essayer",
      html: `<ol>
<li><b>Facteur commun</b> : y a-t-il un facteur commun à tous les termes ? Mets-le toujours en facteur en premier.</li>
<li>Compte les termes : <b>2</b> → différence de deux carrés ou de deux cubes ; <b>3</b> → carré d'un binôme ou trinôme particulier ; <b>4</b> → groupements ou cube d'un binôme.</li>
<li>Si tu ne reconnais aucune forme et que le degré est ≥ 3 : <b>Ruffini</b>.</li>
<li><b>Contrôle</b> si un facteur peut encore se factoriser (comme x² − 4).</li>
<li><b>Vérifie</b> en multipliant les facteurs : tu dois retrouver le polynôme de départ.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre la factorisation",
      intro: "Si la factorisation te semble une collection de formules à apprendre par cœur, essaie ces autres chemins.",
      tabs: [
        {
          label: "📐 Avec les aires",
          html: `<p>La différence de deux carrés, ça se « voit ». Prends un carré de côté <b>a</b> et enlève un petit carré de côté <b>b</b> dans un coin : il reste un « L » d'aire <b>a² − b²</b>. Découpe le L et réassemble les morceaux : il devient un <b>rectangle</b> de côtés <b>(a + b)</b> et <b>(a − b)</b>. Même aire, donc <b>a² − b² = (a + b)(a − b)</b>.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="60" width="160" height="160" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="130" y="60" width="60" height="60" fill="#ffffff" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="160" y="97" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">b²</text>
<text x="80" y="150" font-size="20" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a² − b²</text>
<text x="110" y="248" font-size="18" text-anchor="middle" fill="#334155">côté a</text>
<text x="270" y="150" font-size="34" text-anchor="middle" fill="#334155" font-weight="bold">→</text>
<rect x="330" y="90" width="160" height="100" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="490" y="90" width="60" height="100" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<text x="410" y="145" font-size="18" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a · (a − b)</text>
<text x="520" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">b·(a−b)</text>
<text x="440" y="75" font-size="18" text-anchor="middle" fill="#334155">base a + b</text>
<text x="440" y="220" font-size="18" text-anchor="middle" fill="#334155">hauteur a − b</text>
</svg>`
        },
        {
          label: "🇨🇳 La croix (multiplication en croix)",
          html: `<p>En Chine, on utilise depuis des siècles la <b>multiplication en croix</b> (十字相乘) pour le trinôme. Écris les deux nombres m et n dans un « X » et contrôle deux choses :</p>
<ul>
<li><b>à la verticale</b> (produit m·n), tu dois obtenir le terme constant ;</li>
<li><b>en diagonale</b> (somme m + n), tu dois obtenir le coefficient de x.</li>
</ul>
<p>Pour x² − 5x + 6 : produit 6, somme −5. Tu essaies (−1, −6) : somme −7 ✗. Tu essaies (−2, −3) : somme −5 ✔. Donc (x − 2)(x − 3). Aux États-Unis, le même jeu s'appelle le <i>diamond problem</i>. Même idée, noms différents : chercher deux nombres dont on connaît le produit et la somme.</p>`
        },
        {
          label: "🔢 Comme les nombres premiers",
          html: `<p>84 = 2 · 2 · 3 · 7 s'obtient en divisant par des nombres premiers tant que c'est possible. Les polynômes se comportent de la même façon : leurs « briques » sont les polynômes irréductibles.</p>
<p>x² − 1 = (x − 1)(x + 1), c'est comme 15 = 3 · 5. Et de même que 15 s'écrit d'une seule façon comme produit de nombres premiers (à l'ordre près), un polynôme a une <b>factorisation unique</b> en facteurs irréductibles. La mise en facteur commun correspond à la recherche du PGCD, la factorisation complète à la décomposition en facteurs premiers : même structure, dans un autre monde.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la factorisation",
      nodes: [
        { id: "scomp", label: "Factorisation", x: 50, y: 6, color: "#6366f1", html: "Écrire un polynôme comme produit de facteurs irréductibles.", why: "Elle est utile parce qu'un produit n'est nul que si l'un des facteurs est nul : on peut ainsi résoudre des équations et simplifier des fractions rationnelles." },
        { id: "distrib", label: "Distributivité", x: 15, y: 30, color: "#64748b", html: "a(b + c) = ab + ac.", why: "C'est l'axiome d'où tout part : lue de droite à gauche, c'est la mise en facteur. Toute factorisation est une multiplication lue à l'envers." },
        { id: "racc", label: "Facteur commun", x: 15, y: 55, color: "#16a34a", html: "On met en facteur le PGCD des termes.", why: "On étend au calcul littéral l'idée du PGCD de nombres : on sort ce qui est commun à tous les termes." },
        { id: "notevoli", label: "Identités remarquables", x: 50, y: 32, color: "#f59e0b", html: "Carré d'un binôme, différence de deux carrés, cubes.", why: "Ce sont des égalités qu'on obtient en multipliant. Euclide déjà (Éléments, livre II) démontrait avec des aires et des rectangles le carré d'une somme." },
        { id: "trin", label: "Trinôme particulier", x: 50, y: 58, color: "#a855f7", html: "x² + sx + p = (x + m)(x + n).", why: "Il vient du développement (x + m)(x + n) = x² + (m + n)x + mn : les relations entre la somme et le produit des racines." },
        { id: "ruff", label: "Théorème de Ruffini", x: 85, y: 40, color: "#ef4444", html: "P(a) = 0 ⟺ (x − a) divise P(x).", why: "Si tu divises P(x) par (x − a), tu obtiens un quotient Q et un reste R constant : P(x) = (x − a)Q(x) + R. En posant x = a, on a P(a) = R, donc le reste est nul exactement quand P(a) = 0." },
        { id: "irr", label: "Facteurs irréductibles", x: 50, y: 88, color: "#0ea5e9", html: "Facteurs qu'on ne peut plus décomposer.", why: "Ce sont les « nombres premiers » des polynômes : comme pour les nombres, la factorisation complète est unique à l'ordre près." },
        { id: "uso", label: "Équations et fractions", x: 85, y: 78, color: "#14b8a6", html: "Applications : résoudre des équations, simplifier des fractions rationnelles.", why: "Dans les fractions, on ne simplifie que des facteurs, jamais des termes : c'est pourquoi il faut d'abord factoriser." }
      ],
      edges: [
        ["distrib", "racc", "lue à l'envers"],
        ["notevoli", "scomp", "à reconnaître"],
        ["racc", "scomp", "premier essai"],
        ["trin", "scomp", "pour les trinômes"],
        ["ruff", "scomp", "degré ≥ 3"],
        ["scomp", "irr", "jusqu'aux"],
        ["irr", "uso", "sert à"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : trinôme et Ruffini",
      questions: [
        { type: "num", q: "x² − 7x + 10 = (x − 2)(x − k). Combien vaut k ?", answer: 5, explain: "Il faut deux nombres de somme −7 et de produit 10 : −2 et −5." },
        { type: "num", q: "Soit P(x) = x³ − 7x + 6. Combien vaut P(1) ?", answer: 0, explain: "1 − 7 + 6 = 0 : donc (x − 1) divise P(x)." },
        { type: "mc", q: "Lequel de ces polynômes est divisible par (x − 2) ?", options: ["x³ − 8", "x³ + 8", "x² + 4"], answer: 0, explain: "Pour x = 2 : 2³ − 8 = 0. En effet, x³ − 8 = (x − 2)(x² + 2x + 4)." }
      ]
    }
  ],
  glossary: [
    { t: "Factorisation", d: "Écriture d'un polynôme comme produit de facteurs de degré plus petit." },
    { t: "Facteur", d: "Chacun des polynômes qui sont multipliés dans un produit." },
    { t: "Polynôme irréductible", d: "Polynôme qu'on ne peut pas écrire comme produit de polynômes de degré plus petit." },
    { t: "Mise en facteur commun", d: "Extraction du plus grand diviseur commun de tous les termes." },
    { t: "Factorisation par groupements", d: "Mise en facteur par groupes de termes, suivie de la mise en facteur d'un facteur commun." },
    { t: "Différence de deux carrés", d: "A² − B² = (A + B)(A − B)." },
    { t: "Trinôme particulier", d: "Trinôme x² + sx + p, factorisable en (x + m)(x + n) avec m + n = s et m·n = p." },
    { t: "Théorème de Ruffini", d: "P(x) est divisible par (x − a) si et seulement si P(a) = 0." },
    { t: "Racine", d: "Valeur de la variable qui annule le polynôme." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle est la mise en facteur commun de 4x²y − 6xy² ?", options: ["2xy(2x − 3y)", "4xy(x − y)", "2x²y²(2 − 3)"], answer: 0, explain: "Le PGCD des coefficients 4 et 6 est 2 ; les lettres communes avec l'exposant minimal sont x et y. 4x²y : 2xy = 2x ; 6xy² : 2xy = 3y." },
      { type: "mc", q: "La factorisation de 9x² + 12x + 4 est…", options: ["(3x + 2)²", "(9x + 4)²", "(3x + 4)(3x + 1)"], answer: 0, explain: "(3x)² + 2·3x·2 + 2² = (3x + 2)²." },
      { type: "num", q: "x² − 3x − 10 = (x + 2)(x − k). Trouve k.", answer: 5, explain: "Somme −3, produit −10 : les nombres sont +2 et −5." },
      { type: "num", q: "Calcule de tête 98 × 102 en utilisant la différence de deux carrés.", answer: 9996, explain: "(100 − 2)(100 + 2) = 100² − 2² = 10 000 − 4 = 9 996." },
      { type: "tf", q: "Si P(3) = 0, alors (x − 3) est un facteur de P(x).", answer: true, explain: "C'est le théorème de Ruffini." },
      { type: "order", q: "Range dans l'ordre la stratégie de factorisation.", items: ["Mise en facteur commun", "Reconnaître une identité remarquable ou un trinôme particulier", "Groupements ou Ruffini", "Contrôler que les facteurs sont irréductibles", "Vérifier en multipliant"], explain: "On commence toujours par le facteur commun et on termine par la vérification." },
      { type: "text", q: "Quel mathématicien italien a donné son nom à une méthode pour diviser un polynôme par x − a ?", answer: ["ruffini", "paolo ruffini"], explain: "Paolo Ruffini (1765–1822)." },
      { type: "num", q: "Factorise 2x³ − 8x = 2x(x − 2)(x + 2) et calcule sa valeur pour x = 3.", answer: 30, explain: "2·3·1·5 = 30. Directement : 2·27 − 24 = 30." },
      { type: "mc", q: "La factorisation complète de x⁴ − 1 est…", options: ["(x² + 1)(x + 1)(x − 1)", "(x² − 1)²", "(x + 1)⁴"], answer: 0, explain: "x⁴ − 1 = (x² + 1)(x² − 1) = (x² + 1)(x + 1)(x − 1) ; x² + 1 est irréductible." },
      { type: "mc", q: "Pourquoi la factorisation est-elle utile pour simplifier les fractions rationnelles ?", options: ["Parce qu'on ne peut simplifier que des facteurs, pas les termes d'une somme", "Parce qu'elle rend les polynômes plus longs", "Parce qu'elle élimine les lettres"], answer: 0, explain: "On ne simplifie que les facteurs communs au numérateur et au dénominateur." }
    ]
  }
});
