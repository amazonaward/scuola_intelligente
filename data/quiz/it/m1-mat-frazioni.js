QBANK("it", "m1-mat-frazioni", {
  "f": [
    {
      "type": "mc",
      "q": "Nella frazione 5/8, che numero è il denominatore?",
      "options": [
        "5",
        "8",
        "13"
      ],
      "answer": 1,
      "explain": "Il denominatore è il numero sotto la linea: dice in quante parti uguali è diviso l'intero."
    },
    {
      "type": "tf",
      "q": "La frazione 7/7 è uguale a 1.",
      "answer": true,
      "explain": "7 : 7 = 1: è una frazione apparente."
    },
    {
      "type": "mc",
      "q": "Quale di queste frazioni è propria?",
      "options": [
        "9/5",
        "6/6",
        "4/9"
      ],
      "answer": 2,
      "explain": "È propria se il numeratore è minore del denominatore: 4 &lt; 9."
    },
    {
      "type": "num",
      "q": "Quanto sono i 3/4 di 20?",
      "answer": 15,
      "explain": "20 : 4 = 5; 5 × 3 = 15."
    },
    {
      "type": "text",
      "q": "Come si chiama una frazione che ha il numeratore maggiore del denominatore (e non multiplo)?",
      "answer": [
        "impropria",
        "frazione impropria",
        "la frazione impropria"
      ],
      "explain": "Una frazione con numeratore maggiore del denominatore vale più di un intero ed è detta impropria."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Quale frazione è equivalente a 3/5?",
      "options": [
        "9/20",
        "6/15",
        "6/10"
      ],
      "answer": 2,
      "explain": "Moltiplicando numeratore e denominatore per 2 si ottiene 6/10."
    },
    {
      "type": "mc",
      "q": "Come si scrive 17/5 come numero misto?",
      "options": [
        "2 e 3/5",
        "3 e 2/5",
        "3 e 1/5"
      ],
      "answer": 1,
      "explain": "17 : 5 = 3 con resto 2, quindi 3 interi e 2/5."
    },
    {
      "type": "num",
      "q": "Un ciclista ha percorso i 2/3 di una gara lunga 90 km. Quanti chilometri ha percorso?",
      "answer": 60,
      "unit": "km",
      "explain": "90 : 3 = 30; 30 × 2 = 60 km."
    },
    {
      "type": "mc",
      "q": "Quanto fa 2/3 × 9/4?",
      "options": [
        "3/2",
        "11/7",
        "6/7"
      ],
      "answer": 0,
      "explain": "Moltiplico i numeratori e i denominatori: 18/12; semplifico dividendo per 6 e ottengo 3/2."
    },
    {
      "type": "tf",
      "q": "Tra 3/5 e 2/3 la frazione maggiore è 3/5.",
      "answer": false,
      "explain": "Con denominatore comune 15: 3/5 = 9/15 e 2/3 = 10/15. Quindi è maggiore 2/3."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Una sarta ha 36 m di stoffa. Usa 1/4 della stoffa per un vestito e 1/3 per una tenda. Quanti metri di stoffa restano?",
      "answer": 15,
      "unit": "m",
      "explain": "Vestito: 36 : 4 = 9 m. Tenda: 36 : 3 = 12 m. Usati 9 + 12 = 21 m; restano 36 − 21 = 15 m."
    },
    {
      "type": "mc",
      "q": "Quanto fa l'espressione 1/2 + 1/3 × 3/4 ?",
      "options": [
        "5/7",
        "5/8",
        "3/4"
      ],
      "answer": 2,
      "explain": "Prima la moltiplicazione: 1/3 × 3/4 = 1/4. Poi 1/2 + 1/4 = 2/4 + 1/4 = 3/4."
    },
    {
      "type": "tf",
      "q": "Marco dice: «Per fare 2/3 + 4/5 sommo numeratori e denominatori e ottengo 6/8». Il suo ragionamento è corretto.",
      "answer": false,
      "explain": "È sbagliato: bisogna usare un denominatore comune (15): 10/15 + 12/15 = 22/15."
    },
    {
      "type": "num",
      "q": "Una bottiglia piena per 3/5 contiene 1,2 litri d'acqua. Quanti litri contiene quando è piena del tutto?",
      "answer": 2,
      "tol": 0.01,
      "unit": "L",
      "explain": "Problema inverso: 1,2 : 3 = 0,4 litri per 1/5; 0,4 × 5 = 2 litri."
    },
    {
      "type": "order",
      "q": "Metti in ordine i passi per calcolare 1/4 + 2/3.",
      "items": [
        "Trovo il mcm dei denominatori: 12",
        "Trasformo le frazioni: 3/12 e 8/12",
        "Sommo i numeratori: 11/12",
        "Controllo se si può semplificare"
      ],
      "explain": "Prima il denominatore comune (mcm), poi le frazioni equivalenti, poi la somma e infine la semplificazione."
    }
  ]
});
