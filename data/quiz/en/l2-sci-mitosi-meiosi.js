QBANK("en", "l2-sci-mitosi-meiosi", {
  f: [
    { type: "mc", q: "Which process produces two daughter cells identical to the parent cell?", options: ["Mitosis", "Meiosis", "Fertilisation"], answer: 0, explain: "Mitosis keeps the number of chromosomes the same and produces clones." },
    { type: "tf", q: "Human gametes have 46 chromosomes.", answer: false, explain: "Gametes are haploid, with 23 chromosomes; 46 is the number in somatic cells." },
    { type: "text", q: "What are the two identical copies of a duplicated chromosome called?", answer: ["sister chromatids", "chromatids", "sister chromatid"], explain: "They are joined at the centromere until anaphase." },
    { type: "mc", q: "Meiosis is used to produce...", options: ["Skin cells", "Gametes", "Red blood cells"], answer: 1, explain: "Meiosis takes place in the gonads and produces eggs and sperm." },
    { type: "tf", q: "In animal cells cytokinesis takes place by the cell pinching in two.", answer: true, explain: "A contractile ring forms a furrow that separates the two daughter cells." }
  ],
  m: [
    { type: "mc", q: "In which phase of the cell cycle does the cell duplicate its DNA?", options: ["G1", "S", "M"], answer: 1, explain: "S phase is the phase of DNA synthesis." },
    { type: "num", q: "Starting from one cell, how many cells are there after 5 consecutive mitoses?", answer: 32, explain: "2⁵ = 32." },
    { type: "mc", q: "What happens in mitotic anaphase?", options: ["Sister chromatids separate towards the poles", "Homologues pair up", "The nuclear envelope forms"], answer: 0, explain: "The centromeres split and each chromatid becomes an independent chromosome." },
    { type: "tf", q: "Crossing over increases genetic variation.", answer: true, explain: "By exchanging segments between homologues, it creates new combinations of alleles." },
    { type: "order", q: "Put the stages of the cell cycle in order.", items: ["G1", "S", "G2", "Mitosis"], explain: "Growth, DNA replication, preparation and finally division." }
  ],
  d: [
    { type: "num", q: "How many chromosomes does each daughter cell have after meiosis I of a human cell (counting chromosomes as centromeres)?", answer: 23, explain: "Meiosis I is a reduction division: the homologues separate and the number goes from 46 to 23 chromosomes (still duplicated)." },
    { type: "num", q: "An organism has 2n = 10. How many chromosome combinations can its gametes have (independent assortment only)?", answer: 32, explain: "n = 5, so 2⁵ = 32." },
    { type: "mc", q: "A cell in metaphase II contains 23 duplicated chromosomes. How many DNA molecules (chromatids) are there in total?", options: ["23", "46", "92"], answer: 1, explain: "Each duplicated chromosome has 2 chromatids: 23 × 2 = 46." },
    { type: "mc", q: "Why doesn't a mature neuron produce new neurons by mitosis?", options: ["Because it has left the cycle and is in G0", "Because it has no DNA", "Because it has only one chromosome"], answer: 0, explain: "Mature neurons are post-mitotic cells, stopped in G0." },
    { type: "tf", q: "Non-disjunction in meiosis II can produce gametes with one chromosome too many or too few.", answer: true, explain: "If the sister chromatids fail to separate, one gamete receives two copies and another none." }
  ]
});
