QBANK("it", "l2-fis-temperatura-calore", {
  f: [
    { type: "mc", q: "A quale temperatura bolle l'acqua a pressione atmosferica normale?", options: ["50 °C", "100 °C", "212 °C"], answer: 1, explain: "A 1 atm l'acqua bolle a 100 °C." },
    { type: "tf", q: "Il calore passa spontaneamente dal corpo più freddo al più caldo.", answer: false, explain: "Passa dal più caldo al più freddo, fino all'equilibrio termico." },
    { type: "text", q: "Come si chiama la temperatura di −273,15 °C?", answer: ["zero assoluto", "lo zero assoluto", "0 k"], explain: "È lo zero assoluto, 0 K." },
    { type: "mc", q: "Quale materiale è un buon isolante termico?", options: ["Rame", "Alluminio", "Polistirolo"], answer: 2, explain: "Il polistirolo contiene aria ferma e conduce molto poco." },
    { type: "num", q: "Converti 20 °C in kelvin (usa 273).", answer: 293, tol: 0.5, unit: "K", explain: "20 + 273 = 293 K." }
  ],
  m: [
    { type: "num", q: "Quanto calore serve per scaldare 3 kg d'acqua di 5 K? (c = 4186 J/(kg·K))", answer: 62790, tol: 100, unit: "J", explain: "Q = 3 · 4186 · 5 = 62 790 J." },
    { type: "mc", q: "Il termosifone scalda la stanza soprattutto per...", options: ["Conduzione", "Convezione", "Fusione"], answer: 1, explain: "L'aria calda sale e quella fredda scende: moto convettivo." },
    { type: "num", q: "Una barra di 5 m con λ = 10·10⁻⁶ K⁻¹ è scaldata di 40 K. Di quanto si allunga, in mm?", answer: 2, tol: 0.05, unit: "mm", explain: "ΔL = 10·10⁻⁶ · 5 · 40 = 2·10⁻³ m." },
    { type: "tf", q: "Se due corpi sono a contatto e hanno la stessa temperatura, non c'è scambio netto di calore.", answer: true, explain: "È l'equilibrio termico." },
    { type: "num", q: "Mescoli 100 g di acqua a 60 °C con 100 g di acqua a 20 °C. Quanto vale la temperatura finale?", answer: 40, tol: 0.5, unit: "°C", explain: "Masse uguali: media delle due temperature." }
  ],
  d: [
    { type: "num", q: "Converti 95 °F in gradi Celsius (arrotonda a intero).", answer: 35, tol: 0.5, unit: "°C", explain: "(95 − 32)/1,8 = 35 °C." },
    { type: "num", q: "Un blocco di 2 kg di alluminio (c = 900 J/(kg·K)) cede 36 000 J. Di quanti kelvin si raffredda?", answer: 20, tol: 0.2, unit: "K", explain: "ΔT = Q/(m·c) = 36000/(2·900) = 20 K." },
    { type: "num", q: "Quanta energia serve per far evaporare 100 g d'acqua già a 100 °C (L = 2,26·10⁶ J/kg)?", answer: 226000, tol: 500, unit: "J", explain: "Q = 0,1 · 2,26·10⁶ = 2,26·10⁵ J." },
    { type: "mc", q: "Perché un laghetto gela partendo dalla superficie?", options: ["Il fondo è più caldo e meno denso", "L'acqua ha densità massima a circa 4 °C, quella più fredda sale", "Il ghiaccio è più pesante dell'acqua", "Per l'irraggiamento del Sole"], answer: 1, explain: "L'acqua raffreddandosi sotto i 4 °C si dilata e diventa meno densa: sale in superficie e gela." },
    { type: "tf", q: "Un termos con intercapedine sotto vuoto ostacola conduzione e convezione.", answer: true, explain: "Senza materia tra le pareti non c'è conduzione né convezione; le superfici riflettenti riducono l'irraggiamento." }
  ]
});
