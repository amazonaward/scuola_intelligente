QBANK("it", "l2-fis-lavoro-energia", {
  f: [
    { type: "text", q: "Come si chiama l'unità di misura dell'energia nel Sistema Internazionale?", answer: ["joule", "il joule", "j"], explain: "Il joule (J)." },
    { type: "num", q: "Una forza di 10 N sposta un oggetto di 3 m nella sua direzione. Quanto vale il lavoro?", answer: 30, tol: 0.1, unit: "J", explain: "L = 10 · 3 = 30 J." },
    { type: "tf", q: "Un corpo fermo ha energia cinetica nulla.", answer: true, explain: "Ec = ½mv² e v = 0." },
    { type: "mc", q: "Quale formula dà l'energia potenziale gravitazionale vicino alla Terra?", options: ["m·g·h", "½·m·v²", "F·s"], answer: 0, explain: "U = m·g·h." },
    { type: "num", q: "Una lampadina da 60 W resta accesa 10 s. Quanta energia consuma?", answer: 600, tol: 0.5, unit: "J", explain: "E = P·t = 60 · 10 = 600 J." }
  ],
  m: [
    { type: "num", q: "Calcola l'energia cinetica di un oggetto di 2 kg che si muove a 6 m/s.", answer: 36, tol: 0.1, unit: "J", explain: "Ec = ½ · 2 · 36 = 36 J." },
    { type: "num", q: "Quanta energia potenziale ha un libro di 0,5 kg sopra uno scaffale a 2 m (g = 10 m/s²)?", answer: 10, tol: 0.1, unit: "J", explain: "U = 0,5 · 10 · 2 = 10 J." },
    { type: "tf", q: "Se porti uno zaino a velocità costante lungo un tratto orizzontale, il lavoro del suo peso è nullo.", answer: true, explain: "Il peso è verticale, lo spostamento orizzontale: cos 90° = 0." },
    { type: "num", q: "Un motore da 2 kW lavora per 30 s. Quanto lavoro compie?", answer: 60000, tol: 10, unit: "J", explain: "L = P·t = 2000 · 30 = 60 000 J." },
    { type: "mc", q: "Una molla è compressa: che tipo di energia immagazzina?", options: ["Cinetica", "Potenziale elastica", "Nucleare", "Nessuna"], answer: 1, explain: "Energia potenziale elastica U = ½kx²." }
  ],
  d: [
    { type: "num", q: "Una cassa di 20 kg è trascinata per 6 m con una forza di 50 N inclinata di 60° rispetto allo spostamento. Calcola il lavoro della forza.", answer: 150, tol: 0.5, unit: "J", explain: "L = 50 · 6 · cos 60° = 300 · 0,5 = 150 J." },
    { type: "num", q: "Un'auto di 1000 kg frena da 30 m/s a 0 su 90 m. Calcola il modulo della forza frenante media.", answer: 5000, tol: 5, unit: "N", explain: "L = ΔEc = 0 − ½·1000·900 = −450 000 J; F = 450 000/90 = 5000 N." },
    { type: "num", q: "Una molla con k = 800 N/m è compressa di 0,05 m. Calcola l'energia immagazzinata.", answer: 1, tol: 0.01, unit: "J", explain: "U = ½ · 800 · 0,0025 = 1 J." },
    { type: "num", q: "Un sasso di 0,5 kg è lanciato verso l'alto a 20 m/s (g = 10 m/s², senza attrito). Quale quota massima raggiunge?", answer: 20, tol: 0.2, unit: "m", explain: "½mv² = mgh → h = v²/(2g) = 400/20 = 20 m." },
    { type: "tf", q: "Se un'auto raddoppia la velocità, lo spazio di frenata (con forza frenante costante) quadruplica.", answer: true, explain: "L = F·s = ΔEc ∝ v²: raddoppiando v, s diventa 4 volte più grande." }
  ]
});
