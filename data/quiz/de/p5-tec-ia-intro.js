QBANK("de", "p5-tec-ia-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Wofür steht «KI»?",
      "options": [
        "Automatische Information",
        "Fortgeschrittenes Internet",
        "Künstliche Intelligenz"
      ],
      "answer": 2,
      "explain": "KI steht für künstliche Intelligenz."
    },
    {
      "type": "tf",
      "q": "Ein Chatbot kann falsche Antworten geben.",
      "answer": true,
      "explain": "Auch wenn er gut schreibt, kann er sich irren oder etwas erfinden: Man muss immer nachprüfen."
    },
    {
      "type": "mc",
      "q": "Was davon nutzt künstliche Intelligenz?",
      "options": [
        "Das Entsperren des Handys mit dem Gesicht",
        "Eine Ampel mit fester Zeitschaltung",
        "Ein Lineal"
      ],
      "answer": 0,
      "explain": "Ein Gesicht zu erkennen lernt die KI aus Beispielen; eine Zeitampel und ein Lineal lernen nichts."
    },
    {
      "type": "text",
      "q": "Womit wird eine KI trainiert? Es sind die Beispiele, die wir ihr zeigen.",
      "answer": [
        "daten",
        "die daten",
        "trainingsdaten",
        "beispiele",
        "die beispiele"
      ],
      "explain": "Eine KI lernt aus Daten: vielen Beispielen, oft mit Beschriftungen."
    },
    {
      "type": "tf",
      "q": "Eine künstliche Intelligenz versteht Dinge genau wie ein Mensch.",
      "answer": false,
      "explain": "KI berechnet Wahrscheinlichkeiten aus gesehenen Beispielen; sie versteht die Welt nicht wie ein Mensch."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Wie hat der Spamfilter gelernt, unerwünschte Post zu erkennen?",
      "options": [
        "Ein Programmierer schrieb eine Regel für jede mögliche E-Mail",
        "Aus den E-Mails, die Nutzer als Spam gemeldet haben",
        "Ein Angestellter liest jede E-Mail"
      ],
      "answer": 1,
      "explain": "Die Meldungen der Nutzer sind die Beschriftungen: Das System lernt, was oft in Spam vorkommt."
    },
    {
      "type": "num",
      "q": "Ein Team hat 5.000 Fotos. 20 % dienen zur Überprüfung, der Rest zum Training. Wie viele Fotos werden zum Training genutzt?",
      "answer": 4000,
      "unit": "Fotos",
      "explain": "20 % von 5.000 = 1.000 Fotos zur Überprüfung; 5.000 − 1.000 = 4.000."
    },
    {
      "type": "mc",
      "q": "Ein Sprachassistent wurde nur mit Stimmen von Erwachsenen trainiert. Was kann bei der Stimme eines Kindes passieren?",
      "options": [
        "Er versteht sie perfekt, weil alle Stimmen gleich sind",
        "Er hängt sich auf und schaltet das Handy aus",
        "Er versteht sie vielleicht schlechter, weil er solche Beispiele nie gehört hat"
      ],
      "answer": 2,
      "explain": "KI lernt nur aus den Beispielen, die sie bekommt: Bei nie gehörten Stimmen kann sie mehr Fehler machen."
    },
    {
      "type": "order",
      "q": "Bringe den Weg der Information in einem neuronalen Netz in die richtige Reihenfolge.",
      "items": [
        "Eingabeschicht (zum Beispiel die Pixel)",
        "Verborgene Schichten",
        "Ausgabeschicht (die Antwort)"
      ],
      "explain": "Die Daten gehen hinein, die verborgenen Schichten erkennen immer komplexere Formen, die letzte Schicht gibt die Antwort."
    },
    {
      "type": "text",
      "q": "Wie heißen die Zahlen auf den Verbindungen eines neuronalen Netzes, die beim Training angepasst werden?",
      "answer": [
        "gewichte",
        "die gewichte",
        "gewicht",
        "das gewicht"
      ],
      "explain": "Ein Netz zu trainieren heißt, seine Gewichte nach und nach anzupassen, bis die Antworten stimmen."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Eine KI wird mit 1.000 Fotos von Labradoren und nur 10 Fotos anderer Hunderassen trainiert. Was ist das wahrscheinlichste Problem?",
      "options": [
        "Sie erkennt Labradore gut, irrt sich aber oft bei anderen Rassen",
        "Sie erkennt alle Rassen gleich gut",
        "Sie erkennt nicht einmal Labradore"
      ],
      "answer": 0,
      "explain": "Unausgewogene Daten: Von den anderen Rassen hat sie sehr wenige Beispiele gesehen, daher irrt sie sich dort öfter."
    },
    {
      "type": "tf",
      "q": "Wenn ein Chatbot sehr sicher und überzeugend schreibt, ist seine Antwort bestimmt richtig.",
      "answer": false,
      "explain": "Ein Chatbot kann auch Erfundenes selbstsicher schreiben (Halluzinationen): Man muss in verlässlichen Quellen nachprüfen."
    },
    {
      "type": "mc",
      "q": "Welche dieser Aufgaben passt zu einer KI, die aus Beispielen lernt, weil man ihre Regeln schwer aufschreiben kann?",
      "options": [
        "Zwei Zahlen addieren",
        "Erkennen, ob auf einem Foto ein Hund ist",
        "Jeden Tag um 18 Uhr ein Licht einschalten"
      ],
      "answer": 1,
      "explain": "Addieren und das Einschalten zu fester Zeit gehen mit einfachen Regeln; einen Hund zu erkennen ist zu vielfältig, deshalb lernt man es aus Beispielen."
    },
    {
      "type": "num",
      "q": "Eine KI sieht 200 neue Fotos und erkennt 170 richtig. Wie viel Prozent der Antworten sind richtig?",
      "answer": 85,
      "unit": "%",
      "explain": "170 ÷ 200 = 0,85, das sind 85 von 100 = 85 %."
    },
    {
      "type": "text",
      "q": "Wie heißt das KI-Programm, das 2016 den Meister Lee Sedol im Go besiegte?",
      "answer": [
        "alphago",
        "alpha go"
      ],
      "explain": "AlphaGo lernte aus menschlichen Partien und spielte Millionen Partien gegen sich selbst."
    }
  ]
});
