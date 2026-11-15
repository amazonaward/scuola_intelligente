QBANK("de", "m3-mat-calcolo-letterale", {
 "f": [
  {
   "type": "mc",
   "q": "Welcher dieser Ausdrücke ist ein Monom?",
   "options": [
    "3x²y",
    "x + y",
    "2x − 5"
   ],
   "answer": 0,
   "explain": "Ein Monom ist ein Produkt aus einer Zahl und Buchstaben: 3x²y. Die anderen beiden enthalten eine Summe oder Differenz."
  },
  {
   "type": "tf",
   "q": "Die Monome 3a und 5a sind gleichartig.",
   "answer": true,
   "explain": "Zwei Monome sind gleichartig, wenn sie denselben Buchstabenteil haben: hier ist es bei beiden a."
  },
  {
   "type": "num",
   "q": "Berechne den Wert von 3x + 2 für x = 4.",
   "answer": 14,
   "explain": "Man ersetzt x durch 4: 3 · 4 + 2 = 12 + 2 = 14."
  },
  {
   "type": "mc",
   "q": "Was ergibt x · x · x?",
   "options": [
    "3x",
    "x³",
    "x + 3"
   ],
   "answer": 1,
   "explain": "Dreimal dieselbe Basis zu multiplizieren heißt, sie in die dritte Potenz zu erheben: x · x · x = x³."
  },
  {
   "type": "text",
   "q": "Wie heißt die Zahl, die den Buchstabenteil eines Monoms multipliziert (die 5 in 5x²)?",
   "answer": [
    "koeffizient",
    "der koeffizient"
   ],
   "explain": "Die Zahl vor dem Buchstabenteil ist der Koeffizient: in 5x² ist es 5."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "Vereinfache: 6x² − 2x² + x²",
   "options": [
    "3x²",
    "5x²",
    "5x⁶"
   ],
   "answer": 1,
   "explain": "Es sind gleichartige Monome: Man addiert die Koeffizienten 6 − 2 + 1 = 5 und behält x². Ergebnis: 5x²."
  },
  {
   "type": "num",
   "q": "Berechne den Wert von (x − 2)(x + 2) für x = 7.",
   "answer": 45,
   "explain": "Summe mal Differenz: (x − 2)(x + 2) = x² − 4 = 49 − 4 = 45. Oder einfach 5 · 9 = 45."
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
   "explain": "Quadrat eines Binoms: (2x)² − 2·(2x)·3 + 3² = 4x² − 12x + 9."
  },
  {
   "type": "text",
   "q": "Wie heißt ein Polynom aus drei Termen?",
   "answer": [
    "trinom",
    "das trinom",
    "ein trinom",
    "dreigliedriger term"
   ],
   "explain": "Ein Polynom mit drei Termen, zum Beispiel x² + 2x − 5, heißt Trinom."
  },
  {
   "type": "mc",
   "q": "Ein Rechteck hat die Seiten 2a und 3b. Wie schreibt man seinen Umfang?",
   "options": [
    "5ab",
    "2a + 3b",
    "4a + 6b",
    "6ab"
   ],
   "answer": 2,
   "explain": "Umfang = 2 · (Länge + Breite) = 2(2a + 3b) = 4a + 6b."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Finde den Fehler: Welche dieser Gleichungen ist FALSCH?",
   "options": [
    "(x + 3)² = x² + 6x + 9",
    "(x − 3)(x + 3) = x² − 9",
    "(x − 3)² = x² − 9",
    "3x · 2x = 6x²"
   ],
   "answer": 2,
   "explain": "(x − 3)² = x² − 6x + 9, nicht x² − 9: x² − 9 ist das Ergebnis von (x − 3)(x + 3)."
  },
  {
   "type": "num",
   "q": "Vereinfache 3(x + 2) − (x − 4) und berechne das Ergebnis für x = 5.",
   "answer": 20,
   "explain": "3x + 6 − x + 4 = 2x + 10. Für x = 5: 2 · 5 + 10 = 20."
  },
  {
   "type": "mc",
   "q": "Ein Quadrat hat die Seitenlänge (a + 4). Welcher Ausdruck gibt seinen Flächeninhalt an?",
   "options": [
    "a² + 16",
    "4a + 16",
    "a² + 4a + 16",
    "a² + 8a + 16"
   ],
   "answer": 3,
   "explain": "Fläche = (a + 4)² = a² + 2·a·4 + 4² = a² + 8a + 16. Das doppelte Produkt 8a nicht vergessen."
  },
  {
   "type": "tf",
   "q": "Das Quadrat eines Binoms (a − b)² ist gleich a² − b².",
   "answer": false,
   "explain": "Falsch: (a − b)² = a² − 2ab + b². Die Differenz zweier Quadrate a² − b² ergibt sich aus (a + b)(a − b)."
  },
  {
   "type": "order",
   "q": "Vereinfache 2(x + 3) − 3(x − 1): Bringe die Schritte in die richtige Reihenfolge.",
   "items": [
    "2(x + 3) − 3(x − 1)",
    "2x + 6 − 3x + 3",
    "−x + 9"
   ],
   "explain": "Man wendet das Distributivgesetz an (2x + 6 − 3x + 3) und fasst dann gleichartige Terme zusammen: (2x − 3x) + (6 + 3) = −x + 9."
  }
 ]
});
