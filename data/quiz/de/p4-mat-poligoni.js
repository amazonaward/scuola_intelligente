QBANK("de", "p4-mat-poligoni", {
  "f": [
    {
      "type": "mc",
      "q": "Wie viele Seiten hat ein Fünfeck?",
      "options": [
        "4",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Penta- bedeutet fünf: Ein Fünfeck hat 5 Seiten."
    },
    {
      "type": "tf",
      "q": "Ein gleichseitiges Dreieck hat drei gleich lange Seiten.",
      "answer": true,
      "explain": "Gleichseitig bedeutet «mit gleichen Seiten»: Alle drei Winkel sind 60°."
    },
    {
      "type": "text",
      "q": "Welche Form hat ein STOP-Schild?",
      "answer": [
        "achteck",
        "ein achteck",
        "das achteck",
        "oktogon"
      ],
      "explain": "Ein STOP-Schild ist ein Achteck: Es hat 8 Seiten."
    },
    {
      "type": "num",
      "q": "Wie viele Diagonalen hat ein Viereck?",
      "answer": 2,
      "explain": "Man kann zwei Paare nicht benachbarter Ecken verbinden: Es gibt 2 Diagonalen."
    },
    {
      "type": "mc",
      "q": "Welches Dreieck hat drei verschieden lange Seiten?",
      "options": [
        "gleichseitig",
        "gleichschenklig",
        "ungleichseitig"
      ],
      "answer": 2,
      "explain": "Das ungleichseitige hat drei verschiedene Seiten; das gleichschenklige zwei gleiche; das gleichseitige drei gleiche."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Ein gleichschenkliges Dreieck hat an der Spitze einen Winkel von 40°. Wie groß ist jeder der beiden Basiswinkel?",
      "answer": 70,
      "unit": "°",
      "explain": "Die Summe ist 180°: 180 − 40 = 140°. Die beiden Basiswinkel sind gleich: 140 : 2 = 70°."
    },
    {
      "type": "mc",
      "q": "Ein Viereck hat vier rechte Winkel, aber benachbarte Seiten sind verschieden lang. Was ist es?",
      "options": [
        "Rechteck",
        "Raute",
        "Trapez"
      ],
      "answer": 0,
      "explain": "Das Rechteck hat 4 rechte Winkel und paarweise gleiche Seiten, nicht alle gleich."
    },
    {
      "type": "tf",
      "q": "Ein Trapez hat immer vier gleich lange Seiten.",
      "answer": false,
      "explain": "Das Trapez hat nur ein Paar paralleler Seiten; die Seiten sind meist verschieden. Vier gleiche Seiten haben Raute und Quadrat."
    },
    {
      "type": "num",
      "q": "Wie viele gleichseitige dreieckige Fliesen passen um einen Punkt herum, ohne Lücken?",
      "answer": 6,
      "explain": "Jeder Winkel ist 60° und 360° : 60° = 6."
    },
    {
      "type": "mc",
      "q": "Ein Dreieck hat einen Winkel von 120°. Wie heißt es nach seinen Winkeln?",
      "options": [
        "spitzwinklig",
        "rechtwinklig",
        "stumpfwinklig"
      ],
      "answer": 2,
      "explain": "Ein Winkel über 90° ist stumpf: Das Dreieck ist stumpfwinklig."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Eine Raute hat zwei gegenüberliegende Winkel von je 70°. Wie groß ist jeder der anderen beiden Winkel?",
      "answer": 110,
      "unit": "°",
      "explain": "Die Summe ist 360°. 70 + 70 = 140°; 360 − 140 = 220°. Die anderen beiden Winkel sind gleich: 220 : 2 = 110°."
    },
    {
      "type": "mc",
      "q": "Warum kann man einen Boden nicht lückenlos nur mit regelmäßigen Fünfecken fliesen?",
      "options": [
        "Weil Fünfecke zu viele Seiten haben",
        "Weil Fünfecke konkav sind",
        "Der Winkel von 108° passt nicht ganzzahlig in 360°: Bei 3 Fünfecken bleibt eine Lücke, bei 4 überlappen sie"
      ],
      "answer": 2,
      "explain": "3 × 108° = 324° (es fehlt ein Stück) und 4 × 108° = 432° (zu viel). Um 360° zu füllen, muss der Winkel ganzzahlig hineinpassen."
    },
    {
      "type": "order",
      "q": "Bringe die Schritte in die richtige Reihenfolge, um den dritten Winkel eines Dreiecks mit 65° und 45° zu finden.",
      "items": [
        "Ich erinnere mich: Die Winkel eines Dreiecks ergeben zusammen 180°",
        "Ich addiere die beiden bekannten Winkel: 65° + 45° = 110°",
        "Ich ziehe von 180° ab: 180° − 110° = 70°",
        "Der dritte Winkel misst 70°"
      ],
      "explain": "Zuerst erinnert man sich an die Regel (180°), dann addiert man die bekannten Winkel, dann zieht man von der Summe ab."
    },
    {
      "type": "mc",
      "q": "Welche Aussage stimmt?",
      "options": [
        "Jede Raute ist ein Quadrat",
        "Jedes Quadrat ist eine Raute",
        "Jedes Rechteck hat vier gleiche Seiten"
      ],
      "answer": 1,
      "explain": "Das Quadrat hat 4 gleiche Seiten, ist also auch eine Raute. Aber eine Raute kann Winkel haben, die nicht rechte sind, und ein Rechteck kann verschiedene Seiten haben."
    },
    {
      "type": "num",
      "q": "Von jeder Ecke eines Fünfecks gehen 2 Diagonalen aus. Wie viele Diagonalen hat das Fünfeck insgesamt?",
      "answer": 5,
      "explain": "5 Ecken × 2 = 10, aber so wird jede Diagonale zweimal gezählt (einmal von jedem Ende): 10 : 2 = 5."
    }
  ]
});
