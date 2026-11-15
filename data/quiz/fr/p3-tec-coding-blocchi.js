QBANK("fr", "p3-tec-coding-blocchi", {
  "f": [
    {
      "type": "mc",
      "q": "Dans Scratch, de quelle couleur sont les blocs Mouvement (comme « avancer de 10 pas ») ?",
      "options": [
        "Bleu",
        "Jaune",
        "Violet"
      ],
      "answer": 0,
      "explain": "Les blocs Mouvement sont bleus. Les Événements sont jaunes, l'Apparence violette, le Contrôle orange."
    },
    {
      "type": "tf",
      "q": "L'ordinateur fait exactement ce qui est écrit dans le programme.",
      "answer": true,
      "explain": "Vrai : l'ordinateur est un exécutant précis mais sans imagination."
    },
    {
      "type": "mc",
      "q": "Que fait le bloc « attendre 1 seconde » ?",
      "options": [
        "Il fait démarrer le programme",
        "Il fait tourner le personnage",
        "Il fait une pause"
      ],
      "answer": 2,
      "explain": "Attendre sert à faire une pause d'un certain temps."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le programme à blocs de couleur créé au MIT, avec le chat orange ?",
      "answer": [
        "scratch"
      ],
      "explain": "Il s'appelle Scratch et est né au MIT de Boston."
    },
    {
      "type": "mc",
      "q": "En 1947, des ingénieurs ont trouvé dans l'ordinateur Mark II le premier vrai « bug ». Quel animal était-ce ?",
      "options": [
        "Une fourmi",
        "Un papillon de nuit",
        "Une araignée"
      ],
      "answer": 1,
      "explain": "Un papillon de nuit était coincé entre les contacts. « Bug » veut dire insecte en anglais."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un programme dit : « répéter 6 fois : changer de costume, attendre 0,5 seconde ». Combien de secondes d'attente y a-t-il en tout ?",
      "answer": 3,
      "unit": "secondes",
      "explain": "6 tours × 0,5 seconde = 3 secondes."
    },
    {
      "type": "mc",
      "q": "Le robot doit avancer de 2 cases, tourner à gauche puis avancer de 4 cases. Quel programme est correct ?",
      "options": [
        "répéter 4 fois [avancer] ; tourner à gauche ; répéter 2 fois [avancer]",
        "répéter 2 fois [avancer] ; tourner à gauche ; répéter 4 fois [avancer]",
        "répéter 6 fois [avancer] ; tourner à gauche"
      ],
      "answer": 1,
      "explain": "D'abord 2 pas en avant, puis le virage à gauche, puis 4 pas en avant. L'ordre compte !"
    },
    {
      "type": "tf",
      "q": "Dans le bloc « répéter 4 fois », les instructions à l'intérieur ne sont exécutées qu'une seule fois.",
      "answer": false,
      "explain": "Faux : les instructions à l'intérieur de la boucle sont répétées 4 fois."
    },
    {
      "type": "order",
      "q": "Une recette est un algorithme. Mets dans l'ordre les étapes du gâteau.",
      "items": [
        "Casse les œufs",
        "Ajoute le sucre",
        "Mélange",
        "Mets au four"
      ],
      "explain": "Si tu mets au four avant de mélanger, c'est un désastre : dans une séquence, l'ordre compte."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le travail qui consiste à trouver et corriger une erreur dans un programme ? (dé…)",
      "answer": [
        "debug",
        "debogage",
        "débogage",
        "déboguer",
        "faire du debug"
      ],
      "explain": "On appelle cela déboguer : on teste le programme, on cherche l'erreur et on la corrige."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Une boucle dit : « répéter 5 fois : poser 3 cubes, enlever 1 cube ». Combien de cubes reste-t-il à la fin ?",
      "answer": 10,
      "unit": "cubes",
      "explain": "À chaque tour, il y a 3 − 1 = 2 cubes de plus. Après 5 tours : 5 × 2 = 10 cubes."
    },
    {
      "type": "mc",
      "q": "Marta veut dessiner un carré et écrit : « répéter 3 fois : avancer de 10 pas, tourner de 90° ». Que dessine-t-elle ?",
      "options": [
        "Un carré complet",
        "Trois côtés d'un carré : la figure reste ouverte",
        "Un triangle"
      ],
      "answer": 1,
      "explain": "Un carré a 4 côtés, il faut donc répéter 4 fois. Avec 3 tours, le dessin est incomplet. C'est un bug à corriger !"
    },
    {
      "type": "mc",
      "q": "Laquelle de ces activités n'est PAS une boucle, mais une suite d'étapes différentes ?",
      "options": [
        "Sauter à la corde 20 fois",
        "Le refrain d'une chanson",
        "Allumer l'ordinateur et ouvrir Scratch"
      ],
      "answer": 2,
      "explain": "Allumer l'ordinateur et ouvrir Scratch sont deux étapes différentes, l'une après l'autre. Les autres répètent la même chose."
    },
    {
      "type": "tf",
      "q": "Le programme « répéter 4 fois : avancer d'1 case » fait faire au robot le même mouvement que 4 blocs « avancer d'1 case » placés l'un après l'autre.",
      "answer": true,
      "explain": "Vrai : le résultat est le même, mais avec la boucle le programme est plus court et plus facile à corriger."
    },
    {
      "type": "order",
      "q": "Mets dans l'ordre les étapes pour corriger un bug.",
      "items": [
        "Exécute le programme et regarde le résultat",
        "Trouve où le résultat est différent de ce que tu voulais",
        "Corrige l'instruction fausse",
        "Teste à nouveau le programme"
      ],
      "explain": "On teste, on cherche où ça ne va pas, on corrige et on teste encore : c'est ainsi qu'on apprend à programmer."
    }
  ]
});
