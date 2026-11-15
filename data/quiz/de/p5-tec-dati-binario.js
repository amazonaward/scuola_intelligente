QBANK("de", "p5-tec-dati-binario", {
  "f": [
    {
      "type": "mc",
      "q": "Welche Ziffern benutzt der Binärcode?",
      "options": [
        "Von 0 bis 9",
        "Nur 0 und 1",
        "Nur 1 und 2"
      ],
      "answer": 1,
      "explain": "Der Binärcode benutzt nur zwei Ziffern: 0 und 1."
    },
    {
      "type": "tf",
      "q": "Ein Bit kann nur 0 oder 1 sein.",
      "answer": true,
      "explain": "Ein Bit ist die kleinste Information: ein Ja oder ein Nein."
    },
    {
      "type": "num",
      "q": "Wie viel ist die Binärzahl 11 im Dezimalsystem?",
      "answer": 3,
      "explain": "Die Stellen sind 2 und 1 wert: 2 + 1 = 3."
    },
    {
      "type": "mc",
      "q": "Was ist ein Transistor?",
      "options": [
        "Eine Art Kabel",
        "Ein Speicher für Fotos",
        "Ein winziger elektronischer Schalter"
      ],
      "answer": 2,
      "explain": "Ein Transistor ist ein Schalter, der an (1) oder aus (0) sein kann. In Computern stecken Milliarden davon."
    },
    {
      "type": "tf",
      "q": "Der Unicode enthält auch Emojis.",
      "answer": true,
      "explain": "Unicode hat mehr als 150.000 Zeichen aus allen Sprachen, auch Emojis."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Wie viel ist die Binärzahl 10011 im Dezimalsystem?",
      "answer": 19,
      "explain": "Die Stellen sind 16, 8, 4, 2, 1: 16 + 0 + 0 + 2 + 1 = 19."
    },
    {
      "type": "mc",
      "q": "Wie schreibt man 12 binär?",
      "options": [
        "1010",
        "1100",
        "1001"
      ],
      "answer": 1,
      "explain": "12 = 8 + 4, also sind die Stellen 8 und 4 an: 1100."
    },
    {
      "type": "num",
      "q": "Ein Bild hat 10 Pixel und jeder Pixel braucht 3 Byte (Rot, Grün, Blau). Wie viele Byte belegt es?",
      "answer": 30,
      "unit": "Byte",
      "explain": "10 × 3 = 30 Byte."
    },
    {
      "type": "order",
      "q": "Ordne diese Binärzahlen vom kleinsten zum größten.",
      "items": [
        "101",
        "110",
        "1000",
        "1011"
      ],
      "explain": "Sie sind 5, 6, 8 und 11 wert."
    },
    {
      "type": "text",
      "q": "Wie heißt der Code von 1963, der jedem Buchstaben eine Nummer gibt (A = 65)?",
      "answer": [
        "ascii",
        "der ascii-code",
        "ascii-code",
        "ascii code"
      ],
      "explain": "ASCII gibt jedem Zeichen eine Nummer, die dann binär geschrieben wird."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Wie viele Bits braucht man mindestens, um 20 verschiedene Werte zu schreiben?",
      "answer": 5,
      "unit": "Bits",
      "explain": "Mit 4 Bits gibt es 2×2×2×2 = 16 Werte, zu wenig. Mit 5 Bits sind es 32: Das reicht. Man braucht 5 Bits."
    },
    {
      "type": "num",
      "q": "Eine farbige Zeichnung besteht aus 8 × 8 Pixeln und jeder Pixel braucht 3 Byte. Wie viele Byte belegt sie insgesamt?",
      "answer": 192,
      "unit": "Byte",
      "explain": "8 × 8 = 64 Pixel; 64 × 3 = 192 Byte."
    },
    {
      "type": "mc",
      "q": "Die Lampen 16, 2 und 1 leuchten (10011). Du schaltest auch die Lampe 4 an. Welche Dezimalzahl erhältst du?",
      "options": [
        "22",
        "23",
        "24"
      ],
      "answer": 1,
      "explain": "Jetzt leuchten 16, 4, 2 und 1: 16 + 4 + 2 + 1 = 23."
    },
    {
      "type": "tf",
      "q": "Beim Wechsel von 4 Bits auf 8 Bits verdoppeln sich die möglichen Kombinationen nur (von 16 auf 32).",
      "answer": false,
      "explain": "Jedes zusätzliche Bit verdoppelt die Kombinationen: 4 Bits mehr bedeuten mal 2×2×2×2 = 16, also werden aus 16 dann 256."
    },
    {
      "type": "mc",
      "q": "Marco vergleicht 0111 und 1000. Welche Aussage stimmt?",
      "options": [
        "0111 ist größer, weil es drei Einsen hat",
        "1000 ist größer, weil es 8 wert ist gegenüber 7",
        "Sie sind gleich, weil beide 4 Stellen haben"
      ],
      "answer": 1,
      "explain": "0111 = 4 + 2 + 1 = 7; 1000 = 8. Es zählt der Wert der Stelle, nicht wie viele Einsen es gibt."
    }
  ]
});
