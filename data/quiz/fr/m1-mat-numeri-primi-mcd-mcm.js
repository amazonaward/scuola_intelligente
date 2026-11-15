QBANK("fr", "m1-mat-numeri-primi-mcd-mcm", {
  "f": [
    {
      "type": "mc",
      "q": "Lequel de ces nombres est divisible par 5 ?",
      "options": [
        "122",
        "135",
        "143"
      ],
      "answer": 1,
      "explain": "Un nombre est divisible par 5 s'il se termine par 0 ou 5 : 135."
    },
    {
      "type": "tf",
      "q": "Le nombre 9 est un nombre premier.",
      "answer": false,
      "explain": "9 = 3 × 3 : il a trois diviseurs (1, 3, 9), donc il est composé."
    },
    {
      "type": "mc",
      "q": "Combien de diviseurs a un nombre premier ?",
      "options": [
        "Un seul",
        "Une infinité",
        "Exactement deux"
      ],
      "answer": 2,
      "explain": "Un nombre premier n'est divisible que par 1 et par lui-même : il a exactement deux diviseurs."
    },
    {
      "type": "num",
      "q": "Quel est le plus petit nombre premier ?",
      "answer": 2,
      "explain": "Le nombre 1 n'est pas premier (il n'a qu'un diviseur). 2 a deux diviseurs, 1 et 2 : c'est le plus petit nombre premier."
    },
    {
      "type": "text",
      "q": "Comment s'appellent les nombres supérieurs à 1 qui ont plus de deux diviseurs ?",
      "answer": [
        "composés",
        "nombres composés",
        "les nombres composés",
        "composé"
      ],
      "explain": "Les nombres qui ont plus de deux diviseurs (comme 6 ou 15) sont dits composés."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Lequel de ces nombres est divisible par 9 ?",
      "options": [
        "5 272",
        "5 276",
        "5 274"
      ],
      "answer": 2,
      "explain": "Un nombre est divisible par 9 si la somme de ses chiffres l'est : 5 + 2 + 7 + 4 = 18."
    },
    {
      "type": "num",
      "q": "Combien de diviseurs a le nombre 36 ?",
      "answer": 9,
      "unit": "diviseurs",
      "explain": "Les diviseurs de 36 sont 1, 2, 3, 4, 6, 9, 12, 18, 36 : 9 en tout."
    },
    {
      "type": "mc",
      "q": "Si deux nombres sont premiers entre eux, combien vaut leur PGCD ?",
      "options": [
        "0",
        "1",
        "Leur produit"
      ],
      "answer": 1,
      "explain": "Premiers entre eux signifie que le seul diviseur commun est 1 : PGCD = 1."
    },
    {
      "type": "num",
      "q": "Une bande de tissu mesure 84 cm de long et 60 cm de large. On veut la découper en carrés tous égaux, les plus grands possible, sans chute. Combien mesure le côté de chaque carré ?",
      "answer": 12,
      "unit": "cm",
      "explain": "Le côté doit diviser 84 et 60 et être le plus grand : PGCD(84, 60) = 12 cm (84 = 2² × 3 × 7, 60 = 2² × 3 × 5)."
    },
    {
      "type": "tf",
      "q": "Tout nombre divisible par 4 est aussi divisible par 2.",
      "answer": true,
      "explain": "Si un nombre est multiple de 4, c'est un multiple de 2 × 2 ; il est donc pair et divisible par 2."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Trois amis courent dans le parc : Anna tous les 3 jours, Bruno tous les 4 jours et Carla tous les 6 jours. Aujourd'hui, ils courent tous ensemble. Dans combien de jours courront-ils de nouveau tous les trois ensemble ?",
      "answer": 12,
      "unit": "jours",
      "explain": "Il faut le PPCM(3, 4, 6) : 3 = 3, 4 = 2², 6 = 2 × 3 → 2² × 3 = 12 jours."
    },
    {
      "type": "num",
      "q": "Une maîtresse a 48 crayons, 72 cahiers et 60 gommes. Elle veut préparer le plus grand nombre possible de kits identiques, sans reste. Combien de kits prépare-t-elle ?",
      "answer": 12,
      "unit": "kits",
      "explain": "Il faut le PGCD(48, 72, 60) : 48 = 2⁴ × 3, 72 = 2³ × 3², 60 = 2² × 3 × 5 → facteurs communs avec le plus petit exposant : 2² × 3 = 12 kits."
    },
    {
      "type": "mc",
      "q": "Une de ces décompositions en facteurs premiers est fausse. Laquelle ?",
      "options": [
        "45 = 3 × 15",
        "84 = 2² × 3 × 7",
        "100 = 2² × 5²"
      ],
      "answer": 0,
      "explain": "15 n'est pas un nombre premier (15 = 3 × 5) : la bonne décomposition est 45 = 3² × 5."
    },
    {
      "type": "tf",
      "q": "Pour deux nombres quelconques, le produit de leur PGCD et de leur PPCM est égal au produit des deux nombres.",
      "answer": true,
      "explain": "Exemple avec 12 et 18 : PGCD = 6, PPCM = 36 et 6 × 36 = 216 = 12 × 18."
    },
    {
      "type": "order",
      "q": "Range ces valeurs de la plus petite à la plus grande.",
      "items": [
        "PGCD(9, 16)",
        "PPCM(4, 6)",
        "PGCD(30, 45)",
        "PPCM(4, 5)"
      ],
      "explain": "PGCD(9, 16) = 1, PPCM(4, 6) = 12, PGCD(30, 45) = 15, PPCM(4, 5) = 20."
    }
  ]
});
