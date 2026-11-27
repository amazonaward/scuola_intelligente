QBANK("it", "l5-mat-integrali", {
 "f": [
  { "type": "mc", "q": "∫ 2x dx =", "options": ["x² + c", "2 + c", "x + c"], "answer": 0, "explain": "(x²)′ = 2x." },
  { "type": "tf", "q": "Due primitive di una stessa funzione differiscono per una costante.", "answer": true, "explain": "Segue dal teorema di Lagrange." },
  { "type": "mc", "q": "∫ eˣ dx =", "options": ["eˣ + c", "x eˣ + c", "eˣ⁺¹ + c"], "answer": 0, "explain": "L'esponenziale è uguale alla propria derivata e primitiva." },
  { "type": "num", "q": "Calcola ∫ da 0 a 3 di 2 dx.", "answer": 6, "explain": "Area di un rettangolo 3 × 2." },
  { "type": "mc", "q": "L'integrale definito di una funzione positiva rappresenta…", "options": ["un'area", "una pendenza", "una costante"], "answer": 0, "explain": "L'area sotto il grafico." }
 ],
 "m": [
  { "type": "num", "q": "Calcola ∫ da 1 a 2 di 3x² dx.", "answer": 7, "explain": "[x³]₁² = 8 − 1." },
  { "type": "mc", "q": "∫ sen x dx =", "options": ["− cos x + c", "cos x + c", "sen x + c"], "answer": 0, "explain": "(−cos x)′ = sen x." },
  { "type": "num", "q": "Calcola ∫ da 0 a 1 di eˣ dx. Dai un'approssimazione a due decimali.", "answer": 1.72, "tol": 0.01, "explain": "e − 1 ≈ 1,718." },
  { "type": "mc", "q": "∫ 1/(x + 3) dx =", "options": ["ln|x + 3| + c", "1/(x + 3)² + c", "x/(x + 3) + c"], "answer": 0, "explain": "Numeratore = derivata del denominatore." },
  { "type": "tf", "q": "∫ da a a b di f = ∫ da b a a di f.", "answer": false, "explain": "Scambiando gli estremi il segno cambia." }
 ],
 "d": [
  { "type": "mc", "q": "∫ ln x dx =", "options": ["x ln x − x + c", "1/x + c", "x ln x + c"], "answer": 0, "explain": "Per parti con f′ = 1 e g = ln x." },
  { "type": "num", "q": "Volume del solido ottenuto ruotando y = √x su [0, 4] attorno all'asse x, diviso π.", "answer": 8, "explain": "π ∫ x dx = π [x²/2]₀⁴ = 8π." },
  { "type": "num", "q": "Calcola ∫ da 0 a π/2 di cos x dx.", "answer": 1, "explain": "[sen x]₀^(π/2) = 1." },
  { "type": "mc", "q": "L'integrale improprio ∫ da 1 a +∞ di 1/x² dx vale…", "options": ["1", "+∞", "0"], "answer": 0, "explain": "[−1/x]₁^∞ = 0 + 1 = 1." },
  { "type": "tf", "q": "L'integrale ∫ da 1 a +∞ di 1/x dx è finito.", "answer": false, "explain": "ln M → +∞ per M → ∞: diverge." }
 ]
});
