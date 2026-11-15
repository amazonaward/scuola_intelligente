QBANK("it", "m3-mat-probabilita", {
 "f": [
  {
   "type": "mc",
   "q": "Quanti sono i risultati possibili lanciando una moneta?",
   "options": [
    "1",
    "2",
    "6"
   ],
   "answer": 1,
   "explain": "La moneta ha due facce, quindi i risultati possibili sono 2: testa o croce."
  },
  {
   "type": "num",
   "q": "Qual è la moda della serie 2, 3, 3, 5, 3, 7?",
   "answer": 3,
   "explain": "La moda è il valore che compare più volte: il 3 compare tre volte."
  },
  {
   "type": "tf",
   "q": "Un evento certo ha probabilità 1.",
   "answer": true,
   "explain": "Un evento che accade sempre ha probabilità 1 (cioè 100%)."
  },
  {
   "type": "mc",
   "q": "In una classe di 24 alunni, 12 sono femmine. Qual è la frequenza relativa delle femmine?",
   "options": [
    "1/4",
    "12",
    "1/2"
   ],
   "answer": 2,
   "explain": "Frequenza relativa = 12 : 24 = 1/2 (cioè 0,5 o 50%)."
  },
  {
   "type": "text",
   "q": "Come si chiama un evento che non può mai accadere?",
   "answer": [
    "impossibile",
    "evento impossibile",
    "l'evento impossibile",
    "un evento impossibile"
   ],
   "explain": "Un evento che non può mai verificarsi è un evento impossibile e ha probabilità 0."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Giada ha preso 6, 7, 9 e 8 nei primi quattro compiti. Che voto deve prendere nel quinto per avere media 8?",
   "answer": 10,
   "explain": "Per avere media 8 con 5 voti serve una somma di 8 × 5 = 40. Finora: 6 + 7 + 9 + 8 = 30. Mancano 40 − 30 = 10."
  },
  {
   "type": "num",
   "q": "Pesco una carta da un mazzo di 40 carte, che contiene 4 assi. Qual è la probabilità, in percentuale, di pescare un asso?",
   "answer": 10,
   "unit": "%",
   "explain": "P = casi favorevoli : casi possibili = 4 : 40 = 1/10 = 10%."
  },
  {
   "type": "mc",
   "q": "In un sondaggio, 9 persone su 36 scelgono il gelato al limone. Qual è la frequenza relativa?",
   "options": [
    "0,9",
    "0,25",
    "0,36"
   ],
   "answer": 1,
   "explain": "Frequenza relativa = 9 : 36 = 1/4 = 0,25 (cioè 25%)."
  },
  {
   "type": "mc",
   "q": "Nella serie 4, 4, 5, 8, 9 il valore 5 è…",
   "options": [
    "la moda",
    "la mediana",
    "la media"
   ],
   "answer": 1,
   "explain": "I dati sono già ordinati e il valore centrale è 5: è la mediana. La moda è 4 e la media è 30 : 5 = 6."
  },
  {
   "type": "tf",
   "q": "In un aerogramma, un settore di 54° rappresenta il 20% dei dati.",
   "answer": false,
   "explain": "Falso: 54° su 360° è 54 : 360 = 0,15, cioè il 15%. Il 20% corrisponderebbe a 72°."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un'urna contiene 2 palline rosse e 3 blu. Estraggo una pallina, la rimetto dentro e ne estraggo un'altra. Qual è la probabilità (in %) che siano entrambe rosse?",
   "answer": 16,
   "unit": "%",
   "explain": "Con reinserimento le estrazioni sono indipendenti: P = 2/5 × 2/5 = 4/25 = 16%."
  },
  {
   "type": "num",
   "q": "Un sacchetto contiene 3 caramelle alla fragola e 2 alla menta. Ne prendo due senza rimetterle dentro. Qual è la probabilità (in %) che siano entrambe alla fragola?",
   "answer": 30,
   "unit": "%",
   "explain": "Prima estrazione: 3/5. Poi restano 2 fragole su 4 caramelle: 2/4. P = 3/5 × 2/4 = 6/20 = 30%."
  },
  {
   "type": "mc",
   "q": "Cinque amici hanno una media di 7 punti in un gioco. Arriva un sesto amico che fa 13 punti. Qual è la nuova media?",
   "options": [
    "7,5",
    "8",
    "9",
    "10"
   ],
   "answer": 1,
   "explain": "Somma dei cinque: 7 × 5 = 35. Con il sesto: 35 + 13 = 48. Nuova media: 48 : 6 = 8."
  },
  {
   "type": "tf",
   "q": "Lanciando due dadi, ottenere somma 7 è più probabile che ottenere somma 12.",
   "answer": true,
   "explain": "La somma 7 si ottiene in 6 modi su 36 (1+6, 2+5, 3+4 e le coppie inverse), la somma 12 in uno solo (6+6)."
  },
  {
   "type": "order",
   "q": "Ordina questi eventi dal meno probabile al più probabile.",
   "items": [
    "Esce 7 con un dado",
    "Esce 6 con un dado",
    "Esce un numero pari con un dado",
    "Esce un numero minore di 6 con un dado",
    "Esce un numero da 1 a 6 con un dado"
   ],
   "explain": "Le probabilità sono: 0 (impossibile), 1/6, 3/6 = 1/2, 5/6 e 1 (certo)."
  }
 ]
});
