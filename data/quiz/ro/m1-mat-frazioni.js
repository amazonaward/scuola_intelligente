QBANK("ro", "m1-mat-frazioni", {
  "f": [
    {
      "type": "mc",
      "q": "În fracția 5/8, care număr este numitorul?",
      "options": [
        "5",
        "8",
        "13"
      ],
      "answer": 1,
      "explain": "Numitorul este numărul de sub linie: arată în câte părți egale este împărțit întregul."
    },
    {
      "type": "tf",
      "q": "Fracția 7/7 este egală cu 1.",
      "answer": true,
      "explain": "7 : 7 = 1: este o fracție aparentă."
    },
    {
      "type": "mc",
      "q": "Care dintre aceste fracții este subunitară (proprie)?",
      "options": [
        "9/5",
        "6/6",
        "4/9"
      ],
      "answer": 2,
      "explain": "Este proprie dacă numărătorul este mai mic decât numitorul: 4 &lt; 9."
    },
    {
      "type": "num",
      "q": "Cât reprezintă 3/4 din 20?",
      "answer": 15,
      "explain": "20 : 4 = 5; 5 × 3 = 15."
    },
    {
      "type": "text",
      "q": "Cum se numește o fracție cu numărătorul mai mare decât numitorul (și care nu este multiplu al lui)?",
      "answer": [
        "improprie",
        "fracție improprie",
        "supraunitară",
        "fracție supraunitară",
        "o fracție improprie"
      ],
      "explain": "O fracție cu numărătorul mai mare decât numitorul valorează mai mult de un întreg: este improprie (supraunitară)."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Care fracție este echivalentă cu 3/5?",
      "options": [
        "9/20",
        "6/15",
        "6/10"
      ],
      "answer": 2,
      "explain": "Înmulțind numărătorul și numitorul cu 2 obținem 6/10."
    },
    {
      "type": "mc",
      "q": "Cum se scrie 17/5 ca număr mixt?",
      "options": [
        "2 întregi și 3/5",
        "3 întregi și 2/5",
        "3 întregi și 1/5"
      ],
      "answer": 1,
      "explain": "17 : 5 = 3 rest 2, deci 3 întregi și 2/5."
    },
    {
      "type": "num",
      "q": "Un ciclist a parcurs 2/3 dintr-o cursă de 90 km. Câți kilometri a parcurs?",
      "answer": 60,
      "unit": "km",
      "explain": "90 : 3 = 30; 30 × 2 = 60 km."
    },
    {
      "type": "mc",
      "q": "Cât face 2/3 × 9/4?",
      "options": [
        "3/2",
        "11/7",
        "6/7"
      ],
      "answer": 0,
      "explain": "Înmulțesc numărătorii și numitorii: 18/12; simplificând cu 6 obțin 3/2."
    },
    {
      "type": "tf",
      "q": "Dintre 3/5 și 2/3, fracția mai mare este 3/5.",
      "answer": false,
      "explain": "Cu numitorul comun 15: 3/5 = 9/15 și 2/3 = 10/15. Deci 2/3 este mai mare."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "O croitoreasă are 36 m de stofă. Folosește 1/4 din stofă pentru o rochie și 1/3 pentru o perdea. Câți metri de stofă rămân?",
      "answer": 15,
      "unit": "m",
      "explain": "Rochie: 36 : 4 = 9 m. Perdea: 36 : 3 = 12 m. Folosiți 9 + 12 = 21 m; rămân 36 − 21 = 15 m."
    },
    {
      "type": "mc",
      "q": "Cât este valoarea expresiei 1/2 + 1/3 × 3/4 ?",
      "options": [
        "5/7",
        "5/8",
        "3/4"
      ],
      "answer": 2,
      "explain": "Mai întâi înmulțirea: 1/3 × 3/4 = 1/4. Apoi 1/2 + 1/4 = 2/4 + 1/4 = 3/4."
    },
    {
      "type": "tf",
      "q": "Marco spune: «Ca să calculez 2/3 + 4/5 adun numărătorii și numitorii și obțin 6/8». Raționamentul lui este corect.",
      "answer": false,
      "explain": "Este greșit: trebuie un numitor comun (15): 10/15 + 12/15 = 22/15."
    },
    {
      "type": "num",
      "q": "O sticlă plină în proporție de 3/5 conține 1,2 litri de apă. Câți litri conține când este plină?",
      "answer": 2,
      "tol": 0.01,
      "unit": "L",
      "explain": "Problemă inversă: 1,2 : 3 = 0,4 litri pentru 1/5; 0,4 × 5 = 2 litri."
    },
    {
      "type": "order",
      "q": "Pune în ordine pașii pentru calculul 1/4 + 2/3.",
      "items": [
        "Găsesc cmmmc al numitorilor: 12",
        "Transform fracțiile: 3/12 și 8/12",
        "Adun numărătorii: 11/12",
        "Verific dacă se poate simplifica"
      ],
      "explain": "Mai întâi numitorul comun (cmmmc), apoi fracțiile echivalente, apoi suma și la final simplificarea."
    }
  ]
});
