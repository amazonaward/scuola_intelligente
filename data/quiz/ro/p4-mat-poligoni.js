QBANK("ro", "p4-mat-poligoni", {
  "f": [
    {
      "type": "mc",
      "q": "Câte laturi are un pentagon?",
      "options": [
        "4",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Penta- înseamnă cinci: pentagonul are 5 laturi."
    },
    {
      "type": "tf",
      "q": "Un triunghi echilateral are toate cele trei laturi egale.",
      "answer": true,
      "explain": "Echilateral înseamnă «cu laturi egale»: cele trei unghiuri ale lui sunt toate de 60°."
    },
    {
      "type": "text",
      "q": "Ce formă are indicatorul STOP?",
      "answer": [
        "octogon",
        "un octogon",
        "octogonul"
      ],
      "explain": "Indicatorul STOP este un octogon: are 8 laturi."
    },
    {
      "type": "num",
      "q": "Câte diagonale are un patrulater?",
      "answer": 2,
      "explain": "Se pot uni două perechi de vârfuri care nu sunt vecine: sunt 2 diagonale."
    },
    {
      "type": "mc",
      "q": "Care triunghi are toate cele trei laturi diferite?",
      "options": [
        "echilateral",
        "isoscel",
        "scalen"
      ],
      "answer": 2,
      "explain": "Scalenul are trei laturi diferite; isoscelul are două egale; echilateralul trei egale."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un triunghi isoscel are unghiul de la vârf de 40°. Cât măsoară fiecare dintre cele două unghiuri de la bază?",
      "answer": 70,
      "unit": "°",
      "explain": "Suma este 180°: 180 − 40 = 140°. Unghiurile de la bază sunt egale: 140 : 2 = 70°."
    },
    {
      "type": "mc",
      "q": "Un patrulater are patru unghiuri drepte, dar laturile vecine au lungimi diferite. Ce este?",
      "options": [
        "dreptunghi",
        "romb",
        "trapez"
      ],
      "answer": 0,
      "explain": "Dreptunghiul are 4 unghiuri drepte și laturile egale două câte două, nu toate egale."
    },
    {
      "type": "tf",
      "q": "Un trapez are întotdeauna patru laturi egale.",
      "answer": false,
      "explain": "Trapezul are doar o pereche de laturi paralele; laturile sunt de obicei diferite. Patru laturi egale au rombul și pătratul."
    },
    {
      "type": "num",
      "q": "Câte plăci în formă de triunghi echilateral încap în jurul unui punct, fără goluri?",
      "answer": 6,
      "explain": "Fiecare unghi are 60° și 360° : 60° = 6."
    },
    {
      "type": "mc",
      "q": "Un triunghi are un unghi de 120°. Cum se numește după unghiuri?",
      "options": [
        "ascuțitunghic",
        "dreptunghic",
        "obtuzunghic"
      ],
      "answer": 2,
      "explain": "Un unghi mai mare de 90° este obtuz: triunghiul este obtuzunghic."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un romb are două unghiuri opuse de câte 70°. Cât măsoară fiecare dintre celelalte două unghiuri?",
      "answer": 110,
      "unit": "°",
      "explain": "Suma este 360°. 70 + 70 = 140°; 360 − 140 = 220°. Celelalte două unghiuri sunt egale: 220 : 2 = 110°."
    },
    {
      "type": "mc",
      "q": "De ce nu se poate placa o podea fără goluri folosind doar pentagoane regulate?",
      "options": [
        "Pentru că pentagoanele au prea multe laturi",
        "Pentru că pentagoanele sunt concave",
        "Unghiul de 108° nu încape un număr exact de ori în 360°: cu 3 pentagoane rămâne un gol, cu 4 se suprapun"
      ],
      "answer": 2,
      "explain": "3 × 108° = 324° (lipsește o bucată) și 4 × 108° = 432° (prea mult). Ca să umple 360°, unghiul trebuie să încapă un număr exact de ori."
    },
    {
      "type": "order",
      "q": "Așază în ordine pașii pentru a afla al treilea unghi al unui triunghi cu unghiuri de 65° și 45°.",
      "items": [
        "Îmi amintesc că unghiurile unui triunghi însumează 180°",
        "Adun cele două unghiuri cunoscute: 65° + 45° = 110°",
        "Scad din 180°: 180° − 110° = 70°",
        "Al treilea unghi măsoară 70°"
      ],
      "explain": "Mai întâi îți amintești regula (180°), apoi aduni unghiurile cunoscute, apoi scazi din total."
    },
    {
      "type": "mc",
      "q": "Care afirmație este adevărată?",
      "options": [
        "Orice romb este pătrat",
        "Orice pătrat este romb",
        "Orice dreptunghi are patru laturi egale"
      ],
      "answer": 1,
      "explain": "Pătratul are 4 laturi egale, deci este și romb. Dar un romb poate avea unghiuri care nu sunt drepte, iar un dreptunghi poate avea laturi diferite."
    },
    {
      "type": "num",
      "q": "Din fiecare vârf al unui pentagon pornesc 2 diagonale. Câte diagonale are pentagonul în total?",
      "answer": 5,
      "explain": "5 vârfuri × 2 = 10, dar așa fiecare diagonală e numărată de două ori (câte una pentru fiecare capăt): 10 : 2 = 5."
    }
  ]
});
