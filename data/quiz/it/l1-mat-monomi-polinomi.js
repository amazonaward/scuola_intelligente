QBANK("it", "l1-mat-monomi-polinomi", {
 "f": [
  { "type": "mc", "q": "Qual è il coefficiente del monomio −5x²y?", "options": ["5", "−5", "2"], "answer": 1, "explain": "Il coefficiente è il fattore numerico, con il suo segno: −5." },
  { "type": "tf", "q": "I monomi 3ab² e −7b²a sono simili.", "answer": true, "explain": "Hanno la stessa parte letterale ab² (l'ordine delle lettere non conta)." },
  { "type": "num", "q": "Calcola: 5x + 3x − 2x per x = 1 (cioè il valore dell'espressione).", "answer": 6, "explain": "Somma dei coefficienti: 5 + 3 − 2 = 6, quindi 6x e per x = 1 vale 6." },
  { "type": "mc", "q": "Qual è il grado del polinomio x³ − 2x + 5?", "options": ["1", "3", "5"], "answer": 1, "explain": "Il grado è quello del termine di grado massimo: x³ ha grado 3." },
  { "type": "mc", "q": "Quanto fa (2x)·(3x²)?", "options": ["5x³", "6x³", "6x²"], "answer": 1, "explain": "Si moltiplicano i coefficienti (2·3 = 6) e si sommano gli esponenti (1 + 2 = 3): 6x³." }
 ],
 "m": [
  { "type": "mc", "q": "Riduci: 4a²b − a²b + 3ab²", "options": ["6a²b", "3a²b + 3ab²", "6a³b³"], "answer": 1, "explain": "Solo a²b e a²b sono simili: 4 − 1 = 3. Il termine 3ab² non è simile e resta." },
  { "type": "mc", "q": "Sviluppa (x + 5)².", "options": ["x² + 25", "x² + 10x + 25", "x² + 5x + 25"], "answer": 1, "explain": "x² + 2·x·5 + 25 = x² + 10x + 25." },
  { "type": "num", "q": "Calcola con un prodotto notevole: 49 · 51.", "answer": 2499, "explain": "(50 − 1)(50 + 1) = 50² − 1² = 2500 − 1 = 2499." },
  { "type": "mc", "q": "Sviluppa (x + 2)(x − 3).", "options": ["x² − x − 6", "x² + x − 6", "x² − 6"], "answer": 0, "explain": "x² − 3x + 2x − 6 = x² − x − 6." },
  { "type": "tf", "q": "Il prodotto di due polinomi di grado 2 ha grado 4.", "answer": true, "explain": "Nel prodotto i gradi si sommano (2 + 2 = 4)." }
 ],
 "d": [
  { "type": "mc", "q": "Sviluppa (3x − 2y)³ e indica il coefficiente del termine in x y².", "options": ["−36", "36", "12"], "answer": 1, "explain": "(a − b)³ = a³ − 3a²b + 3ab² − b³ con a = 3x, b = 2y: il termine 3ab² = 3·3x·4y² = 36xy²." },
  { "type": "num", "q": "Se a + b = 7 e ab = 12, quanto vale a² + b²?", "answer": 25, "explain": "(a + b)² = a² + 2ab + b² → 49 = a² + b² + 24, quindi a² + b² = 25." },
  { "type": "mc", "q": "Qual è il quoziente di (12x⁴ − 8x³ + 4x²) : (4x²)?", "options": ["3x² − 2x + 1", "3x² − 2x", "3x⁶ − 2x⁵ + x⁴"], "answer": 0, "explain": "Si divide ogni termine per 4x²: 3x² − 2x + 1." },
  { "type": "num", "q": "Calcola il valore del polinomio P(x) = x³ − 3x² + 2 per x = 3.", "answer": 2, "explain": "27 − 27 + 2 = 2." },
  { "type": "tf", "q": "(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc.", "answer": true, "explain": "È il quadrato di un trinomio: i quadrati dei tre termini più i tre doppi prodotti." }
 ]
});
