TOPIC('fr', {
 "id": "p4-sci-materia",
 "title": "La matière",
 "intro": "Ton bureau, l'eau que tu bois, l'air que tu respires et même toi : tout est fait de <b>matière</b>. Mais de quoi la matière est-elle faite ? De minuscules morceaux invisibles, appelés <b>atomes</b>. Découvrons comment ils se comportent dans les <b>solides</b>, les <b>liquides</b> et les <b>gaz</b>, et comment la matière peut <b>changer d'état</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce que la matière ?",
   "html": "<p>La <b>matière</b> est tout ce qui <b>occupe de la place</b> et qui a une <b>masse</b> (c'est-à-dire qui « pèse »). Le bois, l'eau, le fer, l'air, notre corps : tout cela est de la matière.</p>\n<p>La lumière, le son, la chaleur, les pensées ou les émotions <b>ne sont pas</b> de la matière : ils n'occupent pas de place et n'ont pas de masse.</p>\n<p>Chaque objet a :</p>\n<ul>\n<li>une <b>masse</b> : la quantité de matière (elle se mesure en grammes, en kilogrammes…) ;</li>\n<li>un <b>volume</b> : la place qu'il occupe (il se mesure en litres, en cm³, en m³…).</li>\n</ul>\n<p>L'air aussi a une masse et occupe de la place : essaie d'écraser une bouteille vide fermée par son bouchon… tu n'y arrives pas, parce qu'elle est pleine d'air !</p>"
  },
  {
   "type": "text",
   "title": "Atomes et molécules : les briques de la matière",
   "html": "<p>Si tu pouvais couper un morceau de fer en deux, puis encore en deux, et encore et encore… à la fin tu arriverais à une particule minuscule qu'on ne peut plus diviser sans qu'elle cesse d'être du fer : l'<b>atome</b>.</p>\n<ul>\n<li>Les <b>atomes</b> sont minuscules : dans un seul grain de sel, il y en a environ un milliard de milliards !</li>\n<li>Il existe environ <b>118 types</b> d'atomes, appelés <b>éléments</b> : hydrogène (H), oxygène (O), carbone (C), fer (Fe), or (Au)…</li>\n<li>Les atomes s'assemblent entre eux et forment les <b>molécules</b>. Par exemple, <b>2 atomes d'hydrogène + 1 d'oxygène</b> forment une molécule d'<b>eau</b> : <b>H₂O</b>.</li>\n</ul>\n<p>Avec peu de types d'atomes, la nature construit des millions de substances différentes, comme avec les 26 lettres de l'alphabet nous écrivons tous les mots !</p>\n<p>Les particules de la matière sont <b>toujours en mouvement</b> et elles s'<b>attirent</b> entre elles. C'est la façon dont elles bougent et leur éloignement qui déterminent l'<b>état</b> de la matière.</p>"
  },
  {
   "type": "3d",
   "title": "La molécule d'eau en 3D",
   "scene": "molecule",
   "options": {
    "atoms": [
     {
      "x": 0,
      "y": 0.3,
      "z": 0,
      "r": 0.6,
      "color": "#ef4444",
      "label": "O"
     },
     {
      "x": -0.78,
      "y": -0.3,
      "z": 0,
      "r": 0.38,
      "color": "#f8fafc",
      "label": "H"
     },
     {
      "x": 0.78,
      "y": -0.3,
      "z": 0,
      "r": 0.38,
      "color": "#f8fafc",
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
   },
   "caption": "Une molécule d'eau : un atome d'oxygène (rouge) lié à deux atomes d'hydrogène (blancs). Elle a la forme d'un « V » un peu ouvert, avec un angle d'environ 104,5°."
  },
  {
   "type": "text",
   "title": "Les trois états de la matière",
   "html": "<table>\n<tr><th></th><th>🧊 Solide</th><th>💧 Liquide</th><th>💨 Gazeux (gaz)</th></tr>\n<tr><td><b>Forme</b></td><td>propre</td><td>prend celle du récipient</td><td>prend celle du récipient</td></tr>\n<tr><td><b>Volume</b></td><td>propre</td><td>propre</td><td>occupe tout l'espace disponible</td></tr>\n<tr><td><b>Particules</b></td><td>très proches, ordonnées, elles vibrent sur place</td><td>proches mais elles glissent les unes sur les autres</td><td>éloignées, elles se déplacent très vite dans toutes les directions</td></tr>\n<tr><td><b>Peut-on le comprimer ?</b></td><td>non</td><td>presque pas</td><td>oui, beaucoup</td></tr>\n<tr><td><b>Exemples</b></td><td>caillou, glace, bois</td><td>eau, huile, lait</td><td>air, vapeur, hélium des ballons</td></tr>\n</table>\n<p>Attention : le <b>sable</b>, la <b>farine</b> et le <b>sel</b> ressemblent à des liquides parce qu'on peut les verser, mais ce sont des <b>solides</b> : chaque grain a sa propre forme !</p>"
  },
  {
   "type": "svg",
   "title": "Les particules dans les trois états",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f8fafc\"/>\n<rect x=\"20\" y=\"40\" width=\"180\" height=\"180\" fill=\"#e0e7ff\" stroke=\"#3730a3\" stroke-width=\"4\"/>\n<g fill=\"#6366f1\"><circle cx=\"50\" cy=\"70\" r=\"14\"/><circle cx=\"82\" cy=\"70\" r=\"14\"/><circle cx=\"114\" cy=\"70\" r=\"14\"/><circle cx=\"146\" cy=\"70\" r=\"14\"/><circle cx=\"178\" cy=\"70\" r=\"14\"/>\n<circle cx=\"50\" cy=\"102\" r=\"14\"/><circle cx=\"82\" cy=\"102\" r=\"14\"/><circle cx=\"114\" cy=\"102\" r=\"14\"/><circle cx=\"146\" cy=\"102\" r=\"14\"/><circle cx=\"178\" cy=\"102\" r=\"14\"/>\n<circle cx=\"50\" cy=\"134\" r=\"14\"/><circle cx=\"82\" cy=\"134\" r=\"14\"/><circle cx=\"114\" cy=\"134\" r=\"14\"/><circle cx=\"146\" cy=\"134\" r=\"14\"/><circle cx=\"178\" cy=\"134\" r=\"14\"/>\n<circle cx=\"50\" cy=\"166\" r=\"14\"/><circle cx=\"82\" cy=\"166\" r=\"14\"/><circle cx=\"114\" cy=\"166\" r=\"14\"/><circle cx=\"146\" cy=\"166\" r=\"14\"/><circle cx=\"178\" cy=\"166\" r=\"14\"/>\n<circle cx=\"50\" cy=\"198\" r=\"14\"/><circle cx=\"82\" cy=\"198\" r=\"14\"/><circle cx=\"114\" cy=\"198\" r=\"14\"/><circle cx=\"146\" cy=\"198\" r=\"14\"/><circle cx=\"178\" cy=\"198\" r=\"14\"/></g>\n<text x=\"110\" y=\"28\" font-size=\"20\" text-anchor=\"middle\" fill=\"#3730a3\" font-weight=\"bold\">SOLIDE</text>\n<text x=\"110\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">SOLIDE</text>\n<path d=\"M230 40 L230 220 L410 220 L410 40\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"4\"/>\n<g fill=\"#0ea5e9\"><circle cx=\"255\" cy=\"205\" r=\"14\"/><circle cx=\"285\" cy=\"200\" r=\"14\"/><circle cx=\"318\" cy=\"206\" r=\"14\"/><circle cx=\"350\" cy=\"198\" r=\"14\"/><circle cx=\"385\" cy=\"205\" r=\"14\"/>\n<circle cx=\"262\" cy=\"174\" r=\"14\"/><circle cx=\"298\" cy=\"170\" r=\"14\"/><circle cx=\"335\" cy=\"173\" r=\"14\"/><circle cx=\"372\" cy=\"170\" r=\"14\"/>\n<circle cx=\"250\" cy=\"143\" r=\"14\"/><circle cx=\"285\" cy=\"140\" r=\"14\"/><circle cx=\"320\" cy=\"142\" r=\"14\"/><circle cx=\"356\" cy=\"140\" r=\"14\"/><circle cx=\"392\" cy=\"145\" r=\"14\"/></g>\n<text x=\"320\" y=\"28\" font-size=\"20\" text-anchor=\"middle\" fill=\"#0369a1\" font-weight=\"bold\">LIQUIDE</text>\n<text x=\"320\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">LIQUIDE</text>\n<rect x=\"440\" y=\"40\" width=\"180\" height=\"180\" fill=\"#fef3c7\" stroke=\"#b45309\" stroke-width=\"4\"/>\n<g fill=\"#f59e0b\"><circle cx=\"470\" cy=\"70\" r=\"14\"/><circle cx=\"580\" cy=\"80\" r=\"14\"/><circle cx=\"530\" cy=\"130\" r=\"14\"/><circle cx=\"465\" cy=\"180\" r=\"14\"/><circle cx=\"595\" cy=\"195\" r=\"14\"/></g>\n<g stroke=\"#b45309\" stroke-width=\"3\"><line x1=\"485\" y1=\"62\" x2=\"510\" y2=\"50\"/><line x1=\"565\" y1=\"90\" x2=\"545\" y2=\"105\"/><line x1=\"545\" y1=\"140\" x2=\"570\" y2=\"160\"/><line x1=\"480\" y1=\"188\" x2=\"500\" y2=\"205\"/><line x1=\"580\" y1=\"185\" x2=\"560\" y2=\"170\"/></g>\n<text x=\"530\" y=\"28\" font-size=\"20\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\">GAZ</text>\n<text x=\"530\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">GAZ</text>\n<text x=\"320\" y=\"285\" font-size=\"17\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">fusion ➜</text>\n</svg>",
   "caption": "Mêmes particules, comportement différent : dans le solide elles restent à leur place, dans le liquide elles glissent, dans le gaz elles volent partout."
  },
  {
   "type": "widget",
   "title": "Solide, liquide ou gaz ?",
   "widget": "classify",
   "options": {
    "groups": [
     "Solide",
     "Liquide",
     "Gazeux"
    ],
    "items": [
     [
      "🪨 caillou",
      0
     ],
     [
      "🧂 sel",
      0
     ],
     [
      "🧊 glaçon",
      0
     ],
     [
      "🥛 lait",
      1
     ],
     [
      "🫒 huile",
      1
     ],
     [
      "🍯 miel",
      1
     ],
     [
      "🎈 hélium du ballon",
      2
     ],
     [
      "♨️ vapeur de la casserole",
      2
     ],
     [
      "🌬️ air",
      2
     ],
     [
      "⏳ sable",
      0
     ]
    ]
   },
   "caption": "Pièges : le sel et le sable se versent mais ce sont des solides ; le miel est lent mais c'est un liquide."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les états de la matière",
   "questions": [
    {
     "type": "mc",
     "q": "Quel état de la matière a une forme et un volume propres ?",
     "options": [
      "Solide",
      "Liquide",
      "Gaz"
     ],
     "answer": 0,
     "explain": "Le solide garde sa forme et son volume."
    },
    {
     "type": "tf",
     "q": "La lumière est de la matière.",
     "answer": false,
     "explain": "La lumière n'a pas de masse et n'occupe pas de place : c'est de l'énergie."
    },
    {
     "type": "mc",
     "q": "Une molécule d'eau est formée de…",
     "options": [
      "1 atome d'hydrogène et 2 d'oxygène",
      "2 atomes d'hydrogène et 1 d'oxygène",
      "uniquement d'oxygène"
     ],
     "answer": 1,
     "explain": "H₂O : deux H et un O."
    }
   ]
  },
  {
   "type": "text",
   "title": "Les changements d'état",
   "html": "<p>Si on <b>apporte de la chaleur</b> ou si on en <b>retire</b>, la matière peut changer d'état. Les particules restent les mêmes : seule leur façon de bouger change !</p>\n<p><b>En apportant de la chaleur</b> (les particules bougent plus) :</p>\n<ul>\n<li><b>Fusion</b> : de solide à liquide (la glace fond à <b>0 °C</b> ; le chocolat fond dans la main).</li>\n<li><b>Évaporation</b> : de liquide à gaz, lentement et seulement en surface (le linge étendu sèche). Si cela se produit dans tout le liquide, avec des bulles, cela s'appelle l'<b>ébullition</b> (l'eau bout à <b>100 °C</b> au niveau de la mer).</li>\n<li><b>Sublimation</b> : de solide directement à gaz (la naphtaline dans les armoires, la « glace sèche » qui fait de la fumée dans les concerts).</li>\n</ul>\n<p><b>En retirant de la chaleur</b> (les particules ralentissent) :</p>\n<ul>\n<li><b>Solidification</b> : de liquide à solide (l'eau dans le congélateur devient de la glace).</li>\n<li><b>Condensation</b> : de gaz à liquide (les gouttelettes sur le miroir après la douche, la rosée).</li>\n<li><b>Condensation solide</b> (ou givrage) : de gaz directement à solide (le givre sur l'herbe et sur les vitres les nuits glaciales).</li>\n</ul>\n<p>Pendant qu'une substance pure change d'état, sa <b>température reste constante</b> : toute la chaleur sert à « détacher » les particules. Un verre d'eau avec des glaçons reste à 0 °C tant qu'il y a encore de la glace !</p>"
  },
  {
   "type": "svg",
   "title": "Le cycle des changements d'état",
   "svg": "<svg viewBox=\"0 0 640 330\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"330\" fill=\"#fff7ed\"/>\n<circle cx=\"110\" cy=\"250\" r=\"62\" fill=\"#c7d2fe\" stroke=\"#3730a3\" stroke-width=\"4\"/>\n<text x=\"110\" y=\"248\" font-size=\"34\" text-anchor=\"middle\">🧊</text>\n<text x=\"110\" y=\"280\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#3730a3\">SOLIDO</text>\n<circle cx=\"530\" cy=\"250\" r=\"62\" fill=\"#bae6fd\" stroke=\"#0369a1\" stroke-width=\"4\"/>\n<text x=\"530\" y=\"248\" font-size=\"34\" text-anchor=\"middle\">💧</text>\n<text x=\"530\" y=\"280\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0369a1\">LIQUIDO</text>\n<circle cx=\"320\" cy=\"75\" r=\"62\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"4\"/>\n<text x=\"320\" y=\"73\" font-size=\"34\" text-anchor=\"middle\">💨</text>\n<text x=\"320\" y=\"105\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#b45309\">GAS</text>\n<g stroke=\"#dc2626\" stroke-width=\"4\" fill=\"none\"><path d=\"M175 235 L465 235\"/><path d=\"M490 195 L375 110\"/><path d=\"M150 195 L262 110\"/></g>\n<g fill=\"#dc2626\"><polygon points=\"465,227 480,235 465,243\"/><polygon points=\"381,103 366,104 372,117\"/><polygon points=\"255,104 270,103 266,117\"/></g>\n<g stroke=\"#2563eb\" stroke-width=\"4\" fill=\"none\"><path d=\"M465 275 L175 275\"/><path d=\"M360 135 L470 215\"/><path d=\"M280 135 L170 215\"/></g>\n<g fill=\"#2563eb\"><polygon points=\"175,267 160,275 175,283\"/><polygon points=\"464,222 478,224 473,210\"/><polygon points=\"176,222 162,224 167,210\"/></g>\n<g font-size=\"16\" font-weight=\"bold\"><text x=\"320\" y=\"228\" text-anchor=\"middle\" fill=\"#dc2626\">fusione ➜</text><text x=\"320\" y=\"300\" text-anchor=\"middle\" fill=\"#2563eb\">⬅ solidificazione</text>\n<text x=\"445\" y=\"135\" fill=\"#dc2626\">evaporazione</text><text x=\"430\" y=\"200\" fill=\"#2563eb\">condensazione</text>\n<text x=\"85\" y=\"135\" fill=\"#dc2626\">sublimazione</text><text x=\"110\" y=\"200\" fill=\"#2563eb\">brinamento</text></g>\n<text x=\"20\" y=\"320\" font-size=\"15\" fill=\"#dc2626\">rosso = si dà calore</text>\n<text x=\"460\" y=\"320\" font-size=\"15\" fill=\"#2563eb\">blu = si toglie calore</text>\n</svg>",
   "caption": "Six changements d'état, par paires opposées : fusion ↔ solidification, évaporation ↔ condensation, sublimation ↔ givrage."
  },
  {
   "type": "widget",
   "title": "Associe le changement d'état à l'exemple",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "Fusion",
      "La glace fond au soleil"
     ],
     [
      "Solidification",
      "L'eau du congélateur devient de la glace"
     ],
     [
      "Évaporation",
      "La flaque disparaît"
     ],
     [
      "Condensation",
      "Le miroir s'embue après la douche"
     ],
     [
      "Sublimation",
      "La naphtaline rétrécit dans l'armoire"
     ],
     [
      "Givrage",
      "Le givre se forme sur la vitre de la voiture"
     ]
    ]
   },
   "caption": "Chaque changement d'état se voit tous les jours, à la maison et dans la nature."
  },
  {
   "type": "example",
   "title": "Exemple pratique : l'eau dans la cuisine",
   "html": "<p>Maman prépare les pâtes. Observe combien de changements :</p>\n<ol>\n<li>Elle prend des glaçons dans le congélateur pour l'eau à boire : dans le verre ils <b>fondent</b> (solide → liquide).</li>\n<li>Elle met la casserole sur le feu : à 100 °C l'eau <b>bout</b> (ébullition : liquide → gaz). La vapeur est invisible !</li>\n<li>Le petit « nuage » blanc que tu vois au-dessus de la casserole, ce sont en réalité des gouttelettes : la vapeur, en touchant l'air plus frais, <b>se condense</b> (gaz → liquide).</li>\n<li>Sur le couvercle, beaucoup de gouttes se forment et retombent : encore de la <b>condensation</b>.</li>\n</ol>\n<p>Dans tout cela, l'eau reste toujours de l'eau (H₂O) : c'est l'état qui change, pas la substance. C'est une <b>transformation physique</b>, réversible.</p>"
  },
  {
   "type": "example",
   "title": "Exemple pratique : la bouteille et le ballon",
   "html": "<p>Une expérience pour montrer que les gaz occupent de la place et se dilatent avec la chaleur :</p>\n<ol>\n<li>Enfile un ballon dégonflé sur le goulot d'une bouteille en plastique vide.</li>\n<li>Place la bouteille dans une bassine d'<b>eau chaude</b> (pas bouillante !) : le ballon se <b>gonfle</b> un peu. L'air à l'intérieur, en se réchauffant, se dilate.</li>\n<li>Mets-la ensuite dans de l'eau avec des <b>glaçons</b> : le ballon se <b>dégonfle</b>. L'air froid occupe moins de place.</li>\n</ol>\n<p>Les particules d'air, plus chaudes, bougent plus vite et « poussent » davantage.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La glace flotte",
   "html": "<p>Presque toutes les substances, en devenant solides, se resserrent et occupent moins de place. Pas l'eau ! La glace occupe environ <b>9 % de plus</b> que l'eau liquide : c'est pour cela qu'elle flotte, et qu'une bouteille pleine d'eau oubliée au congélateur éclate. C'est une chance pour les poissons : en hiver, la glace reste en surface et fait comme une « couverture », tandis que dessous l'eau reste liquide.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Il existe un quatrième état",
   "html": "<p>Outre le solide, le liquide et le gaz, il existe le <b>plasma</b> : un gaz si chaud que les atomes perdent des petits morceaux (les électrons). Le Soleil et les étoiles sont faits de plasma, de même que les éclairs et les aurores polaires. C'est en réalité l'état le plus répandu dans l'univers !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Nous sommes faits de poussière d'étoiles",
   "html": "<p>Les atomes de carbone, d'oxygène et de fer de ton corps ont été « fabriqués » il y a des milliards d'années à l'intérieur d'étoiles très anciennes, qui ont ensuite explosé et dispersé leurs atomes dans l'espace. De cette poussière se sont formés le Soleil, la Terre… et nous aussi !</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Matière = tout ce qui a une <b>masse</b> et un <b>volume</b>. Elle est faite d'<b>atomes</b>, qui s'assemblent en <b>molécules</b>.</li>\n<li><b>Solide</b> : forme et volume propres. <b>Liquide</b> : volume propre, forme du récipient. <b>Gaz</b> : ni forme ni volume propres.</li>\n<li>Avec la chaleur : <b>fusion</b>, <b>évaporation/ébullition</b>, <b>sublimation</b>.</li>\n<li>En retirant de la chaleur : <b>solidification</b>, <b>condensation</b>, <b>givrage</b>.</li>\n<li>Eau : fond/se solidifie à <b>0 °C</b>, bout à <b>100 °C</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre la matière",
   "intro": "Les atomes ne se voient pas, mais on peut les imaginer, les jouer avec son corps, les construire. Choisis la façon qui te convient !",
   "tabs": [
    {
     "label": "🏃 Deviens une particule",
     "html": "<p>Un jeu à faire au gymnase ou dans la cour : chaque enfant est une <b>particule</b>.</p>\n<ul>\n<li><b>Solide</b> : restez serrés, en rangs bien alignés, en vous tenant par les bras. Vous pouvez seulement vous balancer sur place (vibrer).</li>\n<li><b>Liquide</b> : lâchez les bras mais restez proches ; vous pouvez glisser les uns à côté des autres et « remplir » une zone dessinée à la craie.</li>\n<li><b>Gaz</b> : courez (doucement !) dans toutes les directions, en utilisant tout le gymnase.</li>\n</ul>\n<p>Le maître ou la maîtresse joue le « réchaud » : quand il ou elle dit « plus de chaleur ! », vous bougez plus vite et vous changez d'état ; quand il ou elle dit « froid ! », vous ralentissez et vous vous rapprochez.</p>"
    },
    {
     "label": "🧱 Comme des briques",
     "html": "<p>Imagine les <b>atomes</b> comme les <b>briques</b> d'un jeu de construction : il y a peu de couleurs et de formes (les éléments), mais avec elles tu peux tout construire.</p>\n<ul>\n<li>2 briques blanches (H) + 1 rouge (O) = une molécule d'eau 💧</li>\n<li>1 noire (C) + 2 rouges (O) = dioxyde de carbone</li>\n<li>2 rouges ensemble = l'oxygène que nous respirons</li>\n</ul>\n<p>Si tu défais la construction et que tu remontes les briques d'une autre façon, tu obtiens une substance différente : c'est une <b>réaction chimique</b> ! Dans les changements d'état, au contraire, les constructions restent intactes : seuls changent leur éloignement et leur mouvement.</p>"
    },
    {
     "label": "⚛️ L'atome en 3D",
     "html": "<p>Voici comment les scientifiques imaginent un atome (modèle du Danois <b>Niels Bohr</b>, 1913) : au centre un <b>noyau</b> minuscule, autour les <b>électrons</b> qui tournent à toute vitesse. Choisis l'élément : hydrogène (1 électron), hélium (2), carbone (6), oxygène (8), sodium (11).</p>\n<p>Si l'atome était grand comme un stade de football, le noyau serait gros comme une fourmi au centre du terrain : l'atome est presque entièrement vide !</p>",
     "scene": "atom",
     "options": {
      "elements": [
       "H",
       "He",
       "C",
       "O",
       "Na"
      ]
     }
    },
    {
     "label": "🏛️ L'idée de Démocrite",
     "html": "<p>Il y a environ <b>2 400 ans</b>, en Grèce, le philosophe <b>Démocrite</b> (avec son maître Leucippe) se demanda : « Si je coupe une pomme en deux, puis encore en deux, puis-je continuer indéfiniment ? ». Il répondit que non : tôt ou tard on arrive à un tout petit morceau qu'on <b>ne peut plus couper</b>. Il l'appela <b>átomos</b>, ce qui en grec veut dire justement « indivisible ».</p>\n<p>Ce n'était qu'une idée, sans expériences. Il fallut plus de 2 000 ans pour que l'Anglais <b>John Dalton</b> (1808) la transforme en une vraie théorie scientifique. Et ensuite on découvrit que l'atome lui-même est fait de particules encore plus petites !</p>"
    },
    {
     "label": "🔬 Le tableau des éléments",
     "html": "<p>Tous les éléments connus sont rangés dans le <b>tableau périodique</b>, inventé par le Russe <b>Dmitri Mendeleïev</b> en 1869. Touche un élément pour le découvrir. Retrouves-tu ceux que tu connais ? Oxygène (O), fer (Fe), or (Au), carbone (C)…</p>",
     "widget": "periodicTable",
     "options": {}
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de la matière : touche un nœud et découvre pourquoi",
   "nodes": [
    {
     "id": "materia",
     "label": "Matière",
     "x": 50,
     "y": 6,
     "color": "#7c3aed",
     "html": "Tout ce qui a une masse et occupe de la place.",
     "why": "C'est une définition qu'on peut vérifier avec la balance (masse) et avec un récipient gradué (volume). Aristote parlait déjà de matière, mais il pensait qu'elle était faite de 4 « éléments » : terre, eau, air et feu."
    },
    {
     "id": "atomi",
     "label": "Atomes",
     "x": 22,
     "y": 28,
     "color": "#2563eb",
     "html": "Les minuscules particules dont la matière est faite.",
     "why": "Imaginés par Démocrite (Ve siècle av. J.-C.) ; démontrés par des expériences grâce à John Dalton (1808), qui remarqua que les substances se combinent toujours dans des proportions fixes. En 1905, Albert Einstein expliqua le mouvement désordonné des grains de pollen dans l'eau (mouvement brownien) comme l'effet des chocs des molécules : c'était la preuve qu'elles existent vraiment."
    },
    {
     "id": "elementi",
     "label": "Éléments",
     "x": 8,
     "y": 52,
     "color": "#0ea5e9",
     "html": "Substances faites d'un seul type d'atome : environ 118.",
     "why": "En 1869, Mendeleïev les rangea dans le tableau périodique et laissa des cases vides pour des éléments pas encore découverts, en prévoyant leurs propriétés. Quand ils furent trouvés (gallium 1875, scandium 1879, germanium 1886), tout le monde comprit qu'il avait raison."
    },
    {
     "id": "molecole",
     "label": "Molécules",
     "x": 36,
     "y": 52,
     "color": "#06b6d4",
     "html": "Groupes d'atomes liés entre eux, comme H₂O.",
     "why": "Le nom fut rendu célèbre par l'Italien <b>Amedeo Avogadro</b> (1811), qui comprit le premier la différence entre atomes et molécules : par exemple que le gaz oxygène est fait de paires d'atomes (O₂)."
    },
    {
     "id": "particelle",
     "label": "Particules en mouvement",
     "x": 78,
     "y": 28,
     "color": "#dc2626",
     "html": "Les particules bougent toujours et s'attirent.",
     "why": "Plus de chaleur = plus de mouvement. Cette « théorie cinétique » fut développée au XIXe siècle par Maxwell et Boltzmann et explique pourquoi la matière change d'état."
    },
    {
     "id": "solido",
     "label": "Solide",
     "x": 60,
     "y": 60,
     "color": "#4f46e5",
     "html": "Forme et volume propres.",
     "why": "Les particules sont si liées qu'elles peuvent seulement vibrer à leur place, souvent selon des arrangements ordonnés appelés cristaux (comme dans le sel ou la neige)."
    },
    {
     "id": "liquido",
     "label": "Liquide",
     "x": 78,
     "y": 70,
     "color": "#0284c7",
     "html": "Volume propre, forme du récipient.",
     "why": "Les particules restent proches (donc le volume ne change pas) mais glissent les unes sur les autres (donc la forme change)."
    },
    {
     "id": "gas",
     "label": "Gaz (gazeux)",
     "x": 94,
     "y": 56,
     "color": "#d97706",
     "html": "Ni forme ni volume propres.",
     "why": "Les particules sont si rapides qu'elles vainquent l'attraction mutuelle : elles s'éloignent et remplissent tout l'espace. C'est pourquoi les gaz se compriment : entre les particules, il y a beaucoup de vide."
    },
    {
     "id": "passaggi",
     "label": "Changements d'état",
     "x": 50,
     "y": 92,
     "color": "#16a34a",
     "html": "Fusion, solidification, évaporation, condensation, sublimation, givrage.",
     "why": "Apporter de la chaleur fait bouger davantage les particules, en retirer les fait ralentir. Le scientifique écossais <b>Joseph Black</b> (vers 1760) découvrit la « chaleur latente » : pendant le changement d'état, on absorbe de la chaleur sans que la température monte."
    }
   ],
   "edges": [
    [
     "materia",
     "atomi",
     "est faite de"
    ],
    [
     "atomi",
     "elementi",
     "types différents"
    ],
    [
     "atomi",
     "molecole",
     "s'assemblent en"
    ],
    [
     "materia",
     "particelle",
     "les particules"
    ],
    [
     "particelle",
     "solido",
     "immobiles et proches"
    ],
    [
     "particelle",
     "liquido",
     "proches et glissantes"
    ],
    [
     "particelle",
     "gas",
     "libres et rapides"
    ],
    [
     "solido",
     "passaggi",
     "avec la chaleur"
    ],
    [
     "liquido",
     "passaggi",
     "change d'état"
    ],
    [
     "gas",
     "passaggi",
     "en retirant de la chaleur"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les changements d'état",
   "questions": [
    {
     "type": "mc",
     "q": "Comment s'appelle le passage de gaz à liquide ?",
     "options": [
      "Évaporation",
      "Condensation",
      "Fusion"
     ],
     "answer": 1,
     "explain": "Condensation, comme les gouttes sur le miroir."
    },
    {
     "type": "num",
     "q": "À combien de degrés Celsius l'eau bout-elle au niveau de la mer ?",
     "answer": 100,
     "unit": "°C",
     "explain": "100 °C (en haute montagne elle bout à des températures un peu plus basses)."
    },
    {
     "type": "tf",
     "q": "Dans la sublimation, un solide devient gaz sans passer par l'état liquide.",
     "answer": true,
     "explain": "Comme la naphtaline ou la glace sèche."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Matière",
   "d": "Tout ce qui a une masse et occupe de la place."
  },
  {
   "t": "Masse",
   "d": "Quantité de matière d'un corps."
  },
  {
   "t": "Volume",
   "d": "Espace occupé par un corps."
  },
  {
   "t": "Atome",
   "d": "Particule minuscule qui forme la matière."
  },
  {
   "t": "Élément",
   "d": "Substance faite d'un seul type d'atome (ex. oxygène, fer)."
  },
  {
   "t": "Molécule",
   "d": "Groupe d'atomes unis entre eux (ex. H₂O)."
  },
  {
   "t": "Gazeux",
   "d": "État de la matière des gaz et des vapeurs."
  },
  {
   "t": "Fusion",
   "d": "Passage de solide à liquide."
  },
  {
   "t": "Évaporation",
   "d": "Passage lent de liquide à gaz, en surface."
  },
  {
   "t": "Ébullition",
   "d": "Évaporation dans tout le liquide, avec formation de bulles."
  },
  {
   "t": "Condensation",
   "d": "Passage de gaz à liquide."
  },
  {
   "t": "Sublimation",
   "d": "Passage direct de solide à gaz."
  },
  {
   "t": "Givrage",
   "d": "Passage direct de gaz à solide."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Laquelle de ces choses n'est PAS de la matière ?",
    "options": [
     "L'air",
     "Le son",
     "L'eau"
    ],
    "answer": 1,
    "explain": "Le son est une onde d'énergie, il n'a pas de masse propre."
   },
   {
    "type": "mc",
    "q": "Un liquide a…",
    "options": [
     "une forme et un volume propres",
     "un volume propre mais la forme du récipient",
     "ni forme ni volume propres"
    ],
    "answer": 1,
    "explain": "Le volume reste, la forme change."
   },
   {
    "type": "tf",
    "q": "Le sel de cuisine est un solide, même si on peut le verser.",
    "answer": true,
    "explain": "Chaque grain a une forme et un volume propres."
   },
   {
    "type": "text",
    "q": "Comment s'appelle le passage de solide à liquide ?",
    "answer": [
     "fusion",
     "la fusion"
    ],
    "explain": "La fusion."
   },
   {
    "type": "mc",
    "q": "Le givre sur les vitres se forme par…",
    "options": [
     "fusion",
     "givrage",
     "évaporation"
    ],
    "answer": 1,
    "explain": "La vapeur d'eau devient directement de la glace."
   },
   {
    "type": "num",
    "q": "À combien de degrés Celsius l'eau devient-elle de la glace ?",
    "answer": 0,
    "unit": "°C",
    "explain": "A 0 °C."
   },
   {
    "type": "mc",
    "q": "Dans quel état les particules sont-elles le plus éloignées les unes des autres ?",
    "options": [
     "Solide",
     "Liquide",
     "Gaz"
    ],
    "answer": 2,
    "explain": "Dans le gaz, les particules se déplacent librement et sont éloignées."
   },
   {
    "type": "order",
    "q": "Mets dans l'ordre ce qui arrive à un glaçon oublié sur un réchaud allumé.",
    "items": [
     "Glace solide",
     "Fusion",
     "Eau liquide",
     "Ébullition",
     "Vapeur"
    ],
    "explain": "Le solide fond, devient liquide, puis bout et devient vapeur."
   },
   {
    "type": "tf",
    "q": "Pendant un changement d'état, la substance change : l'eau devient autre chose.",
    "answer": false,
    "explain": "L'état change, pas la substance : glace, eau et vapeur sont tous du H₂O."
   },
   {
    "type": "mc",
    "q": "Comment s'appellent les « briques » de la matière ?",
    "options": [
     "Atomes",
     "Cellules",
     "Grains"
    ],
    "answer": 0,
    "explain": "Les atomes, qui s'assemblent en molécules."
   },
   {
    "type": "mc",
    "q": "Pourquoi une bouteille d'eau au congélateur peut-elle éclater ?",
    "options": [
     "Parce que la glace occupe plus de place que l'eau",
     "Parce que le froid casse le plastique",
     "Parce que l'eau s'évapore"
    ],
    "answer": 0,
    "explain": "En se solidifiant, l'eau augmente de volume d'environ 9 %."
   }
  ]
 }
});
