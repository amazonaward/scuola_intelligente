QBANK("ro", "m1-geo-coordinate", {
 "f": [
  {
   "type": "mc",
   "q": "Care paralelă se află la 66° 33′ Nord?",
   "options": [
    "Tropicul Capricornului",
    "Cercul Polar de Nord",
    "Cercul Polar de Sud"
   ],
   "answer": 1,
   "explain": "66° 33′ Nord este Cercul Polar de Nord; Cercul Polar de Sud este la aceeași latitudine, dar în sud."
  },
  {
   "type": "tf",
   "q": "Longitudinea se măsoară începând de la Ecuator.",
   "answer": false,
   "explain": "Latitudinea se măsoară de la Ecuator; longitudinea se măsoară de la meridianul Greenwich."
  },
  {
   "type": "mc",
   "q": "Sydney se află la 33,9° Sud. În ce emisferă este?",
   "options": [
    "Australă (sudică)",
    "Boreală (nordică)",
    "Occidentală"
   ],
   "answer": 0,
   "explain": "Sud înseamnă emisfera australă, adică sub Ecuator."
  },
  {
   "type": "text",
   "q": "Cu ce sigla de trei litere se notează ora meridianului Greenwich (timpul universal coordonat)?",
   "answer": [
    "utc"
   ],
   "explain": "UTC este ora de referință: Italia este în UTC+1 (UTC+2 vara)."
  },
  {
   "type": "mc",
   "q": "Meridianele sunt semicercuri care merg…",
   "options": [
    "de la Ecuator la tropice",
    "de la vest la est",
    "de la un pol la celălalt"
   ],
   "answer": 2,
   "explain": "Meridianele leagă Polul Nord de Polul Sud; paralelele merg de la vest la est."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Două orașe se află pe același meridian, unul la 52° N și celălalt la 40° N. Cam câți km le despart? (1° de latitudine ≈ 111 km)",
   "answer": 1332,
   "tol": 10,
   "unit": "km",
   "explain": "Diferența: 52 − 40 = 12°. Distanța: 12 × 111 = 1.332 km."
  },
  {
   "type": "mc",
   "q": "Un punct are coordonatele 34° S, 151° E. În ce emisfere se află?",
   "options": [
    "Boreală și occidentală",
    "Boreală și orientală",
    "Australă și orientală",
    "Australă și occidentală"
   ],
   "answer": 2,
   "explain": "S = Sud → emisfera australă; E = Est → emisfera orientală."
  },
  {
   "type": "tf",
   "q": "China, lată cât cinci fusuri orare, folosește cinci ore diferite.",
   "answer": false,
   "explain": "Limitele fusurilor urmează adesea granițele statelor: China folosește o singură oră pentru toată țara."
  },
  {
   "type": "text",
   "q": "Ce instrument a construit John Harrison pentru a rezolva problema longitudinii pe mare?",
   "answer": [
    "cronometru",
    "cronometru marin",
    "cronometrul",
    "un cronometru"
   ],
   "explain": "Cronometrul marin al lui Harrison păstra ora portului de plecare: din diferența față de ora locală se calculează longitudinea (1 oră = 15°)."
  },
  {
   "type": "order",
   "q": "Ordonează aceste orașe de la vest la est (după fusul orar).",
   "items": [
    "New York (UTC−5)",
    "Londra (UTC+0)",
    "Roma (UTC+1)",
    "Moscova (UTC+3)",
    "Tokyo (UTC+9)"
   ],
   "explain": "Cu cât mergi mai spre est, cu atât numărul UTC crește: −5, 0, +1, +3, +9."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Pe o navă, Soarele este în punctul cel mai înalt (amiaza locală) când cronometrul, reglat pe ora Greenwich, arată 15:00. La câte grade longitudine vestică se află nava?",
   "answer": 45,
   "tol": 0,
   "unit": "°",
   "explain": "Au trecut 3 ore de la amiaza de la Greenwich, deci nava este la vest: 3 × 15° = 45° Vest."
  },
  {
   "type": "mc",
   "q": "Ilaria spune: „La Roma (UTC+1) este ora 15, deci la New York (UTC−5) este ora 21, pentru că 15 + 6 = 21”. Unde este greșeala?",
   "options": [
    "Diferența este de 4 ore, nu de 6",
    "Nu este nicio greșeală",
    "New York este la vest: orele se scad, deci este ora 9"
   ],
   "answer": 2,
   "explain": "Spre vest Soarele ajunge mai târziu, deci ora este mai devreme: 15 − 6 = 9."
  },
  {
   "type": "tf",
   "q": "Un grad de longitudine are aproximativ 111 km oriunde pe Pământ.",
   "answer": false,
   "explain": "Meridianele se întâlnesc la poli: un grad de longitudine măsoară 111 km la Ecuator și se scurtează până la zero la poli."
  },
  {
   "type": "mc",
   "q": "Roma și New York au aproape aceeași latitudine, dar orele lor sunt foarte diferite. De ce?",
   "options": [
    "Pentru că ora depinde de longitudine, iar cele două orașe sunt pe meridiane foarte îndepărtate",
    "Pentru că ora depinde de latitudine, iar New York este mai la sud",
    "Pentru că New York este în emisfera australă"
   ],
   "answer": 0,
   "explain": "Fusurile orare sunt felii de longitudine (de câte 15°): diferența de oră dintre două locuri depinde de depărtarea est-vest."
  },
  {
   "type": "num",
   "q": "Un avion zboară drept spre nord, de-a lungul unui meridian, de la Ecuator până la paralela de 30° N. Câți km parcurge aproximativ? (1° ≈ 111 km)",
   "answer": 3330,
   "tol": 30,
   "unit": "km",
   "explain": "De la Ecuator (0°) la 30° N sunt 30 de grade: 30 × 111 = 3.330 km."
  }
 ]
});
