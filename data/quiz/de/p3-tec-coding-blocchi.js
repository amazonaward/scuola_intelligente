QBANK("de", "p3-tec-coding-blocchi", {
  "f": [
    {
      "type": "mc",
      "q": "Welche Farbe haben die Bewegungs-Blöcke in Scratch (wie «gehe 10er-Schritt»)?",
      "options": [
        "Blau",
        "Gelb",
        "Lila"
      ],
      "answer": 0,
      "explain": "Bewegungs-Blöcke sind blau. Ereignisse sind gelb, Aussehen lila, Steuerung orange."
    },
    {
      "type": "tf",
      "q": "Der Computer macht genau das, was im Programm steht.",
      "answer": true,
      "explain": "Richtig: Der Computer führt genau aus, aber er hat keine Fantasie."
    },
    {
      "type": "mc",
      "q": "Was macht der Block «warte 1 Sekunde»?",
      "options": [
        "Er startet das Programm",
        "Er dreht die Figur",
        "Er macht eine Pause"
      ],
      "answer": 2,
      "explain": "Warte macht eine Pause für eine bestimmte Zeit."
    },
    {
      "type": "text",
      "q": "Wie heißt das Programm mit bunten Blöcken vom MIT, mit der orangen Katze?",
      "answer": [
        "scratch"
      ],
      "explain": "Es heißt Scratch und entstand am MIT in Boston."
    },
    {
      "type": "mc",
      "q": "1947 fanden Ingenieure im Computer Mark II den ersten echten «Bug». Welches Tier war es?",
      "options": [
        "Eine Ameise",
        "Eine Motte",
        "Eine Spinne"
      ],
      "answer": 1,
      "explain": "Eine Motte steckte zwischen den Kontakten fest. «Bug» heißt auf Englisch Insekt."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Ein Programm sagt: «wiederhole 6-mal: wechsle Kostüm, warte 0,5 Sekunden». Wie viele Sekunden Wartezeit sind das insgesamt?",
      "answer": 3,
      "unit": "Sekunden",
      "explain": "6 Durchgänge × 0,5 Sekunden = 3 Sekunden."
    },
    {
      "type": "mc",
      "q": "Der Roboter soll 2 Felder vorwärts gehen, nach links abbiegen und 4 Felder vorwärts gehen. Welches Programm ist richtig?",
      "options": [
        "wiederhole 4-mal [vorwärts]; links abbiegen; wiederhole 2-mal [vorwärts]",
        "wiederhole 2-mal [vorwärts]; links abbiegen; wiederhole 4-mal [vorwärts]",
        "wiederhole 6-mal [vorwärts]; links abbiegen"
      ],
      "answer": 1,
      "explain": "Zuerst 2 Schritte vorwärts, dann die Linkskurve, dann 4 Schritte vorwärts. Die Reihenfolge zählt!"
    },
    {
      "type": "tf",
      "q": "Im Block «wiederhole 4-mal» werden die Anweisungen darin nur einmal ausgeführt.",
      "answer": false,
      "explain": "Falsch: Die Anweisungen in der Schleife werden 4-mal wiederholt."
    },
    {
      "type": "order",
      "q": "Ein Rezept ist ein Algorithmus. Bringe die Schritte für den Kuchen in die richtige Reihenfolge.",
      "items": [
        "Eier aufschlagen",
        "Zucker hinzufügen",
        "Umrühren",
        "In den Ofen schieben"
      ],
      "explain": "Backst du vor dem Umrühren, wird es ein Desaster: In einer Abfolge zählt die Reihenfolge."
    },
    {
      "type": "text",
      "q": "Wie nennt man das Suchen und Beheben eines Fehlers in einem Programm? (De…)",
      "answer": [
        "debuggen",
        "debugging",
        "debug",
        "fehlersuche"
      ],
      "explain": "Das nennt man Debuggen: Man testet das Programm, sucht den Fehler und behebt ihn."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Eine Schleife sagt: «wiederhole 5-mal: lege 3 Würfel, nimm 1 Würfel weg». Wie viele Würfel bleiben am Ende?",
      "answer": 10,
      "unit": "Würfel",
      "explain": "Bei jedem Durchgang kommen 3 − 1 = 2 Würfel dazu. Nach 5 Durchgängen: 5 × 2 = 10 Würfel."
    },
    {
      "type": "mc",
      "q": "Marta will ein Quadrat zeichnen und schreibt: «wiederhole 3-mal: gehe 10er-Schritte, drehe um 90°». Was zeichnet sie?",
      "options": [
        "Ein vollständiges Quadrat",
        "Drei Seiten eines Quadrats: die Figur bleibt offen",
        "Ein Dreieck"
      ],
      "answer": 1,
      "explain": "Ein Quadrat hat 4 Seiten, man braucht also 4 Wiederholungen. Mit 3 Durchgängen ist die Zeichnung unfertig. Das ist ein Bug, den man korrigieren muss!"
    },
    {
      "type": "mc",
      "q": "Welche dieser Tätigkeiten ist KEINE Schleife, sondern eine Abfolge verschiedener Schritte?",
      "options": [
        "20-mal Seil springen",
        "Der Refrain eines Liedes",
        "Den Computer einschalten und Scratch öffnen"
      ],
      "answer": 2,
      "explain": "Den Computer einschalten und Scratch öffnen sind zwei verschiedene Schritte nacheinander. Die anderen wiederholen dasselbe."
    },
    {
      "type": "tf",
      "q": "Das Programm «wiederhole 4-mal: 1 Feld vorwärts» lässt den Roboter dieselbe Bewegung machen wie 4 Blöcke «1 Feld vorwärts» hintereinander.",
      "answer": true,
      "explain": "Richtig: Das Ergebnis ist dasselbe, aber mit der Schleife ist das Programm kürzer und leichter zu korrigieren."
    },
    {
      "type": "order",
      "q": "Bringe die Schritte zum Beheben eines Bugs in die richtige Reihenfolge.",
      "items": [
        "Führe das Programm aus und sieh dir das Ergebnis an",
        "Finde die Stelle, an der das Ergebnis anders ist als gewollt",
        "Korrigiere die falsche Anweisung",
        "Teste das Programm noch einmal"
      ],
      "explain": "Man testet, sucht die Fehlerstelle, korrigiert und testet noch einmal: So lernt man programmieren."
    }
  ]
});
