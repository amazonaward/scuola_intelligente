QBANK("ro", "p5-mat-probabilita", {
  "f": [
    {
      "type": "mc",
      "q": "Ce este modul (moda) unui set de date?",
      "options": [
        "Valoarea care apare cel mai des",
        "Valoarea din mijloc",
        "Suma tuturor valorilor"
      ],
      "answer": 0,
      "explain": "Moda este valoarea cu frecvența cea mai mare, adică cea care se repetă cel mai des."
    },
    {
      "type": "tf",
      "q": "Aruncând un zar obișnuit cu 6 fețe, să iasă un număr mai mare decât 6 este un eveniment imposibil.",
      "answer": true,
      "explain": "Adevărat: zarul are doar numerele de la 1 la 6, deci un număr mai mare decât 6 nu poate ieși niciodată."
    },
    {
      "type": "num",
      "q": "Care este media aritmetică a numerelor 2, 8 și 11?",
      "answer": 7,
      "explain": "Suma: 2 + 8 + 11 = 21. Împart la 3 valori: 21 : 3 = 7."
    },
    {
      "type": "mc",
      "q": "Care dintre aceste evenimente este sigur?",
      "options": [
        "Aruncând un zar iese 6",
        "Aruncând un zar iese un număr mai mic decât 7",
        "Aruncând o monedă iese cap"
      ],
      "answer": 1,
      "explain": "Un zar are doar numerele de la 1 la 6, deci un număr mai mic decât 7 iese întotdeauna: este un eveniment sigur."
    },
    {
      "type": "text",
      "q": "Cum se numește numărul de apariții ale unui răspuns într-o anchetă?",
      "answer": [
        "frecvență",
        "frecventa",
        "frecvența"
      ],
      "explain": "Se numește frecvență: de exemplu, dacă 6 elevi aleg fotbalul, frecvența fotbalului este 6."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Marco a luat aceste note: 6, 7, 9, 10. Care este media lui?",
      "answer": 8,
      "explain": "Suma: 6 + 7 + 9 + 10 = 32. Media: 32 : 4 = 8."
    },
    {
      "type": "num",
      "q": "Care este mediana numerelor 8, 3, 12, 5, 9, 7?",
      "answer": 7.5,
      "tol": 0.01,
      "explain": "În ordine: 3, 5, 7, 8, 9, 12. Sunt 6 valori (număr par): mediana este media celor două valori din mijloc, (7 + 8) : 2 = 7,5."
    },
    {
      "type": "mc",
      "q": "Aruncând un zar, care este probabilitatea să iasă un număr mai mare decât 4?",
      "options": [
        "1/2",
        "1/3",
        "1/6"
      ],
      "answer": 1,
      "explain": "Cazurile favorabile sunt 2 (5 și 6) din 6 posibile: 2/6 = 1/3."
    },
    {
      "type": "tf",
      "q": "Într-o pungă sunt 3 bile roșii și 1 albastră. Este mai probabil să scoți una roșie decât cea albastră.",
      "answer": true,
      "explain": "Adevărat: probabilitatea de a scoate una roșie este 3/4, iar a celei albastre este 1/4."
    },
    {
      "type": "num",
      "q": "Înălțimile a patru prieteni sunt 138 cm, 142 cm, 150 cm și 145 cm. Care este amplitudinea (câmpul de variație)?",
      "answer": 12,
      "unit": "cm",
      "explain": "Amplitudinea = valoarea cea mai mare − valoarea cea mai mică = 150 − 138 = 12 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia a luat 6, 7 și 9 la primele trei teste. Ce notă trebuie să ia la al patrulea ca să aibă media 8?",
      "answer": 10,
      "explain": "Pentru media 8 la 4 teste sunt necesare 8 × 4 = 32 de puncte. Până acum are 6 + 7 + 9 = 22. Trebuie să ia 32 − 22 = 10."
    },
    {
      "type": "mc",
      "q": "Într-un sat, 4 persoane câștigă 1000 € pe lună, iar una câștigă 11 000 €. Care indicator descrie cel mai bine câștigul „tipic”?",
      "options": [
        "Media (3000 €)",
        "Mediana (1000 €)",
        "Suma (15 000 €)"
      ],
      "answer": 1,
      "explain": "O singură valoare foarte mare ridică media la 3000 €, care nu seamănă aproape cu nimeni. Mediana (1000 €) descrie mai bine situația tipică."
    },
    {
      "type": "tf",
      "q": "Într-o pungă sunt 3 bile roșii, 2 albastre și 5 verzi. Probabilitatea de a NU scoate una verde este 1/2.",
      "answer": true,
      "explain": "Bilele care nu sunt verzi sunt 3 + 2 = 5 din 10 în total: 5/10 = 1/2."
    },
    {
      "type": "num",
      "q": "Într-o pungă sunt 5 bile roșii și 15 albastre. Care este probabilitatea de a scoate una roșie, exprimată în procente?",
      "answer": 25,
      "unit": "%",
      "explain": "Cazuri favorabile 5 din 20 posibile: 5/20 = 1/4 = 25/100 = 25%."
    },
    {
      "type": "order",
      "q": "Pune în ordine pașii pentru a afla mediana unui număr PAR de valori.",
      "items": [
        "Aranjez valorile în ordine crescătoare",
        "Găsesc cele două valori din mijloc",
        "Adun cele două valori din mijloc",
        "Împart suma la 2"
      ],
      "explain": "Când numărul valorilor este par, nu există o singură valoare în mijloc: ordonezi datele, iei cele două valori din mijloc și faci media lor."
    }
  ]
});
