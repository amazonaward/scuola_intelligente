QBANK("fr", "l2-fis-moto-rettilineo", {
  "f": [
    { "type": "num", "q": "Une voiture parcourt 150 km en 2 heures. Quelle est sa vitesse moyenne ?", "answer": 75, "unit": "km/h", "explain": "150 / 2 = 75 km/h." },
    { "type": "mc", "q": "Quelle est l'unité de la vitesse dans le Système international ?", "options": ["km/h", "m/s", "m²/s"], "answer": 1, "explain": "Le mètre par seconde (m/s)." },
    { "type": "num", "q": "Convertis 36 km/h en m/s.", "answer": 10, "unit": "m/s", "explain": "36 / 3,6 = 10 m/s." },
    { "type": "tf", "q": "Dans le mouvement rectiligne uniforme, la vitesse est constante.", "answer": true, "explain": "C'est la définition du mouvement uniforme." },
    { "type": "num", "q": "Un corps se déplace à 4 m/s pendant 10 s en partant de l'origine. Combien de mètres a-t-il parcourus ?", "answer": 40, "unit": "m", "explain": "s = v · t = 4 · 10 = 40 m." }
  ],
  "m": [
    { "type": "num", "q": "Un cycliste roule à 18 km/h. Combien de mètres parcourt-il en 20 secondes ?", "answer": 100, "unit": "m", "explain": "18 km/h = 5 m/s ; 5 · 20 = 100 m." },
    { "type": "num", "q": "Un corps a pour équation horaire s = 20 + 3t (SI). Où se trouve-t-il au bout de 8 s ?", "answer": 44, "unit": "m", "explain": "s = 20 + 3 · 8 = 44 m." },
    { "type": "tf", "q": "Un corps qui va de A à B puis revient en A a un déplacement nul.", "answer": true, "explain": "Le déplacement est la différence entre la position finale et la position initiale : elles coïncident." },
    { "type": "mc", "q": "Un graphique position-temps est une droite qui descend. Le corps…", "options": ["Se déplace dans le sens négatif", "Accélère", "Est immobile"], "answer": 0, "explain": "Une pente négative signifie une vitesse négative." },
    { "type": "num", "q": "La lumière met environ 1,3 s pour aller de la Lune à la Terre. Avec c = 300 000 km/s, à quelle distance se trouve la Lune ?", "answer": 390000, "tol": 5000, "unit": "km", "explain": "d = c t = 300 000 km/s · 1,3 s ≈ 390 000 km." }
  ],
  "d": [
    { "type": "num", "q": "Deux trains sont à 360 km l'un de l'autre et roulent l'un vers l'autre à 100 km/h et à 80 km/h. Au bout de combien d'heures se croisent-ils ?", "answer": 2, "unit": "h", "explain": "Vitesse de rapprochement 180 km/h : 360 / 180 = 2 h." },
    { "type": "num", "q": "Une voiture à 25 m/s poursuit un camion à 20 m/s qui a 150 m d'avance. En combien de secondes le rattrape-t-elle ?", "answer": 30, "unit": "s", "explain": "Vitesse relative 5 m/s : 150 / 5 = 30 s." },
    { "type": "num", "q": "Tu roules à 30 km/h à l'aller et à 60 km/h au retour sur le même trajet. Quelle est la vitesse moyenne sur l'ensemble ?", "answer": 40, "unit": "km/h", "explain": "Avec 60 km à l'aller : 2 h + 1 h = 3 h pour 120 km → 40 km/h (moyenne harmonique)." },
    { "type": "mc", "q": "Un observateur dans un train qui roule à 30 m/s lance une balle vers l'avant à 5 m/s par rapport au train. Par rapport aux rails, la balle a une vitesse de…", "options": ["25 m/s", "35 m/s", "5 m/s"], "answer": 1, "explain": "En relativité galiléenne, les vitesses s'additionnent : 30 + 5 = 35 m/s." },
    { "type": "num", "q": "L'aire sous le graphique v-t est un rectangle de base 8 s et de hauteur 12 m/s. Combien vaut le déplacement ?", "answer": 96, "unit": "m", "explain": "Aire = 12 · 8 = 96 m." }
  ]
});
