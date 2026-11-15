QBANK("it", "p5-mat-operazioni-decimali", {
  "f": [
    {
      "type": "num",
      "q": "Quanto fa 6,4 + 2,3?",
      "answer": 8.7,
      "tol": 0.001,
      "explain": "Virgola sotto virgola: 6,4 + 2,3 = 8,7."
    },
    {
      "type": "mc",
      "q": "Quanto fa 4,5 × 10?",
      "options": [
        "0,45",
        "45",
        "450"
      ],
      "answer": 1,
      "explain": "Moltiplicare per 10 sposta la virgola di 1 posto a destra: 4,5 × 10 = 45."
    },
    {
      "type": "tf",
      "q": "Per dividere 7,5 per 10 si sposta la virgola di un posto a sinistra.",
      "answer": true,
      "explain": "Vero: 7,5 : 10 = 0,75. Dividere per 10 rende il numero 10 volte più piccolo."
    },
    {
      "type": "num",
      "q": "Quanto fa 12,9 − 4,4?",
      "answer": 8.5,
      "tol": 0.001,
      "explain": "12,9 − 4,4 = 8,5."
    },
    {
      "type": "text",
      "q": "Come si chiama la prima cifra dopo la virgola? (Scrivi la risposta al plurale)",
      "answer": [
        "decimi",
        "i decimi",
        "decimo",
        "il decimo"
      ],
      "explain": "La prima cifra dopo la virgola indica i decimi (1/10); poi vengono i centesimi e i millesimi."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un pacco di pasta costa 1,35 €. Quanto costano 4 pacchi?",
      "answer": 5.4,
      "tol": 0.001,
      "unit": "€",
      "explain": "1,35 × 4 = 5,40 €."
    },
    {
      "type": "num",
      "q": "Quanto fa 4,5 × 2,2?",
      "answer": 9.9,
      "tol": 0.001,
      "explain": "45 × 22 = 990. Le cifre decimali sono 1 + 1 = 2, quindi 9,90 = 9,9."
    },
    {
      "type": "mc",
      "q": "Quanto fa 27,6 : 6?",
      "options": [
        "0,46",
        "46",
        "4,6"
      ],
      "answer": 2,
      "explain": "27 : 6 = 4 resto 3; abbasso il 6 e metto la virgola: 36 : 6 = 6. Risultato 4,6. Controllo: 4,6 × 6 = 27,6."
    },
    {
      "type": "tf",
      "q": "Dividendo un numero per 0,1 si ottiene un numero più piccolo.",
      "answer": false,
      "explain": "Falso: dividere per 0,1 equivale a moltiplicare per 10, quindi il numero diventa più grande. Per esempio 3 : 0,1 = 30."
    },
    {
      "type": "num",
      "q": "Con 20 € compri 3 gelati da 4,50 € l'uno. Quanti euro di resto ricevi?",
      "answer": 6.5,
      "tol": 0.001,
      "unit": "€",
      "explain": "Spesa: 4,50 × 3 = 13,50 €. Resto: 20 − 13,50 = 6,50 €."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Una corda lunga 15,6 m viene tagliata in pezzi da 0,6 m ciascuno. Quanti pezzi si ottengono?",
      "answer": 26,
      "explain": "15,6 : 0,6 = 156 : 6 = 26 pezzi (ho moltiplicato entrambi i numeri per 10)."
    },
    {
      "type": "mc",
      "q": "Quale di questi calcoli è sbagliato?",
      "options": [
        "3,2 × 10 = 32",
        "0,45 × 100 = 45",
        "6,5 : 100 = 6,05"
      ],
      "answer": 2,
      "explain": "6,5 : 100 = 0,065: la virgola si sposta di 2 posti a sinistra. Gli altri due sono corretti."
    },
    {
      "type": "tf",
      "q": "Comprando 3 kg di mele a 2,40 € al kg e 2 kg di pere a 3,10 € al kg, si spendono meno di 14 €.",
      "answer": true,
      "explain": "Mele: 2,40 × 3 = 7,20 €. Pere: 3,10 × 2 = 6,20 €. Totale 13,40 €, che è meno di 14 €."
    },
    {
      "type": "num",
      "q": "Hai 50 €. Compri 2,5 kg di arance a 1,80 € al kg e un pane da 2,30 €. Quanti euro ti restano?",
      "answer": 43.2,
      "tol": 0.001,
      "unit": "€",
      "explain": "Arance: 2,5 × 1,80 = 4,50 €. Spesa totale: 4,50 + 2,30 = 6,80 €. Resto: 50 − 6,80 = 43,20 €."
    },
    {
      "type": "order",
      "q": "Ordina i risultati dal più piccolo al più grande.",
      "items": [
        "6,3 : 100",
        "0,4 × 0,2",
        "0,9 : 3",
        "0,5 + 0,15",
        "2,5 × 0,4"
      ],
      "explain": "6,3 : 100 = 0,063; 0,4 × 0,2 = 0,08; 0,9 : 3 = 0,3; 0,5 + 0,15 = 0,65; 2,5 × 0,4 = 1."
    }
  ]
});
