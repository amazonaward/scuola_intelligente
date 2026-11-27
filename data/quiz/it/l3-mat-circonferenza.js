QBANK("it", "l3-mat-circonferenza", {
  "f": [
    { "type": "mc", "q": "Qual è il centro della circonferenza (x − 2)² + (y − 5)² = 9?", "options": ["(2, 5)", "(−2, −5)", "(5, 2)"], "answer": 0, "explain": "Nella forma (x − a)² + (y − b)² = r² il centro è (a, b) = (2, 5); il raggio è 3." },
    { "type": "num", "q": "Qual è il raggio di x² + y² = 49?", "answer": 7, "explain": "r² = 49, quindi r = 7." },
    { "type": "tf", "q": "Il punto (3, 4) appartiene alla circonferenza x² + y² = 25.", "answer": true, "explain": "9 + 16 = 25: le coordinate verificano l'equazione." },
    { "type": "mc", "q": "Una retta con due punti in comune con una circonferenza si dice…", "options": ["tangente", "secante", "esterna"], "answer": 1, "explain": "Due punti: secante; uno: tangente; nessuno: esterna." },
    { "type": "text", "q": "Come si chiama la distanza costante dei punti di una circonferenza dal centro?", "answer": ["raggio", "il raggio"], "explain": "È il raggio r della circonferenza." }
  ],
  "m": [
    { "type": "mc", "q": "Centro della circonferenza x² + y² − 6x + 4y − 3 = 0:", "options": ["(3, −2)", "(−3, 2)", "(6, −4)"], "answer": 0, "explain": "Centro (−α/2 ; −β/2) = (3, −2). Il raggio è √(9 + 4 + 3) = 4." },
    { "type": "num", "q": "Raggio di x² + y² − 6x + 4y − 3 = 0.", "answer": 4, "explain": "r² = 9 + 4 + 3 = 16, quindi r = 4." },
    { "type": "tf", "q": "L'equazione x² + y² + 4 = 0 rappresenta una circonferenza.", "answer": false, "explain": "x² + y² = −4 non ha soluzioni reali: α² + β² − 4γ = −16 &lt; 0." },
    { "type": "num", "q": "Per quale valore positivo di k la retta y = k è tangente a x² + y² = 36?", "answer": 6, "explain": "La distanza di O da y = k è |k|, che deve valere r = 6: k = 6 (o −6)." },
    { "type": "mc", "q": "La circonferenza di centro (0, 3) e raggio 3 è tangente a…", "options": ["l'asse x", "l'asse y e basta", "nessuno dei due assi"], "answer": 0, "explain": "La distanza del centro dall'asse x è 3 = r; dall'asse y è 0 &lt; r (l'asse y è secante). È tangente all'asse x nell'origine." }
  ],
  "d": [
    { "type": "mc", "q": "La tangente a x² + y² = 13 nel punto (2, 3) è…", "options": ["2x + 3y = 13", "3x + 2y = 13", "2x − 3y = 13"], "answer": 0, "explain": "x₀x + y₀y = r²: 2x + 3y = 13." },
    { "type": "num", "q": "Quanti punti hanno in comune x² + y² = 4 e x² + (y − 4)² = 4? Rispondi con un numero.", "answer": 1, "explain": "Centri a distanza 4 = 2 + 2: le circonferenze sono tangenti esternamente nel punto (0, 2)." },
    { "type": "mc", "q": "Circonferenza di centro (1, 1) tangente alla retta x + y − 8 = 0: raggio?", "options": ["3√2", "6", "√2"], "answer": 0, "explain": "r = |1 + 1 − 8|/√2 = 6/√2 = 3√2." },
    { "type": "tf", "q": "Da un punto interno a una circonferenza si possono condurre due tangenti.", "answer": false, "explain": "Dall'interno non esistono tangenti: ogni retta per un punto interno è secante. Le due tangenti esistono solo da punti esterni." },
    { "type": "num", "q": "Per quale k positivo la retta x + y = k è tangente a x² + y² = 18?", "answer": 6, "explain": "d = |k|/√2 = 3√2 → |k| = 6, quindi k = 6." }
  ]
});
