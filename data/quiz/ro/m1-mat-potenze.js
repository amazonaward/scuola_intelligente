QBANK("ro", "m1-mat-potenze", {
 "f": [
  {
   "type": "mc",
   "q": "Cum se scrie 7 × 7 × 7 sub formă de putere?",
   "options": [
    "7³",
    "3⁷",
    "7 × 3"
   ],
   "answer": 0,
   "explain": "Factorul 7 se repetă de 3 ori: baza 7, exponentul 3."
  },
  {
   "type": "tf",
   "q": "Zero la puterea 5 dă rezultatul 0.",
   "answer": true,
   "explain": "0 × 0 × 0 × 0 × 0 = 0: cu baza 0 și exponent diferit de 0, rezultatul este 0."
  },
  {
   "type": "num",
   "q": "Un pătrat are latura de 8 cm. Care este aria lui în cm²?",
   "answer": 64,
   "unit": "cm²",
   "explain": "Aria = 8² = 8 × 8 = 64 cm²."
  },
  {
   "type": "mc",
   "q": "Câte zerouri are numărul 10⁷ (zece milioane)?",
   "options": [
    "6",
    "7",
    "8"
   ],
   "answer": 1,
   "explain": "10ⁿ este 1 urmat de n zerouri: 10⁷ = 10.000.000, adică 7 zerouri."
  },
  {
   "type": "text",
   "q": "Cum se numește numărul 10¹⁰⁰, adică 1 urmat de 100 de zerouri?",
   "answer": [
    "googol",
    "un googol",
    "googolul"
   ],
   "explain": "Se numește googol; de aici vine numele Google."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Într-un turneu cu eliminare directă sunt 64 de jucători și la fiecare rundă este eliminată jumătate. Câte runde sunt necesare până la câștigător?",
   "answer": 6,
   "unit": "runde",
   "explain": "64 = 2⁶: jumătate de fiecare dată, 64 → 32 → 16 → 8 → 4 → 2 → 1, adică 6 runde."
  },
  {
   "type": "mc",
   "q": "Care scriere este egală cu 5⁴ × 5²?",
   "options": [
    "5⁶",
    "5⁸",
    "25⁶"
   ],
   "answer": 0,
   "explain": "Aceeași bază: se adună exponenții, 4 + 2 = 6."
  },
  {
   "type": "tf",
   "q": "7⁵ : 7⁵ = 0",
   "answer": false,
   "explain": "Un număr împărțit la el însuși dă 1: 7⁵ : 7⁵ = 7⁰ = 1."
  },
  {
   "type": "num",
   "q": "Cât este 4,5 × 10³?",
   "answer": 4500,
   "explain": "10³ = 1000 și 4,5 × 1000 = 4500."
  },
  {
   "type": "order",
   "q": "Pune în ordine pașii pentru a calcula 3 + 2³ × 4⁰.",
   "items": [
    "Calculez puterile: 2³ = 8 și 4⁰ = 1",
    "Fac înmulțirea: 8 × 1 = 8",
    "Fac adunarea: 3 + 8 = 11"
   ],
   "explain": "Întâi puterile, apoi înmulțirea, la sfârșit adunarea: rezultatul este 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Care egalitate este GREȘITĂ?",
   "options": [
    "2⁴ × 2⁴ = 2⁸",
    "(2⁴)² = 2⁸",
    "2⁴ + 2⁴ = 2⁸"
   ],
   "answer": 2,
   "explain": "2⁴ + 2⁴ = 16 + 16 = 32 = 2⁵, nu 2⁸. Pentru adunare nu există proprietăți."
  },
  {
   "type": "num",
   "q": "Frunzele de nufăr de pe un lac își dublează în fiecare zi suprafața acoperită. După 30 de zile tot lacul este acoperit. După câte zile era acoperită doar jumătate din lac?",
   "answer": 29,
   "unit": "zile",
   "explain": "Deoarece suprafața se dublează în fiecare zi, cu o zi înainte era acoperită jumătate: 30 − 1 = 29."
  },
  {
   "type": "num",
   "q": "Un fișier ocupă 2¹² octeți, iar altul 2⁹ octeți. De câte ori este primul mai mare decât al doilea?",
   "answer": 8,
   "explain": "2¹² : 2⁹ = 2¹²⁻⁹ = 2³ = 8."
  },
  {
   "type": "mc",
   "q": "Care este cea mai rapidă metodă de a calcula 5⁴ × 2⁴?",
   "options": [
    "(5 + 2)⁴ = 7⁴",
    "(5 × 2)⁴ = 10⁴ = 10.000",
    "10⁸"
   ],
   "answer": 1,
   "explain": "Același exponent: se înmulțesc bazele, iar exponentul rămâne 4. 5 × 2 = 10, deci 10⁴ = 10.000."
  },
  {
   "type": "tf",
   "q": "Marco scrie 2³ × 3³ = 6⁶. Calculul este corect.",
   "answer": false,
   "explain": "La același exponent se înmulțesc bazele, iar exponentul rămâne la fel: 2³ × 3³ = 6³ = 216."
  }
 ]
});
