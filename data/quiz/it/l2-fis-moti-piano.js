QBANK("it", "l2-fis-moti-piano", {
  f: [
    { type: "mc", q: "Come si chiama la curva descritta da un sasso lanciato in aria (senza attrito dell'aria)?", options: ["Retta", "Parabola", "Circonferenza"], answer: 1, explain: "La combinazione di moto uniforme orizzontale e moto accelerato verticale dà una parabola." },
    { type: "tf", q: "In un lancio, il moto orizzontale e quello verticale si possono studiare separatamente.", answer: true, explain: "È il principio di indipendenza dei moti di Galileo." },
    { type: "num", q: "Un punto compie un giro in 4 s. Quanto vale la frequenza?", answer: 0.25, tol: 0.01, unit: "Hz", explain: "f = 1/T = 1/4 = 0,25 Hz." },
    { type: "mc", q: "In che unità si misura la frequenza?", options: ["Secondi", "Hertz", "Metri al secondo"], answer: 1, explain: "1 Hz = 1 ciclo al secondo." },
    { type: "text", q: "Come si chiama il tempo impiegato per compiere un'oscillazione completa?", answer: ["periodo", "il periodo"], explain: "È il periodo T, misurato in secondi." }
  ],
  m: [
    { type: "num", q: "Un oggetto cade da una scogliera di 80 m lanciato orizzontalmente (g = 10 m/s²). Dopo quanto tempo tocca l'acqua?", answer: 4, tol: 0.05, unit: "s", explain: "t = √(2h/g) = √(160/10) = 4 s." },
    { type: "num", q: "Con la stessa caduta (4 s) e velocità orizzontale 15 m/s, quanto si sposta orizzontalmente il corpo?", answer: 60, tol: 0.5, unit: "m", explain: "x = vₓ·t = 15 · 4 = 60 m." },
    { type: "mc", q: "Quale coppia di angoli di lancio, a pari velocità, dà la stessa gittata?", options: ["30° e 60°", "30° e 45°", "10° e 20°", "45° e 90°"], answer: 0, explain: "Angoli complementari hanno lo stesso sen 2θ, quindi la stessa gittata." },
    { type: "num", q: "Una ruota di raggio 0,5 m gira con periodo 2 s. Calcola la velocità di un punto sul bordo (usa π = 3,14).", answer: 1.57, tol: 0.02, unit: "m/s", explain: "v = 2πr/T = 2 · 3,14 · 0,5 / 2 = 1,57 m/s." },
    { type: "mc", q: "Una pietra legata a una corda gira in cerchio. Se la corda si spezza, la pietra...", options: ["Va verso il centro", "Parte lungo la tangente", "Va radialmente verso l'esterno", "Cade subito"], answer: 1, explain: "Senza forza centripeta il corpo prosegue di moto rettilineo, lungo la direzione della velocità: la tangente." }
  ],
  d: [
    { type: "num", q: "Un pallone è calciato con v₀ = 10 m/s a 45° (g = 10 m/s²). Calcola la gittata.", answer: 10, tol: 0.1, unit: "m", explain: "G = v₀² sen 90°/g = 100/10 = 10 m." },
    { type: "num", q: "Un satellite orbita con raggio 7000 km e velocità 7,5 km/s. Calcola l'accelerazione centripeta in m/s² (arrotonda al decimo).", answer: 8.0, tol: 0.1, unit: "m/s²", explain: "a = v²/r = (7500)²/(7·10⁶) ≈ 8,0 m/s²: poco meno di g, perché la quota è bassa." },
    { type: "num", q: "Una molla con k = 400 N/m regge una massa di 1 kg. Calcola il periodo (π = 3,14).", answer: 0.31, tol: 0.01, unit: "s", explain: "T = 2π√(m/k) = 6,28 · √(1/400) = 6,28 · 0,05 = 0,314 s." },
    { type: "tf", q: "Se si quadruplica la lunghezza di un pendolo, il periodo raddoppia.", answer: true, explain: "T = 2π√(L/g): con L×4, T×√4 = 2." },
    { type: "mc", q: "Un oggetto si muove di moto armonico con ampiezza 0,2 m e pulsazione 5 rad/s. Qual è la sua velocità massima?", options: ["0,04 m/s", "1 m/s", "25 m/s", "0,4 m/s"], answer: 1, explain: "v_max = ω·A = 5 · 0,2 = 1 m/s, raggiunta al centro di oscillazione." }
  ]
});
