QBANK("ro", "m3-mat-cerchio", {
 "f": [
  {
   "type": "mc",
   "q": "Raza unui cerc este distanța dintre…",
   "options": [
    "centru și un punct de pe cerc",
    "două puncte oarecare de pe cerc",
    "două puncte opuse de pe cerc"
   ],
   "answer": 0,
   "explain": "Raza unește centrul cu orice punct de pe cerc."
  },
  {
   "type": "num",
   "q": "Raza unei roți măsoară 7 cm. Cât măsoară diametrul?",
   "answer": 14,
   "unit": "cm",
   "explain": "Diametrul este dublul razei: 7 × 2 = 14 cm."
  },
  {
   "type": "tf",
   "q": "Diametrul este dublul razei.",
   "answer": true,
   "explain": "d = 2r: diametrul trece prin centru și unește două puncte opuse, deci este format din două raze."
  },
  {
   "type": "mc",
   "q": "Care formulă dă lungimea cercului (circumferința)?",
   "options": [
    "πr²",
    "πr",
    "2πr"
   ],
   "answer": 2,
   "explain": "Lungimea cercului este C = 2πr (sau πd). πr² este formula ariei discului."
  },
  {
   "type": "text",
   "q": "Cum se numește partea de disc cuprinsă între două raze? (două cuvinte)",
   "answer": [
    "sector circular",
    "sectorul circular",
    "sector"
   ],
   "explain": "Partea de disc dintre două raze este sectorul circular, ca o felie de tort."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "O pizza are diametrul de 30 cm. Cât de lungă este marginea ei, adică circumferința? (π = 3,14)",
   "answer": 94.2,
   "tol": 0.05,
   "unit": "cm",
   "explain": "C = π × d = 3,14 × 30 = 94,2 cm."
  },
  {
   "type": "num",
   "q": "Care este aria unui disc cu raza de 6 cm? (π = 3,14)",
   "answer": 113.04,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "A = π × r² = 3,14 × 6² = 3,14 × 36 = 113,04 cm²."
  },
  {
   "type": "mc",
   "q": "Un disc are aria de 78,5 cm². Cât măsoară raza? (π = 3,14)",
   "options": [
    "10 cm",
    "5 cm",
    "25 cm"
   ],
   "answer": 1,
   "explain": "r² = A : π = 78,5 : 3,14 = 25, deci r = √25 = 5 cm."
  },
  {
   "type": "tf",
   "q": "Dacă raza unui cerc se dublează, se dublează și lungimea cercului.",
   "answer": true,
   "explain": "C = 2πr este proporțională cu raza: rază dublă, circumferință dublă (aria devine în schimb de patru ori mai mare)."
  },
  {
   "type": "mc",
   "q": "Un arc de 180° corespunde…",
   "options": [
    "un quarto della circonferenza",
    "l'intera circonferenza",
    "metà della circonferenza"
   ],
   "answer": 2,
   "explain": "180° este jumătate din 360°, deci arcul este o semicircumferință: jumătate din cerc."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "O roată de bicicletă are raza de 35 cm. Câți metri parcurge în 100 de rotații complete? (π = 3,14)",
   "answer": 219.8,
   "tol": 0.05,
   "unit": "m",
   "explain": "O rotație = 2 × 3,14 × 35 = 219,8 cm. În 100 de rotații: 219,8 × 100 = 21 980 cm = 219,8 m."
  },
  {
   "type": "num",
   "q": "O fântână circulară cu raza de 12 m este înconjurată de o alee lată de 1 m. Care este aria aleii? (π = 3,14)",
   "answer": 78.5,
   "tol": 0.05,
   "unit": "m²",
   "explain": "Aleea este o coroană circulară cu R = 13 m și r = 12 m: A = 3,14 × (13² − 12²) = 3,14 × (169 − 144) = 3,14 × 25 = 78,5 m²."
  },
  {
   "type": "mc",
   "q": "Un cerc are diametrul de 14 cm. O dreaptă se află la 7 cm de centrul lui. Cum este dreapta față de cerc?",
   "options": [
    "secante",
    "esterna",
    "tangente"
   ],
   "answer": 2,
   "explain": "Raza este 14 : 2 = 7 cm. Distanța de la centru este egală cu raza, deci dreapta are un singur punct comun: este tangentă."
  },
  {
   "type": "num",
   "q": "Un sector circular are raza de 10 cm și unghiul la centru de 72°. Care este aria lui? (π = 3,14)",
   "answer": 62.8,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "Aria discului = 3,14 × 10² = 314 cm². 72° reprezintă 72/360 = 1/5 din unghiul plin, deci 314 : 5 = 62,8 cm²."
  },
  {
   "type": "order",
   "q": "Ordonează aceste cercuri de la cea mai scurtă la cea mai lungă circumferință.",
   "items": [
    "cerc cu raza de 2 cm",
    "cerc cu diametrul de 6 cm",
    "cerc cu raza de 4 cm",
    "cerc cu diametrul de 10 cm"
   ],
   "explain": "Cu π = 3,14: raza 2 cm → 12,56 cm; diametrul 6 cm → 18,84 cm; raza 4 cm → 25,12 cm; diametrul 10 cm → 31,4 cm."
  }
 ]
});
