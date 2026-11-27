TOPIC('fr', {
  id: "l1-mat-frazioni-algebriche",
  title: "Fractions rationnelles",
  intro: "Les fractions de nombres, tu les connais depuis des années. Que se passe-t-il si le numérateur et le dénominateur contiennent des <b>lettres</b> ? On obtient des <b>fractions rationnelles</b> (ou fractions algébriques) : elles servent à décrire des vitesses moyennes, des résistances électriques, des rapports entre grandeurs qui varient. Le secret est unique : tout ce que tu sais sur les fractions reste vrai, mais il faut se méfier d'un ennemi, le <b>dénominateur qui s'annule</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Qu'est-ce qu'une fraction rationnelle",
      html: `<p>Une <b>fraction rationnelle</b> est une expression de la forme <b>A / B</b> où A et B sont des polynômes et B <b>n'est pas le polynôme nul</b>. Par exemple :</p>
<p style="text-align:center">(x + 1)/(x − 3) &nbsp;&nbsp;&nbsp; 5/(x² − 4) &nbsp;&nbsp;&nbsp; (a² + b)/(2a)</p>
<p>Une fraction rationnelle n'est pas toujours un nombre : cela dépend de la valeur qu'on donne aux lettres. Et pour certaines valeurs, elle <b>n'existe pas</b> : la division par zéro est impossible. Donc :</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Conditions d'existence (CE)</b> : ce sont les valeurs des lettres pour lesquelles le dénominateur est <b>différent de zéro</b>. On les trouve en posant <b>dénominateur ≠ 0</b>. Les valeurs exclues s'appellent les <b>valeurs interdites</b>.</p>
<p>Exemple : pour 5/(x² − 4), on impose x² − 4 ≠ 0, c'est-à-dire (x − 2)(x + 2) ≠ 0, donc <b>x ≠ 2 et x ≠ −2</b>. L'astuce est toujours la même : <b>factorise le dénominateur</b> et exclus les valeurs qui annulent chaque facteur (d'après la règle du produit nul).</p>
<p>On écrit les CE <b>avant</b> toute simplification, car les transformations peuvent faire « disparaître » le problème sans le résoudre.</p>`
    },
    {
      type: "svg",
      title: "Le trou dans le graphique",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#475569" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="70" y1="270" x2="420" y2="40" stroke="#2563eb" stroke-width="4"/>
<circle cx="293" cy="176" r="9" fill="#f8fafc" stroke="#dc2626" stroke-width="4"/>
<line x1="293" y1="176" x2="293" y2="240" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="150" y1="176" x2="293" y2="176" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<text x="293" y="262" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">x = 2</text>
<text x="118" y="181" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">4</text>
<text x="430" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">y = x + 2</text>
<text x="330" y="150" font-size="16" fill="#334155">en x = 2, la fraction n'existe pas</text>
<text x="300" y="25" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">y = (x² − 4)/(x − 2) = x + 2 avec x ≠ 2</text>
</svg>`,
      caption: "La fraction (x² − 4)/(x − 2) se simplifie en x + 2, mais son graphique a un trou en x = 2 : la simplification ne doit pas faire oublier les CE."
    },
    {
      type: "text",
      title: "Simplifier une fraction rationnelle",
      html: `<p>Comme avec les nombres (15/35 = 3/5 en divisant par 5), on peut simplifier en divisant le numérateur et le dénominateur par un <b>facteur commun</b>. Mais attention : on ne simplifie que des <b>facteurs</b>, jamais les <b>termes d'une somme</b> !</p>
<p><b>Méthode</b> :</p>
<ol>
<li>Factorise le numérateur et le dénominateur (facteur commun, identités remarquables, trinôme…).</li>
<li>Écris les <b>CE</b> à partir du dénominateur <b>de départ</b> factorisé.</li>
<li>Simplifie les facteurs égaux.</li>
</ol>
<p>Exemple : <b>(x² − 4)/(x² − 2x)</b> = (x + 2)(x − 2)/[x(x − 2)] = <b>(x + 2)/x</b>, avec les CE <b>x ≠ 0 et x ≠ 2</b>.</p>
<p>⚠️ Erreur typique : (x + 2)/(x + 3) n'est <b>pas</b> égal à 2/3. Le « + » relie x et 2 : ce ne sont pas des facteurs. Essaie avec x = 1 : 3/4 ≠ 2/3. Un contrôle numérique démasque tout de suite la plupart des erreurs.</p>`
    },
    {
      type: "widget",
      title: "Associe chaque fraction à sa forme simplifiée",
      widget: "match",
      options: { pairs: [
        ["(x² − 9)/(x − 3)", "x + 3"],
        ["(x² − 2x)/x", "x − 2"],
        ["(2x + 4)/(x + 2)", "2"],
        ["(x² + 2x + 1)/(x + 1)", "x + 1"],
        ["(x² − 1)/(x² + x)", "(x − 1)/x"]
      ] },
      caption: "Factorise, simplifie les facteurs communs, n'oublie pas les CE."
    },
    {
      type: "example",
      title: "Exemple : simplifier avec un trinôme",
      html: `<p>Simplifie <b>(x² − 5x + 6)/(x² − 4)</b>.</p>
<ul>
<li>Numérateur : trinôme particulier, somme −5 et produit 6 → (x − 2)(x − 3).</li>
<li>Dénominateur : différence de deux carrés → (x − 2)(x + 2).</li>
<li>CE : x ≠ 2 et x ≠ −2.</li>
<li>Je simplifie par (x − 2) : résultat <b>(x − 3)/(x + 2)</b>.</li>
<li>Vérification avec x = 4 : fraction de départ (16 − 20 + 6)/(16 − 4) = 2/12 = 1/6 ; fraction simplifiée (4 − 3)/(4 + 2) = 1/6 ✔️</li>
</ul>`
    },
    {
      type: "text",
      title: "Multiplication, division et puissance",
      html: `<p>Les règles sont celles des fractions de nombres :</p>
<ul>
<li><b>Produit</b> : A/B · C/D = (A·C)/(B·D). Il vaut mieux factoriser et simplifier <b>avant</b> de multiplier.</li>
<li><b>Quotient</b> : A/B : C/D = A/B · <b>D/C</b> (on multiplie par l'<b>inverse</b>). De plus, le diviseur doit être non nul : <b>C ≠ 0</b>.</li>
<li><b>Puissance</b> : (A/B)ⁿ = Aⁿ/Bⁿ.</li>
</ul>
<p><b>Exemple de produit</b> : (x² − 1)/(x² + 2x) · x/(x + 1) = (x − 1)(x + 1)/[x(x + 2)] · x/(x + 1) = <b>(x − 1)/(x + 2)</b>, avec les CE x ≠ 0, −2, −1.</p>
<p><b>Exemple de quotient</b> : x/(x − 2) : x²/(x² − 4) = x/(x − 2) · (x − 2)(x + 2)/x² = <b>(x + 2)/x</b>. CE : x ≠ 2, −2 et aussi x ≠ 0 (le diviseur x²/(x² − 4) ne doit pas être nul, et x est au dénominateur).</p>`
    },
    {
      type: "text",
      title: "Addition et soustraction",
      html: `<p>Comme pour 1/6 + 1/4, il faut des <b>dénominateurs égaux</b> : on utilise le <b>PPCM</b> des dénominateurs <b>factorisés</b>.</p>
<ol>
<li>Factorise les dénominateurs et écris les CE.</li>
<li>Calcule le PPCM (facteurs communs et non communs, avec le plus grand exposant).</li>
<li>Transforme chaque fraction : multiplie le numérateur par le facteur manquant.</li>
<li>Additionne les numérateurs (attention aux signes devant les parenthèses !).</li>
<li>Simplifie si possible.</li>
</ol>
<p><b>Exemple</b> : 1/(x − 1) + 1/(x + 1). Le PPCM est (x − 1)(x + 1) = x² − 1. Alors [(x + 1) + (x − 1)]/(x² − 1) = <b>2x/(x² − 1)</b>, avec les CE x ≠ ±1.</p>
<p><b>Exemple de soustraction</b> : 3/x − 2/(x + 1) = [3(x + 1) − 2x]/[x(x + 1)] = (3x + 3 − 2x)/[x(x + 1)] = <b>(x + 3)/[x(x + 1)]</b>. Le signe moins change le signe de tous les termes de la parenthèse : l'oublier est une erreur classique !</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : CE et simplification",
      questions: [
        { type: "num", q: "Pour quelle valeur de x la fraction 1/(x − 5) n'existe-t-elle pas ?", answer: 5, explain: "Le dénominateur s'annule pour x = 5." },
        { type: "mc", q: "Les CE de (x + 3)/(x² − 9) sont…", options: ["x ≠ 3 et x ≠ −3", "x ≠ 9", "x ≠ −3 seulement"], answer: 0, explain: "x² − 9 = (x − 3)(x + 3), qui s'annule pour x = 3 et pour x = −3." },
        { type: "tf", q: "(x + 2)/(x + 3) = 2/3, car on simplifie par x.", answer: false, explain: "x est un terme d'une somme, pas un facteur : on ne peut pas le simplifier. Avec x = 1, on obtient 3/4, et non 2/3." }
      ]
    },
    {
      type: "example",
      title: "Exemple concret : aller à 60 km/h, retour à 40",
      html: `<p>Tu vas en ville à 60 km/h et tu reviens à 40 km/h par la même route. Quelle est la vitesse moyenne sur l'ensemble du trajet ? Ce n'est pas 50 ! Si la distance est d km : durée de l'aller d/60, durée du retour d/40 ; durée totale <b>d/60 + d/40 = 5d/120 = d/24</b>. La vitesse moyenne est (2d)/(d/24) = <b>48 km/h</b>. La lettre d se simplifie : le résultat ne dépend pas de la distance. En général, la vitesse moyenne vaut 2v₁v₂/(v₁ + v₂) : une vraie fraction rationnelle (la <b>moyenne harmonique</b>).</p>`
    },
    {
      type: "example",
      title: "Exemple concret : résistances en parallèle",
      html: `<p>En physique, deux résistances R₁ et R₂ montées en <b>parallèle</b> équivalent à une résistance R telle que <b>1/R = 1/R₁ + 1/R₂</b>. En additionnant les fractions : 1/R = (R₂ + R₁)/(R₁R₂), d'où <b>R = R₁R₂/(R₁ + R₂)</b>. Avec R₁ = 6 Ω et R₂ = 3 Ω : R = 18/9 = <b>2 Ω</b>. Le montage en parallèle a une résistance plus petite que chacune des deux : c'est comme ouvrir une deuxième voie sur l'autoroute.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? La démonstration que 1 = 2",
      html: `<p>Prends a = b. Multiplie par a : a² = ab. Soustrais b² : a² − b² = ab − b². Factorise : (a + b)(a − b) = b(a − b). « Simplifie » par (a − b) : a + b = b, c'est-à-dire 2b = b, donc <b>2 = 1</b> ! Où est l'arnaque ? Si a = b, alors a − b = 0, et tu as divisé par zéro. C'est exactement pour cela que les <b>conditions d'existence</b> ne sont pas une simple formalité.</p>`
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? Les Égyptiens et les fractions unitaires",
      html: `<p>Dans le <b>papyrus Rhind</b> (Égypte, vers 1650 av. J.-C.), un tableau écrit 2/n, pour n impair de 3 à 101, comme somme de <b>fractions de numérateur 1</b> : par exemple 2/5 = 1/3 + 1/15. Les anciens Égyptiens n'utilisaient presque pas d'autres fractions (à part 2/3). Bref, l'humanité calcule avec des fractions depuis au moins quatre mille ans.</p>`
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre les fractions rationnelles",
      intro: "Si les lettres te font peur, ramène tout aux nombres ou regarde la même idée sous un autre angle.",
      tabs: [
        {
          label: "🔢 Comme avec les nombres",
          html: `<p>Pour simplifier 84/126, décompose en facteurs premiers : 84 = 2²·3·7 et 126 = 2·3²·7. Tu simplifies par 2·3·7 et il reste 2/3. Avec les polynômes, tu fais <b>exactement la même chose</b> : tu factorises en facteurs irréductibles et tu simplifies les facteurs égaux.</p>
<p>L'addition est identique aussi : 1/6 + 1/4 → PPCM 12 → 2/12 + 3/12 = 5/12. Remplace 6 et 4 par x − 1 et x + 1, et tu retrouves la somme vue plus haut. Si tu n'es pas sûr d'une étape, <b>essaie avec un nombre</b> à la place de x.</p>`
        },
        {
          label: "✨ Multiplier par 1",
          html: `<p>Pourquoi, pour additionner, multiplie-t-on le numérateur par le « facteur manquant » ? Parce qu'on multiplie la fraction par <b>1 déguisé</b> :</p>
<p style="text-align:center">1/(x − 1) = 1/(x − 1) · <b>(x + 1)/(x + 1)</b> = (x + 1)/(x² − 1)</p>
<p>(x + 1)/(x + 1) vaut 1 (pour x ≠ −1), donc la valeur de la fraction ne change pas : seul son « déguisement » change. C'est la propriété fondamentale des fractions : en multipliant ou en divisant le numérateur et le dénominateur par un même polynôme non nul, la fraction ne change pas.</p>`
        },
        {
          label: "🧪 Le test du nombre",
          html: `<p>Tu as simplifié et tu n'es pas sûr ? Choisis une valeur de x qui respecte les CE et calcule <b>à la fois la fraction de départ et le résultat</b>.</p>
<p>(x² − 1)/(x + 1) → x − 1. Essaie x = 5 : (25 − 1)/6 = 24/6 = 4 et 5 − 1 = 4 ✔️. Essaie maintenant x = −1 : la fraction de départ n'existe pas, alors que x − 1 vaut −2 : voilà pourquoi il faut énoncer les CE. Le test n'est pas une démonstration, mais si les deux nombres sont différents, tu t'es forcément trompé.</p>`,
          widget: "numberLine",
          options: { min: -5, max: 10, step: 1, marks: [-1, 5] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte des fractions rationnelles",
      nodes: [
        { id: "frnum", label: "Fraction de nombres", x: 15, y: 8, color: "#64748b", html: "Rapport de deux entiers (dénominateur ≠ 0).", why: "Les fractions sont nées pour mesurer et partager : les Égyptiens (papyrus Rhind) et les Babyloniens les utilisaient déjà. Le dénominateur ne peut pas être nul, car aucun nombre multiplié par 0 ne donne un nombre différent de 0." },
        { id: "fralg", label: "Fraction rationnelle", x: 55, y: 8, color: "#6366f1", html: "Rapport A/B de deux polynômes, avec B non nul.", why: "Quand une grandeur dépend d'une variable (vitesse, résistance, prix moyen), le rapport devient une fraction avec des lettres." },
        { id: "ce", label: "Conditions d'existence", x: 85, y: 30, color: "#ef4444", html: "Valeurs des lettres qui n'annulent pas le dénominateur.", why: "Diviser par zéro est impossible : a/0 = c impliquerait c·0 = a, mais c·0 = 0 pour tout c ; on aurait donc a = 0, et n'importe quelle valeur de c conviendrait." },
        { id: "scomp", label: "Factorisation", x: 20, y: 38, color: "#16a34a", html: "Préparer le numérateur et le dénominateur en facteurs.", why: "On simplifie des facteurs, pas des termes : seul un produit peut être divisé par un facteur commun." },
        { id: "inv", label: "Propriété fondamentale", x: 55, y: 42, color: "#f59e0b", html: "En multipliant ou en divisant num. et dén. par un même facteur ≠ 0, la fraction ne change pas.", why: "Elle vient du fait que a/a = 1 et que 1 est l'élément neutre de la multiplication." },
        { id: "sempl", label: "Simplification", x: 20, y: 68, color: "#22c55e", html: "On simplifie les facteurs communs.", why: "On applique la propriété fondamentale en divisant par le facteur commun." },
        { id: "mcm", label: "PPCM et addition", x: 55, y: 70, color: "#a855f7", html: "On réduit les fractions au même dénominateur.", why: "On ne peut additionner que des grandeurs « de même unité », comme 3 pommes + 2 pommes : le dénominateur joue le rôle de l'unité." },
        { id: "prod", label: "Produit et quotient", x: 85, y: 70, color: "#0ea5e9", html: "On multiplie par l'inverse.", why: "Diviser par C/D revient à multiplier par D/C, car C/D · D/C = 1." },
        { id: "app", label: "Applications", x: 50, y: 94, color: "#14b8a6", html: "Vitesse moyenne, résistances en parallèle, équations avec inconnue au dénominateur.", why: "Les fractions rationnelles relient l'algèbre à la physique et préparent les équations rationnelles et les fonctions rationnelles." }
      ],
      edges: [
        ["frnum", "fralg", "se généralise en"],
        ["fralg", "ce", "exige"],
        ["fralg", "inv", "vérifie la"],
        ["scomp", "sempl", "permet"],
        ["inv", "sempl", "justifie"],
        ["inv", "mcm", "justifie"],
        ["fralg", "prod", "opérations"],
        ["mcm", "app", "utilise"],
        ["prod", "app", "utilise"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : les opérations",
      questions: [
        { type: "num", q: "La valeur de 5/x + 5/x pour x = 5 est…", answer: 2, explain: "5/5 + 5/5 = 1 + 1 = 2." },
        { type: "mc", q: "L'inverse de (x − 1)/(x + 2) est…", options: ["(x + 2)/(x − 1)", "(1 − x)/(x + 2)", "(x − 1)/(x + 2)"], answer: 0, explain: "On obtient l'inverse en échangeant le numérateur et le dénominateur." },
        { type: "num", q: "Calcule (x² − 4)/(x − 2) pour x = 7.", answer: 9, explain: "La fraction se simplifie en x + 2 ; pour x = 7, elle vaut 9. Vérification : 45/5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Fraction rationnelle", d: "Rapport A/B de deux polynômes, B étant différent du polynôme nul." },
    { t: "Conditions d'existence (CE)", d: "Valeurs des lettres pour lesquelles le dénominateur est différent de zéro (les autres sont les valeurs interdites)." },
    { t: "Simplification", d: "Division du numérateur et du dénominateur par un facteur commun." },
    { t: "PPCM", d: "Plus petit commun multiple des dénominateurs, utilisé comme dénominateur commun dans une addition." },
    { t: "Inverse", d: "La fraction obtenue en échangeant le numérateur et le dénominateur." },
    { t: "Propriété fondamentale", d: "La valeur d'une fraction ne change pas si l'on multiplie ou divise le numérateur et le dénominateur par un même facteur non nul." },
    { t: "Moyenne harmonique", d: "L'inverse de la moyenne des inverses : par exemple la vitesse moyenne sur un aller-retour." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Les CE de (x + 1)/(x² − 4x + 3) sont…", options: ["x ≠ 1 et x ≠ 3", "x ≠ −1", "x ≠ 3 seulement"], answer: 0, explain: "x² − 4x + 3 = (x − 1)(x − 3), nul pour x = 1 et x = 3." },
      { type: "mc", q: "En simplifiant (x² − 6x + 9)/(x² − 9), on obtient…", options: ["(x − 3)/(x + 3)", "(x + 3)/(x − 3)", "−6x/(−9)"], answer: 0, explain: "(x − 3)²/[(x − 3)(x + 3)] = (x − 3)/(x + 3), avec x ≠ ±3." },
      { type: "num", q: "Calcule (x² − 1)/(x + 1) pour x = 10.", answer: 9, explain: "La fraction se simplifie en x − 1 = 9. Vérification : 99/11 = 9." },
      { type: "tf", q: "(x + 5)/5 = x + 1.", answer: false, explain: "On ne peut simplifier que si 5 est un facteur de tout le numérateur : (x + 5)/5 = x/5 + 1." },
      { type: "mc", q: "1/(x − 2) + 1/(x + 2) =", options: ["2x/(x² − 4)", "2/(x² − 4)", "2/(2x)"], answer: 0, explain: "[(x + 2) + (x − 2)]/[(x − 2)(x + 2)] = 2x/(x² − 4)." },
      { type: "num", q: "Une voiture parcourt un trajet à 30 km/h et refait le même trajet au retour à 60 km/h. Quelle est la vitesse moyenne sur l'ensemble du parcours, en km/h ?", answer: 40, unit: "km/h", explain: "2·30·60/(30 + 60) = 3600/90 = 40." },
      { type: "order", q: "Range dans l'ordre les étapes pour additionner deux fractions rationnelles.", items: ["Factoriser les dénominateurs et écrire les CE", "Calculer le PPCM", "Réduire les fractions au dénominateur commun", "Additionner les numérateurs", "Simplifier le résultat"], explain: "Les CE s'écrivent toujours avant toute transformation." },
      { type: "text", q: "Comment s'appellent les conditions qui excluent les valeurs annulant le dénominateur ?", answer: ["conditions d'existence", "ce", "c.e.", "conditions d’existence", "valeurs interdites"], explain: "Ce sont les conditions d'existence (CE) ; les valeurs exclues sont les valeurs interdites." },
      { type: "mc", q: "Diviser par la fraction A/B revient à…", options: ["multiplier par B/A", "multiplier par A/B", "soustraire B/A"], answer: 0, explain: "On multiplie par l'inverse (avec A ≠ 0)." },
      { type: "num", q: "Deux résistances de 6 Ω et 3 Ω sont montées en parallèle. Quelle est la résistance équivalente, en ohms ?", answer: 2, unit: "Ω", explain: "R = 6·3/(6 + 3) = 2 Ω." }
    ]
  }
});
