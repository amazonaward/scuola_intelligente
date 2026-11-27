QBANK("it", "l4-mat-esponenziali-logaritmi", {
  f: [
    { type: "num", q: "Quanto vale 2⁵?", answer: 32, explain: "2 · 2 · 2 · 2 · 2 = 32." },
    { type: "num", q: "Quanto vale log₁₀ 1000?", answer: 3, explain: "10³ = 1000, quindi il logaritmo è 3." },
    { type: "tf", q: "Il grafico di y = aˣ (a &gt; 0, a ≠ 1) passa sempre per il punto (0; 1).", answer: true, explain: "Per x = 0 si ha a⁰ = 1, qualunque sia la base." },
    { type: "mc", q: "Quanto vale log₅ 1?", options: ["0", "1", "5"], answer: 0, explain: "5⁰ = 1, quindi log₅ 1 = 0." },
    { type: "mc", q: "Il logaritmo di un numero negativo…", options: ["non esiste", "è sempre negativo", "è uguale a 0"], answer: 0, explain: "aˣ è sempre positivo, quindi non esiste x con aˣ = numero negativo." }
  ],
  m: [
    { type: "mc", q: "Risolvi 5ˣ = 1/25.", options: ["x = −2", "x = 2", "x = −5"], answer: 0, explain: "1/25 = 5⁻², quindi x = −2." },
    { type: "num", q: "Quanto vale log₂ 6 + log₂ (4/3)?", answer: 3, explain: "log₂ (6 · 4/3) = log₂ 8 = 3." },
    { type: "tf", q: "log₁₀ (x²) = 2 log₁₀ x per ogni x reale diverso da 0.", answer: false, explain: "Per x &lt; 0, log x non esiste, mentre log(x²) sì: l'uguaglianza vale solo per x &gt; 0 (altrimenti log(x²) = 2 log|x|)." },
    { type: "num", q: "Risolvi log₃ (2x − 1) = 2.", answer: 5, explain: "2x − 1 = 3² = 9 → x = 5 (CE: 2x − 1 &gt; 0 ✓)." },
    { type: "mc", q: "Risolvi 2ˣ &lt; 1/8.", options: ["x &lt; −3", "x &gt; −3", "x &lt; 3"], answer: 0, explain: "2ˣ &lt; 2⁻³ e la base è maggiore di 1: x &lt; −3." }
  ],
  d: [
    { type: "mc", q: "Risolvi 3ˣ⁺¹ + 3ˣ = 36.", options: ["x = 2", "x = 3", "x = 1"], answer: 0, explain: "3ˣ(3 + 1) = 36 → 3ˣ = 9 → x = 2." },
    { type: "num", q: "Risolvi ln x = 0.", answer: 1, explain: "e⁰ = 1, quindi x = 1." },
    { type: "tf", q: "L'equazione log(x − 2) + log(x + 2) = log 5 ha come soluzioni x = 3 e x = −3.", answer: false, explain: "x² − 4 = 5 → x = ± 3, ma la CE x &gt; 2 esclude −3: la sola soluzione è 3." },
    { type: "mc", q: "Risolvi log_{1/3} x &gt; 1.", options: ["0 &lt; x &lt; 1/3", "x &gt; 1/3", "x &lt; 1/3"], answer: 0, explain: "La base è minore di 1, il verso si inverte e serve x &gt; 0: 0 &lt; x &lt; 1/3." },
    { type: "num", q: "Dopo quanti anni, arrotondati all'intero, un capitale con interesse composto al 7% annuo circa raddoppia? (usa ln 2 ≈ 0,693 e ln 1,07 ≈ 0,0677)", answer: 10, tol: 0.3, explain: "t = ln 2/ln 1,07 ≈ 0,693/0,0677 ≈ 10,2 anni." }
  ]
});
