QBANK("fr", "l2-sci-mole", {
  f: [
    { type: "text", q: "Comment s'appelle la constante qui indique le nombre de particules dans une mole ?", answer: ["nombre d'avogadro", "constante d'avogadro", "le nombre d'avogadro", "la constante d'avogadro", "avogadro"], explain: "C'est le nombre (ou la constante) d'Avogadro, 6,022·10²³ mol⁻¹." },
    { type: "num", q: "Quelle est la masse molaire de l'eau H₂O (H = 1, O = 16) ?", answer: 18, tol: 0.1, unit: "g/mol", explain: "2 + 16 = 18 g/mol." },
    { type: "tf", q: "Une mole de n'importe quelle substance a toujours la même masse.", answer: false, explain: "Elle a toujours le même nombre de particules, mais sa masse dépend de la masse molaire." },
    { type: "mc", q: "En quelle unité se mesure la quantité de matière ?", options: ["Le gramme", "La mole", "Le litre"], answer: 1, explain: "La quantité de matière se mesure en mol." },
    { type: "num", q: "À combien de moles correspondent 44 g de CO₂ (M = 44 g/mol) ?", answer: 1, tol: 0.01, unit: "mol", explain: "n = 44/44 = 1 mol." }
  ],
  m: [
    { type: "num", q: "Quelle est la masse de 0,25 mol de NaCl (M = 58,5 g/mol) ? Arrondis au dixième.", answer: 14.6, tol: 0.1, unit: "g", explain: "m = 0,25 · 58,5 ≈ 14,6 g." },
    { type: "num", q: "Quelle est la masse molaire du carbonate de calcium CaCO₃ (Ca = 40, C = 12, O = 16) ?", answer: 100, tol: 0.1, unit: "g/mol", explain: "40 + 12 + 48 = 100 g/mol." },
    { type: "num", q: "Combien de moles d'atomes d'oxygène y a-t-il dans 2 mol de CO₂ ?", answer: 4, tol: 0.01, unit: "mol", explain: "Chaque CO₂ a 2 atomes de O : 2 · 2 = 4 mol." },
    { type: "mc", q: "Quel volume occupe 1 mol de gaz dans les conditions normales ?", options: ["1 L", "11,2 L", "22,4 L", "44,8 L"], answer: 2, explain: "Le volume molaire des gaz dans les conditions normales est d'environ 22,4 L/mol." },
    { type: "num", q: "Quel est le pourcentage massique de H dans H₂O (H = 1, O = 16) ? Arrondis à l'unité.", answer: 11, tol: 0.5, unit: "%", explain: "H = 2/18 ≈ 11 %." }
  ],
  d: [
    { type: "num", q: "Combien de grammes de O₂ (M = 32) y a-t-il dans 11,2 L dans les conditions normales ?", answer: 16, tol: 0.2, unit: "g", explain: "n = 11,2/22,4 = 0,5 mol ; m = 0,5 · 32 = 16 g." },
    { type: "num", q: "Un composé contient 80 % de C et 20 % de H (C = 12, H = 1). Combien d'atomes de H y a-t-il par atome de C dans la formule empirique ?", answer: 3, tol: 0.05, unit: "", explain: "C = 80/12 = 6,67 ; H = 20/1 = 20 ; rapport H/C = 3 : formule empirique CH₃ (la molécule est C₂H₆, l'éthane)." },
    { type: "num", q: "Combien d'atomes au total y a-t-il dans 0,5 mol de H₂O ? Exprime le résultat en unités de 10²³ (N_A = 6,0·10²³).", answer: 9, tol: 0.2, unit: "×10²³", explain: "0,5 mol de molécules = 3,0·10²³ molécules, chacune avec 3 atomes : 9,0·10²³." },
    { type: "tf", q: "Dans 1 mol de Fe₂O₃, il y a 3 mol d'atomes d'oxygène.", answer: true, explain: "L'indice 3 indique trois atomes de O par unité formulaire." },
    { type: "num", q: "Quelle est la masse molaire d'un composé si 0,2 mol ont une masse de 12 g ?", answer: 60, tol: 0.5, unit: "g/mol", explain: "M = m/n = 12/0,2 = 60 g/mol." }
  ]
});
