QBANK("fr", "l2-sci-evoluzione-classificazione", {
  f: [
    { type: "text", q: "Qui publia en 1859 « L'Origine des espèces » ?", answer: ["darwin", "charles darwin"], explain: "Charles Darwin y exposa la théorie de la sélection naturelle." },
    { type: "tf", q: "Les espèces actuelles descendent d'ancêtres communs.", answer: true, explain: "C'est la thèse centrale de la théorie de l'évolution, soutenue par les fossiles, l'anatomie et l'ADN." },
    { type: "mc", q: "Lequel de ces noms scientifiques est écrit correctement ?", options: ["Homo sapiens", "homo Sapiens", "HOMO SAPIENS"], answer: 0, explain: "Le genre commence par une majuscule, l'épithète spécifique par une minuscule." },
    { type: "mc", q: "Combien y a-t-il de domaines du vivant dans le système de Woese ?", options: ["2", "3", "5"], answer: 1, explain: "Bacteria, Archaea et Eukarya." },
    { type: "tf", q: "Un champignon est un animal.", answer: false, explain: "Les champignons forment un règne à part." }
  ],
  m: [
    { type: "mc", q: "Qu'est-ce qui produit de la nouvelle variabilité génétique ?", options: ["Les mutations", "La nourriture", "L'exercice physique"], answer: 0, explain: "Les mutations créent de nouveaux allèles ; les caractères acquis au cours de la vie ne se transmettent pas." },
    { type: "num", q: "À l'équilibre de Hardy-Weinberg, p = 0,7. Combien vaut q ?", answer: 0.3, tol: 0.001, explain: "p + q = 1, donc q = 0,3." },
    { type: "mc", q: "Une population réduite à quelques individus par une catastrophe subit...", options: ["un effet goulot d'étranglement", "un flux génique", "un crossing-over"], answer: 0, explain: "Le goulot d'étranglement réduit fortement la variabilité génétique." },
    { type: "tf", q: "Deux espèces vivant dans des milieux semblables peuvent développer des structures semblables sans être apparentées.", answer: true, explain: "C'est l'évolution convergente : les structures sont analogues." },
    { type: "order", q: "Range de la catégorie la plus large à la plus précise.", items: ["Règne", "Classe", "Genre", "Espèce"], explain: "Le genre regroupe des espèces proches." }
  ],
  d: [
    { type: "num", q: "Une maladie récessive touche 1 personne sur 1600 (q² = 0,000625). Quelle est la fréquence q de l'allèle récessif ?", answer: 0.025, tol: 0.0005, explain: "q = √0,000625 = 0,025." },
    { type: "num", q: "Avec q = 0,02 et p = 0,98, quelle est la fréquence des porteurs hétérozygotes (2pq) ? Arrondis au millième.", answer: 0.039, tol: 0.001, explain: "2 × 0,98 × 0,02 = 0,0392." },
    { type: "mc", q: "Pourquoi le mulet est-il stérile ?", options: ["Il a un nombre impair de chromosomes (63), qui ne s'apparient pas correctement pendant la méiose", "Parce qu'il est trop robuste", "Parce que c'est une espèce sans gamètes"], answer: 0, explain: "Le cheval a 64 chromosomes et l'âne 62 : chez le mulet, les homologues ne s'apparient pas et les gamètes ne sont pas normaux." },
    { type: "mc", q: "Quelle affirmation sur la classification cladistique est correcte ?", options: ["Les groupes valables sont ceux qui réunissent un ancêtre et tous ses descendants", "Elle ne se fonde que sur la taille", "Elle ignore l'ADN"], answer: 0, explain: "Les groupes monophylétiques reflètent la parenté évolutive." },
    { type: "tf", q: "Selon la théorie synthétique, les caractères acquis au cours de la vie (par ex. des muscles développés) se transmettent aux enfants.", answer: false, explain: "Seules les variations de l'ADN des cellules germinales sont héréditaires ; le lamarckisme a été abandonné." }
  ]
});
