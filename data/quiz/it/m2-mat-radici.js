QBANK("it", "m2-mat-radici", {
 "f": [
  {
   "type": "num",
   "q": "Quanto fa √121?",
   "answer": 11,
   "explain": "11 × 11 = 121, quindi √121 = 11."
  },
  {
   "type": "mc",
   "q": "Quale operazione è l'inversa dell'elevamento al quadrato?",
   "options": [
    "La radice quadrata",
    "La somma",
    "La divisione per 2"
   ],
   "answer": 0,
   "explain": "Se 7² = 49, allora √49 = 7: la radice «annulla» il quadrato."
  },
  {
   "type": "tf",
   "q": "√100 = 50.",
   "answer": false,
   "explain": "Falso: 10 × 10 = 100, quindi √100 = 10. 50 è la metà di 100, non la sua radice."
  },
  {
   "type": "mc",
   "q": "Il quadrato di 9 è…",
   "options": [
    "18",
    "81",
    "99"
   ],
   "answer": 1,
   "explain": "9² = 9 × 9 = 81 (non 9 × 2 = 18)."
  },
  {
   "type": "text",
   "q": "Come si chiama il segno √ in matematica?",
   "answer": [
    "radice",
    "segno di radice",
    "radicale",
    "il radicale",
    "radice quadrata",
    "simbolo di radice"
   ],
   "explain": "Si chiama segno di radice (o radicale): √9 si legge «radice quadrata di 9»."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un orto quadrato ha un'area di 169 m². Quanti metri di rete servono per recintarlo tutto intorno?",
   "answer": 52,
   "unit": "m",
   "explain": "Lato = √169 = 13 m. Perimetro = 4 × 13 = 52 m."
  },
  {
   "type": "num",
   "q": "Un tavolino quadrato ha un'area di 2,25 m². Quanto misura il suo lato?",
   "answer": 1.5,
   "unit": "m",
   "explain": "1,5 × 1,5 = 2,25, quindi il lato è √2,25 = 1,5 m."
  },
  {
   "type": "mc",
   "q": "Quanto fa √(100 − 36)?",
   "options": [
    "4",
    "8",
    "64"
   ],
   "answer": 1,
   "explain": "Prima si calcola sotto radice: 100 − 36 = 64, poi √64 = 8. Non è 10 − 6 = 4."
  },
  {
   "type": "num",
   "q": "Un numero è scomposto come 2⁶ × 7². Quanto vale la sua radice quadrata?",
   "answer": 56,
   "explain": "Si dimezzano gli esponenti: 2³ × 7¹ = 8 × 7 = 56."
  },
  {
   "type": "tf",
   "q": "√0,81 = 0,9.",
   "answer": true,
   "explain": "0,9 × 0,9 = 0,81, quindi √0,81 = 0,9."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Due aiuole quadrate hanno area 25 m² e 144 m². Si uniscono in un'unica aiuola quadrata con area uguale alla somma delle due. Quanto misura il suo lato?",
   "answer": 13,
   "unit": "m",
   "explain": "Area totale: 25 + 144 = 169 m². Lato = √169 = 13 m (non 5 + 12 = 17)."
  },
  {
   "type": "tf",
   "q": "Se l'area di un quadrato diventa 4 volte più grande, anche il suo lato diventa 4 volte più grande.",
   "answer": false,
   "explain": "Falso: il lato è la radice dell'area e √4 = 2, quindi il lato raddoppia. Esempio: area 9 → lato 3; area 36 → lato 6."
  },
  {
   "type": "mc",
   "q": "Anna dice: «√50 = 25, perché 25 + 25 = 50». Qual è il suo errore?",
   "options": [
    "Ha cercato la metà di 50, ma la radice è il numero che moltiplicato per se stesso dà 50: circa 7,07.",
    "Doveva scrivere √50 = 5.",
    "Non c'è errore: la radice è sempre la metà."
   ],
   "answer": 0,
   "explain": "Infatti 25 × 25 = 625, non 50. Poiché 7² = 49 e 8² = 64, √50 è poco più di 7."
  },
  {
   "type": "num",
   "q": "Quanti numeri interi ci sono tra √10 e √90 (esclusi gli estremi)?",
   "answer": 6,
   "explain": "3² = 9 < 10 < 16 = 4², quindi √10 è tra 3 e 4; 9² = 81 < 90 < 100, quindi √90 è tra 9 e 10. Gli interi in mezzo sono 4, 5, 6, 7, 8, 9: sono 6."
  },
  {
   "type": "order",
   "q": "Ordina dal più piccolo al più grande.",
   "items": [
    "6,9",
    "√48",
    "7",
    "√50"
   ],
   "explain": "√48 ≈ 6,93 (infatti 6,9² = 47,61 < 48), 7 = √49, √50 ≈ 7,07. Ordine: 6,9 < √48 < 7 < √50."
  }
 ]
});
