QBANK("de", "m2-tec-programmazione", {
 "f": [
  {
   "type": "mc",
   "q": "Welche Python-Anweisung zeigt einen Wert auf dem Bildschirm an?",
   "options": [
    "print()",
    "input()",
    "range()"
   ],
   "answer": 0,
   "explain": "print() gibt auf dem Bildschirm aus; input() liest die Eingabe; range() erzeugt eine Zahlenfolge."
  },
  {
   "type": "tf",
   "q": "In Python schreibt man einen Text (String) in Anführungszeichen.",
   "answer": true,
   "explain": "Zum Beispiel nome = \"Sara\": Die Anführungszeichen zeigen, dass es Text ist."
  },
  {
   "type": "mc",
   "q": "Welchen Typ hat der Wert 3.14?",
   "options": [
    "Ganzzahl (int)",
    "Dezimalzahl (float)",
    "Zeichenkette (str)"
   ],
   "answer": 1,
   "explain": "Eine Zahl mit Nachkommastellen ist ein float (mit Punkt geschrieben)."
  },
  {
   "type": "text",
   "q": "Welches Schlüsselwort nutzt du in Python für eine Schleife mit bekannter Anzahl von Wiederholungen?",
   "answer": [
    "for"
   ],
   "explain": "for wiederholt eine feste Anzahl von Malen, meist mit range()."
  },
  {
   "type": "tf",
   "q": "Ein Variablenname darf Leerzeichen enthalten, zum Beispiel «max punkte».",
   "answer": false,
   "explain": "Falsch: Keine Leerzeichen in Namen; man schreibt max_punkte."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Wie viele Zahlen gibt aus: for i in range(2, 6): print(i)?",
   "answer": 4,
   "tol": 0,
   "explain": "range(2, 6) liefert 2, 3, 4, 5: Es hört vor 6 auf, also 4 Zahlen."
  },
  {
   "type": "mc",
   "q": "Welche Zeile gibt das Wort Ciao richtig auf dem Bildschirm aus?",
   "options": [
    "print(Ciao)",
    "print(\"Ciao\")",
    "print: Ciao"
   ],
   "answer": 1,
   "explain": "Ein Text steht in Anführungszeichen in den Klammern von print()."
  },
  {
   "type": "num",
   "q": "c = 10; while c > 4: c = c - 3. Wie oft läuft die Schleife?",
   "answer": 2,
   "tol": 0,
   "explain": "c geht 10 → 7 (1. Durchlauf) → 4 (2. Durchlauf); 4 > 4 ist falsch, die Schleife endet: 2 Durchläufe."
  },
  {
   "type": "text",
   "q": "Wie nennt man einen Fehler in einem Programm?",
   "answer": [
    "bug",
    "ein bug",
    "der bug"
   ],
   "explain": "Seit 1947 heißen Fehler «Bugs» (Käfer); sie zu beheben nennt man «Debuggen»."
  },
  {
   "type": "mc",
   "q": "Welcher dieser Variablennamen ist in Python gültig?",
   "options": [
    "2punti",
    "punti_max",
    "punti max"
   ],
   "answer": 1,
   "explain": "Ein Name darf nicht mit einer Ziffer beginnen und keine Leerzeichen enthalten: punti_max ist richtig."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "s = 0; for n in range(1, 6): s = s + n * n. Wie groß ist s am Ende?",
   "answer": 55,
   "tol": 0,
   "explain": "Die Quadrate werden addiert: 1 + 4 + 9 + 16 + 25 = 55."
  },
  {
   "type": "mc",
   "q": "Ein Programm soll 5 vom Nutzer eingegebene Zahlen addieren, zeigt am Ende aber immer nur die letzte Zahl. Was ist der wahrscheinlichste Fehler?",
   "options": [
    "somma = 0 steht in der Schleife und setzt bei jedem Durchlauf zurück",
    "Es wurde for statt while benutzt",
    "print steht außerhalb der Schleife"
   ],
   "answer": 0,
   "explain": "Steht somma = 0 in der Schleife, wird der Zähler bei jedem Durchlauf zurückgesetzt und nur der letzte Wert bleibt."
  },
  {
   "type": "tf",
   "q": "x = 5; y = x; x = x + 1. Am Ende ist y noch immer 5.",
   "answer": true,
   "explain": "y hat den Wert 5 vor der Änderung kopiert: Eine spätere Änderung von x ändert y nicht."
  },
  {
   "type": "num",
   "q": "a = 2; for i in range(4): a = a * 2 - 1. Wie groß ist a am Ende?",
   "answer": 17,
   "tol": 0,
   "explain": "Schritt für Schritt: 2 → 3 → 5 → 9 → 17."
  },
  {
   "type": "order",
   "q": "Bring die Zeilen eines Countdowns 3, 2, 1, Via! in die richtige Reihenfolge (die zwei Zeilen in der Schleife sind eingerückt).",
   "items": [
    "n = 3",
    "while n > 0:",
    "print(n)",
    "n = n - 1",
    "print(\"Via!\")"
   ],
   "explain": "Man beginnt mit n = 3, die while-Schleife wiederholt print und das Verkleinern, danach wird außerhalb «Via!» ausgegeben."
  }
 ]
});
