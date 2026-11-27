QBANK("it", "l3-mat-ellisse-iperbole", {
  "f": [
    { "type": "mc", "q": "Che cosa è costante in ogni punto di un'ellisse?", "options": ["La somma delle distanze dai due fuochi", "La differenza delle distanze dai fuochi", "La distanza dal centro"], "answer": 0, "explain": "L'ellisse è il luogo dei punti con PF₁ + PF₂ = 2a costante." },
    { "type": "mc", "q": "Che cosa è costante in ogni punto di un'iperbole?", "options": ["La somma delle distanze dai fuochi", "La differenza (in valore assoluto) delle distanze dai fuochi", "Il prodotto delle distanze dai fuochi"], "answer": 1, "explain": "L'iperbole è il luogo dei punti con |PF₁ − PF₂| = 2a." },
    { "type": "tf", "q": "L'iperbole è formata da due rami separati.", "answer": true, "explain": "Il piano taglia entrambe le falde del cono: si ottengono due rami." },
    { "type": "num", "q": "Quanto vale a nell'ellisse x²/36 + y²/16 = 1?", "answer": 6, "explain": "a² = 36, quindi a = 6 (semiasse maggiore, sull'asse x)." },
    { "type": "text", "q": "Come si chiama il punto in cui si trova il Sole rispetto all'orbita ellittica di un pianeta?", "answer": ["fuoco", "un fuoco", "in un fuoco", "il fuoco"], "explain": "Prima legge di Keplero: il Sole occupa uno dei due fuochi dell'ellisse." }
  ],
  "m": [
    { "type": "num", "q": "Nell'ellisse x²/13 + y²/4 = 1 calcola c.", "answer": 3, "explain": "c² = 13 − 4 = 9, quindi c = 3: fuochi (±3, 0)." },
    { "type": "mc", "q": "L'ellisse x²/4 + y²/25 = 1 ha i fuochi…", "options": ["sull'asse y, a (0, ±√21)", "sull'asse x, a (±√21, 0)", "sull'asse y, a (0, ±3)"], "answer": 0, "explain": "Il semiasse maggiore è 5 (verticale): c² = 25 − 4 = 21." },
    { "type": "num", "q": "Eccentricità (in decimale) dell'iperbole x²/16 − y²/9 = 1.", "answer": 1.25, "tol": 0.001, "explain": "c² = 16 + 9 = 25, c = 5; e = c/a = 5/4 = 1,25." },
    { "type": "mc", "q": "La retta y = (2/3)x è un asintoto di quale iperbole?", "options": ["x²/9 − y²/4 = 1", "x²/4 − y²/9 = 1", "x²/9 + y²/4 = 1"], "answer": 0, "explain": "b/a = 2/3 con a = 3 e b = 2." },
    { "type": "tf", "q": "Il grafico di y = 5/x è un'iperbole.", "answer": true, "explain": "Equivale a xy = 5: iperbole equilatera con gli assi come asintoti." }
  ],
  "d": [
    { "type": "mc", "q": "Per quale valore di k la retta y = x + k è tangente a x²/2 + y² = 1?", "options": ["k = ±√3", "k = ±1", "k = ±√2"], "answer": 0, "explain": "Sostituendo: x² + 2(x + k)² = 2 → 3x² + 4kx + 2k² − 2 = 0; Δ/4 = 4k² − 3(2k² − 2) = 6 − 2k² = 0 → k² = 3." },
    { "type": "num", "q": "L'area dell'ellisse x²/9 + y²/4 = 1 è πab. Quanto vale il coefficiente di π?", "answer": 6, "explain": "a = 3, b = 2: area = 6π." },
    { "type": "mc", "q": "Quale equazione rappresenta un'iperbole con fuochi sull'asse y?", "options": ["x²/4 − y²/9 = −1", "x²/4 − y²/9 = 1", "x²/4 + y²/9 = 1"], "answer": 0, "explain": "Con il segno − a destra, y² domina: i rami si aprono in alto e in basso e i fuochi sono (0, ±√13)." },
    { "type": "tf", "q": "Un'ellisse può avere eccentricità 1,2.", "answer": false, "explain": "Per l'ellisse 0 ≤ e &lt; 1; valori maggiori di 1 sono propri dell'iperbole." },
    { "type": "num", "q": "La retta y = x passa per il centro dell'iperbole x²/4 − y²/9 = 1. Quanti punti comuni ha con essa?", "answer": 2, "explain": "Sostituendo y = x: x²/4 − x²/9 = 1 → 5x² = 36 → x = ±6/√5: due punti. La retta è più piatta degli asintoti (pendenza 1 &lt; 3/2), quindi taglia i due rami." }
  ]
});
