QBANK("fr", "m1-geo-clima-ambienti", {
 "f": [
  {
   "type": "mc",
   "q": "Quel instrument mesure les précipitations ?",
   "options": [
    "Anémomètre",
    "Pluviomètre",
    "Baromètre"
   ],
   "answer": 1,
   "explain": "Le pluviomètre mesure la pluie en millimètres ; l'anémomètre mesure le vent, le baromètre la pression."
  },
  {
   "type": "tf",
   "q": "En montant en altitude, la température de l'air diminue en moyenne.",
   "answer": true,
   "explain": "En moyenne, la température baisse d'environ 0,6 °C tous les 100 m de montée."
  },
  {
   "type": "mc",
   "q": "Quel climat a Palerme ?",
   "options": [
    "Océanique",
    "Méditerranéen",
    "Subarctique"
   ],
   "answer": 1,
   "explain": "Palerme, sur la côte sicilienne, a des hivers doux et des étés chauds et secs : un climat méditerranéen."
  },
  {
   "type": "text",
   "q": "Comment s'appelle l'instrument qui mesure la vitesse du vent ?",
   "answer": [
    "anémomètre",
    "anemometre",
    "l'anémomètre",
    "un anémomètre"
   ],
   "explain": "L'anémomètre mesure la vitesse du vent (la girouette en indique la direction)."
  },
  {
   "type": "mc",
   "q": "Lequel de ces animaux vit dans la toundra ?",
   "options": [
    "Sanglier",
    "Bouquetin",
    "Renne"
   ],
   "answer": 2,
   "explain": "Le renne vit dans la toundra, parmi les mousses et les lichens. Le sanglier vit en forêt, le bouquetin dans les Alpes."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Au sommet d'une montagne de 3 000 m, il fait 2 °C. Combien fait-il environ au niveau de la mer (0 m) ?",
   "answer": 20,
   "tol": 0.5,
   "unit": "°C",
   "explain": "Dénivelé de 3 000 m → baisse de 3 000 : 100 × 0,6 = 18 °C. En bas il fait plus chaud : 2 + 18 = 20 °C."
  },
  {
   "type": "num",
   "q": "Une ville a une amplitude thermique annuelle de 20 °C et le mois le plus chaud a une moyenne de 28 °C. Quelle est la moyenne du mois le plus froid ?",
   "answer": 8,
   "tol": 0,
   "unit": "°C",
   "explain": "Amplitude = plus chaud − plus froid, donc plus froid = 28 − 20 = 8 °C."
  },
  {
   "type": "mc",
   "q": "Pourquoi les glaciers alpins sont-ils appelés des « thermomètres » du climat ?",
   "options": [
    "Parce qu'ils s'allongent les années froides et reculent les années chaudes",
    "Parce qu'ils contiennent du mercure",
    "Parce qu'ils mesurent la quantité de pluie"
   ],
   "answer": 0,
   "explain": "La longueur d'un glacier varie avec la température : l'observer pendant des années montre l'évolution du climat."
  },
  {
   "type": "tf",
   "q": "Le versant d'une montagne exposé aux vents humides reçoit plus de pluie que l'autre.",
   "answer": true,
   "explain": "Les reliefs font barrière : l'air humide monte, se refroidit et laisse sa pluie sur le versant exposé."
  },
  {
   "type": "order",
   "q": "Classe ces milieux naturels européens du nord au sud.",
   "items": [
    "Toundra",
    "Taïga",
    "Forêt de feuillus",
    "Maquis méditerranéen"
   ],
   "explain": "Du nord au sud : toundra, taïga, forêt de feuillus et enfin maquis méditerranéen."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un téléphérique monte de 1 000 m, où il fait 25 °C, jusqu'à 2 800 m. Combien fera-t-il environ au sommet ?",
   "answer": 14.2,
   "tol": 0.2,
   "unit": "°C",
   "explain": "Dénivelé : 2 800 − 1 000 = 1 800 m. Baisse : 1 800 : 100 × 0,6 = 10,8 °C. Au sommet : 25 − 10,8 = 14,2 °C."
  },
  {
   "type": "mc",
   "q": "Tromsø se trouve au-delà du cercle polaire arctique, mais son port ne gèle pas en hiver. Pourquoi ?",
   "options": [
    "Parce qu'elle est située à haute altitude",
    "Parce que les Alpes la protègent des vents froids",
    "Parce qu'un courant marin chaud adoucit son climat"
   ],
   "answer": 2,
   "explain": "Le Gulf Stream apporte de l'eau chaude jusqu'en Norvège et rend le climat bien plus doux qu'ailleurs à la même latitude."
  },
  {
   "type": "tf",
   "q": "Deux villes à la même latitude ont toujours le même climat.",
   "answer": false,
   "explain": "La mer, les courants, les vents et l'altitude comptent aussi : l'Irlande est douce, alors que le Labrador (même latitude) est sous la neige des mois durant."
  },
  {
   "type": "mc",
   "q": "Ville A : janvier 4 °C, juillet 17 °C, pluies toute l'année. Ville B : janvier −8 °C, juillet 20 °C, pluies surtout en été. Quelle affirmation est correcte ?",
   "options": [
    "A est continentale et B océanique",
    "A est océanique et B continentale",
    "Les deux sont méditerranéennes",
    "A est méditerranéenne et B polaire"
   ],
   "answer": 1,
   "explain": "A : amplitude 13 °C, hivers doux, pluies partout → océanique. B : amplitude 28 °C, hivers glacials, pluies d'été → continental."
  },
  {
   "type": "num",
   "q": "Londres : janvier 5 °C, juillet 19 °C. Moscou : janvier −6 °C, juillet 19 °C. De combien de degrés l'amplitude de Moscou dépasse-t-elle celle de Londres ?",
   "answer": 11,
   "tol": 0,
   "unit": "°C",
   "explain": "Londres : 19 − 5 = 14 °C. Moscou : 19 − (−6) = 25 °C. Différence : 25 − 14 = 11 °C."
  }
 ]
});
