QBANK("de", "m1-geo-strumenti", {
 "f": [
  {
   "type": "mc",
   "q": "Welches Gerät hat eine Magnetnadel, die nach Norden zeigt?",
   "options": [
    "Thermometer",
    "Kompass",
    "Höhenmesser"
   ],
   "answer": 1,
   "explain": "Der Kompass hat eine Magnetnadel, die zum magnetischen Nordpol zeigt, nahe dem geografischen Nordpol."
  },
  {
   "type": "tf",
   "q": "Mittags steht die Sonne in Italien im Süden.",
   "answer": true,
   "explain": "Die Sonne geht im Osten auf, im Westen unter und steht mittags in Italien im Süden."
  },
  {
   "type": "mc",
   "q": "Welcher Stern zeigt nachts den Norden an?",
   "options": [
    "Sirius",
    "Antares",
    "Polarstern"
   ],
   "answer": 2,
   "explain": "Der Polarstern steht fast über dem Nordpol und zeigt den Norden an."
  },
  {
   "type": "text",
   "q": "Wie heißt eine Karte, die nur ein Thema zeigt, etwa das Klima oder die gesprochenen Sprachen?",
   "answer": [
    "thematische karte",
    "thematisch",
    "thematische",
    "die thematische karte",
    "themenkarte"
   ],
   "explain": "Thematische Karten behandeln ein einziges Thema: Klima, Bevölkerung, Sprachen, Tourismus, Erdbebenrisiko …"
  },
  {
   "type": "tf",
   "q": "Ein GIS (Geoinformationssystem) legt viele Datenschichten übereinander auf eine digitale Karte.",
   "answer": true,
   "explain": "Straßen, Flüsse, Bevölkerung, Gebäude, Erdrutschrisiko: Jede Datenart ist eine Schicht, die man ein- und ausschalten kann."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Auf einer Karte stellen 4 cm in Wirklichkeit 2 km dar. Wie groß ist der Nenner N des Maßstabs 1 : N?",
   "answer": 50000,
   "tol": 0,
   "explain": "2 km = 200.000 cm. 200.000 : 4 = 50.000, der Maßstab ist also 1 : 50.000."
  },
  {
   "type": "mc",
   "q": "Du willst die Einwohnerzahlen von fünf Städten vergleichen. Welches Diagramm passt am besten?",
   "options": [
    "Kreisdiagramm",
    "Liniendiagramm",
    "Säulendiagramm"
   ],
   "answer": 2,
   "explain": "Das Säulendiagramm vergleicht verschiedene Mengen mit Säulen: Die höchste zeigt die bevölkerungsreichste Stadt."
  },
  {
   "type": "tf",
   "q": "Eine Karte im Maßstab 1 : 10.000.000 eignet sich, um die Wege eines kleinen Parks zu sehen.",
   "answer": false,
   "explain": "Das ist ein sehr kleiner Maßstab: Er zeigt ein riesiges Gebiet mit sehr wenigen Einzelheiten. Für einen Park braucht man einen großen Maßstab, etwa 1 : 5.000."
  },
  {
   "type": "text",
   "q": "Wie heißt die Karte, die die Grenzen von Staaten und Regionen zeigt, jede in einer anderen Farbe?",
   "answer": [
    "politische karte",
    "politisch",
    "politische",
    "die politische karte"
   ],
   "explain": "Die politische Karte zeigt Grenzen, Staaten, Regionen und Städte; die physische Karte zeigt Relief, Ebenen und Gewässer."
  },
  {
   "type": "order",
   "q": "Bringe die Schritte in die richtige Reihenfolge, um die wirkliche Entfernung zwischen zwei Orten auf einer maßstabsgetreuen Karte zu finden.",
   "items": [
    "Miss die cm auf der Karte mit dem Lineal",
    "Multipliziere mit dem Nenner des Maßstabs",
    "Rechne die cm in km um"
   ],
   "explain": "Zuerst misst man auf der Karte, dann multipliziert man mit dem Nenner und rechnet schließlich in km um."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Auf einer Karte im Maßstab 1 : 25.000 misst eine Strecke 18 cm. Wie viele Stunden braucht man dafür bei 3 km/h?",
   "answer": 1.5,
   "tol": 0,
   "unit": "Stunden",
   "explain": "18 × 25.000 = 450.000 cm = 4.500 m = 4,5 km. Zeit = 4,5 : 3 = 1,5 Stunden."
  },
  {
   "type": "mc",
   "q": "Ein Mitschüler sagt: „Auf der Mercator-Karte ist Grönland so groß wie Afrika, also haben sie dieselbe Fläche.“ Was ist der Fehler?",
   "options": [
    "Kein Fehler: Mercator erhält die Flächen",
    "Mercator vergrößert polnahe Gebiete: In Wirklichkeit ist Afrika etwa 14-mal größer",
    "Grönland ist in Wirklichkeit größer als Afrika"
   ],
   "answer": 1,
   "explain": "Die Mercator-Projektion erhält Winkel, verzerrt aber Flächen: Afrika hat 30 Mio. km², Grönland 2,2 Mio."
  },
  {
   "type": "tf",
   "q": "Um die Flächen der Kontinente ohne Verzerrung zu vergleichen, ist ein Globus besser als eine Mercator-Karte.",
   "answer": true,
   "explain": "Der Globus ist die einzige Darstellung ohne Verzerrung; Mercator vergrößert polnahe Gebiete stark."
  },
  {
   "type": "mc",
   "q": "Auf einer topografischen Karte führen zwei Wege von derselben Höhe zum selben Gipfel. Weg A kreuzt sehr dicht liegende Höhenlinien, Weg B weit auseinanderliegende. Welche Aussage stimmt?",
   "options": [
    "Beide Wege haben dasselbe Gefälle, weil sie auf denselben Höhen beginnen und enden",
    "A ist sanfter und länger, B steiler und kürzer",
    "A ist steiler und kürzer, B sanfter und länger"
   ],
   "answer": 2,
   "explain": "Dicht liegende Linien = steiler Hang (man steigt auf kurzer Strecke viel); weit auseinanderliegende = sanfter Hang, der einen längeren Weg braucht."
  },
  {
   "type": "mc",
   "q": "Welche Zuordnung Werkzeug–Verwendung ist FALSCH?",
   "options": [
    "Kreisdiagramm – zeigen, wie sich ein Wert von Jahr zu Jahr ändert",
    "Kartogramm – die Bevölkerungsdichte der Regionen zeigen",
    "Klimadiagramm – Temperaturen und Niederschläge eines Ortes vereinen"
   ],
   "answer": 0,
   "explain": "Das Kreisdiagramm zeigt die Teile eines Ganzen in Prozent; für die Entwicklung über die Zeit nimmt man ein Liniendiagramm."
  }
 ]
});
