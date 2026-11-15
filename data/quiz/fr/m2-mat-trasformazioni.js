QBANK("fr", "m2-mat-trasformazioni", {
 "f": [
  {
   "type": "mc",
   "q": "Quelle transformation « retourne » une figure comme le ferait un miroir ?",
   "options": [
    "La translation",
    "La rotation",
    "La symétrie axiale"
   ],
   "answer": 2,
   "explain": "La symétrie axiale reflète la figure par rapport à une droite, l'axe, comme un miroir."
  },
  {
   "type": "tf",
   "q": "Une translation conserve la forme et les dimensions d'une figure.",
   "answer": true,
   "explain": "C'est une isométrie : elle déplace la figure sans la déformer ni l'agrandir."
  },
  {
   "type": "num",
   "q": "Combien d'axes de symétrie a un rectangle qui n'est pas un carré ?",
   "answer": 2,
   "explain": "Il a 2 axes : un vertical et un horizontal, passant par les milieux des côtés opposés. Les diagonales ne sont pas des axes."
  },
  {
   "type": "text",
   "q": "Comment s'appelle le point qui reste fixe dans une rotation ?",
   "answer": [
    "centre",
    "centre de rotation",
    "le centre",
    "le centre de rotation"
   ],
   "explain": "C'est le centre de rotation : la figure tourne autour de ce point."
  },
  {
   "type": "mc",
   "q": "Quelle transformation change les dimensions d'une figure ?",
   "options": [
    "La translation",
    "La rotation",
    "L'homothétie"
   ],
   "answer": 2,
   "explain": "Seule l'homothétie agrandit ou réduit ; translation et rotation sont des isométries."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Le point A(3 ; −2) est translaté par le vecteur v(−5 ; 6). Quelle est l'ordonnée (y) de A' ?",
   "answer": 4,
   "explain": "y' = −2 + 6 = 4 (et x' = 3 − 5 = −2, donc A'(−2 ; 4))."
  },
  {
   "type": "mc",
   "q": "Quel est le symétrique de P(−4 ; 7) par rapport à l'axe y ?",
   "options": [
    "(4; −7)",
    "(4; 7)",
    "(−4; −7)"
   ],
   "answer": 1,
   "explain": "Par rapport à l'axe y l'abscisse change de signe et l'ordonnée reste la même : (4 ; 7)."
  },
  {
   "type": "num",
   "q": "Le point B(4 ; −9) est transformé par la symétrie centrale de centre l'origine. Quelle est l'ordonnée de B' ?",
   "answer": 9,
   "explain": "Dans la symétrie par rapport à l'origine les deux coordonnées changent de signe : B'(−4 ; 9)."
  },
  {
   "type": "num",
   "q": "Une vraie voiture mesure 4 m de long. Son modèle réduit est semblable, de rapport de similitude 1/25. Combien de centimètres mesure le modèle ?",
   "answer": 16,
   "unit": "cm",
   "explain": "4 m = 400 cm ; 400 ÷ 25 = 16 cm."
  },
  {
   "type": "tf",
   "q": "Dans une symétrie axiale chaque point et son image sont à la même distance de l'axe.",
   "answer": true,
   "explain": "L'axe est la médiatrice du segment qui joint P et P' : il lui est perpendiculaire et passe par son milieu."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Deux figures semblables ont des aires de 20 cm² et 45 cm². Quel est le rapport de similitude entre la grande figure et la petite ?",
   "answer": 1.5,
   "explain": "Les aires varient comme k² : k² = 45 ÷ 20 = 2,25, donc k = √2,25 = 1,5."
  },
  {
   "type": "mc",
   "q": "On applique d'abord la translation de vecteur v(2 ; 3), puis celle de vecteur w(−5 ; 1). Le résultat équivaut à une translation de vecteur…",
   "options": [
    "(7; 2)",
    "(−3; −4)",
    "(−3; 4)"
   ],
   "answer": 2,
   "explain": "On additionne les composantes : (2 + (−5) ; 3 + 1) = (−3 ; 4)."
  },
  {
   "type": "mc",
   "q": "Luc dit : « En tournant de 90° (sens antihoraire) autour de l'origine, le point (3 ; 1) devient (1 ; 3) ». Quelle est l'erreur ?",
   "options": [
    "Il a seulement échangé les coordonnées, mais la rotation envoie (x ; y) sur (−y ; x), soit (−1 ; 3).",
    "Une rotation de 90° ne change pas les coordonnées.",
    "Le point va en (−3 ; −1)."
   ],
   "answer": 0,
   "explain": "Échanger les coordonnées est une symétrie par rapport à la droite y = x, pas une rotation de 90°."
  },
  {
   "type": "num",
   "q": "Le point P(2 ; 3) est d'abord symétrisé par rapport à l'axe x puis translaté par le vecteur (1 ; −2). Quelle est l'ordonnée du point final ?",
   "answer": -5,
   "explain": "Symétrique : (2 ; −3). Translaté : (2 + 1 ; −3 − 2) = (3 ; −5). L'ordonnée est −5."
  },
  {
   "type": "order",
   "q": "Range les figures du plus petit au plus grand nombre d'axes de symétrie.",
   "items": [
    "Triangle scalène",
    "Losange (non carré)",
    "Pentagone régulier",
    "Hexagone régulier"
   ],
   "explain": "Axes : scalène 0, losange 2 (les diagonales), pentagone régulier 5, hexagone régulier 6."
  }
 ]
});
