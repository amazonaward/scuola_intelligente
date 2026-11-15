QBANK("ro", "p4-mat-perimetro", {
  "f": [
    {
      "type": "tf",
      "q": "Perimetrul măsoară spațiul din interiorul unei figuri.",
      "answer": false,
      "explain": "Nu: perimetrul este lungimea conturului, adică măsura din jurul figurii."
    },
    {
      "type": "num",
      "q": "Un triunghi echilateral are latura de 8 cm. Care este perimetrul lui?",
      "answer": 24,
      "unit": "cm",
      "explain": "Cele 3 laturi sunt egale: 8 × 3 = 24 cm."
    },
    {
      "type": "mc",
      "q": "Ce operație se folosește pentru a afla perimetrul unui pătrat?",
      "options": [
        "latura : 4",
        "latura + 4",
        "latura × 4"
      ],
      "answer": 2,
      "explain": "Pătratul are 4 laturi egale, deci P = latura × 4."
    },
    {
      "type": "mc",
      "q": "Pentru a pune un gard în jurul unei grădini trebuie să știi…",
      "options": [
        "greutatea",
        "perimetrul",
        "culoarea"
      ],
      "answer": 1,
      "explain": "Gardul merge în jurul întregii grădini: ai nevoie de lungimea conturului, adică perimetrul."
    },
    {
      "type": "text",
      "q": "Cum se numește poligonul cu 4 laturi egale și 4 unghiuri drepte?",
      "answer": [
        "pătrat",
        "pătratul",
        "un pătrat"
      ],
      "explain": "Pătratul are 4 laturi egale și 4 unghiuri drepte."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un cadru dreptunghiular măsoară 30 cm pe 20 cm. Câți centimetri de lemn sunt necesari pentru toate laturile?",
      "answer": 100,
      "unit": "cm",
      "explain": "(30 + 20) × 2 = 50 × 2 = 100 cm."
    },
    {
      "type": "num",
      "q": "Un triunghi isoscel are baza de 12 cm și fiecare latură oblică de 10 cm. Care este perimetrul?",
      "answer": 32,
      "unit": "cm",
      "explain": "12 + 10 × 2 = 12 + 20 = 32 cm."
    },
    {
      "type": "mc",
      "q": "Perimetrul unui romb este 36 cm. Cât măsoară o latură?",
      "options": [
        "9 cm",
        "12 cm",
        "6 cm"
      ],
      "answer": 0,
      "explain": "Rombul are 4 laturi egale: 36 : 4 = 9 cm."
    },
    {
      "type": "tf",
      "q": "Un dreptunghi cu laturile de 8 cm și 2 cm și un pătrat cu latura de 5 cm au același perimetru.",
      "answer": true,
      "explain": "Dreptunghi: (8 + 2) × 2 = 20 cm. Pătrat: 5 × 4 = 20 cm. Figuri diferite pot avea același perimetru."
    },
    {
      "type": "num",
      "q": "Maria merge de 3 ori în jurul unui strat de flori pătrat cu latura de 6 m. Câți metri parcurge?",
      "answer": 72,
      "unit": "m",
      "explain": "Un tur: 6 × 4 = 24 m. Trei ture: 24 × 3 = 72 m."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un dreptunghi are perimetrul de 56 cm, iar baza este de trei ori mai mare decât înălțimea. Cât măsoară baza?",
      "answer": 21,
      "unit": "cm",
      "explain": "b + h = 56 : 2 = 28 cm. Baza are 3 părți, înălțimea 1 parte: 4 părți = 28 cm, deci 1 parte = 7 cm. Baza = 7 × 3 = 21 cm."
    },
    {
      "type": "num",
      "q": "Un triunghi isoscel are perimetrul de 40 cm, iar baza măsoară 12 cm. Cât măsoară fiecare latură oblică?",
      "answer": 14,
      "unit": "cm",
      "explain": "Cele două laturi oblice împreună: 40 − 12 = 28 cm. Fiecare: 28 : 2 = 14 cm."
    },
    {
      "type": "num",
      "q": "O pistă dreptunghiulară are lungimea de 120 m și lățimea de 80 m. Marco o parcurge de 3 ori. Câți kilometri aleargă?",
      "answer": 1.2,
      "unit": "km",
      "explain": "Un tur: (120 + 80) × 2 = 400 m. Trei ture: 1200 m = 1,2 km."
    },
    {
      "type": "mc",
      "q": "Luca calculează perimetrul unui dreptunghi cu baza de 8 cm și înălțimea de 5 cm așa: 8 + 5 × 2 = 18 cm. Unde este greșeala?",
      "options": [
        "Rezultatul este corect",
        "Trebuia să facă 8 × 5 = 40 cm",
        "Trebuia să facă (8 + 5) × 2 = 26 cm: se adună cele două măsuri și totalul se dublează"
      ],
      "answer": 2,
      "explain": "Dreptunghiul are 2 baze și 2 înălțimi: perimetrul este (8 + 5) × 2 = 26 cm. Fără paranteze, 8 + 5 × 2 numără o singură bază."
    },
    {
      "type": "order",
      "q": "Așază aceste figuri în ordine, de la cel mai mic perimetru la cel mai mare.",
      "items": [
        "Pătrat cu latura de 4 cm",
        "Triunghi echilateral cu latura de 6 cm",
        "Dreptunghi 7 cm × 3 cm",
        "Hexagon regulat cu latura de 4 cm",
        "Pentagon regulat cu latura de 6 cm"
      ],
      "explain": "Perimetre: 4 × 4 = 16 cm; 6 × 3 = 18 cm; (7 + 3) × 2 = 20 cm; 4 × 6 = 24 cm; 6 × 5 = 30 cm."
    }
  ]
});
