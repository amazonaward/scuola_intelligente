TOPIC('fr', {
 "id": "p2-sci-viventi-non-viventi",
 "title": "Êtres vivants et non vivants",
 "intro": "Un chat 🐱, un arbre 🌳, un caillou 🪨 et un robot 🤖 : lequel d'entre eux est <b>vivant</b> ? Découvrons les « règles de la vie » pour reconnaître les <b>êtres vivants</b>.",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "Les règles de la vie",
   "html": "<p>Un <b>être vivant</b> fait toutes ces choses :</p>\n<ol>\n<li>🐣 Il <b>naît</b> d'un autre être vivant.</li>\n<li>📈 Il <b>grandit</b> et il change.</li>\n<li>🍎 Il <b>se nourrit</b> : il a besoin de nourriture (les plantes fabriquent elles-mêmes leur nourriture !).</li>\n<li>🌬️ Il <b>respire</b>.</li>\n<li>👶 Il <b>se reproduit</b> : il fait naître d'autres êtres comme lui.</li>\n<li>🍂 Il <b>meurt</b>.</li>\n</ol>\n<p>Un <b>non-vivant</b> ne fait pas ces choses : un caillou ne naît pas d'un autre caillou, il ne mange pas, il ne grandit pas tout seul.</p>"
  },
  {
   "type": "svg",
   "title": "Le cycle de la vie",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<circle cx=\"300\" cy=\"150\" r=\"105\" fill=\"none\" stroke=\"#86efac\" stroke-width=\"14\"/>\n<circle cx=\"300\" cy=\"45\" r=\"34\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<circle cx=\"400\" cy=\"105\" r=\"34\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<circle cx=\"400\" cy=\"200\" r=\"34\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<circle cx=\"300\" cy=\"255\" r=\"34\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"3\"/>\n<circle cx=\"200\" cy=\"200\" r=\"34\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"3\"/>\n<circle cx=\"200\" cy=\"105\" r=\"34\" fill=\"#f3f4f6\" stroke=\"#6b7280\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"56\" font-size=\"30\" text-anchor=\"middle\">🐣</text>\n<text x=\"400\" y=\"116\" font-size=\"30\" text-anchor=\"middle\">📈</text>\n<text x=\"400\" y=\"211\" font-size=\"30\" text-anchor=\"middle\">🍎</text>\n<text x=\"300\" y=\"266\" font-size=\"30\" text-anchor=\"middle\">🌬️</text>\n<text x=\"200\" y=\"211\" font-size=\"30\" text-anchor=\"middle\">👶</text>\n<text x=\"200\" y=\"116\" font-size=\"30\" text-anchor=\"middle\">🍂</text>\n<text x=\"345\" y=\"30\" font-size=\"18\" fill=\"#854d0e\" font-weight=\"bold\">naît</text>\n<text x=\"445\" y=\"100\" font-size=\"18\" fill=\"#166534\" font-weight=\"bold\">grandit</text>\n<text x=\"445\" y=\"210\" font-size=\"18\" fill=\"#991b1b\" font-weight=\"bold\">se nourrit</text>\n<text x=\"345\" y=\"285\" font-size=\"18\" fill=\"#3730a3\" font-weight=\"bold\">respire</text>\n<text x=\"40\" y=\"210\" font-size=\"18\" fill=\"#9d174d\" font-weight=\"bold\">se reproduit</text>\n<text x=\"100\" y=\"100\" font-size=\"18\" fill=\"#374151\" font-weight=\"bold\">meurt</text>\n<text x=\"300\" y=\"158\" font-size=\"20\" text-anchor=\"middle\" fill=\"#14532d\" font-weight=\"bold\">cycle de vie</text>\n</svg>",
   "caption": "Tous les vivants suivent ce cercle : ils naissent, grandissent, se nourrissent, respirent, se reproduisent et meurent."
  },
  {
   "type": "example",
   "title": "Exemple : le haricot dans le pot 🌱",
   "html": "<p>Mets un haricot dans du coton mouillé :</p>\n<ul>\n<li>après quelques jours, une petite racine et une pousse <b>naissent</b> ;</li>\n<li>la petite plante <b>grandit</b> vers la lumière ;</li>\n<li>elle se <b>nourrit</b> avec de l'eau, de la lumière et de l'air ;</li>\n<li>si tu la replantes, elle fait des fleurs et de nouveaux haricots : elle se <b>reproduit</b> ;</li>\n<li>à la fin, elle sèche et <b>meurt</b>.</li>\n</ul>\n<p>Le haricot est un être vivant ! Un petit caillou dans du coton mouillé, lui, reste toujours pareil.</p>"
  },
  {
   "type": "widget",
   "title": "Vivant ou non vivant ?",
   "widget": "classify",
   "options": {
    "groups": [
     "🌱 Vivants",
     "🪨 Non vivants"
    ],
    "items": [
     [
      "🐱 chat",
      0
     ],
     [
      "🪨 caillou",
      1
     ],
     [
      "🌳 arbre",
      0
     ],
     [
      "🤖 robot",
      1
     ],
     [
      "🍄 champignon",
      0
     ],
     [
      "💧 eau",
      1
     ],
     [
      "🐛 chenille",
      0
     ],
     [
      "🧸 nounours",
      1
     ],
     [
      "🌻 tournesol",
      0
     ],
     [
      "☀️ Soleil",
      1
     ]
    ]
   },
   "caption": "Essaie de repasser les règles de la vie pour chaque objet."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les règles de la vie",
   "questions": [
    {
     "type": "tf",
     "q": "Un arbre est un être vivant.",
     "answer": true,
     "explain": "Il naît d'une graine, grandit, se nourrit, respire, se reproduit et meurt."
    },
    {
     "type": "mc",
     "q": "Lequel n'est PAS un être vivant ?",
     "options": [
      "Une fourmi",
      "Un caillou",
      "Une marguerite"
     ],
     "answer": 1,
     "explain": "Le caillou ne naît pas, ne se nourrit pas et ne se reproduit pas."
    },
    {
     "type": "mc",
     "q": "Les plantes se nourrissent-elles ?",
     "options": [
      "Non, jamais",
      "Oui, elles fabriquent leur nourriture avec la lumière, l'eau et l'air",
      "Seulement en hiver"
     ],
     "answer": 1,
     "explain": "Les plantes produisent leur nourriture dans leurs feuilles."
    }
   ]
  },
  {
   "type": "text",
   "title": "Les pièges : ça a l'air vivant… mais ça ne l'est pas !",
   "html": "<ul>\n<li>🔥 Le <b>feu</b> bouge, il « mange » le bois, il grandit… mais il n'est pas fait de <b>cellules</b>, il n'a pas de corps qui grandit de l'intérieur et il s'éteint quand il n'y a plus de bois : il <b>n'est pas vivant</b>.</li>\n<li>🤖 Le <b>robot</b> bouge et parle, mais il est construit par l'homme, il ne grandit pas et ne fait pas de bébés robots : il <b>n'est pas vivant</b>.</li>\n<li>☁️ Le <b>nuage</b> bouge et devient plus gros, mais il est fait de gouttelettes d'eau : il <b>n'est pas vivant</b>.</li>\n<li>🌳 L'<b>arbre</b> ne se déplace pas d'un endroit à l'autre, mais il est <b>vivant</b> !</li>\n</ul>\n<p>Bouger <b>ne suffit pas</b> pour être vivant : il faut respecter <b>toutes</b> les règles.</p>"
  },
  {
   "type": "text",
   "title": "De quoi sont faits les vivants ?",
   "html": "<p>Tous les êtres vivants sont faits de <b>cellules</b> : de minuscules « briques » qu'on ne voit qu'avec un <b>microscope</b> 🔬.</p>\n<p>Certains vivants sont faits d'<b>une seule cellule</b>, comme les bactéries. Notre corps, lui, est fait de <b>milliers de milliards</b> de cellules !</p>\n<p>Les vivants se divisent en grands groupes : les <b>plantes</b> 🌿, les <b>animaux</b> 🐾, les <b>champignons</b> 🍄 et plein d'êtres minuscules (les <b>micro-organismes</b>).</p>"
  },
  {
   "type": "3d",
   "title": "Une cellule en 3D",
   "scene": "layers",
   "options": {
    "layers": [
     {
      "r": 1,
      "color": "#86efac",
      "label": "Membrane (la « peau » de la cellule)"
     },
     {
      "r": 0.95,
      "color": "#fef08a",
      "label": "Cytoplasme (une sorte de gelée)"
     },
     {
      "r": 0.4,
      "color": "#a78bfa",
      "label": "Noyau (le « cerveau » de la cellule)"
     }
    ]
   },
   "caption": "Fais tourner la cellule : le quartier coupé montre la peau extérieure, la gelée et le noyau au centre. Chaque être vivant est fait de cellules comme celle-ci !"
  },
  {
   "type": "example",
   "title": "Exemple : le chiot et le chien-jouet 🐶",
   "html": "<p>Comparons un vrai chiot et un petit chien à piles :</p>\n<table>\n<tr><th></th><th>🐶 Chiot</th><th>🧸 Chien à piles</th></tr>\n<tr><td>Il naît</td><td>✅ de sa maman chienne</td><td>❌ dans une usine</td></tr>\n<tr><td>Il grandit</td><td>✅</td><td>❌ il reste toujours pareil</td></tr>\n<tr><td>Il mange</td><td>✅ des croquettes</td><td>❌ il utilise des piles</td></tr>\n<tr><td>Il respire</td><td>✅</td><td>❌</td></tr>\n<tr><td>Il fait des petits</td><td>✅</td><td>❌</td></tr>\n</table>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… ? Un arbre de presque 5 000 ans",
   "html": "<p>En Californie vit un pin appelé <b>Mathusalem</b> 🌲 : il a environ <b>4 800 ans</b> ! C'était déjà un petit arbre quand les Égyptiens construisaient les pyramides.</p>\n<p>Au contraire, certaines petites mouches, les <b>éphémères</b>, ne vivent qu'<b>un jour</b> une fois adultes, ou même moins.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… ? Le tardigrade, champion de résistance",
   "html": "<p>Le <b>tardigrade</b> est un tout petit animal de moins d'un millimètre, avec 8 petites pattes : on l'appelle « ourson d'eau » 🐻💧.</p>\n<p>S'il se dessèche, il se referme comme une petite boule et peut rester ainsi pendant des années. Il résiste au gel, à la chaleur très forte et même au voyage dans l'<b>espace</b> ! Quand l'eau revient… il se réveille.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre qui est vivant",
   "intro": "Si les règles te semblent difficiles, essaie ces autres chemins.",
   "tabs": [
    {
     "label": "🕵️ Les 6 questions du détective",
     "html": "<p>Pour chaque objet, pose 6 questions. Si la réponse est « oui » à <b>toutes</b>, il est vivant !</p>\n<ol>\n<li>Est-il né d'un autre comme lui ?</li>\n<li>Grandit-il ?</li>\n<li>A-t-il besoin de nourriture ou de lumière pour vivre ?</li>\n<li>Respire-t-il ?</li>\n<li>Peut-il avoir des « petits » ?</li>\n<li>Un jour, mourra-t-il ?</li>\n</ol>\n<p>Essaie avec ton chat, puis avec ton vélo !</p>"
    },
    {
     "label": "🔬 Au microscope",
     "html": "<p>Si tu regardes au microscope une fine tranche de feuille ou de peau d'oignon, tu vois plein de <b>petites cases</b> collées, comme les carreaux d'un carrelage. Si tu regardes un grain de sel, tu vois un cristal, sans cellules.</p>\n<p>Les scientifiques disent : <b>là où il y a des cellules, il y a de la vie</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#f8fafc\"/>\n<circle cx=\"160\" cy=\"120\" r=\"95\" fill=\"#dcfce7\" stroke=\"#334155\" stroke-width=\"6\"/>\n<g fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\">\n<rect x=\"90\" y=\"70\" width=\"45\" height=\"30\"/><rect x=\"135\" y=\"70\" width=\"45\" height=\"30\"/><rect x=\"180\" y=\"70\" width=\"40\" height=\"30\"/>\n<rect x=\"80\" y=\"100\" width=\"50\" height=\"35\"/><rect x=\"130\" y=\"100\" width=\"45\" height=\"35\"/><rect x=\"175\" y=\"100\" width=\"55\" height=\"35\"/>\n<rect x=\"95\" y=\"135\" width=\"40\" height=\"35\"/><rect x=\"135\" y=\"135\" width=\"50\" height=\"35\"/><rect x=\"185\" y=\"135\" width=\"40\" height=\"35\"/>\n</g>\n<g fill=\"#7c3aed\"><circle cx=\"110\" cy=\"85\" r=\"5\"/><circle cx=\"155\" cy=\"82\" r=\"5\"/><circle cx=\"200\" cy=\"88\" r=\"5\"/><circle cx=\"105\" cy=\"118\" r=\"5\"/><circle cx=\"150\" cy=\"115\" r=\"5\"/><circle cx=\"205\" cy=\"120\" r=\"5\"/><circle cx=\"115\" cy=\"150\" r=\"5\"/><circle cx=\"160\" cy=\"155\" r=\"5\"/><circle cx=\"205\" cy=\"150\" r=\"5\"/></g>\n<circle cx=\"440\" cy=\"120\" r=\"95\" fill=\"#f1f5f9\" stroke=\"#334155\" stroke-width=\"6\"/>\n<polygon points=\"400,80 480,80 480,160 400,160\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"3\"/>\n<polygon points=\"400,80 425,60 505,60 480,80\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"3\"/>\n<polygon points=\"480,80 505,60 505,140 480,160\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"3\"/>\n<text x=\"160\" y=\"232\" font-size=\"18\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">feuille : cellules = vivant</text>\n<text x=\"440\" y=\"232\" font-size=\"18\" text-anchor=\"middle\" fill=\"#334155\" font-weight=\"bold\">sel : cristal = non vivant</text>\n</svg>"
    },
    {
     "label": "🧬 Une molécule de la vie",
     "html": "<p>Chaque être vivant est fait de substances spéciales qui contiennent du <b>carbone</b>. Voici une molécule très simple, le méthane : un atome de carbone (noir) entouré de 4 atomes d'hydrogène (blancs). Les molécules des vivants sont comme celle-ci, mais très longues : parfois avec des millions d'atomes ! Fais-la tourner avec ton doigt.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#1f2937",
        "label": "C (carbone)"
       },
       {
        "x": 0.63,
        "y": 0.63,
        "z": 0.63,
        "r": 0.3,
        "color": "#f1f5f9",
        "label": "H"
       },
       {
        "x": -0.63,
        "y": -0.63,
        "z": 0.63,
        "r": 0.3,
        "color": "#f1f5f9",
        "label": "H"
       },
       {
        "x": -0.63,
        "y": 0.63,
        "z": -0.63,
        "r": 0.3,
        "color": "#f1f5f9",
        "label": "H"
       },
       {
        "x": 0.63,
        "y": -0.63,
        "z": -0.63,
        "r": 0.3,
        "color": "#f1f5f9",
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
     "label": "🃏 Cartes à retourner",
     "html": "<p>Retourne les cartes et révise avec les mots.</p>",
     "widget": "flashcards",
     "options": {
      "cards": [
       {
        "front": "🐣 Naître",
        "back": "Venir au monde à partir d'un autre être vivant"
       },
       {
        "front": "📈 Grandir",
        "back": "Devenir plus grand et changer"
       },
       {
        "front": "🍎 Se nourrir",
        "back": "Prendre la nourriture qui donne de l'énergie"
       },
       {
        "front": "🌬️ Respirer",
        "back": "Échanger des gaz (de l'air) avec le milieu"
       },
       {
        "front": "👶 Se reproduire",
        "back": "Faire naître d'autres êtres semblables à soi"
       },
       {
        "front": "🍂 Mourir",
        "back": "Cesser de vivre : la fin du cycle de vie"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte des vivants : touche les nœuds et découvre le pourquoi",
   "nodes": [
    {
     "id": "vita",
     "label": "Être vivant",
     "x": 50,
     "y": 8,
     "color": "#16a34a",
     "html": "Un être qui naît, grandit, se nourrit, respire, se reproduit et meurt.",
     "why": "Ce n'est pas facile de dire ce qu'est la vie ! Les scientifiques ont trouvé ces caractéristiques en observant énormément d'êtres différents : tous les vivants les ont, aucun objet ne les a toutes à la fois."
    },
    {
     "id": "cellule",
     "label": "Cellules",
     "x": 20,
     "y": 30,
     "color": "#a855f7",
     "html": "Les minuscules briques dont sont faits tous les vivants.",
     "why": "En <b>1665</b>, l'Anglais <b>Robert Hooke</b> a regardé au microscope une fine tranche de liège et a vu plein de « petites chambres » : il les a appelées <i>cellules</i> (petites cellules, comme celles des moines). En 1839, les savants allemands Schleiden et Schwann ont compris que toutes les plantes et tous les animaux sont faits de cellules."
    },
    {
     "id": "nascere",
     "label": "Naît d'un vivant",
     "x": 80,
     "y": 30,
     "color": "#eab308",
     "html": "Chaque vivant naît d'un autre vivant.",
     "why": "Autrefois, on croyait que les petits vers naissaient tout seuls de la viande pourrie. En <b>1668</b>, l'Italien <b>Francesco Redi</b> a couvert des pots de viande avec une gaze : les mouches n'ont pas pu pondre leurs œufs et les vers ne sont pas nés. Il a ainsi démontré que la vie ne naît que de la vie."
    },
    {
     "id": "nutrirsi",
     "label": "Se nourrit et respire",
     "x": 20,
     "y": 60,
     "color": "#ef4444",
     "html": "Il prend de l'énergie dans la nourriture et échange des gaz avec l'air ou avec l'eau.",
     "why": "Pour grandir et bouger, il faut de l'énergie. Les animaux la prennent en mangeant, les plantes la captent dans la lumière du Soleil. Respirer sert à « brûler » la nourriture dans les cellules pour libérer l'énergie."
    },
    {
     "id": "crescere",
     "label": "Grandit et se reproduit",
     "x": 80,
     "y": 60,
     "color": "#ec4899",
     "html": "Il devient plus grand et fait naître d'autres êtres semblables.",
     "why": "Les cellules se divisent en deux, puis encore en deux : c'est ainsi que le corps grandit. Se reproduire permet à l'espèce de continuer même quand les individus meurent."
    },
    {
     "id": "muore",
     "label": "Meurt",
     "x": 50,
     "y": 78,
     "color": "#6b7280",
     "html": "Chaque vivant finit par mourir.",
     "why": "Avec le temps, les cellules s'usent. Ce qui reste des plantes et des animaux morts est transformé par les champignons et les bactéries et retourne dans le sol comme nourriture pour de nouveaux vivants : c'est un grand cercle."
    },
    {
     "id": "nonvivente",
     "label": "Non-vivant",
     "x": 50,
     "y": 38,
     "color": "#64748b",
     "html": "Cailloux, eau, air, objets fabriqués : ils ne naissent pas, ne grandissent pas tout seuls, ne se reproduisent pas.",
     "why": "Certains non-vivants sont naturels (caillou, eau, Soleil), d'autres sont fabriqués par l'homme (robot, chaise). Ils sont très importants pour les vivants : sans eau, sans air et sans lumière, il n'y aurait pas de vie !"
    },
    {
     "id": "gruppi",
     "label": "Plantes, animaux, champignons…",
     "x": 50,
     "y": 95,
     "color": "#0ea5e9",
     "html": "Les grands groupes de vivants.",
     "why": "En <b>1735</b>, le Suédois <b>Carl von Linné</b> a inventé une façon de donner à chaque vivant un nom et une place dans un grand « arbre » de groupes. On l'utilise encore aujourd'hui !"
    }
   ],
   "edges": [
    [
     "vita",
     "cellule",
     "est fait de"
    ],
    [
     "vita",
     "nascere",
     "règle 1"
    ],
    [
     "vita",
     "nutrirsi",
     "règle 2"
    ],
    [
     "vita",
     "crescere",
     "règle 3"
    ],
    [
     "nutrirsi",
     "muore",
     "sans nourriture"
    ],
    [
     "crescere",
     "muore",
     "à la fin"
    ],
    [
     "vita",
     "nonvivente",
     "est différent du"
    ],
    [
     "muore",
     "gruppi",
     "nourrit d'autres vivants :"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : pièges et cellules",
   "questions": [
    {
     "type": "tf",
     "q": "Le feu est un être vivant parce qu'il bouge et qu'il grandit.",
     "answer": false,
     "explain": "Le feu n'est pas fait de cellules : c'est juste du bois qui brûle. Pour être vivant, il faut respecter toutes les règles."
    },
    {
     "type": "mc",
     "q": "De quoi sont faits tous les êtres vivants ?",
     "options": [
      "De cellules",
      "De plastique",
      "De petits cailloux"
     ],
     "answer": 0,
     "explain": "Tous les vivants sont faits de cellules."
    },
    {
     "type": "tf",
     "q": "Un arbre ne se déplace pas, mais il est vivant.",
     "answer": true,
     "explain": "Pas besoin de bouger pour être vivant : l'arbre respecte toutes les règles de la vie."
    }
   ]
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Un <b>être vivant</b> naît, grandit, se nourrit, respire, se reproduit et meurt.</li>\n<li>Les <b>non-vivants</b> ne font pas ces choses.</li>\n<li>Bouger ne suffit pas pour être vivant !</li>\n<li>Tous les vivants sont faits de <b>cellules</b>.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Être vivant",
   "d": "Ce qui naît, grandit, se nourrit, respire, se reproduit et meurt."
  },
  {
   "t": "Non-vivant",
   "d": "Ce qui n'a pas les caractéristiques de la vie : cailloux, eau, objets."
  },
  {
   "t": "Cycle de vie",
   "d": "Les étapes de la vie d'un être vivant, de la naissance à la mort."
  },
  {
   "t": "Se reproduire",
   "d": "Faire naître de nouveaux êtres de la même espèce."
  },
  {
   "t": "Cellule",
   "d": "La toute petite « brique » dont sont faits tous les vivants."
  },
  {
   "t": "Microscope",
   "d": "Instrument qui grossit les choses toutes petites."
  },
  {
   "t": "Micro-organisme",
   "d": "Être vivant si petit qu'on ne le voit qu'au microscope."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Lequel est un être vivant ?",
    "options": [
     "Un ballon",
     "Un champignon",
     "Un nuage"
    ],
    "answer": 1,
    "explain": "Le champignon naît, grandit, se nourrit et se reproduit."
   },
   {
    "type": "mc",
    "q": "Lequel est un non-vivant ?",
    "options": [
     "Un poisson",
     "Une rose",
     "Une chaise"
    ],
    "answer": 2,
    "explain": "La chaise est un objet fabriqué par l'homme."
   },
   {
    "type": "tf",
    "q": "Les plantes respirent.",
    "answer": true,
    "explain": "Les plantes aussi respirent, jour et nuit."
   },
   {
    "type": "tf",
    "q": "Un robot qui marche est un être vivant.",
    "answer": false,
    "explain": "Le robot ne naît pas, ne grandit pas et ne se reproduit pas."
   },
   {
    "type": "order",
    "q": "Remets dans l'ordre le cycle de vie de la poule.",
    "items": [
     "L'œuf éclot : le poussin naît",
     "Le poussin grandit",
     "Il devient une poule et pond des œufs",
     "Elle vieillit et meurt"
    ],
    "explain": "Naître, grandir, se reproduire, mourir."
   },
   {
    "type": "text",
    "q": "Comment s'appellent les toutes petites briques dont sont faits les vivants ?",
    "answer": [
     "cellules",
     "les cellules",
     "cellule"
    ],
    "explain": "Les cellules."
   },
   {
    "type": "mc",
    "q": "Pourquoi le feu n'est-il PAS vivant ?",
    "options": [
     "Parce qu'il est chaud",
     "Parce qu'il n'est pas fait de cellules et ne se reproduit pas",
     "Parce qu'il est orange"
    ],
    "answer": 1,
    "explain": "Le feu n'a pas de cellules : c'est une réaction du bois qui brûle, pas un être qui naît d'un parent."
   },
   {
    "type": "mc",
    "q": "Qu'est-ce qu'un caillou NE fait PAS ?",
    "options": [
     "Il ne se nourrit pas",
     "Il reste immobile",
     "Il peut être gros"
    ],
    "answer": 0,
    "explain": "Le caillou ne se nourrit pas : c'est pour ça qu'il n'est pas vivant."
   },
   {
    "type": "tf",
    "q": "Chaque être vivant naît d'un autre être vivant.",
    "answer": true,
    "explain": "C'est ce qu'a démontré Francesco Redi en 1668."
   },
   {
    "type": "mc",
    "q": "Avec quel instrument voit-on les cellules ?",
    "options": [
     "Télescope",
     "Microscope",
     "Thermomètre"
    ],
    "answer": 1,
    "explain": "Le microscope grossit les choses toutes petites."
   },
   {
    "type": "mc",
    "q": "Que fait une plante pour se nourrir ?",
    "options": [
     "Elle mange des insectes tous les jours",
     "Elle fabrique sa nourriture avec la lumière, l'eau et l'air",
     "Elle ne se nourrit jamais"
    ],
    "answer": 1,
    "explain": "Les plantes fabriquent leur nourriture dans leurs feuilles."
   }
  ]
 }
});
