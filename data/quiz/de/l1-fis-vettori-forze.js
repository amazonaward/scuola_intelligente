QBANK("de", "l1-fis-vettori-forze", {
 "f": [
  { "type": "mc", "q": "Was ist die SI-Einheit der Kraft?", "options": ["Newton", "Joule", "Kilogramm"], "answer": 0, "explain": "Die Kraft misst man in Newton (N)." },
  { "type": "tf", "q": "Die Masse ist eine vektorielle Größe.", "answer": false, "explain": "Die Masse ist skalar: Sie hat nur einen Wert." },
  { "type": "mc", "q": "Welches Gerät misst Kräfte?", "options": ["Kraftmesser", "Thermometer", "Stoppuhr"], "answer": 0, "explain": "Der Kraftmesser nutzt die Dehnung einer Feder." },
  { "type": "num", "q": "Zwei Kräfte von 3 N und 5 N haben dieselbe Richtung und denselben Richtungssinn. Wie groß ist die Resultierende?", "answer": 8, "tol": 0, "unit": "N", "explain": "Die Beträge werden addiert: 3 + 5 = 8 N." },
  { "type": "mc", "q": "In welche Richtung wirkt die Gewichtskraft?", "options": ["Zum Erdmittelpunkt", "Waagerecht", "Nach oben"], "answer": 0, "explain": "Die Gewichtskraft ist senkrecht und nach unten gerichtet." }
 ],
 "m": [
  { "type": "num", "q": "Berechne die Gewichtskraft eines Körpers von 12 kg auf der Erde (g = 9,8 m/s²).", "answer": 117.6, "tol": 0.1, "unit": "N", "explain": "F_G = 12 × 9,8 = 117,6 N." },
  { "type": "num", "q": "Eine Feder mit D = 80 N/m ist um 0,15 m gedehnt. Wie groß ist die Federkraft?", "answer": 12, "tol": 0.01, "unit": "N", "explain": "F = 80 × 0,15 = 12 N." },
  { "type": "num", "q": "Zwei senkrechte Kräfte von 5 N und 12 N: Berechne die Resultierende.", "answer": 13, "tol": 0, "unit": "N", "explain": "√(25 + 144) = √169 = 13 N." },
  { "type": "tf", "q": "Die Gewichtskraft eines Astronauten ist auf der Erde und auf dem Mond gleich.", "answer": false, "explain": "Auf dem Mond ist g etwa 1/6: Die Gewichtskraft ist etwa ein Sechstel, die Masse bleibt gleich." },
  { "type": "mc", "q": "Wem wirkt die Reibungskraft entgegen?", "options": ["Dem Gleiten zwischen den Oberflächen", "Der Schwerkraft", "Der Dehnung einer Feder", "Der Masse"], "answer": 0, "explain": "Die Reibung wirkt längs der sich berührenden Oberflächen und hemmt die Relativbewegung." }
 ],
 "d": [
  { "type": "num", "q": "Ein Körper von 6 kg an einem Ort mit g = 1,6 m/s²: Wie groß ist seine Gewichtskraft?", "answer": 9.6, "tol": 0.01, "unit": "N", "explain": "F_G = 6 × 1,6 = 9,6 N." },
  { "type": "num", "q": "Ein Block von 10 kg (g = 10 m/s²) liegt ruhig auf einer horizontalen Ebene mit μ_H = 0,4. Wie groß ist die kleinste Kraft, um ihn in Bewegung zu setzen?", "answer": 40, "tol": 0.1, "unit": "N", "explain": "F_N = 100 N; F_H,max = 0,4 × 100 = 40 N." },
  { "type": "mc", "q": "Eine an einer Halterung hängende Feder dehnt sich bei einer Gewichtskraft von 2 N um 4 cm. Um wie viel dehnt sie sich bei 6 N (innerhalb der Elastizitätsgrenze)?", "options": ["8 cm", "10 cm", "12 cm", "16 cm"], "answer": 2, "explain": "D = 2/0,04 = 50 N/m; Δx = 6/50 = 0,12 m = 12 cm." },
  { "type": "mc", "q": "Ein Boot hält mit einer Geschwindigkeit von 12 m/s senkrecht auf das Ufer zu, in einem Fluss, der mit 5 m/s fließt. Wie groß ist der Betrag der Geschwindigkeit relativ zum Ufer?", "options": ["7 m/s", "13 m/s", "17 m/s", "60 m/s"], "answer": 1, "explain": "√(12² + 5²) = √169 = 13 m/s." },
  { "type": "tf", "q": "Wenn die Vektorsumme der Kräfte auf einen Körper null ist, müssen alle Beträge der Kräfte null sein.", "answer": false, "explain": "Gleich große, entgegengesetzte Kräfte zum Beispiel haben die Resultierende null, auch wenn ihre Beträge nicht null sind." }
 ]
});
