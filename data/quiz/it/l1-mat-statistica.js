QBANK("it", "l1-mat-statistica", {
 "f": [
  { "type": "mc", "q": "Quale carattere è qualitativo?", "options": ["Il colore preferito", "L'altezza", "Il numero di fratelli"], "answer": 0, "explain": "Le modalità sono nomi, non numeri." },
  { "type": "num", "q": "Qual è la media di 2, 4 e 6?", "answer": 4, "explain": "(2 + 4 + 6)/3 = 4." },
  { "type": "tf", "q": "La moda è il valore che compare più spesso.", "answer": true, "explain": "È la modalità con frequenza maggiore." },
  { "type": "num", "q": "Qual è la mediana di 1, 5, 9?", "answer": 5, "explain": "Il dato centrale dei valori ordinati è 5." },
  { "type": "num", "q": "In una classe di 20 studenti, 8 vanno a piedi. Qual è la frequenza percentuale?", "answer": 40, "unit": "%", "explain": "8/20 = 0,40 → 40 %." }
 ],
 "m": [
  { "type": "num", "q": "Qual è la media di 5, 7, 8, 10?", "answer": 7.5, "tol": 0.001, "explain": "30/4 = 7,5." },
  { "type": "num", "q": "Qual è la mediana di 2, 3, 7, 8?", "answer": 5, "explain": "n pari: (3 + 7)/2 = 5." },
  { "type": "mc", "q": "Qual è la moda di 5, 6, 6, 7, 8, 8, 8?", "options": ["8", "6", "7"], "answer": 0, "explain": "L'8 compare tre volte." },
  { "type": "tf", "q": "La somma di tutte le frequenze relative è sempre 1.", "answer": true, "explain": "Le frequenze assolute sommano a n, quindi le relative a n/n = 1." },
  { "type": "num", "q": "Qual è il campo di variazione di 11, 4, 8, 15, 6?", "answer": 11, "explain": "15 − 4 = 11." }
 ],
 "d": [
  { "type": "num", "q": "Calcola la varianza di 2, 4, 4, 4, 5, 5, 7, 9.", "answer": 4, "explain": "Media 5; somma dei quadrati degli scarti 32; 32/8 = 4." },
  { "type": "mc", "q": "Se aggiungi a un insieme di dati un valore molto più grande di tutti gli altri…", "options": ["la media aumenta molto, la mediana poco", "la mediana aumenta molto, la media poco", "media e mediana non cambiano"], "answer": 0, "explain": "La media risente di ogni valore; la mediana dipende solo dalla posizione centrale." },
  { "type": "num", "q": "La media di 5 numeri è 60. Quattro di essi sono 52, 58, 61 e 64. Quanto vale il quinto?", "answer": 65, "explain": "Somma totale 300; 300 − (52 + 58 + 61 + 64) = 300 − 235 = 65." },
  { "type": "tf", "q": "La somma degli scarti dei dati dalla loro media aritmetica è sempre zero.", "answer": true, "explain": "Gli scarti positivi e negativi si compensano esattamente." },
  { "type": "num", "q": "Una distribuzione ha varianza 25. Quanto vale lo scarto quadratico medio?", "answer": 5, "explain": "σ = √25 = 5." }
 ]
});
