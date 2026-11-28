QBANK("en", "l3-mat-equazioni-disequazioni", {
  "f": [
    { "type": "mc", "q": "Solve x² − 4 &gt; 0.", "options": ["−2 &lt; x &lt; 2", "x &lt; −2 ∨ x &gt; 2", "x &gt; 2"], "answer": 1, "explain": "Roots ±2; sign the same as the sign of a: outer values." },
    { "type": "tf", "q": "The inequality x² + 1 &gt; 0 is true for every real number.", "answer": true, "explain": "x² ≥ 0, so x² + 1 ≥ 1." },
    { "type": "num", "q": "What is |−7|?", "answer": 7, "explain": "The absolute value is the distance from 0: 7." },
    { "type": "mc", "q": "What are the roots of x² − 5x + 6 = 0?", "options": ["1 and 6", "2 and 3", "−2 and −3"], "answer": 1, "explain": "Sum 5 and product 6: 2 and 3." },
    { "type": "mc", "q": "What is the discriminant Δ of x² − 6x + 5?", "options": ["16", "56", "−4"], "answer": 0, "explain": "Δ = 36 − 20 = 16." }
  ],
  "m": [
    { "type": "mc", "q": "Solve x² − x − 6 ≤ 0.", "options": ["x ≤ −2 ∨ x ≥ 3", "−2 ≤ x ≤ 3", "−3 ≤ x ≤ 2"], "answer": 1, "explain": "Roots −2 and 3; sign opposite to a (a &gt; 0, ≤): inner values, endpoints included." },
    { "type": "mc", "q": "Solve |2x − 4| = 6.", "options": ["x = 5 ∨ x = −1", "x = 5", "x = 1 ∨ x = −5"], "answer": 0, "explain": "2x − 4 = 6 → x = 5; 2x − 4 = −6 → x = −1." },
    { "type": "mc", "q": "Solve (x + 3)/(x − 1) ≤ 0.", "options": ["−3 ≤ x ≤ 1", "−3 ≤ x &lt; 1", "x ≤ −3 ∨ x &gt; 1"], "answer": 1, "explain": "Zeros: −3 (numerator, included) and 1 (denominator, excluded). The quotient is ≤ 0 between the two." },
    { "type": "num", "q": "Solve x⁴ − 10x² + 9 = 0: what is the largest of the real solutions?", "answer": 3, "explain": "t = x² equals 1 or 9, so x = ±1, ±3: the largest is 3." },
    { "type": "tf", "q": "The equation x² + 2x + 5 = 0 has two distinct real solutions.", "answer": false, "explain": "Δ = 4 − 20 = −16 &lt; 0: no real solution." }
  ],
  "d": [
    { "type": "mc", "q": "Solve (x² − 4)(x + 1) &gt; 0.", "options": ["−2 &lt; x &lt; −1 ∨ x &gt; 2", "x &lt; −2 ∨ −1 &lt; x &lt; 2", "−1 &lt; x &lt; 2"], "answer": 0, "explain": "Zeros −2, −1, 2; the product is + to the right of 2, − in (−1; 2), + in (−2; −1), − to the left of −2." },
    { "type": "mc", "q": "Solve √(x − 1) &gt; 2.", "options": ["x &gt; 5", "x &gt; 3", "1 ≤ x &lt; 5"], "answer": 0, "explain": "The right-hand side is positive: x − 1 &gt; 4 → x &gt; 5 (and x ≥ 1 is already satisfied)." },
    { "type": "num", "q": "How many integers satisfy |x − 2| ≤ 3?", "answer": 7, "explain": "−1 ≤ x ≤ 5: the integers are −1, 0, 1, 2, 3, 4, 5, that is 7." },
    { "type": "mc", "q": "For which values of k does the equation x² + kx + 9 = 0 have two distinct real solutions?", "options": ["−6 &lt; k &lt; 6", "k &lt; −6 ∨ k &gt; 6", "k &gt; 0"], "answer": 1, "explain": "Δ = k² − 36 &gt; 0 → k &lt; −6 ∨ k &gt; 6." },
    { "type": "num", "q": "Solve √(x + 6) = x: what is the solution?", "answer": 3, "explain": "x + 6 = x² → x = 3 ∨ x = −2; x = −2 does not work (√4 = 2 ≠ −2). 3 remains." }
  ]
});
