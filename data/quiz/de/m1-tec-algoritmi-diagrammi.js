QBANK("de", "m1-tec-algoritmi-diagrammi", {
 "f": [
  {
   "type": "mc",
   "q": "Was zeigen die Pfeile in einem Flussdiagramm?",
   "options": [
    "Einen Fehler",
    "Eine Entscheidung",
    "Den nächsten Schritt, also den Ablauf des Algorithmus"
   ],
   "answer": 2,
   "explain": "Die Pfeile verbinden die Blöcke und zeigen die Reihenfolge der Schritte."
  },
  {
   "type": "tf",
   "q": "Ein Flussdiagramm hat nur einen Start-Block.",
   "answer": true,
   "explain": "Richtig: Der Algorithmus beginnt an einer einzigen Stelle, kann aber mehr als ein Ende haben."
  },
  {
   "type": "text",
   "q": "Wie heißt derjenige, der einen Algorithmus ausführt, sei es eine Person oder eine Maschine?",
   "answer": [
    "ausführende",
    "der ausführende",
    "ausführender",
    "der ausführer",
    "ausführer",
    "prozessor",
    "der prozessor"
   ],
   "explain": "Der Ausführende tut genau das, was geschrieben steht: Ein Computer ist ein sehr schneller Ausführender, aber ohne Fantasie."
  },
  {
   "type": "mc",
   "q": "Welche dieser Anweisungen ist NICHT mehrdeutig?",
   "options": [
    "Gib ein bisschen Salz dazu",
    "Gib 5 g Salz dazu",
    "Gib Salz nach Geschmack dazu",
    "Gib eine ordentliche Handvoll Salz dazu"
   ],
   "answer": 1,
   "explain": "Nur «5 g» nennt eine genaue Menge, die man nur auf eine Weise verstehen kann."
  },
  {
   "type": "tf",
   "q": "Ein guter Algorithmus muss nur für einen Sonderfall funktionieren, nicht für alle Fälle derselben Art.",
   "answer": false,
   "explain": "Falsch: Er muss allgemein sein, also für alle Fälle derselben Art gelten."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Benutze den euklidischen Algorithmus: Was ist der ggT von 56 und 24?",
   "answer": 8,
   "explain": "56 : 24 ergibt Rest 8; 24 : 8 ergibt Rest 0. Der letzte Rest ungleich 0 ist 8, also ggT(56, 24) = 8."
  },
  {
   "type": "mc",
   "q": "Welcher Scratch-Block entspricht der Auswahl-Struktur (der Raute im Flussdiagramm)?",
   "options": [
    "«wiederhole 10-mal»",
    "«falls … dann … sonst»",
    "die untereinander gesteckten Blöcke"
   ],
   "answer": 1,
   "explain": "Der Block «falls … dann … sonst» wählt zwischen zwei Wegen, wie die Raute."
  },
  {
   "type": "order",
   "q": "Bringe die Schritte des Algorithmus «gerade oder ungerade» in die richtige Reihenfolge.",
   "items": [
    "Start",
    "Lies die Zahl N",
    "Berechne den Rest von N : 2",
    "Ist der Rest 0, schreibe «gerade», sonst schreibe «ungerade»",
    "Ende"
   ],
   "explain": "Zuerst wird die Eingabe gelesen, dann der Rest der Division berechnet, dann das Ergebnis ausgegeben."
  },
  {
   "type": "tf",
   "q": "Jedes Scratch-Programm lässt sich in ein Flussdiagramm umwandeln und umgekehrt.",
   "answer": true,
   "explain": "Richtig: Sequenz, Auswahl und Wiederholung finden sich sowohl in den Blöcken als auch in den Symbolen des Flussdiagramms."
  },
  {
   "type": "num",
   "q": "Ein Algorithmus macht: X ← 5; wiederholt dann 3-mal «X ← X + 2»; schreibt zum Schluss X. Welche Zahl schreibt er?",
   "answer": 11,
   "explain": "Ausgehend von 5: 7, 9, 11. Nach 3 Wiederholungen ist X = 5 + 3 × 2 = 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Welcher dieser Algorithmen enthält eine Endlosschleife?",
   "options": [
    "X ← 10; solange X > 0 wiederhole X ← X − 1",
    "X ← 1; solange X > 0 wiederhole X ← X + 1",
    "Wiederhole 5-mal «schreibe Hallo»",
    "Falls X > 0 schreibe «Hallo»"
   ],
   "answer": 1,
   "explain": "Beim zweiten wächst X immer und bleibt größer als 0: Die Abbruchbedingung wird nie wahr."
  },
  {
   "type": "mc",
   "q": "Ein Teealgorithmus sagt «Solange das Wasser nicht kocht, warte», hat aber den Schritt «Schalte den Wasserkocher ein» vergessen. Welche Eigenschaft wird verletzt?",
   "options": [
    "Allgemeinheit",
    "Eindeutigkeit",
    "Ausführbarkeit",
    "Endlichkeit"
   ],
   "answer": 3,
   "explain": "Ohne eingeschalteten Wasserkocher kocht das Wasser nie: Das Warten endet nicht, und der Algorithmus ist nicht endlich."
  },
  {
   "type": "tf",
   "q": "In einem Flussdiagramm zeichnet man eine Wiederholung mit einem Pfeil, der zu einem früheren Block zurückführt.",
   "answer": true,
   "explain": "Richtig: Der Rückwärtspfeil lässt die Schritte wiederholen, solange die Bedingung es verlangt."
  },
  {
   "type": "text",
   "q": "Wie heißt die Beschreibung eines Algorithmus mit Sätzen, die einer Programmiersprache ähneln, aber ohne strenge Regeln?",
   "answer": [
    "pseudocode",
    "pseudo-code",
    "der pseudocode",
    "pseudo code"
   ],
   "explain": "Pseudocode liegt zwischen natürlicher Sprache und echtem Code."
  },
  {
   "type": "num",
   "q": "Ein Algorithmus macht: S ← 0; N ← 4; solange N > 0 wiederholt er «S ← S + N; N ← N − 1»; schreibt zum Schluss S. Welche Zahl schreibt er?",
   "answer": 10,
   "explain": "S = 4 + 3 + 2 + 1 = 10: In jedem Durchlauf wird N addiert und N sinkt um 1, bis N bei 0 ankommt."
  }
 ]
});
