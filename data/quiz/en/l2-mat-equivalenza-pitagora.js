QBANK("en", "l2-mat-equivalenza-pitagora", {
  "f": [
    { "type": "num", "q": "A rectangle has base 8 cm and height 5 cm. What is its area?", "answer": 40, "unit": "cm²", "explain": "A = b · h = 8 · 5 = 40 cm²." },
    { "type": "tf", "q": "The hypotenuse is the longest side of a right-angled triangle.", "answer": true, "explain": "Since it is opposite the largest angle (90°), it is the longest side." },
    { "type": "num", "q": "The legs of a right-angled triangle measure 3 cm and 4 cm. How long is the hypotenuse?", "answer": 5, "unit": "cm", "explain": "√(9 + 16) = √25 = 5 cm." },
    { "type": "mc", "q": "Which formula expresses Pythagoras' theorem (c = hypotenuse)?", "options": ["a + b = c", "a² + b² = c²", "a · b = c"], "answer": 1, "explain": "The sum of the squares of the legs equals the square of the hypotenuse." },
    { "type": "num", "q": "A triangle has base 12 cm and height 5 cm. What is its area?", "answer": 30, "unit": "cm²", "explain": "A = 12 · 5 / 2 = 30 cm²." }
  ],
  "m": [
    { "type": "num", "q": "One leg of a right-angled triangle measures 6 cm and the hypotenuse 10 cm. How long is the other leg?", "answer": 8, "unit": "cm", "explain": "√(100 − 36) = √64 = 8 cm." },
    { "type": "tf", "q": "A triangle with sides 9, 12 and 15 cm is right-angled.", "answer": true, "explain": "9² + 12² = 81 + 144 = 225 = 15²: the converse of Pythagoras' theorem applies." },
    { "type": "num", "q": "A trapezium has bases of 9 cm and 5 cm and a height of 4 cm. What is its area?", "answer": 28, "unit": "cm²", "explain": "A = (B + b) · h / 2 = 14 · 4 / 2 = 28 cm²." },
    { "type": "mc", "q": "Which of these is NOT a Pythagorean triple?", "options": ["(5, 12, 13)", "(6, 8, 10)", "(4, 5, 6)"], "answer": 2, "explain": "4² + 5² = 41, whereas 6² = 36: it is not a Pythagorean triple." },
    { "type": "num", "q": "In a right-angled triangle c = 20 cm and the projection of leg a is p = 5 cm. How long is a?", "answer": 10, "unit": "cm", "explain": "Euclid's first theorem: a² = c · p = 100, a = 10 cm." }
  ],
  "d": [
    { "type": "num", "q": "The projections of the legs onto the hypotenuse are 9 cm and 16 cm. How long is the longer leg?", "answer": 20, "unit": "cm", "explain": "c = 25, b² = c · q = 25 · 16 = 400, so b = 20 cm." },
    { "type": "num", "q": "A rhombus has diagonals of 16 cm and 12 cm. How long is its side?", "answer": 10, "unit": "cm", "explain": "The diagonals are perpendicular and bisect each other: the side is √(8² + 6²) = 10 cm." },
    { "type": "num", "q": "An isosceles triangle has a base of 16 cm and equal sides of 17 cm. What is its height?", "answer": 15, "unit": "cm", "explain": "The height bisects the base: h = √(17² − 8²) = √225 = 15 cm." },
    { "type": "num", "q": "A right-angled triangle has hypotenuse 13 cm and height onto the hypotenuse 60/13 cm. What is its area? (Legs 5 and 12.)", "answer": 30, "unit": "cm²", "explain": "A = a · b / 2 = 5 · 12 / 2 = 30 cm², which matches c · h / 2 = 13 · (60/13) / 2 = 30 cm²." },
    { "type": "mc", "q": "Why does Pythagoras' theorem lead to the discovery of irrational numbers?", "options": ["Because in a square with side 1 the diagonal is √2, which cannot be written as a fraction", "Because it requires very large numbers", "Because it only works for equilateral triangles"], "answer": 0, "explain": "The diagonal of the unit square is √2, which is not a ratio of whole numbers: it is incommensurable with the side." }
  ]
});
