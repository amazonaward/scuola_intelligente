QBANK("it", "l5-mat-derivate", {
 "f": [
  { "type": "mc", "q": "Qual è la derivata di x³?", "options": ["3x²", "x²", "3x"], "answer": 0, "explain": "D(xⁿ) = n·xⁿ⁻¹." },
  { "type": "num", "q": "Qual è la derivata di una costante, ad esempio f(x) = 7?", "answer": 0, "explain": "Una costante non varia: derivata nulla." },
  { "type": "mc", "q": "La derivata di eˣ è…", "options": ["eˣ", "x·eˣ⁻¹", "1"], "answer": 0, "explain": "L'esponenziale è uguale alla propria derivata." },
  { "type": "tf", "q": "La derivata di sen x è cos x.", "answer": true, "explain": "È una derivata fondamentale." },
  { "type": "mc", "q": "La derivata in un punto rappresenta geometricamente…", "options": ["la pendenza della tangente", "l'area sotto il grafico", "la lunghezza della curva"], "answer": 0, "explain": "È il coefficiente angolare della retta tangente." }
 ],
 "m": [
  { "type": "num", "q": "Calcola f′(1) per f(x) = 2x³ − x.", "answer": 5, "explain": "f′(x) = 6x² − 1 ⇒ f′(1) = 5." },
  { "type": "mc", "q": "Qual è la derivata di x² sen x?", "options": ["2x sen x + x² cos x", "2x cos x", "x² cos x"], "answer": 0, "explain": "Regola del prodotto." },
  { "type": "mc", "q": "Qual è la derivata di ln(x²+1)?", "options": ["2x/(x²+1)", "1/(x²+1)", "2x"], "answer": 0, "explain": "Catena: (1/(x²+1))·2x." },
  { "type": "num", "q": "Qual è il coefficiente angolare della tangente a y = √x in x = 4? Dai il risultato in decimali.", "answer": 0.25, "tol": 0.001, "explain": "f′(x) = 1/(2√x) ⇒ f′(4) = 1/4." },
  { "type": "tf", "q": "Se f è derivabile in x₀ allora è continua in x₀.", "answer": true, "explain": "È un teorema; il viceversa è falso." }
 ],
 "d": [
  { "type": "mc", "q": "Qual è la derivata di (x² + 1)/(x − 1)?", "options": ["(x² − 2x − 1)/(x − 1)²", "2x/1", "(x² + 2x − 1)/(x − 1)²"], "answer": 0, "explain": "(2x(x − 1) − (x² + 1)·1)/(x − 1)² = (x² − 2x − 1)/(x − 1)²." },
  { "type": "mc", "q": "Qual è la derivata di xˣ per x > 0?", "options": ["xˣ(ln x + 1)", "x·xˣ⁻¹", "xˣ ln x"], "answer": 0, "explain": "xˣ = e^(x ln x): derivata e^(x ln x)(ln x + 1)." },
  { "type": "text", "q": "Scrivi l'equazione della tangente a y = eˣ in x = 0 nella forma y = ...", "answer": ["y = x + 1", "y=x+1", "x+1", "x + 1"], "explain": "f(0) = 1 e f′(0) = 1 ⇒ y = x + 1." },
  { "type": "mc", "q": "Il punto x = 0 per f(x) = |x| è…", "options": ["un punto angoloso", "una cuspide", "un flesso a tangente verticale"], "answer": 0, "explain": "Derivate laterali finite e diverse (−1 e +1)." },
  { "type": "num", "q": "Un punto si muove con s(t) = t³ − 6t² + 9t. A che istante t > 0 si ferma per la prima volta (v = 0)?", "answer": 1, "explain": "v = 3t² − 12t + 9 = 3(t − 1)(t − 3): si ferma a t = 1 (e t = 3)." }
 ]
});
