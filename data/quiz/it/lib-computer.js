QBANK("it", "lib-computer", {
  "f": [
    {
      "type": "mc",
      "q": "Dove restano salvati foto e giochi anche a computer spento?",
      "options": [
        "Nella RAM",
        "Nella ventola",
        "Nell'SSD"
      ],
      "answer": 2,
      "explain": "L'SSD è il magazzino che non dimentica: i dati restano anche senza corrente."
    },
    {
      "type": "tf",
      "q": "La tastiera è un dispositivo di ingresso.",
      "answer": true,
      "explain": "Manda al computer un codice per ogni tasto premuto: porta i tuoi comandi dentro al computer."
    },
    {
      "type": "text",
      "q": "Come si chiamano i milioni di piccoli puntini che formano l'immagine sullo schermo?",
      "answer": [
        "pixel",
        "i pixel"
      ],
      "explain": "Lo schermo è fatto di milioni di puntini colorati, i pixel."
    },
    {
      "type": "mc",
      "q": "Quale pezzo calcola il colore dei pixel e disegna le immagini?",
      "options": [
        "La scheda madre",
        "La scheda video",
        "Il mouse"
      ],
      "answer": 1,
      "explain": "La scheda video (GPU) calcola il colore di ogni pixel e manda l'immagine al monitor."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Una scheda video prepara 60 immagini al secondo. Quante immagini prepara in 5 secondi di gioco?",
      "answer": 300,
      "unit": "immagini",
      "explain": "60 × 5 = 300 immagini."
    },
    {
      "type": "mc",
      "q": "Quando apri un gioco, i suoi dati vengono copiati dall'SSD nella RAM. Perché?",
      "options": [
        "Perché la RAM è molto più veloce e la CPU li prende al volo",
        "Perché l'SSD si svuota quando apri un gioco",
        "Perché la RAM conserva i dati per sempre",
        "Perché la RAM è più grande dell'SSD"
      ],
      "answer": 0,
      "explain": "La RAM è il banco di lavoro velocissimo: la CPU legge lì i dati dei programmi aperti senza aspettare."
    },
    {
      "type": "tf",
      "q": "Se togli la corrente al computer, le foto salvate nell'SSD spariscono.",
      "answer": false,
      "explain": "È falso: l'SSD usa chip di memoria flash e conserva i dati anche senza corrente. Si cancella solo la RAM."
    },
    {
      "type": "order",
      "q": "Metti in ordine il viaggio di una lettera che scrivi sulla tastiera.",
      "items": [
        "Premi il tasto sulla tastiera",
        "La tastiera manda un codice al computer",
        "La CPU elabora il codice",
        "Il monitor mostra la lettera"
      ],
      "explain": "Ingresso (tastiera), elaborazione (CPU), uscita (monitor): è il ciclo di ogni computer."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Il computer di Luca si spegne da solo dopo mezz'ora di gioco. Dentro il case la ventola della CPU è piena di polvere. Qual è la spiegazione più probabile?",
      "options": [
        "La RAM si è riempita di foto",
        "Il monitor è troppo grande",
        "Il mouse manda troppi comandi",
        "La CPU si scalda troppo e si spegne per non bruciarsi"
      ],
      "answer": 3,
      "explain": "Con la ventola intasata il calore non viene portato via: la CPU si scalda e si spegne per proteggersi."
    },
    {
      "type": "mc",
      "q": "Quale confronto tra RAM e SSD è corretto?",
      "options": [
        "La RAM conserva i dati per anni, l'SSD li perde quando spegni",
        "La RAM è velocissima ma si svuota senza corrente; l'SSD è più lento ma conserva i dati",
        "Sono la stessa cosa con due nomi diversi",
        "L'SSD esegue le istruzioni dei programmi, la RAM no"
      ],
      "answer": 1,
      "explain": "RAM = banco di lavoro veloce e temporaneo; SSD = magazzino per conservare. Le istruzioni le esegue la CPU."
    },
    {
      "type": "tf",
      "q": "Il mouse è un dispositivo di uscita, perché mostra la freccia sullo schermo.",
      "answer": false,
      "explain": "È falso: il mouse è di ingresso, manda al computer i movimenti. È il monitor, di uscita, a mostrare la freccia."
    },
    {
      "type": "num",
      "q": "Un monitor ha 400 pixel in larghezza e 300 in altezza e la scheda video calcola 60 immagini al secondo. Quanti colori di pixel deve calcolare in un secondo?",
      "answer": 7200000,
      "unit": "colori",
      "explain": "400 × 300 = 120 000 pixel per immagine; 120 000 × 60 = 7 200 000."
    }
  ]
});
