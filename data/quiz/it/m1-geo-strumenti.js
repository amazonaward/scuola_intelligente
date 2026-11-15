QBANK("it", "m1-geo-strumenti", {
 "f": [
  {
   "type": "mc",
   "q": "Quale strumento ha un ago magnetico che indica il Nord?",
   "options": [
    "Termometro",
    "Bussola",
    "Altimetro"
   ],
   "answer": 1,
   "explain": "La bussola ha un ago magnetico che punta verso il Nord magnetico, vicino al Polo Nord geografico."
  },
  {
   "type": "tf",
   "q": "A mezzogiorno, in Italia, il Sole si trova a Sud.",
   "answer": true,
   "explain": "Il Sole sorge a Est, tramonta a Ovest e a mezzogiorno in Italia è a Sud."
  },
  {
   "type": "mc",
   "q": "Quale stella indica il Nord durante la notte?",
   "options": [
    "Sirio",
    "Antares",
    "Stella Polare"
   ],
   "answer": 2,
   "explain": "La Stella Polare si trova quasi sopra il Polo Nord e indica il Nord."
  },
  {
   "type": "text",
   "q": "Come si chiama la carta che mostra un solo argomento, come il clima o le lingue parlate?",
   "answer": [
    "tematica",
    "carta tematica",
    "la carta tematica"
   ],
   "explain": "Le carte tematiche trattano un unico tema: clima, popolazione, lingue, turismo, rischio sismico…"
  },
  {
   "type": "tf",
   "q": "Un GIS (Sistema Informativo Geografico) sovrappone su una carta digitale tanti strati di dati.",
   "answer": true,
   "explain": "Strade, fiumi, popolazione, edifici, rischio di frane: ogni dato è uno strato che si può accendere e spegnere."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Su una carta 4 cm rappresentano 2 km nella realtà. Qual è il denominatore N della scala 1 : N?",
   "answer": 50000,
   "tol": 0,
   "explain": "2 km = 200.000 cm. 200.000 : 4 = 50.000, quindi la scala è 1 : 50.000."
  },
  {
   "type": "mc",
   "q": "Vuoi confrontare il numero di abitanti di cinque città. Quale grafico è il più adatto?",
   "options": [
    "Areogramma (a torta)",
    "Diagramma a linee",
    "Istogramma (a colonne)"
   ],
   "answer": 2,
   "explain": "L'istogramma confronta quantità diverse con colonne: la più alta è la città più popolata."
  },
  {
   "type": "tf",
   "q": "Una carta in scala 1 : 10.000.000 è adatta per vedere i sentieri di un piccolo parco.",
   "answer": false,
   "explain": "È una scala molto piccola: mostra un territorio enorme ma con pochissimi dettagli. Per un parco serve una scala grande, come 1 : 5.000."
  },
  {
   "type": "text",
   "q": "Come si chiama la carta che mostra confini di Stati e regioni, ognuno di un colore diverso?",
   "answer": [
    "politica",
    "carta politica",
    "la carta politica"
   ],
   "explain": "La carta politica mostra confini, Stati, regioni e città; la carta fisica mostra rilievi, pianure e acque."
  },
  {
   "type": "order",
   "q": "Metti in ordine i passaggi per trovare la distanza reale tra due luoghi su una carta in scala.",
   "items": [
    "Misura con il righello i cm sulla carta",
    "Moltiplica per il denominatore della scala",
    "Trasforma i cm in km"
   ],
   "explain": "Prima si misura sulla carta, poi si moltiplica per il denominatore, infine si converte in km."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Su una carta in scala 1 : 25.000 un percorso misura 18 cm. Camminando a 3 km/h, quante ore servono per percorrerlo?",
   "answer": 1.5,
   "tol": 0,
   "unit": "ore",
   "explain": "18 × 25.000 = 450.000 cm = 4.500 m = 4,5 km. Tempo = 4,5 : 3 = 1,5 ore."
  },
  {
   "type": "mc",
   "q": "Un compagno dice: «Sulla carta di Mercatore la Groenlandia è grande come l'Africa, quindi hanno la stessa superficie». Qual è l'errore?",
   "options": [
    "Nessun errore: Mercatore conserva le aree",
    "Mercatore ingrandisce le terre vicine ai poli: in realtà l'Africa è circa 14 volte più grande",
    "La Groenlandia è in realtà più grande dell'Africa"
   ],
   "answer": 1,
   "explain": "La proiezione di Mercatore conserva gli angoli ma deforma le aree: Africa 30 milioni di km², Groenlandia 2,2 milioni."
  },
  {
   "type": "tf",
   "q": "Per confrontare senza deformazioni le superfici dei continenti è meglio usare un globo che una carta di Mercatore.",
   "answer": true,
   "explain": "Il globo è l'unica rappresentazione senza deformazioni; Mercatore ingrandisce molto le terre vicine ai poli."
  },
  {
   "type": "mc",
   "q": "Su una carta topografica due sentieri portano dalla stessa quota alla stessa vetta. Il sentiero A attraversa curve di livello molto fitte, il B curve molto distanziate. Quale affermazione è corretta?",
   "options": [
    "I due sentieri hanno la stessa pendenza perché partono e arrivano alle stesse quote",
    "A è più dolce e più lungo, B è più ripido e più breve",
    "A è più ripido e più breve, B è più dolce e più lungo"
   ],
   "answer": 2,
   "explain": "Curve fitte = pendio ripido (si sale tanto in poco spazio); curve distanziate = pendio dolce, che richiede un percorso più lungo."
  },
  {
   "type": "mc",
   "q": "Quale abbinamento strumento–uso è SBAGLIATO?",
   "options": [
    "Areogramma – mostrare come cambia un dato anno dopo anno",
    "Cartogramma – mostrare la densità di popolazione delle regioni",
    "Climogramma – unire temperature e piogge di una località"
   ],
   "answer": 0,
   "explain": "L'areogramma (a torta) mostra le parti di un tutto in percentuale; per l'andamento nel tempo si usa il diagramma a linee."
  }
 ]
});
