QBANK("fr", "m1-mat-insiemi", {
  "f": [
    {
      "type": "mc",
      "q": "Quel symbole se lit « appartient à » ?",
      "options": [
        "∉",
        "∈",
        "⊂"
      ],
      "answer": 1,
      "explain": "Le symbole ∈ indique qu'un élément appartient à un ensemble, par exemple 4 ∈ {2, 4, 6}."
    },
    {
      "type": "tf",
      "q": "{1, 2, 3} et {3, 2, 1} sont le même ensemble.",
      "answer": true,
      "explain": "Dans un ensemble, l'ordre des éléments ne compte pas."
    },
    {
      "type": "num",
      "q": "Combien d'éléments possède l'ensemble A = { 2, 4, 6, 8, 10 } ?",
      "answer": 5,
      "explain": "Il suffit de les compter : 2, 4, 6, 8, 10 font 5 éléments, donc |A| = 5."
    },
    {
      "type": "mc",
      "q": "Quel symbole désigne la réunion de deux ensembles ?",
      "options": [
        "∩",
        "∪",
        "−"
      ],
      "answer": 1,
      "explain": "∪ est la réunion (tous les éléments des deux ensembles) ; ∩ est l'intersection."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le nombre d'éléments d'un ensemble ?",
      "answer": [
        "cardinal",
        "le cardinal",
        "cardinalité",
        "la cardinalité"
      ],
      "explain": "Le nombre d'éléments d'un ensemble s'appelle son cardinal et se note |A|."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "A = { x | x est un nombre entier naturel pair inférieur à 9 }. Quelle liste est correcte ?",
      "options": [
        "{ 2, 4, 6, 8 }",
        "{ 0, 2, 4, 6, 8 }",
        "{ 2, 4, 6, 8, 10 }"
      ],
      "answer": 1,
      "explain": "0 est un entier naturel pair et 10 n'est pas inférieur à 9 : A = { 0, 2, 4, 6, 8 }."
    },
    {
      "type": "num",
      "q": "A est l'ensemble des nombres pairs de 1 à 20 et B l'ensemble des multiples de 5 de 1 à 20. Combien d'éléments a A ∩ B ?",
      "answer": 2,
      "explain": "Les pairs sont 2, 4, …, 20 ; les multiples de 5 sont 5, 10, 15, 20. Ils ont en commun 10 et 20 : 2 éléments."
    },
    {
      "type": "mc",
      "q": "Si A = { 1, 2, 3, 4 } et B = { 2, 4 }, quelle relation est correcte ?",
      "options": [
        "A ⊂ B",
        "B ⊂ A",
        "B ∈ A"
      ],
      "answer": 1,
      "explain": "Chaque élément de B (2 et 4) est aussi dans A, donc B est un sous-ensemble de A : B ⊂ A."
    },
    {
      "type": "tf",
      "q": "Si A ∩ B = ∅, alors le nombre d'éléments de A ∪ B est |A| + |B|.",
      "answer": true,
      "explain": "S'il n'y a aucun élément commun, aucun élément n'est compté deux fois : on additionne simplement."
    },
    {
      "type": "num",
      "q": "U = { 1, 2, 3, …, 12 } et A est l'ensemble des diviseurs de 12. Combien d'éléments a le complémentaire de A par rapport à U ?",
      "answer": 6,
      "explain": "Les diviseurs de 12 sont 1, 2, 3, 4, 6, 12 : cela fait 6. Le complémentaire a 12 − 6 = 6 éléments (5, 7, 8, 9, 10, 11)."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Dans un groupe de 40 touristes, 25 parlent anglais, 20 parlent français et 8 ne parlent aucune des deux langues. Combien de touristes parlent les deux langues ?",
      "answer": 13,
      "explain": "Ceux qui parlent au moins une langue : 40 − 8 = 32. Avec |A ∪ B| = |A| + |B| − |A ∩ B| : 32 = 25 + 20 − x, donc x = 45 − 32 = 13."
    },
    {
      "type": "num",
      "q": "Le produit cartésien A × B contient 35 couples et A a 5 éléments. Combien d'éléments a B ?",
      "answer": 7,
      "explain": "Les couples sont au nombre de |A| × |B| : 5 × |B| = 35, donc |B| = 35 ÷ 5 = 7."
    },
    {
      "type": "mc",
      "q": "|A| = 12, |A ∪ B| = 20 et |A ∩ B| = 5. Que vaut |B| ?",
      "options": [
        "3",
        "13",
        "15"
      ],
      "answer": 1,
      "explain": "|A ∪ B| = |A| + |B| − |A ∩ B| → 20 = 12 + |B| − 5 → |B| = 20 − 12 + 5 = 13."
    },
    {
      "type": "tf",
      "q": "Les différences A − B et B − A sont toujours égales.",
      "answer": false,
      "explain": "Elles ne sont égales que dans des cas particuliers. Avec A = { 1, 2 } et B = { 2, 3 } : A − B = { 1 } alors que B − A = { 3 }."
    },
    {
      "type": "order",
      "q": "Range ces ensembles du plus petit au plus grand selon le nombre d'éléments.",
      "items": [
        "Les entiers naturels supérieurs à 5 et inférieurs à 6",
        "{ a, b, a, b }",
        "Les jours d'une semaine",
        "Les entiers naturels inférieurs à 10"
      ],
      "explain": "Le premier ensemble est vide (0 élément), puis { a, b } (2), les jours de la semaine (7) et enfin 0, 1, …, 9 (10 éléments)."
    }
  ]
});
