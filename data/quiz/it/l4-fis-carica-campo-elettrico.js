QBANK("it", "l4-fis-carica-campo-elettrico", {
  f: [
    { type: "mc", q: "Due cariche dello stesso segno:", options: ["si attraggono", "si respingono", "non interagiscono", "si annullano"], answer: 1, explain: "Cariche dello stesso segno si respingono, di segno opposto si attraggono." },
    { type: "tf", q: "In un sistema isolato la carica totale si conserva.", answer: true, explain: "La carica non si crea né si distrugge: si trasferisce da un corpo all'altro." },
    { type: "mc", q: "Quale di questi materiali è un buon conduttore?", options: ["Vetro", "Gomma", "Rame", "Plastica"], answer: 2, explain: "I metalli come il rame hanno elettroni liberi di muoversi." },
    { type: "num", q: "Quanti elettroni servono per formare una carica di −4,8·10⁻¹⁹ C? (e = 1,6·10⁻¹⁹ C)", answer: 3, tol: 0, explain: "N = 4,8·10⁻¹⁹/1,6·10⁻¹⁹ = 3 elettroni." },
    { type: "tf", q: "Le linee di campo elettrico si incrociano nei punti in cui il campo è più intenso.", answer: false, explain: "Le linee non si incrociano mai: in un punto il campo ha una sola direzione. Dove è più intenso sono solo più fitte." }
  ],
  m: [
    { type: "num", q: "Due cariche uguali di 4 µC distano 0,2 m. Quanto vale la forza di Coulomb? (k = 9·10⁹ N·m²/C²)", answer: 3.6, tol: 0.05, unit: "N", explain: "F = 9·10⁹ × (4·10⁻⁶)²/(0,2)² = 9·10⁹ × 1,6·10⁻¹¹/0,04 = 3,6 N." },
    { type: "mc", q: "Se in un punto il campo vale E, che forza agisce su una carica q = −2e?", options: ["2eE nel verso di E", "2eE nel verso opposto a E", "eE nel verso di E", "Nessuna forza"], answer: 1, explain: "F = qE con q = −2e: modulo 2eE e verso opposto al campo." },
    { type: "num", q: "A quale distanza da una carica di 1 nC il campo vale 90 N/C? (k = 9·10⁹ N·m²/C²)", answer: 0.316, tol: 0.01, unit: "m", explain: "r = √(kQ/E) = √(9·10⁹ × 10⁻⁹/90) = √0,1 ≈ 0,316 m." },
    { type: "tf", q: "Raddoppiando una delle due cariche e la distanza, la forza di Coulomb rimane uguale.", answer: false, explain: "F ∝ q/r²: con q doppia e r doppia, F diventa 2/4 = 1/2 del valore iniziale." },
    { type: "num", q: "Un campo uniforme di 500 N/C accelera un protone (m = 1,67·10⁻²⁷ kg, e = 1,6·10⁻¹⁹ C). Qual è l'accelerazione, in 10¹⁰ m/s²?", answer: 4.79, tol: 0.1, unit: "·10¹⁰ m/s²", explain: "a = eE/m = 1,6·10⁻¹⁹ × 500/1,67·10⁻²⁷ ≈ 4,79·10¹⁰ m/s²." }
  ],
  d: [
    { type: "num", q: "Due cariche +9 µC e +1 µC distano 0,40 m. A quale distanza dalla carica di 9 µC (lungo il segmento) il campo risultante è nullo? (in m)", answer: 0.3, tol: 0.005, unit: "m", explain: "Si impone k·9/x² = k·1/(0,4 − x)²: 3/x = 1/(0,4 − x) ⟹ x = 0,3 m." },
    { type: "num", q: "Il campo vicino alla superficie di un conduttore vale 4,43·10⁵ N/C. Qual è la densità di carica superficiale, in µC/m²? (ε₀ = 8,85·10⁻¹² C²/(N·m²))", answer: 3.92, tol: 0.05, unit: "µC/m²", explain: "σ = ε₀E = 8,85·10⁻¹² × 4,43·10⁵ ≈ 3,92·10⁻⁶ C/m²." },
    { type: "mc", q: "Una carica puntiforme Q è al centro di un cubo. Il flusso del campo attraverso ciascuna delle sei facce vale:", options: ["Q/ε₀", "Q/(6ε₀)", "6Q/ε₀", "Zero"], answer: 1, explain: "Il flusso totale è Q/ε₀; per simmetria si divide in sei parti uguali." },
    { type: "tf", q: "Il campo elettrico in un punto dipende dal valore della carica di prova usata per misurarlo.", answer: false, explain: "E = F/q è indipendente da q: la forza è proporzionale a q, quindi il rapporto non cambia (purché la carica di prova non perturbi la distribuzione delle sorgenti)." },
    { type: "num", q: "Una goccia d'olio di massa 4,9·10⁻¹⁵ kg resta sospesa in un campo verticale di 3,0·10⁵ N/C. Quanti elettroni in eccesso ha? (g = 9,8 m/s², e = 1,6·10⁻¹⁹ C)", answer: 1, tol: 0.05, explain: "qE = mg ⟹ q = 4,9·10⁻¹⁵ × 9,8/3,0·10⁵ = 1,6·10⁻¹⁹ C = 1 e." }
  ]
});
