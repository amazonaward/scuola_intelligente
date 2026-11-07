TOPIC('fr', {
 "id": "m2-mat-rapporti-proporzioni",
 "title": "Rapports et proportions",
 "intro": "L'échelle d'une carte, la recette pour 4 personnes à adapter pour 10, la vitesse d'un train, l'écran 16:9 du téléphone : derrière toutes ces choses, il y a des <b>rapports</b> et des <b>proportions</b>. Apprenons ce que c'est, leurs <b>propriétés</b> et comment trouver le <b>terme inconnu</b>.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "Le rapport entre deux nombres",
   "html": "<p>Le <b>rapport</b> entre deux nombres <i>a</i> et <i>b</i> (avec b ≠ 0) est le <b>quotient</b> de la division a : b. Il s'écrit <b>a : b</b> ou <b>a/b</b>.</p>\n<ul>\n<li><i>a</i> s'appelle l'<b>antécédent</b>, <i>b</i> s'appelle le <b>conséquent</b>.</li>\n<li>Exemple : le rapport entre 12 et 4 est 12 : 4 = <b>3</b> ; le rapport entre 4 et 12 est 4/12 = <b>1/3</b> (rapport <b>inverse</b>).</li>\n</ul>\n<p>Propriété : si tu multiplies ou divises l'antécédent et le conséquent par le <b>même nombre</b> (différent de 0), le rapport <b>ne change pas</b> : 12 : 4 = 24 : 8 = 6 : 2 = 3. (C'est la même propriété que celle des fractions équivalentes !)</p>"
  },
  {
   "type": "text",
   "title": "Rapports entre grandeurs",
   "html": "<p><b>Grandeurs homogènes</b> (du même type, même unité de mesure) : le rapport est un <b>nombre pur</b>, sans unité.</p>\n<ul>\n<li><b>Échelle</b> d'une carte : distance sur la carte / distance réelle. Une échelle de <b>1 : 100 000</b> signifie que 1 cm sur la carte = 100 000 cm = <b>1 km</b> dans la réalité.</li>\n<li><b>Pourcentage</b> : un rapport de conséquent 100 (15 % = 15/100).</li>\n<li><b>Format</b> des écrans : 16 : 9 (largeur : hauteur).</li>\n</ul>\n<p><b>Grandeurs non homogènes</b> (de types différents) : le rapport est une <b>nouvelle grandeur</b> avec sa propre unité.</p>\n<ul>\n<li><b>Vitesse</b> = distance / temps → 150 km en 2 h = <b>75 km/h</b> ;</li>\n<li><b>Masse volumique</b> = masse / volume → eau : 1 g/cm³ ;</li>\n<li><b>Prix unitaire</b> = prix / quantité → 3 € pour 2 kg = <b>1,50 €/kg</b> ;</li>\n<li><b>Densité de population</b> = habitants / superficie (Italie : environ 195 hab./km²).</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : lire la carte",
   "html": "<p>Sur une carte à l'échelle <b>1 : 25 000</b> (celle des sentiers de montagne), deux refuges sont distants de <b>8 cm</b>. Quelle est leur vraie distance ?</p>\n<ol>\n<li>8 cm × 25 000 = 200 000 cm</li>\n<li>200 000 cm = 2000 m = <b>2 km</b> (à vol d'oiseau).</li>\n</ol>\n<p>Et dans l'autre sens : un lac long de 3 km, combien de centimètres mesurera-t-il sur la carte ? 3 km = 300 000 cm → 300 000 : 25 000 = <b>12 cm</b>.</p>"
  },
  {
   "type": "text",
   "title": "La proportion",
   "html": "<p>Une <b>proportion</b> est une <b>égalité entre deux rapports</b> :</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>a : b = c : d</b></p>\n<p>On lit « <i>a est à b comme c est à d</i> ». Exemple : <b>3 : 6 = 5 : 10</b> (les deux rapports valent 0,5).</p>\n<ul>\n<li><b>a</b> et <b>d</b> (les termes extérieurs) sont les <b>extrêmes</b> ;</li>\n<li><b>b</b> et <b>c</b> (les termes intérieurs) sont les <b>moyens</b> ;</li>\n<li>a et c sont les <b>antécédents</b> ; b et d les <b>conséquents</b>.</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Extrêmes et moyens",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#faf5ff\"/>\n<text x=\"110\" y=\"135\" font-size=\"56\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">3</text>\n<text x=\"185\" y=\"135\" font-size=\"56\" fill=\"#1f2937\" text-anchor=\"middle\">:</text>\n<text x=\"250\" y=\"135\" font-size=\"56\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">6</text>\n<text x=\"315\" y=\"135\" font-size=\"56\" fill=\"#1f2937\" text-anchor=\"middle\">=</text>\n<text x=\"380\" y=\"135\" font-size=\"56\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">5</text>\n<text x=\"440\" y=\"135\" font-size=\"56\" fill=\"#1f2937\" text-anchor=\"middle\">:</text>\n<text x=\"510\" y=\"135\" font-size=\"56\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">10</text>\n<path d=\"M110 70 Q310 0 510 70\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<text x=\"310\" y=\"30\" font-size=\"18\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">EXTRÊMES : 3 × 10 = 30</text>\n<path d=\"M250 155 Q315 210 380 155\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<text x=\"315\" y=\"235\" font-size=\"18\" fill=\"#2563eb\" text-anchor=\"middle\" font-weight=\"bold\">MOYENS : 6 × 5 = 30</text>\n</svg>",
   "caption": "Le produit des extrêmes est égal au produit des moyens : c'est la propriété fondamentale."
  },
  {
   "type": "remember",
   "title": "Propriété fondamentale",
   "html": "<p>Dans toute proportion, <b>le produit des moyens est égal au produit des extrêmes</b> :</p>\n<p style=\"text-align:center;font-size:1.2em\">a : b = c : d &nbsp;⟺&nbsp; <b>a × d = b × c</b></p>\n<p>Elle sert à <b>vérifier</b> si quatre nombres forment une proportion : 4 : 5 = 12 : 15 ? 4 × 15 = 60 et 5 × 12 = 60 → <b>oui</b>.</p>"
  },
  {
   "type": "text",
   "title": "Les autres propriétés",
   "html": "<p>À partir de <b>3 : 6 = 5 : 10</b> :</p>\n<ul>\n<li><b>Inverser</b> : on échange chaque antécédent avec son conséquent → 6 : 3 = 10 : 5.</li>\n<li><b>Permuter</b> : on échange entre eux les moyens (ou les extrêmes) → 3 : 5 = 6 : 10 (ou 10 : 6 = 5 : 3).</li>\n<li><b>Composer</b> : (a + b) : a = (c + d) : c, ou (a + b) : b = (c + d) : d → (3 + 6) : 3 = (5 + 10) : 5 → 9 : 3 = 15 : 5 ✓</li>\n<li><b>Décomposer</b> : (a − b) : a = (c − d) : c (avec a &gt; b, c &gt; d) → à partir de 6 : 3 = 10 : 5 → (6 − 3) : 6 = (10 − 5) : 10 → 3 : 6 = 5 : 10 ✓</li>\n</ul>\n<p>Composer et décomposer sont très utiles dans les problèmes où l'on connaît la <b>somme</b> ou la <b>différence</b> de deux nombres et leur rapport.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : rapports et proportions",
   "questions": [
    {
     "type": "mc",
     "q": "Dans 2 : 7 = 6 : 21, quels sont les moyens ?",
     "options": [
      "2 et 21",
      "7 et 6",
      "2 et 6"
     ],
     "answer": 1,
     "explain": "Les moyens sont les termes intérieurs : 7 et 6."
    },
    {
     "type": "tf",
     "q": "4 : 6 = 10 : 15 est une proportion.",
     "answer": true,
     "explain": "4 × 15 = 60 et 6 × 10 = 60."
    },
    {
     "type": "num",
     "q": "Une voiture parcourt 240 km en 3 heures. Quelle est la vitesse moyenne en km/h ?",
     "answer": 80,
     "unit": "km/h",
     "explain": "240 : 3 = 80 km/h."
    }
   ]
  },
  {
   "type": "text",
   "title": "Calculer le terme inconnu",
   "html": "<p>De la propriété fondamentale, nous tirons deux règles :</p>\n<ul>\n<li><b>Extrême inconnu</b> = produit des moyens : extrême connu.<br>\n<i>x : 4 = 15 : 12</i> → x = (4 × 15) : 12 = 60 : 12 = <b>5</b>.</li>\n<li><b>Moyen inconnu</b> = produit des extrêmes : moyen connu.<br>\n<i>8 : x = 6 : 9</i> → x = (8 × 9) : 6 = 72 : 6 = <b>12</b>.</li>\n</ul>\n<p><b>Proportion continue</b> : les deux moyens sont égaux, a : x = x : d. Le terme x s'appelle <b>moyen proportionnel</b> et vaut <b>x = √(a × d)</b>.<br>\n<i>4 : x = x : 9</i> → x² = 36 → x = <b>6</b>.</p>\n<p><b>Avec composer</b> (somme connue) : deux nombres ont pour somme 40 et sont entre eux comme 3 : 5. Qui sont-ils ?<br>\n(a + b) : a = (3 + 5) : 3 → 40 : a = 8 : 3 → a = 40 × 3 : 8 = <b>15</b> ; b = 40 − 15 = <b>25</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : la recette du tiramisu",
   "html": "<p>Une recette pour <b>4 personnes</b> utilise <b>250 g</b> de mascarpone. Combien en faut-il pour <b>10 personnes</b> ?</p>\n<p>4 : 250 = 10 : x → x = (250 × 10) : 4 = 2500 : 4 = <b>625 g</b>.</p>\n<p>Avec la même méthode : s'il faut <b>3 œufs</b> pour 4 personnes, pour 10 personnes : 4 : 3 = 10 : x → x = 30 : 4 = 7,5 → en cuisine, tu arrondiras à <b>7 ou 8 œufs</b> !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le nombre d'or",
   "html": "<p>Un segment est divisé selon la <b>section dorée</b> quand le tout est à la plus grande partie comme la plus grande partie est à la plus petite. Leur rapport est le <b>nombre d'or φ ≈ 1,618</b>. Euclide l'a décrit dans les <i>Éléments</i> (IIIᵉ siècle av. J.-C.) ; Luca Pacioli l'a appelé « divine proportion » (1509), avec des illustrations de <b>Léonard de Vinci</b>. Le rapport entre deux nombres consécutifs de la suite de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21…) se rapproche de plus en plus de φ : 21 : 13 ≈ 1,615.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Ératosthène mesure la Terre",
   "html": "<p>Vers <b>240 av. J.-C.</b>, <b>Ératosthène</b> mesura la circonférence de la Terre avec une proportion ! À midi, au solstice, à Syène le Soleil était au zénith, alors qu'à Alexandrie les rayons formaient un angle d'environ <b>7,2°</b>, c'est-à-dire 1/50 de 360°. Comme les deux villes étaient distantes d'environ 5000 stades : 7,2 : 360 = 5000 : x → x = <b>250 000 stades</b>, environ 40 000 km. La vraie valeur est 40 075 km à l'équateur !</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les proportions",
   "intro": "Si « extrêmes » et « moyens » te font confondre, essaie ces méthodes utilisées dans d'autres pays.",
   "tabs": [
    {
     "label": "✖️ Produit en croix (France, États-Unis)",
     "html": "<p>Écris la proportion comme une <b>égalité de fractions</b> :</p>\n<p style=\"text-align:center;font-size:1.2em\">a/b = c/d &nbsp;→&nbsp; a × d = b × c</p>\n<p>On multiplie les nombres « en diagonale » (en forme de <b>X</b>) : en France, cela s'appelle le <i>produit en croix</i>, aux États-Unis <i>cross multiplication</i>. C'est la même propriété fondamentale, mais on la voit mieux !</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#ecfeff\"/>\n<text x=\"200\" y=\"90\" font-size=\"48\" font-weight=\"bold\" fill=\"#0e7490\" text-anchor=\"middle\">4</text>\n<line x1=\"165\" y1=\"110\" x2=\"235\" y2=\"110\" stroke=\"#1f2937\" stroke-width=\"5\"/>\n<text x=\"200\" y=\"165\" font-size=\"48\" font-weight=\"bold\" fill=\"#0e7490\" text-anchor=\"middle\">250</text>\n<text x=\"300\" y=\"125\" font-size=\"48\" fill=\"#1f2937\" text-anchor=\"middle\">=</text>\n<text x=\"400\" y=\"90\" font-size=\"48\" font-weight=\"bold\" fill=\"#be185d\" text-anchor=\"middle\">10</text>\n<line x1=\"365\" y1=\"110\" x2=\"435\" y2=\"110\" stroke=\"#1f2937\" stroke-width=\"5\"/>\n<text x=\"400\" y=\"165\" font-size=\"48\" font-weight=\"bold\" fill=\"#be185d\" text-anchor=\"middle\">x</text>\n<line x1=\"230\" y1=\"70\" x2=\"375\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"5\"/>\n<line x1=\"240\" y1=\"150\" x2=\"370\" y2=\"70\" stroke=\"#f59e0b\" stroke-width=\"5\"/>\n<text x=\"300\" y=\"215\" font-size=\"20\" fill=\"#1f2937\" text-anchor=\"middle\" font-weight=\"bold\">4 · x = 250 · 10 → x = 625</text>\n</svg>"
    },
    {
     "label": "📋 Tableau et réduction à l'unité",
     "html": "<p>En Allemagne et en Angleterre, on utilise souvent la <b>réduction à l'unité</b> (<i>Dreisatz</i>, « règle de trois ») : on calcule d'abord ce que vaut <b>1</b>, puis on multiplie.</p>\n<table>\n<tr><th>Personnes</th><th>Mascarpone</th></tr>\n<tr><td>4</td><td>250 g</td></tr>\n<tr><td>1</td><td>250 : 4 = 62,5 g</td></tr>\n<tr><td>10</td><td>62,5 × 10 = <b>625 g</b></td></tr>\n</table>\n<p>Aucune formule à retenir : juste une division et une multiplication !</p>"
    },
    {
     "label": "🗺️ Le zoom des cartes",
     "html": "<p>Pense à une proportion comme à un <b>zoom</b> : quand tu agrandis une photo sur ton téléphone, toutes les longueurs sont multipliées par le même nombre, donc les <b>rapports restent égaux</b>. Un rectangle de 3 × 6 agrandi devient 5 × 10 : la forme est la même parce que 3 : 6 = 5 : 10. Si les rapports n'étaient pas égaux, la photo se « déformerait » !</p>"
    },
    {
     "label": "🧊 Cubes à l'échelle",
     "html": "<p>Voici un rectangle de <b>2 × 3</b> cubes. Essaie d'en construire un plus grand « en proportion » avec les curseurs : 4 × 6, 6 × 9… Cela ne marche que si 2 : 3 = nouveau petit côté : nouveau grand côté. Essaie 4 × 7 : la forme change !</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 2,
      "b": 3
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des rapports et proportions",
   "nodes": [
    {
     "id": "rapp",
     "label": "Rapport a : b",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Quotient de deux nombres.",
     "why": "En latin <i>ratio</i>, en grec <i>lógos</i> : pour les Grecs, le rapport était la façon de comparer deux grandeurs. De <i>ratio</i> vient aussi « rationnel »."
    },
    {
     "id": "omog",
     "label": "Grandeurs homogènes",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "Même unité : échelle, pourcentage (nombre pur).",
     "why": "En divisant des cm par des cm, l'unité « se simplifie » : il reste un nombre pur qui dit « combien de fois » une grandeur est contenue dans l'autre."
    },
    {
     "id": "nonomog",
     "label": "Grandeurs non homogènes",
     "x": 82,
     "y": 28,
     "color": "#ea580c",
     "html": "Unités différentes : vitesse, masse volumique, prix au kg.",
     "why": "Le rapport crée une <b>grandeur dérivée</b> : km/h, g/cm³, €/kg. Galilée a utilisé ces rapports pour étudier le mouvement au XVIIᵉ siècle."
    },
    {
     "id": "prop",
     "label": "Proportion",
     "x": 50,
     "y": 46,
     "color": "#7c3aed",
     "html": "Égalité entre deux rapports : a : b = c : d.",
     "why": "La théorie des proportions a été développée par <b>Eudoxe de Cnide</b> (IVᵉ siècle av. J.-C.) et est exposée dans le <b>livre V des Éléments d'Euclide</b>. Elle fonctionnait aussi avec des grandeurs comme √2 qui ne sont pas des fractions."
    },
    {
     "id": "fond",
     "label": "Propriété fondamentale",
     "x": 22,
     "y": 66,
     "color": "#dc2626",
     "html": "Produit des moyens = produit des extrêmes.",
     "why": "Si a/b = c/d, en multipliant les deux membres par b × d, on obtient a × d = c × b : c'est une conséquence des fractions équivalentes."
    },
    {
     "id": "altre",
     "label": "Inverser, permuter, composer, décomposer",
     "x": 78,
     "y": 66,
     "color": "#ca8a04",
     "html": "Transformations qui conservent la proportion.",
     "why": "Toutes se démontrent à partir de la propriété fondamentale. Elles étaient déjà dans le livre V d'Euclide avec des noms grecs ; au Moyen Âge, les « écoles d'abaque » les enseignaient aux fils de marchands."
    },
    {
     "id": "incog",
     "label": "Terme inconnu",
     "x": 22,
     "y": 88,
     "color": "#0d9488",
     "html": "Extrême = moyens : extrême ; moyen = extrêmes : moyen.",
     "why": "C'est la « règle de trois », enseignée dans les traités d'abaque comme le <i>Liber Abaci</i> de <b>Fibonacci</b> (1202) pour résoudre des problèmes de change, de marchandises et de prix."
    },
    {
     "id": "continua",
     "label": "Proportion continue",
     "x": 78,
     "y": 88,
     "color": "#db2777",
     "html": "a : x = x : d → x = √(a·d).",
     "why": "Le moyen proportionnel est la <b>moyenne géométrique</b>. Elle apparaît dans le deuxième théorème d'Euclide sur les triangles rectangles et dans la section dorée."
    }
   ],
   "edges": [
    [
     "rapp",
     "omog",
     "entre"
    ],
    [
     "rapp",
     "nonomog",
     "entre"
    ],
    [
     "rapp",
     "prop",
     "deux rapports égaux"
    ],
    [
     "prop",
     "fond",
     "a"
    ],
    [
     "prop",
     "altre",
     "se transforme avec"
    ],
    [
     "fond",
     "incog",
     "permet de trouver"
    ],
    [
     "altre",
     "continua",
     "cas particulier"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : le terme inconnu",
   "questions": [
    {
     "type": "num",
     "q": "x : 6 = 10 : 15. Combien vaut x ?",
     "answer": 4,
     "explain": "x = 6 × 10 : 15 = 60 : 15 = 4."
    },
    {
     "type": "num",
     "q": "9 : x = x : 4. Combien vaut x (positif) ?",
     "answer": 6,
     "explain": "x = √(9 × 4) = √36 = 6."
    },
    {
     "type": "num",
     "q": "Sur une carte au 1 : 50 000, deux villages sont distants de 6 cm. Combien de km font-ils dans la réalité ?",
     "answer": 3,
     "unit": "km",
     "explain": "6 × 50 000 = 300 000 cm = 3 km."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Rapport = quotient ; homogènes → nombre pur ; non homogènes → nouvelle grandeur.</li>\n<li>Proportion a : b = c : d ; <b>extrêmes</b> a, d ; <b>moyens</b> b, c.</li>\n<li><b>Moyens × moyens = extrêmes × extrêmes</b>.</li>\n<li>x extrême = moyens multipliés : extrême connu ; x moyen = extrêmes multipliés : moyen connu.</li>\n<li>Moyen proportionnel : x = √(a·d).</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Rapport",
   "d": "Quotient de deux nombres ou grandeurs."
  },
  {
   "t": "Antécédent",
   "d": "Le premier terme d'un rapport."
  },
  {
   "t": "Conséquent",
   "d": "Le deuxième terme d'un rapport."
  },
  {
   "t": "Échelle",
   "d": "Rapport entre une distance sur la carte et la distance réelle correspondante."
  },
  {
   "t": "Proportion",
   "d": "Égalité entre deux rapports."
  },
  {
   "t": "Extrêmes",
   "d": "Le premier et le quatrième terme d'une proportion."
  },
  {
   "t": "Moyens",
   "d": "Le deuxième et le troisième terme d'une proportion."
  },
  {
   "t": "Proportion continue",
   "d": "Proportion dont les moyens sont égaux."
  },
  {
   "t": "Moyen proportionnel",
   "d": "Le terme répété dans une proportion continue : √(a·d)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Quel est le rapport entre 45 et 9 ?",
    "answer": 5,
    "explain": "45 : 9 = 5."
   },
   {
    "type": "mc",
    "q": "Dans 5 : 8 = 15 : 24, les extrêmes sont…",
    "options": [
     "5 et 24",
     "8 et 15",
     "5 et 15"
    ],
    "answer": 0,
    "explain": "Le premier et le dernier terme."
   },
   {
    "type": "tf",
    "q": "3 : 4 = 9 : 16 est une proportion.",
    "answer": false,
    "explain": "3 × 16 = 48, mais 4 × 9 = 36 : différents."
   },
   {
    "type": "num",
    "q": "x : 12 = 5 : 3. Trouve x.",
    "answer": 20,
    "explain": "x = 12 × 5 : 3 = 20."
   },
   {
    "type": "num",
    "q": "7 : x = 21 : 9. Trouve x.",
    "answer": 3,
    "explain": "x = 7 × 9 : 21 = 3."
   },
   {
    "type": "mc",
    "q": "En permutant les moyens de 2 : 3 = 8 : 12, on obtient…",
    "options": [
     "3 : 2 = 12 : 8",
     "2 : 8 = 3 : 12",
     "12 : 3 = 8 : 2"
    ],
    "answer": 1,
    "explain": "On échange 3 et 8."
   },
   {
    "type": "mc",
    "q": "Le rapport entre 300 km et 4 h est…",
    "options": [
     "75 (nombre pur)",
     "75 km/h",
     "1200 km·h"
    ],
    "answer": 1,
    "explain": "Grandeurs non homogènes : on obtient une vitesse, 75 km/h."
   },
   {
    "type": "num",
    "q": "Deux nombres ont pour somme 56 et sont entre eux comme 3 : 4. Quel est le plus petit ?",
    "answer": 24,
    "explain": "Composer : 56 : a = 7 : 3 → a = 56 × 3 : 7 = 24 (l'autre est 32)."
   },
   {
    "type": "num",
    "q": "Trouve le moyen proportionnel entre 2 et 18.",
    "answer": 6,
    "explain": "√(2 × 18) = √36 = 6."
   },
   {
    "type": "num",
    "q": "À l'échelle 1 : 200, une pièce mesure 3 cm sur le dessin. Combien de mètres mesure-t-elle vraiment ?",
    "answer": 6,
    "unit": "m",
    "explain": "3 × 200 = 600 cm = 6 m."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre les étapes pour trouver un extrême inconnu.",
    "items": [
     "J'identifie les moyens",
     "Je multiplie les moyens",
     "Je divise par l'extrême connu",
     "Je vérifie avec la propriété fondamentale"
    ],
    "explain": "Moyens × moyens : extrême connu, puis on vérifie."
   }
  ],
  "gen": [
   [
    "proportion",
    3
   ]
  ]
 }
});
