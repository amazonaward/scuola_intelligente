QBANK("ro", "p4-mat-numeri-decimali", {
  "f": [
    {
      "type": "mc",
      "q": "Cum se citește 0,8?",
      "options": [
        "opt zecimi",
        "opt sutimi",
        "opt miimi"
      ],
      "answer": 0,
      "explain": "Prima cifră după virgulă arată zecimile: 0,8 = 8 zecimi."
    },
    {
      "type": "tf",
      "q": "În numărul 8,6 cifra 6 arată sutimile.",
      "answer": false,
      "explain": "Este prima cifră după virgulă, deci arată zecimile (6 zecimi)."
    },
    {
      "type": "num",
      "q": "Cât face 0,5 + 0,3?",
      "answer": 0.8,
      "explain": "5 zecimi + 3 zecimi = 8 zecimi, adică 0,8."
    },
    {
      "type": "text",
      "q": "Cum se numește semnul care separă partea întreagă de partea zecimală a unui număr (în Italia)?",
      "answer": [
        "virgulă",
        "virgula",
        "virgulă zecimală"
      ],
      "explain": "În Italia se folosește virgula (3,14); în alte țări se folosește punctul (3.14)."
    },
    {
      "type": "mc",
      "q": "Care număr este egal cu 2,50?",
      "options": [
        "2,05",
        "2,5",
        "25"
      ],
      "answer": 1,
      "explain": "Zerourile de la sfârșit, după virgulă, nu schimbă valoarea: 2,50 = 2,5."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Cât face 7,25 − 2,5?",
      "answer": 4.75,
      "explain": "Așază virgulă sub virgulă: 7,25 − 2,50 = 4,75."
    },
    {
      "type": "mc",
      "q": "Care număr se află între 3,4 și 3,5?",
      "options": [
        "3,6",
        "3,3",
        "3,45"
      ],
      "answer": 2,
      "explain": "3,4 = 3,40 și 3,5 = 3,50: 3,45 se află la mijloc."
    },
    {
      "type": "num",
      "q": "Cât face 735 : 100?",
      "answer": 7.35,
      "explain": "Împărțirea la 100 mută virgula cu 2 locuri spre stânga: 7,35."
    },
    {
      "type": "tf",
      "q": "0,7 este mai mare decât 0,65.",
      "answer": true,
      "explain": "0,7 = 0,70 și 70 de sutimi sunt mai mult decât 65 de sutimi (7 zecimi față de 6 zecimi)."
    },
    {
      "type": "num",
      "q": "Un creion are lungimea de 0,175 m. Câți milimetri sunt?",
      "answer": 175,
      "unit": "mm",
      "explain": "1 m = 1000 mm, deci 0,175 × 1000 = 175 mm (virgula se mută cu 3 locuri)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia cumpără 2 caiete de câte 1,35 € și un pix de 0,95 €. Plătește cu 5 €. Cât rest primește?",
      "answer": 1.35,
      "unit": "€",
      "explain": "Caiete: 1,35 + 1,35 = 2,70 €. Cu pixul: 2,70 + 0,95 = 3,65 €. Rest: 5 − 3,65 = 1,35 €."
    },
    {
      "type": "mc",
      "q": "Luca calculează 6,3 + 4,25 și scrie 10,28. Ce greșeală a făcut?",
      "options": [
        "A greșit adunând partea întreagă",
        "Rezultatul este corect",
        "A adunat 3 și 25 ca numere întregi: trebuia să le așeze în coloană 6,30 + 4,25 = 10,55"
      ],
      "answer": 2,
      "explain": "3 zecimi și 25 de sutimi nu se adună ca 28: 6,3 = 6,30, deci 30 + 25 = 55 de sutimi și totalul este 10,55."
    },
    {
      "type": "num",
      "q": "O panglică are 3,6 m. Tai 3 bucăți de câte 0,45 m. Câți metri de panglică rămân?",
      "answer": 2.25,
      "unit": "m",
      "explain": "Tăiat: 0,45 + 0,45 + 0,45 = 1,35 m. Rămân 3,60 − 1,35 = 2,25 m."
    },
    {
      "type": "order",
      "q": "Așază aceste numere în ordine, de la cel mai mare la cel mai mic.",
      "items": [
        "2,5",
        "2,45",
        "2,4",
        "2,399",
        "2,04"
      ],
      "explain": "Compară mai întâi zecimile: 2,5 > 2,45 > 2,4 (4 zecimi și 0 sutimi) > 2,399 > 2,04."
    },
    {
      "type": "mc",
      "q": "Pornești de la 4,07, îl înmulțești cu 10 și apoi împarți rezultatul la 100. Ce număr obții?",
      "options": [
        "4,07",
        "0,0407",
        "40,7",
        "0,407"
      ],
      "answer": 3,
      "explain": "4,07 × 10 = 40,7; apoi 40,7 : 100 = 0,407."
    }
  ]
});
