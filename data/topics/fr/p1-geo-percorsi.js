TOPIC('fr', {
 "id": "p1-geo-percorsi",
 "title": "Les parcours",
 "intro": "Chaque matin, tu fais un voyage : de la maison à l'école ! 🏠➡️🏫 Le chemin que tu prends s'appelle un <b>parcours</b>. Aujourd'hui, nous apprenons à le <b>décrire</b> avec des mots, à le <b>dessiner</b> avec des flèches et à le <b>suivre</b> comme un explorateur. 🧭",
 "minutes": 20,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce qu'un parcours ?",
   "html": "<p>Un <b>parcours</b> est le chemin que tu fais pour aller d'un endroit à un autre.</p>\n<ul>\n<li>🟢 Il a un <b>départ</b> : l'endroit d'où tu pars.</li>\n<li>🏁 Il a une <b>arrivée</b> : l'endroit où tu veux aller.</li>\n<li>➡️ Entre les deux, il y a des <b>pas</b> et des <b>changements de direction</b> : tu avances, tu tournes à droite, tu tournes à gauche.</li>\n<li>🌳 Le long du chemin, tu vois des <b>repères</b> : un arbre, un magasin, une fontaine. Ils t'aident à ne pas te perdre !</li>\n</ul>\n<p>Un parcours peut être <b>ouvert</b> (le départ et l'arrivée sont à des endroits différents) ou <b>fermé</b> (tu reviens au point de départ, comme quand tu fais le tour de la cour).</p>"
  },
  {
   "type": "svg",
   "title": "Le parcours de Léo de la maison à l'école",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"320\" fill=\"#dcfce7\"/>\n<rect x=\"60\" y=\"250\" width=\"440\" height=\"30\" fill=\"#d6d3d1\"/>\n<rect x=\"470\" y=\"60\" width=\"30\" height=\"220\" fill=\"#d6d3d1\"/>\n<rect x=\"470\" y=\"60\" width=\"90\" height=\"30\" fill=\"#d6d3d1\"/>\n<path d=\"M90 265 L470 265\" stroke=\"#ef4444\" stroke-width=\"6\" stroke-dasharray=\"14 8\" fill=\"none\"/>\n<path d=\"M485 265 L485 75 L540 75\" stroke=\"#ef4444\" stroke-width=\"6\" stroke-dasharray=\"14 8\" fill=\"none\"/>\n<text x=\"60\" y=\"240\" font-size=\"44\">🏠</text>\n<text x=\"40\" y=\"310\" font-size=\"16\" fill=\"#166534\" font-weight=\"bold\">DÉPART</text>\n<text x=\"535\" y=\"55\" font-size=\"44\">🏫</text>\n<text x=\"520\" y=\"120\" font-size=\"16\" fill=\"#1d4ed8\" font-weight=\"bold\">ARRIVÉE 🏁</text>\n<text x=\"260\" y=\"235\" font-size=\"40\">🌳</text>\n<text x=\"250\" y=\"200\" font-size=\"15\" fill=\"#166534\">grand arbre</text>\n<text x=\"400\" y=\"170\" font-size=\"36\">⛲</text>\n<text x=\"350\" y=\"140\" font-size=\"15\" fill=\"#0369a1\">fontaine</text>\n<text x=\"490\" y=\"290\" font-size=\"15\" fill=\"#b91c1c\" font-weight=\"bold\">tourne à gauche ↰</text>\n<text x=\"160\" y=\"40\" font-size=\"20\" fill=\"#0f172a\" font-weight=\"bold\">Tout droit → puis tourne → puis à droite</text>\n</svg>",
   "caption": "Léo sort de la maison, va tout droit jusqu'au coin en passant devant le grand arbre, tourne à gauche, passe près de la fontaine, puis tourne à droite et arrive à l'école."
  },
  {
   "type": "remember",
   "title": "Pour décrire un parcours, il faut 3 choses",
   "html": "<p>1️⃣ <b>D'où je pars</b> et <b>où j'arrive</b>.</p>\n<p>2️⃣ Les <b>directions</b> : en avant ⬆️, en arrière ⬇️, à droite ➡️, à gauche ⬅️.</p>\n<p>3️⃣ Les <b>repères</b> le long du chemin : « quand tu vois la fontaine, tourne à droite ».</p>\n<p>Et les consignes doivent être données <b>dans l'ordre</b> : d'abord, puis, après, enfin !</p>"
  },
  {
   "type": "widget",
   "title": "Jeu : flèches et mots",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "⬆️",
      "avance"
     ],
     [
      "⬇️",
      "recule"
     ],
     [
      "➡️",
      "tourne à droite"
     ],
     [
      "⬅️",
      "tourne à gauche"
     ],
     [
      "🏁",
      "arrivée"
     ],
     [
      "🟢",
      "départ"
     ]
    ]
   },
   "caption": "Chaque flèche est une consigne. Associe la flèche aux bons mots."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : les parties du parcours",
   "questions": [
    {
     "type": "mc",
     "q": "L'endroit d'où je pars s'appelle…",
     "options": [
      "l'arrivée",
      "le départ",
      "l'obstacle"
     ],
     "answer": 1,
     "explain": "Le départ est le point où commence le parcours."
    },
    {
     "type": "tf",
     "q": "Dans un parcours fermé, je reviens au point de départ.",
     "answer": true,
     "explain": "Comme quand tu fais le tour de la cour et que tu reviens là où tu étais."
    },
    {
     "type": "mc",
     "q": "La fontaine le long du chemin est…",
     "options": [
      "un repère",
      "le départ",
      "une flèche"
     ],
     "answer": 0,
     "explain": "C'est une chose qu'on voit bien et qui nous aide à ne pas nous perdre."
    }
   ]
  },
  {
   "type": "example",
   "title": "Exemple : au gymnase 🤸",
   "html": "<p>Le maître prépare un parcours :</p>\n<ol>\n<li>🟢 Pars de la ligne bleue.</li>\n<li>🐍 Fais le slalom entre les 4 plots.</li>\n<li>⭕ Saute dans les 3 cerceaux.</li>\n<li>🪜 Passe <b>sous</b> le banc.</li>\n<li>🏁 Arrive au tapis rouge.</li>\n</ol>\n<p>Si tu changes l'ordre… ce n'est plus le bon parcours ! C'est pour ça qu'on utilise <b>d'abord, puis, après, enfin</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemple : dessiner sur le quadrillage ✏️",
   "html": "<p>Sur le cahier à carreaux, tu peux dessiner un parcours avec un code de flèches. Un carreau = un pas.</p>\n<p>Pars du point et suis : <b>→ → → ↑ ↑ → →</b></p>\n<p>Tu as fait 3 pas à droite, 2 vers le haut et encore 2 à droite. Quelle forme obtiens-tu ? Un <b>escalier</b> ! 🪜</p>\n<p>Maintenant, invente un code et fais-le suivre à un camarade : arrivera-t-il au même endroit ?</p>"
  },
  {
   "type": "svg",
   "title": "Le parcours sur le quadrillage",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g stroke=\"#bfdbfe\" stroke-width=\"2\">\n<path d=\"M60 20 V280 M100 20 V280 M140 20 V280 M180 20 V280 M220 20 V280 M260 20 V280 M300 20 V280 M340 20 V280 M380 20 V280\"/>\n<path d=\"M60 20 H380 M60 60 H380 M60 100 H380 M60 140 H380 M60 180 H380 M60 220 H380 M60 260 H380\"/>\n</g>\n<path d=\"M100 220 H220 V140 H300\" stroke=\"#ef4444\" stroke-width=\"6\" fill=\"none\"/>\n<circle cx=\"100\" cy=\"220\" r=\"10\" fill=\"#22c55e\"/>\n<text x=\"300\" y=\"132\" font-size=\"28\" text-anchor=\"middle\">🏁</text>\n<text x=\"400\" y=\"80\" font-size=\"22\" fill=\"#0f172a\" font-weight=\"bold\">Code :</text>\n<text x=\"400\" y=\"120\" font-size=\"28\" fill=\"#b91c1c\">→ → →</text>\n<text x=\"400\" y=\"160\" font-size=\"28\" fill=\"#b91c1c\">↑ ↑</text>\n<text x=\"400\" y=\"200\" font-size=\"28\" fill=\"#b91c1c\">→ →</text>\n<text x=\"400\" y=\"250\" font-size=\"18\" fill=\"#166534\">🟢 = départ</text>\n</svg>",
   "caption": "Un carreau = un pas. 3 pas à droite, 2 vers le haut, 2 à droite : voilà le parcours !"
  },
  {
   "type": "3d",
   "title": "Un parcours dans la nature 🏞️",
   "scene": "terrain",
   "options": {
    "features": {
     "plain": {
      "label": "Plaine (départ)",
      "html": "Nous partons de la plaine, où le terrain est plat et où l'on marche facilement. 🟢"
     },
     "river": {
      "label": "Rivière",
      "html": "Pour traverser la rivière, nous devons chercher un <b>pont</b> : c'est un repère important ! 🌉"
     },
     "hill": {
      "label": "Colline",
      "html": "Nous montons sur la colline : la route fait des virages, comme un serpent. 🐍"
     },
     "lake": {
      "label": "Lac",
      "html": "Nous faisons le tour du lac : c'est un très bon repère, on le voit de loin. 🦆"
     },
     "mountain": {
      "label": "Montagne (arrivée)",
      "html": "Nous arrivons à la montagne ! 🏁 D'ici, nous voyons tout le parcours que nous avons fait."
     }
    }
   },
   "caption": "Fais tourner le paysage et touche les parties dans l'ordre du parcours : plaine → rivière → colline → lac → montagne."
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Le Petit Poucet utilisait des cailloux ! 🪨",
   "html": "<p>Dans le conte du <b>Petit Poucet</b>, écrit par Charles Perrault il y a plus de 300 ans (en 1697), le petit garçon laisse tomber des <b>petits cailloux blancs</b> le long du chemin dans la forêt. Au retour, il les suit et retrouve sa maison ! La fois suivante, il utilise des miettes de pain… mais les oiseaux les mangent. 🐦 Morale : les repères doivent être <b>fixes</b> !</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu ? Les abeilles expliquent le chemin en dansant ! 🐝",
   "html": "<p>Quand une abeille trouve des fleurs, elle retourne à la ruche et fait une <b>danse</b> : en remuant son abdomen, elle indique aux autres abeilles <b>la direction</b> et <b>la distance</b> des fleurs. C'est le scientifique <b>Karl von Frisch</b> qui l'a découvert, et il a reçu pour cela le prix Nobel en 1973.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de comprendre les parcours",
   "intro": "<p>Un parcours, on peut le dire, le dessiner, le danser… Choisis la façon que tu préfères !</p>",
   "tabs": [
    {
     "label": "🤖 Fais le robot",
     "html": "<p>Jouez à deux : l'un fait le <b>robot</b> 🤖 et ferme les yeux, l'autre est le <b>programmeur</b> et donne les commandes :</p>\n<p>« 2 pas en avant. Tourne à droite. 3 pas en avant. Stop ! »</p>\n<p>Le robot fait <b>seulement</b> ce que tu lui dis. S'il se cogne contre la chaise… le programmeur doit corriger les consignes !</p>"
    },
    {
     "label": "🇸🇪 Course d'orientation",
     "html": "<p>En <b>Suède</b> et en Norvège, les enfants font de la <b>course d'orientation</b> : ils courent dans la forêt avec une carte et une boussole et doivent trouver des <b>balises</b> blanches et orange cachées. 🟧⬜ Celui qui les trouve toutes, dans le bon ordre et le plus vite possible, a gagné.</p>\n<p>Tu peux le faire toi aussi dans le jardin : cache 5 objets et dessine une carte pour les retrouver !</p>"
    },
    {
     "label": "📱 Comme le GPS",
     "html": "<p>Le GPS de la voiture parle comme quelqu'un qui sait très bien décrire un parcours :</p>\n<p>🗣️ « Dans 100 mètres, tournez à droite. » « Au rond-point, prenez la deuxième sortie. » « Vous êtes arrivé à destination. »</p>\n<p>Essaie de faire le « GPS » pour ta famille sur le chemin de la maison !</p>"
    },
    {
     "label": "🔀 Remets dans l'ordre",
     "html": "<p>Un parcours est une <b>suite</b> : l'ordre compte. Associe chaque mot au bon moment.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "D'abord",
        "je sors de la maison 🏠"
       ],
       [
        "Puis",
        "je traverse sur le passage piéton 🚸"
       ],
       [
        "Après",
        "je passe devant la boulangerie 🥖"
       ],
       [
        "Enfin",
        "j'entre à l'école 🏫"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte du parcours",
   "nodes": [
    {
     "id": "perc",
     "label": "Parcours",
     "x": 50,
     "y": 8,
     "color": "#ef4444",
     "html": "<p>Le chemin d'un endroit à un autre.</p>",
     "why": "<p>Depuis toujours, les êtres humains se déplacent pour chercher de la nourriture, de l'eau et un abri. Se souvenir du chemin était très important pour survivre !</p>"
    },
    {
     "id": "part",
     "label": "Départ",
     "x": 15,
     "y": 32,
     "color": "#22c55e",
     "html": "<p>Le point d'où je commence.</p>",
     "why": "<p>Si tu ne sais pas d'où tu pars, aucune consigne ne fonctionne : même le GPS cherche d'abord <b>où tu es</b>.</p>"
    },
    {
     "id": "arr",
     "label": "Arrivée",
     "x": 85,
     "y": 32,
     "color": "#3b82f6",
     "html": "<p>Le point où je veux aller.</p>",
     "why": "<p>C'est le but du parcours. On l'appelle aussi <b>but</b> ou <b>destination</b>.</p>"
    },
    {
     "id": "dir",
     "label": "Directions",
     "x": 30,
     "y": 60,
     "color": "#f97316",
     "html": "<p>En avant, en arrière, à droite, à gauche.</p>",
     "why": "<p>Ce sont les mots de la position utilisés pour se déplacer. Plus tard, tu apprendras aussi les <b>points cardinaux</b> (nord, sud, est, ouest), qui ne changent pas quand tu te retournes.</p>"
    },
    {
     "id": "rif",
     "label": "Repères",
     "x": 70,
     "y": 60,
     "color": "#a855f7",
     "html": "<p>Des choses bien visibles le long du chemin.</p>",
     "why": "<p>Notre cerveau se souvient mieux des images (un arbre, une fontaine) que des nombres. Les marins d'autrefois aussi s'orientaient grâce aux phares et aux montagnes.</p>"
    },
    {
     "id": "ordine",
     "label": "Ordre (suite)",
     "x": 50,
     "y": 78,
     "color": "#eab308",
     "html": "<p>D'abord, puis, après, enfin.</p>",
     "why": "<p>Si tu changes l'ordre des pas, tu arrives à un autre endroit. C'est la même idée que le <b>codage</b> : des consignes l'une après l'autre.</p>"
    },
    {
     "id": "mappa",
     "label": "Dessin et carte",
     "x": 20,
     "y": 94,
     "color": "#14b8a6",
     "html": "<p>Le parcours dessiné vu d'en haut.</p>",
     "why": "<p>Les plus anciennes cartes ont été gravées sur la pierre et l'argile il y a des milliers d'années : elles servaient à se souvenir du chemin et à le raconter.</p>"
    },
    {
     "id": "codice",
     "label": "Code de flèches",
     "x": 80,
     "y": 94,
     "color": "#ec4899",
     "html": "<p>→ → ↑ : le parcours écrit avec des symboles.</p>",
     "why": "<p>Les flèches sont un langage que tout le monde comprend, dans tous les pays. Les robots de sol (comme Bee-Bot) se programment aussi comme ça.</p>"
    }
   ],
   "edges": [
    [
     "perc",
     "part",
     "commence"
    ],
    [
     "perc",
     "arr",
     "finit"
    ],
    [
     "part",
     "dir",
     ""
    ],
    [
     "arr",
     "rif",
     ""
    ],
    [
     "dir",
     "ordine",
     "dans"
    ],
    [
     "rif",
     "ordine",
     ""
    ],
    [
     "ordine",
     "mappa",
     "se dessine"
    ],
    [
     "ordine",
     "codice",
     "s'écrit"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : suis les flèches",
   "questions": [
    {
     "type": "mc",
     "q": "La flèche ⬅️ veut dire…",
     "options": [
      "tourne à droite",
      "tourne à gauche",
      "avance"
     ],
     "answer": 1,
     "explain": "La flèche pointe vers la gauche."
    },
    {
     "type": "num",
     "q": "Code : → → → ↑ ↑ → →. Combien de pas fais-tu en tout ?",
     "answer": 7,
     "explain": "3 + 2 + 2 = 7 pas."
    },
    {
     "type": "order",
     "q": "Remets dans l'ordre le parcours de Léo :",
     "items": [
      "Il sort de la maison",
      "Il passe devant l'arbre",
      "Il tourne à gauche",
      "Il passe près de la fontaine",
      "Il arrive à l'école"
     ],
     "explain": "C'est l'ordre qu'on voit sur le dessin : départ → arbre → virage → fontaine → arrivée."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Parcours",
   "d": "Le chemin pour aller d'un endroit à un autre."
  },
  {
   "t": "Départ",
   "d": "Le point où commence le parcours."
  },
  {
   "t": "Arrivée",
   "d": "Le point où finit le parcours (le but)."
  },
  {
   "t": "Parcours ouvert",
   "d": "Le départ et l'arrivée sont à des endroits différents."
  },
  {
   "t": "Parcours fermé",
   "d": "On revient au point de départ."
  },
  {
   "t": "Repère",
   "d": "Une chose bien visible qui aide à s'orienter."
  },
  {
   "t": "Direction",
   "d": "Le côté vers lequel on va : en avant, en arrière, à droite, à gauche."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Un parcours, c'est…",
    "options": [
     "le chemin d'un endroit à un autre",
     "une sorte d'arbre",
     "un jeu de ballon"
    ],
    "answer": 0,
    "explain": "Le parcours est le chemin que nous faisons."
   },
   {
    "type": "mc",
    "q": "L'endroit où finit le parcours s'appelle…",
    "options": [
     "le départ",
     "l'arrivée",
     "la flèche"
    ],
    "answer": 1,
    "explain": "L'arrivée, ou le but."
   },
   {
    "type": "tf",
    "q": "Dans un parcours fermé, j'arrive à un endroit différent du départ.",
    "answer": false,
    "explain": "Non : dans un parcours fermé, je reviens au point de départ."
   },
   {
    "type": "mc",
    "q": "Quel est un bon repère ?",
    "options": [
     "un nuage",
     "une grande fontaine",
     "un chat qui passe"
    ],
    "answer": 1,
    "explain": "La fontaine reste toujours là ; les nuages et les chats se déplacent !"
   },
   {
    "type": "mc",
    "q": "La flèche ➡️ veut dire…",
    "options": [
     "tourne à droite",
     "recule",
     "arrête-toi"
    ],
    "answer": 0,
    "explain": "Elle pointe vers la droite."
   },
   {
    "type": "num",
    "q": "Tu fais 4 pas en avant, puis 3 pas en avant. Combien de pas as-tu faits ?",
    "answer": 7,
    "explain": "4 + 3 = 7 pas."
   },
   {
    "type": "order",
    "q": "Remets dans l'ordre ces mots du parcours :",
    "items": [
     "d'abord",
     "puis",
     "après",
     "enfin"
    ],
    "explain": "D'abord → puis → après → enfin."
   },
   {
    "type": "tf",
    "q": "Si je change l'ordre des consignes, je peux arriver au mauvais endroit.",
    "answer": true,
    "explain": "L'ordre est important, comme dans le codage !"
   },
   {
    "type": "text",
    "q": "Comment s'appelle le petit garçon du conte qui laissait des cailloux ?",
    "answer": [
     "le petit poucet",
     "petit poucet",
     "poucet"
    ],
    "explain": "Le Petit Poucet, dans le conte de Charles Perrault."
   },
   {
    "type": "mc",
    "q": "Pourquoi les miettes du Petit Poucet n'ont-elles pas marché ?",
    "options": [
     "Elles étaient trop grosses",
     "Les oiseaux les ont mangées",
     "Elles étaient invisibles"
    ],
    "answer": 1,
    "explain": "Un bon repère doit rester à sa place."
   },
   {
    "type": "mc",
    "q": "Le code ↑ ↑ → veut dire…",
    "options": [
     "2 pas vers le haut et 1 à droite",
     "1 pas vers le haut et 2 à droite",
     "3 pas à gauche"
    ],
    "answer": 0,
    "explain": "Deux flèches vers le haut, une vers la droite."
   }
  ]
 }
});
