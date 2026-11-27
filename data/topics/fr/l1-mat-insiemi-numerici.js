TOPIC('fr', {
  id: "l1-mat-insiemi-numerici",
  title: "Entiers naturels, entiers relatifs et rationnels",
  intro: "Compter des moutons, noter une dette, partager une pizza en parts égales : au fil de l'histoire, chaque problème de la vie quotidienne a exigé une nouvelle sorte de nombres. Des <b>entiers naturels</b> aux <b>entiers relatifs</b> jusqu'aux <b>rationnels</b>, nous construisons pas à pas un système où chaque addition, soustraction, multiplication et division (sauf par zéro) a toujours un résultat. Dans cette leçon, nous revoyons avec rigueur les <b>propriétés des opérations</b>, les <b>puissances</b>, les <b>fractions</b> et les <b>nombres décimaux périodiques</b>, avec une question en toile de fond : pourquoi avons-nous toujours besoin de nouveaux nombres ?",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "ℕ, ℤ, ℚ : trois ensembles, trois besoins",
      html: `<p>Les <b>entiers naturels</b> ℕ = {0, 1, 2, 3, …} servent à compter. Dans ℕ, l'addition et la multiplication donnent toujours un entier naturel (on dit que ℕ est <b>stable</b> pour ces opérations), mais pas la soustraction : 3 − 5 n'est pas un entier naturel.</p>
<p>C'est pourquoi on introduit les <b>entiers relatifs</b> ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}, qui contiennent les <b>opposés</b> des entiers naturels. Dans ℤ, on peut toujours calculer des sommes, des différences et des produits. Mais 7 : 2 n'est pas un entier.</p>
<p>Pour que la division (par un nombre non nul) soit toujours possible, on construit les <b>nombres rationnels</b> ℚ, c'est-à-dire ceux qui peuvent s'écrire sous forme de <b>fraction</b> a/b avec a ∈ ℤ et b ∈ ℤ, b ≠ 0. Par exemple 3/4, −5/2, 7 = 7/1.</p>
<p>On a les inclusions <b>ℕ ⊂ ℤ ⊂ ℚ</b>. Chaque étape « résout » une équation qui n'avait pas de solution auparavant : x + 5 = 3 a une solution dans ℤ (x = −2), 2x = 7 dans ℚ (x = 7/2). Mais l'extension n'est pas terminée : x² = 2 n'a pas de solution dans ℚ, et c'est pour cela qu'il faut les nombres réels (tu les verras dans les années à venir).</p>
<p>Retiens les notations : ℤ⁺ (positifs), ℤ⁻ (négatifs), ℤ* (sans le zéro), ℚ⁺, etc. Le <b>zéro</b> est un entier naturel dans de nombreux manuels ; certains auteurs excluent le zéro de ℕ et écrivent ℕ₀ pour l'inclure.</p>`
    },
    {
      type: "svg",
      title: "Les ensembles de nombres emboîtés",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="300" cy="150" rx="280" ry="135" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<ellipse cx="300" cy="165" rx="205" ry="100" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="180" rx="125" ry="62" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="42" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">ℚ : fractions a/b (b ≠ 0)  ·  2/3, −5/4, 0,(3)</text>
<text x="300" y="96" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ℤ : …, −2, −1, 0, 1, 2, …</text>
<text x="300" y="187" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ℕ : 0, 1, 2, 3, …</text>
<text x="300" y="270" font-size="16" text-anchor="middle" fill="#334155">Hors de ℚ, il y a des nombres comme √2 et π : tu les rencontreras avec les réels.</text>
</svg>`,
      caption: "Chaque ensemble contient le précédent : tout entier naturel est un entier relatif, tout entier relatif est un rationnel (n = n/1)."
    },
    {
      type: "text",
      title: "Les propriétés des opérations",
      html: `<p>Les opérations obéissent à des règles précises. Soient a, b, c des nombres quelconques :</p>
<table>
<tr><th>Propriété</th><th>Addition</th><th>Multiplication</th></tr>
<tr><td><b>Commutativité</b></td><td>a + b = b + a</td><td>a · b = b · a</td></tr>
<tr><td><b>Associativité</b></td><td>(a + b) + c = a + (b + c)</td><td>(a · b) · c = a · (b · c)</td></tr>
<tr><td><b>Élément neutre</b></td><td>a + 0 = a</td><td>a · 1 = a</td></tr>
<tr><td><b>Symétrique</b></td><td>opposé : a + (−a) = 0 (dans ℤ et ℚ)</td><td>inverse : a · (1/a) = 1, si a ≠ 0 (dans ℚ)</td></tr>
</table>
<p>La <b>distributivité</b> relie les deux opérations : <b>a · (b + c) = a·b + a·c</b>. C'est la règle qui permet de « développer » (enlever les parenthèses) et, inversement, de « factoriser » : 7·38 + 7·62 = 7·(38 + 62) = 700.</p>
<p>La soustraction et la division ne sont <b>ni</b> commutatives <b>ni</b> associatives : 8 − 3 ≠ 3 − 8 et (20 : 4) : 5 = 1 ≠ 20 : (4 : 5) = 25. Mais on peut les <b>ramener</b> aux deux autres : a − b = a + (−b) et a : b = a · (1/b). Ainsi, dans ℚ, la règle des signes devient simple : le produit de deux nombres est positif si les facteurs ont le même signe, négatif sinon.</p>
<p>Autres propriétés utiles : la <b>propriété de conservation</b> de la différence (a − b = (a + k) − (b + k)) et du quotient (a : b = (a·k) : (b·k), k ≠ 0), la <b>règle du produit nul</b> (a·b = 0 ⇒ a = 0 ou b = 0), et le fait qu'<b>on ne peut pas diviser par zéro</b> : 5 : 0 n'a pas de sens (aucun nombre multiplié par 0 ne donne 5), et 0 : 0 est indéterminé (n'importe quel nombre multiplié par 0 donne 0).</p>
<p><b>Priorités opératoires</b> : d'abord les parenthèses (rondes, crochets, accolades, de l'intérieur vers l'extérieur), puis les puissances, puis les multiplications et divisions (de gauche à droite), enfin les additions et soustractions. Exemple : 2 + 3 · 4² − (10 − 4) : 2 = 2 + 3·16 − 6 : 2 = 2 + 48 − 3 = 47.</p>`
    },
    {
      type: "example",
      title: "Exemple : le calcul mental grâce aux propriétés",
      html: `<p>Les propriétés ne sont pas que du formalisme : elles servent à calculer plus vite.</p>
<ul>
<li><b>25 · 37 · 4</b> : par commutativité et associativité, (25 · 4) · 37 = 100 · 37 = <b>3700</b>.</li>
<li><b>99 · 46</b> : 99 = 100 − 1, donc 99·46 = 100·46 − 46 = 4600 − 46 = <b>4554</b> (distributivité).</li>
<li><b>1000 − 487</b> : par conservation de la différence (j'ajoute 13 aux deux termes) = 1013 − 500 = <b>513</b>.</li>
<li><b>2,5 · 48</b> = (10/4) · 48 = 10 · 12 = <b>120</b>.</li>
</ul>
<p>Selon la tradition, le jeune Gauss calcula à l'école 1 + 2 + … + 100 en regroupant les nombres en 50 paires de somme 101 : 50 · 101 = 5050. Une utilisation brillante de la commutativité, de l'associativité et de la distributivité !</p>`
    },
    {
      type: "text",
      title: "Les puissances",
      html: `<p>La <b>puissance</b> a<sup>n</sup> (avec n entier naturel) est le produit de n facteurs égaux à a : a<sup>n</sup> = a·a·…·a. a est la <b>base</b>, n l'<b>exposant</b>. Extensions importantes :</p>
<ul>
<li>a<sup>1</sup> = a ;</li>
<li><b>a<sup>0</sup> = 1</b> pour a ≠ 0 (0<sup>0</sup> est indéterminé) ;</li>
<li><b>a<sup>−n</sup> = 1/a<sup>n</sup></b> = (1/a)<sup>n</sup> pour a ≠ 0 : 2<sup>−3</sup> = 1/8, (2/3)<sup>−2</sup> = 9/4.</li>
</ul>
<p>Propriétés (a, b ≠ 0 ; m, n entiers) :</p>
<table>
<tr><td>Produit de puissances de même base</td><td>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></td></tr>
<tr><td>Quotient de puissances de même base</td><td>a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup></td></tr>
<tr><td>Puissance d'une puissance</td><td>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></td></tr>
<tr><td>Produit de même exposant</td><td>a<sup>n</sup> · b<sup>n</sup> = (a·b)<sup>n</sup></td></tr>
<tr><td>Quotient de même exposant</td><td>a<sup>n</sup> : b<sup>n</sup> = (a : b)<sup>n</sup></td></tr>
</table>
<p>Pourquoi a<sup>0</sup> = 1 ? Parce qu'on doit avoir a<sup>n</sup> : a<sup>n</sup> = a<sup>n−n</sup> = a<sup>0</sup>, alors que ce quotient vaut 1. Pourquoi a<sup>−n</sup> = 1/a<sup>n</sup> ? Parce que a<sup>0</sup> = a<sup>n</sup> · a<sup>−n</sup> = 1. Les définitions sont choisies pour que les propriétés restent toujours vraies : c'est ainsi qu'on étend une notion en mathématiques.</p>
<p><b>Attention aux signes</b> : (−2)<sup>2</sup> = 4, mais −2<sup>2</sup> = −4 (la puissance est prioritaire sur le signe moins). Une puissance de base négative est positive si l'exposant est pair, négative s'il est impair. De plus, (a + b)<sup>2</sup> n'est <b>pas</b> égal à a<sup>2</sup> + b<sup>2</sup> : tu le verras bientôt avec les identités remarquables.</p>
<p>Les puissances de 10 donnent l'<b>écriture scientifique</b> : 300 000 000 = 3 · 10<sup>8</sup> ; 0,00000052 = 5,2 · 10<sup>−7</sup>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : propriétés et puissances",
      questions: [
        { type: "num", q: "Calcule : 2 + 3 · 4² − (10 − 4) : 2", answer: 47, explain: "Puissances : 4² = 16 ; puis 3 · 16 = 48 ; (10 − 4) : 2 = 3. Donc 2 + 48 − 3 = 47." },
        { type: "num", q: "Calcule : 2⁵ · 2⁻² : 2²", answer: 2, explain: "Les bases sont égales : exposant 5 − 2 − 2 = 1, donc 2¹ = 2." },
        { type: "mc", q: "Combien vaut −3² ?", options: ["9", "−9", "6"], answer: 1, explain: "La puissance se calcule avant le signe moins : −(3²) = −9. En revanche (−3)² = 9." },
        { type: "tf", q: "La division est une opération commutative.", answer: false, explain: "Par exemple 8 : 2 = 4 mais 2 : 8 = 1/4." }
      ]
    },
    {
      type: "text",
      title: "Les fractions et les nombres rationnels",
      html: `<p>Une <b>fraction</b> a/b désigne a parts d'une unité partagée en b parts égales (b = <b>dénominateur</b>, a = <b>numérateur</b>). Deux fractions sont <b>égales</b> (ou équivalentes) si elles représentent le même nombre : a/b = c/d ⇔ a·d = b·c. En multipliant ou en divisant le numérateur et le dénominateur par un même nombre non nul, on obtient une fraction égale : 2/3 = 4/6 = 10/15. Un nombre rationnel est la classe de toutes les fractions égales entre elles. On rend une fraction <b>irréductible</b> en divisant par le PGCD : 18/24 = 3/4.</p>
<p><b>Opérations dans ℚ</b> :</p>
<ul>
<li><b>Somme/différence</b> : on réduit au même dénominateur (PPCM) : 1/6 + 3/4 = 2/12 + 9/12 = 11/12.</li>
<li><b>Produit</b> : numérateur par numérateur, dénominateur par dénominateur (en simplifiant d'abord !) : (4/9) · (3/8) = 12/72 = 1/6.</li>
<li><b>Quotient</b> : on multiplie par l'<b>inverse</b> du diviseur : (3/5) : (9/10) = 3/5 · 10/9 = 30/45 = 2/3.</li>
<li><b>Comparaison</b> : on réduit au même dénominateur et on compare les numérateurs : 5/8 &gt; 3/5, car 25/40 &gt; 24/40. Ou bien on compare les produits « en croix » : 5·5 = 25 &gt; 3·8 = 24.</li>
</ul>
<p>Les rationnels sont <b>denses</b> : entre deux rationnels, il y en a toujours un autre (par exemple leur moyenne). Il y a donc une infinité de rationnels entre 0 et 1, sans « nombre suivant » : contrairement aux entiers naturels, on ne peut pas dire quel est le successeur de 1/2. Pourtant, il reste des « trous » sur la droite numérique : √2 n'est pas rationnel, comme l'avaient déjà découvert les pythagoriciens (Ve siècle av. J.-C.) grâce à un raisonnement par l'absurde.</p>`
    },
    {
      type: "example",
      title: "Exemple : les recettes et les fractions",
      html: `<p>Une recette pour 4 personnes demande 3/4 de litre de lait, mais tu cuisines pour 6. Et tu n'as qu'1 litre. Est-ce suffisant ?</p>
<ol>
<li>Coefficient d'échelle : 6/4 = 3/2.</li>
<li>Lait nécessaire : (3/4) · (3/2) = 9/8 de litre = 1 + 1/8 de litre = 1,125 L.</li>
<li>Comparaison avec 1 L = 8/8 : 9/8 &gt; 8/8 → <b>ce n'est pas suffisant</b>, il manque 1/8 de litre (125 mL).</li>
</ol>
<p>Autre exemple, en négatif : ta banque te prélève 2/5 d'une dette de 150 € : (−150) · (2/5) = −60 €. Le produit d'un nombre négatif par un nombre positif est négatif.</p>`
    },
    {
      type: "text",
      title: "Nombres décimaux : finis et périodiques",
      html: `<p>Toute fraction peut être transformée en <b>écriture décimale</b> en effectuant la division. Deux cas sont possibles :</p>
<ul>
<li>la division <b>s'arrête</b> : <b>décimal fini</b> (nombre décimal). 3/4 = 0,75 ; 7/20 = 0,35 ;</li>
<li>la division <b>ne s'arrête pas</b> mais les chiffres se répètent : <b>développement décimal périodique</b>. 1/3 = 0,3333… = 0,<span style="text-decoration:overline">3</span> (on écrit 0,(3)) ; 5/6 = 0,8333… = 0,8(3) ; 1/7 = 0,(142857).</li>
</ul>
<p>Pourquoi cela se répète-t-il toujours ? En divisant par b, il n'y a que b restes possibles (de 0 à b − 1) : après au plus b étapes, un reste réapparaît et, à partir de là, tout se répète. Le groupe de chiffres répétés est la <b>période</b> ; les chiffres entre la virgule et la période forment l'<b>antépériode</b>.</p>
<p><b>Critère</b> : une fraction irréductible donne un décimal <b>fini</b> si son dénominateur n'a pour seuls facteurs premiers que 2 et/ou 5 (c'est-à-dire les facteurs de 10) ; sinon, son développement est <b>périodique</b>. Par exemple 7/20 (20 = 2²·5) est fini ; 7/12 (12 = 2²·3) est périodique mixte.</p>
<p><b>Fraction génératrice</b> (du décimal à la fraction) :</p>
<ul>
<li><b>Périodique simple</b> : numérateur = le nombre sans la virgule, <i>moins</i> la partie entière ; dénominateur = autant de 9 que de chiffres dans la période. 2,(45) = (245 − 2)/99 = 243/99 = 27/11.</li>
<li><b>Périodique mixte</b> : numérateur = le nombre sans la virgule jusqu'à la période incluse, <i>moins</i> le nombre jusqu'à l'antépériode ; dénominateur = autant de 9 que de chiffres dans la période, suivis d'autant de 0 que de chiffres dans l'antépériode. 0,1(6) = (16 − 1)/90 = 15/90 = 1/6 ; 3,2(7) = (327 − 32)/90 = 295/90 = 59/18.</li>
</ul>
<p>Une curiosité : <b>0,(9) = 1</b>. En effet, 0,(9) = 9/9 = 1. Autre façon de le voir : 1/3 = 0,(3), donc 3 · (1/3) = 3 · 0,(3) = 0,(9), et en même temps cela vaut 1. Il n'y a aucun nombre entre 0,(9) et 1 : c'est le même nombre écrit de deux façons.</p>`
    },
    {
      type: "example",
      title: "Exemple : de la fraction au décimal, et retour",
      html: `<p><b>De la fraction au décimal</b> : 5/7 = 0,714285 714285… = 0,(714285), période de 6 chiffres. Pour 7, les restes possibles sont 1, …, 6 : la période de 1/7 utilise tous les restes, c'est pourquoi elle est si longue.</p>
<p><b>Du décimal à la fraction</b> : transforme 0,(36).</p>
<ol>
<li>C'est un périodique simple de partie entière 0 et de période 36 (deux chiffres) : 36/99.</li>
<li>Je simplifie par 9 : 36/99 = 4/11.</li>
<li>Vérification : 4 : 11 = 0,363636… ✔</li>
</ol>
<p>Avec cette méthode, on reconnaît tout décimal périodique (et tout décimal fini) comme un nombre rationnel. Inversement, un nombre ayant une infinité de décimales <b>non périodiques</b>, comme 0,1011011101111…, ne peut pas être rationnel : c'est un nombre irrationnel.</p>`
    },
    {
      type: "widget",
      title: "À quel ensemble appartient-il ?",
      widget: "classify",
      options: { groups: ["Entier naturel", "Entier relatif non naturel", "Rationnel non entier", "Ni rationnel ni entier"], items: [
        ["7", 0], ["0", 0], ["√16", 0],
        ["−4", 1], ["−12", 1], ["−20 : 5", 1],
        ["3/4", 2], ["−2/5", 2], ["0,(3)", 2], ["2,5", 2],
        ["√2", 3], ["π", 3]
      ] },
      caption: "√16 = 4 est un entier naturel ; −20 : 5 = −4 est un entier relatif ; 0,(3) = 1/3 est rationnel ; √2 et π ne sont pas rationnels."
    },
    {
      type: "curiosity",
      title: "Le nombre qui scandalisa les pythagoriciens",
      html: `<p>Les pythagoriciens croyaient que « tout est nombre », c'est-à-dire rapport d'entiers. Mais en appliquant leur propre théorème au carré de côté 1, la diagonale mesure √2, et <b>il n'existe pas deux entiers a et b tels que (a/b)² = 2</b>. La démonstration se fait par l'absurde : si a/b était irréductible, a² = 2b² rendrait a pair, donc a = 2k et 4k² = 2b² → b² = 2k² → b serait pair lui aussi, ce qui contredit l'hypothèse que a/b est irréductible. Selon une légende (dont les historiens doutent), le pythagoricien Hippase de Métaponte, qui révéla l'existence des grandeurs incommensurables, aurait été jeté à la mer. Cette découverte des « nombres irrationnels » changea pour toujours les mathématiques grecques.</p>`
    },
    {
      type: "curiosity",
      title: "Le zéro et les nombres négatifs ont eu une histoire difficile",
      html: `<p>Le zéro en tant que véritable nombre a été développé en Inde : dans le <i>Brahmasphutasiddhanta</i> (628 apr. J.-C.), Brahmagupta en donne les règles de calcul, ainsi que les règles des nombres négatifs, interprétés comme des « dettes » (les positifs étaient des « biens »). En Europe, les nombres négatifs ont été acceptés avec beaucoup de retard : au XVIe siècle encore, de nombreux mathématiciens les appelaient « nombres absurdes » ou « fictifs ». Léonard de Pise (Fibonacci), dans le <i>Liber abaci</i> (1202), apporta en Europe les chiffres indo-arabes et le zéro, mais il fallut des siècles pour qu'ils se répandent. Les signes + et − apparurent dans les livres imprimés à la fin du XVe siècle.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les nombres et les fractions",
      intro: "Si la règle des signes ou les fractions te semblent des formules à apprendre par cœur, essaie ces images.",
      tabs: [
        {
          label: "🍕 La pizza",
          html: `<p>Une fraction n/d, c'est une pizza coupée en d parts égales dont on prend n parts. Fais glisser les curseurs pour voir que 2/3 et 4/6 couvrent la <b>même quantité</b> de pizza : des fractions égales ne sont que des façons différentes de couper la même pizza. Additionner 1/2 et 1/3, c'est trouver un découpage (en sixièmes) qui convient aux deux : 3/6 + 2/6 = 5/6.</p>`,
          widget: "fractionPie",
          options: { n: 2, d: 3 }
        },
        {
          label: "🌡️ La droite et la température",
          html: `<p>Les nombres relatifs sont les nombres des thermomètres : s'il fait −3 °C et que la température monte de 5 °C, j'arrive à +2 °C. Sur la droite, ajouter un nombre positif, c'est faire un saut vers la droite ; ajouter un nombre négatif, un saut vers la gauche. Multiplier par −1 revient à prendre le « symétrique » par rapport à zéro. Essaie : pars de −3 et fais un saut de 5.</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 5, start: -3 }
        },
        {
          label: "💰 Biens et dettes",
          html: `<p>La façon dont les mathématiciens indiens du VIIe siècle les concevaient : positif = gain, négatif = dette.</p>
<ul>
<li>(+5) + (−3) : j'ai 5 € et je dois 3 € : il me reste 2 €.</li>
<li>(−5) − (−3) : j'ai une dette de 5 € et on m'<b>enlève</b> une dette de 3 € : la dette descend à 2 €, c'est-à-dire −2.</li>
<li>(−4) · (+3) : trois dettes de 4 € = −12 €.</li>
<li>(−4) · (−3) : j'<b>enlève</b> trois dettes de 4 € = +12 €. Voilà pourquoi « moins par moins donne plus ».</li>
</ul>`
        },
        {
          label: "📏 0,(9) = 1 avec une astuce",
          html: `<p>Soit x = 0,999… Je multiplie par 10 : 10x = 9,999… Je soustrais : 10x − x = 9,999… − 0,999… = 9, donc 9x = 9 et <b>x = 1</b>. La même astuce fonctionne pour tout développement périodique : pour x = 0,(36), je multiplie par 100 : 100x = 36,(36), je soustrais x : 99x = 36, donc x = 36/99. C'est la démonstration de la règle de la fraction génératrice.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des nombres",
      nodes: [
        { id: "naturali", label: "Entiers naturels ℕ", x: 15, y: 8, color: "#2563eb", html: "0, 1, 2, 3, … : ils servent à compter.", why: "Ce sont les premiers nombres de l'histoire : des encoches sur des os remontent à plus de 20 000 ans. Peano (1889) les a axiomatisés : 0 est un nombre, tout nombre a un successeur, le principe de récurrence est vrai." },
        { id: "interi", label: "Entiers relatifs ℤ", x: 50, y: 22, color: "#16a34a", html: "Les entiers naturels et leurs opposés : …, −2, −1, 0, 1, …", why: "Ils rendent la soustraction toujours possible. Introduits avec l'idée de dette par Brahmagupta (628 apr. J.-C.), ils n'ont été acceptés en Europe qu'aux XVIe-XVIIe siècles." },
        { id: "razionali", label: "Rationnels ℚ", x: 80, y: 40, color: "#f59e0b", html: "Fractions a/b avec b ≠ 0.", why: "Ils rendent la division (par un nombre non nul) toujours possible. Ils naissent de la mesure : si une longueur n'est pas un multiple de l'unité, on l'exprime par une fraction. Les Égyptiens utilisaient déjà des fractions unitaires." },
        { id: "proprieta", label: "Propriétés des opérations", x: 20, y: 38, color: "#9333ea", html: "Commutativité, associativité, distributivité, éléments neutres et symétriques.", why: "Ce sont les « axiomes » de l'algèbre : ℚ est un corps. Toutes les techniques du calcul littéral (bientôt) découlent de ces règles." },
        { id: "potenze", label: "Puissances", x: 12, y: 66, color: "#ef4444", html: "Produit répété : aⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.", why: "Les définitions de a⁰ et a⁻ⁿ sont choisies pour que les propriétés restent vraies : les mathématiques étendent les notions en conservant les règles." },
        { id: "frazioni", label: "Fractions et opérations", x: 50, y: 62, color: "#0ea5e9", html: "Égalité de fractions, dénominateur commun, inverse.", why: "La règle de l'inverse vient du fait que diviser par b, c'est trouver le nombre qui, multiplié par b, donne le dividende : x·b = a → x = a/b." },
        { id: "decimali", label: "Décimaux finis et périodiques", x: 85, y: 78, color: "#22c55e", html: "Écritures en base 10 des rationnels.", why: "La division n'a qu'un nombre fini de restes possibles, donc elle s'arrête ou se répète : tout rationnel a une écriture décimale finie ou périodique, et réciproquement." },
        { id: "irrazionali", label: "Au-delà de ℚ : les irrationnels", x: 55, y: 92, color: "#64748b", html: "√2, π : une infinité de décimales non périodiques.", why: "La découverte de √2 (pythagoriciens, Ve siècle av. J.-C.) a montré que les fractions ne suffisent pas pour mesurer toutes les longueurs : il faut les nombres réels." }
      ],
      edges: [["naturali", "interi", "extension"], ["interi", "razionali", "extension"], ["naturali", "proprieta", "opérations"], ["proprieta", "potenze", "étendent"], ["razionali", "frazioni", "écrits comme"], ["frazioni", "decimali", "division"], ["razionali", "decimali", "ont"], ["decimali", "irrazionali", "la limite"]]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul>
<li>ℕ ⊂ ℤ ⊂ ℚ : chaque ensemble résout une nouvelle équation (soustraction, division).</li>
<li>Propriétés : commutativité, associativité, distributivité ; la soustraction et la division ne sont <b>ni</b> commutatives <b>ni</b> associatives ; on ne divise jamais par 0.</li>
<li>a⁰ = 1 ; a⁻ⁿ = 1/aⁿ ; aᵐ·aⁿ = aᵐ⁺ⁿ ; (aᵐ)ⁿ = aᵐⁿ. Attention : −2² = −4 mais (−2)² = 4.</li>
<li>Fractions : diviser par une fraction = multiplier par son inverse.</li>
<li>Décimal fini si le dénominateur (irréductible) ne contient que 2 et 5 ; sinon périodique. Fraction génératrice : 0,(a) = a/9, etc.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : fractions et décimaux",
      questions: [
        { type: "num", q: "Calcule : 1/6 + 3/4 (donne le résultat en douzièmes, c'est-à-dire le numérateur sur le dénominateur 12).", answer: 11, explain: "1/6 = 2/12 et 3/4 = 9/12 ; la somme est 11/12 : le numérateur est 11." },
        { type: "mc", q: "Quelle est la fraction génératrice de 0,(6) ?", options: ["6/10", "2/3", "6/100"], answer: 1, explain: "0,(6) = 6/9 = 2/3." },
        { type: "mc", q: "Quelle fraction a une écriture décimale périodique ?", options: ["3/8", "7/20", "5/12"], answer: 2, explain: "12 = 2²·3 contient le facteur 3, donc 5/12 = 0,41(6). 8 = 2³ et 20 = 2²·5 donnent des décimaux finis (0,375 et 0,35)." },
        { type: "tf", q: "0,(9) est un nombre inférieur à 1.", answer: false, explain: "0,(9) = 9/9 = 1 : c'est le même nombre." }
      ]
    }
  ],
  glossary: [
    { t: "Entiers naturels (ℕ)", d: "Les nombres 0, 1, 2, 3, … utilisés pour compter." },
    { t: "Entiers relatifs (ℤ)", d: "Les entiers naturels et leurs opposés négatifs." },
    { t: "Nombres rationnels (ℚ)", d: "Nombres qui peuvent s'écrire sous forme de fraction a/b d'entiers avec b ≠ 0." },
    { t: "Stabilité", d: "Un ensemble est stable pour une opération si le résultat appartient encore à l'ensemble." },
    { t: "Opposé", d: "Le nombre −a qui, ajouté à a, donne 0." },
    { t: "Inverse", d: "Le nombre 1/a qui, multiplié par a (≠ 0), donne 1." },
    { t: "Distributivité", d: "a·(b + c) = a·b + a·c." },
    { t: "Puissance", d: "aⁿ : produit de n facteurs égaux à a ; pour les exposants négatifs, a⁻ⁿ = 1/aⁿ." },
    { t: "Fractions égales", d: "Fractions qui représentent le même nombre rationnel." },
    { t: "Période", d: "Groupe de chiffres qui se répète indéfiniment après la virgule." },
    { t: "Fraction génératrice", d: "La fraction qui donne un développement décimal périodique donné." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quelle équation n'a pas de solution dans ℕ mais en a une dans ℤ ?", options: ["x + 4 = 9", "x + 7 = 3", "2x = 7"], answer: 1, explain: "x + 7 = 3 donne x = −4 : entier relatif, pas naturel. 2x = 7 n'a pas de solution dans ℤ, seulement dans ℚ." },
      { type: "num", q: "Calcule : 5 − 2 · (3 − 7) + 6 : 3", answer: 15, explain: "3 − 7 = −4 ; 2 · (−4) = −8 ; 5 + 8 = 13 ; 6 : 3 = 2 ; 13 + 2 = 15." },
      { type: "num", q: "Calcule : (2³ · 2⁻⁵) : 2⁻² (résultat sous forme de nombre).", answer: 1, explain: "Exposants : 3 − 5 − (−2) = 0, donc 2⁰ = 1." },
      { type: "num", q: "Calcule : (3/5) : (9/10) et écris le résultat sous forme décimale (arrondi à deux chiffres après la virgule).", answer: 0.67, tol: 0.01, explain: "(3/5) · (10/9) = 30/45 = 2/3 ≈ 0,67." },
      { type: "mc", q: "Quelle est la forme irréductible de 18/24 ?", options: ["3/4", "9/12", "6/8"], answer: 0, explain: "PGCD(18, 24) = 6 : 18/24 = 3/4. Les deux autres ne sont pas irréductibles." },
      { type: "mc", q: "Quelle est la fraction génératrice de 0,1(6) ?", options: ["16/100", "1/6", "16/99"], answer: 1, explain: "(16 − 1)/90 = 15/90 = 1/6." },
      { type: "num", q: "Quelle est la fraction génératrice de 2,(3) ? Donne le numérateur de la fraction irréductible.", answer: 7, explain: "2,(3) = (23 − 2)/9 = 21/9 = 7/3." },
      { type: "tf", q: "La fraction 7/40 a une écriture décimale finie.", answer: true, explain: "40 = 2³·5 : uniquement des facteurs 2 et 5. 7/40 = 0,175." },
      { type: "tf", q: "Entre deux nombres rationnels différents, il existe toujours un autre nombre rationnel.", answer: true, explain: "C'est la densité de ℚ : la moyenne (a + b)/2 est comprise entre les deux." },
      { type: "order", q: "Range du plus petit au plus grand.", items: ["−3/2", "−1", "0,(3)", "2/3", "1,5"], explain: "−1,5 < −1 < 0,333… < 0,666… < 1,5." },
      { type: "text", q: "Comment s'appelle le nombre par lequel il faut multiplier un nombre (≠ 0) pour obtenir 1 ?", answer: ["inverse", "l'inverse", "un inverse", "inverse multiplicatif"], explain: "C'est l'inverse : l'inverse (multiplicatif) de a est 1/a." }
    ]
  }
});
