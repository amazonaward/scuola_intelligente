QBANK("de", "l1-art-costruzioni-geometriche", {
 f: [
  { type: "mc", q: "Welche Werkzeuge lässt die klassische euklidische Geometrie für Konstruktionen zu?", options: ["Lineal ohne Skala und Zirkel", "Lineal mit Skala und Winkelmesser", "Nur die Zeichendreiecke"], answer: 0, explain: "Euklid lässt nur Gerade (Lineal) und Kreis (Zirkel) zu." },
  { type: "num", q: "Wie viele Grad misst die Winkelhalbierende eines Winkels von 60° zu jedem Schenkel?", answer: 30, tol: 0, unit: "°", explain: "60° : 2 = 30°." },
  { type: "tf", q: "Zwei Geraden, die senkrecht auf derselben Geraden stehen, sind zueinander parallel.", answer: true, explain: "Sie bilden gleiche Stufenwinkel (90°), sind also parallel." },
  { type: "mc", q: "Wie viele Seiten hat ein Sechseck?", options: ["5", "6", "8"], answer: 1, explain: "Hexa- bedeutet sechs." },
  { type: "text", q: "Wie heißt die Gerade, die einen Kreis in nur einem Punkt berührt?", answer: ["tangente", "die tangente"], explain: "Es ist die Tangente, senkrecht zum Radius im Berührpunkt." }
 ],
 m: [
  { type: "mc", q: "Die Seite eines einem Kreis mit Radius r einbeschriebenen Quadrats beträgt…", options: ["r", "r√2", "2r"], answer: 1, explain: "Die Diagonale des Quadrats ist der Durchmesser 2r, also ist die Seite 2r/√2 = r√2." },
  { type: "num", q: "Ein regelmäßiges Sechseck ist einem Kreis mit Radius 7 cm einbeschrieben. Wie groß ist der Umfang?", answer: 42, tol: 0, unit: "cm", explain: "Die Seite ist gleich dem Radius: 6 × 7 = 42 cm." },
  { type: "mc", q: "Welche Figur ist ACBD bei der Konstruktion der Mittelsenkrechten mit AC = BC = AD = BD?", options: ["Eine Raute", "Ein Trapez", "Ein Rechteck, kein Quadrat"], answer: 0, explain: "Vier gleiche Seiten: Es ist eine Raute mit senkrechten Diagonalen." },
  { type: "tf", q: "Mit Lineal und Zirkel kann man das regelmäßige 17-Eck konstruieren.", answer: true, explain: "Gauß bewies es 1796: 17 ist eine Fermatsche Primzahl." },
  { type: "order", q: "Bring die Schritte zum Teilen von AB in 3 gleiche Teile in die richtige Reihenfolge.", items: ["Von A einen Strahl zeichnen", "3 gleiche Strecken auf dem Strahl abtragen", "Den letzten Punkt mit B verbinden", "Die Parallelen durch die Punkte 1 und 2 ziehen"], explain: "Es ist die Konstruktion nach dem Strahlensatz." }
 ],
 d: [
  { type: "mc", q: "Welches der drei Probleme lässt sich mit Lineal und Zirkel NICHT lösen?", options: ["Einen Winkel halbieren", "Einen beliebigen Winkel dreiteilen", "Die Mittelsenkrechte einer Strecke konstruieren"], answer: 1, explain: "Die Dreiteilung eines beliebigen Winkels ist mit Lineal und Zirkel allein unmöglich." },
  { type: "num", q: "Ein Übergangsbogen hat den Radius 5 cm und verbindet zwei senkrechte Geraden. Wie weit ist der Mittelpunkt des Bogens vom Scheitel des Winkels entfernt? (auf ganze Zahl gerundet: 5√2)", answer: 7, tol: 0.1, unit: "cm", explain: "Der Mittelpunkt ist 5 cm von jeder Geraden entfernt: Er hat vom Scheitel den Abstand 5√2 ≈ 7,07 cm." },
  { type: "tf", q: "Bei einer äußeren Ausrundung zwischen einer Geraden und einem Kreis mit Radius R hat der Mittelpunkt des Bogens mit Radius r vom Mittelpunkt des Kreises den Abstand R + r.", answer: true, explain: "Zwei sich von außen berührende Kreise haben Mittelpunkte im Abstand R + r." },
  { type: "mc", q: "Das Verhältnis von Diagonale zu Seite des regelmäßigen Fünfecks ist…", options: ["√2", "φ = (1+√5)/2", "√3"], answer: 1, explain: "Es ist die goldene Zahl, etwa 1,618." },
  { type: "text", q: "Wie heißt die Menge aller Punkte, die dieselbe geometrische Eigenschaft erfüllen (zum Beispiel die Punkte, die von zwei gegebenen Punkten gleich weit entfernt sind)?", answer: ["geometrischer ort", "der geometrische ort", "ortslinie", "ort", "luogo geometrico"], explain: "Es ist ein geometrischer Ort: Die Mittelsenkrechte einer Strecke ist der Ort der Punkte, die von den Endpunkten gleich weit entfernt sind." }
 ]
});
