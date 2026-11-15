QBANK("en", "p4-mat-misure", {
  "f": [
    {
      "type": "tf",
      "q": "1 litre equals 1000 millilitres.",
      "answer": true,
      "explain": "Yes: 1 l = 1000 ml, because «milli» means one thousandth."
    },
    {
      "type": "num",
      "q": "How many grams are 2 hg?",
      "answer": 200,
      "unit": "g",
      "explain": "1 hg = 100 g, so 2 × 100 = 200 g."
    },
    {
      "type": "mc",
      "q": "Which of these is a unit for measuring capacity?",
      "options": [
        "the kilogram",
        "the litre",
        "the metre"
      ],
      "answer": 1,
      "explain": "Capacity is measured in litres; the kilogram measures mass and the metre measures length."
    },
    {
      "type": "text",
      "q": "What is the weight of the product alone, without the container, called?",
      "answer": [
        "net weight",
        "net",
        "the net weight"
      ],
      "explain": "The net weight is the weight of the product alone; adding the container (tare) gives the gross weight."
    },
    {
      "type": "mc",
      "q": "Which of these coins is worth the most?",
      "options": [
        "50 c",
        "20 c",
        "1 €"
      ],
      "answer": 2,
      "explain": "1 € = 100 cents, which is more than 50 c and 20 c."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A box holds 6 bottles of 1.5 l. How many litres are there in total?",
      "answer": 9,
      "unit": "l",
      "explain": "6 × 1.5 = 9 l."
    },
    {
      "type": "mc",
      "q": "Which equality is correct?",
      "options": [
        "2500 g = 250 hg",
        "2500 g = 2.5 hg",
        "2500 g = 25 hg"
      ],
      "answer": 2,
      "explain": "1 hg = 100 g, so 2500 g : 100 = 25 hg."
    },
    {
      "type": "num",
      "q": "A jar of honey has a net weight of 250 g and a gross weight of 340 g. How much does the empty jar (the tare) weigh?",
      "answer": 90,
      "unit": "g",
      "explain": "T = PL − PN = 340 − 250 = 90 g."
    },
    {
      "type": "num",
      "q": "A pack of rice of 500 g costs 1.20 €. How much do 3 kg of rice cost?",
      "answer": 7.2,
      "unit": "€",
      "explain": "3 kg = 3000 g and 3000 : 500 = 6 packs. Cost: 6 × 1.20 = 7.20 €."
    },
    {
      "type": "tf",
      "q": "A 75 cl bottle holds more than 1 litre.",
      "answer": false,
      "explain": "75 cl = 0.75 l, which is less than 1 l."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "For a snack you need 20 glasses of 25 cl of juice. The bottles hold 1.5 l. What is the least number of bottles you must buy?",
      "answer": 4,
      "explain": "20 × 25 cl = 500 cl = 5 l. 5 : 1.5 ≈ 3.3, so 3 bottles are not enough: you need 4."
    },
    {
      "type": "mc",
      "q": "Marco converts 3.4 kg into grams like this: «I divide by 1000, so 0.0034 g». What is the mistake?",
      "options": [
        "From kg to g you multiply by 1000: 3.4 kg = 3400 g",
        "The right result is 34 g",
        "Kilograms cannot be turned into grams"
      ],
      "answer": 0,
      "explain": "The gram is a smaller unit than the kilo, so the number must get bigger: 3.4 × 1000 = 3400 g."
    },
    {
      "type": "num",
      "q": "You buy 2.5 kg of oranges at 1.60 € per kg and 3 hg of cheese at 12 € per kg. You pay with 10 €. How much change do you get?",
      "answer": 2.4,
      "unit": "€",
      "explain": "Oranges: 2.5 × 1.60 = 4 €. Cheese: 3 hg = 0.3 kg, 0.3 × 12 = 3.60 €. Total 7.60 €. Change: 10 − 7.60 = 2.40 €."
    },
    {
      "type": "order",
      "q": "Put these capacities in order, from the largest to the smallest.",
      "items": [
        "1 hl",
        "30 l",
        "2500 cl",
        "5000 ml",
        "1 dl"
      ],
      "explain": "In litres: 1 hl = 100 l, 30 l, 2500 cl = 25 l, 5000 ml = 5 l, 1 dl = 0.1 l."
    },
    {
      "type": "tf",
      "q": "Three 50 cl bottles cost 0.75 € in all. A 1.5 l bottle at 0.70 € is a better deal.",
      "answer": true,
      "explain": "3 × 50 cl = 150 cl = 1.5 l: the same amount. It costs 0.75 € against 0.70 €, so the big bottle is cheaper."
    }
  ]
});
