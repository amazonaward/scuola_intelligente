QBANK("de", "p5-mat-operazioni-decimali", {
  "f": [
    {
      "type": "num",
      "q": "Wie viel ist 6,4 + 2,3?",
      "answer": 8.7,
      "tol": 0.001,
      "explain": "Komma unter Komma: 6,4 + 2,3 = 8,7."
    },
    {
      "type": "mc",
      "q": "Wie viel ist 4,5 × 10?",
      "options": [
        "0,45",
        "45",
        "450"
      ],
      "answer": 1,
      "explain": "Mal 10 rechnen verschiebt das Komma um 1 Stelle nach rechts: 4,5 × 10 = 45."
    },
    {
      "type": "tf",
      "q": "Um 7,5 durch 10 zu teilen, verschiebt man das Komma um eine Stelle nach links.",
      "answer": true,
      "explain": "Wahr: 7,5 : 10 = 0,75. Durch 10 teilen macht die Zahl 10-mal kleiner."
    },
    {
      "type": "num",
      "q": "Wie viel ist 12,9 − 4,4?",
      "answer": 8.5,
      "tol": 0.001,
      "explain": "12,9 − 4,4 = 8,5."
    },
    {
      "type": "text",
      "q": "Wie heißt die erste Ziffer nach dem Komma? (ein Wort, Mehrzahl)",
      "answer": [
        "zehntel",
        "die zehntel",
        "zehntelstelle",
        "die zehntelstelle",
        "zehner"
      ],
      "explain": "Die erste Ziffer nach dem Komma zeigt die Zehntel (1/10); danach kommen die Hundertstel und die Tausendstel."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Eine Packung Nudeln kostet 1,35 €. Wie viel kosten 4 Packungen?",
      "answer": 5.4,
      "tol": 0.001,
      "unit": "€",
      "explain": "1,35 × 4 = 5,40 €."
    },
    {
      "type": "num",
      "q": "Wie viel ist 4,5 × 2,2?",
      "answer": 9.9,
      "tol": 0.001,
      "explain": "45 × 22 = 990. Es gibt 1 + 1 = 2 Nachkommastellen, also 9,90 = 9,9."
    },
    {
      "type": "mc",
      "q": "Wie viel ist 27,6 : 6?",
      "options": [
        "0,46",
        "46",
        "4,6"
      ],
      "answer": 2,
      "explain": "27 : 6 = 4 Rest 3; ich hole die 6 herunter und setze das Komma: 36 : 6 = 6. Ergebnis 4,6. Probe: 4,6 × 6 = 27,6."
    },
    {
      "type": "tf",
      "q": "Teilt man eine Zahl durch 0,1, erhält man eine kleinere Zahl.",
      "answer": false,
      "explain": "Falsch: Durch 0,1 teilen ist dasselbe wie mal 10 rechnen, die Zahl wird also größer. Zum Beispiel 3 : 0,1 = 30."
    },
    {
      "type": "num",
      "q": "Mit 20 € kaufst du 3 Eis zu je 4,50 €. Wie viel Euro Wechselgeld bekommst du?",
      "answer": 6.5,
      "tol": 0.001,
      "unit": "€",
      "explain": "Ausgabe: 4,50 × 3 = 13,50 €. Wechselgeld: 20 − 13,50 = 6,50 €."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Ein 15,6 m langes Seil wird in Stücke von je 0,6 m geschnitten. Wie viele Stücke entstehen?",
      "answer": 26,
      "explain": "15,6 : 0,6 = 156 : 6 = 26 Stücke (ich habe beide Zahlen mit 10 multipliziert)."
    },
    {
      "type": "mc",
      "q": "Welche dieser Rechnungen ist falsch?",
      "options": [
        "3,2 × 10 = 32",
        "0,45 × 100 = 45",
        "6,5 : 100 = 6,05"
      ],
      "answer": 2,
      "explain": "6,5 : 100 = 0,065: Das Komma wandert 2 Stellen nach links. Die anderen beiden stimmen."
    },
    {
      "type": "tf",
      "q": "Wenn man 3 kg Äpfel zu 2,40 € pro kg und 2 kg Birnen zu 3,10 € pro kg kauft, gibt man weniger als 14 € aus.",
      "answer": true,
      "explain": "Äpfel: 2,40 × 3 = 7,20 €. Birnen: 3,10 × 2 = 6,20 €. Zusammen 13,40 €, das ist weniger als 14 €."
    },
    {
      "type": "num",
      "q": "Du hast 50 €. Du kaufst 2,5 kg Orangen zu 1,80 € pro kg und ein Brot für 2,30 €. Wie viel Euro bleiben dir?",
      "answer": 43.2,
      "tol": 0.001,
      "unit": "€",
      "explain": "Orangen: 2,5 × 1,80 = 4,50 €. Insgesamt ausgegeben: 4,50 + 2,30 = 6,80 €. Übrig: 50 − 6,80 = 43,20 €."
    },
    {
      "type": "order",
      "q": "Ordne die Ergebnisse vom kleinsten zum größten.",
      "items": [
        "6,3 : 100",
        "0,4 × 0,2",
        "0,9 : 3",
        "0,5 + 0,15",
        "2,5 × 0,4"
      ],
      "explain": "6,3 : 100 = 0,063; 0,4 × 0,2 = 0,08; 0,9 : 3 = 0,3; 0,5 + 0,15 = 0,65; 2,5 × 0,4 = 1."
    }
  ]
});
