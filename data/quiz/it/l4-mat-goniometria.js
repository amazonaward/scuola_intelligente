QBANK("it", "l4-mat-goniometria", {
  f: [
    { type: "mc", q: "A quanti radianti corrisponde l'angolo piatto (180°)?", options: ["π", "2π", "π/2"], answer: 0, explain: "L'angolo piatto è mezzo giro: 180° = π rad." },
    { type: "num", q: "Quanto vale sen 90°?", answer: 1, explain: "Il punto sulla circonferenza goniometrica è (0; 1): l'ordinata vale 1." },
    { type: "tf", q: "cos 0° = 1.", answer: true, explain: "Il punto corrispondente a 0° è (1; 0): l'ascissa è 1." },
    { type: "mc", q: "Quanti radianti sono 60°?", options: ["π/6", "π/3", "π/4"], answer: 1, explain: "60 · π/180 = π/3." },
    { type: "text", q: "Come si chiama la circonferenza di raggio 1 e centro nell'origine usata per definire seno e coseno?", answer: ["goniometrica", "circonferenza goniometrica", "cerchio goniometrico"], explain: "È la circonferenza goniometrica." }
  ],
  m: [
    { type: "mc", q: "Quanto vale cos 120°?", options: ["1/2", "−1/2", "−√3/2"], answer: 1, explain: "cos(180° − 60°) = −cos 60° = −1/2." },
    { type: "num", q: "Un angolo al centro di 0,5 rad sottende su una circonferenza di raggio 8 cm un arco lungo quanti cm?", answer: 4, unit: "cm", explain: "l = α r = 0,5 · 8 = 4 cm." },
    { type: "tf", q: "La funzione y = cos x è pari.", answer: true, explain: "cos(−x) = cos x: il grafico è simmetrico rispetto all'asse y." },
    { type: "mc", q: "Se cos α = 3/5 e α è nel quarto quadrante, quanto vale sen α?", options: ["4/5", "−4/5", "−3/4"], answer: 1, explain: "|sen α| = √(1 − 9/25) = 4/5; nel IV quadrante il seno è negativo." },
    { type: "num", q: "Quanto vale tan 45° + tan 0°?", answer: 1, explain: "tan 45° = 1 e tan 0° = 0, quindi la somma è 1." }
  ],
  d: [
    { type: "mc", q: "Qual è l'ampiezza della funzione y = −4 sen(3x) + 1?", options: ["−4", "4", "3"], answer: 1, explain: "L'ampiezza è |A| = 4; il segno negativo ribalta il grafico, ma non cambia l'ampiezza." },
    { type: "num", q: "Quanto vale cos 2α se sen α = 1/2? (risposta decimale)", answer: 0.5, tol: 0.001, explain: "cos 2α = 1 − 2 sen²α = 1 − 2 · 1/4 = 1/2." },
    { type: "mc", q: "Quale espressione è uguale a sen(x + π/2)?", options: ["cos x", "−cos x", "sen x"], answer: 0, explain: "sen(x + π/2) = sen x cos(π/2) + cos x sen(π/2) = cos x." },
    { type: "tf", q: "L'area di un settore circolare di raggio 6 e angolo π/3 è 6π.", answer: true, explain: "A = ½ α r² = ½ · (π/3) · 36 = 6π." },
    { type: "num", q: "Qual è il periodo di y = tan(2x), in unità di π? (risposta decimale)", answer: 0.5, tol: 0.001, explain: "Il periodo della tangente è π; con ω = 2 diventa π/2, cioè 0,5 volte π." }
  ]
});
