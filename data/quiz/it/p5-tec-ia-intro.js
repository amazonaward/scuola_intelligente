QBANK("it", "p5-tec-ia-intro", {
  "f": [
    {
      "type": "mc",
      "q": "Che cosa vuol dire «IA»?",
      "options": [
        "Informazione automatica",
        "Internet avanzato",
        "Intelligenza artificiale"
      ],
      "answer": 2,
      "explain": "IA sta per intelligenza artificiale (in inglese AI)."
    },
    {
      "type": "tf",
      "q": "Un chatbot può dare risposte sbagliate.",
      "answer": true,
      "explain": "Anche se scrive bene, può sbagliare o inventare: bisogna sempre controllare."
    },
    {
      "type": "mc",
      "q": "Quale di queste cose usa l'intelligenza artificiale?",
      "options": [
        "Lo sblocco del telefono con il volto",
        "Un semaforo a tempo",
        "Un righello"
      ],
      "answer": 0,
      "explain": "Riconoscere un volto è un compito che l'IA impara dagli esempi; semaforo a tempo e righello non imparano."
    },
    {
      "type": "text",
      "q": "Con che cosa viene addestrata un'IA? Sono gli esempi che le facciamo vedere.",
      "answer": [
        "dati",
        "i dati",
        "dati di addestramento",
        "esempi",
        "gli esempi"
      ],
      "explain": "Un'IA impara dai dati: tanti esempi, spesso con etichette."
    },
    {
      "type": "tf",
      "q": "Un'intelligenza artificiale capisce le cose esattamente come un essere umano.",
      "answer": false,
      "explain": "L'IA calcola probabilità sugli esempi che ha visto; non capisce il mondo come una persona."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Come ha imparato il filtro antispam a riconoscere la posta indesiderata?",
      "options": [
        "Un programmatore ha scritto una regola per ogni possibile email",
        "Dalle email che gli utenti hanno segnalato come spam",
        "Leggendo ogni email con un impiegato"
      ],
      "answer": 1,
      "explain": "Le segnalazioni degli utenti sono le etichette: il sistema impara quali cose compaiono spesso nello spam."
    },
    {
      "type": "num",
      "q": "Una squadra ha 5.000 foto. Il 20% serve per la verifica e il resto per l'addestramento. Quante foto servono per l'addestramento?",
      "answer": 4000,
      "unit": "foto",
      "explain": "20% di 5.000 = 1.000 foto per la verifica; 5.000 − 1.000 = 4.000."
    },
    {
      "type": "mc",
      "q": "Un assistente vocale è stato addestrato solo con voci di adulti. Che cosa può succedere con la voce di un bambino?",
      "options": [
        "Capirà benissimo, perché le voci sono tutte uguali",
        "Si bloccherà e spegnerà il telefono",
        "Potrebbe capire peggio, perché non ha mai sentito esempi simili"
      ],
      "answer": 2,
      "explain": "L'IA impara solo dagli esempi che riceve: con voci mai sentite può sbagliare di più."
    },
    {
      "type": "order",
      "q": "Metti in ordine il percorso dell'informazione in una rete neurale.",
      "items": [
        "Strato di ingresso (per esempio i pixel)",
        "Strati nascosti",
        "Strato di uscita (la risposta)"
      ],
      "explain": "I dati entrano, gli strati nascosti scoprono forme sempre più complesse, l'ultimo strato dà la risposta."
    },
    {
      "type": "text",
      "q": "Come si chiamano i numeri sui collegamenti di una rete neurale che vengono aggiustati durante l'addestramento?",
      "answer": [
        "pesi",
        "i pesi",
        "peso",
        "il peso"
      ],
      "explain": "Addestrare una rete vuol dire aggiustare i suoi pesi poco alla volta finché le risposte sono giuste."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Un'IA è addestrata con 1.000 foto di labrador e solo 10 foto di altre razze di cani. Qual è il problema più probabile?",
      "options": [
        "Riconoscerà bene i labrador ma sbaglierà spesso con le altre razze",
        "Riconoscerà tutte le razze allo stesso modo",
        "Non riconoscerà nemmeno i labrador"
      ],
      "answer": 0,
      "explain": "Dati sbilanciati: ha visto pochissimi esempi delle altre razze, quindi sbaglia di più con loro."
    },
    {
      "type": "tf",
      "q": "Se un chatbot scrive in modo molto sicuro e convincente, allora la sua risposta è sicuramente giusta.",
      "answer": false,
      "explain": "Un chatbot può scrivere con sicurezza anche cose inventate (allucinazioni): bisogna controllare su fonti affidabili."
    },
    {
      "type": "mc",
      "q": "Quale di questi compiti è adatto a un'IA che impara dagli esempi, perché è difficile scriverne le regole?",
      "options": [
        "Sommare due numeri",
        "Riconoscere se in una foto c'è un cane",
        "Accendere una luce ogni giorno alle 18"
      ],
      "answer": 1,
      "explain": "Sommare e accendere a un'ora fissa si fanno con regole semplici; riconoscere un cane è troppo vario, quindi si impara dagli esempi."
    },
    {
      "type": "num",
      "q": "Un'IA guarda 200 foto nuove e ne riconosce correttamente 170. Qual è la percentuale di risposte giuste?",
      "answer": 85,
      "unit": "%",
      "explain": "170 ÷ 200 = 0,85, cioè 85 su 100 = 85%."
    },
    {
      "type": "text",
      "q": "Come si chiama il programma di IA che nel 2016 batté il campione Lee Sedol a Go?",
      "answer": [
        "alphago",
        "alpha go"
      ],
      "explain": "AlphaGo imparò studiando partite umane e giocando milioni di partite contro se stesso."
    }
  ]
});
