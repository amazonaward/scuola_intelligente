QBANK("fr", "l1-mat-insiemi-numerici", {
 "f": [
  { "type": "mc", "q": "Lequel de ces nombres n'est pas un entier naturel ?", "options": ["0", "17", "−5"], "answer": 2, "explain": "−5 est un entier négatif : il appartient à ℤ mais pas à ℕ." },
  { "type": "num", "q": "Calcule : 3 + 4 · 5", "answer": 23, "explain": "D'abord la multiplication : 4 · 5 = 20, puis 3 + 20 = 23." },
  { "type": "num", "q": "Combien vaut 2⁵ ?", "answer": 32, "explain": "2 · 2 · 2 · 2 · 2 = 32." },
  { "type": "tf", "q": "Le nombre 1/2 est un nombre rationnel.", "answer": true, "explain": "C'est une fraction de deux entiers dont le dénominateur est non nul." },
  { "type": "text", "q": "Comment s'appelle le nombre situé sous la barre de fraction ?", "answer": ["dénominateur", "le dénominateur", "denominateur"], "explain": "Le dénominateur indique en combien de parts égales l'unité est partagée." }
 ],
 "m": [
  { "type": "num", "q": "Calcule : (−3) · (−4) + (−2)", "answer": 10, "explain": "(−3)(−4) = +12 ; 12 + (−2) = 10." },
  { "type": "num", "q": "Calcule : 5⁷ : 5⁴ (sous forme de nombre)", "answer": 125, "explain": "Même base : 5^(7−4) = 5³ = 125." },
  { "type": "mc", "q": "Combien font 1/2 + 1/3 ?", "options": ["2/5", "5/6", "1/6"], "answer": 1, "explain": "Dénominateur commun 6 : 3/6 + 2/6 = 5/6." },
  { "type": "mc", "q": "Laquelle de ces fractions donne un décimal fini ?", "options": ["1/3", "1/6", "1/8"], "answer": 2, "explain": "8 = 2³ n'a que le facteur 2 : 1/8 = 0,125. Le 3 au dénominateur (1/3 et 1/6) donne un développement périodique." },
  { "type": "tf", "q": "La valeur de −4² est 16.", "answer": false, "explain": "La puissance est prioritaire sur le signe moins : −4² = −(4²) = −16. En revanche (−4)² = 16." }
 ],
 "d": [
  { "type": "mc", "q": "Quelle est la fraction génératrice de 0,2(7) ?", "options": ["27/99", "25/90", "27/90"], "answer": 1, "explain": "Numérateur : 27 − 2 = 25 ; dénominateur : 90 (un 9 pour la période, un 0 pour l'antépériode). 25/90 = 5/18." },
  { "type": "num", "q": "Calcule : (2/3)⁻² et écris le résultat sous forme décimale.", "answer": 2.25, "tol": 0.001, "explain": "(2/3)⁻² = (3/2)² = 9/4 = 2,25." },
  { "type": "num", "q": "Calcule : 3,(6) − 1,(3)", "answer": 2.33, "tol": 0.01, "explain": "3,(6) = 33/9 = 11/3 et 1,(3) = 12/9 = 4/3 ; la différence est 7/3 ≈ 2,33." },
  { "type": "tf", "q": "L'équation 3x = 7 a une solution dans ℤ.", "answer": false, "explain": "La solution est x = 7/3, qui n'est pas un entier : elle n'a de solution que dans ℚ." },
  { "type": "mc", "q": "Quelle démonstration prouve que √2 n'est pas rationnel ?", "options": ["Une vérification numérique jusqu'à 1000 chiffres", "Une démonstration par l'absurde : si a/b était irréductible, a et b seraient tous deux pairs", "Le fait que √2 a une infinité de chiffres"], "answer": 1, "explain": "De a² = 2b², on déduit que a est pair, puis que b est pair : contradiction avec a/b irréductible. 1/3 = 0,(3) a aussi une infinité de chiffres, et pourtant il est rationnel." }
 ]
});
