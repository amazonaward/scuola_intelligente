QBANK("fr", "p4-mat-perimetro", {
  "f": [
    {
      "type": "tf",
      "q": "Le périmètre mesure l'espace à l'intérieur d'une figure.",
      "answer": false,
      "explain": "Non : le périmètre est la longueur du contour, c'est-à-dire le tour de la figure."
    },
    {
      "type": "num",
      "q": "Un triangle équilatéral a un côté de 8 cm. Quel est son périmètre ?",
      "answer": 24,
      "unit": "cm",
      "explain": "Les 3 côtés sont égaux : 8 × 3 = 24 cm."
    },
    {
      "type": "mc",
      "q": "Quelle opération sert à trouver le périmètre d'un carré ?",
      "options": [
        "côté : 4",
        "côté + 4",
        "côté × 4"
      ],
      "answer": 2,
      "explain": "Le carré a 4 côtés égaux, donc P = côté × 4."
    },
    {
      "type": "mc",
      "q": "Pour mettre une clôture autour d'un jardin, il faut connaître son…",
      "options": [
        "poids",
        "périmètre",
        "couleur"
      ],
      "answer": 1,
      "explain": "La clôture fait tout le tour du jardin : il faut la longueur du contour, le périmètre."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le polygone qui a 4 côtés égaux et 4 angles droits ?",
      "answer": [
        "carré",
        "le carré",
        "un carré"
      ],
      "explain": "Le carré a 4 côtés égaux et 4 angles droits."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un cadre rectangulaire mesure 30 cm sur 20 cm. Combien de centimètres de bois faut-il pour tous les côtés ?",
      "answer": 100,
      "unit": "cm",
      "explain": "(30 + 20) × 2 = 50 × 2 = 100 cm."
    },
    {
      "type": "num",
      "q": "Un triangle isocèle a une base de 12 cm et chaque côté oblique de 10 cm. Quel est le périmètre ?",
      "answer": 32,
      "unit": "cm",
      "explain": "12 + 10 × 2 = 12 + 20 = 32 cm."
    },
    {
      "type": "mc",
      "q": "Le périmètre d'un losange est 36 cm. Quelle est la longueur d'un côté ?",
      "options": [
        "9 cm",
        "12 cm",
        "6 cm"
      ],
      "answer": 0,
      "explain": "Le losange a 4 côtés égaux : 36 : 4 = 9 cm."
    },
    {
      "type": "tf",
      "q": "Un rectangle de côtés 8 cm et 2 cm et un carré de côté 5 cm ont le même périmètre.",
      "answer": true,
      "explain": "Rectangle : (8 + 2) × 2 = 20 cm. Carré : 5 × 4 = 20 cm. Des figures différentes peuvent avoir le même périmètre."
    },
    {
      "type": "num",
      "q": "Maria fait 3 fois le tour d'un massif carré de 6 m de côté. Combien de mètres parcourt-elle ?",
      "answer": 72,
      "unit": "m",
      "explain": "Un tour : 6 × 4 = 24 m. Trois tours : 24 × 3 = 72 m."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un rectangle a un périmètre de 56 cm et sa base est le triple de sa hauteur. Combien mesure la base ?",
      "answer": 21,
      "unit": "cm",
      "explain": "b + h = 56 : 2 = 28 cm. La base fait 3 parts et la hauteur 1 part : 4 parts = 28 cm, donc 1 part = 7 cm. Base = 7 × 3 = 21 cm."
    },
    {
      "type": "num",
      "q": "Un triangle isocèle a un périmètre de 40 cm et sa base mesure 12 cm. Combien mesure chaque côté oblique ?",
      "answer": 14,
      "unit": "cm",
      "explain": "Les deux côtés obliques ensemble : 40 − 12 = 28 cm. Chacun : 28 : 2 = 14 cm."
    },
    {
      "type": "num",
      "q": "Une piste rectangulaire mesure 120 m de long et 80 m de large. Marco en fait 3 fois le tour. Combien de kilomètres court-il ?",
      "answer": 1.2,
      "unit": "km",
      "explain": "Un tour : (120 + 80) × 2 = 400 m. Trois tours : 1200 m = 1,2 km."
    },
    {
      "type": "mc",
      "q": "Luca calcule le périmètre d'un rectangle de base 8 cm et de hauteur 5 cm ainsi : 8 + 5 × 2 = 18 cm. Où est l'erreur ?",
      "options": [
        "Le résultat est juste",
        "Il devait faire 8 × 5 = 40 cm",
        "Il devait faire (8 + 5) × 2 = 26 cm : on additionne les deux mesures et on double le total"
      ],
      "answer": 2,
      "explain": "Un rectangle a 2 bases et 2 hauteurs : le périmètre est (8 + 5) × 2 = 26 cm. Sans parenthèses, 8 + 5 × 2 ne compte qu'une seule base."
    },
    {
      "type": "order",
      "q": "Range ces figures du plus petit périmètre au plus grand.",
      "items": [
        "Carré de côté 4 cm",
        "Triangle équilatéral de côté 6 cm",
        "Rectangle 7 cm × 3 cm",
        "Hexagone régulier de côté 4 cm",
        "Pentagone régulier de côté 6 cm"
      ],
      "explain": "Périmètres : 4 × 4 = 16 cm ; 6 × 3 = 18 cm ; (7 + 3) × 2 = 20 cm ; 4 × 6 = 24 cm ; 6 × 5 = 30 cm."
    }
  ]
});
