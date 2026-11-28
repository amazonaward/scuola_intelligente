QBANK("de", "l1-mat-statistica", {
 "f": [
  { "type": "mc", "q": "Welches Merkmal ist qualitativ?", "options": ["Die Lieblingsfarbe", "Die Körpergröße", "Die Anzahl der Geschwister"], "answer": 0, "explain": "Die Ausprägungen sind Namen, keine Zahlen." },
  { "type": "num", "q": "Wie groß ist der Mittelwert von 2, 4 und 6?", "answer": 4, "explain": "(2 + 4 + 6)/3 = 4." },
  { "type": "tf", "q": "Der Modus ist der Wert, der am häufigsten vorkommt.", "answer": true, "explain": "Er ist die Ausprägung mit der größten Häufigkeit." },
  { "type": "num", "q": "Wie groß ist der Median von 1, 5, 9?", "answer": 5, "explain": "Der mittlere Wert der geordneten Daten ist 5." },
  { "type": "num", "q": "In einer Klasse mit 20 Schülern gehen 8 zu Fuß zur Schule. Wie groß ist die prozentuale Häufigkeit?", "answer": 40, "unit": "%", "explain": "8/20 = 0,40 → 40 %." }
 ],
 "m": [
  { "type": "num", "q": "Wie groß ist der Mittelwert von 5, 7, 8, 10?", "answer": 7.5, "tol": 0.001, "explain": "30/4 = 7,5." },
  { "type": "num", "q": "Wie groß ist der Median von 2, 3, 7, 8?", "answer": 5, "explain": "n gerade: (3 + 7)/2 = 5." },
  { "type": "mc", "q": "Was ist der Modus von 5, 6, 6, 7, 8, 8, 8?", "options": ["8", "6", "7"], "answer": 0, "explain": "Die 8 kommt dreimal vor." },
  { "type": "tf", "q": "Die Summe aller relativen Häufigkeiten ist immer 1.", "answer": true, "explain": "Die absoluten Häufigkeiten ergeben zusammen n, also die relativen n/n = 1." },
  { "type": "num", "q": "Wie groß ist die Spannweite von 11, 4, 8, 15, 6?", "answer": 11, "explain": "15 − 4 = 11." }
 ],
 "d": [
  { "type": "num", "q": "Berechne die Varianz von 2, 4, 4, 4, 5, 5, 7, 9.", "answer": 4, "explain": "Mittelwert 5; Summe der quadrierten Abweichungen 32; 32/8 = 4." },
  { "type": "mc", "q": "Wenn du zu einer Datenmenge einen Wert hinzufügst, der viel größer ist als alle anderen …", "options": ["steigt der Mittelwert stark, der Median wenig", "steigt der Median stark, der Mittelwert wenig", "ändern sich Mittelwert und Median nicht"], "answer": 0, "explain": "Der Mittelwert reagiert auf jeden Wert; der Median hängt nur von der mittleren Position ab." },
  { "type": "num", "q": "Der Mittelwert von 5 Zahlen ist 60. Vier davon sind 52, 58, 61 und 64. Wie groß ist die fünfte?", "answer": 65, "explain": "Gesamtsumme 300; 300 − (52 + 58 + 61 + 64) = 300 − 235 = 65." },
  { "type": "tf", "q": "Die Summe der Abweichungen der Daten von ihrem arithmetischen Mittel ist immer null.", "answer": true, "explain": "Positive und negative Abweichungen gleichen sich genau aus." },
  { "type": "num", "q": "Eine Verteilung hat die Varianz 25. Wie groß ist die Standardabweichung?", "answer": 5, "explain": "σ = √25 = 5." }
 ]
});
