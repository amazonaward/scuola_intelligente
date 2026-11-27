QBANK("it", "l4-fis-corrente-circuiti", {
  f: [
    { type: "mc", q: "In quale unità si misura la resistenza elettrica?", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: 2, explain: "1 Ω = 1 V/A." },
    { type: "tf", q: "Il verso convenzionale della corrente è quello in cui si muoverebbero le cariche positive.", answer: true, explain: "Così è stato definito prima che si conoscesse l'elettrone." },
    { type: "num", q: "Un resistore da 10 Ω è attraversato da 2 A. Quanto vale la tensione ai suoi capi (in V)?", answer: 20, tol: 0.01, unit: "V", explain: "ΔV = R·i = 10 × 2 = 20 V." },
    { type: "num", q: "Due resistori da 5 Ω e 15 Ω sono in serie. Qual è la resistenza equivalente (in Ω)?", answer: 20, tol: 0.01, unit: "Ω", explain: "In serie si sommano: 5 + 15 = 20 Ω." },
    { type: "mc", q: "Come sono collegate le prese di una casa?", options: ["In serie", "In parallelo", "Alternativamente in serie", "Non sono collegate"], answer: 1, explain: "In parallelo: ogni apparecchio riceve la stessa tensione e funziona indipendentemente dagli altri." }
  ],
  m: [
    { type: "num", q: "Una lampadina da 60 W è alimentata a 230 V. Quanta corrente assorbe (in mA)?", answer: 261, tol: 2, unit: "mA", explain: "i = P/ΔV = 60/230 ≈ 0,261 A = 261 mA." },
    { type: "num", q: "Un resistore da 100 Ω è percorso da 0,3 A per 10 s. Quanto calore sviluppa (in J)?", answer: 90, tol: 0.5, unit: "J", explain: "Q = R·i²·t = 100 × 0,09 × 10 = 90 J." },
    { type: "num", q: "Due resistori da 6 Ω e 12 Ω in parallelo: qual è la resistenza equivalente (in Ω)?", answer: 4, tol: 0.01, unit: "Ω", explain: "R = (6 × 12)/(18) = 4 Ω." },
    { type: "mc", q: "Se la lunghezza di un filo raddoppia e la sezione raddoppia, la resistenza:", options: ["raddoppia", "si dimezza", "non cambia", "quadruplica"], answer: 2, explain: "R = ρl/S: i due fattori 2 si compensano." },
    { type: "tf", q: "Un voltmetro ideale deve avere resistenza molto grande e si collega in parallelo.", answer: true, explain: "Così assorbe una corrente trascurabile e misura la d.d.p. senza alterarla." }
  ],
  d: [
    { type: "num", q: "Una batteria con ε = 9 V e resistenza interna 1 Ω alimenta un carico di 8 Ω. Quale tensione c'è ai morsetti (in V)?", answer: 8, tol: 0.05, unit: "V", explain: "i = 9/9 = 1 A; ΔV = ε − r·i = 9 − 1 = 8 V (= 8 Ω × 1 A)." },
    { type: "num", q: "In un nodo entrano 3 A e 5 A, ed escono 2 A e una corrente i₃. Quanto vale i₃ (in A)?", answer: 6, tol: 0.01, unit: "A", explain: "Entranti 8 A = uscenti 2 + i₃ ⟹ i₃ = 6 A." },
    { type: "num", q: "Una stufa da 1500 W resta accesa 3 ore. Costo a 0,30 €/kWh (in €)?", answer: 1.35, tol: 0.01, unit: "€", explain: "E = 1,5 kW × 3 h = 4,5 kWh; costo = 4,5 × 0,30 = 1,35 €." },
    { type: "num", q: "Un cavo ha resistenza 4 Ω e trasporta 50 A. Quanta potenza dissipa per effetto Joule (in kW)?", answer: 10, tol: 0.1, unit: "kW", explain: "P = R·i² = 4 × 2500 = 10 000 W = 10 kW." },
    { type: "mc", q: "Un resistore R₁ = 6 Ω in parallelo a R₂ = 3 Ω è in serie a R₃ = 4 Ω; il tutto a 12 V. Quanta corrente passa in R₃?", options: ["1 A", "2 A", "3 A", "6 A"], answer: 1, explain: "R_eq = 4 + 2 = 6 Ω; i = 12/6 = 2 A, che attraversa R₃." }
  ]
});
