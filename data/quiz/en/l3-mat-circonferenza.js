QBANK("en", "l3-mat-circonferenza", {
  "f": [
    { "type": "mc", "q": "What is the centre of the circle (x − 2)² + (y − 5)² = 9?", "options": ["(2, 5)", "(−2, −5)", "(5, 2)"], "answer": 0, "explain": "In the form (x − a)² + (y − b)² = r² the centre is (a, b) = (2, 5); the radius is 3." },
    { "type": "num", "q": "What is the radius of x² + y² = 49?", "answer": 7, "explain": "r² = 49, so r = 7." },
    { "type": "tf", "q": "The point (3, 4) lies on the circle x² + y² = 25.", "answer": true, "explain": "9 + 16 = 25: the coordinates satisfy the equation." },
    { "type": "mc", "q": "A line with two points in common with a circle is called…", "options": ["tangent", "secant", "external"], "answer": 1, "explain": "Two points: secant; one: tangent; none: external." },
    { "type": "text", "q": "What is the constant distance of the points of a circle from its centre called?", "answer": ["radius", "the radius"], "explain": "It is the radius r of the circle." }
  ],
  "m": [
    { "type": "mc", "q": "Centre of the circle x² + y² − 6x + 4y − 3 = 0:", "options": ["(3, −2)", "(−3, 2)", "(6, −4)"], "answer": 0, "explain": "Centre (−α/2 ; −β/2) = (3, −2). The radius is √(9 + 4 + 3) = 4." },
    { "type": "num", "q": "Radius of x² + y² − 6x + 4y − 3 = 0.", "answer": 4, "explain": "r² = 9 + 4 + 3 = 16, so r = 4." },
    { "type": "tf", "q": "The equation x² + y² + 4 = 0 represents a circle.", "answer": false, "explain": "x² + y² = −4 has no real solutions: α² + β² − 4γ = −16 &lt; 0." },
    { "type": "num", "q": "For what positive value of k is the line y = k tangent to x² + y² = 36?", "answer": 6, "explain": "The distance from O to y = k is |k|, which must equal r = 6: k = 6 (or −6)." },
    { "type": "mc", "q": "The circle with centre (0, 3) and radius 3 is tangent to…", "options": ["the x-axis", "only the y-axis", "neither axis"], "answer": 0, "explain": "The distance of the centre from the x-axis is 3 = r; from the y-axis it is 0 &lt; r (the y-axis is a secant). It is tangent to the x-axis at the origin." }
  ],
  "d": [
    { "type": "mc", "q": "The tangent to x² + y² = 13 at the point (2, 3) is…", "options": ["2x + 3y = 13", "3x + 2y = 13", "2x − 3y = 13"], "answer": 0, "explain": "x₀x + y₀y = r²: 2x + 3y = 13." },
    { "type": "num", "q": "How many points do x² + y² = 4 and x² + (y − 4)² = 4 have in common? Answer with a number.", "answer": 1, "explain": "The centres are 4 = 2 + 2 apart: the circles touch externally at the point (0, 2)." },
    { "type": "mc", "q": "Circle with centre (1, 1) tangent to the line x + y − 8 = 0: what is the radius?", "options": ["3√2", "6", "√2"], "answer": 0, "explain": "r = |1 + 1 − 8|/√2 = 6/√2 = 3√2." },
    { "type": "tf", "q": "Two tangents can be drawn from a point inside a circle.", "answer": false, "explain": "There are no tangents from inside: every line through an interior point is a secant. The two tangents exist only from external points." },
    { "type": "num", "q": "For what positive k is the line x + y = k tangent to x² + y² = 18?", "answer": 6, "explain": "d = |k|/√2 = 3√2 → |k| = 6, so k = 6." }
  ]
});
