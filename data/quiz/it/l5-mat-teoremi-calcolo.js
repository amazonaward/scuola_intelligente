QBANK("it", "l5-mat-teoremi-calcolo", {
 "f": [
  { "type": "mc", "q": "Se f′ > 0 in un intervallo, la funzione è…", "options": ["crescente", "decrescente", "costante"], "answer": 0, "explain": "Derivata positiva significa pendenza positiva." },
  { "type": "tf", "q": "In un massimo relativo interno di una funzione derivabile, la tangente è orizzontale.", "answer": true, "explain": "È il teorema di Fermat." },
  { "type": "num", "q": "Trova il punto stazionario di f(x) = x² − 6x.", "answer": 3, "explain": "f′ = 2x − 6 = 0 ⇒ x = 3." },
  { "type": "mc", "q": "Se f″ > 0 il grafico è…", "options": ["convesso (verso l'alto)", "concavo (verso il basso)", "una retta"], "answer": 0, "explain": "f″ > 0: la pendenza cresce, la curva è convessa." },
  { "type": "text", "q": "Come si chiama il punto in cui cambia la concavità?", "answer": ["flesso", "punto di flesso"], "explain": "È un punto di flesso." }
 ],
 "m": [
  { "type": "num", "q": "Calcola lim x→0 (e^(2x) − 1)/x con de l'Hôpital.", "answer": 2, "explain": "2e^(2x)/1 → 2." },
  { "type": "mc", "q": "f(x) = −x² + 4x ha…", "options": ["un massimo in x = 2", "un minimo in x = 2", "un flesso in x = 2"], "answer": 0, "explain": "f′ = −2x + 4 = 0 ⇒ x = 2; f″ = −2 < 0: massimo." },
  { "type": "num", "q": "Per f(x) = x² su [1, 3] trova c di Lagrange.", "answer": 2, "explain": "(9 − 1)/(3 − 1) = 4 = 2c ⇒ c = 2." },
  { "type": "mc", "q": "Quale funzione NON soddisfa Rolle su [−1, 1]?", "options": ["|x|", "x²", "cos x"], "answer": 0, "explain": "|x| non è derivabile in 0." },
  { "type": "tf", "q": "Se f″(x₀) = 0 allora x₀ è sempre un flesso.", "answer": false, "explain": "x⁴ in 0 ha f″ = 0 ma è un minimo." }
 ],
 "d": [
  { "type": "num", "q": "Calcola lim x→0 (x − sen x)/x³. Risposta decimale.", "answer": 0.1667, "tol": 0.001, "explain": "Tre applicazioni di de l'Hôpital: 1/6." },
  { "type": "mc", "q": "Trova i punti di estremo di f(x) = x³ − 3x² + 2.", "options": ["massimo in x = 0, minimo in x = 2", "minimo in x = 0, massimo in x = 2", "nessuno"], "answer": 0, "explain": "f′ = 3x(x − 2) passa da + a − in 0 e da − a + in 2." },
  { "type": "num", "q": "Calcola lim x→0⁺ x·ln x.", "answer": 0, "explain": "ln x/(1/x) → (1/x)/(−1/x²) = −x → 0." },
  { "type": "tf", "q": "Per f(x) = 1/x su [−1, 1] vale il teorema di Lagrange.", "answer": false, "explain": "f non è continua in 0: l'ipotesi manca." },
  { "type": "mc", "q": "Un'auto percorre 150 km in 1,5 h. Quale affermazione è garantita?", "options": ["In qualche istante la velocità era 100 km/h", "La velocità fu sempre 100 km/h", "La velocità massima fu 150 km/h"], "answer": 0, "explain": "Teorema di Lagrange: la velocità media è 100 km/h." }
 ]
});
