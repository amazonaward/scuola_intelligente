QBANK("ro", "p5-tec-dati-binario", {
  "f": [
    {
      "type": "mc",
      "q": "Ce cifre folosește codul binar?",
      "options": [
        "De la 0 la 9",
        "Doar 0 și 1",
        "Doar 1 și 2"
      ],
      "answer": 1,
      "explain": "Codul binar folosește doar două cifre: 0 și 1."
    },
    {
      "type": "tf",
      "q": "Un bit poate fi doar 0 sau 1.",
      "answer": true,
      "explain": "Bitul este cea mai mică informație: un da sau un nu."
    },
    {
      "type": "num",
      "q": "Cât este numărul binar 11 în zecimal?",
      "answer": 3,
      "explain": "Pozițiile valorează 2 și 1: 2 + 1 = 3."
    },
    {
      "type": "mc",
      "q": "Ce este un tranzistor?",
      "options": [
        "Un fel de cablu",
        "O memorie pentru fotografii",
        "Un mic comutator electronic"
      ],
      "answer": 2,
      "explain": "Tranzistorul este un comutator care poate fi pornit (1) sau oprit (0). Computerele conțin miliarde."
    },
    {
      "type": "tf",
      "q": "Codul Unicode conține și emoji-uri.",
      "answer": true,
      "explain": "Unicode are peste 150.000 de caractere din toate limbile, inclusiv emoji."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Cât este numărul binar 10011 în zecimal?",
      "answer": 19,
      "explain": "Pozițiile sunt 16, 8, 4, 2, 1: 16 + 0 + 0 + 2 + 1 = 19."
    },
    {
      "type": "mc",
      "q": "Cum se scrie 12 în binar?",
      "options": [
        "1010",
        "1100",
        "1001"
      ],
      "answer": 1,
      "explain": "12 = 8 + 4, deci sunt aprinse pozițiile 8 și 4: 1100."
    },
    {
      "type": "num",
      "q": "O imagine are 10 pixeli și fiecare pixel folosește 3 octeți (roșu, verde, albastru). Câți octeți ocupă?",
      "answer": 30,
      "unit": "octeți",
      "explain": "10 × 3 = 30 de octeți."
    },
    {
      "type": "order",
      "q": "Pune aceste numere binare în ordine, de la cel mai mic la cel mai mare.",
      "items": [
        "101",
        "110",
        "1000",
        "1011"
      ],
      "explain": "Ele valorează 5, 6, 8 și 11."
    },
    {
      "type": "text",
      "q": "Cum se numește codul creat în 1963 care dă un număr fiecărei litere (A = 65)?",
      "answer": [
        "ascii",
        "codul ascii",
        "cod ascii"
      ],
      "explain": "ASCII dă un număr fiecărui caracter, apoi numărul se scrie în binar."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Care este numărul minim de biți necesari ca să scrii 20 de valori diferite?",
      "answer": 5,
      "unit": "biți",
      "explain": "Cu 4 biți sunt 2×2×2×2 = 16 valori, prea puține. Cu 5 biți sunt 32: ajung. Sunt necesari 5 biți."
    },
    {
      "type": "num",
      "q": "Un desen color este format din 8 × 8 pixeli și fiecare pixel folosește 3 octeți. Câți octeți ocupă în total?",
      "answer": 192,
      "unit": "octeți",
      "explain": "8 × 8 = 64 de pixeli; 64 × 3 = 192 de octeți."
    },
    {
      "type": "mc",
      "q": "Becurile 16, 2 și 1 sunt aprinse (10011). Aprinzi și becul de 4. Ce număr zecimal obții?",
      "options": [
        "22",
        "23",
        "24"
      ],
      "answer": 1,
      "explain": "Acum sunt aprinse 16, 4, 2 și 1: 16 + 4 + 2 + 1 = 23."
    },
    {
      "type": "tf",
      "q": "Trecând de la 4 biți la 8 biți, combinațiile posibile doar se dublează (de la 16 la 32).",
      "answer": false,
      "explain": "Fiecare bit în plus dublează combinațiile: 4 biți în plus înmulțesc cu 2×2×2×2 = 16, deci 16 devine 256."
    },
    {
      "type": "mc",
      "q": "Marco compară 0111 și 1000. Care afirmație este corectă?",
      "options": [
        "0111 este mai mare, pentru că are trei de 1",
        "1000 este mai mare, pentru că valorează 8 față de 7",
        "Sunt egale, pentru că au 4 cifre"
      ],
      "answer": 1,
      "explain": "0111 = 4 + 2 + 1 = 7; 1000 = 8. Contează valoarea poziției, nu câți de 1 sunt."
    }
  ]
});
