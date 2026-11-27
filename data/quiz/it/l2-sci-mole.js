QBANK("it", "l2-sci-mole", {
  f: [
    { type: "text", q: "Come si chiama la costante che indica il numero di particelle in una mole?", answer: ["numero di avogadro", "costante di avogadro", "avogadro"], explain: "È il numero (o costante) di Avogadro, 6,022·10²³ mol⁻¹." },
    { type: "num", q: "Qual è la massa molare dell'acqua H₂O (H = 1, O = 16)?", answer: 18, tol: 0.1, unit: "g/mol", explain: "2 + 16 = 18 g/mol." },
    { type: "tf", q: "1 mole di qualsiasi sostanza ha sempre la stessa massa.", answer: false, explain: "Ha sempre lo stesso numero di particelle, ma la massa dipende dalla massa molare." },
    { type: "mc", q: "In che unità si misura la quantità di sostanza?", options: ["Grammo", "Mole", "Litro"], answer: 1, explain: "La quantità di sostanza si misura in mol." },
    { type: "num", q: "Quante moli sono 44 g di CO₂ (M = 44 g/mol)?", answer: 1, tol: 0.01, unit: "mol", explain: "n = 44/44 = 1 mol." }
  ],
  m: [
    { type: "num", q: "Qual è la massa di 0,25 mol di NaCl (M = 58,5 g/mol)? Arrotonda a un decimale.", answer: 14.6, tol: 0.1, unit: "g", explain: "m = 0,25 · 58,5 ≈ 14,6 g." },
    { type: "num", q: "Qual è la massa molare del carbonato di calcio CaCO₃ (Ca = 40, C = 12, O = 16)?", answer: 100, tol: 0.1, unit: "g/mol", explain: "40 + 12 + 48 = 100 g/mol." },
    { type: "num", q: "Quante moli di atomi di ossigeno ci sono in 2 mol di CO₂?", answer: 4, tol: 0.01, unit: "mol", explain: "Ogni CO₂ ha 2 atomi di O: 2 · 2 = 4 mol." },
    { type: "mc", q: "Quale volume occupa 1 mol di gas in condizioni normali?", options: ["1 L", "11,2 L", "22,4 L", "44,8 L"], answer: 2, explain: "Il volume molare dei gas in condizioni normali è circa 22,4 L/mol." },
    { type: "num", q: "Qual è la percentuale in massa di H in H₂O (H = 1, O = 16)? Arrotonda all'unità.", answer: 11, tol: 0.5, unit: "%", explain: "H = 2/18 ≈ 11%." }
  ],
  d: [
    { type: "num", q: "Quanti grammi di O₂ (M = 32) ci sono in 11,2 L in condizioni normali?", answer: 16, tol: 0.2, unit: "g", explain: "n = 11,2/22,4 = 0,5 mol; m = 0,5 · 32 = 16 g." },
    { type: "num", q: "Un composto contiene 80% C e 20% H (C = 12, H = 1). Quanti atomi di H per atomo di C nella formula minima?", answer: 3, tol: 0.05, unit: "", explain: "C = 80/12 = 6,67; H = 20/1 = 20; rapporto H/C = 3: formula minima CH₃ (la molecola è C₂H₆, etano)." },
    { type: "num", q: "Quanti atomi totali ci sono in 0,5 mol di H₂O? Esprimi in unità di 10²³ (N_A = 6,0·10²³).", answer: 9, tol: 0.2, unit: "×10²³", explain: "0,5 mol di molecole = 3,0·10²³ molecole, ognuna con 3 atomi: 9,0·10²³." },
    { type: "tf", q: "In 1 mol di Fe₂O₃ ci sono 3 mol di atomi di ossigeno.", answer: true, explain: "Il pedice 3 indica tre atomi di O per unità formula." },
    { type: "num", q: "Qual è la massa molare del composto se 0,2 mol hanno massa 12 g?", answer: 60, tol: 0.5, unit: "g/mol", explain: "M = m/n = 12/0,2 = 60 g/mol." }
  ]
});
