QBANK("it", "m1-mat-geometria-base", {
  "f": [
    {
      "type": "mc",
      "q": "Quale di questi enti geometrici si può misurare con il righello?",
      "options": [
        "La retta",
        "La semiretta",
        "Il segmento"
      ],
      "answer": 2,
      "explain": "Retta e semiretta sono illimitate; il segmento ha due estremi e quindi una lunghezza."
    },
    {
      "type": "tf",
      "q": "Un angolo retto misura 90°.",
      "answer": true,
      "explain": "L'angolo retto è formato da due semirette perpendicolari e misura 90°."
    },
    {
      "type": "mc",
      "q": "Come si chiama l'angolo che misura 180°?",
      "options": [
        "Angolo giro",
        "Angolo piatto",
        "Angolo retto"
      ],
      "answer": 1,
      "explain": "Le due semirette sono sulla stessa retta: l'angolo è piatto e vale 180°."
    },
    {
      "type": "num",
      "q": "Quanti gradi misura un angolo giro?",
      "answer": 360,
      "unit": "°",
      "explain": "Un angolo giro è un giro completo: 360°."
    },
    {
      "type": "text",
      "q": "Come si chiama il punto che divide un segmento in due segmenti congruenti?",
      "answer": [
        "punto medio",
        "il punto medio"
      ],
      "explain": "Il punto medio M di AB è tale che AM ≅ MB."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Su una retta i punti A, B, C si trovano in quest'ordine. AB = 4,5 cm e AC = 11 cm. Quanto misura BC?",
      "answer": 6.5,
      "tol": 0.01,
      "unit": "cm",
      "explain": "BC = AC − AB = 11 − 4,5 = 6,5 cm."
    },
    {
      "type": "num",
      "q": "Due angoli sono supplementari e uno è il doppio dell'altro. Quanto misura l'angolo più piccolo?",
      "answer": 60,
      "unit": "°",
      "explain": "Somma 180° divisa in 3 parti uguali (1 + 2): 180 : 3 = 60°. L'altro misura 120°."
    },
    {
      "type": "mc",
      "q": "Due angoli consecutivi che insieme formano un angolo piatto si dicono…",
      "options": [
        "complementari",
        "adiacenti",
        "opposti al vertice"
      ],
      "answer": 1,
      "explain": "Due angoli consecutivi i cui lati non comuni stanno sulla stessa retta sono adiacenti e la loro somma è 180°."
    },
    {
      "type": "tf",
      "q": "Il punto medio di un segmento lungo 15 cm lo divide in due parti da 7,5 cm ciascuna.",
      "answer": true,
      "explain": "15 : 2 = 7,5 cm."
    },
    {
      "type": "mc",
      "q": "Quanto fa 90° − 36°40′ ?",
      "options": [
        "54°20′",
        "53°40′",
        "53°20′"
      ],
      "answer": 2,
      "explain": "90° = 89°60′. Allora 89°60′ − 36°40′ = 53°20′."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Sulla stessa retta ci sono i punti A, B, C, D in quest'ordine. AB = 6 cm, BC è il doppio di AB e CD è la metà di BC. Quanto misura AD?",
      "answer": 24,
      "unit": "cm",
      "explain": "BC = 6 × 2 = 12 cm; CD = 12 : 2 = 6 cm; AD = 6 + 12 + 6 = 24 cm."
    },
    {
      "type": "num",
      "q": "A, B, C sono allineati in quest'ordine e AC = 30 cm. M è il punto medio di AB e N è il punto medio di BC. Quanto misura MN?",
      "answer": 15,
      "unit": "cm",
      "explain": "MB = AB : 2 e BN = BC : 2, quindi MN = (AB + BC) : 2 = AC : 2 = 15 cm."
    },
    {
      "type": "mc",
      "q": "Due angoli adiacenti differiscono di 40°. Quanto misura il maggiore?",
      "options": [
        "70°",
        "140°",
        "110°"
      ],
      "answer": 2,
      "explain": "Somma 180°, differenza 40°: il maggiore è (180 + 40) : 2 = 110°, il minore 70°."
    },
    {
      "type": "tf",
      "q": "Due angoli opposti al vertice sono sempre congruenti, mentre due angoli adiacenti non sono mai congruenti.",
      "answer": false,
      "explain": "Gli angoli adiacenti possono essere congruenti: due angoli retti da 90° sono adiacenti e uguali."
    },
    {
      "type": "order",
      "q": "Metti in ordine i passi per trovare il punto medio di un segmento AB con riga e compasso.",
      "items": [
        "Punto il compasso in A e, con apertura maggiore di metà AB, traccio un arco",
        "Con la stessa apertura punto in B e traccio un secondo arco",
        "Segno i due punti in cui gli archi si incrociano",
        "Unisco i due punti: la retta taglia AB nel punto medio"
      ],
      "explain": "Gli archi dalle due estremità si incrociano in due punti allineati con il punto medio: la retta che li unisce taglia AB a metà."
    }
  ]
});
