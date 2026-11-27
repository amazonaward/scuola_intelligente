QBANK("en", "l1-mat-frazioni-algebriche", {
 "f": [
  { "type": "mc", "q": "An algebraic fraction makes sense when…", "options": ["the denominator is not zero", "the numerator is not zero", "the letters are equal"], "answer": 0, "explain": "You cannot divide by zero: the denominator must be different from 0." },
  { "type": "num", "q": "Calculate 8/x for x = 4.", "answer": 2, "explain": "8 ÷ 4 = 2." },
  { "type": "tf", "q": "x/x = 1 for every non-zero value of x.", "answer": true, "explain": "A number divided by itself gives 1, as long as it is not 0." },
  { "type": "mc", "q": "The DC of 5/(x + 7) are…", "options": ["x ≠ −7", "x ≠ 7", "x ≠ 5"], "answer": 0, "explain": "x + 7 = 0 for x = −7." },
  { "type": "num", "q": "Calculate (x² − 9)/(x − 3) for x = 8.", "answer": 11, "explain": "It simplifies to x + 3 = 11. Check: 55/5 = 11." }
 ],
 "m": [
  { "type": "mc", "q": "Simplify (2x + 6)/(x + 3).", "options": ["2", "x + 2", "2x"], "answer": 0, "explain": "2(x + 3)/(x + 3) = 2, with x ≠ −3." },
  { "type": "num", "q": "x/2 + x/3 = 5x/6. What is its value for x = 6?", "answer": 5, "explain": "5 · 6/6 = 5. Indeed 3 + 2 = 5." },
  { "type": "mc", "q": "The DC of 1/(x² − x) are…", "options": ["x ≠ 0 and x ≠ 1", "x ≠ 1", "x ≠ 0"], "answer": 0, "explain": "x² − x = x(x − 1) is zero for x = 0 and x = 1." },
  { "type": "tf", "q": "(a + b)/a = 1 + b, cancelling the a.", "answer": false, "explain": "(a + b)/a = 1 + b/a. The a is not a factor of the numerator." },
  { "type": "mc", "q": "x/(x + 1) · (x + 1)/x² =", "options": ["1/x", "x", "1/x²"], "answer": 0, "explain": "Cancel x + 1 and one x: 1/x is left, with x ≠ 0, −1." }
 ],
 "d": [
  { "type": "mc", "q": "1/(x − 1) − 1/(x + 1) =", "options": ["2/(x² − 1)", "0", "2x/(x² − 1)"], "answer": 0, "explain": "[(x + 1) − (x − 1)]/(x² − 1) = 2/(x² − 1)." },
  { "type": "num", "q": "(x³ − x)/(x² − x) simplifies to x + 1. Find its value for x = 9.", "answer": 10, "explain": "x(x − 1)(x + 1)/[x(x − 1)] = x + 1 = 10." },
  { "type": "mc", "q": "What are the DC of x/(x − 1) ÷ (x + 2)/(x − 3)?", "options": ["x ≠ 1, x ≠ 3", "x ≠ 1, x ≠ 3, x ≠ −2", "x ≠ −2"], "answer": 1, "explain": "The denominators must be non-zero (x ≠ 1, x ≠ 3) and so must the divisor: x + 2 ≠ 0." },
  { "type": "num", "q": "Two resistors of 12 Ω and 4 Ω in parallel: what is the equivalent resistance in ohms?", "answer": 3, "unit": "Ω", "explain": "R = 12·4/(12 + 4) = 48/16 = 3 Ω." },
  { "type": "tf", "q": "(x² − 4)/(x − 2) and x + 2 are equal for every x, including x = 2.", "answer": false, "explain": "The fraction does not exist for x = 2, while x + 2 does: they are equal only for x ≠ 2." }
 ]
});
