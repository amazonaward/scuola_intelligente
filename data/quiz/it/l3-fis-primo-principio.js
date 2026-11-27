QBANK("it", "l3-fis-primo-principio", {
  f: [
    { type: "mc", q: "Che cosa afferma il primo principio della termodinamica?", options: ["Il calore va dal caldo al freddo", "L'energia si conserva (ΔU = Q − W)", "L'entropia aumenta sempre", "La temperatura non può scendere sotto 0 K"], answer: 1, explain: "È la conservazione dell'energia per i sistemi termodinamici." },
    { type: "num", q: "Un gas riceve 100 J di calore e non compie lavoro. Di quanto aumenta U?", answer: 100, tol: 0, unit: "J", explain: "ΔU = Q − W = 100 − 0 = 100 J." },
    { type: "tf", q: "Il lavoro compiuto da un gas che si espande a pressione costante è W = p·ΔV.", answer: true, explain: "È l'area del rettangolo sotto l'isobara nel piano (V, p)." },
    { type: "mc", q: "Quanto vale, nell'equivalente meccanico della caloria, 1 cal in joule?", options: ["0,24 J", "1 J", "4,186 J", "100 J"], answer: 2, explain: "1 cal = 4,186 J (Joule)." },
    { type: "mc", q: "In quale trasformazione il volume è costante?", options: ["Isoterma", "Isobara", "Isocora", "Adiabatica"], answer: 2, explain: "Isocora = a volume costante." }
  ],
  m: [
    { type: "num", q: "Un gas a 2·10⁵ Pa si espande da 3 L a 8 L. Quanto lavoro compie?", answer: 1000, tol: 0, unit: "J", explain: "W = 2·10⁵ × 5·10⁻³ = 1000 J." },
    { type: "num", q: "Un sistema cede 50 J di calore e su di esso viene compiuto un lavoro di 120 J (W = −120 J). Quanto vale ΔU?", answer: 70, tol: 0, unit: "J", explain: "ΔU = Q − W = −50 − (−120) = +70 J." },
    { type: "tf", q: "In una trasformazione isoterma di un gas perfetto la variazione di energia interna è nulla.", answer: true, explain: "U dipende solo da T." },
    { type: "num", q: "Quanto calore serve per scaldare di 10 K, a volume costante, 1 mol di gas biatomico (C_V = 5/2 R, R = 8,31)?", answer: 208, tol: 1, unit: "J", explain: "Q = n·(5/2)R·ΔT = 2,5 × 8,31 × 10 ≈ 208 J." },
    { type: "mc", q: "Nel moto perpetuo di prima specie si pretende di:", options: ["Produrre lavoro senza fornire energia", "Convertire tutto il calore in lavoro", "Raggiungere lo zero assoluto", "Far passare calore dal freddo al caldo"], answer: 0, explain: "Violerebbe il primo principio, cioè la conservazione dell'energia." }
  ],
  d: [
    { type: "num", q: "Una mole di gas perfetto si espande isotermicamente a 300 K raddoppiando il volume. Quanto lavoro compie? (R = 8,31; ln 2 = 0,693)", answer: 1728, tol: 5, unit: "J", explain: "W = nRT·ln(2) = 8,31 × 300 × 0,693 ≈ 1728 J." },
    { type: "num", q: "Un gas monoatomico (n = 1 mol, R = 8,31) si espande adiabaticamente compiendo 623 J di lavoro. Di quanto varia la sua temperatura (in K)?", answer: -50, tol: 1, unit: "K", explain: "ΔU = −W = −623 J = (3/2)·R·ΔT ⟹ ΔT = −623/12,47 ≈ −50 K." },
    { type: "num", q: "In un ciclo il gas assorbe 1500 J e cede 900 J all'ambiente. Quanto lavoro netto compie?", answer: 600, tol: 0, unit: "J", explain: "ΔU = 0 ⟹ W = Q_netto = 1500 − 900 = 600 J." },
    { type: "tf", q: "Per scaldare un gas di una certa ΔT serve più calore a pressione costante che a volume costante.", answer: true, explain: "C_P = C_V + R: a pressione costante parte del calore va in lavoro di espansione." },
    { type: "mc", q: "Nel piano (V, p) un ciclo percorso in senso orario ha lavoro netto:", options: ["Negativo", "Nullo", "Positivo e uguale all'area racchiusa", "Uguale al calore ceduto"], answer: 2, explain: "In senso orario il gas compie più lavoro in espansione di quanto ne subisca in compressione." }
  ]
});
