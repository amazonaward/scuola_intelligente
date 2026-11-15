QBANK("it", "m1-mat-insiemi", {
  "f": [
    {
      "type": "mc",
      "q": "Quale simbolo si legge «appartiene a»?",
      "options": [
        "∉",
        "∈",
        "⊂"
      ],
      "answer": 1,
      "explain": "Il simbolo ∈ indica che un elemento appartiene a un insieme, per esempio 4 ∈ {2, 4, 6}."
    },
    {
      "type": "tf",
      "q": "{1, 2, 3} e {3, 2, 1} sono lo stesso insieme.",
      "answer": true,
      "explain": "In un insieme l'ordine degli elementi non conta."
    },
    {
      "type": "num",
      "q": "Quanti elementi ha l'insieme A = { 2, 4, 6, 8, 10 } ?",
      "answer": 5,
      "explain": "Basta contarli: 2, 4, 6, 8, 10 sono 5 elementi, quindi |A| = 5."
    },
    {
      "type": "mc",
      "q": "Quale simbolo indica l'unione di due insiemi?",
      "options": [
        "∩",
        "∪",
        "−"
      ],
      "answer": 1,
      "explain": "∪ è l'unione (tutti gli elementi dei due insiemi); ∩ è l'intersezione."
    },
    {
      "type": "text",
      "q": "Come si chiama il numero di elementi di un insieme?",
      "answer": [
        "cardinalità",
        "la cardinalità"
      ],
      "explain": "Il numero di elementi di un insieme si chiama cardinalità e si indica con |A|."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "A = { x | x è un numero naturale pari minore di 9 }. Quale elencazione è corretta?",
      "options": [
        "{ 2, 4, 6, 8 }",
        "{ 0, 2, 4, 6, 8 }",
        "{ 2, 4, 6, 8, 10 }"
      ],
      "answer": 1,
      "explain": "Lo 0 è un numero naturale pari e 10 non è minore di 9: A = { 0, 2, 4, 6, 8 }."
    },
    {
      "type": "num",
      "q": "A è l'insieme dei numeri pari da 1 a 20 e B l'insieme dei multipli di 5 da 1 a 20. Quanti elementi ha A ∩ B ?",
      "answer": 2,
      "explain": "I pari sono 2, 4, …, 20; i multipli di 5 sono 5, 10, 15, 20. In comune hanno 10 e 20: sono 2 elementi."
    },
    {
      "type": "mc",
      "q": "Se A = { 1, 2, 3, 4 } e B = { 2, 4 }, quale relazione è corretta?",
      "options": [
        "A ⊂ B",
        "B ⊂ A",
        "B ∈ A"
      ],
      "answer": 1,
      "explain": "Ogni elemento di B (2 e 4) è anche in A, quindi B è un sottoinsieme di A: B ⊂ A."
    },
    {
      "type": "tf",
      "q": "Se A ∩ B = ∅, allora il numero di elementi di A ∪ B è |A| + |B|.",
      "answer": true,
      "explain": "Se non ci sono elementi in comune, nessun elemento viene contato due volte: basta sommare."
    },
    {
      "type": "num",
      "q": "U = { 1, 2, 3, …, 12 } e A è l'insieme dei divisori di 12. Quanti elementi ha il complementare di A rispetto a U ?",
      "answer": 6,
      "explain": "I divisori di 12 sono 1, 2, 3, 4, 6, 12: sono 6. Il complementare ha 12 − 6 = 6 elementi (5, 7, 8, 9, 10, 11)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "In un gruppo di 40 turisti, 25 parlano inglese, 20 parlano francese e 8 non parlano nessuna delle due lingue. Quanti turisti parlano entrambe le lingue?",
      "answer": 13,
      "explain": "Chi parla almeno una lingua: 40 − 8 = 32. Dalla formula |A ∪ B| = |A| + |B| − |A ∩ B|: 32 = 25 + 20 − x, quindi x = 45 − 32 = 13."
    },
    {
      "type": "num",
      "q": "Il prodotto cartesiano A × B contiene 35 coppie e A ha 5 elementi. Quanti elementi ha B ?",
      "answer": 7,
      "explain": "Le coppie sono |A| × |B|: 5 × |B| = 35, quindi |B| = 35 : 5 = 7."
    },
    {
      "type": "mc",
      "q": "|A| = 12, |A ∪ B| = 20 e |A ∩ B| = 5. Quanto vale |B| ?",
      "options": [
        "3",
        "13",
        "15"
      ],
      "answer": 1,
      "explain": "|A ∪ B| = |A| + |B| − |A ∩ B| → 20 = 12 + |B| − 5 → |B| = 20 − 12 + 5 = 13."
    },
    {
      "type": "tf",
      "q": "Le differenze A − B e B − A sono sempre uguali.",
      "answer": false,
      "explain": "Sono uguali solo in casi particolari. Con A = { 1, 2 } e B = { 2, 3 }: A − B = { 1 } mentre B − A = { 3 }."
    },
    {
      "type": "order",
      "q": "Ordina questi insiemi dal più piccolo al più grande, in base al numero di elementi.",
      "items": [
        "I numeri naturali maggiori di 5 e minori di 6",
        "{ a, b, a, b }",
        "I giorni di una settimana",
        "I numeri naturali minori di 10"
      ],
      "explain": "Il primo insieme è vuoto (0 elementi), poi { a, b } (2), i giorni della settimana (7) e infine 0, 1, …, 9 (10 elementi)."
    }
  ]
});
