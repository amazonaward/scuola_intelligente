TOPIC('fr', {
 "id": "m3-mat-calcolo-letterale",
 "title": "Le calcul littéral",
 "intro": "Qu'ont en commun la formule de l'aire du rectangle (A = b × h), le prix de 3 cahiers et une règle valable pour tous les nombres ? Ils utilisent des <b>lettres</b> à la place des nombres. Avec le <b>calcul littéral</b>, nous apprenons à faire des opérations avec des <b>monômes</b> et des <b>polynômes</b> : c'est la porte d'entrée de l'algèbre.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Pourquoi utiliser des lettres",
   "html": "<p>En mathématiques, une <b>lettre</b> représente un <b>nombre quelconque</b> (une <b>variable</b>) ou un nombre que l'on ne connaît pas encore (une <b>inconnue</b>). Elle sert à :</p>\n<ul>\n<li><b>généraliser</b> une règle : « la somme d'un nombre et de son opposé est 0 » → <b>a + (−a) = 0</b> ;</li>\n<li>écrire des <b>formules</b> : périmètre du carré <b>P = 4c</b> ; aire du disque <b>A = πr²</b> ;</li>\n<li><b>traduire</b> des problèmes : « le double d'un nombre augmenté de 5 » → <b>2x + 5</b>.</li>\n</ul>\n<p>Une expression avec des nombres et des lettres s'appelle une <b>expression littérale</b>. Si tu remplaces les lettres par des nombres, tu peux en calculer la <b>valeur</b> : pour x = 3, 2x + 5 = 2·3 + 5 = 11.</p>\n<p>Conventions : le signe × entre un nombre et une lettre s'omet (2·x = <b>2x</b>), et l'on écrit d'abord le nombre puis les lettres dans l'ordre alphabétique (<b>3ab²</b>, pas b²3a).</p>"
  },
  {
   "type": "text",
   "title": "Les monômes",
   "html": "<p>Un <b>monôme</b> est une expression littérale où il y a <b>seulement des multiplications</b> entre des nombres et des lettres (avec des exposants entiers naturels). Exemples : <b>5x²</b>, <b>−3ab</b>, <b>¾y</b>, <b>7</b>.</p>\n<ul>\n<li><b>Coefficient</b> : la partie numérique, avec le signe (dans −3ab, c'est −3). S'il n'est pas écrit, il vaut 1 (x²y = 1·x²y).</li>\n<li><b>Partie littérale</b> : les lettres avec leurs exposants (dans −3ab, c'est ab).</li>\n<li><b>Degré</b> : la <b>somme des exposants</b> des lettres. 5x²y³ a pour degré 2 + 3 = <b>5</b>. Un nombre seul a pour degré 0.</li>\n</ul>\n<p>Deux monômes sont :</p>\n<ul>\n<li><b>semblables</b> s'ils ont la <b>même partie littérale</b> : 4x²y et −7x²y ;</li>\n<li><b>égaux</b> s'ils sont semblables et ont le même coefficient ;</li>\n<li><b>opposés</b> s'ils sont semblables et ont des coefficients opposés : 3ab et −3ab.</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Anatomie d'un monôme",
   "svg": "<svg viewBox=\"0 0 640 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"260\" fill=\"#f0fdf4\"/>\n<text x=\"320\" y=\"130\" font-size=\"78\" text-anchor=\"middle\" font-family=\"serif\"><tspan fill=\"#dc2626\">−5</tspan><tspan fill=\"#2563eb\">a</tspan><tspan fill=\"#2563eb\" font-size=\"42\" dy=\"-34\">3</tspan><tspan fill=\"#2563eb\" dy=\"34\">b</tspan><tspan fill=\"#2563eb\" font-size=\"42\" dy=\"-34\">2</tspan></text>\n<path d=\"M210 150 L210 175 L270 175 L270 150\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"240\" y=\"205\" font-size=\"18\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">coefficient</text>\n<text x=\"240\" y=\"228\" font-size=\"15\" text-anchor=\"middle\" fill=\"#dc2626\">(nombre avec son signe)</text>\n<path d=\"M285 150 L285 175 L440 175 L440 150\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<text x=\"362\" y=\"205\" font-size=\"18\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">partie littérale</text>\n<text x=\"362\" y=\"228\" font-size=\"15\" text-anchor=\"middle\" fill=\"#2563eb\">a³b²</text>\n<rect x=\"470\" y=\"40\" width=\"150\" height=\"80\" rx=\"10\" fill=\"#a855f7\"/>\n<text x=\"545\" y=\"72\" font-size=\"18\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">degré</text>\n<text x=\"545\" y=\"100\" font-size=\"20\" text-anchor=\"middle\" fill=\"#fff\">3 + 2 = 5</text>\n<text x=\"545\" y=\"150\" font-size=\"14\" text-anchor=\"middle\" fill=\"#6b21a8\">degré par rapport à a : 3</text>\n<text x=\"545\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" fill=\"#6b21a8\">degré par rapport à b : 2</text>\n</svg>",
   "caption": "Chaque monôme a un coefficient, une partie littérale et un degré."
  },
  {
   "type": "text",
   "title": "Opérations avec les monômes",
   "html": "<ul>\n<li><b>Somme algébrique</b> : on ne peut additionner que des <b>monômes semblables</b>. On additionne les coefficients et on garde la partie littérale : 3x² + 5x² − x² = <b>7x²</b>. S'ils ne sont pas semblables, la somme reste indiquée : 2a + 3b ne peut pas se simplifier (ce n'est pas un monôme, c'est un <b>polynôme</b>).</li>\n<li><b>Multiplication</b> : on multiplie les coefficients et on multiplie les lettres en <b>additionnant les exposants</b> des lettres identiques : (2a²b)·(−3ab³) = <b>−6a³b⁴</b>.</li>\n<li><b>Division</b> : on divise les coefficients et on <b>soustrait les exposants</b> : (12x⁵y²) : (4x²y) = <b>3x³y</b>. (Le résultat est un monôme seulement si chaque exposant du diviseur ne dépasse pas celui du dividende.)</li>\n<li><b>Puissance</b> : on élève le coefficient et on <b>multiplie les exposants</b> : (−2a³b)² = <b>4a⁶b²</b>.</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les monômes",
   "questions": [
    {
     "type": "num",
     "q": "Quel est le degré du monôme 7x³y⁴z ?",
     "answer": 8,
     "explain": "3 + 4 + 1 = 8 (z a pour exposant 1)."
    },
    {
     "type": "mc",
     "q": "Quel monôme est semblable à −2ab² ?",
     "options": [
      "5a²b",
      "9ab²",
      "−2ab"
     ],
     "answer": 1,
     "explain": "Il a la même partie littérale ab²."
    },
    {
     "type": "mc",
     "q": "(3x²)·(4x³) = ?",
     "options": [
      "12x⁵",
      "12x⁶",
      "7x⁵"
     ],
     "answer": 0,
     "explain": "3·4 = 12 ; x²·x³ = x⁵ (on additionne les exposants)."
    }
   ]
  },
  {
   "type": "text",
   "title": "Les polynômes et leurs opérations",
   "html": "<p>Un <b>polynôme</b> est la <b>somme algébrique de monômes</b> non semblables entre eux (après l'avoir « réduit »). Avec 2 termes, c'est un <b>binôme</b> (a + b), avec 3 un <b>trinôme</b> (x² + 2x + 1).</p>\n<ul>\n<li><b>Réduction</b> : on additionne les monômes semblables : 3x + 2y − x + 5y = <b>2x + 7y</b>.</li>\n<li><b>Degré</b> du polynôme : le degré <b>le plus grand</b> parmi ses monômes. x³ + 4x² − 1 a pour degré 3.</li>\n<li><b>Ordonner</b> : on écrit les termes selon les puissances décroissantes d'une lettre.</li>\n<li><b>Somme/différence</b> de polynômes : on supprime les parenthèses (attention au − qui change les signes !) et on réduit : (2x + 3) − (x − 5) = 2x + 3 − x + 5 = <b>x + 8</b>.</li>\n<li><b>Monôme × polynôme</b> : propriété <b>distributive</b> : 3a(2a − 4) = <b>6a² − 12a</b>.</li>\n<li><b>Polynôme × polynôme</b> : chaque terme du premier par chaque terme du second : (x + 2)(x + 3) = x² + 3x + 2x + 6 = <b>x² + 5x + 6</b>.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Les identités remarquables",
   "html": "<p>Certains produits se rencontrent si souvent qu'il vaut mieux les connaître par cœur :</p>\n<ul>\n<li><b>Carré d'un binôme</b> : (a + b)² = <b>a² + 2ab + b²</b> &nbsp;&nbsp; (a − b)² = <b>a² − 2ab + b²</b></li>\n<li><b>Produit de la somme par la différence</b> : (a + b)(a − b) = <b>a² − b²</b></li>\n</ul>\n<p>⚠️ Erreur classique : (a + b)² n'est <b>pas</b> a² + b² ! Il manque le « double produit » 2ab. Vérifie avec des nombres : (3 + 2)² = 25, mais 3² + 2² = 13.</p>\n<p>Astuce de calcul mental : 21 × 19 = (20 + 1)(20 − 1) = 400 − 1 = <b>399</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Le carré du binôme, vu avec les aires",
   "svg": "<svg viewBox=\"0 0 640 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"320\" fill=\"#fff7ed\"/>\n<rect x=\"60\" y=\"40\" width=\"180\" height=\"180\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"240\" y=\"40\" width=\"80\" height=\"180\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<rect x=\"60\" y=\"220\" width=\"180\" height=\"80\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<rect x=\"240\" y=\"220\" width=\"80\" height=\"80\" fill=\"#f87171\" stroke=\"#991b1b\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"140\" font-size=\"34\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">a²</text>\n<text x=\"280\" y=\"140\" font-size=\"26\" text-anchor=\"middle\" fill=\"#78350f\" font-weight=\"bold\">ab</text>\n<text x=\"150\" y=\"270\" font-size=\"26\" text-anchor=\"middle\" fill=\"#78350f\" font-weight=\"bold\">ab</text>\n<text x=\"280\" y=\"270\" font-size=\"26\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">b²</text>\n<text x=\"150\" y=\"30\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1f2937\">a</text>\n<text x=\"280\" y=\"30\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1f2937\">b</text>\n<text x=\"40\" y=\"135\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1f2937\">a</text>\n<text x=\"40\" y=\"265\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1f2937\">b</text>\n<text x=\"480\" y=\"130\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">(a + b)² =</text>\n<text x=\"480\" y=\"175\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1f2937\"><tspan fill=\"#2563eb\">a²</tspan> + <tspan fill=\"#b45309\">2ab</tspan> + <tspan fill=\"#dc2626\">b²</tspan></text>\n<text x=\"480\" y=\"230\" font-size=\"16\" text-anchor=\"middle\" fill=\"#78350f\">les deux rectangles jaunes</text>\n<text x=\"480\" y=\"252\" font-size=\"16\" text-anchor=\"middle\" fill=\"#78350f\">sont le « double produit »</text>\n</svg>",
   "caption": "Un carré de côté a + b se divise en un carré a², un carré b² et deux rectangles ab. Les Grecs le savaient déjà : c'est la proposition II.4 des Éléments d'Euclide."
  },
  {
   "type": "example",
   "title": "Exemple pratique : du problème à l'expression",
   "html": "<p>Au café, un croissant coûte <b>c</b> euros et un cappuccino <b>p</b> euros. Une classe commande 12 croissants et 9 cappuccinos ; les professeurs 3 croissants et 4 cappuccinos.</p>\n<ul>\n<li>Dépense de la classe : <b>12c + 9p</b></li>\n<li>Dépense des professeurs : <b>3c + 4p</b></li>\n<li>Dépense totale : (12c + 9p) + (3c + 4p) = <b>15c + 13p</b> (on additionne les monômes semblables : les croissants avec les croissants, les cappuccinos avec les cappuccinos !)</li>\n<li>Si c = 1,20 € et p = 1,50 € : 15·1,20 + 13·1,50 = 18 + 19,50 = <b>37,50 €</b>.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le massif de fleurs avec sa bordure",
   "html": "<p>Un massif de fleurs carré a un côté de <b>x</b> mètres. On ajoute tout autour une bordure de gravier large de 1 m : le nouveau carré a pour côté <b>x + 2</b>.</p>\n<ul>\n<li>Aire totale : (x + 2)² = <b>x² + 4x + 4</b></li>\n<li>Aire du gravier = aire totale − aire du massif = x² + 4x + 4 − x² = <b>4x + 4</b></li>\n<li>Si x = 5 m : gravier = 4·5 + 4 = <b>24 m²</b>. Vérification : 7² − 5² = 49 − 25 = 24 ✔️</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Qui a inventé les lettres en mathématiques",
   "html": "<p>Pendant des siècles, les problèmes s'écrivaient <b>avec des mots</b> (algèbre « rhétorique »). Le Grec <b>Diophante</b> (IIIᵉ siècle apr. J.-C.) utilisa les premières abréviations. Le Français <b>François Viète</b>, en 1591, eut l'idée d'utiliser les lettres de façon systématique : des voyelles pour les inconnues, des consonnes pour les nombres connus. Puis <b>Descartes</b>, dans la <i>Géométrie</i> de 1637, choisit les dernières lettres de l'alphabet (<b>x, y, z</b>) pour les inconnues et les premières (<b>a, b, c</b>) pour les nombres connus : la convention que nous utilisons encore aujourd'hui !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le nom « algèbre »",
   "html": "<p>Le mot <b>algèbre</b> vient de l'arabe <i>al-jabr</i>, « remettre en place, recomposer » (le même terme désignait celui qui remettait les os cassés !). Il figure dans le titre du livre du mathématicien persan <b>al-Khwârizmî</b>, écrit à Bagdad vers 820 apr. J.-C. De son nom dérive aussi le mot <b>algorithme</b>.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Monôme : seulement des produits. Degré = somme des exposants.</li>\n<li>On n'additionne que <b>les monômes semblables</b> (même partie littérale).</li>\n<li>Produit : les exposants <b>s'additionnent</b> ; quotient : ils <b>se soustraient</b> ; puissance : ils <b>se multiplient</b>.</li>\n<li>(a + b)² = a² + 2ab + b² ; &nbsp;(a + b)(a − b) = a² − b².</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre le calcul littéral",
   "intro": "Les lettres te troublent ? Essaie de les voir comme des objets, comme des aires ou comme des blocs à assembler.",
   "tabs": [
    {
     "label": "🍎 Pommes et poires",
     "html": "<p>Imagine que <b>x</b> soit une pomme 🍎 et <b>y</b> une poire 🍐.</p>\n<ul>\n<li>3x + 2x = 🍎🍎🍎 + 🍎🍎 = <b>5x</b> (5 pommes).</li>\n<li>3x + 2y = 🍎🍎🍎 + 🍐🍐 : je ne peux pas dire « 5 pommoires » ! Cela reste <b>3x + 2y</b>. Voilà pourquoi on n'additionne que les monômes <b>semblables</b>.</li>\n<li>Mais attention : x et x² sont des objets différents (une pomme et une caisse carrée de pommes), donc x + x² ne fait <b>pas</b> 2x³ !</li>\n</ul>\n<p>L'analogie fonctionne pour les additions et les soustractions ; pour les multiplications, mieux vaut utiliser les aires (onglet suivant).</p>"
    },
    {
     "label": "🇺🇸 Algebra tiles : les aires",
     "html": "<p>Aux États-Unis, on utilise les <b>algebra tiles</b> : un grand carré = x², un rectangle = x, un petit carré = 1.</p>\n<p>Multiplier deux polynômes, c'est construire un <b>rectangle</b> avec ces côtés et compter les pièces. (x + 2)(x + 3) :</p>\n<ul><li>1 carré x², 5 rectangles x (2 + 3), 6 petits carrés → <b>x² + 5x + 6</b>.</li></ul>\n<p>Sur la figure : base x + 3, hauteur x + 2. Compte les pièces de chaque couleur !</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<rect x=\"60\" y=\"40\" width=\"150\" height=\"150\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<text x=\"135\" y=\"125\" font-size=\"30\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">x²</text>\n<g fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"3\">\n<rect x=\"210\" y=\"40\" width=\"40\" height=\"150\"/><rect x=\"250\" y=\"40\" width=\"40\" height=\"150\"/><rect x=\"290\" y=\"40\" width=\"40\" height=\"150\"/>\n<rect x=\"60\" y=\"190\" width=\"150\" height=\"40\"/><rect x=\"60\" y=\"230\" width=\"150\" height=\"40\"/>\n</g>\n<g fill=\"#facc15\" stroke=\"#854d0e\" stroke-width=\"3\">\n<rect x=\"210\" y=\"190\" width=\"40\" height=\"40\"/><rect x=\"250\" y=\"190\" width=\"40\" height=\"40\"/><rect x=\"290\" y=\"190\" width=\"40\" height=\"40\"/>\n<rect x=\"210\" y=\"230\" width=\"40\" height=\"40\"/><rect x=\"250\" y=\"230\" width=\"40\" height=\"40\"/><rect x=\"290\" y=\"230\" width=\"40\" height=\"40\"/>\n</g>\n<text x=\"135\" y=\"30\" font-size=\"18\" text-anchor=\"middle\">x</text><text x=\"270\" y=\"30\" font-size=\"18\" text-anchor=\"middle\">+ 3</text>\n<text x=\"40\" y=\"120\" font-size=\"18\" text-anchor=\"middle\">x</text><text x=\"40\" y=\"235\" font-size=\"18\" text-anchor=\"middle\">+2</text>\n<text x=\"460\" y=\"110\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\">1 × x²</text>\n<text x=\"460\" y=\"150\" font-size=\"22\" text-anchor=\"middle\" fill=\"#166534\">5 × x</text>\n<text x=\"460\" y=\"190\" font-size=\"22\" text-anchor=\"middle\" fill=\"#854d0e\">6 × 1</text>\n<text x=\"460\" y=\"240\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">x² + 5x + 6</text>\n</svg>"
    },
    {
     "label": "🧊 Monômes en 3D",
     "html": "<p>Un monôme de <b>degré 3</b> comme <b>abc</b> est le <b>volume</b> d'une boîte dont les arêtes sont a, b, c. Un monôme de degré 2 (ab) est une aire, un monôme de degré 1 (a) une longueur. Voilà pourquoi « degré » et « dimensions » sont liés !</p>\n<p>Change les mesures : si a = 4, b = 3, c = 2, le volume est 4·3·2 = 24 petits cubes. Si tu doubles seulement a, le volume double ; si tu doubles les trois, il devient 2³ = 8 fois plus grand : (2a)(2b)(2c) = 8abc.</p>",
     "scene": "blocks",
     "options": {
      "mode": "volume",
      "a": 4,
      "b": 3,
      "c": 2
     }
    },
    {
     "label": "📐 Le rectangle qui grandit",
     "html": "<p>Un rectangle de base <b>b</b> et de hauteur <b>h</b> a pour aire <b>bh</b> et pour périmètre <b>2b + 2h</b> : deux polynômes ! Utilise le widget : augmente la base de 1. L'aire augmente de <b>h</b> (une colonne de petits carrés) et le périmètre de <b>2</b>. En lettres : (b + 1)h = bh + h.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 5,
      "h": 3,
      "max": 12
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte du calcul littéral",
   "nodes": [
    {
     "id": "lettere",
     "label": "Des lettres à la place des nombres",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Des variables et des inconnues qui représentent des nombres.",
     "why": "De l'algèbre « rhétorique » avec des mots (Babyloniens, al-Khwârizmî), on est passé à l'algèbre « syncopée » (Diophante) puis « symbolique » avec Viète (1591) et Descartes (1637). Les lettres permettent d'écrire des règles valables pour tous les nombres."
    },
    {
     "id": "monomio",
     "label": "Monôme",
     "x": 25,
     "y": 28,
     "color": "#2563eb",
     "html": "Produit d'un coefficient et de lettres avec des exposants entiers naturels.",
     "why": "Du grec <i>mónos</i>, « un seul », et <i>nómos</i>, « partie » : un seul terme. C'est la « petite brique » de toutes les expressions algébriques."
    },
    {
     "id": "polinomio",
     "label": "Polynôme",
     "x": 75,
     "y": 28,
     "color": "#16a34a",
     "html": "Somme algébrique de monômes.",
     "why": "Du grec <i>polýs</i>, « nombreux » : plusieurs termes. Tout nombre écrit en base 10 est au fond un polynôme : 345 = 3·10² + 4·10 + 5."
    },
    {
     "id": "grado",
     "label": "Degré",
     "x": 10,
     "y": 52,
     "color": "#a855f7",
     "html": "Somme des exposants (monôme) ou degré maximal (polynôme).",
     "why": "Il relie l'algèbre à la géométrie : degré 1 = longueur, 2 = aire, 3 = volume. Les Grecs appelaient d'ailleurs x² « carré » et x³ « cube »."
    },
    {
     "id": "simili",
     "label": "Monômes semblables",
     "x": 38,
     "y": 52,
     "color": "#f59e0b",
     "html": "Même partie littérale : on peut les additionner.",
     "why": "C'est la distributivité à l'envers : 3x + 5x = (3 + 5)x = 8x. Si les parties littérales sont différentes, il n'y a pas de facteur commun à mettre en évidence."
    },
    {
     "id": "potenze",
     "label": "Propriétés des puissances",
     "x": 62,
     "y": 52,
     "color": "#ef4444",
     "html": "aᵐ·aⁿ = aᵐ⁺ⁿ; aᵐ:aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.",
     "why": "Elles découlent de la définition de la puissance comme multiplication répétée : a²·a³ = (a·a)·(a·a·a) = a⁵. Nicolas Chuquet les utilisait déjà en 1484 ; la notation avec l'exposant en haut est due à Descartes."
    },
    {
     "id": "distributiva",
     "label": "Distributivité",
     "x": 88,
     "y": 52,
     "color": "#0ea5e9",
     "html": "a(b + c) = ab + ac : pour multiplier les polynômes.",
     "why": "C'est une propriété des nombres qui se voit bien avec les aires : un rectangle de base b + c et de hauteur a se divise en deux rectangles ab et ac."
    },
    {
     "id": "notevoli",
     "label": "Identités remarquables",
     "x": 75,
     "y": 80,
     "color": "#14b8a6",
     "html": "(a + b)² = a² + 2ab + b²; (a + b)(a − b) = a² − b².",
     "why": "Euclide les démontra avec des figures dans les Éléments (livre II, vers 300 av. J.-C.), sans lettres algébriques : pour lui, c'étaient des propriétés de carrés et de rectangles."
    },
    {
     "id": "equazioni",
     "label": "Vers les équations",
     "x": 30,
     "y": 85,
     "color": "#7c3aed",
     "html": "Le calcul littéral sert à résoudre des équations et à utiliser les formules.",
     "why": "Pour trouver une inconnue, il faut savoir simplifier les expressions : c'est l'étape suivante de l'algèbre."
    }
   ],
   "edges": [
    [
     "lettere",
     "monomio",
     "forment"
    ],
    [
     "monomio",
     "polinomio",
     "additionnés donnent"
    ],
    [
     "monomio",
     "grado",
     "ha un"
    ],
    [
     "monomio",
     "simili",
     "peuvent être"
    ],
    [
     "monomio",
     "potenze",
     "se multiplient avec"
    ],
    [
     "polinomio",
     "distributiva",
     "se multiplient avec"
    ],
    [
     "distributiva",
     "notevoli",
     "cas particuliers"
    ],
    [
     "polinomio",
     "equazioni",
     "servent à"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les polynômes",
   "questions": [
    {
     "type": "mc",
     "q": "Réduis : 4a + 3b − a + 2b",
     "options": [
      "3a + 5b",
      "8ab",
      "5a + 5b"
     ],
     "answer": 0,
     "explain": "4a − a = 3a; 3b + 2b = 5b."
    },
    {
     "type": "mc",
     "q": "(x + 5)² = ?",
     "options": [
      "x² + 25",
      "x² + 10x + 25",
      "x² + 5x + 25"
     ],
     "answer": 1,
     "explain": "Carré du binôme : x² + 2·5·x + 25."
    },
    {
     "type": "num",
     "q": "Combien fait 31 × 29 en utilisant le produit de la somme par la différence ?",
     "answer": 899,
     "explain": "(30 + 1)(30 − 1) = 900 − 1 = 899."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Expression littérale",
   "d": "Expression avec des nombres et des lettres reliés par des opérations."
  },
  {
   "t": "Monôme",
   "d": "Expression littérale avec seulement des multiplications entre nombres et lettres."
  },
  {
   "t": "Coefficient",
   "d": "La partie numérique d'un monôme, avec le signe."
  },
  {
   "t": "Partie littérale",
   "d": "Les lettres d'un monôme avec leurs exposants."
  },
  {
   "t": "Degré",
   "d": "Somme des exposants des lettres d'un monôme ; pour un polynôme, le degré maximal de ses termes."
  },
  {
   "t": "Monômes semblables",
   "d": "Monômes ayant la même partie littérale."
  },
  {
   "t": "Polynôme",
   "d": "Somme algébrique de monômes (binôme : 2 termes ; trinôme : 3)."
  },
  {
   "t": "Identités remarquables",
   "d": "Produits dont le résultat est connu, comme le carré du binôme et le produit de la somme par la différence."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Quel est le coefficient de −x²y ?",
    "options": [
     "1",
     "−1",
     "2"
    ],
    "answer": 1,
    "explain": "Quand il n'y a que le signe moins, le coefficient est −1."
   },
   {
    "type": "num",
    "q": "Degré du polynôme 3x⁴ − 2x²y³ + 5",
    "answer": 5,
    "explain": "Les degrés des termes sont 4, 5 et 0 : le maximum est 5."
   },
   {
    "type": "mc",
    "q": "5ab − 8ab = ?",
    "options": [
     "−3ab",
     "3ab",
     "−3a²b²"
    ],
    "answer": 0,
    "explain": "Monômes semblables : 5 − 8 = −3."
   },
   {
    "type": "mc",
    "q": "(−2x³)·(5x²y) = ?",
    "options": [
     "−10x⁵y",
     "10x⁶y",
     "3x⁵y"
    ],
    "answer": 0,
    "explain": "−2·5 = −10 ; x³·x² = x⁵ ; y reste."
   },
   {
    "type": "mc",
    "q": "(18a⁶b³) : (6a²b) = ?",
    "options": [
     "3a³b³",
     "3a⁴b²",
     "12a⁴b²"
    ],
    "answer": 1,
    "explain": "18 : 6 = 3; a⁶⁻² = a⁴; b³⁻¹ = b²."
   },
   {
    "type": "mc",
    "q": "(3a²)³ = ?",
    "options": [
     "9a⁵",
     "27a⁶",
     "27a⁵"
    ],
    "answer": 1,
    "explain": "3³ = 27; (a²)³ = a⁶."
   },
   {
    "type": "tf",
    "q": "(a + b)² = a² + b²",
    "answer": false,
    "explain": "Il manque le double produit : (a + b)² = a² + 2ab + b²."
   },
   {
    "type": "mc",
    "q": "(x + 4)(x − 4) = ?",
    "options": [
     "x² − 16",
     "x² + 16",
     "x² − 8x − 16"
    ],
    "answer": 0,
    "explain": "Produit de la somme par la différence : x² − 4² = x² − 16."
   },
   {
    "type": "num",
    "q": "Calcule la valeur de 2x² − 3x + 1 pour x = 3.",
    "answer": 10,
    "explain": "2·9 − 9 + 1 = 18 − 9 + 1 = 10."
   },
   {
    "type": "mc",
    "q": "Le triple d'un nombre diminué de 7 s'écrit…",
    "options": [
     "3(x − 7)",
     "3x − 7",
     "x³ − 7"
    ],
    "answer": 1,
    "explain": "D'abord le triple (3x), puis on retire 7."
   },
   {
    "type": "mc",
    "q": "2a(3a − 5) = ?",
    "options": [
     "6a² − 10a",
     "6a − 10",
     "5a² − 10a"
    ],
    "answer": 0,
    "explain": "Distributivité : 2a·3a − 2a·5."
   },
   {
    "type": "text",
    "q": "Comment s'appelle un polynôme formé de deux termes ?",
    "answer": [
     "binôme",
     "un binôme"
    ],
    "explain": "Binôme (bi = deux)."
   }
  ],
  "gen": [
   [
    "power",
    2
   ]
  ]
 }
});
