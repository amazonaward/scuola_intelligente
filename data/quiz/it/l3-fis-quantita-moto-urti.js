QBANK("it", "l3-fis-quantita-moto-urti", {
  f: [
    { type: "num", q: "Calcola la quantità di moto di un corpo di 3 kg che si muove a 4 m/s.", answer: 12, tol: 0, unit: "kg·m/s", explain: "p = m·v = 3 × 4 = 12 kg·m/s." },
    { type: "tf", q: "La quantità di moto è una grandezza vettoriale.", answer: true, explain: "Ha la direzione e il verso della velocità." },
    { type: "mc", q: "Quale formula esprime l'impulso di una forza costante?", options: ["F·Δt", "F/Δt", "F·Δx", "m·a"], answer: 0, explain: "J = F·Δt, in N·s." },
    { type: "mc", q: "In un urto completamente anelastico, dopo l'urto i corpi:", options: ["si fermano sempre", "restano uniti", "rimbalzano con la stessa velocità", "si respingono"], answer: 1, explain: "Per definizione i corpi restano attaccati e si muovono con la stessa velocità." },
    { type: "tf", q: "In un sistema isolato la quantità di moto totale si conserva.", answer: true, explain: "È il principio di conservazione della quantità di moto." }
  ],
  m: [
    { type: "num", q: "Una forza costante di 40 N agisce per 0,5 s su un corpo. Quanto vale la variazione di quantità di moto?", answer: 20, tol: 0, unit: "kg·m/s", explain: "Δp = J = F·Δt = 40 × 0,5 = 20 kg·m/s." },
    { type: "num", q: "Un vagone di 3000 kg a 4 m/s si aggancia a un vagone fermo di 1000 kg. Qual è la velocità finale?", answer: 3, tol: 0, unit: "m/s", explain: "V = (3000·4)/4000 = 3 m/s." },
    { type: "mc", q: "Perché una macchina con zone a deformazione programmata è più sicura?", options: ["Ha meno massa", "Allunga il tempo dell'urto e riduce la forza sui passeggeri", "Riduce la quantità di moto dei passeggeri", "Aumenta l'impulso"], answer: 1, explain: "A parità di Δp, un Δt più lungo comporta una forza media minore." },
    { type: "tf", q: "In un urto elastico si conserva l'energia cinetica totale.", answer: true, explain: "È proprio la caratteristica che distingue l'urto elastico." },
    { type: "num", q: "Un pattinatore di 50 kg lancia un pacco di 5 kg a 4 m/s mentre è fermo sul ghiaccio. Con che velocità (modulo) rincula?", answer: 0.4, tol: 0.01, unit: "m/s", explain: "5·4 = 50·V ⟹ V = 0,4 m/s." }
  ],
  d: [
    { type: "num", q: "Una palla di 3 kg a 5 m/s urta in modo elastico una palla ferma di 3 kg. Quanto vale la velocità della seconda palla dopo l'urto?", answer: 5, tol: 0, unit: "m/s", explain: "Masse uguali: si scambiano le velocità, quindi v'2 = 5 m/s e v'1 = 0." },
    { type: "num", q: "Un blocco di 1 kg a 8 m/s urta elasticamente un blocco fermo di 3 kg. Quanto vale la velocità finale del blocco da 1 kg (con segno)?", answer: -4, tol: 0.01, unit: "m/s", explain: "v'1 = (1−3)·8/(1+3) = −16/4 = −4 m/s: rimbalza indietro." },
    { type: "num", q: "Un proiettile di 20 g si conficca in un blocco fermo di 1,98 kg appeso a un filo; subito dopo il sistema ha velocità 2 m/s. Qual era la velocità del proiettile?", answer: 200, tol: 0.5, unit: "m/s", explain: "m·v = (m+M)·V ⟹ v = 2,00 × 2/0,020 = 200 m/s." },
    { type: "num", q: "Un vagone di 20 000 kg a 3 m/s si aggancia a uno fermo di 10 000 kg. Quanta energia cinetica viene dissipata?", answer: 30000, tol: 10, unit: "J", explain: "Prima: 90 000 J; dopo (V = 2 m/s): ½·30 000·4 = 60 000 J; dissipati 30 000 J." },
    { type: "mc", q: "Un'esplosione divide un corpo inizialmente fermo in due frammenti, uno di massa m e uno di massa 3m. Che rapporto hanno le loro velocità (in modulo)?", options: ["Il frammento m va 3 volte più veloce", "Il frammento 3m va 3 volte più veloce", "Hanno la stessa velocità", "Il frammento m va 9 volte più veloce"], answer: 0, explain: "La quantità di moto totale resta zero: m·v1 = 3m·v2, quindi v1 = 3·v2." }
  ]
});
