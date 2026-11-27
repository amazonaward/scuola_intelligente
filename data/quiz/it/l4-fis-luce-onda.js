QBANK("it", "l4-fis-luce-onda", {
  f: [
    { type: "mc", q: "Chi propose per primo un modello ondulatorio della luce, nel Seicento?", options: ["Newton", "Huygens", "Maxwell", "Einstein"], answer: 1, explain: "Christiaan Huygens (1678-1690); Newton sostenne invece il modello corpuscolare." },
    { type: "tf", q: "La luce visibile è un'onda elettromagnetica.", answer: true, explain: "Maxwell (1865) riconobbe nella luce un'onda elettromagnetica." },
    { type: "mc", q: "Quale fenomeno mostra in modo decisivo che la luce si comporta come un'onda?", options: ["La riflessione su uno specchio", "L'interferenza (frange chiare e scure)", "La propagazione rettilinea", "L'ombra di un oggetto"], answer: 1, explain: "Riflessione e ombre si spiegano anche con corpuscoli; l'interferenza no." },
    { type: "num", q: "A quale valore approssimato vale la velocità della luce nel vuoto (in 10⁸ m/s)?", answer: 3, tol: 0.05, unit: "·10⁸ m/s", explain: "c ≈ 3,00·10⁸ m/s." },
    { type: "tf", q: "Il colore della luce dipende dalla sua frequenza.", answer: true, explain: "La frequenza è fissata dalla sorgente e non cambia quando la luce cambia mezzo: il colore resta lo stesso." }
  ],
  m: [
    { type: "num", q: "Luce con λ = 480 nm attraversa due fenditure con d = 0,2 mm; lo schermo è a 1,5 m. Quanto vale l'interfrangia (in mm)?", answer: 3.6, tol: 0.05, unit: "mm", explain: "Δy = λL/d = 480·10⁻⁹ × 1,5/(2·10⁻⁴) = 3,6·10⁻³ m = 3,6 mm." },
    { type: "mc", q: "Un fascio di luce entra nel vetro (n = 1,5). Che cosa succede alla frequenza?", options: ["Aumenta di 1,5 volte", "Diminuisce di 1,5 volte", "Non cambia", "Diventa nulla"], answer: 2, explain: "La frequenza è imposta dalla sorgente: cambiano v e λ, non f." },
    { type: "num", q: "Un reticolo ha 250 righe/mm. Quanto vale il passo (in µm)?", answer: 4, tol: 0.02, unit: "µm", explain: "d = 1 mm/250 = 4·10⁻³ mm = 4 µm." },
    { type: "tf", q: "Due lampadine comuni non producono frange di interferenza perché non sono sorgenti coerenti.", answer: true, explain: "La fase relativa tra le due sorgenti fluttua rapidamente: la figura di interferenza si «lava» e rimane una luce uniforme." },
    { type: "num", q: "Luce di intensità I₀ polarizzata attraversa un polarizzatore ruotato di 60° rispetto alla sua polarizzazione. Che frazione di I₀ esce?", answer: 0.25, tol: 0.01, unit: "I₀", explain: "Legge di Malus: I/I₀ = cos²60° = (0,5)² = 0,25." }
  ],
  d: [
    { type: "num", q: "In un esperimento di Young la frangia chiara di terzo ordine è a 18 mm dal centro, con L = 2,0 m e d = 0,20 mm. Qual è λ (in nm)?", answer: 600, tol: 6, unit: "nm", explain: "y₃ = 3λL/d ⟹ λ = y₃·d/(3L) = 18·10⁻³ × 2,0·10⁻⁴/(6,0) = 6,0·10⁻⁷ m = 600 nm." },
    { type: "mc", q: "Un reticolo ha d = 1,6 µm e viene illuminato con luce di 550 nm. Qual è il massimo ordine osservabile?", options: ["1", "2", "3", "4"], answer: 1, explain: "m ≤ d/λ = 1600/550 = 2,9, quindi m massimo = 2." },
    { type: "num", q: "Luce di λ = 500 nm incide su una fenditura larga 0,25 mm. A quale angolo (in milliradianti) si trova il primo minimo?", answer: 2, tol: 0.05, unit: "mrad", explain: "sen θ = λ/a = 5·10⁻⁷/2,5·10⁻⁴ = 2,0·10⁻³: θ ≈ 2 mrad." },
    { type: "num", q: "Uno strato antiriflesso con n = 1,25 deve eliminare la riflessione di luce di λ = 600 nm. Quale spessore minimo (in nm) serve, con t = λ/(4n)?", answer: 120, tol: 1, unit: "nm", explain: "t = 600/(4 × 1,25) = 120 nm." },
    { type: "tf", q: "Se una macchia d'olio sull'acqua appare colorata, è perché l'olio assorbe alcuni colori e li trasforma in calore.", answer: false, explain: "I colori derivano dall'interferenza tra la luce riflessa dalle due facce della pellicola sottile; lo spessore e l'angolo determinano il colore." }
  ]
});
