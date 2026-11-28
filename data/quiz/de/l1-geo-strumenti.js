QBANK("de", "l1-geo-strumenti", {
 "f": [
  { "type": "mc", "q": "Welcher Breitenkreis liegt bei 0° Breite?", "options": ["Wendekreis des Krebses", "Äquator", "Nördlicher Polarkreis"], "answer": 1, "explain": "Der Äquator ist der Breitenkreis 0°, von dem aus die Breite gemessen wird." },
  { "type": "num", "q": "Auf einer Karte im Maßstab 1:10.000: Wie viele Meter sind 5 cm in der Wirklichkeit?", "answer": 500, "tol": 0, "unit": "m", "explain": "5 cm × 10.000 = 50.000 cm = 500 m." },
  { "type": "tf", "q": "Die Meridiane sind Halbkreise, die den Nordpol mit dem Südpol verbinden.", "answer": true, "explain": "Die Meridiane verlaufen durch die Pole und messen die Länge." },
  { "type": "text", "q": "Wie heißt der Teil der Karte, der Symbole und Farben erklärt?", "answer": ["Legende", "die Legende", "legende"], "explain": "Die Legende ist der Bestandteil der Karte, der die Bedeutung von Symbolen und Farben erklärt." },
  { "type": "mc", "q": "Was gibt die geografische Länge an?", "options": ["Den Winkelabstand von Greenwich", "Den Winkelabstand vom Äquator", "Die Höhe"], "answer": 0, "explain": "Die Länge misst den west-östlichen Winkelabstand vom Meridian von Greenwich." }
 ],
 "m": [
  { "type": "mc", "q": "Ein Maßstab 1:2.000.000 ist …", "options": ["ein großer Maßstab", "ein kleiner Maßstab", "ein Maßstab gleich 1:1"], "answer": 1, "explain": "Der Nenner ist sehr groß: Der Maßstab ist klein und stellt ein großes Gebiet mit wenigen Einzelheiten dar." },
  { "type": "num", "q": "Zwei Dörfer liegen 15 km auseinander. Auf einer Karte sind sie 30 cm voneinander entfernt. Wie lautet der Nenner des Maßstabs (1:N)?", "answer": 50000, "tol": 0, "explain": "15 km = 1.500.000 cm; 1.500.000 ÷ 30 = 50.000: Maßstab 1:50.000." },
  { "type": "tf", "q": "Auf einer topografischen Karte zeigen weit auseinanderliegende Höhenlinien einen sanften Hang an.", "answer": true, "explain": "Weit voneinander entfernte Linien bedeuten wenig Höhenänderung auf viel Raum." },
  { "type": "mc", "q": "Wie viel Grad Länge entsprechen etwa 1 Stunde Zeitunterschied?", "options": ["15°", "24°", "90°"], "answer": 0, "explain": "360° ÷ 24 Stunden = 15° pro Stunde." },
  { "type": "mc", "q": "Wozu dienen thematische Karten?", "options": ["Eine einzelne Erscheinung auf einer geografischen Grundlage zu zeigen", "Nur die Straßen zu zeigen", "Die Meerestiefe zu messen"], "answer": 0, "explain": "Eine thematische Karte stellt eine bestimmte Erscheinung dar (Klima, Bevölkerung, Einkommen …)." }
 ],
 "d": [
  { "type": "mc", "q": "Warum muss eine Kartenprojektion immer etwas verzerren?", "options": ["Weil sich eine Kugeloberfläche nicht ohne Verzerrung von Flächen, Formen oder Entfernungen auf eine Ebene ausbreiten lässt", "Weil die Kartografen die Maße falsch angeben", "Weil die Erde zu groß ist"], "answer": 0, "explain": "Es ist eine mathematische Eigenschaft (Gauß): Eine Kugel ist nicht in die Ebene abwickelbar." },
  { "type": "num", "q": "Ein Pfad misst auf einer Karte 1:25.000 4,8 cm. Wie viele Meter ist er lang (in der Horizontalen)?", "answer": 1200, "tol": 0, "unit": "m", "explain": "4,8 × 25.000 = 120.000 cm = 1.200 m." },
  { "type": "tf", "q": "Das GPS kann die Position mit nur einem Satelliten berechnen.", "answer": false, "explain": "Man braucht mindestens vier Satelliten: drei für die Position und einen zur Korrektur der Uhr des Empfängers." },
  { "type": "mc", "q": "Ein „Vektordatensatz“ im GIS ist zum Beispiel …", "options": ["Ein Satellitenfoto", "Das Polygon, das die Grenze einer Gemeinde darstellt", "Ein Pixelgitter mit Höhenwerten"], "answer": 1, "explain": "Vektordaten sind Punkte, Linien und Polygone; Satellitenfotos und Höhenraster sind Rasterdaten." },
  { "type": "mc", "q": "Welche dieser Projektionen erhält die Flächen, verzerrt aber die Formen?", "options": ["Mercator", "Gall-Peters", "Keine von beiden"], "answer": 1, "explain": "Gall-Peters ist flächentreu: Sie bewahrt die Flächenverhältnisse, aber die Formen erscheinen gestreckt." }
 ]
});
