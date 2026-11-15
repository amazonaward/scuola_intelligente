QBANK("fr", "p5-mat-operazioni-decimali", {
  "f": [
    {
      "type": "num",
      "q": "Combien font 6,4 + 2,3 ?",
      "answer": 8.7,
      "tol": 0.001,
      "explain": "Virgule sous virgule : 6,4 + 2,3 = 8,7."
    },
    {
      "type": "mc",
      "q": "Combien font 4,5 × 10 ?",
      "options": [
        "0,45",
        "45",
        "450"
      ],
      "answer": 1,
      "explain": "Multiplier par 10 déplace la virgule d'un rang vers la droite : 4,5 × 10 = 45."
    },
    {
      "type": "tf",
      "q": "Pour diviser 7,5 par 10, on déplace la virgule d'un rang vers la gauche.",
      "answer": true,
      "explain": "Vrai : 7,5 : 10 = 0,75. Diviser par 10 rend le nombre 10 fois plus petit."
    },
    {
      "type": "num",
      "q": "Combien font 12,9 − 4,4 ?",
      "answer": 8.5,
      "tol": 0.001,
      "explain": "12,9 − 4,4 = 8,5."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le premier chiffre après la virgule ? (un mot, au pluriel)",
      "answer": [
        "dixièmes",
        "les dixièmes",
        "dixième",
        "le dixième"
      ],
      "explain": "Le premier chiffre après la virgule indique les dixièmes (1/10) ; ensuite viennent les centièmes et les millièmes."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un paquet de pâtes coûte 1,35 €. Combien coûtent 4 paquets ?",
      "answer": 5.4,
      "tol": 0.001,
      "unit": "€",
      "explain": "1,35 × 4 = 5,40 €."
    },
    {
      "type": "num",
      "q": "Combien font 4,5 × 2,2 ?",
      "answer": 9.9,
      "tol": 0.001,
      "explain": "45 × 22 = 990. Il y a 1 + 1 = 2 décimales, donc 9,90 = 9,9."
    },
    {
      "type": "mc",
      "q": "Combien font 27,6 : 6 ?",
      "options": [
        "0,46",
        "46",
        "4,6"
      ],
      "answer": 2,
      "explain": "27 : 6 = 4 reste 3 ; j'abaisse le 6 et je mets la virgule : 36 : 6 = 6. Résultat 4,6. Vérification : 4,6 × 6 = 27,6."
    },
    {
      "type": "tf",
      "q": "Diviser un nombre par 0,1 donne un nombre plus petit.",
      "answer": false,
      "explain": "Faux : diviser par 0,1 revient à multiplier par 10, donc le nombre devient plus grand. Par exemple 3 : 0,1 = 30."
    },
    {
      "type": "num",
      "q": "Avec 20 €, tu achètes 3 glaces à 4,50 € chacune. Combien d'euros te rend-on ?",
      "answer": 6.5,
      "tol": 0.001,
      "unit": "€",
      "explain": "Dépense : 4,50 × 3 = 13,50 €. Monnaie : 20 − 13,50 = 6,50 €."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Une corde de 15,6 m est coupée en morceaux de 0,6 m chacun. Combien de morceaux obtient-on ?",
      "answer": 26,
      "explain": "15,6 : 0,6 = 156 : 6 = 26 morceaux (j'ai multiplié les deux nombres par 10)."
    },
    {
      "type": "mc",
      "q": "Lequel de ces calculs est faux ?",
      "options": [
        "3,2 × 10 = 32",
        "0,45 × 100 = 45",
        "6,5 : 100 = 6,05"
      ],
      "answer": 2,
      "explain": "6,5 : 100 = 0,065 : la virgule se déplace de 2 rangs vers la gauche. Les deux autres sont corrects."
    },
    {
      "type": "tf",
      "q": "Si on achète 3 kg de pommes à 2,40 € le kg et 2 kg de poires à 3,10 € le kg, on dépense moins de 14 €.",
      "answer": true,
      "explain": "Pommes : 2,40 × 3 = 7,20 €. Poires : 3,10 × 2 = 6,20 €. Total 13,40 €, c'est moins de 14 €."
    },
    {
      "type": "num",
      "q": "Tu as 50 €. Tu achètes 2,5 kg d'oranges à 1,80 € le kg et un pain à 2,30 €. Combien d'euros te reste-t-il ?",
      "answer": 43.2,
      "tol": 0.001,
      "unit": "€",
      "explain": "Oranges : 2,5 × 1,80 = 4,50 €. Dépense totale : 4,50 + 2,30 = 6,80 €. Il reste : 50 − 6,80 = 43,20 €."
    },
    {
      "type": "order",
      "q": "Classe les résultats du plus petit au plus grand.",
      "items": [
        "6,3 : 100",
        "0,4 × 0,2",
        "0,9 : 3",
        "0,5 + 0,15",
        "2,5 × 0,4"
      ],
      "explain": "6,3 : 100 = 0,063 ; 0,4 × 0,2 = 0,08 ; 0,9 : 3 = 0,3 ; 0,5 + 0,15 = 0,65 ; 2,5 × 0,4 = 1."
    }
  ]
});
