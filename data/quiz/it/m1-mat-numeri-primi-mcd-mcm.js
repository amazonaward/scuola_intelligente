QBANK("it", "m1-mat-numeri-primi-mcd-mcm", {
  "f": [
    {
      "type": "mc",
      "q": "Quale di questi numeri è divisibile per 5?",
      "options": [
        "122",
        "135",
        "143"
      ],
      "answer": 1,
      "explain": "Un numero è divisibile per 5 se finisce per 0 o per 5: 135."
    },
    {
      "type": "tf",
      "q": "Il numero 9 è un numero primo.",
      "answer": false,
      "explain": "9 = 3 × 3: ha tre divisori (1, 3, 9), quindi è composto."
    },
    {
      "type": "mc",
      "q": "Quanti divisori ha un numero primo?",
      "options": [
        "Uno solo",
        "Infiniti",
        "Esattamente due"
      ],
      "answer": 2,
      "explain": "Un numero primo è divisibile solo per 1 e per sé stesso: ha esattamente due divisori."
    },
    {
      "type": "num",
      "q": "Qual è il più piccolo numero primo?",
      "answer": 2,
      "explain": "Il numero 1 non è primo (ha un solo divisore). Il 2 ha due divisori, 1 e 2: è il più piccolo primo."
    },
    {
      "type": "text",
      "q": "Come si chiamano i numeri maggiori di 1 che hanno più di due divisori?",
      "answer": [
        "composti",
        "numeri composti",
        "i numeri composti"
      ],
      "explain": "I numeri con più di due divisori (come 6 o 15) si dicono composti."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Quale di questi numeri è divisibile per 9?",
      "options": [
        "5.272",
        "5.276",
        "5.274"
      ],
      "answer": 2,
      "explain": "Un numero è divisibile per 9 se la somma delle cifre lo è: 5 + 2 + 7 + 4 = 18."
    },
    {
      "type": "num",
      "q": "Quanti divisori ha il numero 36?",
      "answer": 9,
      "unit": "divisori",
      "explain": "I divisori di 36 sono 1, 2, 3, 4, 6, 9, 12, 18, 36: in tutto 9."
    },
    {
      "type": "mc",
      "q": "Se due numeri sono primi tra loro, quanto vale il loro MCD?",
      "options": [
        "0",
        "1",
        "Il loro prodotto"
      ],
      "answer": 1,
      "explain": "Primi tra loro significa che l'unico divisore comune è 1: MCD = 1."
    },
    {
      "type": "num",
      "q": "Una striscia di stoffa è lunga 84 cm e larga 60 cm. Vuoi tagliarla in quadrati tutti uguali, più grandi possibile, senza avanzi. Quanto misura il lato di ogni quadrato?",
      "answer": 12,
      "unit": "cm",
      "explain": "Il lato deve dividere sia 84 sia 60, ed essere il più grande: MCD(84, 60) = 12 cm (84 = 2² × 3 × 7, 60 = 2² × 3 × 5)."
    },
    {
      "type": "tf",
      "q": "Ogni numero divisibile per 4 è divisibile anche per 2.",
      "answer": true,
      "explain": "Se un numero è multiplo di 4, è multiplo di 2 × 2, quindi è pari e divisibile per 2."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Tre amici corrono nel parco: Anna ogni 3 giorni, Bruno ogni 4 giorni e Carla ogni 6 giorni. Oggi corrono tutti insieme. Fra quanti giorni correranno di nuovo tutti e tre insieme?",
      "answer": 12,
      "unit": "giorni",
      "explain": "Serve il mcm(3, 4, 6): 3 = 3, 4 = 2², 6 = 2 × 3 → 2² × 3 = 12 giorni."
    },
    {
      "type": "num",
      "q": "Una maestra ha 48 matite, 72 quaderni e 60 gomme. Vuole preparare il maggior numero possibile di kit tutti uguali, senza avanzi. Quanti kit prepara?",
      "answer": 12,
      "unit": "kit",
      "explain": "Serve il MCD(48, 72, 60): 48 = 2⁴ × 3, 72 = 2³ × 3², 60 = 2² × 3 × 5 → fattori comuni con esponente minore: 2² × 3 = 12 kit."
    },
    {
      "type": "mc",
      "q": "Una di queste scomposizioni in fattori primi è sbagliata. Quale?",
      "options": [
        "45 = 3 × 15",
        "84 = 2² × 3 × 7",
        "100 = 2² × 5²"
      ],
      "answer": 0,
      "explain": "15 non è un numero primo (15 = 3 × 5): la scomposizione corretta è 45 = 3² × 5."
    },
    {
      "type": "tf",
      "q": "Per due numeri qualsiasi, il prodotto tra il loro MCD e il loro mcm è uguale al prodotto dei due numeri.",
      "answer": true,
      "explain": "Esempio con 12 e 18: MCD = 6, mcm = 36 e 6 × 36 = 216 = 12 × 18."
    },
    {
      "type": "order",
      "q": "Metti in ordine dal valore più piccolo al più grande.",
      "items": [
        "MCD(9, 16)",
        "mcm(4, 6)",
        "MCD(30, 45)",
        "mcm(4, 5)"
      ],
      "explain": "MCD(9, 16) = 1, mcm(4, 6) = 12, MCD(30, 45) = 15, mcm(4, 5) = 20."
    }
  ]
});
