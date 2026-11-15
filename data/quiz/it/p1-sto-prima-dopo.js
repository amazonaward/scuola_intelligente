QBANK("it", "p1-sto-prima-dopo", {
 "f": [
  {
   "type": "mc",
   "q": "Che cosa fai prima di mangiare?",
   "options": [
    "Mi lavo le mani",
    "Vado a letto",
    "Esco a giocare"
   ],
   "answer": 0,
   "explain": "Prima di mangiare ci si lava le mani."
  },
  {
   "type": "tf",
   "q": "Ieri viene prima di oggi.",
   "answer": true,
   "explain": "Ieri è già passato: viene prima di oggi."
  },
  {
   "type": "mc",
   "q": "Domani viene…",
   "options": [
    "prima di oggi",
    "dopo oggi",
    "insieme a ieri"
   ],
   "answer": 1,
   "explain": "Domani non è ancora arrivato: viene dopo oggi."
  },
  {
   "type": "text",
   "q": "Il contrario di «prima» è…",
   "answer": [
    "dopo",
    "il dopo"
   ],
   "explain": "Prima e dopo sono parole contrarie."
  },
  {
   "type": "order",
   "q": "Metti in ordine: come si fa un panino.",
   "items": [
    "Prendo il pane",
    "Lo taglio",
    "Ci metto il prosciutto",
    "Lo mangio"
   ],
   "explain": "Prima il pane, poi si taglia, si riempie e alla fine si mangia."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Carla arriva lunedì e parte giovedì. Quanti giorni passano da lunedì a giovedì?",
   "answer": 3,
   "explain": "Da lunedì: martedì (1), mercoledì (2), giovedì (3). Passano 3 giorni.",
   "unit": "giorni"
  },
  {
   "type": "mc",
   "q": "Prima il seme, poi la piantina. Che cosa viene dopo la piantina?",
   "options": [
    "Il fiore",
    "Il seme",
    "Il terriccio"
   ],
   "answer": 0,
   "explain": "Il seme diventa piantina e poi la piantina fa il fiore."
  },
  {
   "type": "tf",
   "q": "Dopo il tramonto viene subito il mattino.",
   "answer": false,
   "explain": "Dopo il tramonto viene la sera e poi la notte. Il mattino viene dopo la notte."
  },
  {
   "type": "text",
   "q": "Che giorno viene dopo il lunedì?",
   "answer": [
    "martedì",
    "martedi",
    "il martedì"
   ],
   "explain": "Dopo il lunedì viene il martedì."
  },
  {
   "type": "order",
   "q": "Piove! Metti in ordine quello che fai.",
   "items": [
    "Vedo che piove",
    "Prendo l'ombrello",
    "Esco di casa",
    "Torno a casa asciutto"
   ],
   "explain": "Prima vedi la pioggia, poi prendi l'ombrello, esci e torni asciutto."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Anna arriva prima di Luca. Luca arriva prima di Marco. Chi arriva per ultimo?",
   "options": [
    "Anna",
    "Luca",
    "Marco"
   ],
   "answer": 2,
   "explain": "L'ordine è Anna, Luca, Marco: l'ultimo è Marco."
  },
  {
   "type": "num",
   "q": "Sono il quinto della fila. Quanti bambini ci sono prima di me?",
   "answer": 4,
   "explain": "Il quinto ha davanti 4 bambini: il primo, il secondo, il terzo e il quarto.",
   "unit": "bambini"
  },
  {
   "type": "tf",
   "q": "Se A viene prima di B e B viene prima di C, allora C viene prima di A.",
   "answer": false,
   "explain": "L'ordine è A, B, C. Quindi C viene per ultimo, dopo A."
  },
  {
   "type": "text",
   "q": "Dopo l'inverno viene la…",
   "answer": [
    "primavera",
    "la primavera"
   ],
   "explain": "Le stagioni sono: primavera, estate, autunno, inverno. Dopo l'inverno ricomincia la primavera."
  },
  {
   "type": "order",
   "q": "Metti in ordine dal più antico al più recente.",
   "items": [
    "I dinosauri",
    "Gli uomini della Preistoria",
    "Gli antichi Romani",
    "Oggi"
   ],
   "explain": "I dinosauri sono i più antichi. Poi la Preistoria, poi i Romani, infine oggi."
  }
 ]
});
