QBANK("de", "m3-mat-piano-cartesiano", {
 "f": [
  {
   "type": "mc",
   "q": "Wie heißt die waagerechte Achse des Koordinatensystems?",
   "options": [
    "y-Achse (Ordinaten)",
    "Ursprung",
    "x-Achse (Abszissen)"
   ],
   "answer": 2,
   "explain": "Die waagerechte Achse ist die x-Achse, auch Abszissenachse genannt; die senkrechte ist die y-Achse."
  },
  {
   "type": "tf",
   "q": "Der Ursprung des Koordinatensystems hat die Koordinaten (0; 0).",
   "answer": true,
   "explain": "Der Ursprung ist der Schnittpunkt der Achsen: x und y sind beide 0."
  },
  {
   "type": "mc",
   "q": "In welchem Quadranten liegt der Punkt P(−3; −6)?",
   "options": [
    "primo",
    "secondo",
    "terzo",
    "quarto"
   ],
   "answer": 2,
   "explain": "Bei negativem x und negativem y liegt der Punkt im dritten Quadranten (unten links)."
  },
  {
   "type": "num",
   "q": "Wie groß ist die Ordinate (y-Koordinate) des Punktes A(3; 8)?",
   "answer": 8,
   "explain": "Koordinaten schreibt man (Abszisse; Ordinate): Die Ordinate ist die zweite, also 8."
  },
  {
   "type": "text",
   "q": "Wie heißt der Punkt, in dem sich die beiden Koordinatenachsen schneiden?",
   "answer": [
    "ursprung",
    "der ursprung",
    "koordinatenursprung",
    "nullpunkt"
   ],
   "explain": "Der Schnittpunkt der Achsen mit den Koordinaten (0; 0) heißt Ursprung."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Berechne den Abstand der Punkte A(2; −1) und B(2; 7).",
   "answer": 8,
   "explain": "Die Punkte haben dieselbe x-Koordinate, liegen also auf einer senkrechten Geraden: Abstand = 7 − (−1) = 8."
  },
  {
   "type": "mc",
   "q": "Wie lautet der Mittelpunkt der Strecke mit den Endpunkten A(0; 6) und B(8; −2)?",
   "options": [
    "(4; 4)",
    "(4; 2)",
    "(8; 4)"
   ],
   "answer": 1,
   "explain": "Man mittelt die Koordinaten: x = (0 + 8) : 2 = 4; y = (6 − 2) : 2 = 2. Mittelpunkt (4; 2)."
  },
  {
   "type": "mc",
   "q": "Welche dieser Geraden geht durch den Ursprung?",
   "options": [
    "y = 2x + 1",
    "y = −3x",
    "y = x − 4"
   ],
   "answer": 1,
   "explain": "Eine Gerade geht durch den Ursprung, wenn sie kein Absolutglied hat: y = −3x. Für x = 0 ergibt sich y = 0."
  },
  {
   "type": "num",
   "q": "Wie groß ist die Steigung der Geraden durch A(0; 1) und B(4; −7)?",
   "answer": -2,
   "explain": "m = (y₂ − y₁) : (x₂ − x₁) = (−7 − 1) : (4 − 0) = −8 : 4 = −2."
  },
  {
   "type": "tf",
   "q": "Der Punkt (2; 5) liegt auf der Geraden y = 2x + 3.",
   "answer": false,
   "explain": "Falsch: Für x = 2 ist y = 2 · 2 + 3 = 7, nicht 5. Der Punkt erfüllt die Gleichung nicht."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Berechne den Flächeninhalt des Dreiecks mit den Eckpunkten A(1; 1), B(7; 1) und C(4; 6).",
   "answer": 15,
   "unit": "Flächeneinheiten",
   "explain": "Die Grundseite AB ist waagerecht und misst 7 − 1 = 6. Die Höhe ist der Abstand von C zur Geraden y = 1: 6 − 1 = 5. Fläche = 6 × 5 : 2 = 15."
  },
  {
   "type": "num",
   "q": "Berechne den Abstand zwischen A(−3; −2) und B(5; 4).",
   "answer": 10,
   "explain": "Differenzen: Δx = 5 − (−3) = 8 und Δy = 4 − (−2) = 6. Mit Pythagoras: √(8² + 6²) = √100 = 10."
  },
  {
   "type": "mc",
   "q": "In welchen Punkten schneidet die Gerade y = 2x − 6 die x-Achse und die y-Achse?",
   "options": [
    "(−3; 0) e (0; 6)",
    "(6; 0) e (0; −3)",
    "(3; 0) e (0; −6)",
    "(0; 3) e (−6; 0)"
   ],
   "answer": 2,
   "explain": "x-Achse: y = 0 setzen, also 2x = 6 und x = 3, Punkt (3; 0). y-Achse: x = 0 setzen, also y = −6, Punkt (0; −6)."
  },
  {
   "type": "tf",
   "q": "Die Geraden y = 2x + 1 und y = −x/2 + 3 stehen senkrecht aufeinander.",
   "answer": true,
   "explain": "Zwei Geraden sind senkrecht zueinander, wenn das Produkt ihrer Steigungen −1 ist: 2 × (−1/2) = −1."
  },
  {
   "type": "order",
   "q": "Ordne diese Punkte nach ihrem Abstand vom Ursprung, vom nächsten zum entferntesten.",
   "items": [
    "A(0; 3)",
    "B(3; 4)",
    "C(−6; 8)",
    "D(5; −12)"
   ],
   "explain": "Abstände von O: A = 3; B = √(9 + 16) = 5; C = √(36 + 64) = 10; D = √(25 + 144) = 13."
  }
 ]
});
