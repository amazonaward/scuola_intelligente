QBANK("it", "m2-mat-trasformazioni", {
 "f": [
  {
   "type": "mc",
   "q": "Quale trasformazione «ribalta» una figura come farebbe uno specchio?",
   "options": [
    "La traslazione",
    "La rotazione",
    "La simmetria assiale"
   ],
   "answer": 2,
   "explain": "La simmetria assiale riflette la figura rispetto a una retta, l'asse, come uno specchio."
  },
  {
   "type": "tf",
   "q": "Una traslazione conserva la forma e le dimensioni di una figura.",
   "answer": true,
   "explain": "È un'isometria: sposta la figura senza deformarla né ingrandirla."
  },
  {
   "type": "num",
   "q": "Quanti assi di simmetria ha un rettangolo che non è un quadrato?",
   "answer": 2,
   "explain": "Ha 2 assi: uno verticale e uno orizzontale, passanti per i punti medi dei lati opposti. Le diagonali non sono assi."
  },
  {
   "type": "text",
   "q": "Come si chiama il punto che resta fermo in una rotazione?",
   "answer": [
    "centro",
    "centro di rotazione",
    "il centro",
    "il centro di rotazione"
   ],
   "explain": "È il centro di rotazione: la figura gira attorno a questo punto."
  },
  {
   "type": "mc",
   "q": "Quale trasformazione cambia le dimensioni di una figura?",
   "options": [
    "La traslazione",
    "La rotazione",
    "L'omotetia"
   ],
   "answer": 2,
   "explain": "Solo l'omotetia ingrandisce o riduce; traslazione e rotazione sono isometrie."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Il punto A(3; −2) viene traslato con il vettore v(−5; 6). Quanto vale l'ordinata (y) di A'?",
   "answer": 4,
   "explain": "y' = −2 + 6 = 4 (e x' = 3 − 5 = −2, quindi A'(−2; 4))."
  },
  {
   "type": "mc",
   "q": "Qual è il simmetrico di P(−4; 7) rispetto all'asse y?",
   "options": [
    "(4; −7)",
    "(4; 7)",
    "(−4; −7)"
   ],
   "answer": 1,
   "explain": "Rispetto all'asse y cambia segno l'ascissa e resta uguale l'ordinata: (4; 7)."
  },
  {
   "type": "num",
   "q": "Il punto B(4; −9) viene trasformato con la simmetria centrale di centro l'origine. Quanto vale l'ordinata di B'?",
   "answer": 9,
   "explain": "Nella simmetria rispetto all'origine entrambe le coordinate cambiano segno: B'(−4; 9)."
  },
  {
   "type": "num",
   "q": "Un'auto vera è lunga 4 m. Il suo modellino è simile, con rapporto di similitudine 1/25. Quanti centimetri è lungo il modellino?",
   "answer": 16,
   "unit": "cm",
   "explain": "4 m = 400 cm; 400 ÷ 25 = 16 cm."
  },
  {
   "type": "tf",
   "q": "In una simmetria assiale ogni punto e il suo corrispondente sono alla stessa distanza dall'asse.",
   "answer": true,
   "explain": "L'asse è l'asse del segmento che unisce P e P': è perpendicolare ad esso e passa per il suo punto medio."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Due figure simili hanno aree di 20 cm² e 45 cm². Quanto vale il rapporto di similitudine tra la figura grande e quella piccola?",
   "answer": 1.5,
   "explain": "Le aree stanno come k²: k² = 45 ÷ 20 = 2,25, quindi k = √2,25 = 1,5."
  },
  {
   "type": "mc",
   "q": "Si applica prima la traslazione di vettore v(2; 3) e poi quella di vettore w(−5; 1). Il risultato equivale a una traslazione di vettore…",
   "options": [
    "(7; 2)",
    "(−3; −4)",
    "(−3; 4)"
   ],
   "answer": 2,
   "explain": "Si sommano le componenti: (2 + (−5); 3 + 1) = (−3; 4)."
  },
  {
   "type": "mc",
   "q": "Luca dice: «Ruotando di 90° (antiorario) intorno all'origine il punto (3; 1) diventa (1; 3)». Qual è l'errore?",
   "options": [
    "Ha scambiato solo le coordinate, ma la rotazione manda (x; y) in (−y; x), cioè in (−1; 3).",
    "La rotazione di 90° non cambia le coordinate.",
    "Il punto va in (−3; −1)."
   ],
   "answer": 0,
   "explain": "Scambiare le coordinate è una simmetria rispetto alla bisettrice y = x, non una rotazione di 90°."
  },
  {
   "type": "num",
   "q": "Il punto P(2; 3) viene prima riflesso rispetto all'asse x e poi traslato con il vettore (1; −2). Quanto vale l'ordinata del punto finale?",
   "answer": -5,
   "explain": "Riflesso: (2; −3). Traslato: (2 + 1; −3 − 2) = (3; −5). L'ordinata è −5."
  },
  {
   "type": "order",
   "q": "Ordina le figure dal minore al maggiore numero di assi di simmetria.",
   "items": [
    "Triangolo scaleno",
    "Rombo (non quadrato)",
    "Pentagono regolare",
    "Esagono regolare"
   ],
   "explain": "Assi: scaleno 0, rombo 2 (le diagonali), pentagono regolare 5, esagono regolare 6."
  }
 ]
});
