QBANK("it", "l3-fis-secondo-principio", {
  f: [
    { type: "mc", q: "Come si chiama il rapporto tra il lavoro prodotto e il calore assorbito da una macchina termica?", options: ["Entropia", "Rendimento", "Potenza", "Capacità termica"], answer: 1, explain: "η = W/Q_h." },
    { type: "tf", q: "Il calore passa spontaneamente da un corpo caldo a uno freddo.", answer: true, explain: "È il verso naturale dei processi spontanei." },
    { type: "num", q: "Un motore assorbe 1000 J e produce 250 J di lavoro. Calcola il rendimento.", answer: 0.25, tol: 0.001, unit: "", explain: "η = 250/1000 = 0,25." },
    { type: "mc", q: "Quale grandezza non può mai diminuire in un sistema isolato?", options: ["L'energia interna", "L'entropia", "La temperatura", "Il volume"], answer: 1, explain: "Secondo principio: ΔS ≥ 0." },
    { type: "mc", q: "Chi pubblicò nel 1824 le «Réflexions sur la puissance motrice du feu»?", options: ["Joule", "Clausius", "Sadi Carnot", "Boltzmann"], answer: 2, explain: "Sadi Carnot fondò la termodinamica con quell'opera." }
  ],
  m: [
    { type: "num", q: "Una macchina assorbe 800 J e cede 600 J alla sorgente fredda. Quanto vale il rendimento?", answer: 0.25, tol: 0.001, unit: "", explain: "W = 200 J; η = 200/800 = 0,25." },
    { type: "num", q: "Qual è il massimo rendimento di una macchina tra 450 K e 300 K?", answer: 0.333, tol: 0.002, unit: "", explain: "η = 1 − 300/450 = 1/3." },
    { type: "num", q: "Un corpo a 200 K assorbe reversibilmente 800 J. Calcola ΔS.", answer: 4, tol: 0.001, unit: "J/K", explain: "ΔS = 800/200 = 4 J/K." },
    { type: "tf", q: "Un frigorifero viola l'enunciato di Clausius perché sposta calore dal freddo al caldo.", answer: false, explain: "Lo fa spendendo lavoro: il passaggio non è l'«unico risultato»." },
    { type: "num", q: "Un frigorifero con COP = 4 sottrae 800 J. Quanto lavoro consuma?", answer: 200, tol: 0, unit: "J", explain: "W = Q_c/COP = 800/4 = 200 J." }
  ],
  d: [
    { type: "num", q: "Una centrale ha rendimento reale 40% e opera tra 900 K e 300 K. Quanto vale il suo rendimento in rapporto a quello di Carnot (in %, arrotonda)?", answer: 60, tol: 0.5, unit: "%", explain: "η_C = 1 − 300/900 = 0,667; 0,40/0,667 = 0,60." },
    { type: "num", q: "1000 J passano da un corpo a 500 K a uno a 250 K. Quanto vale ΔS totale?", answer: 2, tol: 0.001, unit: "J/K", explain: "ΔS = −1000/500 + 1000/250 = −2 + 4 = +2 J/K." },
    { type: "num", q: "Una macchina di Carnot tra 600 K e 300 K assorbe 1200 J dalla sorgente calda. Quanto lavoro produce?", answer: 600, tol: 0, unit: "J", explain: "η = 0,5; W = 0,5 × 1200 = 600 J." },
    { type: "tf", q: "In un ciclo di Carnot reversibile Q_c/Q_h = T_c/T_h.", answer: true, explain: "È la relazione che porta a η = 1 − T_c/T_h." },
    { type: "mc", q: "Che cosa dice S = k_B ln W?", options: ["L'energia è proporzionale al logaritmo del volume", "L'entropia misura il numero di microstati compatibili con lo stato macroscopico", "La temperatura è proporzionale a W", "Il calore è proporzionale a ln W"], answer: 1, explain: "È la formula di Boltzmann: più microstati, più entropia." }
  ]
});
