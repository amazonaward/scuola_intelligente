QBANK("it", "l5-mat-studio-funzione", {
 "f": [
  { "type": "mc", "q": "Qual è il dominio di f(x) = 1/(x − 2)?", "options": ["x ≠ 2", "x > 2", "tutti i reali"], "answer": 0, "explain": "Il denominatore non può annullarsi." },
  { "type": "tf", "q": "Una funzione pari è simmetrica rispetto all'asse y.", "answer": true, "explain": "f(−x) = f(x)." },
  { "type": "num", "q": "In quale punto f(x) = 2x − 6 interseca l'asse x? (valore di x)", "answer": 3, "explain": "2x − 6 = 0 ⇒ x = 3." },
  { "type": "mc", "q": "Un asintoto orizzontale si trova studiando…", "options": ["il limite per x → ±∞", "la derivata seconda", "il dominio"], "answer": 0, "explain": "lim f(x) = L per x → ±∞ dà y = L." },
  { "type": "mc", "q": "Dove f′ > 0 la funzione…", "options": ["cresce", "decresce", "ha un flesso"], "answer": 0, "explain": "Derivata positiva: funzione crescente." }
 ],
 "m": [
  { "type": "num", "q": "Trova il valore x del minimo di f(x) = x² − 8x + 3.", "answer": 4, "explain": "f′ = 2x − 8 = 0 ⇒ x = 4." },
  { "type": "mc", "q": "Qual è l'asintoto verticale di f(x) = (x + 1)/(x − 5)?", "options": ["x = 5", "x = −1", "y = 1"], "answer": 0, "explain": "Il denominatore si annulla in 5; y = 1 è l'asintoto orizzontale." },
  { "type": "num", "q": "Due numeri positivi hanno somma 20: qual è il massimo del loro prodotto?", "answer": 100, "explain": "x(20 − x) massimo per x = 10: 100." },
  { "type": "mc", "q": "f(x) = e^(−x²) è…", "options": ["pari", "dispari", "né pari né dispari"], "answer": 0, "explain": "f(−x) = e^(−x²) = f(x)." },
  { "type": "tf", "q": "Se f″(x) > 0 il grafico ha la concavità rivolta verso l'alto.", "answer": true, "explain": "f″ positiva ⇒ f convessa." }
 ],
 "d": [
  { "type": "mc", "q": "Qual è l'asintoto obliquo di f(x) = (x² + x + 1)/(x − 1)?", "options": ["y = x + 2", "y = x + 1", "y = x"], "answer": 0, "explain": "x² + x + 1 = (x − 1)(x + 2) + 3 ⇒ f = x + 2 + 3/(x − 1)." },
  { "type": "num", "q": "Per f(x) = x³ − 3x quanto vale f nel punto di minimo relativo?", "answer": -2, "explain": "f′ = 3x² − 3: minimo in x = 1; f(1) = −2." },
  { "type": "num", "q": "Un contadino ha 120 m di rete e vuole recintare un rettangolo con un lato sul fiume (senza rete). Qual è l'area massima in m²?", "answer": 1800, "explain": "A = x(120 − 2x) = 120x − 2x²: massimo in x = 30, A = 30 · 60 = 1800." },
  { "type": "mc", "q": "La funzione f(x) = x ln x ha minimo in…", "options": ["x = 1/e", "x = e", "x = 1"], "answer": 0, "explain": "f′ = ln x + 1 = 0 ⇒ x = 1/e; f″ = 1/x > 0." },
  { "type": "tf", "q": "La funzione f(x) = 1/x ha sia un asintoto orizzontale sia uno verticale.", "answer": true, "explain": "Per x → ±∞ tende a 0 (y = 0); per x → 0 tende a ±∞ (x = 0)." }
 ]
});
