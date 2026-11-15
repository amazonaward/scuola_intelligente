QBANK("fr", "p4-mat-poligoni", {
  "f": [
    {
      "type": "mc",
      "q": "Combien de côtés a un pentagone ?",
      "options": [
        "4",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Penta- veut dire cinq : le pentagone a 5 côtés."
    },
    {
      "type": "tf",
      "q": "Un triangle équilatéral a ses trois côtés égaux.",
      "answer": true,
      "explain": "Équilatéral veut dire « à côtés égaux » : ses trois angles font tous 60°."
    },
    {
      "type": "text",
      "q": "Quelle forme a un panneau STOP ?",
      "answer": [
        "octogone",
        "un octogone",
        "l'octogone"
      ],
      "explain": "Le panneau STOP est un octogone : il a 8 côtés."
    },
    {
      "type": "num",
      "q": "Combien de diagonales a un quadrilatère ?",
      "answer": 2,
      "explain": "On peut relier deux paires de sommets non voisins : il y a 2 diagonales."
    },
    {
      "type": "mc",
      "q": "Quel triangle a ses trois côtés différents ?",
      "options": [
        "équilatéral",
        "isocèle",
        "scalène"
      ],
      "answer": 2,
      "explain": "Le scalène a trois côtés différents ; l'isocèle en a deux égaux ; l'équilatéral trois égaux."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un triangle isocèle a un angle au sommet de 40°. Combien mesure chacun des deux angles à la base ?",
      "answer": 70,
      "unit": "°",
      "explain": "La somme est 180° : 180 − 40 = 140°. Les deux angles à la base sont égaux : 140 : 2 = 70°."
    },
    {
      "type": "mc",
      "q": "Un quadrilatère a quatre angles droits, mais les côtés voisins ont des longueurs différentes. Qu'est-ce que c'est ?",
      "options": [
        "rectangle",
        "losange",
        "trapèze"
      ],
      "answer": 0,
      "explain": "Le rectangle a 4 angles droits et des côtés égaux deux à deux, pas tous égaux."
    },
    {
      "type": "tf",
      "q": "Un trapèze a toujours quatre côtés égaux.",
      "answer": false,
      "explain": "Le trapèze n'a qu'une paire de côtés parallèles ; les côtés sont en général différents. Quatre côtés égaux, c'est le losange et le carré."
    },
    {
      "type": "num",
      "q": "Combien de carreaux en forme de triangle équilatéral tiennent autour d'un même point, sans trous ?",
      "answer": 6,
      "explain": "Chaque angle fait 60° et 360° : 60° = 6."
    },
    {
      "type": "mc",
      "q": "Un triangle a un angle de 120°. Comment s'appelle-t-il, selon ses angles ?",
      "options": [
        "acutangle",
        "rectangle",
        "obtusangle"
      ],
      "answer": 2,
      "explain": "Un angle plus grand que 90° est obtus : le triangle est obtusangle."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un losange a deux angles opposés de 70° chacun. Combien mesure chacun des deux autres angles ?",
      "answer": 110,
      "unit": "°",
      "explain": "La somme est 360°. 70 + 70 = 140° ; 360 − 140 = 220°. Les deux autres angles sont égaux : 220 : 2 = 110°."
    },
    {
      "type": "mc",
      "q": "Pourquoi ne peut-on pas carreler un sol sans trous avec seulement des pentagones réguliers ?",
      "options": [
        "Parce que les pentagones ont trop de côtés",
        "Parce que les pentagones sont concaves",
        "L'angle de 108° n'entre pas un nombre exact de fois dans 360° : avec 3 pentagones il reste un trou, avec 4 ils se chevauchent"
      ],
      "answer": 2,
      "explain": "3 × 108° = 324° (il manque un morceau) et 4 × 108° = 432° (trop). Pour remplir 360°, l'angle doit entrer un nombre exact de fois."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre les étapes pour trouver le troisième angle d'un triangle dont deux angles font 65° et 45°.",
      "items": [
        "Je me rappelle que les angles d'un triangle font 180° en tout",
        "J'additionne les deux angles connus : 65° + 45° = 110°",
        "Je soustrais de 180° : 180° − 110° = 70°",
        "Le troisième angle mesure 70°"
      ],
      "explain": "On rappelle d'abord la règle (180°), puis on additionne les angles connus, puis on soustrait du total."
    },
    {
      "type": "mc",
      "q": "Quelle affirmation est vraie ?",
      "options": [
        "Tout losange est un carré",
        "Tout carré est un losange",
        "Tout rectangle a quatre côtés égaux"
      ],
      "answer": 1,
      "explain": "Le carré a 4 côtés égaux, donc c'est aussi un losange. Mais un losange peut avoir des angles non droits, et un rectangle peut avoir des côtés différents."
    },
    {
      "type": "num",
      "q": "De chaque sommet d'un pentagone partent 2 diagonales. Combien de diagonales le pentagone a-t-il en tout ?",
      "answer": 5,
      "explain": "5 sommets × 2 = 10, mais ainsi chaque diagonale est comptée deux fois (une par extrémité) : 10 : 2 = 5."
    }
  ]
});
