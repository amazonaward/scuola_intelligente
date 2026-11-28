QBANK("fr", "l2-sci-molecole-vita", {
  f: [
    { type: "mc", q: "Quelle molécule est le principal solvant chez les êtres vivants ?", options: ["L'eau", "Le glucose", "L'huile"], answer: 0, explain: "L'eau est le solvant du vivant." },
    { type: "mc", q: "Le glucose appartient aux...", options: ["Lipides", "Glucides", "Protéines"], answer: 1, explain: "C'est un monosaccharide." },
    { type: "tf", q: "Les huiles sont solubles dans l'eau.", answer: false, explain: "Les lipides sont apolaires et ne se dissolvent pas dans l'eau." },
    { type: "text", q: "Comment s'appellent les « briques » qui forment les protéines ?", answer: ["acides aminés", "les acides aminés", "acide aminé", "acides amines", "aminoacides"], explain: "Les protéines sont des chaînes d'acides aminés." },
    { type: "mc", q: "L'ADN a la forme d'...", options: ["Une seule chaîne en zigzag", "Une double hélice", "Un anneau simple"], answer: 1, explain: "Watson et Crick (1953) proposèrent la double hélice." }
  ],
  m: [
    { type: "tf", q: "Dans l'ADN, la thymine s'apparie avec l'adénine.", answer: true, explain: "A–T (2 liaisons hydrogène)." },
    { type: "mc", q: "Lequel de ces composés est un polysaccharide de réserve des végétaux ?", options: ["Le glycogène", "L'amidon", "Le cholestérol", "L'hémoglobine"], answer: 1, explain: "L'amidon est la réserve des plantes ; le glycogène est celle des animaux." },
    { type: "mc", q: "Quel est le rôle des enzymes ?", options: ["Stocker l'énergie", "Accélérer les réactions chimiques", "Former les membranes", "Transporter les graisses"], answer: 1, explain: "Les enzymes sont des catalyseurs biologiques de nature protéique." },
    { type: "num", q: "Combien de kcal tire-t-on de 20 g de glucides (4 kcal/g) ?", answer: 80, tol: 0.5, unit: "kcal", explain: "20 · 4 = 80 kcal." },
    { type: "mc", q: "Quelle molécule forme la couche de base des membranes cellulaires ?", options: ["Les phospholipides", "L'amidon", "L'ADN", "La cellulose"], answer: 0, explain: "La bicouche de phospholipides est la base de la membrane." }
  ],
  d: [
    { type: "tf", q: "Une séquence d'ADN est ATTGC : le brin complémentaire est TAACG.", answer: true, explain: "A→T, T→A, T→A, G→C, C→G." },
    { type: "mc", q: "Quel couple de molécules a la même formule (C₆H₁₂O₆) mais une structure différente ?", options: ["Glucose et fructose", "Saccharose et lactose", "Amidon et cellulose", "Glycérol et cholestérol"], answer: 0, explain: "Le glucose et le fructose sont des isomères : même formule, atomes disposés différemment." },
    { type: "mc", q: "Quelle réaction libère de l'eau en unissant deux monomères ?", options: ["L'hydrolyse", "La condensation", "L'oxydation", "La neutralisation"], answer: 1, explain: "La condensation (synthèse par déshydratation) forme la liaison et libère H₂O." },
    { type: "tf", q: "La chaleur peut dénaturer une protéine sans rompre ses liaisons peptidiques.", answer: true, explain: "La dénaturation altère les structures secondaire et tertiaire, pas la séquence des acides aminés." },
    { type: "num", q: "Combien de paires de bases y a-t-il dans un fragment d'ADN double brin de 300 nucléotides au total ?", answer: 150, tol: 0.5, unit: "paires", explain: "Chaque paire est formée de 2 nucléotides : 300/2 = 150." }
  ]
});
