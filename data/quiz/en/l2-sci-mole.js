QBANK("en", "l2-sci-mole", {
  f: [
    { type: "text", q: "What is the name of the constant that gives the number of particles in one mole?", answer: ["avogadro's number", "avogadro number", "avogadro's constant", "avogadro constant", "avogadro"], explain: "It is Avogadro's number (or constant), 6.022·10²³ mol⁻¹." },
    { type: "num", q: "What is the molar mass of water H₂O (H = 1, O = 16)?", answer: 18, tol: 0.1, unit: "g/mol", explain: "2 + 16 = 18 g/mol." },
    { type: "tf", q: "1 mole of any substance always has the same mass.", answer: false, explain: "It always has the same number of particles, but its mass depends on the molar mass." },
    { type: "mc", q: "What unit is amount of substance measured in?", options: ["Gram", "Mole", "Litre"], answer: 1, explain: "Amount of substance is measured in mol." },
    { type: "num", q: "How many moles are 44 g of CO₂ (M = 44 g/mol)?", answer: 1, tol: 0.01, unit: "mol", explain: "n = 44/44 = 1 mol." }
  ],
  m: [
    { type: "num", q: "What is the mass of 0.25 mol of NaCl (M = 58.5 g/mol)? Round to one decimal place.", answer: 14.6, tol: 0.1, unit: "g", explain: "m = 0.25 · 58.5 ≈ 14.6 g." },
    { type: "num", q: "What is the molar mass of calcium carbonate CaCO₃ (Ca = 40, C = 12, O = 16)?", answer: 100, tol: 0.1, unit: "g/mol", explain: "40 + 12 + 48 = 100 g/mol." },
    { type: "num", q: "How many moles of oxygen atoms are there in 2 mol of CO₂?", answer: 4, tol: 0.01, unit: "mol", explain: "Each CO₂ has 2 O atoms: 2 · 2 = 4 mol." },
    { type: "mc", q: "What volume does 1 mol of gas occupy at standard conditions?", options: ["1 L", "11.2 L", "22.4 L", "44.8 L"], answer: 2, explain: "The molar volume of gases at standard conditions is about 22.4 L/mol." },
    { type: "num", q: "What is the percentage by mass of H in H₂O (H = 1, O = 16)? Round to the nearest whole number.", answer: 11, tol: 0.5, unit: "%", explain: "H = 2/18 ≈ 11%." }
  ],
  d: [
    { type: "num", q: "How many grams of O₂ (M = 32) are there in 11.2 L at standard conditions?", answer: 16, tol: 0.2, unit: "g", explain: "n = 11.2/22.4 = 0.5 mol; m = 0.5 · 32 = 16 g." },
    { type: "num", q: "A compound contains 80% C and 20% H (C = 12, H = 1). How many H atoms are there per C atom in the empirical formula?", answer: 3, tol: 0.05, unit: "", explain: "C = 80/12 = 6.67; H = 20/1 = 20; H/C ratio = 3: empirical formula CH₃ (the molecule is C₂H₆, ethane)." },
    { type: "num", q: "How many atoms in total are there in 0.5 mol of H₂O? Give your answer in units of 10²³ (N_A = 6.0·10²³).", answer: 9, tol: 0.2, unit: "×10²³", explain: "0.5 mol of molecules = 3.0·10²³ molecules, each with 3 atoms: 9.0·10²³." },
    { type: "tf", q: "1 mol of Fe₂O₃ contains 3 mol of oxygen atoms.", answer: true, explain: "The subscript 3 means three O atoms per formula unit." },
    { type: "num", q: "What is the molar mass of a compound if 0.2 mol has a mass of 12 g?", answer: 60, tol: 0.5, unit: "g/mol", explain: "M = m/n = 12/0.2 = 60 g/mol." }
  ]
});
