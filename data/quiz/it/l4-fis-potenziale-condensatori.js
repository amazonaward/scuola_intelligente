QBANK("it", "l4-fis-potenziale-condensatori", {
  f: [
    { type: "mc", q: "In quale unità si misura il potenziale elettrico?", options: ["Joule", "Coulomb", "Volt", "Farad"], answer: 2, explain: "1 V = 1 J/C." },
    { type: "tf", q: "Un condensatore è formato da due conduttori separati da un isolante.", answer: true, explain: "Le due armature conduttrici sono separate da vuoto o da un dielettrico." },
    { type: "mc", q: "In quale unità si misura la capacità?", options: ["Volt", "Farad", "Ohm", "Newton"], answer: 1, explain: "1 F = 1 C/V." },
    { type: "num", q: "Un condensatore da 2 µF è alla tensione di 6 V. Quanta carica contiene (in µC)?", answer: 12, tol: 0.01, unit: "µC", explain: "Q = C·ΔV = 2 × 6 = 12 µC." },
    { type: "num", q: "Due condensatori da 3 µF e 5 µF sono in parallelo. Qual è la capacità equivalente (in µF)?", answer: 8, tol: 0.01, unit: "µF", explain: "In parallelo le capacità si sommano: 3 + 5 = 8 µF." }
  ],
  m: [
    { type: "num", q: "Quale energia guadagna una carica di 3 µC che attraversa una d.d.p. di 200 V (in mJ)?", answer: 0.6, tol: 0.01, unit: "mJ", explain: "W = qΔV = 3·10⁻⁶ × 200 = 6·10⁻⁴ J = 0,6 mJ." },
    { type: "num", q: "Tra due piastre distanti 4 mm c'è una d.d.p. di 800 V. Quanto vale il campo (in kV/m)?", answer: 200, tol: 0.5, unit: "kV/m", explain: "E = ΔV/d = 800/0,004 = 2,0·10⁵ V/m = 200 kV/m." },
    { type: "mc", q: "Se la distanza fra le armature di un condensatore piano si triplica, la capacità:", options: ["triplica", "diventa un terzo", "diventa un nono", "non cambia"], answer: 1, explain: "C = ε₀S/d è inversamente proporzionale a d." },
    { type: "num", q: "Due condensatori da 6 µF e 3 µF in serie. Qual è la capacità equivalente (in µF)?", answer: 2, tol: 0.01, unit: "µF", explain: "C = (6 × 3)/(6 + 3) = 2 µF." },
    { type: "tf", q: "Una carica positiva lasciata libera si muove verso potenziali più alti.", answer: false, explain: "Le cariche positive si muovono verso potenziali più bassi, nel verso del campo." }
  ],
  d: [
    { type: "num", q: "Un elettrone è accelerato da fermo da 2000 V. Qual è la sua energia cinetica in joule, in unità di 10⁻¹⁶ J? (e = 1,6·10⁻¹⁹ C)", answer: 3.2, tol: 0.05, unit: "·10⁻¹⁶ J", explain: "K = e·ΔV = 1,6·10⁻¹⁹ × 2000 = 3,2·10⁻¹⁶ J." },
    { type: "num", q: "Due condensatori da 2 µF e 4 µF in serie sono collegati a 12 V. Quale tensione cade sul condensatore da 2 µF?", answer: 8, tol: 0.05, unit: "V", explain: "Q = C_eq·V = (4/3) × 12 = 16 µC; V₁ = Q/C₁ = 8 V." },
    { type: "num", q: "Un condensatore isolato (Q costante) da 8 µF e carica 80 µC viene riempito con un dielettrico ε_r = 2. Quale energia in µJ resta alla fine?", answer: 200, tol: 1, unit: "µJ", explain: "Con C' = 16 µF: U = Q²/(2C') = (80·10⁻⁶)²/(32·10⁻⁶) = 2,0·10⁻⁴ J = 200 µJ (era 400 µJ)." },
    { type: "tf", q: "Collegando due condensatori uguali in serie, l'energia totale immagazzinata alla stessa tensione è metà di quella di un solo condensatore.", answer: true, explain: "C_eq = C/2 e U = ½C_eqV²: la metà." },
    { type: "num", q: "Qual è l'energia potenziale (in mJ) di due cariche di 1 µC ciascuna poste a 0,03 m? (k = 9·10⁹)", answer: 300, tol: 2, unit: "mJ", explain: "U = kq₁q₂/r = 9·10⁹ × 10⁻¹²/0,03 = 9·10⁻³/0,03 = 0,3 J = 300 mJ." }
  ]
});
