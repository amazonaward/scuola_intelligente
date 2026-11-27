QBANK("it", "l3-mat-retta-analitica", {
  "f": [
    { "type": "num", "q": "Distanza dell'origine dalla retta 5x + 12y − 26 = 0.", "answer": 2, "explain": "|−26|/√(25 + 144) = 26/13 = 2." },
    { "type": "mc", "q": "Il vettore (a, b) è, rispetto alla retta ax + by + c = 0…", "options": ["parallelo", "perpendicolare", "uguale alla retta"], "answer": 1, "explain": "(a, b) è il vettore normale: perpendicolare alla retta." },
    { "type": "tf", "q": "Le rette di un fascio improprio sono tutte parallele.", "answer": true, "explain": "Il centro del fascio è \"all'infinito\": tutte le rette hanno la stessa direzione." },
    { "type": "mc", "q": "Quali sono i punti equidistanti da due punti A e B?", "options": ["L'asse del segmento AB", "La retta AB", "La circonferenza di diametro AB"], "answer": 0, "explain": "Il luogo è la perpendicolare ad AB nel punto medio." },
    { "type": "num", "q": "Area del triangolo con base 8 e altezza 5.", "answer": 20, "explain": "½ · 8 · 5 = 20." }
  ],
  "m": [
    { "type": "mc", "q": "Il fascio di rette per P(−1, 4) è…", "options": ["y − 4 = m(x + 1)", "y + 4 = m(x − 1)", "y − 1 = m(x + 4)"], "answer": 0, "explain": "y − y₀ = m(x − x₀) con x₀ = −1, y₀ = 4." },
    { "type": "num", "q": "Distanza tra le rette parallele 3x + 4y − 5 = 0 e 3x + 4y + 10 = 0.", "answer": 3, "explain": "|−5 − 10|/√(9 + 16) = 15/5 = 3." },
    { "type": "mc", "q": "L'asse del segmento di estremi A(1, 2) e B(5, 2) è…", "options": ["x = 3", "y = 2", "x = 5"], "answer": 0, "explain": "Il punto medio è (3, 2) e il segmento è orizzontale: l'asse è la verticale x = 3." },
    { "type": "num", "q": "Il punto (3, k) è allineato con (0, 0) e (1, 2): quanto vale k?", "answer": 6, "explain": "I tre punti stanno sulla retta y = 2x: k = 6." },
    { "type": "tf", "q": "Il centro del fascio (x + y − 4) + k(x − y) = 0 è (2, 2).", "answer": true, "explain": "Si risolve x + y = 4 e x = y: x = y = 2." }
  ],
  "d": [
    { "type": "mc", "q": "Quali rette per l'origine distano 1 dal punto (2, 0)? Quante sono?", "options": ["Due: y = ±x/√3", "Una sola", "Nessuna"], "answer": 0, "explain": "Il fascio mx − y = 0: |2m|/√(m² + 1) = 1 → 3m² = 1 → m = ±1/√3." },
    { "type": "num", "q": "Un triangolo ha vertici A(0, 0), B(10, 0) e C(x, 6) con x qualsiasi: quanto vale la sua area?", "answer": 30, "explain": "Base 10, altezza 6 (distanza di C dall'asse x): Area = 30, indipendentemente da x." },
    { "type": "mc", "q": "Le bisettrici degli angoli formati da x = 0 e y = 0 sono…", "options": ["y = x e y = −x", "x = 1 e y = 1", "y = 2x e y = −2x"], "answer": 0, "explain": "|x| = |y| → y = ±x." },
    { "type": "num", "q": "Angolo acuto (in gradi) tra le rette y = x e y = 0.", "answer": 45, "explain": "tan θ = |(0 − 1)/(1 + 0)| = 1, θ = 45°." },
    { "type": "mc", "q": "Il luogo dei punti P(x, y) tali che PA² − PB² = 0 con A(0, 0), B(2, 4) è…", "options": ["x + 2y − 5 = 0", "2x − y = 0", "x² + y² = 20"], "answer": 0, "explain": "x² + y² = (x − 2)² + (y − 4)² → 4x + 8y = 20, cioè x + 2y − 5 = 0: l'asse di AB." }
  ]
});
