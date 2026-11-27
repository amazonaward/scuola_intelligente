QBANK("it", "l3-fis-moto-rotatorio", {
  f: [
    { type: "mc", q: "Qual è l'unità di misura del momento di una forza?", options: ["N", "N·m", "kg·m²", "rad/s"], answer: 1, explain: "τ = F·b: newton per metro." },
    { type: "tf", q: "Una forza applicata esattamente sull'asse di rotazione non produce alcuna rotazione.", answer: true, explain: "Il braccio è nullo, quindi il momento è nullo." },
    { type: "num", q: "Una forza di 20 N agisce perpendicolarmente a 0,5 m dall'asse. Quanto vale il momento?", answer: 10, tol: 0, unit: "N·m", explain: "τ = 20 × 0,5 = 10 N·m." },
    { type: "mc", q: "Che cosa fa la pattinatrice per girare più velocemente?", options: ["Allarga le braccia", "Avvicina le braccia al corpo", "Spinge più forte sul ghiaccio", "Aumenta la sua massa"], answer: 1, explain: "Diminuisce I, e poiché L si conserva ω aumenta." },
    { type: "tf", q: "Il momento d'inerzia dipende da come la massa è distribuita rispetto all'asse.", answer: true, explain: "I = Σ m·r²: contano le distanze dall'asse." }
  ],
  m: [
    { type: "num", q: "Un corpo con I = 2 kg·m² ha α = 3 rad/s². Quanto vale il momento che agisce?", answer: 6, tol: 0, unit: "N·m", explain: "τ = I·α = 2 × 3 = 6 N·m." },
    { type: "num", q: "Due bambini sono sull'altalena: uno di 30 kg a 2 m dal fulcro. A che distanza deve sedersi uno di 20 kg per l'equilibrio?", answer: 3, tol: 0, unit: "m", explain: "30·2 = 20·d ⟹ d = 3 m." },
    { type: "num", q: "Un disco omogeneo di 6 kg e raggio 0,2 m ruota attorno al suo asse. Calcola il momento d'inerzia.", answer: 0.12, tol: 0.001, unit: "kg·m²", explain: "I = ½·6·0,04 = 0,12 kg·m²." },
    { type: "num", q: "Un corpo ha I = 0,5 kg·m² e ω = 8 rad/s. Quanto vale la sua energia cinetica di rotazione?", answer: 16, tol: 0, unit: "J", explain: "K = ½·I·ω² = ½·0,5·64 = 16 J." },
    { type: "mc", q: "Quando il momento risultante delle forze esterne è nullo, quale grandezza si conserva?", options: ["La velocità angolare", "Il momento d'inerzia", "Il momento angolare", "L'energia cinetica"], answer: 2, explain: "Se τ_ris = 0 allora L = I·ω resta costante." }
  ],
  d: [
    { type: "num", q: "Una sfera piena di 2 kg e raggio 0,1 m ruota attorno a un diametro. Calcola I.", answer: 0.008, tol: 0.0005, unit: "kg·m²", explain: "I = 2/5·M·R² = 0,4 × 2 × 0,01 = 0,008 kg·m²." },
    { type: "num", q: "Un'asta omogenea di 3 kg e lunghezza 2 m ruota attorno a un asse passante per un estremo, perpendicolare all'asta. Calcola I.", answer: 4, tol: 0.01, unit: "kg·m²", explain: "I = 1/3·M·L² = 1/3 × 3 × 4 = 4 kg·m²." },
    { type: "num", q: "Un disco di momento d'inerzia 1,0 kg·m² ruota a 4 rad/s. Su di esso cade e si incolla un anello che porta I totale a 2,0 kg·m². Qual è la nuova velocità angolare?", answer: 2, tol: 0, unit: "rad/s", explain: "Conservazione di L: 1,0·4 = 2,0·ω' ⟹ ω' = 2 rad/s." },
    { type: "tf", q: "Nella pirouette, quando la pattinatrice chiude le braccia, l'energia cinetica di rotazione aumenta.", answer: true, explain: "L è costante e ω cresce come 1/I, quindi K = L²/(2I) aumenta: il lavoro è compiuto dai muscoli." },
    { type: "mc", q: "Perché, su un piano inclinato, un anello scende più lentamente di una sfera piena (stessa massa e raggio)?", options: ["Ha più attrito", "Ha una massa maggiore", "Ha I maggiore e converte più energia in rotazione", "Parte da più in alto"], answer: 2, explain: "Per l'anello I/(MR²) = 1, per la sfera 2/5: più energia va in rotazione, meno in traslazione." }
  ]
});
