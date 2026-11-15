QBANK("de", "p5-mat-perimetro-area", {
  "f": [
    {
      "type": "num",
      "q": "Ein Fünfeck hat die Seitenlängen 3 cm, 4 cm, 4 cm, 5 cm und 6 cm. Wie groß ist der Umfang?",
      "answer": 22,
      "unit": "cm",
      "explain": "Man addiert alle Seiten: 3 + 4 + 4 + 5 + 6 = 22 cm."
    },
    {
      "type": "tf",
      "q": "Um den Umfang eines Vielecks zu berechnen, addiert man die Längen aller Seiten.",
      "answer": true,
      "explain": "Wahr: Der Umfang ist die Länge des ganzen Randes, also die Summe aller Seiten."
    },
    {
      "type": "mc",
      "q": "Welche dieser Figuren hat den Umfang U = Seite × 4?",
      "options": [
        "Gleichseitiges Dreieck",
        "Raute",
        "Trapez"
      ],
      "answer": 1,
      "explain": "Die Raute hat 4 gleich lange Seiten, also U = Seite × 4. Das gleichseitige Dreieck hat 3 gleiche Seiten."
    },
    {
      "type": "num",
      "q": "Ein Rechteck besteht aus 3 Reihen mit je 6 Quadraten von 1 cm². Wie groß ist seine Fläche?",
      "answer": 18,
      "unit": "cm²",
      "explain": "Wir zählen die Quadrate: 3 × 6 = 18 Quadrate zu 1 cm², also 18 cm²."
    },
    {
      "type": "text",
      "q": "Wie heißt die Strecke, die senkrecht auf der Grundseite steht und zur Flächenberechnung von Dreieck oder Parallelogramm dient?",
      "answer": [
        "höhe",
        "die höhe",
        "hoehe"
      ],
      "explain": "Es ist die Höhe (h): Sie geht von einer Ecke aus und trifft im rechten Winkel auf die Grundseite."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Ein rechteckiger Gemüsegarten ist 12 m lang und 8 m breit. Wie viele Meter Zaun braucht man, um ihn ganz zu umzäunen?",
      "answer": 40,
      "unit": "m",
      "explain": "Umfang: (12 + 8) × 2 = 20 × 2 = 40 m."
    },
    {
      "type": "num",
      "q": "Eine rechteckige Wand, 3 m hoch und 7 m breit, soll gestrichen werden. Ein Liter Farbe deckt 6 m². Wie viele Liter braucht man?",
      "answer": 3.5,
      "tol": 0.01,
      "unit": "l",
      "explain": "Fläche: 3 × 7 = 21 m². Liter: 21 : 6 = 3,5 l."
    },
    {
      "type": "mc",
      "q": "Ein Parallelogramm hat die Grundseite 9 cm und die Höhe 4 cm. Wie groß ist seine Fläche?",
      "options": [
        "18 cm²",
        "36 cm²",
        "13 cm²"
      ],
      "answer": 1,
      "explain": "A = g × h = 9 × 4 = 36 cm². (Man teilt nicht durch 2: das gilt nur für das Dreieck.)"
    },
    {
      "type": "tf",
      "q": "Ein Rechteck mit 6 cm × 2 cm hat denselben Flächeninhalt wie ein Rechteck mit 4 cm × 3 cm.",
      "answer": true,
      "explain": "Wahr: 6 × 2 = 12 cm² und 4 × 3 = 12 cm². Die Flächen sind gleich, die Umfänge aber verschieden (16 cm und 14 cm)."
    },
    {
      "type": "num",
      "q": "Ein Quadrat hat einen Umfang von 20 cm. Wie groß ist seine Fläche?",
      "answer": 25,
      "unit": "cm²",
      "explain": "Seite: 20 : 4 = 5 cm. Fläche: 5 × 5 = 25 cm²."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Ein Garten besteht aus zwei getrennten rechteckigen Flächen: eine mit 10 m × 6 m und eine mit 4 m × 3 m. Wie groß ist die Gesamtfläche in m²?",
      "answer": 72,
      "unit": "m²",
      "explain": "Erste Fläche: 10 × 6 = 60 m². Zweite Fläche: 4 × 3 = 12 m². Zusammen: 60 + 12 = 72 m²."
    },
    {
      "type": "mc",
      "q": "Ein rechteckiger Raum von 6 m × 4 m soll mit quadratischen Fliesen mit 50 cm Seitenlänge belegt werden. Wie viele Fliesen braucht man?",
      "options": [
        "48",
        "96",
        "24",
        "192"
      ],
      "answer": 1,
      "explain": "Auf 6 m passen 12 Fliesen (600 : 50), auf 4 m passen 8 (400 : 50): 12 × 8 = 96. Oder: 24 m² : 0,25 m² = 96."
    },
    {
      "type": "tf",
      "q": "Wenn man die Seite eines Quadrats verdoppelt, verdoppelt sich auch seine Fläche.",
      "answer": false,
      "explain": "Falsch: Die Fläche wird 4-mal so groß. Zum Beispiel ist sie bei 3 cm Seitenlänge 9 cm², bei 6 cm Seitenlänge 36 cm²."
    },
    {
      "type": "num",
      "q": "Ein Rechteck hat die Grundseite 1,2 m und die Höhe 80 cm. Wie groß ist sein Umfang in Zentimetern?",
      "answer": 400,
      "unit": "cm",
      "explain": "Umrechnen: 1,2 m = 120 cm. Umfang: (120 + 80) × 2 = 200 × 2 = 400 cm."
    },
    {
      "type": "order",
      "q": "Ordne die Figuren von der kleinsten zur größten Fläche.",
      "items": [
        "Dreieck: Grundseite 6 cm, Höhe 3 cm",
        "Rechteck: 3 cm × 4 cm",
        "Parallelogramm: Grundseite 5 cm, Höhe 3 cm",
        "Raute: Diagonalen 8 cm und 5 cm",
        "Quadrat: Seite 5 cm"
      ],
      "explain": "Dreieck 6 × 3 : 2 = 9 cm²; Rechteck 3 × 4 = 12 cm²; Parallelogramm 5 × 3 = 15 cm²; Raute 8 × 5 : 2 = 20 cm²; Quadrat 5 × 5 = 25 cm²."
    }
  ]
});
