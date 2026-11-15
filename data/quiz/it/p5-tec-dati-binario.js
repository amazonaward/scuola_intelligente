QBANK("it", "p5-tec-dati-binario", {
  "f": [
    {
      "type": "mc",
      "q": "Quali cifre usa il codice binario?",
      "options": [
        "Da 0 a 9",
        "Solo 0 e 1",
        "Solo 1 e 2"
      ],
      "answer": 1,
      "explain": "Il binario usa soltanto due cifre: 0 e 1."
    },
    {
      "type": "tf",
      "q": "Un bit può valere soltanto 0 oppure 1.",
      "answer": true,
      "explain": "Il bit è la più piccola informazione: un sì o un no."
    },
    {
      "type": "num",
      "q": "Quanto vale in decimale il numero binario 11?",
      "answer": 3,
      "explain": "Le posizioni valgono 2 e 1: 2 + 1 = 3."
    },
    {
      "type": "mc",
      "q": "Che cos'è un transistor?",
      "options": [
        "Un tipo di cavo",
        "Una memoria per le foto",
        "Un minuscolo interruttore elettronico"
      ],
      "answer": 2,
      "explain": "Un transistor è un interruttore che può essere acceso (1) o spento (0). Nei computer ce ne sono miliardi."
    },
    {
      "type": "tf",
      "q": "Il codice Unicode contiene anche le emoji.",
      "answer": true,
      "explain": "Unicode ha più di 150.000 caratteri di tutte le lingue, comprese le emoji."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Quanto vale in decimale il numero binario 10011?",
      "answer": 19,
      "explain": "Le posizioni sono 16, 8, 4, 2, 1: 16 + 0 + 0 + 2 + 1 = 19."
    },
    {
      "type": "mc",
      "q": "Come si scrive 12 in binario?",
      "options": [
        "1010",
        "1100",
        "1001"
      ],
      "answer": 1,
      "explain": "12 = 8 + 4, quindi sono accese le posizioni 8 e 4: 1100."
    },
    {
      "type": "num",
      "q": "Un'immagine ha 10 pixel e ogni pixel usa 3 byte (rosso, verde, blu). Quanti byte occupa?",
      "answer": 30,
      "unit": "byte",
      "explain": "10 × 3 = 30 byte."
    },
    {
      "type": "order",
      "q": "Metti in ordine questi numeri binari dal più piccolo al più grande.",
      "items": [
        "101",
        "110",
        "1000",
        "1011"
      ],
      "explain": "Valgono 5, 6, 8 e 11."
    },
    {
      "type": "text",
      "q": "Come si chiama il codice, creato nel 1963, che assegna un numero a ogni lettera (A = 65)?",
      "answer": [
        "ascii",
        "il codice ascii",
        "codice ascii"
      ],
      "explain": "L'ASCII dà un numero a ogni carattere, poi scritto in binario."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Quanti bit servono almeno per scrivere 20 valori diversi?",
      "answer": 5,
      "unit": "bit",
      "explain": "Con 4 bit i valori sono 2×2×2×2 = 16, troppo pochi. Con 5 bit sono 32: bastano. Servono 5 bit."
    },
    {
      "type": "num",
      "q": "Un disegno a colori è fatto di 8 × 8 pixel e ogni pixel usa 3 byte. Quanti byte occupa in tutto?",
      "answer": 192,
      "unit": "byte",
      "explain": "8 × 8 = 64 pixel; 64 × 3 = 192 byte."
    },
    {
      "type": "mc",
      "q": "Hai le lampadine accese 16, 2 e 1 (10011). Accendi anche quella da 4. Che numero ottieni in decimale?",
      "options": [
        "22",
        "23",
        "24"
      ],
      "answer": 1,
      "explain": "Ora sono accese 16, 4, 2 e 1: 16 + 4 + 2 + 1 = 23."
    },
    {
      "type": "tf",
      "q": "Passando da 4 bit a 8 bit, le combinazioni possibili raddoppiano (da 16 a 32).",
      "answer": false,
      "explain": "Ogni bit in più raddoppia le combinazioni: con 4 bit in più si moltiplica per 2×2×2×2 = 16, quindi da 16 si arriva a 256."
    },
    {
      "type": "mc",
      "q": "Marco confronta 0111 e 1000. Quale affermazione è giusta?",
      "options": [
        "0111 è maggiore, perché ha tre uni",
        "1000 è maggiore, perché vale 8 contro 7",
        "Sono uguali, perché hanno 4 cifre"
      ],
      "answer": 1,
      "explain": "0111 = 4 + 2 + 1 = 7; 1000 = 8. Conta il valore della posizione, non quanti uni ci sono."
    }
  ]
});
