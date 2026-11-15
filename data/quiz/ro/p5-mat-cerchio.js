QBANK("ro", "p5-mat-cerchio", {
  "f": [
    {
      "type": "mc",
      "q": "Cum se numește punctul aflat la aceeași distanță de toate punctele cercului (circumferinței)?",
      "options": [
        "arc",
        "centru",
        "sector"
      ],
      "answer": 1,
      "explain": "Centrul este punctul în care se înfige acul compasului: toate punctele circumferinței sunt la aceeași distanță de el."
    },
    {
      "type": "tf",
      "q": "Diametrul este de două ori mai lung decât raza.",
      "answer": true,
      "explain": "Adevărat: d = r × 2. Diametrul este format din două raze puse cap la cap."
    },
    {
      "type": "num",
      "q": "O roată are raza de 8 cm. Cât măsoară diametrul ei?",
      "answer": 16,
      "unit": "cm",
      "explain": "d = r × 2 = 8 × 2 = 16 cm."
    },
    {
      "type": "mc",
      "q": "Segmentul care unește două puncte oarecare ale circumferinței se numește…",
      "options": [
        "arc",
        "sector",
        "coardă"
      ],
      "answer": 2,
      "explain": "Segmentul care unește două puncte ale circumferinței este o coardă. Arcul, în schimb, este o bucată din circumferință."
    },
    {
      "type": "text",
      "q": "Cu ce instrument se desenează un cerc?",
      "answer": [
        "compas",
        "compasul",
        "compasul geometric",
        "un compas"
      ],
      "explain": "Se folosește compasul: acul rămâne fix în centru, iar mina se rotește în jurul lui."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "O pizza are diametrul de 30 cm. Cât este lungimea circumferinței ei (marginea)? (π = 3,14)",
      "answer": 94.2,
      "unit": "cm",
      "explain": "C = d × 3,14 = 30 × 3,14 = 94,2 cm."
    },
    {
      "type": "mc",
      "q": "Un cerc are raza de 4 dm. Care calcul dă lungimea circumferinței?",
      "options": [
        "4 × 3,14",
        "4 × 2 × 3,14",
        "4 × 4 × 3,14"
      ],
      "answer": 1,
      "explain": "C = r × 2 × 3,14. Ultimul calcul (r × r × 3,14) ar da aria, nu lungimea marginii."
    },
    {
      "type": "num",
      "q": "O roată de bicicletă are diametrul de 70 cm. Câți metri parcurge bicicleta în 10 rotații complete ale roții? (π = 3,14)",
      "answer": 21.98,
      "tol": 0.01,
      "unit": "m",
      "explain": "O rotație: 70 × 3,14 = 219,8 cm. 10 rotații: 2198 cm = 21,98 m."
    },
    {
      "type": "tf",
      "q": "Dacă raza unui cerc se dublează, se dublează și lungimea circumferinței.",
      "answer": true,
      "explain": "Adevărat: C = r × 2 × 3,14, deci dacă r devine dublu, și C devine dublu."
    },
    {
      "type": "num",
      "q": "O circumferință măsoară 62,8 cm. Cât măsoară raza ei? (π = 3,14)",
      "answer": 10,
      "unit": "cm",
      "explain": "Diametrul: 62,8 : 3,14 = 20 cm. Raza: 20 : 2 = 10 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "O pistă rotundă are diametrul de 80 m. Marco aleargă 3 ture pe marginea ei. Câți metri aleargă? (π = 3,14)",
      "answer": 753.6,
      "tol": 0.01,
      "unit": "m",
      "explain": "O tură: 80 × 3,14 = 251,2 m. Trei ture: 251,2 × 3 = 753,6 m."
    },
    {
      "type": "mc",
      "q": "Într-o rotație completă, o roată parcurge 157 cm. Cât este diametrul ei? (π = 3,14)",
      "options": [
        "25 cm",
        "50 cm",
        "78,5 cm",
        "100 cm"
      ],
      "answer": 1,
      "explain": "d = C : 3,14 = 157 : 3,14 = 50 cm. Atenție: 25 cm ar fi raza."
    },
    {
      "type": "tf",
      "q": "60 cm de panglică ajung ca să faci înconjurul unui blat rotund cu diametrul de 20 cm.",
      "answer": false,
      "explain": "Fals: circumferința este 20 × 3,14 = 62,8 cm, mai mult de 60 cm."
    },
    {
      "type": "num",
      "q": "O pizza are diametrul de 40 cm. Care este aria ei? (A = r × r × 3,14)",
      "answer": 1256,
      "tol": 0.01,
      "unit": "cm²",
      "explain": "Raza: 40 : 2 = 20 cm. Aria: 20 × 20 × 3,14 = 400 × 3,14 = 1256 cm²."
    },
    {
      "type": "order",
      "q": "Ordonează de la cea mai scurtă la cea mai lungă circumferință. (π = 3,14)",
      "items": [
        "Diametru 10 cm",
        "Rază 7 cm",
        "Diametru 20 cm",
        "Rază 15 cm"
      ],
      "explain": "Diametru 10 → 31,4 cm; rază 7 (d = 14) → 43,96 cm; diametru 20 → 62,8 cm; rază 15 (d = 30) → 94,2 cm."
    }
  ]
});
