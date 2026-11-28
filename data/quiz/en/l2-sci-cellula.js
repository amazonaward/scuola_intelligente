QBANK("en", "l2-sci-cellula", {
  f: [
    { type: "mc", q: "What is the basic unit of all living things?", options: ["The organ", "The cell", "The tissue"], answer: 1, explain: "According to cell theory, the cell is the structural and functional unit of life." },
    { type: "tf", q: "Bacteria are prokaryotic cells.", answer: true, explain: "Bacteria have no membrane-bound nucleus: they are prokaryotes." },
    { type: "text", q: "What is the name of the organelle that contains the DNA in eukaryotic cells?", answer: ["nucleus", "the nucleus"], explain: "The nucleus holds the DNA, organised into chromosomes." },
    { type: "mc", q: "Which organelle carries out photosynthesis?", options: ["Chloroplast", "Lysosome", "Ribosome"], answer: 0, explain: "Chloroplasts contain chlorophyll and turn light energy into chemical energy." },
    { type: "tf", q: "A cellulose wall is found in animal cells.", answer: false, explain: "The cellulose wall is typical of plant cells." }
  ],
  m: [
    { type: "mc", q: "What is the function of ribosomes?", options: ["Digesting waste", "Building proteins", "Producing light"], answer: 1, explain: "Ribosomes read messenger RNA and assemble proteins." },
    { type: "num", q: "With a 10× eyepiece and a 10× objective, what total magnification do you get?", answer: 100, unit: "×", explain: "The total magnification is the product: 10 × 10 = 100." },
    { type: "mc", q: "Which statement about mitochondria is correct?", options: ["They are found only in plants", "They produce most of the ATP", "They contain chlorophyll"], answer: 1, explain: "Through cellular respiration mitochondria produce ATP, and they are found in animals, plants and fungi." },
    { type: "order", q: "Put in order of increasing size.", items: ["Bacterium", "Red blood cell", "Frog egg cell", "Ostrich (egg)"], explain: "A bacterium measures a few µm, a red blood cell 7 µm, a frog egg about 1-2 mm, an ostrich egg more than 15 cm." },
    { type: "tf", q: "The central vacuole of a plant cell helps keep the plant rigid thanks to turgor.", answer: true, explain: "The water-filled vacuole pushes against the wall and keeps the tissues upright." }
  ],
  d: [
    { type: "mc", q: "Which clue supports the endosymbiotic origin of mitochondria?", options: ["They have their own circular DNA and bacterial-type ribosomes", "They are found in bacteria", "They have no membranes"], answer: 0, explain: "Their own DNA and ribosomes similar to bacterial ones, together with the double membrane, show that they derive from engulfed bacteria." },
    { type: "num", q: "A cube with a side of 5 µm has a surface area of 150 µm² and a volume of 125 µm³. What is its surface area/volume ratio?", answer: 1.2, tol: 0.01, explain: "SA/V = 150 ÷ 125 = 1.2 (consistent with the formula 6/l = 6/5)." },
    { type: "mc", q: "A liver cell has to break down toxic substances. Which organelle is especially well developed?", options: ["Smooth endoplasmic reticulum", "Chloroplast", "Centriole"], answer: 0, explain: "The SER takes part in detoxification and is abundant in liver cells (hepatocytes)." },
    { type: "tf", q: "Mature mammalian red blood cells, which have no nucleus, are prokaryotes.", answer: false, explain: "They derive from eukaryotic cells that lost their nucleus as they matured: they are not prokaryotes." },
    { type: "mc", q: "Why did Virchow, with \"omnis cellula e cellula\", help disprove spontaneous generation?", options: ["Because he stated that cells arise only from pre-existing cells", "Because he showed that cells do not divide", "Because he discovered bacteria"], answer: 0, explain: "If every cell comes from another cell, organisms cannot appear from non-living matter." }
  ]
});
