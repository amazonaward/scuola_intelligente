QBANK("it", "l5-fis-quantistica", {
  f: [
    { type: "mc", q: "Qual è la formula dell'energia di un fotone?", options: ["E = mc²", "E = hf", "E = ½mv²", "E = qV"], answer: 1, explain: "E = hf, con h costante di Planck." },
    { type: "tf", q: "Einstein ricevette il Nobel nel 1921 per la spiegazione dell'effetto fotoelettrico.", answer: true, explain: "Non per la relatività." },
    { type: "mc", q: "Come si chiama la costante h = 6,626·10⁻³⁴ J·s?", options: ["Costante di Boltzmann", "Costante di Planck", "Costante di Rydberg", "Costante di Avogadro"], answer: 1, explain: "È la costante di Planck." },
    { type: "tf", q: "Gli elettroni possono comportarsi come onde.", answer: true, explain: "Lo mostrano la diffrazione degli elettroni (Davisson-Germer) e l'ipotesi di de Broglie." },
    { type: "num", q: "Quanto vale l'energia (in eV) del livello fondamentale n = 1 dell'idrogeno?", answer: -13.6, tol: 0.05, unit: "eV", explain: "E₁ = −13,6 eV." }
  ],
  m: [
    { type: "num", q: "Un fotone di 400 nm ha energia (in eV, hc ≈ 1240 eV·nm):", answer: 3.1, tol: 0.05, unit: "eV", explain: "E = 1240/400 = 3,1 eV." },
    { type: "num", q: "Con W = 2,5 eV e fotoni da 4,0 eV, quanto vale il potenziale di arresto (in V)?", answer: 1.5, tol: 0.02, unit: "V", explain: "K_max = 4,0 − 2,5 = 1,5 eV ⟹ V₀ = 1,5 V." },
    { type: "mc", q: "Con luce di frequenza inferiore alla soglia, aumentando l'intensità:", options: ["Escono elettroni più veloci", "Esce un numero maggiore di elettroni", "Non esce nessun elettrone", "Esce un elettrone ogni tanto"], answer: 2, explain: "Nessun fotone ha energia sufficiente." },
    { type: "num", q: "Quanto vale la lunghezza d'onda del fotone emesso nel salto da n = 3 a n = 2 nell'idrogeno (in nm, circa)? (hc = 1240 eV·nm)", answer: 656, tol: 5, unit: "nm", explain: "ΔE = 13,6 × (1/4 − 1/9) = 1,89 eV; λ = 1240/1,89 ≈ 656 nm." },
    { type: "mc", q: "Raddoppiando la temperatura di un corpo nero, la potenza irradiata:", options: ["Raddoppia", "Quadruplica", "Aumenta di 16 volte", "Non cambia"], answer: 2, explain: "P ∝ T⁴: 2⁴ = 16." }
  ],
  d: [
    { type: "num", q: "Un metallo ha soglia λ₀ = 620 nm. Quanto vale W (in eV)?", answer: 2, tol: 0.02, unit: "eV", explain: "W = hc/λ₀ = 1240/620 = 2,0 eV." },
    { type: "num", q: "Il Sole ha T = 5800 K. Qual è λ_max in nm (Wien: 2,898·10⁻³ m·K)?", answer: 500, tol: 3, unit: "nm", explain: "λ = 2,898·10⁻³/5800 ≈ 5,0·10⁻⁷ m." },
    { type: "num", q: "Un elettrone è confinato in Δx = 1,0·10⁻¹⁰ m. Qual è il minimo Δp (in 10⁻²⁵ kg·m/s, con ħ = 1,055·10⁻³⁴)?", answer: 5.3, tol: 0.1, unit: "·10⁻²⁵ kg·m/s", explain: "Δp ≥ ħ/(2Δx) = 1,055·10⁻³⁴/(2·10⁻¹⁰) = 5,3·10⁻²⁵." },
    { type: "num", q: "Qual è l'ordine della lunghezza d'onda (in m, valore ·10⁻³⁴) di una palla di 0,060 kg a 30 m/s? (h = 6,63·10⁻³⁴)", answer: 3.7, tol: 0.1, unit: "·10⁻³⁴ m", explain: "λ = h/(mv) = 6,63·10⁻³⁴/1,8 ≈ 3,7·10⁻³⁴ m." },
    { type: "tf", q: "Nell'effetto Compton la lunghezza d'onda del fotone diffuso è maggiore di quella del fotone incidente.", answer: true, explain: "Il fotone cede energia all'elettrone, quindi λ' > λ." }
  ]
});
