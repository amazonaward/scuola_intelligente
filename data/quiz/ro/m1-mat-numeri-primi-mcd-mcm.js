QBANK("ro", "m1-mat-numeri-primi-mcd-mcm", {
  "f": [
    {
      "type": "mc",
      "q": "Care dintre aceste numere se împarte exact la 5?",
      "options": [
        "122",
        "135",
        "143"
      ],
      "answer": 1,
      "explain": "Un număr se împarte la 5 dacă se termină în 0 sau 5: 135."
    },
    {
      "type": "tf",
      "q": "Numărul 9 este prim.",
      "answer": false,
      "explain": "9 = 3 × 3: are trei divizori (1, 3, 9), deci este compus."
    },
    {
      "type": "mc",
      "q": "Câți divizori are un număr prim?",
      "options": [
        "Doar unul",
        "O infinitate",
        "Exact doi"
      ],
      "answer": 2,
      "explain": "Un număr prim se împarte doar la 1 și la el însuși: are exact doi divizori."
    },
    {
      "type": "num",
      "q": "Care este cel mai mic număr prim?",
      "answer": 2,
      "explain": "Numărul 1 nu este prim (are un singur divizor). 2 are doi divizori, 1 și 2: este cel mai mic număr prim."
    },
    {
      "type": "text",
      "q": "Cum se numesc numerele mai mari decât 1 care au mai mult de doi divizori?",
      "answer": [
        "compuse",
        "numere compuse",
        "numerele compuse"
      ],
      "explain": "Numerele cu mai mult de doi divizori (de exemplu 6 sau 15) se numesc compuse."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Care dintre aceste numere se împarte exact la 9?",
      "options": [
        "5.272",
        "5.276",
        "5.274"
      ],
      "answer": 2,
      "explain": "Un număr se împarte la 9 dacă suma cifrelor sale se împarte la 9: 5 + 2 + 7 + 4 = 18."
    },
    {
      "type": "num",
      "q": "Câți divizori are numărul 36?",
      "answer": 9,
      "unit": "divizori",
      "explain": "Divizorii lui 36 sunt 1, 2, 3, 4, 6, 9, 12, 18, 36: în total 9."
    },
    {
      "type": "mc",
      "q": "Dacă două numere sunt prime între ele, cât este cel mai mare divizor comun al lor?",
      "options": [
        "0",
        "1",
        "Produsul lor"
      ],
      "answer": 1,
      "explain": "Prime între ele înseamnă că singurul divizor comun este 1: cmmdc = 1."
    },
    {
      "type": "num",
      "q": "O fâșie de stofă are lungimea de 84 cm și lățimea de 60 cm. Vrei s-o tai în pătrate egale, cât mai mari, fără rest. Cât măsoară latura fiecărui pătrat?",
      "answer": 12,
      "unit": "cm",
      "explain": "Latura trebuie să dividă și 84, și 60 și să fie cea mai mare: cmmdc(84, 60) = 12 cm (84 = 2² × 3 × 7, 60 = 2² × 3 × 5)."
    },
    {
      "type": "tf",
      "q": "Orice număr divizibil cu 4 este divizibil și cu 2.",
      "answer": true,
      "explain": "Dacă un număr este multiplu de 4, este multiplu de 2 × 2, deci este par și se împarte la 2."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Trei prieteni aleargă în parc: Anna la fiecare 3 zile, Bruno la fiecare 4 zile și Carla la fiecare 6 zile. Astăzi aleargă toți împreună. Peste câte zile vor alerga din nou toți trei împreună?",
      "answer": 12,
      "unit": "zile",
      "explain": "Ne trebuie cmmmc(3, 4, 6): 3 = 3, 4 = 2², 6 = 2 × 3 → 2² × 3 = 12 zile."
    },
    {
      "type": "num",
      "q": "O învățătoare are 48 de creioane, 72 de caiete și 60 de radiere. Vrea să pregătească cât mai multe truse identice, fără rest. Câte truse pregătește?",
      "answer": 12,
      "unit": "truse",
      "explain": "Ne trebuie cmmdc(48, 72, 60): 48 = 2⁴ × 3, 72 = 2³ × 3², 60 = 2² × 3 × 5 → factori comuni cu cel mai mic exponent: 2² × 3 = 12 truse."
    },
    {
      "type": "mc",
      "q": "Una dintre aceste descompuneri în factori primi este greșită. Care?",
      "options": [
        "45 = 3 × 15",
        "84 = 2² × 3 × 7",
        "100 = 2² × 5²"
      ],
      "answer": 0,
      "explain": "15 nu este număr prim (15 = 3 × 5): descompunerea corectă este 45 = 3² × 5."
    },
    {
      "type": "tf",
      "q": "Pentru oricare două numere, produsul dintre cmmdc și cmmmc este egal cu produsul celor două numere.",
      "answer": true,
      "explain": "Exemplu cu 12 și 18: cmmdc = 6, cmmmc = 36 și 6 × 36 = 216 = 12 × 18."
    },
    {
      "type": "order",
      "q": "Pune în ordine, de la cea mai mică valoare la cea mai mare.",
      "items": [
        "cmmdc(9, 16)",
        "cmmmc(4, 6)",
        "cmmdc(30, 45)",
        "cmmmc(4, 5)"
      ],
      "explain": "cmmdc(9, 16) = 1, cmmmc(4, 6) = 12, cmmdc(30, 45) = 15, cmmmc(4, 5) = 20."
    }
  ]
});
