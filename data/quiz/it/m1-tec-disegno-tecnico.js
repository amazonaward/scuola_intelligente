QBANK("it", "m1-tec-disegno-tecnico", {
  "f": [
    {
      "type": "mc",
      "q": "Quale strumento serve per misurare gli angoli in gradi?",
      "options": [
        "Il compasso",
        "Il goniometro",
        "La riga"
      ],
      "answer": 1,
      "explain": "Il goniometro è un semicerchio graduato da 0° a 180°."
    },
    {
      "type": "tf",
      "q": "La scala 1:1 significa che il disegno ha la stessa misura dell'oggetto reale.",
      "answer": true,
      "explain": "In scala 1:1 1 cm sul foglio corrisponde a 1 cm vero: è la scala reale."
    },
    {
      "type": "mc",
      "q": "Come si chiama il riquadro in basso a destra con nome, titolo e scala?",
      "options": [
        "La quota",
        "La squadratura",
        "Il cartiglio"
      ],
      "answer": 2,
      "explain": "Il cartiglio contiene nome, classe, data, titolo e scala."
    },
    {
      "type": "num",
      "q": "Quanti millimetri misura il lato lungo di un foglio A3?",
      "answer": 420,
      "unit": "mm",
      "explain": "A3 = 297 × 420 mm: il lato lungo è 420 mm."
    },
    {
      "type": "text",
      "q": "Come si chiama lo strumento che serve a tracciare circonferenze e archi?",
      "answer": [
        "compasso",
        "il compasso"
      ],
      "explain": "Il compasso traccia circonferenze e archi e riporta le misure."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Una parete lunga 3 m viene disegnata in scala 1:20. Quanti cm è lunga sul foglio?",
      "answer": 15,
      "unit": "cm",
      "explain": "3 m = 300 cm; 300 : 20 = 15 cm."
    },
    {
      "type": "mc",
      "q": "Una formica lunga 6 mm viene disegnata in scala 10:1. Quanto è lunga nel disegno?",
      "options": [
        "6 mm",
        "60 mm",
        "0,6 mm"
      ],
      "answer": 1,
      "explain": "Scala di ingrandimento: 6 × 10 = 60 mm."
    },
    {
      "type": "tf",
      "q": "Le linee di quota si disegnano con linea continua fine.",
      "answer": true,
      "explain": "Le quote e le linee di riferimento usano la linea continua fine."
    },
    {
      "type": "order",
      "q": "Metti in ordine i passi per costruire la bisettrice di un angolo.",
      "items": [
        "Punta il compasso nel vertice V e traccia un arco che taglia i due lati",
        "Punta nel primo punto d'incontro e traccia un arco dentro l'angolo",
        "Con la stessa apertura, punta nel secondo punto e incrocia l'arco in P",
        "Unisci V con P"
      ],
      "explain": "Prima gli archi dal vertice, poi i due archi che si incrociano in P, infine la retta da V a P."
    },
    {
      "type": "num",
      "q": "Quanti fogli A4 servono per coprire esattamente un foglio A2?",
      "answer": 4,
      "explain": "Ogni formato è la metà del precedente: A2 = 2 × A3 = 4 × A4."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un giardino rettangolare di 12 m × 8 m è disegnato in scala 1:200. Quanti cm² misura l'area del rettangolo sul foglio?",
      "answer": 24,
      "unit": "cm²",
      "explain": "12 m = 1200 cm → 1200 : 200 = 6 cm; 8 m = 800 cm → 800 : 200 = 4 cm. Area = 6 × 4 = 24 cm²."
    },
    {
      "type": "mc",
      "q": "Un pezzo di 3 mm è disegnato lungo 12 mm. Quale scala è stata usata?",
      "options": [
        "1:4",
        "4:1",
        "12:1"
      ],
      "answer": 1,
      "explain": "12 : 3 = 4: il disegno è 4 volte più grande, quindi scala di ingrandimento 4:1."
    },
    {
      "type": "tf",
      "q": "Giulia disegna una porta alta 2 m in scala 1:10 e sulla quota scrive 200. Ha fatto giusto.",
      "answer": false,
      "explain": "È sbagliato: la quota riporta sempre la misura reale in millimetri, quindi 2000, anche se il disegno è in scala."
    },
    {
      "type": "order",
      "q": "Metti in ordine i passi per disegnare un esagono regolare con il compasso.",
      "items": [
        "Traccia una circonferenza",
        "Con la stessa apertura (il raggio) punta su un punto della circonferenza e segna un arco",
        "Ripeti spostandoti di punto in punto, fino a 6 punti",
        "Unisci i 6 punti con la riga"
      ],
      "explain": "Il lato dell'esagono è uguale al raggio: si riporta il raggio 6 volte e poi si uniscono i punti."
    },
    {
      "type": "mc",
      "q": "Perché per costruire l'asse di AB l'apertura del compasso deve essere maggiore di metà AB?",
      "options": [
        "Per far venire il disegno più grande",
        "Perché la punta del compasso si rovina",
        "Perché altrimenti gli archi tracciati da A e da B non si incrociano"
      ],
      "answer": 2,
      "explain": "Se l'apertura fosse minore di metà AB, i due archi non si toccherebbero e non si troverebbero i punti per tracciare l'asse."
    }
  ]
});
