QBANK("fr", "l1-mat-statistica", {
 "f": [
  { "type": "mc", "q": "Quel caractère est qualitatif ?", "options": ["La couleur préférée", "La taille", "Le nombre de frères et sœurs"], "answer": 0, "explain": "Les modalités sont des mots, pas des nombres." },
  { "type": "num", "q": "Quelle est la moyenne de 2, 4 et 6 ?", "answer": 4, "explain": "(2 + 4 + 6)/3 = 4." },
  { "type": "tf", "q": "Le mode est la valeur qui apparaît le plus souvent.", "answer": true, "explain": "C'est la modalité qui a le plus grand effectif." },
  { "type": "num", "q": "Quelle est la médiane de 1, 5, 9 ?", "answer": 5, "explain": "La donnée centrale des valeurs rangées est 5." },
  { "type": "num", "q": "Dans une classe de 20 élèves, 8 viennent à pied. Quelle est la fréquence en pourcentage ?", "answer": 40, "unit": "%", "explain": "8/20 = 0,40 → 40 %." }
 ],
 "m": [
  { "type": "num", "q": "Quelle est la moyenne de 5, 7, 8, 10 ?", "answer": 7.5, "tol": 0.001, "explain": "30/4 = 7,5." },
  { "type": "num", "q": "Quelle est la médiane de 2, 3, 7, 8 ?", "answer": 5, "explain": "N pair : (3 + 7)/2 = 5." },
  { "type": "mc", "q": "Quel est le mode de 5, 6, 6, 7, 8, 8, 8 ?", "options": ["8", "6", "7"], "answer": 0, "explain": "Le 8 apparaît trois fois." },
  { "type": "tf", "q": "La somme de toutes les fréquences vaut toujours 1.", "answer": true, "explain": "Les effectifs ont pour somme N, donc les fréquences ont pour somme N/N = 1." },
  { "type": "num", "q": "Quelle est l'étendue de 11, 4, 8, 15, 6 ?", "answer": 11, "explain": "15 − 4 = 11." }
 ],
 "d": [
  { "type": "num", "q": "Calcule la variance de 2, 4, 4, 4, 5, 5, 7, 9.", "answer": 4, "explain": "Moyenne 5 ; somme des carrés des écarts 32 ; 32/8 = 4." },
  { "type": "mc", "q": "Si tu ajoutes à une série de données une valeur beaucoup plus grande que toutes les autres…", "options": ["la moyenne augmente beaucoup, la médiane peu", "la médiane augmente beaucoup, la moyenne peu", "la moyenne et la médiane ne changent pas"], "answer": 0, "explain": "La moyenne est influencée par chaque valeur ; la médiane ne dépend que de la position centrale." },
  { "type": "num", "q": "La moyenne de 5 nombres est 60. Quatre d'entre eux sont 52, 58, 61 et 64. Combien vaut le cinquième ?", "answer": 65, "explain": "Somme totale 300 ; 300 − (52 + 58 + 61 + 64) = 300 − 235 = 65." },
  { "type": "tf", "q": "La somme des écarts des données à leur moyenne arithmétique est toujours nulle.", "answer": true, "explain": "Les écarts positifs et négatifs se compensent exactement." },
  { "type": "num", "q": "Une série a une variance de 25. Combien vaut l'écart-type ?", "answer": 5, "explain": "σ = √25 = 5." }
 ]
});
