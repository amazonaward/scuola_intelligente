QBANK("en", "l3-mat-ellisse-iperbole", {
  "f": [
    { "type": "mc", "q": "What is constant at every point of an ellipse?", "options": ["The sum of the distances from the two foci", "The difference of the distances from the foci", "The distance from the centre"], "answer": 0, "explain": "The ellipse is the locus of points with PF₁ + PF₂ = 2a constant." },
    { "type": "mc", "q": "What is constant at every point of a hyperbola?", "options": ["The sum of the distances from the foci", "The difference (in absolute value) of the distances from the foci", "The product of the distances from the foci"], "answer": 1, "explain": "The hyperbola is the locus of points with |PF₁ − PF₂| = 2a." },
    { "type": "tf", "q": "The hyperbola consists of two separate branches.", "answer": true, "explain": "The plane cuts both halves of the cone: two branches are obtained." },
    { "type": "num", "q": "What is a in the ellipse x²/36 + y²/16 = 1?", "answer": 6, "explain": "a² = 36, so a = 6 (the semi-major axis, on the x-axis)." },
    { "type": "text", "q": "What is the name of the point where the Sun is located with respect to a planet's elliptical orbit?", "answer": ["focus", "a focus", "at a focus", "the focus", "one focus", "at one focus"], "explain": "Kepler's first law: the Sun is at one of the two foci of the ellipse." }
  ],
  "m": [
    { "type": "num", "q": "In the ellipse x²/13 + y²/4 = 1, calculate c.", "answer": 3, "explain": "c² = 13 − 4 = 9, so c = 3: foci (±3, 0)." },
    { "type": "mc", "q": "The ellipse x²/4 + y²/25 = 1 has its foci…", "options": ["on the y-axis, at (0, ±√21)", "on the x-axis, at (±√21, 0)", "on the y-axis, at (0, ±3)"], "answer": 0, "explain": "The semi-major axis is 5 (vertical): c² = 25 − 4 = 21." },
    { "type": "num", "q": "Eccentricity (as a decimal) of the hyperbola x²/16 − y²/9 = 1.", "answer": 1.25, "tol": 0.001, "explain": "c² = 16 + 9 = 25, c = 5; e = c/a = 5/4 = 1.25." },
    { "type": "mc", "q": "The line y = (2/3)x is an asymptote of which hyperbola?", "options": ["x²/9 − y²/4 = 1", "x²/4 − y²/9 = 1", "x²/9 + y²/4 = 1"], "answer": 0, "explain": "b/a = 2/3 with a = 3 and b = 2." },
    { "type": "tf", "q": "The graph of y = 5/x is a hyperbola.", "answer": true, "explain": "It is equivalent to xy = 5: a rectangular hyperbola with the axes as asymptotes." }
  ],
  "d": [
    { "type": "mc", "q": "For what value of k is the line y = x + k tangent to x²/2 + y² = 1?", "options": ["k = ±√3", "k = ±1", "k = ±√2"], "answer": 0, "explain": "Substituting: x² + 2(x + k)² = 2 → 3x² + 4kx + 2k² − 2 = 0; Δ/4 = 4k² − 3(2k² − 2) = 6 − 2k² = 0 → k² = 3." },
    { "type": "num", "q": "The area of the ellipse x²/9 + y²/4 = 1 is πab. What is the coefficient of π?", "answer": 6, "explain": "a = 3, b = 2: area = 6π." },
    { "type": "mc", "q": "Which equation represents a hyperbola with its foci on the y-axis?", "options": ["x²/4 − y²/9 = −1", "x²/4 − y²/9 = 1", "x²/4 + y²/9 = 1"], "answer": 0, "explain": "With the − sign on the right, y² dominates: the branches open upwards and downwards and the foci are (0, ±√13)." },
    { "type": "tf", "q": "An ellipse can have eccentricity 1.2.", "answer": false, "explain": "For the ellipse 0 ≤ e &lt; 1; values greater than 1 belong to the hyperbola." },
    { "type": "num", "q": "The line y = x passes through the centre of the hyperbola x²/4 − y²/9 = 1. How many points does it have in common with it?", "answer": 2, "explain": "Substituting y = x: x²/4 − x²/9 = 1 → 5x² = 36 → x = ±6/√5: two points. The line is less steep than the asymptotes (gradient 1 &lt; 3/2), so it cuts both branches." }
  ]
});
