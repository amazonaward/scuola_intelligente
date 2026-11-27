QBANK("it", "l3-mat-statistica-bivariata", {
  "f": [
    { "type": "mc", "q": "Come si chiama il grafico in cui ogni individuo è un punto di coordinate (x, y)?", "options": ["diagramma di dispersione", "istogramma", "areogramma"], "answer": 0, "explain": "Il diagramma di dispersione (scatterplot) mostra l'andamento congiunto di due variabili." },
    { "type": "tf", "q": "Se al crescere di x anche y tende a crescere, la correlazione è positiva.", "answer": true, "explain": "Correlazione positiva: i punti salgono; negativa: scendono." },
    { "type": "mc", "q": "Un coefficiente di correlazione r = 1 significa che i punti…", "options": ["stanno esattamente su una retta crescente", "sono sparsi a caso", "stanno su una retta decrescente"], "answer": 0, "explain": "r = 1 è correlazione perfetta positiva; r = −1 perfetta negativa." },
    { "type": "num", "q": "Qual è la media di x per i valori 2, 4, 6, 8?", "answer": 5, "explain": "(2 + 4 + 6 + 8)/4 = 5." },
    { "type": "text", "q": "Come si chiama la differenza tra il valore osservato e quello previsto dalla retta?", "answer": ["residuo", "il residuo", "errore"], "explain": "È il residuo eᵢ = yᵢ − (a + bxᵢ)." }
  ],
  "m": [
    { "type": "num", "q": "Una retta di regressione ha a = 1 e b = 3. Quanto prevede per x = 5?", "answer": 16, "explain": "y = 1 + 3·5 = 16." },
    { "type": "num", "q": "Se σₓᵧ = 12, σₓ = 3 e σᵧ = 5, quanto vale r?", "answer": 0.8, "tol": 0.001, "explain": "r = 12/(3·5) = 12/15 = 0,8." },
    { "type": "mc", "q": "Quale valore di r indica il legame lineare più forte?", "options": ["0,3", "−0,85", "0,6"], "answer": 1, "explain": "Conta il valore assoluto: |−0,85| è il più vicino a 1 (il segno dice solo la direzione)." },
    { "type": "tf", "q": "Una correlazione molto alta tra due variabili dimostra che una è causa dell'altra.", "answer": false, "explain": "Correlazione non implica causalità: possono esserci un fattore di confondimento, causalità inversa o il caso." },
    { "type": "num", "q": "Una retta ha pendenza b = 0,5 e passa per il baricentro (10, 20). Quanto vale a?", "answer": 15, "explain": "a = ȳ − b·x̄ = 20 − 0,5·10 = 15." }
  ],
  "d": [
    { "type": "num", "q": "Dati (1, 3), (2, 5), (3, 7): quanto vale la pendenza b della retta di regressione?", "answer": 2, "explain": "I punti stanno sulla retta y = 2x + 1, quindi b = 2 (σₓᵧ = 4/3, σₓ² = 2/3)." },
    { "type": "mc", "q": "Il quartetto di Anscombe insegna che…", "options": ["gli indici statistici uguali possono nascondere grafici molto diversi: bisogna disegnare i dati", "r è sempre 0,82", "gli outlier non influenzano mai la retta"], "answer": 0, "explain": "Quattro insiemi con stessa media, varianza, r e retta, ma nuvole di punti molto diverse." },
    { "type": "tf", "q": "Un solo valore anomalo molto lontano dagli altri può cambiare molto la retta di regressione.", "answer": true, "explain": "I residui entrano al quadrato: i punti lontani hanno un peso enorme nei minimi quadrati." },
    { "type": "num", "q": "Se r = −0,6, quanto vale il coefficiente di determinazione r²?", "answer": 0.36, "tol": 0.001, "explain": "r² = 0,36: il quadrato elimina il segno." },
    { "type": "mc", "q": "Prevedere il valore di y per un x molto fuori dall'intervallo dei dati si chiama…", "options": ["estrapolazione", "interpolazione", "normalizzazione"], "answer": 0, "explain": "L'estrapolazione è rischiosa; l'interpolazione (dentro l'intervallo) è più affidabile." }
  ]
});
