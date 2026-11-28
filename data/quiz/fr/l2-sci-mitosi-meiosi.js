QBANK("fr", "l2-sci-mitosi-meiosi", {
  f: [
    { type: "mc", q: "Quel processus produit deux cellules filles identiques à la cellule mère ?", options: ["La mitose", "La méiose", "La fécondation"], answer: 0, explain: "La mitose conserve le nombre de chromosomes et produit des clones." },
    { type: "tf", q: "Les gamètes humains ont 46 chromosomes.", answer: false, explain: "Les gamètes sont haploïdes, avec 23 chromosomes ; 46 est le nombre des cellules somatiques." },
    { type: "text", q: "Comment s'appellent les deux copies identiques d'un chromosome dupliqué ?", answer: ["chromatides sœurs", "chromatides soeurs", "chromatides", "les chromatides sœurs", "les chromatides"], explain: "Elles restent réunies au centromère jusqu'à l'anaphase." },
    { type: "mc", q: "La méiose sert à produire...", options: ["des cellules de la peau", "des gamètes", "des globules rouges"], answer: 1, explain: "La méiose a lieu dans les gonades et produit les ovules et les spermatozoïdes." },
    { type: "tf", q: "Dans les cellules animales, la cytodiérèse se fait par étranglement de la cellule.", answer: true, explain: "Un anneau contractile forme un sillon qui sépare les deux cellules filles." }
  ],
  m: [
    { type: "mc", q: "Pendant quelle phase du cycle cellulaire la cellule duplique-t-elle son ADN ?", options: ["G1", "S", "M"], answer: 1, explain: "La phase S est la phase de synthèse de l'ADN." },
    { type: "num", q: "À partir d'une cellule, combien de cellules obtient-on après 5 mitoses successives ?", answer: 32, explain: "2⁵ = 32." },
    { type: "mc", q: "Que se passe-t-il en anaphase de mitose ?", options: ["Les chromatides sœurs se séparent vers les pôles", "Les homologues s'apparient", "L'enveloppe nucléaire se forme"], answer: 0, explain: "Les centromères se divisent et chaque chromatide devient un chromosome indépendant." },
    { type: "tf", q: "Le crossing-over augmente la diversité génétique.", answer: true, explain: "En échangeant des segments entre homologues, il crée de nouvelles combinaisons d'allèles." },
    { type: "order", q: "Remets dans l'ordre les étapes du cycle cellulaire.", items: ["G1", "S", "G2", "Mitose"], explain: "Croissance, réplication de l'ADN, préparation et enfin division." }
  ],
  d: [
    { type: "num", q: "Combien de chromosomes possède chaque cellule fille après la méiose I d'une cellule humaine (en comptant les chromosomes d'après les centromères) ?", answer: 23, explain: "La méiose I est réductionnelle : les homologues se séparent et l'on passe de 46 à 23 chromosomes (encore dupliqués)." },
    { type: "num", q: "Un organisme a 2n = 10. Combien de combinaisons de chromosomes ses gamètes peuvent-ils avoir (assortiment indépendant seulement) ?", answer: 32, explain: "n = 5, donc 2⁵ = 32." },
    { type: "mc", q: "Une cellule en métaphase II contient 23 chromosomes dupliqués. Combien de molécules d'ADN (chromatides) y a-t-il au total ?", options: ["23", "46", "92"], answer: 1, explain: "Chaque chromosome dupliqué a 2 chromatides : 23 × 2 = 46." },
    { type: "mc", q: "Pourquoi un neurone mature ne produit-il pas de nouveaux neurones par mitose ?", options: ["Parce qu'il est sorti du cycle et se trouve en phase G0", "Parce qu'il n'a pas d'ADN", "Parce qu'il n'a qu'un seul chromosome"], answer: 0, explain: "Les neurones matures sont des cellules post-mitotiques, arrêtées en G0." },
    { type: "tf", q: "Une non-disjonction en méiose II peut produire des gamètes avec un chromosome en trop ou en moins.", answer: true, explain: "Si les chromatides sœurs ne se séparent pas, un gamète reçoit deux copies et un autre aucune." }
  ]
});
