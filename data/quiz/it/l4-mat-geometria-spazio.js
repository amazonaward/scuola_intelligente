QBANK("it", "l4-mat-geometria-spazio", {
  f: [
    { type: "num", q: "Quanto vale il volume di un cubo di spigolo 4?", answer: 64, explain: "V = 4³ = 64." },
    { type: "mc", q: "Quante facce ha un cubo?", options: ["6", "8", "12"], answer: 0, explain: "Il cubo ha 6 facce, 8 vertici e 12 spigoli." },
    { type: "tf", q: "Per tre punti non allineati passa un solo piano.", answer: true, explain: "È uno dei postulati dello spazio." },
    { type: "num", q: "Qual è il volume di un parallelepipedo rettangolo di spigoli 2, 3 e 5?", answer: 30, explain: "V = 2 · 3 · 5 = 30." },
    { type: "text", q: "Come si chiamano due rette dello spazio che non si incontrano e non sono parallele?", answer: ["sghembe", "rette sghembe"], explain: "Sono rette sghembe." }
  ],
  m: [
    { type: "mc", q: "Il volume di una piramide con base di area 12 e altezza 5 è…", options: ["20", "60", "30"], answer: 0, explain: "V = ⅓ · 12 · 5 = 20." },
    { type: "mc", q: "Un cilindro ha raggio 3 e altezza 7. La superficie laterale è…", options: ["42π", "21π", "63π"], answer: 0, explain: "S_l = 2πrh = 2π · 3 · 7 = 42π." },
    { type: "tf", q: "Un tetraedro ha 4 vertici, 6 spigoli e 4 facce.", answer: true, explain: "4 − 6 + 4 = 2: la formula di Eulero è rispettata." },
    { type: "num", q: "Qual è l'area della superficie di una sfera di raggio 5? (in unità di π)", answer: 100, explain: "S = 4π · 25 = 100π." },
    { type: "num", q: "Un cono ha raggio 5 e altezza 12. Quanto vale l'apotema?", answer: 13, explain: "a = √(25 + 144) = 13." }
  ],
  d: [
    { type: "mc", q: "Un cubo ha diagonale 6√3. Quanto vale il suo volume?", options: ["216", "108", "36"], answer: 0, explain: "d = l√3 = 6√3 → l = 6 → V = 216." },
    { type: "num", q: "Di quanti litri è la capacità di una sfera cava di raggio 3 dm? (in unità di π)", answer: 36, explain: "V = 4/3 π · 27 = 36π dm³ = 36π litri." },
    { type: "tf", q: "Se si raddoppia il raggio di una sfera, il volume diventa 8 volte più grande.", answer: true, explain: "V è proporzionale a r³: 2³ = 8." },
    { type: "mc", q: "Un triangolo rettangolo con cateti 3 e 4 ruota attorno al cateto 4. Il volume del cono è…", options: ["12π", "16π", "48π"], answer: 0, explain: "r = 3, h = 4: V = ⅓ π · 9 · 4 = 12π." },
    { type: "num", q: "Un poliedro convesso ha 20 spigoli e 12 vertici. Quante facce ha?", answer: 10, explain: "12 − 20 + F = 2 → F = 10." }
  ]
});
