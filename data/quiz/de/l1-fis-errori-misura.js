QBANK("de", "l1-fis-errori-misura", {
 "f": [
  { "type": "mc", "q": "Wie groß ist die Empfindlichkeit eines Lineals mit Millimetereinteilung?", "options": ["1 mm", "1 cm", "0,1 mm"], "answer": 0, "explain": "Die Empfindlichkeit ist der kleinste Skalenteil: 1 mm." },
  { "type": "tf", "q": "Jede Messung ist mit einem Fehler, also einer Unsicherheit, behaftet.", "answer": true, "explain": "Kein Gerät ist perfekt: Jede Messung hat eine Unsicherheit." },
  { "type": "mc", "q": "Mit welcher Rechenoperation erhält man den Mittelwert mehrerer Messungen?", "options": ["Summe der Messwerte geteilt durch die Anzahl der Messwerte", "Produkt der Messwerte", "Differenz zwischen Maximum und Minimum"], "answer": 0, "explain": "Der Mittelwert ist die Summe geteilt durch N." },
  { "type": "num", "q": "Berechne den Mittelwert von 4 cm, 6 cm und 8 cm.", "answer": 6, "tol": 0, "unit": "cm", "explain": "(4 + 6 + 8)/3 = 18/3 = 6 cm." },
  { "type": "text", "q": "Wie heißt der größte Wert, den ein Gerät messen kann?", "answer": ["Messbereich", "der Messbereich", "Messbereichsendwert"], "explain": "Das ist der Messbereich des Geräts." }
 ],
 "m": [
  { "type": "num", "q": "Messwerte: 5,2 s; 5,6 s; 5,4 s. Berechne den absoluten Fehler als Halbspannweite.", "answer": 0.2, "tol": 0.001, "unit": "s", "explain": "(5,6 − 5,2)/2 = 0,2 s." },
  { "type": "num", "q": "Ein Messwert ist (20 ± 1) cm. Wie groß ist der prozentuale Fehler?", "answer": 5, "tol": 0.01, "unit": "%", "explain": "1/20 = 0,05, also 5 %." },
  { "type": "mc", "q": "Wie viele signifikante Stellen hat 0,0705?", "options": ["2", "3", "4", "5"], "answer": 1, "explain": "Die Nullen am Anfang zählen nicht; 7, 0, 5 sind signifikant: 3 Stellen." },
  { "type": "tf", "q": "Ein zufälliger Fehler wird kleiner, wenn man mehr Messungen macht und den Mittelwert bildet.", "answer": true, "explain": "Zufällige Fehler gehen mal nach oben, mal nach unten und gleichen sich daher teilweise aus." },
  { "type": "mc", "q": "Ein Thermometer zeigt immer 2 Grad mehr als der tatsächliche Wert an. Was für ein Fehler ist das?", "options": ["Systematisch", "Zufällig", "Grob", "Keiner"], "answer": 0, "explain": "Er verschiebt alle Messwerte in dieselbe Richtung." }
 ],
 "d": [
  { "type": "mc", "q": "Ein Rechteck hat die Seiten (4,0 ± 0,1) cm und (2,0 ± 0,1) cm. Wie groß ist der absolute Fehler des Umfangs?", "options": ["0,2 cm", "0,4 cm", "0,6 cm", "0,3 cm"], "answer": 1, "explain": "Der Umfang ist 2(a + b): Die absoluten Fehler addieren sich für jede Seite: 4 × 0,1 = 0,4 cm." },
  { "type": "mc", "q": "Welche der beiden Messungen ist besser: (100 ± 2) m oder (10,0 ± 0,5) cm?", "options": ["Die erste, weil 2 % weniger ist als 5 %", "Die zweite, weil 0,5 < 2", "Sie sind gleich", "Das lässt sich nicht sagen"], "answer": 0, "explain": "Man vergleicht die relativen Fehler: 2/100 = 2 % gegenüber 0,5/10 = 5 %." },
  { "type": "num", "q": "Berechne 2,5 × 3,24 und runde unter Beachtung der signifikanten Stellen. Wie viele signifikante Stellen hat das Ergebnis?", "answer": 2, "tol": 0, "explain": "Der Wert mit den wenigsten Stellen (2,5) hat 2: Das Ergebnis 8,1 hat 2 Stellen." },
  { "type": "tf", "q": "Eine Messung kann sehr präzise, aber wenig richtig sein.", "answer": true, "explain": "Bei einem systematischen Fehler liegen die Werte nah beieinander, aber weit vom wahren Wert entfernt." },
  { "type": "mc", "q": "Wie wird das Ergebnis richtig geschrieben? Mittelwert 21,44 cm, Fehler 0,15 cm.", "options": ["(21,4 ± 0,2) cm", "(21,44 ± 0,15) cm mit 4 Stellen", "(21 ± 0,15) cm", "21,4 cm ohne Fehler"], "answer": 0, "explain": "Der Fehler hat eine signifikante Stelle, und der Wert hat dieselbe Zahl an Dezimalstellen wie der Fehler." }
 ]
});
