QBANK("it", "m3-tec-robotica", {
 "f": [
  {
   "type": "mc",
   "q": "Quale parte di un robot funziona come il \"cervello\"?",
   "options": [
    "Il sensore",
    "Il controllore",
    "L'attuatore"
   ],
   "answer": 1,
   "explain": "Il controllore elabora i dati dei sensori e decide quali comandi dare agli attuatori."
  },
  {
   "type": "tf",
   "q": "Un sensore a infrarossi può aiutare un robot a seguire una linea nera sul pavimento.",
   "answer": true,
   "explain": "Vero: la linea nera assorbe la luce infrarossa, il pavimento chiaro la riflette."
  },
  {
   "type": "text",
   "q": "Come si chiama la famosa scheda con microcontrollore nata a Ivrea e usata per costruire robot?",
   "answer": [
    "arduino",
    "scheda arduino"
   ],
   "explain": "Arduino è nato a Ivrea nel 2005 ed è usato in tutto il mondo per imparare elettronica e robotica."
  },
  {
   "type": "mc",
   "q": "Quale sensore dice a un robot di quanto ha girato un motore?",
   "options": [
    "Ultrasuoni",
    "Pulsante di contatto",
    "Encoder"
   ],
   "answer": 2,
   "explain": "L'encoder conta i giri o le frazioni di giro: così si sa di quanti centimetri si è spostato il robot."
  },
  {
   "type": "num",
   "q": "In che anno lo scrittore Karel Čapek scrisse il dramma R.U.R., da cui nasce la parola \"robot\"?",
   "answer": 1920,
   "explain": "Il dramma R.U.R. è del 1920; \"robot\" viene dal ceco robota, \"lavoro forzato\"."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un motore passo-passo fa 200 passi per giro. Quanti passi servono per 2,5 giri?",
   "answer": 500,
   "unit": "passi",
   "explain": "200 × 2,5 = 500 passi."
  },
  {
   "type": "num",
   "q": "Una ruota ha circonferenza 20 cm. Se l'encoder conta 15 giri, quanti centimetri ha percorso il robot?",
   "answer": 300,
   "unit": "cm",
   "explain": "Ogni giro porta avanti di 20 cm: 15 × 20 = 300 cm (3 m)."
  },
  {
   "type": "mc",
   "q": "Un termostato (anello chiuso) ha come obiettivo 20 °C e il sensore misura 17 °C. Che cosa fa il controllore?",
   "options": [
    "Spegne il riscaldamento",
    "Accende il riscaldamento",
    "Non fa nulla perché il timer non è scaduto"
   ],
   "answer": 1,
   "explain": "Il controllore confronta la misura (17 °C) con l'obiettivo (20 °C) e agisce per ridurre la differenza."
  },
  {
   "type": "tf",
   "q": "Il PLC è un computer robusto usato nelle fabbriche per controllare macchine e nastri trasportatori.",
   "answer": true,
   "explain": "Vero: il PLC (controllore logico programmabile) è il \"cervello\" robusto delle linee di produzione."
  },
  {
   "type": "order",
   "q": "Metti in ordine il lavoro di una linea automatica in una fabbrica di auto.",
   "items": [
    "Un sensore rileva la scocca sul nastro",
    "Il PLC ferma il nastro",
    "I bracci robotici saldano",
    "Una telecamera controlla la qualità",
    "Il nastro riparte"
   ],
   "explain": "Schema: sensore ➜ controllore ➜ attuatori (bracci) ➜ controllo qualità ➜ ripartenza."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un robot si orienta usando solo gli encoder delle ruote. Dopo molta strada la sua posizione stimata diventa sbagliata. Perché?",
   "options": [
    "Le ruote possono slittare e i piccoli errori si accumulano giro dopo giro",
    "L'encoder smette di funzionare dopo 10 metri",
    "Il robot dimentica di avere un controllore",
    "Le ruote si allargano con il tempo"
   ],
   "answer": 0,
   "explain": "Per questo si aggiungono altri sensori (giroscopio, LiDAR, telecamera) che correggono la posizione."
  },
  {
   "type": "num",
   "q": "Un motore passo-passo da 200 passi per giro muove un braccio tramite un riduttore 1:5 (il motore fa 5 giri per 1 giro del braccio). Quanti passi servono per un giro completo del braccio?",
   "answer": 1000,
   "unit": "passi",
   "explain": "Il motore deve fare 5 giri: 5 × 200 = 1000 passi."
  },
  {
   "type": "mc",
   "q": "Un irrigatore con timer annaffia 10 minuti ogni giorno, anche quando piove. Come lo trasformi in un sistema ad anello chiuso?",
   "options": [
    "Allungando il tempo del timer",
    "Aggiungendo un sensore di umidità del terreno che attiva l'acqua solo sotto una soglia",
    "Cambiando il colore dei tubi",
    "Sostituendo il timer con un timer più preciso"
   ],
   "answer": 1,
   "explain": "L'anello chiuso misura il risultato (umidità) e lo confronta con l'obiettivo: così non si spreca acqua quando piove."
  },
  {
   "type": "tf",
   "q": "Aggiungere più gradi di libertà a un braccio robotico lo rende sempre più semplice da controllare.",
   "answer": false,
   "explain": "Falso: più movimenti indipendenti rendono il braccio più versatile ma i calcoli e il controllo più complessi."
  },
  {
   "type": "text",
   "q": "Come si chiama il valore obiettivo che il controllore confronta con la misura del sensore in un sistema ad anello chiuso?",
   "answer": [
    "set-point",
    "setpoint",
    "set point",
    "valore obiettivo",
    "obiettivo"
   ],
   "explain": "Si chiama set-point: il controllore calcola la differenza tra set-point e misura e la corregge."
  }
 ]
});
