QBANK("it", "p5-mat-cerchio", {
  "f": [
    {
      "type": "mc",
      "q": "Come si chiama il punto che si trova alla stessa distanza da tutti i punti della circonferenza?",
      "options": [
        "arco",
        "centro",
        "settore"
      ],
      "answer": 1,
      "explain": "Il centro è il punto dove si pianta l'ago del compasso: da lì tutti i punti della circonferenza sono alla stessa distanza."
    },
    {
      "type": "tf",
      "q": "Il diametro è lungo il doppio del raggio.",
      "answer": true,
      "explain": "Vero: d = r × 2. Il diametro è formato da due raggi messi uno dopo l'altro."
    },
    {
      "type": "num",
      "q": "Una ruota ha il raggio di 8 cm. Quanto misura il suo diametro?",
      "answer": 16,
      "unit": "cm",
      "explain": "d = r × 2 = 8 × 2 = 16 cm."
    },
    {
      "type": "mc",
      "q": "Un segmento che unisce due punti qualsiasi della circonferenza si chiama…",
      "options": [
        "arco",
        "settore",
        "corda"
      ],
      "answer": 2,
      "explain": "Il segmento che unisce due punti della circonferenza è una corda. L'arco, invece, è un pezzo di circonferenza."
    },
    {
      "type": "text",
      "q": "Con quale strumento si disegna una circonferenza?",
      "answer": [
        "compasso",
        "il compasso",
        "un compasso"
      ],
      "explain": "Si usa il compasso: l'ago sta fermo nel centro e la mina gira attorno."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Una pizza ha il diametro di 30 cm. Quanto è lunga la sua circonferenza (il bordo)? (π = 3,14)",
      "answer": 94.2,
      "unit": "cm",
      "explain": "C = d × 3,14 = 30 × 3,14 = 94,2 cm."
    },
    {
      "type": "mc",
      "q": "Un cerchio ha il raggio di 4 dm. Quale calcolo dà la lunghezza della circonferenza?",
      "options": [
        "4 × 3,14",
        "4 × 2 × 3,14",
        "4 × 4 × 3,14"
      ],
      "answer": 1,
      "explain": "C = r × 2 × 3,14. L'ultimo calcolo (r × r × 3,14) servirebbe per l'area, non per il bordo."
    },
    {
      "type": "num",
      "q": "Una ruota di bicicletta ha il diametro di 70 cm. Quanti metri percorre la bici in 10 giri completi? (π = 3,14)",
      "answer": 21.98,
      "tol": 0.01,
      "unit": "m",
      "explain": "Un giro: 70 × 3,14 = 219,8 cm. 10 giri: 2198 cm = 21,98 m."
    },
    {
      "type": "tf",
      "q": "Se il raggio di un cerchio raddoppia, anche la sua circonferenza raddoppia.",
      "answer": true,
      "explain": "Vero: C = r × 2 × 3,14, quindi se r diventa il doppio anche C diventa il doppio."
    },
    {
      "type": "num",
      "q": "Una circonferenza misura 62,8 cm. Quanto misura il suo raggio? (π = 3,14)",
      "answer": 10,
      "unit": "cm",
      "explain": "Diametro: 62,8 : 3,14 = 20 cm. Raggio: 20 : 2 = 10 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Una pista rotonda ha il diametro di 80 m. Marco la percorre 3 volte lungo il bordo. Quanti metri corre? (π = 3,14)",
      "answer": 753.6,
      "tol": 0.01,
      "unit": "m",
      "explain": "Un giro: 80 × 3,14 = 251,2 m. Tre giri: 251,2 × 3 = 753,6 m."
    },
    {
      "type": "mc",
      "q": "Una ruota, in un giro completo, percorre 157 cm. Quanto misura il suo diametro? (π = 3,14)",
      "options": [
        "25 cm",
        "50 cm",
        "78,5 cm",
        "100 cm"
      ],
      "answer": 1,
      "explain": "d = C : 3,14 = 157 : 3,14 = 50 cm. Attenzione: 25 cm sarebbe il raggio."
    },
    {
      "type": "tf",
      "q": "Per fare il giro di un tavolo rotondo con il diametro di 20 cm bastano 60 cm di nastro.",
      "answer": false,
      "explain": "Falso: la circonferenza è 20 × 3,14 = 62,8 cm, più di 60 cm."
    },
    {
      "type": "num",
      "q": "Una pizza ha il diametro di 40 cm. Qual è la sua area? (A = r × r × 3,14)",
      "answer": 1256,
      "tol": 0.01,
      "unit": "cm²",
      "explain": "Raggio: 40 : 2 = 20 cm. Area: 20 × 20 × 3,14 = 400 × 3,14 = 1256 cm²."
    },
    {
      "type": "order",
      "q": "Ordina dalla circonferenza più corta a quella più lunga. (π = 3,14)",
      "items": [
        "Diametro 10 cm",
        "Raggio 7 cm",
        "Diametro 20 cm",
        "Raggio 15 cm"
      ],
      "explain": "Diametro 10 → 31,4 cm; raggio 7 (d = 14) → 43,96 cm; diametro 20 → 62,8 cm; raggio 15 (d = 30) → 94,2 cm."
    }
  ]
});
