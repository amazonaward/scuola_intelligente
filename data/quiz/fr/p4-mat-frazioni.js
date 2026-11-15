QBANK("fr", "p4-mat-frazioni", {
  "f": [
    {
      "type": "mc",
      "q": "Quelle fraction se lit « trois septièmes » ?",
      "options": [
        "7/3",
        "3/7",
        "3/10"
      ],
      "answer": 1,
      "explain": "« Trois septièmes » a pour numérateur 3 et pour dénominateur 7 : 3/7."
    },
    {
      "type": "tf",
      "q": "Dans la fraction 5/9, le numérateur est 5.",
      "answer": true,
      "explain": "Le numérateur est le nombre au-dessus de la barre de fraction : 5."
    },
    {
      "type": "mc",
      "q": "Une tablette de chocolat a 10 carrés égaux et tu en manges 1. Quelle fraction as-tu mangée ?",
      "options": [
        "1/10",
        "10/1",
        "1/9"
      ],
      "answer": 0,
      "explain": "L'entier est partagé en 10 parts égales et tu en prends 1 : 1/10."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le nombre écrit au-dessus de la barre de fraction ?",
      "answer": [
        "numérateur",
        "le numérateur"
      ],
      "explain": "Le numérateur dit combien de parts on prend."
    },
    {
      "type": "order",
      "q": "Range de la plus petite à la plus grande.",
      "items": [
        "1/10",
        "4/10",
        "6/10",
        "9/10"
      ],
      "explain": "Avec le même dénominateur, la fraction au plus grand numérateur est la plus grande."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un ruban mesure 36 cm. Tu en utilises 5/6. Combien de centimètres utilises-tu ?",
      "answer": 30,
      "unit": "cm",
      "explain": "36 : 6 = 6 (un sixième), puis 6 × 5 = 30 cm."
    },
    {
      "type": "mc",
      "q": "Quelle fraction est équivalente à 3/5 ?",
      "options": [
        "6/10",
        "3/10",
        "5/3"
      ],
      "answer": 0,
      "explain": "En multipliant le numérateur et le dénominateur par 2 : 3/5 = 6/10."
    },
    {
      "type": "tf",
      "q": "5/5 est une fraction apparente.",
      "answer": true,
      "explain": "Le numérateur 5 est un multiple du dénominateur 5 : 5/5 = 1 entier."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces fractions est la plus petite ?",
      "options": [
        "2/3",
        "2/5",
        "2/4"
      ],
      "answer": 1,
      "explain": "Elles ont le même numérateur : la plus petite est celle qui a le plus grand dénominateur, soit 2/5."
    },
    {
      "type": "num",
      "q": "Luc a 45 euros et en dépense 2/5. Combien d'euros dépense-t-il ?",
      "answer": 18,
      "unit": "€",
      "explain": "45 : 5 = 9 (un cinquième), puis 9 × 2 = 18 euros."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Anna a 60 images à collectionner. Elle en donne 1/4 à Marco et 1/3 à Sara. Combien lui en reste-t-il ?",
      "answer": 25,
      "unit": "images",
      "explain": "1/4 de 60 = 15 ; 1/3 de 60 = 20. Elle en donne 15 + 20 = 35, il lui en reste 60 − 35 = 25."
    },
    {
      "type": "mc",
      "q": "Sofia dit : « 2/3 = 4/9, car j'ai multiplié le numérateur par 2 et le dénominateur par 3. » Où est l'erreur ?",
      "options": [
        "Il faut multiplier en haut et en bas par le même nombre",
        "Il n'y a aucune erreur",
        "2/3 ne peut pas être transformée"
      ],
      "answer": 0,
      "explain": "Pour obtenir une fraction équivalente, on multiplie le numérateur et le dénominateur par le même nombre : 2/3 = 4/6."
    },
    {
      "type": "tf",
      "q": "Si deux fractions ont le même numérateur, la plus grande est celle qui a le plus grand dénominateur.",
      "answer": false,
      "explain": "C'est le contraire : avec un dénominateur plus grand, les parts sont plus petites, donc 1/3 est plus grand que 1/6."
    },
    {
      "type": "order",
      "q": "Range de la plus petite à la plus grande.",
      "items": [
        "1/4",
        "1/3",
        "1/2",
        "2/3",
        "3/4"
      ],
      "explain": "Avec le numérateur 1, le plus petit dénominateur donne la plus grande fraction : 1/4 < 1/3 < 1/2. Ensuite 2/3 est un peu plus que 1/2 et 3/4 est encore plus grand."
    },
    {
      "type": "num",
      "q": "Un réservoir contient 48 litres d'eau. On en utilise 3/8. Combien de litres reste-t-il ?",
      "answer": 30,
      "unit": "litres",
      "explain": "48 : 8 = 6 ; 6 × 3 = 18 litres utilisés. Il reste 48 − 18 = 30 litres."
    }
  ]
});
