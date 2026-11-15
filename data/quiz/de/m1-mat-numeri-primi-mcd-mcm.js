QBANK("de", "m1-mat-numeri-primi-mcd-mcm", {
  "f": [
    {
      "type": "mc",
      "q": "Welche dieser Zahlen ist durch 5 teilbar?",
      "options": [
        "122",
        "135",
        "143"
      ],
      "answer": 1,
      "explain": "Eine Zahl ist durch 5 teilbar, wenn sie auf 0 oder 5 endet: 135."
    },
    {
      "type": "tf",
      "q": "Die Zahl 9 ist eine Primzahl.",
      "answer": false,
      "explain": "9 = 3 × 3: Sie hat drei Teiler (1, 3, 9), also ist sie zusammengesetzt."
    },
    {
      "type": "mc",
      "q": "Wie viele Teiler hat eine Primzahl?",
      "options": [
        "Nur einen",
        "Unendlich viele",
        "Genau zwei"
      ],
      "answer": 2,
      "explain": "Eine Primzahl ist nur durch 1 und durch sich selbst teilbar: Sie hat genau zwei Teiler."
    },
    {
      "type": "num",
      "q": "Was ist die kleinste Primzahl?",
      "answer": 2,
      "explain": "Die Zahl 1 ist keine Primzahl (sie hat nur einen Teiler). Die 2 hat zwei Teiler, 1 und 2: Sie ist die kleinste Primzahl."
    },
    {
      "type": "text",
      "q": "Wie heißen Zahlen größer als 1, die mehr als zwei Teiler haben?",
      "answer": [
        "zusammengesetzte zahlen",
        "zusammengesetzt",
        "zusammengesetzte",
        "zusammengesetzte zahl"
      ],
      "explain": "Zahlen mit mehr als zwei Teilern (wie 6 oder 15) heißen zusammengesetzte Zahlen."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Welche dieser Zahlen ist durch 9 teilbar?",
      "options": [
        "5.272",
        "5.276",
        "5.274"
      ],
      "answer": 2,
      "explain": "Eine Zahl ist durch 9 teilbar, wenn ihre Quersumme es ist: 5 + 2 + 7 + 4 = 18."
    },
    {
      "type": "num",
      "q": "Wie viele Teiler hat die Zahl 36?",
      "answer": 9,
      "unit": "Teiler",
      "explain": "Die Teiler von 36 sind 1, 2, 3, 4, 6, 9, 12, 18, 36: insgesamt 9."
    },
    {
      "type": "mc",
      "q": "Wenn zwei Zahlen teilerfremd sind, wie groß ist ihr ggT?",
      "options": [
        "0",
        "1",
        "Ihr Produkt"
      ],
      "answer": 1,
      "explain": "Teilerfremd heißt: Der einzige gemeinsame Teiler ist 1, also ggT = 1."
    },
    {
      "type": "num",
      "q": "Ein Stoffstreifen ist 84 cm lang und 60 cm breit. Du willst ihn in möglichst große, gleiche Quadrate schneiden, ohne Rest. Wie lang ist die Seite jedes Quadrats?",
      "answer": 12,
      "unit": "cm",
      "explain": "Die Seite muss 84 und 60 teilen und möglichst groß sein: ggT(84, 60) = 12 cm (84 = 2² × 3 × 7, 60 = 2² × 3 × 5)."
    },
    {
      "type": "tf",
      "q": "Jede Zahl, die durch 4 teilbar ist, ist auch durch 2 teilbar.",
      "answer": true,
      "explain": "Ist eine Zahl ein Vielfaches von 4, ist sie ein Vielfaches von 2 × 2, also gerade und durch 2 teilbar."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Drei Freunde laufen im Park: Anna alle 3 Tage, Bruno alle 4 Tage und Carla alle 6 Tage. Heute laufen alle zusammen. Nach wie vielen Tagen laufen alle drei wieder zusammen?",
      "answer": 12,
      "unit": "Tage",
      "explain": "Gesucht ist das kgV(3, 4, 6): 3 = 3, 4 = 2², 6 = 2 × 3 → 2² × 3 = 12 Tage."
    },
    {
      "type": "num",
      "q": "Eine Lehrerin hat 48 Bleistifte, 72 Hefte und 60 Radiergummis. Sie möchte möglichst viele gleiche Sets ohne Rest zusammenstellen. Wie viele Sets sind das?",
      "answer": 12,
      "unit": "Sets",
      "explain": "Gesucht ist der ggT(48, 72, 60): 48 = 2⁴ × 3, 72 = 2³ × 3², 60 = 2² × 3 × 5 → gemeinsame Faktoren mit dem kleinsten Exponenten: 2² × 3 = 12 Sets."
    },
    {
      "type": "mc",
      "q": "Eine dieser Primfaktorzerlegungen ist falsch. Welche?",
      "options": [
        "45 = 3 × 15",
        "84 = 2² × 3 × 7",
        "100 = 2² × 5²"
      ],
      "answer": 0,
      "explain": "15 ist keine Primzahl (15 = 3 × 5): Die richtige Zerlegung ist 45 = 3² × 5."
    },
    {
      "type": "tf",
      "q": "Für zwei beliebige Zahlen ist das Produkt aus ggT und kgV gleich dem Produkt der beiden Zahlen.",
      "answer": true,
      "explain": "Beispiel mit 12 und 18: ggT = 6, kgV = 36 und 6 × 36 = 216 = 12 × 18."
    },
    {
      "type": "order",
      "q": "Ordne die Werte vom kleinsten zum größten.",
      "items": [
        "ggT(9, 16)",
        "kgV(4, 6)",
        "ggT(30, 45)",
        "kgV(4, 5)"
      ],
      "explain": "ggT(9, 16) = 1, kgV(4, 6) = 12, ggT(30, 45) = 15, kgV(4, 5) = 20."
    }
  ]
});
