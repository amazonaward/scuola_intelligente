QBANK("it", "l3-fis-fluidodinamica", {
  f: [
    { type: "mc", q: "Che cosa misura la portata di un tubo?", options: ["La massa del tubo", "Il volume di fluido che passa nell'unità di tempo", "La pressione del fluido", "La temperatura del fluido"], answer: 1, explain: "Q = ΔV/Δt = A·v." },
    { type: "tf", q: "Se un tubo si restringe, il fluido al suo interno accelera.", answer: true, explain: "A·v è costante: area minore, velocità maggiore." },
    { type: "num", q: "Un tubo ha sezione 0,02 m² e l'acqua scorre a 3 m/s. Calcola la portata in m³/s.", answer: 0.06, tol: 0.001, unit: "m³/s", explain: "Q = 0,02 × 3 = 0,06 m³/s." },
    { type: "mc", q: "Come si chiama il fluido ipotetico incomprimibile, non viscoso, in moto stazionario?", options: ["Fluido reale", "Fluido ideale", "Fluido newtoniano", "Fluido turbolento"], answer: 1, explain: "È il modello usato per il teorema di Bernoulli." },
    { type: "mc", q: "Quale dei seguenti fluidi è il più viscoso?", options: ["Aria", "Acqua", "Miele", "Alcol"], answer: 2, explain: "Il miele ha una viscosità di circa 10 Pa·s, enormemente maggiore di quella dell'acqua." }
  ],
  m: [
    { type: "num", q: "Un tubo da 6 cm² di sezione si restringe a 2 cm². Se la velocità nel tratto largo è 2 m/s, qual è nel tratto stretto?", answer: 6, tol: 0.01, unit: "m/s", explain: "v2 = A1·v1/A2 = 6·2/2 = 6 m/s." },
    { type: "num", q: "Un foro è a 0,8 m sotto il pelo libero di un serbatoio. Con g = 10 m/s², con che velocità esce l'acqua?", answer: 4, tol: 0.01, unit: "m/s", explain: "v = √(2gh) = √16 = 4 m/s." },
    { type: "tf", q: "Il teorema di Bernoulli dice che dove la velocità è maggiore, a quota costante, la pressione è minore.", answer: true, explain: "p + ½ρv² = costante a quota costante." },
    { type: "num", q: "Un tubo orizzontale ha acqua a 2 m/s in un tratto e a 4 m/s in un altro. Qual è la differenza di pressione (ρ = 1000 kg/m³)?", answer: 6000, tol: 1, unit: "Pa", explain: "Δp = ½·1000·(16 − 4) = 6000 Pa." },
    { type: "mc", q: "Quale legge spiega la dipendenza dalla quarta potenza del raggio nel flusso viscoso in un tubo?", options: ["Stevino", "Poiseuille", "Torricelli", "Archimede"], answer: 1, explain: "Q = πr⁴Δp/(8ηL)." }
  ],
  d: [
    { type: "num", q: "Un'arteria si restringe e il suo raggio diventa metà. A pari Δp, quante volte diminuisce la portata (legge di Poiseuille)?", answer: 16, tol: 0, unit: "volte", explain: "Q ∝ r⁴: (1/2)⁴ = 1/16." },
    { type: "num", q: "Acqua (ρ = 1000 kg/m³) scorre in un tubo di diametro 5 cm con v = 2 m/s e η = 10⁻³ Pa·s. Calcola il numero di Reynolds.", answer: 100000, tol: 1, unit: "", explain: "Re = ρvd/η = 1000·2·0,05/10⁻³ = 10⁵: moto turbolento." },
    { type: "num", q: "Un serbatoio largo ha a 2 m di profondità un foro di area 4 cm². Con g = 9,8 m/s², quale portata esce? (in L/s, arrotonda al decimo)", answer: 2.5, tol: 0.1, unit: "L/s", explain: "v = √(2·9,8·2) ≈ 6,26 m/s; Q = 4·10⁻⁴ × 6,26 ≈ 2,5·10⁻³ m³/s = 2,5 L/s." },
    { type: "tf", q: "Due navi che viaggiano parallele e vicine tendono ad avvicinarsi a causa della bassa pressione nello spazio tra loro.", answer: true, explain: "L'acqua tra le navi è più veloce e a pressione minore: la pressione esterna spinge le navi l'una verso l'altra." },
    { type: "mc", q: "Perché l'ala di un aereo ha portanza?", options: ["Perché l'aria sopra è più lenta", "Perché la pressione sopra è minore di quella sotto, e l'ala devia l'aria verso il basso", "Perché l'aria sotto è più veloce", "Perché l'aereo è più leggero dell'aria"], answer: 1, explain: "Sopra l'ala il flusso è più veloce, la pressione è minore; inoltre l'ala devia l'aria verso il basso e per reazione è spinta verso l'alto." }
  ]
});
