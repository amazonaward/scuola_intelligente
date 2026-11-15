QBANK("de", "m2-mat-trasformazioni", {
 "f": [
  {
   "type": "mc",
   "q": "Welche Transformation „klappt“ eine Figur um wie ein Spiegel?",
   "options": [
    "Die Verschiebung",
    "Die Drehung",
    "Die Achsenspiegelung"
   ],
   "answer": 2,
   "explain": "Die Achsenspiegelung spiegelt die Figur an einer Geraden, der Achse, wie ein Spiegel."
  },
  {
   "type": "tf",
   "q": "Eine Verschiebung erhält Form und Größe einer Figur.",
   "answer": true,
   "explain": "Sie ist eine Isometrie: Sie verschiebt die Figur, ohne sie zu verformen oder zu vergrößern."
  },
  {
   "type": "num",
   "q": "Wie viele Symmetrieachsen hat ein Rechteck, das kein Quadrat ist?",
   "answer": 2,
   "explain": "Es hat 2 Achsen: eine senkrechte und eine waagerechte durch die Mitten gegenüberliegender Seiten. Die Diagonalen sind keine Achsen."
  },
  {
   "type": "text",
   "q": "Wie heißt der Punkt, der bei einer Drehung fest bleibt?",
   "answer": [
    "zentrum",
    "drehzentrum",
    "drehpunkt",
    "das zentrum",
    "der drehpunkt"
   ],
   "explain": "Es ist das Drehzentrum: Die Figur dreht sich um diesen Punkt."
  },
  {
   "type": "mc",
   "q": "Welche Transformation verändert die Größe einer Figur?",
   "options": [
    "Die Verschiebung",
    "Die Drehung",
    "Die Streckung (Homothetie)"
   ],
   "answer": 2,
   "explain": "Nur die Streckung vergrößert oder verkleinert; Verschiebung und Drehung sind Isometrien."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Der Punkt A(3; −2) wird um den Vektor v(−5; 6) verschoben. Wie groß ist die y-Koordinate von A'?",
   "answer": 4,
   "explain": "y' = −2 + 6 = 4 (und x' = 3 − 5 = −2, also A'(−2; 4))."
  },
  {
   "type": "mc",
   "q": "Was ist das Spiegelbild von P(−4; 7) an der y-Achse?",
   "options": [
    "(4; −7)",
    "(4; 7)",
    "(−4; −7)"
   ],
   "answer": 1,
   "explain": "An der y-Achse wechselt die x-Koordinate das Vorzeichen, die y-Koordinate bleibt: (4; 7)."
  },
  {
   "type": "num",
   "q": "Der Punkt B(4; −9) wird durch die Punktspiegelung am Ursprung abgebildet. Wie groß ist die y-Koordinate von B'?",
   "answer": 9,
   "explain": "Bei der Spiegelung am Ursprung wechseln beide Koordinaten das Vorzeichen: B'(−4; 9)."
  },
  {
   "type": "num",
   "q": "Ein echtes Auto ist 4 m lang. Sein Modell ist ähnlich mit dem Ähnlichkeitsfaktor 1/25. Wie viele Zentimeter ist das Modell lang?",
   "answer": 16,
   "unit": "cm",
   "explain": "4 m = 400 cm; 400 ÷ 25 = 16 cm."
  },
  {
   "type": "tf",
   "q": "Bei einer Achsenspiegelung haben jeder Punkt und sein Bildpunkt denselben Abstand von der Achse.",
   "answer": true,
   "explain": "Die Achse ist die Mittelsenkrechte der Strecke PP': Sie steht senkrecht darauf und geht durch ihren Mittelpunkt."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Zwei ähnliche Figuren haben die Flächen 20 cm² und 45 cm². Wie groß ist der Ähnlichkeitsfaktor von der großen zur kleinen Figur?",
   "answer": 1.5,
   "explain": "Die Flächen verhalten sich wie k²: k² = 45 ÷ 20 = 2,25, also k = √2,25 = 1,5."
  },
  {
   "type": "mc",
   "q": "Zuerst wird die Verschiebung um den Vektor v(2; 3) ausgeführt, dann die um w(−5; 1). Das Ergebnis entspricht einer Verschiebung um den Vektor…",
   "options": [
    "(7; 2)",
    "(−3; −4)",
    "(−3; 4)"
   ],
   "answer": 2,
   "explain": "Man addiert die Komponenten: (2 + (−5); 3 + 1) = (−3; 4)."
  },
  {
   "type": "mc",
   "q": "Lukas sagt: „Dreht man (3; 1) um 90° (gegen den Uhrzeigersinn) um den Ursprung, entsteht (1; 3).“ Was ist der Fehler?",
   "options": [
    "Er hat nur die Koordinaten vertauscht, aber die Drehung bildet (x; y) auf (−y; x) ab, also auf (−1; 3).",
    "Eine 90°-Drehung ändert die Koordinaten nicht.",
    "Der Punkt geht in (−3; −1) über."
   ],
   "answer": 0,
   "explain": "Das Vertauschen der Koordinaten ist eine Spiegelung an der Geraden y = x, keine 90°-Drehung."
  },
  {
   "type": "num",
   "q": "Der Punkt P(2; 3) wird zuerst an der x-Achse gespiegelt und dann um den Vektor (1; −2) verschoben. Wie groß ist die y-Koordinate des Endpunkts?",
   "answer": -5,
   "explain": "Gespiegelt: (2; −3). Verschoben: (2 + 1; −3 − 2) = (3; −5). Die y-Koordinate ist −5."
  },
  {
   "type": "order",
   "q": "Ordne die Figuren von den wenigsten zu den meisten Symmetrieachsen.",
   "items": [
    "Ungleichseitiges Dreieck",
    "Raute (kein Quadrat)",
    "Regelmäßiges Fünfeck",
    "Regelmäßiges Sechseck"
   ],
   "explain": "Achsen: ungleichseitig 0, Raute 2 (die Diagonalen), regelmäßiges Fünfeck 5, regelmäßiges Sechseck 6."
  }
 ]
});
