QBANK("ro", "p5-mat-operazioni-decimali", {
  "f": [
    {
      "type": "num",
      "q": "Cât face 6,4 + 2,3?",
      "answer": 8.7,
      "tol": 0.001,
      "explain": "Virgulă sub virgulă: 6,4 + 2,3 = 8,7."
    },
    {
      "type": "mc",
      "q": "Cât face 4,5 × 10?",
      "options": [
        "0,45",
        "45",
        "450"
      ],
      "answer": 1,
      "explain": "Înmulțirea cu 10 mută virgula o poziție spre dreapta: 4,5 × 10 = 45."
    },
    {
      "type": "tf",
      "q": "Pentru a împărți 7,5 la 10 se mută virgula o poziție spre stânga.",
      "answer": true,
      "explain": "Adevărat: 7,5 : 10 = 0,75. Împărțirea la 10 face numărul de 10 ori mai mic."
    },
    {
      "type": "num",
      "q": "Cât face 12,9 − 4,4?",
      "answer": 8.5,
      "tol": 0.001,
      "explain": "12,9 − 4,4 = 8,5."
    },
    {
      "type": "text",
      "q": "Cum se numește prima cifră de după virgulă? (un cuvânt, la plural)",
      "answer": [
        "zecimi",
        "zecimile",
        "zecime",
        "zecimea"
      ],
      "explain": "Prima cifră de după virgulă arată zecimile (1/10); apoi vin sutimile și miimile."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un pachet de paste costă 1,35 €. Cât costă 4 pachete?",
      "answer": 5.4,
      "tol": 0.001,
      "unit": "€",
      "explain": "1,35 × 4 = 5,40 €."
    },
    {
      "type": "num",
      "q": "Cât face 4,5 × 2,2?",
      "answer": 9.9,
      "tol": 0.001,
      "explain": "45 × 22 = 990. Sunt 1 + 1 = 2 zecimale, deci 9,90 = 9,9."
    },
    {
      "type": "mc",
      "q": "Cât face 27,6 : 6?",
      "options": [
        "0,46",
        "46",
        "4,6"
      ],
      "answer": 2,
      "explain": "27 : 6 = 4 rest 3; cobor 6 și pun virgula: 36 : 6 = 6. Rezultat 4,6. Verificare: 4,6 × 6 = 27,6."
    },
    {
      "type": "tf",
      "q": "Dacă împarți un număr la 0,1, obții un număr mai mic.",
      "answer": false,
      "explain": "Fals: împărțirea la 0,1 este la fel ca înmulțirea cu 10, deci numărul crește. De exemplu 3 : 0,1 = 30."
    },
    {
      "type": "num",
      "q": "Cu 20 € cumperi 3 înghețate de câte 4,50 €. Câți euro primești rest?",
      "answer": 6.5,
      "tol": 0.001,
      "unit": "€",
      "explain": "Cheltuială: 4,50 × 3 = 13,50 €. Rest: 20 − 13,50 = 6,50 €."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "O sfoară lungă de 15,6 m este tăiată în bucăți de câte 0,6 m. Câte bucăți se obțin?",
      "answer": 26,
      "explain": "15,6 : 0,6 = 156 : 6 = 26 bucăți (am înmulțit ambele numere cu 10)."
    },
    {
      "type": "mc",
      "q": "Care dintre aceste calcule este greșit?",
      "options": [
        "3,2 × 10 = 32",
        "0,45 × 100 = 45",
        "6,5 : 100 = 6,05"
      ],
      "answer": 2,
      "explain": "6,5 : 100 = 0,065: virgula se mută două poziții spre stânga. Celelalte două sunt corecte."
    },
    {
      "type": "tf",
      "q": "Dacă cumperi 3 kg de mere a 2,40 € kilogramul și 2 kg de pere a 3,10 € kilogramul, cheltuiești mai puțin de 14 €.",
      "answer": true,
      "explain": "Mere: 2,40 × 3 = 7,20 €. Pere: 3,10 × 2 = 6,20 €. Total 13,40 €, adică mai puțin de 14 €."
    },
    {
      "type": "num",
      "q": "Ai 50 €. Cumperi 2,5 kg de portocale a 1,80 € kilogramul și o pâine de 2,30 €. Câți euro îți rămân?",
      "answer": 43.2,
      "tol": 0.001,
      "unit": "€",
      "explain": "Portocale: 2,5 × 1,80 = 4,50 €. Total cheltuit: 4,50 + 2,30 = 6,80 €. Rămân: 50 − 6,80 = 43,20 €."
    },
    {
      "type": "order",
      "q": "Ordonează rezultatele de la cel mai mic la cel mai mare.",
      "items": [
        "6,3 : 100",
        "0,4 × 0,2",
        "0,9 : 3",
        "0,5 + 0,15",
        "2,5 × 0,4"
      ],
      "explain": "6,3 : 100 = 0,063; 0,4 × 0,2 = 0,08; 0,9 : 3 = 0,3; 0,5 + 0,15 = 0,65; 2,5 × 0,4 = 1."
    }
  ]
});
