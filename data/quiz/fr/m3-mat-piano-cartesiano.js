QBANK("fr", "m3-mat-piano-cartesiano", {
 "f": [
  {
   "type": "mc",
   "q": "Comment s'appelle l'axe horizontal du plan cartésien ?",
   "options": [
    "axe y (des ordonnées)",
    "origine",
    "axe x (des abscisses)"
   ],
   "answer": 2,
   "explain": "L'axe horizontal est l'axe x, appelé aussi axe des abscisses ; l'axe vertical est l'axe y."
  },
  {
   "type": "tf",
   "q": "L'origine du plan cartésien a pour coordonnées (0 ; 0).",
   "answer": true,
   "explain": "L'origine est le point où les axes se croisent : x et y valent tous les deux 0."
  },
  {
   "type": "mc",
   "q": "Dans quel quadrant se trouve le point P(−3 ; −6) ?",
   "options": [
    "primo",
    "secondo",
    "terzo",
    "quarto"
   ],
   "answer": 2,
   "explain": "Avec x négatif et y négatif, le point est dans le troisième quadrant (en bas à gauche)."
  },
  {
   "type": "num",
   "q": "Quelle est l'ordonnée du point A(3 ; 8) ?",
   "answer": 8,
   "explain": "Les coordonnées s'écrivent (abscisse ; ordonnée) : l'ordonnée est la seconde, c'est-à-dire 8."
  },
  {
   "type": "text",
   "q": "Comment s'appelle le point où se rencontrent les deux axes cartésiens ?",
   "answer": [
    "origine",
    "l'origine",
    "l origine"
   ],
   "explain": "Le point où les axes se croisent, de coordonnées (0 ; 0), s'appelle l'origine."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Calcule la distance entre les points A(2 ; −1) et B(2 ; 7).",
   "answer": 8,
   "explain": "Les points ont la même abscisse, ils sont donc sur une droite verticale : distance = 7 − (−1) = 8."
  },
  {
   "type": "mc",
   "q": "Quel est le milieu du segment d'extrémités A(0 ; 6) et B(8 ; −2) ?",
   "options": [
    "(4; 4)",
    "(4; 2)",
    "(8; 4)"
   ],
   "answer": 1,
   "explain": "On fait la moyenne des coordonnées : x = (0 + 8) ÷ 2 = 4 ; y = (6 − 2) ÷ 2 = 2. Milieu (4 ; 2)."
  },
  {
   "type": "mc",
   "q": "Laquelle de ces droites passe par l'origine ?",
   "options": [
    "y = 2x + 1",
    "y = −3x",
    "y = x − 4"
   ],
   "answer": 1,
   "explain": "Une droite passe par l'origine si elle n'a pas de terme constant : y = −3x. Avec x = 0 on obtient y = 0."
  },
  {
   "type": "num",
   "q": "Quel est le coefficient directeur de la droite passant par A(0 ; 1) et B(4 ; −7) ?",
   "answer": -2,
   "explain": "m = (y₂ − y₁) ÷ (x₂ − x₁) = (−7 − 1) ÷ (4 − 0) = −8 ÷ 4 = −2."
  },
  {
   "type": "tf",
   "q": "Le point (2 ; 5) appartient à la droite y = 2x + 3.",
   "answer": false,
   "explain": "Faux : pour x = 2 on a y = 2 · 2 + 3 = 7, et non 5. Le point ne vérifie pas l'équation."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Calcule l'aire du triangle de sommets A(1 ; 1), B(7 ; 1) et C(4 ; 6).",
   "answer": 15,
   "unit": "unités d'aire",
   "explain": "La base AB est horizontale et mesure 7 − 1 = 6. La hauteur est la distance de C à la droite y = 1 : 6 − 1 = 5. Aire = 6 × 5 ÷ 2 = 15."
  },
  {
   "type": "num",
   "q": "Calcule la distance entre A(−3 ; −2) et B(5 ; 4).",
   "answer": 10,
   "explain": "Différences : Δx = 5 − (−3) = 8 et Δy = 4 − (−2) = 6. Par Pythagore : √(8² + 6²) = √100 = 10."
  },
  {
   "type": "mc",
   "q": "En quels points la droite y = 2x − 6 coupe-t-elle l'axe x et l'axe y ?",
   "options": [
    "(−3; 0) e (0; 6)",
    "(6; 0) e (0; −3)",
    "(3; 0) e (0; −6)",
    "(0; 3) e (−6; 0)"
   ],
   "answer": 2,
   "explain": "Axe x : on pose y = 0, donc 2x = 6 et x = 3, point (3 ; 0). Axe y : on pose x = 0, donc y = −6, point (0 ; −6)."
  },
  {
   "type": "tf",
   "q": "Les droites y = 2x + 1 et y = −x/2 + 3 sont perpendiculaires.",
   "answer": true,
   "explain": "Deux droites sont perpendiculaires si le produit de leurs coefficients directeurs vaut −1 : 2 × (−1/2) = −1."
  },
  {
   "type": "order",
   "q": "Classe ces points selon leur distance à l'origine, du plus proche au plus éloigné.",
   "items": [
    "A(0; 3)",
    "B(3; 4)",
    "C(−6; 8)",
    "D(5; −12)"
   ],
   "explain": "Distances à O : A = 3 ; B = √(9 + 16) = 5 ; C = √(36 + 64) = 10 ; D = √(25 + 144) = 13."
  }
 ]
});
