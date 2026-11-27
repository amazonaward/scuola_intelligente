QBANK("it", "l1-mat-frazioni-algebriche", {
 "f": [
  { "type": "mc", "q": "Una frazione algebrica ha senso quando…", "options": ["il denominatore è diverso da zero", "il numeratore è diverso da zero", "le lettere sono uguali"], "answer": 0, "explain": "Non si può dividere per zero: il denominatore deve essere diverso da 0." },
  { "type": "num", "q": "Calcola 8/x per x = 4.", "answer": 2, "explain": "8 : 4 = 2." },
  { "type": "tf", "q": "x/x = 1 per ogni valore di x diverso da zero.", "answer": true, "explain": "Un numero diviso per sé stesso fa 1, purché non sia 0." },
  { "type": "mc", "q": "Le CE di 5/(x + 7) sono…", "options": ["x ≠ −7", "x ≠ 7", "x ≠ 5"], "answer": 0, "explain": "x + 7 = 0 per x = −7." },
  { "type": "num", "q": "Calcola (x² − 9)/(x − 3) per x = 8.", "answer": 11, "explain": "Si semplifica in x + 3 = 11. Controllo: 55/5 = 11." }
 ],
 "m": [
  { "type": "mc", "q": "Semplifica (2x + 6)/(x + 3).", "options": ["2", "x + 2", "2x"], "answer": 0, "explain": "2(x + 3)/(x + 3) = 2, con x ≠ −3." },
  { "type": "num", "q": "x/2 + x/3 = 5x/6. Quanto vale per x = 6?", "answer": 5, "explain": "5 · 6/6 = 5. Infatti 3 + 2 = 5." },
  { "type": "mc", "q": "Le CE di 1/(x² − x) sono…", "options": ["x ≠ 0 e x ≠ 1", "x ≠ 1", "x ≠ 0"], "answer": 0, "explain": "x² − x = x(x − 1) si annulla per x = 0 e x = 1." },
  { "type": "tf", "q": "(a + b)/a = 1 + b, semplificando la a.", "answer": false, "explain": "(a + b)/a = 1 + b/a. La a non è un fattore del numeratore." },
  { "type": "mc", "q": "x/(x + 1) · (x + 1)/x² =", "options": ["1/x", "x", "1/x²"], "answer": 0, "explain": "Si cancellano x + 1 e una x: resta 1/x, con x ≠ 0, −1." }
 ],
 "d": [
  { "type": "mc", "q": "1/(x − 1) − 1/(x + 1) =", "options": ["2/(x² − 1)", "0", "2x/(x² − 1)"], "answer": 0, "explain": "[(x + 1) − (x − 1)]/(x² − 1) = 2/(x² − 1)." },
  { "type": "num", "q": "(x³ − x)/(x² − x) si semplifica in x + 1. Calcola il valore per x = 9.", "answer": 10, "explain": "x(x − 1)(x + 1)/[x(x − 1)] = x + 1 = 10." },
  { "type": "mc", "q": "Quali sono le CE di x/(x − 1) : (x + 2)/(x − 3)?", "options": ["x ≠ 1, x ≠ 3", "x ≠ 1, x ≠ 3, x ≠ −2", "x ≠ −2"], "answer": 1, "explain": "Servono denominatori non nulli (x ≠ 1, x ≠ 3) e anche divisore non nullo: x + 2 ≠ 0." },
  { "type": "num", "q": "Due resistenze da 12 Ω e 4 Ω in parallelo: quanto vale la resistenza equivalente in ohm?", "answer": 3, "unit": "Ω", "explain": "R = 12·4/(12 + 4) = 48/16 = 3 Ω." },
  { "type": "tf", "q": "(x² − 4)/(x − 2) e x + 2 coincidono per ogni x, compreso x = 2.", "answer": false, "explain": "La frazione non esiste per x = 2, mentre x + 2 sì: coincidono solo per x ≠ 2." }
 ]
});
