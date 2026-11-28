QBANK("fr", "l1-art-proiezioni-ortogonali", {
 f: [
  { type: "mc", q: "Comment appelle-t-on, en dessin technique, la vue d'un objet depuis le haut ?", options: ["Vue de dessus", "Élévation", "Coupe"], answer: 0, explain: "La vue d'en haut est la vue de dessus (projection sur le PH)." },
  { type: "tf", q: "Dans la projection orthogonale, les rayons projetants sont perpendiculaires au plan.", answer: true, explain: "C'est précisément la définition de la projection orthogonale." },
  { type: "text", q: "Quel sigle de deux lettres désigne le plan vertical de projection ?", answer: ["pv", "p.v."], explain: "PV : plan vertical, sur lequel on projette l'élévation." },
  { type: "mc", q: "Quel solide a une vue de dessus circulaire et une élévation rectangulaire ?", options: ["Cylindre", "Cube", "Pyramide"], answer: 0, explain: "Le cylindre d'axe vertical." },
  { type: "num", q: "Combien de vues principales (dessus, face, côté) faut-il en général pour définir un solide ?", answer: 3, tol: 0, explain: "Les trois vues principales, même si deux suffisent souvent." }
 ],
 m: [
  { type: "mc", q: "Un carré parallèle au PH apparaît en élévation comme…", options: ["Un carré", "Un segment horizontal", "Un point"], answer: 1, explain: "Un plan parallèle au PH est perpendiculaire au PV : il se réduit à un segment parallèle à la ligne de terre." },
  { type: "mc", q: "Quelle est la vue de dessus d'une pyramide régulière à base carrée ?", options: ["Un triangle", "Un carré avec ses diagonales", "Un cercle"], answer: 1, explain: "On voit la base et les quatre arêtes latérales comme des diagonales." },
  { type: "num", q: "Un pavé mesure 10 cm de largeur, 6 cm de profondeur et 4 cm de hauteur. Quelle est l'aire du rectangle de la vue de dessus ?", answer: 60, tol: 0, unit: "cm²", explain: "La vue de dessus montre largeur × profondeur : 10 × 6 = 60 cm²." },
  { type: "tf", q: "Un segment perpendiculaire au PV se projette en élévation comme un point.", answer: true, explain: "Le rayon projetant coïncide avec le segment." },
  { type: "text", q: "Quel trait fin met en correspondance les projections d'un même point sur deux vues ?", answer: ["ligne de rappel", "rappel", "la ligne de rappel", "trait de rappel"], explain: "La ligne de rappel, perpendiculaire à la ligne de terre." }
 ],
 d: [
  { type: "mc", q: "Dans la méthode américaine (troisième dièdre), où dessine-t-on la vue de dessus par rapport à l'élévation ?", options: ["En dessous", "Au-dessus", "À droite"], answer: 1, explain: "Dans la méthode américaine, la vue de dessus est au-dessus de l'élévation, contrairement à la méthode européenne." },
  { type: "mc", q: "Un cercle incliné par rapport au plan de projection se projette comme…", options: ["Un cercle plus petit", "Une ellipse", "Un losange"], answer: 1, explain: "La projection orthogonale d'un cercle incliné est une ellipse dont le grand axe est égal au diamètre." },
  { type: "num", q: "Un segment de 10 cm est parallèle au plan de projection. Combien mesure sa projection orthogonale ?", answer: 10, tol: 0, unit: "cm", explain: "Un segment parallèle au plan se projette en vraie grandeur." },
  { type: "tf", q: "La méthode de la géométrie descriptive a d'abord été gardée secrète parce qu'elle était utile dans le domaine militaire.", answer: true, explain: "Monge l'utilisait pour les fortifications ; elle fut rendue publique après la Révolution française." },
  { type: "order", q: "Remets dans l'ordre : construction de la vue de côté à partir de la vue de dessus et de l'élévation.", items: ["Trace des rappels horizontaux depuis l'élévation", "Reporte les profondeurs depuis la vue de dessus avec une droite à 45°", "Relie les points obtenus", "Repasse les arêtes visibles et cachées"], explain: "Les hauteurs viennent de l'élévation, les profondeurs de la vue de dessus." }
 ]
});
