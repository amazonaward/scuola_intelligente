QBANK("en", "l3-mat-parabola", {
  "f": [
    { "type": "mc", "q": "Which of these equations represents a parabola with a vertical axis?", "options": ["y = x² + 1", "x² + y² = 1", "y = 2x + 1"], "answer": 0, "explain": "It is of the second degree in x and of the first degree in y." },
    { "type": "mc", "q": "The vertex of y = x² + 2 is…", "options": ["(0, 2)", "(2, 0)", "(0, −2)"], "answer": 0, "explain": "Vertex at x = 0, y = 2." },
    { "type": "tf", "q": "The parabola y = x² − 4 meets the x-axis at two points.", "answer": true, "explain": "x² = 4 → x = ±2." },
    { "type": "num", "q": "Where does the parabola y = x² − 3x + 7 cross the y-axis? Give the y-coordinate.", "answer": 7, "explain": "For x = 0, y = c = 7." },
    { "type": "mc", "q": "The axis of symmetry of y = x² − 8x + 3 is…", "options": ["x = 4", "x = −4", "y = 4"], "answer": 0, "explain": "x = −b/2a = 8/2 = 4." }
  ],
  "m": [
    { "type": "num", "q": "What is the y-coordinate of the vertex of y = x² − 4x + 7?", "answer": 3, "explain": "x_V = 2; y_V = 4 − 8 + 7 = 3." },
    { "type": "mc", "q": "The focus of y = x²/8 is…", "options": ["(0, 2)", "(0, 1/2)", "(0, 8)"], "answer": 0, "explain": "a = 1/8, 1/(4a) = 2: F(0, 2)." },
    { "type": "mc", "q": "The parabola through A(0, 1), B(1, 0), C(2, 1) is…", "options": ["y = x² − 2x + 1", "y = x² + 1", "y = −x² + 2x"], "answer": 0, "explain": "c = 1; a + b + 1 = 0; 4a + 2b + 1 = 1. This gives a = 1, b = −2." },
    { "type": "tf", "q": "The line y = 4 is external to the parabola y = x² − 5.", "answer": false, "explain": "x² − 5 = 4 → x = ±3: two points, so it is a secant." },
    { "type": "num", "q": "For what value of k is the line y = k tangent to the parabola y = x² + 6?", "answer": 6, "explain": "x² + 6 = k has a double solution only for k = 6 (tangent at the vertex)." }
  ],
  "d": [
    { "type": "mc", "q": "The tangent to y = x² at its point with x-coordinate 3 is…", "options": ["y = 6x − 9", "y = 3x", "y = 6x + 9"], "answer": 0, "explain": "m = 2·3 = 6; y − 9 = 6(x − 3) → y = 6x − 9." },
    { "type": "num", "q": "For what value of k is the line y = x + k tangent to the parabola y = x² + 1?", "answer": 0.75, "tol": 0.001, "explain": "x² + 1 = x + k → x² − x + (1 − k) = 0; Δ′ = 1 − 4(1 − k) = 0 → k = 3/4." },
    { "type": "mc", "q": "From P(0, −1) to the parabola y = x², the tangents have gradient…", "options": ["±2", "±1", "±4"], "answer": 0, "explain": "y = mx − 1; x² − mx + 1 = 0; Δ′ = m² − 4 = 0 → m = ±2." },
    { "type": "num", "q": "What is the distance between the focus and the directrix of the parabola y = 2x²?", "answer": 0.25, "tol": 0.001, "explain": "The focus is 1/(4a) = 1/8 from the vertex, the directrix 1/8 on the opposite side: distance 1/4." },
    { "type": "mc", "q": "Which equation represents a parabola with a horizontal axis?", "options": ["x = y² − 2y", "y = x² − 2x", "x² + y² = 4"], "answer": 0, "explain": "x = ay² + by + c has its axis parallel to the x-axis." }
  ]
});
