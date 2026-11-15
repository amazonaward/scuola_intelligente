QBANK("de", "m3-mat-solidi", {
 "f": [
  {
   "type": "mc",
   "q": "Welcher Körper hat 6 gleiche quadratische Flächen?",
   "options": [
    "sfera",
    "cubo",
    "cono"
   ],
   "answer": 1,
   "explain": "Der Würfel hat 6 gleiche quadratische Flächen. Kugel und Kegel sind Rotationskörper."
  },
  {
   "type": "tf",
   "q": "Die Kugel ist ein Polyeder.",
   "answer": false,
   "explain": "Falsch: Ein Polyeder hat nur ebene Flächen. Die Kugel hat eine gekrümmte Oberfläche, ist also ein Rotationskörper."
  },
  {
   "type": "num",
   "q": "Wie viele Flächen hat eine Pyramide mit quadratischer Grundfläche?",
   "answer": 5,
   "explain": "Sie hat 1 quadratische Grundfläche und 4 dreieckige Seitenflächen: insgesamt 5 Flächen."
  },
  {
   "type": "mc",
   "q": "Eine Getränkedose hat die Form eines…",
   "options": [
    "cono",
    "prisma",
    "cilindro"
   ],
   "answer": 2,
   "explain": "Eine Dose hat zwei gleiche kreisförmige Grundflächen und eine gekrümmte Mantelfläche: Sie ist ein Zylinder."
  },
  {
   "type": "text",
   "q": "Wie heißt der Körper, der entsteht, wenn man ein rechtwinkliges Dreieck um eine Kathete dreht?",
   "answer": [
    "kegel",
    "der kegel"
   ],
   "explain": "Dreht man ein rechtwinkliges Dreieck um eine Kathete, entsteht ein Kegel."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Ein zylindrisches Glas hat den Radius 3 cm und die Höhe 5 cm. Wie groß ist sein Volumen? (π = 3,14)",
   "answer": 141.3,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = π × r² × h = 3,14 × 3² × 5 = 3,14 × 45 = 141,3 cm³."
  },
  {
   "type": "num",
   "q": "Eine Eiswaffel hat einen Grundflächenradius von 3 cm und eine Höhe von 4 cm. Wie groß ist ihr Volumen? (π = 3,14)",
   "answer": 37.68,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = (π × r² × h) : 3 = (3,14 × 9 × 4) : 3 = 113,04 : 3 = 37,68 cm³."
  },
  {
   "type": "num",
   "q": "Ein Schwimmbecken ist ein Quader mit 10 m × 5 m × 2 m. Wie viele Liter Wasser fasst es, wenn es voll ist?",
   "answer": 100000,
   "unit": "Liter",
   "explain": "V = 10 × 5 × 2 = 100 m³. Da 1 m³ = 1000 Liter, fasst das Becken 100 × 1000 = 100 000 Liter."
  },
  {
   "type": "mc",
   "q": "Die Oberfläche eines Würfels beträgt 54 cm². Wie lang ist seine Kante?",
   "options": [
    "9 cm",
    "3 cm",
    "6 cm"
   ],
   "answer": 1,
   "explain": "O = 6 × s² = 54, also s² = 54 : 6 = 9 und s = √9 = 3 cm."
  },
  {
   "type": "tf",
   "q": "Verdoppelt man die Kante eines Würfels, verdoppelt sich sein Volumen.",
   "answer": false,
   "explain": "Falsch: V = s³. Bei der Kante 2s ist (2s)³ = 8s³, das Volumen wird also 8-mal so groß."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Ein zylindrischer Behälter mit Radius 5 cm, bis zur Höhe 12 cm mit Wasser gefüllt, wird in eine Wanne mit quadratischem Boden (Seitenlänge 10 cm) geleert. Wie hoch steht das Wasser in der Wanne? (π = 3,14)",
   "answer": 9.42,
   "tol": 0.02,
   "unit": "cm",
   "explain": "Wasservolumen = 3,14 × 5² × 12 = 942 cm³. Bodenfläche der Wanne = 10 × 10 = 100 cm². Höhe = 942 : 100 = 9,42 cm."
  },
  {
   "type": "num",
   "q": "Ein Holzblock ist ein Quader von 20 cm × 10 cm × 5 cm mit dem spezifischen Gewicht 0,6 g/cm³. Wie schwer ist er?",
   "answer": 600,
   "unit": "g",
   "explain": "Volumen = 20 × 10 × 5 = 1000 cm³. Gewicht = Volumen × spezifisches Gewicht = 1000 × 0,6 = 600 g."
  },
  {
   "type": "mc",
   "q": "Ein Zylinder hat den Radius 3 cm und die Höhe 10 cm. Wie groß ist seine Mantelfläche? (π = 3,14)",
   "options": [
    "94,2 cm²",
    "188,4 cm²",
    "282,6 cm²"
   ],
   "answer": 1,
   "explain": "Mantelfläche = 2 × π × r × h = 2 × 3,14 × 3 × 10 = 188,4 cm². Es ist die Fläche des Rechtecks, das beim Abwickeln entsteht."
  },
  {
   "type": "tf",
   "q": "Für das Volumen eines Zylinders mit r = 4 cm und h = 5 cm rechnet Marco 3,14 × 4 × 5 = 62,8 cm³. Seine Rechnung ist richtig.",
   "answer": false,
   "explain": "Falsch: In der Formel muss der Radius quadriert werden. V = 3,14 × 4² × 5 = 3,14 × 80 = 251,2 cm³."
  },
  {
   "type": "order",
   "q": "Ordne diese Körper vom kleinsten zum größten Volumen.",
   "items": [
    "Würfel mit Kante 3 cm",
    "Quader 2 cm × 3 cm × 5 cm",
    "Zylinder mit Radius 2 cm und Höhe 3 cm (π = 3,14)",
    "Prisma mit Grundfläche 10 cm² und Höhe 4 cm",
    "Würfel mit Kante 4 cm"
   ],
   "explain": "Volumen: 27 cm³; 30 cm³; 3,14 × 4 × 3 = 37,68 cm³; 10 × 4 = 40 cm³; 64 cm³."
  }
 ]
});
