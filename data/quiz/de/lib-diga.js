QBANK("de", "lib-diga", {
  "f": [
    {
      "type": "mc",
      "q": "Was entsteht hinter der Mauer eines Staudamms?",
      "options": [
        "Ein Stausee",
        "Eine Wüste",
        "Ein Vulkan"
      ],
      "answer": 0,
      "explain": "Der Damm hält den Fluss auf und das Wasser sammelt sich zu einem See."
    },
    {
      "type": "tf",
      "q": "Das Wasser, das die Turbine gedreht hat, wird verbraucht und kehrt nie in den Fluss zurück.",
      "answer": false,
      "explain": "Falsch: Das Wasser fließt in den Fluss zurück, es wurde weder verbraucht noch verschmutzt."
    },
    {
      "type": "text",
      "q": "Wie heißt das große Stahlrohr, das das Wasser vom See zum Kraftwerk bringt?",
      "answer": [
        "druckrohrleitung",
        "die druckrohrleitung",
        "druckrohr",
        "das druckrohr",
        "fallrohr",
        "rohrleitung"
      ],
      "explain": "In der Druckrohrleitung stürzt das Wasser nach unten und wird schnell."
    },
    {
      "type": "mc",
      "q": "Was wird vom Wasser aus dem Druckrohr gedreht?",
      "options": [
        "Der Strommast",
        "Der Transformator",
        "Die Turbine"
      ],
      "answer": 2,
      "explain": "Das Wasser trifft auf die gebogenen Schaufeln der Turbine und lässt sie sehr schnell rotieren."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Jede Turbine eines Kraftwerks erzeugt 25 Megawatt. Eine kleine Stadt braucht 100. Wie viele Turbinen werden für ihre Versorgung gebraucht?",
      "answer": 4,
      "unit": "Turbinen",
      "explain": "100 : 25 = 4 Turbinen."
    },
    {
      "type": "mc",
      "q": "Warum erhöht der Transformator die Spannung, bevor der Strom in die Leitungen geschickt wird?",
      "options": [
        "Damit sich die Strommasten bewegen",
        "Weil dann auf dem Weg in den Leitungen sehr wenig Energie verloren geht",
        "Damit der Strom ungefährlicher zu berühren ist",
        "Damit sich die Turbine schneller dreht"
      ],
      "answer": 1,
      "explain": "Mit Hochspannung kann der Strom Hunderte Kilometer weit fließen und verliert dabei nur sehr wenig Energie."
    },
    {
      "type": "tf",
      "q": "Ein Stausee ist ein Energiespeicher: Das Wasser oben kann hinabfließen und bei Bedarf die Turbinen drehen.",
      "answer": true,
      "explain": "Wasser in der Höhe hat potenzielle Energie: Öffnet man den Einlauf, wird sie zu Bewegung."
    },
    {
      "type": "text",
      "q": "Wie heißt die Energie, die man aus fallendem Wasser gewinnt, das Turbinen dreht? (ein Wort mit «Wasser…»)",
      "answer": [
        "wasserkraft",
        "die wasserkraft",
        "wasserenergie",
        "hydroenergie",
        "wasserkraftenergie",
        "wasserkraftwerk"
      ],
      "explain": "Das ist die Wasserkraft: Das fallende Wasser treibt die Turbinen an."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Warum muss ein Staudamm immer etwas Wasser in den Fluss unterhalb fließen lassen (Mindestwasser)?",
      "options": [
        "Damit sich die Turbine schneller dreht",
        "Damit die Mauer leichter wird",
        "Damit die Fische und Pflanzen des Flusses nicht sterben",
        "Um mehr Strom zu erzeugen"
      ],
      "answer": 2,
      "explain": "Der Fluss unterhalb braucht Wasser, sonst überleben die Fische und Pflanzen darin nicht."
    },
    {
      "type": "mc",
      "q": "Manche Kraftwerke haben zwei Seen und pumpen bei Energieüberschuss Wasser vom unteren in den oberen See. Wozu dient das?",
      "options": [
        "Um Energie wie in einer riesigen Batterie zu speichern, bis sie gebraucht wird",
        "Um das Wasser des unteren Sees zu reinigen",
        "Damit die Fische nach oben kommen",
        "Um den Generator zu kühlen"
      ],
      "answer": 0,
      "explain": "Wasser in der Höhe hat potenzielle Energie: Wird sie gebraucht, lässt man das Wasser wieder fallen und es erzeugt Strom."
    },
    {
      "type": "num",
      "q": "Um 8 Uhr enthält ein Stausee 6 000 000 m³ Wasser. Zum Antrieb der Turbinen fließen jede Minute 2000 m³ ab und aus dem Fluss kommt kein Wasser nach. Wie viel Wasser ist nach 1 Stunde noch im See?",
      "answer": 5880000,
      "unit": "m³",
      "explain": "1 Stunde = 60 Minuten: 2000 × 60 = 120 000 m³ abgeflossen. 6 000 000 − 120 000 = 5 880 000 m³."
    },
    {
      "type": "tf",
      "q": "Im Generator entsteht nur dann Strom, wenn sich die Magnete gegenüber den Spulen bewegen: Steht die Turbine still, entsteht kein Strom mehr.",
      "answer": true,
      "explain": "Die Bewegung eines Magneten nahe einer Spule erzeugt Strom. Ohne Bewegung gibt es keinen Strom."
    }
  ]
});
