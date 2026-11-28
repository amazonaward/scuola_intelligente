QBANK("fr", "l2-fis-temperatura-calore", {
  f: [
    { type: "mc", q: "À quelle température l'eau bout-elle sous la pression atmosphérique normale ?", options: ["50 °C", "100 °C", "212 °C"], answer: 1, explain: "Sous 1 atm, l'eau bout à 100 °C." },
    { type: "tf", q: "La chaleur passe spontanément du corps le plus froid au plus chaud.", answer: false, explain: "Elle passe du plus chaud au plus froid, jusqu'à l'équilibre thermique." },
    { type: "text", q: "Comment s'appelle la température de −273,15 °C ?", answer: ["zéro absolu", "le zéro absolu", "zero absolu", "0 k"], explain: "C'est le zéro absolu, 0 K." },
    { type: "mc", q: "Quel matériau est un bon isolant thermique ?", options: ["Le cuivre", "L'aluminium", "Le polystyrène"], answer: 2, explain: "Le polystyrène contient de l'air immobile et conduit très peu la chaleur." },
    { type: "num", q: "Convertis 20 °C en kelvins (utilise 273).", answer: 293, tol: 0.5, unit: "K", explain: "20 + 273 = 293 K." }
  ],
  m: [
    { type: "num", q: "Quelle quantité de chaleur faut-il pour élever de 5 K la température de 3 kg d'eau ? (c = 4186 J/(kg·K))", answer: 62790, tol: 100, unit: "J", explain: "Q = 3 · 4186 · 5 = 62 790 J." },
    { type: "mc", q: "Le radiateur chauffe la pièce surtout par...", options: ["Conduction", "Convection", "Fusion"], answer: 1, explain: "L'air chaud monte et l'air froid descend : c'est un mouvement de convection." },
    { type: "num", q: "Une barre de 5 m avec λ = 10·10⁻⁶ K⁻¹ est chauffée de 40 K. De combien s'allonge-t-elle, en mm ?", answer: 2, tol: 0.05, unit: "mm", explain: "ΔL = 10·10⁻⁶ · 5 · 40 = 2·10⁻³ m." },
    { type: "tf", q: "Si deux corps en contact ont la même température, il n'y a pas d'échange net de chaleur.", answer: true, explain: "C'est l'équilibre thermique." },
    { type: "num", q: "Tu mélanges 100 g d'eau à 60 °C avec 100 g d'eau à 20 °C. Combien vaut la température finale ?", answer: 40, tol: 0.5, unit: "°C", explain: "Masses égales : moyenne des deux températures." }
  ],
  d: [
    { type: "num", q: "Convertis 95 °F en degrés Celsius (arrondis à l'unité).", answer: 35, tol: 0.5, unit: "°C", explain: "(95 − 32)/1,8 = 35 °C." },
    { type: "num", q: "Un bloc d'aluminium de 2 kg (c = 900 J/(kg·K)) cède 36 000 J. De combien de kelvins se refroidit-il ?", answer: 20, tol: 0.2, unit: "K", explain: "ΔT = Q/(m·c) = 36000/(2·900) = 20 K." },
    { type: "num", q: "Quelle énergie faut-il pour vaporiser 100 g d'eau déjà à 100 °C (L = 2,26·10⁶ J/kg) ?", answer: 226000, tol: 500, unit: "J", explain: "Q = 0,1 · 2,26·10⁶ = 2,26·10⁵ J." },
    { type: "mc", q: "Pourquoi un petit lac gèle-t-il en commençant par la surface ?", options: ["Le fond est plus chaud et moins dense", "L'eau a sa masse volumique maximale vers 4 °C, l'eau plus froide remonte", "La glace est plus lourde que l'eau", "À cause du rayonnement du Soleil"], answer: 1, explain: "En se refroidissant en dessous de 4 °C, l'eau se dilate et devient moins dense : elle remonte en surface et gèle." },
    { type: "tf", q: "Une bouteille isotherme à double paroi sous vide limite la conduction et la convection.", answer: true, explain: "Sans matière entre les parois, il n'y a ni conduction ni convection ; les surfaces réfléchissantes réduisent le rayonnement." }
  ]
});
