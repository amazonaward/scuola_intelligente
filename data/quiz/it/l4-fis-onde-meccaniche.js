QBANK("it", "l4-fis-onde-meccaniche", {
  f: [
    { type: "mc", q: "In un'onda longitudinale il mezzo oscilla:", options: ["perpendicolarmente alla propagazione", "parallelamente alla propagazione", "in modo casuale", "solo in superficie"], answer: 1, explain: "Nelle onde longitudinali (come il suono) compressioni e rarefazioni avvengono lungo la direzione di propagazione." },
    { type: "tf", q: "Le onde meccaniche possono propagarsi nel vuoto.", answer: false, explain: "Servono un mezzo materiale elastico; nel vuoto si propagano solo le onde elettromagnetiche." },
    { type: "num", q: "Un'onda ha frequenza 10 Hz e lunghezza d'onda 3 m. Qual è la velocità?", answer: 30, tol: 0.01, unit: "m/s", explain: "v = λ·f = 3 × 10 = 30 m/s." },
    { type: "mc", q: "Come si chiama il punto di massimo spostamento verso l'alto di un'onda?", options: ["Ventre", "Cresta", "Nodo", "Fase"], answer: 1, explain: "Il punto più alto è la cresta; quello più basso è il ventre (o gola)." },
    { type: "num", q: "Un punto di una corda compie 4 oscillazioni al secondo. Qual è il periodo?", answer: 0.25, tol: 0.001, unit: "s", explain: "T = 1/f = 1/4 = 0,25 s." }
  ],
  m: [
    { type: "num", q: "Una corda ha tensione 400 N e densità lineare 0,01 kg/m. Qual è la velocità delle onde?", answer: 200, tol: 0.5, unit: "m/s", explain: "v = √(F/μ) = √(400/0,01) = √40 000 = 200 m/s." },
    { type: "mc", q: "Per un'onda che passa dall'aria all'acqua (dove è più veloce), quale grandezza NON cambia?", options: ["Velocità", "Lunghezza d'onda", "Frequenza", "L'ampiezza è sempre la stessa"], answer: 2, explain: "La frequenza è imposta dalla sorgente: non cambia (e con lei neppure il periodo). Cambiano v e λ." },
    { type: "tf", q: "Se la differenza di cammino tra due onde in fase è λ, nel punto di incontro l'interferenza è costruttiva.", answer: true, explain: "Δ = 1·λ = kλ con k = 1: le onde arrivano in fase e si rafforzano." },
    { type: "num", q: "Una corda lunga 1,2 m è fissata agli estremi e vibra nel modo n = 3. Quanto vale la lunghezza d'onda?", answer: 0.8, tol: 0.001, unit: "m", explain: "λ₃ = 2L/3 = 2 × 1,2 / 3 = 0,8 m." },
    { type: "mc", q: "Perché una nota si abbassa di un'ottava se si raddoppia la lunghezza vibrante di una corda (a parità di tensione)?", options: ["Perché f ∝ 1/L", "Perché f ∝ L", "Perché cambia l'ampiezza", "Perché cambia la massa"], answer: 0, explain: "f₁ = v/(2L): raddoppiando L la frequenza si dimezza, cioè scende di un'ottava." }
  ],
  d: [
    { type: "num", q: "Due sorgenti in fase emettono onde con λ = 0,5 m. Un punto dista 3,0 m dalla prima e 4,25 m dalla seconda. Quante lunghezze d'onda vale la differenza di cammino?", answer: 2.5, tol: 0.001, unit: "λ", explain: "Δ = 4,25 − 3,0 = 1,25 m; Δ/λ = 1,25/0,5 = 2,5: interferenza distruttiva." },
    { type: "mc", q: "Una corda con fondamentale f₁ viene accorciata a metà e la sua tensione quadruplicata. La nuova fondamentale è:", options: ["f₁", "2f₁", "4f₁", "8f₁"], answer: 2, explain: "f ∝ (1/L)·√F: L dimezzata dà fattore 2, F×4 dà fattore √4 = 2. Totale 2 × 2 = 4." },
    { type: "tf", q: "Un'onda sinusoidale con ampiezza doppia trasporta energia doppia.", answer: false, explain: "L'energia trasportata è proporzionale al quadrato dell'ampiezza: con A doppia diventa quattro volte più grande." },
    { type: "num", q: "In acque basse un'onda di tsunami avanza con v = √(g·h). Con h = 1000 m e g = 9,8 m/s², quanto vale v (circa)?", answer: 99, tol: 2, unit: "m/s", explain: "v = √(9,8 × 1000) = √9800 ≈ 99 m/s ≈ 356 km/h." },
    { type: "mc", q: "Una corda fissata a entrambi gli estremi ha armoniche a 180 Hz e 240 Hz consecutive. Quanto vale la fondamentale?", options: ["30 Hz", "60 Hz", "90 Hz", "120 Hz"], answer: 1, explain: "Armoniche consecutive differiscono di f₁: 240 − 180 = 60 Hz. Infatti 180 = 3·60 e 240 = 4·60." }
  ]
});
