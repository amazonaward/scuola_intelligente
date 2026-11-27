QBANK("it", "l1-art-costruzioni-geometriche", {
 f: [
  { type: "mc", q: "Quali strumenti ammette la geometria euclidea classica per le costruzioni?", options: ["Riga non graduata e compasso", "Righello graduato e goniometro", "Solo le squadre"], answer: 0, explain: "Euclide ammette solo retta (riga) e circonferenza (compasso)." },
  { type: "num", q: "Quanti gradi misura la bisettrice di un angolo di 60° rispetto a ciascun lato?", answer: 30, tol: 0, unit: "°", explain: "60° : 2 = 30°." },
  { type: "tf", q: "Due rette perpendicolari alla stessa retta sono parallele tra loro.", answer: true, explain: "Formano angoli corrispondenti uguali (90°), quindi sono parallele." },
  { type: "mc", q: "Quanti lati ha un esagono?", options: ["5", "6", "8"], answer: 1, explain: "Esa- significa sei." },
  { type: "text", q: "Come si chiama la retta che tocca una circonferenza in un solo punto?", answer: ["tangente", "la tangente"], explain: "È la tangente, perpendicolare al raggio nel punto di contatto." }
 ],
 m: [
  { type: "mc", q: "Il lato di un quadrato inscritto in una circonferenza di raggio r vale…", options: ["r", "r√2", "2r"], answer: 1, explain: "La diagonale del quadrato è il diametro 2r, quindi il lato è 2r/√2 = r√2." },
  { type: "num", q: "Un esagono regolare è inscritto in una circonferenza di raggio 7 cm. Quanto misura il perimetro?", answer: 42, tol: 0, unit: "cm", explain: "Il lato è uguale al raggio: 6 × 7 = 42 cm." },
  { type: "mc", q: "Che figura è ACBD nella costruzione dell'asse, con AC = BC = AD = BD?", options: ["Un rombo", "Un trapezio", "Un rettangolo non quadrato"], answer: 0, explain: "Quattro lati uguali: è un rombo, con diagonali perpendicolari." },
  { type: "tf", q: "Con riga e compasso si può costruire il poligono regolare di 17 lati.", answer: true, explain: "Lo dimostrò Gauss nel 1796: 17 è un primo di Fermat." },
  { type: "order", q: "Ordina i passi per dividere AB in 3 parti uguali.", items: ["Traccia da A una semiretta", "Riporta 3 segmenti uguali sulla semiretta", "Congiungi l'ultimo punto con B", "Traccia le parallele dai punti 1 e 2"], explain: "È la costruzione basata sul teorema di Talete." }
 ],
 d: [
  { type: "mc", q: "Quale dei tre problemi NON si può risolvere con riga e compasso?", options: ["Bisecare un angolo", "Trisecare un angolo qualsiasi", "Costruire l'asse di un segmento"], answer: 1, explain: "La trisezione di un angolo qualsiasi è impossibile con soli riga e compasso." },
  { type: "num", q: "Un raccordo ha raggio 5 cm e unisce due rette perpendicolari. Quanto dista il centro dell'arco dal vertice dell'angolo? (arrotonda all'intero: 5√2)", answer: 7, tol: 0.1, unit: "cm", explain: "Il centro è a 5 cm da ciascuna retta: dista dal vertice 5√2 ≈ 7,07 cm." },
  { type: "tf", q: "In un raccordo esterno tra una retta e una circonferenza di raggio R, il centro dell'arco di raggio r dista R + r dal centro della circonferenza.", answer: true, explain: "Due circonferenze tangenti esternamente hanno i centri a distanza R + r." },
  { type: "mc", q: "Il rapporto tra diagonale e lato del pentagono regolare è…", options: ["√2", "φ = (1+√5)/2", "√3"], answer: 1, explain: "È il numero aureo, circa 1,618." },
  { type: "text", q: "Come si chiama l'insieme di tutti i punti che soddisfano una stessa proprietà geometrica (per esempio i punti equidistanti da due punti dati)?", answer: ["luogo geometrico", "il luogo geometrico", "luogo"], explain: "È un luogo geometrico: l'asse di un segmento è il luogo dei punti equidistanti dagli estremi." }
 ]
});
