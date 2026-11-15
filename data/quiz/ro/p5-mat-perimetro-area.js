QBANK("ro", "p5-mat-perimetro-area", {
  "f": [
    {
      "type": "num",
      "q": "Un pentagon are laturile de 3 cm, 4 cm, 4 cm, 5 cm și 6 cm. Cât este perimetrul?",
      "answer": 22,
      "unit": "cm",
      "explain": "Adunăm toate laturile: 3 + 4 + 4 + 5 + 6 = 22 cm."
    },
    {
      "type": "tf",
      "q": "Pentru a calcula perimetrul unui poligon se adună lungimile tuturor laturilor sale.",
      "answer": true,
      "explain": "Adevărat: perimetrul este lungimea întregului contur, adică suma tuturor laturilor."
    },
    {
      "type": "mc",
      "q": "Care dintre aceste figuri are perimetrul P = latură × 4?",
      "options": [
        "Triunghi echilateral",
        "Romb",
        "Trapez"
      ],
      "answer": 1,
      "explain": "Rombul are 4 laturi egale, deci P = latură × 4. Triunghiul echilateral are 3 laturi egale."
    },
    {
      "type": "num",
      "q": "Un dreptunghi este făcut din 3 rânduri cu câte 6 pătrățele de 1 cm². Cât este aria lui?",
      "answer": 18,
      "unit": "cm²",
      "explain": "Numărăm pătrățelele: 3 × 6 = 18 pătrățele de 1 cm², adică 18 cm²."
    },
    {
      "type": "text",
      "q": "Cum se numește segmentul perpendicular pe bază, folosit pentru a calcula aria unui triunghi sau a unui paralelogram?",
      "answer": [
        "înălțime",
        "înălțimea",
        "inaltime",
        "inaltimea"
      ],
      "explain": "Este înălțimea (h): pornește dintr-un vârf și ajunge la bază formând un unghi drept."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "O grădină de legume dreptunghiulară are lungimea de 12 m și lățimea de 8 m. Câți metri de gard trebuie ca să o înconjori complet?",
      "answer": 40,
      "unit": "m",
      "explain": "Perimetrul: (12 + 8) × 2 = 20 × 2 = 40 m."
    },
    {
      "type": "num",
      "q": "Un perete dreptunghiular înalt de 3 m și lat de 7 m trebuie vopsit. Un litru de vopsea acoperă 6 m². Câți litri trebuie?",
      "answer": 3.5,
      "tol": 0.01,
      "unit": "L",
      "explain": "Aria: 3 × 7 = 21 m². Litri: 21 : 6 = 3,5 L."
    },
    {
      "type": "mc",
      "q": "Un paralelogram are baza de 9 cm și înălțimea de 4 cm. Care este aria lui?",
      "options": [
        "18 cm²",
        "36 cm²",
        "13 cm²"
      ],
      "answer": 1,
      "explain": "A = b × h = 9 × 4 = 36 cm². (Nu se împarte la 2: asta se face doar la triunghi.)"
    },
    {
      "type": "tf",
      "q": "Un dreptunghi de 6 cm × 2 cm are aceeași arie ca un dreptunghi de 4 cm × 3 cm.",
      "answer": true,
      "explain": "Adevărat: 6 × 2 = 12 cm² și 4 × 3 = 12 cm². Au aceeași arie, dar perimetre diferite (16 cm și 14 cm)."
    },
    {
      "type": "num",
      "q": "Un pătrat are perimetrul de 20 cm. Cât este aria lui?",
      "answer": 25,
      "unit": "cm²",
      "explain": "Latura: 20 : 4 = 5 cm. Aria: 5 × 5 = 25 cm²."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "O grădină este formată din două zone dreptunghiulare separate: una de 10 m × 6 m și una de 4 m × 3 m. Care este aria totală în m²?",
      "answer": 72,
      "unit": "m²",
      "explain": "Prima zonă: 10 × 6 = 60 m². A doua zonă: 4 × 3 = 12 m². Total: 60 + 12 = 72 m²."
    },
    {
      "type": "mc",
      "q": "O cameră dreptunghiulară de 6 m × 4 m trebuie acoperită cu plăci pătrate cu latura de 50 cm. Câte plăci trebuie?",
      "options": [
        "48",
        "96",
        "24",
        "192"
      ],
      "answer": 1,
      "explain": "Pe 6 m încap 12 plăci (600 : 50), pe 4 m încap 8 (400 : 50): 12 × 8 = 96. Sau: 24 m² : 0,25 m² = 96."
    },
    {
      "type": "tf",
      "q": "Dacă dublezi latura unui pătrat, se dublează și aria lui.",
      "answer": false,
      "explain": "Fals: aria devine de 4 ori mai mare. De exemplu, cu latura de 3 cm aria este 9 cm², cu latura de 6 cm este 36 cm²."
    },
    {
      "type": "num",
      "q": "Un dreptunghi are baza de 1,2 m și înălțimea de 80 cm. Cât este perimetrul lui în centimetri?",
      "answer": 400,
      "unit": "cm",
      "explain": "Transform: 1,2 m = 120 cm. Perimetrul: (120 + 80) × 2 = 200 × 2 = 400 cm."
    },
    {
      "type": "order",
      "q": "Ordonează figurile de la cea mai mică arie la cea mai mare.",
      "items": [
        "Triunghi: baza 6 cm, înălțimea 3 cm",
        "Dreptunghi: 3 cm × 4 cm",
        "Paralelogram: baza 5 cm, înălțimea 3 cm",
        "Romb: diagonale 8 cm și 5 cm",
        "Pătrat: latura 5 cm"
      ],
      "explain": "Triunghi 6 × 3 : 2 = 9 cm²; dreptunghi 3 × 4 = 12 cm²; paralelogram 5 × 3 = 15 cm²; romb 8 × 5 : 2 = 20 cm²; pătrat 5 × 5 = 25 cm²."
    }
  ]
});
