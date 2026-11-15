QBANK("fr", "m2-tec-energia", {
 "f": [
  {
   "type": "mc",
   "q": "Quelle unité utilise-t-on d'habitude pour mesurer l'électricité consommée à la maison ?",
   "options": [
    "Le kilowattheure (kWh)",
    "Le mètre (m)",
    "Le gramme (g)"
   ],
   "answer": 0,
   "explain": "Sur la facture, l'énergie électrique se mesure en kilowattheures (kWh)."
  },
  {
   "type": "tf",
   "q": "Le pétrole et le gaz naturel sont des combustibles fossiles.",
   "answer": true,
   "explain": "Ils se sont formés en millions d'années à partir de restes d'êtres vivants et finissent par s'épuiser."
  },
  {
   "type": "mc",
   "q": "Qu'est-ce qui fait tourner les pales d'une centrale éolienne ?",
   "options": [
    "La vapeur",
    "L'eau d'un barrage",
    "Le vent"
   ],
   "answer": 2,
   "explain": "Dans l'aérogénérateur, ce sont les pales poussées par le vent qui font tourner l'alternateur."
  },
  {
   "type": "num",
   "q": "Combien d'hertz a le courant alternatif des prises de la maison en Italie ?",
   "answer": 50,
   "tol": 0,
   "unit": "Hz",
   "explain": "Le réseau électrique italien a une fréquence de 50 hertz (et 230 volts)."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre les transformations d'énergie dans une centrale hydroélectrique.",
   "items": [
    "Eau dans le barrage (énergie potentielle)",
    "Eau qui descend (énergie cinétique)",
    "Turbine et alternateur",
    "Énergie électrique"
   ],
   "explain": "L'eau en hauteur a de l'énergie potentielle, en tombant elle a de l'énergie cinétique, la turbine et l'alternateur la changent en électricité."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un fer à repasser de 1,2 kW reste allumé 2,5 heures. Combien de kWh consomme-t-il ?",
   "answer": 3,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "Énergie = puissance × temps = 1,2 × 2,5 = 3 kWh."
  },
  {
   "type": "num",
   "q": "Une ampoule LED de 8 W reste allumée 5 heures par jour pendant 30 jours. Combien de kWh consomme-t-elle en tout ?",
   "answer": 1.2,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "8 W = 0,008 kW ; 0,008 × 5 × 30 = 1,2 kWh."
  },
  {
   "type": "mc",
   "q": "Quelle chaîne de transformations décrit une centrale éolienne ?",
   "options": [
    "Cinétique du vent → mécanique du rotor → électrique",
    "Chimique → thermique → mécanique → électrique",
    "Potentielle de l'eau → cinétique → électrique"
   ],
   "answer": 0,
   "explain": "Le vent a de l'énergie cinétique, elle fait tourner le rotor et l'alternateur produit de l'électricité."
  },
  {
   "type": "text",
   "q": "Comment s'appelle l'appareil qui transforme le courant continu des panneaux photovoltaïques en courant alternatif ?",
   "answer": [
    "onduleur",
    "l'onduleur",
    "un onduleur"
   ],
   "explain": "L'onduleur rend le courant adapté au réseau et aux appareils de la maison."
  },
  {
   "type": "mc",
   "q": "Pourquoi construit-on les centrales hydroélectriques en montagne ?",
   "options": [
    "Il faut une grande dénivellation : plus l'eau tombe de haut, plus elle a d'énergie",
    "Parce qu'il y a toujours du vent en montagne",
    "Parce qu'il fait plus chaud en altitude"
   ],
   "answer": 0,
   "explain": "Plus l'eau tombe de haut, plus elle a d'énergie : il faut une grande dénivellation."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Une ampoule à incandescence de 40 W et une LED de 5 W donnent la même lumière. Si elles restent allumées 4 heures par jour pendant 30 jours et que 1 kWh coûte 0,25 €, combien d'euros économise-t-on avec la LED ?",
   "answer": 1.05,
   "tol": 0.01,
   "unit": "€",
   "explain": "Différence 35 W = 0,035 kW ; 0,035 × 4 × 30 = 4,2 kWh ; 4,2 × 0,25 = 1,05 €."
  },
  {
   "type": "tf",
   "q": "Une centrale a un rendement de 40 % : les 60 sur 100 qui ne deviennent pas de l'électricité sont de l'énergie qui disparaît.",
   "answer": false,
   "explain": "Faux : l'énergie ne se détruit pas ; la partie non utile se transforme en chaleur et se dissipe."
  },
  {
   "type": "mc",
   "q": "Laquelle de ces affirmations est FAUSSE ?",
   "options": [
    "Le transformateur élève la tension pour réduire les pertes pendant le transport",
    "L'alternateur transforme l'énergie mécanique en énergie électrique",
    "Une centrale nucléaire émet beaucoup de CO₂ en fonctionnant",
    "Le photovoltaïque n'utilise pas de turbine"
   ],
   "answer": 2,
   "explain": "Le nucléaire n'émet pas de CO₂ en fonctionnement mais produit des déchets radioactifs : dire qu'il en émet beaucoup est l'erreur."
  },
  {
   "type": "mc",
   "q": "Dans une région, il y a beaucoup de soleil à midi mais la consommation d'électricité augmente le soir. Quelle solution résout le mieux le problème ?",
   "options": [
    "Utiliser des systèmes de stockage comme des batteries ou des centrales à pompage",
    "Construire plus de pylônes",
    "Augmenter la tension à 380 000 V"
   ],
   "answer": 0,
   "explain": "Le soleil ne produit pas le soir : il faut stocker l'énergie en excès avec des batteries ou des centrales à pompage."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre le trajet de l'électricité de la centrale à la prise de la maison.",
   "items": [
    "Alternateur",
    "Transformateur qui élève la tension",
    "Lignes à haute tension",
    "Poste qui abaisse la tension",
    "Prise de la maison à 230 V"
   ],
   "explain": "La tension est élevée pour le transport puis abaissée par étapes jusqu'à 230 V."
  }
 ]
});
