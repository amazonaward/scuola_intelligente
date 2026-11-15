QBANK("fr", "spazio-eris", {
  "f": [
    {
      "type": "mc",
      "q": "Qu'est-ce qu'Éris ?",
      "options": [
        "Une étoile",
        "Une comète",
        "Une planète naine"
      ],
      "answer": 2,
      "explain": "Éris est une planète naine, presque aussi grande que Pluton."
    },
    {
      "type": "tf",
      "q": "Éris a une lune.",
      "answer": true,
      "explain": "Elle a une lune appelée Dysnomie."
    },
    {
      "type": "text",
      "q": "Comment s'appelle la lune d'Éris ?",
      "answer": [
        "dysnomie",
        "dysnomia"
      ],
      "explain": "La lune d'Éris s'appelle Dysnomie, comme la fille de la déesse Éris."
    },
    {
      "type": "mc",
      "q": "Quelle autre planète naine est presque aussi grande qu'Éris ?",
      "options": [
        "Pluton",
        "Jupiter",
        "La Terre"
      ],
      "answer": 0,
      "explain": "Pluton a presque la même taille qu'Éris : c'est pourquoi leurs histoires sont liées."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Éris se trouve entre 38 et 98 UA du Soleil. De combien d'UA sa distance au Soleil change-t-elle pendant son tour ?",
      "answer": 60,
      "unit": "UA",
      "explain": "98 − 38 = 60 UA."
    },
    {
      "type": "mc",
      "q": "Pourquoi les astronomes ont-ils créé en 2006 la catégorie des « planètes naines » ?",
      "options": [
        "Parce que Pluton avait disparu",
        "Parce qu'on avait découvert des objets comme Éris, presque aussi grands que Pluton, et qu'il fallait une règle claire",
        "Parce que la Terre avait changé"
      ],
      "answer": 1,
      "explain": "Si Pluton était une planète, Éris et d'autres l'auraient été aussi : il fallait une nouvelle catégorie."
    },
    {
      "type": "tf",
      "q": "Depuis la surface d'Éris, le Soleil ressemblerait seulement à une étoile très brillante.",
      "answer": true,
      "explain": "Éris est si loin du Soleil qu'il apparaît comme un point très lumineux, pas comme un grand disque."
    },
    {
      "type": "num",
      "q": "Une année sur Éris dure environ 559 années terrestres. Combien d'années terrestres font 2 années d'Éris ?",
      "answer": 1118,
      "unit": "ans",
      "explain": "559 × 2 = 1 118 années terrestres."
    }
  ],
  "d": [
    {
      "type": "order",
      "q": "Classe ces corps du plus proche au plus lointain du Soleil (en moyenne).",
      "items": [
        "Terre",
        "Cérès",
        "Pluton",
        "Éris"
      ],
      "explain": "Distances moyennes : Terre 1 UA, Cérès 2,77 UA, Pluton environ 39 UA, Éris environ 68 UA."
    },
    {
      "type": "mc",
      "q": "Pourquoi la distance d'Éris au Soleil change-t-elle autant, de 38 à 98 UA ?",
      "options": [
        "Parce qu'Éris change de taille",
        "Parce que son orbite est très allongée",
        "Parce que la Terre l'attire"
      ],
      "answer": 1,
      "explain": "Une orbite très allongée amène Éris tantôt près du Soleil, tantôt très loin."
    },
    {
      "type": "num",
      "q": "Éris a environ 27 % de masse en plus que Pluton. Si la masse de Pluton était de 100 unités, combien d'unités aurait Éris ?",
      "answer": 127,
      "tol": 0.5,
      "unit": "unités",
      "explain": "100 + 27 % de 100 = 100 + 27 = 127 unités."
    },
    {
      "type": "tf",
      "q": "Éris est un peu plus petite que Pluton mais a plus de masse : sa matière doit donc être en moyenne plus dense.",
      "answer": true,
      "explain": "Plus de masse dans un volume un peu plus petit signifie une densité plus grande."
    }
  ]
});
