QBANK("it", "p1-geo-percorsi", {
 "f": [
  {
   "type": "mc",
   "q": "Quale freccia vuol dire «vai avanti»?",
   "options": [
    "⬇️",
    "⬅️",
    "⬆️"
   ],
   "answer": 2,
   "explain": "La freccia in su ⬆️ vuol dire vai avanti."
  },
  {
   "type": "tf",
   "q": "Ogni percorso ha una partenza e un arrivo.",
   "answer": true,
   "explain": "Sì: si parte da un posto e si arriva in un altro."
  },
  {
   "type": "mc",
   "q": "Quale animale spiega la strada ballando?",
   "options": [
    "Il gatto",
    "L'ape",
    "La rana"
   ],
   "answer": 1,
   "explain": "L'ape fa una danza e dice alle altre dove sono i fiori."
  },
  {
   "type": "text",
   "q": "Qual è il contrario di «avanti»?",
   "answer": [
    "indietro",
    "dietro"
   ],
   "explain": "Avanti ↔ indietro."
  },
  {
   "type": "num",
   "q": "Codice: → → ↑ ↑ ↑. Quanti passi fai verso l'alto (↑)?",
   "answer": 3,
   "explain": "Ci sono 3 frecce ↑, quindi 3 passi in su."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Parti dal pallino: 3 passi a destra, 4 passi in su, 2 passi a sinistra. Quanti passi hai fatto in tutto?",
   "answer": 9,
   "unit": "passi",
   "explain": "3 + 4 + 2 = 9 passi."
  },
  {
   "type": "mc",
   "q": "Il codice → → ↓ vuol dire…",
   "options": [
    "1 passo a destra e 2 in giù",
    "2 passi a destra e 1 in giù",
    "3 passi a sinistra"
   ],
   "answer": 1,
   "explain": "Due frecce a destra e una verso il basso."
  },
  {
   "type": "mc",
   "q": "La mamma dice: «Prima il semaforo, poi la farmacia, infine la scuola». Che cosa trovi subito prima della scuola?",
   "options": [
    "Il semaforo",
    "La farmacia",
    "Il parco"
   ],
   "answer": 1,
   "explain": "L'ordine è: semaforo, farmacia, scuola. Subito prima della scuola c'è la farmacia."
  },
  {
   "type": "tf",
   "q": "Nell'orienteering i bambini usano una mappa e una bussola per trovare le lanterne.",
   "answer": true,
   "explain": "Vero: corrono nel bosco e cercano le lanterne nell'ordine giusto."
  },
  {
   "type": "order",
   "q": "Metti in ordine la mattina di Sara, dal primo all'ultimo.",
   "items": [
    "Mi sveglio",
    "Mi vesto",
    "Faccio colazione",
    "Esco di casa"
   ],
   "explain": "Prima, poi, dopo, infine: le cose si fanno in ordine."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Parti dal pallino e fai: ↑ ↑ ↑ ↓. Di quanti quadretti sei più in alto rispetto alla partenza?",
   "answer": 2,
   "unit": "quadretti",
   "explain": "Tre passi su e uno giù: 3 − 1 = 2 quadretti."
  },
  {
   "type": "tf",
   "q": "Due robot partono dallo stesso punto. Il primo fa: avanti, avanti, gira a destra, avanti. Il secondo fa: avanti, gira a destra, avanti, avanti. Arrivano nello stesso posto.",
   "answer": false,
   "explain": "Falso: hanno gli stessi comandi ma in ordine diverso, quindi arrivano in due posti diversi."
  },
  {
   "type": "mc",
   "q": "Quale di questi è un percorso chiuso?",
   "options": [
    "Casa → scuola",
    "Casa → parco → negozio → casa",
    "Casa → casa della nonna"
   ],
   "answer": 1,
   "explain": "Nel percorso chiuso si torna al punto di partenza: casa, parco, negozio, di nuovo casa."
  },
  {
   "type": "num",
   "q": "Un robot esegue: avanti ×3, gira a destra, avanti ×2, gira a sinistra, avanti ×1. Quanti passi avanti fa in tutto?",
   "answer": 6,
   "unit": "passi",
   "explain": "Si contano solo i passi avanti: 3 + 2 + 1 = 6. Le svolte non sono passi."
  },
  {
   "type": "order",
   "q": "Metti in ordine l'orienteering nel bosco.",
   "items": [
    "Prendo la mappa e la bussola",
    "Corro nel bosco",
    "Trovo le lanterne nell'ordine giusto",
    "Arrivo al traguardo"
   ],
   "explain": "Prima ti prepari, poi corri, poi trovi le lanterne e infine arrivi."
  }
 ]
});
