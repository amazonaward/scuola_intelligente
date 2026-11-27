QBANK("en", "l1-mat-insiemi-numerici", {
 "f": [
  { "type": "mc", "q": "Which of these numbers is not a natural number?", "options": ["0", "17", "−5"], "answer": 2, "explain": "−5 is a negative integer: it belongs to ℤ but not to ℕ." },
  { "type": "num", "q": "Calculate: 3 + 4 · 5", "answer": 23, "explain": "Multiplication first: 4 · 5 = 20, then 3 + 20 = 23." },
  { "type": "num", "q": "What is 2⁵?", "answer": 32, "explain": "2 · 2 · 2 · 2 · 2 = 32." },
  { "type": "tf", "q": "The number 1/2 is a rational number.", "answer": true, "explain": "It is a fraction of two integers with a non-zero denominator." },
  { "type": "text", "q": "What is the number below the fraction bar called?", "answer": ["denominator", "the denominator"], "explain": "The denominator tells you into how many equal parts the whole is divided." }
 ],
 "m": [
  { "type": "num", "q": "Calculate: (−3) · (−4) + (−2)", "answer": 10, "explain": "(−3)(−4) = +12; 12 + (−2) = 10." },
  { "type": "num", "q": "Calculate: 5⁷ ÷ 5⁴ (as a number)", "answer": 125, "explain": "Same base: 5^(7−4) = 5³ = 125." },
  { "type": "mc", "q": "What is 1/2 + 1/3?", "options": ["2/5", "5/6", "1/6"], "answer": 1, "explain": "Common denominator 6: 3/6 + 2/6 = 5/6." },
  { "type": "mc", "q": "Which of these fractions gives a terminating decimal?", "options": ["1/3", "1/6", "1/8"], "answer": 2, "explain": "8 = 2³ has only the factor 2: 1/8 = 0.125. A 3 in the denominator (1/3 and 1/6) gives a recurring decimal." },
  { "type": "tf", "q": "The value of −4² is 16.", "answer": false, "explain": "The power takes precedence over the minus sign: −4² = −(4²) = −16. Whereas (−4)² = 16." }
 ],
 "d": [
  { "type": "mc", "q": "What is the generating fraction of 0.2(7)?", "options": ["27/99", "25/90", "27/90"], "answer": 1, "explain": "Numerator: 27 − 2 = 25; denominator: 90 (one 9 for the period, one 0 for the non-repeating part). 25/90 = 5/18." },
  { "type": "num", "q": "Calculate (2/3)⁻² and write the result as a decimal.", "answer": 2.25, "tol": 0.001, "explain": "(2/3)⁻² = (3/2)² = 9/4 = 2.25." },
  { "type": "num", "q": "Calculate: 3.(6) − 1.(3)", "answer": 2.33, "tol": 0.01, "explain": "3.(6) = 33/9 = 11/3 and 1.(3) = 12/9 = 4/3; the difference is 7/3 ≈ 2.33." },
  { "type": "tf", "q": "The equation 3x = 7 has a solution in ℤ.", "answer": false, "explain": "The solution is x = 7/3, which is not an integer: it has a solution only in ℚ." },
  { "type": "mc", "q": "Which proof shows that √2 is not rational?", "options": ["A numerical check up to 1000 digits", "A proof by contradiction: if a/b were in lowest terms, a and b would both be even", "The fact that √2 has infinitely many digits"], "answer": 1, "explain": "From a² = 2b² it follows that a is even, and then that b is even: a contradiction with a/b being in lowest terms. 1/3 = 0.(3) also has infinitely many digits and is rational." }
 ]
});
