QBANK("fr", "lib-treno", {
 "f": [
  {
   "type": "mc",
   "q": "Où s'assoit le conducteur du train ?",
   "options": [
    "Dans le bogie",
    "Dans la cabine de conduite",
    "Sur le pantographe"
   ],
   "answer": 1,
   "explain": "La cabine est à l'avant : elle a les leviers, les écrans et la radio."
  },
  {
   "type": "tf",
   "q": "Le train a un volant pour choisir où aller.",
   "answer": false,
   "explain": "Le train n'a pas de volant : c'est la voie qui décide où l'on va."
  },
  {
   "type": "text",
   "q": "La première ligne ferroviaire italienne, inaugurée en 1839, allait de Naples à quelle ville ?",
   "answer": [
    "portici",
    "a portici",
    "à portici"
   ],
   "explain": "La ligne Naples–Portici faisait 7 km et était parcourue par une locomotive à vapeur."
  },
  {
   "type": "mc",
   "q": "En quel matériau sont faites les roues du train et les rails ?",
   "options": [
    "En caoutchouc",
    "En bois",
    "En acier"
   ],
   "answer": 2,
   "explain": "Des roues en acier sur des rails en acier ont très peu de frottement."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un train à grande vitesse roule à 300 km/h. Combien de km parcourt-il en 20 minutes ?",
   "answer": 100,
   "unit": "km",
   "explain": "20 minutes, c'est un tiers d'heure : 300 ÷ 3 = 100 km."
  },
  {
   "type": "order",
   "q": "Remets dans l'ordre ce qui se passe quand le train freine.",
   "items": [
    "Le conducteur tire le levier de frein",
    "Les moteurs deviennent des générateurs et ralentissent le train",
    "L'électricité produite retourne dans la ligne",
    "Les freins à disque interviennent"
   ],
   "explain": "D'abord le moteur électrique freine et produit de l'électricité ; ensuite les freins à disque aident."
  },
  {
   "type": "mc",
   "q": "À quoi sert le transformateur sous le plancher du train ?",
   "options": [
    "À abaisser la tension de 25 000 volts à quelques milliers",
    "À augmenter encore la tension du fil",
    "À régler la vitesse des moteurs"
   ],
   "answer": 0,
   "explain": "Le courant du fil est trop fort pour les moteurs : le transformateur en abaisse la tension. Doser le courant est le rôle du convertisseur."
  },
  {
   "type": "tf",
   "q": "Le nez du train est long et lisse parce qu'à grande vitesse la résistance de l'air est le plus gros effort à vaincre.",
   "answer": true,
   "explain": "Une forme profilée fend l'air et consomme moins d'énergie."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Par personne et par km, le train émet jusqu'à 10 fois moins de CO₂ que la voiture. Si une voiture émet 120 g de CO₂ par personne et par km, combien de grammes le train émet-il au plus par personne et par km ?",
   "answer": 12,
   "unit": "g",
   "explain": "120 ÷ 10 = 12 g de CO₂."
  },
  {
   "type": "mc",
   "q": "Anna dit : « Un train à 300 km/h peut freiner au dernier moment, comme une voiture. » Quelle est l'erreur ?",
   "options": [
    "Le train freine seulement grâce à la caténaire",
    "Le train n'a pas de freins",
    "Un train à 300 km/h a besoin de plus de 3 km pour s'arrêter"
   ],
   "answer": 2,
   "explain": "Le train est très rapide et lourd : il lui faut plus de 3 km pour s'arrêter, donc le conducteur doit freiner bien avant."
  },
  {
   "type": "mc",
   "q": "Pourquoi un train peut-il prendre les virages sans quitter les rails ?",
   "options": [
    "Parce qu'il a un volant caché",
    "Parce que les bogies peuvent pivoter un peu sous la caisse",
    "Parce que les roues sont en caoutchouc"
   ],
   "answer": 1,
   "explain": "Sous la caisse, les bogies (4 roues chacun) pivotent légèrement et suivent la courbe ; le boudin garde les roues sur le rail."
  },
  {
   "type": "tf",
   "q": "Le courant électrique qui alimente le train retourne à la centrale en passant par les roues et les rails.",
   "answer": true,
   "explain": "Le circuit se ferme : fil, pantographe, moteurs, roues et rails."
  }
 ]
});
