QBANK("it", "l1-mat-insiemi-numerici", {
 "f": [
  { "type": "mc", "q": "Quale di questi numeri non è naturale?", "options": ["0", "17", "−5"], "answer": 2, "explain": "−5 è un intero negativo: appartiene a ℤ ma non a ℕ." },
  { "type": "num", "q": "Calcola: 3 + 4 · 5", "answer": 23, "explain": "Prima la moltiplicazione: 4 · 5 = 20, poi 3 + 20 = 23." },
  { "type": "num", "q": "Quanto vale 2⁵?", "answer": 32, "explain": "2 · 2 · 2 · 2 · 2 = 32." },
  { "type": "tf", "q": "Il numero 1/2 è un numero razionale.", "answer": true, "explain": "È una frazione di due interi con denominatore non nullo." },
  { "type": "text", "q": "Come si chiama il numero che si trova sotto la linea di frazione?", "answer": ["denominatore", "il denominatore"], "explain": "Il denominatore indica in quante parti uguali è diviso l'intero." }
 ],
 "m": [
  { "type": "num", "q": "Calcola: (−3) · (−4) + (−2)", "answer": 10, "explain": "(−3)(−4) = +12; 12 + (−2) = 10." },
  { "type": "num", "q": "Calcola: 5⁷ : 5⁴ (come numero)", "answer": 125, "explain": "Stessa base: 5^(7−4) = 5³ = 125." },
  { "type": "mc", "q": "Quanto fa 1/2 + 1/3?", "options": ["2/5", "5/6", "1/6"], "answer": 1, "explain": "Denominatore comune 6: 3/6 + 2/6 = 5/6." },
  { "type": "mc", "q": "Quale tra queste frazioni dà un decimale finito?", "options": ["1/3", "1/6", "1/8"], "answer": 2, "explain": "8 = 2³ ha solo il fattore 2: 1/8 = 0,125. Il 3 al denominatore (1/3 e 1/6) dà periodico." },
  { "type": "tf", "q": "Il valore di −4² è 16.", "answer": false, "explain": "La potenza ha la precedenza sul segno meno: −4² = −(4²) = −16. Invece (−4)² = 16." }
 ],
 "d": [
  { "type": "mc", "q": "Qual è la frazione generatrice di 0,2(7)?", "options": ["27/99", "25/90", "27/90"], "answer": 1, "explain": "Numeratore: 27 − 2 = 25; denominatore: 90 (un 9 per il periodo, uno 0 per l'antiperiodo). 25/90 = 5/18." },
  { "type": "num", "q": "Calcola: (2/3)⁻² e scrivi il risultato come decimale.", "answer": 2.25, "tol": 0.001, "explain": "(2/3)⁻² = (3/2)² = 9/4 = 2,25." },
  { "type": "num", "q": "Calcola: 3,(6) − 1,(3)", "answer": 2.33, "tol": 0.01, "explain": "3,(6) = 33/9 = 11/3 e 1,(3) = 12/9 = 4/3; la differenza è 7/3 ≈ 2,33." },
  { "type": "tf", "q": "L'equazione 3x = 7 ha soluzione in ℤ.", "answer": false, "explain": "La soluzione è x = 7/3, che non è un intero: ha soluzione solo in ℚ." },
  { "type": "mc", "q": "Quale dimostrazione prova che √2 non è razionale?", "options": ["Una verifica numerica fino a 1000 cifre", "Una dimostrazione per assurdo: se a/b fosse ridotta, a e b sarebbero entrambi pari", "Il fatto che √2 ha infinite cifre"], "answer": 1, "explain": "Da a² = 2b² segue che a è pari, poi che b è pari: contraddizione con a/b ridotta ai minimi termini. Anche 1/3 = 0,(3) ha infinite cifre ed è razionale." }
 ]
});
