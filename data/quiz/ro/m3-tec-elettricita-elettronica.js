QBANK("ro", "m3-tec-elettricita-elettronica", {
 "f": [
  {
   "type": "mc",
   "q": "Ce instrument măsoară intensitatea curentului electric?",
   "options": [
    "Voltmetru",
    "Ampermetru",
    "Ohmmetru"
   ],
   "answer": 1,
   "explain": "Ampermetrul măsoară intensitatea curentului în amperi (A)."
  },
  {
   "type": "tf",
   "q": "Apa sărată nu conduce curentul electric.",
   "answer": false,
   "explain": "Fals: sărurile dizolvate permit trecerea sarcinilor, deci apa sărată conduce."
  },
  {
   "type": "text",
   "q": "Cum se numește dioda care emite lumină? (sigla de trei litere)",
   "answer": [
    "led",
    "un led",
    "ledul"
   ],
   "explain": "LED = Light Emitting Diode, „diodă emițătoare de lumină”."
  },
  {
   "type": "mc",
   "q": "În ce unitate se măsoară puterea electrică?",
   "options": [
    "Ohm",
    "Amper",
    "Watt"
   ],
   "answer": 2,
   "explain": "Puterea se măsoară în wați (W): P = V × I."
  },
  {
   "type": "num",
   "q": "Câți volți are o baterie obișnuită AA?",
   "answer": 1.5,
   "unit": "V",
   "explain": "O baterie AA furnizează 1,5 V."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "O sobă electrică conectată la 230 V absoarbe 6 A. Ce putere are, în wați?",
   "answer": 1380,
   "unit": "W",
   "explain": "P = V × I = 230 × 6 = 1380 W."
  },
  {
   "type": "num",
   "q": "Un rezistor de 1000 Ω este conectat la 5 V. Câți miliamperi (mA) îl străbat?",
   "answer": 5,
   "unit": "mA",
   "explain": "I = V ÷ R = 5 ÷ 1000 = 0,005 A = 5 mA."
  },
  {
   "type": "mc",
   "q": "Trei becuri identice sunt conectate în serie la o baterie de 9 V. Ce tensiune este la bornele fiecăruia?",
   "options": [
    "9 V",
    "3 V",
    "27 V"
   ],
   "answer": 1,
   "explain": "În serie tensiunea se împarte în mod egal: 9 V ÷ 3 = 3 V."
  },
  {
   "type": "tf",
   "q": "Un tranzistor poate funcționa ca un întrerupător comandat de un semnal electric.",
   "answer": true,
   "explain": "Adevărat: un semnal mic pe un terminal controlează trecerea unui curent mai mare. Cipurile conțin miliarde de tranzistoare."
  },
  {
   "type": "order",
   "q": "Pune în ordine pașii pentru calculul rezistorului de protecție al unui LED.",
   "items": [
    "Stabilește curentul dorit al LED-ului",
    "Scade tensiunea LED-ului din cea a sursei",
    "Calculează R = V ÷ I",
    "Alege valoarea standard egală sau puțin mai mare"
   ],
   "explain": "Mai întâi curentul, apoi tensiunea de absorbit, apoi legea lui Ohm, în final valoarea standard."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Vrei să aprinzi un LED de 2 V și 10 mA cu o baterie de 9 V. Ce rezistor în serie (în Ω) este necesar?",
   "answer": 700,
   "unit": "Ω",
   "explain": "Rezistorul trebuie să absoarbă 9 − 2 = 7 V. 10 mA = 0,01 A, deci R = 7 ÷ 0,01 = 700 Ω."
  },
  {
   "type": "num",
   "q": "Un bec de 100 W rămâne aprins 8 ore. Energia costă 0,25 € pe kWh. Cât costă (în €)?",
   "answer": 0.2,
   "tol": 0.005,
   "unit": "€",
   "explain": "100 W × 8 h = 800 Wh = 0,8 kWh. Cost: 0,8 × 0,25 = 0,20 €."
  },
  {
   "type": "mc",
   "q": "Dacă tensiunea la bornele unui rezistor se dublează, iar rezistența rămâne aceeași, ce se întâmplă cu curentul?",
   "options": [
    "Se înjumătățește",
    "Se dublează",
    "Rămâne la fel",
    "Devine de patru ori mai mare"
   ],
   "answer": 1,
   "explain": "Conform legii lui Ohm I = V ÷ R: la R constant, tensiunea și curentul sunt direct proporționale."
  },
  {
   "type": "mc",
   "q": "Vrei o alarmă care sună doar când o persoană se mișcă în fața ușii. Ce senzor alegi?",
   "options": [
    "Fotorezistor (LDR)",
    "Termistor (NTC)",
    "Senzor infraroșu pasiv (PIR)"
   ],
   "answer": 2,
   "explain": "PIR detectează mișcarea corpurilor calde; fotorezistorul simte doar lumina, iar termistorul temperatura."
  },
  {
   "type": "tf",
   "q": "Pentru a măsura tensiunea unei baterii, se conectează ampermetrul direct la cei doi poli ai ei.",
   "answer": false,
   "explain": "Fals: tensiunea se măsoară cu voltmetrul; ampermetrul are rezistență foarte mică și, conectat așa, ar produce un scurtcircuit."
  }
 ]
});
