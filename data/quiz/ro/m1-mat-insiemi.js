QBANK("ro", "m1-mat-insiemi", {
  "f": [
    {
      "type": "mc",
      "q": "Care simbol se citește «aparține lui»?",
      "options": [
        "∉",
        "∈",
        "⊂"
      ],
      "answer": 1,
      "explain": "Simbolul ∈ arată că un element aparține unei mulțimi, de exemplu 4 ∈ {2, 4, 6}."
    },
    {
      "type": "tf",
      "q": "{1, 2, 3} și {3, 2, 1} sunt aceeași mulțime.",
      "answer": true,
      "explain": "Într-o mulțime ordinea elementelor nu contează."
    },
    {
      "type": "num",
      "q": "Câte elemente are mulțimea A = { 2, 4, 6, 8, 10 } ?",
      "answer": 5,
      "explain": "Le numărăm: 2, 4, 6, 8, 10 sunt 5 elemente, deci |A| = 5."
    },
    {
      "type": "mc",
      "q": "Care simbol indică reuniunea a două mulțimi?",
      "options": [
        "∩",
        "∪",
        "−"
      ],
      "answer": 1,
      "explain": "∪ este reuniunea (toate elementele ambelor mulțimi); ∩ este intersecția."
    },
    {
      "type": "text",
      "q": "Cum se numește numărul de elemente al unei mulțimi?",
      "answer": [
        "cardinal",
        "cardinalul",
        "cardinalitate",
        "cardinalitatea"
      ],
      "explain": "Numărul de elemente al unei mulțimi se numește cardinal și se notează |A|."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "A = { x | x este un număr natural par mai mic decât 9 }. Care enumerare este corectă?",
      "options": [
        "{ 2, 4, 6, 8 }",
        "{ 0, 2, 4, 6, 8 }",
        "{ 2, 4, 6, 8, 10 }"
      ],
      "answer": 1,
      "explain": "0 este un număr natural par, iar 10 nu este mai mic decât 9: A = { 0, 2, 4, 6, 8 }."
    },
    {
      "type": "num",
      "q": "A este mulțimea numerelor pare de la 1 la 20, iar B mulțimea multiplilor lui 5 de la 1 la 20. Câte elemente are A ∩ B ?",
      "answer": 2,
      "explain": "Cele pare sunt 2, 4, …, 20; multiplii lui 5 sunt 5, 10, 15, 20. Au în comun 10 și 20: sunt 2 elemente."
    },
    {
      "type": "mc",
      "q": "Dacă A = { 1, 2, 3, 4 } și B = { 2, 4 }, care relație este corectă?",
      "options": [
        "A ⊂ B",
        "B ⊂ A",
        "B ∈ A"
      ],
      "answer": 1,
      "explain": "Fiecare element al lui B (2 și 4) este și în A, deci B este submulțime a lui A: B ⊂ A."
    },
    {
      "type": "tf",
      "q": "Dacă A ∩ B = ∅, atunci numărul de elemente din A ∪ B este |A| + |B|.",
      "answer": true,
      "explain": "Dacă nu există elemente comune, niciun element nu este numărat de două ori: se adună simplu."
    },
    {
      "type": "num",
      "q": "U = { 1, 2, 3, …, 12 } și A este mulțimea divizorilor lui 12. Câte elemente are complementara lui A față de U ?",
      "answer": 6,
      "explain": "Divizorii lui 12 sunt 1, 2, 3, 4, 6, 12: adică 6. Complementara are 12 − 6 = 6 elemente (5, 7, 8, 9, 10, 11)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Într-un grup de 40 de turiști, 25 vorbesc engleza, 20 vorbesc franceza și 8 nu vorbesc niciuna dintre cele două limbi. Câți turiști vorbesc ambele limbi?",
      "answer": 13,
      "explain": "Cei care vorbesc cel puțin o limbă: 40 − 8 = 32. Din |A ∪ B| = |A| + |B| − |A ∩ B|: 32 = 25 + 20 − x, deci x = 45 − 32 = 13."
    },
    {
      "type": "num",
      "q": "Produsul cartezian A × B conține 35 de perechi, iar A are 5 elemente. Câte elemente are B ?",
      "answer": 7,
      "explain": "Numărul perechilor este |A| × |B|: 5 × |B| = 35, deci |B| = 35 : 5 = 7."
    },
    {
      "type": "mc",
      "q": "|A| = 12, |A ∪ B| = 20 și |A ∩ B| = 5. Cât este |B| ?",
      "options": [
        "3",
        "13",
        "15"
      ],
      "answer": 1,
      "explain": "|A ∪ B| = |A| + |B| − |A ∩ B| → 20 = 12 + |B| − 5 → |B| = 20 − 12 + 5 = 13."
    },
    {
      "type": "tf",
      "q": "Diferențele A − B și B − A sunt întotdeauna egale.",
      "answer": false,
      "explain": "Sunt egale doar în cazuri particulare. Pentru A = { 1, 2 } și B = { 2, 3 }: A − B = { 1 }, iar B − A = { 3 }."
    },
    {
      "type": "order",
      "q": "Ordonează aceste mulțimi de la cea mai mică la cea mai mare, după numărul de elemente.",
      "items": [
        "Numerele naturale mai mari decât 5 și mai mici decât 6",
        "{ a, b, a, b }",
        "Zilele unei săptămâni",
        "Numerele naturale mai mici decât 10"
      ],
      "explain": "Prima mulțime este vidă (0 elemente), apoi { a, b } (2), zilele săptămânii (7) și în final 0, 1, …, 9 (10 elemente)."
    }
  ]
});
