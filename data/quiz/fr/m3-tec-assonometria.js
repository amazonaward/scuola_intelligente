QBANK("fr", "m3-tec-assonometria", {
 "f": [
  {
   "type": "mc",
   "q": "Quel outil sert à tracer les droites à 30° de l'isométrie ?",
   "options": [
    "Le compas",
    "L'équerre à 30°/60°",
    "Le rapporteur pointu"
   ],
   "answer": 1,
   "explain": "Avec l'équerre à 30°/60° et la règle, on trace facilement les droites à 30° et la verticale."
  },
  {
   "type": "tf",
   "q": "L'axonométrie représente largeur, profondeur et hauteur dans un seul dessin.",
   "answer": true,
   "explain": "Vrai : contrairement aux projections orthogonales, qui utilisent trois vues séparées, elle montre l'objet en une seule vue."
  },
  {
   "type": "text",
   "q": "Quelle lettre désigne l'axe des largeurs ?",
   "answer": [
    "x",
    "axe x"
   ],
   "explain": "L'axe x sert aux largeurs, y aux profondeurs, z (vertical) aux hauteurs."
  },
  {
   "type": "num",
   "q": "Combien de faces d'un cube voit-on en même temps dans un dessin axonométrique ?",
   "answer": 3,
   "explain": "On voit trois faces : celle du dessus et deux latérales."
  },
  {
   "type": "mc",
   "q": "De quel type de projection relève l'axonométrie ?",
   "options": [
    "Une projection avec point de fuite",
    "Une projection centrale",
    "Une projection parallèle"
   ],
   "answer": 2,
   "explain": "Les rayons de projection sont parallèles : les parallèles restent donc parallèles et il n'y a pas de point de fuite."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Une étagère de 60 × 15 × 2 cm est dessinée en isométrie à l'échelle 1:10. Quelle est la longueur de la partie sur l'axe x dans le dessin ?",
   "answer": 6,
   "unit": "cm",
   "explain": "En isométrie, les mesures sont vraies sur les axes : 60 cm ÷ 10 = 6 cm."
  },
  {
   "type": "num",
   "q": "Une pièce mesure 2,5 m de haut. Dans une planométrie à l'échelle 1:50, quelle est la hauteur du mur dessiné ?",
   "answer": 5,
   "unit": "cm",
   "explain": "2,5 m = 250 cm ; 250 ÷ 50 = 5 cm. Les hauteurs sont reportées en vraie grandeur à la verticale."
  },
  {
   "type": "mc",
   "q": "Quelle feuille permet de dessiner en isométrie sans équerres ?",
   "options": [
    "Le papier quadrillé",
    "Le papier isométrique, avec des points en triangles",
    "Le papier millimétré avec des lignes verticales"
   ],
   "answer": 1,
   "explain": "En reliant les points le long de la verticale et des deux directions à 30°, le dessin se fait presque tout seul."
  },
  {
   "type": "tf",
   "q": "L'ombre d'un objet sur le sol au soleil est une projection parallèle, car les rayons du Soleil arrivent pratiquement parallèles.",
   "answer": true,
   "explain": "Vrai : le Soleil est très loin. Avec une lampe proche, les rayons partiraient d'un point et l'ombre s'élargirait, comme en perspective."
  },
  {
   "type": "mc",
   "q": "Quelle forme a la face supérieure d'un cube en isométrie ?",
   "options": [
    "Un carré",
    "Un losange",
    "Un cercle"
   ],
   "answer": 1,
   "explain": "Les côtés sont parallèles aux axes x et y à 30° : la face devient un losange aux angles de 60° et 120°."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Une boîte de 20 × 10 × 6 cm est dessinée en isométrie à l'échelle 1:2. Quelle est la somme des trois longueurs dessinées sur les axes x, y et z ?",
   "answer": 18,
   "unit": "cm",
   "explain": "20 ÷ 2 = 10, 10 ÷ 2 = 5, 6 ÷ 2 = 3 (aucune réduction supplémentaire en isométrie) : 10 + 5 + 3 = 18 cm."
  },
  {
   "type": "mc",
   "q": "Marc dessine une boîte en isométrie et divise par deux toutes les mesures de profondeur (axe y). Où est l'erreur ?",
   "options": [
    "La réduction de moitié de la profondeur est typique de la cavalière, pas de l'isométrie",
    "L'axe y doit être vertical",
    "En isométrie, on ne dessine jamais la profondeur",
    "Il n'y a pas d'erreur : l'isométrie réduit toujours la profondeur"
   ],
   "answer": 0,
   "explain": "En isométrie, x, y et z sont reportés en vraie grandeur (×1) ; seule la cavalière réduite divise la profondeur par deux."
  },
  {
   "type": "tf",
   "q": "Dans une planométrie avec le plan tourné de 45°, les angles droits du plan restent de 90° dans le dessin.",
   "answer": true,
   "explain": "Vrai : en planométrie, le plan est recopié tel quel, simplement tourné ; forme et angles restent donc vrais."
  },
  {
   "type": "mc",
   "q": "Dans un dessin de cube, l'arête la plus lointaine paraît plus courte et les lignes des côtés convergent vers un point. De quel type de dessin s'agit-il ?",
   "options": [
    "Isométrique",
    "Cavalière",
    "Perspective"
   ],
   "answer": 2,
   "explain": "Le raccourcissement avec la distance et les points de fuite sont typiques de la perspective ; l'axonométrie est parallèle et n'en a pas."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre les étapes pour dessiner une chambre meublée en planométrie.",
   "items": [
    "Tourner le plan de 30° et le recopier",
    "Élever les murs à la verticale depuis les angles",
    "Dessiner le lit et le bureau comme des parallélépipèdes",
    "Repasser les arêtes visibles et pointiller les arêtes cachées"
   ],
   "explain": "D'abord on tourne le plan, puis on élève les murs, puis on ajoute les meubles et enfin on termine les arêtes."
  }
 ]
});
