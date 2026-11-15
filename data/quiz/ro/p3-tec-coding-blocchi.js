QBANK("ro", "p3-tec-coding-blocchi", {
  "f": [
    {
      "type": "mc",
      "q": "În Scratch, ce culoare au blocurile de Mișcare (ca «fă 10 pași»)?",
      "options": [
        "Albastru",
        "Galben",
        "Violet"
      ],
      "answer": 0,
      "explain": "Blocurile de Mișcare sunt albastre. Evenimentele sunt galbene, Aspectul violet, Controlul portocaliu."
    },
    {
      "type": "tf",
      "q": "Calculatorul face exact ce este scris în program.",
      "answer": true,
      "explain": "Adevărat: calculatorul este un executant precis, dar fără fantezie."
    },
    {
      "type": "mc",
      "q": "Ce face blocul «așteaptă 1 secundă»?",
      "options": [
        "Pornește programul",
        "Rotește personajul",
        "Face o pauză"
      ],
      "answer": 2,
      "explain": "Așteaptă face o pauză de un anumit timp."
    },
    {
      "type": "text",
      "q": "Cum se numește programul cu blocuri colorate creat la MIT, cu pisica portocalie?",
      "answer": [
        "scratch"
      ],
      "explain": "Se numește Scratch și a apărut la MIT din Boston."
    },
    {
      "type": "mc",
      "q": "În 1947 inginerii au găsit în calculatorul Mark II primul «bug» adevărat. Ce animal era?",
      "options": [
        "O furnică",
        "Un fluture de noapte",
        "Un păianjen"
      ],
      "answer": 1,
      "explain": "Un fluture de noapte rămăsese blocat între contacte. «Bug» în engleză înseamnă insectă."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un program spune: «repetă de 6 ori: schimbă costumul, așteaptă 0,5 secunde». Câte secunde de așteptare sunt în total?",
      "answer": 3,
      "unit": "secunde",
      "explain": "6 repetări × 0,5 secunde = 3 secunde."
    },
    {
      "type": "mc",
      "q": "Robotul trebuie să meargă 2 pătrățele înainte, să cotească la stânga și să meargă 4 pătrățele înainte. Care program este corect?",
      "options": [
        "repetă de 4 ori [înainte]; stânga; repetă de 2 ori [înainte]",
        "repetă de 2 ori [înainte]; stânga; repetă de 4 ori [înainte]",
        "repetă de 6 ori [înainte]; stânga"
      ],
      "answer": 1,
      "explain": "Mai întâi 2 pași înainte, apoi cotitura la stânga, apoi 4 pași înainte. Ordinea contează!"
    },
    {
      "type": "tf",
      "q": "În blocul «repetă de 4 ori», instrucțiunile din interior sunt executate o singură dată.",
      "answer": false,
      "explain": "Fals: instrucțiunile din interiorul ciclului se repetă de 4 ori."
    },
    {
      "type": "order",
      "q": "O rețetă este un algoritm. Pune în ordine pașii pentru tort.",
      "items": [
        "Sparge ouăle",
        "Adaugă zahărul",
        "Amestecă",
        "Dă la cuptor"
      ],
      "explain": "Dacă dai la cuptor înainte să amesteci, rezultatul e un dezastru: într-o secvență ordinea contează."
    },
    {
      "type": "text",
      "q": "Cum se numește munca de a găsi și a corecta o greșeală într-un program? (de…)",
      "answer": [
        "debug",
        "depanare",
        "debugging"
      ],
      "explain": "Se numește debug: se testează programul, se caută greșeala și se corectează."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un ciclu spune: «repetă de 5 ori: pune 3 cuburi, scoate 1 cub». Câte cuburi rămân la sfârșit?",
      "answer": 10,
      "unit": "cuburi",
      "explain": "La fiecare repetare cuburile cresc cu 3 − 1 = 2. După 5 repetări: 5 × 2 = 10 cuburi."
    },
    {
      "type": "mc",
      "q": "Marta vrea să deseneze un pătrat și scrie: «repetă de 3 ori: fă 10 pași, rotește 90°». Ce desenează?",
      "options": [
        "Un pătrat complet",
        "Trei laturi ale unui pătrat: figura rămâne deschisă",
        "Un triunghi"
      ],
      "answer": 1,
      "explain": "Un pătrat are 4 laturi, deci trebuie repetat de 4 ori. Cu 3 repetări desenul e incomplet. Este un bug de corectat!"
    },
    {
      "type": "mc",
      "q": "Care dintre aceste activități NU este un ciclu, ci o succesiune de pași diferiți?",
      "options": [
        "Sărit coarda de 20 de ori",
        "Refrenul unui cântec",
        "Pornit calculatorul și deschis Scratch"
      ],
      "answer": 2,
      "explain": "Pornitul calculatorului și deschiderea Scratch sunt doi pași diferiți, unul după altul. Celelalte repetă același lucru."
    },
    {
      "type": "tf",
      "q": "Programul «repetă de 4 ori: înainte 1 pătrățel» face robotul să se miște la fel ca 4 blocuri «înainte 1 pătrățel» puse unul după altul.",
      "answer": true,
      "explain": "Adevărat: rezultatul este același, dar cu ciclul programul e mai scurt și mai ușor de corectat."
    },
    {
      "type": "order",
      "q": "Pune în ordine pașii pentru corectarea unui bug.",
      "items": [
        "Rulează programul și privește rezultatul",
        "Găsește unde rezultatul e diferit de ce voiai",
        "Corectează instrucțiunea greșită",
        "Testează din nou programul"
      ],
      "explain": "Se testează, se caută unde greșește, se corectează și se testează din nou: așa se învață programarea."
    }
  ]
});
