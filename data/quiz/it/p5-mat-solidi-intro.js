QBANK("it", "p5-mat-solidi-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Quale solido ha due basi circolari?",
      "options": [
        "Cono",
        "Sfera",
        "Cilindro"
      ],
      "answer": 2,
      "explain": "Il cilindro ha due basi a forma di cerchio; il cono ne ha una sola e la sfera nessuna."
    },
    {
      "type": "tf",
      "q": "Un solido di rotazione ha almeno una superficie curva.",
      "answer": true,
      "explain": "Cilindro, cono e sfera hanno superfici curve: per questo possono rotolare."
    },
    {
      "type": "num",
      "q": "Quante facce ha un tetraedro?",
      "answer": 4,
      "explain": "Il tetraedro è una piramide a base triangolare: 1 base + 3 facce laterali = 4 facce."
    },
    {
      "type": "mc",
      "q": "Come si chiamano le «punte» di un poliedro, dove si incontrano più spigoli?",
      "options": [
        "Vertici",
        "Facce",
        "Basi"
      ],
      "answer": 0,
      "explain": "I vertici sono i punti in cui si incontrano gli spigoli."
    },
    {
      "type": "text",
      "q": "Quale solido ha la forma di una lattina di pelati?",
      "answer": [
        "cilindro",
        "il cilindro"
      ],
      "explain": "La lattina ha due basi circolari e una superficie laterale curva: è un cilindro."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Una scatola è lunga 6 cubetti, larga 2 e alta 4. Quanti cubetti contiene?",
      "answer": 48,
      "unit": "cubetti",
      "explain": "Uno strato: 6 × 2 = 12 cubetti. Ci sono 4 strati: 12 × 4 = 48."
    },
    {
      "type": "mc",
      "q": "Quante facce ha un prisma con la base a forma di esagono?",
      "options": [
        "6",
        "8",
        "12"
      ],
      "answer": 1,
      "explain": "Ha 2 basi esagonali e 6 facce laterali rettangolari: 2 + 6 = 8 (cioè n + 2 con n = 6)."
    },
    {
      "type": "tf",
      "q": "Una piramide con la base a forma di pentagono ha 6 facce.",
      "answer": true,
      "explain": "1 base + 5 facce laterali triangolari = 6 facce (n + 1 con n = 5)."
    },
    {
      "type": "num",
      "q": "Quanti spigoli ha un prisma a base triangolare?",
      "answer": 9,
      "explain": "3 spigoli nella base sopra + 3 nella base sotto + 3 verticali = 9."
    },
    {
      "type": "mc",
      "q": "Lo sviluppo di un cono è formato da…",
      "options": [
        "un settore circolare e un cerchio",
        "due cerchi e un rettangolo",
        "sei quadrati uguali"
      ],
      "answer": 0,
      "explain": "Il «ventaglio» (settore circolare) forma la parte laterale, il cerchio è la base. Due cerchi e un rettangolo sono lo sviluppo del cilindro."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un poliedro ha 7 facce e 10 vertici. Con la formula di Eulero (facce + vertici − spigoli = 2), quanti spigoli ha?",
      "answer": 15,
      "explain": "7 + 10 = 17; 17 − spigoli = 2, quindi gli spigoli sono 17 − 2 = 15 (è un prisma a base pentagonale)."
    },
    {
      "type": "mc",
      "q": "Un prisma e una piramide hanno la stessa base esagonale. Quanti vertici in più ha il prisma?",
      "options": [
        "3",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Il prisma ha 6 + 6 = 12 vertici, la piramide 6 + 1 = 7. La differenza è 12 − 7 = 5."
    },
    {
      "type": "tf",
      "q": "Un cubo e un tetraedro hanno lo stesso numero di spigoli.",
      "answer": false,
      "explain": "Il cubo ha 12 spigoli, il tetraedro solo 6: l'affermazione è falsa."
    },
    {
      "type": "num",
      "q": "Una scatola piena contiene 60 cubetti. È lunga 5 cubetti e larga 4. Quanti cubetti è alta?",
      "answer": 3,
      "unit": "cubetti",
      "explain": "Uno strato ha 5 × 4 = 20 cubetti. Gli strati sono 60 ÷ 20 = 3."
    },
    {
      "type": "order",
      "q": "Ordina questi poliedri dal numero di spigoli più piccolo al più grande.",
      "items": [
        "Tetraedro (6 spigoli)",
        "Piramide a base quadrata (8 spigoli)",
        "Cubo (12 spigoli)",
        "Prisma a base esagonale (18 spigoli)"
      ],
      "explain": "Il prisma esagonale ha 6 + 6 + 6 = 18 spigoli, il cubo 12, la piramide quadrata 4 + 4 = 8, il tetraedro 6."
    }
  ]
});
