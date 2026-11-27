QBANK("it", "l3-mat-parabola", {
  "f": [
    { "type": "mc", "q": "Quale tra queste equazioni rappresenta una parabola con asse verticale?", "options": ["y = x² + 1", "x² + y² = 1", "y = 2x + 1"], "answer": 0, "explain": "È di secondo grado in x e di primo in y." },
    { "type": "mc", "q": "Il vertice di y = x² + 2 è…", "options": ["(0, 2)", "(2, 0)", "(0, −2)"], "answer": 0, "explain": "Vertice in x = 0, y = 2." },
    { "type": "tf", "q": "La parabola y = x² − 4 incontra l'asse x in due punti.", "answer": true, "explain": "x² = 4 → x = ±2." },
    { "type": "num", "q": "Dove interseca l'asse y la parabola y = x² − 3x + 7? Dai l'ordinata.", "answer": 7, "explain": "Per x = 0, y = c = 7." },
    { "type": "mc", "q": "L'asse di simmetria di y = x² − 8x + 3 è…", "options": ["x = 4", "x = −4", "y = 4"], "answer": 0, "explain": "x = −b/2a = 8/2 = 4." }
  ],
  "m": [
    { "type": "num", "q": "Qual è l'ordinata del vertice di y = x² − 4x + 7?", "answer": 3, "explain": "x_V = 2; y_V = 4 − 8 + 7 = 3." },
    { "type": "mc", "q": "Il fuoco di y = x²/8 è…", "options": ["(0, 2)", "(0, 1/2)", "(0, 8)"], "answer": 0, "explain": "a = 1/8, 1/(4a) = 2: F(0, 2)." },
    { "type": "mc", "q": "La parabola per A(0, 1), B(1, 0), C(2, 1) è…", "options": ["y = x² − 2x + 1", "y = x² + 1", "y = −x² + 2x"], "answer": 0, "explain": "c = 1; a + b + 1 = 0; 4a + 2b + 1 = 1. Si ottiene a = 1, b = −2." },
    { "type": "tf", "q": "La retta y = 4 è esterna alla parabola y = x² − 5.", "answer": false, "explain": "x² − 5 = 4 → x = ±3: due punti, quindi secante." },
    { "type": "num", "q": "Per quale valore di k la retta y = k è tangente alla parabola y = x² + 6?", "answer": 6, "explain": "x² + 6 = k ha una soluzione doppia solo per k = 6 (tangente nel vertice)." }
  ],
  "d": [
    { "type": "mc", "q": "La tangente a y = x² nel suo punto di ascissa 3 è…", "options": ["y = 6x − 9", "y = 3x", "y = 6x + 9"], "answer": 0, "explain": "m = 2·3 = 6; y − 9 = 6(x − 3) → y = 6x − 9." },
    { "type": "num", "q": "Per quale valore di k la retta y = x + k è tangente alla parabola y = x² + 1?", "answer": 0.75, "tol": 0.001, "explain": "x² + 1 = x + k → x² − x + (1 − k) = 0; Δ′ = 1 − 4(1 − k) = 0 → k = 3/4." },
    { "type": "mc", "q": "Da P(0, −1) alla parabola y = x², le tangenti hanno pendenza…", "options": ["±2", "±1", "±4"], "answer": 0, "explain": "y = mx − 1; x² − mx + 1 = 0; Δ′ = m² − 4 = 0 → m = ±2." },
    { "type": "num", "q": "Quanto vale la distanza tra il fuoco e la direttrice della parabola y = 2x²?", "answer": 0.25, "tol": 0.001, "explain": "Fuoco a 1/(4a) = 1/8 dal vertice, direttrice a 1/8 dal lato opposto: distanza 1/4." },
    { "type": "mc", "q": "Quale equazione ha una parabola con asse orizzontale?", "options": ["x = y² − 2y", "y = x² − 2x", "x² + y² = 4"], "answer": 0, "explain": "x = ay² + by + c ha asse parallelo all'asse x." }
  ]
});
