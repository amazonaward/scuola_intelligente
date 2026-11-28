QBANK("de", "l1-mat-monomi-polinomi", {
 "f": [
  { "type": "mc", "q": "Welchen Koeffizienten hat das Monom −5x²y?", "options": ["5", "−5", "2"], "answer": 1, "explain": "Der Koeffizient ist der Zahlenfaktor mit seinem Vorzeichen: −5." },
  { "type": "tf", "q": "Die Monome 3ab² und −7b²a sind ähnlich.", "answer": true, "explain": "Sie haben denselben Buchstabenteil ab² (die Reihenfolge der Buchstaben spielt keine Rolle)." },
  { "type": "num", "q": "Berechne: 5x + 3x − 2x für x = 1 (also den Wert des Terms).", "answer": 6, "explain": "Summe der Koeffizienten: 5 + 3 − 2 = 6, also 6x, und für x = 1 ist der Wert 6." },
  { "type": "mc", "q": "Welchen Grad hat das Polynom x³ − 2x + 5?", "options": ["1", "3", "5"], "answer": 1, "explain": "Der Grad ist der des Glieds mit dem höchsten Grad: x³ hat den Grad 3." },
  { "type": "mc", "q": "Wie viel ist (2x)·(3x²)?", "options": ["5x³", "6x³", "6x²"], "answer": 1, "explain": "Man multipliziert die Koeffizienten (2·3 = 6) und addiert die Exponenten (1 + 2 = 3): 6x³." }
 ],
 "m": [
  { "type": "mc", "q": "Vereinfache: 4a²b − a²b + 3ab²", "options": ["6a²b", "3a²b + 3ab²", "6a³b³"], "answer": 1, "explain": "Nur a²b und a²b sind ähnlich: 4 − 1 = 3. Das Glied 3ab² ist nicht ähnlich und bleibt stehen." },
  { "type": "mc", "q": "Multipliziere aus: (x + 5)².", "options": ["x² + 25", "x² + 10x + 25", "x² + 5x + 25"], "answer": 1, "explain": "x² + 2·x·5 + 25 = x² + 10x + 25." },
  { "type": "num", "q": "Berechne mit einer Binomischen Formel: 49 · 51.", "answer": 2499, "explain": "(50 − 1)(50 + 1) = 50² − 1² = 2500 − 1 = 2499." },
  { "type": "mc", "q": "Multipliziere aus: (x + 2)(x − 3).", "options": ["x² − x − 6", "x² + x − 6", "x² − 6"], "answer": 0, "explain": "x² − 3x + 2x − 6 = x² − x − 6." },
  { "type": "tf", "q": "Das Produkt zweier Polynome vom Grad 2 hat den Grad 4.", "answer": true, "explain": "Beim Produkt addieren sich die Grade (2 + 2 = 4)." }
 ],
 "d": [
  { "type": "mc", "q": "Entwickle (3x − 2y)³ und gib den Koeffizienten des Glieds mit x y² an.", "options": ["−36", "36", "12"], "answer": 1, "explain": "(a − b)³ = a³ − 3a²b + 3ab² − b³ mit a = 3x, b = 2y: Das Glied 3ab² = 3·3x·4y² = 36xy²." },
  { "type": "num", "q": "Wenn a + b = 7 und ab = 12, wie groß ist a² + b²?", "answer": 25, "explain": "(a + b)² = a² + 2ab + b² → 49 = a² + b² + 24, also a² + b² = 25." },
  { "type": "mc", "q": "Wie lautet der Quotient von (12x⁴ − 8x³ + 4x²) : (4x²)?", "options": ["3x² − 2x + 1", "3x² − 2x", "3x⁶ − 2x⁵ + x⁴"], "answer": 0, "explain": "Man dividiert jedes Glied durch 4x²: 3x² − 2x + 1." },
  { "type": "num", "q": "Berechne den Wert des Polynoms P(x) = x³ − 3x² + 2 für x = 3.", "answer": 2, "explain": "27 − 27 + 2 = 2." },
  { "type": "tf", "q": "(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc.", "answer": true, "explain": "Das ist das Quadrat eines Trinoms: die Quadrate der drei Glieder plus die drei doppelten Produkte." }
 ]
});
