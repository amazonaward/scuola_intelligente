QBANK("fr", "l1-fis-vettori-forze", {
 "f": [
  { "type": "mc", "q": "Quelle est l'unité de force dans le SI ?", "options": ["Newton", "Joule", "Kilogramme"], "answer": 0, "explain": "La force se mesure en newtons (N)." },
  { "type": "tf", "q": "La masse est une grandeur vectorielle.", "answer": false, "explain": "La masse est scalaire : elle n'a qu'une valeur." },
  { "type": "mc", "q": "Quel instrument mesure les forces ?", "options": ["Dynamomètre", "Thermomètre", "Chronomètre"], "answer": 0, "explain": "Le dynamomètre utilise l'allongement d'un ressort." },
  { "type": "num", "q": "Deux forces de 3 N et 5 N ont la même direction et le même sens. Quelle est la norme de la résultante ?", "answer": 8, "tol": 0, "unit": "N", "explain": "On additionne les normes : 3 + 5 = 8 N." },
  { "type": "mc", "q": "Dans quelle direction agit le poids ?", "options": ["Vers le centre de la Terre", "À l'horizontale", "Vers le haut"], "answer": 0, "explain": "Le poids est vertical, dirigé vers le bas." }
 ],
 "m": [
  { "type": "num", "q": "Calcule le poids d'un corps de 12 kg sur Terre (g = 9,8 m/s²).", "answer": 117.6, "tol": 0.1, "unit": "N", "explain": "P = 12 × 9,8 = 117,6 N." },
  { "type": "num", "q": "Un ressort de raideur k = 80 N/m est allongé de 0,15 m. Quelle est la valeur de la force élastique ?", "answer": 12, "tol": 0.01, "unit": "N", "explain": "F = 80 × 0,15 = 12 N." },
  { "type": "num", "q": "Deux forces perpendiculaires de 5 N et 12 N : calcule la norme de la résultante.", "answer": 13, "tol": 0, "unit": "N", "explain": "√(25 + 144) = √169 = 13 N." },
  { "type": "tf", "q": "Le poids d'un astronaute est le même sur la Terre et sur la Lune.", "answer": false, "explain": "Sur la Lune, g vaut environ 1/6 : le poids est environ six fois plus petit, la masse reste la même." },
  { "type": "mc", "q": "À quoi s'opposent les frottements ?", "options": ["Au glissement entre les surfaces", "À la gravité", "À l'allongement d'un ressort", "À la masse"], "answer": 0, "explain": "Les frottements agissent le long des surfaces en contact et s'opposent à leur mouvement relatif." }
 ],
 "d": [
  { "type": "num", "q": "Un corps de 6 kg se trouve en un lieu où g = 1,6 m/s² : quel est son poids ?", "answer": 9.6, "tol": 0.01, "unit": "N", "explain": "P = 6 × 1,6 = 9,6 N." },
  { "type": "num", "q": "Un bloc de 10 kg (g = 10 m/s²) est immobile sur un plan horizontal avec μ_s = 0,4. Quelle est la force minimale pour le mettre en mouvement ?", "answer": 40, "tol": 0.1, "unit": "N", "explain": "N = 100 N ; F_s,max = 0,4 × 100 = 40 N." },
  { "type": "mc", "q": "Un ressort suspendu à un support s'allonge de 4 cm sous un poids de 2 N. Avec 6 N (dans la limite d'élasticité), de combien s'allonge-t-il ?", "options": ["8 cm", "10 cm", "12 cm", "16 cm"], "answer": 2, "explain": "k = 2/0,04 = 50 N/m ; Δx = 6/50 = 0,12 m = 12 cm." },
  { "type": "mc", "q": "Un bateau avance perpendiculairement à la rive à 12 m/s sur une rivière dont le courant va à 5 m/s. Quelle est la norme de sa vitesse par rapport à la rive ?", "options": ["7 m/s", "13 m/s", "17 m/s", "60 m/s"], "answer": 1, "explain": "√(12² + 5²) = √169 = 13 m/s." },
  { "type": "tf", "q": "Si la somme vectorielle des forces exercées sur un corps est nulle, les normes de toutes les forces doivent être nulles.", "answer": false, "explain": "Par exemple, deux forces égales et opposées ont une résultante nulle même si leurs normes ne sont pas nulles." }
 ]
});
