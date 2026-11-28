QBANK("fr", "l2-fis-lavoro-energia", {
  f: [
    { type: "text", q: "Comment s'appelle l'unité d'énergie dans le Système international ?", answer: ["joule", "le joule", "j"], explain: "Le joule (J)." },
    { type: "num", q: "Une force de 10 N déplace un objet de 3 m dans sa propre direction. Combien vaut le travail ?", answer: 30, tol: 0.1, unit: "J", explain: "W = 10 · 3 = 30 J." },
    { type: "tf", q: "Un corps immobile a une énergie cinétique nulle.", answer: true, explain: "Ec = ½mv² et v = 0." },
    { type: "mc", q: "Quelle formule donne l'énergie potentielle de pesanteur près de la Terre ?", options: ["m·g·h", "½·m·v²", "F·s"], answer: 0, explain: "U = m·g·h." },
    { type: "num", q: "Une ampoule de 60 W reste allumée 10 s. Quelle énergie consomme-t-elle ?", answer: 600, tol: 0.5, unit: "J", explain: "E = P·t = 60 · 10 = 600 J." }
  ],
  m: [
    { type: "num", q: "Calcule l'énergie cinétique d'un objet de 2 kg qui se déplace à 6 m/s.", answer: 36, tol: 0.1, unit: "J", explain: "Ec = ½ · 2 · 36 = 36 J." },
    { type: "num", q: "Quelle énergie potentielle possède un livre de 0,5 kg posé sur une étagère à 2 m (g = 10 m/s²) ?", answer: 10, tol: 0.1, unit: "J", explain: "U = 0,5 · 10 · 2 = 10 J." },
    { type: "tf", q: "Si tu portes un sac à dos à vitesse constante sur un trajet horizontal, le travail de son poids est nul.", answer: true, explain: "Le poids est vertical, le déplacement horizontal : cos 90° = 0." },
    { type: "num", q: "Un moteur de 2 kW fonctionne pendant 30 s. Quel travail effectue-t-il ?", answer: 60000, tol: 10, unit: "J", explain: "W = P·t = 2000 · 30 = 60 000 J." },
    { type: "mc", q: "Un ressort est comprimé : quel type d'énergie emmagasine-t-il ?", options: ["Cinétique", "Potentielle élastique", "Nucléaire", "Aucune"], answer: 1, explain: "De l'énergie potentielle élastique U = ½kx²." }
  ],
  d: [
    { type: "num", q: "Une caisse de 20 kg est tirée sur 6 m par une force de 50 N inclinée de 60° par rapport au déplacement. Calcule le travail de la force.", answer: 150, tol: 0.5, unit: "J", explain: "W = 50 · 6 · cos 60° = 300 · 0,5 = 150 J." },
    { type: "num", q: "Une voiture de 1000 kg freine de 30 m/s à 0 sur 90 m. Calcule la valeur de la force de freinage moyenne.", answer: 5000, tol: 5, unit: "N", explain: "W = ΔEc = 0 − ½·1000·900 = −450 000 J ; F = 450 000/90 = 5000 N." },
    { type: "num", q: "Un ressort de raideur k = 800 N/m est comprimé de 0,05 m. Calcule l'énergie emmagasinée.", answer: 1, tol: 0.01, unit: "J", explain: "U = ½ · 800 · 0,0025 = 1 J." },
    { type: "num", q: "Une pierre de 0,5 kg est lancée vers le haut à 20 m/s (g = 10 m/s², sans frottement). Quelle hauteur maximale atteint-elle ?", answer: 20, tol: 0.2, unit: "m", explain: "½mv² = mgh → h = v²/(2g) = 400/20 = 20 m." },
    { type: "tf", q: "Si une voiture double sa vitesse, sa distance de freinage (avec une force de freinage constante) est multipliée par quatre.", answer: true, explain: "W = F·s = ΔEc ∝ v² : si v double, s devient 4 fois plus grande." }
  ]
});
