QBANK("it", "l5-mat-limiti", {
 "f": [
  { "type": "num", "q": "Calcola lim x→2 (x² + 3x).", "answer": 10, "explain": "Funzione continua: si sostituisce, 4 + 6 = 10." },
  { "type": "tf", "q": "Il limite per x → 0 di x² è 0.", "answer": true, "explain": "x² è continua in 0 e vale 0 in 0." },
  { "type": "mc", "q": "lim x→+∞ 1/x vale…", "options": ["0", "1", "+∞"], "answer": 0, "explain": "Più x cresce, più 1/x si avvicina a 0." },
  { "type": "mc", "q": "Un intorno di x₀ di raggio δ è…", "options": ["(x₀ − δ, x₀ + δ)", "(0, δ)", "[x₀, +∞)"], "answer": 0, "explain": "È l'insieme dei punti a distanza minore di δ da x₀." },
  { "type": "text", "q": "Come si chiama la retta a cui il grafico si avvicina all'infinito?", "answer": ["asintoto", "l'asintoto"], "explain": "Si chiama asintoto: verticale, orizzontale o obliquo." }
 ],
 "m": [
  { "type": "num", "q": "Calcola lim x→+∞ (6x² + 1)/(3x² − x).", "answer": 2, "explain": "Stesso grado: 6/3 = 2." },
  { "type": "num", "q": "Calcola lim x→4 (x² − 16)/(x − 4).", "answer": 8, "explain": "(x − 4)(x + 4)/(x − 4) = x + 4 → 8." },
  { "type": "mc", "q": "lim x→0⁻ 1/x vale…", "options": ["+∞", "−∞", "0"], "answer": 1, "explain": "Per x piccolo e negativo 1/x è molto grande in valore assoluto e negativo." },
  { "type": "num", "q": "Calcola lim x→0 sen(4x)/(2x).", "answer": 2, "explain": "sen(4x)/(4x) → 1, quindi il limite è 4/2 = 2." },
  { "type": "tf", "q": "Se i limiti destro e sinistro in x₀ sono diversi, il limite non esiste.", "answer": true, "explain": "Il limite esiste solo se i due limiti laterali coincidono." }
 ],
 "d": [
  { "type": "num", "q": "Calcola lim x→0 (√(x + 4) − 2)/x. Dai il risultato in decimali.", "answer": 0.25, "tol": 0.001, "explain": "Razionalizzando: x/(x(√(x + 4) + 2)) = 1/(√(x + 4) + 2) → 1/4." },
  { "type": "num", "q": "Calcola lim x→+∞ (1 + 3/x)^x.", "answer": 20.0855, "tol": 0.01, "explain": "Con t = x/3: [(1 + 1/t)^t]³ → e³ ≈ 20,0855." },
  { "type": "mc", "q": "Calcola lim x→+∞ (√(x² + x) − x).", "options": ["0", "1/2", "+∞"], "answer": 1, "explain": "Moltiplicando per il coniugato: x/(√(x² + x) + x) = 1/(√(1 + 1/x) + 1) → 1/2." },
  { "type": "mc", "q": "Qual è l'asintoto obliquo di f(x) = (2x² + x + 1)/(x + 1)?", "options": ["y = 2x − 1", "y = 2x + 1", "y = x"], "answer": 0, "explain": "Dividendo: 2x² + x + 1 = (x + 1)(2x − 1) + 2, quindi f(x) = 2x − 1 + 2/(x + 1)." },
  { "type": "tf", "q": "Se lim f(x) = 0 e g è limitata, allora lim f(x)·g(x) = 0.", "answer": true, "explain": "È il teorema del confronto: |f g| ≤ M|f| → 0." }
 ]
});
