TOPIC('fr', {
  id: "l2-mat-radicali",
  title: "Nombres réels et radicaux",
  intro: "Dessine un carré de côté 1 et trace sa diagonale : quelle est sa longueur ? Aucune fraction ne permet de la mesurer exactement. Ce fut l'une des découvertes les plus bouleversantes des mathématiques grecques : il existe des longueurs qui ne sont pas des rapports de nombres entiers. Pour les décrire, il faut les <b>nombres irrationnels</b> et les <b>radicaux</b>. Dans cette leçon, nous complétons l'ensemble des <b>nombres réels</b>, nous apprenons à calculer avec les racines (simplifier, multiplier, additionner) et à <b>rationaliser</b> les fractions qui ont une racine au dénominateur.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Des rationnels aux réels",
      html: `<p>Les années précédentes, tu as rencontré <b>ℕ</b> (entiers naturels), <b>ℤ</b> (entiers relatifs) et <b>ℚ</b> (rationnels : fractions a/b avec b ≠ 0, dont l'écriture décimale est <b>finie ou périodique</b>). Mais cela ne suffit pas. Le nombre dont le carré vaut 2, √2, <b>n'est pas rationnel</b> : son écriture décimale est illimitée et <b>non périodique</b> : 1,41421356237…</p>
<p>Les nombres dont l'écriture décimale est illimitée et non périodique s'appellent <b>irrationnels</b> (notés ℚᶜ ou 𝕀). La réunion des rationnels et des irrationnels forme l'ensemble des <b>nombres réels ℝ</b>. On peut mettre les réels en correspondance un à un avec les points d'une <b>droite</b> : chaque point est un nombre et chaque nombre est un point, sans trous. C'est pourquoi on parle de <b>droite réelle</b>.</p>
<p>Exemples d'irrationnels : √2, √3, √5, le nombre d'or φ = (1 + √5)/2 ≈ 1,618, et les célèbres <b>π</b> ≈ 3,14159… (rapport entre la circonférence et le diamètre) et <b>e</b> ≈ 2,71828… (base des logarithmes népériens). Attention : √4 = 2 et √(9/25) = 3/5 sont des racines de nombres rationnels, mais elles sont rationnelles !</p>
<p>Les <b>valeurs approchées</b> servent dans les calculs pratiques : √2 ≈ 1,41 par défaut (au centième près) et ≈ 1,42 par excès. Pour un irrationnel, on peut toujours donner une <b>valeur approchée par défaut et par excès</b> avec la précision voulue.</p>`
    },
    {
      type: "svg",
      title: "La diagonale du carré de côté 1",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="150" height="150" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<line x1="60" y1="180" x2="210" y2="30" stroke="#ea580c" stroke-width="4"/>
<text x="135" y="205" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">1</text>
<text x="40" y="110" font-size="16" text-anchor="end" fill="#1d4ed8" font-weight="bold">1</text>
<text x="150" y="95" font-size="16" fill="#9a3412" font-weight="bold">d = √2</text>
<text x="240" y="60" font-size="16" fill="#334155">d² = 1² + 1² = 2</text>
<text x="240" y="90" font-size="16" fill="#334155">d ≈ 1,41421356…</text>
<text x="240" y="120" font-size="16" fill="#334155">décimales illimitées et non périodiques</text>
<line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="252" x2="60" y2="268" stroke="#475569" stroke-width="2"/>
<line x1="272" y1="252" x2="272" y2="268" stroke="#475569" stroke-width="2"/>
<line x1="272" y1="260" x2="272" y2="260" stroke="#ea580c"/>
<line x1="60" y1="260" x2="272" y2="260" stroke="#ea580c" stroke-width="5"/>
<circle cx="272" cy="260" r="7" fill="#ea580c"/>
<text x="60" y="288" font-size="16" text-anchor="middle" fill="#334155">0</text>
<text x="272" y="288" font-size="16" text-anchor="middle" fill="#9a3412" font-weight="bold">√2</text>
<text x="132" y="248" font-size="14" text-anchor="middle" fill="#9a3412">reportée au compas</text>
</svg>`,
      caption: "D'après le théorème de Pythagore, la diagonale du carré de côté 1 mesure √2 ; reportée au compas sur la droite, elle place le point du nombre √2."
    },
    {
      type: "text",
      title: "Pourquoi √2 n'est pas rationnel",
      html: `<p>La démonstration, déjà connue des Grecs, est un chef-d'œuvre de raisonnement <b>par l'absurde</b> :</p>
<ol>
<li>Supposons que √2 = a/b avec a et b entiers, la fraction étant <b>irréductible</b> (a et b sans facteur commun).</li>
<li>En élevant au carré : 2 = a²/b², c'est-à-dire <b>a² = 2b²</b>. Donc a² est pair, et par conséquent <b>a est pair</b> (le carré d'un impair est impair) : a = 2k.</li>
<li>En remplaçant : 4k² = 2b² → <b>b² = 2k²</b>, donc <b>b est pair</b> lui aussi.</li>
<li>Mais alors a et b sont tous les deux pairs : la fraction n'était pas irréductible. <b>Contradiction.</b> Donc √2 n'est pas rationnel.</li>
</ol>
<p>Le même raisonnement montre que √n est irrationnel chaque fois que n n'est pas un carré parfait.</p>`
    },
    {
      type: "text",
      title: "Définition de la racine n-ième",
      html: `<p>La <b>racine n-ième</b> d'un nombre réel a, notée ⁿ√a, est le nombre qui, élevé à la puissance n, donne a. Il faut distinguer :</p>
<ul>
<li><b>Indice n pair</b> (racine carrée, quatrième…) : le radicande doit vérifier <b>a ≥ 0</b>, et ⁿ√a est par définition la valeur <b>positive ou nulle</b>. Ainsi √9 = 3 (et non ±3 ; les solutions de x² = 9 sont ±3, mais le symbole √9 désigne seulement 3). De plus √(a²) = <b>|a|</b> : √((−5)²) = √25 = 5, et non −5.</li>
<li><b>Indice n impair</b> (racine cubique…) : le radicande peut être <b>n'importe quel</b> nombre réel, et le signe est conservé : ³√(−8) = −2.</li>
</ul>
<p>Pour les <b>conditions d'existence</b> d'une expression avec radicaux : avec un indice pair, le radicande doit être ≥ 0 (et &gt; 0 si la racine est au dénominateur) ; avec un indice impair, il n'y a pas de restriction. Exemple : √(x − 3) existe pour x ≥ 3 ; 1/√(x − 3) pour x &gt; 3.</p>
<p>Un <b>radical</b> est une expression ⁿ√a ; deux radicaux sont dits <b>semblables</b> s'ils ont le même indice et le même radicande et ne diffèrent que par le coefficient (ex. 3√2 et 5√2).</p>`
    },
    {
      type: "remember",
      title: "Les propriétés des radicaux (a, b ≥ 0)",
      html: `<ul>
<li><b>Propriété d'invariance</b> : ⁿ√(aᵐ) = ⁿᵏ√(aᵐᵏ). Ex. ⁴√4 = √2 (on simplifie par 2 : ⁴√(2²) = √2).</li>
<li><b>Produit</b> : ⁿ√a · ⁿ√b = ⁿ√(a·b) (même indice).</li>
<li><b>Quotient</b> : ⁿ√a : ⁿ√b = ⁿ√(a : b), avec b ≠ 0.</li>
<li><b>Puissance</b> : (ⁿ√a)ᵐ = ⁿ√(aᵐ).</li>
<li><b>Racine d'une racine</b> : ᵐ√(ⁿ√a) = ᵐⁿ√a.</li>
<li><b>Sortir un facteur de la racine</b> : √(a²b) = a√b (si a ≥ 0). <b>Le faire entrer</b> : a√b = √(a²b).</li>
</ul>
<p>⚠️ La somme <b>ne</b> se simplifie <b>pas</b> : √(a + b) ≠ √a + √b. Exemple : √(9 + 16) = 5, alors que 3 + 4 = 7.</p>`
    },
    {
      type: "example",
      title: "Exemple guidé : simplifier",
      html: `<p>Simplifie <b>√72</b> et <b>³√54</b>.</p>
<ul>
<li>√72 : je décompose 72 = 2³ · 3² = 2 · 2² · 3² → √72 = <b>6√2</b> (je sors 2 et 3 : 2·3 = 6).</li>
<li>³√54 : 54 = 2 · 3³ → ³√54 = <b>3·³√2</b> (je sors le 3 d'exposant 3).</li>
</ul>
<p>Règle : décompose en facteurs premiers et sors les facteurs dont l'exposant est <b>au moins égal à l'indice</b> : chaque groupe de n facteurs égaux sous ⁿ√ sort comme 1 seul facteur.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : racines et nombres réels",
      questions: [
        { type: "mc", q: "Lequel de ces nombres est irrationnel ?", options: ["√49", "√50", "√(1/4)"], answer: 1, explain: "√49 = 7 et √(1/4) = 1/2 sont rationnels ; 50 n'est pas un carré parfait, donc √50 est irrationnel." },
        { type: "num", q: "Combien vaut √((−7)²) ?", answer: 7, explain: "√(a²) = |a| : √49 = 7." },
        { type: "mc", q: "Pour quelles valeurs de x √(x − 3) existe-t-elle ?", options: ["x &gt; 3", "x ≥ 3", "pour tout x"], answer: 1, explain: "Le radicande doit être ≥ 0 : x − 3 ≥ 0 → x ≥ 3." }
      ]
    },
    {
      type: "text",
      title: "Opérations sur les radicaux",
      html: `<p><b>Somme et différence.</b> On ne peut additionner <b>que des radicaux semblables</b>, en additionnant les coefficients, comme pour les monômes semblables. Souvent, il faut d'abord <b>simplifier</b>.</p>
<p>Exemple : √8 + √18 − √2 = 2√2 + 3√2 − √2 = <b>4√2</b>.</p>
<p><b>Produit et quotient.</b> Si les indices sont égaux : √6 · √3 = √18 = 3√2 ; √20 : √5 = √4 = 2. Si les indices sont différents, on les <b>ramène au même indice</b> (avec le PPCM des indices) : √2 · ³√2 = ⁶√(2³) · ⁶√(2²) = ⁶√32.</p>
<p><b>Puissance et racine d'une racine.</b> (³√2)² = ³√4 ; √(³√5) = ⁶√5.</p>
<p><b>Identités remarquables avec les radicaux.</b> Toutes les identités remarquables restent valables : (√a + √b)(√a − √b) = a − b, et (√a ± √b)² = a + b ± 2√(ab). Exemples : (√3 + √2)(√3 − √2) = 3 − 2 = <b>1</b> ; (√5 + 1)² = 5 + 1 + 2√5 = <b>6 + 2√5</b>.</p>
<p><b>Comparaison.</b> Pour comparer deux radicaux d'indices différents, on les ramène au même indice : √3 et ³√5 → ⁶√27 et ⁶√25 → √3 &gt; ³√5.</p>`
    },
    {
      type: "text",
      title: "Rationaliser le dénominateur",
      html: `<p><b>Rationaliser</b> une fraction, c'est la transformer en une fraction égale <b>sans racine au dénominateur</b>. C'est utile pour comparer des valeurs et pour les calculs (autrefois, diviser à la main par un nombre comme 1,41421… était pénible ; aujourd'hui l'ordinateur le fait, mais la technique reste précieuse en algèbre).</p>
<p><b>Cas 1 : dénominateur monôme.</b> Multiplie le numérateur et le dénominateur par la racine qui apparaît :</p>
<p style="text-align:center">3/√5 = 3√5 / (√5·√5) = <b>3√5 / 5</b></p>
<p>Avec une racine d'indice n, on multiplie par le radical qui complète l'exposant jusqu'à n : 1/³√2 = ³√4 / (³√2·³√4) = <b>³√4 / 2</b>.</p>
<p><b>Cas 2 : dénominateur binôme avec une racine carrée.</b> On multiplie par l'<b>expression conjuguée</b> (mêmes termes, signe opposé), de sorte que le dénominateur devienne une différence de carrés : (a − b)(a + b) = a² − b².</p>
<p>2/(√5 − 1) = 2(√5 + 1) / ((√5 − 1)(√5 + 1)) = 2(√5 + 1)/(5 − 1) = <b>(√5 + 1)/2</b></p>
<p>1/(√3 + √2) = (√3 − √2) / (3 − 2) = <b>√3 − √2</b></p>`
    },
    {
      type: "example",
      title: "Exemple : la feuille A4",
      html: `<p>Les feuilles de format <b>A</b> (A4, A3…) ont un grand côté égal à <b>√2</b> fois le petit côté. Si le petit côté mesure s, le grand mesure s√2. En pliant la feuille en deux, on obtient un rectangle de petit côté s√2/2 et de grand côté s, et le rapport vaut s : (s√2/2) = 2/√2 = <b>√2</b> : le pliage conserve la forme, donc les formats A sont tous <b>semblables</b> entre eux.</p>
<p>Si le petit côté de l'A4 mesure 21 cm, le grand mesure 21√2 ≈ 29,7 cm : l'A4 mesure en effet 21 × 29,7 cm. En rationalisant le rapport petit côté/grand côté, on obtient 1/√2 = <b>√2/2 ≈ 0,707</b>.</p>`
    },
    {
      type: "widget",
      title: "Le théorème de Pythagore et les radicaux",
      widget: "pythagoras",
      options: {},
      caption: "Essaie des côtés de l'angle droit 1 et 1 : l'hypoténuse vaut √2. Avec 1 et 2, elle vaut √5. Avec 3 et 4, elle vaut 5, un rationnel : seuls certains triplets donnent des nombres entiers."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Le secret des pythagoriciens",
      html: `<p>Selon la tradition, la découverte de l'<b>incommensurabilité</b> de la diagonale du carré avec son côté bouleversa l'école pythagoricienne, convaincue que « tout est nombre », au sens de rapport d'entiers. Une légende, transmise par des sources antiques et dont les historiens doutent dans les détails, attribue la découverte à <b>Hippase de Métaponte</b>, qui aurait été puni pour l'avoir divulguée. Le fait historique demeure : les mathématiciens grecs découvrirent qu'il existe des grandeurs <i>incommensurables</i>, ce qui conduisit Euclide à traiter rigoureusement les proportions dans ses <i>Éléments</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? π n'est pas rationnel",
      html: `<p>L'irrationalité de π fut démontrée en 1761 par <b>Johann Heinrich Lambert</b> ; celle de <b>e</b>, dès 1737 par <b>Euler</b>. En 1882, <b>Ferdinand von Lindemann</b> montra que π est aussi <b>transcendant</b> (il n'est solution d'aucune équation polynomiale à coefficients entiers), ce qui régla le problème millénaire de la <b>quadrature du cercle</b> : construire à la règle et au compas un carré de même aire qu'un cercle donné est impossible.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les radicaux",
      intro: "Un radical n'est pas seulement un symbole à manipuler : voici quelques façons de le voir.",
      tabs: [
        {
          label: "📐 Comme côté d'un carré",
          html: `<p>√a est <b>le côté d'un carré d'aire a</b>. Ainsi √2 est le côté d'un carré d'aire 2 : si l'on double l'aire d'un carré de côté 1, le côté ne double pas, il est multiplié par √2 ≈ 1,41. En général, si l'aire est multipliée par k, le côté est multiplié par √k. Simplifier √72 = 6√2 signifie qu'un carré d'aire 72 a un côté 6 fois plus long qu'un carré d'aire 2 (en effet 6² · 2 = 72).</p>`
        },
        {
          label: "🔢 Valeur approchée à la main",
          html: `<p>Pour estimer √2, on peut procéder par <b>encadrements</b> (méthode par dichotomie) : 1² = 1 &lt; 2 &lt; 4 = 2² ; donc 1 &lt; √2 &lt; 2. J'essaie 1,5 : 2,25 &gt; 2 → 1 &lt; √2 &lt; 1,5 ; j'essaie 1,4 : 1,96 &lt; 2 → 1,4 &lt; √2 &lt; 1,5 ; j'essaie 1,41 : 1,9881 ; 1,42 : 2,0164 → <b>1,41 &lt; √2 &lt; 1,42</b>. Chaque étape fait gagner une décimale. Les Babyloniens (tablette YBC 7289, vers 1800–1600 av. J.-C.) connaissaient pour √2 une valeur d'environ 1,41421, très précise.</p>`
        },
        {
          label: "🔼 Comme puissance fractionnaire",
          html: `<p>On peut écrire ⁿ√a = a<sup>1/n</sup> et, en général, ⁿ√(aᵐ) = a<sup>m/n</sup>. Ainsi les propriétés des radicaux deviennent les propriétés des puissances que tu connais déjà : √a · √a = a^(1/2)·a^(1/2) = a^1 = a ; la racine d'une racine est (a^(1/n))^(1/m) = a^(1/(nm)). Cette notation, utilisée systématiquement par Newton, simplifie les calculs et permet de définir les puissances à exposant réel, base des logarithmes et des fonctions exponentielles.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des nombres réels et des radicaux",
      nodes: [
        { id: "Q", label: "Nombres rationnels ℚ", x: 18, y: 8, color: "#16a34a", html: "Fractions a/b : écritures décimales finies ou périodiques.", why: "Ils naissent du besoin de diviser et de mesurer avec précision, mais ne suffisent pas à mesurer toutes les longueurs." },
        { id: "irr", label: "Irrationnels", x: 82, y: 8, color: "#f59e0b", html: "Écritures décimales illimitées non périodiques : √2, π, e…", why: "La diagonale du carré n'est pas commensurable avec son côté : découverte grecque, démontrable par l'absurde." },
        { id: "R", label: "Nombres réels ℝ", x: 50, y: 30, color: "#6366f1", html: "La réunion des rationnels et des irrationnels : tous les points de la droite.", why: "La correspondance entre les nombres et les points de la droite fait de ℝ le fondement de l'analyse." },
        { id: "rad", label: "Radicaux", x: 20, y: 55, color: "#a855f7", html: "ⁿ√a : le nombre qui, élevé à la puissance n, donne a.", why: "C'est l'opération réciproque de la puissance ; avec un indice pair, il y a la condition d'existence a ≥ 0." },
        { id: "prop", label: "Propriétés", x: 50, y: 62, color: "#0ea5e9", html: "Produit, quotient, puissance, invariance.", why: "Elles découlent des propriétés des puissances : ⁿ√a = a^(1/n)." },
        { id: "op", label: "Opérations", x: 80, y: 55, color: "#ef4444", html: "Simplifier, additionner des radicaux semblables, multiplier, rationaliser.", why: "Écrire les résultats sous une forme standard permet de les comparer et de vérifier des égalités." },
        { id: "raz", label: "Rationalisation", x: 80, y: 85, color: "#14b8a6", html: "Éliminer les racines du dénominateur, avec l'expression conjuguée s'il s'agit d'un binôme.", why: "Elle repose sur l'identité remarquable (a − b)(a + b) = a² − b², qui « fait disparaître » les racines carrées." },
        { id: "geo", label: "Géométrie", x: 20, y: 85, color: "#22c55e", html: "Les racines mesurent des diagonales, des hauteurs, des apothèmes.", why: "Le théorème de Pythagore produit naturellement des radicaux : c'est de là qu'est née la découverte des irrationnels." }
      ],
      edges: [
        ["Q", "R", "se complète en"],
        ["irr", "R", "se complète en"],
        ["R", "rad", "admet"],
        ["rad", "prop", "obéit à"],
        ["prop", "op", "permet"],
        ["op", "raz", "comprend"],
        ["geo", "irr", "les fait découvrir"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : calculs",
      questions: [
        { type: "mc", q: "√12 est égal à…", options: ["2√3", "3√2", "6"], answer: 0, explain: "12 = 2² · 3 → √12 = 2√3." },
        { type: "mc", q: "En rationalisant 6/√3, on obtient…", options: ["2√3", "6√3", "√3/2"], answer: 0, explain: "6√3/3 = 2√3." },
        { type: "num", q: "Calcule (√7 + √3)(√7 − √3).", answer: 4, explain: "Différence de carrés : 7 − 3 = 4." }
      ]
    }
  ],
  glossary: [
    { t: "Nombre irrationnel", d: "Nombre dont l'écriture décimale est illimitée et non périodique ; il ne peut pas s'écrire sous forme de fraction." },
    { t: "Nombres réels", d: "Ensemble ℝ formé des rationnels et des irrationnels : il correspond à tous les points de la droite." },
    { t: "Racine n-ième", d: "ⁿ√a est le nombre qui, élevé à la puissance n, donne a." },
    { t: "Radicande", d: "Le nombre ou l'expression sous le signe radical." },
    { t: "Indice", d: "Le nombre n qui indique la racine (2 pour la racine carrée, 3 pour la racine cubique…)." },
    { t: "Radicaux semblables", d: "Radicaux de même indice et de même radicande : ils s'additionnent comme les monômes semblables." },
    { t: "Propriété d'invariance", d: "Si l'on multiplie ou divise l'indice et l'exposant du radicande par un même nombre, le radical ne change pas." },
    { t: "Rationalisation", d: "Transformation d'une fraction en une fraction égale sans radical au dénominateur." },
    { t: "Expression conjuguée", d: "Le binôme formé des mêmes termes avec le signe opposé au milieu : √a + √b et √a − √b." },
    { t: "Par l'absurde", d: "Démonstration qui part du contraire de la conclusion et aboutit à une contradiction." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quel nombre est irrationnel ?", options: ["√81", "√8", "0,333…"], answer: 1, explain: "√81 = 9 et 0,333… = 1/3 sont rationnels ; √8 = 2√2 est irrationnel." },
      { type: "mc", q: "√75 est égal à…", options: ["5√3", "3√5", "15√5"], answer: 0, explain: "75 = 5² · 3, donc √75 = 5√3." },
      { type: "num", q: "Calcule 3√2 + 5√2 − √2 et donne le coefficient de √2.", answer: 7, explain: "(3 + 5 − 1)√2 = 7√2." },
      { type: "mc", q: "La valeur de √(a²) pour a = −4 est…", options: ["−4", "4", "elle n'existe pas"], answer: 1, explain: "√(a²) = |a| = 4." },
      { type: "mc", q: "Rationalise 4/(√5 − 1).", options: ["√5 + 1", "(√5 + 1)/4", "4(√5 − 1)"], answer: 0, explain: "4(√5 + 1)/(5 − 1) = √5 + 1." },
      { type: "num", q: "Calcule (√5 + 2)(√5 − 2).", answer: 1, explain: "5 − 4 = 1." },
      { type: "tf", q: "√(a + b) = √a + √b pour tous a, b ≥ 0.", answer: false, explain: "√(9 + 16) = 5, mais √9 + √16 = 7." },
      { type: "mc", q: "L'expression √(2x − 6) a un sens pour…", options: ["x ≥ 3", "x &gt; 6", "tout x"], answer: 0, explain: "2x − 6 ≥ 0 → x ≥ 3." },
      { type: "order", q: "Remets dans l'ordre les étapes de la démonstration de l'irrationalité de √2.", items: ["On suppose √2 = a/b avec une fraction irréductible", "On obtient a² = 2b², donc a est pair", "On obtient que b est pair lui aussi", "Contradiction avec le fait que la fraction est irréductible"], explain: "Le raisonnement par l'absurde aboutit à deux nombres pairs dans une fraction censée être irréductible." },
      { type: "text", q: "Comment appelle-t-on le binôme √a − √b par rapport à √a + √b, utilisé pour rationaliser ?", answer: ["conjugué", "expression conjuguée", "l'expression conjuguée", "le conjugué", "quantité conjuguée"], explain: "L'expression conjuguée : en multipliant, on obtient a − b." }
    ]
  }
});
