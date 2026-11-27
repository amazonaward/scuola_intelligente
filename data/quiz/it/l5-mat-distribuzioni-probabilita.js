QBANK("it", "l5-mat-distribuzioni-probabilita", {
 "f": [
  { "type": "num", "q": "Quanto vale la somma delle probabilità di tutti i valori di una variabile casuale discreta?", "answer": 1, "explain": "È la probabilità dell'evento certo." },
  { "type": "num", "q": "Qual è il valore atteso del lancio di una moneta se testa = 1 e croce = 0?", "answer": 0.5, "tol": 0.001, "explain": "1·0,5 + 0·0,5 = 0,5." },
  { "type": "mc", "q": "La curva a campana è la distribuzione…", "options": ["normale", "binomiale", "di Poisson"], "answer": 0, "explain": "È la gaussiana." },
  { "type": "tf", "q": "Una distribuzione binomiale descrive il numero di successi in n prove indipendenti.", "answer": true, "explain": "Con probabilità di successo costante p." },
  { "type": "mc", "q": "Il simbolo σ indica…", "options": ["la deviazione standard", "la media", "la probabilità"], "answer": 0, "explain": "σ = √Var." }
 ],
 "m": [
  { "type": "num", "q": "X ~ B(10; 0,4): qual è E(X)?", "answer": 4, "explain": "np = 4." },
  { "type": "num", "q": "Lanci una moneta 3 volte: P(esattamente 1 testa)? (decimali)", "answer": 0.375, "tol": 0.001, "explain": "C(3, 1)/8 = 3/8." },
  { "type": "mc", "q": "In una normale, quale percentuale cade entro μ ± σ?", "options": ["circa 68 %", "circa 95 %", "circa 50 %"], "answer": 0, "explain": "Regola 68-95-99,7." },
  { "type": "num", "q": "Se X ~ N(60; 5), qual è z per x = 70?", "answer": 2, "explain": "(70 − 60)/5 = 2." },
  { "type": "tf", "q": "In una distribuzione di Poisson media e varianza coincidono.", "answer": true, "explain": "Entrambe valgono λ." }
 ],
 "d": [
  { "type": "num", "q": "X ~ B(8; 0,5): calcola P(X = 4). Risposta in decimali.", "answer": 0.2734, "tol": 0.001, "explain": "C(8, 4)/256 = 70/256 ≈ 0,2734." },
  { "type": "num", "q": "Una Poisson ha λ = 2. Calcola P(X = 1). Risposta in decimali.", "answer": 0.2707, "tol": 0.001, "explain": "2e^(−2) ≈ 0,2707." },
  { "type": "num", "q": "Un gioco costa 5 €. Con probabilità 1/10 vinci 40 €, altrimenti 0. Qual è il guadagno atteso per partita?", "answer": -1, "explain": "E = 0,1 · (40 − 5) + 0,9 · (−5) = 3,5 − 4,5 = −1." },
  { "type": "mc", "q": "X ~ N(0; 1): P(−1 ≤ X ≤ 1) vale circa…", "options": ["0,68", "0,95", "0,34"], "answer": 0, "explain": "Entro ±1σ c'è circa il 68 %." },
  { "type": "mc", "q": "Per una variabile casuale Y = 3X + 2 vale…", "options": ["Var(Y) = 9 Var(X)", "Var(Y) = 3 Var(X) + 2", "Var(Y) = Var(X)"], "answer": 0, "explain": "Var(aX + b) = a² Var(X)." }
 ]
});
