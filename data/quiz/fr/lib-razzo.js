QBANK("fr", "lib-razzo", {
 "f": [
  {
   "type": "mc",
   "q": "Dans quelle partie de la fusée voyagent les astronautes ?",
   "options": [
    "Dans le réservoir de carburant",
    "Dans la capsule",
    "Dans les tuyères"
   ],
   "answer": 1,
   "explain": "Les astronautes sont dans la capsule de l’équipage, en haut de la fusée."
  },
  {
   "type": "tf",
   "q": "Le premier étage est la partie la plus grande et la plus lourde de la fusée.",
   "answer": true,
   "explain": "Il contient beaucoup de carburant et les moteurs les plus puissants."
  },
  {
   "type": "text",
   "q": "Comment s’appellent les grandes « cloches » sous les moteurs, par où sortent les gaz chauds ?",
   "answer": [
    "tuyères",
    "les tuyères",
    "tuyère",
    "la tuyère"
   ],
   "explain": "Les tuyères laissent sortir les gaz très rapides vers le bas."
  },
  {
   "type": "num",
   "q": "Pour entrer en orbite, une fusée doit atteindre 28 000 km/h. Si elle va maintenant à 10 000 km/h, combien de km/h manquent ?",
   "answer": 18000,
   "unit": "km/h",
   "explain": "28 000 − 10 000 = 18 000 km/h."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "À quoi sert la tour de sauvetage au-dessus de la capsule ?",
   "options": [
    "À emporter la capsule en quelques secondes si quelque chose tourne mal au décollage",
    "À faire atterrir la capsule",
    "À donner de l’oxygène aux astronautes dans l’espace",
    "À diriger la fusée"
   ],
   "answer": 0,
   "explain": "C’est une petite fusée de secours qui arrache la capsule et l’emporte loin."
  },
  {
   "type": "num",
   "q": "Pour rester en orbite basse, il faut une vitesse d’environ 7,8 km par seconde. Combien de kilomètres une capsule parcourt-elle en 10 secondes ?",
   "answer": 78,
   "unit": "km",
   "explain": "7,8 × 10 = 78 km."
  },
  {
   "type": "tf",
   "q": "Le deuxième étage travaille en pleine atmosphère, là où il y a beaucoup d’air.",
   "answer": false,
   "explain": "Le deuxième étage travaille dans le vide, presque sans air, et amène la charge en orbite."
  },
  {
   "type": "order",
   "q": "Remets dans l’ordre les étapes du lancement.",
   "items": [
    "Les moteurs du premier étage s’allument",
    "Le premier étage se détache",
    "Le deuxième étage s’allume",
    "La capsule atteint l’orbite"
   ],
   "explain": "D’abord le premier étage pousse ; quand il est vide, il se détache ; le deuxième étage amène en orbite."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Pourquoi le moteur du deuxième étage a-t-il une tuyère beaucoup plus longue que ceux du premier ?",
   "options": [
    "Pour paraître plus grand",
    "Pour laisser sortir les gaz plus lentement",
    "Parce que le deuxième étage n’a pas de carburant",
    "Parce que dans le vide les gaz peuvent s’étaler davantage et poussent mieux"
   ],
   "answer": 3,
   "explain": "Hors de l’atmosphère, aucun air ne retient les gaz : une longue tuyère les fait accélérer encore plus."
  },
  {
   "type": "num",
   "q": "Le premier étage a 30 tonnes de carburant et 90 tonnes d’oxygène liquide, et brûle tout en 150 secondes. Combien de tonnes par seconde brûle-t-il en moyenne ?",
   "answer": 0.8,
   "tol": 0.01,
   "unit": "t/s",
   "explain": "Total : 30 + 90 = 120 t. 120 ÷ 150 = 0,8 t par seconde."
  },
  {
   "type": "tf",
   "q": "Le bouclier thermique de la capsule protège les astronautes du froid de l’espace pendant la montée.",
   "answer": false,
   "explain": "Il sert au retour : l’air devant la capsule, à grande vitesse, devient brûlant."
  },
  {
   "type": "order",
   "q": "Remets dans l’ordre le retour de la capsule sur Terre.",
   "items": [
    "La capsule entre dans l’atmosphère",
    "Le bouclier thermique la protège de la chaleur",
    "Les parachutes s’ouvrent",
    "La capsule touche la terre ou la mer"
   ],
   "explain": "Elle rentre très vite, le bouclier la protège, puis les parachutes la ralentissent pour l’arrivée."
  }
 ]
});
