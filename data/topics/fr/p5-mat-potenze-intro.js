TOPIC('fr', {
 "id": "p5-mat-potenze-intro",
 "title": "Les puissances",
 "intro": "Comment écrire vite 10 × 10 × 10 × 10 × 10 × 10 ? Avec une <b>puissance</b> : 10<sup>6</sup>! Apprenons ce que sont la <b>base</b> et l'<b>exposant</b>, comment on calcule les puissances et pourquoi les <b>puissances de 10</b> sont si utiles pour écrire les très grands nombres.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Une multiplication « raccourcie »",
   "html": "<p>Quand tu multiplies <b>le même nombre</b> plusieurs fois par lui-même, tu peux l'écrire de façon brève avec une <b>puissance</b>.</p>\n<p>Exemple : <b>2 × 2 × 2 × 2 = 2<sup>4</sup></b> et cela se lit « deux <b>puissance quatre</b> » (en italien : « due alla quarta »).</p>\n<ul>\n<li>La <b>base</b> (2) est le nombre qui se répète, c'est-à-dire le facteur que l'on multiplie.</li>\n<li>L'<b>exposant</b> (4), écrit petit en haut à droite, dit <b>combien de fois</b> la base apparaît comme facteur.</li>\n<li>Le résultat (16) s'appelle lui aussi une <b>puissance</b>.</li>\n</ul>\n<p>Attention à l'erreur la plus courante : 2<sup>4</sup> <b>n'est pas</b> 2 × 4 = 8 ! C'est 2 × 2 × 2 × 2 = <b>16</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Base et exposant",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<text x=\"130\" y=\"170\" font-size=\"110\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">3</text>\n<text x=\"185\" y=\"100\" font-size=\"60\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">4</text>\n<text x=\"300\" y=\"150\" font-size=\"44\" fill=\"#1f2937\" text-anchor=\"middle\">=</text>\n<text x=\"460\" y=\"150\" font-size=\"34\" fill=\"#1f2937\" text-anchor=\"middle\"><tspan fill=\"#1d4ed8\">3</tspan> × <tspan fill=\"#1d4ed8\">3</tspan> × <tspan fill=\"#1d4ed8\">3</tspan> × <tspan fill=\"#1d4ed8\">3</tspan></text>\n<text x=\"460\" y=\"200\" font-size=\"34\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">= 81</text>\n<path d=\"M200 70 Q260 40 330 60\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"340\" y=\"64\" font-size=\"18\" fill=\"#dc2626\">exposant : combien de fois</text>\n<path d=\"M120 190 Q130 240 180 255\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"190\" y=\"262\" font-size=\"18\" fill=\"#1d4ed8\">base : le nombre qui se répète</text>\n<path d=\"M375 165 L545 165\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"460\" y=\"110\" font-size=\"16\" fill=\"#dc2626\" text-anchor=\"middle\">4 facteurs identiques</text>\n</svg>",
   "caption": "3⁴ se lit « trois puissance quatre » : la base 3 se multiplie par elle-même 4 fois."
  },
  {
   "type": "text",
   "title": "Comment on les lit et comment on les calcule",
   "html": "<p>On calcule <b>pas à pas</b>, en multipliant le résultat par la base :</p>\n<p>5<sup>3</sup> → 5 × 5 = 25 → 25 × 5 = <b>125</b></p>\n<table>\n<tr><th>Puissance</th><th>Se lit</th><th>Calcul</th><th>Résultat</th></tr>\n<tr><td>4<sup>2</sup></td><td>quatre au <b>carré</b></td><td>4 × 4</td><td>16</td></tr>\n<tr><td>2<sup>3</sup></td><td>deux au <b>cube</b></td><td>2 × 2 × 2</td><td>8</td></tr>\n<tr><td>3<sup>4</sup></td><td>trois puissance quatre</td><td>3 × 3 × 3 × 3</td><td>81</td></tr>\n<tr><td>2<sup>5</sup></td><td>deux puissance cinq</td><td>2 × 2 × 2 × 2 × 2</td><td>32</td></tr>\n</table>\n<p>Deux cas particuliers :</p>\n<ul>\n<li>avec l'exposant <b>1</b>, le résultat est la base elle-même : 7<sup>1</sup> = 7 ;</li>\n<li>avec l'exposant <b>0</b>, le résultat est toujours <b>1</b> (si la base n'est pas 0) : 9<sup>0</sup> = 1, 100<sup>0</sup> = 1.</li>\n</ul>\n<p>Et si la base est <b>1</b>? 1<sup>50</sup> = 1 × 1 × … × 1 = <b>1</b>!</p>"
  },
  {
   "type": "3d",
   "title": "Carré et cube en 3D",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 3,
    "b": 3,
    "c": 3
   },
   "caption": "3 × 3 × 3 = 3³ = 27 petits cubes : c'est pourquoi l'exposant 3 s'appelle « cube ». Essaie de mettre la hauteur à 1 : tu vois un carré de 3 × 3 = 3² = 9 petits cubes, le « carré »."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : base et exposant",
   "questions": [
    {
     "type": "mc",
     "q": "Dans 6<sup>3</sup>, quelle est la base ?",
     "options": [
      "3",
      "6",
      "18"
     ],
     "answer": 1,
     "explain": "La base est le grand nombre qui se répète : 6."
    },
    {
     "type": "num",
     "q": "Combien font 2<sup>3</sup>?",
     "answer": 8,
     "explain": "2 × 2 × 2 = 8 (et non 2 × 3 !)."
    },
    {
     "type": "tf",
     "q": "5<sup>2</sup> = 10",
     "answer": false,
     "explain": "5<sup>2</sup> = 5 × 5 = 25. 10 serait 5 × 2."
    },
    {
     "type": "num",
     "q": "Combien font 8<sup>0</sup>?",
     "answer": 1,
     "explain": "Tout nombre (différent de 0) mis à la puissance 0 fait 1."
    }
   ]
  },
  {
   "type": "text",
   "title": "Les puissances de 10",
   "html": "<p>Les puissances les plus pratiques de toutes sont celles de <b>base 10</b>. Regarde :</p>\n<table>\n<tr><th>Puissance</th><th>Nombre</th><th>Nom</th></tr>\n<tr><td>10<sup>0</sup></td><td>1</td><td>unité</td></tr>\n<tr><td>10<sup>1</sup></td><td>10</td><td>dizaine</td></tr>\n<tr><td>10<sup>2</sup></td><td>100</td><td>centaine</td></tr>\n<tr><td>10<sup>3</sup></td><td>1 000</td><td>millier</td></tr>\n<tr><td>10<sup>6</sup></td><td>1 000 000</td><td>million</td></tr>\n<tr><td>10<sup>9</sup></td><td>1 000 000 000</td><td>milliard</td></tr>\n</table>\n<p>La règle magique : <b>l'exposant est égal au nombre de zéros</b> après le 1. 10<sup>5</sup> = 1 suivi de 5 zéros = 100 000.</p>\n<p>Chaque rang de notre système de numération vaut une puissance de 10 : c'est pourquoi on l'appelle système <b>décimal</b> (en base 10).</p>"
  },
  {
   "type": "text",
   "title": "Écrire un nombre sous forme polynomiale",
   "html": "<p>Avec les puissances de 10, on peut « démonter » un nombre en ses chiffres. Cela s'appelle la <b>décomposition polynomiale</b> :</p>\n<p><b>4 352</b> = 4 × 1000 + 3 × 100 + 5 × 10 + 2 × 1</p>\n<p><b>4 352</b> = 4 × 10<sup>3</sup> + 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 2 × 10<sup>0</sup></p>\n<p>Et les nombres géants s'écrivent plus vite : la distance Terre–Soleil est d'environ <b>150 000 000 km</b>, c'est-à-dire <b>15 × 10<sup>7</sup> km</b> (les scientifiques écrivent 1,5 × 10<sup>8</sup> km).</p>"
  },
  {
   "type": "widget",
   "title": "Les puissances sur l'abaque",
   "widget": "abacus",
   "options": {
    "columns": [
     "um",
     "c",
     "dz",
     "u"
    ],
    "value": 4352
   },
   "caption": "Chaque tige vaut 10 fois celle qui est à sa droite : u = 10⁰, dz = 10¹, c = 10², um = 10³. Change les boules et écris le nombre sous forme polynomiale."
  },
  {
   "type": "example",
   "title": "Exemple pratique : la chaîne de messages",
   "html": "<p>Luca envoie un message à <b>3 amis</b>. Chacun l'envoie à 3 autres, et ainsi de suite. Combien de personnes le reçoivent à chaque « tour » ?</p>\n<ul>\n<li>1er tour : 3 = <b>3<sup>1</sup></b></li>\n<li>2e tour : 3 × 3 = <b>3<sup>2</sup> = 9</b></li>\n<li>3e tour : 3 × 3 × 3 = <b>3<sup>3</sup> = 27</b></li>\n<li>4e tour : <b>3<sup>4</sup> = 81</b></li>\n<li>10e tour : <b>3<sup>10</sup> = 59 049</b> personnes !</li>\n</ul>\n<p>Voilà pourquoi les nouvelles (même les fausses !) se diffusent si vite : elles grandissent « en puissance ».</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : les carreaux et les cartons",
   "html": "<p>Le sol de la chambre est un carré avec <b>8 carreaux par côté</b>. Combien de carreaux en tout ? 8 × 8 = <b>8<sup>2</sup> = 64</b>.</p>\n<p>Un entrepôt empile des cartons en forme de cube : <b>5</b> en longueur, <b>5</b> en largeur et <b>5</b> en hauteur. Combien de cartons ? 5 × 5 × 5 = <b>5<sup>3</sup> = 125</b>.</p>\n<p>C'est pourquoi l'exposant 2 s'appelle <b>carré</b> et l'exposant 3 s'appelle <b>cube</b>!</p>"
  },
  {
   "type": "svg",
   "title": "Le doublement : 2¹, 2², 2³, 2⁴",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fefce8\"/>\n<g fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"2\">\n<rect x=\"40\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"40\" y=\"198\" width=\"24\" height=\"24\"/>\n<rect x=\"130\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"130\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"158\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"158\" y=\"170\" width=\"24\" height=\"24\"/>\n</g>\n<g fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"2\">\n<rect x=\"240\" y=\"114\" width=\"24\" height=\"24\"/><rect x=\"268\" y=\"114\" width=\"24\" height=\"24\"/>\n<rect x=\"240\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"268\" y=\"142\" width=\"24\" height=\"24\"/>\n<rect x=\"240\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"268\" y=\"170\" width=\"24\" height=\"24\"/>\n<rect x=\"240\" y=\"198\" width=\"24\" height=\"24\"/><rect x=\"268\" y=\"198\" width=\"24\" height=\"24\"/>\n</g>\n<g fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"360\" y=\"114\" width=\"24\" height=\"24\"/><rect x=\"388\" y=\"114\" width=\"24\" height=\"24\"/><rect x=\"416\" y=\"114\" width=\"24\" height=\"24\"/><rect x=\"444\" y=\"114\" width=\"24\" height=\"24\"/>\n<rect x=\"360\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"388\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"416\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"444\" y=\"142\" width=\"24\" height=\"24\"/>\n<rect x=\"360\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"388\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"416\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"444\" y=\"170\" width=\"24\" height=\"24\"/>\n<rect x=\"360\" y=\"198\" width=\"24\" height=\"24\"/><rect x=\"388\" y=\"198\" width=\"24\" height=\"24\"/><rect x=\"416\" y=\"198\" width=\"24\" height=\"24\"/><rect x=\"444\" y=\"198\" width=\"24\" height=\"24\"/>\n</g>\n<text x=\"52\" y=\"255\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">2¹ = 2</text>\n<text x=\"156\" y=\"255\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">2² = 4</text>\n<text x=\"266\" y=\"255\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">2³ = 8</text>\n<text x=\"414\" y=\"255\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">2⁴ = 16</text>\n<text x=\"300\" y=\"50\" font-size=\"22\" fill=\"#7c2d12\" text-anchor=\"middle\">Chaque fois que l'exposant augmente de 1, les carreaux doublent</text>\n<text x=\"540\" y=\"180\" font-size=\"26\" fill=\"#7c2d12\" text-anchor=\"middle\">…2⁵ = 32</text>\n</svg>",
   "caption": "Ajouter 1 à l'exposant, c'est multiplier encore une fois par la base."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La légende des échecs",
   "html": "<p>On raconte que l'inventeur des <b>échecs</b> demanda au roi comme récompense : 1 grain de riz sur la première case, 2 sur la deuxième, 4 sur la troisième, 8 sur la quatrième… en doublant jusqu'à la 64e case. Le roi rit : « Si peu ? ».</p>\n<p>Mais sur la dernière case, il fallait <b>2<sup>63</sup></b> grains : environ <b>9 milliards de milliards</b>! Beaucoup plus de riz que ce qui a jamais été cultivé dans toute l'histoire de l'humanité.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le gogol",
   "html": "<p>Un nombre avec un 1 suivi de <b>100 zéros</b>, c'est-à-dire <b>10<sup>100</sup></b>, s'appelle un <b>gogol</b> (en anglais <i>googol</i>). Ce nom a été inventé en 1938 par un enfant de 9 ans, Milton Sirotta, neveu du mathématicien Edward Kasner.</p>\n<p>Le nom de l'entreprise <b>Google</b> vient justement de là (un peu mal écrit !). Pense-y : les atomes dans tout l'univers visible ne sont « que » environ 10<sup>80</sup>.</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Puissance = multiplication de <b>facteurs égaux</b> : a<sup>n</sup> = a × a × … × a (n fois).</li>\n<li><b>Base</b> = le facteur qui se répète ; <b>exposant</b> = combien de fois.</li>\n<li>Exposant 2 = <b>carré</b>; exposant 3 = <b>cube</b>.</li>\n<li>a<sup>1</sup> = a ; a<sup>0</sup> = 1 (avec a différent de 0) ; 1<sup>n</sup> = 1.</li>\n<li>10<sup>n</sup> = 1 suivi de <b>n zéros</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les puissances",
   "intro": "Si « base » et « exposant » te semblent des mots étranges, essaie l'un de ces chemins : arbres, petits cubes, pliages de papier ou la façon dont on les écrit dans d'autres pays.",
   "tabs": [
    {
     "label": "🌳 L'arbre des branches",
     "html": "<p>Imagine un arbre : le tronc se divise en <b>2 branches</b>, chaque branche en 2 autres, et ainsi de suite.</p>\n<ul>\n<li>au 1er niveau il y a 2 branches = 2<sup>1</sup>;</li>\n<li>au 2e niveau 4 rameaux = 2<sup>2</sup>;</li>\n<li>au 3e niveau 8 rameaux = 2<sup>3</sup>.</li>\n</ul>\n<p>L'<b>exposant</b> est le <b>numéro du niveau</b>, la <b>base</b> est <b>en combien de parties</b> se divise chaque branche.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#f0fdf4\"/>\n<g stroke=\"#78350f\" stroke-width=\"6\" fill=\"none\">\n<line x1=\"300\" y1=\"270\" x2=\"300\" y2=\"220\"/>\n<line x1=\"300\" y1=\"220\" x2=\"180\" y2=\"160\"/><line x1=\"300\" y1=\"220\" x2=\"420\" y2=\"160\"/>\n</g>\n<g stroke=\"#92400e\" stroke-width=\"4\">\n<line x1=\"180\" y1=\"160\" x2=\"120\" y2=\"100\"/><line x1=\"180\" y1=\"160\" x2=\"240\" y2=\"100\"/>\n<line x1=\"420\" y1=\"160\" x2=\"360\" y2=\"100\"/><line x1=\"420\" y1=\"160\" x2=\"480\" y2=\"100\"/>\n</g>\n<g stroke=\"#16a34a\" stroke-width=\"3\">\n<line x1=\"120\" y1=\"100\" x2=\"95\" y2=\"45\"/><line x1=\"120\" y1=\"100\" x2=\"145\" y2=\"45\"/>\n<line x1=\"240\" y1=\"100\" x2=\"215\" y2=\"45\"/><line x1=\"240\" y1=\"100\" x2=\"265\" y2=\"45\"/>\n<line x1=\"360\" y1=\"100\" x2=\"335\" y2=\"45\"/><line x1=\"360\" y1=\"100\" x2=\"385\" y2=\"45\"/>\n<line x1=\"480\" y1=\"100\" x2=\"455\" y2=\"45\"/><line x1=\"480\" y1=\"100\" x2=\"505\" y2=\"45\"/>\n</g>\n<g fill=\"#22c55e\"><circle cx=\"95\" cy=\"40\" r=\"9\"/><circle cx=\"145\" cy=\"40\" r=\"9\"/><circle cx=\"215\" cy=\"40\" r=\"9\"/><circle cx=\"265\" cy=\"40\" r=\"9\"/><circle cx=\"335\" cy=\"40\" r=\"9\"/><circle cx=\"385\" cy=\"40\" r=\"9\"/><circle cx=\"455\" cy=\"40\" r=\"9\"/><circle cx=\"505\" cy=\"40\" r=\"9\"/></g>\n<text x=\"530\" y=\"170\" font-size=\"20\" fill=\"#1f2937\">2¹ = 2</text>\n<text x=\"530\" y=\"110\" font-size=\"20\" fill=\"#1f2937\">2² = 4</text>\n<text x=\"530\" y=\"50\" font-size=\"20\" fill=\"#1f2937\">2³ = 8</text>\n</svg>"
    },
    {
     "label": "🧊 Petits cubes 3D",
     "html": "<p>Construis un cube de petits cubes : <b>4</b> de côté, <b>4</b> de profondeur, <b>4</b> de hauteur. Combien de petits cubes faut-il ? <b>4 × 4 × 4 = 4<sup>3</sup> = 64</b>.</p>\n<p>Fais tourner le modèle et compte d'abord une couche (4 × 4 = 4<sup>2</sup> = 16), puis multiplie par le nombre de couches. Change les curseurs pour voir 2<sup>3</sup>, 5<sup>3</sup>…</p>",
     "scene": "blocks",
     "options": {
      "mode": "volume",
      "a": 4,
      "b": 4,
      "c": 4
     }
    },
    {
     "label": "📄 Plie la feuille",
     "html": "<p>Prends une feuille et plie-la en deux : tu as <b>2</b> épaisseurs. Plie-la encore : <b>4</b>. Encore : <b>8</b>…</p>\n<p>Après <b>n</b> pliages, tu as <b>2<sup>n</sup></b> épaisseurs. Après 7 pliages (2<sup>7</sup> = 128 épaisseurs), il est presque impossible de la plier encore !</p>\n<p>Si tu pouvais plier une feuille fine de 0,1 mm <b>42 fois</b>, l'épaisseur (2<sup>42</sup> épaisseurs) dépasserait la distance de la Terre à la Lune. Les puissances croissent de façon incroyable !</p>"
    },
    {
     "label": "🌍 Comment on l'écrit ailleurs",
     "html": "<p>Dans le monde entier, on écrit l'exposant en haut à droite : 2<sup>4</sup>. Mais la façon de le lire change :</p>\n<ul>\n<li>🇮🇹 « due <b>alla quarta</b> » (deux « à la quatrième »)</li>\n<li>🇬🇧🇺🇸 « two <b>to the power of</b> four » ou « two to the fourth »</li>\n<li>🇫🇷 « deux <b>puissance</b> quatre »</li>\n<li>🇩🇪 « zwei <b>hoch</b> vier » (c'est-à-dire « deux <i>en haut</i> quatre »)</li>\n</ul>\n<p>Sur les calculatrices et dans les ordinateurs, où l'on ne peut pas écrire en petit, on utilise le symbole <b>^</b> : <code>2^4</code>. Dans beaucoup de langages de programmation (comme Python), on écrit <code>2**4</code>.</p>"
    },
    {
     "label": "➕ Somme répétée et produit répété",
     "html": "<p>Tu te souviens de la multiplication ? C'est une <b>addition répétée</b> : 3 × 4 = 3 + 3 + 3 + 3.</p>\n<p>La puissance est la marche suivante : une <b>multiplication répétée</b> : 3<sup>4</sup> = 3 × 3 × 3 × 3.</p>\n<table>\n<tr><th>Opération</th><th>Ce qu'elle répète</th><th>Exemple</th></tr>\n<tr><td>Multiplication</td><td>des additions</td><td>3 × 4 = 12</td></tr>\n<tr><td>Puissance</td><td>des multiplications</td><td>3<sup>4</sup> = 81</td></tr>\n</table>\n<p>Voilà pourquoi 3<sup>4</sup> est beaucoup plus grand que 3 × 4 !</p>"
    },
    {
     "label": "🇮🇳 La légende de l'échiquier (Inde)",
     "html": "<p>Une célèbre <b>légende</b> raconte qu'en <b>Inde</b>, l'inventeur des échecs (dans beaucoup de versions, il s'appelle <b>Sissa</b>) présenta le jeu au roi. Le roi, ravi, lui dit : « Demande-moi ce que tu veux ! ». L'inventeur ne demanda que des grains de blé : <b>1</b> grain sur la première case, <b>2</b> sur la deuxième, <b>4</b> sur la troisième, et ainsi de suite, en <b>doublant</b> chaque fois jusqu'à la case 64. Le roi rit : « Si peu ? ». La légende était déjà racontée au Moyen Âge par des écrivains arabes et persans.</p><p>Faisons les comptes avec les <b>puissances de 2</b> :</p><ul><li>case 1 : 1 = 2<sup>0</sup>; case 2 : 2 = 2<sup>1</sup>; case 3 : 4 = 2<sup>2</sup>…</li><li>sur la case <b>n</b> il y a <b>2<sup>n−1</sup></b> grains ;</li><li>case 11 : 2<sup>10</sup> = 1024 ; case 21 : 2<sup>20</sup> = plus d'<b>un million</b>;</li><li>case 64 : 2<sup>63</sup>, un nombre de 19 chiffres !</li></ul><p>En tout, il faudrait 2<sup>64</sup> − 1 = <b>18 446 744 073 709 551 615</b> grains : beaucoup plus que le blé récolté dans le monde entier en des centaines d'années. Le roi ne pouvait pas payer ! Les puissances croissent <b>très vite</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#fffbeb\"/><rect x=\"36\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"69\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"69\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁰</text><rect x=\"102\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"135\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"135\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2¹</text><rect x=\"168\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"201\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"201\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2²</text><rect x=\"234\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"267\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">8</text><text x=\"267\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2³</text><rect x=\"300\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"333\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">16</text><text x=\"333\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁴</text><rect x=\"366\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"399\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">32</text><text x=\"399\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁵</text><rect x=\"432\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"465\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">64</text><text x=\"465\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁶</text><rect x=\"498\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"531\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">128</text><text x=\"531\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁷</text><text x=\"300\" y=\"140\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Case n → 2 puissance (n − 1) grains</text><text x=\"300\" y=\"175\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">case 11 → 2¹⁰ = 1024</text><text x=\"300\" y=\"200\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">case 21 → 2²⁰ = 1 048 576 (plus d'un million !)</text><text x=\"300\" y=\"235\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">En tout : 2⁶⁴ − 1 =</text><text x=\"300\" y=\"262\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">18 446 744 073 709 551 615 grains</text></svg>"
    },
    {
     "label": "🇨🇳 Le triangle de Yang Hui (Chine)",
     "html": "<p>En <b>1261</b>, le mathématicien <b>chinois</b> <b>Yang Hui</b> publia un triangle de nombres qui était déjà connu en Chine depuis environ deux siècles (Jia Xian l'utilisait). En France, on l'appelle <b>triangle de Pascal</b>, en Italie triangle de Tartaglia : mais les Chinois le connaissaient bien avant !</p><p>Comment on le construit :</p><ol><li>En haut, écris <b>1</b>.</li><li>Chaque ligne commence et finit par <b>1</b>.</li><li>Chaque autre nombre est la <b>somme des deux nombres au-dessus</b> de lui : 1 + 2 = 3, 3 + 3 = 6…</li></ol><p>Maintenant, <b>additionne les nombres de chaque ligne</b> : 1, 2, 4, 8, 16, 32… Ce sont les <b>puissances de 2</b>! La ligne numéro n (en comptant à partir de 0) a pour somme <b>2<sup>n</sup></b>.</p><p>Pourquoi ? Chaque nombre d'une ligne est utilisé <b>deux fois</b> pour construire la ligne suivante (il va dans le nombre en bas à gauche et dans celui en bas à droite) : donc chaque ligne a une somme <b>double</b> de la précédente.</p><p>🎯 Écris toi-même la ligne suivante : combien doit faire la somme ?</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"230\" cy=\"40\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somme = 1 = 2⁰</text><circle cx=\"202\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"258\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somme = 2 = 2¹</text><circle cx=\"174\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"230\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><circle cx=\"286\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somme = 4 = 2²</text><circle cx=\"146\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"202\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"258\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"314\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somme = 8 = 2³</text><circle cx=\"118\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"118\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"174\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"230\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><circle cx=\"286\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"342\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"342\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somme = 16 = 2⁴</text><circle cx=\"90\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"90\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"146\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"202\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"258\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"314\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"370\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"370\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somme = 32 = 2⁵</text><text x=\"230\" y=\"296\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">3 + 3 au-dessus → 6 en dessous</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des puissances : touche un nœud et découvre le pourquoi",
   "nodes": [
    {
     "id": "molt",
     "label": "Multiplication",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Opération qui répète une addition : 4 × 3 = 4 + 4 + 4.",
     "why": "Les puissances naissent de la multiplication exactement comme la multiplication naît de l'addition : chaque opération est une abréviation de la précédente répétée."
    },
    {
     "id": "potenza",
     "label": "Puissance",
     "x": 50,
     "y": 30,
     "color": "#16a34a",
     "html": "Produit de facteurs tous égaux : a<sup>n</sup>.",
     "why": "Déjà les <b>Babyloniens</b> (il y a environ 4000 ans) avaient des tables de carrés et de cubes. L'écriture moderne avec l'exposant petit en haut a été introduite par le philosophe et mathématicien français <b>René Descartes</b> en 1637."
    },
    {
     "id": "base",
     "label": "Base",
     "x": 18,
     "y": 50,
     "color": "#f59e0b",
     "html": "Le facteur qui se répète.",
     "why": "On l'appelle base parce que c'est le nombre « de départ » sur lequel se construit toute la puissance, comme la base d'un édifice."
    },
    {
     "id": "esp",
     "label": "Exposant",
     "x": 82,
     "y": 50,
     "color": "#ef4444",
     "html": "Le petit nombre en haut : combien de fois la base se répète.",
     "why": "Du latin <i>exponere</i>, « mettre en évidence, exposer » : c'est le nombre mis en évidence en haut. Il augmente de 1 chaque fois que tu multiplies encore par la base."
    },
    {
     "id": "quadcubo",
     "label": "Carré et cube",
     "x": 18,
     "y": 76,
     "color": "#a855f7",
     "html": "a<sup>2</sup> se lit « a au carré », a<sup>3</sup> « a au cube ».",
     "why": "Les mathématiciens grecs, comme <b>Euclide</b>, pensaient les nombres comme des figures : un nombre multiplié par lui-même forme un carré de points ; trois fois, il forme un cube. Les noms géométriques sont restés."
    },
    {
     "id": "zero",
     "label": "Exposant 0 et 1",
     "x": 50,
     "y": 62,
     "color": "#0ea5e9",
     "html": "a<sup>1</sup> = a ; a<sup>0</sup> = 1.",
     "why": "Regarde l'échelle 2<sup>3</sup> = 8, 2<sup>2</sup> = 4, 2<sup>1</sup> = 2 : chaque fois que l'exposant baisse de 1, on <b>divise par la base</b>. Un pas de plus : 2 : 2 = 1, donc 2<sup>0</sup> = 1. C'est une convention choisie pour que toutes les règles continuent de fonctionner."
    },
    {
     "id": "dieci",
     "label": "Puissances de 10",
     "x": 82,
     "y": 76,
     "color": "#14b8a6",
     "html": "10<sup>n</sup> = 1 suivi de n zéros.",
     "why": "Notre système de numération est <b>décimal et positionnel</b> : chaque rang vaut 10 fois celui de droite. Nous utilisons probablement le 10 parce que nous avons 10 doigts ! Les chiffres indo-arabes et le zéro sont arrivés en Europe avec <b>Fibonacci</b> en 1202."
    },
    {
     "id": "scientifica",
     "label": "Nombres géants",
     "x": 50,
     "y": 92,
     "color": "#64748b",
     "html": "Les puissances de 10 servent à écrire des nombres énormes en peu de place.",
     "why": "Déjà <b>Archimède</b>, au IIIe siècle av. J.-C., dans le livre <i>L'Arénaire</i>, inventa une façon de compter avec des « myriades de myriades » pour estimer combien de grains de sable il faudrait pour remplir l'univers. Aujourd'hui, les scientifiques utilisent la <b>notation scientifique</b> (ex. 1,5 × 10<sup>8</sup> km)."
    }
   ],
   "edges": [
    [
     "molt",
     "potenza",
     "répétée devient"
    ],
    [
     "potenza",
     "base",
     "a une"
    ],
    [
     "potenza",
     "esp",
     "a un"
    ],
    [
     "base",
     "quadcubo",
     "par elle-même 2 ou 3 fois"
    ],
    [
     "esp",
     "zero",
     "cas particuliers"
    ],
    [
     "esp",
     "dieci",
     "compte les zéros"
    ],
    [
     "dieci",
     "scientifica",
     "servent pour les"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : puissances de 10 et problèmes",
   "questions": [
    {
     "type": "num",
     "q": "Combien de zéros a 10<sup>6</sup> écrit en entier ?",
     "answer": 6,
     "explain": "L'exposant indique le nombre de zéros : 1 000 000."
    },
    {
     "type": "mc",
     "q": "Comment écrit-on 1000 avec une puissance de 10 ?",
     "options": [
      "10<sup>2</sup>",
      "10<sup>3</sup>",
      "3<sup>10</sup>"
     ],
     "answer": 1,
     "explain": "1000 = 10 × 10 × 10 = 10<sup>3</sup>."
    },
    {
     "type": "num",
     "q": "Un carré a 7 carreaux par côté. Combien y a-t-il de carreaux en tout ?",
     "answer": 49,
     "explain": "7<sup>2</sup> = 7 × 7 = 49."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Puissance",
   "d": "Multiplication de facteurs égaux, écrite sous forme brève (ex. 2⁵) ; aussi son résultat."
  },
  {
   "t": "Base",
   "d": "Le facteur qui se répète dans la puissance."
  },
  {
   "t": "Exposant",
   "d": "Le petit nombre en haut : combien de fois la base se multiplie par elle-même."
  },
  {
   "t": "Carré",
   "d": "Puissance d'exposant 2 : a × a."
  },
  {
   "t": "Cube",
   "d": "Puissance d'exposant 3 : a × a × a."
  },
  {
   "t": "Puissance de 10",
   "d": "10 mis à un exposant : 1 suivi d'autant de zéros que l'exposant."
  },
  {
   "t": "Forme polynomiale",
   "d": "Écriture d'un nombre comme somme de chiffres multipliés par des puissances de 10."
  },
  {
   "t": "Gogol (googol)",
   "d": "Le nombre 10¹⁰⁰ : 1 suivi de 100 zéros."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Comment écrit-on 7 × 7 × 7 × 7 avec une puissance ?",
    "options": [
     "7<sup>4</sup>",
     "4<sup>7</sup>",
     "7 × 4"
    ],
    "answer": 0,
    "explain": "La base est 7, qui apparaît 4 fois : 7<sup>4</sup>."
   },
   {
    "type": "num",
    "q": "Combien font 3<sup>3</sup>?",
    "answer": 27,
    "explain": "3 × 3 × 3 = 27."
   },
   {
    "type": "num",
    "q": "Combien font 10<sup>4</sup>?",
    "answer": 10000,
    "explain": "1 suivi de 4 zéros : 10 000."
   },
   {
    "type": "tf",
    "q": "2<sup>5</sup> = 10",
    "answer": false,
    "explain": "2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32. On ne multiplie pas la base par l'exposant !"
   },
   {
    "type": "text",
    "q": "Comment s'appelle le petit nombre écrit en haut à droite ?",
    "answer": [
     "exposant",
     "l'exposant",
     "l exposant"
    ],
    "explain": "C'est l'exposant."
   },
   {
    "type": "mc",
    "q": "Combien vaut 15<sup>1</sup>?",
    "options": [
     "1",
     "15",
     "0"
    ],
    "answer": 1,
    "explain": "Avec l'exposant 1, le résultat est la base elle-même."
   },
   {
    "type": "tf",
    "q": "Tout nombre différent de 0 mis à la puissance 0 fait 1.",
    "answer": true,
    "explain": "Par convention a<sup>0</sup> = 1 : c'est le pas qui vient après a<sup>1</sup> en divisant par la base."
   },
   {
    "type": "mc",
    "q": "Comment se lit 9<sup>2</sup>?",
    "options": [
     "neuf fois deux",
     "neuf au carré",
     "neuf au cube"
    ],
    "answer": 1,
    "explain": "Exposant 2 : « au carré »."
   },
   {
    "type": "order",
    "q": "Range du plus petit au plus grand.",
    "items": [
     "2<sup>2</sup>",
     "3<sup>2</sup>",
     "2<sup>4</sup>",
     "10<sup>2</sup>"
    ],
    "explain": "2<sup>2</sup> = 4, 3<sup>2</sup> = 9, 2<sup>4</sup> = 16, 10<sup>2</sup> = 100."
   },
   {
    "type": "num",
    "q": "5 382 = 5 × 10<sup>3</sup> + 3 × 10<sup>?</sup> + 8 × 10 + 2. Quel exposant manque ?",
    "answer": 2,
    "explain": "Le 3 occupe le rang des centaines : 100 = 10<sup>2</sup>."
   },
   {
    "type": "num",
    "q": "Un cube de petits cubes a 6 petits cubes par arête. Combien de petits cubes contient-il ?",
    "answer": 216,
    "explain": "6<sup>3</sup> = 6 × 6 × 6 = 36 × 6 = 216."
   }
  ],
  "gen": [
   [
    "power",
    3
   ]
  ]
 }
});
