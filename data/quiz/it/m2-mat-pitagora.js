QBANK("it", "m2-mat-pitagora", {
 "f": [
  {
   "type": "mc",
   "q": "Quanto misura l'angolo retto di un triangolo rettangolo?",
   "options": [
    "60°",
    "90°",
    "45°"
   ],
   "answer": 1,
   "explain": "L'angolo retto misura sempre 90°."
  },
  {
   "type": "num",
   "q": "I cateti di un triangolo rettangolo misurano 3 cm e 4 cm. Quanto misura l'ipotenusa?",
   "answer": 5,
   "unit": "cm",
   "explain": "3² + 4² = 9 + 16 = 25 e √25 = 5."
  },
  {
   "type": "tf",
   "q": "In un triangolo rettangolo l'ipotenusa è sempre più lunga di ciascun cateto.",
   "answer": true,
   "explain": "Poiché c² = a² + b², c² è maggiore sia di a² sia di b²: l'ipotenusa è il lato più lungo."
  },
  {
   "type": "mc",
   "q": "Quanti cateti ha un triangolo rettangolo?",
   "options": [
    "1",
    "2",
    "3"
   ],
   "answer": 1,
   "explain": "Ha due cateti (i lati che formano l'angolo retto) e una ipotenusa."
  },
  {
   "type": "text",
   "q": "Come si chiama un triangolo che ha un angolo di 90°?",
   "answer": [
    "rettangolo",
    "triangolo rettangolo"
   ],
   "explain": "È un triangolo rettangolo: il teorema di Pitagora vale solo per questi triangoli."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un aquilone è legato a un filo teso lungo 25 m. A terra, il punto sotto l'aquilone dista 7 m dal bambino. A che altezza vola l'aquilone (trascura l'altezza del bambino)?",
   "answer": 24,
   "unit": "m",
   "explain": "h² = 25² − 7² = 625 − 49 = 576, quindi h = √576 = 24 m."
  },
  {
   "type": "num",
   "q": "Un campetto rettangolare misura 24 m × 18 m. Quanto è lunga la sua diagonale?",
   "answer": 30,
   "unit": "m",
   "explain": "d² = 24² + 18² = 576 + 324 = 900, quindi d = √900 = 30 m."
  },
  {
   "type": "mc",
   "q": "Un triangolo isoscele ha la base di 16 cm e i lati obliqui di 10 cm. Quanto misura la sua altezza?",
   "options": [
    "8 cm",
    "4 cm",
    "6 cm"
   ],
   "answer": 2,
   "explain": "L'altezza divide la base a metà (8 cm): h² = 10² − 8² = 100 − 64 = 36, quindi h = 6 cm."
  },
  {
   "type": "tf",
   "q": "Un triangolo con i lati di 7 cm, 24 cm e 25 cm è rettangolo.",
   "answer": true,
   "explain": "7² + 24² = 49 + 576 = 625 = 25²: vale il teorema di Pitagora, quindi è rettangolo."
  },
  {
   "type": "num",
   "q": "Un tablet ha lo schermo rettangolare con la diagonale di 17 cm e la base di 15 cm. Quanto misura l'altezza dello schermo?",
   "answer": 8,
   "unit": "cm",
   "explain": "h² = 17² − 15² = 289 − 225 = 64, quindi h = √64 = 8 cm."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un rombo ha il lato di 13 cm e una diagonale di 24 cm. Quanto misura la sua area?",
   "answer": 120,
   "unit": "cm²",
   "explain": "Le diagonali si incontrano a 90° e si dimezzano: metà diagonale = 12; l'altra metà = √(13² − 12²) = √25 = 5, quindi la diagonale è 10. Area = 24 × 10 ÷ 2 = 120 cm²."
  },
  {
   "type": "num",
   "q": "Una formica parte da un punto, cammina 8 m verso est, poi 9 m verso nord e infine altri 6 m verso nord. A quanti metri in linea retta si trova dal punto di partenza?",
   "answer": 17,
   "unit": "m",
   "explain": "Verso nord ha percorso 9 + 6 = 15 m. Distanza = √(8² + 15²) = √(64 + 225) = √289 = 17 m."
  },
  {
   "type": "mc",
   "q": "Sara calcola l'ipotenusa di un triangolo con cateti 5 cm e 12 cm e ottiene 17 cm. Qual è l'errore?",
   "options": [
    "Ha sommato i cateti invece di sommare i loro quadrati e fare la radice.",
    "Ha confuso l'ipotenusa con un cateto.",
    "Non c'è errore: 17 è corretto."
   ],
   "answer": 0,
   "explain": "Il risultato corretto è √(5² + 12²) = √169 = 13 cm. 5 + 12 = 17 sarebbe solo la somma dei cateti."
  },
  {
   "type": "tf",
   "q": "Se raddoppio la lunghezza di tutti e tre i lati di un triangolo rettangolo, il nuovo triangolo è ancora rettangolo.",
   "answer": true,
   "explain": "(2a)² + (2b)² = 4(a² + b²) = 4c² = (2c)²: la relazione di Pitagora resta valida (i triangoli sono simili)."
  },
  {
   "type": "order",
   "q": "Ordina i triangoli rettangoli dall'ipotenusa più corta alla più lunga (sono indicati i cateti).",
   "items": [
    "Cateti 3 e 4",
    "Cateti 6 e 8",
    "Cateti 5 e 12",
    "Cateti 7 e 24"
   ],
   "explain": "Ipotenuse: 5, 10, 13 e 25."
  }
 ]
});
