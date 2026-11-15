QBANK("fr", "m2-mat-radici", {
 "f": [
  {
   "type": "num",
   "q": "Combien font √121 ?",
   "answer": 11,
   "explain": "11 × 11 = 121, donc √121 = 11."
  },
  {
   "type": "mc",
   "q": "Quelle opération est l'inverse de l'élévation au carré ?",
   "options": [
    "La racine carrée",
    "L'addition",
    "La division par 2"
   ],
   "answer": 0,
   "explain": "Si 7² = 49, alors √49 = 7 : la racine « annule » le carré."
  },
  {
   "type": "tf",
   "q": "√100 = 50.",
   "answer": false,
   "explain": "Faux : 10 × 10 = 100, donc √100 = 10. 50 est la moitié de 100, pas sa racine."
  },
  {
   "type": "mc",
   "q": "Le carré de 9 est…",
   "options": [
    "18",
    "81",
    "99"
   ],
   "answer": 1,
   "explain": "9² = 9 × 9 = 81 (et non 9 × 2 = 18)."
  },
  {
   "type": "text",
   "q": "Comment s'appelle le signe √ en mathématiques ?",
   "answer": [
    "racine",
    "radical",
    "signe radical",
    "racine carrée",
    "le radical"
   ],
   "explain": "On l'appelle signe radical : √9 se lit « racine carrée de 9 »."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un potager carré a une aire de 169 m². Combien de mètres de grillage faut-il pour l'entourer ?",
   "answer": 52,
   "unit": "m",
   "explain": "Côté = √169 = 13 m. Périmètre = 4 × 13 = 52 m."
  },
  {
   "type": "num",
   "q": "Une table basse carrée a une aire de 2,25 m². Combien mesure son côté ?",
   "answer": 1.5,
   "unit": "m",
   "explain": "1,5 × 1,5 = 2,25, donc le côté est √2,25 = 1,5 m."
  },
  {
   "type": "mc",
   "q": "Combien font √(100 − 36) ?",
   "options": [
    "4",
    "8",
    "64"
   ],
   "answer": 1,
   "explain": "On calcule d'abord sous la racine : 100 − 36 = 64, puis √64 = 8. Ce n'est pas 10 − 6 = 4."
  },
  {
   "type": "num",
   "q": "Un nombre est décomposé en 2⁶ × 7². Combien vaut sa racine carrée ?",
   "answer": 56,
   "explain": "On divise les exposants par 2 : 2³ × 7¹ = 8 × 7 = 56."
  },
  {
   "type": "tf",
   "q": "√0,81 = 0,9.",
   "answer": true,
   "explain": "0,9 × 0,9 = 0,81, donc √0,81 = 0,9."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Deux massifs carrés ont des aires de 25 m² et 144 m². On les réunit en un seul massif carré d'aire égale à la somme des deux. Combien mesure son côté ?",
   "answer": 13,
   "unit": "m",
   "explain": "Aire totale : 25 + 144 = 169 m². Côté = √169 = 13 m (et non 5 + 12 = 17)."
  },
  {
   "type": "tf",
   "q": "Si l'aire d'un carré devient 4 fois plus grande, son côté devient aussi 4 fois plus grand.",
   "answer": false,
   "explain": "Faux : le côté est la racine de l'aire et √4 = 2, donc le côté double. Exemple : aire 9 → côté 3 ; aire 36 → côté 6."
  },
  {
   "type": "mc",
   "q": "Anna dit : « √50 = 25, parce que 25 + 25 = 50 ». Quelle est son erreur ?",
   "options": [
    "Elle a cherché la moitié de 50, mais la racine est le nombre qui multiplié par lui-même donne 50 : environ 7,07.",
    "Elle devait écrire √50 = 5.",
    "Il n'y a pas d'erreur : la racine est toujours la moitié."
   ],
   "answer": 0,
   "explain": "En effet 25 × 25 = 625, et non 50. Comme 7² = 49 et 8² = 64, √50 est un peu plus de 7."
  },
  {
   "type": "num",
   "q": "Combien y a-t-il de nombres entiers entre √10 et √90 (extrémités exclues) ?",
   "answer": 6,
   "explain": "3² = 9 < 10 < 16 = 4², donc √10 est entre 3 et 4 ; 9² = 81 < 90 < 100, donc √90 est entre 9 et 10. Les entiers entre les deux sont 4, 5, 6, 7, 8, 9 : cela fait 6."
  },
  {
   "type": "order",
   "q": "Range du plus petit au plus grand.",
   "items": [
    "6,9",
    "√48",
    "7",
    "√50"
   ],
   "explain": "√48 ≈ 6,93 (en effet 6,9² = 47,61 < 48), 7 = √49, √50 ≈ 7,07. Ordre : 6,9 < √48 < 7 < √50."
  }
 ]
});
