QBANK("fr", "l2-fis-moto-accelerato", {
  "f": [
    { "type": "num", "q": "Un corps passe de 0 à 20 m/s en 4 s. Quelle est son accélération moyenne ?", "answer": 5, "unit": "m/s²", "explain": "20 / 4 = 5 m/s²." },
    { "type": "mc", "q": "Qu'indique la pente du graphique vitesse-temps ?", "options": ["La position", "L'accélération", "Le déplacement"], "answer": 1, "explain": "Pente = Δv / Δt = accélération." },
    { "type": "num", "q": "Un corps part arrêté avec a = 2 m/s². Quelle est sa vitesse au bout de 10 s ?", "answer": 20, "unit": "m/s", "explain": "v = a t = 2 · 10 = 20 m/s." },
    { "type": "tf", "q": "Dans le vide, tous les corps en chute libre ont la même accélération.", "answer": true, "explain": "C'est le résultat de Galilée : g ≈ 9,8 m/s², indépendante de la masse." },
    { "type": "num", "q": "Une voiture a a = 3 m/s² et part arrêtée. Combien de mètres parcourt-elle en 4 s ?", "answer": 24, "unit": "m", "explain": "s = ½ · 3 · 16 = 24 m." }
  ],
  "m": [
    { "type": "num", "q": "Une balle tombe sans vitesse initiale pendant 2 s (g = 9,8 m/s²). Combien vaut sa vitesse finale ?", "answer": 19.6, "tol": 0.1, "unit": "m/s", "explain": "v = g t = 9,8 · 2 = 19,6 m/s." },
    { "type": "num", "q": "Une voiture à 15 m/s accélère à 2 m/s² pendant 5 s. Quelle vitesse atteint-elle ?", "answer": 25, "unit": "m/s", "explain": "v = 15 + 2 · 5 = 25 m/s." },
    { "type": "mc", "q": "v = +8 m/s et a = −2 m/s². Que fait le corps ?", "options": ["Il accélère", "Il ralentit", "Il va à vitesse constante"], "answer": 1, "explain": "v et a ont des signes opposés : la valeur de la vitesse diminue." },
    { "type": "num", "q": "Une voiture à 10 m/s freine avec a = 2,5 m/s². Combien de mètres parcourt-elle avant de s'arrêter ?", "answer": 20, "unit": "m", "explain": "s = v₀² / (2a) = 100 / 5 = 20 m." },
    { "type": "tf", "q": "Si la vitesse initiale d'un freinage triple, la distance d'arrêt devient 9 fois plus grande.", "answer": true, "explain": "La distance est proportionnelle à v₀² : 3² = 9." }
  ],
  "d": [
    { "type": "num", "q": "Une voiture passe de 10 à 30 m/s sur une distance de 200 m avec une accélération constante. Combien vaut l'accélération ?", "answer": 2, "unit": "m/s²", "explain": "v² = v₀² + 2 a s : 900 = 100 + 400 a, a = 2 m/s²." },
    { "type": "num", "q": "Une pierre est lancée vers le haut à 14,7 m/s (g = 9,8 m/s²). Au bout de combien de secondes atteint-elle le point le plus haut ?", "answer": 1.5, "tol": 0.01, "unit": "s", "explain": "t = v₀ / g = 14,7 / 9,8 = 1,5 s." },
    { "type": "num", "q": "Une pierre lâchée d'un pont touche l'eau au bout de 3 s (g = 9,8 m/s²). Quelle est la hauteur du pont ?", "answer": 44.1, "tol": 0.1, "unit": "m", "explain": "h = ½ · 9,8 · 9 = 44,1 m." },
    { "type": "num", "q": "Une bille part arrêtée et parcourt 2 m pendant la première seconde. Combien de mètres parcourt-elle pendant la quatrième seconde (pas au total) ?", "answer": 14, "unit": "m", "explain": "Les distances par seconde sont comme 1 : 3 : 5 : 7 : 2 · 7 = 14 m." },
    { "type": "mc", "q": "Sur un graphique v-t, une droite va de (0 s, 4 m/s) à (5 s, 14 m/s). La distance parcourue en 5 s vaut…", "options": ["45 m", "70 m", "20 m"], "answer": 0, "explain": "Aire du trapèze : (4 + 14) / 2 · 5 = 45 m." }
  ]
});
