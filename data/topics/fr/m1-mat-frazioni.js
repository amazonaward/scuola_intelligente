TOPIC('fr', {
 "id": "m1-mat-frazioni",
 "title": "Les fractions et les opérations",
 "intro": "À l'école primaire, tu as connu les fractions comme des « parts de gâteau ». Maintenant, elles deviennent de vrais <b>nombres</b> : nous apprenons à les <b>classer</b>, à les <b>simplifier</b> avec le PGCD, à les <b>comparer</b> avec le PPCM et à faire avec elles les <b>quatre opérations</b> et les puissances, jusqu'à résoudre des problèmes et des expressions.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "La fraction comme opérateur",
   "html": "<p>Une fraction <b>a/b</b> (avec b ≠ 0) indique que l'entier est partagé en <b>b</b> parts égales et qu'on en prend <b>a</b>.</p>\n<ul>\n<li>le <b>dénominateur</b> (b, en bas) dit en combien de parts égales on partage l'entier ;</li>\n<li>le <b>numérateur</b> (a, en haut) dit combien de parts on prend ;</li>\n<li>la <b>barre de fraction</b> signifie « divisé par » : 3/4 = 3 : 4 = 0,75.</li>\n</ul>\n<p>La fraction est un <b>opérateur</b> : elle agit sur une grandeur. Pour calculer les <b>3/4 de 200</b> : on divise par le dénominateur et on multiplie par le numérateur : 200 : 4 × 3 = 50 × 3 = <b>150</b>.</p>\n<p><b>Le problème inverse</b> : « Les 3/4 d'un nombre font 150. Quel est ce nombre ? » On fait l'opération à l'envers : 150 : 3 × 4 = 50 × 4 = <b>200</b>.</p>\n<p>Le dénominateur ne peut <b>pas être 0</b> : on ne peut pas partager un entier en zéro parts !</p>"
  },
  {
   "type": "text",
   "title": "Fractions inférieures à 1, supérieures à 1, entières",
   "html": "<table>\n<tr><th>Type</th><th>Règle</th><th>Exemples</th><th>Valeur</th></tr>\n<tr><td><b>Inférieure à 1</b></td><td>numérateur &lt; dénominateur</td><td>2/5, 7/9</td><td>moins de 1 entier</td></tr>\n<tr><td><b>Supérieure à 1</b></td><td>numérateur &gt; dénominateur (et pas multiple)</td><td>7/4, 11/3</td><td>plus de 1 entier</td></tr>\n<tr><td><b>Apparente (entière)</b></td><td>numérateur multiple du dénominateur</td><td>8/4, 6/6, 0/5</td><td>un nombre entier naturel (2, 1, 0)</td></tr>\n</table>\n<p>Une fraction supérieure à 1 peut s'écrire comme un <b>nombre mixte</b> : 7/4 = 1 entier et 3/4 (parce que 7 : 4 = 1 reste 3).</p>\n<p>Les fractions de numérateur 1 (1/2, 1/3, 1/10…) s'appellent <b>fractions unitaires</b> ; celles de dénominateur 10, 100, 1000… s'appellent <b>fractions décimales</b> (3/10 = 0,3).</p>"
  },
  {
   "type": "widget",
   "title": "Explore les fractions",
   "widget": "fractionPie",
   "options": {
    "n": 7,
    "d": 4
   },
   "caption": "Avec 7/4, il faut plus d'un entier : c'est une fraction supérieure à 1. Déplace les curseurs et cherche une fraction apparente (par ex. 8/4)."
  },
  {
   "type": "text",
   "title": "Fractions équivalentes et simplification",
   "html": "<p>Deux fractions sont <b>équivalentes</b> si elles représentent la même quantité : 1/2 = 2/4 = 3/6 = 50/100.</p>\n<p><b>Propriété fondamentale</b> : si on multiplie ou on divise le numérateur et le dénominateur par le <b>même nombre</b> (différent de 0), on obtient une fraction équivalente.<br>3/5 = (3 × 4)/(5 × 4) = 12/20.</p>\n<p><b>Vérification rapide</b> (produit en croix) : a/b = c/d si <b>a × d = b × c</b>. 3/5 et 12/20 : 3 × 20 = 60 et 5 × 12 = 60 ✔️</p>\n<p><b>Simplifier</b> veut dire diviser le numérateur et le dénominateur par un diviseur commun. Une fraction est <b>irréductible</b> quand son numérateur et son dénominateur sont <b>premiers entre eux</b> (PGCD = 1). Le moyen le plus rapide : diviser par le <b>PGCD</b>.</p>\n<p>Exemple : 36/48. PGCD(36, 48) = 12 → 36/48 = 3/4.<br>Ou par étapes : 36/48 = 18/24 = 9/12 = 3/4.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : types et équivalences",
   "questions": [
    {
     "type": "mc",
     "q": "Quelle fraction est apparente (entière) ?",
     "options": [
      "5/3",
      "12/4",
      "3/12",
      "7/8"
     ],
     "answer": 1,
     "explain": "12 est un multiple de 4 : 12/4 = 3."
    },
    {
     "type": "num",
     "q": "Combien font les 2/5 de 35 ?",
     "answer": 14,
     "tol": 0,
     "explain": "35 : 5 = 7; 7 × 2 = 14."
    },
    {
     "type": "mc",
     "q": "Rends irréductible la fraction 24/36.",
     "options": [
      "12/18",
      "4/6",
      "2/3",
      "6/9"
     ],
     "answer": 2,
     "explain": "PGCD(24, 36) = 12 : 24/36 = 2/3."
    },
    {
     "type": "tf",
     "q": "4/6 et 10/15 sont équivalentes.",
     "answer": true,
     "explain": "Toutes deux se simplifient en 2/3 ; produit en croix : 4 × 15 = 60 = 6 × 10."
    }
   ]
  },
  {
   "type": "text",
   "title": "Comparer les fractions",
   "html": "<ul>\n<li><b>Même dénominateur</b> : la plus grande est celle qui a le numérateur le plus grand. 5/8 &gt; 3/8.</li>\n<li><b>Même numérateur</b> : la plus grande est celle qui a le dénominateur le <b>plus petit</b> (des parts plus grandes !). 3/4 &gt; 3/7.</li>\n<li><b>Cas général</b> : on les transforme en fractions équivalentes de même dénominateur, le <b>plus petit dénominateur commun</b>, c'est-à-dire le <b>PPCM</b> des dénominateurs.</li>\n</ul>\n<p>Exemple : compare 5/6 et 7/9. PPCM(6, 9) = 18.<br>5/6 = 15/18 ; 7/9 = 14/18 → <b>5/6 &gt; 7/9</b>.</p>\n<p>Méthode rapide du <b>produit en croix</b> : 5 × 9 = 45 et 6 × 7 = 42 ; comme 45 &gt; 42, 5/6 &gt; 7/9.</p>\n<p>On peut aussi placer les fractions sur la <b>droite graduée</b> : entre 0 et 1 se trouvent toutes les fractions inférieures à 1. Entre deux fractions, il y en a toujours une autre : par exemple entre 1/3 et 1/2 il y a 5/12. Les fractions sont <b>denses</b>, contrairement aux entiers naturels !</p>"
  },
  {
   "type": "svg",
   "title": "Fractions sur la droite et comparaison",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<line x1=\"40\" y1=\"70\" x2=\"560\" y2=\"70\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n<g stroke=\"#0f172a\" stroke-width=\"3\"><line x1=\"40\" y1=\"58\" x2=\"40\" y2=\"82\"/><line x1=\"300\" y1=\"58\" x2=\"300\" y2=\"82\"/><line x1=\"560\" y1=\"58\" x2=\"560\" y2=\"82\"/></g>\n<g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\"><text x=\"40\" y=\"105\">0</text><text x=\"300\" y=\"105\">1</text><text x=\"560\" y=\"105\">2</text></g>\n<circle cx=\"235\" cy=\"70\" r=\"8\" fill=\"#2563eb\"/><text x=\"235\" y=\"45\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1d4ed8\">3/4</text>\n<circle cx=\"495\" cy=\"70\" r=\"8\" fill=\"#dc2626\"/><text x=\"495\" y=\"45\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#b91c1c\">7/4</text>\n<circle cx=\"170\" cy=\"70\" r=\"8\" fill=\"#16a34a\"/><text x=\"170\" y=\"45\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#15803d\">1/2</text>\n<text x=\"40\" y=\"150\" font-size=\"17\" fill=\"#0f172a\">5/6 =</text>\n<g stroke=\"#ffffff\" stroke-width=\"2\">\n<rect x=\"100\" y=\"132\" width=\"330\" height=\"26\" fill=\"#e5e7eb\"/>\n<rect x=\"100\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/><rect x=\"155\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/><rect x=\"210\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/><rect x=\"265\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/><rect x=\"320\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/>\n</g>\n<text x=\"40\" y=\"200\" font-size=\"17\" fill=\"#0f172a\">7/9 =</text>\n<g stroke=\"#ffffff\" stroke-width=\"2\">\n<rect x=\"100\" y=\"182\" width=\"330\" height=\"26\" fill=\"#e5e7eb\"/>\n<rect x=\"100\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"136.7\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"173.3\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"210\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"246.7\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"283.3\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"320\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/>\n</g>\n<text x=\"450\" y=\"152\" font-size=\"16\" fill=\"#1d4ed8\" font-weight=\"bold\">= 15/18</text>\n<text x=\"450\" y=\"202\" font-size=\"16\" fill=\"#c2410c\" font-weight=\"bold\">= 14/18</text>\n<text x=\"300\" y=\"245\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\">la barre bleue est un peu plus longue : 5/6 &gt; 7/9</text>\n</svg>",
   "caption": "Les fractions inférieures à 1 sont entre 0 et 1, celles supérieures à 1 au-delà de 1. Le modèle en barres aide à les comparer."
  },
  {
   "type": "text",
   "title": "Addition et soustraction",
   "html": "<p><b>Avec le même dénominateur</b> : on additionne (ou on soustrait) les numérateurs et on garde le dénominateur.<br>2/9 + 5/9 = 7/9 &nbsp;&nbsp; 7/8 − 3/8 = 4/8 = 1/2</p>\n<p><b>Avec des dénominateurs différents</b> :</p>\n<ol>\n<li>on calcule le <b>PPCM des dénominateurs</b> (le nouveau dénominateur commun) ;</li>\n<li>on divise le PPCM par chaque dénominateur et on multiplie le résultat par le numérateur ;</li>\n<li>on additionne (ou on soustrait) les nouveaux numérateurs ;</li>\n<li>on <b>simplifie</b> le résultat, si possible.</li>\n</ol>\n<p>Exemple : <b>3/4 + 5/6</b>. PPCM(4, 6) = 12.<br>12 : 4 × 3 = 9 ; 12 : 6 × 5 = 10 → 9/12 + 10/12 = <b>19/12</b> (= 1 et 7/12).</p>\n<p>Exemple : <b>2 − 3/5</b> = 10/5 − 3/5 = <b>7/5</b> (un entier est 5/5, deux entiers sont 10/5).</p>\n<p><b>Erreur à éviter</b> : 1/2 + 1/3 ne fait <b>pas</b> 2/5 ! Cela fait 3/6 + 2/6 = <b>5/6</b>. On n'additionne jamais les dénominateurs.</p>"
  },
  {
   "type": "text",
   "title": "Multiplication, division et puissance",
   "html": "<p><b>Multiplication</b> : numérateur par numérateur, dénominateur par dénominateur.<br>2/3 × 4/5 = 8/15</p>\n<p>Il vaut mieux <b>simplifier d'abord</b>, même « en croix » (un numérateur avec le dénominateur de l'autre fraction) :<br>6/7 × 14/9 → 6 et 9 se divisent par 3, 14 et 7 par 7 → 2/1 × 2/3 = <b>4/3</b>.</p>\n<p><b>L'inverse</b> d'une fraction s'obtient en échangeant le numérateur et le dénominateur : l'inverse de 3/5 est 5/3. Une fraction multipliée par son inverse donne toujours 1. Le 0 n'a pas d'inverse.</p>\n<p><b>Division</b> : on multiplie la première fraction par l'<b>inverse</b> de la seconde.<br>3/4 : 9/8 = 3/4 × 8/9 = (je simplifie 3 avec 9 et 4 avec 8) 1/1 × 2/3 = <b>2/3</b>.</p>\n<p><b>Puissance</b> : on élève à la puissance le numérateur et le dénominateur.<br>(2/3)³ = 2³/3³ = 8/27. Les mêmes propriétés que pour les puissances des entiers naturels sont valables, et (a/b)⁰ = 1.</p>\n<p>Dans les <b>expressions</b> avec des fractions, l'ordre est toujours le même : parenthèses → puissances → × et : → + et −.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le gâteau d'anniversaire",
   "html": "<p>À la fête de Matteo, Luca mange <b>1/4</b> du gâteau et Sofia <b>1/3</b>. Quelle fraction du gâteau reste-t-il ?</p>\n<ol>\n<li>Mangé : 1/4 + 1/3 = 3/12 + 4/12 = <b>7/12</b>.</li>\n<li>Il reste : 1 − 7/12 = 12/12 − 7/12 = <b>5/12</b>.</li>\n</ol>\n<p>Le gâteau pesait <b>1 200 g</b>. Combien de grammes reste-t-il ? 5/12 de 1 200 = 1 200 : 12 × 5 = <b>500 g</b>.</p>\n<p>Le reste est partagé en parts de <b>1/24</b> de gâteau : combien de parts obtient-on ? 5/12 : 1/24 = 5/12 × 24/1 = <b>10 parts</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : la réduction et le problème inverse",
   "html": "<p><b>1.</b> Un vélo coûte <b>240 €</b>. Pendant les soldes, il est réduit de <b>1/5</b>. Combien coûte-t-il maintenant ?<br>Réduction : 240 : 5 = 48 €. Prix : 240 − 48 = <b>192 €</b> (ou : je paie les 4/5 → 240 : 5 × 4 = 192).</p>\n<p><b>2.</b> Giulia a dépensé les <b>3/8</b> de ses économies, soit <b>45 €</b>. Combien avait-elle en tout ?<br>Problème inverse : 45 : 3 × 8 = 15 × 8 = <b>120 €</b>. Il lui reste 120 − 45 = <b>75 €</b> (les 5/8).</p>\n<p>Une bonne méthode pour ces problèmes est le <b>modèle en barres</b> : dessine une barre divisée en 8 parties, colorie-en 3 et écris « 45 € » au-dessus. Une partie vaut 15 €, la barre entière 8 × 15 = 120 €.</p>"
  },
  {
   "type": "curiosity",
   "title": "Les Égyptiens n'utilisaient que des fractions unitaires",
   "html": "<p>Les anciens Égyptiens écrivaient presque toutes les fractions comme une <b>somme de fractions unitaires différentes</b> (de numérateur 1). Par exemple 3/4 = 1/2 + 1/4 et 2/5 = 1/3 + 1/15. Le <b>papyrus de Rhind</b> (vers 1650 av. J.-C.) contient une table pour écrire 2/n de cette façon.</p>\n<p>Cela paraît compliqué, mais c'était pratique : pour partager 3 pains entre 4 personnes, chacune reçoit un demi-pain plus un quart. Facile à couper !</p>\n<p>La <b>barre de fraction</b> horizontale que nous utilisons a été rendue célèbre en Europe par Fibonacci dans le <i>Liber abaci</i> (1202), qui l'avait apprise des mathématiciens arabes.</p>"
  },
  {
   "type": "curiosity",
   "title": "Les fractions en musique",
   "html": "<p>Les notes de musique sont des fractions ! La <b>ronde</b> dure 1 entier, la <b>blanche</b> 1/2, la <b>noire</b> 1/4, la <b>croche</b> 1/8, la <b>double croche</b> 1/16. Une mesure à <b>3/4</b>, écrite au début de la partition (la valse), signifie que chaque mesure contient 3 notes de 1/4.</p>\n<p>Même les notes « vont bien ensemble » grâce aux fractions : <b>Pythagore</b> découvrit qu'une corde longue de la moitié (1/2) sonne une <b>octave</b> plus haut, et une corde longue de 2/3 sonne une <b>quinte</b>. Les fractions simples donnent les sons les plus harmonieux !</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre",
   "intro": "Si les règles sur les fractions te semblent de la magie, essaie ces méthodes utilisées dans d'autres pays.",
   "tabs": [
    {
     "label": "🇸🇬 Modèle en barres (Singapour)",
     "html": "<p>À Singapour, l'un des pays qui ont les meilleurs résultats en mathématiques au monde, les problèmes sur les fractions se résolvent en dessinant des <b>barres</b> (<i>bar model</i>). Problème : « Les 2/5 d'une classe sont des garçons. Il y a 15 filles. Combien d'élèves en tout ? »</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"220\" fill=\"#ffffff\"/><g stroke=\"#0f172a\" stroke-width=\"2\"><rect x=\"50\" y=\"70\" width=\"100\" height=\"50\" fill=\"#93c5fd\"/><rect x=\"150\" y=\"70\" width=\"100\" height=\"50\" fill=\"#93c5fd\"/><rect x=\"250\" y=\"70\" width=\"100\" height=\"50\" fill=\"#f9a8d4\"/><rect x=\"350\" y=\"70\" width=\"100\" height=\"50\" fill=\"#f9a8d4\"/><rect x=\"450\" y=\"70\" width=\"100\" height=\"50\" fill=\"#f9a8d4\"/></g><g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"150\" y=\"55\" fill=\"#1d4ed8\">garçons : 2/5</text><text x=\"400\" y=\"55\" fill=\"#be185d\">filles : 3/5 = 15</text><text x=\"300\" y=\"102\" fill=\"#0f172a\">5</text><text x=\"400\" y=\"102\" fill=\"#0f172a\">5</text><text x=\"500\" y=\"102\" fill=\"#0f172a\">5</text><text x=\"100\" y=\"102\" fill=\"#0f172a\">5</text><text x=\"200\" y=\"102\" fill=\"#0f172a\">5</text></g><text x=\"300\" y=\"160\" font-size=\"18\" text-anchor=\"middle\" fill=\"#0f172a\">3 parts = 15 → 1 part = 5</text><text x=\"300\" y=\"195\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#15803d\">5 parts = 25 élèves</text></svg>"
    },
    {
     "label": "🦋 Le papillon (États-Unis)",
     "html": "<p>Aux États-Unis, beaucoup d'élèves utilisent la « <b>butterfly method</b> » pour additionner deux fractions : on multiplie <b>en croix</b> (les ailes du papillon), on additionne les produits pour avoir le numérateur, et on multiplie les dénominateurs (le corps).</p><p>2/3 + 1/4 : ailes 2 × 4 = 8 et 3 × 1 = 3 → numérateur 8 + 3 = 11 ; corps 3 × 4 = 12 → <b>11/12</b>.</p><p>Ça marche toujours, parce qu'on utilise le produit des dénominateurs comme dénominateur commun. Mais attention : avec de grands nombres, mieux vaut le PPCM, sinon il faut beaucoup simplifier ensuite (1/6 + 1/9 avec le papillon donne 15/54 = 5/18).</p>"
    },
    {
     "label": "🧊 Multiplier avec l'aire (3D)",
     "html": "<p>Comment voit-on 2/3 × 3/4 ? Prends un rectangle de <b>3 × 4 = 12</b> cubes (le dénominateur du résultat). Colorie 2 lignes sur 3 et 3 colonnes sur 4 : la partie coloriée deux fois est un rectangle de <b>2 × 3 = 6</b> cubes. Donc 2/3 × 3/4 = 6/12 = 1/2. Numérateur par numérateur, dénominateur par dénominateur : voilà pourquoi !</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "📏 Sur la droite graduée",
     "html": "<p>Partage chaque entier en 4 parties : chaque bond vaut 1/4. En comptant les bonds, tu peux additionner : 3/4 + 2/4 = 5 bonds = 5/4, c'est-à-dire un entier et un quart. Les repères montrent 3 (= 3/4) et 5 (= 5/4) si tu considères chaque graduation comme un quart.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 8,
      "step": 1,
      "marks": [
       3,
       5
      ]
     }
    },
    {
     "label": "🍕 La règle du « pourquoi on retourne »",
     "html": "<p>Pourquoi, pour diviser, multiplie-t-on par l'inverse ? Pense à une question concrète : <b>combien de parts de 1/8 de pizza y a-t-il dans 3 pizzas ?</b> Chaque pizza a 8 parts, donc 3 × 8 = 24. Tu as calculé 3 : 1/8 = 3 × 8/1 = 24 !</p><p>Diviser par une fraction, c'est se demander « <b>combien de fois ça rentre ?</b> ». Diviser par 1/8, c'est comme compter les huitièmes : on multiplie par 8. Si les parts sont de 3/8, il y en a 3 fois moins : 3 × 8/3 = 8 parts.</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : opérations",
   "questions": [
    {
     "type": "mc",
     "q": "2/5 + 1/3 = ?",
     "options": [
      "3/8",
      "11/15",
      "3/15",
      "2/15"
     ],
     "answer": 1,
     "explain": "PPCM(5, 3) = 15 : 6/15 + 5/15 = 11/15."
    },
    {
     "type": "mc",
     "q": "5/6 × 3/10 = ?",
     "options": [
      "15/60",
      "1/4",
      "8/16",
      "1/2"
     ],
     "answer": 1,
     "explain": "Je simplifie en croix 5 avec 10 et 3 avec 6 : 1/2 × 1/2 = 1/4."
    },
    {
     "type": "mc",
     "q": "4/9 : 2/3 = ?",
     "options": [
      "8/27",
      "2/3",
      "6/9",
      "3/2"
     ],
     "answer": 1,
     "explain": "4/9 × 3/2 = 12/18 = 2/3."
    },
    {
     "type": "tf",
     "q": "L'inverse de 7 est 1/7.",
     "answer": true,
     "explain": "7 = 7/1, en échangeant on obtient 1/7. En effet 7 × 1/7 = 1."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte : d'où viennent les règles des fractions",
   "nodes": [
    {
     "id": "dividere",
     "label": "Partager en parts égales",
     "x": 50,
     "y": 5,
     "color": "#64748b",
     "html": "Le besoin de partager le pain, les terres, les héritages.",
     "why": "Les Égyptiens et les Babyloniens utilisaient déjà les fractions il y a 4 000 ans pour partager les récoltes et mesurer les champs après les crues du Nil."
    },
    {
     "id": "frazione",
     "label": "Fraction a/b",
     "x": 50,
     "y": 20,
     "color": "#2563eb",
     "html": "Opérateur : divise par b et multiplie par a.",
     "why": "Le mot vient du latin « frangere » = briser. Une fraction est aussi le résultat de la division a : b, c'est pourquoi b ≠ 0."
    },
    {
     "id": "tipi",
     "label": "Inférieures à 1, supérieures à 1, entières",
     "x": 15,
     "y": 34,
     "color": "#0ea5e9",
     "html": "Plus petites que 1, plus grandes que 1, égales à un entier naturel.",
     "why": "Cela dépend de la comparaison entre numérateur et dénominateur : les fractions apparentes montrent que les entiers naturels sont un cas particulier des fractions."
    },
    {
     "id": "invariantiva",
     "label": "Propriété fondamentale",
     "x": 50,
     "y": 38,
     "color": "#16a34a",
     "html": "× ou : numérateur et dénominateur par le même nombre.",
     "why": "C'est la même propriété que celle de la division : (a × k) : (b × k) = a : b. Couper chaque part en 2 double le nombre de parts mais ne change pas la quantité."
    },
    {
     "id": "mcd",
     "label": "Simplification (PGCD)",
     "x": 25,
     "y": 56,
     "color": "#9333ea",
     "html": "On divise par le PGCD : fraction irréductible.",
     "why": "Le théorème fondamental de l'arithmétique assure que la forme irréductible est unique : chaque nombre rationnel a un seul « représentant » irréductible."
    },
    {
     "id": "mcm",
     "label": "Dénominateur commun (PPCM)",
     "x": 75,
     "y": 56,
     "color": "#ea580c",
     "html": "Pour comparer, additionner et soustraire.",
     "why": "On ne peut additionner que des « choses du même type » : des tiers avec des tiers, des quarts avec des quarts. Le PPCM est le plus petit « type » commun."
    },
    {
     "id": "moltdiv",
     "label": "× et : (inverse)",
     "x": 25,
     "y": 76,
     "color": "#dc2626",
     "html": "Produit : num × num, dén × dén. Division : × l'inverse.",
     "why": "Le produit se voit avec l'aire d'un rectangle ; diviser par a/b, c'est se demander combien de fois a/b rentre dans le nombre, c'est-à-dire multiplier par b/a."
    },
    {
     "id": "addsott",
     "label": "+ e −",
     "x": 75,
     "y": 76,
     "color": "#f59e0b",
     "html": "Même dénominateur, puis on additionne les numérateurs.",
     "why": "1/2 + 1/3 ≠ 2/5 : on le voit avec un gâteau. Les Égyptiens évitaient le problème en écrivant tout comme des sommes de fractions unitaires."
    },
    {
     "id": "razionali",
     "label": "Nombres rationnels ℚ",
     "x": 50,
     "y": 93,
     "color": "#0f766e",
     "html": "L'ensemble de toutes les fractions : un nouvel ensemble de nombres.",
     "why": "Avec les fractions, la division est toujours possible (sauf par 0). Le nom vient du latin « ratio » = rapport. Fibonacci (1202) a diffusé la barre de fraction en Europe."
    }
   ],
   "edges": [
    [
     "dividere",
     "frazione",
     "naît"
    ],
    [
     "frazione",
     "tipi",
     "se classe"
    ],
    [
     "frazione",
     "invariantiva",
     "obéit à la"
    ],
    [
     "invariantiva",
     "mcd",
     "permet de simplifier"
    ],
    [
     "invariantiva",
     "mcm",
     "permet de transformer"
    ],
    [
     "mcd",
     "moltdiv",
     "simplifier d'abord"
    ],
    [
     "mcm",
     "addsott",
     "sert à"
    ],
    [
     "moltdiv",
     "razionali",
     "forment"
    ],
    [
     "addsott",
     "razionali",
     "forment"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Fraction",
   "d": "Nombre de la forme a/b (b ≠ 0) qui indique a parts d'un entier partagé en b parts égales."
  },
  {
   "t": "Numérateur",
   "d": "Le nombre au-dessus de la barre de fraction : combien de parts on prend."
  },
  {
   "t": "Dénominateur",
   "d": "Le nombre sous la barre : en combien de parts on partage l'entier."
  },
  {
   "t": "Fraction inférieure à 1",
   "d": "Fraction dont le numérateur est plus petit que le dénominateur (elle vaut moins de 1)."
  },
  {
   "t": "Fraction supérieure à 1",
   "d": "Fraction dont le numérateur est plus grand que le dénominateur (elle vaut plus de 1)."
  },
  {
   "t": "Fraction apparente",
   "d": "Fraction dont le numérateur est un multiple du dénominateur : elle vaut un entier naturel."
  },
  {
   "t": "Fractions équivalentes",
   "d": "Fractions qui représentent la même quantité."
  },
  {
   "t": "Fraction irréductible",
   "d": "Fraction dont le numérateur et le dénominateur sont premiers entre eux."
  },
  {
   "t": "Plus petit dénominateur commun",
   "d": "Le PPCM des dénominateurs, utilisé pour comparer et additionner."
  },
  {
   "t": "Inverse",
   "d": "Fraction obtenue en échangeant le numérateur et le dénominateur."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Combien font les 5/8 de 64 ?",
    "answer": 40,
    "tol": 0,
    "explain": "64 : 8 = 8; 8 × 5 = 40."
   },
   {
    "type": "num",
    "q": "Les 3/7 d'un nombre font 21. Quel est ce nombre ?",
    "answer": 49,
    "tol": 0,
    "explain": "Problème inverse : 21 : 3 × 7 = 49."
   },
   {
    "type": "mc",
    "q": "La fraction 9/4 est…",
    "options": [
     "inférieure à 1",
     "supérieure à 1",
     "apparente",
     "unitaire"
    ],
    "answer": 1,
    "explain": "9 > 4 et 9 n'est pas un multiple de 4."
   },
   {
    "type": "mc",
    "q": "Quelle est la fraction 45/60 rendue irréductible ?",
    "options": [
     "9/12",
     "3/4",
     "15/20",
     "5/6"
    ],
    "answer": 1,
    "explain": "PGCD(45, 60) = 15 : 3/4."
   },
   {
    "type": "mc",
    "q": "Quelle fraction est la plus grande ?",
    "options": [
     "3/5",
     "4/7",
     "Elles sont égales"
    ],
    "answer": 0,
    "explain": "Produit en croix : 3 × 7 = 21 > 5 × 4 = 20, donc 3/5 > 4/7."
   },
   {
    "type": "mc",
    "q": "5/6 − 1/4 = ?",
    "options": [
     "4/2",
     "7/12",
     "1/2",
     "4/24"
    ],
    "answer": 1,
    "explain": "PPCM(6, 4) = 12 : 10/12 − 3/12 = 7/12."
   },
   {
    "type": "mc",
    "q": "(3/4)² = ?",
    "options": [
     "6/8",
     "9/16",
     "9/4",
     "3/16"
    ],
    "answer": 1,
    "explain": "On élève au carré le numérateur et le dénominateur : 9/16."
   },
   {
    "type": "mc",
    "q": "7/10 : 14/5 = ?",
    "options": [
     "1/4",
     "49/50",
     "4",
     "98/50"
    ],
    "answer": 0,
    "explain": "7/10 × 5/14 = (je simplifie 7 avec 14 et 5 avec 10) 1/2 × 1/2 = 1/4."
   },
   {
    "type": "tf",
    "q": "1/2 + 1/3 = 2/5",
    "answer": false,
    "explain": "On n'additionne pas les dénominateurs : 3/6 + 2/6 = 5/6."
   },
   {
    "type": "num",
    "q": "Un livre a 240 pages. Luca en a lu les 3/8. Combien de pages lui reste-t-il à lire ?",
    "answer": 150,
    "tol": 0,
    "unit": "pagine",
    "explain": "Lu : 240 : 8 × 3 = 90. Il reste 240 − 90 = 150 pages (les 5/8)."
   },
   {
    "type": "order",
    "q": "Range de la plus petite à la plus grande",
    "items": [
     "1/4",
     "1/3",
     "1/2",
     "2/3",
     "5/4"
    ],
    "explain": "En douzièmes : 3/12, 4/12, 6/12, 8/12, 15/12."
   },
   {
    "type": "mc",
    "q": "Quel est l'inverse de 2/9 ?",
    "options": [
     "9/2",
     "2/9",
     "−2/9",
     "1/9"
    ],
    "answer": 0,
    "explain": "On échange le numérateur et le dénominateur : 9/2."
   }
  ],
  "gen": [
   [
    "fracEquiv",
    1
   ],
   [
    "fracAdd",
    2
   ]
  ]
 }
});
