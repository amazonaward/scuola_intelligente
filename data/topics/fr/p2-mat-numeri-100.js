TOPIC('fr', {
 "id": "p2-mat-numeri-100",
 "title": "Les nombres jusqu'à 100",
 "intro": "Après 20, les nombres continuent… jusqu'à <b>100</b> ! 💯 Apprenons à les compter avec les <b>dizaines</b> et les <b>unités</b>, à faire des <b>bonds</b> et à comprendre quel nombre est le plus grand.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Dizaines et unités",
   "html": "<p>Quand on a <b>10 unités</b>, on les met ensemble dans un paquet : c'est une <b>dizaine</b> ! 📦</p>\n<p><b>10 unités = 1 dizaine</b></p>\n<p>Chaque nombre à deux chiffres est fait de <b>dizaines</b> et d'<b>unités</b> :</p>\n<ul>\n<li><b>47</b> = <span style=\"color:#dc2626\"><b>4</b> dizaines</span> et <span style=\"color:#2563eb\"><b>7</b> unités</span> = 40 + 7</li>\n<li><b>30</b> = 3 dizaines et 0 unité</li>\n<li><b>85</b> = 8 dizaines et 5 unités = 80 + 5</li>\n</ul>\n<p>Le chiffre de <b>gauche</b> compte les dizaines (d), celui de <b>droite</b> les unités (u). La <b>position</b> est très importante : 47 et 74 sont des nombres très différents !</p>"
  },
  {
   "type": "svg",
   "title": "47 avec les barres et les cubes",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<g fill=\"#f87171\" stroke=\"#991b1b\" stroke-width=\"2\">\n<rect x=\"40\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/><rect x=\"80\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/>\n<rect x=\"120\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/><rect x=\"160\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/>\n</g>\n<g stroke=\"#991b1b\" stroke-width=\"1.5\">\n<line x1=\"40\" y1=\"60\" x2=\"188\" y2=\"60\"/><line x1=\"40\" y1=\"80\" x2=\"188\" y2=\"80\"/><line x1=\"40\" y1=\"100\" x2=\"188\" y2=\"100\"/><line x1=\"40\" y1=\"120\" x2=\"188\" y2=\"120\"/>\n<line x1=\"40\" y1=\"140\" x2=\"188\" y2=\"140\"/><line x1=\"40\" y1=\"160\" x2=\"188\" y2=\"160\"/><line x1=\"40\" y1=\"180\" x2=\"188\" y2=\"180\"/><line x1=\"40\" y1=\"200\" x2=\"188\" y2=\"200\"/><line x1=\"40\" y1=\"220\" x2=\"188\" y2=\"220\"/>\n</g>\n<g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"230\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"265\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"300\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"335\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/>\n<rect x=\"230\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"265\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"300\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/>\n</g>\n<text x=\"114\" y=\"275\" font-size=\"22\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">4 dizaines = 40</text>\n<text x=\"296\" y=\"275\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">7 unités = 7</text>\n<rect x=\"400\" y=\"70\" width=\"170\" height=\"150\" rx=\"14\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<text x=\"450\" y=\"105\" font-size=\"22\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">d</text>\n<text x=\"520\" y=\"105\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">u</text>\n<text x=\"450\" y=\"180\" font-size=\"64\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">4</text>\n<text x=\"520\" y=\"180\" font-size=\"64\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">7</text>\n</svg>",
   "caption": "Chaque barre rouge a 10 cubes : c'est une dizaine. Les cubes bleus isolés sont les unités."
  },
  {
   "type": "3d",
   "title": "Construis les nombres avec les cubes 3D",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 47
   },
   "caption": "Fais tourner le modèle et change le nombre avec le curseur : regarde comment poussent les barres des dizaines."
  },
  {
   "type": "widget",
   "title": "Le boulier",
   "widget": "abacus",
   "options": {
    "columns": [
     "d",
     "u"
    ],
    "value": 47
   },
   "caption": "Ajoute et enlève des boules. Quand les unités arrivent à 10, elles deviennent 1 boule des dizaines !"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : dizaines et unités",
   "questions": [
    {
     "type": "num",
     "q": "Combien y a-t-il de dizaines dans 63 ?",
     "answer": 6,
     "explain": "63 = 6 dizaines et 3 unités."
    },
    {
     "type": "num",
     "q": "Quel nombre fait 5 dizaines et 2 unités ?",
     "answer": 52,
     "explain": "50 + 2 = 52."
    },
    {
     "type": "tf",
     "q": "Dans 38, le chiffre 8 indique les dizaines.",
     "answer": false,
     "explain": "Le 8 est à droite : il indique les unités. Les dizaines sont 3."
    }
   ]
  },
  {
   "type": "text",
   "title": "Compter par bonds",
   "html": "<p>Compter un par un jusqu'à 100, c'est long ! On peut faire des <b>bonds</b> 🦘 :</p>\n<ul>\n<li>bonds de <b>10</b> : 10, 20, 30, 40, 50, 60, 70, 80, 90, <b>100</b></li>\n<li>bonds de <b>5</b> : 5, 10, 15, 20, 25, 30…</li>\n<li>bonds de <b>2</b> : 2, 4, 6, 8, 10, 12… ce sont les nombres <b>pairs</b> !</li>\n</ul>\n<p>Les nombres qu'on ne trouve pas en sautant de 2 en 2 depuis 0 (1, 3, 5, 7…) sont les nombres <b>impairs</b>. Astuce : regarde l'unité ! Si c'est 0, 2, 4, 6, 8, le nombre est pair.</p>"
  },
  {
   "type": "widget",
   "title": "Bonds de 10 sur la droite numérique",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 100,
    "step": 10,
    "marks": [
     10,
     20,
     30,
     40,
     50,
     60,
     70,
     80,
     90,
     100
    ]
   },
   "caption": "Chaque bond ajoute une dizaine. Avec 10 bonds, tu arrives à 100 !"
  },
  {
   "type": "text",
   "title": "Avant, après et comparaison",
   "html": "<ul>\n<li>Le <b>prédécesseur</b> d'un nombre est celui qui vient <b>juste avant</b> (−1) : le nombre qui vient avant 40 est <b>39</b>.</li>\n<li>Le <b>successeur</b> est celui qui vient <b>juste après</b> (+1) : le nombre qui vient après 59 est <b>60</b>.</li>\n</ul>\n<p>Pour <b>comparer</b> deux nombres :</p>\n<ol>\n<li>regarde d'abord les <b>dizaines</b> : celui qui en a le plus gagne → 72 &gt; 58 ;</li>\n<li>si les dizaines sont égales, regarde les <b>unités</b> → 46 &gt; 43.</li>\n</ol>\n<p>Le signe <b>&gt;</b> veut dire « plus grand que », <b>&lt;</b> veut dire « plus petit que », <b>=</b> « égal ». La bouche du crocodile 🐊 s'ouvre toujours vers le plus grand nombre !</p>"
  },
  {
   "type": "example",
   "title": "Exemple : les images de Tommaso ⚽",
   "html": "<p>Tommaso a <b>6 pochettes</b> de 10 images et <b>8 images</b> en vrac.</p>\n<p>Combien d'images a-t-il ? 6 dizaines et 8 unités = 60 + 8 = <b>68</b> images.</p>\n<p>Son ami Elia en a <b>71</b>. Qui en a le plus ? Elia a 7 dizaines, Tommaso 6 : <b>71 &gt; 68</b>. C'est Elia qui gagne !</p>"
  },
  {
   "type": "example",
   "title": "Exemple : les œufs au marché 🥚",
   "html": "<p>Le fermier met les œufs dans des boîtes de <b>10</b>. Il a rempli <b>9</b> boîtes et il lui reste <b>4</b> œufs.</p>\n<p>Œufs en tout : 9 dizaines et 4 unités = <b>94</b>.</p>\n<p>Combien en manque-t-il pour arriver à 100 ? Après 94 vient 95, puis 96, 97, 98, 99, 100 : il en manque <b>6</b> !</p>"
  },
  {
   "type": "text",
   "title": "Lire et écrire les nombres en lettres",
   "html": "<p>Les dizaines s'appellent : dix, vingt, trente, quarante, cinquante, soixante, soixante-dix, quatre-vingts, quatre-vingt-dix, <b>cent</b>.</p>\n<p>Puis on ajoute l'unité avec un trait d'union : vingt + trois = <b>vingt-trois</b>, quarante + cinq = <b>quarante-cinq</b>.</p>\n<p>⚠️ Attention avec <b>un</b> : on dit <b>vingt et un</b>, <b>trente et un</b>… (sans trait d'union, avec « et »). Mais <b>quatre-vingt-un</b> !</p>\n<p>Et à partir de 70, on continue à compter après soixante : soixante-dix, soixante-onze… et après quatre-vingts : quatre-vingt-dix, quatre-vingt-onze… 😉</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… ?",
   "html": "<p>En <b>français</b>, le nombre 80 se dit <i>quatre-vingts</i>, c'est-à-dire « <b>quatre fois vingt</b> » ! 🇫🇷 Et 90 se dit « quatre-vingt-dix ». En italien, on dit simplement <i>ottanta</i> et <i>novanta</i>, et en Belgique et en Suisse on dit souvent « septante » et « nonante ».</p>\n<p>C'est un souvenir d'une ancienne façon de compter par groupes de 20, peut-être en utilisant les doigts des mains <b>et</b> des pieds. Les <b>Mayas</b>, en Amérique, comptaient aussi par groupes de 20.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… ?",
   "html": "<p>Pourquoi compte-t-on justement par groupes de <b>10</b> ? Très probablement parce qu'on a <b>10 doigts</b> ! 🖐️🖐️</p>\n<p>Les chiffres qu'on utilise (0, 1, 2… 9) sont nés en <b>Inde</b>, sont passés chez les <b>Arabes</b> et sont arrivés en Italie grâce à <b>Leonardo Fibonacci</b> de Pise, qui les a expliqués dans son livre <i>Liber Abaci</i> en <b>1202</b>. Avant, on utilisait les chiffres romains : 47 s'écrivait XLVII !</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li><b>10 unités = 1 dizaine</b> ; <b>10 dizaines = 1 centaine = 100</b>.</li>\n<li>Dans les nombres à deux chiffres : à gauche les <b>dizaines</b>, à droite les <b>unités</b>.</li>\n<li>Pour comparer : d'abord les dizaines, puis les unités.</li>\n<li>Le nombre d'avant = −1, le nombre d'après = +1.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les nombres jusqu'à 100",
   "intro": "Les nombres, on peut les voir, les toucher, les écouter… Choisis la façon qui te convient.",
   "tabs": [
    {
     "label": "💶 Avec l'argent",
     "html": "<p>Tu as des pièces de <b>10 centimes</b> et de <b>1 centime</b>.</p>\n<ul>\n<li>Les pièces de 10 centimes sont les <b>dizaines</b> 🪙.</li>\n<li>Les pièces de 1 centime sont les <b>unités</b>.</li>\n</ul>\n<p>Pour payer <b>35 centimes</b>, tu utilises 3 pièces de 10 et 5 pièces de 1. Avec <b>10 pièces de 10 centimes</b>, tu arrives à <b>100 centimes = 1 euro</b> !</p>"
    },
    {
     "label": "🧮 Le tableau des 100",
     "html": "<p>Range les nombres de 1 à 100 dans un tableau de 10 lignes et 10 colonnes.</p>\n<ul>\n<li>En descendant d'une ligne, tu ajoutes <b>10</b> (12 → 22 → 32).</li>\n<li>En allant vers la droite, tu ajoutes <b>1</b>.</li>\n<li>Tous les nombres d'une colonne finissent par la même unité !</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">\n<rect x=\"50\" y=\"20\" width=\"500\" height=\"25\" fill=\"#fee2e2\"/>\n<text x=\"75\" y=\"38\">1</text><text x=\"125\" y=\"38\">2</text><text x=\"175\" y=\"38\">3</text><text x=\"225\" y=\"38\">4</text><text x=\"275\" y=\"38\">5</text><text x=\"325\" y=\"38\">6</text><text x=\"375\" y=\"38\">7</text><text x=\"425\" y=\"38\">8</text><text x=\"475\" y=\"38\">9</text><text x=\"525\" y=\"38\">10</text>\n<text x=\"75\" y=\"68\">11</text><text x=\"125\" y=\"68\">12</text><text x=\"175\" y=\"68\">13</text><text x=\"225\" y=\"68\">14</text><text x=\"275\" y=\"68\">15</text><text x=\"325\" y=\"68\">16</text><text x=\"375\" y=\"68\">17</text><text x=\"425\" y=\"68\">18</text><text x=\"475\" y=\"68\">19</text><text x=\"525\" y=\"68\">20</text>\n<text x=\"75\" y=\"98\">21</text><text x=\"125\" y=\"98\">22</text><text x=\"175\" y=\"98\">23</text><text x=\"225\" y=\"98\">24</text><text x=\"275\" y=\"98\">25</text><text x=\"325\" y=\"98\">26</text><text x=\"375\" y=\"98\">27</text><text x=\"425\" y=\"98\">28</text><text x=\"475\" y=\"98\">29</text><text x=\"525\" y=\"98\">30</text>\n<text x=\"75\" y=\"128\">31</text><text x=\"125\" y=\"128\">32</text><text x=\"175\" y=\"128\">33</text><text x=\"225\" y=\"128\">34</text><text x=\"275\" y=\"128\">35</text><text x=\"325\" y=\"128\">36</text><text x=\"375\" y=\"128\">37</text><text x=\"425\" y=\"128\">38</text><text x=\"475\" y=\"128\">39</text><text x=\"525\" y=\"128\">40</text>\n<text x=\"300\" y=\"165\" font-size=\"22\">⋮</text>\n<text x=\"75\" y=\"218\">81</text><text x=\"125\" y=\"218\">82</text><text x=\"175\" y=\"218\">83</text><text x=\"225\" y=\"218\">84</text><text x=\"275\" y=\"218\">85</text><text x=\"325\" y=\"218\">86</text><text x=\"375\" y=\"218\">87</text><text x=\"425\" y=\"218\">88</text><text x=\"475\" y=\"218\">89</text><text x=\"525\" y=\"218\">90</text>\n<text x=\"75\" y=\"248\">91</text><text x=\"125\" y=\"248\">92</text><text x=\"175\" y=\"248\">93</text><text x=\"225\" y=\"248\">94</text><text x=\"275\" y=\"248\">95</text><text x=\"325\" y=\"248\">96</text><text x=\"375\" y=\"248\">97</text><text x=\"425\" y=\"248\">98</text><text x=\"475\" y=\"248\">99</text><text x=\"525\" y=\"248\" font-weight=\"bold\" fill=\"#dc2626\">100</text>\n</g>\n<rect x=\"105\" y=\"50\" width=\"40\" height=\"205\" rx=\"8\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" fill=\"#2563eb\">colonne bleue : 2, 12, 22, 32… +10 à chaque ligne</text>\n</svg>"
    },
    {
     "label": "🇨🇳 Compter comme en Chine",
     "html": "<p>En <b>chinois</b> (et aussi en japonais et en coréen), les nombres se disent de façon très logique :</p>\n<ul>\n<li>11 = « <b>dix-un</b> » (shí-yī)</li>\n<li>20 = « <b>deux-dix</b> » (èr-shí)</li>\n<li>47 = « <b>quatre-dix-sept</b> » (sì-shí-qī)</li>\n</ul>\n<p>Le nom lui-même dit combien il y a de dizaines et d'unités ! Essaie de dire les nombres ainsi en français : 65 = « six-dix-cinq ». Est-ce que ça t'aide à voir les dizaines ?</p>"
    },
    {
     "label": "🧊 Cubes 3D",
     "html": "<p>Essaie de construire <b>100</b> : combien de barres de 10 faut-il ? Fais tourner le modèle et regarde : 10 barres forment un <b>carré</b>, la « plaque » de la centaine !</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 100
     }
    },
    {
     "label": "🦘 Bonds de 5",
     "html": "<p>Compte par bonds de 5, comme les doigts d'une main : 5, 10, 15, 20… Combien de bonds faut-il pour arriver à 50 ?</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 50,
      "step": 5,
      "marks": [
       5,
       10,
       15,
       20,
       25,
       30,
       35,
       40,
       45,
       50
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des nombres jusqu'à 100",
   "nodes": [
    {
     "id": "unita",
     "label": "Unité",
     "x": 15,
     "y": 10,
     "color": "#2563eb",
     "html": "Chaque objet compté tout seul : 1.",
     "why": "C'est le point de départ de tout comptage : un doigt, un caillou, une encoche sur un bâton. Les êtres humains comptent ainsi depuis des dizaines de milliers d'années."
    },
    {
     "id": "decina",
     "label": "Dizaine",
     "x": 50,
     "y": 10,
     "color": "#dc2626",
     "html": "Un groupe de 10 unités.",
     "why": "On regroupe par 10 parce qu'on a 10 doigts : presque tous les peuples du monde ont choisi 10 comme base."
    },
    {
     "id": "cento",
     "label": "Cent",
     "x": 85,
     "y": 10,
     "color": "#a855f7",
     "html": "10 dizaines = 100.",
     "why": "Le mot vient du latin <i>centum</i>. C'est de là que viennent aussi centimètre (la centième partie du mètre) et centime (la centième partie de l'euro)."
    },
    {
     "id": "posizione",
     "label": "Valeur de position",
     "x": 50,
     "y": 40,
     "color": "#f59e0b",
     "html": "Le même chiffre vaut plus s'il est plus à gauche : dans 44, le premier 4 vaut 40.",
     "why": "C'est l'idée géniale des mathématiciens de l'<b>Inde</b> (il y a environ 1 500 ans) : avec seulement 10 chiffres, on écrit tous les nombres. Les Romains, eux, utilisaient des symboles différents pour chaque valeur (X, L, C)."
    },
    {
     "id": "zero",
     "label": "Le zéro",
     "x": 18,
     "y": 65,
     "color": "#64748b",
     "html": "Le signe qui dit « ici, il n'y a rien » : 30 = 3 dizaines et 0 unité.",
     "why": "Sans le zéro, on ne distinguerait pas 3 de 30 ! C'est le mathématicien indien <b>Brahmagupta</b> (en 628) qui a écrit les premières règles pour calculer avec le zéro."
    },
    {
     "id": "salti",
     "label": "Compter par bonds",
     "x": 82,
     "y": 40,
     "color": "#16a34a",
     "html": "Compter de 2 en 2, de 5 en 5, de 10 en 10.",
     "why": "Sauter est plus rapide que compter un par un, et c'est la base des tables de multiplication : les bonds de 5, c'est la table de 5 !"
    },
    {
     "id": "confronto",
     "label": "Comparaison > <",
     "x": 50,
     "y": 68,
     "color": "#0ea5e9",
     "html": "On regarde d'abord les dizaines, puis les unités.",
     "why": "Les dizaines valent plus : même 9 unités ne suffisent pas à faire une dizaine, donc 60 > 59. Les signes > et < ont été inventés par le mathématicien anglais <b>Thomas Harriot</b> (publiés en 1631)."
    },
    {
     "id": "pari",
     "label": "Pair et impair",
     "x": 82,
     "y": 72,
     "color": "#14b8a6",
     "html": "Pair : unité 0, 2, 4, 6, 8. Impair : 1, 3, 5, 7, 9.",
     "why": "Un nombre est pair si on peut le partager en deux groupes égaux, sans reste. Il suffit de regarder les unités, parce que chaque dizaine se partage toujours en deux parts de 5."
    },
    {
     "id": "fibonacci",
     "label": "Chiffres indo-arabes",
     "x": 30,
     "y": 90,
     "color": "#ef4444",
     "html": "Les chiffres 0–9 qu'on utilise aujourd'hui.",
     "why": "Nés en Inde, apportés par les Arabes et répandus en Europe par <b>Leonardo Fibonacci</b> avec le <i>Liber Abaci</i> (1202)."
    }
   ],
   "edges": [
    [
     "unita",
     "decina",
     "10 forment"
    ],
    [
     "decina",
     "cento",
     "10 forment"
    ],
    [
     "decina",
     "posizione",
     "s'écrit avec"
    ],
    [
     "posizione",
     "zero",
     "a besoin de"
    ],
    [
     "decina",
     "salti",
     "se compte avec"
    ],
    [
     "posizione",
     "confronto",
     "sert à"
    ],
    [
     "unita",
     "pari",
     "décide"
    ],
    [
     "fibonacci",
     "posizione",
     "utilise"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : comparaisons et bonds",
   "questions": [
    {
     "type": "mc",
     "q": "Quel nombre est le plus grand ?",
     "options": [
      "69",
      "71",
      "17"
     ],
     "answer": 1,
     "explain": "71 a 7 dizaines : plus que 69 (6 dizaines)."
    },
    {
     "type": "num",
     "q": "Quel est le nombre qui vient juste après 79 ?",
     "answer": 80,
     "explain": "79 + 1 = 80 : 9 unités + 1 font une nouvelle dizaine."
    },
    {
     "type": "mc",
     "q": "En comptant par bonds de 10 : 30, 40, 50, …",
     "options": [
      "51",
      "60",
      "55"
     ],
     "answer": 1,
     "explain": "50 + 10 = 60."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Unité",
   "d": "Un seul élément. Il s'écrit à droite dans les nombres à deux chiffres."
  },
  {
   "t": "Dizaine",
   "d": "Groupe de 10 unités."
  },
  {
   "t": "Centaine",
   "d": "Groupe de 10 dizaines, c'est-à-dire 100."
  },
  {
   "t": "Prédécesseur",
   "d": "Le nombre qui vient juste avant (−1)."
  },
  {
   "t": "Successeur",
   "d": "Le nombre qui vient juste après (+1)."
  },
  {
   "t": "Nombre pair",
   "d": "Nombre qui finit par 0, 2, 4, 6, 8."
  },
  {
   "t": "Nombre impair",
   "d": "Nombre qui finit par 1, 3, 5, 7, 9."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Quel nombre fait 7 dizaines et 4 unités ?",
    "answer": 74,
    "explain": "70 + 4 = 74."
   },
   {
    "type": "num",
    "q": "Combien y a-t-il d'unités dans 58 (en plus des dizaines) ?",
    "answer": 8,
    "explain": "58 = 5 dizaines et 8 unités."
   },
   {
    "type": "mc",
    "q": "Combien y a-t-il de dizaines dans 100 ?",
    "options": [
     "1",
     "10",
     "100"
    ],
    "answer": 1,
    "explain": "10 dizaines = 100."
   },
   {
    "type": "num",
    "q": "Quel est le nombre qui vient juste avant 60 ?",
    "answer": 59,
    "explain": "60 − 1 = 59."
   },
   {
    "type": "mc",
    "q": "Quelle comparaison est juste ?",
    "options": [
     "45 > 54",
     "45 < 54",
     "45 = 54"
    ],
    "answer": 1,
    "explain": "45 a 4 dizaines, 54 en a 5."
   },
   {
    "type": "tf",
    "q": "36 est un nombre pair.",
    "answer": true,
    "explain": "Il finit par 6 : il est pair."
   },
   {
    "type": "tf",
    "q": "On écrit « vingt-un ».",
    "answer": false,
    "explain": "On écrit « vingt et un » : avec « et », sans trait d'union."
   },
   {
    "type": "mc",
    "q": "En comptant par bonds de 5 : 15, 20, 25, …",
    "options": [
     "26",
     "30",
     "35"
    ],
    "answer": 1,
    "explain": "25 + 5 = 30."
   },
   {
    "type": "text",
    "q": "Écris en lettres le nombre 38.",
    "answer": [
     "trente-huit",
     "trente huit"
    ],
    "explain": "Trente + huit = trente-huit, avec un trait d'union."
   },
   {
    "type": "order",
    "q": "Range du plus petit au plus grand.",
    "items": [
     "19",
     "41",
     "47",
     "74",
     "91"
    ],
    "explain": "On regarde d'abord les dizaines, puis les unités."
   },
   {
    "type": "num",
    "q": "Luca a 3 boîtes de 10 crayons et 9 crayons en vrac. Combien de crayons a-t-il ?",
    "answer": 39,
    "explain": "3 dizaines et 9 unités = 39."
   }
  ],
  "gen": [
   [
    "tensUnits",
    2
   ],
   [
    "compare100",
    2
   ]
  ]
 }
});
