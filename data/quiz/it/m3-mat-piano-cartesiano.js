QBANK("it", "m3-mat-piano-cartesiano", {
 "f": [
  {
   "type": "mc",
   "q": "Come si chiama l'asse orizzontale del piano cartesiano?",
   "options": [
    "asse y (delle ordinate)",
    "origine",
    "asse x (delle ascisse)"
   ],
   "answer": 2,
   "explain": "L'asse orizzontale è l'asse x, detto anche asse delle ascisse; quello verticale è l'asse y."
  },
  {
   "type": "tf",
   "q": "L'origine del piano cartesiano ha coordinate (0; 0).",
   "answer": true,
   "explain": "L'origine è il punto in cui si incrociano gli assi: sia la x sia la y valgono 0."
  },
  {
   "type": "mc",
   "q": "In quale quadrante si trova il punto P(−3; −6)?",
   "options": [
    "primo",
    "secondo",
    "terzo",
    "quarto"
   ],
   "answer": 2,
   "explain": "Con x negativa e y negativa il punto sta nel terzo quadrante (in basso a sinistra)."
  },
  {
   "type": "num",
   "q": "Qual è l'ordinata del punto A(3; 8)?",
   "answer": 8,
   "explain": "Le coordinate si scrivono (ascissa; ordinata): l'ordinata è la seconda, cioè 8."
  },
  {
   "type": "text",
   "q": "Come si chiama il punto in cui si incontrano i due assi cartesiani?",
   "answer": [
    "origine",
    "l'origine",
    "l origine"
   ],
   "explain": "Il punto in cui si incrociano gli assi, di coordinate (0; 0), si chiama origine."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Calcola la distanza tra i punti A(2; −1) e B(2; 7).",
   "answer": 8,
   "explain": "I punti hanno la stessa ascissa, quindi stanno su una retta verticale: distanza = 7 − (−1) = 8."
  },
  {
   "type": "mc",
   "q": "Qual è il punto medio del segmento di estremi A(0; 6) e B(8; −2)?",
   "options": [
    "(4; 4)",
    "(4; 2)",
    "(8; 4)"
   ],
   "answer": 1,
   "explain": "Si fa la media delle coordinate: x = (0 + 8) : 2 = 4; y = (6 − 2) : 2 = 2. Punto medio (4; 2)."
  },
  {
   "type": "mc",
   "q": "Quale di queste rette passa per l'origine?",
   "options": [
    "y = 2x + 1",
    "y = −3x",
    "y = x − 4"
   ],
   "answer": 1,
   "explain": "Una retta passa per l'origine se non ha termine noto: y = −3x. Con x = 0 si ottiene y = 0."
  },
  {
   "type": "num",
   "q": "Qual è il coefficiente angolare della retta passante per A(0; 1) e B(4; −7)?",
   "answer": -2,
   "explain": "m = (y₂ − y₁) : (x₂ − x₁) = (−7 − 1) : (4 − 0) = −8 : 4 = −2."
  },
  {
   "type": "tf",
   "q": "Il punto (2; 5) appartiene alla retta y = 2x + 3.",
   "answer": false,
   "explain": "Falso: per x = 2 si ha y = 2 · 2 + 3 = 7, non 5. Il punto non soddisfa l'equazione."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Calcola l'area del triangolo di vertici A(1; 1), B(7; 1) e C(4; 6).",
   "answer": 15,
   "unit": "unità quadrate",
   "explain": "La base AB è orizzontale e misura 7 − 1 = 6. L'altezza è la distanza di C dalla retta y = 1: 6 − 1 = 5. Area = 6 × 5 : 2 = 15."
  },
  {
   "type": "num",
   "q": "Calcola la distanza tra A(−3; −2) e B(5; 4).",
   "answer": 10,
   "explain": "Differenze: Δx = 5 − (−3) = 8 e Δy = 4 − (−2) = 6. Per Pitagora: √(8² + 6²) = √100 = 10."
  },
  {
   "type": "mc",
   "q": "In quali punti la retta y = 2x − 6 incontra l'asse x e l'asse y?",
   "options": [
    "(−3; 0) e (0; 6)",
    "(6; 0) e (0; −3)",
    "(3; 0) e (0; −6)",
    "(0; 3) e (−6; 0)"
   ],
   "answer": 2,
   "explain": "Asse x: si pone y = 0, quindi 2x = 6 e x = 3, punto (3; 0). Asse y: si pone x = 0, quindi y = −6, punto (0; −6)."
  },
  {
   "type": "tf",
   "q": "Le rette y = 2x + 1 e y = −x/2 + 3 sono perpendicolari.",
   "answer": true,
   "explain": "Due rette sono perpendicolari se il prodotto dei coefficienti angolari è −1: 2 × (−1/2) = −1."
  },
  {
   "type": "order",
   "q": "Ordina questi punti in base alla distanza dall'origine, dal più vicino al più lontano.",
   "items": [
    "A(0; 3)",
    "B(3; 4)",
    "C(−6; 8)",
    "D(5; −12)"
   ],
   "explain": "Distanze da O: A = 3; B = √(9 + 16) = 5; C = √(36 + 64) = 10; D = √(25 + 144) = 13."
  }
 ]
});
