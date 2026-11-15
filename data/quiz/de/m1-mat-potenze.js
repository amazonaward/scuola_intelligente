QBANK("de", "m1-mat-potenze", {
 "f": [
  {
   "type": "mc",
   "q": "Wie schreibt man 7 × 7 × 7 als Potenz?",
   "options": [
    "7³",
    "3⁷",
    "7 × 3"
   ],
   "answer": 0,
   "explain": "Der Faktor 7 kommt 3-mal vor: Basis 7, Exponent 3."
  },
  {
   "type": "tf",
   "q": "Null hoch 5 ergibt 0.",
   "answer": true,
   "explain": "0 × 0 × 0 × 0 × 0 = 0: Bei der Basis 0 und einem Exponenten ungleich 0 ist das Ergebnis 0."
  },
  {
   "type": "num",
   "q": "Ein Quadrat hat eine Seitenlänge von 8 cm. Wie groß ist seine Fläche in cm²?",
   "answer": 64,
   "unit": "cm²",
   "explain": "Fläche = 8² = 8 × 8 = 64 cm²."
  },
  {
   "type": "mc",
   "q": "Wie viele Nullen hat die Zahl 10⁷ (zehn Millionen)?",
   "options": [
    "6",
    "7",
    "8"
   ],
   "answer": 1,
   "explain": "10ⁿ ist eine 1 mit n Nullen: 10⁷ = 10.000.000, also 7 Nullen."
  },
  {
   "type": "text",
   "q": "Wie heißt die Zahl 10¹⁰⁰, also eine 1 mit 100 Nullen?",
   "answer": [
    "googol",
    "ein googol",
    "das googol"
   ],
   "explain": "Sie heißt Googol; daher stammt der Name Google."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Bei einem K.-o.-Turnier treten 64 Spieler an und in jeder Runde scheidet die Hälfte aus. Wie viele Runden braucht man bis zum Sieger?",
   "answer": 6,
   "unit": "Runden",
   "explain": "64 = 2⁶: Jedes Mal halbiert sich die Zahl, 64 → 32 → 16 → 8 → 4 → 2 → 1, also 6 Runden."
  },
  {
   "type": "mc",
   "q": "Welcher Term ist gleich 5⁴ × 5²?",
   "options": [
    "5⁶",
    "5⁸",
    "25⁶"
   ],
   "answer": 0,
   "explain": "Gleiche Basis: Die Exponenten werden addiert, 4 + 2 = 6."
  },
  {
   "type": "tf",
   "q": "7⁵ : 7⁵ = 0",
   "answer": false,
   "explain": "Eine Zahl geteilt durch sich selbst ergibt 1: 7⁵ : 7⁵ = 7⁰ = 1."
  },
  {
   "type": "num",
   "q": "Wie viel ist 4,5 × 10³?",
   "answer": 4500,
   "explain": "10³ = 1000 und 4,5 × 1000 = 4500."
  },
  {
   "type": "order",
   "q": "Bringe die Schritte zur Berechnung von 3 + 2³ × 4⁰ in die richtige Reihenfolge.",
   "items": [
    "Potenzen berechnen: 2³ = 8 und 4⁰ = 1",
    "Multiplikation ausführen: 8 × 1 = 8",
    "Addition ausführen: 3 + 8 = 11"
   ],
   "explain": "Zuerst die Potenzen, dann die Multiplikation, zuletzt die Addition: Das Ergebnis ist 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Welche Gleichung ist FALSCH?",
   "options": [
    "2⁴ × 2⁴ = 2⁸",
    "(2⁴)² = 2⁸",
    "2⁴ + 2⁴ = 2⁸"
   ],
   "answer": 2,
   "explain": "2⁴ + 2⁴ = 16 + 16 = 32 = 2⁵, nicht 2⁸. Für die Addition gibt es keine Potenzgesetze."
  },
  {
   "type": "num",
   "q": "Seerosenblätter auf einem See verdoppeln jeden Tag die bedeckte Fläche. Nach 30 Tagen ist der ganze See bedeckt. Nach wie vielen Tagen war erst die Hälfte des Sees bedeckt?",
   "answer": 29,
   "unit": "Tage",
   "explain": "Da sich die Fläche jeden Tag verdoppelt, war am Tag davor die Hälfte bedeckt: 30 − 1 = 29."
  },
  {
   "type": "num",
   "q": "Eine Datei belegt 2¹² Byte, eine andere 2⁹ Byte. Wie viel Mal größer ist die erste als die zweite?",
   "answer": 8,
   "explain": "2¹² : 2⁹ = 2¹²⁻⁹ = 2³ = 8."
  },
  {
   "type": "mc",
   "q": "Was ist der schnellste Weg, 5⁴ × 2⁴ zu berechnen?",
   "options": [
    "(5 + 2)⁴ = 7⁴",
    "(5 × 2)⁴ = 10⁴ = 10.000",
    "10⁸"
   ],
   "answer": 1,
   "explain": "Gleicher Exponent: Die Basen werden multipliziert, der Exponent bleibt 4. 5 × 2 = 10, also 10⁴ = 10.000."
  },
  {
   "type": "tf",
   "q": "Marco schreibt 2³ × 3³ = 6⁶. Die Rechnung ist richtig.",
   "answer": false,
   "explain": "Bei gleichem Exponenten werden die Basen multipliziert und der Exponent bleibt gleich: 2³ × 3³ = 6³ = 216."
  }
 ]
});
