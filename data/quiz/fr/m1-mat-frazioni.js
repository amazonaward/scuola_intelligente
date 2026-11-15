QBANK("fr", "m1-mat-frazioni", {
  "f": [
    {
      "type": "mc",
      "q": "Dans la fraction 5/8, quel nombre est le dénominateur ?",
      "options": [
        "5",
        "8",
        "13"
      ],
      "answer": 1,
      "explain": "Le dénominateur est le nombre du bas : il indique en combien de parts égales on partage l'entier."
    },
    {
      "type": "tf",
      "q": "La fraction 7/7 est égale à 1.",
      "answer": true,
      "explain": "7 ÷ 7 = 1 : c'est une fraction apparente."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces fractions est propre ?",
      "options": [
        "9/5",
        "6/6",
        "4/9"
      ],
      "answer": 2,
      "explain": "Elle est propre si le numérateur est plus petit que le dénominateur : 4 &lt; 9."
    },
    {
      "type": "num",
      "q": "Combien font les 3/4 de 20 ?",
      "answer": 15,
      "explain": "20 ÷ 4 = 5 ; 5 × 3 = 15."
    },
    {
      "type": "text",
      "q": "Comment s'appelle une fraction dont le numérateur est plus grand que le dénominateur (sans en être un multiple) ?",
      "answer": [
        "impropre",
        "fraction impropre",
        "une fraction impropre",
        "la fraction impropre"
      ],
      "explain": "Une fraction dont le numérateur dépasse le dénominateur vaut plus d'un entier : elle est impropre."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Quelle fraction est équivalente à 3/5 ?",
      "options": [
        "9/20",
        "6/15",
        "6/10"
      ],
      "answer": 2,
      "explain": "En multipliant le numérateur et le dénominateur par 2, on obtient 6/10."
    },
    {
      "type": "mc",
      "q": "Comment écrit-on 17/5 sous forme de nombre mixte ?",
      "options": [
        "2 et 3/5",
        "3 et 2/5",
        "3 et 1/5"
      ],
      "answer": 1,
      "explain": "17 ÷ 5 = 3 reste 2, donc 3 entiers et 2/5."
    },
    {
      "type": "num",
      "q": "Un cycliste a parcouru les 2/3 d'une course de 90 km. Combien de kilomètres a-t-il parcourus ?",
      "answer": 60,
      "unit": "km",
      "explain": "90 ÷ 3 = 30 ; 30 × 2 = 60 km."
    },
    {
      "type": "mc",
      "q": "Combien font 2/3 × 9/4 ?",
      "options": [
        "3/2",
        "11/7",
        "6/7"
      ],
      "answer": 0,
      "explain": "On multiplie les numérateurs et les dénominateurs : 18/12 ; en divisant par 6 on obtient 3/2."
    },
    {
      "type": "tf",
      "q": "Entre 3/5 et 2/3, la plus grande fraction est 3/5.",
      "answer": false,
      "explain": "Avec le dénominateur commun 15 : 3/5 = 9/15 et 2/3 = 10/15. Donc 2/3 est la plus grande."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Une couturière a 36 m de tissu. Elle en utilise 1/4 pour une robe et 1/3 pour un rideau. Combien de mètres de tissu reste-t-il ?",
      "answer": 15,
      "unit": "m",
      "explain": "Robe : 36 ÷ 4 = 9 m. Rideau : 36 ÷ 3 = 12 m. Utilisé : 9 + 12 = 21 m ; il reste 36 − 21 = 15 m."
    },
    {
      "type": "mc",
      "q": "Quelle est la valeur de l'expression 1/2 + 1/3 × 3/4 ?",
      "options": [
        "5/7",
        "5/8",
        "3/4"
      ],
      "answer": 2,
      "explain": "D'abord la multiplication : 1/3 × 3/4 = 1/4. Ensuite 1/2 + 1/4 = 2/4 + 1/4 = 3/4."
    },
    {
      "type": "tf",
      "q": "Marco dit : « Pour faire 2/3 + 4/5, j'additionne les numérateurs et les dénominateurs et j'obtiens 6/8 ». Son raisonnement est correct.",
      "answer": false,
      "explain": "C'est faux : il faut un dénominateur commun (15) : 10/15 + 12/15 = 22/15."
    },
    {
      "type": "num",
      "q": "Une bouteille remplie aux 3/5 contient 1,2 litre d'eau. Combien de litres contient-elle quand elle est pleine ?",
      "answer": 2,
      "tol": 0.01,
      "unit": "L",
      "explain": "Problème inverse : 1,2 ÷ 3 = 0,4 litre pour 1/5 ; 0,4 × 5 = 2 litres."
    },
    {
      "type": "order",
      "q": "Mets dans l'ordre les étapes pour calculer 1/4 + 2/3.",
      "items": [
        "Je trouve le ppcm des dénominateurs : 12",
        "Je transforme les fractions : 3/12 et 8/12",
        "J'additionne les numérateurs : 11/12",
        "Je vérifie si on peut simplifier"
      ],
      "explain": "D'abord le dénominateur commun (ppcm), puis les fractions équivalentes, puis la somme et enfin la simplification."
    }
  ]
});
