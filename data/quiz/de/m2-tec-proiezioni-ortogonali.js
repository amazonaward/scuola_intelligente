QBANK("de", "m2-tec-proiezioni-ortogonali", {
 "f": [
  {
   "type": "mc",
   "q": "Welche Ebene nimmt die Draufsicht auf?",
   "options": [
    "Die waagrechte Ebene (Grundrissebene)",
    "Die senkrechte Ebene (Aufrissebene)",
    "Die seitliche Ebene (Seitenrissebene)"
   ],
   "answer": 0,
   "explain": "Die Draufsicht (Grundriss) wird auf die waagrechte Ebene projiziert."
  },
  {
   "type": "tf",
   "q": "Bei orthogonalen Projektionen gibt es keine Perspektive: Gleich lange Kanten bleiben gleich lang, auch wenn sie weit weg sind.",
   "answer": true,
   "explain": "Parallele Strahlen verzerren nicht: Flächen parallel zur Ebene erscheinen in wahrer Form und Größe."
  },
  {
   "type": "mc",
   "q": "Wie nennt man die Vorderansicht noch?",
   "options": [
    "Grundriss",
    "Aufriss",
    "Schnitt"
   ],
   "answer": 1,
   "explain": "Die Vorderansicht heißt auch Aufriss."
  },
  {
   "type": "num",
   "q": "Wie viele Ansichten (von vorn, von oben, von der Seite) benutzt man meist, um einen Gegenstand zu beschreiben?",
   "answer": 3,
   "tol": 0,
   "explain": "Man benutzt drei Ansichten, eine für jede Ebene."
  },
  {
   "type": "text",
   "q": "Wie heißt das System aus drei senkrechten Ebenen, die eine Ecke wie in einem Zimmer bilden?",
   "answer": [
    "dreitafelprojektion",
    "die dreitafelprojektion",
    "dreikant",
    "triedron",
    "dreitafelsystem"
   ],
   "explain": "Die Dreitafelprojektion besteht aus senkrechter, waagrechter und seitlicher Ebene."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Ein Ziegel ist 12 cm lang, 7 cm tief und 5 cm hoch. Wie groß ist der Flächeninhalt seiner Seitenansicht in cm²?",
   "answer": 35,
   "tol": 0,
   "unit": "cm²",
   "explain": "Die Seitenansicht ist ein Rechteck Tiefe × Höhe = 7 × 5 = 35 cm²."
  },
  {
   "type": "mc",
   "q": "Ein Kegel steht auf seiner Grundfläche: Wie sehen Vorderansicht, Seitenansicht und Draufsicht aus?",
   "options": [
    "Dreieck, Dreieck, Kreis",
    "Rechteck, Rechteck, Kreis",
    "Kreis, Kreis, Dreieck"
   ],
   "answer": 0,
   "explain": "Von vorn und von der Seite sieht ein Kegel wie ein gleichschenkliges Dreieck aus, von oben wie ein Kreis."
  },
  {
   "type": "mc",
   "q": "In welchem Paar von Ansichten erscheint die Höhe des Gegenstands?",
   "options": [
    "Vorder- und Seitenansicht",
    "Vorder- und Draufsicht",
    "Drauf- und Seitenansicht"
   ],
   "answer": 0,
   "explain": "Die Höhe sieht man in der Vorderansicht und in der Seitenansicht; in der Draufsicht nicht."
  },
  {
   "type": "num",
   "q": "Ein Würfel hat 4 cm Kantenlänge. Wie viele cm beträgt der Umfang seiner Draufsicht?",
   "answer": 16,
   "tol": 0,
   "unit": "cm",
   "explain": "Die Draufsicht ist ein Quadrat mit 4 cm Seitenlänge: 4 × 4 = 16 cm."
  },
  {
   "type": "text",
   "q": "Wie heißt die Ansicht eines Gegenstands von oben?",
   "answer": [
    "grundriss",
    "der grundriss",
    "draufsicht",
    "die draufsicht"
   ],
   "explain": "Die Ansicht von oben heißt Grundriss und wird unter dem Aufriss gezeichnet."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Ein Quader hat im Aufriss ein Rechteck von 9 × 4 cm (Breite × Höhe) und im Grundriss ein Rechteck von 9 × 6 cm (Breite × Tiefe). Wie groß ist sein Volumen in cm³?",
   "answer": 216,
   "tol": 0,
   "unit": "cm³",
   "explain": "Maße: Breite 9, Höhe 4, Tiefe 6. Volumen = 9 × 4 × 6 = 216 cm³."
  },
  {
   "type": "mc",
   "q": "Ein Schüler soll die Ansichten eines Ziegels 8 × 5 × 3 cm (Breite × Tiefe × Höhe) zeichnen. Unter den Aufriss zeichnet er ein Rechteck 8 × 3 cm. Was ist falsch?",
   "options": [
    "Der Grundriss muss 8 × 5 sein (Breite und Tiefe)",
    "Der Grundriss muss über dem Aufriss stehen",
    "Der Grundriss muss ein Quadrat sein"
   ],
   "answer": 0,
   "explain": "Der Grundriss zeigt Breite und Tiefe: Er muss ein Rechteck 8 × 5 cm sein."
  },
  {
   "type": "tf",
   "q": "Wenn zwei Gegenstände dieselbe Vorderansicht und dieselbe Seitenansicht haben, haben sie zwangsläufig auch dieselbe Draufsicht.",
   "answer": false,
   "explain": "Falsch: Ein Zylinder und ein Quader können zwei gleiche Rechtecke haben, aber der Grundriss (Kreis oder Rechteck) unterscheidet sie."
  },
  {
   "type": "mc",
   "q": "Ein Maschinenteil kommt «spiegelverkehrt» an und lässt sich nicht montieren. Welche Ursache ist am wahrscheinlichsten?",
   "options": [
    "Die Zeichnung wurde mit der falschen Methode gelesen (europäisch statt amerikanisch oder umgekehrt)",
    "Verdeckte Kanten wurden gestrichelt gezeichnet",
    "Der Zeichnungsmaßstab war 1:1"
   ],
   "answer": 0,
   "explain": "Die europäische und die amerikanische Methode ordnen die Ansichten verschieden an: Mit der falschen Methode gelesen, wird das Teil gespiegelt."
  },
  {
   "type": "num",
   "q": "Ein Quader ist 10 cm breit, 6 cm tief und 4 cm hoch. Welches Maß (in cm) wird mit der 45°-Linie vom Grundriss in die Seitenansicht übertragen?",
   "answer": 6,
   "tol": 0,
   "unit": "cm",
   "explain": "Die 45°-Linie überträgt die Tiefe, die im Grundriss und in der Seitenansicht vorkommt: 6 cm."
  }
 ]
});
