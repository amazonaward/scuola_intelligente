QBANK("fr", "p5-mat-perimetro-area", {
  "f": [
    {
      "type": "num",
      "q": "Un pentagone a des côtés de 3 cm, 4 cm, 4 cm, 5 cm et 6 cm. Quel est son périmètre ?",
      "answer": 22,
      "unit": "cm",
      "explain": "On additionne tous les côtés : 3 + 4 + 4 + 5 + 6 = 22 cm."
    },
    {
      "type": "tf",
      "q": "Pour calculer le périmètre d'un polygone, on additionne les longueurs de tous ses côtés.",
      "answer": true,
      "explain": "Vrai : le périmètre est la longueur de tout le contour, c'est-à-dire la somme de tous les côtés."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces figures a pour périmètre P = côté × 4 ?",
      "options": [
        "Triangle équilatéral",
        "Losange",
        "Trapèze"
      ],
      "answer": 1,
      "explain": "Le losange a 4 côtés égaux, donc P = côté × 4. Le triangle équilatéral a 3 côtés égaux."
    },
    {
      "type": "num",
      "q": "Un rectangle est fait de 3 rangées de 6 carreaux de 1 cm² chacune. Quelle est son aire en cm² ?",
      "answer": 18,
      "unit": "cm²",
      "explain": "On compte les carreaux : 3 × 6 = 18 carreaux de 1 cm², soit 18 cm²."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le segment perpendiculaire à la base qui sert à calculer l'aire d'un triangle ou d'un parallélogramme ?",
      "answer": [
        "hauteur",
        "la hauteur"
      ],
      "explain": "C'est la hauteur (h) : elle part d'un sommet et arrive à la base en formant un angle droit."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un potager rectangulaire mesure 12 m de long et 8 m de large. Combien de mètres de clôture faut-il pour en faire tout le tour ?",
      "answer": 40,
      "unit": "m",
      "explain": "Périmètre : (12 + 8) × 2 = 20 × 2 = 40 m."
    },
    {
      "type": "num",
      "q": "Un mur rectangulaire de 3 m de haut et 7 m de large doit être peint. Un litre de peinture couvre 6 m². Combien de litres faut-il ?",
      "answer": 3.5,
      "tol": 0.01,
      "unit": "L",
      "explain": "Aire : 3 × 7 = 21 m². Litres : 21 : 6 = 3,5 L."
    },
    {
      "type": "mc",
      "q": "Un parallélogramme a une base de 9 cm et une hauteur de 4 cm. Quelle est son aire ?",
      "options": [
        "18 cm²",
        "36 cm²",
        "13 cm²"
      ],
      "answer": 1,
      "explain": "A = b × h = 9 × 4 = 36 cm². (On ne divise pas par 2 : cela vaut seulement pour le triangle.)"
    },
    {
      "type": "tf",
      "q": "Un rectangle de 6 cm × 2 cm a la même aire qu'un rectangle de 4 cm × 3 cm.",
      "answer": true,
      "explain": "Vrai : 6 × 2 = 12 cm² et 4 × 3 = 12 cm². Ils ont la même aire mais des périmètres différents (16 cm et 14 cm)."
    },
    {
      "type": "num",
      "q": "Un carré a un périmètre de 20 cm. Quelle est son aire ?",
      "answer": 25,
      "unit": "cm²",
      "explain": "Côté : 20 : 4 = 5 cm. Aire : 5 × 5 = 25 cm²."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un jardin est formé de deux zones rectangulaires séparées : une de 10 m × 6 m et une de 4 m × 3 m. Quelle est l'aire totale en m² ?",
      "answer": 72,
      "unit": "m²",
      "explain": "Première zone : 10 × 6 = 60 m². Deuxième zone : 4 × 3 = 12 m². Total : 60 + 12 = 72 m²."
    },
    {
      "type": "mc",
      "q": "Une pièce rectangulaire de 6 m × 4 m doit être recouverte de carreaux carrés de 50 cm de côté. Combien de carreaux faut-il ?",
      "options": [
        "48",
        "96",
        "24",
        "192"
      ],
      "answer": 1,
      "explain": "Sur 6 m il y a 12 carreaux (600 : 50), sur 4 m il y en a 8 (400 : 50) : 12 × 8 = 96. Ou : 24 m² : 0,25 m² = 96."
    },
    {
      "type": "tf",
      "q": "Si on double le côté d'un carré, son aire double aussi.",
      "answer": false,
      "explain": "Faux : l'aire devient 4 fois plus grande. Par exemple avec un côté de 3 cm l'aire est de 9 cm², avec un côté de 6 cm elle est de 36 cm²."
    },
    {
      "type": "num",
      "q": "Un rectangle a une base de 1,2 m et une hauteur de 80 cm. Quel est son périmètre en centimètres ?",
      "answer": 400,
      "unit": "cm",
      "explain": "Je convertis : 1,2 m = 120 cm. Périmètre : (120 + 80) × 2 = 200 × 2 = 400 cm."
    },
    {
      "type": "order",
      "q": "Classe les figures de l'aire la plus petite à la plus grande.",
      "items": [
        "Triangle : base 6 cm, hauteur 3 cm",
        "Rectangle : 3 cm × 4 cm",
        "Parallélogramme : base 5 cm, hauteur 3 cm",
        "Losange : diagonales 8 cm et 5 cm",
        "Carré : côté 5 cm"
      ],
      "explain": "Triangle 6 × 3 : 2 = 9 cm² ; rectangle 3 × 4 = 12 cm² ; parallélogramme 5 × 3 = 15 cm² ; losange 8 × 5 : 2 = 20 cm² ; carré 5 × 5 = 25 cm²."
    }
  ]
});
