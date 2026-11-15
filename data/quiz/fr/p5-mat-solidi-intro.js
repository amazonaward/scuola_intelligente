QBANK("fr", "p5-mat-solidi-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Quel solide a deux bases circulaires ?",
      "options": [
        "Cône",
        "Sphère",
        "Cylindre"
      ],
      "answer": 2,
      "explain": "Le cylindre a deux bases en forme de cercle ; le cône n'en a qu'une et la sphère aucune."
    },
    {
      "type": "tf",
      "q": "Un solide de révolution a au moins une surface courbe.",
      "answer": true,
      "explain": "Cylindre, cône et sphère ont des surfaces courbes : c'est pourquoi ils peuvent rouler."
    },
    {
      "type": "num",
      "q": "Combien de faces a un tétraèdre ?",
      "answer": 4,
      "explain": "Le tétraèdre est une pyramide à base triangulaire : 1 base + 3 faces latérales = 4 faces."
    },
    {
      "type": "mc",
      "q": "Comment s'appellent les « pointes » d'un polyèdre, où se rencontrent plusieurs arêtes ?",
      "options": [
        "Sommets",
        "Faces",
        "Bases"
      ],
      "answer": 0,
      "explain": "Les sommets sont les points où se rencontrent les arêtes."
    },
    {
      "type": "text",
      "q": "Quel solide a la forme d'une boîte de conserve de tomates ?",
      "answer": [
        "cylindre",
        "un cylindre",
        "le cylindre"
      ],
      "explain": "La boîte a deux bases circulaires et une surface latérale courbe : c'est un cylindre."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Une boîte mesure 6 cubes de long, 2 de large et 4 de haut. Combien de cubes contient-elle ?",
      "answer": 48,
      "unit": "cubes",
      "explain": "Une couche : 6 × 2 = 12 cubes. Il y a 4 couches : 12 × 4 = 48."
    },
    {
      "type": "mc",
      "q": "Combien de faces a un prisme dont la base est un hexagone ?",
      "options": [
        "6",
        "8",
        "12"
      ],
      "answer": 1,
      "explain": "Il a 2 bases hexagonales et 6 faces latérales rectangulaires : 2 + 6 = 8 (soit n + 2 avec n = 6)."
    },
    {
      "type": "tf",
      "q": "Une pyramide dont la base est un pentagone a 6 faces.",
      "answer": true,
      "explain": "1 base + 5 faces latérales triangulaires = 6 faces (n + 1 avec n = 5)."
    },
    {
      "type": "num",
      "q": "Combien d'arêtes a un prisme à base triangulaire ?",
      "answer": 9,
      "explain": "3 arêtes sur la base du haut + 3 sur celle du bas + 3 verticales = 9."
    },
    {
      "type": "mc",
      "q": "Le patron d'un cône est formé de…",
      "options": [
        "un secteur circulaire et un cercle",
        "deux cercles et un rectangle",
        "six carrés égaux"
      ],
      "answer": 0,
      "explain": "L'« éventail » (secteur circulaire) forme la partie latérale, le cercle est la base. Deux cercles et un rectangle forment le patron du cylindre."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un polyèdre a 7 faces et 10 sommets. Avec la formule d'Euler (faces + sommets − arêtes = 2), combien d'arêtes a-t-il ?",
      "answer": 15,
      "explain": "7 + 10 = 17 ; 17 − arêtes = 2, donc arêtes = 17 − 2 = 15 (c'est un prisme à base pentagonale)."
    },
    {
      "type": "mc",
      "q": "Un prisme et une pyramide ont la même base hexagonale. Combien de sommets de plus a le prisme ?",
      "options": [
        "3",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Le prisme a 6 + 6 = 12 sommets, la pyramide 6 + 1 = 7. La différence est 12 − 7 = 5."
    },
    {
      "type": "tf",
      "q": "Un cube et un tétraèdre ont le même nombre d'arêtes.",
      "answer": false,
      "explain": "Le cube a 12 arêtes, le tétraèdre seulement 6 : l'affirmation est fausse."
    },
    {
      "type": "num",
      "q": "Une boîte pleine contient 60 cubes. Elle mesure 5 cubes de long et 4 de large. Combien de cubes de haut mesure-t-elle ?",
      "answer": 3,
      "unit": "cubes",
      "explain": "Une couche compte 5 × 4 = 20 cubes. Le nombre de couches est 60 ÷ 20 = 3."
    },
    {
      "type": "order",
      "q": "Range ces polyèdres du plus petit nombre d'arêtes au plus grand.",
      "items": [
        "Tétraèdre (6 arêtes)",
        "Pyramide à base carrée (8 arêtes)",
        "Cube (12 arêtes)",
        "Prisme à base hexagonale (18 arêtes)"
      ],
      "explain": "Le prisme hexagonal a 6 + 6 + 6 = 18 arêtes, le cube 12, la pyramide carrée 4 + 4 = 8, le tétraèdre 6."
    }
  ]
});
