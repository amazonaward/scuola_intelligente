QBANK("it", "p4-mat-perimetro", {
  "f": [
    {
      "type": "tf",
      "q": "Il perimetro misura lo spazio all'interno di una figura.",
      "answer": false,
      "explain": "No: il perimetro è la lunghezza del contorno, cioè la misura del giro intorno alla figura."
    },
    {
      "type": "num",
      "q": "Un triangolo equilatero ha il lato di 8 cm. Qual è il suo perimetro?",
      "answer": 24,
      "unit": "cm",
      "explain": "I 3 lati sono uguali: 8 × 3 = 24 cm."
    },
    {
      "type": "mc",
      "q": "Quale operazione si usa per trovare il perimetro di un quadrato?",
      "options": [
        "lato : 4",
        "lato + 4",
        "lato × 4"
      ],
      "answer": 2,
      "explain": "Il quadrato ha 4 lati uguali, quindi P = lato × 4."
    },
    {
      "type": "mc",
      "q": "Per mettere una rete intorno a un giardino devi conoscere il suo…",
      "options": [
        "peso",
        "perimetro",
        "colore"
      ],
      "answer": 1,
      "explain": "La rete va tutto intorno al giardino: serve la lunghezza del contorno, cioè il perimetro."
    },
    {
      "type": "text",
      "q": "Come si chiama il poligono con 4 lati uguali e 4 angoli retti?",
      "answer": [
        "quadrato",
        "il quadrato"
      ],
      "explain": "Il quadrato ha 4 lati uguali e 4 angoli retti."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Una cornice rettangolare misura 30 cm per 20 cm. Quanti centimetri di legno servono per tutti i lati?",
      "answer": 100,
      "unit": "cm",
      "explain": "(30 + 20) × 2 = 50 × 2 = 100 cm."
    },
    {
      "type": "num",
      "q": "Un triangolo isoscele ha la base di 12 cm e ciascun lato obliquo di 10 cm. Qual è il perimetro?",
      "answer": 32,
      "unit": "cm",
      "explain": "12 + 10 × 2 = 12 + 20 = 32 cm."
    },
    {
      "type": "mc",
      "q": "Il perimetro di un rombo è 36 cm. Quanto è lungo un lato?",
      "options": [
        "9 cm",
        "12 cm",
        "6 cm"
      ],
      "answer": 0,
      "explain": "Il rombo ha 4 lati uguali: 36 : 4 = 9 cm."
    },
    {
      "type": "tf",
      "q": "Un rettangolo di lati 8 cm e 2 cm e un quadrato di lato 5 cm hanno lo stesso perimetro.",
      "answer": true,
      "explain": "Rettangolo: (8 + 2) × 2 = 20 cm. Quadrato: 5 × 4 = 20 cm. Figure diverse possono avere lo stesso perimetro."
    },
    {
      "type": "num",
      "q": "Maria cammina 3 volte intorno a un'aiuola quadrata con il lato di 6 m. Quanti metri percorre?",
      "answer": 72,
      "unit": "m",
      "explain": "Un giro: 6 × 4 = 24 m. Tre giri: 24 × 3 = 72 m."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un rettangolo ha il perimetro di 56 cm e la base è il triplo dell'altezza. Quanto misura la base?",
      "answer": 21,
      "unit": "cm",
      "explain": "b + h = 56 : 2 = 28 cm. La base è 3 parti e l'altezza 1 parte: 4 parti = 28 cm, quindi 1 parte = 7 cm. Base = 7 × 3 = 21 cm."
    },
    {
      "type": "num",
      "q": "Un triangolo isoscele ha perimetro 40 cm e la base misura 12 cm. Quanto misura ciascun lato obliquo?",
      "answer": 14,
      "unit": "cm",
      "explain": "I due lati obliqui insieme: 40 − 12 = 28 cm. Ognuno: 28 : 2 = 14 cm."
    },
    {
      "type": "num",
      "q": "Una pista rettangolare è lunga 120 m e larga 80 m. Marco la percorre 3 volte. Quanti chilometri corre?",
      "answer": 1.2,
      "unit": "km",
      "explain": "Un giro: (120 + 80) × 2 = 400 m. Tre giri: 1200 m = 1,2 km."
    },
    {
      "type": "mc",
      "q": "Luca calcola il perimetro di un rettangolo con base 8 cm e altezza 5 cm così: 8 + 5 × 2 = 18 cm. Dov'è l'errore?",
      "options": [
        "Il risultato è giusto",
        "Doveva fare 8 × 5 = 40 cm",
        "Doveva fare (8 + 5) × 2 = 26 cm: le due misure vanno sommate e il totale raddoppiato"
      ],
      "answer": 2,
      "explain": "Nel rettangolo ci sono 2 basi e 2 altezze: il perimetro è (8 + 5) × 2 = 26 cm. Senza parentesi, 8 + 5 × 2 conta una base sola."
    },
    {
      "type": "order",
      "q": "Metti in ordine queste figure, dal perimetro più piccolo al più grande.",
      "items": [
        "Quadrato di lato 4 cm",
        "Triangolo equilatero di lato 6 cm",
        "Rettangolo 7 cm × 3 cm",
        "Esagono regolare di lato 4 cm",
        "Pentagono regolare di lato 6 cm"
      ],
      "explain": "Perimetri: 4 × 4 = 16 cm; 6 × 3 = 18 cm; (7 + 3) × 2 = 20 cm; 4 × 6 = 24 cm; 6 × 5 = 30 cm."
    }
  ]
});
