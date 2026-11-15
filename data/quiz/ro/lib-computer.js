QBANK("ro", "lib-computer", {
  "f": [
    {
      "type": "mc",
      "q": "Unde rămân salvate pozele și jocurile chiar și când calculatorul este oprit?",
      "options": [
        "În RAM",
        "În ventilator",
        "În SSD"
      ],
      "answer": 2,
      "explain": "SSD-ul este depozitul care nu uită: datele rămân și fără curent."
    },
    {
      "type": "tf",
      "q": "Tastatura este un dispozitiv de intrare.",
      "answer": true,
      "explain": "Trimite calculatorului un cod pentru fiecare tastă apăsată: aduce comenzile tale în calculator."
    },
    {
      "type": "text",
      "q": "Cum se numesc milioanele de puncte mici care formează imaginea de pe ecran?",
      "answer": [
        "pixeli",
        "pixel",
        "pixelii"
      ],
      "explain": "Ecranul este făcut din milioane de puncte colorate, pixelii."
    },
    {
      "type": "mc",
      "q": "Care piesă calculează culoarea pixelilor și desenează imaginile?",
      "options": [
        "Placa de bază",
        "Placa video",
        "Mouse-ul"
      ],
      "answer": 1,
      "explain": "Placa video (GPU) calculează culoarea fiecărui pixel și trimite imaginea la monitor."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "O placă video pregătește 60 de imagini pe secundă. Câte imagini pregătește în 5 secunde de joc?",
      "answer": 300,
      "unit": "imagini",
      "explain": "60 × 5 = 300 de imagini."
    },
    {
      "type": "mc",
      "q": "Când deschizi un joc, datele lui sunt copiate din SSD în RAM. De ce?",
      "options": [
        "Pentru că RAM-ul este mult mai rapid, iar procesorul ia datele pe loc",
        "Pentru că SSD-ul se golește când deschizi un joc",
        "Pentru că RAM-ul păstrează datele pentru totdeauna",
        "Pentru că RAM-ul este mai mare decât SSD-ul"
      ],
      "answer": 0,
      "explain": "RAM-ul este masa de lucru foarte rapidă: procesorul citește acolo datele programelor deschise, fără să aștepte."
    },
    {
      "type": "tf",
      "q": "Dacă scoți curentul calculatorului, pozele salvate pe SSD dispar.",
      "answer": false,
      "explain": "Fals: SSD-ul folosește cipuri de memorie flash și păstrează datele și fără curent. Doar RAM-ul se șterge."
    },
    {
      "type": "order",
      "q": "Pune în ordine drumul unei litere pe care o scrii la tastatură.",
      "items": [
        "Apeși tasta de pe tastatură",
        "Tastatura trimite un cod calculatorului",
        "Procesorul prelucrează codul",
        "Monitorul afișează litera"
      ],
      "explain": "Intrare (tastatura), prelucrare (procesorul), ieșire (monitorul): acesta este ciclul oricărui calculator."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Calculatorul lui Luca se oprește singur după o jumătate de oră de joc. În carcasă, ventilatorul procesorului este plin de praf. Care este explicația cea mai probabilă?",
      "options": [
        "RAM-ul s-a umplut cu poze",
        "Monitorul este prea mare",
        "Mouse-ul trimite prea multe comenzi",
        "Procesorul se încălzește prea tare și se oprește ca să nu se ardă"
      ],
      "answer": 3,
      "explain": "Cu ventilatorul înfundat, căldura nu este evacuată: procesorul se supraîncălzește și se oprește ca să se protejeze."
    },
    {
      "type": "mc",
      "q": "Care comparație între RAM și SSD este corectă?",
      "options": [
        "RAM-ul păstrează datele ani de zile, SSD-ul le pierde când închizi",
        "RAM-ul este foarte rapid, dar se golește fără curent; SSD-ul este mai lent, dar păstrează datele",
        "Sunt același lucru cu două nume",
        "SSD-ul execută instrucțiunile programelor, RAM-ul nu"
      ],
      "answer": 1,
      "explain": "RAM = masă de lucru rapidă și temporară; SSD = depozit pentru păstrare. Instrucțiunile le execută procesorul."
    },
    {
      "type": "tf",
      "q": "Mouse-ul este un dispozitiv de ieșire, pentru că arată săgeata pe ecran.",
      "answer": false,
      "explain": "Fals: mouse-ul este un dispozitiv de intrare, trimite mișcările tale calculatorului. Monitorul, dispozitiv de ieșire, arată săgeata."
    },
    {
      "type": "num",
      "q": "Un monitor are 400 de pixeli în lățime și 300 în înălțime, iar placa video calculează 60 de imagini pe secundă. Câte culori de pixeli trebuie să calculeze într-o secundă?",
      "answer": 7200000,
      "unit": "culori",
      "explain": "400 × 300 = 120 000 de pixeli pe imagine; 120 000 × 60 = 7 200 000."
    }
  ]
});
