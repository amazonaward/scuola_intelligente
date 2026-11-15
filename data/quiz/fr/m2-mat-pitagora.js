QBANK("fr", "m2-mat-pitagora", {
 "f": [
  {
   "type": "mc",
   "q": "Combien mesure l'angle droit d'un triangle rectangle ?",
   "options": [
    "60°",
    "90°",
    "45°"
   ],
   "answer": 1,
   "explain": "L'angle droit mesure toujours 90°."
  },
  {
   "type": "num",
   "q": "Les côtés de l'angle droit d'un triangle rectangle mesurent 3 cm et 4 cm. Combien mesure l'hypoténuse ?",
   "answer": 5,
   "unit": "cm",
   "explain": "3² + 4² = 9 + 16 = 25 et √25 = 5."
  },
  {
   "type": "tf",
   "q": "Dans un triangle rectangle l'hypoténuse est toujours plus longue que chacun des côtés de l'angle droit.",
   "answer": true,
   "explain": "Comme c² = a² + b², c² est plus grand que a² et que b² : l'hypoténuse est le plus long côté."
  },
  {
   "type": "mc",
   "q": "Combien de côtés de l'angle droit (cathètes) a un triangle rectangle ?",
   "options": [
    "1",
    "2",
    "3"
   ],
   "answer": 1,
   "explain": "Il a deux cathètes (les côtés qui forment l'angle droit) et une hypoténuse."
  },
  {
   "type": "text",
   "q": "Comment s'appelle un triangle qui a un angle de 90° ?",
   "answer": [
    "rectangle",
    "triangle rectangle"
   ],
   "explain": "C'est un triangle rectangle : le théorème de Pythagore ne vaut que pour ces triangles."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un cerf-volant est attaché à une ficelle tendue de 25 m. Au sol, le point situé sous le cerf-volant est à 7 m de l'enfant. À quelle hauteur vole-t-il (ne tiens pas compte de la taille de l'enfant) ?",
   "answer": 24,
   "unit": "m",
   "explain": "h² = 25² − 7² = 625 − 49 = 576, donc h = √576 = 24 m."
  },
  {
   "type": "num",
   "q": "Un petit terrain rectangulaire mesure 24 m × 18 m. Quelle est la longueur de sa diagonale ?",
   "answer": 30,
   "unit": "m",
   "explain": "d² = 24² + 18² = 576 + 324 = 900, donc d = √900 = 30 m."
  },
  {
   "type": "mc",
   "q": "Un triangle isocèle a une base de 16 cm et des côtés obliques de 10 cm. Combien mesure sa hauteur ?",
   "options": [
    "8 cm",
    "4 cm",
    "6 cm"
   ],
   "answer": 2,
   "explain": "La hauteur coupe la base en deux (8 cm) : h² = 10² − 8² = 100 − 64 = 36, donc h = 6 cm."
  },
  {
   "type": "tf",
   "q": "Un triangle de côtés 7 cm, 24 cm et 25 cm est rectangle.",
   "answer": true,
   "explain": "7² + 24² = 49 + 576 = 625 = 25² : la relation de Pythagore est vérifiée, donc il est rectangle."
  },
  {
   "type": "num",
   "q": "Une tablette a un écran rectangulaire de diagonale 17 cm et de largeur 15 cm. Quelle est la hauteur de l'écran ?",
   "answer": 8,
   "unit": "cm",
   "explain": "h² = 17² − 15² = 289 − 225 = 64, donc h = √64 = 8 cm."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un losange a un côté de 13 cm et une diagonale de 24 cm. Quelle est son aire ?",
   "answer": 120,
   "unit": "cm²",
   "explain": "Les diagonales se coupent à 90° en leur milieu : demi-diagonale = 12 ; l'autre moitié = √(13² − 12²) = √25 = 5, donc l'autre diagonale vaut 10. Aire = 24 × 10 ÷ 2 = 120 cm²."
  },
  {
   "type": "num",
   "q": "Une fourmi part d'un point, marche 8 m vers l'est, puis 9 m vers le nord et enfin encore 6 m vers le nord. À quelle distance en ligne droite se trouve-t-elle du point de départ ?",
   "answer": 17,
   "unit": "m",
   "explain": "Vers le nord elle a parcouru 9 + 6 = 15 m. Distance = √(8² + 15²) = √(64 + 225) = √289 = 17 m."
  },
  {
   "type": "mc",
   "q": "Sarah calcule l'hypoténuse d'un triangle de cathètes 5 cm et 12 cm et trouve 17 cm. Quelle est l'erreur ?",
   "options": [
    "Elle a additionné les cathètes au lieu d'additionner leurs carrés et de prendre la racine.",
    "Elle a confondu l'hypoténuse avec une cathète.",
    "Il n'y a pas d'erreur : 17 est correct."
   ],
   "answer": 0,
   "explain": "Le résultat correct est √(5² + 12²) = √169 = 13 cm. 5 + 12 = 17 ne serait que la somme des cathètes."
  },
  {
   "type": "tf",
   "q": "Si je double la longueur des trois côtés d'un triangle rectangle, le nouveau triangle est encore rectangle.",
   "answer": true,
   "explain": "(2a)² + (2b)² = 4(a² + b²) = 4c² = (2c)² : la relation de Pythagore reste valable (les triangles sont semblables)."
  },
  {
   "type": "order",
   "q": "Range les triangles rectangles de l'hypoténuse la plus courte à la plus longue (les cathètes sont indiquées).",
   "items": [
    "Cathètes 3 et 4",
    "Cathètes 6 et 8",
    "Cathètes 5 et 12",
    "Cathètes 7 et 24"
   ],
   "explain": "Hypoténuses : 5, 10, 13 et 25."
  }
 ]
});
