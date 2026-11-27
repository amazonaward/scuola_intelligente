QBANK("it", "l4-mat-numeri-complessi", {
  f: [
    { type: "num", q: "Quanto vale i²?", answer: -1, explain: "Per definizione, l'unità immaginaria soddisfa i² = −1." },
    { type: "mc", q: "Qual è la parte immaginaria di 4 − 7i?", options: ["−7", "4", "7i"], answer: 0, explain: "La parte immaginaria è il coefficiente reale di i, cioè −7." },
    { type: "tf", q: "Ogni numero reale è anche un numero complesso.", answer: true, explain: "Un reale a si scrive a + 0i." },
    { type: "mc", q: "Quanto vale (2 + 5i) − (1 + 2i)?", options: ["1 + 3i", "3 + 7i", "1 + 7i"], answer: 0, explain: "Si sottraggono parti reali (1) e immaginarie (3)." },
    { type: "text", q: "Come si chiama il numero a − bi rispetto ad a + bi?", answer: ["coniugato", "il coniugato", "complesso coniugato"], explain: "È il coniugato." }
  ],
  m: [
    { type: "mc", q: "Quanto vale (2 − i)(2 + i)?", options: ["5", "3", "4 − i"], answer: 0, explain: "(2 − i)(2 + i) = 4 − i² = 5: il prodotto per il coniugato dà il modulo al quadrato." },
    { type: "num", q: "Qual è il modulo di 3 − 4i?", answer: 5, explain: "√(9 + 16) = 5." },
    { type: "tf", q: "(1 + i)² = 2i.", answer: true, explain: "1 + 2i + i² = 2i." },
    { type: "mc", q: "Le soluzioni di x² + 2x + 2 = 0 sono…", options: ["−1 ± i", "1 ± i", "−2 ± i"], answer: 0, explain: "Δ = 4 − 8 = −4, x = (−2 ± 2i)/2 = −1 ± i." },
    { type: "num", q: "Quanto vale i¹⁰⁰? (parte reale)", answer: 1, explain: "100 è multiplo di 4, quindi i¹⁰⁰ = 1." }
  ],
  d: [
    { type: "mc", q: "Qual è l'argomento di z = −√3 + i (in [0, 2π))?", options: ["5π/6", "π/6", "2π/3"], answer: 0, explain: "r = 2, cos θ = −√3/2 e sen θ = 1/2: l'angolo è 5π/6." },
    { type: "num", q: "Quanto vale il modulo di (1 + i)¹⁰? (risposta intera)", answer: 32, explain: "|1 + i| = √2, quindi |(1 + i)¹⁰| = (√2)¹⁰ = 2⁵ = 32." },
    { type: "tf", q: "Le radici quarte di 1 sono 1, i, −1, −i.", answer: true, explain: "Hanno modulo 1 e argomenti 0, π/2, π, 3π/2: i vertici di un quadrato inscritto." },
    { type: "mc", q: "Quanto vale e^{iπ/2}?", options: ["i", "−1", "1"], answer: 0, explain: "cos π/2 + i sen π/2 = i." },
    { type: "num", q: "Qual è la somma delle tre radici cubiche di 8? (risposta reale)", answer: 0, explain: "2 + (−1 + √3 i) + (−1 − √3 i) = 0: la somma delle radici n-esime di un numero è sempre 0 per n ≥ 2." }
  ]
});
