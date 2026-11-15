QBANK("de", "lib-faro", {
  "f": [
    {
      "type": "mc",
      "q": "Wovor warnt der Leuchtturm die Schiffe?",
      "options": [
        "Wo es Fische gibt",
        "Vor der genauen Uhrzeit",
        "Vor gefährlichen Felsen und zeigt die Hafeneinfahrt"
      ],
      "answer": 2,
      "explain": "Der Leuchtturm warnt vor Gefahrenstellen und zeigt, wo die Häfen sind."
    },
    {
      "type": "tf",
      "q": "Der Glasraum ganz oben im Leuchtturm heißt Laterne.",
      "answer": true,
      "explain": "In der Laterne sitzen die Lampe und die Linse."
    },
    {
      "type": "text",
      "q": "Wie hieß die Person, die im Leuchtturm wohnte und sich um das Licht kümmerte?",
      "answer": [
        "wärter",
        "der wärter",
        "leuchtturmwärter",
        "der leuchtturmwärter"
      ],
      "explain": "Der Wärter zündete die Lampe an, putzte die Scheiben und zog das Uhrwerk auf."
    },
    {
      "type": "mc",
      "q": "Was befindet sich auf der Kuppel des Leuchtturms als Schutz vor Blitzen?",
      "options": [
        "Eine Fahne",
        "Ein Blitzableiter",
        "Eine Glocke"
      ],
      "answer": 1,
      "explain": "Der Leuchtturm ist der höchste Punkt der Küste, darum hat er einen Blitzableiter."
    }
  ],
  "m": [
    {
      "type": "text",
      "q": "Wie heißt die 1822 erfundene Linse, die das Licht des Leuchtturms zu starken Strahlen bündelt?",
      "answer": [
        "fresnel-linse",
        "die fresnel-linse",
        "fresnellinse",
        "die fresnellinse",
        "fresnel"
      ],
      "explain": "Es ist die Fresnel-Linse aus Glasringen."
    },
    {
      "type": "tf",
      "q": "Ein Leuchtturm mit tieferem Licht ist von weiter weg zu sehen, weil das Licht stärker gebündelt ist.",
      "answer": false,
      "explain": "Falsch: Je höher das Licht, desto weiter sieht man es, denn die Erde ist gekrümmt."
    },
    {
      "type": "mc",
      "q": "Warum baut man Leuchttürme auf Klippen, Landspitzen und kleinen Inseln?",
      "options": [
        "Weil dort mehr Touristen sind",
        "Weil das Meer dort immer ruhig ist",
        "Weil dort die Schiffe am meisten gefährdet sind"
      ],
      "answer": 2,
      "explain": "Leuchttürme stehen dort, wo die Gefahr für Schiffe am größten ist."
    },
    {
      "type": "order",
      "q": "Ordne von unten nach oben.",
      "items": [
        "Klippe",
        "Turm mit der Treppe",
        "Laterne mit der Linse",
        "Kuppel mit dem Blitzableiter"
      ],
      "explain": "Man beginnt an der Klippe, steigt durch den Turm zur Laterne, und ganz oben sitzt die Kuppel."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Max sagt: «Die Fresnel-Linse macht mehr Licht als die Lampe.» Was stimmt daran nicht?",
      "options": [
        "Sie lässt den Leuchtturm sich drehen",
        "Sie erzeugt kein neues Licht: Sie bündelt das Licht der Lampe zu schmalen Strahlen",
        "Sie schützt nur vor dem Wind"
      ],
      "answer": 1,
      "explain": "Die Linse bricht die Strahlen und bündelt sie, aber das Licht kommt von der Lampe."
    },
    {
      "type": "tf",
      "q": "Heute haben Schiffe GPS, deshalb sind Leuchttürme überhaupt nicht mehr nützlich.",
      "answer": false,
      "explain": "Falsch: Wenn die Elektronik ausfällt, kann das Licht eines Leuchtturms ein Schiff noch retten."
    },
    {
      "type": "num",
      "q": "Eine Linse mit zwei Strahlen macht alle 15 Sekunden eine Drehung. Wie viele Blitze sieht ein Schiff in 1 Minute?",
      "answer": 8,
      "unit": "Blitze",
      "explain": "In 60 Sekunden sind es 60 : 15 = 4 Drehungen. Bei jeder Drehung ziehen 2 Strahlen vorbei, also 4 × 2 = 8 Blitze."
    },
    {
      "type": "mc",
      "q": "Ein Schiff sieht einen Leuchtturm mit 3 Blitzen alle 10 Sekunden und weiß, welcher es ist. Was hat es benutzt?",
      "options": [
        "Die Farbe der Streifen am Turm",
        "Das Geräusch der Linse",
        "Die Kennung des Leuchtturms, also seinen Blitzrhythmus"
      ],
      "answer": 2,
      "explain": "Jeder Leuchtturm hat seinen eigenen Blitzrhythmus, und durch Zählen erkennt man ihn."
    }
  ]
});
