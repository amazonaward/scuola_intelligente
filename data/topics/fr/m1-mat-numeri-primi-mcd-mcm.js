TOPIC('fr', {
 "id": "m1-mat-numeri-primi-mcd-mcm",
 "title": "Nombres premiers, PGCD et PPCM",
 "intro": "Les nombres premiers sont les « briques » avec lesquelles on construit tous les autres nombres entiers. Apprenons à les reconnaître, à décomposer les nombres en facteurs et à les utiliser pour calculer le <b>Plus Grand Commun Diviseur</b> et le <b>Plus Petit Commun Multiple</b>.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "Multiples et diviseurs",
   "html": "<p>Partons de deux mots clés :</p>\n<ul>\n<li>un <b>multiple</b> d'un nombre s'obtient en le multipliant par 0, 1, 2, 3…<br>Multiples de 6 : 0, 6, 12, 18, 24, 30… (il y en a une infinité !)</li>\n<li>un <b>diviseur</b> d'un nombre est un nombre qui le divise <b>sans reste</b>.<br>Diviseurs de 12 : 1, 2, 3, 4, 6, 12 (il y en a un nombre fini).</li>\n</ul>\n<p>Les deux vont ensemble : si 12 est un <b>multiple</b> de 3, alors 3 est un <b>diviseur</b> de 12. On dit aussi que 12 est <b>divisible</b> par 3.</p>\n<p>Rappelle-toi : <b>1</b> est un diviseur de tous les nombres, et chaque nombre est un diviseur de lui-même.</p>"
  },
  {
   "type": "remember",
   "title": "Les critères de divisibilité",
   "html": "<p>Pour savoir si un nombre est divisible sans faire la division :</p>\n<table>\n<tr><th>Par</th><th>Règle</th><th>Exemple</th></tr>\n<tr><td><b>2</b></td><td>le dernier chiffre est pair (0, 2, 4, 6, 8)</td><td>374 ✔️</td></tr>\n<tr><td><b>3</b></td><td>la somme des chiffres est divisible par 3</td><td>411 → 4+1+1 = 6 ✔️</td></tr>\n<tr><td><b>4</b></td><td>les deux derniers chiffres forment un nombre divisible par 4 (ou sont 00)</td><td>1 316 → 16 ✔️</td></tr>\n<tr><td><b>5</b></td><td>le dernier chiffre est 0 ou 5</td><td>845 ✔️</td></tr>\n<tr><td><b>9</b></td><td>la somme des chiffres est divisible par 9</td><td>738 → 7+3+8 = 18 ✔️</td></tr>\n<tr><td><b>10, 100…</b></td><td>se termine par un, deux… zéros</td><td>4 500 ✔️</td></tr>\n<tr><td><b>11</b></td><td>la différence entre la somme des chiffres de rang impair et celle des chiffres de rang pair vaut 0 ou un multiple de 11</td><td>693 → (6+3) − 9 = 0 ✔️</td></tr>\n</table>"
  },
  {
   "type": "text",
   "title": "Nombres premiers et nombres composés",
   "html": "<p>Un nombre entier plus grand que 1 est dit :</p>\n<ul>\n<li><b>premier</b> s'il a <b>seulement deux diviseurs</b> : 1 et lui-même. Exemples : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…</li>\n<li><b>composé</b> s'il a <b>plus de deux diviseurs</b>. Exemples : 4 (1, 2, 4), 9 (1, 3, 9), 12 (1, 2, 3, 4, 6, 12).</li>\n</ul>\n<p>Le nombre <b>1</b> n'est ni premier ni composé : il n'a qu'un seul diviseur.</p>\n<p><b>2</b> est le seul nombre premier pair : tous les autres nombres pairs sont divisibles par 2, donc ils sont composés.</p>\n<p>Les nombres premiers inférieurs à 50 sont : <b>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : le crible d'Ératosthène",
   "html": "<p>Il y a plus de 2 200 ans, le mathématicien grec <b>Ératosthène</b> inventa une méthode pour trouver les nombres premiers, comme un tamis (crible) :</p>\n<ol>\n<li>Écris les nombres de 2 à 100.</li>\n<li>2 est premier : entoure-le et barre tous ses multiples (4, 6, 8…).</li>\n<li>Le premier nombre non barré est 3 : entoure-le et barre ses multiples (6, 9, 12…).</li>\n<li>Puis 5, puis 7… Recommence tant que tu peux.</li>\n<li>Les nombres qui restent (entourés) sont tous les nombres premiers jusqu'à 100 : il y en a <b>25</b>.</li>\n</ol>\n<p>Pour aller jusqu'à 100, il suffit de barrer les multiples de 2, 3, 5 et 7, car 11 × 11 = 121 dépasse déjà 100.</p>"
  },
  {
   "type": "widget",
   "title": "Premier ou composé ?",
   "widget": "classify",
   "options": {
    "groups": [
     "Nombre premier",
     "Nombre composé"
    ],
    "items": [
     [
      "2",
      0
     ],
     [
      "9",
      1
     ],
     [
      "13",
      0
     ],
     [
      "21",
      1
     ],
     [
      "29",
      0
     ],
     [
      "33",
      1
     ],
     [
      "37",
      0
     ],
     [
      "49",
      1
     ],
     [
      "51",
      1
     ],
     [
      "53",
      0
     ],
     [
      "57",
      1
     ],
     [
      "61",
      0
     ]
    ]
   },
   "caption": "Attention aux pièges : 51 = 3 × 17 et 57 = 3 × 19 (utilise le critère de 3 !)."
  },
  {
   "type": "text",
   "title": "La décomposition en facteurs premiers",
   "html": "<p>Le <b>théorème fondamental de l'arithmétique</b> dit que tout nombre composé peut s'écrire d'une seule façon comme <b>produit de nombres premiers</b> (à l'ordre près).</p>\n<p>Pour décomposer un nombre, on le divise par les nombres premiers, du plus petit au plus grand, jusqu'à arriver à 1. On utilise un tableau à deux colonnes :</p>\n<table>\n<tr><td>180</td><td>2</td></tr>\n<tr><td>90</td><td>2</td></tr>\n<tr><td>45</td><td>3</td></tr>\n<tr><td>15</td><td>3</td></tr>\n<tr><td>5</td><td>5</td></tr>\n<tr><td>1</td><td></td></tr>\n</table>\n<p>Donc <b>180 = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5</b>.</p>\n<p>On peut aussi utiliser l'<b>arbre des facteurs</b> : on coupe le nombre en deux facteurs quelconques, et on continue jusqu'à ce que toutes les « feuilles » soient des nombres premiers.</p>"
  },
  {
   "type": "svg",
   "title": "L'arbre des facteurs de 180",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g stroke=\"#64748b\" stroke-width=\"3\">\n<line x1=\"300\" y1=\"45\" x2=\"200\" y2=\"105\"/><line x1=\"300\" y1=\"45\" x2=\"400\" y2=\"105\"/>\n<line x1=\"200\" y1=\"125\" x2=\"140\" y2=\"185\"/><line x1=\"200\" y1=\"125\" x2=\"260\" y2=\"185\"/>\n<line x1=\"400\" y1=\"125\" x2=\"350\" y2=\"185\"/><line x1=\"400\" y1=\"125\" x2=\"450\" y2=\"185\"/>\n<line x1=\"450\" y1=\"205\" x2=\"410\" y2=\"255\"/><line x1=\"450\" y1=\"205\" x2=\"490\" y2=\"255\"/>\n</g>\n<g font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">\n<circle cx=\"300\" cy=\"35\" r=\"26\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"300\" y=\"42\" fill=\"#312e81\">180</text>\n<circle cx=\"200\" cy=\"115\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"200\" y=\"122\" fill=\"#312e81\">10</text>\n<circle cx=\"400\" cy=\"115\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"400\" y=\"122\" fill=\"#312e81\">18</text>\n<circle cx=\"140\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"140\" y=\"202\" fill=\"#713f12\">2</text>\n<circle cx=\"260\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"260\" y=\"202\" fill=\"#713f12\">5</text>\n<circle cx=\"350\" cy=\"195\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"350\" y=\"202\" fill=\"#713f12\">2</text>\n<circle cx=\"450\" cy=\"195\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"450\" y=\"202\" fill=\"#312e81\">9</text>\n<circle cx=\"410\" cy=\"265\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"410\" y=\"272\" fill=\"#713f12\">3</text>\n<circle cx=\"490\" cy=\"265\" r=\"22\" fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\"/><text x=\"490\" y=\"272\" fill=\"#713f12\">3</text>\n</g>\n<text x=\"20\" y=\"275\" font-size=\"18\" fill=\"#111\">180 = 2² × 3² × 5</text>\n<text x=\"20\" y=\"250\" font-size=\"14\" fill=\"#a16207\">en jaune : les facteurs premiers</text>\n</svg>",
   "caption": "On peut commencer de différentes façons (par exemple 180 = 12 × 15), mais à la fin les facteurs premiers sont toujours les mêmes !"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : nombres premiers et décomposition",
   "questions": [
    {
     "type": "tf",
     "q": "Le nombre 1 est un nombre premier.",
     "answer": false,
     "explain": "1 n'a qu'un seul diviseur : il n'est ni premier ni composé."
    },
    {
     "type": "mc",
     "q": "Lequel de ces nombres est premier ?",
     "options": [
      "27",
      "39",
      "41",
      "45"
     ],
     "answer": 2,
     "explain": "41 n'a que les diviseurs 1 et 41. 27 = 3³, 39 = 3 × 13, 45 = 3² × 5."
    },
    {
     "type": "mc",
     "q": "Quelle est la décomposition de 72 ?",
     "options": [
      "2³ × 3²",
      "2² × 3³",
      "2 × 36",
      "8 × 9"
     ],
     "answer": 0,
     "explain": "72 = 8 × 9 = 2³ × 3². 8 et 9 ne sont pas premiers !"
    },
    {
     "type": "tf",
     "q": "462 est divisible par 3.",
     "answer": true,
     "explain": "4 + 6 + 2 = 12, qui est divisible par 3."
    }
   ]
  },
  {
   "type": "text",
   "title": "Le Plus Grand Commun Diviseur (PGCD)",
   "html": "<p>Le <b>PGCD</b> de deux nombres ou plus est le <b>plus grand</b> de leurs <b>diviseurs communs</b>.</p>\n<p><b>Méthode 1 – liste des diviseurs</b> : PGCD(12, 18) ?<br>Diviseurs de 12 : 1, 2, <b>3</b>, 4, <b>6</b>, 12 – Diviseurs de 18 : 1, 2, 3, 6, 9, 18.<br>Communs : 1, 2, 3, 6 → <b>PGCD = 6</b>.</p>\n<p><b>Méthode 2 – décomposition</b> (plus rapide avec de grands nombres) :</p>\n<ol>\n<li>Décompose les nombres en facteurs premiers.</li>\n<li>Prends seulement les facteurs <b>communs</b>, avec le <b>plus petit</b> exposant.</li>\n<li>Multiplie-les.</li>\n</ol>\n<p>PGCD(60, 84) : 60 = 2² × 3 × 5 ; 84 = 2² × 3 × 7. Communs : 2² et 3 → PGCD = 4 × 3 = <b>12</b>.</p>\n<p>Si le PGCD vaut 1, les nombres sont dits <b>premiers entre eux</b> (ex. 8 et 15).</p>"
  },
  {
   "type": "text",
   "title": "Le Plus Petit Commun Multiple (PPCM)",
   "html": "<p>Le <b>PPCM</b> de deux nombres ou plus est le <b>plus petit</b> de leurs <b>multiples communs</b> (différent de 0).</p>\n<p><b>Méthode 1 – liste des multiples</b> : PPCM(4, 6) ?<br>Multiples de 4 : 4, 8, <b>12</b>, 16, 20, 24… – Multiples de 6 : 6, <b>12</b>, 18, 24…<br>→ <b>PPCM = 12</b>.</p>\n<p><b>Méthode 2 – décomposition</b> :</p>\n<ol>\n<li>Décompose les nombres en facteurs premiers.</li>\n<li>Prends les facteurs <b>communs et non communs</b>, chacun une seule fois, avec le <b>plus grand</b> exposant.</li>\n<li>Multiplie-les.</li>\n</ol>\n<p>PPCM(60, 84) : 60 = 2² × 3 × 5 ; 84 = 2² × 3 × 7 → 2² × 3 × 5 × 7 = <b>420</b>.</p>\n<p>Astuce de vérification pour deux nombres : <b>PGCD × PPCM = produit des deux nombres</b>. En effet 12 × 420 = 5 040 = 60 × 84 ✔️</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique (PGCD) : les sachets de bonbons",
   "html": "<p>Tu as <b>24 bonbons à la fraise</b> et <b>36 au citron</b>. Tu veux préparer des sachets tous identiques, en utilisant tous les bonbons, en <b>plus grand nombre possible</b>. Combien de sachets ?</p>\n<p>Le nombre de sachets doit diviser à la fois 24 et 36, et être le plus grand possible : c'est le <b>PGCD</b>.</p>\n<p>24 = 2³ × 3 ; 36 = 2² × 3² → PGCD = 2² × 3 = <b>12 sachets</b>.</p>\n<p>Dans chaque sachet : 24 : 12 = <b>2 à la fraise</b> et 36 : 12 = <b>3 au citron</b>.</p>\n<p>Mots indices du PGCD : « le plus grand », « partager en parts égales », « sans reste ».</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique (PPCM) : les bus",
   "html": "<p>À l'arrêt, le bus <b>A</b> passe toutes les <b>12 minutes</b> et le bus <b>B</b> toutes les <b>18 minutes</b>. À 8 h 00, ils partent ensemble. Quand repartiront-ils de nouveau ensemble ?</p>\n<p>Nous cherchons le premier temps qui est multiple à la fois de 12 et de 18 : c'est le <b>PPCM</b>.</p>\n<p>12 = 2² × 3 ; 18 = 2 × 3² → PPCM = 2² × 3² = <b>36 minutes</b>.</p>\n<p>Ils repartiront ensemble à <b>8 h 36</b>.</p>\n<p>Mots indices du PPCM : « de nouveau ensemble », « en même temps », « le plus petit », événements qui se répètent.</p>"
  },
  {
   "type": "curiosity",
   "title": "Les cigales mathématiciennes",
   "html": "<p>En Amérique du Nord vivent des cigales qui restent sous terre pendant <b>13 ou 17 ans</b> puis sortent toutes ensemble, par milliards ! 13 et 17 sont des nombres premiers.</p>\n<p>Les scientifiques pensent que c'est une « astuce » contre les prédateurs : si un prédateur a un cycle de vie de 2, 3, 4 ou 6 ans, avec un cycle premier les cigales le rencontrent plus rarement. Par exemple, le PPCM de 17 et 6 est 102 : une rencontre tous les 102 ans !</p>"
  },
  {
   "type": "curiosity",
   "title": "Les nombres premiers protègent tes secrets",
   "html": "<p>Euclide démontra, il y a plus de 2 300 ans, que les nombres premiers sont <b>infinis</b>.</p>\n<p>Aujourd'hui, les nombres premiers géants (avec des centaines de chiffres) servent à la <b>cryptographie</b> : ils protègent les messages des chats, les mots de passe et les paiements en ligne. Multiplier deux nombres premiers énormes est facile pour un ordinateur, mais revenir en arrière et découvrir lesquels c'étaient est très difficile !</p>\n<p>Le plus grand nombre premier connu a plus de <b>41 millions de chiffres</b>.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les nombres premiers, le PGCD et le PPCM",
   "intro": "Il y a beaucoup de chemins pour arriver au même résultat. Dans le monde entier, les élèves utilisent des méthodes différentes : choisis celle qui te ressemble le plus.",
   "tabs": [
    {
     "label": "🧊 Rectangles de cubes (3D)",
     "html": "<p>Prends 12 cubes : tu peux les disposer en différents rectangles : 1 × 12, 2 × 6, 3 × 4. Les côtés des rectangles sont justement les <b>diviseurs</b> de 12.</p><p>Essaie maintenant avec 7 cubes : le seul rectangle possible est une rangée 1 × 7. Un nombre est <b>premier</b> quand on ne peut faire <b>qu'une seule rangée</b> ! Change les nombres avec les curseurs et cherche les nombres « une-seule-rangée ».</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🕸️ Le crible d'Ératosthène",
     "html": "<p>Ératosthène (IIIe s. av. J.-C.) inventa un « tamis » : écris les nombres, barre 1, puis entoure 2 et barre tous ses multiples ; entoure le premier nombre non barré (3) et barre ses multiples ; puis 5, 7… Ceux qui restent sont les nombres premiers. Voici le résultat jusqu'à 30 : les <b>verts</b> sont premiers.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\"><g font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\"><rect x=\"10\" y=\"10\" width=\"54\" height=\"54\" fill=\"#e5e7eb\"/><text x=\"37\" y=\"44\" fill=\"#9ca3af\">1</text><rect x=\"68\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"95\" y=\"44\" fill=\"#14532d\">2</text><rect x=\"126\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"44\" fill=\"#14532d\">3</text><rect x=\"184\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"44\" fill=\"#991b1b\">4</text><rect x=\"242\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"269\" y=\"44\" fill=\"#14532d\">5</text><rect x=\"300\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"44\" fill=\"#991b1b\">6</text><rect x=\"358\" y=\"10\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"385\" y=\"44\" fill=\"#14532d\">7</text><rect x=\"416\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"44\" fill=\"#991b1b\">8</text><rect x=\"474\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"501\" y=\"44\" fill=\"#991b1b\">9</text><rect x=\"532\" y=\"10\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"44\" fill=\"#991b1b\">10</text><rect x=\"10\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"37\" y=\"104\" fill=\"#14532d\">11</text><rect x=\"68\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"95\" y=\"104\" fill=\"#991b1b\">12</text><rect x=\"126\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"104\" fill=\"#14532d\">13</text><rect x=\"184\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"104\" fill=\"#991b1b\">14</text><rect x=\"242\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"269\" y=\"104\" fill=\"#991b1b\">15</text><rect x=\"300\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"104\" fill=\"#991b1b\">16</text><rect x=\"358\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"385\" y=\"104\" fill=\"#14532d\">17</text><rect x=\"416\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"104\" fill=\"#991b1b\">18</text><rect x=\"474\" y=\"70\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"501\" y=\"104\" fill=\"#14532d\">19</text><rect x=\"532\" y=\"70\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"104\" fill=\"#991b1b\">20</text><rect x=\"10\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"37\" y=\"164\" fill=\"#991b1b\">21</text><rect x=\"68\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"95\" y=\"164\" fill=\"#991b1b\">22</text><rect x=\"126\" y=\"130\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"153\" y=\"164\" fill=\"#14532d\">23</text><rect x=\"184\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"211\" y=\"164\" fill=\"#991b1b\">24</text><rect x=\"242\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"269\" y=\"164\" fill=\"#991b1b\">25</text><rect x=\"300\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"327\" y=\"164\" fill=\"#991b1b\">26</text><rect x=\"358\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"385\" y=\"164\" fill=\"#991b1b\">27</text><rect x=\"416\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"443\" y=\"164\" fill=\"#991b1b\">28</text><rect x=\"474\" y=\"130\" width=\"54\" height=\"54\" fill=\"#86efac\"/><text x=\"501\" y=\"164\" fill=\"#14532d\">29</text><rect x=\"532\" y=\"130\" width=\"54\" height=\"54\" fill=\"#fecaca\"/><text x=\"559\" y=\"164\" fill=\"#991b1b\">30</text></g></svg>"
    },
    {
     "label": "🪜 La méthode en colonne",
     "html": "<p>Dans beaucoup de pays (France, Roumanie, Russie, Espagne…), on décompose en colonne : on trace une ligne verticale, à droite on écrit le <b>plus petit nombre premier</b> qui divise, à gauche le résultat, et on continue jusqu'à arriver à 1.</p><p>En lisant la colonne de droite : 360 = 2 × 2 × 2 × 3 × 3 × 5 = <b>2³ × 3² × 5</b>. C'est la même chose que l'arbre des facteurs, juste dessiné à la verticale : beaucoup trouvent cela plus ordonné.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"300\" y1=\"15\" x2=\"300\" y2=\"285\" stroke=\"#1e293b\" stroke-width=\"4\"/><g font-size=\"26\" font-weight=\"bold\"><text x=\"280\" y=\"45\" text-anchor=\"end\" fill=\"#1e3a8a\">360</text><text x=\"320\" y=\"45\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"85\" text-anchor=\"end\" fill=\"#1e3a8a\">180</text><text x=\"320\" y=\"85\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"125\" text-anchor=\"end\" fill=\"#1e3a8a\">90</text><text x=\"320\" y=\"125\" fill=\"#dc2626\">2</text><text x=\"280\" y=\"165\" text-anchor=\"end\" fill=\"#1e3a8a\">45</text><text x=\"320\" y=\"165\" fill=\"#16a34a\">3</text><text x=\"280\" y=\"205\" text-anchor=\"end\" fill=\"#1e3a8a\">15</text><text x=\"320\" y=\"205\" fill=\"#16a34a\">3</text><text x=\"280\" y=\"245\" text-anchor=\"end\" fill=\"#1e3a8a\">5</text><text x=\"320\" y=\"245\" fill=\"#9333ea\">5</text><text x=\"280\" y=\"285\" text-anchor=\"end\" fill=\"#1e3a8a\">1</text></g><text x=\"460\" y=\"150\" font-size=\"24\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">360 = 2³ × 3² × 5</text></svg>"
    },
    {
     "label": "🎂 Le « gâteau » : PGCD et PPCM ensemble",
     "html": "<p>Méthode utilisée aux États-Unis et en Asie (on l'appelle « ladder » ou « cake method »). Écris les deux nombres l'un à côté de l'autre et divise-les <b>tous les deux</b> par un nombre premier qui les divise tous les deux, jusqu'à ce qu'il n'y en ait plus :</p><table><tr><td>2</td><td>24</td><td>36</td></tr><tr><td>2</td><td>12</td><td>18</td></tr><tr><td>3</td><td>6</td><td>9</td></tr><tr><td></td><td><b>2</b></td><td><b>3</b></td></tr></table><ul><li><b>PGCD</b> = produit des nombres à gauche = 2 × 2 × 3 = <b>12</b></li><li><b>PPCM</b> = nombres à gauche × nombres restés en bas = 2 × 2 × 3 × 2 × 3 = <b>72</b></li></ul><p>Vérification : PGCD × PPCM = 12 × 72 = 864 = 24 × 36. Ça marche toujours avec deux nombres !</p>"
    },
    {
     "label": "🔁 L'algorithme d'Euclide",
     "html": "<p>Euclide (vers 300 av. J.-C.) trouva une méthode très rapide pour le PGCD, <b>sans décomposer</b> : on divise le plus grand nombre par le plus petit et on garde le reste ; puis on divise le diviseur par le reste… jusqu'à ce que le reste soit 0.</p><p><b>PGCD(84, 36)</b> :</p><ul><li>84 : 36 = 2 reste <b>12</b></li><li>36 : 12 = 3 reste <b>0</b> → PGCD = <b>12</b></li></ul><p><b>Pourquoi ça marche ?</b> Tout nombre qui divise 84 et 36 divise aussi 84 − 36 − 36 = 12. Donc les diviseurs communs ne changent pas pendant que les nombres deviennent de plus en plus petits. C'est l'un des plus anciens algorithmes de l'histoire : les ordinateurs l'utilisent encore !</p>"
    },
    {
     "label": "🚦 Une histoire pour le PPCM",
     "html": "<p>Deux phares clignotent ensemble à minuit : le premier toutes les 6 secondes, le second toutes les 8 secondes. Quand clignoteront-ils de nouveau ensemble ?</p><ul><li>Phare A : 6, 12, 18, <b>24</b>, 30…</li><li>Phare B : 8, 16, <b>24</b>, 32…</li></ul><p>Après <b>24 secondes</b> = PPCM(6, 8). Le PPCM répond toujours à la question « <i>quand se retrouvent-ils ?</i> ». Le PGCD, lui, répond à « <i>en combien de groupes égaux puis-je tout partager sans reste ?</i> ».</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : PGCD et PPCM",
   "questions": [
    {
     "type": "num",
     "q": "PGCD(18, 24) = ?",
     "answer": 6,
     "tol": 0,
     "explain": "18 = 2 × 3², 24 = 2³ × 3 → facteurs communs avec le plus petit exposant : 2 × 3 = 6."
    },
    {
     "type": "num",
     "q": "PPCM(6, 8) = ?",
     "answer": 24,
     "tol": 0,
     "explain": "6 = 2 × 3, 8 = 2³ → 2³ × 3 = 24."
    },
    {
     "type": "mc",
     "q": "Deux amis vont à la piscine, l'un tous les 4 jours et l'autre tous les 6 jours. Aujourd'hui ils y sont allés ensemble. Que dois-tu calculer pour savoir quand ils se reverront ?",
     "options": [
      "Le PGCD",
      "Le PPCM",
      "La somme",
      "La différence"
     ],
     "answer": 1,
     "explain": "Des événements qui se répètent et se retrouvent ensemble : il faut le PPCM (12 jours)."
    },
    {
     "type": "tf",
     "q": "8 et 15 sont premiers entre eux.",
     "answer": true,
     "explain": "8 = 2³ et 15 = 3 × 5 n'ont pas de facteurs communs : PGCD = 1."
    }
   ]
  },
  {
   "type": "3d",
   "title": "Les diviseurs de 24 en 3D",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 4,
    "b": 6
   },
   "caption": "24 cubes peuvent former les rectangles 1 × 24, 2 × 12, 3 × 8 et 4 × 6 : les diviseurs de 24 sont 1, 2, 3, 4, 6, 8, 12, 24. Essaie avec 23 : on ne peut faire qu'une rangée. 23 est premier !"
  },
  {
   "type": "conceptMap",
   "title": "Carte : pourquoi les nombres premiers sont si importants",
   "nodes": [
    {
     "id": "naturali",
     "label": "Nombres entiers naturels",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "0, 1, 2, 3, 4… les nombres pour compter.",
     "why": "Ils naissent du besoin de compter des objets : moutons, jours, pièces. Ils sont le point de départ de toute l'arithmétique."
    },
    {
     "id": "divisibilita",
     "label": "Multiples et diviseurs",
     "x": 50,
     "y": 22,
     "color": "#3b82f6",
     "html": "a est un diviseur de b si b : a ne donne pas de reste ; b est alors un multiple de a.",
     "why": "Cela vient du problème pratique de partager des choses en parts égales sans reste : c'est pourquoi la division avec reste est la base de tout."
    },
    {
     "id": "criteri",
     "label": "Critères de divisibilité",
     "x": 15,
     "y": 36,
     "color": "#0ea5e9",
     "html": "Raccourcis : pour 2 le dernier chiffre pair, pour 3 la somme des chiffres divisible par 3, pour 5 le dernier chiffre 0 ou 5…",
     "why": "Ils fonctionnent parce que nous écrivons les nombres en base 10 : par exemple 10, 100, 1000… divisés par 3 donnent toujours un reste de 1, donc seule compte la somme des chiffres."
    },
    {
     "id": "primi",
     "label": "Nombres premiers",
     "x": 50,
     "y": 40,
     "color": "#16a34a",
     "html": "Nombres plus grands que 1 avec seulement deux diviseurs : 1 et eux-mêmes.",
     "why": "Euclide les définit dans les Éléments (vers 300 av. J.-C.). Ce sont les « atomes » des nombres : on ne peut pas les casser en produits de nombres plus petits."
    },
    {
     "id": "infiniti",
     "label": "Les nombres premiers sont infinis",
     "x": 85,
     "y": 36,
     "color": "#22c55e",
     "html": "Il n'existe pas de nombre premier plus grand que tous les autres.",
     "why": "Démonstration d'Euclide : suppose que tu as tous les nombres premiers. Multiplie-les et ajoute 1. Le nouveau nombre, divisé par chacun de ces nombres premiers, donne un reste de 1 : donc soit il est premier lui-même, soit il a un diviseur premier qui manquait dans la liste. Contradiction ! Les nombres premiers ne finissent jamais."
    },
    {
     "id": "tfa",
     "label": "Théorème fondamental de l'arithmétique",
     "x": 50,
     "y": 60,
     "color": "#f59e0b",
     "html": "Tout nombre plus grand que 1 s'écrit comme produit de nombres premiers d'une seule façon (à l'ordre près).",
     "why": "L'existence de la décomposition est facile : si un nombre n'est pas premier, tu le casses, et tu continues. L'unicité repose sur le lemme d'Euclide (si un nombre premier divise un produit, il divise l'un des facteurs). Carl Friedrich Gauss l'énonça et le démontra complètement en 1801."
    },
    {
     "id": "scomposizione",
     "label": "Décomposition en facteurs",
     "x": 50,
     "y": 74,
     "color": "#ea580c",
     "html": "Arbre, colonne ou gâteau : ex. 360 = 2³ × 3² × 5.",
     "why": "Grâce au théorème fondamental, peu importe par où tu commences : tu arriveras toujours aux mêmes facteurs."
    },
    {
     "id": "mcd",
     "label": "PGCD",
     "x": 22,
     "y": 88,
     "color": "#9333ea",
     "html": "Facteurs communs, pris une seule fois, avec le plus petit exposant.",
     "why": "Un diviseur commun ne peut contenir que des facteurs présents dans les deux nombres, et pas plus de fois qu'ils n'apparaissent dans le nombre qui en a le moins."
    },
    {
     "id": "mcm",
     "label": "PPCM",
     "x": 78,
     "y": 88,
     "color": "#db2777",
     "html": "Facteurs communs et non communs, pris une seule fois, avec le plus grand exposant.",
     "why": "Un multiple commun doit « contenir » les deux nombres : donc tous leurs facteurs, chacun autant de fois qu'il le faut pour le nombre qui en a le plus."
    },
    {
     "id": "euclide",
     "label": "Algorithme d'Euclide",
     "x": 15,
     "y": 70,
     "color": "#7c3aed",
     "html": "PGCD par divisions successives, sans décomposer.",
     "why": "Les diviseurs communs de a et b sont les mêmes que ceux de b et du reste de a : b. Les nombres diminuent jusqu'à ce que le reste soit 0."
    },
    {
     "id": "usi",
     "label": "À quoi ça sert",
     "x": 85,
     "y": 70,
     "color": "#0f766e",
     "html": "Simplifier des fractions, additionner des fractions, organiser des tours et des calendriers, cryptographie (RSA).",
     "why": "Multiplier deux nombres premiers énormes est facile, mais les retrouver à partir du produit est très difficile : c'est sur cette différence que reposent les cadenas numériques qui protègent Internet."
    }
   ],
   "edges": [
    [
     "naturali",
     "divisibilita",
     "diviser sans reste"
    ],
    [
     "divisibilita",
     "criteri",
     "raccourcis"
    ],
    [
     "divisibilita",
     "primi",
     "seulement 2 diviseurs"
    ],
    [
     "primi",
     "infiniti",
     "Euclide démontre"
    ],
    [
     "primi",
     "tfa",
     "briques de tous les nombres"
    ],
    [
     "tfa",
     "scomposizione",
     "garantit"
    ],
    [
     "scomposizione",
     "mcd",
     "exposant le plus petit"
    ],
    [
     "scomposizione",
     "mcm",
     "exposant le plus grand"
    ],
    [
     "divisibilita",
     "euclide",
     "restes"
    ],
    [
     "euclide",
     "mcd",
     "calcule"
    ],
    [
     "tfa",
     "usi",
     "applications"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Multiple",
   "d": "Nombre obtenu en multipliant un nombre par un nombre entier."
  },
  {
   "t": "Diviseur",
   "d": "Nombre qui en divise un autre sans reste."
  },
  {
   "t": "Nombre premier",
   "d": "Nombre plus grand que 1 divisible seulement par 1 et par lui-même."
  },
  {
   "t": "Nombre composé",
   "d": "Nombre qui a plus de deux diviseurs."
  },
  {
   "t": "Facteur premier",
   "d": "Nombre premier qui apparaît dans la décomposition d'un nombre."
  },
  {
   "t": "Décomposition",
   "d": "Écriture d'un nombre comme produit de facteurs premiers."
  },
  {
   "t": "PGCD",
   "d": "Plus Grand Commun Diviseur : le plus grand diviseur commun à plusieurs nombres."
  },
  {
   "t": "PPCM",
   "d": "Plus Petit Commun Multiple : le plus petit multiple commun (non nul) à plusieurs nombres."
  },
  {
   "t": "Premiers entre eux",
   "d": "Nombres dont le PGCD est égal à 1."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Quel ensemble contient seulement des nombres premiers ?",
    "options": [
     "2, 3, 9, 11",
     "3, 5, 7, 13",
     "1, 2, 3, 5",
     "5, 7, 15, 17"
    ],
    "answer": 1,
    "explain": "9 et 15 sont composés, 1 n'est pas premier."
   },
   {
    "type": "tf",
    "q": "2 est le seul nombre premier pair.",
    "answer": true,
    "explain": "Tout autre nombre pair est divisible par 2, donc il est composé."
   },
   {
    "type": "mc",
    "q": "Le nombre 5 430 est divisible par…",
    "options": [
     "2, 3, 5 et 10",
     "seulement 2 et 5",
     "seulement 10",
     "2, 5, 9"
    ],
    "answer": 0,
    "explain": "Il se termine par 0 (2, 5, 10) et 5+4+3+0 = 12 est divisible par 3, mais pas par 9."
   },
   {
    "type": "mc",
    "q": "La décomposition de 120 est…",
    "options": [
     "2³ × 3 × 5",
     "2² × 3 × 10",
     "2 × 3 × 4 × 5",
     "2⁴ × 3 × 5"
    ],
    "answer": 0,
    "explain": "120 = 8 × 15 = 2³ × 3 × 5."
   },
   {
    "type": "num",
    "q": "PGCD(36, 48) = ?",
    "answer": 12,
    "tol": 0,
    "explain": "36 = 2² × 3², 48 = 2⁴ × 3 → 2² × 3 = 12."
   },
   {
    "type": "num",
    "q": "PPCM(10, 15) = ?",
    "answer": 30,
    "tol": 0,
    "explain": "10 = 2 × 5, 15 = 3 × 5 → 2 × 3 × 5 = 30."
   },
   {
    "type": "num",
    "q": "Tu as 30 roses et 45 tulipes : tu veux faire le plus grand nombre de bouquets identiques en utilisant toutes les fleurs. Combien de bouquets ?",
    "answer": 15,
    "tol": 0,
    "explain": "PGCD(30, 45) = 15 : chaque bouquet aura 2 roses et 3 tulipes."
   },
   {
    "type": "num",
    "q": "Un phare clignote toutes les 8 secondes, un autre toutes les 12. Ils clignotent ensemble maintenant : après combien de secondes le referont-ils ?",
    "answer": 24,
    "tol": 0,
    "unit": "s",
    "explain": "PPCM(8, 12) = 24 secondes."
   },
   {
    "type": "text",
    "q": "Comment s'appelle la méthode inventée par un mathématicien grec pour trouver les nombres premiers en « tamisant » les nombres ?",
    "answer": [
     "crible d'eratosthene",
     "crible",
     "le crible d'eratosthene"
    ],
    "explain": "C'est le crible d'Ératosthène."
   },
   {
    "type": "tf",
    "q": "Le PGCD de deux nombres est toujours plus grand que leur PPCM.",
    "answer": false,
    "explain": "Le PGCD est au plus égal au plus petit nombre ; le PPCM est au moins égal au plus grand."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour calculer le PPCM avec la décomposition",
    "items": [
     "Décompose les nombres en facteurs premiers",
     "Prends les facteurs communs et non communs",
     "Choisis pour chacun le plus grand exposant",
     "Multiplie les facteurs choisis"
    ],
    "explain": "Communs et non communs, plus grand exposant, puis on multiplie."
   }
  ],
  "gen": [
   [
    "isPrime",
    1
   ],
   [
    "gcd",
    1
   ],
   [
    "lcm",
    1
   ]
  ]
 }
});
