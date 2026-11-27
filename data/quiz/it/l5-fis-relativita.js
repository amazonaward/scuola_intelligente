QBANK("it", "l5-fis-relativita", {
  f: [
    { type: "mc", q: "Chi formulò la relatività ristretta nel 1905?", options: ["Newton", "Einstein", "Bohr", "Maxwell"], answer: 1, explain: "Albert Einstein, 1905." },
    { type: "tf", q: "Secondo Einstein la velocità della luce nel vuoto dipende dalla velocità della sorgente.", answer: false, explain: "È costante per tutti gli osservatori inerziali." },
    { type: "mc", q: "Qual è la formula dell'energia a riposo?", options: ["E = ½mv²", "E = mc²", "E = mgh", "E = hf"], answer: 1, explain: "E₀ = mc²." },
    { type: "num", q: "Quanto vale γ per v = 0 (corpo fermo)?", answer: 1, tol: 0.001, unit: "", explain: "γ = 1/√(1 − 0) = 1." },
    { type: "tf", q: "Per un orologio in moto il tempo scorre più lentamente rispetto a uno fermo.", answer: true, explain: "È la dilatazione dei tempi, Δt = γΔt₀." }
  ],
  m: [
    { type: "num", q: "Calcola γ per v = 0,6c.", answer: 1.25, tol: 0.01, unit: "", explain: "γ = 1/0,8 = 1,25." },
    { type: "num", q: "Un'astronave passa a 0,6c. Il suo equipaggio misura 8 s. Quanto tempo trascorre per un osservatore fermo (in s)?", answer: 10, tol: 0.1, unit: "s", explain: "Δt = γΔt₀ = 1,25 × 8 = 10 s." },
    { type: "num", q: "Un'asta di 5,0 m a riposo viaggia a 0,6c nella direzione della sua lunghezza. Quanto appare lunga (in m)?", answer: 4, tol: 0.05, unit: "m", explain: "L = L₀/γ = 5,0/1,25 = 4,0 m." },
    { type: "num", q: "Quanta energia (in 10¹³ J) equivale a 0,1 g di massa?", answer: 0.9, tol: 0.02, unit: "·10¹³ J", explain: "E = mc² = 10⁻⁴ × 9·10¹⁶ = 9·10¹² J = 0,9·10¹³ J." },
    { type: "mc", q: "Che cosa succede a γ quando v si avvicina a c?", options: ["Tende a 0", "Resta 1", "Tende all'infinito", "Diventa negativo"], answer: 2, explain: "γ = 1/√(1 − v²/c²) diverge per v → c." }
  ],
  d: [
    { type: "num", q: "Un muone (vita media 2,2 µs) viaggia a 0,998c (γ ≈ 15,8). Quanta distanza percorre in media nel sistema della Terra (in km, circa)?", answer: 10.4, tol: 0.3, unit: "km", explain: "t = γ·2,2 µs ≈ 34,8 µs; d = 0,998 × 3,0·10⁸ × 34,8·10⁻⁶ ≈ 10,4 km." },
    { type: "num", q: "Un elettrone ha energia cinetica pari alla sua energia a riposo (K = mc²). Quanto vale γ?", answer: 2, tol: 0.01, unit: "", explain: "K = (γ − 1)mc² = mc² ⟹ γ = 2." },
    { type: "num", q: "Per un protone (E₀ = 938 MeV) con γ = 3, quale energia totale in MeV?", answer: 2814, tol: 5, unit: "MeV", explain: "E = γmc² = 3 × 938 = 2814 MeV." },
    { type: "mc", q: "Una particella senza massa ha energia 3 MeV. Qual è la sua quantità di moto?", options: ["3 MeV/c", "6 MeV/c", "1,5 MeV/c", "0"], answer: 0, explain: "Per m = 0, E = pc, quindi p = E/c = 3 MeV/c." },
    { type: "tf", q: "Un osservatore che si muove a 0,9c verso una sorgente di luce misura per la luce una velocità maggiore di c.", answer: false, explain: "Per ogni osservatore inerziale la velocità della luce nel vuoto è c." }
  ]
});
