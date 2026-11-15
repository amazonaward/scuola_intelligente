QBANK("it", "p5-mat-probabilita", {
  "f": [
    {
      "type": "mc",
      "q": "Che cos'è la moda di un insieme di dati?",
      "options": [
        "Il dato che compare più spesso",
        "Il dato che sta in mezzo",
        "La somma di tutti i dati"
      ],
      "answer": 0,
      "explain": "La moda è il dato con la frequenza più alta, cioè quello che si ripete più volte."
    },
    {
      "type": "tf",
      "q": "Lanciando un normale dado a 6 facce, ottenere un numero maggiore di 6 è un evento impossibile.",
      "answer": true,
      "explain": "Vero: sul dado ci sono solo i numeri da 1 a 6, quindi un numero maggiore di 6 non può uscire."
    },
    {
      "type": "num",
      "q": "Qual è la media di 2, 8 e 11?",
      "answer": 7,
      "explain": "Somma: 2 + 8 + 11 = 21. Divido per 3 dati: 21 : 3 = 7."
    },
    {
      "type": "mc",
      "q": "Quale di questi eventi è certo?",
      "options": [
        "Lanciando un dado esce il 6",
        "Lanciando un dado esce un numero minore di 7",
        "Lanciando una moneta esce testa"
      ],
      "answer": 1,
      "explain": "Un dado ha solo i numeri da 1 a 6, quindi un numero minore di 7 esce sempre: è un evento certo."
    },
    {
      "type": "text",
      "q": "Come si chiama il numero di volte in cui compare una risposta in un'indagine?",
      "answer": [
        "frequenza",
        "la frequenza"
      ],
      "explain": "Si chiama frequenza: per esempio, se 6 alunni scelgono il calcio, la frequenza del calcio è 6."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Marco ha preso questi voti: 6, 7, 9, 10. Qual è la sua media?",
      "answer": 8,
      "explain": "Somma: 6 + 7 + 9 + 10 = 32. Media: 32 : 4 = 8."
    },
    {
      "type": "num",
      "q": "Qual è la mediana di 8, 3, 12, 5, 9, 7?",
      "answer": 7.5,
      "tol": 0.01,
      "explain": "In ordine: 3, 5, 7, 8, 9, 12. I dati sono 6 (pari): la mediana è la media dei due centrali, (7 + 8) : 2 = 7,5."
    },
    {
      "type": "mc",
      "q": "Lanciando un dado, qual è la probabilità che esca un numero maggiore di 4?",
      "options": [
        "1/2",
        "1/3",
        "1/6"
      ],
      "answer": 1,
      "explain": "I casi favorevoli sono 2 (il 5 e il 6) su 6 possibili: 2/6 = 1/3."
    },
    {
      "type": "tf",
      "q": "In un sacchetto ci sono 3 palline rosse e 1 blu. Pescare una rossa è più probabile che pescare la blu.",
      "answer": true,
      "explain": "Vero: la probabilità di pescare una rossa è 3/4, quella di pescare la blu è 1/4."
    },
    {
      "type": "num",
      "q": "Le altezze di quattro amici sono 138 cm, 142 cm, 150 cm e 145 cm. Qual è il campo di variazione?",
      "answer": 12,
      "unit": "cm",
      "explain": "Campo di variazione = valore più alto − valore più basso = 150 − 138 = 12 cm."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Giulia ha preso 6, 7 e 9 nelle prime tre verifiche. Che voto deve prendere nella quarta per avere la media di 8?",
      "answer": 10,
      "explain": "Per avere media 8 con 4 verifiche servono 8 × 4 = 32 punti. Finora ne ha 6 + 7 + 9 = 22. Deve prendere 32 − 22 = 10."
    },
    {
      "type": "mc",
      "q": "In un paese 4 persone guadagnano 1000 € al mese e una persona ne guadagna 11 000. Quale indice descrive meglio il guadagno «tipico»?",
      "options": [
        "La media (3000 €)",
        "La mediana (1000 €)",
        "La somma (15 000 €)"
      ],
      "answer": 1,
      "explain": "Un solo valore molto alto fa salire la media a 3000 €, che non assomiglia a quasi nessuno. La mediana (1000 €) rappresenta meglio la situazione tipica."
    },
    {
      "type": "tf",
      "q": "In un sacchetto ci sono 3 palline rosse, 2 blu e 5 verdi. La probabilità di NON pescare una verde è 1/2.",
      "answer": true,
      "explain": "Le palline non verdi sono 3 + 2 = 5 su 10 in totale: 5/10 = 1/2."
    },
    {
      "type": "num",
      "q": "In un sacchetto ci sono 5 palline rosse e 15 blu. Qual è la probabilità di pescare una rossa, espressa in percentuale?",
      "answer": 25,
      "unit": "%",
      "explain": "Casi favorevoli 5 su 20 possibili: 5/20 = 1/4 = 25/100 = 25%."
    },
    {
      "type": "order",
      "q": "Metti in ordine i passaggi per trovare la mediana di un numero PARI di dati.",
      "items": [
        "Metto i dati in ordine crescente",
        "Individuo i due valori centrali",
        "Sommo i due valori centrali",
        "Divido la somma per 2"
      ],
      "explain": "Con un numero pari di dati non c'è un solo valore in mezzo: si ordinano i dati, si prendono i due centrali e se ne calcola la media."
    }
  ]
});
