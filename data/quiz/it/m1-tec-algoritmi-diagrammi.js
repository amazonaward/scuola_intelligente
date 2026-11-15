QBANK("it", "m1-tec-algoritmi-diagrammi", {
 "f": [
  {
   "type": "mc",
   "q": "Che cosa indicano le frecce in un diagramma di flusso?",
   "options": [
    "Un errore",
    "Una decisione",
    "Il passo successivo, cioè il flusso dell'algoritmo"
   ],
   "answer": 2,
   "explain": "Le frecce collegano i blocchi e mostrano in che ordine si eseguono i passi."
  },
  {
   "type": "tf",
   "q": "Un diagramma di flusso ha un solo blocco di Inizio.",
   "answer": true,
   "explain": "Vero: l'algoritmo comincia da un solo punto, mentre può avere più di una Fine."
  },
  {
   "type": "text",
   "q": "Come si chiama chi esegue un algoritmo, che sia una persona o una macchina?",
   "answer": [
    "esecutore",
    "l'esecutore"
   ],
   "explain": "L'esecutore fa esattamente ciò che è scritto: un computer è un esecutore velocissimo ma senza fantasia."
  },
  {
   "type": "mc",
   "q": "Quale di queste istruzioni NON è ambigua?",
   "options": [
    "Aggiungi un po' di sale",
    "Aggiungi 5 g di sale",
    "Aggiungi sale quanto basta",
    "Aggiungi una bella manciata di sale"
   ],
   "answer": 1,
   "explain": "Solo «5 g» indica una quantità precisa che si può capire in un solo modo."
  },
  {
   "type": "tf",
   "q": "Un buon algoritmo deve funzionare solo per un caso particolare, non per tutti i casi dello stesso tipo.",
   "answer": false,
   "explain": "Falso: deve essere generale, cioè valido per tutti i casi dello stesso tipo."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Usa l'algoritmo di Euclide: qual è il MCD di 56 e 24?",
   "answer": 8,
   "explain": "56 : 24 dà resto 8; 24 : 8 dà resto 0. L'ultimo resto diverso da 0 è 8, quindi MCD(56, 24) = 8."
  },
  {
   "type": "mc",
   "q": "In Scratch, quale blocco corrisponde alla struttura della selezione (il rombo del diagramma)?",
   "options": [
    "«ripeti 10 volte»",
    "«se … allora … altrimenti»",
    "i blocchi incastrati uno sotto l'altro"
   ],
   "answer": 1,
   "explain": "Il blocco «se … allora … altrimenti» sceglie tra due strade, come il rombo."
  },
  {
   "type": "order",
   "q": "Metti in ordine i passi dell'algoritmo «pari o dispari».",
   "items": [
    "Inizio",
    "Leggi il numero N",
    "Calcola il resto di N : 2",
    "Se il resto è 0 scrivi «pari», altrimenti scrivi «dispari»",
    "Fine"
   ],
   "explain": "Prima si legge l'input, poi si elabora il resto della divisione, poi si mostra il risultato."
  },
  {
   "type": "tf",
   "q": "Ogni programma Scratch si può trasformare in un diagramma di flusso, e viceversa.",
   "answer": true,
   "explain": "Vero: sequenza, selezione e iterazione si ritrovano sia nei blocchi sia nei simboli del diagramma."
  },
  {
   "type": "num",
   "q": "Un algoritmo esegue: X ← 5; poi ripete 3 volte «X ← X + 2»; infine scrive X. Che numero scrive?",
   "answer": 11,
   "explain": "Partendo da 5: 7, 9, 11. Dopo 3 ripetizioni X vale 5 + 3 × 2 = 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Quale di questi algoritmi contiene un ciclo infinito?",
   "options": [
    "X ← 10; finché X > 0 ripeti X ← X − 1",
    "X ← 1; finché X > 0 ripeti X ← X + 1",
    "Ripeti 5 volte «scrivi ciao»",
    "Se X > 0 scrivi «ciao»"
   ],
   "answer": 1,
   "explain": "Nel secondo X cresce sempre e resta maggiore di 0: la condizione per uscire non diventa mai vera."
  },
  {
   "type": "mc",
   "q": "Un algoritmo per fare il tè dice «Finché l'acqua non bolle, aspetta», ma si è dimenticato il passo «Accendi il bollitore». Quale proprietà viene violata?",
   "options": [
    "Generale",
    "Non ambiguo",
    "Eseguibile",
    "Finito"
   ],
   "answer": 3,
   "explain": "Senza accendere il bollitore, l'acqua non bolle mai: l'attesa non termina e l'algoritmo non è finito."
  },
  {
   "type": "tf",
   "q": "In un diagramma di flusso, un'iterazione si disegna con una freccia che torna indietro verso un blocco precedente.",
   "answer": true,
   "explain": "Vero: la freccia all'indietro fa ripetere i passi finché la condizione lo richiede."
  },
  {
   "type": "text",
   "q": "Come si chiama la descrizione di un algoritmo scritta con frasi simili a un linguaggio di programmazione, ma senza regole rigide?",
   "answer": [
    "pseudocodice",
    "lo pseudocodice",
    "pseudo-codice",
    "pseudo codice"
   ],
   "explain": "Lo pseudocodice sta a metà tra il linguaggio naturale e il codice vero."
  },
  {
   "type": "num",
   "q": "Un algoritmo esegue: S ← 0; N ← 4; finché N > 0 ripete «S ← S + N; N ← N − 1»; infine scrive S. Che numero scrive?",
   "answer": 10,
   "explain": "S = 4 + 3 + 2 + 1 = 10: ad ogni ciclo si aggiunge N e N diminuisce di 1, finché N arriva a 0."
  }
 ]
});
