QBANK("de", "lib-bicicletta", {
  "f": [
    {
      "type": "mc",
      "q": "Welches Rad des Fahrrads ist das Antriebsrad, das schiebt?",
      "options": [
        "Das vordere",
        "Das hintere",
        "Beide gleich"
      ],
      "answer": 1,
      "explain": "Die Kette dreht die Ritzel am Hinterrad: Es ist das Hinterrad, das schiebt."
    },
    {
      "type": "tf",
      "q": "Wenn es dunkel ist, muss das Licht hinten am Fahrrad rot sein.",
      "answer": true,
      "explain": "Vorn ist das Licht weiß, hinten rot: So sehen dich die anderen und erkennen, in welche Richtung du fährst."
    },
    {
      "type": "mc",
      "q": "Wozu dienen die Speichen eines Rades?",
      "options": [
        "Damit das Fahrrad klingelt",
        "Um die Kette zu stoppen",
        "Um die Felge perfekt rund zu halten"
      ],
      "answer": 2,
      "explain": "Die dünnen Speichen ziehen die Felge von der Mitte aus und halten sie rund."
    },
    {
      "type": "text",
      "q": "Wie heißt die Reibungskraft, die das Rad beim Bremsen verlangsamt?",
      "answer": [
        "reibung",
        "die reibung",
        "reibungskraft"
      ],
      "explain": "Die Bremsbeläge reiben an der Felge: Die Reibung bremst das Rad."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Ein Fahrrad hat ein Kettenblatt mit 48 Zähnen und ein Ritzel mit 12 Zähnen. Wie viele Umdrehungen macht das Hinterrad bei jeder Pedalumdrehung?",
      "answer": 4,
      "unit": "Umdrehungen",
      "explain": "48 : 12 = 4 Umdrehungen."
    },
    {
      "type": "mc",
      "q": "Warum ist es gefährlich, nur mit der Vorderradbremse ganz fest zu bremsen?",
      "options": [
        "Weil das Fahrrad nach vorn kippen kann",
        "Weil die Kette reißt",
        "Weil die Reifen Luft verlieren",
        "Weil sich der Sattel absenkt"
      ],
      "answer": 0,
      "explain": "Bremst man nur vorn kräftig, verlagert sich das Gewicht nach vorn und das Fahrrad kann kippen: besser beide Bremsen sanft benutzen."
    },
    {
      "type": "tf",
      "q": "Wenn du bremst, verschwindet die Bewegungsenergie des Fahrrads einfach.",
      "answer": false,
      "explain": "Falsch: Die Energie verschwindet nicht, sie wird durch die Reibung der Bremsbeläge an der Felge zu Wärme."
    },
    {
      "type": "order",
      "q": "Bringe den Weg der Kraft in die richtige Reihenfolge, vom Bein bis zur Straße.",
      "items": [
        "Das Bein drückt auf das Pedal",
        "Die Kurbel dreht das Kettenblatt",
        "Die Kette zieht das Ritzel",
        "Das Hinterrad schiebt die Straße"
      ],
      "explain": "Pedal, Kurbel und Kettenblatt, dann Kette und Ritzel; zuletzt schiebt das Hinterrad die Straße nach hinten und die Straße schiebt das Fahrrad nach vorn."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Warum bleibt ein fahrendes Fahrrad aufrecht, während es im Stehen sofort umfällt?",
      "options": [
        "Weil es im Stand mehr wiegt",
        "Weil die Bremsen es nur in der Fahrt halten",
        "Weil der Rahmen bei hoher Geschwindigkeit steifer ist",
        "Weil kleine Lenkkorrekturen und die sich drehenden Räder es wieder unter dich bringen"
      ],
      "answer": 3,
      "explain": "In der Fahrt korrigierst du ständig leicht mit dem Lenker und die drehenden Räder helfen: Kippst du zur einen Seite, lenkst du dorthin und das Fahrrad kommt wieder unter dich."
    },
    {
      "type": "num",
      "q": "Ein Fahrrad hat ein Kettenblatt mit 36 Zähnen und ein Ritzel mit 12 Zähnen. Der Radumfang beträgt 2 Meter. Wie viele Meter legt es bei 10 Pedalumdrehungen zurück?",
      "answer": 60,
      "unit": "m",
      "explain": "36 : 12 = 3 Radumdrehungen pro Pedalumdrehung; 3 × 2 = 6 m pro Umdrehung; 6 × 10 = 60 m."
    },
    {
      "type": "mc",
      "q": "Welcher dieser Sätze über das Fahrrad ist FALSCH?",
      "options": [
        "Das Dreieck ist eine starre Form und wird deshalb im Rahmen verwendet",
        "Mit einem kleinen Ritzel fährt man schneller, braucht aber mehr Kraft",
        "Mit einem großen Ritzel macht das Rad bei jedem Pedaltritt mehr Umdrehungen",
        "Luftgefüllte Reifen fangen Bodenunebenheiten ab"
      ],
      "answer": 2,
      "explain": "Der dritte ist falsch: Das kleine Ritzel lässt das Rad mehr Umdrehungen machen; das große gibt weniger Umdrehungen, braucht aber weniger Kraft."
    },
    {
      "type": "tf",
      "q": "Bei einem Kettenblatt mit 24 Zähnen und einem Ritzel mit 48 Zähnen macht das Rad weniger als eine Umdrehung pro Pedalumdrehung.",
      "answer": true,
      "explain": "24 : 48 = 0,5: eine halbe Radumdrehung pro Pedalumdrehung. Das ist ein sehr «leichter» Gang, gut für steile Anstiege."
    }
  ]
});
