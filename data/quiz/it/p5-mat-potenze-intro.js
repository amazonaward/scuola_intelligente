QBANK("it", "p5-mat-potenze-intro", {
  "f": [
    {
      "type": "num",
      "q": "Quanto fa 4<sup>3</sup>?",
      "answer": 64,
      "explain": "4 × 4 × 4 = 16 × 4 = 64."
    },
    {
      "type": "mc",
      "q": "Quanto vale 1<sup>100</sup>?",
      "options": [
        "0",
        "1",
        "100"
      ],
      "answer": 1,
      "explain": "1 moltiplicato per sé stesso, anche 100 volte, resta sempre 1."
    },
    {
      "type": "tf",
      "q": "L'esponente indica quante volte la base viene moltiplicata per sé stessa.",
      "answer": true,
      "explain": "Vero: in 2<sup>5</sup> l'esponente 5 dice che la base 2 compare 5 volte come fattore."
    },
    {
      "type": "num",
      "q": "Quanto fa 6<sup>2</sup>?",
      "answer": 36,
      "explain": "6 × 6 = 36."
    },
    {
      "type": "text",
      "q": "Elevare un numero all'esponente 2 si dice anche elevarlo «al…» (una parola).",
      "answer": [
        "quadrato",
        "al quadrato"
      ],
      "explain": "L'esponente 2 si chiama «quadrato», perché l'area di un quadrato si calcola lato × lato."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Quanto fa 2<sup>3</sup> + 3<sup>2</sup>?",
      "answer": 17,
      "explain": "2<sup>3</sup> = 8 e 3<sup>2</sup> = 9. Quindi 8 + 9 = 17."
    },
    {
      "type": "num",
      "q": "Una notizia viene mandata a 4 amici; ognuno la manda ad altri 4, e così via. Quante persone la ricevono al terzo giro?",
      "answer": 64,
      "explain": "1° giro: 4; 2° giro: 4 × 4 = 16; 3° giro: 4 × 4 × 4 = 4<sup>3</sup> = 64 persone."
    },
    {
      "type": "mc",
      "q": "Come si scrive 6 000 000 con una potenza di 10 (6 per una potenza di 10)?",
      "options": [
        "6 × 10<sup>5</sup>",
        "6 × 10<sup>6</sup>",
        "6 × 10<sup>7</sup>"
      ],
      "answer": 1,
      "explain": "6 000 000 = 6 seguito da 6 zeri, quindi 6 × 10<sup>6</sup>."
    },
    {
      "type": "tf",
      "q": "3<sup>4</sup> è uguale a 4<sup>3</sup>.",
      "answer": false,
      "explain": "Falso: 3<sup>4</sup> = 3 × 3 × 3 × 3 = 81, mentre 4<sup>3</sup> = 4 × 4 × 4 = 64. Base ed esponente non si possono scambiare."
    },
    {
      "type": "num",
      "q": "Quale numero è scritto in forma polinomiale 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 7 × 10<sup>0</sup>?",
      "answer": 357,
      "explain": "3 × 100 + 5 × 10 + 7 × 1 = 300 + 50 + 7 = 357."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Calcola 5<sup>2</sup> − 2<sup>4</sup>.",
      "answer": 9,
      "explain": "5<sup>2</sup> = 25 e 2<sup>4</sup> = 16. Quindi 25 − 16 = 9."
    },
    {
      "type": "mc",
      "q": "Quale di queste uguaglianze è corretta?",
      "options": [
        "2<sup>5</sup> = 25",
        "4<sup>3</sup> = 12",
        "3<sup>3</sup> = 27",
        "5<sup>0</sup> = 0"
      ],
      "answer": 2,
      "explain": "3<sup>3</sup> = 3 × 3 × 3 = 27. Le altre sono errori tipici: 2<sup>5</sup> = 32 (non 25), 4<sup>3</sup> = 64 (non 4 × 3) e 5<sup>0</sup> = 1."
    },
    {
      "type": "tf",
      "q": "Il numero 2<sup>10</sup> è maggiore di 10<sup>3</sup>.",
      "answer": true,
      "explain": "Vero: 2<sup>10</sup> = 1024, mentre 10<sup>3</sup> = 1000. Una base più piccola con un esponente più grande può superare l'altra."
    },
    {
      "type": "num",
      "q": "Una colonia di batteri raddoppia ogni ora. Alle 8 ce ne sono 5. Quanti ce ne sono alle 11?",
      "answer": 40,
      "explain": "In 3 ore il numero raddoppia 3 volte: 5 × 2<sup>3</sup> = 5 × 8 = 40."
    },
    {
      "type": "order",
      "q": "Metti in ordine i passaggi per calcolare 3<sup>4</sup>.",
      "items": [
        "Scrivo la moltiplicazione 3 × 3 × 3 × 3",
        "3 × 3 = 9",
        "9 × 3 = 27",
        "27 × 3 = 81"
      ],
      "explain": "Prima scrivo i quattro fattori uguali, poi moltiplico passo dopo passo: 9, poi 27, infine 81."
    }
  ]
});
