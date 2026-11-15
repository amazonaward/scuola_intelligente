QBANK("de", "lib-frigorifero", {
  "f": [
    {
      "type": "mc",
      "q": "Welches Teil hält die Kühlschranktür mit einem Magneten fest geschlossen?",
      "options": [
        "Der Thermostat",
        "Die Dichtung",
        "Der Einlegeboden"
      ],
      "answer": 1,
      "explain": "Der Gummirand mit Magnet haftet am Metallgehäuse und lässt die kalte Luft nicht entweichen."
    },
    {
      "type": "tf",
      "q": "Wenn du die Kühlschranktür lange offen lässt, muss der Kompressor mehr arbeiten.",
      "answer": true,
      "explain": "Warme Luft aus dem Raum strömt hinein und der Kühlschrank muss mehr Wärme abführen, um kalt zu bleiben."
    },
    {
      "type": "text",
      "q": "Wie heißt die besondere Flüssigkeit, die in den Rohren des Kühlschranks fließt und die Wärme transportiert?",
      "answer": [
        "kältemittel",
        "das kältemittel",
        "kühlmittel",
        "das kühlmittel"
      ],
      "explain": "Das Kältemittel fließt in einem geschlossenen Kreislauf: Es verdampft und verflüssigt sich ständig."
    },
    {
      "type": "mc",
      "q": "Was misst die Temperatur im Kühlschrank und schaltet den Kompressor ein oder aus?",
      "options": [
        "Der Thermostat",
        "Die Glühbirne",
        "Der Glasboden"
      ],
      "answer": 0,
      "explain": "Der Thermostat schaltet den Kompressor ab, wenn es kalt genug ist, und wieder ein, wenn es wärmer wird."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Das Gefrierfach hat −18 °C und der Kühlschrank +4 °C. Um wie viele Grad ist das Gefrierfach kälter als der Kühlschrank?",
      "answer": 22,
      "unit": "°C",
      "explain": "Von +4 bis −18: 4 + 18 = 22 Grad."
    },
    {
      "type": "mc",
      "q": "Warum ist es besser, keinen Topf mit noch kochend heißer Suppe in den Kühlschrank zu stellen?",
      "options": [
        "Weil sich der Kühlschrank mit Wasser füllt",
        "Weil die Suppe salziger wird",
        "Weil der Kühlschrank viel mehr Wärme abführen muss und der Kompressor viel mehr arbeitet",
        "Weil die Suppe nicht gefrieren kann"
      ],
      "answer": 2,
      "explain": "Heißes Essen bringt viel Wärme hinein: Der Kühlschrank muss sie abführen, braucht mehr Strom und erwärmt auch die anderen Lebensmittel."
    },
    {
      "type": "tf",
      "q": "Wenn du die Tür eines laufenden Kühlschranks in einer geschlossenen Küche offen lässt, wird die Küche kälter.",
      "answer": false,
      "explain": "Falsch: Der Kühlschrank gibt die Wärme über den Verflüssiger an die Küche ab. Zusammen mit der Motorwärme wird der Raum etwas wärmer."
    },
    {
      "type": "order",
      "q": "Bringe in die richtige Reihenfolge, was passiert, wenn die Temperatur im Kühlschrank steigt.",
      "items": [
        "Der Innenraum des Kühlschranks wird wärmer",
        "Der Thermostat bemerkt es",
        "Der Kompressor schaltet sich wieder ein",
        "Das Kältemittel führt Wärme ab und innen wird es wieder kalt"
      ],
      "explain": "Der Thermostat steuert den Kompressor: Er schaltet ihn nur bei Bedarf ein und ab, wenn es kalt genug ist."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Annas Kühlschrank steht dicht an der Wand und das schwarze Gitter hinten ist voller Staub. Was passiert?",
      "options": [
        "Der Kühlschrank wird kälter",
        "Die Wärme entweicht schlecht, der Kompressor arbeitet mehr und es wird mehr Energie verbraucht",
        "Das Kältemittel verwandelt sich in Wasser",
        "Der Thermostat geht sofort kaputt"
      ],
      "answer": 1,
      "explain": "Der Verflüssiger muss Wärme an die Luft abgeben: Ist er schmutzig oder zugestellt, klappt das schlecht und der Kompressor muss mehr arbeiten."
    },
    {
      "type": "mc",
      "q": "Welches Phänomen erklärt sowohl die Kälte, die du nass aus dem Schwimmbad spürst, als auch die Kälte des Verdampfers?",
      "options": [
        "Kondensation setzt Wärme frei",
        "Eis erzeugt Kälte",
        "Verdunstung nimmt Wärme aus der Umgebung auf",
        "Kalte Luft steigt immer nach oben"
      ],
      "answer": 2,
      "explain": "Wenn eine Flüssigkeit verdunstet, nimmt sie Wärme aus der Umgebung auf: von deiner Haut oder von Luft und Essen im Kühlschrank."
    },
    {
      "type": "num",
      "q": "Kühlschrank A verbraucht 1,2 kWh pro Tag, Kühlschrank B 0,8 kWh pro Tag. Wie viele kWh weniger verbraucht B in 30 Tagen?",
      "answer": 12,
      "unit": "kWh",
      "explain": "1,2 − 0,8 = 0,4 kWh pro Tag; 0,4 × 30 = 12 kWh."
    },
    {
      "type": "tf",
      "q": "Eine Klimaanlage arbeitet nach demselben Prinzip wie ein Kühlschrank: Sie bringt Wärme von einem Ort an einen anderen.",
      "answer": true,
      "explain": "Auch die Wärmepumpe, die Häuser heizt, macht dieselbe Arbeit in umgekehrter Richtung."
    }
  ]
});
