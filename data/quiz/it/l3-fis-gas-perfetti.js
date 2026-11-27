QBANK("it", "l3-fis-gas-perfetti", {
  f: [
    { type: "num", q: "Quanto vale 0 °C in kelvin (valore arrotondato)?", answer: 273, tol: 0.5, unit: "K", explain: "T(K) = t(°C) + 273,15 ≈ 273 K." },
    { type: "mc", q: "Quale legge afferma che a temperatura costante p·V è costante?", options: ["Boyle", "Prima di Gay-Lussac", "Seconda di Gay-Lussac", "Avogadro"], answer: 0, explain: "È la legge di Boyle (trasformazione isoterma)." },
    { type: "tf", q: "In una trasformazione isocora il volume del gas resta costante.", answer: true, explain: "Isocora = a volume costante." },
    { type: "mc", q: "Quanto vale, circa, il volume di una mole di gas a 0 °C e 1 atm?", options: ["1 L", "22,4 L", "100 L", "1 m³"], answer: 1, explain: "Volume molare ≈ 22,4 L." },
    { type: "mc", q: "In quale unità si deve esprimere la temperatura nelle leggi dei gas?", options: ["Celsius", "Fahrenheit", "Kelvin", "Qualsiasi"], answer: 2, explain: "Serve la scala assoluta." }
  ],
  m: [
    { type: "num", q: "Un gas a 1 atm occupa 8 L. A T costante viene compresso a 2 L. Quale sarà la pressione?", answer: 4, tol: 0, unit: "atm", explain: "p·V costante: 1·8 = p·2 ⟹ p = 4 atm." },
    { type: "num", q: "Un contenitore rigido con gas a 300 K e 1,0 bar viene scaldato a 600 K. Quale sarà la pressione?", answer: 2, tol: 0, unit: "bar", explain: "p/T costante: p2 = 1,0 × 600/300 = 2,0 bar." },
    { type: "num", q: "Quante moli di gas ci sono in 4 L a 2·10⁵ Pa e 300 K? (R = 8,31)", answer: 0.32, tol: 0.01, unit: "mol", explain: "n = pV/(RT) = 2·10⁵ × 0,004/(8,31 × 300) ≈ 0,32 mol." },
    { type: "tf", q: "A temperatura costante, raddoppiando il volume di un gas la pressione si dimezza.", answer: true, explain: "p e V sono inversamente proporzionali (Boyle)." },
    { type: "mc", q: "Chi propose che volumi uguali di gas diversi, nelle stesse condizioni, contengano lo stesso numero di molecole?", options: ["Boyle", "Avogadro", "Boltzmann", "Kelvin"], answer: 1, explain: "Amedeo Avogadro, nel 1811." }
  ],
  d: [
    { type: "num", q: "Qual è l'energia cinetica media traslazionale di una molecola a 400 K? (k_B = 1,38·10⁻²³ J/K)", answer: 8.28, tol: 0.05, unit: "10⁻²¹ J", explain: "⟨K⟩ = 1,5 × 1,38·10⁻²³ × 400 = 8,28·10⁻²¹ J." },
    { type: "num", q: "Calcola l'energia interna di 2 mol di gas perfetto monoatomico a 300 K (R = 8,31). Risultato in kJ.", answer: 7.48, tol: 0.05, unit: "kJ", explain: "U = (3/2)nRT = 1,5 × 2 × 8,31 × 300 ≈ 7479 J ≈ 7,48 kJ." },
    { type: "num", q: "Un gas ha p1 = 1 atm, V1 = 6 L, T1 = 300 K. Dopo la trasformazione p2 = 2 atm e T2 = 600 K. Quanto vale V2?", answer: 6, tol: 0.01, unit: "L", explain: "p1V1/T1 = p2V2/T2 ⟹ V2 = 1·6·600/(300·2) = 6 L." },
    { type: "num", q: "A quale temperatura (in K) la velocità quadratica media delle molecole di un gas è doppia di quella a 200 K?", answer: 800, tol: 0.5, unit: "K", explain: "v ∝ √T: per raddoppiare v bisogna quadruplicare T." },
    { type: "tf", q: "A 300 K le molecole di idrogeno hanno un'energia cinetica media di traslazione uguale a quella delle molecole di azoto.", answer: true, explain: "⟨K⟩ = (3/2)k_B T non dipende dal tipo di gas." }
  ]
});
