QBANK("de", "m1-tec-disegno-tecnico", {
  "f": [
    {
      "type": "mc",
      "q": "Mit welchem Werkzeug misst man Winkel in Grad?",
      "options": [
        "Mit dem Zirkel",
        "Mit dem Winkelmesser",
        "Mit dem Lineal"
      ],
      "answer": 1,
      "explain": "Der Winkelmesser ist ein Halbkreis mit einer Skala von 0° bis 180°."
    },
    {
      "type": "tf",
      "q": "Der Maßstab 1:1 bedeutet, dass die Zeichnung genauso groß ist wie der echte Gegenstand.",
      "answer": true,
      "explain": "Beim Maßstab 1:1 entspricht 1 cm auf dem Blatt 1 cm in Wirklichkeit: Das ist der Originalmaßstab."
    },
    {
      "type": "mc",
      "q": "Wie heißt das Feld unten rechts mit Name, Titel und Maßstab?",
      "options": [
        "Die Maßzahl",
        "Der Zeichenrahmen",
        "Das Schriftfeld"
      ],
      "answer": 2,
      "explain": "Im Schriftfeld (cartiglio) stehen Name, Klasse, Datum, Titel und Maßstab."
    },
    {
      "type": "num",
      "q": "Wie viele Millimeter misst die lange Seite eines A3-Blatts?",
      "answer": 420,
      "unit": "mm",
      "explain": "A3 = 297 × 420 mm, die lange Seite ist also 420 mm."
    },
    {
      "type": "text",
      "q": "Wie heißt das Werkzeug, mit dem man Kreise und Bögen zeichnet?",
      "answer": [
        "zirkel",
        "der zirkel",
        "ein zirkel"
      ],
      "explain": "Der Zirkel zeichnet Kreise und Bögen und überträgt Längen."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Eine 3 m lange Wand wird im Maßstab 1:20 gezeichnet. Wie lang ist sie auf dem Blatt in cm?",
      "answer": 15,
      "unit": "cm",
      "explain": "3 m = 300 cm; 300 : 20 = 15 cm."
    },
    {
      "type": "mc",
      "q": "Eine 6 mm lange Ameise wird im Maßstab 10:1 gezeichnet. Wie lang ist sie in der Zeichnung?",
      "options": [
        "6 mm",
        "60 mm",
        "0,6 mm"
      ],
      "answer": 1,
      "explain": "Vergrößerungsmaßstab: 6 × 10 = 60 mm."
    },
    {
      "type": "tf",
      "q": "Maßlinien zeichnet man mit einer dünnen Volllinie.",
      "answer": true,
      "explain": "Maß- und Hilfslinien werden mit der dünnen Volllinie gezeichnet."
    },
    {
      "type": "order",
      "q": "Bringe die Schritte zur Konstruktion der Winkelhalbierenden in die richtige Reihenfolge.",
      "items": [
        "Setze den Zirkel im Scheitel V ein und zeichne einen Bogen, der beide Schenkel schneidet",
        "Setze ihn im ersten Schnittpunkt ein und zeichne einen Bogen im Winkelinneren",
        "Setze ihn mit gleicher Öffnung im zweiten Punkt ein und kreuze den Bogen in P",
        "Verbinde V mit P"
      ],
      "explain": "Zuerst der Bogen vom Scheitel aus, dann die zwei Bögen, die sich in P kreuzen, zuletzt die Gerade von V nach P."
    },
    {
      "type": "num",
      "q": "Wie viele A4-Blätter braucht man, um genau ein A2-Blatt zu bedecken?",
      "answer": 4,
      "explain": "Jedes Format ist die Hälfte des vorigen: A2 = 2 × A3 = 4 × A4."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Ein rechteckiger Garten von 12 m × 8 m wird im Maßstab 1:200 gezeichnet. Wie groß ist die Fläche des Rechtecks auf dem Blatt in cm²?",
      "answer": 24,
      "unit": "cm²",
      "explain": "12 m = 1200 cm → 1200 : 200 = 6 cm; 8 m = 800 cm → 800 : 200 = 4 cm. Fläche = 6 × 4 = 24 cm²."
    },
    {
      "type": "mc",
      "q": "Ein 3 mm großes Teil wird 12 mm lang gezeichnet. Welcher Maßstab wurde benutzt?",
      "options": [
        "1:4",
        "4:1",
        "12:1"
      ],
      "answer": 1,
      "explain": "12 : 3 = 4: Die Zeichnung ist 4-mal so groß, also ist es der Vergrößerungsmaßstab 4:1."
    },
    {
      "type": "tf",
      "q": "Julia zeichnet eine 2 m hohe Tür im Maßstab 1:10 und schreibt 200 an die Maßzahl. Das ist richtig.",
      "answer": false,
      "explain": "Das ist falsch: Die Maßzahl gibt immer die wirkliche Größe in Millimetern an, also 2000, auch wenn die Zeichnung verkleinert ist."
    },
    {
      "type": "order",
      "q": "Bringe die Schritte zum Zeichnen eines regelmäßigen Sechsecks mit dem Zirkel in die richtige Reihenfolge.",
      "items": [
        "Zeichne einen Kreis",
        "Setze den Zirkel mit gleicher Öffnung (dem Radius) auf einen Kreispunkt und markiere einen Bogen",
        "Wiederhole von Punkt zu Punkt, bis du 6 Punkte hast",
        "Verbinde die 6 Punkte mit dem Lineal"
      ],
      "explain": "Die Seite des Sechsecks ist so lang wie der Radius: Man trägt den Radius 6-mal ab und verbindet dann die Punkte."
    },
    {
      "type": "mc",
      "q": "Warum muss die Zirkelöffnung bei der Konstruktion der Mittelsenkrechten von AB größer als die Hälfte von AB sein?",
      "options": [
        "Damit die Zeichnung größer wird",
        "Weil sich die Zirkelspitze abnutzt",
        "Sonst schneiden sich die Bögen um A und um B nicht"
      ],
      "answer": 2,
      "explain": "Wäre die Öffnung kleiner als die Hälfte von AB, würden sich die Bögen nicht treffen, und man fände die Punkte für die Mittelsenkrechte nicht."
    }
  ]
});
