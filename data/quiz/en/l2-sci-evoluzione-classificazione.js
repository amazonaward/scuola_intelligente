QBANK("en", "l2-sci-evoluzione-classificazione", {
  f: [
    { type: "text", q: "Who published \"On the Origin of Species\" in 1859?", answer: ["darwin", "charles darwin"], explain: "Charles Darwin set out the theory of natural selection." },
    { type: "tf", q: "Today's species descend from common ancestors.", answer: true, explain: "This is the central claim of evolutionary theory, supported by fossils, anatomy and DNA." },
    { type: "mc", q: "Which of these is a correctly written scientific name?", options: ["Homo sapiens", "homo Sapiens", "HOMO SAPIENS"], answer: 0, explain: "The genus starts with a capital letter, the specific epithet with a lower-case letter." },
    { type: "mc", q: "How many domains of life are there in Woese's system?", options: ["2", "3", "5"], answer: 1, explain: "Bacteria, Archaea and Eukarya." },
    { type: "tf", q: "A fungus is an animal.", answer: false, explain: "Fungi form a kingdom of their own." }
  ],
  m: [
    { type: "mc", q: "What produces new genetic variation?", options: ["Mutations", "Food", "Physical exercise"], answer: 0, explain: "Mutations create new alleles; traits acquired during life are not inherited." },
    { type: "num", q: "In Hardy-Weinberg equilibrium p = 0.7. What is q?", answer: 0.3, tol: 0.001, explain: "p + q = 1, so q = 0.3." },
    { type: "mc", q: "A population reduced to a few individuals by a catastrophe undergoes a...", options: ["bottleneck effect", "gene flow", "crossing over"], answer: 0, explain: "A bottleneck drastically reduces genetic variation." },
    { type: "tf", q: "Two species living in similar environments can develop similar structures even if they are not related.", answer: true, explain: "This is convergent evolution: the structures are analogous." },
    { type: "order", q: "Put in order from the broadest category to the most specific.", items: ["Kingdom", "Class", "Genus", "Species"], explain: "A genus groups together related species." }
  ],
  d: [
    { type: "num", q: "A recessive disease affects 1 person in 1600 (q² = 0.000625). What is the frequency q of the recessive allele?", answer: 0.025, tol: 0.0005, explain: "q = √0.000625 = 0.025." },
    { type: "num", q: "With q = 0.02 and p = 0.98, what is the frequency of heterozygous carriers (2pq)? Round to three decimal places.", answer: 0.039, tol: 0.001, explain: "2 × 0.98 × 0.02 = 0.0392." },
    { type: "mc", q: "Why is the mule sterile?", options: ["It has an odd number of chromosomes (63) that do not pair properly in meiosis", "Because it is too strong", "Because it is a species without gametes"], answer: 0, explain: "The horse has 64 chromosomes and the donkey 62: in the mule the homologues do not pair and the gametes are not normal." },
    { type: "mc", q: "Which statement about cladistic classification is correct?", options: ["Valid groups are those with an ancestor and all its descendants", "It is based only on size", "It ignores DNA"], answer: 0, explain: "Monophyletic groups reflect evolutionary relationships." },
    { type: "tf", q: "According to the synthetic theory, traits acquired during life (e.g. well-developed muscles) are passed on to offspring.", answer: false, explain: "Only changes in the DNA of germ cells are heritable; Lamarckism has been abandoned." }
  ]
});
