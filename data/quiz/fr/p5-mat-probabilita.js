QBANK("fr", "p5-mat-probabilita", {
  "f": [
    {
      "type": "mc",
      "q": "Qu'est-ce que le mode d'un ensemble de données ?",
      "options": [
        "La donnée qui apparaît le plus souvent",
        "La donnée qui est au milieu",
        "La somme de toutes les données"
      ],
      "answer": 0,
      "explain": "Le mode est la donnée qui a la plus grande fréquence, c'est-à-dire celle qui se répète le plus."
    },
    {
      "type": "tf",
      "q": "En lançant un dé ordinaire à 6 faces, obtenir un nombre supérieur à 6 est un événement impossible.",
      "answer": true,
      "explain": "Vrai : le dé n'a que les nombres de 1 à 6, donc un nombre supérieur à 6 ne peut jamais sortir."
    },
    {
      "type": "num",
      "q": "Quelle est la moyenne de 2, 8 et 11 ?",
      "answer": 7,
      "explain": "Somme : 2 + 8 + 11 = 21. Je divise par 3 données : 21 : 3 = 7."
    },
    {
      "type": "mc",
      "q": "Lequel de ces événements est certain ?",
      "options": [
        "En lançant un dé, on obtient 6",
        "En lançant un dé, on obtient un nombre inférieur à 7",
        "En lançant une pièce, on obtient pile"
      ],
      "answer": 1,
      "explain": "Un dé n'a que les nombres de 1 à 6, donc un nombre inférieur à 7 sort toujours : c'est un événement certain."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le nombre de fois où une réponse apparaît dans une enquête ?",
      "answer": [
        "fréquence",
        "la fréquence",
        "effectif",
        "l'effectif"
      ],
      "explain": "On l'appelle la fréquence : par exemple, si 6 élèves choisissent le foot, la fréquence du foot est 6."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Marco a eu ces notes : 6, 7, 9, 10. Quelle est sa moyenne ?",
      "answer": 8,
      "explain": "Somme : 6 + 7 + 9 + 10 = 32. Moyenne : 32 : 4 = 8."
    },
    {
      "type": "num",
      "q": "Quelle est la médiane de 8, 3, 12, 5, 9, 7 ?",
      "answer": 7.5,
      "tol": 0.01,
      "explain": "Dans l'ordre : 3, 5, 7, 8, 9, 12. Il y a 6 données (un nombre pair) : la médiane est la moyenne des deux valeurs centrales, (7 + 8) : 2 = 7,5."
    },
    {
      "type": "mc",
      "q": "En lançant un dé, quelle est la probabilité d'obtenir un nombre supérieur à 4 ?",
      "options": [
        "1/2",
        "1/3",
        "1/6"
      ],
      "answer": 1,
      "explain": "Il y a 2 cas favorables (le 5 et le 6) sur 6 possibles : 2/6 = 1/3."
    },
    {
      "type": "tf",
      "q": "Un sac contient 3 billes rouges et 1 bleue. Tirer une rouge est plus probable que tirer la bleue.",
      "answer": true,
      "explain": "Vrai : la probabilité de tirer une rouge est 3/4, celle de tirer la bleue est 1/4."
    },
    {
      "type": "num",
      "q": "Les tailles de quatre amis sont 138 cm, 142 cm, 150 cm et 145 cm. Quelle est l'étendue ?",
      "answer": 12,
      "unit": "cm",
      "explain": "Étendue = valeur la plus haute − valeur la plus basse = 150 − 138 = 12 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia a eu 6, 7 et 9 aux trois premiers contrôles. Quelle note doit-elle avoir au quatrième pour avoir une moyenne de 8 ?",
      "answer": 10,
      "explain": "Pour avoir 8 de moyenne sur 4 contrôles, il faut 8 × 4 = 32 points. Jusqu'ici elle a 6 + 7 + 9 = 22. Il lui faut 32 − 22 = 10."
    },
    {
      "type": "mc",
      "q": "Dans un village, 4 personnes gagnent 1000 € par mois et une personne en gagne 11 000. Quel indice décrit le mieux le revenu « typique » ?",
      "options": [
        "La moyenne (3000 €)",
        "La médiane (1000 €)",
        "La somme (15 000 €)"
      ],
      "answer": 1,
      "explain": "Une seule valeur très élevée fait monter la moyenne à 3000 €, qui ne ressemble presque à personne. La médiane (1000 €) décrit mieux la situation typique."
    },
    {
      "type": "tf",
      "q": "Un sac contient 3 billes rouges, 2 bleues et 5 vertes. La probabilité de NE PAS tirer une verte est 1/2.",
      "answer": true,
      "explain": "Les billes non vertes sont 3 + 2 = 5 sur 10 au total : 5/10 = 1/2."
    },
    {
      "type": "num",
      "q": "Un sac contient 5 billes rouges et 15 bleues. Quelle est la probabilité de tirer une rouge, exprimée en pourcentage ?",
      "answer": 25,
      "unit": "%",
      "explain": "Cas favorables : 5 sur 20 possibles : 5/20 = 1/4 = 25/100 = 25 %."
    },
    {
      "type": "order",
      "q": "Mets dans l'ordre les étapes pour trouver la médiane d'un nombre PAIR de données.",
      "items": [
        "Je range les données dans l'ordre croissant",
        "Je repère les deux valeurs centrales",
        "J'additionne les deux valeurs centrales",
        "Je divise la somme par 2"
      ],
      "explain": "Avec un nombre pair de données, il n'y a pas une seule valeur au milieu : on range les données, on prend les deux centrales et on en calcule la moyenne."
    }
  ]
});
