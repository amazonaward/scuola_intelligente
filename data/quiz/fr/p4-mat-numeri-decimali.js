QBANK("fr", "p4-mat-numeri-decimali", {
  "f": [
    {
      "type": "mc",
      "q": "Comment lit-on 0,8 ?",
      "options": [
        "huit dixièmes",
        "huit centièmes",
        "huit millièmes"
      ],
      "answer": 0,
      "explain": "Le premier chiffre après la virgule indique les dixièmes : 0,8 = 8 dixièmes."
    },
    {
      "type": "tf",
      "q": "Dans le nombre 8,6 le chiffre 6 indique les centièmes.",
      "answer": false,
      "explain": "C'est le premier chiffre après la virgule, donc il indique les dixièmes (6 dixièmes)."
    },
    {
      "type": "num",
      "q": "Combien font 0,5 + 0,3 ?",
      "answer": 0.8,
      "explain": "5 dixièmes + 3 dixièmes = 8 dixièmes, soit 0,8."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le signe qui sépare la partie entière de la partie décimale d'un nombre (en Italie) ?",
      "answer": [
        "virgule",
        "la virgule"
      ],
      "explain": "En Italie on utilise la virgule (3,14) ; dans d'autres pays on utilise le point (3.14)."
    },
    {
      "type": "mc",
      "q": "Quel nombre est égal à 2,50 ?",
      "options": [
        "2,05",
        "2,5",
        "25"
      ],
      "answer": 1,
      "explain": "Les zéros à la fin après la virgule ne changent pas la valeur : 2,50 = 2,5."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Combien font 7,25 − 2,5 ?",
      "answer": 4.75,
      "explain": "Aligne virgule sous virgule : 7,25 − 2,50 = 4,75."
    },
    {
      "type": "mc",
      "q": "Quel nombre est compris entre 3,4 et 3,5 ?",
      "options": [
        "3,6",
        "3,3",
        "3,45"
      ],
      "answer": 2,
      "explain": "3,4 = 3,40 et 3,5 = 3,50 : 3,45 est entre les deux."
    },
    {
      "type": "num",
      "q": "Combien font 735 : 100 ?",
      "answer": 7.35,
      "explain": "Diviser par 100 déplace la virgule de 2 rangs vers la gauche : 7,35."
    },
    {
      "type": "tf",
      "q": "0,7 est plus grand que 0,65.",
      "answer": true,
      "explain": "0,7 = 0,70 et 70 centièmes sont plus que 65 centièmes (7 dixièmes contre 6 dixièmes)."
    },
    {
      "type": "num",
      "q": "Un crayon mesure 0,175 m de long. Combien cela fait-il de millimètres ?",
      "answer": 175,
      "unit": "mm",
      "explain": "1 m = 1000 mm, donc 0,175 × 1000 = 175 mm (la virgule se déplace de 3 rangs)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia achète 2 cahiers à 1,35 € pièce et un stylo à 0,95 €. Elle paie avec 5 €. Combien lui rend-on ?",
      "answer": 1.35,
      "unit": "€",
      "explain": "Cahiers : 1,35 + 1,35 = 2,70 €. Avec le stylo : 2,70 + 0,95 = 3,65 €. Monnaie : 5 − 3,65 = 1,35 €."
    },
    {
      "type": "mc",
      "q": "Luca calcule 6,3 + 4,25 et écrit 10,28. Quelle erreur a-t-il faite ?",
      "options": [
        "Il s'est trompé en additionnant la partie entière",
        "Le résultat est juste",
        "Il a additionné 3 et 25 comme des entiers : il devait aligner 6,30 + 4,25 = 10,55"
      ],
      "answer": 2,
      "explain": "3 dixièmes et 25 centièmes ne s'additionnent pas comme 28 : 6,3 = 6,30, donc 30 + 25 = 55 centièmes et le total est 10,55."
    },
    {
      "type": "num",
      "q": "Un ruban mesure 3,6 m. Tu en coupes 3 morceaux de 0,45 m chacun. Combien de mètres de ruban reste-t-il ?",
      "answer": 2.25,
      "unit": "m",
      "explain": "Coupé : 0,45 + 0,45 + 0,45 = 1,35 m. Il reste 3,60 − 1,35 = 2,25 m."
    },
    {
      "type": "order",
      "q": "Range ces nombres du plus grand au plus petit.",
      "items": [
        "2,5",
        "2,45",
        "2,4",
        "2,399",
        "2,04"
      ],
      "explain": "Compare d'abord les dixièmes : 2,5 > 2,45 > 2,4 (4 dixièmes et 0 centième) > 2,399 > 2,04."
    },
    {
      "type": "mc",
      "q": "Tu pars de 4,07, tu le multiplies par 10, puis tu divises le résultat par 100. Quel nombre obtiens-tu ?",
      "options": [
        "4,07",
        "0,0407",
        "40,7",
        "0,407"
      ],
      "answer": 3,
      "explain": "4,07 × 10 = 40,7 ; puis 40,7 : 100 = 0,407."
    }
  ]
});
