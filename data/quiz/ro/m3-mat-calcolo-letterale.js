QBANK("ro", "m3-mat-calcolo-letterale", {
 "f": [
  {
   "type": "mc",
   "q": "Care dintre aceste expresii este un monom?",
   "options": [
    "3x²y",
    "x + y",
    "2x − 5"
   ],
   "answer": 0,
   "explain": "Un monom este un produs dintre un număr și litere: 3x²y. Celelalte două conțin o sumă sau o diferență."
  },
  {
   "type": "tf",
   "q": "Monoamele 3a și 5a sunt asemenea.",
   "answer": true,
   "explain": "Două monoame sunt asemenea dacă au aceeași parte literală: aici este a pentru amândouă."
  },
  {
   "type": "num",
   "q": "Calculează valoarea lui 3x + 2 pentru x = 4.",
   "answer": 14,
   "explain": "Înlocuim x cu 4: 3 · 4 + 2 = 12 + 2 = 14."
  },
  {
   "type": "mc",
   "q": "Cât face x · x · x?",
   "options": [
    "3x",
    "x³",
    "x + 3"
   ],
   "answer": 1,
   "explain": "A înmulți de trei ori aceeași bază înseamnă a o ridica la puterea a treia: x · x · x = x³."
  },
  {
   "type": "text",
   "q": "Cum se numește numărul care înmulțește partea literală a unui monom (5 din 5x²)?",
   "answer": [
    "coeficient",
    "coeficientul"
   ],
   "explain": "Numărul din fața părții literale este coeficientul: în 5x² este 5."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "Reduce: 6x² − 2x² + x²",
   "options": [
    "3x²",
    "5x²",
    "5x⁶"
   ],
   "answer": 1,
   "explain": "Sunt monoame asemenea: adunăm coeficienții 6 − 2 + 1 = 5 și păstrăm x². Rezultat: 5x²."
  },
  {
   "type": "num",
   "q": "Calculează valoarea lui (x − 2)(x + 2) pentru x = 7.",
   "answer": 45,
   "explain": "Suma ori diferența: (x − 2)(x + 2) = x² − 4 = 49 − 4 = 45. Sau simplu 5 · 9 = 45."
  },
  {
   "type": "mc",
   "q": "(2x − 3)² = ?",
   "options": [
    "4x² − 9",
    "4x² + 9",
    "4x² − 12x + 9",
    "2x² − 12x + 9"
   ],
   "answer": 2,
   "explain": "Pătratul unui binom: (2x)² − 2·(2x)·3 + 3² = 4x² − 12x + 9."
  },
  {
   "type": "text",
   "q": "Cum se numește un polinom format din trei termeni?",
   "answer": [
    "trinom",
    "un trinom",
    "trinomul"
   ],
   "explain": "Un polinom cu trei termeni, de exemplu x² + 2x − 5, se numește trinom."
  },
  {
   "type": "mc",
   "q": "Un dreptunghi are laturile 2a și 3b. Cum se scrie perimetrul lui?",
   "options": [
    "5ab",
    "2a + 3b",
    "4a + 6b",
    "6ab"
   ],
   "answer": 2,
   "explain": "Perimetrul = 2 · (lungime + lățime) = 2(2a + 3b) = 4a + 6b."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Găsește greșeala: care dintre aceste egalități este FALSĂ?",
   "options": [
    "(x + 3)² = x² + 6x + 9",
    "(x − 3)(x + 3) = x² − 9",
    "(x − 3)² = x² − 9",
    "3x · 2x = 6x²"
   ],
   "answer": 2,
   "explain": "(x − 3)² = x² − 6x + 9, nu x² − 9: x² − 9 este rezultatul lui (x − 3)(x + 3)."
  },
  {
   "type": "num",
   "q": "Simplifică 3(x + 2) − (x − 4) și calculează rezultatul pentru x = 5.",
   "answer": 20,
   "explain": "3x + 6 − x + 4 = 2x + 10. Pentru x = 5: 2 · 5 + 10 = 20."
  },
  {
   "type": "mc",
   "q": "Un pătrat are latura (a + 4). Care expresie dă aria lui?",
   "options": [
    "a² + 16",
    "4a + 16",
    "a² + 4a + 16",
    "a² + 8a + 16"
   ],
   "answer": 3,
   "explain": "Aria = (a + 4)² = a² + 2·a·4 + 4² = a² + 8a + 16. Atenție la dublul produsului 8a."
  },
  {
   "type": "tf",
   "q": "Pătratul unui binom (a − b)² este egal cu a² − b².",
   "answer": false,
   "explain": "Fals: (a − b)² = a² − 2ab + b². Diferența de pătrate a² − b² se obține din (a + b)(a − b)."
  },
  {
   "type": "order",
   "q": "Simplifică 2(x + 3) − 3(x − 1): pune pașii în ordine.",
   "items": [
    "2(x + 3) − 3(x − 1)",
    "2x + 6 − 3x + 3",
    "−x + 9"
   ],
   "explain": "Aplicăm distributivitatea (2x + 6 − 3x + 3), apoi adunăm termenii asemenea: (2x − 3x) + (6 + 3) = −x + 9."
  }
 ]
});
