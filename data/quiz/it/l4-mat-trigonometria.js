QBANK("it", "l4-mat-trigonometria", {
  f: [
    { type: "mc", q: "In un triangolo rettangolo, a quale rapporto corrisponde il seno di un angolo acuto?", options: ["cateto opposto / ipotenusa", "cateto adiacente / ipotenusa", "cateto opposto / cateto adiacente"], answer: 0, explain: "Il seno è il rapporto tra il cateto opposto all'angolo e l'ipotenusa." },
    { type: "num", q: "In un triangolo rettangolo isoscele i cateti misurano 5. Quanto vale la tangente di un angolo acuto?", answer: 1, explain: "tan 45° = 5/5 = 1." },
    { type: "tf", q: "In un triangolo rettangolo la somma dei due angoli acuti è 90°.", answer: true, explain: "La somma degli angoli è 180° e uno è 90°." },
    { type: "num", q: "Un triangolo rettangolo ha ipotenusa 10 e un angolo di 30°. Quanto misura il cateto opposto a 30°?", answer: 5, explain: "10 · sen 30° = 5." },
    { type: "text", q: "Come si chiama il lato opposto all'angolo retto?", answer: ["ipotenusa", "l'ipotenusa"], explain: "Il lato opposto all'angolo retto è l'ipotenusa." }
  ],
  m: [
    { type: "mc", q: "Un cateto è lungo 6 e l'angolo opposto è 30°. Quanto misura l'ipotenusa?", options: ["12", "6√3", "3"], answer: 0, explain: "c = a / sen 30° = 6 / (1/2) = 12." },
    { type: "num", q: "Un lampione alto 4 m getta un'ombra di 4√3 m. Quanti gradi misura l'angolo del Sole sull'orizzonte?", answer: 30, unit: "°", explain: "tan α = 4/(4√3) = 1/√3, quindi α = 30°." },
    { type: "tf", q: "Il teorema dei seni afferma che a/sen α = b/sen β = c/sen γ.", answer: true, explain: "In ogni triangolo i lati sono proporzionali ai seni degli angoli opposti." },
    { type: "num", q: "In un triangolo b = 4, c = 6 e α = 60°. Quanto vale a²?", answer: 28, explain: "a² = 16 + 36 − 2 · 4 · 6 · 1/2 = 52 − 24 = 28." },
    { type: "num", q: "Qual è l'area (in cm²) di un triangolo con due lati di 6 cm e 8 cm e angolo compreso di 90°?", answer: 24, unit: "cm²", explain: "S = ½ · 6 · 8 · sen 90° = 24." }
  ],
  d: [
    { type: "mc", q: "Un triangolo ha a = 2, b = 3, c = 4. L'angolo γ è…", options: ["ottuso", "acuto", "retto"], answer: 0, explain: "c² = 16 &gt; a² + b² = 13: il coseno di γ è negativo, quindi γ è ottuso." },
    { type: "num", q: "In un triangolo a = 12 e α = 30°. Quanto vale il raggio R della circonferenza circoscritta?", answer: 12, explain: "2R = a/sen α = 12/(1/2) = 24, quindi R = 12." },
    { type: "tf", q: "Con a = 5, b = 8, α = 30° esistono due triangoli diversi.", answer: true, explain: "sen β = 8 · 0,5/5 = 0,8: β ≈ 53,1° oppure ≈ 126,9°, entrambi compatibili con α + β &lt; 180°." },
    { type: "num", q: "Due forze di 5 N e 12 N sono perpendicolari. Quanto vale la risultante, in newton?", answer: 13, unit: "N", explain: "Pitagora (caso particolare di Carnot): √(25 + 144) = 13." },
    { type: "mc", q: "Con i lati 5, 6 e 12 si può costruire un triangolo?", options: ["No, perché 5 + 6 &lt; 12", "Sì, sempre", "Sì, ma solo ottusangolo"], answer: 0, explain: "La somma dei due lati minori (11) deve superare il lato maggiore (12): non succede, quindi il triangolo non esiste." }
  ]
});
