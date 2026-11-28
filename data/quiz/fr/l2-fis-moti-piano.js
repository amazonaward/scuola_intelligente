QBANK("fr", "l2-fis-moti-piano", {
  f: [
    { type: "mc", q: "Comment s'appelle la courbe décrite par une pierre lancée en l'air (sans frottement de l'air) ?", options: ["Une droite", "Une parabole", "Un cercle"], answer: 1, explain: "La combinaison d'un mouvement uniforme horizontal et d'un mouvement accéléré vertical donne une parabole." },
    { type: "tf", q: "Lors d'un lancer, le mouvement horizontal et le mouvement vertical peuvent être étudiés séparément.", answer: true, explain: "C'est le principe d'indépendance des mouvements de Galilée." },
    { type: "num", q: "Un point fait un tour en 4 s. Combien vaut la fréquence ?", answer: 0.25, tol: 0.01, unit: "Hz", explain: "f = 1/T = 1/4 = 0,25 Hz." },
    { type: "mc", q: "En quelle unité se mesure la fréquence ?", options: ["En secondes", "En hertz", "En mètres par seconde"], answer: 1, explain: "1 Hz = 1 cycle par seconde." },
    { type: "text", q: "Comment s'appelle la durée nécessaire pour effectuer une oscillation complète ?", answer: ["période", "la période", "periode"], explain: "C'est la période T, mesurée en secondes." }
  ],
  m: [
    { type: "num", q: "Un objet est lancé horizontalement du haut d'une falaise de 80 m (g = 10 m/s²). Au bout de combien de temps touche-t-il l'eau ?", answer: 4, tol: 0.05, unit: "s", explain: "t = √(2h/g) = √(160/10) = 4 s." },
    { type: "num", q: "Avec la même chute (4 s) et une vitesse horizontale de 15 m/s, de combien le corps se déplace-t-il horizontalement ?", answer: 60, tol: 0.5, unit: "m", explain: "x = vₓ·t = 15 · 4 = 60 m." },
    { type: "mc", q: "Quel couple d'angles de tir donne la même portée, à vitesse égale ?", options: ["30° et 60°", "30° et 45°", "10° et 20°", "45° et 90°"], answer: 0, explain: "Des angles complémentaires ont le même sin 2θ, donc la même portée." },
    { type: "num", q: "Une roue de rayon 0,5 m tourne avec une période de 2 s. Calcule la vitesse d'un point de la jante (prends π = 3,14).", answer: 1.57, tol: 0.02, unit: "m/s", explain: "v = 2πr/T = 2 · 3,14 · 0,5 / 2 = 1,57 m/s." },
    { type: "mc", q: "Une pierre attachée à une corde tourne en cercle. Si la corde casse, la pierre...", options: ["Part vers le centre", "Part selon la tangente", "Part radialement vers l'extérieur", "Tombe immédiatement"], answer: 1, explain: "Sans force centripète, le corps continue en ligne droite, dans la direction de sa vitesse : la tangente." }
  ],
  d: [
    { type: "num", q: "Un ballon est frappé avec v₀ = 10 m/s à 45° (g = 10 m/s²). Calcule la portée.", answer: 10, tol: 0.1, unit: "m", explain: "P = v₀² sin 90°/g = 100/10 = 10 m." },
    { type: "num", q: "Un satellite est en orbite sur un rayon de 7000 km à 7,5 km/s. Calcule l'accélération centripète en m/s² (arrondis au dixième).", answer: 8.0, tol: 0.1, unit: "m/s²", explain: "a = v²/r = (7500)²/(7·10⁶) ≈ 8,0 m/s² : un peu moins que g, car l'altitude est faible." },
    { type: "num", q: "Un ressort de raideur k = 400 N/m porte une masse de 1 kg. Calcule la période (π = 3,14).", answer: 0.31, tol: 0.01, unit: "s", explain: "T = 2π√(m/k) = 6,28 · √(1/400) = 6,28 · 0,05 = 0,314 s." },
    { type: "tf", q: "Si l'on multiplie par quatre la longueur d'un pendule, sa période double.", answer: true, explain: "T = 2π√(L/g) : avec L×4, T×√4 = 2." },
    { type: "mc", q: "Un objet a un mouvement harmonique d'amplitude 0,2 m et de pulsation 5 rad/s. Quelle est sa vitesse maximale ?", options: ["0,04 m/s", "1 m/s", "25 m/s", "0,4 m/s"], answer: 1, explain: "v_max = ω·A = 5 · 0,2 = 1 m/s, atteinte au centre d'oscillation." }
  ]
});
