QBANK("ro", "m2-mat-pitagora", {
 "f": [
  {
   "type": "mc",
   "q": "Cât măsoară unghiul drept al unui triunghi dreptunghic?",
   "options": [
    "60°",
    "90°",
    "45°"
   ],
   "answer": 1,
   "explain": "Unghiul drept măsoară întotdeauna 90°."
  },
  {
   "type": "num",
   "q": "Catetele unui triunghi dreptunghic măsoară 3 cm și 4 cm. Cât măsoară ipotenuza?",
   "answer": 5,
   "unit": "cm",
   "explain": "3² + 4² = 9 + 16 = 25 și √25 = 5."
  },
  {
   "type": "tf",
   "q": "Într-un triunghi dreptunghic ipotenuza este întotdeauna mai lungă decât fiecare catetă.",
   "answer": true,
   "explain": "Deoarece c² = a² + b², c² este mai mare decât a² și decât b²: ipotenuza este cea mai lungă latură."
  },
  {
   "type": "mc",
   "q": "Câte catete are un triunghi dreptunghic?",
   "options": [
    "1",
    "2",
    "3"
   ],
   "answer": 1,
   "explain": "Are două catete (laturile care formează unghiul drept) și o ipotenuză."
  },
  {
   "type": "text",
   "q": "Cum se numește un triunghi care are un unghi de 90°?",
   "answer": [
    "dreptunghic",
    "triunghi dreptunghic"
   ],
   "explain": "Este un triunghi dreptunghic: teorema lui Pitagora este valabilă doar pentru aceste triunghiuri."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un zmeu este legat de un fir întins lung de 25 m. Pe pământ, punctul de sub zmeu se află la 7 m de copil. La ce înălțime zboară zmeul (nu ține cont de înălțimea copilului)?",
   "answer": 24,
   "unit": "m",
   "explain": "h² = 25² − 7² = 625 − 49 = 576, deci h = √576 = 24 m."
  },
  {
   "type": "num",
   "q": "Un teren de joacă dreptunghiular măsoară 24 m × 18 m. Cât este lungimea diagonalei lui?",
   "answer": 30,
   "unit": "m",
   "explain": "d² = 24² + 18² = 576 + 324 = 900, deci d = √900 = 30 m."
  },
  {
   "type": "mc",
   "q": "Un triunghi isoscel are baza de 16 cm și laturile oblice de 10 cm. Cât măsoară înălțimea lui?",
   "options": [
    "8 cm",
    "4 cm",
    "6 cm"
   ],
   "answer": 2,
   "explain": "Înălțimea împarte baza în două (8 cm): h² = 10² − 8² = 100 − 64 = 36, deci h = 6 cm."
  },
  {
   "type": "tf",
   "q": "Un triunghi cu laturile de 7 cm, 24 cm și 25 cm este dreptunghic.",
   "answer": true,
   "explain": "7² + 24² = 49 + 576 = 625 = 25²: relația lui Pitagora este adevărată, deci triunghiul este dreptunghic."
  },
  {
   "type": "num",
   "q": "O tabletă are ecranul dreptunghiular cu diagonala de 17 cm și lățimea de 15 cm. Care este înălțimea ecranului?",
   "answer": 8,
   "unit": "cm",
   "explain": "h² = 17² − 15² = 289 − 225 = 64, deci h = √64 = 8 cm."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un romb are latura de 13 cm și o diagonală de 24 cm. Care este aria lui?",
   "answer": 120,
   "unit": "cm²",
   "explain": "Diagonalele se intersectează la 90° și se înjumătățesc: jumătate de diagonală = 12; cealaltă jumătate = √(13² − 12²) = √25 = 5, deci cealaltă diagonală este 10. Aria = 24 × 10 ÷ 2 = 120 cm²."
  },
  {
   "type": "num",
   "q": "O furnică pornește dintr-un punct, merge 8 m spre est, apoi 9 m spre nord și în final încă 6 m spre nord. La ce distanță în linie dreaptă se află față de punctul de plecare?",
   "answer": 17,
   "unit": "m",
   "explain": "Spre nord a parcurs 9 + 6 = 15 m. Distanța = √(8² + 15²) = √(64 + 225) = √289 = 17 m."
  },
  {
   "type": "mc",
   "q": "Sara calculează ipotenuza unui triunghi cu catetele de 5 cm și 12 cm și obține 17 cm. Care este greșeala?",
   "options": [
    "A adunat catetele în loc să adune pătratele lor și să calculeze radicala.",
    "A confundat ipotenuza cu o catetă.",
    "Nu este nicio greșeală: 17 este corect."
   ],
   "answer": 0,
   "explain": "Rezultatul corect este √(5² + 12²) = √169 = 13 cm. 5 + 12 = 17 ar fi doar suma catetelor."
  },
  {
   "type": "tf",
   "q": "Dacă dublez lungimea tuturor celor trei laturi ale unui triunghi dreptunghic, noul triunghi este tot dreptunghic.",
   "answer": true,
   "explain": "(2a)² + (2b)² = 4(a² + b²) = 4c² = (2c)²: relația lui Pitagora rămâne valabilă (triunghiurile sunt asemenea)."
  },
  {
   "type": "order",
   "q": "Ordonează triunghiurile dreptunghice de la ipotenuza cea mai scurtă la cea mai lungă (sunt date catetele).",
   "items": [
    "Catete 3 și 4",
    "Catete 6 și 8",
    "Catete 5 și 12",
    "Catete 7 și 24"
   ],
   "explain": "Ipotenuze: 5, 10, 13 și 25."
  }
 ]
});
