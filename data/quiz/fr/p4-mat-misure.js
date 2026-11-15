QBANK("fr", "p4-mat-misure", {
  "f": [
    {
      "type": "tf",
      "q": "1 litre est égal à 1000 millilitres.",
      "answer": true,
      "explain": "Oui : 1 l = 1000 ml, car « milli » veut dire un millième."
    },
    {
      "type": "num",
      "q": "Combien de grammes font 2 hg ?",
      "answer": 200,
      "unit": "g",
      "explain": "1 hg = 100 g, donc 2 × 100 = 200 g."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces unités mesure la capacité ?",
      "options": [
        "le kilogramme",
        "le litre",
        "le mètre"
      ],
      "answer": 1,
      "explain": "La capacité se mesure en litres ; le kilogramme mesure la masse et le mètre la longueur."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le poids du produit seul, sans l'emballage ?",
      "answer": [
        "poids net",
        "le poids net",
        "net"
      ],
      "explain": "Le poids net est le poids du produit seul ; avec l'emballage (tare) on obtient le poids brut."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces pièces vaut le plus ?",
      "options": [
        "50 c",
        "20 c",
        "1 €"
      ],
      "answer": 2,
      "explain": "1 € = 100 centimes, ce qui est plus que 50 c et 20 c."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un carton contient 6 bouteilles de 1,5 l. Combien de litres y a-t-il en tout ?",
      "answer": 9,
      "unit": "l",
      "explain": "6 × 1,5 = 9 l."
    },
    {
      "type": "mc",
      "q": "Quelle égalité est correcte ?",
      "options": [
        "2500 g = 250 hg",
        "2500 g = 2,5 hg",
        "2500 g = 25 hg"
      ],
      "answer": 2,
      "explain": "1 hg = 100 g, donc 2500 g : 100 = 25 hg."
    },
    {
      "type": "num",
      "q": "Un pot de miel a un poids net de 250 g et un poids brut de 340 g. Combien pèse le pot vide (la tare) ?",
      "answer": 90,
      "unit": "g",
      "explain": "T = PB − PN = 340 − 250 = 90 g."
    },
    {
      "type": "num",
      "q": "Un paquet de riz de 500 g coûte 1,20 €. Combien coûtent 3 kg de riz ?",
      "answer": 7.2,
      "unit": "€",
      "explain": "3 kg = 3000 g et 3000 : 500 = 6 paquets. Prix : 6 × 1,20 = 7,20 €."
    },
    {
      "type": "tf",
      "q": "Une bouteille de 75 cl contient plus d'1 litre.",
      "answer": false,
      "explain": "75 cl = 0,75 l, ce qui est moins de 1 l."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Pour un goûter il faut 20 verres de 25 cl de jus. Les bouteilles font 1,5 l. Combien de bouteilles faut-il acheter au minimum ?",
      "answer": 4,
      "explain": "20 × 25 cl = 500 cl = 5 l. 5 : 1,5 ≈ 3,3, donc 3 bouteilles ne suffisent pas : il en faut 4."
    },
    {
      "type": "mc",
      "q": "Marco transforme 3,4 kg en grammes ainsi : « je divise par 1000, donc 0,0034 g ». Quelle est l'erreur ?",
      "options": [
        "De kg à g on multiplie par 1000 : 3,4 kg = 3400 g",
        "Le bon résultat est 34 g",
        "On ne peut pas transformer des kilos en grammes"
      ],
      "answer": 0,
      "explain": "Le gramme est une unité plus petite que le kilo, donc le nombre doit devenir plus grand : 3,4 × 1000 = 3400 g."
    },
    {
      "type": "num",
      "q": "Tu achètes 2,5 kg d'oranges à 1,60 € le kg et 3 hg de fromage à 12 € le kg. Tu paies avec 10 €. Combien te rend-on ?",
      "answer": 2.4,
      "unit": "€",
      "explain": "Oranges : 2,5 × 1,60 = 4 €. Fromage : 3 hg = 0,3 kg, 0,3 × 12 = 3,60 €. Total 7,60 €. Monnaie : 10 − 7,60 = 2,40 €."
    },
    {
      "type": "order",
      "q": "Range ces capacités de la plus grande à la plus petite.",
      "items": [
        "1 hl",
        "30 l",
        "2500 cl",
        "5000 ml",
        "1 dl"
      ],
      "explain": "En litres : 1 hl = 100 l, 30 l, 2500 cl = 25 l, 5000 ml = 5 l, 1 dl = 0,1 l."
    },
    {
      "type": "tf",
      "q": "Trois petites bouteilles de 50 cl coûtent 0,75 € en tout. Une bouteille de 1,5 l à 0,70 € est plus avantageuse.",
      "answer": true,
      "explain": "3 × 50 cl = 150 cl = 1,5 l : la même quantité. 0,75 € contre 0,70 €, donc la grande bouteille est moins chère."
    }
  ]
});
