QBANK("it", "l4-mat-equazioni-goniometriche", {
  f: [
    { type: "mc", q: "Le soluzioni di sen x = 0 sono…", options: ["x = kπ", "x = π/2 + kπ", "x = 2kπ"], answer: 0, explain: "Il seno si annulla ai multipli di π." },
    { type: "mc", q: "Le soluzioni di cos x = 0 sono…", options: ["x = kπ", "x = π/2 + kπ", "x = π/2 + 2kπ"], answer: 1, explain: "Il coseno si annulla in π/2 e 3π/2, cioè in π/2 + kπ." },
    { type: "tf", q: "L'equazione sen x = 1/3 ha soluzioni.", answer: true, explain: "Vale |1/3| ≤ 1: esistono due famiglie di soluzioni." },
    { type: "num", q: "Nell'intervallo [0, π], quante soluzioni ha cos x = 1/2?", answer: 1, explain: "Solo x = π/3; l'altra soluzione, −π/3, è fuori dall'intervallo." },
    { type: "text", q: "Con quale funzione si indica l'angolo (tra −π/2 e π/2) che ha un dato seno?", answer: ["arcsen", "arcoseno", "arcsin", "arco seno"], explain: "È l'arcoseno, funzione inversa del seno ristretto a [−π/2, π/2]." }
  ],
  m: [
    { type: "mc", q: "Risolvi sen x = −1/2 in [0, 2π).", options: ["7π/6 e 11π/6", "5π/6 e 7π/6", "π/6 e 11π/6"], answer: 0, explain: "Il seno è −1/2 nel III e IV quadrante, a 7π/6 e 11π/6." },
    { type: "mc", q: "Risolvi tan x = −1 (famiglia di soluzioni).", options: ["−π/4 + kπ", "π/4 + kπ", "3π/4 + 2kπ"], answer: 0, explain: "arctan(−1) = −π/4, con periodo π." },
    { type: "tf", q: "Per risolvere sen x cos x = sen x conviene dividere per sen x.", answer: false, explain: "Dividendo si perdono le soluzioni sen x = 0; si deve raccogliere: sen x (cos x − 1) = 0." },
    { type: "num", q: "Quante soluzioni ha 2cos x = 1 in [0, 2π)?", answer: 2, explain: "cos x = 1/2 → x = π/3 e x = 5π/3." },
    { type: "mc", q: "Qual è la soluzione di cos x &gt; 0 in (−π, π)?", options: ["(−π/2, π/2)", "(0, π)", "(−π, 0)"], answer: 0, explain: "Il coseno è positivo per angoli nel I e IV quadrante, cioè tra −π/2 e π/2." }
  ],
  d: [
    { type: "mc", q: "Risolvi sen 2x = 1/2 (famiglie).", options: ["x = π/12 + kπ ∨ x = 5π/12 + kπ", "x = π/6 + kπ ∨ x = 5π/6 + kπ", "x = π/12 + 2kπ ∨ x = 5π/12 + 2kπ"], answer: 0, explain: "2x = π/6 + 2kπ ∨ 5π/6 + 2kπ: dividendo per 2, il periodo diventa kπ." },
    { type: "num", q: "Per l'equazione lineare sen x + cos x = c, quanto vale R = √(a² + b²)? (risposta decimale, due cifre)", answer: 1.41, tol: 0.01, explain: "R = √(1² + 1²) = √2 ≈ 1,41." },
    { type: "mc", q: "L'equazione sen x + cos x = 2 è…", options: ["impossibile", "soddisfatta da x = π/4", "soddisfatta da x = 0"], answer: 0, explain: "Il massimo di sen x + cos x è √2 ≈ 1,41, minore di 2." },
    { type: "tf", q: "L'equazione 3sen²x − 4 sen x cos x + cos²x = 0 si riduce a 3t² − 4t + 1 = 0 con t = tan x.", answer: true, explain: "Si divide per cos²x (cos x = 0 non è soluzione perché darebbe 3 = 0)." },
    { type: "mc", q: "Risolvi 2sen²x &lt; 1 in [0, π].", options: ["[0, π/4) ∪ (3π/4, π]", "(π/4, 3π/4)", "[0, π/2)"], answer: 0, explain: "sen²x &lt; 1/2 → |sen x| &lt; √2/2 → x &lt; π/4 oppure x &gt; 3π/4 nell'intervallo [0, π]." }
  ]
});
