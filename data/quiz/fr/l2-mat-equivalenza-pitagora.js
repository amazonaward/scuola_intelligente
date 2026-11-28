QBANK("fr", "l2-mat-equivalenza-pitagora", {
  "f": [
    { "type": "num", "q": "Un rectangle a une base de 8 cm et une hauteur de 5 cm. Quelle est son aire ?", "answer": 40, "unit": "cm²", "explain": "A = b · h = 8 · 5 = 40 cm²." },
    { "type": "tf", "q": "L'hypoténuse est le plus long côté d'un triangle rectangle.", "answer": true, "explain": "Comme elle est opposée au plus grand angle (90°), c'est le plus grand côté." },
    { "type": "num", "q": "Les côtés de l'angle droit d'un triangle rectangle mesurent 3 cm et 4 cm. Combien mesure l'hypoténuse ?", "answer": 5, "unit": "cm", "explain": "√(9 + 16) = √25 = 5 cm." },
    { "type": "mc", "q": "Quelle formule exprime le théorème de Pythagore (c étant l'hypoténuse) ?", "options": ["a + b = c", "a² + b² = c²", "a · b = c"], "answer": 1, "explain": "La somme des carrés des côtés de l'angle droit est égale au carré de l'hypoténuse." },
    { "type": "num", "q": "Un triangle a une base de 12 cm et une hauteur de 5 cm. Quelle est son aire ?", "answer": 30, "unit": "cm²", "explain": "A = 12 · 5 / 2 = 30 cm²." }
  ],
  "m": [
    { "type": "num", "q": "Un côté de l'angle droit d'un triangle rectangle mesure 6 cm et l'hypoténuse 10 cm. Combien mesure l'autre côté ?", "answer": 8, "unit": "cm", "explain": "√(100 − 36) = √64 = 8 cm." },
    { "type": "tf", "q": "Un triangle de côtés 9, 12 et 15 cm est rectangle.", "answer": true, "explain": "9² + 12² = 81 + 144 = 225 = 15² : la réciproque du théorème de Pythagore s'applique." },
    { "type": "num", "q": "Un trapèze a des bases de 9 cm et 5 cm et une hauteur de 4 cm. Quelle est son aire ?", "answer": 28, "unit": "cm²", "explain": "A = (B + b) · h / 2 = 14 · 4 / 2 = 28 cm²." },
    { "type": "mc", "q": "Lequel de ces triplets n'est PAS pythagoricien ?", "options": ["(5, 12, 13)", "(6, 8, 10)", "(4, 5, 6)"], "answer": 2, "explain": "4² + 5² = 41, alors que 6² = 36 : ce n'est pas un triplet pythagoricien." },
    { "type": "num", "q": "Dans un triangle rectangle, c = 20 cm et la projection du côté a est p = 5 cm. Combien mesure a ?", "answer": 10, "unit": "cm", "explain": "Premier théorème d'Euclide : a² = c · p = 100, a = 10 cm." }
  ],
  "d": [
    { "type": "num", "q": "Les projections des côtés de l'angle droit sur l'hypoténuse mesurent 9 cm et 16 cm. Combien mesure le plus long côté de l'angle droit ?", "answer": 20, "unit": "cm", "explain": "c = 25, b² = c · q = 25 · 16 = 400, donc b = 20 cm." },
    { "type": "num", "q": "Un losange a des diagonales de 16 cm et 12 cm. Combien mesure son côté ?", "answer": 10, "unit": "cm", "explain": "Les diagonales sont perpendiculaires et se coupent en leur milieu : le côté vaut √(8² + 6²) = 10 cm." },
    { "type": "num", "q": "Un triangle isocèle a une base de 16 cm et deux côtés égaux de 17 cm. Combien mesure sa hauteur ?", "answer": 15, "unit": "cm", "explain": "La hauteur coupe la base en son milieu : h = √(17² − 8²) = √225 = 15 cm." },
    { "type": "num", "q": "Un triangle rectangle a une hypoténuse de 13 cm et une hauteur relative à l'hypoténuse de 60/13 cm. Quelle est son aire ? (Les côtés de l'angle droit mesurent 5 et 12.)", "answer": 30, "unit": "cm²", "explain": "A = a · b / 2 = 5 · 12 / 2 = 30 cm², ce qui coïncide avec c · h / 2 = 13 · (60/13) / 2 = 30 cm²." },
    { "type": "mc", "q": "Pourquoi le théorème de Pythagore mène-t-il à la découverte des nombres irrationnels ?", "options": ["Parce que dans le carré de côté 1, la diagonale vaut √2, qui ne s'écrit pas sous forme de fraction", "Parce qu'il demande de très grands nombres", "Parce qu'il ne vaut que pour les triangles équilatéraux"], "answer": 0, "explain": "La diagonale du carré de côté 1 est √2, qui n'est pas un rapport de nombres entiers : elle est incommensurable avec le côté." }
  ]
});
