QBANK("fr", "m3-mat-cerchio", {
 "f": [
  {
   "type": "mc",
   "q": "Le rayon d'un cercle est la distance entre…",
   "options": [
    "le centre et un point du cercle",
    "deux points quelconques du cercle",
    "deux points opposés du cercle"
   ],
   "answer": 0,
   "explain": "Le rayon relie le centre à un point quelconque du cercle."
  },
  {
   "type": "num",
   "q": "Le rayon d'une roue mesure 7 cm. Combien mesure le diamètre ?",
   "answer": 14,
   "unit": "cm",
   "explain": "Le diamètre est le double du rayon : 7 × 2 = 14 cm."
  },
  {
   "type": "tf",
   "q": "Le diamètre est le double du rayon.",
   "answer": true,
   "explain": "d = 2r : le diamètre passe par le centre et relie deux points opposés, il est donc formé de deux rayons."
  },
  {
   "type": "mc",
   "q": "Quelle formule donne la longueur de la circonférence ?",
   "options": [
    "πr²",
    "πr",
    "2πr"
   ],
   "answer": 2,
   "explain": "La longueur est C = 2πr (ou πd). πr² est la formule de l'aire du cercle."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la partie de disque comprise entre deux rayons ? (deux mots)",
   "answer": [
    "secteur circulaire",
    "le secteur circulaire",
    "secteur"
   ],
   "explain": "La partie du disque comprise entre deux rayons est le secteur circulaire, comme une part de gâteau."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Une pizza a un diamètre de 30 cm. Quelle est la longueur de sa croûte, c'est-à-dire de la circonférence ? (π = 3,14)",
   "answer": 94.2,
   "tol": 0.05,
   "unit": "cm",
   "explain": "C = π × d = 3,14 × 30 = 94,2 cm."
  },
  {
   "type": "num",
   "q": "Quelle est l'aire d'un disque de rayon 6 cm ? (π = 3,14)",
   "answer": 113.04,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "A = π × r² = 3,14 × 6² = 3,14 × 36 = 113,04 cm²."
  },
  {
   "type": "mc",
   "q": "Un disque a une aire de 78,5 cm². Combien mesure son rayon ? (π = 3,14)",
   "options": [
    "10 cm",
    "5 cm",
    "25 cm"
   ],
   "answer": 1,
   "explain": "r² = A ÷ π = 78,5 ÷ 3,14 = 25, donc r = √25 = 5 cm."
  },
  {
   "type": "tf",
   "q": "Si le rayon d'un cercle double, sa circonférence double aussi.",
   "answer": true,
   "explain": "C = 2πr est proportionnelle au rayon : rayon double, circonférence double (l'aire, elle, devient quatre fois plus grande)."
  },
  {
   "type": "mc",
   "q": "Un arc de 180° correspond à…",
   "options": [
    "un quarto della circonferenza",
    "l'intera circonferenza",
    "metà della circonferenza"
   ],
   "answer": 2,
   "explain": "180° est la moitié de 360°, l'arc est donc une demi-circonférence : la moitié de la circonférence."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Une roue de vélo a un rayon de 35 cm. Combien de mètres parcourt-elle en 100 tours complets ? (π = 3,14)",
   "answer": 219.8,
   "tol": 0.05,
   "unit": "m",
   "explain": "Un tour = 2 × 3,14 × 35 = 219,8 cm. En 100 tours : 219,8 × 100 = 21 980 cm = 219,8 m."
  },
  {
   "type": "num",
   "q": "Une fontaine circulaire de rayon 12 m est entourée d'un sentier large de 1 m. Quelle est l'aire du sentier ? (π = 3,14)",
   "answer": 78.5,
   "tol": 0.05,
   "unit": "m²",
   "explain": "Le sentier est une couronne circulaire avec R = 13 m et r = 12 m : A = 3,14 × (13² − 12²) = 3,14 × (169 − 144) = 3,14 × 25 = 78,5 m²."
  },
  {
   "type": "mc",
   "q": "Un cercle a un diamètre de 14 cm. Une droite est à 7 cm de son centre. Quelle est sa position par rapport au cercle ?",
   "options": [
    "secante",
    "esterna",
    "tangente"
   ],
   "answer": 2,
   "explain": "Le rayon est 14 ÷ 2 = 7 cm. La distance au centre est égale au rayon, la droite a donc un seul point commun : elle est tangente."
  },
  {
   "type": "num",
   "q": "Un secteur circulaire a un rayon de 10 cm et un angle au centre de 72°. Quelle est son aire ? (π = 3,14)",
   "answer": 62.8,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "Aire du disque = 3,14 × 10² = 314 cm². 72° représente 72/360 = 1/5 du tour complet, donc 314 ÷ 5 = 62,8 cm²."
  },
  {
   "type": "order",
   "q": "Classe ces cercles de la circonférence la plus courte à la plus longue.",
   "items": [
    "cercle de rayon 2 cm",
    "cercle de diamètre 6 cm",
    "cercle de rayon 4 cm",
    "cercle de diamètre 10 cm"
   ],
   "explain": "Avec π = 3,14 : rayon 2 cm → 12,56 cm ; diamètre 6 cm → 18,84 cm ; rayon 4 cm → 25,12 cm ; diamètre 10 cm → 31,4 cm."
  }
 ]
});
