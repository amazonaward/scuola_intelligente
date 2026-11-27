QBANK("it", "l2-fis-principi-dinamica", {
  f: [
    { type: "mc", q: "Quale principio dice che un corpo senza forze mantiene la sua velocità?", options: ["Primo", "Secondo", "Terzo"], answer: 0, explain: "È il principio di inerzia." },
    { type: "tf", q: "A parità di forza, un corpo più pesante accelera di meno.", answer: true, explain: "a = F/m: più massa, meno accelerazione." },
    { type: "num", q: "Quale forza serve per dare 2 m/s² a una massa di 5 kg?", answer: 10, tol: 0.1, unit: "N", explain: "F = m·a = 5 · 2 = 10 N." },
    { type: "text", q: "Come si chiama la tendenza di un corpo a mantenere il proprio stato di moto?", answer: ["inerzia", "l'inerzia"], explain: "Si chiama inerzia." },
    { type: "tf", q: "Se spingi un muro, il muro spinge te con la stessa forza.", answer: true, explain: "Terzo principio: azione e reazione sono uguali in modulo." }
  ],
  m: [
    { type: "num", q: "Un carrello da 4 kg ha accelerazione 3 m/s². Qual è la forza risultante?", answer: 12, tol: 0.1, unit: "N", explain: "F = 4 · 3 = 12 N." },
    { type: "mc", q: "Un'auto che frena bruscamente: i passeggeri sono spinti in avanti perché...", options: ["Una forza li spinge in avanti", "Per inerzia tendono a mantenere la velocità", "L'aria li spinge", "Il peso aumenta"], answer: 1, explain: "Sul corpo non agisce una forza in avanti: tende a conservare la velocità che aveva." },
    { type: "num", q: "Quanto vale l'accelerazione di un corpo di 8 kg sotto una forza risultante di 20 N?", answer: 2.5, tol: 0.05, unit: "m/s²", explain: "a = 20/8 = 2,5 m/s²." },
    { type: "mc", q: "Una persona di 60 kg in ascensore fermo (g = 10 m/s²): quanto vale la forza normale?", options: ["60 N", "600 N", "6 N", "0 N"], answer: 1, explain: "N = m·g = 60 · 10 = 600 N." },
    { type: "tf", q: "Sulla Luna la massa di un astronauta è minore che sulla Terra.", answer: false, explain: "La massa non cambia; cambia il peso, perché g lunare è circa un sesto." }
  ],
  d: [
    { type: "num", q: "Due forze di 6 N e 8 N perpendicolari agiscono su un corpo di 2 kg. Calcola l'accelerazione.", answer: 5, tol: 0.05, unit: "m/s²", explain: "Risultante √(36 + 64) = 10 N; a = 10/2 = 5 m/s²." },
    { type: "num", q: "Un razzo di 1000 kg ha una spinta di 15000 N (g = 10 m/s²). Quanto vale l'accelerazione verso l'alto?", answer: 5, tol: 0.05, unit: "m/s²", explain: "Risultante = 15000 − 10000 = 5000 N; a = 5000/1000 = 5 m/s²." },
    { type: "num", q: "Un ascensore sale frenando con a = 2 m/s² verso il basso. Una persona di 70 kg (g = 10 m/s²) che forza normale subisce?", answer: 560, tol: 1, unit: "N", explain: "N = m(g − a) = 70 · 8 = 560 N." },
    { type: "mc", q: "Due pattinatori fermi si spingono. Il primo ha massa 40 kg, il secondo 60 kg. Chi acquista più velocità?", options: ["Il più leggero", "Il più pesante", "Uguale", "Nessuno"], answer: 0, explain: "Le forze sono uguali; a = F/m è maggiore per la massa minore (m₁v₁ = m₂v₂)." },
    { type: "tf", q: "Un corpo può avere velocità nulla in un istante e accelerazione non nulla.", answer: true, explain: "Esempio: un sasso lanciato in alto al vertice ha v = 0 ma a = g." }
  ]
});
