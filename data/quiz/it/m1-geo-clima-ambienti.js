QBANK("it", "m1-geo-clima-ambienti", {
 "f": [
  {
   "type": "mc",
   "q": "Quale strumento misura le precipitazioni?",
   "options": [
    "Anemometro",
    "Pluviometro",
    "Barometro"
   ],
   "answer": 1,
   "explain": "Il pluviometro misura la pioggia in millimetri; l'anemometro misura il vento, il barometro la pressione."
  },
  {
   "type": "tf",
   "q": "Salendo di quota la temperatura dell'aria in media diminuisce.",
   "answer": true,
   "explain": "In media la temperatura scende di circa 0,6 °C ogni 100 m di salita."
  },
  {
   "type": "mc",
   "q": "Quale clima ha Palermo?",
   "options": [
    "Oceanico",
    "Mediterraneo",
    "Subartico"
   ],
   "answer": 1,
   "explain": "Palermo, sul mare in Sicilia, ha inverni miti ed estati calde e secche: clima mediterraneo."
  },
  {
   "type": "text",
   "q": "Come si chiama lo strumento che misura la velocità del vento?",
   "answer": [
    "anemometro",
    "l'anemometro"
   ],
   "explain": "L'anemometro misura la velocità del vento (la banderuola ne indica la direzione)."
  },
  {
   "type": "mc",
   "q": "Quale di questi animali vive nella tundra?",
   "options": [
    "Cinghiale",
    "Stambecco",
    "Renna"
   ],
   "answer": 2,
   "explain": "La renna vive nella tundra, tra muschi e licheni. Il cinghiale abita le foreste, lo stambecco le Alpi."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "In vetta a una montagna di 3.000 m ci sono 2 °C. Quanti gradi ci sono circa al livello del mare (0 m)?",
   "answer": 20,
   "tol": 0.5,
   "unit": "°C",
   "explain": "Dislivello 3.000 m → calo di 3.000 : 100 × 0,6 = 18 °C. In basso fa più caldo: 2 + 18 = 20 °C."
  },
  {
   "type": "num",
   "q": "Una città ha un'escursione termica annua di 20 °C e la media del mese più caldo è 28 °C. Qual è la media del mese più freddo?",
   "answer": 8,
   "tol": 0,
   "unit": "°C",
   "explain": "Escursione = più caldo − più freddo, quindi più freddo = 28 − 20 = 8 °C."
  },
  {
   "type": "mc",
   "q": "Perché i ghiacciai alpini sono detti «termometri» del clima?",
   "options": [
    "Perché si allungano negli anni freddi e si ritirano in quelli caldi",
    "Perché contengono il mercurio",
    "Perché misurano la quantità di pioggia"
   ],
   "answer": 0,
   "explain": "La lunghezza di un ghiacciaio cambia con la temperatura: osservarla per anni mostra come cambia il clima."
  },
  {
   "type": "tf",
   "q": "Il lato di una montagna esposto ai venti umidi riceve più pioggia dell'altro lato.",
   "answer": true,
   "explain": "I rilievi fanno da barriera: l'aria umida sale, si raffredda e scarica la pioggia sul lato esposto."
  },
  {
   "type": "order",
   "q": "Ordina questi ambienti naturali europei da nord a sud.",
   "items": [
    "Tundra",
    "Taiga",
    "Foresta di latifoglie",
    "Macchia mediterranea"
   ],
   "explain": "Andando da nord a sud: tundra, taiga, foresta di latifoglie e infine macchia mediterranea."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Una funivia sale da 1.000 m, dove ci sono 25 °C, fino a 2.800 m. Quanti gradi ci saranno circa in cima?",
   "answer": 14.2,
   "tol": 0.2,
   "unit": "°C",
   "explain": "Dislivello: 2.800 − 1.000 = 1.800 m. Calo: 1.800 : 100 × 0,6 = 10,8 °C. In cima: 25 − 10,8 = 14,2 °C."
  },
  {
   "type": "mc",
   "q": "Tromsø è oltre il Circolo polare artico, ma il suo porto non gela d'inverno. Perché?",
   "options": [
    "Perché è situata ad alta quota",
    "Perché le Alpi la riparano dai venti freddi",
    "Perché una corrente marina calda ne mitiga il clima"
   ],
   "answer": 2,
   "explain": "La Corrente del Golfo porta acqua calda fino alla Norvegia e rende il clima molto più mite di altri luoghi alla stessa latitudine."
  },
  {
   "type": "tf",
   "q": "Due città alla stessa latitudine hanno sempre lo stesso clima.",
   "answer": false,
   "explain": "Contano anche mare, correnti, venti e altitudine: l'Irlanda è mite, mentre il Labrador (stessa latitudine) è coperto di neve per mesi."
  },
  {
   "type": "mc",
   "q": "Città A: gennaio 4 °C, luglio 17 °C, piogge distribuite tutto l'anno. Città B: gennaio −8 °C, luglio 20 °C, piogge soprattutto d'estate. Quale affermazione è corretta?",
   "options": [
    "A è continentale e B oceanica",
    "A è oceanica e B continentale",
    "Entrambe sono mediterranee",
    "A è mediterranea e B polare"
   ],
   "answer": 1,
   "explain": "A: escursione 13 °C, inverni miti, piogge ovunque → oceanico. B: escursione 28 °C, inverni gelidi, piogge estive → continentale."
  },
  {
   "type": "num",
   "q": "Londra: gennaio 5 °C, luglio 19 °C. Mosca: gennaio −6 °C, luglio 19 °C. Di quanti gradi l'escursione di Mosca è maggiore di quella di Londra?",
   "answer": 11,
   "tol": 0,
   "unit": "°C",
   "explain": "Londra: 19 − 5 = 14 °C. Mosca: 19 − (−6) = 25 °C. Differenza: 25 − 14 = 11 °C."
  }
 ]
});
