QBANK("fr", "l1-art-costruzioni-geometriche", {
 f: [
  { type: "mc", q: "Quels instruments la géométrie euclidienne classique admet-elle pour les constructions ?", options: ["Règle non graduée et compas", "Règle graduée et rapporteur", "Seulement les équerres"], answer: 0, explain: "Euclide n'admet que la droite (règle) et le cercle (compas)." },
  { type: "num", q: "Combien de degrés la bissectrice d'un angle de 60° forme-t-elle avec chaque côté ?", answer: 30, tol: 0, unit: "°", explain: "60° : 2 = 30°." },
  { type: "tf", q: "Deux droites perpendiculaires à une même droite sont parallèles entre elles.", answer: true, explain: "Elles forment des angles correspondants égaux (90°), donc elles sont parallèles." },
  { type: "mc", q: "Combien de côtés a un hexagone ?", options: ["5", "6", "8"], answer: 1, explain: "Hexa- signifie six." },
  { type: "text", q: "Comment s'appelle la droite qui touche un cercle en un seul point ?", answer: ["tangente", "la tangente", "une tangente"], explain: "C'est la tangente, perpendiculaire au rayon au point de contact." }
 ],
 m: [
  { type: "mc", q: "Le côté d'un carré inscrit dans un cercle de rayon r vaut…", options: ["r", "r√2", "2r"], answer: 1, explain: "La diagonale du carré est le diamètre 2r, donc le côté vaut 2r/√2 = r√2." },
  { type: "num", q: "Un hexagone régulier est inscrit dans un cercle de rayon 7 cm. Quel est son périmètre ?", answer: 42, tol: 0, unit: "cm", explain: "Le côté est égal au rayon : 6 × 7 = 42 cm." },
  { type: "mc", q: "Quelle figure est ACBD dans la construction de la médiatrice, avec AC = BC = AD = BD ?", options: ["Un losange", "Un trapèze", "Un rectangle non carré"], answer: 0, explain: "Quatre côtés égaux : c'est un losange, aux diagonales perpendiculaires." },
  { type: "tf", q: "À la règle et au compas, on peut construire le polygone régulier à 17 côtés.", answer: true, explain: "Gauss l'a démontré en 1796 : 17 est un nombre premier de Fermat." },
  { type: "order", q: "Mets dans l'ordre les étapes pour partager [AB] en 3 parties égales.", items: ["Trace une demi-droite à partir de A", "Reporte 3 segments égaux sur la demi-droite", "Relie le dernier point à B", "Trace les parallèles à partir des points 1 et 2"], explain: "C'est la construction fondée sur le théorème de Thalès." }
 ],
 d: [
  { type: "mc", q: "Lequel de ces trois problèmes NE peut PAS être résolu à la règle et au compas ?", options: ["Couper un angle en deux", "Couper un angle quelconque en trois", "Construire la médiatrice d'un segment"], answer: 1, explain: "La trisection d'un angle quelconque est impossible avec la seule règle et le compas." },
  { type: "num", q: "Un raccordement a un rayon de 5 cm et relie deux droites perpendiculaires. À quelle distance du sommet de l'angle se trouve le centre de l'arc ? (arrondis à l'unité : 5√2)", answer: 7, tol: 0.1, unit: "cm", explain: "Le centre est à 5 cm de chaque droite : il est à 5√2 ≈ 7,07 cm du sommet." },
  { type: "tf", q: "Dans un raccordement extérieur entre une droite et un cercle de rayon R, le centre de l'arc de rayon r est à la distance R + r du centre du cercle.", answer: true, explain: "Deux cercles tangents extérieurement ont leurs centres à la distance R + r." },
  { type: "mc", q: "Le rapport entre la diagonale et le côté du pentagone régulier vaut…", options: ["√2", "φ = (1+√5)/2", "√3"], answer: 1, explain: "C'est le nombre d'or, environ 1,618." },
  { type: "text", q: "Comment s'appelle l'ensemble de tous les points qui vérifient une même propriété géométrique (par exemple les points équidistants de deux points donnés) ?", answer: ["lieu géométrique", "le lieu géométrique", "un lieu géométrique", "lieu"], explain: "C'est un lieu géométrique : la médiatrice d'un segment est le lieu des points équidistants des extrémités." }
 ]
});
