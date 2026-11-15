QBANK("it", "m3-tec-elettricita-elettronica", {
 "f": [
  {
   "type": "mc",
   "q": "Quale strumento misura l'intensità della corrente elettrica?",
   "options": [
    "Voltmetro",
    "Amperometro",
    "Ohmmetro"
   ],
   "answer": 1,
   "explain": "L'amperometro misura l'intensità di corrente in ampere (A)."
  },
  {
   "type": "tf",
   "q": "L'acqua salata non conduce l'elettricità.",
   "answer": false,
   "explain": "Falso: i sali disciolti permettono il passaggio delle cariche, quindi l'acqua salata conduce."
  },
  {
   "type": "text",
   "q": "Come si chiama il diodo che emette luce? (sigla di tre lettere)",
   "answer": [
    "led",
    "il led"
   ],
   "explain": "LED = Light Emitting Diode, \"diodo che emette luce\"."
  },
  {
   "type": "mc",
   "q": "In quale unità si misura la potenza elettrica?",
   "options": [
    "Ohm",
    "Ampere",
    "Watt"
   ],
   "answer": 2,
   "explain": "La potenza si misura in watt (W): P = V × I."
  },
  {
   "type": "num",
   "q": "Quanti volt ha una normale pila stilo AA?",
   "answer": 1.5,
   "unit": "V",
   "explain": "Una pila stilo AA fornisce 1,5 V."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Una stufetta collegata a 230 V assorbe 6 A. Quanti watt di potenza ha?",
   "answer": 1380,
   "unit": "W",
   "explain": "P = V × I = 230 × 6 = 1380 W."
  },
  {
   "type": "num",
   "q": "Una resistenza di 1000 Ω è collegata a 5 V. Quanti milliampere (mA) la attraversano?",
   "answer": 5,
   "unit": "mA",
   "explain": "I = V ÷ R = 5 ÷ 1000 = 0,005 A = 5 mA."
  },
  {
   "type": "mc",
   "q": "Tre lampadine identiche sono collegate in serie a una pila da 9 V. Quanta tensione c'è ai capi di ciascuna?",
   "options": [
    "9 V",
    "3 V",
    "27 V"
   ],
   "answer": 1,
   "explain": "In serie la tensione si divide in parti uguali: 9 V ÷ 3 = 3 V."
  },
  {
   "type": "tf",
   "q": "Un transistor può funzionare come un interruttore comandato da un segnale elettrico.",
   "answer": true,
   "explain": "Vero: un piccolo segnale su un terminale controlla il passaggio di una corrente maggiore. Nei chip ce ne sono miliardi."
  },
  {
   "type": "order",
   "q": "Metti in ordine i passi per calcolare la resistenza di protezione di un LED.",
   "items": [
    "Stabilire la corrente voluta del LED",
    "Sottrarre la tensione del LED da quella dell'alimentatore",
    "Calcolare R = V ÷ I",
    "Scegliere il valore commerciale uguale o un po' più grande"
   ],
   "explain": "Prima la corrente, poi la tensione da assorbire, poi la legge di Ohm, infine il valore commerciale."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Vuoi accendere un LED da 2 V e 10 mA con una batteria da 9 V. Che resistenza (in Ω) serve in serie?",
   "answer": 700,
   "unit": "Ω",
   "explain": "Il resistore deve assorbire 9 − 2 = 7 V. 10 mA = 0,01 A, quindi R = 7 ÷ 0,01 = 700 Ω."
  },
  {
   "type": "num",
   "q": "Una lampada da 100 W resta accesa 8 ore. L'energia costa 0,25 € al kWh. Quanto costa (in €)?",
   "answer": 0.2,
   "tol": 0.005,
   "unit": "€",
   "explain": "100 W × 8 h = 800 Wh = 0,8 kWh. Costo: 0,8 × 0,25 = 0,20 €."
  },
  {
   "type": "mc",
   "q": "Se in un resistore la tensione ai capi raddoppia e la resistenza resta uguale, che cosa succede alla corrente?",
   "options": [
    "Si dimezza",
    "Raddoppia",
    "Resta uguale",
    "Diventa quattro volte più grande"
   ],
   "answer": 1,
   "explain": "Per la legge di Ohm I = V ÷ R: con R costante, tensione e corrente sono direttamente proporzionali."
  },
  {
   "type": "mc",
   "q": "Vuoi un allarme che scatta solo quando una persona si muove davanti alla porta. Quale sensore scegli?",
   "options": [
    "Fotoresistenza (LDR)",
    "Termistore (NTC)",
    "Sensore PIR a infrarossi passivi"
   ],
   "answer": 2,
   "explain": "Il PIR rileva il movimento di corpi caldi; la fotoresistenza sente solo la luce e il termistore la temperatura."
  },
  {
   "type": "tf",
   "q": "Per misurare la tensione di una pila si collega l'amperometro direttamente ai suoi due poli.",
   "answer": false,
   "explain": "Falso: la tensione si misura con il voltmetro; l'amperometro ha resistenza minima e collegato così farebbe un cortocircuito."
  }
 ]
});
