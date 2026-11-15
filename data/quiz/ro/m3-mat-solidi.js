QBANK("ro", "m3-mat-solidi", {
 "f": [
  {
   "type": "mc",
   "q": "Care corp are 6 fețe pătrate toate egale?",
   "options": [
    "sfera",
    "cubo",
    "cono"
   ],
   "answer": 1,
   "explain": "Cubul are 6 fețe pătrate egale. Sfera și conul sunt corpuri de rotație."
  },
  {
   "type": "tf",
   "q": "Sfera este un poliedru.",
   "answer": false,
   "explain": "Fals: un poliedru are doar fețe plane. Sfera are suprafața curbă, deci este un corp de rotație."
  },
  {
   "type": "num",
   "q": "Câte fețe are o piramidă cu baza pătrată?",
   "answer": 5,
   "explain": "Are 1 bază pătrată și 4 fețe laterale triunghiulare: în total 5 fețe."
  },
  {
   "type": "mc",
   "q": "O doză de băutură are forma unui…",
   "options": [
    "cono",
    "prisma",
    "cilindro"
   ],
   "answer": 2,
   "explain": "O doză are două baze circulare egale și suprafața laterală curbă: este un cilindru."
  },
  {
   "type": "text",
   "q": "Cum se numește corpul obținut prin rotirea unui triunghi dreptunghic în jurul unei catete?",
   "answer": [
    "con",
    "conul"
   ],
   "explain": "Rotind un triunghi dreptunghic în jurul unei catete se obține un con."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un borcan cilindric are raza de 3 cm și înălțimea de 5 cm. Care este volumul lui? (π = 3,14)",
   "answer": 141.3,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = π × r² × h = 3,14 × 3² × 5 = 3,14 × 45 = 141,3 cm³."
  },
  {
   "type": "num",
   "q": "Un corneț de înghețată are raza bazei de 3 cm și înălțimea de 4 cm. Care este volumul lui? (π = 3,14)",
   "answer": 37.68,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = (π × r² × h) : 3 = (3,14 × 9 × 4) : 3 = 113,04 : 3 = 37,68 cm³."
  },
  {
   "type": "num",
   "q": "O piscină are forma unui paralelipiped de 10 m × 5 m × 2 m. Câți litri de apă conține când este plină?",
   "answer": 100000,
   "unit": "litri",
   "explain": "V = 10 × 5 × 2 = 100 m³. Cum 1 m³ = 1000 litri, piscina conține 100 × 1000 = 100 000 litri."
  },
  {
   "type": "mc",
   "q": "Aria totală a unui cub este 54 cm². Cât măsoară muchia?",
   "options": [
    "9 cm",
    "3 cm",
    "6 cm"
   ],
   "answer": 1,
   "explain": "At = 6 × s² = 54, deci s² = 54 : 6 = 9 și s = √9 = 3 cm."
  },
  {
   "type": "tf",
   "q": "Dacă dublăm muchia unui cub, volumul lui se dublează.",
   "answer": false,
   "explain": "Fals: V = s³. Cu muchia 2s avem (2s)³ = 8s³, deci volumul devine de 8 ori mai mare."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un recipient cilindric cu raza de 5 cm, umplut cu apă până la înălțimea de 12 cm, este golit într-o tavă cu baza pătrată de latură 10 cm. Până la ce înălțime ajunge apa în tavă? (π = 3,14)",
   "answer": 9.42,
   "tol": 0.02,
   "unit": "cm",
   "explain": "Volumul apei = 3,14 × 5² × 12 = 942 cm³. Aria bazei tăvii = 10 × 10 = 100 cm². Înălțimea = 942 : 100 = 9,42 cm."
  },
  {
   "type": "num",
   "q": "Un bloc de lemn este un paralelipiped de 20 cm × 10 cm × 5 cm cu greutatea specifică 0,6 g/cm³. Cât cântărește?",
   "answer": 600,
   "unit": "g",
   "explain": "Volumul = 20 × 10 × 5 = 1000 cm³. Greutatea = volum × greutate specifică = 1000 × 0,6 = 600 g."
  },
  {
   "type": "mc",
   "q": "Un cilindru are raza de 3 cm și înălțimea de 10 cm. Care este aria suprafeței sale laterale? (π = 3,14)",
   "options": [
    "94,2 cm²",
    "188,4 cm²",
    "282,6 cm²"
   ],
   "answer": 1,
   "explain": "Aria laterală = 2 × π × r × h = 2 × 3,14 × 3 × 10 = 188,4 cm². Este aria dreptunghiului obținut prin desfășurarea suprafeței."
  },
  {
   "type": "tf",
   "q": "Pentru volumul unui cilindru cu r = 4 cm și h = 5 cm, Marcu calculează 3,14 × 4 × 5 = 62,8 cm³. Calculul lui este corect.",
   "answer": false,
   "explain": "Fals: în formulă raza trebuie ridicată la pătrat. V = 3,14 × 4² × 5 = 3,14 × 80 = 251,2 cm³."
  },
  {
   "type": "order",
   "q": "Ordonează aceste corpuri de la cel mai mic la cel mai mare volum.",
   "items": [
    "cub cu muchia de 3 cm",
    "paralelipiped 2 cm × 3 cm × 5 cm",
    "cilindru cu raza de 2 cm și înălțimea de 3 cm (π = 3,14)",
    "prismă cu aria bazei de 10 cm² și înălțimea de 4 cm",
    "cub cu muchia de 4 cm"
   ],
   "explain": "Volume: 27 cm³; 30 cm³; 3,14 × 4 × 3 = 37,68 cm³; 10 × 4 = 40 cm³; 64 cm³."
  }
 ]
});
