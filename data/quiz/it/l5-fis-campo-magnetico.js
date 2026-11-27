QBANK("it", "l5-fis-campo-magnetico", {
  f: [
    { type: "mc", q: "Qual è l'unità di misura del campo magnetico nel Sistema Internazionale?", options: ["Weber", "Tesla", "Henry", "Ampère"], answer: 1, explain: "Il campo magnetico si misura in tesla (T)." },
    { type: "tf", q: "Poli magnetici uguali si attraggono.", answer: false, explain: "Poli uguali si respingono, poli opposti si attraggono." },
    { type: "mc", q: "Chi osservò per primo che una corrente devia l'ago di una bussola?", options: ["Faraday", "Oersted", "Maxwell", "Volta"], answer: 1, explain: "Hans Christian Oersted nel 1820." },
    { type: "tf", q: "Una carica elettrica ferma subisce una forza da un campo magnetico.", answer: false, explain: "La forza magnetica agisce solo su cariche in movimento." },
    { type: "num", q: "Un filo lungo 0,50 m, percorso da 4,0 A, è perpendicolare a un campo di 0,10 T. Quanto vale la forza (in N)?", answer: 0.2, tol: 0.005, unit: "N", explain: "F = ILB = 4,0 × 0,50 × 0,10 = 0,20 N." }
  ],
  m: [
    { type: "num", q: "Un elettrone si muove a 1,0·10⁷ m/s perpendicolarmente a un campo di 0,010 T. Quanto vale la forza (in 10⁻¹⁴ N)?", answer: 1.6, tol: 0.02, unit: "·10⁻¹⁴ N", explain: "F = evB = 1,6·10⁻¹⁹ × 1,0·10⁷ × 0,010 = 1,6·10⁻¹⁴ N." },
    { type: "mc", q: "Raddoppiando la velocità di una particella in un campo uniforme (perpendicolare), il raggio della traiettoria:", options: ["Resta uguale", "Raddoppia", "Si dimezza", "Quadruplica"], answer: 1, explain: "r = mv/(qB) è proporzionale a v." },
    { type: "mc", q: "Due fili paralleli con correnti di verso opposto:", options: ["Si attraggono", "Si respingono", "Non interagiscono", "Ruotano senza forza"], answer: 1, explain: "Correnti antiparallele si respingono." },
    { type: "num", q: "Qual è il campo (in µT) a 2,0 cm da un filo lungo percorso da 5,0 A?", answer: 50, tol: 0.5, unit: "µT", explain: "B = μ₀I/(2πr) = 2·10⁻⁷ × 5,0/0,020 = 5,0·10⁻⁵ T = 50 µT." },
    { type: "tf", q: "Il periodo del moto circolare di una carica in un campo uniforme non dipende dalla velocità.", answer: true, explain: "T = 2πm/(qB): dipende solo da massa, carica e campo." }
  ],
  d: [
    { type: "num", q: "Un protone (m = 1,67·10⁻²⁷ kg) con v = 1,0·10⁶ m/s entra perpendicolarmente in un campo di 0,50 T. Quanto vale il raggio (in cm, circa)?", answer: 2.09, tol: 0.05, unit: "cm", explain: "r = mv/(qB) = 1,67·10⁻²⁷ × 10⁶/(1,6·10⁻¹⁹ × 0,50) ≈ 2,09·10⁻² m." },
    { type: "num", q: "In un selettore di velocità E = 6,0·10⁴ V/m e B = 0,20 T. Quale velocità hanno le particelle che passano (in 10⁵ m/s)?", answer: 3, tol: 0.03, unit: "·10⁵ m/s", explain: "qE = qvB ⟹ v = E/B = 6,0·10⁴/0,20 = 3,0·10⁵ m/s." },
    { type: "mc", q: "Un fascio di particelle con la stessa velocità e carica ma masse diverse entra in un campo uniforme. Quale curva di più?", options: ["La più pesante", "La più leggera", "Tutte uguali", "Dipende dal segno"], answer: 1, explain: "r = mv/(qB): minore massa, minor raggio, quindi curvatura maggiore." },
    { type: "num", q: "Un solenoide lungo 20 cm ha 400 spire ed è percorso da 3,0 A. Quanto vale B all'interno (in mT, circa)?", answer: 7.54, tol: 0.1, unit: "mT", explain: "n = 400/0,20 = 2000 spire/m; B = μ₀nI = 4π·10⁻⁷ × 2000 × 3,0 ≈ 7,54·10⁻³ T." },
    { type: "tf", q: "Una particella che entra in un campo uniforme con velocità inclinata rispetto a B percorre un'elica.", answer: true, explain: "La componente parallela resta costante mentre quella perpendicolare ruota: traiettoria elicoidale." }
  ]
});
