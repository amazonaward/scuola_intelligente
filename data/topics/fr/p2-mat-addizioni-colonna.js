TOPIC('fr', {
 "id": "p2-mat-addizioni-colonna",
 "title": "Les additions posées",
 "intro": "Pour additionner de grands nombres, il y a une astuce de champion : les poser <b>en colonnes</b>, l'un sous l'autre ! ✏️ Apprenons les additions <b>sans retenue</b> et <b>avec retenue</b> (le fameux <b>échange</b>).",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Qu'est-ce que l'addition ?",
   "html": "<p><b>Additionner</b> veut dire <b>mettre ensemble</b>, ajouter. 🍎 + 🍎🍎 = 🍎🍎🍎</p>\n<p>Les nombres qu'on additionne s'appellent les <b>termes</b>. Le résultat s'appelle la <b>somme</b> (ou le total).</p>\n<p style=\"font-size:1.2em; text-align:center\"><b>23</b> + <b>45</b> = <b>68</b><br><span style=\"font-size:0.8em\">terme + terme = somme</span></p>"
  },
  {
   "type": "text",
   "title": "Addition posée sans retenue",
   "html": "<p>Calculons <b>23 + 45</b> en colonnes :</p>\n<ol>\n<li>Écris les nombres l'un sous l'autre : <b>unités sous les unités</b>, <b>dizaines sous les dizaines</b>. Aide-toi avec les lettres <b>d</b> et <b>u</b>.</li>\n<li>Commence toujours par les <b>unités</b>, à droite ➡️ : 3 + 5 = <b>8</b>. Écris 8 sous les unités.</li>\n<li>Puis passe aux <b>dizaines</b> : 2 + 4 = <b>6</b>. Écris 6 sous les dizaines.</li>\n<li>Lis le résultat : <b>68</b> ! 🎉</li>\n</ol>"
  },
  {
   "type": "svg",
   "title": "23 + 45 en colonnes",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<rect x=\"150\" y=\"20\" width=\"90\" height=\"260\" fill=\"#fee2e2\"/>\n<rect x=\"240\" y=\"20\" width=\"90\" height=\"260\" fill=\"#dbeafe\"/>\n<text x=\"195\" y=\"55\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">d</text>\n<text x=\"285\" y=\"55\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">u</text>\n<g font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"195\" y=\"120\">2</text><text x=\"285\" y=\"120\">3</text>\n<text x=\"195\" y=\"185\">4</text><text x=\"285\" y=\"185\">5</text>\n</g>\n<text x=\"110\" y=\"185\" font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#16a34a\">+</text>\n<line x1=\"90\" y1=\"205\" x2=\"330\" y2=\"205\" stroke=\"#1f2937\" stroke-width=\"5\"/>\n<g font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\">\n<text x=\"195\" y=\"265\" fill=\"#b91c1c\">6</text><text x=\"285\" y=\"265\" fill=\"#1d4ed8\">8</text>\n</g>\n<text x=\"360\" y=\"110\" font-size=\"20\" fill=\"#1d4ed8\">① unités : 3 + 5 = 8</text>\n<text x=\"360\" y=\"150\" font-size=\"20\" fill=\"#b91c1c\">② dizaines : 2 + 4 = 6</text>\n<path d=\"M330 240 L350 240\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<text x=\"360\" y=\"250\" font-size=\"22\" fill=\"#1f2937\" font-weight=\"bold\">③ somme = 68</text>\n</svg>",
   "caption": "Chaque chiffre dans sa colonne : on part des unités (à droite), puis on passe aux dizaines."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : sans retenue",
   "questions": [
    {
     "type": "num",
     "q": "Combien font 32 + 16 ?",
     "answer": 48,
     "explain": "Unités : 2 + 6 = 8. Dizaines : 3 + 1 = 4. Somme : 48."
    },
    {
     "type": "mc",
     "q": "Par quelle colonne commence-t-on ?",
     "options": [
      "par les dizaines",
      "par les unités",
      "c'est pareil"
     ],
     "answer": 1,
     "explain": "On commence toujours par les unités, à droite."
    },
    {
     "type": "num",
     "q": "Combien font 51 + 27 ?",
     "answer": 78,
     "explain": "1 + 7 = 8; 5 + 2 = 7: 78."
    }
   ]
  },
  {
   "type": "text",
   "title": "Addition avec retenue",
   "html": "<p>Calculons <b>37 + 48</b> :</p>\n<ol>\n<li><b>Unités</b> : 7 + 8 = <b>15</b>. Mais dans une colonne, il n'y a de la place que pour <b>un seul chiffre</b> ! 😮</li>\n<li>15 unités = <b>1 dizaine et 5 unités</b>. Écris <b>5</b> sous les unités et <b>retiens 1</b> en haut de la colonne des dizaines : c'est la <b>retenue</b>.</li>\n<li><b>Dizaines</b> : 1 (la retenue) + 3 + 4 = <b>8</b>.</li>\n<li>Résultat : <b>85</b> ! ✅</li>\n</ol>\n<p>La retenue n'est pas de la magie : on a juste <b>échangé 10 unités contre 1 dizaine</b>, comme quand tu échanges 10 pièces de 1 centime contre une pièce de 10 centimes.</p>"
  },
  {
   "type": "svg",
   "title": "37 + 48 avec retenue",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/>\n<rect x=\"150\" y=\"20\" width=\"90\" height=\"260\" fill=\"#fee2e2\"/>\n<rect x=\"240\" y=\"20\" width=\"90\" height=\"260\" fill=\"#dbeafe\"/>\n<text x=\"195\" y=\"45\" font-size=\"22\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">d</text>\n<text x=\"285\" y=\"45\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">u</text>\n<circle cx=\"195\" cy=\"72\" r=\"17\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<text x=\"195\" y=\"80\" font-size=\"24\" text-anchor=\"middle\" fill=\"#a16207\" font-weight=\"bold\">1</text>\n<g font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"195\" y=\"140\">3</text><text x=\"285\" y=\"140\">7</text>\n<text x=\"195\" y=\"200\">4</text><text x=\"285\" y=\"200\">8</text>\n</g>\n<text x=\"110\" y=\"200\" font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#16a34a\">+</text>\n<line x1=\"90\" y1=\"218\" x2=\"330\" y2=\"218\" stroke=\"#1f2937\" stroke-width=\"5\"/>\n<g font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\">\n<text x=\"195\" y=\"272\" fill=\"#b91c1c\">8</text><text x=\"285\" y=\"272\" fill=\"#1d4ed8\">5</text>\n</g>\n<path d=\"M285 95 Q250 40 215 65\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<polygon points=\"213,58 222,70 208,72\" fill=\"#ca8a04\"/>\n<text x=\"350\" y=\"100\" font-size=\"19\" fill=\"#1d4ed8\">① 7 + 8 = 15</text>\n<text x=\"350\" y=\"128\" font-size=\"19\" fill=\"#1d4ed8\">j'écris 5, je retiens 1</text>\n<text x=\"350\" y=\"175\" font-size=\"19\" fill=\"#b91c1c\">② 1 + 3 + 4 = 8</text>\n<text x=\"350\" y=\"262\" font-size=\"22\" fill=\"#1f2937\" font-weight=\"bold\">③ somme = 85</text>\n</svg>",
   "caption": "Les 15 unités deviennent 1 dizaine (la retenue jaune) et 5 unités."
  },
  {
   "type": "3d",
   "title": "L'échange avec les cubes 3D",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 85
   },
   "caption": "Voici 85 : 8 barres et 5 cubes. Les 7 + 8 = 15 unités sont devenues 1 nouvelle barre et 5 cubes. Change le nombre et regarde quand naît une nouvelle barre !"
  },
  {
   "type": "example",
   "title": "Exemple : la collecte de bouchons ♻️",
   "html": "<p>La classe de CE1 A a récolté <b>46 bouchons</b>, la CE1 B en a récolté <b>38</b>. Combien en tout ?</p>\n<ul>\n<li>Unités : 6 + 8 = 14 → j'écris <b>4</b>, je retiens <b>1</b>.</li>\n<li>Dizaines : 1 + 4 + 3 = <b>8</b>.</li>\n</ul>\n<p>En tout, <b>84 bouchons</b> ! 🎉</p>"
  },
  {
   "type": "example",
   "title": "Exemple : le goûter au café 🥐",
   "html": "<p>Un croissant coûte <b>65 centimes</b> et un jus de fruits <b>30 centimes</b>. Combien je dépense ?</p>\n<ul>\n<li>Unités : 5 + 0 = 5.</li>\n<li>Dizaines : 6 + 3 = 9.</li>\n</ul>\n<p>Je dépense <b>95 centimes</b>. Avec 1 euro (100 centimes), ça me suffit ! 💶</p>"
  },
  {
   "type": "remember",
   "title": "À retenir",
   "html": "<ul>\n<li>Unités sous les unités, dizaines sous les dizaines.</li>\n<li>On commence toujours par les <b>unités</b> (par la droite).</li>\n<li>Si les unités font 10 ou plus : écris l'unité et <b>retiens 1</b> pour les dizaines.</li>\n<li>Tu peux échanger les termes : 37 + 48 = 48 + 37 (propriété de <b>commutativité</b>). Utilise-la pour faire la <b>preuve</b> !</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… ?",
   "html": "<p>Le signe <b>+</b> vient du mot latin <i>et</i>, qui veut dire « et ». En l'écrivant vite, les marchands l'ont transformé en petite croix ! ✝️➕</p>\n<p>Il a été imprimé pour la première fois dans un livre d'arithmétique de l'Allemand <b>Johannes Widmann</b>, en <b>1489</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Le savais-tu… ?",
   "html": "<p>Le grand mathématicien <b>Carl Friedrich Gauss</b>, quand il était enfant, a additionné en quelques secondes tous les nombres de 1 à 100 ! 🤯</p>\n<p>Son astuce : 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… Il y a 50 paires qui font 101 : 50 × 101 = <b>5 050</b>.</p>"
  },
  {
   "type": "alternatives",
   "title": "D'autres façons de faire les additions",
   "intro": "La colonne, c'est pratique, mais ce n'est pas la seule façon ! Partout dans le monde, les enfants utilisent plein de méthodes différentes. Essaie celle que tu préfères.",
   "tabs": [
    {
     "label": "🇺🇸 Sommes partielles",
     "html": "<p>Dans beaucoup d'écoles américaines et anglaises, on utilise la méthode des <b>sommes partielles</b> : on additionne d'abord les dizaines, puis les unités, et à la fin on met tout ensemble.</p>\n<p><b>37 + 48</b> :</p>\n<ul>\n<li>dizaines : 30 + 40 = <b>70</b></li>\n<li>unités : 7 + 8 = <b>15</b></li>\n<li>total : 70 + 15 = <b>85</b></li>\n</ul>\n<p>Pas de retenue à retenir : on voit tout !</p>"
    },
    {
     "label": "🦘 Bonds sur la droite",
     "html": "<p>Pars du premier nombre et fais des <b>bonds</b> : d'abord les dizaines, puis les unités.</p>\n<p><b>37 + 48</b> : pars de 37 → saute 4 dizaines : 47, 57, 67, 77 → puis 8 unités : <b>85</b>.</p>\n<p>Ou bien saute de 3 pour arriver à la dizaine ronde (40), puis de 45 : 37 → 40 → <b>85</b>.</p>",
     "widget": "numberLine",
     "options": {
      "min": 30,
      "max": 90,
      "step": 1,
      "marks": [
       37,
       47,
       57,
       67,
       77,
       85
      ]
     }
    },
    {
     "label": "🎯 Arrondis et ajuste",
     "html": "<p>La méthode du <b>nombre rond</b> (elle s'appelle la <b>compensation</b>) :</p>\n<p><b>37 + 48</b> : 48, c'est presque 50 ! Alors je fais 37 + 50 = 87, mais j'ai ajouté 2 de trop, donc j'enlève 2 : 87 − 2 = <b>85</b>.</p>\n<p>C'est la méthode préférée de ceux qui calculent de tête, par exemple au marché.</p>"
    },
    {
     "label": "🧮 Le soroban japonais",
     "html": "<p>Au <b>Japon</b>, beaucoup d'enfants apprennent à calculer avec le <b>soroban</b>, un boulier spécial. Chaque colonne est une position : unités, dizaines… Quand une colonne arrive à 10, on enlève tout et on ajoute une boule à la colonne de gauche : c'est exactement la <b>retenue</b> !</p>\n<p>Essaie avec ce boulier : mets 37, puis ajoute 8 unités et 4 dizaines.</p>",
     "widget": "abacus",
     "options": {
      "columns": [
       "d",
       "u"
      ],
      "value": 37
     }
    },
    {
     "label": "💶 Avec les pièces",
     "html": "<p>Tu as <b>3 pièces de 10 centimes et 7 de 1 centime</b> (37 centimes). Mamie te donne <b>4 pièces de 10 et 8 de 1</b> (48 centimes).</p>\n<p>Maintenant tu as 7 pièces de 10 et 15 de 1. Mais 10 pièces de 1 centime peuvent être <b>échangées</b> à la banque contre une de 10 ! 🏦</p>\n<p>Après l'échange : <b>8 pièces de 10</b> et <b>5 de 1</b> = <b>85 centimes</b>. Voilà pourquoi on parle d'« échange » !</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Carte de l'addition posée",
   "nodes": [
    {
     "id": "addizione",
     "label": "Addition",
     "x": 50,
     "y": 8,
     "color": "#16a34a",
     "html": "Opération qui met ensemble deux quantités ou plus.",
     "why": "C'est l'opération la plus ancienne : compter le bétail, réunir deux récoltes. Le mot vient du latin <i>addere</i>, « ajouter »."
    },
    {
     "id": "addendi",
     "label": "Termes et somme",
     "x": 18,
     "y": 28,
     "color": "#2563eb",
     "html": "Termes : les nombres à additionner. Somme : le résultat.",
     "why": "En italien, les termes s'appellent « addendi », du latin : « ce qui doit être ajouté ». « Somme » vient de <i>summa</i>, « la partie la plus haute » : on raconte que les anciens Romains écrivaient le total en haut de la colonne de nombres !"
    },
    {
     "id": "posizione",
     "label": "Valeur de position",
     "x": 50,
     "y": 35,
     "color": "#f59e0b",
     "html": "Unités sous les unités, dizaines sous les dizaines.",
     "why": "Les chiffres valent selon la place qu'ils occupent. Si tu les mets dans la mauvaise colonne, tu additionnes des dizaines avec des unités : comme additionner des euros et des centimes !"
    },
    {
     "id": "unita",
     "label": "On part des unités",
     "x": 82,
     "y": 28,
     "color": "#0ea5e9",
     "html": "On commence toujours par la colonne de droite.",
     "why": "Parce que les unités peuvent « se remplir » et produire une dizaine à ajouter à la colonne suivante. Si on partait des dizaines, il faudrait revenir en arrière pour corriger."
    },
    {
     "id": "cambio",
     "label": "Retenue (échange)",
     "x": 82,
     "y": 58,
     "color": "#dc2626",
     "html": "10 unités deviennent 1 dizaine, qui va dans la colonne de gauche.",
     "why": "Elle vient directement de notre système en <b>base 10</b> : dans chaque position, il n'y a de place que pour les chiffres de 0 à 9. La méthode en colonnes avec retenue s'est répandue en Europe à partir de 1200 grâce au <i>Liber Abaci</i> de <b>Fibonacci</b>."
    },
    {
     "id": "commutativa",
     "label": "Commutativité",
     "x": 18,
     "y": 58,
     "color": "#a855f7",
     "html": "Si on change l'ordre des termes, la somme ne change pas.",
     "why": "Mettre 3 pommes dans un panier qui en a 5, ou 5 pommes dans un panier qui en a 3, donne toujours 8 pommes : les quantités ne dépendent pas de l'ordre."
    },
    {
     "id": "prova",
     "label": "La preuve",
     "x": 32,
     "y": 85,
     "color": "#14b8a6",
     "html": "On refait l'addition en échangeant les termes.",
     "why": "Grâce à la commutativité, le résultat doit être identique : s'il est différent, il y a une erreur."
    },
    {
     "id": "segno",
     "label": "Le signe +",
     "x": 68,
     "y": 85,
     "color": "#64748b",
     "html": "Le symbole de l'addition.",
     "why": "Il vient du latin <i>et</i> (« et »). Il est apparu imprimé en 1489 dans le livre de <b>Johannes Widmann</b>, avec le signe −."
    }
   ],
   "edges": [
    [
     "addizione",
     "addendi",
     "a"
    ],
    [
     "addizione",
     "posizione",
     "en colonnes utilise"
    ],
    [
     "posizione",
     "unita",
     "règle"
    ],
    [
     "unita",
     "cambio",
     "si ≥ 10"
    ],
    [
     "addizione",
     "commutativa",
     "a la"
    ],
    [
     "commutativa",
     "prova",
     "permet"
    ],
    [
     "addizione",
     "segno",
     "s'écrit avec"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz : avec retenue",
   "questions": [
    {
     "type": "num",
     "q": "Combien font 28 + 35 ?",
     "answer": 63,
     "explain": "8 + 5 = 13 : j'écris 3, je retiens 1. 1 + 2 + 3 = 6. Somme : 63."
    },
    {
     "type": "num",
     "q": "Combien font 19 + 19 ?",
     "answer": 38,
     "explain": "9 + 9 = 18 : j'écris 8, je retiens 1. 1 + 1 + 1 = 3 : 38."
    },
    {
     "type": "tf",
     "q": "Dans 46 + 23, il faut une retenue.",
     "answer": false,
     "explain": "6 + 3 = 9, moins de 10 : pas de retenue."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Addition",
   "d": "Opération qui ajoute, qui met ensemble."
  },
  {
   "t": "Termes",
   "d": "Les nombres qu'on additionne."
  },
  {
   "t": "Somme",
   "d": "Le résultat de l'addition."
  },
  {
   "t": "Retenue (échange)",
   "d": "Quand 10 unités deviennent 1 dizaine à ajouter à la colonne des dizaines."
  },
  {
   "t": "Commutativité",
   "d": "Si on échange les termes, la somme ne change pas."
  },
  {
   "t": "Preuve",
   "d": "Vérification du résultat en refaisant le calcul d'une autre façon."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Combien font 34 + 25 ?",
    "answer": 59,
    "explain": "4 + 5 = 9; 3 + 2 = 5: 59."
   },
   {
    "type": "num",
    "q": "Combien font 47 + 36 ?",
    "answer": 83,
    "explain": "7 + 6 = 13 : j'écris 3, je retiens 1. 1 + 4 + 3 = 8 : 83."
   },
   {
    "type": "num",
    "q": "Combien font 58 + 27 ?",
    "answer": 85,
    "explain": "8 + 7 = 15 : j'écris 5, je retiens 1. 1 + 5 + 2 = 8 : 85."
   },
   {
    "type": "mc",
    "q": "Comment s'appelle le résultat de l'addition ?",
    "options": [
     "différence",
     "somme",
     "produit"
    ],
    "answer": 1,
    "explain": "Le résultat de l'addition est la somme."
   },
   {
    "type": "tf",
    "q": "En colonnes, on commence par les dizaines.",
    "answer": false,
    "explain": "On commence toujours par les unités."
   },
   {
    "type": "tf",
    "q": "29 + 45 donne le même résultat que 45 + 29.",
    "answer": true,
    "explain": "Commutativité : 74 dans les deux cas."
   },
   {
    "type": "mc",
    "q": "Dans 36 + 48, combien font les unités ?",
    "options": [
     "14",
     "4",
     "12"
    ],
    "answer": 0,
    "explain": "6 + 8 = 14 : j'écris 4 et je retiens 1."
   },
   {
    "type": "text",
    "q": "Comment s'appellent les nombres qu'on additionne ?",
    "answer": [
     "termes",
     "les termes"
    ],
    "explain": "On les appelle les termes."
   },
   {
    "type": "num",
    "q": "Marta a 38 perles rouges et 44 bleues. Combien de perles a-t-elle ?",
    "answer": 82,
    "explain": "8 + 4 = 12 : j'écris 2, je retiens 1. 1 + 3 + 4 = 8 : 82."
   },
   {
    "type": "num",
    "q": "Un livre a 56 pages, un autre 39. Combien de pages en tout ?",
    "answer": 95,
    "explain": "6 + 9 = 15 : j'écris 5, je retiens 1. 1 + 5 + 3 = 9 : 95."
   },
   {
    "type": "order",
    "q": "Remets dans l'ordre les étapes de l'addition posée avec retenue.",
    "items": [
     "Je pose les unités sous les unités et les dizaines sous les dizaines",
     "J'additionne les unités",
     "J'écris l'unité et je retiens la dizaine",
     "J'additionne les dizaines avec la retenue"
    ],
    "explain": "C'est le bon ordre : on part toujours des unités."
   }
  ],
  "gen": [
   [
    "add100",
    3
   ]
  ]
 }
});
