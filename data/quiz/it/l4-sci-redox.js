QBANK("it", "l4-sci-redox", {
 "f": [
  { "type": "mc", "q": "Che cosa avviene in un'ossidazione?", "options": ["Una specie perde elettroni", "Una specie acquista elettroni", "Si forma sempre un gas", "Cambia il pH"], "answer": 0, "explain": "Ossidazione = perdita di elettroni, con aumento del numero di ossidazione." },
  { "type": "num", "q": "Qual è il numero di ossidazione dell'ossigeno nella maggior parte dei composti (per esempio in H₂O)?", "answer": -2, "tol": 0, "explain": "L'ossigeno vale −2, tranne nei perossidi (−1) e in OF₂." },
  { "type": "tf", "q": "Un elemento allo stato libero, come O₂ o Fe, ha numero di ossidazione 0.", "answer": true, "explain": "Non c'è trasferimento formale di elettroni: il n.o. di un elemento puro è sempre zero." },
  { "type": "mc", "q": "In una pila, il catodo è il polo dove avviene...", "options": ["la riduzione", "l'ossidazione", "l'evaporazione", "la dissoluzione del sale"], "answer": 0, "explain": "Catodo = riduzione, anodo = ossidazione." },
  { "type": "mc", "q": "Quale di questi è un processo redox?", "options": ["La combustione del metano", "La fusione del ghiaccio", "Lo scioglimento dello zucchero", "L'evaporazione dell'acqua"], "answer": 0, "explain": "Nella combustione il carbonio si ossida e l'ossigeno si riduce; gli altri sono cambiamenti di stato o dissoluzioni." }
 ],
 "m": [
  { "type": "num", "q": "Qual è il numero di ossidazione del carbonio in CH₄?", "answer": -4, "tol": 0, "explain": "x + 4(+1) = 0 → x = −4." },
  { "type": "mc", "q": "In Zn + 2 HCl → ZnCl₂ + H₂, quale specie è l'agente ossidante?", "options": ["H⁺", "Zn", "Cl⁻", "ZnCl₂"], "answer": 0, "explain": "H⁺ passa da +1 a 0: si riduce, quindi è l'ossidante; lo zinco è il riducente." },
  { "type": "num", "q": "Per Cu²⁺ + 2 e⁻ → Cu, quante moli di elettroni servono per ottenere 3 mol di rame?", "answer": 6, "tol": 0, "explain": "Servono 2 mol di e⁻ per ogni mol di Cu: 3 · 2 = 6." },
  { "type": "tf", "q": "Una reazione redox con E° positivo è spontanea.", "answer": true, "explain": "E° > 0 equivale a ΔG° < 0: la reazione procede spontaneamente." },
  { "type": "num", "q": "Quanto vale la carica (C) trasportata da una corrente di 0,50 A in 2,0 minuti?", "answer": 60, "tol": 0, "unit": "C", "explain": "Q = I · t = 0,50 · 120 = 60 C." }
 ],
 "d": [
  { "type": "num", "q": "Qual è il numero di ossidazione del cloro in KClO₄?", "answer": 7, "tol": 0, "explain": "(+1) + x + 4(−2) = 0 → x = +7." },
  { "type": "num", "q": "Una pila ha E° = 1,00 V e n = 2. Quanto vale |ΔG°| in kJ/mol (F = 96 485 C/mol)?", "answer": 193, "tol": 1, "unit": "kJ/mol", "explain": "|ΔG°| = nFE° = 2 · 96 485 · 1,00 ≈ 193 000 J = 193 kJ." },
  { "type": "num", "q": "Per la pila Daniell con [Zn²⁺] = 0,10 M e [Cu²⁺] = 1,0 M, quanto vale E (V) usando Nernst (E° = 1,10 V, n = 2)? Due decimali.", "answer": 1.13, "tol": 0.01, "unit": "V", "explain": "Q = 0,10/1,0 = 0,10; log Q = −1; E = 1,10 − (0,0592/2)(−1) = 1,10 + 0,03 = 1,13 V." },
  { "type": "mc", "q": "Perché la zincatura protegge il ferro anche se graffiata?", "options": ["Lo zinco ha E° più basso e si ossida al posto del ferro", "Lo zinco è un gas", "Lo zinco ha E° più alto del ferro", "Lo zinco impedisce all'acqua di esistere"], "answer": 0, "explain": "Con E° = −0,76 V contro −0,44 V del ferro, lo zinco funziona da anodo sacrificale." },
  { "type": "num", "q": "Quanti grammi di Al (M = 27 g/mol, Al³⁺ + 3 e⁻ → Al) si depositano con 96 485 C? Risposta in grammi.", "answer": 9, "tol": 0.1, "unit": "g", "explain": "1 mol di e⁻ → 1/3 mol di Al = 9,0 g." }
 ]
});
