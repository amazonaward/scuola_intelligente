QBANK("it", "l2-mat-sistemi-lineari", {
 "f": [
  { "type": "num", "q": "Risolvi { x + y = 8 ; x − y = 2 } e dai il valore di x.", "answer": 5, "explain": "Sommando: 2x = 10, quindi x = 5 (e y = 3)." },
  { "type": "tf", "q": "Ogni equazione lineare in x e y rappresenta una retta nel piano.", "answer": true, "explain": "Le equazioni di primo grado in x e y hanno come grafico una retta." },
  { "type": "mc", "q": "Un sistema con una sola soluzione si dice…", "options": ["determinato", "impossibile", "indeterminato"], "answer": 0, "explain": "Determinato = una sola soluzione; le rette sono incidenti." },
  { "type": "mc", "q": "Nel metodo di sostituzione si ricava un'incognita e…", "options": ["la si sostituisce nell'altra equazione", "si divide per zero", "si moltiplica per x"], "answer": 0, "explain": "Il sistema si riduce a un'equazione in una sola incognita." },
  { "type": "num", "q": "Se x = 3 e x + y = 10, quanto vale y?", "answer": 7, "explain": "y = 10 − 3 = 7." }
 ],
 "m": [
  { "type": "mc", "q": "Risolvi { y = x + 1 ; 2x + y = 7 }.", "options": ["(2, 3)", "(3, 4)", "(1, 2)"], "answer": 0, "explain": "2x + x + 1 = 7 → x = 2, y = 3." },
  { "type": "num", "q": "Risolvi { 2x + 3y = 13 ; 2x − y = 1 } e dai il valore di y.", "answer": 3, "explain": "Sottraendo: 4y = 12 → y = 3 (e x = 2)." },
  { "type": "mc", "q": "Il sistema { x + y = 2 ; x + y = 5 } è…", "options": ["determinato", "impossibile", "indeterminato"], "answer": 1, "explain": "x + y non può valere insieme 2 e 5: rette parallele distinte." },
  { "type": "num", "q": "Calcola D = a b′ − a′ b per { 4x + y = 3 ; 2x + 3y = 5 }.", "answer": 10, "explain": "D = 4·3 − 2·1 = 10." },
  { "type": "num", "q": "Due numeri hanno somma 30 e uno è il doppio dell'altro. Qual è il maggiore?", "answer": 20, "explain": "{ x + y = 30 ; x = 2y } → 3y = 30 → y = 10, x = 20." }
 ],
 "d": [
  { "type": "mc", "q": "Per quale valore di k il sistema { x + 2y = 4 ; 3x + ky = 12 } è indeterminato?", "options": ["k = 6", "k = 2", "k = 3"], "answer": 0, "explain": "La seconda deve essere tripla della prima: 3x + 6y = 12, quindi k = 6." },
  { "type": "mc", "q": "Per quale valore di k il sistema { 2x − y = 1 ; 4x − 2y = k } è impossibile?", "options": ["k = 2", "k ≠ 2", "k = 0 soltanto"], "answer": 1, "explain": "La seconda è 2(2x − y) = k: coincide con la prima solo se k = 2; per ogni altro k le rette sono parallele distinte." },
  { "type": "num", "q": "Cramer: risolvi { 2x + y = 7 ; x + 3y = 11 } e dai il valore di x.", "answer": 2, "explain": "D = 6 − 1 = 5; Dx = 7·3 − 11·1 = 10; x = 10/5 = 2 (e y = 3)." },
  { "type": "num", "q": "Un treno copre un tratto in 3 h con il vento a favore e in 4 h contro; la distanza è 120 km. Qual è la velocità senza vento (km/h)?", "answer": 35, "explain": "x + v = 40, x − v = 30 → x = 35." },
  { "type": "tf", "q": "Se in un sistema 2×2 D = 0, il sistema non può essere determinato.", "answer": true, "explain": "Con D = 0 le rette hanno la stessa pendenza: sono parallele o coincidenti, mai incidenti." }
 ]
});
