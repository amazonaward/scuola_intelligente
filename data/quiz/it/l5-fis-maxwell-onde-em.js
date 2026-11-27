QBANK("it", "l5-fis-maxwell-onde-em", {
  f: [
    { type: "mc", q: "Chi scrisse le equazioni dell'elettromagnetismo classico?", options: ["Newton", "Maxwell", "Faraday", "Bohr"], answer: 1, explain: "James Clerk Maxwell (1861-1865)." },
    { type: "tf", q: "La luce visibile è un'onda elettromagnetica.", answer: true, explain: "Maxwell riconobbe la luce come onda e.m." },
    { type: "mc", q: "Quale radiazione si usa per le radiografie?", options: ["Raggi X", "Microonde", "Infrarossi", "Onde radio"], answer: 0, explain: "I raggi X attraversano i tessuti molli e sono assorbiti dalle ossa." },
    { type: "num", q: "Qual è la lunghezza d'onda (in m) di un'onda radio con frequenza 300 MHz?", answer: 1, tol: 0.01, unit: "m", explain: "λ = c/f = 3,0·10⁸/3,0·10⁸ = 1,0 m." },
    { type: "tf", q: "Le onde elettromagnetiche sono onde longitudinali.", answer: false, explain: "Sono trasversali: i campi E e B sono perpendicolari alla direzione di propagazione." }
  ],
  m: [
    { type: "num", q: "Quanto tempo impiega la luce per andare dalla Luna alla Terra (3,84·10⁸ m), in s?", answer: 1.28, tol: 0.02, unit: "s", explain: "t = 3,84·10⁸/3,00·10⁸ ≈ 1,28 s." },
    { type: "num", q: "Un'onda ha frequenza 6,0·10¹⁴ Hz. Quanto vale λ (in nm)?", answer: 500, tol: 5, unit: "nm", explain: "λ = c/f = 3,0·10⁸/6,0·10¹⁴ = 5,0·10⁻⁷ m." },
    { type: "mc", q: "Che cosa è la corrente di spostamento?", options: ["Moto di cariche nei fili", "Un campo E variabile che genera B", "Una corrente continua", "Il flusso di B"], answer: 1, explain: "È il termine ε₀ΔΦ(E)/Δt aggiunto da Maxwell." },
    { type: "num", q: "In un'onda e.m. E₀ = 600 V/m. Quanto vale B₀ (in µT)?", answer: 2, tol: 0.02, unit: "µT", explain: "B₀ = E₀/c = 600/3,0·10⁸ = 2,0·10⁻⁶ T." },
    { type: "mc", q: "Quale applicazione usa le microonde a 2,45 GHz?", options: ["Radiografie", "Forno a microonde", "Termocamera", "Radio AM"], answer: 1, explain: "Fa vibrare le molecole d'acqua." }
  ],
  d: [
    { type: "num", q: "Un'antenna trasmette a 900 MHz. Quanto vale λ (in cm, circa)?", answer: 33.3, tol: 0.5, unit: "cm", explain: "λ = 3,0·10⁸/9,0·10⁸ = 0,333 m." },
    { type: "num", q: "Quanto vale l'intensità (in W/m², circa) di un'onda con E₀ = 100 V/m? (I = ½ε₀cE₀²; ε₀ = 8,85·10⁻¹²)", answer: 13.3, tol: 0.3, unit: "W/m²", explain: "I = 0,5 × 8,85·10⁻¹² × 3,0·10⁸ × 10⁴ ≈ 13,3 W/m²." },
    { type: "tf", q: "Raddoppiando la frequenza di un'onda e.m. nel vuoto, la lunghezza d'onda si dimezza.", answer: true, explain: "c = λf è costante." },
    { type: "mc", q: "Perché la correzione di Maxwell alla legge di Ampère era necessaria?", options: ["Per includere i monopoli", "Per rendere coerente la legge con un condensatore che si carica", "Per spiegare l'effetto fotoelettrico", "Per definire il tesla"], answer: 1, explain: "Senza il termine di spostamento, la circuitazione di B dipendeva dalla superficie scelta." },
    { type: "num", q: "Un segnale radar a 10 GHz viene riflesso da un bersaglio e torna dopo 200 µs. Quanto dista il bersaglio (in km)?", answer: 30, tol: 0.3, unit: "km", explain: "d = c·t/2 = 3,0·10⁸ × 2,0·10⁻⁴/2 = 3,0·10⁴ m = 30 km." }
  ]
});
