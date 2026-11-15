QBANK("it", "m2-tec-energia", {
 "f": [
  {
   "type": "mc",
   "q": "Quale unità si usa di solito per misurare l'energia elettrica consumata in casa?",
   "options": [
    "Il kilowattora (kWh)",
    "Il metro (m)",
    "Il grammo (g)"
   ],
   "answer": 0,
   "explain": "Sulla bolletta l'energia elettrica si misura in kilowattora (kWh)."
  },
  {
   "type": "tf",
   "q": "Petrolio e gas naturale sono combustibili fossili.",
   "answer": true,
   "explain": "Si sono formati in milioni di anni dai resti di esseri viventi e si esauriscono."
  },
  {
   "type": "mc",
   "q": "Che cosa fa girare le pale di una centrale eolica?",
   "options": [
    "Il vapore",
    "L'acqua di un bacino",
    "Il vento"
   ],
   "answer": 2,
   "explain": "Nell'aerogeneratore sono le pale spinte dal vento a far girare l'alternatore."
  },
  {
   "type": "num",
   "q": "Quanti hertz ha la corrente alternata delle prese di casa in Italia?",
   "answer": 50,
   "tol": 0,
   "unit": "Hz",
   "explain": "In Italia la rete elettrica ha una frequenza di 50 hertz (e 230 volt)."
  },
  {
   "type": "order",
   "q": "Metti in ordine le trasformazioni di energia in una centrale idroelettrica.",
   "items": [
    "Acqua nel bacino (energia potenziale)",
    "Acqua che scende (energia cinetica)",
    "Turbina e alternatore",
    "Energia elettrica"
   ],
   "explain": "L'acqua in alto ha energia potenziale, cadendo ha energia cinetica, la turbina e l'alternatore la trasformano in elettricità."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un ferro da stiro da 1,2 kW resta acceso per 2,5 ore. Quanti kWh consuma?",
   "answer": 3,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "Energia = potenza × tempo = 1,2 × 2,5 = 3 kWh."
  },
  {
   "type": "num",
   "q": "Una lampadina LED da 8 W resta accesa 5 ore al giorno per 30 giorni. Quanti kWh consuma in tutto?",
   "answer": 1.2,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "8 W = 0,008 kW; 0,008 × 5 × 30 = 1,2 kWh."
  },
  {
   "type": "mc",
   "q": "Quale catena di trasformazioni descrive una centrale eolica?",
   "options": [
    "Cinetica del vento → meccanica della turbina → elettrica",
    "Chimica → termica → meccanica → elettrica",
    "Potenziale dell'acqua → cinetica → elettrica"
   ],
   "answer": 0,
   "explain": "Il vento ha energia cinetica, la fa diventare movimento della turbina e l'alternatore la trasforma in elettrica."
  },
  {
   "type": "text",
   "q": "Come si chiama l'apparecchio che trasforma la corrente continua dei pannelli fotovoltaici in corrente alternata?",
   "answer": [
    "inverter",
    "l'inverter",
    "un inverter"
   ],
   "explain": "L'inverter rende la corrente adatta alla rete e agli apparecchi di casa."
  },
  {
   "type": "mc",
   "q": "Perché le centrali idroelettriche si costruiscono in montagna?",
   "options": [
    "Serve un grande dislivello: più l'acqua cade dall'alto, più energia ha",
    "Perché in montagna c'è sempre vento",
    "Perché in alto fa più caldo"
   ],
   "answer": 0,
   "explain": "Più l'acqua cade da in alto, più energia ha: serve un grande dislivello."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Una lampadina a incandescenza da 40 W e una LED da 5 W fanno la stessa luce. Se restano accese 4 ore al giorno per 30 giorni e 1 kWh costa 0,25 €, quanti euro si risparmiano con la LED?",
   "answer": 1.05,
   "tol": 0.01,
   "unit": "€",
   "explain": "Differenza 35 W = 0,035 kW; 0,035 × 4 × 30 = 4,2 kWh; 4,2 × 0,25 = 1,05 €."
  },
  {
   "type": "tf",
   "q": "Una centrale ha rendimento del 40%: i 60 su 100 che non diventano elettricità sono energia che scompare nel nulla.",
   "answer": false,
   "explain": "Falso: l'energia non si distrugge; la parte non utile si trasforma in calore e si disperde."
  },
  {
   "type": "mc",
   "q": "Quale di queste affermazioni è FALSA?",
   "options": [
    "Il trasformatore alza la tensione per ridurre le perdite nel trasporto",
    "L'alternatore trasforma energia meccanica in elettrica",
    "Una centrale nucleare emette molta CO₂ mentre funziona",
    "Il fotovoltaico non usa turbine"
   ],
   "answer": 2,
   "explain": "Il nucleare non emette CO₂ in funzione, ma produce scorie radioattive: dire che ne emette molta è l'errore."
  },
  {
   "type": "mc",
   "q": "In una regione c'è molto sole a mezzogiorno ma la sera il consumo di elettricità sale. Quale soluzione risolve meglio il problema?",
   "options": [
    "Usare sistemi di accumulo come batterie o centrali a pompaggio",
    "Costruire più tralicci",
    "Alzare la tensione a 380 000 V"
   ],
   "answer": 0,
   "explain": "Il sole non produce la sera: serve accumulare l'energia in eccesso con batterie o centrali a pompaggio."
  },
  {
   "type": "order",
   "q": "Metti in ordine il percorso dell'elettricità dalla centrale alla presa di casa.",
   "items": [
    "Alternatore",
    "Trasformatore che alza la tensione",
    "Elettrodotti ad alta tensione",
    "Cabina che abbassa la tensione",
    "Presa di casa a 230 V"
   ],
   "explain": "La tensione viene alzata per il trasporto e poi abbassata in due passi fino ai 230 V."
  }
 ]
});
