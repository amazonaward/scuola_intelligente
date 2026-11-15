QBANK("ro", "m1-mat-geometria-base", {
  "f": [
    {
      "type": "mc",
      "q": "Care dintre aceste elemente geometrice poate fi măsurat cu rigla?",
      "options": [
        "Dreapta",
        "Semidreapta",
        "Segmentul"
      ],
      "answer": 2,
      "explain": "Dreapta și semidreapta sunt nemărginite; segmentul are două capete, deci o lungime."
    },
    {
      "type": "tf",
      "q": "Un unghi drept măsoară 90°.",
      "answer": true,
      "explain": "Unghiul drept este format din două semidrepte perpendiculare și măsoară 90°."
    },
    {
      "type": "mc",
      "q": "Cum se numește unghiul care măsoară 180°?",
      "options": [
        "Unghi plin",
        "Unghi alungit",
        "Unghi drept"
      ],
      "answer": 1,
      "explain": "Cele două semidrepte sunt pe aceeași dreaptă: unghiul este alungit și măsoară 180°."
    },
    {
      "type": "num",
      "q": "Câte grade măsoară un unghi plin?",
      "answer": 360,
      "unit": "°",
      "explain": "Un unghi plin este o rotație completă: 360°."
    },
    {
      "type": "text",
      "q": "Cum se numește punctul care împarte un segment în două segmente congruente?",
      "answer": [
        "mijloc",
        "mijlocul",
        "punct de mijloc",
        "punctul de mijloc",
        "mijlocul segmentului"
      ],
      "explain": "Mijlocul M al segmentului AB este astfel încât AM ≅ MB."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Pe o dreaptă punctele A, B, C se află în această ordine. AB = 4,5 cm și AC = 11 cm. Cât măsoară BC?",
      "answer": 6.5,
      "tol": 0.01,
      "unit": "cm",
      "explain": "BC = AC − AB = 11 − 4,5 = 6,5 cm."
    },
    {
      "type": "num",
      "q": "Două unghiuri sunt suplementare și unul este dublul celuilalt. Cât măsoară unghiul mai mic?",
      "answer": 60,
      "unit": "°",
      "explain": "Suma 180° împărțită în 3 părți egale (1 + 2): 180 : 3 = 60°. Celălalt măsoară 120°."
    },
    {
      "type": "mc",
      "q": "Două unghiuri consecutive care împreună formează un unghi alungit se numesc…",
      "options": [
        "complementare",
        "adiacente (suplementare)",
        "opuse la vârf"
      ],
      "answer": 1,
      "explain": "Două unghiuri consecutive ale căror laturi necomune sunt pe aceeași dreaptă sunt adiacente; suma lor este 180°."
    },
    {
      "type": "tf",
      "q": "Mijlocul unui segment de 15 cm îl împarte în două părți de câte 7,5 cm.",
      "answer": true,
      "explain": "15 : 2 = 7,5 cm."
    },
    {
      "type": "mc",
      "q": "Cât face 90° − 36°40′ ?",
      "options": [
        "54°20′",
        "53°40′",
        "53°20′"
      ],
      "answer": 2,
      "explain": "90° = 89°60′. Deci 89°60′ − 36°40′ = 53°20′."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Pe aceeași dreaptă punctele A, B, C, D se află în această ordine. AB = 6 cm, BC este dublul lui AB, iar CD este jumătate din BC. Cât măsoară AD?",
      "answer": 24,
      "unit": "cm",
      "explain": "BC = 6 × 2 = 12 cm; CD = 12 : 2 = 6 cm; AD = 6 + 12 + 6 = 24 cm."
    },
    {
      "type": "num",
      "q": "A, B, C sunt coliniare în această ordine și AC = 30 cm. M este mijlocul lui AB, iar N este mijlocul lui BC. Cât măsoară MN?",
      "answer": 15,
      "unit": "cm",
      "explain": "MB = AB : 2 și BN = BC : 2, deci MN = (AB + BC) : 2 = AC : 2 = 15 cm."
    },
    {
      "type": "mc",
      "q": "Două unghiuri adiacente suplementare diferă cu 40°. Cât măsoară cel mai mare?",
      "options": [
        "70°",
        "140°",
        "110°"
      ],
      "answer": 2,
      "explain": "Suma 180°, diferența 40°: cel mare este (180 + 40) : 2 = 110°, cel mic 70°."
    },
    {
      "type": "tf",
      "q": "Două unghiuri opuse la vârf sunt întotdeauna congruente, iar două unghiuri adiacente nu sunt niciodată congruente.",
      "answer": false,
      "explain": "Unghiurile adiacente pot fi congruente: două unghiuri drepte de 90° sunt adiacente și egale."
    },
    {
      "type": "order",
      "q": "Pune în ordine pașii pentru a afla mijlocul unui segment AB cu rigla și compasul.",
      "items": [
        "Pun compasul în A și, cu o deschidere mai mare decât jumătate din AB, trasez un arc",
        "Cu aceeași deschidere pun compasul în B și trasez al doilea arc",
        "Marchez cele două puncte în care se intersectează arcele",
        "Unesc cele două puncte: dreapta taie AB în mijloc"
      ],
      "explain": "Arcele trasate din cele două capete se intersectează în două puncte; dreapta care le unește împarte AB în două părți egale."
    }
  ]
});
