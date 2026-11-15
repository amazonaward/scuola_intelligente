QBANK("de", "p5-mat-cerchio", {
  "f": [
    {
      "type": "mc",
      "q": "Wie heißt der Punkt, der von allen Punkten der Kreislinie gleich weit entfernt ist?",
      "options": [
        "Bogen",
        "Mittelpunkt",
        "Sektor"
      ],
      "answer": 1,
      "explain": "Der Mittelpunkt ist die Stelle, wo die Zirkelspitze steht: Alle Punkte der Kreislinie haben denselben Abstand von ihm."
    },
    {
      "type": "tf",
      "q": "Der Durchmesser ist doppelt so lang wie der Radius.",
      "answer": true,
      "explain": "Wahr: d = r × 2. Der Durchmesser besteht aus zwei aneinandergelegten Radien."
    },
    {
      "type": "num",
      "q": "Ein Rad hat einen Radius von 8 cm. Wie groß ist sein Durchmesser?",
      "answer": 16,
      "unit": "cm",
      "explain": "d = r × 2 = 8 × 2 = 16 cm."
    },
    {
      "type": "mc",
      "q": "Eine Strecke, die zwei beliebige Punkte der Kreislinie verbindet, heißt…",
      "options": [
        "Bogen",
        "Sektor",
        "Sehne"
      ],
      "answer": 2,
      "explain": "Die Strecke zwischen zwei Punkten der Kreislinie ist eine Sehne. Ein Bogen dagegen ist ein Stück der Kreislinie."
    },
    {
      "type": "text",
      "q": "Mit welchem Werkzeug zeichnet man einen Kreis?",
      "answer": [
        "zirkel",
        "der zirkel",
        "ein zirkel"
      ],
      "explain": "Man benutzt den Zirkel: Die Spitze bleibt im Mittelpunkt, die Mine dreht sich herum."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Eine Pizza hat einen Durchmesser von 30 cm. Wie lang ist ihr Umfang (der Rand)? (π = 3,14)",
      "answer": 94.2,
      "unit": "cm",
      "explain": "C = d × 3,14 = 30 × 3,14 = 94,2 cm."
    },
    {
      "type": "mc",
      "q": "Ein Kreis hat einen Radius von 4 dm. Welche Rechnung ergibt die Länge der Kreislinie?",
      "options": [
        "4 × 3,14",
        "4 × 2 × 3,14",
        "4 × 4 × 3,14"
      ],
      "answer": 1,
      "explain": "C = r × 2 × 3,14. Die letzte Rechnung (r × r × 3,14) würde die Fläche ergeben, nicht den Rand."
    },
    {
      "type": "num",
      "q": "Ein Fahrradreifen hat einen Durchmesser von 70 cm. Wie viele Meter fährt das Rad bei 10 vollen Umdrehungen? (π = 3,14)",
      "answer": 21.98,
      "tol": 0.01,
      "unit": "m",
      "explain": "Eine Umdrehung: 70 × 3,14 = 219,8 cm. 10 Umdrehungen: 2198 cm = 21,98 m."
    },
    {
      "type": "tf",
      "q": "Wenn sich der Radius eines Kreises verdoppelt, verdoppelt sich auch sein Umfang.",
      "answer": true,
      "explain": "Wahr: C = r × 2 × 3,14. Wird r doppelt so groß, wird auch C doppelt so groß."
    },
    {
      "type": "num",
      "q": "Eine Kreislinie ist 62,8 cm lang. Wie groß ist ihr Radius? (π = 3,14)",
      "answer": 10,
      "unit": "cm",
      "explain": "Durchmesser: 62,8 : 3,14 = 20 cm. Radius: 20 : 2 = 10 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Eine runde Laufbahn hat einen Durchmesser von 80 m. Marco läuft 3 Runden am Rand entlang. Wie viele Meter läuft er? (π = 3,14)",
      "answer": 753.6,
      "tol": 0.01,
      "unit": "m",
      "explain": "Eine Runde: 80 × 3,14 = 251,2 m. Drei Runden: 251,2 × 3 = 753,6 m."
    },
    {
      "type": "mc",
      "q": "Bei einer vollen Umdrehung legt ein Rad 157 cm zurück. Wie groß ist sein Durchmesser? (π = 3,14)",
      "options": [
        "25 cm",
        "50 cm",
        "78,5 cm",
        "100 cm"
      ],
      "answer": 1,
      "explain": "d = C : 3,14 = 157 : 3,14 = 50 cm. Achtung: 25 cm wäre der Radius."
    },
    {
      "type": "tf",
      "q": "60 cm Band reichen, um eine runde Platte mit 20 cm Durchmesser einmal zu umwickeln.",
      "answer": false,
      "explain": "Falsch: Der Umfang beträgt 20 × 3,14 = 62,8 cm, also mehr als 60 cm."
    },
    {
      "type": "num",
      "q": "Eine Pizza hat einen Durchmesser von 40 cm. Wie groß ist ihre Fläche? (A = r × r × 3,14)",
      "answer": 1256,
      "tol": 0.01,
      "unit": "cm²",
      "explain": "Radius: 40 : 2 = 20 cm. Fläche: 20 × 20 × 3,14 = 400 × 3,14 = 1256 cm²."
    },
    {
      "type": "order",
      "q": "Ordne von der kürzesten zur längsten Kreislinie. (π = 3,14)",
      "items": [
        "Durchmesser 10 cm",
        "Radius 7 cm",
        "Durchmesser 20 cm",
        "Radius 15 cm"
      ],
      "explain": "Durchmesser 10 → 31,4 cm; Radius 7 (d = 14) → 43,96 cm; Durchmesser 20 → 62,8 cm; Radius 15 (d = 30) → 94,2 cm."
    }
  ]
});
