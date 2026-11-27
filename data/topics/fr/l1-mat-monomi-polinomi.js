TOPIC('fr', {
  id: "l1-mat-monomi-polinomi",
  title: "Monômes et polynômes",
  intro: "Quelle est l'aire d'un jardin carré de côté <i>a</i> si l'on allonge chaque côté de <i>b</i> mètres ? Et si l'on veut l'écrire une fois pour toutes, pour n'importe quels a et b ? Le <b>calcul littéral</b> permet d'utiliser des lettres à la place des nombres pour écrire des règles générales. Apprenons son « alphabet » (les <b>monômes</b>), ses « mots » (les <b>polynômes</b>) et quelques « formules magiques » qui font gagner des heures de calcul : les <b>identités remarquables</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Pourquoi utiliser des lettres",
      html: `<p>Une <b>expression littérale</b> contient des nombres, des lettres et des opérations. Les lettres désignent des nombres quelconques (des variables) et permettent d'énoncer une règle valable dans une infinité de cas. Par exemple :</p>
<ul>
<li>le périmètre d'un rectangle de base b et de hauteur h est 2b + 2h, pour <i>n'importe quel</i> rectangle ;</li>
<li>un nombre pair quelconque s'écrit 2n, un impair 2n + 1 (n ∈ ℤ), trois nombres consécutifs n, n + 1, n + 2.</li>
</ul>
<p>La <b>valeur numérique</b> d'une expression s'obtient en remplaçant les lettres par des nombres : pour 3a − 2b avec a = 4 et b = −1, on obtient 3·4 − 2·(−1) = 14.</p>
<p>Les lettres suivent les mêmes propriétés que les nombres (commutativité, associativité, distributivité) ; c'est pourquoi le calcul littéral n'a pas de « nouvelles règles » : c'est une <b>extension</b> de l'arithmétique. C'est le mathématicien français François Viète (1540-1603) qui a introduit l'usage systématique des lettres, et Descartes qui a fixé la convention moderne : les premières lettres (a, b, c…) pour les valeurs connues, les dernières (x, y, z) pour les inconnues.</p>`
    },
    {
      type: "text",
      title: "Les monômes",
      html: `<p>Un <b>monôme</b> est une expression littérale dans laquelle n'apparaissent que des <b>multiplications</b> (et des puissances d'exposant naturel) entre des nombres et des lettres. Exemples : 5a²b, −x, 3/4 xy³, 7. Ne sont pas des monômes : a + b (somme), 1/x (lettre au dénominateur), √x.</p>
<p>Dans un monôme sous <b>forme réduite</b>, on distingue :</p>
<ul>
<li>le <b>coefficient</b> : le facteur numérique (dans le monôme −3x²y, c'est −3 ; dans xy, c'est 1) ;</li>
<li>la <b>partie littérale</b> : les lettres avec leurs exposants (x²y) ;</li>
<li>le <b>degré total</b> : la somme des exposants (x²y est de degré 3) ;</li>
<li>le <b>degré par rapport à une lettre</b> : l'exposant de cette lettre (x²y est de degré 2 par rapport à x et de degré 1 par rapport à y).</li>
</ul>
<p>Deux monômes sont <b>semblables</b> s'ils ont la <b>même partie littérale</b> (coefficients quelconques) : 3x²y, −5x²y et (1/2)yx² sont semblables. Ils sont <b>opposés</b> s'ils sont semblables avec des coefficients opposés (4ab et −4ab). Un monôme de coefficient 0 est le monôme nul (degré non défini) ; un nombre non nul est un monôme de degré 0.</p>
<p><b>Opérations</b> :</p>
<ul>
<li><b>Somme algébrique</b> : <i>uniquement</i> entre monômes semblables : on additionne les coefficients et on garde la partie littérale. 5x²y − 8x²y + x²y = −2x²y. Des monômes non semblables restent sous forme de somme (3x + 2y ne se réduit pas).</li>
<li><b>Produit</b> : on multiplie les coefficients et on additionne les exposants des mêmes lettres : (3a²b)·(−2ab³) = −6a³b⁴.</li>
<li><b>Puissance</b> : (−2x²y)³ = (−2)³·x⁶·y³ = −8x⁶y³.</li>
<li><b>Quotient</b> : on divise les coefficients et on soustrait les exposants : 12a⁵b² : (−4a²b) = −3a³b. Le résultat n'est un monôme que si chaque lettre du diviseur apparaît dans le dividende avec un exposant au moins aussi grand (sinon la division donne une fraction rationnelle).</li>
<li><b>PGCD et PPCM</b> : le PGCD contient les lettres <i>communes</i> avec le <i>plus petit</i> exposant et le PGCD des coefficients ; le PPCM contient toutes les lettres avec le <i>plus grand</i> exposant et le PPCM des coefficients. Pour 12a³b et 18a²b² : PGCD = 6a²b, PPCM = 36a³b².</li>
</ul>`
    },
    {
      type: "widget",
      title: "Semblable ou non ?",
      widget: "classify",
      options: { groups: ["Semblable à 3x²y", "Non semblable à 3x²y"], items: [
        ["−5x²y", 0], ["x²y", 0], ["7yx²", 0], ["(2/3)x²y", 0],
        ["3xy²", 1], ["3x²", 1], ["2x²y²", 1], ["3x + y", 1], ["4xy", 1]
      ] },
      caption: "Ce qui compte, ce sont les lettres et leurs exposants, pas les coefficients ni l'ordre des lettres (7yx² = 7x²y)."
    },
    {
      type: "example",
      title: "Exemple : réduire une expression avec des monômes",
      html: `<p>Simplifie : <b>2a²b · (−3ab²) − 5a³b³ + (4a⁶b⁶) : (2a³b³)</b></p>
<ol>
<li>Premier produit : 2·(−3) = −6 ; a²·a = a³ ; b·b² = b³ → −6a³b³.</li>
<li>Quotient : 4 : 2 = 2 ; a⁶ : a³ = a³ ; b⁶ : b³ = b³ → 2a³b³.</li>
<li>Somme des monômes semblables (tous en a³b³) : −6 − 5 + 2 = −9 → <b>−9a³b³</b>.</li>
</ol>
<p>Vérification avec a = 1, b = 1 : 2·(−3) − 5 + 4/2 = −6 − 5 + 2 = −9 ✔. Remplacer les lettres par des valeurs simples est un moyen rapide de contrôler un résultat (cela ne le démontre pas complètement, mais cela permet de repérer beaucoup d'erreurs).</p>`
    },
    {
      type: "text",
      title: "Les polynômes",
      html: `<p>Un <b>polynôme</b> est une <b>somme algébrique de monômes</b>. Les monômes qui le composent s'appellent ses <b>termes</b>. Un polynôme à deux termes s'appelle un <b>binôme</b>, à trois termes un <b>trinôme</b>. Par exemple, 3x²y − 5xy + 7 est un trinôme.</p>
<p>Le polynôme est sous <b>forme réduite</b> quand il ne contient ni monômes semblables (qu'il faut additionner) ni opérations à effectuer. On définit :</p>
<ul>
<li>le <b>degré du polynôme</b> : le plus grand des degrés de ses termes (3x²y − 5xy + 7 est de degré 3) ;</li>
<li>le <b>degré par rapport à une lettre</b> : le plus grand exposant de cette lettre (dans x²y : degré 2 en x) ;</li>
<li><b>ordonné</b> suivant les puissances décroissantes (ou croissantes) d'une lettre ;</li>
<li><b>complet</b> par rapport à une lettre, si toutes les puissances de 0 jusqu'au degré apparaissent (x³ − 2x² + x − 5 est complet ; x³ + 4 ne l'est pas) ;</li>
<li><b>homogène</b>, si tous les termes ont le même degré (a² + 3ab − b² est homogène de degré 2) ;</li>
<li><b>terme constant</b> : le terme de degré 0, sans lettres.</li>
</ul>
<p>Deux polynômes sont <b>égaux</b> si, une fois réduits, ils ont les mêmes termes. Un polynôme est dit <b>identiquement nul</b> si, une fois réduit, il vaut 0.</p>
<p>Pour un polynôme à une variable, P(x) = aₙxⁿ + … + a₁x + a₀, la <b>valeur numérique</b> P(k) se calcule en remplaçant x par k. Si P(k) = 0, k est une <b>racine</b> (ou un zéro) du polynôme, c'est-à-dire une solution de l'équation P(x) = 0 : c'est le lien avec les équations.</p>`
    },
    {
      type: "text",
      title: "Opérations sur les polynômes",
      html: `<p><b>Somme et différence</b> : on supprime les parenthèses (en changeant les signes s'il y a un moins devant) et on réduit les termes semblables.</p>
<p>(3x² − 2x + 1) − (x² − 5x − 4) = 3x² − 2x + 1 − x² + 5x + 4 = <b>2x² + 3x + 5</b>.</p>
<p><b>Produit d'un monôme par un polynôme</b> (distributivité) : 2x · (3x² − x + 4) = 6x³ − 2x² + 8x.</p>
<p><b>Produit de deux polynômes</b> : on multiplie <b>chaque terme du premier par chaque terme du second</b>, puis on réduit les termes semblables.</p>
<p>(x + 3)(2x − 5) = 2x² − 5x + 6x − 15 = <b>2x² + x − 15</b>.</p>
<p>Le degré du produit est la <b>somme</b> des degrés (avec des coefficients non nuls) : 1 + 1 = 2. Le nombre de produits partiels à effectuer est le produit des nombres de termes : 2 × 2 = 4.</p>
<p><b>Quotient d'un polynôme par un monôme</b> : on divise chaque terme : (6x³ − 9x² + 3x) : (3x) = 2x² − 3x + 1.</p>
<p>La <b>division de deux polynômes</b> est plus complexe : étant donnés A(x) (le dividende) et B(x) (le diviseur, non nul), il existe deux polynômes Q(x) (le quotient) et R(x) (le reste), avec le degré de R inférieur au degré de B, tels que <b>A = B · Q + R</b>. Si R = 0, le polynôme est <b>divisible</b>. La méthode (analogue à la division posée des nombres) et la méthode de Ruffini seront vues dans la leçon sur la factorisation.</p>`
    },
    {
      type: "example",
      title: "Exemple : l'aire d'un jardin qui s'agrandit",
      html: `<p>Un jardin rectangulaire a des côtés de x et x + 4 mètres. Tu allonges chaque côté de 2 m. De combien l'aire augmente-t-elle ?</p>
<ol>
<li>Aire initiale : x(x + 4) = x² + 4x.</li>
<li>Nouveaux côtés : (x + 2) et (x + 6). Aire : (x + 2)(x + 6) = x² + 6x + 2x + 12 = x² + 8x + 12.</li>
<li>Augmentation : (x² + 8x + 12) − (x² + 4x) = <b>4x + 12</b> m².</li>
</ol>
<p>Pour x = 10 m : jardin initial 10 × 14 = 140 m² ; nouveau jardin 12 × 16 = 192 m² ; augmentation 52 m². Vérification : 4·10 + 12 = 52 ✔. Une seule formule décrit tous les jardins possibles : c'est la force du calcul littéral.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : monômes et polynômes",
      questions: [
        { type: "mc", q: "Quel est le degré total du monôme −7a²b³c ?", options: ["3", "6", "7"], answer: 1, explain: "On additionne les exposants : 2 + 3 + 1 = 6." },
        { type: "num", q: "Calcule le coefficient du monôme (−2x²y)·(3xy³) · (1/6).", answer: -1, explain: "(−2)·3·(1/6) = −1 : le monôme est −x³y⁴." },
        { type: "num", q: "Le polynôme 5x³ − 2x + x⁴ − 7 est de degré…", answer: 4, explain: "Le terme de plus haut degré est x⁴." },
        { type: "num", q: "Combien de termes a le produit non réduit (a + b + c)(x + y), avant de réduire les termes semblables ?", answer: 6, explain: "Chaque terme du premier (3) par chaque terme du second (2) : 3 × 2 = 6." }
      ]
    },
    {
      type: "svg",
      title: "(a + b)² n'est pas a² + b²",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="170" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="230" y="30" width="70" height="170" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="60" y="200" width="170" height="70" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="230" y="200" width="70" height="70" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="145" y="122" font-size="26" text-anchor="middle" fill="#1e3a8a" font-weight="bold">a²</text>
<text x="265" y="122" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="145" y="242" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="265" y="242" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">b²</text>
<text x="145" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="265" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="40" y="120" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="40" y="240" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="330" y="100" font-size="20" fill="#1f2937" font-weight="bold">(a + b)² = a² + 2ab + b²</text>
<text x="330" y="140" font-size="17" fill="#475569">Le grand carré se découpe en :</text>
<text x="330" y="168" font-size="17" fill="#1d4ed8">un carré de côté a (a²),</text>
<text x="330" y="194" font-size="17" fill="#15803d">un carré de côté b (b²),</text>
<text x="330" y="220" font-size="17" fill="#b45309">et deux rectangles a × b (2ab).</text>
</svg>`,
      caption: "Le « double produit » 2ab, c'est exactement l'aire des deux rectangles qui restent : l'oublier est l'erreur la plus fréquente."
    },
    {
      type: "text",
      title: "Les identités remarquables",
      html: `<p>Certains produits de polynômes apparaissent si souvent qu'il vaut mieux retenir leur résultat :</p>
<table>
<tr><th>Nom</th><th>Formule</th></tr>
<tr><td><b>Carré d'une somme / d'une différence</b></td><td>(a + b)² = a² + 2ab + b² &nbsp;&nbsp; (a − b)² = a² − 2ab + b²</td></tr>
<tr><td><b>Produit d'une somme par une différence</b></td><td>(a + b)(a − b) = a² − b²</td></tr>
<tr><td><b>Carré d'un trinôme</b></td><td>(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc</td></tr>
<tr><td><b>Cube d'un binôme</b></td><td>(a + b)³ = a³ + 3a²b + 3ab² + b³ &nbsp;&nbsp; (a − b)³ = a³ − 3a²b + 3ab² − b³</td></tr>
<tr><td><b>Somme et différence de cubes (pour factoriser)</b></td><td>(a + b)(a² − ab + b²) = a³ + b³ &nbsp;&nbsp; (a − b)(a² + ab + b²) = a³ − b³</td></tr>
</table>
<p>Le carré d'un binôme se retient avec la phrase : « le carré du premier, plus le double produit, plus le carré du second ». Le signe du double produit est celui du binôme ; les deux autres termes sont toujours positifs.</p>
<p>Exemples :</p>
<ul>
<li>(2x + 3y)² = 4x² + 12xy + 9y² ;</li>
<li>(5a − 1)² = 25a² − 10a + 1 ;</li>
<li>(3x + 2)(3x − 2) = 9x² − 4 ;</li>
<li>(x − 2)³ = x³ − 6x² + 12x − 8.</li>
</ul>
<p><b>Pour le calcul mental</b> : 51² = (50 + 1)² = 2500 + 100 + 1 = 2601 ; 49 · 51 = (50 − 1)(50 + 1) = 2500 − 1 = 2499 ; 99² = (100 − 1)² = 10 000 − 200 + 1 = 9801.</p>
<p><b>Coefficients des puissances d'un binôme</b> : les coefficients de (a + b)ⁿ forment la ligne n du <b>triangle de Pascal</b> (appelé en Italie triangle de Tartaglia, en Chine triangle de Yang Hui) : chaque nombre est la somme des deux nombres situés au-dessus de lui.</p>
<p style="text-align:center;font-family:monospace;line-height:1.6">1<br>1&nbsp;&nbsp;1<br>1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1<br>1&nbsp;&nbsp;5&nbsp;&nbsp;10&nbsp;&nbsp;10&nbsp;&nbsp;5&nbsp;&nbsp;1</p>
<p>Donc (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴ et (a + b)⁵ = a⁵ + 5a⁴b + 10a³b² + 10a²b³ + 5ab⁴ + b⁵.</p>`
    },
    {
      type: "example",
      title: "Exemple : d'une erreur à une démonstration",
      html: `<p>Une erreur grand classique : (x + 3)² = x² + 9. Pour x = 2, cela donnerait 4 + 9 = 13, mais (2 + 3)² = 25. Le même calcul avec la bonne formule : x² + 6x + 9 = 4 + 12 + 9 = 25 ✔.</p>
<p>Le calcul littéral sert aussi à <b>démontrer</b>. Par exemple : la différence des carrés de deux nombres consécutifs n et n + 1 est toujours impaire.</p>
<ol>
<li>(n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1.</li>
<li>2n + 1 est, par définition, un nombre impair. ∎</li>
</ol>
<p>Vérification : 5² − 4² = 25 − 16 = 9, qui est impair. Mais maintenant nous savons que c'est vrai pour <i>tous</i> les nombres consécutifs, pas seulement pour ceux que nous avons essayés.</p>`
    },
    {
      type: "curiosity",
      title: "Al-Khwarizmi et la « complétion du carré »",
      html: `<p>Le mathématicien perse Muhammad ibn Musa al-Khwarizmi (vers 780-850), qui travaillait à la Maison de la Sagesse à Bagdad, écrivit vers 820 le traité <i>al-Kitab al-mukhtasar fi hisab al-jabr wa-l-muqabala</i> (« Abrégé du calcul par la restauration et la comparaison »). Du mot <i>al-jabr</i> vient le mot <b>algèbre</b>, et de son nom le mot <b>algorithme</b>. Al-Khwarizmi résolvait les équations du second degré à l'aide de figures géométriques, en ajoutant un petit carré manquant pour « compléter » un carré : c'était exactement l'identité (a + b)² = a² + 2ab + b² lue de façon géométrique. Euclide aussi, dans le Livre II des <i>Éléments</i> (vers 300 av. J.-C.), démontre par des figures l'identité du carré d'un binôme.</p>`
    },
    {
      type: "curiosity",
      title: "Pourquoi « monôme » et « polynôme » ?",
      html: `<p>Les mots viennent du grec : <i>monos</i> (un seul), <i>polys</i> (plusieurs) et <i>nomos</i>, rapproché du latin <i>nomen</i> (nom, terme). Donc « monôme » = « un seul terme », « polynôme » = « plusieurs termes », « binôme » = « deux termes ». Le mot <i>polynôme</i> s'est répandu dans l'Europe du XVIe siècle, à l'époque où des mathématiciens italiens comme Cardan, Tartaglia et Ferrari découvrirent les formules de résolution des équations du troisième et du quatrième degré. Le défi de 1535 entre Tartaglia et Antonio Maria Fior sur les équations du troisième degré est l'un des duels mathématiques les plus célèbres de l'histoire.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de multiplier des polynômes",
      intro: "Multiplier chaque terme par chaque terme, c'est facile à dire mais facile de se tromper. Voici d'autres méthodes, utilisées dans d'autres pays.",
      tabs: [
        {
          label: "🔲 La méthode du tableau",
          html: `<p>Beaucoup d'enseignants des pays anglo-saxons utilisent le <b>tableau des aires</b> (box method) : on écrit les termes d'un polynôme sur les lignes, ceux de l'autre sur les colonnes, et on remplit chaque case avec le produit. Ensuite, on additionne les cases semblables.</p>
<p>(x + 3)(2x − 5) :</p>
<table>
<tr><th></th><th>2x</th><th>−5</th></tr>
<tr><th>x</th><td>2x²</td><td>−5x</td></tr>
<tr><th>+3</th><td>6x</td><td>−15</td></tr>
</table>
<p>Somme : 2x² + (−5x + 6x) − 15 = <b>2x² + x − 15</b>. La méthode évite d'oublier des produits et montre clairement pourquoi il y a autant de produits partiels que lignes × colonnes.</p>`
        },
        {
          label: "📐 Le carré dessiné",
          html: `<p>Dessine un carré de côté a + b et découpe-le comme sur la figure : l'aire totale (a + b)² est la somme des quatre régions a², ab, ab, b². Cette preuve géométrique était déjà connue d'Euclide. Avec le widget ci-dessous, construis un carré 5 × 5 : c'est (3 + 2)², et il se découpe en 3² + 3·2 + 2·3 + 2² = 9 + 6 + 6 + 4 = 25 petits carrés.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 5, max: 12 }
        },
        {
          label: "🧊 Le cube d'un binôme",
          html: `<p>(a + b)³ est le volume d'un cube de côté a + b. Avec a = 3 et b = 2, le cube de côté 5 contient 125 petits cubes, qui se répartissent en : un grand cube a³ = 27, trois plaques a²b (3·9·2 = 54), trois barres ab² (3·3·4 = 36) et un petit cube b³ = 8. Total : 27 + 54 + 36 + 8 = 125 ✔. Fais tourner le modèle 3D et compte les petits cubes.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 5, b: 5, c: 5 }
        },
        {
          label: "🔢 Avec les nombres (décomposer et multiplier)",
          html: `<p>Le produit de polynômes est une extension de la multiplication posée. Pense à 23 × 14 : c'est (2·10 + 3)(1·10 + 4). Le produit (2x + 3)(x + 4) avec x = 10 donne exactement le même calcul : 2x² + 11x + 12 → 200 + 110 + 12 = 322. Le polynôme est comme un « nombre en base x », et multiplier des polynômes revient à poser une multiplication sans faire les retenues.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte du calcul littéral",
      nodes: [
        { id: "letterale", label: "Calcul littéral", x: 50, y: 6, color: "#64748b", html: "Utiliser des lettres à la place des nombres.", why: "Viète (1591) introduisit les lettres pour désigner des nombres quelconques, passant de l'algèbre des cas particuliers à celle des règles générales. Descartes (1637) fixa la convention moderne." },
        { id: "monomio", label: "Monôme", x: 20, y: 28, color: "#2563eb", html: "Coefficient × partie littérale ; degré = somme des exposants.", why: "C'est l'« atome » du calcul littéral. Pour additionner, il faut des monômes semblables (même partie littérale), car les lettres représentent des nombres différents et on ne peut pas les « mélanger »." },
        { id: "polinomio", label: "Polynôme", x: 80, y: 28, color: "#16a34a", html: "Somme algébrique de monômes.", why: "Des grandeurs comme les aires et les volumes sont des polynômes en fonction des longueurs des côtés. Plus tard, les polynômes serviront à approcher n'importe quelle fonction (polynômes de Taylor)." },
        { id: "proprieta", label: "Propriétés des opérations", x: 50, y: 50, color: "#f59e0b", html: "Commutativité, associativité, distributivité.", why: "Ce sont les mêmes que dans ℤ et ℚ : toute formule littérale est vraie parce qu'elle l'est pour les nombres. C'est pourquoi (a + b)² peut toujours se développer comme (a + b)(a + b)." },
        { id: "prodotto", label: "Produit de polynômes", x: 18, y: 68, color: "#9333ea", html: "Chaque terme par chaque terme.", why: "C'est la distributivité appliquée deux fois : (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd." },
        { id: "notevoli", label: "Identités remarquables", x: 55, y: 80, color: "#ef4444", html: "Carré d'un binôme, somme par différence, cube.", why: "Elles se démontrent par distributivité et se lisent sur des figures géométriques (Euclide, Livre II ; al-Khwarizmi). Elles servent à simplifier des calculs et à factoriser." },
        { id: "tartaglia", label: "Triangle de Pascal", x: 85, y: 62, color: "#0ea5e9", html: "Coefficients de (a + b)ⁿ.", why: "Chaque coefficient compte de combien de façons on peut choisir a ou b dans chaque parenthèse : c'est un coefficient binomial, et chaque nombre est la somme des deux au-dessus car (a + b)ⁿ = (a + b)(a + b)ⁿ⁻¹." },
        { id: "applicazioni", label: "Démonstrations et problèmes", x: 82, y: 92, color: "#22c55e", html: "Vérités générales, aires, volumes, équations.", why: "Avec les lettres, on démontre qu'une affirmation est vraie pour tous les nombres. C'est le pas qui sépare les mathématiques de l'arithmétique." }
      ],
      edges: [["letterale", "monomio", "briques"], ["letterale", "polinomio", "composé de"], ["monomio", "polinomio", "somme de"], ["proprieta", "prodotto", "garantissent"], ["polinomio", "prodotto", "opération"], ["prodotto", "notevoli", "cas fréquents"], ["notevoli", "tartaglia", "généralisées par"], ["notevoli", "applicazioni", "utilisées dans"]]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>Monôme = nombre × lettres. On n'<b>additionne</b> que des monômes semblables ; dans un <b>produit</b>, on <b>additionne</b> les exposants, dans un <b>quotient</b>, on les <b>soustrait</b>.</li>
<li>Degré d'un polynôme = plus grand degré de ses termes ; degré d'un produit = somme des degrés.</li>
<li>(a ± b)² = a² ± 2ab + b² — et <b>non</b> a² ± b².</li>
<li>(a + b)(a − b) = a² − b² (la différence de deux carrés).</li>
<li>(a ± b)³ = a³ ± 3a²b + 3ab² ± b³ ; coefficients donnés par le triangle de Pascal.</li>
<li>Pour contrôler un résultat, remplace les lettres par des valeurs simples.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : identités remarquables",
      questions: [
        { type: "num", q: "Calcule à l'aide d'une identité remarquable : 103 · 97.", answer: 9991, explain: "(100 + 3)(100 − 3) = 100² − 3² = 10 000 − 9 = 9991." },
        { type: "mc", q: "Quelle expression est égale à (x − 4)² ?", options: ["x² − 16", "x² − 8x + 16", "x² + 8x + 16"], answer: 1, explain: "Le carré du premier, moins le double produit (2·x·4 = 8x), plus le carré du second (16)." },
        { type: "mc", q: "Quel est le coefficient de a²b dans le développement de (a + b)³ ?", options: ["1", "3", "6"], answer: 1, explain: "(a + b)³ = a³ + 3a²b + 3ab² + b³ : la ligne 1-3-3-1 du triangle de Pascal." },
        { type: "tf", q: "(x + y)² est toujours égal à x² + y².", answer: false, explain: "Il manque le double produit 2xy : l'égalité n'est vraie que si xy = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Monôme", d: "Expression littérale formée uniquement de produits de nombres et de lettres (avec des exposants naturels)." },
    { t: "Coefficient", d: "La partie numérique d'un monôme." },
    { t: "Partie littérale", d: "L'ensemble des lettres d'un monôme avec leurs exposants." },
    { t: "Monômes semblables", d: "Monômes ayant la même partie littérale." },
    { t: "Degré d'un monôme", d: "Somme des exposants des lettres (degré total)." },
    { t: "Polynôme", d: "Somme algébrique de monômes." },
    { t: "Forme réduite", d: "Écriture d'un polynôme sans termes semblables ni opérations à effectuer." },
    { t: "Polynôme homogène", d: "Polynôme dont tous les termes ont le même degré." },
    { t: "Identité remarquable", d: "Produit de polynômes dont le résultat a une forme standard, comme (a + b)²." },
    { t: "Triangle de Pascal", d: "Tableau des coefficients binomiaux (en Italie : triangle de Tartaglia) ; la ligne n donne les coefficients de (a + b)ⁿ." },
    { t: "Racine d'un polynôme", d: "Valeur k de la variable pour laquelle P(k) = 0." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Lequel des éléments suivants n'est pas un monôme ?", options: ["−5x²y", "3/x", "(2/3)ab"], answer: 1, explain: "Une lettre au dénominateur n'est pas admise dans un monôme : 3/x est une fraction rationnelle." },
      { type: "num", q: "Quel est le degré total de 4a³b²c ?", answer: 6, explain: "3 + 2 + 1 = 6." },
      { type: "mc", q: "Réduis : 7x²y − 3xy² + 2x²y − xy²", options: ["9x²y − 4xy²", "9x²y + 4xy²", "5x²y − 2xy²"], answer: 0, explain: "Termes semblables : en x²y : 7 + 2 = 9 ; en xy² : −3 − 1 = −4." },
      { type: "mc", q: "Combien vaut (−2a²b)³ ?", options: ["−8a⁶b³", "−6a⁶b³", "8a⁵b³"], answer: 0, explain: "(−2)³ = −8 ; (a²)³ = a⁶ ; b³." },
      { type: "num", q: "Calcule la valeur numérique de 3x² − 2x + 1 pour x = −2.", answer: 17, explain: "3·4 − 2·(−2) + 1 = 12 + 4 + 1 = 17." },
      { type: "mc", q: "Développe (x + 3)(x − 5).", options: ["x² − 2x − 15", "x² + 2x − 15", "x² − 15"], answer: 0, explain: "x² − 5x + 3x − 15 = x² − 2x − 15." },
      { type: "mc", q: "Développe (2a − 3b)².", options: ["4a² − 9b²", "4a² − 12ab + 9b²", "4a² + 12ab + 9b²"], answer: 1, explain: "(2a)² − 2·2a·3b + (3b)² = 4a² − 12ab + 9b²." },
      { type: "num", q: "Calcule à l'aide d'une identité remarquable : 62². Donne le résultat.", answer: 3844, explain: "(60 + 2)² = 3600 + 240 + 4 = 3844." },
      { type: "tf", q: "(a + b)(a − b) = a² − 2ab + b².", answer: false, explain: "Le produit d'une somme par une différence donne a² − b² : les doubles produits s'annulent." },
      { type: "order", q: "Range dans l'ordre les étapes pour multiplier (x + 2)(3x − 1).", items: ["Multiplier x par 3x et par −1", "Multiplier 2 par 3x et par −1", "Écrire tous les produits : 3x² − x + 6x − 2", "Réduire les termes semblables", "Résultat : 3x² + 5x − 2"], explain: "Chaque terme par chaque terme, puis on additionne les termes semblables : −x + 6x = 5x." },
      { type: "text", q: "Comment s'appelle le triangle de nombres (appelé en Italie « triangle de Tartaglia ») qui donne les coefficients de (a + b)ⁿ ?", answer: ["triangle de pascal", "pascal", "le triangle de pascal", "triangle de tartaglia", "tartaglia"], explain: "En France, on l'appelle le triangle de Pascal ; en Italie, le triangle de Tartaglia." }
    ]
  }
});
