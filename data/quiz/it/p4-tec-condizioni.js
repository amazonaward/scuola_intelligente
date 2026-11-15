QBANK("it", "p4-tec-condizioni", {
 "f": [
  {
   "type": "mc",
   "q": "Nei linguaggi di programmazione inglesi, quale parola significa «allora»?",
   "options": [
    "if",
    "then",
    "else"
   ],
   "answer": 1,
   "explain": "if = se, then = allora, else = altrimenti."
  },
  {
   "type": "tf",
   "q": "Il simbolo «>» significa «maggiore di».",
   "answer": true,
   "explain": "Vero: 7 > 5 si legge «7 è maggiore di 5»."
  },
  {
   "type": "mc",
   "q": "Una porta automatica usa la regola «SE il sensore vede una persona ALLORA apri». Che cosa controlla la porta?",
   "options": [
    "Che ora è",
    "Di che colore sono i vestiti",
    "Se c'è una persona davanti"
   ],
   "answer": 2,
   "explain": "La condizione è «il sensore vede una persona?»: se è vera la porta si apre."
  },
  {
   "type": "tf",
   "q": "Se la condizione è falsa, il computer fa comunque l'azione dopo ALLORA.",
   "answer": false,
   "explain": "Falso: se la condizione è falsa l'azione dopo ALLORA viene saltata."
  },
  {
   "type": "text",
   "q": "Come si chiama, in un programma, un valore che può cambiare durante il gioco, come «punti» o «vite»?",
   "answer": [
    "variabile",
    "la variabile",
    "una variabile"
   ],
   "explain": "Una variabile è come una scatola con un nome in cui il programma tiene un valore che può cambiare."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "monete = 12. SE monete > 10 ALLORA dire «Compra il cappello» ALTRIMENTI dire «Risparmia». Che cosa dice il programma?",
   "options": [
    "Risparmia",
    "Compra il cappello",
    "Tutte e due le frasi"
   ],
   "answer": 1,
   "explain": "12 > 10 è vero, quindi si esegue l'azione dopo ALLORA."
  },
  {
   "type": "num",
   "q": "punti = 8. SE punti > 5 ALLORA punti diventa punti + 10 ALTRIMENTI punti diventa punti − 1. Quanti punti ci sono alla fine?",
   "answer": 18,
   "tol": 0,
   "explain": "8 > 5 è vero, quindi si fa punti + 10: 8 + 10 = 18."
  },
  {
   "type": "tf",
   "q": "(4 > 2) O (1 > 9) è vero.",
   "answer": true,
   "explain": "Vero: 4 > 2 è vero e con O basta una condizione vera."
  },
  {
   "type": "mc",
   "q": "SE ho fame E il frigo è vuoto ALLORA ordino la pizza. Ho fame, ma nel frigo c'è del formaggio. Ordino la pizza?",
   "options": [
    "Sì, ordino la pizza",
    "No, perché le due condizioni non sono tutte e due vere",
    "Dipende dal giorno"
   ],
   "answer": 1,
   "explain": "Con E servono tutte e due le condizioni vere: il frigo non è vuoto, quindi l'azione non si fa."
  },
  {
   "type": "order",
   "q": "Metti in ordine i passi di un programma che dice «Hai vinto!» quando i punti superano 10.",
   "items": [
    "Crea la variabile punti",
    "Aggiungi 1 ai punti ogni volta che prendi una mela",
    "Controlla se punti > 10",
    "Se è vero, mostra «Hai vinto!»"
   ],
   "explain": "Prima serve la variabile, poi i punti cambiano, poi si controlla la condizione e solo se è vera si mostra il messaggio."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un compagno scrive: SE piove ALLORA prendi l'ombrello ALTRIMENTI prendi l'ombrello. Qual è il problema?",
   "options": [
    "Le due azioni sono uguali: la condizione non serve a niente",
    "Manca l'operatore E",
    "«Piove» non può essere una condizione"
   ],
   "answer": 0,
   "explain": "Qualunque sia la risposta, il programma fa la stessa cosa: la scelta SE…ALTRIMENTI è inutile."
  },
  {
   "type": "tf",
   "q": "(7 > 3) E NON (2 > 5) è vero.",
   "answer": true,
   "explain": "7 > 3 è vero. 2 > 5 è falso, e NON lo rovescia in vero. Vero E vero = vero."
  },
  {
   "type": "mc",
   "q": "Regola: SE (è sabato O è domenica) E non piove ALLORA vado al parco. Oggi è domenica e piove. Vado al parco?",
   "options": [
    "Sì, perché è domenica",
    "No, perché piove",
    "Sì, perché non è sabato"
   ],
   "answer": 1,
   "explain": "(sabato O domenica) è vero, ma «non piove» è falso: con E servono tutte e due vere, quindi non vado."
  },
  {
   "type": "num",
   "q": "punti = 6. Primo controllo: SE punti > 5 ALLORA punti diventa punti × 2. Secondo controllo: SE punti > 10 ALLORA punti diventa punti − 3. Quanti punti ci sono alla fine?",
   "answer": 9,
   "tol": 0,
   "explain": "Primo controllo: 6 > 5 è vero, quindi 6 × 2 = 12. Secondo controllo: 12 > 10 è vero, quindi 12 − 3 = 9."
  },
  {
   "type": "mc",
   "q": "Termostato: SE temperatura < 20 ALLORA accendi la caldaia ALTRIMENTI spegnila. La temperatura è esattamente 20 °C. Che cosa fa la caldaia?",
   "options": [
    "Non si può dire",
    "Si accende",
    "Resta spenta"
   ],
   "answer": 2,
   "explain": "20 < 20 è falso (20 non è minore di 20), quindi si esegue l'azione dopo ALTRIMENTI: la caldaia è spenta."
  }
 ]
});
