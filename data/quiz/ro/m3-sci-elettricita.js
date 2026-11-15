QBANK("ro", "m3-sci-elettricita", {
 "f": [
  {
   "type": "mc",
   "q": "Ce se întâmplă între două sarcini electrice de semne opuse?",
   "options": [
    "si respingono",
    "si attraggono",
    "non interagiscono"
   ],
   "answer": 1,
   "explain": "Sarcinile de semne opuse (una pozitivă și una negativă) se atrag; cele de același semn se resping."
  },
  {
   "type": "tf",
   "q": "Cuprul este un bun conductor de electricitate.",
   "answer": true,
   "explain": "Metalele, în special cuprul, lasă curentul să treacă ușor: de aceea firele electrice sunt din cupru."
  },
  {
   "type": "mc",
   "q": "Cu ce aparat se măsoară intensitatea curentului electric?",
   "options": [
    "amperometro",
    "voltmetro",
    "termometro"
   ],
   "answer": 0,
   "explain": "Intensitatea curentului, în amperi, se măsoară cu ampermetrul; voltmetrul măsoară tensiunea."
  },
  {
   "type": "num",
   "q": "Câți volți furnizează o baterie obișnuită de tip AA?",
   "answer": 1.5,
   "tol": 0.01,
   "unit": "V",
   "explain": "O baterie AA alcalină sau zinc-carbon furnizează 1,5 V; de aceea trei baterii în serie dau 4,5 V."
  },
  {
   "type": "text",
   "q": "Care este unitatea de măsură a tensiunii electrice?",
   "answer": [
    "volt",
    "voltul",
    "volți",
    "v"
   ],
   "explain": "Tensiunea electrică se măsoară în volți (V), în onoarea lui Alessandro Volta."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un bec de 60 W stă aprins 5 ore. Câți kWh consumă?",
   "answer": 0.3,
   "tol": 0.005,
   "unit": "kWh",
   "explain": "60 W = 0,06 kW. Energia = putere × timp = 0,06 × 5 = 0,3 kWh."
  },
  {
   "type": "num",
   "q": "Într-un circuit trece un curent de 2 A printr-un rezistor de 15 Ω. Care este tensiunea la capetele lui?",
   "answer": 30,
   "unit": "V",
   "explain": "Legea lui Ohm: V = R × I = 15 × 2 = 30 V."
  },
  {
   "type": "num",
   "q": "Trei rezistoare de 5 Ω, 10 Ω și 15 Ω sunt legate în serie. Care este rezistența totală?",
   "answer": 30,
   "unit": "Ω",
   "explain": "În serie, rezistențele se adună: 5 + 10 + 15 = 30 Ω."
  },
  {
   "type": "mc",
   "q": "Cum trebuie conectat un voltmetru pentru a măsura tensiunea la capetele unui bec?",
   "options": [
    "în serie",
    "în paralel",
    "la un singur capăt"
   ],
   "answer": 1,
   "explain": "Voltmetrul se conectează în paralel cu componenta, deoarece măsoară diferența de potențial dintre cele două capete ale ei."
  },
  {
   "type": "tf",
   "q": "O siguranță protejează aparatul dacă este conectată în paralel cu el.",
   "answer": false,
   "explain": "Fals: siguranța se conectează în serie, astfel încât, când curentul este prea mare, firul se topește și întrerupe circuitul."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un rezistor de 12 Ω și unul de 4 Ω sunt legate în paralel. Care este rezistența totală?",
   "answer": 3,
   "unit": "Ω",
   "explain": "În paralel: 1/R = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3, deci R = 3 Ω. (Sau produs : sumă = 48 : 16 = 3 Ω.)"
  },
  {
   "type": "num",
   "q": "O baterie de 9 V alimentează în serie două rezistoare, de 100 Ω și de 200 Ω. Câți miliamperi (mA) trec prin circuit?",
   "answer": 30,
   "unit": "mA",
   "explain": "Rezistența totală = 100 + 200 = 300 Ω. I = V : R = 9 : 300 = 0,03 A = 30 mA (1 A = 1000 mA)."
  },
  {
   "type": "mc",
   "q": "Un uscător de păr de 1500 W este conectat la rețeaua de 230 V. Ce curent absoarbe, aproximativ?",
   "options": [
    "circa 0,15 A",
    "circa 345 A",
    "circa 6,5 A"
   ],
   "answer": 2,
   "explain": "Din P = V × I rezultă I = P : V = 1500 : 230 ≈ 6,5 A."
  },
  {
   "type": "tf",
   "q": "Dacă adăugăm în serie un al doilea bec identic cu primul, curentul din circuit crește.",
   "answer": false,
   "explain": "Fals: în serie rezistențele se adună, rezistența totală crește și, la aceeași tensiune, curentul scade (I = V : R)."
  },
  {
   "type": "order",
   "q": "Pune în ordine drumul energiei electrice de la centrală la priza din casă.",
   "items": [
    "Apa sau aburul învârte turbina",
    "Alternatorul transformă mișcarea în curent electric",
    "Un transformator ridică tensiunea",
    "Curentul circulă pe liniile de înaltă tensiune",
    "Un alt transformator coboară tensiunea la 230 V"
   ],
   "explain": "Turbina antrenează alternatorul, care produce curent; tensiunea se ridică pentru a reduce pierderile pe linii, apoi se coboară la 230 V pentru uz casnic."
  }
 ]
});
