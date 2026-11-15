QBANK("ro", "m3-mat-piano-cartesiano", {
 "f": [
  {
   "type": "mc",
   "q": "Cum se numește axa orizontală a planului cartezian?",
   "options": [
    "axa y (a ordonatelor)",
    "originea",
    "axa x (a absciselor)"
   ],
   "answer": 2,
   "explain": "Axa orizontală este axa x, numită și axa absciselor; cea verticală este axa y."
  },
  {
   "type": "tf",
   "q": "Originea planului cartezian are coordonatele (0; 0).",
   "answer": true,
   "explain": "Originea este punctul în care se intersectează axele: atât x, cât și y sunt 0."
  },
  {
   "type": "mc",
   "q": "În ce cadran se află punctul P(−3; −6)?",
   "options": [
    "primo",
    "secondo",
    "terzo",
    "quarto"
   ],
   "answer": 2,
   "explain": "Cu x negativ și y negativ, punctul se află în cadranul al treilea (jos, în stânga)."
  },
  {
   "type": "num",
   "q": "Care este ordonata punctului A(3; 8)?",
   "answer": 8,
   "explain": "Coordonatele se scriu (abscisă; ordonată): ordonata este a doua, adică 8."
  },
  {
   "type": "text",
   "q": "Cum se numește punctul în care se intersectează cele două axe carteziene?",
   "answer": [
    "origine",
    "originea"
   ],
   "explain": "Punctul în care se intersectează axele, cu coordonatele (0; 0), se numește origine."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Calculează distanța dintre punctele A(2; −1) și B(2; 7).",
   "answer": 8,
   "explain": "Punctele au aceeași abscisă, deci sunt pe o dreaptă verticală: distanța = 7 − (−1) = 8."
  },
  {
   "type": "mc",
   "q": "Care este mijlocul segmentului cu capetele A(0; 6) și B(8; −2)?",
   "options": [
    "(4; 4)",
    "(4; 2)",
    "(8; 4)"
   ],
   "answer": 1,
   "explain": "Facem media coordonatelor: x = (0 + 8) : 2 = 4; y = (6 − 2) : 2 = 2. Mijlocul (4; 2)."
  },
  {
   "type": "mc",
   "q": "Care dintre aceste drepte trece prin origine?",
   "options": [
    "y = 2x + 1",
    "y = −3x",
    "y = x − 4"
   ],
   "answer": 1,
   "explain": "O dreaptă trece prin origine dacă nu are termen liber: y = −3x. Pentru x = 0 obținem y = 0."
  },
  {
   "type": "num",
   "q": "Care este panta dreptei care trece prin A(0; 1) și B(4; −7)?",
   "answer": -2,
   "explain": "m = (y₂ − y₁) : (x₂ − x₁) = (−7 − 1) : (4 − 0) = −8 : 4 = −2."
  },
  {
   "type": "tf",
   "q": "Punctul (2; 5) aparține dreptei y = 2x + 3.",
   "answer": false,
   "explain": "Fals: pentru x = 2 avem y = 2 · 2 + 3 = 7, nu 5. Punctul nu verifică ecuația."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Calculează aria triunghiului cu vârfurile A(1; 1), B(7; 1) și C(4; 6).",
   "answer": 15,
   "unit": "unități pătrate",
   "explain": "Baza AB este orizontală și măsoară 7 − 1 = 6. Înălțimea este distanța lui C la dreapta y = 1: 6 − 1 = 5. Aria = 6 × 5 : 2 = 15."
  },
  {
   "type": "num",
   "q": "Calculează distanța dintre A(−3; −2) și B(5; 4).",
   "answer": 10,
   "explain": "Diferențe: Δx = 5 − (−3) = 8 și Δy = 4 − (−2) = 6. Cu teorema lui Pitagora: √(8² + 6²) = √100 = 10."
  },
  {
   "type": "mc",
   "q": "În ce puncte dreapta y = 2x − 6 intersectează axa x și axa y?",
   "options": [
    "(−3; 0) e (0; 6)",
    "(6; 0) e (0; −3)",
    "(3; 0) e (0; −6)",
    "(0; 3) e (−6; 0)"
   ],
   "answer": 2,
   "explain": "Axa x: punem y = 0, deci 2x = 6 și x = 3, punctul (3; 0). Axa y: punem x = 0, deci y = −6, punctul (0; −6)."
  },
  {
   "type": "tf",
   "q": "Dreptele y = 2x + 1 și y = −x/2 + 3 sunt perpendiculare.",
   "answer": true,
   "explain": "Două drepte sunt perpendiculare dacă produsul pantelor lor este −1: 2 × (−1/2) = −1."
  },
  {
   "type": "order",
   "q": "Ordonează aceste puncte după distanța față de origine, de la cel mai apropiat la cel mai îndepărtat.",
   "items": [
    "A(0; 3)",
    "B(3; 4)",
    "C(−6; 8)",
    "D(5; −12)"
   ],
   "explain": "Distanțele față de O: A = 3; B = √(9 + 16) = 5; C = √(36 + 64) = 10; D = √(25 + 144) = 13."
  }
 ]
});
