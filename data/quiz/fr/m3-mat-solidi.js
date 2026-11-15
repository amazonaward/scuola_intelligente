QBANK("fr", "m3-mat-solidi", {
 "f": [
  {
   "type": "mc",
   "q": "Quel solide a 6 faces carrées toutes identiques ?",
   "options": [
    "sfera",
    "cubo",
    "cono"
   ],
   "answer": 1,
   "explain": "Le cube a 6 faces carrées identiques. La sphère et le cône sont des solides de révolution."
  },
  {
   "type": "tf",
   "q": "La sphère est un polyèdre.",
   "answer": false,
   "explain": "Faux : un polyèdre n'a que des faces planes. La sphère a une surface courbe, c'est donc un solide de révolution."
  },
  {
   "type": "num",
   "q": "Combien de faces a une pyramide à base carrée ?",
   "answer": 5,
   "explain": "Elle a 1 base carrée et 4 faces latérales triangulaires : 5 faces en tout."
  },
  {
   "type": "mc",
   "q": "Une canette de boisson a la forme d'un…",
   "options": [
    "cono",
    "prisma",
    "cilindro"
   ],
   "answer": 2,
   "explain": "Une canette a deux bases circulaires identiques et une surface latérale courbe : c'est un cylindre."
  },
  {
   "type": "text",
   "q": "Comment s'appelle le solide obtenu en faisant tourner un triangle rectangle autour d'un côté de l'angle droit ?",
   "answer": [
    "cône",
    "cone",
    "un cône",
    "le cône"
   ],
   "explain": "En faisant tourner un triangle rectangle autour d'un côté de l'angle droit, on obtient un cône."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un pot cylindrique a un rayon de 3 cm et une hauteur de 5 cm. Quel est son volume ? (π = 3,14)",
   "answer": 141.3,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = π × r² × h = 3,14 × 3² × 5 = 3,14 × 45 = 141,3 cm³."
  },
  {
   "type": "num",
   "q": "Un cornet de glace a un rayon de base de 3 cm et une hauteur de 4 cm. Quel est son volume ? (π = 3,14)",
   "answer": 37.68,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = (π × r² × h) ÷ 3 = (3,14 × 9 × 4) ÷ 3 = 113,04 ÷ 3 = 37,68 cm³."
  },
  {
   "type": "num",
   "q": "Une piscine est un parallélépipède de 10 m × 5 m × 2 m. Combien de litres d'eau contient-elle quand elle est pleine ?",
   "answer": 100000,
   "unit": "litres",
   "explain": "V = 10 × 5 × 2 = 100 m³. Comme 1 m³ = 1000 litres, la piscine contient 100 × 1000 = 100 000 litres."
  },
  {
   "type": "mc",
   "q": "L'aire totale d'un cube est de 54 cm². Combien mesure son arête ?",
   "options": [
    "9 cm",
    "3 cm",
    "6 cm"
   ],
   "answer": 1,
   "explain": "St = 6 × s² = 54, donc s² = 54 ÷ 6 = 9 et s = √9 = 3 cm."
  },
  {
   "type": "tf",
   "q": "Si on double l'arête d'un cube, son volume double.",
   "answer": false,
   "explain": "Faux : V = s³. Avec l'arête 2s on a (2s)³ = 8s³, le volume devient donc 8 fois plus grand."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un récipient cylindrique de rayon 5 cm, rempli d'eau sur une hauteur de 12 cm, est vidé dans un bac à base carrée de côté 10 cm. Jusqu'à quelle hauteur monte l'eau dans le bac ? (π = 3,14)",
   "answer": 9.42,
   "tol": 0.02,
   "unit": "cm",
   "explain": "Volume d'eau = 3,14 × 5² × 12 = 942 cm³. Aire de la base du bac = 10 × 10 = 100 cm². Hauteur = 942 ÷ 100 = 9,42 cm."
  },
  {
   "type": "num",
   "q": "Un bloc de bois est un parallélépipède de 20 cm × 10 cm × 5 cm de poids spécifique 0,6 g/cm³. Combien pèse-t-il ?",
   "answer": 600,
   "unit": "g",
   "explain": "Volume = 20 × 10 × 5 = 1000 cm³. Poids = volume × poids spécifique = 1000 × 0,6 = 600 g."
  },
  {
   "type": "mc",
   "q": "Un cylindre a un rayon de 3 cm et une hauteur de 10 cm. Quelle est l'aire de sa surface latérale ? (π = 3,14)",
   "options": [
    "94,2 cm²",
    "188,4 cm²",
    "282,6 cm²"
   ],
   "answer": 1,
   "explain": "Surface latérale = 2 × π × r × h = 2 × 3,14 × 3 × 10 = 188,4 cm². C'est l'aire du rectangle obtenu en déroulant la surface."
  },
  {
   "type": "tf",
   "q": "Pour le volume d'un cylindre avec r = 4 cm et h = 5 cm, Marc calcule 3,14 × 4 × 5 = 62,8 cm³. Son calcul est correct.",
   "answer": false,
   "explain": "Faux : dans la formule le rayon doit être élevé au carré. V = 3,14 × 4² × 5 = 3,14 × 80 = 251,2 cm³."
  },
  {
   "type": "order",
   "q": "Classe ces solides du plus petit au plus grand volume.",
   "items": [
    "cube d'arête 3 cm",
    "parallélépipède 2 cm × 3 cm × 5 cm",
    "cylindre de rayon 2 cm et de hauteur 3 cm (π = 3,14)",
    "prisme d'aire de base 10 cm² et de hauteur 4 cm",
    "cube d'arête 4 cm"
   ],
   "explain": "Volumes : 27 cm³ ; 30 cm³ ; 3,14 × 4 × 3 = 37,68 cm³ ; 10 × 4 = 40 cm³ ; 64 cm³."
  }
 ]
});
