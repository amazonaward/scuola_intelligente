QBANK("it", "l5-mat-continuita", {
 "f": [
  { "type": "tf", "q": "I polinomi sono funzioni continue su tutto R.", "answer": true, "explain": "Somma e prodotto di funzioni continue sono continue." },
  { "type": "mc", "q": "Una funzione è continua in x₀ se…", "options": ["lim f(x) = f(x₀)", "f(x₀) = 0", "f è crescente"], "answer": 0, "explain": "È la definizione di continuità." },
  { "type": "num", "q": "Calcola lim x→3 (x² − x) sapendo che la funzione è continua.", "answer": 6, "explain": "Si sostituisce: 9 − 3 = 6." },
  { "type": "mc", "q": "Il grafico di f(x) = 1/x in x = 0 presenta…", "options": ["un asintoto verticale", "un salto finito", "un buco eliminabile"], "answer": 0, "explain": "I limiti laterali sono ±∞: discontinuità di seconda specie." },
  { "type": "tf", "q": "Una funzione continua non può avere salti.", "answer": true, "explain": "Un salto è una discontinuità di prima specie." }
 ],
 "m": [
  { "type": "num", "q": "Per quale k è continua in 1 la funzione f(x) = 3x + k per x < 1 e f(x) = 7 per x ≥ 1?", "answer": 4, "explain": "Limite sinistro 3 + k = 7, quindi k = 4." },
  { "type": "mc", "q": "f(x) = (x² − 1)/(x + 1) in x = −1 ha…", "options": ["discontinuità eliminabile", "un salto", "un asintoto verticale"], "answer": 0, "explain": "= x − 1 per x ≠ −1: limite −2, ma f(−1) non definita." },
  { "type": "tf", "q": "Se f è continua su [0, 1] con f(0) = −1 e f(1) = 2, ha almeno uno zero in (0, 1).", "answer": true, "explain": "Teorema degli zeri: segni opposti agli estremi." },
  { "type": "mc", "q": "Quale funzione ha una discontinuità di seconda specie in 0?", "options": ["1/x²", "|x|/x", "sen x / x"], "answer": 0, "explain": "1/x² tende a +∞ da entrambi i lati." },
  { "type": "num", "q": "Quanto vale il salto di f(x) = |x|/x in 0 (differenza tra i limiti laterali)?", "answer": 2, "explain": "Da −1 a +1: salto di ampiezza 2." }
 ],
 "d": [
  { "type": "mc", "q": "Per quale k la funzione f(x) = (x² − 4)/(x − 2) per x ≠ 2, f(2) = k è continua in 2?", "options": ["4", "2", "0"], "answer": 0, "explain": "Il limite è 4: si ridefinisce f(2) = 4." },
  { "type": "tf", "q": "f(x) = x³ − 3x + 1 ha almeno tre zeri reali in [−2, 2].", "answer": true, "explain": "f(−2) = −1, f(−1) = 3, f(1) = −1, f(2) = 3: tre cambi di segno." },
  { "type": "mc", "q": "Quale intervallo NON garantisce con Weierstrass un massimo per f(x) = 1/x?", "options": ["(0, 1]", "[1, 3]", "[−3, −1]"], "answer": 0, "explain": "In (0, 1] f cresce senza limite per x → 0⁺: manca la chiusura." },
  { "type": "num", "q": "Il polinomio f(x) = x³ + 2x − 5 ha uno zero in [1, 2]. Calcola f(1) · f(2).", "answer": -14, "explain": "f(1) = −2 e f(2) = 7: il prodotto è −14 < 0, quindi per il teorema degli zeri c'è una radice in (1, 2)." },
  { "type": "mc", "q": "L'immagine di [a, b] tramite una funzione continua è…", "options": ["un intervallo chiuso [m, M]", "sempre tutto R", "un insieme discreto"], "answer": 0, "explain": "Per valori intermedi e Weierstrass assume massimo, minimo e tutti i valori in mezzo." }
 ]
});
