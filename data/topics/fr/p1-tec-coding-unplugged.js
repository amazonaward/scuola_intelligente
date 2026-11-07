TOPIC('fr', {
 "id": "p1-tec-coding-unplugged",
 "title": "Le codage sans ordinateur",
 "intro": "Les ordinateurs et les robots sont très forts… mais ils font <b>seulement ce qu'on leur dit</b> ! 🤖 Pour les faire fonctionner, il faut donner des <b>consignes claires</b> et <b>dans le bon ordre</b>. C'est ce qu'on appelle le <b>codage</b> (coding). Et le plus chouette, c'est qu'on peut l'apprendre <b>sans ordinateur</b>, avec son corps, des flèches et un peu d'imagination ! ➡️⬆️",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce qu'une instruction ?",
   "html": "<p>Une <b>instruction</b> est un ordre précis qui dit <b>quoi faire</b> : « Fais un pas en avant », « Tourne à droite », « Tape dans tes mains ».</p>\n<p>Beaucoup d'instructions mises à la suite forment une <b>séquence</b>. Si la séquence sert à résoudre un problème, on l'appelle un <b>algorithme</b>.</p>\n<p>👉 Toi aussi, tu utilises des algorithmes tous les jours sans le savoir ! Pour te brosser les dents :</p>\n<ol>\n<li>Je prends ma brosse à dents 🪥</li>\n<li>Je mets le dentifrice</li>\n<li>Je brosse mes dents</li>\n<li>Je me rince la bouche 💧</li>\n<li>Je lave et je range ma brosse à dents</li>\n</ol>\n<p>Si tu mets le dentifrice <b>après</b> t'être brossé les dents… ça ne marche pas ! L'<b>ordre</b> est très important.</p>"
  },
  {
   "type": "svg",
   "title": "Le robot sur le damier",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"320\" fill=\"#f1f5f9\"/>\n<g stroke=\"#334155\" stroke-width=\"2\">\n<rect x=\"30\" y=\"30\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"95\" y=\"30\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"160\" y=\"30\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"225\" y=\"30\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/>\n<rect x=\"30\" y=\"95\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"95\" y=\"95\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"160\" y=\"95\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"225\" y=\"95\" width=\"65\" height=\"65\" fill=\"#ffffff\"/>\n<rect x=\"30\" y=\"160\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"95\" y=\"160\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"160\" y=\"160\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"225\" y=\"160\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/>\n<rect x=\"30\" y=\"225\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"95\" y=\"225\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"160\" y=\"225\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"225\" y=\"225\" width=\"65\" height=\"65\" fill=\"#ffffff\"/>\n</g>\n<text x=\"62\" y=\"272\" font-size=\"40\" text-anchor=\"middle\">🤖</text>\n<text x=\"257\" y=\"77\" font-size=\"40\" text-anchor=\"middle\">⭐</text>\n<text x=\"192\" y=\"207\" font-size=\"38\" text-anchor=\"middle\">🪨</text>\n<path d=\"M62 245 V60 M62 60 H240\" stroke=\"#ef4444\" stroke-width=\"5\" fill=\"none\" stroke-dasharray=\"10 6\"/>\n<text x=\"440\" y=\"60\" font-size=\"22\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">Programme :</text>\n<text x=\"440\" y=\"100\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\">⬆️ ⬆️ ⬆️</text>\n<text x=\"440\" y=\"140\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\">➡️ ➡️ ➡️</text>\n<text x=\"440\" y=\"190\" font-size=\"18\" text-anchor=\"middle\" fill=\"#166534\">Le robot arrive à l'étoile !</text>\n<text x=\"440\" y=\"225\" font-size=\"18\" text-anchor=\"middle\" fill=\"#334155\">et ne se cogne pas contre le caillou 🪨</text>\n<text x=\"440\" y=\"275\" font-size=\"16\" text-anchor=\"middle\" fill=\"#64748b\">1 flèche = 1 case</text>\n</svg>",
   "caption": "Le robot part en bas à gauche. Avec 3 pas vers le haut et 3 vers la droite, il atteint l'étoile ⭐ en évitant le caillou."
  },
  {
   "type": "remember",
   "title": "Les règles du bon programmeur",
   "html": "<p>1️⃣ Les instructions doivent être <b>claires</b> : « va par là » ❌ — « fais 2 pas en avant » ✅</p>\n<p>2️⃣ Elles doivent être <b>dans l'ordre</b> : d'abord, puis, après, enfin.</p>\n<p>3️⃣ Le robot <b>ne réfléchit pas</b> : il fait exactement ce qui est écrit, même si c'est faux !</p>\n<p>4️⃣ Si quelque chose ne va pas, il y a un <b>bug</b> (une erreur) : on le cherche et on le corrige. Se tromper fait partie du jeu ! 🐞</p>"
  },
  {
   "type": "widget",
   "title": "Jeu : les flèches du robot",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "⬆️",
      "un pas en avant (vers le haut)"
     ],
     [
      "⬇️",
      "un pas en arrière (vers le bas)"
     ],
     [
      "➡️",
      "un pas à droite"
     ],
     [
      "⬅️",
      "un pas à gauche"
     ],
     [
      "🔁",
      "répète"
     ],
     [
      "🛑",
      "arrête-toi"
     ]
    ]
   },
   "caption": "Chaque symbole est une commande. Associe-le à sa signification."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : des instructions dans l'ordre",
   "questions": [
    {
     "type": "order",
     "q": "Remets dans l'ordre l'algorithme pour se laver les mains :",
     "items": [
      "J'ouvre le robinet 🚰",
      "Je mets du savon 🧼",
      "Je frotte bien mes mains",
      "Je rince",
      "Je m'essuie 🧻"
     ],
     "explain": "D'abord on mouille ses mains, puis savon, frotter, rincer et essuyer."
    },
    {
     "type": "tf",
     "q": "Un robot comprend la consigne « va un peu par là ».",
     "answer": false,
     "explain": "Le robot a besoin d'instructions précises : combien de pas et dans quelle direction."
    },
    {
     "type": "mc",
     "q": "Une erreur dans un programme s'appelle…",
     "options": [
      "bug",
      "byte",
      "bus"
     ],
     "answer": 0,
     "explain": "Un bug, qui en anglais veut dire « insecte »."
    }
   ]
  },
  {
   "type": "example",
   "title": "Exemple : le jeu du robot humain 🧍➡️🤖",
   "html": "<p>Au gymnase ou dans la cour, dessinez par terre une grille de carrés à la craie (ou utilisez le carrelage).</p>\n<ol>\n<li>Un enfant fait le <b>robot</b> 🤖 et se place sur la case de départ.</li>\n<li>Un camarade fait le <b>programmeur</b> 🧑‍💻 et écrit sur une feuille les flèches pour atteindre le trésor 💎.</li>\n<li>Le programmeur lit les flèches une par une et le robot les exécute.</li>\n<li>Le robot arrive-t-il au trésor ? 🎉 Sinon, cherchez le <b>bug</b> ensemble et corrigez !</li>\n</ol>\n<p>Puis échangez les rôles.</p>"
  },
  {
   "type": "example",
   "title": "Exemple : le sandwich de papa-robot 🥪",
   "html": "<p>Un jeu célèbre dans les écoles du monde entier : demande à un adulte de faire le <b>robot</b> qui prépare un sandwich, en suivant <b>exactement</b> tes instructions.</p>\n<p>🧒 « Mets la confiture sur le pain ! »<br>🤖 (papa pose le pot fermé sur le pain 😂)</p>\n<p>Le robot ne sait pas qu'il doit <b>ouvrir</b> le pot et utiliser le <b>couteau</b> ! Tu dois tout lui dire :</p>\n<p>« Ouvre le pot. Prends le couteau. Plonge le couteau dans la confiture. Étale la confiture sur la tranche de pain. » ✅</p>\n<p>Voilà pourquoi les programmeurs doivent être <b>très précis</b>.</p>"
  },
  {
   "type": "text",
   "title": "Répéter : la boucle 🔁",
   "html": "<p>Si le robot doit faire 5 pas en avant, on peut écrire : ⬆️ ⬆️ ⬆️ ⬆️ ⬆️</p>\n<p>Mais c'est plus rapide de dire : <b>🔁 répète 5 fois : ⬆️</b></p>\n<p>Cela s'appelle une <b>boucle</b> (en anglais <i>loop</i>). Les chansons aussi ont des boucles : le refrain se répète !</p>\n<p>💃 Essaie cette danse-programme : <b>répète 3 fois</b> [tape dans tes mains 👏, saute 🦘, tourne sur toi-même 🔄].</p>"
  },
  {
   "type": "widget",
   "title": "Jeu : instruction claire ou confuse ?",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ Claire (le robot comprend)",
     "❌ Confuse (le robot ne comprend pas)"
    ],
    "items": [
     [
      "fais 3 pas en avant",
      0
     ],
     [
      "tourne à droite",
      0
     ],
     [
      "répète 2 fois : saute",
      0
     ],
     [
      "prends la balle rouge",
      0
     ],
     [
      "va un peu par là",
      1
     ],
     [
      "fais quelque chose de beau",
      1
     ],
     [
      "marche tant que tu en as envie",
      1
     ],
     [
      "prends ce truc",
      1
     ]
    ]
   },
   "caption": "Un robot a besoin d'instructions précises. Lesquelles comprend-il et lesquelles non ?"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le premier « bug » était un vrai papillon de nuit ! 🦋",
   "html": "<p>En <b>1947</b>, aux États-Unis, un énorme ordinateur appelé <b>Harvard Mark II</b> s'est bloqué. Les scientifiques de l'équipe de <b>Grace Hopper</b> ont cherché le problème et ont trouvé… un <b>papillon de nuit</b> coincé entre les circuits ! Ils l'ont collé dans leur cahier avec du scotch et ont écrit : « premier cas de <b>bug</b> (insecte) trouvé ». Depuis, les erreurs dans les programmes s'appellent des <b>bugs</b> 🐞, et les corriger se dit <b>déboguer</b> (debug).</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? La première programmeuse était une femme, il y a 180 ans ! 👩‍💻",
   "html": "<p>En <b>1843</b>, en Angleterre, <b>Ada Lovelace</b> a écrit les instructions pour une machine à calculer inventée par son ami Charles Babbage, la « machine analytique ». La machine n'a jamais été construite, mais les instructions d'Ada sont considérées comme le <b>premier programme</b> de l'histoire ! Ada imaginait déjà qu'un jour les machines pourraient même composer de la musique. 🎶</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons d'apprendre le codage",
   "intro": "<p>On peut apprendre le codage de beaucoup de façons différentes. Essaie celle que tu préfères !</p>",
   "tabs": [
    {
     "label": "🇮🇹 CodyRoby",
     "html": "<p><b>CodyRoby</b> est un jeu de cartes inventé en Italie, à l'université d'Urbino, par le professeur <b>Alessandro Bogliolo</b>, pour la « Semaine du code » (CodeWeek).</p>\n<p>Chaque carte est une commande : 🟨 <b>avance</b>, 🟥 <b>tourne à droite</b>, 🟦 <b>tourne à gauche</b>. Sur un damier, les joueurs alignent les cartes pour guider Roby le robot jusqu'à l'arrivée !</p>"
    },
    {
     "label": "🐝 Le robot abeille",
     "html": "<p>Dans énormément d'écoles du monde (surtout en Angleterre, où il est né), on utilise <b>Bee-Bot</b>, un petit robot en forme d'<b>abeille</b> 🐝.</p>\n<p>Sur son dos, il a des touches avec des flèches : appuie sur ⬆️ ⬆️ ➡️ ⬆️ puis sur <b>GO</b>, et l'abeille se déplace sur le tapis en suivant ton programme. Chaque pas mesure 15 cm !</p>"
    },
    {
     "label": "🍳 La recette",
     "html": "<p>Une <b>recette</b>, c'est justement un algorithme ! Elle a des <b>ingrédients</b> (ce qu'il te faut) et des <b>étapes</b> dans l'ordre (ce qu'il faut faire).</p>\n<p>🥤 <b>Algorithme du milk-shake à la banane :</b><br>1. Épluche la banane 🍌<br>2. Coupe-la en morceaux (avec un adulte !)<br>3. Mets-la dans le mixeur avec le lait 🥛<br>4. Mixe pendant 30 secondes<br>5. Verse dans le verre et bois ! 😋</p>\n<p>Si tu fais l'étape 4 avant l'étape 3… tu mixes du vide !</p>"
    },
    {
     "label": "🎨 Pixel art",
     "html": "<p>Dessiner aussi, ça peut être du codage ! Sur le cahier à carreaux, suis le code ligne par ligne : <b>⬜ = laisse blanc</b>, <b>🟥 = colorie</b>.</p>\n<p>Ligne 1 : ⬜🟥⬜🟥⬜<br>Ligne 2 : 🟥🟥🟥🟥🟥<br>Ligne 3 : ⬜🟥🟥🟥⬜<br>Ligne 4 : ⬜⬜🟥⬜⬜</p>\n<p>Qu'est-ce que ça donne ? Un <b>cœur</b> ! ❤️ Les images sur l'écran de l'ordinateur sont faites exactement comme ça, avec plein de petits carrés appelés <b>pixels</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"240\" fill=\"#ffffff\"/>\n<g stroke=\"#94a3b8\" stroke-width=\"2\">\n<rect x=\"200\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"320\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n<rect x=\"200\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"240\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/>\n<rect x=\"200\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n<rect x=\"200\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"280\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"360\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n</g>\n<text x=\"300\" y=\"220\" font-size=\"20\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">4 lignes de code = un cœur en pixels</text>\n</svg>"
    },
    {
     "label": "🧊 Le robot en 3D",
     "html": "<p>Imagine que chaque petit cube est une case du damier du robot. Il y a 4 rangées de 4 cases : <b>16 cases</b>. Fais tourner le damier et essaie d'inventer un parcours depuis le coin le plus proche de toi jusqu'au coin opposé : combien de flèches faut-il ?</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 4,
      "b": 4
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte du codage",
   "nodes": [
    {
     "id": "coding",
     "label": "Codage",
     "x": 50,
     "y": 8,
     "color": "#8b5cf6",
     "html": "<p>Donner des instructions à une machine dans un langage qu'elle comprend.</p>",
     "why": "<p>Les ordinateurs sont faits de circuits qui savent seulement exécuter des commandes très simples. Le codage, c'est la façon dont les gens leur disent quoi faire.</p>"
    },
    {
     "id": "istr",
     "label": "Instruction",
     "x": 18,
     "y": 30,
     "color": "#22c55e",
     "html": "<p>Une commande précise : « un pas en avant ».</p>",
     "why": "<p>Les machines ne savent pas deviner : c'est pour ça que chaque instruction doit avoir une seule signification possible.</p>"
    },
    {
     "id": "seq",
     "label": "Séquence",
     "x": 50,
     "y": 34,
     "color": "#3b82f6",
     "html": "<p>Des instructions mises à la suite, dans le bon ordre.</p>",
     "why": "<p>L'ordinateur exécute une instruction à la fois, de la première à la dernière. Si on change l'ordre, le résultat change.</p>"
    },
    {
     "id": "algo",
     "label": "Algorithme",
     "x": 82,
     "y": 30,
     "color": "#f97316",
     "html": "<p>Une séquence qui résout un problème.</p>",
     "why": "<p>Le mot vient du nom d'<b>al-Khwarizmi</b>, un mathématicien persan qui a vécu à Bagdad il y a plus de 1 100 ans et qui a écrit des livres sur la façon de faire les calculs étape par étape.</p>"
    },
    {
     "id": "ciclo",
     "label": "Boucle (loop) 🔁",
     "x": 22,
     "y": 64,
     "color": "#eab308",
     "html": "<p>Répéter plusieurs fois les mêmes instructions.</p>",
     "why": "<p>Ça sert à ne pas écrire mille fois la même chose. Les machines peuvent répéter sans jamais se fatiguer.</p>"
    },
    {
     "id": "bug",
     "label": "Bug 🐞",
     "x": 50,
     "y": 66,
     "color": "#ef4444",
     "html": "<p>Une erreur dans le programme.</p>",
     "why": "<p>Le nom s'est répandu après que, en 1947, l'équipe de Grace Hopper a trouvé un papillon de nuit dans l'ordinateur Harvard Mark II. Corriger une erreur se dit « déboguer ».</p>"
    },
    {
     "id": "robot",
     "label": "Robots et ordinateurs",
     "x": 80,
     "y": 64,
     "color": "#14b8a6",
     "html": "<p>Les machines qui exécutent les programmes.</p>",
     "why": "<p>Le mot « robot » a été inventé en 1920 par l'écrivain tchèque Karel Čapek : il vient de <i>robota</i>, qui veut dire « travail pénible ».</p>"
    },
    {
     "id": "ada",
     "label": "Ada Lovelace",
     "x": 35,
     "y": 92,
     "color": "#ec4899",
     "html": "<p>La première programmeuse (1843).</p>",
     "why": "<p>Elle a écrit un algorithme pour la machine analytique de Charles Babbage, plus de 100 ans avant les ordinateurs électroniques.</p>"
    },
    {
     "id": "unplugged",
     "label": "Débranché (unplugged)",
     "x": 68,
     "y": 92,
     "color": "#64748b",
     "html": "<p>Le codage sans ordinateur : avec le corps, des cartes, des flèches.</p>",
     "why": "<p>« Unplugged » veut dire « débranché de la prise ». La pensée du programmeur (la pensée informatique) s'entraîne aussi sans écrans.</p>"
    }
   ],
   "edges": [
    [
     "coding",
     "istr",
     "utilise"
    ],
    [
     "coding",
     "seq",
     ""
    ],
    [
     "coding",
     "algo",
     ""
    ],
    [
     "istr",
     "seq",
     "à la suite forment"
    ],
    [
     "seq",
     "algo",
     "si elle résout un problème"
    ],
    [
     "seq",
     "ciclo",
     "se répète avec"
    ],
    [
     "seq",
     "bug",
     "peut avoir"
    ],
    [
     "algo",
     "robot",
     "exécuté par"
    ],
    [
     "robot",
     "ada",
     ""
    ],
    [
     "ciclo",
     "unplugged",
     ""
    ],
    [
     "bug",
     "unplugged",
     ""
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : flèches et boucles",
   "questions": [
    {
     "type": "num",
     "q": "🔁 Répète 4 fois : ⬆️. Combien de pas fait le robot ?",
     "answer": 4,
     "explain": "La boucle répète la flèche 4 fois : 4 pas."
    },
    {
     "type": "mc",
     "q": "Sur le dessin, quel programme mène le robot à l'étoile ?",
     "options": [
      "⬆️⬆️⬆️ ➡️➡️➡️",
      "➡️➡️ ⬆️",
      "⬇️⬇️⬇️"
     ],
     "answer": 0,
     "explain": "3 pas vers le haut et 3 vers la droite."
    },
    {
     "type": "tf",
     "q": "Un algorithme est une séquence d'instructions pour résoudre un problème.",
     "answer": true,
     "explain": "Exactement, comme une recette !"
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Codage",
   "d": "Écrire des instructions qu'une machine peut exécuter."
  },
  {
   "t": "Instruction",
   "d": "Une commande claire et précise."
  },
  {
   "t": "Séquence",
   "d": "Des instructions mises à la suite dans le bon ordre."
  },
  {
   "t": "Algorithme",
   "d": "Une séquence d'instructions qui résout un problème."
  },
  {
   "t": "Boucle (loop)",
   "d": "Des instructions répétées plusieurs fois."
  },
  {
   "t": "Bug",
   "d": "Une erreur dans le programme."
  },
  {
   "t": "Déboguer (debug)",
   "d": "Trouver et corriger les erreurs."
  },
  {
   "t": "Débranché (unplugged)",
   "d": "Sans ordinateur, « débranché »."
  },
  {
   "t": "Pixel",
   "d": "Petit carré de couleur qui forme les images sur l'écran."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Un algorithme, c'est…",
    "options": [
     "une sorte de robot",
     "une séquence d'instructions pour résoudre un problème",
     "un jeu de ballon"
    ],
    "answer": 1,
    "explain": "Comme une recette : des étapes dans l'ordre."
   },
   {
    "type": "tf",
    "q": "Le robot fait exactement ce que nous lui disons, même si c'est faux.",
    "answer": true,
    "explain": "Le robot ne réfléchit pas : il exécute."
   },
   {
    "type": "order",
    "q": "Remets dans l'ordre l'algorithme pour planter une graine :",
    "items": [
     "Je mets de la terre dans le pot 🪴",
     "Je fais un petit trou avec le doigt",
     "Je mets la graine dans le petit trou 🌱",
     "Je recouvre de terre",
     "J'arrose 💧"
    ],
    "explain": "Chaque étape prépare la suivante."
   },
   {
    "type": "mc",
    "q": "Quelle instruction est claire pour un robot ?",
    "options": [
     "va par là",
     "fais 2 pas en avant",
     "fais quelque chose"
    ],
    "answer": 1,
    "explain": "Elle dit combien de pas et dans quelle direction."
   },
   {
    "type": "num",
    "q": "Le programme est ➡️➡️➡️⬆️⬆️. Combien de pas fait le robot en tout ?",
    "answer": 5,
    "explain": "3 + 2 = 5 pas."
   },
   {
    "type": "text",
    "q": "Comment s'appelle une erreur dans un programme ?",
    "answer": [
     "bug",
     "un bug",
     "bogue",
     "un bogue"
    ],
    "explain": "Bug = insecte : tu te souviens du papillon de nuit de 1947 ?"
   },
   {
    "type": "mc",
    "q": "🔁 « Répète 3 fois : saute », c'est…",
    "options": [
     "une boucle",
     "un bug",
     "un pixel"
    ],
    "answer": 0,
    "explain": "Répéter des instructions, c'est une boucle (loop)."
   },
   {
    "type": "mc",
    "q": "Qui est considérée comme la première programmeuse de l'histoire ?",
    "options": [
     "Ada Lovelace",
     "Grace Hopper",
     "Marie Curie"
    ],
    "answer": 0,
    "explain": "Ada Lovelace, en 1843."
   },
   {
    "type": "tf",
    "q": "Pour faire du codage, il faut forcément un ordinateur.",
    "answer": false,
    "explain": "On peut aussi le faire débranché (unplugged) : avec le corps, des cartes, des flèches."
   },
   {
    "type": "mc",
    "q": "Le robot est sur une case et doit aller 2 cases à gauche. Le bon programme :",
    "options": [
     "➡️➡️",
     "⬅️⬅️",
     "⬆️⬆️"
    ],
    "answer": 1,
    "explain": "Deux flèches vers la gauche."
   },
   {
    "type": "order",
    "q": "Remets dans l'ordre le travail du programmeur :",
    "items": [
     "j'écris les instructions",
     "le robot les exécute",
     "je vérifie s'il arrive au bon endroit",
     "s'il y a un bug, je le corrige"
    ],
    "explain": "Écrire, essayer, vérifier, corriger : c'est la boucle du programmeur."
   }
  ]
 }
});
