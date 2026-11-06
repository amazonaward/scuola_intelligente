TOPIC('fr', {
 "id": "m2-sci-chimica",
 "title": "Éléments, composés, réactions",
 "intro": "Que se passe-t-il quand on mélange du vinaigre et du bicarbonate ? Pourquoi le fer rouille-t-il ? Où « s'en va » le bois qui brûle ? Dans cette leçon, nous entrons dans le monde des <b>atomes</b> et des <b>molécules</b>, nous apprenons à écrire et à <b>équilibrer</b> les réactions et à calculer quelle quantité de produit on obtient : ce sont les <b>rapports stœchiométriques</b>. Et ensuite… direction le <b>laboratoire</b> !",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "1. La matière est faite d'atomes",
   "html": "<p>Tout ce qui nous entoure est fait de particules minuscules appelées <b>atomes</b>. Un atome est si petit que dans un grain de sel il y en a environ un milliard de milliards.</p>\n<p>Chaque atome a :</p>\n<ul>\n<li>un <b>noyau</b> au centre, avec des <b>protons</b> (charge +) et des <b>neutrons</b> (sans charge) ;</li>\n<li>autour, les <b>électrons</b> (charge −), beaucoup plus légers, disposés sur des niveaux d'énergie (« couches »).</li>\n</ul>\n<p>Le <b>numéro atomique Z</b> est le nombre de protons : c'est la « carte d'identité » de l'élément. Tous les atomes à 6 protons sont du carbone, tous ceux à 8 protons sont de l'oxygène.</p>\n<p>Un atome est <b>neutre</b> : il a autant d'électrons que de protons.</p>"
  },
  {
   "type": "3d",
   "title": "L'atome en 3D (modèle de Bohr)",
   "scene": "atom",
   "caption": "Choisis un élément : regarde comment les électrons sont disposés sur les couches. La première couche contient au maximum 2 électrons, la deuxième 8.",
   "options": {
    "elements": [
     "H",
     "He",
     "C",
     "N",
     "O",
     "Na",
     "Mg",
     "Cl"
    ]
   }
  },
  {
   "type": "text",
   "title": "2. Éléments et composés",
   "html": "<p>Un <b>élément</b> est une substance faite d'un seul type d'atome : fer (Fe), oxygène (O₂), or (Au). Aujourd'hui nous connaissons <b>118 éléments</b>, rangés dans le <b>tableau périodique</b>.</p>\n<p>Un <b>composé</b> est une substance faite d'atomes d'éléments différents liés entre eux <b>en proportions fixes</b> : l'eau (H₂O) a toujours 2 atomes d'hydrogène pour chaque atome d'oxygène.</p>\n<p>Attention : un composé a des propriétés <b>complètement différentes</b> des éléments qui le forment. Le sodium (Na) est un métal qui explose au contact de l'eau, le chlore (Cl₂) est un gaz toxique… mais ensemble ils forment le <b>sel de cuisine</b> (NaCl) !</p>\n<p>Un <b>mélange</b>, au contraire, est seulement un mélange (eau et sable, air) : les composants restent eux-mêmes et on peut les séparer par des méthodes physiques.</p>"
  },
  {
   "type": "widget",
   "title": "Le tableau périodique interactif",
   "widget": "periodicTable",
   "caption": "Touche un élément pour voir son numéro atomique, sa masse et des curiosités. Les éléments d'une même colonne (groupe) ont des comportements semblables.",
   "options": {}
  },
  {
   "type": "text",
   "title": "3. Les molécules",
   "html": "<p>Une <b>molécule</b> est un groupe d'atomes liés. La <b>formule chimique</b> dit quels atomes il y a et combien :</p>\n<ul>\n<li><b>H₂O</b> (eau) : 2 hydrogènes + 1 oxygène.</li>\n<li><b>CO₂</b> (dioxyde de carbone) : 1 carbone + 2 oxygènes.</li>\n<li><b>CH₄</b> (méthane, le gaz de la cuisinière) : 1 carbone + 4 hydrogènes.</li>\n</ul>\n<p>Le sel <b>NaCl</b> ne forme pas de molécules isolées mais un <b>réseau cristallin</b> : des ions Na⁺ et Cl⁻ alternés comme sur un échiquier en trois dimensions. Voilà pourquoi les cristaux de sel sont de petits cubes !</p>"
  },
  {
   "type": "alternatives",
   "title": "Les molécules en 3D",
   "intro": "Fais tourner les molécules : la forme compte ! L'eau est « coudée », le dioxyde de carbone est droit.",
   "tabs": [
    {
     "label": "💧 H₂O eau",
     "html": "<p>L'oxygène (rouge) est au centre, les deux hydrogènes forment un angle d'environ <b>104,5°</b>. Cette forme coudée rend l'eau capable de dissoudre énormément de substances.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0.2,
        "z": 0,
        "r": 0.55,
        "color": "#ef4444",
        "label": "O"
       },
       {
        "x": 0.76,
        "y": -0.39,
        "z": 0,
        "r": 0.35,
        "color": "#94a3b8",
        "label": "H"
       },
       {
        "x": -0.76,
        "y": -0.39,
        "z": 0,
        "r": 0.35,
        "color": "#94a3b8",
        "label": "H"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ]
      ]
     }
    },
    {
     "label": "🫧 CO₂",
     "html": "<p>Une molécule <b>linéaire</b> : O=C=O. C'est le gaz des bulles et celui que nous expirons. Les plantes l'utilisent pour la photosynthèse.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#374151",
        "label": "C"
       },
       {
        "x": 1.16,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#ef4444",
        "label": "O"
       },
       {
        "x": -1.16,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#ef4444",
        "label": "O"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ]
      ]
     }
    },
    {
     "label": "🔥 CH₄ méthane",
     "html": "<p>Le carbone au centre et 4 hydrogènes aux sommets d'un <b>tétraèdre</b> (angles de 109,5°) : les atomes se placent le plus loin possible les uns des autres.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#374151",
        "label": "C"
       },
       {
        "x": 0.63,
        "y": 0.63,
        "z": 0.63,
        "r": 0.32,
        "color": "#94a3b8",
        "label": "H"
       },
       {
        "x": -0.63,
        "y": -0.63,
        "z": 0.63,
        "r": 0.32,
        "color": "#94a3b8",
        "label": "H"
       },
       {
        "x": -0.63,
        "y": 0.63,
        "z": -0.63,
        "r": 0.32,
        "color": "#94a3b8",
        "label": "H"
       },
       {
        "x": 0.63,
        "y": -0.63,
        "z": -0.63,
        "r": 0.32,
        "color": "#94a3b8",
        "label": "H"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        0,
        3
       ],
       [
        0,
        4
       ]
      ]
     }
    },
    {
     "label": "🧂 NaCl sel",
     "html": "<p>Un petit morceau du <b>réseau cristallin</b> : Na⁺ (violets, petits) et Cl⁻ (verts, grands) alternent le long de toutes les arêtes du cube.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": -0.8,
        "y": -0.8,
        "z": -0.8,
        "r": 0.3,
        "color": "#8b5cf6",
        "label": "Na"
       },
       {
        "x": 0.8,
        "y": -0.8,
        "z": -0.8,
        "r": 0.45,
        "color": "#22c55e",
        "label": "Cl"
       },
       {
        "x": -0.8,
        "y": 0.8,
        "z": -0.8,
        "r": 0.45,
        "color": "#22c55e",
        "label": "Cl"
       },
       {
        "x": 0.8,
        "y": 0.8,
        "z": -0.8,
        "r": 0.3,
        "color": "#8b5cf6",
        "label": "Na"
       },
       {
        "x": -0.8,
        "y": -0.8,
        "z": 0.8,
        "r": 0.45,
        "color": "#22c55e",
        "label": "Cl"
       },
       {
        "x": 0.8,
        "y": -0.8,
        "z": 0.8,
        "r": 0.3,
        "color": "#8b5cf6",
        "label": "Na"
       },
       {
        "x": -0.8,
        "y": 0.8,
        "z": 0.8,
        "r": 0.3,
        "color": "#8b5cf6",
        "label": "Na"
       },
       {
        "x": 0.8,
        "y": 0.8,
        "z": 0.8,
        "r": 0.45,
        "color": "#22c55e",
        "label": "Cl"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        1,
        3
       ],
       [
        2,
        3
       ],
       [
        4,
        5
       ],
       [
        4,
        6
       ],
       [
        5,
        7
       ],
       [
        6,
        7
       ],
       [
        0,
        4
       ],
       [
        1,
        5
       ],
       [
        2,
        6
       ],
       [
        3,
        7
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : atomes et molécules",
   "questions": [
    {
     "type": "mc",
     "q": "Le numéro atomique Z indique le nombre de…",
     "options": [
      "neutrons",
      "protons",
      "molécules"
     ],
     "answer": 1,
     "explain": "Z = nombre de protons dans le noyau : il identifie l'élément."
    },
    {
     "type": "mc",
     "q": "Laquelle de ces substances est un composé ?",
     "options": [
      "O₂",
      "Fe",
      "H₂O"
     ],
     "answer": 2,
     "explain": "H₂O contient des atomes de deux éléments différents (H et O)."
    },
    {
     "type": "tf",
     "q": "Le sel de cuisine a les mêmes propriétés que le sodium et le chlore.",
     "answer": false,
     "explain": "Un composé a des propriétés nouvelles : le sodium est explosif et le chlore toxique, le sel non."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Les réactions chimiques",
   "html": "<p>Dans une <b>réaction chimique</b>, les liaisons entre les atomes se cassent et de nouvelles se forment : les substances de départ (<b>réactifs</b>) se transforment en substances nouvelles (<b>produits</b>).</p>\n<p>Comment savoir qu'une réaction a eu lieu ? Cherche ces <b>indices</b> :</p>\n<ul>\n<li>🫧 des <b>bulles</b> de gaz se forment ;</li>\n<li>🎨 la <b>couleur</b> change ;</li>\n<li>🌫️ un solide apparaît et « trouble » le liquide (<b>précipité</b>) ;</li>\n<li>🔥 il se produit ou s'absorbe de la <b>chaleur</b>, de la lumière ou une flamme.</li>\n</ul>\n<p>Une réaction s'écrit avec une <b>équation chimique</b> : les réactifs à gauche, une flèche, les produits à droite.</p>\n<p style=\"text-align:center;font-size:1.2em\"><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>\n<p>Les nombres devant les formules s'appellent les <b>coefficients</b> : ils disent combien de molécules participent.</p>"
  },
  {
   "type": "text",
   "title": "5. Les deux grandes lois",
   "html": "<p><b>Loi de Lavoisier (conservation de la masse, 1789)</b> : « Rien ne se perd, rien ne se crée, tout se transforme ». Dans une réaction dans un récipient fermé, la <b>masse des réactifs est égale à la masse des produits</b>. Les atomes ne disparaissent pas : ils se réorganisent.</p>\n<p><b>Loi de Proust (proportions définies, 1799)</b> : dans un composé, les éléments sont toujours combinés dans le <b>même rapport de masse</b>. Dans le sulfure de fer (FeS) il y a toujours <b>7 g de fer pour 4 g de soufre</b>. Si tu mets plus de fer, celui en trop <b>reste</b>.</p>\n<p>C'est pourquoi une équation doit être <b>équilibrée</b> : à gauche et à droite il doit y avoir le même nombre d'atomes de chaque élément.</p>"
  },
  {
   "type": "svg",
   "title": "La balance de Lavoisier",
   "caption": "Avant et après la réaction, la balance indique la même valeur, si le récipient est fermé.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<rect x=\"295\" y=\"80\" width=\"10\" height=\"170\" fill=\"#475569\"/>\n<rect x=\"220\" y=\"250\" width=\"160\" height=\"16\" rx=\"4\" fill=\"#334155\"/>\n<rect x=\"90\" y=\"76\" width=\"420\" height=\"8\" rx=\"4\" fill=\"#64748b\"/>\n<polygon points=\"300,60 290,80 310,80\" fill=\"#334155\"/>\n<line x1=\"120\" y1=\"84\" x2=\"120\" y2=\"150\" stroke=\"#64748b\" stroke-width=\"2\"/>\n<line x1=\"480\" y1=\"84\" x2=\"480\" y2=\"150\" stroke=\"#64748b\" stroke-width=\"2\"/>\n<rect x=\"60\" y=\"150\" width=\"120\" height=\"10\" rx=\"3\" fill=\"#94a3b8\"/>\n<rect x=\"420\" y=\"150\" width=\"120\" height=\"10\" rx=\"3\" fill=\"#94a3b8\"/>\n<rect x=\"85\" y=\"100\" width=\"70\" height=\"50\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n<rect x=\"445\" y=\"100\" width=\"70\" height=\"50\" rx=\"6\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/>\n<text x=\"120\" y=\"130\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e3a8a\">4 g H₂</text>\n<text x=\"120\" y=\"146\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e3a8a\">32 g O₂</text>\n<text x=\"480\" y=\"132\" font-size=\"14\" text-anchor=\"middle\" fill=\"#14532d\">36 g H₂O</text>\n<text x=\"120\" y=\"190\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">AVANT : 36 g</text>\n<text x=\"480\" y=\"190\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">APRÈS : 36 g</text>\n<text x=\"300\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" fill=\"#7c3aed\" font-weight=\"bold\">2 H₂ + O₂ → 2 H₂O</text>\n</svg>"
  },
  {
   "type": "example",
   "title": "Exemple guidé 1 : équilibrer une équation",
   "html": "<p>Équilibrons la réaction de l'hydrogène avec l'oxygène : <b>H₂ + O₂ → H₂O</b></p>\n<ol>\n<li>Je compte les atomes : à gauche H = 2, O = 2 ; à droite H = 2, O = 1. L'oxygène ne tombe pas juste.</li>\n<li>Je mets un <b>2</b> devant H₂O : <b>H₂ + O₂ → 2 H₂O</b>. Maintenant à droite H = 4, O = 2.</li>\n<li>C'est l'hydrogène qui ne tombe plus juste : je mets un <b>2</b> devant H₂ : <b>2 H₂ + O₂ → 2 H₂O</b>.</li>\n<li>Je vérifie : à gauche H = 4, O = 2 ; à droite H = 4, O = 2. ✅ Équilibrée !</li>\n</ol>\n<p>⚠️ On ne change que les <b>coefficients</b>, jamais les petits chiffres des formules : H₂O₂ n'est pas de l'eau, c'est de l'eau oxygénée !</p>"
  },
  {
   "type": "text",
   "title": "6. La mole et les rapports stœchiométriques",
   "html": "<p>Les atomes sont trop petits pour être comptés un par un. Les chimistes les comptent « par paquets », comme on compte les œufs par douzaines. Le paquet des chimistes s'appelle la <b>mole</b> et contient <b>6,022 × 10²³</b> particules (nombre d'Avogadro).</p>\n<p>La <b>masse molaire</b> est la masse d'une mole, en grammes. On la calcule en additionnant les masses atomiques (du tableau périodique) : H = 1, C = 12, O = 16, Na = 23, S = 32, Cl = 35,5, Fe = 56.</p>\n<ul>\n<li>H₂ → 2 × 1 = <b>2 g/mol</b></li>\n<li>O₂ → 2 × 16 = <b>32 g/mol</b></li>\n<li>H₂O → 2 × 1 + 16 = <b>18 g/mol</b></li>\n<li>CO₂ → 12 + 2 × 16 = <b>44 g/mol</b></li>\n</ul>\n<p>Les <b>coefficients</b> d'une équation équilibrée indiquent les <b>rapports en moles</b> : dans 2 H₂ + O₂ → 2 H₂O, <b>2 moles</b> d'hydrogène réagissent avec <b>1 mole</b> d'oxygène et donnent <b>2 moles</b> d'eau. Ce sont les <b>rapports stœchiométriques</b> (du grec <i>stoicheion</i> = élément et <i>metron</i> = mesure).</p>"
  },
  {
   "type": "example",
   "title": "Exemple guidé 2 : combien d'eau j'obtiens ?",
   "html": "<p>Réaction : <b>2 H₂ + O₂ → 2 H₂O</b>. J'ai <b>4 g de H₂</b> et <b>32 g de O₂</b>.</p>\n<ol>\n<li>Je transforme les grammes en moles : H₂ → 4 g ÷ 2 g/mol = <b>2 mol</b> ; O₂ → 32 g ÷ 32 g/mol = <b>1 mol</b>.</li>\n<li>Le rapport demandé est 2 : 1 et c'est justement ce que j'ai. Les deux réagissent complètement.</li>\n<li>Il se forme 2 mol de H₂O → 2 × 18 g = <b>36 g</b>.</li>\n<li>Vérification avec Lavoisier : 4 g + 32 g = 36 g ✅</li>\n</ol>"
  },
  {
   "type": "example",
   "title": "Exemple guidé 3 : le réactif limitant",
   "html": "<p>Maintenant j'ai <b>10 g de H₂</b> et toujours <b>32 g de O₂</b>.</p>\n<ol>\n<li>Moles : H₂ = 10 ÷ 2 = <b>5 mol</b> ; O₂ = 32 ÷ 32 = <b>1 mol</b>.</li>\n<li>1 mol de O₂ a besoin de 2 mol de H₂. J'en ai 5 : l'hydrogène est en excès.</li>\n<li>L'oxygène est épuisé le premier : c'est le <b>réactif limitant</b>. C'est lui qui décide combien de produit se forme : 2 mol de H₂O = <b>36 g</b>.</li>\n<li>Il reste 5 − 2 = 3 mol de H₂ = <b>6 g</b> d'hydrogène qui n'a pas réagi.</li>\n<li>Vérification : 10 + 32 = 42 g avant ; 36 + 6 = 42 g après ✅</li>\n</ol>\n<p>Même raisonnement pour le fer et le soufre (Fe + S → FeS) : avec <b>14 g de Fe</b> et <b>10 g de S</b>, 14 g de Fe réagissent avec 8 g de S (rapport 7 : 4), il se forme <b>22 g de FeS</b> et il reste <b>2 g de soufre</b>.</p>"
  },
  {
   "type": "widget",
   "title": "🧪 Laboratoire en ligne",
   "widget": "chemLab",
   "caption": "Prends les réactifs sur l'étagère, choisis combien de grammes en mettre et verse-les dans le bécher. Le laboratoire te dit si une réaction a lieu, montre l'équation équilibrée, les moles, le réactif limitant, les produits et vérifie la conservation de la masse.",
   "options": {}
  },
  {
   "type": "remember",
   "title": "Expériences à essayer au laboratoire",
   "html": "<ul>\n<li>🫧 <b>Bicarbonate + vinaigre</b> : NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂ (bulles de dioxyde de carbone). Si le bécher est ouvert, le gaz s'échappe et la balance indique moins : pourquoi ?</li>\n<li>🔩 <b>Fer + soufre</b> : Fe + S → FeS. Essaie 56 g + 32 g, puis 56 g + 50 g : qu'est-ce qui reste ?</li>\n<li>⚖️ <b>Hydroxyde de sodium + acide chlorhydrique</b> : NaOH + HCl → NaCl + H₂O (neutralisation : il se forme du sel et de l'eau et ça chauffe).</li>\n<li>🌫️ <b>Nitrate d'argent + chlorure de sodium</b> : AgNO₃ + NaCl → AgCl↓ + NaNO₃ (précipité blanc).</li>\n<li>🔥 <b>Combustion du méthane</b> : CH₄ + 2 O₂ → CO₂ + 2 H₂O.</li>\n<li>✨ <b>Magnésium + oxygène</b> : 2 Mg + O₂ → 2 MgO (lumière très blanche).</li>\n<li>🎈 <b>Zinc + acide chlorhydrique</b> : Zn + 2 HCl → ZnCl₂ + H₂ (de l'hydrogène se dégage).</li>\n</ul>\n<p>⚠️ Ce sont des expériences <b>virtuelles</b> : beaucoup de ces réactifs sont dangereux et ne s'utilisent que dans un vrai laboratoire, avec un professeur et des protections.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… quand tu brûles du bois, rien ne « disparaît » ?",
   "html": "<p>Une bûche de 1 kg ne laisse que quelques grammes de cendres. On dirait que la masse a disparu, mais ce n'est pas le cas : le carbone et l'hydrogène du bois se sont unis à l'<b>oxygène de l'air</b> et sont devenus du <b>CO₂ et de la vapeur d'eau</b>, qui se sont envolés. Si tu pesais aussi tous les gaz, la masse des produits serait même <b>plus grande</b> que celle du bois, car elle comprend l'oxygène pris dans l'air !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… Mendeleïev a laissé des trous dans le tableau ?",
   "html": "<p>En 1869, Dmitri Mendeleïev rangea les 63 éléments connus et remarqua que les propriétés se répétaient à intervalles réguliers. Là où les calculs ne tombaient pas juste, il laissa des <b>cases vides</b> et prédit les propriétés d'éléments encore inconnus. Quelques années plus tard, on découvrit le <b>gallium</b> (1875) et le <b>germanium</b> (1886), avec des propriétés presque identiques à celles qu'il avait prévues !</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre la stœchiométrie",
   "intro": "Si les moles et les coefficients t'embrouillent, essaie de les voir ainsi.",
   "tabs": [
    {
     "label": "🥞 Une recette de cuisine",
     "html": "<p>Recette des crêpes : <b>2 œufs + 1 tasse de lait → 4 crêpes</b>. C'est une équation équilibrée !</p>\n<ul>\n<li>Avec 6 œufs et 3 tasses de lait → 12 crêpes (tout est triplé).</li>\n<li>Avec 6 œufs et <b>une seule tasse</b> de lait → seulement 4 crêpes : le lait est le <b>réactif limitant</b>, et il reste 4 œufs.</li>\n</ul>\n<p>Les moles sont comme les « douzaines » de la recette : elles comptent les ingrédients par groupes.</p>"
    },
    {
     "label": "🧱 Briques de construction",
     "html": "<p>Imagine les atomes comme des briques : <b>blanches</b> = H, <b>rouges</b> = O. Une molécule d'eau = 1 rouge + 2 blanches.</p>\n<p>Si tu as 10 blanches et 3 rouges, combien d'« eaux » construis-tu ? Chaque eau utilise 2 blanches : avec 10 blanches tu en ferais 5, mais avec 3 rouges seulement 3. Tu en construis <b>3</b> et il reste 4 blanches. Les briques ne disparaissent jamais : à la fin du jeu tu les comptes toutes (Lavoisier !).</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 3
     }
    },
    {
     "label": "⚖️ La balance à deux plateaux",
     "html": "<p>Équilibrer une équation, c'est comme mettre une balance en équilibre : sur chaque plateau il doit y avoir le même nombre d'atomes de chaque sorte. Tu peux ajouter des <b>molécules entières</b> (les coefficients), mais tu ne peux pas « couper » une molécule en deux ni transformer un atome en un autre.</p>\n<p>Essaie avec le méthane : CH₄ + O₂ → CO₂ + H₂O. À droite il faut 2 H₂O pour avoir 4 H ; alors à droite il y a 4 O et à gauche il faut 2 O₂. Résultat : <b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b>.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte : comment nous avons découvert les atomes",
   "nodes": [
    {
     "id": "democrito",
     "label": "Démocrite (Ve s. av. J.-C.)",
     "x": 12,
     "y": 12,
     "color": "#a855f7",
     "html": "Le philosophe grec imagina que la matière était faite de particules indivisibles : « átomos » = qu'on ne peut pas couper.",
     "why": "C'était seulement un raisonnement, sans expériences : si tu coupes un objet en morceaux de plus en plus petits, tôt ou tard tu devras arriver à un morceau qu'on ne peut plus diviser. Pendant 2000 ans, l'idée resta une philosophie."
    },
    {
     "id": "lavoisier",
     "label": "Lavoisier (1789)",
     "x": 38,
     "y": 30,
     "color": "#ef4444",
     "html": "Conservation de la masse : dans les réactions, la masse totale ne change pas.",
     "why": "Lavoisier utilisa la balance de façon très rigoureuse et fit les réactions dans des récipients fermés. Il découvrit que les métaux chauffés deviennent plus lourds parce qu'ils se combinent avec un gaz de l'air, qu'il appela oxygène. Ainsi la chimie devint une science de mesures."
    },
    {
     "id": "proust",
     "label": "Proust (1799)",
     "x": 62,
     "y": 30,
     "color": "#f97316",
     "html": "Proportions définies : un composé a toujours la même composition en masse.",
     "why": "En analysant des échantillons de carbonate de cuivre préparés de façons différentes, Proust trouva toujours les mêmes pourcentages. C'était un indice que les éléments s'unissent « par morceaux entiers »."
    },
    {
     "id": "dalton",
     "label": "Dalton (1808)",
     "x": 50,
     "y": 52,
     "color": "#3b82f6",
     "html": "Théorie atomique : chaque élément est fait d'atomes tous identiques ; les composés sont des combinaisons d'atomes en nombres entiers.",
     "why": "Dalton comprit que les lois de Lavoisier et de Proust s'expliquent facilement si les atomes existent : la masse se conserve parce que les atomes ne se créent ni ne se détruisent ; les proportions sont fixes parce qu'ils se combinent toujours dans des rapports de nombres entiers."
    },
    {
     "id": "mendeleev",
     "label": "Mendeleïev (1869)",
     "x": 22,
     "y": 76,
     "color": "#22c55e",
     "html": "Le tableau périodique : les éléments rangés par masse montrent des propriétés qui se répètent.",
     "why": "Mendeleïev remarqua la périodicité et osa laisser des cases vides pour des éléments inconnus. Quand ils furent découverts avec les propriétés prévues, tout le monde comprit que le tableau reflétait une structure cachée des atomes."
    },
    {
     "id": "bohr",
     "label": "Bohr (1913)",
     "x": 78,
     "y": 76,
     "color": "#0ea5e9",
     "html": "Modèle atomique : des électrons sur des orbites (niveaux) d'énergie autour du noyau.",
     "why": "Après que Rutherford (1911) eut découvert le noyau, Bohr expliqua pourquoi les atomes émettent de la lumière seulement de certaines couleurs : les électrons sautent entre des niveaux d'énergie fixes. Les niveaux expliquent aussi pourquoi le tableau se répète."
    },
    {
     "id": "stechiometria",
     "label": "Stœchiométrie",
     "x": 50,
     "y": 95,
     "color": "#eab308",
     "html": "Calculer les quantités de réactifs et de produits avec les moles et les coefficients.",
     "why": "Si les atomes se combinent en nombres entiers (Dalton) et que la masse se conserve (Lavoisier), alors nous pouvons prévoir avec précision combien de grammes de produit nous obtiendrons : c'est la base de l'industrie chimique et pharmaceutique."
    }
   ],
   "edges": [
    [
     "democrito",
     "dalton",
     "l'idée revient"
    ],
    [
     "lavoisier",
     "dalton",
     "expliquée par"
    ],
    [
     "proust",
     "dalton",
     "expliquée par"
    ],
    [
     "dalton",
     "mendeleev",
     "masses atomiques"
    ],
    [
     "mendeleev",
     "bohr",
     "structure cachée"
    ],
    [
     "dalton",
     "stechiometria",
     "nombres entiers"
    ],
    [
     "lavoisier",
     "stechiometria",
     "masse constante"
    ]
   ]
  },
  {
   "type": "decision",
   "title": "1770 : que se passe-t-il quand un métal brûle ?",
   "html": "<p>Au XVIIIe siècle, presque tous les chimistes croyaient à la <b>théorie du phlogistique</b> : toute substance qui brûle contiendrait un « principe du feu », le phlogistique, qui sort pendant la combustion. Mais il y avait un problème : quand on chauffe de l'étain ou du plomb à l'air, la poudre obtenue (la « chaux ») <b>pèse plus</b> que le métal de départ.</p>",
   "question": "Toi, à la place de Lavoisier, quelle explication aurais-tu choisie ?",
   "options": [
    {
     "label": "Le phlogistique a un poids négatif : quand il sort, le métal devient plus lourd.",
     "outcome": "Elle a vraiment été proposée par certains chimistes pour sauver la théorie. Mais c'est une hypothèse inventée « sur mesure », qu'on ne peut pas vérifier et qui contredit toutes les autres expériences sur les poids."
    },
    {
     "label": "Le métal prend quelque chose dans l'air : c'est pour cela qu'il pèse plus.",
     "outcome": "C'est l'hypothèse de Lavoisier. On peut la vérifier : si je chauffe le métal dans un récipient fermé, l'air à l'intérieur doit diminuer et le poids total rester le même."
    },
    {
     "label": "La balance se trompe : c'est seulement une erreur de mesure.",
     "outcome": "L'augmentation de poids se répétait toujours, avec des métaux et des balances différents : ce ne pouvait pas être une erreur due au hasard."
    }
   ],
   "answer": 1,
   "explain": "Lavoisier chauffa des métaux dans des récipients scellés : le poids total ne changeait pas, mais quand il ouvrait le récipient, de l'air entrait. Le métal avait « pris » un gaz, qu'il appela <b>oxygène</b> (1777). La science choisit son explication non parce qu'elle était plus célèbre, mais parce qu'elle <b>faisait des prévisions mesurables qui se révélaient vraies</b>, alors que le phlogistique avait besoin d'exceptions inventées. Ce fut la naissance de la chimie moderne."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : réactions et calculs",
   "questions": [
    {
     "type": "num",
     "q": "Masse molaire de CO₂ (C = 12, O = 16) ?",
     "answer": 44,
     "unit": "g/mol",
     "explain": "12 + 2 × 16 = 44 g/mol."
    },
    {
     "type": "mc",
     "q": "Dans 2 H₂ + O₂ → 2 H₂O, combien de moles de O₂ faut-il pour 4 moles de H₂ ?",
     "options": [
      "1",
      "2",
      "4"
     ],
     "answer": 1,
     "explain": "Le rapport est 2 : 1, donc 4 mol de H₂ demandent 2 mol de O₂."
    },
    {
     "type": "tf",
     "q": "Le réactif limitant est celui qui est épuisé le premier.",
     "answer": true,
     "explain": "C'est lui qui décide quelle quantité de produit peut se former."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Atome",
   "d": "La plus petite particule d'un élément : noyau (protons et neutrons) et électrons."
  },
  {
   "t": "Numéro atomique (Z)",
   "d": "Nombre de protons dans le noyau ; il identifie l'élément."
  },
  {
   "t": "Élément",
   "d": "Substance formée d'un seul type d'atome."
  },
  {
   "t": "Composé",
   "d": "Substance formée d'atomes d'éléments différents en proportions fixes."
  },
  {
   "t": "Molécule",
   "d": "Groupe d'atomes liés entre eux."
  },
  {
   "t": "Réaction chimique",
   "d": "Transformation dans laquelle les réactifs deviennent de nouveaux produits."
  },
  {
   "t": "Coefficient",
   "d": "Nombre devant une formule dans une équation : il indique combien de molécules ou de moles."
  },
  {
   "t": "Mole",
   "d": "Quantité qui contient 6,022 × 10²³ particules."
  },
  {
   "t": "Masse molaire",
   "d": "Masse en grammes d'une mole de substance (g/mol)."
  },
  {
   "t": "Rapport stœchiométrique",
   "d": "Rapport en moles entre réactifs et produits donné par les coefficients."
  },
  {
   "t": "Réactif limitant",
   "d": "Le réactif qui est consommé le premier et limite la quantité de produit."
  },
  {
   "t": "Précipité",
   "d": "Solide qui se forme dans une solution pendant une réaction."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Que dit la loi de Lavoisier ?",
    "options": [
     "La masse des produits est égale à celle des réactifs",
     "Les gaz pèsent toujours moins que les solides",
     "Les éléments peuvent se transformer en d'autres éléments"
    ],
    "answer": 0,
    "explain": "Rien ne se perd, rien ne se crée, tout se transforme."
   },
   {
    "type": "num",
    "q": "Masse molaire de l'eau H₂O (H = 1, O = 16) ?",
    "answer": 18,
    "unit": "g/mol",
    "explain": "2 × 1 + 16 = 18 g/mol."
   },
   {
    "type": "num",
    "q": "Équilibre : CH₄ + ? O₂ → CO₂ + 2 H₂O. Quel coefficient faut-il devant O₂ ?",
    "answer": 2,
    "explain": "À droite il y a 2 + 2 = 4 atomes de O, donc il faut 2 O₂."
   },
   {
    "type": "num",
    "q": "Combien de grammes de O₂ réagissent complètement avec 8 g de H₂ ? (2 H₂ + O₂ → 2 H₂O)",
    "answer": 64,
    "unit": "g",
    "explain": "8 g H₂ = 4 mol ; il faut 2 mol O₂ = 2 × 32 = 64 g."
   },
   {
    "type": "num",
    "q": "Combien de moles d'eau se forment à partir de 3 moles de O₂ (avec de l'hydrogène en excès) ?",
    "answer": 6,
    "unit": "mol",
    "explain": "Le rapport O₂ : H₂O est 1 : 2, donc 3 × 2 = 6 mol."
   },
   {
    "type": "num",
    "q": "14 g de fer réagissent exactement avec 8 g de soufre. Combien de grammes de FeS se forment ?",
    "answer": 22,
    "unit": "g",
    "explain": "D'après Lavoisier : 14 + 8 = 22 g."
   },
   {
    "type": "mc",
    "q": "Avec 10 g de H₂ et 32 g de O₂, quel est le réactif limitant ?",
    "options": [
     "H₂",
     "O₂",
     "Aucun"
    ],
    "answer": 1,
    "explain": "5 mol de H₂ et 1 mol de O₂ : l'oxygène est épuisé le premier et il reste 6 g de H₂."
   },
   {
    "type": "num",
    "q": "Combien de moles font 88 g de CO₂ ?",
    "answer": 2,
    "unit": "mol",
    "explain": "88 ÷ 44 = 2 mol."
   },
   {
    "type": "mc",
    "q": "En mélangeant du nitrate d'argent et du chlorure de sodium, il se forme un précipité…",
    "options": [
     "bleu",
     "blanc",
     "rouge"
    ],
    "answer": 1,
    "explain": "Le chlorure d'argent (AgCl) est un solide blanc."
   },
   {
    "type": "mc",
    "q": "Lequel est un mélange et non un composé ?",
    "options": [
     "eau distillée",
     "sel de cuisine",
     "air"
    ],
    "answer": 2,
    "explain": "L'air est un mélange de gaz (azote, oxygène, argon…)."
   },
   {
    "type": "order",
    "q": "Range dans l'ordre chronologique.",
    "items": [
     "Démocrite",
     "Lavoisier",
     "Dalton",
     "Mendeleïev",
     "Bohr"
    ],
    "explain": "Ve s. av. J.-C., 1789, 1808, 1869, 1913."
   },
   {
    "type": "tf",
    "q": "Dans une équation, on peut changer les petits chiffres des formules pour l'équilibrer.",
    "answer": false,
    "explain": "On ne change que les coefficients : changer les formules voudrait dire changer de substance."
   }
  ]
 }
});
