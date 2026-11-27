QBANK("it", "l4-mat-calcolo-combinatorio", {
  f: [
    { type: "num", q: "Quanto vale 5!?", answer: 120, explain: "5 · 4 · 3 · 2 · 1 = 120." },
    { type: "num", q: "Un menu ha 2 antipasti, 3 primi e 2 dolci. Quanti menu completi si possono comporre?", answer: 12, explain: "2 · 3 · 2 = 12." },
    { type: "tf", q: "0! = 1.", answer: true, explain: "È una convenzione che rende coerenti le formule." },
    { type: "mc", q: "In quanti modi si possono ordinare 3 libri su uno scaffale?", options: ["6", "3", "9"], answer: 0, explain: "3! = 6." },
    { type: "text", q: "Come si chiama il numero (n su k) = n!/(k!(n − k)!)?", answer: ["coefficiente binomiale", "binomiale"], explain: "È il coefficiente binomiale." }
  ],
  m: [
    { type: "num", q: "Quanti sono i numeri di 3 cifre diverse che si possono formare con le cifre 1, 2, 3, 4, 5?", answer: 60, explain: "D₅,₃ = 5 · 4 · 3 = 60." },
    { type: "num", q: "In quanti modi si può scegliere una squadra di 2 persone tra 7?", answer: 21, explain: "C₇,₂ = 7 · 6/2 = 21." },
    { type: "tf", q: "Una password di 5 cifre (0-9) con ripetizioni ammesse ha 10⁵ possibilità.", answer: true, explain: "Disposizioni con ripetizione: 10 scelte per ognuna delle 5 posizioni." },
    { type: "mc", q: "Quanti anagrammi ha la parola OTTO?", options: ["6", "12", "24"], answer: 0, explain: "4!/(2! 2!) = 6." },
    { type: "num", q: "Quanto vale (8 su 6)?", answer: 28, explain: "(8 su 6) = (8 su 2) = 28." }
  ],
  d: [
    { type: "mc", q: "Qual è il coefficiente di x² in (x + 3)⁴?", options: ["54", "36", "108"], answer: 0, explain: "(4 su 2) · 3² = 6 · 9 = 54." },
    { type: "num", q: "In quanti modi 6 persone possono sedersi attorno a un tavolo rotondo (le rotazioni sono equivalenti)?", answer: 120, explain: "(6 − 1)! = 120." },
    { type: "tf", q: "Il numero dei sottoinsiemi di un insieme di 6 elementi è 64.", answer: true, explain: "2⁶ = 64." },
    { type: "num", q: "Quante partite si giocano in un girone all'italiana (solo andata) tra 10 squadre?", answer: 45, explain: "C₁₀,₂ = 45." },
    { type: "num", q: "Da un gruppo di 5 ragazzi e 4 ragazze si sceglie un comitato di 2 ragazzi e 2 ragazze. In quanti modi?", answer: 60, explain: "C₅,₂ · C₄,₂ = 10 · 6 = 60." }
  ]
});
