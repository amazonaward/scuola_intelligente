QBANK("ro", "m3-mat-probabilita", {
 "f": [
  {
   "type": "mc",
   "q": "Câte rezultate posibile are aruncarea unei monede?",
   "options": [
    "1",
    "2",
    "6"
   ],
   "answer": 1,
   "explain": "Moneda are două fețe, deci sunt 2 rezultate posibile: cap sau pajură."
  },
  {
   "type": "num",
   "q": "Care este modul seriei 2, 3, 3, 5, 3, 7?",
   "answer": 3,
   "explain": "Modul este valoarea care apare cel mai des: 3 apare de trei ori."
  },
  {
   "type": "tf",
   "q": "Un eveniment sigur are probabilitatea 1.",
   "answer": true,
   "explain": "Un eveniment care se întâmplă mereu are probabilitatea 1 (adică 100%)."
  },
  {
   "type": "mc",
   "q": "Într-o clasă de 24 de elevi, 12 sunt fete. Care este frecvența relativă a fetelor?",
   "options": [
    "1/4",
    "12",
    "1/2"
   ],
   "answer": 2,
   "explain": "Frecvența relativă = 12 : 24 = 1/2 (adică 0,5 sau 50%)."
  },
  {
   "type": "text",
   "q": "Cum se numește un eveniment care nu se poate întâmpla niciodată?",
   "answer": [
    "imposibil",
    "eveniment imposibil",
    "evenimentul imposibil",
    "un eveniment imposibil"
   ],
   "explain": "Un eveniment care nu se poate produce niciodată este un eveniment imposibil și are probabilitatea 0."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Gina a luat 6, 7, 9 și 8 la primele patru teste. Ce notă trebuie să ia la al cincilea ca să aibă media 8?",
   "answer": 10,
   "explain": "Pentru media 8 din 5 note, suma trebuie să fie 8 × 5 = 40. Până acum: 6 + 7 + 9 + 8 = 30. Îi trebuie 40 − 30 = 10."
  },
  {
   "type": "num",
   "q": "Trag o carte dintr-un pachet de 40 de cărți care conține 4 ași. Care este probabilitatea, în procente, să trag un as?",
   "answer": 10,
   "unit": "%",
   "explain": "P = cazuri favorabile : cazuri posibile = 4 : 40 = 1/10 = 10%."
  },
  {
   "type": "mc",
   "q": "Într-un sondaj, 9 persoane din 36 aleg înghețata de lămâie. Care este frecvența relativă?",
   "options": [
    "0,9",
    "0,25",
    "0,36"
   ],
   "answer": 1,
   "explain": "Frecvența relativă = 9 : 36 = 1/4 = 0,25 (adică 25%)."
  },
  {
   "type": "mc",
   "q": "În seria 4, 4, 5, 8, 9 valoarea 5 este…",
   "options": [
    "la moda",
    "la mediana",
    "la media"
   ],
   "answer": 1,
   "explain": "Datele sunt deja ordonate și valoarea din mijloc este 5: este mediana. Modul este 4, iar media este 30 : 5 = 6."
  },
  {
   "type": "tf",
   "q": "Într-o diagramă circulară, un sector de 54° reprezintă 20% din date.",
   "answer": false,
   "explain": "Fals: 54° din 360° înseamnă 54 : 360 = 0,15, adică 15%. 20% ar corespunde la 72°."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "O urnă conține 2 bile roșii și 3 albastre. Extrag o bilă, o pun la loc și extrag alta. Care este probabilitatea (în %) ca ambele să fie roșii?",
   "answer": 16,
   "unit": "%",
   "explain": "Cu repunere, extragerile sunt independente: P = 2/5 × 2/5 = 4/25 = 16%."
  },
  {
   "type": "num",
   "q": "Un săculeț conține 3 bomboane de căpșuni și 2 de mentă. Iau două fără să le pun la loc. Care este probabilitatea (în %) ca ambele să fie de căpșuni?",
   "answer": 30,
   "unit": "%",
   "explain": "Prima extragere: 3/5. Apoi rămân 2 de căpșuni din 4 bomboane: 2/4. P = 3/5 × 2/4 = 6/20 = 30%."
  },
  {
   "type": "mc",
   "q": "Cinci prieteni au o medie de 7 puncte la un joc. Vine al șaselea prieten și face 13 puncte. Care este noua medie?",
   "options": [
    "7,5",
    "8",
    "9",
    "10"
   ],
   "answer": 1,
   "explain": "Suma celor cinci: 7 × 5 = 35. Cu al șaselea: 35 + 13 = 48. Noua medie: 48 : 6 = 8."
  },
  {
   "type": "tf",
   "q": "Aruncând două zaruri, să obții suma 7 este mai probabil decât să obții suma 12.",
   "answer": true,
   "explain": "Suma 7 se obține în 6 moduri din 36 (1+6, 2+5, 3+4 și perechile inverse), suma 12 într-unul singur (6+6)."
  },
  {
   "type": "order",
   "q": "Ordonează aceste evenimente de la cel mai puțin probabil la cel mai probabil.",
   "items": [
    "Pică 7 cu un zar",
    "Pică 6 cu un zar",
    "Pică un număr par cu un zar",
    "Pică un număr mai mic decât 6 cu un zar",
    "Pică un număr de la 1 la 6 cu un zar"
   ],
   "explain": "Probabilitățile sunt: 0 (imposibil), 1/6, 3/6 = 1/2, 5/6 și 1 (sigur)."
  }
 ]
});
