QBANK("de", "m1-mat-geometria-base", {
  "f": [
    {
      "type": "mc",
      "q": "Welches dieser geometrischen Objekte kann man mit dem Lineal messen?",
      "options": [
        "Die Gerade",
        "Die Halbgerade",
        "Die Strecke"
      ],
      "answer": 2,
      "explain": "Gerade und Halbgerade sind unbegrenzt; eine Strecke hat zwei Endpunkte und damit eine Länge."
    },
    {
      "type": "tf",
      "q": "Ein rechter Winkel misst 90°.",
      "answer": true,
      "explain": "Ein rechter Winkel entsteht aus zwei senkrechten Halbgeraden und misst 90°."
    },
    {
      "type": "mc",
      "q": "Wie heißt ein Winkel von 180°?",
      "options": [
        "Vollwinkel",
        "Gestreckter Winkel",
        "Rechter Winkel"
      ],
      "answer": 1,
      "explain": "Die beiden Halbgeraden liegen auf einer Geraden: Der Winkel ist gestreckt und misst 180°."
    },
    {
      "type": "num",
      "q": "Wie viele Grad misst ein Vollwinkel?",
      "answer": 360,
      "unit": "°",
      "explain": "Ein Vollwinkel ist eine ganze Drehung: 360°."
    },
    {
      "type": "text",
      "q": "Wie heißt der Punkt, der eine Strecke in zwei gleich lange Strecken teilt?",
      "answer": [
        "mittelpunkt",
        "der mittelpunkt",
        "streckenmittelpunkt",
        "der streckenmittelpunkt"
      ],
      "explain": "Der Mittelpunkt M von AB ist so, dass AM ≅ MB gilt."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Auf einer Geraden liegen die Punkte A, B, C in dieser Reihenfolge. AB = 4,5 cm und AC = 11 cm. Wie lang ist BC?",
      "answer": 6.5,
      "tol": 0.01,
      "unit": "cm",
      "explain": "BC = AC − AB = 11 − 4,5 = 6,5 cm."
    },
    {
      "type": "num",
      "q": "Zwei Winkel ergeben zusammen 180° und einer ist doppelt so groß wie der andere. Wie groß ist der kleinere Winkel?",
      "answer": 60,
      "unit": "°",
      "explain": "Die Summe 180° in 3 gleiche Teile (1 + 2) geteilt: 180 : 3 = 60°. Der andere misst 120°."
    },
    {
      "type": "mc",
      "q": "Zwei benachbarte Winkel, die zusammen einen gestreckten Winkel bilden, heißen…",
      "options": [
        "Komplementwinkel",
        "Nebenwinkel",
        "Scheitelwinkel"
      ],
      "answer": 1,
      "explain": "Zwei benachbarte Winkel, deren äußere Schenkel auf einer Geraden liegen, sind Nebenwinkel; ihre Summe ist 180°."
    },
    {
      "type": "tf",
      "q": "Der Mittelpunkt einer 15 cm langen Strecke teilt sie in zwei Teile zu je 7,5 cm.",
      "answer": true,
      "explain": "15 : 2 = 7,5 cm."
    },
    {
      "type": "mc",
      "q": "Wie viel ist 90° − 36°40′ ?",
      "options": [
        "54°20′",
        "53°40′",
        "53°20′"
      ],
      "answer": 2,
      "explain": "90° = 89°60′. Also 89°60′ − 36°40′ = 53°20′."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Auf derselben Geraden liegen die Punkte A, B, C, D in dieser Reihenfolge. AB = 6 cm, BC ist doppelt so lang wie AB und CD ist halb so lang wie BC. Wie lang ist AD?",
      "answer": 24,
      "unit": "cm",
      "explain": "BC = 6 × 2 = 12 cm; CD = 12 : 2 = 6 cm; AD = 6 + 12 + 6 = 24 cm."
    },
    {
      "type": "num",
      "q": "A, B, C liegen in dieser Reihenfolge auf einer Geraden und AC = 30 cm. M ist der Mittelpunkt von AB und N der Mittelpunkt von BC. Wie lang ist MN?",
      "answer": 15,
      "unit": "cm",
      "explain": "MB = AB : 2 und BN = BC : 2, also MN = (AB + BC) : 2 = AC : 2 = 15 cm."
    },
    {
      "type": "mc",
      "q": "Zwei Nebenwinkel unterscheiden sich um 40°. Wie groß ist der größere?",
      "options": [
        "70°",
        "140°",
        "110°"
      ],
      "answer": 2,
      "explain": "Summe 180°, Unterschied 40°: Der größere Winkel ist (180 + 40) : 2 = 110°, der kleinere 70°."
    },
    {
      "type": "tf",
      "q": "Zwei Scheitelwinkel sind immer gleich groß, zwei Nebenwinkel dagegen sind nie gleich groß.",
      "answer": false,
      "explain": "Nebenwinkel können gleich groß sein: Zwei rechte Winkel zu je 90° sind Nebenwinkel und gleich."
    },
    {
      "type": "order",
      "q": "Bringe die Schritte zur Konstruktion des Mittelpunkts einer Strecke AB mit Lineal und Zirkel in die richtige Reihenfolge.",
      "items": [
        "Ich steche den Zirkel in A ein und zeichne mit einer Öffnung größer als die halbe Strecke AB einen Kreisbogen",
        "Mit der gleichen Öffnung steche ich in B ein und zeichne einen zweiten Bogen",
        "Ich markiere die beiden Schnittpunkte der Bögen",
        "Ich verbinde die beiden Punkte: Die Gerade schneidet AB im Mittelpunkt"
      ],
      "explain": "Die Bögen von beiden Endpunkten schneiden sich in zwei Punkten; die Gerade durch sie halbiert AB."
    }
  ]
});
