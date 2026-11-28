QBANK("fr", "l1-geo-strumenti", {
 "f": [
  { "type": "mc", "q": "Quel est le parallèle de référence à 0° de latitude ?", "options": ["Le tropique du Cancer", "L'équateur", "Le cercle polaire arctique"], "answer": 1, "explain": "L'équateur est le parallèle 0°, à partir duquel on mesure la latitude." },
  { "type": "num", "q": "Sur une carte au 1/10 000, à combien de mètres réels correspondent 5 cm ?", "answer": 500, "tol": 0, "unit": "m", "explain": "5 cm × 10 000 = 50 000 cm = 500 m." },
  { "type": "tf", "q": "Les méridiens sont des demi-cercles qui relient le pôle Nord au pôle Sud.", "answer": true, "explain": "Les méridiens passent par les pôles et mesurent la longitude." },
  { "type": "text", "q": "Comment s'appelle l'encadré de la carte qui explique les symboles et les couleurs ?", "answer": ["légende", "la légende", "legende"], "explain": "La légende est l'élément de la carte qui explique la signification des symboles et des couleurs." },
  { "type": "mc", "q": "Qu'indique la longitude ?", "options": ["La distance angulaire à Greenwich", "La distance angulaire à l'équateur", "L'altitude"], "answer": 0, "explain": "La longitude mesure la distance angulaire est-ouest par rapport au méridien de Greenwich." }
 ],
 "m": [
  { "type": "mc", "q": "Une échelle au 1/2 000 000 est…", "options": ["une grande échelle", "une petite échelle", "une échelle égale à 1/1"], "answer": 1, "explain": "Le dénominateur est très grand : l'échelle est petite et représente une zone vaste avec peu de détails." },
  { "type": "num", "q": "Deux villages sont distants de 15 km. Sur une carte, ils sont à 30 cm l'un de l'autre. Quel est le dénominateur de l'échelle (1/N) ?", "answer": 50000, "tol": 0, "explain": "15 km = 1 500 000 cm ; 1 500 000 ÷ 30 = 50 000 : échelle 1/50 000." },
  { "type": "tf", "q": "Sur une carte topographique, des courbes de niveau très espacées indiquent une pente douce.", "answer": true, "explain": "Des courbes éloignées signifient une faible variation d'altitude sur une grande distance." },
  { "type": "mc", "q": "À combien de degrés de longitude correspond environ 1 heure de décalage horaire ?", "options": ["15°", "24°", "90°"], "answer": 0, "explain": "360° ÷ 24 heures = 15° par heure." },
  { "type": "mc", "q": "À quoi servent les cartes thématiques ?", "options": ["À montrer un seul phénomène sur un fond géographique", "À montrer seulement les routes", "À mesurer la profondeur de la mer"], "answer": 0, "explain": "Une carte thématique représente un phénomène précis (climat, population, revenu…)." }
 ],
 "d": [
  { "type": "mc", "q": "Pourquoi une projection cartographique doit-elle toujours déformer quelque chose ?", "options": ["Parce qu'une surface sphérique ne peut pas être étalée sur un plan sans déformer surfaces, formes ou distances", "Parce que les cartographes se trompent dans leurs mesures", "Parce que la Terre est trop grande"], "answer": 0, "explain": "C'est une propriété mathématique (Gauss) : une sphère n'est pas développable sur un plan." },
  { "type": "num", "q": "Un sentier mesure 4,8 cm sur une carte au 1/25 000. Quelle est sa longueur en mètres (à l'horizontale) ?", "answer": 1200, "tol": 0, "unit": "m", "explain": "4,8 × 25 000 = 120 000 cm = 1 200 m." },
  { "type": "tf", "q": "Le GPS peut calculer une position avec un seul satellite.", "answer": false, "explain": "Il faut au moins quatre satellites : trois pour la position et un pour corriger l'horloge du récepteur." },
  { "type": "mc", "q": "Une donnée SIG « vectorielle », c'est par exemple…", "options": ["Une image satellite", "Le polygone qui représente la limite d'une commune", "Une grille de pixels d'altitude"], "answer": 1, "explain": "Les données vectorielles sont des points, des lignes et des polygones ; les images satellites et les grilles d'altitude sont des données raster." },
  { "type": "mc", "q": "Laquelle de ces projections conserve les surfaces mais déforme les formes ?", "options": ["Mercator", "Gall-Peters", "Aucune des deux"], "answer": 1, "explain": "Gall-Peters est équivalente : elle conserve les rapports entre les surfaces, mais les formes sont étirées." }
 ]
});
