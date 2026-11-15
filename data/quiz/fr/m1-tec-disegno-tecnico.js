QBANK("fr", "m1-tec-disegno-tecnico", {
  "f": [
    {
      "type": "mc",
      "q": "Quel instrument sert à mesurer les angles en degrés ?",
      "options": [
        "Le compas",
        "Le rapporteur",
        "La règle"
      ],
      "answer": 1,
      "explain": "Le rapporteur est un demi-cercle gradué de 0° à 180°."
    },
    {
      "type": "tf",
      "q": "L'échelle 1:1 signifie que le dessin a la même taille que l'objet réel.",
      "answer": true,
      "explain": "À l'échelle 1:1, 1 cm sur la feuille correspond à 1 cm en vrai : c'est l'échelle réelle."
    },
    {
      "type": "mc",
      "q": "Comment s'appelle le cadre en bas à droite avec le nom, le titre et l'échelle ?",
      "options": [
        "La cote",
        "L'encadrement",
        "Le cartouche"
      ],
      "answer": 2,
      "explain": "Le cartouche contient le nom, la classe, la date, le titre et l'échelle."
    },
    {
      "type": "num",
      "q": "Combien de millimètres mesure le grand côté d'une feuille A3 ?",
      "answer": 420,
      "unit": "mm",
      "explain": "A3 = 297 × 420 mm : le grand côté mesure 420 mm."
    },
    {
      "type": "text",
      "q": "Comment s'appelle l'instrument qui sert à tracer des cercles et des arcs ?",
      "answer": [
        "compas",
        "le compas",
        "un compas"
      ],
      "explain": "Le compas trace des cercles et des arcs et reporte les mesures."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un mur long de 3 m est dessiné à l'échelle 1:20. Quelle est sa longueur sur la feuille, en cm ?",
      "answer": 15,
      "unit": "cm",
      "explain": "3 m = 300 cm ; 300 : 20 = 15 cm."
    },
    {
      "type": "mc",
      "q": "Une fourmi de 6 mm est dessinée à l'échelle 10:1. Quelle est sa longueur sur le dessin ?",
      "options": [
        "6 mm",
        "60 mm",
        "0,6 mm"
      ],
      "answer": 1,
      "explain": "Échelle d'agrandissement : 6 × 10 = 60 mm."
    },
    {
      "type": "tf",
      "q": "Les lignes de cote se tracent avec un trait continu fin.",
      "answer": true,
      "explain": "Les cotes et les lignes de repère utilisent le trait continu fin."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre les étapes pour construire la bissectrice d'un angle.",
      "items": [
        "Pose le compas sur le sommet V et trace un arc qui coupe les deux côtés",
        "Pose-le sur le premier point d'intersection et trace un arc à l'intérieur de l'angle",
        "Avec la même ouverture, pose-le sur le deuxième point et croise l'arc en P",
        "Relie V et P"
      ],
      "explain": "D'abord l'arc depuis le sommet, puis les deux arcs qui se croisent en P, enfin la droite de V à P."
    },
    {
      "type": "num",
      "q": "Combien de feuilles A4 faut-il pour couvrir exactement une feuille A2 ?",
      "answer": 4,
      "explain": "Chaque format est la moitié du précédent : A2 = 2 × A3 = 4 × A4."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un jardin rectangulaire de 12 m × 8 m est dessiné à l'échelle 1:200. Quelle est l'aire du rectangle sur la feuille, en cm² ?",
      "answer": 24,
      "unit": "cm²",
      "explain": "12 m = 1200 cm → 1200 : 200 = 6 cm ; 8 m = 800 cm → 800 : 200 = 4 cm. Aire = 6 × 4 = 24 cm²."
    },
    {
      "type": "mc",
      "q": "Une pièce de 3 mm est dessinée avec une longueur de 12 mm. Quelle échelle a été utilisée ?",
      "options": [
        "1:4",
        "4:1",
        "12:1"
      ],
      "answer": 1,
      "explain": "12 : 3 = 4 : le dessin est 4 fois plus grand, donc l'échelle d'agrandissement est 4:1."
    },
    {
      "type": "tf",
      "q": "Julie dessine une porte de 2 m de haut à l'échelle 1:10 et écrit 200 sur la cote. Elle a bien fait.",
      "answer": false,
      "explain": "C'est faux : la cote indique toujours la mesure réelle en millimètres, donc 2000, même si le dessin est à l'échelle."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre les étapes pour dessiner un hexagone régulier au compas.",
      "items": [
        "Trace un cercle",
        "Avec la même ouverture (le rayon), pose le compas sur un point du cercle et marque un arc",
        "Répète de point en point, jusqu'à avoir 6 points",
        "Relie les 6 points avec la règle"
      ],
      "explain": "Le côté de l'hexagone est égal au rayon : on reporte le rayon 6 fois puis on relie les points."
    },
    {
      "type": "mc",
      "q": "Pourquoi, pour construire la médiatrice de AB, l'ouverture du compas doit-elle être plus grande que la moitié de AB ?",
      "options": [
        "Pour que le dessin soit plus grand",
        "Parce que la pointe du compas s'abîme",
        "Sinon les arcs tracés depuis A et depuis B ne se croisent pas"
      ],
      "answer": 2,
      "explain": "Si l'ouverture était plus petite que la moitié de AB, les deux arcs ne se rencontreraient pas et on ne trouverait pas les points pour tracer la médiatrice."
    }
  ]
});
