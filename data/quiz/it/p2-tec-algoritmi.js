QBANK("it", "p2-tec-algoritmi", {
 "f": [
  {
   "type": "tf",
   "q": "Una ricetta di cucina è un algoritmo.",
   "answer": true,
   "explain": "Vero: ha passi in ordine per arrivare a un risultato."
  },
  {
   "type": "mc",
   "q": "Quale parola dice al robot di fare la stessa cosa più volte?",
   "options": [
    "Ripeti",
    "Dormi",
    "Colora"
   ],
   "answer": 0,
   "explain": "RIPETI è il comando del ciclo."
  },
  {
   "type": "mc",
   "q": "Come esegue un robot le istruzioni?",
   "options": [
    "Una alla volta, nell'ordine scritto",
    "Tutte insieme a caso",
    "Solo quelle che gli piacciono"
   ],
   "answer": 0,
   "explain": "Il robot segue i passi alla lettera, uno dopo l'altro."
  },
  {
   "type": "text",
   "q": "Come si chiama il gioco di carte italiano con le frecce per imparare gli algoritmi senza computer? (C…)",
   "answer": [
    "codyroby",
    "cody roby",
    "cody-roby"
   ],
   "explain": "Si chiama CodyRoby ed è nato in Italia."
  },
  {
   "type": "order",
   "q": "Metti in ordine i passi per fare un panino.",
   "items": [
    "Prendo due fette di pane",
    "Spalmo la marmellata",
    "Chiudo il panino",
    "Mangio"
   ],
   "explain": "Prima il pane, poi la marmellata, poi si chiude e si mangia."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Il robot è sulla casella 1. Esegue «avanti 3» e poi «avanti 2». Su quale casella arriva?",
   "answer": 6,
   "explain": "1 + 3 = 4, poi 4 + 2 = 6."
  },
  {
   "type": "mc",
   "q": "Istruzione: SE il numero è pari ALLORA scrivi P, ALTRIMENTI scrivi D. Che cosa scrive con il 7?",
   "options": [
    "P",
    "D",
    "7"
   ],
   "answer": 1,
   "explain": "7 è dispari, quindi si usa l'altra scelta: D."
  },
  {
   "type": "mc",
   "q": "Che cosa fa il comando RIPETI in un algoritmo?",
   "options": [
    "Fa ripetere più volte gli stessi passi",
    "Cancella tutto",
    "Spegne il robot"
   ],
   "answer": 0,
   "explain": "Il ciclo evita di scrivere gli stessi passi tante volte."
  },
  {
   "type": "tf",
   "q": "Una ricetta con i passi in ordine sbagliato dà comunque lo stesso risultato.",
   "answer": false,
   "explain": "Falso: l'ordine dei passi cambia il risultato."
  },
  {
   "type": "text",
   "q": "Come si chiama la persona che scrive le istruzioni per il computer o per il robot?",
   "answer": [
    "programmatore",
    "il programmatore",
    "programmatrice",
    "la programmatrice"
   ],
   "explain": "È il programmatore (o la programmatrice)."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Ecco un algoritmo per una torta: 1. Metti la torta nel forno. 2. Mescola gli ingredienti. 3. Mangia. Qual è l'errore?",
   "options": [
    "Mescolare va fatto prima di infornare",
    "Non si può mangiare una torta",
    "Manca il computer"
   ],
   "answer": 0,
   "explain": "Il passo 2 deve venire prima del passo 1: l'ordine conta."
  },
  {
   "type": "num",
   "q": "RIPETI 3 volte: metti 2 cubetti rossi e 1 cubetto blu. Quanti cubetti metti in tutto?",
   "answer": 9,
   "explain": "Ogni giro: 2 + 1 = 3 cubetti. Tre giri: 3 × 3 = 9."
  },
  {
   "type": "mc",
   "q": "SE piove ALLORA prendo l'ombrello ALTRIMENTI gli occhiali da sole. Lunedì piove, martedì c'è il sole, mercoledì piove. Quante volte prendo l'ombrello?",
   "options": [
    "1 volta",
    "2 volte",
    "3 volte"
   ],
   "answer": 1,
   "explain": "L'ombrello serve lunedì e mercoledì: 2 volte."
  },
  {
   "type": "tf",
   "q": "Per far fare 10 passi avanti a un robot, «ripeti 10 volte: avanti» è più corto che scrivere «avanti» 10 volte.",
   "answer": true,
   "explain": "Vero: il ciclo rende l'algoritmo più corto e chiaro."
  },
  {
   "type": "order",
   "q": "Metti in ordine l'algoritmo per preparare lo zaino.",
   "items": [
    "Guardo l'orario di domani",
    "Metto nello zaino i libri delle materie",
    "Controllo l'astuccio",
    "Metto lo zaino vicino alla porta"
   ],
   "explain": "Prima si guarda l'orario, poi si riempie lo zaino, si controlla e si prepara per uscire."
  }
 ]
});
