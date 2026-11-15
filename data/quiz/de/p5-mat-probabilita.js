QBANK("de", "p5-mat-probabilita", {
  "f": [
    {
      "type": "mc",
      "q": "Was ist der Modalwert einer Datenmenge?",
      "options": [
        "Der Wert, der am häufigsten vorkommt",
        "Der Wert in der Mitte",
        "Die Summe aller Werte"
      ],
      "answer": 0,
      "explain": "Der Modalwert ist der Wert mit der größten Häufigkeit, also der, der sich am öftesten wiederholt."
    },
    {
      "type": "tf",
      "q": "Beim Werfen eines normalen sechsseitigen Würfels ist eine Zahl größer als 6 ein unmögliches Ereignis.",
      "answer": true,
      "explain": "Wahr: Auf dem Würfel stehen nur die Zahlen 1 bis 6, also kann eine Zahl über 6 nie fallen."
    },
    {
      "type": "num",
      "q": "Wie groß ist der Mittelwert von 2, 8 und 11?",
      "answer": 7,
      "explain": "Summe: 2 + 8 + 11 = 21. Geteilt durch 3 Werte: 21 : 3 = 7."
    },
    {
      "type": "mc",
      "q": "Welches dieser Ereignisse ist sicher?",
      "options": [
        "Beim Würfeln fällt eine 6",
        "Beim Würfeln fällt eine Zahl kleiner als 7",
        "Beim Münzwurf fällt Kopf"
      ],
      "answer": 1,
      "explain": "Ein Würfel hat nur die Zahlen 1 bis 6, also fällt immer eine Zahl kleiner als 7: Das ist ein sicheres Ereignis."
    },
    {
      "type": "text",
      "q": "Wie nennt man die Anzahl, wie oft eine Antwort in einer Umfrage vorkommt?",
      "answer": [
        "häufigkeit",
        "die häufigkeit",
        "absolute häufigkeit"
      ],
      "explain": "Man nennt sie Häufigkeit: Wenn zum Beispiel 6 Kinder Fußball wählen, ist die Häufigkeit von Fußball 6."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Marco hat diese Noten bekommen: 6, 7, 9, 10. Wie groß ist sein Durchschnitt?",
      "answer": 8,
      "explain": "Summe: 6 + 7 + 9 + 10 = 32. Durchschnitt: 32 : 4 = 8."
    },
    {
      "type": "num",
      "q": "Wie groß ist der Zentralwert (Median) von 8, 3, 12, 5, 9, 7?",
      "answer": 7.5,
      "tol": 0.01,
      "explain": "Geordnet: 3, 5, 7, 8, 9, 12. Es sind 6 Werte (gerade Anzahl): Der Median ist der Mittelwert der beiden mittleren Werte, (7 + 8) : 2 = 7,5."
    },
    {
      "type": "mc",
      "q": "Wie groß ist die Wahrscheinlichkeit, mit einem Würfel eine Zahl größer als 4 zu werfen?",
      "options": [
        "1/2",
        "1/3",
        "1/6"
      ],
      "answer": 1,
      "explain": "Es gibt 2 günstige Fälle (5 und 6) von 6 möglichen: 2/6 = 1/3."
    },
    {
      "type": "tf",
      "q": "In einem Beutel sind 3 rote Kugeln und 1 blaue. Eine rote zu ziehen ist wahrscheinlicher, als die blaue zu ziehen.",
      "answer": true,
      "explain": "Wahr: Die Wahrscheinlichkeit, eine rote zu ziehen, beträgt 3/4, die für die blaue 1/4."
    },
    {
      "type": "num",
      "q": "Die Körpergrößen von vier Freunden sind 138 cm, 142 cm, 150 cm und 145 cm. Wie groß ist die Spannweite?",
      "answer": 12,
      "unit": "cm",
      "explain": "Spannweite = größter Wert − kleinster Wert = 150 − 138 = 12 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia hat in den ersten drei Tests 6, 7 und 9 bekommen. Welche Note braucht sie im vierten, um einen Durchschnitt von 8 zu haben?",
      "answer": 10,
      "explain": "Für den Durchschnitt 8 bei 4 Tests braucht sie 8 × 4 = 32 Punkte. Bisher hat sie 6 + 7 + 9 = 22. Sie braucht 32 − 22 = 10."
    },
    {
      "type": "mc",
      "q": "In einem Dorf verdienen 4 Personen 1000 € im Monat und eine Person 11 000 €. Welcher Wert beschreibt den „typischen“ Verdienst am besten?",
      "options": [
        "Der Mittelwert (3000 €)",
        "Der Median (1000 €)",
        "Die Summe (15 000 €)"
      ],
      "answer": 1,
      "explain": "Ein einziger sehr hoher Wert hebt den Mittelwert auf 3000 €, was fast zu niemandem passt. Der Median (1000 €) beschreibt die typische Lage besser."
    },
    {
      "type": "tf",
      "q": "In einem Beutel sind 3 rote, 2 blaue und 5 grüne Kugeln. Die Wahrscheinlichkeit, KEINE grüne zu ziehen, ist 1/2.",
      "answer": true,
      "explain": "Nicht grüne Kugeln sind 3 + 2 = 5 von insgesamt 10: 5/10 = 1/2."
    },
    {
      "type": "num",
      "q": "In einem Beutel sind 5 rote und 15 blaue Kugeln. Wie groß ist die Wahrscheinlichkeit, eine rote zu ziehen, in Prozent?",
      "answer": 25,
      "unit": "%",
      "explain": "Günstige Fälle: 5 von 20 möglichen: 5/20 = 1/4 = 25/100 = 25 %."
    },
    {
      "type": "order",
      "q": "Bringe die Schritte zur Bestimmung des Medians bei einer GERADEN Anzahl von Werten in die richtige Reihenfolge.",
      "items": [
        "Ich ordne die Werte der Größe nach",
        "Ich suche die beiden mittleren Werte",
        "Ich addiere die beiden mittleren Werte",
        "Ich teile die Summe durch 2"
      ],
      "explain": "Bei einer geraden Anzahl von Werten gibt es keinen einzelnen mittleren Wert: Man ordnet die Daten, nimmt die beiden mittleren und bildet ihren Mittelwert."
    }
  ]
});
