QBANK("it", "m3-tec-ia-dati", {
 "f": [
  {
   "type": "mc",
   "q": "Quale di questi è un dato non strutturato?",
   "options": [
    "Una tabella di voti",
    "Una fotografia",
    "Un elenco di prezzi"
   ],
   "answer": 1,
   "explain": "Foto, testi, audio e video non sono ordinati in tabelle: sono dati non strutturati, la grande maggioranza."
  },
  {
   "type": "tf",
   "q": "Un grande modello linguistico (LLM) è addestrato soprattutto a prevedere la parola successiva di un testo.",
   "answer": true,
   "explain": "Vero: ripetendo la previsione tante volte il modello scrive frasi intere."
  },
  {
   "type": "text",
   "q": "Come si chiama l'unità minima di informazione del computer, che vale 0 oppure 1?",
   "answer": [
    "bit",
    "il bit"
   ],
   "explain": "Il bit (0 o 1) è l'unità base: ogni dato nel computer diventa una sequenza di bit."
  },
  {
   "type": "mc",
   "q": "A quale gioco il programma AlphaGo batté nel 2016 il campione Lee Sedol?",
   "options": [
    "Scacchi",
    "Dama",
    "Go"
   ],
   "answer": 2,
   "explain": "AlphaGo vinse a Go, un gioco con più posizioni possibili che atomi nell'universo osservabile."
  },
  {
   "type": "num",
   "q": "In che anno il computer Deep Blue sconfisse il campione di scacchi Garry Kasparov?",
   "answer": 1997,
   "explain": "Deep Blue di IBM vinse nel 1997, soprattutto con il calcolo a forza bruta."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Quanti bit ci sono in 3 byte? (1 byte = 8 bit)",
   "answer": 24,
   "unit": "bit",
   "explain": "3 × 8 = 24 bit."
  },
  {
   "type": "mc",
   "q": "Una piattaforma raggruppa gli utenti con gusti simili, senza nessuna etichetta predefinita. Che tipo di apprendimento usa?",
   "options": [
    "Supervisionato",
    "Non supervisionato",
    "Nessun apprendimento"
   ],
   "answer": 1,
   "explain": "Senza etichette il modello trova da solo gruppi e schemi nei dati: è apprendimento non supervisionato."
  },
  {
   "type": "mc",
   "q": "Che cos'è la \"bolla di filtraggio\" (filter bubble)?",
   "options": [
    "Vedere quasi solo contenuti e idee simili a quelle che già ti piacciono",
    "Un filtro che elimina i virus dal computer",
    "Un errore nel disco rigido"
   ],
   "answer": 0,
   "explain": "I suggerimenti basati sui tuoi gusti possono chiuderti in una bolla e farti vedere sempre le stesse idee."
  },
  {
   "type": "tf",
   "q": "Un neurone artificiale invia un segnale ai neuroni successivi solo se la somma pesata dei suoi ingressi supera una soglia.",
   "answer": true,
   "explain": "Vero: il neurone moltiplica gli input per i pesi, somma e \"si attiva\" se supera la soglia."
  },
  {
   "type": "order",
   "q": "Metti in ordine i passi con cui un chatbot (LLM) scrive una frase.",
   "items": [
    "Riceve il testo di partenza",
    "Calcola la probabilità delle parole successive possibili",
    "Sceglie la parola più adatta",
    "Aggiunge la parola e ripete il ciclo"
   ],
   "explain": "Il modello non \"sa\" i fatti: calcola probabilità e ripete il ciclo parola dopo parola."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un modello ha il 99% di risposte corrette sui dati di addestramento, ma solo il 70% sui dati di test mai visti. Qual è il problema più probabile?",
   "options": [
    "Il modello ha \"memorizzato\" gli esempi invece di imparare a generalizzare",
    "Il computer ha poca memoria RAM",
    "I dati di test sono troppo facili",
    "Il modello è troppo semplice e ha imparato troppo poco"
   ],
   "answer": 0,
   "explain": "È il sovradattamento (overfitting): il modello va bene sui dati già visti ma sbaglia su quelli nuovi."
  },
  {
   "type": "num",
   "q": "Un neurone ha input 2 e 3, pesi 1,5 e −2 e bias 4. Quanto vale la somma pesata più il bias?",
   "answer": 1,
   "explain": "2 × 1,5 = 3; 3 × (−2) = −6; 3 − 6 + 4 = 1."
  },
  {
   "type": "mc",
   "q": "Un'app di ritocco foto chiede l'accesso a tutti i tuoi contatti e alla posizione per funzionare. Quale principio di protezione dei dati viene ignorato?",
   "options": [
    "Si dovrebbero raccogliere solo i dati davvero necessari allo scopo (minimizzazione)",
    "I dati personali vanno sempre pubblicati",
    "Più dati si raccolgono, meglio è per l'utente",
    "Il consenso non serve mai"
   ],
   "answer": 0,
   "explain": "Il GDPR chiede di raccogliere solo i dati necessari: un'app per le foto non ha bisogno dei contatti."
  },
  {
   "type": "tf",
   "q": "Il computer Deep Blue batté Kasparov nel 1997 usando soprattutto reti neurali come quelle dei moderni chatbot.",
   "answer": false,
   "explain": "Falso: Deep Blue si basava soprattutto sul calcolo a forza bruta; le reti neurali servirono nel 2016 per AlphaGo."
  },
  {
   "type": "mc",
   "q": "Una malattia colpisce 1 persona su 1000. Un modello dice sempre \"sano\" e ha il 99,9% di accuratezza. Perché non è un buon modello?",
   "options": [
    "Non riconosce mai nessun malato: l'accuratezza da sola inganna quando i casi sono rari",
    "Perché 99,9% è troppo basso per un modello",
    "Perché dovrebbe dire sempre \"malato\"",
    "Perché non usa abbastanza bit"
   ],
   "answer": 0,
   "explain": "Il modello sbaglia proprio sull'unico caso che interessa: serve guardare anche quanti malati riconosce, non solo la percentuale totale."
  }
 ]
});
