QBANK("en", "l3-mat-funzioni", {
  "f": [
    { "type": "mc", "q": "If f(x) = 3x − 1, what is f(2)?", "options": ["5", "6", "7"], "answer": 0, "explain": "f(2) = 6 − 1 = 5." },
    { "type": "tf", "q": "In a function, each element of the domain corresponds to one and only one element of the codomain.", "answer": true, "explain": "This is the definition of a function." },
    { "type": "mc", "q": "What is the domain of f(x) = 1/x?", "options": ["ℝ", "ℝ \\ {0}", "x &gt; 0"], "answer": 1, "explain": "The denominator cannot be zero." },
    { "type": "mc", "q": "What is the set of values actually taken by a function called?", "options": ["Domain", "Range", "Preimage"], "answer": 1, "explain": "It is the range (image set)." },
    { "type": "num", "q": "If f(x) = x² and x = −3, what is f(x)?", "answer": 9, "explain": "(−3)² = 9." }
  ],
  "m": [
    { "type": "mc", "q": "The domain of f(x) = √(2x − 6) is…", "options": ["x ≥ 3", "x &gt; 3", "x ≥ −3"], "answer": 0, "explain": "2x − 6 ≥ 0 → x ≥ 3." },
    { "type": "mc", "q": "Which of these functions is injective on ℝ?", "options": ["f(x) = x²", "f(x) = |x|", "f(x) = x³"], "answer": 2, "explain": "x³ is strictly increasing: different values have different cubes." },
    { "type": "num", "q": "If f(x) = 2x and g(x) = x + 3, what is (g ∘ f)(4)?", "answer": 11, "explain": "f(4) = 8; g(8) = 11." },
    { "type": "tf", "q": "The graph of f⁻¹ is the reflection of the graph of f in the x-axis.", "answer": false, "explain": "It is the reflection in the line y = x." },
    { "type": "mc", "q": "The inverse of f(x) = x/2 + 1 is…", "options": ["2x − 2", "2x + 2", "x/2 − 1"], "answer": 0, "explain": "y = x/2 + 1 → x = 2(y − 1) = 2y − 2." }
  ],
  "d": [
    { "type": "mc", "q": "The domain of f(x) = √(x² − 4x + 3) is…", "options": ["1 ≤ x ≤ 3", "x ≤ 1 ∨ x ≥ 3", "x &lt; 1 ∨ x &gt; 3"], "answer": 1, "explain": "We need x² − 4x + 3 ≥ 0; roots 1 and 3, outer values with endpoints included." },
    { "type": "mc", "q": "The inverse of f(x) = (x + 1)/(x − 2) is…", "options": ["(2x + 1)/(x − 1)", "(x − 2)/(x + 1)", "(2x − 1)/(x + 1)"], "answer": 0, "explain": "From xy − 2y = x + 1 we get x = (2y + 1)/(y − 1)." },
    { "type": "num", "q": "How many injective functions are there from a set of 3 elements to a set of 5 elements?", "answer": 60, "explain": "5 · 4 · 3 = 60." },
    { "type": "tf", "q": "If g ∘ f is injective, then f is injective.", "answer": true, "explain": "If f(a) = f(b), then g(f(a)) = g(f(b)), so a = b because g ∘ f is injective." },
    { "type": "mc", "q": "The function f: ℝ → ℝ, f(x) = x³ − x, is…", "options": ["even", "odd", "neither even nor odd"], "answer": 1, "explain": "f(−x) = −x³ + x = −f(x)." }
  ]
});
