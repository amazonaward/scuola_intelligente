QBANK("fr", "m1-geo-coordinate", {
 "f": [
  {
   "type": "mc",
   "q": "Quel parallèle se trouve à 66° 33′ Nord ?",
   "options": [
    "Tropique du Capricorne",
    "Cercle polaire arctique",
    "Cercle polaire antarctique"
   ],
   "answer": 1,
   "explain": "66° 33′ Nord est le cercle polaire arctique ; le cercle polaire antarctique est à la même latitude, mais au sud."
  },
  {
   "type": "tf",
   "q": "La longitude se mesure à partir de l'équateur.",
   "answer": false,
   "explain": "C'est la latitude qui se mesure à partir de l'équateur ; la longitude se mesure à partir du méridien de Greenwich."
  },
  {
   "type": "mc",
   "q": "Sydney se trouve à 33,9° Sud. Dans quel hémisphère est-elle ?",
   "options": [
    "Austral (sud)",
    "Boréal (nord)",
    "Occidental"
   ],
   "answer": 0,
   "explain": "Sud signifie l'hémisphère austral, sous l'équateur."
  },
  {
   "type": "text",
   "q": "Quelle sigle de trois lettres désigne l'heure du méridien de Greenwich (temps universel coordonné) ?",
   "answer": [
    "utc"
   ],
   "explain": "L'UTC est l'heure de référence : l'Italie est en UTC+1 (UTC+2 à l'heure d'été)."
  },
  {
   "type": "mc",
   "q": "Les méridiens sont des demi-cercles qui vont…",
   "options": [
    "de l'équateur aux tropiques",
    "d'ouest en est",
    "d'un pôle à l'autre"
   ],
   "answer": 2,
   "explain": "Les méridiens relient le pôle Nord au pôle Sud ; les parallèles, eux, vont d'ouest en est."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Deux villes se trouvent sur le même méridien, l'une à 52° N et l'autre à 40° N. Environ combien de km les séparent ? (1° de latitude ≈ 111 km)",
   "answer": 1332,
   "tol": 10,
   "unit": "km",
   "explain": "Différence : 52 − 40 = 12°. Distance : 12 × 111 = 1 332 km."
  },
  {
   "type": "mc",
   "q": "Un point a pour coordonnées 34° S, 151° E. Dans quels hémisphères se trouve-t-il ?",
   "options": [
    "Boréal et occidental",
    "Boréal et oriental",
    "Austral et oriental",
    "Austral et occidental"
   ],
   "answer": 2,
   "explain": "S = Sud → hémisphère austral ; E = Est → hémisphère oriental."
  },
  {
   "type": "tf",
   "q": "La Chine, large comme cinq fuseaux horaires, utilise cinq heures différentes.",
   "answer": false,
   "explain": "Les limites des fuseaux suivent souvent les frontières des États : la Chine utilise une seule heure pour tout le pays."
  },
  {
   "type": "text",
   "q": "Quel instrument John Harrison a-t-il construit pour résoudre le problème de la longitude en mer ?",
   "answer": [
    "chronomètre",
    "chronomètre de marine",
    "le chronomètre",
    "un chronomètre",
    "horloge marine"
   ],
   "explain": "Le chronomètre de marine de Harrison gardait l'heure du port de départ : la différence avec l'heure locale donne la longitude (1 heure = 15°)."
  },
  {
   "type": "order",
   "q": "Classe ces villes d'ouest en est (selon le fuseau horaire).",
   "items": [
    "New York (UTC−5)",
    "Londres (UTC+0)",
    "Rome (UTC+1)",
    "Moscou (UTC+3)",
    "Tokyo (UTC+9)"
   ],
   "explain": "Plus on va vers l'est, plus le nombre UTC augmente : −5, 0, +1, +3, +9."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Sur un navire, le Soleil est au plus haut (midi local) au moment où le chronomètre, réglé sur Greenwich, indique 15 h 00. À combien de degrés de longitude ouest se trouve le navire ?",
   "answer": 45,
   "tol": 0,
   "unit": "°",
   "explain": "Trois heures se sont écoulées depuis midi à Greenwich, donc le navire est à l'ouest : 3 × 15° = 45° Ouest."
  },
  {
   "type": "mc",
   "q": "Ilaria dit : « À Rome (UTC+1) il est 15 h, donc à New York (UTC−5) il est 21 h, parce que 15 + 6 = 21 ». Où est l'erreur ?",
   "options": [
    "La différence est de 4 heures, pas de 6",
    "Il n'y a aucune erreur",
    "New York est à l'ouest : il faut soustraire, donc il est 9 h"
   ],
   "answer": 2,
   "explain": "Vers l'ouest, le Soleil arrive plus tard, donc l'heure est plus tôt : 15 − 6 = 9."
  },
  {
   "type": "tf",
   "q": "Un degré de longitude mesure environ 111 km partout sur Terre.",
   "answer": false,
   "explain": "Les méridiens se rejoignent aux pôles : un degré de longitude mesure 111 km à l'équateur et se raccourcit jusqu'à zéro aux pôles."
  },
  {
   "type": "mc",
   "q": "Rome et New York ont presque la même latitude, mais leurs heures sont très différentes. Pourquoi ?",
   "options": [
    "Parce que l'heure dépend de la longitude, et les deux villes sont sur des méridiens très éloignés",
    "Parce que l'heure dépend de la latitude et New York est plus au sud",
    "Parce que New York est dans l'hémisphère austral"
   ],
   "answer": 0,
   "explain": "Les fuseaux horaires sont des tranches de longitude (15° chacune) : la différence d'heure entre deux lieux dépend de leur éloignement est-ouest."
  },
  {
   "type": "num",
   "q": "Un avion vole en ligne droite vers le nord, le long d'un méridien, de l'équateur jusqu'au parallèle 30° N. Combien de km parcourt-il environ ? (1° ≈ 111 km)",
   "answer": 3330,
   "tol": 30,
   "unit": "km",
   "explain": "De l'équateur (0°) à 30° N, il y a 30 degrés : 30 × 111 = 3 330 km."
  }
 ]
});
