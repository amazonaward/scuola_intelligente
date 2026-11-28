QBANK("fr", "l2-mat-circonferenza-poligoni", {
  "f": [
    { "type": "mc", "q": "Comment s'appelle la corde qui passe par le centre du cercle ?", "options": ["Rayon", "Diamètre", "Arc"], "answer": 1, "explain": "Le diamètre est la plus longue corde et passe par le centre ; il vaut le double du rayon." },
    { "type": "num", "q": "Un cercle a un rayon de 7 cm. Combien mesure son diamètre ?", "answer": 14, "unit": "cm", "explain": "d = 2r = 2 × 7 = 14 cm." },
    { "type": "tf", "q": "Une droite tangente à un cercle n'a qu'un seul point commun avec lui.", "answer": true, "explain": "Par définition, la tangente touche le cercle en un seul point." },
    { "type": "num", "q": "Un angle au centre mesure 90°. Combien mesure l'angle inscrit qui intercepte le même arc ?", "answer": 45, "unit": "°", "explain": "L'angle inscrit vaut la moitié : 90° / 2 = 45°." },
    { "type": "mc", "q": "Un polygone dont tous les sommets sont sur le cercle est dit…", "options": ["Circonscrit", "Inscrit", "Régulier"], "answer": 1, "explain": "Inscrit = sommets sur le cercle ; circonscrit = côtés tangents." }
  ],
  "m": [
    { "type": "num", "q": "D'un point P extérieur, on trace la tangente (PA) à un cercle de rayon 3 cm. Si OP = 5 cm, quelle est la longueur PA ?", "answer": 4, "unit": "cm", "explain": "OAP est rectangle en A : PA = √(5² − 3²) = √16 = 4 cm." },
    { "type": "tf", "q": "Un triangle inscrit dans un demi-cercle (avec le diamètre comme côté) est rectangle.", "answer": true, "explain": "L'angle opposé au diamètre intercepte un demi-cercle, donc il mesure 90°." },
    { "type": "num", "q": "Un quadrilatère inscrit a un angle de 83°. Combien mesure l'angle opposé ?", "answer": 97, "unit": "°", "explain": "Les angles opposés sont supplémentaires : 180° − 83° = 97°." },
    { "type": "mc", "q": "Quel point remarquable d'un triangle est le centre du cercle inscrit ?", "options": ["Le point de concours des médiatrices", "Le point de concours des bissectrices", "L'orthocentre"], "answer": 1, "explain": "Le point de concours des bissectrices est à égale distance des trois côtés : c'est le centre du cercle inscrit." },
    { "type": "num", "q": "Un hexagone régulier a un rayon de 5 cm. Quel est son périmètre ?", "answer": 30, "unit": "cm", "explain": "Le côté de l'hexagone régulier est égal au rayon : 6 × 5 = 30 cm." }
  ],
  "d": [
    { "type": "num", "q": "Un quadrilatère circonscrit à un cercle a trois côtés consécutifs de 11 cm, 6 cm et 13 cm. Combien mesure le quatrième côté ?", "answer": 18, "unit": "cm", "explain": "D'après Pitot, AB + CD = BC + DA : 11 + 13 = 6 + DA, donc DA = 18 cm." },
    { "type": "mc", "q": "Le losange qui n'est pas un carré est…", "options": ["Seulement inscriptible", "Seulement circonscriptible", "Ni inscriptible ni circonscriptible"], "answer": 1, "explain": "Ses côtés opposés ont des sommes égales (circonscriptible), mais ses angles opposés sont égaux et non supplémentaires s'ils ne sont pas droits." },
    { "type": "num", "q": "Un polygone régulier a une aire de 150 cm² et un apothème de 5 cm. Quel est son périmètre ?", "answer": 60, "unit": "cm", "explain": "A = p × a / 2, donc p = 2A / a = 300 / 5 = 60 cm." },
    { "type": "num", "q": "Dans le triangle ABC, l'angle en C mesure 62° et le triangle est inscrit dans un cercle de centre O. Combien mesure l'angle au centre AOB qui intercepte le même arc AB (celui qui ne contient pas C) ?", "answer": 124, "unit": "°", "explain": "L'angle au centre est le double de l'angle inscrit : 2 × 62° = 124°." },
    { "type": "tf", "q": "Tous les angles inscrits qui interceptent le même arc sont égaux.", "answer": true, "explain": "Chacun vaut la moitié du même angle au centre : ils sont donc tous égaux." }
  ]
});
