QBANK("ro", "p4-geo-settori-economici", {
  "f": [
    {
      "type": "mc",
      "q": "Care dintre acestea este un bun, adică se poate atinge?",
      "options": [
        "O lecție",
        "Un scaun",
        "O tunsoare"
      ],
      "answer": 1,
      "explain": "Scaunul este un obiect: este un bun. Lecția și tunsoarea sunt servicii."
    },
    {
      "type": "tf",
      "q": "O tunsoare este un serviciu.",
      "answer": true,
      "explain": "Adevărat: este o activitate utilă altora care nu este un obiect."
    },
    {
      "type": "mc",
      "q": "În ce sector lucrează o învățătoare?",
      "options": [
        "Primar",
        "Secundar",
        "Terțiar"
      ],
      "answer": 2,
      "explain": "Școala oferă un serviciu: este sectorul terțiar."
    },
    {
      "type": "text",
      "q": "Cum se numește sectorul care transformă materiile prime în produse finite?",
      "answer": [
        "secundar",
        "sectorul secundar",
        "cel secundar",
        "sector secundar"
      ],
      "explain": "Este sectorul secundar: industrie, meșteșuguri, construcții și producție de energie."
    },
    {
      "type": "num",
      "q": "Cu aproximativ câți ani în urmă a început omul să cultive pământul și să crească animale?",
      "answer": 10000,
      "unit": "ani",
      "tol": 1000,
      "explain": "Acum aproximativ 10.000 de ani, în Neolitic: sectorul primar este cel mai vechi."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Un tâmplar face o masă manual în atelierul lui. În ce sector lucrează?",
      "options": [
        "Primar",
        "Secundar",
        "Terțiar"
      ],
      "answer": 1,
      "explain": "Transformă lemnul într-un produs finit: meșteșugul face parte din sectorul secundar."
    },
    {
      "type": "num",
      "q": "Într-o clasă de 20 de copii, cei 40 de părinți lucrează astfel: 2 în sectorul primar, 10 în cel secundar, 28 în cel terțiar. Câți părinți NU lucrează în sectorul terțiar?",
      "answer": 12,
      "unit": "părinți",
      "explain": "2 + 10 = 12 părinți, sau 40 − 28 = 12."
    },
    {
      "type": "tf",
      "q": "O bancă face parte din sectorul secundar.",
      "answer": false,
      "explain": "Fals: banca oferă servicii financiare, deci aparține sectorului terțiar."
    },
    {
      "type": "order",
      "q": "Pune în ordine drumul unui tricou de bumbac.",
      "items": [
        "Se cultivă și se culege bumbacul",
        "Bumbacul devine fir și apoi țesătură",
        "Țesătura este tăiată și cusută",
        "Un magazin vinde tricoul"
      ],
      "explain": "Mai întâi primarul (bumbac), apoi secundarul (fir, țesătură, cusut) și la final terțiarul (magazin)."
    },
    {
      "type": "text",
      "q": "Parmigiano Reggiano poate purta acest nume doar dacă e produs într-o anumită zonă. Cum se numește această marcă de trei litere (în italiană)?",
      "answer": [
        "dop",
        "d.o.p."
      ],
      "explain": "Se numește DOP, Denominazione di Origine Protetta (Denumire de origine protejată)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "În 1861 aproximativ 70 de oameni din 100 lucrau în agricultură. Astăzi sunt aproximativ 4 din 100. Cu câți oameni din 100 a scăzut numărul?",
      "answer": 66,
      "unit": "din 100",
      "explain": "70 − 4 = cu 66 de oameni din 100 mai puțini. Mașinile agricole fac munca multor țărani."
    },
    {
      "type": "mc",
      "q": "O firmă: A cultivă grâu, B face biscuiți în fabrică, C duce biscuiții la magazine cu camioanele, D îi vinde la supermarket. Care două munci țin de sectorul terțiar?",
      "options": [
        "A și B",
        "C și D",
        "B și C"
      ],
      "answer": 1,
      "explain": "Transportul (C) și vânzarea (D) sunt servicii. A este primar, iar B este secundar."
    },
    {
      "type": "mc",
      "q": "De ce turismul de iarnă la munte (schi, hoteluri) aparține sectorului terțiar?",
      "options": [
        "Pentru că oferă servicii oamenilor și nu scoate resurse din natură",
        "Pentru că este zăpadă",
        "Pentru că se lucrează doar iarna"
      ],
      "answer": 0,
      "explain": "Terțiarul oferă servicii. Primarul scoate resurse din natură (pășuni, păduri), iar secundarul le transformă."
    },
    {
      "type": "tf",
      "q": "Cu tot mai mulți roboți și mașini pe câmp și în fabrici, sunt necesari tot mai mulți muncitori și țărani.",
      "answer": false,
      "explain": "Fals: mașinile fac munca multor oameni, deci sunt necesari mai puțini. În schimb sunt necesari mai mulți tehnicieni și programatori."
    },
    {
      "type": "order",
      "q": "Pune în ordine aceste momente din istoria muncii, de la cel mai vechi la cel mai recent.",
      "items": [
        "Apare agricultura în Neolitic",
        "Revoluția industrială cu mașina cu abur",
        "Italia devine un stat unit (1861)",
        "Boomul economic (1958–1963)"
      ],
      "explain": "Agricultura acum aproximativ 10.000 de ani, revoluția industrială în secolul al XVIII-lea, Unirea 1861, boomul 1958–1963."
    }
  ]
});
