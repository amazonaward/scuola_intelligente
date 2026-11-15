QBANK("ro", "p5-mat-solidi-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Care corp are două baze circulare?",
      "options": [
        "Con",
        "Sferă",
        "Cilindru"
      ],
      "answer": 2,
      "explain": "Cilindrul are două baze în formă de cerc; conul are doar una, iar sfera niciuna."
    },
    {
      "type": "tf",
      "q": "Un corp de rotație are cel puțin o suprafață curbă.",
      "answer": true,
      "explain": "Cilindrul, conul și sfera au suprafețe curbe: de aceea pot să se rostogolească."
    },
    {
      "type": "num",
      "q": "Câte fețe are un tetraedru?",
      "answer": 4,
      "explain": "Tetraedrul este o piramidă cu baza triunghiulară: 1 bază + 3 fețe laterale = 4 fețe."
    },
    {
      "type": "mc",
      "q": "Cum se numesc «vârfurile» unui poliedru, unde se întâlnesc mai multe muchii?",
      "options": [
        "Vârfuri",
        "Fețe",
        "Baze"
      ],
      "answer": 0,
      "explain": "Vârfurile sunt punctele în care se întâlnesc muchiile."
    },
    {
      "type": "text",
      "q": "Ce corp are forma unei conserve de roșii?",
      "answer": [
        "cilindru",
        "un cilindru",
        "cilindrul"
      ],
      "explain": "Conserva are două baze circulare și o suprafață laterală curbă: este un cilindru."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "O cutie are lungimea de 6 cubulețe, lățimea de 2 și înălțimea de 4. Câte cubulețe încap în ea?",
      "answer": 48,
      "unit": "cubulețe",
      "explain": "Un strat: 6 × 2 = 12 cubulețe. Sunt 4 straturi: 12 × 4 = 48."
    },
    {
      "type": "mc",
      "q": "Câte fețe are o prismă cu baza hexagonală?",
      "options": [
        "6",
        "8",
        "12"
      ],
      "answer": 1,
      "explain": "Are 2 baze hexagonale și 6 fețe laterale dreptunghiulare: 2 + 6 = 8 (adică n + 2, cu n = 6)."
    },
    {
      "type": "tf",
      "q": "O piramidă cu baza pentagonală are 6 fețe.",
      "answer": true,
      "explain": "1 bază + 5 fețe laterale triunghiulare = 6 fețe (n + 1, cu n = 5)."
    },
    {
      "type": "num",
      "q": "Câte muchii are o prismă cu baza triunghiulară?",
      "answer": 9,
      "explain": "3 muchii pe baza de sus + 3 pe baza de jos + 3 verticale = 9."
    },
    {
      "type": "mc",
      "q": "Desfășurarea unui con este formată din…",
      "options": [
        "un sector de cerc și un cerc",
        "două cercuri și un dreptunghi",
        "șase pătrate egale"
      ],
      "answer": 0,
      "explain": "„Evantaiul” (sectorul de cerc) formează partea laterală, cercul este baza. Două cercuri și un dreptunghi alcătuiesc desfășurarea cilindrului."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un poliedru are 7 fețe și 10 vârfuri. Cu formula lui Euler (fețe + vârfuri − muchii = 2), câte muchii are?",
      "answer": 15,
      "explain": "7 + 10 = 17; 17 − muchii = 2, deci muchiile sunt 17 − 2 = 15 (este o prismă pentagonală)."
    },
    {
      "type": "mc",
      "q": "O prismă și o piramidă au aceeași bază hexagonală. Cu câte vârfuri mai multe are prisma?",
      "options": [
        "3",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Prisma are 6 + 6 = 12 vârfuri, piramida 6 + 1 = 7. Diferența este 12 − 7 = 5."
    },
    {
      "type": "tf",
      "q": "Un cub și un tetraedru au același număr de muchii.",
      "answer": false,
      "explain": "Cubul are 12 muchii, tetraedrul doar 6: afirmația este falsă."
    },
    {
      "type": "num",
      "q": "O cutie plină conține 60 de cubulețe. Are lungimea de 5 cubulețe și lățimea de 4. Câte cubulețe are în înălțime?",
      "answer": 3,
      "unit": "cubulețe",
      "explain": "Un strat are 5 × 4 = 20 cubulețe. Numărul de straturi este 60 ÷ 20 = 3."
    },
    {
      "type": "order",
      "q": "Ordonează aceste poliedre de la cel mai mic număr de muchii la cel mai mare.",
      "items": [
        "Tetraedru (6 muchii)",
        "Piramidă cu baza pătrată (8 muchii)",
        "Cub (12 muchii)",
        "Prismă hexagonală (18 muchii)"
      ],
      "explain": "Prisma hexagonală are 6 + 6 + 6 = 18 muchii, cubul 12, piramida pătrată 4 + 4 = 8, tetraedrul 6."
    }
  ]
});
