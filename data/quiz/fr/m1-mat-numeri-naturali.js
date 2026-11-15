QBANK("fr", "m1-mat-numeri-naturali", {
  "f": [
    {
      "type": "mc",
      "q": "Quel est le successeur du nombre 99 ?",
      "options": [
        "98",
        "100",
        "101"
      ],
      "answer": 1,
      "explain": "Le successeur de n est n + 1 : 99 + 1 = 100."
    },
    {
      "type": "tf",
      "q": "Zéro est un nombre entier naturel.",
      "answer": true,
      "explain": "L'ensemble ℕ commence justement à 0 : ℕ = { 0, 1, 2, 3, … }."
    },
    {
      "type": "num",
      "q": "Combien y a-t-il de dizaines dans 370 ?",
      "answer": 37,
      "explain": "370 ÷ 10 = 37 dizaines."
    },
    {
      "type": "mc",
      "q": "Dans l'addition 14 + 9 = 23, comment s'appellent les nombres 14 et 9 ?",
      "options": [
        "facteurs",
        "premier terme et terme retranché",
        "termes"
      ],
      "answer": 2,
      "explain": "Les nombres que l'on additionne s'appellent les termes (addendes) ; le résultat est la somme."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le résultat d'une multiplication ?",
      "answer": [
        "produit",
        "le produit"
      ],
      "explain": "Dans une multiplication, les nombres sont les facteurs et le résultat est le produit."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Calcule : 4 × 7 + 36 ÷ 6 − 3",
      "answer": 31,
      "explain": "D'abord la multiplication et la division : 28 + 6 − 3. Puis de gauche à droite : 34 − 3 = 31."
    },
    {
      "type": "mc",
      "q": "Quel nombre correspond à 6 × 1000 + 0 × 100 + 4 × 10 + 9 ?",
      "options": [
        "6 490",
        "6 049",
        "6 409"
      ],
      "answer": 1,
      "explain": "6 000 + 0 + 40 + 9 = 6 049 : le zéro garde vide la place des centaines."
    },
    {
      "type": "num",
      "q": "Un cinéma a 24 rangées de 18 places chacune. Combien de places a-t-il en tout ?",
      "answer": 432,
      "unit": "places",
      "explain": "24 × 18 = 24 × 20 − 24 × 2 = 480 − 48 = 432 places."
    },
    {
      "type": "tf",
      "q": "En divisant 45 par 6, on obtient un quotient de 7 et un reste de 3.",
      "answer": true,
      "explain": "6 × 7 = 42 et 45 − 42 = 3 : la division n'est pas exacte, le reste est 3."
    },
    {
      "type": "num",
      "q": "Un magasin a 120 t-shirts. Il en vend 45 le matin et 38 l'après-midi. Combien de t-shirts restent-ils ?",
      "answer": 37,
      "unit": "t-shirts",
      "explain": "Vendus : 45 + 38 = 83. Il reste 120 − 83 = 37 t-shirts."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Calcule : 100 − [ 8 × (3 + 4) − 6 ] ÷ 5 × 2",
      "answer": 80,
      "explain": "Parenthèses : 3 + 4 = 7. Crochets : 8 × 7 = 56, 56 − 6 = 50. Puis de gauche à droite : 50 ÷ 5 = 10, 10 × 2 = 20. Enfin 100 − 20 = 80."
    },
    {
      "type": "mc",
      "q": "Sara calcule 12 + 6 ÷ 3 et trouve 6. Quelle erreur a-t-elle faite ?",
      "options": [
        "Elle a additionné avant de diviser",
        "Elle a divisé avant d'additionner",
        "Elle s'est trompée dans la table de 3"
      ],
      "answer": 0,
      "explain": "Elle a fait (12 + 6) ÷ 3 = 6. La division est prioritaire : 6 ÷ 3 = 2 puis 12 + 2 = 14."
    },
    {
      "type": "num",
      "q": "Pour une sortie, le car coûte 240 € au total, partagés en parts égales entre 24 élèves. Chaque élève paie aussi 12 € pour l'entrée du musée. Combien paie chaque élève en tout ?",
      "answer": 22,
      "unit": "€",
      "explain": "Car par élève : 240 ÷ 24 = 10 €. Total par élève : 10 + 12 = 22 €."
    },
    {
      "type": "tf",
      "q": "Le nombre 6 050 en écriture polynomiale est 6 × 1000 + 5 × 10.",
      "answer": true,
      "explain": "6 × 1000 = 6000 et 5 × 10 = 50 : la somme est 6050. Les centaines et les unités sont 0 et ne s'écrivent pas."
    },
    {
      "type": "order",
      "q": "Range ces expressions du plus petit au plus grand résultat.",
      "items": [
        "18 : 3 + 1",
        "2 × 5 + 1",
        "(4 + 2) × 3",
        "5 × 5 + 4"
      ],
      "explain": "Les résultats sont 7, 11, 18 et 29."
    }
  ]
});
