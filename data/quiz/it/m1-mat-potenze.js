QBANK("it", "m1-mat-potenze", {
 "f": [
  {
   "type": "mc",
   "q": "Come si scrive 7 × 7 × 7 sotto forma di potenza?",
   "options": [
    "7³",
    "3⁷",
    "7 × 3"
   ],
   "answer": 0,
   "explain": "Il fattore 7 si ripete 3 volte: base 7, esponente 3."
  },
  {
   "type": "tf",
   "q": "Zero elevato a 5 dà come risultato 0.",
   "answer": true,
   "explain": "0 × 0 × 0 × 0 × 0 = 0: con base 0 e esponente diverso da 0 il risultato è 0."
  },
  {
   "type": "num",
   "q": "Un quadrato ha il lato di 8 cm. Qual è la sua area in cm²?",
   "answer": 64,
   "unit": "cm²",
   "explain": "Area = 8² = 8 × 8 = 64 cm²."
  },
  {
   "type": "mc",
   "q": "Quanti zeri ha il numero 10⁷ (dieci milioni)?",
   "options": [
    "6",
    "7",
    "8"
   ],
   "answer": 1,
   "explain": "10ⁿ è 1 seguito da n zeri: 10⁷ = 10.000.000, con 7 zeri."
  },
  {
   "type": "text",
   "q": "Come si chiama il numero 10¹⁰⁰, cioè 1 seguito da 100 zeri?",
   "answer": [
    "googol",
    "un googol",
    "il googol"
   ],
   "explain": "Si chiama googol; da questo nome deriva quello di Google."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "In un torneo a eliminazione diretta ci sono 64 giocatori e a ogni turno si elimina la metà. Quanti turni servono per arrivare al vincitore?",
   "answer": 6,
   "unit": "turni",
   "explain": "64 = 2⁶: la metà ogni volta, 64 → 32 → 16 → 8 → 4 → 2 → 1, cioè 6 turni."
  },
  {
   "type": "mc",
   "q": "Quale scrittura è uguale a 5⁴ × 5²?",
   "options": [
    "5⁶",
    "5⁸",
    "25⁶"
   ],
   "answer": 0,
   "explain": "Stessa base: si sommano gli esponenti, 4 + 2 = 6."
  },
  {
   "type": "tf",
   "q": "7⁵ : 7⁵ = 0",
   "answer": false,
   "explain": "Un numero diviso per sé stesso fa 1: 7⁵ : 7⁵ = 7⁰ = 1."
  },
  {
   "type": "num",
   "q": "Quanto vale 4,5 × 10³?",
   "answer": 4500,
   "explain": "10³ = 1000 e 4,5 × 1000 = 4500."
  },
  {
   "type": "order",
   "q": "Metti in ordine i passaggi per calcolare 3 + 2³ × 4⁰.",
   "items": [
    "Calcolo le potenze: 2³ = 8 e 4⁰ = 1",
    "Eseguo la moltiplicazione: 8 × 1 = 8",
    "Eseguo l'addizione: 3 + 8 = 11"
   ],
   "explain": "Prima le potenze, poi la moltiplicazione, infine l'addizione: il risultato è 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Quale uguaglianza è SBAGLIATA?",
   "options": [
    "2⁴ × 2⁴ = 2⁸",
    "(2⁴)² = 2⁸",
    "2⁴ + 2⁴ = 2⁸"
   ],
   "answer": 2,
   "explain": "2⁴ + 2⁴ = 16 + 16 = 32 = 2⁵, non 2⁸. Per la somma non esistono proprietà."
  },
  {
   "type": "num",
   "q": "Le foglie di ninfea sul lago raddoppiano ogni giorno la superficie coperta. Dopo 30 giorni il lago è tutto coperto. Dopo quanti giorni era coperta solo metà del lago?",
   "answer": 29,
   "unit": "giorni",
   "explain": "Poiché la superficie raddoppia ogni giorno, il giorno prima era coperta la metà: 30 − 1 = 29."
  },
  {
   "type": "num",
   "q": "Un file occupa 2¹² byte e un altro 2⁹ byte. Quante volte il primo è più grande del secondo?",
   "answer": 8,
   "explain": "2¹² : 2⁹ = 2¹²⁻⁹ = 2³ = 8."
  },
  {
   "type": "mc",
   "q": "Qual è il modo più rapido per calcolare 5⁴ × 2⁴?",
   "options": [
    "(5 + 2)⁴ = 7⁴",
    "(5 × 2)⁴ = 10⁴ = 10.000",
    "10⁸"
   ],
   "answer": 1,
   "explain": "Stesso esponente: si moltiplicano le basi e l'esponente resta 4. 5 × 2 = 10, quindi 10⁴ = 10.000."
  },
  {
   "type": "tf",
   "q": "Marco scrive 2³ × 3³ = 6⁶. Il calcolo è corretto.",
   "answer": false,
   "explain": "Con lo stesso esponente si moltiplicano le basi e l'esponente resta lo stesso: 2³ × 3³ = 6³ = 216."
  }
 ]
});
