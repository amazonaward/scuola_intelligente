QBANK("it", "l3-fis-gravitazione", {
  f: [
    { type: "mc", q: "Che forma ha l'orbita di un pianeta secondo Keplero?", options: ["Circonferenza", "Ellisse", "Parabola", "Spirale"], answer: 1, explain: "Prima legge: ellisse con il Sole in un fuoco." },
    { type: "tf", q: "La forza di gravitazione tra due masse è sempre attrattiva.", answer: true, explain: "La gravità non ha versione repulsiva: le masse si attirano sempre." },
    { type: "mc", q: "Chi misurò per la prima volta la costante G nel 1798?", options: ["Galileo", "Newton", "Cavendish", "Einstein"], answer: 2, explain: "Henry Cavendish la misurò con una bilancia di torsione." },
    { type: "num", q: "Qual è, circa, il valore di g sulla superficie della Terra?", answer: 9.8, tol: 0.1, unit: "m/s²", explain: "g = GM/R² ≈ 9,8 m/s²." },
    { type: "mc", q: "In quale punto dell'orbita un pianeta si muove più velocemente?", options: ["Afelio", "Perielio", "Sempre uguale", "Ai fuochi"], answer: 1, explain: "Al perielio, più vicino al Sole." }
  ],
  m: [
    { type: "num", q: "Un corpo celeste ha a = 4 UA. Qual è il suo periodo in anni?", answer: 8, tol: 0.01, unit: "anni", explain: "T = 4^1,5 = 8 anni." },
    { type: "num", q: "Due corpi si attirano con una forza di 12 N. Se la distanza raddoppia, quanto vale la nuova forza?", answer: 3, tol: 0, unit: "N", explain: "F ∝ 1/r²: 12/4 = 3 N." },
    { type: "num", q: "Un pianeta ha massa 8·10²³ kg e raggio 3·10⁶ m. Quanto vale g (G = 6,67·10⁻¹¹)? ", answer: 5.9, tol: 0.1, unit: "m/s²", explain: "g = GM/R² = 6,67·10⁻¹¹·8·10²³/(9·10¹²) ≈ 5,9 m/s²." },
    { type: "tf", q: "La velocità orbitale di un satellite dipende dalla sua massa.", answer: false, explain: "v = √(GM/r) dipende solo da M e da r." },
    { type: "mc", q: "Se la massa del Sole raddoppiasse mantenendo uguale l'orbita terrestre, la forza sulla Terra:", options: ["raddoppierebbe", "si dimezzerebbe", "resterebbe uguale", "quadruplicherebbe"], answer: 0, explain: "F è proporzionale a M." }
  ],
  d: [
    { type: "num", q: "Calcola la velocità di fuga da un pianeta con GM = 4·10¹⁴ m³/s² e R = 5·10⁶ m (in km/s).", answer: 12.65, tol: 0.1, unit: "km/s", explain: "v = √(2GM/R) = √(1,6·10⁸) ≈ 12 650 m/s." },
    { type: "num", q: "Un satellite orbita a r = 4·10⁷ m da un pianeta con GM = 4·10¹⁴ m³/s². Qual è la sua velocità in m/s?", answer: 3162, tol: 5, unit: "m/s", explain: "v = √(GM/r) = √(10⁷) ≈ 3162 m/s." },
    { type: "num", q: "Un satellite ha periodo 4 volte quello di un altro satellite attorno allo stesso pianeta. Di quante volte è maggiore il suo raggio orbitale (T² ∝ r³)?", answer: 2.52, tol: 0.02, unit: "volte", explain: "r ∝ T^(2/3): 4^(2/3) ≈ 2,52." },
    { type: "mc", q: "Cosa accade all'energia totale di un satellite in orbita circolare legata?", options: ["È positiva", "È nulla", "È negativa, E = −GMm/(2r)", "Dipende dalla velocità del satellite soltanto"], answer: 2, explain: "K = GMm/2r e U = −GMm/r: la somma è −GMm/(2r)." },
    { type: "tf", q: "La velocità di fuga è √2 volte la velocità orbitale circolare a raso della superficie.", answer: true, explain: "v_fuga = √(2GM/R) = √2 · √(GM/R)." }
  ]
});
