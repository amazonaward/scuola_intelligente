QBANK("fr", "l2-mat-sistemi-lineari", {
 "f": [
  { "type": "num", "q": "Résous { x + y = 8 ; x − y = 2 } et donne la valeur de x.", "answer": 5, "explain": "En additionnant : 2x = 10, donc x = 5 (et y = 3)." },
  { "type": "tf", "q": "Toute équation linéaire en x et y représente une droite du plan.", "answer": true, "explain": "Les équations du premier degré en x et y ont pour représentation graphique une droite." },
  { "type": "mc", "q": "Un système qui a une seule solution est dit…", "options": ["déterminé", "impossible", "indéterminé"], "answer": 0, "explain": "Déterminé = une seule solution ; les droites sont sécantes." },
  { "type": "mc", "q": "Dans la méthode par substitution, on exprime une inconnue et…", "options": ["on la remplace dans l'autre équation", "on divise par zéro", "on multiplie par x"], "answer": 0, "explain": "Le système se ramène à une équation à une seule inconnue." },
  { "type": "num", "q": "Si x = 3 et x + y = 10, combien vaut y ?", "answer": 7, "explain": "y = 10 − 3 = 7." }
 ],
 "m": [
  { "type": "mc", "q": "Résous { y = x + 1 ; 2x + y = 7 }.", "options": ["(2, 3)", "(3, 4)", "(1, 2)"], "answer": 0, "explain": "2x + x + 1 = 7 → x = 2, y = 3." },
  { "type": "num", "q": "Résous { 2x + 3y = 13 ; 2x − y = 1 } et donne la valeur de y.", "answer": 3, "explain": "En soustrayant : 4y = 12 → y = 3 (et x = 2)." },
  { "type": "mc", "q": "Le système { x + y = 2 ; x + y = 5 } est…", "options": ["déterminé", "impossible", "indéterminé"], "answer": 1, "explain": "x + y ne peut pas valoir à la fois 2 et 5 : droites parallèles distinctes." },
  { "type": "num", "q": "Calcule D = a b′ − a′ b pour { 4x + y = 3 ; 2x + 3y = 5 }.", "answer": 10, "explain": "D = 4·3 − 2·1 = 10." },
  { "type": "num", "q": "Deux nombres ont pour somme 30 et l'un est le double de l'autre. Quel est le plus grand ?", "answer": 20, "explain": "{ x + y = 30 ; x = 2y } → 3y = 30 → y = 10, x = 20." }
 ],
 "d": [
  { "type": "mc", "q": "Pour quelle valeur de k le système { x + 2y = 4 ; 3x + ky = 12 } est-il indéterminé ?", "options": ["k = 6", "k = 2", "k = 3"], "answer": 0, "explain": "La seconde équation doit être le triple de la première : 3x + 6y = 12, donc k = 6." },
  { "type": "mc", "q": "Pour quelle valeur de k le système { 2x − y = 1 ; 4x − 2y = k } est-il impossible ?", "options": ["k = 2", "k ≠ 2", "k = 0 seulement"], "answer": 1, "explain": "La seconde s'écrit 2(2x − y) = k : elle est équivalente à la première seulement si k = 2 ; pour toute autre valeur de k, les droites sont parallèles distinctes." },
  { "type": "num", "q": "Cramer : résous { 2x + y = 7 ; x + 3y = 11 } et donne la valeur de x.", "answer": 2, "explain": "D = 6 − 1 = 5 ; Dx = 7·3 − 11·1 = 10 ; x = 10/5 = 2 (et y = 3)." },
  { "type": "num", "q": "Un train parcourt un trajet en 3 h avec le vent dans le dos et en 4 h avec le vent de face ; la distance est de 120 km. Quelle est sa vitesse sans vent (km/h) ?", "answer": 35, "explain": "x + v = 40, x − v = 30 → x = 35." },
  { "type": "tf", "q": "Si, dans un système 2×2, D = 0, le système ne peut pas être déterminé.", "answer": true, "explain": "Avec D = 0, les droites ont la même pente : elles sont parallèles ou confondues, jamais sécantes." }
 ]
});
