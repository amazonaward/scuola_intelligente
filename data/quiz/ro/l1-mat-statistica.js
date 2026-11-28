QBANK("ro", "l1-mat-statistica", {
 "f": [
  { "type": "mc", "q": "Care caracter este calitativ?", "options": ["Culoarea preferată", "Înălțimea", "Numărul de frați"], "answer": 0, "explain": "Modalitățile sunt nume, nu numere." },
  { "type": "num", "q": "Care este media numerelor 2, 4 și 6?", "answer": 4, "explain": "(2 + 4 + 6)/3 = 4." },
  { "type": "tf", "q": "Modul este valoarea care apare cel mai des.", "answer": true, "explain": "Este modalitatea cu frecvența cea mai mare." },
  { "type": "num", "q": "Care este mediana numerelor 1, 5, 9?", "answer": 5, "explain": "Data din mijloc a valorilor ordonate este 5." },
  { "type": "num", "q": "Într-o clasă de 20 de elevi, 8 merg pe jos. Care este frecvența procentuală?", "answer": 40, "unit": "%", "explain": "8/20 = 0,40 → 40 %." }
 ],
 "m": [
  { "type": "num", "q": "Care este media numerelor 5, 7, 8, 10?", "answer": 7.5, "tol": 0.001, "explain": "30/4 = 7,5." },
  { "type": "num", "q": "Care este mediana numerelor 2, 3, 7, 8?", "answer": 5, "explain": "n par: (3 + 7)/2 = 5." },
  { "type": "mc", "q": "Care este modul numerelor 5, 6, 6, 7, 8, 8, 8?", "options": ["8", "6", "7"], "answer": 0, "explain": "8 apare de trei ori." },
  { "type": "tf", "q": "Suma tuturor frecvențelor relative este întotdeauna 1.", "answer": true, "explain": "Frecvențele absolute au suma n, deci cele relative n/n = 1." },
  { "type": "num", "q": "Care este amplitudinea numerelor 11, 4, 8, 15, 6?", "answer": 11, "explain": "15 − 4 = 11." }
 ],
 "d": [
  { "type": "num", "q": "Calculează varianța numerelor 2, 4, 4, 4, 5, 5, 7, 9.", "answer": 4, "explain": "Media 5; suma pătratelor abaterilor 32; 32/8 = 4." },
  { "type": "mc", "q": "Dacă adaugi la un set de date o valoare mult mai mare decât toate celelalte…", "options": ["media crește mult, mediana puțin", "mediana crește mult, media puțin", "media și mediana nu se schimbă"], "answer": 0, "explain": "Media este influențată de fiecare valoare; mediana depinde doar de poziția centrală." },
  { "type": "num", "q": "Media a 5 numere este 60. Patru dintre ele sunt 52, 58, 61 și 64. Cât este al cincilea?", "answer": 65, "explain": "Suma totală 300; 300 − (52 + 58 + 61 + 64) = 300 − 235 = 65." },
  { "type": "tf", "q": "Suma abaterilor datelor de la media lor aritmetică este întotdeauna zero.", "answer": true, "explain": "Abaterile pozitive și cele negative se compensează exact." },
  { "type": "num", "q": "O distribuție are varianța 25. Cât este abaterea medie pătratică?", "answer": 5, "explain": "σ = √25 = 5." }
 ]
});
