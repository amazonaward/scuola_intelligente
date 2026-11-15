QBANK("de", "m3-mat-probabilita", {
 "f": [
  {
   "type": "mc",
   "q": "Wie viele mögliche Ergebnisse gibt es beim Werfen einer Münze?",
   "options": [
    "1",
    "2",
    "6"
   ],
   "answer": 1,
   "explain": "Eine Münze hat zwei Seiten, also gibt es 2 mögliche Ergebnisse: Kopf oder Zahl."
  },
  {
   "type": "num",
   "q": "Was ist der Modus der Datenreihe 2, 3, 3, 5, 3, 7?",
   "answer": 3,
   "explain": "Der Modus ist der am häufigsten vorkommende Wert: Die 3 kommt dreimal vor."
  },
  {
   "type": "tf",
   "q": "Ein sicheres Ereignis hat die Wahrscheinlichkeit 1.",
   "answer": true,
   "explain": "Ein Ereignis, das immer eintritt, hat die Wahrscheinlichkeit 1 (also 100 %)."
  },
  {
   "type": "mc",
   "q": "In einer Klasse mit 24 Schülern sind 12 Mädchen. Wie groß ist die relative Häufigkeit der Mädchen?",
   "options": [
    "1/4",
    "12",
    "1/2"
   ],
   "answer": 2,
   "explain": "Relative Häufigkeit = 12 : 24 = 1/2 (also 0,5 oder 50 %)."
  },
  {
   "type": "text",
   "q": "Wie heißt ein Ereignis, das nie eintreten kann?",
   "answer": [
    "unmöglich",
    "unmögliches ereignis",
    "das unmögliche ereignis",
    "ein unmögliches ereignis"
   ],
   "explain": "Ein Ereignis, das nie eintreten kann, heißt unmögliches Ereignis und hat die Wahrscheinlichkeit 0."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Gina hat in den ersten vier Arbeiten 6, 7, 9 und 8 geschrieben. Welche Note braucht sie in der fünften für einen Durchschnitt von 8?",
   "answer": 10,
   "explain": "Für den Durchschnitt 8 bei 5 Noten braucht man die Summe 8 × 5 = 40. Bisher: 6 + 7 + 9 + 8 = 30. Sie braucht 40 − 30 = 10."
  },
  {
   "type": "num",
   "q": "Ich ziehe eine Karte aus einem Stapel mit 40 Karten, der 4 Asse enthält. Wie groß ist die Wahrscheinlichkeit (in Prozent), ein Ass zu ziehen?",
   "answer": 10,
   "unit": "%",
   "explain": "P = günstige Fälle : mögliche Fälle = 4 : 40 = 1/10 = 10 %."
  },
  {
   "type": "mc",
   "q": "In einer Umfrage wählen 9 von 36 Personen Zitroneneis. Wie groß ist die relative Häufigkeit?",
   "options": [
    "0,9",
    "0,25",
    "0,36"
   ],
   "answer": 1,
   "explain": "Relative Häufigkeit = 9 : 36 = 1/4 = 0,25 (also 25 %)."
  },
  {
   "type": "mc",
   "q": "In der Reihe 4, 4, 5, 8, 9 ist der Wert 5…",
   "options": [
    "la moda",
    "la mediana",
    "la media"
   ],
   "answer": 1,
   "explain": "Die Daten sind bereits geordnet, der mittlere Wert ist 5: Das ist der Median. Der Modus ist 4, der Mittelwert 30 : 5 = 6."
  },
  {
   "type": "tf",
   "q": "In einem Kreisdiagramm stellt ein Sektor von 54° 20 % der Daten dar.",
   "answer": false,
   "explain": "Falsch: 54° von 360° sind 54 : 360 = 0,15, also 15 %. 20 % entsprächen 72°."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Eine Urne enthält 2 rote und 3 blaue Kugeln. Ich ziehe eine Kugel, lege sie zurück und ziehe noch eine. Wie groß ist die Wahrscheinlichkeit (in %), dass beide rot sind?",
   "answer": 16,
   "unit": "%",
   "explain": "Mit Zurücklegen sind die Züge unabhängig: P = 2/5 × 2/5 = 4/25 = 16 %."
  },
  {
   "type": "num",
   "q": "In einer Tüte sind 3 Erdbeer- und 2 Minzbonbons. Ich nehme zwei, ohne sie zurückzulegen. Wie groß ist die Wahrscheinlichkeit (in %), dass beide Erdbeerbonbons sind?",
   "answer": 30,
   "unit": "%",
   "explain": "Erster Zug: 3/5. Danach bleiben 2 Erdbeerbonbons von 4: 2/4. P = 3/5 × 2/4 = 6/20 = 30 %."
  },
  {
   "type": "mc",
   "q": "Fünf Freunde haben bei einem Spiel durchschnittlich 7 Punkte. Ein sechster Freund kommt dazu und erzielt 13 Punkte. Wie groß ist der neue Durchschnitt?",
   "options": [
    "7,5",
    "8",
    "9",
    "10"
   ],
   "answer": 1,
   "explain": "Summe der fünf: 7 × 5 = 35. Mit dem sechsten: 35 + 13 = 48. Neuer Durchschnitt: 48 : 6 = 8."
  },
  {
   "type": "tf",
   "q": "Beim Werfen zweier Würfel ist die Augensumme 7 wahrscheinlicher als die Augensumme 12.",
   "answer": true,
   "explain": "Die Summe 7 entsteht auf 6 von 36 Arten (1+6, 2+5, 3+4 und die vertauschten Paare), die Summe 12 nur auf eine (6+6)."
  },
  {
   "type": "order",
   "q": "Ordne diese Ereignisse vom unwahrscheinlichsten zum wahrscheinlichsten.",
   "items": [
    "Mit einem Würfel fällt eine 7",
    "Mit einem Würfel fällt eine 6",
    "Mit einem Würfel fällt eine gerade Zahl",
    "Mit einem Würfel fällt eine Zahl kleiner als 6",
    "Mit einem Würfel fällt eine Zahl von 1 bis 6"
   ],
   "explain": "Die Wahrscheinlichkeiten sind: 0 (unmöglich), 1/6, 3/6 = 1/2, 5/6 und 1 (sicher)."
  }
 ]
});
