QBANK("it", "l2-mat-equivalenza-pitagora", {
  "f": [
    { "type": "num", "q": "Un rettangolo ha base 8 cm e altezza 5 cm. Qual è la sua area?", "answer": 40, "unit": "cm²", "explain": "A = b · h = 8 · 5 = 40 cm²." },
    { "type": "tf", "q": "L'ipotenusa è il lato più lungo di un triangolo rettangolo.", "answer": true, "explain": "Essendo opposta all'angolo maggiore (90°), è il lato maggiore." },
    { "type": "num", "q": "I cateti di un triangolo rettangolo misurano 3 cm e 4 cm. Quanto misura l'ipotenusa?", "answer": 5, "unit": "cm", "explain": "√(9 + 16) = √25 = 5 cm." },
    { "type": "mc", "q": "Quale formula esprime il teorema di Pitagora (c ipotenusa)?", "options": ["a + b = c", "a² + b² = c²", "a · b = c"], "answer": 1, "explain": "La somma dei quadrati dei cateti è uguale al quadrato dell'ipotenusa." },
    { "type": "num", "q": "Un triangolo ha base 12 cm e altezza 5 cm. Quanto vale l'area?", "answer": 30, "unit": "cm²", "explain": "A = 12 · 5 / 2 = 30 cm²." }
  ],
  "m": [
    { "type": "num", "q": "Un cateto di un triangolo rettangolo misura 6 cm e l'ipotenusa 10 cm. Quanto misura l'altro cateto?", "answer": 8, "unit": "cm", "explain": "√(100 − 36) = √64 = 8 cm." },
    { "type": "tf", "q": "Un triangolo con lati 9, 12 e 15 cm è rettangolo.", "answer": true, "explain": "9² + 12² = 81 + 144 = 225 = 15²: vale il teorema inverso di Pitagora." },
    { "type": "num", "q": "Un trapezio ha basi 9 cm e 5 cm e altezza 4 cm. Quanto vale l'area?", "answer": 28, "unit": "cm²", "explain": "A = (B + b) · h / 2 = 14 · 4 / 2 = 28 cm²." },
    { "type": "mc", "q": "Quale tra queste NON è una terna pitagorica?", "options": ["(5, 12, 13)", "(6, 8, 10)", "(4, 5, 6)"], "answer": 2, "explain": "4² + 5² = 41, mentre 6² = 36: non è una terna pitagorica." },
    { "type": "num", "q": "In un triangolo rettangolo c = 20 cm e la proiezione del cateto a è p = 5 cm. Quanto misura a?", "answer": 10, "unit": "cm", "explain": "Primo teorema di Euclide: a² = c · p = 100, a = 10 cm." }
  ],
  "d": [
    { "type": "num", "q": "Le proiezioni dei cateti sull'ipotenusa sono 9 cm e 16 cm. Quanto misura il cateto maggiore?", "answer": 20, "unit": "cm", "explain": "c = 25, b² = c · q = 25 · 16 = 400, quindi b = 20 cm." },
    { "type": "num", "q": "Un rombo ha le diagonali di 16 cm e 12 cm. Quanto misura il suo lato?", "answer": 10, "unit": "cm", "explain": "Le diagonali sono perpendicolari e si dimezzano: il lato è √(8² + 6²) = 10 cm." },
    { "type": "num", "q": "Un triangolo isoscele ha base 16 cm e lati obliqui di 17 cm. Quanto vale la sua altezza?", "answer": 15, "unit": "cm", "explain": "L'altezza divide la base a metà: h = √(17² − 8²) = √225 = 15 cm." },
    { "type": "num", "q": "Un triangolo rettangolo ha ipotenusa 13 cm e altezza relativa all'ipotenusa 60/13 cm. Quanto vale l'area? (Cateti 5 e 12.)", "answer": 30, "unit": "cm²", "explain": "A = a · b / 2 = 5 · 12 / 2 = 30 cm², che coincide con c · h / 2 = 13 · (60/13) / 2 = 30 cm²." },
    { "type": "mc", "q": "Perché il teorema di Pitagora porta alla scoperta dei numeri irrazionali?", "options": ["Perché nel quadrato di lato 1 la diagonale vale √2, non esprimibile come frazione", "Perché richiede numeri molto grandi", "Perché vale solo per i triangoli equilateri"], "answer": 0, "explain": "La diagonale del quadrato unitario è √2, che non è un rapporto di numeri interi: incommensurabile con il lato." }
  ]
});
