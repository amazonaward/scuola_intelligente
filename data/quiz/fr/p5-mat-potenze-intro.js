QBANK("fr", "p5-mat-potenze-intro", {
  "f": [
    {
      "type": "num",
      "q": "Combien font 4<sup>3</sup> ?",
      "answer": 64,
      "explain": "4 × 4 × 4 = 16 × 4 = 64."
    },
    {
      "type": "mc",
      "q": "Combien vaut 1<sup>100</sup> ?",
      "options": [
        "0",
        "1",
        "100"
      ],
      "answer": 1,
      "explain": "1 multiplié par lui-même, même 100 fois, reste toujours 1."
    },
    {
      "type": "tf",
      "q": "L'exposant indique combien de fois la base est multipliée par elle-même.",
      "answer": true,
      "explain": "Vrai : dans 2<sup>5</sup>, l'exposant 5 dit que la base 2 apparaît 5 fois comme facteur."
    },
    {
      "type": "num",
      "q": "Combien font 6<sup>2</sup> ?",
      "answer": 36,
      "explain": "6 × 6 = 36."
    },
    {
      "type": "text",
      "q": "Élever un nombre à l'exposant 2, c'est aussi l'élever « au… » (un mot).",
      "answer": [
        "carré",
        "au carré"
      ],
      "explain": "L'exposant 2 s'appelle « carré », car l'aire d'un carré se calcule côté × côté."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Combien font 2<sup>3</sup> + 3<sup>2</sup> ?",
      "answer": 17,
      "explain": "2<sup>3</sup> = 8 et 3<sup>2</sup> = 9. Donc 8 + 9 = 17."
    },
    {
      "type": "num",
      "q": "Une nouvelle est envoyée à 4 amis ; chacun l'envoie à 4 autres, et ainsi de suite. Combien de personnes la reçoivent au troisième tour ?",
      "answer": 64,
      "explain": "1er tour : 4 ; 2e tour : 4 × 4 = 16 ; 3e tour : 4 × 4 × 4 = 4<sup>3</sup> = 64 personnes."
    },
    {
      "type": "mc",
      "q": "Comment écrit-on 6 000 000 avec une puissance de 10 (6 fois une puissance de 10) ?",
      "options": [
        "6 × 10<sup>5</sup>",
        "6 × 10<sup>6</sup>",
        "6 × 10<sup>7</sup>"
      ],
      "answer": 1,
      "explain": "6 000 000 = 6 suivi de 6 zéros, donc 6 × 10<sup>6</sup>."
    },
    {
      "type": "tf",
      "q": "3<sup>4</sup> est égal à 4<sup>3</sup>.",
      "answer": false,
      "explain": "Faux : 3<sup>4</sup> = 3 × 3 × 3 × 3 = 81, alors que 4<sup>3</sup> = 4 × 4 × 4 = 64. On ne peut pas échanger la base et l'exposant."
    },
    {
      "type": "num",
      "q": "Quel nombre est écrit sous la forme 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 7 × 10<sup>0</sup> ?",
      "answer": 357,
      "explain": "3 × 100 + 5 × 10 + 7 × 1 = 300 + 50 + 7 = 357."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Calcule 5<sup>2</sup> − 2<sup>4</sup>.",
      "answer": 9,
      "explain": "5<sup>2</sup> = 25 et 2<sup>4</sup> = 16. Donc 25 − 16 = 9."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces égalités est correcte ?",
      "options": [
        "2<sup>5</sup> = 25",
        "4<sup>3</sup> = 12",
        "3<sup>3</sup> = 27",
        "5<sup>0</sup> = 0"
      ],
      "answer": 2,
      "explain": "3<sup>3</sup> = 3 × 3 × 3 = 27. Les autres sont des erreurs classiques : 2<sup>5</sup> = 32 (pas 25), 4<sup>3</sup> = 64 (pas 4 × 3) et 5<sup>0</sup> = 1."
    },
    {
      "type": "tf",
      "q": "Le nombre 2<sup>10</sup> est plus grand que 10<sup>3</sup>.",
      "answer": true,
      "explain": "Vrai : 2<sup>10</sup> = 1024, alors que 10<sup>3</sup> = 1000. Une base plus petite avec un exposant plus grand peut dépasser l'autre."
    },
    {
      "type": "num",
      "q": "Une colonie de bactéries double chaque heure. À 8 h il y en a 5. Combien y en a-t-il à 11 h ?",
      "answer": 40,
      "explain": "En 3 heures, le nombre double 3 fois : 5 × 2<sup>3</sup> = 5 × 8 = 40."
    },
    {
      "type": "order",
      "q": "Mets dans l'ordre les étapes pour calculer 3<sup>4</sup>.",
      "items": [
        "J'écris la multiplication 3 × 3 × 3 × 3",
        "3 × 3 = 9",
        "9 × 3 = 27",
        "27 × 3 = 81"
      ],
      "explain": "J'écris d'abord les quatre facteurs égaux, puis je multiplie pas à pas : 9, puis 27, enfin 81."
    }
  ]
});
