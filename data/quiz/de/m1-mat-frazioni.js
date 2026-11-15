QBANK("de", "m1-mat-frazioni", {
  "f": [
    {
      "type": "mc",
      "q": "Welche Zahl ist in dem Bruch 5/8 der Nenner?",
      "options": [
        "5",
        "8",
        "13"
      ],
      "answer": 1,
      "explain": "Der Nenner steht unter dem Bruchstrich: Er sagt, in wie viele gleiche Teile das Ganze geteilt wird."
    },
    {
      "type": "tf",
      "q": "Der Bruch 7/7 ist gleich 1.",
      "answer": true,
      "explain": "7 : 7 = 1: Es ist ein scheinbarer Bruch."
    },
    {
      "type": "mc",
      "q": "Welcher dieser Brüche ist ein echter Bruch?",
      "options": [
        "9/5",
        "6/6",
        "4/9"
      ],
      "answer": 2,
      "explain": "Ein echter Bruch hat einen Zähler, der kleiner als der Nenner ist: 4 &lt; 9."
    },
    {
      "type": "num",
      "q": "Wie viel sind 3/4 von 20?",
      "answer": 15,
      "explain": "20 : 4 = 5; 5 × 3 = 15."
    },
    {
      "type": "text",
      "q": "Wie heißt ein Bruch, dessen Zähler größer als der Nenner ist (und kein Vielfaches davon)?",
      "answer": [
        "unechter bruch",
        "unechter",
        "unecht",
        "ein unechter bruch",
        "der unechte bruch"
      ],
      "explain": "Ein Bruch mit größerem Zähler als Nenner ist mehr als ein Ganzes: Er heißt unechter Bruch."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Welcher Bruch ist gleichwertig mit 3/5?",
      "options": [
        "9/20",
        "6/15",
        "6/10"
      ],
      "answer": 2,
      "explain": "Wenn man Zähler und Nenner mit 2 multipliziert, erhält man 6/10."
    },
    {
      "type": "mc",
      "q": "Wie schreibt man 17/5 als gemischte Zahl?",
      "options": [
        "2 und 3/5",
        "3 und 2/5",
        "3 und 1/5"
      ],
      "answer": 1,
      "explain": "17 : 5 = 3 Rest 2, also 3 Ganze und 2/5."
    },
    {
      "type": "num",
      "q": "Ein Radfahrer ist 2/3 eines 90 km langen Rennens gefahren. Wie viele Kilometer sind das?",
      "answer": 60,
      "unit": "km",
      "explain": "90 : 3 = 30; 30 × 2 = 60 km."
    },
    {
      "type": "mc",
      "q": "Wie viel ist 2/3 × 9/4?",
      "options": [
        "3/2",
        "11/7",
        "6/7"
      ],
      "answer": 0,
      "explain": "Zähler mal Zähler, Nenner mal Nenner: 18/12; durch 6 gekürzt ergibt das 3/2."
    },
    {
      "type": "tf",
      "q": "Von 3/5 und 2/3 ist 3/5 der größere Bruch.",
      "answer": false,
      "explain": "Mit dem gemeinsamen Nenner 15: 3/5 = 9/15 und 2/3 = 10/15. Also ist 2/3 größer."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Eine Schneiderin hat 36 m Stoff. Sie braucht 1/4 davon für ein Kleid und 1/3 für einen Vorhang. Wie viele Meter Stoff bleiben übrig?",
      "answer": 15,
      "unit": "m",
      "explain": "Kleid: 36 : 4 = 9 m. Vorhang: 36 : 3 = 12 m. Verbraucht: 9 + 12 = 21 m; übrig: 36 − 21 = 15 m."
    },
    {
      "type": "mc",
      "q": "Wie viel ergibt der Term 1/2 + 1/3 × 3/4 ?",
      "options": [
        "5/7",
        "5/8",
        "3/4"
      ],
      "answer": 2,
      "explain": "Zuerst die Multiplikation: 1/3 × 3/4 = 1/4. Dann 1/2 + 1/4 = 2/4 + 1/4 = 3/4."
    },
    {
      "type": "tf",
      "q": "Marco sagt: „Für 2/3 + 4/5 addiere ich Zähler und Nenner und erhalte 6/8.“ Seine Überlegung ist richtig.",
      "answer": false,
      "explain": "Falsch: Man braucht einen gemeinsamen Nenner (15): 10/15 + 12/15 = 22/15."
    },
    {
      "type": "num",
      "q": "Eine zu 3/5 gefüllte Flasche enthält 1,2 Liter Wasser. Wie viele Liter passen in die volle Flasche?",
      "answer": 2,
      "tol": 0.01,
      "unit": "L",
      "explain": "Umkehraufgabe: 1,2 : 3 = 0,4 Liter für 1/5; 0,4 × 5 = 2 Liter."
    },
    {
      "type": "order",
      "q": "Bringe die Schritte zur Berechnung von 1/4 + 2/3 in die richtige Reihenfolge.",
      "items": [
        "Ich bestimme das kgV der Nenner: 12",
        "Ich erweitere die Brüche: 3/12 und 8/12",
        "Ich addiere die Zähler: 11/12",
        "Ich prüfe, ob man kürzen kann"
      ],
      "explain": "Zuerst der gemeinsame Nenner (kgV), dann gleichwertige Brüche, dann die Summe und zuletzt das Kürzen."
    }
  ]
});
