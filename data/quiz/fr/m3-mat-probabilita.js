QBANK("fr", "m3-mat-probabilita", {
 "f": [
  {
   "type": "mc",
   "q": "Combien y a-t-il de résultats possibles en lançant une pièce ?",
   "options": [
    "1",
    "2",
    "6"
   ],
   "answer": 1,
   "explain": "Une pièce a deux faces, il y a donc 2 résultats possibles : pile ou face."
  },
  {
   "type": "num",
   "q": "Quel est le mode de la série 2, 3, 3, 5, 3, 7 ?",
   "answer": 3,
   "explain": "Le mode est la valeur qui apparaît le plus souvent : 3 apparaît trois fois."
  },
  {
   "type": "tf",
   "q": "Un événement certain a une probabilité de 1.",
   "answer": true,
   "explain": "Un événement qui se produit toujours a une probabilité de 1 (c'est-à-dire 100 %)."
  },
  {
   "type": "mc",
   "q": "Dans une classe de 24 élèves, 12 sont des filles. Quelle est la fréquence relative des filles ?",
   "options": [
    "1/4",
    "12",
    "1/2"
   ],
   "answer": 2,
   "explain": "Fréquence relative = 12 ÷ 24 = 1/2 (soit 0,5 ou 50 %)."
  },
  {
   "type": "text",
   "q": "Comment s'appelle un événement qui ne peut jamais se produire ?",
   "answer": [
    "impossible",
    "événement impossible",
    "evenement impossible",
    "un événement impossible",
    "l'événement impossible"
   ],
   "explain": "Un événement qui ne peut jamais se produire est un événement impossible, de probabilité 0."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Gina a eu 6, 7, 9 et 8 aux quatre premiers contrôles. Quelle note doit-elle avoir au cinquième pour obtenir une moyenne de 8 ?",
   "answer": 10,
   "explain": "Pour avoir 8 de moyenne sur 5 notes, il faut un total de 8 × 5 = 40. Jusqu'ici : 6 + 7 + 9 + 8 = 30. Il lui faut 40 − 30 = 10."
  },
  {
   "type": "num",
   "q": "Je tire une carte d'un jeu de 40 cartes qui contient 4 as. Quelle est la probabilité, en pourcentage, de tirer un as ?",
   "answer": 10,
   "unit": "%",
   "explain": "P = cas favorables ÷ cas possibles = 4 ÷ 40 = 1/10 = 10 %."
  },
  {
   "type": "mc",
   "q": "Dans un sondage, 9 personnes sur 36 choisissent la glace au citron. Quelle est la fréquence relative ?",
   "options": [
    "0,9",
    "0,25",
    "0,36"
   ],
   "answer": 1,
   "explain": "Fréquence relative = 9 ÷ 36 = 1/4 = 0,25 (soit 25 %)."
  },
  {
   "type": "mc",
   "q": "Dans la série 4, 4, 5, 8, 9 la valeur 5 est…",
   "options": [
    "la moda",
    "la mediana",
    "la media"
   ],
   "answer": 1,
   "explain": "Les données sont déjà ordonnées et la valeur centrale est 5 : c'est la médiane. Le mode est 4 et la moyenne est 30 ÷ 5 = 6."
  },
  {
   "type": "tf",
   "q": "Dans un diagramme circulaire, un secteur de 54° représente 20 % des données.",
   "answer": false,
   "explain": "Faux : 54° sur 360° donne 54 ÷ 360 = 0,15, soit 15 %. 20 % correspondrait à 72°."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Une urne contient 2 boules rouges et 3 bleues. Je tire une boule, je la remets et j'en tire une autre. Quelle est la probabilité (en %) que les deux soient rouges ?",
   "answer": 16,
   "unit": "%",
   "explain": "Avec remise les tirages sont indépendants : P = 2/5 × 2/5 = 4/25 = 16 %."
  },
  {
   "type": "num",
   "q": "Un sachet contient 3 bonbons à la fraise et 2 à la menthe. J'en prends deux sans les remettre. Quelle est la probabilité (en %) qu'ils soient tous les deux à la fraise ?",
   "answer": 30,
   "unit": "%",
   "explain": "Premier tirage : 3/5. Il reste ensuite 2 fraises sur 4 bonbons : 2/4. P = 3/5 × 2/4 = 6/20 = 30 %."
  },
  {
   "type": "mc",
   "q": "Cinq amis ont une moyenne de 7 points à un jeu. Un sixième ami arrive et fait 13 points. Quelle est la nouvelle moyenne ?",
   "options": [
    "7,5",
    "8",
    "9",
    "10"
   ],
   "answer": 1,
   "explain": "Somme des cinq : 7 × 5 = 35. Avec le sixième : 35 + 13 = 48. Nouvelle moyenne : 48 ÷ 6 = 8."
  },
  {
   "type": "tf",
   "q": "En lançant deux dés, obtenir une somme de 7 est plus probable qu'obtenir une somme de 12.",
   "answer": true,
   "explain": "La somme 7 s'obtient de 6 façons sur 36 (1+6, 2+5, 3+4 et les paires inversées), la somme 12 d'une seule (6+6)."
  },
  {
   "type": "order",
   "q": "Classe ces événements du moins probable au plus probable.",
   "items": [
    "On obtient 7 avec un dé",
    "On obtient 6 avec un dé",
    "On obtient un nombre pair avec un dé",
    "On obtient un nombre inférieur à 6 avec un dé",
    "On obtient un nombre de 1 à 6 avec un dé"
   ],
   "explain": "Les probabilités sont : 0 (impossible), 1/6, 3/6 = 1/2, 5/6 et 1 (certain)."
  }
 ]
});
