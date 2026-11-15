QBANK("de", "p4-mat-misure", {
  "f": [
    {
      "type": "tf",
      "q": "1 Liter sind 1000 Milliliter.",
      "answer": true,
      "explain": "Ja: 1 l = 1000 ml, denn «Milli» bedeutet ein Tausendstel."
    },
    {
      "type": "num",
      "q": "Wie viele Gramm sind 2 hg?",
      "answer": 200,
      "unit": "g",
      "explain": "1 hg = 100 g, also 2 × 100 = 200 g."
    },
    {
      "type": "mc",
      "q": "Welche dieser Einheiten misst das Fassungsvermögen?",
      "options": [
        "das Kilogramm",
        "der Liter",
        "der Meter"
      ],
      "answer": 1,
      "explain": "Das Fassungsvermögen misst man in Litern; das Kilogramm misst die Masse und der Meter die Länge."
    },
    {
      "type": "text",
      "q": "Wie heißt das Gewicht der Ware allein, ohne Verpackung?",
      "answer": [
        "nettogewicht",
        "das nettogewicht",
        "netto"
      ],
      "explain": "Das Nettogewicht ist das Gewicht der Ware allein; mit der Verpackung (Tara) ergibt sich das Bruttogewicht."
    },
    {
      "type": "mc",
      "q": "Welche dieser Münzen ist am meisten wert?",
      "options": [
        "50 c",
        "20 c",
        "1 €"
      ],
      "answer": 2,
      "explain": "1 € = 100 Cent, das ist mehr als 50 c und 20 c."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Ein Karton enthält 6 Flaschen zu je 1,5 l. Wie viele Liter sind es insgesamt?",
      "answer": 9,
      "unit": "l",
      "explain": "6 × 1,5 = 9 l."
    },
    {
      "type": "mc",
      "q": "Welche Gleichung ist richtig?",
      "options": [
        "2500 g = 250 hg",
        "2500 g = 2,5 hg",
        "2500 g = 25 hg"
      ],
      "answer": 2,
      "explain": "1 hg = 100 g, also 2500 g : 100 = 25 hg."
    },
    {
      "type": "num",
      "q": "Ein Honigglas hat ein Nettogewicht von 250 g und ein Bruttogewicht von 340 g. Wie schwer ist das leere Glas (die Tara)?",
      "answer": 90,
      "unit": "g",
      "explain": "Tara = Brutto − Netto = 340 − 250 = 90 g."
    },
    {
      "type": "num",
      "q": "Eine Packung Reis zu 500 g kostet 1,20 €. Wie viel kosten 3 kg Reis?",
      "answer": 7.2,
      "unit": "€",
      "explain": "3 kg = 3000 g und 3000 : 500 = 6 Packungen. Preis: 6 × 1,20 = 7,20 €."
    },
    {
      "type": "tf",
      "q": "Eine 75-cl-Flasche enthält mehr als 1 Liter.",
      "answer": false,
      "explain": "75 cl = 0,75 l, das ist weniger als 1 l."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Für eine Jause braucht man 20 Gläser Saft zu je 25 cl. Die Flaschen fassen 1,5 l. Wie viele Flaschen musst du mindestens kaufen?",
      "answer": 4,
      "explain": "20 × 25 cl = 500 cl = 5 l. 5 : 1,5 ≈ 3,3, also reichen 3 Flaschen nicht: man braucht 4."
    },
    {
      "type": "mc",
      "q": "Marco rechnet 3,4 kg so in Gramm um: «Ich teile durch 1000, also 0,0034 g». Was ist falsch?",
      "options": [
        "Von kg zu g multipliziert man mit 1000: 3,4 kg = 3400 g",
        "Das richtige Ergebnis ist 34 g",
        "Kilogramm kann man nicht in Gramm umrechnen"
      ],
      "answer": 0,
      "explain": "Das Gramm ist eine kleinere Einheit als das Kilo, also muss die Zahl größer werden: 3,4 × 1000 = 3400 g."
    },
    {
      "type": "num",
      "q": "Du kaufst 2,5 kg Orangen zu 1,60 € pro kg und 3 hg Käse zu 12 € pro kg. Du zahlst mit 10 €. Wie viel Wechselgeld bekommst du?",
      "answer": 2.4,
      "unit": "€",
      "explain": "Orangen: 2,5 × 1,60 = 4 €. Käse: 3 hg = 0,3 kg, 0,3 × 12 = 3,60 €. Summe 7,60 €. Wechselgeld: 10 − 7,60 = 2,40 €."
    },
    {
      "type": "order",
      "q": "Ordne diese Fassungsvermögen von der größten zur kleinsten.",
      "items": [
        "1 hl",
        "30 l",
        "2500 cl",
        "5000 ml",
        "1 dl"
      ],
      "explain": "In Litern: 1 hl = 100 l, 30 l, 2500 cl = 25 l, 5000 ml = 5 l, 1 dl = 0,1 l."
    },
    {
      "type": "tf",
      "q": "Drei Flaschen zu 50 cl kosten zusammen 0,75 €. Eine 1,5-l-Flasche für 0,70 € ist günstiger.",
      "answer": true,
      "explain": "3 × 50 cl = 150 cl = 1,5 l: dieselbe Menge. 0,75 € gegen 0,70 €, also ist die große Flasche günstiger."
    }
  ]
});
