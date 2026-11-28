QBANK("en", "l2-sci-molecole-vita", {
  f: [
    { type: "mc", q: "Which molecule is the main solvent in living things?", options: ["Water", "Glucose", "Oil"], answer: 0, explain: "Water is the solvent of life." },
    { type: "mc", q: "Glucose belongs to the...", options: ["Lipids", "Carbohydrates", "Proteins"], answer: 1, explain: "It is a monosaccharide." },
    { type: "tf", q: "Oils are soluble in water.", answer: false, explain: "Lipids are non-polar and do not dissolve in water." },
    { type: "text", q: "What are the \"building blocks\" that make up proteins called?", answer: ["amino acids", "the amino acids", "amino acid", "aminoacids"], explain: "Proteins are chains of amino acids." },
    { type: "mc", q: "DNA is shaped like a...", options: ["Single zigzag chain", "Double helix", "Single ring"], answer: 1, explain: "Watson and Crick (1953) proposed the double helix." }
  ],
  m: [
    { type: "tf", q: "In DNA, thymine pairs with adenine.", answer: true, explain: "A–T (2 hydrogen bonds)." },
    { type: "mc", q: "Which of these is a plant storage polysaccharide?", options: ["Glycogen", "Starch", "Cholesterol", "Haemoglobin"], answer: 1, explain: "Starch is the plant storage form; glycogen is the animal one." },
    { type: "mc", q: "What do enzymes do?", options: ["Store energy", "Speed up chemical reactions", "Form membranes", "Transport fats"], answer: 1, explain: "Enzymes are biological catalysts, made of protein." },
    { type: "num", q: "How many kcal do you get from 20 g of carbohydrates (4 kcal/g)?", answer: 80, tol: 0.5, unit: "kcal", explain: "20 · 4 = 80 kcal." },
    { type: "mc", q: "Which molecule forms the basic layer of cell membranes?", options: ["Phospholipids", "Starch", "DNA", "Cellulose"], answer: 0, explain: "The phospholipid bilayer is the basis of the membrane." }
  ],
  d: [
    { type: "tf", q: "A DNA sequence is ATTGC: the complementary strand is TAACG.", answer: true, explain: "A→T, T→A, T→A, G→C, C→G." },
    { type: "mc", q: "Which pair of molecules has the same formula (C₆H₁₂O₆) but a different structure?", options: ["Glucose and fructose", "Sucrose and lactose", "Starch and cellulose", "Glycerol and cholesterol"], answer: 0, explain: "Glucose and fructose are isomers: same formula, atoms arranged differently." },
    { type: "mc", q: "Which reaction releases water when joining two monomers?", options: ["Hydrolysis", "Condensation", "Oxidation", "Neutralisation"], answer: 1, explain: "Condensation (dehydration synthesis) forms the bond and releases H₂O." },
    { type: "tf", q: "Heat can denature a protein without breaking its peptide bonds.", answer: true, explain: "Denaturation alters the secondary and tertiary structures, not the amino acid sequence." },
    { type: "num", q: "How many base pairs are there in a stretch of double-stranded DNA with 300 nucleotides in total?", answer: 150, tol: 0.5, unit: "pairs", explain: "Each pair is made of 2 nucleotides: 300/2 = 150." }
  ]
});
