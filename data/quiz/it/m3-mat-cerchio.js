QBANK("it", "m3-mat-cerchio", {
 "f": [
  {
   "type": "mc",
   "q": "Il raggio di una circonferenza è la distanza tra…",
   "options": [
    "il centro e un punto della circonferenza",
    "due punti qualsiasi della circonferenza",
    "due punti opposti della circonferenza"
   ],
   "answer": 0,
   "explain": "Il raggio congiunge il centro con un punto qualsiasi della circonferenza."
  },
  {
   "type": "num",
   "q": "Il raggio di una ruota misura 7 cm. Quanto misura il diametro?",
   "answer": 14,
   "unit": "cm",
   "explain": "Il diametro è il doppio del raggio: 7 × 2 = 14 cm."
  },
  {
   "type": "tf",
   "q": "Il diametro è il doppio del raggio.",
   "answer": true,
   "explain": "d = 2r: il diametro passa per il centro e unisce due punti opposti, quindi è formato da due raggi."
  },
  {
   "type": "mc",
   "q": "Quale formula dà la lunghezza della circonferenza?",
   "options": [
    "πr²",
    "πr",
    "2πr"
   ],
   "answer": 2,
   "explain": "La lunghezza è C = 2πr (oppure πd). πr² è invece la formula dell'area del cerchio."
  },
  {
   "type": "text",
   "q": "Come si chiama la parte di cerchio compresa tra due raggi? (due parole)",
   "answer": [
    "settore circolare",
    "il settore circolare",
    "settore"
   ],
   "explain": "La parte di cerchio compresa tra due raggi è il settore circolare, come una fetta di torta."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Una pizza ha diametro 30 cm. Quanto è lunga la sua crosta, cioè la circonferenza? (π = 3,14)",
   "answer": 94.2,
   "tol": 0.05,
   "unit": "cm",
   "explain": "C = π × d = 3,14 × 30 = 94,2 cm."
  },
  {
   "type": "num",
   "q": "Qual è l'area di un cerchio di raggio 6 cm? (π = 3,14)",
   "answer": 113.04,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "A = π × r² = 3,14 × 6² = 3,14 × 36 = 113,04 cm²."
  },
  {
   "type": "mc",
   "q": "Un cerchio ha area 78,5 cm². Quanto misura il raggio? (π = 3,14)",
   "options": [
    "10 cm",
    "5 cm",
    "25 cm"
   ],
   "answer": 1,
   "explain": "r² = A : π = 78,5 : 3,14 = 25, quindi r = √25 = 5 cm."
  },
  {
   "type": "tf",
   "q": "Se il raggio di una circonferenza raddoppia, anche la sua lunghezza raddoppia.",
   "answer": true,
   "explain": "C = 2πr è proporzionale al raggio: raggio doppio, circonferenza doppia (l'area invece diventa quadrupla)."
  },
  {
   "type": "mc",
   "q": "Un arco di 180° corrisponde a…",
   "options": [
    "un quarto della circonferenza",
    "l'intera circonferenza",
    "metà della circonferenza"
   ],
   "answer": 2,
   "explain": "180° è la metà di 360°, quindi l'arco è una semicirconferenza: metà della circonferenza."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Una ruota di bicicletta ha raggio 35 cm. Quanti metri percorre in 100 giri completi? (π = 3,14)",
   "answer": 219.8,
   "tol": 0.05,
   "unit": "m",
   "explain": "Un giro = 2 × 3,14 × 35 = 219,8 cm. In 100 giri: 219,8 × 100 = 21 980 cm = 219,8 m."
  },
  {
   "type": "num",
   "q": "Una fontana circolare di raggio 12 m è circondata da un sentiero largo 1 m. Quanto misura l'area del sentiero? (π = 3,14)",
   "answer": 78.5,
   "tol": 0.05,
   "unit": "m²",
   "explain": "Il sentiero è una corona circolare con R = 13 m e r = 12 m: A = 3,14 × (13² − 12²) = 3,14 × (169 − 144) = 3,14 × 25 = 78,5 m²."
  },
  {
   "type": "mc",
   "q": "Una circonferenza ha diametro 14 cm. Una retta dista 7 cm dal suo centro. Come è la retta rispetto alla circonferenza?",
   "options": [
    "secante",
    "esterna",
    "tangente"
   ],
   "answer": 2,
   "explain": "Il raggio è 14 : 2 = 7 cm. La distanza dal centro è uguale al raggio, quindi la retta ha un solo punto in comune: è tangente."
  },
  {
   "type": "num",
   "q": "Un settore circolare ha raggio 10 cm e angolo al centro di 72°. Quanto misura la sua area? (π = 3,14)",
   "answer": 62.8,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "Area del cerchio = 3,14 × 10² = 314 cm². 72° è 72/360 = 1/5 dell'angolo giro, quindi 314 : 5 = 62,8 cm²."
  },
  {
   "type": "order",
   "q": "Ordina queste circonferenze dalla più corta alla più lunga.",
   "items": [
    "circonferenza di raggio 2 cm",
    "circonferenza di diametro 6 cm",
    "circonferenza di raggio 4 cm",
    "circonferenza di diametro 10 cm"
   ],
   "explain": "Con π = 3,14: raggio 2 cm → 12,56 cm; diametro 6 cm → 18,84 cm; raggio 4 cm → 25,12 cm; diametro 10 cm → 31,4 cm."
  }
 ]
});
