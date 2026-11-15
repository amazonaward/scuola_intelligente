QBANK("fr", "m1-geo-strumenti", {
 "f": [
  {
   "type": "mc",
   "q": "Quel instrument possède une aiguille aimantée qui indique le nord ?",
   "options": [
    "Thermomètre",
    "Boussole",
    "Altimètre"
   ],
   "answer": 1,
   "explain": "La boussole a une aiguille aimantée qui pointe vers le nord magnétique, proche du pôle Nord géographique."
  },
  {
   "type": "tf",
   "q": "À midi, en Italie, le Soleil est au sud.",
   "answer": true,
   "explain": "Le Soleil se lève à l'est, se couche à l'ouest et, à midi en Italie, il est au sud."
  },
  {
   "type": "mc",
   "q": "Quelle étoile indique le nord pendant la nuit ?",
   "options": [
    "Sirius",
    "Antarès",
    "étoile Polaire"
   ],
   "answer": 2,
   "explain": "L'étoile Polaire se trouve presque au-dessus du pôle Nord et indique le nord."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la carte qui montre un seul sujet, comme le climat ou les langues parlées ?",
   "answer": [
    "thématique",
    "carte thématique",
    "la carte thématique"
   ],
   "explain": "Les cartes thématiques traitent un seul thème : climat, population, langues, tourisme, risque sismique…"
  },
  {
   "type": "tf",
   "q": "Un SIG (système d'information géographique) superpose de nombreuses couches de données sur une carte numérique.",
   "answer": true,
   "explain": "Routes, fleuves, population, bâtiments, risque d'éboulements : chaque donnée est une couche que l'on peut afficher ou masquer."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Sur une carte, 4 cm représentent 2 km dans la réalité. Quel est le dénominateur N de l'échelle 1 : N ?",
   "answer": 50000,
   "tol": 0,
   "explain": "2 km = 200 000 cm. 200 000 : 4 = 50 000, donc l'échelle est 1 : 50 000."
  },
  {
   "type": "mc",
   "q": "Tu veux comparer le nombre d'habitants de cinq villes. Quel graphique est le plus adapté ?",
   "options": [
    "Diagramme circulaire",
    "Courbe",
    "Histogramme (en barres)"
   ],
   "answer": 2,
   "explain": "L'histogramme compare différentes quantités avec des colonnes : la plus haute est la ville la plus peuplée."
  },
  {
   "type": "tf",
   "q": "Une carte à l'échelle 1 : 10 000 000 convient pour voir les sentiers d'un petit parc.",
   "answer": false,
   "explain": "C'est une très petite échelle : elle montre un territoire immense avec très peu de détails. Pour un parc, il faut une grande échelle, comme 1 : 5 000."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la carte qui montre les frontières des États et des régions, chacun d'une couleur différente ?",
   "answer": [
    "politique",
    "carte politique",
    "la carte politique"
   ],
   "explain": "La carte politique montre frontières, États, régions et villes ; la carte physique montre reliefs, plaines et eaux."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre les étapes pour trouver la distance réelle entre deux lieux sur une carte à l'échelle.",
   "items": [
    "Mesure les cm sur la carte avec une règle",
    "Multiplie par le dénominateur de l'échelle",
    "Transforme les cm en km"
   ],
   "explain": "D'abord on mesure sur la carte, puis on multiplie par le dénominateur, enfin on convertit en km."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Sur une carte à l'échelle 1 : 25 000, un parcours mesure 18 cm. En marchant à 3 km/h, combien d'heures faut-il pour le parcourir ?",
   "answer": 1.5,
   "tol": 0,
   "unit": "heures",
   "explain": "18 × 25 000 = 450 000 cm = 4 500 m = 4,5 km. Temps = 4,5 : 3 = 1,5 heure."
  },
  {
   "type": "mc",
   "q": "Un camarade dit : « Sur la carte de Mercator, le Groenland est aussi grand que l'Afrique, donc ils ont la même superficie ». Quelle est l'erreur ?",
   "options": [
    "Aucune erreur : Mercator conserve les surfaces",
    "Mercator agrandit les terres proches des pôles : en réalité l'Afrique est environ 14 fois plus grande",
    "Le Groenland est en réalité plus grand que l'Afrique"
   ],
   "answer": 1,
   "explain": "La projection de Mercator conserve les angles mais déforme les surfaces : Afrique 30 millions de km², Groenland 2,2 millions."
  },
  {
   "type": "tf",
   "q": "Pour comparer sans déformation les superficies des continents, un globe vaut mieux qu'une carte de Mercator.",
   "answer": true,
   "explain": "Le globe est la seule représentation sans déformation ; Mercator agrandit beaucoup les terres proches des pôles."
  },
  {
   "type": "mc",
   "q": "Sur une carte topographique, deux sentiers mènent de la même altitude au même sommet. Le sentier A traverse des courbes de niveau très serrées, le B des courbes très espacées. Quelle affirmation est correcte ?",
   "options": [
    "Les deux sentiers ont la même pente car ils partent et arrivent aux mêmes altitudes",
    "A est plus doux et plus long, B est plus raide et plus court",
    "A est plus raide et plus court, B est plus doux et plus long"
   ],
   "answer": 2,
   "explain": "Courbes serrées = pente raide (on monte beaucoup en peu de distance) ; courbes espacées = pente douce, qui demande un trajet plus long."
  },
  {
   "type": "mc",
   "q": "Quelle association outil–usage est FAUSSE ?",
   "options": [
    "Diagramme circulaire – montrer comment une donnée change d'année en année",
    "Cartogramme – montrer la densité de population des régions",
    "Climogramme – réunir les températures et les pluies d'un lieu"
   ],
   "answer": 0,
   "explain": "Le diagramme circulaire montre les parties d'un tout en pourcentage ; pour l'évolution dans le temps on utilise une courbe."
  }
 ]
});
