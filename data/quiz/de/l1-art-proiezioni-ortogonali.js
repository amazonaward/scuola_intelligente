QBANK("de", "l1-art-proiezioni-ortogonali", {
 f: [
  { type: "mc", q: "Wie heißt die Ansicht eines Gegenstands von oben im technischen Zeichnen?", options: ["Grundriss", "Aufriss", "Schnitt"], answer: 0, explain: "Die Ansicht von oben ist der Grundriss (Projektion auf die HE)." },
  { type: "tf", q: "Bei der Orthogonalprojektion stehen die Projektionsstrahlen senkrecht zur Ebene.", answer: true, explain: "Das ist genau die Definition der Orthogonalprojektion." },
  { type: "text", q: "Mit welcher Abkürzung aus zwei Buchstaben bezeichnet man die vertikale Projektionsebene?", answer: ["ve", "v.e.", "vertikalebene"], explain: "VE: Vertikalebene, auf die der Aufriss projiziert wird." },
  { type: "mc", q: "Welcher Körper hat einen kreisförmigen Grundriss und einen rechteckigen Aufriss?", options: ["Zylinder", "Würfel", "Pyramide"], answer: 0, explain: "Der Zylinder mit senkrechter Achse." },
  { type: "num", q: "Wie viele Hauptansichten (Grundriss, Aufriss, Seitenriss) braucht man üblicherweise, um einen Körper festzulegen?", answer: 3, tol: 0, explain: "Die drei Hauptansichten, auch wenn oft zwei genügen." }
 ],
 m: [
  { type: "mc", q: "Ein zur HE paralleles Quadrat erscheint im Aufriss als …", options: ["Quadrat", "waagerechte Strecke", "Punkt"], answer: 1, explain: "Eine zur HE parallele Ebene steht senkrecht zur VE: Sie ist auf eine Strecke parallel zur Rissachse verkürzt." },
  { type: "mc", q: "Wie sieht der Grundriss einer geraden Pyramide mit quadratischer Grundfläche aus?", options: ["Ein Dreieck", "Ein Quadrat mit Diagonalen", "Ein Kreis"], answer: 1, explain: "Man sieht die Grundfläche und die vier Seitenkanten als Diagonalen." },
  { type: "num", q: "Ein Quader ist 10 cm breit, 6 cm tief und 4 cm hoch. Wie groß ist der Flächeninhalt des Rechtecks im Grundriss?", answer: 60, tol: 0, unit: "cm²", explain: "Der Grundriss zeigt Breite × Tiefe: 10 × 6 = 60 cm²." },
  { type: "tf", q: "Eine zur VE senkrechte Strecke wird im Aufriss als Punkt projiziert.", answer: true, explain: "Der Projektionsstrahl fällt mit der Strecke zusammen." },
  { type: "text", q: "Welche dünne Linie ordnet die Projektionen desselben Punktes in zwei Ansichten einander zu?", answer: ["ordnungslinie", "die ordnungslinie", "ordner", "hilfslinie", "projektionslinie"], explain: "Die Ordnungslinie, senkrecht zur Rissachse." }
 ],
 d: [
  { type: "mc", q: "Wo wird bei der amerikanischen Methode (Projektionsmethode 3) der Grundriss im Verhältnis zum Aufriss gezeichnet?", options: ["Darunter", "Darüber", "Rechts daneben"], answer: 1, explain: "Bei der amerikanischen Methode liegt der Grundriss über dem Aufriss, anders als bei der europäischen Methode." },
  { type: "mc", q: "Ein gegenüber der Projektionsebene geneigter Kreis wird projiziert als …", options: ["Ein kleinerer Kreis", "Eine Ellipse", "Eine Raute"], answer: 1, explain: "Die Orthogonalprojektion eines geneigten Kreises ist eine Ellipse, deren große Achse dem Durchmesser entspricht." },
  { type: "num", q: "Eine 10 cm lange Strecke ist parallel zur Projektionsebene. Wie lang ist ihre Orthogonalprojektion?", answer: 10, tol: 0, unit: "cm", explain: "Eine zur Ebene parallele Strecke wird in wahrer Größe projiziert." },
  { type: "tf", q: "Das Verfahren der darstellenden Geometrie wurde zunächst geheim gehalten, weil es militärisch nützlich war.", answer: true, explain: "Monge nutzte es für Festungsanlagen; öffentlich wurde es erst nach der Französischen Revolution." },
  { type: "order", q: "Bringe in die richtige Reihenfolge: Konstruktion des Seitenrisses aus Grundriss und Aufriss.", items: ["Ziehe waagerechte Ordnungslinien vom Aufriss", "Übertrage die Tiefen aus dem Grundriss mit einer 45°-Linie", "Verbinde die erhaltenen Punkte", "Zeichne sichtbare und verdeckte Kanten nach"], explain: "Die Höhen stammen aus dem Aufriss, die Tiefen aus dem Grundriss." }
 ]
});
