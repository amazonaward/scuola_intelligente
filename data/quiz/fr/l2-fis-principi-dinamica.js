QBANK("fr", "l2-fis-principi-dinamica", {
  f: [
    { type: "mc", q: "Quelle loi affirme qu'un corps soumis à aucune force conserve sa vitesse ?", options: ["La première", "La deuxième", "La troisième"], answer: 0, explain: "C'est le principe d'inertie." },
    { type: "tf", q: "Pour une même force, un corps plus lourd accélère moins.", answer: true, explain: "a = F/m : plus de masse, moins d'accélération." },
    { type: "num", q: "Quelle force faut-il pour communiquer 2 m/s² à une masse de 5 kg ?", answer: 10, tol: 0.1, unit: "N", explain: "F = m·a = 5 · 2 = 10 N." },
    { type: "text", q: "Comment s'appelle la tendance d'un corps à conserver son état de mouvement ?", answer: ["inertie", "l'inertie", "linertie"], explain: "On l'appelle l'inertie." },
    { type: "tf", q: "Si tu pousses un mur, le mur te pousse avec la même force.", answer: true, explain: "Troisième loi : l'action et la réaction ont la même valeur." }
  ],
  m: [
    { type: "num", q: "Un chariot de 4 kg a une accélération de 3 m/s². Quelle est la force résultante ?", answer: 12, tol: 0.1, unit: "N", explain: "F = 4 · 3 = 12 N." },
    { type: "mc", q: "Dans une voiture qui freine brusquement, les passagers sont projetés vers l'avant parce que...", options: ["Une force les pousse vers l'avant", "Par inertie, ils tendent à conserver leur vitesse", "L'air les pousse", "Leur poids augmente"], answer: 1, explain: "Aucune force vers l'avant n'agit sur le corps : il tend à conserver la vitesse qu'il avait." },
    { type: "num", q: "Combien vaut l'accélération d'un corps de 8 kg soumis à une force résultante de 20 N ?", answer: 2.5, tol: 0.05, unit: "m/s²", explain: "a = 20/8 = 2,5 m/s²." },
    { type: "mc", q: "Une personne de 60 kg se trouve dans un ascenseur à l'arrêt (g = 10 m/s²) : combien vaut la réaction normale ?", options: ["60 N", "600 N", "6 N", "0 N"], answer: 1, explain: "N = m·g = 60 · 10 = 600 N." },
    { type: "tf", q: "Sur la Lune, la masse d'un astronaute est plus petite que sur la Terre.", answer: false, explain: "La masse ne change pas ; c'est le poids qui change, car le g lunaire vaut environ un sixième du g terrestre." }
  ],
  d: [
    { type: "num", q: "Deux forces perpendiculaires de 6 N et 8 N agissent sur un corps de 2 kg. Calcule l'accélération.", answer: 5, tol: 0.05, unit: "m/s²", explain: "Résultante √(36 + 64) = 10 N ; a = 10/2 = 5 m/s²." },
    { type: "num", q: "Une fusée de 1000 kg a une poussée de 15000 N (g = 10 m/s²). Combien vaut l'accélération vers le haut ?", answer: 5, tol: 0.05, unit: "m/s²", explain: "Résultante = 15000 − 10000 = 5000 N ; a = 5000/1000 = 5 m/s²." },
    { type: "num", q: "Un ascenseur monte en ralentissant avec a = 2 m/s² vers le bas. Quelle réaction normale subit une personne de 70 kg (g = 10 m/s²) ?", answer: 560, tol: 1, unit: "N", explain: "N = m(g − a) = 70 · 8 = 560 N." },
    { type: "mc", q: "Deux patineurs immobiles se repoussent. Le premier a une masse de 40 kg, le second de 60 kg. Lequel acquiert la plus grande vitesse ?", options: ["Le plus léger", "Le plus lourd", "Aucun, c'est pareil", "Aucun ne bouge"], answer: 0, explain: "Les forces sont égales ; a = F/m est plus grande pour la masse la plus faible (m₁v₁ = m₂v₂)." },
    { type: "tf", q: "Un corps peut avoir à un instant donné une vitesse nulle et une accélération non nulle.", answer: true, explain: "Exemple : une pierre lancée vers le haut a, au sommet, v = 0 mais a = g." }
  ]
});
