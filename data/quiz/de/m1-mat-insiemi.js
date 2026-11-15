QBANK("de", "m1-mat-insiemi", {
  "f": [
    {
      "type": "mc",
      "q": "Welches Zeichen liest man «ist Element von»?",
      "options": [
        "∉",
        "∈",
        "⊂"
      ],
      "answer": 1,
      "explain": "Das Zeichen ∈ sagt, dass ein Element zu einer Menge gehört, zum Beispiel 4 ∈ {2, 4, 6}."
    },
    {
      "type": "tf",
      "q": "{1, 2, 3} und {3, 2, 1} sind dieselbe Menge.",
      "answer": true,
      "explain": "Bei einer Menge spielt die Reihenfolge der Elemente keine Rolle."
    },
    {
      "type": "num",
      "q": "Wie viele Elemente hat die Menge A = { 2, 4, 6, 8, 10 } ?",
      "answer": 5,
      "explain": "Man zählt einfach: 2, 4, 6, 8, 10 sind 5 Elemente, also |A| = 5."
    },
    {
      "type": "mc",
      "q": "Welches Zeichen steht für die Vereinigung zweier Mengen?",
      "options": [
        "∩",
        "∪",
        "−"
      ],
      "answer": 1,
      "explain": "∪ ist die Vereinigung (alle Elemente beider Mengen); ∩ ist der Durchschnitt."
    },
    {
      "type": "text",
      "q": "Wie heißt die Anzahl der Elemente einer Menge?",
      "answer": [
        "mächtigkeit",
        "die mächtigkeit",
        "kardinalität",
        "die kardinalität"
      ],
      "explain": "Die Anzahl der Elemente einer Menge heißt Mächtigkeit (Kardinalität) und wird mit |A| geschrieben."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "A = { x | x ist eine gerade natürliche Zahl kleiner als 9 }. Welche Aufzählung stimmt?",
      "options": [
        "{ 2, 4, 6, 8 }",
        "{ 0, 2, 4, 6, 8 }",
        "{ 2, 4, 6, 8, 10 }"
      ],
      "answer": 1,
      "explain": "Die 0 ist eine gerade natürliche Zahl und 10 ist nicht kleiner als 9: A = { 0, 2, 4, 6, 8 }."
    },
    {
      "type": "num",
      "q": "A ist die Menge der geraden Zahlen von 1 bis 20 und B die Menge der Vielfachen von 5 von 1 bis 20. Wie viele Elemente hat A ∩ B ?",
      "answer": 2,
      "explain": "Die geraden Zahlen sind 2, 4, …, 20; die Vielfachen von 5 sind 5, 10, 15, 20. Gemeinsam sind 10 und 20: also 2 Elemente."
    },
    {
      "type": "mc",
      "q": "Wenn A = { 1, 2, 3, 4 } und B = { 2, 4 }, welche Beziehung stimmt?",
      "options": [
        "A ⊂ B",
        "B ⊂ A",
        "B ∈ A"
      ],
      "answer": 1,
      "explain": "Jedes Element von B (2 und 4) liegt auch in A, also ist B eine Teilmenge von A: B ⊂ A."
    },
    {
      "type": "tf",
      "q": "Wenn A ∩ B = ∅, dann ist die Anzahl der Elemente von A ∪ B gleich |A| + |B|.",
      "answer": true,
      "explain": "Gibt es keine gemeinsamen Elemente, wird kein Element doppelt gezählt: Man addiert einfach."
    },
    {
      "type": "num",
      "q": "U = { 1, 2, 3, …, 12 } und A ist die Menge der Teiler von 12. Wie viele Elemente hat das Komplement von A in U ?",
      "answer": 6,
      "explain": "Die Teiler von 12 sind 1, 2, 3, 4, 6, 12: also 6. Das Komplement hat 12 − 6 = 6 Elemente (5, 7, 8, 9, 10, 11)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "In einer Gruppe von 40 Touristen sprechen 25 Englisch, 20 Französisch und 8 sprechen keine der beiden Sprachen. Wie viele Touristen sprechen beide Sprachen?",
      "answer": 13,
      "explain": "Mindestens eine Sprache sprechen 40 − 8 = 32. Aus |A ∪ B| = |A| + |B| − |A ∩ B|: 32 = 25 + 20 − x, also x = 45 − 32 = 13."
    },
    {
      "type": "num",
      "q": "Das kartesische Produkt A × B enthält 35 Paare und A hat 5 Elemente. Wie viele Elemente hat B ?",
      "answer": 7,
      "explain": "Die Anzahl der Paare ist |A| · |B|: 5 · |B| = 35, also |B| = 35 : 5 = 7."
    },
    {
      "type": "mc",
      "q": "|A| = 12, |A ∪ B| = 20 und |A ∩ B| = 5. Wie groß ist |B| ?",
      "options": [
        "3",
        "13",
        "15"
      ],
      "answer": 1,
      "explain": "|A ∪ B| = |A| + |B| − |A ∩ B| → 20 = 12 + |B| − 5 → |B| = 20 − 12 + 5 = 13."
    },
    {
      "type": "tf",
      "q": "Die Differenzmengen A − B und B − A sind immer gleich.",
      "answer": false,
      "explain": "Sie sind nur in Sonderfällen gleich. Mit A = { 1, 2 } und B = { 2, 3 }: A − B = { 1 }, aber B − A = { 3 }."
    },
    {
      "type": "order",
      "q": "Ordne diese Mengen nach der Anzahl ihrer Elemente, von der kleinsten zur größten.",
      "items": [
        "Die natürlichen Zahlen größer als 5 und kleiner als 6",
        "{ a, b, a, b }",
        "Die Tage einer Woche",
        "Die natürlichen Zahlen kleiner als 10"
      ],
      "explain": "Die erste Menge ist leer (0 Elemente), dann { a, b } (2), die Wochentage (7) und zuletzt 0, 1, …, 9 (10 Elemente)."
    }
  ]
});
