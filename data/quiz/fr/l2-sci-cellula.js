QBANK("fr", "l2-sci-cellula", {
  f: [
    { type: "mc", q: "Quelle est l'unité fondamentale de tous les êtres vivants ?", options: ["L'organe", "La cellule", "Le tissu"], answer: 1, explain: "Selon la théorie cellulaire, la cellule est l'unité structurale et fonctionnelle du vivant." },
    { type: "tf", q: "Les bactéries sont des cellules procaryotes.", answer: true, explain: "Les bactéries n'ont pas de noyau délimité par une membrane : ce sont des procaryotes." },
    { type: "text", q: "Comment s'appelle l'organite qui contient l'ADN dans les cellules eucaryotes ?", answer: ["noyau", "le noyau"], explain: "Le noyau renferme l'ADN, organisé en chromosomes." },
    { type: "mc", q: "Quel organite réalise la photosynthèse ?", options: ["Le chloroplaste", "Le lysosome", "Le ribosome"], answer: 0, explain: "Les chloroplastes contiennent de la chlorophylle et transforment l'énergie lumineuse en énergie chimique." },
    { type: "tf", q: "La paroi de cellulose est présente dans les cellules animales.", answer: false, explain: "La paroi de cellulose caractérise les cellules végétales." }
  ],
  m: [
    { type: "mc", q: "Quelle est la fonction des ribosomes ?", options: ["Digérer les déchets", "Fabriquer les protéines", "Produire de la lumière"], answer: 1, explain: "Les ribosomes lisent l'ARN messager et assemblent les protéines." },
    { type: "num", q: "Avec un oculaire 10× et un objectif 10×, quel grossissement total obtiens-tu ?", answer: 100, unit: "×", explain: "Le grossissement total est le produit : 10 × 10 = 100." },
    { type: "mc", q: "Quelle affirmation sur les mitochondries est correcte ?", options: ["On ne les trouve que chez les plantes", "Elles produisent la plus grande partie de l'ATP", "Elles contiennent de la chlorophylle"], answer: 1, explain: "Par la respiration cellulaire, les mitochondries produisent de l'ATP ; elles sont présentes chez les animaux, les plantes et les champignons." },
    { type: "order", q: "Range par ordre de taille croissante.", items: ["Bactérie", "Globule rouge", "Ovule de grenouille", "Œuf d'autruche"], explain: "Une bactérie mesure quelques µm, un globule rouge 7 µm, l'ovule de grenouille environ 1-2 mm, l'œuf d'autruche plus de 15 cm." },
    { type: "tf", q: "La vacuole centrale de la cellule végétale contribue à la rigidité de la plante grâce à la turgescence.", answer: true, explain: "La vacuole remplie d'eau pousse contre la paroi et maintient les tissus dressés." }
  ],
  d: [
    { type: "mc", q: "Quel indice soutient l'origine endosymbiotique des mitochondries ?", options: ["Elles ont leur propre ADN circulaire et des ribosomes de type bactérien", "Elles sont présentes chez les bactéries", "Elles n'ont pas de membranes"], answer: 0, explain: "L'ADN propre et les ribosomes semblables à ceux des bactéries, avec la double membrane, indiquent qu'elles dérivent de bactéries englobées." },
    { type: "num", q: "Un cube de 5 µm de côté a une surface de 150 µm² et un volume de 125 µm³. Combien vaut le rapport surface/volume ?", answer: 1.2, tol: 0.01, explain: "S/V = 150 ÷ 125 = 1,2 (en accord avec la formule 6/l = 6/5)." },
    { type: "mc", q: "Une cellule du foie doit dégrader des substances toxiques. Quel organite y est particulièrement développé ?", options: ["Le réticulum endoplasmique lisse", "Le chloroplaste", "Le centriole"], answer: 0, explain: "Le REL participe à la détoxification et il est abondant dans les hépatocytes." },
    { type: "tf", q: "Les globules rouges matures des mammifères, dépourvus de noyau, sont des procaryotes.", answer: false, explain: "Ils dérivent de cellules eucaryotes qui ont perdu leur noyau au cours de leur maturation : ce ne sont pas des procaryotes." },
    { type: "mc", q: "Pourquoi Virchow, avec « omnis cellula e cellula », contribua-t-il à réfuter la génération spontanée ?", options: ["Parce qu'il affirma que les cellules naissent seulement de cellules préexistantes", "Parce qu'il démontra que les cellules ne se divisent pas", "Parce qu'il découvrit les bactéries"], answer: 0, explain: "Si toute cellule vient d'une autre cellule, les organismes ne peuvent pas apparaître à partir de la matière inerte." }
  ]
});
