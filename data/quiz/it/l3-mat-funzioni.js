QBANK("it", "l3-mat-funzioni", {
  "f": [
    { "type": "mc", "q": "Se f(x) = 3x − 1, quanto vale f(2)?", "options": ["5", "6", "7"], "answer": 0, "explain": "f(2) = 6 − 1 = 5." },
    { "type": "tf", "q": "In una funzione, a ogni elemento del dominio corrisponde uno e un solo elemento del codominio.", "answer": true, "explain": "È la definizione di funzione." },
    { "type": "mc", "q": "Qual è il dominio di f(x) = 1/x?", "options": ["ℝ", "ℝ \\ {0}", "x &gt; 0"], "answer": 1, "explain": "Il denominatore non può essere zero." },
    { "type": "mc", "q": "Come si chiama l'insieme dei valori effettivamente assunti da una funzione?", "options": ["Dominio", "Immagine", "Controimmagine"], "answer": 1, "explain": "È l'insieme immagine." },
    { "type": "num", "q": "Se f(x) = x² e x = −3, quanto vale f(x)?", "answer": 9, "explain": "(−3)² = 9." }
  ],
  "m": [
    { "type": "mc", "q": "Il dominio di f(x) = √(2x − 6) è…", "options": ["x ≥ 3", "x &gt; 3", "x ≥ −3"], "answer": 0, "explain": "2x − 6 ≥ 0 → x ≥ 3." },
    { "type": "mc", "q": "Quale tra queste funzioni è iniettiva su ℝ?", "options": ["f(x) = x²", "f(x) = |x|", "f(x) = x³"], "answer": 2, "explain": "x³ è strettamente crescente: valori diversi hanno cubi diversi." },
    { "type": "num", "q": "Se f(x) = 2x e g(x) = x + 3, quanto vale (g ∘ f)(4)?", "answer": 11, "explain": "f(4) = 8; g(8) = 11." },
    { "type": "tf", "q": "Il grafico di f⁻¹ è simmetrico a quello di f rispetto all'asse delle ascisse.", "answer": false, "explain": "È simmetrico rispetto alla bisettrice y = x." },
    { "type": "mc", "q": "L'inversa di f(x) = x/2 + 1 è…", "options": ["2x − 2", "2x + 2", "x/2 − 1"], "answer": 0, "explain": "y = x/2 + 1 → x = 2(y − 1) = 2y − 2." }
  ],
  "d": [
    { "type": "mc", "q": "Il dominio di f(x) = √(x² − 4x + 3) è…", "options": ["1 ≤ x ≤ 3", "x ≤ 1 ∨ x ≥ 3", "x &lt; 1 ∨ x &gt; 3"], "answer": 1, "explain": "Serve x² − 4x + 3 ≥ 0; radici 1 e 3, valori esterni inclusi." },
    { "type": "mc", "q": "L'inversa di f(x) = (x + 1)/(x − 2) è…", "options": ["(2x + 1)/(x − 1)", "(x − 2)/(x + 1)", "(2x − 1)/(x + 1)"], "answer": 0, "explain": "Da xy − 2y = x + 1 si ottiene x = (2y + 1)/(y − 1)." },
    { "type": "num", "q": "Quante funzioni iniettive ci sono da un insieme di 3 elementi a uno di 5 elementi?", "answer": 60, "explain": "5 · 4 · 3 = 60." },
    { "type": "tf", "q": "Se g ∘ f è iniettiva, allora f è iniettiva.", "answer": true, "explain": "Se f(a) = f(b), allora g(f(a)) = g(f(b)), da cui a = b per l'iniettività di g ∘ f." },
    { "type": "mc", "q": "La funzione f: ℝ → ℝ, f(x) = x³ − x, è…", "options": ["pari", "dispari", "né pari né dispari"], "answer": 1, "explain": "f(−x) = −x³ + x = −f(x)." }
  ]
});
