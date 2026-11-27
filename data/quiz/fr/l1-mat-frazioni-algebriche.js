QBANK("fr", "l1-mat-frazioni-algebriche", {
 "f": [
  { "type": "mc", "q": "Une fraction rationnelle a un sens quand…", "options": ["le dénominateur est différent de zéro", "le numérateur est différent de zéro", "les lettres sont égales"], "answer": 0, "explain": "On ne peut pas diviser par zéro : le dénominateur doit être différent de 0." },
  { "type": "num", "q": "Calcule 8/x pour x = 4.", "answer": 2, "explain": "8 : 4 = 2." },
  { "type": "tf", "q": "x/x = 1 pour toute valeur de x différente de zéro.", "answer": true, "explain": "Un nombre divisé par lui-même donne 1, à condition qu'il ne soit pas 0." },
  { "type": "mc", "q": "Les CE de 5/(x + 7) sont…", "options": ["x ≠ −7", "x ≠ 7", "x ≠ 5"], "answer": 0, "explain": "x + 7 = 0 pour x = −7." },
  { "type": "num", "q": "Calcule (x² − 9)/(x − 3) pour x = 8.", "answer": 11, "explain": "La fraction se simplifie en x + 3 = 11. Vérification : 55/5 = 11." }
 ],
 "m": [
  { "type": "mc", "q": "Simplifie (2x + 6)/(x + 3).", "options": ["2", "x + 2", "2x"], "answer": 0, "explain": "2(x + 3)/(x + 3) = 2, avec x ≠ −3." },
  { "type": "num", "q": "x/2 + x/3 = 5x/6. Combien cela vaut-il pour x = 6 ?", "answer": 5, "explain": "5 · 6/6 = 5. En effet 3 + 2 = 5." },
  { "type": "mc", "q": "Les CE de 1/(x² − x) sont…", "options": ["x ≠ 0 et x ≠ 1", "x ≠ 1", "x ≠ 0"], "answer": 0, "explain": "x² − x = x(x − 1) s'annule pour x = 0 et x = 1." },
  { "type": "tf", "q": "(a + b)/a = 1 + b, en simplifiant par a.", "answer": false, "explain": "(a + b)/a = 1 + b/a. a n'est pas un facteur du numérateur." },
  { "type": "mc", "q": "x/(x + 1) · (x + 1)/x² =", "options": ["1/x", "x", "1/x²"], "answer": 0, "explain": "On simplifie par x + 1 et par un x : il reste 1/x, avec x ≠ 0, −1." }
 ],
 "d": [
  { "type": "mc", "q": "1/(x − 1) − 1/(x + 1) =", "options": ["2/(x² − 1)", "0", "2x/(x² − 1)"], "answer": 0, "explain": "[(x + 1) − (x − 1)]/(x² − 1) = 2/(x² − 1)." },
  { "type": "num", "q": "(x³ − x)/(x² − x) se simplifie en x + 1. Calcule sa valeur pour x = 9.", "answer": 10, "explain": "x(x − 1)(x + 1)/[x(x − 1)] = x + 1 = 10." },
  { "type": "mc", "q": "Quelles sont les CE de x/(x − 1) : (x + 2)/(x − 3) ?", "options": ["x ≠ 1, x ≠ 3", "x ≠ 1, x ≠ 3, x ≠ −2", "x ≠ −2"], "answer": 1, "explain": "Il faut des dénominateurs non nuls (x ≠ 1, x ≠ 3) et aussi un diviseur non nul : x + 2 ≠ 0." },
  { "type": "num", "q": "Deux résistances de 12 Ω et 4 Ω en parallèle : quelle est la résistance équivalente, en ohms ?", "answer": 3, "unit": "Ω", "explain": "R = 12·4/(12 + 4) = 48/16 = 3 Ω." },
  { "type": "tf", "q": "(x² − 4)/(x − 2) et x + 2 sont égaux pour tout x, y compris x = 2.", "answer": false, "explain": "La fraction n'existe pas pour x = 2, alors que x + 2 existe : ils ne sont égaux que pour x ≠ 2." }
 ]
});
