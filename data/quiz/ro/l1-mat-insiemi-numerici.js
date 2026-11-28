QBANK("ro", "l1-mat-insiemi-numerici", {
 "f": [
  { "type": "mc", "q": "Care dintre aceste numere nu este natural?", "options": ["0", "17", "−5"], "answer": 2, "explain": "−5 este un număr întreg negativ: aparține lui ℤ, dar nu lui ℕ." },
  { "type": "num", "q": "Calculează: 3 + 4 · 5", "answer": 23, "explain": "Mai întâi înmulțirea: 4 · 5 = 20, apoi 3 + 20 = 23." },
  { "type": "num", "q": "Cât este 2⁵?", "answer": 32, "explain": "2 · 2 · 2 · 2 · 2 = 32." },
  { "type": "tf", "q": "Numărul 1/2 este un număr rațional.", "answer": true, "explain": "Este o fracție de două numere întregi cu numitor nenul." },
  { "type": "text", "q": "Cum se numește numărul aflat sub linia de fracție?", "answer": ["numitor", "numitorul"], "explain": "Numitorul arată în câte părți egale este împărțit întregul." }
 ],
 "m": [
  { "type": "num", "q": "Calculează: (−3) · (−4) + (−2)", "answer": 10, "explain": "(−3)(−4) = +12; 12 + (−2) = 10." },
  { "type": "num", "q": "Calculează: 5⁷ : 5⁴ (ca număr)", "answer": 125, "explain": "Aceeași bază: 5^(7−4) = 5³ = 125." },
  { "type": "mc", "q": "Cât face 1/2 + 1/3?", "options": ["2/5", "5/6", "1/6"], "answer": 1, "explain": "Numitor comun 6: 3/6 + 2/6 = 5/6." },
  { "type": "mc", "q": "Care dintre aceste fracții dă un zecimal finit?", "options": ["1/3", "1/6", "1/8"], "answer": 2, "explain": "8 = 2³ are doar factorul 2: 1/8 = 0,125. Factorul 3 de la numitor (1/3 și 1/6) dă un număr periodic." },
  { "type": "tf", "q": "Valoarea lui −4² este 16.", "answer": false, "explain": "Puterea are prioritate față de semnul minus: −4² = −(4²) = −16. În schimb (−4)² = 16." }
 ],
 "d": [
  { "type": "mc", "q": "Care este fracția generatoare a lui 0,2(7)?", "options": ["27/99", "25/90", "27/90"], "answer": 1, "explain": "Numărător: 27 − 2 = 25; numitor: 90 (un 9 pentru perioadă, un 0 pentru partea neperiodică). 25/90 = 5/18." },
  { "type": "num", "q": "Calculează: (2/3)⁻² și scrie rezultatul ca zecimal.", "answer": 2.25, "tol": 0.001, "explain": "(2/3)⁻² = (3/2)² = 9/4 = 2,25." },
  { "type": "num", "q": "Calculează: 3,(6) − 1,(3)", "answer": 2.33, "tol": 0.01, "explain": "3,(6) = 33/9 = 11/3 și 1,(3) = 12/9 = 4/3; diferența este 7/3 ≈ 2,33." },
  { "type": "tf", "q": "Ecuația 3x = 7 are soluție în ℤ.", "answer": false, "explain": "Soluția este x = 7/3, care nu este un număr întreg: are soluție doar în ℚ." },
  { "type": "mc", "q": "Care demonstrație arată că √2 nu este rațional?", "options": ["O verificare numerică până la 1000 de zecimale", "O demonstrație prin reducere la absurd: dacă a/b ar fi ireductibilă, a și b ar fi ambele pare", "Faptul că √2 are o infinitate de zecimale"], "answer": 1, "explain": "Din a² = 2b² rezultă că a este par, apoi că b este par: contradicție cu faptul că a/b este ireductibilă. Și 1/3 = 0,(3) are o infinitate de zecimale și este rațional." }
 ]
});
