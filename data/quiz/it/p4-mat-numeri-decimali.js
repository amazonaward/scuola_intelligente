QBANK("it", "p4-mat-numeri-decimali", {
  "f": [
    {
      "type": "mc",
      "q": "Come si legge 0,8?",
      "options": [
        "otto decimi",
        "otto centesimi",
        "otto millesimi"
      ],
      "answer": 0,
      "explain": "La prima cifra dopo la virgola indica i decimi: 0,8 = 8 decimi."
    },
    {
      "type": "tf",
      "q": "Nel numero 8,6 la cifra 6 indica i centesimi.",
      "answer": false,
      "explain": "È la prima cifra dopo la virgola, quindi indica i decimi (6 decimi)."
    },
    {
      "type": "num",
      "q": "Quanto fa 0,5 + 0,3?",
      "answer": 0.8,
      "explain": "5 decimi + 3 decimi = 8 decimi, cioè 0,8."
    },
    {
      "type": "text",
      "q": "Come si chiama il segno che separa la parte intera dalla parte decimale in un numero (in Italia)?",
      "answer": [
        "virgola",
        "la virgola"
      ],
      "explain": "In Italia si usa la virgola (3,14); in altri Paesi si usa il punto (3.14)."
    },
    {
      "type": "mc",
      "q": "Quale numero è uguale a 2,50?",
      "options": [
        "2,05",
        "2,5",
        "25"
      ],
      "answer": 1,
      "explain": "Gli zeri finali dopo la virgola non cambiano il valore: 2,50 = 2,5."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Quanto fa 7,25 − 2,5?",
      "answer": 4.75,
      "explain": "Incolonna virgola sotto virgola: 7,25 − 2,50 = 4,75."
    },
    {
      "type": "mc",
      "q": "Quale numero è compreso fra 3,4 e 3,5?",
      "options": [
        "3,6",
        "3,3",
        "3,45"
      ],
      "answer": 2,
      "explain": "3,4 = 3,40 e 3,5 = 3,50: 3,45 sta nel mezzo."
    },
    {
      "type": "num",
      "q": "Quanto fa 735 : 100?",
      "answer": 7.35,
      "explain": "Dividere per 100 sposta la virgola di 2 posti a sinistra: 7,35."
    },
    {
      "type": "tf",
      "q": "0,7 è maggiore di 0,65.",
      "answer": true,
      "explain": "0,7 = 0,70 e 70 centesimi sono più di 65 centesimi (7 decimi contro 6 decimi)."
    },
    {
      "type": "num",
      "q": "Una matita è lunga 0,175 m. Quanti millimetri sono?",
      "answer": 175,
      "unit": "mm",
      "explain": "1 m = 1000 mm, quindi 0,175 × 1000 = 175 mm (la virgola si sposta di 3 posti)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia compra 2 quaderni da 1,35 € l'uno e una penna da 0,95 €. Paga con 5 €. Quanto ricevi di resto?",
      "answer": 1.35,
      "unit": "€",
      "explain": "Quaderni: 1,35 + 1,35 = 2,70 €. Con la penna: 2,70 + 0,95 = 3,65 €. Resto: 5 − 3,65 = 1,35 €."
    },
    {
      "type": "mc",
      "q": "Luca calcola 6,3 + 4,25 e scrive 10,28. Quale errore ha fatto?",
      "options": [
        "Ha sbagliato a sommare la parte intera",
        "Il risultato è giusto",
        "Ha sommato 3 e 25 come numeri interi: doveva incolonnare 6,30 + 4,25 = 10,55"
      ],
      "answer": 2,
      "explain": "3 decimi e 25 centesimi non si sommano come 28: 6,3 = 6,30, quindi 30 + 25 = 55 centesimi e il totale è 10,55."
    },
    {
      "type": "num",
      "q": "Un nastro è lungo 3,6 m. Ne tagli 3 pezzi da 0,45 m ciascuno. Quanti metri di nastro restano?",
      "answer": 2.25,
      "unit": "m",
      "explain": "Tagliati: 0,45 + 0,45 + 0,45 = 1,35 m. Restano 3,60 − 1,35 = 2,25 m."
    },
    {
      "type": "order",
      "q": "Metti in ordine questi numeri, dal più grande al più piccolo.",
      "items": [
        "2,5",
        "2,45",
        "2,4",
        "2,399",
        "2,04"
      ],
      "explain": "Confronta prima i decimi: 2,5 > 2,45 > 2,4 (4 decimi e 0 centesimi) > 2,399 > 2,04."
    },
    {
      "type": "mc",
      "q": "Parti da 4,07, lo moltiplichi per 10 e poi dividi il risultato per 100. Che numero ottieni?",
      "options": [
        "4,07",
        "0,0407",
        "40,7",
        "0,407"
      ],
      "answer": 3,
      "explain": "4,07 × 10 = 40,7; poi 40,7 : 100 = 0,407."
    }
  ]
});
