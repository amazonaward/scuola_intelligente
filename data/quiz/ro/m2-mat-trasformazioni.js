QBANK("ro", "m2-mat-trasformazioni", {
 "f": [
  {
   "type": "mc",
   "q": "Care transformare „răstoarnă” o figură ca o oglindă?",
   "options": [
    "Translația",
    "Rotația",
    "Simetria axială"
   ],
   "answer": 2,
   "explain": "Simetria axială reflectă figura față de o dreaptă, axa, ca o oglindă."
  },
  {
   "type": "tf",
   "q": "O translație păstrează forma și dimensiunile unei figuri.",
   "answer": true,
   "explain": "Este o izometrie: mută figura fără a o deforma sau a o mări."
  },
  {
   "type": "num",
   "q": "Câte axe de simetrie are un dreptunghi care nu este pătrat?",
   "answer": 2,
   "explain": "Are 2 axe: una verticală și una orizontală, prin mijloacele laturilor opuse. Diagonalele nu sunt axe."
  },
  {
   "type": "text",
   "q": "Cum se numește punctul care rămâne fix într-o rotație?",
   "answer": [
    "centru",
    "centrul",
    "centru de rotație",
    "centrul de rotație",
    "centrul rotatiei",
    "centru de rotatie"
   ],
   "explain": "Este centrul de rotație: figura se rotește în jurul acestui punct."
  },
  {
   "type": "mc",
   "q": "Care transformare schimbă dimensiunile unei figuri?",
   "options": [
    "Translația",
    "Rotația",
    "Omotetia"
   ],
   "answer": 2,
   "explain": "Doar omotetia mărește sau micșorează; translația și rotația sunt izometrii."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Punctul A(3; −2) este translatat cu vectorul v(−5; 6). Cât este ordonata (y) lui A'?",
   "answer": 4,
   "explain": "y' = −2 + 6 = 4 (și x' = 3 − 5 = −2, deci A'(−2; 4))."
  },
  {
   "type": "mc",
   "q": "Care este simetricul lui P(−4; 7) față de axa y?",
   "options": [
    "(4; −7)",
    "(4; 7)",
    "(−4; −7)"
   ],
   "answer": 1,
   "explain": "Față de axa y abscisa își schimbă semnul, iar ordonata rămâne aceeași: (4; 7)."
  },
  {
   "type": "num",
   "q": "Punctul B(4; −9) este transformat prin simetria centrală față de origine. Cât este ordonata lui B'?",
   "answer": 9,
   "explain": "În simetria față de origine ambele coordonate își schimbă semnul: B'(−4; 9)."
  },
  {
   "type": "num",
   "q": "O mașină adevărată are lungimea de 4 m. Modelul ei este asemenea, cu raportul de asemănare 1/25. Câți centimetri are modelul în lungime?",
   "answer": 16,
   "unit": "cm",
   "explain": "4 m = 400 cm; 400 ÷ 25 = 16 cm."
  },
  {
   "type": "tf",
   "q": "Într-o simetrie axială fiecare punct și corespondentul său sunt la aceeași distanță de axă.",
   "answer": true,
   "explain": "Axa este mediatoarea segmentului care unește P și P': este perpendiculară pe el și trece prin mijlocul lui."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Două figuri asemenea au ariile de 20 cm² și 45 cm². Care este raportul de asemănare dintre figura mare și cea mică?",
   "answer": 1.5,
   "explain": "Ariile sunt în raportul k²: k² = 45 ÷ 20 = 2,25, deci k = √2,25 = 1,5."
  },
  {
   "type": "mc",
   "q": "Se aplică mai întâi translația de vector v(2; 3), apoi cea de vector w(−5; 1). Rezultatul este echivalent cu o translație de vector…",
   "options": [
    "(7; 2)",
    "(−3; −4)",
    "(−3; 4)"
   ],
   "answer": 2,
   "explain": "Se adună componentele: (2 + (−5); 3 + 1) = (−3; 4)."
  },
  {
   "type": "mc",
   "q": "Luca spune: „Rotind cu 90° (în sens trigonometric) în jurul originii, punctul (3; 1) devine (1; 3)”. Care este greșeala?",
   "options": [
    "A schimbat doar coordonatele între ele, dar rotația duce (x; y) în (−y; x), adică în (−1; 3).",
    "O rotație de 90° nu schimbă coordonatele.",
    "Punctul ajunge în (−3; −1)."
   ],
   "answer": 0,
   "explain": "Schimbarea coordonatelor este o simetrie față de dreapta y = x, nu o rotație de 90°."
  },
  {
   "type": "num",
   "q": "Punctul P(2; 3) este mai întâi reflectat față de axa x, apoi translatat cu vectorul (1; −2). Cât este ordonata punctului final?",
   "answer": -5,
   "explain": "Reflectat: (2; −3). Translatat: (2 + 1; −3 − 2) = (3; −5). Ordonata este −5."
  },
  {
   "type": "order",
   "q": "Ordonează figurile de la cel mai mic la cel mai mare număr de axe de simetrie.",
   "items": [
    "Triunghi scalen",
    "Romb (nu pătrat)",
    "Pentagon regulat",
    "Hexagon regulat"
   ],
   "explain": "Axe: scalen 0, romb 2 (diagonalele), pentagon regulat 5, hexagon regulat 6."
  }
 ]
});
