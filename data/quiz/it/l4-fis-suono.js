QBANK("it", "l4-fis-suono", {
  f: [
    { type: "mc", q: "Qual è l'intervallo di frequenze udibile da una persona giovane?", options: ["1 Hz - 100 Hz", "20 Hz - 20 000 Hz", "100 Hz - 1 MHz", "20 kHz - 200 kHz"], answer: 1, explain: "L'orecchio umano percepisce da circa 20 Hz a 20 kHz." },
    { type: "tf", q: "Il suono si propaga più velocemente nell'acqua che nell'aria.", answer: true, explain: "In acqua v ≈ 1480 m/s, in aria ≈ 343 m/s." },
    { type: "mc", q: "Con quale grandezza fisica è collegata l'altezza di un suono?", options: ["Ampiezza", "Frequenza", "Velocità", "Timbro"], answer: 1, explain: "Più la frequenza è alta, più il suono è acuto." },
    { type: "num", q: "Il suono compie 340 m in 1 s. Quanto tempo impiega per percorrere 1700 m?", answer: 5, tol: 0.05, unit: "s", explain: "t = d/v = 1700/340 = 5 s." },
    { type: "tf", q: "Gli ultrasuoni hanno frequenza superiore a 20 kHz.", answer: true, explain: "Per definizione sono suoni al di sopra del limite superiore di udibilità." }
  ],
  m: [
    { type: "num", q: "Una sorgente puntiforme emette P = 0,50 W. Quanto vale l'intensità a 2,0 m? (arrotonda a 3 cifre, in W/m²)", answer: 0.00995, tol: 0.0003, unit: "W/m²", explain: "I = P/(4πr²) = 0,50/(4π × 4) = 0,50/50,27 ≈ 9,95·10⁻³ W/m²." },
    { type: "mc", q: "Quanto vale il livello sonoro di un suono di intensità 10⁻⁴ W/m²?", options: ["40 dB", "80 dB", "100 dB", "120 dB"], answer: 1, explain: "β = 10·log(10⁻⁴/10⁻¹²) = 10 × 8 = 80 dB." },
    { type: "num", q: "Due diapason suonano a 440 Hz e 446 Hz. Quanti battimenti al secondo si sentono?", answer: 6, tol: 0.01, unit: "Hz", explain: "f_b = |446 − 440| = 6 battimenti al secondo." },
    { type: "num", q: "Un tubo aperto è lungo 0,85 m e v = 340 m/s. Quanto vale la fondamentale?", answer: 200, tol: 0.5, unit: "Hz", explain: "f₁ = v/(2L) = 340/1,7 = 200 Hz." },
    { type: "mc", q: "Una nota passa da 220 Hz a 440 Hz. Che intervallo musicale è?", options: ["Una terza", "Una quinta", "Un'ottava", "Un semitono"], answer: 2, explain: "Il raddoppio di frequenza corrisponde a un'ottava." }
  ],
  d: [
    { type: "num", q: "Un'ecografia emette un impulso e riceve l'eco da un organo dopo 0,13 ms (1,3·10⁻⁴ s). Con v = 1540 m/s nei tessuti, a che profondità (in cm) si trova l'organo?", answer: 10, tol: 0.2, unit: "cm", explain: "d = v·t/2 = 1540 × 1,3·10⁻⁴/2 ≈ 0,10 m = 10 cm." },
    { type: "num", q: "Se un'auto con clacson a 500 Hz si allontana a 17 m/s (v = 340 m/s), quale frequenza sente un osservatore fermo?", answer: 476, tol: 1, unit: "Hz", explain: "f' = f·v/(v + v_s) = 500 × 340/357 ≈ 476 Hz." },
    { type: "tf", q: "In un tubo chiuso a un estremo la fondamentale è doppia di quella di un tubo aperto della stessa lunghezza.", answer: false, explain: "È la metà: f₁ = v/(4L) contro v/(2L) per il tubo aperto." },
    { type: "num", q: "Un concerto ha livello 100 dB a 5 m. Qual è il livello a 20 m (campo libero, sorgente puntiforme)?", answer: 88, tol: 0.3, unit: "dB", explain: "La distanza è ×4: intensità ÷16, cioè −10·log 16 ≈ −12 dB. Quindi 88 dB." },
    { type: "mc", q: "Un aereo vola a Mach 2. Qual è l'angolo di semiapertura del cono di Mach?", options: ["15°", "30°", "45°", "60°"], answer: 1, explain: "sen θ = v/v_s = 1/2, quindi θ = 30°." }
  ]
});
