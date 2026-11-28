QBANK("fr", "l2-mat-probabilita", {
  "f": [
    { "type": "num", "q": "On lance une pièce. Quelle est la probabilité (en %) d'obtenir face ?", "answer": 50, "unit": "%", "explain": "1 cas favorable sur 2 possibles : 1/2 = 50 %." },
    { "type": "mc", "q": "Un événement impossible a pour probabilité…", "options": ["0", "1", "0,5"], "answer": 0, "explain": "Il ne se réalise jamais : p = 0." },
    { "type": "num", "q": "On lance un dé. Combien y a-t-il de cas possibles ?", "answer": 6, "unit": "", "explain": "Les six faces : 1, 2, 3, 4, 5, 6." },
    { "type": "tf", "q": "L'événement certain a pour probabilité 1.", "answer": true, "explain": "Il se réalise toujours : p = 1 = 100 %." },
    { "type": "num", "q": "Une urne contient 2 boules rouges et 8 bleues. Quelle est la probabilité (en %) de tirer une boule rouge ?", "answer": 20, "unit": "%", "explain": "2/10 = 20 %." }
  ],
  "m": [
    { "type": "num", "q": "On lance un dé une fois. Quelle est la probabilité (en %, nombre entier) d'obtenir un nombre premier ? (2, 3, 5)", "answer": 50, "unit": "%", "explain": "Les nombres premiers de {1,…,6} sont 2, 3, 5 : 3/6 = 50 %." },
    { "type": "num", "q": "p(E) = 0,35. Combien vaut la probabilité de l'événement contraire ?", "answer": 0.65, "tol": 0.001, "unit": "", "explain": "1 − 0,35 = 0,65." },
    { "type": "tf", "q": "Si un événement a une probabilité de 0,8, il est plus probable qu'il se réalise que le contraire.", "answer": true, "explain": "Le contraire a une probabilité de 0,2 : il est donc moins probable." },
    { "type": "mc", "q": "Je lance deux dés : quelle somme est la plus probable ?", "options": ["2", "7", "12"], "answer": 1, "explain": "Le 7 s'obtient de 6 façons sur 36 ; le 2 et le 12 d'une seule." },
    { "type": "num", "q": "On tire une carte d'un jeu de 40. Probabilité (en %) de tirer un as ou un roi ?", "answer": 20, "unit": "%", "explain": "4/40 + 4/40 = 8/40 = 20 %." }
  ],
  "d": [
    { "type": "num", "q": "Probabilité (en %) de tirer d'un jeu de 52 cartes un roi ou un cœur (roi de cœur compris) ? Arrondis à l'unité.", "answer": 31, "tol": 1, "unit": "%", "explain": "4/52 + 13/52 − 1/52 = 16/52 ≈ 30,8 % ≈ 31 %." },
    { "type": "num", "q": "On lance une pièce 3 fois. Probabilité (en %) d'obtenir trois fois face ?", "answer": 12.5, "tol": 0.1, "unit": "%", "explain": "(1/2)³ = 1/8 = 12,5 %." },
    { "type": "num", "q": "Une urne contient 4 boules blanches et 6 noires. On tire deux boules sans remettre la première. Probabilité (en %, arrondie à l'unité) qu'elles soient toutes les deux blanches ?", "answer": 13, "tol": 1, "unit": "%", "explain": "4/10 · 3/9 = 12/90 = 2/15 ≈ 13,3 %." },
    { "type": "mc", "q": "Quelle est la probabilité d'obtenir au moins une fois face en 2 lancers de pièce ?", "options": ["1/2", "3/4", "1"], "answer": 1, "explain": "Le contraire est « aucune fois face » (PP) = 1/4 ; donc 1 − 1/4 = 3/4." },
    { "type": "tf", "q": "Après 6 faces consécutifs, la probabilité d'obtenir pile au lancer suivant est supérieure à 1/2.", "answer": false, "explain": "Les lancers sont indépendants : la probabilité reste 1/2." }
  ]
});
