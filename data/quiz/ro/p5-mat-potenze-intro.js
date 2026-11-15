QBANK("ro", "p5-mat-potenze-intro", {
  "f": [
    {
      "type": "num",
      "q": "Cât face 4<sup>3</sup>?",
      "answer": 64,
      "explain": "4 × 4 × 4 = 16 × 4 = 64."
    },
    {
      "type": "mc",
      "q": "Cât este 1<sup>100</sup>?",
      "options": [
        "0",
        "1",
        "100"
      ],
      "answer": 1,
      "explain": "1 înmulțit cu el însuși, chiar și de 100 de ori, rămâne mereu 1."
    },
    {
      "type": "tf",
      "q": "Exponentul arată de câte ori se înmulțește baza cu ea însăși.",
      "answer": true,
      "explain": "Adevărat: în 2<sup>5</sup>, exponentul 5 arată că baza 2 apare de 5 ori ca factor."
    },
    {
      "type": "num",
      "q": "Cât face 6<sup>2</sup>?",
      "answer": 36,
      "explain": "6 × 6 = 36."
    },
    {
      "type": "text",
      "q": "A ridica un număr la exponentul 2 înseamnă și a-l ridica „la…” (un cuvânt).",
      "answer": [
        "pătrat",
        "la pătrat",
        "patrat",
        "la patrat"
      ],
      "explain": "Exponentul 2 se numește „pătrat”, pentru că aria unui pătrat este latură × latură."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Cât face 2<sup>3</sup> + 3<sup>2</sup>?",
      "answer": 17,
      "explain": "2<sup>3</sup> = 8 și 3<sup>2</sup> = 9. Deci 8 + 9 = 17."
    },
    {
      "type": "num",
      "q": "O veste este trimisă la 4 prieteni; fiecare o trimite altor 4, și tot așa. Câte persoane o primesc în a treia rundă?",
      "answer": 64,
      "explain": "Runda 1: 4; runda 2: 4 × 4 = 16; runda 3: 4 × 4 × 4 = 4<sup>3</sup> = 64 de persoane."
    },
    {
      "type": "mc",
      "q": "Cum se scrie 6 000 000 folosind o putere a lui 10 (6 ori o putere a lui 10)?",
      "options": [
        "6 × 10<sup>5</sup>",
        "6 × 10<sup>6</sup>",
        "6 × 10<sup>7</sup>"
      ],
      "answer": 1,
      "explain": "6 000 000 = 6 urmat de 6 zerouri, deci 6 × 10<sup>6</sup>."
    },
    {
      "type": "tf",
      "q": "3<sup>4</sup> este egal cu 4<sup>3</sup>.",
      "answer": false,
      "explain": "Fals: 3<sup>4</sup> = 3 × 3 × 3 × 3 = 81, iar 4<sup>3</sup> = 4 × 4 × 4 = 64. Baza și exponentul nu pot fi schimbate între ele."
    },
    {
      "type": "num",
      "q": "Ce număr este scris ca 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 7 × 10<sup>0</sup>?",
      "answer": 357,
      "explain": "3 × 100 + 5 × 10 + 7 × 1 = 300 + 50 + 7 = 357."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Calculează 5<sup>2</sup> − 2<sup>4</sup>.",
      "answer": 9,
      "explain": "5<sup>2</sup> = 25 și 2<sup>4</sup> = 16. Deci 25 − 16 = 9."
    },
    {
      "type": "mc",
      "q": "Care dintre aceste egalități este corectă?",
      "options": [
        "2<sup>5</sup> = 25",
        "4<sup>3</sup> = 12",
        "3<sup>3</sup> = 27",
        "5<sup>0</sup> = 0"
      ],
      "answer": 2,
      "explain": "3<sup>3</sup> = 3 × 3 × 3 = 27. Celelalte sunt greșeli tipice: 2<sup>5</sup> = 32 (nu 25), 4<sup>3</sup> = 64 (nu 4 × 3) și 5<sup>0</sup> = 1."
    },
    {
      "type": "tf",
      "q": "Numărul 2<sup>10</sup> este mai mare decât 10<sup>3</sup>.",
      "answer": true,
      "explain": "Adevărat: 2<sup>10</sup> = 1024, iar 10<sup>3</sup> = 1000. O bază mai mică cu un exponent mai mare poate depăși cealaltă."
    },
    {
      "type": "num",
      "q": "O colonie de bacterii se dublează în fiecare oră. La ora 8 sunt 5. Câte vor fi la ora 11?",
      "answer": 40,
      "explain": "În 3 ore numărul se dublează de 3 ori: 5 × 2<sup>3</sup> = 5 × 8 = 40."
    },
    {
      "type": "order",
      "q": "Pune în ordine pașii pentru a calcula 3<sup>4</sup>.",
      "items": [
        "Scriu înmulțirea 3 × 3 × 3 × 3",
        "3 × 3 = 9",
        "9 × 3 = 27",
        "27 × 3 = 81"
      ],
      "explain": "Mai întâi scriu cei patru factori egali, apoi înmulțesc pas cu pas: 9, apoi 27, la final 81."
    }
  ]
});
