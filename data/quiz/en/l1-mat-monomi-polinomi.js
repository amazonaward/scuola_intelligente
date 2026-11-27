QBANK("en", "l1-mat-monomi-polinomi", {
 "f": [
  { "type": "mc", "q": "What is the coefficient of the monomial −5x²y?", "options": ["5", "−5", "2"], "answer": 1, "explain": "The coefficient is the numerical factor, with its sign: −5." },
  { "type": "tf", "q": "The monomials 3ab² and −7b²a are like terms.", "answer": true, "explain": "They have the same literal part ab² (the order of the letters does not matter)." },
  { "type": "num", "q": "Calculate 5x + 3x − 2x for x = 1 (i.e. the value of the expression).", "answer": 6, "explain": "Sum of the coefficients: 5 + 3 − 2 = 6, so 6x, which equals 6 for x = 1." },
  { "type": "mc", "q": "What is the degree of the polynomial x³ − 2x + 5?", "options": ["1", "3", "5"], "answer": 1, "explain": "The degree is that of the highest-degree term: x³ has degree 3." },
  { "type": "mc", "q": "What is (2x)·(3x²)?", "options": ["5x³", "6x³", "6x²"], "answer": 1, "explain": "Multiply the coefficients (2·3 = 6) and add the exponents (1 + 2 = 3): 6x³." }
 ],
 "m": [
  { "type": "mc", "q": "Simplify: 4a²b − a²b + 3ab²", "options": ["6a²b", "3a²b + 3ab²", "6a³b³"], "answer": 1, "explain": "Only the a²b terms are alike: 4 − 1 = 3. The term 3ab² is not alike and stays." },
  { "type": "mc", "q": "Expand (x + 5)².", "options": ["x² + 25", "x² + 10x + 25", "x² + 5x + 25"], "answer": 1, "explain": "x² + 2·x·5 + 25 = x² + 10x + 25." },
  { "type": "num", "q": "Use a special product to calculate 49 · 51.", "answer": 2499, "explain": "(50 − 1)(50 + 1) = 50² − 1² = 2500 − 1 = 2499." },
  { "type": "mc", "q": "Expand (x + 2)(x − 3).", "options": ["x² − x − 6", "x² + x − 6", "x² − 6"], "answer": 0, "explain": "x² − 3x + 2x − 6 = x² − x − 6." },
  { "type": "tf", "q": "The product of two polynomials of degree 2 has degree 4.", "answer": true, "explain": "In a product the degrees add up (2 + 2 = 4)." }
 ],
 "d": [
  { "type": "mc", "q": "Expand (3x − 2y)³ and give the coefficient of the x y² term.", "options": ["−36", "36", "12"], "answer": 1, "explain": "(a − b)³ = a³ − 3a²b + 3ab² − b³ with a = 3x, b = 2y: the term 3ab² = 3·3x·4y² = 36xy²." },
  { "type": "num", "q": "If a + b = 7 and ab = 12, what is a² + b²?", "answer": 25, "explain": "(a + b)² = a² + 2ab + b² → 49 = a² + b² + 24, so a² + b² = 25." },
  { "type": "mc", "q": "What is the quotient (12x⁴ − 8x³ + 4x²) ÷ (4x²)?", "options": ["3x² − 2x + 1", "3x² − 2x", "3x⁶ − 2x⁵ + x⁴"], "answer": 0, "explain": "Divide each term by 4x²: 3x² − 2x + 1." },
  { "type": "num", "q": "Find the value of the polynomial P(x) = x³ − 3x² + 2 for x = 3.", "answer": 2, "explain": "27 − 27 + 2 = 2." },
  { "type": "tf", "q": "(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc.", "answer": true, "explain": "It is the square of a trinomial: the squares of the three terms plus the three double products." }
 ]
});
