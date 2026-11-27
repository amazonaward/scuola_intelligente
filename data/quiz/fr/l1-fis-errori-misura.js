QBANK("fr", "l1-fis-errori-misura", {
 "f": [
  { "type": "mc", "q": "Pour une règle graduée en millimètres, quelle est la sensibilité ?", "options": ["1 mm", "1 cm", "0,1 mm"], "answer": 0, "explain": "La sensibilité est la plus petite graduation de l'échelle : 1 mm." },
  { "type": "tf", "q": "Toute mesure est entachée d'une erreur, c'est-à-dire d'une incertitude.", "answer": true, "explain": "Aucun instrument n'est parfait : toute mesure a une incertitude." },
  { "type": "mc", "q": "Par quelle opération obtient-on la valeur moyenne de plusieurs mesures ?", "options": ["Somme des mesures divisée par le nombre de mesures", "Produit des mesures", "Différence entre le maximum et le minimum"], "answer": 0, "explain": "La valeur moyenne est la somme divisée par N." },
  { "type": "num", "q": "Calcule la moyenne de 4 cm, 6 cm et 8 cm.", "answer": 6, "tol": 0, "unit": "cm", "explain": "(4 + 6 + 8)/3 = 18/3 = 6 cm." },
  { "type": "text", "q": "Comment appelle-t-on la valeur maximale qu'un instrument peut mesurer ?", "answer": ["calibre", "le calibre", "portée", "la portée"], "explain": "C'est le calibre (ou la portée) de l'instrument." }
 ],
 "m": [
  { "type": "num", "q": "Mesures : 5,2 s ; 5,6 s ; 5,4 s. Calcule l'incertitude absolue comme demi-dispersion.", "answer": 0.2, "tol": 0.001, "unit": "s", "explain": "(5,6 − 5,2)/2 = 0,2 s." },
  { "type": "num", "q": "Une mesure vaut (20 ± 1) cm. Quelle est l'incertitude en pourcentage ?", "answer": 5, "tol": 0.01, "unit": "%", "explain": "1/20 = 0,05, soit 5 %." },
  { "type": "mc", "q": "Combien de chiffres significatifs a 0,0705 ?", "options": ["2", "3", "4", "5"], "answer": 1, "explain": "Les zéros à gauche ne comptent pas ; 7, 0, 5 sont significatifs : 3 chiffres." },
  { "type": "tf", "q": "Une erreur aléatoire se réduit en augmentant le nombre de mesures et en faisant la moyenne.", "answer": true, "explain": "Les erreurs aléatoires, allant tantôt en plus, tantôt en moins, se compensent en partie." },
  { "type": "mc", "q": "Un thermomètre indique toujours 2 degrés de plus que la valeur réelle. De quelle erreur s'agit-il ?", "options": ["Systématique", "Aléatoire", "Grossière", "Nulle"], "answer": 0, "explain": "Elle décale toutes les mesures dans le même sens." }
 ],
 "d": [
  { "type": "mc", "q": "Un rectangle a pour côtés (4,0 ± 0,1) cm et (2,0 ± 0,1) cm. Quelle est l'incertitude absolue du périmètre ?", "options": ["0,2 cm", "0,4 cm", "0,6 cm", "0,3 cm"], "answer": 1, "explain": "Le périmètre vaut 2(a + b) : les incertitudes absolues s'additionnent pour chaque côté : 4 × 0,1 = 0,4 cm." },
  { "type": "mc", "q": "Laquelle des deux mesures est la meilleure : (100 ± 2) m ou (10,0 ± 0,5) cm ?", "options": ["La première, car 2 % est inférieur à 5 %", "La seconde, car 0,5 < 2", "Elles se valent", "On ne peut pas savoir"], "answer": 0, "explain": "On compare les incertitudes relatives : 2/100 = 2 % contre 0,5/10 = 5 %." },
  { "type": "num", "q": "Calcule 2,5 × 3,24 et arrondis en respectant les chiffres significatifs. Combien de chiffres significatifs a le résultat ?", "answer": 2, "tol": 0, "explain": "La donnée qui a le moins de chiffres (2,5) en a 2 : le résultat 8,1 a 2 chiffres." },
  { "type": "tf", "q": "Une mesure peut être très fidèle mais peu juste.", "answer": true, "explain": "S'il y a une erreur systématique, les valeurs sont proches les unes des autres mais loin de la valeur vraie." },
  { "type": "mc", "q": "Quelle est l'écriture correcte du résultat ? Moyenne 21,44 cm, incertitude 0,15 cm.", "options": ["(21,4 ± 0,2) cm", "(21,44 ± 0,15) cm avec 4 chiffres", "(21 ± 0,15) cm", "21,4 cm sans incertitude"], "answer": 0, "explain": "L'incertitude a un seul chiffre significatif et la valeur a le même nombre de décimales que l'incertitude." }
 ]
});
