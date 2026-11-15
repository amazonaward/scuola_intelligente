QBANK("it", "p3-tec-coding-blocchi", {
  "f": [
    {
      "type": "mc",
      "q": "In Scratch, di che colore sono i blocchi di Movimento (come «fai 10 passi»)?",
      "options": [
        "Blu",
        "Giallo",
        "Viola"
      ],
      "answer": 0,
      "explain": "I blocchi di Movimento sono blu. Gli Eventi sono gialli, l'Aspetto viola, il Controllo arancione."
    },
    {
      "type": "tf",
      "q": "Il computer fa esattamente quello che c'è scritto nel programma.",
      "answer": true,
      "explain": "Vero: il computer è un esecutore preciso ma senza fantasia."
    },
    {
      "type": "mc",
      "q": "Che cosa fa il blocco «attendi 1 secondo»?",
      "options": [
        "Fa partire il programma",
        "Fa girare il personaggio",
        "Fa una pausa"
      ],
      "answer": 2,
      "explain": "Attendi serve a fare una pausa di un certo tempo."
    },
    {
      "type": "text",
      "q": "Come si chiama il programma a blocchi colorati creato al MIT, con il gatto arancione?",
      "answer": [
        "scratch"
      ],
      "explain": "Si chiama Scratch ed è nato al MIT di Boston."
    },
    {
      "type": "mc",
      "q": "Nel 1947 gli ingegneri trovarono nel computer Mark II il primo «bug» vero. Che animale era?",
      "options": [
        "Una formica",
        "Una falena",
        "Un ragno"
      ],
      "answer": 1,
      "explain": "Una falena era rimasta incastrata tra i contatti. «Bug» in inglese significa insetto."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un programma dice: «ripeti 6 volte: cambia costume, attendi 0,5 secondi». Quanti secondi di attesa ci sono in tutto?",
      "answer": 3,
      "unit": "secondi",
      "explain": "6 giri × 0,5 secondi = 3 secondi."
    },
    {
      "type": "mc",
      "q": "Il robot deve andare avanti di 2 caselle, girare a sinistra e andare avanti di 4 caselle. Quale programma è giusto?",
      "options": [
        "ripeti 4 volte [avanti]; gira a sinistra; ripeti 2 volte [avanti]",
        "ripeti 2 volte [avanti]; gira a sinistra; ripeti 4 volte [avanti]",
        "ripeti 6 volte [avanti]; gira a sinistra"
      ],
      "answer": 1,
      "explain": "Prima 2 passi avanti, poi la curva a sinistra, poi 4 passi avanti. L'ordine conta!"
    },
    {
      "type": "tf",
      "q": "Nel blocco «ripeti 4 volte» le istruzioni che ci sono dentro vengono eseguite una volta sola.",
      "answer": false,
      "explain": "Falso: le istruzioni dentro il ciclo si ripetono 4 volte."
    },
    {
      "type": "order",
      "q": "Una ricetta è un algoritmo. Metti in ordine i passi della torta.",
      "items": [
        "Rompi le uova",
        "Aggiungi lo zucchero",
        "Mescola",
        "Inforna"
      ],
      "explain": "Se inforni prima di mescolare il risultato è un disastro: in una sequenza l'ordine conta."
    },
    {
      "type": "text",
      "q": "Come si chiama il lavoro di trovare e correggere un errore in un programma? (de…)",
      "answer": [
        "debug",
        "fare debug",
        "il debug",
        "fare il debug"
      ],
      "explain": "Si chiama fare debug: si prova il programma, si cerca l'errore e lo si corregge."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un ciclo dice: «ripeti 5 volte: metti 3 cubetti, togli 1 cubetto». Quanti cubetti restano alla fine?",
      "answer": 10,
      "unit": "cubetti",
      "explain": "Ad ogni giro i cubetti aumentano di 3 − 1 = 2. Dopo 5 giri: 5 × 2 = 10 cubetti."
    },
    {
      "type": "mc",
      "q": "Marta vuole disegnare un quadrato e scrive: «ripeti 3 volte: avanti 10 passi, ruota di 90°». Che cosa disegna?",
      "options": [
        "Un quadrato completo",
        "Tre lati di un quadrato: la figura resta aperta",
        "Un triangolo"
      ],
      "answer": 1,
      "explain": "Un quadrato ha 4 lati, quindi serve ripeti 4 volte. Con 3 giri il disegno è incompleto. È un bug da correggere!"
    },
    {
      "type": "mc",
      "q": "Quale di queste attività NON è un ciclo, ma una sequenza di passi diversi?",
      "options": [
        "Saltare la corda 20 volte",
        "Il ritornello di una canzone",
        "Accendere il computer e aprire Scratch"
      ],
      "answer": 2,
      "explain": "Accendere il computer e aprire Scratch sono due passi diversi, uno dopo l'altro. Gli altri ripetono la stessa cosa."
    },
    {
      "type": "tf",
      "q": "Il programma «ripeti 4 volte: avanti 1 casella» fa fare al robot lo stesso movimento di 4 blocchi «avanti 1 casella» messi uno dopo l'altro.",
      "answer": true,
      "explain": "Vero: il risultato è lo stesso, ma con il ciclo il programma è più corto e più facile da correggere."
    },
    {
      "type": "order",
      "q": "Metti in ordine i passi per correggere un bug.",
      "items": [
        "Esegui il programma e guarda il risultato",
        "Trova dove il risultato è diverso da quello che volevi",
        "Correggi l'istruzione sbagliata",
        "Prova di nuovo il programma"
      ],
      "explain": "Si prova, si cerca dove sbaglia, si corregge e si prova ancora: così si impara a programmare."
    }
  ]
});
