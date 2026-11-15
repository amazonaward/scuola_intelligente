QBANK("de", "m2-mat-pitagora", {
 "f": [
  {
   "type": "mc",
   "q": "Wie groß ist der rechte Winkel eines rechtwinkligen Dreiecks?",
   "options": [
    "60°",
    "90°",
    "45°"
   ],
   "answer": 1,
   "explain": "Ein rechter Winkel misst immer 90°."
  },
  {
   "type": "num",
   "q": "Die Katheten eines rechtwinkligen Dreiecks messen 3 cm und 4 cm. Wie lang ist die Hypotenuse?",
   "answer": 5,
   "unit": "cm",
   "explain": "3² + 4² = 9 + 16 = 25 und √25 = 5."
  },
  {
   "type": "tf",
   "q": "In einem rechtwinkligen Dreieck ist die Hypotenuse immer länger als jede Kathete.",
   "answer": true,
   "explain": "Da c² = a² + b² gilt, ist c² größer als a² und b²: Die Hypotenuse ist die längste Seite."
  },
  {
   "type": "mc",
   "q": "Wie viele Katheten hat ein rechtwinkliges Dreieck?",
   "options": [
    "1",
    "2",
    "3"
   ],
   "answer": 1,
   "explain": "Es hat zwei Katheten (die Seiten am rechten Winkel) und eine Hypotenuse."
  },
  {
   "type": "text",
   "q": "Wie nennt man ein Dreieck mit einem 90°-Winkel?",
   "answer": [
    "rechtwinklig",
    "rechtwinkliges dreieck",
    "rechtwinkliges"
   ],
   "explain": "Es ist ein rechtwinkliges Dreieck: Der Satz des Pythagoras gilt nur für solche Dreiecke."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Ein Drachen hängt an einer gespannten Schnur von 25 m Länge. Am Boden ist der Punkt unter dem Drachen 7 m vom Kind entfernt. In welcher Höhe fliegt der Drachen (die Größe des Kindes bleibt unberücksichtigt)?",
   "answer": 24,
   "unit": "m",
   "explain": "h² = 25² − 7² = 625 − 49 = 576, also h = √576 = 24 m."
  },
  {
   "type": "num",
   "q": "Ein rechteckiger Bolzplatz misst 24 m × 18 m. Wie lang ist seine Diagonale?",
   "answer": 30,
   "unit": "m",
   "explain": "d² = 24² + 18² = 576 + 324 = 900, also d = √900 = 30 m."
  },
  {
   "type": "mc",
   "q": "Ein gleichschenkliges Dreieck hat die Basis 16 cm und die Schenkel 10 cm. Wie lang ist seine Höhe?",
   "options": [
    "8 cm",
    "4 cm",
    "6 cm"
   ],
   "answer": 2,
   "explain": "Die Höhe halbiert die Basis (8 cm): h² = 10² − 8² = 100 − 64 = 36, also h = 6 cm."
  },
  {
   "type": "tf",
   "q": "Ein Dreieck mit den Seiten 7 cm, 24 cm und 25 cm ist rechtwinklig.",
   "answer": true,
   "explain": "7² + 24² = 49 + 576 = 625 = 25²: Die Beziehung von Pythagoras gilt, also ist es rechtwinklig."
  },
  {
   "type": "num",
   "q": "Ein Tablet hat einen rechteckigen Bildschirm mit 17 cm Diagonale und 15 cm Breite. Wie hoch ist der Bildschirm?",
   "answer": 8,
   "unit": "cm",
   "explain": "h² = 17² − 15² = 289 − 225 = 64, also h = √64 = 8 cm."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Eine Raute hat die Seite 13 cm und eine Diagonale von 24 cm. Wie groß ist ihre Fläche?",
   "answer": 120,
   "unit": "cm²",
   "explain": "Die Diagonalen schneiden sich im rechten Winkel und halbieren sich: halbe Diagonale = 12; die andere Hälfte = √(13² − 12²) = √25 = 5, also ist die andere Diagonale 10. Fläche = 24 × 10 ÷ 2 = 120 cm²."
  },
  {
   "type": "num",
   "q": "Eine Ameise startet an einem Punkt, geht 8 m nach Osten, dann 9 m nach Norden und zuletzt noch 6 m nach Norden. Wie weit ist sie in gerader Linie vom Start entfernt?",
   "answer": 17,
   "unit": "m",
   "explain": "Nach Norden ist sie 9 + 6 = 15 m gegangen. Entfernung = √(8² + 15²) = √(64 + 225) = √289 = 17 m."
  },
  {
   "type": "mc",
   "q": "Sarah berechnet die Hypotenuse eines Dreiecks mit den Katheten 5 cm und 12 cm und erhält 17 cm. Was ist der Fehler?",
   "options": [
    "Sie hat die Katheten addiert, statt ihre Quadrate zu addieren und die Wurzel zu ziehen.",
    "Sie hat die Hypotenuse mit einer Kathete verwechselt.",
    "Es gibt keinen Fehler: 17 ist richtig."
   ],
   "answer": 0,
   "explain": "Das richtige Ergebnis ist √(5² + 12²) = √169 = 13 cm. 5 + 12 = 17 wäre nur die Summe der Katheten."
  },
  {
   "type": "tf",
   "q": "Verdoppelt man alle drei Seiten eines rechtwinkligen Dreiecks, ist das neue Dreieck immer noch rechtwinklig.",
   "answer": true,
   "explain": "(2a)² + (2b)² = 4(a² + b²) = 4c² = (2c)²: Die Beziehung von Pythagoras bleibt gültig (die Dreiecke sind ähnlich)."
  },
  {
   "type": "order",
   "q": "Ordne die rechtwinkligen Dreiecke von der kürzesten zur längsten Hypotenuse (die Katheten sind angegeben).",
   "items": [
    "Katheten 3 und 4",
    "Katheten 6 und 8",
    "Katheten 5 und 12",
    "Katheten 7 und 24"
   ],
   "explain": "Hypotenusen: 5, 10, 13 und 25."
  }
 ]
});
