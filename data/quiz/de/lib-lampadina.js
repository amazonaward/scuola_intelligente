QBANK("de", "lib-lampadina", {
  "f": [
    {
      "type": "mc",
      "q": "Welche Lampe braucht für dasselbe Licht weniger Energie?",
      "options": [
        "Die Glühlampe",
        "Die LED-Lampe",
        "Beide gleich viel"
      ],
      "answer": 1,
      "explain": "Die LED macht Licht fast ohne sich zu erhitzen, deshalb verbraucht sie viel weniger."
    },
    {
      "type": "tf",
      "q": "Eine Glühlampe wird heiß, weil fast die gesamte Energie zu Wärme wird.",
      "answer": true,
      "explain": "Etwa 95 von 100 Teilen werden zu Wärme und nur 5 zu Licht."
    },
    {
      "type": "text",
      "q": "Wie heißt der Metallteil der Glühbirne, der in die Fassung geschraubt wird?",
      "answer": [
        "sockel",
        "der sockel",
        "schraubsockel",
        "der schraubsockel",
        "gewinde",
        "e27"
      ],
      "explain": "Der Schraubsockel bringt den Strom von der Fassung zur Glühbirne."
    },
    {
      "type": "mc",
      "q": "Wer machte die Glühlampe 1879 alltagstauglich?",
      "options": [
        "Isaac Newton",
        "Leonardo da Vinci",
        "Thomas Edison"
      ],
      "answer": 2,
      "explain": "Edison nutzte einen verkohlten Bambusfaden, aber auch andere Erfinder arbeiteten daran."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Eine 100-Watt-Glühlampe wird durch eine 12-Watt-LED mit gleicher Helligkeit ersetzt. Wie viele Watt spart man beim Austausch von 5 Lampen?",
      "answer": 440,
      "unit": "Watt",
      "explain": "100 − 12 = 88 Watt pro Lampe; 88 × 5 = 440 Watt."
    },
    {
      "type": "mc",
      "q": "Warum glüht der Glühfaden, während die Zuleitungen kühl bleiben?",
      "options": [
        "Weil der Faden extrem dünn ist und der Strom nur mit Mühe hindurchkommt",
        "Weil der Faden aus Holz ist",
        "Weil in den Zuleitungen kein Strom fließt",
        "Weil der Faden schwarz angemalt ist"
      ],
      "answer": 0,
      "explain": "Im sehr dünnen Draht hat der Strom viel Widerstand und erhitzt ihn; in dicken Drähten fließt er leicht."
    },
    {
      "type": "tf",
      "q": "Eine LED sendet Licht direkt aus, ohne glühend heiß werden zu müssen.",
      "answer": true,
      "explain": "Fließt Strom hindurch, geben Elektronen ihre Energie als Licht ab, fast ohne Wärme."
    },
    {
      "type": "order",
      "q": "Bringe in die richtige Reihenfolge, was passiert, wenn du eine Glühlampe einschaltest.",
      "items": [
        "Du drückst den Schalter und der Stromkreis schließt sich",
        "Strom fließt durch den Glühfaden",
        "Der Glühfaden erhitzt sich auf etwa 2500 °C",
        "Der Glühfaden leuchtet gelb"
      ],
      "explain": "Der geschlossene Stromkreis lässt den Strom durch, der den Faden erhitzt, bis er leuchtet."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Zwei Lampen geben gleich viel Licht, 800 Lumen: A braucht 60 Watt, B braucht 8 Watt. Welche Aussage stimmt?",
      "options": [
        "A ist besser, weil sie mehr verbraucht",
        "Sie sind gleich, weil Watt keine Rolle spielen",
        "A gibt mehr Licht, weil sie mehr Watt hat",
        "B ist besser, weil sie dasselbe Licht mit weniger Energie liefert"
      ],
      "answer": 3,
      "explain": "Lumen sagen, wie viel Licht, Watt, wie viel Energie verbraucht wird: Eine gute Lampe liefert viele Lumen mit wenigen Watt."
    },
    {
      "type": "num",
      "q": "Eine LED-Lampe hält 20 000 Stunden, eine Glühlampe 1000 Stunden. Wie viele Glühlampen braucht man für die Stunden einer LED?",
      "answer": 20,
      "unit": "Glühlampen",
      "explain": "20 000 : 1000 = 20 Glühlampen."
    },
    {
      "type": "tf",
      "q": "Wenn der Glühfaden reißt, bleibt der Stromkreis geschlossen und die Lampe leuchtet weiter.",
      "answer": false,
      "explain": "Falsch: Der gerissene Draht unterbricht den Stromkreis, der Strom kann nicht mehr fließen und die Lampe geht aus."
    },
    {
      "type": "mc",
      "q": "Warum hat eine LED-Lampe innen eine kleine Schaltung namens «Treiber»?",
      "options": [
        "Damit sich die Lichter drehen",
        "Weil LEDs den Haushaltsstrom nicht vertragen und er in schwachen Gleichstrom umgewandelt werden muss",
        "Damit die Lampe heiß wird",
        "Um den Kolben mit Gas zu füllen"
      ],
      "answer": 1,
      "explain": "Der Haushaltsstrom ist für LEDs zu «stark»: Der Treiber wandelt ihn in schwachen Gleichstrom um."
    }
  ]
});
