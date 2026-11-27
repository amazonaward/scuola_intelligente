QBANK("it", "l2-art-assonometria", {
 "f": [
  { "type": "mc", "q": "Quanti disegni servono per mostrare le tre dimensioni in assonometria?", "options": ["Uno solo", "Tre", "Sei"], "answer": 0, "explain": "L'assonometria rappresenta le tre dimensioni in un solo disegno." },
  { "type": "tf", "q": "In assonometria le rette parallele restano parallele.", "answer": true, "explain": "È una proiezione con raggi paralleli." },
  { "type": "num", "q": "Quanti gradi formano tra loro gli assi nell'isometrica?", "answer": 120, "tol": 0, "unit": "°", "explain": "Tre assi equidistanti: 120°." },
  { "type": "mc", "q": "Quale faccia si vede in vera forma nella cavaliera?", "options": ["La frontale", "La superiore", "Nessuna"], "answer": 0, "explain": "La faccia parallela al piano del quadro." },
  { "type": "text", "q": "Come si chiama l'assonometria con i tre assi a 120°?", "answer": ["isometrica", "isometria", "assonometria isometrica"], "explain": "Isometrica." }
 ],
 "m": [
  { "type": "num", "q": "In cavaliera con coefficiente 1/2, una profondità reale di 14 cm è disegnata lunga quanti cm?", "answer": 7, "tol": 0, "unit": "cm", "explain": "14 × 1/2 = 7 cm." },
  { "type": "mc", "q": "A quale angolo sull'orizzontale si tracciano gli assi x e y nell'isometrica?", "options": ["30°", "45°", "60°"], "answer": 0, "explain": "Assi a 30° sull'orizzontale (sotto o sopra, a destra e a sinistra)." },
  { "type": "mc", "q": "In cavaliera, come si disegna un cerchio sulla faccia frontale?", "options": ["Come cerchio", "Come ellisse", "Come quadrato"], "answer": 0, "explain": "La faccia frontale è in vera forma." },
  { "type": "tf", "q": "Nell'isometrica un cerchio su una faccia diventa un'ellisse.", "answer": true, "explain": "Perché il piano è inclinato rispetto al quadro." },
  { "type": "mc", "q": "Quale metodo conviene per una pianta di appartamento rialzata in 3D?", "options": ["Monometrica", "Cavaliera con y a 60°", "Isometrica semplificata"], "answer": 0, "explain": "La pianta resta in vera forma." }
 ],
 "d": [
  { "type": "mc", "q": "Qual è il coefficiente di riduzione teorico dell'isometria ortogonale?", "options": ["Circa 0,816", "0,5", "1,22"], "answer": 0, "explain": "Vale √(2/3) ≈ 0,816." },
  { "type": "tf", "q": "L'isometria semplificata ingrandisce il disegno di circa il 22%.", "answer": true, "explain": "Perché si usa il coefficiente 1 al posto di 0,816." },
  { "type": "num", "q": "Una scatola ha lati 10, 6 e 8 cm. Quanto misura (in cm) la sua diagonale di base nello spazio, cioè √(10² + 6²), arrotondata all'intero?", "answer": 12, "tol": 0.5, "unit": "cm", "explain": "√136 ≈ 11,7 ≈ 12 cm; non si misura direttamente nel disegno." },
  { "type": "mc", "q": "Perché la cavaliera nacque nel disegno militare?", "options": ["Per rappresentare bastioni in modo semplice", "Perché non esisteva la prospettiva", "Per stampare le mappe"], "answer": 0, "explain": "Il cavaliere era un rialzo delle fortificazioni." },
  { "type": "order", "q": "Metti in ordine i passi per disegnare un cubo in isometrica.", "items": ["Tracciare la verticale e le due rette a 30°", "Riportare le misure sugli assi", "Tracciare le parallele agli assi", "Completare gli spigoli e ripassare"], "explain": "Prima gli assi, poi le misure, poi le parallele." }
 ]
});
