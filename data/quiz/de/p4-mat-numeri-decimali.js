QBANK("de", "p4-mat-numeri-decimali", {
  "f": [
    {
      "type": "mc",
      "q": "Wie liest man 0,8?",
      "options": [
        "acht Zehntel",
        "acht Hundertstel",
        "acht Tausendstel"
      ],
      "answer": 0,
      "explain": "Die erste Ziffer nach dem Komma zeigt die Zehntel: 0,8 = 8 Zehntel."
    },
    {
      "type": "tf",
      "q": "In der Zahl 8,6 zeigt die Ziffer 6 die Hundertstel.",
      "answer": false,
      "explain": "Es ist die erste Ziffer nach dem Komma, also zeigt sie die Zehntel (6 Zehntel)."
    },
    {
      "type": "num",
      "q": "Wie viel ist 0,5 + 0,3?",
      "answer": 0.8,
      "explain": "5 Zehntel + 3 Zehntel = 8 Zehntel, also 0,8."
    },
    {
      "type": "text",
      "q": "Wie heißt das Zeichen, das den ganzen Teil vom Dezimalteil einer Zahl trennt (in Italien)?",
      "answer": [
        "komma",
        "das komma",
        "dezimalkomma"
      ],
      "explain": "In Italien benutzt man das Komma (3,14); in anderen Ländern den Punkt (3.14)."
    },
    {
      "type": "mc",
      "q": "Welche Zahl ist gleich 2,50?",
      "options": [
        "2,05",
        "2,5",
        "25"
      ],
      "answer": 1,
      "explain": "Nullen am Ende nach dem Komma ändern den Wert nicht: 2,50 = 2,5."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Wie viel ist 7,25 − 2,5?",
      "answer": 4.75,
      "explain": "Schreibe Komma unter Komma: 7,25 − 2,50 = 4,75."
    },
    {
      "type": "mc",
      "q": "Welche Zahl liegt zwischen 3,4 und 3,5?",
      "options": [
        "3,6",
        "3,3",
        "3,45"
      ],
      "answer": 2,
      "explain": "3,4 = 3,40 und 3,5 = 3,50: 3,45 liegt in der Mitte."
    },
    {
      "type": "num",
      "q": "Wie viel ist 735 : 100?",
      "answer": 7.35,
      "explain": "Durch 100 teilen schiebt das Komma 2 Stellen nach links: 7,35."
    },
    {
      "type": "tf",
      "q": "0,7 ist größer als 0,65.",
      "answer": true,
      "explain": "0,7 = 0,70 und 70 Hundertstel sind mehr als 65 Hundertstel (7 Zehntel gegen 6 Zehntel)."
    },
    {
      "type": "num",
      "q": "Ein Bleistift ist 0,175 m lang. Wie viele Millimeter sind das?",
      "answer": 175,
      "unit": "mm",
      "explain": "1 m = 1000 mm, also 0,175 × 1000 = 175 mm (das Komma wandert 3 Stellen)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia kauft 2 Hefte zu je 1,35 € und einen Stift für 0,95 €. Sie zahlt mit 5 €. Wie viel Wechselgeld bekommt sie?",
      "answer": 1.35,
      "unit": "€",
      "explain": "Hefte: 1,35 + 1,35 = 2,70 €. Mit dem Stift: 2,70 + 0,95 = 3,65 €. Wechselgeld: 5 − 3,65 = 1,35 €."
    },
    {
      "type": "mc",
      "q": "Luca rechnet 6,3 + 4,25 und schreibt 10,28. Welchen Fehler hat er gemacht?",
      "options": [
        "Er hat den ganzen Teil falsch addiert",
        "Das Ergebnis ist richtig",
        "Er hat 3 und 25 wie ganze Zahlen addiert: richtig ist 6,30 + 4,25 = 10,55"
      ],
      "answer": 2,
      "explain": "3 Zehntel und 25 Hundertstel darf man nicht einfach als 28 addieren: 6,3 = 6,30, also 30 + 25 = 55 Hundertstel und die Summe ist 10,55."
    },
    {
      "type": "num",
      "q": "Ein Band ist 3,6 m lang. Du schneidest 3 Stücke zu je 0,45 m ab. Wie viele Meter Band bleiben übrig?",
      "answer": 2.25,
      "unit": "m",
      "explain": "Abgeschnitten: 0,45 + 0,45 + 0,45 = 1,35 m. Übrig: 3,60 − 1,35 = 2,25 m."
    },
    {
      "type": "order",
      "q": "Ordne diese Zahlen von der größten zur kleinsten.",
      "items": [
        "2,5",
        "2,45",
        "2,4",
        "2,399",
        "2,04"
      ],
      "explain": "Vergleiche zuerst die Zehntel: 2,5 > 2,45 > 2,4 (4 Zehntel und 0 Hundertstel) > 2,399 > 2,04."
    },
    {
      "type": "mc",
      "q": "Du startest bei 4,07, multiplizierst mit 10 und teilst das Ergebnis dann durch 100. Welche Zahl erhältst du?",
      "options": [
        "4,07",
        "0,0407",
        "40,7",
        "0,407"
      ],
      "answer": 3,
      "explain": "4,07 × 10 = 40,7; dann 40,7 : 100 = 0,407."
    }
  ]
});
