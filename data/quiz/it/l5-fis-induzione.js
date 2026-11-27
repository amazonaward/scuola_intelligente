QBANK("it", "l5-fis-induzione", {
  f: [
    { type: "mc", q: "In quale unità si misura il flusso del campo magnetico?", options: ["Tesla", "Weber", "Henry", "Volt"], answer: 1, explain: "Il flusso si misura in weber (1 Wb = 1 T·m²)." },
    { type: "tf", q: "Un magnete fermo dentro una bobina fa scorrere una corrente indotta costante.", answer: false, explain: "Serve una variazione di flusso: con il magnete fermo il flusso è costante." },
    { type: "mc", q: "Chi scoprì l'induzione elettromagnetica nel 1831?", options: ["Oersted", "Faraday", "Ampère", "Volta"], answer: 1, explain: "Michael Faraday, a Londra (indipendentemente anche Joseph Henry)." },
    { type: "num", q: "Una spira di area 0,10 m² è perpendicolare a un campo di 0,30 T. Quanto vale il flusso (in Wb)?", answer: 0.03, tol: 0.001, unit: "Wb", explain: "Φ = B·A = 0,30 × 0,10 = 0,030 Wb." },
    { type: "tf", q: "Il trasformatore funziona solo con corrente alternata.", answer: true, explain: "Serve un flusso variabile nel tempo per indurre la f.e.m. nel secondario." }
  ],
  m: [
    { type: "num", q: "Il flusso in una bobina di 20 spire varia di 0,050 Wb (per spira) in 0,25 s. Quanto vale la f.e.m. media (in V)?", answer: 4, tol: 0.05, unit: "V", explain: "|ε| = N·ΔΦ/Δt = 20 × 0,050/0,25 = 4,0 V." },
    { type: "mc", q: "Avvicinando il polo nord di un magnete a una spira, la corrente indotta crea un campo che:", options: ["Attrae il magnete", "Respinge il magnete", "È sempre nullo", "Ha direzione perpendicolare"], answer: 1, explain: "Per la legge di Lenz si oppone all'aumento di flusso: respinge il magnete." },
    { type: "num", q: "Un trasformatore ha 200 spire al primario (230 V) e 20 al secondario. Quanto vale V₂ (in V)?", answer: 23, tol: 0.3, unit: "V", explain: "V₂ = 230 × 20/200 = 23 V." },
    { type: "num", q: "Un induttore da 0,20 H è percorso da 5,0 A. Quanta energia contiene (in J)?", answer: 2.5, tol: 0.05, unit: "J", explain: "U = ½LI² = 0,5 × 0,20 × 25 = 2,5 J." },
    { type: "mc", q: "Quale grandezza determina la frequenza della f.e.m. di un alternatore?", options: ["L'intensità di B", "Il numero di spire", "La velocità di rotazione", "La resistenza"], answer: 2, explain: "f = ω/2π." }
  ],
  d: [
    { type: "num", q: "Una barra lunga 0,60 m scorre a 5,0 m/s in un campo di 0,40 T su rotaie con R = 0,20 Ω. Quanto vale la corrente (in A)?", answer: 6, tol: 0.06, unit: "A", explain: "ε = BLv = 0,40 × 0,60 × 5,0 = 1,2 V; i = ε/R = 1,2/0,20 = 6,0 A." },
    { type: "num", q: "Con la barra della domanda precedente, quanto vale la forza frenante (in N)?", answer: 1.44, tol: 0.02, unit: "N", explain: "F = B·i·L = 0,40 × 6,0 × 0,60 = 1,44 N." },
    { type: "num", q: "Una linea con R = 5,0 Ω trasporta 2,0 MW a 200 kV. Quanta potenza dissipa (in kW)?", answer: 0.5, tol: 0.01, unit: "kW", explain: "I = P/V = 10 A; P_perdita = R·I² = 5,0 × 100 = 500 W = 0,50 kW." },
    { type: "num", q: "Una bobina di 100 spire e area 0,020 m² ruota a 50 Hz in un campo di 0,25 T. Quanto vale l'ampiezza della f.e.m. (in V, circa)?", answer: 157, tol: 2, unit: "V", explain: "ε₀ = N·B·A·ω = 100 × 0,25 × 0,020 × 314 ≈ 157 V." },
    { type: "tf", q: "Raddoppiando la velocità di rotazione di un alternatore, ampiezza e frequenza della tensione raddoppiano.", answer: true, explain: "ε₀ = NBAω e f = ω/2π sono entrambi proporzionali a ω." }
  ]
});
