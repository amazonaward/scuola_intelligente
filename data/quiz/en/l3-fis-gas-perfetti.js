QBANK("en", "l3-fis-gas-perfetti", {
  f: [
    { type: "num", q: "What is 0 °C in kelvin (rounded)?", answer: 273, tol: 0.5, unit: "K", explain: "T(K) = t(°C) + 273.15 ≈ 273 K." },
    { type: "mc", q: "Which law states that at constant temperature p·V is constant?", options: ["Boyle's law", "Gay-Lussac's first law", "Gay-Lussac's second law", "Avogadro's law"], answer: 0, explain: "It is Boyle's law (isothermal process)." },
    { type: "tf", q: "In an isochoric process the volume of the gas stays constant.", answer: true, explain: "Isochoric = at constant volume." },
    { type: "mc", q: "What is the approximate volume of one mole of gas at 0 °C and 1 atm?", options: ["1 L", "22.4 L", "100 L", "1 m³"], answer: 1, explain: "Molar volume ≈ 22.4 L." },
    { type: "mc", q: "In which unit must temperature be expressed in the gas laws?", options: ["Celsius", "Fahrenheit", "Kelvin", "Any"], answer: 2, explain: "The absolute scale is needed." }
  ],
  m: [
    { type: "num", q: "A gas at 1 atm occupies 8 L. At constant T it is compressed to 2 L. What will the pressure be?", answer: 4, tol: 0, unit: "atm", explain: "p·V constant: 1·8 = p·2 ⟹ p = 4 atm." },
    { type: "num", q: "A rigid container holding gas at 300 K and 1.0 bar is heated to 600 K. What will the pressure be?", answer: 2, tol: 0, unit: "bar", explain: "p/T constant: p2 = 1.0 × 600/300 = 2.0 bar." },
    { type: "num", q: "How many moles of gas are there in 4 L at 2·10⁵ Pa and 300 K? (R = 8.31)", answer: 0.32, tol: 0.01, unit: "mol", explain: "n = pV/(RT) = 2·10⁵ × 0.004/(8.31 × 300) ≈ 0.32 mol." },
    { type: "tf", q: "At constant temperature, doubling the volume of a gas halves its pressure.", answer: true, explain: "p and V are inversely proportional (Boyle)." },
    { type: "mc", q: "Who proposed that equal volumes of different gases, under the same conditions, contain the same number of molecules?", options: ["Boyle", "Avogadro", "Boltzmann", "Kelvin"], answer: 1, explain: "Amedeo Avogadro, in 1811." }
  ],
  d: [
    { type: "num", q: "What is the mean translational kinetic energy of a molecule at 400 K? (k_B = 1.38·10⁻²³ J/K)", answer: 8.28, tol: 0.05, unit: "10⁻²¹ J", explain: "⟨K⟩ = 1.5 × 1.38·10⁻²³ × 400 = 8.28·10⁻²¹ J." },
    { type: "num", q: "Calculate the internal energy of 2 mol of monatomic ideal gas at 300 K (R = 8.31). Give the result in kJ.", answer: 7.48, tol: 0.05, unit: "kJ", explain: "U = (3/2)nRT = 1.5 × 2 × 8.31 × 300 ≈ 7479 J ≈ 7.48 kJ." },
    { type: "num", q: "A gas has p1 = 1 atm, V1 = 6 L, T1 = 300 K. After the process p2 = 2 atm and T2 = 600 K. What is V2?", answer: 6, tol: 0.01, unit: "L", explain: "p1V1/T1 = p2V2/T2 ⟹ V2 = 1·6·600/(300·2) = 6 L." },
    { type: "num", q: "At what temperature (in K) is the rms speed of the molecules of a gas twice its value at 200 K?", answer: 800, tol: 0.5, unit: "K", explain: "v ∝ √T: to double v you must quadruple T." },
    { type: "tf", q: "At 300 K hydrogen molecules have the same mean translational kinetic energy as nitrogen molecules.", answer: true, explain: "⟨K⟩ = (3/2)k_B T does not depend on the type of gas." }
  ]
});
