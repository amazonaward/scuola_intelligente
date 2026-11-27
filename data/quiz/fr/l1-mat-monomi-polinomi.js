QBANK("fr", "l1-mat-monomi-polinomi", {
 "f": [
  { "type": "mc", "q": "Quel est le coefficient du monôme −5x²y ?", "options": ["5", "−5", "2"], "answer": 1, "explain": "Le coefficient est le facteur numérique, avec son signe : −5." },
  { "type": "tf", "q": "Les monômes 3ab² et −7b²a sont semblables.", "answer": true, "explain": "Ils ont la même partie littérale ab² (l'ordre des lettres ne compte pas)." },
  { "type": "num", "q": "Calcule : 5x + 3x − 2x pour x = 1 (c'est-à-dire la valeur de l'expression).", "answer": 6, "explain": "Somme des coefficients : 5 + 3 − 2 = 6, donc 6x, qui vaut 6 pour x = 1." },
  { "type": "mc", "q": "Quel est le degré du polynôme x³ − 2x + 5 ?", "options": ["1", "3", "5"], "answer": 1, "explain": "Le degré est celui du terme de plus haut degré : x³ est de degré 3." },
  { "type": "mc", "q": "Combien font (2x)·(3x²) ?", "options": ["5x³", "6x³", "6x²"], "answer": 1, "explain": "On multiplie les coefficients (2·3 = 6) et on additionne les exposants (1 + 2 = 3) : 6x³." }
 ],
 "m": [
  { "type": "mc", "q": "Réduis : 4a²b − a²b + 3ab²", "options": ["6a²b", "3a²b + 3ab²", "6a³b³"], "answer": 1, "explain": "Seuls les deux termes en a²b sont semblables : 4 − 1 = 3. Le terme 3ab² n'est pas semblable et reste." },
  { "type": "mc", "q": "Développe (x + 5)².", "options": ["x² + 25", "x² + 10x + 25", "x² + 5x + 25"], "answer": 1, "explain": "x² + 2·x·5 + 25 = x² + 10x + 25." },
  { "type": "num", "q": "Calcule à l'aide d'une identité remarquable : 49 · 51.", "answer": 2499, "explain": "(50 − 1)(50 + 1) = 50² − 1² = 2500 − 1 = 2499." },
  { "type": "mc", "q": "Développe (x + 2)(x − 3).", "options": ["x² − x − 6", "x² + x − 6", "x² − 6"], "answer": 0, "explain": "x² − 3x + 2x − 6 = x² − x − 6." },
  { "type": "tf", "q": "Le produit de deux polynômes de degré 2 est de degré 4.", "answer": true, "explain": "Dans un produit, les degrés s'additionnent (2 + 2 = 4)." }
 ],
 "d": [
  { "type": "mc", "q": "Développe (3x − 2y)³ et indique le coefficient du terme en x y².", "options": ["−36", "36", "12"], "answer": 1, "explain": "(a − b)³ = a³ − 3a²b + 3ab² − b³ avec a = 3x, b = 2y : le terme 3ab² = 3·3x·4y² = 36xy²." },
  { "type": "num", "q": "Si a + b = 7 et ab = 12, combien vaut a² + b² ?", "answer": 25, "explain": "(a + b)² = a² + 2ab + b² → 49 = a² + b² + 24, donc a² + b² = 25." },
  { "type": "mc", "q": "Quel est le quotient de (12x⁴ − 8x³ + 4x²) : (4x²) ?", "options": ["3x² − 2x + 1", "3x² − 2x", "3x⁶ − 2x⁵ + x⁴"], "answer": 0, "explain": "On divise chaque terme par 4x² : 3x² − 2x + 1." },
  { "type": "num", "q": "Calcule la valeur du polynôme P(x) = x³ − 3x² + 2 pour x = 3.", "answer": 2, "explain": "27 − 27 + 2 = 2." },
  { "type": "tf", "q": "(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc.", "answer": true, "explain": "C'est le carré d'un trinôme : les carrés des trois termes plus les trois doubles produits." }
 ]
});
