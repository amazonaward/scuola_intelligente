QBANK("fr", "p5-mat-cerchio", {
  "f": [
    {
      "type": "mc",
      "q": "Comment s'appelle le point situé à la même distance de tous les points de la circonférence ?",
      "options": [
        "l'arc",
        "le centre",
        "le secteur"
      ],
      "answer": 1,
      "explain": "Le centre est le point où l'on plante la pointe du compas : tous les points de la circonférence sont à la même distance."
    },
    {
      "type": "tf",
      "q": "Le diamètre est deux fois plus long que le rayon.",
      "answer": true,
      "explain": "Vrai : d = r × 2. Le diamètre est formé de deux rayons bout à bout."
    },
    {
      "type": "num",
      "q": "Une roue a un rayon de 8 cm. Quel est son diamètre ?",
      "answer": 16,
      "unit": "cm",
      "explain": "d = r × 2 = 8 × 2 = 16 cm."
    },
    {
      "type": "mc",
      "q": "Un segment qui relie deux points quelconques de la circonférence s'appelle…",
      "options": [
        "un arc",
        "un secteur",
        "une corde"
      ],
      "answer": 2,
      "explain": "Le segment qui relie deux points de la circonférence est une corde. L'arc, lui, est un morceau de circonférence."
    },
    {
      "type": "text",
      "q": "Avec quel instrument dessine-t-on une circonférence ?",
      "answer": [
        "compas",
        "le compas",
        "un compas"
      ],
      "explain": "On utilise le compas : la pointe reste fixe au centre et la mine tourne autour."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Une pizza a un diamètre de 30 cm. Quelle est la longueur de sa circonférence (le bord) ? (π = 3,14)",
      "answer": 94.2,
      "unit": "cm",
      "explain": "C = d × 3,14 = 30 × 3,14 = 94,2 cm."
    },
    {
      "type": "mc",
      "q": "Un cercle a un rayon de 4 dm. Quel calcul donne la longueur de la circonférence ?",
      "options": [
        "4 × 3,14",
        "4 × 2 × 3,14",
        "4 × 4 × 3,14"
      ],
      "answer": 1,
      "explain": "C = r × 2 × 3,14. Le dernier calcul (r × r × 3,14) donnerait l'aire, pas le bord."
    },
    {
      "type": "num",
      "q": "Une roue de vélo a un diamètre de 70 cm. Combien de mètres le vélo parcourt-il en 10 tours complets de roue ? (π = 3,14)",
      "answer": 21.98,
      "tol": 0.01,
      "unit": "m",
      "explain": "Un tour : 70 × 3,14 = 219,8 cm. 10 tours : 2198 cm = 21,98 m."
    },
    {
      "type": "tf",
      "q": "Si le rayon d'un cercle double, sa circonférence double aussi.",
      "answer": true,
      "explain": "Vrai : C = r × 2 × 3,14, donc si r devient deux fois plus grand, C aussi."
    },
    {
      "type": "num",
      "q": "Une circonférence mesure 62,8 cm. Quel est son rayon ? (π = 3,14)",
      "answer": 10,
      "unit": "cm",
      "explain": "Diamètre : 62,8 : 3,14 = 20 cm. Rayon : 20 : 2 = 10 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Une piste ronde a un diamètre de 80 m. Marco en fait 3 tours en suivant le bord. Combien de mètres court-il ? (π = 3,14)",
      "answer": 753.6,
      "tol": 0.01,
      "unit": "m",
      "explain": "Un tour : 80 × 3,14 = 251,2 m. Trois tours : 251,2 × 3 = 753,6 m."
    },
    {
      "type": "mc",
      "q": "En un tour complet, une roue parcourt 157 cm. Quel est son diamètre ? (π = 3,14)",
      "options": [
        "25 cm",
        "50 cm",
        "78,5 cm",
        "100 cm"
      ],
      "answer": 1,
      "explain": "d = C : 3,14 = 157 : 3,14 = 50 cm. Attention : 25 cm serait le rayon."
    },
    {
      "type": "tf",
      "q": "60 cm de ruban suffisent pour faire le tour d'un plateau rond de 20 cm de diamètre.",
      "answer": false,
      "explain": "Faux : la circonférence est 20 × 3,14 = 62,8 cm, soit plus de 60 cm."
    },
    {
      "type": "num",
      "q": "Une pizza a un diamètre de 40 cm. Quelle est son aire ? (A = r × r × 3,14)",
      "answer": 1256,
      "tol": 0.01,
      "unit": "cm²",
      "explain": "Rayon : 40 : 2 = 20 cm. Aire : 20 × 20 × 3,14 = 400 × 3,14 = 1256 cm²."
    },
    {
      "type": "order",
      "q": "Classe de la circonférence la plus courte à la plus longue. (π = 3,14)",
      "items": [
        "Diamètre 10 cm",
        "Rayon 7 cm",
        "Diamètre 20 cm",
        "Rayon 15 cm"
      ],
      "explain": "Diamètre 10 → 31,4 cm ; rayon 7 (d = 14) → 43,96 cm ; diamètre 20 → 62,8 cm ; rayon 15 (d = 30) → 94,2 cm."
    }
  ]
});
