QBANK("de", "p5-mat-solidi-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Welcher Körper hat zwei kreisförmige Grundflächen?",
      "options": [
        "Kegel",
        "Kugel",
        "Zylinder"
      ],
      "answer": 2,
      "explain": "Der Zylinder hat zwei Kreise als Grundflächen; der Kegel hat nur eine, die Kugel keine."
    },
    {
      "type": "tf",
      "q": "Ein Rotationskörper hat mindestens eine gekrümmte Fläche.",
      "answer": true,
      "explain": "Zylinder, Kegel und Kugel haben gekrümmte Flächen, deshalb können sie rollen."
    },
    {
      "type": "num",
      "q": "Wie viele Flächen hat ein Tetraeder?",
      "answer": 4,
      "explain": "Das Tetraeder ist eine Pyramide mit dreieckiger Grundfläche: 1 Grundfläche + 3 Seitenflächen = 4 Flächen."
    },
    {
      "type": "mc",
      "q": "Wie heißen die „Ecken“ eines Polyeders, an denen mehrere Kanten zusammentreffen?",
      "options": [
        "Ecken",
        "Flächen",
        "Grundflächen"
      ],
      "answer": 0,
      "explain": "Ecken sind die Punkte, an denen sich Kanten treffen."
    },
    {
      "type": "text",
      "q": "Welche Körperform hat eine Dose Tomaten?",
      "answer": [
        "zylinder",
        "ein zylinder",
        "der zylinder"
      ],
      "explain": "Die Dose hat zwei runde Grundflächen und eine gekrümmte Mantelfläche: ein Zylinder."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Eine Schachtel ist 6 Würfel lang, 2 breit und 4 hoch. Wie viele Würfel passen hinein?",
      "answer": 48,
      "unit": "Würfel",
      "explain": "Eine Schicht: 6 × 2 = 12 Würfel. Es gibt 4 Schichten: 12 × 4 = 48."
    },
    {
      "type": "mc",
      "q": "Wie viele Flächen hat ein Prisma mit sechseckiger Grundfläche?",
      "options": [
        "6",
        "8",
        "12"
      ],
      "answer": 1,
      "explain": "Es hat 2 sechseckige Grundflächen und 6 rechteckige Seitenflächen: 2 + 6 = 8 (also n + 2 mit n = 6)."
    },
    {
      "type": "tf",
      "q": "Eine Pyramide mit fünfeckiger Grundfläche hat 6 Flächen.",
      "answer": true,
      "explain": "1 Grundfläche + 5 dreieckige Seitenflächen = 6 Flächen (n + 1 mit n = 5)."
    },
    {
      "type": "num",
      "q": "Wie viele Kanten hat ein dreiseitiges Prisma?",
      "answer": 9,
      "explain": "3 Kanten oben + 3 Kanten unten + 3 senkrechte Kanten = 9."
    },
    {
      "type": "mc",
      "q": "Das Netz eines Kegels besteht aus…",
      "options": [
        "einem Kreisausschnitt und einem Kreis",
        "zwei Kreisen und einem Rechteck",
        "sechs gleichen Quadraten"
      ],
      "answer": 0,
      "explain": "Der „Fächer“ (Kreisausschnitt) ist die Seitenfläche, der Kreis die Grundfläche. Zwei Kreise und ein Rechteck bilden das Netz des Zylinders."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Ein Polyeder hat 7 Flächen und 10 Ecken. Wie viele Kanten hat es nach der Eulerschen Formel (Flächen + Ecken − Kanten = 2)?",
      "answer": 15,
      "explain": "7 + 10 = 17; 17 − Kanten = 2, also Kanten = 17 − 2 = 15 (es ist ein fünfseitiges Prisma)."
    },
    {
      "type": "mc",
      "q": "Ein Prisma und eine Pyramide haben dieselbe sechseckige Grundfläche. Wie viele Ecken mehr hat das Prisma?",
      "options": [
        "3",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Das Prisma hat 6 + 6 = 12 Ecken, die Pyramide 6 + 1 = 7. Der Unterschied ist 12 − 7 = 5."
    },
    {
      "type": "tf",
      "q": "Ein Würfel und ein Tetraeder haben gleich viele Kanten.",
      "answer": false,
      "explain": "Der Würfel hat 12 Kanten, das Tetraeder nur 6: Die Aussage ist falsch."
    },
    {
      "type": "num",
      "q": "Eine volle Schachtel enthält 60 Würfel. Sie ist 5 Würfel lang und 4 breit. Wie viele Würfel hoch ist sie?",
      "answer": 3,
      "unit": "Würfel",
      "explain": "Eine Schicht hat 5 × 4 = 20 Würfel. Die Zahl der Schichten ist 60 ÷ 20 = 3."
    },
    {
      "type": "order",
      "q": "Ordne diese Polyeder von der kleinsten zur größten Kantenzahl.",
      "items": [
        "Tetraeder (6 Kanten)",
        "Quadratische Pyramide (8 Kanten)",
        "Würfel (12 Kanten)",
        "Sechsseitiges Prisma (18 Kanten)"
      ],
      "explain": "Das sechsseitige Prisma hat 6 + 6 + 6 = 18 Kanten, der Würfel 12, die quadratische Pyramide 4 + 4 = 8, das Tetraeder 6."
    }
  ]
});
