QBANK("de", "lib-computer", {
  "f": [
    {
      "type": "mc",
      "q": "Wo bleiben Fotos und Spiele gespeichert, auch wenn der Computer ausgeschaltet ist?",
      "options": [
        "Im Arbeitsspeicher (RAM)",
        "Im Lüfter",
        "In der SSD"
      ],
      "answer": 2,
      "explain": "Die SSD ist das Lager, das nicht vergisst: Die Daten bleiben auch ohne Strom."
    },
    {
      "type": "tf",
      "q": "Die Tastatur ist ein Eingabegerät.",
      "answer": true,
      "explain": "Sie schickt dem Computer für jede gedrückte Taste einen Code: Sie bringt deine Befehle in den Computer."
    },
    {
      "type": "text",
      "q": "Wie heißen die Millionen winziger Punkte, aus denen das Bild auf dem Bildschirm besteht?",
      "answer": [
        "pixel",
        "die pixel",
        "pixeln"
      ],
      "explain": "Der Bildschirm besteht aus Millionen farbiger Punkte, den Pixeln."
    },
    {
      "type": "mc",
      "q": "Welches Teil berechnet die Farbe der Pixel und zeichnet die Bilder?",
      "options": [
        "Das Mainboard",
        "Die Grafikkarte",
        "Die Maus"
      ],
      "answer": 1,
      "explain": "Die Grafikkarte (GPU) berechnet die Farbe jedes Pixels und schickt das Bild an den Monitor."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Eine Grafikkarte erzeugt 60 Bilder pro Sekunde. Wie viele Bilder erzeugt sie in 5 Sekunden Spielzeit?",
      "answer": 300,
      "unit": "Bilder",
      "explain": "60 × 5 = 300 Bilder."
    },
    {
      "type": "mc",
      "q": "Wenn du ein Spiel öffnest, werden seine Daten von der SSD in den Arbeitsspeicher kopiert. Warum?",
      "options": [
        "Weil der Arbeitsspeicher viel schneller ist und der Prozessor die Daten sofort holen kann",
        "Weil sich die SSD leert, wenn du ein Spiel öffnest",
        "Weil der Arbeitsspeicher Daten für immer behält",
        "Weil der Arbeitsspeicher größer als die SSD ist"
      ],
      "answer": 0,
      "explain": "Der Arbeitsspeicher ist die superschnelle Werkbank: Der Prozessor liest dort die Daten der geöffneten Programme, ohne zu warten."
    },
    {
      "type": "tf",
      "q": "Wenn man dem Computer den Strom abstellt, verschwinden die auf der SSD gespeicherten Fotos.",
      "answer": false,
      "explain": "Falsch: Die SSD nutzt Flash-Speicherchips und behält die Daten auch ohne Strom. Nur der Arbeitsspeicher wird gelöscht."
    },
    {
      "type": "order",
      "q": "Bringe den Weg eines Buchstabens, den du auf der Tastatur tippst, in die richtige Reihenfolge.",
      "items": [
        "Du drückst die Taste auf der Tastatur",
        "Die Tastatur schickt einen Code an den Computer",
        "Der Prozessor verarbeitet den Code",
        "Der Bildschirm zeigt den Buchstaben an"
      ],
      "explain": "Eingabe (Tastatur), Verarbeitung (Prozessor), Ausgabe (Bildschirm): So läuft es bei jedem Computer."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Lukas' Computer schaltet sich nach einer halben Stunde Spielen von selbst aus. Im Gehäuse ist der Prozessorlüfter voller Staub. Was ist die wahrscheinlichste Erklärung?",
      "options": [
        "Der Arbeitsspeicher ist mit Fotos voll",
        "Der Bildschirm ist zu groß",
        "Die Maus schickt zu viele Befehle",
        "Der Prozessor wird zu heiß und schaltet sich ab, um nicht zu verbrennen"
      ],
      "answer": 3,
      "explain": "Bei verstopftem Lüfter wird die Wärme nicht abgeführt: Der Prozessor überhitzt und schaltet sich zum Schutz ab."
    },
    {
      "type": "mc",
      "q": "Welcher Vergleich zwischen Arbeitsspeicher und SSD ist richtig?",
      "options": [
        "Der Arbeitsspeicher behält Daten jahrelang, die SSD verliert sie beim Ausschalten",
        "Der Arbeitsspeicher ist sehr schnell, leert sich aber ohne Strom; die SSD ist langsamer, behält aber die Daten",
        "Sie sind dasselbe mit zwei Namen",
        "Die SSD führt die Programmbefehle aus, der Arbeitsspeicher nicht"
      ],
      "answer": 1,
      "explain": "Arbeitsspeicher = schnelle, vorübergehende Werkbank; SSD = Lager zum Aufbewahren. Die Befehle führt der Prozessor aus."
    },
    {
      "type": "tf",
      "q": "Die Maus ist ein Ausgabegerät, weil sie den Pfeil auf dem Bildschirm zeigt.",
      "answer": false,
      "explain": "Falsch: Die Maus ist ein Eingabegerät, sie schickt deine Bewegungen an den Computer. Der Monitor, ein Ausgabegerät, zeigt den Pfeil."
    },
    {
      "type": "num",
      "q": "Ein Monitor ist 400 Pixel breit und 300 Pixel hoch, und die Grafikkarte berechnet 60 Bilder pro Sekunde. Wie viele Pixelfarben muss sie in einer Sekunde berechnen?",
      "answer": 7200000,
      "unit": "Farben",
      "explain": "400 × 300 = 120 000 Pixel pro Bild; 120 000 × 60 = 7 200 000."
    }
  ]
});
