QBANK("fr", "m2-tec-proiezioni-ortogonali", {
 "f": [
  {
   "type": "mc",
   "q": "Quel plan reçoit la vue de dessus ?",
   "options": [
    "Plan horizontal (P.H.)",
    "Plan vertical (P.V.)",
    "Plan latéral (P.L.)"
   ],
   "answer": 0,
   "explain": "La vue de dessus (plan) se projette sur le plan horizontal, P.H."
  },
  {
   "type": "tf",
   "q": "Les projections orthogonales n'ont pas de perspective : des arêtes égales restent égales même si elles sont loin.",
   "answer": true,
   "explain": "Les rayons parallèles ne déforment pas : les faces parallèles au plan apparaissent en vraie forme et grandeur."
  },
  {
   "type": "mc",
   "q": "Comment appelle-t-on aussi la vue de face ?",
   "options": [
    "Plan",
    "Élévation",
    "Coupe"
   ],
   "answer": 1,
   "explain": "La vue de face s'appelle aussi élévation (ou façade)."
  },
  {
   "type": "num",
   "q": "Combien de vues (de face, de dessus, latérale) utilise-t-on d'habitude pour décrire un objet ?",
   "answer": 3,
   "tol": 0,
   "explain": "On utilise trois vues, une par plan : P.V., P.H. et P.L."
  },
  {
   "type": "text",
   "q": "Comment s'appelle le système de trois plans perpendiculaires qui forment un coin comme celui d'une pièce ?",
   "answer": [
    "trièdre",
    "triedre",
    "le trièdre",
    "le triedre"
   ],
   "explain": "Le trièdre est formé du plan vertical, du plan horizontal et du plan latéral."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Une brique mesure 12 cm de long, 7 cm de profondeur et 5 cm de hauteur. Quelle est l'aire (en cm²) de sa vue latérale ?",
   "answer": 35,
   "tol": 0,
   "unit": "cm²",
   "explain": "La vue latérale est un rectangle profondeur × hauteur = 7 × 5 = 35 cm²."
  },
  {
   "type": "mc",
   "q": "Un cône posé sur sa base : quelles sont ses vues de face, latérale et de dessus ?",
   "options": [
    "Triangle, triangle, cercle",
    "Rectangle, rectangle, cercle",
    "Cercle, cercle, triangle"
   ],
   "answer": 0,
   "explain": "De face et de côté, un cône apparaît comme un triangle isocèle ; de dessus, comme un cercle."
  },
  {
   "type": "mc",
   "q": "Dans quelle paire de vues apparaît la hauteur de l'objet ?",
   "options": [
    "De face et latérale",
    "De face et de dessus",
    "De dessus et latérale"
   ],
   "answer": 0,
   "explain": "La hauteur apparaît dans la vue de face et dans la vue latérale ; pas dans le plan."
  },
  {
   "type": "num",
   "q": "Un cube a une arête de 4 cm. Quel est le périmètre (en cm) de sa vue de dessus ?",
   "answer": 16,
   "tol": 0,
   "unit": "cm",
   "explain": "La vue de dessus est un carré de 4 cm de côté : 4 × 4 = 16 cm."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la vue de dessus d'un objet ?",
   "answer": [
    "plan",
    "le plan",
    "vue de dessus"
   ],
   "explain": "La vue de dessus s'appelle le plan et se dessine sous la vue de face."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un parallélépipède a, en vue de face, un rectangle de 9 × 4 cm (largeur × hauteur) et, en vue de dessus, un rectangle de 9 × 6 cm (largeur × profondeur). Quel est son volume en cm³ ?",
   "answer": 216,
   "tol": 0,
   "unit": "cm³",
   "explain": "Dimensions : largeur 9, hauteur 4, profondeur 6. Volume = 9 × 4 × 6 = 216 cm³."
  },
  {
   "type": "mc",
   "q": "Un élève doit dessiner les vues d'une brique 8 × 5 × 3 cm (largeur × profondeur × hauteur). Sous la vue de face, il dessine un rectangle de 8 × 3 cm. Quelle est l'erreur ?",
   "options": [
    "Le plan doit être 8 × 5 (largeur et profondeur)",
    "Le plan doit être dessiné au-dessus de la vue de face",
    "Le plan doit être un carré"
   ],
   "answer": 0,
   "explain": "Le plan montre largeur et profondeur : ce doit être un rectangle de 8 × 5 cm."
  },
  {
   "type": "tf",
   "q": "Si deux objets ont la même vue de face et la même vue latérale, ils ont forcément aussi la même vue de dessus.",
   "answer": false,
   "explain": "Faux : un cylindre et un parallélépipède peuvent avoir les deux mêmes rectangles, mais le plan (cercle ou rectangle) les distingue."
  },
  {
   "type": "mc",
   "q": "Une pièce mécanique arrive « en miroir » et ne se monte pas. Quelle cause est la plus probable ?",
   "options": [
    "Le dessin a été lu avec la mauvaise méthode (européenne au lieu d'américaine ou l'inverse)",
    "On a utilisé le trait interrompu pour les arêtes cachées",
    "L'échelle du dessin était 1:1"
   ],
   "answer": 0,
   "explain": "Les méthodes européenne et américaine placent les vues différemment : lire un dessin avec la mauvaise méthode inverse la pièce."
  },
  {
   "type": "num",
   "q": "Un parallélépipède mesure 10 cm de largeur, 6 cm de profondeur et 4 cm de hauteur. Quelle mesure (en cm) est reportée du plan à la vue latérale avec la ligne à 45° ?",
   "answer": 6,
   "tol": 0,
   "unit": "cm",
   "explain": "La ligne à 45° reporte la profondeur, qui apparaît dans le plan et dans la vue latérale : 6 cm."
  }
 ]
});
