QBANK("fr", "m1-mat-geometria-base", {
  "f": [
    {
      "type": "mc",
      "q": "Lequel de ces objets géométriques peut se mesurer avec une règle ?",
      "options": [
        "La droite",
        "La demi-droite",
        "Le segment"
      ],
      "answer": 2,
      "explain": "La droite et la demi-droite sont illimitées ; le segment a deux extrémités, donc une longueur."
    },
    {
      "type": "tf",
      "q": "Un angle droit mesure 90°.",
      "answer": true,
      "explain": "L'angle droit est formé par deux demi-droites perpendiculaires et mesure 90°."
    },
    {
      "type": "mc",
      "q": "Comment s'appelle l'angle qui mesure 180° ?",
      "options": [
        "Angle plein",
        "Angle plat",
        "Angle droit"
      ],
      "answer": 1,
      "explain": "Les deux demi-droites sont sur la même droite : l'angle est plat et vaut 180°."
    },
    {
      "type": "num",
      "q": "Combien de degrés mesure un angle plein ?",
      "answer": 360,
      "unit": "°",
      "explain": "Un angle plein est un tour complet : 360°."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le point qui partage un segment en deux segments congruents ?",
      "answer": [
        "milieu",
        "le milieu",
        "point milieu",
        "le point milieu"
      ],
      "explain": "Le milieu M de AB est tel que AM ≅ MB."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Sur une droite, les points A, B, C sont dans cet ordre. AB = 4,5 cm et AC = 11 cm. Combien mesure BC ?",
      "answer": 6.5,
      "tol": 0.01,
      "unit": "cm",
      "explain": "BC = AC − AB = 11 − 4,5 = 6,5 cm."
    },
    {
      "type": "num",
      "q": "Deux angles sont supplémentaires et l'un est le double de l'autre. Combien mesure le plus petit angle ?",
      "answer": 60,
      "unit": "°",
      "explain": "La somme 180° partagée en 3 parts égales (1 + 2) : 180 ÷ 3 = 60°. L'autre mesure 120°."
    },
    {
      "type": "mc",
      "q": "Deux angles consécutifs qui forment ensemble un angle plat sont dits…",
      "options": [
        "complémentaires",
        "adjacents (supplémentaires)",
        "opposés par le sommet"
      ],
      "answer": 1,
      "explain": "Deux angles consécutifs dont les côtés non communs sont sur la même droite sont adjacents et leur somme vaut 180°."
    },
    {
      "type": "tf",
      "q": "Le milieu d'un segment de 15 cm le partage en deux parties de 7,5 cm chacune.",
      "answer": true,
      "explain": "15 ÷ 2 = 7,5 cm."
    },
    {
      "type": "mc",
      "q": "Combien font 90° − 36°40′ ?",
      "options": [
        "54°20′",
        "53°40′",
        "53°20′"
      ],
      "answer": 2,
      "explain": "90° = 89°60′. Donc 89°60′ − 36°40′ = 53°20′."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Sur la même droite, les points A, B, C, D sont dans cet ordre. AB = 6 cm, BC est le double de AB et CD est la moitié de BC. Combien mesure AD ?",
      "answer": 24,
      "unit": "cm",
      "explain": "BC = 6 × 2 = 12 cm ; CD = 12 ÷ 2 = 6 cm ; AD = 6 + 12 + 6 = 24 cm."
    },
    {
      "type": "num",
      "q": "A, B, C sont alignés dans cet ordre et AC = 30 cm. M est le milieu de AB et N est le milieu de BC. Combien mesure MN ?",
      "answer": 15,
      "unit": "cm",
      "explain": "MB = AB ÷ 2 et BN = BC ÷ 2, donc MN = (AB + BC) ÷ 2 = AC ÷ 2 = 15 cm."
    },
    {
      "type": "mc",
      "q": "Deux angles adjacents supplémentaires diffèrent de 40°. Combien mesure le plus grand ?",
      "options": [
        "70°",
        "140°",
        "110°"
      ],
      "answer": 2,
      "explain": "Somme 180°, différence 40° : le plus grand vaut (180 + 40) ÷ 2 = 110°, le plus petit 70°."
    },
    {
      "type": "tf",
      "q": "Deux angles opposés par le sommet sont toujours congruents, alors que deux angles adjacents ne sont jamais congruents.",
      "answer": false,
      "explain": "Des angles adjacents peuvent être congruents : deux angles droits de 90° sont adjacents et égaux."
    },
    {
      "type": "order",
      "q": "Mets dans l'ordre les étapes pour trouver le milieu d'un segment AB à la règle et au compas.",
      "items": [
        "Je pique le compas en A et, avec un écartement supérieur à la moitié de AB, je trace un arc",
        "Avec le même écartement, je pique en B et je trace un deuxième arc",
        "Je marque les deux points où les arcs se croisent",
        "Je relie les deux points : la droite coupe AB en son milieu"
      ],
      "explain": "Les arcs tracés depuis les deux extrémités se croisent en deux points ; la droite qui les relie coupe AB en deux parties égales."
    }
  ]
});
