TOPIC('fr', {
 "id": "m2-mat-frazioni-decimali",
 "title": "Fractions et nombres décimaux",
 "intro": "Toute fraction est une <b>division</b> qui attend d'être faite. Si tu l'effectues, tu obtiens un <b>nombre décimal</b> : parfois il s'arrête (3/4 = 0,75), parfois il continue à l'infini en répétant les mêmes chiffres (1/3 = 0,333…). Découvrons <b>quand</b> cela arrive, <b>pourquoi</b>, et comment revenir du décimal à la fraction avec la <b>fraction génératrice</b>.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "De la fraction au nombre décimal",
   "html": "<p>Le trait de fraction signifie <b>« divisé par »</b> : <b>a/b = a : b</b>.</p>\n<p>Pour transformer une fraction en nombre décimal, il suffit d'effectuer la division du numérateur par le dénominateur :</p>\n<ul>\n<li>3/4 = 3 : 4 = <b>0,75</b> → la division <b>s'arrête</b> (reste 0) : nombre <b>décimal limité</b> (ou fini) ;</li>\n<li>1/3 = 1 : 3 = 0,3333… → le reste ne devient jamais 0 et les chiffres se répètent : nombre <b>décimal illimité périodique</b>.</li>\n</ul>\n<p>Les chiffres qui se répètent forment la <b>période</b>, qui s'écrit avec un trait au-dessus ou entre parenthèses : 0,333… = <b>0,(3)</b> = 0,3̅.</p>"
  },
  {
   "type": "text",
   "title": "Trois types de nombres décimaux",
   "html": "<table>\n<tr><th>Type</th><th>Exemple</th><th>Comment il est fait</th></tr>\n<tr><td><b>Décimal limité</b></td><td>7/8 = 0,875</td><td>un nombre fini de chiffres après la virgule</td></tr>\n<tr><td><b>Périodique simple</b></td><td>2/3 = 0,(6)<br>5/11 = 0,(45)</td><td>la période commence <b>tout de suite</b> après la virgule</td></tr>\n<tr><td><b>Périodique mixte</b></td><td>1/6 = 0,1(6)<br>7/12 = 0,58(3)</td><td>entre la virgule et la période, il y a des chiffres qui ne se répètent pas : l'<b>antipériode</b></td></tr>\n</table>\n<p>Dans un nombre comme <b>2,1(36)</b> : <b>2</b> est la partie entière, <b>1</b> est l'antipériode, <b>36</b> est la période.</p>"
  },
  {
   "type": "remember",
   "title": "La règle du dénominateur",
   "html": "<p>Avant de faire la division, tu peux déjà <b>prévoir</b> le type de décimal ! Réduis la fraction à sa forme irréductible et décompose le dénominateur en facteurs premiers :</p>\n<ul>\n<li>seulement des facteurs <b>2</b> et/ou <b>5</b> → <b>décimal limité</b> (ex. 3/20, parce que 20 = 2² × 5) ;</li>\n<li><b>aucun</b> facteur 2 ou 5 → <b>périodique simple</b> (ex. 4/7, 5/9, 2/33) ;</li>\n<li>facteurs 2 et/ou 5 <b>avec</b> d'autres → <b>périodique mixte</b> (ex. 5/6, parce que 6 = 2 × 3).</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Pourquoi 2 et 5 ?",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<rect x=\"30\" y=\"30\" width=\"250\" height=\"110\" rx=\"14\" fill=\"#16a34a\"/>\n<text x=\"155\" y=\"65\" font-size=\"20\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">10 = 2 × 5</text>\n<text x=\"155\" y=\"95\" font-size=\"16\" fill=\"#dcfce7\" text-anchor=\"middle\">les puissances de 10 contiennent</text>\n<text x=\"155\" y=\"118\" font-size=\"16\" fill=\"#dcfce7\" text-anchor=\"middle\">seulement les facteurs 2 et 5</text>\n<rect x=\"320\" y=\"30\" width=\"250\" height=\"110\" rx=\"14\" fill=\"#2563eb\"/>\n<text x=\"445\" y=\"62\" font-size=\"18\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">3/20 = 15/100</text>\n<text x=\"445\" y=\"92\" font-size=\"18\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">= 0,15 ✓</text>\n<text x=\"445\" y=\"120\" font-size=\"14\" fill=\"#dbeafe\" text-anchor=\"middle\">20 = 2²×5 → il suffit de ×5</text>\n<rect x=\"30\" y=\"165\" width=\"540\" height=\"110\" rx=\"14\" fill=\"#dc2626\"/>\n<text x=\"300\" y=\"200\" font-size=\"18\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">1/3 = ?/10 = ?/100 = ?/1000…</text>\n<text x=\"300\" y=\"232\" font-size=\"16\" fill=\"#fee2e2\" text-anchor=\"middle\">aucune puissance de 10 n'est divisible par 3 :</text>\n<text x=\"300\" y=\"258\" font-size=\"16\" fill=\"#fee2e2\" text-anchor=\"middle\">la division ne s'arrête jamais → 0,333…</text>\n</svg>",
   "caption": "Une fraction est un décimal limité seulement si on peut la transformer en fraction décimale (de dénominateur 10, 100, 1000…)."
  },
  {
   "type": "example",
   "title": "Exemple pratique : la division qui se répète",
   "html": "<p>Calculons <b>1/7</b> avec la division posée et observons les <b>restes</b> :</p>\n<p>10 : 7 = 1 reste <b>3</b> → 30 : 7 = 4 reste <b>2</b> → 20 : 7 = 2 reste <b>6</b> → 60 : 7 = 8 reste <b>4</b> → 40 : 7 = 5 reste <b>5</b> → 50 : 7 = 7 reste <b>1</b> → on recommence à 10 !</p>\n<p>Résultat : <b>1/7 = 0,(142857)</b>, période de 6 chiffres.</p>\n<p><b>Pourquoi se répète-t-il ?</b> En divisant par 7, les restes possibles sont seulement 1, 2, 3, 4, 5, 6 : au bout de 6 étapes au maximum, un reste doit réapparaître, et à partir de là les chiffres se répètent à l'identique. En général, en divisant par <i>n</i>, la période est longue de <b>n − 1 chiffres au maximum</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Fraction et décimal",
   "widget": "fractionPie",
   "options": {
    "n": 3,
    "d": 8
   },
   "caption": "Bouge les curseurs : pour chaque fraction, essaie de calculer le décimal. 3/8 = 0,375. Quels dénominateurs donnent des décimaux limités ?"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : quel décimal est-ce ?",
   "questions": [
    {
     "type": "mc",
     "q": "7/25 est un nombre…",
     "options": [
      "décimal limité",
      "périodique simple",
      "périodique mixte"
     ],
     "answer": 0,
     "explain": "25 = 5² : seulement des facteurs 5, donc décimal limité (7/25 = 0,28)."
    },
    {
     "type": "mc",
     "q": "5/6 est un nombre…",
     "options": [
      "décimal limité",
      "périodique simple",
      "périodique mixte"
     ],
     "answer": 2,
     "explain": "6 = 2 × 3 : il y a le 2 avec le 3 → périodique mixte (0,8(3))."
    },
    {
     "type": "num",
     "q": "Combien fait 3/8 en nombre décimal ?",
     "answer": 0.375,
     "tol": 0.0001,
     "explain": "3 : 8 = 0,375."
    }
   ]
  },
  {
   "type": "text",
   "title": "Du décimal à la fraction : la fraction génératrice",
   "html": "<p>La <b>fraction génératrice</b> est la fraction qui, divisée, « génère » ce nombre décimal.</p>\n<p><b>1. Décimal limité</b> : au numérateur, le nombre sans la virgule ; au dénominateur, 1 suivi d'autant de zéros qu'il y a de chiffres décimaux. Puis simplifie.<br>\n0,75 = 75/100 = <b>3/4</b> &nbsp;&nbsp; 2,4 = 24/10 = <b>12/5</b></p>\n<p><b>2. Périodique simple</b> : au numérateur, le nombre sans la virgule <b>moins</b> la partie entière ; au dénominateur, autant de <b>9</b> qu'il y a de chiffres dans la période.<br>\n0,(3) = 3/9 = <b>1/3</b> &nbsp;&nbsp; 1,(27) = (127 − 1)/99 = 126/99 = <b>14/11</b></p>\n<p><b>3. Périodique mixte</b> : au numérateur, le nombre sans la virgule <b>moins</b> le nombre formé par la partie entière et l'antipériode ; au dénominateur, autant de <b>9</b> qu'il y a de chiffres dans la période, suivis d'autant de <b>0</b> qu'il y a de chiffres dans l'antipériode.<br>\n0,1(6) = (16 − 1)/90 = 15/90 = <b>1/6</b> &nbsp;&nbsp; 2,3(5) = (235 − 23)/90 = 212/90 = <b>106/45</b></p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : pourquoi justement les 9 ?",
   "html": "<p>Prenons <b>x = 0,(45)</b> = 0,454545…</p>\n<ol>\n<li>La période a 2 chiffres : je multiplie par 100 → <b>100x = 45,4545…</b></li>\n<li>Je soustrais x : 100x − x = 45,4545… − 0,4545… → <b>99x = 45</b> (la partie infinie s'annule !)</li>\n<li>Donc x = 45/99 = <b>5/11</b>.</li>\n</ol>\n<p>Voilà d'où viennent les <b>9</b> : 100 − 1 = 99. Avec une période de 3 chiffres, on multiplie par 1000 et on obtient 999.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'addition au restaurant et l'argent",
   "html": "<p>Trois amis doivent partager une addition de <b>10 €</b>. Chacun devrait payer 10/3 € = <b>3,(3) €</b> = 3,333… €.</p>\n<p>Mais les centimes ne peuvent pas se diviser à l'infini ! On <b>arrondit</b> : deux amis paient 3,33 € et un 3,34 € (3,33 + 3,33 + 3,34 = 10,00 €).</p>\n<p>Avec <b>4 amis</b>, en revanche : 10/4 = 2,5 € exactement, parce que 4 = 2² n'a que le facteur 2 !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? 0,999… = 1",
   "html": "<p>Le nombre <b>0,(9)</b> = 0,9999… est exactement égal à <b>1</b> ! Avec la règle de la fraction génératrice : 0,(9) = 9/9 = 1. Ou bien : 1/3 = 0,(3) ; multiplie par 3 : 3/3 = 0,(9), mais 3/3 = 1. C'est pourquoi la période 9 ne s'utilise pas : on écrit directement le nombre arrondi (2,4(9) = 2,5).</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Qui a inventé la virgule",
   "html": "<p>Les nombres décimaux furent diffusés en Europe par le mathématicien flamand <b>Simon Stevin</b> dans le petit livre <i>De Thiende</i> (« Le dixième », <b>1585</b>), mais il les écrivait avec de petits cercles numérotés au-dessus des chiffres. Le séparateur avec le point fut rendu populaire par <b>John Napier</b> (Neper) en 1617. Aujourd'hui encore, les pays anglo-saxons utilisent le <b>point</b> (3.14), alors que la France et une grande partie de l'Europe utilisent la <b>virgule</b> (3,14).</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les décimaux périodiques",
   "intro": "Si la règle des 9 et des 0 te semble de la magie, voici d'autres chemins.",
   "tabs": [
    {
     "label": "🧊 Cent petits cubes",
     "html": "<p>Voici un carré de <b>10 × 10 = 100</b> petits cubes : tout le bloc vaut <b>1</b>. Une rangée de 10 cubes vaut <b>0,1</b> (un dixième) ; un cube vaut <b>0,01</b> (un centième).</p>\n<p>Essaie : 3/4 du bloc = 75 cubes = <b>0,75</b>. Mais 1/3 du bloc ? 100 cubes ne se partagent pas en 3 parts égales : 33 cubes chacun et il en reste 1, que tu devrais couper en morceaux de plus en plus petits… à l'infini : 0,333…</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 10,
      "b": 10
     }
    },
    {
     "label": "📏 La droite qui zoome",
     "html": "<p>Imagine que tu cherches 1/3 sur la droite avec une <b>loupe</b> :</p>\n<ul>\n<li>entre 0 et 1, divisée en dixièmes, 1/3 se trouve entre 0,3 et 0,4 ;</li>\n<li>tu zoomes entre 0,3 et 0,4 divisés en centièmes : il se trouve entre 0,33 et 0,34 ;</li>\n<li>tu zoomes encore : entre 0,333 et 0,334…</li>\n</ul>\n<p>Chaque fois, 1/3 tombe <b>à la même position</b> (environ au tiers de l'intervalle) : c'est pourquoi le chiffre <b>3</b> sort toujours. Tu n'arriveras jamais exactement sur un trait !</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#eef2ff\"/>\n<line x1=\"40\" y1=\"60\" x2=\"560\" y2=\"60\" stroke=\"#1e1b4b\" stroke-width=\"4\"/>\n<line x1=\"40\" y1=\"48\" x2=\"40\" y2=\"72\" stroke=\"#1e1b4b\" stroke-width=\"3\"/><line x1=\"560\" y1=\"48\" x2=\"560\" y2=\"72\" stroke=\"#1e1b4b\" stroke-width=\"3\"/>\n<line x1=\"196\" y1=\"50\" x2=\"196\" y2=\"70\" stroke=\"#1e1b4b\" stroke-width=\"3\"/><line x1=\"248\" y1=\"50\" x2=\"248\" y2=\"70\" stroke=\"#1e1b4b\" stroke-width=\"3\"/>\n<circle cx=\"213\" cy=\"60\" r=\"7\" fill=\"#dc2626\"/>\n<text x=\"40\" y=\"35\" font-size=\"16\" text-anchor=\"middle\">0</text><text x=\"560\" y=\"35\" font-size=\"16\" text-anchor=\"middle\">1</text>\n<text x=\"196\" y=\"95\" font-size=\"15\" text-anchor=\"middle\">0,3</text><text x=\"248\" y=\"95\" font-size=\"15\" text-anchor=\"middle\">0,4</text>\n<line x1=\"196\" y1=\"70\" x2=\"40\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><line x1=\"248\" y1=\"70\" x2=\"560\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/>\n<line x1=\"40\" y1=\"150\" x2=\"560\" y2=\"150\" stroke=\"#1e1b4b\" stroke-width=\"4\"/>\n<line x1=\"196\" y1=\"140\" x2=\"196\" y2=\"160\" stroke=\"#1e1b4b\" stroke-width=\"3\"/><line x1=\"248\" y1=\"140\" x2=\"248\" y2=\"160\" stroke=\"#1e1b4b\" stroke-width=\"3\"/>\n<circle cx=\"213\" cy=\"150\" r=\"7\" fill=\"#dc2626\"/>\n<text x=\"40\" y=\"185\" font-size=\"15\" text-anchor=\"middle\">0,3</text><text x=\"560\" y=\"185\" font-size=\"15\" text-anchor=\"middle\">0,4</text>\n<text x=\"196\" y=\"185\" font-size=\"15\" text-anchor=\"middle\">0,33</text><text x=\"252\" y=\"185\" font-size=\"15\" text-anchor=\"middle\">0,34</text>\n<line x1=\"196\" y1=\"160\" x2=\"40\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><line x1=\"248\" y1=\"160\" x2=\"560\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/>\n<line x1=\"40\" y1=\"240\" x2=\"560\" y2=\"240\" stroke=\"#1e1b4b\" stroke-width=\"4\"/>\n<line x1=\"196\" y1=\"230\" x2=\"196\" y2=\"250\" stroke=\"#1e1b4b\" stroke-width=\"3\"/><line x1=\"248\" y1=\"230\" x2=\"248\" y2=\"250\" stroke=\"#1e1b4b\" stroke-width=\"3\"/>\n<circle cx=\"213\" cy=\"240\" r=\"7\" fill=\"#dc2626\"/>\n<text x=\"40\" y=\"275\" font-size=\"15\" text-anchor=\"middle\">0,33</text><text x=\"560\" y=\"275\" font-size=\"15\" text-anchor=\"middle\">0,34</text>\n<text x=\"196\" y=\"275\" font-size=\"15\" text-anchor=\"middle\">0,333</text><text x=\"256\" y=\"275\" font-size=\"15\" text-anchor=\"middle\">0,334</text>\n<text x=\"420\" y=\"110\" font-size=\"16\" fill=\"#dc2626\" font-weight=\"bold\">● = 1/3</text>\n</svg>"
    },
    {
     "label": "🇬🇧 La méthode anglo-saxonne avec l'algèbre",
     "html": "<p>Dans les pays anglo-saxons (et dans beaucoup d'écoles du monde), on n'apprend pas la « règle des 9 et des 0 », mais l'astuce algébrique « <b>multiplie et soustrais</b> » :</p>\n<p>x = 0,1666… → 10x = 1,666… et 100x = 16,666…<br>100x − 10x = 16,666… − 1,666… → <b>90x = 15</b> → x = 15/90 = 1/6.</p>\n<p>On déplace la virgule de façon que les queues infinies soient <b>égales</b>, et en soustrayant, elles disparaissent. La règle des 9 et des 0 n'est que cette idée déjà « emballée » !</p>"
    },
    {
     "label": "🎡 Le tour des restes",
     "html": "<p>Pense à la division par 7 comme à une <b>grande roue</b> avec 6 nacelles (les restes possibles 1–6). Chaque étape de la division te déplace sur une nacelle : 1 → 3 → 2 → 6 → 4 → 5 → de nouveau 1. Quand tu reviens à la nacelle de départ, le tour recommence et les chiffres se répètent. Si en revanche tu arrives à la nacelle « 0 », tu es descendu : la division est finie (décimal limité).</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/>\n<circle cx=\"300\" cy=\"150\" r=\"110\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"5\"/>\n<circle cx=\"300\" cy=\"40\" r=\"28\" fill=\"#f97316\"/><text x=\"300\" y=\"47\" font-size=\"20\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">1</text>\n<circle cx=\"395\" cy=\"95\" r=\"28\" fill=\"#fb923c\"/><text x=\"395\" y=\"102\" font-size=\"20\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">3</text>\n<circle cx=\"395\" cy=\"205\" r=\"28\" fill=\"#f97316\"/><text x=\"395\" y=\"212\" font-size=\"20\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">2</text>\n<circle cx=\"300\" cy=\"260\" r=\"28\" fill=\"#fb923c\"/><text x=\"300\" y=\"267\" font-size=\"20\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">6</text>\n<circle cx=\"205\" cy=\"205\" r=\"28\" fill=\"#f97316\"/><text x=\"205\" y=\"212\" font-size=\"20\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">4</text>\n<circle cx=\"205\" cy=\"95\" r=\"28\" fill=\"#fb923c\"/><text x=\"205\" y=\"102\" font-size=\"20\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">5</text>\n<text x=\"300\" y=\"145\" font-size=\"18\" text-anchor=\"middle\" fill=\"#7c2d12\" font-weight=\"bold\">restes de 1 : 7</text>\n<text x=\"300\" y=\"170\" font-size=\"16\" text-anchor=\"middle\" fill=\"#7c2d12\">chiffres : 1 4 2 8 5 7</text>\n<text x=\"500\" y=\"60\" font-size=\"15\" fill=\"#7c2d12\">tour complet</text>\n<text x=\"500\" y=\"80\" font-size=\"15\" fill=\"#7c2d12\">= période</text>\n</svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte : fractions et décimaux",
   "nodes": [
    {
     "id": "fraz",
     "label": "Fraction a/b",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Un quotient de deux nombres entiers.",
     "why": "La fraction est née pour diviser des quantités ; l'écriture « a/b » indique justement la division a : b. Toute fraction est un <b>nombre rationnel</b> (de <i>ratio</i>, « rapport »)."
    },
    {
     "id": "div",
     "label": "Division",
     "x": 50,
     "y": 26,
     "color": "#7c3aed",
     "html": "Numérateur : dénominateur.",
     "why": "En effectuant la division posée avec des décimaux, on continue en ajoutant des zéros au reste. C'est la méthode indo-arabe arrivée en Europe avec Fibonacci (1202)."
    },
    {
     "id": "lim",
     "label": "Décimal limité",
     "x": 16,
     "y": 50,
     "color": "#16a34a",
     "html": "Il s'arrête après un nombre fini de chiffres : 0,75.",
     "why": "Cela arrive si le dénominateur (réduit) n'a que des facteurs 2 et 5, parce qu'alors la fraction peut s'écrire avec un dénominateur 10, 100, 1000… et 10 = 2 × 5."
    },
    {
     "id": "sempl",
     "label": "Périodique simple",
     "x": 50,
     "y": 52,
     "color": "#ea580c",
     "html": "La période commence tout de suite : 0,(3).",
     "why": "Cela arrive quand le dénominateur n'a ni 2 ni 5. Les restes se répètent forcément, parce qu'ils sont en nombre fini (moins que le diviseur) : c'est le <b>principe des tiroirs</b>."
    },
    {
     "id": "misto",
     "label": "Périodique mixte",
     "x": 84,
     "y": 50,
     "color": "#dc2626",
     "html": "Il y a une antipériode : 0,1(6).",
     "why": "Le dénominateur contient 2 ou 5 avec d'autres facteurs : la partie « 2 et 5 » produit l'antipériode, les autres facteurs la période."
    },
    {
     "id": "gen",
     "label": "Fraction génératrice",
     "x": 50,
     "y": 76,
     "color": "#0d9488",
     "html": "La fraction dont naît un décimal.",
     "why": "On la démontre avec l'algèbre : on multiplie le nombre par une puissance de 10 et on soustrait, ainsi la partie périodique infinie s'annule et il reste les 9 (ex. 100x − x = 99x)."
    },
    {
     "id": "irr",
     "label": "Nombres irrationnels",
     "x": 84,
     "y": 82,
     "color": "#64748b",
     "html": "Décimaux illimités NON périodiques : √2, π.",
     "why": "Ce ne sont pas des fractions : ils n'ont pas de fraction génératrice. Les Pythagoriciens découvrirent au Vᵉ siècle av. J.-C. que la diagonale du carré (√2) n'est pas un rapport d'entiers : ce fut un choc !"
    },
    {
     "id": "stevin",
     "label": "Notation décimale",
     "x": 16,
     "y": 82,
     "color": "#ca8a04",
     "html": "Écrire les nombres avec la virgule.",
     "why": "Déjà les mathématiciens arabes (al-Kashi, XVᵉ siècle) utilisaient des fractions décimales ; en Europe, elles furent diffusées par <b>Simon Stevin</b> en 1585, pour simplifier les calculs des marchands et des ingénieurs."
    }
   ],
   "edges": [
    [
     "fraz",
     "div",
     "signifie"
    ],
    [
     "div",
     "lim",
     "reste 0"
    ],
    [
     "div",
     "sempl",
     "restes qui se répètent"
    ],
    [
     "div",
     "misto",
     "antipériode + période"
    ],
    [
     "sempl",
     "gen",
     "on revient avec"
    ],
    [
     "misto",
     "gen",
     "on revient avec"
    ],
    [
     "misto",
     "irr",
     "différents de"
    ],
    [
     "lim",
     "stevin",
     "s'écrit avec"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : fraction génératrice",
   "questions": [
    {
     "type": "mc",
     "q": "La fraction génératrice de 0,(7) est…",
     "options": [
      "7/10",
      "7/9",
      "7/99"
     ],
     "answer": 1,
     "explain": "Période d'un chiffre : 7/9."
    },
    {
     "type": "mc",
     "q": "La fraction génératrice de 0,1(6) est…",
     "options": [
      "16/90 = 8/45",
      "15/90 = 1/6",
      "16/99"
     ],
     "answer": 1,
     "explain": "(16 − 1)/90 = 15/90 = 1/6."
    },
    {
     "type": "num",
     "q": "0,25 = 1/?",
     "answer": 4,
     "explain": "0,25 = 25/100 = 1/4."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>a/b = a : b. Le décimal peut être <b>limité</b>, <b>périodique simple</b>, <b>périodique mixte</b>.</li>\n<li>Dénominateur avec seulement 2 et 5 → limité ; sans 2 et 5 → simple ; mélange → mixte.</li>\n<li>Génératrice : numérateur = nombre sans virgule − (partie entière et antipériode) ; dénominateur = un <b>9</b> pour chaque chiffre de la période et un <b>0</b> pour chaque chiffre de l'antipériode.</li>\n<li>Simplifie toujours le résultat !</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Nombre décimal limité",
   "d": "Nombre avec un nombre fini de chiffres après la virgule."
  },
  {
   "t": "Nombre périodique",
   "d": "Nombre décimal illimité dans lequel un groupe de chiffres se répète à l'infini."
  },
  {
   "t": "Période",
   "d": "Le groupe de chiffres qui se répète."
  },
  {
   "t": "Antipériode",
   "d": "Les chiffres décimaux entre la virgule et la période, qui ne se répètent pas."
  },
  {
   "t": "Fraction génératrice",
   "d": "La fraction qui, en effectuant la division, génère un nombre décimal."
  },
  {
   "t": "Fraction décimale",
   "d": "Fraction de dénominateur 10, 100, 1000…"
  },
  {
   "t": "Nombre rationnel",
   "d": "Nombre qui peut s'écrire comme fraction de deux entiers."
  },
  {
   "t": "Nombre irrationnel",
   "d": "Décimal illimité non périodique, qui n'est pas une fraction (ex. π, √2)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Écris 7/20 comme nombre décimal.",
    "answer": 0.35,
    "tol": 0.0001,
    "explain": "7/20 = 35/100 = 0,35."
   },
   {
    "type": "mc",
    "q": "Quelle fraction donne un décimal périodique simple ?",
    "options": [
     "3/8",
     "2/9",
     "1/6"
    ],
    "answer": 1,
    "explain": "9 = 3² : aucun 2 ni 5 → périodique simple (0,(2))."
   },
   {
    "type": "mc",
    "q": "Dans 3,4(12), l'antipériode est…",
    "options": [
     "3",
     "4",
     "12"
    ],
    "answer": 1,
    "explain": "3 partie entière, 4 antipériode, 12 période."
   },
   {
    "type": "tf",
    "q": "1/40 est un nombre décimal limité.",
    "answer": true,
    "explain": "40 = 2³ × 5 : seulement 2 et 5 → limité (0,025)."
   },
   {
    "type": "mc",
    "q": "La fraction génératrice de 0,(12) est…",
    "options": [
     "12/100",
     "12/99 = 4/33",
     "12/90"
    ],
    "answer": 1,
    "explain": "Deux chiffres de période → 99 : 12/99 = 4/33."
   },
   {
    "type": "mc",
    "q": "La fraction génératrice de 1,2(3) est…",
    "options": [
     "(123 − 12)/90 = 37/30",
     "123/99",
     "(123 − 1)/99"
    ],
    "answer": 0,
    "explain": "Nombre sans virgule 123 moins partie entière + antipériode 12 ; dénominateur 90."
   },
   {
    "type": "num",
    "q": "Combien de chiffres a la période de 1/7 ?",
    "answer": 6,
    "explain": "1/7 = 0,(142857)."
   },
   {
    "type": "tf",
    "q": "0,(9) est égal à 1.",
    "answer": true,
    "explain": "0,(9) = 9/9 = 1."
   },
   {
    "type": "num",
    "q": "Transforme 0,6 en fraction irréductible : 3/?",
    "answer": 5,
    "explain": "0,6 = 6/10 = 3/5."
   },
   {
    "type": "order",
    "q": "Classe du plus petit au plus grand.",
    "items": [
     "0,3",
     "1/3",
     "0,34",
     "0,(4)"
    ],
    "explain": "0,3 < 0,333… < 0,34 < 0,444…"
   },
   {
    "type": "mc",
    "q": "π = 3,14159… est…",
    "options": [
     "périodique simple",
     "décimal limité",
     "irrationnel (non périodique)"
    ],
    "answer": 2,
    "explain": "π est illimité et non périodique : ce n'est pas une fraction."
   }
  ],
  "gen": [
   [
    "fracEquiv",
    2
   ],
   [
    "decAdd",
    1
   ]
  ]
 }
});
