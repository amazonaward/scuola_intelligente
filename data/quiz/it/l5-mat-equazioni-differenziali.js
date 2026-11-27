QBANK("it", "l5-mat-equazioni-differenziali", {
 "f": [
  { "type": "mc", "q": "In un'equazione differenziale l'incognita è…", "options": ["una funzione", "un numero", "un angolo"], "answer": 0, "explain": "Si cerca una funzione che verifichi un'equazione contenente le sue derivate." },
  { "type": "num", "q": "Qual è l'ordine di y″ + y = 0?", "answer": 2, "explain": "La derivata più alta è la seconda." },
  { "type": "tf", "q": "y = e^x è soluzione di y′ = y.", "answer": true, "explain": "(e^x)′ = e^x." },
  { "type": "mc", "q": "La soluzione generale di y′ = 5 è…", "options": ["y = 5x + c", "y = 5 + c", "y = e^(5x)"], "answer": 0, "explain": "Si integra: y = ∫ 5 dx." },
  { "type": "mc", "q": "La crescita esponenziale è descritta da…", "options": ["y′ = ky", "y′ = k", "y″ = k"], "answer": 0, "explain": "La velocità di crescita è proporzionale al valore presente." }
 ],
 "m": [
  { "type": "num", "q": "Risolvi y′ = 6x, y(0) = 2: quanto vale y(1)?", "answer": 5, "explain": "y = 3x² + 2 ⇒ y(1) = 5." },
  { "type": "mc", "q": "La soluzione di y′ = y con y(0) = 3 è…", "options": ["y = 3e^x", "y = e^(3x)", "y = x + 3"], "answer": 0, "explain": "y = Ce^x con C = y(0) = 3." },
  { "type": "mc", "q": "Il tempo di dimezzamento di una sostanza con N′ = −λN è…", "options": ["ln 2/λ", "λ ln 2", "1/λ"], "answer": 0, "explain": "e^(−λT) = 1/2 ⇒ T = ln 2/λ." },
  { "type": "num", "q": "Un caffè a 80 °C in una stanza a 20 °C: qual è il limite della sua temperatura per t → ∞ (in °C)?", "answer": 20, "explain": "Tende alla temperatura ambiente." },
  { "type": "tf", "q": "Una soluzione particolare si ottiene fissando la costante c con una condizione iniziale.", "answer": true, "explain": "È il problema di Cauchy." }
 ],
 "d": [
  { "type": "mc", "q": "Qual è la soluzione di y′ = y/x con x > 0?", "options": ["y = Cx", "y = C ln x", "y = Ce^x"], "answer": 0, "explain": "dy/y = dx/x ⇒ ln|y| = ln x + c ⇒ y = Cx." },
  { "type": "mc", "q": "La soluzione di y′ + 2y = 0 con y(0) = 4 è…", "options": ["y = 4e^(−2x)", "y = 4e^(2x)", "y = 4 − 2x"], "answer": 0, "explain": "y′ = −2y." },
  { "type": "num", "q": "Una sostanza ha T½ = 10 anni. Dopo 30 anni ne resta il x % del totale. Quanto vale x? (decimali)", "answer": 12.5, "tol": 0.01, "explain": "(1/2)³ = 1/8 = 12,5 %." },
  { "type": "tf", "q": "Nel modello v′ = g − (k/m)v la velocità tende a g·m/k.", "answer": true, "explain": "È la velocità limite: v′ = 0." },
  { "type": "mc", "q": "La soluzione generale di x″ = −9x è…", "options": ["A cos 3t + B sen 3t", "A cos 9t + B sen 9t", "Ae^(3t) + Be^(−3t)"], "answer": 0, "explain": "ω² = 9 ⇒ ω = 3." }
 ]
});
