QBANK("it", "m3-sci-elettricita", {
 "f": [
  {
   "type": "mc",
   "q": "Che cosa succede tra due cariche elettriche di segno opposto?",
   "options": [
    "si respingono",
    "si attraggono",
    "non interagiscono"
   ],
   "answer": 1,
   "explain": "Cariche di segno opposto (una positiva e una negativa) si attraggono; quelle dello stesso segno si respingono."
  },
  {
   "type": "tf",
   "q": "Il rame è un buon conduttore di elettricità.",
   "answer": true,
   "explain": "I metalli, e il rame in particolare, lasciano passare facilmente la corrente: per questo i fili elettrici sono di rame."
  },
  {
   "type": "mc",
   "q": "Con quale strumento si misura l'intensità della corrente elettrica?",
   "options": [
    "amperometro",
    "voltmetro",
    "termometro"
   ],
   "answer": 0,
   "explain": "L'intensità di corrente, in ampere, si misura con l'amperometro; il voltmetro misura la tensione."
  },
  {
   "type": "num",
   "q": "Una normale pila stilo (formato AA) fornisce una tensione di quanti volt?",
   "answer": 1.5,
   "tol": 0.01,
   "unit": "V",
   "explain": "Una pila stilo alcalina o zinco-carbone fornisce 1,5 V; per questo tre pile in serie danno 4,5 V."
  },
  {
   "type": "text",
   "q": "Qual è l'unità di misura della tensione elettrica?",
   "answer": [
    "volt",
    "il volt",
    "v"
   ],
   "explain": "La tensione elettrica si misura in volt (V), in onore di Alessandro Volta."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Una lampadina da 60 W resta accesa per 5 ore. Quanti kWh consuma?",
   "answer": 0.3,
   "tol": 0.005,
   "unit": "kWh",
   "explain": "60 W = 0,06 kW. Energia = potenza × tempo = 0,06 × 5 = 0,3 kWh."
  },
  {
   "type": "num",
   "q": "In un circuito passa una corrente di 2 A attraverso una resistenza di 15 Ω. Qual è la tensione ai suoi capi?",
   "answer": 30,
   "unit": "V",
   "explain": "Legge di Ohm: V = R × I = 15 × 2 = 30 V."
  },
  {
   "type": "num",
   "q": "Tre resistenze da 5 Ω, 10 Ω e 15 Ω sono collegate in serie. Qual è la resistenza totale?",
   "answer": 30,
   "unit": "Ω",
   "explain": "In serie le resistenze si sommano: 5 + 10 + 15 = 30 Ω."
  },
  {
   "type": "mc",
   "q": "Come va collegato un voltmetro per misurare la tensione ai capi di una lampadina?",
   "options": [
    "in serie",
    "in parallelo",
    "a un solo capo"
   ],
   "answer": 1,
   "explain": "Il voltmetro si collega in parallelo al componente, perché misura la differenza di potenziale tra i suoi due capi."
  },
  {
   "type": "tf",
   "q": "Un fusibile protegge l'apparecchio se viene collegato in parallelo ad esso.",
   "answer": false,
   "explain": "Falso: il fusibile va collegato in serie, così quando la corrente è troppo alta il filo si fonde e interrompe il circuito."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Una resistenza da 12 Ω e una da 4 Ω sono collegate in parallelo. Qual è la resistenza totale?",
   "answer": 3,
   "unit": "Ω",
   "explain": "In parallelo: 1/R = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3, quindi R = 3 Ω. (Oppure prodotto : somma = 48 : 16 = 3 Ω.)"
  },
  {
   "type": "num",
   "q": "Una pila da 9 V alimenta in serie due resistenze, da 100 Ω e da 200 Ω. Quanti milliampere (mA) passano nel circuito?",
   "answer": 30,
   "unit": "mA",
   "explain": "Resistenza totale = 100 + 200 = 300 Ω. I = V : R = 9 : 300 = 0,03 A = 30 mA (1 A = 1000 mA)."
  },
  {
   "type": "mc",
   "q": "Un asciugacapelli da 1500 W è collegato alla rete a 230 V. Quanta corrente assorbe, circa?",
   "options": [
    "circa 0,15 A",
    "circa 345 A",
    "circa 6,5 A"
   ],
   "answer": 2,
   "explain": "Da P = V × I si ricava I = P : V = 1500 : 230 ≈ 6,5 A."
  },
  {
   "type": "tf",
   "q": "Aggiungendo una seconda lampadina uguale in serie alla prima, la corrente nel circuito aumenta.",
   "answer": false,
   "explain": "Falso: in serie le resistenze si sommano, la resistenza totale cresce e, a parità di tensione, la corrente diminuisce (I = V : R)."
  },
  {
   "type": "order",
   "q": "Metti in ordine il percorso dell'energia elettrica dalla centrale alla presa di casa.",
   "items": [
    "L'acqua o il vapore fa girare la turbina",
    "L'alternatore trasforma il movimento in corrente elettrica",
    "Un trasformatore innalza la tensione",
    "La corrente viaggia sulle linee ad alta tensione",
    "Un altro trasformatore abbassa la tensione a 230 V"
   ],
   "explain": "La turbina muove l'alternatore, che produce corrente; la tensione si alza per ridurre le perdite lungo le linee e poi si abbassa a 230 V per l'uso domestico."
  }
 ]
});
